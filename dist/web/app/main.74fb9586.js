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
if(a[b]!==s){A.K2(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.zX(b)
return new s(c,this)}:function(){if(s===null)s=A.zX(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.zX(a).prototype
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
A1(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xQ(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.A_==null){A.JF()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Bq("Return interceptor for "+A.y(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vv
if(o==null)o=$.vv=A.xP(n)
p=q[o]}if(p!=null)return p
p=A.JL(a)
if(p!=null)return p
if(typeof a=="function")return B.jK
s=Object.getPrototypeOf(a)
if(s==null)return B.dO
if(s===Object.prototype)return B.dO
if(typeof q=="function"){o=$.vv
if(o==null)o=$.vv=A.xP(n)
Object.defineProperty(q,o,{value:B.c5,enumerable:false,writable:true,configurable:true})
return B.c5}return B.c5},
AJ(a,b){if(a<0||a>4294967295)throw A.b(A.b1(a,0,4294967295,"length",null))
return J.AL(new Array(a),b)},
AK(a,b){if(a<0)throw A.b(A.n("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("w<0>"))},
qs(a,b){if(a<0)throw A.b(A.n("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("w<0>"))},
AL(a,b){var s=A.c(a,b.i("w<0>"))
s.$flags=1
return s},
F7(a,b){var s=t.hO
return J.Ah(s.a(a),s.a(b))},
AN(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
F8(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.AN(r))break;++b}return b},
F9(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.AN(q))break}return b},
eQ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ir.prototype
return J.l7.prototype}if(typeof a=="string")return J.er.prototype
if(a==null)return J.is.prototype
if(typeof a=="boolean")return J.l6.prototype
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xQ(a)},
aQ(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xQ(a)},
cW(a){if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xQ(a)},
Db(a){if(typeof a=="number")return J.h9.prototype
if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.fm.prototype
return a},
Dc(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.fm.prototype
return a},
Dd(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.hb.prototype
if(typeof a=="bigint")return J.ha.prototype
return a}if(a instanceof A.L)return a
return J.xQ(a)},
Af(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Db(a).a2(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eQ(a).aa(a,b)},
b_(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.JK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)},
b6(a,b,c){return J.cW(a).l(a,b,c)},
e6(a,b){return J.cW(a).k(a,b)},
DY(a,b){return J.Dc(a).ho(a,b)},
k6(a,b){return J.cW(a).N(a,b)},
Ag(a,b,c){return J.Dd(a).hq(a,b,c)},
DZ(a,b,c){return J.Dd(a).hr(a,b,c)},
E_(a,b){return J.cW(a).cV(a,b)},
Ah(a,b){return J.Db(a).H(a,b)},
Ai(a,b){return J.aQ(a).p(a,b)},
ny(a,b){return J.cW(a).a9(a,b)},
E0(a,b){return J.cW(a).a3(a,b)},
Aj(a){return J.cW(a).ga1(a)},
aM(a){return J.eQ(a).gT(a)},
k7(a){return J.aQ(a).gP(a)},
E1(a){return J.aQ(a).ga4(a)},
O(a){return J.cW(a).gv(a)},
cD(a){return J.aQ(a).gu(a)},
eT(a){return J.eQ(a).gad(a)},
Ak(a,b){return J.cW(a).W(a,b)},
e7(a,b,c){return J.cW(a).br(a,b,c)},
E2(a,b){return J.aQ(a).su(a,b)},
E3(a,b){return J.Dc(a).aO(a,b)},
c3(a){return J.eQ(a).t(a)},
Al(a,b){return J.cW(a).eP(a,b)},
l3:function l3(){},
l6:function l6(){},
is:function is(){},
iu:function iu(){},
es:function es(){},
lu:function lu(){},
fm:function fm(){},
dI:function dI(){},
ha:function ha(){},
hb:function hb(){},
w:function w(a){this.$ti=a},
l5:function l5(){},
qu:function qu(a){this.$ti=a},
eU:function eU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h9:function h9(){},
ir:function ir(){},
l7:function l7(){},
er:function er(){}},A={yO:function yO(){},
xJ(){return $},
Eg(a,b,c){if(t.he.b(a))return new A.jf(a,b.i("@<0>").S(c).i("jf<1,2>"))
return new A.eY(a,b.i("@<0>").S(c).i("eY<1,2>"))},
AR(a){return new A.hc("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.hc("Field '"+a+"' has not been initialized.")},
Fb(a){return new A.hc("Field '"+a+"' has already been initialized.")},
xR(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b3(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
j2(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e5(a,b,c){return a},
A0(a){var s,r
for(s=$.ch.length,r=0;r<s;++r)if(a===$.ch[r])return!0
return!1},
hw(a,b,c,d){A.lG(b,"start")
if(c!=null){A.lG(c,"end")
if(b>c)A.f(A.b1(b,0,c,"start",null))}return new A.j1(a,b,c,d.i("j1<0>"))},
ld(a,b,c,d){if(t.he.b(a))return new A.dx(a,b,c.i("@<0>").S(d).i("dx<1,2>"))
return new A.cM(a,b,c.i("@<0>").S(d).i("cM<1,2>"))},
cK(){return new A.hu("No element")},
AI(){return new A.hu("Too many elements")},
eD:function eD(){},
i8:function i8(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b){this.a=a
this.$ti=b},
jf:function jf(a,b){this.a=a
this.$ti=b},
jd:function jd(){},
b8:function b8(a,b){this.a=a
this.$ti=b},
hc:function hc(a){this.a=a},
dv:function dv(a){this.a=a},
tk:function tk(){},
T:function T(){},
a_:function a_(){},
j1:function j1(a,b,c,d){var _=this
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
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.$ti=c},
iy:function iy(a,b,c){var _=this
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
V:function V(a,b,c){this.a=a
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
dW:function dW(a,b){this.a=a
this.$ti=b},
j9:function j9(a,b){this.a=a
this.$ti=b},
aD:function aD(){},
ex:function ex(){},
hz:function hz(){},
bM:function bM(a,b){this.a=a
this.$ti=b},
jK:function jK(){},
aV(a,b,c){var s,r,q,p,o,n,m,l=A.aE(a.ga5(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.v)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aE(a.gak(),!0,c)
m=new A.a4(q,n,b.i("@<0>").S(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.ib(A.aY(a,b,c),b.i("@<0>").S(c).i("ib<1,2>"))},
Em(){throw A.b(A.bu("Cannot modify unmodifiable Map"))},
En(){throw A.b(A.bu("Cannot modify constant Set"))},
Dt(a){var s=A.Ds(a)
if(s!=null)return s
return"minified:"+a},
JK(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c3(a)
return s},
iN(a){var s,r=$.B3
if(r==null)r=$.B3=Symbol("identityHashCode")
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
fb(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aZ(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
lB(a){var s,r,q,p
if(a instanceof A.L)return A.bR(A.ci(a),null)
s=J.eQ(a)
if(s===B.jI||s===B.jL||t.qF.b(a)){r=B.ct(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bR(A.ci(a),null)},
B6(a){var s,r,q
if(a==null||typeof a=="number"||A.bx(a))return J.c3(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ek)return a.t(0)
if(a instanceof A.bj)return a.he(!0)
s=$.DT()
for(r=0;r<1;++r){q=s[r].oJ(a)
if(q!=null)return q}return"Instance of '"+A.lB(a)+"'"},
Fu(){return Date.now()},
FB(){var s,r
if($.rS!==0)return
$.rS=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.rS=1e6
$.rT=new A.rR(r)},
Ft(){if(!!self.location)return self.location.href
return null},
FC(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ay(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.e1(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.b1(a,0,1114111,null,null))},
hl(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
FA(a){var s=A.hl(a).getUTCFullYear()+0
return s},
Fy(a){var s=A.hl(a).getUTCMonth()+1
return s},
B4(a){var s=A.hl(a).getUTCDate()+0
return s},
B5(a){var s=A.hl(a).getUTCHours()+0
return s},
Fx(a){var s=A.hl(a).getUTCMinutes()+0
return s},
Fz(a){var s=A.hl(a).getUTCSeconds()+0
return s},
Fw(a){var s=A.hl(a).getUTCMilliseconds()+0
return s},
Fv(a){var s=a.$thrownJsError
if(s==null)return null
return A.cX(s)},
B7(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aR(a,s)
a.$thrownJsError=s
s.stack=b.t(0)}},
xS(a){throw A.b(A.xF(a))},
d(a,b){if(a==null)J.cD(a)
throw A.b(A.xM(a,b))},
xM(a,b){var s,r="index"
if(!A.aZ(b))return new A.cF(!0,b,r,null)
s=A.h(J.cD(a))
if(b<0||b>=s)return A.qj(b,s,a,r)
return A.B9(b,r)},
Jx(a,b,c){if(a>c)return A.b1(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b1(b,a,c,"end",null)
return new A.cF(!0,b,"end",null)},
xF(a){return new A.cF(!0,a,null,null)},
b(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.dS()
b.dartException=a
s=A.K5
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
K5(){return J.c3(this.dartException)},
f(a,b){throw A.aR(a,b==null?new Error():b)},
aU(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.HE(a,b,c),s)},
HE(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.j3("'"+s+"': Cannot "+o+" "+l+k+n)},
v(a){throw A.b(A.aC(a))},
dT(a){var s,r,q,p,o,n
a=A.Dn(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ut(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
uu(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Bp(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
yP(a,b){var s=b==null,r=s?null:b.method
return new A.l8(a,r,s?null:b.receiver)},
ah(a){var s
if(a==null)return new A.rm(a)
if(a instanceof A.ih){s=a.a
return A.eR(a,s==null?A.fF(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eR(a,a.dartException)
return A.IZ(a)},
eR(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
IZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.e1(r,16)&8191)===10)switch(q){case 438:return A.eR(a,A.yP(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.eR(a,new A.iG())}}if(a instanceof TypeError){p=$.Dx()
o=$.Dy()
n=$.Dz()
m=$.DA()
l=$.DD()
k=$.DE()
j=$.DC()
$.DB()
i=$.DG()
h=$.DF()
g=p.b6(s)
if(g!=null)return A.eR(a,A.yP(A.u(s),g))
else{g=o.b6(s)
if(g!=null){g.method="call"
return A.eR(a,A.yP(A.u(s),g))}else if(n.b6(s)!=null||m.b6(s)!=null||l.b6(s)!=null||k.b6(s)!=null||j.b6(s)!=null||m.b6(s)!=null||i.b6(s)!=null||h.b6(s)!=null){A.u(s)
return A.eR(a,new A.iG())}}return A.eR(a,new A.m1(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.iZ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eR(a,new A.cF(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.iZ()
return a},
cX(a){var s
if(a instanceof A.ih)return a.b
if(a==null)return new A.jx(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jx(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nw(a){if(a==null)return J.aM(a)
if(typeof a=="object")return A.iN(a)
return J.aM(a)},
Jp(a){if(typeof a=="number")return B.b.gT(a)
if(a instanceof A.n2)return A.iN(a)
if(a instanceof A.bj)return a.gT(a)
return A.nw(a)},
D9(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
JC(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
I3(a,b,c,d,e,f){t.BO.a(a)
switch(A.h(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.vg("Unsupported number of arguments for wrapped closure"))},
i_(a,b){var s=a.$identity
if(!!s)return s
s=A.Jr(a,b)
a.$identity=s
return s},
Jr(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.I3)},
El(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lX().constructor.prototype):Object.create(new A.fP(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.As(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Eh(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.As(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Eh(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ec)}throw A.b("Error in functionType of tearoff")},
Ei(a,b,c,d){var s=A.Ar
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
As(a,b,c,d){if(c)return A.Ek(a,b,d)
return A.Ei(b.length,d,a,b)},
Ej(a,b,c,d){var s=A.Ar,r=A.Ed
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
Ek(a,b,c){var s,r
if($.Ap==null)$.Ap=A.Ao("interceptor")
if($.Aq==null)$.Aq=A.Ao("receiver")
s=b.length
r=A.Ej(s,c,a,b)
return r},
zX(a){return A.El(a)},
Ec(a,b){return A.jB(v.typeUniverse,A.ci(a.a),b)},
Ar(a){return a.a},
Ed(a){return a.b},
Ao(a){var s,r,q,p=new A.fP("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.n("Field name "+a+" not found.",null))},
xP(a){return v.getIsolateTag(a)},
Dr(){return v.G},
L0(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
JL(a){var s,r,q,p,o,n=A.u($.De.$1(a)),m=$.xN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ao($.D4.$2(a,n))
if(q!=null){m=$.xN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.yq(s)
$.xN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.xW[n]=s
return s}if(p==="-"){o=A.yq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Dl(a,s)
if(p==="*")throw A.b(A.Bq(n))
if(v.leafTags[n]===true){o=A.yq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Dl(a,s)},
Dl(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.A1(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
yq(a){return J.A1(a,!1,null,!!a.$ic5)},
JN(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.yq(s)
else return J.A1(s,c,null,null)},
JF(){if(!0===$.A_)return
$.A_=!0
A.JG()},
JG(){var s,r,q,p,o,n,m,l
$.xN=Object.create(null)
$.xW=Object.create(null)
A.JE()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Dm.$1(o)
if(n!=null){m=A.JN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
JE(){var s,r,q,p,o,n,m=B.f7()
m=A.hZ(B.f8,A.hZ(B.f9,A.hZ(B.cu,A.hZ(B.cu,A.hZ(B.fa,A.hZ(B.fb,A.hZ(B.fc(B.ct),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.De=new A.xT(p)
$.D4=new A.xU(o)
$.Dm=new A.xV(n)},
hZ(a,b){return a(b)||b},
GM(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
Jt(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
AO(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.M("Illegal RegExp pattern ("+String(o)+")",a,null))},
K_(a,b,c){var s=a.indexOf(b,c)
return s>=0},
JA(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Dn(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
yA(a,b,c){var s=A.K0(a,b,c)
return s},
K0(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Dn(b),"g"),A.JA(c))},
a8:function a8(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
ib:function ib(a,b){this.a=a
this.$ti=b},
fW:function fW(){},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b){this.a=a
this.$ti=b},
dY:function dY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d2:function d2(a,b){this.a=a
this.$ti=b},
fX:function fX(){},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(a,b){this.a=a
this.$ti=b},
rR:function rR(a){this.a=a},
iU:function iU(){},
ut:function ut(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iG:function iG(){},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
m1:function m1(a){this.a=a},
rm:function rm(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
jx:function jx(a){this.a=a
this.b=null},
ek:function ek(){},
kp:function kp(){},
kq:function kq(){},
lZ:function lZ(){},
lX:function lX(){},
fP:function fP(a,b){this.a=a
this.b=b},
lL:function lL(a){this.a=a},
co:function co(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
qD:function qD(a){this.a=a},
qN:function qN(a,b){var _=this
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
ap:function ap(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
N:function N(a,b){this.a=a
this.$ti=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f5:function f5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
xT:function xT(a){this.a=a},
xU:function xU(a){this.a=a},
xV:function xV(a){this.a=a},
bj:function bj(){},
dZ:function dZ(){},
e_:function e_(){},
hD:function hD(){},
it:function it(a,b){var _=this
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
j0:function j0(a,b){this.a=a
this.c=b},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
K2(a){throw A.aR(A.AR(a),new Error())},
r(){throw A.aR(A.a9(""),new Error())},
b5(){throw A.aR(A.Fb(""),new Error())},
yB(){throw A.aR(A.AR(""),new Error())},
ak(){var s=new A.vf()
return s.b=s},
vf:function vf(){this.b=null},
wf(a,b,c){},
W(a){return a},
Fk(a,b,c){A.wf(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
Fl(a){return new Int8Array(a)},
Fm(a){return new Uint8Array(a)},
lq(a){return new Uint8Array(A.W(a))},
B1(a,b,c){A.wf(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
e3(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.xM(b,a))},
zo(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Jx(a,b,c))
return b},
et:function et(){},
hi:function hi(){},
iE:function iE(){},
w1:function w1(a){this.a=a},
lj:function lj(){},
bq:function bq(){},
iC:function iC(){},
iD:function iD(){},
iB:function iB(){},
lk:function lk(){},
ll:function ll(){},
lm:function lm(){},
ln:function ln(){},
lo:function lo(){},
lp:function lp(){},
f9:function f9(){},
iF:function iF(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
z_(a,b){var s=b.c
return s==null?b.c=A.jz(a,"aS",[b.x]):s},
Be(a){var s=a.w
if(s===6||s===7)return A.Be(a.x)
return s===11||s===12},
FL(a){return a.as},
JO(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a2(a){return A.w0(v.typeUniverse,a,!1)},
fI(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fI(a1,s,a3,a4)
if(r===s)return a2
return A.BW(a1,r,!0)
case 7:s=a2.x
r=A.fI(a1,s,a3,a4)
if(r===s)return a2
return A.BV(a1,r,!0)
case 8:q=a2.y
p=A.hX(a1,q,a3,a4)
if(p===q)return a2
return A.jz(a1,a2.x,p)
case 9:o=a2.x
n=A.fI(a1,o,a3,a4)
m=a2.y
l=A.hX(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.zb(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hX(a1,j,a3,a4)
if(i===j)return a2
return A.BX(a1,k,i)
case 11:h=a2.x
g=A.fI(a1,h,a3,a4)
f=a2.y
e=A.IV(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.BU(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hX(a1,d,a3,a4)
o=a2.x
n=A.fI(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.zc(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.ke("Attempted to substitute unexpected RTI kind "+a0))}},
hX(a,b,c,d){var s,r,q,p,o=b.length,n=A.w6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fI(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
IW(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.w6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fI(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
IV(a,b,c,d){var s,r=b.a,q=A.hX(a,r,c,d),p=b.b,o=A.hX(a,p,c,d),n=b.c,m=A.IW(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mB()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
zY(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.JD(s)
return a.$S()}return null},
JH(a,b){var s
if(A.Be(b))if(a instanceof A.ek){s=A.zY(a)
if(s!=null)return s}return A.ci(a)},
ci(a){if(a instanceof A.L)return A.t(a)
if(Array.isArray(a))return A.B(a)
return A.zx(J.eQ(a))},
B(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
t(a){var s=a.$ti
return s!=null?s:A.zx(a)},
zx(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.I0(a,s)},
I0(a,b){var s=a instanceof A.ek?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.GW(v.typeUniverse,s.name)
b.$ccache=r
return r},
JD(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.w0(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
zZ(a){return A.dq(A.t(a))},
zT(a){var s
if(a instanceof A.bj)return a.fJ()
s=a instanceof A.ek?A.zY(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eT(a).a
if(Array.isArray(a))return A.B(a)
return A.ci(a)},
dq(a){var s=a.r
return s==null?a.r=new A.n2(a):s},
JB(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.jB(v.typeUniverse,A.zT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.BZ(v.typeUniverse,s,A.zT(q[r]))}return A.jB(v.typeUniverse,s,a)},
cA(a){return A.dq(A.w0(v.typeUniverse,a,!1))},
I_(a){var s=this
s.b=A.IQ(s)
return s.b(a)},
IQ(a){var s,r,q,p,o
if(a===t.K)return A.I9
if(A.fJ(a))return A.If
s=a.w
if(s===6)return A.HS
if(s===1)return A.CC
if(s===7)return A.I4
r=A.IO(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fJ)){a.f="$i"+q
if(q==="K")return A.I7
if(a===t.m)return A.I6
return A.Ie}}else if(s===10){p=A.Jt(a.x,a.y)
o=p==null?A.CC:p
return o==null?A.fF(o):o}return A.HQ},
IO(a){if(a.w===8){if(a===t.S)return A.aZ
if(a===t.i||a===t.E)return A.I8
if(a===t.N)return A.Id
if(a===t.y)return A.bx}return null},
HZ(a){var s=this,r=A.HP
if(A.fJ(s))r=A.Hk
else if(s===t.K)r=A.fF
else if(A.i1(s)){r=A.HR
if(s===t.lo)r=A.zi
else if(s===t.dR)r=A.ao
else if(s===t.k7)r=A.Ci
else if(s===t.s7)r=A.zj
else if(s===t.u6)r=A.Cj
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.h
else if(s===t.N)r=A.u
else if(s===t.y)r=A.R
else if(s===t.E)r=A.a1
else if(s===t.i)r=A.aA
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
HQ(a){var s=this
if(a==null)return A.i1(s)
return A.Dh(v.typeUniverse,A.JH(a,s),s)},
HS(a){if(a==null)return!0
return this.x.b(a)},
Ie(a){var s,r=this
if(a==null)return A.i1(r)
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eQ(a)[s]},
I7(a){var s,r=this
if(a==null)return A.i1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eQ(a)[s]},
I6(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.L)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
CB(a){if(typeof a=="object"){if(a instanceof A.L)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
HP(a){var s=this
if(a==null){if(A.i1(s))return a}else if(s.b(a))return a
throw A.aR(A.Co(a,s),new Error())},
HR(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.Co(a,s),new Error())},
Co(a,b){return new A.hH("TypeError: "+A.BO(a,A.bR(b,null)))},
D7(a,b,c,d){if(A.Dh(v.typeUniverse,a,b))return a
throw A.aR(A.GO("The type argument '"+A.bR(a,null)+"' is not a subtype of the type variable bound '"+A.bR(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
BO(a,b){return A.kH(a)+": type '"+A.bR(A.zT(a),null)+"' is not a subtype of type '"+b+"'"},
GO(a){return new A.hH("TypeError: "+a)},
cx(a,b){return new A.hH("TypeError: "+A.BO(a,b))},
I4(a){var s=this
return s.x.b(a)||A.z_(v.typeUniverse,s).b(a)},
I9(a){return a!=null},
fF(a){if(a!=null)return a
throw A.aR(A.cx(a,"Object"),new Error())},
If(a){return!0},
Hk(a){return a},
CC(a){return!1},
bx(a){return!0===a||!1===a},
R(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.cx(a,"bool"),new Error())},
Ci(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.cx(a,"bool?"),new Error())},
aA(a){if(typeof a=="number")return a
throw A.aR(A.cx(a,"double"),new Error())},
Cj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cx(a,"double?"),new Error())},
aZ(a){return typeof a=="number"&&Math.floor(a)===a},
h(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.cx(a,"int"),new Error())},
zi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.cx(a,"int?"),new Error())},
I8(a){return typeof a=="number"},
a1(a){if(typeof a=="number")return a
throw A.aR(A.cx(a,"num"),new Error())},
zj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cx(a,"num?"),new Error())},
Id(a){return typeof a=="string"},
u(a){if(typeof a=="string")return a
throw A.aR(A.cx(a,"String"),new Error())},
ao(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.cx(a,"String?"),new Error())},
a(a){if(A.CB(a))return a
throw A.aR(A.cx(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.CB(a))return a
throw A.aR(A.cx(a,"JSObject?"),new Error())},
CU(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bR(a[q],b)
return s},
IB(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.CU(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bR(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Cs(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.IY(a.x)
o=a.y
return o.length>0?p+("<"+A.CU(o,b)+">"):p}if(l===10)return A.IB(a,b)
if(l===11)return A.Cs(a,b,null)
if(l===12)return A.Cs(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
IY(a){var s=A.Ds(a)
if(s!=null)return s
return"minified:"+a},
GX(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
GW(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.w0(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jA(a,5,"#")
q=A.w6(s)
for(p=0;p<s;++p)q[p]=r
o=A.jz(a,b,q)
n[b]=o
return o}else return m},
GV(a,b){return A.C6(a.tR,b)},
GU(a,b){return A.C6(a.eT,b)},
w0(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.BY(a,null,b,!1)
r.set(b,s)
return s},
jB(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.BY(a,b,c,!0)
q.set(c,r)
return r},
BZ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.zb(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
BY(a,b,c,d){return A.GK(A.GE(a,b,c,d))},
eI(a,b){b.a=A.HZ
b.b=A.I_
return b},
jA(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cR(null,null)
s.w=b
s.as=c
r=A.eI(a,s)
a.eC.set(c,r)
return r},
BW(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.GS(a,b,r,c)
a.eC.set(r,s)
return s},
GS(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fJ(b))if(!(b===t.c||b===t.D))if(s!==6)r=s===7&&A.i1(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cR(null,null)
q.w=6
q.x=b
q.as=c
return A.eI(a,q)},
BV(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.GQ(a,b,r,c)
a.eC.set(r,s)
return s},
GQ(a,b,c,d){var s,r
if(d){s=b.w
if(A.fJ(b)||b===t.K)return b
else if(s===1)return A.jz(a,"aS",[b])
else if(b===t.c||b===t.D)return t.eZ}r=new A.cR(null,null)
r.w=7
r.x=b
r.as=c
return A.eI(a,r)},
GT(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cR(null,null)
s.w=13
s.x=b
s.as=q
r=A.eI(a,s)
a.eC.set(q,r)
return r},
jy(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
GP(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jz(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jy(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cR(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eI(a,r)
a.eC.set(p,q)
return q},
zb(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jy(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cR(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eI(a,o)
a.eC.set(q,n)
return n},
BX(a,b,c){var s,r,q="+"+(b+"("+A.jy(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cR(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eI(a,s)
a.eC.set(q,r)
return r},
BU(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jy(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jy(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.GP(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cR(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eI(a,p)
a.eC.set(r,o)
return o},
zc(a,b,c,d){var s,r=b.as+("<"+A.jy(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.GR(a,b,c,r,d)
a.eC.set(r,s)
return s},
GR(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.w6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fI(a,b,r,0)
m=A.hX(a,c,r,0)
return A.zc(a,n,m,c!==m)}}l=new A.cR(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eI(a,l)},
GE(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
GK(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.GG(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.BR(a,r,l,k,!1)
else if(q===46)r=A.BR(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fA(a.u,a.e,k.pop()))
break
case 94:k.push(A.GT(a.u,k.pop()))
break
case 35:k.push(A.jA(a.u,5,"#"))
break
case 64:k.push(A.jA(a.u,2,"@"))
break
case 126:k.push(A.jA(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.GI(a,k)
break
case 38:A.GH(a,k)
break
case 63:p=a.u
k.push(A.BW(p,A.fA(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.BV(p,A.fA(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.GF(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.BS(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.GL(a.u,a.e,o)
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
return A.fA(a.u,a.e,m)},
GG(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
BR(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.GX(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.FL(o)+'"')
d.push(A.jB(s,o,n))}else d.push(p)
return m},
GI(a,b){var s,r=a.u,q=A.BQ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jz(r,p,q))
else{s=A.fA(r,a.e,p)
switch(s.w){case 11:b.push(A.zc(r,s,q,a.n))
break
default:b.push(A.zb(r,s,q))
break}}},
GF(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.BQ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fA(p,a.e,o)
q=new A.mB()
q.a=s
q.b=n
q.c=m
b.push(A.BU(p,r,q))
return
case-4:b.push(A.BX(p,b.pop(),s))
return
default:throw A.b(A.ke("Unexpected state under `()`: "+A.y(o)))}},
GH(a,b){var s=b.pop()
if(0===s){b.push(A.jA(a.u,1,"0&"))
return}if(1===s){b.push(A.jA(a.u,4,"1&"))
return}throw A.b(A.ke("Unexpected extended operation "+A.y(s)))},
BQ(a,b){var s=b.splice(a.p)
A.BS(a.u,a.e,s)
a.p=b.pop()
return s},
fA(a,b,c){if(typeof c=="string")return A.jz(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.GJ(a,b,c)}else return c},
BS(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fA(a,b,c[s])},
GL(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fA(a,b,c[s])},
GJ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.ke("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.ke("Bad index "+c+" for "+b.t(0)))},
Dh(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b4(a,b,null,c,null)
r.set(c,s)}return s},
b4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fJ(d))return!0
s=b.w
if(s===4)return!0
if(A.fJ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b4(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.D){if(q===7)return A.b4(a,b,c,d.x,e)
return d===p||d===t.D||q===6}if(d===t.K){if(s===7)return A.b4(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b4(a,b.x,c,d,e))return!1
return A.b4(a,A.z_(a,b),c,d,e)}if(s===6)return A.b4(a,p,c,d,e)&&A.b4(a,b.x,c,d,e)
if(q===7){if(A.b4(a,b,c,d.x,e))return!0
return A.b4(a,b,c,A.z_(a,d),e)}if(q===6)return A.b4(a,b,c,p,e)||A.b4(a,b,c,d.x,e)
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
if(!A.b4(a,j,c,i,e)||!A.b4(a,i,e,j,c))return!1}return A.CA(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.CA(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.I5(a,b,c,d,e)}if(o&&q===10)return A.Ia(a,b,c,d,e)
return!1},
CA(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b4(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b4(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b4(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b4(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b4(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
I5(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jB(a,b,r[o])
return A.Cg(a,p,null,c,d.y,e)}return A.Cg(a,b.y,null,c,d.y,e)},
Cg(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b4(a,b[s],d,e[s],f))return!1
return!0},
Ia(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b4(a,r[s],c,q[s],e))return!1
return!0},
i1(a){var s=a.w,r=!0
if(!(a===t.c||a===t.D))if(!A.fJ(a))if(s!==6)r=s===7&&A.i1(a.x)
return r},
fJ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
C6(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
w6(a){return a>0?new Array(a):v.typeUniverse.sEA},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mB:function mB(){this.c=this.b=this.a=null},
n2:function n2(a){this.a=a},
mz:function mz(){},
hH:function hH(a){this.a=a},
Gw(){var s,r,q
if(self.scheduleImmediate!=null)return A.Jf()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.i_(new A.vb(s),1)).observe(r,{childList:true})
return new A.va(s,r,q)}else if(self.setImmediate!=null)return A.Jg()
return A.Jh()},
Gx(a){self.scheduleImmediate(A.i_(new A.vc(t.O.a(a)),0))},
Gy(a){self.setImmediate(A.i_(new A.vd(t.O.a(a)),0))},
Gz(a){A.z3(B.fG,t.O.a(a))},
z3(a,b){return A.GN(a.a/1000|0,b)},
GN(a,b){var s=new A.vY()
s.jE(a,b)
return s},
aK(a){return new A.mp(new A.as($.ar,a.i("as<0>")),a.i("mp<0>"))},
aJ(a,b){a.$2(0,null)
b.b=!0
return b.a},
a5(a,b){A.Hn(a,b)},
aI(a,b){b.e7(a)},
aH(a,b){b.e8(A.ah(a),A.cX(a))},
Hn(a,b){var s,r,q=new A.wc(b),p=new A.wd(b)
if(a instanceof A.as)a.hc(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.eJ(q,p,s)
else{r=new A.as($.ar,t.hR)
r.a=8
r.c=a
r.hc(q,p,s)}}},
aL(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.il(new A.xE(s),t.H,t.S,t.z)},
BT(a,b,c){return 0},
nP(a){var s
if(t.yt.b(a)){s=a.gc_()
if(s!=null)return s}return B.aF},
AB(a){var s
a.a(null)
s=new A.as($.ar,a.i("as<0>"))
s.dI(null)
return s},
EP(a,b,c){var s=new A.as($.ar,c.i("as<0>"))
A.Bo(a,new A.pq(b,s,c))
return s},
pr(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ar,b.i("as<K<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pt(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eJ(new A.ps(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cG(A.c([],b.i("w<0>")))
return n}i.a=A.d7(n,null,!1,b.i("0?"))}catch(l){p=A.ah(l)
o=A.cX(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.zy(m,k)
m=new A.bn(m,k==null?A.nP(m):k)
n.cE(m)
return n}else{i.d=p
i.c=o}}return f},
zy(a,b){if($.ar===B.B)return null
return null},
I1(a,b){if($.ar!==B.B)A.zy(a,b)
if(b==null)if(t.yt.b(a)){b=a.gc_()
if(b==null){A.B7(a,B.aF)
b=B.aF}}else b=B.aF
else if(t.yt.b(a))A.B7(a,b)
return new A.bn(a,b)},
GA(a,b){var s=new A.as($.ar,b.i("as<0>"))
b.a(a)
s.a=8
s.c=a
return s},
vl(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.FY()
b.cE(new A.bn(new A.cF(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fU(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c6()
b.cF(o.a)
A.fv(b,p)
return}b.a^=2
A.nn(null,null,b.b,t.O.a(new A.vm(o,b)))},
fv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.zL(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fv(d.a,c)
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
A.zL(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.vq(q,d,n).$0()
else if(o){if((c&1)!==0)new A.vp(q,j).$0()}else if((c&2)!==0)new A.vo(d,q).$0()
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
continue}else A.vl(c,f,!0)
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
CO(a,b){var s
if(t.nW.b(a))return b.il(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.a6(a,"onError",u.c))},
Ip(){var s,r
for(s=$.hS;s!=null;s=$.hS){$.jW=null
r=s.b
$.hS=r
if(r==null)$.jV=null
s.a.$0()}},
IT(){$.zz=!0
try{A.Ip()}finally{$.jW=null
$.zz=!1
if($.hS!=null)$.A9().$1(A.D5())}},
CX(a){var s=new A.mq(a),r=$.jV
if(r==null){$.hS=$.jV=s
if(!$.zz)$.A9().$1(A.D5())}else $.jV=r.b=s},
IL(a){var s,r,q,p=$.hS
if(p==null){A.CX(a)
$.jW=$.jV
return}s=new A.mq(a)
r=$.jW
if(r==null){s.b=p
$.hS=$.jW=s}else{q=r.b
s.b=q
$.jW=r.b=s
if(q==null)$.jV=s}},
Km(a,b){A.e5(a,"stream",t.K)
return new A.mY(b.i("mY<0>"))},
Bo(a,b){var s=$.ar
if(s===B.B)return A.z3(a,t.O.a(b))
return A.z3(a,t.O.a(s.ht(b)))},
zL(a,b){A.IL(new A.xn(a,b))},
CT(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
II(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
IH(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
nn(a,b,c,d){t.O.a(d)
if(B.B!==c){d=c.ht(d)
d=d}A.CX(d)},
vb:function vb(a){this.a=a},
va:function va(a,b,c){this.a=a
this.b=b
this.c=c},
vc:function vc(a){this.a=a},
vd:function vd(a){this.a=a},
vY:function vY(){},
vZ:function vZ(a,b){this.a=a
this.b=b},
mp:function mp(a,b){this.a=a
this.b=!1
this.$ti=b},
wc:function wc(a){this.a=a},
wd:function wd(a){this.a=a},
xE:function xE(a){this.a=a},
cf:function cf(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bI:function bI(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b){this.a=a
this.b=b},
pq:function pq(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ps:function ps(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mt:function mt(){},
jb:function jb(a,b){this.a=a
this.$ti=b},
dX:function dX(a,b,c,d,e){var _=this
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
vi:function vi(a,b){this.a=a
this.b=b},
vn:function vn(a,b){this.a=a
this.b=b},
vm:function vm(a,b){this.a=a
this.b=b},
vk:function vk(a,b){this.a=a
this.b=b},
vj:function vj(a,b){this.a=a
this.b=b},
vq:function vq(a,b,c){this.a=a
this.b=b
this.c=c},
vr:function vr(a,b){this.a=a
this.b=b},
vs:function vs(a){this.a=a},
vp:function vp(a,b){this.a=a
this.b=b},
vo:function vo(a,b){this.a=a
this.b=b},
mq:function mq(a){this.a=a
this.b=null},
mY:function mY(a){this.$ti=a},
jJ:function jJ(){},
mR:function mR(){},
vW:function vW(a,b){this.a=a
this.b=b},
xn:function xn(a,b){this.a=a
this.b=b},
BP(a,b){var s=a[b]
return s===a?null:s},
z9(a,b,c){if(c==null)a[b]=a
else a[b]=c},
z8(){var s=Object.create(null)
A.z9(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
AT(a,b){return new A.co(a.i("@<0>").S(b).i("co<1,2>"))},
E(a,b,c){return b.i("@<0>").S(c).i("yQ<1,2>").a(A.D9(a,new A.co(b.i("@<0>").S(c).i("co<1,2>"))))},
m(a,b){return new A.co(a.i("@<0>").S(b).i("co<1,2>"))},
yR(a){return new A.cw(a.i("cw<0>"))},
Z(a){return new A.cw(a.i("cw<0>"))},
aN(a,b){return b.i("AU<0>").a(A.JC(a,new A.cw(b.i("cw<0>"))))},
za(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fz(a,b,c){var s=new A.fy(a,b,c.i("fy<0>"))
s.c=a.e
return s},
bK(a,b){var s=J.O(a)
if(s.m())return s.gn()
return null},
aY(a,b,c){var s=A.AT(b,c)
a.aJ(0,new A.qO(s,b,c))
return s},
hd(a,b,c){var s=A.AT(b,c)
s.K(0,a)
return s},
he(a,b){var s,r=A.yR(b)
for(s=J.O(a);s.m();)r.k(0,b.a(s.gn()))
return r},
f6(a,b){var s=A.yR(b)
s.K(0,a)
return s},
yT(a){var s,r
if(A.A0(a))return"{...}"
s=new A.bE("")
try{r={}
B.a.k($.ch,a)
s.a+="{"
r.a=!0
a.aJ(0,new A.qR(r,s))
s.a+="}"}finally{if(0>=$.ch.length)return A.d($.ch,-1)
$.ch.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
GY(){throw A.b(A.bu("Cannot change an unmodifiable set"))},
jg:function jg(){},
vu:function vu(a){this.a=a},
ji:function ji(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fw:function fw(a,b){this.a=a
this.$ti=b},
jh:function jh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cw:function cw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mH:function mH(a){this.a=a
this.c=this.b=null},
fy:function fy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(){},
af:function af(){},
qQ:function qQ(a){this.a=a},
qR:function qR(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.$ti=b},
jk:function jk(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jC:function jC(){},
hf:function hf(){},
ey:function ey(a,b){this.a=a
this.$ti=b},
dd:function dd(){},
jw:function jw(){},
n3:function n3(){},
hA:function hA(a,b){this.a=a
this.$ti=b},
hI:function hI(){},
jD:function jD(){},
Iu(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.M(String(s),null,null)
throw A.b(q)}q=A.wF(p)
return q},
wF(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mF(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.wF(a[s])
return a},
He(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.DL()
else s=new Uint8Array(o)
for(r=J.aQ(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Hd(a,b,c,d){var s=a?$.DK():$.DJ()
if(s==null)return null
if(0===c&&d===b.length)return A.C5(s,b)
return A.C5(s,b.subarray(c,d))},
C5(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
An(a,b,c,d,e,f){if(B.d.R(f,4)!==0)throw A.b(A.M("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.M("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.M("Invalid base64 padding, more than two '=' characters",a,b))},
AQ(a,b,c){return new A.iv(a,b)},
HD(a){return a.C()},
GB(a,b){return new A.vx(a,[],A.Js())},
GC(a,b,c){var s,r=new A.bE(""),q=A.GB(r,b)
q.dw(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Hf(a){switch(a){case 65:return"Missing extension byte"
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
vw:function vw(a){this.a=a},
mG:function mG(a){this.a=a},
w4:function w4(){},
w3:function w3(){},
kb:function kb(){},
w_:function w_(){},
kc:function kc(a,b){this.a=a
this.b=b},
kj:function kj(){},
ot:function ot(){},
el:function el(){},
ku:function ku(){},
kG:function kG(){},
iv:function iv(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b},
l9:function l9(){},
qF:function qF(a){this.b=a},
qE:function qE(a){this.a=a},
vy:function vy(){},
vz:function vz(a,b){this.a=a
this.b=b},
vx:function vx(a,b,c){this.c=a
this.a=b
this.b=c},
m5:function m5(){},
uB:function uB(){},
w5:function w5(a){this.b=0
this.c=a},
uA:function uA(a){this.a=a},
w2:function w2(a){this.a=a
this.b=16
this.c=0},
Dg(a){var s=A.dL(a,null)
if(s!=null)return s
throw A.b(A.M(a,null,null))},
nr(a){var s=A.fb(a)
if(s!=null)return s
throw A.b(A.M("Invalid double",a,null))},
EL(a,b){a=A.aR(a,new Error())
if(a==null)a=A.fF(a)
a.stack=b.t(0)
throw a},
d7(a,b,c,d){var s,r=c?J.AK(a,d):J.AJ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aE(a,b,c){var s,r=A.c([],c.i("w<0>"))
for(s=J.O(a);s.m();)B.a.k(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("w<0>"))
s=A.c([],b.i("w<0>"))
for(r=J.O(a);r.m();)B.a.k(s,r.gn())
return s},
ad(a,b){var s=A.aE(a,!1,b)
s.$flags=3
return s},
z2(a,b,c){var s,r
A.lG(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.b1(c,b,null,"end",null))
if(s===0)return""}r=A.G0(a,b,c)
return r},
G0(a,b,c){var s=a.length
if(b>=s)return""
return A.FC(a,b,c==null||c>s?s:c)},
iP(a){return new A.it(a,A.AO(a,!1,!0,!1,!1,""))},
z1(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gn())
while(s.m())}else{a+=A.y(s.gn())
while(s.m())a=a+c+A.y(s.gn())}return a},
dU(){var s,r,q=A.Ft()
if(q==null)throw A.b(A.bu("'Uri.base' is not supported"))
s=$.Bt
if(s!=null&&q===$.Bs)return s
r=A.G6(q)
$.Bt=r
$.Bs=q
return r},
FY(){return A.cX(new Error())},
Er(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Au(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
kw(a){if(a>=10)return""+a
return"0"+a},
EK(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.a6(b,"name","No enum value with that name"))},
kH(a){if(typeof a=="number"||A.bx(a)||a==null)return J.c3(a)
if(typeof a=="string")return JSON.stringify(a)
return A.B6(a)},
EM(a,b){A.e5(a,"error",t.K)
A.e5(b,"stackTrace",t.l)
A.EL(a,b)},
ke(a){return new A.kd(a)},
n(a,b){return new A.cF(!1,null,b,a)},
a6(a,b,c){return new A.cF(!0,a,b,c)},
B8(a){var s=null
return new A.hm(s,s,!1,s,s,a)},
B9(a,b){return new A.hm(null,null,!0,a,b,"Value not in range")},
b1(a,b,c,d,e){return new A.hm(b,c,!0,a,d,"Invalid value")},
fd(a,b,c){if(0>a||a>c)throw A.b(A.b1(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.b1(b,a,c,"end",null))
return b}return c},
lG(a,b){if(a<0)throw A.b(A.b1(a,0,null,b,null))
return a},
qj(a,b,c,d){return new A.l0(b,!0,a,d,"Index out of range")},
bu(a){return new A.j3(a)},
Bq(a){return new A.m0(a)},
i(a){return new A.hu(a)},
aC(a){return new A.kr(a)},
M(a,b,c){return new A.A(a,b,c)},
F6(a,b,c){var s,r
if(A.A0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.ch,a)
try{A.Ig(a,s)}finally{if(0>=$.ch.length)return A.d($.ch,-1)
$.ch.pop()}r=A.z1(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
yN(a,b,c){var s,r
if(A.A0(a))return b+"..."+c
s=new A.bE(b)
B.a.k($.ch,a)
try{r=s
r.a=A.z1(r.a,a,", ")}finally{if(0>=$.ch.length)return A.d($.ch,-1)
$.ch.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ig(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.y(l.gn())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.k(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
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
yU(a,b,c){var s=A.m(b,c)
s.lA(a)
return s},
cO(a,b,c,d,e,f){var s
if(B.h===c){s=J.aM(a)
b=J.aM(b)
return A.j2(A.b3(A.b3($.i2(),s),b))}if(B.h===d){s=J.aM(a)
b=J.aM(b)
c=J.aM(c)
return A.j2(A.b3(A.b3(A.b3($.i2(),s),b),c))}if(B.h===e){s=J.aM(a)
b=J.aM(b)
c=J.aM(c)
d=J.aM(d)
return A.j2(A.b3(A.b3(A.b3(A.b3($.i2(),s),b),c),d))}if(B.h===f){s=J.aM(a)
b=J.aM(b)
c=J.aM(c)
d=J.aM(d)
e=J.aM(e)
return A.j2(A.b3(A.b3(A.b3(A.b3(A.b3($.i2(),s),b),c),d),e))}s=J.aM(a)
b=J.aM(b)
c=J.aM(c)
d=J.aM(d)
e=J.aM(e)
f=J.aM(f)
f=A.j2(A.b3(A.b3(A.b3(A.b3(A.b3(A.b3($.i2(),s),b),c),d),e),f))
return f},
Fn(a){var s,r,q=$.i2()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)q=A.b3(q,J.aM(a[r]))
return A.j2(q)},
fi(a,b){return new A.hA(A.f6(a,b),b.i("hA<0>"))},
G6(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Br(a4<a4?B.c.I(a5,0,a4):a5,5,a3).giu()
else if(s===32)return A.Br(B.c.I(a5,5,a4),0,a3).giu()}r=A.d7(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.CW(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.CW(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.c.I(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.bV(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.aq(a5,"http",0)){if(i&&o+3===n&&B.c.aq(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.bV(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.aq(a5,"https",0)){if(i&&o+4===n&&B.c.aq(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.bV(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.mV(a4<a5.length?B.c.I(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.H7(a5,0,q)
else{if(q===0)A.hJ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.H8(a5,c,p-1):""
a=A.H3(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dL(B.c.I(a5,i,n),a3)
d=A.H5(a0==null?A.f(A.M("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.H4(a5,n,m,a3,j,a!=null)
a2=m<l?A.H6(a5,m+1,l,a3):a3
return A.GZ(j,b,a,d,a1,a2,l<a4?A.H2(a5,l+1,a4):a3)},
Bv(a){var s=t.N
return B.a.bc(A.c(a.split("&"),t.s),A.m(s,s),new A.uz(B.cw),t.G)},
m4(a,b,c){throw A.b(A.M("Illegal IPv4 address, "+a,b,c))},
G3(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.m4("each part must be in the range 0..255",a,r)}A.m4("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.m4(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aU(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.m4(j,a,q)
p=l}A.m4("IPv4 address should contain exactly 4 parts",a,q)},
G4(a,b,c){var s
if(b===c)throw A.b(A.M("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.G5(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Bu(a,b,c)
return!0},
G5(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
Bu(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uy(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.G3(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.e1(l,8)
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
B.a1.iU(s,a0,16,s,a)
B.a1.n8(s,a,a0,0)}}return s},
GZ(a,b,c,d,e,f,g){return new A.jE(a,b,c,d,e,f,g)},
C_(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hJ(a,b,c){throw A.b(A.M(c,a,b))},
H5(a,b){var s=A.C_(b)
if(a===s)return null
return a},
H3(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hJ(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.H0(a,q,r)
if(o<r){n=o+1
p=A.C4(a,B.c.aq(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.G4(a,q,o)
l=B.c.I(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.c.dc(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.C4(a,B.c.aq(a,"25",n)?o+3:n,c,"%25")}else p=""
A.Bu(a,b,o)
return"["+B.c.I(a,b,o)+p+"]"}}return A.Ha(a,b,c)},
H0(a,b,c){var s=B.c.dc(a,"%",b)
return s>=b&&s<c?s:c},
C4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bE(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.ze(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bE("")
l=h.a+=B.c.I(a,q,r)
if(m)n=B.c.I(a,r,r+3)
else if(n==="%")A.hJ(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bE("")
if(q<r){h.a+=B.c.I(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.I(a,q,r)
if(h==null){h=new A.bE("")
m=h}else m=h
m.a+=i
l=A.zd(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.I(a,b,c)
if(q<c){i=B.c.I(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Ha(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.ze(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bE("")
k=B.c.I(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.I(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bE("")
if(q<r){p.a+=B.c.I(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hJ(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.I(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bE("")
l=p}else l=p
l.a+=k
j=A.zd(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.I(a,b,c)
if(q<c){k=B.c.I(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
H7(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.C1(a.charCodeAt(b)))A.hJ(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hJ(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.I(a,b,c)
return A.H_(q?a.toLowerCase():a)},
H_(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
H8(a,b,c){return A.jF(a,b,c,16,!1,!1)},
H4(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.jF(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.U(q,"/"))q="/"+q
return A.H9(q,e,f)},
H9(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.U(a,"/")&&!B.c.U(a,"\\"))return A.Hb(a,!s||c)
return A.Hc(a)},
H6(a,b,c,d){return A.jF(a,b,c,256,!0,!1)},
H2(a,b,c){return A.jF(a,b,c,256,!0,!1)},
ze(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.xR(r)
o=A.xR(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ay(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.I(a,b,b+3).toUpperCase()
return null},
zd(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.lg(a,6*p)&63|q
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
o+=3}}return A.z2(s,0,null)},
jF(a,b,c,d,e,f){var s=A.C3(a,b,c,d,e,f)
return s==null?B.c.I(a,b,c):s},
C3(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.ze(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hJ(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.zd(n)}if(o==null){o=new A.bE("")
k=o}else k=o
k.a=(k.a+=B.c.I(a,p,q))+l
if(typeof m!=="number")return A.xS(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.I(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
C2(a){if(B.c.U(a,"."))return!0
return B.c.bB(a,"/.")!==-1},
Hc(a){var s,r,q,p,o,n,m
if(!A.C2(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.W(s,"/")},
Hb(a,b){var s,r,q,p,o,n
if(!A.C2(a))return!b?A.C0(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga6(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.C0(s[0]))}return B.a.W(s,"/")},
C0(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.C1(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.I(a,0,s)+"%3A"+B.c.aO(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
H1(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.n("Invalid URL encoding",null))}}return r},
zf(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cw===d)return B.c.I(a,b,c)
else p=new A.dv(B.c.I(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.n("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.n("Truncated URI",null))
B.a.k(p,A.H1(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.L.a(p)
return B.ow.by(p)},
C1(a){var s=a|32
return 97<=s&&s<=122},
Br(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
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
if((j.length&1)===1)a=B.f5.nI(a,m,s)
else{l=A.C3(a,m,s,256,!0,!1)
if(l!=null)a=B.c.bV(a,m,s,l)}return new A.ux(a,j,c)},
CW(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.a=a},
my:function my(){},
at:function at(){},
kd:function kd(a){this.a=a},
dS:function dS(){},
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
j3:function j3(a){this.a=a},
m0:function m0(a){this.a=a},
hu:function hu(a){this.a=a},
kr:function kr(a){this.a=a},
lr:function lr(){},
iZ:function iZ(){},
vg:function vg(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(){},
L:function L(){},
n0:function n0(){},
ue:function ue(){this.b=this.a=0},
bE:function bE(a){this.a=a},
uz:function uz(a){this.a=a},
uy:function uy(a){this.a=a},
jE:function jE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
ux:function ux(a,b,c){this.a=a
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
rl:function rl(a){this.a=a},
Ct(a){var s
if(typeof a=="function")throw A.b(A.n("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Hq,a)
s[$.yF()]=a
return s},
Y(a){var s
if(typeof a=="function")throw A.b(A.n("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Hr,a)
s[$.yF()]=a
return s},
Hq(a){return t.BO.a(a).$0()},
Hr(a,b,c){t.BO.a(a)
if(A.h(c)>=1)return a.$1(b)
return a.$0()},
nt(a,b,c){return c.a(a[b])},
Cu(a,b){return a[b]},
aT(a,b,c,d){return d.a(a[b].apply(a,c))},
av(a,b){var s=new A.as($.ar,b.i("as<0>")),r=new A.jb(s,b.i("jb<0>"))
a.then(A.i_(new A.yr(r,b),1),A.i_(new A.ys(r),1))
return s},
CF(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
i0(a){if(A.CF(a))return a
return new A.xK(new A.ji(t.BT)).$1(a)},
yr:function yr(a,b){this.a=a
this.b=b},
ys:function ys(a){this.a=a},
xK:function xK(a){this.a=a},
FD(a){var s
if(a==null)s=B.b4
else{s=new A.eG()
s.c0(a)}return s},
mE:function mE(){},
eG:function eG(){this.b=this.a=0},
kB:function kB(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
FT(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aE(b3,!0,b1)
B.a.k(b2,128)
while(B.d.R(b2.length,64)!==56)B.a.k(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.k(b2,B.d.j4(s,r)&255)
for(q=1779033703,p=3144134277,o=1013904242,n=2773480762,m=1359893119,l=2600822924,k=528734635,j=1541459225,i=0;i<b2.length;i+=64){h=A.d7(64,0,!1,b1)
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
B.a.l(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.k2[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.H(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.tW()),t.dH).nz(0)},
tW:function tW(){},
m6:function m6(a,b){this.a=a
this.b=b},
Fg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.p(h.w,b))throw A.b(A.a6(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.v)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.i("part "+r.a+" has no "+b+" payload")
throw A.b(h)}k=q
j=m.h(0,k)
p=j==null?A.f(A.i("model package payload is missing: "+k)):j
J.e6(s,a.mH(new Uint8Array(A.W(p))))}return new A.r4(a,s)}catch(i){for(h=s,n=A.B(h).i("bM<1>"),h=new A.bM(h,n),h=new A.al(h,h.gu(0),n.i("al<a_.E>")),n=n.i("a_.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aK(o)}throw i}},
r4:function r4(a,b){this.a=a
this.b=b
this.c=!1},
lh:function lh(a){this.e=a},
rf:function rf(a,b){this.a=a
this.b=b},
r6:function r6(){},
r7:function r7(){},
r8:function r8(){},
Fh(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.aa(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.b(B.i1)
s=a.h(0,"parts")
if(!t.j.b(s)||J.k7(s))throw A.b(B.hM)
r=A.xl(a,"assetId")
q=A.xl(a,"packageHash")
p=A.xl(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.O(s),m=t.P;n.m();)o.push(A.Fi(m.a(n.gn())))
n=A.zS(a.h(0,"materials"))
m=A.zS(a.h(0,"textures"))
l=A.zS(a.h(0,"lods"))
k=A.CG(a.h(0,"combinedBounds"))
j=A.IP(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bs(0,new A.ra(),h,h)
i=h}return new A.r9(r,q,p,o,n,m,l,k,j,i==null?B.aO:i)},
Fi(a){var s,r,q=A.xl(a,"id"),p=A.zi(a.h(0,"materialSlot"))
if(p==null)p=A.f(B.h4)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bs(0,new A.re(),r,r)
s=r}return new A.f8(q,p,s==null?B.aO:s)},
xl(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.b(A.M(b+" is required",null,null))
return s},
Ib(a){if(a.length===0||B.c.U(a,"/")||B.c.p(a,"\\"))return!1
return B.a.a3(A.c(a.split("/"),t.s),new A.xa())},
zS(a){var s,r
if(a==null)return B.n
if(!t.j.b(a)||J.k6(a,new A.xu()))throw A.b(B.hl)
s=A.c([],t.s)
for(r=J.O(a);r.m();)s.push(A.u(r.gn()))
return s},
CG(a){var s,r
if(a==null)return B.bt
if(!t.j.b(a)||J.k6(a,new A.xd()))throw A.b(B.iC)
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gn()))
return s},
IP(a){var s,r,q,p
if(a==null)return B.lo
if(!t.f.b(a))throw A.b(B.hH)
if(a.ga5().N(0,new A.xs()))throw A.b(B.i2)
s=A.m(t.N,t.dd)
for(r=a.gM(),r=r.gv(r);r.m();){q=r.gn()
p=q.a
if(typeof p=="string")s.l(0,p,A.CG(q.b))}return s},
r9:function r9(a,b,c,d,e,f,g,h,i,j){var _=this
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
ra:function ra(){},
rc:function rc(){},
rd:function rd(){},
rb:function rb(){},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(){},
xa:function xa(){},
xu:function xu(){},
xd:function xd(){},
xs:function xs(){},
Du(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.yD(m)
for(s=a.A(),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.Z(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){o=s[q]
n=o.a
if(!p.k(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.L("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
K6(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.yE(n),l=A.Z(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)l.K(0,s[q].c.gak())
for(s=A.fz(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.L(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bU(b,b.r,b.e,A.t(b).i("bU<1>"));s.m();){r=s.d
if(!l.p(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bp(o,".fbx")||B.c.bp(o,".obj")||B.c.bp(o,".mtl")||B.c.bp(o,".gltf")||B.c.bp(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
yD:function yD(a){this.a=a},
yE:function yE(a){this.a=a},
rX:function rX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
rY:function rY(){},
fc:function fc(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
oH:function oH(a,b){this.a=a
this.b=b
this.c=null},
fV:function fV(a,b){this.a=a
this.b=b},
oI:function oI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oK:function oK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oJ:function oJ(){var _=this
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
fS:function fS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=$},
kN:function kN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
_.k3=b1},
kO:function kO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eq(a,b){return new A.kY(a,b)},
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
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
JV(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.v)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.k(f,new A.jr(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Y(f,new A.yt())
s=A.c([],t.cv)
for(r=A.hw(f,0,A.e5(b,"count",t.S),t.mn),q=r.$ti,r=new A.al(r,r.gu(0),q.i("al<a_.E>")),q=q.i("a_.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a,b,c){this.a=a
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
yt:function yt(){},
le(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.cN(h,a,p,o,n,g,k,j,m,i,e,d,q,r,c,b,f,l)},
lf(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.n("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
fN:function fN(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
cN:function cN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Fe(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.f(A.n("MeshData.indices must be Uint16List or Uint32List, got "+J.eT(a).t(0),null))}return s},
cS:function cS(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qY:function qY(){},
qZ:function qZ(){},
r_:function r_(){},
kx:function kx(){},
iH(a){var s,r,q="volumetric",p=t.N,o=A.aN(["sceneColor","present"],p),n=a.a.b
if(n.p(0,"shadows"))o.K(0,A.aN(["shadowMap","sceneDepth"],p))
if(n.p(0,q)){o.k(0,"volumetricLight")
o.k(0,"sceneColor#"+(a.d>1?2:1))}if(n.p(0,"ssao"))o.K(0,A.aN(["ssaoRaw","ssaoBlurred"],p))
if(n.p(0,"bloom")){if(a.d>1)s=n.p(0,q)?3:2
else s=n.p(0,q)?2:1
o.K(0,A.aN(["bloomBlurH","bloomBlurV","sceneColor#"+s],p))}if(a.d>1)o.k(0,"sceneColor#1")
if(n.p(0,"dof"))o.K(0,A.aN(["dofBlurH","dofBlurV","dofOutput"],p))
if(n.p(0,"grade"))o.k(0,"gradeOutput")
if(n.p(0,"ps1"))o.k(0,"ps1Output")
r=n.p(0,"vhs")
if(r)o.k(0,"vhsOutput")
return new A.rn(A.fi(o,p),r)},
rn:function rn(a,b){this.a=a
this.b=b},
ro:function ro(){},
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
kl:function kl(a,b){this.a=a
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
iR:function iR(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ff:function ff(a,b){this.a=a
this.b=b},
aX:function aX(a,b,c){this.a=a
this.b=b
this.d=c},
pn:function pn(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Fc(a){var s,r,q
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=B.bE;s.m();){switch(s.d.a){case 0:q=B.bE
break
case 1:q=B.dy
break
case 2:q=B.dz
break
case 3:q=B.dA
break
default:q=null}if(A.AX(q)>A.AX(r))r=q}return r},
AX(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
D1(a){return new A.bI(A.IX(a),t.EF)},
IX(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$D1(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.a8("albedo",o),1
case 4:case 3:o=s.x
r=o!=null?5:6
break
case 5:r=7
return b.b=new A.a8("normal",o),1
case 7:case 6:return 0
case 1:return b.c=p.at(-1),3}}}},
f7:function f7(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a,b){this.a=a
this.b=b},
qV:function qV(a){this.a=a},
qW:function qW(a){this.a=a},
qT:function qT(a){this.a=a},
qU:function qU(){},
Fd(){return new A.lg(new A.db(new A.qX(),A.c([],t.Fy),A.c([],t.t),t.ja))},
lg:function lg(a){this.a=a},
qX:function qX(){},
CZ(a){var s=4
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
Hx(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.CZ(o.a)===b)q+=o.c}return q},
Ff(a){return new A.r0(a,new A.db(new A.r1(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
AY(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.f(A.n("MeshStore indices must be Uint16List or Uint32List",null))}return s},
m2:function m2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
r1:function r1(){},
r2:function r2(){},
Jq(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bC(B.d.eL(r,16),8,"0")+B.c.bC(B.d.eL(q,16),8,"0")},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b){this.b=a
this.c=b},
r5:function r5(a,b,c,d,e,f){var _=this
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
D8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.b(A.dM(B.mz,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.jS[q])throw A.b(A.dM(B.mA,'expected "QMSH", got '+B.f4.mG(B.a1.aB(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.fd(0,null,B.d.b9(a.byteLength,p))
n=J.Ag(B.a1.ge6(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.b(A.dM(B.mB,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.nu.p(0,k)))throw A.b(A.dM(B.dP,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.b(A.dM(B.mC,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.R(j,3)!==0)throw A.b(A.dM(B.mE,"vertexCount "+j+" is not a multiple of 3"))
h=J.qs(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.N(h,new A.xL()))throw A.b(A.dM(B.mD,"bounds contain a non-finite value: "+A.y(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.b(A.dM(B.dQ,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.ab
break A}if(18===k){d=B.oN
break A}if(20===k){d=B.oM
break A}d=A.f(A.dM(B.dP,"no vertex layout for stride "+k))}s=new A.bV(d,g,null,new A.fM(new A.C(h[0],h[1],h[2]),new A.C(h[3],h[4],h[5])))
try{s.A()}catch(e){r=A.ah(e)
d=A.dM(B.dQ,"mesh validation failed: "+A.y(r))
throw A.b(d)}return s},
cQ:function cQ(a,b){this.a=a
this.b=b},
lE:function lE(a,b){this.a=a
this.b=b},
xL:function xL(){},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
uo:function uo(a,b){this.a=a
this.b=b},
up:function up(a){this.a=a},
um:function um(a,b){this.a=a
this.b=b},
un:function un(){},
G1(a){var s=new A.m_(a,new A.db(new A.uq(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.b1($.A7())
s.e=s.b1($.A4())
s.f=s.b1($.A5())
s.r=s.b1($.A3())
s.w=s.b1($.A6())
return s},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function m_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
uq:function uq(){},
us:function us(){},
ur:function ur(){},
FW(a,b,c,d,e){var s,r,q
if(c)return B.o3
if(d)return B.nY
s=A.Bk(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.o7
r=s<0
if(a>=0.2617993877991494)return r?B.e8:B.o8
if(a>=0.10471975511965977)return r?B.e8:B.o9
if(a>=-0.014538592669112763)return r?B.o6:B.oa
q=a*180/3.141592653589793
if(q>=-6)return r?B.o5:B.o_
if(q>=-12)return r?B.o4:B.o0
if(q>=-18)return r?B.nZ:B.o1
return B.o2},
Bl(a,b,c){var s
if(b<=a)return c<a?0:1
s=B.b.q((c-a)/(b-a),0,1)
return s*s*(3-2*s)},
Bk(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
bh:function bh(a,b){this.a=a
this.b=b},
uc:function uc(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
JW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.gV(0)
if(!g)throw A.b(A.n("invalid volumetric source selection inputs",null))
s=A.Z(t.N)
r=A.c([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.v)(c),++n){m=c[n]
m.A()
l=m.a
if(!s.k(0,l))throw A.b(A.n("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.By(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.k(r,new A.js(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.Y(r,new A.yu())
g=A.c([],t.xL)
for(q=A.hw(r,0,A.e5(a,"count",t.S),t.bG),p=q.$ti,q=new A.al(q,q.gu(0),p.i("al<a_.E>")),p=p.i("a_.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
By(a,b,c){var s,r,q,p
for(s=[new A.a8("distance",b),new A.a8("referenceDistance",c),new A.a8("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.f(A.n(q.a+" must be finite: "+A.y(p),null))}if(b<0||c<=0||a<=0)throw A.b(A.n("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.q(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
Gb(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gV(0))A.f(A.n(c1+c5.t(0),c0))
if(!c3.gV(0))A.f(A.n(c2+c3.t(0),c0))
if(!isFinite(c4))A.f(A.n("rayLength must be finite: "+A.y(c4),c0))
if(!isFinite(c6))A.f(A.n("scatteringCoeff must be finite: "+A.y(c6),c0))
if(!isFinite(0.7))A.f(A.n("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.f(A.n("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbd()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.b(A.n("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.v,e=B.v,d=0,c=0;c<c7.length;c7.length===s||(0,A.v)(c7),++c){b=c7[c]
b.A()
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.By(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.f(A.n(c1+c5.t(0),c0))
if(!(n&&m&&l))A.f(A.n(c2+c3.t(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.f(A.n("lightPos must be finite: "+a.t(0),c0))
if(!isFinite(a8))A.f(A.n("lightIntensity must be finite: "+A.y(a8),c0))
if(k)A.f(A.n("rayDirection must be nonzero",c0))
if(o)A.f(A.n("rayLength must be >= 0",c0))
if(a8<0||g)A.f(A.n("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.gac()
a=a9.a
b0=a9.b
b1=a9.c
b2=a1*a+a3*b0+a5*b1
b3=B.b.q(b2,0,c4)
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
e=new A.C(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.uQ(f,e.gbd()<1e-8?B.v:e.gac(),d)},
ct:function ct(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yu:function yu(){},
uQ:function uQ(a,b,c){this.a=a
this.b=b
this.c=c},
Jj(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.m(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.v)(a),++q){p=a[q]
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
kL:function kL(a){this.a=a},
ph:function ph(){},
pi:function pi(a){this.a=a},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
kM:function kM(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
kP:function kP(a,b){this.a=a
this.b=b
this.c=0},
GD(){return new A.hC()},
pm:function pm(a){this.a=a
this.b=null},
hC:function hC(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
yX(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
rr:function rr(){},
rs:function rs(){},
cn:function cn(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
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
rZ:function rZ(){},
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
t0:function t0(a,b){this.a=a
this.b=b},
t5:function t5(){},
t4:function t4(){},
t3:function t3(){},
t2:function t2(a){this.a=a},
t1:function t1(a,b,c){this.a=a
this.b=b
this.c=c},
t_:function t_(a,b){this.a=a
this.b=b},
FJ(a){return new A.iQ(a,new A.db(new A.t6(),A.c([],t.w_),A.c([],t.t),t.tc))},
mD:function mD(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a,b){this.a=a
this.b=b},
t6:function t6(){},
wZ(a,b){return A.HI(a,b)},
HI(a,b){var s=0,r=A.aK(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wZ=A.aL(function(c,a0){if(c===1)return A.aH(a0,r)
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
try{o=a.x.dk(b)
n=new A.lC(a.a,A.m(t.N,t.CH))
l=A.Cp(a,n,b,o.a.b.a)
m=l.a
i.ca(p)
h=a.x
g=o
if(h.e)A.f(A.i("GPU resource adapter is disposed"))
h.fj(g)
f=h.c
h.b.ca(g.a)
h.c=g
h.d=null
if(f!=null)h.dQ(f.b)
g.c=B.j1
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bO()
h=j
if(h!=null)h.bO()}catch(d){if(p.c===B.b7){h=t.AB.a(p)
i.fu(h)
i.a.hl(h.a)
i.b.eG(h.b)
h.c=B.fA
i.c=null}i=o
if((i==null?null:i.c)===B.al){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.f(A.i("GPU resource adapter is disposed"))
i.fj(h)
i.dQ(h.b)
i.b.eG(h.a)
h.c=B.j2
i.d=null}i=m
if(i!=null)i.bO()
i=n
if(i!=null)i.bO()
throw d}case 1:return A.aI(q,r)}})
return A.aJ($async$wZ,r)},
Cq(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.Cp(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
Cp(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.wX(a),j=new A.wY(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Jo(b,h,d,i,s.goq(),new A.wI(j),new A.wJ(j),new A.wK(a),new A.wP(a),new A.wQ(a),new A.wR(j),new A.wS(j),s.gos(),new A.wT(a),s.gox(),r.gou(),k,s.goz(),s.goB(),new A.wU(j,c),new A.wV(j),new A.wW(j),new A.wL(j),new A.wM(j),new A.wN(a),new A.wO(j),e,f,g,c.r)}else{p=new A.aO(l,B.p,g,f,e,0)
o=new A.aO(l,B.p,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.iA(h,p,o):null
k=A.c([new A.mk(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity*uAmbientLightScale+\n    vec3(ndotl)*uDirectLightScale,0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.iK(b,u.l,u.p,h,i,d))
q=new A.kL(k)}a.r.toString
m=q.lU(B.a8,new A.rZ(),!1,new A.mO())
k=m.a.b
if(k.length!==0)throw A.b(A.i("safe renderer graph is invalid: "+A.y(k)))
return new A.vX(q,m)},
HJ(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.i("renderer graph is not initialized"))
s=A.J(b7.gi4(),t.yz)
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
B.a.k(s,new A.n1(new A.cI((r|1073741824)>>>0,0,"transient"),q,A.b0(new A.H(p,n.i("C(1)").a(o.gao()),n.i("H<1,C>")))))}p=b8.a
m=A.Ju(A.AA(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.v)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.eq(B.aM,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.af(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.v)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.f(A.eq(B.aM,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.af(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.pm(n)
e.lQ("cull")
j=l-f
d=e.b
if(d==null)A.f(A.i("cull recorded outside an active frame"))
if(j<0)A.f(A.n("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.v)(s),++k){a2=s[k]
if(a2.gG().e===B.aJ)B.a.k(a,new A.b2(new A.bS(a0.is(a2.gG().c.a).c,a2.gE().a),a2,a1))
else B.a.k(b,new A.b2(new A.bW(B.mv,a2.gG().b,a2.gG().a,a2.gE().a),a2,g))}a3=new A.mA(A.Jj(A.JY(b)),A.JX(a),p,b8.b,b8.c)
a4=new A.kA(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.v)(s),++k){a5=s[k]
g=a5.gG().a
if(g.length===0)A.f(A.a6(g,"passId",null))
e.b=g
n.bT(g,A.Da())
a6=A.m(o,i)
for(g=a5.gG().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.v)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.f(A.i("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.f(A.i("resource is not in candidate: "+b1))
b3=new A.fQ(b2)
a6.l(0,b0+"#"+a1,b3)
a6.bT(b0,new A.x_(b3))}a5.am(new A.kn(a6,a4,a3))}return new A.vh(e,m,j)},
Bg(a){return new A.te(a,new A.oH(new A.oJ(),new A.lK()),new A.kP(A.c([],t.h1),B.iL),A.c([],t.Ft),B.bO,A.c([],t.ow),null)},
lJ:function lJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
vh:function vh(a,b,c){this.a=a
this.b=b
this.c=c},
n1:function n1(a,b,c){this.a=a
this.b=b
this.c=c},
wX:function wX(a){this.a=a},
wY:function wY(a,b){this.a=a
this.b=b},
wW:function wW(a){this.a=a},
wP:function wP(a){this.a=a},
wQ:function wQ(a){this.a=a},
wV:function wV(a){this.a=a},
wK:function wK(a){this.a=a},
wM:function wM(a){this.a=a},
wL:function wL(a){this.a=a},
wU:function wU(a,b){this.a=a
this.b=b},
wI:function wI(a){this.a=a},
wJ:function wJ(a){this.a=a},
wR:function wR(a){this.a=a},
wS:function wS(a){this.a=a},
wT:function wT(a){this.a=a},
wO:function wO(a){this.a=a},
wN:function wN(a){this.a=a},
x_:function x_(a){this.a=a},
vX:function vX(a,b){this.a=a
this.b=b},
mO:function mO(){},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
te:function te(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
tf:function tf(){},
tg:function tg(){},
th:function th(){},
mL:function mL(a){this.b=a},
vt:function vt(){},
mS:function mS(){},
iY:function iY(a,b){this.a=a
this.b=b},
JY(a){var s,r,q=A.J(a,t.E0)
B.a.Y(q,new A.yy())
s=A.B(q)
r=s.i("H<1,ca>")
s=A.J(new A.H(q,s.i("ca(1)").a(new A.yz()),r),r.i("a_.E"))
s.$flags=1
return s},
JX(a){var s,r,q=A.J(a,t.EH)
B.a.Y(q,new A.yw())
s=A.B(q)
r=s.i("H<1,ca>")
s=A.J(new A.H(q,s.i("ca(1)").a(new A.yx()),r),r.i("a_.E"))
s.$flags=1
return s},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
yy:function yy(){},
yz:function yz(){},
yw:function yw(){},
yx:function yx(){},
Ju(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.v)(b),++p){o=b[p];++r
if((o.gG().d&c)>>>0===0){++q
continue}n=o.geR()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.n("cullItems: non-finite world bounds for instance "+o.gE().t(0),null))
if(a.iq(o.geR())===B.b8){++q
continue}B.a.k(l,o)}return new A.oZ(l,new A.p_(q))},
p_:function p_(a){this.b=a},
oZ:function oZ(a,b){this.a=a
this.b=b},
b0(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.oA,q=B.oC,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.C(m,k,Math.min(r.c,o))
q=new A.C(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.n("Aabb.fromPoints requires at least one point",null))
return new A.fM(r,q)},
fM:function fM(a,b){this.a=a
this.b=b},
AA(a){var s,r,q,p,o,n,m=a.a,l=new A.pp(),k=m.length
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
return new A.po(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
fa:function fa(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
po:function po(a){this.a=a},
pp:function pp(){},
AV(a){if(a.length!==16)throw A.b(A.n("Mat4.fromColumnMajor requires 16 values",null))
return new A.d8(new Float32Array(A.W(a)))},
yV(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.d8(q)},
AW(a,b,c){var s=b.gac(),r=c.bz(s).gac(),q=s.bz(r),p=new Float32Array(16)
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
return new A.d8(p)},
d8:function d8(a){this.a=a},
qS:function qS(){},
rV(a,b){var s=a.gac(),r=b/2,q=Math.sin(r)
return new A.lF(s.a*q,s.b*q,s.c*q,Math.cos(r))},
lF:function lF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a,b){this.a=a
this.b=b},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nQ:function nQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
jc:function jc(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
km:function km(a,b,c,d,e,f,g,h){var _=this
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
kz:function kz(a,b,c,d,e,f,g){var _=this
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
je:function je(a,b){this.a=a
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
kE:function kE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
mJ:function mJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(a){this.b=a},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
br(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aO(a.a,a.b,b,c,s,r)},
yY:function yY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
iK:function iK(a,b,c,d,e,f){var _=this
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
Bj(a){var s=a.c,r=Math.abs(s.a)<0.99?B.ei:B.Q,q=A.AW(a.b,s,r)
return new A.fk(A.yV(1,a.f,B.b.q(a.w*2,0.1,3),0.05).a8(0,q))},
fk:function fk(a){this.a=a},
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
Jo(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.p(0,"shadows"))throw A.b(A.a6(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
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
j=A.br(B.bR.i6(),e9,e8,b2,b2)
i=e7>1
h=A.br(B.na,e9,e8,b2,i?2:1)
g=A.br(B.n9,c0,l,b2,b2)
A.br(B.ni,e9,e8,b2,b2)
f=A.br(B.nf,e9,e8,b2,b2)
e=A.br(B.n8,f0,f0,b2,b2)
d=A.br(B.nb,c0,l,b2,b2)
c=A.br(B.nc,c0,l,b2,b2)
b=A.br(B.ng,c0,l,b2,b2)
a=A.br(B.nh,c0,l,b2,b2)
a0=$.Dv()
a1=i?1:0
a2=A.br(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.br(B.n5,c0,l,b2,b2)
a1=A.br(B.n6,c0,l,b2,b2)
a3=A.br(B.n7,e9,e8,b2,b2)
a4=A.br(B.nd,e9,e8,b2,b2)
a5=A.br(B.nj,e9,e8,b2,b2)
a6=A.br(B.ne,e9,e8,b2,b2)
a7=i?new A.iA(c2,k,j):b2
b9.a=null
a8=A.Bj(B.ob)
if(m){a9=i?j:k
b0=new A.mg(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform mat4 uView;\nuniform mat4 uInverseProjection;\nuniform vec3 uVolumetricAlbedo;\nuniform float uVolumetricHeightFalloff;\nuniform float uVolumetricDustDensity;\nuniform float uVolumetricJitter;\nuniform float uVolumetricIntensity;\nuniform float uVolumetricSampleCount;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay,\n  float rayLength\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec3 sourceView = (uView * vec4(position, 1.0)).xyz;\n  float sourceDistance = length(sourceView);\n  float tClosest = clamp(dot(sourceView, viewRay), 0.0, rayLength);\n  vec3 sampleToSource = sourceView - viewRay * tClosest;\n  float distanceToSource = max(length(sampleToSource), 1e-3);\n  float cutoff = 1.0 - smoothstep(\n    cutoffDistance * 0.65, cutoffDistance, sourceDistance);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(distanceToSource * distanceToSource,\n          referenceDistance * referenceDistance);\n  // The incoming direction is source -> sample and the outgoing direction is\n  // sample -> camera. This is the same phase convention as the directional\n  // medium path, but now evaluated against the located source.\n  float phase = phaseHenyeyGreenstein(\n    dot(normalize(sampleToSource), viewRay), uAnisotropy);\n  // Located practicals and lightning must also acquire visible body in a\n  // dust-filled room. Use the same broad haze plus particulate density as the\n  // directional march; otherwise a clear-air fog toggle would accidentally\n  // erase dust-lit source rays while the directional shafts still showed it.\n  float mediumDensity = max(uFogDensity + uVolumetricDustDensity, 0.0);\n  float mediumWeight = 1.0 - exp(-max(\n    mediumDensity * min(rayLength, cutoffDistance), 0.0));\n  float pathWeight = clamp(\n    rayLength / max(sourceDistance, referenceDistance), 0.0, 1.0);\n  return color * inverseSquare * phase * cutoff * mediumWeight * pathWeight *\n    uVolumetricIntensity * 0.35;\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  vec4 viewPoint = uInverseProjection * vec4(vUv * 2.0 - 1.0, -1.0, 1.0);\n  viewPoint /= max(abs(viewPoint.w), 1e-5);\n  vec3 viewRay = normalize(viewPoint.xyz);\n  // linearDepth is camera-space Z; convert it to distance along the actual\n  // reconstructed ray so wide and tall projections integrate equally.\n  float cameraDepth = linearDepth(depth);\n  float rayLength = min(cameraDepth / max(-viewRay.z, 1e-3), uFar);\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int maxSampleCount = 24;\n  int sampleCount = int(clamp(uVolumetricSampleCount, 4.0, 24.0));\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  float jitterSeed = fract(sin(dot(vUv, vec2(127.1, 311.7))) * 43758.5453);\n  float jitter = (jitterSeed - 0.5) * clamp(uVolumetricJitter, 0.0, 0.5);\n  for (int i = 0; i < maxSampleCount; i++) {\n    if (i >= sampleCount) break;\n    float distanceAlongRay = clamp(\n      (float(i) + 0.5 + jitter) * stepLength, 0.0, rayLength);\n    float heightWeight = exp(-max(distanceAlongRay * uVolumetricHeightFalloff, 0.0));\n    // Dust is a separate, host-resolved particulate phase. It is denser near\n    // the occupied room volume than the broad atmospheric haze, so shafts gain\n    // visible body without turning the far horizon opaque. At zero density the\n    // extra term is exactly zero and the established fog path is unchanged.\n    float dustWeight = exp(-max(distanceAlongRay *\n      uVolumetricHeightFalloff * 0.45, 0.0));\n    float opticalDensity = density +\n      max(uVolumetricDustDensity, 0.0) * dustWeight;\n    float opticalDepth = opticalDensity * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uVolumetricAlbedo *\n      uShaftIntensity * uVolumetricIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay, rayLength);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.c([],t.C1))}else b0=b2
g=t.e_
b1=A.c([],g)
if(!m)h=i?j:k
if(r){B.a.K(b1,A.c([new A.i6(c1,b3,b4,c2,b5,b5,B.ew,!0,h,b,e0,c0,l),new A.i6(c1,b3,b4,c2,b6,b6,B.po,!1,b,a,c6,c0,l),new A.km(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.K(b1,A.c([new A.id(c1,b3,b4,c2,b7,b7,B.ex,h,a0,e0,c0,l),new A.id(c1,b3,b4,c2,b8,b8,B.pp,a0,a1,d1,c0,l),new A.kE(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.k(b1,new A.kX(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.k(b1,new A.lD(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.k(b1,new A.m7(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.c([new A.kz(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.lV(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.lU(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.lS(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.xH(b9),e))
j.push(new A.lT(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nuniform vec3 uReflectionColor;\nuniform float uReflectionIntensity;\nuniform float uReflectionConfidence;\nuniform vec2 uShadowMapTexelSize;\nuniform float uShadowFilterRadius;\nuniform float uShadowBias;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uSpecularScale;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(uShadowBias*(1.-ndotl),uShadowBias*0.2666667);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize*clamp(uShadowFilterRadius,0.,3.);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  direct*=uDirectLightScale;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*uAmbientLightScale*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  // A steady spherical conductive field decays approximately as 1/r. The\n  // host keeps the slow latent material memory in uSurfaceDissolution; this\n  // local term therefore models the spatial heat field without making warm\n  // surfaces snap back or disappear at an arbitrary exponential radius.\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*clamp(uThermalSourceRadius0/\n      max(distance(vWorldPos,uThermalSourcePosition0),uThermalSourceRadius0),0.,1.));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*clamp(uThermalSourceRadius1/\n      max(distance(vWorldPos,uThermalSourcePosition1),uThermalSourceRadius1),0.,1.));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*clamp(uThermalSourceRadius2/\n      max(distance(vWorldPos,uThermalSourcePosition2),uThermalSourceRadius2),0.,1.));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*clamp(uThermalSourceRadius3/\n      max(distance(vWorldPos,uThermalSourcePosition3),uThermalSourceRadius3),0.,1.));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  specular*=uDirectLightScale*uSpecularScale;\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity*\n    uDirectLightScale*uSpecularScale;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  // Environment fallback reflections are deliberately bounded and weighted\n  // by wetness/grazing angle. A real probe/history hit can raise confidence;\n  // the current host fallback remains visible but never masquerades as SSR.\n  float reflectionNdotV=max(dot(n,viewDir),0.0);\n  float reflectionFresnel=0.04+0.96*pow(1.0-reflectionNdotV,5.0);\n  float reflectionSurface=clamp(wetness+0.18*dissolution,0.0,1.0);\n  float reflectionConfidence=0.20+0.80*clamp(uReflectionConfidence,0.0,1.0);\n  float reflectionWeight=clamp(\n    uReflectionIntensity*reflectionSurface*reflectionFresnel*\n      (1.0-0.72*rough)*reflectionConfidence,\n    0.0,1.0);\n  lit+=uReflectionColor*reflectionWeight;\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.xI(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.K(j,b1)
j.push(new A.iK(c1,b3,u.p,c2,h,c3))
return new A.kL(j)},
xH:function xH(a){this.a=a},
xI:function xI(a,b){this.a=a
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
iS:function iS(a,b,c,d){var _=this
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
oF:function oF(){},
lR(a,b){return new A.iW(a,b)},
kU:function kU(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
kW:function kW(a,b){this.a=a
this.b=b},
kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
f2:function f2(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
il:function il(a,b){this.a=a
this.b=b},
fj:function fj(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
kA:function kA(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
pK:function pK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pL:function pL(){},
pM:function pM(){},
hF:function hF(a,b){this.a=a
this.b=b},
eH:function eH(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
Ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.h2(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kk:function kk(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
kv:function kv(a,b){this.a=a
this.b=b},
ky:function ky(a,b){this.a=a
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
v7:function v7(){this.a=null},
Gi(a){var s=new A.mi(a,B.j,new A.v7(),A.Gs(a))
s.jD(a)
return s},
Gs(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.Z(t.N)
s=A.Z(t.N)
r=J.O(t.a.b(q)?q:new A.b8(q,A.B(q).i("b8<1,e>")))
while(r.m())s.k(0,r.gn())
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
BG(a,b){var s
if(a.b!==B.j)A.f(A.i(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.h(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.n("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
Gn(a,b,c){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.i("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Gm(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.h(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Gl(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
BF(a,b){var s
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
Gj(a,b){var s
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
r=s.mN(b)
if(r.a===0)return
if(r.p(0,B.bW)){q=v.G
p=a.a
if(b.a)p.enable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.h(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bX))a.a.depthFunc(A.Gm(a,b.b))
if(r.p(0,B.bY))a.a.depthMask(b.c)
if(r.p(0,B.c1)){q=v.G
p=a.a
if(b.w)p.enable(A.h(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.h(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.c2))a.a.cullFace(A.Gl(a,b.x))
if(r.p(0,B.eb)){q=v.G.WebGL2RenderingContext
q=A.h(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.bZ)){q=v.G
p=a.a
if(b.d)p.enable(A.h(q.WebGL2RenderingContext.BLEND))
else p.disable(A.h(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.c_))a.a.blendFunc(A.BF(a,b.e),A.BF(a,b.f))
if(r.p(0,B.c0))a.a.blendEquation(A.Gj(a,b.r))
if(r.p(0,B.e9))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.ea)){q=v.G.WebGL2RenderingContext
a.a.disable(A.h(q.SCISSOR_TEST))}s.a=b},
Gk(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.h(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.h(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.h(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
cT(a,b,c,d,e,f){var s
if(a.b!==B.j)A.f(A.i(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.Gk(a,b))},
bP(a,b){var s
if(a.b!==B.j)A.f(A.i(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
q(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.j)A.f(A.i(u.k))
s=a.e
if(s==null)throw A.b(A.i("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.G(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.aA(c.b))
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
A.aT(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.h(c.b))
break}},
bi(a,b){if(a.b!==B.j)A.f(A.i(u.k))
a.a.bindVertexArray(A.a(b.a))},
aF(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.f(A.i(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.h(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jI){p=s.d>1?A.h(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jH){o=s.b
if(o!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.h(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.i("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.i("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Go(a,b,c){var s,r,q,p,o,n,m,l,k,j
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
m=J.Ag(B.a1.ge6(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.aU(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.h(q.WebGL2RenderingContext.STATIC_DRAW))}},
Gp(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
BJ(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.i(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.b(A.i("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.d0?A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.h(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Gp(a,b.b))
return new A.e0(r)},
BH(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.h(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
BI(a,b){var s
switch(b.a){case 0:s=A.h(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.h(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
Gq(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
z5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
l=m?A.Gq(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aT(s,"texStorage3D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aT(s,"texStorage2D",[n,l,A.h(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.BH(a,b.e))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.BH(a,b.f))
p=b.r
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.BI(a,p))
s.texParameteri(n,A.h(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.BI(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.fS(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.f(A.a6(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.e0(new A.jI(r,j,i,q,m))},
z6(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.f(A.i(u.k))
s=t.p.a(b.a)
r=s.d
if(c>=r)throw A.b(A.n("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.n("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.h(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aT(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aT(l,"texSubImage2D",[m,0,0,0,q,p,A.h(n.WebGL2RenderingContext.RGBA),A.h(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
BK(a,b){var s,r,q
if(a.b!==B.j)A.f(A.i(u.k))
s=t.p.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.h(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.h(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
mj(a,b){a.a.deleteTexture(t.p.a(b.a).a)},
BM(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.f(A.i(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.n("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.b(A.i("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.bb
if(n&&!a1.e)throw A.b(A.n("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
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
A.aT(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aT(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aT(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aT(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aT(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.LINEAR))
A.aT(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.h(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aT(r,c,[A.h(p.WebGL2RenderingContext.RENDERBUFFER),o,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.G(r.createTexture())
r.bindTexture(A.h(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aT(r,b,[A.h(p.WebGL2RenderingContext.TEXTURE_2D),1,A.h(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.h(p.WebGL2RenderingContext.TEXTURE_2D),A.h(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.h(p.WebGL2RenderingContext.NEAREST))
A.aT(r,a,[A.h(p.WebGL2RenderingContext.FRAMEBUFFER),A.h(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.h(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.h(r.checkFramebufferStatus(A.h(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.h(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.h(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.z7(a0,q,l,k,f,e,j,i)
throw A.b(A.i("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.e0(new A.jH(q,l,k,f,e,j,i,s,a1.b,a1.c))},
z7(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cv(a){var s
if(a.b!==B.j)A.f(A.i(u.k))
s=A.G(a.a.createVertexArray())
if(s==null)throw A.b(A.i("WebGl2Device: gl.createVertexArray() returned null"))
return new A.e0(s)},
BL(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.b(A.lR(b===A.nt(A.Cu(A.Dr(),r),q,t.S)?B.e2:B.e3,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.i0(p.getShaderParameter(o,A.h(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.ao(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.lR(b===A.nt(A.Cu(A.Dr(),r),q,t.S)?B.e2:B.e3,s))}return o},
Gr(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.i(u.k))
q=v.G
s=A.BL(a,A.h(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.BL(a,A.h(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.nK)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.i0(o.getProgramParameter(n,A.h(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.ao(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lR(B.e4,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.v)(c),++l){k=c[l]
if(A.h(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lR(B.e5,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.lR(B.e5,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.e0(n)},
e0:function e0(a){this.a=a},
jI:function jI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jH:function jH(a,b,c,d,e,f,g,h,i,j){var _=this
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
v4:function v4(a){this.a=a},
v5:function v5(a){this.a=a},
w7:function w7(){},
n7:function n7(){},
v3:function v3(a){this.a=a},
v6:function v6(){},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o5(a0,a1){var s=0,r=A.aK(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$o5=A.aL(function(a2,a3){if(a2===1)return A.aH(a3,r)
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
a=new A.kg(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.m(o,t.a_),B.b4,A.m(n,t.jS))
a.jn(p,a1)
p=A.t(a0).i("N<1,2>")
s=3
return A.a5(A.pr(A.ld(new A.N(a0,p),p.i("aS<ax>(p.E)").a(new A.o6(a)),p.i("p.E"),t.ls),t.c),$async$o5)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.kr():m
b.buffer=p
q=a
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$o5,r)},
kg:function kg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
o7:function o7(){},
o6:function o6(a){this.a=a},
oa:function oa(a,b){this.a=a
this.b=b},
o9:function o9(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function o8(a,b){this.a=a
this.b=b},
ob:function ob(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jG:function jG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
E9(a,b,c,d,e,f,g){var s=new A.nX(c,f,b,g,new A.k(d.a,d.b,d.c),e,a)
s.jp(a,b,c,d,0,e,f,g)
return s},
E5(a,b){var s=new A.nC(b)
s.jm(a,b)
return s},
E8(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.N(a,A.t(a).i("N<1,2>")).gv(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aE(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.nT(A.aV(n,r,t.a))
n.jo(a)
return n},
IS(a,b){var s,r,q,p=b>>>0
for(s=new A.dv(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.Df(p,q==null?r.a(q):q)}return p&2147483647},
kh:function kh(a,b){this.a=a
this.b=b},
nX:function nX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nY:function nY(){},
nC:function nC(a){this.a=a},
nD:function nD(){},
i4:function i4(){},
nE:function nE(){},
nF:function nF(){},
nT:function nT(a){this.a=a},
nV:function nV(){},
nW:function nW(){},
nU:function nU(){},
yK:function yK(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
o4:function o4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nZ:function nZ(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function o_(a){this.a=a},
o0:function o0(){},
ja:function ja(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
oC:function oC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
pl:function pl(a){this.a=a},
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
ql:function ql(a){this.a=a},
F_(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.N(a,A.t(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aE(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return new A.qk(n)},
qk:function qk(a){this.a=a},
qo:function qo(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b7:function b7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qJ:function qJ(a,b,c){this.a=a
this.c=b
this.e=c},
qG:function qG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(){},
p0:function p0(){this.b=this.a=0},
qP:function qP(a){this.a=a
this.b=0
this.e=!1},
j_(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aU(a)
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
cs:function cs(a){this.a=a
this.b=0},
j4(a,b,c){return new A.k(a,b,c)},
Bw(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
uW:function uW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
uX:function uX(){},
cu:function cu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
uY:function uY(){},
eB:function eB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uT:function uT(){},
uU:function uU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uV:function uV(){},
uS:function uS(){this.b=this.a=-1},
Gt(a,b,c,d){return new A.ml(d,b,c,a)},
Gv(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.DH()
s=a.d
r=A.v9(s,0)
q=A.v9(s,1)
p=A.v9(s,2)
o=A.v9(s,3)
s=t.N
n=A.Z(s)
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
return new A.ml(m,p,o,A.fi(n,s))},
v9(a,b){return A.Gu(b<a.length?a[b]:0)},
bQ(a,b){return b<a.length&&a[b]>=0.5},
Gu(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.q((Math.abs(a)-0.18)/0.8200000000000001,0,1)
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
ov:function ov(a){this.a=a},
Ev(a,b,c){var s=new A.kF(a,c,null,b)
s.jt(a,null,null,b,c)
return s},
kF:function kF(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
EI(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bK(new A.I(B.l2,t.e2.a(new A.pc(a)),t.vL),t.yW)
return s==null?null:new A.h3(s)},
B_(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.yW(s,a,B.kr)
break
case 1:A.yW(s,a,B.ks)
break
case 2:A.yW(s,a,B.l6)
break}return s},
yW(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.L(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.k(a,p.c)
return}}},
EH(a){if(a.a!==21)return null
if(a.e)return B.fK
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fL
return B.fJ},
cl:function cl(a,b){this.a=a
this.b=b},
p9:function p9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h3:function h3(a){this.a=a},
pc:function pc(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
Fq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
IU(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gM(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.h0)
p.l(0,q,r.b)}return p},
we(a){var s,r,q,p,o,n=a.ga5().bD(0)
B.a.X(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.v)(n),++p){o=n[p]
r.l(0,o,A.Cm(a.h(0,o)))}return A.aV(r,t.N,s)},
Cm(a){var s
if(t.f.b(a))return A.we(A.IU(a))
if(t.j.b(a)){s=t.z
return A.ad(J.e7(a,A.JQ(),s),s)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i4)
return a}throw A.b(A.M("presentation snapshot contains unsupported value "+J.eT(a).t(0),null,null))},
rQ:function rQ(a){this.a=a},
Bf(a,b,c){var s=A.zn(b),r=A.zn(a)
if(c!==2)A.f(A.a6(c,"version","unsupported save version"))
return new A.hq(c,s,r)},
zn(a){var s,r,q,p,o=A.t(a).i("ac<1>"),n=A.J(new A.ac(a,o),o.i("p.E"))
B.a.X(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.v)(n),++q){p=n[q]
s.l(0,p,A.Cl(a.h(0,p)))}return A.aV(s,t.N,o)},
Cl(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gM(),r=r.gv(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.hP)
s.l(0,p,q.b)}return A.zn(s)}if(t.j.b(a)){r=t.z
return A.ad(J.e7(a,A.JU(),r),r)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.i9)
return a}throw A.b(A.M("save contains unsupported value "+J.eT(a).t(0),null,null))},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
td:function td(){},
fh:function fh(a,b){this.a=a
this.b=b},
AC(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.px(a,b,c,d,e,f,g,s,r,h)},
AD(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aZ(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.hO)
r=d.h(0,"runSeed")
q=A.aZ(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aZ(p)||p<1||typeof o!="number")throw A.b(B.it)
if(!isFinite(5760))throw A.b(A.a6(5760,"daySeconds","must be finite and > 0"))
n=new A.kS(p,7,5760)
n.io(o)
s=t.N
m=t.z
l=A.Fa(a5,A.aY(a0,s,m))
k=A.Es(l,A.aY(a,s,m),n)
j=A.D6(a3,c)
A.EZ(A.aY(a1,s,m)).lJ(j)
s=A.aY(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bx(f))A.f(B.hf)
e=A.Fj(d.h(0,"narrative"))
if(e==null)e=A.rh(null,null,null)
return A.AC(c,q,j,n,l,k,new A.kC(i,h,g,f),e)},
HH(a){var s
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
dz:function dz(a,b){this.a=a
this.b=b},
kR:function kR(a,b){this.c=a
this.d=b},
py:function py(a,b,c){this.a=a
this.b=b
this.r=c},
px:function px(a,b,c,d,e,f,g,h,i,j){var _=this
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
pz:function pz(a){this.a=a},
pA:function pA(){},
pB:function pB(){},
pC:function pC(a){this.a=a},
pD:function pD(){},
Am(a){var s,r,q,p,o,n,m,l,k,j,i,h="modelScale",g="residence",f="restAnchor",e="returnPortalId",d=A.hT(a,"house manifest"),c=typeof d.h(0,h)=="number"?A.a1(d.h(0,h)):1
if(!isFinite(c)||c<=0)throw A.b(B.hz)
s=A.bJ(d,"houseId")
r=A.bJ(d,"sourceRef")
q=A.bJ(d,"presentationScope")
p=A.bJ(d,"storyAuthority")
if(d.h(0,g)==null)o=null
else{n=A.hT(d.h(0,g),g)
o=A.bJ(n,"roomId")
m=A.zN(n.h(0,"spawn"),"residence.spawn",c)
l=typeof n.h(0,f)=="string"?A.u(n.h(0,f)):null
o=new A.op(o,m,l,typeof n.h(0,e)=="string"?A.u(n.h(0,e)):null)}m=J.e7(A.hP(d,"levels"),new A.oc(),t.mD)
m=A.J(m,m.$ti.i("a_.E"))
m.$flags=1
l=J.e7(A.hP(d,"rooms"),new A.od(c),t.bJ)
l=A.J(l,l.$ti.i("a_.E"))
l.$flags=1
k=J.e7(A.hP(d,"portals"),new A.oe(c),t.lT)
k=A.J(k,k.$ti.i("a_.E"))
k.$flags=1
j=J.e7(A.hP(d,"stairs"),new A.of(),t.gI)
j=A.J(j,j.$ti.i("a_.E"))
j.$flags=1
i=J.e7(A.hP(d,"exteriorCells"),new A.og(),t.N)
i=A.J(i,i.$ti.i("a_.E"))
i.$flags=1
s=new A.ki(s,r,q,p,o,m,l,k,j)
s.eO()
return s},
D6(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
a6.eO()
s=A.AF(a7)
r=new A.xG()
for(q=a6.w,p=q.length,o=t.N,n=s.b,m=t.nm,l=0;l<q.length;q.length===p||(0,A.v)(q),++l){k=q[l]
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
for(b=k.e,a=b.length,a0=0;a0<b.length;b.length===a||(0,A.v)(b),++a0){a1=b[a0]
e.push(new A.fs(a1.a,a1.b,a1.c,a1.d,a1.e,a1.f,a1.r))}a2=A.aE(k.f,!1,o)
a2.$flags=3
B.a.k(n,new A.fg(j,new A.k(d,c,h),new A.k(g,f,i),e,A.Hm(j),k.r,k.w,k.x))}for(q=a6.x,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.v)(q),++l){a3=q[l]
B.a.k(o,new A.c9(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a6.y,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.v)(q),++l){a4=q[l]
a2=A.aE(a4.c,!1,n)
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
B.a.k(o,new A.fl(a4.a,a4.b,new A.k(i,h,m),new A.k(f,e,j[2])))}a5=a6.f
if(a5!=null){s.r=a5.a
s.x=a5.c
q=a5.b
p=q.length
if(0>=p)return A.d(q,0)
o=q[0]
if(1>=p)return A.d(q,1)
n=q[1]
if(2>=p)return A.d(q,2)
s.w=new A.k(o,n,q[2])}s.nm()
return s},
Hm(a){var s
A:{if("living-room"===a){s=A.c([A.yS("mantle-living",!0,new A.k(3.7,1.45,0.8),"living-room gas mantle"),A.yS("mantle-living-second",!1,new A.k(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.yS("mantle-hall",!1,new A.k(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.kx
break A}return s},
Eb(a,b){var s,r=A.hT(a,"room"),q=A.bJ(r,"id"),p=A.bJ(r,"floor"),o=A.zN(r.h(0,"origin"),"origin",b),n=A.zN(r.h(0,"size"),"size",b),m=J.e7(A.hP(r,"windows"),new A.oq(b),t.ya)
m=A.J(m,m.$ti.i("a_.E"))
m.$flags=1
s=J.e7(A.hP(r,"portalIds"),new A.or(),t.N)
s=A.J(s,s.$ti.i("a_.E"))
s.$flags=1
return new A.ed(q,p,o,n,m,s,A.zU(r,"wall"),A.zU(r,"floor"),A.zU(r,"ceiling"))},
hT(a,b){return t.P.b(a)?a:A.e2(b+" is not an object")},
hP(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.e2(b+" is not a list")},
bJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e2(b+" is not a string")},
zU(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.e2("surface is not an object")
return A.bJ(s,b)},
zt(a,b){var s,r=A.bJ(a,b)
A:{if("north"===r){s=B.z
break A}if("east"===r){s=B.ai
break A}if("south"===r){s=B.q
break A}if("west"===r){s=B.aj
break A}s=A.e2(b+" has unknown facing "+r)}return s},
Is(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gP(a)||s.N(a,new A.xe())}else s=!0
if(s)return A.e2(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gn()))
return s},
eN(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e2(b+" is not finite")},
np(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.N(a,new A.xB())}else s=!0
if(s)return A.e2(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gn()))
return s},
zN(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.np(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)p.push(s[q]*c)
return p},
k2(a,b){var s,r,q=A.Z(t.N)
for(s=J.O(a);s.m();){r=s.gn()
if(!q.k(0,r))throw A.b(A.M("duplicate "+b+" id "+r,null,null))}},
e2(a){return A.f(A.M(a,null,null))},
ki:function ki(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
oc:function oc(){},
od:function od(a){this.a=a},
oe:function oe(a){this.a=a},
of:function of(){},
og:function og(){},
oi:function oi(){},
oj:function oj(){},
ok:function ok(){},
ol:function ol(){},
om:function om(){},
on:function on(){},
oo:function oo(){},
oh:function oh(a){this.a=a},
op:function op(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xG:function xG(){},
eb:function eb(a){this.a=a},
ed:function ed(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
oq:function oq(a){this.a=a},
or:function or(){},
ef:function ef(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ec:function ec(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ee:function ee(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xe:function xe(){},
xB:function xB(){},
ko:function ko(a,b){this.a=a
this.b=b
this.d=null},
oG:function oG(a){this.a=a},
li:function li(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
mm:function mm(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q2:function q2(){this.b=0},
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
kI:function kI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pe:function pe(){},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
q4:function q4(){},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
K4(a){var s,r,q,p,o,n,m,l
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
return new A.bV(B.ab,p,new Uint16Array(A.W(a.b)),new A.fM(new A.C(s.a,s.b,s.c),new A.C(s.d,s.e,s.f)))},
K3(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.IR(a,new A.yC(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.kJ(o,p.c,p.e))}return n},
IR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
throw A.b(A.n("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.p(d,":")?B.c.I(d,0,B.c.bB(d,":")):null
l=new A.dj(d,l,h,A.c([],p))
s.l(0,d,l)}B.a.K(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("ap<2>")
q=A.J(new A.ap(s,q),q.i("p.E"))
B.a.Y(q,new A.xt())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.v)(q),++c)r.push(q[c].oT(a))
return r},
Hp(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.kI(r,q,p,o,n,m)},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
yC:function yC(a){this.a=a},
xt:function xt(){},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl:function jl(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
f_:function f_(a,b){this.a=a
this.b=b},
kK:function kK(){},
Jm(a){var s,r,q,p=new A.q3(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.HK(p,a,B.dm[s],15.75,15.75,12.044999999999998,0.63)
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
p.ar(r,new A.a7(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ar(r,q,new A.a7(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a7(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a7(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ar(q,new A.a7(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ar(q,r,new A.a7(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.D(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ar(new A.a7(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a7(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a7(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ar(new A.a7(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a7(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a7(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a7(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a7(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ar(r,new A.a7(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ar(r,q,new A.a7(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a7(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a7(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ar(q,new A.a7(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ar(q,r,new A.a7(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.IF(p,15.75,15.75,12.044999999999998,16.32)
A.Hs(p,15.75,15.75,16.32)
A.HG(p,15.75,15.75,12.044999999999998)
A.HO(p,a,15.75)
A.IM(p,15.75,15.75)
A.Ho(p,15.75)
return p.lS()},
HK(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.ai!==b7,p=B.z!==b7,o=B.q===b7,n=B.aj===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.v)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.k(b4,new A.eF(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aQ(i),b=J.O(h.a),h=new A.V(b,h.b,h.$ti.i("V<1>"));h.m();){a=b.gn()
if(!a.Q||a.b4(i)!==b7)continue
B:{if(!p||o){a0=g+a.aM(i)
break B}if(!q||n){a0=e+a.aM(i)
break B}a0=null}B.a.k(b4,new A.eF(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.z||b7===B.q?b8:b9
r=t.i
a1=A.aN([0,s],r)
a2=A.aN([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.v)(b4),++l){a3=b4[l]
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
if(B.a.N(b4,new A.x1(b0,b1,b2,b3)))continue
switch(m){case 0:b5.D(0,b1,b3,0,b0,b2,r)
break
case 2:b5.D(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.D(0,0,b3,b1,r,b2,b0)
break
case 1:b5.D(0,s,b3,b1,b8,b2,b0)
break}}A.HN(b5,b4,b7,b8,b9,c1)
A.HL(b5,b4,b7,b8,b9,c1)
A.HM(b5,b4,b7,b8,b9,c0,c1)},
HM(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aN([0,a4===B.z||a4===B.q?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.v)(a3),++r){q=a3[r]
a1.k(0,q.a)
a1.k(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.x0(a,a0,g)))continue
switch(s){case 0:a2.D(1,a0,e,m,a,f,l)
break
case 2:a2.D(1,a0,e,k,a,f,j)
break
case 3:a2.D(1,m,e,a0,l,f,a)
break
case 1:a2.D(1,o,e,a0,n,f,a)
break}}}},
HL(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.v)(a4),++g){f=a4[g]
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
HN(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.v)(a3),++h){g=a3[h]
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
break}if(!f)A.IK(a2,g,a4,a5,a6,a7,q)}},
IK(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
IF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.D(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.D(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.D(4,i,p,-0.38,j,q,-0.44)
a.D(4,i,p,s,j,q,o)}A.IG(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.D(5,h+0.5,p,o,h-0.5,r,q)}},
IG(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a7(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a7(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ar(n,new A.a7(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ar(n,m,new A.a7(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a7(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a7(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ar(m,new A.a7(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ar(m,n,new A.a7(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Hs(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.D(0,g+0.35,k,n,g-0.35,l,q)
a.D(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.D(5,d+0.1,o,m,d-0.1,r,p)}}},
HG(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.D(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.D(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.D(6,j,b+0.06,d,k,b,e)}a.D(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
HO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
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
IM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
Ho(a,b){var s,r
a.D(0,6.7,1,-4.05,-2.5,0,-4.4)
a.D(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.D(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.D(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x1:function x1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x0:function x0(a,b,c){this.a=a
this.b=b
this.c=c},
JS(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.A2(b,d,c)
if(k!=null){s=k.b
return new A.eo(B.fS,k.a,s)}r=A.Dp(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.eo(B.fT,r.a,s)}if(A.Dq(b,d,c)!=null)return B.fX
q=A.JR(a,b,c,d)
if(q!=null)return new A.eo(B.cK,q.a,"inspect the "+q.b)
p=A.Do(b,c,d,e)
if(p!=null){o=e.bJ(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eo(B.fV,l,m?"inspect the "+o.b:"inspect "+n)}return B.fY},
Do(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.ns(a5,s,4.5)
for(q=a6.ie(a4),p=J.O(q.a),q=new A.V(p,q.b,q.$ti.i("V<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.bJ(i.c)
g=i.f.a
f=i.eI(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.k(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.gac()
a0=a3.b
a1=Math.acos(B.b.q(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.nu(a5,a4,a3.a,new A.k(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
JR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.iD(c)
if(s.length===0)return f
r=d.aH(e)
q=A.ns(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.v)(s),++l){k=s[l]
j=b.a
i=new A.k(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.gac()
j=b.b
if(Math.acos(B.b.q(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.nu(d,c,b.a,new A.k(n,m,o)))return k}return f},
dy:function dy(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
Jn(a,b){var s,r=new A.cs(new Float32Array(5376)),q=new A.cs(new Float32Array(5376)),p=new A.cs(new Float32Array(5376)),o=new A.cs(new Float32Array(5376)),n=b.d,m=a.aH(b),l=A.l_(b.y),k=A.l_(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.ey(new A.k(j,i,h),new A.k(j,i,f),new A.k(d,i,f),new A.k(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.ey(new A.k(j,i,h),new A.k(d,i,h),new A.k(d,i,f),new A.k(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.Hh(p,a,b,m,B.dm[s])
for(j=a.aQ(b.a),i=J.O(j.a),j=new A.V(i,j.b,j.$ti.i("V<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.Ca(o,b,m,h,!0)}j=B.r.aB(r.a,0,r.b)
i=B.r.aB(q.a,0,q.b)
h=B.r.aB(p.a,0,p.b)
B.r.aB(o.a,0,o.b)
return new A.ta(j,i,h)},
Jk(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cs(new Float32Array(5376))
r=a.aH(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.Cb(s,b,r,c,q)
return B.r.aB(s.a,0,s.b)},
Jl(a,b){var s,r,q,p=new A.cs(new Float32Array(5376)),o=a.aH(b)
for(s=a.aQ(b.a),r=J.O(s.a),s=new A.V(r,s.b,s.$ti.i("V<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.Ca(p,b,o,q,!1)}return B.r.aB(p.a,0,p.b)},
Hh(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.z||a4===B.q?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aQ(s),q=J.O(r.a),r=new A.V(q,r.b,r.$ti.i("V<1>"));r.m();){p=q.gn()
if(!p.as&&p.b4(s)===a4)a.push(new A.eE(p.aM(s),p.aM(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eE(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aN([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.v)(a),++o){m=a[o]
r.K(0,A.c([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.X(l)
s=A.aN([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.v)(a),++o){m=a[o]
s.K(0,A.c([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.N(a,new A.w9(f,e,d,c)))continue
A.J9(a0,a2,a3,a4,f,e,d,c)}A.Hi(a0,a2,a3,a4,b,a)},
Hi(a,b,c,d,e,f){return},
hY(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
J9(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
a.ey(s.a2(0,o),r.a2(0,o),q.a2(0,o),p.a2(0,o),A.l_(n).c,(f-e)/m,(a1-a0)/m)
l=A.Ja(b,d)
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
default:j=k}A.au(a,o,j,A.IN(A.l_(n).c,0.68))},
IN(a,b){var s,r=new A.xp(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.iZ()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.iZ()
r=r.$1(a&255)
if(typeof r!=="number")return A.xS(r)
return(q<<16|s<<8|r)>>>0},
Ja(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
Ca(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b4(d),b=a3.aM(d),a=b+a3.w
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
break}if(a4)A.Cb(a0,a1,a2,a3,q)
A.Hg(a0,a1,a2,a3)},
Hg(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aM(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.b4(d)
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
A.hY(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.q?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.hY(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.q?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.hY(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.q?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.hY(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.q,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.hY(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.hY(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.hY(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
Cb(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b4(o),m=d.aM(o)
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
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
w9:function w9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xp:function xp(a){this.a=a},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AF(a){var s=t.N
return new A.q0(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.m(s,t.z_),A.m(s,t.e),new A.q2())},
q0:function q0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.x=_.w=_.r=null
_.y=f},
qh:function qh(a){this.a=a},
ns(a,b,c){var s=a.aH(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
nu(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Ic(a,s,c,d)},
Ic(a,b,c,d){var s,r,q,p,o=a.aH(b),n=d.ab(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.wg(a,b,o,B.z,r,q,p,c,n,m))return!0
if(A.wg(a,b,o,B.q,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.wg(a,b,o,B.aj,s,r,q,c,n,m))return!0
if(A.wg(a,b,o,B.ai,s+o.a,r,q,c,n,m))return!0
return!1},
wg(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a2(0,a6.a8(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.z||a1===B.q
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aQ(m),k=J.O(l.a),l=new A.V(k,l.b,l.$ti.i("V<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.b4(m)===a1){g=q.aM(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
A2(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.ns(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.v)(r),++k){j=r[k]
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
if(Math.acos(B.b.q(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.nu(a0,a1,a.a,new A.k(h,g,i)))continue
m=d
l=j}}return l},
Dp(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.ns(b,j,4.5):4.5
for(s=b.aQ(c),r=J.O(s.a),s=new A.V(r,s.b,s.$ti.i("V<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.oc(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.Cz(l,k,a,i,0.5236)||k>=q)continue
if(!A.nu(b,c,a.a,n))continue
q=k
p=o}return p},
Dq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.ns(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.v)(r),++n){m=r[n]
l=A.Jc(b,h,m)
k=a.a
j=new A.k(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.Cz(j,i,a,s,0.5236)||i>=p)continue
if(!A.nu(b,c,a.a,l))continue
p=i
o=m}return o},
Cz(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.q(a.gac().bo(c.b),-1,1))<=e},
Jc(a,b,c){var s=a.aH(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
pd:function pd(){this.a=null
this.b=0},
u7:function u7(){},
u8:function u8(){},
F3(a){var s,r=A.jY(a,"inventory asset"),q=A.dp(r,"id"),p=A.dp(r,"kind")
A.dp(r,"source")
A.dp(r,"proxy")
A.dp(r,"pivot")
s=A.ao(r.h(0,"status"))
if(s==null)s="proxy"
r=A.jY(r.h(0,"bounds"),"inventory bounds")
return new A.d6(q,p,s,new A.qp(A.no(r.h(0,"min"),"bounds.min"),A.no(r.h(0,"max"),"bounds.max")))},
F5(a6){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.jY(a6,"inventory placement"),g=A.jY(h.h(0,"visibility"),"placement visibility"),f=A.jY(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.dx,a=h.h(0,"physics"),a0=c.b(a)?a:B.dx,a1=A.dp(h,"id"),a2=A.dp(h,"roomId"),a3=A.dp(h,"assetId"),a4=A.dp(h,"role"),a5=typeof h.h(0,"socket")=="string"?A.u(h.h(0,"socket")):null
h=A.jY(h.h(0,"transform"),"inventory transform")
s=A.no(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.f(B.hU)
r=A.no(h.h(0,"position"),"transform.position")
q=A.no(h.h(0,"rotation"),"transform.rotation")
p=A.dp(g,"layer")
if(typeof g.h(0,i)=="string")A.u(g.h(0,i))
o=J.aa(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.u(f.h(0,"focusId")):null
c=c.b(e)?A.eM(e,"radius"):0
m=b.gP(b)?0:A.eM(b,"heatOutputWatts")
l=b.gP(b)?0:A.eM(b,"surfaceTemperatureCelsius")
k=b.gP(b)?0:A.eM(b,"radiusM")
if(b.gP(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a1(b.h(0,"offsetY")):0
return new A.cJ(a1,a2,a3,a4,a5,new A.qr(r,q,s),p,o,n,c,m,l,k,j,A.F4(a0))},
F4(a){if(a.gP(a))return B.jJ
return new A.l4(A.dp(a,"bodyType"),A.eM(a,"massKg"),A.eM(a,"volumeM3"),A.eM(a,"densityKgM3"),A.eM(a,"friction"),A.eM(a,"restitution"),J.aa(a.h(0,"collision"),!0))},
jY(a,b){return t.P.b(a)?a:A.e1(b+" is not an object")},
dp(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e1(b+" is not a string")},
eM(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e1(b+" is not finite")},
no(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.N(a,new A.xA())}else s=!0
if(s)return A.e1(b+" is not a finite vec3")
s=J.aQ(a)
return new A.k(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
e1(a){return A.f(A.M(a,null,null))},
q5:function q5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q8:function q8(a){this.a=a},
q6:function q6(a){this.a=a},
q7:function q7(a){this.a=a},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a,b){this.a=a
this.b=b},
xA:function xA(){},
qq:function qq(a){this.a=a},
dK:function dK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
q9:function q9(a){this.a=a},
qa:function qa(a){this.a=a},
yS(a,b,c,d){return new A.lc(a,d,c,b)},
en:function en(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c,d,e,f,g){var _=this
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
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
fg:function fg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.x=f
_.y=g
_.z=h},
EY(a){return A.EX(a)},
EX(a){var s,r,q,p,o,n,m=A.CH(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.CH(m.h(0,"cues"),"sound emitter cues").gM(),s=s.gv(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.hN)
k.l(0,r.a,q)}s=A.zR(m,"id")
r=A.zR(m,"roomId")
p=A.zR(m,"placementId")
o=A.J7(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hN("gain is not a number")
return new A.d5(s,r,p,o,n,A.aV(k,l,l))},
CH(a,b){return t.P.b(a)?a:A.hN(b+" is not an object")},
zR(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hN(b+" is not a string")},
J7(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.N(a,new A.xz())}else s=!0
if(s)throw A.b(A.M(b+" must be a numeric vec3",null,null))
s=J.aQ(a)
return new A.k(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
hN(a){return A.f(A.M(a,null,null))},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(a){this.a=a},
qe:function qe(a){this.a=a},
qf:function qf(){},
d5:function d5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q1:function q1(){this.b=this.a=null},
f4:function f4(a,b){this.a=a
this.b=b},
qb:function qb(){this.b=this.a=null},
d4:function d4(a,b){this.a=a
this.b=b},
xz:function xz(){},
AG(a,b,c,d,e,f){var s=t.N
return new A.qg(e,f,c,a,A.aV(A.aY(d,s,s),s,s),A.ad(b,s))},
AH(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
h.l(0,p.a,new A.iJ(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.v)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.v)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l){j=o[l]
i.l(0,j.a,new A.ix(j.d,j.r))}return A.AG(a.y.b,B.n,i,B.aO,h,s)},
EZ(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.lp
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bv
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aZ(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.hK)
p=t.N
o=A.m(p,t.DL)
for(n=a.gM(),n=n.gv(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cN)
l=A.aY(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bx(j)||!A.bx(i))A.f(B.cN)
o.l(0,k,new A.iJ(j,i))}h=A.m(p,t.y)
for(n=a0.gM(),n=n.gv(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bx(l.b))throw A.b(B.hG)
h.l(0,k,A.R(l.b))}g=A.m(p,t.m2)
for(n=a1.gM(),n=n.gv(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cL)
l=A.aY(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bx(f)||!A.bx(e))A.f(B.cL)
g.l(0,k,new A.ix(f,e))}d=A.m(p,p)
for(q=s.gM(),q=q.gv(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.iJ)
d.l(0,n,A.u(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fZ)
B.a.k(c,b)}return A.AG(a2,c,g,d,o,h)},
zM(a,b){return a.a.a===b.a&&a.a3(0,b.gaC(b))},
qg:function qg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iJ:function iJ(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
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
EF(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.he(e,A.B(e).c)
q=new A.eG()
q.c0((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ie(a,q,2,r,1+s,A.aN(["time"],t.N))
break
case 3:A.ie(a,q,3,r,1+s,A.aN(["place"],t.N))
break
case 4:A.ie(a,q,4,r,2+s,p)
A.EB(a,q,4)
break
case 5:A.ie(a,q,5,r,s,p)
A.Ez(a,q,5)
break
case 6:A.ie(a,q,6,r,s,p)
A.EA(a,q)
A.EE(a,q,6)
break
case 7:A.EC(a,q,7)
break
default:if(s>0)A.ie(a,q,b,r,s,p)}},
Ey(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.ED(a,b,c))return!1
return!0},
ie(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>"));s.m();){r=s.d
if(A.Ey(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dC(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.Ay(a,b,o[p],f)}},
Ay(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aY(B.a.ga6(o).a,n,n)
if(d==null)s=A.c(B.C.slice(0),t.s)
else{n=t.vY
s=A.J(new A.I(B.C,t.Ag.a(new A.p8(d)),n),n.i("p.E"))}n=s.length
if(n===0)return
n=b.aX(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.f3(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.aX(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.eb(c.a,m,B.a.ga6(o).b)},
EB(a,b,c){var s=A.Az(a,b,c)
if(!a.cb(s))return
a.ff(c,t.G.a(s),0,B.bi,null)},
Az(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.C[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.aX(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
Ez(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dC(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aY(B.a.ga6(i).a,s,s)
r=p.c
n=A.aY(B.a.ga6(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.C[m]
k=o.h(0,l)
j=s.f3(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aX(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.eb(q.a,o,B.a.ga6(i).b)
a.eb(p.a,n,B.a.ga6(r).b)},
EA(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aX(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a7(0,q[r].a)},
EE(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aX(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.Ay(a,b,q[s],null)},
EC(a,b,c){var s=c+1,r=A.Az(a,b,s)
if(!a.cb(r))return
a.ff(s,t.G.a(r),0,B.bi,null)},
ED(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga6(b.c).c===B.aL}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga6(b.c).c===B.aL}if(c===21)return b.e
return!1},
p8:function p8(a){this.a=a},
Ga(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.C[s]
q=a.h(0,r)
p=A.aE(q==null?B.n:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.uP(n)},
qK(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.C[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.lb(A.aV(p,q,q),b,c)},
AS(a){var s=t.N
return A.qK(t.P.a(a.h(0,"fields")).bs(0,new A.qL(),s,s),A.a1(a.h(0,"shakiness")),A.EK(B.kp,A.u(a.h(0,"hand")),t.qX))},
EJ(a){var s,r,q,p,o=a.h(0,"margin"),n=A.h(a.h(0,"ordinal")),m=A.h(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.AS(r.a(s.gn())))
s=A.ao(a.h(0,"corroborator"))
q=A.R(a.h(0,"locked"))
p=A.zi(a.h(0,"lastReadDay"))
return new A.c4(n,m,l,s,q,p,o==null?null:A.AS(r.a(o)))},
ep:function ep(a,b){this.a=a
this.b=b},
uP:function uP(a){this.a=a},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(){},
qM:function qM(a){this.a=a},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AP(a){return new A.qv(a,A.m(t.S,t.g),A.Z(t.N),A.c([],t.t))},
Fa(a,b){var s,r,q,p,o=A.AP(a)
o.e=A.h(b.h(0,"nextOrdinal"))
o.f=A.h(b.h(0,"locksRemaining"))
s=t.j
o.c.K(0,J.E_(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.EJ(r.a(s.gn()))
q.l(0,p.a,p)}return o},
qv:function qv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
qC:function qC(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
os:function os(){},
Fr(a){var s,r,q,p,o,n,m,l,k=B.f.ai(a,null),j=t.f
if(!j.b(k)||!J.aa(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.h3)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.im)
r=A.c([],t.d8)
for(q=J.O(s);q.m();){p=q.gn()
if(j.b(p)){o=A.ao(p.h(0,"assetId"))
if(o==null)o=""
n=A.ao(p.h(0,"licenseId"))
if(n==null)n=""
m=A.ao(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.ao(p.h(0,"sourceFormat"))
r.push(new A.iL(o,n,m,l==null?"":l))}else r.push(A.f(B.hZ))}return new A.rJ(A.Fs(r))},
Fs(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
p=A.iP("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("promoted model index ID is invalid: "+o,n,n))
if(k.L(o))throw A.b(A.M("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aZ(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.M("promoted model index rights are unknown: "+o,n,n))
if(!A.aN(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.b(A.M("promoted model index source format is invalid: "+o,n,n))
if(!A.IJ(q.c))throw A.b(A.M("promoted model index manifest path is unsafe: "+o,n,n))
k.l(0,o,q)}return A.aV(k,m,l)},
IJ(a){if(a.length===0||B.c.U(a,"/")||B.c.p(a,"://"))return!1
if(B.c.bp(a.toLowerCase(),".obj")||B.c.bp(a.toLowerCase(),".mtl")||B.c.bp(a.toLowerCase(),".fbx"))return!1
return B.a.a3(A.c(a.split("/"),t.s),new A.xo())},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rJ:function rJ(a){this.a=a},
xo:function xo(){},
B2(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.m(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
p=A.iP("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("asset ID is not stable kebab-case: "+o,j,j))
if(g.L(o))throw A.b(A.M("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.b(A.M("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aZ(m).length===0||m==="unknown"||m==="unlicensed")throw A.b(A.M("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.b(A.M("package is not approved: "+o,j,j))
l=A.Du(n)
if(l.length!==0)throw A.b(A.M("package manifest is invalid for "+o+": "+B.a.br(l,new A.rL(),i).W(0,"; "),j,j))
p=p.b
k=A.K6(n,p)
if(k.length!==0)throw A.b(A.M("package payloads are invalid for "+o+": "+B.a.br(k,new A.rM(),i).W(0,"; "),j,j))
if(A.AZ(n,p)!==n.c)throw A.b(A.M("package hash mismatch: "+o,j,j))
g.l(0,o,q)}return A.aV(g,i,h)},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
lA:function lA(a){this.a=a},
rL:function rL(){},
rM:function rM(){},
rD:function rD(){},
rC:function rC(a,b,c){this.b=a
this.c=b
this.d=c},
rE:function rE(){},
Fp(a,b,c){return B.mw},
lt:function lt(a,b){this.a=a
this.b=b},
rF:function rF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rG:function rG(){},
rH:function rH(a){this.d=a},
hk:function hk(){},
rI:function rI(a){this.a=a},
rK:function rK(){},
rN:function rN(a,b){this.a=a
this.b=b},
rO:function rO(){},
rP:function rP(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rW:function rW(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
Bc(a){if(!isFinite(0))A.f(A.a6(0,"interpolation",null))
return new A.t8(a)},
lH:function lH(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
t8:function t8(a){this.a=a},
lI:function lI(a,b,c){this.a=a
this.b=b
this.c=c},
Ba(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.he(c,A.B(c).c)
r=A.J(r,A.t(r).c)
B.a.X(r)
s=t.N
r=A.ad(r,s)
r=new A.t7(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aV(l,s,t.X))
r.jy(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Bb(a,b,c,d){var s=A.nh("RENDERER_SHA"),r=A.nh("GAME_SHA"),q=A.nh("DART_SDK_VERSION")
return A.Ba(a,"a83372355ef8-d437f9186a89-dirty",b,!1,null,r,A.nh("LOCKFILE_SHA256"),d,A.nh("PROJECT_VERSION"),s,q,null)},
nh(a){var s=B.lh.h(0,a)
return s.length===0?null:s},
t7:function t7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
t9:function t9(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
tX:function tX(a){this.a=a},
tY:function tY(){},
a0(a,b,c,d,e,f,g,h,i,j){return new A.cr(e,g,a,f,i,h,j,c,c,b,B.e6)},
Bi(){var s=new A.tZ(B.as)
s.w=t.yu.a(A.c([A.a0(B.Y,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a0(B.Y,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a0(B.Y,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a0(B.Y,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a0(B.Y,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a0(B.aa,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a0(B.aa,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a0(B.aa,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a0(B.aa,!0,1,"Weather-aware shadow filter hardness (higher is sharper)","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a0(B.aa,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a0(B.at,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a0(B.at,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a0(B.at,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a0(B.at,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a0(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a0(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a0(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a0(B.l,!0,1,"Scale for the start/end distance of atmospheric extinction","fog_distance_scale",!1,"Fog Distance Reach",2,0.25,0.05),A.a0(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a0(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a0(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a0(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a0(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a0(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a0(B.l,!0,12,"Raymarch samples per pixel (4=preview, 24=clean)","volumetric_precision",!1,"Volumetric Sample Rate",24,4,1),A.a0(B.l,!0,0.02,"Near-field particulate density that gives light shafts visible body","volumetric_dust_density",!1,"Suspended Dust Density",0.25,0,0.005),A.a0(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a0(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a0(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a0(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a0(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a0(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a0(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a0(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a0(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a0(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a0(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a0(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a0(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a0(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a0(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a0(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a0(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a0(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a0(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a0(B.Y,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.a0(B.P,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.a0(B.P,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.a0(B.P,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.a0(B.P,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.a0(B.P,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.a0(B.P,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.a0(B.P,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05)],t.hT))
return s},
bY:function bY(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
tZ:function tZ(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
u5:function u5(a){this.a=a},
u_:function u_(){},
u0:function u0(){},
u6:function u6(){},
u3:function u3(a){this.a=a},
u4:function u4(a){this.a=a},
u2:function u2(a){this.a=a},
u1:function u1(a){this.a=a},
FX(a){var s,r,q,p,o,n=B.b.q(a,7,17),m=new A.ud()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.cv()
if(o<n)s=p
else r=p}return(s+r)*0.5},
Bm(a){var s
if(!isFinite(a))throw A.b(A.a6(a,"horizonVisibility01",null))
s=B.b.q(a,0,1)
return s*s*(3-2*s)},
ud:function ud(){},
Av(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.f(A.M("saved day-loop resources must not be negative",null,null))
return new A.p1(c,g,b,a,e,d===!0,s)},
Es(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.hq)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.hL)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aZ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.hj)
f=A.bK(new A.I(B.dd,q.a(new A.p2(h)),p),o)
e=A.bK(new A.I(B.db,n.a(new A.p3(g)),m),l)
if(f==null||e==null)throw A.b(B.iy)
B.a.k(s,new A.ht(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aZ(d)||!A.aZ(c)||!A.aZ(b)||!A.bx(a))throw A.b(B.hW)
return A.Av(c,d,a1,a,b,s,a3)},
bZ:function bZ(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
p1:function p1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
p2:function p2(a){this.a=a},
p3:function p3(a){this.a=a},
l2:function l2(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
v8:function v8(a,b){this.b=a
this.c=b},
ft:function ft(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
qi:function qi(a){this.c=a},
qm:function qm(a,b,c){this.a=a
this.b=b
this.d=c},
qn:function qn(){},
zw(a){var s,r,q,p=A.c([],t.s),o=A.Z(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.b(B.iv)
B.a.k(p,q)}return p},
cq:function cq(a,b){this.a=a
this.b=b},
tb:function tb(){},
dc:function dc(){},
tc:function tc(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
kS:function kS(a,b,c){this.a=a
this.b=b
this.c=c},
HT(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.x2(s,a).$0())
return r},
nl(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
ew:function ew(a,b){this.a=a
this.b=b},
fq:function fq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
v0:function v0(a){this.b=a},
x2:function x2(a,b){this.a=a
this.b=b},
jT(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
BC(a){var s
switch(a.a){case 0:s=B.pg
break
case 1:s=B.pf
break
case 2:s=B.pi
break
case 3:s=B.pe
break
case 4:s=B.ph
break
default:s=null}return s},
BB(a,b){return new A.mh(!1,0,0)},
Gd(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.jT(f)||!A.jT(a)||!A.jT(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.b(A.n("weather impact inputs must be finite and valid",j))
if(b===B.x)return A.BB(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.A()
m=A.Gc(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.BB(a,g)
f.a2(0,a.ab(0,f).a8(0,p))
l=g.bo(g)
A:{if(B.aP===b||B.an===b){s=B.pc
break A}if(B.ao===b){s=q.d>0.5?B.pd:B.cc
break A}if(B.a6===b){s=l>1?B.eu:B.cc
break A}if(B.x===b){s=B.pb
break A}s=j}if(s===B.eu){k=q.e
g.ab(0,r.a8(0,2*g.bo(r))).a8(0,k)}s=s===B.cc?d:0
return new A.mh(!0,0.5*d*l,s)},
Gc(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.ab(0,new A.k(a2,a2,a2)),d=a1.c.a2(0,new A.k(a2,a2,a2)),c=a0.ab(0,a),b=new A.k(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.uZ(a,o)
m=A.uZ(c,o)
l=A.uZ(e,o)
k=A.uZ(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.Bz(o,m>0)
if(j>i){h=A.Bz(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.BA(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.BA(c)}if(r>1)return f
return new A.a8(r,b)},
uZ(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
Bz(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.k(r,0,0)
break A}if(1===a){s=new A.k(0,r,0)
break A}s=new A.k(0,0,r)
break A}return s},
BA(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.k(0,q>0?-1:1,0)
if(r>=n)return new A.k(s>0?-1:1,0,0)
return new A.k(0,0,o>0?-1:1)},
BD(a,b,c){var s=new A.hB(b,c,a)
s.hh()
return s},
BE(a,b,c){return A.BD(a,b,c)},
Gh(a){var s,r,q
if(!t.f.b(a))throw A.b(B.io)
s=new A.v1(a)
r=s.$1("snowDepthM")
q=s.$1("waterFilmDepthM")
return A.BD(s.$1("materialDissolution01"),r,q)},
z4(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
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
if(h===B.x&&l.b)h=B.aP
g=A.Ge(h,B.b.q(l.c,0,1))*k
f=A.Gf(h)
e=h===B.ao?g/120:0
d=h===B.x?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.q(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.v_(h,new A.k(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
Gg(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.jT(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.b(A.n("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.f(A.n("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.f(A.n("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.k(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.q((e-b)/Math.max(1,s),0,1)
return new A.uR(m,e,l,d,e>b)},
Ge(a,b){var s
if(a===B.x)return 0
s=0.00005+b*0.00045
return a===B.a6?s*0.75:s},
Gf(a){var s
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
j8:function j8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uR:function uR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v_:function v_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fr:function fr(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fp:function fp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eC:function eC(a,b){this.a=a
this.b=b},
mh:function mh(a,b,c){this.a=a
this.f=b
this.r=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
v1:function v1(a){this.a=a},
v2:function v2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Ji(a){var s
A:{if("broadcast"===a){s=B.eI
break A}if("visitor"===a){s=B.eJ
break A}if("aftermath"===a){s=B.eK
break A}if("ending"===a){s=B.eL
break A}s=A.f(A.M("screenplay event has no consumer: "+a,null,null))}return s},
ER(a){var s=A.J(a.c,t.z)
B.a.Y(s,new A.pw())
s=new A.pv(A.ad(s,t.Dm))
s.oP()
return s},
EQ(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.kQ(a,c,A.f6(B.n,t.N))
s=t.N
r=J.Al(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.kQ(a,c,A.f6(new A.I(r,q.i("l(p.E)").a(new A.pu(a)),q.i("I<p.E>")),s))},
eV:function eV(a,b){this.a=a
this.b=b},
pv:function pv(a){this.a=a},
pw:function pw(){},
kQ:function kQ(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a){this.a=a},
rh(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.K(0,a)
s=A.m(r,r)
if(b!=null)s.K(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.K(0,c)
return new A.rg(q,s,r)},
Fj(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aZ(s)||s!==1)return l
r=A.B0(a.h(0,"choices"))
q=A.B0(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gM(),k=k.gv(k);k.m();){n=k.gn()
m=A.EO(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.l(0,n,m)}return A.rh(r,q,p)},
B0(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gM(),s=s.gv(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.l(0,p,A.u(q.b))}return r},
EO(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aZ(r)||r<1||!A.aZ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.d_(s,r,q,p)},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(){},
rj:function rj(){},
rk:function rk(){},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Fo(a,b){var s,r,q,p=A.c([],t.xz)
for(s=J.O(a);s.m();){r=s.gn()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bC("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.rA(b,p)},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
hv(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gM(),s=s.gv(s);s.m();){r=s.gn()
q.l(0,B.d.t(r.a),r.b)}return q},
ug:function ug(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
uh:function uh(){},
ui:function ui(){},
fo:function fo(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b){this.a=a
this.b=b},
mf:function mf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.ai(a,g)
if(!t.f.b(f))throw A.b(B.ii)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bv
if(J.aa(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.ie)
p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.FP(o.gn()))
o=A.c([],t.tS)
for(n=J.O(q);n.m();)o.push(A.FO(n.gn()))
n=t.N
m=A.Z(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.v)(p),++k){j=p[k].a
if(!m.k(0,j))throw A.b(A.M("duplicate screenplay scene: "+j,g,g))}i=A.Z(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.v)(o),++k){n=o[k].a
if(!i.k(0,n))throw A.b(A.M("duplicate screenplay event: "+n,g,g))}p=A.c([],t.s)
for(n=J.O(s);n.m();){h=n.gn()
if(typeof h!="string"||h.length===0)A.f(A.M("source must be a non-empty string",g,g))
p.push(h)}return new A.uf(o)},
FO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.u(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.u(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.u(a.h(0,f)).length===0)throw A.b(B.hD)
s=a.h(0,"effects")
if(s==null)s=B.bv
if(!t.j.b(s)||J.k6(s,new A.ti()))throw A.b(B.il)
r=B.b.aF(A.a1(a.h(0,"day")))
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
l=new A.tj(a)
m=A.u(a.h(0,"id"))
k=A.u(a.h(0,g))
j=A.u(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.O(s);h.m();)i.push(A.u(h.gn()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.hr(m,k,r,q,j,A.ad(i,t.N),n,h)},
FP(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.ho)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.aF(r)!==r)throw A.b(B.hS)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.M("screenplay scene "+s+" has invalid arrays",null,null))
m=B.b.aF(r)
l=A.c([],t.s)
for(k=J.O(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.f(B.i5)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.f(B.iD)
A.u(j.h(0,"kind"))
A.u(j.h(0,"text"))
A.ao(j.h(0,"speaker"))
l.push(new A.lM())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.FN(l.gn()))
return new A.lP(s,m)},
FN(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.hw)
s=A.u(a.h(0,m))
A.u(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.f(B.ib)
o=A.u(p.h(0,m))
n=A.u(p.h(0,"label"))
A.u(p.h(0,"next"))
r.push(new A.lO(o,n))}return new A.lN(s)},
uf:function uf(a){this.c=a},
hr:function hr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
ti:function ti(){},
tj:function tj(a){this.a=a},
lP:function lP(a,b){this.a=a
this.b=b},
lM:function lM(){},
lN:function lN(a){this.a=a},
lO:function lO(a,b){this.a=a
this.b=b},
uj:function uj(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
uk:function uk(){},
ul:function ul(){},
k8:function k8(a){this.a=a},
yJ:function yJ(a,b,c){this.b=a
this.e=b
this.f=c},
E4(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.h2)
s=new A.nB()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.zj(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.e8(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b5(B.by,new A.nz(a),new A.nA()))},
cY:function cY(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
nB:function nB(){},
nz:function nz(a){this.a=a},
nA:function nA(){},
nM:function nM(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
nO:function nO(a){this.a=a},
nN:function nN(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
Ea(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hT)
s=new A.o1()
return new A.ea(s.$1$2(B.bw,a.h(0,"output"),t.xs),s.$1$2(B.bq,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bp,a.h(0,"reverb"),t.gc),s.$1$2(B.bn,a.h(0,"ducking"),t.ul))},
cG:function cG(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
o1:function o1(){},
o2:function o2(a,b){this.a=a
this.b=b},
o3:function o3(a){this.a=a},
ou:function ou(a){this.a=a
this.b=null},
oy(a,b,c){var s
b.A()
if(c<1||c>6)throw A.b(A.a6(c,"level","must be between 1 and 6"))
s=A.F(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.ow(s,b)
return s},
ej(a,b,c,d){var s,r,q
b.A()
s=b.e
r=d==null?b.c:d
q=A.F(a,"button","brush-button brush-state-"+s.b,r)
A.ow(q,b)
q.type="button"
q.disabled=s===B.aE
q.addEventListener("click",A.Y(new A.ox(c)))
return q},
Ef(a,b,c,d){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aE
A.ow(s,b)
s.addEventListener("change",A.Y(new A.oB(d,s)))
return s},
Ee(a,b,c,d,e,f){var s,r
b.A()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aE
A.ow(s,b)
s.addEventListener("input",A.Y(new A.oA(s,e)))
return s},
yL(a,b){var s=B.c.je(A.u(a.className),A.iP("\\s+")),r=A.B(s),q=r.i("I<1>"),p=A.J(new A.I(s,r.i("l(1)").a(new A.oz()),q),q.i("p.E"))
s=b.b
B.a.k(p,"brush-state-"+s)
a.className=B.a.W(p," ")
a.setAttribute("data-brush-state",s)},
ow(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.glz())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aE)a.setAttribute("aria-disabled","true")},
ox:function ox(a){this.a=a},
oB:function oB(a,b){this.a=a
this.b=b},
oA:function oA(a,b){this.a=a
this.b=b},
oz:function oz(){},
eh:function eh(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oD:function oD(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
oE:function oE(a){this.a=a},
At(a){var s=!1
if(a.length!==0)if(!B.e1.p(0,a))s=B.nx.p(0,a)||B.nn.p(0,a)||B.nw.p(0,a)||!B.c.U(a,"Mouse")
return s},
HC(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.N(a,A.t(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aE(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return n},
Ii(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.N(a,A.t(a).i("N<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.l(0,r.a,A.c([r.b],s))}return q},
fZ(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.hd(B.le,s,r)
if(b!=null)q.K(0,b)
q.K(0,A.Ii(a))
s=new A.fY(g,d,h,e,f,c,A.aV(A.HC(q),s,r))
s.A()
return s},
Ep(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cM)
s=a.h(0,"version")
r=J.eQ(s)
if(!r.aa(s,1)&&!r.aa(s,2))throw A.b(B.cM)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gM(),j=j.gv(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.hE)
if(typeof m=="string")q.l(0,n,A.c([m],r))
else if(p.b(m)&&J.E0(m,new A.oR())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.u(l.gn()))
q.l(0,n,o)}else throw A.b(B.ha)}j=A.a1(a.h(0,"horizontalSensitivity"))
r=A.a1(a.h(0,"verticalSensitivity"))
p=A.R(a.h(0,"invertX"))
o=A.R(a.h(0,"invertY"))
return A.fZ(null,q,A.R(a.h(0,"holdToInteract")),j,p,o,2,r)},
zl(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gM(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.l(0,q,r)}return o},
zH(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
zW(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oT:function oT(){},
oS:function oS(a){this.a=a},
oU:function oU(){},
oV:function oV(){},
oW:function oW(){},
oR:function oR(){},
eg:function eg(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.c=b},
kt:function kt(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Eo(a){var s=t.N,r=t.m
r=new A.ic(A.fZ(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.b_(a)
r.jr(a)
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
oP:function oP(a,b){this.a=a
this.b=b},
oQ:function oQ(a){this.a=a},
oO:function oO(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(a,b){this.a=a
this.b=b},
Eq(a){var s=new A.oX(a,A.a(a.createElement("div")))
s.b_(a)
s.js(a)
return s},
oX:function oX(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
oY:function oY(a){this.a=a},
Ew(a){var s=new A.p4(A.F(a,"div","door",null))
s.ju(a)
return s},
Aw(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.W(s,"; ")+"."},
p4:function p4(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
p5:function p5(a){this.a=a},
p6:function p6(a,b){this.a=a
this.b=b},
p7:function p7(a,b){this.a=a
this.b=b},
EG(a){var s=new A.pa(a,A.a(a.createElement("div")))
s.b_(a)
s.jv(a)
return s},
pa:function pa(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pb:function pb(a){this.a=a},
pE:function pE(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
pF:function pF(){},
ES(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.pG(a.b===B.cT,a.c===B.cX,s,a.e===B.cU,a.f===B.cR,a.r===B.cZ,a.w,a.x)},
pG:function pG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
yM(a,b,c,d,e,f,g,h,i,j,k){return new A.h5(e,g,k,f,b,h,d,c,a,i,j)},
ET(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.i8)
s=new A.pH(a)
r=a.h(0,"contextualReminders")
if(!A.bx(r))throw A.b(B.iw)
q=!A.bx(a.h(0,i))||A.R(a.h(0,i))
p=s.$1$2("interactionMode",B.bx,t.bK)
o=s.$1$2("promptDensity",B.bA,t.dn)
n=s.$1$2("textPacing",B.bz,t.j_)
m=s.$1$2("journalLayout",B.br,t.gm)
l=s.$1$2("confirmations",B.bl,t.aJ)
k=s.$1$2("saveFeedback",B.bs,t.mx)
j=s.$1$2("focusLossBehavior",B.aN,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bo,t.vS):B.b9
return A.yM(s,l,r,j,p,m,o,k,q,A.bx(a.h(0,g))&&A.R(a.h(0,g)),n)},
dC:function dC(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
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
pH:function pH(a){this.a=a},
pI:function pI(a,b){this.a=a
this.b=b},
pJ:function pJ(a){this.a=a},
AE(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.hQ)
s=B.a.b5(B.df,new A.pV(a),new A.pW())
r=A.u(a.h(0,"renderScale"))
q=A.R(a.h(0,"dynamicResolution"))
p=A.u(a.h(0,"frameTarget"))
o=A.u(a.h(0,"antialiasing"))
n=A.u(a.h(0,"textureQuality"))
m=A.ao(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.ao(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.ao(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.Ci(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dG(1,s,r,q,p,o,n,m,l,k,j===!0)
i.A()
return i},
h8(a,b){var s=b==null?B.bh:b
return new A.pX(s,a==null?B.bh:a)},
Dk(a,b){var s,r,q
a.A()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.e9(b.a>=2?"msaa2":"off")
B.a.k(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.e9("off")
B.a.k(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hy(!1)
B.a.k(s,"dynamic resolution timing is unavailable")}if(q.b===B.bf&&b.a<2){q=q.hz(B.bg)
B.a.k(s,"High preset was reduced to Standard")}return new A.pO(q,A.ad(s,t.N))},
cH:function cH(a,b){this.a=a
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
pV:function pV(a){this.a=a},
pW:function pW(){},
pX:function pX(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
pO:function pO(a,b){this.a=a
this.b=b},
EV(a){var s=new A.ip(A.m(t.N,t.m),B.bh,a,A.a(a.createElement("div")))
s.b_(a)
s.jw(a)
return s},
ip:function ip(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.Q=_.z=_.y=null
_.as=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
pR:function pR(a){this.a=a},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
pQ:function pQ(a,b,c){this.a=a
this.b=b
this.c=c},
pP:function pP(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(){this.c=0},
EW(a){var s=new A.pZ(a,A.a(a.createElement("div")))
s.b_(a)
s.jx(a)
return s},
pZ:function pZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
q_:function q_(a){this.a=a},
qw:function qw(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
qx:function qx(a){this.a=a},
qy:function qy(a){this.a=a},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(){},
qB:function qB(){},
K1(a,b,c){if(!isFinite(c)||!isFinite(b)||b<=c)throw A.b(A.n("temperature gauge range must be finite and ordered",null))
if(!isFinite(a))return 0.5
return B.b.q((a-c)/(b-c),0,1)},
da:function da(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rp:function rp(a,b,c,d,e,f,g){var _=this
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
Cr(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.W)
for(s=t.m,r=0;r<A.h(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
iI:function iI(){},
bB:function bB(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
rv:function rv(){},
rw:function rw(){},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
ru:function ru(a){this.a=a},
rx:function rx(a){this.a=a},
cP:function cP(a,b){this.a=a
this.b=b},
ry:function ry(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rz:function rz(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
rU:function rU(a){this.a=a
this.b=null},
FQ(a){var s=new A.tl(a,A.a(a.createElement("div")))
s.b_(a)
s.jz(a)
return s},
tl:function tl(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tm:function tm(a,b){this.a=a
this.b=b},
tn:function tn(a){this.a=a},
lQ(a,b){var s=t.N,r=t.m
r=new A.hs(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.yG(),B.aA,A.m(s,r),A.m(s,r),B.b1,A.m(s,r),a,A.a(a.createElement("div")))
r.b_(a)
r.jA(a,b)
return r},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
tM:function tM(a){this.a=a},
tN:function tN(a){this.a=a},
tO:function tO(a,b){this.a=a
this.b=b},
tP:function tP(a){this.a=a},
tQ:function tQ(a){this.a=a},
tE:function tE(a,b){this.a=a
this.b=b},
tF:function tF(a,b){this.a=a
this.b=b},
tD:function tD(a){this.a=a},
tG:function tG(a){this.a=a},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tH:function tH(a,b){this.a=a
this.b=b},
tI:function tI(a,b){this.a=a
this.b=b},
tJ:function tJ(a,b){this.a=a
this.b=b},
tC:function tC(a,b,c){this.a=a
this.b=b
this.c=c},
tu:function tu(a){this.a=a},
tv:function tv(a){this.a=a},
tw:function tw(a){this.a=a},
tx:function tx(a){this.a=a},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
tA:function tA(a){this.a=a},
tB:function tB(a){this.a=a},
tt:function tt(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(a){this.a=a},
tq:function tq(a){this.a=a},
tr:function tr(a){this.a=a},
ts:function ts(a){this.a=a},
tL:function tL(a,b,c){this.a=a
this.b=b
this.c=c},
tK:function tK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tS(a){return B.a.b5(B.E,new A.tT(a),new A.tU(a))},
FR(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
q.l(0,r.a,r.e)}return q},
dQ(a,b){var s=t.z
s=A.hd(A.FR(),s,s)
if(a!=null)s.K(0,a)
s=new A.tR(b,A.aV(s,t.N,t.K))
s.jB(a,b)
return s},
Bh(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.is)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.hp)
return A.dQ(A.aY(s,t.N,t.K),A.h(a.h(0,"version")))},
bN:function bN(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
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
tT:function tT(a){this.a=a},
tU:function tU(a){this.a=a},
tR:function tR(a,b){this.a=a
this.b=b},
z0(a,b){var s=b==null?A.dQ(null,1):b
return new A.tV(s,a==null?A.dQ(null,1):a)},
FS(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.E[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fb(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dt(r)
J.b6(l,s.a,r)}catch(n){if(!(A.ah(n) instanceof A.A))throw n}}m=A.dQ(l,1)
return A.z0(m,m)},
tV:function tV(a,b){this.a=a
this.b=b},
FV(a){var s=new A.u9(A.m(t.u5,t.nx),a,A.a(a.createElement("div")))
s.b_(a)
s.jC(a)
return s},
u9:function u9(a,b,c){var _=this
_.f=null
_.r=a
_.w=$
_.a=b
_.b=c
_.e=_.d=_.c=null},
ua:function ua(){},
ub:function ub(a,b,c){this.a=a
this.b=b
this.c=c},
E7(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gM(),n=n.gv(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.cE(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.nK())
return new A.nJ(A.ad(i,t.bC),A.Z(t.N))},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nJ:function nJ(a,b){this.a=a
this.b=b},
nL:function nL(){},
nK:function nK(){},
G9(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.pa
s=t.T
r=A.m(s,t.q1)
q=A.t(a).i("ac<1>")
p=A.J(new A.ac(a,q),q.i("p.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.v)(p),++l){k=p[l]
for(j=a.h(0,k).gM(),j=j.gv(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bv(new A.bF(B.oT,k+" has an out-of-range authored day "+h+"."))
g=A.G8(k,h,i.b,m)
if(g instanceof A.bv)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.l(0,new A.c1(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ae(o,o.r,o.e,A.t(o).i("ae<2>"));o.m();){n=o.d
J.e6(e.bT(n.b,new A.uJ()),n)}o=A.aV(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.N(e,e.$ti.i("N<1,2>")).gv(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aE(d.b,!1,m)
c.$flags=3
q.l(0,j,c)}return new A.md(new A.mc(r,A.Z(a),A.Z(s),o,q,A.c([],t.Dc),B.a8,A.rh(b,b,b)))},
G8(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.da[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gM(),k=k.gv(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.c.U(h,m))continue
g=A.dL(B.c.aO(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bv(new A.bF(B.oU,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dj
B.a.k(l,new A.ce(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.uG())
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
uM:function uM(a){this.a=a},
uL:function uL(a){this.a=a},
uN:function uN(a){this.a=a},
uH:function uH(a){this.a=a},
uI:function uI(){},
uK:function uK(a){this.a=a},
uJ:function uJ(){},
uF:function uF(a){this.a=a},
uE:function uE(a){this.a=a},
uG:function uG(){},
md:function md(a){this.a=a},
mK:function mK(a){this.a=a},
Jz(a){var s,r,q,p=A.Z(t.N)
for(s=new A.N(a,A.t(a).i("N<1,2>")).gv(0);s.m();){r=s.d
for(q=r.b.gak(),q=q.gv(q);q.m();)if(q.gn().ga5().N(0,new A.xO())){p.k(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.X(s)
return s},
Jy(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.aE(b,!0,s)
B.a.X(r)
q=new A.eG()
q.c0((a^913741)>>>0)
p=q.aX(4)
if(!(p>=0&&p<4))return A.d(B.d9,p)
o=B.d9[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.aE(r,!0,s)
B.a.dC(m,q)
s=A.hw(m,0,A.e5(n,"count",t.S),A.B(m).c).bD(0)
B.a.X(s)
return s},
xO:function xO(){},
Bx(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aZ(r)||!A.aZ(q)||!A.aZ(p)||r<1||q<0||q>23||p<0)return null
return new A.c1(s,r,q,p)},
G7(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.Z(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.k(0,p)}o=A.Z(t.T)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.Bx(s.gn())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.E6(m)
if(!s&&l==null)return i
return new A.me(r,o,l)},
E6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.Bx(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aZ(p))if(!(p<0))if(A.bx(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bK(new A.I(B.da,t.u_.a(new A.nG(r)),t.ni),t.hF)
j=A.bK(new A.I(B.l7,t.da.a(new A.nH(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bK(new A.I(B.k_,t.kr.a(new A.nI(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.ka(s,k,j,p,i,n,A.ao(m))},
bT:function bT(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dh:function dh(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
uD:function uD(){},
ka:function ka(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nG:function nG(a){this.a=a},
nH:function nH(a){this.a=a},
nI:function nI(a){this.a=a},
mb:function mb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
uO:function uO(){},
bv:function bv(a){this.a=a},
ma:function ma(a){this.a=a},
m8:function m8(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
wG(){var s=0,r=A.aK(t.H),q=1,p=[],o,n,m,l
var $async$wG=A.aL(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a5(A.av(A.a(A.a(A.a(A.a(v.G.window).navigator).clipboard).writeText(B.f.a0($.c2().eK(),null))),t.X),$async$wG)
case 6:$.o.j().setAttribute("data-renderer-shader-lab-clipboard","copied")
$.o.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
l=p.pop()
o=A.ah(l)
m=$.o.j()
m.setAttribute("data-renderer-shader-lab-clipboard","copy-failed")
$.o.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.y(o))
s=5
break
case 2:s=1
break
case 5:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$wG,r)},
x3(){var s=0,r=A.aK(t.H),q=1,p=[],o,n,m,l,k,j
var $async$x3=A.aL(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a5(A.av(A.a(A.a(A.a(A.a(v.G.window).navigator).clipboard).readText()),t.N),$async$x3)
case 6:o=b
n=o
$.c2().nk(n)
$.o.j().setAttribute("data-renderer-shader-lab-clipboard","imported")
$.o.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
j=p.pop()
m=A.ah(j)
k=$.o.j()
k.setAttribute("data-renderer-shader-lab-clipboard","import-failed")
$.o.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.y(m))
s=5
break
case 2:s=1
break
case 5:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$x3,r)},
Iy(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.k3())return f
n=A.dU().gaY()
m=n.h(0,"captureSeed")
l=A.dL(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dL(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fb(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.ai(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gM(),m=m.gv(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.no.p(0,o.b))return f
J.b6(p,A.u(o.a),A.u(o.b))}r=p}else return f}catch(g){if(A.ah(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.nv.p(0,i))return f
if(h!=null&&!B.ns.p(0,h))return f
return new A.ve(l,k,j,h,r)},
Iz(){var s,r,q,p=A.dU().gaY().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fn
break A}if("intimate"===p){s=B.fp
break A}s=B.fo
break A}r=A.dU().gaY().h(0,"cameraFov")
q=A.fb(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fR(B.b.q(q,35,100)*3.141592653589793/180,s.b,s.c)},
hU(a){var s=$.bl
if(s===a&&B.c.p(A.u(a.b.className),"open"))return
if(s!=null)s.ah()
$.bl=a
if(a===$.fE.j())$.fE.j().iL($.ag===$.S.j().r)
if(a===$.cy.j())$.i3().i9("gameplay.viewport")
else $.i3().o8(A.CI(a))
s=$.am.j()
s.ay=!1
s.b0()
$.eL=0
a.bS()},
zC(a,b,c){var s,r,q
$.jZ=!0
s=$.bl
if(s!=null)s.ah()
$.bl=a
s=$.i3()
if(s.a.a.length===0)s.i9(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dJ(b,B.a2,c))
q=s.a
s.a=new A.eu(r,q.b,q.c)
s.kb(b)
s=$.am.j()
s.ay=!1
s.b0()
$.eL=0
a.bS()
$.jZ=!1},
e4(a){var s,r,q,p,o,n,m,l=null
if($.jZ)return
$.jZ=!0
a.ah()
$.bl=null
s=$.i3().lM()
$.jZ=!1
r=s.a
if(r===B.dN){$.eL=0
r=$.am.j()
r.b0()
r.ay=!0
q=A.G(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dM)return
r=s.c.a
r=r.length===0?l:B.a.ga6(r)
p=r==null?l:r.a
A:{if(B.bG===p){r=$.cy.j()
break A}if(B.dC===p){r=$.hM.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bl=r
n=$.am.j()
n.ay=!1
n.b0()
$.eL=0
r.bS()
m=o==null?l:A.G(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
k1(a){if($.bl===a&&B.c.p(A.u(a.b.className),"open"))a.ah()
else A.hU(a)},
hV(a){var s
if($.jZ)return
if($.bl===a)$.bl=null
if(a===$.cy.j())$.i3().cr()
else $.i3().mO(A.CI(a))
$.eL=0
s=$.am.j()
s.b0()
s.ay=!0},
CI(a){if(a===$.cy.j())return B.dD
if(a===$.hM.j())return B.a2
if(a instanceof A.hs)return B.a2
if(a instanceof A.ip)return B.a2
if(a instanceof A.ic)return B.a2
if(a===$.jP.j())return B.mg
if(a===$.fE.j())return B.mh
if(a===$.jO.j())return B.mi
if(a===$.nb.j())return B.a2
if(a===$.jM.j())return B.mk
return B.mj},
ng(a,b){var s
a.snX(new A.wp())
a.so_(new A.wq())
a.snZ(new A.wr())
a.snT(new A.wx())
a.snW(new A.wy())
a.so7(new A.wz())
a.so2(new A.wA())
a.so1(new A.wB())
a.sbf(b?new A.wC(a):new A.wD(a))
a.sb7(b?new A.wE(a):new A.ws(a))
s=a.f
if(s===B.L)a.snK(new A.wt())
if(s===B.a4)a.snU(new A.wu())
if(s===B.M){a.snJ(new A.wv())
a.so0(new A.ww())}},
Hz(){var s=new A.wl(),r=$.eJ.j()
r.sew(s)
r.snY(new A.wm(s))
r.sbf(new A.wn())
r.sb7(new A.wo())},
nf(a,b,c){return A.Hw(a,b,c)},
Hw(a,b,c){var s=0,r=A.aK(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nf=A.aL(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.wh()
k=c.$ti
j=$.ar
i=new A.as(j,k)
if(j!==B.B)l=A.CO(l,j)
c.cD(new A.dX(i,2,null,l,k.i("dX<1,1>")))
s=4
return A.a5(i,$async$nf)
case 4:case 3:o=$.k4().b
n=$.aB
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a5(n.cU(b.a),$async$nf)
case 11:case 10:k=b.a
$.jU=A.h8(k,a)
$.eJ.j().cB(a,k,b.b)
A.zE()
A.k_()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ah(g)
$.jU=A.h8(o,o)
k=$.eJ.j()
k.cB(o,o,A.c(["renderer transaction rejected: "+A.y(m)],t.s))
A.zE()
s=8
break
case 5:s=1
break
case 8:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$nf,r)},
In(){var s,r,q,p,o,n=null
try{n=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.ai(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.ia)
q=A.AE(r.h(0,"requested"))
$.jU=A.h8(A.AE(r.h(0,"effective")),q)}catch(s){$.jU=A.h8(null,null)}p=$.k4().a
o=A.Dk(p,A.Cv())
r=o.a
$.jU=A.h8(r,p)
$.eJ.j().cB(p,r,o.b)
A.zE()
A.k_()},
Cv(){var s,r,q,p,o=$.fD.j().ghC().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.U(p,"max-samples-"))continue
r=A.dL(B.c.aO(p,12),null)
if(r==null)r=1}return new A.pN(r,B.a.p(o,"disjoint-timer-query"))},
zE(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a0($.k4().C(),null))}catch(s){}},
Hy(){var s=$.jL.j()
s.sew(new A.wi())
s.sbf(new A.wj())
s.sb7(new A.wk())},
Il(){var s,r,q,p,o,n=null
try{n=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.zr=A.Ep(B.f.ai(n,null))}catch(s){$.zr=A.fZ(null,null,!1,1,!1,!1,2,1)}r=$.jL.j()
q=r.w=$.fK()
r.x=new A.kt(q)
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
r.e0()
$.am.j().eX($.fK().r)
r=$.am.j()
q=$.fK()
p=r.ch
p.a=q.f
p.eD()
r.b0()
A.CK()},
CK(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a0($.fK().C(),null))}catch(s){}},
Ik(){var s,r=null
try{r=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jS=A.Ea(B.f.ai(r,null))}catch(s){$.jS=B.b1}$.hK.j().iJ($.jS)
A.CJ()
A.zh()},
CJ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a0($.jS.C(),null))}catch(s){}},
zh(){var s=$.bm
if(s==null)return
s.iT($.jS)},
Im(){var s,r=null
try{r=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.zv=A.ET(B.f.ai(r,null))}catch(s){$.zv=$.yG()}$.jN.j().iK($.cC())
A.CL()
A.Ce()},
CL(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a0($.cC().C(),null))}catch(s){}},
Ce(){var s,r="detailed",q=A.ES($.cC()),p=A.G(A.a(v.G.document).documentElement)
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
Ij(){var s,r=null
try{r=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dm=A.E4(B.f.ai(r,null))}catch(s){$.dm=B.aA}$.fC.j().eW($.dm)
A.zD()
A.nd()},
zD(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a0($.dm.C(),null))}catch(s){}},
nd(){var s,r,q,p,o,n,m=$.dm,l=$.xv,k=$.zV,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.f(B.hk)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ae
$.zJ=l
$.cV.j()
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
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.y(j*100)+"%")
q=$.o.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Cc){m=$.bd.j()
l=$.dm.f
m.e=new A.k8(l==null?B.ae:l)
m=$.bd.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
CN(a){var s,r,q
A.eP("renderer-unavailable")
s=$.o.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.l(0,"kind","pixeldart")
q.l(0,"explicit",$.dl.j().b)
$.dl.j()
q.l(0,"automatic",!1)
q.l(0,"fallback",!1)
q.l(0,"rejected",$.dl.j().d)
q.l(0,"aliasUsed",$.dl.j().f)
if($.dl.j().e!=null)q.l(0,"rejectionReason",$.dl.j().e)
if($.dl.j().r!=null)q.l(0,"aliasReason",$.dl.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a0(A.E(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.n,"selection",q],r,t.K),null))},
HX(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.x7(r,q)
r.addEventListener("change",A.Y(new A.x5(s)))
q.addEventListener("change",A.Y(new A.x6(s)))},
nv(){var s=0,r=A.aK(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9
var $async$nv=A.aL(function(f1,f2){if(f1===1){o.push(f2)
s=p}for(;;)switch(s){case 0:e7=v.G
e8=A.G(A.a(e7.document).getElementById("game"))
if(e8==null){s=1
break}$.o.b=e8
$.zu=A.G(A.a(e7.document).getElementById("fps"))
$.dl.b=$.DM().cz(A.dU().gaY().h(0,"renderer"))
A.HY()
c1=$.o.j()
c2=A.h(A.a(e7.window).innerWidth)>0?A.h(A.a(e7.window).innerWidth):800
c1.width=c2
c2=$.o.j()
c1=A.h(A.a(e7.window).innerHeight)>0?A.h(A.a(e7.window).innerHeight):600
c2.height=c1
c3=A.G(A.a(e7.document).getElementById("ui-canvas"))
if(c3!=null){$.C9.b=c3
c3.width=A.h($.o.j().width)
c3.height=A.h($.o.j().height)
c1=new A.oD(c3,A.c([],t.km))
c4=A.G(c3.getContext("2d"))
if(!t.m.b(c4))A.f(A.i("Failed to get 2D context for CanvasP5GuiEngine"))
c1.b=c4
c1=new A.t9(c1)
$.eO=c1
c1.ds(A.h($.o.j().width),A.h($.o.j().height))}n=B.fm.mE(e8)
if(n==null){A.CN("webgl2 unavailable")
s=1
break}try{c1=A.h($.o.j().width)
c2=A.h($.o.j().height)
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
m=new A.mN(n,c1,c2,c6,A.m(c7,t.qr),c8,A.m(c7,c9),A.m(c7,d0),A.m(c7,t.xp),A.m(c7,t.bE),A.m(c7,c9),A.m(c7,d0),c5,A.m(c7,c9),A.m(c7,d0),A.m(c7,c7),A.m(d1,d2),A.m(c7,t.qS),d3,B.kt,A.m(c7,t.Aj),A.m(c7,c7),A.m(c7,d2),A.m(c7,t.vD),A.m(c7,d2),A.m(c7,d2),new A.r3(A.m(c7,t.ml),A.m(c7,d1)),A.m(c7,t.mL),A.m(c7,t.w1),B.iK,B.my,B.dh,B.di)
$.aB=m
c1=$.dl.j()
c2=t.dM.a(m)
if(c1.a!==B.aT)A.f(A.i("legacy renderer backend is retired; production requires Pixeldart"))
c1=new A.rC(c2,c1.C(),B.n0)
c2.nn()
c1.d=B.W
$.fD.b=c1}catch(f0){l=A.ah(f0)
k=A.cX(f0)
g=$.o.j()
g.setAttribute("data-renderer-error",A.y(l))
if($.k3())$.o.j().setAttribute("data-renderer-error-stack",A.y(k))
A.CN("pixeldart initialization failed")
s=1
break}A.k_()
p=4
A.eP("initializing")
$.cV.b=new A.oC(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),$.Ad())
$.xv=A.R(A.a(A.a(e7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.zV=A.R(A.a(A.a(e7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.zJ=$.xv
$.cV.j()
c1=A.a(e7.window)
c2=t.N
c5=t.s
c6=t.a
c5=A.F_(A.E(["moveForward",A.c(["KeyW"],c5),"moveBack",A.c(["KeyS"],c5),"moveLeft",A.c(["KeyA"],c5),"moveRight",A.c(["KeyD"],c5),"interact",A.c(["KeyE"],c5),"secondary",A.c(["KeyQ"],c5),"run",A.c(["ShiftLeft"],c5),"crouch",A.c(["ControlLeft"],c5),"rotate",A.c(["KeyR"],c5),"reach",A.c(["KeyF"],c5),"journal",A.c(["KeyJ"],c5),"sleep",A.c(["KeyL"],c5),"pause",A.c(["Escape"],c5)],c2,c6))
c7=A.a(c1.document)
c5=new A.l1(c1,c7,A.Z(c2),A.Z(c2),A.Z(c2),A.Z(c2),A.Z(c2),new A.k(0,0,0),new A.qo(),c5)
c1.addEventListener("keydown",A.Y(c5.gkE()))
c1.addEventListener("keyup",A.Y(c5.gkG()))
c1.addEventListener("mousemove",A.Y(c5.gkM()))
c1.addEventListener("mousedown",A.Y(c5.gkK()))
c1.addEventListener("mouseup",A.Y(c5.gkO()))
c1.addEventListener("wheel",A.Y(c5.gkQ()))
c1.addEventListener("blur",A.Y(c5.gkS()))
c7.addEventListener("pointerlockchange",A.Y(c5.gkI()))
$.am.b=c5
c5=$.o.j()
c1=A.h(A.a(e7.window).innerWidth)>0?A.h(A.a(e7.window).innerWidth):800
c5.width=c1
c1=$.o.j()
c5=A.h(A.a(e7.window).innerHeight)>0?A.h(A.a(e7.window).innerHeight):600
c1.height=c5
A.eP("renderer")
A.eP("text")
c5=$.fL()
s=7
return A.a5(c5.be(),$async$nv)
case 7:j=c5.oS()
i=A.G9(j)
if(!(i instanceof A.md)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aP.b=i.a
$.na.b=A.E7(j)
g=A.m(c2,c6)
for(c1=t.j,d5=0;d5<5;++d5){f=B.C[d5]
c6=A.u(f)
c7=c5.c
c7===$&&A.r()
d6=c7.h(0,c6)
c6=c1.b(d6)?A.aE(d6,!0,c2):B.n
J.b6(g,f,c6)}e=A.Ga(g)
s=8
return A.a5(A.nk(),$async$nv)
case 8:d=f2
$.zg.b=new A.ov(B.fl)
c=$.zg.j().of(new A.xX(e,d))
d7=$.yH()
b=d7
if(c.a==null){g=d
c2=b
c2=c2==null?null:c2.a
if(c2==null)c2=1+B.b4.aX(2147483647)
c6=b
c6=c6==null?null:c6.b
if(c6==null)c6=1
c7=b
c7=c7==null?null:B.b.aU(c7.c)
if(c7==null)c7=7
if(c6<1)A.f(A.a6(c6,"startDay","must be at least 1"))
if(c7<0||c7>=24)A.f(A.a6(c7,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.f(A.a6(5760,"daySeconds","must be finite and > 0"))
d8=new A.kS(c6,7,5760)
d8.f4(c7)
d9=A.AP(e)
e0=g==null?A.AF(42):A.D6(g,42)
g=A.AC(42,c2,e0,d8,d9,A.Av(6,16,d9,null,6,B.kD,d8),new A.kC(0,0,0,!1),A.rh(null,null,null))}else{g=c.a
g.toString
g=A.AD(d,g,e)}$.U.b=g
a=c5.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.EQ(a,g,$.U.j().b)}$.wb=g
$.aP.j().y=$.U.j().z
g=A.ad(A.HT($.U.j().b),t.fu)
$.w8.b=new A.v0(g)
g=$.yI()
c2=c.a
g.eF(c2==null?null:c2.c.h(0,"inventoryInspections"))
$.fD.j().f8(A.Bc($.U.j().gii()))
if(c.b!=null){g=c.b
g.toString
A.fG(g)}g=$.aP.j()
c2=A.Jy($.U.j().b,A.Jz(j.b))
g.sjf(A.he(c2,A.B(c2).c))
A.eP("house")
$.S.b=$.U.j().c
$.nq.O(0)
c2=c.a
$.nq.K(0,A.IE(c2==null?null:c2.c.h(0,"weatherSurfaces")))
g=d7==null
a0=g?null:d7.e
a1=g?null:d7.f
if(a1!=null)for(g=$.S.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.v)(g),++d5){a2=g[d5]
for(c5=a2.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.v)(c5),++e1){a3=c5[e1]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.aa(a0,"open")||J.aa(a0,"closed")){a5=J.aa(a0,"open")
for(g=$.S.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.v)(g),++d5){a6=g[d5]
for(c5=a6.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.v)(c5),++e1){a7=c5[e1]
a7.sj5(a5)}}}a8=$.Ab()
if(a8!=null&&a8.length!==0)for(g=$.S.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.v)(g),++d5){a9=g[d5]
for(c5=a9.r,c6=c5.length,e1=0;e1<c6;++e1){b0=c5[e1]
if(b0.a===a8)b0.d=$.Ac()}}g=$.aB
if(g!=null)g.lL($.S.j())
$.bw.b=$.U.j().d
g=$.S.j().r
$.ag=g==null?"hall":g
g=$.S.j().eE(1.65)
if(g==null){$.S.j()
g=new A.k(12.9375,1.65,0.825)}$.xC=$.xi=$.xr=g
b1=g.ab(0,new A.k(0,1.3499999999999999,0))
$.eK.b=new A.ko(b1,J.Af(b1,new A.k(0,1.2000000000000002,0)))
$.hL.b=new A.pd()
g=A.zw(B.n)
c2=A.zw(B.n)
c5=new A.tc(B.G,g,c2)
if(!isFinite(0))A.f(B.h_)
if(!B.a.a3(c2,B.a.gaC(g)))A.f(B.hX)
if(c5.a===B.G&&c5.b!==0&&!c5.e)A.f(B.h8)
$.cg.b=c5
g=c.a
b2=A.Fq(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.nu($.S.j())){g=b2.b
$.xC=$.xi=$.xr=g
$.cz=b2.c
$.fH=b2.d
$.ag=b2.a
b3=g.ab(0,new A.k(0,1.3499999999999999,0))
g=$.eK.j()
g.slN(b3)
g.b=J.Af(b3,new A.k(0,1.2000000000000002,0))
g=$.eK.j()
c2=$.S.j()
c5=b2.e
c6=b2.f
g.im($.ag,$.eS(),c2,c6,c5)
A.fG("restored position")}b4=$.S.j().eE(1.65)
g=$.o.j()
c2=$.S.j().r
if(c2==null)c2=""
g.setAttribute("data-house-residence-room",c2)
c2=b4==null?"":B.b.F(b4.a,3)+","+B.b.F(b4.b,3)+","+B.b.F(b4.c,3)
g.setAttribute("data-house-residence-spawn",c2)
c2=A.FQ(A.a(e7.document))
c2.snL(new A.xY())
c2.sbf(new A.xZ())
c2.sb7(new A.y9())
$.hM.b=c2
c2=A.a(e7.document)
g=A.a(c2.createElement("div"))
c5=new A.ry(c2,g)
c5.b_(c2)
g.className=A.u(g.className)+" brush-page-frame"
g.setAttribute("aria-label","Pause menu")
g.setAttribute("data-brush-kind","frame")
g.setAttribute("data-brush-state","normal")
A.a(g.appendChild(A.oy(c2,B.f_,1)))
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
c5.so3(new A.yj())
c5.sbf(new A.yk())
c5.so5(new A.yl())
c5.snP(new A.ym())
c5.so4(new A.yn())
c5.snV(new A.yo())
c5.snQ(new A.yp())
c5.sb7(new A.y_())
$.cy.b=c5
c5=$.U.j().e
g=$.bw.j()
$.U.j()
$.nc.b=new A.qm(c5,g,new A.y0())
g=A.a(e7.document)
c5=$.U.j().e
c2=$.bw.j()
c6=$.nc.j()
c7=A.a(g.createElement("div"))
c6=new A.qw(c5,c2,c6,g,c7)
c6.b_(g)
c7.setAttribute("aria-label","The Journal")
A.a(c7.appendChild(A.F(g,"div","journal-title","The Journal")))
e3=A.F(g,"div","journal-pages",null)
c2=A.F(g,"div","page page-left",null)
c6.y!==$&&A.b5()
c6.y=c2
c5=A.F(g,"div","page page-right",null)
c6.z!==$&&A.b5()
c6.z=c5
A.a(e3.appendChild(c2))
A.a(e3.appendChild(c5))
A.a(c7.appendChild(e3))
A.a(c7.appendChild(c6.jN()))
e4=A.F(g,"div","tape-roll",null)
A.a(e4.style).setProperty("width","8rem")
c5=A.F(g,"div","tape-fill",null)
c6.as!==$&&A.b5()
c6.as=c5
A.a(e4.appendChild(c5))
A.a(c7.appendChild(e4))
e5=A.F(g,"div","consult",null)
A.a(e5.appendChild(A.F(g,"div","consult-label","Cite an entry")))
c5=A.F(g,"div","entry-picker",null)
c6.at!==$&&A.b5()
c6.at=c5
c2=A.F(g,"div","consult-result",null)
c6.ax!==$&&A.b5()
c6.ax=c2
A.a(e5.appendChild(c5))
A.a(e5.appendChild(c2))
A.a(c7.appendChild(e5))
e6=A.G(g.documentElement)
if(t.m.b(e6)){A.a(e6.style).setProperty("--shake-max-deg","3deg")
A.a(e6.style).setProperty("--shake-max-px","2px")}$.jP.b=c6
$.jP.j().sb7(new A.y1())
g=A.a(e7.document)
c2=A.F(g,"div","prompt",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
A.a(c2.style).setProperty("transition-duration","0.3s")
A.a(A.G(g.body).appendChild(c2))
$.C8.b=new A.rU(c2)
c2=A.a(e7.document)
g=A.F(c2,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.G(c2.body).appendChild(g))
$.C7.b=new A.ou(g)
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
$.bd.b=new A.nM(c2,c5,B.R)
$.Cc=!0
c5=A.Ew(A.a(e7.document))
c5.snO(A.Di())
c5.snN(A.JM())
$.az.b=c5
c5=$.cB()
c5.snM(new A.y2())
c5.snR(A.Di())
c5=c.a
b5=A.G7(c5==null?null:c5.c.h(0,"visitors"))
if($.cC().Q&&b5!=null&&$.aP.j().eF(b5))A.ID()
g=$.na.j()
c2=c.a
g.oD(c2==null?null:c2.c.h(0,"ambient"))
g=c.a
b6=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b6))for(g=J.O(b6);g.m();){b7=g.gn()
if(A.aZ(b7))$.xw.k(0,b7)}g=A.FV(A.a(e7.document))
g.so6(new A.y3())
g.sb7(new A.y4())
$.fE.b=g
g=A.EW(A.a(e7.document))
g.sb7(new A.y5())
$.jO.b=g
g=A.Eq(A.a(e7.document))
g.sb7(new A.y6())
$.nb.b=g
$.jQ.b=A.lQ(A.a(e7.document),null)
$.jR.b=A.lQ(A.a(e7.document),B.a3)
$.fC.b=A.lQ(A.a(e7.document),B.M)
A.ng($.jQ.j(),!1)
A.ng($.jR.j(),!0)
A.ng($.fC.j(),!0)
A.Ij()
A.HX()
$.eJ.b=A.EV(A.a(e7.document))
A.Hz()
A.In()
$.hK.b=A.lQ(A.a(e7.document),B.L)
A.ng($.hK.j(),!0)
A.Ik()
$.jN.b=A.lQ(A.a(e7.document),B.a4)
A.ng($.jN.j(),!0)
A.Im()
$.jL.b=A.Eo(A.a(e7.document))
A.Hy()
A.Il()
g=A.EG(A.a(e7.document))
g.sb7(new A.y7())
g.snS(new A.y8())
$.jM.b=g
g=c.a
b8=A.EI(g==null?null:g.c.h(0,"ending"))
if(b8!=null)A.CM(b8)
A.eP("world")
A.CP()
A.a(e7.window).addEventListener("resize",A.Y(new A.ya()))
A.a(e7.document).addEventListener("visibilitychange",A.Y(new A.yb()))
A.a(e7.window).addEventListener("keydown",A.Y(new A.yc()))
A.a(e7.window).addEventListener("keyup",A.Y(new A.yd()))
A.a(e7.window).addEventListener("keydown",A.Y(new A.ye()))
A.a(e7.window).addEventListener("click",A.Y(new A.yf()))
$.o.j().addEventListener("mousemove",A.Y(new A.yg()))
$.o.j().addEventListener("click",A.Y(new A.yh()))
$.o.j().addEventListener("wheel",A.Y(new A.yi()))
A.hR()
A.eP("raf")
A.h(A.a(e7.window).requestAnimationFrame(A.Y(A.Dj())))
p=2
s=6
break
case 4:p=3
e9=o.pop()
b9=A.ah(e9)
c0=A.cX(e9)
A.xk(b9,c0)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aI(q,r)
case 2:return A.aH(o.at(-1),r)}})
return A.aJ($async$nv,r)},
HW(a){var s,r,q,p=$.eO
if(!$.az.j().y||p==null)return
s=A.Cn(a)
if(s==null)return
r=$.cB()
q=p.i1(s.a,s.b)
r.r=q==null?null:q.b},
HV(a){var s,r=$.eO
if(!$.az.j().y||r==null)return!1
s=A.Cn(a)
if(s==null)return!1
return $.cB().nh(r.i1(s.a,s.b))},
Cn(a){var s=A.a($.o.j().getBoundingClientRect()),r=A.a1(s.width),q=A.a1(s.height)
if(r<=0||q<=0)return null
return new A.a8(A.h(a.clientX)-A.a1(s.left),A.h(a.clientY)-A.a1(s.top))},
HY(){var s=v.G
A.a(s.window).addEventListener("error",A.Y(new A.x8()))
A.a(s.window).addEventListener("unhandledrejection",A.Y(new A.x9()))},
eP(a){if($.zm===a)return
$.zm=a
$.o.j().setAttribute("data-boot-phase",a)},
k_(){var s,r,q,p,o,n=null,m=$.fD.j().ghC(),l=$.o.j(),k=A.dU().gaY().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a0(m.C(),n))
k=$.dl.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.c2().gnG().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.aB
if(k==null)k="{}"
else{k=k.e
k===$&&A.r()
k=k.as
if(k==null)k=A.f(A.i("renderer is not initialized"))
s=k.a
s.A()
r=s.b
q=A.J(r,A.t(r).c)
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
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(B.lc,n))
l=$.aB
o=l==null?n:l.x
if(o!=null)$.o.j().setAttribute("data-renderer-profile-fallback",o)},
Iv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(!$.k3())return
s=$.Ab()
if(s!=null&&s.length!==0){r=$.o.j()
q=$.Ac()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.w8.j().eo($.U.j().gag().a)
r=$.o.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.yH()
o=q==null?a1:q.e
if(o!=null)$.o.j().setAttribute("data-automation-capture-shutters",o)
$.o.j().setAttribute("data-automation-rain-window-visibility",B.b.F(A.zI($.ag),3))
r=$.o.j()
q=$.zm
n=$.ag
m=$.S.j().r
l=$.S.j().x
k=$.ag
j=$.S.j().r
i=$.eS()
h=t.N
i=A.E(["x",i.a,"y",i.b,"z",i.c],h,t.i)
g=$.eK.j().ghm()
f=$.eK.j().d
f=f==null?a1:f.b
e=t.X
r.setAttribute("data-automation-player",B.f.a0(A.E(["schemaVersion",1,"phase",q,"roomId",n,"residenceRoomId",m,"residenceRestAnchor",l,"atResidence",k===j,"eye",i,"activeStairId",g,"activeStairProgress",f,"yaw",$.cz,"pitch",$.fH,"modal",$.bl!=null,"dialogueOverlay",$.az.j().y,"inputEnabled",$.am.j().ay,"day",$.U.j().gag().a,"hour",$.U.j().gag().b],h,e),a1))
$.o.j().setAttribute("data-story-journal-entry-count",""+$.U.j().gag().r)
d=A.m(h,e)
for(r=$.S.j().c,q=r.length,n=t.K,c=0;c<r.length;r.length===q||(0,A.v)(r),++c){b=r[c]
m=b.ax
l=b.ay
k=b.z
j=m&&!l&&!k
d.l(0,b.a,A.E(["a",b.b,"b",b.c,"open",m,"locked",l,"sticks",k,"passable",j],h,n))}$.o.j().setAttribute("data-automation-portals",B.f.a0(d,a1))
a=$.ne
r=!1
if(a!=null)if($.S.j().e.h(0,"cellar")!=null){r=$.S.j()
q=$.ag
q=r.e.h(0,q)!=null
r=q}if(r){a0=a.cs("cellar",$.ag)
$.o.j().setAttribute("data-audio-transmission-cellar",B.f.a0(A.E(["sourceRoom","cellar","listenerRoom",$.ag,"portalPath",a0.a,"gainDb",a0.c,"lowPassHz",a0.d,"muffle01",a0.e,"barrierIds",a0.b,"reasonTrace",a0.r,"reachable",a0.f],h,n),a1))}else $.o.j().setAttribute("data-audio-transmission-cellar","unavailable")},
k0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if($.cg.j().a!==B.G){A.fG("save unavailable during rupture")
return}try{p=$.zg.j()
o=$.U.j()
n=t.N
m=t.z
s=A.m(n,m)
l=$.ag
k=$.eS()
j=$.cz
i=$.fH
h=$.eK.j().ghm()
g=$.eK.j().d
J.b6(s,"player",new A.lv(l,k,j,i,h,g==null?null:g.b).C())
l=$.aP.j()
k=A.fi(l.b,n)
j=A.fi(l.c,t.T)
l=l.r
J.b6(s,"visitors",new A.me(k,j,l==null?null:new A.ka(l.a,l.b,l.d,l.f,l.e,l.r,l.w)).C())
l=$.na.j().b
l=A.J(l,A.t(l).c)
B.a.X(l)
J.b6(s,"ambient",l)
l=$.wb
if(l!=null)J.b6(s,"authoredEvents",A.E(["delivered",l.gmL()],n,m))
l=A.J($.xw,A.t($.xw).c)
B.a.X(l)
J.b6(s,"unverifiables",l)
J.b6(s,"inventoryInspections",$.yI().C())
r=A.m(n,t.gG)
for(l=new A.N($.nq,A.t($.nq).i("N<1,2>")).gv(0),k=t.i;l.m();){j=l.d
j.toString
q=j
j=q.a
i=q.b
J.b6(r,j,A.E(["snowDepthM",i.a,"waterFilmDepthM",i.b,"materialDissolution01",i.c],n,k))}J.b6(s,"weatherSurfaces",r)
r=$.zs
if(r!=null)J.b6(s,"ending",A.E(["kind",r.a.b],n,n))
s=t.P.a(s)
r=o.a
l=o.b
k=A.AH(o.c).C()
j=o.d
p.oU(A.Bf(s,A.E(["houseSeed",r,"runSeed",l,"house",k,"time",A.E(["day",j.a,"hour",j.b],n,t.E),"dayLoop",o.f.C(),"journal",o.e.C(),"difficulty",o.r.C(),"narrative",o.z.C()],n,m),2))
A.fG(a)}catch(f){A.fG("save failed")}},
Iq(){var s,r,q=$.S.j().eE(1.65),p=$.S.j().r
if(q==null||p==null||$.S.j().e.h(0,p)==null)return
$.k5().a=new A.k(0,0,0)
$.ag=p
$.xC=$.xi=$.xr=q
s=q.ab(0,new A.k(0,1.3499999999999999,0))
r=$.eK.j()
r.a=s
r.b=s.a2(0,new A.k(0,1.2000000000000002,0))
r.im(p,q,$.S.j(),null,null)},
IE(a){var s,r,q,p
if(a==null)return A.m(t.N,t.xe)
if(!t.f.b(a))throw A.b(B.hg)
s=A.m(t.N,t.xe)
for(r=a.gM(),r=r.gv(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.iu)
s.l(0,p,A.Gh(q.b))}return s},
It(){var s=A.G(A.a(v.G.document).documentElement),r=s==null?null:A.ao(s.getAttribute("data-gameplay-focus-loss")),q=A.bK(new A.I(B.aN,t.rg.a(new A.xf(r)),t.vK),t.x)
switch((q==null?B.ba:q).a){case 0:$.hW=!0
s=$.bm
if(s!=null)s.f_(!0)
break
case 1:$.hW=!0
break
case 2:break}},
fG(a){var s=v.G,r=A.G(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.a(s.document).documentElement)
s=s==null?null:A.ao(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.EP(B.fI,new A.xq(r),t.H)},
xk(a,b){var s,r,q,p
A.eP("error")
s=A.y(a)
r=A.yA(s,"\n"," ")
s=$.zu
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.t(0)
$.o.j().setAttribute("data-boot-error",p)
if($.k3()&&!q)$.o.j().setAttribute("data-boot-stack",b.t(0))
A.a(s.console).error(p)},
Ch(){var s,r
if($.zk)return
$.zk=!0
s=$.bm
r=s==null
if(!r)s.cr()
if(!r)s.f7("music")
B.a.k($.dn,"arm")},
hR(){var s=0,r=A.aK(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hR=A.aL(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a5(A.hQ(),$async$hR)
case 2:o=null
q=4
s=7
return A.a5(A.av(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hR)
case 7:n=b
i=A
s=8
return A.a5(A.av(A.a(n.json()),t.X),$async$hR)
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
l===$&&A.r()
l.textContent=k}s=9
return A.a5(A.pr(A.c([A.xb(o),A.x4(o),A.jX()],t.iJ),t.H),$async$hR)
case 9:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$hR,r)},
jX(){var s=0,r=A.aK(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$jX=A.aL(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a5(A.av(A.a(A.a(v.G.window).fetch("res/models/index.json")),t.m),$async$jX)
case 6:o=b
if(!A.R(o.ok)){k=A.i("HTTP "+A.y(A.nt(o,"status",t.S)))
throw A.b(k)}s=7
return A.a5(A.av(A.a(o.text()),t.N),$async$jX)
case 7:n=b
m=A.Fr(n)
$.o.j().setAttribute("data-renderer-model-packages","validated")
$.o.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.aB
k=k==null?null:k.dh(m)
s=8
return A.a5(k instanceof A.as?k:A.GA(k,t.H),$async$jX)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.ah(i)
k=$.o.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.o.j().setAttribute("data-renderer-model-package-error",A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$jX,r)},
hQ(){var s=0,r=A.aK(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hQ=A.aL(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.de[g]
q=6
s=9
return A.a5(A.av(A.a(A.a(j.window).fetch(o)),i),$async$hQ)
case 9:n=a0
s=10
return A.a5(A.av(A.a(n.text()),h),$async$hQ)
case 10:m=a0
l=A.Am(B.f.ai(m,null))
f=$.S.b
if(f===$.S)A.f(A.a9(""))
l.eN(f)
f=$.o.b
if(f===$.o)A.f(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.o.b
if(f===$.o)A.f(A.a9(""))
f.setAttribute("data-house-manifest-source",o)
f=$.o.b
if(f===$.o)A.f(A.a9(""))
f.setAttribute("data-house-role",l.c)
f=$.o.b
if(f===$.o)A.f(A.a9(""))
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
case 4:if(!c){$.o.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.y(d))}s=11
return A.a5(A.ni(),$async$hQ)
case 11:s=12
return A.a5(A.nj(),$async$hQ)
case 12:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$hQ,r)},
nk(){var s=0,r=A.aK(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$nk=A.aL(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.de[f]
p=7
s=10
return A.a5(A.av(A.a(A.a(i.window).fetch(n)),h),$async$nk)
case 10:m=a0
s=11
return A.a5(A.av(A.a(m.text()),g),$async$nk)
case 11:l=a0
k=A.Am(B.f.ai(l,null))
k.eO()
e=$.o.b
if(e===$.o)A.f(A.a9(""))
e.setAttribute("data-house-blueprint","validated")
e=$.o.b
if(e===$.o)A.f(A.a9(""))
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
case 1:return A.aI(q,r)
case 2:return A.aH(o.at(-1),r)}})
return A.aJ($async$nk,r)},
ni(){var s=0,r=A.aK(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$ni=A.aL(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.k4[c]
p=7
s=10
return A.a5(A.av(A.a(A.a(g.window).fetch(n)),f),$async$ni)
case 10:m=b1
s=11
return A.a5(A.av(A.a(m.text()),e),$async$ni)
case 11:l=b1
b=B.f.ai(l,null)
b=h.b(b)?b:A.e1("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.e1("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aZ(a)?a:A.e1("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.e1("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aE(a,!0,d):A.e1("assets is not a list")
a4=A.B(a3)
a5=a4.i("H<1,d6>")
a3=A.J(new A.H(a3,a4.i("d6(1)").a(A.JI()),a5),a5.i("a_.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aE(a,!0,d):A.e1("placements is not a list")
a5=A.B(a4)
a6=a5.i("H<1,cJ>")
a4=A.J(new A.H(a4,a5.i("cJ(1)").a(A.JJ()),a6),a6.i("a_.E"))
a4.$flags=1
k=new A.q5(a1,a2,a0,a3,a4)
a1=$.S.b
if(a1===$.S)A.f(A.a9(""))
k.eN(a1)
$.hO=k
a1=$.aB
if(a1!=null)a1.eY(k)
a1=$.o.b
if(a1===$.o)A.f(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.o.b
if(a1===$.o)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.o.b
if(a1===$.o)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
a1=$.o.b
if(a1===$.o)A.f(A.a9(""))
a1.setAttribute("data-house-inventory-status-counts",B.f.a0(k.gjh(),null))
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
case 5:$.o.j().setAttribute("data-house-inventory","unavailable")
$.o.j().setAttribute("data-house-inventory-error",A.y(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.aI(q,r)
case 2:return A.aH(o.at(-1),r)}})
return A.aJ($async$ni,r)},
nj(){var s=0,r=A.aK(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$nj=A.aL(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.hO
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.kI[a4]
p=7
s=10
return A.a5(A.av(A.a(A.a(a1.window).fetch(m)),a2),$async$nj)
case 10:l=b5
s=11
return A.a5(A.av(A.a(l.text()),e),$async$nj)
case 11:k=b5
a5=B.f.ai(k,null)
a5=a0.b(a5)?a5:A.hN("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aE(a6,!0,a3):A.hN("emitters is not a list")
a8=A.B(a7)
a9=a8.i("H<1,d5>")
a7=A.J(new A.H(a7,a8.i("d5(1)").a(A.JZ()),a9),a9.i("a_.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aZ(a6)?a6:A.hN("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hN("sourceRef is not a string")
j=new A.qc(a8,a9,a7)
a7=$.S.b
if(a7===$.S)A.f(A.a9(""))
j.oO(a7,b2)
$.Cy=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.v)(a7),++b0){h=a7[b0]
for(a9=h.f.gM(),a9=a9.gv(a9);a9.m();){g=a9.gn()
J.b6(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.S.b
if(a7===$.S)A.f(A.a9(""))
a8=A.E8(i)
a9=new A.nZ(a7,A.aV(B.dw,e,d),a8)
a9.jq(a8,a7,B.dw)
$.ne=a9
a7=$.bm
if(a7!=null){a7.CW=a9
a7.bI()}a7=$.o.b
if(a7===$.o)A.f(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.o.b
if(a7===$.o)A.f(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.o.b
if(a7===$.o)A.f(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.o.b
if(a7===$.o)A.f(A.a9(""))
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
$.o.j().setAttribute("data-audio-planner","unavailable")
$.o.j().setAttribute("data-house-soundscape","unavailable")
$.o.j().setAttribute("data-house-soundscape-error",A.y(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.aI(q,r)
case 2:return A.aH(o.at(-1),r)}})
return A.aJ($async$nj,r)},
zq(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.b8(s,A.B(s).i("b8<1,e>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.u(q))}},
x4(a){var s=0,r=A.aK(t.H),q,p,o,n,m,l
var $async$x4=A.aL(function(b,c){if(b===1)return A.aH(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.zq(A.G(n?null:a.sfx),m,"")
A.zq(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.u(p))
l=$
s=2
return A.a5(A.o5(m,$.S.j()),$async$x4)
case 2:o=l.bm=c
o.CW=$.ne
o.bI()
A.Io()
A.CR(o)
A.zh()
A.CS()
if($.zk){o.cr()
o.f7("music")}return A.aI(null,r)}})
return A.aJ($async$x4,r)},
zQ(a,b){var s
A.D2(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
IA(a){var s,r
try{s=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Cd(a,b){var s
if(a!=="brightness")return
s=A.G(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.y(B.b.q(b,0.6,1.4))+")")},
wa(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.a(v.G.document).documentElement)
if(r!=null)A.R(A.a(r.classList).toggle(s,b))
A.nd()},
CS(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a1($.dr().a.ct(o)),k=A.R($.dr().a.ct(n)),j=A.R($.dr().a.ct(m))
for(s=[$.jQ.j(),$.jR.j(),$.fC.j(),$.hK.j(),$.jN.j()],r=0;r<5;++r)s[r].eZ(o,l)
A.Cd(o,l)
for(s=[$.jQ.j(),$.jR.j(),$.fC.j(),$.hK.j(),$.jN.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.wa(n,k)
A.wa(m,j)},
zP(a,b){var s
A.D2(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Ix(a){var s,r
try{s=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
CR(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.kk[s]
q=$.dr().a.b.h(0,r)
j.l(0,r,A.a1(q==null?A.f(A.i("setting missing from profile: "+r)):q))}p=A.R($.dr().a.ct("muted"))
o=A.R($.dr().a.ct("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bt(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dA(o)
for(q=[$.jQ.j(),$.jR.j(),$.fC.j(),$.hK.j()],n=j.$ti.i("cL<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cL(j,j.r,j.e,n);m.m();){k=m.d
l.eZ(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
Cf(){var s=$.bm
if(s!=null)A.CR(s)
A.CS()},
Io(){var s,r,q,p,o,n,m,l,k=null
try{k=A.ao(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.ai(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.hn)
q=A.Bh(r.h(0,"requested"))
$.CY=A.z0(A.Bh(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.E[n]
if(m.w==="audio"){l=m.a
o.l(0,l,A.Ix(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.E[n]
if(m.w==="display"){p=m.a
r.l(0,p,A.IA(p))}}$.CY=A.FS(o,r)
A.xg()},
xg(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a0($.dr().C(),null))}catch(s){}},
D2(a,b){var s,r,q,p,o,n,m
switch(A.tS(a).d.a){case 0:r=A.fb(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dr()
q=s
A.tS(a).dt(q)
p=t.N
o=t.K
n=A.hd(r.a.b,p,o)
n.l(0,a,q)
r.a=A.dQ(n,1)
n=s
A.tS(a).dt(n)
o=A.hd(r.b.b,p,o)
o.l(0,a,n)
r.b=A.dQ(o,1)
A.xg()}catch(m){if(!(A.ah(m) instanceof A.A))throw m}},
xb(a){var s=0,r=A.aK(t.H),q,p
var $async$xb=A.aL(function(b,c){if(b===1)return A.aH(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.zq(A.G(a==null?null:a.tex),p,"")
p.K(0,B.lq)
q=$.aB
q=q==null?null:q.di(p)
s=2
return A.a5(A.pr(A.c([q==null?A.AB(t.H):q],t.iJ),t.H),$async$xb)
case 2:return A.aI(null,r)}})
return A.aJ($async$xb,r)},
CP(){var s,r,q=v.G,p=A.h(A.a(q.window).innerWidth),o=A.h(A.a(q.window).innerHeight),n=$.o.j(),m=p>0?p:800
n.width=m
m=$.o.j()
n=o>0?o:600
m.height=n
s=A.G(A.a(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.h($.o.j().width)
s.height=A.h($.o.j().height)}q=$.eO
if(q!=null)q.ds(A.h($.o.j().width),A.h($.o.j().height))
q=$.fD.j()
n=A.h($.o.j().width)
m=A.h($.o.j().height)
if(q.d!==B.W)A.f(A.i("pixeldart backend is not ready"))
if(n<=0||m<=0)A.f(A.n("pixeldart surface size must be positive",null))
q.b.ds(n,m)
q=$.aB
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.o.j().setAttribute("data-renderer-surface",r)},
HU(){var s,r,q=$.bl
if(q!=null){s=$.am.j()
if(!s.CW.bm("pause",s.f)){s=$.am.j()
s=s.CW.bm("secondary",s.f)}else s=!0
if(s){A.HB(q)
return}if($.am.j().f.a7(0,"GamepadDpadUp")){A.CE(q,-1)
return}if($.am.j().f.a7(0,"GamepadDpadDown")){A.CE(q,1)
return}s=$.am.j()
if(s.CW.bm("interact",s.f)){r=A.G(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.R(q.b.contains(r)))A.qt(r,"click",t.X)}return}s=$.am.j()
if(s.CW.bm("pause",s.f)){A.hU($.cy.j())
return}if($.az.j().y)return
s=$.am.j()
if(s.CW.bm("journal",s.f))A.k1($.jP.j())
else{s=$.am.j()
if(s.CW.bm("sleep",s.f))A.k1($.fE.j())}},
HB(a){if(a===$.cy.j()){a.ah()
return}if(a===$.hM.j()||a instanceof A.hs||a instanceof A.ip||a instanceof A.ic){A.e4(a)
return}a.ah()},
CE(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.W)
for(s=t.m,r=0;r<A.h(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.a(v.G.document).activeElement)
o=B.a.bB(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.R(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
Iw(e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6=null,e7="exceeded"
A.a1(e8)
try{s=e8
if(!$.Cx){$.zB=s
$.Cx=!0}b=s
a=$.zB
if(typeof b!=="number")return b.ab()
r=(b-a)/1000
$.zB=s
b=r
if(typeof b!=="number")return b.cv()
if(b<0)r=0
b=r
if(typeof b!=="number")return b.iH()
if(b>0.25)r=0.25
A.J2(r)
$.am.j().ob()
b=$.o.j()
a=$.am.j().z!=null?"standard":"none"
b.setAttribute("data-controller",a)
q=$.am.j().z
if(q!=null)$.o.j().setAttribute("data-controller-id",q)
else $.o.j().removeAttribute("data-controller-id")
A.HU()
if(!$.hW&&$.bl==null){b=$.eL
a=r
if(typeof a!=="number")return A.xS(a)
a=$.eL=b+a
p=0
b=t.aA
for(;;){if(a>=0.008333333333333333){a0=p
if(typeof a0!=="number")return a0.cv()
a0=a0<10}else a0=!1
if(!a0)break
$.xi=$.eS()
if(!$.Aa()){a=$.U.b
if(a===$.U)A.f(A.a9(""))
a.lC(0.008333333333333333*($.cC().Q?1:20))
a=$.DP()
a0=$.U.b
if(a0===$.U)A.f(A.a9(""))
a0=a0.gag()
a1=$.U.b
if(a1===$.U)A.f(A.a9(""))
a=a.c8(a0.a,a1.gag().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.v)(a),++a2){o=a[a2]
B.a.k($.dn,"clock:"+o.a)}a=$.DQ()
a0=$.U.b
if(a0===$.U)A.f(A.a9(""))
a0=a0.gag()
a1=$.U.b
if(a1===$.U)A.f(A.a9(""))
a=a.c8(a0.a,a1.gag().b)
a0=a.length
a2=0
for(;a2<a.length;a.length===a0||(0,A.v)(a),++a2){n=a[a2]
B.a.k($.dn,"service:"+n.a+":"+n.b)}}A.J5()
A.J1()
a=$.aP.b
if(a===$.aP)A.f(A.a9(""))
a0=$.U.b
if(a0===$.U)A.f(A.a9(""))
a.w=a0.r.c>=0.5
a=a.f
a3=A.aE(a,!1,b)
a3.$flags=3
a4=a3
B.a.O(a)
if(a4.length!==0){a=$.U.b
if(a===$.U)A.f(A.a9(""))
a.og(a4)}A.J0()
A.J4()
A.J3()
A.J_(0.008333333333333333)
a=$.hL.b
if(a===$.hL)A.f(A.a9(""))
if(a.a!=null)if((a.b-=0.008333333333333333)<=0)a.a=null
a=$.cg.b
if(a===$.cg)A.f(A.a9(""))
m=a.a!==B.G
a0=$.S.b
if(a0===$.S)A.f(A.a9(""))
a.e5(0.008333333333333333,a0)
if(m){a=$.cg.b
if(a===$.cg)A.f(A.a9(""))
a=a.e}else a=!1
if(a)A.CQ(!0)
a=$.eL-0.008333333333333333
$.eL=a
a0=p
if(typeof a0!=="number")return a0.a2()
p=a0+1}l=B.b.q(a/0.008333333333333333,0,1)
b=$.xC=A.Bw($.DS(),$.eS(),l)
k=$.bm
if(k!=null){a=k
a0=Math.sin($.cz)
a1=Math.cos($.cz)
a5=A.a(a.a.listener)
a5.setPosition(b.a,b.b,b.c)
A.aT(a5,"setOrientation",[a0,0,a1,0,1,0],t.H)
a.iN($.ag)
for(b=$.dn.length,a2=0;a2<$.dn.length;$.dn.length===b||(0,A.v)($.dn),++a2){j=$.dn[a2]
A.HF(k,j)}B.a.O($.dn)
$.o.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.o.j().setAttribute("data-audio-muffle01",B.b.F(k.gnF(),3))
b=$.o.j()
a=k.cy?"true":"false"
b.setAttribute("data-audio-music-started",a)
a=$.o.j()
b=k.dy
if(b==null)b="ir-fallback"
a.setAttribute("data-audio-room-ir",b)
b=$.o.j()
b.setAttribute("data-audio-context-suspended",""+(A.u(k.a.state)==="suspended"))
b.setAttribute("data-audio-muted",""+k.k2)
b.setAttribute("data-audio-master-mix",B.b.F(k.fx,3))
b.setAttribute("data-audio-voice-mix",B.b.F(k.fy,3))
a=$.dm
b.setAttribute("data-audio-captions",""+(a.e===!0))
b.setAttribute("data-audio-paused",""+$.hW)}}$.cV.j().i5($.nx(),$.cz,$.fH)
b=$.aB
if(b!=null){a=$.cV.j()
a0=a.a
a6=new A.C(a0.a,a0.b,a0.c)
a0=a.b
a7=new A.C(a0.a,a0.b,a0.c)
a0=a.c
a8=b.b/b.c
a9=A.AW(a6,a7,new A.C(a0.a,a0.b,a0.c))
a=a.f
a0=a.b
a1=a.c
b0=A.yV(a8,a1,a.a,a0)
b.to=new A.fS(a9,b0,b0.a8(0,a9),a6,a7,a0,a1,a8)}b=$.aB
if(b!=null)b.iX($.S.j(),$.ag)
i=$.w8.j().eo($.U.j().gag().a)
h=B.b.q(1-A.zI($.ag),0,1)
b=$.aB
if(b!=null)b.iM($.S.j(),$.ag,$.nx(),$.bw.j().gf9(),$.bw.j().gmF(),i,A.JT($.ag),$.bw.j().b)
b=$.aB
if(b!=null){a=A.Jb($.S.j(),$.ag,i.r,$.hO)
a0=t.fu.a(i)
t.A1.a(a)
a1=A.aA(h)
b.cY=A.ad(a,t.qR)
a=a0.r
b1=A.z4(new A.j8(a0,a,0.8,a1,1,0,1,1,0))
b.y2=b1
b.cX=A.Gg(a,b1.z,$.nx(),b.ce)}b=A.Jd($.ag)
a=r
a0=$.aB
a0=a0==null?e6:a0.ce
if(a0==null)a0=B.dh
A.J6(i,a,a0,b)
if(!$.hW&&$.bl==null){b=r
a=$.cC().Q?1:20
if(typeof b!=="number")return b.a8()
a=B.b.q(b*a,0,0.5)
b=a}else b=0
g=A.Hj(i,b,h)
b=$.aB
if(b!=null)b.iY(g)
if($.CD!==$.cg.j().a){$.CD=$.cg.j().a
$.zK=$.zK+1}b=$.aB
if(b!=null){if($.Aa())a=0
else{a=s
if(typeof a!=="number")return a.oY()
a/=1000}a0=$.zK
a1=A.h(Math.max(0,$.U.j().b))
if(!isFinite(a)||a<0)A.f(A.a6(a,"timeSeconds",e6))
if(a1<0)A.f(A.n("frame clock seeds must be non-negative",e6))
b.el=a
b.em=a0
b.en=a1}b=$.aB
if(b!=null){a=$.cg.j()
a0=$.zJ
a1=A.zI($.ag)
b2=a.a
b3=a.gf5()
b4=b3>0?B.b.q(a.b/b3,0,1):0
a=b2.a
b5=a>=3
b6=b2===B.bT
b7=$.c2()
b8=b7.J("post_exposure")
b9=b7.J("post_bloom")
c0=b7.J("post_vignette")
c1=b7.J("post_film_grain")
c2=b7.J("post_dither")
c3=b7.J("post_depth_of_field")
c4=b7.J("post_color_grade")
c5=b7.J("post_affine_warp")
c6=b7.J("post_vertex_snap")
c7=B.b.aE(b7.J("post_quantization_bits"))
c8=b7.J("post_vhs_chroma")
c9=b7.J("post_vhs_noise")
d0=b7.J("shadow_ao_intensity")
d1=b2===B.a7?0.45:b8
b7=b7.bY("shadow_ssdo_enable")?d0:0
d2=b.xr
d2=B.b.q(d2,0,1)
d3=b.cf
d3=B.b.q(d3,0,1)
d4=b.d6
d5=b.d7
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
b.y1=B.b.q(a1,0,1)
b.l8()}$.fD.j().f8(A.Bc($.U.j().gii()))
f=$.aB
if(f!=null){b=$.o.j()
a=f
e4=a.d8
a0=e4==null
a1=a0?e6:e4.b
if(a1==null)a1=0
b7=a0?e6:e4.c
if(b7==null)b7=0
d1=a0?e6:e4.e
if(d1==null)d1=0
d2=a.d9
d3=a.ghV()?"ok":e7
d4=t.N
d5=t.K
d3=A.E(["drawCalls",a1,"triangles",b7,"instances",d1,"frameMs",d2,"budget",d3],d4,d5)
a0=a0?e6:e4.r
if(a0==null)a0=0
a1=a.hP
a1===$&&A.r()
a1=A.E(["gpuBytes",a0,"residentTextures",a1.d.a,"textureVramMb",0],d4,t.S)
a0=a.d1
b7=a.d0
d1=a.d2
d2=a.d3
d6=a.d4
d7=a.d5
d8=a.gix()
d9=a.hG
d9=d9==null?e6:d9.c
if(d9==null)d9=0
a=a.x1
b.setAttribute("data-renderer-diagnostic-groups",B.f.a0(A.E(["frame",d3,"resources",a1,"atmosphere",A.E(["rainSubmitted",a0,"rainRequested",b7,"rainBudget",d1,"rainFrustumVisible",d2,"rainFrustumCulled",d6,"rainCapped",d7,"weatherPhase",d8,"volumetricSources",d9,"volumetricSampleCount",a.as,"volumetricIntensity",a.Q,"volumetricDustDensity",a.x,"volumetricAnisotropy",a.y,"reflectionIntensity",a.dy,"reflectionConfidence",a.fr],d4,d5)],d4,t.X),e6))
e=f.gnd()
if(e!=null){$.o.j().setAttribute("data-renderer-frame-stats",e)
b=$.o.j()
a=f.ghV()?"ok":e7
b.setAttribute("data-renderer-budget",a)}$.o.j().setAttribute("data-renderer-rain-particles",""+f.d1)
$.o.j().setAttribute("data-renderer-rain-particles-requested",""+f.d0)
$.o.j().setAttribute("data-renderer-rain-particles-budget",""+f.d2)
$.o.j().setAttribute("data-renderer-rain-particles-capped",""+f.d5)
$.o.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+f.d3)
$.o.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+f.d4)
$.o.j().setAttribute("data-renderer-volumetric-sample-count",""+f.x1.as)
$.o.j().setAttribute("data-renderer-volumetric-intensity",B.b.F(f.x1.Q,4))
$.o.j().setAttribute("data-renderer-volumetric-dust-density",B.b.F(f.x1.x,4))
$.o.j().setAttribute("data-renderer-volumetric-anisotropy",B.b.F(f.x1.y,4))
b=$.o.j()
a=$.c2()
b.setAttribute("data-renderer-debug-attachments","unavailable")
$.o.j().setAttribute("data-renderer-debug-attachments-reason",a.r)
$.o.j().setAttribute("data-renderer-weather-phase",f.gix())
b=$.o.j()
a=f.y2
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-wind-mps",B.b.F(a==null?0:a,3))
b=$.o.j()
a=f.y2
a=a==null?e6:a.r
b.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.F(a==null?0:a,8))
b=$.o.j()
a=f.y2
a=a==null?e6:a.w
b.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.F(a==null?0:a,6))
b=$.o.j()
a=f.cX
a=a==null?e6:a.c
b.setAttribute("data-renderer-weather-warm-clearance-m",B.b.F(a==null?0:a,4))
$.o.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.F(f.gdu(),3))
$.o.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.F(f.giw(),4))
$.o.j().setAttribute("data-renderer-weather-impact-count",""+f.eh)
$.o.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.F(f.cZ,8))
$.o.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.F(f.d_,8))
$.o.j().setAttribute("data-renderer-weather-obstacle-count",""+f.cY.length)}A.eP("running")
A.Iv()
b=$.am.j()
b.as=b.Q=0
a=b.c
a.a7(0,"WheelUp")
a.a7(0,"WheelDown")
b.d.O(0)
b.f.O(0)
A.h(A.a(v.G.window).requestAnimationFrame(A.Y(A.Dj())))}catch(e5){d=A.ah(e5)
c=A.cX(e5)
A.xk(d,c)}},
HF(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.ig("confirm")
$.bd.j().aL("interface confirmation")
break
case"ambient-winnow":a.dj("winnow",0.28)
$.bd.j().aL("wind moving through the house")
break
case"ambient-gate":a.dj("gate",0.22)
$.bd.j().aL("distant gate")
break
case"collapse":a.ig("collapse")
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
default:if(B.c.U(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.nm(a,q,s[2])}}}},
nm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.Cy,g=$.hO
if(h==null||g==null)return
s=h.n0(b)
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
m=n.d.a2(0,s.d.a8(0,p))
l=$.ne
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.f(A.i("sound emitter "+s.a+" has no cue for "+c))
a.o9(q,m,s.e,o)
return}q=$.Ck
$.Ck=q+1
o=A.E9(B.eB,r,r+":"+q,m,A.Hl(b,c),q,o)
q=$.ag
q=A.E5($.nx(),q)
t.gG.a(B.bC)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.f(A.i("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.f(A.i("audio listener room missing: "+q))
j=l.it(p,q,B.bC)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.f(A.i("audio cue family missing: "+q))
k=J.aQ(i)
k=k.h(i,B.d.R(A.IS(q,o.f),k.gu(i)))
o=o.e
A.ad(j.a,t.N)
a.ih(k,new A.k(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
Hl(a,b){var s,r,q,p=$.U.j().b
for(s=new A.dv(a+":"+b),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.Df(p,q==null?r.a(q):q)}return p},
J2(a){var s=$.zu
if(s==null)return
s.textContent=""+B.b.aE(a>0?1/a:0)+" fps"},
J_(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="interact"
if($.CV||$.bl!=null){$.k5().a=new A.k(0,0,0)
return}$.am.j().dE(b4)
s=$.am.j()
r=s.cJ("moveLeft")?-1:0
if(s.cJ("moveRight"))++r
q=s.cJ("moveForward")?1:0
if(s.cJ("moveBack"))--q
s=s.ay?s.w:new A.k(0,0,0)
p=new A.k(r,0,q).a2(0,s)
o=p.gu(0)>1?p.gac():p
n=$.am.j().Q
m=$.am.j().as
s=$.fK()
l=s.d?-1:1
k=s.e?-1:1
j=$.cz
i=$.am.j()
i=i.ay?i.x:0
h=$.fK()
g=h.d?-1:1
$.cz=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b4)
g=$.fH
h=$.am.j()
l=h.ay?h.y:0
j=$.fK()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b4)
$.fH=i
$.fH=B.b.q(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.k(i*Math.cos($.cz)+j*Math.sin($.cz),0,-i*Math.sin($.cz)+j*Math.cos($.cz)).gac().a8(0,2)
j=$.k5()
if(!isFinite(b4)||b4<0)A.f(A.a6(b4,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.f(A.a6(e,"rate","must be finite and positive"))
s=Math.exp(-e*b4)
l=j.a
s=l.a2(0,f.ab(0,l).a8(0,1-s))
j.a=s
d=$.eK.j().nH($.S.j(),$.ag,$.eS(),s.a8(0,b4))
$.xr=d.a
if($.cg.j().a!==B.bU&&$.cg.j().a!==B.a7)$.ag=d.b
c=B.b.q(j.a.gu(0)/2,0,1)
s=$.DR()
$.zO=s.ja($.zO,$.eS().b,b4)
b=s.lD(b4,c)
s=$.eS()
l=$.zO
$.cV.j().i5(new A.k(s.a+b.a,l+b.b,s.c+b.c),$.cz,$.fH)
s=$.U.j().z
l=$.wb
l=l==null?b2:l.ghE()
a=A.Fo(l==null?B.kE:l,s)
s=$.cV.j()
l=$.S.j()
a0=A.JS(a,s,$.ag,l,$.hO)
l=a0.c
$.C8.j().j_(l)
a1=A.G(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b2
a3=b2
a4=b2
a5=b2
switch(s.a){case 0:a2=A.A2($.cV.j(),$.S.j(),$.ag)
break
case 1:a3=A.Dp($.cV.j(),$.S.j(),$.ag)
break
case 2:a4=A.Dq($.cV.j(),$.S.j(),$.ag)
break
case 3:l=$.cV.j()
k=$.S.j()
j=$.hO
a5=A.Do(l,$.ag,k,j)
break
case 4:case 5:break}$.C7.j().oL($.fL().eT($.U.j().gag().a,"status"),$.ag==="living-room")
l=$.am.j()
k=l.CW
if(k.bm(b3,l.d)||k.bm(b3,l.f)){l=$.U.j().gag()
k=a3==null
j=k?b2:a3.a
i=B.a.a3($.aP.j().hp(21),$.aP.j().gnv())
if(l.a===21&&j==="front-door"&&i){s=$.cg.j()
$.S.j()
s.jg(B.fk,A.ad(s.c,t.N))
B.a.k($.dn,"collapse")
A.fG("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bd.j().aL("mantle flame extinguished")}else if($.U.j().jd(1,1)){a2.d=!0
s=$.hL.j()
s.a=a2
s.b=2
$.bd.j().aL("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bd.j()
s.aL(a3.ax?"door opens":"door closes")
s=$.aB
if(s!=null)s.dm($.S.j(),a3.b)
s=$.aB
if(s!=null)s.eB($.S.j(),a3.a)
s=$.bm
if(s!=null)s.bI()}else if(a4!=null)if(a4.w){s=$.U.j()
if(s.f.dD(1)){a4.w=!1
$.bd.j().aL("shutter closes")}}else{a4.w=!0
$.bd.j().aL("shutter opens")}else if(s===B.cK){a6=a.eS()
s=A.B(a6)
l=t.E4
a7=A.bK(new A.I(a6,s.i("l(1)").a(new A.xy(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.bK(a6,l)
if(a7!=null)$.bd.j().bZ("noticed",a7.d)}else if(a5!=null){a8=a5.a
if(a8===$.S.j().x){$.bd.j().aL("the living-room sofa is ready for rest")
A.hU($.fE.j())
return}s=$.yI()
if(!a5.x)A.f(A.i("inventory placement is not pickable: "+a8))
a9=a5.y
if(a9==null)a9=a8
s=s.a
l=s.h(0,a8)
s.l(0,a8,(l==null?0:l)+1)
l=$.o.j()
l.setAttribute("data-inventory-last-focus",a9)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a9)
s=A.aV(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
b0=A.Ir(a9)
s=$.bd.j()
s.bZ("noticed",b0==null?"you inspect "+a9:b0)}}s=$.hL.j()
if(s.a!=null&&s.b>0){b1=$.hL.j().a
if(b1!=null&&A.A2($.cV.j(),$.S.j(),$.ag)!==b1){s=$.hL.j()
s.a=null
s.b=0}}A.IC(b4,a0)},
IC(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="rgba(12, 10, 14, 0.92)",c2=$.eO
if(c2==null)return
s=A.a($.C9.j().getBoundingClientRect())
r=A.a1(s.width)
q=A.a1(s.height)
if(r<=0||q<=0)return
p=$.cB()
p.oK(c3)
o=$.DO()
n=o.c
if(n<1)o.c=Math.min(1,n+c3*6)
n=c4.c
m=n!=null
l=o.iB(n,m,$.az.j().y)
o=$.c2()
k=o.a
j=o.d
i=c3*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.S.j()
j=$.ag
h=k.e.h(0,j)
g=$.w8.j().eo($.U.j().gag().a)
j=$.aB
f=j==null?null:j.gdu()
e=f!=null&&isFinite(f)?f:g.r
k=!$.az.j().y&&$.bl==null
j=p.a
i=p.b
d=p.c
c=p.e
b=p.f
a=p.r
p=p.w
a0=$.U.j().gag()
a1=$.bw.j().b
a2=$.cC()
a3=a2.y===B.cP
a4=h==null?null:h.a
if(a4==null)a4=$.ag
a2=a2.z?$.fL().eT($.U.j().gag().a,"status"):null
c2.e=e
a5=c2.a
a5.c+=c3
a6=a5.d
B.a.O(a6)
a7=A.a1(A.a(v.G.window).devicePixelRatio)
a8=B.b.aF(r*a7)
a9=B.b.aF(q*a7)
b0=a5.a
if(A.h(b0.width)!==a8||A.h(b0.height)!==a9){b0.width=a8
b0.height=a9}b0=a5.b
b0===$&&A.r()
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
A.aT(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}else{b0.fillStyle="rgba(0, 0, 0, 0.85)"
b0.beginPath()
A.aT(b0,"arc",[1,1,3,0,6.283185307179586],k)
b0.fill()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.aT(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}b0.restore()
a5.mV(n,q,r)}a5.mU(q,r,new A.rp(j,i,d,c,b,a,p))
b3=r-80-24
a5.aT("#d32f2f",2,8,c1,44,-0.08,160,b3,42)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='bold 14px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b4=B.d.q(B.b.aU(a1*60),0,1439)
b5=B.d.af(b4,60)
b6=B.d.R(b4,60)
b7=a3?B.d.R(b5+11,12)+1:b5
if(a3)b8=b5<12?" AM":" PM"
else b8=""
b0.fillText("DAY "+a0.a+"  \u2022  "+B.c.bC(B.d.t(b7),2,"0")+":"+B.c.bC(B.d.t(b6),2,"0")+b8,b3,42)
b0.restore()
a5.aT("#c49a45",1.8,6,c1,34,0.08,170,109,37)
b0.save()
b0.fillStyle="#c49a45"
b0.font='bold 13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bx(a4.toUpperCase(),142),109,37)
b0.restore()
if(a2!=null&&a2.length!==0){b9=Math.min(r*0.6,420)
c0=r*0.5
a5.aT("#f5f0e6",1.5,6,c1,32,-0.04,b9,c0,68)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bx(a2,b9-28),c0,68)
b0.restore()}a5.mY(q,r,e)
a5.mT(l,q,r)
a5.mW(q,r,o)
b0.restore();++c2.b
p=$.o.j()
p.setAttribute("data-renderer-gui-frame",""+c2.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ad(a6,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-temperature-c",B.b.F(c2.e,2))
p.setAttribute("data-renderer-gui-surface",""+c2.c+"x"+c2.d)},
Ir(a){var s,r,q,p,o=$.U.j().z.b,n=A.t(o).i("N<1,2>"),m=A.J(new A.N(o,n),n.i("p.E"))
B.a.Y(m,new A.xc())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.v)(m),++s){r=m[s]
n=$.fL().at
n===$&&A.r()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
J5(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cC().Q)return
if($.az.j().y||$.bl!=null||$.aP.j().r!=null)return
s=$.U.j().gag()
for(r=$.aP.j().hp(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
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
A.AM(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.k5().a=new A.k(0,0,0)
r=$.az.b
if(r===$.az)A.f(A.a9(""))
q=n.a
r.f0(q,k)
$.cB().bE(!0,B.bm,q,k)
A.zF()
A.D0(n)
return}},
J1(){var s,r,q,p,o,n,m=$.wb
if(m==null)return
s=$.U.j().gag()
for(r=m.c8(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){o=r[p]
n=$.U.b
if(n===$.U)A.f(A.a9(""))
if(!n.lG(o))continue
n=$.o.b
if(n===$.o)A.f(A.a9(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
ID(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbn()
if(p||o==null)return
p=$.az.j()
s=q.a
r=s.a
p.f0(r,o)
$.cB().bE(!0,B.bm,r,o)
A.zF()
A.D0(s)
if(q.d!==B.ac)A.zG()
A.fG("restored visitor")},
D0(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.U.j().ne("stranger-17-eileen-case")
r=$.fL().x
r===$&&A.r()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aE(q,!0,t.N):B.n
p=A.bK(r,t.N)
if(s==null||p==null)return
$.bd.j().bZ("inside the case",p+" \u201c"+s.d+"\u201d")},
J0(){var s,r,q,p,o,n
if(!$.cC().Q)return
s=$.U.j().gag()
r=$.na.j().mZ(s.a,s.b)
if(r.length===0)return
q=B.a.ga1(r)
$.na.j().b.k(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bd.j().bZ(o,q.e)
n=A.Je(p)
if(n!=null)B.a.k($.dn,"ambient-"+n)},
J4(){var s,r,q,p,o=$.U.j().gag()
if(o.b<20)return
s=o.a
if(!$.xw.k(0,s))return
r=$.fL().f
r===$&&A.r()
q=r.h(0,B.d.t(s))
r=t.j.b(q)?A.aE(q,!0,t.N):B.n
p=A.JP(r,$.U.j().b,s)
if(p!=null)$.bd.j().bZ("noticed",p)},
CQ(a){var s,r,q,p,o
if($.zs!=null)return
s=$.U.j().gag()
r=$.U.j().r.c
q=$.U.j().e.b
p=A.t(q).i("ap<2>")
o=A.EH(new A.p9(s.a,1-r,new A.I(new A.ap(q,p),p.i("l(p.E)").a(new A.xm()),p.i("I<p.E>")).gu(0),$.U.j().r.d,a))
if(o==null)return
A.CM(o)
A.k0("ending recorded")},
CM(a){var s,r,q,p
$.zs=a
$.CV=!0
s=$.o.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.B_($.U.j().z,r).length)
$.k5().a=new A.k(0,0,0)
A.hU($.jM.j())
s=$.fL().w
s===$&&A.r()
p=s.h(0,q)
s=t.j.b(p)?A.aE(p,!0,t.N):B.n
s=A.J(s,t.N)
B.a.K(s,A.B_($.U.j().z,r))
$.jM.j().j2(a,s)},
Ht(a){var s,r,q,p
A:{if("open"===a){s=B.aI
break A}if("chain"===a){s=B.cC
break A}if("through-door"===a){s=B.cD
break A}if("letterbox"===a){s=B.cE
break A}s=B.ah
break A}r=$.aP.j().m0(s)
if(s===B.aI){q=$.S.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aB
if(p!=null)p.dm($.S.j(),q.b)
p=$.aB
if(p!=null)p.eB($.S.j(),q.a)
p=$.bm
if(p!=null)p.bI()}}if(!(r instanceof A.m8)||s===B.ah){A.wH()
return}if(r.a.gbn()==null){A.zp()
A.wH()
return}A.zG()},
HA(){var s=$.aP.j().lE()
if(!(s instanceof A.j6)||s.b){A.zp()
A.wH()
return}if(s.a.gbn()==null){A.zp()
A.wH()
return}A.zG()},
zG(){var s,r,q,p,o,n,m,l,k,j=$.aP.j().r,i=j==null,h=i?null:j.gbn()
if(i||h==null)return
s=$.aP.j().gcd()
if(s==null){$.az.j().j1(h)
$.cB().bE(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.az.j().f1(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.az.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a8(k.a,k.b))}m.j3(l,r)
o=$.cB()
m=j.a.a
o.bE(!0,i?q:B.n,m,h)
if(!i){i=A.B(p)
k=A.bK(new A.I(p,i.i("l(1)").a(new A.xh(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.az.j()
q=k.c
i.f2(h,q)
o.bE(!0,B.n,m,h+"\n\n"+q)}}}A.D_()
A.zF()},
zF(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbn(),n=$.bm
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bC(B.d.t(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.zA===s)return
$.zA=s
r=n.dj(s,1)
p=$.dm
if(new A.nS(s,o).op(p.e===!0,r).length!==0)$.bd.j().aL(o)},
Hu(a){var s,r,q,p,o,n=$.aP.j().m1(a)
if(!(n instanceof A.m9))return
s=n.c
if(!$.U.j().lH(n.b,s))return
r=s.c
s=$.az.j()
q=n.a
p=q.gbn()
s.f2(p==null?"":p,r)
o=q.gbn()
if(o==null)o=""
$.cB().bE(!0,B.n,q.a.a,o+"\n\n"+r)
A.D_()
A.k0("saved after visitor answer")},
wH(){$.az.j().i0()
$.cB().O(0)
$.zA=null
$.am.j().dr($.o.j())},
D_(){var s,r,q,p,o=$.az.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.nc.j().eU(),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
m.push(new A.a8(p.a,B.a.ga6(p.c).t(0)))}o.j0(n,m)},
Hv(a){var s,r,q,p=$.aP.j().m2(a,!0,$.nc.j())
if(p==null)return
s=$.nc.j().mD(p,B.jH)
r=$.az.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.r()
r.textContent=B.R.bQ("",!0,q)
A.k0("saved after visitor citation")},
zp(){var s,r=$.S.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aB
if(s!=null)s.dm($.S.j(),r.b)
s=$.aB
if(s!=null)s.eB($.S.j(),r.a)
s=$.bm
if(s!=null)s.bI()}},
J3(){var s,r,q,p,o,n,m,l,k
for(s=$.S.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cg.b
if(k===$.cg)A.f(A.a9(""))
if(B.a.p(k.d,n+m)){l.d=!1
continue}}}},
JT(a){var s,r,q,p,o,n,m,l=$.S.j().e.h(0,a)
if(l==null||$.bw.j().gf9()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.z){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.q){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.ai){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.aj){o=$.bw.b
if(o===$.bw)A.f(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zI(a){var s,r=$.S.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dk
if(q.length===0)return 0.12
s=A.B(q)
return B.b.q(new A.I(q,s.i("l(1)").a(new A.xj()),s.i("I<1>")).gu(0)/q.length,0.12,1)},
Jd(a){var s,r=$.S.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dk
if(q.length===0)return 0
s=A.B(q)
return B.b.q(new A.I(q,s.i("l(1)").a(new A.xD()),s.i("I<1>")).gu(0)/q.length,0,1)},
J6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.x&&a1.b)a0=B.aP
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.z4(new A.j8(a1,s,B.b.q(q,0.35,0.98),B.b.q(p,0,1),2.5,0,18e3,1,0))
n=$.Ae()
m=n.z
l=B.a.bc(a3,0,new A.xx(),t.i)
k=$.DW()
q=B.b.q(q,0.35,0.98)
j=a0===B.x?0:r
n=n.y
i=B.b.q(l/900,0,1)
h=B.b.q(o.w/1000,0,1)
g=B.b.q(a2,0,0.5)
f=$.D3
$.D3=f+1
e=k.cq(new A.uW(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.U.j().b))
d=$.bm
s=d==null
if(!s){r=A.c([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jv([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.lK(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.oa(a.b,a.c,a.d,a.e,a.f)}s=$.o.j()
s.setAttribute("data-audio-weather-transmission",B.b.F(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.F(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.F(a4,3))},
Hj(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.aB
if(a0!=null){s=$.S.j()
r=$.ag
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.z4(new A.j8(a1,q,B.b.q(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.nq.bT($.ag,A.K7())
n=isFinite(a0.gdu())?a0.gdu():q
m=B.b.q(a0.giw(),0,1)
l=B.b.q((n-q)*8,0,400)
s=B.b.q(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.f(A.n("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.ao&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
g=Math.min(Math.max(0,0.5-j),h)
r=o.a=j+Math.max(0,g)
k=Math.max(0,l)
f=n>0.5
e=f?Math.min(r,k*a2/4008e4):0
o.a=r-e
o.b=i+e
d=f?B.b.q((n-0.5)*(1-s)*2e-8,0,0.000002):0
s=o.b
c=Math.min(s,d*a2)
o.b=s-c
s=f?B.b.q((n-0.5)/12,0,1):0
b=Math.max(m*0.8,Math.max(s,B.b.q(l/250,0,1)))
s=Math.exp(-a2/900)
r=o.c
s=r+(b-r)*(1-s)
o.c=s
a=Math.max(0,h-g)
o.hh()
r=o.a
return new A.v2(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
Jb(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.di
s=a3.aH(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=A.c([new A.fp("floor:"+r,new A.k(p,o,q),new A.k(p+s.a,o+0.05,q+s.c),a5,0.12)],t.uI)
if(a6==null)return n
for(r=a6.ie(r),m=J.O(r.a),r=new A.V(m,r.b,r.$ti.i("V<1>")),l=a6.c;r.m();){k=m.gn()
j=k.c
i=!0
if(!(k.d==="renderer-reference"&&!k.ay.r)){h=k.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.p(j.toLowerCase(),"stair")}if(i)continue
g=a6.bJ(j)
j=k.f.a
f=k.ip(g,l)
e=k.eI(g,l)
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
if(a1)A.f(A.n("collision box centre/extents must be finite",null))
k=new A.fp("inventory:"+a0,new A.k(d-b,c-i,j-h),new A.k(d+b,c+i,j+h),a,k)
k.A()
B.a.k(n,k)}return A.ad(n,t.qR)},
hE:function hE(a,b){this.a=a
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
_.cX=_.y2=null
_.ce=b2
_.cY=b3
_.d_=_.cZ=_.eh=0
_.hG=null
_.hH=2.25
_.d4=_.d3=_.d2=_.d1=_.d0=0
_.d5=!1
_.hL=_.hK=_.hJ=_.hI=_.ej=_.ei=null
_.hM=7
_.d7=_.d6=_.cf=_.hN=_.ek=0
_.d8=null
_.hO=_.n6=_.en=_.em=_.el=_.d9=0
_.aI=!1
_.da=null
_.ci=_.cg=0
_.ck=_.cj=null
_.hP=_.n7=$
_.hQ=null
_.hR=0},
vN:function vN(a){this.a=a},
vQ:function vQ(a,b,c){this.a=a
this.b=b
this.c=c},
vR:function vR(a){this.a=a},
vG:function vG(){},
vO:function vO(){},
vP:function vP(){},
vT:function vT(a){this.a=a},
vU:function vU(a){this.a=a},
vS:function vS(a,b,c){this.a=a
this.b=b
this.c=c},
vL:function vL(a,b,c){this.a=a
this.b=b
this.c=c},
vM:function vM(a,b,c){this.a=a
this.b=b
this.c=c},
vH:function vH(){},
vI:function vI(){},
vJ:function vJ(){},
vK:function vK(){},
vE:function vE(){},
vF:function vF(){},
vA:function vA(){},
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
mM:function mM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jq:function jq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ve:function ve(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wp:function wp(){},
wq:function wq(){},
wr:function wr(){},
wx:function wx(){},
wy:function wy(){},
wz:function wz(){},
wA:function wA(){},
wB:function wB(){},
wC:function wC(a){this.a=a},
wD:function wD(a){this.a=a},
wE:function wE(a){this.a=a},
ws:function ws(a){this.a=a},
wt:function wt(){},
wu:function wu(){},
wv:function wv(){},
ww:function ww(){},
wl:function wl(){},
wm:function wm(a){this.a=a},
wn:function wn(){},
wo:function wo(){},
wh:function wh(){},
wi:function wi(){},
wj:function wj(){},
wk:function wk(){},
x7:function x7(a,b){this.a=a
this.b=b},
x5:function x5(a){this.a=a},
x6:function x6(a){this.a=a},
xX:function xX(a,b){this.a=a
this.b=b},
xY:function xY(){},
xZ:function xZ(){},
y9:function y9(){},
yj:function yj(){},
yk:function yk(){},
yl:function yl(){},
ym:function ym(){},
yn:function yn(){},
yo:function yo(){},
yp:function yp(){},
y_:function y_(){},
y0:function y0(){},
y1:function y1(){},
y2:function y2(){},
y3:function y3(){},
y4:function y4(){},
y5:function y5(){},
y6:function y6(){},
y7:function y7(){},
y8:function y8(){},
ya:function ya(){},
yb:function yb(){},
yc:function yc(){},
yd:function yd(){},
ye:function ye(){},
yf:function yf(){},
yg:function yg(){},
yh:function yh(){},
yi:function yi(){},
x8:function x8(){},
x9:function x9(){},
xf:function xf(a){this.a=a},
xq:function xq(a){this.a=a},
xy:function xy(a){this.a=a},
xc:function xc(){},
xm:function xm(){},
xh:function xh(a){this.a=a},
xj:function xj(){},
xD:function xD(){},
xx:function xx(){},
Ds(a){return v.mangledGlobalNames[a]},
AM(a,b,c,d,e,f){var s=a[b]()
return s},
qt(a,b,c){var s=null
return c.a(A.AM(a,b,s,s,s,s))},
AZ(a,b){var s,r,q,p=A.J(B.cx.by(B.f.a0(a.ir(!1),null)),t.S),o=A.t(b).i("ac<1>"),n=A.J(new A.ac(b,o),o.i("p.E"))
B.a.X(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.v)(n),++s){r=n[s]
B.a.K(p,B.cx.by(r))
B.a.k(p,0)
q=b.h(0,r)
q.toString
B.a.K(p,q)}return A.FT(p)},
Jw(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b2.c!=null)return b2
s=b2.a
r=s.b
q=r*4
p=b2.b
o=J.DZ(B.r.ge6(p),p.byteOffset,p.byteLength)
n=t.S
m=A.m(n,t.L)
l=t.t
k=A.c([],l)
j=A.c([],t.n)
i=p.length
h=B.d.b9(i,r)
g=A.d7(h,0,!1,n)
for(n=o.length,f=0;f<h;++f){e=f*r
d=f*q
c=A.J8(o,d,q)
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
B.a.K(k,new Uint8Array(o.subarray(d,A.zo(d,d+q,n))))
for(b0=0;b0<r;++b0){a0=e+b0
if(!(a0<i))return A.d(p,a0)
B.a.k(j,p[a0])}}}b1=B.d.b9(j.length,r)>65536?new Uint32Array(A.W(g)):new Uint16Array(A.W(g))
return new A.bV(s,new Float32Array(A.W(j)),b1,b2.d)},
J8(a,b,c){var s,r,q,p
for(s=a.length,r=2166136261,q=0;q<c;++q){p=b+q
if(!(p<s))return A.d(a,p)
r=((r^a[p])>>>0)*16777619>>>0}return r},
FU(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.q(a*57.29577951308232,90,105)-90)/15*62},
yv(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.a6(b.gno(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gG().c.ae()
o=q*16
n=o+16
B.r.dB(s,o,n,p.a)
if(l)B.r.dB(r,o,n,p.ev().a)}m=a.a
A.q(m,"uInstanceModels",new A.x(B.eg,s))
if(l)A.q(m,"uInstanceNormalMatrices",new A.x(B.eg,r))
A.q(m,"uUseInstances",B.c4)},
Eu(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Et(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Df(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Je(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
ck(a,b,c){var s=B.b.q(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bk(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
Jv(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.b(B.ih)
s=t.N
r=t.z
q=A.aY(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.kK[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.m(s,r))
else if(k.b(m))p.l(0,n,A.aY(m,s,r))
else throw A.b(A.M('text.json section "'+n+'" must be an object',null,null))}return p},
JP(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbg(a)
s=new A.eG()
s.c0((b^274953^c)>>>0)
r=s.aX(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.yO.prototype={}
J.l3.prototype={
aa(a,b){return a===b},
gT(a){return A.iN(a)},
t(a){return"Instance of '"+A.lB(a)+"'"},
gad(a){return A.dq(A.zx(this))}}
J.l6.prototype={
t(a){return String(a)},
gT(a){return a?519018:218159},
gad(a){return A.dq(t.y)},
$ian:1,
$il:1}
J.is.prototype={
aa(a,b){return null==b},
t(a){return"null"},
gT(a){return 0},
$ian:1,
$iax:1}
J.iu.prototype={$iaj:1}
J.es.prototype={
gT(a){return 0},
gad(a){return B.ol},
t(a){return String(a)}}
J.lu.prototype={}
J.fm.prototype={}
J.dI.prototype={
t(a){var s=a[$.Dw()]
if(s==null)s=a[$.yF()]
if(s==null)return this.jk(a)
return"JavaScript function for "+J.c3(s)},
$if1:1}
J.ha.prototype={
gT(a){return 0},
t(a){return String(a)}}
J.hb.prototype={
gT(a){return 0},
t(a){return String(a)}}
J.w.prototype={
cV(a,b){return new A.b8(a,A.B(a).i("@<1>").S(b).i("b8<1,2>"))},
k(a,b){A.B(a).c.a(b)
a.$flags&1&&A.aU(a,29)
a.push(b)},
oj(a,b){var s
a.$flags&1&&A.aU(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.B9(b,null))
return a.splice(b,1)[0]},
a7(a,b){var s
a.$flags&1&&A.aU(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
K(a,b){var s
A.B(a).i("p<1>").a(b)
a.$flags&1&&A.aU(a,"addAll",2)
if(Array.isArray(b)){this.jG(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gn())},
jG(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.aC(a))
for(r=0;r<s;++r)a.push(b[r])},
O(a){a.$flags&1&&A.aU(a,"clear","clear")
a.length=0},
br(a,b,c){var s=A.B(a)
return new A.H(a,s.S(c).i("1(2)").a(b),s.i("@<1>").S(c).i("H<1,2>"))},
W(a,b){var s,r=A.d7(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.y(a[s]))
return r.join(b)},
bc(a,b,c,d){var s,r,q
d.a(b)
A.B(a).S(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.aC(a))}return r},
b5(a,b,c){var s,r,q,p=A.B(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.aC(a))}if(c!=null)return c.$0()
throw A.b(A.cK())},
an(a,b){return this.b5(a,b,null)},
a9(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aB(a,b,c){var s=a.length
if(b>s)throw A.b(A.b1(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.b1(c,b,s,"end",null))
if(b===c)return A.c([],A.B(a))
return A.c(a.slice(b,c),A.B(a))},
ga1(a){if(a.length>0)return a[0]
throw A.b(A.cK())},
ga6(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cK())},
gbg(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cK())
throw A.b(A.AI())},
N(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.aC(a))}return!1},
a3(a,b){var s,r
A.B(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.aC(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.B(a)
n.i("j(1,1)?").a(b)
a.$flags&2&&A.aU(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.I2()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.iH()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.i_(b,2))
if(p>0)this.l6(a,p)},
X(a){return this.Y(a,null)},
l6(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dC(a,b){var s,r,q,p
a.$flags&2&&A.aU(a,"shuffle")
s=a.length
while(s>1){r=b.aX(s);--s
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
gP(a){return a.length===0},
ga4(a){return a.length!==0},
t(a){return A.yN(a,"[","]")},
gv(a){return new J.eU(a,a.length,A.B(a).i("eU<1>"))},
gT(a){return A.iN(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.aU(a,"set length","change the length of")
if(b<0)throw A.b(A.b1(b,0,null,"newLength",null))
if(b>a.length)A.B(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.xM(a,b))
return a[b]},
l(a,b,c){A.B(a).c.a(c)
a.$flags&2&&A.aU(a)
if(!(b>=0&&b<a.length))throw A.b(A.xM(a,b))
a[b]=c},
eP(a,b){return new A.dW(a,b.i("dW<0>"))},
eq(a,b){var s
A.B(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gad(a){return A.dq(A.B(a))},
$iT:1,
$ip:1,
$iK:1}
J.l5.prototype={
oJ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lB(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.qu.prototype={}
J.eU.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.v(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iai:1}
J.h9.prototype={
H(a,b){var s
A.a1(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcm(b)
if(this.gcm(a)===s)return 0
if(this.gcm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcm(a){return a===0?1/a<0:a<0},
aF(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.bu(""+a+".toInt()"))},
hu(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.bu(""+a+".ceil()"))},
aU(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.bu(""+a+".floor()"))},
aE(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bu(""+a+".round()"))},
q(a,b,c){if(this.H(b,c)>0)throw A.b(A.xF(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.b(A.b1(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcm(a))return"-"+s
return s},
eL(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.b1(b,2,36,"radix",null))
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
gT(a){var s,r,q,p,o=a|0
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
return this.h9(a,b)},
af(a,b){return(a|0)===a?a/b|0:this.h9(a,b)},
h9(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bu("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
e1(a,b){var s
if(a>0)s=this.h8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lg(a,b){if(0>b)throw A.b(A.xF(b))
return this.h8(a,b)},
h8(a,b){return b>31?0:a>>>b},
j4(a,b){if(b<0)throw A.b(A.xF(b))
return this.lh(a,b)},
lh(a,b){if(b>31)return 0
return a>>>b},
gad(a){return A.dq(t.E)},
$ibp:1,
$iz:1,
$iby:1}
J.ir.prototype={
gad(a){return A.dq(t.S)},
$ian:1,
$ij:1}
J.l7.prototype={
gad(a){return A.dq(t.i)},
$ian:1}
J.er.prototype={
ho(a,b){return new A.mZ(b,a,0)},
bp(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aO(a,r-s)},
je(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.it){s=b.e
s=!(s==null?b.e=b.k_():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.kc(a,b)}},
bV(a,b,c,d){var s=A.fd(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kc(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.DY(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gn()
o=p.gf6()
n=p.geg()
q=n-o
if(q===0&&r===o)continue
B.a.k(m,this.I(a,r,o))
r=n}if(r<a.length||q>0)B.a.k(m,this.aO(a,r))
return m},
aq(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b1(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
U(a,b){return this.aq(a,b,0)},
I(a,b,c){return a.substring(b,A.fd(b,c,a.length))},
aO(a,b){return this.I(a,b,null)},
aZ(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.F8(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.F9(p,r):o
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
bC(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a8(c,s)+a},
dc(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b1(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bB(a,b){return this.dc(a,b,0)},
p(a,b){return A.K_(a,b,0)},
H(a,b){var s
A.u(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
gT(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gad(a){return A.dq(t.N)},
gu(a){return a.length},
$ian:1,
$ibp:1,
$irt:1,
$ie:1}
A.eD.prototype={
gv(a){return new A.i8(J.O(this.gba()),A.t(this).i("i8<1,2>"))},
gu(a){return J.cD(this.gba())},
gP(a){return J.k7(this.gba())},
ga4(a){return J.E1(this.gba())},
a9(a,b){return A.t(this).y[1].a(J.ny(this.gba(),b))},
ga1(a){return A.t(this).y[1].a(J.Aj(this.gba()))},
p(a,b){return J.Ai(this.gba(),b)},
t(a){return J.c3(this.gba())}}
A.i8.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iai:1}
A.eY.prototype={
gba(){return this.a}}
A.jf.prototype={$iT:1}
A.jd.prototype={
h(a,b){return this.$ti.y[1].a(J.b_(this.a,b))},
l(a,b,c){var s=this.$ti
J.b6(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.E2(this.a,b)},
k(a,b){var s=this.$ti
J.e6(this.a,s.c.a(s.y[1].a(b)))},
$iT:1,
$iK:1}
A.b8.prototype={
cV(a,b){return new A.b8(this.a,this.$ti.i("@<1>").S(b).i("b8<1,2>"))},
gba(){return this.a}}
A.hc.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dv.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.tk.prototype={
gE(){return 0}}
A.T.prototype={}
A.a_.prototype={
gv(a){var s=this
return new A.al(s,s.gu(s),A.t(s).i("al<a_.E>"))},
gP(a){return this.gu(this)===0},
ga1(a){if(this.gu(this)===0)throw A.b(A.cK())
return this.a9(0,0)},
p(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.aa(r.a9(0,s),b))return!0
if(q!==r.gu(r))throw A.b(A.aC(r))}return!1},
a3(a,b){var s,r,q=this
A.t(q).i("l(a_.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.a9(0,r)))return!1
if(s!==q.gu(q))throw A.b(A.aC(q))}return!0},
N(a,b){var s,r,q=this
A.t(q).i("l(a_.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.a9(0,r)))return!0
if(s!==q.gu(q))throw A.b(A.aC(q))}return!1},
W(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.a9(0,0))
if(o!==p.gu(p))throw A.b(A.aC(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.a9(0,q))
if(o!==p.gu(p))throw A.b(A.aC(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.a9(0,q))
if(o!==p.gu(p))throw A.b(A.aC(p))}return r.charCodeAt(0)==0?r:r}},
nz(a){return this.W(0,"")},
dv(a,b){return this.jj(0,A.t(this).i("l(a_.E)").a(b))},
br(a,b,c){var s=A.t(this)
return new A.H(this,s.S(c).i("1(a_.E)").a(b),s.i("@<a_.E>").S(c).i("H<1,2>"))},
bW(a,b){var s=A.t(this).i("a_.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bD(a){return this.bW(0,!0)},
b8(a){var s,r=this,q=A.yR(A.t(r).i("a_.E"))
for(s=0;s<r.gu(r);++s)q.k(0,r.a9(0,s))
return q}}
A.j1.prototype={
gkh(){var s=J.cD(this.a),r=this.c
if(r==null||r>s)return s
return r},
gli(){var s=J.cD(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cD(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gli()+b
if(b<0||r>=s.gkh())throw A.b(A.qj(b,s.gu(0),s,"index"))
return J.ny(s.a,r)},
bW(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aQ(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.AK(0,n):J.AJ(0,n)}r=A.d7(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.a9(n,o+q))
if(m.gu(n)<l)throw A.b(A.aC(p))}return r},
bD(a){return this.bW(0,!0)}}
A.al.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aQ(q),o=p.gu(q)
if(r.b!==o)throw A.b(A.aC(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0},
$iai:1}
A.cM.prototype={
gv(a){return new A.iy(J.O(this.a),this.b,A.t(this).i("iy<1,2>"))},
gu(a){return J.cD(this.a)},
gP(a){return J.k7(this.a)},
ga1(a){return this.b.$1(J.Aj(this.a))},
a9(a,b){return this.b.$1(J.ny(this.a,b))}}
A.dx.prototype={$iT:1}
A.iy.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.H.prototype={
gu(a){return J.cD(this.a)},
a9(a,b){return this.b.$1(J.ny(this.a,b))}}
A.I.prototype={
gv(a){return new A.V(J.O(this.a),this.b,this.$ti.i("V<1>"))}}
A.V.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iai:1}
A.ii.prototype={
gv(a){return new A.ij(J.O(this.a),this.b,B.f6,this.$ti.i("ij<1,2>"))}}
A.ij.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.O(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iai:1}
A.ig.prototype={
m(){return!1},
gn(){throw A.b(A.cK())},
$iai:1}
A.dW.prototype={
gv(a){return new A.j9(J.O(this.a),this.$ti.i("j9<1>"))}}
A.j9.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iai:1}
A.aD.prototype={
su(a,b){throw A.b(A.bu("Cannot change the length of a fixed-length list"))},
k(a,b){A.ci(a).i("aD.E").a(b)
throw A.b(A.bu("Cannot add to a fixed-length list"))}}
A.ex.prototype={
l(a,b,c){A.t(this).i("ex.E").a(c)
throw A.b(A.bu("Cannot modify an unmodifiable list"))},
su(a,b){throw A.b(A.bu("Cannot change the length of an unmodifiable list"))},
k(a,b){A.t(this).i("ex.E").a(b)
throw A.b(A.bu("Cannot add to an unmodifiable list"))}}
A.hz.prototype={}
A.bM.prototype={
gu(a){return J.cD(this.a)},
a9(a,b){var s=this.a,r=J.aQ(s)
return r.a9(s,r.gu(s)-1-b)}}
A.jK.prototype={}
A.a8.prototype={$r:"+(1,2)",$s:1}
A.fB.prototype={$r:"+height,width(1,2)",$s:2}
A.jr.prototype={$r:"+influence,light(1,2)",$s:3}
A.js.prototype={$r:"+influence,source(1,2)",$s:4}
A.aG.prototype={$r:"+(1,2,3)",$s:5}
A.bk.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.jt.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.ju.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.jv.prototype={
gE(){return this.a[3]},
$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",
$s:10}
A.ib.prototype={}
A.fW.prototype={
gP(a){return this.gu(this)===0},
ga4(a){return this.gu(this)!==0},
t(a){return A.yT(this)},
l(a,b,c){var s=A.t(this)
s.c.a(b)
s.y[1].a(c)
A.Em()},
gM(){return new A.bI(this.n4(),A.t(this).i("bI<P<1,2>>"))},
n4(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gM(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga5(),o=o.gv(o),n=A.t(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bs(a,b,c,d){var s=A.m(c,d)
this.aJ(0,new A.oL(this,A.t(this).S(c).S(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.oL.prototype={
$2(a,b){var s=A.t(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.t(this.a).i("~(1,2)")}}
A.a4.prototype={
gu(a){return this.b.length},
gfL(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
L(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.L(b))return null
return this.b[this.a[b]]},
aJ(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfL()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga5(){return new A.fx(this.gfL(),this.$ti.i("fx<1>"))},
gak(){return new A.fx(this.b,this.$ti.i("fx<2>"))}}
A.fx.prototype={
gu(a){return this.a.length},
gP(a){return 0===this.a.length},
ga4(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.dY(s,s.length,this.$ti.i("dY<1>"))}}
A.dY.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iai:1}
A.d2.prototype={
bj(){var s=this,r=s.$map
if(r==null){r=new A.f5(s.$ti.i("f5<1,2>"))
A.D9(s.a,r)
s.$map=r}return r},
L(a){return this.bj().L(a)},
h(a,b){return this.bj().h(0,b)},
aJ(a,b){this.$ti.i("~(1,2)").a(b)
this.bj().aJ(0,b)},
ga5(){var s=this.bj()
return new A.ac(s,A.t(s).i("ac<1>"))},
gak(){var s=this.bj()
return new A.ap(s,A.t(s).i("ap<2>"))},
gu(a){return this.bj().a}}
A.fX.prototype={
k(a,b){A.t(this).c.a(b)
A.En()}}
A.aW.prototype={
gu(a){return this.b},
gP(a){return this.b===0},
ga4(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dY(s,s.length,r.$ti.i("dY<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b8(a){return A.f6(this,this.$ti.c)}}
A.h6.prototype={
gu(a){return this.a.length},
gP(a){return this.a.length===0},
ga4(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.dY(s,s.length,this.$ti.i("dY<1>"))},
bj(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.f5(o.$ti.i("f5<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
n.l(0,p,p)}o.$map=n}return n},
p(a,b){return this.bj().L(b)},
b8(a){return A.f6(this,this.$ti.c)}}
A.rR.prototype={
$0(){return B.b.aU(1000*this.a.now())},
$S:38}
A.iU.prototype={}
A.ut.prototype={
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
A.iG.prototype={
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
A.rm.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ih.prototype={}
A.jx.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idf:1}
A.ek.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Dt(r==null?"unknown":r)+"'"},
gad(a){var s=A.zY(this)
return A.dq(s==null?A.ci(this):s)},
$if1:1,
goX(){return this},
$C:"$1",
$R:1,
$D:null}
A.kp.prototype={$C:"$0",$R:0}
A.kq.prototype={$C:"$2",$R:2}
A.lZ.prototype={}
A.lX.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Dt(s)+"'"}}
A.fP.prototype={
aa(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fP))return!1
return this.$_target===b.$_target&&this.a===b.a},
gT(a){return(A.nw(this.a)^A.iN(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lB(this.a)+"'")}}
A.lL.prototype={
t(a){return"RuntimeError: "+this.a}}
A.co.prototype={
gu(a){return this.a},
gP(a){return this.a===0},
ga4(a){return this.a!==0},
ga5(){return new A.ac(this,A.t(this).i("ac<1>"))},
gak(){return new A.ap(this,A.t(this).i("ap<2>"))},
gM(){return new A.N(this,A.t(this).i("N<1,2>"))},
L(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.np(a)},
np(a){var s=this.d
if(s==null)return!1
return this.cl(this.fI(s,a),a)>=0},
K(a,b){A.t(this).i("X<1,2>").a(b).aJ(0,new A.qD(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nq(b)},
nq(a){var s,r,q=this.d
if(q==null)return null
s=this.fI(q,a)
r=this.cl(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.t(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fd(s==null?q.b=q.dY():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fd(r==null?q.c=q.dY():r,b,c)}else q.ns(b,c)},
ns(a,b){var s,r,q,p,o=this,n=A.t(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dY()
r=o.dd(a)
q=s[r]
if(q==null)s[r]=[o.dZ(a,b)]
else{p=o.cl(q,a)
if(p>=0)q[p].b=b
else q.push(o.dZ(a,b))}},
bT(a,b){var s,r,q=this,p=A.t(q)
p.c.a(a)
p.i("2()").a(b)
if(q.L(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
a7(a,b){var s=this
if(typeof b=="string")return s.fa(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fa(s.c,b)
else return s.nr(b)},
nr(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dd(a)
r=n[s]
q=o.cl(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fb(p)
if(r.length===0)delete n[s]
return p.b},
O(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dF()}},
aJ(a,b){var s,r,q=this
A.t(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.aC(q))
s=s.c}},
fd(a,b,c){var s,r=A.t(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dZ(b,c)
else s.b=c},
fa(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fb(s)
delete a[b]
return s.b},
dF(){this.r=this.r+1&1073741823},
dZ(a,b){var s=this,r=A.t(s),q=new A.qN(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dF()
return q},
fb(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dF()},
dd(a){return J.aM(a)&1073741823},
fI(a,b){return a[this.dd(b)]},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
t(a){return A.yT(this)},
dY(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iyQ:1}
A.qD.prototype={
$2(a,b){var s=this.a,r=A.t(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.t(this.a).i("~(1,2)")}}
A.qN.prototype={}
A.ac.prototype={
gu(a){return this.a.a},
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bU(s,s.r,s.e,this.$ti.i("bU<1>"))},
p(a,b){return this.a.L(b)}}
A.bU.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aC(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iai:1}
A.ap.prototype={
gu(a){return this.a.a},
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.ae(s,s.r,s.e,this.$ti.i("ae<1>"))}}
A.ae.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aC(q))
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
return new A.cL(s,s.r,s.e,this.$ti.i("cL<1,2>"))}}
A.cL.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aC(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iai:1}
A.f5.prototype={
dd(a){return A.Jp(a)&1073741823},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.xT.prototype={
$1(a){return this.a(a)},
$S:13}
A.xU.prototype={
$2(a,b){return this.a(a,b)},
$S:111}
A.xV.prototype={
$1(a){return this.a(A.u(a))},
$S:41}
A.bj.prototype={
gad(a){return A.dq(this.fJ())},
fJ(){return A.JB(this.$r,this.cI())},
t(a){return this.he(!1)},
he(a){var s,r,q,p,o,n=this.kl(),m=this.cI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.B6(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kl(){var s,r=this.$s
while($.vV.length<=r)B.a.k($.vV,null)
s=$.vV[r]
if(s==null){s=this.jZ()
B.a.l($.vV,r,s)}return s},
jZ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.qs(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ad(j,k)}}
A.dZ.prototype={
cI(){return[this.a,this.b]},
aa(a,b){if(b==null)return!1
return b instanceof A.dZ&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gT(a){return A.cO(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.e_.prototype={
cI(){return[this.a,this.b,this.c]},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.e_&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gT(a){var s=this
return A.cO(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.hD.prototype={
cI(){return this.a},
aa(a,b){if(b==null)return!1
return b instanceof A.hD&&this.$s===b.$s&&A.GM(this.a,b.a)},
gT(a){return A.cO(this.$s,A.Fn(this.a),B.h,B.h,B.h,B.h)}}
A.it.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkD(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.AO(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
k_(){var s,r=this.a
if(!B.c.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ho(a,b){return new A.mn(this,b,0)},
kk(a,b){var s,r=this.gkD()
if(r==null)r=A.fF(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mI(s)},
$irt:1,
$iFE:1}
A.mI.prototype={
gf6(){return this.b.index},
geg(){var s=this.b
return s.index+s[0].length},
$ihg:1,
$iiO:1}
A.mn.prototype={
gv(a){return new A.mo(this.a,this.b,this.c)}}
A.mo.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kk(l,s)
if(p!=null){m.d=p
o=p.geg()
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
A.j0.prototype={
geg(){return this.a+this.c.length},
$ihg:1,
gf6(){return this.a}}
A.mZ.prototype={
gv(a){return new A.n_(this.a,this.b,this.c)},
ga1(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.j0(r,s)
throw A.b(A.cK())}}
A.n_.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.j0(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iai:1}
A.vf.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a9(""))
return s}}
A.et.prototype={
gad(a){return B.oe},
hr(a,b,c){A.wf(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hq(a,b,c){A.wf(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$ian:1,
$iet:1}
A.hi.prototype={$ihi:1}
A.iE.prototype={
ge6(a){if(((a.$flags|0)&2)!==0)return new A.w1(a.buffer)
else return a.buffer},
kx(a,b,c,d){var s=A.b1(b,0,c,d,null)
throw A.b(s)},
fk(a,b,c,d){if(b>>>0!==b||b>c)this.kx(a,b,c,d)}}
A.w1.prototype={
hr(a,b,c){var s=A.B1(this.a,b,c)
s.$flags=3
return s},
hq(a,b,c){var s=A.Fk(this.a,b,c)
s.$flags=3
return s}}
A.lj.prototype={
gad(a){return B.of},
$ian:1}
A.bq.prototype={
gu(a){return a.length},
h5(a,b,c,d,e){var s,r,q=a.length
this.fk(a,b,q,"start")
this.fk(a,c,q,"end")
if(b>c)throw A.b(A.b1(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.n(e,null))
r=d.length
if(r-e<s)throw A.b(A.i("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic5:1}
A.iC.prototype={
h(a,b){A.e3(b,a,a.length)
return a[b]},
l(a,b,c){A.aA(c)
a.$flags&2&&A.aU(a)
A.e3(b,a,a.length)
a[b]=c},
dB(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.aU(a,5)
this.h5(a,b,c,d,0)
return},
$iT:1,
$ip:1,
$iK:1}
A.iD.prototype={
l(a,b,c){A.h(c)
a.$flags&2&&A.aU(a)
A.e3(b,a,a.length)
a[b]=c},
iU(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.aU(a,5)
this.h5(a,b,c,d,e)
return},
$iT:1,
$ip:1,
$iK:1}
A.iB.prototype={
gad(a){return B.og},
aB(a,b,c){return new Float32Array(a.subarray(b,A.zo(b,c,a.length)))},
$ian:1,
$ipj:1}
A.lk.prototype={
gad(a){return B.oh},
$ian:1,
$ipk:1}
A.ll.prototype={
gad(a){return B.oi},
h(a,b){A.e3(b,a,a.length)
return a[b]},
$ian:1}
A.lm.prototype={
gad(a){return B.oj},
h(a,b){A.e3(b,a,a.length)
return a[b]},
$ian:1}
A.ln.prototype={
gad(a){return B.ok},
h(a,b){A.e3(b,a,a.length)
return a[b]},
$ian:1}
A.lo.prototype={
gad(a){return B.on},
h(a,b){A.e3(b,a,a.length)
return a[b]},
$ian:1,
$iuv:1}
A.lp.prototype={
gad(a){return B.oo},
h(a,b){A.e3(b,a,a.length)
return a[b]},
$ian:1,
$iuw:1}
A.f9.prototype={
gad(a){return B.op},
gu(a){return a.length},
h(a,b){A.e3(b,a,a.length)
return a[b]},
$ian:1,
$if9:1}
A.iF.prototype={
gad(a){return B.oq},
gu(a){return a.length},
h(a,b){A.e3(b,a,a.length)
return a[b]},
aB(a,b,c){return new Uint8Array(a.subarray(b,A.zo(b,c,a.length)))},
$ian:1,
$ic0:1}
A.jm.prototype={}
A.jn.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.cR.prototype={
i(a){return A.jB(v.typeUniverse,this,a)},
S(a){return A.BZ(v.typeUniverse,this,a)}}
A.mB.prototype={}
A.n2.prototype={
t(a){return A.bR(this.a,null)}}
A.mz.prototype={
t(a){return this.a}}
A.hH.prototype={$idS:1}
A.vb.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:19}
A.va.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:81}
A.vc.prototype={
$0(){this.a.$0()},
$S:14}
A.vd.prototype={
$0(){this.a.$0()},
$S:14}
A.vY.prototype={
jE(a,b){if(self.setTimeout!=null)self.setTimeout(A.i_(new A.vZ(this,b),0),a)
else throw A.b(A.bu("`setTimeout()` not found."))}}
A.vZ.prototype={
$0(){this.b.$0()},
$S:0}
A.mp.prototype={
e7(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dI(a)
else{s=r.a
if(q.i("aS<1>").b(a))s.fi(a)
else s.cG(a)}},
e8(a,b){var s=this.a
if(this.b)s.bv(new A.bn(a,b))
else s.cE(new A.bn(a,b))}}
A.wc.prototype={
$1(a){return this.a.$2(0,a)},
$S:20}
A.wd.prototype={
$2(a,b){this.a.$2(1,new A.ih(a,t.l.a(b)))},
$S:161}
A.xE.prototype={
$2(a,b){this.a(A.h(a),b)},
$S:188}
A.cf.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
la(a,b){var s,r,q
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
o.d=null}q=o.la(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.BT
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
o.a=A.BT
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.i("sync*"))}return!1},
ly(a){var s,r,q=this
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
A.pq.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fq(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ah(p)
q=A.cX(p)
l=r
o=q
n=A.zy(l,o)
l=new A.bn(l,o)
m.b.bv(l)
return}m.b.fq(s)}},
$S:0}
A.pt.prototype={
$2(a,b){var s,r,q=this
A.fF(a)
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
$S:171}
A.ps.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.b6(r,k.b,a)
if(J.aa(s,0)){q=A.c([],j.i("w<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.v)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.e6(q,l)}k.c.cG(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bv(new A.bn(q,o))}},
$S(){return this.d.i("ax(0)")}}
A.mt.prototype={
e8(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.cE(A.I1(a,b))},
hv(a){return this.e8(a,null)}}
A.jb.prototype={
e7(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.dI(r.i("1/").a(a))}}
A.dX.prototype={
nE(a){if((this.c&15)!==6)return!0
return this.b.b.eH(t.bl.a(this.d),a.a,t.y,t.K)},
nf(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.oG(q,m,a.b,o,n,t.l)
else p=l.eH(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ah(s))){if((r.c&1)!==0)throw A.b(A.n("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.n("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
eJ(a,b,c){var s,r,q=this.$ti
q.S(c).i("1/(2)").a(a)
s=$.ar
if(s===B.B){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.a6(b,"onError",u.c))}else{c.i("@<0/>").S(q.c).i("1(2)").a(a)
b=A.CO(b,s)}r=new A.as(s,c.i("as<0>"))
this.cD(new A.dX(r,3,a,b,q.i("@<1>").S(c).i("dX<1,2>")))
return r},
hc(a,b,c){var s,r=this.$ti
r.S(c).i("1/(2)").a(a)
s=new A.as($.ar,c.i("as<0>"))
this.cD(new A.dX(s,19,a,b,r.i("@<1>").S(c).i("dX<1,2>")))
return s},
ld(a){this.a=this.a&1|16
this.c=a},
cF(a){this.a=a.a&30|this.a&1
this.c=a.c},
cD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cD(a)
return}r.cF(s)}A.nn(null,null,r.b,t.O.a(new A.vi(r,a)))}},
fU(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fU(a)
return}m.cF(n)}l.a=m.cO(a)
A.nn(null,null,m.b,t.O.a(new A.vn(l,m)))}},
c6(){var s=t.F.a(this.c)
this.c=null
return this.cO(s)},
cO(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fq(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aS<1>").b(a))A.vl(a,r,!0)
else{s=r.c6()
q.c.a(a)
r.a=8
r.c=a
A.fv(r,s)}},
cG(a){var s,r=this
r.$ti.c.a(a)
s=r.c6()
r.a=8
r.c=a
A.fv(r,s)},
jY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c6()
q.cF(a)
A.fv(q,r)},
bv(a){var s=this.c6()
this.ld(a)
A.fv(this,s)},
dI(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aS<1>").b(a)){this.fi(a)
return}this.jI(a)},
jI(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nn(null,null,s.b,t.O.a(new A.vk(s,a)))},
fi(a){A.vl(this.$ti.i("aS<1>").a(a),this,!1)
return},
cE(a){this.a^=2
A.nn(null,null,this.b,t.O.a(new A.vj(this,a)))},
$iaS:1}
A.vi.prototype={
$0(){A.fv(this.a,this.b)},
$S:0}
A.vn.prototype={
$0(){A.fv(this.b,this.a.a)},
$S:0}
A.vm.prototype={
$0(){A.vl(this.a.a,this.b,!0)},
$S:0}
A.vk.prototype={
$0(){this.a.cG(this.b)},
$S:0}
A.vj.prototype={
$0(){this.a.bv(this.b)},
$S:0}
A.vq.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.oF(t.pF.a(q.d),t.z)}catch(p){s=A.ah(p)
r=A.cX(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nP(q)
n=k.a
n.c=new A.bn(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.eJ(new A.vr(l,m),new A.vs(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vr.prototype={
$1(a){this.a.jY(this.b)},
$S:19}
A.vs.prototype={
$2(a,b){A.fF(a)
t.l.a(b)
this.a.bv(new A.bn(a,b))},
$S:129}
A.vp.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eH(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ah(l)
r=A.cX(l)
q=s
p=r
if(p==null)p=A.nP(q)
o=this.a
o.c=new A.bn(q,p)
o.b=!0}},
$S:0}
A.vo.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nE(s)&&p.a.e!=null){p.c=p.a.nf(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.cX(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nP(p)
m=l.b
m.c=new A.bn(p,n)
p=m}p.b=!0}},
$S:0}
A.mq.prototype={}
A.mY.prototype={}
A.jJ.prototype={$iBN:1}
A.mR.prototype={
oH(a){var s,r,q
t.O.a(a)
try{if(B.B===$.ar){a.$0()
return}A.CT(null,null,this,a,t.H)}catch(q){s=A.ah(q)
r=A.cX(q)
A.zL(A.fF(s),t.l.a(r))}},
ht(a){return new A.vW(this,t.O.a(a))},
oF(a,b){b.i("0()").a(a)
if($.ar===B.B)return a.$0()
return A.CT(null,null,this,a,b)},
eH(a,b,c,d){c.i("@<0>").S(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.B)return a.$1(b)
return A.II(null,null,this,a,b,c,d)},
oG(a,b,c,d,e,f){d.i("@<0>").S(e).S(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.B)return a.$2(b,c)
return A.IH(null,null,this,a,b,c,d,e,f)},
il(a,b,c,d){return b.i("@<0>").S(c).S(d).i("1(2,3)").a(a)}}
A.vW.prototype={
$0(){return this.a.oH(this.b)},
$S:0}
A.xn.prototype={
$0(){A.EM(this.a,this.b)},
$S:0}
A.jg.prototype={
gu(a){return this.a},
gP(a){return this.a===0},
ga4(a){return this.a!==0},
ga5(){return new A.fw(this,this.$ti.i("fw<1>"))},
gak(){var s=this.$ti
return A.ld(new A.fw(this,s.i("fw<1>")),new A.vu(this),s.c,s.y[1])},
L(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.k7(a)},
k7(a){var s=this.d
if(s==null)return!1
return this.bw(this.fp(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.BP(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.BP(q,b)
return r}else return this.kp(b)},
kp(a){var s,r,q=this.d
if(q==null)return null
s=this.fp(q,a)
r=this.bw(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fn(s==null?m.b=A.z8():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fn(r==null?m.c=A.z8():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.z8()
p=A.nw(b)&1073741823
o=q[p]
if(o==null){A.z9(q,p,[b,c]);++m.a
m.e=null}else{n=m.bw(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aJ(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fo()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.aC(m))}},
fo(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.d7(i.a,null,!1,t.z)
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
fn(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.z9(a,b,c)},
fp(a,b){return a[A.nw(b)&1073741823]}}
A.vu.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.ji.prototype={
bw(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fw.prototype={
gu(a){return this.a.a},
gP(a){return this.a.a===0},
ga4(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.jh(s,s.fo(),this.$ti.i("jh<1>"))},
p(a,b){return this.a.L(b)}}
A.jh.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aC(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iai:1}
A.cw.prototype={
fR(){return new A.cw(A.t(this).i("cw<1>"))},
gv(a){var s=this,r=new A.fy(s,s.r,A.t(s).i("fy<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gP(a){return this.a===0},
ga4(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.k6(b)},
k6(a){var s=this.d
if(s==null)return!1
return this.bw(s[this.dM(a)],a)>=0},
ga1(a){var s=this.e
if(s==null)throw A.b(A.i("No elements"))
return A.t(this).c.a(s.a)},
k(a,b){var s,r,q=this
A.t(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fm(s==null?q.b=A.za():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fm(r==null?q.c=A.za():r,b)}else return q.jF(b)},
jF(a){var s,r,q,p=this
A.t(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.za()
r=p.dM(a)
q=s[r]
if(q==null)s[r]=[p.dL(a)]
else{if(p.bw(q,a)>=0)return!1
q.push(p.dL(a))}return!0},
a7(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fX(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fX(s.c,b)
else return s.l5(b)},
l5(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dM(a)
r=n[s]
q=o.bw(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hg(p)
return!0},
kn(a,b){var s,r,q,p,o,n=this,m=A.t(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.aC(n))
if(!0===o)n.a7(0,r)}},
O(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dX()}},
fm(a,b){A.t(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dL(b)
return!0},
fX(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hg(s)
delete a[b]
return!0},
dX(){this.r=this.r+1&1073741823},
dL(a){var s,r=this,q=new A.mH(A.t(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dX()
return q},
hg(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dX()},
dM(a){return J.aM(a)&1073741823},
bw(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iAU:1}
A.mH.prototype={}
A.fy.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aC(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iai:1}
A.qO.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:89}
A.a3.prototype={
gv(a){return new A.al(a,this.gu(a),A.ci(a).i("al<a3.E>"))},
a9(a,b){return this.h(a,b)},
gP(a){return this.gu(a)===0},
ga4(a){return!this.gP(a)},
ga1(a){if(this.gu(a)===0)throw A.b(A.cK())
return this.h(a,0)},
p(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.aa(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.b(A.aC(a))}return!1},
a3(a,b){var s,r
A.ci(a).i("l(a3.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.b(A.aC(a))}return!0},
N(a,b){var s,r
A.ci(a).i("l(a3.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.b(A.aC(a))}return!1},
W(a,b){var s
if(this.gu(a)===0)return""
s=A.z1("",a,b)
return s.charCodeAt(0)==0?s:s},
eP(a,b){return new A.dW(a,b.i("dW<0>"))},
br(a,b,c){var s=A.ci(a)
return new A.H(a,s.S(c).i("1(a3.E)").a(b),s.i("@<a3.E>").S(c).i("H<1,2>"))},
k(a,b){var s
A.ci(a).i("a3.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.l(a,s,b)},
cV(a,b){return new A.b8(a,A.ci(a).i("@<a3.E>").S(b).i("b8<1,2>"))},
n8(a,b,c,d){var s
A.ci(a).i("a3.E?").a(d)
A.fd(b,c,this.gu(a))
for(s=b;s<c;++s)this.l(a,s,d)},
t(a){return A.yN(a,"[","]")},
$iT:1,
$ip:1,
$iK:1}
A.af.prototype={
aJ(a,b){var s,r,q,p=A.t(this)
p.i("~(af.K,af.V)").a(b)
for(s=this.ga5(),s=s.gv(s),p=p.i("af.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gM(){return this.ga5().br(0,new A.qQ(this),A.t(this).i("P<af.K,af.V>"))},
bs(a,b,c,d){var s,r,q,p,o,n=A.t(this)
n.S(c).S(d).i("P<1,2>(af.K,af.V)").a(b)
s=A.m(c,d)
for(r=this.ga5(),r=r.gv(r),n=n.i("af.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
lA(a){var s,r
for(s=J.O(A.t(this).i("p<P<af.K,af.V>>").a(a));s.m();){r=s.gn()
this.l(0,r.a,r.b)}},
L(a){return this.ga5().p(0,a)},
gu(a){var s=this.ga5()
return s.gu(s)},
gP(a){var s=this.ga5()
return s.gP(s)},
ga4(a){var s=this.ga5()
return s.ga4(s)},
gak(){return new A.jj(this,A.t(this).i("jj<af.K,af.V>"))},
t(a){return A.yT(this)},
$iX:1}
A.qQ.prototype={
$1(a){var s=this.a,r=A.t(s)
r.i("af.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("af.V").a(s)
return new A.P(a,s,r.i("P<af.K,af.V>"))},
$S(){return A.t(this.a).i("P<af.K,af.V>(af.K)")}}
A.qR.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:31}
A.jj.prototype={
gu(a){var s=this.a
return s.gu(s)},
gP(a){var s=this.a
return s.gP(s)},
ga4(a){var s=this.a
return s.ga4(s)},
ga1(a){var s=this.a,r=s.ga5()
r=s.h(0,r.ga1(r))
return r==null?this.$ti.y[1].a(r):r},
gv(a){var s=this.a,r=s.ga5()
return new A.jk(r.gv(r),s,this.$ti.i("jk<1,2>"))}}
A.jk.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.jC.prototype={
l(a,b,c){var s=A.t(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bu("Cannot modify unmodifiable map"))}}
A.hf.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.t(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
L(a){return this.a.L(a)},
aJ(a,b){this.a.aJ(0,A.t(this).i("~(1,2)").a(b))},
gP(a){var s=this.a
return s.gP(s)},
ga4(a){var s=this.a
return s.ga4(s)},
gu(a){var s=this.a
return s.gu(s)},
ga5(){return this.a.ga5()},
t(a){return this.a.t(0)},
gak(){return this.a.gak()},
gM(){return this.a.gM()},
bs(a,b,c,d){return this.a.bs(0,A.t(this).S(c).S(d).i("P<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.ey.prototype={}
A.dd.prototype={
gP(a){return this.gu(this)===0},
ga4(a){return this.gu(this)!==0},
K(a,b){var s
for(s=J.O(A.t(this).i("p<1>").a(b));s.m();)this.k(0,s.gn())},
bA(a){var s,r,q=this.b8(0)
for(s=this.gv(this);s.m();){r=s.gn()
if(a.p(0,r))q.a7(0,r)}return q},
t(a){return A.yN(this,"{","}")},
a3(a,b){var s
A.t(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c3(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.y(q.gn())
while(q.m())}else{r=s
do r=r+b+A.y(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.t(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cK())
return s.gn()},
a9(a,b){var s,r
A.lG(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.qj(b,b-r,this,"index"))},
$iT:1,
$ip:1,
$idP:1}
A.jw.prototype={
bA(a){var s,r,q,p=this,o=p.fR()
for(s=A.fz(p,p.r,A.t(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.k(0,q)}return o},
b8(a){var s=this.fR()
s.K(0,this)
return s}}
A.n3.prototype={
k(a,b){this.$ti.c.a(b)
return A.GY()}}
A.hA.prototype={
p(a,b){return this.a.p(0,b)},
gu(a){return this.a.a},
gv(a){var s=this.a
return A.fz(s,s.r,A.t(s).c)},
b8(a){return this.a.b8(0)}}
A.hI.prototype={}
A.jD.prototype={}
A.mF.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kY(b):s}},
gu(a){return this.b==null?this.c.a:this.bF().length},
gP(a){return this.gu(0)===0},
ga4(a){return this.gu(0)>0},
ga5(){if(this.b==null){var s=this.c
return new A.ac(s,A.t(s).i("ac<1>"))}return new A.mG(this)},
gak(){var s,r=this
if(r.b==null){s=r.c
return new A.ap(s,A.t(s).i("ap<2>"))}return A.ld(r.bF(),new A.vw(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.u(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.L(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lq().l(0,b,c)},
L(a){if(this.b==null)return this.c.L(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aJ(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aJ(0,b)
s=o.bF()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.wF(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aC(o))}},
bF(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
lq(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bF()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.O(r)
n.a=n.b=null
return n.c=s},
kY(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.wF(this.a[a])
return this.b[a]=s}}
A.vw.prototype={
$1(a){return this.a.h(0,A.u(a))},
$S:41}
A.mG.prototype={
gu(a){return this.a.gu(0)},
a9(a,b){var s=this.a
if(s.b==null)s=s.ga5().a9(0,b)
else{s=s.bF()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.ga5()
s=s.gv(s)}else{s=s.bF()
s=new J.eU(s,s.length,A.B(s).i("eU<1>"))}return s},
p(a,b){return this.a.L(b)}}
A.w4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:51}
A.w3.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:51}
A.kb.prototype={
mG(a,b){t.L.a(a)
if(b===!0)return B.ez.by(a)
else return B.ey.by(a)}}
A.w_.prototype={
by(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.fd(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.b(A.M("Invalid value in input: "+o,null,null))
return this.k9(a,0,r)}}return A.z2(a,0,r)},
k9(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.ay((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.kc.prototype={}
A.kj.prototype={
nI(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fd(a4,a5,a2)
s=$.DI()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.xR(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.xR(a3.charCodeAt(g))
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
g.a+=B.c.I(a3,p,q)
c=A.ay(j)
g.a+=c
p=k
continue}}throw A.b(A.M("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.I(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.An(a3,m,a5,n,l,r)
else{b=B.d.R(r-1,4)+1
if(b===1)throw A.b(A.M(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.bV(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.An(a3,m,a5,n,l,a)
else{b=B.d.R(a,4)
if(b===1)throw A.b(A.M(a1,a3,a5))
if(b>1)a3=B.c.bV(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ot.prototype={}
A.el.prototype={}
A.ku.prototype={}
A.kG.prototype={}
A.iv.prototype={
t(a){var s=A.kH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.la.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.l9.prototype={
ai(a,b){var s=A.Iu(a,this.gmJ().a)
return s},
a0(a,b){var s=A.GC(a,this.gn1().b,null)
return s},
gn1(){return B.jN},
gmJ(){return B.jM}}
A.qF.prototype={}
A.qE.prototype={}
A.vy.prototype={
iz(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.I(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.I(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.I(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.I(a,r,m)},
dJ(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.la(a,null))}B.a.k(s,a)},
dw(a){var s,r,q,p,o=this
if(o.iy(a))return
o.dJ(a)
try{s=o.b.$1(a)
if(!o.iy(s)){q=A.AQ(a,null,o.gfT())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ah(p)
q=A.AQ(a,r,o.gfT())
throw A.b(q)}},
iy(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.iz(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dJ(a)
q.oV(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dJ(a)
r=q.oW(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
oV(a){var s,r,q=this.c
q.a+="["
s=J.aQ(a)
if(s.ga4(a)){this.dw(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.dw(s.h(a,r))}}q.a+="]"},
oW(a){var s,r,q,p,o,n,m=this,l={}
if(a.gP(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.d7(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aJ(0,new A.vz(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.iz(A.u(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.dw(r[n])}p.a+="}"
return!0}}
A.vz.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:31}
A.vx.prototype={
gfT(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.m5.prototype={}
A.uB.prototype={
by(a){var s,r,q,p=a.length,o=A.fd(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.w5(s)
if(r.km(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.e4()}return B.a1.aB(s,0,r.b)}}
A.w5.prototype={
e4(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.aU(q)
s=q.length
if(!(p<s))return A.d(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.d(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.d(q,p)
q[p]=189},
lx(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.aU(r)
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
return!0}else{n.e4()
return!1}},
km(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.d(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.d(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.aU(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.d(a,m)
if(k.lx(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.e4()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.aU(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.aU(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.d(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.d(s,m)
s[m]=n&63|128}}}return o}}
A.uA.prototype={
by(a){return new A.w2(this.a).k8(t.L.a(a),0,null,!0)}}
A.w2.prototype={
k8(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.fd(b,c,J.cD(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.He(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Hd(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dO(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Hf(o)
l.b=0
throw A.b(A.M(m,a,p+l.c))}return n},
dO(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.af(b+c,2)
r=q.dO(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dO(a,s,c,d)}return q.mI(a,b,c,d)},
mI(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bE(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.z2(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ay(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eZ.prototype={
gav(){return A.B4(this)},
gaW(){return A.B5(this)},
aa(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eZ)if(this.a===b.a)s=this.b===b.b
return s},
gT(a){return A.cO(this.a,this.b,B.h,B.h,B.h,B.h)},
H(a,b){var s
t.f7.a(b)
s=B.d.H(this.a,b.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
t(a){var s=this,r=A.Er(A.FA(s)),q=A.kw(A.Fy(s)),p=A.kw(A.B4(s)),o=A.kw(A.B5(s)),n=A.kw(A.Fx(s)),m=A.kw(A.Fz(s)),l=A.Au(A.Fw(s)),k=s.b,j=k===0?"":A.Au(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibp:1}
A.dw.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.dw&&this.a===b.a},
gT(a){return B.d.gT(this.a)},
H(a,b){return B.d.H(this.a,t.yb.a(b).a)},
t(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.af(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.af(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bC(B.d.t(o%1e6),6,"0")},
$ibp:1}
A.my.prototype={
t(a){return this.B()},
$iD:1}
A.at.prototype={
gc_(){return A.Fv(this)}}
A.kd.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kH(s)
return"Assertion failed"}}
A.dS.prototype={}
A.cF.prototype={
gdS(){return"Invalid argument"+(!this.a?"(s)":"")},
gdR(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.gdS()+q+o
if(!s.a)return n
return n+s.gdR()+": "+A.kH(s.ger())},
ger(){return this.b}}
A.hm.prototype={
ger(){return A.zj(this.b)},
gdS(){return"RangeError"},
gdR(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.l0.prototype={
ger(){return A.h(this.b)},
gdS(){return"RangeError"},
gdR(){if(A.h(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.j3.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.m0.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.hu.prototype={
t(a){return"Bad state: "+this.a}}
A.kr.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kH(s)+"."}}
A.lr.prototype={
t(a){return"Out of Memory"},
gc_(){return null},
$iat:1}
A.iZ.prototype={
t(a){return"Stack Overflow"},
gc_(){return null},
$iat:1}
A.vg.prototype={
t(a){return"Exception: "+this.a}}
A.A.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.I(e,0,75)+"..."
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
k=""}return g+l+B.c.I(e,i,j)+k+"\n"+B.c.a8(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.p.prototype={
cV(a,b){return A.Eg(this,A.t(this).i("p.E"),b)},
br(a,b,c){var s=A.t(this)
return A.ld(this,s.S(c).i("1(p.E)").a(b),s.i("p.E"),c)},
dv(a,b){var s=A.t(this)
return new A.I(this,s.i("l(p.E)").a(b),s.i("I<p.E>"))},
eP(a,b){return new A.dW(this,b.i("dW<0>"))},
p(a,b){var s
for(s=this.gv(this);s.m();)if(J.aa(s.gn(),b))return!0
return!1},
bc(a,b,c,d){var s,r
d.a(b)
A.t(this).S(d).i("1(1,p.E)").a(c)
for(s=this.gv(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a3(a,b){var s
A.t(this).i("l(p.E)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c3(q.gn())
if(!q.m())return s
r=b.gP(b)
if(r){r=s
do r+=J.c3(q.gn())
while(q.m())}else{r=s
do r=r+A.y(b)+J.c3(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.t(this).i("l(p.E)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bW(a,b){var s=A.J(this,A.t(this).i("p.E"))
return s},
bD(a){return this.bW(0,!0)},
gu(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gP(a){return!this.gv(this).m()},
ga4(a){return!this.gP(this)},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.b(A.cK())
return s.gn()},
gbg(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.cK())
s=r.gn()
if(r.m())throw A.b(A.AI())
return s},
b5(a,b,c){var s,r=A.t(this)
r.i("l(p.E)").a(b)
r.i("p.E()?").a(c)
for(r=this.gv(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cK())},
an(a,b){return this.b5(0,b,null)},
a9(a,b){var s,r
A.lG(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.qj(b,b-r,this,"index"))},
t(a){return A.F6(this,"(",")")}}
A.P.prototype={
t(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.ax.prototype={
gT(a){return A.L.prototype.gT.call(this,0)},
t(a){return"null"}}
A.L.prototype={$iL:1,
aa(a,b){return this===b},
gT(a){return A.iN(this)},
t(a){return"Instance of '"+A.lB(this)+"'"},
gad(a){return A.zZ(this)},
toString(){return this.t(this)}}
A.n0.prototype={
t(a){return""},
$idf:1}
A.ue.prototype={
gn_(){var s,r=this.b
if(r==null)r=$.rT.$0()
s=r-this.a
if($.A8()===1e6)return s
return s*1000}}
A.bE.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iG_:1}
A.uz.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.u(b)
s=B.c.bB(b,"=")
if(s===-1){if(b!=="")a.l(0,A.zf(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.I(b,0,s)
q=B.c.aO(b,s+1)
p=this.a
a.l(0,A.zf(r,0,r.length,p,!0),A.zf(q,0,q.length,p,!0))}return a},
$S:69}
A.uy.prototype={
$2(a,b){throw A.b(A.M("Illegal IPv6 address, "+a,this.a,b))},
$S:75}
A.jE.prototype={
gha(){var s,r,q,p,o=this,n=o.w
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
gT(a){var s,r=this,q=r.y
if(q===$){s=B.c.gT(r.gha())
r.y!==$&&A.yB()
r.y=s
q=s}return q},
gaY(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.Bv(s==null?"":s)
r.z!==$&&A.yB()
q=r.z=new A.ey(s,t.hL)}return q},
giv(){return this.b},
gep(){var s=this.c
if(s==null)return""
if(B.c.U(s,"[")&&!B.c.aq(s,"v",1))return B.c.I(s,1,s.length-1)
return s},
gex(){var s=this.d
return s==null?A.C_(this.a):s},
geA(){var s=this.f
return s==null?"":s},
ghU(){var s=this.r
return s==null?"":s},
ghX(){return this.c!=null},
ghZ(){return this.f!=null},
ghY(){return this.r!=null},
t(a){return this.gha()},
aa(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.geV())if(p.c!=null===b.ghX())if(p.b===b.giv())if(p.gep()===b.gep())if(p.gex()===b.gex())if(p.e===b.gib()){r=p.f
q=r==null
if(!q===b.ghZ()){if(q)r=""
if(r===b.geA()){r=p.r
q=r==null
if(!q===b.ghY()){s=q?"":r
s=s===b.ghU()}}}}return s},
$im3:1,
geV(){return this.a},
gib(){return this.e}}
A.ux.prototype={
giu(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.c.dc(s,"?",m)
q=s.length
if(r>=0){p=A.jF(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.mu("data","",n,n,A.jF(s,m,q,128,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.mV.prototype={
ghX(){return this.c>0},
ghZ(){return this.f<this.r},
ghY(){return this.r<this.a.length},
geV(){var s=this.w
return s==null?this.w=this.k0():s},
k0(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.U(r.a,"http"))return"http"
if(q===5&&B.c.U(r.a,"https"))return"https"
if(s&&B.c.U(r.a,"file"))return"file"
if(q===7&&B.c.U(r.a,"package"))return"package"
return B.c.I(r.a,0,q)},
giv(){var s=this.c,r=this.b+3
return s>r?B.c.I(this.a,r,s-1):""},
gep(){var s=this.c
return s>0?B.c.I(this.a,s,this.d):""},
gex(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Dg(B.c.I(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.U(r.a,"http"))return 80
if(s===5&&B.c.U(r.a,"https"))return 443
return 0},
gib(){return B.c.I(this.a,this.e,this.f)},
geA(){var s=this.f,r=this.r
return s<r?B.c.I(this.a,s+1,r):""},
ghU(){var s=this.r,r=this.a
return s<r.length?B.c.aO(r,s+1):""},
gaY(){if(this.f>=this.r)return B.aO
return new A.ey(A.Bv(this.geA()),t.hL)},
gT(a){var s=this.x
return s==null?this.x=B.c.gT(this.a):s},
aa(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.t(0)},
t(a){return this.a},
$im3:1}
A.mu.prototype={}
A.rl.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.yr.prototype={
$1(a){return this.a.e7(this.b.i("0/?").a(a))},
$S:20}
A.ys.prototype={
$1(a){if(a==null)return this.a.hv(new A.rl(a===undefined))
return this.a.hv(a)},
$S:20}
A.xK.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.CF(a))return a
s=this.a
a.toString
if(s.L(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.f(A.b1(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e5(!0,"isUtc",t.y)
return new A.eZ(r,0,!0)}if(a instanceof RegExp)throw A.b(A.n("structured clone of RegExp",null))
if(a instanceof Promise)return A.av(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cW(n),p=s.gv(n);p.m();)m.push(A.i0(p.gn()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.h(a.length)
for(s=J.aQ(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:79}
A.mE.prototype={
aX(a){if(a<=0||a>4294967296)throw A.b(A.B8(u.w+a))
return Math.random()*a>>>0},
az(){return Math.random()},
$iyZ:1}
A.eG.prototype={
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
aX(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.B8(u.w+a))
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
$iyZ:1}
A.kB.prototype={
B(){return"DiagnosticSeverity."+this.b}}
A.e9.prototype={
C(){var s=this
return A.E(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.tW.prototype={
$1(a){return B.c.bC(B.d.eL(A.h(a),16),8,"0")},
$S:80}
A.m6.prototype={}
A.r4.prototype={
oh(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.B(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a_.E>")),q=o.a,r=r.i("a_.E");s.m();){p=s.d
q.aK(p==null?r.a(p):p)}}}
A.lh.prototype={}
A.rf.prototype={}
A.r6.prototype={
df(a0,a1){var s=0,r=A.aK(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$df=A.aL(function(a3,a4){if(a3===1)return A.aH(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.Du(b)
if(a.length!==0)throw A.b(A.M(B.a.br(a,new A.r7(),t.N).W(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.b(B.hY)
k=t.N
j=A.Z(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.v)(m),++i)j.K(0,m[i].c.gak())
if(j.a>16384)throw A.b(B.hR)
p=A.m(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gak(),g=g.gv(g)
case 6:if(!g.m()){s=7
break}o=g.gn()
if(p.L(o)){s=6
break}s=8
return A.a5(j.$1(o),$async$df)
case 8:f=a4
e=f.length
if(e>67108864)throw A.b(A.M("model package payload exceeds limit: "+A.y(o),null,null))
d=p
if(new A.ap(d,A.t(d).i("ap<2>")).bc(0,0,new A.r8(),k)+e>268435456)throw A.b(B.i0)
J.b6(p,o,new Uint8Array(A.W(f)))
if(l)try{e=J.b_(p,o)
e.toString
A.D8(e)}catch(a2){b=A.ah(a2)
if(b instanceof A.lE){n=b
throw A.b(A.M("model package payload is not valid QMSH: "+A.y(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.v)(m),++i
s=3
break
case 5:if(A.AZ(b,p)!==b.c)throw A.b(B.h1)
q=new A.m6(b,p)
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$df,r)}}
A.r7.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.r8.prototype={
$2(a,b){return A.h(a)+t.uo.a(b).length},
$S:93}
A.r9.prototype={
A(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.iP("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.k(l,"assetId must be kebab-case")
k=A.iP("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.k(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.k(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.k(l,"parts must be non-empty")
s=m.w
if(A.he(s,A.B(s).c).a!==s.length)B.a.k(l,"lods must be unique")
if(!B.a.p(s,"LOD0"))B.a.k(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.N(s,new A.rc())
else s=!1
if(s)B.a.k(l,"combinedBounds must contain six finite values")
for(s=m.y.gM(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
if(q.length!==0){r=r.b
p=J.aQ(r)
r=p.gu(r)!==16||p.N(r,new A.rd())}else r=!0
if(r)B.a.k(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.v)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.k(l,"part material slot is outside materials")
q=n.c
if(q.gP(q))B.a.k(l,"part "+n.a+" must declare payload files")
for(q=q.gak(),q=q.gv(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.Ib(q.gn()))B.a.k(l,p)}return l},
ir(a){var s,r,q,p=this,o=A.m(t.N,t.z)
o.l(0,"schema","pixeldart-model-package-v1")
o.l(0,"assetId",p.b)
if(a)o.l(0,"packageHash",p.c)
o.l(0,"sourceFormat",p.d)
s=p.e
r=A.B(s)
q=r.i("H<1,X<e,@>>")
s=A.J(new A.H(s,r.i("X<e,@>(1)").a(new A.rb()),q),q.i("a_.E"))
o.l(0,"parts",s)
o.l(0,"materials",p.f)
o.l(0,"textures",p.r)
o.l(0,"lods",p.w)
o.l(0,"combinedBounds",p.x)
o.l(0,"sockets",p.y)
o.l(0,"provenance",p.z)
return o},
C(){return this.ir(!0)}}
A.ra.prototype={
$2(a,b){return new A.P(J.c3(a),J.c3(b),t.q)},
$S:45}
A.rc.prototype={
$1(a){return!isFinite(A.aA(a))},
$S:4}
A.rd.prototype={
$1(a){return!isFinite(A.aA(a))},
$S:4}
A.rb.prototype={
$1(a){return t.aw.a(a).C()},
$S:120}
A.f8.prototype={
C(){return A.E(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gE(){return this.a}}
A.re.prototype={
$2(a,b){return new A.P(J.c3(a),J.c3(b),t.q)},
$S:45}
A.xa.prototype={
$1(a){A.u(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.xu.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.xd.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.xs.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yD.prototype={
$2(a,b){B.a.k(this.a,new A.e9(a,B.cB,"model-package",b,"rebuild the deterministic model package"))},
$S:36}
A.yE.prototype={
$2(a,b){B.a.k(this.a,new A.e9(a,B.cB,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:36}
A.rX.prototype={
A(){var s,r=this
if(B.a.N(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.rY()))throw A.b(B.iI)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.hr)}}
A.rY.prototype={
$1(a){return A.h(a)<=0},
$S:22}
A.fc.prototype={
B(){return"QualityProfileKind."+this.b}}
A.dN.prototype={
A(){var s="installedFeatures",r=this.b,q=r.bA(B.nq)
if(q.a!==0)throw A.b(A.a6(q,s,"contains unknown pipeline features"))
if(this.a===B.bJ&&r.ga4(r))throw A.b(A.a6(r,s,"safe profiles cannot install optional features"))}}
A.h_.prototype={
B(){return"CoordinatedTransitionState."+this.b}}
A.ly.prototype={}
A.oH.prototype={
c9(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.i("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.f(A.i("configuration state is not initialized"))
if(p.c!=null)A.f(A.i("a configuration transition is already open"))
a2.A()
n=A.iH(a2)
m=p.d
l=p.b
if(l==null)A.f(A.i("resource state is not initialized"))
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
a=new A.oK(m,a2,n,new A.oI(A.fi(g,k),A.fi(f,k),A.fi(e,k),A.fi(d,k),c,b,o.z!==a2.z),B.cz)
p.c=a
s=a
try{r=a1.b.dk(s.c)
q=new A.ly(s,r,B.b7)
a1.c=q
return q}catch(a0){p.hl(s)
throw a0}},
ca(a){var s,r,q,p=this
p.fu(a)
s=p.a
r=a.a
s.fv(r)
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
fu(a){if(this.c!==a||a.c!==B.b7)throw A.b(A.i("coordinated transition is not open"))}}
A.fV.prototype={
B(){return"ConfigurationTransactionState."+this.b}}
A.oI.prototype={}
A.oK.prototype={}
A.oJ.prototype={
hl(a){this.fv(a)
a.e=B.fs
this.c=null},
fv(a){if(this.c!==a||a.e!==B.cz)throw A.b(A.i("configuration transition is not open"))}}
A.lx.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.E(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.N(n,A.t(n).i("N<1,2>")).gv(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.b(A.n("PostProcessState."+l+" must be >= 0: "+A.y(k),i))}n=j.ay
if(n<1||n>8)throw A.b(A.n("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.b(A.n("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),i))
if(r>1)throw A.b(A.n("PostProcessState.surfaceWetness must be in [0, 1]: "+A.y(r),i))
if(q>1)throw A.b(A.n("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.y(q),i))
if(p>1)throw A.b(A.n("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.y(p),i))
if(o>1)throw A.b(A.n("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(o),i))}}
A.fS.prototype={}
A.kN.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.gV(0)||!h.b.gV(0)||!h.fx.gV(0)||!h.r.gV(0)||!h.dx.gV(0))throw A.b(A.n("FrameEnvironment colors must be finite",g))
s=h.c
if(isFinite(s)){r=h.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.n("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(h.d),g))
s=h.fy
if(!isFinite(s)||s<0)throw A.b(A.n("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),g))
s=h.go
if(s!=null)s.A()
for(s=h.id,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.f(A.n("PointLight.position must be finite: "+o.t(0),g))
o=p.d
if(!isFinite(o)||o<0)A.f(A.n("PointLight.intensity must be >= 0: "+A.y(o),g))
o=p.e
if(!isFinite(o)||o<=0)A.f(A.n("PointLight.radius must be > 0: "+A.y(o),g))}for(s=h.k1,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.f(A.n("SpotLight.position must be finite: "+o.t(0),g))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.f(A.n("SpotLight.direction must be finite and nonzero: "+o.t(0),g))
if(p.w<=p.r)A.f(A.n("SpotLight.outerConeRadians must exceed innerConeRadians",g))}s=t.N
k=A.Z(s)
for(r=h.k2,o=r.length,q=0;q<r.length;r.length===o||(0,A.v)(r),++q){j=r[q]
j.A()
n=j.a
if(!k.k(0,n))throw A.b(A.n("FrameEnvironment.volumetricSources contains duplicate id: "+n,g))}r=h.w
o=!0
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
r=r>1||!isFinite(r)}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
else r=o}else r=o
else r=o
if(r)throw A.b(A.n("invalid volumetric medium controls",g))
i=A.Z(s)
for(s=h.k3,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){j=s[q]
o=j.a
n=!0
if(B.c.aZ(o).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){n=j.d
n=!isFinite(n)||m<=0||n<0||n>1}}}if(n)A.f(A.n("thermal source is invalid",g))
if(!i.k(0,o))throw A.b(A.n("FrameEnvironment.thermalSources contains duplicate id: "+o,g))}}}
A.kO.prototype={}
A.dO.prototype={
aa(a,b){if(b==null)return!1
return J.eT(b)===A.zZ(this)&&b instanceof A.dO&&this.a===b.a&&this.b===b.b},
gT(a){return A.cO(A.zZ(this),this.a,this.b,B.h,B.h,B.h)}}
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
A.cI.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.f3.prototype={
B(){return"HandleRejection."+this.b}}
A.kY.prototype={
t(a){return"HandleException("+this.a.b+", "+this.b.t(0)+")"}}
A.b9.prototype={
gV(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
aa(a,b){if(b==null)return!1
return b instanceof A.b9&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gT(a){return A.cO(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kD.prototype={
A(){var s=this.a
if(!s.gV(0)||s.gbd()<1e-12)throw A.b(A.n("DirectionalLight.direction must be finite and nonzero: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.b(A.n("DirectionalLight.intensity must be >= 0: "+A.y(s),null))}}
A.lw.prototype={
gE(){return this.a}}
A.bO.prototype={
gE(){return this.a}}
A.yt.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:200}
A.fN.prototype={
B(){return"AlphaMode."+this.b}}
A.iz.prototype={
B(){return"MaterialMapColorSpace."+this.b}}
A.cN.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.n("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.b(A.n("MaterialDefinition.emissiveStrength must be >= 0: "+A.y(s),k))
s=l.z
if(!isFinite(s)||s<0)throw A.b(A.n("MaterialDefinition.normalStrength must be >= 0: "+A.y(s),k))
A.lf("roughness",l.at)
A.lf("metallic",l.ax)
A.lf("occlusionStrength",1)
A.lf("clearcoatStrength",l.ch)
A.lf("clearcoatRoughness",l.CW)
if(!isFinite(0))throw A.b(A.n("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a8("uvScaleU",s),new A.a8("uvScaleV",r),new A.a8("uvOffsetU",0),new A.a8("uvOffsetV",0),new A.a8("tintR",l.d),new A.a8("tintG",l.e),new A.a8("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.n("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.b(A.n("MaterialDefinition uv scale must not be zero",k))
s=l.fy
if(!isFinite(s)||s<=0||s>1)throw A.b(A.n("MaterialDefinition.alphaCutoff must be in (0, 1]: "+A.y(s),k))}}
A.cS.prototype={
B(){return"VertexAttributeKind."+this.b}}
A.bb.prototype={}
A.j5.prototype={
A(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.b(A.n("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.b(A.n(k+m.a+'": attribute '+p.a.t(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.b(A.n(k+m.a+'": attribute '+p.a.t(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.B(s)
r=j.i("l(1)").a(new A.uC())
for(s=B.a.gv(s),j=new A.V(s,r,j.i("V<1>"));j.m();)if(s.gn().c!==4)throw A.b(A.n(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.uC.prototype={
$1(a){return t.qY.a(a).a===B.c6},
$S:23}
A.bV.prototype={
A(){var s,r,q,p,o,n=this,m=n.a
m.A()
s=n.b.length
m=m.b
if(B.d.R(s,m)!==0)throw A.b(A.n("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.ls()
r=n.c
if(r!=null){q=B.d.b9(s,m)
for(m=A.Fe(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.b(A.n("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gV(0)&&m.b.gV(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.b(A.n("MeshData.localBounds must be a valid AABB",null))},
ls(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.B(a4),a6=a5.i("l(1)")
a5=a5.i("I<1>")
s=new A.I(a4,a6.a(new A.qY()),a5)
if(!s.gv(0).m())return
r=new A.I(a4,a6.a(new A.qZ()),a5)
if(r.gu(0)!==1)throw A.b(A.n("surface-v2 tangent data requires one normal slot",a2))
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
if(!B.a.a3(A.c([i,g,f,e,d,c,b],o),new A.r_()))throw A.b(A.n("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.b(A.n("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.b(A.n("surface-v2 tangent must be orthogonal to its normal: "+A.y(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.b(A.n("surface-v2 tangent handedness must be -1 or +1: "+A.y(b),a2))}}}
A.qY.prototype={
$1(a){return t.qY.a(a).a===B.c6},
$S:23}
A.qZ.prototype={
$1(a){return t.qY.a(a).a===B.ej},
$S:23}
A.r_.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.kx.prototype={$iFM:1}
A.rn.prototype={
A(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.b(A.n("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.ro()))throw A.b(A.n("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.b(A.n("resource history does not match vhsOutput ownership",null))}}
A.ro.prototype={
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
dk(a){var s=this
if(s.d)A.f(A.i("resource assembler is disposed"))
if(s.a==null)throw A.b(A.i("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.i("resource assembly is already open"))
a.A()
return s.b=new A.lz(s.c,a,B.bQ)},
ca(a){var s,r=this
if(r.d)A.f(A.i("resource assembler is disposed"))
r.h0(a)
s=r.c
if(a.a!==s)throw A.b(A.i("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.n3
r.b=null},
eG(a){if(this.d)A.f(A.i("resource assembler is disposed"))
this.h0(a)
a.c=B.n4
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.i("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
h0(a){if(this.b!==a||a.c!==B.bQ)throw A.b(A.i("resource assembly is not prepared"))}}
A.h1.prototype={
B(){return"DrawMode."+this.b}}
A.kl.prototype={
B(){return"BlendMode."+this.b}}
A.bf.prototype={}
A.lY.prototype={
A(){var s=this
if(s.a<0||s.b<0)throw A.b(A.n("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.n("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.n("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.i9.prototype={
B(){return"ColorEncoding."+this.b}}
A.h0.prototype={
B(){return"DiagnosticLevel."+this.b}}
A.iR.prototype={
A(){var s,r=this,q=null
r.a.A()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.n("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.n("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.n("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.n("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.ff.prototype={
B(){return"RendererState."+this.b}}
A.aX.prototype={}
A.pn.prototype={
ia(a){var s=this.z.h(0,a)
return s==null?B.cO:s},
t(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.f7.prototype={
B(){return"MaterialResidencyStatus."+this.b}}
A.d9.prototype={}
A.c7.prototype={}
A.qV.prototype={
cH(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qW(a)),r.i("I<1>")).gu(0)}}
A.qW.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:186}
A.qT.prototype={
dl(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.v)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.f(A.n("material residency key is empty",null))
k=m.b
k.A()
if(r.L(l))throw A.b(A.n("material residency keys must be unique: "+l,null))
r.l(0,l,m)
j=A.m(s,s)
for(k=A.D1(k),i=k.$ti,k=new A.cf(k.a(),i.i("cf<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.l(0,e,c)
B.a.k(q,new A.c_(c,d,g))}p.l(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.dl(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.l(0,b.a.a,b.b)}o=r.$ti.i("ap<2>")
a=A.J(new A.ap(r,o),o.i("p.E"))
B.a.Y(a,new A.qU())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.v)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.l9(m,k,s))}return new A.qV(A.ad(o,t.wl))},
l9(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.N(b,A.t(b).i("N<1,2>")).gv(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.l(0,n,m)}p=A.Fc(new A.ap(q,q.$ti.i("ap<2>")))
A.aV(q,s,r)
return new A.c7(a,p)}}
A.qU.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.c.H(a.a,b.a):s},
$S:182}
A.lg.prototype={
ov(a){return this.a.bN(a)}}
A.qX.prototype={
$3(a,b,c){return new A.c6(A.h(a),A.h(b),A.ao(c))},
$S:153}
A.m2.prototype={}
A.r0.prototype={
bb(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.BJ(b,new A.kT(a.byteLength,B.d1,B.j0))
if(b.b!==B.j)A.f(A.i(c))
s=A.a(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.cv(b)
A.bi(b,p)
if(b.b!==B.j)A.f(A.i(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.Z(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.CZ(h.a)
if(!l.k(0,g))continue
f=A.Hx(o,g,h)
if(b.b!==B.j)A.f(A.i(c))
r.vertexAttribPointer.apply(r,[g,f,A.h(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.f(A.i(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.BJ(b,new A.kT(A.AY(e),B.d1,B.d0))
if(b.b!==B.j)A.f(A.i(c))
r.bindBuffer(A.h(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(d.a))
A.Go(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.m2(a0,d,p,b,B.d.b9(a.length,n),t.Dd.b(e))},
cq(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.eq(B.aM,a))
this.b.bN(a)
return s},
aK(a){var s,r,q=this.c.a7(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.aK(a)},
eC(){var s,r,q,p
for(s=this.b.bR(),r=s.$ti,s=new A.cf(s.a(),r.i("cf<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bb(p.b))}},
gcn(){return this.b.bR().bc(0,0,new A.r2(),t.S)}}
A.r1.prototype={
$3(a,b,c){return new A.bL(A.h(a),A.h(b),A.ao(c))},
$S:145}
A.r2.prototype={
$2(a,b){var s,r
A.h(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.AY(s)
return a+r+s},
$S:140}
A.i7.prototype={}
A.r3.prototype={
mH(a){var s,r,q,p,o=A.Jq(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.f(A.i("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.l(0,s,q+1)
r.toString
return r}p=new A.i7(o,1,A.Jw(A.D8(a)))
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
A.r5.prototype={
C(){var s=this
return A.E(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hh.prototype={
iW(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.f(A.i("model package binding is disposed"))
if(a8.x==null)throw A.b(A.i("model package is not attached"))
for(s=a8.z,r=s.length,q=a8.d,p=q.a,o=p.$ti,n=o.c,m=p.b,q=q.b,l=q.$ti,k=l.c,j=q.b,l=l.y[1],o=o.y[1],i=0;i<s.length;s.length===r||(0,A.v)(s),++i){h=k.a(s[i])
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
A.b0(new A.H(a,a1.i("C(1)").a(a0.gao()),a1.i("H<1,C>")))
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
A.b0(new A.H(c,a7.i("C(1)").a(a6.gao()),a7.i("H<1,C>")))
a5=l.a(new A.bf(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.Z(h)
if(!(g<j.length))return A.d(j,g)
j[g].sb3(a5)}},
a_(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.fO(s,r,q.x)
B.a.O(s)
B.a.O(r)
q.x=null},
jJ(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.Fg(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
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
J.e6(a5,p)
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
A.b0(new A.H(d,a0.i("C(1)").a(c.gao()),a0.i("H<1,C>")))
J.e6(a6,n.b.bM(new A.bf(e,q,m,l,B.U,B.S,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a2()
s=e+1}return new A.ju(a4,a6,a5)}catch(a1){a2.fO(a6,a5,a4)
throw a1}},
fO(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.B(a).i("bM<1>"),r=new A.bM(a,s),r=new A.al(r,r.gu(0),s.i("al<a_.E>")),q=this.d.b,s=s.i("a_.E");r.m();){p=r.d
q.aK(p==null?s.a(p):p)}for(s=A.B(b).i("bM<1>"),r=new A.bM(b,s),r=new A.al(r,r.gu(0),s.i("al<a_.E>")),q=this.c,s=s.i("a_.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.f(A.i("resource library is disposed"))
q.a.aK(p)
q.f.a7(0,p)}if(c!=null)c.oh()}}
A.cQ.prototype={
B(){return"QmeshRejection."+this.b}}
A.lE.prototype={
t(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.xL.prototype={
$1(a){return!isFinite(A.aA(a))},
$S:4}
A.c_.prototype={}
A.dR.prototype={
B(){return"TextureResidencyStatus."+this.b}}
A.cb.prototype={}
A.uo.prototype={
cR(a){var s=this.a,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.up(a)),r.i("I<1>")).gu(0)}}
A.up.prototype={
$1(a){return t.h.a(a).b===this.a},
$S:136}
A.um.prototype={
dl(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.f(A.n("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.f(A.a6(n,"handle","must be valid"))
if(s.L(o))throw A.b(A.n("TextureResidencyRequest keys must be unique: "+o,null))
s.l(0,o,p)}r=s.$ti.i("ap<2>")
m=A.J(new A.ap(s,r),r.i("p.E"))
B.a.Y(m,new A.un())
r=t.Aj
l=A.Z(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.v)(m),++q){p=m[q]
o=p.b
if(l.k(0,o)){i=this.kX(o)
k.l(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.k(j,new A.cb(p,i))}r=l.a
return new A.uo(A.ad(j,t.h),r)},
kX(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.r()
if(s.e3(a,r)===s.d)return B.ed
this.b.l(0,a,!0)
return B.ec}catch(q){if(A.ah(q) instanceof A.kY){s=this.b.h(0,a)===!0?B.ef:B.ee
return s}else throw q}}}
A.un.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.c.H(a.a,b.a):s},
$S:133}
A.dk.prototype={}
A.m_.prototype={
b1(a){var s=this.a,r=A.z5(s,B.j5)
A.z6(s,r,0,a)
return r},
oN(a,b){var s,r,q,p=this,o=p.b,n=o.bN(a),m=A.J(n.b,t.Fx)
B.a.l(m,0,b)
s=n.a
o.eM(a,new A.dk(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.z5(p.a,s)
o.l(0,r,q)}A.z6(p.a,q,0,b)},
na(a){var s,r=this.b,q=r.bN(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.i("TextureStore.finalizeMips: no pixels uploaded yet for "+a.t(0)))
A.BK(this.a,s)
r.eM(a,new A.dk(p,q.b,!0))},
e3(a,b){var s
this.b.bN(a)
s=this.c.h(0,a.a)
return s==null?b:s},
or(a){var s
if(a==null){s=this.d
s===$&&A.r()
return s}s=this.d
s===$&&A.r()
return this.e3(a,s)},
oA(a){var s
if(a==null){s=this.e
s===$&&A.r()
return s}s=this.e
s===$&&A.r()
return this.e3(a,s)},
oC(a){var s=this.f
s===$&&A.r()
return s},
ot(a){var s=this.r
s===$&&A.r()
return s},
oy(a){var s=this.w
s===$&&A.r()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>")),q=n.a,p=q.a,o=t.p;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.O(0)
s=n.d
s===$&&A.r()
A.mj(q,s)
s=n.e
s===$&&A.r()
A.mj(q,s)
s=n.f
s===$&&A.r()
A.mj(q,s)
s=n.r
s===$&&A.r()
A.mj(q,s)
s=n.w
s===$&&A.r()
A.mj(q,s)},
eC(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b1($.A7())
i.e=i.b1($.A4())
i.f=i.b1($.A5())
i.r=i.b1($.A3())
i.w=i.b1($.A6())
for(s=i.b.bR(),r=s.$ti,s=new A.cf(s.a(),r.i("cf<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a3(o,new A.us()))continue
l=A.z5(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.z6(p,l,k,j)}if(m.c)A.BK(p,l)
q.l(0,n.a,l)}},
gcn(){return this.b.bR().bc(0,0,new A.ur(),t.S)}}
A.uq.prototype={
$3(a,b,c){return new A.bt(A.h(a),A.h(b),A.ao(c))},
$S:125}
A.us.prototype={
$1(a){return t.Fx.a(a)==null},
$S:122}
A.ur.prototype={
$2(a,b){var s
A.h(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:119}
A.bh.prototype={
B(){return"SolarPhase."+this.b}}
A.uc.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a8("timeHours",e.a),new A.a8("solarNoonHours",s),new A.a8("latitudeRadians",r),new A.a8("solarDeclinationRadians",q),new A.a8(d,p),new A.a8(c,o),new A.a8("aerosolTurbidity",n),new A.a8(b,m),new A.a8("solarIntensity",e.x),new A.a8("baseFogDensity",l),new A.a8("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.b(A.n(g+" must be finite",a))}if(s>=24)throw A.b(A.n("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.b(A.n("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.b(A.n("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a8(d,p),new A.a8(c,o),new A.a8(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.b(A.n(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.b(A.n("solar attenuation inputs are out of bounds",a))}}
A.hx.prototype={
gE(){return this.a}}
A.ct.prototype={
A(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.gV(0)){s=p.c
if(s.gV(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.b(A.n("invalid volumetric source "+o,null))},
gE(){return this.a}}
A.yu.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.H(b.a,a.a)
return s===0?B.c.H(a.b.a,b.b.a):s},
$S:113}
A.uQ.prototype={}
A.dH.prototype={
gno(){return this.b.length}}
A.kL.prototype={
lU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.t0(A.c([],t.pq),A.Z(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p)r[p].aw(s,b)
o=s.lT(a,!1)
if(o.b.length!==0)return new A.kM(o,B.kv)
q=o.a
n=A.B(q)
m=new A.H(q,n.i("e(1)").a(new A.ph()),n.i("H<1,e>")).b8(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){k=r[p]
for(n=k.au(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.v)(n),++i){h=n[i]
if(!m.p(0,h.gG().a))throw A.b(A.i('RenderFeature "'+k.gE()+'" created a pass "'+h.gG().a+'" that it never declared into the graph'))
B.a.k(l,h)}}B.a.Y(l,new A.pi(o))
return new A.kM(o,l)},
bO(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)s[q].a_()}}
A.ph.prototype={
$1(a){return t.A.a(a).a},
$S:105}
A.pi.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.H(B.a.eq(s,new A.pf(a)),B.a.eq(s,new A.pg(b)))},
$S:99}
A.pf.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:11}
A.pg.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:11}
A.kM.prototype={}
A.f0.prototype={
B(){return"FrameQueueState."+this.b}}
A.kP.prototype={$iFF:1}
A.pm.prototype={
lQ(a){if(a.length===0)throw A.b(A.a6(a,"passId",null))
this.b=a
this.a.bT(a,A.Da())},
jb(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=r.b
o.l(0,q,new A.aX(p.a,p.b,p.d))}return A.aV(o,t.N,t.pH)},
bH(a,b){var s,r=this.b
if(r==null)throw A.b(A.i("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.n("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.af(a,3)*b}}
A.hC.prototype={}
A.aw.prototype={
gbU(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rr()),r.i("I<1>"))},
gcu(){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.rs()),r.i("I<1>"))},
t(a){return"PassDeclaration("+this.a+" @ "+this.b.t(0)+")"},
gE(){return this.a}}
A.rr.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.O},
$S:24}
A.rs.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:24}
A.cn.prototype={
B(){return"GraphValidationFailureKind."+this.b}}
A.bz.prototype={
t(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.iT.prototype={
B(){return"ResourceFormat."+this.b}}
A.d3.prototype={
B(){return"GraphStage."+this.b}}
A.aO.prototype={
i6(){var s=this
return new A.aO(s.a,s.b,s.c,s.d,s.e,s.f+1)},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.aO&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gT(a){var s=this
return A.cO(s.a,s.b,s.c,s.d,s.e,s.f)},
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
s=A.Gr(m.a,a.c,r.a(a.d.ga5().bD(0)),r.a(a.f),a.b)}catch(q){if(A.ah(q) instanceof A.iW){++m.e
throw q}else throw q}r=a.a
p=new A.ia(r,s)
o=m.b
n=o.h(0,r)
o.l(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bO(){var s=this.b
this.kd(new A.ap(s,A.t(s).i("ap<2>")))
s.O(0)},
kd(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.be.prototype={
A(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.n("ProgramSource.id must not be empty",m))
s=t.S
r=A.Z(s)
for(q=this.d.gM(),q=q.gv(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.b(A.n('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.b(A.n('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.Z(s)
for(s=this.e.gM(),s=s.gv(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.b(A.n('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.b(A.n('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.rZ.prototype={}
A.ba.prototype={
aj(){var s=this
return A.Ax(B.eT,s.f,B.aC,B.ag,!0,!0,!0,!0,s.r,B.aG,B.aH,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.t0.prototype={
lT(a,b){var s=this.lr(t.Q.a(a),!1),r=this.a,q=A.B(r)
return new A.t_(A.ad(new A.I(r,q.i("l(1)").a(new A.t5()),q.i("I<1>")),t.A),s)},
lr(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.B(r)
p=q.i("I<1>")
o=A.J(new A.I(r,q.i("l(1)").a(new A.t4()),p),p.i("p.E"))
m.jP(o,a,s)
m.jT(o,s)
m.jV(o,s)
m.jS(o,!1,s)
n=m.jX(o,s)
m.jU(o,n,s)
m.jW(o,s)
m.jR(o,n,s)
m.jQ(o,s)
return s},
jP(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
p=B.a8.bA(b)
if(p.a!==0)B.a.k(c,new A.bz(B.jg,q.a,"missing capabilities: "+p.W(0,", ")))}},
jT(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbU(),o=J.O(p.a),p=new A.V(o,p.b,p.$ti.i("V<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.k(b,new A.bz(B.jb,n,"reads multisampled resource "+m.t(0)+" directly; resolve before sampling"))}}},
jV(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.B(a),r=s.i("l(1)").a(new A.t3()),q=B.a.gv(a),s=new A.V(q,r,s.i("V<1>"));s.m();){r=q.gn()
p=r.gbU()
o=A.J(p,p.$ti.i("p.E"))
p=r.gcu()
n=A.J(p,p.$ti.i("p.E"))
if(o.length!==1||n.length!==1){B.a.k(b,new A.bz(B.be,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbg(o).a
l=B.a.gbg(n).a
if(m.e<=1||l.e>1)B.a.k(b,new A.bz(B.be,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.k(b,new A.bz(B.be,r.a,"resolve source and destination must match format and extent"))}},
jS(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.v)(p),++m){l=p[m]
if(l.b===B.O)B.a.k(c,new A.bz(B.je,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
jX(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
for(o=p.gcu(),n=J.O(o.a),o=new A.V(n,o.b,o.$ti.i("V<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bz(B.ja,m,l.t(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
jU(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbU(),p=J.O(q.a),q=new A.V(p,q.b,q.$ti.i("V<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.O)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bz(B.d5,o,"reads "+n.t(0)+" but no pass writes that version"))
continue}if(B.a.bB(a,m)>s)B.a.k(c,new A.bz(B.d5,o,"reads "+n.t(0)+" before writer "+m.a+" runs"))}}},
jW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gbU(),o=J.O(p.a),p=new A.V(o,p.b,p.$ti.i("V<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.O)continue
for(l=q.gcu(),k=J.O(l.a),l=new A.V(k,l.b,l.$ti.i("V<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bz(B.jd,n,"reads and writes "+m.t(0)+" at the same version; declare a ping-pong version bump"))}}}},
jR(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gbU(),o=J.O(p.a),p=new A.V(o,p.b,p.$ti.i("V<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.O)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcu().an(0,new A.t2(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bz(B.jc,n,"reads "+l.t(0)+" but writer "+k.a+" produced "+j.t(0)))}}},
jQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcu(),o=J.O(p.a),p=new A.V(o,p.b,p.$ti.i("V<1>"));p.m();){n=o.gn().a
r.l(0,n.a+"#"+n.f,q)}m=J.qs(p,t.oG)
for(l=0;l<p;++l)m[l]=A.Z(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbU(),p=J.O(s.a),s=new A.V(p,s.b,s.$ti.i("V<1>"));s.m();){o=p.gn()
if(o.b===B.O)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.d7(s,!1,!1,p)
s=a.length
i=A.d7(s,!1,!1,p)
h=new A.t1(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bz(B.jf,a[q].a,"participates in a resource dependency cycle"))}}}}
A.t5.prototype={
$1(a){t.A.a(a)
return A.yX()},
$S:11}
A.t4.prototype={
$1(a){t.A.a(a)
return A.yX()},
$S:11}
A.t3.prototype={
$1(a){return t.A.a(a).f},
$S:11}
A.t2.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:24}
A.t1.prototype={
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
r=A.fz(r,r.r,A.t(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:22}
A.t_.prototype={}
A.mD.prototype={$ica:1,
gE(){return this.a},
gG(){return this.b},
geR(){return this.c}}
A.iQ.prototype={
lv(a){var s,r,q,p=a.c
p.A()
s=this.a.bN(a.a)
p=p.ae()
r=s.d.gal()
q=A.B(r)
return A.b0(new A.H(r,q.i("C(1)").a(p.gao()),q.i("H<1,C>")))},
gi4(){return new A.bI(this.ny(),t.Br)},
ny(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gi4(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bR(),n=o.$ti,o=new A.cf(o.a(),n.i("cf<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
return a.b=new A.mD(h,g,A.b0(new A.H(f,d.i("C(1)").a(i.gao()),d.i("H<1,C>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iFI:1}
A.t6.prototype={
$3(a,b,c){return new A.cI(A.h(a),A.h(b),A.ao(c))},
$S:88}
A.lJ.prototype={
ghb(){var s=this.d
return s===$?this.d=new A.um(this.c,A.m(t.Aj,t.y)):s},
dn(a,b){var s,r
if(this.x)A.f(A.i("resource library is disposed"))
s=this.a
a.A()
r=s.b.aG(a,b)
s.c.l(0,r.a,s.bb(a))
this.f.k(0,r)
return r},
oi(a){if(this.x)A.f(A.i("resource library is disposed"))
this.a.aK(a)
this.f.a7(0,a)},
dq(a,b,c,d,e,f){var s,r
if(this.x)A.f(A.i("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.f(A.n("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.f(A.n("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aG(new A.dk(new A.kV(f,d,1,!0,e,B.bc,B.d3,a),A.d7(1,null,!1,t.Fx),!1),b)
this.w.k(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.J(s,A.t(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.p
l=0
for(;l<r.length;r.length===q||(0,A.v)(r),++l){k=r[l]
j=o.a7(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aK(k)}r=i.r
q=A.J(r,A.t(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.v)(q),++l)n.aK(q[l])
q=i.f
o=A.J(q,A.t(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.v)(o),++l)m.aK(o[l])
s.O(0)
r.O(0)
q.O(0)
p.a_()
i.x=!0},
$iFK:1}
A.vh.prototype={}
A.n1.prototype={$ica:1,
gE(){return this.a},
gG(){return this.b},
geR(){return this.c}}
A.wX.prototype={
$1(a){var s=this.a.w.a.cq(a),r=s.b!=null,q=r?s.d:s.e
return new A.iS(s.c,r,q,s.f)},
$S:87}
A.wY.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gn().i7(a)
if(b!=null&&s.p(0,b))return this.b.x.gn().i7(b)
throw A.b(A.i("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:52}
A.wW.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.wP.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.k1
return r==null||r.length===0?null:B.a.ga1(r)},
$S:53}
A.wQ.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bu
s=q.b.k1
r=s.length===0?null:B.a.ga1(s)
return A.JV(s,3,q.a.d,r)},
$S:54}
A.wV.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.wK.prototype={
$0(){return this.a.at.a},
$S:55}
A.wM.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.wL.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.wU.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.wI.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.wJ.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.wR.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.wS.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.wT.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.r()
return s},
$S:5}
A.wO.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.wN.prototype={
$0(){return this.a.at.w},
$S:56}
A.x_.prototype={
$0(){return this.a},
$S:57}
A.vX.prototype={}
A.mO.prototype={$iFH:1}
A.mA.prototype={$iEN:1}
A.te.prototype={
gaR(){var s=this.w
return s==null?A.f(A.i("renderer is not initialized")):s},
i3(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bO)throw A.b(A.i("renderer can only be initialized once"))
a.A()
b.A()
s=m.a
if(s.b===B.a_)throw A.b(A.i("renderer device is context lost"))
m.e=B.n2
try{m.r=s.ik()
r=m.b
q=A.iH(a)
p=r.a
if(p.a!=null)A.f(A.i("configuration state is already initialized"))
a.A()
p.a=a
p.b=A.iH(a)
p.d=1
r.b.i2(q)
r=A.Fd()
m.w=new A.lJ(A.Ff(s),r,A.G1(s),A.Z(t.kc),A.Z(t.pw),A.Z(t.Aj))
r=new A.lK()
p=new A.pK(s,r)
q=A.iH(a)
o=p.dN(q,a)
r.i2(q)
p.c=new A.hj(new A.lz(0,q,B.bQ),o,B.al)
m.x=p
m.y=new A.lC(s,A.m(t.N,t.CH))
m.as=a
A.Cq(m)
m.e=B.bP}catch(n){s=m.y
if(s!=null)s.bO()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bO
throw n}return A.AB(t.H)},
lO(a,b){var s,r,q,p,o,n,m=this,l=null
m.l3()
m.c2()
r=B.a.p(m.d,a)
if(!r)throw A.b(A.n("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.i("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gV(0))A.f(A.n("CameraView.eye must be finite: "+q.t(0),l))
q=r.e
if(!q.gV(0)||q.gbd()<1e-12)A.f(A.n("CameraView.forward must be finite and nonzero: "+q.t(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.f(A.n("CameraView requires 0 < near < far, got "+A.y(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.f(A.n("CameraView.aspect must be finite and > 0: "+A.y(q),l))
if(!r.a.gV(0)||!r.b.gV(0)||!r.c.gV(0))A.f(A.n("CameraView matrices must be finite",l))
b.b.A()
b.c.A()
r=b.w
if(!isFinite(r))A.f(A.n("FrameInput.timeSeconds must be finite: "+A.y(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ak)A.f(A.i("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ak
o.c=0
B.a.O(o.a)
s=o
try{r=m.r
if((r==null?A.f(A.i("renderer is not initialized")):r).z)m.b$=m.a.lP()
return s}catch(n){if(o.b!==B.ak)A.f(A.i("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.iN
m.fc()
m.ax=m.at=null
throw n}},
n2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.c2()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.i("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ak)A.f(A.i("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hw(l,0,A.e5(m.c,"count",t.S),A.B(l).c).bW(0,!1)
m.b=B.iM
q=k
try{p=A.HJ(a1,r,s,q)
o=p.a.jb()
m=o.gM().dv(0,new A.tf())
l=m.$ti
n=new A.cM(m,l.i("aX(1)").a(new A.tg()),l.i("cM<1,aX>")).bc(0,B.cO,new A.th(),t.pH)
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
return new A.pn(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.ko(s.e)
a1.ax=a1.at=null}},
l3(){var s,r,q,p=this
if(p.e!==B.dY)return
if(p.a.b===B.a_)throw A.b(A.i("renderer context remains lost"))
s=p.w
if(s.x)A.f(A.i("resource library is disposed"))
s.a.eC()
s.c.eC()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.f(A.i("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.f(A.i("GPU resource adapter is not initialized"))
s.c=new A.hj(q.a,s.dN(A.iH(r),r),B.al)
s=p.y
s.c=null
s.b.O(0)
A.Cq(p)
p.e=B.bP},
c2(){var s=this,r=s.e
if(r!==B.bP)throw A.b(A.i("renderer is not ready: "+r.b))
if(s.a.b===B.a_){s.ke()
s.e=B.dY
throw A.b(A.i("renderer context lost"))}}}
A.tf.prototype={
$1(a){return B.c.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:58}
A.tg.prototype={
$1(a){return t.h6.a(a).b},
$S:59}
A.th.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aX(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:60}
A.mL.prototype={}
A.vt.prototype={
ko(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.f(A.i(u.k))
r=s.hd(o)
if(r.b)A.f(A.i("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.k(p.a$,new A.mL(o))}catch(q){p.dP(o)}},
fc(){var s=this.b$
this.b$=null
if(s!=null)this.dP(s)},
ke(){var s,r,q
this.fc()
s=this.a$
r=J.AL(s.slice(0),A.B(s).c)
B.a.O(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.v)(r),++q)this.dP(r[q].b)},
dP(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hd(a).a)}catch(r){}}}
A.mS.prototype={}
A.iY.prototype={
B(){return"ShadowCasterLod."+this.b}}
A.bW.prototype={
H(a,b){var s,r=this
t.BB.a(b)
s=B.d.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.H(r.c.a,b.c.a)
if(s!==0)return s
return B.d.H(r.d,b.d)},
$ibp:1}
A.bS.prototype={
H(a,b){var s
t.z3.a(b)
s=B.b.H(b.a,this.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
$ibp:1}
A.b2.prototype={}
A.yy.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.H(0,s.a(b).a)},
$S:61}
A.yz.prototype={
$1(a){return t.E0.a(a).b},
$S:62}
A.yw.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.H(0,s.a(b).a)},
$S:63}
A.yx.prototype={
$1(a){return t.EH.a(a).b},
$S:64}
A.p_.prototype={}
A.oZ.prototype={}
A.fM.prototype={
gal(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.C(o,n,p),new A.C(r,n,p),new A.C(o,q,p),new A.C(r,q,p),new A.C(o,n,s),new A.C(r,n,s),new A.C(o,q,s),new A.C(r,q,s)],t.k)},
t(a){return"Aabb("+this.a.t(0)+", "+this.b.t(0)+")"}}
A.fa.prototype={}
A.h4.prototype={
B(){return"FrustumTest."+this.b}}
A.po.prototype={
iq(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
A.pp.prototype={
$4(a,b,c,d){var s=new A.C(a,b,c),r=new A.fa(s,d),q=Math.sqrt(s.gbd())
return q<1e-9?r:new A.fa(s.a8(0,1/q),d/q)},
$S:65}
A.d8.prototype={
a8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.d8(h)},
is(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
ev(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.d8(h)},
nt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=J.qs(4,t.cE)
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
a1[p]=new Float64Array(A.W(A.c([o,n,m,l,k,j,i,p===3?1:0],s)))}for(h=0;h<4;h=p){s=a1[h]
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
s.$flags&2&&A.aU(s)
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
s.$flags&2&&A.aU(s)
s[b]=r-a*q}}}a0=new Float32Array(16)
for(p=0;p<4;++p)for(h=0;h<4;++h){s=h*4+p
r=a1[p]
q=4+h
if(!(q<r.length))return A.d(r,q)
q=r[q]
if(!(s<16))return A.d(a0,s)
a0[s]=q}return new A.d8(a0)},
gV(a){return B.r.a3(this.a,new A.qS())},
t(a){return"Mat4("+A.y(this.a)+")"}}
A.qS.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.lF.prototype={
t(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.hy.prototype={
A(){var s=this.a
if(!s.gV(0))throw A.b(A.n("Transform.translation must be finite: "+s.t(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.n("Transform.rotation must be finite: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.b(A.n("Transform.scale must be finite and positive: "+A.y(s),null))},
ae(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.AV(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.AV(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
t(a){return"Transform("+this.a.t(0)+", "+this.b.t(0)+", scale="+A.y(this.c)+")"}}
A.C.prototype={
a2(a,b){return new A.C(this.a+b.a,this.b+b.b,this.c+b.c)},
ab(a,b){return new A.C(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.C(this.a*b,this.b*b,this.c*b)},
bo(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.C(s*r-q*p,q*o-n*r,n*p-s*o)},
gbd(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbd())},
gV(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gbd())
return r<1e-9?B.v:new A.C(s.a/r,s.b/r,s.c/r)},
aa(a,b){if(b==null)return!1
return b instanceof A.C&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gT(a){return A.cO(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kf.prototype={
B(){return"AtmosphericParticleAnchor."+this.b}}
A.nR.prototype={}
A.fO.prototype={}
A.nQ.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.b(A.n("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.a8("origin",l.d),new A.a8("halfExtents",s),new A.a8("initialVelocity",l.f),new A.a8("acceleration",l.r)],t.c2)
r.push(new A.a8("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.b(A.n("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.b(A.n("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.b(A.n("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.b(A.n("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.b(A.n("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.b(A.n("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.b(A.n("AtmosphericParticleField.particleScale must be finite and > 0",k))},
cw(a,b){var s,r,q,p,o,n=this,m=null
n.A()
s=n.z
if(b>=s)throw A.b(A.b1(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.R(a.w+n.cT(b,0)*r,r)
switch(n.c.a){case 0:s=B.v
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.a2(0,n.d).a2(0,new A.C((n.cT(b,1)*2-1)*p.a,(n.cT(b,2)*2-1)*p.b,(n.cT(b,3)*2-1)*p.c))
p=o.a2(0,n.kf(q))
s=n.lt(q)
if(!isFinite(q)||q<0)A.f(A.n("atmospheric particle age must be finite and >= 0",m))
if(!o.gV(0)||!p.gV(0)||!s.gV(0))A.f(A.n("atmospheric particle kinematics must be finite",m))
return new A.fO(q,o,p,s)},
ji(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.C3.a(c)
f.A()
for(s=f.z,r=a.a,q=f.as,p=f.cy,o=f.at,n=f.a,m=f.b,l=0,k=0;k<s;++k){j=f.cw(b,k)
if(!c.$1(j))continue
i=o?f.h2(j.d):B.aQ
h=new A.hy(j.c,i,q)
g=new A.bf(n,m,h,-1,B.aJ,B.S,!1,!1,k,p)
if(a.b!==B.ak)A.f(A.i("FrameQueue.submit called outside an active frame"))
h.A()
h=a.c
if(h<r.length)B.a.l(r,h,g)
else B.a.k(r,g);++a.c;++l}return l},
nc(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.A()
s=A.AA(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.cw(a,n)
if(p)h.h2(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.iq(new A.fM(new A.C(k-q,j-q,i-q),new A.C(k+q,j+q,i+q)))!==B.b8)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.f(A.n("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.f(A.i("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.nR(r,o,q)},
lt(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a2(0,this.f.ab(0,s).a8(0,r))},
kf(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a8(0,a).a2(0,this.f.ab(0,s).a8(0,(1-q)/r))},
h2(a){var s,r=a.gac()
if(r.aa(0,B.v))return B.aQ
s=B.b.q(B.aw.bo(r),-1,1)
if(s>0.999999)return B.aQ
if(s<-0.999999)return A.rV(B.ei,3.141592653589793)
return A.rV(B.aw.bz(r),Math.acos(s))},
cT(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.jc.prototype={
B(){return"_BloomBlurAxis."+this.b}}
A.i6.prototype={
gE(){return this.f},
aw(a,b){B.a.k(a.a,new A.aw(this.f,B.J,A.c([new A.Q(this.x,B.i),new A.Q(this.y,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be(s.e,s.b,s.c,B.w,B.ds,B.dp)),q=A.cv(s.d),p=t.n,o=s.r===B.ew?new Float32Array(A.W(A.c([1/s.Q,0],p))):new Float32Array(A.W(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.mr(new A.ba(s.f,A.c([new A.Q(s.x,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iaq:1}
A.mr.prototype={
am(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bG(r,a.ap(o.r).b)
A.bc(r,o.a.aj())
A.cT(r,B.T,1,0,0,0)
A.bP(r,o.b.b)
q=t._
p=o.d
if(o.e)A.Gn(r,0,q.a(p.$0()))
else A.aF(r,0,q.a(p.$0()))
A.q(r,"uSource",B.u)
A.q(r,"uTexelStep",new A.x(B.au,o.f))
A.bi(r,o.c)
s.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.km.prototype={
gE(){return"bloomComposite"},
aw(a,b){B.a.k(a.a,new A.aw("bloomComposite",B.J,A.c([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="bloomComposite",q=s.a.aA(new A.be(r,s.b,s.c,B.w,B.lm,B.l0)),p=A.cv(s.d),o=s.w,n=A.c([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.k)],t.C)
return A.c([new A.ms(new A.ba(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iaq:1}
A.ms.prototype={
am(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bG(r,a.bX(q.f).b)
A.BG(r,1)
A.bc(r,B.cF)
A.bP(r,q.b.b)
A.aF(r,0,t._.a(q.d.$0()))
A.q(r,"uBloom",B.u)
A.q(r,"uBloomStrength",new A.x(B.e,p))
A.bi(r,q.c)
s.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.kz.prototype={
gE(){return"depthPrepass"},
aw(a,b){B.a.k(a.a,new A.aw("depthPrepass",B.j7,A.c([new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="depthPrepass",q=s.a.aA(new A.be(r,s.b,s.c,B.dr,B.dq,B.kg))
return A.c([new A.mv(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iaq:1}
A.mv.prototype={
am(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bG(a1,a2.ap("sceneDepth").b)
A.bc(a1,d.a.aj())
A.cT(a1,B.b5,1,0,0,0)
A.bP(a1,d.b.b)
A.q(a1,"uVertexSnapGrid",new A.x(B.e,a0.ax))
A.q(a1,"uAlbedo",B.u)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
j=k.a
i=j.gG()
A.q(a1,"uViewProjection",new A.x(B.t,new Float32Array(A.W(a))))
A.q(a1,"uModel",new A.x(B.t,new Float32Array(A.W(i.c.ae().a))))
A.yv(b,k,!1)
d.le(b,j.gG().b,p)
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
n.bH(g,f)}else{if(a1.b!==B.j)A.f(A.i(c))
m.drawArraysInstanced(A.h(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bH(g,f)}}},
le(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aF(q,0,t._.a(this.e.$1(r.b)))
A.q(q,"uAlphaCutoff",new A.x(B.e,r.fx===B.b_?r.fy:0))
A.q(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.aj()
A.bc(q,r.go?s.eQ(!1):s)},
$iab:1,
gG(){return this.a}}
A.je.prototype={
B(){return"_DofBlurAxis."+this.b}}
A.id.prototype={
gE(){return this.f},
aw(a,b){B.a.k(a.a,new A.aw(this.f,B.J,A.c([new A.Q(this.w,B.i),new A.Q(this.x,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be(s.e,s.b,s.c,B.w,B.ds,B.dp)),q=A.cv(s.d),p=t.n,o=s.r===B.ex?new Float32Array(A.W(A.c([1/s.z,0],p))):new Float32Array(A.W(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.mw(new A.ba(s.f,A.c([new A.Q(s.w,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iaq:1}
A.mw.prototype={
am(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bG(r,a.ap(q.f).b)
A.bc(r,q.a.aj())
A.cT(r,B.T,1,0,0,0)
A.bP(r,q.b.b)
A.aF(r,0,t._.a(q.d.$0()))
A.q(r,"uSource",B.u)
A.q(r,"uTexelStep",new A.x(B.au,q.e))
A.bi(r,q.c)
s.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.kE.prototype={
gE(){return"dofComposite"},
aw(a,b){var s=this
B.a.k(a.a,new A.aw("dofComposite",B.J,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1))},
au(a){var s=this,r="dofComposite",q=s.a.aA(new A.be(r,s.b,s.c,B.w,B.ll,B.k5)),p=A.cv(s.d)
return A.c([new A.mx(new A.ba(r,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iaq:1}
A.mx.prototype={
am(a){var s,r=this,q=a.ap("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bG(n,q.b)
A.bc(n,r.a.aj())
A.bP(n,r.b.b)
s=t._
A.aF(n,0,s.a(r.d.$0()))
A.q(n,"uSharp",B.u)
A.aF(n,1,s.a(r.e.$0()))
A.q(n,"uBlurred",B.av)
A.aF(n,2,s.a(r.f.$0()))
A.q(n,"uSceneDepth",B.eh)
A.q(n,"uNear",new A.x(B.e,o.f))
A.q(n,"uFar",new A.x(B.e,o.r))
A.q(n,"uFocusDistance",new A.x(B.e,r.w))
A.q(n,"uFocusRange",new A.x(B.e,r.x))
A.q(n,"uStrength",new A.x(B.e,a.c.e.d))
A.bi(n,r.c)
p.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.kX.prototype={
gE(){return"grade"},
aw(a,b){B.a.k(a.a,new A.aw("grade",B.J,A.c([new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be("grade",s.b,s.c,B.w,B.lj,B.l1)),q=A.cv(s.d),p=s.r,o=s.w
return A.c([new A.mC(new A.ba("grade",A.c([new A.Q(p,B.i),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iaq:1}
A.mC.prototype={
am(a){var s=this,r=a.ap(s.f.a),q=a.b,p=q.a
A.bG(p,a.ap(s.r.a).b)
A.bc(p,s.a.aj())
A.bP(p,s.b.b)
A.aF(p,0,r.b)
A.q(p,"uScene",B.u)
A.aF(p,1,t._.a(s.d.$0()))
A.q(p,"uLut",B.av)
A.q(p,"uLutSize",new A.x(B.e,s.e))
A.q(p,"uStrength",new A.x(B.e,a.c.e.as))
A.bi(p,s.c)
q.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.iA.prototype={
gE(){return"msaaResolve"},
aw(a,b){B.a.k(a.a,new A.aw("msaaResolve",B.j8,A.c([new A.Q(this.b,B.i),new A.Q(this.c,B.k)],t.C),!0))},
au(a){var s=this.b,r=this.c
return A.c([new A.mJ(new A.ba("msaaResolve",A.c([new A.Q(s,B.i),new A.Q(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iaq:1}
A.mJ.prototype={
am(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.bX(this.c),j=a.bX(this.d),i=this.b
if(i.b!==B.j)A.f(A.i(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.f(A.n("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.f(A.n("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.f(A.n("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(m.WebGL2RenderingContext.NONE)],t.n))}A.aT(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.h(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.NONE),A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aT(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.h(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aT(i,l,[0,0,s,r.x,0,0,p,q.x,A.h(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.h(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.h(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.h(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iab:1,
gG(){return this.a}}
A.fQ.prototype={}
A.kn.prototype={
ap(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.i('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
bX(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ap(s)},
$iFG:1}
A.yY.prototype={}
A.iK.prototype={
gE(){return"present"},
aw(a,b){B.a.k(a.a,new A.aw("present",B.j9,A.c([new A.Q(this.f,B.i)],t.C),!1))},
au(a){var s,r=this,q=r.a.aA(new A.be("present",r.b,r.c,B.w,B.lv,B.k1)),p=A.cv(r.d)
r.w=p
s=r.f
return A.c([new A.mP(new A.ba("present",A.c([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iaq:1}
A.mP.prototype={
am(a){var s,r=this,q=a.bX(r.d),p=a.b,o=p.a
A.bG(o,null)
A.bc(o,r.a.aj())
A.bP(o,r.b.b)
A.bi(o,r.c)
A.aF(o,0,q.b)
s=a.c.e
A.q(o,"uExposure",new A.x(B.e,s.a))
A.q(o,"uVignette",new A.x(B.e,s.e))
A.q(o,"uGrain",new A.x(B.e,s.f))
A.q(o,"uOutputEncoding",new A.x(B.e,r.e===B.b6?1:0))
A.q(o,"uToneMap",B.c4)
p.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.lD.prototype={
gE(){return"ps1Quantize"},
aw(a,b){B.a.k(a.a,new A.aw("ps1Quantize",B.J,A.c([new A.Q(this.e,B.i),new A.Q(this.f,B.k)],t.C),!1))},
au(a){var s=this,r="ps1Quantize",q=s.a.aA(new A.be(r,s.b,s.c,B.w,B.ln,B.jX)),p=A.cv(s.d),o=s.e,n=s.f
return A.c([new A.mQ(new A.ba(r,A.c([new A.Q(o,B.i),new A.Q(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iaq:1}
A.mQ.prototype={
am(a){var s=this,r=a.ap(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bG(o,a.ap(s.e.a).b)
A.bc(o,s.a.aj())
A.bP(o,s.b.b)
A.aF(o,0,r.b)
A.q(o,"uScene",B.u)
A.q(o,"uQuantizationBits",new A.x(B.e,p.ay))
A.q(o,"uDitherStrength",new A.x(B.e,p.Q))
A.bi(o,s.c)
q.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.fk.prototype={}
A.lS.prototype={
gE(){return"shadow"},
aw(a,b){B.a.k(a.a,new A.aw("shadowCaster",B.j6,A.c([new A.Q(this.z,B.k)],t.C),!1))},
au(a){var s=this,r="shadowCaster",q=s.a.aA(new A.be(r,s.b,s.c,B.dr,B.dq,B.l_))
return A.c([new A.mT(new A.ba(r,A.c([new A.Q(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iaq:1}
A.mT.prototype={
am(a){var s,r,q,p,o=this,n=a.ap("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bG(s,n.b)
A.bc(s,o.a.aj())
A.cT(s,B.b5,1,0,0,0)
return}r=A.Bj(l)
o.x.$1(r)
s=m.a
A.bG(s,n.b)
A.bc(s,o.a.aj())
A.cT(s,B.b5,1,0,0,0)
A.bP(s,o.b.b)
A.q(s,"uAlbedo",B.u)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.v)(s),++p)o.kg(m,s[p],l,r)},
h6(a,b){var s,r=this.d.$1(b),q=a.a
A.aF(q,0,t._.a(this.e.$1(r.b)))
A.q(q,"uAlphaCutoff",new A.x(B.e,r.fx===B.b_?r.fy:0))
s=this.a.aj()
A.bc(q,r.go?s.eQ(!1):s)},
kg(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gG().r)return
s=a.a
A.q(s,"uUseInstances",B.c3)
n.h3(a,b.gG().c,d)
n.h6(a,b.gG().b)
r=b.gG()
q=n.c.$1(r.a)
A.bi(s,q.a)
s=q.b
r=q.c
if(s)a.ed(r,q.d,0)
else a.aD(r,0)}else if(b instanceof A.dH){p=b.a
if(!p.gG().r)return
if(n.lo(b,c)===B.nT)return
n.h3(a,p.gG().c,d)
A.yv(a,b,!1)
n.h6(a,p.gG().b)
s=p.gG()
q=n.c.$1(s.a)
A.bi(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.ee(r,q.d,o,0)
else a.ec(r,0,o)}else throw A.b(A.n("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eT(b).t(0),null))},
lo(a,b){return B.nS},
h3(a,b,c){var s=a.a
A.q(s,"uModel",new A.x(B.t,new Float32Array(A.W(b.ae().a))))
A.q(s,"uLightViewProjection",new A.x(B.t,new Float32Array(A.W(c.a.a))))},
$iab:1,
gG(){return this.a}}
A.xH.prototype={
$1(a){return this.a.a=a},
$S:67}
A.xI.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:68}
A.lT.prototype={
gE(){return"shadowedWorld"},
aw(a,b){var s=this,r=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.k))
B.a.k(a.a,new A.aw("shadowedWorld",B.d4,r,!1))},
au(a){var s=this,r="shadowedWorld",q=s.a.aA(new A.be(r,s.b,s.c,B.lr,B.lk,B.jW)),p=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.k))
return A.c([new A.mU(new A.ba(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iaq:1}
A.mU.prototype={
am(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.ap("sceneColor"),a7=b4.b,a8=b4.c,a9=a8.c,b0=a8.d,b1=a8.e,b2=a4.z.$0(),b3=a7.a
A.bG(b3,a6.b)
A.bc(b3,a4.a.aj())
s=b0.a
A.cT(b3,B.cy,1,s.c,s.b,s.a)
A.bP(b3,a4.b.b)
A.q(b3,"uAlbedo",B.u)
A.q(b3,"uNormalMap",B.os)
A.q(b3,"uOrmMap",B.ot)
A.q(b3,"uEmissiveMap",B.ou)
A.q(b3,"uLightmap",B.ov)
s=t._
A.aF(b3,1,s.a(a4.y.$0()))
A.q(b3,"uShadowMap",B.av)
r=a9.d
q=t.n
A.q(b3,"uCameraPosition",new A.x(B.m,new Float32Array(A.W(A.c([r.a,r.b,r.c],q)))))
A.q(b3,"uShadowMapTexelSize",new A.x(B.au,new Float32Array(A.W(A.c([1/a4.ch,1/a4.CW],q)))))
A.q(b3,"uShadowFilterRadius",new A.x(B.e,b0.at))
A.q(b3,"uShadowBias",new A.x(B.e,b0.db))
A.aF(b3,2,s.a(a4.at.$0()))
A.q(b3,"uSsao",B.eh)
A.q(b3,"uVertexSnapGrid",new A.x(B.e,b1.ax))
A.q(b3,"uSceneColorSize",new A.x(B.au,new Float32Array(A.W(A.c([a4.ax,a4.ay],q)))))
A.q(b3,"uViewProjection",new A.x(B.t,new Float32Array(A.W(a9.c.a))))
A.q(b3,"uView",new A.x(B.t,new Float32Array(A.W(a9.a.a))))
A.q(b3,"uLightViewProjection",new A.x(B.t,new Float32Array(A.W(b2.a.a))))
s=b0.b
A.q(b3,"uFogColor",new A.x(B.m,new Float32Array(A.W(A.c([s.a,s.b,s.c],q)))))
A.q(b3,"uFogStart",new A.x(B.e,b0.c))
A.q(b3,"uFogEnd",new A.x(B.e,b0.d))
s=b0.e
A.q(b3,"uFogHeightFalloff",new A.x(B.e,s==null?0:s))
s=b0.f
A.q(b3,"uFogDensity",new A.x(B.e,s==null?0:s))
p=a4.Q.$0()
s=A.c([],t.cv)
r=a4.as.$0()
r=J.O(r==null?B.bu:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.Q
k=o?a5:p.c
if(k==null)k=B.aw
A.q(b3,"uLightPosition",new A.x(B.m,new Float32Array(A.W(A.c([l.a,l.b,l.c],q)))))
A.q(b3,"uLightDirection",new A.x(B.m,new Float32Array(A.W(A.c([k.a,k.b,k.c],q)))))
j=o?a5:p.d
if(j==null)j=B.K
A.q(b3,"uLightColor",new A.x(B.m,new Float32Array(A.W(A.c([j.a,j.b,j.c],q)))))
r=o?a5:p.e
A.q(b3,"uLightIntensity",new A.x(B.e,r==null?0:r))
A.q(b3,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=b0.go
r=i==null
h=r?a5:i.a
if(h==null)h=B.Q
g=r?a5:i.b
if(g==null)g=B.K
A.q(b3,"uDirectionalDirection",new A.x(B.m,new Float32Array(A.W(A.c([h.a,h.b,h.c],q)))))
A.q(b3,"uDirectionalColor",new A.x(B.m,new Float32Array(A.W(A.c([g.a,g.b,g.c],q)))))
r=r?a5:i.c
A.q(b3,"uDirectionalIntensity",new A.x(B.e,r==null?0:r))
for(r=b0.id,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a5
n=e==null
d=n?a5:e.b
if(d==null)d=B.v
c=n?a5:e.c
if(c==null)c=B.K
m=""+f
A.q(b3,"uPointPosition"+m,new A.x(B.m,new Float32Array(A.W(A.c([d.a,d.b,d.c],q)))))
A.q(b3,"uPointColor"+m,new A.x(B.m,new Float32Array(A.W(A.c([c.a,c.b,c.c],q)))))
b=n?a5:e.d
if(b==null)b=0
A.q(b3,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a5:e.e
if(n==null)n=1
A.q(b3,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a5
r=e==null
d=r?a5:e.b
if(d==null)d=B.v
a=r?a5:e.c
if(a==null)a=B.aw
c=r?a5:e.d
if(c==null)c=B.K
n=""+f
A.q(b3,"uDirectSpotPosition"+n,new A.x(B.m,new Float32Array(A.W(A.c([d.a,d.b,d.c],q)))))
A.q(b3,"uDirectSpotDirection"+n,new A.x(B.m,new Float32Array(A.W(A.c([a.a,a.b,a.c],q)))))
A.q(b3,"uDirectSpotColor"+n,new A.x(B.m,new Float32Array(A.W(A.c([c.a,c.b,c.c],q)))))
m=r?a5:e.e
if(m==null)m=0
A.q(b3,"uDirectSpotIntensity"+n,new A.x(B.e,m))
m=r?a5:e.f
if(m==null)m=1
A.q(b3,"uDirectSpotRange"+n,new A.x(B.e,m))
m=r?a5:e.r
if(m==null)m=0.3
A.q(b3,"uDirectSpotInnerCos"+n,new A.x(B.e,Math.cos(m)))
m=r?a5:e.w
if(m==null)m=0.5
A.q(b3,"uDirectSpotOuterCos"+n,new A.x(B.e,Math.cos(m)))
r=r?0:1
A.q(b3,"uDirectSpotEnabled"+n,new A.x(B.e,r))}s=o?a5:p.f
A.q(b3,"uLightRange",new A.x(B.e,s==null?1:s))
s=o?a5:p.r
if(s==null)s=0.3
A.q(b3,"uLightInnerCos",new A.x(B.e,Math.cos(s)))
s=o?a5:p.w
if(s==null)s=0.5
A.q(b3,"uLightOuterCos",new A.x(B.e,Math.cos(s)))
a0=b0.fx
A.q(b3,"uAmbientColor",new A.x(B.m,new Float32Array(A.W(A.c([a0.a,a0.b,a0.c],q)))))
A.q(b3,"uAmbientIntensity",new A.x(B.e,b0.fy))
A.q(b3,"uAmbientLightScale",new A.x(B.e,b0.ax))
A.q(b3,"uDirectLightScale",new A.x(B.e,b0.ay))
s=b0.dx
A.q(b3,"uReflectionColor",new A.x(B.m,new Float32Array(A.W(A.c([s.a,s.b,s.c],q)))))
A.q(b3,"uReflectionIntensity",new A.x(B.e,b0.dy))
A.q(b3,"uReflectionConfidence",new A.x(B.e,b0.fr))
A.q(b3,"uRainWetness",new A.x(B.e,b1.w))
A.q(b3,"uSurfaceSnowCoverage",new A.x(B.e,b1.x))
A.q(b3,"uSurfaceDissolution",new A.x(B.e,b1.y))
s=b0.k3
a1=A.hw(s,0,A.e5(4,"count",t.S),A.B(s).c).bD(0)
A.q(b3,"uThermalSourceCount",new A.x(B.e,a1.length))
for(f=0;f<4;++f){s=a1.length
if(f<s){if(!(f<s))return A.d(a1,f)
a2=a1[f]}else a2=a5
s=a2==null
d=s?a5:a2.b
if(d==null)d=B.v
r=""+f
A.q(b3,"uThermalSourcePosition"+r,new A.x(B.m,new Float32Array(A.W(A.c([d.a,d.b,d.c],q)))))
o=s?a5:a2.c
if(o==null)o=1
A.q(b3,"uThermalSourceRadius"+r,new A.x(B.e,o))
s=s?a5:a2.d
if(s==null)s=0
A.q(b3,"uThermalSourceDissolution"+r,new A.x(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.v)(b3),++a3)a4.fC(a7,b3[a3],r,b0)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.v)(a8),++a3)a4.fC(a7,a8[a3],r,b0)},
fC(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.q(s,"uUseInstances",B.c3)
n.h4(a,b.gG().c)
n.h7(a,b.gG().b,b.gG().e,b.gG().f,c,b.gG().w,d)
r=n.c.$1(b.gG().a)
A.bi(s,r.a)
s=r.b
q=r.c
if(s)a.ed(q,r.d,0)
else a.aD(q,0)}else if(b instanceof A.dH){p=b.a
n.h4(a,p.gG().c)
A.yv(a,b,!0)
n.h7(a,p.gG().b,p.gG().e,p.gG().f,c,p.gG().w,d)
r=n.c.$1(p.gG().a)
A.bi(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.ee(q,r.d,o,0)
else a.ec(q,0,o)}else throw A.b(A.n("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eT(b).t(0),null))},
h7(a,b,c,d,e,f,g){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aF(o,0,p.a(s.e.$1(q.b)))
A.aF(o,3,p.a(s.f.$1(q.x)))
A.aF(o,4,p.a(s.r.$1(r)))
A.aF(o,5,p.a(s.w.$1(r)))
A.aF(o,6,p.a(s.x.$1(r)))
A.q(o,"uAlphaCutoff",new A.x(B.e,q.fx===B.b_?q.fy:0))
A.q(o,"uOpaqueCoverage",new A.x(B.e,c===B.aJ?0:1))
A.q(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.q(o,"uMaterialTint",new A.x(B.m,new Float32Array(A.W(A.c([q.d,q.e,q.f],p)))))
A.q(o,"uEmissiveStrength",new A.x(B.e,q.w))
A.q(o,"uUvScaleOffset",new A.x(B.or,new Float32Array(A.W(A.c([q.db,q.dx,0,0],p)))))
A.q(o,"uNormalStrength",new A.x(B.e,q.z*g.ch))
A.q(o,"uRoughness",new A.x(B.e,q.at*g.CW))
A.q(o,"uMetallic",new A.x(B.e,q.ax*g.cx))
A.q(o,"uSpecularScale",new A.x(B.e,g.cy))
A.q(o,"uClearcoatStrength",new A.x(B.e,q.ch))
A.q(o,"uClearcoatRoughness",new A.x(B.e,q.CW))
A.q(o,"uOcclusionStrength",new A.x(B.e,1))
A.q(o,"uLightmapIntensity",new A.x(B.e,0))
A.q(o,"uReceivesShadow",new A.x(B.e,q.id&&f?1:0))
A:{p=r
if(B.aJ===c){switch(d.a){case 0:p=B.fF
break
case 1:p=B.fE
break}break A}if(B.U===c||B.fD===c){p=s.a.aj()
break A}}A.bc(o,q.go?p.eQ(!1):p)},
h4(a,b){var s=b.ae(),r=a.a
A.q(r,"uModel",new A.x(B.t,new Float32Array(A.W(s.a))))
A.q(r,"uNormalMatrix",new A.x(B.t,new Float32Array(A.W(s.ev().a))))},
$iab:1,
gG(){return this.a}}
A.lV.prototype={
gE(){return"ssaoOcclusion"},
aw(a,b){B.a.k(a.a,new A.aw("ssaoOcclusion",B.bd,A.c([new A.Q(this.w,B.k)],t.C),!1))},
au(a){var s=this,r="ssaoOcclusion",q=s.a.aA(new A.be(r,s.b,s.c,B.w,B.dv,B.jQ)),p=A.cv(s.d)
return A.c([new A.mX(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iaq:1}
A.mX.prototype={
am(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bG(m,a.ap("ssaoRaw").b)
A.bc(m,p.a.aj())
if(n<=0){A.cT(m,B.T,1,1,1,1)
return}A.cT(m,B.T,1,0,0,0)
s=p.e.$0()
A.bP(m,p.b.b)
A.aF(m,0,t._.a(p.d.$0()))
A.q(m,"uSceneDepth",B.u)
A.q(m,"uNear",new A.x(B.e,s.f))
A.q(m,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.q(m,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.q(m,"uProjScaleY",new A.x(B.e,r[5]))
A.q(m,"uRadius",new A.x(B.e,p.f))
A.q(m,"uStrength",new A.x(B.e,n))
A.bi(m,p.c)
o.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.lU.prototype={
gE(){return"ssaoBlur"},
aw(a,b){B.a.k(a.a,new A.aw("ssaoBlur",B.bd,A.c([new A.Q(this.y,B.i),new A.Q(this.z,B.k)],t.C),!1))},
au(a){var s=this,r="ssaoBlur",q=s.a.aA(new A.be(r,s.b,s.c,B.w,B.ld,B.l3)),p=A.cv(s.d)
return A.c([new A.mW(new A.ba(r,A.c([new A.Q(s.y,B.i),new A.Q(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iaq:1}
A.mW.prototype={
am(a){var s,r,q=this,p=a.b,o=p.a
A.bG(o,a.ap("ssaoBlurred").b)
A.bc(o,q.a.aj())
if(a.c.e.c<=0){A.cT(o,B.T,1,1,1,1)
return}A.cT(o,B.T,1,0,0,0)
s=q.f.$0()
A.bP(o,q.b.b)
r=t._
A.aF(o,0,r.a(q.d.$0()))
A.q(o,"uSsaoRaw",B.u)
A.aF(o,1,r.a(q.e.$0()))
A.q(o,"uSceneDepth",B.av)
A.q(o,"uTexelSize",new A.x(B.au,new Float32Array(A.W(A.c([1/q.r,1/q.w],t.n)))))
A.q(o,"uNear",new A.x(B.e,s.f))
A.q(o,"uFar",new A.x(B.e,s.r))
A.bi(o,q.c)
p.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.m7.prototype={
gE(){return"vhs"},
aw(a,b){var s=this.w
a.b.k(0,s.a)
B.a.k(a.a,new A.aw("vhs",B.J,A.c([new A.Q(this.r,B.i),new A.Q(s,B.O),new A.Q(s,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be("vhs",s.b,s.c,B.w,B.lg,B.jZ)),q=A.cv(s.d),p=s.r,o=s.w
return A.c([new A.n4(new A.ba("vhs",A.c([new A.Q(p,B.i),new A.Q(o,B.O),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iaq:1}
A.n4.prototype={
am(a){var s,r=this,q=a.ap(r.f.a),p=a.ap(r.r.a),o=a.b,n=a.c.e,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bG(m,p.b)
A.bc(m,r.a.aj())
A.bP(m,r.b.b)
A.aF(m,0,q.b)
A.q(m,"uScene",B.u)
A.aF(m,1,t._.a(r.d.$0()))
A.q(m,"uHistory",B.av)
A.q(m,"uTime",new A.x(B.e,r.e.$0()))
A.q(m,"uChromaWeight",new A.x(B.e,n.ch))
A.q(m,"uTrackingWeight",new A.x(B.e,l))
A.q(m,"uNoiseWeight",new A.x(B.e,n.cx))
A.q(m,"uHeadSwitchWeight",new A.x(B.e,n.cy))
A.q(m,"uDropoutWeight",new A.x(B.e,n.db))
A.q(m,"uGhostWeight",new A.x(B.e,s))
A.bi(m,r.c)
o.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.mg.prototype={
gE(){return"volumetricLight"},
aw(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.k(p,new A.aw("volumetricLight",B.bd,A.c([new A.Q(s.x,B.i),new A.Q(r,B.k)],q),!1))
B.a.k(p,new A.aw("volumetricComposite",B.J,A.c([new A.Q(r,B.i),new A.Q(s.y,B.i),new A.Q(s.z,B.k)],q),!1))},
au(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aA(new A.be(l,i,m.c,B.w,B.dv,B.k3)),g=m.e,f=A.cv(g),e=m.Q
B.a.k(e,f)
s=m.w
r=t.C
q=A.c([new A.n6(new A.ba(l,A.c([new A.Q(m.x,B.i),new A.Q(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aA(new A.be(k,i,m.d,B.w,B.lt,B.l4))
n=A.cv(g)
B.a.k(e,n)
B.a.k(q,new A.n5(new A.ba(k,A.c([new A.Q(s,B.i),new A.Q(m.y,B.i),new A.Q(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
a_(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.v)(s),++p)q.deleteVertexArray(A.a(s[p].a))
B.a.O(s)},
$iaq:1}
A.n6.prototype={
am(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=b3.ap(a5.d),a8=b3.b,a9=a5.f.$0(),b0=b3.c.d,b1=b0.go,b2=a8.a
A.bG(b2,a7.b)
A.bc(b2,a5.a.aj())
A.cT(b2,B.T,1,0,0,0)
A.bP(b2,a5.b.b)
A.aF(b2,0,t._.a(a5.e.$0()))
A.q(b2,"uSceneDepth",B.u)
A.q(b2,"uNear",new A.x(B.e,a9.f))
A.q(b2,"uFar",new A.x(B.e,a9.r))
A.q(b2,"uViewProjection",new A.x(B.t,new Float32Array(A.W(a9.c.a))))
s=a9.a.a
A.q(b2,"uView",new A.x(B.t,new Float32Array(A.W(s))))
r=a9.x
if(r===$){q=a9.b.nt()
a9.x!==$&&A.yB()
a9.x=q
r=q}A.q(b2,"uInverseProjection",new A.x(B.t,new Float32Array(A.W(r.a))))
p=b1==null
A.q(b2,"uShaftIntensity",new A.x(B.e,p?0:b1.c*0.15))
o=b0.f
A.q(b2,"uFogDensity",new A.x(B.e,o==null?0:o))
A.q(b2,"uAnisotropy",new A.x(B.e,b0.y))
o=b0.r
n=t.n
A.q(b2,"uVolumetricAlbedo",new A.x(B.m,new Float32Array(A.W(A.c([o.a,o.b,o.c],n)))))
A.q(b2,"uVolumetricHeightFalloff",new A.x(B.e,b0.w))
A.q(b2,"uVolumetricDustDensity",new A.x(B.e,b0.x))
A.q(b2,"uVolumetricJitter",new A.x(B.e,b0.z))
A.q(b2,"uVolumetricIntensity",new A.x(B.e,b0.Q))
A.q(b2,"uVolumetricSampleCount",new A.x(B.e,b0.as))
if(p)m=B.Q
else{o=b1.a.gac()
l=o.a
k=s.length
if(0>=k)return A.d(s,0)
j=s[0]
i=o.b
if(4>=k)return A.d(s,4)
h=s[4]
o=o.c
if(8>=k)return A.d(s,8)
g=s[8]
f=s[1]
e=s[5]
if(9>=k)return A.d(s,9)
d=s[9]
c=s[2]
b=s[6]
if(10>=k)return A.d(s,10)
m=new A.C(l*j+i*h+o*g,l*f+i*e+o*d,l*c+i*b+o*s[10]).gac()}a=p?a6:b1.b
if(a==null)a=B.K
A.q(b2,"uLightDir",new A.x(B.m,new Float32Array(A.W(A.c([m.a,m.b,m.c],n)))))
A.q(b2,"uLightColor",new A.x(B.m,new Float32Array(A.W(A.c([a.a,a.b,a.c],n)))))
a0=A.JW(4,a9.d,b0.k2)
A.q(b2,"uVolumetricSourceCount",new A.x(B.e,a0.length))
for(a1=0;a1<4;++a1){s=a0.length
if(a1<s){if(!(a1<s))return A.d(a0,a1)
a2=a0[a1]}else a2=a6
s=a2==null
a3=s?a6:a2.b
if(a3==null)a3=B.v
a4=s?a6:a2.c
if(a4==null)a4=B.v
p=""+a1
A.q(b2,"uSourcePosition"+p,new A.x(B.m,new Float32Array(A.W(A.c([a3.a,a3.b,a3.c],n)))))
A.q(b2,"uSourceColor"+p,new A.x(B.m,new Float32Array(A.W(A.c([a4.a,a4.b,a4.c],n)))))
o=s?a6:a2.d
if(o==null)o=0
A.q(b2,"uSourceIntensity"+p,new A.x(B.e,o))
o=s?a6:a2.e
if(o==null)o=1
A.q(b2,"uSourceReferenceDistance"+p,new A.x(B.e,o))
s=s?a6:a2.f
if(s==null)s=1
A.q(b2,"uSourceCutoffDistance"+p,new A.x(B.e,s))}A.bi(b2,a5.c)
a8.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.n5.prototype={
am(a){var s=this,r=a.bX(s.e),q=a.bX(s.d),p=a.b,o=p.a
A.bG(o,r.b)
A.BG(o,1)
A.bc(o,B.cF)
A.bP(o,s.b.b)
A.aF(o,0,q.b)
A.q(o,"uVolumetric",B.u)
A.q(o,"uVolumetricStrength",B.c4)
A.bi(o,s.c)
p.aD(3,0)},
$iab:1,
gG(){return this.a}}
A.iS.prototype={}
A.mk.prototype={
gE(){return"world"},
aw(a,b){B.a.k(a.a,new A.aw("worldOpaqueTransparent",B.d4,A.c([new A.Q(this.e,B.k)],t.C),!1))},
au(a){var s=this,r=s.a.aA(new A.be("safeWorld",s.b,s.c,B.lu,B.w,B.ko)),q=s.e
return A.c([new A.n9(new A.ba("worldOpaqueTransparent",A.c([new A.Q(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iaq:1}
A.n9.prototype={
am(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bG(j,a.ap(n.d).b)
A.bc(j,n.a.aj())
s=k.a
A.cT(j,B.cy,1,s.c,s.b,s.a)
A.bP(j,n.b.b)
A.q(j,"uViewProjection",new A.x(B.t,new Float32Array(A.W(l.c.c.a))))
r=k.go
q=r==null?null:r.a
if(q==null)q=B.Q
s=t.n
A.q(j,"uLightDir",new A.x(B.m,new Float32Array(A.W(A.c([q.a,q.b,q.c],s)))))
p=k.fx
A.q(j,"uAmbientColor",new A.x(B.m,new Float32Array(A.W(A.c([p.a,p.b,p.c],s)))))
A.q(j,"uAmbientIntensity",new A.x(B.e,k.fy))
A.q(j,"uAmbientLightScale",new A.x(B.e,k.ax))
A.q(j,"uDirectLightScale",new A.x(B.e,k.ay))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.v)(j),++o)n.hj(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.v)(l),++o)n.hj(m,l[o])},
hj(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dH){s=b.a
n.hk(a,s.gG().c)
A.yv(a,b,!0)
r=n.c.$1(s.gG().a)
A.bi(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.ee(p,r.d,o,0)
else a.ec(p,0,o)}else if(t.yz.b(b)){q=a.a
A.q(q,"uUseInstances",B.c3)
n.hk(a,b.gG().c)
r=n.c.$1(b.gG().a)
A.bi(q,r.a)
q=r.b
p=r.c
if(q)a.ed(p,r.d,0)
else a.aD(p,0)}else throw A.b(A.n("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eT(b).t(0),null))},
hk(a,b){var s=b.ae(),r=a.a
A.q(r,"uModel",new A.x(B.t,new Float32Array(A.W(s.a))))
A.q(r,"uNormalMatrix",new A.x(B.t,new Float32Array(A.W(s.ev().a))))},
$iab:1,
gG(){return this.a}}
A.oF.prototype={
cz(a){var s,r,q
a.A()
s=A.Z(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.Q||a.as){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.F
else q=r===0?B.bJ:B.N
return new A.dN(q,s)},
iI(a){var s,r=this.cz(a).a
A:{if(B.F===r){s=B.mG
break A}if(B.N===r){s=B.dR
break A}s=B.ap
break A}return s}}
A.kU.prototype={
B(){return"GpuBufferUsage."+this.b}}
A.ik.prototype={
B(){return"GpuBufferKind."+this.b}}
A.io.prototype={
B(){return"GpuTextureFilter."+this.b}}
A.kW.prototype={
B(){return"GpuTextureWrap."+this.b}}
A.kT.prototype={}
A.kV.prototype={}
A.f2.prototype={
B(){return"GpuTargetAttachment."+this.b}}
A.im.prototype={}
A.il.prototype={
B(){return"GpuDeviceStatus."+this.b}}
A.fj.prototype={
B(){return"ShaderCompileStage."+this.b}}
A.iW.prototype={
t(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dg.prototype={
B(){return"UniformType."+this.b}}
A.x.prototype={}
A.fU.prototype={
B(){return"ClearMask."+this.b}}
A.kA.prototype={
aD(a,b){var s=this.a
if(s.b!==B.j)A.f(A.i(u.k))
s.a.drawArrays(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bH(a,1)},
ec(a,b,c){var s=this.a
if(s.b!==B.j)A.f(A.i(u.k))
s.a.drawArraysInstanced(A.h(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bH(a,c)},
ed(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.f(A.i(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bH(a,1)},
ee(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.f(A.i(u.k))
s=v.G
r=A.h(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.h(s.WebGL2RenderingContext.UNSIGNED_INT):A.h(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aT(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bH(a,c)},
$iEx:1}
A.h7.prototype={
B(){return"GpuResourceCandidateState."+this.b}}
A.hj.prototype={
i7(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.i("resource is not in candidate: "+a))
return s}}
A.pK.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.i("GPU resource adapter is not initialized"))
return s},
dk(a){var s,r,q,p,o,n=this
if(n.e)A.f(A.i("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.i("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.i("GPU resource candidate is already open"))
s=A.iH(a)
p=n.b
r=p.dk(s)
try{q=new A.hj(r,n.dN(s,a),B.al)
n.d=q
return q}catch(o){p.eG(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.i("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dQ(s.b)
r.b.a_()
r.c=null
r.e=!0},
dN(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("I<1>")
s=new A.I(k,i.a(new A.pL()),j)
for(h=s,g=J.O(h.a),h=new A.V(g,h.b,h.$ti.i("V<1>")),f=a.a;h.m();){r=g.gn()
q=A.BM(f,a.fA(r,a5))
J.e6(a3,q)
J.b6(a2,r,q)}e=A.J(new A.I(k,i.a(new A.pM()),j),j.i("p.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.v)(k),++d){o=k[d]
n=A.Dg(J.E3(o,11))
if(i){h=J.b_(a2,"sceneColor")
h.toString
J.b6(a2,o,h)}else{h=n
if(typeof h!=="number")return h.oZ()
if(h>=2){h=J.b_(a2,"sceneColor#1")
h.toString
J.b6(a2,o,h)}else{m=A.BM(f,a.fA(o,a5))
J.e6(a3,m)
J.b6(a2,o,m)}}}a0=A.aV(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.B(a0).i("bM<1>"),a0=new A.bM(a0,k),a0=new A.al(a0,a0.gu(0),k.i("al<a_.E>")),j=a.a,i=t.V,k=k.i("a_.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.z7(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
fA(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.im(s,s,1,B.bb,!0)}if(a==="sceneDepth")return new A.im(n,m,1,B.bb,!0)
r=B.c.U(a,"ssao")||B.c.U(a,"bloomBlur")||B.c.U(a,"dofBlur")||B.c.U(a,"volumetricLight")
q=r?B.d.af(n+1,2):n
p=r?B.d.af(m+1,2):m
s=a==="sceneColor"
o=s||B.c.U(a,"sceneColor#")
s=s?b.d:1
return new A.im(q,p,s,o?B.d2:B.j3,o)},
dQ(a){var s,r,q,p,o,n=A.f6(t.mf.a(a).gak(),t._)
for(n=A.fz(n,n.r,A.t(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.z7(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fj(a){if(this.d!==a||a.c!==B.al)throw A.b(A.i("GPU resource candidate is not open"))}}
A.pL.prototype={
$1(a){return!B.c.U(A.u(a),"sceneColor#")},
$S:3}
A.pM.prototype={
$1(a){return B.c.U(A.u(a),"sceneColor#")},
$S:3}
A.hF.prototype={
B(){return"_SlotState."+this.b}}
A.eH.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.db.prototype={
aG(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.eH(B.aY,n.i("eH<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.pD
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bM(a){return this.aG(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.eq(B.d7,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.eq(B.d8,a))
s=q.b
if(s===B.aZ||s===B.aY)throw A.b(A.eq(B.aM,a))},
bN(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eM(a,b){var s,r=this.$ti
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
if(s<0||s>=p.b.length)throw A.b(A.eq(B.d7,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.eq(B.d8,a))
r=q.b
if(r===B.aZ||r===B.aY)throw A.b(A.eq(B.jk,a))
q.b=B.aZ
q.sb3(null)
B.a.k(p.c,s);++p.e},
bR(){return new A.bI(this.nA(),this.$ti.i("bI<+(1,2)>"))},
nA(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bR(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aZ||j===B.aY){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.a8(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.kk.prototype={
B(){return"BlendEquation."+this.b}}
A.eX.prototype={
B(){return"BlendFactor."+this.b}}
A.kv.prototype={
B(){return"CullFace."+this.b}}
A.ky.prototype={
B(){return"DepthFunc."+this.b}}
A.h2.prototype={
eQ(a){var s=this
return A.Ax(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bs.prototype={
B(){return"StateField."+this.b}}
A.v7.prototype={
mN(a){var s,r=this.a
if(r==null)return A.he(B.kO,t.qL)
s=A.Z(t.qL)
if(r.a!==a.a)s.k(0,B.bW)
if(r.b!==a.b)s.k(0,B.bX)
if(r.c!==a.c)s.k(0,B.bY)
if(r.d!==a.d)s.k(0,B.bZ)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.c_)
if(r.r!==a.r)s.k(0,B.c0)
if(r.w!==a.w)s.k(0,B.c1)
if(r.x!==a.x)s.k(0,B.c2)
return s}}
A.e0.prototype={$idF:1}
A.jI.prototype={}
A.jH.prototype={}
A.n8.prototype={}
A.mi.prototype={
jD(a){var s=this,r=A.a(s.a.canvas)
s.c=A.Y(new A.v4(s))
s.d=A.Y(new A.v5(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
ik(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c4(A.h(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c4(A.h(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c4(A.h(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c4(A.h(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c4(A.h(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fS(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.i0(e.getParameter(A.h(k.WebGL2RenderingContext.RENDERER)))
m=A.i0(e.getParameter(A.h(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.rX("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c4(a){var s=A.i0(this.a.getParameter(a))
return typeof s=="number"?B.b.aF(s):0},
fS(a){var s=A.i0(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iEU:1}
A.v4.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.a_},
$S:1}
A.v5.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.w7.prototype={
lP(){var s,r=this
if(r.b!==B.j)A.f(A.i(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.e0(new A.n8(s))},
hd(a){var s=a.a
if(!(s instanceof A.n8))throw A.b(A.a6(a,"query","is not a GPU timer query"))
return s}}
A.n7.prototype={}
A.v3.prototype={}
A.v6.prototype={
mE(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.v3(A.Gi(s))}}
A.kC.prototype={
C(){var s=this
return A.E(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.kg.prototype={
gnF(){var s=this.cx
return new A.ap(s,A.t(s).i("ap<2>")).bc(0,0,new A.o7(),t.i)},
jn(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.r()
s=j.a
A.G(i.connect(A.a(s.destination)))
r=j.d
r===$&&A.r()
A.a(r.gain).value=0.25
q=j.e
q===$&&A.r()
A.a(q.gain).value=0.12
p=j.f
p===$&&A.r()
A.a(p.gain).value=0.4
o=j.r
o===$&&A.r()
A.a(o.gain).value=0.2
n=j.w
n===$&&A.r()
A.a(n.gain).value=0.4
m=j.x
m===$&&A.r()
A.a(m.gain).value=0.1
l=j.y
l===$&&A.r()
A.a(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.G(r[k].connect(i))
r=j.z
r===$&&A.r()
A.a(r.gain).value=1
q=j.Q
q===$&&A.r()
A.a(q.gain).value=0.35
A.G(o.connect(r))
A.G(n.connect(r))
A.G(p.connect(r))
p=j.as
p===$&&A.r()
A.G(r.connect(p))
A.G(p.connect(q))
A.G(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k3!==$&&A.b5()
j.k3=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k4!==$&&A.b5()
j.k4=p
A.G(q.connect(p))
A.G(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.G(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.ok!==$&&A.b5()
j.ok=q
i=A.a(s.createChannelMerger(2))
j.p1!==$&&A.b5()
j.p1=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p2!==$&&A.b5()
j.p2=r
A.G(p.connect(q))
A.G(i.connect(A.a(s.destination)))
j.fg()},
fg(){var s,r=this,q=r.ok
q===$&&A.r()
q.disconnect()
s=r.p2
s===$&&A.r()
s.disconnect()
if(r.p3){A.G(q.connect(s,0))
A.G(q.connect(s,1))
q=r.p1
q===$&&A.r()
A.G(s.connect(q,0,0))
A.G(s.connect(q,0,1))}else{s=r.p1
s===$&&A.r()
A.G(q.connect(s,0,0))
A.G(q.connect(s,1,1))}},
cr(){var s=this.a
if(A.u(s.state)==="suspended")A.a(s.resume())},
cP(a){var s,r,q=this
if(B.c.U(a,"vo-")){s=q.y
s===$&&A.r()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.U(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.r()
return s}r=B.li.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.r()
break A}if("bed"===r){s=q.e
s===$&&A.r()
break A}if("mid"===r){s=q.r
s===$&&A.r()
break A}if("air"===r){s=q.x
s===$&&A.r()
break A}s=q.w
s===$&&A.r()
break A}return s},
kr(){var s,r,q,p,o,n,m,l=this.a,k=A.a1(l.sampleRate),j=B.b.aE(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.az()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dj(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ay.az()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.cP(a)))
r.onended=A.Y(new A.oa(r,q))
r.start()
return!0},
ig(a){return this.dj(a,1)},
oa(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
if(o==null)return
s=this.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=d
q=A.a(s.createGain())
A.a(q.gain).value=c
p=A.a(s.createStereoPanner())
A.a(p.pan).value=B.b.q(e,-1,1)
A.G(r.connect(q))
A.G(q.connect(p))
A.G(p.connect(this.cP(a)))
r.onended=A.Y(new A.o9(r,q,p))
r.start(A.a1(s.currentTime)+B.b.q(b,0,120))},
lK(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.m(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.v)(a5),++q){p=a5[q]
s.l(0,p.a[3],p)}r=a4.ax
o=A.t(r).i("ac<1>")
o=A.J(new A.ac(r,o),o.i("p.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.v)(o),++q){m=o[q]
if(!s.L(m))a4.e2(m)}for(s=new A.ae(s,s.r,s.e,s.$ti.i("ae<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.L(k[3]))a4.e2(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.e2(k[3])
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
l===$&&A.r()
A.G(a2.connect(l))
c.start()
g=new A.jG(c,b,a,a0,a1,a2,f)
r.l(0,h,g)}a3=A.a1(o.currentTime)
h=g.b
A.a(A.a(h.gain).cancelScheduledValues(a3))
A.a(A.a(h.gain).setValueAtTime(A.a1(A.a(h.gain).value),a3))
f=a3+0.12
A.a(A.a(h.gain).linearRampToValueAtTime(B.b.q(k[1],0,1),f))
h=g.d
A.a(A.a(h.frequency).cancelScheduledValues(a3))
A.a(A.a(h.frequency).setValueAtTime(A.a1(A.a(h.frequency).value),a3))
A.a(A.a(h.frequency).linearRampToValueAtTime(B.b.q(k[4],80,2e4),f))
h=g.c
A.a(A.a(h.frequency).cancelScheduledValues(a3))
A.a(A.a(h.frequency).setValueAtTime(A.a1(A.a(h.frequency).value),a3))
A.a(A.a(h.frequency).linearRampToValueAtTime(B.b.q(k[2],20,16e3),f))
h=g.e
A.a(A.a(h.pan).cancelScheduledValues(a3))
A.a(A.a(h.pan).setValueAtTime(A.a1(A.a(h.pan).value),a3))
A.a(A.a(h.pan).linearRampToValueAtTime(B.b.q(k[6],-1,1),f))
h=g.f
A.a(A.a(h.gain).cancelScheduledValues(a3))
A.a(A.a(h.gain).setValueAtTime(A.a1(A.a(h.gain).value),a3))
A.a(A.a(h.gain).linearRampToValueAtTime(B.b.q(k[5],0,1),f))}},
e2(a){var s,r,q=this.ax.a7(0,a)
if(q==null)return
s=A.a1(this.a.currentTime)
r=q.b
A.a(A.a(r.gain).cancelScheduledValues(s))
A.a(A.a(r.gain).setValueAtTime(A.a1(A.a(r.gain).value),s))
A.a(A.a(r.gain).linearRampToValueAtTime(0,s+0.18))
A.Bo(B.fH,q.gmQ())},
ih(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
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
l=j.fs(j.b.ic(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.l(0,o,new A.hG(r,q,n,o,p,e,B.b.q(m,0,1)))
r.onended=A.Y(new A.o8(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.cP(a)))
r.start()},
o9(a,b,c,d){return this.ih(a,b,c,1,d,null,null,null)},
fs(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aG(r,q,p)},
f7(a){var s,r,q,p,o=this
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
r===$&&A.r()
A.G(p.connect(r))
q.onended=A.Y(new A.ob(o,q,p))
q.start()
o.db=q},
dA(a){if(this.p3===a)return
this.p3=a
this.fg()},
iT(a){var s,r,q=this
q.dA(a.b===B.cj)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.b0?1:0.55
r=q.c
r===$&&A.r()
r=A.a(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.r()
A.a(s.gain).value=0.35*q.R8},
bt(a,b,c,d,e,f){var s,r,q=this
q.fx=B.b.q(c==null?q.fx:c,0,1)
q.fy=B.b.q(f==null?q.fy:f,0,1)
q.go=B.b.q(b==null?q.go:b,0,1)
q.id=B.b.q(a==null?q.id:a,0,1)
q.k1=B.b.q(d==null?q.k1:d,0,1)
if(e!=null)q.k2=e
s=q.d
s===$&&A.r()
A.a(s.gain).value=0.25*q.go
s=q.r
s===$&&A.r()
A.a(s.gain).value=0.2*q.go
s=q.w
s===$&&A.r()
A.a(s.gain).value=0.4*q.go
s=q.x
s===$&&A.r()
A.a(s.gain).value=0.1*q.go
s=q.f
s===$&&A.r()
A.a(s.gain).value=0.4*q.id
s=q.e
s===$&&A.r()
A.a(s.gain).value=0.12*q.k1
s=q.y
s===$&&A.r()
A.a(s.gain).value=q.fy
s=q.c
s===$&&A.r()
s=A.a(s.gain)
r=q.k2?0:q.fx*q.p4
s.value=r},
f_(a){var s=null
return this.bt(s,s,s,s,a,s)},
iQ(a){var s=null
return this.bt(s,s,a,s,s,s)},
iS(a){var s=null
return this.bt(s,s,s,s,s,a)},
iP(a){var s=null
return this.bt(s,a,s,s,s,s)},
iO(a){var s=null
return this.bt(a,s,s,s,s,s)},
iR(a){var s=null
return this.bt(s,s,s,a,s,s)},
iN(a){if(this.ch===a)return
this.ch=a
this.bI()},
bI(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cs(p,g)
m=n==null?i.fs(h.ic(p,g)):new A.aG(n.c,n.d,n.e)
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
q.r=B.b.q(m.c,0,1)}}}
A.o7.prototype={
$2(a,b){return Math.max(A.aA(a),t.jS.a(b).r)},
$S:70}
A.o6.prototype={
$1(a){return this.iA(t.q.a(a))},
iA(a){var s=0,r=A.aK(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aL(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a5(A.av(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a5(A.av(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a5(A.av(A.a(j.a.decodeAudioData(m)),k),$async$$1)
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
case 5:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$$1,r)},
$S:71}
A.oa.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.o9.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.o8.prototype={
$1(a){var s=this.a.cx.a7(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.ob.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hG.prototype={}
A.jG.prototype={
a_(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.kh.prototype={
B(){return"AudioCategory."+this.b}}
A.nX.prototype={
jp(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.iG)
if(!B.a.a3(A.c([d.a,d.b,d.c],t.n),new A.nY()))throw A.b(B.hu)},
gE(){return this.a}}
A.nY.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.nC.prototype={
jm(a,b){if(this.a.length===0)throw A.b(B.hd)
if(!B.a.a3(A.c([a.a,a.b,a.c],t.n),new A.nD()))throw A.b(B.hC)}}
A.nD.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.i4.prototype={
A(){var s=t.n
if(B.a.N(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.nE()))throw A.b(B.i_)
s=B.a.N(A.c([0,0.55,1],s),new A.nF())
if(s)throw A.b(B.ir)},
cs(a,b){this.A()
if(a.ax&&!a.ay&&!a.z)return new A.aG(-1.5,2e4,0)
if(a.ay)return new A.aG(-28,320,1)
return new A.aG(-12,1100,0.55)},
oI(a){return this.cs(a,null)}}
A.nE.prototype={
$1(a){return!isFinite(A.aA(a))},
$S:4}
A.nF.prototype={
$1(a){A.aA(a)
return a<0||a>1},
$S:4}
A.nT.prototype={
jo(a){var s=A.t(a)
if(new A.ac(a,s.i("ac<1>")).N(0,new A.nV())||new A.ap(a,s.i("ap<2>")).N(0,new A.nW()))throw A.b(B.iB)}}
A.nV.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.nW.prototype={
$1(a){var s
t.a.a(a)
s=J.aQ(a)
return s.gP(a)||s.N(a,new A.nU())},
$S:72}
A.nU.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.yK.prototype={}
A.o4.prototype={}
A.nZ.prototype={
jq(a,b,c){var s
for(s=this.b.gak(),s=s.gv(s);s.m();)s.gn().A()},
it(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.i("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.i("audio listener room missing: "+a0))
r=this.lc(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.v)(o),++i){h=o[i]
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.v)(o),++i)s.push(o[i].a)
o=B.b.q(l,-60,0)
m=B.d.q(k,120,2e4)
g=B.b.q(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.W(p,"; ")
b=t.N
s=A.ad(s,b)
b=A.ad(q,b)
if(!isFinite(g)||g<0||g>1)A.f(B.iq)
return new A.o4(s,b,o,m,g,n,c)},
cs(a,b){return this.it(a,b,B.bC)},
lc(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.pn
s=t.N
r=A.E([a0,0],s,t.i)
q=A.E([a0,B.a0],s,t.Es)
p=A.aN([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.e,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.Y(k,new A.o_(r))
j=B.a.ga1(k)
p.a7(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.ja(s,!0)}i=o.aQ(j)
h=A.J(i,i.$ti.i("p.E"))
B.a.Y(h,new A.o0())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.v)(h),++g){f=h[g]
e=f.cp(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cr:d).oI(f)
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
p.k(0,e)}}}return B.pm}}
A.o_.prototype={
$2(a,b){var s,r,q
A.u(a)
A.u(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.H(r,s)
return q===0?B.c.H(a,b):q},
$S:73}
A.o0.prototype={
$2(a,b){var s=t.e
return B.c.H(s.a(a).a,s.a(b).a)},
$S:74}
A.ja.prototype={}
A.fR.prototype={}
A.oC.prototype={
i5(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.DX().bz(q).gac()
p.d=q
p.c=p.b.bz(q).gac()
p.a=a}}
A.pl.prototype={}
A.l1.prototype={
dr(a){if(this.at)return
A.qt(a,"requestPointerLock",t.X)},
eX(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bU(r,r.r,r.e,A.t(r).i("bU<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.Z(q)
for(m=J.O(o);m.m();){l=m.gn()
if(l.length!==0)n.k(0,l)}s.ol(p,n)}this.b0()},
dE(a){var s,r,q,p,o,n,m=this
if(m.ch.dE(a))for(s=m.CW.aP("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.k(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.k(0,n)
break}}},
ob(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.b8(c,A.B(c).i("b8<1,aj?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.R(r.connected)||A.u(r.mapping)!=="standard")break A
c=A.u(r.id)
q=A.u(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.b8(n,A.B(n).i("b8<1,z>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.b8(d,A.B(d).i("b8<1,aj>")))
while(d.m()){r=d.gn()
p.push(A.R(r.pressed)?1:A.a1(r.value))}s=new A.lW(!0,c,q,o,p)
break}}d=s==null
m=A.Gv(d?B.oc:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aP(e),q.gaC(q))
q=f.r
q.kn(A.t(q).i("l(1)").a(new A.ql(l)),!0)
for(p=l.gv(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.n:g,h)){if(i.es())n.k(0,h)}else n.k(0,h)}}f.e=A.he(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aP(e),l.gaC(l))){d=r.a(f.c)
d=!B.a.N(c.aP(e),d.gaC(d))}}if(d)i.eu()},
kF(a){var s=this
A.a(a)
if(A.R(a.repeat))return
if(!s.ay)return
if(s.c.k(0,A.u(a.code)))if(B.a.p(s.CW.aP("interact"),A.u(a.code))){if(s.ch.es())s.d.k(0,A.u(a.code))}else s.d.k(0,A.u(a.code))},
kH(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a7(0,A.u(a.code))
r=this.CW
if(B.a.p(r.aP(q),A.u(a.code))){t.Q.a(s)
s=!B.a.N(r.aP(q),s.gaC(s))}else s=!1
if(s)this.ch.eu()},
kL(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.h(a.button)
if(r.c.k(0,s))if(B.a.p(r.CW.aP("interact"),s)){if(r.ch.es())r.d.k(0,s)}else r.d.k(0,s)},
kP(a){var s,r="interact",q="Mouse"+A.h(A.a(a).button),p=this.c
p.a7(0,q)
s=this.CW
if(B.a.p(s.aP(r),q)){t.Q.a(p)
p=!B.a.N(s.aP(r),p.gaC(p))}else p=!1
if(p)this.ch.eu()},
kR(a){var s
A.a(a)
if(!this.ay)return
s=A.a1(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.k(0,s)
this.d.k(0,s)},
kN(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fQ(a,"movementX")
s.as=s.as+s.fQ(a,"movementY")},
kJ(a){var s=this,r=s.b.pointerLockElement==null
s.at=!r
s.as=s.Q=0
if(r)s.b0()},
kT(a){this.b0()},
fQ(a,b){var s=A.Cj(a[b])
if(s==null)s=null
return s==null?0:s},
cJ(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.f6(n.c,t.N)
for(r=n.e,r=A.fz(r,r.r,A.t(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.k(0,o)}t.Q.a(s)
return B.a.N(n.CW.aP(a),s.gaC(s))},
b0(){var s=this
s.c.O(0)
s.d.O(0)
s.f.O(0)
s.r.K(0,s.e)
s.as=s.Q=0
s.ch.eD()}}
A.ql.prototype={
$1(a){return!this.a.p(0,A.u(a))},
$S:3}
A.qk.prototype={
aP(a){var s=this.a.h(0,a)
return s==null?B.n:s},
ol(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.L(a))return
r=t.N
q=A.Z(r)
for(p=A.fz(b,b.r,A.t(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.k(0,n)}s.l(0,a,A.ad(q,r))},
bm(a,b){var s,r,q
t.Q.a(b)
for(s=this.aP(a),r=s.length,q=0;q<r;++q)if(b.a7(0,s[q]))return!0
return!1}}
A.qo.prototype={
es(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
eu(){this.c=this.b=!1
this.d=0},
dE(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.q(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eD(){this.c=this.b=!1
this.d=0}}
A.b7.prototype={
gE(){return this.a}}
A.qJ.prototype={}
A.qG.prototype={
oe(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.Z(h)
r=A.J(b,t.J)
B.a.K(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.v)(r),++p){o=r[p].a
if(!s.k(0,o))throw A.b(A.n("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.fG(n,i.d,a,b,i.a,j,m)
i.fG(l,i.e,a,c,i.b,j,k)
return new A.qJ(n,l,j)},
fG(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.B(d)
s=k.i("H<1,+effectiveScore,light,score(z,b7,z)>")
r=A.J(new A.H(d,k.i("+effectiveScore,light,score(z,b7,z)(1)").a(new A.qH(this,c,b)),s),s.i("a_.E"))
B.a.Y(r,new A.qI())
q=A.Z(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.k(a,m)
q.k(0,l)
s.l(0,l,o.c)}else{B.a.k(g,m)
f.l(0,l,p>=e?k:"Importance score below threshold")}}b.O(0)
b.K(0,q)}}
A.qH.prototype={
$1(a){var s,r
t.J.a(a)
s=a.c.ab(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jt(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:76}
A.qI.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:77}
A.p0.prototype={
e5(a,b){var s,r,q,p,o,n,m,l=this
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
A.qP.prototype={
ja(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.e5(b,c)},
lD(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.k(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.R(s,6.283185307179586)
r=Math.sin(s)
return new A.k(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.cs.prototype={
ez(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.r.dB(s,0,l,k)
m.a=s}r=b.ab(0,a).bz(d.ab(0,a)).gac()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.j_(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=0+h
l=A.j_(m.a,l,b,r,q,p,o,n,f,k,0,0)
m.b=l
j=0+i
l=A.j_(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=l
l=A.j_(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=A.j_(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=k
m.b=A.j_(m.a,k,d,r,q,p,o,n,f,0,j,0)},
aN(a,b,c,d,e){return this.ez(a,b,c,d,e,1,!1,1,1)},
ey(a,b,c,d,e,f,g){return this.ez(a,b,c,d,e,1,!1,f,g)},
ij(a,b,c,d,e,f,g){return this.ez(a,b,c,d,e,f,g,1,1)}}
A.k.prototype={
a2(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
ab(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
bo(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gu(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.uW.prototype={
A(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.N(A.c([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.uX()))throw A.b(B.h5)
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
A.uX.prototype={
$1(a){return!isFinite(A.aA(a))},
$S:4}
A.cu.prototype={
A(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.b(B.i6)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a3(A.c([s,r,q,p,o],t.n),new A.uY()))throw A.b(B.hA)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.b(B.iz)},
gE(){return this.a}}
A.uY.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.eB.prototype={
A(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a3(A.c([o,s,r,q],t.n),new A.uT())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.b(B.hm)},
gE(){return this.a}}
A.uT.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.uU.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=A.Z(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.A()
if(!k.k(0,p.a))throw A.b(B.ic)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.A()
if(!k.k(0,o.a))throw A.b(B.id)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a3(A.c([s,r,n,m],t.n),new A.uV())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.b(B.hs)}}
A.uV.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.uS.prototype={
cq(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a5.A()
s=a5.f
r=a5.r
q=1/Math.pow(1+a5.w/18,0.72)
p=B.b.q((0.05+0.95*s)*(0.18+0.82*r)*q,0,1)
o=1-s
n=Math.exp(Math.log(320)*o+Math.log(2e4)*s)
m=B.b.q(0.18+0.62*(1-a5.as),0,1)
l=a5.b
k=B.b.q(a5.c/18,0,1)
j=A.c([],t.eQ)
if(l>0.001&&a5.a!==B.x){i=a5.a
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
default:h=null}h=B.b.q(l*h*p,0,1)
i=i===B.ao?80:120
B.a.k(j,new A.cu("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.k(j,new A.cu("exterior-wind","weather-wind",B.b.q(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.q(a5.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.k(j,new A.cu("through-wall-thunder","weather-thunder-bed",B.b.q(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a5.a
e=i===B.a6||i===B.an
d=B.b.q(a5.ay*l,0,1)
if(e&&d>0.001)B.a.k(j,new A.cu("structure-hail-impact","weather-hail-roof",B.b.q(d*(0.16+0.38*o)*(0.35+0.65*r),0,1),760+1500*p,48,0,m*0.92,!0))
c=B.b.q(k*f*(1-0.72*s)*(0.3+0.7*r),0,1)
if(c>0.01)B.a.k(j,new A.cu("window-frame-resonance","weather-window-rattle",c*0.22,1800+1600*c,45,0,m*0.65,!0))
if(s>0.03&&l>0.08)B.a.k(j,new A.cu("interior-window-drip","weather-interior-drip",B.b.q(l*s*(0.35+0.65*k),0,1)*0.34,7200,180,0,m,!0))
i=a5.ax
b=B.b.q(i*0.75+B.b.q((a5.d+5)/25,0,1)*0.25,0,1)
if(i>0.02){B.a.k(j,new A.cu("interior-warmth","weather-interior-warmth",0.08*i,900,35,0,0.12,!0))
B.a.k(j,new A.cu("interior-coffee-roomtone","weather-interior-coffee",0.018*i*(0.55+0.45*o),2600,110,0,0.24*m,!0))}a=A.c([],t.wb)
a0=B.d.af(a5.CW,30)
if(a0!==a4.b){a4.b=a0
o=a5.cx
a1=a4.cQ(o,a0,17)*2-1
h=a4.cQ(o,a0,23)
g=a0>0
if(g&&e&&d>0.12&&(a0&1)===0)B.a.k(a,new A.eB("hail-impact-"+a0,"weather-hail-tick",0,B.b.q(0.08+d*0.24,0,1),0.92+h*0.16,a1))
if(g&&c>0.2&&B.d.R(a0,3)===0)B.a.k(a,new A.eB("window-rattle-"+a0,"weather-window-tick",0,B.b.q(0.035+c*0.12,0,1),0.94+a4.cQ(o,a0,31)*0.12,a1*0.55))
if(g&&i>0.5&&B.d.R(a0,15)===0)B.a.k(a,new A.eB("coffee-clink-"+a0,"weather-coffee-clink",0,0.025+i*0.035,0.98+a4.cQ(o,a0,43)*0.08,a1*0.25))}if(a5.Q&&a5.z!==a4.a){o=a4.a=a5.z
a2=Math.max(1,a5.y)
i=Math.pow(1+a2/1200,0.8)
h=B.d.R((a5.cx^o)>>>0,200)
g=a2<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.k(a,new A.eB("lightning-thunder-"+o,g,a2/343,B.b.q((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.q(0.94+B.d.R(o,11)*0.012,0.88,1.08),B.b.q((h-100)/100,-1,1)))}a3=new A.uU(A.ad(j,t.uz),A.ad(a,t.EI),p,n,m,b)
a3.A()
return a3},
cQ(a,b,c){var s=a^b*73244475^c*668265261
s=((s^s>>>16)>>>0)*73244475
return((s^s>>>16)&2147483647)/2147483647}}
A.lW.prototype={
gE(){return this.b}}
A.ml.prototype={}
A.ov.prototype={
oU(a){var s,r,q,p,o,n=B.f.a0(a.C(),null)
this.a.hB(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.ao(s.getItem("quarantine.save.active"))
q=A.ao(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
of(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.ao(s.getItem("quarantine.save.active"))
q=A.ao(s.getItem("quarantine.save.previous"))
p=this.fz(r,a)
if(p!=null)return new A.fh(p,null)
o=this.fz(q,a)
if(o!=null)return new A.fh(o,"recovered previous save")
if(r==null)return B.nm
return B.nl}catch(n){return B.nk}},
fz(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hB(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ah(q) instanceof A.A)return null
else throw q}}}
A.kF.prototype={
jt(a,b,c,d,e){if(this.a.length===0)throw A.b(B.ij)
if(this.b<0)throw A.b(B.hv)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ad(q,t.i)
s=t.z
return A.aV(A.E(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cl.prototype={
B(){return"EndingKind."+this.b}}
A.p9.prototype={
gav(){return this.a}}
A.h3.prototype={
C(){var s=t.N
return A.E(["kind",this.a.b],s,s)}}
A.pc.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:78}
A.bH.prototype={}
A.lv.prototype={
C(){var s,r=this,q=t.N,p=A.m(q,t.z)
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
nu(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ab(0,new A.k(0,1.3499999999999999,0))
return!new A.ko(s,s.a2(0,new A.k(0,1.2000000000000002,0))).de(a,r)}}
A.rQ.prototype={
C(){return A.we(this.a)}}
A.hq.prototype={
C(){return A.E(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.td.prototype={
hB(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.b(B.iE)
s=t.N
r=t.z
q=A.aY(l,s,r)
p=q.h(0,"version")
if(A.aZ(p))o=p!==1&&p!==2
else o=!0
if(o)A.f(A.M("unsupported save version "+A.y(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.f(B.hJ)
k=A.aY(n,s,r)
return A.Bf(A.aY(m,s,r),k,2)}}
A.fh.prototype={}
A.dz.prototype={
B(){return"GameSessionEventType."+this.b}}
A.kR.prototype={
gav(){return this.c},
gaW(){return this.d}}
A.py.prototype={
gav(){return this.a},
gaW(){return this.b}}
A.px.prototype={
gag(){var s=this.d
return new A.py(s.a,s.b,this.e.b.a)},
gii(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.E(["day",l.a,"hour",l.b],k,t.E)
s=m.f
r=t.K
s=A.E(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.E(["entryCount",m.e.b.a],k,t.S)
p=A.AH(m.c).C()
o=m.r
n=o.c
return new A.rQ(A.we(A.E(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.E(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.C()],k,t.z)))},
lH(a,b){if(!B.a.N(a.f,new A.pz(b)))return!1
this.z.lF(a,b)
return!0},
lG(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.ni(n))return!1
m=m.b
m.l(0,n,"true")
s=a.b
m.l(0,n+".consumer",s)
m.l(0,"last-authored-event",o)
if(s==="aftermath")m.l(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bB(q,"=")
if(p<=0||p===q.length-1)continue
m.l(0,B.c.I(q,0,p),B.c.aO(q,p+1))}return!0},
ne(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.t(s).i("ap<2>")
q=A.J(new A.ap(s,r),r.i("p.E"))
B.a.Y(q,new A.pA())
if(q.length===0)return null
s=A.B(q)
r=s.i("I<1>")
p=A.J(new A.I(q,s.i("l(1)").a(new A.pB()),r),r.i("p.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dv(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.R(n,o.length)]
s=l.c
k=new A.d_(a,l.a,s.length-1,B.a.ga6(s).t(0))
j.l(0,a,k)
return k},
lC(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.a6(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cN(B.iQ)}if(n<a)this.cN(B.iR)},
jd(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dD(a)&&s.jc(b)},
og(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.er){r.c=Math.min(1,r.c+0.1)
q.l(0,"ignored."+o.b+"."+o.c,"true")}}},
j9(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Eu(j,A.ad(i.d,h).length)
if(a===B.e7)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.B(r)
A.Et(j,new A.I(r,q.i("l(1)").a(new A.pC(k)),q.i("I<1>")).gu(0))
r=k.f
q=r.b
if(B.a.p(B.jV,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.aE(j.a/1*3)
B.a.k(r.r,new A.ht(q.a,a,b))
m=r.a
A.EF(m,q.a,n,k.b,A.ad(m.d,h));++q.a
q.f4(7)
r.c=16
r.d=6
r.f=!1
m.iV(B.kw)
s.y.m4(o,c)
l=B.b.aE(j.b/1*6)
if(l>0)r.dD(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ap(i,A.t(i).i("ap<2>")).N(0,new A.pD())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cN(B.iV)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cN(B.iU)},
fW(a,b){var s,r=this;++r.y
s=r.d
B.a.k(r.w,new A.kR(s.a,s.b))
B.a.k(r.x,A.Ev(A.HH(a),r.b,r.y-1))},
cN(a){return this.fW(a,null)}}
A.pz.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:15}
A.pA.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:16}
A.pB.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:25}
A.pC.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.u7().j6(this.a.c,a.a)},
$S:82}
A.pD.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.ki.prototype={
eO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.r,a=A.B(b),a0=a.i("e(1)")
a=a.i("H<1,e>")
A.k2(new A.H(b,a0.a(new A.oi()),a),"level")
s=d.w
r=A.B(s)
q=r.i("e(1)")
r=r.i("H<1,e>")
A.k2(new A.H(s,q.a(new A.oj()),r),"room")
p=d.x
o=A.B(p)
A.k2(new A.H(p,o.i("e(1)").a(new A.ok()),o.i("H<1,e>")),"portal")
o=d.y
n=A.B(o)
A.k2(new A.H(o,n.i("e(1)").a(new A.ol()),n.i("H<1,e>")),"stair")
m=new A.H(b,a0.a(new A.om()),a).b8(0)
l=new A.H(s,q.a(new A.on()),r).b8(0)
r=A.m(t.N,t.lT)
for(b=p.length,k=0;k<p.length;p.length===b||(0,A.v)(p),++k){j=p[k]
r.l(0,j.a,j)}i=d.f
if(i!=null){b=i.a
if(!l.p(0,b))throw A.b(A.M("residence.roomId references unknown room "+b,c,c))
b=i.d
if(b!=null&&!r.L(b))throw A.b(A.M("residence.returnPortalId references unknown portal "+b,c,c))
b=i.c
if(b!=null&&b.length===0)throw A.b(B.hh)}for(b=s.length,k=0;k<s.length;s.length===b||(0,A.v)(s),++k){h=s[k]
a=h.b
if(!m.p(0,a))throw A.b(A.M("rooms."+h.a+".floor references unknown level "+a,c,c))
a=h.e
a0=A.B(a)
q=h.a
A.k2(new A.H(a,a0.i("e(1)").a(new A.oo()),a0.i("H<1,e>")),"window in "+q)
a0=h.f
A.k2(a0,"portal reference in "+q)
for(a=a0.length,g=0;g<a0.length;a0.length===a||(0,A.v)(a0),++g){f=a0[g]
j=r.h(0,f)
if(j==null)throw A.b(A.M("rooms."+q+".portalIds references unknown portal "+f,c,c))
if(!(j.b===q||j.c===q))throw A.b(A.M("rooms."+q+".portalIds references "+f+", which does not touch the room",c,c))}}for(b=p.length,k=0;k<p.length;p.length===b||(0,A.v)(p),++k){j=p[k]
a=j.b
if(a!=="outside"&&!l.p(0,a))throw A.b(A.M("portals."+j.a+".a references "+a,c,c))
a0=j.c
if(a0!=="outside"&&!l.p(0,a0))throw A.b(A.M("portals."+j.a+".b references "+a0,c,c))
if(a===a0)throw A.b(A.M("portals."+j.a+" has identical endpoints",c,c))}for(b=o.length,k=0;k<o.length;o.length===b||(0,A.v)(o),++k){e=o[k]
a=e.b
j=r.h(0,a)
if(j==null)throw A.b(A.M("stairs."+e.a+".portalId references unknown portal "+a,c,c))
if(!j.z)throw A.b(A.M("stairs."+e.a+".portalId "+a+" is not marked stair",c,c))}},
eN(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.i("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.i("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.b(A.i("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.b(A.i("authored house story authority must remain external-story-data"))
a1=b.w
s=a1.length
if(s!==a2.b.length||b.x.length!==a2.c.length)throw A.b(A.i("authored/runtime room or portal count mismatch"))
for(r=t.o,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.v)(a1),++p){o=a1[p]
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
for(n=A.B(j),i=n.i("l(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.v)(l),++f){e=l[f]
d=A.bK(new A.I(j,i.a(new A.oh(e)),n),r)
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
if(Math.abs(h-g)>0.0001)A.f(A.i(c+a0+A.y(h)+" != "+A.y(g)))}}for(a1=b.x,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.v)(a1),++p){o=a1[p]
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
A.oc.prototype={
$1(a){var s=A.hT(a,"level"),r=A.bJ(s,"id")
A.bJ(s,"kind")
A.eN(s,"floorY")
return new A.eb(r)},
$S:83}
A.od.prototype={
$1(a){return A.Eb(a,this.a)},
$S:84}
A.oe.prototype={
$1(a){var s=this.a,r=A.hT(a,"portal"),q=A.bJ(r,"id"),p=A.bJ(r,"a"),o=A.bJ(r,"b"),n=A.zt(r,"facingA"),m=A.zt(r,"facingB"),l=A.eN(r,"offsetA"),k=A.eN(r,"offsetB"),j=A.eN(r,"width"),i=A.eN(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.u(r.h(0,"doorKit")):null
return new A.ec(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.aa(r.h(0,"stair"),!0),J.aa(r.h(0,"exterior"),!0),!J.aa(r.h(0,"open"),!1),J.aa(r.h(0,"sticks"),!0))},
$S:85}
A.of.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.hT(a,"stair")
return new A.ee(A.bJ(p,"id"),A.bJ(p,"portalId"),A.Is(p.h(0,s),s),A.np(p.h(0,"min"),"min"),A.np(p.h(0,"max"),"max"),A.np(p.h(0,r),r),A.np(p.h(0,q),q))},
$S:86}
A.og.prototype={
$1(a){return typeof a=="string"?a:A.e2("exterior cell")},
$S:50}
A.oi.prototype={
$1(a){return t.mD.a(a).a},
$S:49}
A.oj.prototype={
$1(a){return t.bJ.a(a).a},
$S:47}
A.ok.prototype={
$1(a){return t.lT.a(a).a},
$S:90}
A.ol.prototype={
$1(a){return t.gI.a(a).a},
$S:91}
A.om.prototype={
$1(a){return t.mD.a(a).a},
$S:49}
A.on.prototype={
$1(a){return t.bJ.a(a).a},
$S:47}
A.oo.prototype={
$1(a){return t.ya.a(a).a},
$S:92}
A.oh.prototype={
$1(a){return t.o.a(a).a===this.a.a},
$S:17}
A.op.prototype={}
A.xG.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fP
break A}if("first"===a){s=B.fQ
break A}s=B.fR
break A}return s},
$S:94}
A.eb.prototype={
gE(){return this.a}}
A.ed.prototype={
gE(){return this.a}}
A.oq.prototype={
$1(a){var s=this.a,r=A.hT(a,"window")
return new A.ef(A.bJ(r,"id"),A.zt(r,"facing"),A.eN(r,"offset")*s,A.eN(r,"sill")*s,A.eN(r,"width")*s,A.eN(r,"height")*s,J.aa(r.h(0,"frosted"),!0))},
$S:95}
A.or.prototype={
$1(a){return typeof a=="string"?a:A.e2("portal id")},
$S:50}
A.ef.prototype={
gE(){return this.a}}
A.ec.prototype={
gE(){return this.a}}
A.ee.prototype={
gE(){return this.a}}
A.xe.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.xB.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.ko.prototype={
ghm(){var s=this.d
return s==null?null:s.a.a},
im(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.B(s)
q=new A.I(s,r.i("l(1)").a(new A.oG(e)),r.i("I<1>"))
p=!q.gv(0).m()?null:q.ga1(0)
if(p==null){n.d=null
return}if(!(n.cL(b,p.f)&&a==="hall"))o=n.cL(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mm(p,B.b.q(d,0,1))},
nH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.fP(g,c,d)
s=h.ki(a,b,c,d)
if(s!=null){h.d=s
return h.fP(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.hu(Math.sqrt(r*r+q*q)/0.08))
o=d.a8(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.ln(a,n,m,o)
l=l||j.b
m=j.a
i=h.od(a,n)
n=i==null?n:i}h.bl(m)
return new A.li(m,n)},
ki(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cL(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cL(c,l)){l=j<0||o
h=l}if(i||h)return new A.mm(m,i?0:1)}return null},
fP(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ab(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.q(a.b+o/p,0,1)
n=A.Bw(k,j,r)
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
ln(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cU(c,!1)
s=h.cS(a,b,c,new A.k(g,0,0))
r=s.a
q=d.c
p=h.cS(a,b,r,new A.k(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cU(p.a,!1)
n=c.a2(0,new A.k(0,0.35,0))
h.bl(n)
if(!h.de(a,b)){m=h.cS(a,b,n,new A.k(g,0,0))
l=h.cS(a,b,m.a,new A.k(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.k(g,r-j,q)
h.bl(i)
if(h.de(a,b))break}h.bl(k)
return new A.cU(k,!1)}}if(o)return new A.cU(r,!0)
if(!p.b)return new A.cU(p.a,!0)
h.bl(c)
return new A.cU(c,!0)},
cS(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cU(c,!1)
s=c.a2(0,d)
this.bl(s)
if(this.de(a,b)){this.bl(c)
return new A.cU(c,!0)}return new A.cU(s,!1)},
bl(a){var s=a.ab(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.a2(0,new A.k(0,1.2000000000000002,0))},
de(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.lk(a,m,s)},
od(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aH(k)
for(r=k.a,q=a.aQ(r),p=J.O(q.a),q=new A.V(p,q.b,q.$ti.i("V<1>"));q.m();){o=p.gn()
n=o.cp(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hi(k,o,s)&&this.ka(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lk(a,b,c){var s,r,q
for(s=a.aQ(b.a),r=J.O(s.a),s=new A.V(r,s.b,s.$ti.i("V<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hi(b,q,c))return!0}return!1},
hi(a,b,c){var s,r,q,p=a.a,o=b.b4(p),n=b.aM(p)
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
ka(a,b,c){var s,r=this
switch(b.b4(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
slN(a){this.a=t.a7.a(a)}}
A.oG.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:96}
A.li.prototype={}
A.cU.prototype={}
A.mm.prototype={}
A.iq.prototype={
gav(){return this.a}}
A.q2.prototype={
m4(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.V,r)
s=B.V[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
j7(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.c}return r},
j8(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.V,q)
p=B.V[q]
if(p.b===a)r+=p.d}return r},
C(){return A.E(["landedCount",this.b],t.N,t.z)}}
A.a7.prototype={}
A.kI.prototype={
gnx(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a3(A.c([r,q,p,o,n,m],t.n),new A.pe())&&o>=r&&n>=q&&m>=p}}
A.pe.prototype={
$1(a){return isFinite(A.aA(a))},
$S:4}
A.kZ.prototype={
A(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.R(s,3)!==0}else s=!0
if(s)throw A.b(A.n("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.n("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnx())throw A.b(A.n("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.v)(l),++r){p=l[r]
if(B.a.N(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.q4()))throw A.b(A.n("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.n("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.n("QHMX index "+o+" exceeds vertex count",m))}}}
A.q4.prototype={
$1(a){return!isFinite(A.aA(a))},
$S:4}
A.q3.prototype={
D(a,b,c,d,e,f,g){var s=this
s.bG(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bG(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bG(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bG(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bG(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bG(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a7(a,b,c,m,n,o,0,0,p),r=new A.a7(g,h,i,m,n,o,1,1,p)
this.ar(s,new A.a7(d,e,f,m,n,o,1,0,p),r)
this.ar(s,r,new A.a7(j,k,l,m,n,o,0,1,p))},
ar(a,b,c){var s=this,r=s.b
B.a.k(r,s.dV(a))
B.a.k(r,s.dV(b))
B.a.k(r,s.dV(c))},
dV(a){var s,r,q=B.a.W(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.i("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
lS(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.kZ(A.ad(g,t.hl),new Uint16Array(A.W(this.b)),new A.kI(s,r,q,p,o,n))
h.A()
return h}}
A.kJ.prototype={}
A.yC.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.aq.p(0,s))A.f(A.i("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:97}
A.xt.prototype={
$2(a,b){var s=t.Ez
return B.c.H(s.a(a).a,s.a(b).a)},
$S:98}
A.dj.prototype={
oT(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.l(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.k(i,p[n])}B.a.k(s,m)}return new A.jl(A.K4(new A.kZ(i,new Uint16Array(A.W(s)),A.Hp(i))),l.a,l.b,l.c,A.c([],k))}}
A.jl.prototype={}
A.f_.prototype={
B(){return"ExteriorCameraBand."+this.b}}
A.kK.prototype={
lZ(a){var s
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
m_(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cJ
break A}if("kitchen"===a||"cellar"===a){s=B.fM
break A}if("bathroom"===a){s=B.fN
break A}if("spare-room"===a){s=B.fO
break A}s=B.cJ
break A}return this.lZ(s)},
hS(a,b,c,d){d.i("p<0>").a(b)
t.Q.a(c)
return new A.bI(this.n9(d.i("e(0)").a(a),b,c,d),d.i("bI<0>"))},
n9(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$hS(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a3(0,B.aq.gaC(B.aq)))throw A.b(A.n("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bU(l,l.r,l.e,r.$ti.i("bU<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.aq.p(0,j))throw A.b(A.i("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eF.prototype={
hx(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.x1.prototype={
$1(a){var s=this
return t.xT.a(a).hx(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:46}
A.x0.prototype={
$1(a){return t.xT.a(a).hx(0,(this.a+this.b)*0.5,this.c)},
$S:46}
A.dy.prototype={
B(){return"FocusKind."+this.b}}
A.eo.prototype={
gE(){return this.b}}
A.ta.prototype={}
A.w9.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:100}
A.xp.prototype={
$1(a){return B.d.q(B.b.aE(a*this.a),0,255)},
$S:101}
A.eE.prototype={}
A.q0.prototype={
nm(){var s,r,q,p,o,n,m=this
m.kq()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.b(A.i("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.i("authored portal endpoint missing: "+o.a))}},
eE(a){var s=this.w
if(s==null)return null
return new A.k(s.a,a,s.c)},
kq(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
n=o.a
if(q.L(n))throw A.b(A.i("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){m=s[p]
n=m.a
if(q.L(n))throw A.b(A.i("duplicate portal "+n))
q.l(0,n,m)}},
aH(a){var s=a.c,r=this.y,q=a.a
return new A.k(s.a+r.j7(q),s.b+r.j8(q),s.c)},
aQ(a){var s=this.c,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.qh(a)),r.i("I<1>"))},
oc(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.a6(a,"roomId","not a portal endpoint"))
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
ic(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a0
s=A.c([new A.a8(a,B.a0)],t.nR)
r=A.aN([a],t.N)
for(q=this.e,p=t.e;s.length!==0;){o=B.a.oj(s,0)
n=o.a
m=o.b
for(l=this.aQ(n),k=J.O(l.a),l=new A.V(k,l.b,l.$ti.i("V<1>"));l.m();){j=k.gn()
i=j.cp(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.J(m,p)
h.push(j)
B.a.k(s,new A.a8(i,h))}}}return B.a0}}
A.qh.prototype={
$1(a){var s
t.e.a(a)
s=this.a
return a.b===s||a.c===s},
$S:102}
A.pd.prototype={}
A.u7.prototype={
j6(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a3(s,new A.u8())}else s=!1
return s}}
A.u8.prototype={
$1(a){return t.o.a(a).w},
$S:17}
A.q5.prototype={
ie(a){var s=this.e,r=A.B(s)
return new A.I(s,r.i("l(1)").a(new A.q8(a)),r.i("I<1>"))},
gjh(){var s,r,q,p,o,n=t.N,m=t.S,l=A.E(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q].f
o=l.h(0,p)
l.l(0,p,(o==null?0:o)+1)}return A.aV(l,n,m)},
bJ(a){return B.a.b5(this.d,new A.q6(a),new A.q7(a))},
eN(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.i("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.i("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.i("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.Z(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.b(A.i("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.i("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aN(["production","proxy","invisible-anchor"],s).p(0,l))throw A.b(A.i("invalid inventory asset status "+m+": "+l))}j=A.Z(s)
i=A.Z(s)
h=A.Z(s)
for(q=a6.e,p=q.length,m=a9.e,o=0;o<q.length;q.length===p||(0,A.v)(q),++o){g=q[o]
l=g.a
if(!j.k(0,l))throw A.b(A.i("duplicate inventory placement "+l))
k=g.b
f=m.h(0,k)
if(f==null)throw A.b(A.i(a7+l+" references "+k))
n=a6.bJ(g.c)
if(g.x&&g.y!=null){e=g.y
e.toString
d=$.DU()
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
if(!A.aN(["none","static","dynamic","kinematic"],s).p(0,c))A.f(A.i("invalid physics body type for "+l))
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
a3=g.ip(n,a8)
a4=g.eI(n,a8)
a5=0.43+e
e=a3.a
b=-a5
a=!0
if(!(d-e<b)){a0=f.c
if(!(d+e>a0.a+a5)){e=a3.c
k=k-e<b||k+e>a0.c+a5||c+a4.b>a0.b+a5||c+a4.a<b}else k=a}else k=a
if(k)throw A.b(A.i(a7+l+" escapes "+f.a))}}}
A.q8.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:207}
A.q6.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:104}
A.q7.prototype={
$0(){return A.f(A.i("inventory asset missing: "+this.a))},
$S:7}
A.d6.prototype={
gE(){return this.a}}
A.cJ.prototype={
ip(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.k(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
eI(a,b){var s=this.f.c.b*b,r=a.r
return new A.k(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.l4.prototype={}
A.qr.prototype={}
A.qp.prototype={}
A.xA.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.qq.prototype={
C(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.t(o).i("ac<1>")
n=A.J(new A.ac(o,n),n.i("p.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.v)(n),++r){q=n[r]
p.l(0,q,o.h(0,q))}return p},
eF(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.h6)
s=t.X
r=A.aY(a,s,s)
s=this.a
s.O(0)
for(q=new A.N(r,A.t(r).i("N<1,2>")).gv(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aZ(o)||o<0)throw A.b(B.hx)
s.l(0,n,o)}}}
A.dK.prototype={}
A.q9.prototype={
oR(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fz(a5,a5.r,A.t(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.v)(n),++g){f=n[g]
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
B.a.k(s,new A.dK(new A.k(d,c,e),a4,16760952,3.8,2.1*this.lb(k),80,180,0.12))}}B.a.Y(s,new A.qa(a6))
return A.hw(s,0,A.e5(4,"count",t.S),t.A_).bD(0)},
lb(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.qa.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.H(a.a.ab(0,s).gu(0),b.a.ab(0,s).gu(0))},
$S:106}
A.en.prototype={
B(){return"Floor."+this.b}}
A.em.prototype={
B(){return"Facing."+this.b}}
A.fs.prototype={
sj5(a){this.w=A.R(a)},
gE(){return this.a}}
A.c9.prototype={
cp(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
b4(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.a6(a,"roomId","not an endpoint of "+s.a))},
aM(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.a6(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.lc.prototype={
gE(){return this.a}}
A.fl.prototype={
gE(){return this.a}}
A.fg.prototype={
gE(){return this.a}}
A.qc.prototype={
n0(a){return B.a.b5(this.c,new A.qd(a),new A.qe(a))},
oO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.i("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.i("soundscape source changed: "+f))
f=t.N
s=A.Z(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){m=r[p]
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
if(k.gP(k)||k.gak().N(0,new A.qf()))throw A.b(A.i("sound emitter "+l+" has no usable cues"))
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
A.qd.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:107}
A.qe.prototype={
$0(){return A.f(A.i("sound emitter missing: "+this.a))},
$S:7}
A.qf.prototype={
$1(a){return B.c.aZ(A.u(a)).length===0},
$S:3}
A.d5.prototype={
gE(){return this.a}}
A.q1.prototype={
c8(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a6(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.ku}q=A.c([],t.Fm)
p=B.b.aU(r)+1
o=B.b.aU(b)
for(n=p;n<=o;++n){m=B.d.R(n,24)
B.a.k(q,new A.f4("tick",m))
if(B.d.R(m,3)===0){B.a.k(q,new A.f4("cuckoo",m))
B.a.k(q,new A.f4("bell",m))}if(B.d.R(m,6)===0)B.a.k(q,new A.f4("chime",m))}l.b=b
return q}}
A.f4.prototype={
gaW(){return this.b}}
A.qb.prototype={
c8(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a6(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.kG}q=A.c([],t.op)
for(p=B.b.aU(r)+1;p<=B.b.aU(b);++p){o=B.d.R(p,24)
n=B.d.R(o,4)
if(n===2)B.a.k(q,B.jn)
if(B.d.R(o,3)===1)B.a.k(q,B.jp)
if(B.d.R(o,8)===5)B.a.k(q,B.js)
if(B.d.R(o,5)===0)B.a.k(q,B.jo)
if(B.d.R(o,7)===3)B.a.k(q,B.jt)
if(n===1)B.a.k(q,B.jq)
if(B.d.R(o,6)===4)B.a.k(q,B.jr)}m.b=b
return q}}
A.d4.prototype={}
A.xz.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.qg.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.E(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.E(["lit",o.a,"examined",o.b],m,r))}return A.E(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.Z(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)d.k(0,s[q].a)
r=A.Z(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.v)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l)r.k(0,n[l].a)
e=A.Z(e)
for(q=0;q<p.length;p.length===n||(0,A.v)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.zM(new A.ac(o,A.t(o).i("ac<1>")),d)){d=f.b
if(A.zM(new A.ac(d,A.t(d).i("ac<1>")),r)){d=f.c
e=!A.zM(new A.ac(d,A.t(d).i("ac<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.i3)
e=f.d
if(e<0||e>2)A.f(B.hi)
a.y.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.v)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.v)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.v)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.v)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.iJ.prototype={
C(){return A.E(["open",this.a,"locked",this.b],t.N,t.y)}}
A.ix.prototype={
C(){return A.E(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bA.prototype={
gE(){return this.a}}
A.p8.prototype={
$1(a){return this.a.p(0,A.u(a))},
$S:3}
A.ep.prototype={
B(){return"Hand."+this.b}}
A.uP.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
f3(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.lb.prototype={
C(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.C[r]
o.l(0,q,s.h(0,q))}return A.E(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
t(a){return new A.H(B.C,t.oI.a(new A.qM(this)),t.jT).W(0," \xb7 ")}}
A.qL.prototype={
$2(a,b){return new A.P(A.u(a),A.u(b),t.q)},
$S:108}
A.qM.prototype={
$1(a){return this.a.a.h(0,A.u(a))},
$S:109}
A.c4.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.E(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gav(){return this.b}}
A.qv.prototype={
cb(a){t.G.a(a)
return a.a===5&&B.a.a3(B.C,new A.qC(this,a))},
ff(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.cb(b))return null
s=this.e++
r=new A.c4(s,a,A.c([A.qK(b,c,d)],t.Bv),e,!1,null,null)
this.b.l(0,s,r)
return r},
eb(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.cb(b))return!1
B.a.k(s.c,A.qK(b,c,B.aL))
return!0},
lB(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.cb(b))return!1
s.r=A.qK(b,0,B.d6)
return!0},
iV(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.O(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.L(p)&&!B.a.p(s,p))B.a.k(s,p)}},
oQ(a){var s
if(!this.b.L(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.t(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ae(r,r.r,r.e,A.t(r).i("ae<2>"));r.m();)s.push(r.d.C())
return A.E(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.qC.prototype={
$1(a){var s
A.u(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.i5.prototype={
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
A.os.prototype={
cz(a){var s,r,q=a==null?null:B.c.aZ(a).toLowerCase()
if(q==null||q.length===0)return B.eN
if(q==="pixeldart")return B.eM
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.i5(B.aT,!1,!0,r,s,s?r:null)}}
A.iL.prototype={}
A.rJ.prototype={
C(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gak(),s=s.gv(s),r=t.N;s.m();){q=s.gn()
p.push(A.E(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.E(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.xo.prototype={
$1(a){A.u(a)
return a.length!==0&&a!==".."},
$S:3}
A.iM.prototype={}
A.lA.prototype={}
A.rL.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.rM.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.rD.prototype={}
A.rC.prototype={
ghC(){var s,r,q="pixeldart",p=this.b,o=p.aI
if(o){s=p.w
s===$&&A.r()
s=s.a.b}else s="safe"
p=A.Bb(q,o?p.glW():B.l5,!1,s)
r=p
if(r==null)r=A.Bb(q,A.c([],t.s),!1,"safe")
p=A.Ba(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
f8(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bN){if(k.aI){s=k.d
s===$&&A.r()
s=s.a.b===B.a_}else s=!1
s=!s
if(s){m.d=B.W;++k.em
j=B.W}if(j===B.bN)return}if(j!==B.W)A.f(A.i(l))
B.f.a0(A.E(["backend","pixeldart","interpolation",0,"facts",A.we(a.a.a)],t.N,t.X),null)
j=k.aI
if(j){s=k.d
s===$&&A.r()
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
r=new A.d8(j)
j=$.Ad()
s=j.b
q=j.c
p=A.yV(k.b/k.c,q,j.a,s)
q=new A.fS(r,p,p.a8(0,r),B.v,B.ox,s,q,k.b/k.c)
j=q}o=new A.kO(j,k.x1,k.x2,-1,k.n6++,k.em,k.en,k.el)
n=new A.ue()
$.A8()
j=$.rT.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.r()
s=k.f
s===$&&A.r()
k.lj(j.lO(s,o),o)
k.d8=k.e.n2()
j=$.rT.$0()
n.b=j
k.d9=n.gn_()/1000},
hW(a){if(this.d!==B.W)A.f(A.i("pixeldart backend is not ready"))
B.f.a0(A.E(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.rE.prototype={
lX(a,b){var s,r,q,p,o,n,m
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
o=A.J(o,A.t(o).c)
B.a.X(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.v)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.lt.prototype={
B(){return"PixeldartQualityTier."+this.b}}
A.rF.prototype={
C(){var s=this
return A.E(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.rG.prototype={
hw(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.n("surface dimensions must be positive",null))
s=a1.a
A:{if(B.F===s){r=new A.fB(1080,1920)
break A}if(B.N===s){r=new A.fB(720,1280)
break A}r=new A.fB(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.aE(r.b*q)
q=B.b.aE(r.a*q)
o=B.b.q(a5/p,0,1)
n=B.b.q(a4/q,0,1)
m=o<n?o:n
r=this.fh(B.b.aE(p*m),320,a5)
q=this.fh(B.b.aE(q*m),180,a4)
l=s===B.F
k=s===B.N
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
break F}return new A.iR(a1,r,q,h,g,i,p,f,e,d,c)},
fh(a,b,c){if(c<b)return c
return B.d.q(a,b,c)}}
A.rH.prototype={}
A.hk.prototype={}
A.rI.prototype={}
A.rK.prototype={
dg(a,b,c,d){return this.nB(a,t.zL.a(b),c,d)},
nB(a,b,c,d){var s=0,r=A.aK(t.c_),q,p,o,n,m
var $async$dg=A.aL(function(e,f){if(e===1)return A.aH(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a5(B.fd.df(new A.rf(d,b),B.lz),$async$dg)
case 3:p=new o.iM(n,m,f)
A.B2(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$dg,r)}}
A.rN.prototype={}
A.rO.prototype={
co(a,b,c){return this.nC(a,t.xJ.a(b),t.tX.a(c))},
nC(a,b,c){var s=0,r=A.aK(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$co=A.aL(function(d,e){if(d===1)return A.aH(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.ga5(),o=o.gv(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gn()
l=p.h(0,m)
if(l==null)l=A.f(A.i("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a5(b.$1(l.c),$async$co)
case 5:k=i.Fh(h.a(g.ai(e,null)))
m=l.a
if(k.b!==m)throw A.b(A.M("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.b(A.M("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a5(B.fg.dg(m,new A.rP(c,l),l.b,k),$async$co)
case 6:i.k(h,e)
s=3
break
case 4:q=new A.lA(A.B2(j))
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$co,r)}}
A.rP.prototype={
$1(a){return this.a.$2(this.b.a,A.u(a))},
$S:110}
A.iw.prototype={
gi_(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gmR(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.rW.prototype={
oM(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bj
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bj
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.iw(!0,B.b.q(q*(0.6+b*0.6),0,1),0.82+s.az()*0.1,0.9+s.az()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
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
l.z=new A.iw(!0,B.b.q(0.6+b*0.6,0,1),0.82+s.az()*0.1,0.9+s.az()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.az()*6}}}
A.lH.prototype={
B(){return"RendererBackendKind."+this.b}}
A.hn.prototype={
B(){return"RendererBackendState."+this.b}}
A.t8.prototype={}
A.lI.prototype={
gE(){return this.a}}
A.t7.prototype={
jy(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.n("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.n("renderer provenance values must be non-empty",null))}},
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
A.t9.prototype={
ds(a,b){if(a<=0||b<=0)throw A.b(A.n("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
i1(a,b){var s,r,q,p,o
for(s=A.ad(this.a.d,t.rO),r=A.B(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a_.E>")),r=r.i("a_.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.tX.prototype={
lI(a){var s,r,q,p,o,n,m,l,k=this.a
k.O(0)
s=a.w
s===$&&A.r()
r=A.B(s)
q=r.i("l(1)").a(new A.tY())
s=B.a.gv(s)
r=new A.V(s,q,r.i("V<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gn()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.l(0,n,A.E(["requested",l,"effective",o],q,p))}}}
A.tY.prototype={
$1(a){return t.r.a(a).Q===B.y},
$S:9}
A.bY.prototype={
B(){return"ShaderDebugMode."+this.b},
gmP(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.iX.prototype={
B(){return"ShaderTuningAvailability."+this.b}}
A.de.prototype={
B(){return"ShaderTuningCategory."+this.b}}
A.cr.prototype={
gnb(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.F(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.F(r,2)
else return B.b.F(r,3)}},
gef(){var s,r,q=this
if(q.Q!==B.y)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.F(r,1)
if(s>=0.01)return B.b.F(r,2)
return B.b.F(r,3)},
gE(){return this.a}}
A.tZ.prototype={
gbq(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.d(B.am,p)
s=B.am[p]
p=this.w
p===$&&A.r()
r=A.B(p)
q=r.i("I<1>")
p=A.J(new A.I(p,r.i("l(1)").a(new A.u5(s)),q),q.i("p.E"))
return p},
gbL(){var s,r=this.gbq(),q=r.length
if(q===0)return null
s=B.d.q(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
nl(){var s,r
if(this.b===5)return
else{s=this.gbL()
r=s==null?null:s.Q===B.y
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.q(s.y+s.w,s.f,s.r)}},
mK(){var s,r
if(this.b===5)return
else{s=this.gbL()
r=s==null?null:s.Q===B.y
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.q(s.y-s.w,s.f,s.r)}},
oo(){var s,r,q,p,o
if(this.b===5)this.e=B.as
else for(s=this.gbq(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
om(){var s,r,q,p
this.e=B.as
s=this.w
s===$&&A.r()
r=0
for(;r<53;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
ow(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
t.Q.a(d)
t.gG.a(c)
t.m0.a(b)
t.G.a(e)
s=l.w
s===$&&A.r()
r=0
for(;r<53;++r){q=s[r]
p=q.a
o=d.p(0,p)
n=e.h(0,p)
m=c.h(0,p)
p=b.h(0,p)
q.Q=o?B.y:B.e6
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.as},
mM(){var s,r,q,p=this.w
p===$&&A.r()
s=A.B(p)
s=new A.I(p,s.i("l(1)").a(new A.u_()),s.i("I<1>")).gu(0)
r=A.B(p)
r=new A.I(p,r.i("l(1)").a(new A.u0()),r.i("I<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.d(B.am,p)
p=B.am[p]
q=this.gbL()
q=q==null?null:q.a
return A.E(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
eK(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.r()
j=A.J(j,t.r)
B.a.Y(j,new A.u6())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.v)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.y)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.E(["id",m.a,"requested",k,"effective",l],p,o))}return A.E(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
gnG(){var s,r,q,p=A.c([],t.s),o=this.w
o===$&&A.r()
s=0
for(;s<53;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.X(p)
return p},
nk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="requested",e="numeric control ",d=B.f.ai(a,g),c=t.f
if(!c.b(d))throw A.b(B.iF)
if(!J.aa(d.h(0,"schema"),"pixeldart-shader-lab-v1")||!J.aa(d.h(0,"version"),1))throw A.b(B.ik)
s=d.h(0,"controls")
if(t.j.b(s)){r=J.cD(s)
this.w===$&&A.r()
r=r!==53}else r=!0
if(r)throw A.b(B.hb)
r=t.N
q=A.m(r,t.r)
p=this.w
p===$&&A.r()
o=0
for(;o<53;++o){n=p[o]
q.l(0,n.a,n)}m=A.m(r,t.X)
for(r=J.O(s);r.m();){l=r.gn()
if(!c.b(l)||typeof l.h(0,"id")!="string"||!l.L(f))throw A.b(B.iA)
k=A.u(l.h(0,"id"))
n=q.h(0,k)
if(n==null||m.L(k))throw A.b(A.M("unknown or duplicate Shader Lab control: "+k,g,g))
j=l.h(0,f)
if(n.e){if(!A.bx(j))throw A.b(A.M("toggle "+k+" requires a boolean request",g,g))
m.l(0,k,j)}else{if(typeof j!="number"||!isFinite(j))throw A.b(A.M(e+k+" requires a finite number",g,g))
i=n.f
if(j<i||j>n.r)throw A.b(A.M(e+k+" is outside ["+A.y(i)+", "+A.y(n.r)+"]",g,g))
m.l(0,k,j)}}h=d.h(0,"debugMode")
if(typeof h!="string"||!B.a.N(B.dn,new A.u3(h)))throw A.b(B.hF)
if(h!=="none")throw A.b(B.ht)
for(o=0;o<53;++o){n=p[o]
c=m.h(0,n.a)
c.toString
if(n.e)n.z=A.R(c)
else n.y=A.aA(c)}this.e=B.a.an(B.dn,new A.u4(h))},
J(a){var s,r,q=this.w
q===$&&A.r()
s=A.B(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.u2(a)),s.i("I<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
bY(a){var s,r,q=this.w
q===$&&A.r()
s=A.B(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.u1(a)),s.i("I<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.u5.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:9}
A.u_.prototype={
$1(a){return t.r.a(a).Q===B.y},
$S:9}
A.u0.prototype={
$1(a){return t.r.a(a).Q!==B.y},
$S:9}
A.u6.prototype={
$2(a,b){var s=t.r
return B.c.H(s.a(a).a,s.a(b).a)},
$S:112}
A.u3.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:44}
A.u4.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:44}
A.u2.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.u1.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.ud.prototype={
$1(a){var s,r=Math.cos(0.8988445647770796)*Math.cos(a)
if(Math.abs(r)<1e-12)return 0
s=(Math.sin(-0.014538592669112763)-Math.sin(0.8988445647770796)*Math.sin(a))/r
if(s<=-1)return 24
if(s>=1)return 0
return Math.acos(s)*24/3.141592653589793},
$S:114}
A.bZ.prototype={
B(){return"SleepQuality."+this.b}}
A.bD.prototype={
B(){return"SleepLocation."+this.b}}
A.ht.prototype={
gav(){return this.a}}
A.p1.prototype={
dD(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jc(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
i.push(A.E(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.E(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.p2.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:115}
A.p3.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:116}
A.l2.prototype={
B(){return"InteractionType."+this.b}}
A.fu.prototype={
B(){return"WorldComparisonKind."+this.b}}
A.v8.prototype={}
A.ft.prototype={}
A.ks.prototype={}
A.qi.prototype={}
A.qm.prototype={
eU(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.Y(p,new A.qn())
return p},
m3(a,b){var s,r,q,p,o,n=b.b
if(n.gP(n))return B.pl
s=t.N
r=A.Z(s)
q=A.Z(s)
for(s=n.ga5(),s=s.gv(s),p=a.c;s.m();){o=s.gn()
if(B.a.ga6(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.ft(B.aX,r)
s=r.a
o=B.a.ga6(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.ga6(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.ft(B.ev,r)
return new A.ft(B.cd,r)},
kZ(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.ks(e,!1,B.pk,null)
s=q.d===c
r=this.m3(q,d)
this.d.$1(e)
return new A.ks(e,s,r,r.a===B.aX&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga6(q.c).t(0)+'".':null)},
mD(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aX)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.qi(B.a.ga6(s.c).t(0)+" but "+A.y(a.f))}}
A.qn.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.H(s.a(b).a,a.a)},
$S:16}
A.cq.prototype={
B(){return"RuptureStep."+this.b}}
A.tb.prototype={}
A.dc.prototype={}
A.tc.prototype={
gf5(){var s=B.bD.h(0,this.a)
return s==null?0:s},
jg(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.G)s=q.e
else s=!0
if(s)return B.dl
r=A.zw(b)
s=q.c
B.a.O(s)
B.a.K(s,r)
B.a.O(q.d)
q.a=B.aU
q.b=0
q.e=!1
return A.c([B.fj],t.xB)},
e5(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.n("rupture advance must be a finite non-negative duration",null))
if(l.a===B.G||a===0)return B.dl
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.G))break
A:{q=l.a
p=B.bD.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a7)l.lp(s)
p=l.b
o=B.bD.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.dc())
if(q===B.a7){l.a=B.G
l.b=0
l.e=!0
B.a.k(s,B.fi)}else{p=q.a+1
if(!(p<7))return A.d(B.dg,p)
l.a=B.dg[p]
l.b=0
B.a.k(s,new A.dc())}}}return A.ad(s,t.F3)},
C(){var s=this,r=t.N
return A.E(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ad(s.c,r),"extinguishedMantles",A.ad(s.d,r),"completed",s.e],r,t.z)},
lp(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.q(B.b.aU(l.b/l.gf5()*A.ad(s,r).length),0,A.ad(s,r).length)
p=l.d
for(;;){o=A.aE(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aE(s,!1,r)
o.$flags=3
n=o
o=A.aE(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.dc())}}}
A.kS.prototype={
gf9(){var s=this.b
if(s<7||s>19)return 0
return B.b.q((s-7)/12,0,1)},
gmF(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.q((s-5.5)/15,0,1))},
f4(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
io(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.ew.prototype={
B(){return"PrecipitationKind."+this.b}}
A.fq.prototype={
C(){var s=this
return A.E(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gav(){return this.a}}
A.v0.prototype={
eo(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.b1(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.x2.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.q(B.b.q(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nl(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
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
return new A.fq(k,j,n,m,l,p,q,j?B.aP:B.x)},
$S:117}
A.j8.prototype={}
A.eA.prototype={}
A.uR.prototype={
C(){var s=this
return A.E(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.v_.prototype={
C(){var s=this,r=s.b,q=t.N
return A.E(["precipitationKind",s.a.b,"windVelocityMps",A.E(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fr.prototype={}
A.fp.prototype={
A(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.jT(s)){r=q.c
if(A.jT(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.b(A.n("invalid weather collision box "+p,null))},
gE(){return this.a}}
A.eC.prototype={
B(){return"WeatherImpactResponse."+this.b}}
A.mh.prototype={}
A.hB.prototype={
C(){return A.E(["snowDepthM",this.a,"waterFilmDepthM",this.b,"materialDissolution01",this.c],t.N,t.i)},
hh(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.b(A.n("weather surface state must be finite and >= 0",null))}}
A.v1.prototype={
$1(a){var s=this.a.h(0,a)
if(typeof s!="number"||!isFinite(s))throw A.b(A.M("weather surface "+a+" must be finite",null,null))
return s},
$S:118}
A.v2.prototype={
C(){var s=this
return A.E(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.eV.prototype={
B(){return"AuthoredEventConsumer."+this.b}}
A.pv.prototype={
oP(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.Ji(s[q].b)},
nj(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dv(a.a+":"+a.c),q=t.sU,r=new A.al(r,r.gu(0),q.i("al<a3.E>")),q=q.i("a3.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.aE((l+(k-l)*(s/2147483647))*60)
n=B.b.hu(l*60)
m=B.b.aU(k*60)
return(n<=m?B.d.q(o,n,m):B.d.q(o,0,1439))/60},
hF(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
lV(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.pw.prototype={
$2(a,b){var s,r=B.d.H(a.gav(),b.gav())
if(r!==0)return r
s=B.b.H(a.gaW(),b.gaW())
return s!==0?s:J.Ah(a.gE(),b.gE())},
$S:43}
A.kQ.prototype={
c8(a,b){var s,r,q,p,o,n,m,l=A.c([],t.tS)
for(s=this.a,r=s.hF(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.v)(r),++n){m=r[n]
if(s.nj(m,p)<=b&&o.k(0,m.a))B.a.k(l,m)}return l},
ghE(){return new A.bI(this.n5(),t.oe)},
n5(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$ghE(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.ly(o.hF(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gmL(){var s=this.c
s=A.J(s,A.t(s).c)
B.a.X(s)
return s},
C(){var s=this.c
s=A.J(s,A.t(s).c)
B.a.X(s)
return A.E(["delivered",s],t.N,t.z)}}
A.pu.prototype={
$1(a){return this.a.lV(A.u(a))!=null},
$S:3}
A.rg.prototype={
aV(a,b){var s=this.b
if(s.L(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
ni(a){return this.aV(a,null)},
lF(a,b){var s,r,q=a.a
this.a.l(0,q,b.a)
s=this.b
s.l(0,"last-reaction",q)
for(q=b.d.gM(),q=q.gv(q);q.m();){r=q.gn()
s.l(0,r.a,r.b)}},
C(){var s,r,q,p,o,n,m,l,k=this.a,j=A.t(k).i("N<1,2>")
k=A.J(new A.N(k,j),j.i("p.E"))
B.a.Y(k,new A.ri())
j=t.N
k=A.yU(k,j,j)
s=this.b
r=A.t(s).i("N<1,2>")
s=A.J(new A.N(s,r),r.i("p.E"))
B.a.Y(s,new A.rj())
s=A.yU(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.t(q).i("N<1,2>")
q=A.J(new A.N(q,p),p.i("p.E"))
B.a.Y(q,new A.rk())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.v)(q),++n){m=q[n]
l=m.b
r.l(0,m.a,A.E(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.E(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.ri.prototype={
$2(a,b){var s=t.q
return B.c.H(s.a(a).a,s.a(b).a)},
$S:26}
A.rj.prototype={
$2(a,b){var s=t.q
return B.c.H(s.a(a).a,s.a(b).a)},
$S:26}
A.rk.prototype={
$2(a,b){var s=t.gJ
return B.c.H(s.a(a).a,s.a(b).a)},
$S:121}
A.d_.prototype={
C(){var s=this
return A.E(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bC.prototype={
C(){var s=this
return A.E(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.rA.prototype={
eS(){var s,r,q,p,o,n,m,l="denise.pears",k=A.c([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
m="aftermath."+B.c.aO(n.a,8)
if(p.L(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.k(k,n)}if(q.aV("ashworth.compact","accepted"))B.a.k(k,B.mq)
if(q.aV(l,"taken"))B.a.k(k,B.mu)
else if(q.aV(l,"left"))B.a.k(k,B.mr)
if(q.aV("sylvia.certificate","granted"))B.a.k(k,B.mt)
if(q.aV("residue.coal","cellar"))B.a.k(k,B.mp)
if(q.aV("telegram.08","read"))B.a.k(k,B.mo)
if(q.aV("truth.shawl","home"))B.a.k(k,B.mn)
if(q.aV("sowerby.paraffin","received"))B.a.k(k,B.ms)
if(q.aV("inspector.proclamation","acknowledged"))B.a.k(k,B.mm)
return k},
iD(a){var s=this.eS(),r=A.B(s),q=r.i("I<1>")
s=A.J(new A.I(s,r.i("l(1)").a(new A.rB(a)),q),q.i("p.E"))
return s}}
A.rB.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:42}
A.ug.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hv(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
a.l(0,q,e.lu(q,r.b))}s=A.hv(e.r)
q=A.hv(e.w)
p=A.hv(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.N(n,A.t(n).i("N<1,2>")).gv(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.O(l.b);i.m();){h=i.gn()
j.push(A.E(["field",h.a,"value",h.b],c,c))}o.l(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.N(m,A.t(m).i("N<1,2>")).gv(0);m.m();){g=m.d
n.l(0,g.a,g.b.C())}b=A.m(c,b)
for(m=e.ax,m=new A.N(m,A.t(m).i("N<1,2>")).gv(0);m.m();){f=m.d
b.l(0,f.a,f.b.C())}return A.E(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
lu(a,b){var s,r=A.hv(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.hv(q.bs(0,new A.uh(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.ga4(s))r.l(0,"_ambient",A.hv(s.bs(0,new A.ui(),t.S,t.z)))
return r}}
A.uh.prototype={
$2(a,b){return new A.P(A.h(a),t.BX.a(b).C(),t.pr)},
$S:123}
A.ui.prototype={
$2(a,b){return new A.P(A.h(a),t.vw.a(b).C(),t.pr)},
$S:124}
A.fo.prototype={
C(){return A.E(["hour",this.a,"order",this.b],t.N,t.S)},
gaW(){return this.a}}
A.fn.prototype={
C(){return A.E(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaW(){return this.a}}
A.j7.prototype={
C(){var s=t.N
return A.E(["field",this.a,"value",this.b],s,s)}}
A.mf.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].C())
return A.E(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gav(){return this.c}}
A.fe.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"label",r.b)
q.l(0,"reply",r.c)
s=r.d
if(s.ga4(s))q.l(0,"effects",s)
return q},
gE(){return this.a}}
A.di.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"target",r.b)
q.l(0,"replacement",r.c)
s=r.d
if(s.ga4(s))q.l(0,"when",s)
return q},
gE(){return this.a}}
A.uf.prototype={}
A.hr.prototype={
gE(){return this.a},
gav(){return this.c},
gaW(){return this.d}}
A.ti.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.tj.prototype={
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
A.uj.prototype={
be(){var s=0,r=A.aK(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$be=A.aL(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
l=null
s=A.dU().gaY().h(0,"dialogueSource")==="api"?6:7
break
case 6:q=9
s=12
return A.a5(A.av(A.a(A.a(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$be)
case 12:k=a3
s=A.R(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a5(A.av(A.a(k.text()),f),$async$be)
case 15:e=a1.ai(a3,null)
d=t.f
if(!d.b(e)||!J.aa(e.h(0,"schema"),"quarantine.dialogue.v1")||!d.b(e.h(0,"corpus"))||!d.b(e.h(0,"screenplay")))A.f(B.hB)
l=A.aY(e,f,t.z)
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
return A.a5(A.av(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$be)
case 19:j=a3
s=20
return A.a5(A.av(A.a(j.text()),t.N),$async$be)
case 20:m=a3
case 17:i=A.Jv(m)
f=J.b_(i,"broadcasts")
f.toString
d=t.P
o.a=d.a(f)
f=J.b_(i,"visitors")
f.toString
o.b=d.a(f)
f=J.b_(i,"vocabulary")
f.toString
o.c=d.a(f)
f=J.b_(i,"documents")
f.toString
d.a(f)
f=J.b_(i,"street")
f.toString
d.a(f)
f=J.b_(i,"unverifiables")
f.toString
o.f=d.a(f)
f=J.b_(i,"nights")
f.toString
d.a(f)
f=J.b_(i,"endings")
f.toString
o.w=d.a(f)
f=J.b_(i,"records")
f.toString
o.x=d.a(f)
f=J.b_(i,"cues")
f.toString
d.a(f)
f=J.b_(i,"claims")
f.toString
o.z=d.a(f)
f=t.f
if(f.b(J.b_(i,"reactions"))){b=J.b_(i,"reactions")
if(b==null)b=f.a(b)
b=A.aY(b,t.N,t.z)}else b=A.m(t.N,t.z)
o.Q=d.a(b)
if(f.b(J.b_(i,"variants"))){b=J.b_(i,"variants")
if(b==null)b=f.a(b)
b=A.aY(b,t.N,t.z)}else b=A.m(t.N,t.z)
o.as=d.a(b)
if(f.b(J.b_(i,"residues"))){b=J.b_(i,"residues")
f=b==null?f.a(b):b
f=A.aY(f,t.N,t.z)}else f=A.m(t.N,t.z)
o.at=d.a(f)
s=n==null?21:23
break
case 21:s=24
return A.a5(A.av(A.a(A.a(v.G.window).fetch("res/story_script.json")),t.m),$async$be)
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
return A.a5(A.av(A.a(h.text()),t.N),$async$be)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.FZ(a3)
o.ax=f
o.ay=A.ER(f)
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
case 5:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$be,r)},
iC(a){var s,r,q,p=this.a
p===$&&A.r()
s=p.h(0,B.d.t(a))
if(t.f.b(s)){p=s.gM().dv(0,new A.uk())
r=p.$ti
q=t.N
return A.yU(new A.cM(p,r.i("P<e,e>(1)").a(new A.ul()),r.i("cM<1,P<e,e>>")),q,q)}return null},
eT(a,b){var s=this.iC(a)
return s==null?null:s.h(0,b)},
iG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.r()
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
if(f.b(l))for(j=l.gM(),j=j.gv(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.l(0,h,A.u(i.b))}B.a.k(p,new A.fe(A.u(m.h(0,"id")),A.u(m.h(0,"label")),A.u(m.h(0,"reply")),A.aV(k,n,n)))}if(p.length<2)return g
return new A.mf(r,a,b,c,d,A.ad(p,t.Y))},
iF(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.r()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.t(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aF(p)||o!==B.b.aF(o))return n
return new A.fo(B.b.aF(p),B.b.aF(o))},
iE(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.r()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.t(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.aF(p)||typeof o!="string"||typeof n!="string")return m
return new A.fn(B.b.aF(p),o,n)},
oS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.r()
b4=new A.N(b4,A.t(b4).i("N<1,2>")).gv(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gM(),o=o.gv(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dL(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gM(),m=m.gv(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.u(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a6.l(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("bU<1>"),l=new A.bU(n,n.r,n.e,m);l.m();){i=l.d
g=a1.iF(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a7.l(0,o,h)
f=A.m(a3,s)
for(m=new A.bU(n,n.r,n.e,m);m.m();){l=m.d
e=a1.iE(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a8.l(0,o,f)}b4=a1.Q
b4===$&&A.r()
b4=new A.ae(b4,b4.r,b4.e,A.t(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.iG(A.u(d.h(0,"visitor")),B.b.aF(A.a1(d.h(0,"day"))),A.u(d.h(0,"tier")),B.b.aF(A.a1(d.h(0,"ordinal"))))
if(c!=null)b1.l(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.r()
b4=new A.ae(b4,b4.r,b4.e,A.t(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gM(),s=s.gv(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.l(0,o,A.u(r.b))}s=A.u(d.h(0,"id"))
b2.l(0,s,new A.di(s,A.u(d.h(0,"target")),A.u(d.h(0,a2)),A.aV(b,a5,a5)))}b4=a1.at
b4===$&&A.r()
b4=new A.N(b4,A.t(b4).i("N<1,2>")).gv(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.l(0,p.a,s)}b4=a1.z
b4===$&&A.r()
b4=new A.N(b4,A.t(b4).i("N<1,2>")).gv(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.O(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.j7(A.u(a0.h(0,"field")),A.u(a0.h(0,"value"))))}if(o.length!==0)b0.l(0,p.a,o)}return new A.ug(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.uk.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:126}
A.ul.prototype={
$1(a){t.AC.a(a)
return new A.P(A.u(a.a),A.u(a.b),t.q)},
$S:127}
A.k8.prototype={
bQ(a,b,c){var s=B.c.aZ(a),r=B.c.aZ(c)
if(r.length===0)return""
if(b||this.a===B.cf)return s.length===0?r:s+": "+r
if(this.a===B.ce)return r
return s.length===0?r:s+": "+r},
hT(a,b){return this.bQ(a,!1,b)}}
A.yJ.prototype={}
A.cY.prototype={
B(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.e8.prototype={
cc(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.e8(q,p,o,n,m)},
mv(a){var s=null
return this.cc(s,s,s,a,s)},
mB(a){var s=null
return this.cc(s,s,s,s,a)},
mr(a){var s=null
return this.cc(s,s,a,s,s)},
mp(a){var s=null
return this.cc(s,a,s,s,s)},
m6(a){var s=null
return this.cc(a,s,s,s,s)},
C(){var s=this,r=s.f
r=r==null?null:r.b
return A.E(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.nB.prototype={
$1(a){return a==null?null:A.R(a)},
$S:128}
A.nz.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:40}
A.nA.prototype={
$0(){return A.f(B.ix)},
$S:7}
A.nM.prototype={
bZ(a,b){var s,r=this,q=r.e.hT(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aL(q)
A.h(A.a(v.G.window).setTimeout(A.Ct(new A.nO(r)),7000))},
aL(a){var s,r,q=this
if(!q.c||B.c.aZ(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.h(A.a(v.G.window).setTimeout(A.Ct(new A.nN(q,s)),4200))}}
A.nO.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:130}
A.nN.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.nS.prototype={
op(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cG.prototype={
B(){return"AudioOutputMode."+this.b}}
A.cZ.prototype={
B(){return"AudioDynamicRange."+this.b}}
A.dt.prototype={
B(){return"AudioReverbMode."+this.b}}
A.ds.prototype={
B(){return"AudioDuckingMode."+this.b}}
A.ea.prototype={
cW(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.ea(r,q,p,a==null?s.e:a)},
mn(a){return this.cW(null,null,a,null)},
md(a){return this.cW(null,a,null,null)},
mt(a){return this.cW(null,null,null,a)},
mc(a){return this.cW(a,null,null,null)},
C(){var s=this
return A.E(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.o1.prototype={
$1$2(a,b,c){return B.a.b5(c.i("p<0>").a(a),new A.o2(b,c),new A.o3(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:131}
A.o2.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.o3.prototype={
$0(){return A.f(A.M("unsupported audio option: "+A.y(this.a),null,null))},
$S:7}
A.ou.prototype={
oL(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.R.hT(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.ox.prototype={
$1(a){return this.a.$0()},
$S:2}
A.oB.prototype={
$1(a){return this.a.$1(A.R(this.b.checked))},
$S:2}
A.oA.prototype={
$1(a){var s=A.fb(A.u(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.oz.prototype={
$1(a){A.u(a)
return a.length!==0&&!B.c.U(a,"brush-state-")},
$S:3}
A.eh.prototype={
B(){return"BrushComponentKind."+this.b}}
A.ei.prototype={
B(){return"BrushComponentState."+this.b}}
A.bo.prototype={
glz(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
A(){var s=this
if(B.c.aZ(s.a).length===0||B.c.aZ(s.c).length===0)throw A.b(B.ig)
if(s.e===B.cq&&s.b!==B.cp)throw A.b(B.hy)},
gE(){return this.a}}
A.oD.prototype={
n3(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.q(a>=r+c?q.e=a-c+1:r,0,s)},
dz(a,b){if(b<=0){this.f=0
return}this.f=B.d.q(this.f+a,0,Math.max(0,b-1))},
bP(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.r()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.da(o+c,n)
l=new A.da(s+p,n)
k=s-p
j=new A.da(k,r-c)
i=new A.da(k-c,r)
h=new A.da(q-p,r)
g=new A.da(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.fE(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fE(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aT(a,b,c,d,e,f,g,h,i){return this.bP(a,b,c,d,e,!0,f,g,h,i)},
mS(a,b,c,d,e,f,g,h,i){return this.bP(a,b,14,c,d,e,f,g,h,i)},
mX(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.r()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eG()
s.c0(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.az()-0.5)*8
l=s.az()
k=s.az()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hD(a,b,c,d,e){var s,r,q=this.b
q===$&&A.r()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fD(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fD(0,0,c)
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
mV(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.r()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a1(A.a(q.measureText(a.toUpperCase())).width)+70)
this.aT("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
mU(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aT(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.r()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a1(A.a(l.measureText(m)).width)+34))
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
d=d4.goE()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.lw(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bc(i,0,new A.oE(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?174:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.b.aU((a5+a2-a1)/a2))
d1=d4.f
c7.n3(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.q(c7.e,0,a7)
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
c7.aT(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hD(!b6||b4,b2,24,c1,b3)
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
c7.aT("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
mY(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.K1(a1,50,-30),f=a0<640||a<540,e=f?108:116,d=f?68:72,c=a0-e*0.5-24,b=f?122:126
this.aT("#f5f0e6",1.2,7,"rgba(12, 10, 14, 0.92)",d,-0.055,e,c,b)
s=isFinite(a1)?B.b.q(a1,-30,50):0
r=s>=0?"+":""
q=B.b.F(s,0)
p=e-22
o=c-p*0.5
n=b+10
m=this.b
m===$&&A.r()
m.save()
m.textAlign="center"
m.textBaseline="middle"
m.fillStyle="#c49a45"
m.font='bold 9px "Courier New", monospace'
m.fillText("AIR TEMPERATURE",c,b-21)
l=p/5
for(k=l+0.5,j=0;j<5;++j){m.fillStyle=B.kn[j]
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
mT(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
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
this.bP(a0?"#f5f0e6":"#c49a45",1.5,6,a1,28,a0,-0.04,o,c,b)
a1=this.b
a1===$&&A.r()
a1.save()
a2=a0?"#f5f0e6":"#c49a45"
a1.fillStyle=a2
a1.font='bold 11px "Courier New", monospace'
a1.textAlign="center"
a1.textBaseline="middle"
a1.fillText(this.bx("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
mW(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
if(d2<=0.001)return
s=Math.sin(d2*3.141592653589793*0.5)
r=Math.min(d4*0.92,860)
q=Math.min(d3*0.88,620)
p=d4+r*0.6
o=p+(d4*0.5-p)*s
n=d3*0.5
d2=c3.b
d2===$&&A.r()
d2.save()
d2.fillStyle="rgba(10, 8, 12, "+A.y(0.75*s)+")"
d2.fillRect(0,0,d4,d3)
c3.aT(c5,3,18,c4,q,-0.025,r,o,n)
c3.mX(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.aT(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.am[g]
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
c3.aT(c7,2.5,10,c8,140,-0.02,a1,o,a2)
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
d2.fillText(d5.e.gmP().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bx(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbq()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.b.aU((a5+52-44)/52))
a7=Math.max(0,a3.length-a6)
l=B.d.q(c3.f,0,a7)
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
b1=b0.Q===B.y
b2=a0+(g-c3.f)*52+22
b3=o+(e?12:0)
if(e)c=b1?c8:d0
else c=c4
b=e&&b1?c7:c9
c3.bP(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.hD(!0,g+1,20,b3-j+20,b2)
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
if(c){if(b0.Q===B.y){c=b0.ax
b7=c==null?b0.z:c}else b7=!1
c=b5-37
b=b1&&b7?c5:d0
c3.mS(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.gef(),c,b2)}else{b8=b5-80-80
d2.fillStyle="#0c0a0e"
c=b8-80
b=b2-4
d2.fillRect(c,b,160,8)
if(b1){b6=b0.f
b9=B.b.q((b0.y-b6)/(b0.r-b6),0,1)}else b9=0
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
d2.fillText(b0.gef(),b5,b2)}d2.restore()}d2.restore()
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
else{if(c1.Q===B.y)m="LIVE \u2022 REQUESTED "+c1.gnb()+" \u2022 EFFECTIVE "+c1.gef()
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
fE(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.r()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fD(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.r()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
lw(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a1(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bx(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.r()
s=A.a1(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.r()
p=A.a1(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.I(r,0,s-1)}return q?"...":r+"..."}}
A.oE.prototype={
$2(a,b){var s
A.aA(a)
A.u(b)
s=this.a.b
s===$&&A.r()
return Math.max(a,A.a1(A.a(s.measureText(b)).width))},
$S:132}
A.fY.prototype={
glR(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gM(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aQ(r)
o.l(0,q,p.gP(r)?"":p.ga1(r))}return o},
bK(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
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
A.aA(r)
q=n.h(0,i)
q.toString
A.aA(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
return A.fZ(null,a,A.R(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.h(s)
r=n.h(0,j)
r.toString
A.aA(r)
q=n.h(0,i)
q.toString
A.aA(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
A.R(m)
l=k.glR()
return A.fZ(l,null,m,r,p,o,s,q)},
ea(a){var s=null
return this.bK(a,s,s,s,s,s)},
mj(a){var s=null
return this.bK(s,s,s,a,s,s)},
mk(a){var s=null
return this.bK(s,s,s,s,a,s)},
mg(a){var s=null
return this.bK(s,a,s,s,s,s)},
mh(a){var s=null
return this.bK(s,s,a,s,s,s)},
mC(a){var s=null
return this.bK(s,s,s,s,s,a)},
A(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.h9)
p=this.r
if(p.gM().N(0,new A.oT()))throw A.b(B.ip)
if(p.gM().N(0,new A.oU()))throw A.b(B.hV)
p=p.gak()
o=A.t(p)
s=o.i("ii<p.E,e>")
r=s.i("I<p.E>")
q=A.J(new A.I(new A.ii(p,o.i("p<e>(p.E)").a(new A.oV()),s),s.i("l(p.E)").a(new A.oW()),r),r.i("p.E"))
if(A.he(q,A.B(q).c).a!==q.length)throw A.b(B.he)},
C(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gM(),s=s.gv(s);s.m();){r=s.gn()
o.l(0,r.a,A.aE(r.b,!0,p))}return A.E(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.oT.prototype={
$1(a){t.yx.a(a)
return J.k6(a.b,new A.oS(a))},
$S:39}
A.oS.prototype={
$1(a){var s
A.u(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.At(a)
else s=!1
return s},
$S:3}
A.oU.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.k6(a.b,B.e0.gaC(B.e0))},
$S:39}
A.oV.prototype={
$1(a){return t.a.a(a)},
$S:134}
A.oW.prototype={
$1(a){return A.u(a).length!==0},
$S:3}
A.oR.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.eg.prototype={
B(){return"BindingCaptureStatus."+this.b}}
A.eW.prototype={
B(){return"BindingConflictResolution."+this.b}}
A.du.prototype={}
A.kt.prototype={
c9(a){var s=this
if(!s.a.r.L(a))return new A.du(B.cm,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.eO},
lY(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b2
if(!A.At(a)){p.c=p.b=null
return new A.du(B.co,B.e1.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gM()
r=r.gv(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.Ai(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.du(B.b3,a+" is already bound to "+s)}return p.jH(a)},
cq(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b2
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eP
case 1:s=A.zl(m.a.r)
r=s.h(0,l)
r.toString
s.l(0,l,A.zH(r,k))
r=s.h(0,j)
r.toString
s.l(0,j,A.zW(r,k))
m.a=m.a.ea(s)
break
case 0:s=A.zl(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga1(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.hw(p,1,null,A.B(p).c)
o=p.$ti
p=new A.al(p,p.gu(0),o.i("al<a_.E>"))
o=o.i("a_.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.l(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.zW(r,k)}else{r=s.h(0,j)
r.toString
r=A.zH(A.zW(r,k),q)}s.l(0,j,r)
m.a=m.a.ea(s)
break}m.c=m.e=m.d=null
return B.ck},
jH(a){var s,r,q=this,p=q.b
if(p==null)return B.b2
s=A.zl(q.a.r)
r=s.h(0,p)
r.toString
s.l(0,p,A.zH(r,a))
q.a=q.a.ea(s)
q.b=null
return B.ck}}
A.ic.prototype={
jr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.kt(f.w)
s=f.b
s.className=A.u(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.oy(a,B.eY,1)))
A.a(s.appendChild(A.F(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.F(a,"div",c,e)
f.fe(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fe(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dH(a,r,"invertX","Invert horizontal look")
f.dH(a,r,"invertY","Invert vertical look")
f.dH(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.F(a,"div",c,e)
for(p=B.lf.gM(),p=p.gv(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fZ(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.k7(l)?"unbound":J.Ak(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.ej(a,new A.bo("settings.controls.bind."+m,B.cp,n,h,B.o),new A.oP(f,m),k)
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
f.e0()
A.a(s.appendChild(A.ej(a,B.eZ,new A.oQ(f),e)))},
i8(a){var s=this.x
s===$&&A.r()
if(s.b==null)return
a.preventDefault()
this.fH(this.x.lY(A.u(a.code)))},
fH(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.b3?B.f2:B.o
p=o.Q.h(0,r)
if(p!=null)A.yL(p,q)}n=a.a
if(n===B.b3)o.lf()
else if(n===B.cn){n=o.x
n===$&&A.r()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.e0()}else{o.dK()
o.ax=null}},
lf(){var s,r,q,p,o
this.dK()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jU[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.ej(p,new A.bo("settings.controls.resolve."+o,B.I,o,"resolve key binding conflict",B.o),new A.oO(this,q),null)))}},
dK(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
e0(){var s,r,q,p
for(s=this.Q,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.r()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.k7(p)?"unbound":J.Ak(p," / ")
r.textContent=q
A.yL(r,B.o)}},
fe(a,b,c,d,e,f){var s,r=A.F(a,"label","setting-row",null)
A.a(r.appendChild(A.F(a,"span",null,d)))
s=A.Ee(a,new A.bo("settings.controls."+c,B.f0,d,null,B.o),f,e,new A.oM(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.l(0,c,s)},
dH(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.Ef(a,new A.bo("settings.controls."+c,B.f1,d,null,B.o),!1,new A.oN(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.l(0,c,r)},
fF(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sew(a){this.f=t.pf.a(a)},
sbf(a){this.r=t.Z.a(a)}}
A.oP.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.r()
s=n.c9(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cl){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.yL(q,B.cq)}p.dK()
return null},
$S:0}
A.oQ.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.oO.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.r()
return s.fH(r.cq(this.b))},
$S:0}
A.oM.prototype={
$1(a){var s=this.a,r=s.w
s.fF(this.b==="horizontalSensitivity"?r.mh(a):r.mC(a))},
$S:135}
A.oN.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mj(a)
break A}if("invertY"===q){s=r.w.mk(a)
break A}s=r.w.mg(a)
break A}r.fF(s)},
$S:12}
A.oX.prototype={
js(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.F(s,"h1","journal-title","credits")))
r=A.F(s,"p","credits-body",null)
p.f!==$&&A.b5()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.F(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.F(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Y(new A.oY(p)))
A.a(o.appendChild(q))}}
A.oY.prototype={
$1(a){return this.a.ah()},
$S:2}
A.p4.prototype={
ju(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.F(a,o,"door-speaker",p)
q.b!==$&&A.b5()
q.b=s
r=A.F(a,o,"door-line",p)
q.c!==$&&A.b5()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.F(a,o,"door-choice-status",p)
q.d!==$&&A.b5()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.F(a,o,"door-cite-list",p)
q.f!==$&&A.b5()
q.f=r
s=A.F(a,o,"door-cite-result",p)
q.r!==$&&A.b5()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.F(a,"button","door-continue","continue")
q.e!==$&&A.b5()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Y(new A.p5(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.Y(new A.p6(q,a)))
A.a(A.G(a.body).appendChild(n))},
f0(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.r()
s.textContent=a
s=r.c
s===$&&A.r()
s.textContent=B.R.bQ("",!0,b)
s=r.d
s===$&&A.r()
s.textContent=A.Aw(B.bm)
s=r.e
s===$&&A.r()
A.a(s.style).display="none"
s=r.f
s===$&&A.r()
s.textContent=""
s=r.r
s===$&&A.r()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
f1(a,b){var s,r=this,q=r.c
q===$&&A.r()
q.textContent=B.R.bQ("",!0,a)
q=r.d
q===$&&A.r()
q.textContent=""
q=r.e
q===$&&A.r()
q=A.a(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.r()
s.textContent=""},
j1(a){return this.f1(a,!1)},
j3(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.r()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.v)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.r()
s.textContent=A.Aw(r)},
f2(a,b){var s=this.c
s===$&&A.r()
s.textContent=B.R.bQ("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.r()
s.textContent=""
s=this.e
s===$&&A.r()
A.a(s.style).display=""},
j0(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.r()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.v)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.a(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.Y(new A.p7(p,this)))
A.a(s.appendChild(n))}},
i0(){var s,r=this
r.y=!1
s=r.d
s===$&&A.r()
s.textContent=""
s=r.f
s===$&&A.r()
s.textContent=""
s=r.r
s===$&&A.r()
s.textContent=""
s=r.a
s.className="door"
s.setAttribute("hidden","")},
snO(a){this.w=t.Z.a(a)},
snN(a){this.x=t.vR.a(a)}}
A.p5.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:30}
A.p6.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.u(a.code)!=="Tab")return
r=A.c([],t.W)
q=s.e
q===$&&A.r()
if(A.u(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.r()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.h(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.k(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.R(a.shiftKey)){if(m===B.a.ga1(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga6(r).focus()}}else if(m===B.a.ga6(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga1(r).focus()}},
$S:138}
A.p7.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:30}
A.pa.prototype={
jv(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.F(s,"h1","journal-title",null)
o.f!==$&&A.b5()
o.f=r
q=A.F(s,"div","ending-copy",null)
o.r!==$&&A.b5()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.F(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Y(new A.pb(o)))
A.a(n.appendChild(p))},
j2(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.r()
s.textContent=a.a.b
s=m.r
s===$&&A.r()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bS()},
snS(a){this.w=t.Z.a(a)}}
A.pb.prototype={
$1(a){var s=this.a
s.ah()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.pE.prototype={
bE(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aE(b,!0,t.N)
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
oK(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
ng(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hn()
return!0}return!1}if(a==="Space"){s=B.a.eq(l,new A.pF())
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
return!0}}if(B.c.U(a,"Digit")){p=A.dL(B.c.aO(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.U(a,"Numpad")){p=A.dL(B.c.aO(a,6),m)
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
hn(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
nh(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hn()
return!0}this.cA(a.b)
return!0},
snM(a){this.y=t.dt.a(a)},
snR(a){this.z=t.Z.a(a)}}
A.pF.prototype={
$1(a){A.u(a)
return B.c.p(a.toLowerCase(),"silent")||B.c.p(a,"...")},
$S:3}
A.pG.prototype={}
A.dC.prototype={
B(){return"GameplayInteractionMode."+this.b}}
A.d0.prototype={
B(){return"GameplayPromptDensity."+this.b}}
A.d1.prototype={
B(){return"GameplayTextPacing."+this.b}}
A.dD.prototype={
B(){return"GameplayJournalLayout."+this.b}}
A.dB.prototype={
B(){return"GameplayConfirmationLevel."+this.b}}
A.dE.prototype={
B(){return"GameplaySaveFeedback."+this.b}}
A.cm.prototype={
B(){return"GameplayFocusLossBehavior."+this.b}}
A.dA.prototype={
B(){return"GameplayClockFormat."+this.b}}
A.h5.prototype={
aS(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.yM(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
my(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,s,a,s)},
mx(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,a,s,s)},
m9(a){var s=null
return this.aS(s,s,a,s,s,s,s,s,s,s,s)},
mi(a){var s=null
return this.aS(s,s,s,s,a,s,s,s,s,s,s)},
mq(a){var s=null
return this.aS(s,s,s,s,s,s,a,s,s,s,s)},
mz(a){var s=null
return this.aS(s,s,s,s,s,s,s,s,s,s,a)},
ml(a){var s=null
return this.aS(s,s,s,s,s,a,s,s,s,s,s)},
m8(a){var s=null
return this.aS(s,a,s,s,s,s,s,s,s,s,s)},
mu(a){var s=null
return this.aS(s,s,s,s,s,s,s,a,s,s,s)},
m7(a){var s=null
return this.aS(a,s,s,s,s,s,s,s,s,s,s)},
me(a){var s=null
return this.aS(s,s,s,a,s,s,s,s,s,s,s)},
C(){var s=this
return A.E(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pH.prototype={
$1$2(a,b,c){var s
A.D7(c,t.Ct,"T","call")
c.i("p<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.M("invalid gameplay setting: "+a,null,null))
return B.a.b5(b,new A.pI(s,c),new A.pJ(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:139}
A.pI.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pJ.prototype={
$0(){return A.f(A.M("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cH.prototype={
B(){return"GraphicsPreset."+this.b}}
A.dG.prototype={
b2(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dG(s.a,r,q,p,o,n,m,l,k,j,i)},
e9(a){var s=null
return this.b2(a,s,s,s,s,s,s,s,s,s)},
hy(a){var s=null
return this.b2(s,s,a,s,s,s,s,s,s,s)},
hz(a){var s=null
return this.b2(s,s,s,s,s,s,a,s,s,s)},
mm(a){var s=null
return this.b2(s,s,s,s,a,s,s,s,s,s)},
ms(a){var s=null
return this.b2(s,s,s,s,s,s,s,a,s,s)},
mf(a){var s=null
return this.b2(s,s,s,a,s,s,s,s,s,s)},
mA(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,s,a)},
mo(a){var s=null
return this.b2(s,s,s,s,s,a,s,s,s,s)},
mb(a){var s=null
return this.b2(s,a,s,s,s,s,s,s,s,s)},
mw(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,a,s)},
A(){var s=this,r=null,q=s.c
if(!B.a.p(B.kM,q))throw A.b(A.M("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.k0,q))throw A.b(A.M("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.kQ,q))throw A.b(A.M("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.kJ,q))throw A.b(A.M("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.kZ,q))throw A.b(A.M("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.kP,q))throw A.b(A.M("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.kR,q))throw A.b(A.M("unsupported graphics shadow quality: "+q,r,r))},
C(){var s=this
return A.E(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.pV.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:37}
A.pW.prototype={
$0(){return A.f(B.hI)},
$S:7}
A.pX.prototype={
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)}}
A.pN.prototype={}
A.pO.prototype={}
A.ip.prototype={
jw(a){var s,r,q,p,o,n,m=this,l=null,k="settings-copy",j="setting-toggle",i="door-continue",h=m.b
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
r.addEventListener("change",A.Y(new A.pR(m)))
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
r.addEventListener("change",A.Y(new A.pS(m)))
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
o.addEventListener("click",A.Y(new A.pT(m)))
A.a(h.appendChild(o))
n=A.F(a,"button",i,"back")
n.setAttribute("type","button")
n.id="settings.graphics.back"
n.setAttribute("aria-label","back to settings categories")
n.addEventListener("click",A.Y(new A.pU(m)))
A.a(h.appendChild(n))},
bi(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.F(a,"label","setting-row",null)
A.a(s.appendChild(A.F(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.N(e,A.t(e).i("N<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Y(new A.pQ(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.x.l(0,c,r)},
dU(a){var s
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
sew(a){this.f=t.CA.a(a)},
snY(a){this.r=t.Z.a(a)},
sbf(a){this.w=t.Z.a(a)}}
A.pR.prototype={
$1(a){var s=this.a
s.dU(s.as.hy(A.R(s.y.checked)))},
$S:1}
A.pS.prototype={
$1(a){var s=this.a
s.dU(s.as.mm(A.R(s.z.checked)))},
$S:1}
A.pT.prototype={
$1(a){var s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.pU.prototype={
$1(a){var s=this.a,r=s.w
if(r!=null)r.$0()
else s.ah()},
$S:1}
A.pQ.prototype={
$1(a){var s,r=A.u(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.as.hz(B.a.an(B.df,new A.pP(r)))
break A}if("renderScale"===p){s=q.as.ms(r)
break A}if("frameTarget"===p){s=q.as.mf(r)
break A}if("antialiasing"===p){s=q.as.e9(r)
break A}if("textureQuality"===p){s=q.as.mA(r)
break A}if("outputEncoding"===p){s=q.as.mo(r)
break A}if("diagnosticLevel"===p){s=q.as.mb(r)
break A}if("shadowQuality"===p){s=q.as.mw(r)
break A}s=q.as
break A}q.dU(s)},
$S:1}
A.pP.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:37}
A.k9.prototype={
B(){return"ActiveGuiPanel."+this.b}}
A.cj.prototype={}
A.pY.prototype={
iB(a,b,c){if(c)return B.ki
if(b&&a!=null)return A.c([new A.cj("E","Examine "+a,!0),new A.cj("TAB","Journal",!1),new A.cj("CAPS","Shader Lab",!1)],t.sa)
return B.la}}
A.pZ.prototype={
jx(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.F(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.F(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.F(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.F(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Y(new A.q_(this)))
A.a(p.appendChild(r))}}
A.q_.prototype={
$1(a){return this.a.ah()},
$S:2}
A.qw.prototype={
bS(){var s,r=this
r.jl()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fl(r.CW,s)
r.l4()
r.fZ()},
jN(){var s,r=this,q=r.a,p=A.F(q,"div","page-turn",null),o=A.F(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Y(new A.qx(r)))
s=A.F(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Y(new A.qy(r)))
q=A.F(q,"span","right-day-label",null)
r.Q!==$&&A.b5()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
hf(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fl(s.CW+a,r)
s.fZ()},
fl(a,b){if(a<1)return 1
if(a>b)return b
return a},
l4(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.r()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.r()
s.textContent=""
for(s=l.w.eU(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
n=B.a.ga6(o.c).t(0)
m=A.a(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.Y(new A.qz(l,o,m)))
A.a(k.appendChild(m))}},
fZ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.r()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.t(p).i("ae<2>"),n=new A.ae(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.qA())
j.fY(i,r)
i=j.Q
i===$&&A.r()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.r()
s=A.c([],s)
for(r=new A.ae(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.qB())
j.fY(i,s)
k=B.b.q(q.f/4,0,1)
i=j.as
i===$&&A.r()
A.a(i.style).setProperty("width",B.b.F(k*100,1)+"%")},
fY(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.v)(b),++r)A.a(a.appendChild(this.kj(b[r])))},
kj(a){var s,r,q,p,o,n=A.F(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.a(n.appendChild(this.fM(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.fM(p,!1)
o.className=A.u(o.className)+" margin"
A.a(n.appendChild(o))}return n},
fM(a,b){var s=b?"hand-line struck":"hand-line",r=A.F(this.a,"div",s,a.t(0))
A.a(r.style).setProperty("--shake",B.b.t(a.b))
return r}}
A.qx.prototype={
$1(a){return this.a.hf(-1)},
$S:2}
A.qy.prototype={
$1(a){return this.a.hf(1)},
$S:2}
A.qz.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.qA.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:16}
A.qB.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:16}
A.da.prototype={}
A.fT.prototype={
gE(){return this.a}}
A.rp.prototype={
goE(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.I(s,0,B.b.aF(B.b.q(r*q,0,r)))}}
A.iI.prototype={
b_(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.G(this.a.body).appendChild(s))},
bS(){var s,r,q,p,o=this,n=o.b
if(B.c.p(A.u(n.className),"open"))return
s=$.rq
if(s!=null&&s!==o)s.ah()
$.rq=o
r=o.a
o.d=A.G(r.activeElement)
A.qt(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Y(o.gkU())
o.e=q
r.addEventListener("keydown",q)
p=A.Cr(n)
if(p.length!==0)B.a.ga1(p).focus()
else n.focus()},
ah(){var s,r,q=this,p=q.b
if(!B.c.p(A.u(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.rq===q)$.rq=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
i8(a){},
kV(a){A.a(a)
this.i8(a)
if(A.R(a.defaultPrevented))return
if(A.u(a.code)==="Escape"){a.preventDefault()
this.ah()
return}if(A.u(a.code)==="Tab")this.lm(a)},
lm(a){var s,r=A.Cr(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.R(a.shiftKey)){if(s===B.a.ga1(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga6(r).focus()}}else if(s===B.a.ga6(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga1(r).focus()}},
sb7(a){this.c=t.Z.a(a)}}
A.bB.prototype={
B(){return"PauseReason."+this.b}}
A.cp.prototype={
B(){return"PausePage."+this.b}}
A.ev.prototype={
B(){return"PauseTransitionKind."+this.b}}
A.dJ.prototype={
C(){var s,r=A.m(t.N,t.X)
r.l(0,"page",this.a.b)
r.l(0,"reason",this.b.b)
s=this.c
if(s!=null)r.l(0,"focusId",s)
return r},
aa(a,b){if(b==null)return!1
return b instanceof A.dJ&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gT(a){return A.cO(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.eu.prototype={
ghs(){var s=this.a
return s.length===1&&B.a.ga1(s).a===B.bG},
C(){var s=A.m(t.N,t.X),r=this.a,q=A.B(r),p=q.i("H<1,X<e,L?>>")
r=A.J(new A.H(r,q.i("X<e,L?>(1)").a(new A.rv()),p),p.i("a_.E"))
r.$flags=1
s.l(0,"pages",r)
r=this.b
q=A.B(r)
p=q.i("H<1,e>")
r=A.J(new A.H(r,q.i("e(1)").a(new A.rw()),p),p.i("a_.E"))
s.l(0,"modalReasons",r)
r=this.c
if(r!=null)s.l(0,"restoreFocusId",r)
return s}}
A.rv.prototype={
$1(a){return t.oP.a(a).C()},
$S:141}
A.rw.prototype={
$1(a){return t.wJ.a(a).b},
$S:142}
A.c8.prototype={}
A.ru.prototype={
i9(a){var s,r=this
if(r.a.ghs())return new A.c8(B.a5,r.a,null)
s=r.a
s=new A.eu(B.kL,s.b,a)
r.a=s
return new A.c8(B.dL,s,"pause.resume")},
lM(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga6(p)
q=r.a.a
q=B.a.aB(q,0,q.length-1)
p=r.a
p=new A.eu(q,p.b,p.c)
r.a=p
return new A.c8(B.dM,p,s.c)}if(q.ghs()&&r.a.b.length===0)return r.cr()
return new A.c8(B.a5,r.a,null)},
cr(){var s=this.a
if(s.a.length===0)return new A.c8(B.a5,s,null)
if(s.b.length!==0)return new A.c8(B.a5,s,null)
this.a=B.bF
return new A.c8(B.dN,B.bF,s.c)},
o8(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.c8(B.a5,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.eu(s.a,r,q.a.c)
q.a=s
return new A.c8(B.dL,s,null)},
mO(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.c8(B.a5,o.a,null)
s=o.a
r=s.b
q=A.B(r)
p=q.i("I<1>")
r=A.J(new A.I(r,q.i("l(1)").a(new A.rx(a)),p),p.i("p.E"))
q=o.a.c
r=new A.eu(s.a,r,q)
o.a=r
return new A.c8(B.ml,r,q)},
kb(a){var s
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
A.rx.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:143}
A.cP.prototype={
B(){return"PauseRootAction."+this.b}}
A.ry.prototype={
bu(a,b,c,d){var s=B.ls.h(0,c)
s.toString
A.a(b.appendChild(A.ej(a,new A.bo(s,B.I,d,null,B.o),new A.rz(this,c),null)))},
so3(a){this.f=t.Z.a(a)},
so5(a){this.r=t.Z.a(a)},
snP(a){this.w=t.Z.a(a)},
so4(a){this.x=t.Z.a(a)},
snV(a){this.y=t.Z.a(a)},
snQ(a){this.z=t.Z.a(a)},
sbf(a){this.Q=t.Z.a(a)}}
A.rz.prototype={
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
A.rU.prototype={
j_(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.R.bQ("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.tl.prototype={
jz(a){var s,r,q,p,o,n=this.b
n.className=A.u(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.oy(a,B.eX,1)))
A.a(n.appendChild(A.F(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.F(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.kj[r]
p=B.du.h(0,q)
p.toString
o=B.dt.h(0,q)
o.toString
A.a(s.appendChild(A.ej(a,new A.bo(o,B.I,p,p+" settings",B.o),new A.tm(this,q),null)))}A.a(s.appendChild(A.ej(a,B.eW,new A.tn(this),null)))
A.a(n.appendChild(s))},
snL(a){this.f=t.hQ.a(a)},
sbf(a){this.r=t.Z.a(a)}}
A.tm.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.tn.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hs.prototype={
jA(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.du.h(0,d))+" settings",a=h.b
a.className=A.u(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.oy(a0,new A.bo("settings."+(s==null?f:s)+".heading",B.aD,b,g,B.o),2)))
A.a(a.appendChild(A.F(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.F(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.tM(h)),p=B.a.gv(B.E),o=t.xG,q=new A.V(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.kA(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.F(a0,"div",e,g)
for(s=s.a(new A.tN(h)),q=B.a.gv(B.E),o=new A.V(q,s,o);o.m();)A.a(j.appendChild(h.ll(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.L)A.a(a.appendChild(h.jL(a0)))
if(d===B.M)A.a(a.appendChild(h.jK(a0)))
if(d===B.a4)A.a(a.appendChild(h.jM(a0)))
i=A.F(a0,"div",e,g)
for(s=t.pz.a(h.gks()),q=B.a.gv(B.kN),s=new A.V(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.ej(a0,new A.bo("settings."+o+".reset."+n,B.I,"reset "+n,"restore "+n+" settings to defaults",B.o),new A.tO(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.ej(a0,new A.bo("settings."+(s==null?f:s)+".reset.all",B.I,"reset all settings","restore all settings to defaults",B.f3),new A.tP(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.ej(a0,new A.bo("settings."+(d==null?f:d)+".back",B.I,"return","return to settings categories",B.o),new A.tQ(h),g)))},
jK(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.F(a,"div","settings-grid",j),f=k.dG(a,g,"reducedMotion","reduced motion (system default)"),e=k.dG(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dG(a,g,"captions","non-speech captions"),c=A.F(a,"label",h,j)
A.a(c.appendChild(A.F(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Y(new A.tE(k,s)))
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
A.a(q.appendChild(n))}q.addEventListener("change",A.Y(new A.tF(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.F(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Y(new A.tG(k)))
A.a(g.appendChild(l))
k.ok.K(0,A.E(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.l(0,"screenReaderVerbosity",q)
return g},
dG(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Y(new A.to(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eW(a){var s,r
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
s.value=(r==null?B.ae:r).b}},
jM(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.F(a,"div","settings-grid",l)
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
r.addEventListener("change",A.Y(new A.tH(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.F(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.F(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.Y(new A.tI(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.F(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.F(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.Y(new A.tJ(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.F(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
bh(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.D7(f,t.Ct,"T","_addGameplaySelect")
f.i("K<0>").a(e)
s=A.F(a,"label","setting-row",null)
A.a(s.appendChild(A.F(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.Y(new A.tC(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.l(0,c,r)},
iK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
jL(a){var s,r,q=this,p=A.F(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bw[s].b
n.l(0,r,r)}q.cC(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.bq[s].b
n.l(0,r,r)}q.cC(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.bp[s].b
n.l(0,r,r)}q.cC(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.bn[s].b
o.l(0,n,n)}q.cC(a,p,"ducking","voice intelligibility",o)
return p},
cC(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.F(a,"label","setting-row",null)
A.a(s.appendChild(A.F(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.N(e,A.t(e).i("N<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Y(new A.tt(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.l(0,c,r)},
iJ(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fK(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a3===r){s=a.c===B.aV
break A}if(B.M===r){s=a.c===B.a9
break A}if(B.L===r){s=a.c===B.H
break A}s=!1
break A}return s},
kt(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a3===s){r=a===B.aV
break A}if(B.M===s){r=a===B.a9
break A}if(B.L===s){r=a===B.H
break A}r=!1
break A}return r},
ll(a,b){var s=this,r=A.F(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Y(new A.tL(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.F(a,"span",null,b.b)))
return r},
kA(a,b,c,d,e){var s,r,q=this,p=A.F(a,"label","setting-row",null),o=A.F(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.F(a,"output",null,"100%")
n.addEventListener("input",A.Y(new A.tK(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.l(0,b,n)
q.db.l(0,b,r)
q.dx.l(0,b,new A.a8(e,d))
return p},
eZ(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.mH
r=B.b.q(b,s.a,s.b)
q.value=B.b.t(r)
p.textContent=""+B.b.aE(r*100)+"%"},
snX(a){this.r=t.DI.a(a)},
so_(a){this.w=t.xl.a(a)},
snZ(a){this.x=t.xl.a(a)},
snT(a){this.y=t.DI.a(a)},
snW(a){this.z=t.xl.a(a)},
so7(a){this.Q=t.xl.a(a)},
so2(a){this.as=t.Ci.a(a)},
so1(a){this.at=t.Z.a(a)},
sbf(a){this.ax=t.Z.a(a)},
snK(a){this.ay=t.kC.a(a)},
snU(a){this.ch=t.hq.a(a)},
snJ(a){this.CW=t.Cv.a(a)},
so0(a){this.cx=t.Z.a(a)}}
A.tM.prototype={
$1(a){t.gl.a(a)
return a.d===B.X&&this.a.fK(a)},
$S:28}
A.tN.prototype={
$1(a){t.gl.a(a)
return a.d===B.ar&&this.a.fK(a)},
$S:28}
A.tO.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.tP.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.tQ.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.ah()},
$S:0}
A.tE.prototype={
$1(a){var s=this.a,r=s.k4,q=A.fb(A.u(this.b.value))
r=r.mB(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tF.prototype={
$1(a){var s=this.a,r=s.k4.mv(B.a.an(B.by,new A.tD(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tD.prototype={
$1(a){return t.mq.a(a).b===A.u(this.a.value)},
$S:40}
A.tG.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.to.prototype={
$1(a){var s,r=A.R(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.mr(r)
break A}if("photosensitivitySafe"===p){s=q.k4.mp(r)
break A}if("captions"===p){s=q.k4.m6(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.tH.prototype={
$1(a){var s=this.a,r=s.k3.m9(A.R(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tI.prototype={
$1(a){var s=this.a,r=s.k3.mx(A.R(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tJ.prototype={
$1(a){var s=this.a,r=s.k3.my(A.R(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tC.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.mi(B.a.an(B.bx,new A.tu(r.c)))
break A}if("promptDensity"===p){s=q.k3.mq(B.a.an(B.bA,new A.tv(r.c)))
break A}if("textPacing"===p){s=q.k3.mz(B.a.an(B.bz,new A.tw(r.c)))
break A}if("journalLayout"===p){s=q.k3.ml(B.a.an(B.br,new A.tx(r.c)))
break A}if("confirmations"===p){s=q.k3.m8(B.a.an(B.bl,new A.ty(r.c)))
break A}if("saveFeedback"===p){s=q.k3.mu(B.a.an(B.bs,new A.tz(r.c)))
break A}if("clockFormat"===p){s=q.k3.m7(B.a.an(B.bo,new A.tA(r.c)))
break A}s=q.k3.me(B.a.an(B.aN,new A.tB(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.tu.prototype={
$1(a){return t.bK.a(a).b===A.u(this.a.value)},
$S:146}
A.tv.prototype={
$1(a){return t.dn.a(a).b===A.u(this.a.value)},
$S:147}
A.tw.prototype={
$1(a){return t.j_.a(a).b===A.u(this.a.value)},
$S:148}
A.tx.prototype={
$1(a){return t.gm.a(a).b===A.u(this.a.value)},
$S:149}
A.ty.prototype={
$1(a){return t.aJ.a(a).b===A.u(this.a.value)},
$S:150}
A.tz.prototype={
$1(a){return t.mx.a(a).b===A.u(this.a.value)},
$S:151}
A.tA.prototype={
$1(a){return t.vS.a(a).b===A.u(this.a.value)},
$S:152}
A.tB.prototype={
$1(a){return t.x.a(a).b===A.u(this.a.value)},
$S:35}
A.tt.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.mn(B.a.an(B.bw,new A.tp(r.c)))
break A}if("dynamicRange"===o){s=p.md(B.a.an(B.bq,new A.tq(r.c)))
break A}if("reverb"===o){s=p.mt(B.a.an(B.bp,new A.tr(r.c)))
break A}s=p.mc(B.a.an(B.bn,new A.ts(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.tp.prototype={
$1(a){return t.xs.a(a).b===A.u(this.a.value)},
$S:154}
A.tq.prototype={
$1(a){return t.EL.a(a).b===A.u(this.a.value)},
$S:155}
A.tr.prototype={
$1(a){return t.gc.a(a).b===A.u(this.a.value)},
$S:156}
A.ts.prototype={
$1(a){return t.ul.a(a).b===A.u(this.a.value)},
$S:157}
A.tL.prototype={
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
A.tK.prototype={
$1(a){var s,r,q=this,p=A.fb(A.u(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.aE(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bN.prototype={
B(){return"SettingCategory."+this.b}}
A.iV.prototype={
B(){return"SettingKind."+this.b}}
A.bg.prototype={
dt(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.M(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.M(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bx(a))throw A.b(A.M(r.a+" must be boolean",q,q))
break}}}
A.tT.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:28}
A.tU.prototype={
$0(){return A.f(A.i("unknown setting: "+this.a))},
$S:7}
A.tR.prototype={
jB(a,b){var s,r=this.a
if(r!==1)throw A.b(A.n("unsupported settings version "+r,null))
for(r=this.b.gM(),r=r.gv(r);r.m();){s=r.gn()
A.tS(s.a).dt(s.b)}},
ct(a){var s=this.b.h(0,a)
return s==null?A.f(A.i("setting missing from profile: "+a)):s},
C(){return A.E(["version",this.a,"values",this.b],t.N,t.K)}}
A.tV.prototype={
on(a){var s,r,q=A.hd(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
if(r.c===a)q.l(0,r.a,r.e)}this.a=A.dQ(q,1)
this.l7(a)},
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)},
l7(a){var s,r,q=A.hd(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.E[s]
if(r.c===a)q.l(0,r.a,r.e)}this.b=A.dQ(q,1)}}
A.u9.prototype={
jC(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
j.setAttribute("aria-label","Rest")
A.a(j.appendChild(A.F(a,"h2","journal-title","Rest")))
s=A.F(a,"p","consult-label","Sleeping is the only way to end the day.")
k.w!==$&&A.b5()
k.w=s
A.a(j.appendChild(s))
r=A.F(a,"div","entry-picker",null)
for(s=k.r,q=0;q<2;++q){p=B.dd[q]
for(o=p.b+" sleep \xb7 ",n=0;n<4;++n){m=B.db[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
J.e6(s.bT(m,new A.ua()),l)
l.setAttribute("type","button")
l.addEventListener("click",A.Y(new A.ub(k,p,m)))
A.a(r.appendChild(l))}}A.a(j.appendChild(r))},
iL(a){var s,r,q=this.r.h(0,B.bV)
for(s=J.O(q==null?B.kF:q);s.m();){r=s.gn()
if(a){r.removeAttribute("disabled")
r.setAttribute("aria-disabled","false")}else{r.setAttribute("disabled","")
r.setAttribute("aria-disabled","true")}}s=this.w
s===$&&A.r()
r=a?"The living-room sofa is available for rest.":"Sleeping is the only way to end the day. Sofa rest is only available at home."
s.textContent=r},
so6(a){this.f=t.nf.a(a)}}
A.ua.prototype={
$0(){return A.c([],t.W)},
$S:158}
A.ub.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ah()},
$S:1}
A.cE.prototype={
gE(){return this.a},
gav(){return this.b},
gaW(){return this.c}}
A.nJ.prototype={
oD(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.B(s)
q=new A.H(s,r.i("e(1)").a(new A.nL()),r.i("H<1,e>")).b8(0)
r=this.b
r.O(0)
s=J.Al(a,t.N)
p=s.$ti
r.K(0,new A.I(s,p.i("l(p.E)").a(q.gaC(q)),p.i("I<p.E>")))},
mZ(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.nL.prototype={
$1(a){return t.bC.a(a).a},
$S:159}
A.nK.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.H(r,s):B.d.H(a.c,b.c)},
$S:160}
A.mc.prototype={
gcd(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nw(a){return this.c.p(0,t.T.a(a))},
eF(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a3(0,g.gm5())||!a.a.a3(0,new A.uM(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fN(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aW){m=s.d
if(m<o.length){n=n===B.ac
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ah}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.uN(s))
else k=!1
if(k)return!1
j=new A.mb(r,g,A.ad(o,t.AP),B.ac)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.O(0)
g.K(0,a.a)
g=i.c
g.O(0)
g.K(0,h)
i.r=j
return!0},
hp(a){var s=this.a,r=A.t(s).i("ac<1>"),q=r.i("I<p.E>")
s=A.J(new A.I(new A.ac(s,r),r.i("l(p.E)").a(new A.uH(a)),q),q.i("p.E"))
B.a.Y(s,new A.uI())
return s},
c9(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.p7
s=m.a.h(0,a)
if(s==null)return B.p8
r=B.d.af(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.ca:B.az
o=p===B.az&&m.x.p(0,q)&&s.L(B.cb)?B.cb:p
if(s.L(o))n=o
else n=s.L(B.az)?B.az:B.ca
r=s.h(0,n)
r.toString
m.r=new A.mb(a,n,A.ad(m.fN(a,n,r),t.AP),B.ac)
m.gcd()
r=m.r
r.toString
return new A.ma(r)},
m0(a){var s,r,q,p,o,n=this.r
if(n==null)return B.et
if(n.d!==B.ac)return B.p5
n.e=a
s=a===B.ah
n.d=s?B.aW:B.ax
r=this.f
q=s?B.er:B.oO
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.dV(q,o,p,a,null))
if(a===B.aI)B.a.k(r,new A.dV(B.oR,o,p,a,null))
if(s)this.h_(n)
return new A.m8(n)},
lE(){var s,r=this.r
if(r==null)return B.et
s=r.d
if(s!==B.ax&&s!==B.ay)return B.p6
if(this.gcd()!=null&&r.w==null)return new A.bv(new A.bF(B.ad,"The visitor is waiting for an answer."))
r.d=B.ay
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aW
this.h_(r)
return new A.j6(r,!0)}return new A.j6(r,!1)},
m1(a){var s,r,q=this.r,p=this.gcd(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ax&&o!==B.ay}if(o)return B.p4
o=p.f
s=A.B(o)
r=A.bK(new A.I(o,s.i("l(1)").a(new A.uK(a)),s.i("I<1>")),t.Y)
if(r==null)return B.p9
q.w=r.a
return new A.m9(q,p,r)},
m2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ax&&s!==B.ay}else s=!0
if(s)return i
r=h.gbn()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.dj
p=J.O(p)
while(p.m()){o=p.gn()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.aV(q,s,s)
m=c.kZ(!0,!0,o,new A.v8(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aX){B.a.k(this.f,new A.dV(B.oQ,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.hd(B.a.ga6(j.c).a,s,s)
s.K(0,q)
p.lB(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ev)if(k===B.cd){s=n.b
s=s.ga4(s)}else s=!1
else s=!0
if(s)B.a.k(this.f,new A.dV(B.oP,o,p.b,i,l))}}return m},
h_(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.r=null},
fN(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.kB(a,b,r.gn()))
return s},
kB(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.B(p)
s=A.bK(new A.I(p,r.i("l(1)").a(new A.uF(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.ce(q,s.c,c.c)},
sjf(a){this.x=t.Q.a(a)}}
A.uM.prototype={
$1(a){var s=this.a.a
return new A.ac(s,A.t(s).i("ac<1>")).N(0,new A.uL(A.u(a)))},
$S:3}
A.uL.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:29}
A.uN.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:15}
A.uH.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:29}
A.uI.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.H(a.c,b.c)
return s!==0?s:B.d.H(a.d,b.d)},
$S:162}
A.uK.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.uJ.prototype={
$0(){return A.c([],t.jV)},
$S:163}
A.uF.prototype={
$1(a){return t.aS.a(a).d.gM().a3(0,new A.uE(this.a))},
$S:164}
A.uE.prototype={
$1(a){t.q.a(a)
return this.a.y.aV(a.a,a.b)},
$S:165}
A.uG.prototype={
$2(a,b){var s=t.AP
return B.d.H(s.a(a).a,s.a(b).a)},
$S:166}
A.md.prototype={}
A.mK.prototype={}
A.xO.prototype={
$1(a){return B.c.U(A.u(a),"off.")},
$S:3}
A.bT.prototype={
B(){return"DoorChoice."+this.b}}
A.cc.prototype={
B(){return"VisitPhase."+this.b}}
A.cd.prototype={
B(){return"VisitTier."+this.b}}
A.ez.prototype={
B(){return"VisitorFactKind."+this.b}}
A.dV.prototype={
C(){var s,r=this,q=A.m(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q},
gav(){return this.c}}
A.dh.prototype={
B(){return"VisitorIssueCode."+this.b}}
A.bF.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.bF&&b.a===this.a&&b.b===this.b},
gT(a){return A.cO(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.ce.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.ce&&b.a===this.a&&b.b===this.b},
gT(a){return A.cO(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c1.prototype={
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.c1&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gT(a){var s=this
return A.cO(s.a,s.b,s.c,s.d,B.h,B.h)},
C(){var s=this
return A.E(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gav(){return this.b},
gaW(){return this.c}}
A.me.prototype={
C(){var s,r,q,p=this.a
p=A.J(p,A.t(p).c)
B.a.X(p)
s=this.b
r=A.t(s)
q=r.i("dx<1,X<e,@>>")
s=A.J(new A.dx(s,r.i("X<e,@>(1)").a(new A.uD()),q),q.i("p.E"))
r=this.c
return A.E(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.uD.prototype={
$1(a){return t.T.a(a).C()},
$S:167}
A.ka.prototype={
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
A.nG.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:168}
A.nH.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:169}
A.nI.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:170}
A.mb.prototype={
gbn(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.uO.prototype={}
A.bv.prototype={}
A.ma.prototype={}
A.m8.prototype={}
A.j6.prototype={}
A.m9.prototype={}
A.hE.prototype={}
A.mN.prototype={
glW(){var s,r
if(!this.aI)return B.n
s=this.r
s===$&&A.r()
r=this.w
r===$&&A.r()
return B.ff.lX(s,r)},
gnd(){var s="shadowCaster",r=this.d8
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.ia(s).a+";shadowTriangles="+r.ia(s).b+";frameMs="+B.b.F(this.d9,3)},
ghV(){var s=this.d8
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.d9<=100},
nn(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.ik()
l.r=k
k=l.w=B.cs.iI(k)
if(k.a===B.F)k=l.w=B.dS
q=l.b
p=l.c
s=new A.lY(q,p,q,p)
o=A.Bg(l.d.a)
l.e=o
try{o.i3(l.k5(k,q,p),s)}catch(n){r=A.ah(n)
k=l.w
if(k===B.ap)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.y(r)
l.w=B.ap
k=A.Bg(l.d.a)
k.i3(B.n1,s)
l.e=k}k=l.e
k.c2()
m=A.FJ(k.w.a.b)
B.a.k(k.d,m)
l.f=m
l.cg=l.b
l.ci=l.c
l.fw()
l.n7=A.Fp(!0,!0,!0)
l.hP=new A.rH(A.m(t.N,t.S))
l.aI=!0},
ds(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.n("Pixeldart surface size must be positive",null))
if(!r.aI){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cj!==a||r.ck!==b)r.ck=r.cj=null
s=r.e
s===$&&A.r()
s.c2()
new A.lY(a,b,a,b).A()
if(r.da==null)r.da=r.c1()},
c1(){var s=0,r=A.aK(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$c1=A.aL(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.cg
h=n.b
if(!(i!==h||n.ci!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.r()
h=n.w
h===$&&A.r()
g=A.h(m)
s=8
return A.a5(A.wZ(i,B.cv.hw("auto","full","srgb",h,"auto","profile",A.h(l),g)),$async$c1)
case 8:n.cg=m
n.ci=l
n.ck=n.cj=null
A.k_()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ah(e)
i=n.w
i===$&&A.r()
n.x=i.a.b+" surface reconfigure failed: "+A.y(k)
n.cj=n.b
n.ck=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.da=null
i=n.cj
h=n.b
j=i===h&&n.ck===n.c
if(!j)i=n.cg!==h||n.ci!==n.c
else i=!1
if(i)n.da=n.c1()
s=o.pop()
break
case 5:return A.aI(null,r)
case 1:return A.aH(p.at(-1),r)}})
return A.aJ($async$c1,r)},
ft(a,b,c,d,e,f,g,h){return B.cv.hw(d,e,f,a,g,h,c,b)},
k5(a,b,c){return this.ft(a,b,c,"auto","full","srgb","auto","profile")},
fw(){var s,r,q,p=this.w
p===$&&A.r()
s=p.a
A:{p=B.F===s
if(p){r=7
break A}if(B.N===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.N===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.f(A.n("hysteresisThreshold must be finite and >= 0",null))
this.fy=new A.qG(r,p,A.Z(q),A.Z(q),A.m(q,t.i))},
cU(a){var s=0,r=A.aK(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cU=A.aL(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aI){s=1
break}switch(a.b.a){case 0:i=B.dS
break
case 2:i=B.ap
break
case 1:i=B.dR
break
case 3:i=n.w
i===$&&A.r()
break
default:i=null}m=i
i=n.w
i===$&&A.r()
l=i
k=n.ft(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.r()
s=7
return A.a5(A.wZ(i,t.lg.a(k)),$async$cU)
case 7:n.w=t.xK.a(m)
n.fw()
n.cg=n.b
n.ci=n.c
n.x=null
A.k_()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ah(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.y(j)
A.k_()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aI(q,r)
case 2:return A.aH(o.at(-1),r)}})
return A.aJ($async$cU,r)},
lL(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="wall-plaster",b8="grime",b9="renderer is not initialized",c0="resource library is disposed"
if(!b5.aI||b5.Q.length!==0)return
b5.hQ=c1
s=b5.k2
r=b5.e
r===$&&A.r()
s.l(0,b7,r.gaR().dq(8,"texture:wall-plaster",!0,256,B.aK,256))
s.l(0,b8,b5.e.gaR().dq(8,"texture:grime",!0,512,B.aK,512))
for(q=0;q<2;++q){p=B.lb[q]
r=b5.e.w
if(r==null)r=A.f(A.i(b9))
s.l(0,p,r.dq(8,"texture:"+p,!0,256,B.aK,256))}for(q=0;q<3;++q){p=B.jT[q]
o=p==="glass"
r=b5.e.w
if(r==null)r=A.f(A.i(b9))
n=o?256:4096
m=o?256:4096
s.l(0,p,r.dq(8,"texture:"+p,!0,m,B.aK,n))}b5.e_()
b5.cM()
b5.ry=b5.c5(A.le(s.h(0,b7),0.5,B.af,0.2,0,!1,0,"quarantine-house-safe",0,1,b6,!0,1,0.48,0.44,0.46,1,1))
b5.kv()
for(r=c1.b,n=r.length,m=b5.ok,l=b5.k4,k=t.N,j=b5.rx,i=t.pw,q=0;q<r.length;r.length===n||(0,A.v)(r),++q){h=r[q]
g=A.m(k,i)
for(f=A.E(["wall",h.x,"floor",h.y,"ceiling",h.z],k,k),f=new A.cL(f,f.r,f.e,A.t(f).i("cL<1,2>")),e=h.a,d="quarantine-house-"+e+"-";f.m();){c=f.d
b=c.b
a=B.bB.h(0,b)
if(a==null)A.f(A.i("Unknown house surface material: "+b))
b=a.c
a0=c.a
a1=a.a
b=A.le(s.h(0,a.b),0.5,B.af,0.2,0,!1,0,d+a0+"-"+a1,0,1,b6,!0,a.d,(b&255)/255,(b>>>8&255)/255,(b>>>16&255)/255,1,1)
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
l.l(0,e,f)}for(n=b5.p1,q=0;q<7;++q){a3=B.kq[q]
m=a3==="service"?s.h(0,b8):s.h(0,b7)
k=b5.dW(a3)
i=b5.dW(a3)
k=A.le(m,0.5,B.af,0.2,0,!1,0,"quarantine-inventory-"+a3,0,1,b6,!0,1,b5.dW(a3).c,i.b,k.a,1,1)
i=b5.e.w
m=i==null?A.f(A.i(b9)):i
if(m.x)A.f(A.i(c0))
k.A()
a2=m.b.a.aG(k,b6)
m.r.k(0,a2)
j.l(0,k.a,k)
n.l(0,a3,a2)}b5.cM()
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.v)(r),++q){h=r[q]
if(h.a==="living-room")continue
b5.kw(c1,h)}$.o.j().setAttribute("data-renderer-legacy-living-room-shell","removed")
$.o.j().setAttribute("data-renderer-canonical-room-shell","living-room")
b5.l1(c1)
$.o.j().setAttribute("data-renderer-house-model-scale",B.b.F(2.25,2))
for(n=r.length,q=0;q<n;++q)for(m=r[q].e.length,a4=0;a4<m;++a4)continue
for(r=c1.c,n=r.length,m=b5.fx,k=b5.y,i=c1.e,q=0;f=r.length,q<f;r.length===n||(0,A.v)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
h=i.h(0,a5.b)
if(h==null)continue
a6=b5.fB(c1,h,a5)
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
d.toString}a7=new A.bf(a2,d,B.A,0,B.U,B.S,!0,!0,0,b6)
d=b5.f
d===$&&A.r()
B.A.A()
a0=d.a
a1=a0.$ti
a0.Z(a1.c.a(a2))
a0=a0.b
if(!(b>=0&&b<a0.length))return A.d(a0,b)
a6=a0[b].c
b=(a6==null?a1.y[1].a(a6):a6).d
a0=B.A.ae()
b=b.gal()
a1=A.B(b)
A.b0(new A.H(b,a1.i("C(1)").a(a0.gao()),a1.i("H<1,C>")))
m.l(0,e,new A.jq(e,f,d.b.bM(a7),a2,a7))}for(n=b5.id,m=t.Bs,q=0;q<r.length;r.length===f||(0,A.v)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
h=i.h(0,a5.b)
if(h==null)continue
e=h.a
d=b5.kW(h,a5.b4(e),a5.aM(e),a5.aM(e)+a5.w,0,a5.x,5915445)
b=m.a(new A.vN(a5))
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
a9=new A.bf(a2,d,B.A,0,B.U,B.S,!0,!0,0,b6)
d=b5.f
d===$&&A.r()
B.A.A()
a0=d.a
a1=a0.$ti
a0.Z(a1.c.a(a2))
a0=a0.b
if(!(a8>=0&&a8<a0.length))return A.d(a0,a8)
a6=a0[a8].c
a0=(a6==null?a1.y[1].a(a6):a6).d
a1=B.A.ae()
a0=a0.gal()
a8=A.B(a0)
A.b0(new A.H(a0,a8.i("C(1)").a(a1.gao()),a8.i("H<1,C>")))
B.a.k(n,new A.mM(e,d.b.bM(a9),a9,b))}for(r=A.K3(A.Jm(c1)),n=r.length,m=b5.dy,l=b5.dx,i=b5.db,f=b5.k3,e=b5.fr,q=0;q<r.length;r.length===n||(0,A.v)(r),++q){b0=r[q]
d=b0.b
b1=d===4?b8:b7
a=e.h(0,d)
if(a==null){b=s.h(0,b1)
a0=b5.dT(d)
a1=b5.dT(d)
a0=A.le(b,0.5,B.af,0.2,0,!0,0,"quarantine-house-exterior-slot-"+d,0,1,b6,!0,1,b5.dT(d).c,a1.b,a0.a,1,1)
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
if(!B.aq.p(0,a1))A.f(A.n("unknown exterior cell: "+a1,b6))
b4=new A.bf(a2,a,B.A,-1,B.U,B.S,B.nt.p(0,a1),!0,0,b6)
m.l(0,b3,a1)
l.l(0,b3,b4)
d=b5.f
d===$&&A.r()
B.A.A()
b=d.a
a0=b.$ti
b.Z(a0.c.a(a2))
b=b.b
if(!(b2>=0&&b2<b.length))return A.d(b,b2)
a6=b[b2].c
b=(a6==null?a0.y[1].a(a6):a6).d
a0=B.A.ae()
b=b.gal()
a1=A.B(b)
A.b0(new A.H(b,a1.i("C(1)").a(a0.gao()),a1.i("H<1,C>")))
i.l(0,b3,d.b.bM(b4))}},
eY(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="renderer is not initialized",b6="resource library is disposed",b7="promoted model package is missing: ",b8=b4.hH=b9.c
b4.k1=A.ad(b9.e,t.fl)
if(!b4.aI)return
for(s=b4.p4,r=new A.ae(s,s.r,s.e,A.t(s).i("ae<2>"));r.m();)r.d.a_()
s.O(0)
r=b4.R8
if(r!=null)r.b.O(0)
r=b4.RG
b4.R8=r==null?null:new A.rN(new A.rI(r),A.m(t.N,t.K))
for(r=b4.ch,q=new A.N(r,A.t(r).i("N<1,2>")).gv(0),p=b4.CW;q.m();){o=q.d
o.toString
n=b4.f
n===$&&A.r()
n.b.aK(o.b)
m=p.h(0,o.a)
if(m!=null){o=b4.e
o===$&&A.r()
o=o.w
if(o==null)o=A.f(A.i(b5))
n=m.a
if(o.x)A.f(A.i(b6))
o.a.aK(n)
o.f.a7(0,n)}}r.O(0)
p.O(0)
b4.cy=null
q=b4.cx
B.a.O(q)
for(o=b4.k1,n=o.length,l=b4.p1,k=t.fH,j=t.d,i=t.s3,h=b4.p3,g=!0,f=0;f<n;++f){e=o[f]
d=e.c
c=B.c.p(d.toLowerCase(),"stair")
if(c)continue
c=e.r
c=c!=="story"&&c!=="architecture"
if(c)continue
c=b4.hQ
b=c==null?null:c.e.h(0,e.b)
if(b==null)continue
a=b9.bJ(d)
if(b4.R8!=null&&b4.RG.a.L(a.a)){c=a.a
a0=b4.RG.a.h(0,c)
a1=(a0==null?A.f(A.i(b7+c)):a0).c
g=g&&b4.l_(a1.a.x,a,e.f.c.a*b8)
c=e.f
a0=c.a
a2=A.rV(B.Q,c.b.b*3.141592653589793/180)
a3=b4.e
a3===$&&A.r()
a3=a3.w
if(a3==null)a3=A.f(A.i(b5))
a4=b4.f
a4===$&&A.r()
a5=b.d
a6=A.c([],j)
a7=A.c([],i)
a8=new A.hh(a1,h,a3,a4,new A.vQ(b4,a,a1),new A.hy(new A.C(a5.a+a0.a*b8,a5.b+a0.b*b8,a5.c+a0.c*b8),a2,c.c.a*b8),-1,a6,a7)
a9=a8.jJ("LOD0")
a8.x=a9.a
B.a.K(a6,a9.c)
B.a.K(a7,a9.b)
c=b4.R8
c.toString
a0=k.a(new A.vR(a8))
a3=c.b
a4=e.a
if(a3.L(a4))A.f(A.i("presentation placement is already bound: "+a4))
d=b9.bJ(d).a
if(c.a.a.a.h(0,d)==null)A.f(A.i(b7+d))
a3.l(0,a4,a0.$1(new A.hk()))
s.l(0,a4,a8)
continue}d=b4.e
d===$&&A.r()
d=d.w
if(d==null)d=A.f(A.i(b5))
c=b4.kz(a,e,b8)
a0=e.a
if(d.x)A.f(A.i(b6))
a3=d.a
c.A()
b0=a3.b.aG(c,"inventory:"+a0)
a4=b0.a
a3.c.l(0,a4,a3.bb(c))
d.f.k(0,b0)
d=e.f
c=d.a
a2=A.rV(B.Q,d.b.b*3.141592653589793/180)
d=a.b
a3=l.h(0,d)
if(a3==null){a3=l.h(0,"furniture")
a3.toString}a5=b.d
c=new A.hy(new A.C(a5.a+c.a*b8,a5.b+c.b*b8,a5.c+c.c*b8),a2,1)
m=new A.bf(b0,a3,c,-1,B.U,B.S,d!=="micro",!0,0,null)
B.a.k(q,b0)
p.l(0,a0,m)
d=b4.f
d===$&&A.r()
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
A.b0(new A.H(a3,a4.i("C(1)").a(c.gao()),a4.i("H<1,C>")))
r.l(0,a0,d.b.bM(m))}b2=s.a
b3=r.a
$.o.j().setAttribute("data-renderer-inventory-items",""+(b3+b2))
b8=$.o.j()
s=b2===0?"proxy":"mixed"
b8.setAttribute("data-renderer-inventory-resolution",s)
$.o.j().setAttribute("data-renderer-inventory-proxy-count",""+b3)
$.o.j().setAttribute("data-renderer-inventory-promoted-count",""+b2)
$.o.j().setAttribute("data-renderer-promoted-material-policy","semantic-pbr-v1")
s=$.o.j()
b8=g?"pass":"mismatch"
s.setAttribute("data-renderer-promoted-bounds-alignment",b8)
b4.l2()},
l_(a,b,c){var s,r,q,p,o,n,m,l,k
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
l0(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8+":"+a9,a6=a4.p2,a7=a6.h(0,a5)
if(a7!=null)return a7
s=a9.toLowerCase()
r=a8==="porcelain-mermaid"
q=B.c.p(s,"kaca")||B.c.p(s,"gelas")||B.c.p(s,"cermin")
p=B.c.p(s,"aluminium")||B.c.p(s,"kerangka")
o=B.c.p(s,"sofa")||B.c.p(s,"cusion")||B.c.p(s,"carpet")
n=B.c.p(s,"floor")||B.c.p(s,"lemari")||B.c.p(s,"meja")||B.c.p(s,"tiang")
m=B.c.p(s,"wall")||B.c.p(s,"roof")||B.c.p(s,"tegel")
l=B.c.p(s,"emmision")||B.c.p(s,"netflix")||s==="tv"
k=A.yA(a5.toLowerCase()," ","-")
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
a1=q?B.aB:B.af
a2=q?0.02:0.5
a3=a4.c5(A.le(j,a2,a1,a,b,q,a0,"quarantine-promoted-"+k,c,h,i,!l,d,e,f,g,1,1))
a6.l(0,a5,a3)
return a3},
l2(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
for(s=this.p4,s=new A.N(s,A.t(s).i("N<1,2>")).gv(0),r=t.N,q=t.K;s.m();){p=s.d
o=A.m(r,q)
o.l(0,"placementId",p.a)
n=p.b
m=n.x
l=m==null
k=n.z.length
j=n.y.length
m=l?null:m.b.length
if(m==null)m=0
o.K(0,new A.r5(n.a.a.b,"LOD0",!l,k,j,m).C())
i.push(o)}s=$.o.j()
o=i.length!==0
n=o&&B.a.a3(i,new A.vG())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(A.E(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
dh(a){var s=0,r=A.aK(t.H),q=this,p,o,n
var $async$dh=A.aL(function(b,c){if(b===1)return A.aH(c,r)
for(;;)switch(s){case 0:s=2
return A.a5(B.fh.co(a,new A.vO(),new A.vP()),$async$dh)
case 2:n=c
q.RG=n
p=$.hO
if(p!=null)q.eY(p)
$.o.j().setAttribute("data-renderer-model-packages","validated")
$.o.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.o.j()
o=n.a.ga5()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aI(null,r)}})
return A.aJ($async$dh,r)},
iX(c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=c4.e,c3=c2.h(0,c5)
if(c3==null)return
s=c3.a
r=t.N
q=A.aN([s],r)
for(p=c4.aQ(s),o=J.O(p.a),p=new A.V(o,p.b,p.$ti.i("V<1>"));p.m();){n=o.gn()
m=n.cp(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c2.h(0,m)!=null)q.k(0,m)}c2=A.J(q,q.$ti.c)
B.a.X(c2)
l=B.a.W(c2,"|")
if(c1.cy===l)return
c1.cy=l
for(c2=c1.ax,c2=new A.N(c2,A.t(c2).i("N<1,2>")).gv(0),s=c1.ay,p=t.h1,o=c1.at;c2.m();){k=c2.d
n=k.a
j=q.p(0,n)?-1:0
i=k.b
h=s.h(0,n)
h.toString
g=A.c([],p)
for(f=J.aQ(i),e=0;e<f.gu(i);++e){if(!(e<h.length))return A.d(h,e)
d=c1.c7(h[e],j)
c=c1.f
c===$&&A.r()
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
A.b0(new A.H(a0,a1.i("C(1)").a(a.gao()),a1.i("H<1,C>")))
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
if(g.length!==0)o.l(0,n,B.a.ga1(g))}for(c2=c1.id,s=c2.length,a4=0;a4<c2.length;c2.length===s||(0,A.v)(c2),++a4){a5=c2[a4]
j=q.p(0,a5.a)&&a5.d.$0()?-1:0
p=c1.f
p===$&&A.r()
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
A.b0(new A.H(h,f.i("C(1)").a(n.gao()),f.i("H<1,C>")))
p=p.b
f=p.$ti
n=f.c.a(a5.b)
f.y[1].a(o)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb3(o)}c2=c1.fx
s=A.t(c2).i("ac<1>")
s=A.J(new A.ac(c2,s),s.i("p.E"))
p=s.length
a4=0
for(;a4<s.length;s.length===p||(0,A.v)(s),++a4){a6=c2.h(0,s[a4])
o=a6.e
d=c1.c7(o,q.p(0,a6.b)?-1:0)
o=c1.f
o===$&&A.r()
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
A.b0(new A.H(f,c.i("C(1)").a(h.gao()),c.i("H<1,C>")))
o=o.b
c=o.$ti
c.c.a(n)
c.y[1].a(d)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(d)
c2.l(0,a6.a,a6.ma(d))}for(c2=c1.k1,s=c2.length,p=c1.ch,o=c1.CW,n=c1.p4,a4=0;a4<s;++a4){a7=c2[a4]
h=a7.a
a8=p.h(0,h)
a9=o.h(0,h)
b0=n.h(0,h)
b1=q.p(0,a7.b)
if(b0!=null){b0.iW(b1?-1:0)
continue}if(a8==null||a9==null)continue
h=c1.f
h===$&&A.r()
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
A.b0(new A.H(b,a.i("C(1)").a(c.gao()),a.i("H<1,C>")))
h=h.b
a=h.$ti
a.c.a(a8)
a.y[1].a(f)
h.Z(a8)
h=h.b
a=a8.a
if(!(a>=0&&a<h.length))return A.d(h,a)
h[a].sb3(f)}b2=new A.kK().m_(c5)
c2=$.o.j()
s=A.J(b2,A.t(b2).c)
B.a.X(s)
c2.setAttribute("data-renderer-exterior-cells",B.a.W(s,","))
c2=c1.dy
r=new A.kK().hS(new A.vT(c1),new A.ac(c2,A.t(c2).i("ac<1>")),b2,r)
b3=A.f6(r,r.$ti.i("p.E"))
c2=c1.dx
s=A.t(c2).i("ac<1>")
s=A.J(new A.ac(c2,s),s.i("p.E"))
r=s.length
p=c1.db
b4=0
b5=0
b6=0
a4=0
for(;a4<s.length;s.length===r||(0,A.v)(s),++a4){b7=s[a4]
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
o===$&&A.r()
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
A.b0(new A.H(h,f.i("C(1)").a(n.gao()),f.i("H<1,C>")))
o=o.b
f=o.$ti
f.c.a(b8)
f.y[1].a(d)
o.Z(b8)
o=o.b
f=b8.a
if(!(f>=0&&f<o.length))return A.d(o,f)
o[f].sb3(d)
c2.l(0,b7,d)}$.o.j().setAttribute("data-renderer-exterior-items",""+b4+"/"+c2.a)
$.o.j().setAttribute("data-renderer-shadow-casters",""+b5+"/"+b6)
c2=A.t(b3)
s=c2.i("dx<1,e>")
c0=A.J(new A.dx(b3,c2.i("e(1)").a(new A.vU(c1)),s),s.i("p.E"))
B.a.X(c0)
$.o.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.W(c0,","))},
dm(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aI)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.h1(b0,n)
l=J.aQ(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.y,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.r()
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
c===$&&A.r()
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
A.b0(new A.H(b,a3.i("C(1)").a(d.gao()),a3.i("H<1,C>")))
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
$.o.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hR+1));++a7.hR},
eB(a,b){var s,r,q,p,o,n,m,l,k=this
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
p===$&&A.r()
m=p.gaR().dn(k.fB(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bf(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.r()
n=r.c
p.lv(l)
p.b.eM(n,l)
s.l(0,b,r.hA(l,m))
s=k.y
n=r.d
B.a.a7(s,n)
B.a.k(s,m)
k.e.gaR().oi(n)},
iM(k2,k3,k4,k5,k6,k7,k8,k9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5=this,j6=null,j7="rain_override",j8="wetness_override",j9=A.aN([k3],t.N),k0=k2.e,k1=k0.h(0,k3)
if(k1!=null)for(s=k1.a,r=k2.aQ(s),q=J.O(r.a),r=new A.V(q,r.b,r.$ti.i("V<1>"));r.m();){p=q.gn()
o=p.cp(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&k0.h(0,o)!=null)j9.k(0,o)}n=new A.q9(k2).oR(j9,k4)
s=A.c([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.v)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.eA(l.a,l.x,l.w,q))}for(r=j5.k1,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&j9.p(0,k.b)){j=k0.h(0,k.b)
i=j5.hH
h=k.f.a
j=j.d
s.push(new A.eA(new A.k(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}j5.ce=A.ad(s,t.cZ)
k0=t.jC
g=A.c([],k0)
f=A.c([],k0)
for(e=0;e<n.length;++e){l=n[e]
k0=e===0
s=k0?"spot":"point"
r=l.c
q=l.e
p=l.d
if(s!=="point"&&s!=="spot")A.f(A.a6(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.f(A.a6(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.f(A.a6(p,"radius","must be finite and > 0"))
k0=k0?f:g
B.a.k(k0,new A.b7(e,s,l.a,new A.k((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}k0=j5.fy
k0===$&&A.r()
d=k0.oe(k4,g,f)
k0=A.m(t.S,t.A_)
for(e=0;e<n.length;++e)k0.l(0,e,n[e])
s=A.c([],t.Fk)
for(r=d.a,q=r.length,m=0;m<r.length;r.length===q||(0,A.v)(r),++m){c=r[m]
p=c.a
j=k0.h(0,p).a
i=c.d
s.push(new A.lw(p,new A.C(j.a,j.b,j.c),new A.b9(i.a,i.b,i.c),c.e,c.f))}r=A.c([],t.cv)
for(q=d.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.v)(q),++m){c=q[m]
j=c.a
i=k0.h(0,j)
h=i.a
i=i.b
b=c.d
r.push(new A.bO(j,new A.C(h.a,h.b,h.c),new A.C(i.a,i.b,i.c),new A.b9(b.a,b.b,b.c),c.e,c.f,1.05,1.4))}j5.jO(d,++j5.go)
k0=$.c2()
a=k0.J("time_override")
if(a>=0)a0=B.b.q(a,0,23.999)
else a0=k9
j5.hM=a0
a1=k7.c
q=k7.d
a2=B.b.R(B.b.R(a0,24)+24,24)
a3=B.b.q(a1,0,1)
a4=B.b.q(q,6,16)/2
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
h=B.b.q(Math.sin(a9),0,1)
b=Math.sin(b0)
b1=Math.cos(a9)
h=B.b.q(1-h,0.1,0.9)
b2=a5-1.5
if(a2>=b2&&a2<a5){b3=(a2-b2)/1.5
A.ck(B.mM,B.dU,b3)
b4=A.ck(B.mO,B.bK,b3)
b5=A.ck(B.mI,B.bL,b3)
b6=0.3+0.5*b3
b7=0.25+0.2*b3}else if(p&&a2<14){b4=B.bK
b5=B.bL
b6=0.85
b7=0.45}else if(a2>=14&&a2<a6){b3=(a2-14)/(a6-14)
A.ck(B.dU,B.dT,b3)
b4=A.ck(B.bK,B.dX,b3)
b5=A.ck(B.bL,B.dW,b3)
b6=0.85*(1-b3*0.35)
b7=0.45*(1-b3*0.25)}else if(a2>=a6&&a2<a6+1.5){b3=(a2-a6)/1.5
A.ck(B.dT,B.bM,b3)
b4=A.ck(B.dX,B.aR,b3)
b5=A.ck(B.dW,B.aS,b3)
b6=0.55*(1-b3*0.8)
b7=0.34*(1-b3*0.65)}else{p=a6+1.5
if(a2>=p&&a2<a6+3){b3=(a2-p)/1.5
A.ck(B.bM,B.bM,b3)
b4=A.ck(B.aR,B.aR,b3)
b5=A.ck(B.aS,B.aS,b3)
b6=0.11*(1-b3*0.25)
b7=0.16*(1-b3*0.15)}else{b4=B.aR
b5=B.aS
b6=0.15
b7=0.18}}if(a3>0){b8=A.ck(b5,B.mW,a3*0.7)
b6*=1-a3*0.35
b7*=1-a3*0.15}else b8=b5
b9=k8?1:0.15
c0=B.b.q(a3*0.75+B.b.q(0.3333333333333333,0,1)*0.25,0,1)
if(k0.J(j7)>=0)a1=k0.J(j7)
j5.xr=B.b.q(a1,0,1)
c1=k0.J(j8)>=0?k0.J(j8):c0
c2=B.b.q(k0.J("weather_reflection_strength"),0,2)
j5.cf=B.b.q(c1*c2,0,1)
q=A.FX(q)
p=a1*0.92
b2=2+k7.e*0.03
c3=B.b.q(0.68+a1*0.22,0,1)
new A.uc(a0,13,0.8988445647770796,q,p,a1,b2,c3,1,0.0015,0.06).A()
c4=A.Bk(a2,13)*3.141592653589793/12
c5=Math.sin(0.8988445647770796)
c6=Math.cos(0.8988445647770796)
c7=c5*Math.sin(q)
c8=c6*Math.cos(q)
c9=c7+c8*Math.cos(c4)
d0=Math.asin(B.b.q(c9,-1,1))
d1=Math.cos(d0)
d2=Math.atan2(Math.sin(c4),Math.cos(c4)*c5-Math.tan(q)*c6)
d3=new A.C(Math.sin(d2)*d1,Math.sin(d0),Math.cos(d2)*d1).gac()
if(Math.abs(c8)<1e-12)d4=c9>0?-2:2
else d4=(Math.sin(-0.014538592669112763)-c7)/c8
d5=d4>-1&&d4<1
d6=d5?Math.acos(d4)*12/3.141592653589793:0
d7=B.b.R(B.b.R(13-d6,24)+24,24)
d8=B.b.R(B.b.R(13+d6,24)+24,24)
q=!d5
d9=q&&c9>0
e0=A.FW(d0,a2,d9,q&&!d9,13)
e1=b2+p*3.5+a1*1.5
e2=A.FU(Math.max(0,1.5707963267948966-d0))
b2=B.b.q(Math.exp(-(0.0046416*e2*e1)),0,1)
c7=B.b.q(Math.exp(-(0.010846399999999999*e2*e1)),0,1)
c8=B.b.q(Math.exp(-(0.02648*e2*e1)),0,1)
e3=B.b.q(Math.exp(-(p*(2.2+a1*2))),0,1)
e4=A.Bl(-0.3141592653589793,0.10471975511965977,d0)
e5=A.Bl(-0.014538592669112763,0.03490658503988659,d0)
e6=Math.max(0,Math.sin(d0)+e5*0.018)
e7=b2*0.2126+c7*0.7152+c8*0.0722
e8=Math.pow(e6,0.35)*e7*e3
e9=B.b.q(e6*e7,0,1)
f0=0.42*e9
f1=1-p
f2=0.055+f0*(0.55+0.45*f1)+e4*(0.028+0.018*f1)
f3=0.0015*(1+c3*1.6+a1*4+p*0.8)
c3=0.035+b2*0.18+p*0.1
f1=0.045+c7*0.2+p*0.12
p=0.07+c8*0.24+p*0.16+e4*0.018
f4=new A.b9(b2,c7,c8)
if(!isFinite(a2)||!isFinite(d7)||!isFinite(d8)||!isFinite(d0)||!isFinite(e4)||!isFinite(e5)||!isFinite(d2)||!isFinite(e8)||!isFinite(f2)||!isFinite(f3)||!isFinite(0.06)||!d3.gV(0)||!new A.C(b2,c7,c8).gV(0)||!f4.gV(0)||!new A.b9(0.14+0.38*e9,0.16+f0,0.22+0.52*e9).gV(0)||!new A.b9(c3,f1,p).gV(0))A.f(A.i("solar lighting state is not finite"))
if(d3.gbd()<0.999||d3.gbd()>1.001||e8<0||f2<0||f3<0||e3<0||e3>1||e4<0||e4>1||e5<0||e5>1)A.f(A.i("solar lighting state is out of bounds"))
new A.kD(d3,f4,e8).A()
q=$.o.j()
q.setAttribute("data-renderer-solar-phase",e0.b)
q.setAttribute("data-renderer-solar-sunrise-hours",B.b.F(d7,4))
q.setAttribute("data-renderer-solar-sunset-hours",B.b.F(d8,4))
q.setAttribute("data-renderer-solar-elevation-deg",B.b.F(d0*180/3.141592653589793,4))
q.setAttribute("data-renderer-solar-twilight-factor",B.b.F(e4,4))
q.setAttribute("data-renderer-solar-horizon-visibility",B.b.F(e5,4))
q.setAttribute("data-renderer-solar-horizon-blend",B.b.F(A.Bm(e5),4))
q.setAttribute("data-renderer-solar-transmittance",B.b.F(e3,4))
q=$.Ae()
q.oM(0.0166,a1)
f5=q.z
f6=B.b.q(Math.sin(Math.max(0,d0))/Math.sin(1.1344640137963142),0,1)
f7=A.Bm(e5)
q=1-f7
f8=new A.C(d3.a*f7+-(j*i)*q,d3.b*f7+h*q,d3.c*f7+-(b*b1)*q).gac()
j=f5.a
f9=j&&f5.gi_()?new A.C(f5.f,f5.r,f5.w):f8
i=0.35+(b2-0.35)*f7
c7=0.45+(c7-0.45)*f7
c8=0.65+(c8-0.65)*f7
g0=new A.b9(i,c7,c8)
if(j){h=f5.b
g1=new A.b9(i+f5.c*h*2,c7+f5.d*h*2,c8+f5.e*h*2.5)}else g1=g0
g2=B.b.q(f5.gmR(),0.12,2)
g3=B.b.q(k0.J("weather_lightning_intensity"),0,2)
b6=(e8*f7+b6*q)*b9
if(j)b6=b6*0.12+f5.b*4.5*g2*g3
q=$.o.j()
q.setAttribute("data-renderer-lightning-active",String(j))
i=f5.x
q.setAttribute("data-renderer-lightning-source-distance-m",B.b.F(i,1))
q.setAttribute("data-renderer-lightning-distance-attenuation",B.b.F(g2,4))
h=f5.f
b=f5.r
b1=f5.w
q.setAttribute("data-renderer-lightning-source-direction",B.b.F(h,3)+","+B.b.F(b,3)+","+B.b.F(b1,3))
g4=k0.bY("fog_enable")
g5=k0.J("fog_density")
g6=k0.J("fog_height_falloff")
g7=B.b.q(k0.J("fog_distance_scale"),0.25,2)
g8=B.b.q(k0.J("weather_fog_scattering"),0,2)
f3=g4?f3*B.b.q(g5/0.012,0,8)*g8:0
g9=g4?0.06*B.b.q(g6/0.6,0,8):0
h0=k0.bY("volumetric_light_enable")?B.b.q(k0.J("volumetric_shaft_intensity")/0.1,0,8):0
h1=B.d.q(B.b.aE(k0.J("volumetric_precision")),4,24)
h2=B.b.q(k0.J("volumetric_dust_density"),0,0.25)
h3=B.b.q(k0.J("volumetric_scattering")+a1*0.1,-0.85,0.85)
h4=B.b.q(k0.J("light_ambient_mult"),0,3)
h5=B.b.q(k0.J("light_direct_mult"),0,3)
h6=B.b.q(k0.J("normal_bump_strength"),0,2)
h7=B.b.q(k0.J("pbr_roughness"),0,2)
h8=B.b.q(k0.J("pbr_metallic"),0,2)
h9=B.b.q(k0.J("pbr_specular"),0,3)
i0=B.b.q(k0.J("shadow_bias"),0.0001,0.01)
i1=B.b.q((1+B.b.q(1-e3,0,1)*1.4+a1*0.25)/B.b.q(k0.J("shadow_csm_hardness"),0.1,3),0,3)
j5.ek=f3
j5.hN=g9
k0=A.c([],t.xL)
for(q=s.length,m=0;m<s.length;s.length===q||(0,A.v)(s),++m){l=s[m]
b2=l.c
c7=l.e
k0.push(new A.ct("point:"+l.a,l.b,new A.C(b2.a,b2.b,b2.c),l.d,Math.max(0.25,c7),Math.max(4,c7*8)))}for(q=r.length,m=0;m<r.length;r.length===q||(0,A.v)(r),++m){l=r[m]
b2=l.d
c7=l.f
k0.push(new A.ct("spot:"+l.a,l.b,new A.C(b2.a,b2.b,b2.c),l.e,Math.max(0.25,c7*0.25),Math.max(8,c7)))}i2=j5.to
if(j&&f5.gi_()&&i2!=null){i3=new A.C(h,b,b1).gac()
B.a.k(k0,new A.ct("lightning:active",i2.d.a2(0,i3.a8(0,i)),new A.C(f5.c,f5.d,f5.e),f5.b*12e4*g3,1000,Math.max(1100,i*1.25)))}i4=g4?f3+h2:0
if(i2==null)q=j6
else{q=i2.d
q=A.Gb(i2.e,Math.min(i2.r,64),q,i4,k0)}j5.hG=q
j=q==null
i5=j?j6:q.a
if(i5==null)i5=B.v
$.o.j().setAttribute("data-renderer-volumetric-medium-scattering",B.b.F(i4,6))
i=A.c([],t.E7)
e=0
for(;;){if(!(e<j5.ce.length&&e<4))break
i.push(new A.vS(j5,e,k7).$0());++e}if(!j){j=$.o.j()
j.setAttribute("data-renderer-volumetric-source-count",""+q.c)
h=q.a
j.setAttribute("data-renderer-volumetric-source-radiance",B.b.F(h.a,6)+","+B.b.F(h.b,6)+","+B.b.F(h.c,6))
q=q.b
j.setAttribute("data-renderer-volumetric-source-direction",B.b.F(q.a,4)+","+B.b.F(q.b,4)+","+B.b.F(q.c,4))}q=b4.c
j=b4.b
h=b4.a
b=Math.max(0.045,b7*(f6>0.001?f6:1)*b9+e4*(0.022+0.018*(1-a1)))
b1=b8.c
b2=i5.a
c7=B.b.q(b2,0,8)
c8=b8.b
f0=i5.b
f4=B.b.q(f0,0,8)
i6=b8.a
i7=i5.c
i8=B.b.q(i7,0,8)
i9=B.b.q(0.72+b1*0.28,0,1)
j0=B.b.q(0.76+c8*0.24,0,1)
j1=B.b.q(0.82+i6*0.18,0,1)
j2=B.b.q(0.22+a1*0.18,0,0.5)
if(!new A.b9(q,j,h).gV(0))A.f(A.n("skyColor must be finite",j6))
if(!g1.gV(0))A.f(A.n("keyLightColor must be finite",j6))
if(!new A.b9(b2,f0,i7).gV(0))A.f(A.n("sourceRadiance must be finite",j6))
if(!isFinite(b6)||b6<0)A.f(A.n("keyLightIntensity must be finite and >= 0",j6))
if(b2<0||f0<0||i7<0)A.f(A.n("sourceRadiance channels must be >= 0",j6))
j3=B.b.q(b6*0.12,0,0.35)
j4=1-j3
j5.x1=new A.kN(B.jO,new A.b9(b1*0.08+c3*0.035+c7*0.015,c8*0.08+f1*0.035+f4*0.015,i6*0.08+p*0.035+i8*0.015),1.5*g7/(1+a1*0.45),14*g7/(1+a1*0.16),g9,f3,new A.b9(i9,j0,j1),g9,h2,h3,j2,h0,h1,i1,h4,h5,h6,h7,h8,h9,i0,new A.b9(B.b.q(q*j4+g1.a*j3+b2*0.02,0,1),B.b.q(j*j4+g1.b*j3+f0*0.02,0,1),B.b.q(h*j4+g1.c*j3+i7*0.02,0,1)),B.b.q(c2*0.42,0,1),0,new A.b9(q,j,h),b,new A.kD(f9,g1,b6),s,r,k0,i)
i=$.o.j()
i.setAttribute("data-renderer-reflection-intensity",B.b.F(j5.x1.dy,4))
i.setAttribute("data-renderer-reflection-confidence",B.d.F(j5.x1.fr,4))
i.setAttribute("data-renderer-reflection-mode","environment-fallback")},
l8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="wetness_override",a1="fog_height_falloff",a2="fog_distance_scale",a3="post_affine_warp",a4="post_vertex_snap",a5="weather_particles_enable",a6="weather_particle_density",a7="weather_particle_size",a8="weather_snow_accumulation",a9="weather_fog_scattering",b0="weather_lightning_intensity",b1="weather_reflection_strength",b2="light_ambient_mult",b3="light_direct_mult",b4=null,b5="shadow_csm_hardness",b6=t.N,b7=A.aN(["time_override","rain_override",a0,"fog_enable","fog_density",a1,a2,"post_exposure","post_vignette","post_film_grain",a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3],b6),b8=A.m(b6,b6),b9=$.c2().w
b9===$&&A.r()
s=0
for(;s<53;++s)b8.l(0,b9[s].a,"No resolved Pixeldart frame mapping is installed")
b9=new A.vL(a,b7,b8)
b9.$2("ssao",B.km)
b9.$2("shadows",B.kY)
b9.$2("shadows",B.kS)
b9.$2("volumetric",B.jP)
b9.$2("bloom",B.kT)
b9.$2("dof",B.kV)
b9.$2("grade",B.kU)
b9.$2("ps1",B.l8)
b9.$2("vhs",B.kW)
b9=$.c2()
r=a.hM
q=a.xr
p=a.cf
o=a.ek
n=a.hN
m=b9.J(a2)
l=a.x2
k=b9.J(b5)
j=a.x1
i=a.x2
h=b9.J(a6)
g=b9.J(a7)
f=b9.J(a8)
e=b9.J(a9)
d=b9.J(b0)
c=b9.J(b1)
b=a.x2
b=A.E(["time_override",r,"rain_override",q,a0,p,"fog_density",o,a1,n,a2,m,"shadow_ao_intensity",l.c,b5,k,b2,j.ax,b3,j.ay,"pbr_roughness",j.CW,"pbr_metallic",j.cx,"pbr_specular",j.cy,"normal_bump_strength",j.ch,"shadow_bias",j.db,"volumetric_shaft_intensity",j.Q*0.1,"volumetric_precision",j.as,"volumetric_dust_density",j.x,"volumetric_scattering",j.y,"post_exposure",i.a,"post_bloom",i.b,"post_vignette",i.e,"post_film_grain",i.f,"post_dither",i.Q,"post_depth_of_field",i.d,"post_color_grade",i.as,a3,i.at,a4,i.ax,a6,h,a7,g,a8,f,a9,e,b0,d,b1,c,"post_quantization_bits",b.ay,"post_vhs_chroma",b.ch,"post_vhs_noise",b.cx],b6,t.i)
b9.ow("No resolved debug attachments are exposed by the active Pixeldart profile",A.E(["fog_enable",a.ek>0,"shadow_ssdo_enable",a.x2.c>0,"volumetric_light_enable",a.x1.Q>0,a5,b9.bY(a5)],b6,t.y),b,b7,b8)
b8=$.DV()
b8.lI(b9)
$.o.j().setAttribute("data-renderer-shader-overrides",B.f.a0(b8.a,b4))
$.o.j().setAttribute("data-renderer-shader-lab",B.f.a0(b9.mM(),b4))
$.o.j().setAttribute("data-renderer-shader-lab-document",B.f.a0(b9.eK(),b4))
$.o.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a0(A.Bi().eK(),b4))},
iY(a){var s,r,q,p=this
if(a==null){p.cf=p.d7=p.d6=0
$.o.j().removeAttribute("data-renderer-weather-surface")
return}s=B.b.q($.c2().J("weather_snow_accumulation"),0,2)
p.d6=B.b.q(a.a/0.08*s,0,1)
p.d7=B.b.q(a.x,0,1)
r=a.b
p.cf=B.b.q(r/0.0008,0,1)
q=$.o.j()
q.setAttribute("data-renderer-weather-surface",B.f.a0(a.C(),null))
q.setAttribute("data-renderer-weather-snow-coverage",B.b.F(p.d6,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.F(p.d7,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.F(r,8))},
kv(){var s,r,q,p,o=this
if(o.ei!=null||o.ej!=null)return
s=new Float32Array(A.W(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=o.e
r===$&&A.r()
o.ei=r.gaR().dn(o.c3(s),"weather:rain-particle")
o.ej=o.c5(B.lw)
q=new A.cs(new Float32Array(5376))
q.ij(new A.k(-0.035,0,0),new A.k(0.035,0,0),new A.k(0.035,-0.07,0),new A.k(-0.035,-0.07,0),14478335,0.78,!0)
o.hI=o.e.gaR().dn(o.c3(B.r.aB(q.a,0,q.b)),"weather:snow-particle")
o.hJ=o.c5(B.lx)
p=new A.cs(new Float32Array(5376))
p.ij(new A.k(-0.025,0,0),new A.k(0.025,0,0),new A.k(0.025,-0.12,0),new A.k(-0.025,-0.12,0),11519958,0.9,!0)
o.hK=o.e.gaR().dn(o.c3(B.r.aB(p.a,0,p.b)),"weather:hail-particle")
o.hL=o.c5(B.ly)},
lj(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null
a1.d1=a1.d0=0
a1.d2=a1.gfV()
a1.d4=a1.d3=0
a1.d5=!1
a1.d_=a1.cZ=a1.eh=0
s=a1.y2
r=s==null
q=r?a2:s.a
if(q==null)q=B.x
p=$.c2()
if(!p.bY("weather_particles_enable"))return
o=B.b.q(p.J("weather_particle_density"),0,2)
n=B.b.q(p.J("weather_particle_size"),0.25,2)
m=r?a2:A.BC(s.a)
if(m==null)m=A.BC(B.x)
A:{p=B.ao===q
if(p){l=a1.hI
break A}if(B.a6===q||B.an===q){l=a1.hK
break A}l=a1.ei
break A}B:{if(p){k=a1.hJ
break B}if(B.a6===q||B.an===q){k=a1.hL
break B}k=a1.ej
break B}if(l==null||k==null||q===B.x||a1.xr<=0.01||a1.y1<=0.01)return
C:{if(p){p=38
break C}if(B.a6===q){p=26
break C}if(B.an===q){p=30
break C}p=32
break C}j=B.d.q(B.b.aE(8+a1.xr*p*o*a1.y1),0,40)
p=a1.gfV()
if(j<0)A.f(A.n("atmospheric particle counts must be >= 0",a2))
i=B.d.q(j,0,p)
a1.d0=j
a1.d2=p
a1.d5=B.d.q(j,0,p)!==j
p=Math.sin(a1.el*0.7)
h=r?a2:s.b.a
if(h==null)h=0
g=h+p*0.18
r=r?a2:s.b.c
f=(r==null?0:r)+0.12
r=m.f
e=new A.nQ(l,k,B.eA,B.oy,B.oB,new A.C(g,m.b,f),B.oz,new A.C(g,-m.c,f),m.d,m.e,i,a1.en,r*n,m.r,2003132788+q.a)
d=e.nc(a4)
a1.d3=d.b
a1.d4=d.c
c=new A.kO(a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r,Math.max(0,a4.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,b=0;b<i;++b){a=e.cw(a4,b)
l=e.cw(c,b).c
k=a.c
h=a.d
a0=A.Gd(new A.k(k.a,k.b,k.c),q,a1.cY,p,r,new A.k(l.a,l.b,l.c),new A.k(h.a,h.b,h.c))
if(!a0.a)continue;++a1.eh
a1.cZ=a1.cZ+a0.r
a1.d_=a1.d_+a0.f}a1.d1=e.ji(a3,a4,new A.vM(a1,m,n))},
ku(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.cY,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
gix(){var s=this.y2
s=s==null?null:s.a
return(s==null?B.x:s).b},
gdu(){var s=this.cX
s=s==null?null:s.b
return s==null?0:s},
giw(){var s=this.cX
s=s==null?null:s.d
return s==null?0:s},
gfV(){var s,r=this.w
r===$&&A.r()
s=r.a
A:{if(B.F===s){r=40
break A}if(B.N===s){r=24
break A}r=8
break A}return r},
h1(a,b){var s=A.Jn(a,b),r=A.Jl(a,b),q=A.J(s.c,t.i)
B.a.K(q,r)
return A.c([new A.hE("wall",new Float32Array(A.W(q))),new A.hE("floor",s.a),new A.hE("ceiling",s.b)],t.pv)},
c3(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.k(n,new A.C(q,p,a[o]))}if(n.length===0)throw A.b(A.i("house surface mesh cannot be empty"))
return new A.bV(B.ab,a,null,A.b0(n))},
kw(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.h1(a2,a3),a0=a3.a,a1=b.ok.h(0,a0)
if(a1==null)throw A.b(A.i("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.r()
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
e=new A.bf(g,i,B.A,-1,B.U,B.S,!0,!0,0,null)
i=b.f
i===$&&A.r()
B.A.A()
k=i.a
j=k.$ti
k.Z(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.A.ae()
k=k.gal()
h=A.B(k)
A.b0(new A.H(k,h.i("C(1)").a(j.gao()),h.i("H<1,C>")))
c=i.b.bM(e)
B.a.k(p,g)
B.a.k(o,c)
B.a.k(s,g)
B.a.k(r,c)
B.a.k(q,e)}b.z.l(0,a0,s)
b.ax.l(0,a0,r)
b.ay.l(0,a0,q)
if(r.length!==0)b.as.l(0,a0,B.a.ga1(r))
if(q.length!==0)b.at.l(0,a0,B.a.ga1(q))},
l1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.ok,p=0;p<f.length;f.length===s||(0,A.v)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.E(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cL(l,l.r,l.e,A.t(l).i("cL<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bB.h(0,i)
if(h==null)A.f(A.i("Unknown house surface material: "+i))
i=j.a
B.a.k(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.k(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.o.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.W(e,","))
$.o.j().setAttribute("data-renderer-house-surface-bindings",B.a.W(d,","))},
kz(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cs(new Float32Array(5376))
g=this.ky(a0.b)
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
j=B.r.aB(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.C(e,d,j[c]))}return new A.bV(B.ab,j,null,A.b0(g))},
ky(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dT(a){var s
A:{if(0===a){s=B.mJ
break A}if(1===a){s=B.mL
break A}if(2===a){s=B.mR
break A}if(3===a){s=B.mZ
break A}if(4===a){s=B.n_
break A}if(5===a){s=B.mP
break A}if(6===a){s=B.mY
break A}if(7===a){s=B.mU
break A}s=B.mX
break A}return s},
dW(a){var s
A:{if("architecture"===a){s=B.mK
break A}if("furniture"===a){s=B.dV
break A}if("fixture"===a){s=B.mT
break A}if("service"===a){s=B.mV
break A}if("story"===a){s=B.mS
break A}if("decor"===a){s=B.mN
break A}if("micro"===a){s=B.mQ
break A}s=B.dV
break A}return s},
di(a){return this.nD(t.G.a(a))},
nD(a){var s=0,r=A.aK(t.H),q,p=this,o,n,m,l
var $async$di=A.aL(function(b,c){if(b===1)return A.aH(c,r)
for(;;)switch(s){case 0:if(!p.aI){s=1
break}o=A.c([],t.iJ)
for(n=0;n<7;++n){m=B.l9[n]
l=a.h(0,m)
if(l!=null)o.push(p.cK(m,l))}s=3
return A.a5(A.pr(o,t.H),$async$di)
case 3:case 1:return A.aI(q,r)}})
return A.aJ($async$di,r)},
cK(a,b){return this.kC(a,b)},
kC(a2,a3){var s=0,r=A.aK(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cK=A.aL(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a0=n.k2.h(0,a2)
if(a0==null){s=1
break}p=4
c=v.G
b=A.a(A.a(c.document).createElement("img"))
b.src=a3
m=b
s=7
return A.a5(A.av(A.a(m.decode()),t.X),$async$cK)
case 7:l=null
k=a2
A:{if("grime"===k){l=512
break A}if("porcelain-albedo"===k||"porcelain-normal"===k){l=4096
break A}l=256
break A}j=l
i=j
h=j
b=A.a(A.a(c.document).createElement("canvas"))
b.width=i
b.height=h
g=b
f=A.G(g.getContext("2d"))
if(!t.m.b(f)){l=A.i("2D canvas context unavailable for "+a2)
throw A.b(l)}A.aT(f,"drawImage",[m,0,0,i,h],t.H)
e=t.mV.a(A.a(f.getImageData(0,0,i,h)).data)
l=n.e
l===$&&A.r()
l=l.gaR()
c=new Uint8Array(A.W(e))
if(l.x)A.f(A.i("resource library is disposed"))
l.c.oN(a0,c)
l=n.e.gaR()
if(l.x)A.f(A.i("resource library is disposed"))
l.c.na(a0)
$.o.j().setAttribute("data-renderer-texture-"+a2,"loaded")
n.e_()
n.cM()
p=2
s=6
break
case 4:p=3
a1=o.pop()
d=A.ah(a1)
l=$.o.j()
l.setAttribute("data-renderer-texture-"+a2,"fallback")
n.e_()
n.cM()
A.a(v.G.console).warn("Pixeldart texture "+a2+" unavailable: "+A.y(d))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aI(q,r)
case 2:return A.aH(o.at(-1),r)}})
return A.aJ($async$cK,r)},
e_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aI||i.k2.a===0)return
s=i.k2
r=A.t(s).i("N<1,2>")
r=A.ld(new A.N(s,r),r.i("c_(p.E)").a(new A.vH()),r.i("p.E"),t.jP)
q=A.J(r,A.t(r).i("p.E"))
s=i.e
s===$&&A.r()
p=s.gaR().ghb().dl(q)
s=p.a
o=A.c(s.slice(0),A.B(s))
B.a.Y(o,new A.vI())
s=A.B(o)
r=s.i("e(1)")
s=s.i("H<1,e>")
n=new A.H(o,r.a(new A.vJ()),s).W(0,",")
m=new A.H(o,r.a(new A.vK()),s).W(0,",")
s=p.cR(B.ec)
r=p.cR(B.ed)
l=p.cR(B.ee)
k=p.cR(B.ef);++i.hO
j=$.o.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.hO)
if(!A.R($.o.j().hasAttribute("data-renderer-texture-residency-initial")))$.o.j().setAttribute("data-renderer-texture-residency-initial",n)},
cM(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aI||j.rx.a===0)return
s=A.c([],t.a6)
for(r=j.rx,r=new A.N(r,A.t(r).i("N<1,2>")).gv(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.d9(p,o,B.c.p(p,"wall")?2:1))}r=j.e
r===$&&A.r()
r=r.gaR()
n=r.e
if(n===$){p=r.ghb()
r.e!==$&&A.yB()
n=r.e=new A.qT(p)}m=n.dl(s)
s=m.a
l=A.c(s.slice(0),A.B(s))
B.a.Y(l,new A.vE())
s=A.B(l)
k=new A.H(l,s.i("e(1)").a(new A.vF()),s.i("H<1,e>")).W(0,",")
s=$.o.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cH(B.bE)+";pending="+m.cH(B.dy)+";missing="+m.cH(B.dz)+";evicted="+m.cH(B.dA))},
c7(a,b){return new A.bf(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
fB(a,b,c){var s,r,q,p,o,n=A.Jk(a,b,c),m=n.length
if(m===0)throw A.b(A.i("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.C(q,p,n[o]))}return new A.bV(B.ab,n,null,A.b0(s))},
kW(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.S.j().aH(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cs(new Float32Array(5376))
o.aN(k[0],k[1],k[2],k[3],g)
n=B.r.aB(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.C(r,q,n[p]))}return new A.bV(B.ab,n,null,A.b0(k))},
jO(a,b){var s,r,q,p=a.e,o=A.t(p).i("N<1,2>"),n=A.J(new A.N(p,o),o.i("p.E"))
B.a.Y(n,new A.vA())
p=$.o.j()
o=a.a
s=A.B(o)
r=a.c
q=A.B(r)
p.setAttribute("data-renderer-light-selection","points="+new A.H(o,s.i("j(1)").a(new A.vB()),s.i("H<1,j>")).W(0,":")+";spots="+new A.H(r,q.i("j(1)").a(new A.vC()),q.i("H<1,j>")).W(0,":"))
q=A.B(n)
p.setAttribute("data-renderer-light-rejections",new A.H(n,q.i("e(1)").a(new A.vD()),q.i("H<1,e>")).W(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
c5(a){var s,r=this.e
r===$&&A.r()
r=r.gaR()
if(r.x)A.f(A.i("resource library is disposed"))
a.A()
s=r.b.a.aG(a,null)
r.r.k(0,s)
this.rx.l(0,a.a,a)
return s},
$iBd:1}
A.vN.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:34}
A.vQ.prototype={
$1(a){var s,r
A.h(a)
s=this.c.a.f
r=s.length
if(r>a){if(!(a>=0))return A.d(s,a)
s=s[a]}else s="DefaultMaterial"
return this.a.l0(this.b.a,s)},
$S:172}
A.vR.prototype={
$1(a){return this.a},
$S:173}
A.vG.prototype={
$1(a){return J.aa(t.of.a(a).h(0,"attached"),!0)},
$S:174}
A.vO.prototype={
$1(a){var s=0,r=A.aK(t.N),q,p
var $async$$1=A.aL(function(b,c){if(b===1)return A.aH(c,r)
for(;;)switch(s){case 0:s=3
return A.a5(A.av(A.a(A.a(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.R(p.ok))throw A.b(A.i("package manifest HTTP "+A.y(A.nt(p,"status",t.S))+": "+a))
s=4
return A.a5(A.av(A.a(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$$1,r)},
$S:175}
A.vP.prototype={
$2(a,b){var s=0,r=A.aK(t.uo),q,p,o
var $async$$2=A.aL(function(c,d){if(c===1)return A.aH(d,r)
for(;;)switch(s){case 0:s=3
return A.a5(A.av(A.a(A.a(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.R(p.ok))throw A.b(A.i("package payload HTTP "+A.y(A.nt(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a5(A.av(A.a(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.B1(d,0,null)
s=1
break
case 1:return A.aI(q,r)}})
return A.aJ($async$$2,r)},
$S:176}
A.vT.prototype={
$1(a){var s=this.a.dy.h(0,A.u(a))
s.toString
return s},
$S:27}
A.vU.prototype={
$1(a){var s,r,q,p
A.u(a)
s=this.a
r=s.k3.h(0,a)
q=r==null
p=q?null:s.k2.h(0,r)
if(q||p==null)throw A.b(A.i("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:27}
A.vS.prototype={
$0(){var s,r=this.a.ce,q=this.b
if(!(q<r.length))return A.d(r,q)
s=r[q]
r=s.a
return new A.hx("warm:"+q,new A.C(r.a,r.b,r.c),s.b,B.b.q((s.c-this.c.r)/60,0,1))},
$S:177}
A.vL.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.r()
if(r.b.p(0,a)){this.b.K(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.l(0,b[o],p+s.w.a.b+" does not install it")},
$S:178}
A.vM.prototype={
$1(a){var s=a.c
return!this.a.ku(new A.k(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:179}
A.vH.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.c_(s,a.b,r)},
$S:180}
A.vI.prototype={
$2(a,b){var s=t.h
return B.c.H(s.a(a).a.a,s.a(b).a.a)},
$S:181}
A.vJ.prototype={
$1(a){t.h.a(a)
return a.a.a+"="+a.b.b},
$S:33}
A.vK.prototype={
$1(a){var s=t.h.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:33}
A.vE.prototype={
$2(a,b){var s=t.wl
return B.c.H(s.a(a).a.a,s.a(b).a.a)},
$S:183}
A.vF.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:184}
A.vA.prototype={
$2(a,b){var s=t.ou
return B.d.H(s.a(a).a,s.a(b).a)},
$S:185}
A.vB.prototype={
$1(a){return t.J.a(a).a},
$S:32}
A.vC.prototype={
$1(a){return t.J.a(a).a},
$S:32}
A.vD.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:187}
A.mM.prototype={}
A.jq.prototype={
hA(a,b){var s=this,r=b==null?s.d:b
return new A.jq(s.a,s.b,s.c,r,a)},
ma(a){return this.hA(a,null)}}
A.ve.prototype={
gav(){return this.b},
gaW(){return this.c}}
A.wp.prototype={
$2(a,b){var s
A.zP(a,A.y(b))
switch(a){case"master":s=$.bm
if(s!=null)s.iQ(b)
break
case"voice":s=$.bm
if(s!=null)s.iS(b)
break
case"effects":s=$.bm
if(s!=null)s.iP(b)
break
case"ambience":s=$.bm
if(s!=null)s.iO(b)
break
case"music":s=$.bm
if(s!=null)s.iR(b)
break}},
$S:48}
A.wq.prototype={
$1(a){var s
A.zP("muted",""+a)
s=$.bm
if(s!=null)s.f_(a)},
$S:12}
A.wr.prototype={
$1(a){var s
A.zP("mono",""+a)
s=$.bm
if(s!=null)s.dA(a)},
$S:12}
A.wx.prototype={
$2(a,b){A.zQ(a,A.y(b))
A.Cd(a,b)},
$S:48}
A.wy.prototype={
$1(a){var s="high-contrast"
A.zQ(s,""+a)
A.wa(s,a)},
$S:12}
A.wz.prototype={
$1(a){var s="strong-highlights"
A.zQ(s,""+a)
A.wa(s,a)},
$S:12}
A.wA.prototype={
$1(a){$.dr().on(a)
A.xg()
A.Cf()},
$S:189}
A.wB.prototype={
$0(){var s=$.dr()
s.a=A.dQ(null,1)
s.b=A.dQ(null,1)
A.xg()
A.Cf()},
$S:0}
A.wC.prototype={
$0(){A.e4(this.a)},
$S:0}
A.wD.prototype={
$0(){this.a.ah()},
$S:0}
A.wE.prototype={
$0(){A.e4(this.a)},
$S:0}
A.ws.prototype={
$0(){A.hV(this.a)},
$S:0}
A.wt.prototype={
$1(a){$.jS=a
A.CJ()
A.zh()},
$S:190}
A.wu.prototype={
$1(a){var s=$.cC()
$.zv=a
if(!s.Q&&a.Q){$.bw.j().a=1
$.bw.j().io(7)
$.az.j().i0()
$.cB().O(0)}A.CL()
A.Ce()},
$S:191}
A.wv.prototype={
$1(a){$.dm=a
A.zD()
A.nd()},
$S:192}
A.ww.prototype={
$0(){$.dm=B.aA
$.fC.j().eW($.dm)
A.zD()
A.nd()},
$S:0}
A.wl.prototype={
$1(a){var s,r=A.Dk(a,A.Cv())
$.jU=A.h8($.k4().b,a)
s=r.b
$.eJ.j().cB(a,$.k4().b,s)
$.o.j().setAttribute("data-graphics-fallback",B.a.W(s,"|"))
$.Cw=A.nf(a,r,$.Cw)},
$S:193}
A.wm.prototype={
$0(){this.a.$1(B.jj)},
$S:0}
A.wn.prototype={
$0(){A.e4($.eJ.j())},
$S:0}
A.wo.prototype={
$0(){A.e4($.eJ.j())},
$S:0}
A.wh.prototype={
$1(a){},
$S:19}
A.wi.prototype={
$1(a){var s,r
$.zr=a
$.am.j().eX(a.r)
s=$.am.j()
r=s.ch
r.a=a.f
r.eD()
s.b0()
A.CK()},
$S:194}
A.wj.prototype={
$0(){A.e4($.jL.j())},
$S:0}
A.wk.prototype={
$0(){A.e4($.jL.j())},
$S:0}
A.x7.prototype={
$0(){$.xv=A.R(this.a.matches)
$.zV=A.R(this.b.matches)
A.nd()},
$S:0}
A.x5.prototype={
$1(a){return this.a.$0()},
$S:2}
A.x6.prototype={
$1(a){return this.a.$0()},
$S:2}
A.xX.prototype={
$1(a){var s
try{A.AD(this.b,a,this.a)
return!0}catch(s){if(A.ah(s) instanceof A.A)return!1
else throw s}},
$S:195}
A.xY.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jR.j()
break
case 5:p=$.fC.j()
break
case 1:p=$.eJ.j()
break
case 4:p=$.hK.j()
break
case 2:p=$.jN.j()
break
case 3:p=$.jL.j()
break}s=p
r=null
switch(o){case 0:r=B.m9
break
case 5:r=B.me
break
case 1:r=B.ma
break
case 4:r=B.md
break
case 2:r=B.mb
break
case 3:r=B.mc
break}q=r
p=B.dt.h(0,a)
p.toString
A.zC(s,q,p)},
$S:196}
A.xZ.prototype={
$0(){A.e4($.hM.j())},
$S:0}
A.y9.prototype={
$0(){return A.e4($.hM.j())},
$S:0}
A.yj.prototype={
$0(){$.cy.j().ah()},
$S:0}
A.yk.prototype={
$0(){$.cy.j().ah()},
$S:0}
A.yl.prototype={
$0(){A.zC($.hM.j(),B.dC,"pause.settings")},
$S:0}
A.ym.prototype={
$0(){$.cy.j().ah()
A.hU($.jO.j())},
$S:0}
A.yn.prototype={
$0(){A.k0("saved")},
$S:0}
A.yo.prototype={
$0(){$.cy.j().ah()
A.hU($.jO.j())},
$S:0}
A.yp.prototype={
$0(){A.zC($.nb.j(),B.mf,"pause.credits")},
$S:0}
A.y_.prototype={
$0(){return A.hV($.cy.j())},
$S:0}
A.y0.prototype={
$1(a){var s=$.U.j(),r=s.e.oQ(a),q=r?B.iS:B.iT
s.fW(q,r?a:null)
return r},
$S:22}
A.y1.prototype={
$0(){return A.hV($.jP.j())},
$S:0}
A.y2.prototype={
$2(a,b){var s,r
if($.az.j().y){s=$.aP.j().gcd()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.Hu(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.dc,a)
A.Ht(B.dc[a])}}},
$S:197}
A.y3.prototype={
$2(a,b){var s,r,q,p,o,n
if($.U.j().gag().a===21){A.CQ(!1)
return}s=$.S.j().y.b
$.U.j().j9(a,b,$.ag)
if(b===B.bV&&$.ag===$.S.j().r){A.Iq()
A.fG("woke in the living room")}r=$.S.j().y.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cv()
if(typeof n!=="number")return A.xS(n)
if(!(o<n))break
if($.S.b===$.S)A.f(A.a9(""))
p=B.a.h(B.V,q).b
o=$.aB
if(o!=null){n=$.S.b
if(n===$.S)A.f(A.a9(""))
o.dm(n,p)}o=q
if(typeof o!=="number")return o.a2()
q=o+1}A.k0("saved after sleep")},
$S:198}
A.y4.prototype={
$0(){return A.hV($.fE.j())},
$S:0}
A.y5.prototype={
$0(){return A.hV($.jO.j())},
$S:0}
A.y6.prototype={
$0(){return A.e4($.nb.j())},
$S:0}
A.y7.prototype={
$0(){A.hV($.jM.j())},
$S:0}
A.y8.prototype={
$0(){A.hV($.jM.j())},
$S:0}
A.ya.prototype={
$1(a){return A.CP()},
$S:2}
A.yb.prototype={
$1(a){if(A.u(A.a(v.G.document).visibilityState)==="hidden")A.It()},
$S:1}
A.yc.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a(a)
if(A.u(l.code)==="CapsLock"&&!A.R(l.repeat)){l.preventDefault()
p=$.c2()
o=!p.a
p.a=o
if(o)A.qt(A.a(v.G.document),"exitPointerLock",t.X)
else $.am.j().dr($.o.j())
return}p=$.c2()
if(p.a&&!A.R(l.repeat)){if(A.u(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.am.j().dr($.o.j())
return}if(A.u(l.code)==="KeyC"){l.preventDefault()
A.wG()
return}if(A.u(l.code)==="KeyI"){l.preventDefault()
A.x3()
return}if(A.u(l.code)==="ArrowUp"||A.u(l.code)==="KeyW"){l.preventDefault()
n=p.gbq().length
if(n>0)p.c=B.d.R(p.c-1+n,n)
o=$.eO
if(o!=null){p=p.gbq().length
o.a.dz(-1,p)}return}if(A.u(l.code)==="ArrowDown"||A.u(l.code)==="KeyS"){l.preventDefault()
n=p.gbq().length
if(n>0)p.c=B.d.R(p.c+1,n)
o=$.eO
if(o!=null){p=p.gbq().length
o.a.dz(1,p)}return}if(A.u(l.code)==="ArrowLeft"||A.u(l.code)==="KeyA"){l.preventDefault()
p.mK()
return}if(A.u(l.code)==="ArrowRight"||A.u(l.code)==="KeyD"){l.preventDefault()
p.nl()
return}if(A.u(l.code)==="KeyQ"){l.preventDefault()
m=p.gbL()
p=m==null?null:m.Q===B.y
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.q(m.y-m.w*0.2,m.f,m.r)
return}if(A.u(l.code)==="KeyE"){l.preventDefault()
m=p.gbL()
p=m==null?null:m.Q===B.y
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.q(m.y+m.w*0.2,m.f,m.r)
return}if(A.u(l.code)==="KeyR"){l.preventDefault()
if(A.R(l.shiftKey))p.om()
else p.oo()
return}if(B.c.U(A.u(l.code),"Digit")||B.c.U(A.u(l.code),"Numpad")){o=A.u(l.code)
o=A.yA(o,"Digit","")
s=A.yA(o,"Numpad","")
r=A.dL(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.az.j().y&&!A.R(l.repeat))if($.cB().ng(A.u(l.code))){l.preventDefault()
return}if(A.u(l.code)==="Escape"&&!A.R(l.repeat)){p=$.bl
if(p==null)A.hU($.cy.j())
else p.ah()
return}q=$.bl==null&&!p.a
if(!A.R(l.repeat)&&q)$.fD.j().hW(new A.lI(A.u(l.code),!0,1))
if(A.u(l.code)==="KeyP"&&!A.R(l.repeat)&&$.DN())$.hW=!$.hW
if((A.u(l.code)==="KeyJ"||A.u(l.code)==="Tab")&&!A.R(l.repeat)&&!$.az.j().y){l.preventDefault()
A.k1($.jP.j())}if(A.u(l.code)==="KeyL"&&!A.R(l.repeat)&&!$.az.j().y)A.k1($.fE.j())
if(A.u(l.code)==="KeyH"&&!A.R(l.repeat)&&!$.az.j().y)A.k1($.jO.j())
if(A.u(l.code)==="KeyO"&&!A.R(l.repeat)&&!$.az.j().y)A.k1($.jQ.j())
if(A.u(l.code)==="KeyK"&&!A.R(l.repeat)&&q)A.k0("saved")},
$S:1}
A.yd.prototype={
$1(a){var s=A.a(a)
if($.bl==null)$.fD.j().hW(new A.lI(A.u(s.code),!1,0))},
$S:1}
A.ye.prototype={
$1(a){return A.Ch()},
$S:2}
A.yf.prototype={
$1(a){return A.Ch()},
$S:2}
A.yg.prototype={
$1(a){return A.HW(A.a(a))},
$S:2}
A.yh.prototype={
$1(a){var s=A.a(a)
$.o.j().focus()
if($.az.j().y){s.preventDefault()
A.HV(s)
return}$.am.j().dr($.o.j())},
$S:1}
A.yi.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.c2()
if(!o.a||$.eO==null)return
p.preventDefault()
s=o.gbq()
r=A.a1(p.deltaY)>0?1:-1
o=$.eO
o.toString
q=J.cD(s)
o.a.dz(A.h(r),q)},
$S:1}
A.x8.prototype={
$1(a){var s=A.u(A.a(a).message)
A.xk(s,null)},
$S:1}
A.x9.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.xk("unhandled rejection: "+A.y(s==null?A.u(a.type):s),null)},
$S:1}
A.xf.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:35}
A.xq.prototype={
$0(){this.a.className=""},
$S:14}
A.xy.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:42}
A.xc.prototype={
$2(a,b){var s=t.q
return B.c.H(s.a(a).a,s.a(b).a)},
$S:26}
A.xm.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.xh.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.xj.prototype={
$1(a){return t.o.a(a).w},
$S:17}
A.xD.prototype={
$1(a){return t.o.a(a).w},
$S:17}
A.xx.prototype={
$2(a,b){return A.aA(a)+t.cZ.a(b).d},
$S:199};(function aliases(){var s=J.es.prototype
s.jk=s.t
s=A.p.prototype
s.jj=s.dv
s=A.iI.prototype
s.jl=s.bS})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"I2","F7",43)
r(J.w.prototype,"gaC","p",8)
q(A,"Ih","Fu",38)
r(A.aW.prototype,"gaC","p",8)
r(A.h6.prototype,"gaC","p",8)
p(A.co.prototype,"gm5","L",8)
o(A,"Jf","Gx",18)
o(A,"Jg","Gy",18)
o(A,"Jh","Gz",18)
q(A,"D5","IT",0)
r(A.cw.prototype,"gaC","p",8)
r(A.hA.prototype,"gaC","p",8)
o(A,"Js","HD",13)
p(A.lg.prototype,"gou","ov",103)
var l
p(l=A.m_.prototype,"goq","or",10)
p(l,"goz","oA",10)
p(l,"goB","oC",10)
p(l,"gos","ot",10)
p(l,"gox","oy",10)
q(A,"Da","GD",201)
q(A,"L1","yX",34)
p(A.d8.prototype,"gao","is",66)
n(A.jG.prototype,"gmQ","a_",0)
p(l=A.l1.prototype,"gkE","kF",2)
p(l,"gkG","kH",2)
p(l,"gkK","kL",2)
p(l,"gkO","kP",2)
p(l,"gkQ","kR",2)
p(l,"gkM","kN",2)
p(l,"gkI","kJ",2)
p(l,"gkS","kT",2)
o(A,"JQ","Cm",13)
o(A,"JU","Cl",13)
o(A,"JI","F3",202)
o(A,"JJ","F5",203)
o(A,"JZ","EY",204)
m(A,"K7",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["BE",function(){return A.BE(0,0,0)}],205,0)
p(A.iI.prototype,"gkU","kV",2)
p(A.hs.prototype,"gks","kt",144)
p(A.mc.prototype,"gnv","nw",29)
o(A,"Dj","Iw",206)
q(A,"Di","HA",0)
o(A,"JM","Hv",137)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.L,null)
q(A.L,[A.yO,J.l3,A.iU,J.eU,A.p,A.i8,A.at,A.a3,A.tk,A.al,A.iy,A.V,A.ij,A.ig,A.j9,A.aD,A.ex,A.bj,A.hf,A.fW,A.ek,A.dY,A.dd,A.ut,A.rm,A.ih,A.jx,A.af,A.qN,A.bU,A.ae,A.cL,A.it,A.mI,A.mo,A.j0,A.n_,A.vf,A.w1,A.cR,A.mB,A.n2,A.vY,A.mp,A.cf,A.bn,A.mt,A.dX,A.as,A.mq,A.mY,A.jJ,A.jh,A.mH,A.fy,A.jk,A.jC,A.n3,A.el,A.ku,A.vy,A.w5,A.w2,A.eZ,A.dw,A.my,A.lr,A.iZ,A.vg,A.A,A.P,A.ax,A.n0,A.ue,A.bE,A.jE,A.ux,A.mV,A.rl,A.mE,A.eG,A.e9,A.m6,A.r4,A.lh,A.rf,A.r6,A.r9,A.f8,A.rX,A.dN,A.ly,A.oH,A.oI,A.oK,A.oJ,A.lx,A.fS,A.kN,A.kO,A.dO,A.kY,A.b9,A.kD,A.lw,A.bO,A.cN,A.bb,A.j5,A.bV,A.kx,A.rn,A.lz,A.lK,A.bf,A.lY,A.iR,A.aX,A.pn,A.d9,A.c7,A.qV,A.qT,A.lg,A.m2,A.r0,A.i7,A.r3,A.r5,A.hh,A.lE,A.c_,A.cb,A.uo,A.um,A.dk,A.m_,A.uc,A.hx,A.ct,A.uQ,A.dH,A.kL,A.kM,A.kP,A.pm,A.hC,A.aw,A.bz,A.aO,A.Q,A.ia,A.lC,A.be,A.rZ,A.ba,A.t0,A.t_,A.mD,A.iQ,A.lJ,A.vh,A.n1,A.vX,A.mO,A.mA,A.mS,A.mL,A.vt,A.bW,A.bS,A.b2,A.p_,A.oZ,A.fM,A.fa,A.po,A.d8,A.lF,A.hy,A.C,A.nR,A.fO,A.nQ,A.i6,A.mr,A.km,A.ms,A.kz,A.mv,A.id,A.mw,A.kE,A.mx,A.kX,A.mC,A.iA,A.mJ,A.fQ,A.kn,A.yY,A.iK,A.mP,A.lD,A.mQ,A.fk,A.lS,A.mT,A.lT,A.mU,A.lV,A.mX,A.lU,A.mW,A.m7,A.n4,A.mg,A.n6,A.n5,A.iS,A.mk,A.n9,A.oF,A.kT,A.kV,A.im,A.iW,A.x,A.kA,A.hj,A.pK,A.eH,A.db,A.h2,A.v7,A.e0,A.jI,A.jH,A.n8,A.n7,A.w7,A.v3,A.v6,A.kC,A.kg,A.hG,A.jG,A.nX,A.nC,A.i4,A.nT,A.yK,A.o4,A.nZ,A.ja,A.fR,A.oC,A.pl,A.l1,A.qk,A.qo,A.b7,A.qJ,A.qG,A.p0,A.qP,A.cs,A.k,A.uW,A.cu,A.eB,A.uU,A.uS,A.lW,A.ml,A.ov,A.kF,A.p9,A.h3,A.bH,A.lv,A.rQ,A.hq,A.td,A.fh,A.kR,A.py,A.px,A.ki,A.op,A.eb,A.ed,A.ef,A.ec,A.ee,A.ko,A.li,A.cU,A.mm,A.iq,A.q2,A.a7,A.kI,A.kZ,A.q3,A.kJ,A.dj,A.kK,A.eF,A.eo,A.ta,A.eE,A.q0,A.pd,A.u7,A.q5,A.d6,A.cJ,A.l4,A.qr,A.qp,A.qq,A.dK,A.q9,A.fs,A.c9,A.lc,A.fl,A.fg,A.qc,A.d5,A.q1,A.f4,A.qb,A.d4,A.qg,A.iJ,A.ix,A.bA,A.uP,A.lb,A.c4,A.qv,A.i5,A.os,A.iL,A.rJ,A.iM,A.lA,A.rD,A.rC,A.rE,A.rF,A.rG,A.rH,A.hk,A.rI,A.rK,A.rN,A.rO,A.iw,A.rW,A.t8,A.lI,A.t7,A.t9,A.tX,A.cr,A.tZ,A.ht,A.p1,A.v8,A.ft,A.ks,A.qi,A.qm,A.tb,A.dc,A.tc,A.kS,A.fq,A.v0,A.j8,A.eA,A.uR,A.v_,A.fr,A.fp,A.mh,A.hB,A.v2,A.pv,A.kQ,A.rg,A.d_,A.bC,A.rA,A.ug,A.fo,A.fn,A.j7,A.mf,A.fe,A.di,A.uf,A.hr,A.lP,A.lM,A.lN,A.lO,A.uj,A.k8,A.yJ,A.e8,A.nM,A.nS,A.ea,A.ou,A.bo,A.oD,A.fY,A.du,A.kt,A.iI,A.p4,A.pE,A.pG,A.h5,A.dG,A.pX,A.pN,A.pO,A.cj,A.pY,A.da,A.fT,A.rp,A.dJ,A.eu,A.c8,A.ru,A.rU,A.bg,A.tR,A.tV,A.cE,A.nJ,A.mc,A.uO,A.dV,A.bF,A.ce,A.c1,A.me,A.ka,A.mb,A.hE,A.mN,A.mM,A.jq,A.ve])
q(J.l3,[J.l6,J.is,J.iu,J.ha,J.hb,J.h9,J.er])
q(J.iu,[J.es,J.w,A.et,A.iE])
q(J.es,[J.lu,J.fm,J.dI])
r(J.l5,A.iU)
r(J.qu,J.w)
q(J.h9,[J.ir,J.l7])
q(A.p,[A.eD,A.T,A.cM,A.I,A.ii,A.dW,A.fx,A.mn,A.mZ,A.bI])
q(A.eD,[A.eY,A.jK])
r(A.jf,A.eY)
r(A.jd,A.jK)
r(A.b8,A.jd)
q(A.at,[A.hc,A.dS,A.l8,A.m1,A.lL,A.mz,A.iv,A.kd,A.cF,A.j3,A.m0,A.hu,A.kr])
r(A.hz,A.a3)
r(A.dv,A.hz)
q(A.T,[A.a_,A.ac,A.ap,A.N,A.fw,A.jj])
q(A.a_,[A.j1,A.H,A.bM,A.mG])
r(A.dx,A.cM)
q(A.bj,[A.dZ,A.e_,A.hD])
q(A.dZ,[A.a8,A.fB,A.jr,A.js])
q(A.e_,[A.aG,A.bk,A.jt,A.ju])
r(A.jv,A.hD)
r(A.hI,A.hf)
r(A.ey,A.hI)
r(A.ib,A.ey)
q(A.ek,[A.kq,A.kp,A.lZ,A.xT,A.xV,A.vb,A.va,A.wc,A.ps,A.vr,A.vu,A.qQ,A.vw,A.yr,A.ys,A.xK,A.tW,A.r7,A.rc,A.rd,A.rb,A.xa,A.xu,A.xd,A.xs,A.rY,A.uC,A.qY,A.qZ,A.r_,A.ro,A.qW,A.qX,A.r1,A.xL,A.up,A.uq,A.us,A.ph,A.pf,A.pg,A.rr,A.rs,A.t5,A.t4,A.t3,A.t2,A.t1,A.t6,A.wX,A.wY,A.tf,A.tg,A.yz,A.yx,A.pp,A.qS,A.xH,A.pL,A.pM,A.v4,A.v5,A.o6,A.oa,A.o9,A.o8,A.ob,A.nY,A.nD,A.nE,A.nF,A.nV,A.nW,A.nU,A.ql,A.qH,A.uX,A.uY,A.uT,A.uV,A.pc,A.pz,A.pB,A.pC,A.pD,A.oc,A.od,A.oe,A.of,A.og,A.oi,A.oj,A.ok,A.ol,A.om,A.on,A.oo,A.oh,A.xG,A.oq,A.or,A.xe,A.xB,A.oG,A.pe,A.q4,A.yC,A.x1,A.x0,A.w9,A.xp,A.qh,A.u8,A.q8,A.q6,A.xA,A.qd,A.qf,A.xz,A.p8,A.qM,A.qC,A.xo,A.rL,A.rM,A.rP,A.tY,A.u5,A.u_,A.u0,A.u3,A.u4,A.u2,A.u1,A.ud,A.p2,A.p3,A.v1,A.pu,A.rB,A.ti,A.tj,A.uk,A.ul,A.nB,A.nz,A.o1,A.o2,A.ox,A.oB,A.oA,A.oz,A.oT,A.oS,A.oU,A.oV,A.oW,A.oR,A.oM,A.oN,A.oY,A.p5,A.p6,A.p7,A.pb,A.pF,A.pH,A.pI,A.pV,A.pR,A.pS,A.pT,A.pU,A.pQ,A.pP,A.q_,A.qx,A.qy,A.qz,A.rv,A.rw,A.rx,A.tM,A.tN,A.tE,A.tF,A.tD,A.tG,A.to,A.tH,A.tI,A.tJ,A.tC,A.tu,A.tv,A.tw,A.tx,A.ty,A.tz,A.tA,A.tB,A.tt,A.tp,A.tq,A.tr,A.ts,A.tL,A.tK,A.tT,A.ub,A.nL,A.uM,A.uL,A.uN,A.uH,A.uK,A.uF,A.uE,A.xO,A.uD,A.nG,A.nH,A.nI,A.vQ,A.vR,A.vG,A.vO,A.vT,A.vU,A.vM,A.vH,A.vJ,A.vK,A.vF,A.vB,A.vC,A.vD,A.wq,A.wr,A.wy,A.wz,A.wA,A.wt,A.wu,A.wv,A.wl,A.wh,A.wi,A.x5,A.x6,A.xX,A.xY,A.y0,A.ya,A.yb,A.yc,A.yd,A.ye,A.yf,A.yg,A.yh,A.yi,A.x8,A.x9,A.xf,A.xy,A.xm,A.xh,A.xj,A.xD])
q(A.kq,[A.oL,A.qD,A.xU,A.wd,A.xE,A.pt,A.vs,A.qO,A.qR,A.vz,A.uz,A.uy,A.r8,A.ra,A.re,A.yD,A.yE,A.yt,A.qU,A.r2,A.un,A.ur,A.yu,A.pi,A.th,A.yy,A.yw,A.o7,A.o_,A.o0,A.qI,A.pA,A.xt,A.qa,A.qL,A.u6,A.qn,A.pw,A.ri,A.rj,A.rk,A.uh,A.ui,A.oE,A.qA,A.qB,A.nK,A.uI,A.uG,A.vP,A.vL,A.vI,A.vE,A.vA,A.wp,A.wx,A.y2,A.y3,A.xc,A.xx])
q(A.fW,[A.a4,A.d2])
q(A.dd,[A.fX,A.jw,A.jD])
q(A.fX,[A.aW,A.h6])
q(A.kp,[A.rR,A.vc,A.vd,A.vZ,A.pq,A.vi,A.vn,A.vm,A.vk,A.vj,A.vq,A.vp,A.vo,A.vW,A.xn,A.w4,A.w3,A.wW,A.wP,A.wQ,A.wV,A.wK,A.wM,A.wL,A.wU,A.wI,A.wJ,A.wR,A.wS,A.wT,A.wO,A.wN,A.x_,A.xI,A.q7,A.qe,A.x2,A.nA,A.nO,A.nN,A.o3,A.oP,A.oQ,A.oO,A.pJ,A.pW,A.rz,A.tm,A.tn,A.tO,A.tP,A.tQ,A.tU,A.ua,A.uJ,A.vN,A.vS,A.wB,A.wC,A.wD,A.wE,A.ws,A.ww,A.wm,A.wn,A.wo,A.wj,A.wk,A.x7,A.xZ,A.y9,A.yj,A.yk,A.yl,A.ym,A.yn,A.yo,A.yp,A.y_,A.y1,A.y4,A.y5,A.y6,A.y7,A.y8,A.xq])
r(A.iG,A.dS)
q(A.lZ,[A.lX,A.fP])
q(A.af,[A.co,A.jg,A.mF])
r(A.f5,A.co)
r(A.hi,A.et)
q(A.iE,[A.lj,A.bq])
q(A.bq,[A.jm,A.jo])
r(A.jn,A.jm)
r(A.iC,A.jn)
r(A.jp,A.jo)
r(A.iD,A.jp)
q(A.iC,[A.iB,A.lk])
q(A.iD,[A.ll,A.lm,A.ln,A.lo,A.lp,A.f9,A.iF])
r(A.hH,A.mz)
r(A.jb,A.mt)
r(A.mR,A.jJ)
r(A.ji,A.jg)
r(A.cw,A.jw)
r(A.hA,A.jD)
q(A.el,[A.kG,A.kj,A.l9])
q(A.kG,[A.kb,A.m5])
q(A.ku,[A.w_,A.ot,A.qF,A.qE,A.uB,A.uA])
r(A.kc,A.w_)
r(A.la,A.iv)
r(A.vx,A.vy)
q(A.cF,[A.hm,A.l0])
r(A.mu,A.jE)
q(A.my,[A.kB,A.fc,A.h_,A.fV,A.f3,A.fN,A.iz,A.cS,A.hp,A.h1,A.kl,A.i9,A.h0,A.ff,A.f7,A.cQ,A.dR,A.bh,A.f0,A.cn,A.iT,A.d3,A.ho,A.iY,A.h4,A.kf,A.jc,A.je,A.kU,A.ik,A.io,A.kW,A.f2,A.il,A.fj,A.dg,A.fU,A.h7,A.hF,A.kk,A.eX,A.kv,A.ky,A.bs,A.kh,A.cl,A.dz,A.f_,A.dy,A.en,A.em,A.ep,A.lt,A.lH,A.hn,A.bY,A.iX,A.de,A.bZ,A.bD,A.l2,A.fu,A.cq,A.ew,A.eC,A.eV,A.cY,A.cG,A.cZ,A.dt,A.ds,A.eh,A.ei,A.eg,A.eW,A.dC,A.d0,A.d1,A.dD,A.dB,A.dE,A.cm,A.dA,A.cH,A.k9,A.bB,A.cp,A.ev,A.cP,A.bX,A.bN,A.iV,A.bT,A.cc,A.cd,A.ez,A.dh])
q(A.dO,[A.bL,A.bt,A.c6,A.ls,A.cI])
r(A.te,A.mS)
r(A.mi,A.n7)
r(A.jl,A.dj)
q(A.iI,[A.ic,A.oX,A.pa,A.ip,A.pZ,A.qw,A.ry,A.tl,A.hs,A.u9])
q(A.uO,[A.md,A.mK,A.bv,A.ma,A.m8,A.j6,A.m9])
s(A.hz,A.ex)
s(A.jK,A.a3)
s(A.jm,A.a3)
s(A.jn,A.aD)
s(A.jo,A.a3)
s(A.jp,A.aD)
s(A.hI,A.jC)
s(A.jD,A.n3)
s(A.mS,A.vt)
s(A.n7,A.w7)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",z:"double",by:"num",e:"String",l:"bool",ax:"Null",K:"List",L:"Object",X:"Map",aj:"JSObject"},mangledNames:{},types:["~()","ax(L?)","~(L?)","l(e)","l(z)","dF()","l(@)","0&()","l(L?)","l(cr)","dF(bt?)","l(aw)","~(l)","@(@)","ax()","l(fe)","j(c4,c4)","l(fs)","~(~())","ax(@)","~(@)","e(e9)","l(j)","l(bb)","l(Q)","l(c4)","j(P<e,e>,P<e,e>)","e(e)","l(bg)","l(c1)","~(aj)","~(L?,L?)","j(b7)","e(cb)","l()","l(cm)","~(e,e)","l(cH)","j()","l(P<e,K<e>>)","l(cY)","@(e)","l(bC)","j(@,@)","l(bY)","P<e,e>(@,@)","l(eF)","e(ed)","~(e,z)","e(eb)","e(L?)","@()","dF(e{fallback:e?})","bO?()","K<bO>()","fS()","z()","fQ()","l(P<e,aX>)","aX(P<e,aX>)","aX(aX,aX)","j(b2<bW>,b2<bW>)","ca(b2<bW>)","j(b2<bS>,b2<bS>)","ca(b2<bS>)","fa(z,z,z,z)","C(C)","~(fk)","fk()","X<e,e>(X<e,e>,e)","z(z,hG)","aS<ax>(P<e,e>)","l(K<e>)","j(e,e)","j(c9,c9)","0&(e,j?)","+effectiveScore,light,score(z,b7,z)(b7)","j(+effectiveScore,light,score(z,b7,z),+effectiveScore,light,score(z,b7,z))","l(cl)","L?(L?)","e(j)","ax(~())","l(fg)","eb(L?)","ed(L?)","ec(L?)","ee(L?)","iS(bL)","cI(j,j,e?)","~(@,@)","e(ec)","e(ee)","e(ef)","j(j,c0)","en(e)","ef(L?)","l(fl)","e(j,a7,a7,a7)","j(dj,dj)","j(ab,ab)","l(eE)","j(j)","l(c9)","cN(c6)","l(d6)","e(aw)","j(dK,dK)","l(d5)","P<e,e>(e,@)","e?(e)","aS<c0>(e)","@(@,e)","j(cr,cr)","j(+influence,source(z,ct),+influence,source(z,ct))","z(z)","l(bZ)","l(bD)","fq()","z(e)","j(j,+(bt,dk))","X<e,@>(f8)","j(P<e,d_>,P<e,d_>)","l(c0?)","P<j,@>(j,fo)","P<j,@>(j,fn)","bt(j,j,e?)","l(P<@,@>)","P<e,e>(P<@,@>)","l?(L?)","ax(L,df)","e()","0^(p<0^>,L?)<L?>","z(z,e)","j(c_,c_)","K<e>(K<e>)","~(z)","l(cb)","~(j)","ax(aj)","0^(e,p<0^>)<D>","j(j,+(bL,bV))","X<e,L?>(dJ)","e(bB)","l(bB)","l(bN)","bL(j,j,e?)","l(dC)","l(d0)","l(d1)","l(dD)","l(dB)","l(dE)","l(dA)","c6(j,j,e?)","l(cG)","l(cZ)","l(dt)","l(ds)","K<aj>()","e(cE)","j(cE,cE)","ax(@,df)","j(c1,c1)","K<di>()","l(di)","l(P<e,e>)","j(ce,ce)","X<e,@>(c1)","l(cd)","l(cc)","l(bT)","~(L,df)","c6(j)","hh(hk)","l(X<e,L>)","aS<e>(e)","aS<c0>(e,e)","hx()","~(e,p<e>)","l(fO)","c_(P<e,bt>)","j(cb,cb)","j(d9,d9)","j(c7,c7)","e(c7)","j(P<j,e>,P<j,e>)","l(c7)","e(P<j,e>)","~(j,@)","~(bN)","~(ea)","~(h5)","~(e8)","~(dG)","~(fY)","l(hq)","~(bX)","~(j,e)","~(bZ,bD)","z(z,eA)","j(+influence,light(z,bO),+influence,light(z,bO))","hC()","d6(L?)","cJ(L?)","d5(L?)","hB({materialDissolution01:z,snowDepthM:z,waterFilmDepthM:z})","~(by)","l(cJ)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a8&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fB&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jr&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.js&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aG&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bk&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jt&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.ju&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jv&&A.JO(a,b.a)}}
A.GV(v.typeUniverse,JSON.parse('{"dI":"es","lu":"es","fm":"es","Kj":"et","w":{"K":["1"],"T":["1"],"aj":[],"p":["1"]},"l6":{"l":[],"an":[]},"is":{"ax":[],"an":[]},"iu":{"aj":[]},"es":{"aj":[]},"l5":{"iU":[]},"qu":{"w":["1"],"K":["1"],"T":["1"],"aj":[],"p":["1"]},"eU":{"ai":["1"]},"h9":{"z":[],"by":[],"bp":["by"]},"ir":{"z":[],"j":[],"by":[],"bp":["by"],"an":[]},"l7":{"z":[],"by":[],"bp":["by"],"an":[]},"er":{"e":[],"bp":["e"],"rt":[],"an":[]},"eD":{"p":["2"]},"i8":{"ai":["2"]},"eY":{"eD":["1","2"],"p":["2"],"p.E":"2"},"jf":{"eY":["1","2"],"eD":["1","2"],"T":["2"],"p":["2"],"p.E":"2"},"jd":{"a3":["2"],"K":["2"],"eD":["1","2"],"T":["2"],"p":["2"]},"b8":{"jd":["1","2"],"a3":["2"],"K":["2"],"eD":["1","2"],"T":["2"],"p":["2"],"p.E":"2","a3.E":"2"},"hc":{"at":[]},"dv":{"a3":["j"],"ex":["j"],"K":["j"],"T":["j"],"p":["j"],"a3.E":"j","ex.E":"j"},"T":{"p":["1"]},"a_":{"T":["1"],"p":["1"]},"j1":{"a_":["1"],"T":["1"],"p":["1"],"p.E":"1","a_.E":"1"},"al":{"ai":["1"]},"cM":{"p":["2"],"p.E":"2"},"dx":{"cM":["1","2"],"T":["2"],"p":["2"],"p.E":"2"},"iy":{"ai":["2"]},"H":{"a_":["2"],"T":["2"],"p":["2"],"p.E":"2","a_.E":"2"},"I":{"p":["1"],"p.E":"1"},"V":{"ai":["1"]},"ii":{"p":["2"],"p.E":"2"},"ij":{"ai":["2"]},"ig":{"ai":["1"]},"dW":{"p":["1"],"p.E":"1"},"j9":{"ai":["1"]},"hz":{"a3":["1"],"ex":["1"],"K":["1"],"T":["1"],"p":["1"]},"bM":{"a_":["1"],"T":["1"],"p":["1"],"p.E":"1","a_.E":"1"},"a8":{"dZ":[],"bj":[]},"fB":{"dZ":[],"bj":[]},"jr":{"dZ":[],"bj":[]},"js":{"dZ":[],"bj":[]},"aG":{"e_":[],"bj":[]},"bk":{"e_":[],"bj":[]},"jt":{"e_":[],"bj":[]},"ju":{"e_":[],"bj":[]},"jv":{"hD":[],"bj":[]},"ib":{"ey":["1","2"],"hI":["1","2"],"hf":["1","2"],"jC":["1","2"],"X":["1","2"]},"fW":{"X":["1","2"]},"a4":{"fW":["1","2"],"X":["1","2"]},"fx":{"p":["1"],"p.E":"1"},"dY":{"ai":["1"]},"d2":{"fW":["1","2"],"X":["1","2"]},"fX":{"dd":["1"],"dP":["1"],"T":["1"],"p":["1"]},"aW":{"fX":["1"],"dd":["1"],"dP":["1"],"T":["1"],"p":["1"]},"h6":{"fX":["1"],"dd":["1"],"dP":["1"],"T":["1"],"p":["1"]},"iG":{"dS":[],"at":[]},"l8":{"at":[]},"m1":{"at":[]},"jx":{"df":[]},"ek":{"f1":[]},"kp":{"f1":[]},"kq":{"f1":[]},"lZ":{"f1":[]},"lX":{"f1":[]},"fP":{"f1":[]},"lL":{"at":[]},"co":{"af":["1","2"],"yQ":["1","2"],"X":["1","2"],"af.K":"1","af.V":"2"},"ac":{"T":["1"],"p":["1"],"p.E":"1"},"bU":{"ai":["1"]},"ap":{"T":["1"],"p":["1"],"p.E":"1"},"ae":{"ai":["1"]},"N":{"T":["P<1,2>"],"p":["P<1,2>"],"p.E":"P<1,2>"},"cL":{"ai":["P<1,2>"]},"f5":{"co":["1","2"],"af":["1","2"],"yQ":["1","2"],"X":["1","2"],"af.K":"1","af.V":"2"},"dZ":{"bj":[]},"e_":{"bj":[]},"hD":{"bj":[]},"it":{"FE":[],"rt":[]},"mI":{"iO":[],"hg":[]},"mn":{"p":["iO"],"p.E":"iO"},"mo":{"ai":["iO"]},"j0":{"hg":[]},"mZ":{"p":["hg"],"p.E":"hg"},"n_":{"ai":["hg"]},"hi":{"et":[],"aj":[],"an":[]},"f9":{"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"et":{"aj":[],"an":[]},"iE":{"aj":[]},"lj":{"aj":[],"an":[]},"bq":{"c5":["1"],"aj":[]},"iC":{"a3":["z"],"bq":["z"],"K":["z"],"c5":["z"],"T":["z"],"aj":[],"p":["z"],"aD":["z"]},"iD":{"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"]},"iB":{"pj":[],"a3":["z"],"bq":["z"],"K":["z"],"c5":["z"],"T":["z"],"aj":[],"p":["z"],"aD":["z"],"an":[],"a3.E":"z","aD.E":"z"},"lk":{"pk":[],"a3":["z"],"bq":["z"],"K":["z"],"c5":["z"],"T":["z"],"aj":[],"p":["z"],"aD":["z"],"an":[],"a3.E":"z","aD.E":"z"},"ll":{"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"lm":{"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"ln":{"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"lo":{"uv":[],"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"lp":{"uw":[],"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"iF":{"c0":[],"a3":["j"],"bq":["j"],"K":["j"],"c5":["j"],"T":["j"],"aj":[],"p":["j"],"aD":["j"],"an":[],"a3.E":"j","aD.E":"j"},"mz":{"at":[]},"hH":{"dS":[],"at":[]},"cf":{"ai":["1"]},"bI":{"p":["1"],"p.E":"1"},"bn":{"at":[]},"jb":{"mt":["1"]},"as":{"aS":["1"]},"jJ":{"BN":[]},"mR":{"jJ":[],"BN":[]},"jg":{"af":["1","2"],"X":["1","2"]},"ji":{"jg":["1","2"],"af":["1","2"],"X":["1","2"],"af.K":"1","af.V":"2"},"fw":{"T":["1"],"p":["1"],"p.E":"1"},"jh":{"ai":["1"]},"cw":{"dd":["1"],"AU":["1"],"dP":["1"],"T":["1"],"p":["1"]},"fy":{"ai":["1"]},"a3":{"K":["1"],"T":["1"],"p":["1"]},"af":{"X":["1","2"]},"jj":{"T":["2"],"p":["2"],"p.E":"2"},"jk":{"ai":["2"]},"hf":{"X":["1","2"]},"ey":{"hI":["1","2"],"hf":["1","2"],"jC":["1","2"],"X":["1","2"]},"dd":{"dP":["1"],"T":["1"],"p":["1"]},"jw":{"dd":["1"],"dP":["1"],"T":["1"],"p":["1"]},"hA":{"dd":["1"],"n3":["1"],"dP":["1"],"T":["1"],"p":["1"]},"mF":{"af":["e","@"],"X":["e","@"],"af.K":"e","af.V":"@"},"mG":{"a_":["e"],"T":["e"],"p":["e"],"p.E":"e","a_.E":"e"},"kb":{"el":["e","K<j>"]},"kj":{"el":["K<j>","e"]},"kG":{"el":["e","K<j>"]},"iv":{"at":[]},"la":{"at":[]},"l9":{"el":["L?","e"]},"m5":{"el":["e","K<j>"]},"eZ":{"bp":["eZ"]},"z":{"by":[],"bp":["by"]},"dw":{"bp":["dw"]},"j":{"by":[],"bp":["by"]},"K":{"T":["1"],"p":["1"]},"by":{"bp":["by"]},"iO":{"hg":[]},"dP":{"T":["1"],"p":["1"]},"e":{"bp":["e"],"rt":[]},"my":{"D":[]},"kd":{"at":[]},"dS":{"at":[]},"cF":{"at":[]},"hm":{"at":[]},"l0":{"at":[]},"j3":{"at":[]},"m0":{"at":[]},"hu":{"at":[]},"kr":{"at":[]},"lr":{"at":[]},"iZ":{"at":[]},"n0":{"df":[]},"bE":{"G_":[]},"jE":{"m3":[]},"mV":{"m3":[]},"mu":{"m3":[]},"mE":{"yZ":[]},"eG":{"yZ":[]},"kB":{"D":[]},"fc":{"D":[]},"h_":{"D":[]},"fV":{"D":[]},"bL":{"dO":[]},"bt":{"dO":[]},"c6":{"dO":[]},"cI":{"dO":[]},"ls":{"dO":[]},"f3":{"D":[]},"fN":{"D":[]},"iz":{"D":[]},"cS":{"D":[]},"kx":{"FM":[]},"hp":{"D":[]},"h1":{"D":[]},"kl":{"D":[]},"i9":{"D":[]},"h0":{"D":[]},"ff":{"D":[]},"f7":{"D":[]},"cQ":{"D":[]},"dR":{"D":[]},"bh":{"D":[]},"f0":{"D":[]},"kP":{"FF":[]},"cn":{"D":[]},"iT":{"D":[]},"d3":{"D":[]},"ho":{"D":[]},"iQ":{"FI":[]},"mD":{"ca":[]},"lJ":{"FK":[]},"n1":{"ca":[]},"mO":{"FH":[]},"mA":{"EN":[]},"iY":{"D":[]},"bW":{"bp":["bW"]},"bS":{"bp":["bS"]},"h4":{"D":[]},"kf":{"D":[]},"jc":{"D":[]},"i6":{"aq":[]},"mr":{"ab":[]},"km":{"aq":[]},"ms":{"ab":[]},"kz":{"aq":[]},"mv":{"ab":[]},"je":{"D":[]},"id":{"aq":[]},"mw":{"ab":[]},"kE":{"aq":[]},"mx":{"ab":[]},"kX":{"aq":[]},"mC":{"ab":[]},"iA":{"aq":[]},"mJ":{"ab":[]},"kn":{"FG":[]},"iK":{"aq":[]},"mP":{"ab":[]},"lD":{"aq":[]},"mQ":{"ab":[]},"lS":{"aq":[]},"mT":{"ab":[]},"lT":{"aq":[]},"mU":{"ab":[]},"lV":{"aq":[]},"mX":{"ab":[]},"lU":{"aq":[]},"mW":{"ab":[]},"m7":{"aq":[]},"n4":{"ab":[]},"mg":{"aq":[]},"n6":{"ab":[]},"n5":{"ab":[]},"mk":{"aq":[]},"n9":{"ab":[]},"kU":{"D":[]},"ik":{"D":[]},"io":{"D":[]},"kW":{"D":[]},"f2":{"D":[]},"il":{"D":[]},"fj":{"D":[]},"dg":{"D":[]},"fU":{"D":[]},"kA":{"Ex":[]},"h7":{"D":[]},"hF":{"D":[]},"bs":{"D":[]},"kk":{"D":[]},"eX":{"D":[]},"kv":{"D":[]},"ky":{"D":[]},"e0":{"dF":[]},"mi":{"EU":[]},"kh":{"D":[]},"cl":{"D":[]},"dz":{"D":[]},"jl":{"dj":[]},"f_":{"D":[]},"dy":{"D":[]},"en":{"D":[]},"em":{"D":[]},"ep":{"D":[]},"lt":{"D":[]},"lH":{"D":[]},"hn":{"D":[]},"bY":{"D":[]},"de":{"D":[]},"iX":{"D":[]},"bZ":{"D":[]},"bD":{"D":[]},"l2":{"D":[]},"fu":{"D":[]},"cq":{"D":[]},"ew":{"D":[]},"eC":{"D":[]},"eV":{"D":[]},"cY":{"D":[]},"cG":{"D":[]},"cZ":{"D":[]},"dt":{"D":[]},"ds":{"D":[]},"eh":{"D":[]},"ei":{"D":[]},"eW":{"D":[]},"eg":{"D":[]},"dC":{"D":[]},"d0":{"D":[]},"d1":{"D":[]},"dD":{"D":[]},"dB":{"D":[]},"dE":{"D":[]},"cm":{"D":[]},"dA":{"D":[]},"cH":{"D":[]},"k9":{"D":[]},"bB":{"D":[]},"cp":{"D":[]},"ev":{"D":[]},"cP":{"D":[]},"bX":{"D":[]},"bN":{"D":[]},"iV":{"D":[]},"bT":{"D":[]},"cc":{"D":[]},"cd":{"D":[]},"ez":{"D":[]},"dh":{"D":[]},"mN":{"Bd":[]},"F2":{"K":["j"],"T":["j"],"p":["j"]},"c0":{"K":["j"],"T":["j"],"p":["j"]},"G2":{"K":["j"],"T":["j"],"p":["j"]},"F0":{"K":["j"],"T":["j"],"p":["j"]},"uv":{"K":["j"],"T":["j"],"p":["j"]},"F1":{"K":["j"],"T":["j"],"p":["j"]},"uw":{"K":["j"],"T":["j"],"p":["j"]},"pj":{"K":["z"],"T":["z"],"p":["z"]},"pk":{"K":["z"],"T":["z"],"p":["z"]}}'))
A.GU(v.typeUniverse,JSON.parse('{"hz":1,"jK":2,"bq":1,"jw":1,"jD":1,"ku":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",p:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a2
return{mq:s("cY"),dx:s("i4"),bC:s("cE"),zU:s("e9"),v:s("bn"),iF:s("kg"),ul:s("ds"),EL:s("cZ"),xs:s("cG"),gc:s("dt"),t3:s("ki"),mD:s("eb"),lT:s("ec"),bJ:s("ed"),gI:s("ee"),ya:s("ef"),z3:s("bS"),Bu:s("fQ"),ml:s("i7"),J:s("b7"),rO:s("fT"),sU:s("dv"),hO:s("bp<@>"),CH:s("ia"),w:s("a4<e,e>"),I:s("a4<e,j>"),M:s("aW<e>"),f7:s("eZ"),fP:s("bT"),yb:s("dw"),he:s("T<@>"),yW:s("cl"),g:s("c4"),Ct:s("D"),yt:s("at"),hl:s("a7"),B:s("pj"),cE:s("pk"),pH:s("aX"),Fr:s("d_"),BO:s("f1"),ls:s("aS<ax>"),xJ:s("aS<e>(e)"),zL:s("aS<c0>(e)"),tX:s("aS<c0>(e,e)"),vS:s("dA"),aJ:s("dB"),x:s("cm"),bK:s("dC"),gm:s("dD"),dn:s("d0"),mx:s("dE"),j_:s("d1"),EJ:s("d2<bX,e>"),_:s("dF"),Eb:s("cH"),qX:s("ep"),mF:s("d5"),iO:s("cI"),oW:s("d6"),fl:s("cJ"),FA:s("p<ia>"),CB:s("p<d9>"),Eh:s("p<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),yT:s("p<e>"),x6:s("p<c_>"),A1:s("p<fp>"),oJ:s("p<z>"),tY:s("p<@>"),iC:s("p<j>"),Fg:s("w<cE>"),t9:s("w<e9>"),AO:s("w<i7>"),jC:s("w<b7>"),km:s("w<fT>"),sa:s("w<cj>"),ns:s("w<kF>"),U:s("w<c4>"),uH:s("w<kJ>"),Dl:s("w<a7>"),iJ:s("w<aS<~>>"),pC:s("w<kR>"),C1:s("w<dF>"),ka:s("w<bz>"),Fm:s("w<f4>"),op:s("w<d4>"),hr:s("w<dH>"),s3:s("w<cI>"),W:s("w<aj>"),Bv:s("w<lb>"),yH:s("w<lc>"),Bq:s("w<P<e,e>>"),rq:s("w<X<e,L>>"),A7:s("w<X<e,e>>"),cs:s("w<X<e,@>>"),bk:s("w<X<e,L?>>"),a6:s("w<d9>"),p0:s("w<c7>"),d:s("w<bL>"),w4:s("w<f8>"),pq:s("w<aw>"),bA:s("w<dJ>"),xz:s("w<bC>"),s0:s("w<fa>"),hc:s("w<da>"),ea:s("w<dK>"),Fk:s("w<lw>"),qP:s("w<c9>"),d8:s("w<iL>"),Fa:s("w<iM>"),kv:s("w<fe>"),nR:s("w<+(e,K<c9>)>"),kd:s("w<+(e,e)>"),c2:s("w<+(e,C)>"),rh:s("w<+influence,light(z,bO)>"),z4:s("w<+influence,source(z,ct)>"),wt:s("w<+(j,e)>"),ff:s("w<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),e_:s("w<aq>"),u:s("w<ab>"),Ft:s("w<iQ>"),C:s("w<Q>"),h1:s("w<bf>"),s2:s("w<ca>"),eY:s("w<fg>"),xB:s("w<dc>"),rn:s("w<lM>"),gg:s("w<lN>"),tS:s("w<hr>"),yv:s("w<lO>"),wM:s("w<lP>"),hT:s("w<cr>"),El:s("w<ht>"),AM:s("w<b2<bS>>"),fs:s("w<b2<bW>>"),cv:s("w<bO>"),DZ:s("w<fl>"),s:s("w<e>"),r8:s("w<c_>"),fa:s("w<cb>"),E7:s("w<hx>"),k:s("w<C>"),fi:s("w<k>"),v5:s("w<bb>"),ld:s("w<j7>"),Dc:s("w<dV>"),Fi:s("w<ce>"),jV:s("w<di>"),xL:s("w<ct>"),su:s("w<eA>"),wb:s("w<eB>"),eQ:s("w<cu>"),uI:s("w<fp>"),yo:s("w<fq>"),nm:s("w<fs>"),uk:s("w<bH>"),wf:s("w<jl>"),il:s("w<eF>"),l5:s("w<eE>"),ow:s("w<mL>"),j5:s("w<mM>"),pv:s("w<hE>"),Fy:s("w<eH<cN>>"),EM:s("w<eH<bV>>"),w_:s("w<eH<bf>>"),f2:s("w<eH<dk>>"),n:s("w<z>"),zz:s("w<@>"),t:s("w<j>"),Cf:s("w<L?>"),AN:s("w<by>"),D:s("is"),m:s("aj"),ud:s("dI"),yO:s("c5<@>"),AQ:s("K<b7>"),hk:s("K<c4>"),b:s("K<bz>"),xp:s("K<cI>"),nx:s("K<aj>"),rW:s("K<X<e,e>>"),qr:s("K<bL>"),R:s("K<aw>"),fG:s("K<da>"),Es:s("K<c9>"),DX:s("K<+(e,e)>"),pL:s("K<+(j,e)>"),bE:s("K<bf>"),fx:s("K<dc>"),yu:s("K<cr>"),a:s("K<e>"),uh:s("K<j7>"),D0:s("K<dV>"),cf:s("K<ce>"),p7:s("K<di>"),dd:s("K<z>"),j:s("K<@>"),L:s("K<j>"),ik:s("K<aj?>"),vX:s("K<L?>"),m2:s("ix"),h6:s("P<e,aX>"),gJ:s("P<e,d_>"),q:s("P<e,e>"),no:s("P<e,bt>"),AC:s("P<@,@>"),ou:s("P<j,e>"),pr:s("P<j,@>"),yx:s("P<e,K<e>>"),mf:s("X<e,dF>"),vD:s("X<e,c6>"),of:s("X<e,L>"),ap:s("X<e,aw>"),G:s("X<e,e>"),qH:s("X<e,dR>"),m0:s("X<e,l>"),gG:s("X<e,z>"),P:s("X<e,@>"),f:s("X<@,@>"),eU:s("X<j,e>"),pG:s("X<j,fn>"),tQ:s("X<j,fo>"),Bx:s("X<e,K<e>>"),oZ:s("X<e,L?>"),q1:s("X<cd,K<ce>>"),ee:s("X<j,X<e,e>>"),dH:s("H<j,e>"),jT:s("H<e,e?>"),w1:s("cN"),pw:s("c6"),jt:s("d9"),wl:s("c7"),kc:s("bL"),aw:s("f8"),mL:s("hh"),rV:s("hi"),mV:s("f9"),c:s("ax"),K:s("L"),fH:s("L(hk)"),BB:s("bW"),A:s("aw"),oP:s("dJ"),wJ:s("bB"),E4:s("bC"),A_:s("dK"),e:s("c9"),DL:s("iJ"),AB:s("ly"),yi:s("hj"),rx:s("iL"),c_:s("iM"),zC:s("lA"),xK:s("dN"),Y:s("fe"),iM:s("Kk"),ep:s("+()"),k0:s("+(bL,bV)"),ut:s("+(bt,dk)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bO)"),bG:s("+influence,source(z,ct)"),tK:s("+effectiveScore,light,score(z,b7,z)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)"),ez:s("iO"),wZ:s("ab"),lg:s("iR"),tc:s("db<cI,bf>"),ja:s("db<c6,cN>"),wm:s("db<bL,bV>"),qq:s("db<bt,dk>"),j2:s("Q"),m3:s("bf"),yz:s("ca"),z_:s("fg"),F3:s("dc"),Dm:s("hr"),Q:s("dP<e>"),oG:s("dP<j>"),en:s("bN"),gl:s("bg"),gn:s("bY"),r:s("cr"),u5:s("bD"),is:s("bZ"),ho:s("ht"),EH:s("b2<bS>"),E0:s("b2<bW>"),l:s("df"),w8:s("fl"),qL:s("bs"),N:s("e"),dc:s("e(j)"),Aj:s("bt"),jP:s("c_"),h:s("cb"),bp:s("dR"),sg:s("an"),bs:s("dS"),ys:s("uv"),Dd:s("uw"),uo:s("c0"),qF:s("fm"),hL:s("ey<e,e>"),qt:s("m2"),eP:s("m3"),zo:s("m6"),cV:s("C"),a7:s("k"),qY:s("bb"),T:s("c1"),gM:s("cc"),hF:s("cd"),vw:s("fn"),BX:s("fo"),aA:s("dV"),AP:s("ce"),sy:s("mf"),bB:s("bv"),aS:s("di"),cZ:s("eA"),EI:s("eB"),uz:s("cu"),qR:s("fp"),fu:s("fq"),xe:s("hB"),fw:s("I<bT>"),vL:s("I<cl>"),vK:s("I<cm>"),Fj:s("I<bD>"),rZ:s("I<bZ>"),vY:s("I<e>"),g2:s("I<cc>"),ni:s("I<cd>"),rt:s("V<bN>"),xG:s("V<bg>"),o:s("fs"),hR:s("as<@>"),BT:s("ji<L?,L?>"),Ez:s("dj"),rL:s("hC"),xT:s("eF"),wU:s("eE"),la:s("mK"),qS:s("jq"),jS:s("hG"),EF:s("bI<+(e,bt)>"),Br:s("bI<ca>"),oe:s("bI<hr>"),a_:s("jG"),V:s("jH"),p:s("jI"),y:s("l"),Bs:s("l()"),C3:s("l(fO)"),kr:s("l(bT)"),e2:s("l(cl)"),rg:s("l(cm)"),bl:s("l(L)"),pz:s("l(bN)"),aV:s("l(bg)"),y2:s("l(bD)"),ty:s("l(bZ)"),Ag:s("l(e)"),da:s("l(cc)"),u_:s("l(cd)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(L)"),nW:s("@(L,df)"),S:s("j"),eZ:s("aS<ax>?"),r9:s("w<L?>?"),gt:s("aj?"),rK:s("K<@>?"),yq:s("X<@,@>?"),jd:s("X<e,K<e>>?"),X:s("L?"),dM:s("Bd?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("c0?"),F:s("dX<@,@>?"),Af:s("mH?"),k7:s("l?"),wK:s("l(hq)?"),u6:s("z?"),lo:s("j?"),s7:s("by?"),Z:s("~()?"),Cv:s("~(e8)?"),kC:s("~(ea)?"),pf:s("~(fY)?"),hq:s("~(h5)?"),CA:s("~(dG)?"),hQ:s("~(bX)?"),Ci:s("~(bN)?"),nf:s("~(bZ,bD)?"),DI:s("~(e,z)?"),xl:s("~(l)?"),vR:s("~(j)?"),dt:s("~(j,e)?"),E:s("by"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.jI=J.l3.prototype
B.a=J.w.prototype
B.d=J.ir.prototype
B.b=J.h9.prototype
B.c=J.er.prototype
B.jK=J.dI.prototype
B.jL=J.iu.prototype
B.r=A.iB.prototype
B.a1=A.iF.prototype
B.dO=J.lu.prototype
B.c5=J.fm.prototype
B.ae=new A.cY(1,"standard")
B.R=new A.k8(B.ae)
B.ce=new A.cY(0,"concise")
B.cf=new A.cY(2,"verbose")
B.aA=new A.e8(null,null,null,null,null)
B.pE=new A.k9(0,"none")
B.af=new A.fN(0,"opaque")
B.b_=new A.fN(1,"masked")
B.aB=new A.fN(2,"blended")
B.ey=new A.kc(!1,127)
B.ez=new A.kc(!0,127)
B.eA=new A.kf(1,"camera")
B.eB=new A.kh(4,"ambience")
B.cj=new A.cG(3,"mono")
B.b0=new A.dt(0,"full")
B.ci=new A.cG(0,"auto")
B.ch=new A.cZ(1,"standard")
B.cg=new A.ds(0,"defaultMix")
B.b1=new A.ea(B.ci,B.ch,B.b0,B.cg)
B.eI=new A.eV(0,"broadcast")
B.eJ=new A.eV(1,"visitor")
B.eK=new A.eV(2,"aftermath")
B.eL=new A.eV(3,"ending")
B.aT=new A.lH(0,"pixeldart")
B.eM=new A.i5(B.aT,!0,!1,null,!1,null)
B.eN=new A.i5(B.aT,!1,!1,null,!1,null)
B.cl=new A.eg(1,"capturing")
B.eO=new A.du(B.cl,null)
B.cm=new A.eg(3,"rejected")
B.b2=new A.du(B.cm,null)
B.cn=new A.eg(4,"applied")
B.ck=new A.du(B.cn,null)
B.co=new A.eg(5,"cancelled")
B.eP=new A.du(B.co,null)
B.b3=new A.eg(2,"conflict")
B.aC=new A.kk(0,"add")
B.eT=new A.eX(0,"zero")
B.ag=new A.eX(1,"one")
B.S=new A.kl(0,"alpha")
B.I=new A.eh(1,"button")
B.o=new A.ei(0,"normal")
B.eW=new A.bo("settings.back",B.I,"back","back to pause menu",B.o)
B.aD=new A.eh(0,"heading")
B.eX=new A.bo("settings.heading",B.aD,"Settings",null,B.o)
B.eY=new A.bo("settings.controls.heading",B.aD,"Controls",null,B.o)
B.eZ=new A.bo("settings.controls.back",B.I,"back","back to settings categories",B.o)
B.f_=new A.bo("pause.heading",B.aD,"Paused",null,B.o)
B.f0=new A.eh(3,"slider")
B.f1=new A.eh(4,"toggle")
B.cp=new A.eh(5,"keybind")
B.aE=new A.ei(5,"disabled")
B.f2=new A.ei(6,"error")
B.f3=new A.ei(7,"destructive")
B.cq=new A.ei(8,"remapping")
B.cr=new A.i4()
B.f4=new A.kb()
B.pF=new A.ot()
B.f5=new A.kj()
B.cs=new A.oF()
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
B.fd=new A.r6()
B.fe=new A.lr()
B.pH=new A.rD()
B.ff=new A.rE()
B.cv=new A.rG()
B.fg=new A.rK()
B.fh=new A.rO()
B.fi=new A.dc()
B.aU=new A.cq(1,"gradeLUT")
B.fj=new A.dc()
B.fk=new A.tb()
B.fl=new A.td()
B.h=new A.tk()
B.cw=new A.m5()
B.cx=new A.uB()
B.pG=new A.kx()
B.fm=new A.v6()
B.b4=new A.mE()
B.B=new A.mR()
B.aF=new A.n0()
B.fn=new A.fR(1.3089969389957472,0.1,60)
B.fo=new A.fR(1.0471975511965976,0.1,60)
B.fp=new A.fR(0.8726646259971648,0.08,45)
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
B.aG=new A.kv(1,"back")
B.aH=new A.ky(0,"less")
B.fB=new A.h0(0,"off")
B.cA=new A.h0(1,"errorsOnly")
B.fC=new A.h0(2,"full")
B.cB=new A.kB(2,"error")
B.aI=new A.bT(0,"open")
B.cC=new A.bT(1,"chain")
B.cD=new A.bT(2,"throughDoor")
B.cE=new A.bT(3,"letterbox")
B.ah=new A.bT(4,"ignore")
B.U=new A.h1(0,"opaque")
B.fD=new A.h1(1,"masked")
B.aJ=new A.h1(2,"blended")
B.cF=new A.h2(!1,B.aH,!1,!0,B.ag,B.ag,B.aC,!1,B.aG,!0,!1,!0,!0,!0,!0,!1)
B.fE=new A.h2(!0,B.aH,!1,!0,B.ag,B.ag,B.aC,!0,B.aG,!0,!1,!0,!0,!0,!0,!1)
B.eU=new A.eX(2,"srcAlpha")
B.eV=new A.eX(3,"oneMinusSrcAlpha")
B.fF=new A.h2(!0,B.aH,!1,!0,B.eU,B.eV,B.aC,!0,B.aG,!0,!1,!0,!0,!0,!0,!1)
B.fG=new A.dw(0)
B.fH=new A.dw(22e4)
B.fI=new A.dw(24e5)
B.cG=new A.cl(0,"compliance")
B.fJ=new A.h3(B.cG)
B.cH=new A.cl(1,"rupture")
B.fK=new A.h3(B.cH)
B.cI=new A.cl(2,"synchronisation")
B.fL=new A.h3(B.cI)
B.cJ=new A.f_(0,"front")
B.fM=new A.f_(1,"rearService")
B.fN=new A.f_(2,"sideBoundary")
B.fO=new A.f_(3,"roofline")
B.z=new A.em(0,"north")
B.ai=new A.em(1,"east")
B.q=new A.em(2,"south")
B.aj=new A.em(3,"west")
B.fP=new A.en(0,"ground")
B.fQ=new A.en(1,"first")
B.fR=new A.en(2,"hidden")
B.fS=new A.dy(0,"mantle")
B.fT=new A.dy(1,"portal")
B.fV=new A.dy(3,"inventory")
B.cK=new A.dy(4,"aftermath")
B.fU=new A.dy(2,"window")
B.fX=new A.eo(B.fU,"shutter","the shutter")
B.fW=new A.dy(5,"none")
B.fY=new A.eo(B.fW,null,null)
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
B.K=new A.b9(0,0,0)
B.bk=new A.b9(1,1,1)
B.ky=s([],t.Fk)
B.bu=s([],t.cv)
B.kz=s([],t.xL)
B.kA=s([],t.E7)
B.iK=new A.kN(B.K,B.K,0,1,null,null,B.bk,0.02,0,0.7,0.35,1,12,1,1,1,1,1,1,1,0.003,B.K,0,0,B.bk,0,null,B.ky,B.bu,B.kz,B.kA)
B.cO=new A.aX(0,0,0)
B.iL=new A.f0(0,"idle")
B.ak=new A.f0(1,"active")
B.iM=new A.f0(2,"ended")
B.iN=new A.f0(3,"aborted")
B.b8=new A.h4(0,"outside")
B.iO=new A.h4(1,"intersects")
B.iP=new A.h4(2,"inside")
B.iQ=new A.dz(0,"timeAdvanced")
B.iR=new A.dz(1,"dayEndReached")
B.iS=new A.dz(2,"journalWritten")
B.iT=new A.dz(3,"journalRejected")
B.iU=new A.dz(4,"slept")
B.iV=new A.dz(5,"complianceFloorTripped")
B.b9=new A.dA(0,"twentyFourHour")
B.cP=new A.dA(1,"twelveHour")
B.cQ=new A.dB(0,"important")
B.cR=new A.dB(1,"always")
B.ba=new A.cm(0,"pauseAndMute")
B.cS=new A.dC(0,"press")
B.cT=new A.dC(1,"hold")
B.cU=new A.dD(0,"compact")
B.cV=new A.dD(1,"spacious")
B.cW=new A.d0(1,"standard")
B.cX=new A.d0(2,"detailed")
B.cY=new A.dE(0,"toast")
B.cZ=new A.dE(1,"detailed")
B.d_=new A.d1(1,"readable")
B.j0=new A.ik(0,"vertex")
B.d0=new A.ik(1,"indices")
B.d1=new A.kU(0,"staticDraw")
B.j=new A.il(0,"ready")
B.a_=new A.il(1,"lost")
B.al=new A.h7(0,"prepared")
B.j1=new A.h7(1,"committed")
B.j2=new A.h7(2,"rolledBack")
B.j3=new A.f2(0,"color")
B.d2=new A.f2(1,"colorAndGlow")
B.j4=new A.f2(2,"colorDepthGlow")
B.bb=new A.f2(3,"depthOnly")
B.bc=new A.io(1,"linear")
B.d3=new A.kW(0,"clampToEdge")
B.j5=new A.kV(1,1,1,!1,B.bc,B.bc,B.d3,1)
B.aK=new A.io(2,"linearMipmapLinear")
B.j6=new A.d3(0,"beforeShadow")
B.j7=new A.d3(2,"beforeDepth")
B.bd=new A.d3(3,"afterDepth")
B.d4=new A.d3(4,"beforeWorld")
B.j8=new A.d3(5,"afterWorld")
B.J=new A.d3(6,"afterResolve")
B.j9=new A.d3(9,"beforePresent")
B.d5=new A.cn(0,"readBeforeWrite")
B.ja=new A.cn(1,"duplicateWriter")
B.jb=new A.cn(2,"sampledMultisampledAttachment")
B.be=new A.cn(3,"invalidResolve")
B.jc=new A.cn(4,"formatOrSizeMismatch")
B.jd=new A.cn(5,"unversionedReadWrite")
B.je=new A.cn(6,"invalidHistoryRead")
B.jf=new A.cn(7,"dependencyCycle")
B.jg=new A.cn(8,"missingCapability")
B.bf=new A.cH(0,"high")
B.bg=new A.cH(1,"standard")
B.bh=new A.dG(1,B.bg,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.jj=new A.dG(1,B.bf,"1.00",!1,"display","msaa4","high","srgb","errors","profile",!1)
B.aL=new A.ep(0,"player")
B.bi=new A.ep(1,"inserted")
B.d6=new A.ep(2,"warden")
B.d7=new A.f3(0,"wrongKind")
B.d8=new A.f3(1,"staleGeneration")
B.jk=new A.f3(2,"doubleRelease")
B.aM=new A.f3(3,"releasedResource")
B.jn=new A.d4("kitchen-range","settle")
B.jo=new A.d4("front-door-knocker","knock")
B.jp=new A.d4("cellar-drain","drip")
B.jq=new A.d4("bedroom-timber","creak")
B.jr=new A.d4("kitchen-pipe","tick")
B.js=new A.d4("bathroom-cistern","settle")
B.jt=new A.d4("landing-window","wind")
B.jH=new A.l2(1,"visitor")
B.jJ=new A.l4("none",0,0,0,0,0,!1)
B.jM=new A.qE(null)
B.jN=new A.qF(null)
B.bj=new A.iw(!1,0,0.85,0.92,1,0,1,0,0)
B.jO=new A.b9(0.008,0.012,0.024)
B.d9=s([0,2,2,3],t.t)
B.bl=s([B.cQ,B.cR],A.a2("w<dB>"))
B.jP=s(["volumetric_light_enable","volumetric_shaft_intensity","volumetric_precision","volumetric_dust_density","volumetric_scattering"],t.s)
B.jQ=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bm=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.H=new A.bN(0,"audio")
B.X=new A.iV(0,"level")
B.nE=new A.bg("master","Master",B.H,B.X,1,0,1,"audio")
B.nJ=new A.bg("voice","Visitor voice",B.H,B.X,1,0,1,"audio")
B.nA=new A.bg("effects","Effects",B.H,B.X,1,0,1,"audio")
B.nB=new A.bg("ambience","House ambience",B.H,B.X,1,0,1,"audio")
B.nF=new A.bg("music","Music",B.H,B.X,1,0,1,"audio")
B.aV=new A.bN(1,"display")
B.nI=new A.bg("brightness","Display brightness",B.aV,B.X,1,0.6,1.4,"display")
B.ar=new A.iV(1,"toggle")
B.nD=new A.bg("muted","Mute house audio",B.H,B.ar,!1,null,null,"audio")
B.a9=new A.bN(2,"accessibility")
B.nG=new A.bg("mono","Mono-compatible mix",B.a9,B.ar,!1,null,null,"audio")
B.nC=new A.bg("high-contrast","High-contrast interface",B.a9,B.ar,!1,null,null,"display")
B.nH=new A.bg("strong-highlights","Strong focus highlights",B.a9,B.ar,!1,null,null,"display")
B.E=s([B.nE,B.nJ,B.nA,B.nB,B.nF,B.nI,B.nD,B.nG,B.nC,B.nH],A.a2("w<bg>"))
B.C=s(["who","verb","object","place","time"],t.s)
B.jS=s([81,77,83,72],t.t)
B.jT=s(["porcelain-albedo","porcelain-normal","glass"],t.s)
B.eC=new A.ds(1,"strong")
B.bn=s([B.cg,B.eC],A.a2("w<ds>"))
B.eQ=new A.eW(0,"swap")
B.eR=new A.eW(1,"replace")
B.eS=new A.eW(2,"cancel")
B.jU=s([B.eQ,B.eR,B.eS],A.a2("w<eW>"))
B.jV=s([2,5,9,12,16,19],t.t)
B.iW=new A.cm(1,"pauseOnly")
B.iX=new A.cm(2,"continuePlayback")
B.aN=s([B.ba,B.iW,B.iX],A.a2("w<cm>"))
B.jW=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale","uShadowMapTexelSize","uShadowFilterRadius","uShadowBias","uReflectionColor","uReflectionIntensity","uReflectionConfidence","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uSpecularScale","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.jX=s(["uQuantizationBits","uDitherStrength"],t.s)
B.jZ=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.k_=s([B.aI,B.cC,B.cD,B.cE,B.ah],A.a2("w<bT>"))
B.k0=s(["30","60","display"],t.s)
B.k1=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap"],t.s)
B.k2=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.az=new A.cd(0,"full")
B.ca=new A.cd(1,"compressed")
B.cb=new A.cd(2,"off")
B.da=s([B.az,B.ca,B.cb],A.a2("w<cd>"))
B.bo=s([B.b9,B.cP],A.a2("w<dA>"))
B.k3=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection","uView","uInverseProjection","uVolumetricAlbedo","uVolumetricHeightFalloff","uVolumetricDustDensity","uVolumetricJitter","uVolumetricIntensity","uVolumetricSampleCount"],t.s)
B.k4=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.eH=new A.dt(1,"reduced")
B.bp=s([B.b0,B.eH],A.a2("w<dt>"))
B.eD=new A.cZ(0,"wide")
B.eE=new A.cZ(2,"night")
B.bq=s([B.eD,B.ch,B.eE],A.a2("w<cZ>"))
B.k5=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.kg=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.nU=new A.bD(0,"bed")
B.nV=new A.bD(1,"chair")
B.bV=new A.bD(2,"sofa")
B.nW=new A.bD(3,"floor")
B.db=s([B.nU,B.nV,B.bV,B.nW],A.a2("w<bD>"))
B.dc=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.br=s([B.cU,B.cV],A.a2("w<dD>"))
B.nX=new A.bZ(0,"long")
B.e7=new A.bZ(1,"short")
B.dd=s([B.nX,B.e7],A.a2("w<bZ>"))
B.fx=new A.cj("1 - 9","Select Response",!0)
B.ft=new A.cj("SPACE","Silence Ring",!1)
B.ki=s([B.fx,B.ft],t.sa)
B.a3=new A.bX(0,"visual")
B.bH=new A.bX(1,"graphics")
B.a4=new A.bX(2,"gameplay")
B.bI=new A.bX(3,"controls")
B.L=new A.bX(4,"audio")
B.M=new A.bX(5,"accessibility")
B.kj=s([B.a3,B.bH,B.a4,B.bI,B.L,B.M],A.a2("w<bX>"))
B.kk=s(["master","voice","effects","ambience","music"],t.s)
B.bs=s([B.cY,B.cZ],A.a2("w<dE>"))
B.de=s(["res/house/house.json","assets/house/house.json"],t.s)
B.km=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.jh=new A.cH(2,"safe")
B.ji=new A.cH(3,"custom")
B.df=s([B.bf,B.bg,B.jh,B.ji],A.a2("w<cH>"))
B.G=new A.cq(0,"inactive")
B.bS=new A.cq(2,"affineWarp")
B.e_=new A.cq(3,"vertexSnap")
B.bT=new A.cq(4,"tapeGiveup")
B.bU=new A.cq(5,"portalFail")
B.a7=new A.cq(6,"lightsOut")
B.dg=s([B.G,B.aU,B.bS,B.e_,B.bT,B.bU,B.a7],A.a2("w<cq>"))
B.kn=s(["#4b8fc5","#79c8d5","#d7c77a","#df824f","#d43b3b"],t.s)
B.ko=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale"],t.s)
B.kp=s([B.aL,B.bi,B.d6],A.a2("w<ep>"))
B.kq=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.pz=new A.bH("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.py=new A.bH("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.pu=new A.bH("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.pC=new A.bH("ronnie.response","named","A route card has Ronnie written on its back.")
B.pB=new A.bH("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.kr=s([B.pz,B.py,B.pu,B.pC,B.pB],t.uk)
B.pA=new A.bH("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.px=new A.bH("ronnie.response","named","The name Ronnie holds when the room does not.")
B.pv=new A.bH("denise.revision","accepted","One correction remains yours to protect.")
B.ps=new A.bH("attercliffe.plate","kept","A second place survives the room changing around it.")
B.ks=s([B.pA,B.px,B.pv,B.ps],t.uk)
B.ku=s([],t.Fm)
B.kG=s([],t.op)
B.kt=s([],A.a2("w<cJ>"))
B.kF=s([],t.W)
B.kx=s([],t.yH)
B.a0=s([],t.qP)
B.kv=s([],t.u)
B.dl=s([],t.xB)
B.kE=s([],t.tS)
B.kD=s([],t.El)
B.n=s([],t.s)
B.dj=s([],t.ld)
B.dh=s([],t.su)
B.di=s([],t.uI)
B.dk=s([],t.nm)
B.bt=s([],t.n)
B.kw=s([],t.t)
B.bv=s([],t.zz)
B.jm=new A.iq(15,"kitchen",-0.3,0)
B.jl=new A.iq(19,"spare-room",0,0.3)
B.V=s([B.jm,B.jl],A.a2("w<iq>"))
B.kI=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.kJ=s(["high","medium","low"],t.s)
B.eF=new A.cG(1,"headphones")
B.eG=new A.cG(2,"speakers")
B.bw=s([B.ci,B.eF,B.eG,B.cj],A.a2("w<cG>"))
B.kK=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bx=s([B.cS,B.cT],A.a2("w<dC>"))
B.bG=new A.cp(0,"root")
B.dD=new A.bB(0,"pauseMenu")
B.m8=new A.dJ(B.bG,B.dD,null)
B.kL=s([B.m8],t.bA)
B.by=s([B.ce,B.ae,B.cf],A.a2("w<cY>"))
B.iZ=new A.d1(0,"instant")
B.j_=new A.d1(2,"slow")
B.bz=s([B.iZ,B.d_,B.j_],A.a2("w<d1>"))
B.kM=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.kN=s([B.H,B.aV,B.a9],A.a2("w<bN>"))
B.dm=s([B.z,B.ai,B.q,B.aj],A.a2("w<em>"))
B.bW=new A.bs(0,"depthTest")
B.bX=new A.bs(1,"depthFunc")
B.bY=new A.bs(2,"depthWrite")
B.bZ=new A.bs(3,"blendEnable")
B.c_=new A.bs(4,"blendFunc")
B.c0=new A.bs(5,"blendEquation")
B.c1=new A.bs(6,"cullEnable")
B.c2=new A.bs(7,"cullFace")
B.eb=new A.bs(8,"frontFace")
B.od=new A.bs(9,"stencilEnable")
B.e9=new A.bs(10,"colorMask")
B.ea=new A.bs(11,"scissorEnable")
B.kO=s([B.bW,B.bX,B.bY,B.bZ,B.c_,B.c0,B.c1,B.c2,B.eb,B.od,B.e9,B.ea],A.a2("w<bs>"))
B.as=new A.bY(0,"none")
B.nL=new A.bY(1,"albedoOnly")
B.nM=new A.bY(2,"normalsOnly")
B.nN=new A.bY(3,"roughnessOnly")
B.nO=new A.bY(4,"metallicOnly")
B.nP=new A.bY(5,"aoOnly")
B.nQ=new A.bY(6,"wireframeOnly")
B.dn=s([B.as,B.nL,B.nM,B.nN,B.nO,B.nP,B.nQ],A.a2("w<bY>"))
B.kP=s(["off","errors","full"],t.s)
B.kQ=s(["off","fxaa","msaa2","msaa4"],t.s)
B.kR=s(["off","profile","standard","high"],t.s)
B.kS=s(["pbr_roughness","pbr_metallic","pbr_specular","normal_bump_strength","shadow_bias"],t.s)
B.kT=s(["post_bloom"],t.s)
B.kU=s(["post_color_grade"],t.s)
B.kV=s(["post_depth_of_field"],t.s)
B.kW=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.Y=new A.de(0,"pbrMaterial")
B.aa=new A.de(1,"shadowsAndOcclusion")
B.at=new A.de(2,"surfaceWeathering")
B.l=new A.de(3,"atmosphereAndPost")
B.P=new A.de(4,"weatherEffects")
B.nR=new A.de(5,"debugView")
B.am=s([B.Y,B.aa,B.at,B.l,B.P,B.nR],A.a2("w<de>"))
B.kY=s(["shadow_csm_hardness"],t.s)
B.kZ=s(["srgb","linear"],t.s)
B.l_=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.l0=s(["uBloomStrength"],t.s)
B.l1=s(["uLutSize","uStrength"],t.s)
B.l2=s([B.cG,B.cH,B.cI],A.a2("w<cl>"))
B.l3=s(["uTexelSize","uNear","uFar"],t.s)
B.dp=s(["uTexelStep"],t.s)
B.l4=s(["uVolumetricStrength"],t.s)
B.l5=s(["uninitialized"],t.s)
B.iY=new A.d0(0,"minimal")
B.bA=s([B.iY,B.cW,B.cX],A.a2("w<d0>"))
B.pw=new A.bH("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.pr=new A.bH("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.pq=new A.bH("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.pt=new A.bH("ronnie.response","named","The route card gives one name its own line.")
B.l6=s([B.pw,B.pr,B.pq,B.pt],t.uk)
B.ac=new A.cc(0,"waiting")
B.ax=new A.cc(1,"atDoor")
B.ay=new A.cc(2,"consulting")
B.aW=new A.cc(3,"resolved")
B.l7=s([B.ac,B.ax,B.ay,B.aW],A.a2("w<cc>"))
B.l8=s(["post_dither","post_quantization_bits"],t.s)
B.l9=s(["wall-plaster","grime","floor-linoleum","ceiling-stained","porcelain-albedo","porcelain-normal","glass"],t.s)
B.fy=new A.cj("W A S D","Move",!1)
B.fw=new A.cj("TAB","Journal",!1)
B.fv=new A.cj("CAPS","Shader Lab",!1)
B.fu=new A.cj("ESC","Pause",!1)
B.la=s([B.fy,B.fw,B.fv,B.fu],t.sa)
B.lb=s(["floor-linoleum","ceiling-stained"],t.s)
B.lK={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.lc=new A.a4(B.lK,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a2("a4<e,L?>"))
B.lY={uAlbedo:0}
B.dq=new A.a4(B.lY,[0],t.I)
B.m4={uSsaoRaw:0,uSceneDepth:1}
B.ld=new A.a4(B.m4,[0,1],t.I)
B.dB={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.kf=s(["KeyW","GamepadDpadUp"],t.s)
B.ke=s(["KeyS","GamepadDpadDown"],t.s)
B.k6=s(["KeyA","GamepadDpadLeft"],t.s)
B.k7=s(["KeyD","GamepadDpadRight"],t.s)
B.k8=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.kc=s(["KeyQ","GamepadB"],t.s)
B.kh=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.kH=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.kd=s(["KeyR","GamepadX"],t.s)
B.k9=s(["KeyF","GamepadRB"],t.s)
B.ka=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.kb=s(["KeyL"],t.s)
B.jY=s(["Escape","GamepadMenu"],t.s)
B.le=new A.a4(B.dB,[B.kf,B.ke,B.k6,B.k7,B.k8,B.kc,B.kh,B.kH,B.kd,B.k9,B.ka,B.kb,B.jY],A.a2("a4<e,K<e>>"))
B.lf=new A.a4(B.dB,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.m1={uScene:0,uHistory:1}
B.lg=new A.a4(B.m1,[0,1],t.I)
B.lA={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.lh=new A.a4(B.lA,["d437f9186a89b1d808770f73ecc5edf3389a0b6c","a83372355ef8a75851e4362c76e23cba66aae753","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.3"],t.w)
B.lO={aPosition:0,aUvMat:1}
B.dr=new A.a4(B.lO,[0,4],t.I)
B.lB={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-hail-tick":32,"weather-wind":33,"weather-window-rattle":34,"weather-window-tick":35,"weather-thunder-bed":36,"weather-interior-drip":37,"weather-interior-warmth":38,"weather-interior-coffee":39,"weather-coffee-clink":40,"weather-thunder-crack":41,"weather-thunder-roll":42,"step-above-0":43,"step-above-1":44,"step-above-2":45,"step-above-3":46}
B.li=new A.a4(B.lB,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","transient","air","ambience","transient","sub","ambience","sub","ambience","transient","sub","sub","sub","sub","sub","sub"],t.w)
B.m2={uScene:0,uLut:1}
B.lj=new A.a4(B.m2,[0,1],t.I)
B.m3={uSource:0}
B.ds=new A.a4(B.m3,[0],t.I)
B.lV={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.lk=new A.a4(B.lV,[0,1,2,3,4,5,6],t.I)
B.dt=new A.d2([B.a3,"settings.visual",B.bH,"settings.graphics",B.a4,"settings.gameplay",B.bI,"settings.controls",B.L,"settings.audio",B.M,"settings.accessibility"],t.EJ)
B.du=new A.d2([B.a3,"visual",B.bH,"graphics",B.a4,"gameplay",B.bI,"controls",B.L,"audio",B.M,"accessibility"],t.EJ)
B.lI={uSharp:0,uBlurred:1,uSceneDepth:2}
B.ll=new A.a4(B.lI,[0,1,2],t.I)
B.lQ={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.jD=new A.bA("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.jy=new A.bA("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.jC=new A.bA("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.jF=new A.bA("wallpaper-damp","grime",7106925,0.94,0.76)
B.jz=new A.bA("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.jE=new A.bA("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.jG=new A.bA("wallpaper-peeling","grime",9340536,0.91,0.68)
B.jA=new A.bA("floor-wood","wall-plaster",7755327,0.88,0.22)
B.jw=new A.bA("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.jx=new A.bA("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.ju=new A.bA("floor-concrete","grime",7828331,0.96,0.92)
B.jv=new A.bA("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.jB=new A.bA("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bB=new A.a4(B.lQ,[B.jD,B.jy,B.jC,B.jF,B.jz,B.jE,B.jG,B.jA,B.jw,B.jx,B.ju,B.jv,B.jB],A.a2("a4<e,bA>"))
B.lZ={uBloom:0}
B.lm=new A.a4(B.lZ,[0],t.I)
B.m_={uSceneDepth:0}
B.dv=new A.a4(B.m_,[0],t.I)
B.m0={uScene:0}
B.ln=new A.a4(B.m0,[0],t.I)
B.D={}
B.dw=new A.a4(B.D,[],A.a2("a4<e,i4>"))
B.lo=new A.a4(B.D,[],A.a2("a4<e,K<z>>"))
B.aO=new A.a4(B.D,[],t.w)
B.pI=new A.a4(B.D,[],A.a2("a4<e,l>"))
B.bC=new A.a4(B.D,[],A.a2("a4<e,z>"))
B.w=new A.a4(B.D,[],t.I)
B.dx=new A.a4(B.D,[],A.a2("a4<e,@>"))
B.pJ=new A.a4(B.D,[],A.a2("a4<e,e?>"))
B.lp=new A.a4(B.D,[],A.a2("a4<@,@>"))
B.m7={"porcelain-albedo":0,"porcelain-normal":1}
B.lq=new A.a4(B.m7,["res/house/models/porcelain-mermaid-statuette/textures/retopo_Transferred%20Texture%20from%20Mesh.jpeg","res/house/models/porcelain-mermaid-statuette/textures/retopo_Normal%20Map%20from%20Mesh.jpeg"],t.w)
B.lD={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.lr=new A.a4(B.lD,[0,1,2,3,4,5,6],t.I)
B.dE=new A.cP(0,"resume")
B.dF=new A.cP(1,"settings")
B.dG=new A.cP(2,"controls")
B.dH=new A.cP(3,"save")
B.dI=new A.cP(4,"help")
B.dJ=new A.cP(5,"credits")
B.dK=new A.cP(6,"back")
B.ls=new A.d2([B.dE,"pause.resume",B.dF,"pause.settings",B.dG,"pause.controls",B.dH,"pause.save",B.dI,"pause.help",B.dJ,"pause.credits",B.dK,"pause.back"],A.a2("d2<cP,e>"))
B.m6={uVolumetric:0}
B.lt=new A.a4(B.m6,[0],t.I)
B.lS={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.lu=new A.a4(B.lS,[0,1,2,3],t.I)
B.m5={uTex:0}
B.lv=new A.a4(B.m5,[0],t.I)
B.bD=new A.d2([B.aU,1,B.bS,1.5,B.e_,1.5,B.bT,2,B.bU,2,B.a7,4],A.a2("d2<cq,z>"))
B.pK=new A.iz(0,"srgb")
B.pL=new A.iz(1,"linear")
B.lw=new A.cN("weather:rain-particle",null,0.55,0.68,0.82,0.08,null,1,0.18,0,0,0.2,1,1,B.aB,0.5,!1,!1)
B.lx=new A.cN("weather:snow-particle",null,0.82,0.9,1,0.04,null,1,0.72,0,0,0.2,1,1,B.aB,0.5,!1,!1)
B.ly=new A.cN("weather:hail-particle",null,0.62,0.74,0.82,0.06,null,1,0.35,0,0,0.2,1,1,B.aB,0.5,!1,!1)
B.bE=new A.f7(0,"resident")
B.dy=new A.f7(1,"pending")
B.dz=new A.f7(2,"missing")
B.dA=new A.f7(3,"evicted")
B.pM=new A.lh(!1)
B.lz=new A.lh(!0)
B.kB=s([],t.bA)
B.kC=s([],A.a2("w<bB>"))
B.bF=new A.eu(B.kB,B.kC,null)
B.dC=new A.cp(1,"settings")
B.m9=new A.cp(2,"visual")
B.ma=new A.cp(3,"graphics")
B.mb=new A.cp(4,"gameplay")
B.mc=new A.cp(5,"controls")
B.md=new A.cp(6,"audio")
B.me=new A.cp(7,"accessibility")
B.mf=new A.cp(8,"credits")
B.a2=new A.bB(1,"settings")
B.mg=new A.bB(2,"journal")
B.mh=new A.bB(3,"sleep")
B.mi=new A.bB(4,"help")
B.mj=new A.bB(5,"visitor")
B.mk=new A.bB(6,"ending")
B.dL=new A.ev(0,"opened")
B.dM=new A.ev(2,"backed")
B.dN=new A.ev(3,"resumed")
B.ml=new A.ev(4,"dismissed")
B.a5=new A.ev(5,"unchanged")
B.mm=new A.bC("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.mn=new A.bC("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.mo=new A.bC("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.mp=new A.bC("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.mq=new A.bC("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.mr=new A.bC("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.ms=new A.bC("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.mt=new A.bC("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.mu=new A.bC("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.mv=new A.ls(0,1,null)
B.mx=new A.lt(1,"high")
B.mw=new A.rF(!1,!0,!0,!0,!1,B.mx,35,256)
B.my=new A.lx(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.x=new A.ew(0,"none")
B.aP=new A.ew(1,"rain")
B.an=new A.ew(2,"sleet")
B.ao=new A.ew(3,"snow")
B.a6=new A.ew(4,"hail")
B.mz=new A.cQ(0,"tooShortForHeader")
B.mA=new A.cQ(1,"badMagic")
B.mB=new A.cQ(2,"unsupportedVersion")
B.dP=new A.cQ(3,"unsupportedStride")
B.mC=new A.cQ(4,"truncatedVertexData")
B.mD=new A.cQ(5,"nonFiniteBounds")
B.dQ=new A.cQ(6,"nonFiniteVertex")
B.mE=new A.cQ(7,"vertexCountNotMultipleOfThree")
B.bJ=new A.fc(0,"safe")
B.N=new A.fc(1,"standard")
B.F=new A.fc(2,"high")
B.a8=new A.aW(B.D,0,t.M)
B.ap=new A.dN(B.bJ,B.a8)
B.lX={shadows:0}
B.nz=new A.aW(B.lX,1,t.M)
B.dR=new A.dN(B.N,B.nz)
B.lF={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.np=new A.aW(B.lF,5,t.M)
B.mG=new A.dN(B.F,B.np)
B.lW={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.ny=new A.aW(B.lW,6,t.M)
B.dS=new A.dN(B.F,B.ny)
B.mF=new A.fc(4,"shipping")
B.lH={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.nr=new A.aW(B.lH,7,t.M)
B.pN=new A.dN(B.mF,B.nr)
B.aQ=new A.lF(0,0,0,1)
B.mH=new A.a8(0,1)
B.mI=new A.bk(0.35,0.52,0.88)
B.mJ=new A.aG(0.46,0.25,0.2)
B.dT=new A.bk(0.22,0.45,0.92)
B.mK=new A.aG(0.48,0.4,0.34)
B.mL=new A.aG(0.31,0.25,0.23)
B.bK=new A.bk(0.75,0.52,0.42)
B.mM=new A.bk(0.4,0.65,0.95)
B.dU=new A.bk(0.88,0.96,1)
B.mN=new A.aG(0.37,0.33,0.31)
B.mO=new A.bk(0.62,0.48,0.45)
B.mP=new A.aG(0.34,0.32,0.29)
B.dV=new A.aG(0.38,0.25,0.19)
B.bL=new A.bk(0.9,0.8,0.72)
B.aR=new A.bk(0.28,0.16,0.12)
B.mQ=new A.aG(0.31,0.28,0.24)
B.bM=new A.bk(0.65,0.45,0.35)
B.mR=new A.aG(0.58,0.56,0.5)
B.dW=new A.bk(0.2,0.38,0.9)
B.mS=new A.aG(0.44,0.37,0.28)
B.mT=new A.aG(0.52,0.5,0.44)
B.mU=new A.aG(0.24,0.25,0.27)
B.mV=new A.aG(0.28,0.27,0.25)
B.mW=new A.bk(0.35,0.28,0.25)
B.dX=new A.bk(0.52,0.32,0.38)
B.mX=new A.aG(0.42,0.4,0.38)
B.mY=new A.aG(0.18,0.2,0.21)
B.mZ=new A.aG(0.2,0.12,0.1)
B.aS=new A.bk(0.35,0.2,0.15)
B.n_=new A.aG(0.12,0.15,0.2)
B.n0=new A.hn(0,"constructed")
B.W=new A.hn(1,"ready")
B.bN=new A.hn(2,"lost")
B.n1=new A.iR(B.ap,384,216,1,B.b6,0,512,32,4,1,B.cA)
B.bO=new A.ff(0,"constructed")
B.n2=new A.ff(1,"initializing")
B.bP=new A.ff(2,"ready")
B.dY=new A.ff(3,"contextLost")
B.i=new A.ho(0,"read")
B.k=new A.ho(1,"write")
B.O=new A.ho(2,"historyRead")
B.bQ=new A.hp(0,"prepared")
B.n3=new A.hp(1,"committed")
B.n4=new A.hp(2,"rolledBack")
B.p=new A.iT(0,"rgba8")
B.n5=new A.aO("dofBlurH",B.p,192,108,1,0)
B.n6=new A.aO("dofBlurV",B.p,192,108,1,0)
B.n7=new A.aO("dofOutput",B.p,384,216,1,0)
B.dZ=new A.iT(2,"depth24")
B.n8=new A.aO("shadowMap",B.dZ,512,512,1,0)
B.n9=new A.aO("volumetricLight",B.p,192,108,1,0)
B.na=new A.aO("sceneColor",B.p,384,216,1,1)
B.nb=new A.aO("ssaoRaw",B.p,192,108,1,0)
B.nc=new A.aO("ssaoBlurred",B.p,192,108,1,0)
B.nd=new A.aO("gradeOutput",B.p,384,216,1,0)
B.ne=new A.aO("vhsOutput",B.p,384,216,1,0)
B.nf=new A.aO("sceneDepth",B.dZ,384,216,1,0)
B.ng=new A.aO("bloomBlurH",B.p,192,108,1,0)
B.nh=new A.aO("bloomBlurV",B.p,192,108,1,0)
B.ni=new A.aO("present",B.p,384,216,1,0)
B.bR=new A.aO("sceneColor",B.p,384,216,1,0)
B.nj=new A.aO("ps1Output",B.p,384,216,1,0)
B.nk=new A.fh(null,"save storage unavailable")
B.nl=new A.fh(null,"save could not be recovered")
B.nm=new A.fh(null,null)
B.lL={WheelUp:0,WheelDown:1}
B.nn=new A.aW(B.lL,2,t.M)
B.lT={open:0,closed:1}
B.no=new A.aW(B.lT,2,t.M)
B.lN={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.nq=new A.aW(B.lN,10,t.M)
B.lE={Escape:0}
B.e0=new A.aW(B.lE,1,t.M)
B.lC={open:0,closed:1,mixed:2}
B.ns=new A.aW(B.lC,3,t.M)
B.lR={front:0,"rear-service":1}
B.nt=new A.aW(B.lR,2,t.M)
B.nu=new A.h6([18,20],A.a2("h6<j>"))
B.lU={overcast:0,rain:1}
B.nv=new A.aW(B.lU,2,t.M)
B.lP={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.nw=new A.aW(B.lP,16,t.M)
B.lM={Escape:0,Tab:1,F11:2}
B.e1=new A.aW(B.lM,3,t.M)
B.lJ={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.nx=new A.aW(B.lJ,5,t.M)
B.lG={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.aq=new A.aW(B.lG,7,t.M)
B.e4=new A.fj(2,"link")
B.nK=new A.iW(B.e4,"gl.createProgram() returned null")
B.e2=new A.fj(0,"vertex")
B.e3=new A.fj(1,"fragment")
B.e5=new A.fj(3,"validation")
B.y=new A.iX(0,"live")
B.e6=new A.iX(1,"unavailable")
B.nS=new A.iY(0,"full")
B.nT=new A.iY(2,"culled")
B.nY=new A.bh(0,"polarNight")
B.nZ=new A.bh(1,"astronomicalDawn")
B.o_=new A.bh(10,"civilDusk")
B.o0=new A.bh(11,"nauticalDusk")
B.o1=new A.bh(12,"astronomicalDusk")
B.o2=new A.bh(13,"night")
B.o3=new A.bh(14,"polarDay")
B.o4=new A.bh(2,"nauticalDawn")
B.o5=new A.bh(3,"civilDawn")
B.o6=new A.bh(4,"sunrise")
B.e8=new A.bh(5,"morning")
B.o7=new A.bh(6,"solarNoon")
B.o8=new A.bh(7,"afternoon")
B.o9=new A.bh(8,"goldenHour")
B.oa=new A.bh(9,"sunset")
B.Q=new A.C(0,1,0)
B.aw=new A.C(0,-1,0)
B.ob=new A.bO(-1,B.Q,B.aw,B.bk,1,1,0.3,0.5)
B.oc=new A.lW(!1,"","",B.bt,B.bt)
B.ec=new A.dR(0,"resident")
B.ed=new A.dR(1,"pending")
B.ee=new A.dR(2,"missing")
B.ef=new A.dR(3,"evicted")
B.v=new A.C(0,0,0)
B.A=new A.hy(B.v,B.aQ,1)
B.oe=A.cA("K9")
B.of=A.cA("Ka")
B.og=A.cA("pj")
B.oh=A.cA("pk")
B.oi=A.cA("F0")
B.oj=A.cA("F1")
B.ok=A.cA("F2")
B.ol=A.cA("aj")
B.om=A.cA("L")
B.on=A.cA("uv")
B.oo=A.cA("uw")
B.op=A.cA("G2")
B.oq=A.cA("c0")
B.e=new A.dg(0,"float1")
B.au=new A.dg(1,"float2")
B.m=new A.dg(2,"float3")
B.or=new A.dg(3,"float4")
B.t=new A.dg(4,"mat4")
B.eg=new A.dg(5,"mat4Array")
B.c3=new A.x(B.e,0)
B.c4=new A.x(B.e,1)
B.Z=new A.dg(6,"sampler")
B.u=new A.x(B.Z,0)
B.av=new A.x(B.Z,1)
B.eh=new A.x(B.Z,2)
B.os=new A.x(B.Z,3)
B.ot=new A.x(B.Z,4)
B.ou=new A.x(B.Z,5)
B.ov=new A.x(B.Z,6)
B.ow=new A.uA(!1)
B.ox=new A.C(0,0,1)
B.oy=new A.C(0,3,0)
B.ei=new A.C(1,0,0)
B.oz=new A.C(0,-9.81,0)
B.oA=new A.C(1/0,1/0,1/0)
B.oB=new A.C(2.75,3,2.75)
B.oC=new A.C(-1/0,-1/0,-1/0)
B.ej=new A.cS(1,"normal")
B.c6=new A.cS(6,"tangent4")
B.oD=new A.cS(0,"position")
B.c8=new A.bb(B.oD,0,3)
B.c9=new A.bb(B.ej,3,3)
B.eq=new A.bb(B.c6,6,4)
B.ek=new A.cS(2,"color")
B.en=new A.bb(B.ek,10,4)
B.el=new A.cS(4,"alpha")
B.eo=new A.bb(B.el,14,1)
B.em=new A.cS(5,"uv0")
B.ep=new A.bb(B.em,15,2)
B.oE=new A.cS(7,"uv1")
B.oI=new A.bb(B.oE,17,2)
B.c7=new A.cS(8,"legacyMaterialEffect")
B.oL=new A.bb(B.c7,19,1)
B.kX=s([B.c8,B.c9,B.eq,B.en,B.eo,B.ep,B.oI,B.oL],t.v5)
B.oM=new A.j5("surfaceV2WithUv1",20,B.kX)
B.oF=new A.bb(B.ek,6,4)
B.oG=new A.bb(B.el,10,1)
B.oH=new A.bb(B.em,11,2)
B.oJ=new A.bb(B.c7,13,1)
B.kl=s([B.c8,B.c9,B.oF,B.oG,B.oH,B.oJ],t.v5)
B.ab=new A.j5("compatibility14",14,B.kl)
B.oK=new A.bb(B.c7,17,1)
B.jR=s([B.c8,B.c9,B.eq,B.en,B.eo,B.ep,B.oK],t.v5)
B.oN=new A.j5("surfaceV2",18,B.jR)
B.oO=new A.ez(0,"visitorAnswered")
B.er=new A.ez(1,"visitorIgnored")
B.oP=new A.ez(2,"entryVerified")
B.oQ=new A.ez(3,"entryContradicted")
B.oR=new A.ez(4,"exposureAccepted")
B.oT=new A.dh(1,"malformedDay")
B.oU=new A.dh(2,"malformedTier")
B.es=new A.dh(3,"missingTierLines")
B.ad=new A.dh(6,"invalidPhase")
B.oX=new A.bF(B.ad,"No reaction is due.")
B.p4=new A.bv(B.oX)
B.p1=new A.bF(B.ad,"The active visit cannot be chosen.")
B.p5=new A.bv(B.p1)
B.oY=new A.bF(B.ad,"The active visit has no line to advance.")
B.p6=new A.bv(B.oY)
B.oW=new A.dh(5,"noActiveVisit")
B.oZ=new A.bF(B.oW,"There is no active visit.")
B.et=new A.bv(B.oZ)
B.p0=new A.bF(B.ad,"A visit is already active.")
B.p7=new A.bv(B.p0)
B.oV=new A.dh(4,"noArrival")
B.p3=new A.bF(B.oV,"The authored arrival is missing.")
B.p8=new A.bv(B.p3)
B.p_=new A.bF(B.ad,"That answer is not offered.")
B.p9=new A.bv(B.p_)
B.oS=new A.dh(0,"missingCorpus")
B.p2=new A.bF(B.oS,"The authored visitor corpus is empty.")
B.pa=new A.bv(B.p2)
B.pb=new A.eC(0,"none")
B.pc=new A.eC(1,"splash")
B.cc=new A.eC(2,"settle")
B.pd=new A.eC(3,"melt")
B.eu=new A.eC(4,"rebound")
B.pe=new A.fr(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.pf=new A.fr(-2,8.8,4.5,0.9,1,!0,0.00005)
B.pg=new A.fr(0,0,0,1,1,!1,0)
B.ph=new A.fr(-5,18,5.5,0.65,1.35,!0,0.001)
B.pi=new A.fr(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.ev=new A.fu(1,"exact")
B.cd=new A.fu(2,"partial")
B.aX=new A.fu(3,"contradiction")
B.pj=new A.fu(0,"skipped")
B.pk=new A.ft(B.pj,B.a8)
B.pl=new A.ft(B.cd,B.a8)
B.pm=new A.ja(B.a0,!1)
B.pn=new A.ja(B.a0,!0)
B.ew=new A.jc(0,"horizontal")
B.po=new A.jc(1,"vertical")
B.ex=new A.je(0,"horizontal")
B.pp=new A.je(1,"vertical")
B.aY=new A.hF(0,"empty")
B.pD=new A.hF(1,"cpuReady")
B.aZ=new A.hF(4,"released")})();(function staticFields(){$.vv=null
$.ch=A.c([],A.a2("w<L>"))
$.B3=null
$.rS=0
$.rT=A.Ih()
$.Aq=null
$.Ap=null
$.De=null
$.D4=null
$.Dm=null
$.xN=null
$.xW=null
$.A_=null
$.vV=A.c([],A.a2("w<K<L>?>"))
$.hS=null
$.jV=null
$.jW=null
$.zz=!1
$.ar=B.B
$.Bs=""
$.Bt=null
$.Bn=null
$.rq=null
$.dl=A.ak()
$.fD=A.ak()
$.aB=null
$.w8=A.ak()
$.Cw=null
$.o=A.ak()
$.C9=A.ak()
$.cV=A.ak()
$.am=A.ak()
$.S=A.ak()
$.bw=A.ak()
$.U=A.ak()
$.zg=A.ak()
$.wb=null
$.zu=null
$.bm=null
$.zk=!1
$.zJ=!1
$.jS=B.b1
$.dm=B.aA
$.xv=!1
$.zV=!1
$.Cy=null
$.hO=null
$.nq=A.m(t.N,t.xe)
$.ne=null
$.Ck=0
$.D3=0
$.zA=null
$.hW=!1
$.Cx=!1
$.zB=0
$.eL=0
$.zm="booting"
$.cz=0
$.fH=0
$.ag="hall"
$.eK=A.ak()
$.hL=A.ak()
$.cg=A.ak()
$.CD=null
$.zK=0
$.zO=1.65
$.eO=null
$.bl=null
$.jZ=!1
$.cy=A.ak()
$.hM=A.ak()
$.jP=A.ak()
$.nc=A.ak()
$.C8=A.ak()
$.C7=A.ak()
$.az=A.ak()
$.fE=A.ak()
$.jO=A.ak()
$.nb=A.ak()
$.jQ=A.ak()
$.jR=A.ak()
$.fC=A.ak()
$.eJ=A.ak()
$.hK=A.ak()
$.jN=A.ak()
$.jL=A.ak()
$.jM=A.ak()
$.aP=A.ak()
$.na=A.ak()
$.bd=A.ak()
$.xw=A.Z(t.S)
$.dn=A.c([],t.s)
$.zs=null
$.CV=!1
$.Cc=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Kc","Dw",()=>A.xP("_$dart_dartClosure"))
s($,"Kb","yF",()=>A.xP("_$dart_dartClosure_dartJSInterop"))
s($,"KU","DT",()=>A.c([new J.l5()],A.a2("w<iU>")))
s($,"Kn","Dx",()=>A.dT(A.uu({
toString:function(){return"$receiver$"}})))
s($,"Ko","Dy",()=>A.dT(A.uu({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Kp","Dz",()=>A.dT(A.uu(null)))
s($,"Kq","DA",()=>A.dT(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Kt","DD",()=>A.dT(A.uu(void 0)))
s($,"Ku","DE",()=>A.dT(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ks","DC",()=>A.dT(A.Bp(null)))
s($,"Kr","DB",()=>A.dT(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Kw","DG",()=>A.dT(A.Bp(void 0)))
s($,"Kv","DF",()=>A.dT(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Ky","A9",()=>A.Gw())
s($,"KC","DL",()=>A.Fm(4096))
s($,"KA","DJ",()=>new A.w4().$0())
s($,"KB","DK",()=>new A.w3().$0())
s($,"Kz","DI",()=>A.Fl(A.W(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"KN","i2",()=>A.nw(B.om))
s($,"Kl","A8",()=>{A.FB()
return $.rS})
s($,"K8","Dv",()=>B.bR.i6())
s($,"Kh","A7",()=>A.lq(A.c([255,255,255,255],t.t)))
s($,"Ke","A4",()=>A.lq(A.c([128,128,255,255],t.t)))
s($,"Kd","A3",()=>A.lq(A.c([0,0,0,255],t.t)))
s($,"Kf","A5",()=>A.lq(A.c([255,255,0,255],t.t)))
s($,"Kg","A6",()=>A.lq(A.c([255,255,255,255],t.t)))
s($,"L_","DX",()=>A.j4(0,1,0))
s($,"Kx","DH",()=>A.Gt(A.Z(t.N),0,0,A.j4(0,0,0)))
s($,"KW","DU",()=>A.iP("^[a-z0-9][a-z0-9._-]*$"))
s($,"L2","fL",()=>{var q=$.Bn
if(q==null){A.xJ()
A.xJ()
A.xJ()
A.xJ()
q=$.Bn=new A.uj()}return q})
s($,"Ki","yG",()=>A.yM(B.b9,B.cQ,!0,B.ba,B.cS,B.cV,B.cW,B.cY,!0,!1,B.d_))
s($,"KI","DM",()=>new A.os())
r($,"CY","dr",()=>A.z0(null,null))
r($,"jU","k4",()=>A.h8(null,null))
r($,"zr","fK",()=>A.fZ(null,null,!1,1,!1,!1,2,1))
r($,"zv","cC",()=>$.yG())
s($,"KO","DP",()=>new A.q1())
s($,"KP","DQ",()=>new A.qb())
s($,"KQ","yI",()=>new A.qq(A.m(t.N,t.S)))
s($,"KK","DN",()=>A.dU().gaY().h(0,"debugPause")==="1")
s($,"KH","k3",()=>A.dU().gaY().h(0,"automation")==="1")
s($,"KE","yH",()=>A.Iy())
s($,"KD","Aa",()=>$.yH()!=null)
s($,"KF","Ab",()=>$.k3()?A.dU().gaY().h(0,"captureMantleId"):null)
s($,"KG","Ac",()=>A.dU().gaY().h(0,"captureMantleLit")==="1")
r($,"xr","eS",()=>A.j4(0,0,0))
r($,"xi","DS",()=>A.j4(0,0,0))
r($,"xC","nx",()=>A.j4(0,0,0))
s($,"KJ","Ad",()=>A.Iz())
s($,"KS","k5",()=>new A.pl(A.j4(0,0,0)))
s($,"KR","DR",()=>new A.qP(new A.p0()))
s($,"KL","cB",()=>new A.pE(A.c([],t.s)))
s($,"KV","c2",()=>A.Bi())
s($,"KY","DV",()=>new A.tX(A.m(t.N,t.oZ)))
s($,"KX","Ae",()=>new A.rW(A.FD(520588),B.bj))
s($,"KZ","DW",()=>new A.uS())
s($,"KM","DO",()=>new A.pY())
s($,"KT","i3",()=>new A.ru(B.bF))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.et,ArrayBuffer:A.hi,ArrayBufferView:A.iE,DataView:A.lj,Float32Array:A.iB,Float64Array:A.lk,Int16Array:A.ll,Int32Array:A.lm,Int8Array:A.ln,Uint16Array:A.lo,Uint32Array:A.lp,Uint8ClampedArray:A.f9,CanvasPixelArray:A.f9,Uint8Array:A.iF})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bq.$nativeSuperclassTag="ArrayBufferView"
A.jm.$nativeSuperclassTag="ArrayBufferView"
A.jn.$nativeSuperclassTag="ArrayBufferView"
A.iC.$nativeSuperclassTag="ArrayBufferView"
A.jo.$nativeSuperclassTag="ArrayBufferView"
A.jp.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"})()
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
