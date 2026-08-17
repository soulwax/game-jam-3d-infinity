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
if(a[b]!==s){A.JK(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.zH(b)
return new s(c,this)}:function(){if(s===null)s=A.zH(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.zH(a).prototype
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
zM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xz(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.zK==null){A.Jn()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Ba("Return interceptor for "+A.x(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vk
if(o==null)o=$.vk=A.xy(n)
p=q[o]}if(p!=null)return p
p=A.Jt(a)
if(p!=null)return p
if(typeof a=="function")return B.jv
s=Object.getPrototypeOf(a)
if(s==null)return B.dK
if(s===Object.prototype)return B.dK
if(typeof q=="function"){o=$.vk
if(o==null)o=$.vk=A.xy(n)
Object.defineProperty(q,o,{value:B.c1,enumerable:false,writable:true,configurable:true})
return B.c1}return B.c1},
Av(a,b){if(a<0||a>4294967295)throw A.b(A.b0(a,0,4294967295,"length",null))
return J.Ax(new Array(a),b)},
Aw(a,b){if(a<0)throw A.b(A.o("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
yv(a,b){if(a<0)throw A.b(A.o("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
Ax(a,b){var s=A.c(a,b.i("u<0>"))
s.$flags=1
return s},
ET(a,b){var s=t.hO
return J.A3(s.a(a),s.a(b))},
Az(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EU(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Az(r))break;++b}return b},
EV(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.Az(q))break}return b},
eL(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ij.prototype
return J.l2.prototype}if(typeof a=="string")return J.ep.prototype
if(a==null)return J.ik.prototype
if(typeof a=="boolean")return J.l1.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dE.prototype
if(typeof a=="symbol")return J.h5.prototype
if(typeof a=="bigint")return J.h4.prototype
return a}if(a instanceof A.K)return a
return J.xz(a)},
aQ(a){if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dE.prototype
if(typeof a=="symbol")return J.h5.prototype
if(typeof a=="bigint")return J.h4.prototype
return a}if(a instanceof A.K)return a
return J.xz(a)},
cT(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dE.prototype
if(typeof a=="symbol")return J.h5.prototype
if(typeof a=="bigint")return J.h4.prototype
return a}if(a instanceof A.K)return a
return J.xz(a)},
CX(a){if(typeof a=="number")return J.h3.prototype
if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(!(a instanceof A.K))return J.fi.prototype
return a},
CY(a){if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(!(a instanceof A.K))return J.fi.prototype
return a},
CZ(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dE.prototype
if(typeof a=="symbol")return J.h5.prototype
if(typeof a=="bigint")return J.h4.prototype
return a}if(a instanceof A.K)return a
return J.xz(a)},
A1(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.CX(a).a5(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eL(a).aa(a,b)},
aZ(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Js(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)},
bl(a,b,c){return J.cT(a).l(a,b,c)},
eO(a,b){return J.cT(a).k(a,b)},
DJ(a,b){return J.CY(a).hh(a,b)},
k2(a,b){return J.cT(a).M(a,b)},
A2(a,b,c){return J.CZ(a).hj(a,b,c)},
DK(a,b,c){return J.CZ(a).hk(a,b,c)},
DL(a,b){return J.cT(a).cT(a,b)},
A3(a,b){return J.CX(a).G(a,b)},
A4(a,b){return J.aQ(a).p(a,b)},
nu(a,b){return J.cT(a).a9(a,b)},
DM(a,b){return J.cT(a).a2(a,b)},
A5(a){return J.cT(a).ga_(a)},
aH(a){return J.eL(a).gS(a)},
k3(a){return J.aQ(a).gO(a)},
DN(a){return J.aQ(a).ga3(a)},
Q(a){return J.cT(a).gv(a)},
cW(a){return J.aQ(a).gu(a)},
eP(a){return J.eL(a).gab(a)},
A6(a,b){return J.cT(a).V(a,b)},
e4(a,b,c){return J.cT(a).br(a,b,c)},
DO(a,b){return J.aQ(a).su(a,b)},
DP(a,b){return J.CY(a).aO(a,b)},
c1(a){return J.eL(a).q(a)},
A7(a,b){return J.cT(a).eI(a,b)},
l_:function l_(){},
l1:function l1(){},
ik:function ik(){},
im:function im(){},
eq:function eq(){},
lo:function lo(){},
fi:function fi(){},
dE:function dE(){},
h4:function h4(){},
h5:function h5(){},
u:function u(a){this.$ti=a},
l0:function l0(){},
qm:function qm(a){this.$ti=a},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h3:function h3(){},
ij:function ij(){},
l2:function l2(){},
ep:function ep(){}},A={yw:function yw(){},
xs(){return $},
E1(a,b,c){if(t.he.b(a))return new A.j9(a,b.i("@<0>").P(c).i("j9<1,2>"))
return new A.eU(a,b.i("@<0>").P(c).i("eU<1,2>"))},
AD(a){return new A.h6("Field '"+a+"' has been assigned during initialization.")},
a8(a){return new A.h6("Field '"+a+"' has not been initialized.")},
EX(a){return new A.h6("Field '"+a+"' has already been initialized.")},
xA(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
iW(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e3(a,b,c){return a},
zL(a){var s,r
for(s=$.cf.length,r=0;r<s;++r)if(a===$.cf[r])return!0
return!1},
hq(a,b,c,d){A.lA(b,"start")
if(c!=null){A.lA(c,"end")
if(b>c)A.f(A.b0(b,0,c,"start",null))}return new A.iV(a,b,c,d.i("iV<0>"))},
l8(a,b,c,d){if(t.he.b(a))return new A.du(a,b,c.i("@<0>").P(d).i("du<1,2>"))
return new A.cJ(a,b,c.i("@<0>").P(d).i("cJ<1,2>"))},
cH(){return new A.ho("No element")},
Au(){return new A.ho("Too many elements")},
eA:function eA(){},
i1:function i1(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b){this.a=a
this.$ti=b},
j9:function j9(a,b){this.a=a
this.$ti=b},
j7:function j7(){},
b6:function b6(a,b){this.a=a
this.$ti=b},
h6:function h6(a){this.a=a},
ds:function ds(a){this.a=a},
td:function td(){},
S:function S(){},
Z:function Z(){},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
ir:function ir(a,b,c){var _=this
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
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
ia:function ia(a,b,c){this.a=a
this.b=b
this.$ti=c},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
i8:function i8(a){this.$ti=a},
dT:function dT(a,b){this.a=a
this.$ti=b},
j3:function j3(a,b){this.a=a
this.$ti=b},
aB:function aB(){},
ev:function ev(){},
ht:function ht(){},
bK:function bK(a,b){this.a=a
this.$ti=b},
jE:function jE(){},
aT(a,b,c){var s,r,q,p,o,n,m,l=A.aC(a.ga4(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aC(a.gaj(),!0,c)
m=new A.a4(q,n,b.i("@<0>").P(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.i4(A.aW(a,b,c),b.i("@<0>").P(c).i("i4<1,2>"))},
E7(){throw A.b(A.bt("Cannot modify unmodifiable Map"))},
E8(){throw A.b(A.bt("Cannot modify constant Set"))},
De(a){var s=A.Dd(a)
if(s!=null)return s
return"minified:"+a},
Js(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
x(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c1(a)
return s},
iG(a){var s,r=$.AQ
if(r==null)r=$.AQ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dI(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
f7(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aY(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
lv(a){var s,r,q,p
if(a instanceof A.K)return A.bQ(A.cg(a),null)
s=J.eL(a)
if(s===B.ju||s===B.jw||t.qF.b(a)){r=B.cp(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bQ(A.cg(a),null)},
AT(a){var s,r,q
if(a==null||typeof a=="number"||A.bG(a))return J.c1(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eh)return a.q(0)
if(a instanceof A.bg)return a.h8(!0)
s=$.DE()
for(r=0;r<1;++r){q=s[r].ow(a)
if(q!=null)return q}return"Instance of '"+A.lv(a)+"'"},
Ff(){return Date.now()},
Fm(){var s,r
if($.rL!==0)return
$.rL=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rL=1e6
$.rM=new A.rK(r)},
Fe(){if(!!self.location)return self.location.href
return null},
Fn(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dU(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.b0(a,0,1114111,null,null))},
hf(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Fl(a){var s=A.hf(a).getUTCFullYear()+0
return s},
Fj(a){var s=A.hf(a).getUTCMonth()+1
return s},
AR(a){var s=A.hf(a).getUTCDate()+0
return s},
AS(a){var s=A.hf(a).getUTCHours()+0
return s},
Fi(a){var s=A.hf(a).getUTCMinutes()+0
return s},
Fk(a){var s=A.hf(a).getUTCSeconds()+0
return s},
Fh(a){var s=A.hf(a).getUTCMilliseconds()+0
return s},
Fg(a){var s=a.$thrownJsError
if(s==null)return null
return A.cU(s)},
AU(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aR(a,s)
a.$thrownJsError=s
s.stack=b.q(0)}},
xB(a){throw A.b(A.xo(a))},
d(a,b){if(a==null)J.cW(a)
throw A.b(A.xv(a,b))},
xv(a,b){var s,r="index"
if(!A.aX(b))return new A.cC(!0,b,r,null)
s=A.h(J.cW(a))
if(b<0||b>=s)return A.qc(b,s,a,r)
return A.AW(b,r)},
Jf(a,b,c){if(a>c)return A.b0(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b0(b,a,c,"end",null)
return new A.cC(!0,b,"end",null)},
xo(a){return new A.cC(!0,a,null,null)},
b(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.dP()
b.dartException=a
s=A.JN
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
JN(){return J.c1(this.dartException)},
f(a,b){throw A.aR(a,b==null?new Error():b)},
b4(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.Ho(a,b,c),s)},
Ho(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.iX("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.b(A.aA(a))},
dQ(a){var s,r,q,p,o,n
a=A.D8(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.uj(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
uk(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
B9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
yx(a,b){var s=b==null,r=s?null:b.method
return new A.l3(a,r,s?null:b.receiver)},
ak(a){var s
if(a==null)return new A.rf(a)
if(a instanceof A.i9){s=a.a
return A.eM(a,s==null?A.fA(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eM(a,a.dartException)
return A.IH(a)},
eM(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
IH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dU(r,16)&8191)===10)switch(q){case 438:return A.eM(a,A.yx(A.x(s)+" (Error "+q+")",null))
case 445:case 5007:A.x(s)
return A.eM(a,new A.iz())}}if(a instanceof TypeError){p=$.Di()
o=$.Dj()
n=$.Dk()
m=$.Dl()
l=$.Do()
k=$.Dp()
j=$.Dn()
$.Dm()
i=$.Dr()
h=$.Dq()
g=p.b5(s)
if(g!=null)return A.eM(a,A.yx(A.t(s),g))
else{g=o.b5(s)
if(g!=null){g.method="call"
return A.eM(a,A.yx(A.t(s),g))}else if(n.b5(s)!=null||m.b5(s)!=null||l.b5(s)!=null||k.b5(s)!=null||j.b5(s)!=null||m.b5(s)!=null||i.b5(s)!=null||h.b5(s)!=null){A.t(s)
return A.eM(a,new A.iz())}}return A.eM(a,new A.lX(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.iS()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eM(a,new A.cC(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.iS()
return a},
cU(a){var s
if(a instanceof A.i9)return a.b
if(a==null)return new A.jr(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jr(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nr(a){if(a==null)return J.aH(a)
if(typeof a=="object")return A.iG(a)
return J.aH(a)},
J7(a){if(typeof a=="number")return B.b.gS(a)
if(a instanceof A.mY)return A.iG(a)
if(a instanceof A.bg)return a.gS(a)
return A.nr(a)},
CV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
Jk(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
HO(a,b,c,d,e,f){t.BO.a(a)
switch(A.h(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.v5("Unsupported number of arguments for wrapped closure"))},
hT(a,b){var s=a.$identity
if(!!s)return s
s=A.J9(a,b)
a.$identity=s
return s},
J9(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.HO)},
E6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lS().constructor.prototype):Object.create(new A.fJ(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Ae(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.E2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Ae(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
E2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.DY)}throw A.b("Error in functionType of tearoff")},
E3(a,b,c,d){var s=A.Ad
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Ae(a,b,c,d){if(c)return A.E5(a,b,d)
return A.E3(b.length,d,a,b)},
E4(a,b,c,d){var s=A.Ad,r=A.DZ
switch(b?-1:a){case 0:throw A.b(new A.lF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
E5(a,b,c){var s,r
if($.Ab==null)$.Ab=A.Aa("interceptor")
if($.Ac==null)$.Ac=A.Aa("receiver")
s=b.length
r=A.E4(s,c,a,b)
return r},
zH(a){return A.E6(a)},
DY(a,b){return A.jv(v.typeUniverse,A.cg(a.a),b)},
Ad(a){return a.a},
DZ(a){return a.b},
Aa(a){var s,r,q,p=new A.fJ("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.o("Field name "+a+" not found.",null))},
xy(a){return v.getIsolateTag(a)},
Dc(){return v.G},
KI(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Jt(a){var s,r,q,p,o,n=A.t($.D_.$1(a)),m=$.xw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xF[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.an($.CQ.$2(a,n))
if(q!=null){m=$.xw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xF[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.y9(s)
$.xw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.xF[n]=s
return s}if(p==="-"){o=A.y9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.D6(a,s)
if(p==="*")throw A.b(A.Ba(n))
if(v.leafTags[n]===true){o=A.y9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.D6(a,s)},
D6(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.zM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
y9(a){return J.zM(a,!1,null,!!a.$ic3)},
Jv(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.y9(s)
else return J.zM(s,c,null,null)},
Jn(){if(!0===$.zK)return
$.zK=!0
A.Jo()},
Jo(){var s,r,q,p,o,n,m,l
$.xw=Object.create(null)
$.xF=Object.create(null)
A.Jm()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.D7.$1(o)
if(n!=null){m=A.Jv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Jm(){var s,r,q,p,o,n,m=B.f4()
m=A.hS(B.f5,A.hS(B.f6,A.hS(B.cq,A.hS(B.cq,A.hS(B.f7,A.hS(B.f8,A.hS(B.f9(B.cp),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.D_=new A.xC(p)
$.CQ=new A.xD(o)
$.D7=new A.xE(n)},
hS(a,b){return a(b)||b},
Gw(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
Jb(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
AA(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.N("Illegal RegExp pattern ("+String(o)+")",a,null))},
JI(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Ji(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
D8(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zO(a,b,c){var s=A.JJ(a,b,c)
return s},
JJ(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.D8(b),"g"),A.Ji(c))},
a9:function a9(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a){this.a=a},
i4:function i4(a,b){this.a=a
this.$ti=b},
fQ:function fQ(){},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ft:function ft(a,b){this.a=a
this.$ti=b},
dV:function dV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d1:function d1(a,b){this.a=a
this.$ti=b},
fR:function fR(){},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b){this.a=a
this.$ti=b},
rK:function rK(a){this.a=a},
iN:function iN(){},
uj:function uj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iz:function iz(){},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(a){this.a=a},
rf:function rf(a){this.a=a},
i9:function i9(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a
this.b=null},
eh:function eh(){},
kl:function kl(){},
km:function km(){},
lU:function lU(){},
lS:function lS(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
lF:function lF(a){this.a=a},
cm:function cm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
qv:function qv(a){this.a=a},
qF:function qF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ac:function ac(a,b){this.a=a
this.$ti=b},
bU:function bU(a,b,c,d){var _=this
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
M:function M(a,b){this.a=a
this.$ti=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f1:function f1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
xC:function xC(a){this.a=a},
xD:function xD(a){this.a=a},
xE:function xE(a){this.a=a},
bg:function bg(){},
dW:function dW(){},
dX:function dX(){},
hx:function hx(){},
il:function il(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mD:function mD(a){this.b=a},
mi:function mi(a,b,c){this.a=a
this.b=b
this.c=c},
mj:function mj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iU:function iU(a,b){this.a=a
this.c=b},
mU:function mU(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function mV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
JK(a){throw A.aR(A.AD(a),new Error())},
p(){throw A.aR(A.a8(""),new Error())},
ba(){throw A.aR(A.EX(""),new Error())},
zP(){throw A.aR(A.AD(""),new Error())},
ah(){var s=new A.v4()
return s.b=s},
v4:function v4(){this.b=null},
w3(a,b,c){},
X(a){return a},
F5(a,b,c){A.w3(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
F6(a){return new Int8Array(a)},
F7(a){return new Uint8Array(a)},
lk(a){return new Uint8Array(A.X(a))},
AO(a,b,c){A.w3(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
e0(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.xv(b,a))},
C7(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Jf(a,b,c))
return b},
er:function er(){},
hc:function hc(){},
ix:function ix(){},
vR:function vR(a){this.a=a},
ld:function ld(){},
bp:function bp(){},
iv:function iv(){},
iw:function iw(){},
iu:function iu(){},
le:function le(){},
lf:function lf(){},
lg:function lg(){},
lh:function lh(){},
li:function li(){},
lj:function lj(){},
f5:function f5(){},
iy:function iy(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
yI(a,b){var s=b.c
return s==null?b.c=A.jt(a,"aS",[b.x]):s},
B0(a){var s=a.w
if(s===6||s===7)return A.B0(a.x)
return s===11||s===12},
Fw(a){return a.as},
Jw(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a1(a){return A.vQ(v.typeUniverse,a,!1)},
fC(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fC(a1,s,a3,a4)
if(r===s)return a2
return A.BF(a1,r,!0)
case 7:s=a2.x
r=A.fC(a1,s,a3,a4)
if(r===s)return a2
return A.BE(a1,r,!0)
case 8:q=a2.y
p=A.hQ(a1,q,a3,a4)
if(p===q)return a2
return A.jt(a1,a2.x,p)
case 9:o=a2.x
n=A.fC(a1,o,a3,a4)
m=a2.y
l=A.hQ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.yU(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hQ(a1,j,a3,a4)
if(i===j)return a2
return A.BG(a1,k,i)
case 11:h=a2.x
g=A.fC(a1,h,a3,a4)
f=a2.y
e=A.ID(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.BD(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hQ(a1,d,a3,a4)
o=a2.x
n=A.fC(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.yV(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.ka("Attempted to substitute unexpected RTI kind "+a0))}},
hQ(a,b,c,d){var s,r,q,p,o=b.length,n=A.vW(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fC(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
IE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.vW(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fC(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ID(a,b,c,d){var s,r=b.a,q=A.hQ(a,r,c,d),p=b.b,o=A.hQ(a,p,c,d),n=b.c,m=A.IE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mw()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
zI(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Jl(s)
return a.$S()}return null},
Jp(a,b){var s
if(A.B0(b))if(a instanceof A.eh){s=A.zI(a)
if(s!=null)return s}return A.cg(a)},
cg(a){if(a instanceof A.K)return A.q(a)
if(Array.isArray(a))return A.B(a)
return A.zf(J.eL(a))},
B(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.zf(a)},
zf(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.HL(a,s)},
HL(a,b){var s=a instanceof A.eh?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.GG(v.typeUniverse,s.name)
b.$ccache=r
return r},
Jl(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.vQ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
zJ(a){return A.dm(A.q(a))},
zC(a){var s
if(a instanceof A.bg)return a.fC()
s=a instanceof A.eh?A.zI(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eP(a).a
if(Array.isArray(a))return A.B(a)
return A.cg(a)},
dm(a){var s=a.r
return s==null?a.r=new A.mY(a):s},
Jj(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.jv(v.typeUniverse,A.zC(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.BI(v.typeUniverse,s,A.zC(q[r]))}return A.jv(v.typeUniverse,s,a)},
cy(a){return A.dm(A.vQ(v.typeUniverse,a,!1))},
HK(a){var s=this
s.b=A.Iy(s)
return s.b(a)},
Iy(a){var s,r,q,p,o
if(a===t.K)return A.HU
if(A.fD(a))return A.I_
s=a.w
if(s===6)return A.HC
if(s===1)return A.Cm
if(s===7)return A.HP
r=A.Iw(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fD)){a.f="$i"+q
if(q==="L")return A.HS
if(a===t.m)return A.HR
return A.HZ}}else if(s===10){p=A.Jb(a.x,a.y)
o=p==null?A.Cm:p
return o==null?A.fA(o):o}return A.HA},
Iw(a){if(a.w===8){if(a===t.S)return A.aX
if(a===t.i||a===t.p)return A.HT
if(a===t.N)return A.HY
if(a===t.y)return A.bG}return null},
HJ(a){var s=this,r=A.Hz
if(A.fD(s))r=A.H4
else if(s===t.K)r=A.fA
else if(A.hV(s)){r=A.HB
if(s===t.lo)r=A.z1
else if(s===t.dR)r=A.an
else if(s===t.k7)r=A.C1
else if(s===t.s7)r=A.z2
else if(s===t.u6)r=A.C2
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.h
else if(s===t.N)r=A.t
else if(s===t.y)r=A.R
else if(s===t.p)r=A.a0
else if(s===t.i)r=A.aF
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
HA(a){var s=this
if(a==null)return A.hV(s)
return A.D2(v.typeUniverse,A.Jp(a,s),s)},
HC(a){if(a==null)return!0
return this.x.b(a)},
HZ(a){var s,r=this
if(a==null)return A.hV(r)
s=r.f
if(a instanceof A.K)return!!a[s]
return!!J.eL(a)[s]},
HS(a){var s,r=this
if(a==null)return A.hV(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.K)return!!a[s]
return!!J.eL(a)[s]},
HR(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.K)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Cl(a){if(typeof a=="object"){if(a instanceof A.K)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Hz(a){var s=this
if(a==null){if(A.hV(s))return a}else if(s.b(a))return a
throw A.aR(A.C8(a,s),new Error())},
HB(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.C8(a,s),new Error())},
C8(a,b){return new A.hB("TypeError: "+A.Bx(a,A.bQ(b,null)))},
CT(a,b,c,d){if(A.D2(v.typeUniverse,a,b))return a
throw A.aR(A.Gy("The type argument '"+A.bQ(a,null)+"' is not a subtype of the type variable bound '"+A.bQ(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
Bx(a,b){return A.kD(a)+": type '"+A.bQ(A.zC(a),null)+"' is not a subtype of type '"+b+"'"},
Gy(a){return new A.hB("TypeError: "+a)},
cv(a,b){return new A.hB("TypeError: "+A.Bx(a,b))},
HP(a){var s=this
return s.x.b(a)||A.yI(v.typeUniverse,s).b(a)},
HU(a){return a!=null},
fA(a){if(a!=null)return a
throw A.aR(A.cv(a,"Object"),new Error())},
I_(a){return!0},
H4(a){return a},
Cm(a){return!1},
bG(a){return!0===a||!1===a},
R(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.cv(a,"bool"),new Error())},
C1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.cv(a,"bool?"),new Error())},
aF(a){if(typeof a=="number")return a
throw A.aR(A.cv(a,"double"),new Error())},
C2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cv(a,"double?"),new Error())},
aX(a){return typeof a=="number"&&Math.floor(a)===a},
h(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.cv(a,"int"),new Error())},
z1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.cv(a,"int?"),new Error())},
HT(a){return typeof a=="number"},
a0(a){if(typeof a=="number")return a
throw A.aR(A.cv(a,"num"),new Error())},
z2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cv(a,"num?"),new Error())},
HY(a){return typeof a=="string"},
t(a){if(typeof a=="string")return a
throw A.aR(A.cv(a,"String"),new Error())},
an(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.cv(a,"String?"),new Error())},
a(a){if(A.Cl(a))return a
throw A.aR(A.cv(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.Cl(a))return a
throw A.aR(A.cv(a,"JSObject?"),new Error())},
CE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bQ(a[q],b)
return s},
Ik(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.CE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bQ(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Cc(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bQ(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bQ(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bQ(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bQ(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bQ(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bQ(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bQ(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bQ(a.x,b)+">"
if(l===8){p=A.IG(a.x)
o=a.y
return o.length>0?p+("<"+A.CE(o,b)+">"):p}if(l===10)return A.Ik(a,b)
if(l===11)return A.Cc(a,b,null)
if(l===12)return A.Cc(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
IG(a){var s=A.Dd(a)
if(s!=null)return s
return"minified:"+a},
GH(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
GG(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.vQ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ju(a,5,"#")
q=A.vW(s)
for(p=0;p<s;++p)q[p]=r
o=A.jt(a,b,q)
n[b]=o
return o}else return m},
GF(a,b){return A.BQ(a.tR,b)},
GE(a,b){return A.BQ(a.eT,b)},
vQ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.BH(a,null,b,!1)
r.set(b,s)
return s},
jv(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.BH(a,b,c,!0)
q.set(c,r)
return r},
BI(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.yU(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
BH(a,b,c,d){return A.Gu(A.Go(a,b,c,d))},
eF(a,b){b.a=A.HJ
b.b=A.HK
return b},
ju(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cO(null,null)
s.w=b
s.as=c
r=A.eF(a,s)
a.eC.set(c,r)
return r},
BF(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.GC(a,b,r,c)
a.eC.set(r,s)
return s},
GC(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fD(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hV(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cO(null,null)
q.w=6
q.x=b
q.as=c
return A.eF(a,q)},
BE(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.GA(a,b,r,c)
a.eC.set(r,s)
return s},
GA(a,b,c,d){var s,r
if(d){s=b.w
if(A.fD(b)||b===t.K)return b
else if(s===1)return A.jt(a,"aS",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cO(null,null)
r.w=7
r.x=b
r.as=c
return A.eF(a,r)},
GD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cO(null,null)
s.w=13
s.x=b
s.as=q
r=A.eF(a,s)
a.eC.set(q,r)
return r},
js(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Gz(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jt(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.js(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cO(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eF(a,r)
a.eC.set(p,q)
return q},
yU(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.js(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cO(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eF(a,o)
a.eC.set(q,n)
return n},
BG(a,b,c){var s,r,q="+"+(b+"("+A.js(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cO(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eF(a,s)
a.eC.set(q,r)
return r},
BD(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.js(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.js(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Gz(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cO(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eF(a,p)
a.eC.set(r,o)
return o},
yV(a,b,c,d){var s,r=b.as+("<"+A.js(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.GB(a,b,c,r,d)
a.eC.set(r,s)
return s},
GB(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.vW(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fC(a,b,r,0)
m=A.hQ(a,c,r,0)
return A.yV(a,n,m,c!==m)}}l=new A.cO(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eF(a,l)},
Go(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Gu(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Gq(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.BA(a,r,l,k,!1)
else if(q===46)r=A.BA(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fw(a.u,a.e,k.pop()))
break
case 94:k.push(A.GD(a.u,k.pop()))
break
case 35:k.push(A.ju(a.u,5,"#"))
break
case 64:k.push(A.ju(a.u,2,"@"))
break
case 126:k.push(A.ju(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Gs(a,k)
break
case 38:A.Gr(a,k)
break
case 63:p=a.u
k.push(A.BF(p,A.fw(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.BE(p,A.fw(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Gp(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.BB(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Gv(a.u,a.e,o)
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
return A.fw(a.u,a.e,m)},
Gq(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
BA(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.GH(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.Fw(o)+'"')
d.push(A.jv(s,o,n))}else d.push(p)
return m},
Gs(a,b){var s,r=a.u,q=A.Bz(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jt(r,p,q))
else{s=A.fw(r,a.e,p)
switch(s.w){case 11:b.push(A.yV(r,s,q,a.n))
break
default:b.push(A.yU(r,s,q))
break}}},
Gp(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Bz(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fw(p,a.e,o)
q=new A.mw()
q.a=s
q.b=n
q.c=m
b.push(A.BD(p,r,q))
return
case-4:b.push(A.BG(p,b.pop(),s))
return
default:throw A.b(A.ka("Unexpected state under `()`: "+A.x(o)))}},
Gr(a,b){var s=b.pop()
if(0===s){b.push(A.ju(a.u,1,"0&"))
return}if(1===s){b.push(A.ju(a.u,4,"1&"))
return}throw A.b(A.ka("Unexpected extended operation "+A.x(s)))},
Bz(a,b){var s=b.splice(a.p)
A.BB(a.u,a.e,s)
a.p=b.pop()
return s},
fw(a,b,c){if(typeof c=="string")return A.jt(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Gt(a,b,c)}else return c},
BB(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fw(a,b,c[s])},
Gv(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fw(a,b,c[s])},
Gt(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.ka("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.ka("Bad index "+c+" for "+b.q(0)))},
D2(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b3(a,b,null,c,null)
r.set(c,s)}return s},
b3(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fD(d))return!0
s=b.w
if(s===4)return!0
if(A.fD(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b3(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.b3(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.b3(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b3(a,b.x,c,d,e))return!1
return A.b3(a,A.yI(a,b),c,d,e)}if(s===6)return A.b3(a,p,c,d,e)&&A.b3(a,b.x,c,d,e)
if(q===7){if(A.b3(a,b,c,d.x,e))return!0
return A.b3(a,b,c,A.yI(a,d),e)}if(q===6)return A.b3(a,b,c,p,e)||A.b3(a,b,c,d.x,e)
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
if(!A.b3(a,j,c,i,e)||!A.b3(a,i,e,j,c))return!1}return A.Ck(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.Ck(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.HQ(a,b,c,d,e)}if(o&&q===10)return A.HV(a,b,c,d,e)
return!1},
Ck(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b3(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b3(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b3(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b3(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b3(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
HQ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jv(a,b,r[o])
return A.C_(a,p,null,c,d.y,e)}return A.C_(a,b.y,null,c,d.y,e)},
C_(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b3(a,b[s],d,e[s],f))return!1
return!0},
HV(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b3(a,r[s],c,q[s],e))return!1
return!0},
hV(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fD(a))if(s!==6)r=s===7&&A.hV(a.x)
return r},
fD(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
BQ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
vW(a){return a>0?new Array(a):v.typeUniverse.sEA},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mw:function mw(){this.c=this.b=this.a=null},
mY:function mY(a){this.a=a},
mu:function mu(){},
hB:function hB(a){this.a=a},
Gg(){var s,r,q
if(self.scheduleImmediate!=null)return A.IY()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hT(new A.v0(s),1)).observe(r,{childList:true})
return new A.v_(s,r,q)}else if(self.setImmediate!=null)return A.IZ()
return A.J_()},
Gh(a){self.scheduleImmediate(A.hT(new A.v1(t.O.a(a)),0))},
Gi(a){self.setImmediate(A.hT(new A.v2(t.O.a(a)),0))},
Gj(a){A.yM(B.fD,t.O.a(a))},
yM(a,b){return A.Gx(a.a/1000|0,b)},
Gx(a,b){var s=new A.vN()
s.jx(a,b)
return s},
aO(a){return new A.mk(new A.as($.ar,a.i("as<0>")),a.i("mk<0>"))},
aN(a,b){a.$2(0,null)
b.b=!0
return b.a},
a5(a,b){A.H7(a,b)},
aM(a,b){b.dZ(a)},
aL(a,b){b.e_(A.ak(a),A.cU(a))},
H7(a,b){var s,r,q=new A.w0(b),p=new A.w1(b)
if(a instanceof A.as)a.h6(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.eC(q,p,s)
else{r=new A.as($.ar,t.hR)
r.a=8
r.c=a
r.h6(q,p,s)}}},
aP(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.ie(new A.xn(s),t.H,t.S,t.z)},
BC(a,b,c){return 0},
nL(a){var s
if(t.yt.b(a)){s=a.gbY()
if(s!=null)return s}return B.aC},
An(a){var s
a.a(null)
s=new A.as($.ar,a.i("as<0>"))
s.dA(null)
return s},
EB(a,b,c){var s=new A.as($.ar,c.i("as<0>"))
A.B8(a,new A.pk(b,s,c))
return s},
pl(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ar,b.i("as<L<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pn(i,h,g,f)
try{for(n=J.Q(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eC(new A.pm(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cE(A.c([],b.i("u<0>")))
return n}i.a=A.d6(n,null,!1,b.i("0?"))}catch(l){p=A.ak(l)
o=A.cU(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.zg(m,k)
m=new A.bm(m,k==null?A.nL(m):k)
n.cC(m)
return n}else{i.d=p
i.c=o}}return f},
zg(a,b){if($.ar===B.B)return null
return null},
HM(a,b){if($.ar!==B.B)A.zg(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbY()
if(b==null){A.AU(a,B.aC)
b=B.aC}}else b=B.aC
else if(t.yt.b(a))A.AU(a,b)
return new A.bm(a,b)},
Gk(a,b){var s=new A.as($.ar,b.i("as<0>"))
b.a(a)
s.a=8
s.c=a
return s},
va(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.FJ()
b.cC(new A.bm(new A.cC(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fN(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c3()
b.cD(o.a)
A.fr(b,p)
return}b.a^=2
A.nj(null,null,b.b,t.O.a(new A.vb(o,b)))},
fr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.zu(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fr(d.a,c)
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
A.zu(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.vf(q,d,n).$0()
else if(o){if((c&1)!==0)new A.ve(q,j).$0()}else if((c&2)!==0)new A.vd(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("aS<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cN(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.va(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cN(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Cy(a,b){var s
if(t.nW.b(a))return b.ie(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.a6(a,"onError",u.c))},
I9(){var s,r
for(s=$.hM;s!=null;s=$.hM){$.jR=null
r=s.b
$.hM=r
if(r==null)$.jQ=null
s.a.$0()}},
IB(){$.zh=!0
try{A.I9()}finally{$.jR=null
$.zh=!1
if($.hM!=null)$.zW().$1(A.CR())}},
CI(a){var s=new A.ml(a),r=$.jQ
if(r==null){$.hM=$.jQ=s
if(!$.zh)$.zW().$1(A.CR())}else $.jQ=r.b=s},
It(a){var s,r,q,p=$.hM
if(p==null){A.CI(a)
$.jR=$.jQ
return}s=new A.ml(a)
r=$.jR
if(r==null){s.b=p
$.hM=$.jR=s}else{q=r.b
s.b=q
$.jR=r.b=s
if(q==null)$.jQ=s}},
K3(a,b){A.e3(a,"stream",t.K)
return new A.mT(b.i("mT<0>"))},
B8(a,b){var s=$.ar
if(s===B.B)return A.yM(a,t.O.a(b))
return A.yM(a,t.O.a(s.hm(b)))},
zu(a,b){A.It(new A.x8(a,b))},
CD(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
Iq(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
Ip(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
nj(a,b,c,d){t.O.a(d)
if(B.B!==c){d=c.hm(d)
d=d}A.CI(d)},
v0:function v0(a){this.a=a},
v_:function v_(a,b,c){this.a=a
this.b=b
this.c=c},
v1:function v1(a){this.a=a},
v2:function v2(a){this.a=a},
vN:function vN(){},
vO:function vO(a,b){this.a=a
this.b=b},
mk:function mk(a,b){this.a=a
this.b=!1
this.$ti=b},
w0:function w0(a){this.a=a},
w1:function w1(a){this.a=a},
xn:function xn(a){this.a=a},
cd:function cd(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bF:function bF(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b){this.a=a
this.b=b},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
pn:function pn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pm:function pm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mo:function mo(){},
j5:function j5(a,b){this.a=a
this.$ti=b},
dU:function dU(a,b,c,d,e){var _=this
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
v7:function v7(a,b){this.a=a
this.b=b},
vc:function vc(a,b){this.a=a
this.b=b},
vb:function vb(a,b){this.a=a
this.b=b},
v9:function v9(a,b){this.a=a
this.b=b},
v8:function v8(a,b){this.a=a
this.b=b},
vf:function vf(a,b,c){this.a=a
this.b=b
this.c=c},
vg:function vg(a,b){this.a=a
this.b=b},
vh:function vh(a){this.a=a},
ve:function ve(a,b){this.a=a
this.b=b},
vd:function vd(a,b){this.a=a
this.b=b},
ml:function ml(a){this.a=a
this.b=null},
mT:function mT(a){this.$ti=a},
jD:function jD(){},
mM:function mM(){},
vL:function vL(a,b){this.a=a
this.b=b},
x8:function x8(a,b){this.a=a
this.b=b},
By(a,b){var s=a[b]
return s===a?null:s},
yS(a,b,c){if(c==null)a[b]=a
else a[b]=c},
yR(){var s=Object.create(null)
A.yS(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
AF(a,b){return new A.cm(a.i("@<0>").P(b).i("cm<1,2>"))},
F(a,b,c){return b.i("@<0>").P(c).i("yy<1,2>").a(A.CV(a,new A.cm(b.i("@<0>").P(c).i("cm<1,2>"))))},
m(a,b){return new A.cm(a.i("@<0>").P(b).i("cm<1,2>"))},
yz(a){return new A.cu(a.i("cu<0>"))},
Y(a){return new A.cu(a.i("cu<0>"))},
aI(a,b){return b.i("AG<0>").a(A.Jk(a,new A.cu(b.i("cu<0>"))))},
yT(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fv(a,b,c){var s=new A.fu(a,b,c.i("fu<0>"))
s.c=a.e
return s},
bH(a,b){var s=J.Q(a)
if(s.m())return s.gn()
return null},
aW(a,b,c){var s=A.AF(b,c)
a.aI(0,new A.qG(s,b,c))
return s},
h7(a,b,c){var s=A.AF(b,c)
s.J(0,a)
return s},
h8(a,b){var s,r=A.yz(b)
for(s=J.Q(a);s.m();)r.k(0,b.a(s.gn()))
return r},
f2(a,b){var s=A.yz(b)
s.J(0,a)
return s},
yB(a){var s,r
if(A.zL(a))return"{...}"
s=new A.bB("")
try{r={}
B.a.k($.cf,a)
s.a+="{"
r.a=!0
a.aI(0,new A.qJ(r,s))
s.a+="}"}finally{if(0>=$.cf.length)return A.d($.cf,-1)
$.cf.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
GI(){throw A.b(A.bt("Cannot change an unmodifiable set"))},
ja:function ja(){},
vj:function vj(a){this.a=a},
jc:function jc(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fs:function fs(a,b){this.a=a
this.$ti=b},
jb:function jb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cu:function cu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mC:function mC(a){this.a=a
this.c=this.b=null},
fu:function fu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(){},
af:function af(){},
qI:function qI(a){this.a=a},
qJ:function qJ(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.$ti=b},
je:function je(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jw:function jw(){},
h9:function h9(){},
ew:function ew(a,b){this.a=a
this.$ti=b},
db:function db(){},
jq:function jq(){},
mZ:function mZ(){},
hu:function hu(a,b){this.a=a
this.$ti=b},
hC:function hC(){},
jx:function jx(){},
Id(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ak(r)
q=A.N(String(s),null,null)
throw A.b(q)}q=A.ws(p)
return q},
ws(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mA(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ws(a[s])
return a},
GZ(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Dw()
else s=new Uint8Array(o)
for(r=J.aQ(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
GY(a,b,c,d){var s=a?$.Dv():$.Du()
if(s==null)return null
if(0===c&&d===b.length)return A.BP(s,b)
return A.BP(s,b.subarray(c,d))},
BP(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
A9(a,b,c,d,e,f){if(B.d.R(f,4)!==0)throw A.b(A.N("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.N("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.N("Invalid base64 padding, more than two '=' characters",a,b))},
AC(a,b,c){return new A.io(a,b)},
Hn(a){return a.C()},
Gl(a,b){return new A.vm(a,[],A.Ja())},
Gm(a,b,c){var s,r=new A.bB(""),q=A.Gl(r,b)
q.dm(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
H_(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mA:function mA(a,b){this.a=a
this.b=b
this.c=null},
vl:function vl(a){this.a=a},
mB:function mB(a){this.a=a},
vU:function vU(){},
vT:function vT(){},
k7:function k7(){},
vP:function vP(){},
k8:function k8(a,b){this.a=a
this.b=b},
kf:function kf(){},
oo:function oo(){},
ei:function ei(){},
kq:function kq(){},
kC:function kC(){},
io:function io(a,b){this.a=a
this.b=b},
l5:function l5(a,b){this.a=a
this.b=b},
l4:function l4(){},
qx:function qx(a){this.b=a},
qw:function qw(a){this.a=a},
vn:function vn(){},
vo:function vo(a,b){this.a=a
this.b=b},
vm:function vm(a,b,c){this.c=a
this.a=b
this.b=c},
m0:function m0(){},
ur:function ur(){},
vV:function vV(a){this.b=0
this.c=a},
uq:function uq(a){this.a=a},
vS:function vS(a){this.a=a
this.b=16
this.c=0},
D1(a){var s=A.dI(a,null)
if(s!=null)return s
throw A.b(A.N(a,null,null))},
nm(a){var s=A.f7(a)
if(s!=null)return s
throw A.b(A.N("Invalid double",a,null))},
Ew(a,b){a=A.aR(a,new Error())
if(a==null)a=A.fA(a)
a.stack=b.q(0)
throw a},
d6(a,b,c,d){var s,r=c?J.Aw(a,d):J.Av(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aC(a,b,c){var s,r=A.c([],c.i("u<0>"))
for(s=J.Q(a);s.m();)B.a.k(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("u<0>"))
s=A.c([],b.i("u<0>"))
for(r=J.Q(a);r.m();)B.a.k(s,r.gn())
return s},
ad(a,b){var s=A.aC(a,!1,b)
s.$flags=3
return s},
yL(a,b,c){var s,r
A.lA(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.b0(c,b,null,"end",null))
if(s===0)return""}r=A.FM(a,b,c)
return r},
FM(a,b,c){var s=a.length
if(b>=s)return""
return A.Fn(a,b,c==null||c>s?s:c)},
iI(a){return new A.il(a,A.AA(a,!1,!0,!1,!1,""))},
yK(a,b,c){var s=J.Q(b)
if(!s.m())return a
if(c.length===0){do a+=A.x(s.gn())
while(s.m())}else{a+=A.x(s.gn())
while(s.m())a=a+c+A.x(s.gn())}return a},
dR(){var s,r,q=A.Fe()
if(q==null)throw A.b(A.bt("'Uri.base' is not supported"))
s=$.Bd
if(s!=null&&q===$.Bc)return s
r=A.FS(q)
$.Bd=r
$.Bc=q
return r},
FJ(){return A.cU(new Error())},
Ec(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Ag(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ks(a){if(a>=10)return""+a
return"0"+a},
Ev(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.a6(b,"name","No enum value with that name"))},
kD(a){if(typeof a=="number"||A.bG(a)||a==null)return J.c1(a)
if(typeof a=="string")return JSON.stringify(a)
return A.AT(a)},
Ex(a,b){A.e3(a,"error",t.K)
A.e3(b,"stackTrace",t.l)
A.Ew(a,b)},
ka(a){return new A.k9(a)},
o(a,b){return new A.cC(!1,null,b,a)},
a6(a,b,c){return new A.cC(!0,a,b,c)},
AV(a){var s=null
return new A.hg(s,s,!1,s,s,a)},
AW(a,b){return new A.hg(null,null,!0,a,b,"Value not in range")},
b0(a,b,c,d,e){return new A.hg(b,c,!0,a,d,"Invalid value")},
f9(a,b,c){if(0>a||a>c)throw A.b(A.b0(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.b0(b,a,c,"end",null))
return b}return c},
lA(a,b){if(a<0)throw A.b(A.b0(a,0,null,b,null))
return a},
qc(a,b,c,d){return new A.kX(b,!0,a,d,"Index out of range")},
bt(a){return new A.iX(a)},
Ba(a){return new A.lW(a)},
j(a){return new A.ho(a)},
aA(a){return new A.kn(a)},
N(a,b,c){return new A.A(a,b,c)},
ES(a,b,c){var s,r
if(A.zL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.cf,a)
try{A.I0(a,s)}finally{if(0>=$.cf.length)return A.d($.cf,-1)
$.cf.pop()}r=A.yK(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
yu(a,b,c){var s,r
if(A.zL(a))return b+"..."+c
s=new A.bB(b)
B.a.k($.cf,a)
try{r=s
r.a=A.yK(r.a,a,", ")}finally{if(0>=$.cf.length)return A.d($.cf,-1)
$.cf.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
I0(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.x(l.gn())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.k(b,A.x(p))
return}r=A.x(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.x(p)
r=A.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
yC(a,b,c){var s=A.m(b,c)
s.lq(a)
return s},
cL(a,b,c,d,e,f){var s
if(B.h===c){s=J.aH(a)
b=J.aH(b)
return A.iW(A.b2(A.b2($.hW(),s),b))}if(B.h===d){s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
return A.iW(A.b2(A.b2(A.b2($.hW(),s),b),c))}if(B.h===e){s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
d=J.aH(d)
return A.iW(A.b2(A.b2(A.b2(A.b2($.hW(),s),b),c),d))}if(B.h===f){s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
d=J.aH(d)
e=J.aH(e)
return A.iW(A.b2(A.b2(A.b2(A.b2(A.b2($.hW(),s),b),c),d),e))}s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
d=J.aH(d)
e=J.aH(e)
f=J.aH(f)
f=A.iW(A.b2(A.b2(A.b2(A.b2(A.b2(A.b2($.hW(),s),b),c),d),e),f))
return f},
F8(a){var s,r,q=$.hW()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.b2(q,J.aH(a[r]))
return A.iW(q)},
fe(a,b){return new A.hu(A.f2(a,b),b.i("hu<0>"))},
FS(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Bb(a4<a4?B.c.H(a5,0,a4):a5,5,a3).gio()
else if(s===32)return A.Bb(B.c.H(a5,5,a4),0,a3).gio()}r=A.d6(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.CH(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.CH(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.c.ap(a5,"\\",n))if(p>0)h=B.c.ap(a5,"\\",p-1)||B.c.ap(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.ap(a5,"..",n)))h=m>n+2&&B.c.ap(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.ap(a5,"file",0)){if(p<=0){if(!B.c.ap(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.H(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.bU(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.ap(a5,"http",0)){if(i&&o+3===n&&B.c.ap(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.bU(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.ap(a5,"https",0)){if(i&&o+4===n&&B.c.ap(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.bU(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.mQ(a4<a5.length?B.c.H(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.GS(a5,0,q)
else{if(q===0)A.hD(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.GT(a5,c,p-1):""
a=A.GO(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dI(B.c.H(a5,i,n),a3)
d=A.GQ(a0==null?A.f(A.N("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.GP(a5,n,m,a3,j,a!=null)
a2=m<l?A.GR(a5,m+1,l,a3):a3
return A.GJ(j,b,a,d,a1,a2,l<a4?A.GN(a5,l+1,a4):a3)},
Bf(a){var s=t.N
return B.a.ba(A.c(a.split("&"),t.s),A.m(s,s),new A.up(B.cs),t.G)},
m_(a,b,c){throw A.b(A.N("Illegal IPv4 address, "+a,b,c))},
FP(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.m_("each part must be in the range 0..255",a,r)}A.m_("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.m_(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.b4(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.m_(j,a,q)
p=l}A.m_("IPv4 address should contain exactly 4 parts",a,q)},
FQ(a,b,c){var s
if(b===c)throw A.b(A.N("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.FR(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Be(a,b,c)
return!0},
FR(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
Be(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uo(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.FP(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dU(l,8)
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
B.W.iN(s,a0,16,s,a)
B.W.mY(s,a,a0,0)}}return s},
GJ(a,b,c,d,e,f,g){return new A.jy(a,b,c,d,e,f,g)},
BJ(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hD(a,b,c){throw A.b(A.N(c,a,b))},
GQ(a,b){var s=A.BJ(b)
if(a===s)return null
return a},
GO(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hD(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.GL(a,q,r)
if(o<r){n=o+1
p=A.BO(a,B.c.ap(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.FQ(a,q,o)
l=B.c.H(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.c.d5(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.BO(a,B.c.ap(a,"25",n)?o+3:n,c,"%25")}else p=""
A.Be(a,b,o)
return"["+B.c.H(a,b,o)+p+"]"}}return A.GV(a,b,c)},
GL(a,b,c){var s=B.c.d5(a,"%",b)
return s>=b&&s<c?s:c},
BO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bB(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.yX(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bB("")
l=h.a+=B.c.H(a,q,r)
if(m)n=B.c.H(a,r,r+3)
else if(n==="%")A.hD(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bB("")
if(q<r){h.a+=B.c.H(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.H(a,q,r)
if(h==null){h=new A.bB("")
m=h}else m=h
m.a+=i
l=A.yW(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.H(a,b,c)
if(q<c){i=B.c.H(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
GV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.yX(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bB("")
k=B.c.H(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.H(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bB("")
if(q<r){p.a+=B.c.H(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hD(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.H(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bB("")
l=p}else l=p
l.a+=k
j=A.yW(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.H(a,b,c)
if(q<c){k=B.c.H(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
GS(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.BL(a.charCodeAt(b)))A.hD(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hD(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.H(a,b,c)
return A.GK(q?a.toLowerCase():a)},
GK(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GT(a,b,c){return A.jz(a,b,c,16,!1,!1)},
GP(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.jz(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.U(q,"/"))q="/"+q
return A.GU(q,e,f)},
GU(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.U(a,"/")&&!B.c.U(a,"\\"))return A.GW(a,!s||c)
return A.GX(a)},
GR(a,b,c,d){return A.jz(a,b,c,256,!0,!1)},
GN(a,b,c){return A.jz(a,b,c,256,!0,!1)},
yX(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.xA(r)
o=A.xA(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.H(a,b,b+3).toUpperCase()
return null},
yW(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.l6(a,6*p)&63|q
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
o+=3}}return A.yL(s,0,null)},
jz(a,b,c,d,e,f){var s=A.BN(a,b,c,d,e,f)
return s==null?B.c.H(a,b,c):s},
BN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.yX(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hD(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.yW(n)}if(o==null){o=new A.bB("")
k=o}else k=o
k.a=(k.a+=B.c.H(a,p,q))+l
if(typeof m!=="number")return A.xB(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.H(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
BM(a){if(B.c.U(a,"."))return!0
return B.c.bB(a,"/.")!==-1},
GX(a){var s,r,q,p,o,n,m
if(!A.BM(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.V(s,"/")},
GW(a,b){var s,r,q,p,o,n
if(!A.BM(a))return!b?A.BK(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga6(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.BK(s[0]))}return B.a.V(s,"/")},
BK(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.BL(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.H(a,0,s)+"%3A"+B.c.aO(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
GM(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.o("Invalid URL encoding",null))}}return r},
yY(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cs===d)return B.c.H(a,b,c)
else p=new A.ds(B.c.H(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.o("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.o("Truncated URI",null))
B.a.k(p,A.GM(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.L.a(p)
return B.o5.by(p)},
BL(a){var s=a|32
return 97<=s&&s<=122},
Bb(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.N(k,a,r))}}if(q<0&&r>b)throw A.b(A.N(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.ga6(j)
if(p!==44||r!==n+7||!B.c.ap(a,"base64",n+1))throw A.b(A.N("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.f2.nv(a,m,s)
else{l=A.BN(a,m,s,256,!0,!1)
if(l!=null)a=B.c.bU(a,m,s,l)}return new A.un(a,j,c)},
CH(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a){this.a=a},
mt:function mt(){},
at:function at(){},
k9:function k9(a){this.a=a},
dP:function dP(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kX:function kX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iX:function iX(a){this.a=a},
lW:function lW(a){this.a=a},
ho:function ho(a){this.a=a},
kn:function kn(a){this.a=a},
ll:function ll(){},
iS:function iS(){},
v5:function v5(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(){},
K:function K(){},
mW:function mW(){},
u4:function u4(){this.b=this.a=0},
bB:function bB(a){this.a=a},
up:function up(a){this.a=a},
uo:function uo(a){this.a=a},
jy:function jy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
un:function un(a,b,c){this.a=a
this.b=b
this.c=c},
mQ:function mQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
mp:function mp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
re:function re(a){this.a=a},
Cd(a){var s
if(typeof a=="function")throw A.b(A.o("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Ha,a)
s[$.ym()]=a
return s},
W(a){var s
if(typeof a=="function")throw A.b(A.o("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Hb,a)
s[$.ym()]=a
return s},
Ha(a){return t.BO.a(a).$0()},
Hb(a,b,c){t.BO.a(a)
if(A.h(c)>=1)return a.$1(b)
return a.$0()},
no(a,b,c){return c.a(a[b])},
Ce(a,b){return a[b]},
aY(a,b,c,d){return d.a(a[b].apply(a,c))},
az(a,b){var s=new A.as($.ar,b.i("as<0>")),r=new A.j5(s,b.i("j5<0>"))
a.then(A.hT(new A.ya(r,b),1),A.hT(new A.yb(r),1))
return s},
Cp(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hU(a){if(A.Cp(a))return a
return new A.xt(new A.jc(t.BT)).$1(a)},
ya:function ya(a,b){this.a=a
this.b=b},
yb:function yb(a){this.a=a},
xt:function xt(a){this.a=a},
Fo(a){var s
if(a==null)s=B.b2
else{s=new A.eD()
s.bZ(a)}return s},
mz:function mz(){},
eD:function eD(){this.b=this.a=0},
kx:function kx(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
FE(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aC(b3,!0,b1)
B.a.k(b2,128)
while(B.d.R(b2.length,64)!==56)B.a.k(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.k(b2,B.d.iY(s,r)&255)
for(q=1779033703,p=3144134277,o=1013904242,n=2773480762,m=1359893119,l=2600822924,k=528734635,j=1541459225,i=0;i<b2.length;i+=64){h=A.d6(64,0,!1,b1)
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
B.a.l(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.jN[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.H(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.tP()),t.dH).nm(0)},
tP:function tP(){},
m1:function m1(a,b){this.a=a
this.b=b},
F1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.p(h.w,b))throw A.b(A.a6(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.r)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.j("part "+r.a+" has no "+b+" payload")
throw A.b(h)}k=q
j=m.h(0,k)
p=j==null?A.f(A.j("model package payload is missing: "+k)):j
J.eO(s,a.mx(new Uint8Array(A.X(p))))}return new A.qY(a,s)}catch(i){for(h=s,n=A.B(h).i("bK<1>"),h=new A.bK(h,n),h=new A.ai(h,h.gu(0),n.i("ai<Z.E>")),n=n.i("Z.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aJ(o)}throw i}},
qY:function qY(a,b){this.a=a
this.b=b
this.c=!1},
lb:function lb(a){this.e=a},
r8:function r8(a,b){this.a=a
this.b=b},
r_:function r_(){},
r0:function r0(){},
r1:function r1(){},
F2(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.aa(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.b(B.hU)
s=a.h(0,"parts")
if(!t.j.b(s)||J.k3(s))throw A.b(B.hE)
r=A.x6(a,"assetId")
q=A.x6(a,"packageHash")
p=A.x6(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.Q(s),m=t.P;n.m();)o.push(A.F3(m.a(n.gn())))
n=A.zB(a.h(0,"materials"))
m=A.zB(a.h(0,"textures"))
l=A.zB(a.h(0,"lods"))
k=A.Cq(a.h(0,"combinedBounds"))
j=A.Ix(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bs(0,new A.r3(),h,h)
i=h}return new A.r2(r,q,p,o,n,m,l,k,j,i==null?B.aK:i)},
F3(a){var s,r,q=A.x6(a,"id"),p=A.z1(a.h(0,"materialSlot"))
if(p==null)p=A.f(B.h1)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bs(0,new A.r7(),r,r)
s=r}return new A.f4(q,p,s==null?B.aK:s)},
x6(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.b(A.N(b+" is required",null,null))
return s},
HW(a){if(a.length===0||B.c.U(a,"/")||B.c.p(a,"\\"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.wW())},
zB(a){var s,r
if(a==null)return B.m
if(!t.j.b(a)||J.k2(a,new A.xe()))throw A.b(B.hf)
s=A.c([],t.s)
for(r=J.Q(a);r.m();)s.push(A.t(r.gn()))
return s},
Cq(a){var s,r
if(a==null)return B.bq
if(!t.j.b(a)||J.k2(a,new A.x_()))throw A.b(B.iq)
s=A.c([],t.n)
for(r=J.Q(a);r.m();)s.push(A.a0(r.gn()))
return s},
Ix(a){var s,r,q,p
if(a==null)return B.l3
if(!t.f.b(a))throw A.b(B.hz)
if(a.ga4().M(0,new A.xc()))throw A.b(B.hV)
s=A.m(t.N,t.dd)
for(r=a.gL(),r=r.gv(r);r.m();){q=r.gn()
p=q.a
if(typeof p=="string")s.l(0,p,A.Cq(q.b))}return s},
r2:function r2(a,b,c,d,e,f,g,h,i,j){var _=this
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
r3:function r3(){},
r5:function r5(){},
r6:function r6(){},
r4:function r4(){},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(){},
wW:function wW(){},
xe:function xe(){},
x_:function x_(){},
xc:function xc(){},
Df(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.yk(m)
for(s=a.A(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.Y(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){o=s[q]
n=o.a
if(!p.k(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.K("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
JO(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.yl(n),l=A.Y(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)l.J(0,s[q].c.gaj())
for(s=A.fv(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.K(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bU(b,b.r,b.e,A.q(b).i("bU<1>"));s.m();){r=s.d
if(!l.p(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bp(o,".fbx")||B.c.bp(o,".obj")||B.c.bp(o,".mtl")||B.c.bp(o,".gltf")||B.c.bp(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
yk:function yk(a){this.a=a},
yl:function yl(a){this.a=a},
rQ:function rQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
rR:function rR(){},
f8:function f8(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
oC:function oC(a,b){this.a=a
this.b=b
this.c=null},
fP:function fP(a,b){this.a=a
this.b=b},
oD:function oD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oF:function oF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oE:function oE(){var _=this
_.c=_.b=_.a=null
_.d=0},
lr:function lr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
fM:function fM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kJ:function kJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
kK:function kK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eo(a,b){return new A.kU(a,b)},
dL:function dL(){},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function lm(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.a=a
this.b=b},
JD(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.k(f,new A.jl(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.W(f,new A.yc())
s=A.c([],t.cv)
for(r=A.hq(f,0,A.e3(b,"count",t.S),t.mn),q=r.$ti,r=new A.ai(r,r.gu(0),q.i("ai<Z.E>")),q=q.i("Z.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bN:function bN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
yc:function yc(){},
qL(a,b,c,d,e,f,g,h,i,j){return new A.cK(c,a,h,g,f,0,e,i,j,B.eu,b,!0)},
l9(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.o("MaterialDefinition."+a+" must be in [0, 1]: "+A.x(b),null))},
fH:function fH(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
F_(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.f(A.o("MeshData.indices must be Uint16List or Uint32List, got "+J.eP(a).q(0),null))}return s},
cP:function cP(a,b){this.a=a
this.b=b},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
us:function us(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qR:function qR(){},
qS:function qS(){},
qT:function qT(){},
kt:function kt(){},
iA(a){var s,r,q="volumetric",p=t.N,o=A.aI(["sceneColor","present"],p),n=a.a.b
if(n.p(0,"shadows"))o.J(0,A.aI(["shadowMap","sceneDepth"],p))
if(n.p(0,q)){o.k(0,"volumetricLight")
o.k(0,"sceneColor#"+(a.d>1?2:1))}if(n.p(0,"ssao"))o.J(0,A.aI(["ssaoRaw","ssaoBlurred"],p))
if(n.p(0,"bloom")){if(a.d>1)s=n.p(0,q)?3:2
else s=n.p(0,q)?2:1
o.J(0,A.aI(["bloomBlurH","bloomBlurV","sceneColor#"+s],p))}if(a.d>1)o.k(0,"sceneColor#1")
if(n.p(0,"dof"))o.J(0,A.aI(["dofBlurH","dofBlurV","dofOutput"],p))
if(n.p(0,"grade"))o.k(0,"gradeOutput")
if(n.p(0,"ps1"))o.k(0,"ps1Output")
r=n.p(0,"vhs")
if(r)o.k(0,"vhsOutput")
return new A.rg(A.fe(o,p),r)},
rg:function rg(a,b){this.a=a
this.b=b},
rh:function rh(){},
hj:function hj(a,b){this.a=a
this.b=b},
lt:function lt(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fW:function fW(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c,d,e,f,g,h,i,j){var _=this
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
lT:function lT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b){this.a=a
this.b=b},
fV:function fV(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
fb:function fb(a,b){this.a=a
this.b=b},
aV:function aV(a,b,c){this.a=a
this.b=b
this.d=c},
ph:function ph(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
EY(a){var s,r,q
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=B.bB;s.m();){switch(s.d.a){case 0:q=B.bB
break
case 1:q=B.du
break
case 2:q=B.dv
break
case 3:q=B.dw
break
default:q=null}if(A.AJ(q)>A.AJ(r))r=q}return r},
AJ(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
CN(a){return new A.bF(A.IF(a),t.EF)},
IF(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$CN(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.a9("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
f3:function f3(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a,b){this.a=a
this.b=b},
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
qM:function qM(a){this.a=a},
qN:function qN(){},
EZ(){return new A.la(new A.d9(new A.qQ(),A.c([],t.Fy),A.c([],t.t),t.ja))},
la:function la(a){this.a=a},
qQ:function qQ(){},
CK(a){var s=4
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
case 3:s=A.f(A.bt("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Hh(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.CK(o.a)===b)q+=o.c}return q},
F0(a){return new A.qU(a,new A.d9(new A.qV(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
AK(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.f(A.o("MeshStore indices must be Uint16List or Uint32List",null))}return s},
lY:function lY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qV:function qV(){},
qW:function qW(){},
J8(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bC(B.d.eD(r,16),8,"0")+B.c.bC(B.d.eD(q,16),8,"0")},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b){this.b=a
this.c=b},
qZ:function qZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hb:function hb(a,b,c,d,e,f,g,h,i){var _=this
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
dJ(a,b){return new A.ly(a,b)},
CU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.b(A.dJ(B.md,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.jD[q])throw A.b(A.dJ(B.me,'expected "QMSH", got '+B.f1.mw(B.W.aB(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.f9(0,null,B.d.bf(a.byteLength,p))
n=J.A2(B.W.gdY(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.b(A.dJ(B.mf,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.n8.p(0,k)))throw A.b(A.dJ(B.dL,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.b(A.dJ(B.mg,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.R(j,3)!==0)throw A.b(A.dJ(B.mi,"vertexCount "+j+" is not a multiple of 3"))
h=J.yv(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.M(h,new A.xu()))throw A.b(A.dJ(B.mh,"bounds contain a non-finite value: "+A.x(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.b(A.dJ(B.dM,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.ab
break A}if(18===k){d=B.om
break A}if(20===k){d=B.ol
break A}d=A.f(A.dJ(B.dL,"no vertex layout for stride "+k))}s=new A.bV(d,g,null,new A.fG(new A.C(h[0],h[1],h[2]),new A.C(h[3],h[4],h[5])))
try{s.A()}catch(e){r=A.ak(e)
d=A.dJ(B.dM,"mesh validation failed: "+A.x(r))
throw A.b(d)}return s},
cN:function cN(a,b){this.a=a
this.b=b},
ly:function ly(a,b){this.a=a
this.b=b},
xu:function xu(){},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=b},
ue:function ue(a,b){this.a=a
this.b=b},
uf:function uf(a){this.a=a},
uc:function uc(a,b){this.a=a
this.b=b},
ud:function ud(){},
FN(a){var s=new A.lV(a,new A.d9(new A.ug(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.b_($.zU())
s.e=s.b_($.zR())
s.f=s.b_($.zS())
s.r=s.b_($.zQ())
s.w=s.b_($.zT())
return s},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
ug:function ug(){},
ui:function ui(){},
uh:function uh(){},
FH(a,b,c,d,e){var s,r,q
if(c)return B.nC
if(d)return B.nw
s=A.B6(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.nG
r=s<0
if(a>=0.2617993877991494)return r?B.e4:B.nH
if(a>=0.10471975511965977)return r?B.e4:B.nI
if(a>=-0.014538592669112763)return r?B.nF:B.nJ
q=a*180/3.141592653589793
if(q>=-6)return r?B.nE:B.ny
if(q>=-12)return r?B.nD:B.nz
if(q>=-18)return r?B.nx:B.nA
return B.nB},
B6(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
be:function be(a,b){this.a=a
this.b=b},
u2:function u2(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
JE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.ga0(0)
if(!g)throw A.b(A.o("invalid volumetric source selection inputs",null))
s=A.Y(t.N)
r=A.c([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.r)(c),++n){m=c[n]
m.A()
l=m.a
if(!s.k(0,l))throw A.b(A.o("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.Bi(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.k(r,new A.jm(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.W(r,new A.yd())
g=A.c([],t.xL)
for(q=A.hq(r,0,A.e3(a,"count",t.S),t.bG),p=q.$ti,q=new A.ai(q,q.gu(0),p.i("ai<Z.E>")),p=p.i("Z.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
Bi(a,b,c){var s,r,q,p
for(s=[new A.a9("distance",b),new A.a9("referenceDistance",c),new A.a9("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.f(A.o(q.a+" must be finite: "+A.x(p),null))}if(b<0||c<=0||a<=0)throw A.b(A.o("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.t(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
FX(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.ga0(0))A.f(A.o(c1+c5.q(0),c0))
if(!c3.ga0(0))A.f(A.o(c2+c3.q(0),c0))
if(!isFinite(c4))A.f(A.o("rayLength must be finite: "+A.x(c4),c0))
if(!isFinite(c6))A.f(A.o("scatteringCoeff must be finite: "+A.x(c6),c0))
if(!isFinite(0.7))A.f(A.o("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.f(A.o("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbb()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.b(A.o("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.u,e=B.u,d=0,c=0;c<c7.length;c7.length===s||(0,A.r)(c7),++c){b=c7[c]
b.A()
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.Bi(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.f(A.o(c1+c5.q(0),c0))
if(!(n&&m&&l))A.f(A.o(c2+c3.q(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.f(A.o("lightPos must be finite: "+a.q(0),c0))
if(!isFinite(a8))A.f(A.o("lightIntensity must be finite: "+A.x(a8),c0))
if(k)A.f(A.o("rayDirection must be nonzero",c0))
if(o)A.f(A.o("rayLength must be >= 0",c0))
if(a8<0||g)A.f(A.o("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.gag()
a=a9.a
b0=a9.b
b1=a9.c
b2=a1*a+a3*b0+a5*b1
b3=B.b.t(b2,0,c4)
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
e=new A.C(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.uG(f,e.gbb()<1e-8?B.u:e.gag(),d)},
cr:function cr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yd:function yd(){},
uG:function uG(a,b,c){this.a=a
this.b=b
this.c=c},
J1(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.m(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
o=p.gF().y
if(o==null){B.a.k(j,new A.dD(p,A.c([p],r)))
continue}n=""+p.gF().a.a+":"+p.gF().b.a+":"+A.x(o)
m=i.h(0,n)
if(m==null){i.l(0,n,j.length)
B.a.k(j,new A.dD(p,A.c([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.d(j,m)
k=j[m].b
if(k.length>=16){i.l(0,n,l)
B.a.k(j,new A.dD(p,A.c([p],r)))}else B.a.k(k,p)}}return j},
dD:function dD(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
pc:function pc(){},
pd:function pd(a){this.a=a},
pa:function pa(a){this.a=a},
pb:function pb(a){this.a=a},
kI:function kI(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
kL:function kL(a,b){this.a=a
this.b=b
this.c=0},
Gn(){return new A.hw()},
pg:function pg(a){this.a=a
this.b=null},
hw:function hw(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
yF(){return!0},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
rk:function rk(){},
rl:function rl(){},
cl:function cl(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
lw:function lw(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bb:function bb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rS:function rS(){},
b7:function b7(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
rU:function rU(a,b){this.a=a
this.b=b},
rZ:function rZ(){},
rY:function rY(){},
rX:function rX(){},
rW:function rW(a){this.a=a},
rV:function rV(a,b,c){this.a=a
this.b=b
this.c=c},
rT:function rT(a,b){this.a=a
this.b=b},
Fu(a){return new A.iJ(a,new A.d9(new A.t_(),A.c([],t.w_),A.c([],t.t),t.tc))},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b){this.a=a
this.b=b},
t_:function t_(){},
wL(a,b){return A.Hs(a,b)},
Hs(a,b){var s=0,r=A.aO(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wL=A.aP(function(c,a0){if(c===1)return A.aL(a0,r)
for(;;)switch(s){case 0:a.c0()
if(a.at!=null)throw A.b(A.j("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.c6(b)
h=p.a.d
if(!(h.a.gu(0)!==0||h.b.gu(0)!==0||h.c.gu(0)!==0||h.d.gu(0)!==0||h.e||h.f)&&!h.r){i.c7(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.de(b)
n=new A.lw(a.a,A.m(t.N,t.CH))
l=A.C9(a,n,b,o.a.b.a)
m=l.a
i.c7(p)
h=a.x
g=o
if(h.e)A.f(A.j("GPU resource adapter is disposed"))
h.fc(g)
f=h.c
h.b.c7(g.a)
h.c=g
h.d=null
if(f!=null)h.dI(f.b)
g.c=B.iP
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bO()
h=j
if(h!=null)h.bO()}catch(d){if(p.c===B.b5){h=t.AB.a(p)
i.fm(h)
i.a.hf(h.a)
i.b.ez(h.b)
h.c=B.fx
i.c=null}i=o
if((i==null?null:i.c)===B.ak){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.f(A.j("GPU resource adapter is disposed"))
i.fc(h)
i.dI(h.b)
i.b.ez(h.a)
h.c=B.iQ
i.d=null}i=m
if(i!=null)i.bO()
i=n
if(i!=null)i.bO()
throw d}case 1:return A.aM(q,r)}})
return A.aN($async$wL,r)},
Ca(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.C9(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
C9(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.wJ(a),j=new A.wK(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.J6(b,h,d,i,s.gob(),new A.wu(j),new A.wv(j),new A.ww(a),new A.wB(a),new A.wC(a),new A.wD(j),new A.wE(j),s.god(),new A.wF(a),s.goi(),r.gof(),k,s.gol(),s.gon(),new A.wG(j,c),new A.wH(j),new A.wI(j),new A.wx(j),new A.wy(j),new A.wz(a),new A.wA(j),e,f,g,c.r)}else{p=new A.aJ(l,B.p,g,f,e,0)
o=new A.aJ(l,B.p,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.it(h,p,o):null
k=A.c([new A.mf(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.iD(b,u.l,u.p,h,i,d))
q=new A.kH(k)}a.r.toString
m=q.lK(B.a8,new A.rS(),!1,new A.mJ())
k=m.a.b
if(k.length!==0)throw A.b(A.j("safe renderer graph is invalid: "+A.x(k)))
return new A.vM(q,m)},
Ht(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.j("renderer graph is not initialized"))
s=A.J(b7.ghZ(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.Y(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ac()
p=p.gak()
n=A.B(p)
B.a.k(s,new A.mX(new A.cF((r|1073741824)>>>0,0,"transient"),q,A.b_(new A.H(p,n.i("C(1)").a(o.gan()),n.i("H<1,C>")))))}p=b8.a
m=A.Jc(A.Am(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.eo(B.aI,n))
j=j.b
g=j.$ti
j.Y(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.ae(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gF().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.eo(B.aI,n))
j=j.b
g=j.$ti
j.Y(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.ae(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.pg(n)
e.lG("cull")
j=l-f
d=e.b
if(d==null)A.f(A.j("cull recorded outside an active frame"))
if(j<0)A.f(A.o("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.r)(s),++k){a2=s[k]
if(a2.gF().e===B.aG)B.a.k(a,new A.b1(new A.bS(a0.il(a2.gF().c.a).c,a2.gE().a),a2,a1))
else B.a.k(b,new A.b1(new A.bW(B.m9,a2.gF().b,a2.gF().a,a2.gE().a),a2,g))}a3=new A.mv(A.J1(A.JG(b)),A.JF(a),p,b8.b,b8.c)
a4=new A.kw(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gF().a
if(g.length===0)A.f(A.a6(g,"passId",null))
e.b=g
n.cm(g,A.CW())
a6=A.m(o,i)
for(g=a5.gF().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.f(A.j("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.f(A.j("resource is not in candidate: "+b1))
b3=new A.fK(b2)
a6.l(0,b0+"#"+a1,b3)
a6.cm(b0,new A.wM(b3))}a5.am(new A.kj(a6,a4,a3))}return new A.v6(e,m,j)},
B2(a){return new A.t7(a,new A.oC(new A.oE(),new A.lE()),new A.kL(A.c([],t.h1),B.iy),A.c([],t.Ft),B.bL,A.c([],t.ow),null)},
lD:function lD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
v6:function v6(a,b,c){this.a=a
this.b=b
this.c=c},
mX:function mX(a,b,c){this.a=a
this.b=b
this.c=c},
wJ:function wJ(a){this.a=a},
wK:function wK(a,b){this.a=a
this.b=b},
wI:function wI(a){this.a=a},
wB:function wB(a){this.a=a},
wC:function wC(a){this.a=a},
wH:function wH(a){this.a=a},
ww:function ww(a){this.a=a},
wy:function wy(a){this.a=a},
wx:function wx(a){this.a=a},
wG:function wG(a,b){this.a=a
this.b=b},
wu:function wu(a){this.a=a},
wv:function wv(a){this.a=a},
wD:function wD(a){this.a=a},
wE:function wE(a){this.a=a},
wF:function wF(a){this.a=a},
wA:function wA(a){this.a=a},
wz:function wz(a){this.a=a},
wM:function wM(a){this.a=a},
vM:function vM(a,b){this.a=a
this.b=b},
mJ:function mJ(){},
mv:function mv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t7:function t7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
t8:function t8(){},
t9:function t9(){},
ta:function ta(){},
mG:function mG(a){this.b=a},
vi:function vi(){},
mN:function mN(){},
iR:function iR(a,b){this.a=a
this.b=b},
JG(a){var s,r,q=A.J(a,t.E0)
B.a.W(q,new A.yh())
s=A.B(q)
r=s.i("H<1,c8>")
s=A.J(new A.H(q,s.i("c8(1)").a(new A.yi()),r),r.i("Z.E"))
s.$flags=1
return s},
JF(a){var s,r,q=A.J(a,t.EH)
B.a.W(q,new A.yf())
s=A.B(q)
r=s.i("H<1,c8>")
s=A.J(new A.H(q,s.i("c8(1)").a(new A.yg()),r),r.i("Z.E"))
s.$flags=1
return s},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b){this.a=a
this.b=b},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
yh:function yh(){},
yi:function yi(){},
yf:function yf(){},
yg:function yg(){},
Jc(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gF().d&c)>>>0===0){++q
continue}n=o.geK()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.o("cullItems: non-finite world bounds for instance "+o.gE().q(0),null))
if(a.ii(o.geK())===B.b6){++q
continue}B.a.k(l,o)}return new A.oU(l,new A.oV(q))},
oV:function oV(a){this.b=a},
oU:function oU(a,b){this.a=a
this.b=b},
b_(a){var s,r,q,p,o,n,m,l,k
for(s=J.Q(a),r=B.o9,q=B.ob,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.C(m,k,Math.min(r.c,o))
q=new A.C(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.o("Aabb.fromPoints requires at least one point",null))
return new A.fG(r,q)},
fG:function fG(a,b){this.a=a
this.b=b},
Am(a){var s,r,q,p,o,n,m=a.a,l=new A.pj(),k=m.length
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
return new A.pi(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
f6:function f6(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
pi:function pi(a){this.a=a},
pj:function pj(){},
AH(a){if(a.length!==16)throw A.b(A.o("Mat4.fromColumnMajor requires 16 values",null))
return new A.dF(new Float32Array(A.X(a)))},
yD(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dF(q)},
AI(a,b,c){var s=b.gag(),r=c.bz(s).gag(),q=s.bz(r),p=new Float32Array(16)
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
return new A.dF(p)},
dF:function dF(a){this.a=a},
qK:function qK(){},
rO(a,b){var s=a.gag(),r=b/2,q=Math.sin(r)
return new A.lz(s.a*q,s.b*q,s.c*q,Math.cos(r))},
lz:function lz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b){this.a=a
this.b=b},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nM:function nM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
j6:function j6(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mm:function mm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mn:function mn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
kv:function kv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mq:function mq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j8:function j8(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mr:function mr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kA:function kA(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ms:function ms(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kT:function kT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
mx:function mx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
mE:function mE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a){this.b=a},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
bq(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aJ(a.a,a.b,b,c,s,r)},
yG:function yG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
mK:function mK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lx:function lx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mL:function mL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B5(a){var s=a.c,r=Math.abs(s.a)<0.99?B.ee:B.P,q=A.AI(a.b,s,r)
return new A.fg(A.yD(1,a.f,B.b.t(a.w*2,0.1,3),0.05).a8(0,q))},
fg:function fg(a){this.a=a},
lN:function lN(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mO:function mO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
J6(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.p(0,"shadows"))throw A.b(A.a6(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c0.p(0,"ssao")
r=c0.p(0,"bloom")
q=c0.p(0,"dof")
p=c0.p(0,"grade")
o=c0.p(0,"ps1")
n=c0.p(0,"vhs")
m=c0.p(0,"volumetric")
c0=B.d.ae(e9+1,2)
l=B.d.ae(e8+1,2)
k=A.bq(B.bO,e9,e8,e7,b2)
j=A.bq(B.bO.i0(),e9,e8,b2,b2)
i=e7>1
h=A.bq(B.mP,e9,e8,b2,i?2:1)
g=A.bq(B.mO,c0,l,b2,b2)
A.bq(B.mX,e9,e8,b2,b2)
f=A.bq(B.mU,e9,e8,b2,b2)
e=A.bq(B.mN,f0,f0,b2,b2)
d=A.bq(B.mQ,c0,l,b2,b2)
c=A.bq(B.mR,c0,l,b2,b2)
b=A.bq(B.mV,c0,l,b2,b2)
a=A.bq(B.mW,c0,l,b2,b2)
a0=$.Dg()
a1=i?1:0
a2=A.bq(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.bq(B.mK,c0,l,b2,b2)
a1=A.bq(B.mL,c0,l,b2,b2)
a3=A.bq(B.mM,e9,e8,b2,b2)
a4=A.bq(B.mS,e9,e8,b2,b2)
a5=A.bq(B.mY,e9,e8,b2,b2)
a6=A.bq(B.mT,e9,e8,b2,b2)
a7=i?new A.it(c2,k,j):b2
b9.a=null
a8=A.B5(B.nK)
if(m){a9=i?j:k
b0=new A.mb(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec2 sourceUv = clip.xy / clip.w * 0.5 + 0.5;\n  float screenDistance = distance(vUv, sourceUv);\n  float radius = max(referenceDistance / max(clip.w, 1.0), 0.002);\n  float disc = 1.0 - smoothstep(radius * 0.35, radius, screenDistance);\n  float depthFade = 1.0 - smoothstep(cutoffDistance * 0.65, cutoffDistance, clip.w);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(clip.w * clip.w, referenceDistance * referenceDistance);\n  float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n  return color * (disc * depthFade * inverseSquare * phase);\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  float rayLength = min(linearDepth(depth), uFar);\n  vec3 viewRay = normalize(vec3(vUv * 2.0 - 1.0, 1.0));\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int sampleCount = 12;\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  for (int i = 0; i < sampleCount; i++) {\n    float distanceAlongRay = (float(i) + 0.5) * stepLength;\n    float heightWeight = exp(-max(distanceAlongRay * 0.02, 0.0));\n    float opticalDepth = density * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uShaftIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.c([],t.C1))}else b0=b2
g=t.e_
b1=A.c([],g)
if(!m)h=i?j:k
if(r){B.a.J(b1,A.c([new A.i_(c1,b3,b4,c2,b5,b5,B.es,!0,h,b,e0,c0,l),new A.i_(c1,b3,b4,c2,b6,b6,B.oY,!1,b,a,c6,c0,l),new A.ki(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.J(b1,A.c([new A.i6(c1,b3,b4,c2,b7,b7,B.et,h,a0,e0,c0,l),new A.i6(c1,b3,b4,c2,b8,b8,B.oZ,a0,a1,d1,c0,l),new A.kA(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.k(b1,new A.kT(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.k(b1,new A.lx(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.k(b1,new A.m2(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.c([new A.kv(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.lQ(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.lP(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.lN(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.xq(b9),e))
j.push(new A.lO(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*exp(-distance(vWorldPos,uThermalSourcePosition0)/max(uThermalSourceRadius0,0.01)));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*exp(-distance(vWorldPos,uThermalSourcePosition1)/max(uThermalSourceRadius1,0.01)));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*exp(-distance(vWorldPos,uThermalSourcePosition2)/max(uThermalSourceRadius2,0.01)));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*exp(-distance(vWorldPos,uThermalSourcePosition3)/max(uThermalSourceRadius3,0.01)));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.xr(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.J(j,b1)
j.push(new A.iD(c1,b3,u.p,c2,h,c3))
return new A.kH(j)},
xq:function xq(a){this.a=a},
xr:function xr(a,b){this.a=a
this.b=b},
lO:function lO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
mP:function mP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
lQ:function lQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mS:function mS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lP:function lP(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
mR:function mR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m2:function m2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
n_:function n_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mb:function mb(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
n1:function n1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
n0:function n0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mf:function mf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n4:function n4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oA:function oA(){},
lL(a,b){return new A.iP(a,b)},
kQ:function kQ(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
kS:function kS(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eZ:function eZ(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
id:function id(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
y:function y(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.b=b},
kw:function kw(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pF:function pF(){},
pG:function pG(){},
hz:function hz(a,b){this.a=a
this.b=b},
eE:function eE(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
Aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fX(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kg:function kg(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
br:function br(a,b){this.a=a
this.b=b},
uX:function uX(){this.a=null},
G2(a){var s=new A.md(a,B.j,new A.uX(),A.Gc(a))
s.jw(a)
return s},
Gc(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.Y(t.N)
s=A.Y(t.N)
r=J.Q(t.a.b(q)?q:new A.b6(q,A.B(q).i("b6<1,e>")))
while(r.m())s.k(0,r.gn())
return s},
bD(a,b){var s,r
if(a.b!==B.j)A.f(A.j(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.h(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.h(s.drawingBufferWidth),A.h(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.h(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
Bp(a,b){var s
if(a.b!==B.j)A.f(A.j(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.h(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.o("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
G7(a,b,c){var s,r,q,p
if(a.b!==B.j)A.f(A.j(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.j("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
G6(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.h(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
G5(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
Bo(a,b){var s
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
G3(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b9(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.j(u.k))
s=a.f
r=s.mD(b)
if(r.a===0)return
if(r.p(0,B.bS)){q=v.G
p=a.a
if(b.a)p.enable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bT))a.a.depthFunc(A.G6(a,b.b))
if(r.p(0,B.bU))a.a.depthMask(b.c)
if(r.p(0,B.bY)){q=v.G
p=a.a
if(b.w)p.enable(A.h(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.h(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.bZ))a.a.cullFace(A.G5(a,b.x))
if(r.p(0,B.e7)){q=v.G.WebGL2RenderingContext
q=A.h(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bV)){q=v.G
p=a.a
if(b.d)p.enable(A.h(q.WebGL2RenderingContext.BLEND))
else p.disable(A.h(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.bW))a.a.blendFunc(A.Bo(a,b.e),A.Bo(a,b.f))
if(r.p(0,B.bX))a.a.blendEquation(A.G3(a,b.r))
if(r.p(0,B.e5))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.e6)){q=v.G.WebGL2RenderingContext
a.a.disable(A.h(q.SCISSOR_TEST))}s.a=b},
G4(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.h(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.h(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.h(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
cQ(a,b,c,d,e,f){var s
if(a.b!==B.j)A.f(A.j(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.G4(a,b))},
bO(a,b){var s
if(a.b!==B.j)A.f(A.j(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.j)A.f(A.j(u.k))
s=a.e
if(s==null)throw A.b(A.j("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.G(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.aF(c.b))
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
A.aY(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.h(c.b))
break}},
bf(a,b){if(a.b!==B.j)A.f(A.j(u.k))
a.a.bindVertexArray(A.a(b.a))},
aD(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.f(A.j(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jC){p=s.d>1?A.h(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jB){o=s.b
if(o!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.j("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.j("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
G8(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.j(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.h(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.A2(B.W.gdY(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.b4(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.h(q.WebGL2RenderingContext.STATIC_DRAW))}},
G9(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
Bs(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.j(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cX?A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.h(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.G9(a,b.b))
return new A.dY(r)},
Bq(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
Br(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
Ga(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
yO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.j)A.f(A.j(u.k))
s=a.a
r=A.G(s.createTexture())
if(r==null)throw A.b(A.j("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.h(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.Ga(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aY(s,"texStorage3D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aY(s,"texStorage2D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.Bq(a,b.e))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.Bq(a,b.f))
p=b.r
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.Br(a,p))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.Br(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.fL(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.f(A.a6(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dY(new A.jC(r,j,i,q,m))},
yP(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.f(A.j(u.k))
s=t.o.a(b.a)
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
if(r)A.aY(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aY(l,"texSubImage2D",[m,0,0,0,q,p,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
Bt(a,b){var s,r,q
if(a.b!==B.j)A.f(A.j(u.k))
s=t.o.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.h(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
me(a,b){a.a.deleteTexture(t.o.a(b.a).a)},
Bv(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.f(A.j(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.o("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.b(A.j("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b9
if(n&&!a1.e)throw A.b(A.o("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cZ||o===B.iS
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
A.aY(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aY(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aY(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aY(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aY(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aY(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aY(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aY(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
A.aY(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.h(r.checkFramebufferStatus(A.h(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.h(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.yQ(a0,q,l,k,f,e,j,i)
throw A.b(A.j("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dY(new A.jB(q,l,k,f,e,j,i,s,a1.b,a1.c))},
yQ(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
ct(a){var s
if(a.b!==B.j)A.f(A.j(u.k))
s=A.G(a.a.createVertexArray())
if(s==null)throw A.b(A.j("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dY(s)},
Bu(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.b(A.lL(b===A.no(A.Ce(A.Dc(),r),q,t.S)?B.dZ:B.e_,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.hU(p.getShaderParameter(o,A.h(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.an(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.lL(b===A.no(A.Ce(A.Dc(),r),q,t.S)?B.dZ:B.e_,s))}return o},
Gb(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.j(u.k))
q=v.G
s=A.Bu(a,A.h(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.Bu(a,A.h(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.no)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.hU(o.getProgramParameter(n,A.h(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.an(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lL(B.e0,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.h(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lL(B.e1,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lL(B.e1,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dY(n)},
dY:function dY(a){this.a=a},
jC:function jC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jB:function jB(a,b,c,d,e,f,g,h,i,j){var _=this
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
n3:function n3(a){this.a=a
this.b=!1},
md:function md(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
uU:function uU(a){this.a=a},
uV:function uV(a){this.a=a},
vX:function vX(){},
n2:function n2(){},
uT:function uT(a){this.a=a},
uW:function uW(){},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o1(a0,a1){var s=0,r=A.aO(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$o1=A.aP(function(a2,a3){if(a2===1)return A.aL(a3,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.N
n=t.m
m=A.m(o,n)
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
a=new A.kc(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.m(o,t.a_),B.b2,A.m(n,t.jS))
a.jg(p,a1)
p=A.q(a0).i("M<1,2>")
s=3
return A.a5(A.pl(A.l8(new A.M(a0,p),p.i("aS<aw>(n.E)").a(new A.o2(a)),p.i("n.E"),t.ls),t.c),$async$o1)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.kk():m
b.buffer=p
q=a
s=1
break
case 1:return A.aM(q,r)}})
return A.aN($async$o1,r)},
kc:function kc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
o3:function o3(){},
o2:function o2(a){this.a=a},
o6:function o6(a,b){this.a=a
this.b=b},
o5:function o5(a,b,c){this.a=a
this.b=b
this.c=c},
o4:function o4(a,b){this.a=a
this.b=b},
o7:function o7(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jA:function jA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
DV(a,b,c,d,e,f,g){var s=new A.nT(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.ji(a,b,c,d,0,e,f,g)
return s},
DR(a,b){var s=new A.ny(b)
s.jf(a,b)
return s},
DU(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.M(a,A.q(a).i("M<1,2>")).gv(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aC(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.nP(A.aT(n,r,t.a))
n.jh(a)
return n},
IA(a,b){var s,r,q,p=b>>>0
for(s=new A.ds(a),r=t.E,s=new A.ai(s,s.gu(0),r.i("ai<a2.E>")),r=r.i("a2.E");s.m();){q=s.d
p=A.D0(p,q==null?r.a(q):q)}return p&2147483647},
kd:function kd(a,b){this.a=a
this.b=b},
nT:function nT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nU:function nU(){},
ny:function ny(a){this.a=a},
nz:function nz(){},
hY:function hY(){},
nA:function nA(){},
nB:function nB(){},
nP:function nP(a){this.a=a},
nR:function nR(){},
nS:function nS(){},
nQ:function nQ(){},
yr:function yr(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
o0:function o0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nV:function nV(a,b,c){this.a=a
this.b=b
this.c=c},
nW:function nW(a){this.a=a},
nX:function nX(){},
j4:function j4(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
pf:function pf(a){this.a=a},
kY:function kY(a,b,c,d,e,f,g,h,i,j){var _=this
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
qe:function qe(a){this.a=a},
EM(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.M(a,A.q(a).i("M<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aC(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return new A.qd(n)},
qd:function qd(a){this.a=a},
qh:function qh(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b5:function b5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qB:function qB(a,b,c){this.a=a
this.c=b
this.e=c},
qy:function qy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(){},
oW:function oW(){this.b=this.a=0},
qH:function qH(a){this.a=a
this.b=0
this.e=!1},
iT(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b4(a)
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
cq:function cq(a){this.a=a
this.b=0},
iY(a,b,c){return new A.k(a,b,c)},
Bg(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
uN:function uN(){},
cs:function cs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
uO:function uO(){},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uJ:function uJ(){},
uK:function uK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uL:function uL(){},
uI:function uI(){this.a=-1},
Gd(a,b,c,d){return new A.mg(d,b,c,a)},
Gf(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Ds()
s=a.d
r=A.uZ(s,0)
q=A.uZ(s,1)
p=A.uZ(s,2)
o=A.uZ(s,3)
s=t.N
n=A.Y(s)
m=a.e
if(A.bP(m,0))n.k(0,"GamepadA")
if(A.bP(m,1))n.k(0,"GamepadB")
if(A.bP(m,2))n.k(0,"GamepadX")
if(A.bP(m,3))n.k(0,"GamepadY")
if(A.bP(m,4))n.k(0,"GamepadLB")
if(A.bP(m,5))n.k(0,"GamepadRB")
if(A.bP(m,6))n.k(0,"GamepadLT")
if(A.bP(m,7))n.k(0,"GamepadRT")
if(A.bP(m,8))n.k(0,"GamepadView")
if(A.bP(m,9))n.k(0,"GamepadMenu")
if(A.bP(m,10))n.k(0,"GamepadLStick")
if(A.bP(m,11))n.k(0,"GamepadRStick")
if(A.bP(m,12))n.k(0,h)
if(A.bP(m,13))n.k(0,g)
if(A.bP(m,14))n.k(0,f)
if(A.bP(m,15))n.k(0,e)
m=n.p(0,e)?1:0
l=n.p(0,f)?1:0
k=n.p(0,h)?1:0
j=n.p(0,g)?1:0
i=new A.k(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.gag():i
return new A.mg(m,p,o,A.fe(n,s))},
uZ(a,b){return A.Ge(b<a.length?a[b]:0)},
bP(a,b){return b<a.length&&a[b]>=0.5},
Ge(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.t((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gci(a)?-s:s},
lR:function lR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mg:function mg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oq:function oq(a){this.a=a},
Eg(a,b,c){var s=new A.kB(a,c,null,b)
s.jm(a,null,null,b,c)
return s},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Et(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bH(new A.I(B.kJ,t.e2.a(new A.p7(a)),t.vL),t.yW)
return s==null?null:new A.fY(s)},
AM(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.yE(s,a,B.ka)
break
case 1:A.yE(s,a,B.kb)
break
case 2:A.yE(s,a,B.kN)
break}return s},
yE(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.K(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.k(a,p.c)
return}}},
Es(a){if(a.a!==21)return null
if(a.e)return B.fH
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fI
return B.fG},
cj:function cj(a,b){this.a=a
this.b=b},
p4:function p4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fY:function fY(a){this.a=a},
p7:function p7(a){this.a=a},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
Fb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.t(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.lp(s,new A.k(o,n,m),q,p,l,j)
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
lp:function lp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
IC(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gL(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.fY)
p.l(0,q,r.b)}return p},
w2(a){var s,r,q,p,o,n=a.ga4().bD(0)
B.a.X(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.l(0,o,A.C5(a.h(0,o)))}return A.aT(r,t.N,s)},
C5(a){var s
if(t.f.b(a))return A.w2(A.IC(a))
if(t.j.b(a)){s=t.z
return A.ad(J.e4(a,A.Jy(),s),s)}if(a==null||A.bG(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.hX)
return a}throw A.b(A.N("presentation snapshot contains unsupported value "+J.eP(a).q(0),null,null))},
rJ:function rJ(a){this.a=a},
B1(a,b,c){var s=A.z6(b),r=A.z6(a)
if(c!==2)A.f(A.a6(c,"version","unsupported save version"))
return new A.hk(c,s,r)},
z6(a){var s,r,q,p,o=A.q(a).i("ac<1>"),n=A.J(new A.ac(a,o),o.i("n.E"))
B.a.X(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.l(0,p,A.C4(a.h(0,p)))}return A.aT(s,t.N,o)},
C4(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gL(),r=r.gv(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.hH)
s.l(0,p,q.b)}return A.z6(s)}if(t.j.b(a)){r=t.z
return A.ad(J.e4(a,A.JC(),r),r)}if(a==null||A.bG(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i1)
return a}throw A.b(A.N("save contains unsupported value "+J.eP(a).q(0),null,null))},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
t6:function t6(){},
fd:function fd(a,b){this.a=a
this.b=b},
Ao(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.pr(a,b,c,d,e,f,g,s,r,h)},
Ap(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aX(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.hG)
r=d.h(0,"runSeed")
q=A.aX(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aX(p)||p<1||typeof o!="number")throw A.b(B.ii)
if(!isFinite(5760))throw A.b(A.a6(5760,"daySeconds","must be finite and > 0"))
n=new A.kO(p,7,5760)
n.ig(o)
s=t.N
m=t.z
l=A.EW(a5,A.aW(a0,s,m))
k=A.Ed(l,A.aW(a,s,m),n)
j=A.CS(a3,c)
A.EL(A.aW(a1,s,m)).lz(j)
s=A.aW(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bG(f))A.f(B.hb)
e=A.F4(d.h(0,"narrative"))
if(e==null)e=A.ra(null,null,null)
return A.Ao(c,q,j,n,l,k,new A.ky(i,h,g,f),e)},
Hr(a){var s
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
dw:function dw(a,b){this.a=a
this.b=b},
kN:function kN(a,b){this.c=a
this.d=b},
ps:function ps(a,b,c){this.a=a
this.b=b
this.r=c},
pr:function pr(a,b,c,d,e,f,g,h,i,j){var _=this
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
pt:function pt(a){this.a=a},
pu:function pu(){},
pv:function pv(){},
pw:function pw(a){this.a=a},
px:function px(){},
A8(a){var s,r,q,p,o,n,m,l,k,j="modelScale",i=A.jU(a,"house manifest"),h=typeof i.h(0,j)=="number"?A.a0(i.h(0,j)):1
if(!isFinite(h)||h<=0)throw A.b(B.hs)
s=A.bR(i,"houseId")
r=A.bR(i,"sourceRef")
q=A.bR(i,"presentationScope")
p=A.bR(i,"storyAuthority")
o=J.e4(A.hJ(i,"levels"),new A.o8(),t.mD)
o=A.J(o,o.$ti.i("Z.E"))
o.$flags=1
n=J.e4(A.hJ(i,"rooms"),new A.o9(h),t.bJ)
n=A.J(n,n.$ti.i("Z.E"))
n.$flags=1
m=J.e4(A.hJ(i,"portals"),new A.oa(h),t.lT)
m=A.J(m,m.$ti.i("Z.E"))
m.$flags=1
l=J.e4(A.hJ(i,"stairs"),new A.ob(),t.gI)
l=A.J(l,l.$ti.i("Z.E"))
l.$flags=1
k=J.e4(A.hJ(i,"exteriorCells"),new A.oc(),t.N)
k=A.J(k,k.$ti.i("Z.E"))
k.$flags=1
s=new A.ke(s,r,q,p,o,n,m,l)
s.eG()
return s},
CS(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
a5.eG()
s=A.Ar(a6)
r=new A.xp()
for(q=a5.r,p=q.length,o=t.N,n=s.b,m=t.nm,l=0;l<q.length;q.length===p||(0,A.r)(q),++l){k=q[l]
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
for(b=k.e,a=b.length,a0=0;a0<b.length;b.length===a||(0,A.r)(b),++a0){a1=b[a0]
e.push(new A.fo(a1.a,a1.b,a1.c,a1.d,a1.e,a1.f,a1.r))}a2=A.aC(k.f,!1,o)
a2.$flags=3
B.a.k(n,new A.fc(j,new A.k(d,c,h),new A.k(g,f,i),e,A.H6(j),k.r,k.w,k.x))}for(q=a5.w,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.r)(q),++l){a3=q[l]
B.a.k(o,new A.c7(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a5.x,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.r)(q),++l){a4=q[l]
a2=A.aC(a4.c,!1,n)
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
B.a.k(o,new A.fh(a4.a,a4.b,new A.k(i,h,m),new A.k(f,e,j[2])))}s.na()
return s},
H6(a){var s
A:{if("living-room"===a){s=A.c([A.yA("mantle-living",!0,new A.k(3.7,1.45,0.8),"living-room gas mantle"),A.yA("mantle-living-second",!1,new A.k(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.yA("mantle-hall",!1,new A.k(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.kf
break A}return s},
DX(a,b){var s,r=A.jU(a,"room"),q=A.bR(r,"id"),p=A.bR(r,"floor"),o=A.CG(r.h(0,"origin"),"origin",b),n=A.CG(r.h(0,"size"),"size",b),m=J.e4(A.hJ(r,"windows"),new A.ol(b),t.ya)
m=A.J(m,m.$ti.i("Z.E"))
m.$flags=1
s=J.e4(A.hJ(r,"portalIds"),new A.om(),t.N)
s=A.J(s,s.$ti.i("Z.E"))
s.$flags=1
return new A.ea(q,p,o,n,m,s,A.zD(r,"wall"),A.zD(r,"floor"),A.zD(r,"ceiling"))},
jU(a,b){return t.P.b(a)?a:A.e_(b+" is not an object")},
hJ(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.e_(b+" is not a list")},
bR(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e_(b+" is not a string")},
zD(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.e_("surface is not an object")
return A.bR(s,b)},
zb(a,b){var s,r=A.bR(a,b)
A:{if("north"===r){s=B.z
break A}if("east"===r){s=B.ah
break A}if("south"===r){s=B.q
break A}if("west"===r){s=B.ai
break A}s=A.e_(b+" has unknown facing "+r)}return s},
Ib(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gO(a)||s.M(a,new A.x0())}else s=!0
if(s)return A.e_(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.Q(a);r.m();)s.push(A.a0(r.gn()))
return s},
eI(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e_(b+" is not finite")},
nl(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xl())}else s=!0
if(s)return A.e_(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.Q(a);r.m();)s.push(A.a0(r.gn()))
return s},
CG(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.nl(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
k_(a,b){var s,r,q=A.Y(t.N)
for(s=J.Q(a);s.m();){r=s.gn()
if(!q.k(0,r))throw A.b(A.N("duplicate "+b+" id "+r,null,null))}},
e_(a){return A.f(A.N(a,null,null))},
ke:function ke(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h},
o8:function o8(){},
o9:function o9(a){this.a=a},
oa:function oa(a){this.a=a},
ob:function ob(){},
oc:function oc(){},
oe:function oe(){},
of:function of(){},
og:function og(){},
oh:function oh(){},
oi:function oi(){},
oj:function oj(){},
ok:function ok(){},
od:function od(a){this.a=a},
xp:function xp(){},
e8:function e8(a){this.a=a},
ea:function ea(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ol:function ol(a){this.a=a},
om:function om(){},
ec:function ec(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e9:function e9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eb:function eb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
x0:function x0(){},
xl:function xl(){},
kk:function kk(a,b){this.a=a
this.b=b
this.d=null},
oB:function oB(a){this.a=a},
lc:function lc(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pW:function pW(){this.b=0},
a7:function a7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kE:function kE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
p9:function p9(){},
kV:function kV(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(){},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
JM(a){var s,r,q,p,o,n,m,l
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
return new A.bV(B.ab,p,new Uint16Array(A.X(a.b)),new A.fG(new A.C(s.a,s.b,s.c),new A.C(s.d,s.e,s.f)))},
JL(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Iz(a,new A.yj(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.kF(o,p.c,p.e))}return n},
Iz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.A()
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
throw A.b(A.o("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.p(d,":")?B.c.H(d,0,B.c.bB(d,":")):null
l=new A.dh(d,l,h,A.c([],p))
s.l(0,d,l)}B.a.J(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("ao<2>")
q=A.J(new A.ao(s,q),q.i("n.E"))
B.a.W(q,new A.xd())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].oG(a))
return r},
H9(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.kE(r,q,p,o,n,m)},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
yj:function yj(a){this.a=a},
xd:function xd(){},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eW:function eW(a,b){this.a=a
this.b=b},
kG:function kG(){},
J4(a){var s,r,q,p=new A.pX(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.Hu(p,a,B.dk[s],15.75,15.75,12.044999999999998,0.63)
p.D(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.D(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.D(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.D(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.D(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.D(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.D(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.D(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a7(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a7(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.aq(r,new A.a7(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.aq(r,q,new A.a7(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a7(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a7(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.aq(q,new A.a7(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.aq(q,r,new A.a7(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.D(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.aq(new A.a7(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a7(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a7(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.aq(new A.a7(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a7(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a7(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a7(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a7(7.875,16.32,16.383,-1,0,0,1,1,0)
p.aq(r,new A.a7(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.aq(r,q,new A.a7(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a7(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a7(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.aq(q,new A.a7(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.aq(q,r,new A.a7(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.In(p,15.75,15.75,12.044999999999998,16.32)
A.Hc(p,15.75,15.75,16.32)
A.Hq(p,15.75,15.75,12.044999999999998)
A.Hy(p,a,15.75)
A.Iu(p,15.75,15.75)
A.H8(p,15.75)
return p.lI()},
Hu(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ah!==b7,p=B.z!==b7,o=B.q===b7,n=B.ai===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.r)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.k(b4,new A.eC(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aQ(i),b=J.Q(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.b3(i)!==b7)continue
B:{if(!p||o){a0=g+a.aL(i)
break B}if(!q||n){a0=e+a.aL(i)
break B}a0=null}B.a.k(b4,new A.eC(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.z||b7===B.q?b8:b9
r=t.i
a1=A.aI([0,s],r)
a2=A.aI([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.J(a1,a1.$ti.c)
B.a.X(a4)
a5=A.J(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.wO(b0,b1,b2,b3)))continue
switch(m){case 0:b5.D(0,b1,b3,0,b0,b2,r)
break
case 2:b5.D(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.D(0,0,b3,b1,r,b2,b0)
break
case 1:b5.D(0,s,b3,b1,b8,b2,b0)
break}}A.Hx(b5,b4,b7,b8,b9,c1)
A.Hv(b5,b4,b7,b8,b9,c1)
A.Hw(b5,b4,b7,b8,b9,c0,c1)},
Hw(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aI([0,a4===B.z||a4===B.q?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.k(0,q.a)
a1.k(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.wN(a,a0,g)))continue
switch(s){case 0:a2.D(1,a0,e,m,a,f,l)
break
case 2:a2.D(1,a0,e,k,a,f,j)
break
case 3:a2.D(1,m,e,a0,l,f,a)
break
case 1:a2.D(1,o,e,a0,n,f,a)
break}}}},
Hv(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.r)(a4),++g){f=a4[g]
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
break}}if(a5!==B.z)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.D(2,a+0.18,n,r,a,a1,p)}}},
Hx(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.r)(a3),++h){g=a3[h]
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
break}if(!f)A.Is(a2,g,a4,a5,a6,a7,q)}},
Is(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
In(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.D(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.D(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.D(4,i,p,-0.38,j,q,-0.44)
a.D(4,i,p,s,j,q,o)}A.Io(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.D(5,h+0.5,p,o,h-0.5,r,q)}},
Io(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a7(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a7(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.aq(n,new A.a7(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.aq(n,m,new A.a7(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a7(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a7(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.aq(m,new A.a7(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.aq(m,n,new A.a7(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Hc(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.D(0,g+0.35,k,n,g-0.35,l,q)
a.D(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.D(5,d+0.1,o,m,d-0.1,r,p)}}},
Hq(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.D(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.D(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.D(6,j,b+0.06,d,k,b,e)}a.D(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Hy(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
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
Iu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
H8(a,b){var s,r
a.D(0,6.7,1,-4.05,-2.5,0,-4.4)
a.D(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.D(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.D(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wO:function wO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wN:function wN(a,b,c){this.a=a
this.b=b
this.c=c},
JA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.zN(b,d,c)
if(k!=null){s=k.b
return new A.el(B.fP,k.a,s)}r=A.Da(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.el(B.fQ,r.a,s)}if(A.Db(b,d,c)!=null)return B.fU
q=A.Jz(a,b,c,d)
if(q!=null)return new A.el(B.cG,q.a,"inspect the "+q.b)
p=A.D9(b,c,d,e)
if(p!=null){o=e.bJ(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.el(B.fS,l,m?"inspect the "+o.b:"inspect "+n)}return B.fV},
D9(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.nn(a5,s,4.5)
for(q=a6.i7(a4),p=J.Q(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.bJ(i.c)
g=i.f.a
f=i.eB(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.k(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.gag()
a0=a3.b
a1=Math.acos(B.b.t(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.np(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Jz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.ix(c)
if(s.length===0)return f
r=d.aG(e)
q=A.nn(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.r)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.gag()
j=b.b
if(Math.acos(B.b.t(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.np(d,c,b.a,new A.k(n,m,o)))return k}return f},
dv:function dv(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
J5(a,b){var s,r=new A.cq(new Float32Array(5376)),q=new A.cq(new Float32Array(5376)),p=new A.cq(new Float32Array(5376)),o=new A.cq(new Float32Array(5376)),n=b.d,m=a.aG(b),l=A.kW(b.y),k=A.kW(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.eq(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.eq(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.H1(p,a,b,m,B.dk[s])
for(j=a.aQ(b.a),i=J.Q(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.BU(o,b,m,h,!0)}j=B.r.aB(r.a,0,r.b)
i=B.r.aB(q.a,0,q.b)
h=B.r.aB(p.a,0,p.b)
B.r.aB(o.a,0,o.b)
return new A.t3(j,i,h)},
J2(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cq(new Float32Array(5376))
r=a.aG(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.BV(s,b,r,c,q)
return B.r.aB(s.a,0,s.b)},
J3(a,b){var s,r,q,p=new A.cq(new Float32Array(5376)),o=a.aG(b)
for(s=a.aQ(b.a),r=J.Q(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.BU(p,b,o,q,!1)}return B.r.aB(p.a,0,p.b)},
H1(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.z||a4===B.q?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aQ(s),q=J.Q(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.b3(s)===a4)a.push(new A.eB(p.aL(s),p.aL(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eB(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aI([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.J(0,A.c([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.X(l)
s=A.aI([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.J(0,A.c([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.vY(f,e,d,c)))continue
A.IR(a0,a2,a3,a4,f,e,d,c)}A.H2(a0,a2,a3,a4,b,a)},
H2(a,b,c,d,e,f){return},
hR(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.aM(j,l,g,h,d)
a.aM(s,r,q,p,d)
a.aM(l,s,p,g,d)
a.aM(r,j,h,q,d)
a.aM(l,j,r,s,d)
a.aM(g,p,q,h,d)},
IR(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.kW(n).e
a.eq(s.a5(0,o),r.a5(0,o),q.a5(0,o),p.a5(0,o),A.kW(n).c,(f-e)/m,(a1-a0)/m)
l=A.IS(b,d)
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
default:j=k}A.au(a,o,j,A.Iv(A.kW(n).c,0.68))},
Iv(a,b){var s,r=new A.xa(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.iS()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.iS()
r=r.$1(a&255)
if(typeof r!=="number")return A.xB(r)
return(q<<16|s<<8|r)>>>0},
IS(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
BU(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b3(d),b=a3.aL(d),a=b+a3.w
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
break}if(a4)A.BV(a0,a1,a2,a3,q)
A.H0(a0,a1,a2,a3)},
H0(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aL(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.b3(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.z
q=!r||s===B.q?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.hR(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.q?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hR(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.q?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hR(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.q?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hR(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.q,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hR(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hR(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hR(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
BV(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b3(o),m=d.aL(o)
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
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xa:function xa(a){this.a=a},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ar(a){var s=t.N
return new A.pU(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.m(s,t.z_),A.m(s,t.W),new A.pW())},
pU:function pU(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qa:function qa(a){this.a=a},
nn(a,b,c){var s=a.aG(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
np(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.HX(a,s,c,d)},
HX(a,b,c,d){var s,r,q,p,o=a.aG(b),n=d.ad(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.w4(a,b,o,B.z,r,q,p,c,n,m))return!0
if(A.w4(a,b,o,B.q,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.w4(a,b,o,B.ai,s,r,q,c,n,m))return!0
if(A.w4(a,b,o,B.ah,s+o.a,r,q,c,n,m))return!0
return!1},
w4(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a5(0,a6.a8(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.z||a1===B.q
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aQ(m),k=J.Q(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.b3(m)===a1){g=q.aL(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
zN(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.nn(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.r)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.k(h-f.a,g-f.b,i-f.c)
d=e.gu(0)
if(d<0.01||d>s)continue
c=e.gag()
f=a.b
if(Math.acos(B.b.t(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.np(a0,a1,a.a,new A.k(h,g,i)))continue
m=d
l=j}}return l},
Da(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.nn(b,j,4.5):4.5
for(s=b.aQ(c),r=J.Q(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.nZ(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.Cj(l,k,a,i,0.5236)||k>=q)continue
if(!A.np(b,c,a.a,n))continue
q=k
p=o}return p},
Db(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.nn(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
l=A.IV(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.Cj(j,i,a,s,0.5236)||i>=p)continue
if(!A.np(b,c,a.a,l))continue
p=i
o=m}return o},
Cj(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.t(a.gag().bo(c.b),-1,1))<=e},
IV(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
p8:function p8(){this.a=null
this.b=0},
tZ:function tZ(){},
u_:function u_(){},
EQ(a){var s,r=A.jT(a,"inventory asset"),q=A.e2(r,"id"),p=A.e2(r,"kind")
A.e2(r,"source")
A.e2(r,"proxy")
A.e2(r,"pivot")
s=A.an(r.h(0,"status"))
if(s==null)s="proxy"
r=A.jT(r.h(0,"bounds"),"inventory bounds")
return new A.d5(q,p,s,new A.qi(A.nk(r.h(0,"min"),"bounds.min"),A.nk(r.h(0,"max"),"bounds.max")))},
ER(a4){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.jT(a4,"inventory placement"),g=A.jT(h.h(0,"visibility"),"placement visibility"),f=A.jT(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.l4,a=A.e2(h,"id"),a0=A.e2(h,"roomId"),a1=A.e2(h,"assetId"),a2=A.e2(h,"role"),a3=typeof h.h(0,"socket")=="string"?A.t(h.h(0,"socket")):null
h=A.jT(h.h(0,"transform"),"inventory transform")
s=A.nk(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.f(B.hM)
r=A.nk(h.h(0,"position"),"transform.position")
q=A.nk(h.h(0,"rotation"),"transform.rotation")
p=A.e2(g,"layer")
if(typeof g.h(0,i)=="string")A.t(g.h(0,i))
o=J.aa(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.t(f.h(0,"focusId")):null
c=c.b(e)?A.wZ(e,"radius"):0
m=b.gO(b)?0:A.wZ(b,"heatOutputWatts")
l=b.gO(b)?0:A.wZ(b,"surfaceTemperatureCelsius")
k=b.gO(b)?0:A.wZ(b,"radiusM")
if(b.gO(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a0(b.h(0,"offsetY")):0
return new A.cG(a,a0,a1,a2,a3,new A.qk(r,q,s),p,o,n,c,m,l,k,j)},
jT(a,b){return t.P.b(a)?a:A.dZ(b+" is not an object")},
e2(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dZ(b+" is not a string")},
wZ(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dZ(b+" is not finite")},
nk(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xk())}else s=!0
if(s)return A.dZ(b+" is not a finite vec3")
s=J.aQ(a)
return new A.k(A.a0(s.h(a,0)),A.a0(s.h(a,1)),A.a0(s.h(a,2)))},
dZ(a){return A.f(A.N(a,null,null))},
pZ:function pZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q1:function q1(a){this.a=a},
q_:function q_(a){this.a=a},
q0:function q0(a){this.a=a},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a,b){this.a=a
this.b=b},
xk:function xk(){},
qj:function qj(a){this.a=a},
dH:function dH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
q2:function q2(a){this.a=a},
q3:function q3(a){this.a=a},
yA(a,b,c,d){return new A.l7(a,d,c,b)},
ek:function ek(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=!0},
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=!1},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
fc:function fc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
EK(a){return A.EJ(a)},
EJ(a){var s,r,q,p,o,n,m=A.Cr(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.Cr(m.h(0,"cues"),"sound emitter cues").gL(),s=s.gv(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.hF)
k.l(0,r.a,q)}s=A.zA(m,"id")
r=A.zA(m,"roomId")
p=A.zA(m,"placementId")
o=A.IQ(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hH("gain is not a number")
return new A.d4(s,r,p,o,n,A.aT(k,l,l))},
Cr(a,b){return t.P.b(a)?a:A.hH(b+" is not an object")},
zA(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hH(b+" is not a string")},
IQ(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xj())}else s=!0
if(s)throw A.b(A.N(b+" must be a numeric vec3",null,null))
s=J.aQ(a)
return new A.k(A.a0(s.h(a,0)),A.a0(s.h(a,1)),A.a0(s.h(a,2)))},
hH(a){return A.f(A.N(a,null,null))},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a){this.a=a},
q7:function q7(a){this.a=a},
q8:function q8(){},
d4:function d4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pV:function pV(){this.b=this.a=null},
f0:function f0(a,b){this.a=a
this.b=b},
q4:function q4(){this.b=this.a=null},
d3:function d3(a,b){this.a=a
this.b=b},
xj:function xj(){},
As(a,b,c,d,e,f){var s=t.N
return new A.q9(e,f,c,a,A.aT(A.aW(d,s,s),s,s),A.ad(b,s))},
At(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.l(0,p.a,new A.iC(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.l(0,j.a,new A.iq(j.d,j.r))}return A.As(a.r.b,B.m,i,B.aK,h,s)},
EL(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.l5
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bs
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aX(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.hC)
p=t.N
o=A.m(p,t.DL)
for(n=a.gL(),n=n.gv(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cJ)
l=A.aW(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bG(j)||!A.bG(i))A.f(B.cJ)
o.l(0,k,new A.iC(j,i))}h=A.m(p,t.y)
for(n=a0.gL(),n=n.gv(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bG(l.b))throw A.b(B.hy)
h.l(0,k,A.R(l.b))}g=A.m(p,t.m2)
for(n=a1.gL(),n=n.gv(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cH)
l=A.aW(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bG(f)||!A.bG(e))A.f(B.cH)
g.l(0,k,new A.iq(f,e))}d=A.m(p,p)
for(q=s.gL(),q=q.gv(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.iw)
d.l(0,n,A.t(p.b))}c=A.c([],t.s)
for(q=J.Q(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fW)
B.a.k(c,b)}return A.As(a2,c,g,d,o,h)},
zv(a,b){return a.a.a===b.a&&a.a2(0,b.gaC(b))},
q9:function q9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iC:function iC(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
kW(a){var s=B.by.h(0,a)
if(s==null)throw A.b(A.j("Unknown house surface material: "+a))
return s},
by:function by(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Eq(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.h8(e,A.B(e).c)
q=new A.eD()
q.bZ((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.i7(a,q,2,r,1+s,A.aI(["time"],t.N))
break
case 3:A.i7(a,q,3,r,1+s,A.aI(["place"],t.N))
break
case 4:A.i7(a,q,4,r,2+s,p)
A.Em(a,q,4)
break
case 5:A.i7(a,q,5,r,s,p)
A.Ek(a,q,5)
break
case 6:A.i7(a,q,6,r,s,p)
A.El(a,q)
A.Ep(a,q,6)
break
case 7:A.En(a,q,7)
break
default:if(s>0)A.i7(a,q,b,r,s,p)}},
Ej(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.Eo(a,b,c))return!1
return!0},
i7(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>"));s.m();){r=s.d
if(A.Ej(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.ds(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.Ak(a,b,o[p],f)}},
Ak(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aW(B.a.ga6(o).a,n,n)
if(d==null)s=A.c(B.C.slice(0),t.s)
else{n=t.vY
s=A.J(new A.I(B.C,t.Ag.a(new A.p3(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aW(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eX(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.aW(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.e2(c.a,m,B.a.ga6(o).b)},
Em(a,b,c){var s=A.Al(a,b,c)
if(!a.c8(s))return
a.f8(c,t.G.a(s),0,B.bg,null)},
Al(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.C[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.aW(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
Ek(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.ds(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aW(B.a.ga6(i).a,s,s)
r=p.c
n=A.aW(B.a.ga6(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.C[m]
k=o.h(0,l)
j=s.eX(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aW(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.e2(q.a,o,B.a.ga6(i).b)
a.e2(p.a,n,B.a.ga6(r).b)},
El(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aW(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a7(0,q[r].a)},
Ep(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aW(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.Ak(a,b,q[s],null)},
En(a,b,c){var s=c+1,r=A.Al(a,b,s)
if(!a.c8(r))return
a.f8(s,t.G.a(r),0,B.bg,null)},
Eo(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga6(b.c).c===B.aH}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga6(b.c).c===B.aH}if(c===21)return b.e
return!1},
p3:function p3(a){this.a=a},
FW(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.C[s]
q=a.h(0,r)
p=A.aC(q==null?B.m:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.uF(n)},
qC(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.C[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.l6(A.aT(p,q,q),b,c)},
AE(a){var s=t.N
return A.qC(t.P.a(a.h(0,"fields")).bs(0,new A.qD(),s,s),A.a0(a.h(0,"shakiness")),A.Ev(B.k8,A.t(a.h(0,"hand")),t.qX))},
Eu(a){var s,r,q,p,o=a.h(0,"margin"),n=A.h(a.h(0,"ordinal")),m=A.h(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.Q(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.AE(r.a(s.gn())))
s=A.an(a.h(0,"corroborator"))
q=A.R(a.h(0,"locked"))
p=A.z1(a.h(0,"lastReadDay"))
return new A.c2(n,m,l,s,q,p,o==null?null:A.AE(r.a(o)))},
en:function en(a,b){this.a=a
this.b=b},
uF:function uF(a){this.a=a},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(){},
qE:function qE(a){this.a=a},
c2:function c2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AB(a){return new A.qn(a,A.m(t.S,t.g),A.Y(t.N),A.c([],t.t))},
EW(a,b){var s,r,q,p,o=A.AB(a)
o.e=A.h(b.h(0,"nextOrdinal"))
o.f=A.h(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.DL(s.a(b.h(0,"tags")),t.N))
for(s=J.Q(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Eu(r.a(s.gn()))
q.l(0,p.a,p)}return o},
qn:function qn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
qu:function qu(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
on:function on(){},
Fc(a){var s,r,q,p,o,n,m,l,k=B.f.al(a,null),j=t.f
if(!j.b(k)||!J.aa(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.h0)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.ic)
r=A.c([],t.d8)
for(q=J.Q(s);q.m();){p=q.gn()
if(j.b(p)){o=A.an(p.h(0,"assetId"))
if(o==null)o=""
n=A.an(p.h(0,"licenseId"))
if(n==null)n=""
m=A.an(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.an(p.h(0,"sourceFormat"))
r.push(new A.iE(o,n,m,l==null?"":l))}else r.push(A.f(B.hR))}return new A.rC(A.Fd(r))},
Fd(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.iI("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.N("promoted model index ID is invalid: "+o,n,n))
if(k.K(o))throw A.b(A.N("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aY(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.N("promoted model index rights are unknown: "+o,n,n))
if(!A.aI(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.b(A.N("promoted model index source format is invalid: "+o,n,n))
if(!A.Ir(q.c))throw A.b(A.N("promoted model index manifest path is unsafe: "+o,n,n))
k.l(0,o,q)}return A.aT(k,m,l)},
Ir(a){if(a.length===0||B.c.U(a,"/")||B.c.p(a,"://"))return!1
if(B.c.bp(a.toLowerCase(),".obj")||B.c.bp(a.toLowerCase(),".mtl")||B.c.bp(a.toLowerCase(),".fbx"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.x9())},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rC:function rC(a){this.a=a},
x9:function x9(){},
AP(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.m(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.iI("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.N("asset ID is not stable kebab-case: "+o,j,j))
if(g.K(o))throw A.b(A.N("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.b(A.N("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aY(m).length===0||m==="unknown"||m==="unlicensed")throw A.b(A.N("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.b(A.N("package is not approved: "+o,j,j))
l=A.Df(n)
if(l.length!==0)throw A.b(A.N("package manifest is invalid for "+o+": "+B.a.br(l,new A.rE(),i).V(0,"; "),j,j))
p=p.b
k=A.JO(n,p)
if(k.length!==0)throw A.b(A.N("package payloads are invalid for "+o+": "+B.a.br(k,new A.rF(),i).V(0,"; "),j,j))
if(A.AL(n,p)!==n.c)throw A.b(A.N("package hash mismatch: "+o,j,j))
g.l(0,o,q)}return A.aT(g,i,h)},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a){this.a=a},
rE:function rE(){},
rF:function rF(){},
rw:function rw(){},
rv:function rv(a,b,c){this.b=a
this.c=b
this.d=c},
rx:function rx(){},
Fa(a,b,c){return B.ma},
ln:function ln(a,b){this.a=a
this.b=b},
ry:function ry(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rz:function rz(){},
rA:function rA(a){this.d=a},
he:function he(){},
rB:function rB(a){this.a=a},
rD:function rD(){},
rG:function rG(a,b){this.a=a
this.b=b},
rH:function rH(){},
rI:function rI(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rP:function rP(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
AZ(a){if(!isFinite(0))A.f(A.a6(0,"interpolation",null))
return new A.t1(a)},
lB:function lB(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
t1:function t1(a){this.a=a},
lC:function lC(a,b,c){this.a=a
this.b=b
this.c=c},
AX(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.h8(c,A.B(c).c)
r=A.J(r,A.q(r).c)
B.a.X(r)
s=t.N
r=A.ad(r,s)
r=new A.t0(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aT(l,s,t.X))
r.jr(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
AY(a,b,c,d){var s=A.nd("RENDERER_SHA"),r=A.nd("GAME_SHA"),q=A.nd("DART_SDK_VERSION")
return A.AX(a,"9a4468d95b18-2f544eaae016-dirty",b,!1,null,r,A.nd("LOCKFILE_SHA256"),d,A.nd("PROJECT_VERSION"),s,q,null)},
nd(a){var s=B.kY.h(0,a)
return s.length===0?null:s},
t0:function t0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
t2:function t2(a){var _=this
_.a=a
_.d=_.c=_.b=0},
tQ:function tQ(a){this.a=a},
tR:function tR(){},
a3(a,b,c,d,e,f,g,h,i,j){return new A.cp(e,g,a,f,i,h,j,c,c,b,B.e2)},
B4(){var s=new A.tS(B.aS)
s.w=t.yu.a(A.c([A.a3(B.Z,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a3(B.Z,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a3(B.Z,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a3(B.Z,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a3(B.Z,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a3(B.aa,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a3(B.aa,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a3(B.aa,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a3(B.aa,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a3(B.aa,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a3(B.ar,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a3(B.ar,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a3(B.ar,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a3(B.ar,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a3(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a3(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a3(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a3(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a3(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a3(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a3(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a3(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a3(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a3(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a3(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a3(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a3(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a3(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a3(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a3(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a3(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a3(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a3(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a3(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a3(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a3(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a3(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a3(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a3(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a3(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a3(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a3(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a3(B.Z,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.a3(B.O,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.a3(B.O,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.a3(B.O,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.a3(B.O,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.a3(B.O,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.a3(B.O,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.a3(B.O,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05)],t.hT))
return s},
lM:function lM(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
tS:function tS(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
tX:function tX(a){this.a=a},
tT:function tT(){},
tU:function tU(){},
tY:function tY(){},
tW:function tW(a){this.a=a},
tV:function tV(a){this.a=a},
FI(a){var s,r,q,p,o,n=B.b.t(a,7,17),m=new A.u3()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.ct()
if(o<n)s=p
else r=p}return(s+r)*0.5},
u3:function u3(){},
Ah(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.f(A.N("saved day-loop resources must not be negative",null,null))
return new A.oX(c,g,b,a,e,d===!0,s)},
Ed(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.hk)
s=A.c([],t.El)
for(r=J.Q(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.hD)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aX(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.hd)
f=A.bH(new A.I(B.da,q.a(new A.oY(h)),p),o)
e=A.bH(new A.I(B.dj,n.a(new A.oZ(g)),m),l)
if(f==null||e==null)throw A.b(B.im)
B.a.k(s,new A.hn(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aX(d)||!A.aX(c)||!A.aX(b)||!A.bG(a))throw A.b(B.hO)
return A.Ah(c,d,a1,a,b,s,a3)},
bY:function bY(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
oX:function oX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oY:function oY(a){this.a=a},
oZ:function oZ(a){this.a=a},
kZ:function kZ(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
uY:function uY(a,b){this.b=a
this.c=b},
fp:function fp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
qb:function qb(a){this.c=a},
qf:function qf(a,b,c){this.a=a
this.b=b
this.d=c},
qg:function qg(){},
ze(a){var s,r,q,p=A.c([],t.s),o=A.Y(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.b(B.ij)
B.a.k(p,q)}return p},
co:function co(a,b){this.a=a
this.b=b},
t4:function t4(){},
da:function da(){},
t5:function t5(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
HD(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.wP(s,a).$0())
return r},
nh(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
eu:function eu(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uR:function uR(a){this.b=a},
wP:function wP(a,b){this.a=a
this.b=b},
jO(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
Bm(a){var s
switch(a.a){case 0:s=B.oQ
break
case 1:s=B.oP
break
case 2:s=B.oS
break
case 3:s=B.oO
break
case 4:s=B.oR
break
default:s=null}return s},
Bl(a,b){return new A.mc(!1,0,0)},
FZ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.jO(f)||!A.jO(a)||!A.jO(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.b(A.o("weather impact inputs must be finite and valid",j))
if(b===B.w)return A.Bl(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.A()
m=A.FY(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.Bl(a,g)
f.a5(0,a.ad(0,f).a8(0,p))
l=g.bo(g)
A:{if(B.aL===b||B.am===b){s=B.oM
break A}if(B.an===b){s=q.d>0.5?B.oN:B.c8
break A}if(B.a6===b){s=l>1?B.eq:B.c8
break A}if(B.w===b){s=B.oL
break A}s=j}if(s===B.eq){k=q.e
g.ad(0,r.a8(0,2*g.bo(r))).a8(0,k)}s=s===B.c8?d:0
return new A.mc(!0,0.5*d*l,s)},
FY(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.ad(0,new A.k(a2,a2,a2)),d=a1.c.a5(0,new A.k(a2,a2,a2)),c=a0.ad(0,a),b=new A.k(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.uP(a,o)
m=A.uP(c,o)
l=A.uP(e,o)
k=A.uP(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.Bj(o,m>0)
if(j>i){h=A.Bj(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.Bk(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.Bk(c)}if(r>1)return f
return new A.a9(r,b)},
uP(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
Bj(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.k(r,0,0)
break A}if(1===a){s=new A.k(0,r,0)
break A}s=new A.k(0,0,r)
break A}return s},
Bk(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.k(0,q>0?-1:1,0)
if(r>=n)return new A.k(s>0?-1:1,0,0)
return new A.k(0,0,o>0?-1:1)},
Bn(a,b,c){var s=new A.hv(b,c,a)
s.hb()
return s},
yN(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
if(!isFinite(b0))A.f(A.a6(b0,"roomTemperatureCelsius",a2))
s=b1.c
if(!isFinite(s))A.f(A.a6(s,a3,a2))
r=b1.d
if(!isFinite(r))A.f(A.a6(r,a4,a2))
q=b1.e
if(!isFinite(q))A.f(A.a6(q,a5,a2))
p=b1.f
if(!isFinite(p))A.f(A.a6(p,"internalHeatWatts",a2))
o=b1.r
if(!isFinite(o))A.f(A.a6(o,a6,a2))
n=b1.w
if(!isFinite(n))A.f(A.a6(n,a7,a2))
m=b1.x
if(!isFinite(m))A.f(A.a6(m,"dtSeconds",a2))
if(s<0||s>1)A.f(A.a6(s,a3,a8))
if(r<0||r>1)A.f(A.a6(r,a4,a8))
if(q<=0)A.f(A.a6(q,a5,a9))
if(o<=0)A.f(A.a6(o,a6,a9))
if(n<=0)A.f(A.a6(n,a7,a9))
l=b1.a
k=1-r*0.85
j=l.e*(1-r*0.9)
r=l.f
i=Math.cos(r)
r=Math.sin(r)
h=l.w
if(h===B.w&&l.b)h=B.aL
g=A.G_(h,B.b.t(l.c,0,1))*k
f=A.G0(h)
e=h===B.an?g/120:0
d=h===B.w?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.t(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.uQ(h,new A.k(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
G1(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.jO(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.b(A.o("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.f(A.o("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.f(A.o("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.k(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.t((e-b)/Math.max(1,s),0,1)
return new A.uH(m,e,l,d,e>b)},
G_(a,b){var s
if(a===B.w)return 0
s=0.00005+b*0.00045
return a===B.a6?s*0.75:s},
G0(a){var s
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
j2:function j2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uH:function uH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uQ:function uQ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fn:function fn(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fl:function fl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ez:function ez(a,b){this.a=a
this.b=b},
mc:function mc(a,b,c){this.a=a
this.f=b
this.r=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
uS:function uS(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
J0(a){var s
A:{if("broadcast"===a){s=B.eF
break A}if("visitor"===a){s=B.eG
break A}if("aftermath"===a){s=B.eH
break A}if("ending"===a){s=B.eI
break A}s=A.f(A.N("screenplay event has no consumer: "+a,null,null))}return s},
ED(a){var s=A.J(a.c,t.z)
B.a.W(s,new A.pq())
s=new A.pp(A.ad(s,t.Dm))
s.oC()
return s},
EC(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.kM(a,c,A.f2(B.m,t.N))
s=t.N
r=J.A7(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.kM(a,c,A.f2(new A.I(r,q.i("l(n.E)").a(new A.po(a)),q.i("I<n.E>")),s))},
eR:function eR(a,b){this.a=a
this.b=b},
pp:function pp(a){this.a=a},
pq:function pq(){},
kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},
po:function po(a){this.a=a},
ra(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.J(0,a)
s=A.m(r,r)
if(b!=null)s.J(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.J(0,c)
return new A.r9(q,s,r)},
F4(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aX(s)||s!==1)return l
r=A.AN(a.h(0,"choices"))
q=A.AN(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gL(),k=k.gv(k);k.m();){n=k.gn()
m=A.EA(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.l(0,n,m)}return A.ra(r,q,p)},
AN(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gL(),s=s.gv(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.l(0,p,A.t(q.b))}return r},
EA(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aX(r)||r<1||!A.aX(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cZ(s,r,q,p)},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(){},
rc:function rc(){},
rd:function rd(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F9(a,b){var s,r,q,p=A.c([],t.xz)
for(s=J.Q(a);s.m();){r=s.gn()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bA("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.rt(b,p)},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rt:function rt(a,b){this.a=a
this.b=b},
ru:function ru(a){this.a=a},
hp(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gL(),s=s.gv(s);s.m();){r=s.gn()
q.l(0,B.d.q(r.a),r.b)}return q},
u6:function u6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
u7:function u7(){},
u8:function u8(){},
fk:function fk(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b){this.a=a
this.b=b},
ma:function ma(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.al(a,g)
if(!t.f.b(f))throw A.b(B.i9)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bs
if(J.aa(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.i6)
p=A.c([],t.wM)
for(o=J.Q(r);o.m();)p.push(A.FA(o.gn()))
o=A.c([],t.tS)
for(n=J.Q(q);n.m();)o.push(A.Fz(n.gn()))
n=t.N
m=A.Y(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.r)(p),++k){j=p[k].a
if(!m.k(0,j))throw A.b(A.N("duplicate screenplay scene: "+j,g,g))}i=A.Y(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.r)(o),++k){n=o[k].a
if(!i.k(0,n))throw A.b(A.N("duplicate screenplay event: "+n,g,g))}p=A.c([],t.s)
for(n=J.Q(s);n.m();){h=n.gn()
if(typeof h!="string"||h.length===0)A.f(A.N("source must be a non-empty string",g,g))
p.push(h)}return new A.u5(o)},
Fz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.t(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.t(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.t(a.h(0,f)).length===0)throw A.b(B.hw)
s=a.h(0,"effects")
if(s==null)s=B.bs
if(!t.j.b(s)||J.k2(s,new A.tb()))throw A.b(B.ib)
r=B.b.aE(A.a0(a.h(0,"day")))
q=A.a0(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.i_)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.b(B.h4)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.b(B.iu)
l=new A.tc(a)
m=A.t(a.h(0,"id"))
k=A.t(a.h(0,g))
j=A.t(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.Q(s);h.m();)i.push(A.t(h.gn()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.hl(m,k,r,q,j,A.ad(i,t.N),n,h)},
FA(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.hi)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.aE(r)!==r)throw A.b(B.hK)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.N("screenplay scene "+s+" has invalid arrays",null,null))
m=B.b.aE(r)
l=A.c([],t.s)
for(k=J.Q(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.f(B.hY)
l.push(j)}l=A.c([],t.rn)
for(k=J.Q(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.f(B.ir)
A.t(j.h(0,"kind"))
A.t(j.h(0,"text"))
A.an(j.h(0,"speaker"))
l.push(new A.lG())}i=A.c([],t.gg)
for(l=J.Q(n);l.m();)i.push(A.Fy(l.gn()))
return new A.lJ(s,m)},
Fy(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.hp)
s=A.t(a.h(0,m))
A.t(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.Q(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.f(B.i3)
o=A.t(p.h(0,m))
n=A.t(p.h(0,"label"))
A.t(p.h(0,"next"))
r.push(new A.lI(o,n))}return new A.lH(s)},
u5:function u5(a){this.c=a},
hl:function hl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
tb:function tb(){},
tc:function tc(a){this.a=a},
lJ:function lJ(a,b){this.a=a
this.b=b},
lG:function lG(){},
lH:function lH(a){this.a=a},
lI:function lI(a,b){this.a=a
this.b=b},
u9:function u9(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
ua:function ua(){},
ub:function ub(){},
k4:function k4(a){this.a=a},
yq:function yq(a,b,c){this.b=a
this.e=b
this.f=c},
DQ(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.h_)
s=new A.nx()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.z2(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.e5(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b4(B.bv,new A.nv(a),new A.nw()))},
cX:function cX(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
nx:function nx(){},
nv:function nv(a){this.a=a},
nw:function nw(){},
nI:function nI(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
nK:function nK(a){this.a=a},
nJ:function nJ(a,b){this.a=a
this.b=b},
nO:function nO(a,b){this.a=a
this.b=b},
DW(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hL)
s=new A.nY()
return new A.e7(s.$1$2(B.bt,a.h(0,"output"),t.xs),s.$1$2(B.bn,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bm,a.h(0,"reverb"),t.gc),s.$1$2(B.bk,a.h(0,"ducking"),t.ul))},
cD:function cD(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
nY:function nY(){},
nZ:function nZ(a,b){this.a=a
this.b=b},
o_:function o_(a){this.a=a},
op:function op(a){this.a=a
this.b=null},
ot(a,b,c){var s
b.A()
if(c<1||c>6)throw A.b(A.a6(c,"level","must be between 1 and 6"))
s=A.E(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.or(s,b)
return s},
eg(a,b,c,d){var s,r,q
b.A()
s=b.e
r=d==null?b.c:d
q=A.E(a,"button","brush-button brush-state-"+s.b,r)
A.or(q,b)
q.type="button"
q.disabled=s===B.aB
q.addEventListener("click",A.W(new A.os(c)))
return q},
E0(a,b,c,d){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aB
A.or(s,b)
s.addEventListener("change",A.W(new A.ow(d,s)))
return s},
E_(a,b,c,d,e,f){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.x(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aB
A.or(s,b)
s.addEventListener("input",A.W(new A.ov(s,e)))
return s},
ys(a,b){var s=B.c.j7(A.t(a.className),A.iI("\\s+")),r=A.B(s),q=r.i("I<1>"),p=A.J(new A.I(s,r.i("l(1)").a(new A.ou()),q),q.i("n.E"))
s=b.b
B.a.k(p,"brush-state-"+s)
a.className=B.a.V(p," ")
a.setAttribute("data-brush-state",s)},
or(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.glp())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aB)a.setAttribute("aria-disabled","true")},
os:function os(a){this.a=a},
ow:function ow(a,b){this.a=a
this.b=b},
ov:function ov(a,b){this.a=a
this.b=b},
ou:function ou(){},
ee:function ee(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oy:function oy(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
oz:function oz(a){this.a=a},
Af(a){var s=!1
if(a.length!==0)if(!B.dY.p(0,a))s=B.nb.p(0,a)||B.n1.p(0,a)||B.na.p(0,a)||!B.c.U(a,"Mouse")
return s},
Hm(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.M(a,A.q(a).i("M<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aC(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return n},
I2(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.M(a,A.q(a).i("M<1,2>"))
p=J.Q(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.l(0,r.a,A.c([r.b],s))}return q},
fT(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.h7(B.kU,s,r)
if(b!=null)q.J(0,b)
q.J(0,A.I2(a))
s=new A.fS(g,d,h,e,f,c,A.aT(A.Hm(q),s,r))
s.A()
return s},
Ea(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cI)
s=a.h(0,"version")
r=J.eL(s)
if(!r.aa(s,1)&&!r.aa(s,2))throw A.b(B.cI)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gL(),j=j.gv(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.hx)
if(typeof m=="string")q.l(0,n,A.c([m],r))
else if(p.b(m)&&J.DM(m,new A.oM())){o=A.c([],r)
for(l=J.Q(m);l.m();)o.push(A.t(l.gn()))
q.l(0,n,o)}else throw A.b(B.h7)}j=A.a0(a.h(0,"horizontalSensitivity"))
r=A.a0(a.h(0,"verticalSensitivity"))
p=A.R(a.h(0,"invertX"))
o=A.R(a.h(0,"invertY"))
return A.fT(null,q,A.R(a.h(0,"holdToInteract")),j,p,o,2,r)},
z4(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gL(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.l(0,q,r)}return o},
zq(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
zG(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fS:function fS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oO:function oO(){},
oN:function oN(a){this.a=a},
oP:function oP(){},
oQ:function oQ(){},
oR:function oR(){},
oM:function oM(){},
ed:function ed(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.c=b},
kp:function kp(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
E9(a){var s=t.N,r=t.m
r=new A.i5(A.fT(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.aZ(a)
r.jk(a)
return r},
i5:function i5(a,b,c,d,e,f){var _=this
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
oK:function oK(a,b){this.a=a
this.b=b},
oL:function oL(a){this.a=a},
oJ:function oJ(a,b){this.a=a
this.b=b},
oH:function oH(a,b){this.a=a
this.b=b},
oI:function oI(a,b){this.a=a
this.b=b},
Eb(a){var s=new A.oS(a,A.a(a.createElement("div")))
s.aZ(a)
s.jl(a)
return s},
oS:function oS(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
oT:function oT(a){this.a=a},
Eh(a){var s=new A.p_(A.E(a,"div","door",null))
s.jn(a)
return s},
Ai(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.V(s,"; ")+"."},
p_:function p_(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
p0:function p0(a){this.a=a},
p1:function p1(a,b){this.a=a
this.b=b},
p2:function p2(a,b){this.a=a
this.b=b},
Er(a){var s=new A.p5(a,A.a(a.createElement("div")))
s.aZ(a)
s.jo(a)
return s},
p5:function p5(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
p6:function p6(a){this.a=a},
py:function py(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
pz:function pz(){},
EE(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.pA(a.b===B.cP,a.c===B.cT,s,a.e===B.cQ,a.f===B.cN,a.r===B.cV,a.w,a.x)},
pA:function pA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
yt(a,b,c,d,e,f,g,h,i,j,k){return new A.h_(e,g,k,f,b,h,d,c,a,i,j)},
EF(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.i0)
s=new A.pB(a)
r=a.h(0,"contextualReminders")
if(!A.bG(r))throw A.b(B.ik)
q=!A.bG(a.h(0,i))||A.R(a.h(0,i))
p=s.$1$2("interactionMode",B.bu,t.bK)
o=s.$1$2("promptDensity",B.bx,t.dn)
n=s.$1$2("textPacing",B.bw,t.j_)
m=s.$1$2("journalLayout",B.bo,t.gm)
l=s.$1$2("confirmations",B.bi,t.aJ)
k=s.$1$2("saveFeedback",B.bp,t.mx)
j=s.$1$2("focusLossBehavior",B.aJ,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bl,t.vS):B.b7
return A.yt(s,l,r,j,p,m,o,k,q,A.bG(a.h(0,g))&&A.R(a.h(0,g)),n)},
dz:function dz(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pB:function pB(a){this.a=a},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a){this.a=a},
Aq(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hI)
s=B.a.b4(B.dc,new A.pO(a),new A.pP())
r=A.t(a.h(0,"renderScale"))
q=A.R(a.h(0,"dynamicResolution"))
p=A.t(a.h(0,"frameTarget"))
o=A.t(a.h(0,"antialiasing"))
n=A.t(a.h(0,"textureQuality"))
m=A.an(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.an(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.an(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.C1(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.em(1,s,r,q,p,o,n,m,l,k,j===!0)
i.A()
return i},
h2(a,b){var s=b==null?B.bf:b
return new A.pQ(s,a==null?B.bf:a)},
D5(a,b){var s,r,q
a.A()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.e0(b.a>=2?"msaa2":"off")
B.a.k(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.e0("off")
B.a.k(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hr(!1)
B.a.k(s,"dynamic resolution timing is unavailable")}if(q.b===B.d2&&b.a<2){q=q.hs(B.be)
B.a.k(s,"High preset was reduced to Standard")}return new A.pI(q,A.ad(s,t.N))},
cE:function cE(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pO:function pO(a){this.a=a},
pP:function pP(){},
pQ:function pQ(a,b){this.a=a
this.b=b},
pH:function pH(a,b){this.a=a
this.b=b},
pI:function pI(a,b){this.a=a
this.b=b},
EH(a){var s=new A.ih(A.m(t.N,t.m),B.bf,a,A.a(a.createElement("div")))
s.aZ(a)
s.jp(a)
return s},
ih:function ih(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
pL:function pL(a){this.a=a},
pM:function pM(a){this.a=a},
pN:function pN(a){this.a=a},
pK:function pK(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(){this.c=0},
EI(a){var s=new A.pS(a,A.a(a.createElement("div")))
s.aZ(a)
s.jq(a)
return s},
pS:function pS(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
pT:function pT(a){this.a=a},
qo:function qo(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
qp:function qp(a){this.a=a},
qq:function qq(a){this.a=a},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(){},
qt:function qt(){},
d8:function d8(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ri:function ri(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
E(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
Cb(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.h(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
iB:function iB(){},
bz:function bz(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(){},
rp:function rp(){},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
rn:function rn(a){this.a=a},
rq:function rq(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
rr:function rr(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rs:function rs(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
rN:function rN(a){this.a=a
this.b=null},
FB(a){var s=new A.te(a,A.a(a.createElement("div")))
s.aZ(a)
s.js(a)
return s},
te:function te(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tf:function tf(a,b){this.a=a
this.b=b},
tg:function tg(a){this.a=a},
lK(a,b){var s=t.N,r=t.m
r=new A.hm(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.yn(),B.ay,A.m(s,r),A.m(s,r),B.b_,A.m(s,r),a,A.a(a.createElement("div")))
r.aZ(a)
r.jt(a,b)
return r},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
tF:function tF(a){this.a=a},
tG:function tG(a){this.a=a},
tH:function tH(a,b){this.a=a
this.b=b},
tI:function tI(a){this.a=a},
tJ:function tJ(a){this.a=a},
tx:function tx(a,b){this.a=a
this.b=b},
ty:function ty(a,b){this.a=a
this.b=b},
tw:function tw(a){this.a=a},
tz:function tz(a){this.a=a},
th:function th(a,b,c){this.a=a
this.b=b
this.c=c},
tA:function tA(a,b){this.a=a
this.b=b},
tB:function tB(a,b){this.a=a
this.b=b},
tC:function tC(a,b){this.a=a
this.b=b},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
tn:function tn(a){this.a=a},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
tq:function tq(a){this.a=a},
tr:function tr(a){this.a=a},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
tu:function tu(a){this.a=a},
tm:function tm(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a){this.a=a},
tj:function tj(a){this.a=a},
tk:function tk(a){this.a=a},
tl:function tl(a){this.a=a},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tD:function tD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tL(a){return B.a.b4(B.E,new A.tM(a),new A.tN(a))},
FC(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
q.l(0,r.a,r.e)}return q},
dN(a,b){var s=t.z
s=A.h7(A.FC(),s,s)
if(a!=null)s.J(0,a)
s=new A.tK(b,A.aT(s,t.N,t.K))
s.ju(a,b)
return s},
B3(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.ih)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.hj)
return A.dN(A.aW(s,t.N,t.K),A.h(a.h(0,"version")))},
bL:function bL(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tM:function tM(a){this.a=a},
tN:function tN(a){this.a=a},
tK:function tK(a,b){this.a=a
this.b=b},
yJ(a,b){var s=b==null?A.dN(null,1):b
return new A.tO(s,a==null?A.dN(null,1):a)},
FD(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.E[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.f7(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dk(r)
J.bl(l,s.a,r)}catch(n){if(!(A.ak(n) instanceof A.A))throw n}}m=A.dN(l,1)
return A.yJ(m,m)},
tO:function tO(a,b){this.a=a
this.b=b},
FG(a){var s=new A.u0(a,A.a(a.createElement("div")))
s.aZ(a)
s.jv(a)
return s},
u0:function u0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
u1:function u1(a,b,c){this.a=a
this.b=b
this.c=c},
DT(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gL(),n=n.gv(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.cB(p+m+":"+k,m,l.a,l.b,j))}}B.a.W(i,new A.nG())
return new A.nF(A.ad(i,t.bC),A.Y(t.N))},
cB:function cB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nF:function nF(a,b){this.a=a
this.b=b},
nH:function nH(){},
nG:function nG(){},
FV(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.oK
s=t.T
r=A.m(s,t.q1)
q=A.q(a).i("ac<1>")
p=A.J(new A.ac(a,q),q.i("n.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gL(),j=j.gv(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bu(new A.bC(B.os,k+" has an out-of-range authored day "+h+"."))
g=A.FU(k,h,i.b,m)
if(g instanceof A.bu)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.l(0,new A.c0(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ae(o,o.r,o.e,A.q(o).i("ae<2>"));o.m();){n=o.d
J.eO(e.cm(n.b,new A.uz()),n)}o=A.aT(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.M(e,e.$ti.i("M<1,2>")).gv(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aC(d.b,!1,m)
c.$flags=3
q.l(0,j,c)}return new A.m8(new A.m7(r,A.Y(a),A.Y(s),o,q,A.c([],t.Dc),B.a8,A.ra(b,b,b)))},
FU(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.d8[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gL(),k=k.gv(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.c.U(h,m))continue
g=A.dI(B.c.aO(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bu(new A.bC(B.ot,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dg
B.a.k(l,new A.cc(g,i.b,f))}if(l.length===0)continue
B.a.W(l,new A.uw())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bu(new A.bC(B.eo,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bu(new A.bC(B.eo,a+" day "+s+" has no authored tiers."))
return new A.mF(c)},
m7:function m7(a,b,c,d,e,f,g,h){var _=this
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
uC:function uC(a){this.a=a},
uB:function uB(a){this.a=a},
uD:function uD(a){this.a=a},
ux:function ux(a){this.a=a},
uy:function uy(){},
uA:function uA(a){this.a=a},
uz:function uz(){},
uv:function uv(a){this.a=a},
uu:function uu(a){this.a=a},
uw:function uw(){},
m8:function m8(a){this.a=a},
mF:function mF(a){this.a=a},
Jh(a){var s,r,q,p=A.Y(t.N)
for(s=new A.M(a,A.q(a).i("M<1,2>")).gv(0);s.m();){r=s.d
for(q=r.b.gaj(),q=q.gv(q);q.m();)if(q.gn().ga4().M(0,new A.xx())){p.k(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.X(s)
return s},
Jg(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.aC(b,!0,s)
B.a.X(r)
q=new A.eD()
q.bZ((a^913741)>>>0)
p=q.aW(4)
if(!(p>=0&&p<4))return A.d(B.d7,p)
o=B.d7[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.aC(r,!0,s)
B.a.ds(m,q)
s=A.hq(m,0,A.e3(n,"count",t.S),A.B(m).c).bD(0)
B.a.X(s)
return s},
xx:function xx(){},
Bh(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aX(r)||!A.aX(q)||!A.aX(p)||r<1||q<0||q>23||p<0)return null
return new A.c0(s,r,q,p)},
FT(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.Y(t.N)
for(s=t.j,q=J.Q(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.k(0,p)}o=A.Y(t.T)
for(s=J.Q(s.a(a.h(0,j)));s.m();){n=A.Bh(s.gn())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.DS(m)
if(!s&&l==null)return i
return new A.m9(r,o,l)},
DS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.Bh(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aX(p))if(!(p<0))if(A.bG(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bH(new A.I(B.d8,t.u_.a(new A.nC(r)),t.cE),t.hF)
j=A.bH(new A.I(B.kO,t.da.a(new A.nD(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bH(new A.I(B.jJ,t.kr.a(new A.nE(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.k6(s,k,j,p,i,n,A.an(m))},
bT:function bT(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
df:function df(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
ut:function ut(){},
k6:function k6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nC:function nC(a){this.a=a},
nD:function nD(a){this.a=a},
nE:function nE(a){this.a=a},
m6:function m6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
uE:function uE(){},
bu:function bu(a){this.a=a},
m5:function m5(a){this.a=a},
m3:function m3(a){this.a=a},
j_:function j_(a,b){this.a=a
this.b=b},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
Ih(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.k0())return f
n=A.dR().gaX()
m=n.h(0,"captureSeed")
l=A.dI(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dI(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.f7(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.al(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gL(),m=m.gv(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.n2.p(0,o.b))return f
J.bl(p,A.t(o.a),A.t(o.b))}r=p}else return f}catch(g){if(A.ak(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.n9.p(0,i))return f
if(h!=null&&!B.n6.p(0,h))return f
return new A.v3(l,k,j,h,r)},
Ii(){var s,r,q,p=A.dR().gaX().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fk
break A}if("intimate"===p){s=B.fm
break A}s=B.fl
break A}r=A.dR().gaX().h(0,"cameraFov")
q=A.f7(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fL(B.b.t(q,35,100)*3.141592653589793/180,s.b,s.c)},
jV(a){var s=$.bj
if(s===a&&B.c.p(A.t(a.b.className),"open"))return
if(s!=null)s.af()
$.bj=a
if(a===$.cw.j())$.hX().i3("gameplay.viewport")
else $.hX().nV(A.Cs(a))
s=$.aj.j()
s.ay=!1
s.bi()
$.eH=0
a.bS()},
zk(a,b,c){var s,r,q
$.jW=!0
s=$.bj
if(s!=null)s.af()
$.bj=a
s=$.hX()
if(s.a.a.length===0)s.i3(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dG(b,B.a2,c))
q=s.a
s.a=new A.es(r,q.b,q.c)
s.k0(b)
s=$.aj.j()
s.ay=!1
s.bi()
$.eH=0
a.bS()
$.jW=!1},
e1(a){var s,r,q,p,o,n,m,l=null
if($.jW)return
$.jW=!0
a.af()
$.bj=null
s=$.hX().lC()
$.jW=!1
r=s.a
if(r===B.dJ){$.eH=0
r=$.aj.j()
r.bi()
r.ay=!0
q=A.G(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dI)return
r=s.c.a
r=r.length===0?l:B.a.ga6(r)
p=r==null?l:r.a
A:{if(B.bD===p){r=$.cw.j()
break A}if(B.dy===p){r=$.hG.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bj=r
n=$.aj.j()
n.ay=!1
n.bi()
$.eH=0
r.bS()
m=o==null?l:A.G(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jZ(a){if($.bj===a&&B.c.p(A.t(a.b.className),"open"))a.af()
else A.jV(a)},
hN(a){var s
if($.jW)return
if($.bj===a)$.bj=null
if(a===$.cw.j())$.hX().co()
else $.hX().mE(A.Cs(a))
$.eH=0
s=$.aj.j()
s.bi()
s.ay=!0},
Cs(a){if(a===$.cw.j())return B.dz
if(a===$.hG.j())return B.a2
if(a instanceof A.hm)return B.a2
if(a instanceof A.ih)return B.a2
if(a instanceof A.i5)return B.a2
if(a===$.jJ.j())return B.lV
if(a===$.n8.j())return B.lW
if(a===$.jI.j())return B.lX
if(a===$.n6.j())return B.a2
if(a===$.jG.j())return B.lZ
return B.lY},
nc(a,b){var s
a.snK(new A.wc())
a.snM(new A.wd())
a.snL(new A.we())
a.snG(new A.wk())
a.snJ(new A.wl())
a.snU(new A.wm())
a.snP(new A.wn())
a.snO(new A.wo())
a.sbd(b?new A.wp(a):new A.wq(a))
a.sb6(b?new A.wr(a):new A.wf(a))
s=a.f
if(s===B.K)a.snx(new A.wg())
if(s===B.a4)a.snH(new A.wh())
if(s===B.L){a.snw(new A.wi())
a.snN(new A.wj())}},
Hj(){var s=$.eG.j()
s.seo(new A.w9())
s.sbd(new A.wa())
s.sb6(new A.wb())},
nb(a,b,c){return A.Hg(a,b,c)},
Hg(a,b,c){var s=0,r=A.aO(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nb=A.aP(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.w5()
k=c.$ti
j=$.ar
i=new A.as(j,k)
if(j!==B.B)l=A.Cy(l,j)
c.cB(new A.dU(i,2,null,l,k.i("dU<1,1>")))
s=4
return A.a5(i,$async$nb)
case 4:case 3:o=$.k1().b
n=$.aG
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a5(n.cS(b.a),$async$nb)
case 11:case 10:k=b.a
$.jP=A.h2(k,a)
$.eG.j().cz(a,k,b.b)
A.zm()
A.jX()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ak(g)
$.jP=A.h2(o,o)
k=$.eG.j()
k.cz(o,o,A.c(["renderer transaction rejected: "+A.x(m)],t.s))
A.zm()
s=8
break
case 5:s=1
break
case 8:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$nb,r)},
I7(){var s,r,q,p,o,n=null
try{n=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.al(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.i2)
q=A.Aq(r.h(0,"requested"))
$.jP=A.h2(A.Aq(r.h(0,"effective")),q)}catch(s){$.jP=A.h2(null,null)}p=$.k1().a
o=A.D5(p,A.Cf())
r=o.a
$.jP=A.h2(r,p)
$.eG.j().cz(p,r,o.b)
A.zm()
A.jX()},
Cf(){var s,r,q,p,o=$.fz.j().ghv().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.U(p,"max-samples-"))continue
r=A.dI(B.c.aO(p,12),null)
if(r==null)r=1}return new A.pH(r,B.a.p(o,"disjoint-timer-query"))},
zm(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a1($.k1().C(),null))}catch(s){}},
Hi(){var s=$.jF.j()
s.seo(new A.w6())
s.sbd(new A.w7())
s.sb6(new A.w8())},
I5(){var s,r,q,p,o,n=null
try{n=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.z9=A.Ea(B.f.al(n,null))}catch(s){$.z9=A.fT(null,null,!1,1,!1,!1,2,1)}r=$.jF.j()
q=r.w=$.fE()
r.x=new A.kp(q)
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
r.dT()
$.aj.j().eQ($.fE().r)
r=$.aj.j()
q=$.fE()
p=r.ch
p.a=q.f
p.ex()
r.bi()
A.Cu()},
Cu(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a1($.fE().C(),null))}catch(s){}},
I4(){var s,r=null
try{r=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jN=A.DW(B.f.al(r,null))}catch(s){$.jN=B.b_}$.hE.j().iD($.jN)
A.Ct()
A.z0()},
Ct(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a1($.jN.C(),null))}catch(s){}},
z0(){var s=$.bk
if(s==null)return
s.iM($.jN)},
I6(){var s,r=null
try{r=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.zd=A.EF(B.f.al(r,null))}catch(s){$.zd=$.yn()}$.jH.j().iE($.cA())
A.Cv()
A.BY()},
Cv(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a1($.cA().C(),null))}catch(s){}},
BY(){var s,r="detailed",q=A.EE($.cA()),p=A.G(A.a(v.G.document).documentElement)
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
s=$.cA().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cA().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
I3(){var s,r=null
try{r=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dk=A.DQ(B.f.al(r,null))}catch(s){$.dk=B.ay}$.fy.j().eP($.dk)
A.zl()
A.n9()},
zl(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a1($.dk.C(),null))}catch(s){}},
n9(){var s,r,q,p,o,n,m=$.dk,l=$.xf,k=$.zE,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.f(B.he)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ae
$.zs=l
$.cS.j()
r=A.G(A.a(v.G.document).documentElement)
q=r==null
p=q?null:A.R(A.a(r.classList).contains("high-contrast"))
o=q?null:A.R(A.a(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.R(A.a(r.classList).toggle("reduced-motion",l))
if(!q)A.R(A.a(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.R(A.a(r.classList).toggle("captions-enabled",s))
if(!q)A.R(A.a(r.classList).toggle("reduced-effects",o))
if(!q)A.R(A.a(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.x(j*100)+"%")
q=$.w.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.x(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.BW){m=$.bi.j()
l=$.dk.f
m.e=new A.k4(l==null?B.ae:l)
m=$.bi.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Cx(a){var s,r,q
A.eK("renderer-unavailable")
s=$.w.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.l(0,"kind","pixeldart")
q.l(0,"explicit",$.dj.j().b)
$.dj.j()
q.l(0,"automatic",!1)
q.l(0,"fallback",!1)
q.l(0,"rejected",$.dj.j().d)
q.l(0,"aliasUsed",$.dj.j().f)
if($.dj.j().e!=null)q.l(0,"rejectionReason",$.dj.j().e)
if($.dj.j().r!=null)q.l(0,"aliasReason",$.dj.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a1(A.F(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.m,"selection",q],r,t.K),null))},
HH(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.wT(r,q)
r.addEventListener("change",A.W(new A.wR(s)))
q.addEventListener("change",A.W(new A.wS(s)))},
nq(){var s=0,r=A.aO(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8
var $async$nq=A.aP(function(f0,f1){if(f0===1){o.push(f1)
s=p}for(;;)switch(s){case 0:e6=v.G
e7=A.G(A.a(e6.document).getElementById("game"))
if(e7==null){s=1
break}$.w.b=e7
$.zc=A.G(A.a(e6.document).getElementById("fps"))
$.dj.b=$.Dx().cv(A.dR().gaX().h(0,"renderer"))
A.HI()
c0=$.w.j()
c1=A.h(A.a(e6.window).innerWidth)>0?A.h(A.a(e6.window).innerWidth):800
c0.width=c1
c1=$.w.j()
c0=A.h(A.a(e6.window).innerHeight)>0?A.h(A.a(e6.window).innerHeight):600
c1.height=c0
c2=A.G(A.a(e6.document).getElementById("ui-canvas"))
if(c2!=null){$.BT.b=c2
c2.width=A.h($.w.j().width)
c2.height=A.h($.w.j().height)
c0=new A.oy(c2,A.c([],t.km))
c3=A.G(c2.getContext("2d"))
if(!t.m.b(c3))A.f(A.j("Failed to get 2D context for CanvasP5GuiEngine"))
c0.b=c3
c0=new A.t2(c0)
$.eJ=c0
c0.dj(A.h($.w.j().width),A.h($.w.j().height))}n=B.fj.mu(e7)
if(n==null){A.Cx("webgl2 unavailable")
s=1
break}try{c0=A.h($.w.j().width)
c1=A.h($.w.j().height)
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
m=new A.mI(n,c0,c1,c5,A.m(c6,t.qr),c7,A.m(c6,c8),A.m(c6,c9),A.m(c6,t.xp),A.m(c6,t.bE),A.m(c6,c8),A.m(c6,c9),c4,A.m(c6,c8),A.m(c6,c9),A.m(c6,c6),A.m(d0,d1),A.m(c6,t.qS),d2,B.kc,A.m(c6,t.Aj),A.m(c6,c6),A.m(c6,d1),A.m(c6,t.vD),A.m(c6,d1),new A.qX(A.m(c6,t.ml),A.m(c6,d0)),A.m(c6,t.mL),A.m(c6,t.w1),B.ix,B.mc,B.de,B.df)
$.aG=m
c0=$.dj.j()
c1=t.dM.a(m)
if(c0.a!==B.aP)A.f(A.j("legacy renderer backend is retired; production requires Pixeldart"))
c0=new A.rv(c1,c0.C(),B.mF)
c1.nb()
c0.d=B.X
$.fz.b=c0}catch(e9){l=A.ak(e9)
k=A.cU(e9)
g=$.w.j()
g.setAttribute("data-renderer-error",A.x(l))
if($.k0())$.w.j().setAttribute("data-renderer-error-stack",A.x(k))
A.Cx("pixeldart initialization failed")
s=1
break}A.jX()
p=4
A.eK("initializing")
$.cS.b=new A.ox(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.A_())
$.xf=A.R(A.a(A.a(e6.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.zE=A.R(A.a(A.a(e6.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.zs=$.xf
$.cS.j()
c0=A.a(e6.window)
c1=t.N
c4=t.s
c5=t.a
c4=A.EM(A.F(["moveForward",A.c(["KeyW"],c4),"moveBack",A.c(["KeyS"],c4),"moveLeft",A.c(["KeyA"],c4),"moveRight",A.c(["KeyD"],c4),"interact",A.c(["KeyE"],c4),"secondary",A.c(["KeyQ"],c4),"run",A.c(["ShiftLeft"],c4),"crouch",A.c(["ControlLeft"],c4),"rotate",A.c(["KeyR"],c4),"reach",A.c(["KeyF"],c4),"journal",A.c(["KeyJ"],c4),"sleep",A.c(["KeyL"],c4),"pause",A.c(["Escape"],c4)],c1,c5))
c6=A.a(c0.document)
c4=new A.kY(c0,c6,A.Y(c1),A.Y(c1),A.Y(c1),A.Y(c1),A.Y(c1),new A.k(0,0,0),new A.qh(),c4)
c0.addEventListener("keydown",A.W(c4.gky()))
c0.addEventListener("keyup",A.W(c4.gkA()))
c0.addEventListener("mousemove",A.W(c4.gkG()))
c0.addEventListener("mousedown",A.W(c4.gkE()))
c0.addEventListener("mouseup",A.W(c4.gkI()))
c0.addEventListener("wheel",A.W(c4.gkK()))
c6.addEventListener("pointerlockchange",A.W(c4.gkC()))
$.aj.b=c4
c4=$.w.j()
c0=A.h(A.a(e6.window).innerWidth)>0?A.h(A.a(e6.window).innerWidth):800
c4.width=c0
c0=$.w.j()
c4=A.h(A.a(e6.window).innerHeight)>0?A.h(A.a(e6.window).innerHeight):600
c0.height=c4
A.eK("renderer")
A.eK("text")
c4=$.fF()
s=7
return A.a5(c4.bc(),$async$nq)
case 7:j=c4.oF()
i=A.FV(j)
if(!(i instanceof A.m8)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aK.b=i.a
$.n5.b=A.DT(j)
g=A.m(c1,c5)
for(c0=t.j,d4=0;d4<5;++d4){f=B.C[d4]
c5=A.t(f)
c6=c4.c
c6===$&&A.p()
d5=c6.h(0,c5)
c5=c0.b(d5)?A.aC(d5,!0,c1):B.m
J.bl(g,f,c5)}e=A.FW(g)
s=8
return A.a5(A.ng(),$async$nq)
case 8:d=f1
$.yZ.b=new A.oq(B.fi)
c=$.yZ.j().o1(new A.xG(e,d))
d6=$.yo()
b=d6
if(c.a==null){g=d
c1=b
c1=c1==null?null:c1.a
if(c1==null)c1=1+B.b2.aW(2147483647)
c5=b
c5=c5==null?null:c5.b
if(c5==null)c5=1
c6=b
c6=c6==null?null:B.b.aT(c6.c)
if(c6==null)c6=7
if(c5<1)A.f(A.a6(c5,"startDay","must be at least 1"))
if(c6<0||c6>=24)A.f(A.a6(c6,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.f(A.a6(5760,"daySeconds","must be finite and > 0"))
d7=new A.kO(c5,7,5760)
d7.eY(c6)
d8=A.AB(e)
d9=g==null?A.Ar(42):A.CS(g,42)
g=A.Ao(42,c1,d9,d7,d8,A.Ah(6,16,d8,null,6,B.kl,d7),new A.ky(0,0,0,!1),A.ra(null,null,null))}else{g=c.a
g.toString
g=A.Ap(d,g,e)}$.U.b=g
a=c4.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.EC(a,g,$.U.j().b)}$.w_=g
$.aK.j().y=$.U.j().z
g=A.ad(A.HD($.U.j().b),t.fu)
$.z_.b=new A.uR(g)
g=$.yp()
c1=c.a
g.ey(c1==null?null:c1.c.h(0,"inventoryInspections"))
$.fz.j().f1(A.AZ($.U.j().gia()))
if(c.b!=null){g=c.b
g.toString
A.hP(g)}g=$.aK.j()
c1=A.Jg($.U.j().b,A.Jh(j.b))
g.sj8(A.h8(c1,A.B(c1).c))
A.eK("house")
$.a_.b=$.U.j().c
g=d6==null
a0=g?null:d6.e
a1=g?null:d6.f
if(a1!=null)for(g=$.a_.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.r)(g),++d4){a2=g[d4]
for(c4=a2.e,c5=c4.length,e0=0;e0<c4.length;c4.length===c5||(0,A.r)(c4),++e0){a3=c4[e0]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.aa(a0,"open")||J.aa(a0,"closed")){a5=J.aa(a0,"open")
for(g=$.a_.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.r)(g),++d4){a6=g[d4]
for(c4=a6.e,c5=c4.length,e0=0;e0<c4.length;c4.length===c5||(0,A.r)(c4),++e0){a7=c4[e0]
a7.siZ(a5)}}}a8=$.zY()
if(a8!=null&&a8.length!==0)for(g=$.a_.j().b,c1=g.length,d4=0;d4<g.length;g.length===c1||(0,A.r)(g),++d4){a9=g[d4]
for(c4=a9.r,c5=c4.length,e0=0;e0<c5;++e0){b0=c4[e0]
if(b0.a===a8)b0.d=$.zZ()}}g=$.aG
if(g!=null)g.lB($.a_.j())
$.bv.b=$.U.j().d
$.a_.j()
g=new A.k(12.9375,1.65,0.825)
$.zF=$.zp=$.zw=g
b1=g.ad(0,new A.k(0,1.3499999999999999,0))
$.jK.b=new A.kk(b1,J.A1(b1,new A.k(0,1.2000000000000002,0)))
$.hF.b=new A.p8()
g=A.ze(B.m)
c1=A.ze(B.m)
c4=new A.t5(B.G,g,c1)
if(!isFinite(0))A.f(B.fX)
if(!B.a.a2(c1,B.a.gaC(g)))A.f(B.hP)
if(c4.a===B.G&&c4.b!==0&&!c4.e)A.f(B.h5)
$.ce.b=c4
$.aq="hall"
g=c.a
b2=A.Fb(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.nh($.a_.j())){g=b2.b
$.zF=$.zp=$.zw=g
$.cx=b2.c
$.fB=b2.d
$.aq=b2.a
b3=g.ad(0,new A.k(0,1.3499999999999999,0))
g=$.jK.j()
g.slD(b3)
g.b=J.A1(b3,new A.k(0,1.2000000000000002,0))
g=$.jK.j()
c1=$.a_.j()
c4=b2.e
c5=b2.f
g.op($.aq,$.eN(),c1,c5,c4)
A.hP("restored position")}g=A.FB(A.a(e6.document))
g.sny(new A.xH())
g.sbd(new A.xI())
g.sb6(new A.xT())
$.hG.b=g
g=A.a(e6.document)
c1=A.a(g.createElement("div"))
c4=new A.rr(g,c1)
c4.aZ(g)
c1.className=A.t(c1.className)+" brush-page-frame"
c1.setAttribute("aria-label","Pause menu")
c1.setAttribute("data-brush-kind","frame")
c1.setAttribute("data-brush-state","normal")
A.a(c1.appendChild(A.ot(g,B.eX,1)))
A.a(c1.appendChild(A.E(g,"p","settings-copy","The house waits. Choose what to do next.")))
e1=A.E(g,"nav","pause-actions",null)
e1.setAttribute("aria-label","Pause actions")
c4.bu(g,e1,B.dA,"resume")
c4.bu(g,e1,B.dB,"settings")
c4.bu(g,e1,B.dC,"controls")
c4.bu(g,e1,B.dD,"save now")
c4.bu(g,e1,B.dE,"help")
c4.bu(g,e1,B.dF,"credits")
c4.bu(g,e1,B.dG,"back")
A.a(c1.appendChild(e1))
c4.snQ(new A.y2())
c4.sbd(new A.y3())
c4.snS(new A.y4())
c4.snC(new A.y5())
c4.snR(new A.y6())
c4.snI(new A.y7())
c4.snD(new A.y8())
c4.sb6(new A.xJ())
$.cw.b=c4
c4=$.U.j().e
c1=$.bv.j()
$.U.j()
$.n7.b=new A.qf(c4,c1,new A.xK())
c1=A.a(e6.document)
c4=$.U.j().e
g=$.bv.j()
c5=$.n7.j()
c6=A.a(c1.createElement("div"))
c5=new A.qo(c4,g,c5,c1,c6)
c5.aZ(c1)
c6.setAttribute("aria-label","The Journal")
A.a(c6.appendChild(A.E(c1,"div","journal-title","The Journal")))
e2=A.E(c1,"div","journal-pages",null)
g=A.E(c1,"div","page page-left",null)
c5.y!==$&&A.ba()
c5.y=g
c4=A.E(c1,"div","page page-right",null)
c5.z!==$&&A.ba()
c5.z=c4
A.a(e2.appendChild(g))
A.a(e2.appendChild(c4))
A.a(c6.appendChild(e2))
A.a(c6.appendChild(c5.jG()))
e3=A.E(c1,"div","tape-roll",null)
A.a(e3.style).setProperty("width","8rem")
c4=A.E(c1,"div","tape-fill",null)
c5.as!==$&&A.ba()
c5.as=c4
A.a(e3.appendChild(c4))
A.a(c6.appendChild(e3))
e4=A.E(c1,"div","consult",null)
A.a(e4.appendChild(A.E(c1,"div","consult-label","Cite an entry")))
c4=A.E(c1,"div","entry-picker",null)
c5.at!==$&&A.ba()
c5.at=c4
g=A.E(c1,"div","consult-result",null)
c5.ax!==$&&A.ba()
c5.ax=g
A.a(e4.appendChild(c4))
A.a(e4.appendChild(g))
A.a(c6.appendChild(e4))
e5=A.G(c1.documentElement)
if(t.m.b(e5)){A.a(e5.style).setProperty("--shake-max-deg","3deg")
A.a(e5.style).setProperty("--shake-max-px","2px")}$.jJ.b=c5
$.jJ.j().sb6(new A.xL())
g=A.a(e6.document)
c1=A.E(g,"div","prompt",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
A.a(c1.style).setProperty("transition-duration","0.3s")
A.a(A.G(g.body).appendChild(c1))
$.BS.b=new A.rN(c1)
c1=A.a(e6.document)
g=A.E(c1,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.G(c1.body).appendChild(g))
$.BR.b=new A.op(g)
g=A.a(e6.document)
c1=A.E(g,"div","ambient-notice",null)
c4=A.E(g,"div","caption-cue",null)
c1.setAttribute("role","status")
c1.setAttribute("aria-live","polite")
c1.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.a(A.G(g.body).appendChild(c1))
A.a(A.G(g.body).appendChild(c4))
$.bi.b=new A.nI(c1,c4,B.Q)
$.BW=!0
c4=A.Eh(A.a(e6.document))
c4.snB(A.D3())
c4.snA(A.Ju())
$.ay.b=c4
c4=$.cz()
c4.snz(new A.xM())
c4.snE(A.D3())
c4=c.a
b4=A.FT(c4==null?null:c4.c.h(0,"visitors"))
if($.cA().Q&&b4!=null&&$.aK.j().ey(b4))A.Im()
g=$.n5.j()
c1=c.a
g.oq(c1==null?null:c1.c.h(0,"ambient"))
g=c.a
b5=g==null?null:g.c.h(0,"unverifiables")
if(c0.b(b5))for(g=J.Q(b5);g.m();){b6=g.gn()
if(A.aX(b6))$.xg.k(0,b6)}g=A.FG(A.a(e6.document))
g.snT(new A.xN())
g.sb6(new A.xO())
$.n8.b=g
g=A.EI(A.a(e6.document))
g.sb6(new A.xP())
$.jI.b=g
g=A.Eb(A.a(e6.document))
g.sb6(new A.xQ())
$.n6.b=g
$.jL.b=A.lK(A.a(e6.document),null)
$.jM.b=A.lK(A.a(e6.document),B.a3)
$.fy.b=A.lK(A.a(e6.document),B.L)
A.nc($.jL.j(),!1)
A.nc($.jM.j(),!0)
A.nc($.fy.j(),!0)
A.I3()
A.HH()
$.eG.b=A.EH(A.a(e6.document))
A.Hj()
A.I7()
$.hE.b=A.lK(A.a(e6.document),B.K)
A.nc($.hE.j(),!0)
A.I4()
$.jH.b=A.lK(A.a(e6.document),B.a4)
A.nc($.jH.j(),!0)
A.I6()
$.jF.b=A.E9(A.a(e6.document))
A.Hi()
A.I5()
g=A.Er(A.a(e6.document))
g.sb6(new A.xR())
g.snF(new A.xS())
$.jG.b=g
g=c.a
b7=A.Et(g==null?null:g.c.h(0,"ending"))
if(b7!=null)A.Cw(b7)
A.eK("world")
A.Cz()
A.a(e6.window).addEventListener("resize",A.W(new A.xU()))
A.a(e6.document).addEventListener("visibilitychange",A.W(new A.xV()))
A.a(e6.window).addEventListener("keydown",A.W(new A.xW()))
A.a(e6.window).addEventListener("keyup",A.W(new A.xX()))
A.a(e6.window).addEventListener("keydown",A.W(new A.xY()))
A.a(e6.window).addEventListener("click",A.W(new A.xZ()))
$.w.j().addEventListener("mousemove",A.W(new A.y_()))
$.w.j().addEventListener("click",A.W(new A.y0()))
$.w.j().addEventListener("wheel",A.W(new A.y1()))
A.hL()
A.eK("raf")
A.h(A.a(e6.window).requestAnimationFrame(A.W(A.D4())))
p=2
s=6
break
case 4:p=3
e8=o.pop()
b8=A.ak(e8)
b9=A.cU(e8)
A.x5(b8,b9)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aM(q,r)
case 2:return A.aL(o.at(-1),r)}})
return A.aN($async$nq,r)},
HG(a){var s,r,q,p=$.eJ
if(!$.ay.j().y||p==null)return
s=A.C6(a)
if(s==null)return
r=$.cz()
q=p.hW(s.a,s.b)
r.r=q==null?null:q.b},
HF(a){var s,r=$.eJ
if(!$.ay.j().y||r==null)return!1
s=A.C6(a)
if(s==null)return!1
return $.cz().n6(r.hW(s.a,s.b))},
C6(a){var s=A.a($.w.j().getBoundingClientRect()),r=A.a0(s.width),q=A.a0(s.height)
if(r<=0||q<=0)return null
return new A.a9(A.h(a.clientX)-A.a0(s.left),A.h(a.clientY)-A.a0(s.top))},
HI(){var s=v.G
A.a(s.window).addEventListener("error",A.W(new A.wU()))
A.a(s.window).addEventListener("unhandledrejection",A.W(new A.wV()))},
eK(a){if($.z5===a)return
$.z5=a
$.w.j().setAttribute("data-boot-phase",a)},
jX(){var s,r,q,p,o,n=null,m=$.fz.j().ghv(),l=$.w.j(),k=A.dR().gaX().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a1(m.C(),n))
k=$.dj.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.cV().gnt().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.aG
if(k==null)k="{}"
else{k=k.e
k===$&&A.p()
k=k.as
if(k==null)k=A.f(A.j("renderer is not initialized"))
s=k.a
s.A()
r=s.b
q=A.J(r,A.q(r).c)
B.a.X(q)
r=t.N
p=t.K
p=B.f.a1(A.F(["profile",A.F(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a1(B.kS,n))
l=$.aG
o=l==null?n:l.x
if(o!=null)$.w.j().setAttribute("data-renderer-profile-fallback",o)},
Ie(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.k0())return
s=$.zY()
if(s!=null&&s.length!==0){r=$.w.j()
q=$.zZ()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.z_.j().hM($.U.j().gah().a)
r=$.w.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.yo()
o=q==null?c:q.e
if(o!=null)$.w.j().setAttribute("data-automation-capture-shutters",o)
$.w.j().setAttribute("data-automation-rain-window-visibility",B.b.I(A.zr($.aq),3))
r=$.w.j()
q=$.z5
n=$.aq
m=$.eN()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.f.a1(A.F(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.F(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cx,"pitch",$.fB,"modal",$.bj!=null,"dialogueOverlay",$.ay.j().y,"inputEnabled",$.aj.j().ay,"day",$.U.j().gah().a,"hour",$.U.j().gah().b],l,k),c))
$.w.j().setAttribute("data-story-journal-entry-count",""+$.U.j().gah().r)
j=A.m(l,t.X)
for(r=$.a_.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.r)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.l(0,h.a,A.F(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.w.j().setAttribute("data-automation-portals",B.f.a1(j,c))
e=$.na
r=!1
if(e!=null)if($.a_.j().e.h(0,"cellar")!=null){r=$.a_.j()
q=$.aq
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cp("cellar",$.aq)
$.w.j().setAttribute("data-audio-transmission-cellar",B.f.a1(A.F(["sourceRoom","cellar","listenerRoom",$.aq,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.w.j().setAttribute("data-audio-transmission-cellar","unavailable")},
jY(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.ce.j().a!==B.G){A.hP("save unavailable during rupture")
return}try{r=$.yZ.j()
q=$.U.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.aq
m=$.eN()
l=$.cx
k=$.fB
j=$.jK.j().d
j=j==null?null:j.a.a
i=$.jK.j().d
J.bl(s,"player",new A.lp(n,m,l,k,j,i==null?null:i.b).C())
n=$.aK.j()
m=A.fe(n.b,p)
l=A.fe(n.c,t.T)
n=n.r
J.bl(s,"visitors",new A.m9(m,l,n==null?null:new A.k6(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).C())
n=$.n5.j().b
n=A.J(n,A.q(n).c)
B.a.X(n)
J.bl(s,"ambient",n)
n=$.w_
if(n!=null)J.bl(s,"authoredEvents",A.F(["delivered",n.gmB()],p,o))
n=A.J($.xg,A.q($.xg).c)
B.a.X(n)
J.bl(s,"unverifiables",n)
J.bl(s,"inventoryInspections",$.yp().C())
n=$.za
if(n!=null)J.bl(s,"ending",A.F(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.At(q.c).C()
k=q.d
r.oH(A.B1(s,A.F(["houseSeed",n,"runSeed",m,"house",l,"time",A.F(["day",k.a,"hour",k.b],p,t.p),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C(),"narrative",q.z.C()],p,o),2))
A.hP(a)}catch(h){A.hP("save failed")}},
Ic(){var s=A.G(A.a(v.G.document).documentElement),r=s==null?null:A.an(s.getAttribute("data-gameplay-focus-loss")),q=A.bH(new A.I(B.aJ,t.rg.a(new A.x1(r)),t.vK),t.x)
switch((q==null?B.b8:q).a){case 0:$.hO=!0
s=$.bk
if(s!=null)s.eT(!0)
break
case 1:$.hO=!0
break
case 2:break}},
hP(a){var s=v.G,r=A.G(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.a(s.document).documentElement)
s=s==null?null:A.an(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.EB(B.fF,new A.xb(r),t.H)},
x5(a,b){var s,r,q,p
A.eK("error")
s=A.x(a)
r=A.zO(s,"\n"," ")
s=$.zc
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.x(a):A.x(a)+"\n"+b.q(0)
$.w.j().setAttribute("data-boot-error",p)
if($.k0()&&!q)$.w.j().setAttribute("data-boot-stack",b.q(0))
A.a(s.console).error(p)},
C0(){var s,r
if($.z3)return
$.z3=!0
s=$.bk
r=s==null
if(!r)s.co()
if(!r)s.f0("music")
B.a.k($.dl,"arm")},
hL(){var s=0,r=A.aO(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hL=A.aP(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a5(A.hK(),$async$hL)
case 2:o=null
q=4
s=7
return A.a5(A.az(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hL)
case 7:n=b
i=A
s=8
return A.a5(A.az(A.a(n.json()),t.X),$async$hL)
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
if(k!=null&&typeof k==="string"){A.t(k)
l=A.G(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.n6.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.a5(A.pl(A.c([A.wX(o),A.wQ(o),A.jS()],t.iJ),t.H),$async$hL)
case 9:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$hL,r)},
jS(){var s=0,r=A.aO(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$jS=A.aP(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a5(A.az(A.a(A.a(v.G.window).fetch("res/models/index.json")),t.m),$async$jS)
case 6:o=b
if(!A.R(o.ok)){k=A.j("HTTP "+A.x(A.no(o,"status",t.S)))
throw A.b(k)}s=7
return A.a5(A.az(A.a(o.text()),t.N),$async$jS)
case 7:n=b
m=A.Fc(n)
$.w.j().setAttribute("data-renderer-model-packages","validated")
$.w.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.aG
k=k==null?null:k.da(m)
s=8
return A.a5(k instanceof A.as?k:A.Gk(k,t.H),$async$jS)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.ak(i)
k=$.w.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.w.j().setAttribute("data-renderer-model-package-error",A.x(l))
s=5
break
case 2:s=1
break
case 5:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$jS,r)},
hK(){var s=0,r=A.aO(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hK=A.aP(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.db[g]
q=6
s=9
return A.a5(A.az(A.a(A.a(j.window).fetch(o)),i),$async$hK)
case 9:n=a0
s=10
return A.a5(A.az(A.a(n.text()),h),$async$hK)
case 10:m=a0
l=A.A8(B.f.al(m,null))
f=$.a_.b
if(f===$.a_)A.f(A.a8(""))
l.eF(f)
f=$.w.b
if(f===$.w)A.f(A.a8(""))
f.setAttribute("data-house-manifest","validated")
f=$.w.b
if(f===$.w)A.f(A.a8(""))
f.setAttribute("data-house-manifest-source",o)
f=$.w.b
if(f===$.w)A.f(A.a8(""))
f.setAttribute("data-house-role",l.c)
f=$.w.b
if(f===$.w)A.f(A.a8(""))
f.setAttribute("data-house-story-authority",l.d)
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
case 4:if(!c){$.w.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.x(d))}s=11
return A.a5(A.ne(),$async$hK)
case 11:s=12
return A.a5(A.nf(),$async$hK)
case 12:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$hK,r)},
ng(){var s=0,r=A.aO(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ng=A.aP(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.db[f]
p=7
s=10
return A.a5(A.az(A.a(A.a(i.window).fetch(n)),h),$async$ng)
case 10:m=a0
s=11
return A.a5(A.az(A.a(m.text()),g),$async$ng)
case 11:l=a0
k=A.A8(B.f.al(l,null))
k.eG()
e=$.w.b
if(e===$.w)A.f(A.a8(""))
e.setAttribute("data-house-blueprint","validated")
e=$.w.b
if(e===$.w)A.f(A.a8(""))
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
case 5:throw A.b(A.j("authored house blueprint unavailable: "+A.x(c)))
case 1:return A.aM(q,r)
case 2:return A.aL(o.at(-1),r)}})
return A.aN($async$ng,r)},
ne(){var s=0,r=A.aO(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$ne=A.aP(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.jO[c]
p=7
s=10
return A.a5(A.az(A.a(A.a(g.window).fetch(n)),f),$async$ne)
case 10:m=b1
s=11
return A.a5(A.az(A.a(m.text()),e),$async$ne)
case 11:l=b1
b=B.f.al(l,null)
b=h.b(b)?b:A.dZ("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dZ("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aX(a)?a:A.dZ("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dZ("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aC(a,!0,d):A.dZ("assets is not a list")
a4=A.B(a3)
a5=a4.i("H<1,d5>")
a3=A.J(new A.H(a3,a4.i("d5(1)").a(A.Jq()),a5),a5.i("Z.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aC(a,!0,d):A.dZ("placements is not a list")
a5=A.B(a4)
a6=a5.i("H<1,cG>")
a4=A.J(new A.H(a4,a5.i("cG(1)").a(A.Jr()),a6),a6.i("Z.E"))
a4.$flags=1
k=new A.pZ(a1,a2,a0,a3,a4)
a1=$.a_.b
if(a1===$.a_)A.f(A.a8(""))
k.eF(a1)
$.hI=k
a1=$.aG
if(a1!=null)a1.eR(k)
a1=$.w.b
if(a1===$.w)A.f(A.a8(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.w.b
if(a1===$.w)A.f(A.a8(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.w.b
if(a1===$.w)A.f(A.a8(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
a1=$.w.b
if(a1===$.w)A.f(A.a8(""))
a1.setAttribute("data-house-inventory-status-counts",B.f.a1(k.gja(),null))
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
case 5:$.w.j().setAttribute("data-house-inventory","unavailable")
$.w.j().setAttribute("data-house-inventory-error",A.x(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.x(a8))
case 1:return A.aM(q,r)
case 2:return A.aL(o.at(-1),r)}})
return A.aN($async$ne,r)},
nf(){var s=0,r=A.aO(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$nf=A.aP(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.hI
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.kq[a4]
p=7
s=10
return A.a5(A.az(A.a(A.a(a1.window).fetch(m)),a2),$async$nf)
case 10:l=b5
s=11
return A.a5(A.az(A.a(l.text()),e),$async$nf)
case 11:k=b5
a5=B.f.al(k,null)
a5=a0.b(a5)?a5:A.hH("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aC(a6,!0,a3):A.hH("emitters is not a list")
a8=A.B(a7)
a9=a8.i("H<1,d4>")
a7=A.J(new A.H(a7,a8.i("d4(1)").a(A.JH()),a9),a9.i("Z.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aX(a6)?a6:A.hH("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hH("sourceRef is not a string")
j=new A.q5(a8,a9,a7)
a7=$.a_.b
if(a7===$.a_)A.f(A.a8(""))
j.oB(a7,b2)
$.Ci=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gL(),a9=a9.gv(a9);a9.m();){g=a9.gn()
J.bl(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.a_.b
if(a7===$.a_)A.f(A.a8(""))
a8=A.DU(i)
a9=new A.nV(a7,A.aT(B.dt,e,d),a8)
a9.jj(a8,a7,B.dt)
$.na=a9
a7=$.bk
if(a7!=null){a7.CW=a9
a7.bI()}a7=$.w.b
if(a7===$.w)A.f(A.a8(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.w.b
if(a7===$.w)A.f(A.a8(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.w.b
if(a7===$.w)A.f(A.a8(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.w.b
if(a7===$.w)A.f(A.a8(""))
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
case 5:$.na=null
$.w.j().setAttribute("data-audio-planner","unavailable")
$.w.j().setAttribute("data-house-soundscape","unavailable")
$.w.j().setAttribute("data-house-soundscape-error",A.x(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.x(n))
case 1:return A.aM(q,r)
case 2:return A.aL(o.at(-1),r)}})
return A.aN($async$nf,r)},
z8(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.Q(t.a.b(s)?s:new A.b6(s,A.B(s).i("b6<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.t(q))}},
wQ(a){var s=0,r=A.aO(t.H),q,p,o,n,m,l
var $async$wQ=A.aP(function(b,c){if(b===1)return A.aL(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.z8(A.G(n?null:a.sfx),m,"")
A.z8(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.t(p))
l=$
s=2
return A.a5(A.o1(m,$.a_.j()),$async$wQ)
case 2:o=l.bk=c
o.CW=$.na
o.bI()
A.I8()
A.CB(o)
A.z0()
A.CC()
if($.z3){o.co()
o.f0("music")}return A.aM(null,r)}})
return A.aN($async$wQ,r)},
zz(a,b){var s
A.CO(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Ij(a){var s,r
try{s=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
BX(a,b){var s
if(a!=="brightness")return
s=A.G(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.x(B.b.t(b,0.6,1.4))+")")},
vZ(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.a(v.G.document).documentElement)
if(r!=null)A.R(A.a(r.classList).toggle(s,b))
A.n9()},
CC(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a0($.dn().a.cq(o)),k=A.R($.dn().a.cq(n)),j=A.R($.dn().a.cq(m))
for(s=[$.jL.j(),$.jM.j(),$.fy.j(),$.hE.j(),$.jH.j()],r=0;r<5;++r)s[r].eS(o,l)
A.BX(o,l)
for(s=[$.jL.j(),$.jM.j(),$.fy.j(),$.hE.j(),$.jH.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.vZ(n,k)
A.vZ(m,j)},
zy(a,b){var s
A.CO(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Ig(a){var s,r
try{s=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
CB(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.k3[s]
q=$.dn().a.b.h(0,r)
j.l(0,r,A.a0(q==null?A.f(A.j("setting missing from profile: "+r)):q))}p=A.R($.dn().a.cq("muted"))
o=A.R($.dn().a.cq("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bt(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dq(o)
for(q=[$.jL.j(),$.jM.j(),$.fy.j(),$.hE.j()],n=j.$ti.i("cI<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cI(j,j.r,j.e,n);m.m();){k=m.d
l.eS(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
BZ(){var s=$.bk
if(s!=null)A.CB(s)
A.CC()},
I8(){var s,r,q,p,o,n,m,l,k=null
try{k=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.al(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.hh)
q=A.B3(r.h(0,"requested"))
$.CJ=A.yJ(A.B3(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.E[n]
if(m.w==="audio"){l=m.a
o.l(0,l,A.Ig(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.E[n]
if(m.w==="display"){p=m.a
r.l(0,p,A.Ij(p))}}$.CJ=A.FD(o,r)
A.x2()},
x2(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a1($.dn().C(),null))}catch(s){}},
CO(a,b){var s,r,q,p,o,n,m
switch(A.tL(a).d.a){case 0:r=A.f7(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dn()
q=s
A.tL(a).dk(q)
p=t.N
o=t.K
n=A.h7(r.a.b,p,o)
n.l(0,a,q)
r.a=A.dN(n,1)
n=s
A.tL(a).dk(n)
o=A.h7(r.b.b,p,o)
o.l(0,a,n)
r.b=A.dN(o,1)
A.x2()}catch(m){if(!(A.ak(m) instanceof A.A))throw m}},
wX(a){var s=0,r=A.aO(t.H),q,p
var $async$wX=A.aP(function(b,c){if(b===1)return A.aL(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.z8(A.G(a==null?null:a.tex),p,"")
q=$.aG
q=q==null?null:q.dc(p)
s=2
return A.a5(A.pl(A.c([q==null?A.An(t.H):q],t.iJ),t.H),$async$wX)
case 2:return A.aM(null,r)}})
return A.aN($async$wX,r)},
Cz(){var s,r,q=v.G,p=A.h(A.a(q.window).innerWidth),o=A.h(A.a(q.window).innerHeight),n=$.w.j(),m=p>0?p:800
n.width=m
m=$.w.j()
n=o>0?o:600
m.height=n
s=A.G(A.a(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.h($.w.j().width)
s.height=A.h($.w.j().height)}q=$.eJ
if(q!=null)q.dj(A.h($.w.j().width),A.h($.w.j().height))
q=$.fz.j()
n=A.h($.w.j().width)
m=A.h($.w.j().height)
if(q.d!==B.X)A.f(A.j("pixeldart backend is not ready"))
if(n<=0||m<=0)A.f(A.o("pixeldart surface size must be positive",null))
q.b.dj(n,m)
q=$.aG
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.w.j().setAttribute("data-renderer-surface",r)},
HE(){var s,r,q=$.bj
if(q!=null){s=$.aj.j()
if(!s.CW.bm("pause",s.f)){s=$.aj.j()
s=s.CW.bm("secondary",s.f)}else s=!0
if(s){A.Hl(q)
return}if($.aj.j().f.a7(0,"GamepadDpadUp")){A.Co(q,-1)
return}if($.aj.j().f.a7(0,"GamepadDpadDown")){A.Co(q,1)
return}s=$.aj.j()
if(s.CW.bm("interact",s.f)){r=A.G(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.R(q.b.contains(r)))A.ql(r,"click",t.X)}return}s=$.aj.j()
if(s.CW.bm("pause",s.f)){A.jV($.cw.j())
return}if($.ay.j().y)return
s=$.aj.j()
if(s.CW.bm("journal",s.f))A.jZ($.jJ.j())
else{s=$.aj.j()
if(s.CW.bm("sleep",s.f))A.jZ($.n8.j())}},
Hl(a){if(a===$.cw.j()){a.af()
return}if(a===$.hG.j()||a instanceof A.hm||a instanceof A.ih||a instanceof A.i5){A.e1(a)
return}a.af()},
Co(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.h(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.a(v.G.document).activeElement)
o=B.a.bB(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.R(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
If(e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6=null,e7="exceeded"
A.a0(e8)
try{s=e8
if(!$.Ch){$.zj=s
$.Ch=!0}b=s
a=$.zj
if(typeof b!=="number")return b.ad()
r=(b-a)/1000
$.zj=s
b=r
if(typeof b!=="number")return b.ct()
if(b<0)r=0
b=r
if(typeof b!=="number")return b.iB()
if(b>0.25)r=0.25
A.IL(r)
$.aj.j().nY()
b=$.w.j()
a=$.aj.j().z!=null?"standard":"none"
b.setAttribute("data-controller",a)
q=$.aj.j().z
if(q!=null)$.w.j().setAttribute("data-controller-id",q)
else $.w.j().removeAttribute("data-controller-id")
A.HE()
if(!$.hO&&$.bj==null){b=$.eH
a=r
if(typeof a!=="number")return A.xB(a)
a=$.eH=b+a
p=0
b=t.aA
for(;;){if(a>=0.008333333333333333){a0=p
if(typeof a0!=="number")return a0.ct()
a0=a0<10}else a0=!1
if(!a0)break
$.zp=$.eN()
if(!$.zX()){a=$.U.b
if(a===$.U)A.f(A.a8(""))
a.ls(0.008333333333333333*($.cA().Q?1:20))
a=$.DA()
a0=$.U.b
if(a0===$.U)A.f(A.a8(""))
a0=a0.gah()
a1=$.U.b
if(a1===$.U)A.f(A.a8(""))
a=a.c5(a0.a,a1.gah().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.r)(a),++a2){o=a[a2]
B.a.k($.dl,"clock:"+o.a)}a=$.DB()
a0=$.U.b
if(a0===$.U)A.f(A.a8(""))
a0=a0.gah()
a1=$.U.b
if(a1===$.U)A.f(A.a8(""))
a=a.c5(a0.a,a1.gah().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.r)(a),++a2){n=a[a2]
B.a.k($.dl,"service:"+n.a+":"+n.b)}}A.IO()
A.IK()
a=$.aK.b
if(a===$.aK)A.f(A.a8(""))
a0=$.U.b
if(a0===$.U)A.f(A.a8(""))
a.w=a0.r.c>=0.5
a=a.f
a3=A.aC(a,!1,b)
a3.$flags=3
a4=a3
B.a.N(a)
if(a4.length!==0){a=$.U.b
if(a===$.U)A.f(A.a8(""))
a.o2(a4)}A.IJ()
A.IN()
A.IM()
A.II(0.008333333333333333)
a=$.hF.b
if(a===$.hF)A.f(A.a8(""))
if(a.a!=null)if((a.b-=0.008333333333333333)<=0)a.a=null
a=$.ce.b
if(a===$.ce)A.f(A.a8(""))
m=a.a!==B.G
a0=$.a_.b
if(a0===$.a_)A.f(A.a8(""))
a.dX(0.008333333333333333,a0)
if(m){a=$.ce.b
if(a===$.ce)A.f(A.a8(""))
a=a.e}else a=!1
if(a)A.CA(!0)
a=$.eH-0.008333333333333333
$.eH=a
a0=p
if(typeof a0!=="number")return a0.a5()
p=a0+1}l=B.b.t(a/0.008333333333333333,0,1)
b=$.zF=A.Bg($.DD(),$.eN(),l)
k=$.bk
if(k!=null){a=k
a0=Math.sin($.cx)
a1=Math.cos($.cx)
a5=A.a(a.a.listener)
a5.setPosition(b.a,b.b,b.c)
A.aY(a5,"setOrientation",[a0,0,a1,0,1,0],t.H)
a.iG($.aq)
for(b=$.dl.length,a2=0;a2<$.dl.length;$.dl.length===b||(0,A.r)($.dl),++a2){j=$.dl[a2]
A.Hp(k,j)}B.a.N($.dl)
$.w.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.w.j().setAttribute("data-audio-muffle01",B.b.I(k.gns(),3))
b=$.w.j()
a=k.cy?"true":"false"
b.setAttribute("data-audio-music-started",a)
a=$.w.j()
b=k.dy
if(b==null)b="ir-fallback"
a.setAttribute("data-audio-room-ir",b)
b=$.w.j()
b.setAttribute("data-audio-context-suspended",""+(A.t(k.a.state)==="suspended"))
b.setAttribute("data-audio-muted",""+k.k2)
b.setAttribute("data-audio-master-mix",B.b.I(k.fx,3))
b.setAttribute("data-audio-voice-mix",B.b.I(k.fy,3))
a=$.dk
b.setAttribute("data-audio-captions",""+(a.e===!0))
b.setAttribute("data-audio-paused",""+$.hO)}}$.cS.j().i_($.nt(),$.cx,$.fB)
b=$.aG
if(b!=null){a=$.cS.j()
a0=a.a
a6=new A.C(a0.a,a0.b,a0.c)
a0=a.b
a7=new A.C(a0.a,a0.b,a0.c)
a0=a.c
a8=b.b/b.c
a9=A.AI(a6,a7,new A.C(a0.a,a0.b,a0.c))
a=a.f
a0=a.b
a1=a.c
b0=A.yD(a8,a1,a.a,a0)
b.rx=new A.fM(a9,b0,b0.a8(0,a9),a6,a7,a0,a1,a8)}b=$.aG
if(b!=null)b.iQ($.a_.j(),$.aq)
i=$.z_.j().hM($.U.j().gah().a)
h=B.b.t(1-A.zr($.aq),0,1)
b=$.aG
if(b!=null)b.iF($.a_.j(),$.aq,$.nt(),$.bv.j().gf2(),$.bv.j().gmv(),i,A.JB($.aq),$.bv.j().b)
b=$.aG
if(b!=null){a=A.IT($.a_.j(),$.aq,i.r,$.hI)
a0=t.fu.a(i)
t.A1.a(a)
a1=A.aF(h)
b.cV=A.ad(a,t.qR)
a=a0.r
b1=A.yN(new A.j2(a0,a,0.8,a1,1,0,1,1,0))
b.xr=b1
b.y1=A.G1(a,b1.z,$.nt(),b.y2)}b=A.IW($.aq)
a=r
a0=$.aG
a0=a0==null?e6:a0.y2
if(a0==null)a0=B.de
A.IP(i,a,a0,b)
if(!$.hO&&$.bj==null){b=r
a=$.cA().Q?1:20
if(typeof b!=="number")return b.a8()
a=B.b.t(b*a,0,0.5)
b=a}else b=0
g=A.H3(i,b,h)
b=$.aG
if(b!=null)b.iR(g)
if($.Cn!==$.ce.j().a){$.Cn=$.ce.j().a
$.zt=$.zt+1}b=$.aG
if(b!=null){if($.zX())a=0
else{a=s
if(typeof a!=="number")return a.oL()
a/=1000}a0=$.zt
a1=A.h(Math.max(0,$.U.j().b))
if(!isFinite(a)||a<0)A.f(A.a6(a,"timeSeconds",e6))
if(a1<0)A.f(A.o("frame clock seeds must be non-negative",e6))
b.ef=a
b.eg=a0
b.eh=a1}b=$.aG
if(b!=null){a=$.ce.j()
a0=$.zs
a1=A.zr($.aq)
b2=a.a
b3=a.geZ()
b4=b3>0?B.b.t(a.b/b3,0,1):0
a=b2.a
b5=a>=3
b6=b2===B.bQ
b7=$.cV()
b8=b7.T("post_exposure")
b9=b7.T("post_bloom")
c0=b7.T("post_vignette")
c1=b7.T("post_film_grain")
c2=b7.T("post_dither")
c3=b7.T("post_depth_of_field")
c4=b7.T("post_color_grade")
c5=b7.T("post_affine_warp")
c6=b7.T("post_vertex_snap")
c7=B.b.aK(b7.T("post_quantization_bits"))
c8=b7.T("post_vhs_chroma")
c9=b7.T("post_vhs_noise")
d0=b7.T("shadow_ao_intensity")
d1=b2===B.a7?0.45:b8
b7=b7.cs("shadow_ssdo_enable")?d0:0
d2=b.x1
d2=B.b.t(d2,0,1)
d3=b.cb
d3=B.b.t(d3,0,1)
d4=b.d0
d5=b.d1
if(a>=1)d6=b2===B.aQ?b4:1
else d6=0
d6=Math.max(c4,d6)
if(a>=2)a=b2===B.bP?b4:1
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
b.to=new A.lr(d1,b9,b7,c3,c0,c1,d2,d3,d4,d5,a1,c2,d6,a,d7,d8,d9,e0,e1,e2,e3,b6?b4:0,a0)
b.x2=B.b.t(a1,0,1)
b.kZ()}$.fz.j().f1(A.AZ($.U.j().gia()))
f=$.aG
if(f!=null){b=$.w.j()
a=f
e4=a.d2
a0=e4==null
a1=a0?e6:e4.b
if(a1==null)a1=0
b7=a0?e6:e4.c
if(b7==null)b7=0
d1=a0?e6:e4.e
if(d1==null)d1=0
d2=a.d3
d3=a.ghP()?"ok":e7
d4=t.N
d5=t.K
d3=A.F(["drawCalls",a1,"triangles",b7,"instances",d1,"frameMs",d2,"budget",d3],d4,d5)
a0=a0?e6:e4.r
if(a0==null)a0=0
a1=a.hI
a1===$&&A.p()
a1=A.F(["gpuBytes",a0,"residentTextures",a1.d.a,"textureVramMb",0],d4,t.S)
a0=a.cY
b7=a.cZ
d1=a.d_
d2=a.gir()
a=a.hz
a=a==null?e6:a.c
b.setAttribute("data-renderer-diagnostic-groups",B.f.a1(A.F(["frame",d3,"resources",a1,"atmosphere",A.F(["rainSubmitted",a0,"rainFrustumVisible",b7,"rainFrustumCulled",d1,"weatherPhase",d2,"volumetricSources",a==null?0:a],d4,d5)],d4,t.X),e6))
e=f.gn2()
if(e!=null){$.w.j().setAttribute("data-renderer-frame-stats",e)
b=$.w.j()
a=f.ghP()?"ok":e7
b.setAttribute("data-renderer-budget",a)}$.w.j().setAttribute("data-renderer-rain-particles",""+f.cY)
$.w.j().setAttribute("data-renderer-rain-particles-requested",""+f.e9)
$.w.j().setAttribute("data-renderer-rain-particles-budget",""+f.ea)
$.w.j().setAttribute("data-renderer-rain-particles-capped",""+f.eb)
$.w.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+f.cZ)
$.w.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+f.d_)
$.w.j().setAttribute("data-renderer-weather-phase",f.gir())
b=$.w.j()
a=f.xr
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-wind-mps",B.b.I(a==null?0:a,3))
b=$.w.j()
a=f.xr
a=a==null?e6:a.r
b.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.I(a==null?0:a,8))
b=$.w.j()
a=f.xr
a=a==null?e6:a.w
b.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.I(a==null?0:a,6))
b=$.w.j()
a=f.y1
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-warm-clearance-m",B.b.I(a==null?0:a,4))
$.w.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.I(f.geH(),3))
$.w.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.I(f.giq(),4))
$.w.j().setAttribute("data-renderer-weather-impact-count",""+f.e8)
$.w.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.I(f.cW,8))
$.w.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.I(f.cX,8))
$.w.j().setAttribute("data-renderer-weather-obstacle-count",""+f.cV.length)}A.eK("running")
A.Ie()
b=$.aj.j()
b.as=b.Q=0
a=b.c
a.a7(0,"WheelUp")
a.a7(0,"WheelDown")
b.d.N(0)
b.f.N(0)
A.h(A.a(v.G.window).requestAnimationFrame(A.W(A.D4())))}catch(e5){d=A.ak(e5)
c=A.cU(e5)
A.x5(d,c)}},
Hp(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.i8("confirm")
$.bi.j().aN("interface confirmation")
break
case"ambient-winnow":a.dd("winnow",0.28)
$.bi.j().aN("wind moving through the house")
break
case"ambient-gate":a.dd("gate",0.22)
$.bi.j().aN("distant gate")
break
case"collapse":a.i8("collapse")
$.bi.j().aN("front door shudders and collapses")
break
case"clock:tick":A.ni(a,p,"tick")
break
case"clock:chime":A.ni(a,p,"chime")
break
case"clock:cuckoo":A.ni(a,p,"cuckoo")
break
case"clock:bell":A.ni(a,p,"bell")
break
default:if(B.c.U(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.ni(a,q,s[2])}}}},
ni(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.Ci,g=$.hI
if(h==null||g==null)return
s=h.mQ(b)
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
break A}if(q!=null)$.bi.j().aN(q)
q=$.a_.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.f(A.j("sound room missing: "+o))
m=n.d.a5(0,s.d.a8(0,p))
l=$.na
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.f(A.j("sound emitter "+s.a+" has no cue for "+c))
a.nW(q,m,s.e,o)
return}q=$.C3
$.C3=q+1
o=A.DV(B.ey,r,r+":"+q,m,A.H5(b,c),q,o)
q=$.aq
q=A.DR($.nt(),q)
t.gG.a(B.bz)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.f(A.j("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.f(A.j("audio listener room missing: "+q))
j=l.im(p,q,B.bz)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.f(A.j("audio cue family missing: "+q))
k=J.aQ(i)
k=k.h(i,B.d.R(A.IA(q,o.f),k.gu(i)))
o=o.e
A.ad(j.a,t.N)
a.i9(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
H5(a,b){var s,r,q,p=$.U.j().b
for(s=new A.ds(a+":"+b),r=t.E,s=new A.ai(s,s.gu(0),r.i("ai<a2.E>")),r=r.i("a2.E");s.m();){q=s.d
p=A.D0(p,q==null?r.a(q):q)}return p},
IL(a){var s=$.zc
if(s==null)return
s.textContent=""+B.b.aK(a>0?1/a:0)+" fps"},
II(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.CF||$.bj!=null){$.ns().a=new A.k(0,0,0)
return}s=$.aj.j()
r=s.cH("moveLeft")?-1:0
if(s.cH("moveRight"))++r
q=s.cH("moveForward")?1:0
if(s.cH("moveBack"))--q
s=s.ay?s.w:new A.k(0,0,0)
p=new A.k(r,0,q).a5(0,s)
o=p.gu(0)>1?p.gag():p
$.aj.j().du(b3)
n=$.aj.j().Q
m=$.aj.j().as
s=$.fE()
l=s.d?-1:1
k=s.e?-1:1
j=$.cx
i=$.aj.j()
i=i.ay?i.x:0
h=$.fE()
g=h.d?-1:1
$.cx=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.fB
h=$.aj.j()
l=h.ay?h.y:0
j=$.fE()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.fB=i
$.fB=B.b.t(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.k(i*Math.cos($.cx)+j*Math.sin($.cx),0,-i*Math.sin($.cx)+j*Math.cos($.cx)).gag().a8(0,2)
j=$.ns()
if(!isFinite(b3)||b3<0)A.f(A.a6(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.f(A.a6(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.a5(0,f.ad(0,l).a8(0,1-s))
j.a=s
d=$.jK.j().nu($.a_.j(),$.aq,$.eN(),s.a8(0,b3))
$.zw=d.a
if($.ce.j().a!==B.bR&&$.ce.j().a!==B.a7)$.aq=d.b
c=B.b.t(j.a.gu(0)/2,0,1)
s=$.DC()
$.zx=s.j3($.zx,$.eN().b,b3)
b=s.lt(b3,c)
s=$.eN()
l=$.zx
$.cS.j().i_(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.cx,$.fB)
s=$.U.j().z
l=$.w_
l=l==null?b1:l.ghx()
a=A.F9(l==null?B.km:l,s)
s=$.cS.j()
l=$.a_.j()
a0=A.JA(a,s,$.aq,l,$.hI)
l=a0.c
$.BS.j().iT(l)
a1=A.G(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.zN($.cS.j(),$.a_.j(),$.aq)
break
case 1:a3=A.Da($.cS.j(),$.a_.j(),$.aq)
break
case 2:a4=A.Db($.cS.j(),$.a_.j(),$.aq)
break
case 3:l=$.cS.j()
k=$.a_.j()
j=$.hI
a5=A.D9(l,$.aq,k,j)
break
case 4:case 5:break}$.BR.j().oy($.fF().eM($.U.j().gah().a,"status"),$.aq==="living-room")
l=$.aj.j()
k=l.CW
if(k.bm(b2,l.d)||k.bm(b2,l.f)){l=$.U.j().gah()
k=a3==null
j=k?b1:a3.a
i=B.a.a2($.aK.j().hi(21),$.aK.j().gni())
if(l.a===21&&j==="front-door"&&i){s=$.ce.j()
$.a_.j()
s.j9(B.fh,A.ad(s.c,t.N))
B.a.k($.dl,"collapse")
A.hP("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bi.j().aN("mantle flame extinguished")}else if($.U.j().j6(1,1)){a2.d=!0
s=$.hF.j()
s.a=a2
s.b=2
$.bi.j().aN("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bi.j()
s.aN(a3.ax?"door opens":"door closes")
s=$.aG
if(s!=null)s.dg($.a_.j(),a3.b)
s=$.aG
if(s!=null)s.eu($.a_.j(),a3.a)
s=$.bk
if(s!=null)s.bI()}else if(a4!=null)if(a4.w){s=$.U.j()
if(s.f.dt(1)){a4.w=!1
$.bi.j().aN("shutter closes")}}else{a4.w=!0
$.bi.j().aN("shutter opens")}else if(s===B.cG){a6=a.eL()
s=A.B(a6)
l=t.E4
a7=A.bH(new A.I(a6,s.i("l(1)").a(new A.xi(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.bH(a6,l)
if(a7!=null)$.bi.j().bX("noticed",a7.d)}else if(a5!=null){s=$.yp()
if(!a5.x)A.f(A.j("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.l(0,l,(k==null?0:k)+1)
l=$.w.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.aT(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
a9=A.Ia(a8)
s=$.bi.j()
s.bX("noticed",a9==null?"you inspect "+a8:a9)}}s=$.hF.j()
if(s.a!=null&&s.b>0){b0=$.hF.j().a
if(b0!=null&&A.zN($.cS.j(),$.a_.j(),$.aq)!==b0){s=$.hF.j()
s.a=null
s.b=0}}A.Il(b3,a0)},
Il(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.eJ
if(b9==null)return
s=A.a($.BT.j().getBoundingClientRect())
r=A.a0(s.width)
q=A.a0(s.height)
if(r<=0||q<=0)return
p=$.cz()
p.ox(c0)
o=$.Dz()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.iv(n,m,$.ay.j().y)
o=$.cV()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.a_.j()
j=$.aq
h=k.e.h(0,j)
k=!$.ay.j().y&&$.bj==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.U.j().gah()
b=$.bv.j().b
a=$.cA()
a0=a.y===B.cL
a1=h==null?null:h.a
if(a1==null)a1=$.aq
a=a.z?$.fF().eM($.U.j().gah().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.N(a3)
a4=A.a0(A.a(v.G.window).devicePixelRatio)
a5=B.b.aE(r*a4)
a6=B.b.aE(q*a4)
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
A.aY(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aY(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aY(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.mL(n,q,r)}a2.mK(q,r,new A.ri(j,i,g,f,e,d,p))
b0=r-80-24
a2.b2("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.t(B.b.aT(b*60),0,1439)
b2=B.d.ae(b1,60)
b3=B.d.R(b1,60)
b4=a0?B.d.R(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.c.bC(B.d.q(b4),2,"0")+":"+B.c.bC(B.d.q(b3),2,"0")+b5,b0,42)
a7.restore()
a2.b2("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bx(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.b2("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bx(a,b6-28),b7,68)
a7.restore()}a2.mJ(l,q,r)
a2.mM(q,r,o)
a7.restore();++b9.b
p=$.w.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ad(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
Ia(a){var s,r,q,p,o=$.U.j().z.b,n=A.q(o).i("M<1,2>"),m=A.J(new A.M(o,n),n.i("n.E"))
B.a.W(m,new A.wY())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.fF().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
IO(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cA().Q)return
if($.ay.j().y||$.bj!=null||$.aK.j().r!=null)return
s=$.U.j().gah()
for(r=$.aK.j().hi(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aK.b
if(m===$.aK)A.f(A.a8(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aK.b
if(r===$.aK)A.f(A.a8(""))
l=r.c6(n)
if(!(l instanceof A.m5))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.Ay(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.ns().a=new A.k(0,0,0)
r=$.ay.b
if(r===$.ay)A.f(A.a8(""))
q=n.a
r.eU(q,k)
$.cz().bE(!0,B.bj,q,k)
A.zn()
A.CM(n)
return}},
IK(){var s,r,q,p,o,n,m=$.w_
if(m==null)return
s=$.U.j().gah()
for(r=m.c5(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=$.U.b
if(n===$.U)A.f(A.a8(""))
if(!n.lw(o))continue
n=$.w.b
if(n===$.w)A.f(A.a8(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
Im(){var s,r,q=$.aK.j().r,p=q==null,o=p?null:q.gbn()
if(p||o==null)return
p=$.ay.j()
s=q.a
r=s.a
p.eU(r,o)
$.cz().bE(!0,B.bj,r,o)
A.zn()
A.CM(s)
if(q.d!==B.ac)A.zo()
A.hP("restored visitor")},
CM(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.U.j().n3("stranger-17-eileen-case")
r=$.fF().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aC(q,!0,t.N):B.m
p=A.bH(r,t.N)
if(s==null||p==null)return
$.bi.j().bX("inside the case",p+" \u201c"+s.d+"\u201d")},
IJ(){var s,r,q,p,o,n
if(!$.cA().Q)return
s=$.U.j().gah()
r=$.n5.j().mO(s.a,s.b)
if(r.length===0)return
q=B.a.ga_(r)
$.n5.j().b.k(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bi.j().bX(o,q.e)
n=A.IX(p)
if(n!=null)B.a.k($.dl,"ambient-"+n)},
IN(){var s,r,q,p,o=$.U.j().gah()
if(o.b<20)return
s=o.a
if(!$.xg.k(0,s))return
r=$.fF().f
r===$&&A.p()
q=r.h(0,B.d.q(s))
r=t.j.b(q)?A.aC(q,!0,t.N):B.m
p=A.Jx(r,$.U.j().b,s)
if(p!=null)$.bi.j().bX("noticed",p)},
CA(a){var s,r,q,p,o
if($.za!=null)return
s=$.U.j().gah()
r=$.U.j().r.c
q=$.U.j().e.b
p=A.q(q).i("ao<2>")
o=A.Es(new A.p4(s.a,1-r,new A.I(new A.ao(q,p),p.i("l(n.E)").a(new A.x7()),p.i("I<n.E>")).gu(0),$.U.j().r.d,a))
if(o==null)return
A.Cw(o)
A.jY("ending recorded")},
Cw(a){var s,r,q,p
$.za=a
$.CF=!0
s=$.w.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.AM($.U.j().z,r).length)
$.ns().a=new A.k(0,0,0)
A.jV($.jG.j())
s=$.fF().w
s===$&&A.p()
p=s.h(0,q)
s=t.j.b(p)?A.aC(p,!0,t.N):B.m
s=A.J(s,t.N)
B.a.J(s,A.AM($.U.j().z,r))
$.jG.j().iW(a,s)},
Hd(a){var s,r,q,p
A:{if("open"===a){s=B.aF
break A}if("chain"===a){s=B.cy
break A}if("through-door"===a){s=B.cz
break A}if("letterbox"===a){s=B.cA
break A}s=B.ag
break A}r=$.aK.j().lR(s)
if(s===B.aF){q=$.a_.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aG
if(p!=null)p.dg($.a_.j(),q.b)
p=$.aG
if(p!=null)p.eu($.a_.j(),q.a)
p=$.bk
if(p!=null)p.bI()}}if(!(r instanceof A.m3)||s===B.ag){A.wt()
return}if(r.a.gbn()==null){A.z7()
A.wt()
return}A.zo()},
Hk(){var s=$.aK.j().lu()
if(!(s instanceof A.j_)||s.b){A.z7()
A.wt()
return}if(s.a.gbn()==null){A.z7()
A.wt()
return}A.zo()},
zo(){var s,r,q,p,o,n,m,l,k,j=$.aK.j().r,i=j==null,h=i?null:j.gbn()
if(i||h==null)return
s=$.aK.j().gca()
if(s==null){$.ay.j().iV(h)
$.cz().bE(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.ay.j().eV(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.ay.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a9(k.a,k.b))}m.iX(l,r)
o=$.cz()
m=j.a.a
o.bE(!0,i?q:B.m,m,h)
if(!i){i=A.B(p)
k=A.bH(new A.I(p,i.i("l(1)").a(new A.x3(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.ay.j()
q=k.c
i.eW(h,q)
o.bE(!0,B.m,m,h+"\n\n"+q)}}}A.CL()
A.zn()},
zn(){var s,r,q=$.aK.j().r,p=q==null,o=p?null:q.gbn(),n=$.bk
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bC(B.d.q(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.zi===s)return
$.zi=s
r=n.dd(s,1)
p=$.dk
if(new A.nO(s,o).oa(p.e===!0,r).length!==0)$.bi.j().aN(o)},
He(a){var s,r,q,p,o,n=$.aK.j().lS(a)
if(!(n instanceof A.m4))return
s=n.c
if(!$.U.j().lx(n.b,s))return
r=s.c
s=$.ay.j()
q=n.a
p=q.gbn()
s.eW(p==null?"":p,r)
o=q.gbn()
if(o==null)o=""
$.cz().bE(!0,B.m,q.a.a,o+"\n\n"+r)
A.CL()
A.jY("saved after visitor answer")},
wt(){$.ay.j().hV()
$.cz().N(0)
$.zi=null
$.aj.j().di($.w.j())},
CL(){var s,r,q,p,o=$.ay.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.n7.j().eN(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.a9(p.a,B.a.ga6(p.c).q(0)))}o.iU(n,m)},
Hf(a){var s,r,q,p=$.aK.j().lT(a,!0,$.n7.j())
if(p==null)return
s=$.n7.j().mt(p,B.jt)
r=$.ay.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.Q.bQ("",!0,q)
A.jY("saved after visitor citation")},
z7(){var s,r=$.a_.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aG
if(s!=null)s.dg($.a_.j(),r.b)
s=$.aG
if(s!=null)s.eu($.a_.j(),r.a)
s=$.bk
if(s!=null)s.bI()}},
IM(){var s,r,q,p,o,n,m,l,k
for(s=$.a_.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.ce.b
if(k===$.ce)A.f(A.a8(""))
if(B.a.p(k.d,n+m)){l.d=!1
continue}}}},
JB(a){var s,r,q,p,o,n,m,l=$.a_.j().e.h(0,a)
if(l==null||$.bv.j().gf2()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.z){n=$.bv.b
if(n===$.bv)A.f(A.a8(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.q){n=$.bv.b
if(n===$.bv)A.f(A.a8(""))
n=n.b>12}else n=!1
if(!n){if(o===B.ah){n=$.bv.b
if(n===$.bv)A.f(A.a8(""))
n=n.b<9}else n=!1
if(!n)if(o===B.ai){o=$.bv.b
if(o===$.bv)A.f(A.a8(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zr(a){var s,r=$.a_.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dh
if(q.length===0)return 0.12
s=A.B(q)
return B.b.t(new A.I(q,s.i("l(1)").a(new A.x4()),s.i("I<1>")).gu(0)/q.length,0.12,1)},
IW(a){var s,r=$.a_.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dh
if(q.length===0)return 0
s=A.B(q)
return B.b.t(new A.I(q,s.i("l(1)").a(new A.xm()),s.i("I<1>")).gu(0)/q.length,0,1)},
IP(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.w&&a1.b)a0=B.aL
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.yN(new A.j2(a1,s,B.b.t(q,0.35,0.98),B.b.t(p,0,1),2.5,0,18e3,1,0))
n=$.A0()
m=n.z
l=B.a.ba(a3,0,new A.xh(),t.i)
k=$.DH()
q=B.b.t(q,0.35,0.98)
j=a0===B.w?0:r
n=n.y
i=B.b.t(l/900,0,1)
h=B.b.t(o.w/1000,0,1)
g=B.b.t(a2,0,0.5)
f=$.CP
$.CP=f+1
e=k.cn(new A.uM(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.U.j().b))
d=$.bk
s=d==null
if(!s){r=A.c([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jp([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.lA(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.nX(a.b,a.c,a.d,a.e,a.f)}s=$.w.j()
s.setAttribute("data-audio-weather-transmission",B.b.I(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.I(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.I(a4,3))},
H3(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.aG
if(a0!=null){s=$.a_.j()
r=$.aq
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.yN(new A.j2(a1,q,B.b.t(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.IU.cm($.aq,A.JP())
n=isFinite(a0.geH())?a0.geH():q
m=B.b.t(a0.giq(),0,1)
l=B.b.t((n-q)*8,0,400)
s=B.b.t(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.f(A.o("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.an&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
g=Math.min(Math.max(0,0.5-j),h)
r=o.a=j+Math.max(0,g)
k=Math.max(0,l)
f=n>0.5
e=f?Math.min(r,k*a2/4008e4):0
o.a=r-e
o.b=i+e
d=f?B.b.t((n-0.5)*(1-s)*2e-8,0,0.000002):0
s=o.b
c=Math.min(s,d*a2)
o.b=s-c
s=f?B.b.t((n-0.5)/12,0,1):0
b=Math.max(m*0.8,Math.max(s,B.b.t(l/250,0,1)))
s=Math.exp(-a2/900)
r=o.c
s=r+(b-r)*(1-s)
o.c=s
a=Math.max(0,h-g)
o.hb()
r=o.a
return new A.uS(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
IT(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.df
s=a3.aG(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=A.c([new A.fl("floor:"+r,new A.k(p,o,q),new A.k(p+s.a,o+0.05,q+s.c),a5,0.12)],t.uI)
if(a6==null)return n
for(r=a6.i7(r),m=J.Q(r.a),r=new A.T(m,r.b,r.$ti.i("T<1>")),l=a6.c;r.m();){k=m.gn()
j=k.c
i=!0
if(k.d!=="renderer-reference"){h=k.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.p(j.toLowerCase(),"stair")}if(i)continue
g=a6.bJ(j)
j=k.f.a
f=k.ih(g,l)
e=k.eB(g,l)
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
if(a1)A.f(A.o("collision box centre/extents must be finite",null))
k=new A.fl("inventory:"+k,new A.k(d-b,c-i,j-h),new A.k(d+b,c+i,j+h),a,a0)
k.A()
B.a.k(n,k)}return A.ad(n,t.qR)},
hy:function hy(a,b){this.a=a
this.b=b},
mI:function mI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
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
_.cV=b2
_.cX=_.cW=_.e8=0
_.hz=null
_.hA=2.25
_.d_=_.cZ=_.ea=_.cY=_.e9=0
_.eb=!1
_.hE=_.hD=_.hC=_.hB=_.ed=_.ec=null
_.hF=7
_.d1=_.d0=_.cb=_.hG=_.ee=0
_.d2=null
_.hH=_.mW=_.eh=_.eg=_.ef=_.d3=0
_.aH=!1
_.d4=null
_.cd=_.cc=0
_.cf=_.ce=null
_.hI=_.mX=$
_.hJ=null
_.hK=0},
vC:function vC(a){this.a=a},
vF:function vF(a,b){this.a=a
this.b=b},
vG:function vG(a){this.a=a},
vv:function vv(){},
vD:function vD(){},
vE:function vE(){},
vI:function vI(a){this.a=a},
vJ:function vJ(a){this.a=a},
vH:function vH(a,b,c){this.a=a
this.b=b
this.c=c},
vA:function vA(a,b,c){this.a=a
this.b=b
this.c=c},
vB:function vB(a,b,c){this.a=a
this.b=b
this.c=c},
vw:function vw(){},
vx:function vx(){},
vy:function vy(){},
vz:function vz(){},
vt:function vt(){},
vu:function vu(){},
vp:function vp(){},
vq:function vq(){},
vr:function vr(){},
vs:function vs(){},
mH:function mH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v3:function v3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wc:function wc(){},
wd:function wd(){},
we:function we(){},
wk:function wk(){},
wl:function wl(){},
wm:function wm(){},
wn:function wn(){},
wo:function wo(){},
wp:function wp(a){this.a=a},
wq:function wq(a){this.a=a},
wr:function wr(a){this.a=a},
wf:function wf(a){this.a=a},
wg:function wg(){},
wh:function wh(){},
wi:function wi(){},
wj:function wj(){},
w9:function w9(){},
wa:function wa(){},
wb:function wb(){},
w5:function w5(){},
w6:function w6(){},
w7:function w7(){},
w8:function w8(){},
wT:function wT(a,b){this.a=a
this.b=b},
wR:function wR(a){this.a=a},
wS:function wS(a){this.a=a},
xG:function xG(a,b){this.a=a
this.b=b},
xH:function xH(){},
xI:function xI(){},
xT:function xT(){},
y2:function y2(){},
y3:function y3(){},
y4:function y4(){},
y5:function y5(){},
y6:function y6(){},
y7:function y7(){},
y8:function y8(){},
xJ:function xJ(){},
xK:function xK(){},
xL:function xL(){},
xM:function xM(){},
xN:function xN(){},
xO:function xO(){},
xP:function xP(){},
xQ:function xQ(){},
xR:function xR(){},
xS:function xS(){},
xU:function xU(){},
xV:function xV(){},
xW:function xW(){},
xX:function xX(){},
xY:function xY(){},
xZ:function xZ(){},
y_:function y_(){},
y0:function y0(){},
y1:function y1(){},
wU:function wU(){},
wV:function wV(){},
x1:function x1(a){this.a=a},
xb:function xb(a){this.a=a},
xi:function xi(a){this.a=a},
wY:function wY(){},
x7:function x7(){},
x3:function x3(a){this.a=a},
x4:function x4(){},
xm:function xm(){},
xh:function xh(){},
Dd(a){return v.mangledGlobalNames[a]},
Ay(a,b,c,d,e,f){var s=a[b]()
return s},
ql(a,b,c){var s=null
return c.a(A.Ay(a,b,s,s,s,s))},
AL(a,b){var s,r,q,p=A.J(B.ct.by(B.f.a1(a.ij(!1),null)),t.S),o=A.q(b).i("ac<1>"),n=A.J(new A.ac(b,o),o.i("n.E"))
B.a.X(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.r)(n),++s){r=n[s]
B.a.J(p,B.ct.by(r))
B.a.k(p,0)
q=b.h(0,r)
q.toString
B.a.J(p,q)}return A.FE(p)},
Je(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a.c!=null)return a
s=a.a
r=s.b
q=t.S
p=A.m(t.N,q)
o=A.c([],t.n)
n=a.b
m=n.length
l=B.d.bf(m,r)
k=A.d6(l,0,!1,q)
for(q=r*4,j=0;j<l;++j){i=j*r
h=B.W.V(J.DK(B.r.gdY(n),n.byteOffset+i*4,q),",")
g=p.h(0,h)
if(g!=null){B.a.l(k,j,g)
continue}f=p.a
p.l(0,h,f)
B.a.l(k,j,f)
for(e=0;e<r;++e){d=i+e
if(!(d<m))return A.d(n,d)
B.a.k(o,n[d])}}c=B.d.bf(o.length,r)>65536?new Uint32Array(A.X(k)):new Uint16Array(A.X(k))
return new A.bV(s,new Float32Array(A.X(o)),c,a.d)},
FF(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.t(a*57.29577951308232,90,105)-90)/15*62},
ye(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.a6(b.gnc(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gF().c.ac()
o=q*16
n=o+16
B.r.dr(s,o,n,p.a)
if(l)B.r.dr(r,o,n,p.en().a)}m=a.a
A.v(m,"uInstanceModels",new A.y(B.ec,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.y(B.ec,r))
A.v(m,"uUseInstances",B.c0)},
Ef(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Ee(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
D0(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
IX(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
ci(a,b,c){var s=B.b.t(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bh(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
Jd(a){var s,r,q,p,o,n,m,l=B.f.al(a,null),k=t.f
if(!k.b(l))throw A.b(B.i8)
s=t.N
r=t.z
q=A.aW(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.ks[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.m(s,r))
else if(k.b(m))p.l(0,n,A.aW(m,s,r))
else throw A.b(A.N('text.json section "'+n+'" must be an object',null,null))}return p},
Jx(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbe(a)
s=new A.eD()
s.bZ((b^274953^c)>>>0)
r=s.aW(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.yw.prototype={}
J.l_.prototype={
aa(a,b){return a===b},
gS(a){return A.iG(a)},
q(a){return"Instance of '"+A.lv(a)+"'"},
gab(a){return A.dm(A.zf(this))}}
J.l1.prototype={
q(a){return String(a)},
gS(a){return a?519018:218159},
gab(a){return A.dm(t.y)},
$iam:1,
$il:1}
J.ik.prototype={
aa(a,b){return null==b},
q(a){return"null"},
gS(a){return 0},
$iam:1,
$iaw:1}
J.im.prototype={$ial:1}
J.eq.prototype={
gS(a){return 0},
gab(a){return B.nU},
q(a){return String(a)}}
J.lo.prototype={}
J.fi.prototype={}
J.dE.prototype={
q(a){var s=a[$.Dh()]
if(s==null)s=a[$.ym()]
if(s==null)return this.jd(a)
return"JavaScript function for "+J.c1(s)},
$ieY:1}
J.h4.prototype={
gS(a){return 0},
q(a){return String(a)}}
J.h5.prototype={
gS(a){return 0},
q(a){return String(a)}}
J.u.prototype={
cT(a,b){return new A.b6(a,A.B(a).i("@<1>").P(b).i("b6<1,2>"))},
k(a,b){A.B(a).c.a(b)
a.$flags&1&&A.b4(a,29)
a.push(b)},
o5(a,b){var s
a.$flags&1&&A.b4(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.AW(b,null))
return a.splice(b,1)[0]},
a7(a,b){var s
a.$flags&1&&A.b4(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.B(a).i("n<1>").a(b)
a.$flags&1&&A.b4(a,"addAll",2)
if(Array.isArray(b)){this.jz(a,b)
return}for(s=J.Q(b);s.m();)a.push(s.gn())},
jz(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.aA(a))
for(r=0;r<s;++r)a.push(b[r])},
N(a){a.$flags&1&&A.b4(a,"clear","clear")
a.length=0},
br(a,b,c){var s=A.B(a)
return new A.H(a,s.P(c).i("1(2)").a(b),s.i("@<1>").P(c).i("H<1,2>"))},
V(a,b){var s,r=A.d6(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.x(a[s]))
return r.join(b)},
ba(a,b,c,d){var s,r,q
d.a(b)
A.B(a).P(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.aA(a))}return r},
b4(a,b,c){var s,r,q,p=A.B(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.cH())},
aw(a,b){return this.b4(a,b,null)},
a9(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aB(a,b,c){var s=a.length
if(b>s)throw A.b(A.b0(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.b0(c,b,s,"end",null))
if(b===c)return A.c([],A.B(a))
return A.c(a.slice(b,c),A.B(a))},
ga_(a){if(a.length>0)return a[0]
throw A.b(A.cH())},
ga6(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cH())},
gbe(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cH())
throw A.b(A.Au())},
M(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.aA(a))}return!1},
a2(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.aA(a))}return!0},
W(a,b){var s,r,q,p,o,n=A.B(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.b4(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.HN()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.iB()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hT(b,2))
if(p>0)this.kX(a,p)},
X(a){return this.W(a,null)},
kX(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
ds(a,b){var s,r,q,p
a.$flags&2&&A.b4(a,"shuffle")
s=a.length
while(s>1){r=b.aW(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bB(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.aa(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gO(a){return a.length===0},
ga3(a){return a.length!==0},
q(a){return A.yu(a,"[","]")},
gv(a){return new J.eQ(a,a.length,A.B(a).i("eQ<1>"))},
gS(a){return A.iG(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.b4(a,"set length","change the length of")
if(b<0)throw A.b(A.b0(b,0,null,"newLength",null))
if(b>a.length)A.B(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.xv(a,b))
return a[b]},
l(a,b,c){A.B(a).c.a(c)
a.$flags&2&&A.b4(a)
if(!(b>=0&&b<a.length))throw A.b(A.xv(a,b))
a[b]=c},
eI(a,b){return new A.dT(a,b.i("dT<0>"))},
ej(a,b){var s
A.B(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gab(a){return A.dm(A.B(a))},
$iS:1,
$in:1,
$iL:1}
J.l0.prototype={
ow(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lv(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.qm.prototype={}
J.eQ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iag:1}
J.h3.prototype={
G(a,b){var s
A.a0(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gci(b)
if(this.gci(a)===s)return 0
if(this.gci(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gci(a){return a===0?1/a<0:a<0},
aE(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.bt(""+a+".toInt()"))},
hn(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.bt(""+a+".ceil()"))},
aT(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.bt(""+a+".floor()"))},
aK(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bt(""+a+".round()"))},
t(a,b,c){if(this.G(b,c)>0)throw A.b(A.xo(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
I(a,b){var s
if(b>20)throw A.b(A.b0(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gci(a))return"-"+s
return s},
eD(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.b0(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.f(A.bt("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.a8("0",o)},
q(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS(a){var s,r,q,p,o=a|0
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
bf(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h2(a,b)},
ae(a,b){return(a|0)===a?a/b|0:this.h2(a,b)},
h2(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bt("Result of truncating division is "+A.x(s)+": "+A.x(a)+" ~/ "+b))},
dU(a,b){var s
if(a>0)s=this.h1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
l6(a,b){if(0>b)throw A.b(A.xo(b))
return this.h1(a,b)},
h1(a,b){return b>31?0:a>>>b},
iY(a,b){if(b<0)throw A.b(A.xo(b))
return this.l7(a,b)},
l7(a,b){if(b>31)return 0
return a>>>b},
gab(a){return A.dm(t.p)},
$ibo:1,
$iz:1,
$ibw:1}
J.ij.prototype={
gab(a){return A.dm(t.S)},
$iam:1,
$ii:1}
J.l2.prototype={
gab(a){return A.dm(t.i)},
$iam:1}
J.ep.prototype={
hh(a,b){return new A.mU(b,a,0)},
bp(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aO(a,r-s)},
j7(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.il){s=b.e
s=!(s==null?b.e=b.jT():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.k5(a,b)}},
bU(a,b,c,d){var s=A.f9(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
k5(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.DJ(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gn()
o=p.gf_()
n=p.ge7()
q=n-o
if(q===0&&r===o)continue
B.a.k(m,this.H(a,r,o))
r=n}if(r<a.length||q>0)B.a.k(m,this.aO(a,r))
return m},
ap(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b0(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
U(a,b){return this.ap(a,b,0)},
H(a,b,c){return a.substring(b,A.f9(b,c,a.length))},
aO(a,b){return this.H(a,b,null)},
aY(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.EU(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.EV(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a8(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.fb)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bC(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a8(c,s)+a},
d5(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b0(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bB(a,b){return this.d5(a,b,0)},
p(a,b){return A.JI(a,b,0)},
G(a,b){var s
A.t(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
q(a){return a},
gS(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gab(a){return A.dm(t.N)},
gu(a){return a.length},
$iam:1,
$ibo:1,
$irm:1,
$ie:1}
A.eA.prototype={
gv(a){return new A.i1(J.Q(this.gb8()),A.q(this).i("i1<1,2>"))},
gu(a){return J.cW(this.gb8())},
gO(a){return J.k3(this.gb8())},
ga3(a){return J.DN(this.gb8())},
a9(a,b){return A.q(this).y[1].a(J.nu(this.gb8(),b))},
ga_(a){return A.q(this).y[1].a(J.A5(this.gb8()))},
p(a,b){return J.A4(this.gb8(),b)},
q(a){return J.c1(this.gb8())}}
A.i1.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iag:1}
A.eU.prototype={
gb8(){return this.a}}
A.j9.prototype={$iS:1}
A.j7.prototype={
h(a,b){return this.$ti.y[1].a(J.aZ(this.a,b))},
l(a,b,c){var s=this.$ti
J.bl(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.DO(this.a,b)},
k(a,b){var s=this.$ti
J.eO(this.a,s.c.a(s.y[1].a(b)))},
$iS:1,
$iL:1}
A.b6.prototype={
cT(a,b){return new A.b6(this.a,this.$ti.i("@<1>").P(b).i("b6<1,2>"))},
gb8(){return this.a}}
A.h6.prototype={
q(a){return"LateInitializationError: "+this.a}}
A.ds.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.td.prototype={
gE(){return 0}}
A.S.prototype={}
A.Z.prototype={
gv(a){var s=this
return new A.ai(s,s.gu(s),A.q(s).i("ai<Z.E>"))},
gO(a){return this.gu(this)===0},
ga_(a){if(this.gu(this)===0)throw A.b(A.cH())
return this.a9(0,0)},
p(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.aa(r.a9(0,s),b))return!0
if(q!==r.gu(r))throw A.b(A.aA(r))}return!1},
a2(a,b){var s,r,q=this
A.q(q).i("l(Z.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.a9(0,r)))return!1
if(s!==q.gu(q))throw A.b(A.aA(q))}return!0},
M(a,b){var s,r,q=this
A.q(q).i("l(Z.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.a9(0,r)))return!0
if(s!==q.gu(q))throw A.b(A.aA(q))}return!1},
V(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.x(p.a9(0,0))
if(o!==p.gu(p))throw A.b(A.aA(p))
for(r=s,q=1;q<o;++q){r=r+b+A.x(p.a9(0,q))
if(o!==p.gu(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.x(p.a9(0,q))
if(o!==p.gu(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}},
nm(a){return this.V(0,"")},
dl(a,b){return this.jc(0,A.q(this).i("l(Z.E)").a(b))},
br(a,b,c){var s=A.q(this)
return new A.H(this,s.P(c).i("1(Z.E)").a(b),s.i("@<Z.E>").P(c).i("H<1,2>"))},
bV(a,b){var s=A.q(this).i("Z.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bD(a){return this.bV(0,!0)},
b7(a){var s,r=this,q=A.yz(A.q(r).i("Z.E"))
for(s=0;s<r.gu(r);++s)q.k(0,r.a9(0,s))
return q}}
A.iV.prototype={
gka(){var s=J.cW(this.a),r=this.c
if(r==null||r>s)return s
return r},
gl8(){var s=J.cW(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cW(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gl8()+b
if(b<0||r>=s.gka())throw A.b(A.qc(b,s.gu(0),s,"index"))
return J.nu(s.a,r)},
bV(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aQ(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Aw(0,n):J.Av(0,n)}r=A.d6(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.a9(n,o+q))
if(m.gu(n)<l)throw A.b(A.aA(p))}return r},
bD(a){return this.bV(0,!0)}}
A.ai.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aQ(q),o=p.gu(q)
if(r.b!==o)throw A.b(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0},
$iag:1}
A.cJ.prototype={
gv(a){return new A.ir(J.Q(this.a),this.b,A.q(this).i("ir<1,2>"))},
gu(a){return J.cW(this.a)},
gO(a){return J.k3(this.a)},
ga_(a){return this.b.$1(J.A5(this.a))},
a9(a,b){return this.b.$1(J.nu(this.a,b))}}
A.du.prototype={$iS:1}
A.ir.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iag:1}
A.H.prototype={
gu(a){return J.cW(this.a)},
a9(a,b){return this.b.$1(J.nu(this.a,b))}}
A.I.prototype={
gv(a){return new A.T(J.Q(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iag:1}
A.ia.prototype={
gv(a){return new A.ib(J.Q(this.a),this.b,B.f3,this.$ti.i("ib<1,2>"))}}
A.ib.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.Q(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iag:1}
A.i8.prototype={
m(){return!1},
gn(){throw A.b(A.cH())},
$iag:1}
A.dT.prototype={
gv(a){return new A.j3(J.Q(this.a),this.$ti.i("j3<1>"))}}
A.j3.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iag:1}
A.aB.prototype={
su(a,b){throw A.b(A.bt("Cannot change the length of a fixed-length list"))},
k(a,b){A.cg(a).i("aB.E").a(b)
throw A.b(A.bt("Cannot add to a fixed-length list"))}}
A.ev.prototype={
l(a,b,c){A.q(this).i("ev.E").a(c)
throw A.b(A.bt("Cannot modify an unmodifiable list"))},
su(a,b){throw A.b(A.bt("Cannot change the length of an unmodifiable list"))},
k(a,b){A.q(this).i("ev.E").a(b)
throw A.b(A.bt("Cannot add to an unmodifiable list"))}}
A.ht.prototype={}
A.bK.prototype={
gu(a){return J.cW(this.a)},
a9(a,b){var s=this.a,r=J.aQ(s)
return r.a9(s,r.gu(s)-1-b)}}
A.jE.prototype={}
A.a9.prototype={$r:"+(1,2)",$s:1}
A.fx.prototype={$r:"+height,width(1,2)",$s:2}
A.jl.prototype={$r:"+influence,light(1,2)",$s:3}
A.jm.prototype={$r:"+influence,source(1,2)",$s:4}
A.aE.prototype={$r:"+(1,2,3)",$s:5}
A.bh.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.jn.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.jo.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.jp.prototype={
gE(){return this.a[3]},
$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",
$s:10}
A.i4.prototype={}
A.fQ.prototype={
gO(a){return this.gu(this)===0},
ga3(a){return this.gu(this)!==0},
q(a){return A.yB(this)},
l(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
A.E7()},
gL(){return new A.bF(this.mU(),A.q(this).i("bF<O<1,2>>"))},
mU(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga4(),o=o.gv(o),n=A.q(s),m=n.y[1],n=n.i("O<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.O(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bs(a,b,c,d){var s=A.m(c,d)
this.aI(0,new A.oG(this,A.q(this).P(c).P(d).i("O<1,2>(3,4)").a(b),s))
return s},
$iV:1}
A.oG.prototype={
$2(a,b){var s=A.q(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.q(this.a).i("~(1,2)")}}
A.a4.prototype={
gu(a){return this.b.length},
gfE(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
K(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.K(b))return null
return this.b[this.a[b]]},
aI(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfE()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga4(){return new A.ft(this.gfE(),this.$ti.i("ft<1>"))},
gaj(){return new A.ft(this.b,this.$ti.i("ft<2>"))}}
A.ft.prototype={
gu(a){return this.a.length},
gO(a){return 0===this.a.length},
ga3(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.dV(s,s.length,this.$ti.i("dV<1>"))}}
A.dV.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iag:1}
A.d1.prototype={
bj(){var s=this,r=s.$map
if(r==null){r=new A.f1(s.$ti.i("f1<1,2>"))
A.CV(s.a,r)
s.$map=r}return r},
K(a){return this.bj().K(a)},
h(a,b){return this.bj().h(0,b)},
aI(a,b){this.$ti.i("~(1,2)").a(b)
this.bj().aI(0,b)},
ga4(){var s=this.bj()
return new A.ac(s,A.q(s).i("ac<1>"))},
gaj(){var s=this.bj()
return new A.ao(s,A.q(s).i("ao<2>"))},
gu(a){return this.bj().a}}
A.fR.prototype={
k(a,b){A.q(this).c.a(b)
A.E8()}}
A.aU.prototype={
gu(a){return this.b},
gO(a){return this.b===0},
ga3(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dV(s,s.length,r.$ti.i("dV<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b7(a){return A.f2(this,this.$ti.c)}}
A.h0.prototype={
gu(a){return this.a.length},
gO(a){return this.a.length===0},
ga3(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.dV(s,s.length,this.$ti.i("dV<1>"))},
bj(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.f1(o.$ti.i("f1<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
n.l(0,p,p)}o.$map=n}return n},
p(a,b){return this.bj().K(b)},
b7(a){return A.f2(this,this.$ti.c)}}
A.rK.prototype={
$0(){return B.b.aT(1000*this.a.now())},
$S:38}
A.iN.prototype={}
A.uj.prototype={
b5(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.iz.prototype={
q(a){return"Null check operator used on a null value"}}
A.l3.prototype={
q(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lX.prototype={
q(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.rf.prototype={
q(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.i9.prototype={}
A.jr.prototype={
q(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idd:1}
A.eh.prototype={
q(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.De(r==null?"unknown":r)+"'"},
gab(a){var s=A.zI(this)
return A.dm(s==null?A.cg(this):s)},
$ieY:1,
goK(){return this},
$C:"$1",
$R:1,
$D:null}
A.kl.prototype={$C:"$0",$R:0}
A.km.prototype={$C:"$2",$R:2}
A.lU.prototype={}
A.lS.prototype={
q(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.De(s)+"'"}}
A.fJ.prototype={
aa(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fJ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gS(a){return(A.nr(this.a)^A.iG(this.$_target))>>>0},
q(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lv(this.a)+"'")}}
A.lF.prototype={
q(a){return"RuntimeError: "+this.a}}
A.cm.prototype={
gu(a){return this.a},
gO(a){return this.a===0},
ga3(a){return this.a!==0},
ga4(){return new A.ac(this,A.q(this).i("ac<1>"))},
gaj(){return new A.ao(this,A.q(this).i("ao<2>"))},
gL(){return new A.M(this,A.q(this).i("M<1,2>"))},
K(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nd(a)},
nd(a){var s=this.d
if(s==null)return!1
return this.cg(this.fB(s,a),a)>=0},
J(a,b){A.q(this).i("V<1,2>").a(b).aI(0,new A.qv(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ne(b)},
ne(a){var s,r,q=this.d
if(q==null)return null
s=this.fB(q,a)
r=this.cg(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.f6(s==null?q.b=q.dQ():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.f6(r==null?q.c=q.dQ():r,b,c)}else q.ng(b,c)},
ng(a,b){var s,r,q,p,o=this,n=A.q(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dQ()
r=o.d6(a)
q=s[r]
if(q==null)s[r]=[o.dR(a,b)]
else{p=o.cg(q,a)
if(p>=0)q[p].b=b
else q.push(o.dR(a,b))}},
cm(a,b){var s,r,q=this,p=A.q(q)
p.c.a(a)
p.i("2()").a(b)
if(q.K(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
a7(a,b){var s=this
if(typeof b=="string")return s.f3(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.f3(s.c,b)
else return s.nf(b)},
nf(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.d6(a)
r=n[s]
q=o.cg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f4(p)
if(r.length===0)delete n[s]
return p.b},
N(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dv()}},
aI(a,b){var s,r,q=this
A.q(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.aA(q))
s=s.c}},
f6(a,b,c){var s,r=A.q(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dR(b,c)
else s.b=c},
f3(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f4(s)
delete a[b]
return s.b},
dv(){this.r=this.r+1&1073741823},
dR(a,b){var s=this,r=A.q(s),q=new A.qF(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dv()
return q},
f4(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dv()},
d6(a){return J.aH(a)&1073741823},
fB(a,b){return a[this.d6(b)]},
cg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
q(a){return A.yB(this)},
dQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iyy:1}
A.qv.prototype={
$2(a,b){var s=this.a,r=A.q(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.q(this.a).i("~(1,2)")}}
A.qF.prototype={}
A.ac.prototype={
gu(a){return this.a.a},
gO(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bU(s,s.r,s.e,this.$ti.i("bU<1>"))},
p(a,b){return this.a.K(b)}}
A.bU.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iag:1}
A.ao.prototype={
gu(a){return this.a.a},
gO(a){return this.a.a===0},
gv(a){var s=this.a
return new A.ae(s,s.r,s.e,this.$ti.i("ae<1>"))}}
A.ae.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iag:1}
A.M.prototype={
gu(a){return this.a.a},
gO(a){return this.a.a===0},
gv(a){var s=this.a
return new A.cI(s,s.r,s.e,this.$ti.i("cI<1,2>"))}}
A.cI.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.O(s.a,s.b,r.$ti.i("O<1,2>"))
r.c=s.c
return!0}},
$iag:1}
A.f1.prototype={
d6(a){return A.J7(a)&1073741823},
cg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.xC.prototype={
$1(a){return this.a(a)},
$S:16}
A.xD.prototype={
$2(a,b){return this.a(a,b)},
$S:88}
A.xE.prototype={
$1(a){return this.a(A.t(a))},
$S:34}
A.bg.prototype={
gab(a){return A.dm(this.fC())},
fC(){return A.Jj(this.$r,this.cG())},
q(a){return this.h8(!1)},
h8(a){var s,r,q,p,o,n=this.ke(),m=this.cG(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.AT(o):l+A.x(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ke(){var s,r=this.$s
while($.vK.length<=r)B.a.k($.vK,null)
s=$.vK[r]
if(s==null){s=this.jS()
B.a.l($.vK,r,s)}return s},
jS(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.yv(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ad(j,k)}}
A.dW.prototype={
cG(){return[this.a,this.b]},
aa(a,b){if(b==null)return!1
return b instanceof A.dW&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gS(a){return A.cL(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.dX.prototype={
cG(){return[this.a,this.b,this.c]},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.dX&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gS(a){var s=this
return A.cL(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.hx.prototype={
cG(){return this.a},
aa(a,b){if(b==null)return!1
return b instanceof A.hx&&this.$s===b.$s&&A.Gw(this.a,b.a)},
gS(a){return A.cL(this.$s,A.F8(this.a),B.h,B.h,B.h,B.h)}}
A.il.prototype={
q(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkx(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.AA(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
jT(){var s,r=this.a
if(!B.c.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hh(a,b){return new A.mi(this,b,0)},
kd(a,b){var s,r=this.gkx()
if(r==null)r=A.fA(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mD(s)},
$irm:1,
$iFp:1}
A.mD.prototype={
gf_(){return this.b.index},
ge7(){var s=this.b
return s.index+s[0].length},
$iha:1,
$iiH:1}
A.mi.prototype={
gv(a){return new A.mj(this.a,this.b,this.c)}}
A.mj.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kd(l,s)
if(p!=null){m.d=p
o=p.ge7()
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
$iag:1}
A.iU.prototype={
ge7(){return this.a+this.c.length},
$iha:1,
gf_(){return this.a}}
A.mU.prototype={
gv(a){return new A.mV(this.a,this.b,this.c)},
ga_(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.iU(r,s)
throw A.b(A.cH())}}
A.mV.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.iU(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iag:1}
A.v4.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a8(""))
return s}}
A.er.prototype={
gab(a){return B.nN},
hk(a,b,c){A.w3(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hj(a,b,c){A.w3(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iam:1,
$ier:1}
A.hc.prototype={$ihc:1}
A.ix.prototype={
gdY(a){if(((a.$flags|0)&2)!==0)return new A.vR(a.buffer)
else return a.buffer},
kq(a,b,c,d){var s=A.b0(b,0,c,d,null)
throw A.b(s)},
fd(a,b,c,d){if(b>>>0!==b||b>c)this.kq(a,b,c,d)}}
A.vR.prototype={
hk(a,b,c){var s=A.AO(this.a,b,c)
s.$flags=3
return s},
hj(a,b,c){var s=A.F5(this.a,b,c)
s.$flags=3
return s}}
A.ld.prototype={
gab(a){return B.nO},
$iam:1}
A.bp.prototype={
gu(a){return a.length},
fZ(a,b,c,d,e){var s,r,q=a.length
this.fd(a,b,q,"start")
this.fd(a,c,q,"end")
if(b>c)throw A.b(A.b0(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.o(e,null))
r=d.length
if(r-e<s)throw A.b(A.j("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic3:1}
A.iv.prototype={
h(a,b){A.e0(b,a,a.length)
return a[b]},
l(a,b,c){A.aF(c)
a.$flags&2&&A.b4(a)
A.e0(b,a,a.length)
a[b]=c},
dr(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.b4(a,5)
this.fZ(a,b,c,d,0)
return},
$iS:1,
$in:1,
$iL:1}
A.iw.prototype={
l(a,b,c){A.h(c)
a.$flags&2&&A.b4(a)
A.e0(b,a,a.length)
a[b]=c},
iN(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.b4(a,5)
this.fZ(a,b,c,d,e)
return},
$iS:1,
$in:1,
$iL:1}
A.iu.prototype={
gab(a){return B.nP},
aB(a,b,c){return new Float32Array(a.subarray(b,A.C7(b,c,a.length)))},
$iam:1,
$ipe:1}
A.le.prototype={
gab(a){return B.nQ},
$iam:1}
A.lf.prototype={
gab(a){return B.nR},
h(a,b){A.e0(b,a,a.length)
return a[b]},
$iam:1}
A.lg.prototype={
gab(a){return B.nS},
h(a,b){A.e0(b,a,a.length)
return a[b]},
$iam:1}
A.lh.prototype={
gab(a){return B.nT},
h(a,b){A.e0(b,a,a.length)
return a[b]},
$iam:1}
A.li.prototype={
gab(a){return B.nW},
h(a,b){A.e0(b,a,a.length)
return a[b]},
$iam:1,
$iul:1}
A.lj.prototype={
gab(a){return B.nX},
h(a,b){A.e0(b,a,a.length)
return a[b]},
$iam:1,
$ium:1}
A.f5.prototype={
gab(a){return B.nY},
gu(a){return a.length},
h(a,b){A.e0(b,a,a.length)
return a[b]},
$iam:1,
$if5:1}
A.iy.prototype={
gab(a){return B.nZ},
gu(a){return a.length},
h(a,b){A.e0(b,a,a.length)
return a[b]},
aB(a,b,c){return new Uint8Array(a.subarray(b,A.C7(b,c,a.length)))},
$iam:1,
$ic_:1}
A.jg.prototype={}
A.jh.prototype={}
A.ji.prototype={}
A.jj.prototype={}
A.cO.prototype={
i(a){return A.jv(v.typeUniverse,this,a)},
P(a){return A.BI(v.typeUniverse,this,a)}}
A.mw.prototype={}
A.mY.prototype={
q(a){return A.bQ(this.a,null)}}
A.mu.prototype={
q(a){return this.a}}
A.hB.prototype={$idP:1}
A.v0.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
A.v_.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:87}
A.v1.prototype={
$0(){this.a.$0()},
$S:17}
A.v2.prototype={
$0(){this.a.$0()},
$S:17}
A.vN.prototype={
jx(a,b){if(self.setTimeout!=null)self.setTimeout(A.hT(new A.vO(this,b),0),a)
else throw A.b(A.bt("`setTimeout()` not found."))}}
A.vO.prototype={
$0(){this.b.$0()},
$S:0}
A.mk.prototype={
dZ(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dA(a)
else{s=r.a
if(q.i("aS<1>").b(a))s.fb(a)
else s.cE(a)}},
e_(a,b){var s=this.a
if(this.b)s.bv(new A.bm(a,b))
else s.cC(new A.bm(a,b))}}
A.w0.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.w1.prototype={
$2(a,b){this.a.$2(1,new A.i9(a,t.l.a(b)))},
$S:52}
A.xn.prototype={
$2(a,b){this.a(A.h(a),b)},
$S:69}
A.cd.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
l0(a,b){var s,r,q
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
o.d=null}q=o.l0(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.BC
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
o.a=A.BC
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.j("sync*"))}return!1},
lo(a){var s,r,q=this
if(a instanceof A.bF){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.Q(a)
return 2}},
$iag:1}
A.bF.prototype={
gv(a){return new A.cd(this.a(),this.$ti.i("cd<1>"))}}
A.bm.prototype={
q(a){return A.x(this.a)},
$iat:1,
gbY(){return this.b}}
A.pk.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fj(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ak(p)
q=A.cU(p)
l=r
o=q
n=A.zg(l,o)
l=new A.bm(l,o)
m.b.bv(l)
return}m.b.fj(s)}},
$S:0}
A.pn.prototype={
$2(a,b){var s,r,q=this
A.fA(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bv(new A.bm(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bv(new A.bm(r,s))}},
$S:75}
A.pm.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bl(r,k.b,a)
if(J.aa(s,0)){q=A.c([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.eO(q,l)}k.c.cE(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bv(new A.bm(q,o))}},
$S(){return this.d.i("aw(0)")}}
A.mo.prototype={
e_(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.cC(A.HM(a,b))},
ho(a){return this.e_(a,null)}}
A.j5.prototype={
dZ(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.j("Future already completed"))
s.dA(r.i("1/").a(a))}}
A.dU.prototype={
nr(a){if((this.c&15)!==6)return!0
return this.b.b.eA(t.bl.a(this.d),a.a,t.y,t.K)},
n4(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.ot(q,m,a.b,o,n,t.l)
else p=l.eA(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ak(s))){if((r.c&1)!==0)throw A.b(A.o("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.o("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
eC(a,b,c){var s,r,q=this.$ti
q.P(c).i("1/(2)").a(a)
s=$.ar
if(s===B.B){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.a6(b,"onError",u.c))}else{c.i("@<0/>").P(q.c).i("1(2)").a(a)
b=A.Cy(b,s)}r=new A.as(s,c.i("as<0>"))
this.cB(new A.dU(r,3,a,b,q.i("@<1>").P(c).i("dU<1,2>")))
return r},
h6(a,b,c){var s,r=this.$ti
r.P(c).i("1/(2)").a(a)
s=new A.as($.ar,c.i("as<0>"))
this.cB(new A.dU(s,19,a,b,r.i("@<1>").P(c).i("dU<1,2>")))
return s},
l3(a){this.a=this.a&1|16
this.c=a},
cD(a){this.a=a.a&30|this.a&1
this.c=a.c},
cB(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cB(a)
return}r.cD(s)}A.nj(null,null,r.b,t.O.a(new A.v7(r,a)))}},
fN(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fN(a)
return}m.cD(n)}l.a=m.cN(a)
A.nj(null,null,m.b,t.O.a(new A.vc(l,m)))}},
c3(){var s=t.F.a(this.c)
this.c=null
return this.cN(s)},
cN(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fj(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aS<1>").b(a))A.va(a,r,!0)
else{s=r.c3()
q.c.a(a)
r.a=8
r.c=a
A.fr(r,s)}},
cE(a){var s,r=this
r.$ti.c.a(a)
s=r.c3()
r.a=8
r.c=a
A.fr(r,s)},
jR(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c3()
q.cD(a)
A.fr(q,r)},
bv(a){var s=this.c3()
this.l3(a)
A.fr(this,s)},
dA(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aS<1>").b(a)){this.fb(a)
return}this.jB(a)},
jB(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nj(null,null,s.b,t.O.a(new A.v9(s,a)))},
fb(a){A.va(this.$ti.i("aS<1>").a(a),this,!1)
return},
cC(a){this.a^=2
A.nj(null,null,this.b,t.O.a(new A.v8(this,a)))},
$iaS:1}
A.v7.prototype={
$0(){A.fr(this.a,this.b)},
$S:0}
A.vc.prototype={
$0(){A.fr(this.b,this.a.a)},
$S:0}
A.vb.prototype={
$0(){A.va(this.a.a,this.b,!0)},
$S:0}
A.v9.prototype={
$0(){this.a.cE(this.b)},
$S:0}
A.v8.prototype={
$0(){this.a.bv(this.b)},
$S:0}
A.vf.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.os(t.pF.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.cU(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nL(q)
n=k.a
n.c=new A.bm(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.eC(new A.vg(l,m),new A.vh(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vg.prototype={
$1(a){this.a.jR(this.b)},
$S:24}
A.vh.prototype={
$2(a,b){A.fA(a)
t.l.a(b)
this.a.bv(new A.bm(a,b))},
$S:80}
A.ve.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eA(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.cU(l)
q=s
p=r
if(p==null)p=A.nL(q)
o=this.a
o.c=new A.bm(q,p)
o.b=!0}},
$S:0}
A.vd.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nr(s)&&p.a.e!=null){p.c=p.a.n4(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.cU(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nL(p)
m=l.b
m.c=new A.bm(p,n)
p=m}p.b=!0}},
$S:0}
A.ml.prototype={}
A.mT.prototype={}
A.jD.prototype={$iBw:1}
A.mM.prototype={
ou(a){var s,r,q
t.O.a(a)
try{if(B.B===$.ar){a.$0()
return}A.CD(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.cU(q)
A.zu(A.fA(s),t.l.a(r))}},
hm(a){return new A.vL(this,t.O.a(a))},
os(a,b){b.i("0()").a(a)
if($.ar===B.B)return a.$0()
return A.CD(null,null,this,a,b)},
eA(a,b,c,d){c.i("@<0>").P(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.B)return a.$1(b)
return A.Iq(null,null,this,a,b,c,d)},
ot(a,b,c,d,e,f){d.i("@<0>").P(e).P(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.B)return a.$2(b,c)
return A.Ip(null,null,this,a,b,c,d,e,f)},
ie(a,b,c,d){return b.i("@<0>").P(c).P(d).i("1(2,3)").a(a)}}
A.vL.prototype={
$0(){return this.a.ou(this.b)},
$S:0}
A.x8.prototype={
$0(){A.Ex(this.a,this.b)},
$S:0}
A.ja.prototype={
gu(a){return this.a},
gO(a){return this.a===0},
ga3(a){return this.a!==0},
ga4(){return new A.fs(this,this.$ti.i("fs<1>"))},
gaj(){var s=this.$ti
return A.l8(new A.fs(this,s.i("fs<1>")),new A.vj(this),s.c,s.y[1])},
K(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.jX(a)},
jX(a){var s=this.d
if(s==null)return!1
return this.bw(this.fi(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.By(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.By(q,b)
return r}else return this.ki(b)},
ki(a){var s,r,q=this.d
if(q==null)return null
s=this.fi(q,a)
r=this.bw(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fg(s==null?m.b=A.yR():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fg(r==null?m.c=A.yR():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.yR()
p=A.nr(b)&1073741823
o=q[p]
if(o==null){A.yS(q,p,[b,c]);++m.a
m.e=null}else{n=m.bw(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aI(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fh()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.aA(m))}},
fh(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.d6(i.a,null,!1,t.z)
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
fg(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.yS(a,b,c)},
fi(a,b){return a[A.nr(b)&1073741823]}}
A.vj.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.jc.prototype={
bw(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fs.prototype={
gu(a){return this.a.a},
gO(a){return this.a.a===0},
ga3(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.jb(s,s.fh(),this.$ti.i("jb<1>"))},
p(a,b){return this.a.K(b)}}
A.jb.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aA(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iag:1}
A.cu.prototype={
fK(){return new A.cu(A.q(this).i("cu<1>"))},
gv(a){var s=this,r=new A.fu(s,s.r,A.q(s).i("fu<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gO(a){return this.a===0},
ga3(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.jW(b)},
jW(a){var s=this.d
if(s==null)return!1
return this.bw(s[this.dE(a)],a)>=0},
ga_(a){var s=this.e
if(s==null)throw A.b(A.j("No elements"))
return A.q(this).c.a(s.a)},
k(a,b){var s,r,q=this
A.q(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ff(s==null?q.b=A.yT():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ff(r==null?q.c=A.yT():r,b)}else return q.jy(b)},
jy(a){var s,r,q,p=this
A.q(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.yT()
r=p.dE(a)
q=s[r]
if(q==null)s[r]=[p.dD(a)]
else{if(p.bw(q,a)>=0)return!1
q.push(p.dD(a))}return!0},
a7(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fQ(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fQ(s.c,b)
else return s.kW(b)},
kW(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dE(a)
r=n[s]
q=o.bw(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ha(p)
return!0},
kg(a,b){var s,r,q,p,o,n=this,m=A.q(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.aA(n))
if(!0===o)n.a7(0,r)}},
N(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dP()}},
ff(a,b){A.q(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dD(b)
return!0},
fQ(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.ha(s)
delete a[b]
return!0},
dP(){this.r=this.r+1&1073741823},
dD(a){var s,r=this,q=new A.mC(A.q(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dP()
return q},
ha(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dP()},
dE(a){return J.aH(a)&1073741823},
bw(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iAG:1}
A.mC.prototype={}
A.fu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iag:1}
A.qG.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:81}
A.a2.prototype={
gv(a){return new A.ai(a,this.gu(a),A.cg(a).i("ai<a2.E>"))},
a9(a,b){return this.h(a,b)},
gO(a){return this.gu(a)===0},
ga3(a){return!this.gO(a)},
ga_(a){if(this.gu(a)===0)throw A.b(A.cH())
return this.h(a,0)},
p(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.aa(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.b(A.aA(a))}return!1},
a2(a,b){var s,r
A.cg(a).i("l(a2.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.b(A.aA(a))}return!0},
M(a,b){var s,r
A.cg(a).i("l(a2.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.b(A.aA(a))}return!1},
V(a,b){var s
if(this.gu(a)===0)return""
s=A.yK("",a,b)
return s.charCodeAt(0)==0?s:s},
eI(a,b){return new A.dT(a,b.i("dT<0>"))},
br(a,b,c){var s=A.cg(a)
return new A.H(a,s.P(c).i("1(a2.E)").a(b),s.i("@<a2.E>").P(c).i("H<1,2>"))},
k(a,b){var s
A.cg(a).i("a2.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.l(a,s,b)},
cT(a,b){return new A.b6(a,A.cg(a).i("@<a2.E>").P(b).i("b6<1,2>"))},
mY(a,b,c,d){var s
A.cg(a).i("a2.E?").a(d)
A.f9(b,c,this.gu(a))
for(s=b;s<c;++s)this.l(a,s,d)},
q(a){return A.yu(a,"[","]")},
$iS:1,
$in:1,
$iL:1}
A.af.prototype={
aI(a,b){var s,r,q,p=A.q(this)
p.i("~(af.K,af.V)").a(b)
for(s=this.ga4(),s=s.gv(s),p=p.i("af.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gL(){return this.ga4().br(0,new A.qI(this),A.q(this).i("O<af.K,af.V>"))},
bs(a,b,c,d){var s,r,q,p,o,n=A.q(this)
n.P(c).P(d).i("O<1,2>(af.K,af.V)").a(b)
s=A.m(c,d)
for(r=this.ga4(),r=r.gv(r),n=n.i("af.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
lq(a){var s,r
for(s=J.Q(A.q(this).i("n<O<af.K,af.V>>").a(a));s.m();){r=s.gn()
this.l(0,r.a,r.b)}},
K(a){return this.ga4().p(0,a)},
gu(a){var s=this.ga4()
return s.gu(s)},
gO(a){var s=this.ga4()
return s.gO(s)},
ga3(a){var s=this.ga4()
return s.ga3(s)},
gaj(){return new A.jd(this,A.q(this).i("jd<af.K,af.V>"))},
q(a){return A.yB(this)},
$iV:1}
A.qI.prototype={
$1(a){var s=this.a,r=A.q(s)
r.i("af.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("af.V").a(s)
return new A.O(a,s,r.i("O<af.K,af.V>"))},
$S(){return A.q(this.a).i("O<af.K,af.V>(af.K)")}}
A.qJ.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.x(a)
r.a=(r.a+=s)+": "
s=A.x(b)
r.a+=s},
$S:50}
A.jd.prototype={
gu(a){var s=this.a
return s.gu(s)},
gO(a){var s=this.a
return s.gO(s)},
ga3(a){var s=this.a
return s.ga3(s)},
ga_(a){var s=this.a,r=s.ga4()
r=s.h(0,r.ga_(r))
return r==null?this.$ti.y[1].a(r):r},
gv(a){var s=this.a,r=s.ga4()
return new A.je(r.gv(r),s,this.$ti.i("je<1,2>"))}}
A.je.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iag:1}
A.jw.prototype={
l(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bt("Cannot modify unmodifiable map"))}}
A.h9.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.q(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
K(a){return this.a.K(a)},
aI(a,b){this.a.aI(0,A.q(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
ga3(a){var s=this.a
return s.ga3(s)},
gu(a){var s=this.a
return s.gu(s)},
ga4(){return this.a.ga4()},
q(a){return this.a.q(0)},
gaj(){return this.a.gaj()},
gL(){return this.a.gL()},
bs(a,b,c,d){return this.a.bs(0,A.q(this).P(c).P(d).i("O<1,2>(3,4)").a(b),c,d)},
$iV:1}
A.ew.prototype={}
A.db.prototype={
gO(a){return this.gu(this)===0},
ga3(a){return this.gu(this)!==0},
J(a,b){var s
for(s=J.Q(A.q(this).i("n<1>").a(b));s.m();)this.k(0,s.gn())},
bA(a){var s,r,q=this.b7(0)
for(s=this.gv(this);s.m();){r=s.gn()
if(a.p(0,r))q.a7(0,r)}return q},
q(a){return A.yu(this,"{","}")},
a2(a,b){var s
A.q(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
V(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c1(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.x(q.gn())
while(q.m())}else{r=s
do r=r+b+A.x(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
ga_(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cH())
return s.gn()},
a9(a,b){var s,r
A.lA(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.qc(b,b-r,this,"index"))},
$iS:1,
$in:1,
$idM:1}
A.jq.prototype={
bA(a){var s,r,q,p=this,o=p.fK()
for(s=A.fv(p,p.r,A.q(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.k(0,q)}return o},
b7(a){var s=this.fK()
s.J(0,this)
return s}}
A.mZ.prototype={
k(a,b){this.$ti.c.a(b)
return A.GI()}}
A.hu.prototype={
p(a,b){return this.a.p(0,b)},
gu(a){return this.a.a},
gv(a){var s=this.a
return A.fv(s,s.r,A.q(s).c)},
b7(a){return this.a.b7(0)}}
A.hC.prototype={}
A.jx.prototype={}
A.mA.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kQ(b):s}},
gu(a){return this.b==null?this.c.a:this.bF().length},
gO(a){return this.gu(0)===0},
ga3(a){return this.gu(0)>0},
ga4(){if(this.b==null){var s=this.c
return new A.ac(s,A.q(s).i("ac<1>"))}return new A.mB(this)},
gaj(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.q(s).i("ao<2>"))}return A.l8(r.bF(),new A.vl(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.t(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.K(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lg().l(0,b,c)},
K(a){if(this.b==null)return this.c.K(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aI(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aI(0,b)
s=o.bF()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ws(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
bF(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
lg(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bF()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.N(r)
n.a=n.b=null
return n.c=s},
kQ(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ws(this.a[a])
return this.b[a]=s}}
A.vl.prototype={
$1(a){return this.a.h(0,A.t(a))},
$S:34}
A.mB.prototype={
gu(a){return this.a.gu(0)},
a9(a,b){var s=this.a
if(s.b==null)s=s.ga4().a9(0,b)
else{s=s.bF()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.ga4()
s=s.gv(s)}else{s=s.bF()
s=new J.eQ(s,s.length,A.B(s).i("eQ<1>"))}return s},
p(a,b){return this.a.K(b)}}
A.vU.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:44}
A.vT.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:44}
A.k7.prototype={
mw(a,b){t.L.a(a)
if(b===!0)return B.ew.by(a)
else return B.ev.by(a)}}
A.vP.prototype={
by(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.f9(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.b(A.N("Invalid value in input: "+o,null,null))
return this.jZ(a,0,r)}}return A.yL(a,0,r)},
jZ(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.ax((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.k8.prototype={}
A.kf.prototype={
nv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.f9(a4,a5,a2)
s=$.Dt()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.xA(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.xA(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bB("")
g=o}else g=o
g.a+=B.c.H(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.N("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.H(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.A9(a3,m,a5,n,l,r)
else{b=B.d.R(r-1,4)+1
if(b===1)throw A.b(A.N(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.bU(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.A9(a3,m,a5,n,l,a)
else{b=B.d.R(a,4)
if(b===1)throw A.b(A.N(a1,a3,a5))
if(b>1)a3=B.c.bU(a3,a5,a5,b===2?"==":"=")}return a3}}
A.oo.prototype={}
A.ei.prototype={}
A.kq.prototype={}
A.kC.prototype={}
A.io.prototype={
q(a){var s=A.kD(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.l5.prototype={
q(a){return"Cyclic error in JSON stringify"}}
A.l4.prototype={
al(a,b){var s=A.Id(a,this.gmz().a)
return s},
a1(a,b){var s=A.Gm(a,this.gmR().b,null)
return s},
gmR(){return B.jy},
gmz(){return B.jx}}
A.qx.prototype={}
A.qw.prototype={}
A.vn.prototype={
it(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.H(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.H(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.H(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.H(a,r,m)},
dB(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.l5(a,null))}B.a.k(s,a)},
dm(a){var s,r,q,p,o=this
if(o.is(a))return
o.dB(a)
try{s=o.b.$1(a)
if(!o.is(s)){q=A.AC(a,null,o.gfM())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ak(p)
q=A.AC(a,r,o.gfM())
throw A.b(q)}},
is(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.q(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.it(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dB(a)
q.oI(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dB(a)
r=q.oJ(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
oI(a){var s,r,q=this.c
q.a+="["
s=J.aQ(a)
if(s.ga3(a)){this.dm(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.dm(s.h(a,r))}}q.a+="]"},
oJ(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.d6(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aI(0,new A.vo(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.it(A.t(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.dm(r[n])}p.a+="}"
return!0}}
A.vo.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:50}
A.vm.prototype={
gfM(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.m0.prototype={}
A.ur.prototype={
by(a){var s,r,q,p=a.length,o=A.f9(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.vV(s)
if(r.kf(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.dW()}return B.W.aB(s,0,r.b)}}
A.vV.prototype={
dW(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.b4(q)
s=q.length
if(!(p<s))return A.d(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.d(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.d(q,p)
q[p]=189},
ln(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.b4(r)
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
return!0}else{n.dW()
return!1}},
kf(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.d(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.d(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.b4(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.d(a,m)
if(k.ln(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.dW()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.b4(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.b4(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.d(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.d(s,m)
s[m]=n&63|128}}}return o}}
A.uq.prototype={
by(a){return new A.vS(this.a).jY(t.L.a(a),0,null,!0)}}
A.vS.prototype={
jY(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.f9(b,c,J.cW(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.GZ(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.GY(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dG(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.H_(o)
l.b=0
throw A.b(A.N(m,a,p+l.c))}return n},
dG(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.ae(b+c,2)
r=q.dG(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dG(a,s,c,d)}return q.my(a,b,c,d)},
my(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bB(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.yL(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eV.prototype={
gau(){return A.AR(this)},
gaV(){return A.AS(this)},
aa(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eV)if(this.a===b.a)s=this.b===b.b
return s},
gS(a){return A.cL(this.a,this.b,B.h,B.h,B.h,B.h)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
q(a){var s=this,r=A.Ec(A.Fl(s)),q=A.ks(A.Fj(s)),p=A.ks(A.AR(s)),o=A.ks(A.AS(s)),n=A.ks(A.Fi(s)),m=A.ks(A.Fk(s)),l=A.Ag(A.Fh(s)),k=s.b,j=k===0?"":A.Ag(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibo:1}
A.dt.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.dt&&this.a===b.a},
gS(a){return B.d.gS(this.a)},
G(a,b){return B.d.G(this.a,t.yb.a(b).a)},
q(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.ae(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.ae(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bC(B.d.q(o%1e6),6,"0")},
$ibo:1}
A.mt.prototype={
q(a){return this.B()},
$iD:1}
A.at.prototype={
gbY(){return A.Fg(this)}}
A.k9.prototype={
q(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kD(s)
return"Assertion failed"}}
A.dP.prototype={}
A.cC.prototype={
gdK(){return"Invalid argument"+(!this.a?"(s)":"")},
gdJ(){return""},
q(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.x(p),n=s.gdK()+q+o
if(!s.a)return n
return n+s.gdJ()+": "+A.kD(s.gek())},
gek(){return this.b}}
A.hg.prototype={
gek(){return A.z2(this.b)},
gdK(){return"RangeError"},
gdJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.x(q):""
else if(q==null)s=": Not greater than or equal to "+A.x(r)
else if(q>r)s=": Not in inclusive range "+A.x(r)+".."+A.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.x(r)
return s}}
A.kX.prototype={
gek(){return A.h(this.b)},
gdK(){return"RangeError"},
gdJ(){if(A.h(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.iX.prototype={
q(a){return"Unsupported operation: "+this.a}}
A.lW.prototype={
q(a){return"UnimplementedError: "+this.a}}
A.ho.prototype={
q(a){return"Bad state: "+this.a}}
A.kn.prototype={
q(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kD(s)+"."}}
A.ll.prototype={
q(a){return"Out of Memory"},
gbY(){return null},
$iat:1}
A.iS.prototype={
q(a){return"Stack Overflow"},
gbY(){return null},
$iat:1}
A.v5.prototype={
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
k=""}return g+l+B.c.H(e,i,j)+k+"\n"+B.c.a8(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.x(f)+")"):g}}
A.n.prototype={
cT(a,b){return A.E1(this,A.q(this).i("n.E"),b)},
br(a,b,c){var s=A.q(this)
return A.l8(this,s.P(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dl(a,b){var s=A.q(this)
return new A.I(this,s.i("l(n.E)").a(b),s.i("I<n.E>"))},
eI(a,b){return new A.dT(this,b.i("dT<0>"))},
p(a,b){var s
for(s=this.gv(this);s.m();)if(J.aa(s.gn(),b))return!0
return!1},
ba(a,b,c,d){var s,r
d.a(b)
A.q(this).P(d).i("1(1,n.E)").a(c)
for(s=this.gv(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a2(a,b){var s
A.q(this).i("l(n.E)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
V(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c1(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.c1(q.gn())
while(q.m())}else{r=s
do r=r+A.x(b)+J.c1(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("l(n.E)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bV(a,b){var s=A.J(this,A.q(this).i("n.E"))
return s},
bD(a){return this.bV(0,!0)},
gu(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gv(this).m()},
ga3(a){return!this.gO(this)},
ga_(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cH())
return s.gn()},
gbe(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.cH())
s=r.gn()
if(r.m())throw A.b(A.Au())
return s},
b4(a,b,c){var s,r=A.q(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gv(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cH())},
aw(a,b){return this.b4(0,b,null)},
a9(a,b){var s,r
A.lA(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.qc(b,b-r,this,"index"))},
q(a){return A.ES(this,"(",")")}}
A.O.prototype={
q(a){return"MapEntry("+A.x(this.a)+": "+A.x(this.b)+")"}}
A.aw.prototype={
gS(a){return A.K.prototype.gS.call(this,0)},
q(a){return"null"}}
A.K.prototype={$iK:1,
aa(a,b){return this===b},
gS(a){return A.iG(this)},
q(a){return"Instance of '"+A.lv(this)+"'"},
gab(a){return A.zJ(this)},
toString(){return this.q(this)}}
A.mW.prototype={
q(a){return""},
$idd:1}
A.u4.prototype={
gmP(){var s,r=this.b
if(r==null)r=$.rM.$0()
s=r-this.a
if($.zV()===1e6)return s
return s*1000}}
A.bB.prototype={
gu(a){return this.a.length},
q(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iFL:1}
A.up.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.t(b)
s=B.c.bB(b,"=")
if(s===-1){if(b!=="")a.l(0,A.yY(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.H(b,0,s)
q=B.c.aO(b,s+1)
p=this.a
a.l(0,A.yY(r,0,r.length,p,!0),A.yY(q,0,q.length,p,!0))}return a},
$S:93}
A.uo.prototype={
$2(a,b){throw A.b(A.N("Illegal IPv6 address, "+a,this.a,b))},
$S:131}
A.jy.prototype={
gh3(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.x(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gS(a){var s,r=this,q=r.y
if(q===$){s=B.c.gS(r.gh3())
r.y!==$&&A.zP()
r.y=s
q=s}return q},
gaX(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.Bf(s==null?"":s)
r.z!==$&&A.zP()
q=r.z=new A.ew(s,t.hL)}return q},
gip(){return this.b},
gei(){var s=this.c
if(s==null)return""
if(B.c.U(s,"[")&&!B.c.ap(s,"v",1))return B.c.H(s,1,s.length-1)
return s},
gep(){var s=this.d
return s==null?A.BJ(this.a):s},
ges(){var s=this.f
return s==null?"":s},
ghO(){var s=this.r
return s==null?"":s},
ghR(){return this.c!=null},
ghT(){return this.f!=null},
ghS(){return this.r!=null},
q(a){return this.gh3()},
aa(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.geO())if(p.c!=null===b.ghR())if(p.b===b.gip())if(p.gei()===b.gei())if(p.gep()===b.gep())if(p.e===b.gi5()){r=p.f
q=r==null
if(!q===b.ghT()){if(q)r=""
if(r===b.ges()){r=p.r
q=r==null
if(!q===b.ghS()){s=q?"":r
s=s===b.ghO()}}}}return s},
$ilZ:1,
geO(){return this.a},
gi5(){return this.e}}
A.un.prototype={
gio(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.c.d5(s,"?",m)
q=s.length
if(r>=0){p=A.jz(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.mp("data","",n,n,A.jz(s,m,q,128,!1,!1),p,n)}return m},
q(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.mQ.prototype={
ghR(){return this.c>0},
ghT(){return this.f<this.r},
ghS(){return this.r<this.a.length},
geO(){var s=this.w
return s==null?this.w=this.jU():s},
jU(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.U(r.a,"http"))return"http"
if(q===5&&B.c.U(r.a,"https"))return"https"
if(s&&B.c.U(r.a,"file"))return"file"
if(q===7&&B.c.U(r.a,"package"))return"package"
return B.c.H(r.a,0,q)},
gip(){var s=this.c,r=this.b+3
return s>r?B.c.H(this.a,r,s-1):""},
gei(){var s=this.c
return s>0?B.c.H(this.a,s,this.d):""},
gep(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.D1(B.c.H(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.U(r.a,"http"))return 80
if(s===5&&B.c.U(r.a,"https"))return 443
return 0},
gi5(){return B.c.H(this.a,this.e,this.f)},
ges(){var s=this.f,r=this.r
return s<r?B.c.H(this.a,s+1,r):""},
ghO(){var s=this.r,r=this.a
return s<r.length?B.c.aO(r,s+1):""},
gaX(){if(this.f>=this.r)return B.aK
return new A.ew(A.Bf(this.ges()),t.hL)},
gS(a){var s=this.x
return s==null?this.x=B.c.gS(this.a):s},
aa(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.q(0)},
q(a){return this.a},
$ilZ:1}
A.mp.prototype={}
A.re.prototype={
q(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ya.prototype={
$1(a){return this.a.dZ(this.b.i("0/?").a(a))},
$S:19}
A.yb.prototype={
$1(a){if(a==null)return this.a.ho(new A.re(a===undefined))
return this.a.ho(a)},
$S:19}
A.xt.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.Cp(a))return a
s=this.a
a.toString
if(s.K(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.f(A.b0(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e3(!0,"isUtc",t.y)
return new A.eV(r,0,!0)}if(a instanceof RegExp)throw A.b(A.o("structured clone of RegExp",null))
if(a instanceof Promise)return A.az(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cT(n),p=s.gv(n);p.m();)m.push(A.hU(p.gn()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.h(a.length)
for(s=J.aQ(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:168}
A.mz.prototype={
aW(a){if(a<=0||a>4294967296)throw A.b(A.AV(u.w+a))
return Math.random()*a>>>0},
az(){return Math.random()},
$iyH:1}
A.eD.prototype={
bZ(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.ae(a-s,k)
r=a>>>0
a=B.d.ae(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.ae(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.ae(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.ae(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.ae(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.ae(q-n,k)>>>0
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
s.b=B.d.ae(o-n+(q-p)+(m-r),4294967296)>>>0},
aW(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.AV(u.w+a))
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
$iyH:1}
A.kx.prototype={
B(){return"DiagnosticSeverity."+this.b}}
A.e6.prototype={
C(){var s=this
return A.F(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.tP.prototype={
$1(a){return B.c.bC(B.d.eD(A.h(a),16),8,"0")},
$S:179}
A.m1.prototype={}
A.qY.prototype={
o3(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.B(s).i("bK<1>"),s=new A.bK(s,r),s=new A.ai(s,s.gu(0),r.i("ai<Z.E>")),q=o.a,r=r.i("Z.E");s.m();){p=s.d
q.aJ(p==null?r.a(p):p)}}}
A.lb.prototype={}
A.r8.prototype={}
A.r_.prototype={
d8(a0,a1){var s=0,r=A.aO(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$d8=A.aP(function(a3,a4){if(a3===1)return A.aL(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.Df(b)
if(a.length!==0)throw A.b(A.N(B.a.br(a,new A.r0(),t.N).V(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.b(B.hQ)
k=t.N
j=A.Y(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.r)(m),++i)j.J(0,m[i].c.gaj())
if(j.a>16384)throw A.b(B.hJ)
p=A.m(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gaj(),g=g.gv(g)
case 6:if(!g.m()){s=7
break}o=g.gn()
if(p.K(o)){s=6
break}s=8
return A.a5(j.$1(o),$async$d8)
case 8:f=a4
e=f.length
if(e>67108864)throw A.b(A.N("model package payload exceeds limit: "+A.x(o),null,null))
d=p
if(new A.ao(d,A.q(d).i("ao<2>")).ba(0,0,new A.r1(),k)+e>268435456)throw A.b(B.hT)
J.bl(p,o,new Uint8Array(A.X(f)))
if(l)try{e=J.aZ(p,o)
e.toString
A.CU(e)}catch(a2){b=A.ak(a2)
if(b instanceof A.ly){n=b
throw A.b(A.N("model package payload is not valid QMSH: "+A.x(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.r)(m),++i
s=3
break
case 5:if(A.AL(b,p)!==b.c)throw A.b(B.fZ)
q=new A.m1(b,p)
s=1
break
case 1:return A.aM(q,r)}})
return A.aN($async$d8,r)}}
A.r0.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.r1.prototype={
$2(a,b){return A.h(a)+t.uo.a(b).length},
$S:68}
A.r2.prototype={
A(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.iI("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.k(l,"assetId must be kebab-case")
k=A.iI("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.k(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.k(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.k(l,"parts must be non-empty")
s=m.w
if(A.h8(s,A.B(s).c).a!==s.length)B.a.k(l,"lods must be unique")
if(!B.a.p(s,"LOD0"))B.a.k(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.M(s,new A.r5())
else s=!1
if(s)B.a.k(l,"combinedBounds must contain six finite values")
for(s=m.y.gL(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
if(q.length!==0){r=r.b
p=J.aQ(r)
r=p.gu(r)!==16||p.M(r,new A.r6())}else r=!0
if(r)B.a.k(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.r)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.k(l,"part material slot is outside materials")
q=n.c
if(q.gO(q))B.a.k(l,"part "+n.a+" must declare payload files")
for(q=q.gaj(),q=q.gv(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.HW(q.gn()))B.a.k(l,p)}return l},
ij(a){var s,r,q,p=this,o=A.m(t.N,t.z)
o.l(0,"schema","pixeldart-model-package-v1")
o.l(0,"assetId",p.b)
if(a)o.l(0,"packageHash",p.c)
o.l(0,"sourceFormat",p.d)
s=p.e
r=A.B(s)
q=r.i("H<1,V<e,@>>")
s=A.J(new A.H(s,r.i("V<e,@>(1)").a(new A.r4()),q),q.i("Z.E"))
o.l(0,"parts",s)
o.l(0,"materials",p.f)
o.l(0,"textures",p.r)
o.l(0,"lods",p.w)
o.l(0,"combinedBounds",p.x)
o.l(0,"sockets",p.y)
o.l(0,"provenance",p.z)
return o},
C(){return this.ij(!0)}}
A.r3.prototype={
$2(a,b){return new A.O(J.c1(a),J.c1(b),t.q)},
$S:41}
A.r5.prototype={
$1(a){return!isFinite(A.aF(a))},
$S:4}
A.r6.prototype={
$1(a){return!isFinite(A.aF(a))},
$S:4}
A.r4.prototype={
$1(a){return t.aw.a(a).C()},
$S:79}
A.f4.prototype={
C(){return A.F(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gE(){return this.a}}
A.r7.prototype={
$2(a,b){return new A.O(J.c1(a),J.c1(b),t.q)},
$S:41}
A.wW.prototype={
$1(a){A.t(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.xe.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.x_.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.xc.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yk.prototype={
$2(a,b){B.a.k(this.a,new A.e6(a,B.cx,"model-package",b,"rebuild the deterministic model package"))},
$S:46}
A.yl.prototype={
$2(a,b){B.a.k(this.a,new A.e6(a,B.cx,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:46}
A.rQ.prototype={
A(){var s,r=this
if(B.a.M(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.rR()))throw A.b(B.iv)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.hl)}}
A.rR.prototype={
$1(a){return A.h(a)<=0},
$S:20}
A.f8.prototype={
B(){return"QualityProfileKind."+this.b}}
A.dK.prototype={
A(){var s="installedFeatures",r=this.b,q=r.bA(B.n4)
if(q.a!==0)throw A.b(A.a6(q,s,"contains unknown pipeline features"))
if(this.a===B.bG&&r.ga3(r))throw A.b(A.a6(r,s,"safe profiles cannot install optional features"))}}
A.fU.prototype={
B(){return"CoordinatedTransitionState."+this.b}}
A.ls.prototype={}
A.oC.prototype={
c6(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.j("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.f(A.j("configuration state is not initialized"))
if(p.c!=null)A.f(A.j("a configuration transition is already open"))
a2.A()
n=A.iA(a2)
m=p.d
l=p.b
if(l==null)A.f(A.j("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bA(h)
f=h.bA(j)
j=n.a
h=l.a
e=j.bA(h)
d=h.bA(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.oF(m,a2,n,new A.oD(A.fe(g,k),A.fe(f,k),A.fe(e,k),A.fe(d,k),c,b,o.z!==a2.z),B.cv)
p.c=a
s=a
try{r=a1.b.de(s.c)
q=new A.ls(s,r,B.b5)
a1.c=q
return q}catch(a0){p.hf(s)
throw a0}},
c7(a){var s,r,q,p=this
p.fm(a)
s=p.a
r=a.a
s.fn(r)
q=s.d
if(r.a!==q)A.f(A.j("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fo
s.c=null
p.b.c7(a.b)
a.c=B.fw
p.c=null},
fm(a){if(this.c!==a||a.c!==B.b5)throw A.b(A.j("coordinated transition is not open"))}}
A.fP.prototype={
B(){return"ConfigurationTransactionState."+this.b}}
A.oD.prototype={}
A.oF.prototype={}
A.oE.prototype={
hf(a){this.fn(a)
a.e=B.fp
this.c=null},
fn(a){if(this.c!==a||a.e!==B.cv)throw A.b(A.j("configuration transition is not open"))}}
A.lr.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.F(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.M(n,A.q(n).i("M<1,2>")).gv(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.b(A.o("PostProcessState."+l+" must be >= 0: "+A.x(k),i))}n=j.ay
if(n<1||n>8)throw A.b(A.o("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.b(A.o("PostProcessState.rainIntensity must be in [0, 1]: "+A.x(s),i))
if(r>1)throw A.b(A.o("PostProcessState.surfaceWetness must be in [0, 1]: "+A.x(r),i))
if(q>1)throw A.b(A.o("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.x(q),i))
if(p>1)throw A.b(A.o("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.x(p),i))
if(o>1)throw A.b(A.o("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.x(o),i))}}
A.fM.prototype={}
A.kJ.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.ga0(0)||!h.b.ga0(0)||!h.r.ga0(0))throw A.b(A.o("FrameEnvironment colors must be finite",g))
s=h.c
if(isFinite(s)){r=h.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.o("FrameEnvironment requires fogEnd >= fogStart, got "+A.x(s)+"/"+A.x(h.d),g))
s=h.w
if(!isFinite(s)||s<0)throw A.b(A.o("FrameEnvironment.ambientIntensity must be >= 0: "+A.x(s),g))
s=h.x
if(s!=null)s.A()
for(s=h.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.f(A.o("PointLight.position must be finite: "+o.q(0),g))
o=p.d
if(!isFinite(o)||o<0)A.f(A.o("PointLight.intensity must be >= 0: "+A.x(o),g))
o=p.e
if(!isFinite(o)||o<=0)A.f(A.o("PointLight.radius must be > 0: "+A.x(o),g))}for(s=h.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.f(A.o("SpotLight.position must be finite: "+o.q(0),g))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.f(A.o("SpotLight.direction must be finite and nonzero: "+o.q(0),g))
if(p.w<=p.r)A.f(A.o("SpotLight.outerConeRadians must exceed innerConeRadians",g))}s=t.N
k=A.Y(s)
for(r=h.Q,o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
j.A()
n=j.a
if(!k.k(0,n))throw A.b(A.o("FrameEnvironment.volumetricSources contains duplicate id: "+n,g))}i=A.Y(s)
for(s=h.as,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){j=s[q]
o=j.a
n=!0
if(B.c.aY(o).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){n=j.d
n=!isFinite(n)||m<=0||n<0||n>1}}}if(n)A.f(A.o("thermal source is invalid",g))
if(!i.k(0,o))throw A.b(A.o("FrameEnvironment.thermalSources contains duplicate id: "+o,g))}}}
A.kK.prototype={}
A.dL.prototype={
aa(a,b){if(b==null)return!1
return J.eP(b)===A.zJ(this)&&b instanceof A.dL&&this.a===b.a&&this.b===b.b},
gS(a){return A.cL(A.zJ(this),this.a,this.b,B.h,B.h,B.h)}}
A.bJ.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bs.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c4.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.lm.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cF.prototype={
q(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.f_.prototype={
B(){return"HandleRejection."+this.b}}
A.kU.prototype={
q(a){return"HandleException("+this.a.b+", "+this.b.q(0)+")"}}
A.bI.prototype={
ga0(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
aa(a,b){if(b==null)return!1
return b instanceof A.bI&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gS(a){return A.cL(this.a,this.b,this.c,B.h,B.h,B.h)},
q(a){return"LinearColor("+A.x(this.a)+", "+A.x(this.b)+", "+A.x(this.c)+")"}}
A.kz.prototype={
A(){var s=this.a
if(!s.ga0(0)||s.gbb()<1e-12)throw A.b(A.o("DirectionalLight.direction must be finite and nonzero: "+s.q(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.b(A.o("DirectionalLight.intensity must be >= 0: "+A.x(s),null))}}
A.lq.prototype={
gE(){return this.a}}
A.bN.prototype={
gE(){return this.a}}
A.yc.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:89}
A.fH.prototype={
B(){return"AlphaMode."+this.b}}
A.is.prototype={
B(){return"MaterialMapColorSpace."+this.b}}
A.cK.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.o("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.b(A.o("MaterialDefinition.emissiveStrength must be >= 0: "+A.x(s),k))
if(!isFinite(1))throw A.b(A.o("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.l9("roughness",l.at)
A.l9("metallic",0)
A.l9("occlusionStrength",1)
A.l9("clearcoatStrength",0)
A.l9("clearcoatRoughness",0.2)
if(!isFinite(0))throw A.b(A.o("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a9("uvScaleU",s),new A.a9("uvScaleV",r),new A.a9("uvOffsetU",0),new A.a9("uvOffsetV",0),new A.a9("tintR",l.d),new A.a9("tintG",l.e),new A.a9("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.o("MaterialDefinition."+n+" must be finite: "+A.x(m),k))}if(s===0||r===0)throw A.b(A.o("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.o("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cP.prototype={
B(){return"VertexAttributeKind."+this.b}}
A.b8.prototype={}
A.iZ.prototype={
A(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.b(A.o("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.b(A.o(k+m.a+'": attribute '+p.a.q(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.b(A.o(k+m.a+'": attribute '+p.a.q(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.B(s)
r=j.i("l(1)").a(new A.us())
for(s=B.a.gv(s),j=new A.T(s,r,j.i("T<1>"));j.m();)if(s.gn().c!==4)throw A.b(A.o(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.us.prototype={
$1(a){return t.qY.a(a).a===B.c2},
$S:18}
A.bV.prototype={
A(){var s,r,q,p,o,n=this,m=n.a
m.A()
s=n.b.length
m=m.b
if(B.d.R(s,m)!==0)throw A.b(A.o("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.li()
r=n.c
if(r!=null){q=B.d.bf(s,m)
for(m=A.F_(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.b(A.o("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.ga0(0)&&m.b.ga0(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.b(A.o("MeshData.localBounds must be a valid AABB",null))},
li(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.B(a4),a6=a5.i("l(1)")
a5=a5.i("I<1>")
s=new A.I(a4,a6.a(new A.qR()),a5)
if(!s.gv(0).m())return
r=new A.I(a4,a6.a(new A.qS()),a5)
if(r.gu(0)!==1)throw A.b(A.o("surface-v2 tangent data requires one normal slot",a2))
q=s.gbe(0)
p=r.gbe(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.bf(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
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
if(!B.a.a2(A.c([i,g,f,e,d,c,b],o),new A.qT()))throw A.b(A.o("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.b(A.o("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.b(A.o("surface-v2 tangent must be orthogonal to its normal: "+A.x(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.b(A.o("surface-v2 tangent handedness must be -1 or +1: "+A.x(b),a2))}}}
A.qR.prototype={
$1(a){return t.qY.a(a).a===B.c2},
$S:18}
A.qS.prototype={
$1(a){return t.qY.a(a).a===B.ef},
$S:18}
A.qT.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.kt.prototype={$iFx:1}
A.rg.prototype={
A(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.b(A.o("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.rh()))throw A.b(A.o("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.b(A.o("resource history does not match vhsOutput ownership",null))}}
A.rh.prototype={
$1(a){return A.t(a).length===0},
$S:3}
A.hj.prototype={
B(){return"ResourceAssemblyState."+this.b}}
A.lt.prototype={}
A.lE.prototype={
hX(a){var s=this
if(s.d)A.f(A.j("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.j("resource assembler is initialized"))
a.A()
s.a=a
s.c=1},
de(a){var s=this
if(s.d)A.f(A.j("resource assembler is disposed"))
if(s.a==null)throw A.b(A.j("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.j("resource assembly is already open"))
a.A()
return s.b=new A.lt(s.c,a,B.bN)},
c7(a){var s,r=this
if(r.d)A.f(A.j("resource assembler is disposed"))
r.fU(a)
s=r.c
if(a.a!==s)throw A.b(A.j("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.mI
r.b=null},
ez(a){if(this.d)A.f(A.j("resource assembler is disposed"))
this.fU(a)
a.c=B.mJ
this.b=null},
Z(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.j("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
fU(a){if(this.b!==a||a.c!==B.bN)throw A.b(A.j("resource assembly is not prepared"))}}
A.fW.prototype={
B(){return"DrawMode."+this.b}}
A.kh.prototype={
B(){return"BlendMode."+this.b}}
A.bc.prototype={}
A.lT.prototype={
A(){var s=this
if(s.a<0||s.b<0)throw A.b(A.o("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.o("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.o("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.i2.prototype={
B(){return"ColorEncoding."+this.b}}
A.fV.prototype={
B(){return"DiagnosticLevel."+this.b}}
A.iK.prototype={
A(){var s,r=this,q=null
r.a.A()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.o("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.o("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.o("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.o("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.fb.prototype={
B(){return"RendererState."+this.b}}
A.aV.prototype={}
A.ph.prototype={
i4(a){var s=this.z.h(0,a)
return s==null?B.cK:s},
q(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.f3.prototype={
B(){return"MaterialResidencyStatus."+this.b}}
A.d7.prototype={}
A.c5.prototype={}
A.qO.prototype={
cF(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qP(a)),r.i("I<1>")).gu(0)}}
A.qP.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:99}
A.qM.prototype={
df(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.r)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.f(A.o("material residency key is empty",null))
k=m.b
k.A()
if(r.K(l))throw A.b(A.o("material residency keys must be unique: "+l,null))
r.l(0,l,m)
j=A.m(s,s)
for(k=A.CN(k),i=k.$ti,k=new A.cd(k.a(),i.i("cd<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.l(0,e,c)
B.a.k(q,new A.bZ(c,d,g))}p.l(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.df(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.l(0,b.a.a,b.b)}o=r.$ti.i("ao<2>")
a=A.J(new A.ao(r,o),o.i("n.E"))
B.a.W(a,new A.qN())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.r)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.l_(m,k,s))}return new A.qO(A.ad(o,t.wl))},
l_(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.M(b,A.q(b).i("M<1,2>")).gv(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.l(0,n,m)}p=A.EY(new A.ao(q,q.$ti.i("ao<2>")))
A.aT(q,s,r)
return new A.c5(a,p)}}
A.qN.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.c.G(a.a,b.a):s},
$S:105}
A.la.prototype={
og(a){return this.a.bN(a)}}
A.qQ.prototype={
$3(a,b,c){return new A.c4(A.h(a),A.h(b),A.an(c))},
$S:117}
A.lY.prototype={}
A.qU.prototype={
b9(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.Bs(b,new A.kP(a.byteLength,B.cY,B.iO))
if(b.b!==B.j)A.f(A.j(c))
s=A.a(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.ct(b)
A.bf(b,p)
if(b.b!==B.j)A.f(A.j(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.Y(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.CK(h.a)
if(!l.k(0,g))continue
f=A.Hh(o,g,h)
if(b.b!==B.j)A.f(A.j(c))
r.vertexAttribPointer.apply(r,[g,f,A.h(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.f(A.j(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.Bs(b,new A.kP(A.AK(e),B.cY,B.cX))
if(b.b!==B.j)A.f(A.j(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(d.a))
A.G8(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.lY(a0,d,p,b,B.d.bf(a.length,n),t.Dd.b(e))},
cn(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.eo(B.aI,a))
this.b.bN(a)
return s},
aJ(a){var s,r,q=this.c.a7(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.aJ(a)},
ew(){var s,r,q,p
for(s=this.b.bR(),r=s.$ti,s=new A.cd(s.a(),r.i("cd<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.b9(p.b))}},
gcj(){return this.b.bR().ba(0,0,new A.qW(),t.S)}}
A.qV.prototype={
$3(a,b,c){return new A.bJ(A.h(a),A.h(b),A.an(c))},
$S:118}
A.qW.prototype={
$2(a,b){var s,r
A.h(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.AK(s)
return a+r+s},
$S:120}
A.i0.prototype={}
A.qX.prototype={
mx(a){var s,r,q,p,o=A.J8(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.f(A.j("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.l(0,s,q+1)
r.toString
return r}p=new A.i0(o,1,A.Je(A.CU(a)))
m.l(0,n,p)
this.c.l(0,n,1)
return p},
aJ(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.b(A.j("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a7(0,p)
q.a7(0,p)}else s.l(0,p,r-1)}}
A.qZ.prototype={
C(){var s=this
return A.F(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hb.prototype={
iP(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.f(A.j("model package binding is disposed"))
if(a8.x==null)throw A.b(A.j("model package is not attached"))
for(s=a8.z,r=s.length,q=a8.d,p=q.a,o=p.$ti,n=o.c,m=p.b,q=q.b,l=q.$ti,k=l.c,j=q.b,l=l.y[1],o=o.y[1],i=0;i<s.length;s.length===r||(0,A.r)(s),++i){h=k.a(s[i])
q.Y(h)
g=h.a
if(!(g>=0&&g<j.length))return A.d(j,g)
f=j[g].c
if(f==null)f=l.a(f)
e=f.c
e.A()
d=n.a(f.a)
p.Y(d)
c=d.a
if(!(c>=0&&c<m.length))return A.d(m,c)
b=m[c].c
a=(b==null?o.a(b):b).d
a0=e.ac()
a=a.gak()
a1=A.B(a)
A.b_(new A.H(a,a1.i("C(1)").a(a0.gan()),a1.i("H<1,C>")))
a1=f.b
a0=f.e
a=f.f
a2=f.r
a3=f.w
a4=f.x
a5=f.y
e.A()
p.Y(d)
if(!(c<m.length))return A.d(m,c)
b=m[c].c
c=(b==null?o.a(b):b).d
a6=e.ac()
c=c.gak()
a7=A.B(c)
A.b_(new A.H(c,a7.i("C(1)").a(a6.gan()),a7.i("H<1,C>")))
a5=l.a(new A.bc(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.Y(h)
if(!(g<j.length))return A.d(j,g)
j[g].sb1(a5)}},
Z(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.fH(s,r,q.x)
B.a.N(s)
B.a.N(r)
q.x=null},
jC(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.F1(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
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
if(typeof e!=="number")return e.ct()
if(!(e<d))break
r=B.a.h(o,s)
q=f.$1(r.b)
if(q.a<0){a3=A.j("invalid material for package slot "+r.b)
throw A.b(a3)}e=B.a.h(a4.b,s).c
d=r.a
if(g.x)A.f(A.j("resource library is disposed"))
c=g.a
e.A()
b=c.b.aF(e,a3+d+":"+a7)
c.c.l(0,b.a,c.b9(e))
g.f.k(0,b)
p=b
J.eO(a5,p)
e=p
m.A()
i.a(e)
k.Y(e)
c=e.a
if(!(c>=0&&c<h.length))return A.d(h,c)
a=h[c].c
d=(a==null?j.a(a):a).d
c=m.ac()
d=d.gak()
a0=A.B(d)
A.b_(new A.H(d,a0.i("C(1)").a(c.gan()),a0.i("H<1,C>")))
J.eO(a6,n.b.bM(new A.bc(e,q,m,l,B.T,B.R,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a5()
s=e+1}return new A.jo(a4,a6,a5)}catch(a1){a2.fH(a6,a5,a4)
throw a1}},
fH(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.B(a).i("bK<1>"),r=new A.bK(a,s),r=new A.ai(r,r.gu(0),s.i("ai<Z.E>")),q=this.d.b,s=s.i("Z.E");r.m();){p=r.d
q.aJ(p==null?s.a(p):p)}for(s=A.B(b).i("bK<1>"),r=new A.bK(b,s),r=new A.ai(r,r.gu(0),s.i("ai<Z.E>")),q=this.c,s=s.i("Z.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.f(A.j("resource library is disposed"))
q.a.aJ(p)
q.f.a7(0,p)}if(c!=null)c.o3()}}
A.cN.prototype={
B(){return"QmeshRejection."+this.b}}
A.ly.prototype={
q(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.xu.prototype={
$1(a){return!isFinite(A.aF(a))},
$S:4}
A.bZ.prototype={}
A.dO.prototype={
B(){return"TextureResidencyStatus."+this.b}}
A.c9.prototype={}
A.ue.prototype={
cP(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.uf(a)),r.i("I<1>")).gu(0)}}
A.uf.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:123}
A.uc.prototype={
df(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.f(A.o("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.f(A.a6(n,"handle","must be valid"))
if(s.K(o))throw A.b(A.o("TextureResidencyRequest keys must be unique: "+o,null))
s.l(0,o,p)}r=s.$ti.i("ao<2>")
m=A.J(new A.ao(s,r),r.i("n.E"))
B.a.W(m,new A.ud())
r=t.Aj
l=A.Y(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.k(0,o)){i=this.kP(o)
k.l(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.k(j,new A.c9(p,i))}r=l.a
return new A.ue(A.ad(j,t.e),r)},
kP(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.h5(a,r)===s.d)return B.e9
this.b.l(0,a,!0)
return B.e8}catch(q){if(A.ak(q) instanceof A.kU){s=this.b.h(0,a)===!0?B.eb:B.ea
return s}else throw q}}}
A.ud.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.c.G(a.a,b.a):s},
$S:127}
A.di.prototype={}
A.lV.prototype={
b_(a){var s=this.a,r=A.yO(s,B.iT)
A.yP(s,r,0,a)
return r},
oA(a,b){var s,r,q,p=this,o=p.b,n=o.bN(a),m=A.J(n.b,t.Fx)
B.a.l(m,0,b)
s=n.a
o.eE(a,new A.di(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.yO(p.a,s)
o.l(0,r,q)}A.yP(p.a,q,0,b)},
n_(a){var s,r=this.b,q=r.bN(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.j("TextureStore.finalizeMips: no pixels uploaded yet for "+a.q(0)))
A.Bt(this.a,s)
r.eE(a,new A.di(p,q.b,!0))},
h5(a,b){var s
this.b.bN(a)
s=this.c.h(0,a.a)
return s==null?b:s},
oc(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.h5(a,s)},
om(a){var s=this.e
s===$&&A.p()
return s},
oo(a){var s=this.f
s===$&&A.p()
return s},
oe(a){var s=this.r
s===$&&A.p()
return s},
oj(a){var s=this.w
s===$&&A.p()
return s},
Z(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>")),q=n.a,p=q.a,o=t.o;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.N(0)
s=n.d
s===$&&A.p()
A.me(q,s)
s=n.e
s===$&&A.p()
A.me(q,s)
s=n.f
s===$&&A.p()
A.me(q,s)
s=n.r
s===$&&A.p()
A.me(q,s)
s=n.w
s===$&&A.p()
A.me(q,s)},
ew(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b_($.zU())
i.e=i.b_($.zR())
i.f=i.b_($.zS())
i.r=i.b_($.zQ())
i.w=i.b_($.zT())
for(s=i.b.bR(),r=s.$ti,s=new A.cd(s.a(),r.i("cd<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a2(o,new A.ui()))continue
l=A.yO(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.yP(p,l,k,j)}if(m.c)A.Bt(p,l)
q.l(0,n.a,l)}},
gcj(){return this.b.bR().ba(0,0,new A.uh(),t.S)}}
A.ug.prototype={
$3(a,b,c){return new A.bs(A.h(a),A.h(b),A.an(c))},
$S:134}
A.ui.prototype={
$1(a){return t.Fx.a(a)==null},
$S:135}
A.uh.prototype={
$2(a,b){var s
A.h(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:138}
A.be.prototype={
B(){return"SolarPhase."+this.b}}
A.u2.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a9("timeHours",e.a),new A.a9("solarNoonHours",s),new A.a9("latitudeRadians",r),new A.a9("solarDeclinationRadians",q),new A.a9(d,p),new A.a9(c,o),new A.a9("aerosolTurbidity",n),new A.a9(b,m),new A.a9("solarIntensity",e.x),new A.a9("baseFogDensity",l),new A.a9("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.b(A.o(g+" must be finite",a))}if(s>=24)throw A.b(A.o("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.b(A.o("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.b(A.o("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a9(d,p),new A.a9(c,o),new A.a9(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.b(A.o(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.b(A.o("solar attenuation inputs are out of bounds",a))}}
A.hr.prototype={
gE(){return this.a}}
A.cr.prototype={
A(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.ga0(0)){s=p.c
if(s.ga0(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.b(A.o("invalid volumetric source "+o,null))},
gE(){return this.a}}
A.yd.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.G(b.a,a.a)
return s===0?B.c.G(a.b.a,b.b.a):s},
$S:143}
A.uG.prototype={}
A.dD.prototype={
gnc(){return this.b.length}}
A.kH.prototype={
lK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.rU(A.c([],t.pq),A.Y(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].av(s,b)
o=s.lJ(a,!1)
if(o.b.length!==0)return new A.kI(o,B.kd)
q=o.a
n=A.B(q)
m=new A.H(q,n.i("e(1)").a(new A.pc()),n.i("H<1,e>")).b7(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.ar(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.r)(n),++i){h=n[i]
if(!m.p(0,h.gF().a))throw A.b(A.j('RenderFeature "'+k.gE()+'" created a pass "'+h.gF().a+'" that it never declared into the graph'))
B.a.k(l,h)}}B.a.W(l,new A.pd(o))
return new A.kI(o,l)},
bO(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].Z()}}
A.pc.prototype={
$1(a){return t.A.a(a).a},
$S:151}
A.pd.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.ej(s,new A.pa(a)),B.a.ej(s,new A.pb(b)))},
$S:158}
A.pa.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:12}
A.pb.prototype={
$1(a){return t.A.a(a).a===this.a.gF().a},
$S:12}
A.kI.prototype={}
A.eX.prototype={
B(){return"FrameQueueState."+this.b}}
A.kL.prototype={$iFq:1}
A.pg.prototype={
lG(a){if(a.length===0)throw A.b(A.a6(a,"passId",null))
this.b=a
this.a.cm(a,A.CW())},
j4(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=r.b
o.l(0,q,new A.aV(p.a,p.b,p.d))}return A.aT(o,t.N,t.pH)},
bH(a,b){var s,r=this.b
if(r==null)throw A.b(A.j("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.o("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.ae(a,3)*b}}
A.hw.prototype={}
A.av.prototype={
gbT(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rk()),r.i("I<1>"))},
gcr(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rl()),r.i("I<1>"))},
q(a){return"PassDeclaration("+this.a+" @ "+this.b.q(0)+")"},
gE(){return this.a}}
A.rk.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.N},
$S:29}
A.rl.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:29}
A.cl.prototype={
B(){return"GraphValidationFailureKind."+this.b}}
A.bx.prototype={
q(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.iM.prototype={
B(){return"ResourceFormat."+this.b}}
A.d2.prototype={
B(){return"GraphStage."+this.b}}
A.aJ.prototype={
i0(){var s=this
return new A.aJ(s.a,s.b,s.c,s.d,s.e,s.f+1)},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.aJ&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gS(a){var s=this
return A.cL(s.a,s.b,s.c,s.d,s.e,s.f)},
q(a){var s=this,r=s.b.q(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.hi.prototype={
B(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.i3.prototype={
gE(){return this.a}}
A.lw.prototype={
aA(a){var s,r,q,p,o,n,m=this
a.A()
s=null
try{r=t.a
s=A.Gb(m.a,a.c,r.a(a.d.ga4().bD(0)),r.a(a.f),a.b)}catch(q){if(A.ak(q) instanceof A.iP){++m.e
throw q}else throw q}r=a.a
p=new A.i3(r,s)
o=m.b
n=o.h(0,r)
o.l(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bO(){var s=this.b
this.k6(new A.ao(s,A.q(s).i("ao<2>")))
s.N(0)},
k6(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bb.prototype={
A(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.o("ProgramSource.id must not be empty",m))
s=t.S
r=A.Y(s)
for(q=this.d.gL(),q=q.gv(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.b(A.o('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.b(A.o('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.Y(s)
for(s=this.e.gL(),s=s.gv(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.b(A.o('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.b(A.o('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.rS.prototype={}
A.b7.prototype={
ai(){var s=this
return A.Aj(B.eQ,s.f,B.az,B.af,!0,!0,!0,!0,s.r,B.aD,B.aE,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.rU.prototype={
lJ(a,b){var s=this.lh(t.Q.a(a),!1),r=this.a,q=A.B(r)
return new A.rT(A.ad(new A.I(r,q.i("l(1)").a(new A.rZ()),q.i("I<1>")),t.A),s)},
lh(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.B(r)
p=q.i("I<1>")
o=A.J(new A.I(r,q.i("l(1)").a(new A.rY()),p),p.i("n.E"))
m.jI(o,a,s)
m.jM(o,s)
m.jO(o,s)
m.jL(o,!1,s)
n=m.jQ(o,s)
m.jN(o,n,s)
m.jP(o,s)
m.jK(o,n,s)
m.jJ(o,s)
return s},
jI(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.a8.bA(b)
if(p.a!==0)B.a.k(c,new A.bx(B.j3,q.a,"missing capabilities: "+p.V(0,", ")))}},
jM(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbT(),o=J.Q(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.k(b,new A.bx(B.iZ,n,"reads multisampled resource "+m.q(0)+" directly; resolve before sampling"))}}},
jO(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.B(a),r=s.i("l(1)").a(new A.rX()),q=B.a.gv(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbT()
o=A.J(p,p.$ti.i("n.E"))
p=r.gcr()
n=A.J(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.k(b,new A.bx(B.bd,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbe(o).a
l=B.a.gbe(n).a
if(m.e<=1||l.e>1)B.a.k(b,new A.bx(B.bd,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.k(b,new A.bx(B.bd,r.a,"resolve source and destination must match format and extent"))}},
jL(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.N)B.a.k(c,new A.bx(B.j1,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
jQ(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcr(),n=J.Q(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bx(B.iY,m,l.q(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
jN(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbT(),p=J.Q(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.N)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bx(B.d1,o,"reads "+n.q(0)+" but no pass writes that version"))
continue}if(B.a.bB(a,m)>s)B.a.k(c,new A.bx(B.d1,o,"reads "+n.q(0)+" before writer "+m.a+" runs"))}}},
jP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbT(),o=J.Q(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.N)continue
for(l=q.gcr(),k=J.Q(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bx(B.j0,n,"reads and writes "+m.q(0)+" at the same version; declare a ping-pong version bump"))}}}},
jK(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbT(),o=J.Q(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.N)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcr().aw(0,new A.rW(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bx(B.j_,n,"reads "+l.q(0)+" but writer "+k.a+" produced "+j.q(0)))}}},
jJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcr(),o=J.Q(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.l(0,n.a+"#"+n.f,q)}m=J.yv(p,t.oG)
for(l=0;l<p;++l)m[l]=A.Y(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbT(),p=J.Q(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.N)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.d6(s,!1,!1,p)
s=a.length
i=A.d6(s,!1,!1,p)
h=new A.rV(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bx(B.j2,a[q].a,"participates in a resource dependency cycle"))}}}}
A.rZ.prototype={
$1(a){t.A.a(a)
return A.yF()},
$S:12}
A.rY.prototype={
$1(a){t.A.a(a)
return A.yF()},
$S:12}
A.rX.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.rW.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:29}
A.rV.prototype={
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
r=A.fv(r,r.r,A.q(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:20}
A.rT.prototype={}
A.my.prototype={$ic8:1,
gE(){return this.a},
gF(){return this.b},
geK(){return this.c}}
A.iJ.prototype={
ll(a){var s,r,q,p=a.c
p.A()
s=this.a.bN(a.a)
p=p.ac()
r=s.d.gak()
q=A.B(r)
return A.b_(new A.H(r,q.i("C(1)").a(p.gan()),q.i("H<1,C>")))},
ghZ(){return new A.bF(this.nl(),t.Br)},
nl(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$ghZ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bR(),n=o.$ti,o=new A.cd(o.a(),n.i("cd<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.A()
f=k.a(g.a)
m.Y(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ac()
f=f.gak()
d=A.B(f)
r=5
return a.b=new A.my(h,g,A.b_(new A.H(f,d.i("C(1)").a(i.gan()),d.i("H<1,C>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iFt:1}
A.t_.prototype={
$3(a,b,c){return new A.cF(A.h(a),A.h(b),A.an(c))},
$S:183}
A.lD.prototype={
gh4(){var s=this.d
return s===$?this.d=new A.uc(this.c,A.m(t.Aj,t.y)):s},
dh(a,b){var s,r
if(this.x)A.f(A.j("resource library is disposed"))
s=this.a
a.A()
r=s.b.aF(a,b)
s.c.l(0,r.a,s.b9(a))
this.f.k(0,r)
return r},
o4(a){if(this.x)A.f(A.j("resource library is disposed"))
this.a.aJ(a)
this.f.a7(0,a)},
ev(a,b,c,d,e,f){var s,r
if(this.x)A.f(A.j("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.f(A.o("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.f(A.o("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aF(new A.di(new A.kR(f,d,1,!0,e,B.ba,B.d_,a),A.d6(1,null,!1,t.Fx),!1),b)
this.w.k(0,r)
return r},
Z(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.J(s,A.q(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.o
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.a7(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aJ(k)}r=i.r
q=A.J(r,A.q(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.aJ(q[l])
q=i.f
o=A.J(q,A.q(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.aJ(o[l])
s.N(0)
r.N(0)
q.N(0)
p.Z()
i.x=!0},
$iFv:1}
A.v6.prototype={}
A.mX.prototype={$ic8:1,
gE(){return this.a},
gF(){return this.b},
geK(){return this.c}}
A.wJ.prototype={
$1(a){var s=this.a.w.a.cn(a),r=s.b!=null,q=r?s.d:s.e
return new A.iL(s.c,r,q,s.f)},
$S:185}
A.wK.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gn().i1(a)
if(b!=null&&s.p(0,b))return this.b.x.gn().i1(b)
throw A.b(A.j("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:197}
A.wI.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.wB.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.ga_(r)},
$S:53}
A.wC.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.br
s=q.b.z
r=s.length===0?null:B.a.ga_(s)
return A.JD(s,3,q.a.d,r)},
$S:54}
A.wH.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.ww.prototype={
$0(){return this.a.at.a},
$S:55}
A.wy.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.wx.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.wG.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.wu.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.wv.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.wD.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.wE.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.wF.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:5}
A.wA.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.wz.prototype={
$0(){return this.a.at.w},
$S:56}
A.wM.prototype={
$0(){return this.a},
$S:57}
A.vM.prototype={}
A.mJ.prototype={$iFs:1}
A.mv.prototype={$iEz:1}
A.t7.prototype={
gaR(){var s=this.w
return s==null?A.f(A.j("renderer is not initialized")):s},
hY(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bL)throw A.b(A.j("renderer can only be initialized once"))
a.A()
b.A()
s=m.a
if(s.b===B.a0)throw A.b(A.j("renderer device is context lost"))
m.e=B.mH
try{m.r=s.ic()
r=m.b
q=A.iA(a)
p=r.a
if(p.a!=null)A.f(A.j("configuration state is already initialized"))
a.A()
p.a=a
p.b=A.iA(a)
p.d=1
r.b.hX(q)
r=A.EZ()
m.w=new A.lD(A.F0(s),r,A.FN(s),A.Y(t.kc),A.Y(t.pw),A.Y(t.Aj))
r=new A.lE()
p=new A.pE(s,r)
q=A.iA(a)
o=p.dF(q,a)
r.hX(q)
p.c=new A.hd(new A.lt(0,q,B.bN),o,B.ak)
m.x=p
m.y=new A.lw(s,A.m(t.N,t.CH))
m.as=a
A.Ca(m)
m.e=B.bM}catch(n){s=m.y
if(s!=null)s.bO()
s=m.x
if(s!=null)s.Z()
s=m.w
if(s!=null)s.Z()
m.w=null
m.e=B.bL
throw n}return A.An(t.H)},
lE(a,b){var s,r,q,p,o,n,m=this,l=null
m.kU()
m.c0()
r=B.a.p(m.d,a)
if(!r)throw A.b(A.o("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.j("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.ga0(0))A.f(A.o("CameraView.eye must be finite: "+q.q(0),l))
q=r.e
if(!q.ga0(0)||q.gbb()<1e-12)A.f(A.o("CameraView.forward must be finite and nonzero: "+q.q(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.f(A.o("CameraView requires 0 < near < far, got "+A.x(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.f(A.o("CameraView.aspect must be finite and > 0: "+A.x(q),l))
if(!r.a.ga0(0)||!r.b.ga0(0)||!r.c.ga0(0))A.f(A.o("CameraView matrices must be finite",l))
b.b.A()
b.c.A()
r=b.w
if(!isFinite(r))A.f(A.o("FrameInput.timeSeconds must be finite: "+A.x(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.aj)A.f(A.j("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.aj
o.c=0
B.a.N(o.a)
s=o
try{r=m.r
if((r==null?A.f(A.j("renderer is not initialized")):r).z)m.b$=m.a.lF()
return s}catch(n){if(o.b!==B.aj)A.f(A.j("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.iA
m.f5()
m.ax=m.at=null
throw n}},
mS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.c0()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.j("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.aj)A.f(A.j("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hq(l,0,A.e3(m.c,"count",t.S),A.B(l).c).bV(0,!1)
m.b=B.iz
q=k
try{p=A.Ht(a1,r,s,q)
o=p.a.j4()
m=o.gL().dl(0,new A.t8())
l=m.$ti
n=new A.cJ(m,l.i("aV(1)").a(new A.t9()),l.i("cJ<1,aV>")).ba(0,B.cK,new A.ta(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcj()
g=g.c.gcj()
e=a1.w
e.a.gcj()
e.c.gcj()
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
return new A.ph(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.kh(s.e)
a1.ax=a1.at=null}},
kU(){var s,r,q,p=this
if(p.e!==B.dU)return
if(p.a.b===B.a0)throw A.b(A.j("renderer context remains lost"))
s=p.w
if(s.x)A.f(A.j("resource library is disposed"))
s.a.ew()
s.c.ew()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.f(A.j("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.f(A.j("GPU resource adapter is not initialized"))
s.c=new A.hd(q.a,s.dF(A.iA(r),r),B.ak)
s=p.y
s.c=null
s.b.N(0)
A.Ca(p)
p.e=B.bM},
c0(){var s=this,r=s.e
if(r!==B.bM)throw A.b(A.j("renderer is not ready: "+r.b))
if(s.a.b===B.a0){s.k7()
s.e=B.dU
throw A.b(A.j("renderer context lost"))}}}
A.t8.prototype={
$1(a){return B.c.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:58}
A.t9.prototype={
$1(a){return t.h6.a(a).b},
$S:59}
A.ta.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aV(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:60}
A.mG.prototype={}
A.vi.prototype={
kh(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.f(A.j(u.k))
r=s.h7(o)
if(r.b)A.f(A.j("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.k(p.a$,new A.mG(o))}catch(q){p.dH(o)}},
f5(){var s=this.b$
this.b$=null
if(s!=null)this.dH(s)},
k7(){var s,r,q
this.f5()
s=this.a$
r=J.Ax(s.slice(0),A.B(s).c)
B.a.N(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.dH(r[q].b)},
dH(a){var s,r
try{s=this.a
s.a.deleteQuery(s.h7(a).a)}catch(r){}}}
A.mN.prototype={}
A.iR.prototype={
B(){return"ShadowCasterLod."+this.b}}
A.bW.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ibo:1}
A.bS.prototype={
G(a,b){var s
t.z3.a(b)
s=B.b.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ibo:1}
A.b1.prototype={}
A.yh.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:61}
A.yi.prototype={
$1(a){return t.E0.a(a).b},
$S:62}
A.yf.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:63}
A.yg.prototype={
$1(a){return t.EH.a(a).b},
$S:64}
A.oV.prototype={}
A.oU.prototype={}
A.fG.prototype={
gak(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.C(o,n,p),new A.C(r,n,p),new A.C(o,q,p),new A.C(r,q,p),new A.C(o,n,s),new A.C(r,n,s),new A.C(o,q,s),new A.C(r,q,s)],t.k)},
q(a){return"Aabb("+this.a.q(0)+", "+this.b.q(0)+")"}}
A.f6.prototype={}
A.fZ.prototype={
B(){return"FrustumTest."+this.b}}
A.pi.prototype={
ii(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b6
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.iB:B.iC}}
A.pj.prototype={
$4(a,b,c,d){var s=new A.C(a,b,c),r=new A.f6(s,d),q=Math.sqrt(s.gbb())
return q<1e-9?r:new A.f6(s.a8(0,1/q),d/q)},
$S:65}
A.dF.prototype={
a8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dF(h)},
il(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
en(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.f(A.j("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.x(k)+")"))
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
return new A.dF(h)},
ga0(a){return B.r.a2(this.a,new A.qK())},
q(a){return"Mat4("+A.x(this.a)+")"}}
A.qK.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.lz.prototype={
q(a){var s=this
return"Quat("+A.x(s.a)+", "+A.x(s.b)+", "+A.x(s.c)+", "+A.x(s.d)+")"}}
A.hs.prototype={
A(){var s=this.a
if(!s.ga0(0))throw A.b(A.o("Transform.translation must be finite: "+s.q(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.o("Transform.rotation must be finite: "+s.q(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.b(A.o("Transform.scale must be finite and positive: "+A.x(s),null))},
ac(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.AH(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.AH(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
q(a){return"Transform("+this.a.q(0)+", "+this.b.q(0)+", scale="+A.x(this.c)+")"}}
A.C.prototype={
a5(a,b){return new A.C(this.a+b.a,this.b+b.b,this.c+b.c)},
ad(a,b){return new A.C(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.C(this.a*b,this.b*b,this.c*b)},
bo(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.C(s*r-q*p,q*o-n*r,n*p-s*o)},
gbb(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbb())},
ga0(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gag(){var s=this,r=Math.sqrt(s.gbb())
return r<1e-9?B.u:new A.C(s.a/r,s.b/r,s.c/r)},
aa(a,b){if(b==null)return!1
return b instanceof A.C&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gS(a){return A.cL(this.a,this.b,this.c,B.h,B.h,B.h)},
q(a){return"Vec3("+A.x(this.a)+", "+A.x(this.b)+", "+A.x(this.c)+")"}}
A.kb.prototype={
B(){return"AtmosphericParticleAnchor."+this.b}}
A.nN.prototype={}
A.fI.prototype={}
A.nM.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.b(A.o("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.a9("origin",l.d),new A.a9("halfExtents",s),new A.a9("initialVelocity",l.f),new A.a9("acceleration",l.r)],t.c2)
r.push(new A.a9("terminalVelocity",l.w))
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
cu(a,b){var s,r,q,p,o,n=this,m=null
n.A()
s=n.z
if(b>=s)throw A.b(A.b0(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.R(a.w+n.cR(b,0)*r,r)
switch(n.c.a){case 0:s=B.u
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.a5(0,n.d).a5(0,new A.C((n.cR(b,1)*2-1)*p.a,(n.cR(b,2)*2-1)*p.b,(n.cR(b,3)*2-1)*p.c))
p=o.a5(0,n.k8(q))
s=n.lj(q)
if(!isFinite(q)||q<0)A.f(A.o("atmospheric particle age must be finite and >= 0",m))
if(!o.ga0(0)||!p.ga0(0)||!s.ga0(0))A.f(A.o("atmospheric particle kinematics must be finite",m))
return new A.fI(q,o,p,s)},
jb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.C3.a(c)
f.A()
for(s=f.z,r=a.a,q=f.as,p=f.cy,o=f.at,n=f.a,m=f.b,l=0,k=0;k<s;++k){j=f.cu(b,k)
if(!c.$1(j))continue
i=o?f.fW(j.d):B.aM
h=new A.hs(j.c,i,q)
g=new A.bc(n,m,h,-1,B.aG,B.R,!1,!1,k,p)
if(a.b!==B.aj)A.f(A.j("FrameQueue.submit called outside an active frame"))
h.A()
h=a.c
if(h<r.length)B.a.l(r,h,g)
else B.a.k(r,g);++a.c;++l}return l},
n1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.A()
s=A.Am(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.cu(a,n)
if(p)h.fW(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.ii(new A.fG(new A.C(k-q,j-q,i-q),new A.C(k+q,j+q,i+q)))!==B.b6)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.f(A.o("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.f(A.j("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.nN(r,o,q)},
lj(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a5(0,this.f.ad(0,s).a8(0,r))},
k8(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a8(0,a).a5(0,this.f.ad(0,s).a8(0,(1-q)/r))},
fW(a){var s,r=a.gag()
if(r.aa(0,B.u))return B.aM
s=B.b.t(B.au.bo(r),-1,1)
if(s>0.999999)return B.aM
if(s<-0.999999)return A.rO(B.ee,3.141592653589793)
return A.rO(B.au.bz(r),Math.acos(s))},
cR(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.j6.prototype={
B(){return"_BloomBlurAxis."+this.b}}
A.i_.prototype={
gE(){return this.f},
av(a,b){B.a.k(a.a,new A.av(this.f,B.J,A.c([new A.P(this.x,B.i),new A.P(this.y,B.k)],t.C),!1))},
ar(a){var s=this,r=s.a.aA(new A.bb(s.e,s.b,s.c,B.v,B.dp,B.dl)),q=A.ct(s.d),p=t.n,o=s.r===B.es?new Float32Array(A.X(A.c([1/s.Q,0],p))):new Float32Array(A.X(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.mm(new A.b7(s.f,A.c([new A.P(s.x,B.i),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
Z(){},
$iap:1}
A.mm.prototype={
am(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bD(r,a.ao(o.r).b)
A.b9(r,o.a.ai())
A.cQ(r,B.S,1,0,0,0)
A.bO(r,o.b.b)
q=t._
p=o.d
if(o.e)A.G7(r,0,q.a(p.$0()))
else A.aD(r,0,q.a(p.$0()))
A.v(r,"uSource",B.t)
A.v(r,"uTexelStep",new A.y(B.as,o.f))
A.bf(r,o.c)
s.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.ki.prototype={
gE(){return"bloomComposite"},
av(a,b){B.a.k(a.a,new A.av("bloomComposite",B.J,A.c([new A.P(this.f,B.i),new A.P(this.r,B.i),new A.P(this.w,B.k)],t.C),!1))},
ar(a){var s=this,r="bloomComposite",q=s.a.aA(new A.bb(r,s.b,s.c,B.v,B.l1,B.kH)),p=A.ct(s.d),o=s.w,n=A.c([new A.P(s.f,B.i),new A.P(s.r,B.i),new A.P(o,B.k)],t.C)
return A.c([new A.mn(new A.b7(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
Z(){},
$iap:1}
A.mn.prototype={
am(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bD(r,a.bW(q.f).b)
A.Bp(r,1)
A.b9(r,B.cB)
A.bO(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.t)
A.v(r,"uBloomStrength",new A.y(B.e,p))
A.bf(r,q.c)
s.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.kv.prototype={
gE(){return"depthPrepass"},
av(a,b){B.a.k(a.a,new A.av("depthPrepass",B.iV,A.c([new A.P(this.w,B.k)],t.C),!1))},
ar(a){var s=this,r="depthPrepass",q=s.a.aA(new A.bb(r,s.b,s.c,B.dn,B.dm,B.k_))
return A.c([new A.mq(new A.b7(r,A.c([new A.P(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
Z(){},
$iap:1}
A.mq.prototype={
am(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bD(a1,a2.ao("sceneDepth").b)
A.b9(a1,d.a.ai())
A.cQ(a1,B.b3,1,0,0,0)
A.bO(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.y(B.e,a0.ax))
A.v(a1,"uAlbedo",B.t)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gF()
A.v(a1,"uViewProjection",new A.y(B.y,new Float32Array(A.X(a))))
A.v(a1,"uModel",new A.y(B.y,new Float32Array(A.X(i.c.ac().a))))
A.ye(b,k,!1)
d.l4(b,j.gF().b,p)
h=q.$1(j.gF().a)
i=h.a
if(a1.b!==B.j)A.f(A.j(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.j)A.f(A.j(c))
e=A.h(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.h(o.WebGL2RenderingContext.UNSIGNED_INT):A.h(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bH(g,f)}else{if(a1.b!==B.j)A.f(A.j(c))
m.drawArraysInstanced(A.h(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bH(g,f)}}},
l4(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,r.fx===B.aX?0.5:0))
A.v(q,"uAffineWarpStrength",new A.y(B.e,0))
s=this.a.ai()
A.b9(q,r.go?s.eJ(!1):s)},
$iab:1,
gF(){return this.a}}
A.j8.prototype={
B(){return"_DofBlurAxis."+this.b}}
A.i6.prototype={
gE(){return this.f},
av(a,b){B.a.k(a.a,new A.av(this.f,B.J,A.c([new A.P(this.w,B.i),new A.P(this.x,B.k)],t.C),!1))},
ar(a){var s=this,r=s.a.aA(new A.bb(s.e,s.b,s.c,B.v,B.dp,B.dl)),q=A.ct(s.d),p=t.n,o=s.r===B.et?new Float32Array(A.X(A.c([1/s.z,0],p))):new Float32Array(A.X(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.mr(new A.b7(s.f,A.c([new A.P(s.w,B.i),new A.P(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
Z(){},
$iap:1}
A.mr.prototype={
am(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bD(r,a.ao(q.f).b)
A.b9(r,q.a.ai())
A.cQ(r,B.S,1,0,0,0)
A.bO(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.v(r,"uSource",B.t)
A.v(r,"uTexelStep",new A.y(B.as,q.e))
A.bf(r,q.c)
s.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.kA.prototype={
gE(){return"dofComposite"},
av(a,b){var s=this
B.a.k(a.a,new A.av("dofComposite",B.J,A.c([new A.P(s.z,B.i),new A.P(s.Q,B.i),new A.P(s.as,B.i),new A.P(s.at,B.k)],t.C),!1))},
ar(a){var s=this,r="dofComposite",q=s.a.aA(new A.bb(r,s.b,s.c,B.v,B.l0,B.jP)),p=A.ct(s.d)
return A.c([new A.ms(new A.b7(r,A.c([new A.P(s.z,B.i),new A.P(s.Q,B.i),new A.P(s.as,B.i),new A.P(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
Z(){},
$iap:1}
A.ms.prototype={
am(a){var s,r=this,q=a.ao("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bD(n,q.b)
A.b9(n,r.a.ai())
A.bO(n,r.b.b)
s=t._
A.aD(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.t)
A.aD(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.at)
A.aD(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.ed)
A.v(n,"uNear",new A.y(B.e,o.f))
A.v(n,"uFar",new A.y(B.e,o.r))
A.v(n,"uFocusDistance",new A.y(B.e,r.w))
A.v(n,"uFocusRange",new A.y(B.e,r.x))
A.v(n,"uStrength",new A.y(B.e,a.c.e.d))
A.bf(n,r.c)
p.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.kT.prototype={
gE(){return"grade"},
av(a,b){B.a.k(a.a,new A.av("grade",B.J,A.c([new A.P(this.r,B.i),new A.P(this.w,B.k)],t.C),!1))},
ar(a){var s=this,r=s.a.aA(new A.bb("grade",s.b,s.c,B.v,B.kZ,B.kI)),q=A.ct(s.d),p=s.r,o=s.w
return A.c([new A.mx(new A.b7("grade",A.c([new A.P(p,B.i),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
Z(){},
$iap:1}
A.mx.prototype={
am(a){var s=this,r=a.ao(s.f.a),q=a.b,p=q.a
A.bD(p,a.ao(s.r.a).b)
A.b9(p,s.a.ai())
A.bO(p,s.b.b)
A.aD(p,0,r.b)
A.v(p,"uScene",B.t)
A.aD(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.at)
A.v(p,"uLutSize",new A.y(B.e,s.e))
A.v(p,"uStrength",new A.y(B.e,a.c.e.as))
A.bf(p,s.c)
q.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.it.prototype={
gE(){return"msaaResolve"},
av(a,b){B.a.k(a.a,new A.av("msaaResolve",B.iW,A.c([new A.P(this.b,B.i),new A.P(this.c,B.k)],t.C),!0))},
ar(a){var s=this.b,r=this.c
return A.c([new A.mE(new A.b7("msaaResolve",A.c([new A.P(s,B.i),new A.P(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
Z(){},
$iap:1}
A.mE.prototype={
am(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.bW(this.c),j=a.bW(this.d),i=this.b
if(i.b!==B.j)A.f(A.j(u.k))
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
i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(m.WebGL2RenderingContext.NONE)],t.n))}A.aY(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.h(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.NONE),A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aY(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.h(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aY(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.h(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iab:1,
gF(){return this.a}}
A.fK.prototype={}
A.kj.prototype={
ao(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.j('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
bW(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ao(s)},
$iFr:1}
A.yG.prototype={}
A.iD.prototype={
gE(){return"present"},
av(a,b){B.a.k(a.a,new A.av("present",B.iX,A.c([new A.P(this.f,B.i)],t.C),!1))},
ar(a){var s,r=this,q=r.a.aA(new A.bb("present",r.b,r.c,B.v,B.la,B.jM)),p=A.ct(r.d)
r.w=p
s=r.f
return A.c([new A.mK(new A.b7("present",A.c([new A.P(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
Z(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iap:1}
A.mK.prototype={
am(a){var s,r=this,q=a.bW(r.d),p=a.b,o=p.a
A.bD(o,null)
A.b9(o,r.a.ai())
A.bO(o,r.b.b)
A.bf(o,r.c)
A.aD(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.y(B.e,s.a))
A.v(o,"uVignette",new A.y(B.e,s.e))
A.v(o,"uGrain",new A.y(B.e,s.f))
A.v(o,"uOutputEncoding",new A.y(B.e,r.e===B.b4?1:0))
A.v(o,"uToneMap",B.c0)
p.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.lx.prototype={
gE(){return"ps1Quantize"},
av(a,b){B.a.k(a.a,new A.av("ps1Quantize",B.J,A.c([new A.P(this.e,B.i),new A.P(this.f,B.k)],t.C),!1))},
ar(a){var s=this,r="ps1Quantize",q=s.a.aA(new A.bb(r,s.b,s.c,B.v,B.l2,B.jG)),p=A.ct(s.d),o=s.e,n=s.f
return A.c([new A.mL(new A.b7(r,A.c([new A.P(o,B.i),new A.P(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
Z(){},
$iap:1}
A.mL.prototype={
am(a){var s=this,r=a.ao(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bD(o,a.ao(s.e.a).b)
A.b9(o,s.a.ai())
A.bO(o,s.b.b)
A.aD(o,0,r.b)
A.v(o,"uScene",B.t)
A.v(o,"uQuantizationBits",new A.y(B.e,p.ay))
A.v(o,"uDitherStrength",new A.y(B.e,p.Q))
A.bf(o,s.c)
q.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.fg.prototype={}
A.lN.prototype={
gE(){return"shadow"},
av(a,b){B.a.k(a.a,new A.av("shadowCaster",B.iU,A.c([new A.P(this.z,B.k)],t.C),!1))},
ar(a){var s=this,r="shadowCaster",q=s.a.aA(new A.bb(r,s.b,s.c,B.dn,B.dm,B.kG))
return A.c([new A.mO(new A.b7(r,A.c([new A.P(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
Z(){},
$iap:1}
A.mO.prototype={
am(a){var s,r,q,p,o=this,n=a.ao("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bD(s,n.b)
A.b9(s,o.a.ai())
A.cQ(s,B.b3,1,0,0,0)
return}r=A.B5(l)
o.x.$1(r)
s=m.a
A.bD(s,n.b)
A.b9(s,o.a.ai())
A.cQ(s,B.b3,1,0,0,0)
A.bO(s,o.b.b)
A.v(s,"uAlbedo",B.t)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.k9(m,s[p],l,r)},
h_(a,b){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,r.fx===B.aX?0.5:0))
s=this.a.ai()
A.b9(q,r.go?s.eJ(!1):s)},
k9(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gF().r)return
s=a.a
A.v(s,"uUseInstances",B.c_)
n.fX(a,b.gF().c,d)
n.h_(a,b.gF().b)
r=b.gF()
q=n.c.$1(r.a)
A.bf(s,q.a)
s=q.b
r=q.c
if(s)a.e4(r,q.d,0)
else a.aD(r,0)}else if(b instanceof A.dD){p=b.a
if(!p.gF().r)return
if(n.le(b,c)===B.nr)return
n.fX(a,p.gF().c,d)
A.ye(a,b,!1)
n.h_(a,p.gF().b)
s=p.gF()
q=n.c.$1(s.a)
A.bf(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.e5(r,q.d,o,0)
else a.e3(r,0,o)}else throw A.b(A.o("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eP(b).q(0),null))},
le(a,b){return B.nq},
fX(a,b,c){var s=a.a
A.v(s,"uModel",new A.y(B.y,new Float32Array(A.X(b.ac().a))))
A.v(s,"uLightViewProjection",new A.y(B.y,new Float32Array(A.X(c.a.a))))},
$iab:1,
gF(){return this.a}}
A.xq.prototype={
$1(a){return this.a.a=a},
$S:67}
A.xr.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:51}
A.lO.prototype={
gE(){return"shadowedWorld"},
av(a,b){var s=this,r=A.c([new A.P(s.db,B.i)],t.C)
if(s.ay)r.push(new A.P(s.dx,B.i))
r.push(new A.P(s.dy,B.k))
B.a.k(a.a,new A.av("shadowedWorld",B.d0,r,!1))},
ar(a){var s=this,r="shadowedWorld",q=s.a.aA(new A.bb(r,s.b,s.c,B.l6,B.l_,B.k4)),p=A.c([new A.P(s.db,B.i)],t.C)
if(s.ay)p.push(new A.P(s.dx,B.i))
p.push(new A.P(s.dy,B.k))
return A.c([new A.mP(new A.b7(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
Z(){},
$iap:1}
A.mP.prototype={
am(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.ao("sceneColor"),a7=b4.b,a8=b4.c,a9=a8.c,b0=a8.d,b1=a8.e,b2=a4.z.$0(),b3=a7.a
A.bD(b3,a6.b)
A.b9(b3,a4.a.ai())
s=b0.a
A.cQ(b3,B.cu,1,s.c,s.b,s.a)
A.bO(b3,a4.b.b)
A.v(b3,"uAlbedo",B.t)
A.v(b3,"uNormalMap",B.o0)
A.v(b3,"uOrmMap",B.o1)
A.v(b3,"uEmissiveMap",B.o2)
A.v(b3,"uLightmap",B.o3)
s=t._
A.aD(b3,1,s.a(a4.y.$0()))
A.v(b3,"uShadowMap",B.at)
r=a9.d
q=t.n
A.v(b3,"uCameraPosition",new A.y(B.n,new Float32Array(A.X(A.c([r.a,r.b,r.c],q)))))
A.v(b3,"uShadowMapTexelSize",new A.y(B.as,new Float32Array(A.X(A.c([1/a4.ch,1/a4.CW],q)))))
A.aD(b3,2,s.a(a4.at.$0()))
A.v(b3,"uSsao",B.ed)
A.v(b3,"uVertexSnapGrid",new A.y(B.e,b1.ax))
A.v(b3,"uSceneColorSize",new A.y(B.as,new Float32Array(A.X(A.c([a4.ax,a4.ay],q)))))
A.v(b3,"uViewProjection",new A.y(B.y,new Float32Array(A.X(a9.c.a))))
A.v(b3,"uView",new A.y(B.y,new Float32Array(A.X(a9.a.a))))
A.v(b3,"uLightViewProjection",new A.y(B.y,new Float32Array(A.X(b2.a.a))))
s=b0.b
A.v(b3,"uFogColor",new A.y(B.n,new Float32Array(A.X(A.c([s.a,s.b,s.c],q)))))
A.v(b3,"uFogStart",new A.y(B.e,b0.c))
A.v(b3,"uFogEnd",new A.y(B.e,b0.d))
s=b0.e
A.v(b3,"uFogHeightFalloff",new A.y(B.e,s==null?0:s))
s=b0.f
A.v(b3,"uFogDensity",new A.y(B.e,s==null?0:s))
p=a4.Q.$0()
s=A.c([],t.cv)
r=a4.as.$0()
r=J.Q(r==null?B.br:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.P
k=o?a5:p.c
if(k==null)k=B.au
A.v(b3,"uLightPosition",new A.y(B.n,new Float32Array(A.X(A.c([l.a,l.b,l.c],q)))))
A.v(b3,"uLightDirection",new A.y(B.n,new Float32Array(A.X(A.c([k.a,k.b,k.c],q)))))
j=o?a5:p.d
if(j==null)j=B.U
A.v(b3,"uLightColor",new A.y(B.n,new Float32Array(A.X(A.c([j.a,j.b,j.c],q)))))
r=o?a5:p.e
A.v(b3,"uLightIntensity",new A.y(B.e,r==null?0:r))
A.v(b3,"uSpotEnabled",new A.y(B.e,!o?1:0))
i=b0.x
r=i==null
h=r?a5:i.a
if(h==null)h=B.P
g=r?a5:i.b
if(g==null)g=B.U
A.v(b3,"uDirectionalDirection",new A.y(B.n,new Float32Array(A.X(A.c([h.a,h.b,h.c],q)))))
A.v(b3,"uDirectionalColor",new A.y(B.n,new Float32Array(A.X(A.c([g.a,g.b,g.c],q)))))
r=r?a5:i.c
A.v(b3,"uDirectionalIntensity",new A.y(B.e,r==null?0:r))
for(r=b0.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a5
n=e==null
d=n?a5:e.b
if(d==null)d=B.u
c=n?a5:e.c
if(c==null)c=B.U
m=""+f
A.v(b3,"uPointPosition"+m,new A.y(B.n,new Float32Array(A.X(A.c([d.a,d.b,d.c],q)))))
A.v(b3,"uPointColor"+m,new A.y(B.n,new Float32Array(A.X(A.c([c.a,c.b,c.c],q)))))
b=n?a5:e.d
if(b==null)b=0
A.v(b3,"uPointIntensity"+m,new A.y(B.e,b))
n=n?a5:e.e
if(n==null)n=1
A.v(b3,"uPointRadius"+m,new A.y(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a5
r=e==null
d=r?a5:e.b
if(d==null)d=B.u
a=r?a5:e.c
if(a==null)a=B.au
c=r?a5:e.d
if(c==null)c=B.U
n=""+f
A.v(b3,"uDirectSpotPosition"+n,new A.y(B.n,new Float32Array(A.X(A.c([d.a,d.b,d.c],q)))))
A.v(b3,"uDirectSpotDirection"+n,new A.y(B.n,new Float32Array(A.X(A.c([a.a,a.b,a.c],q)))))
A.v(b3,"uDirectSpotColor"+n,new A.y(B.n,new Float32Array(A.X(A.c([c.a,c.b,c.c],q)))))
m=r?a5:e.e
if(m==null)m=0
A.v(b3,"uDirectSpotIntensity"+n,new A.y(B.e,m))
m=r?a5:e.f
if(m==null)m=1
A.v(b3,"uDirectSpotRange"+n,new A.y(B.e,m))
m=r?a5:e.r
if(m==null)m=0.3
A.v(b3,"uDirectSpotInnerCos"+n,new A.y(B.e,Math.cos(m)))
m=r?a5:e.w
if(m==null)m=0.5
A.v(b3,"uDirectSpotOuterCos"+n,new A.y(B.e,Math.cos(m)))
r=r?0:1
A.v(b3,"uDirectSpotEnabled"+n,new A.y(B.e,r))}s=o?a5:p.f
A.v(b3,"uLightRange",new A.y(B.e,s==null?1:s))
s=o?a5:p.r
if(s==null)s=0.3
A.v(b3,"uLightInnerCos",new A.y(B.e,Math.cos(s)))
s=o?a5:p.w
if(s==null)s=0.5
A.v(b3,"uLightOuterCos",new A.y(B.e,Math.cos(s)))
a0=b0.r
A.v(b3,"uAmbientColor",new A.y(B.n,new Float32Array(A.X(A.c([a0.a,a0.b,a0.c],q)))))
A.v(b3,"uAmbientIntensity",new A.y(B.e,b0.w))
A.v(b3,"uRainWetness",new A.y(B.e,b1.w))
A.v(b3,"uSurfaceSnowCoverage",new A.y(B.e,b1.x))
A.v(b3,"uSurfaceDissolution",new A.y(B.e,b1.y))
s=b0.as
a1=A.hq(s,0,A.e3(4,"count",t.S),A.B(s).c).bD(0)
A.v(b3,"uThermalSourceCount",new A.y(B.e,a1.length))
for(f=0;f<4;++f){s=a1.length
if(f<s){if(!(f<s))return A.d(a1,f)
a2=a1[f]}else a2=a5
s=a2==null
d=s?a5:a2.b
if(d==null)d=B.u
r=""+f
A.v(b3,"uThermalSourcePosition"+r,new A.y(B.n,new Float32Array(A.X(A.c([d.a,d.b,d.c],q)))))
o=s?a5:a2.c
if(o==null)o=1
A.v(b3,"uThermalSourceRadius"+r,new A.y(B.e,o))
s=s?a5:a2.d
if(s==null)s=0
A.v(b3,"uThermalSourceDissolution"+r,new A.y(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.r)(b3),++a3)a4.ft(a7,b3[a3],r)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.r)(a8),++a3)a4.ft(a7,a8[a3],r)},
ft(a,b,c){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.c_)
n.fY(a,b.gF().c)
n.h0(a,b.gF().b,b.gF().e,b.gF().f,c,b.gF().w)
r=n.c.$1(b.gF().a)
A.bf(s,r.a)
s=r.b
q=r.c
if(s)a.e4(q,r.d,0)
else a.aD(q,0)}else if(b instanceof A.dD){p=b.a
n.fY(a,p.gF().c)
A.ye(a,b,!0)
n.h0(a,p.gF().b,p.gF().e,p.gF().f,c,p.gF().w)
r=n.c.$1(p.gF().a)
A.bf(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.e5(q,r.d,o,0)
else a.e3(q,0,o)}else throw A.b(A.o("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eP(b).q(0),null))},
h0(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aD(o,0,p.a(s.e.$1(q.b)))
A.aD(o,3,p.a(s.f.$1(r)))
A.aD(o,4,p.a(s.r.$1(r)))
A.aD(o,5,p.a(s.w.$1(r)))
A.aD(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.y(B.e,q.fx===B.aX?0.5:0))
A.v(o,"uOpaqueCoverage",new A.y(B.e,c===B.aG?0:1))
A.v(o,"uAffineWarpStrength",new A.y(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.y(B.n,new Float32Array(A.X(A.c([q.d,q.e,q.f],p)))))
A.v(o,"uEmissiveStrength",new A.y(B.e,q.w))
A.v(o,"uUvScaleOffset",new A.y(B.o_,new Float32Array(A.X(A.c([q.db,q.dx,0,0],p)))))
A.v(o,"uNormalStrength",new A.y(B.e,1))
A.v(o,"uRoughness",new A.y(B.e,q.at))
A.v(o,"uMetallic",new A.y(B.e,0))
A.v(o,"uClearcoatStrength",new A.y(B.e,0))
A.v(o,"uClearcoatRoughness",new A.y(B.e,0.2))
A.v(o,"uOcclusionStrength",new A.y(B.e,1))
A.v(o,"uLightmapIntensity",new A.y(B.e,0))
A.v(o,"uReceivesShadow",new A.y(B.e,q.id&&f?1:0))
A:{p=r
if(B.aG===c){switch(d.a){case 0:p=B.fC
break
case 1:p=B.fB
break}break A}if(B.T===c||B.fA===c){p=s.a.ai()
break A}}A.b9(o,q.go?p.eJ(!1):p)},
fY(a,b){var s=b.ac(),r=a.a
A.v(r,"uModel",new A.y(B.y,new Float32Array(A.X(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.y,new Float32Array(A.X(s.en().a))))},
$iab:1,
gF(){return this.a}}
A.lQ.prototype={
gE(){return"ssaoOcclusion"},
av(a,b){B.a.k(a.a,new A.av("ssaoOcclusion",B.bc,A.c([new A.P(this.w,B.k)],t.C),!1))},
ar(a){var s=this,r="ssaoOcclusion",q=s.a.aA(new A.bb(r,s.b,s.c,B.v,B.ds,B.jB)),p=A.ct(s.d)
return A.c([new A.mS(new A.b7(r,A.c([new A.P(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
Z(){},
$iap:1}
A.mS.prototype={
am(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bD(m,a.ao("ssaoRaw").b)
A.b9(m,p.a.ai())
if(n<=0){A.cQ(m,B.S,1,1,1,1)
return}A.cQ(m,B.S,1,0,0,0)
s=p.e.$0()
A.bO(m,p.b.b)
A.aD(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.t)
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
A.bf(m,p.c)
o.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.lP.prototype={
gE(){return"ssaoBlur"},
av(a,b){B.a.k(a.a,new A.av("ssaoBlur",B.bc,A.c([new A.P(this.y,B.i),new A.P(this.z,B.k)],t.C),!1))},
ar(a){var s=this,r="ssaoBlur",q=s.a.aA(new A.bb(r,s.b,s.c,B.v,B.kT,B.kK)),p=A.ct(s.d)
return A.c([new A.mR(new A.b7(r,A.c([new A.P(s.y,B.i),new A.P(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
Z(){},
$iap:1}
A.mR.prototype={
am(a){var s,r,q=this,p=a.b,o=p.a
A.bD(o,a.ao("ssaoBlurred").b)
A.b9(o,q.a.ai())
if(a.c.e.c<=0){A.cQ(o,B.S,1,1,1,1)
return}A.cQ(o,B.S,1,0,0,0)
s=q.f.$0()
A.bO(o,q.b.b)
r=t._
A.aD(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.t)
A.aD(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.at)
A.v(o,"uTexelSize",new A.y(B.as,new Float32Array(A.X(A.c([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.y(B.e,s.f))
A.v(o,"uFar",new A.y(B.e,s.r))
A.bf(o,q.c)
p.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.m2.prototype={
gE(){return"vhs"},
av(a,b){var s=this.w
a.b.k(0,s.a)
B.a.k(a.a,new A.av("vhs",B.J,A.c([new A.P(this.r,B.i),new A.P(s,B.N),new A.P(s,B.k)],t.C),!1))},
ar(a){var s=this,r=s.a.aA(new A.bb("vhs",s.b,s.c,B.v,B.kW,B.jI)),q=A.ct(s.d),p=s.r,o=s.w
return A.c([new A.n_(new A.b7("vhs",A.c([new A.P(p,B.i),new A.P(o,B.N),new A.P(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
Z(){},
$iap:1}
A.n_.prototype={
am(a){var s,r=this,q=a.ao(r.f.a),p=a.ao(r.r.a),o=a.b,n=a.c.e,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bD(m,p.b)
A.b9(m,r.a.ai())
A.bO(m,r.b.b)
A.aD(m,0,q.b)
A.v(m,"uScene",B.t)
A.aD(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.at)
A.v(m,"uTime",new A.y(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.y(B.e,n.ch))
A.v(m,"uTrackingWeight",new A.y(B.e,l))
A.v(m,"uNoiseWeight",new A.y(B.e,n.cx))
A.v(m,"uHeadSwitchWeight",new A.y(B.e,n.cy))
A.v(m,"uDropoutWeight",new A.y(B.e,n.db))
A.v(m,"uGhostWeight",new A.y(B.e,s))
A.bf(m,r.c)
o.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.mb.prototype={
gE(){return"volumetricLight"},
av(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.k(p,new A.av("volumetricLight",B.bc,A.c([new A.P(s.x,B.i),new A.P(r,B.k)],q),!1))
B.a.k(p,new A.av("volumetricComposite",B.J,A.c([new A.P(r,B.i),new A.P(s.y,B.i),new A.P(s.z,B.k)],q),!1))},
ar(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aA(new A.bb(l,i,m.c,B.v,B.ds,B.k7)),g=m.e,f=A.ct(g),e=m.Q
B.a.k(e,f)
s=m.w
r=t.C
q=A.c([new A.n1(new A.b7(l,A.c([new A.P(m.x,B.i),new A.P(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aA(new A.bb(k,i,m.d,B.v,B.l8,B.kL))
n=A.ct(g)
B.a.k(e,n)
B.a.k(q,new A.n0(new A.b7(k,A.c([new A.P(s,B.i),new A.P(m.y,B.i),new A.P(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
Z(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p)q.deleteVertexArray(A.a(s[p].a))
B.a.N(s)},
$iap:1}
A.n1.prototype={
am(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a0.ao(h.d),e=a0.b,d=h.f.$0(),c=a0.c.d,b=c.x,a=e.a
A.bD(a,f.b)
A.b9(a,h.a.ai())
A.cQ(a,B.S,1,0,0,0)
A.bO(a,h.b.b)
A.aD(a,0,t._.a(h.e.$0()))
A.v(a,"uSceneDepth",B.t)
A.v(a,"uNear",new A.y(B.e,d.f))
A.v(a,"uFar",new A.y(B.e,d.r))
A.v(a,"uViewProjection",new A.y(B.y,new Float32Array(A.X(d.c.a))))
s=b==null
A.v(a,"uShaftIntensity",new A.y(B.e,s?0:b.c*0.15))
r=c.f
A.v(a,"uFogDensity",new A.y(B.e,r==null?0:r))
A.v(a,"uAnisotropy",B.o4)
q=s?g:b.a.gag()
if(q==null)q=B.P
p=s?g:b.b
if(p==null)p=B.U
s=t.n
A.v(a,"uLightDir",new A.y(B.n,new Float32Array(A.X(A.c([q.a,q.b,q.c],s)))))
A.v(a,"uLightColor",new A.y(B.n,new Float32Array(A.X(A.c([p.a,p.b,p.c],s)))))
o=A.JE(4,d.d,c.Q)
A.v(a,"uVolumetricSourceCount",new A.y(B.e,o.length))
for(n=0;n<4;++n){r=o.length
if(n<r){if(!(n<r))return A.d(o,n)
m=o[n]}else m=g
r=m==null
l=r?g:m.b
if(l==null)l=B.u
k=r?g:m.c
if(k==null)k=B.u
j=""+n
A.v(a,"uSourcePosition"+j,new A.y(B.n,new Float32Array(A.X(A.c([l.a,l.b,l.c],s)))))
A.v(a,"uSourceColor"+j,new A.y(B.n,new Float32Array(A.X(A.c([k.a,k.b,k.c],s)))))
i=r?g:m.d
if(i==null)i=0
A.v(a,"uSourceIntensity"+j,new A.y(B.e,i))
i=r?g:m.e
if(i==null)i=1
A.v(a,"uSourceReferenceDistance"+j,new A.y(B.e,i))
r=r?g:m.f
if(r==null)r=1
A.v(a,"uSourceCutoffDistance"+j,new A.y(B.e,r))}A.bf(a,h.c)
e.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.n0.prototype={
am(a){var s=this,r=a.bW(s.e),q=a.bW(s.d),p=a.b,o=p.a
A.bD(o,r.b)
A.Bp(o,1)
A.b9(o,B.cB)
A.bO(o,s.b.b)
A.aD(o,0,q.b)
A.v(o,"uVolumetric",B.t)
A.v(o,"uVolumetricStrength",B.c0)
A.bf(o,s.c)
p.aD(3,0)},
$iab:1,
gF(){return this.a}}
A.iL.prototype={}
A.mf.prototype={
gE(){return"world"},
av(a,b){B.a.k(a.a,new A.av("worldOpaqueTransparent",B.d0,A.c([new A.P(this.e,B.k)],t.C),!1))},
ar(a){var s=this,r=s.a.aA(new A.bb("safeWorld",s.b,s.c,B.l9,B.v,B.jA)),q=s.e
return A.c([new A.n4(new A.b7("worldOpaqueTransparent",A.c([new A.P(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
Z(){},
$iap:1}
A.n4.prototype={
am(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bD(j,a.ao(n.d).b)
A.b9(j,n.a.ai())
s=k.a
A.cQ(j,B.cu,1,s.c,s.b,s.a)
A.bO(j,n.b.b)
A.v(j,"uViewProjection",new A.y(B.y,new Float32Array(A.X(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.P
s=t.n
A.v(j,"uLightDir",new A.y(B.n,new Float32Array(A.X(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.y(B.n,new Float32Array(A.X(A.c([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.y(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.hd(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.hd(m,l[o])},
hd(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dD){s=b.a
n.he(a,s.gF().c)
A.ye(a,b,!0)
r=n.c.$1(s.gF().a)
A.bf(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.e5(p,r.d,o,0)
else a.e3(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.c_)
n.he(a,b.gF().c)
r=n.c.$1(b.gF().a)
A.bf(q,r.a)
q=r.b
p=r.c
if(q)a.e4(p,r.d,0)
else a.aD(p,0)}else throw A.b(A.o("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eP(b).q(0),null))},
he(a,b){var s=b.ac(),r=a.a
A.v(r,"uModel",new A.y(B.y,new Float32Array(A.X(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.y,new Float32Array(A.X(s.en().a))))},
$iab:1,
gF(){return this.a}}
A.oA.prototype={
cv(a){var s,r,q
a.A()
s=A.Y(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.Q||a.as){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.F
else q=r===0?B.bG:B.M
return new A.dK(q,s)},
iC(a){var s,r=this.cv(a).a
A:{if(B.F===r){s=B.mk
break A}if(B.M===r){s=B.dN
break A}s=B.ao
break A}return s}}
A.kQ.prototype={
B(){return"GpuBufferUsage."+this.b}}
A.ic.prototype={
B(){return"GpuBufferKind."+this.b}}
A.ig.prototype={
B(){return"GpuTextureFilter."+this.b}}
A.kS.prototype={
B(){return"GpuTextureWrap."+this.b}}
A.kP.prototype={}
A.kR.prototype={}
A.eZ.prototype={
B(){return"GpuTargetAttachment."+this.b}}
A.ie.prototype={}
A.id.prototype={
B(){return"GpuDeviceStatus."+this.b}}
A.ff.prototype={
B(){return"ShaderCompileStage."+this.b}}
A.iP.prototype={
q(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.de.prototype={
B(){return"UniformType."+this.b}}
A.y.prototype={}
A.fO.prototype={
B(){return"ClearMask."+this.b}}
A.kw.prototype={
aD(a,b){var s=this.a
if(s.b!==B.j)A.f(A.j(u.k))
s.a.drawArrays(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bH(a,1)},
e3(a,b,c){var s=this.a
if(s.b!==B.j)A.f(A.j(u.k))
s.a.drawArraysInstanced(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bH(a,c)},
e4(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.f(A.j(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bH(a,1)},
e5(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.f(A.j(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aY(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bH(a,c)},
$iEi:1}
A.h1.prototype={
B(){return"GpuResourceCandidateState."+this.b}}
A.hd.prototype={
i1(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.j("resource is not in candidate: "+a))
return s}}
A.pE.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.j("GPU resource adapter is not initialized"))
return s},
de(a){var s,r,q,p,o,n=this
if(n.e)A.f(A.j("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.j("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.j("GPU resource candidate is already open"))
s=A.iA(a)
p=n.b
r=p.de(s)
try{q=new A.hd(r,n.dF(s,a),B.ak)
n.d=q
return q}catch(o){p.ez(r)
throw o}},
Z(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.j("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dI(s.b)
r.b.Z()
r.c=null
r.e=!0},
dF(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("I<1>")
s=new A.I(k,i.a(new A.pF()),j)
for(h=s,g=J.Q(h.a),h=new A.T(g,h.b,h.$ti.i("T<1>")),f=a.a;h.m();){r=g.gn()
q=A.Bv(f,a.fq(r,a5))
J.eO(a3,q)
J.bl(a2,r,q)}e=A.J(new A.I(k,i.a(new A.pG()),j),j.i("n.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.r)(k),++d){o=k[d]
n=A.D1(J.DP(o,11))
if(i){h=J.aZ(a2,"sceneColor")
h.toString
J.bl(a2,o,h)}else{h=n
if(typeof h!=="number")return h.oM()
if(h>=2){h=J.aZ(a2,"sceneColor#1")
h.toString
J.bl(a2,o,h)}else{m=A.Bv(f,a.fq(o,a5))
J.eO(a3,m)
J.bl(a2,o,m)}}}a0=A.aT(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.B(a0).i("bK<1>"),a0=new A.bK(a0,k),a0=new A.ai(a0,a0.gu(0),k.i("ai<Z.E>")),j=a.a,i=t.V,k=k.i("Z.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.yQ(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
fq(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.ie(s,s,1,B.b9,!0)}if(a==="sceneDepth")return new A.ie(n,m,1,B.b9,!0)
r=B.c.U(a,"ssao")||B.c.U(a,"bloomBlur")||B.c.U(a,"dofBlur")||B.c.U(a,"volumetricLight")
q=r?B.d.ae(n+1,2):n
p=r?B.d.ae(m+1,2):m
s=a==="sceneColor"
o=s||B.c.U(a,"sceneColor#")
s=s?b.d:1
return new A.ie(q,p,s,o?B.cZ:B.iR,o)},
dI(a){var s,r,q,p,o,n=A.f2(t.mf.a(a).gaj(),t._)
for(n=A.fv(n,n.r,A.q(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.yQ(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fc(a){if(this.d!==a||a.c!==B.ak)throw A.b(A.j("GPU resource candidate is not open"))}}
A.pF.prototype={
$1(a){return!B.c.U(A.t(a),"sceneColor#")},
$S:3}
A.pG.prototype={
$1(a){return B.c.U(A.t(a),"sceneColor#")},
$S:3}
A.hz.prototype={
B(){return"_SlotState."+this.b}}
A.eE.prototype={
sb1(a){this.c=this.$ti.i("1?").a(a)}}
A.d9.prototype={
aF(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.eE(B.aV,n.i("eE<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.pc
p.sb1(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bM(a){return this.aF(a,null)},
Y(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.eo(B.d4,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.eo(B.d5,a))
s=q.b
if(s===B.aW||s===B.aV)throw A.b(A.eo(B.aI,a))},
bN(a){var s,r,q=this.$ti
q.c.a(a)
this.Y(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eE(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Y(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb1(b)},
aJ(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.eo(B.d4,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.eo(B.d5,a))
r=q.b
if(r===B.aW||r===B.aV)throw A.b(A.eo(B.j6,a))
q.b=B.aW
q.sb1(null)
B.a.k(p.c,s);++p.e},
bR(){return new A.bF(this.nn(),this.$ti.i("bF<+(1,2)>"))},
nn(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bR(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aW||j===B.aV){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.a9(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.kg.prototype={
B(){return"BlendEquation."+this.b}}
A.eT.prototype={
B(){return"BlendFactor."+this.b}}
A.kr.prototype={
B(){return"CullFace."+this.b}}
A.ku.prototype={
B(){return"DepthFunc."+this.b}}
A.fX.prototype={
eJ(a){var s=this
return A.Aj(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.br.prototype={
B(){return"StateField."+this.b}}
A.uX.prototype={
mD(a){var s,r=this.a
if(r==null)return A.h8(B.kw,t.qL)
s=A.Y(t.qL)
if(r.a!==a.a)s.k(0,B.bS)
if(r.b!==a.b)s.k(0,B.bT)
if(r.c!==a.c)s.k(0,B.bU)
if(r.d!==a.d)s.k(0,B.bV)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.bW)
if(r.r!==a.r)s.k(0,B.bX)
if(r.w!==a.w)s.k(0,B.bY)
if(r.x!==a.x)s.k(0,B.bZ)
return s}}
A.dY.prototype={$idC:1}
A.jC.prototype={}
A.jB.prototype={}
A.n3.prototype={}
A.md.prototype={
jw(a){var s=this,r=A.a(s.a.canvas)
s.c=A.W(new A.uU(s))
s.d=A.W(new A.uV(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
ic(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c2(A.h(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c2(A.h(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c2(A.h(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c2(A.h(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c2(A.h(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fL(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.hU(e.getParameter(A.h(k.WebGL2RenderingContext.RENDERER)))
m=A.hU(e.getParameter(A.h(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.rQ("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c2(a){var s=A.hU(this.a.getParameter(a))
return typeof s=="number"?B.b.aE(s):0},
fL(a){var s=A.hU(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iEG:1}
A.uU.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.a0},
$S:1}
A.uV.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.vX.prototype={
lF(){var s,r=this
if(r.b!==B.j)A.f(A.j(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dY(new A.n3(s))},
h7(a){var s=a.a
if(!(s instanceof A.n3))throw A.b(A.a6(a,"query","is not a GPU timer query"))
return s}}
A.n2.prototype={}
A.uT.prototype={}
A.uW.prototype={
mu(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.uT(A.G2(s))}}
A.ky.prototype={
C(){var s=this
return A.F(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.kc.prototype={
gns(){var s=this.cx
return new A.ao(s,A.q(s).i("ao<2>")).ba(0,0,new A.o3(),t.i)},
jg(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.p()
s=j.a
A.G(i.connect(A.a(s.destination)))
r=j.d
r===$&&A.p()
A.a(r.gain).value=0.25
q=j.e
q===$&&A.p()
A.a(q.gain).value=0.12
p=j.f
p===$&&A.p()
A.a(p.gain).value=0.4
o=j.r
o===$&&A.p()
A.a(o.gain).value=0.2
n=j.w
n===$&&A.p()
A.a(n.gain).value=0.4
m=j.x
m===$&&A.p()
A.a(m.gain).value=0.1
l=j.y
l===$&&A.p()
A.a(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.G(r[k].connect(i))
r=j.z
r===$&&A.p()
A.a(r.gain).value=1
q=j.Q
q===$&&A.p()
A.a(q.gain).value=0.35
A.G(o.connect(r))
A.G(n.connect(r))
A.G(p.connect(r))
p=j.as
p===$&&A.p()
A.G(r.connect(p))
A.G(p.connect(q))
A.G(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k3!==$&&A.ba()
j.k3=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k4!==$&&A.ba()
j.k4=p
A.G(q.connect(p))
A.G(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.G(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.ok!==$&&A.ba()
j.ok=q
i=A.a(s.createChannelMerger(2))
j.p1!==$&&A.ba()
j.p1=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p2!==$&&A.ba()
j.p2=r
A.G(p.connect(q))
A.G(i.connect(A.a(s.destination)))
j.f9()},
f9(){var s,r=this,q=r.ok
q===$&&A.p()
q.disconnect()
s=r.p2
s===$&&A.p()
s.disconnect()
if(r.p3){A.G(q.connect(s,0))
A.G(q.connect(s,1))
q=r.p1
q===$&&A.p()
A.G(s.connect(q,0,0))
A.G(s.connect(q,0,1))}else{s=r.p1
s===$&&A.p()
A.G(q.connect(s,0,0))
A.G(q.connect(s,1,1))}},
co(){var s=this.a
if(A.t(s.state)==="suspended")A.a(s.resume())},
cO(a){var s,r,q=this
if(B.c.U(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.U(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.p()
return s}r=B.kX.h(0,a)
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
kk(){var s,r,q,p,o,n,m,l=this.a,k=A.a0(l.sampleRate),j=B.b.aK(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.az()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dd(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ay.az()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.cO(a)))
r.onended=A.W(new A.o6(r,q))
r.start()
return!0},
i8(a){return this.dd(a,1)},
nX(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
if(o==null)return
s=this.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=d
q=A.a(s.createGain())
A.a(q.gain).value=c
p=A.a(s.createStereoPanner())
A.a(p.pan).value=B.b.t(e,-1,1)
A.G(r.connect(q))
A.G(q.connect(p))
A.G(p.connect(this.cO(a)))
r.onended=A.W(new A.o5(r,q,p))
r.start(A.a0(s.currentTime)+B.b.t(b,0,120))},
lA(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.m(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.r)(a5),++q){p=a5[q]
s.l(0,p.a[3],p)}r=a4.ax
o=A.q(r).i("ac<1>")
o=A.J(new A.ac(r,o),o.i("n.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.r)(o),++q){m=o[q]
if(!s.K(m))a4.dV(m)}for(s=new A.ae(s,s.r,s.e,s.$ti.i("ae<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.K(k[3]))a4.dV(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.dV(k[3])
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
A.G(a1.connect(a4.cO(f)))
A.G(b.connect(a2))
l===$&&A.p()
A.G(a2.connect(l))
c.start()
g=new A.jA(c,b,a,a0,a1,a2,f)
r.l(0,h,g)}a3=A.a0(o.currentTime)
h=g.b
A.a(A.a(h.gain).cancelScheduledValues(a3))
A.a(A.a(h.gain).setValueAtTime(A.a0(A.a(h.gain).value),a3))
f=a3+0.12
A.a(A.a(h.gain).linearRampToValueAtTime(B.b.t(k[1],0,1),f))
h=g.d
A.a(A.a(h.frequency).cancelScheduledValues(a3))
A.a(A.a(h.frequency).setValueAtTime(A.a0(A.a(h.frequency).value),a3))
A.a(A.a(h.frequency).linearRampToValueAtTime(B.b.t(k[4],80,2e4),f))
h=g.c
A.a(A.a(h.frequency).cancelScheduledValues(a3))
A.a(A.a(h.frequency).setValueAtTime(A.a0(A.a(h.frequency).value),a3))
A.a(A.a(h.frequency).linearRampToValueAtTime(B.b.t(k[2],20,16e3),f))
h=g.e
A.a(A.a(h.pan).cancelScheduledValues(a3))
A.a(A.a(h.pan).setValueAtTime(A.a0(A.a(h.pan).value),a3))
A.a(A.a(h.pan).linearRampToValueAtTime(B.b.t(k[6],-1,1),f))
h=g.f
A.a(A.a(h.gain).cancelScheduledValues(a3))
A.a(A.a(h.gain).setValueAtTime(A.a0(A.a(h.gain).value),a3))
A.a(A.a(h.gain).linearRampToValueAtTime(B.b.t(k[5],0,1),f))}},
dV(a){var s,r,q=this.ax.a7(0,a)
if(q==null)return
s=A.a0(this.a.currentTime)
r=q.b
A.a(A.a(r.gain).cancelScheduledValues(s))
A.a(A.a(r.gain).setValueAtTime(A.a0(A.a(r.gain).value),s))
A.a(A.a(r.gain).linearRampToValueAtTime(0,s+0.18))
A.B8(B.fE,q.gmG())},
i9(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
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
l=j.fk(j.b.i6(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.l(0,o,new A.hA(r,q,n,o,p,e,B.b.t(m,0,1)))
r.onended=A.W(new A.o4(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.cO(a)))
r.start()},
nW(a,b,c,d){return this.i9(a,b,c,1,d,null,null,null)},
fk(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aE(r,q,p)},
f0(a){var s,r,q,p,o=this
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
r===$&&A.p()
A.G(p.connect(r))
q.onended=A.W(new A.o7(o,q,p))
q.start()
o.db=q},
dq(a){if(this.p3===a)return
this.p3=a
this.f9()},
iM(a){var s,r,q=this
q.dq(a.b===B.cf)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.aZ?1:0.55
r=q.c
r===$&&A.p()
r=A.a(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.p()
A.a(s.gain).value=0.35*q.R8},
bt(a,b,c,d,e,f){var s,r,q=this
q.fx=B.b.t(c==null?q.fx:c,0,1)
q.fy=B.b.t(f==null?q.fy:f,0,1)
q.go=B.b.t(b==null?q.go:b,0,1)
q.id=B.b.t(a==null?q.id:a,0,1)
q.k1=B.b.t(d==null?q.k1:d,0,1)
if(e!=null)q.k2=e
s=q.d
s===$&&A.p()
A.a(s.gain).value=0.25*q.go
s=q.r
s===$&&A.p()
A.a(s.gain).value=0.2*q.go
s=q.w
s===$&&A.p()
A.a(s.gain).value=0.4*q.go
s=q.x
s===$&&A.p()
A.a(s.gain).value=0.1*q.go
s=q.f
s===$&&A.p()
A.a(s.gain).value=0.4*q.id
s=q.e
s===$&&A.p()
A.a(s.gain).value=0.12*q.k1
s=q.y
s===$&&A.p()
A.a(s.gain).value=q.fy
s=q.c
s===$&&A.p()
s=A.a(s.gain)
r=q.k2?0:q.fx*q.p4
s.value=r},
eT(a){var s=null
return this.bt(s,s,s,s,a,s)},
iJ(a){var s=null
return this.bt(s,s,a,s,s,s)},
iL(a){var s=null
return this.bt(s,s,s,s,s,a)},
iI(a){var s=null
return this.bt(s,a,s,s,s,s)},
iH(a){var s=null
return this.bt(a,s,s,s,s,s)},
iK(a){var s=null
return this.bt(s,s,s,a,s,s)},
iG(a){if(this.ch===a)return
this.ch=a
this.bI()},
bI(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cp(p,g)
m=n==null?i.fk(h.i6(p,g)):new A.aE(n.c,n.d,n.e)
l=A.a0(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.a0(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.a0(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.b.t(m.c,0,1)}}}
A.o3.prototype={
$2(a,b){return Math.max(A.aF(a),t.jS.a(b).r)},
$S:70}
A.o2.prototype={
$1(a){return this.iu(t.q.a(a))},
iu(a){var s=0,r=A.aO(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aP(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a5(A.az(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a5(A.az(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a5(A.az(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ak(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.x(l))
s=5
break
case 2:s=1
break
case 5:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$$1,r)},
$S:71}
A.o6.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.o5.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.o4.prototype={
$1(a){var s=this.a.cx.a7(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.o7.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hA.prototype={}
A.jA.prototype={
Z(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.kd.prototype={
B(){return"AudioCategory."+this.b}}
A.nT.prototype={
ji(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.it)
if(!B.a.a2(A.c([d.a,d.b,d.c],t.n),new A.nU()))throw A.b(B.hn)},
gE(){return this.a}}
A.nU.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.ny.prototype={
jf(a,b){if(this.a.length===0)throw A.b(B.h9)
if(!B.a.a2(A.c([a.a,a.b,a.c],t.n),new A.nz()))throw A.b(B.hv)}}
A.nz.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.hY.prototype={
A(){var s=t.n
if(B.a.M(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.nA()))throw A.b(B.hS)
s=B.a.M(A.c([0,0.55,1],s),new A.nB())
if(s)throw A.b(B.ig)},
cp(a,b){this.A()
if(a.ax&&!a.ay&&!a.z)return new A.aE(-1.5,2e4,0)
if(a.ay)return new A.aE(-28,320,1)
return new A.aE(-12,1100,0.55)},
ov(a){return this.cp(a,null)}}
A.nA.prototype={
$1(a){return!isFinite(A.aF(a))},
$S:4}
A.nB.prototype={
$1(a){A.aF(a)
return a<0||a>1},
$S:4}
A.nP.prototype={
jh(a){var s=A.q(a)
if(new A.ac(a,s.i("ac<1>")).M(0,new A.nR())||new A.ao(a,s.i("ao<2>")).M(0,new A.nS()))throw A.b(B.ip)}}
A.nR.prototype={
$1(a){return A.t(a).length===0},
$S:3}
A.nS.prototype={
$1(a){var s
t.a.a(a)
s=J.aQ(a)
return s.gO(a)||s.M(a,new A.nQ())},
$S:72}
A.nQ.prototype={
$1(a){return A.t(a).length===0},
$S:3}
A.yr.prototype={}
A.o0.prototype={}
A.nV.prototype={
jj(a,b,c){var s
for(s=this.b.gaj(),s=s.gv(s);s.m();)s.gn().A()},
im(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.j("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.j("audio listener room missing: "+a0))
r=this.l2(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.cn
e=f.cp(h,a1.h(0,g))
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.r)(o),++i)s.push(o[i].a)
o=B.b.t(l,-60,0)
m=B.d.t(k,120,2e4)
g=B.b.t(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.V(p,"; ")
b=t.N
s=A.ad(s,b)
b=A.ad(q,b)
if(!isFinite(g)||g<0||g>1)A.f(B.ie)
return new A.o0(s,b,o,m,g,n,c)},
cp(a,b){return this.im(a,b,B.bz)},
l2(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.oX
s=t.N
r=A.F([a0,0],s,t.i)
q=A.F([a0,B.a1],s,t.Es)
p=A.aI([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.W,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.W(k,new A.nW(r))
j=B.a.ga_(k)
p.a7(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.j4(s,!0)}i=o.aQ(j)
h=A.J(i,i.$ti.i("n.E"))
B.a.W(h,new A.nX())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.cl(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cn:d).ov(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.l(0,e,a)
b=q.h(0,j)
b.toString
b=A.J(b,m)
b.push(f)
q.l(0,e,b)
p.k(0,e)}}}return B.oW}}
A.nW.prototype={
$2(a,b){var s,r,q
A.t(a)
A.t(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.G(r,s)
return q===0?B.c.G(a,b):q},
$S:73}
A.nX.prototype={
$2(a,b){var s=t.W
return B.c.G(s.a(a).a,s.a(b).a)},
$S:74}
A.j4.prototype={}
A.fL.prototype={}
A.ox.prototype={
i_(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.DI().bz(q).gag()
p.d=q
p.c=p.b.bz(q).gag()
p.a=a}}
A.pf.prototype={}
A.kY.prototype={
di(a){if(this.at)return
A.ql(a,"requestPointerLock",t.X)},
eQ(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bU(r,r.r,r.e,A.q(r).i("bU<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.Y(q)
for(m=J.Q(o);m.m();){l=m.gn()
if(l.length!==0)n.k(0,l)}s.o6(p,n)}this.bi()},
du(a){var s,r,q,p,o,n,m=this
if(m.ch.du(a))for(s=m.CW.aP("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.k(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.k(0,n)
break}}},
nY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.Q(t.ik.b(c)?c:new A.b6(c,A.B(c).i("b6<1,al?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.R(r.connected)||A.t(r.mapping)!=="standard")break A
c=A.t(r.id)
q=A.t(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.Q(t.dd.b(n)?n:new A.b6(n,A.B(n).i("b6<1,z>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.Q(t.nx.b(d)?d:new A.b6(d,A.B(d).i("b6<1,al>")))
while(d.m()){r=d.gn()
p.push(A.R(r.pressed)?1:A.a0(r.value))}s=new A.lR(!0,c,q,o,p)
break}}d=s==null
m=A.Gf(d?B.nL:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aP(e),q.gaC(q))
q=f.r
q.kg(A.q(q).i("l(1)").a(new A.qe(l)),!0)
for(p=l.gv(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.m:g,h)){if(i.el())n.k(0,h)}else n.k(0,h)}}f.e=A.h8(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aP(e),l.gaC(l))){d=r.a(f.c)
d=!B.a.M(c.aP(e),d.gaC(d))}}if(d)i.em()},
kz(a){var s=this
A.a(a)
if(A.R(a.repeat))return
if(!s.ay)return
if(s.c.k(0,A.t(a.code)))if(B.a.p(s.CW.aP("interact"),A.t(a.code))){if(s.ch.el())s.d.k(0,A.t(a.code))}else s.d.k(0,A.t(a.code))},
kB(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a7(0,A.t(a.code))
r=this.CW
if(B.a.p(r.aP(q),A.t(a.code))){t.Q.a(s)
s=!B.a.M(r.aP(q),s.gaC(s))}else s=!1
if(s)this.ch.em()},
kF(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.h(a.button)
if(r.c.k(0,s))if(B.a.p(r.CW.aP("interact"),s)){if(r.ch.el())r.d.k(0,s)}else r.d.k(0,s)},
kJ(a){var s,r="interact",q="Mouse"+A.h(A.a(a).button),p=this.c
p.a7(0,q)
s=this.CW
if(B.a.p(s.aP(r),q)){t.Q.a(p)
p=!B.a.M(s.aP(r),p.gaC(p))}else p=!1
if(p)this.ch.em()},
kL(a){var s
A.a(a)
if(!this.ay)return
s=A.a0(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.k(0,s)
this.d.k(0,s)},
kH(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fJ(a,"movementX")
s.as=s.as+s.fJ(a,"movementY")},
kD(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fJ(a,b){var s=A.C2(a[b])
if(s==null)s=null
return s==null?0:s},
cH(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.f2(n.c,t.N)
for(r=n.e,r=A.fv(r,r.r,A.q(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.k(0,o)}t.Q.a(s)
return B.a.M(n.CW.aP(a),s.gaC(s))},
bi(){var s=this
s.c.N(0)
s.d.N(0)
s.f.N(0)
s.r.J(0,s.e)
s.as=s.Q=0
s.ch.ex()}}
A.qe.prototype={
$1(a){return!this.a.p(0,A.t(a))},
$S:3}
A.qd.prototype={
aP(a){var s=this.a.h(0,a)
return s==null?B.m:s},
o6(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.K(a))return
r=t.N
q=A.Y(r)
for(p=A.fv(b,b.r,A.q(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.k(0,n)}s.l(0,a,A.ad(q,r))},
bm(a,b){var s,r,q
t.Q.a(b)
for(s=this.aP(a),r=s.length,q=0;q<r;++q)if(b.a7(0,s[q]))return!0
return!1}}
A.qh.prototype={
el(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
em(){this.c=this.b=!1
this.d=0},
du(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.t(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
ex(){this.c=this.b=!1
this.d=0}}
A.b5.prototype={
gE(){return this.a}}
A.qB.prototype={}
A.qy.prototype={
o0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.Y(h)
r=A.J(b,t.J)
B.a.J(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p].a
if(!s.k(0,o))throw A.b(A.o("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.fz(n,i.d,a,b,i.a,j,m)
i.fz(l,i.e,a,c,i.b,j,k)
return new A.qB(n,l,j)},
fz(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.B(d)
s=k.i("H<1,+effectiveScore,light,score(z,b5,z)>")
r=A.J(new A.H(d,k.i("+effectiveScore,light,score(z,b5,z)(1)").a(new A.qz(this,c,b)),s),s.i("Z.E"))
B.a.W(r,new A.qA())
q=A.Y(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.k(a,m)
q.k(0,l)
s.l(0,l,o.c)}else{B.a.k(g,m)
f.l(0,l,p>=e?k:"Importance score below threshold")}}b.N(0)
b.J(0,q)}}
A.qz.prototype={
$1(a){var s,r
t.J.a(a)
s=a.c.ad(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jn(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:76}
A.qA.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:77}
A.oW.prototype={
dX(a,b){var s,r,q,p,o,n,m,l=this
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
A.qH.prototype={
j3(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dX(b,c)},
lt(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.R(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.cq.prototype={
er(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.r.dr(s,0,l,k)
m.a=s}r=b.ad(0,a).bz(d.ad(0,a)).gag()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.iT(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=0+h
l=A.iT(m.a,l,b,r,q,p,o,n,f,k,0,0)
m.b=l
j=0+i
l=A.iT(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=l
l=A.iT(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=A.iT(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=k
m.b=A.iT(m.a,k,d,r,q,p,o,n,f,0,j,0)},
aM(a,b,c,d,e){return this.er(a,b,c,d,e,1,!1,1,1)},
eq(a,b,c,d,e,f,g){return this.er(a,b,c,d,e,1,!1,f,g)},
ib(a,b,c,d,e,f,g){return this.er(a,b,c,d,e,f,g,1,1)}}
A.k.prototype={
a5(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ad(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
bo(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gag(){var s=this,r=s.gu(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.uM.prototype={
A(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.M(A.c([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.uN()))throw A.b(B.h2)
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
if(q)throw A.b(B.h8)}}
A.uN.prototype={
$1(a){return!isFinite(A.aF(a))},
$S:4}
A.cs.prototype={
A(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.b(B.hZ)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a2(A.c([s,r,q,p,o],t.n),new A.uO()))throw A.b(B.ht)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.b(B.io)},
gE(){return this.a}}
A.uO.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.j1.prototype={
A(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a2(A.c([o,s,r,q],t.n),new A.uJ())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.b(B.hg)},
gE(){return this.a}}
A.uJ.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.uK.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=A.Y(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.A()
if(!k.k(0,p.a))throw A.b(B.i4)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.A()
if(!k.k(0,o.a))throw A.b(B.i5)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a2(A.c([s,r,n,m],t.n),new A.uL())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.b(B.hm)}}
A.uL.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.uI.prototype={
cn(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
a2.A()
s=a2.f
r=a2.r
q=1/Math.pow(1+a2.w/18,0.72)
p=B.b.t((0.05+0.95*s)*(0.18+0.82*r)*q,0,1)
o=1-s
n=Math.exp(Math.log(320)*o+Math.log(2e4)*s)
m=B.b.t(0.18+0.62*(1-a2.as),0,1)
l=a2.b
k=B.b.t(a2.c/18,0,1)
j=A.c([],t.eQ)
if(l>0.001&&a2.a!==B.w){i=a2.a
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
default:h=null}h=B.b.t(l*h*p,0,1)
i=i===B.an?80:120
B.a.k(j,new A.cs("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.k(j,new A.cs("exterior-wind","weather-wind",B.b.t(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.t(a2.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.k(j,new A.cs("through-wall-thunder","weather-thunder-bed",B.b.t(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a2.a
e=i===B.a6||i===B.am
d=B.b.t(a2.ay*l,0,1)
if(e&&d>0.001)B.a.k(j,new A.cs("structure-hail-impact","weather-hail-roof",B.b.t(d*(0.16+0.38*o)*(0.35+0.65*r),0,1),760+1500*p,48,0,m*0.92,!0))
c=B.b.t(k*f*(1-0.72*s)*(0.3+0.7*r),0,1)
if(c>0.01)B.a.k(j,new A.cs("window-frame-resonance","weather-window-rattle",c*0.22,1800+1600*c,45,0,m*0.65,!0))
if(s>0.03&&l>0.08)B.a.k(j,new A.cs("interior-window-drip","weather-interior-drip",B.b.t(l*s*(0.35+0.65*k),0,1)*0.34,7200,180,0,m,!0))
i=a2.ax
b=B.b.t(i*0.75+B.b.t((a2.d+5)/25,0,1)*0.25,0,1)
if(i>0.02){B.a.k(j,new A.cs("interior-warmth","weather-interior-warmth",0.08*i,900,35,0,0.12,!0))
B.a.k(j,new A.cs("interior-coffee-roomtone","weather-interior-coffee",0.018*i*(0.55+0.45*o),2600,110,0,0.24*m,!0))}a=A.c([],t.wb)
if(a2.Q&&a2.z!==this.a){o=this.a=a2.z
a0=Math.max(1,a2.y)
i=Math.pow(1+a0/1200,0.8)
h=B.d.R((a2.cx^o)>>>0,200)
g=a0<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.k(a,new A.j1("lightning-thunder-"+o,g,a0/343,B.b.t((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.t(0.94+B.d.R(o,11)*0.012,0.88,1.08),B.b.t((h-100)/100,-1,1)))}a1=new A.uK(A.ad(j,t.uz),A.ad(a,t.EI),p,n,m,b)
a1.A()
return a1}}
A.lR.prototype={
gE(){return this.b}}
A.mg.prototype={}
A.oq.prototype={
oH(a){var s,r,q,p,o,n=B.f.a1(a.C(),null)
this.a.hu(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.an(s.getItem("quarantine.save.active"))
q=A.an(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
o1(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.an(s.getItem("quarantine.save.active"))
q=A.an(s.getItem("quarantine.save.previous"))
p=this.fp(r,a)
if(p!=null)return new A.fd(p,null)
o=this.fp(q,a)
if(o!=null)return new A.fd(o,"recovered previous save")
if(r==null)return B.n0
return B.n_}catch(n){return B.mZ}},
fp(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hu(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ak(q) instanceof A.A)return null
else throw q}}}
A.kB.prototype={
jm(a,b,c,d,e){if(this.a.length===0)throw A.b(B.ia)
if(this.b<0)throw A.b(B.ho)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ad(q,t.i)
s=t.z
return A.aT(A.F(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cj.prototype={
B(){return"EndingKind."+this.b}}
A.p4.prototype={
gau(){return this.a}}
A.fY.prototype={
C(){var s=t.N
return A.F(["kind",this.a.b],s,s)}}
A.p7.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:78}
A.bE.prototype={}
A.lp.prototype={
C(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.F(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
nh(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ad(0,new A.k(0,1.3499999999999999,0))
return!new A.kk(s,s.a5(0,new A.k(0,1.2000000000000002,0))).d7(a,r)}}
A.rJ.prototype={
C(){return A.w2(this.a)}}
A.hk.prototype={
C(){return A.F(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.t6.prototype={
hu(a){var s,r,q,p,o,n,m,l=B.f.al(a,null),k=t.f
if(!k.b(l))throw A.b(B.is)
s=t.N
r=t.z
q=A.aW(l,s,r)
p=q.h(0,"version")
if(A.aX(p))o=p!==1&&p!==2
else o=!0
if(o)A.f(A.N("unsupported save version "+A.x(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.f(B.hB)
k=A.aW(n,s,r)
return A.B1(A.aW(m,s,r),k,2)}}
A.fd.prototype={}
A.dw.prototype={
B(){return"GameSessionEventType."+this.b}}
A.kN.prototype={
gau(){return this.c},
gaV(){return this.d}}
A.ps.prototype={
gau(){return this.a},
gaV(){return this.b}}
A.pr.prototype={
gah(){var s=this.d
return new A.ps(s.a,s.b,this.e.b.a)},
gia(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.F(["day",l.a,"hour",l.b],k,t.p)
s=m.f
r=t.K
s=A.F(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.F(["entryCount",m.e.b.a],k,t.S)
p=A.At(m.c).C()
o=m.r
n=o.c
return new A.rJ(A.w2(A.F(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.F(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.C()],k,t.z)))},
lx(a,b){if(!B.a.M(a.f,new A.pt(b)))return!1
this.z.lv(a,b)
return!0},
lw(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.n7(n))return!1
m=m.b
m.l(0,n,"true")
s=a.b
m.l(0,n+".consumer",s)
m.l(0,"last-authored-event",o)
if(s==="aftermath")m.l(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bB(q,"=")
if(p<=0||p===q.length-1)continue
m.l(0,B.c.H(q,0,p),B.c.aO(q,p+1))}return!0},
n3(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.q(s).i("ao<2>")
q=A.J(new A.ao(s,r),r.i("n.E"))
B.a.W(q,new A.pu())
if(q.length===0)return null
s=A.B(q)
r=s.i("I<1>")
p=A.J(new A.I(q,s.i("l(1)").a(new A.pv()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.ds(a),r=t.E,s=new A.ai(s,s.gu(0),r.i("ai<a2.E>")),r=r.i("a2.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.R(n,o.length)]
s=l.c
k=new A.cZ(a,l.a,s.length-1,B.a.ga6(s).q(0))
j.l(0,a,k)
return k},
ls(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.a6(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cL(B.iD)}if(n<a)this.cL(B.iE)},
j6(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dt(a)&&s.j5(b)},
o2(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.en){r.c=Math.min(1,r.c+0.1)
q.l(0,"ignored."+o.b+"."+o.c,"true")}}},
j2(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Ef(j,A.ad(i.d,h).length)
if(a===B.e3)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.B(r)
A.Ee(j,new A.I(r,q.i("l(1)").a(new A.pw(k)),q.i("I<1>")).gu(0))
r=k.f
q=r.b
if(B.a.p(B.jF,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.aK(j.a/1*3)
B.a.k(r.r,new A.hn(q.a,a,b))
m=r.a
A.Eq(m,q.a,n,k.b,A.ad(m.d,h));++q.a
q.eY(7)
r.c=16
r.d=6
r.f=!1
m.iO(B.ke)
s.r.lV(o,c)
l=B.b.aK(j.b/1*6)
if(l>0)r.dt(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ao(i,A.q(i).i("ao<2>")).M(0,new A.px())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cL(B.iI)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cL(B.iH)},
fP(a,b){var s,r=this;++r.y
s=r.d
B.a.k(r.w,new A.kN(s.a,s.b))
B.a.k(r.x,A.Eg(A.Hr(a),r.b,r.y-1))},
cL(a){return this.fP(a,null)}}
A.pt.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.pu.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:14}
A.pv.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:23}
A.pw.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.tZ().j_(this.a.c,a.a)},
$S:82}
A.px.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.ke.prototype={
eG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.f,b=A.B(c),a=b.i("e(1)")
b=b.i("H<1,e>")
A.k_(new A.H(c,a.a(new A.oe()),b),"level")
s=e.r
r=A.B(s)
q=r.i("e(1)")
r=r.i("H<1,e>")
A.k_(new A.H(s,q.a(new A.of()),r),"room")
p=e.w
o=A.B(p)
A.k_(new A.H(p,o.i("e(1)").a(new A.og()),o.i("H<1,e>")),"portal")
o=e.x
n=A.B(o)
A.k_(new A.H(o,n.i("e(1)").a(new A.oh()),n.i("H<1,e>")),"stair")
m=new A.H(c,a.a(new A.oi()),b).b7(0)
l=new A.H(s,q.a(new A.oj()),r).b7(0)
r=A.m(t.N,t.lT)
for(c=p.length,k=0;k<p.length;p.length===c||(0,A.r)(p),++k){j=p[k]
r.l(0,j.a,j)}for(c=s.length,k=0;k<s.length;s.length===c||(0,A.r)(s),++k){i=s[k]
b=i.b
if(!m.p(0,b))throw A.b(A.N("rooms."+i.a+".floor references unknown level "+b,d,d))
b=i.e
a=A.B(b)
q=i.a
A.k_(new A.H(b,a.i("e(1)").a(new A.ok()),a.i("H<1,e>")),"window in "+q)
a=i.f
A.k_(a,"portal reference in "+q)
for(b=a.length,h=0;h<a.length;a.length===b||(0,A.r)(a),++h){g=a[h]
j=r.h(0,g)
if(j==null)throw A.b(A.N("rooms."+q+".portalIds references unknown portal "+g,d,d))
if(!(j.b===q||j.c===q))throw A.b(A.N("rooms."+q+".portalIds references "+g+", which does not touch the room",d,d))}}for(c=p.length,k=0;k<p.length;p.length===c||(0,A.r)(p),++k){j=p[k]
b=j.b
if(b!=="outside"&&!l.p(0,b))throw A.b(A.N("portals."+j.a+".a references "+b,d,d))
a=j.c
if(a!=="outside"&&!l.p(0,a))throw A.b(A.N("portals."+j.a+".b references "+a,d,d))
if(b===a)throw A.b(A.N("portals."+j.a+" has identical endpoints",d,d))}for(c=o.length,k=0;k<o.length;o.length===c||(0,A.r)(o),++k){f=o[k]
b=f.b
j=r.h(0,b)
if(j==null)throw A.b(A.N("stairs."+f.a+".portalId references unknown portal "+b,d,d))
if(!j.z)throw A.b(A.N("stairs."+f.a+".portalId "+b+" is not marked stair",d,d))}},
eF(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.j("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.j("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.b(A.j("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.b(A.j("authored house story authority must remain external-story-data"))
a1=b.r
s=a1.length
if(s!==a2.b.length||b.w.length!==a2.c.length)throw A.b(A.j("authored/runtime room or portal count mismatch"))
for(r=t.h,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
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
if(Math.abs(g-j)>0.0001)A.f(A.j(n+" origin.x mismatch: "+A.x(g)+" != "+A.x(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.j(n+" origin.y mismatch: "+A.x(j)+" != "+A.x(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.j(n+" origin.z mismatch: "+A.x(l)+" != "+A.x(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.f(A.j(n+" size.x mismatch: "+A.x(g)+" != "+A.x(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.j(n+" size.y mismatch: "+A.x(j)+" != "+A.x(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.j(n+" size.z mismatch: "+A.x(l)+" != "+A.x(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.b(A.j("window count mismatch for "+n))
for(n=A.B(j),i=n.i("l(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.bH(new A.I(j,i.a(new A.od(e)),n),r)
if(d==null)throw A.b(A.j("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.f(A.j(c+" offset mismatch: "+A.x(h)+" != "+A.x(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.f(A.j(c+a+A.x(h)+" != "+A.x(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.f(A.j(c+a0+A.x(h)+" != "+A.x(g)))}}for(a1=b.w,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.b(A.j("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.j("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.f(A.j(q+a+A.x(n)+" != "+A.x(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.f(A.j(q+a0+A.x(n)+" != "+A.x(l)))
if(o.y!=m.at)throw A.b(A.j("door model mismatch for "+q))}a1=b.x
s=a2.d
if(a1.length!==s.length||B.a.gbe(a1).b!==B.a.gbe(s).b)throw A.b(A.j("stair manifest mismatch"))}}
A.o8.prototype={
$1(a){var s=A.jU(a,"level"),r=A.bR(s,"id")
A.bR(s,"kind")
A.eI(s,"floorY")
return new A.e8(r)},
$S:83}
A.o9.prototype={
$1(a){return A.DX(a,this.a)},
$S:84}
A.oa.prototype={
$1(a){var s=this.a,r=A.jU(a,"portal"),q=A.bR(r,"id"),p=A.bR(r,"a"),o=A.bR(r,"b"),n=A.zb(r,"facingA"),m=A.zb(r,"facingB"),l=A.eI(r,"offsetA"),k=A.eI(r,"offsetB"),j=A.eI(r,"width"),i=A.eI(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.t(r.h(0,"doorKit")):null
return new A.e9(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.aa(r.h(0,"stair"),!0),J.aa(r.h(0,"exterior"),!0),!J.aa(r.h(0,"open"),!1),J.aa(r.h(0,"sticks"),!0))},
$S:85}
A.ob.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.jU(a,"stair")
return new A.eb(A.bR(p,"id"),A.bR(p,"portalId"),A.Ib(p.h(0,s),s),A.nl(p.h(0,"min"),"min"),A.nl(p.h(0,"max"),"max"),A.nl(p.h(0,r),r),A.nl(p.h(0,q),q))},
$S:86}
A.oc.prototype={
$1(a){return typeof a=="string"?a:A.e_("exterior cell")},
$S:36}
A.oe.prototype={
$1(a){return t.mD.a(a).a},
$S:31}
A.of.prototype={
$1(a){return t.bJ.a(a).a},
$S:30}
A.og.prototype={
$1(a){return t.lT.a(a).a},
$S:90}
A.oh.prototype={
$1(a){return t.gI.a(a).a},
$S:91}
A.oi.prototype={
$1(a){return t.mD.a(a).a},
$S:31}
A.oj.prototype={
$1(a){return t.bJ.a(a).a},
$S:30}
A.ok.prototype={
$1(a){return t.ya.a(a).a},
$S:92}
A.od.prototype={
$1(a){return t.h.a(a).a===this.a.a},
$S:15}
A.xp.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fM
break A}if("first"===a){s=B.fN
break A}s=B.fO
break A}return s},
$S:94}
A.e8.prototype={
gE(){return this.a}}
A.ea.prototype={
gE(){return this.a}}
A.ol.prototype={
$1(a){var s=this.a,r=A.jU(a,"window")
return new A.ec(A.bR(r,"id"),A.zb(r,"facing"),A.eI(r,"offset")*s,A.eI(r,"sill")*s,A.eI(r,"width")*s,A.eI(r,"height")*s,J.aa(r.h(0,"frosted"),!0))},
$S:95}
A.om.prototype={
$1(a){return typeof a=="string"?a:A.e_("portal id")},
$S:36}
A.ec.prototype={
gE(){return this.a}}
A.e9.prototype={
gE(){return this.a}}
A.eb.prototype={
gE(){return this.a}}
A.x0.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.xl.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.kk.prototype={
op(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.B(s)
q=new A.I(s,r.i("l(1)").a(new A.oB(e)),r.i("I<1>"))
p=!q.gv(0).m()?null:q.ga_(0)
if(p==null){n.d=null
return}if(!(n.cJ(b,p.f)&&a==="hall"))o=n.cJ(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mh(p,B.b.t(d,0,1))},
nu(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.fI(g,c,d)
s=h.kb(a,b,c,d)
if(s!=null){h.d=s
return h.fI(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.hn(Math.sqrt(r*r+q*q)/0.08))
o=d.a8(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.ld(a,n,m,o)
l=l||j.b
m=j.a
i=h.o_(a,n)
n=i==null?n:i}h.bl(m)
return new A.lc(m,n)},
kb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cJ(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cJ(c,l)){l=j<0||o
h=l}if(i||h)return new A.mh(m,i?0:1)}return null},
fI(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ad(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.t(a.b+o/p,0,1)
n=A.Bg(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bl(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.lc(n,k)},
cJ(a,b){var s=a.ad(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
ld(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cR(c,!1)
s=h.cQ(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cQ(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cR(p.a,!1)
n=c.a5(0,new A.k(0,0.35,0))
h.bl(n)
if(!h.d7(a,b)){m=h.cQ(a,b,n,new A.k(g,0,0))
l=h.cQ(a,b,m.a,new A.k(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bl(i)
if(h.d7(a,b))break}h.bl(k)
return new A.cR(k,!1)}}if(o)return new A.cR(r,!0)
if(!p.b)return new A.cR(p.a,!0)
h.bl(c)
return new A.cR(c,!0)},
cQ(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cR(c,!1)
s=c.a5(0,d)
this.bl(s)
if(this.d7(a,b)){this.bl(c)
return new A.cR(c,!0)}return new A.cR(s,!1)},
bl(a){var s=a.ad(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.a5(0,new A.k(0,1.2000000000000002,0))},
d7(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.la(a,m,s)},
o_(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aG(k)
for(r=k.a,q=a.aQ(r),p=J.Q(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.cl(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hc(k,o,s)&&this.k_(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
la(a,b,c){var s,r,q
for(s=a.aQ(b.a),r=J.Q(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hc(b,q,c))return!0}return!1},
hc(a,b,c){var s,r,q,p=a.a,o=b.b3(p),n=b.aL(p)
p=o===B.z||o===B.q
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
k_(a,b,c){var s,r=this
switch(b.b3(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
slD(a){this.a=t.a7.a(a)}}
A.oB.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:96}
A.lc.prototype={}
A.cR.prototype={}
A.mh.prototype={}
A.ii.prototype={
gau(){return this.a}}
A.pW.prototype={
lV(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.V,r)
s=B.V[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
j0(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.c}return r},
j1(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.d}return r},
C(){return A.F(["landedCount",this.b],t.N,t.z)}}
A.a7.prototype={}
A.kE.prototype={
gnk(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a2(A.c([r,q,p,o,n,m],t.n),new A.p9())&&o>=r&&n>=q&&m>=p}}
A.p9.prototype={
$1(a){return isFinite(A.aF(a))},
$S:4}
A.kV.prototype={
A(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.R(s,3)!==0}else s=!0
if(s)throw A.b(A.o("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.o("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnk())throw A.b(A.o("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.M(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.pY()))throw A.b(A.o("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.o("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.o("QHMX index "+o+" exceeds vertex count",m))}}}
A.pY.prototype={
$1(a){return!isFinite(A.aF(a))},
$S:4}
A.pX.prototype={
D(a,b,c,d,e,f,g){var s=this
s.bG(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bG(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bG(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bG(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bG(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bG(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a7(a,b,c,m,n,o,0,0,p),r=new A.a7(g,h,i,m,n,o,1,1,p)
this.aq(s,new A.a7(d,e,f,m,n,o,1,0,p),r)
this.aq(s,r,new A.a7(j,k,l,m,n,o,0,1,p))},
aq(a,b,c){var s=this,r=s.b
B.a.k(r,s.dN(a))
B.a.k(r,s.dN(b))
B.a.k(r,s.dN(c))},
dN(a){var s,r,q=B.a.V(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.j("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
lI(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.kV(A.ad(g,t.hl),new Uint16Array(A.X(this.b)),new A.kE(s,r,q,p,o,n))
h.A()
return h}}
A.kF.prototype={}
A.yj.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ap.p(0,s))A.f(A.j("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:97}
A.xd.prototype={
$2(a,b){var s=t.Ez
return B.c.G(s.a(a).a,s.a(b).a)},
$S:98}
A.dh.prototype={
oG(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.l(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.k(i,p[n])}B.a.k(s,m)}return new A.jf(A.JM(new A.kV(i,new Uint16Array(A.X(s)),A.H9(i))),l.a,l.b,l.c,A.c([],k))}}
A.jf.prototype={}
A.eW.prototype={
B(){return"ExteriorCameraBand."+this.b}}
A.kG.prototype={
lP(a){var s
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
lQ(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cF
break A}if("kitchen"===a||"cellar"===a){s=B.fJ
break A}if("bathroom"===a){s=B.fK
break A}if("spare-room"===a){s=B.fL
break A}s=B.cF
break A}return this.lP(s)},
hL(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bF(this.mZ(d.i("e(0)").a(a),b,c,d),d.i("bF<0>"))},
mZ(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$hL(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a2(0,B.ap.gaC(B.ap)))throw A.b(A.o("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bU(l,l.r,l.e,r.$ti.i("bU<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ap.p(0,j))throw A.b(A.j("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eC.prototype={
hq(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.wO.prototype={
$1(a){var s=this
return t.xT.a(a).hq(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:32}
A.wN.prototype={
$1(a){return t.xT.a(a).hq(0,(this.a+this.b)*0.5,this.c)},
$S:32}
A.dv.prototype={
B(){return"FocusKind."+this.b}}
A.el.prototype={
gE(){return this.b}}
A.t3.prototype={}
A.vY.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:100}
A.xa.prototype={
$1(a){return B.d.t(B.b.aK(a*this.a),0,255)},
$S:101}
A.eB.prototype={}
A.pU.prototype={
na(){var s,r,q,p,o,n,m=this
m.kj()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.j("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.j("authored portal endpoint missing: "+o.a))}},
kj(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.K(n))throw A.b(A.j("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.K(n))throw A.b(A.j("duplicate portal "+n))
q.l(0,n,m)}},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.k(s.a+r.j0(q),s.b+r.j1(q),s.c)},
aQ(a){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qa(a)),r.i("I<1>"))},
nZ(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.a6(a,"roomId","not a portal endpoint"))
r=this.aG(o)
q=b.aL(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.b3(a).a){case 0:s=new A.k(s.a+q,p,s.c)
break
case 2:s=new A.k(s.a+q,p,s.c+r.c)
break
case 1:s=new A.k(s.a+r.a,p,s.c+q)
break
case 3:s=new A.k(s.a,p,s.c+q)
break
default:s=null}return s},
i6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a1
s=A.c([new A.a9(a,B.a1)],t.nR)
r=A.aI([a],t.N)
for(q=this.e,p=t.W;s.length!==0;){o=B.a.o5(s,0)
n=o.a
m=o.b
for(l=this.aQ(n),k=J.Q(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.cl(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.J(m,p)
h.push(j)
B.a.k(s,new A.a9(i,h))}}}return B.a1}}
A.qa.prototype={
$1(a){var s
t.W.a(a)
s=this.a
return a.b===s||a.c===s},
$S:102}
A.p8.prototype={}
A.tZ.prototype={
j_(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a2(s,new A.u_())}else s=!1
return s}}
A.u_.prototype={
$1(a){return t.h.a(a).w},
$S:15}
A.pZ.prototype={
i7(a){var s=this.e,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.q1(a)),r.i("I<1>"))},
gja(){var s,r,q,p,o,n=t.N,m=t.S,l=A.F(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].f
o=l.h(0,p)
l.l(0,p,(o==null?0:o)+1)}return A.aT(l,n,m)},
bJ(a){return B.a.b4(this.d,new A.q_(a),new A.q0(a))},
eF(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="inventory placement ",a5=a3.a
if(a5!==1)throw A.b(A.j("unsupported house inventory schema "+a5))
a5=a3.b
if(a5!=="assets/house/house.json")throw A.b(A.j("inventory source changed: "+a5))
a5=a3.c
if(Math.abs(a5-2.25)>0.0001)throw A.b(A.j("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.Y(s)
for(q=a3.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.b(A.j("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.j("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aI(["production","proxy","invisible-anchor"],s).p(0,l))throw A.b(A.j("invalid inventory asset status "+m+": "+l))}j=A.Y(s)
i=A.Y(s)
h=A.Y(s)
for(s=a3.e,q=s.length,p=a6.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){g=s[o]
m=g.a
if(!j.k(0,m))throw A.b(A.j("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.b(A.j(a4+m+" references "+l))
n=a3.bJ(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.DF()
if(!e.b.test(k))throw A.b(A.j("invalid inventory focusId "+m+": "+k))
if(!h.k(0,k))throw A.b(A.j("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.b(A.j("invalid clearance for "+m))
e=g.Q
d=!0
if(isFinite(e))if(!(e<0))if(isFinite(g.as)){c=g.at
if(isFinite(c))if(isFinite(g.ax))if(!(c<0))e=e>0&&c<=0
else e=d
else e=d
else e=d}else e=d
else e=d
else e=d
if(e)throw A.b(A.j("invalid thermal source for "+m))
e=g.e
if(e!=null&&!i.k(0,l+":"+e))throw A.b(A.j("duplicate inventory socket "+l+":"+e))
l=g.f.a
e=l.a*a5
d=l.b*a5
l=l.c*a5
b=g.ih(n,a5)
a=g.eB(n,a5)
a0=0.43+k
k=b.a
c=-a0
a1=!0
if(!(e-k<c)){a2=f.c
if(!(e+k>a2.a+a0)){k=b.c
l=l-k<c||l+k>a2.c+a0||d+a.b>a2.b+a0||d+a.a<c}else l=a1}else l=a1
if(l)throw A.b(A.j(a4+m+" escapes "+f.a))}}}
A.q1.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:103}
A.q_.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:104}
A.q0.prototype={
$0(){return A.f(A.j("inventory asset missing: "+this.a))},
$S:7}
A.d5.prototype={
gE(){return this.a}}
A.cG.prototype={
ih(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.k(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
eB(a,b){var s=this.f.c.b*b,r=a.r
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.qk.prototype={}
A.qi.prototype={}
A.xk.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.qj.prototype={
C(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.q(o).i("ac<1>")
n=A.J(new A.ac(o,n),n.i("n.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.l(0,q,o.h(0,q))}return p},
ey(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.h3)
s=t.X
r=A.aW(a,s,s)
s=this.a
s.N(0)
for(q=new A.M(r,A.q(r).i("M<1,2>")).gv(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aX(o)||o<0)throw A.b(B.hq)
s.l(0,n,o)}}}
A.dH.prototype={}
A.q2.prototype={
oE(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fv(a5,a5.r,A.q(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.r)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aG(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.k(a,a0,a1).gu(0)
if(a2>0.0001){a3=1/a2
a4=new A.k(a*a3,a0*a3,a1*a3)}else a4=new A.k(0,-1,0)
B.a.k(s,new A.dH(new A.k(d,c,e),a4,16760952,3.8,2.1*this.l1(k),80,180,0.12))}}B.a.W(s,new A.q3(a6))
return A.hq(s,0,A.e3(4,"count",t.S),t.A_).bD(0)},
l1(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.q3.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.G(a.a.ad(0,s).gu(0),b.a.ad(0,s).gu(0))},
$S:106}
A.ek.prototype={
B(){return"Floor."+this.b}}
A.ej.prototype={
B(){return"Facing."+this.b}}
A.fo.prototype={
siZ(a){this.w=A.R(a)},
gE(){return this.a}}
A.c7.prototype={
cl(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
b3(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.a6(a,"roomId","not an endpoint of "+s.a))},
aL(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.a6(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.l7.prototype={
gE(){return this.a}}
A.fh.prototype={
gE(){return this.a}}
A.fc.prototype={
gE(){return this.a}}
A.q5.prototype={
mQ(a){return B.a.b4(this.c,new A.q6(a),new A.q7(a))},
oB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.j("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.j("soundscape source changed: "+f))
f=t.N
s=A.Y(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){m=r[p]
l=m.a
if(!s.k(0,l))throw A.b(A.j("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.b(A.j("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.b(A.j("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.b(A.j("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaj().M(0,new A.q8()))throw A.b(A.j("sound emitter "+l+" has no usable cues"))
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
A.q6.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:107}
A.q7.prototype={
$0(){return A.f(A.j("sound emitter missing: "+this.a))},
$S:7}
A.q8.prototype={
$1(a){return B.c.aY(A.t(a)).length===0},
$S:3}
A.d4.prototype={
gE(){return this.a}}
A.pV.prototype={
c5(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a6(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.ko}q=A.c([],t.Fm)
p=B.b.aT(r)+1
o=B.b.aT(b)
for(n=p;n<=o;++n){m=B.d.R(n,24)
B.a.k(q,new A.f0("tick",m))
if(B.d.R(m,3)===0){B.a.k(q,new A.f0("cuckoo",m))
B.a.k(q,new A.f0("bell",m))}if(B.d.R(m,6)===0)B.a.k(q,new A.f0("chime",m))}l.b=b
return q}}
A.f0.prototype={
gaV(){return this.b}}
A.q4.prototype={
c5(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a6(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.kn}q=A.c([],t.op)
for(p=B.b.aT(r)+1;p<=B.b.aT(b);++p){o=B.d.R(p,24)
n=B.d.R(o,4)
if(n===2)B.a.k(q,B.j9)
if(B.d.R(o,3)===1)B.a.k(q,B.jb)
if(B.d.R(o,8)===5)B.a.k(q,B.je)
if(B.d.R(o,5)===0)B.a.k(q,B.ja)
if(B.d.R(o,7)===3)B.a.k(q,B.jf)
if(n===1)B.a.k(q,B.jc)
if(B.d.R(o,6)===4)B.a.k(q,B.jd)}m.b=b
return q}}
A.d3.prototype={}
A.xj.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.q9.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.F(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.F(["lit",o.a,"examined",o.b],m,r))}return A.F(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.Y(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.k(0,s[q].a)
r=A.Y(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.k(0,n[l].a)
e=A.Y(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.zv(new A.ac(o,A.q(o).i("ac<1>")),d)){d=f.b
if(A.zv(new A.ac(d,A.q(d).i("ac<1>")),r)){d=f.c
e=!A.zv(new A.ac(d,A.q(d).i("ac<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.hW)
e=f.d
if(e<0||e>2)A.f(B.hc)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.r)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.r)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.iC.prototype={
C(){return A.F(["open",this.a,"locked",this.b],t.N,t.y)}}
A.iq.prototype={
C(){return A.F(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.by.prototype={
gE(){return this.a}}
A.p3.prototype={
$1(a){return this.a.p(0,A.t(a))},
$S:3}
A.en.prototype={
B(){return"Hand."+this.b}}
A.uF.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
eX(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.l6.prototype={
C(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.C[r]
o.l(0,q,s.h(0,q))}return A.F(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
q(a){return new A.H(B.C,t.oI.a(new A.qE(this)),t.jT).V(0," \xb7 ")}}
A.qD.prototype={
$2(a,b){return new A.O(A.t(a),A.t(b),t.q)},
$S:108}
A.qE.prototype={
$1(a){return this.a.a.h(0,A.t(a))},
$S:109}
A.c2.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.F(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gau(){return this.b}}
A.qn.prototype={
c8(a){t.G.a(a)
return a.a===5&&B.a.a2(B.C,new A.qu(this,a))},
f8(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.c8(b))return null
s=this.e++
r=new A.c2(s,a,A.c([A.qC(b,c,d)],t.Bv),e,!1,null,null)
this.b.l(0,s,r)
return r},
e2(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.c8(b))return!1
B.a.k(s.c,A.qC(b,c,B.aH))
return!0},
lr(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.c8(b))return!1
s.r=A.qC(b,0,B.d3)
return!0},
iO(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.N(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.K(p)&&!B.a.p(s,p))B.a.k(s,p)}},
oD(a){var s
if(!this.b.K(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.q(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ae(r,r.r,r.e,A.q(r).i("ae<2>"));r.m();)s.push(r.d.C())
return A.F(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.qu.prototype={
$1(a){var s
A.t(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.hZ.prototype={
C(){var s,r=this,q=A.m(t.N,t.X)
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
A.on.prototype={
cv(a){var s,r,q=a==null?null:B.c.aY(a).toLowerCase()
if(q==null||q.length===0)return B.eK
if(q==="pixeldart")return B.eJ
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.hZ(B.aP,!1,!0,r,s,s?r:null)}}
A.iE.prototype={}
A.rC.prototype={
C(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gaj(),s=s.gv(s),r=t.N;s.m();){q=s.gn()
p.push(A.F(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.F(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.x9.prototype={
$1(a){A.t(a)
return a.length!==0&&a!==".."},
$S:3}
A.iF.prototype={}
A.lu.prototype={}
A.rE.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.rF.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.rw.prototype={}
A.rv.prototype={
ghv(){var s,r,q="pixeldart",p=this.b,o=p.aH
if(o){s=p.w
s===$&&A.p()
s=s.a.b}else s="safe"
p=A.AY(q,o?p.glM():B.kM,!1,s)
r=p
if(r==null)r=A.AY(q,A.c([],t.s),!1,"safe")
p=A.AX(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
f1(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bK){if(k.aH){s=k.d
s===$&&A.p()
s=s.a.b===B.a0}else s=!1
s=!s
if(s){m.d=B.X;++k.eg
j=B.X}if(j===B.bK)return}if(j!==B.X)A.f(A.j(l))
B.f.a1(A.F(["backend","pixeldart","interpolation",0,"facts",A.w2(a.a.a)],t.N,t.X),null)
j=k.aH
if(j){s=k.d
s===$&&A.p()
s=s.a.b===B.a0}else s=!1
if(s){if(m.d!==B.X)A.f(A.j(l))
m.d=B.bK
return}if(!j)A.f(A.j("Pixeldart runtime is not initialized"))
j=k.rx
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.dF(j)
j=$.A_()
s=j.b
q=j.c
p=A.yD(k.b/k.c,q,j.a,s)
q=new A.fM(r,p,p.a8(0,r),B.u,B.o6,s,q,k.b/k.c)
j=q}o=new A.kK(j,k.ry,k.to,-1,k.mW++,k.eg,k.eh,k.ef)
n=new A.u4()
$.zV()
j=$.rM.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.p()
s=k.f
s===$&&A.p()
k.l9(j.lE(s,o),o)
k.d2=k.e.mS()
j=$.rM.$0()
n.b=j
k.d3=n.gmP()/1000},
hQ(a){if(this.d!==B.X)A.f(A.j("pixeldart backend is not ready"))
B.f.a1(A.F(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.rx.prototype={
lN(a,b){var s,r,q,p,o,n,m
a.A()
s=B.co.cv(a)
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
o=A.J(o,A.q(o).c)
B.a.X(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.r)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.ln.prototype={
B(){return"PixeldartQualityTier."+this.b}}
A.ry.prototype={
C(){var s=this
return A.F(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.rz.prototype={
hp(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.o("surface dimensions must be positive",null))
s=a1.a
A:{if(B.F===s){r=new A.fx(1080,1920)
break A}if(B.M===s){r=new A.fx(720,1280)
break A}r=new A.fx(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.aK(r.b*q)
q=B.b.aK(r.a*q)
o=B.b.t(a5/p,0,1)
n=B.b.t(a4/q,0,1)
m=o<n?o:n
r=this.fa(B.b.aK(p*m),320,a5)
q=this.fa(B.b.aK(q*m),180,a4)
l=s===B.F
k=s===B.M
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
break E}g=a0==="linear"?B.fn:B.b4
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.fy
break F}if("errors"===b){c=B.cw
break F}c=B.fz
break F}return new A.iK(a1,r,q,h,g,i,p,f,e,d,c)},
fa(a,b,c){if(c<b)return c
return B.d.t(a,b,c)}}
A.rA.prototype={}
A.he.prototype={}
A.rB.prototype={}
A.rD.prototype={
d9(a,b,c,d){return this.no(a,t.zL.a(b),c,d)},
no(a,b,c,d){var s=0,r=A.aO(t.c_),q,p,o,n,m
var $async$d9=A.aP(function(e,f){if(e===1)return A.aL(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a5(B.fa.d8(new A.r8(d,b),B.le),$async$d9)
case 3:p=new o.iF(n,m,f)
A.AP(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aM(q,r)}})
return A.aN($async$d9,r)}}
A.rG.prototype={}
A.rH.prototype={
ck(a,b,c){return this.np(a,t.xJ.a(b),t.tX.a(c))},
np(a,b,c){var s=0,r=A.aO(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$ck=A.aP(function(d,e){if(d===1)return A.aL(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.ga4(),o=o.gv(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gn()
l=p.h(0,m)
if(l==null)l=A.f(A.j("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a5(b.$1(l.c),$async$ck)
case 5:k=i.F2(h.a(g.al(e,null)))
m=l.a
if(k.b!==m)throw A.b(A.N("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.b(A.N("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a5(B.fd.d9(m,new A.rI(c,l),l.b,k),$async$ck)
case 6:i.k(h,e)
s=3
break
case 4:q=new A.lu(A.AP(j))
s=1
break
case 1:return A.aM(q,r)}})
return A.aN($async$ck,r)}}
A.rI.prototype={
$1(a){return this.a.$2(this.b.a,A.t(a))},
$S:110}
A.ip.prototype={
ghU(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gmH(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.rP.prototype={
oz(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bh
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bh
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.ip(!0,B.b.t(q*(0.6+b*0.6),0,1),0.82+s.az()*0.1,0.9+s.az()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
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
l.z=new A.ip(!0,B.b.t(0.6+b*0.6,0,1),0.82+s.az()*0.1,0.9+s.az()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.az()*6}}}
A.lB.prototype={
B(){return"RendererBackendKind."+this.b}}
A.hh.prototype={
B(){return"RendererBackendState."+this.b}}
A.t1.prototype={}
A.lC.prototype={
gE(){return this.a}}
A.t0.prototype={
jr(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.o("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.o("renderer provenance values must be non-empty",null))}},
C(){var s,r,q,p=this,o=A.m(t.N,t.z)
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
A.t2.prototype={
dj(a,b){if(a<=0||b<=0)throw A.b(A.o("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
hW(a,b){var s,r,q,p,o
for(s=A.ad(this.a.d,t.rO),r=A.B(s).i("bK<1>"),s=new A.bK(s,r),s=new A.ai(s,s.gu(0),r.i("ai<Z.E>")),r=r.i("Z.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.tQ.prototype={
ly(a){var s,r,q,p,o,n,m,l,k=this.a
k.N(0)
s=a.w
s===$&&A.p()
r=A.B(s)
q=r.i("l(1)").a(new A.tR())
s=B.a.gv(s)
r=new A.T(s,q,r.i("T<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gn()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.l(0,n,A.F(["requested",l,"effective",o],q,p))}}}
A.tR.prototype={
$1(a){return t.r.a(a).Q===B.x},
$S:9}
A.lM.prototype={
B(){return"ShaderDebugMode."+this.b},
gmF(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.iQ.prototype={
B(){return"ShaderTuningAvailability."+this.b}}
A.dc.prototype={
B(){return"ShaderTuningCategory."+this.b}}
A.cp.prototype={
gn0(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.I(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.I(r,2)
else return B.b.I(r,3)}},
ge6(){var s,r,q=this
if(q.Q!==B.x)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.I(r,1)
if(s>=0.01)return B.b.I(r,2)
return B.b.I(r,3)},
gE(){return this.a}}
A.tS.prototype={
gbq(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.d(B.al,p)
s=B.al[p]
p=this.w
p===$&&A.p()
r=A.B(p)
q=r.i("I<1>")
p=A.J(new A.I(p,r.i("l(1)").a(new A.tX(s)),q),q.i("n.E"))
return p},
gbL(){var s,r=this.gbq(),q=r.length
if(q===0)return null
s=B.d.t(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
n9(){var s,r
if(this.b===5)return
else{s=this.gbL()
r=s==null?null:s.Q===B.x
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.t(s.y+s.w,s.f,s.r)}},
mA(){var s,r
if(this.b===5)return
else{s=this.gbL()
r=s==null?null:s.Q===B.x
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.t(s.y-s.w,s.f,s.r)}},
o9(){var s,r,q,p,o
if(this.b===5)this.e=B.aS
else for(s=this.gbq(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
o7(){var s,r,q,p
this.e=B.aS
s=this.w
s===$&&A.p()
r=0
for(;r<50;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
oh(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
t.Q.a(d)
t.gG.a(c)
t.m0.a(b)
t.G.a(e)
s=l.w
s===$&&A.p()
r=0
for(;r<50;++r){q=s[r]
p=q.a
o=d.p(0,p)
n=e.h(0,p)
m=c.h(0,p)
p=b.h(0,p)
q.Q=o?B.x:B.e2
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.aS},
mC(){var s,r,q,p=this.w
p===$&&A.p()
s=A.B(p)
s=new A.I(p,s.i("l(1)").a(new A.tT()),s.i("I<1>")).gu(0)
r=A.B(p)
r=new A.I(p,r.i("l(1)").a(new A.tU()),r.i("I<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.d(B.al,p)
p=B.al[p]
q=this.gbL()
q=q==null?null:q.a
return A.F(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
ik(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.p()
j=A.J(j,t.r)
B.a.W(j,new A.tY())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.r)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.x)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.F(["id",m.a,"requested",k,"effective",l],p,o))}return A.F(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
gnt(){var s,r,q,p=A.c([],t.s),o=this.w
o===$&&A.p()
s=0
for(;s<50;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.X(p)
return p},
T(a){var s,r,q=this.w
q===$&&A.p()
s=A.B(q)
r=A.bH(new A.I(q,s.i("l(1)").a(new A.tW(a)),s.i("I<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
cs(a){var s,r,q=this.w
q===$&&A.p()
s=A.B(q)
r=A.bH(new A.I(q,s.i("l(1)").a(new A.tV(a)),s.i("I<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.tX.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:9}
A.tT.prototype={
$1(a){return t.r.a(a).Q===B.x},
$S:9}
A.tU.prototype={
$1(a){return t.r.a(a).Q!==B.x},
$S:9}
A.tY.prototype={
$2(a,b){var s=t.r
return B.c.G(s.a(a).a,s.a(b).a)},
$S:112}
A.tW.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.tV.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.u3.prototype={
$1(a){var s,r=Math.cos(0.8988445647770796)*Math.cos(a)
if(Math.abs(r)<1e-12)return 0
s=(Math.sin(-0.014538592669112763)-Math.sin(0.8988445647770796)*Math.sin(a))/r
if(s<=-1)return 24
if(s>=1)return 0
return Math.acos(s)*24/3.141592653589793},
$S:113}
A.bY.prototype={
B(){return"SleepQuality."+this.b}}
A.bM.prototype={
B(){return"SleepLocation."+this.b}}
A.hn.prototype={
gau(){return this.a}}
A.oX.prototype={
dt(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
j5(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.F(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.F(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.oY.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:114}
A.oZ.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:115}
A.kZ.prototype={
B(){return"InteractionType."+this.b}}
A.fq.prototype={
B(){return"WorldComparisonKind."+this.b}}
A.uY.prototype={}
A.fp.prototype={}
A.ko.prototype={}
A.qb.prototype={}
A.qf.prototype={
eN(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.W(p,new A.qg())
return p},
lU(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.oV
s=t.N
r=A.Y(s)
q=A.Y(s)
for(s=n.ga4(),s=s.gv(s),p=a.c;s.m();){o=s.gn()
if(B.a.ga6(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.fp(B.aU,r)
s=r.a
o=B.a.ga6(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.ga6(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.fp(B.er,r)
return new A.fp(B.c9,r)},
kR(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.ko(e,!1,B.oU,null)
s=q.d===c
r=this.lU(q,d)
this.d.$1(e)
return new A.ko(e,s,r,r.a===B.aU&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga6(q.c).q(0)+'".':null)},
mt(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aU)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.qb(B.a.ga6(s.c).q(0)+" but "+A.x(a.f))}}
A.qg.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:14}
A.co.prototype={
B(){return"RuptureStep."+this.b}}
A.t4.prototype={}
A.da.prototype={}
A.t5.prototype={
geZ(){var s=B.bA.h(0,this.a)
return s==null?0:s},
j9(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.G)s=q.e
else s=!0
if(s)return B.di
r=A.ze(b)
s=q.c
B.a.N(s)
B.a.J(s,r)
B.a.N(q.d)
q.a=B.aQ
q.b=0
q.e=!1
return A.c([B.fg],t.xB)},
dX(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.o("rupture advance must be a finite non-negative duration",null))
if(l.a===B.G||a===0)return B.di
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.G))break
A:{q=l.a
p=B.bA.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a7)l.lf(s)
p=l.b
o=B.bA.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.da())
if(q===B.a7){l.a=B.G
l.b=0
l.e=!0
B.a.k(s,B.ff)}else{p=q.a+1
if(!(p<7))return A.d(B.dd,p)
l.a=B.dd[p]
l.b=0
B.a.k(s,new A.da())}}}return A.ad(s,t.F3)},
C(){var s=this,r=t.N
return A.F(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ad(s.c,r),"extinguishedMantles",A.ad(s.d,r),"completed",s.e],r,t.z)},
lf(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.t(B.b.aT(l.b/l.geZ()*A.ad(s,r).length),0,A.ad(s,r).length)
p=l.d
for(;;){o=A.aC(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aC(s,!1,r)
o.$flags=3
n=o
o=A.aC(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.da())}}}
A.kO.prototype={
gf2(){var s=this.b
if(s<7||s>19)return 0
return B.b.t((s-7)/12,0,1)},
gmv(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.t((s-5.5)/15,0,1))},
eY(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.N("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
ig(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.N("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.eu.prototype={
B(){return"PrecipitationKind."+this.b}}
A.fm.prototype={
C(){var s=this
return A.F(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gau(){return this.a}}
A.uR.prototype={
hM(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.b0(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.wP.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.t(B.b.t(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nh(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.nh(q,p)&255)/255:1.2+(A.nh(q,p)&255)/255*0.8
p=A.nh(q,k+211)
q=A.nh(q,k+307)
n=A.nm(B.b.I(s,2))
m=A.nm(B.b.I(12-r*0.11000000000000001,2))
l=A.nm(B.b.I(o,2))
p=A.nm(B.b.I((p&65535)/65535*3.141592653589793*2,5))
q=A.nm(B.b.I(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fm(k,j,n,m,l,p,q,j?B.aL:B.w)},
$S:116}
A.j2.prototype={}
A.ey.prototype={}
A.uH.prototype={
C(){var s=this
return A.F(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.uQ.prototype={
C(){var s=this,r=s.b,q=t.N
return A.F(["precipitationKind",s.a.b,"windVelocityMps",A.F(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fn.prototype={}
A.fl.prototype={
A(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.jO(s)){r=q.c
if(A.jO(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.b(A.o("invalid weather collision box "+p,null))},
gE(){return this.a}}
A.ez.prototype={
B(){return"WeatherImpactResponse."+this.b}}
A.mc.prototype={}
A.hv.prototype={
hb(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.b(A.o("weather surface state must be finite and >= 0",null))}}
A.uS.prototype={
C(){var s=this
return A.F(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.eR.prototype={
B(){return"AuthoredEventConsumer."+this.b}}
A.pp.prototype={
oC(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.J0(s[q].b)},
n8(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.ds(a.a+":"+a.c),q=t.E,r=new A.ai(r,r.gu(0),q.i("ai<a2.E>")),q=q.i("a2.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.aK((l+(k-l)*(s/2147483647))*60)
n=B.b.hn(l*60)
m=B.b.aT(k*60)
return(n<=m?B.d.t(o,n,m):B.d.t(o,0,1439))/60},
hy(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
lL(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.pq.prototype={
$2(a,b){var s,r=B.d.G(a.gau(),b.gau())
if(r!==0)return r
s=B.b.G(a.gaV(),b.gaV())
return s!==0?s:J.A3(a.gE(),b.gE())},
$S:35}
A.kM.prototype={
c5(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.hy(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
if(s.n8(m,p)<=b&&o.k(0,m.a))B.a.k(l,m)}return l},
ghx(){return new A.bF(this.mV(),t.oe)},
mV(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$ghx(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.lo(o.hy(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gmB(){var s=this.c
s=A.J(s,A.q(s).c)
B.a.X(s)
return s},
C(){var s=this.c
s=A.J(s,A.q(s).c)
B.a.X(s)
return A.F(["delivered",s],t.N,t.z)}}
A.po.prototype={
$1(a){return this.a.lL(A.t(a))!=null},
$S:3}
A.r9.prototype={
aU(a,b){var s=this.b
if(s.K(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
n7(a){return this.aU(a,null)},
lv(a,b){var s,r,q=a.a
this.a.l(0,q,b.a)
s=this.b
s.l(0,"last-reaction",q)
for(q=b.d.gL(),q=q.gv(q);q.m();){r=q.gn()
s.l(0,r.a,r.b)}},
C(){var s,r,q,p,o,n,m,l,k=this.a,j=A.q(k).i("M<1,2>")
k=A.J(new A.M(k,j),j.i("n.E"))
B.a.W(k,new A.rb())
j=t.N
k=A.yC(k,j,j)
s=this.b
r=A.q(s).i("M<1,2>")
s=A.J(new A.M(s,r),r.i("n.E"))
B.a.W(s,new A.rc())
s=A.yC(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.q(q).i("M<1,2>")
q=A.J(new A.M(q,p),p.i("n.E"))
B.a.W(q,new A.rd())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.l(0,m.a,A.F(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.F(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.rb.prototype={
$2(a,b){var s=t.q
return B.c.G(s.a(a).a,s.a(b).a)},
$S:28}
A.rc.prototype={
$2(a,b){var s=t.q
return B.c.G(s.a(a).a,s.a(b).a)},
$S:28}
A.rd.prototype={
$2(a,b){var s=t.gJ
return B.c.G(s.a(a).a,s.a(b).a)},
$S:119}
A.cZ.prototype={
C(){var s=this
return A.F(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bA.prototype={
C(){var s=this
return A.F(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.rt.prototype={
eL(){var s,r,q,p,o,n,m,l="denise.pears",k=A.c([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m="aftermath."+B.c.aO(n.a,8)
if(p.K(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.k(k,n)}if(q.aU("ashworth.compact","accepted"))B.a.k(k,B.m4)
if(q.aU(l,"taken"))B.a.k(k,B.m8)
else if(q.aU(l,"left"))B.a.k(k,B.m5)
if(q.aU("sylvia.certificate","granted"))B.a.k(k,B.m7)
if(q.aU("residue.coal","cellar"))B.a.k(k,B.m3)
if(q.aU("telegram.08","read"))B.a.k(k,B.m2)
if(q.aU("truth.shawl","home"))B.a.k(k,B.m1)
if(q.aU("sowerby.paraffin","received"))B.a.k(k,B.m6)
if(q.aU("inspector.proclamation","acknowledged"))B.a.k(k,B.m0)
return k},
ix(a){var s=this.eL(),r=A.B(s),q=r.i("I<1>")
s=A.J(new A.I(s,r.i("l(1)").a(new A.ru(a)),q),q.i("n.E"))
return s}}
A.ru.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:49}
A.u6.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hp(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0);s.m();){r=s.d
q=r.a
a.l(0,q,e.lk(q,r.b))}s=A.hp(e.r)
q=A.hp(e.w)
p=A.hp(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.M(n,A.q(n).i("M<1,2>")).gv(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.Q(l.b);i.m();){h=i.gn()
j.push(A.F(["field",h.a,"value",h.b],c,c))}o.l(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.M(m,A.q(m).i("M<1,2>")).gv(0);m.m();){g=m.d
n.l(0,g.a,g.b.C())}b=A.m(c,b)
for(m=e.ax,m=new A.M(m,A.q(m).i("M<1,2>")).gv(0);m.m();){f=m.d
b.l(0,f.a,f.b.C())}return A.F(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
lk(a,b){var s,r=A.hp(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.hp(q.bs(0,new A.u7(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.ga3(s))r.l(0,"_ambient",A.hp(s.bs(0,new A.u8(),t.S,t.z)))
return r}}
A.u7.prototype={
$2(a,b){return new A.O(A.h(a),t.BX.a(b).C(),t.pr)},
$S:121}
A.u8.prototype={
$2(a,b){return new A.O(A.h(a),t.vw.a(b).C(),t.pr)},
$S:122}
A.fk.prototype={
C(){return A.F(["hour",this.a,"order",this.b],t.N,t.S)},
gaV(){return this.a}}
A.fj.prototype={
C(){return A.F(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaV(){return this.a}}
A.j0.prototype={
C(){var s=t.N
return A.F(["field",this.a,"value",this.b],s,s)}}
A.ma.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].C())
return A.F(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gau(){return this.c}}
A.fa.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"label",r.b)
q.l(0,"reply",r.c)
s=r.d
if(s.ga3(s))q.l(0,"effects",s)
return q},
gE(){return this.a}}
A.dg.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"target",r.b)
q.l(0,"replacement",r.c)
s=r.d
if(s.ga3(s))q.l(0,"when",s)
return q},
gE(){return this.a}}
A.u5.prototype={}
A.hl.prototype={
gE(){return this.a},
gau(){return this.c},
gaV(){return this.d}}
A.tb.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.tc.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.f(A.N("screenplay event "+a+" is invalid",null,null))
return s},
$S:26}
A.lJ.prototype={
gE(){return this.a},
gau(){return this.b}}
A.lG.prototype={}
A.lH.prototype={
gE(){return this.a}}
A.lI.prototype={
gE(){return this.a}}
A.u9.prototype={
bc(){var s=0,r=A.aO(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bc=A.aP(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
l=null
s=A.dR().gaX().h(0,"dialogueSource")==="api"?6:7
break
case 6:q=9
s=12
return A.a5(A.az(A.a(A.a(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$bc)
case 12:k=a3
s=A.R(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a5(A.az(A.a(k.text()),f),$async$bc)
case 15:e=a1.al(a3,null)
d=t.f
if(!d.b(e)||!J.aa(e.h(0,"schema"),"quarantine.dialogue.v1")||!d.b(e.h(0,"corpus"))||!d.b(e.h(0,"screenplay")))A.f(B.hu)
l=A.aW(e,f,t.z)
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
case 16:m=B.f.a1(l.h(0,"corpus"),null)
n=B.f.a1(l.h(0,"screenplay"),null)
s=17
break
case 18:s=19
return A.a5(A.az(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$bc)
case 19:j=a3
s=20
return A.a5(A.az(A.a(j.text()),t.N),$async$bc)
case 20:m=a3
case 17:i=A.Jd(m)
f=J.aZ(i,"broadcasts")
f.toString
d=t.P
o.a=d.a(f)
f=J.aZ(i,"visitors")
f.toString
o.b=d.a(f)
f=J.aZ(i,"vocabulary")
f.toString
o.c=d.a(f)
f=J.aZ(i,"documents")
f.toString
d.a(f)
f=J.aZ(i,"street")
f.toString
d.a(f)
f=J.aZ(i,"unverifiables")
f.toString
o.f=d.a(f)
f=J.aZ(i,"nights")
f.toString
d.a(f)
f=J.aZ(i,"endings")
f.toString
o.w=d.a(f)
f=J.aZ(i,"records")
f.toString
o.x=d.a(f)
f=J.aZ(i,"cues")
f.toString
d.a(f)
f=J.aZ(i,"claims")
f.toString
o.z=d.a(f)
f=t.f
if(f.b(J.aZ(i,"reactions"))){b=J.aZ(i,"reactions")
if(b==null)b=f.a(b)
b=A.aW(b,t.N,t.z)}else b=A.m(t.N,t.z)
o.Q=d.a(b)
if(f.b(J.aZ(i,"variants"))){b=J.aZ(i,"variants")
if(b==null)b=f.a(b)
b=A.aW(b,t.N,t.z)}else b=A.m(t.N,t.z)
o.as=d.a(b)
if(f.b(J.aZ(i,"residues"))){b=J.aZ(i,"residues")
f=b==null?f.a(b):b
f=A.aW(f,t.N,t.z)}else f=A.m(t.N,t.z)
o.at=d.a(f)
s=n==null?21:23
break
case 21:s=24
return A.a5(A.az(A.a(A.a(v.G.window).fetch("res/story_script.json")),t.m),$async$bc)
case 24:s=22
break
case 23:a3=null
case 22:h=a3
if(n==null){f=h
f=(f==null?null:A.R(f.ok))===!0}else f=!0
s=f?25:26
break
case 25:f=n
a1=A
s=f==null?27:29
break
case 27:s=30
return A.a5(A.az(A.a(h.text()),t.N),$async$bc)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.FK(a3)
o.ax=f
o.ay=A.ED(f)
case 26:q=1
s=5
break
case 3:q=2
a0=p.pop()
g=A.ak(a0)
f=A.x(g)
throw A.b("Failed to load text.json: "+f)
s=5
break
case 2:s=1
break
case 5:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$bc,r)},
iw(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.q(a))
if(t.f.b(s)){p=s.gL().dl(0,new A.ua())
r=p.$ti
q=t.N
return A.yC(new A.cJ(p,r.i("O<e,e>(1)").a(new A.ub()),r.i("cJ<1,O<e,e>>")),q,q)}return null},
eM(a,b){var s=this.iw(a)
return s==null?null:s.h(0,b)},
iA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.p()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.Q(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.m(n,n)
if(f.b(l))for(j=l.gL(),j=j.gv(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.l(0,h,A.t(i.b))}B.a.k(p,new A.fa(A.t(m.h(0,"id")),A.t(m.h(0,"label")),A.t(m.h(0,"reply")),A.aT(k,n,n)))}if(p.length<2)return g
return new A.ma(r,a,b,c,d,A.ad(p,t.Y))},
iz(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.q(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aE(p)||o!==B.b.aE(o))return n
return new A.fk(B.b.aE(p),B.b.aE(o))},
iy(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.q(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.aE(p)||typeof o!="string"||typeof n!="string")return m
return new A.fj(B.b.aE(p),o,n)},
oF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.M(b4,A.q(b4).i("M<1,2>")).gv(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gL(),o=o.gv(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dI(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gL(),m=m.gv(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.t(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a6.l(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("bU<1>"),l=new A.bU(n,n.r,n.e,m);l.m();){i=l.d
g=a1.iz(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a7.l(0,o,h)
f=A.m(a3,s)
for(m=new A.bU(n,n.r,n.e,m);m.m();){l=m.d
e=a1.iy(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a8.l(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.ae(b4,b4.r,b4.e,A.q(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.iA(A.t(d.h(0,"visitor")),B.b.aE(A.a0(d.h(0,"day"))),A.t(d.h(0,"tier")),B.b.aE(A.a0(d.h(0,"ordinal"))))
if(c!=null)b1.l(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.ae(b4,b4.r,b4.e,A.q(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gL(),s=s.gv(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.l(0,o,A.t(r.b))}s=A.t(d.h(0,"id"))
b2.l(0,s,new A.dg(s,A.t(d.h(0,"target")),A.t(d.h(0,a2)),A.aT(b,a5,a5)))}b4=a1.at
b4===$&&A.p()
b4=new A.M(b4,A.q(b4).i("M<1,2>")).gv(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.l(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.M(b4,A.q(b4).i("M<1,2>")).gv(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.Q(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.j0(A.t(a0.h(0,"field")),A.t(a0.h(0,"value"))))}if(o.length!==0)b0.l(0,p.a,o)}return new A.u6(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.ua.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:124}
A.ub.prototype={
$1(a){t.AC.a(a)
return new A.O(A.t(a.a),A.t(a.b),t.q)},
$S:125}
A.k4.prototype={
bQ(a,b,c){var s=B.c.aY(a),r=B.c.aY(c)
if(r.length===0)return""
if(b||this.a===B.cb)return s.length===0?r:s+": "+r
if(this.a===B.ca)return r
return s.length===0?r:s+": "+r},
hN(a,b){return this.bQ(a,!1,b)}}
A.yq.prototype={}
A.cX.prototype={
B(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.e5.prototype={
c9(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.e5(q,p,o,n,m)},
ml(a){var s=null
return this.c9(s,s,s,a,s)},
mr(a){var s=null
return this.c9(s,s,s,s,a)},
mh(a){var s=null
return this.c9(s,s,a,s,s)},
mf(a){var s=null
return this.c9(s,a,s,s,s)},
lX(a){var s=null
return this.c9(a,s,s,s,s)},
C(){var s=this,r=s.f
r=r==null?null:r.b
return A.F(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.nx.prototype={
$1(a){return a==null?null:A.R(a)},
$S:126}
A.nv.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:39}
A.nw.prototype={
$0(){return A.f(B.il)},
$S:7}
A.nI.prototype={
bX(a,b){var s,r=this,q=r.e.hN(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aN(q)
A.h(A.a(v.G.window).setTimeout(A.Cd(new A.nK(r)),7000))},
aN(a){var s,r,q=this
if(!q.c||B.c.aY(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.h(A.a(v.G.window).setTimeout(A.Cd(new A.nJ(q,s)),4200))}}
A.nK.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:128}
A.nJ.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:17}
A.nO.prototype={
oa(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cD.prototype={
B(){return"AudioOutputMode."+this.b}}
A.cY.prototype={
B(){return"AudioDynamicRange."+this.b}}
A.dq.prototype={
B(){return"AudioReverbMode."+this.b}}
A.dp.prototype={
B(){return"AudioDuckingMode."+this.b}}
A.e7.prototype={
cU(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.e7(r,q,p,a==null?s.e:a)},
md(a){return this.cU(null,null,a,null)},
m3(a){return this.cU(null,a,null,null)},
mj(a){return this.cU(null,null,null,a)},
m2(a){return this.cU(a,null,null,null)},
C(){var s=this
return A.F(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.nY.prototype={
$1$2(a,b,c){return B.a.b4(c.i("n<0>").a(a),new A.nZ(b,c),new A.o_(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:129}
A.nZ.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.o_.prototype={
$0(){return A.f(A.N("unsupported audio option: "+A.x(this.a),null,null))},
$S:7}
A.op.prototype={
oy(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.Q.hN(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.os.prototype={
$1(a){return this.a.$0()},
$S:2}
A.ow.prototype={
$1(a){return this.a.$1(A.R(this.b.checked))},
$S:2}
A.ov.prototype={
$1(a){var s=A.f7(A.t(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.ou.prototype={
$1(a){A.t(a)
return a.length!==0&&!B.c.U(a,"brush-state-")},
$S:3}
A.ee.prototype={
B(){return"BrushComponentKind."+this.b}}
A.ef.prototype={
B(){return"BrushComponentState."+this.b}}
A.bn.prototype={
glp(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
A(){var s=this
if(B.c.aY(s.a).length===0||B.c.aY(s.c).length===0)throw A.b(B.i7)
if(s.e===B.cm&&s.b!==B.cl)throw A.b(B.hr)},
gE(){return this.a}}
A.oy.prototype={
mT(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.t(a>=r+c?q.e=a-c+1:r,0,s)},
dn(a,b){if(b<=0){this.f=0
return}this.f=B.d.t(this.f+a,0,Math.max(0,b-1))},
bP(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.d8(o+c,n)
l=new A.d8(s+p,n)
k=s-p
j=new A.d8(k,r-c)
i=new A.d8(k-c,r)
h=new A.d8(q-p,r)
g=new A.d8(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.fv(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fv(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
b2(a,b,c,d,e,f,g,h,i){return this.bP(a,b,c,d,e,!0,f,g,h,i)},
mI(a,b,c,d,e,f,g,h,i){return this.bP(a,b,14,c,d,e,f,g,h,i)},
mN(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eD()
s.bZ(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.az()-0.5)*8
l=s.az()
k=s.az()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hw(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fu(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fu(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.x(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
mL(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a0(A.a(q.measureText(a.toUpperCase())).width)+70)
this.b2("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
mK(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.b2(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a0(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bP(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gor()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.lm(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.ba(i,0,new A.oz(c7),t.i)
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
c7.mT(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.t(c7.e,0,a7)
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
B.a.k(f,new A.fN("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.b2(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hw(!b6||b4,b2,24,c1,b3)
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
B.a.k(c7.d,new A.fN("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.b2("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
mJ(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
if(a3===0)return
s=a6<640
r=s?Math.min(2,a3):a3
q=s?8:12
p=s?8:0
o=s?Math.min(140,(a6-32-q)/r):140
for(n=o-18,m=a6*0.5,l=o*0.5,k=o+q,j=a5-32,i=B.d.bf(a3+r-1,r)-1,h=28+p,g=0;g<a3;++g){f=B.d.bf(g,r)
e=f*r
d=Math.min(r,a3-e)
c=m-(d*o+(d-1)*q)*0.5+l+(g-e)*k
b=j-(i-f)*h
if(!(g<a4.length))return A.d(a4,g)
a=a4[g]
a0=a.c
a1=a0?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bP(a0?"#f5f0e6":"#c49a45",1.5,6,a1,28,a0,-0.04,o,c,b)
a1=this.b
a1===$&&A.p()
a1.save()
a2=a0?"#f5f0e6":"#c49a45"
a1.fillStyle=a2
a1.font='bold 11px "Courier New", monospace'
a1.textAlign="center"
a1.textBaseline="middle"
a1.fillText(this.bx("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
mM(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
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
d2.fillStyle="rgba(10, 8, 12, "+A.x(0.75*s)+")"
d2.fillRect(0,0,d4,d3)
c3.b2(c5,3,18,c4,q,-0.025,r,o,n)
c3.mN(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.b2(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.al[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.bP(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c3.b2(c7,2.5,10,c8,140,-0.02,a1,o,a2)
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
d2.fillText(d5.e.gmF().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bx(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbq()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.b.aT((a5+52-44)/52))
a7=Math.max(0,a3.length-a6)
l=B.d.t(c3.f,0,a7)
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
b1=b0.Q===B.x
b2=a0+(g-c3.f)*52+22
b3=o+(e?12:0)
if(e)c=b1?c8:d0
else c=c4
b=e&&b1?c7:c9
c3.bP(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.hw(!0,g+1,20,b3-j+20,b2)
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
if(c){if(b0.Q===B.x){c=b0.ax
b7=c==null?b0.z:c}else b7=!1
c=b5-37
b=b1&&b7?c5:d0
c3.mI(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.ge6(),c,b2)}else{b8=b5-80-80
d2.fillStyle="#0c0a0e"
c=b8-80
b=b2-4
d2.fillRect(c,b,160,8)
if(b1){b6=b0.f
b9=B.b.t((b0.y-b6)/(b0.r-b6),0,1)}else b9=0
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
d2.fillText(b0.ge6(),b5,b2)}d2.restore()}d2.restore()
if(a7>0){d2.save()
d2.fillStyle="#ffd54f"
d2.font='bold 10px "Cinzel", serif'
d2.textAlign="right"
d2.textBaseline="middle"
if(c3.f>0)d2.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c3.f<a7)d2.fillText("\u25bc SCROLL DOWN",o+l-28,a4+8)
d2.restore()}}c0=n+m-24
c1=d5.gbL()
if(d5.b===5)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.x)m="LIVE \u2022 REQUESTED "+c1.gn0()+" \u2022 EFFECTIVE "+c1.ge6()
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
fv(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fu(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
lm(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a0(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bx(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a0(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a0(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.H(r,0,s-1)}return q?"...":r+"..."}}
A.oz.prototype={
$2(a,b){var s
A.aF(a)
A.t(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a0(A.a(s.measureText(b)).width))},
$S:130}
A.fS.prototype={
glH(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gL(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aQ(r)
o.l(0,q,p.gO(r)?"":p.ga_(r))}return o},
bK(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
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
A.aF(r)
q=n.h(0,i)
q.toString
A.aF(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
return A.fT(null,a,A.R(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.aF(r)
q=n.h(0,i)
q.toString
A.aF(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
A.R(m)
l=k.glH()
return A.fT(l,null,m,r,p,o,s,q)},
e1(a){var s=null
return this.bK(a,s,s,s,s,s)},
m9(a){var s=null
return this.bK(s,s,s,a,s,s)},
ma(a){var s=null
return this.bK(s,s,s,s,a,s)},
m6(a){var s=null
return this.bK(s,a,s,s,s,s)},
m7(a){var s=null
return this.bK(s,s,a,s,s,s)},
ms(a){var s=null
return this.bK(s,s,s,s,s,a)},
A(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.h6)
p=this.r
if(p.gL().M(0,new A.oO()))throw A.b(B.id)
if(p.gL().M(0,new A.oP()))throw A.b(B.hN)
p=p.gaj()
o=A.q(p)
s=o.i("ia<n.E,e>")
r=s.i("I<n.E>")
q=A.J(new A.I(new A.ia(p,o.i("n<e>(n.E)").a(new A.oQ()),s),s.i("l(n.E)").a(new A.oR()),r),r.i("n.E"))
if(A.h8(q,A.B(q).c).a!==q.length)throw A.b(B.ha)},
C(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gL(),s=s.gv(s);s.m();){r=s.gn()
o.l(0,r.a,A.aC(r.b,!0,p))}return A.F(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.oO.prototype={
$1(a){t.yx.a(a)
return J.k2(a.b,new A.oN(a))},
$S:40}
A.oN.prototype={
$1(a){var s
A.t(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.Af(a)
else s=!1
return s},
$S:3}
A.oP.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.k2(a.b,B.dX.gaC(B.dX))},
$S:40}
A.oQ.prototype={
$1(a){return t.a.a(a)},
$S:132}
A.oR.prototype={
$1(a){return A.t(a).length!==0},
$S:3}
A.oM.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.ed.prototype={
B(){return"BindingCaptureStatus."+this.b}}
A.eS.prototype={
B(){return"BindingConflictResolution."+this.b}}
A.dr.prototype={}
A.kp.prototype={
c6(a){var s=this
if(!s.a.r.K(a))return new A.dr(B.ci,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.eL},
lO(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b0
if(!A.Af(a)){p.c=p.b=null
return new A.dr(B.ck,B.dY.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gL()
r=r.gv(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.A4(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dr(B.b1,a+" is already bound to "+s)}return p.jA(a)},
cn(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b0
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eM
case 1:s=A.z4(m.a.r)
r=s.h(0,l)
r.toString
s.l(0,l,A.zq(r,k))
r=s.h(0,j)
r.toString
s.l(0,j,A.zG(r,k))
m.a=m.a.e1(s)
break
case 0:s=A.z4(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga_(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.hq(p,1,null,A.B(p).c)
o=p.$ti
p=new A.ai(p,p.gu(0),o.i("ai<Z.E>"))
o=o.i("Z.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.l(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.zG(r,k)}else{r=s.h(0,j)
r.toString
r=A.zq(A.zG(r,k),q)}s.l(0,j,r)
m.a=m.a.e1(s)
break}m.c=m.e=m.d=null
return B.cg},
jA(a){var s,r,q=this,p=q.b
if(p==null)return B.b0
s=A.z4(q.a.r)
r=s.h(0,p)
r.toString
s.l(0,p,A.zq(r,a))
q.a=q.a.e1(s)
q.b=null
return B.cg}}
A.i5.prototype={
jk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.kp(f.w)
s=f.b
s.className=A.t(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.ot(a,B.eV,1)))
A.a(s.appendChild(A.E(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.E(a,"div",c,e)
f.f7(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.f7(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dz(a,r,"invertX","Invert horizontal look")
f.dz(a,r,"invertY","Invert vertical look")
f.dz(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.E(a,"div",c,e)
for(p=B.kV.gL(),p=p.gv(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fT(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.k3(l)?"unbound":J.A6(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.eg(a,new A.bn("settings.controls.bind."+m,B.cl,n,h,B.o),new A.oK(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.l(0,m,g)}A.a(s.appendChild(q))
p=A.E(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.E(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.dT()
A.a(s.appendChild(A.eg(a,B.eW,new A.oL(f),e)))},
i2(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.fA(this.x.lO(A.t(a.code)))},
fA(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.b1?B.f_:B.o
p=o.Q.h(0,r)
if(p!=null)A.ys(p,q)}n=a.a
if(n===B.b1)o.l5()
else if(n===B.cj){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dT()}else{o.dC()
o.ax=null}},
l5(){var s,r,q,p,o
this.dC()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jE[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.eg(p,new A.bn("settings.controls.resolve."+o,B.I,o,"resolve key binding conflict",B.o),new A.oJ(this,q),null)))}},
dC(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dT(){var s,r,q,p
for(s=this.Q,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.k3(p)?"unbound":J.A6(p," / ")
r.textContent=q
A.ys(r,B.o)}},
f7(a,b,c,d,e,f){var s,r=A.E(a,"label","setting-row",null)
A.a(r.appendChild(A.E(a,"span",null,d)))
s=A.E_(a,new A.bn("settings.controls."+c,B.eY,d,null,B.o),f,e,new A.oH(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.l(0,c,s)},
dz(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.E0(a,new A.bn("settings.controls."+c,B.eZ,d,null,B.o),!1,new A.oI(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.E(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.l(0,c,r)},
fw(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seo(a){this.f=t.pf.a(a)},
sbd(a){this.r=t.Z.a(a)}}
A.oK.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.c6(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.ch){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.ys(q,B.cm)}p.dC()
return null},
$S:0}
A.oL.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.oJ.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.fA(r.cn(this.b))},
$S:0}
A.oH.prototype={
$1(a){var s=this.a,r=s.w
s.fw(this.b==="horizontalSensitivity"?r.m7(a):r.ms(a))},
$S:133}
A.oI.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.m9(a)
break A}if("invertY"===q){s=r.w.ma(a)
break A}s=r.w.m6(a)
break A}r.fw(s)},
$S:10}
A.oS.prototype={
jl(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.E(s,"h1","journal-title","credits")))
r=A.E(s,"p","credits-body",null)
p.f!==$&&A.ba()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.E(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.E(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.W(new A.oT(p)))
A.a(o.appendChild(q))}}
A.oT.prototype={
$1(a){return this.a.af()},
$S:2}
A.p_.prototype={
jn(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.E(a,o,"door-speaker",p)
q.b!==$&&A.ba()
q.b=s
r=A.E(a,o,"door-line",p)
q.c!==$&&A.ba()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.E(a,o,"door-choice-status",p)
q.d!==$&&A.ba()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.E(a,o,"door-cite-list",p)
q.f!==$&&A.ba()
q.f=r
s=A.E(a,o,"door-cite-result",p)
q.r!==$&&A.ba()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.E(a,"button","door-continue","continue")
q.e!==$&&A.ba()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.p0(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.W(new A.p1(q,a)))
A.a(A.G(a.body).appendChild(n))},
eU(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.Q.bQ("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.Ai(B.bj)
s=r.e
s===$&&A.p()
A.a(s.style).display="none"
s=r.f
s===$&&A.p()
s.textContent=""
s=r.r
s===$&&A.p()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
eV(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.Q.bQ("",!0,a)
q=r.d
q===$&&A.p()
q.textContent=""
q=r.e
q===$&&A.p()
q=A.a(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.p()
s.textContent=""},
iV(a){return this.eV(a,!1)},
iX(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.Ai(r)},
eW(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.Q.bQ("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.a(s.style).display=""},
iU(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.r)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.a(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.W(new A.p2(p,this)))
A.a(s.appendChild(n))}},
hV(){var s,r=this
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
snB(a){this.w=t.Z.a(a)},
snA(a){this.x=t.vR.a(a)}}
A.p0.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:42}
A.p1.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.t(a.code)!=="Tab")return
r=A.c([],t.sL)
q=s.e
q===$&&A.p()
if(A.t(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.p()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.h(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.k(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.R(a.shiftKey)){if(m===B.a.ga_(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga6(r).focus()}}else if(m===B.a.ga6(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga_(r).focus()}},
$S:204}
A.p2.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:42}
A.p5.prototype={
jo(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.E(s,"h1","journal-title",null)
o.f!==$&&A.ba()
o.f=r
q=A.E(s,"div","ending-copy",null)
o.r!==$&&A.ba()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.E(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.W(new A.p6(o)))
A.a(n.appendChild(p))},
iW(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bS()},
snF(a){this.w=t.Z.a(a)}}
A.p6.prototype={
$1(a){var s=this.a
s.af()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.py.prototype={
bE(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aC(b,!0,t.N)
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
ox(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
n5(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hg()
return!0}return!1}if(a==="Space"){s=B.a.ej(l,new A.pz())
if(s!==-1){n.cw(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.R(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.R(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cw(q)
return!0}}if(B.c.U(a,"Digit")){p=A.dI(B.c.aO(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.U(a,"Numpad")){p=A.dI(B.c.aO(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cw(o)
return!0}return!1},
cw(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
hg(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
n6(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hg()
return!0}this.cw(a.b)
return!0},
snz(a){this.y=t.dt.a(a)},
snE(a){this.z=t.Z.a(a)}}
A.pz.prototype={
$1(a){A.t(a)
return B.c.p(a.toLowerCase(),"silent")||B.c.p(a,"...")},
$S:3}
A.pA.prototype={}
A.dz.prototype={
B(){return"GameplayInteractionMode."+this.b}}
A.d_.prototype={
B(){return"GameplayPromptDensity."+this.b}}
A.d0.prototype={
B(){return"GameplayTextPacing."+this.b}}
A.dA.prototype={
B(){return"GameplayJournalLayout."+this.b}}
A.dy.prototype={
B(){return"GameplayConfirmationLevel."+this.b}}
A.dB.prototype={
B(){return"GameplaySaveFeedback."+this.b}}
A.ck.prototype={
B(){return"GameplayFocusLossBehavior."+this.b}}
A.dx.prototype={
B(){return"GameplayClockFormat."+this.b}}
A.h_.prototype={
aS(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.yt(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
mo(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,s,a,s)},
mn(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,a,s,s)},
m_(a){var s=null
return this.aS(s,s,a,s,s,s,s,s,s,s,s)},
m8(a){var s=null
return this.aS(s,s,s,s,a,s,s,s,s,s,s)},
mg(a){var s=null
return this.aS(s,s,s,s,s,s,a,s,s,s,s)},
mp(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,s,s,a)},
mb(a){var s=null
return this.aS(s,s,s,s,s,a,s,s,s,s,s)},
lZ(a){var s=null
return this.aS(s,a,s,s,s,s,s,s,s,s,s)},
mk(a){var s=null
return this.aS(s,s,s,s,s,s,s,a,s,s,s)},
lY(a){var s=null
return this.aS(a,s,s,s,s,s,s,s,s,s,s)},
m4(a){var s=null
return this.aS(s,s,s,a,s,s,s,s,s,s,s)},
C(){var s=this
return A.F(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pB.prototype={
$1$2(a,b,c){var s
A.CT(c,t.Ct,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.N("invalid gameplay setting: "+a,null,null))
return B.a.b4(b,new A.pC(s,c),new A.pD(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:137}
A.pC.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pD.prototype={
$0(){return A.f(A.N("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cE.prototype={
B(){return"GraphicsPreset."+this.b}}
A.em.prototype={
b0(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.em(s.a,r,q,p,o,n,m,l,k,j,i)},
e0(a){var s=null
return this.b0(a,s,s,s,s,s,s,s,s,s)},
hr(a){var s=null
return this.b0(s,s,a,s,s,s,s,s,s,s)},
hs(a){var s=null
return this.b0(s,s,s,s,s,s,a,s,s,s)},
mc(a){var s=null
return this.b0(s,s,s,s,a,s,s,s,s,s)},
mi(a){var s=null
return this.b0(s,s,s,s,s,s,s,a,s,s)},
m5(a){var s=null
return this.b0(s,s,s,a,s,s,s,s,s,s)},
mq(a){var s=null
return this.b0(s,s,s,s,s,s,s,s,s,a)},
me(a){var s=null
return this.b0(s,s,s,s,s,a,s,s,s,s)},
m1(a){var s=null
return this.b0(s,a,s,s,s,s,s,s,s,s)},
mm(a){var s=null
return this.b0(s,s,s,s,s,s,s,s,a,s)},
A(){var s=this,r=null,q=s.c
if(!B.a.p(B.ku,q))throw A.b(A.N("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.jL,q))throw A.b(A.N("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.ky,q))throw A.b(A.N("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.kr,q))throw A.b(A.N("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.kF,q))throw A.b(A.N("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.kx,q))throw A.b(A.N("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.kz,q))throw A.b(A.N("unsupported graphics shadow quality: "+q,r,r))},
C(){var s=this
return A.F(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.pO.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:43}
A.pP.prototype={
$0(){return A.f(B.hA)},
$S:7}
A.pQ.prototype={
C(){return A.F(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)}}
A.pH.prototype={}
A.pI.prototype={}
A.ih.prototype={
jp(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.a(j.appendChild(A.E(a,"h1","journal-title","Graphics")))
A.a(j.appendChild(A.E(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.E(a,"div","settings-grid",m)
r=t.N
n.bh(a,s,"preset","quality preset",A.F(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.bh(a,s,"renderScale","render scale",A.F(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.bh(a,s,"frameTarget","frame target",A.F(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.bh(a,s,"antialiasing","anti-aliasing",A.F(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.bh(a,s,"textureQuality","texture quality",A.F(["high","High","medium","Medium","low","Low"],r,r))
n.bh(a,s,"outputEncoding","output encoding",A.F(["srgb","sRGB display","linear","Linear light"],r,r))
n.bh(a,s,"diagnosticLevel","renderer diagnostics",A.F(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.bh(a,s,"shadowQuality","shadow allocation",A.F(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.E(a,"label",k,m)
r=A.a(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.W(new A.pL(n)))
r=n.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.E(a,"span",m,"Dynamic resolution")))
A.a(s.appendChild(q))
p=A.E(a,"label",k,m)
r=A.a(a.createElement("input"))
n.y=r
r.type="checkbox"
r=n.y
r.toString
r.addEventListener("change",A.W(new A.pM(n)))
r=n.y
r.toString
A.a(p.appendChild(r))
A.a(p.appendChild(A.E(a,"span",m,"Model package diagnostics (debug)")))
A.a(s.appendChild(p))
A.a(j.appendChild(s))
r=A.E(a,"p",l,m)
n.z=r
r.setAttribute("aria-live","polite")
r=n.z
r.toString
A.a(j.appendChild(r))
o=A.E(a,"button","door-continue","back")
o.setAttribute("type","button")
o.id="settings.graphics.back"
o.setAttribute("aria-label","back to settings categories")
o.addEventListener("click",A.W(new A.pN(n)))
A.a(j.appendChild(o))},
bh(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.E(a,"label","setting-row",null)
A.a(s.appendChild(A.E(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.M(e,A.q(e).i("M<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.W(new A.pK(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.l(0,c,r)},
dM(a){var s
a.A()
this.Q=a
s=this.f
if(s!=null)s.$1(a)},
cz(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.V(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.z
if(s!=null)s.textContent="effective graphics profile differs"}},
seo(a){this.f=t.CA.a(a)},
sbd(a){this.r=t.Z.a(a)}}
A.pL.prototype={
$1(a){var s=this.a
s.dM(s.Q.hr(A.R(s.x.checked)))},
$S:1}
A.pM.prototype={
$1(a){var s=this.a
s.dM(s.Q.mc(A.R(s.y.checked)))},
$S:1}
A.pN.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.af()},
$S:1}
A.pK.prototype={
$1(a){var s,r=A.t(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.hs(B.a.aw(B.dc,new A.pJ(r)))
break A}if("renderScale"===p){s=q.Q.mi(r)
break A}if("frameTarget"===p){s=q.Q.m5(r)
break A}if("antialiasing"===p){s=q.Q.e0(r)
break A}if("textureQuality"===p){s=q.Q.mq(r)
break A}if("outputEncoding"===p){s=q.Q.me(r)
break A}if("diagnosticLevel"===p){s=q.Q.m1(r)
break A}if("shadowQuality"===p){s=q.Q.mm(r)
break A}s=q.Q
break A}q.dM(s)},
$S:1}
A.pJ.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:43}
A.k5.prototype={
B(){return"ActiveGuiPanel."+this.b}}
A.ch.prototype={}
A.pR.prototype={
iv(a,b,c){if(c)return B.k1
if(b&&a!=null)return A.c([new A.ch("E","Examine "+a,!0),new A.ch("TAB","Journal",!1),new A.ch("CAPS","Shader Lab",!1)],t.sa)
return B.kQ}}
A.pS.prototype={
jq(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.E(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.E(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.E(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.E(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.W(new A.pT(this)))
A.a(p.appendChild(r))}}
A.pT.prototype={
$1(a){return this.a.af()},
$S:2}
A.qo.prototype={
bS(){var s,r=this
r.je()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fe(r.CW,s)
r.kV()
r.fS()},
jG(){var s,r=this,q=r.a,p=A.E(q,"div","page-turn",null),o=A.E(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.W(new A.qp(r)))
s=A.E(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.qq(r)))
q=A.E(q,"span","right-day-label",null)
r.Q!==$&&A.ba()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
h9(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fe(s.CW+a,r)
s.fS()},
fe(a,b){if(a<1)return 1
if(a>b)return b
return a},
kV(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.p()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.p()
s.textContent=""
for(s=l.w.eN(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=B.a.ga6(o.c).q(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.W(new A.qr(l,o,m)))
A.a(k.appendChild(m))}},
fS(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.q(p).i("ae<2>"),n=new A.ae(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.W(r,new A.qs())
j.fR(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.ae(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.W(s,new A.qt())
j.fR(i,s)
k=B.b.t(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.a(i.style).setProperty("width",B.b.I(k*100,1)+"%")},
fR(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.a(a.appendChild(this.kc(b[r])))},
kc(a){var s,r,q,p,o,n=A.E(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.fF(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.fF(p,!1)
o.className=A.t(o.className)+" margin"
A.a(n.appendChild(o))}return n},
fF(a,b){var s=b?"hand-line struck":"hand-line",r=A.E(this.a,"div",s,a.q(0))
A.a(r.style).setProperty("--shake",B.b.q(a.b))
return r}}
A.qp.prototype={
$1(a){return this.a.h9(-1)},
$S:2}
A.qq.prototype={
$1(a){return this.a.h9(1)},
$S:2}
A.qr.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.qs.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:14}
A.qt.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:14}
A.d8.prototype={}
A.fN.prototype={
gE(){return this.a}}
A.ri.prototype={
gor(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.H(s,0,B.b.aE(B.b.t(r*q,0,r)))}}
A.iB.prototype={
aZ(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.G(this.a.body).appendChild(s))},
bS(){var s,r,q,p,o=this,n=o.b
if(B.c.p(A.t(n.className),"open"))return
s=$.rj
if(s!=null&&s!==o)s.af()
$.rj=o
r=o.a
o.d=A.G(r.activeElement)
A.ql(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.W(o.gkM())
o.e=q
r.addEventListener("keydown",q)
p=A.Cb(n)
if(p.length!==0)B.a.ga_(p).focus()
else n.focus()},
af(){var s,r,q=this,p=q.b
if(!B.c.p(A.t(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.rj===q)$.rj=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
i2(a){},
kN(a){A.a(a)
this.i2(a)
if(A.R(a.defaultPrevented))return
if(A.t(a.code)==="Escape"){a.preventDefault()
this.af()
return}if(A.t(a.code)==="Tab")this.lc(a)},
lc(a){var s,r=A.Cb(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.R(a.shiftKey)){if(s===B.a.ga_(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga6(r).focus()}}else if(s===B.a.ga6(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga_(r).focus()}},
sb6(a){this.c=t.Z.a(a)}}
A.bz.prototype={
B(){return"PauseReason."+this.b}}
A.cn.prototype={
B(){return"PausePage."+this.b}}
A.et.prototype={
B(){return"PauseTransitionKind."+this.b}}
A.dG.prototype={
C(){var s,r=A.m(t.N,t.X)
r.l(0,"page",this.a.b)
r.l(0,"reason",this.b.b)
s=this.c
if(s!=null)r.l(0,"focusId",s)
return r},
aa(a,b){if(b==null)return!1
return b instanceof A.dG&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gS(a){return A.cL(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.es.prototype={
ghl(){var s=this.a
return s.length===1&&B.a.ga_(s).a===B.bD},
C(){var s=A.m(t.N,t.X),r=this.a,q=A.B(r),p=q.i("H<1,V<e,K?>>")
r=A.J(new A.H(r,q.i("V<e,K?>(1)").a(new A.ro()),p),p.i("Z.E"))
r.$flags=1
s.l(0,"pages",r)
r=this.b
q=A.B(r)
p=q.i("H<1,e>")
r=A.J(new A.H(r,q.i("e(1)").a(new A.rp()),p),p.i("Z.E"))
s.l(0,"modalReasons",r)
r=this.c
if(r!=null)s.l(0,"restoreFocusId",r)
return s}}
A.ro.prototype={
$1(a){return t.oP.a(a).C()},
$S:139}
A.rp.prototype={
$1(a){return t.wJ.a(a).b},
$S:140}
A.c6.prototype={}
A.rn.prototype={
i3(a){var s,r=this
if(r.a.ghl())return new A.c6(B.a5,r.a,null)
s=r.a
s=new A.es(B.kt,s.b,a)
r.a=s
return new A.c6(B.dH,s,"pause.resume")},
lC(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga6(p)
q=r.a.a
q=B.a.aB(q,0,q.length-1)
p=r.a
p=new A.es(q,p.b,p.c)
r.a=p
return new A.c6(B.dI,p,s.c)}if(q.ghl()&&r.a.b.length===0)return r.co()
return new A.c6(B.a5,r.a,null)},
co(){var s=this.a
if(s.a.length===0)return new A.c6(B.a5,s,null)
if(s.b.length!==0)return new A.c6(B.a5,s,null)
this.a=B.bC
return new A.c6(B.dJ,B.bC,s.c)},
nV(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.c6(B.a5,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.es(s.a,r,q.a.c)
q.a=s
return new A.c6(B.dH,s,null)},
mE(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.c6(B.a5,o.a,null)
s=o.a
r=s.b
q=A.B(r)
p=q.i("I<1>")
r=A.J(new A.I(r,q.i("l(1)").a(new A.rq(a)),p),p.i("n.E"))
q=o.a.c
r=new A.es(s.a,r,q)
o.a=r
return new A.c6(B.m_,r,q)},
k0(a){var s
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
A.rq.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:141}
A.cM.prototype={
B(){return"PauseRootAction."+this.b}}
A.rr.prototype={
bu(a,b,c,d){var s=B.l7.h(0,c)
s.toString
A.a(b.appendChild(A.eg(a,new A.bn(s,B.I,d,null,B.o),new A.rs(this,c),null)))},
snQ(a){this.f=t.Z.a(a)},
snS(a){this.r=t.Z.a(a)},
snC(a){this.w=t.Z.a(a)},
snR(a){this.x=t.Z.a(a)},
snI(a){this.y=t.Z.a(a)},
snD(a){this.z=t.Z.a(a)},
sbd(a){this.Q=t.Z.a(a)}}
A.rs.prototype={
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
A.bX.prototype={
B(){return"PauseSettingsCategory."+this.b}}
A.rN.prototype={
iT(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.Q.bQ("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.te.prototype={
js(a){var s,r,q,p,o,n=this.b
n.className=A.t(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.ot(a,B.eU,1)))
A.a(n.appendChild(A.E(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.E(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.k2[r]
p=B.dr.h(0,q)
p.toString
o=B.dq.h(0,q)
o.toString
A.a(s.appendChild(A.eg(a,new A.bn(o,B.I,p,p+" settings",B.o),new A.tf(this,q),null)))}A.a(s.appendChild(A.eg(a,B.eT,new A.tg(this),null)))
A.a(n.appendChild(s))},
sny(a){this.f=t.hQ.a(a)},
sbd(a){this.r=t.Z.a(a)}}
A.tf.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.tg.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hm.prototype={
jt(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.x(B.dr.h(0,d))+" settings",a=h.b
a.className=A.t(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.ot(a0,new A.bn("settings."+(s==null?f:s)+".heading",B.aA,b,g,B.o),2)))
A.a(a.appendChild(A.E(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.E(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.tF(h)),p=B.a.gv(B.E),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.ku(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.E(a0,"div",e,g)
for(s=s.a(new A.tG(h)),q=B.a.gv(B.E),o=new A.T(q,s,o);o.m();)A.a(j.appendChild(h.lb(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.K)A.a(a.appendChild(h.jE(a0)))
if(d===B.L)A.a(a.appendChild(h.jD(a0)))
if(d===B.a4)A.a(a.appendChild(h.jF(a0)))
i=A.E(a0,"div",e,g)
for(s=t.pz.a(h.gkl()),q=B.a.gv(B.kv),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.eg(a0,new A.bn("settings."+o+".reset."+n,B.I,"reset "+n,"restore "+n+" settings to defaults",B.o),new A.tH(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.eg(a0,new A.bn("settings."+(s==null?f:s)+".reset.all",B.I,"reset all settings","restore all settings to defaults",B.f0),new A.tI(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.eg(a0,new A.bn("settings."+(d==null?f:d)+".back",B.I,"return","return to settings categories",B.o),new A.tJ(h),g)))},
jD(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.E(a,"div","settings-grid",j),f=k.dw(a,g,"reducedMotion","reduced motion (system default)"),e=k.dw(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dw(a,g,"captions","non-speech captions"),c=A.E(a,"label",h,j)
A.a(c.appendChild(A.E(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.W(new A.tx(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.E(a,"label",h,j)
A.a(r.appendChild(A.E(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bv[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.W(new A.ty(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.E(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.W(new A.tz(k)))
A.a(g.appendChild(l))
k.ok.J(0,A.F(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.l(0,"screenReaderVerbosity",q)
return g},
dw(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.W(new A.th(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.E(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eP(a){var s,r
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
s.value=(r==null?B.ae:r).b}},
jF(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.E(a,"div","settings-grid",l)
m.bg(a,g,"interactionMode","interaction mode",B.bu,t.bK)
m.bg(a,g,"promptDensity","prompt density",B.bx,t.dn)
m.bg(a,g,"textPacing","text pacing",B.bw,t.j_)
m.bg(a,g,"journalLayout","journal layout",B.bo,t.gm)
m.bg(a,g,k,k,B.bi,t.aJ)
m.bg(a,g,"saveFeedback","save feedback",B.bp,t.mx)
m.bg(a,g,"focusLossBehavior","when the window loses focus",B.aJ,t.x)
m.bg(a,g,"clockFormat","clock format",B.bl,t.vS)
s=A.E(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.W(new A.tA(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.E(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.E(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.W(new A.tB(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.E(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.E(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.W(new A.tC(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.E(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bg(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.CT(f,t.Ct,"T","_addGameplaySelect")
f.i("L<0>").a(e)
s=A.E(a,"label","setting-row",null)
A.a(s.appendChild(A.E(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.W(new A.tv(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.l(0,c,r)},
iE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
jE(a){var s,r,q=this,p=A.E(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bt[s].b
n.l(0,r,r)}q.cA(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.bn[s].b
n.l(0,r,r)}q.cA(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.bm[s].b
n.l(0,r,r)}q.cA(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.bk[s].b
o.l(0,n,n)}q.cA(a,p,"ducking","voice intelligibility",o)
return p},
cA(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.E(a,"label","setting-row",null)
A.a(s.appendChild(A.E(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.M(e,A.q(e).i("M<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.W(new A.tm(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.l(0,c,r)},
iD(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fD(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a3===r){s=a.c===B.aR
break A}if(B.L===r){s=a.c===B.a9
break A}if(B.K===r){s=a.c===B.H
break A}s=!1
break A}return s},
km(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a3===s){r=a===B.aR
break A}if(B.L===s){r=a===B.a9
break A}if(B.K===s){r=a===B.H
break A}r=!1
break A}return r},
lb(a,b){var s=this,r=A.E(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.W(new A.tE(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.E(a,"span",null,b.b)))
return r},
ku(a,b,c,d,e){var s,r,q=this,p=A.E(a,"label","setting-row",null),o=A.E(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.x(e)
n.max=A.x(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.E(a,"output",null,"100%")
n.addEventListener("input",A.W(new A.tD(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.l(0,b,n)
q.db.l(0,b,r)
q.dx.l(0,b,new A.a9(e,d))
return p},
eS(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.ml
r=B.b.t(b,s.a,s.b)
q.value=B.b.q(r)
p.textContent=""+B.b.aK(r*100)+"%"},
snK(a){this.r=t.DI.a(a)},
snM(a){this.w=t.xl.a(a)},
snL(a){this.x=t.xl.a(a)},
snG(a){this.y=t.DI.a(a)},
snJ(a){this.z=t.xl.a(a)},
snU(a){this.Q=t.xl.a(a)},
snP(a){this.as=t.Ci.a(a)},
snO(a){this.at=t.Z.a(a)},
sbd(a){this.ax=t.Z.a(a)},
snx(a){this.ay=t.kC.a(a)},
snH(a){this.ch=t.hq.a(a)},
snw(a){this.CW=t.Cv.a(a)},
snN(a){this.cx=t.Z.a(a)}}
A.tF.prototype={
$1(a){t.gl.a(a)
return a.d===B.Y&&this.a.fD(a)},
$S:25}
A.tG.prototype={
$1(a){t.gl.a(a)
return a.d===B.aq&&this.a.fD(a)},
$S:25}
A.tH.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.tI.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.tJ.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.af()},
$S:0}
A.tx.prototype={
$1(a){var s=this.a,r=s.k4,q=A.f7(A.t(this.b.value))
r=r.mr(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.ty.prototype={
$1(a){var s=this.a,r=s.k4.ml(B.a.aw(B.bv,new A.tw(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tw.prototype={
$1(a){return t.mq.a(a).b===A.t(this.a.value)},
$S:39}
A.tz.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.th.prototype={
$1(a){var s,r=A.R(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.mh(r)
break A}if("photosensitivitySafe"===p){s=q.k4.mf(r)
break A}if("captions"===p){s=q.k4.lX(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.tA.prototype={
$1(a){var s=this.a,r=s.k3.m_(A.R(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tB.prototype={
$1(a){var s=this.a,r=s.k3.mn(A.R(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tC.prototype={
$1(a){var s=this.a,r=s.k3.mo(A.R(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tv.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.m8(B.a.aw(B.bu,new A.tn(r.c)))
break A}if("promptDensity"===p){s=q.k3.mg(B.a.aw(B.bx,new A.to(r.c)))
break A}if("textPacing"===p){s=q.k3.mp(B.a.aw(B.bw,new A.tp(r.c)))
break A}if("journalLayout"===p){s=q.k3.mb(B.a.aw(B.bo,new A.tq(r.c)))
break A}if("confirmations"===p){s=q.k3.lZ(B.a.aw(B.bi,new A.tr(r.c)))
break A}if("saveFeedback"===p){s=q.k3.mk(B.a.aw(B.bp,new A.ts(r.c)))
break A}if("clockFormat"===p){s=q.k3.lY(B.a.aw(B.bl,new A.tt(r.c)))
break A}s=q.k3.m4(B.a.aw(B.aJ,new A.tu(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.tn.prototype={
$1(a){return t.bK.a(a).b===A.t(this.a.value)},
$S:144}
A.to.prototype={
$1(a){return t.dn.a(a).b===A.t(this.a.value)},
$S:145}
A.tp.prototype={
$1(a){return t.j_.a(a).b===A.t(this.a.value)},
$S:146}
A.tq.prototype={
$1(a){return t.gm.a(a).b===A.t(this.a.value)},
$S:147}
A.tr.prototype={
$1(a){return t.aJ.a(a).b===A.t(this.a.value)},
$S:148}
A.ts.prototype={
$1(a){return t.mx.a(a).b===A.t(this.a.value)},
$S:149}
A.tt.prototype={
$1(a){return t.vS.a(a).b===A.t(this.a.value)},
$S:150}
A.tu.prototype={
$1(a){return t.x.a(a).b===A.t(this.a.value)},
$S:45}
A.tm.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.md(B.a.aw(B.bt,new A.ti(r.c)))
break A}if("dynamicRange"===o){s=p.m3(B.a.aw(B.bn,new A.tj(r.c)))
break A}if("reverb"===o){s=p.mj(B.a.aw(B.bm,new A.tk(r.c)))
break A}s=p.m2(B.a.aw(B.bk,new A.tl(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.ti.prototype={
$1(a){return t.xs.a(a).b===A.t(this.a.value)},
$S:152}
A.tj.prototype={
$1(a){return t.EL.a(a).b===A.t(this.a.value)},
$S:153}
A.tk.prototype={
$1(a){return t.gc.a(a).b===A.t(this.a.value)},
$S:154}
A.tl.prototype={
$1(a){return t.ul.a(a).b===A.t(this.a.value)},
$S:155}
A.tE.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.R(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.R(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.R(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.R(r.c.checked))
break}},
$S:1}
A.tD.prototype={
$1(a){var s,r,q=this,p=A.f7(A.t(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.aK(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bL.prototype={
B(){return"SettingCategory."+this.b}}
A.iO.prototype={
B(){return"SettingKind."+this.b}}
A.bd.prototype={
dk(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.N(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.N(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bG(a))throw A.b(A.N(r.a+" must be boolean",q,q))
break}}}
A.tM.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:25}
A.tN.prototype={
$0(){return A.f(A.j("unknown setting: "+this.a))},
$S:7}
A.tK.prototype={
ju(a,b){var s,r=this.a
if(r!==1)throw A.b(A.o("unsupported settings version "+r,null))
for(r=this.b.gL(),r=r.gv(r);r.m();){s=r.gn()
A.tL(s.a).dk(s.b)}},
cq(a){var s=this.b.h(0,a)
return s==null?A.f(A.j("setting missing from profile: "+a)):s},
C(){return A.F(["version",this.a,"values",this.b],t.N,t.K)}}
A.tO.prototype={
o8(a){var s,r,q=A.h7(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
if(r.c===a)q.l(0,r.a,r.e)}this.a=A.dN(q,1)
this.kY(a)},
C(){return A.F(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)},
kY(a){var s,r,q=A.h7(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
if(r.c===a)q.l(0,r.a,r.e)}this.b=A.dN(q,1)}}
A.u0.prototype={
jv(a){var s,r,q,p,o,n,m,l=this.b
l.setAttribute("aria-label","Rest")
A.a(l.appendChild(A.E(a,"h2","journal-title","Rest")))
A.a(l.appendChild(A.E(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.E(a,"div","entry-picker",null)
for(r=0;r<2;++r){q=B.da[r]
for(p=q.b+" sleep \xb7 ",o=0;o<3;++o){n=B.dj[o]
m=A.a(a.createElement("button"))
m.className="picker-entry"
m.textContent=p+n.b
m.setAttribute("type","button")
m.addEventListener("click",A.W(new A.u1(this,q,n)))
A.a(s.appendChild(m))}}A.a(l.appendChild(s))},
snT(a){this.f=t.nf.a(a)}}
A.u1.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.af()},
$S:1}
A.cB.prototype={
gE(){return this.a},
gau(){return this.b},
gaV(){return this.c}}
A.nF.prototype={
oq(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.B(s)
q=new A.H(s,r.i("e(1)").a(new A.nH()),r.i("H<1,e>")).b7(0)
r=this.b
r.N(0)
s=J.A7(a,t.N)
p=s.$ti
r.J(0,new A.I(s,p.i("l(n.E)").a(q.gaC(q)),p.i("I<n.E>")))},
mO(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.nH.prototype={
$1(a){return t.bC.a(a).a},
$S:156}
A.nG.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:157}
A.m7.prototype={
gca(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nj(a){return this.c.p(0,t.T.a(a))},
ey(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a2(0,g.glW())||!a.a.a2(0,new A.uC(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fG(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aT){m=s.d
if(m<o.length){n=n===B.ac
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ag}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.uD(s))
else k=!1
if(k)return!1
j=new A.m6(r,g,A.ad(o,t.AP),B.ac)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.N(0)
g.J(0,a.a)
g=i.c
g.N(0)
g.J(0,h)
i.r=j
return!0},
hi(a){var s=this.a,r=A.q(s).i("ac<1>"),q=r.i("I<n.E>")
s=A.J(new A.I(new A.ac(s,r),r.i("l(n.E)").a(new A.ux(a)),q),q.i("n.E"))
B.a.W(s,new A.uy())
return s},
c6(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.oH
s=m.a.h(0,a)
if(s==null)return B.oI
r=B.d.ae(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.c6:B.ax
o=p===B.ax&&m.x.p(0,q)&&s.K(B.c7)?B.c7:p
if(s.K(o))n=o
else n=s.K(B.ax)?B.ax:B.c6
r=s.h(0,n)
r.toString
m.r=new A.m6(a,n,A.ad(m.fG(a,n,r),t.AP),B.ac)
m.gca()
r=m.r
r.toString
return new A.m5(r)},
lR(a){var s,r,q,p,o,n=this.r
if(n==null)return B.ep
if(n.d!==B.ac)return B.oF
n.e=a
s=a===B.ag
n.d=s?B.aT:B.av
r=this.f
q=s?B.en:B.on
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.dS(q,o,p,a,null))
if(a===B.aF)B.a.k(r,new A.dS(B.oq,o,p,a,null))
if(s)this.fT(n)
return new A.m3(n)},
lu(){var s,r=this.r
if(r==null)return B.ep
s=r.d
if(s!==B.av&&s!==B.aw)return B.oG
if(this.gca()!=null&&r.w==null)return new A.bu(new A.bC(B.ad,"The visitor is waiting for an answer."))
r.d=B.aw
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aT
this.fT(r)
return new A.j_(r,!0)}return new A.j_(r,!1)},
lS(a){var s,r,q=this.r,p=this.gca(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.av&&o!==B.aw}if(o)return B.oE
o=p.f
s=A.B(o)
r=A.bH(new A.I(o,s.i("l(1)").a(new A.uA(a)),s.i("I<1>")),t.Y)
if(r==null)return B.oJ
q.w=r.a
return new A.m4(q,p,r)},
lT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.av&&s!==B.aw}else s=!0
if(s)return i
r=h.gbn()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.dg
p=J.Q(p)
while(p.m()){o=p.gn()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.aT(q,s,s)
m=c.kR(!0,!0,o,new A.uY(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aU){B.a.k(this.f,new A.dS(B.op,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.h7(B.a.ga6(j.c).a,s,s)
s.J(0,q)
p.lr(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.er)if(k===B.c9){s=n.b
s=s.ga3(s)}else s=!1
else s=!0
if(s)B.a.k(this.f,new A.dS(B.oo,o,p.b,i,l))}}return m},
fT(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.r=null},
fG(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.Q(c);r.m();)s.push(this.kv(a,b,r.gn()))
return s},
kv(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.B(p)
s=A.bH(new A.I(p,r.i("l(1)").a(new A.uv(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.cc(q,s.c,c.c)},
sj8(a){this.x=t.Q.a(a)}}
A.uC.prototype={
$1(a){var s=this.a.a
return new A.ac(s,A.q(s).i("ac<1>")).M(0,new A.uB(A.t(a)))},
$S:3}
A.uB.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:27}
A.uD.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.ux.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:27}
A.uy.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:159}
A.uA.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.uz.prototype={
$0(){return A.c([],t.jV)},
$S:160}
A.uv.prototype={
$1(a){return t.aS.a(a).d.gL().a2(0,new A.uu(this.a))},
$S:161}
A.uu.prototype={
$1(a){t.q.a(a)
return this.a.y.aU(a.a,a.b)},
$S:162}
A.uw.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:163}
A.m8.prototype={}
A.mF.prototype={}
A.xx.prototype={
$1(a){return B.c.U(A.t(a),"off.")},
$S:3}
A.bT.prototype={
B(){return"DoorChoice."+this.b}}
A.ca.prototype={
B(){return"VisitPhase."+this.b}}
A.cb.prototype={
B(){return"VisitTier."+this.b}}
A.ex.prototype={
B(){return"VisitorFactKind."+this.b}}
A.dS.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q},
gau(){return this.c}}
A.df.prototype={
B(){return"VisitorIssueCode."+this.b}}
A.bC.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.bC&&b.a===this.a&&b.b===this.b},
gS(a){return A.cL(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.cc.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.cc&&b.a===this.a&&b.b===this.b},
gS(a){return A.cL(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c0.prototype={
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.c0&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gS(a){var s=this
return A.cL(s.a,s.b,s.c,s.d,B.h,B.h)},
C(){var s=this
return A.F(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gau(){return this.b},
gaV(){return this.c}}
A.m9.prototype={
C(){var s,r,q,p=this.a
p=A.J(p,A.q(p).c)
B.a.X(p)
s=this.b
r=A.q(s)
q=r.i("du<1,V<e,@>>")
s=A.J(new A.du(s,r.i("V<e,@>(1)").a(new A.ut()),q),q.i("n.E"))
r=this.c
return A.F(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.ut.prototype={
$1(a){return t.T.a(a).C()},
$S:164}
A.k6.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
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
A.nC.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:165}
A.nD.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:166}
A.nE.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:167}
A.m6.prototype={
gbn(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.uE.prototype={}
A.bu.prototype={}
A.m5.prototype={}
A.m3.prototype={}
A.j_.prototype={}
A.m4.prototype={}
A.hy.prototype={}
A.mI.prototype={
glM(){var s,r
if(!this.aH)return B.m
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.fc.lN(s,r)},
gn2(){var s="shadowCaster",r=this.d2
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.i4(s).a+";shadowTriangles="+r.i4(s).b+";frameMs="+B.b.I(this.d3,3)},
ghP(){var s=this.d2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.d3<=100},
nb(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.ic()
l.r=k
k=l.w=B.co.iC(k)
if(k.a===B.F)k=l.w=B.dO
q=l.b
p=l.c
s=new A.lT(q,p,q,p)
o=A.B2(l.d.a)
l.e=o
try{o.hY(l.jV(k,q,p),s)}catch(n){r=A.ak(n)
k=l.w
if(k===B.ao)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.x(r)
l.w=B.ao
k=A.B2(l.d.a)
k.hY(B.mG,s)
l.e=k}k=l.e
k.c0()
m=A.Fu(k.w.a.b)
B.a.k(k.d,m)
l.f=m
l.cc=l.b
l.cd=l.c
l.fo()
l.mX=A.Fa(!0,!0,!0)
l.hI=new A.rA(A.m(t.N,t.S))
l.aH=!0},
dj(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.o("Pixeldart surface size must be positive",null))
if(!r.aH){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.ce!==a||r.cf!==b)r.cf=r.ce=null
s=r.e
s===$&&A.p()
s.c0()
new A.lT(a,b,a,b).A()
if(r.d4==null)r.d4=r.c_()},
c_(){var s=0,r=A.aO(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$c_=A.aP(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.cc
h=n.b
if(!(i!==h||n.cd!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.h(m)
s=8
return A.a5(A.wL(i,B.cr.hp("auto","full","srgb",h,"auto","profile",A.h(l),g)),$async$c_)
case 8:n.cc=m
n.cd=l
n.cf=n.ce=null
A.jX()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ak(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.x(k)
n.ce=n.b
n.cf=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.d4=null
i=n.ce
h=n.b
j=i===h&&n.cf===n.c
if(!j)i=n.cc!==h||n.cd!==n.c
else i=!1
if(i)n.d4=n.c_()
s=o.pop()
break
case 5:return A.aM(null,r)
case 1:return A.aL(p.at(-1),r)}})
return A.aN($async$c_,r)},
fl(a,b,c,d,e,f,g,h){return B.cr.hp(d,e,f,a,g,h,c,b)},
jV(a,b,c){return this.fl(a,b,c,"auto","full","srgb","auto","profile")},
fo(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.F===s
if(p){r=7
break A}if(B.M===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.M===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.f(A.o("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.qy(r,p,A.Y(q),A.Y(q),A.m(q,t.i))},
cS(a){var s=0,r=A.aO(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cS=A.aP(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aH){s=1
break}switch(a.b.a){case 0:i=B.dO
break
case 2:i=B.ao
break
case 1:i=B.dN
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
k=n.fl(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.p()
s=7
return A.a5(A.wL(i,t.lg.a(k)),$async$cS)
case 7:n.w=t.xK.a(m)
n.fo()
n.cc=n.b
n.cd=n.c
n.x=null
A.jX()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ak(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.x(j)
A.jX()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aM(q,r)
case 2:return A.aL(o.at(-1),r)}})
return A.aN($async$cS,r)},
lB(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.aH||b4.Q.length!==0)return
b4.hJ=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.l(0,b6,r.gaR().ev(8,"texture:wall-plaster",!0,256,B.bb,256))
s.l(0,b7,b4.e.gaR().ev(8,"texture:grime",!0,512,B.bb,512))
for(q=0;q<2;++q){p=B.kR[q]
r=b4.e.w
if(r==null)r=A.f(A.j(b8))
s.l(0,p,r.ev(8,"texture:"+p,!0,256,B.bb,256))}b4.dS()
b4.cK()
b4.RG=b4.cM(A.qL(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
b4.ko()
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.R8,j=t.pw,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.F(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cI(g,g.r,g.e,A.q(g).i("cI<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.by.h(0,c)
if(b==null)A.f(A.j("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.qL(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.f(A.j(b8))
if(a0.x)A.f(A.j(b9))
c.A()
a1=a0.b.a.aF(c,b5)
a0.r.k(0,a1)
k.l(0,c.a,c)
h.l(0,a,a1)}n.l(0,f,h)
g=h.h(0,"wall")
g.toString
m.l(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.k9[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dO(a2)
j=b4.dO(a2)
l=A.qL(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dO(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.f(A.j(b8)):j
if(n.x)A.f(A.j(b9))
l.A()
a1=n.b.a.aF(l,b5)
n.r.k(0,a1)
k.l(0,l.a,l)
o.l(0,a2,a1)}b4.cK()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q)b4.kp(c0,r[q])
b4.kS(c0)
$.w.j().setAttribute("data-renderer-house-model-scale",B.b.I(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.r)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.fs(c0,i,a4)
g=b4.e.w
if(g==null)g=A.f(A.j(b8))
f=a4.a
if(g.x)A.f(A.j(b9))
e=g.a
a5.A()
a1=e.b.aF(a5,"door-leaf:"+f)
c=a1.a
e.c.l(0,c,e.b9(a5))
g.f.k(0,a1)
B.a.k(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.RG
e.toString}a6=new A.bc(a1,e,B.A,0,B.T,B.R,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.A.A()
a=e.a
a0=a.$ti
a.Y(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.A.ac()
c=c.gak()
a0=A.B(c)
A.b_(new A.H(c,a0.i("C(1)").a(a.gan()),a0.i("H<1,C>")))
n.l(0,f,new A.jk(f,g,e.b.bM(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.r)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.kO(i,a4.b3(f),a4.aL(f),a4.aL(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.vC(a4))
a=b4.e.w
if(a==null)a=A.f(A.j(b8))
if(a.x)A.f(A.j(b9))
a0=a.a
e.A()
a1=a0.b.aF(e,"decoration:"+f)
a7=a1.a
a0.c.l(0,a7,a0.b9(e))
a.f.k(0,a1)
B.a.k(l,a1)
a=m.h(0,f)
if(a==null){e=b4.RG
e.toString}else e=a
a8=new A.bc(a1,e,B.A,0,B.T,B.R,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.A.A()
a=e.a
a0=a.$ti
a.Y(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.A.ac()
a=a.gak()
a7=A.B(a)
A.b_(new A.H(a,a7.i("C(1)").a(a0.gan()),a7.i("H<1,C>")))
B.a.k(o,new A.mH(f,e.b.bM(a8),a8,c))}for(r=A.JL(A.J4(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.dL(e)
a0=b4.dL(e)
a=A.qL(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.dL(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.f(A.j(b8)):a0
if(c.x)A.f(A.j(b9))
a.A()
a1=c.b.a.aF(a,b5)
c.r.k(0,a1)
k.l(0,a.a,a)
f.l(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.f(A.j(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.f(A.j(b9))
a7=c.a
a.A()
a1=a7.b.aF(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.l(0,b1,a7.b9(a))
c.f.k(0,a1)
B.a.k(l,a1)
b2=a0+":"+e
g.l(0,b2,b0)
if(!B.ap.p(0,a0))A.f(A.o("unknown exterior cell: "+a0,b5))
b3=new A.bc(a1,b,B.A,-1,B.T,B.R,B.n7.p(0,a0),!0,0,b5)
n.l(0,b2,a0)
m.l(0,b2,b3)
e=b4.f
e===$&&A.p()
B.A.A()
c=e.a
a=c.$ti
c.Y(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.A.ac()
c=c.gak()
a0=A.B(c)
A.b_(new A.H(c,a0.i("C(1)").a(a.gan()),a0.i("H<1,C>")))
j.l(0,b2,e.b.bM(b3))}},
eR(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="renderer is not initialized",b5="resource library is disposed",b6="promoted model package is missing: ",b7=b3.hA=b8.c
b3.id=A.ad(b8.e,t.fl)
if(!b3.aH)return
for(s=b3.p2,r=new A.ae(s,s.r,s.e,A.q(s).i("ae<2>"));r.m();)r.d.Z()
s.N(0)
r=b3.p3
if(r!=null)r.b.N(0)
r=b3.p4
b3.p3=r==null?null:new A.rG(new A.rB(r),A.m(t.N,t.K))
for(r=b3.ch,q=new A.M(r,A.q(r).i("M<1,2>")).gv(0),p=b3.CW;q.m();){o=q.d
o.toString
n=b3.f
n===$&&A.p()
n.b.aJ(o.b)
m=p.h(0,o.a)
if(m!=null){o=b3.e
o===$&&A.p()
o=o.w
if(o==null)o=A.f(A.j(b4))
n=m.a
if(o.x)A.f(A.j(b5))
o.a.aJ(n)
o.f.a7(0,n)}}r.N(0)
p.N(0)
q=b3.cx
B.a.N(q)
for(o=b3.id,n=o.length,l=b3.ok,k=t.fH,j=t.d,i=t.s3,h=b3.p1,g=0;g<n;++g){f=o[g]
e=f.c
d=B.c.p(e.toLowerCase(),"stair")
if(d)continue
d=f.r
d=d!=="story"&&d!=="architecture"
if(d)continue
d=b3.hJ
c=d==null?null:d.e.h(0,f.b)
if(c==null)continue
b=b8.bJ(e)
if(b3.p3!=null&&b3.p4.a.K(b.a)){d=f.f
a=d.a
a0=A.rO(B.P,d.b.b*3.141592653589793/180)
a1=b.a
a2=b3.p4.a.h(0,a1)
a1=a2==null?A.f(A.j(b6+a1)):a2
a2=b3.e
a2===$&&A.p()
a2=a2.w
if(a2==null)a2=A.f(A.j(b4))
a3=b3.f
a3===$&&A.p()
a4=c.d
a5=A.c([],j)
a6=A.c([],i)
a7=new A.hb(a1.c,h,a2,a3,new A.vF(b3,b),new A.hs(new A.C(a4.a+a.a*b7,a4.b+a.b*b7,a4.c+a.c*b7),a0,d.c.a*b7),-1,a5,a6)
a8=a7.jC("LOD0")
a7.x=a8.a
B.a.J(a5,a8.c)
B.a.J(a6,a8.b)
d=b3.p3
d.toString
a=k.a(new A.vG(a7))
a1=d.b
a2=f.a
if(a1.K(a2))A.f(A.j("presentation placement is already bound: "+a2))
e=b8.bJ(e).a
if(d.a.a.a.h(0,e)==null)A.f(A.j(b6+e))
a1.l(0,a2,a.$1(new A.he()))
s.l(0,a2,a7)
continue}e=b3.e
e===$&&A.p()
e=e.w
if(e==null)e=A.f(A.j(b4))
d=b3.kt(b,f,b7)
a=f.a
if(e.x)A.f(A.j(b5))
a1=e.a
d.A()
a9=a1.b.aF(d,"inventory:"+a)
a2=a9.a
a1.c.l(0,a2,a1.b9(d))
e.f.k(0,a9)
e=f.f
d=e.a
a0=A.rO(B.P,e.b.b*3.141592653589793/180)
e=b.b
a1=l.h(0,e)
if(a1==null){a1=l.h(0,"furniture")
a1.toString}a3=c.d
d=new A.hs(new A.C(a3.a+d.a*b7,a3.b+d.b*b7,a3.c+d.c*b7),a0,1)
m=new A.bc(a9,a1,d,-1,B.T,B.R,e!=="micro",!0,0,null)
B.a.k(q,a9)
p.l(0,a,m)
e=b3.f
e===$&&A.p()
d.A()
a1=e.a
a3=a1.$ti
a1.Y(a3.c.a(a9))
a1=a1.b
if(!(a2>=0&&a2<a1.length))return A.d(a1,a2)
b0=a1[a2].c
a1=(b0==null?a3.y[1].a(b0):b0).d
d=d.ac()
a1=a1.gak()
a2=A.B(a1)
A.b_(new A.H(a1,a2.i("C(1)").a(d.gan()),a2.i("H<1,C>")))
r.l(0,a,e.b.bM(m))}b1=s.a
b2=r.a
$.w.j().setAttribute("data-renderer-inventory-items",""+(b2+b1))
b7=$.w.j()
s=b1===0?"proxy":"mixed"
b7.setAttribute("data-renderer-inventory-resolution",s)
$.w.j().setAttribute("data-renderer-inventory-proxy-count",""+b2)
$.w.j().setAttribute("data-renderer-inventory-promoted-count",""+b1)
b3.kT()},
kT(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
for(s=this.p2,s=new A.M(s,A.q(s).i("M<1,2>")).gv(0),r=t.N,q=t.K;s.m();){p=s.d
o=A.m(r,q)
o.l(0,"placementId",p.a)
n=p.b
m=n.x
l=m==null
k=n.z.length
j=n.y.length
m=l?null:m.b.length
if(m==null)m=0
o.J(0,new A.qZ(n.a.a.b,"LOD0",!l,k,j,m).C())
i.push(o)}s=$.w.j()
o=i.length!==0
n=o&&B.a.a2(i,new A.vv())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a1(A.F(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
da(a){var s=0,r=A.aO(t.H),q=this,p,o,n
var $async$da=A.aP(function(b,c){if(b===1)return A.aL(c,r)
for(;;)switch(s){case 0:s=2
return A.a5(B.fe.ck(a,new A.vD(),new A.vE()),$async$da)
case 2:n=c
q.p4=n
p=$.hI
if(p!=null)q.eR(p)
$.w.j().setAttribute("data-renderer-model-packages","validated")
$.w.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.w.j()
o=n.a.ga4()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aM(null,r)}})
return A.aN($async$da,r)},
iQ(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=c3.e,c2=c1.h(0,c4)
if(c2==null)return
s=c2.a
r=t.N
q=A.aI([s],r)
for(p=c3.aQ(s),o=J.Q(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.cl(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c1.h(0,m)!=null)q.k(0,m)}for(c1=c0.ax,c1=new A.M(c1,A.q(c1).i("M<1,2>")).gv(0),s=c0.ay,p=t.h1,o=c0.at;c1.m();){l=c1.d
n=l.a
k=q.p(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aQ(j),f=0;f<g.gu(j);++f){if(!(f<i.length))return A.d(i,f)
e=c0.c4(i[f],k)
d=c0.f
d===$&&A.p()
c=g.h(j,f)
b=e.c
b.A()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.Y(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.ac()
a=a.gak()
a0=A.B(a)
A.b_(new A.H(a,a0.i("C(1)").a(b.gan()),a0.i("H<1,C>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.Y(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb1(e)
B.a.k(h,e)}s.l(0,n,h)
if(h.length!==0)o.l(0,n,B.a.ga_(h))}for(c1=c0.go,s=c1.length,a3=0;a3<c1.length;c1.length===s||(0,A.r)(c1),++a3){a4=c1[a3]
k=q.p(0,a4.a)&&a4.d.$0()?-1:0
p=c0.f
p===$&&A.p()
o=c0.c4(a4.c,k)
n=o.c
n.A()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.Y(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ac()
i=i.gak()
g=A.B(i)
A.b_(new A.H(i,g.i("C(1)").a(n.gan()),g.i("H<1,C>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.Y(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb1(o)}c1=c0.fr
s=A.q(c1).i("ac<1>")
s=A.J(new A.ac(c1,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.r)(s),++a3){a5=c1.h(0,s[a3])
o=a5.e
e=c0.c4(o,q.p(0,a5.b)?-1:0)
o=c0.f
o===$&&A.p()
n=a5.c
i=e.c
i.A()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.Y(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.ac()
g=g.gak()
d=A.B(g)
A.b_(new A.H(g,d.i("C(1)").a(i.gan()),d.i("H<1,C>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.Y(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb1(e)
c1.l(0,a5.a,a5.m0(e))}for(c1=c0.id,s=c1.length,p=c0.ch,o=c0.CW,n=c0.p2,a3=0;a3<s;++a3){a6=c1[a3]
i=a6.a
a7=p.h(0,i)
a8=o.h(0,i)
a9=n.h(0,i)
b0=q.p(0,a6.b)
if(a9!=null){a9.iP(b0?-1:0)
continue}if(a7==null||a8==null)continue
i=c0.f
i===$&&A.p()
g=c0.c4(a8,b0?-1:0)
d=g.c
d.A()
c=i.a
b=c.$ti
a=b.c.a(g.a)
c.Y(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
a2=c[a].c
c=(a2==null?b.y[1].a(a2):a2).d
d=d.ac()
c=c.gak()
b=A.B(c)
A.b_(new A.H(c,b.i("C(1)").a(d.gan()),b.i("H<1,C>")))
i=i.b
b=i.$ti
b.c.a(a7)
b.y[1].a(g)
i.Y(a7)
i=i.b
b=a7.a
if(!(b>=0&&b<i.length))return A.d(i,b)
i[b].sb1(g)}b1=new A.kG().lQ(c4)
c1=$.w.j()
s=A.J(b1,A.q(b1).c)
B.a.X(s)
c1.setAttribute("data-renderer-exterior-cells",B.a.V(s,","))
c1=c0.dx
r=new A.kG().hL(new A.vI(c0),new A.ac(c1,A.q(c1).i("ac<1>")),b1,r)
b2=A.f2(r,r.$ti.i("n.E"))
c1=c0.db
s=A.q(c1).i("ac<1>")
s=A.J(new A.ac(c1,s),s.i("n.E"))
r=s.length
p=c0.cy
b3=0
b4=0
b5=0
a3=0
for(;a3<s.length;s.length===r||(0,A.r)(s),++a3){b6=s[a3]
b7=p.h(0,b6)
if(b7==null)continue
a8=c1.h(0,b6)
o=a8.r
if(o)++b5
b8=b2.p(0,b6)
if(b8)++b3
if(b8&&o)++b4
e=c0.c4(a8,b8?-1:0)
o=c0.f
o===$&&A.p()
n=e.c
n.A()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.Y(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ac()
i=i.gak()
g=A.B(i)
A.b_(new A.H(i,g.i("C(1)").a(n.gan()),g.i("H<1,C>")))
o=o.b
g=o.$ti
g.c.a(b7)
g.y[1].a(e)
o.Y(b7)
o=o.b
g=b7.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb1(e)
c1.l(0,b6,e)}$.w.j().setAttribute("data-renderer-exterior-items",""+b3+"/"+c1.a)
$.w.j().setAttribute("data-renderer-shadow-casters",""+b4+"/"+b5)
c1=A.q(b2)
s=c1.i("du<1,e>")
b9=A.J(new A.du(b2,c1.i("e(1)").a(new A.vJ(c0)),s),s.i("n.E"))
B.a.X(b9)
$.w.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.V(b9,","))},
dg(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aH)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fV(b0,n)
l=J.aQ(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.f(A.j(a8))
c=a7.c1(e.b)
b=g.b
if(d.x)A.f(A.j(a9))
a=d.a
c.A()
a0=a.b.aF(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.l(0,b,a.b9(c))
d.f.k(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bc(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
c=a7.f
c===$&&A.p()
a=l.h(s,f)
d.A()
a3=c.a
a4=a3.$ti
a3.Y(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ac()
b=b.gak()
a3=A.B(b)
A.b_(new A.H(b,a3.i("C(1)").a(d.gan()),a3.i("H<1,C>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.Y(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb1(a2)
B.a.k(k,a0)
B.a.k(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a7(i,a6)
B.a.k(i,a0)
a=a7.e.w
d=a==null?A.f(A.j(a8)):a
if(d.x)A.f(A.j(a9))
d.a.aJ(a6)
d.f.a7(0,a6)}p.l(0,b1,k)
r.l(0,b1,j)
if(j.length!==0)a7.at.l(0,b1,B.a.ga_(j))
$.w.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hK+1));++a7.hK},
eu(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aH)return
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
m=p.gaR().dh(k.fs(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bc(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.ll(l)
p.b.eE(n,l)
s.l(0,b,r.ht(l,m))
s=k.y
n=r.d
B.a.a7(s,n)
B.a.k(s,m)
k.e.gaR().o4(n)},
iF(h4,h5,h6,h7,h8,h9,i0,i1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8=this,g9="rain_override",h0="wetness_override",h1=A.aI([h5],t.N),h2=h4.e,h3=h2.h(0,h5)
if(h3!=null)for(s=h3.a,r=h4.aQ(s),q=J.Q(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.cl(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h2.h(0,o)!=null)h1.k(0,o)}n=new A.q2(h4).oE(h1,h6)
s=A.c([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.r)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.ey(l.a,l.x,l.w,q))}for(r=g8.id,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&h1.p(0,k.b)){j=h2.h(0,k.b)
i=g8.hA
h=k.f.a
j=j.d
s.push(new A.ey(new A.k(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}g8.y2=A.ad(s,t.cZ)
h2=t.jC
g=A.c([],h2)
f=A.c([],h2)
for(e=0;e<n.length;++e){l=n[e]
h2=e===0
s=h2?"spot":"point"
r=l.c
q=l.e
p=l.d
if(s!=="point"&&s!=="spot")A.f(A.a6(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.f(A.a6(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.f(A.a6(p,"radius","must be finite and > 0"))
h2=h2?f:g
B.a.k(h2,new A.b5(e,s,l.a,new A.k((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}h2=g8.fx
h2===$&&A.p()
d=h2.o0(h6,g,f)
h2=A.m(t.S,t.A_)
for(e=0;e<n.length;++e)h2.l(0,e,n[e])
s=A.c([],t.Fk)
for(r=d.a,q=r.length,m=0;m<r.length;r.length===q||(0,A.r)(r),++m){c=r[m]
p=c.a
j=h2.h(0,p).a
i=c.d
s.push(new A.lq(p,new A.C(j.a,j.b,j.c),new A.bI(i.a,i.b,i.c),c.e,c.f))}r=A.c([],t.cv)
for(q=d.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.r)(q),++m){c=q[m]
j=c.a
i=h2.h(0,j)
h=i.a
i=i.b
b=c.d
r.push(new A.bN(j,new A.C(h.a,h.b,h.c),new A.C(i.a,i.b,i.c),new A.bI(b.a,b.b,b.c),c.e,c.f,1.05,1.4))}g8.jH(d,++g8.fy)
h2=$.cV()
a=h2.T("time_override")
if(a>=0)a0=B.b.t(a,0,23.999)
else a0=i1
g8.hF=a0
a1=h9.c
q=h9.d
a2=B.b.R(B.b.R(a0,24)+24,24)
a3=B.b.t(a1,0,1)
a4=B.b.t(q,6,16)/2
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
h=B.b.t(Math.sin(a9),0,1)
b=Math.sin(b0)
b1=Math.cos(a9)
h=B.b.t(1-h,0.1,0.9)
b2=a5-1.5
if(a2>=b2&&a2<a5){b3=(a2-b2)/1.5
A.ci(B.mq,B.dQ,b3)
b4=A.ci(B.ms,B.bH,b3)
b5=A.ci(B.mm,B.bI,b3)
b6=0.3+0.5*b3
b7=0.25+0.2*b3}else if(p&&a2<14){b4=B.bH
b5=B.bI
b6=0.85
b7=0.45}else if(a2>=14&&a2<a6){b3=(a2-14)/(a6-14)
A.ci(B.dQ,B.dP,b3)
b4=A.ci(B.bH,B.dT,b3)
b5=A.ci(B.bI,B.dS,b3)
b6=0.85*(1-b3*0.35)
b7=0.45*(1-b3*0.25)}else if(a2>=a6&&a2<a6+1.5){b3=(a2-a6)/1.5
A.ci(B.dP,B.bJ,b3)
b4=A.ci(B.dT,B.aN,b3)
b5=A.ci(B.dS,B.aO,b3)
b6=0.55*(1-b3*0.8)
b7=0.34*(1-b3*0.65)}else{p=a6+1.5
if(a2>=p&&a2<a6+3){b3=(a2-p)/1.5
A.ci(B.bJ,B.bJ,b3)
b4=A.ci(B.aN,B.aN,b3)
b5=A.ci(B.aO,B.aO,b3)
b6=0.11*(1-b3*0.25)
b7=0.16*(1-b3*0.15)}else{b4=B.aN
b5=B.aO
b6=0.15
b7=0.18}}if(a3>0){b8=A.ci(b5,B.mA,a3*0.7)
b6*=1-a3*0.35
b7*=1-a3*0.15}else b8=b5
b9=i0?1:0.15
c0=B.b.t(a3*0.75+B.b.t(0.3333333333333333,0,1)*0.25,0,1)
if(h2.T(g9)>=0)a1=h2.T(g9)
g8.x1=B.b.t(a1,0,1)
c1=h2.T(h0)>=0?h2.T(h0):c0
g8.cb=B.b.t(c1*B.b.t(h2.T("weather_reflection_strength"),0,2),0,1)
q=A.FI(q)
p=a1*0.92
b2=2+h9.e*0.03
c2=B.b.t(0.68+a1*0.22,0,1)
new A.u2(a0,13,0.8988445647770796,q,p,a1,b2,c2,1,0.0015,0.06).A()
c3=A.B6(a2,13)*3.141592653589793/12
c4=Math.sin(0.8988445647770796)
c5=Math.cos(0.8988445647770796)
c6=c4*Math.sin(q)
c7=c5*Math.cos(q)
c8=c6+c7*Math.cos(c3)
c9=Math.asin(B.b.t(c8,-1,1))
d0=Math.cos(c9)
d1=Math.atan2(Math.sin(c3),Math.cos(c3)*c4-Math.tan(q)*c5)
d2=new A.C(Math.sin(d1)*d0,Math.sin(c9),Math.cos(d1)*d0).gag()
if(Math.abs(c7)<1e-12)d3=c8>0?-2:2
else d3=(Math.sin(-0.014538592669112763)-c6)/c7
d4=d3>-1&&d3<1
d5=d4?Math.acos(d3)*12/3.141592653589793:0
d6=B.b.R(B.b.R(13-d5,24)+24,24)
d7=B.b.R(B.b.R(13+d5,24)+24,24)
q=!d4
d8=q&&c8>0
d9=A.FH(c9,a2,d8,q&&!d8,13)
e0=b2+p*3.5+a1*1.5
e1=A.FF(Math.max(0,1.5707963267948966-c9))
b2=B.b.t(Math.exp(-(0.0046416*e1*e0)),0,1)
c6=B.b.t(Math.exp(-(0.010846399999999999*e1*e0)),0,1)
c7=B.b.t(Math.exp(-(0.02648*e1*e0)),0,1)
e2=B.b.t(Math.exp(-(p*(2.2+a1*2))),0,1)
e3=Math.max(0,Math.sin(c9))
e4=b2*0.2126+c6*0.7152+c7*0.0722
e5=Math.pow(e3,0.35)*e4*e2
e6=B.b.t(e3*e4,0,1)
e7=0.42*e6
e8=0.055+e7*(0.55+0.45*(1-p))
e9=0.0015*(1+c2*1.6+a1*4+p*0.8)
f0=new A.bI(b2,c6,c7)
if(!isFinite(a2)||!isFinite(d6)||!isFinite(d7)||!isFinite(c9)||!isFinite(d1)||!isFinite(e5)||!isFinite(e8)||!isFinite(e9)||!isFinite(0.06)||!d2.ga0(0)||!new A.C(b2,c6,c7).ga0(0)||!f0.ga0(0)||!new A.bI(0.14+0.38*e6,0.16+e7,0.22+0.52*e6).ga0(0)||!new A.bI(0.035+b2*0.18+p*0.1,0.045+c6*0.2+p*0.12,0.07+c7*0.24+p*0.16).ga0(0))A.f(A.j("solar lighting state is not finite"))
if(d2.gbb()<0.999||d2.gbb()>1.001||e5<0||e8<0||e9<0||e2<0||e2>1)A.f(A.j("solar lighting state is out of bounds"))
new A.kz(d2,f0,e5).A()
q=$.w.j()
q.setAttribute("data-renderer-solar-phase",d9.b)
q.setAttribute("data-renderer-solar-sunrise-hours",B.b.I(d6,4))
q.setAttribute("data-renderer-solar-sunset-hours",B.b.I(d7,4))
q.setAttribute("data-renderer-solar-elevation-deg",B.b.I(c9*180/3.141592653589793,4))
q.setAttribute("data-renderer-solar-transmittance",B.b.I(e2,4))
q=$.A0()
q.oz(0.0166,a1)
f1=q.z
f2=B.b.t(Math.sin(Math.max(0,c9))/Math.sin(1.1344640137963142),0,1)
f3=f2>0.001
f4=f3?d2:new A.C(-(j*i),h,-(b*b1))
q=f1.a
f5=q&&f1.ghU()?new A.C(f1.f,f1.r,f1.w):f4
f0=f3?f0:new A.bI(0.35,0.45,0.65)
if(q){p=f1.b
f6=new A.bI(f0.a+f1.c*p*2,f0.b+f1.d*p*2,f0.c+f1.e*p*2.5)}else f6=f0
f7=B.b.t(f1.gmH(),0.12,2)
f8=f3?e5:b6
f9=B.b.t(h2.T("weather_lightning_intensity"),0,2)
b6=f8*b9
if(q)b6=b6*0.12+f1.b*4.5*f7*f9
p=$.w.j()
p.setAttribute("data-renderer-lightning-active",String(q))
j=f1.x
p.setAttribute("data-renderer-lightning-source-distance-m",B.b.I(j,1))
p.setAttribute("data-renderer-lightning-distance-attenuation",B.b.I(f7,4))
i=f1.f
h=f1.r
b=f1.w
p.setAttribute("data-renderer-lightning-source-direction",B.b.I(i,3)+","+B.b.I(h,3)+","+B.b.I(b,3))
g0=h2.cs("fog_enable")
g1=h2.T("fog_density")
g2=h2.T("fog_height_falloff")
g3=B.b.t(h2.T("weather_fog_scattering"),0,2)
e9=g0?e9*B.b.t(g1/0.012,0,8)*g3:0
g4=g0?0.06*B.b.t(g2/0.6,0,8):0
g8.ee=e9
g8.hG=g4
h2=A.c([],t.xL)
for(p=s.length,m=0;m<s.length;s.length===p||(0,A.r)(s),++m){l=s[m]
b1=l.c
b2=l.e
h2.push(new A.cr("point:"+l.a,l.b,new A.C(b1.a,b1.b,b1.c),l.d,Math.max(0.25,b2),Math.max(4,b2*8)))}for(p=r.length,m=0;m<r.length;r.length===p||(0,A.r)(r),++m){l=r[m]
b1=l.d
b2=l.f
h2.push(new A.cr("spot:"+l.a,l.b,new A.C(b1.a,b1.b,b1.c),l.e,Math.max(0.25,b2*0.25),Math.max(8,b2)))}g5=g8.rx
if(q&&f1.ghU()&&g5!=null){g6=new A.C(i,h,b).gag()
B.a.k(h2,new A.cr("lightning:active",g5.d.a5(0,g6.a8(0,j)),new A.C(f1.c,f1.d,f1.e),f1.b*12e4,1000,Math.max(1100,j*1.25)))}if(g5==null)q=null
else{q=g5.d
q=A.FX(g5.e,Math.min(g5.r,64),q,e9,h2)}g8.hz=q
p=q==null
g7=p?null:q.a
if(g7==null)g7=B.u
j=A.c([],t.E7)
e=0
for(;;){if(!(e<g8.y2.length&&e<4))break
j.push(new A.vH(g8,e,h9).$0());++e}if(!p){p=$.w.j()
p.setAttribute("data-renderer-volumetric-source-count",""+q.c)
i=q.a
p.setAttribute("data-renderer-volumetric-source-radiance",B.b.I(i.a,6)+","+B.b.I(i.b,6)+","+B.b.I(i.c,6))
q=q.b
p.setAttribute("data-renderer-volumetric-source-direction",B.b.I(q.a,4)+","+B.b.I(q.b,4)+","+B.b.I(q.c,4))}q=Math.max(0.045,b7*(f3?f2:1)*b9)
g8.ry=new A.kJ(B.jz,new A.bI(b8.c*0.08+B.b.t(g7.a,0,8)*0.015,b8.b*0.08+B.b.t(g7.b,0,8)*0.015,b8.a*0.08+B.b.t(g7.c,0,8)*0.015),1.5/(1+a1*0.45),14/(1+a1*0.16),g4,e9,new A.bI(b4.c,b4.b,b4.a),q,new A.kz(f5,f6,b6),s,r,h2,j)},
kZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="wetness_override",c="fog_height_falloff",b="post_affine_warp",a="post_vertex_snap",a0="weather_particles_enable",a1="weather_particle_density",a2="weather_particle_size",a3="weather_snow_accumulation",a4="weather_fog_scattering",a5="weather_lightning_intensity",a6="weather_reflection_strength",a7=null,a8=t.N,a9=A.aI(["time_override","rain_override",d,"fog_enable","fog_density",c,"post_exposure","post_vignette","post_film_grain",b,a,a0,a1,a2,a3,a4,a5,a6],a8),b0=A.m(a8,a8),b1=$.cV().w
b1===$&&A.p()
s=0
for(;s<50;++s)b0.l(0,b1[s].a,"No resolved Pixeldart frame mapping is installed")
b1=new A.vA(e,a9,b0)
b1.$2("ssao",B.k6)
b1.$2("bloom",B.kA)
b1.$2("dof",B.kC)
b1.$2("grade",B.kB)
b1.$2("ps1",B.kP)
b1.$2("vhs",B.kD)
b1=$.cV()
r=e.hF
q=e.x1
p=e.cb
o=e.ee
n=e.hG
m=e.to
l=b1.T(a1)
k=b1.T(a2)
j=b1.T(a3)
i=b1.T(a4)
h=b1.T(a5)
g=b1.T(a6)
f=e.to
f=A.F(["time_override",r,"rain_override",q,d,p,"fog_density",o,c,n,"post_exposure",m.a,"post_bloom",m.b,"post_vignette",m.e,"post_film_grain",m.f,"post_dither",m.Q,"post_depth_of_field",m.d,"post_color_grade",m.as,b,m.at,a,m.ax,a1,l,a2,k,a3,j,a4,i,a5,h,a6,g,"post_quantization_bits",f.ay,"post_vhs_chroma",f.ch,"post_vhs_noise",f.cx],a8,t.i)
b1.oh("No resolved debug attachments are exposed by the active Pixeldart profile",A.F(["fog_enable",e.ee>0,"shadow_ssdo_enable",e.to.c>0,a0,b1.cs(a0)],a8,t.y),f,a9,b0)
b0=$.DG()
b0.ly(b1)
$.w.j().setAttribute("data-renderer-shader-overrides",B.f.a1(b0.a,a7))
$.w.j().setAttribute("data-renderer-shader-lab",B.f.a1(b1.mC(),a7))
$.w.j().setAttribute("data-renderer-shader-lab-document",B.f.a1(b1.ik(),a7))
$.w.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a1(A.B4().ik(),a7))},
iR(a){var s,r,q,p,o=this
if(a==null){o.d1=o.d0=0
return}s=B.b.t($.cV().T("weather_snow_accumulation"),0,2)
o.d0=B.b.t(a.a/0.08*s,0,1)
o.d1=B.b.t(a.x,0,1)
r=a.b
q=B.b.t(r/0.0008,0,1)
o.cb=Math.max(o.cb,q)
p=$.w.j()
p.setAttribute("data-renderer-weather-snow-coverage",B.b.I(o.d0,4))
p.setAttribute("data-renderer-weather-material-dissolution",B.b.I(o.d1,4))
p.setAttribute("data-renderer-weather-water-film-m",B.b.I(r,8))},
ko(){var s,r,q,p,o=this
if(o.ec!=null||o.ed!=null)return
s=new Float32Array(A.X(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=o.e
r===$&&A.p()
o.ec=r.gaR().dh(o.c1(s),"weather:rain-particle")
o.ed=o.cM(B.ld)
q=new A.cq(new Float32Array(5376))
q.ib(new A.k(-0.035,0,0),new A.k(0.035,0,0),new A.k(0.035,-0.07,0),new A.k(-0.035,-0.07,0),14478335,0.78,!0)
o.hB=o.e.gaR().dh(o.c1(B.r.aB(q.a,0,q.b)),"weather:snow-particle")
o.hC=o.cM(B.lb)
p=new A.cq(new Float32Array(5376))
p.ib(new A.k(-0.025,0,0),new A.k(0.025,0,0),new A.k(0.025,-0.12,0),new A.k(-0.025,-0.12,0),11519958,0.9,!0)
o.hD=o.e.gaR().dh(o.c1(B.r.aB(p.a,0,p.b)),"weather:hail-particle")
o.hE=o.cM(B.lc)},
l9(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null
a1.cY=a1.e9=0
a1.ea=a1.gfO()
a1.d_=a1.cZ=0
a1.eb=!1
a1.cX=a1.cW=a1.e8=0
s=a1.xr
r=s==null
q=r?a2:s.a
if(q==null)q=B.w
p=$.cV()
if(!p.cs("weather_particles_enable"))return
o=B.b.t(p.T("weather_particle_density"),0,2)
n=B.b.t(p.T("weather_particle_size"),0.25,2)
m=r?a2:A.Bm(s.a)
if(m==null)m=A.Bm(B.w)
A:{p=B.an===q
if(p){l=a1.hB
break A}if(B.a6===q||B.am===q){l=a1.hD
break A}l=a1.ec
break A}B:{if(p){k=a1.hC
break B}if(B.a6===q||B.am===q){k=a1.hE
break B}k=a1.ed
break B}if(l==null||k==null||q===B.w||a1.x1<=0.01||a1.x2<=0.01)return
C:{if(p){p=38
break C}if(B.a6===q){p=26
break C}if(B.am===q){p=30
break C}p=32
break C}j=B.d.t(B.b.aK(8+a1.x1*p*o*a1.x2),0,40)
p=a1.gfO()
if(j<0)A.f(A.o("atmospheric particle counts must be >= 0",a2))
i=B.d.t(j,0,p)
a1.e9=j
a1.ea=p
a1.eb=B.d.t(j,0,p)!==j
p=Math.sin(a1.ef*0.7)
h=r?a2:s.b.a
if(h==null)h=0
g=h+p*0.18
r=r?a2:s.b.c
f=(r==null?0:r)+0.12
r=m.f
e=new A.nM(l,k,B.ex,B.o7,B.oa,new A.C(g,m.b,f),B.o8,new A.C(g,-m.c,f),m.d,m.e,i,a1.eh,r*n,m.r,2003132788+q.a)
d=e.n1(a4)
a1.cZ=d.b
a1.d_=d.c
c=new A.kK(a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r,Math.max(0,a4.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,b=0;b<i;++b){a=e.cu(a4,b)
l=e.cu(c,b).c
k=a.c
h=a.d
a0=A.FZ(new A.k(k.a,k.b,k.c),q,a1.cV,p,r,new A.k(l.a,l.b,l.c),new A.k(h.a,h.b,h.c))
if(!a0.a)continue;++a1.e8
a1.cW=a1.cW+a0.r
a1.cX=a1.cX+a0.f}a1.cY=e.jb(a3,a4,new A.vB(a1,m,n))},
kn(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.cV,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
gir(){var s=this.xr
s=s==null?null:s.a
return(s==null?B.w:s).b},
geH(){var s=this.y1
s=s==null?null:s.b
return s==null?0:s},
giq(){var s=this.y1
s=s==null?null:s.d
return s==null?0:s},
gfO(){var s,r=this.w
r===$&&A.p()
s=r.a
A:{if(B.F===s){r=40
break A}if(B.M===s){r=24
break A}r=8
break A}return r},
fV(a,b){var s=A.J5(a,b),r=A.J3(a,b),q=A.J(s.c,t.i)
B.a.J(q,r)
return A.c([new A.hy("wall",new Float32Array(A.X(q))),new A.hy("floor",s.a),new A.hy("ceiling",s.b)],t.pv)},
c1(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.k(n,new A.C(q,p,a[o]))}if(n.length===0)throw A.b(A.j("house surface mesh cannot be empty"))
return new A.bV(B.ab,a,null,A.b_(n))},
kp(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fV(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.j("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.f(A.j("renderer is not initialized"))
j=b.c1(l.b)
i=l.a
if(k.x)A.f(A.j("resource library is disposed"))
h=k.a
j.A()
g=h.b.aF(j,n+i)
f=g.a
h.c.l(0,f,h.b9(j))
k.f.k(0,g)
i=a1.h(0,i)
i.toString
e=new A.bc(g,i,B.A,-1,B.T,B.R,!0,!0,0,null)
i=b.f
i===$&&A.p()
B.A.A()
k=i.a
j=k.$ti
k.Y(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.A.ac()
k=k.gak()
h=A.B(k)
A.b_(new A.H(k,h.i("C(1)").a(j.gan()),h.i("H<1,C>")))
c=i.b.bM(e)
B.a.k(p,g)
B.a.k(o,c)
B.a.k(s,g)
B.a.k(r,c)
B.a.k(q,e)}b.z.l(0,a0,s)
b.ax.l(0,a0,r)
b.ay.l(0,a0,q)
if(r.length!==0)b.as.l(0,a0,B.a.ga_(r))
if(q.length!==0)b.at.l(0,a0,B.a.ga_(q))},
kS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.r)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.F(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cI(l,l.r,l.e,A.q(l).i("cI<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.by.h(0,i)
if(h==null)A.f(A.j("Unknown house surface material: "+i))
i=j.a
B.a.k(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.k(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.w.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.V(e,","))
$.w.j().setAttribute("data-renderer-house-surface-bindings",B.a.V(d,","))},
kt(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cq(new Float32Array(5376))
g=this.kr(a0.b)
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
j=B.r.aB(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.C(e,d,j[c]))}return new A.bV(B.ab,j,null,A.b_(g))},
kr(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
ks(a){var s=this.ok,r=s.h(0,a)
if(r==null){s=s.h(0,"furniture")
s.toString}else s=r
return s},
dL(a){var s
A:{if(0===a){s=B.mn
break A}if(1===a){s=B.mp
break A}if(2===a){s=B.mv
break A}if(3===a){s=B.mD
break A}if(4===a){s=B.mE
break A}if(5===a){s=B.mt
break A}if(6===a){s=B.mC
break A}if(7===a){s=B.my
break A}s=B.mB
break A}return s},
dO(a){var s
A:{if("architecture"===a){s=B.mo
break A}if("furniture"===a){s=B.dR
break A}if("fixture"===a){s=B.mx
break A}if("service"===a){s=B.mz
break A}if("story"===a){s=B.mw
break A}if("decor"===a){s=B.mr
break A}if("micro"===a){s=B.mu
break A}s=B.dR
break A}return s},
dc(a){return this.nq(t.G.a(a))},
nq(a){var s=0,r=A.aO(t.H),q,p=this,o,n,m,l
var $async$dc=A.aP(function(b,c){if(b===1)return A.aL(c,r)
for(;;)switch(s){case 0:if(!p.aH){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.jK[n]
l=a.h(0,m)
if(l!=null)o.push(p.cI(m,l))}s=3
return A.a5(A.pl(o,t.H),$async$dc)
case 3:case 1:return A.aM(q,r)}})
return A.aN($async$dc,r)},
cI(a,b){return this.kw(a,b)},
kw(a,b){var s=0,r=A.aO(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cI=A.aP(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.a5(A.az(A.a(m.decode()),t.X),$async$cI)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.h(m.naturalWidth)
g.height=A.h(m.naturalHeight)
l=g
k=A.G(l.getContext("2d"))
if(!t.m.b(k)){h=A.j("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.h(m.naturalWidth),A.h(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gaR()
f=new Uint8Array(A.X(j))
if(h.x)A.f(A.j("resource library is disposed"))
h.c.oA(d,f)
h=n.e.gaR()
if(h.x)A.f(A.j("resource library is disposed"))
h.c.n_(d)
$.w.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dS()
n.cK()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ak(c)
h=$.w.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dS()
n.cK()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.x(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aM(q,r)
case 2:return A.aL(o.at(-1),r)}})
return A.aN($async$cI,r)},
dS(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aH||i.k1.a===0)return
s=i.k1
r=A.q(s).i("M<1,2>")
r=A.l8(new A.M(s,r),r.i("bZ(n.E)").a(new A.vw()),r.i("n.E"),t.jP)
q=A.J(r,A.q(r).i("n.E"))
s=i.e
s===$&&A.p()
p=s.gaR().gh4().df(q)
s=p.a
o=A.c(s.slice(0),A.B(s))
B.a.W(o,new A.vx())
s=A.B(o)
r=s.i("e(1)")
s=s.i("H<1,e>")
n=new A.H(o,r.a(new A.vy()),s).V(0,",")
m=new A.H(o,r.a(new A.vz()),s).V(0,",")
s=p.cP(B.e8)
r=p.cP(B.e9)
l=p.cP(B.ea)
k=p.cP(B.eb);++i.hH
j=$.w.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.hH)
if(!A.R($.w.j().hasAttribute("data-renderer-texture-residency-initial")))$.w.j().setAttribute("data-renderer-texture-residency-initial",n)},
cK(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aH||j.R8.a===0)return
s=A.c([],t.a6)
for(r=j.R8,r=new A.M(r,A.q(r).i("M<1,2>")).gv(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.d7(p,o,B.c.p(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gaR()
n=r.e
if(n===$){p=r.gh4()
r.e!==$&&A.zP()
n=r.e=new A.qM(p)}m=n.df(s)
s=m.a
l=A.c(s.slice(0),A.B(s))
B.a.W(l,new A.vt())
s=A.B(l)
k=new A.H(l,s.i("e(1)").a(new A.vu()),s.i("H<1,e>")).V(0,",")
s=$.w.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cF(B.bB)+";pending="+m.cF(B.du)+";missing="+m.cF(B.dv)+";evicted="+m.cF(B.dw))},
c4(a,b){return new A.bc(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
fs(a,b,c){var s,r,q,p,o,n=A.J2(a,b,c),m=n.length
if(m===0)throw A.b(A.j("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.C(q,p,n[o]))}return new A.bV(B.ab,n,null,A.b_(s))},
kO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.a_.j().aG(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cq(new Float32Array(5376))
o.aM(k[0],k[1],k[2],k[3],g)
n=B.r.aB(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.C(r,q,n[p]))}return new A.bV(B.ab,n,null,A.b_(k))},
jH(a,b){var s,r,q,p=a.e,o=A.q(p).i("M<1,2>"),n=A.J(new A.M(p,o),o.i("n.E"))
B.a.W(n,new A.vp())
p=$.w.j()
o=a.a
s=A.B(o)
r=a.c
q=A.B(r)
p.setAttribute("data-renderer-light-selection","points="+new A.H(o,s.i("i(1)").a(new A.vq()),s.i("H<1,i>")).V(0,":")+";spots="+new A.H(r,q.i("i(1)").a(new A.vr()),q.i("H<1,i>")).V(0,":"))
q=A.B(n)
p.setAttribute("data-renderer-light-rejections",new A.H(n,q.i("e(1)").a(new A.vs()),q.i("H<1,e>")).V(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
cM(a){var s,r=this.e
r===$&&A.p()
r=r.gaR()
if(r.x)A.f(A.j("resource library is disposed"))
a.A()
s=r.b.a.aF(a,null)
r.r.k(0,s)
this.R8.l(0,a.a,a)
return s},
$iB_:1}
A.vC.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:47}
A.vF.prototype={
$1(a){A.h(a)
return this.a.ks(this.b.b)},
$S:169}
A.vG.prototype={
$1(a){return this.a},
$S:170}
A.vv.prototype={
$1(a){return J.aa(t.of.a(a).h(0,"attached"),!0)},
$S:171}
A.vD.prototype={
$1(a){var s=0,r=A.aO(t.N),q,p
var $async$$1=A.aP(function(b,c){if(b===1)return A.aL(c,r)
for(;;)switch(s){case 0:s=3
return A.a5(A.az(A.a(A.a(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.R(p.ok))throw A.b(A.j("package manifest HTTP "+A.x(A.no(p,"status",t.S))+": "+a))
s=4
return A.a5(A.az(A.a(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aM(q,r)}})
return A.aN($async$$1,r)},
$S:172}
A.vE.prototype={
$2(a,b){var s=0,r=A.aO(t.uo),q,p,o
var $async$$2=A.aP(function(c,d){if(c===1)return A.aL(d,r)
for(;;)switch(s){case 0:s=3
return A.a5(A.az(A.a(A.a(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.R(p.ok))throw A.b(A.j("package payload HTTP "+A.x(A.no(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a5(A.az(A.a(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.AO(d,0,null)
s=1
break
case 1:return A.aM(q,r)}})
return A.aN($async$$2,r)},
$S:173}
A.vI.prototype={
$1(a){var s=this.a.dx.h(0,A.t(a))
s.toString
return s},
$S:26}
A.vJ.prototype={
$1(a){var s,r,q,p
A.t(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.j("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:26}
A.vH.prototype={
$0(){var s,r=this.a.y2,q=this.b
if(!(q<r.length))return A.d(r,q)
s=r[q]
r=s.a
return new A.hr("warm:"+q,new A.C(r.a,r.b,r.c),s.b,B.b.t((s.c-this.c.r)/60,0,1))},
$S:174}
A.vA.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.p()
if(r.b.p(0,a)){this.b.J(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.l(0,b[o],p+s.w.a.b+" does not install it")},
$S:175}
A.vB.prototype={
$1(a){var s=a.c
return!this.a.kn(new A.k(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:176}
A.vw.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bZ(s,a.b,r)},
$S:177}
A.vx.prototype={
$2(a,b){var s=t.e
return B.c.G(s.a(a).a.a,s.a(b).a.a)},
$S:178}
A.vy.prototype={
$1(a){t.e.a(a)
return a.a.a+"="+a.b.b},
$S:48}
A.vz.prototype={
$1(a){var s=t.e.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:48}
A.vt.prototype={
$2(a,b){var s=t.wl
return B.c.G(s.a(a).a.a,s.a(b).a.a)},
$S:180}
A.vu.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:181}
A.vp.prototype={
$2(a,b){var s=t.ou
return B.d.G(s.a(a).a,s.a(b).a)},
$S:182}
A.vq.prototype={
$1(a){return t.J.a(a).a},
$S:37}
A.vr.prototype={
$1(a){return t.J.a(a).a},
$S:37}
A.vs.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:184}
A.mH.prototype={}
A.jk.prototype={
ht(a,b){var s=this,r=b==null?s.d:b
return new A.jk(s.a,s.b,s.c,r,a)},
m0(a){return this.ht(a,null)}}
A.v3.prototype={
gau(){return this.b},
gaV(){return this.c}}
A.wc.prototype={
$2(a,b){var s
A.zy(a,A.x(b))
switch(a){case"master":s=$.bk
if(s!=null)s.iJ(b)
break
case"voice":s=$.bk
if(s!=null)s.iL(b)
break
case"effects":s=$.bk
if(s!=null)s.iI(b)
break
case"ambience":s=$.bk
if(s!=null)s.iH(b)
break
case"music":s=$.bk
if(s!=null)s.iK(b)
break}},
$S:33}
A.wd.prototype={
$1(a){var s
A.zy("muted",""+a)
s=$.bk
if(s!=null)s.eT(a)},
$S:10}
A.we.prototype={
$1(a){var s
A.zy("mono",""+a)
s=$.bk
if(s!=null)s.dq(a)},
$S:10}
A.wk.prototype={
$2(a,b){A.zz(a,A.x(b))
A.BX(a,b)},
$S:33}
A.wl.prototype={
$1(a){var s="high-contrast"
A.zz(s,""+a)
A.vZ(s,a)},
$S:10}
A.wm.prototype={
$1(a){var s="strong-highlights"
A.zz(s,""+a)
A.vZ(s,a)},
$S:10}
A.wn.prototype={
$1(a){$.dn().o8(a)
A.x2()
A.BZ()},
$S:186}
A.wo.prototype={
$0(){var s=$.dn()
s.a=A.dN(null,1)
s.b=A.dN(null,1)
A.x2()
A.BZ()},
$S:0}
A.wp.prototype={
$0(){A.e1(this.a)},
$S:0}
A.wq.prototype={
$0(){this.a.af()},
$S:0}
A.wr.prototype={
$0(){A.e1(this.a)},
$S:0}
A.wf.prototype={
$0(){A.hN(this.a)},
$S:0}
A.wg.prototype={
$1(a){$.jN=a
A.Ct()
A.z0()},
$S:187}
A.wh.prototype={
$1(a){var s=$.cA()
$.zd=a
if(!s.Q&&a.Q){$.bv.j().a=1
$.bv.j().ig(7)
$.ay.j().hV()
$.cz().N(0)}A.Cv()
A.BY()},
$S:188}
A.wi.prototype={
$1(a){$.dk=a
A.zl()
A.n9()},
$S:189}
A.wj.prototype={
$0(){$.dk=B.ay
$.fy.j().eP($.dk)
A.zl()
A.n9()},
$S:0}
A.w9.prototype={
$1(a){var s,r=A.D5(a,A.Cf())
$.jP=A.h2($.k1().b,a)
s=r.b
$.eG.j().cz(a,$.k1().b,s)
$.w.j().setAttribute("data-graphics-fallback",B.a.V(s,"|"))
$.Cg=A.nb(a,r,$.Cg)},
$S:190}
A.wa.prototype={
$0(){A.e1($.eG.j())},
$S:0}
A.wb.prototype={
$0(){A.e1($.eG.j())},
$S:0}
A.w5.prototype={
$1(a){},
$S:24}
A.w6.prototype={
$1(a){var s,r
$.z9=a
$.aj.j().eQ(a.r)
s=$.aj.j()
r=s.ch
r.a=a.f
r.ex()
s.bi()
A.Cu()},
$S:191}
A.w7.prototype={
$0(){A.e1($.jF.j())},
$S:0}
A.w8.prototype={
$0(){A.e1($.jF.j())},
$S:0}
A.wT.prototype={
$0(){$.xf=A.R(this.a.matches)
$.zE=A.R(this.b.matches)
A.n9()},
$S:0}
A.wR.prototype={
$1(a){return this.a.$0()},
$S:2}
A.wS.prototype={
$1(a){return this.a.$0()},
$S:2}
A.xG.prototype={
$1(a){var s
try{A.Ap(this.b,a,this.a)
return!0}catch(s){if(A.ak(s) instanceof A.A)return!1
else throw s}},
$S:192}
A.xH.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jM.j()
break
case 5:p=$.fy.j()
break
case 1:p=$.eG.j()
break
case 4:p=$.hE.j()
break
case 2:p=$.jH.j()
break
case 3:p=$.jF.j()
break}s=p
r=null
switch(o){case 0:r=B.lO
break
case 5:r=B.lT
break
case 1:r=B.lP
break
case 4:r=B.lS
break
case 2:r=B.lQ
break
case 3:r=B.lR
break}q=r
p=B.dq.h(0,a)
p.toString
A.zk(s,q,p)},
$S:193}
A.xI.prototype={
$0(){A.e1($.hG.j())},
$S:0}
A.xT.prototype={
$0(){return A.e1($.hG.j())},
$S:0}
A.y2.prototype={
$0(){$.cw.j().af()},
$S:0}
A.y3.prototype={
$0(){$.cw.j().af()},
$S:0}
A.y4.prototype={
$0(){A.zk($.hG.j(),B.dy,"pause.settings")},
$S:0}
A.y5.prototype={
$0(){$.cw.j().af()
A.jV($.jI.j())},
$S:0}
A.y6.prototype={
$0(){A.jY("saved")},
$S:0}
A.y7.prototype={
$0(){$.cw.j().af()
A.jV($.jI.j())},
$S:0}
A.y8.prototype={
$0(){A.zk($.n6.j(),B.lU,"pause.credits")},
$S:0}
A.xJ.prototype={
$0(){return A.hN($.cw.j())},
$S:0}
A.xK.prototype={
$1(a){var s=$.U.j(),r=s.e.oD(a),q=r?B.iF:B.iG
s.fP(q,r?a:null)
return r},
$S:20}
A.xL.prototype={
$0(){return A.hN($.jJ.j())},
$S:0}
A.xM.prototype={
$2(a,b){var s,r
if($.ay.j().y){s=$.aK.j().gca()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.He(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.d9,a)
A.Hd(B.d9[a])}}},
$S:194}
A.xN.prototype={
$2(a,b){var s,r,q,p,o,n
if($.U.j().gah().a===21){A.CA(!1)
return}s=$.a_.j().r.b
$.U.j().j2(a,b,$.aq)
r=$.a_.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.ct()
if(typeof n!=="number")return A.xB(n)
if(!(o<n))break
if($.a_.b===$.a_)A.f(A.a8(""))
p=B.a.h(B.V,q).b
o=$.aG
if(o!=null){n=$.a_.b
if(n===$.a_)A.f(A.a8(""))
o.dg(n,p)}o=q
if(typeof o!=="number")return o.a5()
q=o+1}A.jY("saved after sleep")},
$S:195}
A.xO.prototype={
$0(){return A.hN($.n8.j())},
$S:0}
A.xP.prototype={
$0(){return A.hN($.jI.j())},
$S:0}
A.xQ.prototype={
$0(){return A.e1($.n6.j())},
$S:0}
A.xR.prototype={
$0(){A.hN($.jG.j())},
$S:0}
A.xS.prototype={
$0(){A.hN($.jG.j())},
$S:0}
A.xU.prototype={
$1(a){return A.Cz()},
$S:2}
A.xV.prototype={
$1(a){if(A.t(A.a(v.G.document).visibilityState)==="hidden")A.Ic()},
$S:1}
A.xW.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a(a)
if(A.t(l.code)==="CapsLock"&&!A.R(l.repeat)){l.preventDefault()
p=$.cV()
o=!p.a
p.a=o
if(o)A.ql(A.a(v.G.document),"exitPointerLock",t.X)
else $.aj.j().di($.w.j())
return}p=$.cV()
if(p.a&&!A.R(l.repeat)){if(A.t(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.aj.j().di($.w.j())
return}if(A.t(l.code)==="ArrowUp"||A.t(l.code)==="KeyW"){l.preventDefault()
n=p.gbq().length
if(n>0)p.c=B.d.R(p.c-1+n,n)
o=$.eJ
if(o!=null){p=p.gbq().length
o.a.dn(-1,p)}return}if(A.t(l.code)==="ArrowDown"||A.t(l.code)==="KeyS"){l.preventDefault()
n=p.gbq().length
if(n>0)p.c=B.d.R(p.c+1,n)
o=$.eJ
if(o!=null){p=p.gbq().length
o.a.dn(1,p)}return}if(A.t(l.code)==="ArrowLeft"||A.t(l.code)==="KeyA"){l.preventDefault()
p.mA()
return}if(A.t(l.code)==="ArrowRight"||A.t(l.code)==="KeyD"){l.preventDefault()
p.n9()
return}if(A.t(l.code)==="KeyQ"){l.preventDefault()
m=p.gbL()
p=m==null?null:m.Q===B.x
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.t(m.y-m.w*0.2,m.f,m.r)
return}if(A.t(l.code)==="KeyE"){l.preventDefault()
m=p.gbL()
p=m==null?null:m.Q===B.x
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.t(m.y+m.w*0.2,m.f,m.r)
return}if(A.t(l.code)==="KeyR"){l.preventDefault()
if(A.R(l.shiftKey))p.o7()
else p.o9()
return}if(B.c.U(A.t(l.code),"Digit")||B.c.U(A.t(l.code),"Numpad")){o=A.t(l.code)
o=A.zO(o,"Digit","")
s=A.zO(o,"Numpad","")
r=A.dI(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.ay.j().y&&!A.R(l.repeat))if($.cz().n5(A.t(l.code))){l.preventDefault()
return}if(A.t(l.code)==="Escape"&&!A.R(l.repeat)){p=$.bj
if(p==null)A.jV($.cw.j())
else p.af()
return}q=$.bj==null&&!p.a
if(!A.R(l.repeat)&&q)$.fz.j().hQ(new A.lC(A.t(l.code),!0,1))
if(A.t(l.code)==="KeyP"&&!A.R(l.repeat)&&$.Dy())$.hO=!$.hO
if((A.t(l.code)==="KeyJ"||A.t(l.code)==="Tab")&&!A.R(l.repeat)&&!$.ay.j().y){l.preventDefault()
A.jZ($.jJ.j())}if(A.t(l.code)==="KeyL"&&!A.R(l.repeat)&&!$.ay.j().y)A.jZ($.n8.j())
if(A.t(l.code)==="KeyH"&&!A.R(l.repeat)&&!$.ay.j().y)A.jZ($.jI.j())
if(A.t(l.code)==="KeyO"&&!A.R(l.repeat)&&!$.ay.j().y)A.jZ($.jL.j())
if(A.t(l.code)==="KeyK"&&!A.R(l.repeat)&&q)A.jY("saved")},
$S:1}
A.xX.prototype={
$1(a){var s=A.a(a)
if($.bj==null)$.fz.j().hQ(new A.lC(A.t(s.code),!1,0))},
$S:1}
A.xY.prototype={
$1(a){return A.C0()},
$S:2}
A.xZ.prototype={
$1(a){return A.C0()},
$S:2}
A.y_.prototype={
$1(a){return A.HG(A.a(a))},
$S:2}
A.y0.prototype={
$1(a){var s=A.a(a)
if($.ay.j().y){s.preventDefault()
A.HF(s)
return}$.aj.j().di($.w.j())},
$S:1}
A.y1.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.cV()
if(!o.a||$.eJ==null)return
p.preventDefault()
s=o.gbq()
r=A.a0(p.deltaY)>0?1:-1
o=$.eJ
o.toString
q=J.cW(s)
o.a.dn(A.h(r),q)},
$S:1}
A.wU.prototype={
$1(a){var s=A.t(A.a(a).message)
A.x5(s,null)},
$S:1}
A.wV.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.x5("unhandled rejection: "+A.x(s==null?A.t(a.type):s),null)},
$S:1}
A.x1.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:45}
A.xb.prototype={
$0(){this.a.className=""},
$S:17}
A.xi.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:49}
A.wY.prototype={
$2(a,b){var s=t.q
return B.c.G(s.a(a).a,s.a(b).a)},
$S:28}
A.x7.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.x3.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.x4.prototype={
$1(a){return t.h.a(a).w},
$S:15}
A.xm.prototype={
$1(a){return t.h.a(a).w},
$S:15}
A.xh.prototype={
$2(a,b){return A.aF(a)+t.cZ.a(b).d},
$S:196};(function aliases(){var s=J.eq.prototype
s.jd=s.q
s=A.n.prototype
s.jc=s.dl
s=A.iB.prototype
s.je=s.bS})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"HN","ET",35)
r(J.u.prototype,"gaC","p",8)
q(A,"I1","Ff",38)
r(A.aU.prototype,"gaC","p",8)
r(A.h0.prototype,"gaC","p",8)
p(A.cm.prototype,"glW","K",8)
o(A,"IY","Gh",22)
o(A,"IZ","Gi",22)
o(A,"J_","Gj",22)
q(A,"CR","IB",0)
r(A.cu.prototype,"gaC","p",8)
r(A.hu.prototype,"gaC","p",8)
o(A,"Ja","Hn",16)
p(A.la.prototype,"gof","og",111)
var l
p(l=A.lV.prototype,"gob","oc",11)
p(l,"gol","om",11)
p(l,"gon","oo",11)
p(l,"god","oe",11)
p(l,"goi","oj",11)
q(A,"CW","Gn",198)
q(A,"KJ","yF",47)
p(A.dF.prototype,"gan","il",66)
n(A.jA.prototype,"gmG","Z",0)
p(l=A.kY.prototype,"gky","kz",2)
p(l,"gkA","kB",2)
p(l,"gkE","kF",2)
p(l,"gkI","kJ",2)
p(l,"gkK","kL",2)
p(l,"gkG","kH",2)
p(l,"gkC","kD",2)
o(A,"Jy","C5",16)
o(A,"JC","C4",16)
o(A,"Jq","EQ",199)
o(A,"Jr","ER",200)
o(A,"JH","EK",201)
m(A,"JP",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["Bn",function(){return A.Bn(0,0,0)}],202,0)
p(A.iB.prototype,"gkM","kN",2)
p(A.hm.prototype,"gkl","km",142)
p(A.m7.prototype,"gni","nj",27)
o(A,"D4","If",203)
q(A,"D3","Hk",0)
o(A,"Ju","Hf",136)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.K,null)
q(A.K,[A.yw,J.l_,A.iN,J.eQ,A.n,A.i1,A.at,A.a2,A.td,A.ai,A.ir,A.T,A.ib,A.i8,A.j3,A.aB,A.ev,A.bg,A.h9,A.fQ,A.eh,A.dV,A.db,A.uj,A.rf,A.i9,A.jr,A.af,A.qF,A.bU,A.ae,A.cI,A.il,A.mD,A.mj,A.iU,A.mV,A.v4,A.vR,A.cO,A.mw,A.mY,A.vN,A.mk,A.cd,A.bm,A.mo,A.dU,A.as,A.ml,A.mT,A.jD,A.jb,A.mC,A.fu,A.je,A.jw,A.mZ,A.ei,A.kq,A.vn,A.vV,A.vS,A.eV,A.dt,A.mt,A.ll,A.iS,A.v5,A.A,A.O,A.aw,A.mW,A.u4,A.bB,A.jy,A.un,A.mQ,A.re,A.mz,A.eD,A.e6,A.m1,A.qY,A.lb,A.r8,A.r_,A.r2,A.f4,A.rQ,A.dK,A.ls,A.oC,A.oD,A.oF,A.oE,A.lr,A.fM,A.kJ,A.kK,A.dL,A.kU,A.bI,A.kz,A.lq,A.bN,A.cK,A.b8,A.iZ,A.bV,A.kt,A.rg,A.lt,A.lE,A.bc,A.lT,A.iK,A.aV,A.ph,A.d7,A.c5,A.qO,A.qM,A.la,A.lY,A.qU,A.i0,A.qX,A.qZ,A.hb,A.ly,A.bZ,A.c9,A.ue,A.uc,A.di,A.lV,A.u2,A.hr,A.cr,A.uG,A.dD,A.kH,A.kI,A.kL,A.pg,A.hw,A.av,A.bx,A.aJ,A.P,A.i3,A.lw,A.bb,A.rS,A.b7,A.rU,A.rT,A.my,A.iJ,A.lD,A.v6,A.mX,A.vM,A.mJ,A.mv,A.mN,A.mG,A.vi,A.bW,A.bS,A.b1,A.oV,A.oU,A.fG,A.f6,A.pi,A.dF,A.lz,A.hs,A.C,A.nN,A.fI,A.nM,A.i_,A.mm,A.ki,A.mn,A.kv,A.mq,A.i6,A.mr,A.kA,A.ms,A.kT,A.mx,A.it,A.mE,A.fK,A.kj,A.yG,A.iD,A.mK,A.lx,A.mL,A.fg,A.lN,A.mO,A.lO,A.mP,A.lQ,A.mS,A.lP,A.mR,A.m2,A.n_,A.mb,A.n1,A.n0,A.iL,A.mf,A.n4,A.oA,A.kP,A.kR,A.ie,A.iP,A.y,A.kw,A.hd,A.pE,A.eE,A.d9,A.fX,A.uX,A.dY,A.jC,A.jB,A.n3,A.n2,A.vX,A.uT,A.uW,A.ky,A.kc,A.hA,A.jA,A.nT,A.ny,A.hY,A.nP,A.yr,A.o0,A.nV,A.j4,A.fL,A.ox,A.pf,A.kY,A.qd,A.qh,A.b5,A.qB,A.qy,A.oW,A.qH,A.cq,A.k,A.uM,A.cs,A.j1,A.uK,A.uI,A.lR,A.mg,A.oq,A.kB,A.p4,A.fY,A.bE,A.lp,A.rJ,A.hk,A.t6,A.fd,A.kN,A.ps,A.pr,A.ke,A.e8,A.ea,A.ec,A.e9,A.eb,A.kk,A.lc,A.cR,A.mh,A.ii,A.pW,A.a7,A.kE,A.kV,A.pX,A.kF,A.dh,A.kG,A.eC,A.el,A.t3,A.eB,A.pU,A.p8,A.tZ,A.pZ,A.d5,A.cG,A.qk,A.qi,A.qj,A.dH,A.q2,A.fo,A.c7,A.l7,A.fh,A.fc,A.q5,A.d4,A.pV,A.f0,A.q4,A.d3,A.q9,A.iC,A.iq,A.by,A.uF,A.l6,A.c2,A.qn,A.hZ,A.on,A.iE,A.rC,A.iF,A.lu,A.rw,A.rv,A.rx,A.ry,A.rz,A.rA,A.he,A.rB,A.rD,A.rG,A.rH,A.ip,A.rP,A.t1,A.lC,A.t0,A.t2,A.tQ,A.cp,A.tS,A.hn,A.oX,A.uY,A.fp,A.ko,A.qb,A.qf,A.t4,A.da,A.t5,A.kO,A.fm,A.uR,A.j2,A.ey,A.uH,A.uQ,A.fn,A.fl,A.mc,A.hv,A.uS,A.pp,A.kM,A.r9,A.cZ,A.bA,A.rt,A.u6,A.fk,A.fj,A.j0,A.ma,A.fa,A.dg,A.u5,A.hl,A.lJ,A.lG,A.lH,A.lI,A.u9,A.k4,A.yq,A.e5,A.nI,A.nO,A.e7,A.op,A.bn,A.oy,A.fS,A.dr,A.kp,A.iB,A.p_,A.py,A.pA,A.h_,A.em,A.pQ,A.pH,A.pI,A.ch,A.pR,A.d8,A.fN,A.ri,A.dG,A.es,A.c6,A.rn,A.rN,A.bd,A.tK,A.tO,A.cB,A.nF,A.m7,A.uE,A.dS,A.bC,A.cc,A.c0,A.m9,A.k6,A.m6,A.hy,A.mI,A.mH,A.jk,A.v3])
q(J.l_,[J.l1,J.ik,J.im,J.h4,J.h5,J.h3,J.ep])
q(J.im,[J.eq,J.u,A.er,A.ix])
q(J.eq,[J.lo,J.fi,J.dE])
r(J.l0,A.iN)
r(J.qm,J.u)
q(J.h3,[J.ij,J.l2])
q(A.n,[A.eA,A.S,A.cJ,A.I,A.ia,A.dT,A.ft,A.mi,A.mU,A.bF])
q(A.eA,[A.eU,A.jE])
r(A.j9,A.eU)
r(A.j7,A.jE)
r(A.b6,A.j7)
q(A.at,[A.h6,A.dP,A.l3,A.lX,A.lF,A.mu,A.io,A.k9,A.cC,A.iX,A.lW,A.ho,A.kn])
r(A.ht,A.a2)
r(A.ds,A.ht)
q(A.S,[A.Z,A.ac,A.ao,A.M,A.fs,A.jd])
q(A.Z,[A.iV,A.H,A.bK,A.mB])
r(A.du,A.cJ)
q(A.bg,[A.dW,A.dX,A.hx])
q(A.dW,[A.a9,A.fx,A.jl,A.jm])
q(A.dX,[A.aE,A.bh,A.jn,A.jo])
r(A.jp,A.hx)
r(A.hC,A.h9)
r(A.ew,A.hC)
r(A.i4,A.ew)
q(A.eh,[A.km,A.kl,A.lU,A.xC,A.xE,A.v0,A.v_,A.w0,A.pm,A.vg,A.vj,A.qI,A.vl,A.ya,A.yb,A.xt,A.tP,A.r0,A.r5,A.r6,A.r4,A.wW,A.xe,A.x_,A.xc,A.rR,A.us,A.qR,A.qS,A.qT,A.rh,A.qP,A.qQ,A.qV,A.xu,A.uf,A.ug,A.ui,A.pc,A.pa,A.pb,A.rk,A.rl,A.rZ,A.rY,A.rX,A.rW,A.rV,A.t_,A.wJ,A.wK,A.t8,A.t9,A.yi,A.yg,A.pj,A.qK,A.xq,A.pF,A.pG,A.uU,A.uV,A.o2,A.o6,A.o5,A.o4,A.o7,A.nU,A.nz,A.nA,A.nB,A.nR,A.nS,A.nQ,A.qe,A.qz,A.uN,A.uO,A.uJ,A.uL,A.p7,A.pt,A.pv,A.pw,A.px,A.o8,A.o9,A.oa,A.ob,A.oc,A.oe,A.of,A.og,A.oh,A.oi,A.oj,A.ok,A.od,A.xp,A.ol,A.om,A.x0,A.xl,A.oB,A.p9,A.pY,A.yj,A.wO,A.wN,A.vY,A.xa,A.qa,A.u_,A.q1,A.q_,A.xk,A.q6,A.q8,A.xj,A.p3,A.qE,A.qu,A.x9,A.rE,A.rF,A.rI,A.tR,A.tX,A.tT,A.tU,A.tW,A.tV,A.u3,A.oY,A.oZ,A.po,A.ru,A.tb,A.tc,A.ua,A.ub,A.nx,A.nv,A.nY,A.nZ,A.os,A.ow,A.ov,A.ou,A.oO,A.oN,A.oP,A.oQ,A.oR,A.oM,A.oH,A.oI,A.oT,A.p0,A.p1,A.p2,A.p6,A.pz,A.pB,A.pC,A.pO,A.pL,A.pM,A.pN,A.pK,A.pJ,A.pT,A.qp,A.qq,A.qr,A.ro,A.rp,A.rq,A.tF,A.tG,A.tx,A.ty,A.tw,A.tz,A.th,A.tA,A.tB,A.tC,A.tv,A.tn,A.to,A.tp,A.tq,A.tr,A.ts,A.tt,A.tu,A.tm,A.ti,A.tj,A.tk,A.tl,A.tE,A.tD,A.tM,A.u1,A.nH,A.uC,A.uB,A.uD,A.ux,A.uA,A.uv,A.uu,A.xx,A.ut,A.nC,A.nD,A.nE,A.vF,A.vG,A.vv,A.vD,A.vI,A.vJ,A.vB,A.vw,A.vy,A.vz,A.vu,A.vq,A.vr,A.vs,A.wd,A.we,A.wl,A.wm,A.wn,A.wg,A.wh,A.wi,A.w9,A.w5,A.w6,A.wR,A.wS,A.xG,A.xH,A.xK,A.xU,A.xV,A.xW,A.xX,A.xY,A.xZ,A.y_,A.y0,A.y1,A.wU,A.wV,A.x1,A.xi,A.x7,A.x3,A.x4,A.xm])
q(A.km,[A.oG,A.qv,A.xD,A.w1,A.xn,A.pn,A.vh,A.qG,A.qJ,A.vo,A.up,A.uo,A.r1,A.r3,A.r7,A.yk,A.yl,A.yc,A.qN,A.qW,A.ud,A.uh,A.yd,A.pd,A.ta,A.yh,A.yf,A.o3,A.nW,A.nX,A.qA,A.pu,A.xd,A.q3,A.qD,A.tY,A.qg,A.pq,A.rb,A.rc,A.rd,A.u7,A.u8,A.oz,A.qs,A.qt,A.nG,A.uy,A.uw,A.vE,A.vA,A.vx,A.vt,A.vp,A.wc,A.wk,A.xM,A.xN,A.wY,A.xh])
q(A.fQ,[A.a4,A.d1])
q(A.db,[A.fR,A.jq,A.jx])
q(A.fR,[A.aU,A.h0])
q(A.kl,[A.rK,A.v1,A.v2,A.vO,A.pk,A.v7,A.vc,A.vb,A.v9,A.v8,A.vf,A.ve,A.vd,A.vL,A.x8,A.vU,A.vT,A.wI,A.wB,A.wC,A.wH,A.ww,A.wy,A.wx,A.wG,A.wu,A.wv,A.wD,A.wE,A.wF,A.wA,A.wz,A.wM,A.xr,A.q0,A.q7,A.wP,A.nw,A.nK,A.nJ,A.o_,A.oK,A.oL,A.oJ,A.pD,A.pP,A.rs,A.tf,A.tg,A.tH,A.tI,A.tJ,A.tN,A.uz,A.vC,A.vH,A.wo,A.wp,A.wq,A.wr,A.wf,A.wj,A.wa,A.wb,A.w7,A.w8,A.wT,A.xI,A.xT,A.y2,A.y3,A.y4,A.y5,A.y6,A.y7,A.y8,A.xJ,A.xL,A.xO,A.xP,A.xQ,A.xR,A.xS,A.xb])
r(A.iz,A.dP)
q(A.lU,[A.lS,A.fJ])
q(A.af,[A.cm,A.ja,A.mA])
r(A.f1,A.cm)
r(A.hc,A.er)
q(A.ix,[A.ld,A.bp])
q(A.bp,[A.jg,A.ji])
r(A.jh,A.jg)
r(A.iv,A.jh)
r(A.jj,A.ji)
r(A.iw,A.jj)
q(A.iv,[A.iu,A.le])
q(A.iw,[A.lf,A.lg,A.lh,A.li,A.lj,A.f5,A.iy])
r(A.hB,A.mu)
r(A.j5,A.mo)
r(A.mM,A.jD)
r(A.jc,A.ja)
r(A.cu,A.jq)
r(A.hu,A.jx)
q(A.ei,[A.kC,A.kf,A.l4])
q(A.kC,[A.k7,A.m0])
q(A.kq,[A.vP,A.oo,A.qx,A.qw,A.ur,A.uq])
r(A.k8,A.vP)
r(A.l5,A.io)
r(A.vm,A.vn)
q(A.cC,[A.hg,A.kX])
r(A.mp,A.jy)
q(A.mt,[A.kx,A.f8,A.fU,A.fP,A.f_,A.fH,A.is,A.cP,A.hj,A.fW,A.kh,A.i2,A.fV,A.fb,A.f3,A.cN,A.dO,A.be,A.eX,A.cl,A.iM,A.d2,A.hi,A.iR,A.fZ,A.kb,A.j6,A.j8,A.kQ,A.ic,A.ig,A.kS,A.eZ,A.id,A.ff,A.de,A.fO,A.h1,A.hz,A.kg,A.eT,A.kr,A.ku,A.br,A.kd,A.cj,A.dw,A.eW,A.dv,A.ek,A.ej,A.en,A.ln,A.lB,A.hh,A.lM,A.iQ,A.dc,A.bY,A.bM,A.kZ,A.fq,A.co,A.eu,A.ez,A.eR,A.cX,A.cD,A.cY,A.dq,A.dp,A.ee,A.ef,A.ed,A.eS,A.dz,A.d_,A.d0,A.dA,A.dy,A.dB,A.ck,A.dx,A.cE,A.k5,A.bz,A.cn,A.et,A.cM,A.bX,A.bL,A.iO,A.bT,A.ca,A.cb,A.ex,A.df])
q(A.dL,[A.bJ,A.bs,A.c4,A.lm,A.cF])
r(A.t7,A.mN)
r(A.md,A.n2)
r(A.jf,A.dh)
q(A.iB,[A.i5,A.oS,A.p5,A.ih,A.pS,A.qo,A.rr,A.te,A.hm,A.u0])
q(A.uE,[A.m8,A.mF,A.bu,A.m5,A.m3,A.j_,A.m4])
s(A.ht,A.ev)
s(A.jE,A.a2)
s(A.jg,A.a2)
s(A.jh,A.aB)
s(A.ji,A.a2)
s(A.jj,A.aB)
s(A.hC,A.jw)
s(A.jx,A.mZ)
s(A.mN,A.vi)
s(A.n2,A.vX)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",z:"double",bw:"num",e:"String",l:"bool",aw:"Null",L:"List",K:"Object",V:"Map",al:"JSObject"},mangledNames:{},types:["~()","aw(K?)","~(K?)","l(e)","l(z)","dC()","l(@)","0&()","l(K?)","l(cp)","~(l)","dC(bs?)","l(av)","l(fa)","i(c2,c2)","l(fo)","@(@)","aw()","l(b8)","~(@)","l(i)","e(e6)","~(~())","l(c2)","aw(@)","l(bd)","e(e)","l(c0)","i(O<e,e>,O<e,e>)","l(P)","e(ea)","e(e8)","l(eC)","~(e,z)","@(e)","i(@,@)","e(K?)","i(b5)","i()","l(cX)","l(O<e,L<e>>)","O<e,e>(@,@)","~(al)","l(cE)","@()","l(ck)","~(e,e)","l()","e(c9)","l(bA)","~(K?,K?)","fg()","aw(@,dd)","bN?()","L<bN>()","fM()","z()","fK()","l(O<e,aV>)","aV(O<e,aV>)","aV(aV,aV)","i(b1<bW>,b1<bW>)","c8(b1<bW>)","i(b1<bS>,b1<bS>)","c8(b1<bS>)","f6(z,z,z,z)","C(C)","~(fg)","i(i,c_)","~(i,@)","z(z,hA)","aS<aw>(O<e,e>)","l(L<e>)","i(e,e)","i(c7,c7)","~(K,dd)","+effectiveScore,light,score(z,b5,z)(b5)","i(+effectiveScore,light,score(z,b5,z),+effectiveScore,light,score(z,b5,z))","l(cj)","V<e,@>(f4)","aw(K,dd)","~(@,@)","l(fc)","e8(K?)","ea(K?)","e9(K?)","eb(K?)","aw(~())","@(@,e)","i(+influence,light(z,bN),+influence,light(z,bN))","e(e9)","e(eb)","e(ec)","V<e,e>(V<e,e>,e)","ek(e)","ec(K?)","l(fh)","e(i,a7,a7,a7)","i(dh,dh)","l(c5)","l(eB)","i(i)","l(c7)","l(cG)","l(d5)","i(d7,d7)","i(dH,dH)","l(d4)","O<e,e>(e,@)","e?(e)","aS<c_>(e)","cK(c4)","i(cp,cp)","z(z)","l(bY)","l(bM)","fm()","c4(i,i,e?)","bJ(i,i,e?)","i(O<e,cZ>,O<e,cZ>)","i(i,+(bJ,bV))","O<i,@>(i,fk)","O<i,@>(i,fj)","l(c9)","l(O<@,@>)","O<e,e>(O<@,@>)","l?(K?)","i(bZ,bZ)","e()","0^(n<0^>,K?)<K?>","z(z,e)","0&(e,i?)","L<e>(L<e>)","~(z)","bs(i,i,e?)","l(c_?)","~(i)","0^(e,n<0^>)<D>","i(i,+(bs,di))","V<e,K?>(dG)","e(bz)","l(bz)","l(bL)","i(+influence,source(z,cr),+influence,source(z,cr))","l(dz)","l(d_)","l(d0)","l(dA)","l(dy)","l(dB)","l(dx)","e(av)","l(cD)","l(cY)","l(dq)","l(dp)","e(cB)","i(cB,cB)","i(ab,ab)","i(c0,c0)","L<dg>()","l(dg)","l(O<e,e>)","i(cc,cc)","V<e,@>(c0)","l(cb)","l(ca)","l(bT)","K?(K?)","c4(i)","hb(he)","l(V<e,K>)","aS<e>(e)","aS<c_>(e,e)","hr()","~(e,n<e>)","l(fI)","bZ(O<e,bs>)","i(c9,c9)","e(i)","i(c5,c5)","e(c5)","i(O<i,e>,O<i,e>)","cF(i,i,e?)","e(O<i,e>)","iL(bJ)","~(bL)","~(e7)","~(h_)","~(e5)","~(em)","~(fS)","l(hk)","~(bX)","~(i,e)","~(bY,bM)","z(z,ey)","dC(e{fallback:e?})","hw()","d5(K?)","cG(K?)","d4(K?)","hv({materialDissolution01:z,snowDepthM:z,waterFilmDepthM:z})","~(bw)","aw(al)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a9&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fx&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jl&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.jm&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aE&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bh&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jn&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.jo&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jp&&A.Jw(a,b.a)}}
A.GF(v.typeUniverse,JSON.parse('{"dE":"eq","lo":"eq","fi":"eq","K0":"er","u":{"L":["1"],"S":["1"],"al":[],"n":["1"]},"l1":{"l":[],"am":[]},"ik":{"aw":[],"am":[]},"im":{"al":[]},"eq":{"al":[]},"l0":{"iN":[]},"qm":{"u":["1"],"L":["1"],"S":["1"],"al":[],"n":["1"]},"eQ":{"ag":["1"]},"h3":{"z":[],"bw":[],"bo":["bw"]},"ij":{"z":[],"i":[],"bw":[],"bo":["bw"],"am":[]},"l2":{"z":[],"bw":[],"bo":["bw"],"am":[]},"ep":{"e":[],"bo":["e"],"rm":[],"am":[]},"eA":{"n":["2"]},"i1":{"ag":["2"]},"eU":{"eA":["1","2"],"n":["2"],"n.E":"2"},"j9":{"eU":["1","2"],"eA":["1","2"],"S":["2"],"n":["2"],"n.E":"2"},"j7":{"a2":["2"],"L":["2"],"eA":["1","2"],"S":["2"],"n":["2"]},"b6":{"j7":["1","2"],"a2":["2"],"L":["2"],"eA":["1","2"],"S":["2"],"n":["2"],"n.E":"2","a2.E":"2"},"h6":{"at":[]},"ds":{"a2":["i"],"ev":["i"],"L":["i"],"S":["i"],"n":["i"],"a2.E":"i","ev.E":"i"},"S":{"n":["1"]},"Z":{"S":["1"],"n":["1"]},"iV":{"Z":["1"],"S":["1"],"n":["1"],"n.E":"1","Z.E":"1"},"ai":{"ag":["1"]},"cJ":{"n":["2"],"n.E":"2"},"du":{"cJ":["1","2"],"S":["2"],"n":["2"],"n.E":"2"},"ir":{"ag":["2"]},"H":{"Z":["2"],"S":["2"],"n":["2"],"n.E":"2","Z.E":"2"},"I":{"n":["1"],"n.E":"1"},"T":{"ag":["1"]},"ia":{"n":["2"],"n.E":"2"},"ib":{"ag":["2"]},"i8":{"ag":["1"]},"dT":{"n":["1"],"n.E":"1"},"j3":{"ag":["1"]},"ht":{"a2":["1"],"ev":["1"],"L":["1"],"S":["1"],"n":["1"]},"bK":{"Z":["1"],"S":["1"],"n":["1"],"n.E":"1","Z.E":"1"},"a9":{"dW":[],"bg":[]},"fx":{"dW":[],"bg":[]},"jl":{"dW":[],"bg":[]},"jm":{"dW":[],"bg":[]},"aE":{"dX":[],"bg":[]},"bh":{"dX":[],"bg":[]},"jn":{"dX":[],"bg":[]},"jo":{"dX":[],"bg":[]},"jp":{"hx":[],"bg":[]},"i4":{"ew":["1","2"],"hC":["1","2"],"h9":["1","2"],"jw":["1","2"],"V":["1","2"]},"fQ":{"V":["1","2"]},"a4":{"fQ":["1","2"],"V":["1","2"]},"ft":{"n":["1"],"n.E":"1"},"dV":{"ag":["1"]},"d1":{"fQ":["1","2"],"V":["1","2"]},"fR":{"db":["1"],"dM":["1"],"S":["1"],"n":["1"]},"aU":{"fR":["1"],"db":["1"],"dM":["1"],"S":["1"],"n":["1"]},"h0":{"fR":["1"],"db":["1"],"dM":["1"],"S":["1"],"n":["1"]},"iz":{"dP":[],"at":[]},"l3":{"at":[]},"lX":{"at":[]},"jr":{"dd":[]},"eh":{"eY":[]},"kl":{"eY":[]},"km":{"eY":[]},"lU":{"eY":[]},"lS":{"eY":[]},"fJ":{"eY":[]},"lF":{"at":[]},"cm":{"af":["1","2"],"yy":["1","2"],"V":["1","2"],"af.K":"1","af.V":"2"},"ac":{"S":["1"],"n":["1"],"n.E":"1"},"bU":{"ag":["1"]},"ao":{"S":["1"],"n":["1"],"n.E":"1"},"ae":{"ag":["1"]},"M":{"S":["O<1,2>"],"n":["O<1,2>"],"n.E":"O<1,2>"},"cI":{"ag":["O<1,2>"]},"f1":{"cm":["1","2"],"af":["1","2"],"yy":["1","2"],"V":["1","2"],"af.K":"1","af.V":"2"},"dW":{"bg":[]},"dX":{"bg":[]},"hx":{"bg":[]},"il":{"Fp":[],"rm":[]},"mD":{"iH":[],"ha":[]},"mi":{"n":["iH"],"n.E":"iH"},"mj":{"ag":["iH"]},"iU":{"ha":[]},"mU":{"n":["ha"],"n.E":"ha"},"mV":{"ag":["ha"]},"hc":{"er":[],"al":[],"am":[]},"f5":{"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"er":{"al":[],"am":[]},"ix":{"al":[]},"ld":{"al":[],"am":[]},"bp":{"c3":["1"],"al":[]},"iv":{"a2":["z"],"bp":["z"],"L":["z"],"c3":["z"],"S":["z"],"al":[],"n":["z"],"aB":["z"]},"iw":{"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"]},"iu":{"pe":[],"a2":["z"],"bp":["z"],"L":["z"],"c3":["z"],"S":["z"],"al":[],"n":["z"],"aB":["z"],"am":[],"a2.E":"z","aB.E":"z"},"le":{"a2":["z"],"bp":["z"],"L":["z"],"c3":["z"],"S":["z"],"al":[],"n":["z"],"aB":["z"],"am":[],"a2.E":"z","aB.E":"z"},"lf":{"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"lg":{"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"lh":{"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"li":{"ul":[],"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"lj":{"um":[],"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"iy":{"c_":[],"a2":["i"],"bp":["i"],"L":["i"],"c3":["i"],"S":["i"],"al":[],"n":["i"],"aB":["i"],"am":[],"a2.E":"i","aB.E":"i"},"mu":{"at":[]},"hB":{"dP":[],"at":[]},"cd":{"ag":["1"]},"bF":{"n":["1"],"n.E":"1"},"bm":{"at":[]},"j5":{"mo":["1"]},"as":{"aS":["1"]},"jD":{"Bw":[]},"mM":{"jD":[],"Bw":[]},"ja":{"af":["1","2"],"V":["1","2"]},"jc":{"ja":["1","2"],"af":["1","2"],"V":["1","2"],"af.K":"1","af.V":"2"},"fs":{"S":["1"],"n":["1"],"n.E":"1"},"jb":{"ag":["1"]},"cu":{"db":["1"],"AG":["1"],"dM":["1"],"S":["1"],"n":["1"]},"fu":{"ag":["1"]},"a2":{"L":["1"],"S":["1"],"n":["1"]},"af":{"V":["1","2"]},"jd":{"S":["2"],"n":["2"],"n.E":"2"},"je":{"ag":["2"]},"h9":{"V":["1","2"]},"ew":{"hC":["1","2"],"h9":["1","2"],"jw":["1","2"],"V":["1","2"]},"db":{"dM":["1"],"S":["1"],"n":["1"]},"jq":{"db":["1"],"dM":["1"],"S":["1"],"n":["1"]},"hu":{"db":["1"],"mZ":["1"],"dM":["1"],"S":["1"],"n":["1"]},"mA":{"af":["e","@"],"V":["e","@"],"af.K":"e","af.V":"@"},"mB":{"Z":["e"],"S":["e"],"n":["e"],"n.E":"e","Z.E":"e"},"k7":{"ei":["e","L<i>"]},"kf":{"ei":["L<i>","e"]},"kC":{"ei":["e","L<i>"]},"io":{"at":[]},"l5":{"at":[]},"l4":{"ei":["K?","e"]},"m0":{"ei":["e","L<i>"]},"eV":{"bo":["eV"]},"z":{"bw":[],"bo":["bw"]},"dt":{"bo":["dt"]},"i":{"bw":[],"bo":["bw"]},"L":{"S":["1"],"n":["1"]},"bw":{"bo":["bw"]},"iH":{"ha":[]},"dM":{"S":["1"],"n":["1"]},"e":{"bo":["e"],"rm":[]},"mt":{"D":[]},"k9":{"at":[]},"dP":{"at":[]},"cC":{"at":[]},"hg":{"at":[]},"kX":{"at":[]},"iX":{"at":[]},"lW":{"at":[]},"ho":{"at":[]},"kn":{"at":[]},"ll":{"at":[]},"iS":{"at":[]},"mW":{"dd":[]},"bB":{"FL":[]},"jy":{"lZ":[]},"mQ":{"lZ":[]},"mp":{"lZ":[]},"mz":{"yH":[]},"eD":{"yH":[]},"kx":{"D":[]},"f8":{"D":[]},"fU":{"D":[]},"fP":{"D":[]},"bJ":{"dL":[]},"bs":{"dL":[]},"c4":{"dL":[]},"cF":{"dL":[]},"lm":{"dL":[]},"f_":{"D":[]},"fH":{"D":[]},"is":{"D":[]},"cP":{"D":[]},"kt":{"Fx":[]},"hj":{"D":[]},"fW":{"D":[]},"kh":{"D":[]},"i2":{"D":[]},"fV":{"D":[]},"fb":{"D":[]},"f3":{"D":[]},"cN":{"D":[]},"dO":{"D":[]},"be":{"D":[]},"eX":{"D":[]},"kL":{"Fq":[]},"cl":{"D":[]},"iM":{"D":[]},"d2":{"D":[]},"hi":{"D":[]},"iJ":{"Ft":[]},"my":{"c8":[]},"lD":{"Fv":[]},"mX":{"c8":[]},"mJ":{"Fs":[]},"mv":{"Ez":[]},"iR":{"D":[]},"bW":{"bo":["bW"]},"bS":{"bo":["bS"]},"fZ":{"D":[]},"kb":{"D":[]},"j6":{"D":[]},"i_":{"ap":[]},"mm":{"ab":[]},"ki":{"ap":[]},"mn":{"ab":[]},"kv":{"ap":[]},"mq":{"ab":[]},"j8":{"D":[]},"i6":{"ap":[]},"mr":{"ab":[]},"kA":{"ap":[]},"ms":{"ab":[]},"kT":{"ap":[]},"mx":{"ab":[]},"it":{"ap":[]},"mE":{"ab":[]},"kj":{"Fr":[]},"iD":{"ap":[]},"mK":{"ab":[]},"lx":{"ap":[]},"mL":{"ab":[]},"lN":{"ap":[]},"mO":{"ab":[]},"lO":{"ap":[]},"mP":{"ab":[]},"lQ":{"ap":[]},"mS":{"ab":[]},"lP":{"ap":[]},"mR":{"ab":[]},"m2":{"ap":[]},"n_":{"ab":[]},"mb":{"ap":[]},"n1":{"ab":[]},"n0":{"ab":[]},"mf":{"ap":[]},"n4":{"ab":[]},"kQ":{"D":[]},"ic":{"D":[]},"ig":{"D":[]},"kS":{"D":[]},"eZ":{"D":[]},"id":{"D":[]},"ff":{"D":[]},"de":{"D":[]},"fO":{"D":[]},"kw":{"Ei":[]},"h1":{"D":[]},"hz":{"D":[]},"br":{"D":[]},"kg":{"D":[]},"eT":{"D":[]},"kr":{"D":[]},"ku":{"D":[]},"dY":{"dC":[]},"md":{"EG":[]},"kd":{"D":[]},"cj":{"D":[]},"dw":{"D":[]},"jf":{"dh":[]},"eW":{"D":[]},"dv":{"D":[]},"ek":{"D":[]},"ej":{"D":[]},"en":{"D":[]},"ln":{"D":[]},"lB":{"D":[]},"hh":{"D":[]},"dc":{"D":[]},"lM":{"D":[]},"iQ":{"D":[]},"bY":{"D":[]},"bM":{"D":[]},"kZ":{"D":[]},"fq":{"D":[]},"co":{"D":[]},"eu":{"D":[]},"ez":{"D":[]},"eR":{"D":[]},"cX":{"D":[]},"cD":{"D":[]},"cY":{"D":[]},"dq":{"D":[]},"dp":{"D":[]},"ee":{"D":[]},"ef":{"D":[]},"eS":{"D":[]},"ed":{"D":[]},"dz":{"D":[]},"d_":{"D":[]},"d0":{"D":[]},"dA":{"D":[]},"dy":{"D":[]},"dB":{"D":[]},"ck":{"D":[]},"dx":{"D":[]},"cE":{"D":[]},"k5":{"D":[]},"bz":{"D":[]},"cn":{"D":[]},"et":{"D":[]},"cM":{"D":[]},"bX":{"D":[]},"bL":{"D":[]},"iO":{"D":[]},"bT":{"D":[]},"ca":{"D":[]},"cb":{"D":[]},"ex":{"D":[]},"df":{"D":[]},"mI":{"B_":[]},"EP":{"L":["i"],"S":["i"],"n":["i"]},"c_":{"L":["i"],"S":["i"],"n":["i"]},"FO":{"L":["i"],"S":["i"],"n":["i"]},"EN":{"L":["i"],"S":["i"],"n":["i"]},"ul":{"L":["i"],"S":["i"],"n":["i"]},"EO":{"L":["i"],"S":["i"],"n":["i"]},"um":{"L":["i"],"S":["i"],"n":["i"]},"pe":{"L":["z"],"S":["z"],"n":["z"]},"Ey":{"L":["z"],"S":["z"],"n":["z"]}}'))
A.GE(v.typeUniverse,JSON.parse('{"ht":1,"jE":2,"bp":1,"jq":1,"jx":1,"kq":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",p:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a1
return{mq:s("cX"),dx:s("hY"),bC:s("cB"),zU:s("e6"),v:s("bm"),iF:s("kc"),ul:s("dp"),EL:s("cY"),xs:s("cD"),gc:s("dq"),t3:s("ke"),mD:s("e8"),lT:s("e9"),bJ:s("ea"),gI:s("eb"),ya:s("ec"),z3:s("bS"),Bu:s("fK"),ml:s("i0"),J:s("b5"),rO:s("fN"),E:s("ds"),hO:s("bo<@>"),CH:s("i3"),D:s("a4<e,e>"),I:s("a4<e,i>"),M:s("aU<e>"),f7:s("eV"),fP:s("bT"),yb:s("dt"),he:s("S<@>"),yW:s("cj"),g:s("c2"),Ct:s("D"),yt:s("at"),hl:s("a7"),B:s("pe"),pH:s("aV"),Fr:s("cZ"),BO:s("eY"),ls:s("aS<aw>"),xJ:s("aS<e>(e)"),zL:s("aS<c_>(e)"),tX:s("aS<c_>(e,e)"),vS:s("dx"),aJ:s("dy"),x:s("ck"),bK:s("dz"),gm:s("dA"),dn:s("d_"),mx:s("dB"),j_:s("d0"),EJ:s("d1<bX,e>"),_:s("dC"),Eb:s("cE"),qX:s("en"),mF:s("d4"),iO:s("cF"),oW:s("d5"),fl:s("cG"),FA:s("n<i3>"),CB:s("n<d7>"),Eh:s("n<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),yT:s("n<e>"),x6:s("n<bZ>"),A1:s("n<fl>"),oJ:s("n<z>"),tY:s("n<@>"),iC:s("n<i>"),Fg:s("u<cB>"),t9:s("u<e6>"),AO:s("u<i0>"),jC:s("u<b5>"),km:s("u<fN>"),sa:s("u<ch>"),ns:s("u<kB>"),U:s("u<c2>"),uH:s("u<kF>"),Dl:s("u<a7>"),iJ:s("u<aS<~>>"),pC:s("u<kN>"),C1:s("u<dC>"),ka:s("u<bx>"),Fm:s("u<f0>"),op:s("u<d3>"),hr:s("u<dD>"),s3:s("u<cF>"),sL:s("u<al>"),Bv:s("u<l6>"),yH:s("u<l7>"),Bq:s("u<O<e,e>>"),rq:s("u<V<e,K>>"),A7:s("u<V<e,e>>"),cs:s("u<V<e,@>>"),bk:s("u<V<e,K?>>"),a6:s("u<d7>"),p0:s("u<c5>"),d:s("u<bJ>"),w4:s("u<f4>"),pq:s("u<av>"),bA:s("u<dG>"),xz:s("u<bA>"),s0:s("u<f6>"),hc:s("u<d8>"),ea:s("u<dH>"),Fk:s("u<lq>"),qP:s("u<c7>"),d8:s("u<iE>"),Fa:s("u<iF>"),kv:s("u<fa>"),nR:s("u<+(e,L<c7>)>"),kd:s("u<+(e,e)>"),c2:s("u<+(e,C)>"),rh:s("u<+influence,light(z,bN)>"),z4:s("u<+influence,source(z,cr)>"),wt:s("u<+(i,e)>"),ff:s("u<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),e_:s("u<ap>"),u:s("u<ab>"),Ft:s("u<iJ>"),C:s("u<P>"),h1:s("u<bc>"),s2:s("u<c8>"),eY:s("u<fc>"),xB:s("u<da>"),rn:s("u<lG>"),gg:s("u<lH>"),tS:s("u<hl>"),yv:s("u<lI>"),wM:s("u<lJ>"),hT:s("u<cp>"),El:s("u<hn>"),AM:s("u<b1<bS>>"),fs:s("u<b1<bW>>"),cv:s("u<bN>"),DZ:s("u<fh>"),s:s("u<e>"),r8:s("u<bZ>"),fa:s("u<c9>"),E7:s("u<hr>"),k:s("u<C>"),fi:s("u<k>"),v5:s("u<b8>"),ld:s("u<j0>"),Dc:s("u<dS>"),Fi:s("u<cc>"),jV:s("u<dg>"),xL:s("u<cr>"),su:s("u<ey>"),wb:s("u<j1>"),eQ:s("u<cs>"),uI:s("u<fl>"),yo:s("u<fm>"),nm:s("u<fo>"),uk:s("u<bE>"),wf:s("u<jf>"),il:s("u<eC>"),l5:s("u<eB>"),ow:s("u<mG>"),j5:s("u<mH>"),pv:s("u<hy>"),Fy:s("u<eE<cK>>"),EM:s("u<eE<bV>>"),w_:s("u<eE<bc>>"),f2:s("u<eE<di>>"),n:s("u<z>"),zz:s("u<@>"),t:s("u<i>"),Cf:s("u<K?>"),AN:s("u<bw>"),w:s("ik"),m:s("al"),ud:s("dE"),yO:s("c3<@>"),AQ:s("L<b5>"),hk:s("L<c2>"),b:s("L<bx>"),xp:s("L<cF>"),nx:s("L<al>"),rW:s("L<V<e,e>>"),qr:s("L<bJ>"),R:s("L<av>"),fG:s("L<d8>"),Es:s("L<c7>"),DX:s("L<+(e,e)>"),pL:s("L<+(i,e)>"),bE:s("L<bc>"),fx:s("L<da>"),yu:s("L<cp>"),a:s("L<e>"),uh:s("L<j0>"),D0:s("L<dS>"),cf:s("L<cc>"),p7:s("L<dg>"),dd:s("L<z>"),j:s("L<@>"),L:s("L<i>"),ik:s("L<al?>"),vX:s("L<K?>"),m2:s("iq"),h6:s("O<e,aV>"),gJ:s("O<e,cZ>"),q:s("O<e,e>"),no:s("O<e,bs>"),AC:s("O<@,@>"),ou:s("O<i,e>"),pr:s("O<i,@>"),yx:s("O<e,L<e>>"),mf:s("V<e,dC>"),vD:s("V<e,c4>"),of:s("V<e,K>"),ap:s("V<e,av>"),G:s("V<e,e>"),qH:s("V<e,dO>"),m0:s("V<e,l>"),gG:s("V<e,z>"),P:s("V<e,@>"),f:s("V<@,@>"),eU:s("V<i,e>"),pG:s("V<i,fj>"),tQ:s("V<i,fk>"),Bx:s("V<e,L<e>>"),oZ:s("V<e,K?>"),q1:s("V<cb,L<cc>>"),ee:s("V<i,V<e,e>>"),dH:s("H<i,e>"),jT:s("H<e,e?>"),w1:s("cK"),pw:s("c4"),jt:s("d7"),wl:s("c5"),kc:s("bJ"),aw:s("f4"),mL:s("hb"),rV:s("hc"),mV:s("f5"),c:s("aw"),K:s("K"),fH:s("K(he)"),BB:s("bW"),A:s("av"),oP:s("dG"),wJ:s("bz"),E4:s("bA"),A_:s("dH"),W:s("c7"),DL:s("iC"),AB:s("ls"),yi:s("hd"),rx:s("iE"),c_:s("iF"),zC:s("lu"),xK:s("dK"),Y:s("fa"),iM:s("K1"),ep:s("+()"),k0:s("+(bJ,bV)"),ut:s("+(bs,di)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bN)"),bG:s("+influence,source(z,cr)"),tK:s("+effectiveScore,light,score(z,b5,z)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)"),ez:s("iH"),wZ:s("ab"),lg:s("iK"),tc:s("d9<cF,bc>"),ja:s("d9<c4,cK>"),wm:s("d9<bJ,bV>"),qq:s("d9<bs,di>"),j2:s("P"),m3:s("bc"),yz:s("c8"),z_:s("fc"),F3:s("da"),Dm:s("hl"),Q:s("dM<e>"),oG:s("dM<i>"),en:s("bL"),gl:s("bd"),r:s("cp"),u5:s("bM"),is:s("bY"),ho:s("hn"),EH:s("b1<bS>"),E0:s("b1<bW>"),l:s("dd"),w8:s("fh"),qL:s("br"),N:s("e"),dc:s("e(i)"),Aj:s("bs"),jP:s("bZ"),e:s("c9"),bp:s("dO"),sg:s("am"),bs:s("dP"),ys:s("ul"),Dd:s("um"),uo:s("c_"),qF:s("fi"),hL:s("ew<e,e>"),qt:s("lY"),eP:s("lZ"),zo:s("m1"),cV:s("C"),a7:s("k"),qY:s("b8"),T:s("c0"),gM:s("ca"),hF:s("cb"),vw:s("fj"),BX:s("fk"),aA:s("dS"),AP:s("cc"),sy:s("ma"),bB:s("bu"),aS:s("dg"),cZ:s("ey"),EI:s("j1"),uz:s("cs"),qR:s("fl"),fu:s("fm"),fw:s("I<bT>"),vL:s("I<cj>"),vK:s("I<ck>"),Fj:s("I<bM>"),rZ:s("I<bY>"),vY:s("I<e>"),g2:s("I<ca>"),cE:s("I<cb>"),rt:s("T<bL>"),xG:s("T<bd>"),h:s("fo"),hR:s("as<@>"),BT:s("jc<K?,K?>"),Ez:s("dh"),rL:s("hw"),xT:s("eC"),wU:s("eB"),la:s("mF"),qS:s("jk"),jS:s("hA"),EF:s("bF<+(e,bs)>"),Br:s("bF<c8>"),oe:s("bF<hl>"),a_:s("jA"),V:s("jB"),o:s("jC"),y:s("l"),Bs:s("l()"),C3:s("l(fI)"),kr:s("l(bT)"),e2:s("l(cj)"),rg:s("l(ck)"),bl:s("l(K)"),pz:s("l(bL)"),aV:s("l(bd)"),y2:s("l(bM)"),ty:s("l(bY)"),Ag:s("l(e)"),da:s("l(ca)"),u_:s("l(cb)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(K)"),nW:s("@(K,dd)"),S:s("i"),eZ:s("aS<aw>?"),r9:s("u<K?>?"),gt:s("al?"),rK:s("L<@>?"),yq:s("V<@,@>?"),jd:s("V<e,L<e>>?"),X:s("K?"),dM:s("B_?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("c_?"),F:s("dU<@,@>?"),Af:s("mC?"),k7:s("l?"),wK:s("l(hk)?"),u6:s("z?"),lo:s("i?"),s7:s("bw?"),Z:s("~()?"),Cv:s("~(e5)?"),kC:s("~(e7)?"),pf:s("~(fS)?"),hq:s("~(h_)?"),CA:s("~(em)?"),hQ:s("~(bX)?"),Ci:s("~(bL)?"),nf:s("~(bY,bM)?"),DI:s("~(e,z)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,e)?"),p:s("bw"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ju=J.l_.prototype
B.a=J.u.prototype
B.d=J.ij.prototype
B.b=J.h3.prototype
B.c=J.ep.prototype
B.jv=J.dE.prototype
B.jw=J.im.prototype
B.r=A.iu.prototype
B.W=A.iy.prototype
B.dK=J.lo.prototype
B.c1=J.fi.prototype
B.ae=new A.cX(1,"standard")
B.Q=new A.k4(B.ae)
B.ca=new A.cX(0,"concise")
B.cb=new A.cX(2,"verbose")
B.ay=new A.e5(null,null,null,null,null)
B.pd=new A.k5(0,"none")
B.eu=new A.fH(0,"opaque")
B.aX=new A.fH(1,"masked")
B.ev=new A.k8(!1,127)
B.ew=new A.k8(!0,127)
B.ex=new A.kb(1,"camera")
B.ey=new A.kd(4,"ambience")
B.cf=new A.cD(3,"mono")
B.aZ=new A.dq(0,"full")
B.ce=new A.cD(0,"auto")
B.cd=new A.cY(1,"standard")
B.cc=new A.dp(0,"defaultMix")
B.b_=new A.e7(B.ce,B.cd,B.aZ,B.cc)
B.eF=new A.eR(0,"broadcast")
B.eG=new A.eR(1,"visitor")
B.eH=new A.eR(2,"aftermath")
B.eI=new A.eR(3,"ending")
B.aP=new A.lB(0,"pixeldart")
B.eJ=new A.hZ(B.aP,!0,!1,null,!1,null)
B.eK=new A.hZ(B.aP,!1,!1,null,!1,null)
B.ch=new A.ed(1,"capturing")
B.eL=new A.dr(B.ch,null)
B.ci=new A.ed(3,"rejected")
B.b0=new A.dr(B.ci,null)
B.cj=new A.ed(4,"applied")
B.cg=new A.dr(B.cj,null)
B.ck=new A.ed(5,"cancelled")
B.eM=new A.dr(B.ck,null)
B.b1=new A.ed(2,"conflict")
B.az=new A.kg(0,"add")
B.eQ=new A.eT(0,"zero")
B.af=new A.eT(1,"one")
B.R=new A.kh(0,"alpha")
B.I=new A.ee(1,"button")
B.o=new A.ef(0,"normal")
B.eT=new A.bn("settings.back",B.I,"back","back to pause menu",B.o)
B.aA=new A.ee(0,"heading")
B.eU=new A.bn("settings.heading",B.aA,"Settings",null,B.o)
B.eV=new A.bn("settings.controls.heading",B.aA,"Controls",null,B.o)
B.eW=new A.bn("settings.controls.back",B.I,"back","back to settings categories",B.o)
B.eX=new A.bn("pause.heading",B.aA,"Paused",null,B.o)
B.eY=new A.ee(3,"slider")
B.eZ=new A.ee(4,"toggle")
B.cl=new A.ee(5,"keybind")
B.aB=new A.ef(5,"disabled")
B.f_=new A.ef(6,"error")
B.f0=new A.ef(7,"destructive")
B.cm=new A.ef(8,"remapping")
B.cn=new A.hY()
B.f1=new A.k7()
B.pe=new A.oo()
B.f2=new A.kf()
B.co=new A.oA()
B.f3=new A.i8(A.a1("i8<0&>"))
B.cp=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f4=function() {
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
B.f9=function(getTagFallback) {
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
B.f5=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.f8=function(hooks) {
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
B.f7=function(hooks) {
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
B.f6=function(hooks) {
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
B.cq=function(hooks) { return hooks; }

B.f=new A.l4()
B.fa=new A.r_()
B.fb=new A.ll()
B.pg=new A.rw()
B.fc=new A.rx()
B.cr=new A.rz()
B.fd=new A.rD()
B.fe=new A.rH()
B.ff=new A.da()
B.aQ=new A.co(1,"gradeLUT")
B.fg=new A.da()
B.fh=new A.t4()
B.fi=new A.t6()
B.h=new A.td()
B.cs=new A.m0()
B.ct=new A.ur()
B.pf=new A.kt()
B.fj=new A.uW()
B.b2=new A.mz()
B.B=new A.mM()
B.aC=new A.mW()
B.fk=new A.fL(1.3089969389957472,0.1,60)
B.fl=new A.fL(1.0471975511965976,0.1,60)
B.fm=new A.fL(0.8726646259971648,0.08,45)
B.S=new A.fO(0,"colorOnly")
B.cu=new A.fO(1,"colorAndDepth")
B.b3=new A.fO(2,"depthOnly")
B.fn=new A.i2(0,"linear")
B.b4=new A.i2(1,"srgb")
B.cv=new A.fP(0,"open")
B.fo=new A.fP(1,"committed")
B.fp=new A.fP(2,"aborted")
B.b5=new A.fU(0,"open")
B.fw=new A.fU(1,"committed")
B.fx=new A.fU(2,"rolledBack")
B.aD=new A.kr(1,"back")
B.aE=new A.ku(0,"less")
B.fy=new A.fV(0,"off")
B.cw=new A.fV(1,"errorsOnly")
B.fz=new A.fV(2,"full")
B.cx=new A.kx(2,"error")
B.aF=new A.bT(0,"open")
B.cy=new A.bT(1,"chain")
B.cz=new A.bT(2,"throughDoor")
B.cA=new A.bT(3,"letterbox")
B.ag=new A.bT(4,"ignore")
B.T=new A.fW(0,"opaque")
B.fA=new A.fW(1,"masked")
B.aG=new A.fW(2,"blended")
B.cB=new A.fX(!1,B.aE,!1,!0,B.af,B.af,B.az,!1,B.aD,!0,!1,!0,!0,!0,!0,!1)
B.fB=new A.fX(!0,B.aE,!1,!0,B.af,B.af,B.az,!0,B.aD,!0,!1,!0,!0,!0,!0,!1)
B.eR=new A.eT(2,"srcAlpha")
B.eS=new A.eT(3,"oneMinusSrcAlpha")
B.fC=new A.fX(!0,B.aE,!1,!0,B.eR,B.eS,B.az,!0,B.aD,!0,!1,!0,!0,!0,!0,!1)
B.fD=new A.dt(0)
B.fE=new A.dt(22e4)
B.fF=new A.dt(24e5)
B.cC=new A.cj(0,"compliance")
B.fG=new A.fY(B.cC)
B.cD=new A.cj(1,"rupture")
B.fH=new A.fY(B.cD)
B.cE=new A.cj(2,"synchronisation")
B.fI=new A.fY(B.cE)
B.cF=new A.eW(0,"front")
B.fJ=new A.eW(1,"rearService")
B.fK=new A.eW(2,"sideBoundary")
B.fL=new A.eW(3,"roofline")
B.z=new A.ej(0,"north")
B.ah=new A.ej(1,"east")
B.q=new A.ej(2,"south")
B.ai=new A.ej(3,"west")
B.fM=new A.ek(0,"ground")
B.fN=new A.ek(1,"first")
B.fO=new A.ek(2,"hidden")
B.fP=new A.dv(0,"mantle")
B.fQ=new A.dv(1,"portal")
B.fS=new A.dv(3,"inventory")
B.cG=new A.dv(4,"aftermath")
B.fR=new A.dv(2,"window")
B.fU=new A.el(B.fR,"shutter","the shutter")
B.fT=new A.dv(5,"none")
B.fV=new A.el(B.fT,null,null)
B.fW=new A.A("saved mantle history is malformed",null,null)
B.fX=new A.A("rupture elapsed time is malformed",null,null)
B.fY=new A.A("presentation keys must be strings",null,null)
B.fZ=new A.A("model package payload hash mismatch",null,null)
B.h_=new A.A("unsupported accessibility profile",null,null)
B.h0=new A.A("unsupported promoted model index schema",null,null)
B.h1=new A.A("materialSlot is required",null,null)
B.h2=new A.A("weather audio input is not finite",null,null)
B.h3=new A.A("inventory inspections must be an object",null,null)
B.h4=new A.A("screenplay event random range is invalid",null,null)
B.cH=new A.A("saved mantle state is malformed",null,null)
B.h5=new A.A("inactive rupture has elapsed time",null,null)
B.h6=new A.A("control sensitivity is outside 0.1\u20133.0",null,null)
B.h7=new A.A("invalid action bindings",null,null)
B.h8=new A.A("weather audio input is out of bounds",null,null)
B.h9=new A.A("listener room is empty",null,null)
B.ha=new A.A("control bindings conflict",null,null)
B.hb=new A.A("saved difficulty state is malformed",null,null)
B.hc=new A.A("saved house drift state is malformed",null,null)
B.hd=new A.A("saved sleep record is malformed",null,null)
B.he=new A.A("UI scale must be between 0.8 and 2.0",null,null)
B.hf=new A.A("manifest string array is malformed",null,null)
B.hg=new A.A("weather audio event is invalid",null,null)
B.hh=new A.A("unsupported settings store",null,null)
B.hi=new A.A("screenplay scene must be an object",null,null)
B.hj=new A.A("settings values must be an object",null,null)
B.hk=new A.A("saved day-loop sleepHistory must be a list",null,null)
B.hl=new A.A("invalid anisotropy limit",null,null)
B.hm=new A.A("weather audio frame is invalid",null,null)
B.hn=new A.A("audio event position is not finite",null,null)
B.ho=new A.A("event sequence must be non-negative",null,null)
B.hp=new A.A("screenplay branch is invalid",null,null)
B.hq=new A.A("inventory inspection counts are invalid",null,null)
B.hr=new A.A("only keybinds can be remapping",null,null)
B.hs=new A.A("modelScale must be positive and finite",null,null)
B.ht=new A.A("weather audio layer is not finite",null,null)
B.hu=new A.A("Invalid database dialogue package",null,null)
B.hv=new A.A("listener position is not finite",null,null)
B.hw=new A.A("screenplay event has invalid core fields",null,null)
B.hx=new A.A("invalid action ID",null,null)
B.hy=new A.A("saved window state is malformed",null,null)
B.hz=new A.A("manifest socket map is malformed",null,null)
B.hA=new A.A("unsupported graphics preset",null,null)
B.hB=new A.A("save run and meta must be objects",null,null)
B.hC=new A.A("saved house state is malformed",null,null)
B.hD=new A.A("saved sleep record must be an object",null,null)
B.hE=new A.A("model package parts must be non-empty",null,null)
B.hF=new A.A("sound cue must be a non-empty string",null,null)
B.hG=new A.A("saved session run is malformed",null,null)
B.hH=new A.A("save map keys must be strings",null,null)
B.hI=new A.A("unsupported graphics profile",null,null)
B.hJ=new A.A("model package exceeds payload count limit",null,null)
B.hK=new A.A("screenplay scene has invalid id, day, or title",null,null)
B.hL=new A.A("unsupported audio options",null,null)
B.hM=new A.A("transform.scale must be positive",null,null)
B.hN=new A.A("Escape is reserved for pause navigation",null,null)
B.hO=new A.A("saved day-loop state is malformed",null,null)
B.hP=new A.A("rupture extinguished mantle is unknown",null,null)
B.hQ=new A.A("model package exceeds part limit",null,null)
B.cI=new A.A("unsupported controls profile",null,null)
B.hR=new A.A("promoted model index entry is malformed",null,null)
B.cJ=new A.A("saved portal state is malformed",null,null)
B.hS=new A.A("acoustic portal profile is not finite",null,null)
B.hT=new A.A("model package exceeds total byte limit",null,null)
B.hU=new A.A("unsupported model package schema",null,null)
B.hV=new A.A("manifest socket names are malformed",null,null)
B.hW=new A.A("saved house state does not match this house",null,null)
B.hX=new A.A("presentation snapshot contains a non-finite number",null,null)
B.hY=new A.A("screenplay array contains invalid text",null,null)
B.hZ=new A.A("weather audio layer identity is empty",null,null)
B.i_=new A.A("screenplay event day/hour is out of range",null,null)
B.i0=new A.A("unsupported gameplay settings profile",null,null)
B.i1=new A.A("save contains a non-finite number",null,null)
B.i2=new A.A("unsupported graphics store",null,null)
B.i3=new A.A("screenplay option is invalid",null,null)
B.i5=new A.A("duplicate weather audio event",null,null)
B.i4=new A.A("duplicate weather audio layer",null,null)
B.i6=new A.A("screenplay needs sources and scenes arrays",null,null)
B.i7=new A.A("brush component needs an id and label",null,null)
B.i8=new A.A("text.json root must be an object",null,null)
B.i9=new A.A("screenplay root must be an object",null,null)
B.ia=new A.A("event kind is empty",null,null)
B.ib=new A.A("screenplay event effects are invalid",null,null)
B.ic=new A.A("promoted model index entries are required",null,null)
B.id=new A.A("invalid control binding token",null,null)
B.ie=new A.A("audio transmission muffle is invalid",null,null)
B.ig=new A.A("acoustic portal muffle order is invalid",null,null)
B.ih=new A.A("unsupported settings profile",null,null)
B.ii=new A.A("saved session clock is malformed",null,null)
B.ij=new A.A("rupture mantle IDs are malformed",null,null)
B.ik=new A.A("invalid gameplay setting: contextualReminders",null,null)
B.il=new A.A("invalid screen-reader verbosity",null,null)
B.im=new A.A("saved sleep record has an unknown enum",null,null)
B.io=new A.A("weather audio layer is out of bounds",null,null)
B.ip=new A.A("audio cue variants are empty",null,null)
B.iq=new A.A("manifest numeric array is malformed",null,null)
B.ir=new A.A("screenplay beat has invalid kind or text",null,null)
B.is=new A.A("save root must be an object",null,null)
B.it=new A.A("audio event identity is empty",null,null)
B.iu=new A.A("screenplay event random range is out of range",null,null)
B.iv=new A.A("render capabilities contain invalid limits",null,null)
B.iw=new A.A("saved house overrides are malformed",null,null)
B.U=new A.bI(0,0,0)
B.d6=new A.bI(1,1,1)
B.kg=s([],t.Fk)
B.br=s([],t.cv)
B.kh=s([],t.xL)
B.ki=s([],t.E7)
B.ix=new A.kJ(B.U,B.U,0,1,null,null,B.d6,0,null,B.kg,B.br,B.kh,B.ki)
B.cK=new A.aV(0,0,0)
B.iy=new A.eX(0,"idle")
B.aj=new A.eX(1,"active")
B.iz=new A.eX(2,"ended")
B.iA=new A.eX(3,"aborted")
B.b6=new A.fZ(0,"outside")
B.iB=new A.fZ(1,"intersects")
B.iC=new A.fZ(2,"inside")
B.iD=new A.dw(0,"timeAdvanced")
B.iE=new A.dw(1,"dayEndReached")
B.iF=new A.dw(2,"journalWritten")
B.iG=new A.dw(3,"journalRejected")
B.iH=new A.dw(4,"slept")
B.iI=new A.dw(5,"complianceFloorTripped")
B.b7=new A.dx(0,"twentyFourHour")
B.cL=new A.dx(1,"twelveHour")
B.cM=new A.dy(0,"important")
B.cN=new A.dy(1,"always")
B.b8=new A.ck(0,"pauseAndMute")
B.cO=new A.dz(0,"press")
B.cP=new A.dz(1,"hold")
B.cQ=new A.dA(0,"compact")
B.cR=new A.dA(1,"spacious")
B.cS=new A.d_(1,"standard")
B.cT=new A.d_(2,"detailed")
B.cU=new A.dB(0,"toast")
B.cV=new A.dB(1,"detailed")
B.cW=new A.d0(1,"readable")
B.iO=new A.ic(0,"vertex")
B.cX=new A.ic(1,"indices")
B.cY=new A.kQ(0,"staticDraw")
B.j=new A.id(0,"ready")
B.a0=new A.id(1,"lost")
B.ak=new A.h1(0,"prepared")
B.iP=new A.h1(1,"committed")
B.iQ=new A.h1(2,"rolledBack")
B.iR=new A.eZ(0,"color")
B.cZ=new A.eZ(1,"colorAndGlow")
B.iS=new A.eZ(2,"colorDepthGlow")
B.b9=new A.eZ(3,"depthOnly")
B.ba=new A.ig(1,"linear")
B.d_=new A.kS(0,"clampToEdge")
B.iT=new A.kR(1,1,1,!1,B.ba,B.ba,B.d_,1)
B.bb=new A.ig(2,"linearMipmapLinear")
B.iU=new A.d2(0,"beforeShadow")
B.iV=new A.d2(2,"beforeDepth")
B.bc=new A.d2(3,"afterDepth")
B.d0=new A.d2(4,"beforeWorld")
B.iW=new A.d2(5,"afterWorld")
B.J=new A.d2(6,"afterResolve")
B.iX=new A.d2(9,"beforePresent")
B.d1=new A.cl(0,"readBeforeWrite")
B.iY=new A.cl(1,"duplicateWriter")
B.iZ=new A.cl(2,"sampledMultisampledAttachment")
B.bd=new A.cl(3,"invalidResolve")
B.j_=new A.cl(4,"formatOrSizeMismatch")
B.j0=new A.cl(5,"unversionedReadWrite")
B.j1=new A.cl(6,"invalidHistoryRead")
B.j2=new A.cl(7,"dependencyCycle")
B.j3=new A.cl(8,"missingCapability")
B.d2=new A.cE(0,"high")
B.be=new A.cE(1,"standard")
B.bf=new A.em(1,B.be,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.aH=new A.en(0,"player")
B.bg=new A.en(1,"inserted")
B.d3=new A.en(2,"warden")
B.d4=new A.f_(0,"wrongKind")
B.d5=new A.f_(1,"staleGeneration")
B.j6=new A.f_(2,"doubleRelease")
B.aI=new A.f_(3,"releasedResource")
B.j9=new A.d3("kitchen-range","settle")
B.ja=new A.d3("front-door-knocker","knock")
B.jb=new A.d3("cellar-drain","drip")
B.jc=new A.d3("bedroom-timber","creak")
B.jd=new A.d3("kitchen-pipe","tick")
B.je=new A.d3("bathroom-cistern","settle")
B.jf=new A.d3("landing-window","wind")
B.jt=new A.kZ(1,"visitor")
B.jx=new A.qw(null)
B.jy=new A.qx(null)
B.bh=new A.ip(!1,0,0.85,0.92,1,0,1,0,0)
B.jz=new A.bI(0.008,0.012,0.024)
B.d7=s([0,2,2,3],t.t)
B.jA=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.bi=s([B.cM,B.cN],A.a1("u<dy>"))
B.jB=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bj=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.H=new A.bL(0,"audio")
B.Y=new A.iO(0,"level")
B.ni=new A.bd("master","Master",B.H,B.Y,1,0,1,"audio")
B.nn=new A.bd("voice","Visitor voice",B.H,B.Y,1,0,1,"audio")
B.ne=new A.bd("effects","Effects",B.H,B.Y,1,0,1,"audio")
B.nf=new A.bd("ambience","House ambience",B.H,B.Y,1,0,1,"audio")
B.nj=new A.bd("music","Music",B.H,B.Y,1,0,1,"audio")
B.aR=new A.bL(1,"display")
B.nm=new A.bd("brightness","Display brightness",B.aR,B.Y,1,0.6,1.4,"display")
B.aq=new A.iO(1,"toggle")
B.nh=new A.bd("muted","Mute house audio",B.H,B.aq,!1,null,null,"audio")
B.a9=new A.bL(2,"accessibility")
B.nk=new A.bd("mono","Mono-compatible mix",B.a9,B.aq,!1,null,null,"audio")
B.ng=new A.bd("high-contrast","High-contrast interface",B.a9,B.aq,!1,null,null,"display")
B.nl=new A.bd("strong-highlights","Strong focus highlights",B.a9,B.aq,!1,null,null,"display")
B.E=s([B.ni,B.nn,B.ne,B.nf,B.nj,B.nm,B.nh,B.nk,B.ng,B.nl],A.a1("u<bd>"))
B.C=s(["who","verb","object","place","time"],t.s)
B.jD=s([81,77,83,72],t.t)
B.ez=new A.dp(1,"strong")
B.bk=s([B.cc,B.ez],A.a1("u<dp>"))
B.eN=new A.eS(0,"swap")
B.eO=new A.eS(1,"replace")
B.eP=new A.eS(2,"cancel")
B.jE=s([B.eN,B.eO,B.eP],A.a1("u<eS>"))
B.jF=s([2,5,9,12,16,19],t.t)
B.iJ=new A.ck(1,"pauseOnly")
B.iK=new A.ck(2,"continuePlayback")
B.aJ=s([B.b8,B.iJ,B.iK],A.a1("u<ck>"))
B.jG=s(["uQuantizationBits","uDitherStrength"],t.s)
B.jI=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.jJ=s([B.aF,B.cy,B.cz,B.cA,B.ag],A.a1("u<bT>"))
B.jK=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.jL=s(["30","60","display"],t.s)
B.jM=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap"],t.s)
B.jN=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.ax=new A.cb(0,"full")
B.c6=new A.cb(1,"compressed")
B.c7=new A.cb(2,"off")
B.d8=s([B.ax,B.c6,B.c7],A.a1("u<cb>"))
B.bl=s([B.b7,B.cL],A.a1("u<dx>"))
B.jO=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.eE=new A.dq(1,"reduced")
B.bm=s([B.aZ,B.eE],A.a1("u<dq>"))
B.eA=new A.cY(0,"wide")
B.eB=new A.cY(2,"night")
B.bn=s([B.eA,B.cd,B.eB],A.a1("u<cY>"))
B.jP=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.k_=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.d9=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bo=s([B.cQ,B.cR],A.a1("u<dA>"))
B.nv=new A.bY(0,"long")
B.e3=new A.bY(1,"short")
B.da=s([B.nv,B.e3],A.a1("u<bY>"))
B.fu=new A.ch("1 - 9","Select Response",!0)
B.fq=new A.ch("SPACE","Silence Ring",!1)
B.k1=s([B.fu,B.fq],t.sa)
B.a3=new A.bX(0,"visual")
B.bE=new A.bX(1,"graphics")
B.a4=new A.bX(2,"gameplay")
B.bF=new A.bX(3,"controls")
B.K=new A.bX(4,"audio")
B.L=new A.bX(5,"accessibility")
B.k2=s([B.a3,B.bE,B.a4,B.bF,B.K,B.L],A.a1("u<bX>"))
B.k3=s(["master","voice","effects","ambience","music"],t.s)
B.k4=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.bp=s([B.cU,B.cV],A.a1("u<dB>"))
B.db=s(["res/house/house.json","assets/house/house.json"],t.s)
B.k6=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.k7=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection"],t.s)
B.j4=new A.cE(2,"safe")
B.j5=new A.cE(3,"custom")
B.dc=s([B.d2,B.be,B.j4,B.j5],A.a1("u<cE>"))
B.G=new A.co(0,"inactive")
B.bP=new A.co(2,"affineWarp")
B.dW=new A.co(3,"vertexSnap")
B.bQ=new A.co(4,"tapeGiveup")
B.bR=new A.co(5,"portalFail")
B.a7=new A.co(6,"lightsOut")
B.dd=s([B.G,B.aQ,B.bP,B.dW,B.bQ,B.bR,B.a7],A.a1("u<co>"))
B.k8=s([B.aH,B.bg,B.d3],A.a1("u<en>"))
B.k9=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.p8=new A.bE("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.p7=new A.bE("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.p3=new A.bE("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.pb=new A.bE("ronnie.response","named","A route card has Ronnie written on its back.")
B.pa=new A.bE("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ka=s([B.p8,B.p7,B.p3,B.pb,B.pa],t.uk)
B.p9=new A.bE("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.p6=new A.bE("ronnie.response","named","The name Ronnie holds when the room does not.")
B.p4=new A.bE("denise.revision","accepted","One correction remains yours to protect.")
B.p1=new A.bE("attercliffe.plate","kept","A second place survives the room changing around it.")
B.kb=s([B.p9,B.p6,B.p4,B.p1],t.uk)
B.ko=s([],t.Fm)
B.kn=s([],t.op)
B.kc=s([],A.a1("u<cG>"))
B.kf=s([],t.yH)
B.a1=s([],t.qP)
B.kd=s([],t.u)
B.di=s([],t.xB)
B.km=s([],t.tS)
B.kl=s([],t.El)
B.m=s([],t.s)
B.dg=s([],t.ld)
B.de=s([],t.su)
B.df=s([],t.uI)
B.dh=s([],t.nm)
B.bq=s([],t.n)
B.ke=s([],t.t)
B.bs=s([],t.zz)
B.j8=new A.ii(15,"kitchen",-0.3,0)
B.j7=new A.ii(19,"spare-room",0,0.3)
B.V=s([B.j8,B.j7],A.a1("u<ii>"))
B.kq=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.ns=new A.bM(0,"bed")
B.nt=new A.bM(1,"chair")
B.nu=new A.bM(2,"floor")
B.dj=s([B.ns,B.nt,B.nu],A.a1("u<bM>"))
B.kr=s(["high","medium","low"],t.s)
B.eC=new A.cD(1,"headphones")
B.eD=new A.cD(2,"speakers")
B.bt=s([B.ce,B.eC,B.eD,B.cf],A.a1("u<cD>"))
B.ks=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bu=s([B.cO,B.cP],A.a1("u<dz>"))
B.bD=new A.cn(0,"root")
B.dz=new A.bz(0,"pauseMenu")
B.lN=new A.dG(B.bD,B.dz,null)
B.kt=s([B.lN],t.bA)
B.bv=s([B.ca,B.ae,B.cb],A.a1("u<cX>"))
B.iM=new A.d0(0,"instant")
B.iN=new A.d0(2,"slow")
B.bw=s([B.iM,B.cW,B.iN],A.a1("u<d0>"))
B.ku=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.kv=s([B.H,B.aR,B.a9],A.a1("u<bL>"))
B.dk=s([B.z,B.ah,B.q,B.ai],A.a1("u<ej>"))
B.bS=new A.br(0,"depthTest")
B.bT=new A.br(1,"depthFunc")
B.bU=new A.br(2,"depthWrite")
B.bV=new A.br(3,"blendEnable")
B.bW=new A.br(4,"blendFunc")
B.bX=new A.br(5,"blendEquation")
B.bY=new A.br(6,"cullEnable")
B.bZ=new A.br(7,"cullFace")
B.e7=new A.br(8,"frontFace")
B.nM=new A.br(9,"stencilEnable")
B.e5=new A.br(10,"colorMask")
B.e6=new A.br(11,"scissorEnable")
B.kw=s([B.bS,B.bT,B.bU,B.bV,B.bW,B.bX,B.bY,B.bZ,B.e7,B.nM,B.e5,B.e6],A.a1("u<br>"))
B.kx=s(["off","errors","full"],t.s)
B.ky=s(["off","fxaa","msaa2","msaa4"],t.s)
B.kz=s(["off","profile","standard","high"],t.s)
B.kA=s(["post_bloom"],t.s)
B.kB=s(["post_color_grade"],t.s)
B.kC=s(["post_depth_of_field"],t.s)
B.kD=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.Z=new A.dc(0,"pbrMaterial")
B.aa=new A.dc(1,"shadowsAndOcclusion")
B.ar=new A.dc(2,"surfaceWeathering")
B.l=new A.dc(3,"atmosphereAndPost")
B.O=new A.dc(4,"weatherEffects")
B.np=new A.dc(5,"debugView")
B.al=s([B.Z,B.aa,B.ar,B.l,B.O,B.np],A.a1("u<dc>"))
B.kF=s(["srgb","linear"],t.s)
B.kG=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.kH=s(["uBloomStrength"],t.s)
B.kI=s(["uLutSize","uStrength"],t.s)
B.kJ=s([B.cC,B.cD,B.cE],A.a1("u<cj>"))
B.kK=s(["uTexelSize","uNear","uFar"],t.s)
B.dl=s(["uTexelStep"],t.s)
B.kL=s(["uVolumetricStrength"],t.s)
B.kM=s(["uninitialized"],t.s)
B.iL=new A.d_(0,"minimal")
B.bx=s([B.iL,B.cS,B.cT],A.a1("u<d_>"))
B.p5=new A.bE("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.p0=new A.bE("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.p_=new A.bE("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.p2=new A.bE("ronnie.response","named","The route card gives one name its own line.")
B.kN=s([B.p5,B.p0,B.p_,B.p2],t.uk)
B.ac=new A.ca(0,"waiting")
B.av=new A.ca(1,"atDoor")
B.aw=new A.ca(2,"consulting")
B.aT=new A.ca(3,"resolved")
B.kO=s([B.ac,B.av,B.aw,B.aT],A.a1("u<ca>"))
B.kP=s(["post_dither","post_quantization_bits"],t.s)
B.fv=new A.ch("W A S D","Move",!1)
B.ft=new A.ch("TAB","Journal",!1)
B.fs=new A.ch("CAPS","Shader Lab",!1)
B.fr=new A.ch("ESC","Pause",!1)
B.kQ=s([B.fv,B.ft,B.fs,B.fr],t.sa)
B.kR=s(["floor-linoleum","ceiling-stained"],t.s)
B.lp={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.kS=new A.a4(B.lp,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a1("a4<e,K?>"))
B.lD={uAlbedo:0}
B.dm=new A.a4(B.lD,[0],t.I)
B.lK={uSsaoRaw:0,uSceneDepth:1}
B.kT=new A.a4(B.lK,[0,1],t.I)
B.dx={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.jZ=s(["KeyW","GamepadDpadUp"],t.s)
B.jY=s(["KeyS","GamepadDpadDown"],t.s)
B.jQ=s(["KeyA","GamepadDpadLeft"],t.s)
B.jR=s(["KeyD","GamepadDpadRight"],t.s)
B.jS=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.jW=s(["KeyQ","GamepadB"],t.s)
B.k0=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.kp=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.jX=s(["KeyR","GamepadX"],t.s)
B.jT=s(["KeyF","GamepadRB"],t.s)
B.jU=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.jV=s(["KeyL"],t.s)
B.jH=s(["Escape","GamepadMenu"],t.s)
B.kU=new A.a4(B.dx,[B.jZ,B.jY,B.jQ,B.jR,B.jS,B.jW,B.k0,B.kp,B.jX,B.jT,B.jU,B.jV,B.jH],A.a1("a4<e,L<e>>"))
B.kV=new A.a4(B.dx,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.D)
B.lH={uScene:0,uHistory:1}
B.kW=new A.a4(B.lH,[0,1],t.I)
B.lg={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-wind":32,"weather-window-rattle":33,"weather-thunder-bed":34,"weather-interior-drip":35,"weather-interior-warmth":36,"weather-interior-coffee":37,"weather-thunder-crack":38,"weather-thunder-roll":39,"step-above-0":40,"step-above-1":41,"step-above-2":42,"step-above-3":43}
B.kX=new A.a4(B.lg,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","air","ambience","sub","ambience","sub","ambience","sub","sub","sub","sub","sub","sub"],t.D)
B.lf={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.kY=new A.a4(B.lf,["2f544eaae016d89c9395e99ec341f47105ee9e53","9a4468d95b18306b0c6a739318474038b3c1218b","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.3"],t.D)
B.lt={aPosition:0,aUvMat:1}
B.dn=new A.a4(B.lt,[0,4],t.I)
B.lI={uScene:0,uLut:1}
B.kZ=new A.a4(B.lI,[0,1],t.I)
B.lJ={uSource:0}
B.dp=new A.a4(B.lJ,[0],t.I)
B.lA={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.l_=new A.a4(B.lA,[0,1,2,3,4,5,6],t.I)
B.dq=new A.d1([B.a3,"settings.visual",B.bE,"settings.graphics",B.a4,"settings.gameplay",B.bF,"settings.controls",B.K,"settings.audio",B.L,"settings.accessibility"],t.EJ)
B.dr=new A.d1([B.a3,"visual",B.bE,"graphics",B.a4,"gameplay",B.bF,"controls",B.K,"audio",B.L,"accessibility"],t.EJ)
B.ln={uSharp:0,uBlurred:1,uSceneDepth:2}
B.l0=new A.a4(B.ln,[0,1,2],t.I)
B.lv={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.jp=new A.by("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.jk=new A.by("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.jo=new A.by("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.jr=new A.by("wallpaper-damp","grime",7106925,0.94,0.76)
B.jl=new A.by("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.jq=new A.by("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.js=new A.by("wallpaper-peeling","grime",9340536,0.91,0.68)
B.jm=new A.by("floor-wood","wall-plaster",7755327,0.88,0.22)
B.ji=new A.by("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.jj=new A.by("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.jg=new A.by("floor-concrete","grime",7828331,0.96,0.92)
B.jh=new A.by("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.jn=new A.by("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.by=new A.a4(B.lv,[B.jp,B.jk,B.jo,B.jr,B.jl,B.jq,B.js,B.jm,B.ji,B.jj,B.jg,B.jh,B.jn],A.a1("a4<e,by>"))
B.lE={uBloom:0}
B.l1=new A.a4(B.lE,[0],t.I)
B.lF={uSceneDepth:0}
B.ds=new A.a4(B.lF,[0],t.I)
B.lG={uScene:0}
B.l2=new A.a4(B.lG,[0],t.I)
B.D={}
B.dt=new A.a4(B.D,[],A.a1("a4<e,hY>"))
B.l3=new A.a4(B.D,[],A.a1("a4<e,L<z>>"))
B.aK=new A.a4(B.D,[],t.D)
B.ph=new A.a4(B.D,[],A.a1("a4<e,l>"))
B.bz=new A.a4(B.D,[],A.a1("a4<e,z>"))
B.v=new A.a4(B.D,[],t.I)
B.l4=new A.a4(B.D,[],A.a1("a4<e,@>"))
B.pi=new A.a4(B.D,[],A.a1("a4<e,e?>"))
B.l5=new A.a4(B.D,[],A.a1("a4<@,@>"))
B.li={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.l6=new A.a4(B.li,[0,1,2,3,4,5,6],t.I)
B.dA=new A.cM(0,"resume")
B.dB=new A.cM(1,"settings")
B.dC=new A.cM(2,"controls")
B.dD=new A.cM(3,"save")
B.dE=new A.cM(4,"help")
B.dF=new A.cM(5,"credits")
B.dG=new A.cM(6,"back")
B.l7=new A.d1([B.dA,"pause.resume",B.dB,"pause.settings",B.dC,"pause.controls",B.dD,"pause.save",B.dE,"pause.help",B.dF,"pause.credits",B.dG,"pause.back"],A.a1("d1<cM,e>"))
B.lM={uVolumetric:0}
B.l8=new A.a4(B.lM,[0],t.I)
B.lx={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.l9=new A.a4(B.lx,[0,1,2,3],t.I)
B.lL={uTex:0}
B.la=new A.a4(B.lL,[0],t.I)
B.bA=new A.d1([B.aQ,1,B.bP,1.5,B.dW,1.5,B.bQ,2,B.bR,2,B.a7,4],A.a1("d1<co,z>"))
B.pj=new A.is(0,"srgb")
B.pk=new A.is(1,"linear")
B.aY=new A.fH(2,"blended")
B.lb=new A.cK("weather:snow-particle",null,0.82,0.9,1,0.04,0.72,1,1,B.aY,!1,!1)
B.lc=new A.cK("weather:hail-particle",null,0.62,0.74,0.82,0.06,0.35,1,1,B.aY,!1,!1)
B.ld=new A.cK("weather:rain-particle",null,0.55,0.68,0.82,0.08,0.18,1,1,B.aY,!1,!1)
B.bB=new A.f3(0,"resident")
B.du=new A.f3(1,"pending")
B.dv=new A.f3(2,"missing")
B.dw=new A.f3(3,"evicted")
B.pl=new A.lb(!1)
B.le=new A.lb(!0)
B.kj=s([],t.bA)
B.kk=s([],A.a1("u<bz>"))
B.bC=new A.es(B.kj,B.kk,null)
B.dy=new A.cn(1,"settings")
B.lO=new A.cn(2,"visual")
B.lP=new A.cn(3,"graphics")
B.lQ=new A.cn(4,"gameplay")
B.lR=new A.cn(5,"controls")
B.lS=new A.cn(6,"audio")
B.lT=new A.cn(7,"accessibility")
B.lU=new A.cn(8,"credits")
B.a2=new A.bz(1,"settings")
B.lV=new A.bz(2,"journal")
B.lW=new A.bz(3,"sleep")
B.lX=new A.bz(4,"help")
B.lY=new A.bz(5,"visitor")
B.lZ=new A.bz(6,"ending")
B.dH=new A.et(0,"opened")
B.dI=new A.et(2,"backed")
B.dJ=new A.et(3,"resumed")
B.m_=new A.et(4,"dismissed")
B.a5=new A.et(5,"unchanged")
B.m0=new A.bA("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.m1=new A.bA("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.m2=new A.bA("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.m3=new A.bA("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.m4=new A.bA("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.m5=new A.bA("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.m6=new A.bA("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.m7=new A.bA("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.m8=new A.bA("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.m9=new A.lm(0,1,null)
B.mb=new A.ln(1,"high")
B.ma=new A.ry(!1,!0,!0,!0,!1,B.mb,35,256)
B.mc=new A.lr(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.w=new A.eu(0,"none")
B.aL=new A.eu(1,"rain")
B.am=new A.eu(2,"sleet")
B.an=new A.eu(3,"snow")
B.a6=new A.eu(4,"hail")
B.md=new A.cN(0,"tooShortForHeader")
B.me=new A.cN(1,"badMagic")
B.mf=new A.cN(2,"unsupportedVersion")
B.dL=new A.cN(3,"unsupportedStride")
B.mg=new A.cN(4,"truncatedVertexData")
B.mh=new A.cN(5,"nonFiniteBounds")
B.dM=new A.cN(6,"nonFiniteVertex")
B.mi=new A.cN(7,"vertexCountNotMultipleOfThree")
B.bG=new A.f8(0,"safe")
B.M=new A.f8(1,"standard")
B.F=new A.f8(2,"high")
B.a8=new A.aU(B.D,0,t.M)
B.ao=new A.dK(B.bG,B.a8)
B.lC={shadows:0}
B.nd=new A.aU(B.lC,1,t.M)
B.dN=new A.dK(B.M,B.nd)
B.lk={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.n3=new A.aU(B.lk,5,t.M)
B.mk=new A.dK(B.F,B.n3)
B.lB={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.nc=new A.aU(B.lB,6,t.M)
B.dO=new A.dK(B.F,B.nc)
B.mj=new A.f8(4,"shipping")
B.lm={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.n5=new A.aU(B.lm,7,t.M)
B.pm=new A.dK(B.mj,B.n5)
B.aM=new A.lz(0,0,0,1)
B.ml=new A.a9(0,1)
B.mm=new A.bh(0.35,0.52,0.88)
B.mn=new A.aE(0.46,0.25,0.2)
B.dP=new A.bh(0.22,0.45,0.92)
B.mo=new A.aE(0.48,0.4,0.34)
B.mp=new A.aE(0.31,0.25,0.23)
B.bH=new A.bh(0.75,0.52,0.42)
B.mq=new A.bh(0.4,0.65,0.95)
B.dQ=new A.bh(0.88,0.96,1)
B.mr=new A.aE(0.37,0.33,0.31)
B.ms=new A.bh(0.62,0.48,0.45)
B.mt=new A.aE(0.34,0.32,0.29)
B.dR=new A.aE(0.38,0.25,0.19)
B.bI=new A.bh(0.9,0.8,0.72)
B.aN=new A.bh(0.28,0.16,0.12)
B.mu=new A.aE(0.31,0.28,0.24)
B.bJ=new A.bh(0.65,0.45,0.35)
B.mv=new A.aE(0.58,0.56,0.5)
B.dS=new A.bh(0.2,0.38,0.9)
B.mw=new A.aE(0.44,0.37,0.28)
B.mx=new A.aE(0.52,0.5,0.44)
B.my=new A.aE(0.24,0.25,0.27)
B.mz=new A.aE(0.28,0.27,0.25)
B.mA=new A.bh(0.35,0.28,0.25)
B.dT=new A.bh(0.52,0.32,0.38)
B.mB=new A.aE(0.42,0.4,0.38)
B.mC=new A.aE(0.18,0.2,0.21)
B.mD=new A.aE(0.2,0.12,0.1)
B.aO=new A.bh(0.35,0.2,0.15)
B.mE=new A.aE(0.12,0.15,0.2)
B.mF=new A.hh(0,"constructed")
B.X=new A.hh(1,"ready")
B.bK=new A.hh(2,"lost")
B.mG=new A.iK(B.ao,384,216,1,B.b4,0,512,32,4,1,B.cw)
B.bL=new A.fb(0,"constructed")
B.mH=new A.fb(1,"initializing")
B.bM=new A.fb(2,"ready")
B.dU=new A.fb(3,"contextLost")
B.i=new A.hi(0,"read")
B.k=new A.hi(1,"write")
B.N=new A.hi(2,"historyRead")
B.bN=new A.hj(0,"prepared")
B.mI=new A.hj(1,"committed")
B.mJ=new A.hj(2,"rolledBack")
B.p=new A.iM(0,"rgba8")
B.mK=new A.aJ("dofBlurH",B.p,192,108,1,0)
B.mL=new A.aJ("dofBlurV",B.p,192,108,1,0)
B.mM=new A.aJ("dofOutput",B.p,384,216,1,0)
B.dV=new A.iM(2,"depth24")
B.mN=new A.aJ("shadowMap",B.dV,512,512,1,0)
B.mO=new A.aJ("volumetricLight",B.p,192,108,1,0)
B.mP=new A.aJ("sceneColor",B.p,384,216,1,1)
B.mQ=new A.aJ("ssaoRaw",B.p,192,108,1,0)
B.mR=new A.aJ("ssaoBlurred",B.p,192,108,1,0)
B.mS=new A.aJ("gradeOutput",B.p,384,216,1,0)
B.mT=new A.aJ("vhsOutput",B.p,384,216,1,0)
B.mU=new A.aJ("sceneDepth",B.dV,384,216,1,0)
B.mV=new A.aJ("bloomBlurH",B.p,192,108,1,0)
B.mW=new A.aJ("bloomBlurV",B.p,192,108,1,0)
B.mX=new A.aJ("present",B.p,384,216,1,0)
B.bO=new A.aJ("sceneColor",B.p,384,216,1,0)
B.mY=new A.aJ("ps1Output",B.p,384,216,1,0)
B.mZ=new A.fd(null,"save storage unavailable")
B.n_=new A.fd(null,"save could not be recovered")
B.n0=new A.fd(null,null)
B.lq={WheelUp:0,WheelDown:1}
B.n1=new A.aU(B.lq,2,t.M)
B.ly={open:0,closed:1}
B.n2=new A.aU(B.ly,2,t.M)
B.ls={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.n4=new A.aU(B.ls,10,t.M)
B.lj={Escape:0}
B.dX=new A.aU(B.lj,1,t.M)
B.lh={open:0,closed:1,mixed:2}
B.n6=new A.aU(B.lh,3,t.M)
B.lw={front:0,"rear-service":1}
B.n7=new A.aU(B.lw,2,t.M)
B.n8=new A.h0([18,20],A.a1("h0<i>"))
B.lz={overcast:0,rain:1}
B.n9=new A.aU(B.lz,2,t.M)
B.lu={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.na=new A.aU(B.lu,16,t.M)
B.lr={Escape:0,Tab:1,F11:2}
B.dY=new A.aU(B.lr,3,t.M)
B.lo={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.nb=new A.aU(B.lo,5,t.M)
B.ll={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ap=new A.aU(B.ll,7,t.M)
B.e0=new A.ff(2,"link")
B.no=new A.iP(B.e0,"gl.createProgram() returned null")
B.dZ=new A.ff(0,"vertex")
B.e_=new A.ff(1,"fragment")
B.e1=new A.ff(3,"validation")
B.aS=new A.lM(0,"none")
B.x=new A.iQ(0,"live")
B.e2=new A.iQ(1,"unavailable")
B.nq=new A.iR(0,"full")
B.nr=new A.iR(2,"culled")
B.nw=new A.be(0,"polarNight")
B.nx=new A.be(1,"astronomicalDawn")
B.ny=new A.be(10,"civilDusk")
B.nz=new A.be(11,"nauticalDusk")
B.nA=new A.be(12,"astronomicalDusk")
B.nB=new A.be(13,"night")
B.nC=new A.be(14,"polarDay")
B.nD=new A.be(2,"nauticalDawn")
B.nE=new A.be(3,"civilDawn")
B.nF=new A.be(4,"sunrise")
B.e4=new A.be(5,"morning")
B.nG=new A.be(6,"solarNoon")
B.nH=new A.be(7,"afternoon")
B.nI=new A.be(8,"goldenHour")
B.nJ=new A.be(9,"sunset")
B.P=new A.C(0,1,0)
B.au=new A.C(0,-1,0)
B.nK=new A.bN(-1,B.P,B.au,B.d6,1,1,0.3,0.5)
B.nL=new A.lR(!1,"","",B.bq,B.bq)
B.e8=new A.dO(0,"resident")
B.e9=new A.dO(1,"pending")
B.ea=new A.dO(2,"missing")
B.eb=new A.dO(3,"evicted")
B.u=new A.C(0,0,0)
B.A=new A.hs(B.u,B.aM,1)
B.nN=A.cy("JR")
B.nO=A.cy("JS")
B.nP=A.cy("pe")
B.nQ=A.cy("Ey")
B.nR=A.cy("EN")
B.nS=A.cy("EO")
B.nT=A.cy("EP")
B.nU=A.cy("al")
B.nV=A.cy("K")
B.nW=A.cy("ul")
B.nX=A.cy("um")
B.nY=A.cy("FO")
B.nZ=A.cy("c_")
B.e=new A.de(0,"float1")
B.as=new A.de(1,"float2")
B.n=new A.de(2,"float3")
B.o_=new A.de(3,"float4")
B.y=new A.de(4,"mat4")
B.ec=new A.de(5,"mat4Array")
B.c_=new A.y(B.e,0)
B.c0=new A.y(B.e,1)
B.a_=new A.de(6,"sampler")
B.t=new A.y(B.a_,0)
B.at=new A.y(B.a_,1)
B.ed=new A.y(B.a_,2)
B.o0=new A.y(B.a_,3)
B.o1=new A.y(B.a_,4)
B.o2=new A.y(B.a_,5)
B.o3=new A.y(B.a_,6)
B.o4=new A.y(B.e,0.7)
B.o5=new A.uq(!1)
B.o6=new A.C(0,0,1)
B.o7=new A.C(0,3,0)
B.ee=new A.C(1,0,0)
B.o8=new A.C(0,-9.81,0)
B.o9=new A.C(1/0,1/0,1/0)
B.oa=new A.C(2.75,3,2.75)
B.ob=new A.C(-1/0,-1/0,-1/0)
B.ef=new A.cP(1,"normal")
B.c2=new A.cP(6,"tangent4")
B.oc=new A.cP(0,"position")
B.c4=new A.b8(B.oc,0,3)
B.c5=new A.b8(B.ef,3,3)
B.em=new A.b8(B.c2,6,4)
B.eg=new A.cP(2,"color")
B.ej=new A.b8(B.eg,10,4)
B.eh=new A.cP(4,"alpha")
B.ek=new A.b8(B.eh,14,1)
B.ei=new A.cP(5,"uv0")
B.el=new A.b8(B.ei,15,2)
B.od=new A.cP(7,"uv1")
B.oh=new A.b8(B.od,17,2)
B.c3=new A.cP(8,"legacyMaterialEffect")
B.ok=new A.b8(B.c3,19,1)
B.kE=s([B.c4,B.c5,B.em,B.ej,B.ek,B.el,B.oh,B.ok],t.v5)
B.ol=new A.iZ("surfaceV2WithUv1",20,B.kE)
B.oe=new A.b8(B.eg,6,4)
B.of=new A.b8(B.eh,10,1)
B.og=new A.b8(B.ei,11,2)
B.oi=new A.b8(B.c3,13,1)
B.k5=s([B.c4,B.c5,B.oe,B.of,B.og,B.oi],t.v5)
B.ab=new A.iZ("compatibility14",14,B.k5)
B.oj=new A.b8(B.c3,17,1)
B.jC=s([B.c4,B.c5,B.em,B.ej,B.ek,B.el,B.oj],t.v5)
B.om=new A.iZ("surfaceV2",18,B.jC)
B.on=new A.ex(0,"visitorAnswered")
B.en=new A.ex(1,"visitorIgnored")
B.oo=new A.ex(2,"entryVerified")
B.op=new A.ex(3,"entryContradicted")
B.oq=new A.ex(4,"exposureAccepted")
B.os=new A.df(1,"malformedDay")
B.ot=new A.df(2,"malformedTier")
B.eo=new A.df(3,"missingTierLines")
B.ad=new A.df(6,"invalidPhase")
B.ow=new A.bC(B.ad,"No reaction is due.")
B.oE=new A.bu(B.ow)
B.oB=new A.bC(B.ad,"The active visit cannot be chosen.")
B.oF=new A.bu(B.oB)
B.ox=new A.bC(B.ad,"The active visit has no line to advance.")
B.oG=new A.bu(B.ox)
B.ov=new A.df(5,"noActiveVisit")
B.oy=new A.bC(B.ov,"There is no active visit.")
B.ep=new A.bu(B.oy)
B.oA=new A.bC(B.ad,"A visit is already active.")
B.oH=new A.bu(B.oA)
B.ou=new A.df(4,"noArrival")
B.oD=new A.bC(B.ou,"The authored arrival is missing.")
B.oI=new A.bu(B.oD)
B.oz=new A.bC(B.ad,"That answer is not offered.")
B.oJ=new A.bu(B.oz)
B.or=new A.df(0,"missingCorpus")
B.oC=new A.bC(B.or,"The authored visitor corpus is empty.")
B.oK=new A.bu(B.oC)
B.oL=new A.ez(0,"none")
B.oM=new A.ez(1,"splash")
B.c8=new A.ez(2,"settle")
B.oN=new A.ez(3,"melt")
B.eq=new A.ez(4,"rebound")
B.oO=new A.fn(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.oP=new A.fn(-2,8.8,4.5,0.9,1,!0,0.00005)
B.oQ=new A.fn(0,0,0,1,1,!1,0)
B.oR=new A.fn(-5,18,5.5,0.65,1.35,!0,0.001)
B.oS=new A.fn(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.er=new A.fq(1,"exact")
B.c9=new A.fq(2,"partial")
B.aU=new A.fq(3,"contradiction")
B.oT=new A.fq(0,"skipped")
B.oU=new A.fp(B.oT,B.a8)
B.oV=new A.fp(B.c9,B.a8)
B.oW=new A.j4(B.a1,!1)
B.oX=new A.j4(B.a1,!0)
B.es=new A.j6(0,"horizontal")
B.oY=new A.j6(1,"vertical")
B.et=new A.j8(0,"horizontal")
B.oZ=new A.j8(1,"vertical")
B.aV=new A.hz(0,"empty")
B.pc=new A.hz(1,"cpuReady")
B.aW=new A.hz(4,"released")})();(function staticFields(){$.vk=null
$.cf=A.c([],A.a1("u<K>"))
$.AQ=null
$.rL=0
$.rM=A.I1()
$.Ac=null
$.Ab=null
$.D_=null
$.CQ=null
$.D7=null
$.xw=null
$.xF=null
$.zK=null
$.vK=A.c([],A.a1("u<L<K>?>"))
$.hM=null
$.jQ=null
$.jR=null
$.zh=!1
$.ar=B.B
$.Bc=""
$.Bd=null
$.B7=null
$.rj=null
$.dj=A.ah()
$.fz=A.ah()
$.aG=null
$.z_=A.ah()
$.Cg=null
$.w=A.ah()
$.BT=A.ah()
$.cS=A.ah()
$.aj=A.ah()
$.a_=A.ah()
$.bv=A.ah()
$.U=A.ah()
$.yZ=A.ah()
$.w_=null
$.zc=null
$.bk=null
$.z3=!1
$.zs=!1
$.jN=B.b_
$.dk=B.ay
$.xf=!1
$.zE=!1
$.Ci=null
$.hI=null
$.IU=A.m(t.N,A.a1("hv"))
$.na=null
$.C3=0
$.CP=0
$.zi=null
$.hO=!1
$.Ch=!1
$.zj=0
$.eH=0
$.z5="booting"
$.cx=0
$.fB=0
$.aq="hall"
$.jK=A.ah()
$.hF=A.ah()
$.ce=A.ah()
$.Cn=null
$.zt=0
$.zx=1.65
$.eJ=null
$.bj=null
$.jW=!1
$.cw=A.ah()
$.hG=A.ah()
$.jJ=A.ah()
$.n7=A.ah()
$.BS=A.ah()
$.BR=A.ah()
$.ay=A.ah()
$.n8=A.ah()
$.jI=A.ah()
$.n6=A.ah()
$.jL=A.ah()
$.jM=A.ah()
$.fy=A.ah()
$.eG=A.ah()
$.hE=A.ah()
$.jH=A.ah()
$.jF=A.ah()
$.jG=A.ah()
$.aK=A.ah()
$.n5=A.ah()
$.bi=A.ah()
$.xg=A.Y(t.S)
$.dl=A.c([],t.s)
$.za=null
$.CF=!1
$.BW=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"JU","Dh",()=>A.xy("_$dart_dartClosure"))
s($,"JT","ym",()=>A.xy("_$dart_dartClosure_dartJSInterop"))
s($,"KB","DE",()=>A.c([new J.l0()],A.a1("u<iN>")))
s($,"K4","Di",()=>A.dQ(A.uk({
toString:function(){return"$receiver$"}})))
s($,"K5","Dj",()=>A.dQ(A.uk({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"K6","Dk",()=>A.dQ(A.uk(null)))
s($,"K7","Dl",()=>A.dQ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ka","Do",()=>A.dQ(A.uk(void 0)))
s($,"Kb","Dp",()=>A.dQ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"K9","Dn",()=>A.dQ(A.B9(null)))
s($,"K8","Dm",()=>A.dQ(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Kd","Dr",()=>A.dQ(A.B9(void 0)))
s($,"Kc","Dq",()=>A.dQ(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Kf","zW",()=>A.Gg())
s($,"Kj","Dw",()=>A.F7(4096))
s($,"Kh","Du",()=>new A.vU().$0())
s($,"Ki","Dv",()=>new A.vT().$0())
s($,"Kg","Dt",()=>A.F6(A.X(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Ku","hW",()=>A.nr(B.nV))
s($,"K2","zV",()=>{A.Fm()
return $.rL})
s($,"JQ","Dg",()=>B.bO.i0())
s($,"JZ","zU",()=>A.lk(A.c([255,255,255,255],t.t)))
s($,"JW","zR",()=>A.lk(A.c([128,128,255,255],t.t)))
s($,"JV","zQ",()=>A.lk(A.c([0,0,0,255],t.t)))
s($,"JX","zS",()=>A.lk(A.c([255,255,0,255],t.t)))
s($,"JY","zT",()=>A.lk(A.c([255,255,255,255],t.t)))
s($,"KH","DI",()=>A.iY(0,1,0))
s($,"Ke","Ds",()=>A.Gd(A.Y(t.N),0,0,A.iY(0,0,0)))
s($,"KD","DF",()=>A.iI("^[a-z0-9][a-z0-9._-]*$"))
s($,"KK","fF",()=>{var q=$.B7
if(q==null){A.xs()
A.xs()
A.xs()
A.xs()
q=$.B7=new A.u9()}return q})
s($,"K_","yn",()=>A.yt(B.b7,B.cM,!0,B.b8,B.cO,B.cR,B.cS,B.cU,!0,!1,B.cW))
s($,"Kp","Dx",()=>new A.on())
r($,"CJ","dn",()=>A.yJ(null,null))
r($,"jP","k1",()=>A.h2(null,null))
r($,"z9","fE",()=>A.fT(null,null,!1,1,!1,!1,2,1))
r($,"zd","cA",()=>$.yn())
s($,"Kv","DA",()=>new A.pV())
s($,"Kw","DB",()=>new A.q4())
s($,"Kx","yp",()=>new A.qj(A.m(t.N,t.S)))
s($,"Kr","Dy",()=>A.dR().gaX().h(0,"debugPause")==="1")
s($,"Ko","k0",()=>A.dR().gaX().h(0,"automation")==="1")
s($,"Kl","yo",()=>A.Ih())
s($,"Kk","zX",()=>$.yo()!=null)
s($,"Km","zY",()=>$.k0()?A.dR().gaX().h(0,"captureMantleId"):null)
s($,"Kn","zZ",()=>A.dR().gaX().h(0,"captureMantleLit")==="1")
r($,"zw","eN",()=>A.iY(0,0,0))
r($,"zp","DD",()=>A.iY(0,0,0))
r($,"zF","nt",()=>A.iY(0,0,0))
s($,"Kq","A_",()=>A.Ii())
s($,"Kz","ns",()=>new A.pf(A.iY(0,0,0)))
s($,"Ky","DC",()=>new A.qH(new A.oW()))
s($,"Ks","cz",()=>new A.py(A.c([],t.s)))
s($,"KC","cV",()=>A.B4())
s($,"KF","DG",()=>new A.tQ(A.m(t.N,t.oZ)))
s($,"KE","A0",()=>new A.rP(A.Fo(520588),B.bh))
s($,"KG","DH",()=>new A.uI())
s($,"Kt","Dz",()=>new A.pR())
s($,"KA","hX",()=>new A.rn(B.bC))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.er,ArrayBuffer:A.hc,ArrayBufferView:A.ix,DataView:A.ld,Float32Array:A.iu,Float64Array:A.le,Int16Array:A.lf,Int32Array:A.lg,Int8Array:A.lh,Uint16Array:A.li,Uint32Array:A.lj,Uint8ClampedArray:A.f5,CanvasPixelArray:A.f5,Uint8Array:A.iy})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bp.$nativeSuperclassTag="ArrayBufferView"
A.jg.$nativeSuperclassTag="ArrayBufferView"
A.jh.$nativeSuperclassTag="ArrayBufferView"
A.iv.$nativeSuperclassTag="ArrayBufferView"
A.ji.$nativeSuperclassTag="ArrayBufferView"
A.jj.$nativeSuperclassTag="ArrayBufferView"
A.iw.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.nq
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
