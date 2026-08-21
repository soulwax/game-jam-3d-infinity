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
if(a[b]!==s){A.Kw(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Ah(b)
return new s(c,this)}:function(){if(s===null)s=A.Ah(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Ah(a).prototype
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
Am(a,b,c,d){return{i:a,p:b,e:c,x:d}},
yc(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Ak==null){A.K8()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.a(A.BL("Return interceptor for "+A.y(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vP
if(o==null)o=$.vP=A.yb(n)
p=q[o]}if(p!=null)return p
p=A.Ke(a)
if(p!=null)return p
if(typeof a=="function")return B.jN
s=Object.getPrototypeOf(a)
if(s==null)return B.dQ
if(s===Object.prototype)return B.dQ
if(typeof q=="function"){o=$.vP
if(o==null)o=$.vP=A.yb(n)
Object.defineProperty(q,o,{value:B.c7,enumerable:false,writable:true,configurable:true})
return B.c7}return B.c7},
B4(a,b){if(a<0||a>4294967295)throw A.a(A.b_(a,0,4294967295,"length",null))
return J.z9(new Array(a),b)},
B5(a,b){if(a<0)throw A.a(A.o("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("x<0>"))},
qG(a,b){if(a<0)throw A.a(A.o("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("x<0>"))},
z9(a,b){var s=A.c(a,b.i("x<0>"))
s.$flags=1
return s},
Fx(a,b){var s=t.hO
return J.AC(s.a(a),s.a(b))},
B7(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Fy(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.B7(r))break;++b}return b},
Fz(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.B7(q))break}return b},
eW(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iw.prototype
return J.le.prototype}if(typeof a=="string")return J.eu.prototype
if(a==null)return J.ix.prototype
if(typeof a=="boolean")return J.ld.prototype
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.hf.prototype
if(typeof a=="bigint")return J.he.prototype
return a}if(a instanceof A.L)return a
return J.yc(a)},
aQ(a){if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.hf.prototype
if(typeof a=="bigint")return J.he.prototype
return a}if(a instanceof A.L)return a
return J.yc(a)},
cY(a){if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.hf.prototype
if(typeof a=="bigint")return J.he.prototype
return a}if(a instanceof A.L)return a
return J.yc(a)},
K5(a){if(typeof a=="number")return J.fa.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eA.prototype
return a},
Dw(a){if(typeof a=="number")return J.fa.prototype
if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eA.prototype
return a},
Dx(a){if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eA.prototype
return a},
Dy(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.hf.prototype
if(typeof a=="bigint")return J.he.prototype
return a}if(a instanceof A.L)return a
return J.yc(a)},
AA(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Dw(a).a4(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eW(a).aa(a,b)},
b1(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Kd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)},
b7(a,b,c){return J.cY(a).l(a,b,c)},
e9(a,b){return J.cY(a).k(a,b)},
El(a,b){return J.Dx(a).hE(a,b)},
kd(a,b){return J.cY(a).M(a,b)},
AB(a,b,c){return J.Dy(a).hG(a,b,c)},
Em(a,b,c){return J.Dy(a).hH(a,b,c)},
En(a,b){return J.cY(a).d3(a,b)},
Eo(a,b,c){return J.K5(a).n(a,b,c)},
AC(a,b){return J.Dw(a).I(a,b)},
AD(a,b){return J.aQ(a).p(a,b)},
nH(a,b){return J.cY(a).ab(a,b)},
Ep(a,b){return J.cY(a).a2(a,b)},
AE(a){return J.cY(a).ga1(a)},
aN(a){return J.eW(a).gU(a)},
ke(a){return J.aQ(a).gR(a)},
Eq(a){return J.aQ(a).ga5(a)},
O(a){return J.cY(a).gv(a)},
cE(a){return J.aQ(a).gu(a)},
eY(a){return J.eW(a).gae(a)},
AF(a,b){return J.cY(a).W(a,b)},
ea(a,b,c){return J.cY(a).bu(a,b,c)},
Er(a,b){return J.aQ(a).su(a,b)},
Es(a,b){return J.Dx(a).aQ(a,b)},
c5(a){return J.eW(a).t(a)},
AG(a,b){return J.cY(a).f3(a,b)},
la:function la(){},
ld:function ld(){},
ix:function ix(){},
iz:function iz(){},
ev:function ev(){},
lB:function lB(){},
eA:function eA(){},
dJ:function dJ(){},
he:function he(){},
hf:function hf(){},
x:function x(a){this.$ti=a},
lc:function lc(){},
qI:function qI(a){this.$ti=a},
eZ:function eZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fa:function fa(){},
iw:function iw(){},
le:function le(){},
eu:function eu(){}},A={za:function za(){},
y5(){return $},
EG(a,b,c){if(t.he.b(a))return new A.jm(a,b.i("@<0>").S(c).i("jm<1,2>"))
return new A.f2(a,b.i("@<0>").S(c).i("f2<1,2>"))},
Bb(a){return new A.hg("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.hg("Field '"+a+"' has not been initialized.")},
FB(a){return new A.hg("Field '"+a+"' has already been initialized.")},
yd(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b4(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ja(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e7(a,b,c){return a},
Al(a){var s,r
for(s=$.ck.length,r=0;r<s;++r)if(a===$.ck[r])return!0
return!1},
hz(a,b,c,d){A.lN(b,"start")
if(c!=null){A.lN(c,"end")
if(b>c)A.f(A.b_(b,0,c,"start",null))}return new A.j9(a,b,c,d.i("j9<0>"))},
lk(a,b,c,d){if(t.he.b(a))return new A.dz(a,b,c.i("@<0>").S(d).i("dz<1,2>"))
return new A.cO(a,b,c.i("@<0>").S(d).i("cO<1,2>"))},
cM(){return new A.hx("No element")},
B3(){return new A.hx("Too many elements")},
eI:function eI(){},
ic:function ic(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b){this.a=a
this.$ti=b},
jm:function jm(a,b){this.a=a
this.$ti=b},
jk:function jk(){},
b9:function b9(a,b){this.a=a
this.$ti=b},
hg:function hg(a){this.a=a},
dx:function dx(a){this.a=a},
tA:function tA(){},
V:function V(){},
a0:function a0(){},
j9:function j9(a,b,c,d){var _=this
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
cO:function cO(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c){var _=this
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
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ik:function ik(a){this.$ti=a},
dY:function dY(a,b){this.a=a
this.$ti=b},
jg:function jg(a,b){this.a=a
this.$ti=b},
aE:function aE(){},
eB:function eB(){},
hB:function hB(){},
bM:function bM(a,b){this.a=a
this.$ti=b},
jR:function jR(){},
aX(a,b,c){var s,r,q,p,o,n,m,l=A.aG(a.ga3(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aG(a.gam(),!0,c)
m=new A.a4(q,n,b.i("@<0>").S(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.ig(A.aZ(a,b,c),b.i("@<0>").S(c).i("ig<1,2>"))},
EM(){throw A.a(A.bu("Cannot modify unmodifiable Map"))},
EN(){throw A.a(A.bu("Cannot modify constant Set"))},
DO(a){var s=A.DN(a)
if(s!=null)return s
return"minified:"+a},
Kd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c5(a)
return s},
iS(a){var s,r=$.Bo
if(r==null)r=$.Bo=Symbol("identityHashCode")
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
lI(a){var s,r,q,p
if(a instanceof A.L)return A.bS(A.cl(a),null)
s=J.eW(a)
if(s===B.jL||s===B.jO||t.qF.b(a)){r=B.cv(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bS(A.cl(a),null)},
Br(a){var s,r,q
if(a==null||typeof a=="number"||A.bx(a))return J.c5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.en)return a.t(0)
if(a instanceof A.bk)return a.ht(!0)
s=$.Eg()
for(r=0;r<1;++r){q=s[r].pj(a)
if(q!=null)return q}return"Instance of '"+A.lI(a)+"'"},
FU(){return Date.now()},
G0(){var s,r
if($.t6!==0)return
$.t6=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.t6=1e6
$.t7=new A.t5(r)},
FT(){if(!!self.location)return self.location.href
return null},
G1(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aA(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.ef(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.b_(a,0,1114111,null,null))},
hp(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
G_(a){var s=A.hp(a).getUTCFullYear()+0
return s},
FY(a){var s=A.hp(a).getUTCMonth()+1
return s},
Bp(a){var s=A.hp(a).getUTCDate()+0
return s},
Bq(a){var s=A.hp(a).getUTCHours()+0
return s},
FX(a){var s=A.hp(a).getUTCMinutes()+0
return s},
FZ(a){var s=A.hp(a).getUTCSeconds()+0
return s},
FW(a){var s=A.hp(a).getUTCMilliseconds()+0
return s},
FV(a){var s=a.$thrownJsError
if(s==null)return null
return A.cZ(s)},
Bs(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aR(a,s)
a.$thrownJsError=s
s.stack=b.t(0)}},
ye(a){throw A.a(A.y1(a))},
d(a,b){if(a==null)J.cE(a)
throw A.a(A.y8(a,b))},
y8(a,b){var s,r="index"
if(!A.b0(b))return new A.cG(!0,b,r,null)
s=A.i(J.cE(a))
if(b<0||b>=s)return A.qx(b,s,a,r)
return A.Bu(b,r)},
K_(a,b,c){if(a>c)return A.b_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b_(b,a,c,"end",null)
return new A.cG(!0,b,"end",null)},
y1(a){return new A.cG(!0,a,null,null)},
a(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.dU()
b.dartException=a
s=A.Kz
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Kz(){return J.c5(this.dartException)},
f(a,b){throw A.aR(a,b==null?new Error():b)},
aW(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.I6(a,b,c),s)},
I6(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.jb("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.a(A.aD(a))},
dV(a){var s,r,q,p,o,n
a=A.DI(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.uM(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
uN(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
BK(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
zb(a,b){var s=b==null,r=s?null:b.method
return new A.lf(a,r,s?null:b.receiver)},
ah(a){var s
if(a==null)return new A.rB(a)
if(a instanceof A.il){s=a.a
return A.eX(a,s==null?A.fK(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eX(a,a.dartException)
return A.Jr(a)},
eX(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Jr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.ef(r,16)&8191)===10)switch(q){case 438:return A.eX(a,A.zb(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.eX(a,new A.iL())}}if(a instanceof TypeError){p=$.DT()
o=$.DU()
n=$.DV()
m=$.DW()
l=$.DZ()
k=$.E_()
j=$.DY()
$.DX()
i=$.E1()
h=$.E0()
g=p.b7(s)
if(g!=null)return A.eX(a,A.zb(A.w(s),g))
else{g=o.b7(s)
if(g!=null){g.method="call"
return A.eX(a,A.zb(A.w(s),g))}else if(n.b7(s)!=null||m.b7(s)!=null||l.b7(s)!=null||k.b7(s)!=null||j.b7(s)!=null||m.b7(s)!=null||i.b7(s)!=null||h.b7(s)!=null){A.w(s)
return A.eX(a,new A.iL())}}return A.eX(a,new A.m9(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.j6()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eX(a,new A.cG(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.j6()
return a},
cZ(a){var s
if(a instanceof A.il)return a.b
if(a==null)return new A.jE(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jE(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nE(a){if(a==null)return J.aN(a)
if(typeof a=="object")return A.iS(a)
return J.aN(a)},
JS(a){if(typeof a=="number")return B.b.gU(a)
if(a instanceof A.na)return A.iS(a)
if(a instanceof A.bk)return a.gU(a)
return A.nE(a)},
Du(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
K4(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
Iw(a,b,c,d,e,f){t.BO.a(a)
switch(A.i(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.vA("Unsupported number of arguments for wrapped closure"))},
i1(a,b){var s=a.$identity
if(!!s)return s
s=A.JU(a,b)
a.$identity=s
return s},
JU(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Iw)},
EL(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.m4().constructor.prototype):Object.create(new A.fV(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.AO(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.EH(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.AO(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
EH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.EC)}throw A.a("Error in functionType of tearoff")},
EI(a,b,c,d){var s=A.AM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
AO(a,b,c,d){if(c)return A.EK(a,b,d)
return A.EI(b.length,d,a,b)},
EJ(a,b,c,d){var s=A.AM,r=A.ED
switch(b?-1:a){case 0:throw A.a(new A.lT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
EK(a,b,c){var s,r
if($.AK==null)$.AK=A.AJ("interceptor")
if($.AL==null)$.AL=A.AJ("receiver")
s=b.length
r=A.EJ(s,c,a,b)
return r},
Ah(a){return A.EL(a)},
EC(a,b){return A.jI(v.typeUniverse,A.cl(a.a),b)},
AM(a){return a.a},
ED(a){return a.b},
AJ(a){var s,r,q,p=new A.fV("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.o("Field name "+a+" not found.",null))},
yb(a){return v.getIsolateTag(a)},
DM(){return v.G},
Lx(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Ke(a){var s,r,q,p,o,n=A.w($.Dz.$1(a)),m=$.y9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.yi[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aq($.Dp.$2(a,n))
if(q!=null){m=$.y9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.yi[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.yN(s)
$.y9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.yi[n]=s
return s}if(p==="-"){o=A.yN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.DG(a,s)
if(p==="*")throw A.a(A.BL(n))
if(v.leafTags[n]===true){o=A.yN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.DG(a,s)},
DG(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Am(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
yN(a){return J.Am(a,!1,null,!!a.$ic7)},
Kg(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.yN(s)
else return J.Am(s,c,null,null)},
K8(){if(!0===$.Ak)return
$.Ak=!0
A.K9()},
K9(){var s,r,q,p,o,n,m,l
$.y9=Object.create(null)
$.yi=Object.create(null)
A.K7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.DH.$1(o)
if(n!=null){m=A.Kg(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
K7(){var s,r,q,p,o,n,m=B.f9()
m=A.i0(B.fa,A.i0(B.fb,A.i0(B.cw,A.i0(B.cw,A.i0(B.fc,A.i0(B.fd,A.i0(B.fe(B.cv),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Dz=new A.yf(p)
$.Dp=new A.yg(o)
$.DH=new A.yh(n)},
i0(a,b){return a(b)||b},
Hd(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
JW(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
B8(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.M("Illegal RegExp pattern ("+String(o)+")",a,null))},
Kt(a,b,c){var s=a.indexOf(b,c)
return s>=0},
K2(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
DI(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
yX(a,b,c){var s=A.Ku(a,b,c)
return s},
Ku(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.DI(b),"g"),A.K2(c))},
a5:function a5(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a){this.a=a},
ig:function ig(a,b){this.a=a
this.$ti=b},
h0:function h0(){},
oW:function oW(a,b,c){this.a=a
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
h1:function h1(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
hb:function hb(a,b){this.a=a
this.$ti=b},
t5:function t5(a){this.a=a},
j1:function j1(){},
uM:function uM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iL:function iL(){},
lf:function lf(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function m9(a){this.a=a},
rB:function rB(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a
this.b=null},
en:function en(){},
kv:function kv(){},
kw:function kw(){},
m6:function m6(){},
m4:function m4(){},
fV:function fV(a,b){this.a=a
this.b=b},
lT:function lT(a){this.a=a},
cr:function cr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
qR:function qR(a){this.a=a},
r0:function r0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
bW:function bW(a,b,c,d){var _=this
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
cN:function cN(a,b,c,d){var _=this
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
yf:function yf(a){this.a=a},
yg:function yg(a){this.a=a},
yh:function yh(a){this.a=a},
bk:function bk(){},
e0:function e0(){},
e1:function e1(){},
hG:function hG(){},
iy:function iy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mQ:function mQ(a){this.b=a},
mv:function mv(a,b,c){this.a=a
this.b=b
this.c=c},
mw:function mw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
j8:function j8(a,b){this.a=a
this.c=b},
n6:function n6(a,b,c){this.a=a
this.b=b
this.c=c},
n7:function n7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Kw(a){throw A.aR(A.Bb(a),new Error())},
t(){throw A.aR(A.a9(""),new Error())},
b6(){throw A.aR(A.FB(""),new Error())},
nF(){throw A.aR(A.Bb(""),new Error())},
ak(){var s=new A.vz()
return s.b=s},
vz:function vz(){this.b=null},
wA(a,b,c){},
S(a){return a},
FK(a,b,c){A.wA(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
rz(a){return new Float32Array(a)},
FL(a){return new Int8Array(a)},
FM(a){return new Uint8Array(a)},
lx(a){return new Uint8Array(A.S(a))},
Bm(a,b,c){A.wA(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
e5(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.y8(b,a))},
zK(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.K_(a,b,c))
return b},
ew:function ew(){},
hm:function hm(){},
iJ:function iJ(){},
wm:function wm(a){this.a=a},
lq:function lq(){},
bq:function bq(){},
iH:function iH(){},
iI:function iI(){},
iG:function iG(){},
lr:function lr(){},
ls:function ls(){},
lt:function lt(){},
lu:function lu(){},
lv:function lv(){},
lw:function lw(){},
ff:function ff(){},
iK:function iK(){},
jt:function jt(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
zm(a,b){var s=b.c
return s==null?b.c=A.jG(a,"aT",[b.x]):s},
Bz(a){var s=a.w
if(s===6||s===7)return A.Bz(a.x)
return s===11||s===12},
Gc(a){return a.as},
Kh(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a2(a){return A.wl(v.typeUniverse,a,!1)},
fN(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fN(a1,s,a3,a4)
if(r===s)return a2
return A.Cg(a1,r,!0)
case 7:s=a2.x
r=A.fN(a1,s,a3,a4)
if(r===s)return a2
return A.Cf(a1,r,!0)
case 8:q=a2.y
p=A.hZ(a1,q,a3,a4)
if(p===q)return a2
return A.jG(a1,a2.x,p)
case 9:o=a2.x
n=A.fN(a1,o,a3,a4)
m=a2.y
l=A.hZ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.zx(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hZ(a1,j,a3,a4)
if(i===j)return a2
return A.Ch(a1,k,i)
case 11:h=a2.x
g=A.fN(a1,h,a3,a4)
f=a2.y
e=A.Jn(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Ce(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hZ(a1,d,a3,a4)
o=a2.x
n=A.fN(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.zy(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.kl("Attempted to substitute unexpected RTI kind "+a0))}},
hZ(a,b,c,d){var s,r,q,p,o=b.length,n=A.wr(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fN(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Jo(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.wr(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fN(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Jn(a,b,c,d){var s,r=b.a,q=A.hZ(a,r,c,d),p=b.b,o=A.hZ(a,p,c,d),n=b.c,m=A.Jo(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mJ()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
Ai(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.K6(s)
return a.$S()}return null},
Ka(a,b){var s
if(A.Bz(b))if(a instanceof A.en){s=A.Ai(a)
if(s!=null)return s}return A.cl(a)},
cl(a){if(a instanceof A.L)return A.v(a)
if(Array.isArray(a))return A.C(a)
return A.zS(J.eW(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
v(a){var s=a.$ti
return s!=null?s:A.zS(a)},
zS(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.It(a,s)},
It(a,b){var s=a instanceof A.en?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Hn(v.typeUniverse,s.name)
b.$ccache=r
return r},
K6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.wl(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
Aj(a){return A.ds(A.v(a))},
Ad(a){var s
if(a instanceof A.bk)return a.fZ()
s=a instanceof A.en?A.Ai(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eY(a).a
if(Array.isArray(a))return A.C(a)
return A.cl(a)},
ds(a){var s=a.r
return s==null?a.r=new A.na(a):s},
K3(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.jI(v.typeUniverse,A.Ad(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.Cj(v.typeUniverse,s,A.Ad(q[r]))}return A.jI(v.typeUniverse,s,a)},
cB(a){return A.ds(A.wl(v.typeUniverse,a,!1))},
Is(a){var s=this
s.b=A.Ji(s)
return s.b(a)},
Ji(a){var s,r,q,p,o
if(a===t.K)return A.IC
if(A.fO(a))return A.II
s=a.w
if(s===6)return A.Ik
if(s===1)return A.CX
if(s===7)return A.Ix
r=A.Jg(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fO)){a.f="$i"+q
if(q==="J")return A.IA
if(a===t.m)return A.Iz
return A.IH}}else if(s===10){p=A.JW(a.x,a.y)
o=p==null?A.CX:p
return o==null?A.fK(o):o}return A.Ii},
Jg(a){if(a.w===8){if(a===t.S)return A.b0
if(a===t.i||a===t.J)return A.IB
if(a===t.N)return A.IG
if(a===t.y)return A.bx}return null},
Ir(a){var s=this,r=A.Ih
if(A.fO(s))r=A.HM
else if(s===t.K)r=A.fK
else if(A.i3(s)){r=A.Ij
if(s===t.lo)r=A.zE
else if(s===t.dR)r=A.aq
else if(s===t.k7)r=A.CD
else if(s===t.s7)r=A.zF
else if(s===t.u6)r=A.CE
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.i
else if(s===t.N)r=A.w
else if(s===t.y)r=A.T
else if(s===t.J)r=A.a1
else if(s===t.i)r=A.ax
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
Ii(a){var s=this
if(a==null)return A.i3(s)
return A.DC(v.typeUniverse,A.Ka(a,s),s)},
Ik(a){if(a==null)return!0
return this.x.b(a)},
IH(a){var s,r=this
if(a==null)return A.i3(r)
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eW(a)[s]},
IA(a){var s,r=this
if(a==null)return A.i3(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.eW(a)[s]},
Iz(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.L)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
CW(a){if(typeof a=="object"){if(a instanceof A.L)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ih(a){var s=this
if(a==null){if(A.i3(s))return a}else if(s.b(a))return a
throw A.aR(A.CJ(a,s),new Error())},
Ij(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.CJ(a,s),new Error())},
CJ(a,b){return new A.hK("TypeError: "+A.C8(a,A.bS(b,null)))},
Ds(a,b,c,d){if(A.DC(v.typeUniverse,a,b))return a
throw A.aR(A.Hf("The type argument '"+A.bS(a,null)+"' is not a subtype of the type variable bound '"+A.bS(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
C8(a,b){return A.kN(a)+": type '"+A.bS(A.Ad(a),null)+"' is not a subtype of type '"+b+"'"},
Hf(a){return new A.hK("TypeError: "+a)},
cz(a,b){return new A.hK("TypeError: "+A.C8(a,b))},
Ix(a){var s=this
return s.x.b(a)||A.zm(v.typeUniverse,s).b(a)},
IC(a){return a!=null},
fK(a){if(a!=null)return a
throw A.aR(A.cz(a,"Object"),new Error())},
II(a){return!0},
HM(a){return a},
CX(a){return!1},
bx(a){return!0===a||!1===a},
T(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.cz(a,"bool"),new Error())},
CD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.cz(a,"bool?"),new Error())},
ax(a){if(typeof a=="number")return a
throw A.aR(A.cz(a,"double"),new Error())},
CE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cz(a,"double?"),new Error())},
b0(a){return typeof a=="number"&&Math.floor(a)===a},
i(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.cz(a,"int"),new Error())},
zE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.cz(a,"int?"),new Error())},
IB(a){return typeof a=="number"},
a1(a){if(typeof a=="number")return a
throw A.aR(A.cz(a,"num"),new Error())},
zF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.cz(a,"num?"),new Error())},
IG(a){return typeof a=="string"},
w(a){if(typeof a=="string")return a
throw A.aR(A.cz(a,"String"),new Error())},
aq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.cz(a,"String?"),new Error())},
b(a){if(A.CW(a))return a
throw A.aR(A.cz(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.CW(a))return a
throw A.aR(A.cz(a,"JSObject?"),new Error())},
De(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bS(a[q],b)
return s},
J3(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.De(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bS(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
CN(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bS(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bS(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bS(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bS(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bS(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bS(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bS(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bS(a.x,b)+">"
if(l===8){p=A.Jq(a.x)
o=a.y
return o.length>0?p+("<"+A.De(o,b)+">"):p}if(l===10)return A.J3(a,b)
if(l===11)return A.CN(a,b,null)
if(l===12)return A.CN(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Jq(a){var s=A.DN(a)
if(s!=null)return s
return"minified:"+a},
Ho(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Hn(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.wl(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jH(a,5,"#")
q=A.wr(s)
for(p=0;p<s;++p)q[p]=r
o=A.jG(a,b,q)
n[b]=o
return o}else return m},
Hm(a,b){return A.Cr(a.tR,b)},
Hl(a,b){return A.Cr(a.eT,b)},
wl(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Ci(a,null,b,!1)
r.set(b,s)
return s},
jI(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Ci(a,b,c,!0)
q.set(c,r)
return r},
Cj(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.zx(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Ci(a,b,c,d){return A.Hb(A.H5(a,b,c,d))},
eN(a,b){b.a=A.Ir
b.b=A.Is
return b},
jH(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cS(null,null)
s.w=b
s.as=c
r=A.eN(a,s)
a.eC.set(c,r)
return r},
Cg(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Hj(a,b,r,c)
a.eC.set(r,s)
return s},
Hj(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fO(b))if(!(b===t.c||b===t.E))if(s!==6)r=s===7&&A.i3(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cS(null,null)
q.w=6
q.x=b
q.as=c
return A.eN(a,q)},
Cf(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Hh(a,b,r,c)
a.eC.set(r,s)
return s},
Hh(a,b,c,d){var s,r
if(d){s=b.w
if(A.fO(b)||b===t.K)return b
else if(s===1)return A.jG(a,"aT",[b])
else if(b===t.c||b===t.E)return t.eZ}r=new A.cS(null,null)
r.w=7
r.x=b
r.as=c
return A.eN(a,r)},
Hk(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cS(null,null)
s.w=13
s.x=b
s.as=q
r=A.eN(a,s)
a.eC.set(q,r)
return r},
jF(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Hg(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jG(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jF(c)+">"
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
zx(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jF(r)+">")
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
Ch(a,b,c){var s,r,q="+"+(b+"("+A.jF(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cS(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eN(a,s)
a.eC.set(q,r)
return r},
Ce(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jF(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jF(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Hg(i)+"}"}r=n+(g+")")
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
zy(a,b,c,d){var s,r=b.as+("<"+A.jF(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Hi(a,b,c,r,d)
a.eC.set(r,s)
return s},
Hi(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.wr(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fN(a,b,r,0)
m=A.hZ(a,c,r,0)
return A.zy(a,n,m,c!==m)}}l=new A.cS(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eN(a,l)},
H5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Hb(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.H7(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Cb(a,r,l,k,!1)
else if(q===46)r=A.Cb(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fF(a.u,a.e,k.pop()))
break
case 94:k.push(A.Hk(a.u,k.pop()))
break
case 35:k.push(A.jH(a.u,5,"#"))
break
case 64:k.push(A.jH(a.u,2,"@"))
break
case 126:k.push(A.jH(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.H9(a,k)
break
case 38:A.H8(a,k)
break
case 63:p=a.u
k.push(A.Cg(p,A.fF(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Cf(p,A.fF(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.H6(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Cc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Hc(a.u,a.e,o)
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
H7(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Cb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ho(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.Gc(o)+'"')
d.push(A.jI(s,o,n))}else d.push(p)
return m},
H9(a,b){var s,r=a.u,q=A.Ca(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jG(r,p,q))
else{s=A.fF(r,a.e,p)
switch(s.w){case 11:b.push(A.zy(r,s,q,a.n))
break
default:b.push(A.zx(r,s,q))
break}}},
H6(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Ca(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fF(p,a.e,o)
q=new A.mJ()
q.a=s
q.b=n
q.c=m
b.push(A.Ce(p,r,q))
return
case-4:b.push(A.Ch(p,b.pop(),s))
return
default:throw A.a(A.kl("Unexpected state under `()`: "+A.y(o)))}},
H8(a,b){var s=b.pop()
if(0===s){b.push(A.jH(a.u,1,"0&"))
return}if(1===s){b.push(A.jH(a.u,4,"1&"))
return}throw A.a(A.kl("Unexpected extended operation "+A.y(s)))},
Ca(a,b){var s=b.splice(a.p)
A.Cc(a.u,a.e,s)
a.p=b.pop()
return s},
fF(a,b,c){if(typeof c=="string")return A.jG(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Ha(a,b,c)}else return c},
Cc(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fF(a,b,c[s])},
Hc(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fF(a,b,c[s])},
Ha(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.kl("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.kl("Bad index "+c+" for "+b.t(0)))},
DC(a,b,c){var s,r=b.d
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
return A.b5(a,A.zm(a,b),c,d,e)}if(s===6)return A.b5(a,p,c,d,e)&&A.b5(a,b.x,c,d,e)
if(q===7){if(A.b5(a,b,c,d.x,e))return!0
return A.b5(a,b,c,A.zm(a,d),e)}if(q===6)return A.b5(a,b,c,p,e)||A.b5(a,b,c,d.x,e)
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
if(!A.b5(a,j,c,i,e)||!A.b5(a,i,e,j,c))return!1}return A.CV(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.CV(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Iy(a,b,c,d,e)}if(o&&q===10)return A.ID(a,b,c,d,e)
return!1},
CV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Iy(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jI(a,b,r[o])
return A.CB(a,p,null,c,d.y,e)}return A.CB(a,b.y,null,c,d.y,e)},
CB(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b5(a,b[s],d,e[s],f))return!1
return!0},
ID(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b5(a,r[s],c,q[s],e))return!1
return!0},
i3(a){var s=a.w,r=!0
if(!(a===t.c||a===t.E))if(!A.fO(a))if(s!==6)r=s===7&&A.i3(a.x)
return r},
fO(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Cr(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
wr(a){return a>0?new Array(a):v.typeUniverse.sEA},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mJ:function mJ(){this.c=this.b=this.a=null},
na:function na(a){this.a=a},
mH:function mH(){},
hK:function hK(a){this.a=a},
GY(){var s,r,q
if(self.scheduleImmediate!=null)return A.JI()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.i1(new A.vv(s),1)).observe(r,{childList:true})
return new A.vu(s,r,q)}else if(self.setImmediate!=null)return A.JJ()
return A.JK()},
GZ(a){self.scheduleImmediate(A.i1(new A.vw(t.O.a(a)),0))},
H_(a){self.setImmediate(A.i1(new A.vx(t.O.a(a)),0))},
H0(a){A.zq(B.fI,t.O.a(a))},
zq(a,b){return A.He(a.a/1000|0,b)},
He(a,b){var s=new A.wi()
s.k8(a,b)
return s},
aL(a){return new A.mx(new A.as($.ar,a.i("as<0>")),a.i("mx<0>"))},
aK(a,b){a.$2(0,null)
b.b=!0
return b.a},
a6(a,b){A.HP(a,b)},
aJ(a,b){b.ek(a)},
aI(a,b){b.el(A.ah(a),A.cZ(a))},
HP(a,b){var s,r,q=new A.wx(b),p=new A.wy(b)
if(a instanceof A.as)a.hr(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.eY(q,p,s)
else{r=new A.as($.ar,t.hR)
r.a=8
r.c=a
r.hr(q,p,s)}}},
aM(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.iK(new A.y0(s),t.H,t.S,t.z)},
Cd(a,b,c){return 0},
nY(a){var s
if(t.yt.b(a)){s=a.gc6()
if(s!=null)return s}return B.aJ},
AX(a){var s
a.a(null)
s=new A.as($.ar,a.i("as<0>"))
s.dW(null)
return s},
Fe(a,b,c){var s=new A.as($.ar,c.i("as<0>"))
A.BJ(a,new A.pC(b,s,c))
return s},
pD(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ar,b.i("as<J<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.pF(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gq()
q=i.b
r.eY(new A.pE(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cP(A.c([],b.i("x<0>")))
return n}i.a=A.d9(n,null,!1,b.i("0?"))}catch(l){p=A.ah(l)
o=A.cZ(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.zT(m,k)
m=new A.bn(m,k==null?A.nY(m):k)
n.cM(m)
return n}else{i.d=p
i.c=o}}return f},
zT(a,b){if($.ar===B.C)return null
return null},
Iu(a,b){if($.ar!==B.C)A.zT(a,b)
if(b==null)if(t.yt.b(a)){b=a.gc6()
if(b==null){A.Bs(a,B.aJ)
b=B.aJ}}else b=B.aJ
else if(t.yt.b(a))A.Bs(a,b)
return new A.bn(a,b)},
H1(a,b){var s=new A.as($.ar,b.i("as<0>"))
b.a(a)
s.a=8
s.c=a
return s},
vF(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Gp()
b.cM(new A.bn(new A.cG(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.h9(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.cd()
b.cO(o.a)
A.fA(b,p)
return}b.a^=2
A.nv(null,null,b.b,t.O.a(new A.vG(o,b)))},
fA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.A5(m.a,m.b)}return}q.a=b
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
A.A5(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.vK(q,d,n).$0()
else if(o){if((c&1)!==0)new A.vJ(q,j).$0()}else if((c&2)!==0)new A.vI(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("aT<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cX(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.vF(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cX(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
D8(a,b){var s
if(t.nW.b(a))return b.iK(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.a(A.a7(a,"onError",u.c))},
IS(){var s,r
for(s=$.hV;s!=null;s=$.hV){$.k2=null
r=s.b
$.hV=r
if(r==null)$.k1=null
s.a.$0()}},
Jl(){$.zU=!0
try{A.IS()}finally{$.k2=null
$.zU=!1
if($.hV!=null)$.Au().$1(A.Dq())}},
Dh(a){var s=new A.my(a),r=$.k1
if(r==null){$.hV=$.k1=s
if(!$.zU)$.Au().$1(A.Dq())}else $.k1=r.b=s},
Jd(a){var s,r,q,p=$.hV
if(p==null){A.Dh(a)
$.k2=$.k1
return}s=new A.my(a)
r=$.k2
if(r==null){s.b=p
$.hV=$.k2=s}else{q=r.b
s.b=q
$.k2=r.b=s
if(q==null)$.k1=s}},
KR(a,b){A.e7(a,"stream",t.K)
return new A.n5(b.i("n5<0>"))},
BJ(a,b){var s=$.ar
if(s===B.C)return A.zq(a,t.O.a(b))
return A.zq(a,t.O.a(s.hJ(b)))},
A5(a,b){A.Jd(new A.xK(a,b))},
Dd(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
Ja(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
J9(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
nv(a,b,c,d){t.O.a(d)
if(B.C!==c){d=c.hJ(d)
d=d}A.Dh(d)},
vv:function vv(a){this.a=a},
vu:function vu(a,b,c){this.a=a
this.b=b
this.c=c},
vw:function vw(a){this.a=a},
vx:function vx(a){this.a=a},
wi:function wi(){},
wj:function wj(a,b){this.a=a
this.b=b},
mx:function mx(a,b){this.a=a
this.b=!1
this.$ti=b},
wx:function wx(a){this.a=a},
wy:function wy(a){this.a=a},
y0:function y0(a){this.a=a},
ch:function ch(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bI:function bI(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b){this.a=a
this.b=b},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pE:function pE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mB:function mB(){},
ji:function ji(a,b){this.a=a
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
vC:function vC(a,b){this.a=a
this.b=b},
vH:function vH(a,b){this.a=a
this.b=b},
vG:function vG(a,b){this.a=a
this.b=b},
vE:function vE(a,b){this.a=a
this.b=b},
vD:function vD(a,b){this.a=a
this.b=b},
vK:function vK(a,b,c){this.a=a
this.b=b
this.c=c},
vL:function vL(a,b){this.a=a
this.b=b},
vM:function vM(a){this.a=a},
vJ:function vJ(a,b){this.a=a
this.b=b},
vI:function vI(a,b){this.a=a
this.b=b},
my:function my(a){this.a=a
this.b=null},
n5:function n5(a){this.$ti=a},
jQ:function jQ(){},
mZ:function mZ(){},
wg:function wg(a,b){this.a=a
this.b=b},
xK:function xK(a,b){this.a=a
this.b=b},
C9(a,b){var s=a[b]
return s===a?null:s},
zv(a,b,c){if(c==null)a[b]=a
else a[b]=c},
zu(){var s=Object.create(null)
A.zv(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Bd(a,b){return new A.cr(a.i("@<0>").S(b).i("cr<1,2>"))},
E(a,b,c){return b.i("@<0>").S(c).i("zc<1,2>").a(A.Du(a,new A.cr(b.i("@<0>").S(c).i("cr<1,2>"))))},
n(a,b){return new A.cr(a.i("@<0>").S(b).i("cr<1,2>"))},
zd(a){return new A.cy(a.i("cy<0>"))},
a_(a){return new A.cy(a.i("cy<0>"))},
aF(a,b){return b.i("Be<0>").a(A.K4(a,new A.cy(b.i("cy<0>"))))},
zw(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fE(a,b,c){var s=new A.fD(a,b,c.i("fD<0>"))
s.c=a.e
return s},
bK(a,b){var s=J.O(a)
if(s.m())return s.gq()
return null},
aZ(a,b,c){var s=A.Bd(b,c)
a.aK(0,new A.r1(s,b,c))
return s},
hh(a,b,c){var s=A.Bd(b,c)
s.L(0,a)
return s},
hi(a,b){var s,r=A.zd(b)
for(s=J.O(a);s.m();)r.k(0,b.a(s.gq()))
return r},
fc(a,b){var s=A.zd(b)
s.L(0,a)
return s},
zf(a){var s,r
if(A.Al(a))return"{...}"
s=new A.bE("")
try{r={}
B.a.k($.ck,a)
s.a+="{"
r.a=!0
a.aK(0,new A.r4(r,s))
s.a+="}"}finally{if(0>=$.ck.length)return A.d($.ck,-1)
$.ck.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Hp(){throw A.a(A.bu("Cannot change an unmodifiable set"))},
jn:function jn(){},
vO:function vO(a){this.a=a},
jp:function jp(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fB:function fB(a,b){this.a=a
this.$ti=b},
jo:function jo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mP:function mP(a){this.a=a
this.c=this.b=null},
fD:function fD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(){},
ag:function ag(){},
r3:function r3(a){this.a=a},
r4:function r4(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.$ti=b},
jr:function jr(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jJ:function jJ(){},
hj:function hj(){},
eC:function eC(a,b){this.a=a
this.$ti=b},
dg:function dg(){},
jD:function jD(){},
nb:function nb(){},
hC:function hC(a,b){this.a=a
this.$ti=b},
hL:function hL(){},
jK:function jK(){},
IX(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.M(String(s),null,null)
throw A.a(q)}q=A.x0(p)
return q},
x0(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mN(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.x0(a[s])
return a},
HG(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.E6()
else s=new Uint8Array(o)
for(r=J.aQ(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
HF(a,b,c,d){var s=a?$.E5():$.E4()
if(s==null)return null
if(0===c&&d===b.length)return A.Cq(s,b)
return A.Cq(s,b.subarray(c,d))},
Cq(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
AI(a,b,c,d,e,f){if(B.d.O(f,4)!==0)throw A.a(A.M("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.M("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.M("Invalid base64 padding, more than two '=' characters",a,b))},
Ba(a,b,c){return new A.iA(a,b)},
I5(a){return a.C()},
H2(a,b){return new A.vR(a,[],A.JV())},
H3(a,b,c){var s,r=new A.bE(""),q=A.H2(r,b)
q.dM(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
HH(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
mN:function mN(a,b){this.a=a
this.b=b
this.c=null},
vQ:function vQ(a){this.a=a},
mO:function mO(a){this.a=a},
wp:function wp(){},
wo:function wo(){},
ki:function ki(){},
wk:function wk(){},
kj:function kj(a,b){this.a=a
this.b=b},
kp:function kp(){},
oE:function oE(){},
eo:function eo(){},
kA:function kA(){},
kM:function kM(){},
iA:function iA(a,b){this.a=a
this.b=b},
lh:function lh(a,b){this.a=a
this.b=b},
lg:function lg(){},
qT:function qT(a){this.b=a},
qS:function qS(a){this.a=a},
vS:function vS(){},
vT:function vT(a,b){this.a=a
this.b=b},
vR:function vR(a,b,c){this.c=a
this.a=b
this.b=c},
md:function md(){},
uU:function uU(){},
wq:function wq(a){this.b=0
this.c=a},
uT:function uT(a){this.a=a},
wn:function wn(a){this.a=a
this.b=16
this.c=0},
DB(a){var s=A.dM(a,null)
if(s!=null)return s
throw A.a(A.M(a,null,null))},
nz(a){var s=A.fh(a)
if(s!=null)return s
throw A.a(A.M("Invalid double",a,null))},
Fa(a,b){a=A.aR(a,new Error())
if(a==null)a=A.fK(a)
a.stack=b.t(0)
throw a},
d9(a,b,c,d){var s,r=c?J.B5(a,d):J.B4(a,d)
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
ab(a,b){var s=A.aG(a,!1,b)
s.$flags=3
return s},
zp(a,b,c){var s,r
A.lN(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.a(A.b_(c,b,null,"end",null))
if(s===0)return""}r=A.Gs(a,b,c)
return r},
Gs(a,b,c){var s=a.length
if(b>=s)return""
return A.G1(a,b,c==null||c>s?s:c)},
iX(a){return new A.iy(a,A.B8(a,!1,!0,!1,!1,""))},
zo(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gq())
while(s.m())}else{a+=A.y(s.gq())
while(s.m())a=a+c+A.y(s.gq())}return a},
dW(){var s,r,q=A.FT()
if(q==null)throw A.a(A.bu("'Uri.base' is not supported"))
s=$.BO
if(s!=null&&q===$.BN)return s
r=A.Gy(q)
$.BO=r
$.BN=q
return r},
Gp(){return A.cZ(new Error())},
ER(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
AQ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
kC(a){if(a>=10)return""+a
return"0"+a},
F9(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.a(A.a7(b,"name","No enum value with that name"))},
kN(a){if(typeof a=="number"||A.bx(a)||a==null)return J.c5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Br(a)},
Fb(a,b){A.e7(a,"error",t.K)
A.e7(b,"stackTrace",t.l)
A.Fa(a,b)},
kl(a){return new A.kk(a)},
o(a,b){return new A.cG(!1,null,b,a)},
a7(a,b,c){return new A.cG(!0,a,b,c)},
Bt(a){var s=null
return new A.hq(s,s,!1,s,s,a)},
Bu(a,b){return new A.hq(null,null,!0,a,b,"Value not in range")},
b_(a,b,c,d,e){return new A.hq(b,c,!0,a,d,"Invalid value")},
fj(a,b,c){if(0>a||a>c)throw A.a(A.b_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.b_(b,a,c,"end",null))
return b}return c},
lN(a,b){if(a<0)throw A.a(A.b_(a,0,null,b,null))
return a},
qx(a,b,c,d){return new A.l7(b,!0,a,d,"Index out of range")},
bu(a){return new A.jb(a)},
BL(a){return new A.m8(a)},
j(a){return new A.hx(a)},
aD(a){return new A.kx(a)},
M(a,b,c){return new A.A(a,b,c)},
Fw(a,b,c){var s,r
if(A.Al(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.k($.ck,a)
try{A.IJ(a,s)}finally{if(0>=$.ck.length)return A.d($.ck,-1)
$.ck.pop()}r=A.zo(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
z8(a,b,c){var s,r
if(A.Al(a))return b+"..."+c
s=new A.bE(b)
B.a.k($.ck,a)
try{r=s
r.a=A.zo(r.a,a,", ")}finally{if(0>=$.ck.length)return A.d($.ck,-1)
$.ck.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
IJ(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
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
zg(a,b,c){var s=A.n(b,c)
s.m2(a)
return s},
cP(a,b,c,d,e,f){var s
if(B.h===c){s=J.aN(a)
b=J.aN(b)
return A.ja(A.b4(A.b4($.i4(),s),b))}if(B.h===d){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
return A.ja(A.b4(A.b4(A.b4($.i4(),s),b),c))}if(B.h===e){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
return A.ja(A.b4(A.b4(A.b4(A.b4($.i4(),s),b),c),d))}if(B.h===f){s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
e=J.aN(e)
return A.ja(A.b4(A.b4(A.b4(A.b4(A.b4($.i4(),s),b),c),d),e))}s=J.aN(a)
b=J.aN(b)
c=J.aN(c)
d=J.aN(d)
e=J.aN(e)
f=J.aN(f)
f=A.ja(A.b4(A.b4(A.b4(A.b4(A.b4(A.b4($.i4(),s),b),c),d),e),f))
return f},
FN(a){var s,r,q=$.i4()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r)q=A.b4(q,J.aN(a[r]))
return A.ja(q)},
fo(a,b){return new A.hC(A.fc(a,b),b.i("hC<0>"))},
Gy(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.BM(a4<a4?B.c.J(a5,0,a4):a5,5,a3).giT()
else if(s===32)return A.BM(B.c.J(a5,5,a4),0,a3).giT()}r=A.d9(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.Dg(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.Dg(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.c.au(a5,"\\",n))if(p>0)h=B.c.au(a5,"\\",p-1)||B.c.au(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.au(a5,"..",n)))h=m>n+2&&B.c.au(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.au(a5,"file",0)){if(p<=0){if(!B.c.au(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.J(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.c1(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.au(a5,"http",0)){if(i&&o+3===n&&B.c.au(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.c1(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.au(a5,"https",0)){if(i&&o+4===n&&B.c.au(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.c1(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.n2(a4<a5.length?B.c.J(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Hz(a5,0,q)
else{if(q===0)A.hM(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.HA(a5,c,p-1):""
a=A.Hv(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dM(B.c.J(a5,i,n),a3)
d=A.Hx(a0==null?A.f(A.M("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Hw(a5,n,m,a3,j,a!=null)
a2=m<l?A.Hy(a5,m+1,l,a3):a3
return A.Hq(j,b,a,d,a1,a2,l<a4?A.Hu(a5,l+1,a4):a3)},
BQ(a){var s=t.N
return B.a.b6(A.c(a.split("&"),t.s),A.n(s,s),new A.uS(B.cy),t.G)},
mc(a,b,c){throw A.a(A.M("Illegal IPv4 address, "+a,b,c))},
Gv(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.mc("each part must be in the range 0..255",a,r)}A.mc("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.mc(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aW(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.mc(j,a,q)
p=l}A.mc("IPv4 address should contain exactly 4 parts",a,q)},
Gw(a,b,c){var s
if(b===c)throw A.a(A.M("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.Gx(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.BP(a,b,c)
return!0},
Gx(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
BP(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uR(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Gv(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.ef(l,8)
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
B.a4.jj(s,a0,16,s,a)
B.a4.nD(s,a,a0,0)}}return s},
Hq(a,b,c,d,e,f,g){return new A.jL(a,b,c,d,e,f,g)},
Ck(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hM(a,b,c){throw A.a(A.M(c,a,b))},
Hx(a,b){var s=A.Ck(b)
if(a===s)return null
return a},
Hv(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.hM(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Hs(a,q,r)
if(o<r){n=o+1
p=A.Cp(a,B.c.au(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Gw(a,q,o)
l=B.c.J(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.c.ds(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Cp(a,B.c.au(a,"25",n)?o+3:n,c,"%25")}else p=""
A.BP(a,b,o)
return"["+B.c.J(a,b,o)+p+"]"}}return A.HC(a,b,c)},
Hs(a,b,c){var s=B.c.ds(a,"%",b)
return s>=b&&s<c?s:c},
Cp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bE(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.zA(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bE("")
l=h.a+=B.c.J(a,q,r)
if(m)n=B.c.J(a,r,r+3)
else if(n==="%")A.hM(a,r,"ZoneID should not contain % anymore")
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
l=A.zz(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.J(a,b,c)
if(q<c){i=B.c.J(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
HC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.zA(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.hM(a,r,"Invalid character")
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
j=A.zz(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.J(a,b,c)
if(q<c){k=B.c.J(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Hz(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.Cm(a.charCodeAt(b)))A.hM(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.hM(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.J(a,b,c)
return A.Hr(q?a.toLowerCase():a)},
Hr(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HA(a,b,c){return A.jM(a,b,c,16,!1,!1)},
Hw(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.jM(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.V(q,"/"))q="/"+q
return A.HB(q,e,f)},
HB(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.V(a,"/")&&!B.c.V(a,"\\"))return A.HD(a,!s||c)
return A.HE(a)},
Hy(a,b,c,d){return A.jM(a,b,c,256,!0,!1)},
Hu(a,b,c){return A.jM(a,b,c,256,!0,!1)},
zA(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.yd(r)
o=A.yd(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aA(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.J(a,b,b+3).toUpperCase()
return null},
zz(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.lI(a,6*p)&63|q
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
o+=3}}return A.zp(s,0,null)},
jM(a,b,c,d,e,f){var s=A.Co(a,b,c,d,e,f)
return s==null?B.c.J(a,b,c):s},
Co(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.zA(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.hM(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.zz(n)}if(o==null){o=new A.bE("")
k=o}else k=o
k.a=(k.a+=B.c.J(a,p,q))+l
if(typeof m!=="number")return A.ye(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.J(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
Cn(a){if(B.c.V(a,"."))return!0
return B.c.bE(a,"/.")!==-1},
HE(a){var s,r,q,p,o,n,m
if(!A.Cn(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.W(s,"/")},
HD(a,b){var s,r,q,p,o,n
if(!A.Cn(a))return!b?A.Cl(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.ga7(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.Cl(s[0]))}return B.a.W(s,"/")},
Cl(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.Cm(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.J(a,0,s)+"%3A"+B.c.aQ(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Ht(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.o("Invalid URL encoding",null))}}return r},
zB(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cy===d)return B.c.J(a,b,c)
else p=new A.dx(B.c.J(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.o("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.a(A.o("Truncated URI",null))
B.a.k(p,A.Ht(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.L.a(p)
return B.oJ.bB(p)},
Cm(a){var s=a|32
return 97<=s&&s<=122},
BM(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.M(k,a,r))}}if(q<0&&r>b)throw A.a(A.M(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.ga7(j)
if(p!==44||r!==n+7||!B.c.au(a,"base64",n+1))throw A.a(A.M("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.f7.ob(a,m,s)
else{l=A.Co(a,m,s,256,!0,!1)
if(l!=null)a=B.c.c1(a,m,s,l)}return new A.uQ(a,j,c)},
Dg(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
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
mG:function mG(){},
at:function at(){},
kk:function kk(a){this.a=a},
dU:function dU(){},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
l7:function l7(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jb:function jb(a){this.a=a},
m8:function m8(a){this.a=a},
hx:function hx(a){this.a=a},
kx:function kx(a){this.a=a},
ly:function ly(){},
j6:function j6(){},
vA:function vA(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(){},
L:function L(){},
n8:function n8(){},
uv:function uv(){this.b=this.a=0},
bE:function bE(a){this.a=a},
uS:function uS(a){this.a=a},
uR:function uR(a){this.a=a},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
uQ:function uQ(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function n2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
mC:function mC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rA:function rA(a){this.a=a},
CO(a){var s
if(typeof a=="function")throw A.a(A.o("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.HT,a)
s[$.z0()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.a(A.o("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.HU,a)
s[$.z0()]=a
return s},
HT(a){return t.BO.a(a).$0()},
HU(a,b,c){t.BO.a(a)
if(A.i(c)>=1)return a.$1(b)
return a.$0()},
nB(a,b,c){return c.a(a[b])},
CP(a,b){return a[b]},
aV(a,b,c,d){return d.a(a[b].apply(a,c))},
av(a,b){var s=new A.as($.ar,b.i("as<0>")),r=new A.ji(s,b.i("ji<0>"))
a.then(A.i1(new A.yO(r,b),1),A.i1(new A.yP(r),1))
return s},
D_(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
i2(a){if(A.D_(a))return a
return new A.y6(new A.jp(t.BT)).$1(a)},
yO:function yO(a,b){this.a=a
this.b=b},
yP:function yP(a){this.a=a},
y6:function y6(a){this.a=a},
G3(a){var s
if(a==null)s=B.b6
else{s=new A.eL()
s.c9(a)}return s},
mM:function mM(){},
eL:function eL(){this.b=this.a=0},
kH:function kH(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
Gk(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aG(b3,!0,b1)
B.a.k(b2,128)
while(B.d.O(b2.length,64)!==56)B.a.k(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.k(b2,B.d.ju(s,r)&255)
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
B.a.l(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.k5[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.H(A.c([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.ub()),t.dH).o2(0)},
ub:function ub(){},
me:function me(a,b){this.a=a
this.b=b},
FG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.p(h.w,b))throw A.a(A.a7(b,"lod","package does not declare this LOD"))
s=A.c([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.u)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.j("part "+r.a+" has no "+b+" payload")
throw A.a(h)}k=q
j=m.h(0,k)
p=j==null?A.f(A.j("model package payload is missing: "+k)):j
J.e9(s,a.n9(new Uint8Array(A.S(p))))}return new A.ri(a,s)}catch(i){for(h=s,n=A.C(h).i("bM<1>"),h=new A.bM(h,n),h=new A.al(h,h.gu(0),n.i("al<a0.E>")),n=n.i("a0.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aL(o)}throw i}},
ri:function ri(a,b){this.a=a
this.b=b
this.c=!1},
lo:function lo(a){this.e=a},
rt:function rt(a,b){this.a=a
this.b=b},
rk:function rk(){},
rl:function rl(){},
rm:function rm(){},
FH(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.aa(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.a(B.i3)
s=a.h(0,"parts")
if(!t.j.b(s)||J.ke(s))throw A.a(B.hO)
r=A.xI(a,"assetId")
q=A.xI(a,"packageHash")
p=A.xI(a,"sourceFormat")
o=A.c([],t.w4)
for(n=J.O(s),m=t.P;n.m();)o.push(A.FI(m.a(n.gq())))
n=A.Ac(a.h(0,"materials"))
m=A.Ac(a.h(0,"textures"))
l=A.Ac(a.h(0,"lods"))
k=A.D0(a.h(0,"combinedBounds"))
j=A.Jh(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bv(0,new A.ro(),h,h)
i=h}return new A.rn(r,q,p,o,n,m,l,k,j,i==null?B.aQ:i)},
FI(a){var s,r,q=A.xI(a,"id"),p=A.zE(a.h(0,"materialSlot"))
if(p==null)p=A.f(B.h6)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bv(0,new A.rs(),r,r)
s=r}return new A.fe(q,p,s==null?B.aQ:s)},
xI(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.a(A.M(b+" is required",null,null))
return s},
IE(a){if(a.length===0||B.c.V(a,"/")||B.c.p(a,"\\"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.xx())},
Ac(a){var s,r
if(a==null)return B.n
if(!t.j.b(a)||J.kd(a,new A.xR()))throw A.a(B.hn)
s=A.c([],t.s)
for(r=J.O(a);r.m();)s.push(A.w(r.gq()))
return s},
D0(a){var s,r
if(a==null)return B.bv
if(!t.j.b(a)||J.kd(a,new A.xA()))throw A.a(B.iE)
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gq()))
return s},
Jh(a){var s,r,q,p
if(a==null)return B.lu
if(!t.f.b(a))throw A.a(B.hJ)
if(a.ga3().M(0,new A.xP()))throw A.a(B.i4)
s=A.n(t.N,t.dd)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gq()
p=q.a
if(typeof p=="string")s.l(0,p,A.D0(q.b))}return s},
rn:function rn(a,b,c,d,e,f,g,h,i,j){var _=this
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
ro:function ro(){},
rq:function rq(){},
rr:function rr(){},
rp:function rp(){},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
rs:function rs(){},
xx:function xx(){},
xR:function xR(){},
xA:function xA(){},
xP:function xP(){},
DP(a){var s,r,q,p,o,n,m=A.c([],t.t9),l=new A.yZ(m)
for(s=a.A(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.a_(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){o=s[q]
n=o.a
if(!p.k(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.K("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
KA(a,b){var s,r,q,p,o,n=A.c([],t.t9),m=new A.z_(n),l=A.a_(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)l.L(0,s[q].c.gam())
for(s=A.fE(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.K(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bW(b,b.r,b.e,A.v(b).i("bW<1>"));s.m();){r=s.d
if(!l.p(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bf(o,".fbx")||B.c.bf(o,".obj")||B.c.bf(o,".mtl")||B.c.bf(o,".gltf")||B.c.bf(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
yZ:function yZ(a){this.a=a},
z_:function z_(a){this.a=a},
td:function td(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
te:function te(){},
fi:function fi(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(a,b){this.a=a
this.b=b
this.c=null},
h_:function h_(a,b){this.a=a
this.b=b},
oT:function oT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oV:function oV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oU:function oU(){var _=this
_.c=_.b=_.a=null
_.d=0},
lE:function lE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
AN(a,b,c,d,e,f,g,h){return new A.ib(g,f,h,b,d,e,c,a)},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=$},
up:function up(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
kV:function kV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
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
kW:function kW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
et(a,b){return new A.l4(a,b)},
dP:function dP(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a,b){this.a=a
this.b=b},
l4:function l4(a,b){this.a=a
this.b=b},
Ko(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.k(f,new A.jy(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Y(f,new A.yQ())
s=A.c([],t.cv)
for(r=A.hz(f,0,A.e7(b,"count",t.S),t.mn),q=r.$ti,r=new A.al(r,r.gu(0),q.i("al<a0.E>")),q=q.i("a0.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
lD:function lD(a,b,c,d,e){var _=this
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
yQ:function yQ(){},
ll(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.bX(h,a,p,o,n,g,k,j,m,i,e,d,q,r,c,b,f,l)},
lm(a,b){if(!isFinite(b)||b<0||b>1)throw A.a(A.o("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
fS:function fS(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
FE(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.Dd.b(a)){s=a
break A}s=A.f(A.o("MeshData.indices must be Uint16List or Uint32List, got "+J.eY(a).t(0),null))}return s},
cT:function cT(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
uV:function uV(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rb:function rb(){},
rc:function rc(){},
rd:function rd(){},
kD:function kD(){},
iM(a){var s,r,q="volumetric",p=t.N,o=A.aF(["sceneColor","present"],p),n=a.a.b
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
return new A.rC(A.fo(o,p),r)},
rC:function rC(a,b){this.a=a
this.b=b},
rD:function rD(){},
ht:function ht(a,b){this.a=a
this.b=b},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
h6:function h6(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
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
m5:function m5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pz:function pz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
FC(a){var s,r,q
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=B.bG;s.m();){switch(s.d.a){case 0:q=B.bG
break
case 1:q=B.dA
break
case 2:q=B.dB
break
case 3:q=B.dC
break
default:q=null}if(A.Bh(q)>A.Bh(r))r=q}return r},
Bh(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
Dm(a){return new A.bI(A.Jp(a),t.EF)},
Jp(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$Dm(b,c,d){if(c===1){p.push(d)
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
c9:function c9(a,b){this.a=a
this.b=b},
r8:function r8(a){this.a=a},
r9:function r9(a){this.a=a},
r6:function r6(a){this.a=a},
r7:function r7(){},
FD(){return new A.ln(new A.de(new A.ra(),A.c([],t.Fy),A.c([],t.t),t.ja))},
ln:function ln(a){this.a=a},
ra:function ra(){},
Dj(a){var s=4
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
I_(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.Dj(o.a)===b)q+=o.c}return q},
FF(a){return new A.re(a,new A.de(new A.rf(),A.c([],t.EM),A.c([],t.t),t.wm),A.n(t.S,t.qt))},
Bi(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.Dd.b(a)){s=a.byteLength
break A}s=A.f(A.o("MeshStore indices must be Uint16List or Uint32List",null))}return s},
ma:function ma(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(){},
rg:function rg(){},
JT(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bF(B.d.f_(r,16),8,"0")+B.c.bF(B.d.f_(q,16),8,"0")},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
rh:function rh(a,b){this.b=a
this.c=b},
rj:function rj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hl:function hl(a,b,c,d,e,f,g,h,i){var _=this
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
dN(a,b){return new A.lL(a,b)},
Dt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.a(A.dN(B.mI,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.jW[q])throw A.a(A.dN(B.mJ,'expected "QMSH", got '+B.f6.n8(B.a4.aj(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.fj(0,null,B.d.ba(a.byteLength,p))
n=J.AB(B.a4.gej(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.a(A.dN(B.mK,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.nH.p(0,k)))throw A.a(A.dN(B.dR,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.a(A.dN(B.mL,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.O(j,3)!==0)throw A.a(A.dN(B.mN,"vertexCount "+j+" is not a multiple of 3"))
h=J.qG(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.M(h,new A.y7()))throw A.a(A.dN(B.mM,"bounds contain a non-finite value: "+A.y(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.a(A.dN(B.dS,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.d(g,q)
g[q]=f}A:{if(14===k){d=B.ai
break A}if(18===k){d=B.p5
break A}if(20===k){d=B.p4
break A}d=A.f(A.dN(B.dR,"no vertex layout for stride "+k))}s=new A.bY(d,g,null,new A.fR(new A.B(h[0],h[1],h[2]),new A.B(h[3],h[4],h[5])))
try{s.A()}catch(e){r=A.ah(e)
d=A.dN(B.dS,"mesh validation failed: "+A.y(r))
throw A.a(d)}return s},
cR:function cR(a,b){this.a=a
this.b=b},
lL:function lL(a,b){this.a=a
this.b=b},
y7:function y7(){},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
uG:function uG(a,b){this.a=a
this.b=b},
uH:function uH(a){this.a=a},
uE:function uE(a,b){this.a=a
this.b=b},
uF:function uF(){},
Gt(a){var s=new A.m7(a,new A.de(new A.uI(),A.c([],t.f2),A.c([],t.t),t.qq),A.n(t.S,t._))
s.d=s.b1($.As())
s.e=s.b1($.Ap())
s.f=s.b1($.Aq())
s.r=s.b1($.Ao())
s.w=s.b1($.Ar())
return s},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
uI:function uI(){},
uJ:function uJ(){},
uL:function uL(){},
uK:function uK(){},
Gn(a,b,c,d,e){var s,r,q
if(c)return B.og
if(d)return B.oa
s=A.BF(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.ok
r=s<0
if(a>=0.2617993877991494)return r?B.eb:B.ol
if(a>=0.10471975511965977)return r?B.eb:B.om
if(a>=-0.014538592669112763)return r?B.oj:B.on
q=a*180/3.141592653589793
if(q>=-6)return r?B.oi:B.oc
if(q>=-12)return r?B.oh:B.od
if(q>=-18)return r?B.ob:B.oe
return B.of},
BG(a,b,c){var s
if(b<=a)return c<a?0:1
s=B.b.n((c-a)/(b-a),0,1)
return s*s*(3-2*s)},
BF(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
bi:function bi(a,b){this.a=a
this.b=b},
ut:function ut(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Kp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.gT(0)
if(!g)throw A.a(A.o("invalid volumetric source selection inputs",null))
s=A.a_(t.N)
r=A.c([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.u)(c),++n){m=c[n]
m.A()
l=m.a
if(!s.k(0,l))throw A.a(A.o("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.BT(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.k(r,new A.jz(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.Y(r,new A.yR())
g=A.c([],t.xL)
for(q=A.hz(r,0,A.e7(a,"count",t.S),t.bG),p=q.$ti,q=new A.al(q,q.gu(0),p.i("al<a0.E>")),p=p.i("a0.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
BT(a,b,c){var s,r,q,p
for(s=[new A.a5("distance",b),new A.a5("referenceDistance",c),new A.a5("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.f(A.o(q.a+" must be finite: "+A.y(p),null))}if(b<0||c<=0||a<=0)throw A.a(A.o("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.n(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
GD(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gT(0))A.f(A.o(c1+c5.t(0),c0))
if(!c3.gT(0))A.f(A.o(c2+c3.t(0),c0))
if(!isFinite(c4))A.f(A.o("rayLength must be finite: "+A.y(c4),c0))
if(!isFinite(c6))A.f(A.o("scatteringCoeff must be finite: "+A.y(c6),c0))
if(!isFinite(0.7))A.f(A.o("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.f(A.o("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbg()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.a(A.o("invalid volumetric source-field inputs",c0))
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
a7=A.BT(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.f(A.o(c1+c5.t(0),c0))
if(!(n&&m&&l))A.f(A.o(c2+c3.t(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.f(A.o("lightPos must be finite: "+a.t(0),c0))
if(!isFinite(a8))A.f(A.o("lightIntensity must be finite: "+A.y(a8),c0))
if(k)A.f(A.o("rayDirection must be nonzero",c0))
if(o)A.f(A.o("rayLength must be >= 0",c0))
if(a8<0||g)A.f(A.o("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.ga8()
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
f=new A.B(f.a+a.a*b9,f.b+a.b*b9,f.c+a.c*b9)
a6=b9/Math.max(1e-8,Math.sqrt(a6))
e=new A.B(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.v8(f,e.gbg()<1e-8?B.v:e.ga8(),d)},
cv:function cv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yR:function yR(){},
v8:function v8(a,b,c){this.a=a
this.b=b
this.c=c},
JM(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.hr),i=A.n(t.N,t.S)
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
kR:function kR(a){this.a=a},
ps:function ps(){},
pt:function pt(a){this.a=a},
pq:function pq(a){this.a=a},
pr:function pr(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b
this.c=0},
H4(){return new A.hF()},
py:function py(a){this.a=a
this.b=null},
hF:function hF(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
zj(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
rG:function rG(){},
rH:function rH(){},
cq:function cq(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b){this.a=a
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
hs:function hs(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b){var _=this
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
tf:function tf(){},
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
th:function th(a,b){this.a=a
this.b=b},
tm:function tm(){},
tl:function tl(){},
tk:function tk(){},
tj:function tj(a){this.a=a},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
tg:function tg(a,b){this.a=a
this.b=b},
G9(a){return new A.iY(a,new A.de(new A.tn(),A.c([],t.w_),A.c([],t.t),t.tc))},
mL:function mL(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b){this.a=a
this.b=b},
tn:function tn(){},
xk(a,b){return A.Ia(a,b)},
Ia(a,b){var s=0,r=A.aL(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xk=A.aM(function(c,a0){if(c===1)return A.aI(a0,r)
for(;;)switch(s){case 0:a.cb()
if(a.at!=null)throw A.a(A.j("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.cg(b)
h=p.a.d
if(!(h.a.gu(0)!==0||h.b.gu(0)!==0||h.c.gu(0)!==0||h.d.gu(0)!==0||h.e||h.f)&&!h.r){i.ci(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.dC(b)
n=new A.lJ(a.a,A.n(t.N,t.CH))
l=A.CK(a,n,b,o.a.b.a)
m=l.a
i.ci(p)
h=a.x
g=o
if(h.e)A.f(A.j("GPU resource adapter is disposed"))
h.fC(g)
f=h.c
h.b.ci(g.a)
h.c=g
h.d=null
if(f!=null)h.e3(f.b)
g.c=B.j3
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bS()
h=j
if(h!=null)h.bS()}catch(d){if(p.c===B.b9){h=t.AB.a(p)
i.fM(h)
i.a.hB(h.a)
i.b.eV(h.b)
h.c=B.fC
i.c=null}i=o
if((i==null?null:i.c)===B.at){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.f(A.j("GPU resource adapter is disposed"))
i.fC(h)
i.e3(h.b)
i.b.eV(h.a)
h.c=B.j4
i.d=null}i=m
if(i!=null)i.bS()
i=n
if(i!=null)i.bS()
throw d}case 1:return A.aJ(q,r)}})
return A.aK($async$xk,r)},
CL(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.CK(a,q,s,a.x.gq().a.b.a)
a.z=r.a
a.Q=r.b},
CK(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.xi(a),j=new A.xj(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.p(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.JR(b,h,d,i,s.goW(),new A.x3(j),new A.x4(j),new A.x5(a),new A.xa(a),new A.xb(a),new A.xc(j),new A.xd(j),s.goY(),new A.xe(a),s.gp6(),r.gp_(),k,s.gp8(),s.gpa(),new A.xf(j,c),new A.xg(j),new A.xh(j),new A.x6(j),new A.x7(j),new A.x8(a),new A.x9(j),e,f,g,c.r)}else{p=new A.aO(l,B.r,g,f,e,0)
o=new A.aO(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.iF(h,p,o):null
k=A.c([new A.ms(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity*uAmbientLightScale+\n    vec3(ndotl)*uDirectLightScale,0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.iP(b,u.l,u.t,h,i,d))
q=new A.kR(k)}a.r.toString
m=q.mm(B.ad,new A.tf(),!1,new A.mW())
k=m.a.b
if(k.length!==0)throw A.a(A.j("safe renderer graph is invalid: "+A.y(k)))
return new A.wh(q,m)},
Ib(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.a(A.j("renderer graph is not initialized"))
s=A.K(b7.giv(),t.yz)
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
o=q.c.af()
p=p.gan()
n=A.C(p)
B.a.k(s,new A.n9(new A.cK((r|1073741824)>>>0,0,"transient"),q,A.b2(new A.H(p,n.i("B(1)").a(o.gaq()),n.i("H<1,B>")))))}p=b8.a
m=A.JX(A.AW(p.c),s,b8.d)
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
l+=B.d.ad(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gG().a
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
f+=B.d.ad(n>0?n:h.e,3)}o=t.N
n=A.n(o,t.rL)
e=new A.py(n)
e.mi("cull")
j=l-f
d=e.b
if(d==null)A.f(A.j("cull recorded outside an active frame"))
if(j<0)A.f(A.o("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.u)(s),++k){a2=s[k]
if(a2.gG().e===B.ap)B.a.k(a,new A.b3(new A.bU(a0.iR(a2.gG().c.a).c,a2.gE().a),a2,a1))
else B.a.k(b,new A.b3(new A.bZ(B.mE,a2.gG().b,a2.gG().a,a2.gE().a),a2,g))}a3=new A.mI(A.JM(A.Kr(b)),A.Kq(a),p,b8.b,b8.c)
a4=new A.kG(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gG().a
if(g.length===0)A.f(A.a7(g,"passId",null))
e.b=g
n.c_(g,A.Dv())
a6=A.n(o,i)
for(g=a5.gG().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.f(A.j("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.f(A.j("resource is not in candidate: "+b1))
b3=new A.fW(b2)
a6.l(0,b0+"#"+a1,b3)
a6.c_(b0,new A.xl(b3))}a5.ao(new A.kt(a6,a4,new A.xm(b8,b6).$0(),a3))}return new A.vB(e,m,j)},
BB(a){return new A.tu(a,new A.oS(new A.oU(),new A.lR()),new A.kX(A.c([],t.h1),B.iN),A.c([],t.Ft),B.bQ,A.c([],t.ow),null)},
lQ:function lQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
vB:function vB(a,b,c){this.a=a
this.b=b
this.c=c},
n9:function n9(a,b,c){this.a=a
this.b=b
this.c=c},
xi:function xi(a){this.a=a},
xj:function xj(a,b){this.a=a
this.b=b},
xh:function xh(a){this.a=a},
xa:function xa(a){this.a=a},
xb:function xb(a){this.a=a},
xg:function xg(a){this.a=a},
x5:function x5(a){this.a=a},
x7:function x7(a){this.a=a},
x6:function x6(a){this.a=a},
xf:function xf(a,b){this.a=a
this.b=b},
x3:function x3(a){this.a=a},
x4:function x4(a){this.a=a},
xc:function xc(a){this.a=a},
xd:function xd(a){this.a=a},
xe:function xe(a){this.a=a},
x9:function x9(a){this.a=a},
x8:function x8(a){this.a=a},
xl:function xl(a){this.a=a},
xm:function xm(a,b){this.a=a
this.b=b},
wh:function wh(a,b){this.a=a
this.b=b},
mW:function mW(){},
mI:function mI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
tu:function tu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
tv:function tv(){},
tw:function tw(){},
tx:function tx(){},
mT:function mT(a){this.b=a},
vN:function vN(){},
n_:function n_(){},
j5:function j5(a,b){this.a=a
this.b=b},
Kr(a){var s,r,q=A.K(a,t.E0)
B.a.Y(q,new A.yV())
s=A.C(q)
r=s.i("H<1,cc>")
s=A.K(new A.H(q,s.i("cc(1)").a(new A.yW()),r),r.i("a0.E"))
s.$flags=1
return s},
Kq(a){var s,r,q=A.K(a,t.EH)
B.a.Y(q,new A.yT())
s=A.C(q)
r=s.i("H<1,cc>")
s=A.K(new A.H(q,s.i("cc(1)").a(new A.yU()),r),r.i("a0.E"))
s.$flags=1
return s},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
yV:function yV(){},
yW:function yW(){},
yT:function yT(){},
yU:function yU(){},
JX(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gG().d&c)>>>0===0){++q
continue}n=o.gf5()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.a(A.o("cullItems: non-finite world bounds for instance "+o.gE().t(0),null))
if(a.iP(o.gf5())===B.ba){++q
continue}B.a.k(l,o)}return new A.p9(l,new A.pa(q))},
pa:function pa(a){this.b=a},
p9:function p9(a,b){this.a=a
this.b=b},
b2(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.oQ,q=B.oV,p=!1;s.m();p=!0){o=s.gq()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.B(m,k,Math.min(r.c,o))
q=new A.B(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.a(A.o("Aabb.fromPoints requires at least one point",null))
return new A.fR(r,q)},
fR:function fR(a,b){this.a=a
this.b=b},
AW(a){var s,r,q,p,o,n,m=a.a,l=new A.pB(),k=m.length
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
return new A.pA(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
fg:function fg(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
pA:function pA(a){this.a=a},
pB:function pB(){},
Bf(a){if(a.length!==16)throw A.a(A.o("Mat4.fromColumnMajor requires 16 values",null))
return new A.da(new Float32Array(A.S(a)))},
zh(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.da(q)},
Bg(a,b,c){var s=b.ga8(),r=c.bd(s).ga8(),q=s.bd(r),p=new Float32Array(16)
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
r5:function r5(){},
iT(a,b){var s=a.ga8(),r=b/2,q=Math.sin(r)
return new A.lM(s.a*q,s.b*q,s.c*q,Math.cos(r))},
lM:function lM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
Ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return new A.fT(j,i,c,k,e,f,a,o,d,h,l,n,m,b,g)},
i7:function i7(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
o1:function o1(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function o_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
o0:function o0(){},
kU:function kU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pw:function pw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jj:function jj(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mz:function mz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ks:function ks(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
kF:function kF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
mD:function mD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jl:function jl(a,b){this.a=a
this.b=b},
ii:function ii(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mE:function mE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kK:function kK(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mF:function mF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
l3:function l3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
mK:function mK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function mR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a){this.b=a},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aO(a.a,a.b,b,c,s,r)},
zk:function zk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
mX:function mX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lK:function lK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mY:function mY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
BE(a){var s=a.c,r=Math.abs(s.a)<0.99?B.aW:B.J,q=A.Bg(a.b,s,r)
return new A.fq(A.zh(1,a.f,B.b.n(a.w*2,0.1,3),0.05).a6(0,q))},
fq:function fq(a){this.a=a},
m_:function m_(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
n0:function n0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
JR(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.p(0,"shadows"))throw A.a(A.a7(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c0.p(0,"ssao")
r=c0.p(0,"bloom")
q=c0.p(0,"dof")
p=c0.p(0,"grade")
o=c0.p(0,"ps1")
n=c0.p(0,"vhs")
m=c0.p(0,"volumetric")
c0=B.d.ad(e9+1,2)
l=B.d.ad(e8+1,2)
k=A.br(B.bT,e9,e8,e7,b2)
j=A.br(B.bT.ix(),e9,e8,b2,b2)
i=e7>1
h=A.br(B.nn,e9,e8,b2,i?2:1)
g=A.br(B.nm,c0,l,b2,b2)
A.br(B.nv,e9,e8,b2,b2)
f=A.br(B.ns,e9,e8,b2,b2)
e=A.br(B.nl,f0,f0,b2,b2)
d=A.br(B.no,c0,l,b2,b2)
c=A.br(B.np,c0,l,b2,b2)
b=A.br(B.nt,c0,l,b2,b2)
a=A.br(B.nu,c0,l,b2,b2)
a0=$.DQ()
a1=i?1:0
a2=A.br(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.br(B.ni,c0,l,b2,b2)
a1=A.br(B.nj,c0,l,b2,b2)
a3=A.br(B.nk,e9,e8,b2,b2)
a4=A.br(B.nq,e9,e8,b2,b2)
a5=A.br(B.nw,e9,e8,b2,b2)
a6=A.br(B.nr,e9,e8,b2,b2)
a7=i?new A.iF(c2,k,j):b2
b9.a=null
a8=A.BE(B.oo)
if(m){a9=i?j:k
b0=new A.mo(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform mat4 uView;\nuniform mat4 uInverseProjection;\nuniform vec3 uVolumetricAlbedo;\nuniform float uVolumetricHeightFalloff;\nuniform float uVolumetricDustDensity;\nuniform float uVolumetricJitter;\nuniform float uVolumetricIntensity;\nuniform float uVolumetricSampleCount;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay,\n  float rayLength\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec3 sourceView = (uView * vec4(position, 1.0)).xyz;\n  float sourceDistance = length(sourceView);\n  float tClosest = clamp(dot(sourceView, viewRay), 0.0, rayLength);\n  vec3 sampleToSource = sourceView - viewRay * tClosest;\n  float distanceToSource = max(length(sampleToSource), 1e-3);\n  float cutoff = 1.0 - smoothstep(\n    cutoffDistance * 0.65, cutoffDistance, sourceDistance);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(distanceToSource * distanceToSource,\n          referenceDistance * referenceDistance);\n  // The incoming direction is source -> sample and the outgoing direction is\n  // sample -> camera. This is the same phase convention as the directional\n  // medium path, but now evaluated against the located source.\n  float phase = phaseHenyeyGreenstein(\n    dot(normalize(sampleToSource), viewRay), uAnisotropy);\n  // Located practicals and lightning must also acquire visible body in a\n  // dust-filled room. Use the same broad haze plus particulate density as the\n  // directional march; otherwise a clear-air fog toggle would accidentally\n  // erase dust-lit source rays while the directional shafts still showed it.\n  float mediumDensity = max(uFogDensity + uVolumetricDustDensity, 0.0);\n  float mediumWeight = 1.0 - exp(-max(\n    mediumDensity * min(rayLength, cutoffDistance), 0.0));\n  float pathWeight = clamp(\n    rayLength / max(sourceDistance, referenceDistance), 0.0, 1.0);\n  return color * inverseSquare * phase * cutoff * mediumWeight * pathWeight *\n    uVolumetricIntensity * 0.35;\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  vec4 viewPoint = uInverseProjection * vec4(vUv * 2.0 - 1.0, -1.0, 1.0);\n  viewPoint /= max(abs(viewPoint.w), 1e-5);\n  vec3 viewRay = normalize(viewPoint.xyz);\n  // linearDepth is camera-space Z; convert it to distance along the actual\n  // reconstructed ray so wide and tall projections integrate equally.\n  float cameraDepth = linearDepth(depth);\n  float rayLength = min(cameraDepth / max(-viewRay.z, 1e-3), uFar);\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int maxSampleCount = 24;\n  int sampleCount = int(clamp(uVolumetricSampleCount, 4.0, 24.0));\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  float jitterSeed = fract(sin(dot(vUv, vec2(127.1, 311.7))) * 43758.5453);\n  float jitter = (jitterSeed - 0.5) * clamp(uVolumetricJitter, 0.0, 0.5);\n  for (int i = 0; i < maxSampleCount; i++) {\n    if (i >= sampleCount) break;\n    float distanceAlongRay = clamp(\n      (float(i) + 0.5 + jitter) * stepLength, 0.0, rayLength);\n    float heightWeight = exp(-max(distanceAlongRay * uVolumetricHeightFalloff, 0.0));\n    // Dust is a separate, host-resolved particulate phase. It is denser near\n    // the occupied room volume than the broad atmospheric haze, so shafts gain\n    // visible body without turning the far horizon opaque. At zero density the\n    // extra term is exactly zero and the established fog path is unchanged.\n    float dustWeight = exp(-max(distanceAlongRay *\n      uVolumetricHeightFalloff * 0.45, 0.0));\n    float opticalDensity = density +\n      max(uVolumetricDustDensity, 0.0) * dustWeight;\n    float opticalDepth = opticalDensity * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uVolumetricAlbedo *\n      uShaftIntensity * uVolumetricIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay, rayLength);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.c([],t.C1))}else b0=b2
g=t.e_
b1=A.c([],g)
if(!m)h=i?j:k
if(r){B.a.L(b1,A.c([new A.i9(c1,b3,b4,c2,b5,b5,B.ey,!0,h,b,e0,c0,l),new A.i9(c1,b3,b4,c2,b6,b6,B.pH,!1,b,a,c6,c0,l),new A.ks(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.L(b1,A.c([new A.ii(c1,b3,b4,c2,b7,b7,B.ez,h,a0,e0,c0,l),new A.ii(c1,b3,b4,c2,b8,b8,B.pI,a0,a1,d1,c0,l),new A.kK(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.k(b1,new A.l3(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.k(b1,new A.lK(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.k(b1,new A.mf(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.c([new A.kF(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.m2(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.m1(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.m_(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.y3(b9),e))
j.push(new A.m0(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nuniform vec3 uReflectionColor;\nuniform float uReflectionIntensity;\nuniform float uReflectionConfidence;\nuniform vec2 uShadowMapTexelSize;\nuniform float uShadowFilterRadius;\nuniform float uShadowBias;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uSpecularScale;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(uShadowBias*(1.-ndotl),uShadowBias*0.2666667);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize*clamp(uShadowFilterRadius,0.,3.);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  direct*=uDirectLightScale;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*uAmbientLightScale*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  // A steady spherical conductive field decays approximately as 1/r. The\n  // host keeps the slow latent material memory in uSurfaceDissolution; this\n  // local term therefore models the spatial heat field without making warm\n  // surfaces snap back or disappear at an arbitrary exponential radius.\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*clamp(uThermalSourceRadius0/\n      max(distance(vWorldPos,uThermalSourcePosition0),uThermalSourceRadius0),0.,1.));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*clamp(uThermalSourceRadius1/\n      max(distance(vWorldPos,uThermalSourcePosition1),uThermalSourceRadius1),0.,1.));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*clamp(uThermalSourceRadius2/\n      max(distance(vWorldPos,uThermalSourcePosition2),uThermalSourceRadius2),0.,1.));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*clamp(uThermalSourceRadius3/\n      max(distance(vWorldPos,uThermalSourcePosition3),uThermalSourceRadius3),0.,1.));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  // A continuous water film forms a second dielectric lobe. It smooths the\n  // authored surface only as coverage rises, so damp cloth stays diffuse\n  // while puddled stone gains a tight grazing reflection.\n  float waterCoverage=smoothstep(0.20,0.88,wetness)*(1.0-0.35*rough);\n  specRough=mix(specRough,max(0.035,specRough*0.18),waterCoverage);\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  specular*=uDirectLightScale*uSpecularScale;\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coatStrength=max(clamp(uClearcoatStrength,0.0,1.0),waterCoverage*0.82);\n  float coat=coatStrength*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity*\n    uDirectLightScale*uSpecularScale;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  // Environment fallback reflections are deliberately bounded and weighted\n  // by wetness/grazing angle. A real probe/history hit can raise confidence;\n  // the current host fallback remains visible but never masquerades as SSR.\n  float reflectionNdotV=max(dot(n,viewDir),0.0);\n  float reflectionFresnel=0.04+0.96*pow(1.0-reflectionNdotV,5.0);\n  float reflectionSurface=clamp(wetness+0.18*dissolution,0.0,1.0);\n  float reflectionConfidence=0.20+0.80*clamp(uReflectionConfidence,0.0,1.0);\n  float reflectionWeight=clamp(\n    uReflectionIntensity*reflectionSurface*reflectionFresnel*\n      (1.0-0.72*rough)*reflectionConfidence,\n    0.0,1.0);\n  lit+=uReflectionColor*reflectionWeight;\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.y4(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.L(j,b1)
j.push(new A.iP(c1,b3,u.t,c2,h,c3))
return new A.kR(j)},
y3:function y3(a){this.a=a},
y4:function y4(a,b){this.a=a
this.b=b},
m0:function m0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
n1:function n1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
m2:function m2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
n4:function n4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
m1:function m1(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
n3:function n3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mf:function mf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
nc:function nc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mo:function mo(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ne:function ne(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nd:function nd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ms:function ms(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nh:function nh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oQ:function oQ(){},
lZ(a,b){return new A.j3(a,b)},
l1:function l1(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b,c,d,e,f,g,h){var _=this
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
ir:function ir(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iq:function iq(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
kG:function kG(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
pW:function pW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
pX:function pX(){},
pY:function pY(){},
hI:function hI(a,b){this.a=a
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
AT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.h7(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kq:function kq(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
vr:function vr(){this.a=null},
GK(a){var s=new A.mq(a,B.j,new A.vr(),A.GU(a))
s.k7(a)
return s},
GU(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.O(t.a.b(q)?q:new A.b9(q,A.C(q).i("b9<1,e>")))
while(r.m())s.k(0,r.gq())
return s},
bG(a,b){var s,r
if(a.b!==B.j)A.f(A.j(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.i(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.i(s.drawingBufferWidth),A.i(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.i(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
C0(a,b){var s
if(a.b!==B.j)A.f(A.j(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.i(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.i(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.a(A.o("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
GP(a,b,c){var s,r,q,p
if(a.b!==B.j)A.f(A.j(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.i(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.i(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.a(A.j("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
GO(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.i(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.i(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
GN(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
C_(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.i(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.i(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.i(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.i(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
GL(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.i(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bd(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.j(u.k))
s=a.f
r=s.ng(b)
if(r.a===0)return
if(r.p(0,B.bY)){q=v.G
p=a.a
if(b.a)p.enable(A.i(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.i(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.p(0,B.bZ))a.a.depthFunc(A.GO(a,b.b))
if(r.p(0,B.c_))a.a.depthMask(b.c)
if(r.p(0,B.c3)){q=v.G
p=a.a
if(b.w)p.enable(A.i(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.i(q.WebGL2RenderingContext.CULL_FACE))}if(r.p(0,B.c4))a.a.cullFace(A.GN(a,b.x))
if(r.p(0,B.ee)){q=v.G.WebGL2RenderingContext
q=A.i(q.CCW)
a.a.frontFace(q)}if(r.p(0,B.c0)){q=v.G
p=a.a
if(b.d)p.enable(A.i(q.WebGL2RenderingContext.BLEND))
else p.disable(A.i(q.WebGL2RenderingContext.BLEND))}if(r.p(0,B.c1))a.a.blendFunc(A.C_(a,b.e),A.C_(a,b.f))
if(r.p(0,B.c2))a.a.blendEquation(A.GL(a,b.r))
if(r.p(0,B.ec))a.a.colorMask(!0,!0,!0,!0)
if(r.p(0,B.ed)){q=v.G.WebGL2RenderingContext
a.a.disable(A.i(q.SCISSOR_TEST))}s.a=b},
GM(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.i(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.i(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.i(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
cU(a,b,c,d,e,f){var s
if(a.b!==B.j)A.f(A.j(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.GM(a,b))},
bQ(a,b){var s
if(a.b!==B.j)A.f(A.j(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
m(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.j)A.f(A.j(u.k))
s=a.e
if(s==null)throw A.a(A.j("WebGl2Device.setUniform called with no bound program"))
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
A.aV(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.i(c.b))
break}},
bj(a,b){if(a.b!==B.j)A.f(A.j(u.k))
a.a.bindVertexArray(A.b(b.a))},
aB(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.f(A.j(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.i(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.jP){p=s.d>1?A.i(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.i(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.jO){o=s.b
if(o!=null){r.bindTexture(A.i(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.i(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.a(A.j("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.a(A.j("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
GQ(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.j(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.i(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.i(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.i(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.AB(B.a4.gej(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.aW(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.i(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.i(q.WebGL2RenderingContext.STATIC_DRAW))}},
GR(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.i(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
C3(a,b){var s,r,q,p
if(a.b!==B.j)A.f(A.j(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.a(A.j("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.d2?A.i(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.i(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.GR(a,b.b))
return new A.e2(r)},
C1(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.i(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
C2(a,b){var s
switch(b.a){case 0:s=A.i(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.i(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
GS(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
zr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.j)A.f(A.j(u.k))
s=a.a
r=A.G(s.createTexture())
if(r==null)throw A.a(A.j("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.i(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.i(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.GS(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aV(s,"texStorage3D",[n,l,A.i(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aV(s,"texStorage2D",[n,l,A.i(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.i(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.C1(a,b.e))
s.texParameteri(n,A.i(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.C1(a,b.f))
p=b.r
s.texParameteri(n,A.i(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.C2(a,p))
s.texParameteri(n,A.i(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.C2(a,p))
h=a.r.p(0,"EXT_texture_filter_anisotropic")
g=h?a.h7(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.f(A.a7(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.e2(new A.jP(r,j,i,q,m))},
zs(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.f(A.j(u.k))
s=t.p.a(b.a)
r=s.d
if(c>=r)throw A.a(A.o("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.a(A.o("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.i(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.i(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aV(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.i(n.WebGL2RenderingContext.RGBA),A.i(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aV(l,"texSubImage2D",[m,0,0,0,q,p,A.i(n.WebGL2RenderingContext.RGBA),A.i(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
C4(a,b){var s,r,q
if(a.b!==B.j)A.f(A.j(u.k))
s=t.p.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.i(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.i(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
mr(a,b){a.a.deleteTexture(t.p.a(b.a).a)},
C6(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.f(A.j(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.a(A.o("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.a(A.j("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.i(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.bd
if(n&&!a1.e)throw A.a(A.o("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.d4||o===B.j6
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.i(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.i(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.i(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aV(r,c,[A.i(p.WebGL2RenderingContext.RENDERBUFFER),o,A.i(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.i(p.WebGL2RenderingContext.FRAMEBUFFER),A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.i(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aV(r,c,[A.i(p.WebGL2RenderingContext.RENDERBUFFER),o,A.i(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.i(p.WebGL2RenderingContext.FRAMEBUFFER),A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.i(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.G(r.createTexture())
r.bindTexture(A.i(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aV(r,b,[A.i(p.WebGL2RenderingContext.TEXTURE_2D),1,A.i(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.i(p.WebGL2RenderingContext.TEXTURE_2D),A.i(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.i(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.i(p.WebGL2RenderingContext.TEXTURE_2D),A.i(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.i(p.WebGL2RenderingContext.LINEAR))
A.aV(r,a,[A.i(p.WebGL2RenderingContext.FRAMEBUFFER),A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.G(r.createTexture())
r.bindTexture(A.i(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aV(r,b,[A.i(p.WebGL2RenderingContext.TEXTURE_2D),1,A.i(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.i(p.WebGL2RenderingContext.TEXTURE_2D),A.i(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.i(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.i(p.WebGL2RenderingContext.TEXTURE_2D),A.i(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.i(p.WebGL2RenderingContext.LINEAR))
A.aV(r,a,[A.i(p.WebGL2RenderingContext.FRAMEBUFFER),A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.i(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.i(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aV(r,c,[A.i(p.WebGL2RenderingContext.RENDERBUFFER),o,A.i(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.i(p.WebGL2RenderingContext.FRAMEBUFFER),A.i(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.i(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.G(r.createTexture())
r.bindTexture(A.i(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aV(r,b,[A.i(p.WebGL2RenderingContext.TEXTURE_2D),1,A.i(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.i(p.WebGL2RenderingContext.TEXTURE_2D),A.i(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.i(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.i(p.WebGL2RenderingContext.TEXTURE_2D),A.i(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.i(p.WebGL2RenderingContext.NEAREST))
A.aV(r,a,[A.i(p.WebGL2RenderingContext.FRAMEBUFFER),A.i(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.i(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.i(r.checkFramebufferStatus(A.i(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.i(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.i(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.zt(a0,q,l,k,f,e,j,i)
throw A.a(A.j("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.e2(new A.jO(q,l,k,f,e,j,i,s,a1.b,a1.c))},
zt(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cx(a){var s
if(a.b!==B.j)A.f(A.j(u.k))
s=A.G(a.a.createVertexArray())
if(s==null)throw A.a(A.j("WebGl2Device: gl.createVertexArray() returned null"))
return new A.e2(s)},
C5(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.a(A.lZ(b===A.nB(A.CP(A.DM(),r),q,t.S)?B.e5:B.e6,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.i2(p.getShaderParameter(o,A.i(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aq(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.a(A.lZ(b===A.nB(A.CP(A.DM(),r),q,t.S)?B.e5:B.e6,s))}return o},
GT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.f(A.j(u.k))
q=v.G
s=A.C5(a,A.i(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.C5(a,A.i(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.a(B.nX)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.i2(o.getProgramParameter(n,A.i(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aq(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.lZ(B.e7,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.i(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.lZ(B.e8,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.lZ(B.e8,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.e2(n)},
e2:function e2(a){this.a=a},
jP:function jP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jO:function jO(a,b,c,d,e,f,g,h,i,j){var _=this
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
ng:function ng(a){this.a=a
this.b=!1},
mq:function mq(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
vo:function vo(a){this.a=a},
vp:function vp(a){this.a=a},
ws:function ws(){},
nf:function nf(){},
vn:function vn(a){this.a=a},
vq:function vq(){},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
og(a0,a1){var s=0,r=A.aL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$og=A.aM(function(a2,a3){if(a2===1)return A.aI(a3,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.N
n=t.m
m=A.n(o,n)
l=A.b(p.createGain())
k=A.b(p.createGain())
j=A.b(p.createGain())
i=A.b(p.createGain())
h=A.b(p.createGain())
g=A.b(p.createGain())
f=A.b(p.createGain())
e=A.b(p.createGain())
d=A.b(p.createGain())
c=A.b(p.createGain())
b=A.b(p.createConvolver())
a=new A.km(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.n(o,t.a_),B.b6,A.n(n,t.jS))
a.jN(p,a1)
p=A.v(a0).i("N<1,2>")
s=3
return A.a6(A.pD(A.lk(new A.N(a0,p),p.i("aT<az>(r.E)").a(new A.oh(a)),p.i("r.E"),t.ls),t.c),$async$og)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.kS():m
b.buffer=p
q=a
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$og,r)},
km:function km(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
oi:function oi(){},
oh:function oh(a){this.a=a},
ol:function ol(a,b){this.a=a
this.b=b},
ok:function ok(a,b,c){this.a=a
this.b=b
this.c=c},
oj:function oj(a,b){this.a=a
this.b=b},
om:function om(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jN:function jN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Ez(a,b,c,d,e,f,g){var s=new A.o7(c,f,b,g,new A.h(d.a,d.b,d.c),e,a)
s.jP(a,b,c,d,0,e,f,g)
return s},
Eu(a,b){var s=new A.nL(b)
s.jM(a,b)
return s},
Ey(a){var s,r,q,p,o,n=t.z
n=A.n(n,n)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aG(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.o3(A.aX(n,r,t.a))
n.jO(a)
return n},
Jk(a,b){var s,r,q,p=b>>>0
for(s=new A.dx(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.DA(p,q==null?r.a(q):q)}return p&2147483647},
kn:function kn(a,b){this.a=a
this.b=b},
o7:function o7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o8:function o8(){},
nL:function nL(a){this.a=a},
nM:function nM(){},
i6:function i6(){},
nN:function nN(){},
nO:function nO(){},
o3:function o3(a){this.a=a},
o5:function o5(){},
o6:function o6(){},
o4:function o4(){},
z5:function z5(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
of:function of(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o9:function o9(a,b,c){this.a=a
this.b=b
this.c=c},
oa:function oa(a){this.a=a},
ob:function ob(){},
jh:function jh(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
px:function px(a){this.a=a},
l8:function l8(a,b,c,d,e,f,g,h,i,j){var _=this
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
qz:function qz(a){this.a=a},
Fp(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return new A.qy(n)},
qy:function qy(a){this.a=a},
qC:function qC(){var _=this
_.c=_.b=_.a=!1
_.d=0},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qX:function qX(a,b,c){this.a=a
this.c=b
this.e=c},
qU:function qU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(){},
pb:function pb(){this.b=this.a=0},
r2:function r2(a){this.a=a
this.b=0
this.e=!1},
j7(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aW(a)
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
bP:function bP(a){this.a=a
this.b=0},
jc(a,b,c){return new A.h(a,b,c)},
BR(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.h(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
h:function h(a,b,c){this.a=a
this.b=b
this.c=c},
ve:function ve(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
vf:function vf(){},
cw:function cw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
vg:function vg(){},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vb:function vb(){},
vc:function vc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vd:function vd(){},
va:function va(){this.b=this.a=-1},
GV(a,b,c,d){return new A.mt(d,b,c,a)},
GX(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.E2()
s=a.d
r=A.vt(s,0)
q=A.vt(s,1)
p=A.vt(s,2)
o=A.vt(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bR(m,0))n.k(0,"GamepadA")
if(A.bR(m,1))n.k(0,"GamepadB")
if(A.bR(m,2))n.k(0,"GamepadX")
if(A.bR(m,3))n.k(0,"GamepadY")
if(A.bR(m,4))n.k(0,"GamepadLB")
if(A.bR(m,5))n.k(0,"GamepadRB")
if(A.bR(m,6))n.k(0,"GamepadLT")
if(A.bR(m,7))n.k(0,"GamepadRT")
if(A.bR(m,8))n.k(0,"GamepadView")
if(A.bR(m,9))n.k(0,"GamepadMenu")
if(A.bR(m,10))n.k(0,"GamepadLStick")
if(A.bR(m,11))n.k(0,"GamepadRStick")
if(A.bR(m,12))n.k(0,h)
if(A.bR(m,13))n.k(0,g)
if(A.bR(m,14))n.k(0,f)
if(A.bR(m,15))n.k(0,e)
m=n.p(0,e)?1:0
l=n.p(0,f)?1:0
k=n.p(0,h)?1:0
j=n.p(0,g)?1:0
i=new A.h(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.ga8():i
return new A.mt(m,p,o,A.fo(n,s))},
vt(a,b){return A.GW(b<a.length?a[b]:0)},
bR(a,b){return b<a.length&&a[b]>=0.5},
GW(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.n((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gbX(a)?-s:s},
m3:function m3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mt:function mt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG:function oG(a){this.a=a},
EV(a,b,c){var s=new A.kL(a,c,null,b)
s.jT(a,null,null,b,c)
return s},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
F7(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bK(new A.I(B.l8,t.e2.a(new A.pn(a)),t.vL),t.yW)
return s==null?null:new A.h8(s)},
Bk(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.zi(s,a,B.ku)
break
case 1:A.zi(s,a,B.kv)
break
case 2:A.zi(s,a,B.lc)
break}return s},
zi(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.K(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.k(a,p.c)
return}}},
F6(a){if(a.a!==21)return null
if(a.e)return B.fM
if(!a.d&&a.b>=0.6&&a.c>=3)return B.fN
return B.fL},
co:function co(a,b){this.a=a
this.b=b},
pk:function pk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(a){this.a=a},
pn:function pn(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
FQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.lC(s,new A.h(o,n,m),q,p,l,j)
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
lC:function lC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Jm(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
if(typeof q!="string")throw A.a(B.h2)
p.l(0,q,r.b)}return p},
wz(a){var s,r,q,p,o,n=a.ga3().bH(0)
B.a.X(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.l(0,o,A.CH(a.h(0,o)))}return A.aX(r,t.N,s)},
CH(a){var s
if(t.f.b(a))return A.wz(A.Jm(a))
if(t.j.b(a)){s=t.z
return A.ab(J.ea(a,A.Kj(),s),s)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.i6)
return a}throw A.a(A.M("presentation snapshot contains unsupported value "+J.eY(a).t(0),null,null))},
t4:function t4(a){this.a=a},
BA(a,b,c){var s=A.zJ(b),r=A.zJ(a)
if(c!==2)A.f(A.a7(c,"version","unsupported save version"))
return new A.hu(c,s,r)},
zJ(a){var s,r,q,p,o=A.v(a).i("ae<1>"),n=A.K(new A.ae(a,o),o.i("r.E"))
B.a.X(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.l(0,p,A.CG(a.h(0,p)))}return A.aX(s,t.N,o)},
CG(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gq()
p=q.a
if(typeof p!="string")throw A.a(B.hR)
s.l(0,p,q.b)}return A.zJ(s)}if(t.j.b(a)){r=t.z
return A.ab(J.ea(a,A.Kn(),r),r)}if(a==null||A.bx(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.ib)
return a}throw A.a(A.M("save contains unsupported value "+J.eY(a).t(0),null,null))},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(){},
fn:function fn(a,b){this.a=a
this.b=b},
AY(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.pJ(a,b,c,d,e,f,g,s,r,h)},
AZ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.b0(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.a(B.hQ)
r=d.h(0,"runSeed")
q=A.b0(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.b0(p)||p<1||typeof o!="number")throw A.a(B.iv)
if(!isFinite(5760))throw A.a(A.a7(5760,"daySeconds","must be finite and > 0"))
n=new A.l_(p,7,5760)
n.iN(o)
s=t.N
m=t.z
l=A.FA(a5,A.aZ(a0,s,m))
k=A.ES(l,A.aZ(a,s,m),n)
j=A.Dr(a3,c)
A.Fo(A.aZ(a1,s,m)).mb(j)
s=A.aZ(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bx(f))A.f(B.hh)
e=A.FJ(d.h(0,"narrative"))
if(e==null)e=A.rv(null,null,null)
return A.AY(c,q,j,n,l,k,new A.kI(i,h,g,f),e)},
I9(a){var s
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
kZ:function kZ(a,b){this.c=a
this.d=b},
pK:function pK(a,b,c){this.a=a
this.b=b
this.r=c},
pJ:function pJ(a,b,c,d,e,f,g,h,i,j){var _=this
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
pL:function pL(a){this.a=a},
pM:function pM(){},
pN:function pN(){},
pO:function pO(a){this.a=a},
pP:function pP(){},
AH(a){var s,r,q,p,o,n,m,l,k,j,i,h="modelScale",g="residence",f="restAnchor",e="returnPortalId",d=A.hW(a,"house manifest"),c=typeof d.h(0,h)=="number"?A.a1(d.h(0,h)):1
if(!isFinite(c)||c<=0)throw A.a(B.hB)
s=A.bJ(d,"houseId")
r=A.bJ(d,"sourceRef")
q=A.bJ(d,"presentationScope")
p=A.bJ(d,"storyAuthority")
if(d.h(0,g)==null)o=null
else{n=A.hW(d.h(0,g),g)
o=A.bJ(n,"roomId")
m=A.A7(n.h(0,"spawn"),"residence.spawn",c)
l=typeof n.h(0,f)=="string"?A.w(n.h(0,f)):null
o=new A.oA(o,m,l,typeof n.h(0,e)=="string"?A.w(n.h(0,e)):null)}m=J.ea(A.hS(d,"levels"),new A.on(),t.mD)
m=A.K(m,m.$ti.i("a0.E"))
m.$flags=1
l=J.ea(A.hS(d,"rooms"),new A.oo(c),t.bJ)
l=A.K(l,l.$ti.i("a0.E"))
l.$flags=1
k=J.ea(A.hS(d,"portals"),new A.op(c),t.lT)
k=A.K(k,k.$ti.i("a0.E"))
k.$flags=1
j=J.ea(A.hS(d,"stairs"),new A.oq(),t.gI)
j=A.K(j,j.$ti.i("a0.E"))
j.$flags=1
i=J.ea(A.hS(d,"exteriorCells"),new A.or(),t.N)
i=A.K(i,i.$ti.i("a0.E"))
i.$flags=1
s=new A.ko(s,r,q,p,o,m,l,k,j)
s.f2()
return s},
Dr(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
a6.f2()
s=A.B0(a7)
r=new A.y2()
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
B.a.k(n,new A.fm(j,new A.h(d,c,h),new A.h(g,f,i),e,A.HO(j),k.r,k.w,k.x))}for(q=a6.x,p=q.length,o=s.c,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a3=q[l]
B.a.k(o,new A.cb(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f,a3.r,a3.w,a3.x,a3.at,a3.Q,a3.z,a3.y,a3.as))}for(q=a6.y,p=q.length,o=s.d,n=t.i,l=0;l<q.length;q.length===p||(0,A.u)(q),++l){a4=q[l]
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
B.a.k(o,new A.fr(a4.a,a4.b,new A.h(i,h,m),new A.h(f,e,j[2])))}a5=a6.f
if(a5!=null){s.r=a5.a
s.x=a5.c
q=a5.b
p=q.length
if(0>=p)return A.d(q,0)
o=q[0]
if(1>=p)return A.d(q,1)
n=q[1]
if(2>=p)return A.d(q,2)
s.w=new A.h(o,n,q[2])}s.nQ()
return s},
HO(a){var s
A:{if("living-room"===a){s=A.c([A.ze("mantle-living",!0,new A.h(3.7,1.45,0.8),"living-room gas mantle"),A.ze("mantle-living-second",!1,new A.h(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.c([A.ze("mantle-hall",!1,new A.h(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.kD
break A}return s},
EB(a,b){var s,r=A.hW(a,"room"),q=A.bJ(r,"id"),p=A.bJ(r,"floor"),o=A.A7(r.h(0,"origin"),"origin",b),n=A.A7(r.h(0,"size"),"size",b),m=J.ea(A.hS(r,"windows"),new A.oB(b),t.ya)
m=A.K(m,m.$ti.i("a0.E"))
m.$flags=1
s=J.ea(A.hS(r,"portalIds"),new A.oC(),t.N)
s=A.K(s,s.$ti.i("a0.E"))
s.$flags=1
return new A.eg(q,p,o,n,m,s,A.Ae(r,"wall"),A.Ae(r,"floor"),A.Ae(r,"ceiling"))},
hW(a,b){return t.P.b(a)?a:A.e4(b+" is not an object")},
hS(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.e4(b+" is not a list")},
bJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e4(b+" is not a string")},
Ae(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.e4("surface is not an object")
return A.bJ(s,b)},
zO(a,b){var s,r=A.bJ(a,b)
A:{if("north"===r){s=B.A
break A}if("east"===r){s=B.aq
break A}if("south"===r){s=B.t
break A}if("west"===r){s=B.ar
break A}s=A.e4(b+" has unknown facing "+r)}return s},
IV(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gR(a)||s.M(a,new A.xB())}else s=!0
if(s)return A.e4(b+" is not a non-empty finite number list")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gq()))
return s},
eS(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e4(b+" is not finite")},
nx(a,b){var s,r
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xY())}else s=!0
if(s)return A.e4(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.O(a);r.m();)s.push(A.a1(r.gq()))
return s},
A7(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.nx(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)p.push(s[q]*c)
return p},
k9(a,b){var s,r,q=A.a_(t.N)
for(s=J.O(a);s.m();){r=s.gq()
if(!q.k(0,r))throw A.a(A.M("duplicate "+b+" id "+r,null,null))}},
e4(a){return A.f(A.M(a,null,null))},
ko:function ko(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
on:function on(){},
oo:function oo(a){this.a=a},
op:function op(a){this.a=a},
oq:function oq(){},
or:function or(){},
ot:function ot(){},
ou:function ou(){},
ov:function ov(){},
ow:function ow(){},
ox:function ox(){},
oy:function oy(){},
oz:function oz(){},
os:function os(a){this.a=a},
oA:function oA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y2:function y2(){},
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
oB:function oB(a){this.a=a},
oC:function oC(){},
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
xB:function xB(){},
xY:function xY(){},
ku:function ku(a,b){this.a=a
this.b=b
this.d=null},
oR:function oR(a){this.a=a},
lp:function lp(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
mu:function mu(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qe:function qe(){this.b=0},
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
kO:function kO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pp:function pp(){},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(){},
qf:function qf(a,b,c){this.a=a
this.b=b
this.c=c},
Ky(a){var s,r,q,p,o,n,m,l
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
return new A.bY(B.ai,p,new Uint16Array(A.S(a.b)),new A.fR(new A.B(s.a,s.b,s.c),new A.B(s.d,s.e,s.f)))},
Kx(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Jj(a,new A.yY(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.kP(o,p.c,p.e))}return n},
Jj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
throw A.a(A.o("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.p(d,":")?B.c.J(d,0,B.c.bE(d,":")):null
l=new A.dm(d,l,h,A.c([],p))
s.l(0,d,l)}B.a.L(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("ao<2>")
q=A.K(new A.ao(s,q),q.i("r.E"))
B.a.Y(q,new A.xQ())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].pu(a))
return r},
HR(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.kO(r,q,p,o,n,m)},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
yY:function yY(a){this.a=a},
xQ:function xQ(){},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
js:function js(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
f4:function f4(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
JP(a){var s,r,q,p=new A.qf(A.c([],t.Dl),A.c([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.Ic(p,a,B.dp[s],15.75,15.75,12.044999999999998,0.63)
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
p.av(r,new A.a8(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.av(r,q,new A.a8(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a8(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a8(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.av(q,new A.a8(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.av(q,r,new A.a8(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.D(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.av(new A.a8(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a8(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a8(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.av(new A.a8(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a8(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a8(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a8(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a8(7.875,16.32,16.383,-1,0,0,1,1,0)
p.av(r,new A.a8(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.av(r,q,new A.a8(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a8(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a8(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.av(q,new A.a8(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.av(q,r,new A.a8(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.J7(p,15.75,15.75,12.044999999999998,16.32)
A.HV(p,15.75,15.75,16.32)
A.I8(p,15.75,15.75,12.044999999999998)
A.Ig(p,a,15.75)
A.Je(p,15.75,15.75)
A.HQ(p,15.75)
return p.mk()},
Ic(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.aq!==b7,p=B.A!==b7,o=B.t===b7,n=B.ar===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aI(k)
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
B.a.k(b4,new A.eK(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aS(i),b=J.O(h.a),h=new A.U(b,h.b,h.$ti.i("U<1>"));h.m();){a=b.gq()
if(!a.Q||a.b4(i)!==b7)continue
B:{if(!p||o){a0=g+a.aN(i)
break B}if(!q||n){a0=e+a.aN(i)
break B}a0=null}B.a.k(b4,new A.eK(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.A||b7===B.t?b8:b9
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
if(B.a.M(b4,new A.xo(b0,b1,b2,b3)))continue
switch(m){case 0:b5.D(0,b1,b3,0,b0,b2,r)
break
case 2:b5.D(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.D(0,0,b3,b1,r,b2,b0)
break
case 1:b5.D(0,s,b3,b1,b8,b2,b0)
break}}A.If(b5,b4,b7,b8,b9,c1)
A.Id(b5,b4,b7,b8,b9,c1)
A.Ie(b5,b4,b7,b8,b9,c0,c1)},
Ie(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aF([0,a4===B.A||a4===B.t?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.k(0,q.a)
a1.k(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.xn(a,a0,g)))continue
switch(s){case 0:a2.D(1,a0,e,m,a,f,l)
break
case 2:a2.D(1,a0,e,k,a,f,j)
break
case 3:a2.D(1,m,e,a0,l,f,a)
break
case 1:a2.D(1,o,e,a0,n,f,a)
break}}}},
Id(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
If(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Jc(a2,g,a4,a5,a6,a7,q)}},
Jc(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
J7(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.D(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.D(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.D(4,i,p,-0.38,j,q,-0.44)
a.D(4,i,p,s,j,q,o)}A.J8(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.D(5,h+0.5,p,o,h-0.5,r,q)}},
J8(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a8(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a8(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.av(n,new A.a8(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.av(n,m,new A.a8(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a8(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a8(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.av(m,new A.a8(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.av(m,n,new A.a8(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
HV(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.D(0,g+0.35,k,n,g-0.35,l,q)
a.D(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.D(5,d+0.1,o,m,d-0.1,r,p)}}},
I8(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.D(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.D(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.D(6,j,b+0.06,d,k,b,e)}a.D(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Ig(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aN("hall")
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
Je(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
HQ(a,b){var s,r
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
xo:function xo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xn:function xn(a,b,c){this.a=a
this.b=b
this.c=c},
Kl(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.An(b,d,c)
if(k!=null){s=k.b
return new A.er(B.fU,k.a,s)}r=A.DK(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.er(B.fV,r.a,s)}if(A.DL(b,d,c)!=null)return B.fZ
q=A.Kk(a,b,c,d)
if(q!=null)return new A.er(B.cM,q.a,"inspect the "+q.b)
p=A.DJ(b,c,d,e)
if(p!=null){o=e.bO(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.er(B.fX,l,m?"inspect the "+o.b:"inspect "+n)}return B.h_},
DJ(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.nA(a5,s,4.5)
for(q=a6.iE(a4),p=J.O(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gq()
if(!i.x)continue
h=a6.bO(i.c)
g=i.f.a
f=i.eX(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.h(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.ga8()
a0=a3.b
a1=Math.acos(B.b.n(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.nC(a5,a4,a3.a,new A.h(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Kk(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.j1(c)
if(s.length===0)return f
r=d.aI(e)
q=A.nA(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.h(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.ga8()
j=b.b
if(Math.acos(B.b.n(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.nC(d,c,b.a,new A.h(n,m,o)))return k}return f},
dA:function dA(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
Gb(a,b,c,d){return new A.lS(c,a,d)},
JQ(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.a
if(B.e3.p(0,b))return $.DS()
s=new A.bP(new Float32Array(5376))
r=new A.bP(new Float32Array(5376))
q=new A.bP(new Float32Array(5376))
p=new A.bP(new Float32Array(5376))
o=a0.d
n=a.aI(a0)
m=A.l6(a0.y)
l=A.l6(a0.z)
k=o.a
j=o.b
i=o.c
h=n.c
g=i+h
f=n.a
e=k+f
d=m.e
s.eO(new A.h(k,j,i),new A.h(k,j,g),new A.h(e,j,g),new A.h(e,j,i),m.c,f/d,h/d)
j+=n.b
d=l.e
r.eO(new A.h(k,j,i),new A.h(e,j,i),new A.h(e,j,g),new A.h(k,j,g),l.c,f/d,h/d)
for(c=0;c<4;++c)A.HJ(q,a,a0,n,B.dp[c])
for(b=a.aS(b),k=J.O(b.a),b=new A.U(k,b.b,b.$ti.i("U<1>"));b.m();){j=k.gq()
if(j.at==null||j.as)continue
A.Cv(p,a0,n,j,!0)}b=B.o.aj(s.a,0,s.b)
k=B.o.aj(r.a,0,r.b)
j=B.o.aj(q.a,0,q.b)
B.o.aj(p.a,0,p.b)
return new A.lS(b,k,j)},
JN(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.bP(new Float32Array(5376))
r=a.aI(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.Cw(s,b,r,c,q)
return B.o.aj(s.a,0,s.b)},
JO(a,b){var s,r,q,p=new A.bP(new Float32Array(5376)),o=a.aI(b)
for(s=a.aS(b.a),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gq()
if(q.at==null||q.as)continue
A.Cv(p,b,o,q,!1)}return B.o.aj(p.a,0,p.b)},
HJ(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.A||a4===B.t?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aS(s),q=J.O(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gq()
if(!p.as&&p.b4(s)===a4)a.push(new A.eJ(p.aN(s),p.aN(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
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
if(B.a.M(a,new A.wu(f,e,d,c)))continue
A.JC(a0,a2,a3,a4,f,e,d,c)}A.HK(a0,a2,a3,a4,b,a)},
HK(a,b,c,d,e,f){return},
i_(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.au(a,new A.h(r+e,q+g,p),new A.h(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.au(a,new A.h(r+e,q+g,s-i),new A.h(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.au(a,new A.h(s-i,q+g,p+e),new A.h(s,q+h,p+f),j)
return
case 3:A.au(a,new A.h(r,q+g,p+e),new A.h(r+i,q+h,p+f),j)
return}},
au(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.h(o,n,m),k=c.a,j=new A.h(k,n,m),i=c.b,h=new A.h(k,i,m),g=new A.h(o,i,m)
m=c.c
s=new A.h(o,n,m)
r=new A.h(k,n,m)
q=new A.h(k,i,m)
p=new A.h(o,i,m)
a.aO(j,l,g,h,d)
a.aO(s,r,q,p,d)
a.aO(l,s,p,g,d)
a.aO(r,j,h,q,d)
a.aO(l,j,r,s,d)
a.aO(g,p,q,h,d)},
JC(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.h(i+e,h+a0,g)
break
case 2:s=new A.h(i+f,h+a0,g+c.c)
break
case 1:s=new A.h(i+c.a,h+a1,g+f)
break
case 3:s=new A.h(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.h(i+f,h+a0,g)
break
case 2:r=new A.h(i+e,h+a0,g+c.c)
break
case 1:r=new A.h(i+c.a,h+a1,g+e)
break
case 3:r=new A.h(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.h(i+f,h+a1,g)
break
case 2:q=new A.h(i+e,h+a1,g+c.c)
break
case 1:q=new A.h(i+c.a,h+a0,g+e)
break
case 3:q=new A.h(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.h(i+e,h+a1,g)
break
case 2:p=new A.h(i+f,h+a1,g+c.c)
break
case 1:p=new A.h(i+c.a,h+a0,g+f)
break
case 3:p=new A.h(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.h(0,0,0.003)
break
case 2:o=new A.h(0,0,-0.003)
break
case 1:o=new A.h(-0.003,0,0)
break
case 3:o=new A.h(0.003,0,0)
break
default:o=k}n=b.x
m=A.l6(n).e
a.eO(s.a4(0,o),r.a4(0,o),q.a4(0,o),p.a4(0,o),A.l6(n).c,(f-e)/m,(a1-a0)/m)
l=A.JD(b,d)
switch(j){case 0:o=new A.h(s.a,s.b,s.c-l)
break
case 2:o=new A.h(r.a,s.b,s.c)
break
case 1:o=new A.h(s.a,s.b,p.c)
break
case 3:o=new A.h(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.h(r.a,q.b,s.c)
break
case 2:j=new A.h(s.a,q.b,s.c+l)
break
case 1:j=new A.h(s.a+l,q.b,r.c)
break
case 3:j=new A.h(p.a,q.b,r.c)
break
default:j=k}A.au(a,o,j,A.Jf(A.l6(n).c,0.68))},
Jf(a,b){var s,r=new A.xM(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.jo()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.jo()
r=r.$1(a&255)
if(typeof r!=="number")return A.ye(r)
return(q<<16|s<<8|r)>>>0},
JD(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
Cv(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.b4(d),b=a3.aN(d),a=b+a3.w
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
A.au(a0,new A.h(r+l,s,d),new A.h(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.h(l,s,d),new A.h(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.au(a0,new A.h(r+n,s+m,d),new A.h(r+h,j,i),q)
A.au(a0,new A.h(k,s,d),new A.h(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.au(a0,new A.h(r+l,s,k),new A.h(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.h(l,s,k),new A.h(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.au(a0,new A.h(r+n,s+m,k),new A.h(r+h,i,d),q)
A.au(a0,new A.h(j,s,k),new A.h(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.au(a0,new A.h(n,s,d+k),new A.h(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.h(n,s,k),new A.h(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.au(a0,new A.h(n,s+e,d+m),new A.h(r,j,d+l),q)
A.au(a0,new A.h(n,s,i),new A.h(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.au(a0,new A.h(r,s,d+l),new A.h(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.au(a0,new A.h(r,s,l),new A.h(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.au(a0,new A.h(r,s+e,d+n),new A.h(k,j,d+m),q)
A.au(a0,new A.h(r,s,i),new A.h(k,s+0.05,l),q)
break}if(a4)A.Cw(a0,a1,a2,a3,q)
A.HI(a0,a1,a2,a3)},
HI(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.aN(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.b4(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.A
q=!r||s===B.t?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.i_(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.t?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.i_(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.t?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.i_(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.t?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.i_(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.t,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.i_(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.i_(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.i_(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
Cw(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.b4(o),m=d.aN(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.au(a,new A.h(p,s,o),new A.h(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.au(a,new A.h(p,s,o-d.w),new A.h(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.au(a,new A.h(p-d.w,s,o),new A.h(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.au(a,new A.h(p,s,o),new A.h(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.au(a,new A.h(p,s,o),new A.h(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.au(a,new A.h(p,s,o-0.055),new A.h(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.au(a,new A.h(p-0.055,s,o),new A.h(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.au(a,new A.h(p,s,o),new A.h(p+0.055,s+r,o+d.w),e)
break}},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
wu:function wu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xM:function xM(a){this.a=a},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B0(a){var s=t.N
return new A.qc(A.c([],t.eY),A.c([],t.qP),A.c([],t.DZ),A.n(s,t.z_),A.n(s,t.e),new A.qe())},
qc:function qc(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.x=_.w=_.r=null
_.y=f},
qv:function qv(a){this.a=a},
nA(a,b,c){var s=a.aI(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
nC(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.IF(a,s,c,d)},
IF(a,b,c,d){var s,r,q,p,o=a.aI(b),n=d.ac(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.wB(a,b,o,B.A,r,q,p,c,n,m))return!0
if(A.wB(a,b,o,B.t,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.wB(a,b,o,B.ar,s,r,q,c,n,m))return!0
if(A.wB(a,b,o,B.aq,s+o.a,r,q,c,n,m))return!0
return!1},
wB(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a4(0,a6.a6(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.A||a1===B.t
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aS(m),k=J.O(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gq()
if(q.b4(m)===a1){g=q.aN(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
An(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.nA(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.u)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.h(h-f.a,g-f.b,i-f.c)
d=e.gu(0)
if(d<0.01||d>s)continue
c=e.ga8()
f=a.b
if(Math.acos(B.b.n(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.nC(a0,a1,a.a,new A.h(h,g,i)))continue
m=d
l=j}}return l},
DK(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.nA(b,j,4.5):4.5
for(s=b.aS(c),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>")),q=i,p=null;s.m();){o=r.gq()
n=b.oJ(c,o)
m=a.a
l=new A.h(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.CU(l,k,a,i,0.5236)||k>=q)continue
if(!A.nC(b,c,a.a,n))continue
q=k
p=o}return p},
DL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.nA(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.JF(b,h,m)
k=a.a
j=new A.h(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.CU(j,i,a,s,0.5236)||i>=p)continue
if(!A.nC(b,c,a.a,l))continue
p=i
o=m}return o},
CU(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.n(a.ga8().be(c.b),-1,1))<=e},
JF(a,b,c){var s=a.aI(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.h(q.a+r,p,q.c)
break
case 2:q=new A.h(q.a+r,p,q.c+s.c)
break
case 1:q=new A.h(q.a+s.a,p,q.c+r)
break
case 3:q=new A.h(q.a,p,q.c+r)
break
default:q=null}return q},
po:function po(){this.a=null
this.b=0},
un:function un(){},
uo:function uo(){},
Ft(a){var s,r,q=A.k4(a,"inventory asset"),p=A.cX(q,"id"),o=A.cX(q,"kind")
A.cX(q,"source")
A.cX(q,"proxy")
A.cX(q,"pivot")
s=q.h(0,"status")
r=A.cX(q,"id")
if(s==null)s="proxy"
if(typeof s!="string"||!A.aF(["production","proxy","invisible-anchor"],t.N).p(0,s))A.f(A.M("invalid inventory asset status "+r+": "+A.y(s),null,null))
q=A.k4(q.h(0,"bounds"),"inventory bounds")
return new A.d8(p,o,s,new A.qD(A.nw(q.h(0,"min"),"bounds.min"),A.nw(q.h(0,"max"),"bounds.max")))},
Fv(a6){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.k4(a6,"inventory placement"),g=A.k4(h.h(0,"visibility"),"placement visibility"),f=A.k4(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.dz,a=h.h(0,"physics"),a0=c.b(a)?a:B.dz,a1=A.cX(h,"id"),a2=A.cX(h,"roomId"),a3=A.cX(h,"assetId"),a4=A.cX(h,"role"),a5=typeof h.h(0,"socket")=="string"?A.w(h.h(0,"socket")):null
h=A.k4(h.h(0,"transform"),"inventory transform")
s=A.nw(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.f(B.hW)
r=A.nw(h.h(0,"position"),"transform.position")
q=A.nw(h.h(0,"rotation"),"transform.rotation")
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
return new A.cL(a1,a2,a3,a4,a5,new A.qF(r,q,s),p,o,n,c,m,l,k,j,A.Fu(a0))},
Fu(a){if(a.gR(a))return B.jM
return new A.lb(A.cX(a,"bodyType"),A.eR(a,"massKg"),A.eR(a,"volumeM3"),A.eR(a,"densityKgM3"),A.eR(a,"friction"),A.eR(a,"restitution"),J.aa(a.h(0,"collision"),!0))},
k4(a,b){return t.P.b(a)?a:A.e3(b+" is not an object")},
cX(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.e3(b+" is not a string")},
eR(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.e3(b+" is not finite")},
nw(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xX())}else s=!0
if(s)return A.e3(b+" is not a finite vec3")
s=J.aQ(a)
return new A.h(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
e3(a){return A.f(A.M(a,null,null))},
qh:function qh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ql:function ql(a){this.a=a},
qk:function qk(){},
qi:function qi(a){this.a=a},
qj:function qj(a){this.a=a},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cL:function cL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
lb:function lb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qF:function qF(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(a,b){this.a=a
this.b=b},
xX:function xX(){},
qE:function qE(a){this.a=a},
dL:function dL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
ze(a,b,c,d){return new A.lj(a,d,c,b)},
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
cb:function cb(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lj:function lj(a,b,c,d){var _=this
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
Fn(a){return A.Fm(a)},
Fm(a){var s,r,q,p,o,n,m=A.D1(a,"sound emitter"),l=t.N,k=A.n(l,l)
for(s=A.D1(m.h(0,"cues"),"sound emitter cues").gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.b
if(typeof q!="string"||q.length===0)throw A.a(B.hP)
k.l(0,r.a,q)}s=A.Ab(m,"id")
r=A.Ab(m,"roomId")
p=A.Ab(m,"placementId")
o=A.JA(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hQ("gain is not a number")
return new A.d7(s,r,p,o,n,A.aX(k,l,l))},
D1(a,b){return t.P.b(a)?a:A.hQ(b+" is not an object")},
Ab(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hQ(b+" is not a string")},
JA(a,b){var s
if(t.j.b(a)){s=J.aQ(a)
s=s.gu(a)!==3||s.M(a,new A.xW())}else s=!0
if(s)throw A.a(A.M(b+" must be a numeric vec3",null,null))
s=J.aQ(a)
return new A.h(A.a1(s.h(a,0)),A.a1(s.h(a,1)),A.a1(s.h(a,2)))},
hQ(a){return A.f(A.M(a,null,null))},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
qs:function qs(){},
qt:function qt(){},
d7:function d7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qd:function qd(){this.b=this.a=null},
f9:function f9(a,b){this.a=a
this.b=b},
qo:function qo(){this.b=this.a=null},
d6:function d6(a,b){this.a=a
this.b=b},
xW:function xW(){},
B1(a,b,c,d,e,f){var s=t.N
return new A.qu(e,f,c,a,A.aX(A.aZ(d,s,s),s,s),A.ab(b,s))},
B2(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.l(0,p.a,new A.iO(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l){j=o[l]
i.l(0,j.a,new A.iC(j.d,j.r))}return A.B1(a.y.b,B.n,i,B.aQ,h,s)},
Fo(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.lv
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bx
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.b0(a2)||!q.b(s)||!t.j.b(r))throw A.a(B.hM)
p=t.N
o=A.n(p,t.DL)
for(n=a.gN(),n=n.gv(n),m=t.z;n.m();){l=n.gq()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cP)
l=A.aZ(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bx(j)||!A.bx(i))A.f(B.cP)
o.l(0,k,new A.iO(j,i))}h=A.n(p,t.y)
for(n=a0.gN(),n=n.gv(n);n.m();){l=n.gq()
k=l.a
if(typeof k!="string"||!A.bx(l.b))throw A.a(B.hI)
h.l(0,k,A.T(l.b))}g=A.n(p,t.m2)
for(n=a1.gN(),n=n.gv(n);n.m();){l=n.gq()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cN)
l=A.aZ(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bx(f)||!A.bx(e))A.f(B.cN)
g.l(0,k,new A.iC(f,e))}d=A.n(p,p)
for(q=s.gN(),q=q.gv(q);q.m();){p=q.gq()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.a(B.iL)
d.l(0,n,A.w(p.b))}c=A.c([],t.s)
for(q=J.O(r);q.m();){b=q.gq()
if(typeof b!="string"||b.length===0)throw A.a(B.h0)
B.a.k(c,b)}return A.B1(a2,c,g,d,o,h)},
A6(a,b){return a.a.a===b.a&&a.a2(0,b.gaF(b))},
qu:function qu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iO:function iO(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
l6(a){var s=B.bD.h(0,a)
if(s==null)throw A.a(A.j("Unknown house surface material: "+a))
return s},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
F4(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hi(e,A.C(e).c)
q=new A.eL()
q.c9((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ij(a,q,2,r,1+s,A.aF(["time"],t.N))
break
case 3:A.ij(a,q,3,r,1+s,A.aF(["place"],t.N))
break
case 4:A.ij(a,q,4,r,2+s,p)
A.F0(a,q,4)
break
case 5:A.ij(a,q,5,r,s,p)
A.EZ(a,q,5)
break
case 6:A.ij(a,q,6,r,s,p)
A.F_(a,q)
A.F3(a,q,6)
break
case 7:A.F1(a,q,7)
break
default:if(s>0)A.ij(a,q,b,r,s,p)}},
EY(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.p(0,b.a))return!1
if(A.F2(a,b,c))return!1
return!0},
ij(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));s.m();){r=s.d
if(A.EY(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dQ(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.AU(a,b,o[p],f)}},
AU(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aZ(B.a.ga7(o).a,n,n)
if(d==null)s=A.c(B.D.slice(0),t.s)
else{n=t.vY
s=A.K(new A.I(B.D,t.Ag.a(new A.pj(d)),n),n.i("r.E"))}n=s.length
if(n===0)return
n=b.aY(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fi(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.aY(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.eo(c.a,m,B.a.ga7(o).b)},
F0(a,b,c){var s=A.AV(a,b,c)
if(!a.cj(s))return
a.fv(c,t.G.a(s),0,B.bk,null)},
AV(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.D[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.aY(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
EZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dQ(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aZ(B.a.ga7(i).a,s,s)
r=p.c
n=A.aZ(B.a.ga7(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.D[m]
k=o.h(0,l)
j=s.fi(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aY(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.eo(q.a,o,B.a.ga7(i).b)
a.eo(p.a,n,B.a.ga7(r).b)},
F_(a,b){var s,r,q=A.c([],t.U)
for(s=a.b,r=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aY(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a9(0,q[r].a)},
F3(a,b,c){var s,r,q=A.c([],t.U)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aY(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.AU(a,b,q[s],null)},
F1(a,b,c){var s=c+1,r=A.AV(a,b,s)
if(!a.cj(r))return
a.fv(s,t.G.a(r),0,B.bk,null)},
F2(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.ga7(b.c).c===B.aN}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.ga7(b.c).c===B.aN}if(c===21)return b.e
return!1},
pj:function pj(a){this.a=a},
GC(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.D[s]
q=a.h(0,r)
p=A.aG(q==null?B.n:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.v7(n)},
qY(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.D[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.li(A.aX(p,q,q),b,c)},
Bc(a){var s=t.N
return A.qY(t.P.a(a.h(0,"fields")).bv(0,new A.qZ(),s,s),A.a1(a.h(0,"shakiness")),A.F9(B.ks,A.w(a.h(0,"hand")),t.qX))},
F8(a){var s,r,q,p,o=a.h(0,"margin"),n=A.i(a.h(0,"ordinal")),m=A.i(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.Bc(r.a(s.gq())))
s=A.aq(a.h(0,"corroborator"))
q=A.T(a.h(0,"locked"))
p=A.zE(a.h(0,"lastReadDay"))
return new A.c6(n,m,l,s,q,p,o==null?null:A.Bc(r.a(o)))},
es:function es(a,b){this.a=a
this.b=b},
v7:function v7(a){this.a=a},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
qZ:function qZ(){},
r_:function r_(a){this.a=a},
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
B9(a){return new A.qJ(a,A.n(t.S,t.g),A.a_(t.N),A.c([],t.t))},
FA(a,b){var s,r,q,p,o=A.B9(a)
o.e=A.i(b.h(0,"nextOrdinal"))
o.f=A.i(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.En(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.F8(r.a(s.gq()))
q.l(0,p.a,p)}return o},
qJ:function qJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
qQ:function qQ(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
oD:function oD(){},
FR(a){var s,r,q,p,o,n,m,l,k=B.f.ak(a,null),j=t.f
if(!j.b(k)||!J.aa(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.a(B.h5)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.a(B.ip)
r=A.c([],t.d8)
for(q=J.O(s);q.m();){p=q.gq()
if(j.b(p)){o=A.aq(p.h(0,"assetId"))
if(o==null)o=""
n=A.aq(p.h(0,"licenseId"))
if(n==null)n=""
m=A.aq(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.aq(p.h(0,"sourceFormat"))
r.push(new A.iQ(o,n,m,l==null?"":l))}else r.push(A.f(B.i0))}return new A.rY(A.FS(r))},
FS(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.n(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=A.iX("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.M("promoted model index ID is invalid: "+o,n,n))
if(k.K(o))throw A.a(A.M("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aP(p).length===0||p==="unknown"||p==="unlicensed")throw A.a(A.M("promoted model index rights are unknown: "+o,n,n))
if(!A.aF(["obj","gltf","glb","fbx"],m).p(0,q.d))throw A.a(A.M("promoted model index source format is invalid: "+o,n,n))
if(!A.Jb(q.c))throw A.a(A.M("promoted model index manifest path is unsafe: "+o,n,n))
k.l(0,o,q)}return A.aX(k,m,l)},
Jb(a){if(a.length===0||B.c.V(a,"/")||B.c.p(a,"://"))return!1
if(B.c.bf(a.toLowerCase(),".obj")||B.c.bf(a.toLowerCase(),".mtl")||B.c.bf(a.toLowerCase(),".fbx"))return!1
return B.a.a2(A.c(a.split("/"),t.s),new A.xL())},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rY:function rY(a){this.a=a},
xL:function xL(){},
Bn(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.n(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=A.iX("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.M("asset ID is not stable kebab-case: "+o,j,j))
if(g.K(o))throw A.a(A.M("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.a(A.M("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aP(m).length===0||m==="unknown"||m==="unlicensed")throw A.a(A.M("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.a(A.M("package is not approved: "+o,j,j))
l=A.DP(n)
if(l.length!==0)throw A.a(A.M("package manifest is invalid for "+o+": "+B.a.bu(l,new A.t_(),i).W(0,"; "),j,j))
p=p.b
k=A.KA(n,p)
if(k.length!==0)throw A.a(A.M("package payloads are invalid for "+o+": "+B.a.bu(k,new A.t0(),i).W(0,"; "),j,j))
if(A.Bj(n,p)!==n.c)throw A.a(A.M("package hash mismatch: "+o,j,j))
g.l(0,o,q)}return A.aX(g,i,h)},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function lH(a){this.a=a},
t_:function t_(){},
t0:function t0(){},
rS:function rS(){},
rR:function rR(a,b,c){this.b=a
this.c=b
this.d=c},
rT:function rT(){},
FP(a,b,c){return B.mF},
lA:function lA(a,b){this.a=a
this.b=b},
rU:function rU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rV:function rV(){},
rW:function rW(a){this.d=a},
ho:function ho(){},
rX:function rX(a){this.a=a},
rZ:function rZ(){},
t1:function t1(a,b){this.a=a
this.b=b},
t2:function t2(){},
t3:function t3(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
tc:function tc(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
Bx(a){if(!isFinite(0))A.f(A.a7(0,"interpolation",null))
return new A.tp(a)},
lO:function lO(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
tp:function tp(a){this.a=a},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
Bv(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hi(c,A.C(c).c)
r=A.K(r,A.v(r).c)
B.a.X(r)
s=t.N
r=A.ab(r,s)
r=new A.to(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aX(l,s,t.X))
r.jZ(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Bw(a,b,c,d){var s=A.np("RENDERER_SHA"),r=A.np("GAME_SHA"),q=A.np("DART_SDK_VERSION")
return A.Bv(a,"f5179efede63-bd0c05e54dd5-dirty",b,!1,null,r,A.np("LOCKFILE_SHA256"),d,A.np("PROJECT_VERSION"),s,q,null)},
np(a){var s=B.lm.h(0,a)
return s.length===0?null:s},
to:function to(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
tq:function tq(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
uc:function uc(a){this.a=a},
ud:function ud(){},
X(a,b,c,d,e,f,g,h,i,j){return new A.cu(e,g,a,f,i,h,j,c,c,b,B.e9)},
BD(){var s=new A.ue(B.aA)
s.w=t.yu.a(A.c([A.X(B.a_,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.X(B.a_,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.X(B.a_,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.X(B.a_,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.X(B.a_,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.X(B.af,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.X(B.af,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.X(B.af,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.X(B.af,!0,1,"Weather-aware shadow filter hardness (higher is sharper)","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.X(B.af,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.X(B.aB,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.X(B.aB,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.X(B.aB,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.X(B.aB,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.X(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.X(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.X(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.X(B.l,!0,1,"Scale for the start/end distance of atmospheric extinction","fog_distance_scale",!1,"Fog Distance Reach",2,0.25,0.05),A.X(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.X(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.X(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.X(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.X(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.X(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.X(B.l,!0,12,"Raymarch samples per pixel (4=preview, 24=clean)","volumetric_precision",!1,"Volumetric Sample Rate",24,4,1),A.X(B.l,!0,0.02,"Near-field particulate density that gives light shafts visible body","volumetric_dust_density",!1,"Suspended Dust Density",0.25,0,0.005),A.X(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.X(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.X(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.X(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.X(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.X(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.X(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.X(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.X(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.X(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.X(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.X(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.X(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.X(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.X(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.X(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.X(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.X(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.X(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.X(B.a_,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.X(B.u,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.X(B.u,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.X(B.u,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.X(B.u,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.X(B.u,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.X(B.u,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.X(B.u,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05),A.X(B.u,!0,1,"Ray-marched cloud layer on clear skybox pixels","cloud_enable",!0,"Volumetric Cloud Shell",1,0,0.05),A.X(B.u,!0,-0.1,"Override weather cloud coverage (-0.1 = schedule driven)","cloud_coverage_override",!1,"Cloud Coverage Lock",1,-0.1,0.05),A.X(B.u,!0,0.72,"Extinction through the finite volumetric cloud shell","cloud_density",!1,"Cloud Optical Density",1,0,0.05),A.X(B.u,!0,0.55,"High-frequency erosion mixed into the cloud body noise","cloud_detail",!1,"Cloud Detail",1,0,0.05),A.X(B.u,!0,1,"Scale for authored wind transport through the cloud shell","cloud_speed",!1,"Cloud Advection Speed",2,0,0.05),A.X(B.u,!0,0.25,"Bounded forward-scattered edge response around cloud forms","cloud_silver_lining",!1,"Cloud Silver Lining",1,0,0.05),A.X(B.u,!0,12,"Sky cloud samples per pixel (4=preview, 24=clean)","cloud_samples",!1,"Cloud Raymarch Samples",24,4,1)],t.hT))
return s},
c0:function c0(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ue:function ue(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
ul:function ul(a){this.a=a},
uf:function uf(){},
ug:function ug(){},
um:function um(){},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
ui:function ui(a){this.a=a},
uh:function uh(a){this.a=a},
Go(a){var s,r,q,p,o,n=B.b.n(a,7,17),m=new A.uu()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.cG()
if(o<n)s=p
else r=p}return(s+r)*0.5},
BH(a){var s
if(!isFinite(a))throw A.a(A.a7(a,"horizonVisibility01",null))
s=B.b.n(a,0,1)
return s*s*(3-2*s)},
uu:function uu(){},
AR(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.f(A.M("saved day-loop resources must not be negative",null,null))
return new A.pc(c,g,b,a,e,d===!0,s)},
ES(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.a(B.hs)
s=A.c([],t.El)
for(r=J.O(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gq()
if(!k.b(j))throw A.a(B.hN)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.b0(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.a(B.hl)
f=A.bK(new A.I(B.df,q.a(new A.pd(h)),p),o)
e=A.bK(new A.I(B.dd,n.a(new A.pe(g)),m),l)
if(f==null||e==null)throw A.a(B.iA)
B.a.k(s,new A.hw(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.b0(d)||!A.b0(c)||!A.b0(b)||!A.bx(a))throw A.a(B.hY)
return A.AR(c,d,a1,a,b,s,a3)},
c1:function c1(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
pc:function pc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
kT:function kT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
l9:function l9(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
vs:function vs(a,b){this.b=a
this.c=b},
fy:function fy(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
qw:function qw(a){this.c=a},
qA:function qA(a,b,c){this.a=a
this.b=b
this.d=c},
qB:function qB(){},
G2(a,b){var s,r,q,p=A.ab(b,t.Dp),o=A.n(t.N,t.cw)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
o.l(0,q.a,q)}p=new A.t9(p,o)
p.jY(a,b)
return p},
iV:function iV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iU:function iU(a,b,c,d){var _=this
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
ta:function ta(a){this.a=a},
tb:function tb(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
t9:function t9(a,b){this.a=a
this.b=b},
zR(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.a(B.ix)
B.a.k(p,q)}return p},
ct:function ct(a,b){this.a=a
this.b=b},
tr:function tr(){},
df:function df(){},
ts:function ts(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
l_:function l_(a,b,c){this.a=a
this.b=b
this.c=c},
Il(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.xp(s,a).$0())
return r},
nt(a,b){var s=(a^b*73244475)&2147483647
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
vk:function vk(a){this.b=a},
xp:function xp(a,b){this.a=a
this.b=b},
k_(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
BX(a){var s
switch(a.a){case 0:s=B.pz
break
case 1:s=B.py
break
case 2:s=B.pB
break
case 3:s=B.px
break
case 4:s=B.pA
break
default:s=null}return s},
BW(a,b){return new A.mp(!1,0,0)},
GF(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.k_(f)||!A.k_(a)||!A.k_(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.a(A.o("weather impact inputs must be finite and valid",j))
if(b===B.w)return A.BW(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.A()
m=A.GE(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.BW(a,g)
f.a4(0,a.ac(0,f).a6(0,p))
l=g.be(g)
A:{if(B.aw===b||B.a9===b){s=B.pv
break A}if(B.aa===b){s=q.d>0.5?B.pw:B.ce
break A}if(B.X===b){s=l>1?B.ew:B.ce
break A}if(B.w===b){s=B.pu
break A}s=j}if(s===B.ew){k=q.e
g.ac(0,r.a6(0,2*g.be(r))).a6(0,k)}s=s===B.ce?d:0
return new A.mp(!0,0.5*d*l,s)},
GE(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.ac(0,new A.h(a2,a2,a2)),d=a1.c.a4(0,new A.h(a2,a2,a2)),c=a0.ac(0,a),b=new A.h(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.vh(a,o)
m=A.vh(c,o)
l=A.vh(e,o)
k=A.vh(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.BU(o,m>0)
if(j>i){h=A.BU(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.BV(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.BV(c)}if(r>1)return f
return new A.a5(r,b)},
vh(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
BU(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.h(r,0,0)
break A}if(1===a){s=new A.h(0,r,0)
break A}s=new A.h(0,0,r)
break A}return s},
BV(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.h(0,q>0?-1:1,0)
if(r>=n)return new A.h(s>0?-1:1,0,0)
return new A.h(0,0,o>0?-1:1)},
BY(a,b,c){var s=new A.hE(b,c,a)
s.hx()
return s},
BZ(a,b,c){return A.BY(a,b,c)},
GJ(a){var s,r,q
if(!t.f.b(a))throw A.a(B.iq)
s=new A.vl(a)
r=s.$1("snowDepthM")
q=s.$1("waterFilmDepthM")
return A.BY(s.$1("materialDissolution01"),r,q)},
vj(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
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
if(h===B.w&&l.b)h=B.aw
g=A.GG(h,B.b.n(l.c,0,1))*k
f=A.GH(h)
e=h===B.aa?g/120:0
d=h===B.w?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.n(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.vi(h,new A.h(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
GI(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.k_(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.a(A.o("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.f(A.o("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.f(A.o("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.h(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.n((e-b)/Math.max(1,s),0,1)
return new A.v9(m,e,l,d,e>b)},
GG(a,b){var s
if(a===B.w)return 0
s=0.00005+b*0.00045
return a===B.X?s*0.75:s},
GH(a){var s
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
hD:function hD(a,b,c,d,e,f,g,h,i){var _=this
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
v9:function v9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vi:function vi(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mp:function mp(a,b,c){this.a=a
this.f=b
this.r=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
vl:function vl(a){this.a=a},
vm:function vm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
JL(a){var s
A:{if("broadcast"===a){s=B.eK
break A}if("visitor"===a){s=B.eL
break A}if("aftermath"===a){s=B.eM
break A}if("ending"===a){s=B.eN
break A}s=A.f(A.M("screenplay event has no consumer: "+a,null,null))}return s},
Fg(a){var s=A.K(a.c,t.z)
B.a.Y(s,new A.pI())
s=new A.pH(A.ab(s,t.Dm))
s.pq()
return s},
Ff(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.kY(a,c,A.fc(B.n,t.N))
s=t.N
r=J.AG(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.kY(a,c,A.fc(new A.I(r,q.i("l(r.E)").a(new A.pG(a)),q.i("I<r.E>")),s))},
f_:function f_(a,b){this.a=a
this.b=b},
pH:function pH(a){this.a=a},
pI:function pI(){},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
pG:function pG(a){this.a=a},
rv(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.L(0,a)
s=A.n(r,r)
if(b!=null)s.L(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.ru(q,s,r)},
FJ(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.b0(s)||s!==1)return l
r=A.Bl(a.h(0,"choices"))
q=A.Bl(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gN(),k=k.gv(k);k.m();){n=k.gq()
m=A.Fd(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.l(0,n,m)}return A.rv(r,q,p)},
Bl(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gN(),s=s.gv(s);s.m();){q=s.gq()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.l(0,p,A.w(q.b))}return r},
Fd(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.b0(r)||r<1||!A.b0(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.d1(s,r,q,p)},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
rw:function rw(){},
rx:function rx(){},
ry:function ry(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FO(a,b){var s,r,q,p=A.c([],t.xz)
for(s=J.O(a);s.m();){r=s.gq()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bC("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.rP(b,p)},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rP:function rP(a,b){this.a=a
this.b=b},
rQ:function rQ(a){this.a=a},
hy(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
q.l(0,B.d.t(r.a),r.b)}return q},
uy:function uy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
uz:function uz(){},
uA:function uA(){},
fu:function fu(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b){this.a=a
this.b=b},
mn:function mn(a,b,c,d,e,f){var _=this
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
Gq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.ak(a,g)
if(!t.f.b(f))throw A.a(B.ik)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bx
if(J.aa(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.a(B.ih)
p=A.c([],t.wM)
for(o=J.O(r);o.m();)p.push(A.Gg(o.gq()))
o=A.c([],t.D)
for(n=J.O(q);n.m();)o.push(A.Gf(n.gq()))
n=t.N
m=A.a_(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.u)(p),++k){j=p[k].a
if(!m.k(0,j))throw A.a(A.M("duplicate screenplay scene: "+j,g,g))}i=A.a_(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.u)(o),++k){n=o[k].a
if(!i.k(0,n))throw A.a(A.M("duplicate screenplay event: "+n,g,g))}p=A.c([],t.s)
for(n=J.O(s);n.m();){h=n.gq()
if(typeof h!="string"||h.length===0)A.f(A.M("source must be a non-empty string",g,g))
p.push(h)}return new A.uw(o)},
Gf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.w(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.w(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.w(a.h(0,f)).length===0)throw A.a(B.hF)
s=a.h(0,"effects")
if(s==null)s=B.bx
if(!t.j.b(s)||J.kd(s,new A.ty()))throw A.a(B.io)
r=B.b.aE(A.a1(a.h(0,"day")))
q=A.a1(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.a(B.i9)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.a(B.h9)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.a(B.iJ)
l=new A.tz(a)
m=A.w(a.h(0,"id"))
k=A.w(a.h(0,g))
j=A.w(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.c([],t.s)
for(h=J.O(s);h.m();)i.push(A.w(h.gq()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.dQ(m,k,r,q,j,A.ab(i,t.N),n,h)},
Gg(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.a(B.hq)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.aE(r)!==r)throw A.a(B.hU)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.a(A.M("screenplay scene "+s+" has invalid arrays",null,null))
m=B.b.aE(r)
l=A.c([],t.s)
for(k=J.O(p);k.m();){j=k.gq()
if(typeof j!="string"||j.length===0)A.f(B.i7)
l.push(j)}l=A.c([],t.rn)
for(k=J.O(o);k.m();){j=k.gq()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.f(B.iF)
A.w(j.h(0,"kind"))
A.w(j.h(0,"text"))
A.aq(j.h(0,"speaker"))
l.push(new A.lU())}i=A.c([],t.gg)
for(l=J.O(n);l.m();)i.push(A.Ge(l.gq()))
return new A.lX(s,m)},
Ge(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.a(B.hy)
s=A.w(a.h(0,m))
A.w(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.O(t.tY.a(a.h(0,"options")));q.m();){p=q.gq()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.f(B.id)
o=A.w(p.h(0,m))
n=A.w(p.h(0,"label"))
A.w(p.h(0,"next"))
r.push(new A.lW(o,n))}return new A.lV(s)},
uw:function uw(a){this.c=a},
ux:function ux(){},
dQ:function dQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
ty:function ty(){},
tz:function tz(a){this.a=a},
lX:function lX(a,b){this.a=a
this.b=b},
lU:function lU(){},
lV:function lV(a){this.a=a},
lW:function lW(a,b){this.a=a
this.b=b},
uB:function uB(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
uC:function uC(){},
uD:function uD(){},
kf:function kf(a){this.a=a},
z4:function z4(a,b,c){this.b=a
this.e=b
this.f=c},
Et(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.h4)
s=new A.nK()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.zF(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.eb(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b5(B.bA,new A.nI(a),new A.nJ()))},
d_:function d_(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
nK:function nK(){},
nI:function nI(a){this.a=a},
nJ:function nJ(){},
nV:function nV(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
nX:function nX(a){this.a=a},
nW:function nW(a,b){this.a=a
this.b=b},
o2:function o2(a,b){this.a=a
this.b=b},
EA(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.hV)
s=new A.oc()
return new A.ed(s.$1$2(B.by,a.h(0,"output"),t.xs),s.$1$2(B.bs,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.br,a.h(0,"reverb"),t.gc),s.$1$2(B.bp,a.h(0,"ducking"),t.ul))},
cH:function cH(a,b){this.a=a
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
oc:function oc(){},
od:function od(a,b){this.a=a
this.b=b},
oe:function oe(a){this.a=a},
oF:function oF(a){this.a=a
this.b=null},
oJ(a,b,c){var s
b.A()
if(c<1||c>6)throw A.a(A.a7(c,"level","must be between 1 and 6"))
s=A.F(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.oH(s,b)
return s},
em(a,b,c,d){var s,r,q
b.A()
s=b.e
r=d==null?b.c:d
q=A.F(a,"button","brush-button brush-state-"+s.b,r)
A.oH(q,b)
q.type="button"
q.disabled=s===B.aI
q.addEventListener("click",A.Z(new A.oI(c)))
return q},
EF(a,b,c,d){var s,r
b.A()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aI
A.oH(s,b)
s.addEventListener("change",A.Z(new A.oM(d,s)))
return s},
EE(a,b,c,d,e,f){var s,r
b.A()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aI
A.oH(s,b)
s.addEventListener("input",A.Z(new A.oL(s,e)))
return s},
z6(a,b){var s=B.c.jE(A.w(a.className),A.iX("\\s+")),r=A.C(s),q=r.i("I<1>"),p=A.K(new A.I(s,r.i("l(1)").a(new A.oK()),q),q.i("r.E"))
s=b.b
B.a.k(p,"brush-state-"+s)
a.className=B.a.W(p," ")
a.setAttribute("data-brush-state",s)},
oH(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gm1())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aI)a.setAttribute("aria-disabled","true")},
oI:function oI(a){this.a=a},
oM:function oM(a,b){this.a=a
this.b=b},
oL:function oL(a,b){this.a=a
this.b=b},
oK:function oK(){},
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
oO:function oO(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
oP:function oP(a){this.a=a},
AP(a){var s=!1
if(a.length!==0)if(!B.e4.p(0,a))s=B.nK.p(0,a)||B.nA.p(0,a)||B.nJ.p(0,a)||!B.c.V(a,"Mouse")
return s},
I4(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.l(0,q,p)}return n},
IL(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.N(a,A.v(a).i("N<1,2>"))
p=J.O(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gq()
q.l(0,r.a,A.c([r.b],s))}return q},
h3(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.hh(B.lj,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.IL(a))
s=new A.h2(g,d,h,e,f,c,A.aX(A.I4(q),s,r))
s.A()
return s},
EP(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.a(B.cO)
s=a.h(0,"version")
r=J.eW(s)
if(!r.aa(s,1)&&!r.aa(s,2))throw A.a(B.cO)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gN(),j=j.gv(j),r=t.s,p=t.j;j.m();){o=j.gq()
n=o.a
m=o.b
if(typeof n!="string")throw A.a(B.hG)
if(typeof m=="string")q.l(0,n,A.c([m],r))
else if(p.b(m)&&J.Ep(m,new A.p1())){o=A.c([],r)
for(l=J.O(m);l.m();)o.push(A.w(l.gq()))
q.l(0,n,o)}else throw A.a(B.hc)}j=A.a1(a.h(0,"horizontalSensitivity"))
r=A.a1(a.h(0,"verticalSensitivity"))
p=A.T(a.h(0,"invertX"))
o=A.T(a.h(0,"invertY"))
return A.h3(null,q,A.T(a.h(0,"holdToInteract")),j,p,o,2,r)},
zH(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
r=A.K(r.b,p)
o.l(0,q,r)}return o},
A1(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
Ag(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
h2:function h2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
p3:function p3(){},
p2:function p2(a){this.a=a},
p4:function p4(){},
p5:function p5(){},
p6:function p6(){},
p1:function p1(){},
ej:function ej(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.c=b},
kz:function kz(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
EO(a){var s=t.N,r=t.m
r=new A.ih(A.h3(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.b(a.createElement("div")))
r.b_(a)
r.jR(a)
return r},
ih:function ih(a,b,c,d,e,f){var _=this
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
p_:function p_(a,b){this.a=a
this.b=b},
p0:function p0(a){this.a=a},
oZ:function oZ(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
oY:function oY(a,b){this.a=a
this.b=b},
EQ(a){var s=new A.p7(a,A.b(a.createElement("div")))
s.b_(a)
s.jS(a)
return s},
p7:function p7(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
p8:function p8(a){this.a=a},
EW(a){var s=new A.pf(A.F(a,"div","door",null))
s.jU(a)
return s},
AS(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.W(s,"; ")+"."},
pf:function pf(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
pg:function pg(a){this.a=a},
ph:function ph(a,b){this.a=a
this.b=b},
pi:function pi(a,b){this.a=a
this.b=b},
F5(a){var s=new A.pl(a,A.b(a.createElement("div")))
s.b_(a)
s.jV(a)
return s},
pl:function pl(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pm:function pm(a){this.a=a},
pQ:function pQ(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
pR:function pR(){},
Fh(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.pS(a.b===B.cV,a.c===B.cZ,s,a.e===B.cW,a.f===B.cT,a.r===B.d0,a.w,a.x)},
pS:function pS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
z7(a,b,c,d,e,f,g,h,i,j,k){return new A.ha(e,g,k,f,b,h,d,c,a,i,j)},
Fi(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.ia)
s=new A.pT(a)
r=a.h(0,"contextualReminders")
if(!A.bx(r))throw A.a(B.iy)
q=!A.bx(a.h(0,i))||A.T(a.h(0,i))
p=s.$1$2("interactionMode",B.bz,t.bK)
o=s.$1$2("promptDensity",B.bC,t.dn)
n=s.$1$2("textPacing",B.bB,t.j_)
m=s.$1$2("journalLayout",B.bt,t.gm)
l=s.$1$2("confirmations",B.bn,t.aJ)
k=s.$1$2("saveFeedback",B.bu,t.mx)
j=s.$1$2("focusLossBehavior",B.aP,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bq,t.vS):B.bb
return A.z7(s,l,r,j,p,m,o,k,q,A.bx(a.h(0,g))&&A.T(a.h(0,g)),n)},
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
cp:function cp(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
pT:function pT(a){this.a=a},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a){this.a=a},
B_(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.hS)
s=B.a.b5(B.dh,new A.q6(a),new A.q7())
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
j=A.CD(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dH(1,s,r,q,p,o,n,m,l,k,j===!0)
i.A()
return i},
hd(a,b){var s=b==null?B.bj:b
return new A.q8(s,a==null?B.bj:a)},
DF(a,b){var s,r,q
a.A()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.em(b.a>=2?"msaa2":"off")
B.a.k(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.em("off")
B.a.k(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hO(!1)
B.a.k(s,"dynamic resolution timing is unavailable")}if(q.b===B.bh&&b.a<2){q=q.hP(B.bi)
B.a.k(s,"High preset was reduced to Standard")}return new A.q_(q,A.ab(s,t.N))},
cJ:function cJ(a,b){this.a=a
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
q6:function q6(a){this.a=a},
q7:function q7(){},
q8:function q8(a,b){this.a=a
this.b=b},
pZ:function pZ(a,b){this.a=a
this.b=b},
q_:function q_(a,b){this.a=a
this.b=b},
Fk(a){var s=new A.iu(A.n(t.N,t.m),B.bj,a,A.b(a.createElement("div")))
s.b_(a)
s.jW(a)
return s},
iu:function iu(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.Q=_.z=_.y=null
_.as=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
q2:function q2(a){this.a=a},
q3:function q3(a){this.a=a},
q4:function q4(a){this.a=a},
q5:function q5(a){this.a=a},
q1:function q1(a,b,c){this.a=a
this.b=b
this.c=c},
q0:function q0(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(){this.c=0},
Fl(a){var s=new A.qa(a,A.b(a.createElement("div")))
s.b_(a)
s.jX(a)
return s},
qa:function qa(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
qb:function qb(a){this.a=a},
qK:function qK(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(){},
qP:function qP(){},
Kv(a,b,c){if(!isFinite(c)||!isFinite(b)||b<=c)throw A.a(A.o("temperature gauge range must be finite and ordered",null))
if(!isFinite(a))return 0.5
return B.b.n((a-c)/(b-c),0,1)},
dc:function dc(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rE:function rE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
F(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
CM(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.W)
for(s=t.m,r=0;r<A.i(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
iN:function iN(){},
bB:function bB(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(){},
rL:function rL(){},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
rJ:function rJ(a){this.a=a},
rM:function rM(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
rN:function rN(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rO:function rO(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
t8:function t8(a){this.a=a
this.b=null},
Gh(a){var s=new A.tB(a,A.b(a.createElement("div")))
s.b_(a)
s.k_(a)
return s},
tB:function tB(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tC:function tC(a,b){this.a=a
this.b=b},
tD:function tD(a){this.a=a},
lY(a,b){var s=t.N,r=t.m
r=new A.hv(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.z1(),B.aF,A.n(s,r),A.n(s,r),B.b3,A.n(s,r),a,A.b(a.createElement("div")))
r.b_(a)
r.k0(a,b)
return r},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
u1:function u1(a){this.a=a},
u2:function u2(a){this.a=a},
u3:function u3(a,b){this.a=a
this.b=b},
u4:function u4(a){this.a=a},
u5:function u5(a){this.a=a},
tU:function tU(a,b){this.a=a
this.b=b},
tV:function tV(a,b){this.a=a
this.b=b},
tT:function tT(a){this.a=a},
tW:function tW(a){this.a=a},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a,b){this.a=a
this.b=b},
tY:function tY(a,b){this.a=a
this.b=b},
tZ:function tZ(a,b){this.a=a
this.b=b},
tS:function tS(a,b,c){this.a=a
this.b=b
this.c=c},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tP:function tP(a){this.a=a},
tQ:function tQ(a){this.a=a},
tR:function tR(a){this.a=a},
tJ:function tJ(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(a){this.a=a},
tG:function tG(a){this.a=a},
tH:function tH(a){this.a=a},
tI:function tI(a){this.a=a},
u0:function u0(a,b,c){this.a=a
this.b=b
this.c=c},
u_:function u_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u7(a){return B.a.b5(B.F,new A.u8(a),new A.u9(a))},
Gi(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
q.l(0,r.a,r.e)}return q},
dS(a,b){var s=t.z
s=A.hh(A.Gi(),s,s)
if(a!=null)s.L(0,a)
s=new A.u6(b,A.aX(s,t.N,t.K))
s.k5(a,b)
return s},
BC(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.iu)
s=a.h(0,"values")
if(!r.b(s))throw A.a(B.hr)
return A.dS(A.aZ(s,t.N,t.K),A.i(a.h(0,"version")))},
bN:function bN(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
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
u8:function u8(a){this.a=a},
u9:function u9(a){this.a=a},
u6:function u6(a,b){this.a=a
this.b=b},
zn(a,b){var s=b==null?A.dS(null,1):b
return new A.ua(s,a==null?A.dS(null,1):a)},
Gj(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.F[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fh(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dJ(r)
J.b7(l,s.a,r)}catch(n){if(!(A.ah(n) instanceof A.A))throw n}}m=A.dS(l,1)
return A.zn(m,m)},
ua:function ua(a,b){this.a=a
this.b=b},
Gm(a){var s=new A.uq(A.n(t.u5,t.nx),a,A.b(a.createElement("div")))
s.b_(a)
s.k6(a)
return s},
uq:function uq(a,b,c){var _=this
_.f=null
_.r=a
_.w=$
_.a=b
_.b=c
_.e=_.d=_.c=null},
ur:function ur(){},
us:function us(a,b,c){this.a=a
this.b=b
this.c=c},
Ew(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
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
B.a.k(i,new A.cF(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.nT())
return new A.nS(A.ab(i,t.bC),A.a_(t.N))},
cF:function cF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nS:function nS(a,b){this.a=a
this.b=b},
nU:function nU(){},
nT:function nT(){},
GB(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.pt
s=t.T
r=A.n(s,t.q1)
q=A.v(a).i("ae<1>")
p=A.K(new A.ae(a,q),q.i("r.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gN(),j=j.gv(j);j.m();){i=j.gq()
h=i.a
if(h<1||h>21)return new A.bv(new A.bF(B.pb,k+" has an out-of-range authored day "+h+"."))
g=A.GA(k,h,i.b,m)
if(g instanceof A.bv)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.l(0,new A.c4(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.ac(o,o.r,o.e,A.v(o).i("ac<2>"));o.m();){n=o.d
J.e9(e.c_(n.b,new A.v1()),n)}o=A.aX(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.N(e,e.$ti.i("N<1,2>")).gv(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aG(d.b,!1,m)
c.$flags=3
q.l(0,j,c)}return new A.ml(new A.mk(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.ad,A.rv(b,b,b)))},
GA(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.dc[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gN(),k=k.gv(k),j=m.length;k.m();){i=k.gq()
h=i.a
if(!B.c.V(h,m))continue
g=A.dM(B.c.aQ(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bv(new A.bF(B.pc,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dk
B.a.k(l,new A.cg(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.uZ())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bv(new A.bF(B.eu,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bv(new A.bF(B.eu,a+" day "+s+" has no authored tiers."))
return new A.mS(c)},
mk:function mk(a,b,c,d,e,f,g,h){var _=this
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
v4:function v4(a){this.a=a},
v3:function v3(a){this.a=a},
v5:function v5(a){this.a=a},
v_:function v_(a){this.a=a},
v0:function v0(){},
v2:function v2(a){this.a=a},
v1:function v1(){},
uY:function uY(a){this.a=a},
uX:function uX(a){this.a=a},
uZ:function uZ(){},
ml:function ml(a){this.a=a},
mS:function mS(a){this.a=a},
K1(a){var s,r,q,p=A.a_(t.N)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gv(0);s.m();){r=s.d
for(q=r.b.gam(),q=q.gv(q);q.m();)if(q.gq().ga3().M(0,new A.ya())){p.k(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.X(s)
return s},
K0(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.aG(b,!0,s)
B.a.X(r)
q=new A.eL()
q.c9((a^913741)>>>0)
p=q.aY(4)
if(!(p>=0&&p<4))return A.d(B.db,p)
o=B.db[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.aG(r,!0,s)
B.a.dQ(m,q)
s=A.hz(m,0,A.e7(n,"count",t.S),A.C(m).c).bH(0)
B.a.X(s)
return s},
ya:function ya(){},
BS(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.b0(r)||!A.b0(q)||!A.b0(p)||r<1||q<0||q>23||p<0)return null
return new A.c4(s,r,q,p)},
Gz(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gq()
if(typeof p!="string")return i
r.k(0,p)}o=A.a_(t.T)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.BS(s.gq())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Ev(m)
if(!s&&l==null)return i
return new A.mm(r,o,l)},
Ev(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.BS(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.b0(p))if(!(p<0))if(A.bx(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bK(new A.I(B.dc,t.u_.a(new A.nP(r)),t.ni),t.hF)
j=A.bK(new A.I(B.ld,t.da.a(new A.nQ(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bK(new A.I(B.k3,t.kr.a(new A.nR(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.kh(s,k,j,p,i,n,A.aq(m))},
bV:function bV(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
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
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mm:function mm(a,b,c){this.a=a
this.b=b
this.c=c},
uW:function uW(){},
kh:function kh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nP:function nP(a){this.a=a},
nQ:function nQ(a){this.a=a},
nR:function nR(a){this.a=a},
mj:function mj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
v6:function v6(){},
bv:function bv(a){this.a=a},
mi:function mi(a){this.a=a},
mg:function mg(a){this.a=a},
je:function je(a,b){this.a=a
this.b=b},
mh:function mh(a,b,c){this.a=a
this.b=b
this.c=c},
x1(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l
var $async$x1=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.b(A.b(A.b(A.b(v.G.window).navigator).clipboard).writeText(B.f.a0($.bT().eZ(),null))),t.X),$async$x1)
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
return A.aK($async$x1,r)},
xq(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j
var $async$xq=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.b(A.b(A.b(A.b(v.G.window).navigator).clipboard).readText()),t.N),$async$xq)
case 6:o=b
n=o
$.bT().nO(n)
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
return A.aK($async$xq,r)},
J0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.ka())return f
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
if(s!=null)try{q=B.f.ak(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gN(),m=m.gv(m);m.m();){o=m.gq()
if(typeof o.a!="string"||typeof o.b!="string"||!B.nB.p(0,o.b))return f
J.b7(p,A.w(o.a),A.w(o.b))}r=p}else return f}catch(g){if(A.ah(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.nI.p(0,i))return f
if(h!=null&&!B.nF.p(0,h))return f
return new A.vy(l,k,j,h,r)},
J1(){var s,r,q,p=A.dW().gaZ().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fp
break A}if("intimate"===p){s=B.fr
break A}s=B.fq
break A}r=A.dW().gaZ().h(0,"cameraFov")
q=A.fh(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fX(B.b.n(q,35,100)*3.141592653589793/180,s.b,s.c)},
hX(a){var s=$.bf
if(s===a&&B.c.p(A.w(a.b.className),"open"))return
if(s!=null)s.ah()
$.bf=a
if(a===$.fJ.j())$.fJ.j().j9($.af===$.R.j().r)
if(a===$.cA.j())$.i5().iA("gameplay.viewport")
else $.i5().oD(A.D2(a))
s=$.am.j()
s.ay=!1
s.b0()
$.eQ=0
a.bZ()},
zX(a,b,c){var s,r,q
$.k5=!0
s=$.bf
if(s!=null)s.ah()
$.bf=a
s=$.i5()
if(s.a.a.length===0)s.iA(c)
r=A.K(s.a.a,t.oP)
r.push(new A.dK(b,B.a5,c))
q=s.a
s.a=new A.ex(r,q.b,q.c)
s.kC(b)
s=$.am.j()
s.ay=!1
s.b0()
$.eQ=0
a.bZ()
$.k5=!1},
e6(a){var s,r,q,p,o,n,m,l=null
if($.k5)return
$.k5=!0
a.ah()
$.bf=null
s=$.i5().me()
$.k5=!1
r=s.a
if(r===B.dP){$.eQ=0
r=$.am.j()
r.b0()
r.ay=!0
q=A.G(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dO)return
r=s.c.a
r=r.length===0?l:B.a.ga7(r)
p=r==null?l:r.a
A:{if(B.bI===p){r=$.cA.j()
break A}if(B.dE===p){r=$.hP.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bf=r
n=$.am.j()
n.ay=!1
n.b0()
$.eQ=0
r.bZ()
m=o==null?l:A.G(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
k8(a){if($.bf===a&&B.c.p(A.w(a.b.className),"open"))a.ah()
else A.hX(a)},
hY(a){var s
if($.k5)return
if($.bf===a)$.bf=null
if(a===$.cA.j())$.i5().cC()
else $.i5().nh(A.D2(a))
$.eQ=0
s=$.am.j()
s.b0()
s.ay=!0},
D2(a){if(a===$.cA.j())return B.dF
if(a===$.hP.j())return B.a5
if(a instanceof A.hv)return B.a5
if(a instanceof A.iu)return B.a5
if(a instanceof A.ih)return B.a5
if(a===$.jW.j())return B.mp
if(a===$.fJ.j())return B.mq
if(a===$.jV.j())return B.mr
if(a===$.nj.j())return B.a5
if(a===$.jT.j())return B.mt
return B.ms},
no(a,b){var s
a.sor(new A.wL())
a.sou(new A.wM())
a.sot(new A.wN())
a.son(new A.wT())
a.soq(new A.wU())
a.soC(new A.wV())
a.sox(new A.wW())
a.sow(new A.wX())
a.sbi(b?new A.wY(a):new A.wZ(a))
a.sb8(b?new A.x_(a):new A.wO(a))
s=a.f
if(s===B.O)a.sod(new A.wP())
if(s===B.a7)a.soo(new A.wQ())
if(s===B.P){a.soc(new A.wR())
a.sov(new A.wS())}},
I1(){var s=new A.wH(),r=$.eO.j()
r.seL(s)
r.sos(new A.wI(s))
r.sbi(new A.wJ())
r.sb8(new A.wK())},
nn(a,b,c){return A.HZ(a,b,c)},
HZ(a,b,c){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nn=A.aM(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.wD()
k=c.$ti
j=$.ar
i=new A.as(j,k)
if(j!==B.C)l=A.D8(l,j)
c.cL(new A.dZ(i,2,null,l,k.i("dZ<1,1>")))
s=4
return A.a6(i,$async$nn)
case 4:case 3:o=$.kb().b
n=$.ay
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a6(n.d2(b.a),$async$nn)
case 11:case 10:k=b.a
$.k0=A.hd(k,a)
$.eO.j().cJ(a,k,b.b)
A.zZ()
A.k6()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ah(g)
$.k0=A.hd(o,o)
k=$.eO.j()
k.cJ(o,o,A.c(["renderer transaction rejected: "+A.y(m)],t.s))
A.zZ()
s=8
break
case 5:s=1
break
case 8:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$nn,r)},
IQ(){var s,r,q,p,o,n=null
try{n=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.ak(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.ic)
q=A.B_(r.h(0,"requested"))
$.k0=A.hd(A.B_(r.h(0,"effective")),q)}catch(s){$.k0=A.hd(null,null)}p=$.kb().a
o=A.DF(p,A.CQ())
r=o.a
$.k0=A.hd(r,p)
$.eO.j().cJ(p,r,o.b)
A.zZ()
A.k6()},
CQ(){var s,r,q,p,o=$.fI.j().ghS().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.V(p,"max-samples-"))continue
r=A.dM(B.c.aQ(p,12),null)
if(r==null)r=1}return new A.pZ(r,B.a.p(o,"disjoint-timer-query"))},
zZ(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a0($.kb().C(),null))}catch(s){}},
I0(){var s=$.jS.j()
s.seL(new A.wE())
s.sbi(new A.wF())
s.sb8(new A.wG())},
IO(){var s,r,q,p,o,n=null
try{n=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.zM=A.EP(B.f.ak(n,null))}catch(s){$.zM=A.h3(null,null,!1,1,!1,!1,2,1)}r=$.jS.j()
q=r.w=$.fP()
r.x=new A.kz(q)
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
r.ee()
$.am.j().fb($.fP().r)
r=$.am.j()
q=$.fP()
p=r.ch
p.a=q.f
p.eS()
r.b0()
A.D4()},
D4(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a0($.fP().C(),null))}catch(s){}},
IN(){var s,r=null
try{r=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jZ=A.EA(B.f.ak(r,null))}catch(s){$.jZ=B.b3}$.hN.j().j7($.jZ)
A.D3()
A.zD()},
D3(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a0($.jZ.C(),null))}catch(s){}},
zD(){var s=$.bm
if(s==null)return
s.jh($.jZ)},
IP(){var s,r=null
try{r=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.zQ=A.Fi(B.f.ak(r,null))}catch(s){$.zQ=$.z1()}$.jU.j().j8($.cD())
A.D5()
A.Cz()},
D5(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a0($.cD().C(),null))}catch(s){}},
Cz(){var s,r="detailed",q=A.Fh($.cD()),p=A.G(A.b(v.G.document).documentElement)
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
s=$.cD().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cD().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
IM(){var s,r=null
try{r=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dq=A.Et(B.f.ak(r,null))}catch(s){$.dq=B.aF}$.fH.j().fa($.dq)
A.zY()
A.nl()},
zY(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a0($.dq.C(),null))}catch(s){}},
nl(){var s,r,q,p,o,n,m=$.dq,l=$.xS,k=$.Af,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.f(B.hm)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.al
$.A3=l
$.cW.j()
r=A.G(A.b(v.G.document).documentElement)
q=r==null
p=q?null:A.T(A.b(r.classList).contains("high-contrast"))
o=q?null:A.T(A.b(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.T(A.b(r.classList).toggle("reduced-motion",l))
if(!q)A.T(A.b(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.T(A.b(r.classList).toggle("captions-enabled",s))
if(!q)A.T(A.b(r.classList).toggle("reduced-effects",o))
if(!q)A.T(A.b(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.y(j*100)+"%")
q=$.p.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Cx){m=$.be.j()
l=$.dq.f
m.e=new A.kf(l==null?B.al:l)
m=$.be.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
D7(a){var s,r,q
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
Ip(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.xu(r,q)
r.addEventListener("change",A.Z(new A.xs(s)))
q.addEventListener("change",A.Z(new A.xt(s)))},
nD(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9
var $async$nD=A.aM(function(f1,f2){if(f1===1){o.push(f2)
s=p}for(;;)switch(s){case 0:e7=v.G
e8=A.G(A.b(e7.document).getElementById("game"))
if(e8==null){s=1
break}$.p.b=e8
$.zP=A.G(A.b(e7.document).getElementById("fps"))
$.dp.b=$.E7().cH(A.dW().gaZ().h(0,"renderer"))
A.Iq()
c1=$.p.j()
c2=A.i(A.b(e7.window).innerWidth)>0?A.i(A.b(e7.window).innerWidth):800
c1.width=c2
c2=$.p.j()
c1=A.i(A.b(e7.window).innerHeight)>0?A.i(A.b(e7.window).innerHeight):600
c2.height=c1
c3=A.G(A.b(e7.document).getElementById("ui-canvas"))
if(c3!=null){$.Cu.b=c3
c3.width=A.i($.p.j().width)
c3.height=A.i($.p.j().height)
c1=new A.oO(c3,A.c([],t.km))
c4=A.G(c3.getContext("2d"))
if(!t.m.b(c4))A.f(A.j("Failed to get 2D context for CanvasP5GuiEngine"))
c1.b=c4
c1=new A.tq(c1)
$.eT=c1
c1.dI(A.i($.p.j().width),A.i($.p.j().height))}n=B.fo.n6(e8)
if(n==null){A.D7("webgl2 unavailable")
s=1
break}try{c1=A.i($.p.j().width)
c2=A.i($.p.j().height)
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
m=new A.mV(n,c1,c2,c6,A.n(c7,t.qr),c8,A.n(c7,c9),A.n(c7,d0),A.n(c7,t.xp),A.n(c7,t.bE),A.n(c7,c9),A.n(c7,d0),c5,A.n(c7,c9),A.n(c7,d0),A.n(c7,c7),A.n(d1,d2),A.n(c7,t.qS),d3,B.kw,A.n(c7,t.Aj),A.n(c7,c7),A.n(c7,d2),A.n(c7,t.vD),A.n(c7,d2),A.n(c7,d2),new A.rh(A.n(c7,t.ml),A.n(c7,d1)),A.n(c7,t.mL),A.n(c7,t.w1),B.iM,B.mH,B.dj,B.kx,B.dl,B.kJ)
$.ay=m
c1=$.dp.j()
c2=t.dM.a(m)
if(c1.a!==B.aT)A.f(A.j("legacy renderer backend is retired; production requires Pixeldart"))
c1=new A.rR(c2,c1.C(),B.nd)
c2.nR()
c1.d=B.Y
$.fI.b=c1}catch(f0){l=A.ah(f0)
k=A.cZ(f0)
g=$.p.j()
g.setAttribute("data-renderer-initialization-error",A.y(l))
g.setAttribute("data-renderer-error",A.y(l))
if($.ka())$.p.j().setAttribute("data-renderer-error-stack",A.y(k))
A.D7("pixeldart initialization failed")
s=1
break}A.k6()
p=4
A.eU("initializing")
$.cW.b=new A.oN(new A.h(0,0,0),new A.h(0,0,1),new A.h(0,1,0),new A.h(1,0,0),$.Ay())
$.xS=A.T(A.b(A.b(e7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.Af=A.T(A.b(A.b(e7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.A3=$.xS
$.cW.j()
c1=A.b(e7.window)
c2=t.N
c5=t.s
c6=t.a
c5=A.Fp(A.E(["moveForward",A.c(["KeyW"],c5),"moveBack",A.c(["KeyS"],c5),"moveLeft",A.c(["KeyA"],c5),"moveRight",A.c(["KeyD"],c5),"interact",A.c(["KeyE"],c5),"secondary",A.c(["KeyQ"],c5),"run",A.c(["ShiftLeft"],c5),"crouch",A.c(["ControlLeft"],c5),"rotate",A.c(["KeyR"],c5),"reach",A.c(["KeyF"],c5),"journal",A.c(["KeyJ"],c5),"sleep",A.c(["KeyL"],c5),"pause",A.c(["Escape"],c5)],c2,c6))
c7=A.b(c1.document)
c5=new A.l8(c1,c7,A.a_(c2),A.a_(c2),A.a_(c2),A.a_(c2),A.a_(c2),new A.h(0,0,0),new A.qC(),c5)
c1.addEventListener("keydown",A.Z(c5.gl4()))
c1.addEventListener("keyup",A.Z(c5.gl6()))
c1.addEventListener("mousemove",A.Z(c5.glc()))
c1.addEventListener("mousedown",A.Z(c5.gla()))
c1.addEventListener("mouseup",A.Z(c5.gle()))
c1.addEventListener("wheel",A.Z(c5.glg()))
c1.addEventListener("blur",A.Z(c5.gli()))
c7.addEventListener("pointerlockchange",A.Z(c5.gl8()))
$.am.b=c5
c5=$.p.j()
c1=A.i(A.b(e7.window).innerWidth)>0?A.i(A.b(e7.window).innerWidth):800
c5.width=c1
c1=$.p.j()
c5=A.i(A.b(e7.window).innerHeight)>0?A.i(A.b(e7.window).innerHeight):600
c1.height=c5
A.eU("renderer")
A.eU("text")
c5=$.fQ()
s=7
return A.a6(c5.bh(),$async$nD)
case 7:j=c5.pt()
i=A.GB(j)
if(!(i instanceof A.ml)){h=t.bB.a(i).a
g=h.b
throw A.a("Failed to build visitors: "+g)}$.aP.b=i.a
$.ni.b=A.Ew(j)
g=A.n(c2,c6)
for(c1=t.j,d5=0;d5<5;++d5){f=B.D[d5]
c6=A.w(f)
c7=c5.c
c7===$&&A.t()
d6=c7.h(0,c6)
c6=c1.b(d6)?A.aG(d6,!0,c2):B.n
J.b7(g,f,c6)}e=A.GC(g)
s=8
return A.a6(A.ns(),$async$nD)
case 8:d=f2
$.zC.b=new A.oG(B.fn)
c=$.zC.j().oM(new A.yj(e,d))
d7=$.z2()
b=d7
if(c.a==null){g=d
c2=b
c2=c2==null?null:c2.a
if(c2==null)c2=1+B.b6.aY(2147483647)
c6=b
c6=c6==null?null:c6.b
if(c6==null)c6=1
c7=b
c7=c7==null?null:B.b.aV(c7.c)
if(c7==null)c7=7
if(c6<1)A.f(A.a7(c6,"startDay","must be at least 1"))
if(c7<0||c7>=24)A.f(A.a7(c7,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.f(A.a7(5760,"daySeconds","must be finite and > 0"))
d8=new A.l_(c6,7,5760)
d8.fj(c7)
d9=A.B9(e)
e0=g==null?A.B0(42):A.Dr(g,42)
g=A.AY(42,c2,e0,d8,d9,A.AR(6,16,d9,null,6,B.kK,d8),new A.kI(0,0,0,!1),A.rv(null,null,null))}else{g=c.a
g.toString
g=A.AZ(d,g,e)}$.W.b=g
a=c5.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Ff(a,g,$.W.j().b)}$.ww=g
$.aP.j().y=$.W.j().z
g=A.ab(A.Il($.W.j().b),t.fu)
$.wt.b=new A.vk(g)
g=$.z3()
c2=c.a
g.eU(c2==null?null:c2.c.h(0,"inventoryInspections"))
$.fI.j().c7(A.Bx($.W.j().giH()))
if(c.b!=null){g=c.b
g.toString
A.fM(g)}g=$.aP.j()
c2=A.K0($.W.j().b,A.K1(j.b))
g.sjF(A.hi(c2,A.C(c2).c))
A.eU("house")
$.R.b=$.W.j().c
$.ny.P(0)
c2=c.a
$.ny.L(0,A.J6(c2==null?null:c2.c.h(0,"weatherSurfaces")))
g=d7==null
a0=g?null:d7.e
a1=g?null:d7.f
if(a1!=null)for(g=$.R.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.u)(g),++d5){a2=g[d5]
for(c5=a2.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.u)(c5),++e1){a3=c5[e1]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.aa(a0,"open")||J.aa(a0,"closed")){a5=J.aa(a0,"open")
for(g=$.R.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.u)(g),++d5){a6=g[d5]
for(c5=a6.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.u)(c5),++e1){a7=c5[e1]
a7.sjv(a5)}}}a8=$.Aw()
if(a8!=null&&a8.length!==0)for(g=$.R.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.u)(g),++d5){a9=g[d5]
for(c5=a9.r,c6=c5.length,e1=0;e1<c6;++e1){b0=c5[e1]
if(b0.a===a8)b0.d=$.Ax()}}g=$.ay
if(g!=null)g.md($.R.j())
$.bw.b=$.W.j().d
g=$.R.j().r
$.af=g==null?"hall":g
g=$.R.j().eT(1.65)
if(g==null){$.R.j()
g=new A.h(12.9375,1.65,0.825)}$.xO=g
$.cj=$.af===$.R.j().r?3.141592653589793:0
$.eV=0
g=$.e8()
$.xZ=$.xF=g
b1=g.ac(0,new A.h(0,1.3499999999999999,0))
$.eP.b=new A.ku(b1,J.AA(b1,new A.h(0,1.2000000000000002,0)))
$.hO.b=new A.po()
g=A.zR(B.n)
c2=A.zR(B.n)
c5=new A.ts(B.H,g,c2)
if(!isFinite(0))A.f(B.h1)
if(!B.a.a2(c2,B.a.gaF(g)))A.f(B.hZ)
if(c5.a===B.H&&c5.b!==0&&!c5.e)A.f(B.ha)
$.ci.b=c5
g=c.a
b2=A.FQ(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.nX($.R.j())){g=b2.b
$.xZ=$.xF=$.xO=g
$.cj=b2.c
$.eV=b2.d
$.af=b2.a
b3=g.ac(0,new A.h(0,1.3499999999999999,0))
g=$.eP.j()
g.smf(b3)
g.b=J.AA(b3,new A.h(0,1.2000000000000002,0))
g=$.eP.j()
c2=$.R.j()
c5=b2.e
c6=b2.f
g.iM($.af,$.e8(),c2,c6,c5)
A.fM("restored position")}b4=$.R.j().eT(1.65)
g=$.p.j()
c2=$.R.j().r
if(c2==null)c2=""
g.setAttribute("data-house-residence-room",c2)
c2=b4==null?"":B.b.F(b4.a,3)+","+B.b.F(b4.b,3)+","+B.b.F(b4.c,3)
g.setAttribute("data-house-residence-spawn",c2)
c2=A.Gh(A.b(e7.document))
c2.soe(new A.yk())
c2.sbi(new A.yl())
c2.sb8(new A.yw())
$.hP.b=c2
c2=A.b(e7.document)
g=A.b(c2.createElement("div"))
c5=new A.rN(c2,g)
c5.b_(c2)
g.className=A.w(g.className)+" brush-page-frame"
g.setAttribute("aria-label","Pause menu")
g.setAttribute("data-brush-kind","frame")
g.setAttribute("data-brush-state","normal")
A.b(g.appendChild(A.oJ(c2,B.f1,1)))
A.b(g.appendChild(A.F(c2,"p","settings-copy","The house waits. Choose what to do next.")))
e2=A.F(c2,"nav","pause-actions",null)
e2.setAttribute("aria-label","Pause actions")
c5.bx(c2,e2,B.dG,"resume")
c5.bx(c2,e2,B.dH,"settings")
c5.bx(c2,e2,B.dI,"controls")
c5.bx(c2,e2,B.dJ,"save now")
c5.bx(c2,e2,B.dK,"help")
c5.bx(c2,e2,B.dL,"credits")
c5.bx(c2,e2,B.dM,"back")
A.b(g.appendChild(e2))
c5.soy(new A.yG())
c5.sbi(new A.yH())
c5.soA(new A.yI())
c5.soi(new A.yJ())
c5.soz(new A.yK())
c5.sop(new A.yL())
c5.soj(new A.yM())
c5.sb8(new A.ym())
$.cA.b=c5
c5=$.W.j().e
g=$.bw.j()
$.W.j()
$.nk.b=new A.qA(c5,g,new A.yn())
g=A.b(e7.document)
c5=$.W.j().e
c2=$.bw.j()
c6=$.nk.j()
c7=A.b(g.createElement("div"))
c6=new A.qK(c5,c2,c6,g,c7)
c6.b_(g)
c7.setAttribute("aria-label","The Journal")
A.b(c7.appendChild(A.F(g,"div","journal-title","The Journal")))
e3=A.F(g,"div","journal-pages",null)
c2=A.F(g,"div","page page-left",null)
c6.y!==$&&A.b6()
c6.y=c2
c5=A.F(g,"div","page page-right",null)
c6.z!==$&&A.b6()
c6.z=c5
A.b(e3.appendChild(c2))
A.b(e3.appendChild(c5))
A.b(c7.appendChild(e3))
A.b(c7.appendChild(c6.kh()))
e4=A.F(g,"div","tape-roll",null)
A.b(e4.style).setProperty("width","8rem")
c5=A.F(g,"div","tape-fill",null)
c6.as!==$&&A.b6()
c6.as=c5
A.b(e4.appendChild(c5))
A.b(c7.appendChild(e4))
e5=A.F(g,"div","consult",null)
A.b(e5.appendChild(A.F(g,"div","consult-label","Cite an entry")))
c5=A.F(g,"div","entry-picker",null)
c6.at!==$&&A.b6()
c6.at=c5
c2=A.F(g,"div","consult-result",null)
c6.ax!==$&&A.b6()
c6.ax=c2
A.b(e5.appendChild(c5))
A.b(e5.appendChild(c2))
A.b(c7.appendChild(e5))
e6=A.G(g.documentElement)
if(t.m.b(e6)){A.b(e6.style).setProperty("--shake-max-deg","3deg")
A.b(e6.style).setProperty("--shake-max-px","2px")}$.jW.b=c6
$.jW.j().sb8(new A.yo())
g=A.b(e7.document)
c2=A.F(g,"div","prompt",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
A.b(c2.style).setProperty("transition-duration","0.3s")
A.b(A.G(g.body).appendChild(c2))
$.Ct.b=new A.t8(c2)
c2=A.b(e7.document)
g=A.F(c2,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.G(c2.body).appendChild(g))
$.Cs.b=new A.oF(g)
g=A.b(e7.document)
c2=A.F(g,"div","ambient-notice",null)
c5=A.F(g,"div","caption-cue",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
c5.setAttribute("aria-hidden","true")
c5.setAttribute("data-caption-kind","non-speech")
A.b(A.G(g.body).appendChild(c2))
A.b(A.G(g.body).appendChild(c5))
$.be.b=new A.nV(c2,c5,B.S)
$.Cx=!0
c5=A.EW(A.b(e7.document))
c5.soh(A.DD())
c5.sog(A.Kf())
$.aC.b=c5
c5=$.cC()
c5.sof(new A.yp())
c5.sol(A.DD())
c5=c.a
b5=A.Gz(c5==null?null:c5.c.h(0,"visitors"))
if($.cD().Q&&b5!=null&&$.aP.j().eU(b5))A.J5()
g=$.ni.j()
c2=c.a
g.pc(c2==null?null:c2.c.h(0,"ambient"))
g=c.a
b6=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b6))for(g=J.O(b6);g.m();){b7=g.gq()
if(A.b0(b7))$.xT.k(0,b7)}g=A.Gm(A.b(e7.document))
g.soB(new A.yq())
g.sb8(new A.yr())
$.fJ.b=g
g=A.Fl(A.b(e7.document))
g.sb8(new A.ys())
$.jV.b=g
g=A.EQ(A.b(e7.document))
g.sb8(new A.yt())
$.nj.b=g
$.jX.b=A.lY(A.b(e7.document),null)
$.jY.b=A.lY(A.b(e7.document),B.a6)
$.fH.b=A.lY(A.b(e7.document),B.P)
A.no($.jX.j(),!1)
A.no($.jY.j(),!0)
A.no($.fH.j(),!0)
A.IM()
A.Ip()
$.eO.b=A.Fk(A.b(e7.document))
A.I1()
A.IQ()
$.hN.b=A.lY(A.b(e7.document),B.O)
A.no($.hN.j(),!0)
A.IN()
$.jU.b=A.lY(A.b(e7.document),B.a7)
A.no($.jU.j(),!0)
A.IP()
$.jS.b=A.EO(A.b(e7.document))
A.I0()
A.IO()
g=A.F5(A.b(e7.document))
g.sb8(new A.yu())
g.som(new A.yv())
$.jT.b=g
g=c.a
b8=A.F7(g==null?null:g.c.h(0,"ending"))
if(b8!=null)A.D6(b8)
A.eU("world")
A.D9()
A.b(e7.window).addEventListener("resize",A.Z(new A.yx()))
A.b(e7.document).addEventListener("visibilitychange",A.Z(new A.yy()))
A.b(e7.window).addEventListener("keydown",A.Z(new A.yz()))
A.b(e7.window).addEventListener("keyup",A.Z(new A.yA()))
A.b(e7.window).addEventListener("keydown",A.Z(new A.yB()))
A.b(e7.window).addEventListener("click",A.Z(new A.yC()))
$.p.j().addEventListener("mousemove",A.Z(new A.yD()))
$.p.j().addEventListener("click",A.Z(new A.yE()))
$.p.j().addEventListener("wheel",A.Z(new A.yF()))
A.hU()
A.eU("raf")
A.i(A.b(e7.window).requestAnimationFrame(A.Z(A.DE())))
p=2
s=6
break
case 4:p=3
e9=o.pop()
b9=A.ah(e9)
c0=A.cZ(e9)
A.xH(b9,c0)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nD,r)},
Io(a){var s,r,q,p=$.eT
if(!$.aC.j().y||p==null)return
s=A.CI(a)
if(s==null)return
r=$.cC()
q=p.iq(s.a,s.b)
r.r=q==null?null:q.b},
In(a){var s,r=$.eT
if(!$.aC.j().y||r==null)return!1
s=A.CI(a)
if(s==null)return!1
return $.cC().nL(r.iq(s.a,s.b))},
CI(a){var s=A.b($.p.j().getBoundingClientRect()),r=A.a1(s.width),q=A.a1(s.height)
if(r<=0||q<=0)return null
return new A.a5(A.i(a.clientX)-A.a1(s.left),A.i(a.clientY)-A.a1(s.top))},
Iq(){var s=v.G
A.b(s.window).addEventListener("error",A.Z(new A.xv()))
A.b(s.window).addEventListener("unhandledrejection",A.Z(new A.xw()))},
eU(a){if($.zI===a)return
$.zI=a
$.p.j().setAttribute("data-boot-phase",a)},
k6(){var s,r,q,p,o,n=null,m=$.fI.j().ghS(),l=$.p.j(),k=A.dW().gaZ().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a0(m.C(),n))
k=$.dp.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.bT().go9().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.ay
if(k==null)k="{}"
else{k=k.e
k===$&&A.t()
k=k.as
if(k==null)k=A.f(A.j("renderer is not initialized"))
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
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(B.lh,n))
l=$.ay
o=l==null?n:l.x
if(o!=null)$.p.j().setAttribute("data-renderer-profile-fallback",o)},
IY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(!$.ka())return
s=$.Aw()
if(s!=null&&s.length!==0){r=$.p.j()
q=$.Ax()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.wt.j().eE($.W.j().gag().a)
r=$.p.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.z2()
o=q==null?a1:q.e
if(o!=null)$.p.j().setAttribute("data-automation-capture-shutters",o)
$.p.j().setAttribute("data-automation-rain-window-visibility",B.b.F(A.A2($.af),3))
r=$.p.j()
q=$.zI
n=$.af
m=$.R.j().r
l=$.R.j().x
k=$.af
j=$.R.j().r
i=$.e8()
h=t.N
i=A.E(["x",i.a,"y",i.b,"z",i.c],h,t.i)
g=$.eP.j().ghC()
f=$.eP.j().d
f=f==null?a1:f.b
e=t.X
r.setAttribute("data-automation-player",B.f.a0(A.E(["schemaVersion",1,"phase",q,"roomId",n,"residenceRoomId",m,"residenceRestAnchor",l,"atResidence",k===j,"eye",i,"activeStairId",g,"activeStairProgress",f,"yaw",$.cj,"pitch",$.eV,"modal",$.bf!=null,"dialogueOverlay",$.aC.j().y,"inputEnabled",$.am.j().ay,"day",$.W.j().gag().a,"hour",$.W.j().gag().b],h,e),a1))
$.p.j().setAttribute("data-story-journal-entry-count",""+$.W.j().gag().r)
d=A.n(h,e)
for(r=$.R.j().c,q=r.length,n=t.K,c=0;c<r.length;r.length===q||(0,A.u)(r),++c){b=r[c]
m=b.ax
l=b.ay
k=b.z
j=m&&!l&&!k
d.l(0,b.a,A.E(["a",b.b,"b",b.c,"open",m,"locked",l,"sticks",k,"passable",j],h,n))}$.p.j().setAttribute("data-automation-portals",B.f.a0(d,a1))
a=$.nm
r=!1
if(a!=null)if($.R.j().e.h(0,"cellar")!=null){r=$.R.j()
q=$.af
q=r.e.h(0,q)!=null
r=q}if(r){a0=a.cD("cellar",$.af)
$.p.j().setAttribute("data-audio-transmission-cellar",B.f.a0(A.E(["sourceRoom","cellar","listenerRoom",$.af,"portalPath",a0.a,"gainDb",a0.c,"lowPassHz",a0.d,"muffle01",a0.e,"barrierIds",a0.b,"reasonTrace",a0.r,"reachable",a0.f],h,n),a1))}else $.p.j().setAttribute("data-audio-transmission-cellar","unavailable")},
k7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if($.ci.j().a!==B.H){A.fM("save unavailable during rupture")
return}try{p=$.zC.j()
o=$.W.j()
n=t.N
m=t.z
s=A.n(n,m)
l=$.af
k=$.e8()
j=$.cj
i=$.eV
h=$.eP.j().ghC()
g=$.eP.j().d
J.b7(s,"player",new A.lC(l,k,j,i,h,g==null?null:g.b).C())
l=$.aP.j()
k=A.fo(l.b,n)
j=A.fo(l.c,t.T)
l=l.r
J.b7(s,"visitors",new A.mm(k,j,l==null?null:new A.kh(l.a,l.b,l.d,l.f,l.e,l.r,l.w)).C())
l=$.ni.j().b
l=A.K(l,A.v(l).c)
B.a.X(l)
J.b7(s,"ambient",l)
l=$.ww
if(l!=null)J.b7(s,"authoredEvents",A.E(["delivered",l.gnd()],n,m))
l=A.K($.xT,A.v($.xT).c)
B.a.X(l)
J.b7(s,"unverifiables",l)
J.b7(s,"inventoryInspections",$.z3().C())
r=A.n(n,t.gG)
for(l=new A.N($.ny,A.v($.ny).i("N<1,2>")).gv(0),k=t.i;l.m();){j=l.d
j.toString
q=j
j=q.a
i=q.b
J.b7(r,j,A.E(["snowDepthM",i.a,"waterFilmDepthM",i.b,"materialDissolution01",i.c],n,k))}J.b7(s,"weatherSurfaces",r)
r=$.zN
if(r!=null)J.b7(s,"ending",A.E(["kind",r.a.b],n,n))
s=t.P.a(s)
r=o.a
l=o.b
k=A.B2(o.c).C()
j=o.d
p.pv(A.BA(s,A.E(["houseSeed",r,"runSeed",l,"house",k,"time",A.E(["day",j.a,"hour",j.b],n,t.J),"dayLoop",o.f.C(),"journal",o.e.C(),"difficulty",o.r.C(),"narrative",o.z.C()],n,m),2))
A.fM(a)}catch(f){A.fM("save failed")}},
IT(){var s,r,q=$.R.j().eT(1.65),p=$.R.j().r
if(q==null||p==null||$.R.j().e.h(0,p)==null)return
$.kc().a=new A.h(0,0,0)
$.af=p
$.xZ=$.xF=$.xO=q
s=q.ac(0,new A.h(0,1.3499999999999999,0))
r=$.eP.j()
r.a=s
r.b=s.a4(0,new A.h(0,1.2000000000000002,0))
r.iM(p,q,$.R.j(),null,null)},
J6(a){var s,r,q,p
if(a==null)return A.n(t.N,t.xe)
if(!t.f.b(a))throw A.a(B.hi)
s=A.n(t.N,t.xe)
for(r=a.gN(),r=r.gv(r);r.m();){q=r.gq()
p=q.a
if(typeof p!="string")throw A.a(B.iw)
s.l(0,p,A.GJ(q.b))}return s},
IW(){var s=A.G(A.b(v.G.document).documentElement),r=s==null?null:A.aq(s.getAttribute("data-gameplay-focus-loss")),q=A.bK(new A.I(B.aP,t.rg.a(new A.xC(r)),t.vK),t.x)
switch((q==null?B.bc:q).a){case 0:$.fL=!0
s=$.bm
if(s!=null)s.fe(!0)
break
case 1:$.fL=!0
break
case 2:break}},
fM(a){var s=v.G,r=A.G(A.b(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.b(s.document).documentElement)
s=s==null?null:A.aq(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Fe(B.fK,new A.xN(r),t.H)},
xH(a,b){var s,r,q,p
A.eU("error")
s=A.y(a)
r=A.yX(s,"\n"," ")
s=$.zP
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.t(0)
$.p.j().setAttribute("data-boot-error",p)
if($.ka()&&!q)$.p.j().setAttribute("data-boot-stack",b.t(0))
A.b(s.console).error(p)},
CC(){var s,r
if($.zG)return
$.zG=!0
s=$.bm
r=s==null
if(!r)s.cC()
if(!r)s.fm("music")
B.a.k($.dr,"arm")},
hU(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hU=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a6(A.hT(),$async$hU)
case 2:o=null
q=4
s=7
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$hU)
case 7:n=b
i=A
s=8
return A.a6(A.av(A.b(n.json()),t.X),$async$hU)
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
if(k!=null&&typeof k==="string"){A.w(k)
l=A.G(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.nj.j().f
l===$&&A.t()
l.textContent=k}s=9
return A.a6(A.pD(A.c([A.xy(o),A.xr(o),A.k3()],t.iJ),t.H),$async$hU)
case 9:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hU,r)},
k3(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$k3=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/models/index.json")),t.m),$async$k3)
case 6:o=b
if(!A.T(o.ok)){k=A.j("HTTP "+A.y(A.nB(o,"status",t.S)))
throw A.a(k)}s=7
return A.a6(A.av(A.b(o.text()),t.N),$async$k3)
case 7:n=b
m=A.FR(n)
$.p.j().setAttribute("data-renderer-model-packages","validated")
$.p.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.ay
k=k==null?null:k.dz(m)
s=8
return A.a6(k instanceof A.as?k:A.H1(k,t.H),$async$k3)
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
return A.aK($async$k3,r)},
hT(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hT=A.aM(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.dg[g]
q=6
s=9
return A.a6(A.av(A.b(A.b(j.window).fetch(o)),i),$async$hT)
case 9:n=a0
s=10
return A.a6(A.av(A.b(n.text()),h),$async$hT)
case 10:m=a0
l=A.AH(B.f.ak(m,null))
f=$.R.b
if(f===$.R)A.f(A.a9(""))
l.f1(f)
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
A.b(j.console).warn("authored house manifest unavailable: "+A.y(d))}s=11
return A.a6(A.nq(),$async$hT)
case 11:s=12
return A.a6(A.nr(),$async$hT)
case 12:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$hT,r)},
ns(){var s=0,r=A.aL(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ns=A.aM(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.dg[f]
p=7
s=10
return A.a6(A.av(A.b(A.b(i.window).fetch(n)),h),$async$ns)
case 10:m=a0
s=11
return A.a6(A.av(A.b(m.text()),g),$async$ns)
case 11:l=a0
k=A.AH(B.f.ak(l,null))
k.f2()
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
case 5:throw A.a(A.j("authored house blueprint unavailable: "+A.y(c)))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$ns,r)},
nq(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$nq=A.aM(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.k7[c]
p=7
s=10
return A.a6(A.av(A.b(A.b(g.window).fetch(n)),f),$async$nq)
case 10:m=b1
s=11
return A.a6(A.av(A.b(m.text()),e),$async$nq)
case 11:l=b1
b=B.f.ak(l,null)
b=h.b(b)?b:A.e3("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.e3("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.b0(a)?a:A.e3("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.e3("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aG(a,!0,d):A.e3("assets is not a list")
a4=A.C(a3)
a5=a4.i("H<1,d8>")
a3=A.K(new A.H(a3,a4.i("d8(1)").a(A.Kb()),a5),a5.i("a0.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aG(a,!0,d):A.e3("placements is not a list")
a5=A.C(a4)
a6=a5.i("H<1,cL>")
a4=A.K(new A.H(a4,a5.i("cL(1)").a(A.Kc()),a6),a6.i("a0.E"))
a4.$flags=1
k=new A.qh(a1,a2,a0,a3,a4)
a1=$.R.b
if(a1===$.R)A.f(A.a9(""))
k.f1(a1)
$.hR=k
a1=$.ay
if(a1!=null)a1.fc(k)
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
a1.setAttribute("data-house-inventory-status-counts",B.f.a0(k.gjH(),null))
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
A.b(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nq,r)},
nr(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$nr=A.aM(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.hR
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.kN[a4]
p=7
s=10
return A.a6(A.av(A.b(A.b(a1.window).fetch(m)),a2),$async$nr)
case 10:l=b5
s=11
return A.a6(A.av(A.b(l.text()),e),$async$nr)
case 11:k=b5
a5=B.f.ak(k,null)
a5=a0.b(a5)?a5:A.hQ("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aG(a6,!0,a3):A.hQ("emitters is not a list")
a8=A.C(a7)
a9=a8.i("H<1,d7>")
a7=A.K(new A.H(a7,a8.i("d7(1)").a(A.Ks()),a9),a9.i("a0.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.b0(a6)?a6:A.hQ("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hQ("sourceRef is not a string")
j=new A.qp(a8,a9,a7)
a7=$.R.b
if(a7===$.R)A.f(A.a9(""))
j.po(a7,b2)
$.CT=j
i=A.n(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gN(),a9=a9.gv(a9);a9.m();){g=a9.gq()
J.b7(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.R.b
if(a7===$.R)A.f(A.a9(""))
a8=A.Ey(i)
a9=new A.o9(a7,A.aX(B.dy,e,d),a8)
a9.jQ(a8,a7,B.dy)
$.nm=a9
a7=$.bm
if(a7!=null){a7.CW=a9
a7.bN()}a7=$.p.b
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
case 5:$.nm=null
$.p.j().setAttribute("data-audio-planner","unavailable")
$.p.j().setAttribute("data-house-soundscape","unavailable")
$.p.j().setAttribute("data-house-soundscape-error",A.y(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nr,r)},
wC(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.b9(s,A.C(s).i("b9<1,e>")))
while(s.m()){r=s.gq()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.w(q))}},
xr(a){var s=0,r=A.aL(t.H),q,p,o,n,m,l
var $async$xr=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.wC(A.G(n?null:a.sfx),m,"")
A.wC(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.w(p))
l=$
s=2
return A.a6(A.og(m,$.R.j()),$async$xr)
case 2:o=l.bm=c
o.CW=$.nm
o.bN()
A.IR()
A.Db(o)
A.zD()
A.Dc()
if($.zG){o.cC()
o.fm("music")}return A.aJ(null,r)}})
return A.aK($async$xr,r)},
Aa(a,b){var s
A.Dn(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
J2(a){var s,r
try{s=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Cy(a,b){var s
if(a!=="brightness")return
s=A.G(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.y(B.b.n(b,0.6,1.4))+")")},
wv(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.b(v.G.document).documentElement)
if(r!=null)A.T(A.b(r.classList).toggle(s,b))
A.nl()},
Dc(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a1($.dt().a.cE(o)),k=A.T($.dt().a.cE(n)),j=A.T($.dt().a.cE(m))
for(s=[$.jX.j(),$.jY.j(),$.fH.j(),$.hN.j(),$.jU.j()],r=0;r<5;++r)s[r].fd(o,l)
A.Cy(o,l)
for(s=[$.jX.j(),$.jY.j(),$.fH.j(),$.hN.j(),$.jU.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.wv(n,k)
A.wv(m,j)},
A9(a,b){var s
A.Dn(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
J_(a){var s,r
try{s=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
Db(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.kn[s]
q=$.dt().a.b.h(0,r)
j.l(0,r,A.a1(q==null?A.f(A.j("setting missing from profile: "+r)):q))}p=A.T($.dt().a.cE("muted"))
o=A.T($.dt().a.cE("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bw(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dO(o)
for(q=[$.jX.j(),$.jY.j(),$.fH.j(),$.hN.j()],n=j.$ti.i("cN<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cN(j,j.r,j.e,n);m.m();){k=m.d
l.fd(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
CA(){var s=$.bm
if(s!=null)A.Db(s)
A.Dc()},
IR(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aq(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.ak(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.f(B.hp)
q=A.BC(r.h(0,"requested"))
$.Di=A.zn(A.BC(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.F[n]
if(m.w==="audio"){l=m.a
o.l(0,l,A.J_(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.F[n]
if(m.w==="display"){p=m.a
r.l(0,p,A.J2(p))}}$.Di=A.Gj(o,r)
A.xD()},
xD(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a0($.dt().C(),null))}catch(s){}},
Dn(a,b){var s,r,q,p,o,n,m
switch(A.u7(a).d.a){case 0:r=A.fh(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dt()
q=s
A.u7(a).dJ(q)
p=t.N
o=t.K
n=A.hh(r.a.b,p,o)
n.l(0,a,q)
r.a=A.dS(n,1)
n=s
A.u7(a).dJ(n)
o=A.hh(r.b.b,p,o)
o.l(0,a,n)
r.b=A.dS(o,1)
A.xD()}catch(m){if(!(A.ah(m) instanceof A.A))throw m}},
xy(a){var s=0,r=A.aL(t.H),q,p,o
var $async$xy=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.n(p,p)
p=a==null
A.wC(A.G(p?null:a.tex),o,"")
A.wC(A.G(p?null:a.skybox),o,"")
o.l(0,"skybox-main-atmosphere-v1","res/skybox/cannon_8k.jpg")
o.L(0,B.lw)
q=$.ay
p=q==null?null:q.dA(o)
s=2
return A.a6(A.pD(A.c([p==null?A.AX(t.H):p],t.iJ),t.H),$async$xy)
case 2:return A.aJ(null,r)}})
return A.aK($async$xy,r)},
D9(){var s,r,q=v.G,p=A.i(A.b(q.window).innerWidth),o=A.i(A.b(q.window).innerHeight),n=$.p.j(),m=p>0?p:800
n.width=m
m=$.p.j()
n=o>0?o:600
m.height=n
s=A.G(A.b(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.i($.p.j().width)
s.height=A.i($.p.j().height)}q=$.eT
if(q!=null)q.dI(A.i($.p.j().width),A.i($.p.j().height))
q=$.fI.j()
n=A.i($.p.j().width)
m=A.i($.p.j().height)
if(q.d!==B.Y)A.f(A.j("pixeldart backend is not ready"))
if(n<=0||m<=0)A.f(A.o("pixeldart surface size must be positive",null))
q.b.dI(n,m)
q=$.ay
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.p.j().setAttribute("data-renderer-surface",r)},
Im(){var s,r,q=$.bf
if(q!=null){s=$.am.j()
if(!s.CW.br("pause",s.f)){s=$.am.j()
s=s.CW.br("secondary",s.f)}else s=!0
if(s){A.I3(q)
return}if($.am.j().f.a9(0,"GamepadDpadUp")){A.CZ(q,-1)
return}if($.am.j().f.a9(0,"GamepadDpadDown")){A.CZ(q,1)
return}s=$.am.j()
if(s.CW.br("interact",s.f)){r=A.G(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.T(q.b.contains(r)))A.qH(r,"click",t.X)}return}s=$.am.j()
if(s.CW.br("pause",s.f)){A.hX($.cA.j())
return}if($.aC.j().y)return
s=$.am.j()
if(s.CW.br("journal",s.f))A.k8($.jW.j())
else{s=$.am.j()
if(s.CW.br("sleep",s.f))A.k8($.fJ.j())}},
I3(a){if(a===$.cA.j()){a.ah()
return}if(a===$.hP.j()||a instanceof A.hv||a instanceof A.iu||a instanceof A.ih){A.e6(a)
return}a.ah()},
CZ(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.W)
for(s=t.m,r=0;r<A.i(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.b(v.G.document).activeElement)
o=B.a.bE(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.O(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
IZ(g1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9=null,g0="exceeded"
A.a1(g1)
try{s=g1
if(!$.CS){$.zW=s
$.CS=!0}a2=s
a3=$.zW
if(typeof a2!=="number")return a2.ac()
r=(a2-a3)/1000
$.zW=s
a2=r
if(typeof a2!=="number")return a2.cG()
if(a2<0)r=0
a2=r
if(typeof a2!=="number")return a2.j5()
if(a2>0.25)r=0.25
A.Jv(r)
$.am.j().oI()
a2=$.p.j()
a3=$.am.j().z!=null?"standard":"none"
a2.setAttribute("data-controller",a3)
q=$.am.j().z
if(q!=null)$.p.j().setAttribute("data-controller-id",q)
else $.p.j().removeAttribute("data-controller-id")
A.Im()
if(!$.fL&&$.bf==null){a2=$.eQ
a3=r
if(typeof a3!=="number")return A.ye(a3)
a3=$.eQ=a2+a3
p=0
a2=t.aA
for(;;){if(a3>=0.008333333333333333){a4=p
if(typeof a4!=="number")return a4.cG()
a4=a4<10}else a4=!1
if(!a4)break
$.xF=$.e8()
if(!$.Av()){a3=$.W.b
if(a3===$.W)A.f(A.a9(""))
a3.m4(0.008333333333333333*($.cD().Q?1:20))
a3=$.Ea()
a4=$.W.b
if(a4===$.W)A.f(A.a9(""))
a4=a4.gag()
a5=$.W.b
if(a5===$.W)A.f(A.a9(""))
a3=a3.cf(a4.a,a5.gag().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.u)(a3),++a6){o=a3[a6]
B.a.k($.dr,"clock:"+o.a)}a3=$.Eb()
a4=$.W.b
if(a4===$.W)A.f(A.a9(""))
a4=a4.gag()
a5=$.W.b
if(a5===$.W)A.f(A.a9(""))
a3=a3.cf(a4.a,a5.gag().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.u)(a3),++a6){n=a3[a6]
B.a.k($.dr,"service:"+n.a+":"+n.b)}}A.Jy()
A.Ju()
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
a3.oN(a8)}A.Jt()
A.Jx()
A.Jw()
A.Js(0.008333333333333333)
a3=$.hO.b
if(a3===$.hO)A.f(A.a9(""))
if(a3.a!=null)if((a3.b-=0.008333333333333333)<=0)a3.a=null
a3=$.ci.b
if(a3===$.ci)A.f(A.a9(""))
m=a3.a!==B.H
a4=$.R.b
if(a4===$.R)A.f(A.a9(""))
a3.ei(0.008333333333333333,a4)
if(m){a3=$.ci.b
if(a3===$.ci)A.f(A.a9(""))
a3=a3.e}else a3=!1
if(a3)A.Da(!0)
a3=$.eQ-0.008333333333333333
$.eQ=a3
a4=p
if(typeof a4!=="number")return a4.a4()
p=a4+1}l=B.b.n(a3/0.008333333333333333,0,1)
a2=$.xZ=A.BR($.Ed(),$.e8(),l)
k=$.bm
if(k!=null){a3=k
a4=Math.sin($.cj)
a5=Math.cos($.cj)
a9=A.b(a3.a.listener)
a9.setPosition(a2.a,a2.b,a2.c)
A.aV(a9,"setOrientation",[a4,0,a5,0,1,0],t.H)
a3.jb($.af)
for(a2=$.dr.length,a6=0;a6<$.dr.length;$.dr.length===a2||(0,A.u)($.dr),++a6){j=$.dr[a6]
A.I7(k,j)}B.a.P($.dr)
$.p.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.p.j().setAttribute("data-audio-muffle01",B.b.F(k.go8(),3))
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
a2.setAttribute("data-audio-master-mix",B.b.F(k.fx,3))
a2.setAttribute("data-audio-voice-mix",B.b.F(k.fy,3))
a3=$.dq
a2.setAttribute("data-audio-captions",""+(a3.e===!0))
a2.setAttribute("data-audio-paused",""+$.fL)}}$.cW.j().iw($.nG(),$.cj,$.eV)
a2=$.ay
if(a2!=null){a3=$.cW.j()
a4=a3.a
b0=new A.B(a4.a,a4.b,a4.c)
a4=a3.b
b1=new A.B(a4.a,a4.b,a4.c)
a4=a3.c
b2=a2.b/a2.c
b3=A.Bg(b0,b1,new A.B(a4.a,a4.b,a4.c))
a3=a3.f
a4=a3.b
a5=a3.c
b4=A.zh(b2,a5,a3.a,a4)
a2.to=A.AN(b2,b0,a5,b1,a4,b4,b3,b4.a6(0,b3))}a2=$.ay
if(a2!=null)a2.jm($.R.j(),$.af)
i=$.wt.j().eE($.W.j().gag().a)
h=B.b.n(1-A.A2($.af),0,1)
a2=$.ay
if(a2!=null)a2.ja($.R.j(),$.af,$.nG(),$.bw.j().gfo(),$.bw.j().gn7(),i,A.Km($.af),$.bw.j().b)
a2=$.ay
if(a2!=null){a3=A.JE($.R.j(),$.af,i.r,$.hR)
a4=t.fu.a(i)
t.A1.a(a3)
a5=A.ax(h)
a2.d7=A.ab(a3,t.qR)
a3=a4.r
b5=A.vj(new A.hD(a4,a3,0.8,a5,1,0,1,1,0))
a2.y2=b5
a2.d6=A.GI(a3,b5.z,$.nG(),a2.cp)}g=A.vj(new A.hD(i,i.r,0.8,0,1,0,1,1,0))
a2=$.Ee()
a3=$.Ef()
f=null
e=g.a
A:{if(B.aw===e||B.a9===e||B.X===e){f=g.e
break A}if(B.aa===e||B.w===e){f=0
break A}}f=f
d=a2.jI(!$.fL&&$.bf==null?J.Eo(r,0,0.5):0,f,a3)
f=$.ay
if(f!=null)f.ji(d.a,d.b,d.d,d.e)
f=A.JG($.af)
a2=r
a3=$.ay
a3=a3==null?f9:a3.cp
if(a3==null)a3=B.dj
A.Jz(i,a2,a3,f)
if(!$.fL&&$.bf==null){f=r
a2=$.cD().Q?1:20
if(typeof f!=="number")return f.a6()
a2=B.b.n(f*a2,0,0.5)
f=a2}else f=0
c=A.HL(i,f,h)
f=$.ay
if(f!=null)f.jn(c)
if($.CY!==$.ci.j().a){$.CY=$.ci.j().a
$.A4=$.A4+1}f=$.ay
if(f!=null){if($.Av())a2=0
else{a2=s
if(typeof a2!=="number")return a2.pz()
a2/=1000}a3=$.A4
a4=A.i(Math.max(0,$.W.j().b))
if(!isFinite(a2)||a2<0)A.f(A.a7(a2,"timeSeconds",f9))
if(a4<0)A.f(A.o("frame clock seeds must be non-negative",f9))
f.dq=a2
f.eD=a3
f.bV=a4}f=$.ay
if(f!=null){a2=$.ci.j()
a3=$.A3
a4=A.A2($.af)
b6=a2.a
b7=a2.gfk()
b8=b7>0?B.b.n(a2.b/b7,0,1):0
a2=b6.a
b9=a2>=3
c0=b6===B.bV
a5=$.bT()
c1=a5.H("post_exposure")
c2=a5.H("post_bloom")
c3=a5.H("post_vignette")
c4=a5.H("post_film_grain")
c5=a5.H("post_dither")
c6=a5.H("post_depth_of_field")
c7=a5.H("post_color_grade")
c8=a5.H("post_affine_warp")
c9=a5.H("post_vertex_snap")
d0=B.b.ai(a5.H("post_quantization_bits"))
d1=a5.H("post_vhs_chroma")
d2=a5.H("post_vhs_noise")
d3=a5.H("shadow_ao_intensity")
d4=b6===B.ac?0.45:c1
a5=a5.bI("shadow_ssdo_enable")?d3:0
d5=f.xr
d5=B.b.n(d5,0,1)
d6=f.ct
d6=B.b.n(d6,0,1)
d7=f.dk
d8=f.dl
if(a2>=1)d9=b6===B.aU?b8:1
else d9=0
d9=Math.max(c7,d9)
if(a2>=2)a2=b6===B.bU?b8:1
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
f.x2=new A.lE(d4,c2,a5,c6,c3,c4,d5,d6,d7,d8,a4,c5,d9,a2,e0,e1,e2,e3,e4,e5,e6,c0?b8:0,a3)
f.y1=B.b.n(a4,0,1)
f.lz()}$.fI.j().c7(A.Bx($.W.j().giH()))
b=$.ay
if(b!=null){f=$.p.j()
a2=b
e7=a2.dm
a3=e7==null
a4=a3?f9:e7.b
if(a4==null)a4=0
a5=a3?f9:e7.c
if(a5==null)a5=0
d4=a3?f9:e7.e
if(d4==null)d4=0
d5=a2.dn
d6=a2.gih()?"ok":g0
d7=t.N
d8=t.K
d6=A.E(["drawCalls",a4,"triangles",a5,"instances",d4,"frameMs",d5,"budget",d6],d7,d8)
a3=a3?f9:e7.r
if(a3==null)a3=0
a4=a2.hW
a4===$&&A.t()
a4=A.E(["gpuBytes",a3,"residentTextures",a4.d.a,"textureVramMb",0],d7,t.S)
a3=a2.de
a5=a2.dd
d4=a2.df
d5=a2.dg
d9=a2.dh
e0=a2.di
e1=a2.dj
e2=a2.dc
e3=a2.da.length
e4=a2.ex
e5=a2.ey
e6=a2.ez
e8=a2.bU
e9=a2.cq
f0=a2.cr
f1=a2.cs
f2=a2.giW()
f3=a2.hY
f3=f3==null?f9:f3.c
if(f3==null)f3=0
a2=a2.x1
f4=a2.k4
f5=f4==null
f6=f5?f9:f4.z
if(f6==null)f6=0
f7=f5?f9:f4.Q
if(f7==null)f7=0
f4=f5?f9:f4.db
if(f4==null)f4=0
f.setAttribute("data-renderer-diagnostic-groups",B.f.a0(A.E(["frame",d6,"resources",a4,"atmosphere",A.E(["rainSubmitted",a3,"rainRequested",a5,"rainBudget",d4,"rainFrustumVisible",d5,"rainFrustumCulled",d9,"rainAverageSpeedMps",e0,"rainCapped",e1,"rainFlowParticles",e2,"rainFlowPaths",e3,"rainFlowCapturedMassKg",e4,"rainFlowDrainedMassKg",e5,"rainFlowOverflowMassKg",e6,"rainFlowWetness",e8,"fireFlameParticles",e9,"fireWhiteSmokeParticles",f0,"fireBlackSmokeParticles",f1,"weatherPhase",f2,"volumetricSources",f3,"volumetricSampleCount",a2.as,"volumetricIntensity",a2.Q,"volumetricDustDensity",a2.x,"volumetricAnisotropy",a2.y,"cloudCoverage",f6,"cloudDensity",f7,"cloudSampleCount",f4,"reflectionIntensity",a2.dy,"reflectionConfidence",a2.fr],d7,d8)],d7,t.X),f9))
a=b.gnH()
if(a!=null){$.p.j().setAttribute("data-renderer-frame-stats",a)
f=$.p.j()
a2=b.gih()?"ok":g0
f.setAttribute("data-renderer-budget",a2)}$.p.j().setAttribute("data-renderer-rain-particles",""+b.de)
$.p.j().setAttribute("data-renderer-rain-particles-requested",""+b.dd)
$.p.j().setAttribute("data-renderer-rain-particles-budget",""+b.df)
$.p.j().setAttribute("data-renderer-rain-particles-capped",""+b.dj)
$.p.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+b.dg)
$.p.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+b.dh)
$.p.j().setAttribute("data-renderer-rain-flow-particles",""+b.dc)
$.p.j().setAttribute("data-renderer-rain-flow-paths",""+b.da.length)
$.p.j().setAttribute("data-renderer-rain-flow-captured-mass-kg",B.b.F(b.ex,8))
$.p.j().setAttribute("data-renderer-rain-flow-drained-mass-kg",B.b.F(b.ey,8))
$.p.j().setAttribute("data-renderer-rain-flow-overflow-mass-kg",B.b.F(b.ez,8))
$.p.j().setAttribute("data-renderer-weather-rain-flow-wetness",B.b.F(b.bU,4))
$.p.j().setAttribute("data-renderer-fire-flame-particles",""+b.cq)
$.p.j().setAttribute("data-renderer-fire-white-smoke-particles",""+b.cr)
$.p.j().setAttribute("data-renderer-fire-black-smoke-particles",""+b.cs)
$.p.j().setAttribute("data-renderer-rain-particles-average-speed-mps",B.b.F(b.di,4))
$.p.j().setAttribute("data-renderer-volumetric-sample-count",""+b.x1.as)
$.p.j().setAttribute("data-renderer-volumetric-intensity",B.b.F(b.x1.Q,4))
$.p.j().setAttribute("data-renderer-volumetric-dust-density",B.b.F(b.x1.x,4))
$.p.j().setAttribute("data-renderer-volumetric-anisotropy",B.b.F(b.x1.y,4))
f=$.p.j()
a2=$.bT()
f.setAttribute("data-renderer-debug-attachments","unavailable")
$.p.j().setAttribute("data-renderer-debug-attachments-reason",a2.r)
$.p.j().setAttribute("data-renderer-weather-phase",b.giW())
f=$.p.j()
a2=b.y2
a2=a2==null?f9:a2.c
f.setAttribute("data-renderer-weather-wind-mps",B.b.F(a2==null?0:a2,3))
f=$.p.j()
a2=b.y2
a2=a2==null?f9:a2.r
f.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.F(a2==null?0:a2,8))
f=$.p.j()
a2=b.y2
a2=a2==null?f9:a2.w
f.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.F(a2==null?0:a2,6))
f=$.p.j()
a2=b.d6
a2=a2==null?f9:a2.c
f.setAttribute("data-renderer-weather-warm-clearance-m",B.b.F(a2==null?0:a2,4))
$.p.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.F(b.gdK(),3))
$.p.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.F(b.giV(),4))
$.p.j().setAttribute("data-renderer-weather-impact-count",""+b.ew)
$.p.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.F(b.d8,8))
$.p.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.F(b.d9,8))
$.p.j().setAttribute("data-renderer-weather-obstacle-count",""+b.d7.length)}A.eU("running")
A.IY()
f=$.am.j()
f.as=f.Q=0
a2=f.c
a2.a9(0,"WheelUp")
a2.a9(0,"WheelDown")
f.d.P(0)
f.f.P(0)
A.i(A.b(v.G.window).requestAnimationFrame(A.Z(A.DE())))}catch(f8){a0=A.ah(f8)
a1=A.cZ(f8)
A.xH(a0,a1)}},
I7(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.iF("confirm")
$.be.j().aM("interface confirmation")
break
case"ambient-winnow":a.dB("winnow",0.28)
$.be.j().aM("wind moving through the house")
break
case"ambient-gate":a.dB("gate",0.22)
$.be.j().aM("distant gate")
break
case"collapse":a.iF("collapse")
$.be.j().aM("front door shudders and collapses")
break
case"clock:tick":A.nu(a,p,"tick")
break
case"clock:chime":A.nu(a,p,"chime")
break
case"clock:cuckoo":A.nu(a,p,"cuckoo")
break
case"clock:bell":A.nu(a,p,"bell")
break
default:if(B.c.V(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.nu(a,q,s[2])}}}},
nu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.CT,g=$.hR
if(h==null||g==null)return
s=h.nv(b)
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
break A}if(q!=null)$.be.j().aM(q)
q=$.R.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.f(A.j("sound room missing: "+o))
m=n.d.a4(0,s.d.a6(0,p))
l=$.nm
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.f(A.j("sound emitter "+s.a+" has no cue for "+c))
a.oG(q,m,s.e,o)
return}q=$.CF
$.CF=q+1
o=A.Ez(B.eD,r,r+":"+q,m,A.HN(b,c),q,o)
q=$.af
q=A.Eu($.nG(),q)
t.gG.a(B.bE)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.f(A.j("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.f(A.j("audio listener room missing: "+q))
j=l.iS(p,q,B.bE)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.f(A.j("audio cue family missing: "+q))
k=J.aQ(i)
k=k.h(i,B.d.O(A.Jk(q,o.f),k.gu(i)))
o=o.e
A.ab(j.a,t.N)
a.iG(k,new A.h(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
HN(a,b){var s,r,q,p=$.W.j().b
for(s=new A.dx(a+":"+b),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){q=s.d
p=A.DA(p,q==null?r.a(q):q)}return p},
Jv(a){var s=$.zP
if(s==null)return
s.textContent=""+B.b.ai(a>0?1/a:0)+" fps"},
Js(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="interact"
if($.Df||$.bf!=null){$.kc().a=new A.h(0,0,0)
return}$.am.j().dS(b4)
s=$.am.j()
r=s.cS("moveLeft")?-1:0
if(s.cS("moveRight"))++r
q=s.cS("moveForward")?1:0
if(s.cS("moveBack"))--q
s=s.ay?s.w:new A.h(0,0,0)
p=new A.h(r,0,q).a4(0,s)
o=p.gu(0)>1?p.ga8():p
n=$.am.j().Q
m=$.am.j().as
s=$.fP()
l=s.d?-1:1
k=s.e?-1:1
j=$.cj
i=$.am.j()
i=i.ay?i.x:0
h=$.fP()
g=h.d?-1:1
$.cj=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b4)
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
f=new A.h(i*Math.cos($.cj)+j*Math.sin($.cj),0,-i*Math.sin($.cj)+j*Math.cos($.cj)).ga8().a6(0,2)
j=$.kc()
if(!isFinite(b4)||b4<0)A.f(A.a7(b4,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.f(A.a7(e,"rate","must be finite and positive"))
s=Math.exp(-e*b4)
l=j.a
s=l.a4(0,f.ac(0,l).a6(0,1-s))
j.a=s
d=$.eP.j().oa($.R.j(),$.af,$.e8(),s.a6(0,b4))
$.xO=d.a
if($.ci.j().a!==B.bW&&$.ci.j().a!==B.ac)$.af=d.b
c=B.b.n(j.a.gu(0)/2,0,1)
s=$.Ec()
$.A8=s.jA($.A8,$.e8().b,b4)
b=s.m5(b4,c)
s=$.e8()
l=$.A8
$.cW.j().iw(new A.h(s.a+b.a,l+b.b,s.c+b.c),$.cj,$.eV)
s=$.W.j().z
l=$.ww
l=l==null?b2:l.ghU()
a=A.FO(l==null?B.kL:l,s)
s=$.cW.j()
l=$.R.j()
a0=A.Kl(a,s,$.af,l,$.hR)
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
$.Ct.j().jp(j)
a1=A.G(A.b(v.G.document).getElementById("crosshair"))
if(a1!=null){l=!i?"crosshair-active":"crosshair-dot"
a1.className=l}a2=b2
a3=b2
a4=b2
a5=b2
switch(s.a){case 0:a2=A.An($.cW.j(),$.R.j(),$.af)
break
case 1:a3=A.DK($.cW.j(),$.R.j(),$.af)
break
case 2:a4=A.DL($.cW.j(),$.R.j(),$.af)
break
case 3:l=$.cW.j()
k=$.R.j()
j=$.hR
a5=A.DJ(l,$.af,k,j)
break
case 4:case 5:break}$.Cs.j().pl($.fQ().f7($.W.j().gag().a,"status"),$.af==="living-room")
l=$.am.j()
k=l.CW
if(k.br(b3,l.d)||k.br(b3,l.f)){l=$.W.j().gag()
k=a3==null
j=k?b2:a3.a
i=B.a.a2($.aP.j().hF(21),$.aP.j().gnZ())
if(l.a===21&&j==="front-door"&&i){s=$.ci.j()
$.R.j()
s.jG(B.fm,A.ab(s.c,t.N))
B.a.k($.dr,"collapse")
A.fM("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.be.j().aM("mantle flame extinguished")}else if($.W.j().jD(1,1)){a2.d=!0
s=$.hO.j()
s.a=a2
s.b=2
$.be.j().aM("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.be.j()
s.aM(a3.ax?"door opens":"door closes")
s=$.ay
if(s!=null)s.dF($.R.j(),a3.b)
s=$.ay
if(s!=null)s.eQ($.R.j(),a3.a)
s=$.bm
if(s!=null)s.bN()}else if(a4!=null)if(a4.w){s=$.W.j()
if(s.f.dR(1)){a4.w=!1
$.be.j().aM("shutter closes")}}else{a4.w=!0
$.be.j().aM("shutter opens")}else if(s===B.cM){a6=a.f6()
s=A.C(a6)
l=t.E4
a7=A.bK(new A.I(a6,s.i("l(1)").a(new A.xV(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.bK(a6,l)
if(a7!=null)$.be.j().c5("noticed",a7.d)}else if(a5!=null){a8=a5.a
if(a8===$.R.j().x){$.be.j().aM("the living-room sofa is ready for rest")
A.hX($.fJ.j())
return}s=$.z3()
if(!a5.x)A.f(A.j("inventory placement is not pickable: "+a8))
a9=a5.y
if(a9==null)a9=a8
s=s.a
l=s.h(0,a8)
s.l(0,a8,(l==null?0:l)+1)
l=$.p.j()
l.setAttribute("data-inventory-last-focus",a9)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a9)
s=A.aX(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
b0=A.IU(a9)
s=$.be.j()
s.c5("noticed",b0==null?"you inspect "+a9:b0)}}s=$.hO.j()
if(s.a!=null&&s.b>0){b1=$.hO.j().a
if(b1!=null&&A.An($.cW.j(),$.R.j(),$.af)!==b1){s=$.hO.j()
s.a=null
s.b=0}}A.J4(b4,a0)},
J4(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="rgba(12, 10, 14, 0.92)",c2=$.eT
if(c2==null)return
s=A.b($.Cu.j().getBoundingClientRect())
r=A.a1(s.width)
q=A.a1(s.height)
if(r<=0||q<=0)return
p=$.cC()
p.pk(c3)
o=$.E9()
n=o.c
if(n<1)o.c=Math.min(1,n+c3*6)
n=c4.c
m=n!=null
l=o.j_(n,m,$.aC.j().y)
o=$.bT()
k=o.a
j=o.d
i=c3*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.R.j()
j=$.af
h=k.e.h(0,j)
g=$.wt.j().eE($.W.j().gag().a)
j=$.ay
f=j==null?null:j.gdK()
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
a2=$.cD()
a3=a2.y===B.cR
a4=h==null?null:h.a
if(a4==null)a4=$.af
a2=a2.z?$.fQ().f7($.W.j().gag().a,"status"):null
c2.e=e
a5=c2.a
a5.c+=c3
a6=a5.d
B.a.P(a6)
a7=A.a1(A.b(v.G.window).devicePixelRatio)
a8=B.b.aE(r*a7)
a9=B.b.aE(q*a7)
b0=a5.a
if(A.i(b0.width)!==a8||A.i(b0.height)!==a9){b0.width=a8
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
A.aV(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}else{b0.fillStyle="rgba(0, 0, 0, 0.85)"
b0.beginPath()
A.aV(b0,"arc",[1,1,3,0,6.283185307179586],k)
b0.fill()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.aV(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}b0.restore()
a5.no(n,q,r)}a5.nn(q,r,new A.rE(j,i,d,c,b,a,p))
b3=r-80-24
a5.aU("#d32f2f",2,8,c1,44,-0.08,160,b3,42)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='bold 14px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b4=B.d.n(B.b.aV(a1*60),0,1439)
b5=B.d.ad(b4,60)
b6=B.d.O(b4,60)
b7=a3?B.d.O(b5+11,12)+1:b5
if(a3)b8=b5<12?" AM":" PM"
else b8=""
b0.fillText("DAY "+a0.a+"  \u2022  "+B.c.bF(B.d.t(b7),2,"0")+":"+B.c.bF(B.d.t(b6),2,"0")+b8,b3,42)
b0.restore()
a5.aU("#c49a45",1.8,6,c1,34,0.08,170,109,37)
b0.save()
b0.fillStyle="#c49a45"
b0.font='bold 13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bA(a4.toUpperCase(),142),109,37)
b0.restore()
if(a2!=null&&a2.length!==0){b9=Math.min(r*0.6,420)
c0=r*0.5
a5.aU("#f5f0e6",1.5,6,c1,32,-0.04,b9,c0,68)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bA(a2,b9-28),c0,68)
b0.restore()}a5.nr(q,r,e)
a5.nm(l,q,r)
a5.np(q,r,o)
b0.restore();++c2.b
p=$.p.j()
p.setAttribute("data-renderer-gui-frame",""+c2.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ab(a6,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-temperature-c",B.b.F(c2.e,2))
p.setAttribute("data-renderer-gui-surface",""+c2.c+"x"+c2.d)},
IU(a){var s,r,q,p,o=$.W.j().z.b,n=A.v(o).i("N<1,2>"),m=A.K(new A.N(o,n),n.i("r.E"))
B.a.Y(m,new A.xz())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fQ().at
n===$&&A.t()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Jy(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cD().Q)return
if($.aC.j().y||$.bf!=null||$.aP.j().r!=null)return
s=$.W.j().gag()
for(r=$.aP.j().hF(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aP.b
if(m===$.aP)A.f(A.a9(""))
if(m.c.p(0,n)||p<n.c)continue
r=$.aP.b
if(r===$.aP)A.f(A.a9(""))
l=r.cg(n)
if(!(l instanceof A.mi))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.B6(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.kc().a=new A.h(0,0,0)
r=$.aC.b
if(r===$.aC)A.f(A.a9(""))
q=n.a
r.ff(q,k)
$.cC().bJ(!0,B.bo,q,k)
A.A_()
A.Dl(n)
return}},
Ju(){var s,r,q,p,o,n,m=$.ww
if(m==null)return
s=$.W.j().gag()
for(r=m.cf(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
n=$.W.b
if(n===$.W)A.f(A.a9(""))
if(!n.m8(o))continue
n=$.p.b
if(n===$.p)A.f(A.a9(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
J5(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbs()
if(p||o==null)return
p=$.aC.j()
s=q.a
r=s.a
p.ff(r,o)
$.cC().bJ(!0,B.bo,r,o)
A.A_()
A.Dl(s)
if(q.d!==B.aj)A.A0()
A.fM("restored visitor")},
Dl(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.W.j().nI("stranger-17-eileen-case")
r=$.fQ().x
r===$&&A.t()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aG(q,!0,t.N):B.n
p=A.bK(r,t.N)
if(s==null||p==null)return
$.be.j().c5("inside the case",p+" \u201c"+s.d+"\u201d")},
Jt(){var s,r,q,p,o,n
if(!$.cD().Q)return
s=$.W.j().gag()
r=$.ni.j().ns(s.a,s.b)
if(r.length===0)return
q=B.a.ga1(r)
$.ni.j().b.k(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.be.j().c5(o,q.e)
n=A.JH(p)
if(n!=null)B.a.k($.dr,"ambient-"+n)},
Jx(){var s,r,q,p,o=$.W.j().gag()
if(o.b<20)return
s=o.a
if(!$.xT.k(0,s))return
r=$.fQ().f
r===$&&A.t()
q=r.h(0,B.d.t(s))
r=t.j.b(q)?A.aG(q,!0,t.N):B.n
p=A.Ki(r,$.W.j().b,s)
if(p!=null)$.be.j().c5("noticed",p)},
Da(a){var s,r,q,p,o
if($.zN!=null)return
s=$.W.j().gag()
r=$.W.j().r.c
q=$.W.j().e.b
p=A.v(q).i("ao<2>")
o=A.F6(new A.pk(s.a,1-r,new A.I(new A.ao(q,p),p.i("l(r.E)").a(new A.xJ()),p.i("I<r.E>")).gu(0),$.W.j().r.d,a))
if(o==null)return
A.D6(o)
A.k7("ending recorded")},
D6(a){var s,r,q,p
$.zN=a
$.Df=!0
s=$.p.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.Bk($.W.j().z,r).length)
$.kc().a=new A.h(0,0,0)
A.hX($.jT.j())
s=$.fQ().w
s===$&&A.t()
p=s.h(0,q)
s=t.j.b(p)?A.aG(p,!0,t.N):B.n
s=A.K(s,t.N)
B.a.L(s,A.Bk($.W.j().z,r))
$.jT.j().js(a,s)},
HW(a){var s,r,q,p
A:{if("open"===a){s=B.aM
break A}if("chain"===a){s=B.cE
break A}if("through-door"===a){s=B.cF
break A}if("letterbox"===a){s=B.cG
break A}s=B.ao
break A}r=$.aP.j().mt(s)
if(s===B.aM){q=$.R.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.ay
if(p!=null)p.dF($.R.j(),q.b)
p=$.ay
if(p!=null)p.eQ($.R.j(),q.a)
p=$.bm
if(p!=null)p.bN()}}if(!(r instanceof A.mg)||s===B.ao){A.x2()
return}if(r.a.gbs()==null){A.zL()
A.x2()
return}A.A0()},
I2(){var s=$.aP.j().m6()
if(!(s instanceof A.je)||s.b){A.zL()
A.x2()
return}if(s.a.gbs()==null){A.zL()
A.x2()
return}A.A0()},
A0(){var s,r,q,p,o,n,m,l,k,j=$.aP.j().r,i=j==null,h=i?null:j.gbs()
if(i||h==null)return
s=$.aP.j().gcl()
if(s==null){$.aC.j().jr(h)
$.cC().bJ(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.aC.j().fg(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aC.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a5(k.a,k.b))}m.jt(l,r)
o=$.cC()
m=j.a.a
o.bJ(!0,i?q:B.n,m,h)
if(!i){i=A.C(p)
k=A.bK(new A.I(p,i.i("l(1)").a(new A.xE(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.aC.j()
q=k.c
i.fh(h,q)
o.bJ(!0,B.n,m,h+"\n\n"+q)}}}A.Dk()
A.A_()},
A_(){var s,r,q=$.aP.j().r,p=q==null,o=p?null:q.gbs(),n=$.bm
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bF(B.d.t(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.zV===s)return
$.zV=s
r=n.dB(s,1)
p=$.dq
if(new A.o2(s,o).oV(p.e===!0,r).length!==0)$.be.j().aM(o)},
HX(a){var s,r,q,p,o,n=$.aP.j().mu(a)
if(!(n instanceof A.mh))return
s=n.c
if(!$.W.j().m9(n.b,s))return
r=s.c
s=$.aC.j()
q=n.a
p=q.gbs()
s.fh(p==null?"":p,r)
o=q.gbs()
if(o==null)o=""
$.cC().bJ(!0,B.n,q.a.a,o+"\n\n"+r)
A.Dk()
A.k7("saved after visitor answer")},
x2(){$.aC.j().ip()
$.cC().P(0)
$.zV=null
$.am.j().dH($.p.j())},
Dk(){var s,r,q,p,o=$.aC.j(),n=A.b(v.G.document),m=A.c([],t.wt)
for(s=$.nk.j().f8(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.a5(p.a,B.a.ga7(p.c).t(0)))}o.jq(n,m)},
HY(a){var s,r,q,p=$.aP.j().mv(a,!0,$.nk.j())
if(p==null)return
s=$.nk.j().n5(p,B.jK)
r=$.aC.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.t()
r.textContent=B.S.bW("",!0,q)
A.k7("saved after visitor citation")},
zL(){var s,r=$.R.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.ay
if(s!=null)s.dF($.R.j(),r.b)
s=$.ay
if(s!=null)s.eQ($.R.j(),r.a)
s=$.bm
if(s!=null)s.bN()}},
Jw(){var s,r,q,p,o,n,m,l,k
for(s=$.R.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.ci.b
if(k===$.ci)A.f(A.a9(""))
if(B.a.p(k.d,n+m)){l.d=!1
continue}}}},
Km(a){var s,r,q,p,o,n,m,l=$.R.j().e.h(0,a)
if(l==null||$.bw.j().gfo()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.A){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.t){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.aq){n=$.bw.b
if(n===$.bw)A.f(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.ar){o=$.bw.b
if(o===$.bw)A.f(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
A2(a){var s,r=$.R.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dm
if(q.length===0)return 0.12
s=A.C(q)
return B.b.n(new A.I(q,s.i("l(1)").a(new A.xG()),s.i("I<1>")).gu(0)/q.length,0.12,1)},
JG(a){var s,r=$.R.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dm
if(q.length===0)return 0
s=A.C(q)
return B.b.n(new A.I(q,s.i("l(1)").a(new A.y_()),s.i("I<1>")).gu(0)/q.length,0,1)},
Jz(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.w&&a1.b)a0=B.aw
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.vj(new A.hD(a1,s,B.b.n(q,0.35,0.98),B.b.n(p,0,1),2.5,0,18e3,1,0))
n=$.Az()
m=n.z
l=B.a.b6(a3,0,new A.xU(),t.i)
k=$.Ej()
q=B.b.n(q,0.35,0.98)
j=a0===B.w?0:r
n=n.y
i=B.b.n(l/900,0,1)
h=B.b.n(o.w/1000,0,1)
g=B.b.n(a2,0,0.5)
f=$.Do
$.Do=f+1
e=k.cB(new A.ve(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.W.j().b))
d=$.bm
s=d==null
if(!s){r=A.c([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jC([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.mc(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.oH(a.b,a.c,a.d,a.e,a.f)}s=$.p.j()
s.setAttribute("data-audio-weather-transmission",B.b.F(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.F(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.F(a4,3))},
HS(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.fH),f=A.c([],t.vN)
for(s=[-0.42,16.17],r=0,q=0;q<2;++q){p=s[q]
for(o=[0,15.75],n=p<0,m=0;m<2;++m){l=o[m]
k=""+r
j="roof-drain-"+k
i=new A.h(l,12.044999999999998,p)
B.a.k(g,new A.iU(j,i,new A.h(l,0.12,p),0.08))
h=n?0.42:-0.42
B.a.k(f,new A.iV("roof-catchment-"+k,new A.h(7.875,16.32,p+h),i,62.015625,0.96,0.16,j));++r}}return A.G2(g,f)},
HL(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.ay
if(a0!=null){s=$.R.j()
r=$.af
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.vj(new A.hD(a1,q,B.b.n(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.ny.c_($.af,A.KB())
n=isFinite(a0.gdK())?a0.gdK():q
m=B.b.n(a0.giV(),0,1)
l=B.b.n((n-q)*8,0,400)
s=B.b.n(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.f(A.o("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.aa&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
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
o.hx()
r=o.a
return new A.vm(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
JE(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.dl
s=a3.aI(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=p+s.a
m=q+s.c
l=o+s.b
k=A.c([new A.eG("floor:"+r,new A.h(p,o,q),new A.h(n,o+0.05,m),a5,0.12),new A.eG("roof-interior:"+r,new A.h(p,l-0.06,q),new A.h(n,l+0.03,m),a5,0.05)],t.uI)
if(a6==null)return k
for(r=a6.iE(r),n=J.O(r.a),r=new A.U(n,r.b,r.$ti.i("U<1>")),m=a6.c;r.m();){l=n.gq()
j=l.c
i=!0
if(!(l.d==="renderer-reference"&&!l.ay.r)){h=l.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.p(j.toLowerCase(),"stair")}if(i)continue
g=a6.bO(j)
j=l.f.a
f=l.iO(g,m)
e=l.eX(g,m)
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
l=new A.eG("inventory:"+a0,new A.h(d-b,c-i,j-h),new A.h(d+b,c+i,j+h),a,l)
l.A()
B.a.k(k,l)}return A.ab(k,t.qR)},
hH:function hH(a,b){this.a=a
this.b=b},
mV:function mV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.d6=_.y2=null
_.cp=b2
_.ev=b3
_.cs=_.cr=_.cq=0
_.d7=b4
_.d9=_.d8=_.ew=0
_.da=b5
_.bU=_.ez=_.ey=_.ex=_.dc=0
_.hY=null
_.hZ=2.25
_.di=_.dh=_.dg=_.df=_.de=_.dd=0
_.dj=!1
_.i8=_.i7=_.i6=_.i5=_.i4=_.i3=_.i2=_.i1=_.i0=_.i_=_.eB=_.eA=null
_.i9=7
_.dl=_.dk=_.ct=_.ia=_.eC=0
_.dm=null
_.ib=_.nC=_.bV=_.eD=_.dq=_.dn=0
_.aJ=!1
_.dr=null
_.cm=_.cu=0
_.co=_.cn=null
_.hW=_.nB=$
_.d5=null
_.hX=0},
w6:function w6(a){this.a=a},
w9:function w9(a,b,c){this.a=a
this.b=b
this.c=c},
wa:function wa(a){this.a=a},
w_:function w_(){},
w7:function w7(){},
w8:function w8(){},
wd:function wd(a){this.a=a},
we:function we(a){this.a=a},
wb:function wb(a,b,c){this.a=a
this.b=b
this.c=c},
w4:function w4(a,b,c){this.a=a
this.b=b
this.c=c},
wc:function wc(){},
w5:function w5(a,b,c){this.a=a
this.b=b
this.c=c},
w0:function w0(){},
w1:function w1(){},
w2:function w2(){},
w3:function w3(){},
vY:function vY(){},
vZ:function vZ(){},
vU:function vU(){},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
mU:function mU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jx:function jx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vy:function vy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wL:function wL(){},
wM:function wM(){},
wN:function wN(){},
wT:function wT(){},
wU:function wU(){},
wV:function wV(){},
wW:function wW(){},
wX:function wX(){},
wY:function wY(a){this.a=a},
wZ:function wZ(a){this.a=a},
x_:function x_(a){this.a=a},
wO:function wO(a){this.a=a},
wP:function wP(){},
wQ:function wQ(){},
wR:function wR(){},
wS:function wS(){},
wH:function wH(){},
wI:function wI(a){this.a=a},
wJ:function wJ(){},
wK:function wK(){},
wD:function wD(){},
wE:function wE(){},
wF:function wF(){},
wG:function wG(){},
xu:function xu(a,b){this.a=a
this.b=b},
xs:function xs(a){this.a=a},
xt:function xt(a){this.a=a},
yj:function yj(a,b){this.a=a
this.b=b},
yk:function yk(){},
yl:function yl(){},
yw:function yw(){},
yG:function yG(){},
yH:function yH(){},
yI:function yI(){},
yJ:function yJ(){},
yK:function yK(){},
yL:function yL(){},
yM:function yM(){},
ym:function ym(){},
yn:function yn(){},
yo:function yo(){},
yp:function yp(){},
yq:function yq(){},
yr:function yr(){},
ys:function ys(){},
yt:function yt(){},
yu:function yu(){},
yv:function yv(){},
yx:function yx(){},
yy:function yy(){},
yz:function yz(){},
yA:function yA(){},
yB:function yB(){},
yC:function yC(){},
yD:function yD(){},
yE:function yE(){},
yF:function yF(){},
xv:function xv(){},
xw:function xw(){},
xC:function xC(a){this.a=a},
xN:function xN(a){this.a=a},
xV:function xV(a){this.a=a},
xz:function xz(){},
xJ:function xJ(){},
xE:function xE(a){this.a=a},
xG:function xG(){},
y_:function y_(){},
xU:function xU(){},
DN(a){return v.mangledGlobalNames[a]},
B6(a,b,c,d,e,f){var s=a[b]()
return s},
qH(a,b,c){var s=null
return c.a(A.B6(a,b,s,s,s,s))},
Bj(a,b){var s,r,q,p=A.K(B.cz.bB(B.f.a0(a.iQ(!1),null)),t.S),o=A.v(b).i("ae<1>"),n=A.K(new A.ae(b,o),o.i("r.E"))
B.a.X(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.u)(n),++s){r=n[s]
B.a.L(p,B.cz.bB(r))
B.a.k(p,0)
q=b.h(0,r)
q.toString
B.a.L(p,q)}return A.Gk(p)},
JZ(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b2.c!=null)return b2
s=b2.a
r=s.b
q=r*4
p=b2.b
o=J.Em(B.o.gej(p),p.byteOffset,p.byteLength)
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
c=A.JB(o,d,q)
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
B.a.L(k,new Uint8Array(o.subarray(d,A.zK(d,d+q,n))))
for(b0=0;b0<r;++b0){a0=e+b0
if(!(a0<i))return A.d(p,a0)
B.a.k(j,p[a0])}}}b1=B.d.ba(j.length,r)>65536?new Uint32Array(A.S(g)):new Uint16Array(A.S(g))
return new A.bY(s,new Float32Array(A.S(j)),b1,b2.d)},
JB(a,b,c){var s,r,q,p
for(s=a.length,r=2166136261,q=0;q<c;++q){p=b+q
if(!(p<s))return A.d(a,p)
r=((r^a[p])>>>0)*16777619>>>0}return r},
Gl(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.n(a*57.29577951308232,90,105)-90)/15*62},
yS(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.a(A.a7(b.gnS(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gG().c.af()
o=q*16
n=o+16
B.o.dP(s,o,n,p.a)
if(l)B.o.dP(r,o,n,p.eK().a)}m=a.a
A.m(m,"uInstanceModels",new A.q(B.ej,s))
if(l)A.m(m,"uInstanceNormalMatrices",new A.q(B.ej,r))
A.m(m,"uUseInstances",B.c6)},
EU(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
ET(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
DA(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
JH(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cn(a,b,c){var s=B.b.n(c,0,1),r=a.c,q=a.b,p=a.a
return new A.bl(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
JY(a){var s,r,q,p,o,n,m,l=B.f.ak(a,null),k=t.f
if(!k.b(l))throw A.a(B.ij)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=A.n(s,t.P)
for(o=0;o<14;++o){n=B.kP[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.n(s,r))
else if(k.b(m))p.l(0,n,A.aZ(m,s,r))
else throw A.a(A.M('text.json section "'+n+'" must be an object',null,null))}return p},
Ki(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbj(a)
s=new A.eL()
s.c9((b^274953^c)>>>0)
r=s.aY(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.za.prototype={}
J.la.prototype={
aa(a,b){return a===b},
gU(a){return A.iS(a)},
t(a){return"Instance of '"+A.lI(a)+"'"},
gae(a){return A.ds(A.zS(this))}}
J.ld.prototype={
t(a){return String(a)},
gU(a){return a?519018:218159},
gae(a){return A.ds(t.y)},
$ian:1,
$il:1}
J.ix.prototype={
aa(a,b){return null==b},
t(a){return"null"},
gU(a){return 0},
$ian:1,
$iaz:1}
J.iz.prototype={$iaj:1}
J.ev.prototype={
gU(a){return 0},
gae(a){return B.oy},
t(a){return String(a)}}
J.lB.prototype={}
J.eA.prototype={}
J.dJ.prototype={
t(a){var s=a[$.DR()]
if(s==null)s=a[$.z0()]
if(s==null)return this.jK(a)
return"JavaScript function for "+J.c5(s)},
$if6:1}
J.he.prototype={
gU(a){return 0},
t(a){return String(a)}}
J.hf.prototype={
gU(a){return 0},
t(a){return String(a)}}
J.x.prototype={
d3(a,b){return new A.b9(a,A.C(a).i("@<1>").S(b).i("b9<1,2>"))},
k(a,b){A.C(a).c.a(b)
a.$flags&1&&A.aW(a,29)
a.push(b)},
oQ(a,b){var s
a.$flags&1&&A.aW(a,"removeAt",1)
s=a.length
if(b>=s)throw A.a(A.Bu(b,null))
return a.splice(b,1)[0]},
a9(a,b){var s
a.$flags&1&&A.aW(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.C(a).i("r<1>").a(b)
a.$flags&1&&A.aW(a,"addAll",2)
if(Array.isArray(b)){this.ka(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gq())},
ka(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.aD(a))
for(r=0;r<s;++r)a.push(b[r])},
P(a){a.$flags&1&&A.aW(a,"clear","clear")
a.length=0},
bu(a,b,c){var s=A.C(a)
return new A.H(a,s.S(c).i("1(2)").a(b),s.i("@<1>").S(c).i("H<1,2>"))},
W(a,b){var s,r=A.d9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.y(a[s]))
return r.join(b)},
b6(a,b,c,d){var s,r,q
d.a(b)
A.C(a).S(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.aD(a))}return r},
b5(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.a(A.aD(a))}if(c!=null)return c.$0()
throw A.a(A.cM())},
ap(a,b){return this.b5(a,b,null)},
ab(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aj(a,b,c){var s=a.length
if(b>s)throw A.a(A.b_(b,0,s,"start",null))
if(c<b||c>s)throw A.a(A.b_(c,b,s,"end",null))
if(b===c)return A.c([],A.C(a))
return A.c(a.slice(b,c),A.C(a))},
ga1(a){if(a.length>0)return a[0]
throw A.a(A.cM())},
ga7(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.cM())},
gbj(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.a(A.cM())
throw A.a(A.B3())},
M(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.aD(a))}return!1},
a2(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.aD(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.C(a)
n.i("k(1,1)?").a(b)
a.$flags&2&&A.aW(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Iv()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.j5()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.i1(b,2))
if(p>0)this.lx(a,p)},
X(a){return this.Y(a,null)},
lx(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dQ(a,b){var s,r,q,p
a.$flags&2&&A.aW(a,"shuffle")
s=a.length
while(s>1){r=b.aY(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bE(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.aa(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gR(a){return a.length===0},
ga5(a){return a.length!==0},
t(a){return A.z8(a,"[","]")},
gv(a){return new J.eZ(a,a.length,A.C(a).i("eZ<1>"))},
gU(a){return A.iS(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.aW(a,"set length","change the length of")
if(b<0)throw A.a(A.b_(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.y8(a,b))
return a[b]},
l(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.aW(a)
if(!(b>=0&&b<a.length))throw A.a(A.y8(a,b))
a[b]=c},
f3(a,b){return new A.dY(a,b.i("dY<0>"))},
eG(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gae(a){return A.ds(A.C(a))},
$iV:1,
$ir:1,
$iJ:1}
J.lc.prototype={
pj(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lI(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.qI.prototype={}
J.eZ.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.u(q)
throw A.a(q)}s=r.c
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
else if(a===b){if(a===0){s=this.gbX(b)
if(this.gbX(a)===s)return 0
if(this.gbX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbX(a){return a===0?1/a<0:a<0},
aE(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.bu(""+a+".toInt()"))},
hK(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.bu(""+a+".ceil()"))},
aV(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.a(A.bu(""+a+".floor()"))},
ai(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.bu(""+a+".round()"))},
n(a,b,c){if(this.I(b,c)>0)throw A.a(A.y1(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.a(A.b_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbX(a))return"-"+s
return s},
ph(a,b){var s
if(b>20)throw A.a(A.b_(b,0,20,"fractionDigits",null))
s=a.toExponential(b)
if(a===0&&this.gbX(a))return"-"+s
return s},
f_(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.b_(b,2,36,"radix",null))
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
o-=r.length}return s+B.c.a6("0",o)},
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
return this.ho(a,b)},
ad(a,b){return(a|0)===a?a/b|0:this.ho(a,b)},
ho(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.bu("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
ef(a,b){var s
if(a>0)s=this.hn(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lI(a,b){if(0>b)throw A.a(A.y1(b))
return this.hn(a,b)},
hn(a,b){return b>31?0:a>>>b},
ju(a,b){if(b<0)throw A.a(A.y1(b))
return this.lJ(a,b)},
lJ(a,b){if(b>31)return 0
return a>>>b},
gae(a){return A.ds(t.J)},
$ibp:1,
$iz:1,
$iby:1}
J.iw.prototype={
gae(a){return A.ds(t.S)},
$ian:1,
$ik:1}
J.le.prototype={
gae(a){return A.ds(t.i)},
$ian:1}
J.eu.prototype={
hE(a,b){return new A.n6(b,a,0)},
bf(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aQ(a,r-s)},
jE(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.iy){s=b.e
s=!(s==null?b.e=b.ku():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.kD(a,b)}},
c1(a,b,c,d){var s=A.fj(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kD(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.El(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gq()
o=p.gfl()
n=p.geu()
q=n-o
if(q===0&&r===o)continue
B.a.k(m,this.J(a,r,o))
r=n}if(r<a.length||q>0)B.a.k(m,this.aQ(a,r))
return m},
au(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b_(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
V(a,b){return this.au(a,b,0)},
J(a,b,c){return a.substring(b,A.fj(b,c,a.length))},
aQ(a,b){return this.J(a,b,null)},
aP(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.Fy(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.Fz(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a6(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.fg)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bF(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a6(c,s)+a},
ds(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bE(a,b){return this.ds(a,b,0)},
p(a,b){return A.Kt(a,b,0)},
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
gae(a){return A.ds(t.N)},
gu(a){return a.length},
$ian:1,
$ibp:1,
$irI:1,
$ie:1}
A.eI.prototype={
gv(a){return new A.ic(J.O(this.gbb()),A.v(this).i("ic<1,2>"))},
gu(a){return J.cE(this.gbb())},
gR(a){return J.ke(this.gbb())},
ga5(a){return J.Eq(this.gbb())},
ab(a,b){return A.v(this).y[1].a(J.nH(this.gbb(),b))},
ga1(a){return A.v(this).y[1].a(J.AE(this.gbb()))},
p(a,b){return J.AD(this.gbb(),b)},
t(a){return J.c5(this.gbb())}}
A.ic.prototype={
m(){return this.a.m()},
gq(){return this.$ti.y[1].a(this.a.gq())},
$iai:1}
A.f2.prototype={
gbb(){return this.a}}
A.jm.prototype={$iV:1}
A.jk.prototype={
h(a,b){return this.$ti.y[1].a(J.b1(this.a,b))},
l(a,b,c){var s=this.$ti
J.b7(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.Er(this.a,b)},
k(a,b){var s=this.$ti
J.e9(this.a,s.c.a(s.y[1].a(b)))},
$iV:1,
$iJ:1}
A.b9.prototype={
d3(a,b){return new A.b9(this.a,this.$ti.i("@<1>").S(b).i("b9<1,2>"))},
gbb(){return this.a}}
A.hg.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dx.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.tA.prototype={
gE(){return 0}}
A.V.prototype={}
A.a0.prototype={
gv(a){var s=this
return new A.al(s,s.gu(s),A.v(s).i("al<a0.E>"))},
gR(a){return this.gu(this)===0},
ga1(a){if(this.gu(this)===0)throw A.a(A.cM())
return this.ab(0,0)},
p(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.aa(r.ab(0,s),b))return!0
if(q!==r.gu(r))throw A.a(A.aD(r))}return!1},
a2(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.ab(0,r)))return!1
if(s!==q.gu(q))throw A.a(A.aD(q))}return!0},
M(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.ab(0,r)))return!0
if(s!==q.gu(q))throw A.a(A.aD(q))}return!1},
W(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.ab(0,0))
if(o!==p.gu(p))throw A.a(A.aD(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.ab(0,q))
if(o!==p.gu(p))throw A.a(A.aD(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.ab(0,q))
if(o!==p.gu(p))throw A.a(A.aD(p))}return r.charCodeAt(0)==0?r:r}},
o2(a){return this.W(0,"")},
dL(a,b){return this.jJ(0,A.v(this).i("l(a0.E)").a(b))},
bu(a,b,c){var s=A.v(this)
return new A.H(this,s.S(c).i("1(a0.E)").a(b),s.i("@<a0.E>").S(c).i("H<1,2>"))},
c2(a,b){var s=A.v(this).i("a0.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bH(a){return this.c2(0,!0)},
b9(a){var s,r=this,q=A.zd(A.v(r).i("a0.E"))
for(s=0;s<r.gu(r);++s)q.k(0,r.ab(0,s))
return q}}
A.j9.prototype={
gkI(){var s=J.cE(this.a),r=this.c
if(r==null||r>s)return s
return r},
glK(){var s=J.cE(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cE(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ab(a,b){var s=this,r=s.glK()+b
if(b<0||r>=s.gkI())throw A.a(A.qx(b,s.gu(0),s,"index"))
return J.nH(s.a,r)},
c2(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aQ(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.B5(0,n):J.B4(0,n)}r=A.d9(s,m.ab(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.ab(n,o+q))
if(m.gu(n)<l)throw A.a(A.aD(p))}return r},
bH(a){return this.c2(0,!0)}}
A.al.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aQ(q),o=p.gu(q)
if(r.b!==o)throw A.a(A.aD(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ab(q,s);++r.c
return!0},
$iai:1}
A.cO.prototype={
gv(a){return new A.iD(J.O(this.a),this.b,A.v(this).i("iD<1,2>"))},
gu(a){return J.cE(this.a)},
gR(a){return J.ke(this.a)},
ga1(a){return this.b.$1(J.AE(this.a))},
ab(a,b){return this.b.$1(J.nH(this.a,b))}}
A.dz.prototype={$iV:1}
A.iD.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.H.prototype={
gu(a){return J.cE(this.a)},
ab(a,b){return this.b.$1(J.nH(this.a,b))}}
A.I.prototype={
gv(a){return new A.U(J.O(this.a),this.b,this.$ti.i("U<1>"))}}
A.U.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iai:1}
A.im.prototype={
gv(a){return new A.io(J.O(this.a),this.b,B.f8,this.$ti.i("io<1,2>"))}}
A.io.prototype={
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
A.ik.prototype={
m(){return!1},
gq(){throw A.a(A.cM())},
$iai:1}
A.dY.prototype={
gv(a){return new A.jg(J.O(this.a),this.$ti.i("jg<1>"))}}
A.jg.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iai:1}
A.aE.prototype={
su(a,b){throw A.a(A.bu("Cannot change the length of a fixed-length list"))},
k(a,b){A.cl(a).i("aE.E").a(b)
throw A.a(A.bu("Cannot add to a fixed-length list"))}}
A.eB.prototype={
l(a,b,c){A.v(this).i("eB.E").a(c)
throw A.a(A.bu("Cannot modify an unmodifiable list"))},
su(a,b){throw A.a(A.bu("Cannot change the length of an unmodifiable list"))},
k(a,b){A.v(this).i("eB.E").a(b)
throw A.a(A.bu("Cannot add to an unmodifiable list"))}}
A.hB.prototype={}
A.bM.prototype={
gu(a){return J.cE(this.a)},
ab(a,b){var s=this.a,r=J.aQ(s)
return r.ab(s,r.gu(s)-1-b)}}
A.jR.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.fG.prototype={$r:"+height,width(1,2)",$s:2}
A.jy.prototype={$r:"+influence,light(1,2)",$s:3}
A.jz.prototype={$r:"+influence,source(1,2)",$s:4}
A.aH.prototype={$r:"+(1,2,3)",$s:5}
A.bl.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.jA.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.jB.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.jC.prototype={
gE(){return this.a[3]},
$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",
$s:10}
A.ig.prototype={}
A.h0.prototype={
gR(a){return this.gu(this)===0},
ga5(a){return this.gu(this)!==0},
t(a){return A.zf(this)},
l(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
A.EM()},
gN(){return new A.bI(this.nz(),A.v(this).i("bI<P<1,2>>"))},
nz(){var s=this
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
bv(a,b,c,d){var s=A.n(c,d)
this.aK(0,new A.oW(this,A.v(this).S(c).S(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.oW.prototype={
$2(a,b){var s=A.v(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.v(this.a).i("~(1,2)")}}
A.a4.prototype={
gu(a){return this.b.length},
gh0(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
K(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.K(b))return null
return this.b[this.a[b]]},
aK(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gh0()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga3(){return new A.fC(this.gh0(),this.$ti.i("fC<1>"))},
gam(){return new A.fC(this.b,this.$ti.i("fC<2>"))}}
A.fC.prototype={
gu(a){return this.a.length},
gR(a){return 0===this.a.length},
ga5(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.e_(s,s.length,this.$ti.i("e_<1>"))}}
A.e_.prototype={
gq(){var s=this.d
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
A.Du(s.a,r)
s.$map=r}return r},
K(a){return this.bm().K(a)},
h(a,b){return this.bm().h(0,b)},
aK(a,b){this.$ti.i("~(1,2)").a(b)
this.bm().aK(0,b)},
ga3(){var s=this.bm()
return new A.ae(s,A.v(s).i("ae<1>"))},
gam(){var s=this.bm()
return new A.ao(s,A.v(s).i("ao<2>"))},
gu(a){return this.bm().a}}
A.h1.prototype={
k(a,b){A.v(this).c.a(b)
A.EN()}}
A.aS.prototype={
gu(a){return this.b},
gR(a){return this.b===0},
ga5(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.e_(s,s.length,r.$ti.i("e_<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b9(a){return A.fc(this,this.$ti.c)}}
A.hb.prototype={
gu(a){return this.a.length},
gR(a){return this.a.length===0},
ga5(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.e_(s,s.length,this.$ti.i("e_<1>"))},
bm(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.fb(o.$ti.i("fb<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
n.l(0,p,p)}o.$map=n}return n},
p(a,b){return this.bm().K(b)},
b9(a){return A.fc(this,this.$ti.c)}}
A.t5.prototype={
$0(){return B.b.aV(1000*this.a.now())},
$S:39}
A.j1.prototype={}
A.uM.prototype={
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
A.iL.prototype={
t(a){return"Null check operator used on a null value"}}
A.lf.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.m9.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.rB.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.il.prototype={}
A.jE.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idi:1}
A.en.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.DO(r==null?"unknown":r)+"'"},
gae(a){var s=A.Ai(this)
return A.ds(s==null?A.cl(this):s)},
$if6:1,
gpy(){return this},
$C:"$1",
$R:1,
$D:null}
A.kv.prototype={$C:"$0",$R:0}
A.kw.prototype={$C:"$2",$R:2}
A.m6.prototype={}
A.m4.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.DO(s)+"'"}}
A.fV.prototype={
aa(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fV))return!1
return this.$_target===b.$_target&&this.a===b.a},
gU(a){return(A.nE(this.a)^A.iS(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lI(this.a)+"'")}}
A.lT.prototype={
t(a){return"RuntimeError: "+this.a}}
A.cr.prototype={
gu(a){return this.a},
gR(a){return this.a===0},
ga5(a){return this.a!==0},
ga3(){return new A.ae(this,A.v(this).i("ae<1>"))},
gam(){return new A.ao(this,A.v(this).i("ao<2>"))},
gN(){return new A.N(this,A.v(this).i("N<1,2>"))},
K(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nT(a)},
nT(a){var s=this.d
if(s==null)return!1
return this.cv(this.fY(s,a),a)>=0},
L(a,b){A.v(this).i("Y<1,2>").a(b).aK(0,new A.qR(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nU(b)},
nU(a){var s,r,q=this.d
if(q==null)return null
s=this.fY(q,a)
r=this.cv(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.v(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ft(s==null?q.b=q.eb():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ft(r==null?q.c=q.eb():r,b,c)}else q.nW(b,c)},
nW(a,b){var s,r,q,p,o=this,n=A.v(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.eb()
r=o.dt(a)
q=s[r]
if(q==null)s[r]=[o.ec(a,b)]
else{p=o.cv(q,a)
if(p>=0)q[p].b=b
else q.push(o.ec(a,b))}},
c_(a,b){var s,r,q=this,p=A.v(q)
p.c.a(a)
p.i("2()").a(b)
if(q.K(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
a9(a,b){var s=this
if(typeof b=="string")return s.fp(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fp(s.c,b)
else return s.nV(b)},
nV(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dt(a)
r=n[s]
q=o.cv(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fq(p)
if(r.length===0)delete n[s]
return p.b},
P(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dT()}},
aK(a,b){var s,r,q=this
A.v(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.aD(q))
s=s.c}},
ft(a,b,c){var s,r=A.v(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ec(b,c)
else s.b=c},
fp(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fq(s)
delete a[b]
return s.b},
dT(){this.r=this.r+1&1073741823},
ec(a,b){var s=this,r=A.v(s),q=new A.r0(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dT()
return q},
fq(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dT()},
dt(a){return J.aN(a)&1073741823},
fY(a,b){return a[this.dt(b)]},
cv(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
t(a){return A.zf(this)},
eb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$izc:1}
A.qR.prototype={
$2(a,b){var s=this.a,r=A.v(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.v(this.a).i("~(1,2)")}}
A.r0.prototype={}
A.ae.prototype={
gu(a){return this.a.a},
gR(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bW(s,s.r,s.e,this.$ti.i("bW<1>"))},
p(a,b){return this.a.K(b)}}
A.bW.prototype={
gq(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
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
gq(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
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
return new A.cN(s,s.r,s.e,this.$ti.i("cN<1,2>"))}}
A.cN.prototype={
gq(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iai:1}
A.fb.prototype={
dt(a){return A.JS(a)&1073741823},
cv(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.yf.prototype={
$1(a){return this.a(a)},
$S:13}
A.yg.prototype={
$2(a,b){return this.a(a,b)},
$S:113}
A.yh.prototype={
$1(a){return this.a(A.w(a))},
$S:43}
A.bk.prototype={
gae(a){return A.ds(this.fZ())},
fZ(){return A.K3(this.$r,this.cR())},
t(a){return this.ht(!1)},
ht(a){var s,r,q,p,o,n=this.kM(),m=this.cR(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.Br(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kM(){var s,r=this.$s
while($.wf.length<=r)B.a.k($.wf,null)
s=$.wf[r]
if(s==null){s=this.kt()
B.a.l($.wf,r,s)}return s},
kt(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.qG(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ab(j,k)}}
A.e0.prototype={
cR(){return[this.a,this.b]},
aa(a,b){if(b==null)return!1
return b instanceof A.e0&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gU(a){return A.cP(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.e1.prototype={
cR(){return[this.a,this.b,this.c]},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.e1&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gU(a){var s=this
return A.cP(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.hG.prototype={
cR(){return this.a},
aa(a,b){if(b==null)return!1
return b instanceof A.hG&&this.$s===b.$s&&A.Hd(this.a,b.a)},
gU(a){return A.cP(this.$s,A.FN(this.a),B.h,B.h,B.h,B.h)}}
A.iy.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gl3(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.B8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
ku(){var s,r=this.a
if(!B.c.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hE(a,b){return new A.mv(this,b,0)},
kL(a,b){var s,r=this.gl3()
if(r==null)r=A.fK(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.mQ(s)},
$irI:1,
$iG4:1}
A.mQ.prototype={
gfl(){return this.b.index},
geu(){var s=this.b
return s.index+s[0].length},
$ihk:1,
$iiW:1}
A.mv.prototype={
gv(a){return new A.mw(this.a,this.b,this.c)}}
A.mw.prototype={
gq(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kL(l,s)
if(p!=null){m.d=p
o=p.geu()
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
A.j8.prototype={
geu(){return this.a+this.c.length},
$ihk:1,
gfl(){return this.a}}
A.n6.prototype={
gv(a){return new A.n7(this.a,this.b,this.c)},
ga1(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.j8(r,s)
throw A.a(A.cM())}}
A.n7.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.j8(s,o)
q.c=r===q.c?r+1:r
return!0},
gq(){var s=this.d
s.toString
return s},
$iai:1}
A.vz.prototype={
j(){var s=this.b
if(s===this)throw A.a(A.a9(""))
return s}}
A.ew.prototype={
gae(a){return B.or},
hH(a,b,c){A.wA(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hG(a,b,c){A.wA(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$ian:1,
$iew:1}
A.hm.prototype={$ihm:1}
A.iJ.prototype={
gej(a){if(((a.$flags|0)&2)!==0)return new A.wm(a.buffer)
else return a.buffer},
kY(a,b,c,d){var s=A.b_(b,0,c,d,null)
throw A.a(s)},
fD(a,b,c,d){if(b>>>0!==b||b>c)this.kY(a,b,c,d)}}
A.wm.prototype={
hH(a,b,c){var s=A.Bm(this.a,b,c)
s.$flags=3
return s},
hG(a,b,c){var s=A.FK(this.a,b,c)
s.$flags=3
return s}}
A.lq.prototype={
gae(a){return B.os},
$ian:1}
A.bq.prototype={
gu(a){return a.length},
hk(a,b,c,d,e){var s,r,q=a.length
this.fD(a,b,q,"start")
this.fD(a,c,q,"end")
if(b>c)throw A.a(A.b_(b,0,c,null,null))
s=c-b
if(e<0)throw A.a(A.o(e,null))
r=d.length
if(r-e<s)throw A.a(A.j("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic7:1}
A.iH.prototype={
h(a,b){A.e5(b,a,a.length)
return a[b]},
l(a,b,c){A.ax(c)
a.$flags&2&&A.aW(a)
A.e5(b,a,a.length)
a[b]=c},
dP(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.aW(a,5)
this.hk(a,b,c,d,0)
return},
$iV:1,
$ir:1,
$iJ:1}
A.iI.prototype={
l(a,b,c){A.i(c)
a.$flags&2&&A.aW(a)
A.e5(b,a,a.length)
a[b]=c},
jj(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.aW(a,5)
this.hk(a,b,c,d,e)
return},
$iV:1,
$ir:1,
$iJ:1}
A.iG.prototype={
gae(a){return B.ot},
aj(a,b,c){return new Float32Array(a.subarray(b,A.zK(b,c,a.length)))},
$ian:1,
$ipu:1}
A.lr.prototype={
gae(a){return B.ou},
$ian:1,
$ipv:1}
A.ls.prototype={
gae(a){return B.ov},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1}
A.lt.prototype={
gae(a){return B.ow},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1}
A.lu.prototype={
gae(a){return B.ox},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1}
A.lv.prototype={
gae(a){return B.oA},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1,
$iuO:1}
A.lw.prototype={
gae(a){return B.oB},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1,
$iuP:1}
A.ff.prototype={
gae(a){return B.oC},
gu(a){return a.length},
h(a,b){A.e5(b,a,a.length)
return a[b]},
$ian:1,
$iff:1}
A.iK.prototype={
gae(a){return B.oD},
gu(a){return a.length},
h(a,b){A.e5(b,a,a.length)
return a[b]},
aj(a,b,c){return new Uint8Array(a.subarray(b,A.zK(b,c,a.length)))},
$ian:1,
$ic3:1}
A.jt.prototype={}
A.ju.prototype={}
A.jv.prototype={}
A.jw.prototype={}
A.cS.prototype={
i(a){return A.jI(v.typeUniverse,this,a)},
S(a){return A.Cj(v.typeUniverse,this,a)}}
A.mJ.prototype={}
A.na.prototype={
t(a){return A.bS(this.a,null)}}
A.mH.prototype={
t(a){return this.a}}
A.hK.prototype={$idU:1}
A.vv.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:19}
A.vu.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:83}
A.vw.prototype={
$0(){this.a.$0()},
$S:14}
A.vx.prototype={
$0(){this.a.$0()},
$S:14}
A.wi.prototype={
k8(a,b){if(self.setTimeout!=null)self.setTimeout(A.i1(new A.wj(this,b),0),a)
else throw A.a(A.bu("`setTimeout()` not found."))}}
A.wj.prototype={
$0(){this.b.$0()},
$S:0}
A.mx.prototype={
ek(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dW(a)
else{s=r.a
if(q.i("aT<1>").b(a))s.fB(a)
else s.cP(a)}},
el(a,b){var s=this.a
if(this.b)s.by(new A.bn(a,b))
else s.cM(new A.bn(a,b))}}
A.wx.prototype={
$1(a){return this.a.$2(0,a)},
$S:20}
A.wy.prototype={
$2(a,b){this.a.$2(1,new A.il(a,t.l.a(b)))},
$S:164}
A.y0.prototype={
$2(a,b){this.a(A.i(a),b)},
$S:191}
A.ch.prototype={
gq(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lB(a,b){var s,r,q
a=A.i(a)
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
o.d=null}q=o.lB(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Cd
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
o.a=A.Cd
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.j("sync*"))}return!1},
m0(a){var s,r,q=this
if(a instanceof A.bI){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.O(a)
return 2}},
$iai:1}
A.bI.prototype={
gv(a){return new A.ch(this.a(),this.$ti.i("ch<1>"))}}
A.bn.prototype={
t(a){return A.y(this.a)},
$iat:1,
gc6(){return this.b}}
A.pC.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fJ(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ah(p)
q=A.cZ(p)
l=r
o=q
n=A.zT(l,o)
l=new A.bn(l,o)
m.b.by(l)
return}m.b.fJ(s)}},
$S:0}
A.pF.prototype={
$2(a,b){var s,r,q=this
A.fK(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.by(new A.bn(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.by(new A.bn(r,s))}},
$S:136}
A.pE.prototype={
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
J.e9(q,l)}k.c.cP(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.by(new A.bn(q,o))}},
$S(){return this.d.i("az(0)")}}
A.mB.prototype={
el(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.j("Future already completed"))
s.cM(A.Iu(a,b))},
hL(a){return this.el(a,null)}}
A.ji.prototype={
ek(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.a(A.j("Future already completed"))
s.dW(r.i("1/").a(a))}}
A.dZ.prototype={
o7(a){if((this.c&15)!==6)return!0
return this.b.b.eW(t.bl.a(this.d),a.a,t.y,t.K)},
nJ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.pf(q,m,a.b,o,n,t.l)
else p=l.eW(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ah(s))){if((r.c&1)!==0)throw A.a(A.o("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.o("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
eY(a,b,c){var s,r,q=this.$ti
q.S(c).i("1/(2)").a(a)
s=$.ar
if(s===B.C){if(!t.nW.b(b)&&!t.h_.b(b))throw A.a(A.a7(b,"onError",u.c))}else{c.i("@<0/>").S(q.c).i("1(2)").a(a)
b=A.D8(b,s)}r=new A.as(s,c.i("as<0>"))
this.cL(new A.dZ(r,3,a,b,q.i("@<1>").S(c).i("dZ<1,2>")))
return r},
hr(a,b,c){var s,r=this.$ti
r.S(c).i("1/(2)").a(a)
s=new A.as($.ar,c.i("as<0>"))
this.cL(new A.dZ(s,19,a,b,r.i("@<1>").S(c).i("dZ<1,2>")))
return s},
lF(a){this.a=this.a&1|16
this.c=a},
cO(a){this.a=a.a&30|this.a&1
this.c=a.c},
cL(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cL(a)
return}r.cO(s)}A.nv(null,null,r.b,t.O.a(new A.vC(r,a)))}},
h9(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.h9(a)
return}m.cO(n)}l.a=m.cX(a)
A.nv(null,null,m.b,t.O.a(new A.vH(l,m)))}},
cd(){var s=t.F.a(this.c)
this.c=null
return this.cX(s)},
cX(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fJ(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aT<1>").b(a))A.vF(a,r,!0)
else{s=r.cd()
q.c.a(a)
r.a=8
r.c=a
A.fA(r,s)}},
cP(a){var s,r=this
r.$ti.c.a(a)
s=r.cd()
r.a=8
r.c=a
A.fA(r,s)},
ks(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.cd()
q.cO(a)
A.fA(q,r)},
by(a){var s=this.cd()
this.lF(a)
A.fA(this,s)},
dW(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aT<1>").b(a)){this.fB(a)
return}this.kc(a)},
kc(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nv(null,null,s.b,t.O.a(new A.vE(s,a)))},
fB(a){A.vF(this.$ti.i("aT<1>").a(a),this,!1)
return},
cM(a){this.a^=2
A.nv(null,null,this.b,t.O.a(new A.vD(this,a)))},
$iaT:1}
A.vC.prototype={
$0(){A.fA(this.a,this.b)},
$S:0}
A.vH.prototype={
$0(){A.fA(this.b,this.a.a)},
$S:0}
A.vG.prototype={
$0(){A.vF(this.a.a,this.b,!0)},
$S:0}
A.vE.prototype={
$0(){this.a.cP(this.b)},
$S:0}
A.vD.prototype={
$0(){this.a.by(this.b)},
$S:0}
A.vK.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pe(t.pF.a(q.d),t.z)}catch(p){s=A.ah(p)
r=A.cZ(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nY(q)
n=k.a
n.c=new A.bn(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.eY(new A.vL(l,m),new A.vM(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.vL.prototype={
$1(a){this.a.ks(this.b)},
$S:19}
A.vM.prototype={
$2(a,b){A.fK(a)
t.l.a(b)
this.a.by(new A.bn(a,b))},
$S:107}
A.vJ.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eW(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ah(l)
r=A.cZ(l)
q=s
p=r
if(p==null)p=A.nY(q)
o=this.a
o.c=new A.bn(q,p)
o.b=!0}},
$S:0}
A.vI.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.o7(s)&&p.a.e!=null){p.c=p.a.nJ(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.cZ(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nY(p)
m=l.b
m.c=new A.bn(p,n)
p=m}p.b=!0}},
$S:0}
A.my.prototype={}
A.n5.prototype={}
A.jQ.prototype={$iC7:1}
A.mZ.prototype={
pg(a){var s,r,q
t.O.a(a)
try{if(B.C===$.ar){a.$0()
return}A.Dd(null,null,this,a,t.H)}catch(q){s=A.ah(q)
r=A.cZ(q)
A.A5(A.fK(s),t.l.a(r))}},
hJ(a){return new A.wg(this,t.O.a(a))},
pe(a,b){b.i("0()").a(a)
if($.ar===B.C)return a.$0()
return A.Dd(null,null,this,a,b)},
eW(a,b,c,d){c.i("@<0>").S(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.C)return a.$1(b)
return A.Ja(null,null,this,a,b,c,d)},
pf(a,b,c,d,e,f){d.i("@<0>").S(e).S(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.C)return a.$2(b,c)
return A.J9(null,null,this,a,b,c,d,e,f)},
iK(a,b,c,d){return b.i("@<0>").S(c).S(d).i("1(2,3)").a(a)}}
A.wg.prototype={
$0(){return this.a.pg(this.b)},
$S:0}
A.xK.prototype={
$0(){A.Fb(this.a,this.b)},
$S:0}
A.jn.prototype={
gu(a){return this.a},
gR(a){return this.a===0},
ga5(a){return this.a!==0},
ga3(){return new A.fB(this,this.$ti.i("fB<1>"))},
gam(){var s=this.$ti
return A.lk(new A.fB(this,s.i("fB<1>")),new A.vO(this),s.c,s.y[1])},
K(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ky(a)},
ky(a){var s=this.d
if(s==null)return!1
return this.bz(this.fI(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.C9(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.C9(q,b)
return r}else return this.kQ(b)},
kQ(a){var s,r,q=this.d
if(q==null)return null
s=this.fI(q,a)
r=this.bz(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fG(s==null?m.b=A.zu():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fG(r==null?m.c=A.zu():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.zu()
p=A.nE(b)&1073741823
o=q[p]
if(o==null){A.zv(q,p,[b,c]);++m.a
m.e=null}else{n=m.bz(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aK(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fH()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.a(A.aD(m))}},
fH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
fG(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.zv(a,b,c)},
fI(a,b){return a[A.nE(b)&1073741823]}}
A.vO.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.jp.prototype={
bz(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fB.prototype={
gu(a){return this.a.a},
gR(a){return this.a.a===0},
ga5(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.jo(s,s.fH(),this.$ti.i("jo<1>"))},
p(a,b){return this.a.K(b)}}
A.jo.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.aD(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iai:1}
A.cy.prototype={
h6(){return new A.cy(A.v(this).i("cy<1>"))},
gv(a){var s=this,r=new A.fD(s,s.r,A.v(s).i("fD<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gR(a){return this.a===0},
ga5(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.kx(b)},
kx(a){var s=this.d
if(s==null)return!1
return this.bz(s[this.e_(a)],a)>=0},
ga1(a){var s=this.e
if(s==null)throw A.a(A.j("No elements"))
return A.v(this).c.a(s.a)},
k(a,b){var s,r,q=this
A.v(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fF(s==null?q.b=A.zw():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fF(r==null?q.c=A.zw():r,b)}else return q.k9(b)},
k9(a){var s,r,q,p=this
A.v(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.zw()
r=p.e_(a)
q=s[r]
if(q==null)s[r]=[p.dZ(a)]
else{if(p.bz(q,a)>=0)return!1
q.push(p.dZ(a))}return!0},
a9(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.hc(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.hc(s.c,b)
else return s.lw(b)},
lw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.e_(a)
r=n[s]
q=o.bz(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hw(p)
return!0},
kO(a,b){var s,r,q,p,o,n=this,m=A.v(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.a(A.aD(n))
if(!0===o)n.a9(0,r)}},
P(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ea()}},
fF(a,b){A.v(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dZ(b)
return!0},
hc(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hw(s)
delete a[b]
return!0},
ea(){this.r=this.r+1&1073741823},
dZ(a){var s,r=this,q=new A.mP(A.v(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ea()
return q},
hw(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ea()},
e_(a){return J.aN(a)&1073741823},
bz(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iBe:1}
A.mP.prototype={}
A.fD.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.aD(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iai:1}
A.r1.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:101}
A.a3.prototype={
gv(a){return new A.al(a,this.gu(a),A.cl(a).i("al<a3.E>"))},
ab(a,b){return this.h(a,b)},
gR(a){return this.gu(a)===0},
ga5(a){return!this.gR(a)},
ga1(a){if(this.gu(a)===0)throw A.a(A.cM())
return this.h(a,0)},
p(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.aa(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.a(A.aD(a))}return!1},
a2(a,b){var s,r
A.cl(a).i("l(a3.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.a(A.aD(a))}return!0},
M(a,b){var s,r
A.cl(a).i("l(a3.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.a(A.aD(a))}return!1},
W(a,b){var s
if(this.gu(a)===0)return""
s=A.zo("",a,b)
return s.charCodeAt(0)==0?s:s},
f3(a,b){return new A.dY(a,b.i("dY<0>"))},
bu(a,b,c){var s=A.cl(a)
return new A.H(a,s.S(c).i("1(a3.E)").a(b),s.i("@<a3.E>").S(c).i("H<1,2>"))},
k(a,b){var s
A.cl(a).i("a3.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.l(a,s,b)},
d3(a,b){return new A.b9(a,A.cl(a).i("@<a3.E>").S(b).i("b9<1,2>"))},
nD(a,b,c,d){var s
A.cl(a).i("a3.E?").a(d)
A.fj(b,c,this.gu(a))
for(s=b;s<c;++s)this.l(a,s,d)},
t(a){return A.z8(a,"[","]")},
$iV:1,
$ir:1,
$iJ:1}
A.ag.prototype={
aK(a,b){var s,r,q,p=A.v(this)
p.i("~(ag.K,ag.V)").a(b)
for(s=this.ga3(),s=s.gv(s),p=p.i("ag.V");s.m();){r=s.gq()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gN(){return this.ga3().bu(0,new A.r3(this),A.v(this).i("P<ag.K,ag.V>"))},
bv(a,b,c,d){var s,r,q,p,o,n=A.v(this)
n.S(c).S(d).i("P<1,2>(ag.K,ag.V)").a(b)
s=A.n(c,d)
for(r=this.ga3(),r=r.gv(r),n=n.i("ag.V");r.m();){q=r.gq()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
m2(a){var s,r
for(s=J.O(A.v(this).i("r<P<ag.K,ag.V>>").a(a));s.m();){r=s.gq()
this.l(0,r.a,r.b)}},
K(a){return this.ga3().p(0,a)},
gu(a){var s=this.ga3()
return s.gu(s)},
gR(a){var s=this.ga3()
return s.gR(s)},
ga5(a){var s=this.ga3()
return s.ga5(s)},
gam(){return new A.jq(this,A.v(this).i("jq<ag.K,ag.V>"))},
t(a){return A.zf(this)},
$iY:1}
A.r3.prototype={
$1(a){var s=this.a,r=A.v(s)
r.i("ag.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("ag.V").a(s)
return new A.P(a,s,r.i("P<ag.K,ag.V>"))},
$S(){return A.v(this.a).i("P<ag.K,ag.V>(ag.K)")}}
A.r4.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:33}
A.jq.prototype={
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
return new A.jr(r.gv(r),s,this.$ti.i("jr<1,2>"))}}
A.jr.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gq())
return!0}s.c=null
return!1},
gq(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.jJ.prototype={
l(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
throw A.a(A.bu("Cannot modify unmodifiable map"))}}
A.hj.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.v(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
K(a){return this.a.K(a)},
aK(a,b){this.a.aK(0,A.v(this).i("~(1,2)").a(b))},
gR(a){var s=this.a
return s.gR(s)},
ga5(a){var s=this.a
return s.ga5(s)},
gu(a){var s=this.a
return s.gu(s)},
ga3(){return this.a.ga3()},
t(a){return this.a.t(0)},
gam(){return this.a.gam()},
gN(){return this.a.gN()},
bv(a,b,c,d){return this.a.bv(0,A.v(this).S(c).S(d).i("P<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.eC.prototype={}
A.dg.prototype={
gR(a){return this.gu(this)===0},
ga5(a){return this.gu(this)!==0},
L(a,b){var s
for(s=J.O(A.v(this).i("r<1>").a(b));s.m();)this.k(0,s.gq())},
bD(a){var s,r,q=this.b9(0)
for(s=this.gv(this);s.m();){r=s.gq()
if(a.p(0,r))q.a9(0,r)}return q},
t(a){return A.z8(this,"{","}")},
a2(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gq()))return!1
return!0},
W(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.c5(q.gq())
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
if(!s.m())throw A.a(A.cM())
return s.gq()},
ab(a,b){var s,r
A.lN(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.a(A.qx(b,b-r,this,"index"))},
$iV:1,
$ir:1,
$idR:1}
A.jD.prototype={
bD(a){var s,r,q,p=this,o=p.h6()
for(s=A.fE(p,p.r,A.v(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.p(0,q))o.k(0,q)}return o},
b9(a){var s=this.h6()
s.L(0,this)
return s}}
A.nb.prototype={
k(a,b){this.$ti.c.a(b)
return A.Hp()}}
A.hC.prototype={
p(a,b){return this.a.p(0,b)},
gu(a){return this.a.a},
gv(a){var s=this.a
return A.fE(s,s.r,A.v(s).c)},
b9(a){return this.a.b9(0)}}
A.hL.prototype={}
A.jK.prototype={}
A.mN.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lo(b):s}},
gu(a){return this.b==null?this.c.a:this.bK().length},
gR(a){return this.gu(0)===0},
ga5(a){return this.gu(0)>0},
ga3(){if(this.b==null){var s=this.c
return new A.ae(s,A.v(s).i("ae<1>"))}return new A.mO(this)},
gam(){var s,r=this
if(r.b==null){s=r.c
return new A.ao(s,A.v(s).i("ao<2>"))}return A.lk(r.bK(),new A.vQ(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.w(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.K(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lT().l(0,b,c)},
K(a){if(this.b==null)return this.c.K(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aK(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aK(0,b)
s=o.bK()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.x0(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.aD(o))}},
bK(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
lT(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bK()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.P(r)
n.a=n.b=null
return n.c=s},
lo(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.x0(this.a[a])
return this.b[a]=s}}
A.vQ.prototype={
$1(a){return this.a.h(0,A.w(a))},
$S:43}
A.mO.prototype={
gu(a){return this.a.gu(0)},
ab(a,b){var s=this.a
if(s.b==null)s=s.ga3().ab(0,b)
else{s=s.bK()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.ga3()
s=s.gv(s)}else{s=s.bK()
s=new J.eZ(s,s.length,A.C(s).i("eZ<1>"))}return s},
p(a,b){return this.a.K(b)}}
A.wp.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:53}
A.wo.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:53}
A.ki.prototype={
n8(a,b){t.L.a(a)
if(b===!0)return B.eB.bB(a)
else return B.eA.bB(a)}}
A.wk.prototype={
bB(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.fj(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.d(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.a(A.M("Invalid value in input: "+o,null,null))
return this.kA(a,0,r)}}return A.zp(a,0,r)},
kA(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.d(a,q)
o=a[q]
p+=A.aA((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.kj.prototype={}
A.kp.prototype={
ob(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fj(a4,a5,a2)
s=$.E3()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.yd(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.yd(a3.charCodeAt(g))
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
continue}}throw A.a(A.M("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.J(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.AI(a3,m,a5,n,l,r)
else{b=B.d.O(r-1,4)+1
if(b===1)throw A.a(A.M(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.c1(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.AI(a3,m,a5,n,l,a)
else{b=B.d.O(a,4)
if(b===1)throw A.a(A.M(a1,a3,a5))
if(b>1)a3=B.c.c1(a3,a5,a5,b===2?"==":"=")}return a3}}
A.oE.prototype={}
A.eo.prototype={}
A.kA.prototype={}
A.kM.prototype={}
A.iA.prototype={
t(a){var s=A.kN(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lh.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.lg.prototype={
ak(a,b){var s=A.IX(a,this.gnb().a)
return s},
a0(a,b){var s=A.H3(a,this.gnw().b,null)
return s},
gnw(){return B.jQ},
gnb(){return B.jP}}
A.qT.prototype={}
A.qS.prototype={}
A.vS.prototype={
iY(a){var s,r,q,p,o,n,m=a.length
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
dX(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.lh(a,null))}B.a.k(s,a)},
dM(a){var s,r,q,p,o=this
if(o.iX(a))return
o.dX(a)
try{s=o.b.$1(a)
if(!o.iX(s)){q=A.Ba(a,null,o.gh8())
throw A.a(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ah(p)
q=A.Ba(a,r,o.gh8())
throw A.a(q)}},
iX(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.iY(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dX(a)
q.pw(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dX(a)
r=q.px(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
pw(a){var s,r,q=this.c
q.a+="["
s=J.aQ(a)
if(s.ga5(a)){this.dM(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.dM(s.h(a,r))}}q.a+="]"},
px(a){var s,r,q,p,o,n,m=this,l={}
if(a.gR(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.d9(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aK(0,new A.vT(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.iY(A.w(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.dM(r[n])}p.a+="}"
return!0}}
A.vT.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:33}
A.vR.prototype={
gh8(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.md.prototype={}
A.uU.prototype={
bB(a){var s,r,q,p=a.length,o=A.fj(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.wq(s)
if(r.kN(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.d(a,q)
r.eh()}return B.a4.aj(s,0,r.b)}}
A.wq.prototype={
eh(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.aW(q)
s=q.length
if(!(p<s))return A.d(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.d(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.d(q,p)
q[p]=189},
m_(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.aW(r)
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
return!0}else{n.eh()
return!1}},
kN(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.d(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.d(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.aW(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.d(a,m)
if(k.m_(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eh()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.aW(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.aW(s)
if(!(m<q))return A.d(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.d(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.d(s,m)
s[m]=n&63|128}}}return o}}
A.uT.prototype={
bB(a){return new A.wn(this.a).kz(t.L.a(a),0,null,!0)}}
A.wn.prototype={
kz(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.fj(b,c,J.cE(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.HG(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.HF(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.e1(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.HH(o)
l.b=0
throw A.a(A.M(m,a,p+l.c))}return n},
e1(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.ad(b+c,2)
r=q.e1(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.e1(a,s,c,d)}return q.na(a,b,c,d)},
na(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bE(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.zp(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aA(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.f3.prototype={
gaz(){return A.Bp(this)},
gaX(){return A.Bq(this)},
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
t(a){var s=this,r=A.ER(A.G_(s)),q=A.kC(A.FY(s)),p=A.kC(A.Bp(s)),o=A.kC(A.Bq(s)),n=A.kC(A.FX(s)),m=A.kC(A.FZ(s)),l=A.AQ(A.FW(s)),k=s.b,j=k===0?"":A.AQ(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibp:1}
A.dy.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.dy&&this.a===b.a},
gU(a){return B.d.gU(this.a)},
I(a,b){return B.d.I(this.a,t.yb.a(b).a)},
t(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.ad(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.ad(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bF(B.d.t(o%1e6),6,"0")},
$ibp:1}
A.mG.prototype={
t(a){return this.B()},
$iD:1}
A.at.prototype={
gc6(){return A.FV(this)}}
A.kk.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kN(s)
return"Assertion failed"}}
A.dU.prototype={}
A.cG.prototype={
ge5(){return"Invalid argument"+(!this.a?"(s)":"")},
ge4(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.ge5()+q+o
if(!s.a)return n
return n+s.ge4()+": "+A.kN(s.geH())},
geH(){return this.b}}
A.hq.prototype={
geH(){return A.zF(this.b)},
ge5(){return"RangeError"},
ge4(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.l7.prototype={
geH(){return A.i(this.b)},
ge5(){return"RangeError"},
ge4(){if(A.i(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.jb.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.m8.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.hx.prototype={
t(a){return"Bad state: "+this.a}}
A.kx.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kN(s)+"."}}
A.ly.prototype={
t(a){return"Out of Memory"},
gc6(){return null},
$iat:1}
A.j6.prototype={
t(a){return"Stack Overflow"},
gc6(){return null},
$iat:1}
A.vA.prototype={
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
k=""}return g+l+B.c.J(e,i,j)+k+"\n"+B.c.a6(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.r.prototype={
d3(a,b){return A.EG(this,A.v(this).i("r.E"),b)},
bu(a,b,c){var s=A.v(this)
return A.lk(this,s.S(c).i("1(r.E)").a(b),s.i("r.E"),c)},
dL(a,b){var s=A.v(this)
return new A.I(this,s.i("l(r.E)").a(b),s.i("I<r.E>"))},
f3(a,b){return new A.dY(this,b.i("dY<0>"))},
p(a,b){var s
for(s=this.gv(this);s.m();)if(J.aa(s.gq(),b))return!0
return!1},
b6(a,b,c,d){var s,r
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
s=J.c5(q.gq())
if(!q.m())return s
r=b.gR(b)
if(r){r=s
do r+=J.c5(q.gq())
while(q.m())}else{r=s
do r=r+A.y(b)+J.c5(q.gq())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.v(this).i("l(r.E)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gq()))return!0
return!1},
c2(a,b){var s=A.K(this,A.v(this).i("r.E"))
return s},
bH(a){return this.c2(0,!0)},
gu(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gR(a){return!this.gv(this).m()},
ga5(a){return!this.gR(this)},
ga1(a){var s=this.gv(this)
if(!s.m())throw A.a(A.cM())
return s.gq()},
gbj(a){var s,r=this.gv(this)
if(!r.m())throw A.a(A.cM())
s=r.gq()
if(r.m())throw A.a(A.B3())
return s},
b5(a,b,c){var s,r=A.v(this)
r.i("l(r.E)").a(b)
r.i("r.E()?").a(c)
for(r=this.gv(this);r.m();){s=r.gq()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.a(A.cM())},
ap(a,b){return this.b5(0,b,null)},
ab(a,b){var s,r
A.lN(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.a(A.qx(b,b-r,this,"index"))},
t(a){return A.Fw(this,"(",")")}}
A.P.prototype={
t(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.az.prototype={
gU(a){return A.L.prototype.gU.call(this,0)},
t(a){return"null"}}
A.L.prototype={$iL:1,
aa(a,b){return this===b},
gU(a){return A.iS(this)},
t(a){return"Instance of '"+A.lI(this)+"'"},
gae(a){return A.Aj(this)},
toString(){return this.t(this)}}
A.n8.prototype={
t(a){return""},
$idi:1}
A.uv.prototype={
gnu(){var s,r=this.b
if(r==null)r=$.t7.$0()
s=r-this.a
if($.At()===1e6)return s
return s*1000}}
A.bE.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iGr:1}
A.uS.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.w(b)
s=B.c.bE(b,"=")
if(s===-1){if(b!=="")a.l(0,A.zB(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.J(b,0,s)
q=B.c.aQ(b,s+1)
p=this.a
a.l(0,A.zB(r,0,r.length,p,!0),A.zB(q,0,q.length,p,!0))}return a},
$S:71}
A.uR.prototype={
$2(a,b){throw A.a(A.M("Illegal IPv6 address, "+a,this.a,b))},
$S:77}
A.jL.prototype={
ghp(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.c.gU(r.ghp())
r.y!==$&&A.nF()
r.y=s
q=s}return q},
gaZ(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.BQ(s==null?"":s)
r.z!==$&&A.nF()
q=r.z=new A.eC(s,t.hL)}return q},
giU(){return this.b},
geF(){var s=this.c
if(s==null)return""
if(B.c.V(s,"[")&&!B.c.au(s,"v",1))return B.c.J(s,1,s.length-1)
return s},
geM(){var s=this.d
return s==null?A.Ck(this.a):s},
geP(){var s=this.f
return s==null?"":s},
gig(){var s=this.r
return s==null?"":s},
gik(){return this.c!=null},
gim(){return this.f!=null},
gil(){return this.r!=null},
t(a){return this.ghp()},
aa(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gf9())if(p.c!=null===b.gik())if(p.b===b.giU())if(p.geF()===b.geF())if(p.geM()===b.geM())if(p.e===b.giC()){r=p.f
q=r==null
if(!q===b.gim()){if(q)r=""
if(r===b.geP()){r=p.r
q=r==null
if(!q===b.gil()){s=q?"":r
s=s===b.gig()}}}}return s},
$imb:1,
gf9(){return this.a},
giC(){return this.e}}
A.uQ.prototype={
giT(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.c.ds(s,"?",m)
q=s.length
if(r>=0){p=A.jM(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.mC("data","",n,n,A.jM(s,m,q,128,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.n2.prototype={
gik(){return this.c>0},
gim(){return this.f<this.r},
gil(){return this.r<this.a.length},
gf9(){var s=this.w
return s==null?this.w=this.kv():s},
kv(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.V(r.a,"http"))return"http"
if(q===5&&B.c.V(r.a,"https"))return"https"
if(s&&B.c.V(r.a,"file"))return"file"
if(q===7&&B.c.V(r.a,"package"))return"package"
return B.c.J(r.a,0,q)},
giU(){var s=this.c,r=this.b+3
return s>r?B.c.J(this.a,r,s-1):""},
geF(){var s=this.c
return s>0?B.c.J(this.a,s,this.d):""},
geM(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.DB(B.c.J(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.V(r.a,"http"))return 80
if(s===5&&B.c.V(r.a,"https"))return 443
return 0},
giC(){return B.c.J(this.a,this.e,this.f)},
geP(){var s=this.f,r=this.r
return s<r?B.c.J(this.a,s+1,r):""},
gig(){var s=this.r,r=this.a
return s<r.length?B.c.aQ(r,s+1):""},
gaZ(){if(this.f>=this.r)return B.aQ
return new A.eC(A.BQ(this.geP()),t.hL)},
gU(a){var s=this.x
return s==null?this.x=B.c.gU(this.a):s},
aa(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.t(0)},
t(a){return this.a},
$imb:1}
A.mC.prototype={}
A.rA.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.yO.prototype={
$1(a){return this.a.ek(this.b.i("0/?").a(a))},
$S:20}
A.yP.prototype={
$1(a){if(a==null)return this.a.hL(new A.rA(a===undefined))
return this.a.hL(a)},
$S:20}
A.y6.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.D_(a))return a
s=this.a
a.toString
if(s.K(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.f(A.b_(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e7(!0,"isUtc",t.y)
return new A.f3(r,0,!0)}if(a instanceof RegExp)throw A.a(A.o("structured clone of RegExp",null))
if(a instanceof Promise)return A.av(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cY(n),p=s.gv(n);p.m();)m.push(A.i2(p.gq()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.i(a.length)
for(s=J.aQ(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:81}
A.mM.prototype={
aY(a){if(a<=0||a>4294967296)throw A.a(A.Bt(u.w+a))
return Math.random()*a>>>0},
aB(){return Math.random()},
$izl:1}
A.eL.prototype={
c9(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.bo()
l.bo()
l.bo()
l.bo()},
bo(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.ad(o-n+(q-p)+(m-r),4294967296)>>>0},
aY(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.a(A.Bt(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bo()
return(p.a&s)>>>0}do{p.bo()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aB(){var s,r=this
r.bo()
s=r.a
r.bo()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$izl:1}
A.kH.prototype={
B(){return"DiagnosticSeverity."+this.b}}
A.ec.prototype={
C(){var s=this
return A.E(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.ub.prototype={
$1(a){return B.c.bF(B.d.f_(A.i(a),16),8,"0")},
$S:82}
A.me.prototype={}
A.ri.prototype={
oO(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.C(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a0.E>")),q=o.a,r=r.i("a0.E");s.m();){p=s.d
q.aL(p==null?r.a(p):p)}}}
A.lo.prototype={}
A.rt.prototype={}
A.rk.prototype={
dv(a0,a1){var s=0,r=A.aL(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dv=A.aM(function(a3,a4){if(a3===1)return A.aI(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.DP(b)
if(a.length!==0)throw A.a(A.M(B.a.bu(a,new A.rl(),t.N).W(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.a(B.i_)
k=t.N
j=A.a_(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.u)(m),++i)j.L(0,m[i].c.gam())
if(j.a>16384)throw A.a(B.hT)
p=A.n(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gam(),g=g.gv(g)
case 6:if(!g.m()){s=7
break}o=g.gq()
if(p.K(o)){s=6
break}s=8
return A.a6(j.$1(o),$async$dv)
case 8:f=a4
e=f.length
if(e>67108864)throw A.a(A.M("model package payload exceeds limit: "+A.y(o),null,null))
d=p
if(new A.ao(d,A.v(d).i("ao<2>")).b6(0,0,new A.rm(),k)+e>268435456)throw A.a(B.i2)
J.b7(p,o,new Uint8Array(A.S(f)))
if(l)try{e=J.b1(p,o)
e.toString
A.Dt(e)}catch(a2){b=A.ah(a2)
if(b instanceof A.lL){n=b
throw A.a(A.M("model package payload is not valid QMSH: "+A.y(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.u)(m),++i
s=3
break
case 5:if(A.Bj(b,p)!==b.c)throw A.a(B.h3)
q=new A.me(b,p)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dv,r)}}
A.rl.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.rm.prototype={
$2(a,b){return A.i(a)+t.uo.a(b).length},
$S:95}
A.rn.prototype={
A(){var s,r,q,p,o,n,m=this,l=A.c([],t.s),k=A.iX("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.k(l,"assetId must be kebab-case")
k=A.iX("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.k(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.k(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.k(l,"parts must be non-empty")
s=m.w
if(A.hi(s,A.C(s).c).a!==s.length)B.a.k(l,"lods must be unique")
if(!B.a.p(s,"LOD0"))B.a.k(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.M(s,new A.rq())
else s=!1
if(s)B.a.k(l,"combinedBounds must contain six finite values")
for(s=m.y.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
if(q.length!==0){r=r.b
p=J.aQ(r)
r=p.gu(r)!==16||p.M(r,new A.rr())}else r=!0
if(r)B.a.k(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.u)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.k(l,"part material slot is outside materials")
q=n.c
if(q.gR(q))B.a.k(l,"part "+n.a+" must declare payload files")
for(q=q.gam(),q=q.gv(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.IE(q.gq()))B.a.k(l,p)}return l},
iQ(a){var s,r,q,p=this,o=A.n(t.N,t.z)
o.l(0,"schema","pixeldart-model-package-v1")
o.l(0,"assetId",p.b)
if(a)o.l(0,"packageHash",p.c)
o.l(0,"sourceFormat",p.d)
s=p.e
r=A.C(s)
q=r.i("H<1,Y<e,@>>")
s=A.K(new A.H(s,r.i("Y<e,@>(1)").a(new A.rp()),q),q.i("a0.E"))
o.l(0,"parts",s)
o.l(0,"materials",p.f)
o.l(0,"textures",p.r)
o.l(0,"lods",p.w)
o.l(0,"combinedBounds",p.x)
o.l(0,"sockets",p.y)
o.l(0,"provenance",p.z)
return o},
C(){return this.iQ(!0)}}
A.ro.prototype={
$2(a,b){return new A.P(J.c5(a),J.c5(b),t.q)},
$S:47}
A.rq.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.rr.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.rp.prototype={
$1(a){return t.aw.a(a).C()},
$S:122}
A.fe.prototype={
C(){return A.E(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gE(){return this.a}}
A.rs.prototype={
$2(a,b){return new A.P(J.c5(a),J.c5(b),t.q)},
$S:47}
A.xx.prototype={
$1(a){A.w(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.xR.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.xA.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.xP.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yZ.prototype={
$2(a,b){B.a.k(this.a,new A.ec(a,B.cD,"model-package",b,"rebuild the deterministic model package"))},
$S:37}
A.z_.prototype={
$2(a,b){B.a.k(this.a,new A.ec(a,B.cD,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:37}
A.td.prototype={
A(){var s,r=this
if(B.a.M(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.te()))throw A.a(B.iK)
s=r.y
if(!isFinite(s)||s<1)throw A.a(B.ht)}}
A.te.prototype={
$1(a){return A.i(a)<=0},
$S:22}
A.fi.prototype={
B(){return"QualityProfileKind."+this.b}}
A.dO.prototype={
A(){var s="installedFeatures",r=this.b,q=r.bD(B.nD)
if(q.a!==0)throw A.a(A.a7(q,s,"contains unknown pipeline features"))
if(this.a===B.bL&&r.ga5(r))throw A.a(A.a7(r,s,"safe profiles cannot install optional features"))}}
A.h4.prototype={
B(){return"CoordinatedTransitionState."+this.b}}
A.lF.prototype={}
A.oS.prototype={
cg(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.a(A.j("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.f(A.j("configuration state is not initialized"))
if(p.c!=null)A.f(A.j("a configuration transition is already open"))
a2.A()
n=A.iM(a2)
m=p.d
l=p.b
if(l==null)A.f(A.j("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bD(h)
f=h.bD(j)
j=n.a
h=l.a
e=j.bD(h)
d=h.bD(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.oV(m,a2,n,new A.oT(A.fo(g,k),A.fo(f,k),A.fo(e,k),A.fo(d,k),c,b,o.z!==a2.z),B.cB)
p.c=a
s=a
try{r=a1.b.dC(s.c)
q=new A.lF(s,r,B.b9)
a1.c=q
return q}catch(a0){p.hB(s)
throw a0}},
ci(a){var s,r,q,p=this
p.fM(a)
s=p.a
r=a.a
s.fN(r)
q=s.d
if(r.a!==q)A.f(A.j("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.ft
s.c=null
p.b.ci(a.b)
a.c=B.fB
p.c=null},
fM(a){if(this.c!==a||a.c!==B.b9)throw A.a(A.j("coordinated transition is not open"))}}
A.h_.prototype={
B(){return"ConfigurationTransactionState."+this.b}}
A.oT.prototype={}
A.oV.prototype={}
A.oU.prototype={
hB(a){this.fN(a)
a.e=B.fu
this.c=null},
fN(a){if(this.c!==a||a.e!==B.cB)throw A.a(A.j("configuration transition is not open"))}}
A.lE.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.E(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.N(n,A.v(n).i("N<1,2>")).gv(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.a(A.o("PostProcessState."+l+" must be >= 0: "+A.y(k),i))}n=j.ay
if(n<1||n>8)throw A.a(A.o("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.a(A.o("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),i))
if(r>1)throw A.a(A.o("PostProcessState.surfaceWetness must be in [0, 1]: "+A.y(r),i))
if(q>1)throw A.a(A.o("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.y(q),i))
if(p>1)throw A.a(A.o("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.y(p),i))
if(o>1)throw A.a(A.o("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(o),i))}}
A.ib.prototype={
giu(){var s,r=this,q=r.x
if(q===$){s=r.b.it()
r.x!==$&&A.nF()
r.x=s
q=s}return q},
A(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
if(!g.gT(0))throw A.a(A.o("CameraView.eye must be finite: "+g.t(0),h))
g=i.e
if(!g.gT(0)||g.gbg()<1e-12)throw A.a(A.o("CameraView.forward must be finite and nonzero: "+g.t(0),h))
g=i.f
if(isFinite(g)){s=i.r
s=!isFinite(s)||g<=0||s<=g}else s=!0
if(s)throw A.a(A.o("CameraView requires 0 < near < far, got "+A.y(g)+"/"+i.r,h))
g=i.w
if(!isFinite(g)||g<=0)throw A.a(A.o("CameraView.aspect must be finite and > 0: "+A.y(g),h))
g=i.a
if(!g.gT(0)||!i.b.gT(0)||!i.c.gT(0))throw A.a(A.o("CameraView matrices must be finite",h))
for(s=i.c.a,r=s.length,g=i.b.a6(0,g).a,q=g.length,p=0,o=-1,n=0;n<16;++n){if(!(n<r))return A.d(s,n)
m=s[n]
if(!(n<q))return A.d(g,n)
l=g[n]
k=Math.abs(m-l)/(1+Math.abs(l))
if(k>p){o=n
p=k}}if(p>0.0001){m=B.b.ph(p,2)
l=B.d.ad(o,4)
j=B.d.O(o,4)
if(!(o>=0&&o<r))return A.d(s,o)
s=s[o]
if(!(o<q))return A.d(g,o)
throw A.a(A.o("CameraView.viewProjection must equal projection * view. Worst relative mismatch "+m+" at column "+l+" row "+j+" (got "+A.y(s)+", expected "+A.y(g[o])+"). Prefer CameraView.look/lookAt/fromMatrices, which derive it.",h))}}}
A.up.prototype={}
A.kV.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.gT(0)||!h.b.gT(0)||!h.fx.gT(0)||!h.r.gT(0)||!h.dx.gT(0))throw A.a(A.o("FrameEnvironment colors must be finite",g))
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
if(r)throw A.a(A.o("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(h.d),g))
s=h.fy
if(!isFinite(s)||s<0)throw A.a(A.o("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),g))
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
if(!k.k(0,p))throw A.a(A.o("FrameEnvironment.volumetricSources contains duplicate id: "+p,g))}r=h.w
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
if(r)throw A.a(A.o("invalid volumetric medium controls",g))
i=A.a_(s)
for(s=h.k3,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){j=s[o]
q=j.a
p=!0
if(B.c.aP(q).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){p=j.d
p=!isFinite(p)||m<=0||p<0||p>1}}}if(p)A.f(A.o("thermal source is invalid",g))
if(!i.k(0,q))throw A.a(A.o("FrameEnvironment.thermalSources contains duplicate id: "+q,g))}}}
A.kW.prototype={}
A.dP.prototype={
aa(a,b){if(b==null)return!1
return J.eY(b)===A.Aj(this)&&b instanceof A.dP&&this.a===b.a&&this.b===b.b},
gU(a){return A.cP(A.Aj(this),this.a,this.b,B.h,B.h,B.h)}}
A.bL.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bt.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c8.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.lz.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cK.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.f8.prototype={
B(){return"HandleRejection."+this.b}}
A.l4.prototype={
t(a){return"HandleException("+this.a.b+", "+this.b.t(0)+")"}}
A.aU.prototype={
gT(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
aa(a,b){if(b==null)return!1
return b instanceof A.aU&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.kJ.prototype={
A(){var s=this.a
if(!s.gT(0)||s.gbg()<1e-12)throw A.a(A.o("DirectionalLight.direction must be finite and nonzero: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.a(A.o("DirectionalLight.intensity must be >= 0: "+A.y(s),null))}}
A.lD.prototype={
gE(){return this.a}}
A.bO.prototype={
gE(){return this.a}}
A.yQ.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:203}
A.fS.prototype={
B(){return"AlphaMode."+this.b}}
A.iE.prototype={
B(){return"MaterialMapColorSpace."+this.b}}
A.bX.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.a(A.o("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.a(A.o("MaterialDefinition.emissiveStrength must be >= 0: "+A.y(s),k))
s=l.z
if(!isFinite(s)||s<0)throw A.a(A.o("MaterialDefinition.normalStrength must be >= 0: "+A.y(s),k))
A.lm("roughness",l.at)
A.lm("metallic",l.ax)
A.lm("occlusionStrength",1)
A.lm("clearcoatStrength",l.ch)
A.lm("clearcoatRoughness",l.CW)
if(!isFinite(0))throw A.a(A.o("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a5("uvScaleU",s),new A.a5("uvScaleV",r),new A.a5("uvOffsetU",0),new A.a5("uvOffsetV",0),new A.a5("tintR",l.d),new A.a5("tintG",l.e),new A.a5("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.a(A.o("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.a(A.o("MaterialDefinition uv scale must not be zero",k))
s=l.fy
if(!isFinite(s)||s<=0||s>1)throw A.a(A.o("MaterialDefinition.alphaCutoff must be in (0, 1]: "+A.y(s),k))}}
A.cT.prototype={
B(){return"VertexAttributeKind."+this.b}}
A.bc.prototype={}
A.jd.prototype={
A(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.a(A.o("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.a(A.o(k+m.a+'": attribute '+p.a.t(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.a(A.o(k+m.a+'": attribute '+p.a.t(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.C(s)
r=j.i("l(1)").a(new A.uV())
for(s=B.a.gv(s),j=new A.U(s,r,j.i("U<1>"));j.m();)if(s.gq().c!==4)throw A.a(A.o(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.uV.prototype={
$1(a){return t.qY.a(a).a===B.c8},
$S:23}
A.bY.prototype={
A(){var s,r,q,p,o,n=this,m=n.a
m.A()
s=n.b.length
m=m.b
if(B.d.O(s,m)!==0)throw A.a(A.o("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.lV()
r=n.c
if(r!=null){q=B.d.ba(s,m)
for(m=A.FE(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.a(A.o("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gT(0)&&m.b.gT(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.a(A.o("MeshData.localBounds must be a valid AABB",null))},
lV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.C(a4),a6=a5.i("l(1)")
a5=a5.i("I<1>")
s=new A.I(a4,a6.a(new A.rb()),a5)
if(!s.gv(0).m())return
r=new A.I(a4,a6.a(new A.rc()),a5)
if(r.gu(0)!==1)throw A.a(A.o("surface-v2 tangent data requires one normal slot",a2))
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
if(!B.a.a2(A.c([i,g,f,e,d,c,b],o),new A.rd()))throw A.a(A.o("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.a(A.o("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.a(A.o("surface-v2 tangent must be orthogonal to its normal: "+A.y(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.a(A.o("surface-v2 tangent handedness must be -1 or +1: "+A.y(b),a2))}}}
A.rb.prototype={
$1(a){return t.qY.a(a).a===B.c8},
$S:23}
A.rc.prototype={
$1(a){return t.qY.a(a).a===B.el},
$S:23}
A.rd.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.kD.prototype={$iGd:1}
A.rC.prototype={
A(){var s=this.a,r=s.a
if(!r.p(0,"sceneColor")||!r.p(0,"present"))throw A.a(A.o("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.rD()))throw A.a(A.o("resource plan contains an empty resource ID",null))
if(this.b!==r.p(0,"vhsOutput"))throw A.a(A.o("resource history does not match vhsOutput ownership",null))}}
A.rD.prototype={
$1(a){return A.w(a).length===0},
$S:3}
A.ht.prototype={
B(){return"ResourceAssemblyState."+this.b}}
A.lG.prototype={}
A.lR.prototype={
ir(a){var s=this
if(s.d)A.f(A.j("resource assembler is disposed"))
if(s.a!=null)throw A.a(A.j("resource assembler is initialized"))
a.A()
s.a=a
s.c=1},
dC(a){var s=this
if(s.d)A.f(A.j("resource assembler is disposed"))
if(s.a==null)throw A.a(A.j("resource assembler is not initialized"))
if(s.b!=null)throw A.a(A.j("resource assembly is already open"))
a.A()
return s.b=new A.lG(s.c,a,B.bS)},
ci(a){var s,r=this
if(r.d)A.f(A.j("resource assembler is disposed"))
r.hg(a)
s=r.c
if(a.a!==s)throw A.a(A.j("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.ng
r.b=null},
eV(a){if(this.d)A.f(A.j("resource assembler is disposed"))
this.hg(a)
a.c=B.nh
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.a(A.j("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
hg(a){if(this.b!==a||a.c!==B.bS)throw A.a(A.j("resource assembly is not prepared"))}}
A.h6.prototype={
B(){return"DrawMode."+this.b}}
A.kr.prototype={
B(){return"BlendMode."+this.b}}
A.bb.prototype={}
A.m5.prototype={
t(a){var s=this
return"SurfaceMetrics(css "+s.a+"x"+s.b+", pixels "+s.c+"x"+s.d+", dpr 1, visible: true)"},
A(){var s=this
if(s.a<0||s.b<0)throw A.a(A.o("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.a(A.o("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.a(A.o("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.id.prototype={
B(){return"ColorEncoding."+this.b}}
A.h5.prototype={
B(){return"DiagnosticLevel."+this.b}}
A.iZ.prototype={
A(){var s,r=this,q=null
r.a.A()
s=r.b
if(s<=0||r.c<=0)throw A.a(A.o("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.a(A.o("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.a(A.o("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.a(A.o("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.fl.prototype={
B(){return"RendererState."+this.b}}
A.aY.prototype={}
A.pz.prototype={
iB(a){var s=this.z.h(0,a)
return s==null?B.cQ:s},
t(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.fd.prototype={
B(){return"MaterialResidencyStatus."+this.b}}
A.db.prototype={}
A.c9.prototype={}
A.r8.prototype={
cQ(a){var s=this.a,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.r9(a)),r.i("I<1>")).gu(0)}}
A.r9.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:189}
A.r6.prototype={
dD(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
if(r.K(l))throw A.a(A.o("material residency keys must be unique: "+l,null))
r.l(0,l,m)
j=A.n(s,s)
for(k=A.Dm(k),i=k.$ti,k=new A.ch(k.a(),i.i("ch<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.l(0,e,c)
B.a.k(q,new A.c2(c,d,g))}p.l(0,l,j)}s=A.n(s,t.bp)
for(o=this.a.dD(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.l(0,b.a.a,b.b)}o=r.$ti.i("ao<2>")
a=A.K(new A.ao(r,o),o.i("r.E"))
B.a.Y(a,new A.r7())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.lA(m,k,s))}return new A.r8(A.ab(o,t.wl))},
lA(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.n(s,r)
for(p=new A.N(b,A.v(b).i("N<1,2>")).gv(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.l(0,n,m)}p=A.FC(new A.ao(q,q.$ti.i("ao<2>")))
A.aX(q,s,r)
return new A.c9(a,p)}}
A.r7.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:185}
A.ln.prototype={
p0(a){return this.a.bC(a)}}
A.ra.prototype={
$3(a,b,c){return new A.c8(A.i(a),A.i(b),A.aq(c))},
$S:210}
A.ma.prototype={}
A.re.prototype={
bc(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.C3(b,new A.l0(a.byteLength,B.d3,B.j2))
if(b.b!==B.j)A.f(A.j(c))
s=A.b(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.i(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.i(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.cx(b)
A.bj(b,p)
if(b.b!==B.j)A.f(A.j(c))
r.bindBuffer(A.i(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.a_(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.Dj(h.a)
if(!l.k(0,g))continue
f=A.I_(o,g,h)
if(b.b!==B.j)A.f(A.j(c))
r.vertexAttribPointer.apply(r,[g,f,A.i(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.f(A.j(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.C3(b,new A.l0(A.Bi(e),B.d3,B.d2))
if(b.b!==B.j)A.f(A.j(c))
r.bindBuffer(A.i(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(d.a))
A.GQ(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.ma(a0,d,p,b,B.d.ba(a.length,n),t.Dd.b(e))},
cB(a){var s=this.c.h(0,a.a)
if(s==null)throw A.a(A.et(B.aO,a))
this.b.bC(a)
return s},
aL(a){var s,r,q=this.c.a9(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.aL(a)},
eR(){var s,r,q,p
for(s=this.b.bY(),r=s.$ti,s=new A.ch(s.a(),r.i("ch<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bc(p.b))}},
gcw(){return this.b.bY().b6(0,0,new A.rg(),t.S)}}
A.rf.prototype={
$3(a,b,c){return new A.bL(A.i(a),A.i(b),A.aq(c))},
$S:156}
A.rg.prototype={
$2(a,b){var s,r
A.i(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.Bi(s)
return a+r+s},
$S:148}
A.ia.prototype={}
A.rh.prototype={
n9(a){var s,r,q,p,o=A.JT(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.f(A.j("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.l(0,s,q+1)
r.toString
return r}p=new A.ia(o,1,A.JZ(A.Dt(a)))
m.l(0,n,p)
this.c.l(0,n,1)
return p},
aL(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.a(A.j("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a9(0,p)
q.a9(0,p)}else s.l(0,p,r-1)}}
A.rj.prototype={
C(){var s=this
return A.E(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hl.prototype={
jl(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.Q)A.f(A.j("model package binding is disposed"))
if(a8.x==null)throw A.a(A.j("model package is not attached"))
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
a0=e.af()
a=a.gan()
a1=A.C(a)
A.b2(new A.H(a,a1.i("B(1)").a(a0.gaq()),a1.i("H<1,B>")))
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
a6=e.af()
c=c.gan()
a7=A.C(c)
A.b2(new A.H(c,a7.i("B(1)").a(a6.gaq()),a7.i("H<1,B>")))
a5=l.a(new A.bb(d,a1,e,a9,a0,a,a2,a3,a4,a5))
q.Z(h)
if(!(g<j.length))return A.d(j,g)
j[g].sb3(a5)}},
a_(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.h3(s,r,q.x)
B.a.P(s)
B.a.P(r)
q.x=null},
kd(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a,a4=A.FG(a2.b,a7,a3),a5=A.c([],t.d),a6=A.c([],t.s3)
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
if(typeof e!=="number")return e.cG()
if(!(e<d))break
r=B.a.h(o,s)
q=f.$1(r.b)
if(q.a<0){a3=A.j("invalid material for package slot "+r.b)
throw A.a(a3)}e=B.a.h(a4.b,s).c
d=r.a
if(g.x)A.f(A.j("resource library is disposed"))
c=g.a
e.A()
b=c.b.aH(e,a3+d+":"+a7)
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
c=m.af()
d=d.gan()
a0=A.C(d)
A.b2(new A.H(d,a0.i("B(1)").a(c.gaq()),a0.i("H<1,B>")))
J.e9(a6,n.b.bR(new A.bb(e,q,m,l,B.V,B.K,!0,!0,0,null)))
e=s
if(typeof e!=="number")return e.a4()
s=e+1}return new A.jB(a4,a6,a5)}catch(a1){a2.h3(a6,a5,a4)
throw a1}},
h3(a,b,c){var s,r,q,p
t.xp.a(a)
t.qr.a(b)
for(s=A.C(a).i("bM<1>"),r=new A.bM(a,s),r=new A.al(r,r.gu(0),s.i("al<a0.E>")),q=this.d.b,s=s.i("a0.E");r.m();){p=r.d
q.aL(p==null?s.a(p):p)}for(s=A.C(b).i("bM<1>"),r=new A.bM(b,s),r=new A.al(r,r.gu(0),s.i("al<a0.E>")),q=this.c,s=s.i("a0.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.f(A.j("resource library is disposed"))
q.a.aL(p)
q.f.a9(0,p)}if(c!=null)c.oO()}}
A.cR.prototype={
B(){return"QmeshRejection."+this.b}}
A.lL.prototype={
t(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.y7.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.c2.prototype={}
A.dT.prototype={
B(){return"TextureResidencyStatus."+this.b}}
A.cd.prototype={}
A.uG.prototype={
d_(a){var s=this.a,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.uH(a)),r.i("I<1>")).gu(0)}}
A.uH.prototype={
$1(a){return t.h.a(a).b===this.a},
$S:143}
A.uE.prototype={
dD(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.f(A.o("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.f(A.a7(n,"handle","must be valid"))
if(s.K(o))throw A.a(A.o("TextureResidencyRequest keys must be unique: "+o,null))
s.l(0,o,p)}r=s.$ti.i("ao<2>")
m=A.K(new A.ao(s,r),r.i("r.E"))
B.a.Y(m,new A.uF())
r=t.Aj
l=A.a_(r)
k=A.n(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.k(0,o)){i=this.ln(o)
k.l(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.k(j,new A.cd(p,i))}r=l.a
return new A.uG(A.ab(j,t.h),r)},
ln(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.t()
if(s.d0(a,r)===s.d)return B.eg
this.b.l(0,a,!0)
return B.ef}catch(q){if(A.ah(q) instanceof A.l4){s=this.b.h(0,a)===!0?B.ei:B.eh
return s}else throw q}}}
A.uF.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:139}
A.dn.prototype={}
A.m7.prototype={
b1(a){var s=this.a,r=A.zr(s,B.j7)
A.zs(s,r,0,a)
return r},
pn(a,b){var s,r,q,p=this,o=p.b,n=o.bC(a),m=A.K(n.b,t.Fx)
B.a.l(m,0,b)
s=n.a
o.f0(a,new A.dn(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.zr(p.a,s)
o.l(0,r,q)}A.zs(p.a,q,0,b)},
nF(a){var s,r=this.b,q=r.bC(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.a(A.j("TextureStore.finalizeMips: no pixels uploaded yet for "+a.t(0)))
A.C4(this.a,s)
r.f0(a,new A.dn(p,q.b,!0))},
nY(a){return B.a.a2(this.b.bC(a).b,new A.uJ())},
d0(a,b){var s
this.b.bC(a)
s=this.c.h(0,a.a)
return s==null?b:s},
oX(a){var s
if(a==null){s=this.d
s===$&&A.t()
return s}s=this.d
s===$&&A.t()
return this.d0(a,s)},
p9(a){var s
if(a==null){s=this.e
s===$&&A.t()
return s}s=this.e
s===$&&A.t()
return this.d0(a,s)},
pb(a){var s=this.f
s===$&&A.t()
return s},
oZ(a){var s=this.r
s===$&&A.t()
return s},
p7(a){var s=this.w
s===$&&A.t()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>")),q=n.a,p=q.a,o=t.p;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.P(0)
s=n.d
s===$&&A.t()
A.mr(q,s)
s=n.e
s===$&&A.t()
A.mr(q,s)
s=n.f
s===$&&A.t()
A.mr(q,s)
s=n.r
s===$&&A.t()
A.mr(q,s)
s=n.w
s===$&&A.t()
A.mr(q,s)},
eR(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b1($.As())
i.e=i.b1($.Ap())
i.f=i.b1($.Aq())
i.r=i.b1($.Ao())
i.w=i.b1($.Ar())
for(s=i.b.bY(),r=s.$ti,s=new A.ch(s.a(),r.i("ch<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a2(o,new A.uL()))continue
l=A.zr(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.zs(p,l,k,j)}if(m.c)A.C4(p,l)
q.l(0,n.a,l)}},
gcw(){return this.b.bY().b6(0,0,new A.uK(),t.S)}}
A.uI.prototype={
$3(a,b,c){return new A.bt(A.i(a),A.i(b),A.aq(c))},
$S:132}
A.uJ.prototype={
$1(a){return t.Fx.a(a)!=null},
$S:32}
A.uL.prototype={
$1(a){return t.Fx.a(a)==null},
$S:32}
A.uK.prototype={
$2(a,b){var s
A.i(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:128}
A.bi.prototype={
B(){return"SolarPhase."+this.b}}
A.ut.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a5("timeHours",e.a),new A.a5("solarNoonHours",s),new A.a5("latitudeRadians",r),new A.a5("solarDeclinationRadians",q),new A.a5(d,p),new A.a5(c,o),new A.a5("aerosolTurbidity",n),new A.a5(b,m),new A.a5("solarIntensity",e.x),new A.a5("baseFogDensity",l),new A.a5("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.a(A.o(g+" must be finite",a))}if(s>=24)throw A.a(A.o("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.a(A.o("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.a(A.o("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a5(d,p),new A.a5(c,o),new A.a5(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.a(A.o(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.a(A.o("solar attenuation inputs are out of bounds",a))}}
A.hA.prototype={
gE(){return this.a}}
A.cv.prototype={
A(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.gT(0)){s=p.c
if(s.gT(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.a(A.o("invalid volumetric source "+o,null))},
gE(){return this.a}}
A.yR.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.c.I(a.b.a,b.b.a):s},
$S:124}
A.v8.prototype={}
A.dI.prototype={
gnS(){return this.b.length}}
A.kR.prototype={
mm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.th(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].aA(s,b)
o=s.ml(a,!1)
if(o.b.length!==0)return new A.kS(o,B.kB)
q=o.a
n=A.C(q)
m=new A.H(q,n.i("e(1)").a(new A.ps()),n.i("H<1,e>")).b9(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.aw(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.u)(n),++i){h=n[i]
if(!m.p(0,h.gG().a))throw A.a(A.j('RenderFeature "'+k.gE()+'" created a pass "'+h.gG().a+'" that it never declared into the graph'))
B.a.k(l,h)}}B.a.Y(l,new A.pt(o))
return new A.kS(o,l)},
bS(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a_()}}
A.ps.prototype={
$1(a){return t.A.a(a).a},
$S:121}
A.pt.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.I(B.a.eG(s,new A.pq(a)),B.a.eG(s,new A.pr(b)))},
$S:115}
A.pq.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:11}
A.pr.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:11}
A.kS.prototype={}
A.f5.prototype={
B(){return"FrameQueueState."+this.b}}
A.kX.prototype={
c7(a){var s,r,q=this
if(q.b!==B.as)throw A.a(A.j("FrameQueue.submit called outside an active frame"))
a.c.A()
s=q.c
r=q.a
if(s<r.length)B.a.l(r,s,a)
else B.a.k(r,a);++q.c},
$iG5:1}
A.py.prototype={
mi(a){if(a.length===0)throw A.a(A.a7(a,"passId",null))
this.b=a
this.a.c_(a,A.Dv())},
jB(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
p=r.b
o.l(0,q,new A.aY(p.a,p.b,p.d))}return A.aX(o,t.N,t.pH)},
bM(a,b){var s,r=this.b
if(r==null)throw A.a(A.j("draw recorded outside an active render pass"))
if(b<1)throw A.a(A.o("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.ad(a,3)*b}}
A.hF.prototype={}
A.aw.prototype={
gc0(){var s=this.c,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.rG()),r.i("I<1>"))},
gcF(){var s=this.c,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.rH()),r.i("I<1>"))},
t(a){return"PassDeclaration("+this.a+" @ "+this.b.t(0)+")"},
gE(){return this.a}}
A.rG.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.R},
$S:24}
A.rH.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:24}
A.cq.prototype={
B(){return"GraphValidationFailureKind."+this.b}}
A.bz.prototype={
t(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.j0.prototype={
B(){return"ResourceFormat."+this.b}}
A.d5.prototype={
B(){return"GraphStage."+this.b}}
A.aO.prototype={
ix(){var s=this
return new A.aO(s.a,s.b,s.c,s.d,s.e,s.f+1)},
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.aO&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gU(a){var s=this
return A.cP(s.a,s.b,s.c,s.d,s.e,s.f)},
t(a){var s=this,r=s.b.t(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.hs.prototype={
B(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.ie.prototype={
gE(){return this.a}}
A.lJ.prototype={
aC(a){var s,r,q,p,o,n,m=this
a.A()
s=null
try{r=t.a
s=A.GT(m.a,a.c,r.a(a.d.ga3().bH(0)),r.a(a.f),a.b)}catch(q){if(A.ah(q) instanceof A.j3){++m.e
throw q}else throw q}r=a.a
p=new A.ie(r,s)
o=m.b
n=o.h(0,r)
o.l(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
bS(){var s=this.b
this.kE(new A.ao(s,A.v(s).i("ao<2>")))
s.P(0)},
kE(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bg.prototype={
A(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.a(A.o("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gN(),q=q.gv(q);q.m();){p=q.gq()
o=p.b
if(o<0)throw A.a(A.o('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.a(A.o('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gN(),s=s.gv(s);s.m();){q=s.gq()
p=q.b
if(p<0)throw A.a(A.o('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.a(A.o('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gE(){return this.a}}
A.tf.prototype={}
A.ba.prototype={
al(){var s=this
return A.AT(B.eV,s.f,B.aG,B.an,!0,!0,!0,!0,s.r,B.aK,B.aL,s.d,s.e,!0,!1,!1)},
gE(){return this.a}}
A.th.prototype={
ml(a,b){var s=this.lU(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.tg(A.ab(new A.I(r,q.i("l(1)").a(new A.tm()),q.i("I<1>")),t.A),s)},
lU(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.C(r)
p=q.i("I<1>")
o=A.K(new A.I(r,q.i("l(1)").a(new A.tl()),p),p.i("r.E"))
m.kj(o,a,s)
m.kn(o,s)
m.kp(o,s)
m.km(o,!1,s)
n=m.kr(o,s)
m.ko(o,n,s)
m.kq(o,s)
m.kl(o,n,s)
m.kk(o,s)
return s},
kj(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.ad.bD(b)
if(p.a!==0)B.a.k(c,new A.bz(B.jj,q.a,"missing capabilities: "+p.W(0,", ")))}},
kn(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gc0(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gq().a
if(m.e>1)B.a.k(b,new A.bz(B.je,n,"reads multisampled resource "+m.t(0)+" directly; resolve before sampling"))}}},
kp(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.tk()),q=B.a.gv(a),s=new A.U(q,r,s.i("U<1>"));s.m();){r=q.gq()
p=r.gc0()
o=A.K(p,p.$ti.i("r.E"))
p=r.gcF()
n=A.K(p,p.$ti.i("r.E"))
if(o.length!==1||n.length!==1){B.a.k(b,new A.bz(B.bg,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbj(o).a
l=B.a.gbj(n).a
if(m.e<=1||l.e>1)B.a.k(b,new A.bz(B.bg,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.k(b,new A.bz(B.bg,r.a,"resolve source and destination must match format and extent"))}},
km(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.R)B.a.k(c,new A.bz(B.jh,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kr(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcF(),n=J.O(o.a),o=new A.U(n,o.b,o.$ti.i("U<1>")),m=p.a;o.m();){l=n.gq().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bz(B.jd,m,l.t(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
ko(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gc0(),p=J.O(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=r.a;q.m();){n=p.gq()
if(n.b===B.R)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bz(B.d7,o,"reads "+n.t(0)+" but no pass writes that version"))
continue}if(B.a.bE(a,m)>s)B.a.k(c,new A.bz(B.d7,o,"reads "+n.t(0)+" before writer "+m.a+" runs"))}}},
kq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gc0(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gq()
if(m.b===B.R)continue
for(l=q.gcF(),k=J.O(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gq().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bz(B.jg,n,"reads and writes "+m.t(0)+" at the same version; declare a ping-pong version bump"))}}}},
kl(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gc0(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gq()
if(m.b===B.R)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcF().ap(0,new A.tj(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bz(B.jf,n,"reads "+l.t(0)+" but writer "+k.a+" produced "+j.t(0)))}}},
kk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcF(),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gq().a
r.l(0,n.a+"#"+n.f,q)}m=J.qG(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gc0(),p=J.O(s.a),s=new A.U(p,s.b,s.$ti.i("U<1>"));s.m();){o=p.gq()
if(o.b===B.R)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.d9(s,!1,!1,p)
s=a.length
i=A.d9(s,!1,!1,p)
h=new A.ti(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bz(B.ji,a[q].a,"participates in a resource dependency cycle"))}}}}
A.tm.prototype={
$1(a){t.A.a(a)
return A.zj()},
$S:11}
A.tl.prototype={
$1(a){t.A.a(a)
return A.zj()},
$S:11}
A.tk.prototype={
$1(a){return t.A.a(a).f},
$S:11}
A.tj.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:24}
A.ti.prototype={
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
A.tg.prototype={}
A.mL.prototype={$icc:1,
gE(){return this.a},
gG(){return this.b},
gf5(){return this.c}}
A.iY.prototype={
lY(a){var s,r,q,p=a.c
p.A()
s=this.a.bC(a.a)
p=p.af()
r=s.d.gan()
q=A.C(r)
return A.b2(new A.H(r,q.i("B(1)").a(p.gaq()),q.i("H<1,B>")))},
giv(){return new A.bI(this.o1(),t.Br)},
o1(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$giv(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bY(),n=o.$ti,o=new A.ch(o.a(),n.i("ch<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
i=i.af()
f=f.gan()
d=A.C(f)
r=5
return a.b=new A.mL(h,g,A.b2(new A.H(f,d.i("B(1)").a(i.gaq()),d.i("H<1,B>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iG8:1}
A.tn.prototype={
$3(a,b,c){return new A.cK(A.i(a),A.i(b),A.aq(c))},
$S:91}
A.lQ.prototype={
ghq(){var s=this.d
return s===$?this.d=new A.uE(this.c,A.n(t.Aj,t.y)):s},
bG(a,b){var s,r
if(this.x)A.f(A.j("resource library is disposed"))
s=this.a
a.A()
r=s.b.aH(a,b)
s.c.l(0,r.a,s.bc(a))
this.f.k(0,r)
return r},
oP(a){if(this.x)A.f(A.j("resource library is disposed"))
this.a.aL(a)
this.f.a9(0,a)},
iL(a,b,c,d,e,f,g){var s,r
if(this.x)A.f(A.j("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.f(A.o("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.f(A.o("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aH(new A.dn(new A.l2(f,d,1,!0,e,B.be,g,a),A.d9(1,null,!1,t.Fx),!1),b)
this.w.k(0,r)
return r},
dG(a,b,c,d,e,f){return this.iL(a,b,c,d,e,f,B.d5)},
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
j=o.a9(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aL(k)}r=i.r
q=A.K(r,A.v(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.aL(q[l])
q=i.f
o=A.K(q,A.v(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.aL(o[l])
s.P(0)
r.P(0)
q.P(0)
p.a_()
i.x=!0},
$iGa:1}
A.vB.prototype={}
A.n9.prototype={$icc:1,
gE(){return this.a},
gG(){return this.b},
gf5(){return this.c}}
A.xi.prototype={
$1(a){var s=this.a.w.a.cB(a),r=s.b!=null,q=r?s.d:s.e
return new A.j_(s.c,r,q,s.f)},
$S:90}
A.xj.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.p(0,a))return this.b.x.gq().iy(a)
if(b!=null&&s.p(0,b))return this.b.x.gq().iy(b)
throw A.a(A.j("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:89}
A.xh.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.xa.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.k1
return r==null||r.length===0?null:B.a.ga1(r)},
$S:70}
A.xb.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bw
s=q.b.k1
r=s.length===0?null:B.a.ga1(s)
return A.Ko(s,3,q.a.d,r)},
$S:68}
A.xg.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.x5.prototype={
$0(){return this.a.at.a},
$S:55}
A.x7.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.x6.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.xf.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.x3.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.x4.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.xc.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.xd.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.xe.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.t()
return s},
$S:5}
A.x9.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.x8.prototype={
$0(){return this.a.at.w},
$S:56}
A.xl.prototype={
$0(){return this.a},
$S:57}
A.xm.prototype={
$0(){var s,r,q=this.a.b.k4,p=q==null?null:q.b
if(p==null||!this.b.w.c.nY(p))return null
s=this.b.w.c
r=s.d
r===$&&A.t()
return s.d0(p,r)},
$S:58}
A.wh.prototype={}
A.mW.prototype={$iG7:1}
A.mI.prototype={$iFc:1}
A.tu.prototype={
gaD(){var s=this.w
return s==null?A.f(A.j("renderer is not initialized")):s},
is(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bQ)throw A.a(A.j("renderer can only be initialized once"))
a.A()
b.A()
s=m.a
if(s.b===B.a2)throw A.a(A.j("renderer device is context lost"))
m.e=B.nf
try{m.r=s.iJ()
r=m.b
q=A.iM(a)
p=r.a
if(p.a!=null)A.f(A.j("configuration state is already initialized"))
a.A()
p.a=a
p.b=A.iM(a)
p.d=1
r.b.ir(q)
r=A.FD()
m.w=new A.lQ(A.FF(s),r,A.Gt(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.lR()
p=new A.pW(s,r)
q=A.iM(a)
o=p.e0(q,a)
r.ir(q)
p.c=new A.hn(new A.lG(0,q,B.bS),o,B.at)
m.x=p
m.y=new A.lJ(s,A.n(t.N,t.CH))
m.as=a
A.CL(m)
m.e=B.bR}catch(n){s=m.y
if(s!=null)s.bS()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bQ
throw n}return A.AX(t.H)},
mg(a,b){var s,r,q,p,o=this
o.lu()
o.cb()
r=B.a.p(o.d,a)
if(!r)throw A.a(A.o("world was not created by this renderer",null))
if(o.at!=null)throw A.a(A.j("renderer.beginFrame called twice without end/abort"))
b.a.A()
b.b.A()
b.c.A()
r=b.w
if(!isFinite(r))A.f(A.o("FrameInput.timeSeconds must be finite: "+A.y(r),null))
o.at=b
o.ax=a
q=o.c
if(q.b===B.as)A.f(A.j("FrameQueue.beginFrame called twice without end/abort"))
q.b=B.as
q.c=0
B.a.P(q.a)
s=q
try{r=o.r
if((r==null?A.f(A.j("renderer is not initialized")):r).z)o.b$=o.a.mh()
return s}catch(p){if(q.b!==B.as)A.f(A.j("FrameQueue.abortFrame called without an active frame"))
q.c=0
q.b=B.iP
o.fs()
o.ax=o.at=null
throw p}},
nx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cb()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.a(A.j("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.as)A.f(A.j("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hz(l,0,A.e7(m.c,"count",t.S),A.C(l).c).c2(0,!1)
m.b=B.iO
q=k
try{p=A.Ib(a1,r,s,q)
o=p.a.jB()
m=o.gN().dL(0,new A.tv())
l=m.$ti
n=new A.cO(m,l.i("aY(1)").a(new A.tw()),l.i("cO<1,aY>")).b6(0,B.cQ,new A.tx(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcw()
g=g.c.gcw()
e=a1.w
e.a.gcw()
e.c.gcw()
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
return new A.pz(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.kP(s.e)
a1.ax=a1.at=null}},
lu(){var s,r,q,p=this
if(p.e!==B.e_)return
if(p.a.b===B.a2)throw A.a(A.j("renderer context remains lost"))
s=p.w
if(s.x)A.f(A.j("resource library is disposed"))
s.a.eR()
s.c.eR()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.f(A.j("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.f(A.j("GPU resource adapter is not initialized"))
s.c=new A.hn(q.a,s.e0(A.iM(r),r),B.at)
s=p.y
s.c=null
s.b.P(0)
A.CL(p)
p.e=B.bR},
cb(){var s=this,r=s.e
if(r!==B.bR)throw A.a(A.j("renderer is not ready: "+r.b))
if(s.a.b===B.a2){s.kF()
s.e=B.e_
throw A.a(A.j("renderer context lost"))}}}
A.tv.prototype={
$1(a){return B.c.p(t.h6.a(a).a.toLowerCase(),"world")},
$S:59}
A.tw.prototype={
$1(a){return t.h6.a(a).b},
$S:60}
A.tx.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aY(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:61}
A.mT.prototype={}
A.vN.prototype={
kP(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.f(A.j(u.k))
r=s.hs(o)
if(r.b)A.f(A.j("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.k(p.a$,new A.mT(o))}catch(q){p.e2(o)}},
fs(){var s=this.b$
this.b$=null
if(s!=null)this.e2(s)},
kF(){var s,r,q
this.fs()
s=this.a$
r=J.z9(s.slice(0),A.C(s).c)
B.a.P(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.e2(r[q].b)},
e2(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hs(a).a)}catch(r){}}}
A.n_.prototype={}
A.j5.prototype={
B(){return"ShadowCasterLod."+this.b}}
A.bZ.prototype={
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
A.bU.prototype={
I(a,b){var s
t.z3.a(b)
s=B.b.I(b.a,this.a)
if(s!==0)return s
return B.d.I(this.b,b.b)},
$ibp:1}
A.b3.prototype={}
A.yV.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.I(0,s.a(b).a)},
$S:62}
A.yW.prototype={
$1(a){return t.E0.a(a).b},
$S:63}
A.yT.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.I(0,s.a(b).a)},
$S:64}
A.yU.prototype={
$1(a){return t.EH.a(a).b},
$S:65}
A.pa.prototype={}
A.p9.prototype={}
A.fR.prototype={
gan(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.B(o,n,p),new A.B(r,n,p),new A.B(o,q,p),new A.B(r,q,p),new A.B(o,n,s),new A.B(r,n,s),new A.B(o,q,s),new A.B(r,q,s)],t.k)},
t(a){return"Aabb("+this.a.t(0)+", "+this.b.t(0)+")"}}
A.fg.prototype={}
A.h9.prototype={
B(){return"FrustumTest."+this.b}}
A.pA.prototype={
iP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.ba
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.iQ:B.iR}}
A.pB.prototype={
$4(a,b,c,d){var s=new A.B(a,b,c),r=new A.fg(s,d),q=Math.sqrt(s.gbg())
return q<1e-9?r:new A.fg(s.a6(0,1/q),d/q)},
$S:66}
A.da.prototype={
a6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.da(h)},
iR(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
eK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.f(A.j("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.y(k)+")"))
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
it(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=J.qG(4,t.cE)
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
e=f}}if(!isFinite(g)||g<1e-12)throw A.a(A.j("Mat4.inverse: singular matrix"))
if(e!==h){if(!(e>=0&&e<4))return A.d(a1,e)
a1[h]=a1[e]
a1[e]=s}s=a1[h]
if(!(h<s.length))return A.d(s,h)
c=s[h]
for(b=0;b<8;++b){if(!(b<s.length))return A.d(s,b)
r=s[b]
s.$flags&2&&A.aW(s)
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
s.$flags&2&&A.aW(s)
s[b]=r-a*q}}}a0=new Float32Array(16)
for(p=0;p<4;++p)for(h=0;h<4;++h){s=h*4+p
r=a1[p]
q=4+h
if(!(q<r.length))return A.d(r,q)
q=r[q]
if(!(s<16))return A.d(a0,s)
a0[s]=q}return new A.da(a0)},
gT(a){return B.o.a2(this.a,new A.r5())},
t(a){return"Mat4("+A.y(this.a)+")"}}
A.r5.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.lM.prototype={
t(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.fs.prototype={
A(){var s=this.a
if(!s.gT(0))throw A.a(A.o("Transform.translation must be finite: "+s.t(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.a(A.o("Transform.rotation must be finite: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.a(A.o("Transform.scale must be finite and positive: "+A.y(s),null))},
af(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.Bf(A.c([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.Bf(A.c([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
t(a){return"Transform("+this.a.t(0)+", "+this.b.t(0)+", scale="+A.y(this.c)+")"}}
A.B.prototype={
a4(a,b){return new A.B(this.a+b.a,this.b+b.b,this.c+b.c)},
ac(a,b){return new A.B(this.a-b.a,this.b-b.b,this.c-b.c)},
a6(a,b){return new A.B(this.a*b,this.b*b,this.c*b)},
be(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.B(s*r-q*p,q*o-n*r,n*p-s*o)},
gbg(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbg())},
gT(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga8(){var s=this,r=Math.sqrt(s.gbg())
return r<1e-9?B.v:new A.B(s.a/r,s.b/r,s.c/r)},
aa(a,b){if(b==null)return!1
return b instanceof A.B&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gU(a){return A.cP(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.i7.prototype={
B(){return"AtmosphericParticleAnchor."+this.b}}
A.nZ.prototype={
A(){if(this.a<0)throw A.a(A.o("atmospheric particle counts must be >= 0",null))},
gnt(){return B.d.n(this.a,0,this.b)}}
A.o1.prototype={}
A.o_.prototype={}
A.fU.prototype={}
A.fT.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.a(A.o("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.c([new A.a5("origin",l.d),new A.a5("halfExtents",s),new A.a5("initialVelocity",l.f),new A.a5("acceleration",l.r)],t.c2)
r.push(new A.a5("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.a(A.o("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.a(A.o("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.a(A.o("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.a(A.o("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.a(A.o("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.a(A.o("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.a(A.o("AtmosphericParticleField.particleScale must be finite and > 0",k))},
c4(a,b){var s,r,q,p,o,n=this,m=null
n.A()
s=n.z
if(b>=s)throw A.a(A.b_(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.O(a.w+n.cN(b,0)*r,r)
switch(n.c.a){case 0:s=B.v
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.a4(0,n.d).a4(0,new A.B((n.cN(b,1)*2-1)*p.a,(n.cN(b,2)*2-1)*p.b,(n.cN(b,3)*2-1)*p.c))
p=o.a4(0,n.kG(q))
s=n.lW(q)
if(!isFinite(q)||q<0)A.f(A.o("atmospheric particle age must be finite and >= 0",m))
if(!o.gT(0)||!p.gT(0)||!s.gT(0))A.f(A.o("atmospheric particle kinematics must be finite",m))
return new A.fU(q,o,p,s)},
c8(a,b){return this.fn(a,b,new A.o0())},
fn(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
t.C3.a(c)
i.A()
for(s=i.z,r=i.as,q=i.cy,p=i.at,o=i.a,n=i.b,m=0,l=0;l<s;++l){k=i.c4(b,l)
if(!c.$1(k))continue
j=p?i.fz(k.d):B.ab
a.c7(new A.bb(o,n,new A.fs(k.c,j,r),-1,B.ap,B.K,!1,!1,l,q));++m}return m},
ii(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.A()
s=A.AW(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.c4(a,n)
if(p)h.fz(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.iP(new A.fR(new A.B(k-q,j-q,i-q),new A.B(k+q,j+q,i+q)))!==B.ba)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.f(A.o("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.f(A.j("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.o1(r,o,q)},
nf(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.A()
b.A()
s=i.z
r=b.a
q=b.b
if(s!==B.d.n(r,0,q))throw A.a(A.j("atmospheric field count "+s+" does not match budget effective count "+b.gnt()))
p=i.ii(a)
for(o=0,n=0;n<s;++n){m=i.c4(a,n).d
l=m.a
k=m.b
m=m.c
o+=Math.sqrt(l*l+k*k+m*m)}m=B.d.n(r,0,q)
q=B.d.n(r,0,q)!==r
l=p.b
k=p.c
j=s===0?0:o/s
if(r<0||m<0||m>r||s!==m||k<0||l+k!==s||!isFinite(j)||j<0)A.f(A.j("atmospheric diagnostics do not reconcile"))
if(q!==(m!==r))A.f(A.j("atmospheric budget cap state does not reconcile"))
return new A.o_(r,m,q,s,l,k,j)},
lW(a){var s=this.w,r=Math.exp(-this.x*a)
return s.a4(0,this.f.ac(0,s).a6(0,r))},
kG(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a6(0,a).a4(0,this.f.ac(0,s).a6(0,(1-q)/r))},
fz(a){var s,r=a.ga8()
if(r.aa(0,B.v))return B.ab
s=B.b.n(B.a1.be(r),-1,1)
if(s>0.999999)return B.ab
if(s<-0.999999)return A.iT(B.aW,3.141592653589793)
return A.iT(B.a1.bd(r),Math.acos(s))},
cN(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.o0.prototype={
$1(a){return!0},
$S:54}
A.kU.prototype={}
A.pw.prototype={
A(){var s,r,q,p,o,n,m,l,k,j=this,i=!0
if(j.a.a>=0)if(j.b.a>=0){s=j.d
if(isFinite(s))if(!(s<=0)){i=j.e
i=!isFinite(i)||i<=0}}if(i)throw A.a(A.o("invalid flow particle field",null))
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
c8(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
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
d=new A.B(g,e,j).ga8()
c=d.b
b=d.bd(Math.abs(c)>0.9?B.aW:B.J).ga8()
a=Math.sqrt(g*g+e*e+j*j)
for(a0=k.e,a1=k.f,a2=k.c,a3=a1^1327217884,a4=k.d,a5=b.a,a6=b.b,a7=b.c,a8=d.a*a2,c*=a2,a9=d.c*a2,b0=l*1e4,b1=0;b1<a0;++b1){b2=B.b.O(B.b.O(r+b4.hv(a1,b1),q)*a2,a)/a
b3=(b4.hv(a3,b1)*2-1)*a4
b5.c7(new A.bb(p,o,new A.fs(new A.B(h+g*b2+a5*b3,f+e*b2+a6*b3,i+j*b2+a7*b3),b4.lD(new A.B(a8,c,a9)),n),-1,B.ap,B.K,!1,!1,b0+b1,1718382455));++m}}return m},
hv(a,b){return(((a^b*73244475)&2147483647)*1103515245+12345&2147483647)/2147483647},
lD(a){var s,r=a.ga8()
if(r.aa(0,B.v))return B.ab
s=B.b.n(B.a1.be(r),-1,1)
if(s>0.999999)return B.ab
if(s<-0.999999)return A.iT(B.aW,3.141592653589793)
return A.iT(B.a1.bd(r),Math.acos(s))}}
A.jj.prototype={
B(){return"_BloomBlurAxis."+this.b}}
A.i9.prototype={
gE(){return this.f},
aA(a,b){B.a.k(a.a,new A.aw(this.f,B.M,A.c([new A.Q(this.x,B.i),new A.Q(this.y,B.k)],t.C),!1))},
aw(a){var s=this,r=s.a.aC(new A.bg(s.e,s.b,s.c,B.y,B.du,B.dr)),q=A.cx(s.d),p=t.n,o=s.r===B.ey?new Float32Array(A.S(A.c([1/s.Q,0],p))):new Float32Array(A.S(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.mz(new A.ba(s.f,A.c([new A.Q(s.x,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iap:1}
A.mz.prototype={
ao(a){var s,r,q,p,o=this
if(a.d.f.b<=0)return
s=a.b
r=s.a
A.bG(r,a.ar(o.r).b)
A.bd(r,o.a.al())
A.cU(r,B.U,1,0,0,0)
A.bQ(r,o.b.b)
q=t._
p=o.d
if(o.e)A.GP(r,0,q.a(p.$0()))
else A.aB(r,0,q.a(p.$0()))
A.m(r,"uSource",B.x)
A.m(r,"uTexelStep",new A.q(B.ag,o.f))
A.bj(r,o.c)
s.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.ks.prototype={
gE(){return"bloomComposite"},
aA(a,b){B.a.k(a.a,new A.aw("bloomComposite",B.M,A.c([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
aw(a){var s=this,r="bloomComposite",q=s.a.aC(new A.bg(r,s.b,s.c,B.y,B.ls,B.l6)),p=A.cx(s.d),o=s.w,n=A.c([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.k)],t.C)
return A.c([new A.mA(new A.ba(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iap:1}
A.mA.prototype={
ao(a){var s,r,q=this,p=a.d.f.b
if(p<=0)return
s=a.b
r=s.a
A.bG(r,a.c3(q.f).b)
A.C0(r,1)
A.bd(r,B.cH)
A.bQ(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.m(r,"uBloom",B.x)
A.m(r,"uBloomStrength",new A.q(B.e,p))
A.bj(r,q.c)
s.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.kF.prototype={
gE(){return"depthPrepass"},
aA(a,b){B.a.k(a.a,new A.aw("depthPrepass",B.ja,A.c([new A.Q(this.w,B.k)],t.C),!1))},
aw(a){var s=this,r="depthPrepass",q=s.a.aC(new A.bg(r,s.b,s.c,B.dt,B.ds,B.kj))
return A.c([new A.mD(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iap:1}
A.mD.prototype={
ao(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.d,a0=a.f,a1=b.a
A.bG(a1,a2.ar("sceneDepth").b)
A.bd(a1,d.a.al())
A.cU(a1,B.b7,1,0,0,0)
A.bQ(a1,d.b.b)
A.m(a1,"uVertexSnapGrid",new A.q(B.e,a0.ax))
A.m(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gG()
A.m(a1,"uViewProjection",new A.q(B.p,new Float32Array(A.S(a))))
A.m(a1,"uModel",new A.q(B.p,new Float32Array(A.S(i.c.af().a))))
A.yS(b,k,!1)
d.lG(b,j.gG().b,p)
h=q.$1(j.gG().a)
i=h.a
if(a1.b!==B.j)A.f(A.j(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.j)A.f(A.j(c))
e=A.i(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.i(o.WebGL2RenderingContext.UNSIGNED_INT):A.i(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bM(g,f)}else{if(a1.b!==B.j)A.f(A.j(c))
m.drawArraysInstanced(A.i(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bM(g,f)}}},
lG(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b0?r.fy:0))
A.m(q,"uAffineWarpStrength",new A.q(B.e,0))
s=this.a.al()
A.bd(q,r.go?s.f4(!1):s)},
$iad:1,
gG(){return this.a}}
A.jl.prototype={
B(){return"_DofBlurAxis."+this.b}}
A.ii.prototype={
gE(){return this.f},
aA(a,b){B.a.k(a.a,new A.aw(this.f,B.M,A.c([new A.Q(this.w,B.i),new A.Q(this.x,B.k)],t.C),!1))},
aw(a){var s=this,r=s.a.aC(new A.bg(s.e,s.b,s.c,B.y,B.du,B.dr)),q=A.cx(s.d),p=t.n,o=s.r===B.ez?new Float32Array(A.S(A.c([1/s.z,0],p))):new Float32Array(A.S(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.mE(new A.ba(s.f,A.c([new A.Q(s.w,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iap:1}
A.mE.prototype={
ao(a){var s,r,q=this
if(a.d.f.d<=0)return
s=a.b
r=s.a
A.bG(r,a.ar(q.f).b)
A.bd(r,q.a.al())
A.cU(r,B.U,1,0,0,0)
A.bQ(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.m(r,"uSource",B.x)
A.m(r,"uTexelStep",new A.q(B.ag,q.e))
A.bj(r,q.c)
s.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.kK.prototype={
gE(){return"dofComposite"},
aA(a,b){var s=this
B.a.k(a.a,new A.aw("dofComposite",B.M,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1))},
aw(a){var s=this,r="dofComposite",q=s.a.aC(new A.bg(r,s.b,s.c,B.y,B.lq,B.k8)),p=A.cx(s.d)
return A.c([new A.mF(new A.ba(r,A.c([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iap:1}
A.mF.prototype={
ao(a){var s,r=this,q=a.ar("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bG(n,q.b)
A.bd(n,r.a.al())
A.bQ(n,r.b.b)
s=t._
A.aB(n,0,s.a(r.d.$0()))
A.m(n,"uSharp",B.x)
A.aB(n,1,s.a(r.e.$0()))
A.m(n,"uBlurred",B.ah)
A.aB(n,2,s.a(r.f.$0()))
A.m(n,"uSceneDepth",B.ek)
A.m(n,"uNear",new A.q(B.e,o.f))
A.m(n,"uFar",new A.q(B.e,o.r))
A.m(n,"uFocusDistance",new A.q(B.e,r.w))
A.m(n,"uFocusRange",new A.q(B.e,r.x))
A.m(n,"uStrength",new A.q(B.e,a.d.f.d))
A.bj(n,r.c)
p.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.l3.prototype={
gE(){return"grade"},
aA(a,b){B.a.k(a.a,new A.aw("grade",B.M,A.c([new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
aw(a){var s=this,r=s.a.aC(new A.bg("grade",s.b,s.c,B.y,B.lo,B.l7)),q=A.cx(s.d),p=s.r,o=s.w
return A.c([new A.mK(new A.ba("grade",A.c([new A.Q(p,B.i),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iap:1}
A.mK.prototype={
ao(a){var s=this,r=a.ar(s.f.a),q=a.b,p=q.a
A.bG(p,a.ar(s.r.a).b)
A.bd(p,s.a.al())
A.bQ(p,s.b.b)
A.aB(p,0,r.b)
A.m(p,"uScene",B.x)
A.aB(p,1,t._.a(s.d.$0()))
A.m(p,"uLut",B.ah)
A.m(p,"uLutSize",new A.q(B.e,s.e))
A.m(p,"uStrength",new A.q(B.e,a.d.f.as))
A.bj(p,s.c)
q.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.iF.prototype={
gE(){return"msaaResolve"},
aA(a,b){B.a.k(a.a,new A.aw("msaaResolve",B.jb,A.c([new A.Q(this.b,B.i),new A.Q(this.c,B.k)],t.C),!0))},
aw(a){var s=this.b,r=this.c
return A.c([new A.mR(new A.ba("msaaResolve",A.c([new A.Q(s,B.i),new A.Q(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iap:1}
A.mR.prototype={
ao(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.c3(this.c),j=a.c3(this.d),i=this.b
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
i.bindFramebuffer(A.i(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.i(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.i(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.i(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(m.WebGL2RenderingContext.NONE)],t.n))}A.aV(i,l,[0,0,s,r.x,0,0,p,q.x,A.i(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.i(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.i(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.i(m.WebGL2RenderingContext.NONE),A.i(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aV(i,l,[0,0,s,r.x,0,0,p,q.x,A.i(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.i(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aV(i,l,[0,0,s,r.x,0,0,p,q.x,A.i(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.i(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.i(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.i(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.i(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.i(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iad:1,
gG(){return this.a}}
A.fW.prototype={}
A.kt.prototype={
ar(a){var s=this.a.h(0,a)
if(s==null)throw A.a(A.j('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
c3(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ar(s)},
$iG6:1}
A.zk.prototype={}
A.iP.prototype={
gE(){return"present"},
aA(a,b){B.a.k(a.a,new A.aw("present",B.jc,A.c([new A.Q(this.f,B.i)],t.C),!1))},
aw(a){var s,r=this,q=r.a.aC(new A.bg("present",r.b,r.c,B.y,B.lr,B.kR)),p=A.cx(r.d)
r.w=p
s=r.f
return A.c([new A.mX(new A.ba("present",A.c([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.b(s.a))
this.w=null}},
$iap:1}
A.mX.prototype={
ao(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a4.c3(a.d),a2=a4.b,a3=a2.a
A.bG(a3,a0)
A.bd(a3,a.a.al())
A.bQ(a3,a.b.b)
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
A.m(a3,"uOutputEncoding",new A.q(B.e,a.e===B.b8?1:0))
A.m(a3,"uToneMap",B.c6)
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
A.m(a3,"uSkyTexture",B.ah)
A.m(a3,"uSkyTextureEnabled",new A.q(B.e,!q&&r?1:0))
r=q?a0:0
A.m(a3,"uSkyRotation",new A.q(B.e,r==null?0:r))
r=q?a0:1
A.m(a3,"uSkyExposure",new A.q(B.e,r==null?1:r))
A.m(a3,"uSkyTextureSrgb",new A.q(B.e,(!q||a0)===!0?1:0))
A.m(a3,"uInverseProjection",new A.q(B.p,new Float32Array(A.S(n.giu().a))))
c=n.y
if(c===$){b=n.a.it()
n.y!==$&&A.nF()
n.y=b
c=b}A.m(a3,"uInverseView",new A.q(B.p,new Float32Array(A.S(c.a))))
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
A.m(a3,"uCloudWind",new A.q(B.ag,new Float32Array(A.S(A.c([r,j==null?0:j],d)))))
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
a2.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.lK.prototype={
gE(){return"ps1Quantize"},
aA(a,b){B.a.k(a.a,new A.aw("ps1Quantize",B.M,A.c([new A.Q(this.e,B.i),new A.Q(this.f,B.k)],t.C),!1))},
aw(a){var s=this,r="ps1Quantize",q=s.a.aC(new A.bg(r,s.b,s.c,B.y,B.lt,B.k0)),p=A.cx(s.d),o=s.e,n=s.f
return A.c([new A.mY(new A.ba(r,A.c([new A.Q(o,B.i),new A.Q(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iap:1}
A.mY.prototype={
ao(a){var s=this,r=a.ar(s.d.a),q=a.b,p=a.d.f,o=q.a
A.bG(o,a.ar(s.e.a).b)
A.bd(o,s.a.al())
A.bQ(o,s.b.b)
A.aB(o,0,r.b)
A.m(o,"uScene",B.x)
A.m(o,"uQuantizationBits",new A.q(B.e,p.ay))
A.m(o,"uDitherStrength",new A.q(B.e,p.Q))
A.bj(o,s.c)
q.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.fq.prototype={}
A.m_.prototype={
gE(){return"shadow"},
aA(a,b){B.a.k(a.a,new A.aw("shadowCaster",B.j9,A.c([new A.Q(this.z,B.k)],t.C),!1))},
aw(a){var s=this,r="shadowCaster",q=s.a.aC(new A.bg(r,s.b,s.c,B.dt,B.ds,B.l5))
return A.c([new A.n0(new A.ba(r,A.c([new A.Q(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iap:1}
A.n0.prototype={
ao(a){var s,r,q,p,o=this,n=a.ar("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bG(s,n.b)
A.bd(s,o.a.al())
A.cU(s,B.b7,1,0,0,0)
return}r=A.BE(l)
o.x.$1(r)
s=m.a
A.bG(s,n.b)
A.bd(s,o.a.al())
A.cU(s,B.b7,1,0,0,0)
A.bQ(s,o.b.b)
A.m(s,"uAlbedo",B.x)
for(s=a.d.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.kH(m,s[p],l,r)},
hl(a,b){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b0?r.fy:0))
s=this.a.al()
A.bd(q,r.go?s.f4(!1):s)},
kH(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gG().r)return
s=a.a
A.m(s,"uUseInstances",B.c5)
n.hi(a,b.gG().c,d)
n.hl(a,b.gG().b)
r=b.gG()
q=n.c.$1(r.a)
A.bj(s,q.a)
s=q.b
r=q.c
if(s)a.eq(r,q.d,0)
else a.aG(r,0)}else if(b instanceof A.dI){p=b.a
if(!p.gG().r)return
if(n.lR(b,c)===B.o5)return
n.hi(a,p.gG().c,d)
A.yS(a,b,!1)
n.hl(a,p.gG().b)
s=p.gG()
q=n.c.$1(s.a)
A.bj(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.er(r,q.d,o,0)
else a.ep(r,0,o)}else throw A.a(A.o("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).t(0),null))},
lR(a,b){return B.o4},
hi(a,b,c){var s=a.a
A.m(s,"uModel",new A.q(B.p,new Float32Array(A.S(b.af().a))))
A.m(s,"uLightViewProjection",new A.q(B.p,new Float32Array(A.S(c.a.a))))},
$iad:1,
gG(){return this.a}}
A.y3.prototype={
$1(a){return this.a.a=a},
$S:69}
A.y4.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:105}
A.m0.prototype={
gE(){return"shadowedWorld"},
aA(a,b){var s=this,r=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.k))
B.a.k(a.a,new A.aw("shadowedWorld",B.d6,r,!1))},
aw(a){var s=this,r="shadowedWorld",q=s.a.aC(new A.bg(r,s.b,s.c,B.lx,B.lp,B.k_)),p=A.c([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.k))
return A.c([new A.n1(new A.ba(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iap:1}
A.n1.prototype={
ao(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.ar("sceneColor"),a7=b4.b,a8=b4.d,a9=a8.c,b0=a8.d,b1=a8.f,b2=a4.z.$0(),b3=a7.a
A.bG(b3,a6.b)
A.bd(b3,a4.a.al())
s=b0.a
A.cU(b3,B.cA,1,s.c,s.b,s.a)
A.bQ(b3,a4.b.b)
A.m(b3,"uAlbedo",B.x)
A.m(b3,"uNormalMap",B.oF)
A.m(b3,"uOrmMap",B.oG)
A.m(b3,"uEmissiveMap",B.oH)
A.m(b3,"uLightmap",B.oI)
s=t._
A.aB(b3,1,s.a(a4.y.$0()))
A.m(b3,"uShadowMap",B.ah)
r=a9.d
q=t.n
A.m(b3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.c([r.a,r.b,r.c],q)))))
A.m(b3,"uShadowMapTexelSize",new A.q(B.ag,new Float32Array(A.S(A.c([1/a4.ch,1/a4.CW],q)))))
A.m(b3,"uShadowFilterRadius",new A.q(B.e,b0.at))
A.m(b3,"uShadowBias",new A.q(B.e,b0.db))
A.aB(b3,2,s.a(a4.at.$0()))
A.m(b3,"uSsao",B.ek)
A.m(b3,"uVertexSnapGrid",new A.q(B.e,b1.ax))
A.m(b3,"uSceneColorSize",new A.q(B.ag,new Float32Array(A.S(A.c([a4.ax,a4.ay],q)))))
A.m(b3,"uViewProjection",new A.q(B.p,new Float32Array(A.S(a9.c.a))))
A.m(b3,"uView",new A.q(B.p,new Float32Array(A.S(a9.a.a))))
A.m(b3,"uLightViewProjection",new A.q(B.p,new Float32Array(A.S(b2.a.a))))
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
r=J.O(r==null?B.bw:r)
o=p==null
while(r.m()){n=r.gq()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.J
k=o?a5:p.c
if(k==null)k=B.a1
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
if(a==null)a=B.a1
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
a1=A.hz(s,0,A.e7(4,"count",t.S),A.C(s).c).bH(0)
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
A.m(b3,"uThermalSourceDissolution"+r,new A.q(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.u)(b3),++a3)a4.fS(a7,b3[a3],r,b0)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.u)(a8),++a3)a4.fS(a7,a8[a3],r,b0)},
fS(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.m(s,"uUseInstances",B.c5)
n.hj(a,b.gG().c)
n.hm(a,b.gG().b,b.gG().e,b.gG().f,c,b.gG().w,d)
r=n.c.$1(b.gG().a)
A.bj(s,r.a)
s=r.b
q=r.c
if(s)a.eq(q,r.d,0)
else a.aG(q,0)}else if(b instanceof A.dI){p=b.a
n.hj(a,p.gG().c)
A.yS(a,b,!0)
n.hm(a,p.gG().b,p.gG().e,p.gG().f,c,p.gG().w,d)
r=n.c.$1(p.gG().a)
A.bj(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.er(q,r.d,o,0)
else a.ep(q,0,o)}else throw A.a(A.o("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).t(0),null))},
hm(a,b,c,d,e,f,g){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aB(o,0,p.a(s.e.$1(q.b)))
A.aB(o,3,p.a(s.f.$1(q.x)))
A.aB(o,4,p.a(s.r.$1(r)))
A.aB(o,5,p.a(s.w.$1(r)))
A.aB(o,6,p.a(s.x.$1(r)))
A.m(o,"uAlphaCutoff",new A.q(B.e,q.fx===B.b0?q.fy:0))
A.m(o,"uOpaqueCoverage",new A.q(B.e,c===B.ap?0:1))
A.m(o,"uAffineWarpStrength",new A.q(B.e,0))
p=t.n
A.m(o,"uMaterialTint",new A.q(B.m,new Float32Array(A.S(A.c([q.d,q.e,q.f],p)))))
A.m(o,"uEmissiveStrength",new A.q(B.e,q.w))
A.m(o,"uUvScaleOffset",new A.q(B.oE,new Float32Array(A.S(A.c([q.db,q.dx,0,0],p)))))
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
if(B.ap===c){switch(d.a){case 0:p=B.fH
break
case 1:p=B.fG
break}break A}if(B.V===c||B.fF===c){p=s.a.al()
break A}}A.bd(o,q.go?p.f4(!1):p)},
hj(a,b){var s=b.af(),r=a.a
A.m(r,"uModel",new A.q(B.p,new Float32Array(A.S(s.a))))
A.m(r,"uNormalMatrix",new A.q(B.p,new Float32Array(A.S(s.eK().a))))},
$iad:1,
gG(){return this.a}}
A.m2.prototype={
gE(){return"ssaoOcclusion"},
aA(a,b){B.a.k(a.a,new A.aw("ssaoOcclusion",B.bf,A.c([new A.Q(this.w,B.k)],t.C),!1))},
aw(a){var s=this,r="ssaoOcclusion",q=s.a.aC(new A.bg(r,s.b,s.c,B.y,B.dx,B.jU)),p=A.cx(s.d)
return A.c([new A.n4(new A.ba(r,A.c([new A.Q(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iap:1}
A.n4.prototype={
ao(a){var s,r,q,p=this,o=a.b,n=a.d.f.c,m=o.a
A.bG(m,a.ar("ssaoRaw").b)
A.bd(m,p.a.al())
if(n<=0){A.cU(m,B.U,1,1,1,1)
return}A.cU(m,B.U,1,0,0,0)
s=p.e.$0()
A.bQ(m,p.b.b)
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
o.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.m1.prototype={
gE(){return"ssaoBlur"},
aA(a,b){B.a.k(a.a,new A.aw("ssaoBlur",B.bf,A.c([new A.Q(this.y,B.i),new A.Q(this.z,B.k)],t.C),!1))},
aw(a){var s=this,r="ssaoBlur",q=s.a.aC(new A.bg(r,s.b,s.c,B.y,B.li,B.l9)),p=A.cx(s.d)
return A.c([new A.n3(new A.ba(r,A.c([new A.Q(s.y,B.i),new A.Q(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iap:1}
A.n3.prototype={
ao(a){var s,r,q=this,p=a.b,o=p.a
A.bG(o,a.ar("ssaoBlurred").b)
A.bd(o,q.a.al())
if(a.d.f.c<=0){A.cU(o,B.U,1,1,1,1)
return}A.cU(o,B.U,1,0,0,0)
s=q.f.$0()
A.bQ(o,q.b.b)
r=t._
A.aB(o,0,r.a(q.d.$0()))
A.m(o,"uSsaoRaw",B.x)
A.aB(o,1,r.a(q.e.$0()))
A.m(o,"uSceneDepth",B.ah)
A.m(o,"uTexelSize",new A.q(B.ag,new Float32Array(A.S(A.c([1/q.r,1/q.w],t.n)))))
A.m(o,"uNear",new A.q(B.e,s.f))
A.m(o,"uFar",new A.q(B.e,s.r))
A.bj(o,q.c)
p.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.mf.prototype={
gE(){return"vhs"},
aA(a,b){var s=this.w
a.b.k(0,s.a)
B.a.k(a.a,new A.aw("vhs",B.M,A.c([new A.Q(this.r,B.i),new A.Q(s,B.R),new A.Q(s,B.k)],t.C),!1))},
aw(a){var s=this,r=s.a.aC(new A.bg("vhs",s.b,s.c,B.y,B.ll,B.k2)),q=A.cx(s.d),p=s.r,o=s.w
return A.c([new A.nc(new A.ba("vhs",A.c([new A.Q(p,B.i),new A.Q(o,B.R),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iap:1}
A.nc.prototype={
ao(a){var s,r=this,q=a.ar(r.f.a),p=a.ar(r.r.a),o=a.b,n=a.d.f,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bG(m,p.b)
A.bd(m,r.a.al())
A.bQ(m,r.b.b)
A.aB(m,0,q.b)
A.m(m,"uScene",B.x)
A.aB(m,1,t._.a(r.d.$0()))
A.m(m,"uHistory",B.ah)
A.m(m,"uTime",new A.q(B.e,r.e.$0()))
A.m(m,"uChromaWeight",new A.q(B.e,n.ch))
A.m(m,"uTrackingWeight",new A.q(B.e,l))
A.m(m,"uNoiseWeight",new A.q(B.e,n.cx))
A.m(m,"uHeadSwitchWeight",new A.q(B.e,n.cy))
A.m(m,"uDropoutWeight",new A.q(B.e,n.db))
A.m(m,"uGhostWeight",new A.q(B.e,s))
A.bj(m,r.c)
o.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.mo.prototype={
gE(){return"volumetricLight"},
aA(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.k(p,new A.aw("volumetricLight",B.bf,A.c([new A.Q(s.x,B.i),new A.Q(r,B.k)],q),!1))
B.a.k(p,new A.aw("volumetricComposite",B.M,A.c([new A.Q(r,B.i),new A.Q(s.y,B.i),new A.Q(s.z,B.k)],q),!1))},
aw(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aC(new A.bg(l,i,m.c,B.y,B.dx,B.k6)),g=m.e,f=A.cx(g),e=m.Q
B.a.k(e,f)
s=m.w
r=t.C
q=A.c([new A.ne(new A.ba(l,A.c([new A.Q(m.x,B.i),new A.Q(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aC(new A.bg(k,i,m.d,B.y,B.lz,B.la))
n=A.cx(g)
B.a.k(e,n)
B.a.k(q,new A.nd(new A.ba(k,A.c([new A.Q(s,B.i),new A.Q(m.y,B.i),new A.Q(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
a_(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p)q.deleteVertexArray(A.b(s[p].a))
B.a.P(s)},
$iap:1}
A.ne.prototype={
ao(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=b1.ar(a3.d),a6=b1.b,a7=a3.f.$0(),a8=b1.d.d,a9=a8.go,b0=a6.a
A.bG(b0,a5.b)
A.bd(b0,a3.a.al())
A.cU(b0,B.U,1,0,0,0)
A.bQ(b0,a3.b.b)
A.aB(b0,0,t._.a(a3.e.$0()))
A.m(b0,"uSceneDepth",B.x)
A.m(b0,"uNear",new A.q(B.e,a7.f))
A.m(b0,"uFar",new A.q(B.e,a7.r))
A.m(b0,"uViewProjection",new A.q(B.p,new Float32Array(A.S(a7.c.a))))
s=a7.a.a
A.m(b0,"uView",new A.q(B.p,new Float32Array(A.S(s))))
A.m(b0,"uInverseProjection",new A.q(B.p,new Float32Array(A.S(a7.giu().a))))
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
else{q=a9.a.ga8()
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
o=new A.B(n*l+k*j+q*i,n*h+k*g+q*f,n*e+k*d+q*s[10]).ga8()}c=r?a4:a9.b
if(c==null)c=B.N
A.m(b0,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.c([o.a,o.b,o.c],p)))))
A.m(b0,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.c([c.a,c.b,c.c],p)))))
b=A.Kp(4,a7.d,a8.k2)
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
a6.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.nd.prototype={
ao(a){var s=this,r=a.c3(s.e),q=a.c3(s.d),p=a.b,o=p.a
A.bG(o,r.b)
A.C0(o,1)
A.bd(o,B.cH)
A.bQ(o,s.b.b)
A.aB(o,0,q.b)
A.m(o,"uVolumetric",B.x)
A.m(o,"uVolumetricStrength",B.c6)
A.bj(o,s.c)
p.aG(3,0)},
$iad:1,
gG(){return this.a}}
A.j_.prototype={}
A.ms.prototype={
gE(){return"world"},
aA(a,b){B.a.k(a.a,new A.aw("worldOpaqueTransparent",B.d6,A.c([new A.Q(this.e,B.k)],t.C),!1))},
aw(a){var s=this,r=s.a.aC(new A.bg("safeWorld",s.b,s.c,B.lA,B.y,B.kr)),q=s.e
return A.c([new A.nh(new A.ba("worldOpaqueTransparent",A.c([new A.Q(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iap:1}
A.nh.prototype={
ao(a){var s,r,q,p,o,n=this,m=a.b,l=a.d,k=l.d,j=m.a
A.bG(j,a.ar(n.d).b)
A.bd(j,n.a.al())
s=k.a
A.cU(j,B.cA,1,s.c,s.b,s.a)
A.bQ(j,n.b.b)
A.m(j,"uViewProjection",new A.q(B.p,new Float32Array(A.S(l.c.c.a))))
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
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.hz(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.hz(m,l[o])},
hz(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dI){s=b.a
n.hA(a,s.gG().c)
A.yS(a,b,!0)
r=n.c.$1(s.gG().a)
A.bj(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.er(p,r.d,o,0)
else a.ep(p,0,o)}else if(t.yz.b(b)){q=a.a
A.m(q,"uUseInstances",B.c5)
n.hA(a,b.gG().c)
r=n.c.$1(b.gG().a)
A.bj(q,r.a)
q=r.b
p=r.c
if(q)a.eq(p,r.d,0)
else a.aG(p,0)}else throw A.a(A.o("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).t(0),null))},
hA(a,b){var s=b.af(),r=a.a
A.m(r,"uModel",new A.q(B.p,new Float32Array(A.S(s.a))))
A.m(r,"uNormalMatrix",new A.q(B.p,new Float32Array(A.S(s.eK().a))))},
$iad:1,
gG(){return this.a}}
A.oQ.prototype={
cH(a){var s,r,q
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
else q=r===0?B.bL:B.Q
return new A.dO(q,s)},
j6(a){var s,r=this.cH(a).a
A:{if(B.G===r){s=B.mP
break A}if(B.Q===r){s=B.dT
break A}s=B.ax
break A}return s}}
A.l1.prototype={
B(){return"GpuBufferUsage."+this.b}}
A.ip.prototype={
B(){return"GpuBufferKind."+this.b}}
A.is.prototype={
B(){return"GpuTextureFilter."+this.b}}
A.it.prototype={
B(){return"GpuTextureWrap."+this.b}}
A.l0.prototype={}
A.l2.prototype={}
A.f7.prototype={
B(){return"GpuTargetAttachment."+this.b}}
A.ir.prototype={}
A.iq.prototype={
B(){return"GpuDeviceStatus."+this.b}}
A.fp.prototype={
B(){return"ShaderCompileStage."+this.b}}
A.j3.prototype={
t(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dj.prototype={
B(){return"UniformType."+this.b}}
A.q.prototype={}
A.fZ.prototype={
B(){return"ClearMask."+this.b}}
A.kG.prototype={
aG(a,b){var s=this.a
if(s.b!==B.j)A.f(A.j(u.k))
s.a.drawArrays(A.i(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bM(a,1)},
ep(a,b,c){var s=this.a
if(s.b!==B.j)A.f(A.j(u.k))
s.a.drawArraysInstanced(A.i(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bM(a,c)},
eq(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.f(A.j(u.k))
s=v.G
r=A.i(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.i(s.WebGL2RenderingContext.UNSIGNED_INT):A.i(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bM(a,1)},
er(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.f(A.j(u.k))
s=v.G
r=A.i(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.i(s.WebGL2RenderingContext.UNSIGNED_INT):A.i(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aV(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bM(a,c)},
$iEX:1}
A.hc.prototype={
B(){return"GpuResourceCandidateState."+this.b}}
A.hn.prototype={
iy(a){var s=this.b.h(0,a)
if(s==null)throw A.a(A.j("resource is not in candidate: "+a))
return s}}
A.pW.prototype={
gq(){var s=this.c
if(s==null)throw A.a(A.j("GPU resource adapter is not initialized"))
return s},
dC(a){var s,r,q,p,o,n=this
if(n.e)A.f(A.j("GPU resource adapter is disposed"))
if(n.c==null)throw A.a(A.j("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.a(A.j("GPU resource candidate is already open"))
s=A.iM(a)
p=n.b
r=p.dC(s)
try{q=new A.hn(r,n.e0(s,a),B.at)
n.d=q
return q}catch(o){p.eV(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.a(A.j("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.e3(s.b)
r.b.a_()
r.c=null
r.e=!0},
e0(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("I<1>")
s=new A.I(k,i.a(new A.pX()),j)
for(h=s,g=J.O(h.a),h=new A.U(g,h.b,h.$ti.i("U<1>")),f=a.a;h.m();){r=g.gq()
q=A.C6(f,a.fQ(r,a5))
J.e9(a3,q)
J.b7(a2,r,q)}e=A.K(new A.I(k,i.a(new A.pY()),j),j.i("r.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.DB(J.Es(o,11))
if(i){h=J.b1(a2,"sceneColor")
h.toString
J.b7(a2,o,h)}else{h=n
if(typeof h!=="number")return h.pA()
if(h>=2){h=J.b1(a2,"sceneColor#1")
h.toString
J.b7(a2,o,h)}else{m=A.C6(f,a.fQ(o,a5))
J.e9(a3,m)
J.b7(a2,o,m)}}}a0=A.aX(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("bM<1>"),a0=new A.bM(a0,k),a0=new A.al(a0,a0.gu(0),k.i("al<a0.E>")),j=a.a,i=t.V,k=k.i("a0.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.zt(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
fQ(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.ir(s,s,1,B.bd,!0)}if(a==="sceneDepth")return new A.ir(n,m,1,B.bd,!0)
r=B.c.V(a,"ssao")||B.c.V(a,"bloomBlur")||B.c.V(a,"dofBlur")||B.c.V(a,"volumetricLight")
q=r?B.d.ad(n+1,2):n
p=r?B.d.ad(m+1,2):m
s=a==="sceneColor"
o=s||B.c.V(a,"sceneColor#")
s=s?b.d:1
return new A.ir(q,p,s,o?B.d4:B.j5,o)},
e3(a){var s,r,q,p,o,n=A.fc(t.mf.a(a).gam(),t._)
for(n=A.fE(n,n.r,A.v(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.zt(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fC(a){if(this.d!==a||a.c!==B.at)throw A.a(A.j("GPU resource candidate is not open"))}}
A.pX.prototype={
$1(a){return!B.c.V(A.w(a),"sceneColor#")},
$S:3}
A.pY.prototype={
$1(a){return B.c.V(A.w(a),"sceneColor#")},
$S:3}
A.hI.prototype={
B(){return"_SlotState."+this.b}}
A.eM.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.de.prototype={
aH(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.eM(B.aZ,n.i("eM<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.pW
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bR(a){return this.aH(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.a(A.et(B.d9,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.et(B.da,a))
s=q.b
if(s===B.b_||s===B.aZ)throw A.a(A.et(B.aO,a))},
bC(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
f0(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Z(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb3(b)},
aL(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.a(A.et(B.d9,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.et(B.da,a))
r=q.b
if(r===B.b_||r===B.aZ)throw A.a(A.et(B.jn,a))
q.b=B.b_
q.sb3(null)
B.a.k(p.c,s);++p.e},
bY(){return new A.bI(this.o3(),this.$ti.i("bI<+(1,2)>"))},
o3(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bY(a,b,c){if(b===1){p.push(c)
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
A.kq.prototype={
B(){return"BlendEquation."+this.b}}
A.f1.prototype={
B(){return"BlendFactor."+this.b}}
A.kB.prototype={
B(){return"CullFace."+this.b}}
A.kE.prototype={
B(){return"DepthFunc."+this.b}}
A.h7.prototype={
f4(a){var s=this
return A.AT(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bs.prototype={
B(){return"StateField."+this.b}}
A.vr.prototype={
ng(a){var s,r=this.a
if(r==null)return A.hi(B.kU,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.k(0,B.bY)
if(r.b!==a.b)s.k(0,B.bZ)
if(r.c!==a.c)s.k(0,B.c_)
if(r.d!==a.d)s.k(0,B.c0)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.c1)
if(r.r!==a.r)s.k(0,B.c2)
if(r.w!==a.w)s.k(0,B.c3)
if(r.x!==a.x)s.k(0,B.c4)
return s}}
A.e2.prototype={$icI:1}
A.jP.prototype={}
A.jO.prototype={}
A.ng.prototype={}
A.mq.prototype={
k7(a){var s=this,r=A.b(s.a.canvas)
s.c=A.Z(new A.vo(s))
s.d=A.Z(new A.vp(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
iJ(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.cc(A.i(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.cc(A.i(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.cc(A.i(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.cc(A.i(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.cc(A.i(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.p(0,"EXT_texture_filter_anisotropic")
if(d){s=l.h7(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.p(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.p(0,"EXT_color_buffer_float")
p=e.p(0,"EXT_color_buffer_half_float")
o=e.p(0,"WEBGL_lose_context")
e=l.a
n=A.i2(e.getParameter(A.i(k.WebGL2RenderingContext.RENDERER)))
m=A.i2(e.getParameter(A.i(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.td("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
cc(a){var s=A.i2(this.a.getParameter(a))
return typeof s=="number"?B.b.aE(s):0},
h7(a){var s=A.i2(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iFj:1}
A.vo.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.a2},
$S:1}
A.vp.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.ws.prototype={
mh(){var s,r=this
if(r.b!==B.j)A.f(A.j(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.e2(new A.ng(s))},
hs(a){var s=a.a
if(!(s instanceof A.ng))throw A.a(A.a7(a,"query","is not a GPU timer query"))
return s}}
A.nf.prototype={}
A.vn.prototype={}
A.vq.prototype={
n6(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.vn(A.GK(s))}}
A.kI.prototype={
C(){var s=this
return A.E(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.km.prototype={
go8(){var s=this.cx
return new A.ao(s,A.v(s).i("ao<2>")).b6(0,0,new A.oi(),t.i)},
jN(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.t()
s=j.a
A.G(i.connect(A.b(s.destination)))
r=j.d
r===$&&A.t()
A.b(r.gain).value=0.25
q=j.e
q===$&&A.t()
A.b(q.gain).value=0.12
p=j.f
p===$&&A.t()
A.b(p.gain).value=0.4
o=j.r
o===$&&A.t()
A.b(o.gain).value=0.2
n=j.w
n===$&&A.t()
A.b(n.gain).value=0.4
m=j.x
m===$&&A.t()
A.b(m.gain).value=0.1
l=j.y
l===$&&A.t()
A.b(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.G(r[k].connect(i))
r=j.z
r===$&&A.t()
A.b(r.gain).value=1
q=j.Q
q===$&&A.t()
A.b(q.gain).value=0.35
A.G(o.connect(r))
A.G(n.connect(r))
A.G(p.connect(r))
p=j.as
p===$&&A.t()
A.G(r.connect(p))
A.G(p.connect(q))
A.G(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k3!==$&&A.b6()
j.k3=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k4!==$&&A.b6()
j.k4=p
A.G(q.connect(p))
A.G(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.G(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.ok!==$&&A.b6()
j.ok=q
i=A.b(s.createChannelMerger(2))
j.p1!==$&&A.b6()
j.p1=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p2!==$&&A.b6()
j.p2=r
A.G(p.connect(q))
A.G(i.connect(A.b(s.destination)))
j.fw()},
fw(){var s,r=this,q=r.ok
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
cC(){var s=this.a
if(A.w(s.state)==="suspended")A.b(s.resume())},
cY(a){var s,r,q=this
if(B.c.V(a,"vo-")){s=q.y
s===$&&A.t()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.V(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.t()
return s}r=B.ln.h(0,a)
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
kS(){var s,r,q,p,o,n,m,l=this.a,k=A.a1(l.sampleRate),j=B.b.ai(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aB()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dB(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ay.aB()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.cY(a)))
r.onended=A.Z(new A.ol(r,q))
r.start()
return!0},
iF(a){return this.dB(a,1)},
oH(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
if(o==null)return
s=this.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=d
q=A.b(s.createGain())
A.b(q.gain).value=c
p=A.b(s.createStereoPanner())
A.b(p.pan).value=B.b.n(e,-1,1)
A.G(r.connect(q))
A.G(q.connect(p))
A.G(p.connect(this.cY(a)))
r.onended=A.Z(new A.ok(r,q,p))
r.start(A.a1(s.currentTime)+B.b.n(b,0,120))},
mc(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.n(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.u)(a5),++q){p=a5[q]
s.l(0,p.a[3],p)}r=a4.ax
o=A.v(r).i("ae<1>")
o=A.K(new A.ae(r,o),o.i("r.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.u)(o),++q){m=o[q]
if(!s.K(m))a4.eg(m)}for(s=new A.ac(s,s.r,s.e,s.$ti.i("ac<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.K(k[3]))a4.eg(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.eg(k[3])
h=k[3]
g=r.h(0,h)
if(g==null){f=k[0]
e=k[6]
d=k[5]
c=A.b(o.createBufferSource())
c.buffer=j
c.loop=!0
b=A.b(o.createGain())
A.b(b.gain).value=0
a=A.b(o.createBiquadFilter())
a.type="highpass"
A.b(a.frequency).value=20
a0=A.b(o.createBiquadFilter())
a0.type="lowpass"
A.b(a0.frequency).value=2e4
A.G(c.connect(a))
A.G(a.connect(a0))
A.G(a0.connect(b))
a1=A.b(o.createStereoPanner())
A.b(a1.pan).value=e
a2=A.b(o.createGain())
A.b(a2.gain).value=d
A.G(b.connect(a1))
A.G(a1.connect(a4.cY(f)))
A.G(b.connect(a2))
l===$&&A.t()
A.G(a2.connect(l))
c.start()
g=new A.jN(c,b,a,a0,a1,a2,f)
r.l(0,h,g)}a3=A.a1(o.currentTime)
h=g.b
A.b(A.b(h.gain).cancelScheduledValues(a3))
A.b(A.b(h.gain).setValueAtTime(A.a1(A.b(h.gain).value),a3))
f=a3+0.12
A.b(A.b(h.gain).linearRampToValueAtTime(B.b.n(k[1],0,1),f))
h=g.d
A.b(A.b(h.frequency).cancelScheduledValues(a3))
A.b(A.b(h.frequency).setValueAtTime(A.a1(A.b(h.frequency).value),a3))
A.b(A.b(h.frequency).linearRampToValueAtTime(B.b.n(k[4],80,2e4),f))
h=g.c
A.b(A.b(h.frequency).cancelScheduledValues(a3))
A.b(A.b(h.frequency).setValueAtTime(A.a1(A.b(h.frequency).value),a3))
A.b(A.b(h.frequency).linearRampToValueAtTime(B.b.n(k[2],20,16e3),f))
h=g.e
A.b(A.b(h.pan).cancelScheduledValues(a3))
A.b(A.b(h.pan).setValueAtTime(A.a1(A.b(h.pan).value),a3))
A.b(A.b(h.pan).linearRampToValueAtTime(B.b.n(k[6],-1,1),f))
h=g.f
A.b(A.b(h.gain).cancelScheduledValues(a3))
A.b(A.b(h.gain).setValueAtTime(A.a1(A.b(h.gain).value),a3))
A.b(A.b(h.gain).linearRampToValueAtTime(B.b.n(k[5],0,1),f))}},
eg(a){var s,r,q=this.ax.a9(0,a)
if(q==null)return
s=A.a1(this.a.currentTime)
r=q.b
A.b(A.b(r.gain).cancelScheduledValues(s))
A.b(A.b(r.gain).setValueAtTime(A.a1(A.b(r.gain).value),s))
A.b(A.b(r.gain).linearRampToValueAtTime(0,s+0.18))
A.BJ(B.fJ,q.gnj())},
iG(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ay.aB()*0.12)
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
A.b(n.gain).value=Math.pow(10,g/20)}else{s=j.ch!=null
if(s){s=j.ch
s.toString
l=j.fK(j.b.iD(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.l(0,o,new A.hJ(r,q,n,o,p,e,B.b.n(m,0,1)))
r.onended=A.Z(new A.oj(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.cY(a)))
r.start()},
oG(a,b,c,d){return this.iG(a,b,c,1,d,null,null,null)},
fK(a){var s,r,q,p,o,n,m,l
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
fm(a){var s,r,q,p,o=this
if(o.cy)return
s=o.at.h(0,a)
if(s==null)return
o.cy=!0
r=o.a
q=A.b(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.b(r.createGain())
A.b(p.gain).value=0.6
A.G(q.connect(p))
r=o.e
r===$&&A.t()
A.G(p.connect(r))
q.onended=A.Z(new A.om(o,q,p))
q.start()
o.db=q},
dO(a){if(this.p3===a)return
this.p3=a
this.fw()},
jh(a){var s,r,q=this
q.dO(a.b===B.cl)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.b2?1:0.55
r=q.c
r===$&&A.t()
r=A.b(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.t()
A.b(s.gain).value=0.35*q.R8},
bw(a,b,c,d,e,f){var s,r,q=this
q.fx=B.b.n(c==null?q.fx:c,0,1)
q.fy=B.b.n(f==null?q.fy:f,0,1)
q.go=B.b.n(b==null?q.go:b,0,1)
q.id=B.b.n(a==null?q.id:a,0,1)
q.k1=B.b.n(d==null?q.k1:d,0,1)
if(e!=null)q.k2=e
s=q.d
s===$&&A.t()
A.b(s.gain).value=0.25*q.go
s=q.r
s===$&&A.t()
A.b(s.gain).value=0.2*q.go
s=q.w
s===$&&A.t()
A.b(s.gain).value=0.4*q.go
s=q.x
s===$&&A.t()
A.b(s.gain).value=0.1*q.go
s=q.f
s===$&&A.t()
A.b(s.gain).value=0.4*q.id
s=q.e
s===$&&A.t()
A.b(s.gain).value=0.12*q.k1
s=q.y
s===$&&A.t()
A.b(s.gain).value=q.fy
s=q.c
s===$&&A.t()
s=A.b(s.gain)
r=q.k2?0:q.fx*q.p4
s.value=r},
fe(a){var s=null
return this.bw(s,s,s,s,a,s)},
je(a){var s=null
return this.bw(s,s,a,s,s,s)},
jg(a){var s=null
return this.bw(s,s,s,s,s,a)},
jd(a){var s=null
return this.bw(s,a,s,s,s,s)},
jc(a){var s=null
return this.bw(a,s,s,s,s,s)},
jf(a){var s=null
return this.bw(s,s,s,a,s,s)},
jb(a){if(this.ch===a)return
this.ch=a
this.bN()},
bN(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cD(p,g)
m=n==null?i.fK(h.iD(p,g)):new A.aH(n.c,n.d,n.e)
l=A.a1(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.a1(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.a1(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.b.n(m.c,0,1)}}}
A.oi.prototype={
$2(a,b){return Math.max(A.ax(a),t.jS.a(b).r)},
$S:72}
A.oh.prototype={
$1(a){return this.iZ(t.q.a(a))},
iZ(a){var s=0,r=A.aL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aM(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a6(A.av(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a6(A.av(A.b(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a6(A.av(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ah(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$$1,r)},
$S:73}
A.ol.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.ok.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.oj.prototype={
$1(a){var s=this.a.cx.a9(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.om.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hJ.prototype={}
A.jN.prototype={
a_(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.kn.prototype={
B(){return"AudioCategory."+this.b}}
A.o7.prototype={
jP(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.a(B.iI)
if(!B.a.a2(A.c([d.a,d.b,d.c],t.n),new A.o8()))throw A.a(B.hw)},
gE(){return this.a}}
A.o8.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.nL.prototype={
jM(a,b){if(this.a.length===0)throw A.a(B.hf)
if(!B.a.a2(A.c([a.a,a.b,a.c],t.n),new A.nM()))throw A.a(B.hE)}}
A.nM.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.i6.prototype={
A(){var s=t.n
if(B.a.M(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.nN()))throw A.a(B.i1)
s=B.a.M(A.c([0,0.55,1],s),new A.nO())
if(s)throw A.a(B.it)},
cD(a,b){this.A()
if(a.ax&&!a.ay&&!a.z)return new A.aH(-1.5,2e4,0)
if(a.ay)return new A.aH(-28,320,1)
return new A.aH(-12,1100,0.55)},
pi(a){return this.cD(a,null)}}
A.nN.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.nO.prototype={
$1(a){A.ax(a)
return a<0||a>1},
$S:4}
A.o3.prototype={
jO(a){var s=A.v(a)
if(new A.ae(a,s.i("ae<1>")).M(0,new A.o5())||new A.ao(a,s.i("ao<2>")).M(0,new A.o6()))throw A.a(B.iD)}}
A.o5.prototype={
$1(a){return A.w(a).length===0},
$S:3}
A.o6.prototype={
$1(a){var s
t.a.a(a)
s=J.aQ(a)
return s.gR(a)||s.M(a,new A.o4())},
$S:74}
A.o4.prototype={
$1(a){return A.w(a).length===0},
$S:3}
A.z5.prototype={}
A.of.prototype={}
A.o9.prototype={
jQ(a,b,c){var s
for(s=this.b.gam(),s=s.gv(s);s.m();)s.gq().A()},
iS(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.a(A.j("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.a(A.j("audio listener room missing: "+a0))
r=this.lE(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.ct
e=f.cD(h,a1.h(0,g))
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.u)(o),++i)s.push(o[i].a)
o=B.b.n(l,-60,0)
m=B.d.n(k,120,2e4)
g=B.b.n(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.W(p,"; ")
b=t.N
s=A.ab(s,b)
b=A.ab(q,b)
if(!isFinite(g)||g<0||g>1)A.f(B.is)
return new A.of(s,b,o,m,g,n,c)},
cD(a,b){return this.iS(a,b,B.bE)},
lE(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.pG
s=t.N
r=A.E([a0,0],s,t.i)
q=A.E([a0,B.a3],s,t.Es)
p=A.aF([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.e,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.Y(k,new A.oa(r))
j=B.a.ga1(k)
p.a9(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.jh(s,!0)}i=o.aS(j)
h=A.K(i,i.$ti.i("r.E"))
B.a.Y(h,new A.ob())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cA(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.ct:d).pi(f)
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
p.k(0,e)}}}return B.pF}}
A.oa.prototype={
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
$S:75}
A.ob.prototype={
$2(a,b){var s=t.e
return B.c.I(s.a(a).a,s.a(b).a)},
$S:76}
A.jh.prototype={}
A.fX.prototype={}
A.oN.prototype={
iw(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.h(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Ek().bd(q).ga8()
p.d=q
p.c=p.b.bd(q).ga8()
p.a=a}}
A.px.prototype={}
A.l8.prototype={
dH(a){if(this.at)return
A.qH(a,"requestPointerLock",t.X)},
fb(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bW(r,r.r,r.e,A.v(r).i("bW<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.O(o);m.m();){l=m.gq()
if(l.length!==0)n.k(0,l)}s.oR(p,n)}this.b0()},
dS(a){var s,r,q,p,o,n,m=this
if(m.ch.dS(a))for(s=m.CW.aR("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.p(0,n)){m.d.k(0,n)
break}if(m.e.p(0,n)&&!p.p(0,n)){m.f.k(0,n)
break}}},
oI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.O(t.ik.b(c)?c:new A.b9(c,A.C(c).i("b9<1,aj?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gq()
if(r==null||!A.T(r.connected)||A.w(r.mapping)!=="standard")break A
c=A.w(r.id)
q=A.w(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.O(t.dd.b(n)?n:new A.b9(n,A.C(n).i("b9<1,z>")))
while(n.m())o.push(n.gq())
p=A.c([],p)
d=d.a(r.buttons)
d=J.O(t.nx.b(d)?d:new A.b9(d,A.C(d).i("b9<1,aj>")))
while(d.m()){r=d.gq()
p.push(A.T(r.pressed)?1:A.a1(r.value))}s=new A.m3(!0,c,q,o,p)
break}}d=s==null
m=A.GX(d?B.op:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aR(e),q.gaF(q))
q=f.r
q.kO(A.v(q).i("l(1)").a(new A.qz(l)),!0)
for(p=l.gv(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.p(0,h)&&!q.p(0,h)){g=j.h(0,e)
if(B.a.p(g==null?B.n:g,h)){if(i.eI())n.k(0,h)}else n.k(0,h)}}f.e=A.hi(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aR(e),l.gaF(l))){d=r.a(f.c)
d=!B.a.M(c.aR(e),d.gaF(d))}}if(d)i.eJ()},
l5(a){var s=this
A.b(a)
if(A.T(a.repeat))return
if(!s.ay)return
if(s.c.k(0,A.w(a.code)))if(B.a.p(s.CW.aR("interact"),A.w(a.code))){if(s.ch.eI())s.d.k(0,A.w(a.code))}else s.d.k(0,A.w(a.code))},
l7(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a9(0,A.w(a.code))
r=this.CW
if(B.a.p(r.aR(q),A.w(a.code))){t.Q.a(s)
s=!B.a.M(r.aR(q),s.gaF(s))}else s=!1
if(s)this.ch.eJ()},
lb(a){var s,r=this
A.b(a)
if(!r.ay)return
s="Mouse"+A.i(a.button)
if(r.c.k(0,s))if(B.a.p(r.CW.aR("interact"),s)){if(r.ch.eI())r.d.k(0,s)}else r.d.k(0,s)},
lf(a){var s,r="interact",q="Mouse"+A.i(A.b(a).button),p=this.c
p.a9(0,q)
s=this.CW
if(B.a.p(s.aR(r),q)){t.Q.a(p)
p=!B.a.M(s.aR(r),p.gaF(p))}else p=!1
if(p)this.ch.eJ()},
lh(a){var s
A.b(a)
if(!this.ay)return
s=A.a1(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.k(0,s)
this.d.k(0,s)},
ld(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.h5(a,"movementX")
s.as=s.as+s.h5(a,"movementY")},
l9(a){var s=this,r=s.b.pointerLockElement==null
s.at=!r
s.as=s.Q=0
if(r)s.b0()},
lj(a){this.b0()},
h5(a,b){var s=A.CE(a[b])
if(s==null)s=null
return s==null?0:s},
cS(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fc(n.c,t.N)
for(r=n.e,r=A.fE(r,r.r,A.v(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.p(0,o))s.k(0,o)}t.Q.a(s)
return B.a.M(n.CW.aR(a),s.gaF(s))},
b0(){var s=this
s.c.P(0)
s.d.P(0)
s.f.P(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.eS()}}
A.qz.prototype={
$1(a){return!this.a.p(0,A.w(a))},
$S:3}
A.qy.prototype={
aR(a){var s=this.a.h(0,a)
return s==null?B.n:s},
oR(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.K(a))return
r=t.N
q=A.a_(r)
for(p=A.fE(b,b.r,A.v(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.k(0,n)}s.l(0,a,A.ab(q,r))},
br(a,b){var s,r,q
t.Q.a(b)
for(s=this.aR(a),r=s.length,q=0;q<r;++q)if(b.a9(0,s[q]))return!0
return!1}}
A.qC.prototype={
eI(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
eJ(){this.c=this.b=!1
this.d=0},
dS(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.n(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eS(){this.c=this.b=!1
this.d=0}}
A.b8.prototype={
gE(){return this.a}}
A.qX.prototype={}
A.qU.prototype={
oL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.K(b,t.je)
B.a.L(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p].a
if(!s.k(0,o))throw A.a(A.o("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.n(h,t.N)
i.fW(n,i.d,a,b,i.a,j,m)
i.fW(l,i.e,a,c,i.b,j,k)
return new A.qX(n,l,j)},
fW(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("H<1,+effectiveScore,light,score(z,b8,z)>")
r=A.K(new A.H(d,k.i("+effectiveScore,light,score(z,b8,z)(1)").a(new A.qV(this,c,b)),s),s.i("a0.E"))
B.a.Y(r,new A.qW())
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
A.qV.prototype={
$1(a){var s,r
t.je.a(a)
s=a.c.ac(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jA(this.c.p(0,a.a)?r*1.15:r,a,r)},
$S:78}
A.qW.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:79}
A.pb.prototype={
ei(a,b){var s,r,q,p,o,n,m,l=this
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
A.r2.prototype={
jA(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.ei(b,c)},
m5(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.h(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.O(s,6.283185307179586)
r=Math.sin(s)
return new A.h(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.bP.prototype={
dE(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.o.dP(s,0,l,k)
m.a=s}r=b.ac(0,a).bd(d.ac(0,a)).ga8()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.j7(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=0+h
l=A.j7(m.a,l,b,r,q,p,o,n,f,k,0,0)
m.b=l
j=0+i
l=A.j7(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=l
l=A.j7(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
k=A.j7(m.a,l,c,r,q,p,o,n,f,k,j,0)
m.b=k
m.b=A.j7(m.a,k,d,r,q,p,o,n,f,0,j,0)},
aO(a,b,c,d,e){return this.dE(a,b,c,d,e,1,!1,1,1)},
eO(a,b,c,d,e,f,g){return this.dE(a,b,c,d,e,1,!1,f,g)},
eN(a,b,c,d,e,f,g){return this.dE(a,b,c,d,e,f,g,1,1)},
iI(a,b,c,d,e,f){return this.dE(a,b,c,d,e,f,!1,1,1)}}
A.h.prototype={
a4(a,b){return new A.h(this.a+b.a,this.b+b.b,this.c+b.c)},
ac(a,b){return new A.h(this.a-b.a,this.b-b.b,this.c-b.c)},
a6(a,b){return new A.h(this.a*b,this.b*b,this.c*b)},
be(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.h(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga8(){var s=this,r=s.gu(0)
return r<1e-9?new A.h(0,0,0):new A.h(s.a/r,s.b/r,s.c/r)}}
A.ve.prototype={
A(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.M(A.c([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.vf()))throw A.a(B.h7)
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
if(q)throw A.a(B.he)}}
A.vf.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.cw.prototype={
A(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.a(B.i8)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a2(A.c([s,r,q,p,o],t.n),new A.vg()))throw A.a(B.hC)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.a(B.iB)},
gE(){return this.a}}
A.vg.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.eF.prototype={
A(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a2(A.c([o,s,r,q],t.n),new A.vb())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.a(B.ho)},
gE(){return this.a}}
A.vb.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.vc.prototype={
A(){var s,r,q,p,o,n,m,l=this,k=A.a_(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.A()
if(!k.k(0,p.a))throw A.a(B.ie)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.A()
if(!k.k(0,o.a))throw A.a(B.ig)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a2(A.c([s,r,n,m],t.n),new A.vd())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.a(B.hu)}}
A.vd.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.va.prototype={
cB(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
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
i=i===B.aa?80:120
B.a.k(j,new A.cw("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.k(j,new A.cw("exterior-wind","weather-wind",B.b.n(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.n(a5.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.k(j,new A.cw("through-wall-thunder","weather-thunder-bed",B.b.n(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a5.a
e=i===B.X||i===B.a9
d=B.b.n(a5.ay*l,0,1)
if(e&&d>0.001)B.a.k(j,new A.cw("structure-hail-impact","weather-hail-roof",B.b.n(d*(0.16+0.38*o)*(0.35+0.65*r),0,1),760+1500*p,48,0,m*0.92,!0))
c=B.b.n(k*f*(1-0.72*s)*(0.3+0.7*r),0,1)
if(c>0.01)B.a.k(j,new A.cw("window-frame-resonance","weather-window-rattle",c*0.22,1800+1600*c,45,0,m*0.65,!0))
if(s>0.03&&l>0.08)B.a.k(j,new A.cw("interior-window-drip","weather-interior-drip",B.b.n(l*s*(0.35+0.65*k),0,1)*0.34,7200,180,0,m,!0))
i=a5.ax
b=B.b.n(i*0.75+B.b.n((a5.d+5)/25,0,1)*0.25,0,1)
if(i>0.02){B.a.k(j,new A.cw("interior-warmth","weather-interior-warmth",0.08*i,900,35,0,0.12,!0))
B.a.k(j,new A.cw("interior-coffee-roomtone","weather-interior-coffee",0.018*i*(0.55+0.45*o),2600,110,0,0.24*m,!0))}a=A.c([],t.wb)
a0=B.d.ad(a5.CW,30)
if(a0!==a4.b){a4.b=a0
o=a5.cx
a1=a4.cZ(o,a0,17)*2-1
h=a4.cZ(o,a0,23)
g=a0>0
if(g&&e&&d>0.12&&(a0&1)===0)B.a.k(a,new A.eF("hail-impact-"+a0,"weather-hail-tick",0,B.b.n(0.08+d*0.24,0,1),0.92+h*0.16,a1))
if(g&&c>0.2&&B.d.O(a0,3)===0)B.a.k(a,new A.eF("window-rattle-"+a0,"weather-window-tick",0,B.b.n(0.035+c*0.12,0,1),0.94+a4.cZ(o,a0,31)*0.12,a1*0.55))
if(g&&i>0.5&&B.d.O(a0,15)===0)B.a.k(a,new A.eF("coffee-clink-"+a0,"weather-coffee-clink",0,0.025+i*0.035,0.98+a4.cZ(o,a0,43)*0.08,a1*0.25))}if(a5.Q&&a5.z!==a4.a){o=a4.a=a5.z
a2=Math.max(1,a5.y)
i=Math.pow(1+a2/1200,0.8)
h=B.d.O((a5.cx^o)>>>0,200)
g=a2<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.k(a,new A.eF("lightning-thunder-"+o,g,a2/343,B.b.n((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.n(0.94+B.d.O(o,11)*0.012,0.88,1.08),B.b.n((h-100)/100,-1,1)))}a3=new A.vc(A.ab(j,t.uz),A.ab(a,t.EI),p,n,m,b)
a3.A()
return a3},
cZ(a,b,c){var s=a^b*73244475^c*668265261
s=((s^s>>>16)>>>0)*73244475
return((s^s>>>16)&2147483647)/2147483647}}
A.m3.prototype={
gE(){return this.b}}
A.mt.prototype={}
A.oG.prototype={
pv(a){var s,r,q,p,o,n=B.f.a0(a.C(),null)
this.a.hR(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
oM(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.aq(s.getItem("quarantine.save.active"))
q=A.aq(s.getItem("quarantine.save.previous"))
p=this.fP(r,a)
if(p!=null)return new A.fn(p,null)
o=this.fP(q,a)
if(o!=null)return new A.fn(o,"recovered previous save")
if(r==null)return B.nz
return B.ny}catch(n){return B.nx}},
fP(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hR(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ah(q) instanceof A.A)return null
else throw q}}}
A.kL.prototype={
jT(a,b,c,d,e){if(this.a.length===0)throw A.a(B.il)
if(this.b<0)throw A.a(B.hx)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ab(q,t.i)
s=t.z
return A.aX(A.E(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.co.prototype={
B(){return"EndingKind."+this.b}}
A.pk.prototype={
gaz(){return this.a}}
A.h8.prototype={
C(){var s=t.N
return A.E(["kind",this.a.b],s,s)}}
A.pn.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:80}
A.bH.prototype={}
A.lC.prototype={
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
nX(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ac(0,new A.h(0,1.3499999999999999,0))
return!new A.ku(s,s.a4(0,new A.h(0,1.2000000000000002,0))).du(a,r)}}
A.t4.prototype={
C(){return A.wz(this.a)}}
A.hu.prototype={
C(){return A.E(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.tt.prototype={
hR(a){var s,r,q,p,o,n,m,l=B.f.ak(a,null),k=t.f
if(!k.b(l))throw A.a(B.iG)
s=t.N
r=t.z
q=A.aZ(l,s,r)
p=q.h(0,"version")
if(A.b0(p))o=p!==1&&p!==2
else o=!0
if(o)A.f(A.M("unsupported save version "+A.y(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.f(B.hL)
k=A.aZ(n,s,r)
return A.BA(A.aZ(m,s,r),k,2)}}
A.fn.prototype={}
A.dB.prototype={
B(){return"GameSessionEventType."+this.b}}
A.kZ.prototype={
gaz(){return this.c},
gaX(){return this.d}}
A.pK.prototype={
gaz(){return this.a},
gaX(){return this.b}}
A.pJ.prototype={
gag(){var s=this.d
return new A.pK(s.a,s.b,this.e.b.a)},
giH(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.E(["day",l.a,"hour",l.b],k,t.J)
s=m.f
r=t.K
s=A.E(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.E(["entryCount",m.e.b.a],k,t.S)
p=A.B2(m.c).C()
o=m.r
n=o.c
return new A.t4(A.wz(A.E(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.E(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.C()],k,t.z)))},
m9(a,b){if(!B.a.M(a.f,new A.pL(b)))return!1
this.z.m7(a,b)
return!0},
m8(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.nM(n))return!1
m=m.b
m.l(0,n,"true")
s=a.b
m.l(0,n+".consumer",s)
m.l(0,"last-authored-event",o)
if(s==="aftermath")m.l(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bE(q,"=")
if(p<=0||p===q.length-1)continue
m.l(0,B.c.J(q,0,p),B.c.aQ(q,p+1))}return!0},
nI(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.v(s).i("ao<2>")
q=A.K(new A.ao(s,r),r.i("r.E"))
B.a.Y(q,new A.pM())
if(q.length===0)return null
s=A.C(q)
r=s.i("I<1>")
p=A.K(new A.I(q,s.i("l(1)").a(new A.pN()),r),r.i("r.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dx(a),r=t.sU,s=new A.al(s,s.gu(0),r.i("al<a3.E>")),r=r.i("a3.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.O(n,o.length)]
s=l.c
k=new A.d1(a,l.a,s.length-1,B.a.ga7(s).t(0))
j.l(0,a,k)
return k},
m4(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.a(A.a7(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cW(B.iS)}if(n<a)this.cW(B.iT)},
jD(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dR(a)&&s.jC(b)},
oN(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.et){r.c=Math.min(1,r.c+0.1)
q.l(0,"ignored."+o.b+"."+o.c,"true")}}},
jz(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.EU(j,A.ab(i.d,h).length)
if(a===B.ea)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.ET(j,new A.I(r,q.i("l(1)").a(new A.pO(k)),q.i("I<1>")).gu(0))
r=k.f
q=r.b
if(B.a.p(B.jZ,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.ai(j.a/1*3)
B.a.k(r.r,new A.hw(q.a,a,b))
m=r.a
A.F4(m,q.a,n,k.b,A.ab(m.d,h));++q.a
q.fj(7)
r.c=16
r.d=6
r.f=!1
m.jk(B.kC)
s.y.mx(o,c)
l=B.b.ai(j.b/1*6)
if(l>0)r.dR(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ao(i,A.v(i).i("ao<2>")).M(0,new A.pP())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cW(B.iX)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cW(B.iW)},
hb(a,b){var s,r=this;++r.y
s=r.d
B.a.k(r.w,new A.kZ(s.a,s.b))
B.a.k(r.x,A.EV(A.I9(a),r.b,r.y-1))},
cW(a){return this.hb(a,null)}}
A.pL.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:15}
A.pM.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:16}
A.pN.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:25}
A.pO.prototype={
$1(a){t.z_.a(a)
return a.e.length!==0&&!new A.un().jw(this.a.c,a.a)},
$S:84}
A.pP.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.ko.prototype={
f2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.r,a=A.C(b),a0=a.i("e(1)")
a=a.i("H<1,e>")
A.k9(new A.H(b,a0.a(new A.ot()),a),"level")
s=d.w
r=A.C(s)
q=r.i("e(1)")
r=r.i("H<1,e>")
A.k9(new A.H(s,q.a(new A.ou()),r),"room")
p=d.x
o=A.C(p)
A.k9(new A.H(p,o.i("e(1)").a(new A.ov()),o.i("H<1,e>")),"portal")
o=d.y
n=A.C(o)
A.k9(new A.H(o,n.i("e(1)").a(new A.ow()),n.i("H<1,e>")),"stair")
m=new A.H(b,a0.a(new A.ox()),a).b9(0)
l=new A.H(s,q.a(new A.oy()),r).b9(0)
r=A.n(t.N,t.lT)
for(b=p.length,k=0;k<p.length;p.length===b||(0,A.u)(p),++k){j=p[k]
r.l(0,j.a,j)}i=d.f
if(i!=null){b=i.a
if(!l.p(0,b))throw A.a(A.M("residence.roomId references unknown room "+b,c,c))
b=i.d
if(b!=null&&!r.K(b))throw A.a(A.M("residence.returnPortalId references unknown portal "+b,c,c))
b=i.c
if(b!=null&&b.length===0)throw A.a(B.hj)}for(b=s.length,k=0;k<s.length;s.length===b||(0,A.u)(s),++k){h=s[k]
a=h.b
if(!m.p(0,a))throw A.a(A.M("rooms."+h.a+".floor references unknown level "+a,c,c))
a=h.e
a0=A.C(a)
q=h.a
A.k9(new A.H(a,a0.i("e(1)").a(new A.oz()),a0.i("H<1,e>")),"window in "+q)
a0=h.f
A.k9(a0,"portal reference in "+q)
for(a=a0.length,g=0;g<a0.length;a0.length===a||(0,A.u)(a0),++g){f=a0[g]
j=r.h(0,f)
if(j==null)throw A.a(A.M("rooms."+q+".portalIds references unknown portal "+f,c,c))
if(!(j.b===q||j.c===q))throw A.a(A.M("rooms."+q+".portalIds references "+f+", which does not touch the room",c,c))}}for(b=p.length,k=0;k<p.length;p.length===b||(0,A.u)(p),++k){j=p[k]
a=j.b
if(a!=="outside"&&!l.p(0,a))throw A.a(A.M("portals."+j.a+".a references "+a,c,c))
a0=j.c
if(a0!=="outside"&&!l.p(0,a0))throw A.a(A.M("portals."+j.a+".b references "+a0,c,c))
if(a===a0)throw A.a(A.M("portals."+j.a+" has identical endpoints",c,c))}for(b=o.length,k=0;k<o.length;o.length===b||(0,A.u)(o),++k){e=o[k]
a=e.b
j=r.h(0,a)
if(j==null)throw A.a(A.M("stairs."+e.a+".portalId references unknown portal "+a,c,c))
if(!j.z)throw A.a(A.M("stairs."+e.a+".portalId "+a+" is not marked stair",c,c))}},
f1(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.a(A.j("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.a(A.j("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.a(A.j("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.a(A.j("authored house story authority must remain external-story-data"))
a1=b.w
s=a1.length
if(s!==a2.b.length||b.x.length!==a2.c.length)throw A.a(A.j("authored/runtime room or portal count mismatch"))
for(r=t.o,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
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
if(Math.abs(g-j)>0.0001)A.f(A.j(n+" origin.x mismatch: "+A.y(g)+" != "+A.y(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.j(n+" origin.y mismatch: "+A.y(j)+" != "+A.y(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.j(n+" origin.z mismatch: "+A.y(l)+" != "+A.y(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.f(A.j(n+" size.x mismatch: "+A.y(g)+" != "+A.y(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.f(A.j(n+" size.y mismatch: "+A.y(j)+" != "+A.y(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.f(A.j(n+" size.z mismatch: "+A.y(l)+" != "+A.y(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.a(A.j("window count mismatch for "+n))
for(n=A.C(j),i=n.i("l(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.u)(l),++f){e=l[f]
d=A.bK(new A.I(j,i.a(new A.os(e)),n),r)
if(d==null)throw A.a(A.j("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.f(A.j(c+" offset mismatch: "+A.y(h)+" != "+A.y(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.f(A.j(c+a+A.y(h)+" != "+A.y(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.f(A.j(c+a0+A.y(h)+" != "+A.y(g)))}}for(a1=b.x,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.a(A.j("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.a(A.j("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.f(A.j(q+a+A.y(n)+" != "+A.y(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.f(A.j(q+a0+A.y(n)+" != "+A.y(l)))
if(o.y!=m.at)throw A.a(A.j("door model mismatch for "+q))}a1=b.y
s=a2.d
if(a1.length!==s.length||B.a.gbj(a1).b!==B.a.gbj(s).b)throw A.a(A.j("stair manifest mismatch"))}}
A.on.prototype={
$1(a){var s=A.hW(a,"level"),r=A.bJ(s,"id")
A.bJ(s,"kind")
A.eS(s,"floorY")
return new A.ee(r)},
$S:85}
A.oo.prototype={
$1(a){return A.EB(a,this.a)},
$S:86}
A.op.prototype={
$1(a){var s=this.a,r=A.hW(a,"portal"),q=A.bJ(r,"id"),p=A.bJ(r,"a"),o=A.bJ(r,"b"),n=A.zO(r,"facingA"),m=A.zO(r,"facingB"),l=A.eS(r,"offsetA"),k=A.eS(r,"offsetB"),j=A.eS(r,"width"),i=A.eS(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.w(r.h(0,"doorKit")):null
return new A.ef(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.aa(r.h(0,"stair"),!0),J.aa(r.h(0,"exterior"),!0),!J.aa(r.h(0,"open"),!1),J.aa(r.h(0,"sticks"),!0))},
$S:87}
A.oq.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.hW(a,"stair")
return new A.eh(A.bJ(p,"id"),A.bJ(p,"portalId"),A.IV(p.h(0,s),s),A.nx(p.h(0,"min"),"min"),A.nx(p.h(0,"max"),"max"),A.nx(p.h(0,r),r),A.nx(p.h(0,q),q))},
$S:88}
A.or.prototype={
$1(a){return typeof a=="string"?a:A.e4("exterior cell")},
$S:51}
A.ot.prototype={
$1(a){return t.mD.a(a).a},
$S:50}
A.ou.prototype={
$1(a){return t.bJ.a(a).a},
$S:49}
A.ov.prototype={
$1(a){return t.lT.a(a).a},
$S:92}
A.ow.prototype={
$1(a){return t.gI.a(a).a},
$S:93}
A.ox.prototype={
$1(a){return t.mD.a(a).a},
$S:50}
A.oy.prototype={
$1(a){return t.bJ.a(a).a},
$S:49}
A.oz.prototype={
$1(a){return t.ya.a(a).a},
$S:94}
A.os.prototype={
$1(a){return t.o.a(a).a===this.a.a},
$S:17}
A.oA.prototype={}
A.y2.prototype={
$1(a){var s
A:{if("ground"===a){s=B.fR
break A}if("first"===a){s=B.fS
break A}s=B.fT
break A}return s},
$S:96}
A.ee.prototype={
gE(){return this.a}}
A.eg.prototype={
gE(){return this.a}}
A.oB.prototype={
$1(a){var s=this.a,r=A.hW(a,"window")
return new A.ei(A.bJ(r,"id"),A.zO(r,"facing"),A.eS(r,"offset")*s,A.eS(r,"sill")*s,A.eS(r,"width")*s,A.eS(r,"height")*s,J.aa(r.h(0,"frosted"),!0))},
$S:97}
A.oC.prototype={
$1(a){return typeof a=="string"?a:A.e4("portal id")},
$S:51}
A.ei.prototype={
gE(){return this.a}}
A.ef.prototype={
gE(){return this.a}}
A.eh.prototype={
gE(){return this.a}}
A.xB.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.xY.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.ku.prototype={
ghC(){var s=this.d
return s==null?null:s.a.a},
iM(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null||!isFinite(d)){n.d=null
return}s=c.d
r=A.C(s)
q=new A.I(s,r.i("l(1)").a(new A.oR(e)),r.i("I<1>"))
p=!q.gv(0).m()?null:q.ga1(0)
if(p==null){n.d=null
return}if(!(n.cU(b,p.f)&&a==="hall"))o=n.cU(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mu(p,B.b.n(d,0,1))},
oa(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.h4(g,c,d)
s=h.kJ(a,b,c,d)
if(s!=null){h.d=s
return h.h4(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.hK(Math.sqrt(r*r+q*q)/0.08))
o=d.a6(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.lQ(a,n,m,o)
l=l||j.b
m=j.a
i=h.oK(a,n)
n=i==null?n:i}h.bq(m)
return new A.lp(m,n)},
kJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cU(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cU(c,l)){l=j<0||o
h=l}if(i||h)return new A.mu(m,i?0:1)}return null},
h4(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ac(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.n(a.b+o/p,0,1)
n=A.BR(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bq(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.lp(n,k)},
cU(a,b){var s=a.ac(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
lQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cV(c,!1)
s=h.d1(a,b,c,new A.h(g,0,0))
r=s.a
q=d.c
p=h.d1(a,b,r,new A.h(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cV(p.a,!1)
n=c.a4(0,new A.h(0,0.35,0))
h.bq(n)
if(!h.du(a,b)){m=h.d1(a,b,n,new A.h(g,0,0))
l=h.d1(a,b,m.a,new A.h(0,0,q))
if(!m.b&&!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.h(g,r-j,q)
h.bq(i)
if(h.du(a,b))break}h.bq(k)
return new A.cV(k,!1)}}if(o)return new A.cV(r,!0)
if(!p.b)return new A.cV(p.a,!0)
h.bq(c)
return new A.cV(c,!0)},
d1(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cV(c,!1)
s=c.a4(0,d)
this.bq(s)
if(this.du(a,b)){this.bq(c)
return new A.cV(c,!0)}return new A.cV(s,!1)},
bq(a){var s=a.ac(0,new A.h(0,1.3499999999999999,0))
this.a=s
this.b=s.a4(0,new A.h(0,1.2000000000000002,0))},
du(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aI(m)
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
return!this.lN(a,m,s)},
oK(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aI(k)
for(r=k.a,q=a.aS(r),p=J.O(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>"));q.m();){o=p.gq()
n=o.cA(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hy(k,o,s)&&this.kB(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lN(a,b,c){var s,r,q
for(s=a.aS(b.a),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gq()
if(q.ax&&!q.ay&&!q.z&&this.hy(b,q,c))return!0}return!1},
hy(a,b,c){var s,r,q,p=a.a,o=b.b4(p),n=b.aN(p)
p=o===B.A||o===B.t
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
kB(a,b,c){var s,r=this
switch(b.b4(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smf(a){this.a=t.a7.a(a)}}
A.oR.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:98}
A.lp.prototype={}
A.cV.prototype={}
A.mu.prototype={}
A.iv.prototype={
gaz(){return this.a}}
A.qe.prototype={
mx(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.W,r)
s=B.W[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jx(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.W,q)
p=B.W[q]
if(p.b===a)r+=p.c}return r},
jy(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.W,q)
p=B.W[q]
if(p.b===a)r+=p.d}return r},
C(){return A.E(["landedCount",this.b],t.N,t.z)}}
A.a8.prototype={}
A.kO.prototype={
go0(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a2(A.c([r,q,p,o,n,m],t.n),new A.pp())&&o>=r&&n>=q&&m>=p}}
A.pp.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.l5.prototype={
A(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.O(s,3)!==0}else s=!0
if(s)throw A.a(A.o("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.a(A.o("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.go0())throw A.a(A.o("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.M(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.qg()))throw A.a(A.o("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.a(A.o("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.a(A.o("QHMX index "+o+" exceeds vertex count",m))}}}
A.qg.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.qf.prototype={
D(a,b,c,d,e,f,g){var s=this
s.bL(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bL(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bL(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bL(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bL(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bL(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a8(a,b,c,m,n,o,0,0,p),r=new A.a8(g,h,i,m,n,o,1,1,p)
this.av(s,new A.a8(d,e,f,m,n,o,1,0,p),r)
this.av(s,r,new A.a8(j,k,l,m,n,o,0,1,p))},
av(a,b,c){var s=this,r=s.b
B.a.k(r,s.e8(a))
B.a.k(r,s.e8(b))
B.a.k(r,s.e8(c))},
e8(a){var s,r,q=B.a.W(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.a(A.j("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
mk(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.l5(A.ab(g,t.hl),new Uint16Array(A.S(this.b)),new A.kO(s,r,q,p,o,n))
h.A()
return h}}
A.kP.prototype={}
A.yY.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ay.p(0,s))A.f(A.j("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:99}
A.xQ.prototype={
$2(a,b){var s=t.Ez
return B.c.I(s.a(a).a,s.a(b).a)},
$S:100}
A.dm.prototype={
pu(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.l(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.k(i,p[n])}B.a.k(s,m)}return new A.js(A.Ky(new A.l5(i,new Uint16Array(A.S(s)),A.HR(i))),l.a,l.b,l.c,A.c([],k))}}
A.js.prototype={}
A.f4.prototype={
B(){return"ExteriorCameraBand."+this.b}}
A.kQ.prototype={
mr(a){var s
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
ms(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cL
break A}if("kitchen"===a||"cellar"===a){s=B.fO
break A}if("bathroom"===a){s=B.fP
break A}if("spare-room"===a){s=B.fQ
break A}s=B.cL
break A}return this.mr(s)},
ic(a,b,c,d){d.i("r<0>").a(b)
t.Q.a(c)
return new A.bI(this.nE(d.i("e(0)").a(a),b,c,d),d.i("bI<0>"))},
nE(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$ic(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a2(0,B.ay.gaF(B.ay)))throw A.a(A.o("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bW(l,l.r,l.e,r.$ti.i("bW<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ay.p(0,j))throw A.a(A.j("retained item references unknown PVS cell "+j))
o=q.p(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eK.prototype={
hN(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.xo.prototype={
$1(a){var s=this
return t.xT.a(a).hN(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:48}
A.xn.prototype={
$1(a){return t.xT.a(a).hN(0,(this.a+this.b)*0.5,this.c)},
$S:48}
A.dA.prototype={
B(){return"FocusKind."+this.b}}
A.er.prototype={
gE(){return this.b}}
A.lS.prototype={}
A.wu.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:102}
A.xM.prototype={
$1(a){return B.d.n(B.b.ai(a*this.a),0,255)},
$S:103}
A.eJ.prototype={}
A.qc.prototype={
nQ(){var s,r,q,p,o,n,m=this
m.kR()
if(m.b.length!==8||m.c.length!==9||m.d.length!==1)throw A.a(A.j("authored house requires 8 rooms, 9 portals, and 1 stair"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.a(A.j("authored portal endpoint missing: "+o.a))}},
eT(a){var s=this.w
if(s==null)return null
return new A.h(s.a,a,s.c)},
kR(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.K(n))throw A.a(A.j("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.K(n))throw A.a(A.j("duplicate portal "+n))
q.l(0,n,m)}},
aI(a){var s=a.c,r=this.y,q=a.a
return new A.h(s.a+r.jx(q),s.b+r.jy(q),s.c)},
aS(a){var s=this.c,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.qv(a)),r.i("I<1>"))},
oJ(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.a(A.a7(a,"roomId","not a portal endpoint"))
r=this.aI(o)
q=b.aN(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.b4(a).a){case 0:s=new A.h(s.a+q,p,s.c)
break
case 2:s=new A.h(s.a+q,p,s.c+r.c)
break
case 1:s=new A.h(s.a+r.a,p,s.c+q)
break
case 3:s=new A.h(s.a,p,s.c+q)
break
default:s=null}return s},
iD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a3
s=A.c([new A.a5(a,B.a3)],t.nR)
r=A.aF([a],t.N)
for(q=this.e,p=t.e;s.length!==0;){o=B.a.oQ(s,0)
n=o.a
m=o.b
for(l=this.aS(n),k=J.O(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>"));l.m();){j=k.gq()
i=j.cA(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.K(m,p)
h.push(j)
B.a.k(s,new A.a5(i,h))}}}return B.a3}}
A.qv.prototype={
$1(a){var s
t.e.a(a)
s=this.a
return a.b===s||a.c===s},
$S:104}
A.po.prototype={}
A.un.prototype={
jw(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a2(s,new A.uo())}else s=!1
return s}}
A.uo.prototype={
$1(a){return t.o.a(a).w},
$S:17}
A.qh.prototype={
iE(a){var s=this.e,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.ql(a)),r.i("I<1>"))},
goF(){var s=this.e,r=A.C(s)
return new A.I(s,r.i("l(1)").a(new A.qk()),r.i("I<1>"))},
gjH(){var s,r,q,p,o,n=t.N,m=t.S,l=A.E(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q].f
o=l.h(0,p)
l.l(0,p,(o==null?0:o)+1)}return A.aX(l,n,m)},
oE(a){var s,r,q
for(s=this.goF(),r=J.O(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gq()
if(q.y===a)return q}return null},
bO(a){return B.a.b5(this.d,new A.qi(a),new A.qj(a))},
f1(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.a(A.j("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.a(A.j("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.a(A.j("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.a(A.j("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.a(A.j("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aF(["production","proxy","invisible-anchor"],s).p(0,l))throw A.a(A.j("invalid inventory asset status "+m+": "+l))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(q=a6.e,p=q.length,m=a9.e,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){g=q[o]
l=g.a
if(!j.k(0,l))throw A.a(A.j("duplicate inventory placement "+l))
k=g.b
f=m.h(0,k)
if(f==null)throw A.a(A.j(a7+l+" references "+k))
n=a6.bO(g.c)
if(g.x&&g.y!=null){e=g.y
e.toString
d=$.Eh()
if(!d.b.test(e))throw A.a(A.j("invalid inventory focusId "+l+": "+e))
if(!h.k(0,e))throw A.a(A.j("duplicate inventory focusId "+e))}e=g.z
if(e<0||!isFinite(e))throw A.a(A.j("invalid clearance for "+l))
d=g.Q
c=!0
if(isFinite(d))if(!(d<0))if(isFinite(g.as)){b=g.at
if(isFinite(b))if(isFinite(g.ax))if(!(b<0))d=d>0&&b<=0
else d=c
else d=c
else d=c}else d=c
else d=c
else d=c
if(d)throw A.a(A.j("invalid thermal source for "+l))
d=g.ay
c=d.a
if(!A.aF(["none","static","dynamic","kinematic"],s).p(0,c))A.f(A.j("invalid physics body type for "+l))
b=d.b
a=!0
if(isFinite(b)){a0=d.c
if(isFinite(a0)){a1=d.d
if(isFinite(a1)){a2=d.e
if(isFinite(a2)){a=d.f
a=!isFinite(a)||b<0||a0<0||a1<0||a2<0||a<0||a>1}}}}if(a)A.f(A.j("invalid physics values for "+l))
c=c==="none"
if(c)a=b!==0||d.c!==0||d.r
else a=!1
if(a)A.f(A.j("physics none body cannot carry mass or collision: "+l))
c=!c
if(c)a=b<=0||d.c<=0||d.d<=0
else a=!1
if(a)A.f(A.j("physical body needs positive mass and density: "+l))
if(c&&Math.abs(b-d.c*d.d)>Math.max(0.01,b*0.02))A.f(A.j("mass and density disagree for "+l))
d=g.e
if(d!=null&&!i.k(0,k+":"+d))throw A.a(A.j("duplicate inventory socket "+k+":"+d))
k=g.f.a
d=k.a*a8
c=k.b*a8
k=k.c*a8
a3=g.iO(n,a8)
a4=g.eX(n,a8)
a5=0.43+e
e=a3.a
b=-a5
a=!0
if(!(d-e<b)){a0=f.c
if(!(d+e>a0.a+a5)){e=a3.c
k=k-e<b||k+e>a0.c+a5||c+a4.b>a0.b+a5||c+a4.a<b}else k=a}else k=a
if(k)throw A.a(A.j(a7+l+" escapes "+f.a))}}}
A.ql.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:31}
A.qk.prototype={
$1(a){return t.fl.a(a).x},
$S:31}
A.qi.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:106}
A.qj.prototype={
$0(){return A.f(A.j("inventory asset missing: "+this.a))},
$S:7}
A.d8.prototype={
gE(){return this.a}}
A.cL.prototype={
iO(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.h(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
eX(a,b){var s=this.f.c.b*b,r=a.r
return new A.h(r.a.b*s,r.b.b*s,0)},
gE(){return this.a}}
A.lb.prototype={}
A.qF.prototype={}
A.qD.prototype={}
A.xX.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.qE.prototype={
C(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.v(o).i("ae<1>")
n=A.K(new A.ae(o,n),n.i("r.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.l(0,q,o.h(0,q))}return p},
eU(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.a(B.h8)
s=t.X
r=A.aZ(a,s,s)
s=this.a
s.P(0)
for(q=new A.N(r,A.v(r).i("N<1,2>")).gv(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.b0(o)||o<0)throw A.a(B.hz)
s.l(0,n,o)}}}
A.dL.prototype={}
A.qm.prototype={
ps(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
b=q.aI(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.h(a,a0,a1).gu(0)
if(a2>0.0001){a3=1/a2
a4=new A.h(a*a3,a0*a3,a1*a3)}else a4=new A.h(0,-1,0)
B.a.k(s,new A.dL(new A.h(d,c,e),a4,16760952,3.8,2.1*this.lC(k),80,180,0.12))}}B.a.Y(s,new A.qn(a6))
return A.hz(s,0,A.e7(4,"count",t.S),t.A_).bH(0)},
lC(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.qn.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.I(a.a.ac(0,s).gu(0),b.a.ac(0,s).gu(0))},
$S:108}
A.eq.prototype={
B(){return"Floor."+this.b}}
A.ep.prototype={
B(){return"Facing."+this.b}}
A.fx.prototype={
sjv(a){this.w=A.T(a)},
gE(){return this.a}}
A.cb.prototype={
cA(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
b4(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.a(A.a7(a,"roomId","not an endpoint of "+s.a))},
aN(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.a(A.a7(a,"roomId","not an endpoint of "+s.a))},
gE(){return this.a}}
A.lj.prototype={
gE(){return this.a}}
A.fr.prototype={
gE(){return this.a}}
A.fm.prototype={
gE(){return this.a}}
A.qp.prototype={
nv(a){return B.a.b5(this.c,new A.qq(a),new A.qr(a))},
po(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.a(A.j("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.a(A.j("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.n(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){m=r[p]
l=m.a
if(!s.k(0,l))throw A.a(A.j("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.a(A.j("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.a(A.j("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.a(A.j("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gR(k)||k.ga3().M(0,new A.qs())||k.gam().M(0,new A.qt()))throw A.a(A.j("sound emitter "+l+" has no usable cues"))
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
A.qq.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:109}
A.qr.prototype={
$0(){return A.f(A.j("sound emitter missing: "+this.a))},
$S:7}
A.qs.prototype={
$1(a){return B.c.aP(A.w(a)).length===0},
$S:3}
A.qt.prototype={
$1(a){return B.c.aP(A.w(a)).length===0},
$S:3}
A.d7.prototype={
gE(){return this.a}}
A.qd.prototype={
cf(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.a7(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.kA}q=A.c([],t.Fm)
p=B.b.aV(r)+1
o=B.b.aV(b)
for(n=p;n<=o;++n){m=B.d.O(n,24)
B.a.k(q,new A.f9("tick",m))
if(B.d.O(m,3)===0){B.a.k(q,new A.f9("cuckoo",m))
B.a.k(q,new A.f9("bell",m))}if(B.d.O(m,6)===0)B.a.k(q,new A.f9("chime",m))}l.b=b
return q}}
A.f9.prototype={
gaX(){return this.b}}
A.qo.prototype={
cf(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.a7(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.kz}q=A.c([],t.op)
for(p=B.b.aV(r)+1;p<=B.b.aV(b);++p){o=B.d.O(p,24)
n=B.d.O(o,4)
if(n===2)B.a.k(q,B.jq)
if(B.d.O(o,3)===1)B.a.k(q,B.js)
if(B.d.O(o,8)===5)B.a.k(q,B.jv)
if(B.d.O(o,5)===0)B.a.k(q,B.jr)
if(B.d.O(o,7)===3)B.a.k(q,B.jw)
if(n===1)B.a.k(q,B.jt)
if(B.d.O(o,6)===4)B.a.k(q,B.ju)}m.b=b
return q}}
A.d6.prototype={}
A.xW.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.qu.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.E(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.E(["lit",o.a,"examined",o.b],m,r))}return A.E(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.k(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.k(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.A6(new A.ae(o,A.v(o).i("ae<1>")),d)){d=f.b
if(A.A6(new A.ae(d,A.v(d).i("ae<1>")),r)){d=f.c
e=!A.A6(new A.ae(d,A.v(d).i("ae<1>")),e)}else e=n}else e=n
if(e)throw A.a(B.i5)
e=f.d
if(e<0||e>2)A.f(B.hk)
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
A.iO.prototype={
C(){return A.E(["open",this.a,"locked",this.b],t.N,t.y)}}
A.iC.prototype={
C(){return A.E(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bA.prototype={
gE(){return this.a}}
A.pj.prototype={
$1(a){return this.a.p(0,A.w(a))},
$S:3}
A.es.prototype={
B(){return"Hand."+this.b}}
A.v7.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
fi(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.li.prototype={
C(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.D[r]
o.l(0,q,s.h(0,q))}return A.E(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
t(a){return new A.H(B.D,t.oI.a(new A.r_(this)),t.jT).W(0," \xb7 ")}}
A.qZ.prototype={
$2(a,b){return new A.P(A.w(a),A.w(b),t.q)},
$S:110}
A.r_.prototype={
$1(a){return this.a.a.h(0,A.w(a))},
$S:111}
A.c6.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.E(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gaz(){return this.b}}
A.qJ.prototype={
cj(a){t.G.a(a)
return a.a===5&&B.a.a2(B.D,new A.qQ(this,a))},
fv(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.cj(b))return null
s=this.e++
r=new A.c6(s,a,A.c([A.qY(b,c,d)],t.Bv),e,!1,null,null)
this.b.l(0,s,r)
return r},
eo(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.cj(b))return!1
B.a.k(s.c,A.qY(b,c,B.aN))
return!0},
m3(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.cj(b))return!1
s.r=A.qY(b,0,B.d8)
return!0},
jk(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.P(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.K(p)&&!B.a.p(s,p))B.a.k(s,p)}},
pr(a){var s
if(!this.b.K(a))return!1
s=this.d
if(!B.a.p(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.v(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ac(r,r.r,r.e,A.v(r).i("ac<2>"));r.m();)s.push(r.d.C())
return A.E(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.qQ.prototype={
$1(a){var s
A.w(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.p(this.a.a.h(0,a),s)},
$S:3}
A.i8.prototype={
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
A.oD.prototype={
cH(a){var s,r,q=a==null?null:B.c.aP(a).toLowerCase()
if(q==null||q.length===0)return B.eP
if(q==="pixeldart")return B.eO
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.i8(B.aT,!1,!0,r,s,s?r:null)}}
A.iQ.prototype={}
A.rY.prototype={
C(){var s,r,q,p=A.c([],t.A7)
for(s=this.a.gam(),s=s.gv(s),r=t.N;s.m();){q=s.gq()
p.push(A.E(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.E(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.xL.prototype={
$1(a){A.w(a)
return a.length!==0&&a!==".."},
$S:3}
A.iR.prototype={}
A.lH.prototype={}
A.t_.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.t0.prototype={
$1(a){return t.zU.a(a).f},
$S:21}
A.rS.prototype={}
A.rR.prototype={
ghS(){var s,r,q="pixeldart",p=this.b,o=p.aJ
if(o){s=p.w
s===$&&A.t()
s=s.a.b}else s="safe"
p=A.Bw(q,o?p.gmo():B.lb,!1,s)
r=p
if(r==null)r=A.Bw(q,A.c([],t.s),!1,"safe")
p=A.Bv(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
c7(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.bP){if(k.aJ){s=k.d
s===$&&A.t()
s=s.a.b===B.a2}else s=!1
s=!s
if(s){m.d=B.Y;++k.eD
j=B.Y}if(j===B.bP)return}if(j!==B.Y)A.f(A.j(l))
B.f.a0(A.E(["backend","pixeldart","interpolation",0,"facts",A.wz(a.a.a)],t.N,t.X),null)
j=k.aJ
if(j){s=k.d
s===$&&A.t()
s=s.a.b===B.a2}else s=!1
if(s){if(m.d!==B.Y)A.f(A.j(l))
m.d=B.bP
return}if(!j)A.f(A.j("Pixeldart runtime is not initialized"))
j=k.to
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.da(j)
j=$.Ay()
s=j.b
q=j.c
p=A.zh(k.b/k.c,q,j.a,s)
j=p.a6(0,r)
j=A.AN(k.b/k.c,B.v,q,B.oK,s,p,r,j)}o=new A.kW(j,k.x1,k.x2,-1,k.nC++,k.eD,k.bV,k.dq)
n=new A.uv()
$.At()
j=$.t7.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.t()
s=k.f
s===$&&A.t()
k.lM(j.mg(s,o),o)
k.dm=k.e.nx()
j=$.t7.$0()
n.b=j
k.dn=n.gnu()/1000},
ij(a){if(this.d!==B.Y)A.f(A.j("pixeldart backend is not ready"))
B.f.a0(A.E(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.rT.prototype={
mp(a,b){var s,r,q,p,o,n,m
a.A()
s=B.cu.cH(a)
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
A.lA.prototype={
B(){return"PixeldartQualityTier."+this.b}}
A.rU.prototype={
C(){var s=this
return A.E(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.rV.prototype={
hM(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.a(A.o("surface dimensions must be positive",null))
s=a1.a
A:{if(B.G===s){r=new A.fG(1080,1920)
break A}if(B.Q===s){r=new A.fG(720,1280)
break A}r=new A.fG(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.ai(r.b*q)
q=B.b.ai(r.a*q)
o=B.b.n(a5/p,0,1)
n=B.b.n(a4/q,0,1)
m=o<n?o:n
r=this.fA(B.b.ai(p*m),320,a5)
q=this.fA(B.b.ai(q*m),180,a4)
l=s===B.G
k=s===B.Q
j=a1.b.p(0,"shadows")&&a3!=="off"
C:{if("off"===a3){p=0
break C}p=j?1:0
break C}D:{i=1024
if("high"===a3)break D
if("standard"===a3){i=768
break D}if(!l)i=k?768:512
break D}E:{if("msaa4"===a){h=4
break E}if("msaa2"===a||"auto"===a){h=2
break E}h=1
break E}g=a0==="linear"?B.fs:B.b8
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.fD
break F}if("errors"===b){c=B.cC
break F}c=B.fE
break F}return new A.iZ(a1,r,q,h,g,p,i,f,e,d,c)},
fA(a,b,c){if(c<b)return c
return B.d.n(a,b,c)}}
A.rW.prototype={}
A.ho.prototype={}
A.rX.prototype={}
A.rZ.prototype={
dw(a,b,c,d){return this.o4(a,t.zL.a(b),c,d)},
o4(a,b,c,d){var s=0,r=A.aL(t.c_),q,p,o,n,m
var $async$dw=A.aM(function(e,f){if(e===1)return A.aI(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a6(B.ff.dv(new A.rt(d,b),B.lH),$async$dw)
case 3:p=new o.iR(n,m,f)
A.Bn(A.c([p],t.Fa))
q=p
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dw,r)}}
A.t1.prototype={}
A.t2.prototype={
cz(a,b,c){return this.o5(a,t.xJ.a(b),t.tX.a(c))},
o5(a,b,c){var s=0,r=A.aL(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$cz=A.aM(function(d,e){if(d===1)return A.aI(e,r)
for(;;)switch(s){case 0:j=A.c([],t.Fa)
p=a.a,o=p.ga3(),o=o.gv(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gq()
l=p.h(0,m)
if(l==null)l=A.f(A.j("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a6(b.$1(l.c),$async$cz)
case 5:k=i.FH(h.a(g.ak(e,null)))
m=l.a
if(k.b!==m)throw A.a(A.M("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.a(A.M("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a6(B.fi.dw(m,new A.t3(c,l),l.b,k),$async$cz)
case 6:i.k(h,e)
s=3
break
case 4:q=new A.lH(A.Bn(j))
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$cz,r)}}
A.t3.prototype={
$1(a){return this.a.$2(this.b.a,A.w(a))},
$S:112}
A.iB.prototype={
gio(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gnk(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.tc.prototype={
pm(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bl
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bl
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.iB(!0,B.b.n(q*(0.6+b*0.6),0,1),0.82+s.aB()*0.1,0.9+s.aB()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.aB()*0.15
p=(0.6+s.aB()*2.8)*1000
l.x=p
l.e=p/343
o=s.aB()*3.141592653589793*2
n=0.28+s.aB()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.z=new A.iB(!0,B.b.n(0.6+b*0.6,0,1),0.82+s.aB()*0.1,0.9+s.aB()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.aB()*6}}}
A.lO.prototype={
B(){return"RendererBackendKind."+this.b}}
A.hr.prototype={
B(){return"RendererBackendState."+this.b}}
A.tp.prototype={}
A.lP.prototype={
gE(){return this.a}}
A.to.prototype={
jZ(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.a(A.o("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.a(A.o("renderer provenance values must be non-empty",null))}},
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
A.tq.prototype={
dI(a,b){if(a<=0||b<=0)throw A.a(A.o("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
iq(a,b){var s,r,q,p,o
for(s=A.ab(this.a.d,t.rO),r=A.C(s).i("bM<1>"),s=new A.bM(s,r),s=new A.al(s,s.gu(0),r.i("al<a0.E>")),r=r.i("a0.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.uc.prototype={
ma(a){var s,r,q,p,o,n,m,l,k=this.a
k.P(0)
s=a.w
s===$&&A.t()
r=A.C(s)
q=r.i("l(1)").a(new A.ud())
s=B.a.gv(s)
r=new A.U(s,q,r.i("U<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gq()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.l(0,n,A.E(["requested",l,"effective",o],q,p))}}}
A.ud.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:9}
A.c0.prototype={
B(){return"ShaderDebugMode."+this.b},
gni(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.j4.prototype={
B(){return"ShaderTuningAvailability."+this.b}}
A.dh.prototype={
B(){return"ShaderTuningCategory."+this.b}}
A.cu.prototype={
gnG(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.F(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.F(r,2)
else return B.b.F(r,3)}},
ges(){var s,r,q=this
if(q.Q!==B.z)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.F(r,1)
if(s>=0.01)return B.b.F(r,2)
return B.b.F(r,3)},
gE(){return this.a}}
A.ue.prototype={
gbt(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.d(B.av,p)
s=B.av[p]
p=this.w
p===$&&A.t()
r=A.C(p)
q=r.i("I<1>")
p=A.K(new A.I(p,r.i("l(1)").a(new A.ul(s)),q),q.i("r.E"))
return p},
gbQ(){var s,r=this.gbt(),q=r.length
if(q===0)return null
s=B.d.n(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
nP(){var s,r
if(this.b===5)return
else{s=this.gbQ()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y+s.w,s.f,s.r)}},
nc(){var s,r
if(this.b===5)return
else{s=this.gbQ()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y-s.w,s.f,s.r)}},
oU(){var s,r,q,p,o
if(this.b===5)this.e=B.aA
else for(s=this.gbt(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
oS(){var s,r,q,p
this.e=B.aA
s=this.w
s===$&&A.t()
r=0
for(;r<60;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
p5(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
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
q.Q=o?B.z:B.e9
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.aA},
ne(){var s,r,q,p=this.w
p===$&&A.t()
s=A.C(p)
s=new A.I(p,s.i("l(1)").a(new A.uf()),s.i("I<1>")).gu(0)
r=A.C(p)
r=new A.I(p,r.i("l(1)").a(new A.ug()),r.i("I<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.d(B.av,p)
p=B.av[p]
q=this.gbQ()
q=q==null?null:q.a
return A.E(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
eZ(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.t()
j=A.K(j,t.r)
B.a.Y(j,new A.um())
s=this.e
r=A.c([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.u)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.z)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.E(["id",m.a,"requested",k,"effective",l],p,o))}return A.E(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
go9(){var s,r,q,p=A.c([],t.s),o=this.w
o===$&&A.t()
s=0
for(;s<60;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.X(p)
return p},
nO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="requested",e="numeric control ",d=B.f.ak(a,g),c=t.f
if(!c.b(d))throw A.a(B.iH)
if(!J.aa(d.h(0,"schema"),"pixeldart-shader-lab-v1")||!J.aa(d.h(0,"version"),1))throw A.a(B.im)
s=d.h(0,"controls")
if(t.j.b(s)){r=J.cE(s)
this.w===$&&A.t()
r=r!==60}else r=!0
if(r)throw A.a(B.hd)
r=t.N
q=A.n(r,t.r)
p=this.w
p===$&&A.t()
o=0
for(;o<60;++o){n=p[o]
q.l(0,n.a,n)}m=A.n(r,t.X)
for(r=J.O(s);r.m();){l=r.gq()
if(!c.b(l)||typeof l.h(0,"id")!="string"||!l.K(f))throw A.a(B.iC)
k=A.w(l.h(0,"id"))
n=q.h(0,k)
if(n==null||m.K(k))throw A.a(A.M("unknown or duplicate Shader Lab control: "+k,g,g))
j=l.h(0,f)
if(n.e){if(!A.bx(j))throw A.a(A.M("toggle "+k+" requires a boolean request",g,g))
m.l(0,k,j)}else{if(typeof j!="number"||!isFinite(j))throw A.a(A.M(e+k+" requires a finite number",g,g))
i=n.f
if(j<i||j>n.r)throw A.a(A.M(e+k+" is outside ["+A.y(i)+", "+A.y(n.r)+"]",g,g))
m.l(0,k,j)}}h=d.h(0,"debugMode")
if(typeof h!="string"||!B.a.M(B.dq,new A.uj(h)))throw A.a(B.hH)
if(h!=="none")throw A.a(B.hv)
for(o=0;o<60;++o){n=p[o]
c=m.h(0,n.a)
c.toString
if(n.e)n.z=A.T(c)
else n.y=A.ax(c)}this.e=B.a.ap(B.dq,new A.uk(h))},
H(a){var s,r,q=this.w
q===$&&A.t()
s=A.C(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.ui(a)),s.i("I<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
bI(a){var s,r,q=this.w
q===$&&A.t()
s=A.C(q)
r=A.bK(new A.I(q,s.i("l(1)").a(new A.uh(a)),s.i("I<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.ul.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:9}
A.uf.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:9}
A.ug.prototype={
$1(a){return t.r.a(a).Q!==B.z},
$S:9}
A.um.prototype={
$2(a,b){var s=t.r
return B.c.I(s.a(a).a,s.a(b).a)},
$S:114}
A.uj.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:46}
A.uk.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:46}
A.ui.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.uh.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.uu.prototype={
$1(a){var s,r=Math.cos(0.8988445647770796)*Math.cos(a)
if(Math.abs(r)<1e-12)return 0
s=(Math.sin(-0.014538592669112763)-Math.sin(0.8988445647770796)*Math.sin(a))/r
if(s<=-1)return 24
if(s>=1)return 0
return Math.acos(s)*24/3.141592653589793},
$S:116}
A.c1.prototype={
B(){return"SleepQuality."+this.b}}
A.bD.prototype={
B(){return"SleepLocation."+this.b}}
A.hw.prototype={
gaz(){return this.a}}
A.pc.prototype={
dR(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jC(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.E(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.E(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.pd.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:117}
A.pe.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:118}
A.kT.prototype={
gE(){return this.a}}
A.l9.prototype={
B(){return"InteractionType."+this.b}}
A.fz.prototype={
B(){return"WorldComparisonKind."+this.b}}
A.vs.prototype={}
A.fy.prototype={}
A.ky.prototype={}
A.qw.prototype={}
A.qA.prototype={
f8(){var s,r,q,p=t.U,o=A.c([],p)
for(s=this.a.b,s=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.Y(p,new A.qB())
return p},
mw(a,b){var s,r,q,p,o,n=b.b
if(n.gR(n))return B.pE
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga3(),s=s.gv(s),p=a.c;s.m();){o=s.gq()
if(B.a.ga7(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.fy(B.aY,r)
s=r.a
o=B.a.ga7(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.ga7(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.fy(B.ex,r)
return new A.fy(B.cf,r)},
lp(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.ky(e,!1,B.pD,null)
s=q.d===c
r=this.mw(q,d)
this.d.$1(e)
return new A.ky(e,s,r,r.a===B.aY&&s?'The world says "'+d.c+'". The entry says "'+B.a.ga7(q.c).t(0)+'".':null)},
n5(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aY)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.qw(B.a.ga7(s.c).t(0)+" but "+A.y(a.f))}}
A.qB.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.I(s.a(b).a,a.a)},
$S:16}
A.iV.prototype={
gE(){return this.a}}
A.iU.prototype={
gE(){return this.a}}
A.dd.prototype={
gE(){return this.a}}
A.ta.prototype={}
A.tb.prototype={}
A.t9.prototype={
jY(a,b){var s,r,q,p,o,n,m,l,k,j
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
if(!q.K(m))throw A.a(A.o("roof "+n+" references missing drain "+m,null))}for(s=new A.ac(q,q.r,q.e,A.v(q).i("ac<2>"));s.m();){r=s.d
q=r.a
n=!0
if(q.length!==0){m=r.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){l=r.c
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){r=r.d
r=!isFinite(r)||r<=0||l.b>m.b+0.001}else r=n}else r=n}else r=n
if(r)A.f(A.o("invalid rain drain "+q,null))}},
jI(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=!0
if(isFinite(a9))if(!(a9<0))if(isFinite(a8))if(!(a8<0))a7=!isFinite(1)
if(a7)throw A.a(A.o("invalid rain flow step inputs",null))
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
B.a.k(s,new A.dd(h+":overflow",a3,new A.h(a3.a+0,a3.b+-0.55,a3.c+0),a2/a4,0.012+B.b.n(a2,0,0.02)*0.4))}r.l(0,i,0)}for(a7=s.length,k=0;k<s.length;s.length===a7||(0,A.u)(s),++k){a6=s[k]
q=a6.a
p=!0
if(q.length!==0){o=a6.b
i=o.a
if(isFinite(i)&&isFinite(o.b)&&isFinite(o.c)){h=a6.c
a3=h.a
if(isFinite(a3)&&isFinite(h.b)&&isFinite(h.c)){a4=a6.d
if(isFinite(a4))if(!(a4<0)){p=a6.e
p=!isFinite(p)||p<=0||new A.h(a3-i,h.b-o.b,h.c-o.c).gu(0)<0.00001}}}}if(p)A.f(A.o("invalid rain flow segment "+q,null))}return new A.tb(A.ab(s,t.z0),n,c,b)}}
A.ct.prototype={
B(){return"RuptureStep."+this.b}}
A.tr.prototype={}
A.df.prototype={}
A.ts.prototype={
gfk(){var s=B.bF.h(0,this.a)
return s==null?0:s},
jG(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.H)s=q.e
else s=!0
if(s)return B.dn
r=A.zR(b)
s=q.c
B.a.P(s)
B.a.L(s,r)
B.a.P(q.d)
q.a=B.aU
q.b=0
q.e=!1
return A.c([B.fl],t.xB)},
ei(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.a(A.o("rupture advance must be a finite non-negative duration",null))
if(l.a===B.H||a===0)return B.dn
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.H))break
A:{q=l.a
p=B.bF.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.ac)l.lS(s)
p=l.b
o=B.bF.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.df())
if(q===B.ac){l.a=B.H
l.b=0
l.e=!0
B.a.k(s,B.fk)}else{p=q.a+1
if(!(p<7))return A.d(B.di,p)
l.a=B.di[p]
l.b=0
B.a.k(s,new A.df())}}}return A.ab(s,t.F3)},
C(){var s=this,r=t.N
return A.E(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ab(s.c,r),"extinguishedMantles",A.ab(s.d,r),"completed",s.e],r,t.z)},
lS(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.n(B.b.aV(l.b/l.gfk()*A.ab(s,r).length),0,A.ab(s,r).length)
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
A.l_.prototype={
gfo(){var s=this.b
if(s<7||s>19)return 0
return B.b.n((s-7)/12,0,1)},
gn7(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.n((s-5.5)/15,0,1))},
fj(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.M("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
iN(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.M("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.ez.prototype={
B(){return"PrecipitationKind."+this.b}}
A.fv.prototype={
C(){var s=this
return A.E(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gaz(){return this.a}}
A.vk.prototype={
eE(a){var s,r
if(a<1||a>this.b.length)throw A.a(A.b_(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.xp.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.n(B.b.n(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nt(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.nt(q,p)&255)/255:1.2+(A.nt(q,p)&255)/255*0.8
p=A.nt(q,k+211)
q=A.nt(q,k+307)
n=A.nz(B.b.F(s,2))
m=A.nz(B.b.F(12-r*0.11000000000000001,2))
l=A.nz(B.b.F(o,2))
p=A.nz(B.b.F((p&65535)/65535*3.141592653589793*2,5))
q=A.nz(B.b.F(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fv(k,j,n,m,l,p,q,j?B.aw:B.w)},
$S:119}
A.hD.prototype={}
A.eE.prototype={}
A.v9.prototype={
C(){var s=this
return A.E(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.vi.prototype={
C(){var s=this,r=s.b,q=t.N
return A.E(["precipitationKind",s.a.b,"windVelocityMps",A.E(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fw.prototype={}
A.eG.prototype={
A(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.k_(s)){r=q.c
if(A.k_(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.a(A.o("invalid weather collision box "+p,null))},
gE(){return this.a}}
A.eH.prototype={
B(){return"WeatherImpactResponse."+this.b}}
A.mp.prototype={}
A.hE.prototype={
C(){return A.E(["snowDepthM",this.a,"waterFilmDepthM",this.b,"materialDissolution01",this.c],t.N,t.i)},
hx(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.a(A.o("weather surface state must be finite and >= 0",null))}}
A.vl.prototype={
$1(a){var s=this.a.h(0,a)
if(typeof s!="number"||!isFinite(s))throw A.a(A.M("weather surface "+a+" must be finite",null,null))
return s},
$S:120}
A.vm.prototype={
C(){var s=this
return A.E(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.f_.prototype={
B(){return"AuthoredEventConsumer."+this.b}}
A.pH.prototype={
pq(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.JL(s[q].b)},
nN(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dx(a.a+":"+a.c),q=t.sU,r=new A.al(r,r.gu(0),q.i("al<a3.E>")),q=q.i("a3.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.ai((l+(k-l)*(s/2147483647))*60)
n=B.b.hK(l*60)
m=B.b.aV(k*60)
return(n<=m?B.d.n(o,n,m):B.d.n(o,0,1439))/60},
hV(a){var s,r,q,p,o=A.c([],t.D)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
mn(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.pI.prototype={
$2(a,b){var s,r=B.d.I(a.gaz(),b.gaz())
if(r!==0)return r
s=B.b.I(a.gaX(),b.gaX())
return s!==0?s:J.AC(a.gE(),b.gE())},
$S:45}
A.kY.prototype={
cf(a,b){var s,r,q,p,o,n,m,l=A.c([],t.D)
for(s=this.a,r=s.hV(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
if(s.nN(m,p)<=b&&o.k(0,m.a))B.a.k(l,m)}return l},
ghU(){return new A.bI(this.nA(),t.oe)},
nA(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$ghU(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.m0(o.hV(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gnd(){var s=this.c
s=A.K(s,A.v(s).c)
B.a.X(s)
return s},
C(){var s=this.c
s=A.K(s,A.v(s).c)
B.a.X(s)
return A.E(["delivered",s],t.N,t.z)}}
A.pG.prototype={
$1(a){return this.a.mn(A.w(a))!=null},
$S:3}
A.ru.prototype={
aW(a,b){var s=this.b
if(s.K(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
nM(a){return this.aW(a,null)},
m7(a,b){var s,r,q=a.a
this.a.l(0,q,b.a)
s=this.b
s.l(0,"last-reaction",q)
for(q=b.d.gN(),q=q.gv(q);q.m();){r=q.gq()
s.l(0,r.a,r.b)}},
C(){var s,r,q,p,o,n,m,l,k=this.a,j=A.v(k).i("N<1,2>")
k=A.K(new A.N(k,j),j.i("r.E"))
B.a.Y(k,new A.rw())
j=t.N
k=A.zg(k,j,j)
s=this.b
r=A.v(s).i("N<1,2>")
s=A.K(new A.N(s,r),r.i("r.E"))
B.a.Y(s,new A.rx())
s=A.zg(s,j,j)
r=A.n(j,t.P)
q=this.c
p=A.v(q).i("N<1,2>")
q=A.K(new A.N(q,p),p.i("r.E"))
B.a.Y(q,new A.ry())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.l(0,m.a,A.E(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.E(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.rw.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:26}
A.rx.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:26}
A.ry.prototype={
$2(a,b){var s=t.gJ
return B.c.I(s.a(a).a,s.a(b).a)},
$S:123}
A.d1.prototype={
C(){var s=this
return A.E(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bC.prototype={
C(){var s=this
return A.E(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gE(){return this.a}}
A.rP.prototype={
f6(){var s,r,q,p,o,n,m,l="denise.pears",k=A.c([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
m="aftermath."+B.c.aQ(n.a,8)
if(p.K(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.k(k,n)}if(q.aW("ashworth.compact","accepted"))B.a.k(k,B.mz)
if(q.aW(l,"taken"))B.a.k(k,B.mD)
else if(q.aW(l,"left"))B.a.k(k,B.mA)
if(q.aW("sylvia.certificate","granted"))B.a.k(k,B.mC)
if(q.aW("residue.coal","cellar"))B.a.k(k,B.my)
if(q.aW("telegram.08","read"))B.a.k(k,B.mx)
if(q.aW("truth.shawl","home"))B.a.k(k,B.mw)
if(q.aW("sowerby.paraffin","received"))B.a.k(k,B.mB)
if(q.aW("inspector.proclamation","acknowledged"))B.a.k(k,B.mv)
return k},
j1(a){var s=this.f6(),r=A.C(s),q=r.i("I<1>")
s=A.K(new A.I(s,r.i("l(1)").a(new A.rQ(a)),q),q.i("r.E"))
return s}}
A.rQ.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:44}
A.uy.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hy(e.a),c=t.N,b=t.P,a=A.n(c,b)
for(s=e.b,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
q=r.a
a.l(0,q,e.lX(q,r.b))}s=A.hy(e.r)
q=A.hy(e.w)
p=A.hy(e.x)
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
lX(a,b){var s,r=A.hy(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.hy(q.bv(0,new A.uz(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.ga5(s))r.l(0,"_ambient",A.hy(s.bv(0,new A.uA(),t.S,t.z)))
return r}}
A.uz.prototype={
$2(a,b){return new A.P(A.i(a),t.BX.a(b).C(),t.pr)},
$S:125}
A.uA.prototype={
$2(a,b){return new A.P(A.i(a),t.vw.a(b).C(),t.pr)},
$S:126}
A.fu.prototype={
C(){return A.E(["hour",this.a,"order",this.b],t.N,t.S)},
gaX(){return this.a}}
A.ft.prototype={
C(){return A.E(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaX(){return this.a}}
A.jf.prototype={
C(){var s=t.N
return A.E(["field",this.a,"value",this.b],s,s)}}
A.mn.prototype={
C(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].C())
return A.E(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gE(){return this.a},
gaz(){return this.c}}
A.fk.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"label",r.b)
q.l(0,"reply",r.c)
s=r.d
if(s.ga5(s))q.l(0,"effects",s)
return q},
gE(){return this.a}}
A.dl.prototype={
C(){var s,r=this,q=A.n(t.N,t.z)
q.l(0,"id",r.a)
q.l(0,"target",r.b)
q.l(0,"replacement",r.c)
s=r.d
if(s.ga5(s))q.l(0,"when",s)
return q},
gE(){return this.a}}
A.uw.prototype={
pp(){var s,r,q,p,o,n,m,l,k=A.n(t.S,t.r6)
for(s=this.c,r=s.length,q=t.D,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.c
m=k.h(0,n)
if(m==null){m=A.c([],q)
k.l(0,n,m)
n=m}else n=m
B.a.k(n,o)}for(l=1;l<=21;++l){s=k.h(0,l)
s=s==null?null:s.length===0
if(s!==!1)throw A.a(A.j("campaign schedule has no event for day "+l))}s=A.a_(t.N)
for(r=k.h(0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)s.k(0,r[p].b)
if(!s.p(0,"broadcast")||!s.p(0,"visitor"))throw A.a(A.j("day 1 schedule needs broadcast and visitor events"))
s=k.h(0,21)
s.toString
if(!B.a.M(s,new A.ux()))throw A.a(A.j("day 21 schedule needs an ending event"))}}
A.ux.prototype={
$1(a){return t.Dm.a(a).b==="ending"},
$S:127}
A.dQ.prototype={
gE(){return this.a},
gaz(){return this.c},
gaX(){return this.d}}
A.ty.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.tz.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.f(A.M("screenplay event "+a+" is invalid",null,null))
return s},
$S:27}
A.lX.prototype={
gE(){return this.a},
gaz(){return this.b}}
A.lU.prototype={}
A.lV.prototype={
gE(){return this.a}}
A.lW.prototype={
gE(){return this.a}}
A.uB.prototype={
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
return A.a6(A.av(A.b(A.b(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$bh)
case 12:k=a3
s=A.T(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a6(A.av(A.b(k.text()),f),$async$bh)
case 15:e=a1.ak(a3,null)
d=t.f
if(!d.b(e)||!J.aa(e.h(0,"schema"),"quarantine.dialogue.v1")||!d.b(e.h(0,"corpus"))||!d.b(e.h(0,"screenplay")))A.f(B.hD)
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
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$bh)
case 19:j=a3
s=20
return A.a6(A.av(A.b(j.text()),t.N),$async$bh)
case 20:m=a3
case 17:i=A.JY(m)
f=J.b1(i,"broadcasts")
f.toString
d=t.P
o.a=d.a(f)
f=J.b1(i,"visitors")
f.toString
o.b=d.a(f)
f=J.b1(i,"vocabulary")
f.toString
o.c=d.a(f)
f=J.b1(i,"documents")
f.toString
d.a(f)
f=J.b1(i,"street")
f.toString
d.a(f)
f=J.b1(i,"unverifiables")
f.toString
o.f=d.a(f)
f=J.b1(i,"nights")
f.toString
d.a(f)
f=J.b1(i,"endings")
f.toString
o.w=d.a(f)
f=J.b1(i,"records")
f.toString
o.x=d.a(f)
f=J.b1(i,"cues")
f.toString
d.a(f)
f=J.b1(i,"claims")
f.toString
o.z=d.a(f)
f=t.f
if(f.b(J.b1(i,"reactions"))){b=J.b1(i,"reactions")
if(b==null)b=f.a(b)
b=A.aZ(b,t.N,t.z)}else b=A.n(t.N,t.z)
o.Q=d.a(b)
if(f.b(J.b1(i,"variants"))){b=J.b1(i,"variants")
if(b==null)b=f.a(b)
b=A.aZ(b,t.N,t.z)}else b=A.n(t.N,t.z)
o.as=d.a(b)
if(f.b(J.b1(i,"residues"))){b=J.b1(i,"residues")
f=b==null?f.a(b):b
f=A.aZ(f,t.N,t.z)}else f=A.n(t.N,t.z)
o.at=d.a(f)
s=n==null?21:23
break
case 21:s=24
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/story_script.json")),t.m),$async$bh)
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
return A.a6(A.av(A.b(h.text()),t.N),$async$bh)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.Gq(a3)
o.ax=f
f.pp()
f=o.ax
f.toString
o.ay=A.Fg(f)
case 26:q=1
s=5
break
case 3:q=2
a0=p.pop()
g=A.ah(a0)
f=A.y(g)
throw A.a("Failed to load text.json: "+f)
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$bh,r)},
j0(a){var s,r,q,p=this.a
p===$&&A.t()
s=p.h(0,B.d.t(a))
if(t.f.b(s)){p=s.gN().dL(0,new A.uC())
r=p.$ti
q=t.N
return A.zg(new A.cO(p,r.i("P<e,e>(1)").a(new A.uD()),r.i("cO<1,P<e,e>>")),q,q)}return null},
f7(a,b){var s=this.j0(a)
return s==null?null:s.h(0,b)},
j4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
k.l(0,h,A.w(i.b))}B.a.k(p,new A.fk(A.w(m.h(0,"id")),A.w(m.h(0,"label")),A.w(m.h(0,"reply")),A.aX(k,n,n)))}if(p.length<2)return g
return new A.mn(r,a,b,c,d,A.ab(p,t.Y))},
j3(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.t()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.t(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aE(p)||o!==B.b.aE(o))return n
return new A.fu(B.b.aE(p),B.b.aE(o))},
j2(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.t()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.t(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.aE(p)||typeof o!="string"||typeof n!="string")return m
return new A.ft(B.b.aE(p),o,n)},
pt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
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
k=typeof l=="string"?A.dM(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gN(),m=m.gv(m);m.m();){l=m.gq()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.w(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a6.l(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("bW<1>"),l=new A.bW(n,n.r,n.e,m);l.m();){i=l.d
g=a1.j3(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a7.l(0,o,h)
f=A.n(a3,s)
for(m=new A.bW(n,n.r,n.e,m);m.m();){l=m.d
e=a1.j2(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a8.l(0,o,f)}b4=a1.Q
b4===$&&A.t()
b4=new A.ac(b4,b4.r,b4.e,A.v(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.j4(A.w(d.h(0,"visitor")),B.b.aE(A.a1(d.h(0,"day"))),A.w(d.h(0,"tier")),B.b.aE(A.a1(d.h(0,"ordinal"))))
if(c!=null)b1.l(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.t()
b4=new A.ac(b4,b4.r,b4.e,A.v(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gN(),s=s.gv(s);s.m();){r=s.gq()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.l(0,o,A.w(r.b))}s=A.w(d.h(0,"id"))
b2.l(0,s,new A.dl(s,A.w(d.h(0,"target")),A.w(d.h(0,a2)),A.aX(b,a5,a5)))}b4=a1.at
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
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.jf(A.w(a0.h(0,"field")),A.w(a0.h(0,"value"))))}if(o.length!==0)b0.l(0,p.a,o)}return new A.uy(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.uC.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:129}
A.uD.prototype={
$1(a){t.AC.a(a)
return new A.P(A.w(a.a),A.w(a.b),t.q)},
$S:130}
A.kf.prototype={
bW(a,b,c){var s=B.c.aP(a),r=B.c.aP(c)
if(r.length===0)return""
if(b||this.a===B.ch)return s.length===0?r:s+": "+r
if(this.a===B.cg)return r
return s.length===0?r:s+": "+r},
ie(a,b){return this.bW(a,!1,b)}}
A.z4.prototype={}
A.d_.prototype={
B(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.eb.prototype={
ck(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.eb(q,p,o,n,m)},
mY(a){var s=null
return this.ck(s,s,s,a,s)},
n3(a){var s=null
return this.ck(s,s,s,s,a)},
mU(a){var s=null
return this.ck(s,s,a,s,s)},
mS(a){var s=null
return this.ck(s,a,s,s,s)},
mz(a){var s=null
return this.ck(a,s,s,s,s)},
C(){var s=this,r=s.f
r=r==null?null:r.b
return A.E(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.nK.prototype={
$1(a){return a==null?null:A.T(a)},
$S:131}
A.nI.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:41}
A.nJ.prototype={
$0(){return A.f(B.iz)},
$S:7}
A.nV.prototype={
c5(a,b){var s,r=this,q=r.e.ie(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aM(q)
A.i(A.b(v.G.window).setTimeout(A.CO(new A.nX(r)),7000))},
aM(a){var s,r,q=this
if(!q.c||B.c.aP(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.i(A.b(v.G.window).setTimeout(A.CO(new A.nW(q,s)),4200))}}
A.nX.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:133}
A.nW.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.o2.prototype={
oV(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cH.prototype={
B(){return"AudioOutputMode."+this.b}}
A.d0.prototype={
B(){return"AudioDynamicRange."+this.b}}
A.dv.prototype={
B(){return"AudioReverbMode."+this.b}}
A.du.prototype={
B(){return"AudioDuckingMode."+this.b}}
A.ed.prototype={
d4(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.ed(r,q,p,a==null?s.e:a)},
mQ(a){return this.d4(null,null,a,null)},
mG(a){return this.d4(null,a,null,null)},
mW(a){return this.d4(null,null,null,a)},
mF(a){return this.d4(a,null,null,null)},
C(){var s=this
return A.E(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.oc.prototype={
$1$2(a,b,c){return B.a.b5(c.i("r<0>").a(a),new A.od(b,c),new A.oe(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:134}
A.od.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oe.prototype={
$0(){return A.f(A.M("unsupported audio option: "+A.y(this.a),null,null))},
$S:7}
A.oF.prototype={
pl(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.S.ie(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.oI.prototype={
$1(a){return this.a.$0()},
$S:2}
A.oM.prototype={
$1(a){return this.a.$1(A.T(this.b.checked))},
$S:2}
A.oL.prototype={
$1(a){var s=A.fh(A.w(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.oK.prototype={
$1(a){A.w(a)
return a.length!==0&&!B.c.V(a,"brush-state-")},
$S:3}
A.ek.prototype={
B(){return"BrushComponentKind."+this.b}}
A.el.prototype={
B(){return"BrushComponentState."+this.b}}
A.bo.prototype={
gm1(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
A(){var s=this
if(B.c.aP(s.a).length===0||B.c.aP(s.c).length===0)throw A.a(B.ii)
if(s.e===B.cs&&s.b!==B.cr)throw A.a(B.hA)},
gE(){return this.a}}
A.oO.prototype={
ny(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.n(a>=r+c?q.e=a-c+1:r,0,s)},
dN(a,b){if(b<=0){this.f=0
return}this.f=B.d.n(this.f+a,0,Math.max(0,b-1))},
bT(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
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
this.fU(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fU(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aU(a,b,c,d,e,f,g,h,i){return this.bT(a,b,c,d,e,!0,f,g,h,i)},
nl(a,b,c,d,e,f,g,h,i){return this.bT(a,b,14,c,d,e,f,g,h,i)},
nq(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.t()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eL()
s.c9(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aB()-0.5)*8
l=s.aB()
k=s.aB()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hT(a,b,c,d,e){var s,r,q=this.b
q===$&&A.t()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fT(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fT(0,0,c)
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
no(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.t()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a1(A.b(q.measureText(a.toUpperCase())).width)+70)
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
nn(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
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
k=Math.min(r-28,Math.max(180,A.a1(A.b(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bT(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gpd()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.lZ(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.b6(i,0,new A.oP(c7),t.i)
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
c7.ny(d1==null?0:d1,c,a6)
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
B.a.k(f,new A.fY("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aU(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.hT(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bA(b1,g),c1+22,b3)
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
B.a.k(c7.d,new A.fY("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aU("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
nr(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.Kv(a1,50,-30),f=a0<640||a<540,e=f?108:116,d=f?68:72,c=a0-e*0.5-24,b=f?122:126
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
for(k=l+0.5,j=0;j<5;++j){m.fillStyle=B.kq[j]
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
nm(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
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
this.bT(a0?"#f5f0e6":"#c49a45",1.5,6,a1,28,a0,-0.04,o,c,b)
a1=this.b
a1===$&&A.t()
a1.save()
a2=a0?"#f5f0e6":"#c49a45"
a1.fillStyle=a2
a1.font='bold 11px "Courier New", monospace'
a1.textAlign="center"
a1.textBaseline="middle"
a1.fillText(this.bA("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
np(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
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
c3.nq(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
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
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.av[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.bT(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
d2.fillText(d5.e.gni().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bA(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbt()
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
c3.bT(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.hT(!0,g+1,20,b3-j+20,b2)
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
d2.fillText(c3.bA(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
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
c3.nl(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.ges(),c,b2)}else{b8=b5-80-80
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
d2.fillText(b0.ges(),b5,b2)}d2.restore()}d2.restore()
if(a7>0){d2.save()
d2.fillStyle="#ffd54f"
d2.font='bold 10px "Cinzel", serif'
d2.textAlign="right"
d2.textBaseline="middle"
if(c3.f>0)d2.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c3.f<a7)d2.fillText("\u25bc SCROLL DOWN",o+l-28,a4+8)
d2.restore()}}c0=n+m-24
c1=d5.gbQ()
if(d5.b===5)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.z)m="LIVE \u2022 REQUESTED "+c1.gnG()+" \u2022 EFFECTIVE "+c1.ges()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.bA(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
fU(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.t()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fT(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.t()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
lZ(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a1(A.b(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bA(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.t()
s=A.a1(A.b(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.t()
p=A.a1(A.b(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.J(r,0,s-1)}return q?"...":r+"..."}}
A.oP.prototype={
$2(a,b){var s
A.ax(a)
A.w(b)
s=this.a.b
s===$&&A.t()
return Math.max(a,A.a1(A.b(s.measureText(b)).width))},
$S:135}
A.h2.prototype={
gmj(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gN(),s=s.gv(s);s.m();){r=s.gq()
q=r.a
r=r.b
p=J.aQ(r)
o.l(0,q,p.gR(r)?"":p.ga1(r))}return o},
bP(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.E(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.i(s)
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
return A.h3(null,a,A.T(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.i(s)
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
l=k.gmj()
return A.h3(l,null,m,r,p,o,s,q)},
en(a){var s=null
return this.bP(a,s,s,s,s,s)},
mM(a){var s=null
return this.bP(s,s,s,a,s,s)},
mN(a){var s=null
return this.bP(s,s,s,s,a,s)},
mJ(a){var s=null
return this.bP(s,a,s,s,s,s)},
mK(a){var s=null
return this.bP(s,s,a,s,s,s)},
n4(a){var s=null
return this.bP(s,s,s,s,s,a)},
A(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.a(B.hb)
p=this.r
if(p.gN().M(0,new A.p3()))throw A.a(B.ir)
if(p.gN().M(0,new A.p4()))throw A.a(B.hX)
p=p.gam()
o=A.v(p)
s=o.i("im<r.E,e>")
r=s.i("I<r.E>")
q=A.K(new A.I(new A.im(p,o.i("r<e>(r.E)").a(new A.p5()),s),s.i("l(r.E)").a(new A.p6()),r),r.i("r.E"))
if(A.hi(q,A.C(q).c).a!==q.length)throw A.a(B.hg)},
C(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gN(),s=s.gv(s);s.m();){r=s.gq()
o.l(0,r.a,A.aG(r.b,!0,p))}return A.E(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.p3.prototype={
$1(a){t.yx.a(a)
return J.kd(a.b,new A.p2(a))},
$S:40}
A.p2.prototype={
$1(a){var s
A.w(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.AP(a)
else s=!1
return s},
$S:3}
A.p4.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.kd(a.b,B.e2.gaF(B.e2))},
$S:40}
A.p5.prototype={
$1(a){return t.a.a(a)},
$S:137}
A.p6.prototype={
$1(a){return A.w(a).length!==0},
$S:3}
A.p1.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.ej.prototype={
B(){return"BindingCaptureStatus."+this.b}}
A.f0.prototype={
B(){return"BindingConflictResolution."+this.b}}
A.dw.prototype={}
A.kz.prototype={
cg(a){var s=this
if(!s.a.r.K(a))return new A.dw(B.co,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.eQ},
mq(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b4
if(!A.AP(a)){p.c=p.b=null
return new A.dw(B.cq,B.e4.p(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gN()
r=r.gv(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gq()
s=q.a
if(s===o)break A
if(J.AD(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dw(B.b5,a+" is already bound to "+s)}return p.kb(a)},
cB(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b4
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eR
case 1:s=A.zH(m.a.r)
r=s.h(0,l)
r.toString
s.l(0,l,A.A1(r,k))
r=s.h(0,j)
r.toString
s.l(0,j,A.Ag(r,k))
m.a=m.a.en(s)
break
case 0:s=A.zH(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga1(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.hz(p,1,null,A.C(p).c)
o=p.$ti
p=new A.al(p,p.gu(0),o.i("al<a0.E>"))
o=o.i("a0.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.l(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.Ag(r,k)}else{r=s.h(0,j)
r.toString
r=A.A1(A.Ag(r,k),q)}s.l(0,j,r)
m.a=m.a.en(s)
break}m.c=m.e=m.d=null
return B.cm},
kb(a){var s,r,q=this,p=q.b
if(p==null)return B.b4
s=A.zH(q.a.r)
r=s.h(0,p)
r.toString
s.l(0,p,A.A1(r,a))
q.a=q.a.en(s)
q.b=null
return B.cm}}
A.ih.prototype={
jR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.kz(f.w)
s=f.b
s.className=A.w(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.oJ(a,B.f_,1)))
A.b(s.appendChild(A.F(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.F(a,"div",c,e)
f.fu(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fu(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dV(a,r,"invertX","Invert horizontal look")
f.dV(a,r,"invertY","Invert vertical look")
f.dV(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.F(a,"div",c,e)
for(p=B.lk.gN(),p=p.gv(p),o=f.Q;p.m();){n=p.gq()
m=n.a
l=A.h3(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.ke(l)?"unbound":J.AF(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.em(a,new A.bo("settings.controls.bind."+m,B.cr,n,h,B.q),new A.p_(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.b(j.appendChild(g))
A.b(q.appendChild(j))
o.l(0,m,g)}A.b(s.appendChild(q))
p=A.F(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.F(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.ee()
A.b(s.appendChild(A.em(a,B.f0,new A.p0(f),e)))},
iz(a){var s=this.x
s===$&&A.t()
if(s.b==null)return
a.preventDefault()
this.fX(this.x.mq(A.w(a.code)))},
fX(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.b5?B.f4:B.q
p=o.Q.h(0,r)
if(p!=null)A.z6(p,q)}n=a.a
if(n===B.b5)o.lH()
else if(n===B.cp){n=o.x
n===$&&A.t()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.ee()}else{o.dY()
o.ax=null}},
lH(){var s,r,q,p,o
this.dY()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.jY[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.em(p,new A.bo("settings.controls.resolve."+o,B.L,o,"resolve key binding conflict",B.q),new A.oZ(this,q),null)))}},
dY(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
ee(){var s,r,q,p
for(s=this.Q,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.t()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.ke(p)?"unbound":J.AF(p," / ")
r.textContent=q
A.z6(r,B.q)}},
fu(a,b,c,d,e,f){var s,r=A.F(a,"label","setting-row",null)
A.b(r.appendChild(A.F(a,"span",null,d)))
s=A.EE(a,new A.bo("settings.controls."+c,B.f2,d,null,B.q),f,e,new A.oX(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.l(0,c,s)},
dV(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.EF(a,new A.bo("settings.controls."+c,B.f3,d,null,B.q),!1,new A.oY(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.F(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.l(0,c,r)},
fV(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seL(a){this.f=t.pf.a(a)},
sbi(a){this.r=t.Z.a(a)}}
A.p_.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.t()
s=n.cg(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cn){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.z6(q,B.cs)}p.dY()
return null},
$S:0}
A.p0.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.oZ.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.t()
return s.fX(r.cB(this.b))},
$S:0}
A.oX.prototype={
$1(a){var s=this.a,r=s.w
s.fV(this.b==="horizontalSensitivity"?r.mK(a):r.n4(a))},
$S:138}
A.oY.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mM(a)
break A}if("invertY"===q){s=r.w.mN(a)
break A}s=r.w.mJ(a)
break A}r.fV(s)},
$S:12}
A.p7.prototype={
jS(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.b(o.appendChild(A.F(s,"h1","journal-title","credits")))
r=A.F(s,"p","credits-body",null)
p.f!==$&&A.b6()
p.f=r
r.textContent="\u2014"
A.b(o.appendChild(r))
A.b(o.appendChild(A.F(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.F(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.p8(p)))
A.b(o.appendChild(q))}}
A.p8.prototype={
$1(a){return this.a.ah()},
$S:2}
A.pf.prototype={
jU(a){var s,r,q=this,p=null,o="div",n=q.a
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
A.b(n.appendChild(s))
A.b(n.appendChild(r))
r=A.F(a,o,"door-choice-status",p)
q.d!==$&&A.b6()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(r))
r=A.F(a,o,"door-cite-list",p)
q.f!==$&&A.b6()
q.f=r
s=A.F(a,o,"door-cite-result",p)
q.r!==$&&A.b6()
q.r=s
A.b(n.appendChild(r))
A.b(n.appendChild(s))
s=A.F(a,"button","door-continue","continue")
q.e!==$&&A.b6()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.pg(q)))
A.b(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.ph(q,a)))
A.b(A.G(a.body).appendChild(n))},
ff(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.t()
s.textContent=a
s=r.c
s===$&&A.t()
s.textContent=B.S.bW("",!0,b)
s=r.d
s===$&&A.t()
s.textContent=A.AS(B.bo)
s=r.e
s===$&&A.t()
A.b(s.style).display="none"
s=r.f
s===$&&A.t()
s.textContent=""
s=r.r
s===$&&A.t()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
fg(a,b){var s,r=this,q=r.c
q===$&&A.t()
q.textContent=B.S.bW("",!0,a)
q=r.d
q===$&&A.t()
q.textContent=""
q=r.e
q===$&&A.t()
q=A.b(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.t()
s.textContent=""},
jr(a){return this.fg(a,!1)},
jt(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.t()
s=A.b(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.t()
s.textContent=A.AS(r)},
fh(a,b){var s=this.c
s===$&&A.t()
s.textContent=B.S.bW("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.t()
s.textContent=""
s=this.e
s===$&&A.t()
A.b(s.style).display=""},
jq(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.t()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.u)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.b(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.Z(new A.pi(p,this)))
A.b(s.appendChild(n))}},
ip(){var s,r=this
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
soh(a){this.w=t.Z.a(a)},
sog(a){this.x=t.vR.a(a)}}
A.pg.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$0()},
$S:30}
A.ph.prototype={
$1(a){var s,r,q,p,o,n,m
A.b(a)
s=this.a
if(!s.y||A.w(a.code)!=="Tab")return
r=A.c([],t.W)
q=s.e
q===$&&A.t()
if(A.w(A.b(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.t()
p=A.b(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.i(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.k(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.T(a.shiftKey)){if(m===B.a.ga1(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga7(r).focus()}}else if(m===B.a.ga7(r)||!B.a.p(r,m)){a.preventDefault()
B.a.ga1(r).focus()}},
$S:141}
A.pi.prototype={
$1(a){var s
A.b(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:30}
A.pl.prototype={
jV(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.F(s,"h1","journal-title",null)
o.f!==$&&A.b6()
o.f=r
q=A.F(s,"div","ending-copy",null)
o.r!==$&&A.b6()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.F(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.pm(o)))
A.b(n.appendChild(p))},
js(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.t()
s.textContent=a.a.b
s=m.r
s===$&&A.t()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bZ()},
som(a){this.w=t.Z.a(a)}}
A.pm.prototype={
$1(a){var s=this.a
s.ah()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.pQ.prototype={
bJ(a,b,c,d){var s=this
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
pk(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
nK(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hD()
return!0}return!1}if(a==="Space"){s=B.a.eG(l,new A.pR())
if(s!==-1){n.cI(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.O(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.O(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cI(q)
return!0}}if(B.c.V(a,"Digit")){p=A.dM(B.c.aQ(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.V(a,"Numpad")){p=A.dM(B.c.aQ(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cI(o)
return!0}return!1},
cI(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
hD(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
nL(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hD()
return!0}this.cI(a.b)
return!0},
sof(a){this.y=t.dt.a(a)},
sol(a){this.z=t.Z.a(a)}}
A.pR.prototype={
$1(a){A.w(a)
return B.c.p(a.toLowerCase(),"silent")||B.c.p(a,"...")},
$S:3}
A.pS.prototype={}
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
A.cp.prototype={
B(){return"GameplayFocusLossBehavior."+this.b}}
A.dC.prototype={
B(){return"GameplayClockFormat."+this.b}}
A.ha.prototype={
aT(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.z7(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
n0(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,s,a,s)},
n_(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,a,s,s)},
mC(a){var s=null
return this.aT(s,s,a,s,s,s,s,s,s,s,s)},
mL(a){var s=null
return this.aT(s,s,s,s,a,s,s,s,s,s,s)},
mT(a){var s=null
return this.aT(s,s,s,s,s,s,a,s,s,s,s)},
n1(a){var s=null
return this.aT(s,s,s,s,s,s,s,s,s,s,a)},
mO(a){var s=null
return this.aT(s,s,s,s,s,a,s,s,s,s,s)},
mB(a){var s=null
return this.aT(s,a,s,s,s,s,s,s,s,s,s)},
mX(a){var s=null
return this.aT(s,s,s,s,s,s,s,a,s,s,s)},
mA(a){var s=null
return this.aT(a,s,s,s,s,s,s,s,s,s,s)},
mH(a){var s=null
return this.aT(s,s,s,a,s,s,s,s,s,s,s)},
C(){var s=this
return A.E(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.pT.prototype={
$1$2(a,b,c){var s
A.Ds(c,t.Ct,"T","call")
c.i("r<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.a(A.M("invalid gameplay setting: "+a,null,null))
return B.a.b5(b,new A.pU(s,c),new A.pV(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:142}
A.pU.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.pV.prototype={
$0(){return A.f(A.M("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cJ.prototype={
B(){return"GraphicsPreset."+this.b}}
A.dH.prototype={
b2(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dH(s.a,r,q,p,o,n,m,l,k,j,i)},
em(a){var s=null
return this.b2(a,s,s,s,s,s,s,s,s,s)},
hO(a){var s=null
return this.b2(s,s,a,s,s,s,s,s,s,s)},
hP(a){var s=null
return this.b2(s,s,s,s,s,s,a,s,s,s)},
mP(a){var s=null
return this.b2(s,s,s,s,a,s,s,s,s,s)},
mV(a){var s=null
return this.b2(s,s,s,s,s,s,s,a,s,s)},
mI(a){var s=null
return this.b2(s,s,s,a,s,s,s,s,s,s)},
n2(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,s,a)},
mR(a){var s=null
return this.b2(s,s,s,s,s,a,s,s,s,s)},
mE(a){var s=null
return this.b2(s,a,s,s,s,s,s,s,s,s)},
mZ(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,a,s)},
A(){var s=this,r=null,q=s.c
if(!B.a.p(B.kS,q))throw A.a(A.M("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.p(B.k4,q))throw A.a(A.M("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.p(B.kW,q))throw A.a(A.M("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.p(B.kO,q))throw A.a(A.M("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.p(B.l4,q))throw A.a(A.M("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.p(B.kV,q))throw A.a(A.M("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.p(B.kX,q))throw A.a(A.M("unsupported graphics shadow quality: "+q,r,r))},
C(){var s=this
return A.E(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.q6.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:38}
A.q7.prototype={
$0(){return A.f(B.hK)},
$S:7}
A.q8.prototype={
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)}}
A.pZ.prototype={}
A.q_.prototype={}
A.iu.prototype={
jW(a){var s,r,q,p,o,n,m=this,l=null,k="settings-copy",j="setting-toggle",i="door-continue",h=m.b
h.setAttribute("aria-label","Graphics settings")
A.b(h.appendChild(A.F(a,"h1","journal-title","Graphics")))
A.b(h.appendChild(A.F(a,"p",k,"Choose a visual budget without changing simulation truth.")))
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
r=A.b(a.createElement("input"))
m.y=r
r.type="checkbox"
r=m.y
r.toString
r.addEventListener("change",A.Z(new A.q2(m)))
r=m.y
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.F(a,"span",l,"Dynamic resolution")))
A.b(s.appendChild(q))
p=A.F(a,"label",j,l)
r=A.b(a.createElement("input"))
m.z=r
r.type="checkbox"
r=m.z
r.toString
r.addEventListener("change",A.Z(new A.q3(m)))
r=m.z
r.toString
A.b(p.appendChild(r))
A.b(p.appendChild(A.F(a,"span",l,"Model package diagnostics (debug)")))
A.b(s.appendChild(p))
A.b(h.appendChild(s))
r=A.F(a,"p",k,l)
m.Q=r
r.setAttribute("aria-live","polite")
r=m.Q
r.toString
A.b(h.appendChild(r))
o=A.F(a,"button",i,"Load Optimized Defaults")
o.setAttribute("type","button")
o.id="settings.graphics.optimized-defaults"
o.setAttribute("aria-label","load optimized graphics defaults")
o.addEventListener("click",A.Z(new A.q4(m)))
A.b(h.appendChild(o))
n=A.F(a,"button",i,"back")
n.setAttribute("type","button")
n.id="settings.graphics.back"
n.setAttribute("aria-label","back to settings categories")
n.addEventListener("click",A.Z(new A.q5(m)))
A.b(h.appendChild(n))},
bl(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.F(a,"label","setting-row",null)
A.b(s.appendChild(A.F(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.N(e,A.v(e).i("N<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.Z(new A.q1(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.x.l(0,c,r)},
e7(a){var s
a.A()
this.as=a
s=this.f
if(s!=null)s.$1(a)},
cJ(a,b,c){var s,r,q=this
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
seL(a){this.f=t.CA.a(a)},
sos(a){this.r=t.Z.a(a)},
sbi(a){this.w=t.Z.a(a)}}
A.q2.prototype={
$1(a){var s=this.a
s.e7(s.as.hO(A.T(s.y.checked)))},
$S:1}
A.q3.prototype={
$1(a){var s=this.a
s.e7(s.as.mP(A.T(s.z.checked)))},
$S:1}
A.q4.prototype={
$1(a){var s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.q5.prototype={
$1(a){var s=this.a,r=s.w
if(r!=null)r.$0()
else s.ah()},
$S:1}
A.q1.prototype={
$1(a){var s,r=A.w(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.as.hP(B.a.ap(B.dh,new A.q0(r)))
break A}if("renderScale"===p){s=q.as.mV(r)
break A}if("frameTarget"===p){s=q.as.mI(r)
break A}if("antialiasing"===p){s=q.as.em(r)
break A}if("textureQuality"===p){s=q.as.n2(r)
break A}if("outputEncoding"===p){s=q.as.mR(r)
break A}if("diagnosticLevel"===p){s=q.as.mE(r)
break A}if("shadowQuality"===p){s=q.as.mZ(r)
break A}s=q.as
break A}q.e7(s)},
$S:1}
A.q0.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:38}
A.kg.prototype={
B(){return"ActiveGuiPanel."+this.b}}
A.cm.prototype={}
A.q9.prototype={
j_(a,b,c){if(c)return B.kl
if(b&&a!=null)return A.c([new A.cm("E","Examine "+a,!0),new A.cm("TAB","Journal",!1),new A.cm("CAPS","Shader Lab",!1)],t.sa)
return B.lf}}
A.qa.prototype={
jX(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.F(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.F(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.F(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.F(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.qb(this)))
A.b(p.appendChild(r))}}
A.qb.prototype={
$1(a){return this.a.ah()},
$S:2}
A.qK.prototype={
bZ(){var s,r=this
r.jL()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fE(r.CW,s)
r.lv()
r.he()},
kh(){var s,r=this,q=r.a,p=A.F(q,"div","page-turn",null),o=A.F(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.qL(r)))
s=A.F(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.qM(r)))
q=A.F(q,"span","right-day-label",null)
r.Q!==$&&A.b6()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
hu(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fE(s.CW+a,r)
s.he()},
fE(a,b){if(a<1)return 1
if(a>b)return b
return a},
lv(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.t()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.t()
s.textContent=""
for(s=l.w.f8(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=B.a.ga7(o.c).t(0)
m=A.b(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.Z(new A.qN(l,o,m)))
A.b(k.appendChild(m))}},
he(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.t()
s=t.U
r=A.c([],s)
for(q=j.f,p=q.b,o=A.v(p).i("ac<2>"),n=new A.ac(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.qO())
j.hd(i,r)
i=j.Q
i===$&&A.t()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.t()
s=A.c([],s)
for(r=new A.ac(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.qP())
j.hd(i,s)
k=B.b.n(q.f/4,0,1)
i=j.as
i===$&&A.t()
A.b(i.style).setProperty("width",B.b.F(k*100,1)+"%")},
hd(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.b(a.appendChild(this.kK(b[r])))},
kK(a){var s,r,q,p,o,n=A.F(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.b(n.appendChild(this.h1(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.h1(p,!1)
o.className=A.w(o.className)+" margin"
A.b(n.appendChild(o))}return n},
h1(a,b){var s=b?"hand-line struck":"hand-line",r=A.F(this.a,"div",s,a.t(0))
A.b(r.style).setProperty("--shake",B.b.t(a.b))
return r}}
A.qL.prototype={
$1(a){return this.a.hu(-1)},
$S:2}
A.qM.prototype={
$1(a){return this.a.hu(1)},
$S:2}
A.qN.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.qO.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:16}
A.qP.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:16}
A.dc.prototype={}
A.fY.prototype={
gE(){return this.a}}
A.rE.prototype={
gpd(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.J(s,0,B.b.aE(B.b.n(r*q,0,r)))}}
A.iN.prototype={
b_(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.G(this.a.body).appendChild(s))},
bZ(){var s,r,q,p,o=this,n=o.b
if(B.c.p(A.w(n.className),"open"))return
s=$.rF
if(s!=null&&s!==o)s.ah()
$.rF=o
r=o.a
o.d=A.G(r.activeElement)
A.qH(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glk())
o.e=q
r.addEventListener("keydown",q)
p=A.CM(n)
if(p.length!==0)B.a.ga1(p).focus()
else n.focus()},
ah(){var s,r,q=this,p=q.b
if(!B.c.p(A.w(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.rF===q)$.rF=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
iz(a){},
ll(a){A.b(a)
this.iz(a)
if(A.T(a.defaultPrevented))return
if(A.w(a.code)==="Escape"){a.preventDefault()
this.ah()
return}if(A.w(a.code)==="Tab")this.lP(a)},
lP(a){var s,r=A.CM(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.T(a.shiftKey)){if(s===B.a.ga1(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga7(r).focus()}}else if(s===B.a.ga7(r)||!B.a.p(r,s)){a.preventDefault()
B.a.ga1(r).focus()}},
sb8(a){this.c=t.Z.a(a)}}
A.bB.prototype={
B(){return"PauseReason."+this.b}}
A.cs.prototype={
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
ghI(){var s=this.a
return s.length===1&&B.a.ga1(s).a===B.bI},
C(){var s=A.n(t.N,t.X),r=this.a,q=A.C(r),p=q.i("H<1,Y<e,L?>>")
r=A.K(new A.H(r,q.i("Y<e,L?>(1)").a(new A.rK()),p),p.i("a0.E"))
r.$flags=1
s.l(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("H<1,e>")
r=A.K(new A.H(r,q.i("e(1)").a(new A.rL()),p),p.i("a0.E"))
s.l(0,"modalReasons",r)
r=this.c
if(r!=null)s.l(0,"restoreFocusId",r)
return s}}
A.rK.prototype={
$1(a){return t.oP.a(a).C()},
$S:144}
A.rL.prototype={
$1(a){return t.wJ.a(a).b},
$S:145}
A.ca.prototype={}
A.rJ.prototype={
iA(a){var s,r=this
if(r.a.ghI())return new A.ca(B.a8,r.a,null)
s=r.a
s=new A.ex(B.kQ,s.b,a)
r.a=s
return new A.ca(B.dN,s,"pause.resume")},
me(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.ga7(p)
q=r.a.a
q=B.a.aj(q,0,q.length-1)
p=r.a
p=new A.ex(q,p.b,p.c)
r.a=p
return new A.ca(B.dO,p,s.c)}if(q.ghI()&&r.a.b.length===0)return r.cC()
return new A.ca(B.a8,r.a,null)},
cC(){var s=this.a
if(s.a.length===0)return new A.ca(B.a8,s,null)
if(s.b.length!==0)return new A.ca(B.a8,s,null)
this.a=B.bH
return new A.ca(B.dP,B.bH,s.c)},
oD(a){var s,r,q=this
if(B.a.p(q.a.b,a))return new A.ca(B.a8,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.ex(s.a,r,q.a.c)
q.a=s
return new A.ca(B.dN,s,null)},
nh(a){var s,r,q,p,o=this
if(!B.a.p(o.a.b,a))return new A.ca(B.a8,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("I<1>")
r=A.K(new A.I(r,q.i("l(1)").a(new A.rM(a)),p),p.i("r.E"))
q=o.a.c
r=new A.ex(s.a,r,q)
o.a=r
return new A.ca(B.mu,r,q)},
kC(a){var s
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
A.rM.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:146}
A.cQ.prototype={
B(){return"PauseRootAction."+this.b}}
A.rN.prototype={
bx(a,b,c,d){var s=B.ly.h(0,c)
s.toString
A.b(b.appendChild(A.em(a,new A.bo(s,B.L,d,null,B.q),new A.rO(this,c),null)))},
soy(a){this.f=t.Z.a(a)},
soA(a){this.r=t.Z.a(a)},
soi(a){this.w=t.Z.a(a)},
soz(a){this.x=t.Z.a(a)},
sop(a){this.y=t.Z.a(a)},
soj(a){this.z=t.Z.a(a)},
sbi(a){this.Q=t.Z.a(a)}}
A.rO.prototype={
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
A.c_.prototype={
B(){return"PauseSettingsCategory."+this.b}}
A.t8.prototype={
jp(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.S.bW("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.tB.prototype={
k_(a){var s,r,q,p,o,n=this.b
n.className=A.w(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.oJ(a,B.eZ,1)))
A.b(n.appendChild(A.F(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.F(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.km[r]
p=B.dw.h(0,q)
p.toString
o=B.dv.h(0,q)
o.toString
A.b(s.appendChild(A.em(a,new A.bo(o,B.L,p,p+" settings",B.q),new A.tC(this,q),null)))}A.b(s.appendChild(A.em(a,B.eY,new A.tD(this),null)))
A.b(n.appendChild(s))},
soe(a){this.f=t.hQ.a(a)},
sbi(a){this.r=t.Z.a(a)}}
A.tC.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.tD.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hv.prototype={
k0(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.dw.h(0,d))+" settings",a=h.b
a.className=A.w(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.oJ(a0,new A.bo("settings."+(s==null?f:s)+".heading",B.aH,b,g,B.q),2)))
A.b(a.appendChild(A.F(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.F(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.u1(h)),p=B.a.gv(B.F),o=t.xG,q=new A.U(p,q,o);q.m();){n=p.gq()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.l0(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.F(a0,"div",e,g)
for(s=s.a(new A.u2(h)),q=B.a.gv(B.F),o=new A.U(q,s,o);o.m();)A.b(j.appendChild(h.lO(a0,q.gq())))
A.b(a.appendChild(j))
if(d===B.O)A.b(a.appendChild(h.kf(a0)))
if(d===B.P)A.b(a.appendChild(h.ke(a0)))
if(d===B.a7)A.b(a.appendChild(h.kg(a0)))
i=A.F(a0,"div",e,g)
for(s=t.pz.a(h.gkT()),q=B.a.gv(B.kT),s=new A.U(q,s,t.rt);s.m();){p=q.gq()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.em(a0,new A.bo("settings."+o+".reset."+n,B.L,"reset "+n,"restore "+n+" settings to defaults",B.q),new A.u3(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.em(a0,new A.bo("settings."+(s==null?f:s)+".reset.all",B.L,"reset all settings","restore all settings to defaults",B.f5),new A.u4(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.em(a0,new A.bo("settings."+(d==null?f:d)+".back",B.L,"return","return to settings categories",B.q),new A.u5(h),g)))},
ke(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.F(a,"div","settings-grid",j),f=k.dU(a,g,"reducedMotion","reduced motion (system default)"),e=k.dU(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dU(a,g,"captions","non-speech captions"),c=A.F(a,"label",h,j)
A.b(c.appendChild(A.F(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.tU(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.F(a,"label",h,j)
A.b(r.appendChild(A.F(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bA[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.Z(new A.tV(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.F(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.tW(k)))
A.b(g.appendChild(l))
k.ok.L(0,A.E(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.l(0,"screenReaderVerbosity",q)
return g},
dU(a,b,c,d){var s=A.F(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.tE(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.F(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
fa(a){var s,r
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
s.value=(r==null?B.al:r).b}},
kg(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.F(a,"div","settings-grid",l)
m.bk(a,g,"interactionMode","interaction mode",B.bz,t.bK)
m.bk(a,g,"promptDensity","prompt density",B.bC,t.dn)
m.bk(a,g,"textPacing","text pacing",B.bB,t.j_)
m.bk(a,g,"journalLayout","journal layout",B.bt,t.gm)
m.bk(a,g,k,k,B.bn,t.aJ)
m.bk(a,g,"saveFeedback","save feedback",B.bu,t.mx)
m.bk(a,g,"focusLossBehavior","when the window loses focus",B.aP,t.x)
m.bk(a,g,"clockFormat","clock format",B.bq,t.vS)
s=A.F(a,j,i,l)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.Z(new A.tX(m,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.F(a,h,l,"contextual reminders")))
A.b(g.appendChild(s))
m.id=r
q=A.F(a,j,i,l)
p=A.b(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.Z(new A.tY(m,p)))
A.b(q.appendChild(p))
A.b(q.appendChild(A.F(a,h,l,"show daily objective")))
A.b(g.appendChild(q))
m.k1=p
o=A.F(a,j,i,l)
n=A.b(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.Z(new A.tZ(m,n)))
A.b(o.appendChild(n))
A.b(o.appendChild(A.F(a,h,l,"story mode (visitors and narrative time)")))
A.b(g.appendChild(o))
m.k2=n
return g},
bk(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Ds(f,t.Ct,"T","_addGameplaySelect")
f.i("J<0>").a(e)
s=A.F(a,"label","setting-row",null)
A.b(s.appendChild(A.F(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.Z(new A.tS(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.l(0,c,r)},
j8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
kf(a){var s,r,q=this,p=A.F(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.by[s].b
n.l(0,r,r)}q.cK(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.bs[s].b
n.l(0,r,r)}q.cK(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.br[s].b
n.l(0,r,r)}q.cK(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.bp[s].b
o.l(0,n,n)}q.cK(a,p,"ducking","voice intelligibility",o)
return p},
cK(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.F(a,"label","setting-row",null)
A.b(s.appendChild(A.F(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.N(e,A.v(e).i("N<1,2>")).gv(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.Z(new A.tJ(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p3.l(0,c,r)},
j7(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.N(s,A.v(s).i("N<1,2>")).gv(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
h_(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.a6===r){s=a.c===B.aV
break A}if(B.P===r){s=a.c===B.ae
break A}if(B.O===r){s=a.c===B.I
break A}s=!1
break A}return s},
kU(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.a6===s){r=a===B.aV
break A}if(B.P===s){r=a===B.ae
break A}if(B.O===s){r=a===B.I
break A}r=!1
break A}return r},
lO(a,b){var s=this,r=A.F(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.u0(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.F(a,"span",null,b.b)))
return r},
l0(a,b,c,d,e){var s,r,q=this,p=A.F(a,"label","setting-row",null),o=A.F(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.F(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.u_(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.l(0,b,n)
q.db.l(0,b,r)
q.dx.l(0,b,new A.a5(e,d))
return p},
fd(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.mQ
r=B.b.n(b,s.a,s.b)
q.value=B.b.t(r)
p.textContent=""+B.b.ai(r*100)+"%"},
sor(a){this.r=t.DI.a(a)},
sou(a){this.w=t.xl.a(a)},
sot(a){this.x=t.xl.a(a)},
son(a){this.y=t.DI.a(a)},
soq(a){this.z=t.xl.a(a)},
soC(a){this.Q=t.xl.a(a)},
sox(a){this.as=t.Ci.a(a)},
sow(a){this.at=t.Z.a(a)},
sbi(a){this.ax=t.Z.a(a)},
sod(a){this.ay=t.kC.a(a)},
soo(a){this.ch=t.hq.a(a)},
soc(a){this.CW=t.Cv.a(a)},
sov(a){this.cx=t.Z.a(a)}}
A.u1.prototype={
$1(a){t.gl.a(a)
return a.d===B.Z&&this.a.h_(a)},
$S:28}
A.u2.prototype={
$1(a){t.gl.a(a)
return a.d===B.az&&this.a.h_(a)},
$S:28}
A.u3.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.u4.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.u5.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.ah()},
$S:0}
A.tU.prototype={
$1(a){var s=this.a,r=s.k4,q=A.fh(A.w(this.b.value))
r=r.n3(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tV.prototype={
$1(a){var s=this.a,r=s.k4.mY(B.a.ap(B.bA,new A.tT(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.tT.prototype={
$1(a){return t.mq.a(a).b===A.w(this.a.value)},
$S:41}
A.tW.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.tE.prototype={
$1(a){var s,r=A.T(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.mU(r)
break A}if("photosensitivitySafe"===p){s=q.k4.mS(r)
break A}if("captions"===p){s=q.k4.mz(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.tX.prototype={
$1(a){var s=this.a,r=s.k3.mC(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tY.prototype={
$1(a){var s=this.a,r=s.k3.n_(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tZ.prototype={
$1(a){var s=this.a,r=s.k3.n0(A.T(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.tS.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.mL(B.a.ap(B.bz,new A.tK(r.c)))
break A}if("promptDensity"===p){s=q.k3.mT(B.a.ap(B.bC,new A.tL(r.c)))
break A}if("textPacing"===p){s=q.k3.n1(B.a.ap(B.bB,new A.tM(r.c)))
break A}if("journalLayout"===p){s=q.k3.mO(B.a.ap(B.bt,new A.tN(r.c)))
break A}if("confirmations"===p){s=q.k3.mB(B.a.ap(B.bn,new A.tO(r.c)))
break A}if("saveFeedback"===p){s=q.k3.mX(B.a.ap(B.bu,new A.tP(r.c)))
break A}if("clockFormat"===p){s=q.k3.mA(B.a.ap(B.bq,new A.tQ(r.c)))
break A}s=q.k3.mH(B.a.ap(B.aP,new A.tR(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.tK.prototype={
$1(a){return t.bK.a(a).b===A.w(this.a.value)},
$S:149}
A.tL.prototype={
$1(a){return t.dn.a(a).b===A.w(this.a.value)},
$S:150}
A.tM.prototype={
$1(a){return t.j_.a(a).b===A.w(this.a.value)},
$S:151}
A.tN.prototype={
$1(a){return t.gm.a(a).b===A.w(this.a.value)},
$S:152}
A.tO.prototype={
$1(a){return t.aJ.a(a).b===A.w(this.a.value)},
$S:153}
A.tP.prototype={
$1(a){return t.mx.a(a).b===A.w(this.a.value)},
$S:154}
A.tQ.prototype={
$1(a){return t.vS.a(a).b===A.w(this.a.value)},
$S:155}
A.tR.prototype={
$1(a){return t.x.a(a).b===A.w(this.a.value)},
$S:36}
A.tJ.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.mQ(B.a.ap(B.by,new A.tF(r.c)))
break A}if("dynamicRange"===o){s=p.mG(B.a.ap(B.bs,new A.tG(r.c)))
break A}if("reverb"===o){s=p.mW(B.a.ap(B.br,new A.tH(r.c)))
break A}s=p.mF(B.a.ap(B.bp,new A.tI(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.tF.prototype={
$1(a){return t.xs.a(a).b===A.w(this.a.value)},
$S:157}
A.tG.prototype={
$1(a){return t.EL.a(a).b===A.w(this.a.value)},
$S:158}
A.tH.prototype={
$1(a){return t.gc.a(a).b===A.w(this.a.value)},
$S:159}
A.tI.prototype={
$1(a){return t.ul.a(a).b===A.w(this.a.value)},
$S:160}
A.u0.prototype={
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
A.u_.prototype={
$1(a){var s,r,q=this,p=A.fh(A.w(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.ai(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bN.prototype={
B(){return"SettingCategory."+this.b}}
A.j2.prototype={
B(){return"SettingKind."+this.b}}
A.bh.prototype={
dJ(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.a(A.M(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.a(A.M(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bx(a))throw A.a(A.M(r.a+" must be boolean",q,q))
break}}}
A.u8.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:28}
A.u9.prototype={
$0(){return A.f(A.j("unknown setting: "+this.a))},
$S:7}
A.u6.prototype={
k5(a,b){var s,r=this.a
if(r!==1)throw A.a(A.o("unsupported settings version "+r,null))
for(r=this.b.gN(),r=r.gv(r);r.m();){s=r.gq()
A.u7(s.a).dJ(s.b)}},
cE(a){var s=this.b.h(0,a)
return s==null?A.f(A.j("setting missing from profile: "+a)):s},
C(){return A.E(["version",this.a,"values",this.b],t.N,t.K)}}
A.ua.prototype={
oT(a){var s,r,q=A.hh(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
if(r.c===a)q.l(0,r.a,r.e)}this.a=A.dS(q,1)
this.ly(a)},
C(){return A.E(["version",1,"requested",this.a.C(),"effective",this.b.C()],t.N,t.K)},
ly(a){var s,r,q=A.hh(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.F[s]
if(r.c===a)q.l(0,r.a,r.e)}this.b=A.dS(q,1)}}
A.uq.prototype={
k6(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
j.setAttribute("aria-label","Rest")
A.b(j.appendChild(A.F(a,"h2","journal-title","Rest")))
s=A.F(a,"p","consult-label","Sleeping is the only way to end the day.")
k.w!==$&&A.b6()
k.w=s
A.b(j.appendChild(s))
r=A.F(a,"div","entry-picker",null)
for(s=k.r,q=0;q<2;++q){p=B.df[q]
for(o=p.b+" sleep \xb7 ",n=0;n<4;++n){m=B.dd[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
J.e9(s.c_(m,new A.ur()),l)
l.setAttribute("type","button")
l.addEventListener("click",A.Z(new A.us(k,p,m)))
A.b(r.appendChild(l))}}A.b(j.appendChild(r))},
j9(a){var s,r,q=this.r.h(0,B.bX)
for(s=J.O(q==null?B.ky:q);s.m();){r=s.gq()
if(a){r.removeAttribute("disabled")
r.setAttribute("aria-disabled","false")}else{r.setAttribute("disabled","")
r.setAttribute("aria-disabled","true")}}s=this.w
s===$&&A.t()
r=a?"The living-room sofa is available for rest.":"Sleeping is the only way to end the day. Sofa rest is only available at home."
s.textContent=r},
soB(a){this.f=t.nf.a(a)}}
A.ur.prototype={
$0(){return A.c([],t.W)},
$S:161}
A.us.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ah()},
$S:1}
A.cF.prototype={
gE(){return this.a},
gaz(){return this.b},
gaX(){return this.c}}
A.nS.prototype={
pc(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.H(s,r.i("e(1)").a(new A.nU()),r.i("H<1,e>")).b9(0)
r=this.b
r.P(0)
s=J.AG(a,t.N)
p=s.$ti
r.L(0,new A.I(s,p.i("l(r.E)").a(q.gaF(q)),p.i("I<r.E>")))},
ns(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.p(0,o.a))n.push(o)}return n}}
A.nU.prototype={
$1(a){return t.bC.a(a).a},
$S:162}
A.nT.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.I(r,s):B.d.I(a.c,b.c)},
$S:163}
A.mk.prototype={
gcl(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
o_(a){return this.c.p(0,t.T.a(a))},
eU(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a2(0,g.gmy())||!a.a.a2(0,new A.v4(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.h2(r,s.b,p)
g=!0
if(o!=null)if(!h.p(0,r)){n=s.c
if(n!==B.aX){m=s.d
if(m<o.length){n=n===B.aj
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ao}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.v5(s))
else k=!1
if(k)return!1
j=new A.mj(r,g,A.ab(o,t.AP),B.aj)
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
hF(a){var s=this.a,r=A.v(s).i("ae<1>"),q=r.i("I<r.E>")
s=A.K(new A.I(new A.ae(s,r),r.i("l(r.E)").a(new A.v_(a)),q),q.i("r.E"))
B.a.Y(s,new A.v0())
return s},
cg(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.pq
s=m.a.h(0,a)
if(s==null)return B.pr
r=B.d.ad(a.b-1,7)
q=a.a
p=m.b.p(0,q)||r+1>=3||m.w?B.cc:B.aE
o=p===B.aE&&m.x.p(0,q)&&s.K(B.cd)?B.cd:p
if(s.K(o))n=o
else n=s.K(B.aE)?B.aE:B.cc
r=s.h(0,n)
r.toString
m.r=new A.mj(a,n,A.ab(m.h2(a,n,r),t.AP),B.aj)
m.gcl()
r=m.r
r.toString
return new A.mi(r)},
mt(a){var s,r,q,p,o,n=this.r
if(n==null)return B.ev
if(n.d!==B.aj)return B.po
n.e=a
s=a===B.ao
n.d=s?B.aX:B.aC
r=this.f
q=s?B.et:B.p6
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.dX(q,o,p,a,null))
if(a===B.aM)B.a.k(r,new A.dX(B.p9,o,p,a,null))
if(s)this.hf(n)
return new A.mg(n)},
m6(){var s,r=this.r
if(r==null)return B.ev
s=r.d
if(s!==B.aC&&s!==B.aD)return B.pp
if(this.gcl()!=null&&r.w==null)return new A.bv(new A.bF(B.ak,"The visitor is waiting for an answer."))
r.d=B.aD
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aX
this.hf(r)
return new A.je(r,!0)}return new A.je(r,!1)},
mu(a){var s,r,q=this.r,p=this.gcl(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.aC&&o!==B.aD}if(o)return B.pn
o=p.f
s=A.C(o)
r=A.bK(new A.I(o,s.i("l(1)").a(new A.v2(a)),s.i("I<1>")),t.Y)
if(r==null)return B.ps
q.w=r.a
return new A.mh(q,p,r)},
mv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.aC&&s!==B.aD}else s=!0
if(s)return i
r=h.gbs()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.dk
p=J.O(p)
while(p.m()){o=p.gq()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.aX(q,s,s)
m=c.lp(!0,!0,o,new A.vs(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aY){B.a.k(this.f,new A.dX(B.p8,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.hh(B.a.ga7(j.c).a,s,s)
s.L(0,q)
p.m3(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ex)if(k===B.cf){s=n.b
s=s.ga5(s)}else s=!1
else s=!0
if(s)B.a.k(this.f,new A.dX(B.p7,o,p.b,i,l))}}return m},
hf(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.r=null},
h2(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.O(c);r.m();)s.push(this.l1(a,b,r.gq()))
return s},
l1(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bK(new A.I(p,r.i("l(1)").a(new A.uY(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.cg(q,s.c,c.c)},
sjF(a){this.x=t.Q.a(a)}}
A.v4.prototype={
$1(a){var s=this.a.a
return new A.ae(s,A.v(s).i("ae<1>")).M(0,new A.v3(A.w(a)))},
$S:3}
A.v3.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:29}
A.v5.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:15}
A.v_.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:29}
A.v0.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.I(a.c,b.c)
return s!==0?s:B.d.I(a.d,b.d)},
$S:165}
A.v2.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.v1.prototype={
$0(){return A.c([],t.jV)},
$S:166}
A.uY.prototype={
$1(a){return t.aS.a(a).d.gN().a2(0,new A.uX(this.a))},
$S:167}
A.uX.prototype={
$1(a){t.q.a(a)
return this.a.y.aW(a.a,a.b)},
$S:168}
A.uZ.prototype={
$2(a,b){var s=t.AP
return B.d.I(s.a(a).a,s.a(b).a)},
$S:169}
A.ml.prototype={}
A.mS.prototype={}
A.ya.prototype={
$1(a){return B.c.V(A.w(a),"off.")},
$S:3}
A.bV.prototype={
B(){return"DoorChoice."+this.b}}
A.ce.prototype={
B(){return"VisitPhase."+this.b}}
A.cf.prototype={
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
gaz(){return this.c}}
A.dk.prototype={
B(){return"VisitorIssueCode."+this.b}}
A.bF.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.bF&&b.a===this.a&&b.b===this.b},
gU(a){return A.cP(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.cg.prototype={
aa(a,b){if(b==null)return!1
return b instanceof A.cg&&b.a===this.a&&b.b===this.b},
gU(a){return A.cP(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c4.prototype={
aa(a,b){var s=this
if(b==null)return!1
return b instanceof A.c4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gU(a){var s=this
return A.cP(s.a,s.b,s.c,s.d,B.h,B.h)},
C(){var s=this
return A.E(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gaz(){return this.b},
gaX(){return this.c}}
A.mm.prototype={
C(){var s,r,q,p=this.a
p=A.K(p,A.v(p).c)
B.a.X(p)
s=this.b
r=A.v(s)
q=r.i("dz<1,Y<e,@>>")
s=A.K(new A.dz(s,r.i("Y<e,@>(1)").a(new A.uW()),q),q.i("r.E"))
r=this.c
return A.E(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.uW.prototype={
$1(a){return t.T.a(a).C()},
$S:170}
A.kh.prototype={
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
A.nP.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:171}
A.nQ.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:172}
A.nR.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:173}
A.mj.prototype={
gbs(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.v6.prototype={}
A.bv.prototype={}
A.mi.prototype={}
A.mg.prototype={}
A.je.prototype={}
A.mh.prototype={}
A.hH.prototype={}
A.mV.prototype={
gmo(){var s,r
if(!this.aJ)return B.n
s=this.r
s===$&&A.t()
r=this.w
r===$&&A.t()
return B.fh.mp(s,r)},
gnH(){var s="shadowCaster",r=this.dm
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.iB(s).a+";shadowTriangles="+r.iB(s).b+";frameMs="+B.b.F(this.dn,3)},
gih(){var s=this.dm
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.dn<=100},
nR(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.iJ()
l.r=k
k=l.w=B.cu.j6(k)
if(k.a===B.G)k=l.w=B.dU
q=l.b
p=l.c
s=new A.m5(q,p,q,p)
o=A.BB(l.d.a)
l.e=o
try{o.is(l.kw(k,q,p),s)}catch(n){r=A.ah(n)
k=l.w
if(k===B.ax)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.y(r)
l.w=B.ax
k=A.BB(l.d.a)
k.is(B.ne,s)
l.e=k}k=l.e
k.cb()
m=A.G9(k.w.a.b)
B.a.k(k.d,m)
l.f=m
l.cu=l.b
l.cm=l.c
l.fO()
l.nB=A.FP(!0,!0,!0)
l.hW=new A.rW(A.n(t.N,t.S))
l.aJ=!0},
dI(a,b){var s,r=this
if(a<=0||b<=0)throw A.a(A.o("Pixeldart surface size must be positive",null))
if(!r.aJ){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cn!==a||r.co!==b)r.co=r.cn=null
s=r.e
s===$&&A.t()
s.cb()
new A.m5(a,b,a,b).A()
if(r.dr==null)r.dr=r.ca()},
ca(){var s=0,r=A.aL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$ca=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.cu
h=n.b
if(!(i!==h||n.cm!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.t()
h=n.w
h===$&&A.t()
g=A.i(m)
s=8
return A.a6(A.xk(i,B.cx.hM("auto","full","srgb",h,"auto","profile",A.i(l),g)),$async$ca)
case 8:n.cu=m
n.cm=l
n.co=n.cn=null
A.k6()
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
n.cn=n.b
n.co=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.dr=null
i=n.cn
h=n.b
j=i===h&&n.co===n.c
if(!j)i=n.cu!==h||n.cm!==n.c
else i=!1
if(i)n.dr=n.ca()
s=o.pop()
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$ca,r)},
fL(a,b,c,d,e,f,g,h){return B.cx.hM(d,e,f,a,g,h,c,b)},
kw(a,b,c){return this.fL(a,b,c,"auto","full","srgb","auto","profile")},
fO(){var s,r,q,p=this.w
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
this.fy=new A.qU(r,p,A.a_(q),A.a_(q),A.n(q,t.i))},
d2(a){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$d2=A.aM(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aJ){s=1
break}switch(a.b.a){case 0:i=B.dU
break
case 2:i=B.ax
break
case 1:i=B.dT
break
case 3:i=n.w
i===$&&A.t()
break
default:i=null}m=i
i=n.w
i===$&&A.t()
l=i
k=n.fL(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.t()
s=7
return A.a6(A.xk(i,t.lg.a(k)),$async$d2)
case 7:n.w=t.xK.a(m)
n.fO()
n.cu=n.b
n.cm=n.c
n.x=null
A.k6()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ah(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.y(j)
A.k6()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$d2,r)},
md(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="wall-plaster",b8="grime",b9="renderer is not initialized",c0="resource library is disposed"
if(!b5.aJ||b5.Q.length!==0)return
b5.d5=c1
s=b5.k2
r=b5.e
r===$&&A.t()
s.l(0,b7,r.gaD().dG(8,"texture:wall-plaster",!0,256,B.au,256))
s.l(0,b8,b5.e.gaD().dG(8,"texture:grime",!0,512,B.au,512))
for(q=0;q<2;++q){p=B.lg[q]
r=b5.e.w
if(r==null)r=A.f(A.j(b9))
s.l(0,p,r.dG(8,"texture:"+p,!0,256,B.au,256))}for(q=0;q<3;++q){p=B.jX[q]
o=p==="glass"
r=b5.e.w
if(r==null)r=A.f(A.j(b9))
n=o?256:4096
m=o?256:4096
s.l(0,p,r.dG(8,"texture:"+p,!0,m,B.au,n))}s.l(0,"skybox-main-atmosphere-v1",b5.e.gaD().iL(8,"texture:skybox-main-atmosphere-v1",!0,2048,B.au,4096,B.j8))
b5.ed()
b5.cV()
b5.ry=b5.bp(A.ll(s.h(0,b7),0.5,B.am,0.2,0,!1,0,"quarantine-house-safe",0,1,b6,!0,1,0.48,0.44,0.46,1,1))
b5.kW()
for(r=c1.b,n=r.length,m=b5.ok,l=b5.k4,k=t.N,j=b5.rx,i=t.pw,q=0;q<r.length;r.length===n||(0,A.u)(r),++q){h=r[q]
g=A.n(k,i)
for(f=A.E(["wall",h.x,"floor",h.y,"ceiling",h.z],k,k),f=new A.cN(f,f.r,f.e,A.v(f).i("cN<1,2>")),e=h.a,d="quarantine-house-"+e+"-";f.m();){c=f.d
b=c.b
a=B.bD.h(0,b)
if(a==null)A.f(A.j("Unknown house surface material: "+b))
b=a.c
a0=c.a
a1=a.a
b=A.ll(s.h(0,a.b),0.5,B.am,0.2,0,!1,0,d+a0+"-"+a1,0,1,b6,!0,a.d,(b&255)/255,(b>>>8&255)/255,(b>>>16&255)/255,1,1)
a1=b5.e.w
if(a1==null)a1=A.f(A.j(b9))
if(a1.x)A.f(A.j(c0))
b.A()
a2=a1.b.a.aH(b,b6)
a1.r.k(0,a2)
j.l(0,b.a,b)
g.l(0,a0,a2)}m.l(0,e,g)
f=g.h(0,"wall")
f.toString
l.l(0,e,f)}for(n=b5.p1,q=0;q<7;++q){a3=B.kt[q]
m=a3==="service"?s.h(0,b8):s.h(0,b7)
k=b5.e9(a3)
i=b5.e9(a3)
k=A.ll(m,0.5,B.am,0.2,0,!1,0,"quarantine-inventory-"+a3,0,1,b6,!0,1,b5.e9(a3).c,i.b,k.a,1,1)
i=b5.e.w
m=i==null?A.f(A.j(b9)):i
if(m.x)A.f(A.j(c0))
k.A()
a2=m.b.a.aH(k,b6)
m.r.k(0,a2)
j.l(0,k.a,k)
n.l(0,a3,a2)}b5.cV()
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.u)(r),++q){h=r[q]
if(B.e3.p(0,h.a))continue
b5.kX(c1,h)}$.p.j().setAttribute("data-renderer-legacy-living-room-shell","removed")
$.p.j().setAttribute("data-renderer-canonical-room-shell","living-room")
b5.ls(c1)
$.p.j().setAttribute("data-renderer-house-model-scale",B.b.F(2.25,2))
for(n=r.length,q=0;q<n;++q)for(m=r[q].e.length,a4=0;a4<m;++a4)continue
for(r=c1.c,n=r.length,m=b5.fx,k=b5.y,i=c1.e,q=0;f=r.length,q<f;r.length===n||(0,A.u)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
h=i.h(0,a5.b)
if(h==null)continue
a6=b5.fR(c1,h,a5)
f=b5.e.w
if(f==null)f=A.f(A.j(b9))
e=a5.a
if(f.x)A.f(A.j(c0))
d=f.a
a6.A()
a2=d.b.aH(a6,"door-leaf:"+e)
b=a2.a
d.c.l(0,b,d.bc(a6))
f.f.k(0,a2)
B.a.k(k,a2)
f=h.a
d=l.h(0,f)
if(d==null){d=b5.ry
d.toString}a7=new A.bb(a2,d,B.B,0,B.V,B.K,!0,!0,0,b6)
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
a0=B.B.af()
b=b.gan()
a1=A.C(b)
A.b2(new A.H(b,a1.i("B(1)").a(a0.gaq()),a1.i("H<1,B>")))
m.l(0,e,new A.jx(e,f,d.b.bR(a7),a2,a7))}for(n=b5.id,m=t.Bs,q=0;q<r.length;r.length===f||(0,A.u)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
h=i.h(0,a5.b)
if(h==null)continue
e=h.a
d=b5.lm(h,a5.b4(e),a5.aN(e),a5.aN(e)+a5.w,0,a5.x,5915445)
b=m.a(new A.w6(a5))
a0=b5.e.w
if(a0==null)a0=A.f(A.j(b9))
if(a0.x)A.f(A.j(c0))
a1=a0.a
d.A()
a2=a1.b.aH(d,"decoration:"+e)
a8=a2.a
a1.c.l(0,a8,a1.bc(d))
a0.f.k(0,a2)
B.a.k(k,a2)
a0=l.h(0,e)
if(a0==null){d=b5.ry
d.toString}else d=a0
a9=new A.bb(a2,d,B.B,0,B.V,B.K,!0,!0,0,b6)
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
a1=B.B.af()
a0=a0.gan()
a8=A.C(a0)
A.b2(new A.H(a0,a8.i("B(1)").a(a1.gaq()),a8.i("H<1,B>")))
B.a.k(n,new A.mU(e,d.b.bR(a9),a9,b))}for(r=A.Kx(A.JP(c1)),n=r.length,m=b5.dy,l=b5.dx,i=b5.db,f=b5.k3,e=b5.fr,q=0;q<r.length;r.length===n||(0,A.u)(r),++q){b0=r[q]
d=b0.b
b1=d===4?b8:b7
a=e.h(0,d)
if(a==null){b=s.h(0,b1)
a0=b5.e6(d)
a1=b5.e6(d)
a0=A.ll(b,0.5,B.am,0.2,0,!0,0,"quarantine-house-exterior-slot-"+d,0,1,b6,!0,1,b5.e6(d).c,a1.b,a0.a,1,1)
a1=b5.e.w
b=a1==null?A.f(A.j(b9)):a1
if(b.x)A.f(A.j(c0))
a0.A()
a2=b.b.a.aH(a0,b6)
b.r.k(0,a2)
j.l(0,a0.a,a0)
e.l(0,d,a2)
a=a2}b=b5.e.w
if(b==null)b=A.f(A.j(b9))
a0=b0.c
a1=b0.a
d=""+d
if(b.x)A.f(A.j(c0))
a8=b.a
a0.A()
a2=a8.b.aH(a0,"exterior:"+a1+":slot-"+d)
b2=a2.a
a8.c.l(0,b2,a8.bc(a0))
b.f.k(0,a2)
B.a.k(k,a2)
b3=a1+":"+d
f.l(0,b3,b1)
if(!B.ay.p(0,a1))A.f(A.o("unknown exterior cell: "+a1,b6))
b4=new A.bb(a2,a,B.B,-1,B.V,B.K,B.nG.p(0,a1),!0,0,b6)
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
a0=B.B.af()
b=b.gan()
a1=A.C(b)
A.b2(new A.H(b,a1.i("B(1)").a(a0.gaq()),a1.i("H<1,B>")))
i.l(0,b3,d.b.bR(b4))}},
fc(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="renderer is not initialized",b9="resource library is disposed",c0="promoted model package is missing: ",c1="incomplete",c2=b6.hZ=c3.c
b6.k1=A.ab(c3.e,t.fl)
if(!b6.aJ)return
for(s=b6.p4,r=new A.ac(s,s.r,s.e,A.v(s).i("ac<2>"));r.m();)r.d.a_()
s.P(0)
r=b6.R8
if(r!=null)r.b.P(0)
r=b6.RG
b6.R8=r==null?b7:new A.t1(new A.rX(r),A.n(t.N,t.K))
for(r=b6.ch,q=new A.N(r,A.v(r).i("N<1,2>")).gv(0),p=b6.CW;q.m();){o=q.d
o.toString
n=b6.f
n===$&&A.t()
n.b.aL(o.b)
m=p.h(0,o.a)
if(m!=null){o=b6.e
o===$&&A.t()
o=o.w
if(o==null)o=A.f(A.j(b8))
n=m.a
if(o.x)A.f(A.j(b9))
o.a.aL(n)
o.f.a9(0,n)}}r.P(0)
p.P(0)
b6.cy=null
q=b6.cx
B.a.P(q)
for(o=b6.k1,n=o.length,l=b6.p1,k=t.Cx,j=t.d,i=t.s3,h=b6.p3,g=!0,f=0;f<n;++f){e=o[f]
d=e.c
c=B.c.p(d.toLowerCase(),"stair")
if(c)continue
c=e.r
c=c!=="story"&&c!=="architecture"
if(c)continue
c=b6.d5
b=c==null?b7:c.e.h(0,e.b)
if(b==null)continue
a=c3.bO(d)
if(b6.R8!=null&&b6.RG.a.K(a.a)){c=a.a
a0=b6.RG.a.h(0,c)
a1=(a0==null?A.f(A.j(c0+c)):a0).c
g=g&&b6.lq(a1.a.x,a,e.f.c.a*c2)
c=e.f
a0=c.a
a2=A.iT(B.J,c.b.b*3.141592653589793/180)
a3=b6.e
a3===$&&A.t()
a3=a3.w
if(a3==null)a3=A.f(A.j(b8))
a4=b6.f
a4===$&&A.t()
a5=b.d
a6=A.c([],j)
a7=A.c([],i)
a8=new A.hl(a1,h,a3,a4,new A.w9(b6,a,a1),new A.fs(new A.B(a5.a+a0.a*c2,a5.b+a0.b*c2,a5.c+a0.c*c2),a2,c.c.a*c2),-1,a6,a7)
a9=a8.kd("LOD0")
a8.x=a9.a
B.a.L(a6,a9.c)
B.a.L(a7,a9.b)
c=b6.R8
c.toString
a0=k.a(new A.wa(a8))
a3=c.b
a4=e.a
if(a3.K(a4))A.f(A.j("presentation placement is already bound: "+a4))
d=c3.bO(d).a
if(c.a.a.a.h(0,d)==null)A.f(A.j(c0+d))
a3.l(0,a4,a0.$1(new A.ho()))
s.l(0,a4,a8)
continue}d=b6.e
d===$&&A.t()
d=d.w
if(d==null)d=A.f(A.j(b8))
c=b6.l_(a,e,c2)
a0=e.a
if(d.x)A.f(A.j(b9))
a3=d.a
c.A()
b0=a3.b.aH(c,"inventory:"+a0)
a4=b0.a
a3.c.l(0,a4,a3.bc(c))
d.f.k(0,b0)
d=e.f
c=d.a
a2=A.iT(B.J,d.b.b*3.141592653589793/180)
d=a.b
a3=l.h(0,d)
if(a3==null){a3=l.h(0,"furniture")
a3.toString}a5=b.d
c=new A.fs(new A.B(a5.a+c.a*c2,a5.b+c.b*c2,a5.c+c.c*c2),a2,1)
m=new A.bb(b0,a3,c,-1,B.V,B.K,d!=="micro",!0,0,b7)
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
c=c.af()
a3=a3.gan()
a4=A.C(a3)
A.b2(new A.H(a3,a4.i("B(1)").a(c.gaq()),a4.i("H<1,B>")))
r.l(0,a0,d.b.bR(m))}b2=s.a
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
b4=c3.oE("living-sofa")!=null
c2=b6.d5
r=c2==null
if((r?b7:c2.r)==="living-room")b5=(r?b7:c2.x)==="placement-living-sofa"&&s.K("placement-living-fbx-room")&&b4
else b5=!1
c2=$.p.j()
s=b5?"canonical-fbx-residence":c1
c2.setAttribute("data-house-playability",s)
s=b6.d5
s=s==null?b7:s.x
if(s==null)s=""
c2.setAttribute("data-house-rest-anchor",s)
s=b5?"sofa-rest-v1":c1
c2.setAttribute("data-house-interaction-contract",s)
s=b5?"game-house-lighting":c1
c2.setAttribute("data-house-thermal-authority",s)
s=b5?"game-fire-emitter":c1
c2.setAttribute("data-house-fire-authority",s)
c2.setAttribute("data-house-collision-authority","game-house")
c2.setAttribute("data-house-focus-authority","game-focus-resolver")
c2.setAttribute("data-house-save-restore-authority","game-session-save")
b6.lt()},
lq(a,b,c){var s,r,q,p,o,n,m,l,k
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
lr(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8+":"+a9,a6=a4.p2,a7=a6.h(0,a5)
if(a7!=null)return a7
s=a9.toLowerCase()
r=a8==="porcelain-mermaid"
q=B.c.p(s,"kaca")||B.c.p(s,"gelas")||B.c.p(s,"cermin")
p=B.c.p(s,"aluminium")||B.c.p(s,"kerangka")
o=B.c.p(s,"sofa")||B.c.p(s,"cusion")||B.c.p(s,"carpet")
n=B.c.p(s,"floor")||B.c.p(s,"lemari")||B.c.p(s,"meja")||B.c.p(s,"tiang")
m=B.c.p(s,"wall")||B.c.p(s,"roof")||B.c.p(s,"tegel")
l=B.c.p(s,"emmision")||B.c.p(s,"netflix")||s==="tv"
k=A.yX(a5.toLowerCase()," ","-")
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
a1=q?B.T:B.am
a2=q?0.02:0.5
a3=a4.bp(A.ll(j,a2,a1,a,b,q,a0,"quarantine-promoted-"+k,c,h,i,!l,d,e,f,g,1,1))
a6.l(0,a5,a3)
return a3},
lt(){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.rq)
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
o.L(0,new A.rj(n.a.a.b,"LOD0",!l,k,j,m).C())
i.push(o)}s=$.p.j()
o=i.length!==0
n=o&&B.a.a2(i,new A.w_())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(A.E(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
dz(a){var s=0,r=A.aL(t.H),q=this,p,o,n
var $async$dz=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=2
return A.a6(B.fj.cz(a,new A.w7(),new A.w8()),$async$dz)
case 2:n=c
q.RG=n
p=$.hR
if(p!=null)q.fc(p)
$.p.j().setAttribute("data-renderer-model-packages","validated")
$.p.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.p.j()
o=n.a.ga3()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aJ(null,r)}})
return A.aK($async$dz,r)},
jm(c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=c4.e,c3=c2.h(0,c5)
if(c3==null)return
s=c3.a
r=t.N
q=A.aF([s],r)
for(p=c4.aS(s),o=J.O(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gq()
m=n.cA(s)
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
d=c1.ce(h[e],j)
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
a=a.af()
a0=a0.gan()
a1=A.C(a0)
A.b2(new A.H(a0,a1.i("B(1)").a(a.gaq()),a1.i("H<1,B>")))
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
j=q.p(0,a5.a)&&a5.d.$0()?-1:0
p=c1.f
p===$&&A.t()
o=c1.ce(a5.c,j)
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
n=n.af()
h=h.gan()
f=A.C(h)
A.b2(new A.H(h,f.i("B(1)").a(n.gaq()),f.i("H<1,B>")))
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
d=c1.ce(o,q.p(0,a6.b)?-1:0)
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
h=h.af()
f=f.gan()
c=A.C(f)
A.b2(new A.H(f,c.i("B(1)").a(h.gaq()),c.i("H<1,B>")))
o=o.b
c=o.$ti
c.c.a(n)
c.y[1].a(d)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(d)
c2.l(0,a6.a,a6.mD(d))}for(c2=c1.k1,s=c2.length,p=c1.ch,o=c1.CW,n=c1.p4,a4=0;a4<s;++a4){a7=c2[a4]
h=a7.a
a8=p.h(0,h)
a9=o.h(0,h)
b0=n.h(0,h)
b1=q.p(0,a7.b)
if(b0!=null){b0.jl(b1?-1:0)
continue}if(a8==null||a9==null)continue
h=c1.f
h===$&&A.t()
f=c1.ce(a9,b1?-1:0)
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
c=c.af()
b=b.gan()
a=A.C(b)
A.b2(new A.H(b,a.i("B(1)").a(c.gaq()),a.i("H<1,B>")))
h=h.b
a=h.$ti
a.c.a(a8)
a.y[1].a(f)
h.Z(a8)
h=h.b
a=a8.a
if(!(a>=0&&a<h.length))return A.d(h,a)
h[a].sb3(f)}b2=new A.kQ().ms(c5)
c2=$.p.j()
s=A.K(b2,A.v(b2).c)
B.a.X(s)
c2.setAttribute("data-renderer-exterior-cells",B.a.W(s,","))
c2=c1.dy
r=new A.kQ().ic(new A.wd(c1),new A.ae(c2,A.v(c2).i("ae<1>")),b2,r)
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
b9=b3.p(0,b7)
if(b9)++b4
if(b9&&o)++b5
d=c1.ce(a9,b9?-1:0)
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
n=n.af()
h=h.gan()
f=A.C(h)
A.b2(new A.H(h,f.i("B(1)").a(n.gaq()),f.i("H<1,B>")))
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
c0=A.K(new A.dz(b3,c2.i("e(1)").a(new A.we(c1)),s),s.i("r.E"))
B.a.X(c0)
$.p.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.W(c0,","))},
dF(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.aJ)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.hh(b0,n)
l=J.aQ(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.c([],t.d)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.y,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.t()
d=d.w
if(d==null)d=A.f(A.j(a8))
c=a7.bn(e.b)
b=g.b
if(d.x)A.f(A.j(a9))
a=d.a
c.A()
a0=a.b.aH(c,h+e.a+"-drift-"+b)
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
d=d.af()
b=b.gan()
a3=A.C(b)
A.b2(new A.H(b,a3.i("B(1)").a(d.gaq()),a3.i("H<1,B>")))
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
B.a.a9(i,a6)
B.a.k(i,a0)
a=a7.e.w
d=a==null?A.f(A.j(a8)):a
if(d.x)A.f(A.j(a9))
d.a.aL(a6)
d.f.a9(0,a6)}p.l(0,b1,k)
r.l(0,b1,j)
if(j.length!==0)a7.at.l(0,b1,B.a.ga1(j))
$.p.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.hX+1));++a7.hX},
eQ(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aJ)return
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
m=p.gaD().bG(k.fR(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bb(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.t()
n=r.c
p.lY(l)
p.b.f0(n,l)
s.l(0,b,r.hQ(l,m))
s=k.y
n=r.d
B.a.a9(s,n)
B.a.k(s,m)
k.e.gaD().oP(n)},
ja(m0,m1,m2,m3,m4,m5,m6,m7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2,l3=this,l4=null,l5="rain_override",l6="wetness_override",l7=A.aF([m1],t.N),l8=m0.e,l9=l8.h(0,m1)
if(l9!=null)for(s=l9.a,r=m0.aS(s),q=J.O(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gq()
o=p.cA(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&l8.h(0,o)!=null)l7.k(0,o)}n=new A.qm(m0).ps(l7,m2)
s=A.c([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.u)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.eE(l.a,l.x,l.w,q))}for(r=l3.k1,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&l7.p(0,k.b)){j=l8.h(0,k.b)
i=l3.hZ
h=k.f.a
j=j.d
s.push(new A.eE(new A.h(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}l3.cp=A.ab(s,t.cZ)
l8=m5.f
s=m5.e
g=new A.h(Math.cos(l8)*s,0,Math.sin(l8)*s)
r=A.c([],t.xn)
for(f=0;f<n.length;++f){q=n[f]
p=q.r
if(p>0)r.push(new A.kT("mantle-fire-"+f,q.a,p,g))}l3.ev=r
r=t.jC
e=A.c([],r)
d=A.c([],r)
for(f=0;f<n.length;++f){l=n[f]
r=f===0
q=r?"spot":"point"
p=l.c
j=l.e
i=l.d
if(q!=="point"&&q!=="spot")A.f(A.a7(q,"type","must be point or spot"))
if(!isFinite(j)||j<0)A.f(A.a7(j,"intensity","must be finite and >= 0"))
if(!isFinite(i)||i<=0)A.f(A.a7(i,"radius","must be finite and > 0"))
r=r?d:e
B.a.k(r,new A.b8(f,q,l.a,new A.h((p>>>16&255)/255,(p>>>8&255)/255,(p&255)/255),j,i))}r=l3.fy
r===$&&A.t()
c=r.oL(m2,e,d)
r=A.n(t.S,t.A_)
for(f=0;f<n.length;++f)r.l(0,f,n[f])
q=A.c([],t.Fk)
for(p=c.a,j=p.length,m=0;m<p.length;p.length===j||(0,A.u)(p),++m){b=p[m]
i=b.a
h=r.h(0,i).a
a=b.d
q.push(new A.lD(i,new A.B(h.a,h.b,h.c),new A.aU(a.a,a.b,a.c),b.e,b.f))}p=A.c([],t.cv)
for(j=c.c,i=j.length,m=0;m<j.length;j.length===i||(0,A.u)(j),++m){b=j[m]
h=b.a
a=r.h(0,h)
a0=a.a
a=a.b
a1=b.d
p.push(new A.bO(h,new A.B(a0.a,a0.b,a0.c),new A.B(a.a,a.b,a.c),new A.aU(a1.a,a1.b,a1.c),b.e,b.f,1.05,1.4))}l3.ki(c,++l3.go)
r=$.bT()
a2=r.H("time_override")
if(a2>=0)a3=B.b.n(a2,0,23.999)
else a3=m7
l3.i9=a3
a4=m5.c
j=m5.d
a5=B.b.O(B.b.O(a3,24)+24,24)
a6=B.b.n(a4,0,1)
a7=B.b.n(j,6,16)/2
a8=13-a7
a9=13+a7
i=a5>=a8
b0=i&&a5<=a9?Math.sin(3.141592653589793*((a5-a8)/(a9-a8)))*65:-18
if(a5<=a8)b1=0
else b1=a5>=a9?1:(a5-a8)/(a9-a8)
b2=b0*3.141592653589793/180
b3=(90+b1*180)*3.141592653589793/180
h=Math.cos(b3)
a=Math.cos(b2)
a0=B.b.n(Math.sin(b2),0,1)
a1=Math.sin(b3)
b4=Math.cos(b2)
a0=B.b.n(1-a0,0.1,0.9)
b5=a8-1.5
if(a5>=b5&&a5<a8){b6=(a5-b5)/1.5
A.cn(B.mZ,B.dW,b6)
b7=A.cn(B.n0,B.bM,b6)
b8=A.cn(B.mV,B.bN,b6)
b9=0.3+0.5*b6
c0=0.25+0.2*b6}else if(i&&a5<14){b7=B.bM
b8=B.bN
b9=0.85
c0=0.45}else if(a5>=14&&a5<a9){b6=(a5-14)/(a9-14)
A.cn(B.dW,B.dV,b6)
b7=A.cn(B.bM,B.dZ,b6)
b8=A.cn(B.bN,B.dY,b6)
b9=0.85*(1-b6*0.35)
c0=0.45*(1-b6*0.25)}else if(a5>=a9&&a5<a9+1.5){b6=(a5-a9)/1.5
A.cn(B.dV,B.bO,b6)
b7=A.cn(B.dZ,B.aR,b6)
b8=A.cn(B.dY,B.aS,b6)
b9=0.55*(1-b6*0.8)
c0=0.34*(1-b6*0.65)}else{i=a9+1.5
if(a5>=i&&a5<a9+3){b6=(a5-i)/1.5
A.cn(B.bO,B.bO,b6)
b7=A.cn(B.aR,B.aR,b6)
b8=A.cn(B.aS,B.aS,b6)
b9=0.11*(1-b6*0.25)
c0=0.16*(1-b6*0.15)}else{b7=B.aR
b8=B.aS
b9=0.15
c0=0.18}}if(a6>0){c1=A.cn(b8,B.n8,a6*0.7)
b9*=1-a6*0.35
c0*=1-a6*0.15}else c1=b8
c2=m6?1:0.15
c3=B.b.n(a6*0.75+B.b.n(0.3333333333333333,0,1)*0.25,0,1)
if(r.H(l5)>=0)a4=r.H(l5)
l3.xr=B.b.n(a4,0,1)
c4=r.H("cloud_coverage_override")
c5=B.b.n(c4>=0?c4:a4*0.92,0,1)
c6=r.bI("cloud_enable")&&c5>0.0001?B.b.n(r.H("cloud_density")*(0.55+c5*0.45),0,1):0
c7=s*0.28*B.b.n(r.H("cloud_speed"),0,2)
c8=B.d.aE(B.d.n(B.b.ai(r.H("cloud_samples")),4,24))
c9=r.H(l6)>=0?r.H(l6):c3
d0=B.b.n(r.H("weather_reflection_strength"),0,2)
l3.ct=B.b.n(c9*d0,0,1)
j=A.Go(j)
i=a4*0.92
s=2+s*0.03
b5=B.b.n(0.68+a4*0.22,0,1)
new A.ut(a3,13,0.8988445647770796,j,i,a4,s,b5,1,0.0015,0.06).A()
d1=A.BF(a5,13)*3.141592653589793/12
d2=Math.sin(0.8988445647770796)
d3=Math.cos(0.8988445647770796)
d4=d2*Math.sin(j)
d5=d3*Math.cos(j)
d6=d4+d5*Math.cos(d1)
d7=Math.asin(B.b.n(d6,-1,1))
d8=Math.cos(d7)
d9=Math.atan2(Math.sin(d1),Math.cos(d1)*d2-Math.tan(j)*d3)
e0=new A.B(Math.sin(d9)*d8,Math.sin(d7),Math.cos(d9)*d8).ga8()
if(Math.abs(d5)<1e-12)e1=d6>0?-2:2
else e1=(Math.sin(-0.014538592669112763)-d4)/d5
e2=e1>-1&&e1<1
e3=e2?Math.acos(e1)*12/3.141592653589793:0
e4=B.b.O(B.b.O(13-e3,24)+24,24)
e5=B.b.O(B.b.O(13+e3,24)+24,24)
j=!e2
e6=j&&d6>0
e7=A.Gn(d7,a5,e6,j&&!e6,13)
e8=s+i*3.5+a4*1.5
e9=A.Gl(Math.max(0,1.5707963267948966-d7))
s=B.b.n(Math.exp(-(0.0046416*e9*e8)),0,1)
d4=B.b.n(Math.exp(-(0.010846399999999999*e9*e8)),0,1)
d5=B.b.n(Math.exp(-(0.02648*e9*e8)),0,1)
f0=B.b.n(Math.exp(-(i*(2.2+a4*2))),0,1)
f1=A.BG(-0.3141592653589793,0.10471975511965977,d7)
f2=A.BG(-0.014538592669112763,0.03490658503988659,d7)
f3=Math.max(0,Math.sin(d7)+f2*0.018)
f4=s*0.2126+d4*0.7152+d5*0.0722
f5=Math.pow(f3,0.35)*f4*f0
f6=B.b.n(f3*f4,0,1)
f7=0.42*f6
f8=1-i
f9=0.055+f7*(0.55+0.45*f8)+f1*(0.028+0.018*f8)
g0=0.0015*(1+b5*1.6+a4*4+i*0.8)
b5=0.035+s*0.18+i*0.1
f8=0.045+d4*0.2+i*0.12
i=0.07+d5*0.24+i*0.16+f1*0.018
g1=new A.aU(s,d4,d5)
if(!isFinite(a5)||!isFinite(e4)||!isFinite(e5)||!isFinite(d7)||!isFinite(f1)||!isFinite(f2)||!isFinite(d9)||!isFinite(f5)||!isFinite(f9)||!isFinite(g0)||!isFinite(0.06)||!e0.gT(0)||!new A.B(s,d4,d5).gT(0)||!g1.gT(0)||!new A.aU(0.14+0.38*f6,0.16+f7,0.22+0.52*f6).gT(0)||!new A.aU(b5,f8,i).gT(0))A.f(A.j("solar lighting state is not finite"))
if(e0.gbg()<0.999||e0.gbg()>1.001||f5<0||f9<0||g0<0||f0<0||f0>1||f1<0||f1>1||f2<0||f2>1)A.f(A.j("solar lighting state is out of bounds"))
new A.kJ(e0,g1,f5).A()
j=$.p.j()
j.setAttribute("data-renderer-solar-phase",e7.b)
j.setAttribute("data-renderer-solar-sunrise-hours",B.b.F(e4,4))
j.setAttribute("data-renderer-solar-sunset-hours",B.b.F(e5,4))
j.setAttribute("data-renderer-solar-elevation-deg",B.b.F(d7*180/3.141592653589793,4))
j.setAttribute("data-renderer-solar-twilight-factor",B.b.F(f1,4))
j.setAttribute("data-renderer-solar-horizon-visibility",B.b.F(f2,4))
j.setAttribute("data-renderer-solar-horizon-blend",B.b.F(A.BH(f2),4))
j.setAttribute("data-renderer-solar-transmittance",B.b.F(f0,4))
j=$.Az()
j.pm(0.0166,a4)
g2=j.z
g3=B.b.n(Math.sin(Math.max(0,d7))/Math.sin(1.1344640137963142),0,1)
g4=A.BH(f2)
j=1-g4
g5=new A.B(e0.a*g4+-(h*a)*j,e0.b*g4+a0*j,e0.c*g4+-(a1*b4)*j).ga8()
h=g2.a
g6=h&&g2.gio()?new A.B(g2.f,g2.r,g2.w):g5
s=0.35+(s-0.35)*g4
d4=0.45+(d4-0.45)*g4
d5=0.65+(d5-0.65)*g4
g7=new A.aU(s,d4,d5)
if(h){a=g2.b
g8=new A.aU(s+g2.c*a*2,d4+g2.d*a*2,d5+g2.e*a*2.5)}else g8=g7
g9=B.b.n(g2.gnk(),0.12,2)
h0=B.b.n(r.H("weather_lightning_intensity"),0,2)
b9=(f5*g4+b9*j)*c2
if(h)b9=b9*0.12+g2.b*4.5*g9*h0
s=$.p.j()
s.setAttribute("data-renderer-lightning-active",String(h))
j=g2.x
s.setAttribute("data-renderer-lightning-source-distance-m",B.b.F(j,1))
s.setAttribute("data-renderer-lightning-distance-attenuation",B.b.F(g9,4))
a=g2.f
a0=g2.r
a1=g2.w
s.setAttribute("data-renderer-lightning-source-direction",B.b.F(a,3)+","+B.b.F(a0,3)+","+B.b.F(a1,3))
h1=r.bI("fog_enable")
h2=r.H("fog_density")
h3=r.H("fog_height_falloff")
h4=B.b.n(r.H("fog_distance_scale"),0.25,2)
h5=B.b.n(r.H("weather_fog_scattering"),0,2)
g0=h1?g0*B.b.n(h2/0.012,0,8)*h5:0
h6=h1?0.06*B.b.n(h3/0.6,0,8):0
h7=r.bI("volumetric_light_enable")?B.b.n(r.H("volumetric_shaft_intensity")/0.1,0,8):0
h8=B.d.n(B.b.ai(r.H("volumetric_precision")),4,24)
h9=B.b.n(r.H("volumetric_dust_density"),0,0.25)
i0=B.b.n(r.H("volumetric_scattering")+a4*0.1,-0.85,0.85)
i1=B.b.n(r.H("light_ambient_mult"),0,3)
i2=B.b.n(r.H("light_direct_mult"),0,3)
i3=B.b.n(r.H("normal_bump_strength"),0,2)
i4=B.b.n(r.H("pbr_roughness"),0,2)
i5=B.b.n(r.H("pbr_metallic"),0,2)
i6=B.b.n(r.H("pbr_specular"),0,3)
i7=B.b.n(r.H("shadow_bias"),0.0001,0.01)
i8=B.b.n((1+B.b.n(1-f0,0,1)*1.4+a4*0.25)/B.b.n(r.H("shadow_csm_hardness"),0.1,3),0,3)
l3.eC=g0
l3.ia=h6
s=A.c([],t.xL)
for(r=q.length,m=0;m<q.length;q.length===r||(0,A.u)(q),++m){l=q[m]
b4=l.c
d4=l.e
s.push(new A.cv("point:"+l.a,l.b,new A.B(b4.a,b4.b,b4.c),l.d,Math.max(0.25,d4),Math.max(4,d4*8)))}for(r=p.length,m=0;m<p.length;p.length===r||(0,A.u)(p),++m){l=p[m]
b4=l.d
d4=l.f
s.push(new A.cv("spot:"+l.a,l.b,new A.B(b4.a,b4.b,b4.c),l.e,Math.max(0.25,d4*0.25),Math.max(8,d4)))}i9=l3.to
if(h&&g2.gio()&&i9!=null){j0=new A.B(a,a0,a1).ga8()
B.a.k(s,new A.cv("lightning:active",i9.d.a4(0,j0.a6(0,j)),new A.B(g2.c,g2.d,g2.e),g2.b*12e4*h0,1000,Math.max(1100,j*1.25)))}j1=h1?g0+h9:0
if(i9==null)r=l4
else{r=i9.d
r=A.GD(i9.e,Math.min(i9.r,64),r,j1,s)}l3.hY=r
j=r==null
j2=j?l4:r.a
if(j2==null)j2=B.v
$.p.j().setAttribute("data-renderer-volumetric-medium-scattering",B.b.F(j1,6))
h=A.c([],t.E7)
f=0
for(;;){if(!(f<l3.cp.length&&f<4))break
h.push(new A.wb(l3,f,m5).$0());++f}if(!j){j=$.p.j()
j.setAttribute("data-renderer-volumetric-source-count",""+r.c)
a=r.a
j.setAttribute("data-renderer-volumetric-source-radiance",B.b.F(a.a,6)+","+B.b.F(a.b,6)+","+B.b.F(a.c,6))
r=r.b
j.setAttribute("data-renderer-volumetric-source-direction",B.b.F(r.a,4)+","+B.b.F(r.b,4)+","+B.b.F(r.c,4))}r=b7.c
j=b7.b
a=b7.a
a0=Math.max(0.045,c0*(g3>0.001?g3:1)*c2+f1*(0.022+0.018*(1-a4)))
a1=l3.k2.h(0,"skybox-main-atmosphere-v1")
b4=B.b.n(r*1.18,0,1)
d4=B.b.n(j*1.18,0,1)
d5=B.b.n(a*1.18,0,1)
f7=B.b.n(b5*0.55,0,1)
g1=B.b.n(f8*0.55,0,1)
j3=B.b.n(i*0.55,0,1)
j4=Math.cos(l8)
l8=Math.sin(l8)
j5=l3.dq
j6=$.bT()
j7=j6.H("cloud_detail")
j6=j6.H("cloud_silver_lining")
j8=c1.c
j9=j2.a
k0=B.b.n(j9,0,8)
k1=c1.b
k2=j2.b
k3=B.b.n(k2,0,8)
k4=c1.a
k5=j2.c
k6=B.b.n(k5,0,8)
k7=B.b.n(0.72+j8*0.28,0,1)
k8=B.b.n(0.76+k1*0.24,0,1)
k9=B.b.n(0.82+k4*0.18,0,1)
l0=B.b.n(0.22+a4*0.18,0,0.5)
if(!new A.aU(r,j,a).gT(0))A.f(A.o("skyColor must be finite",l4))
if(!g8.gT(0))A.f(A.o("keyLightColor must be finite",l4))
if(!new A.aU(j9,k2,k5).gT(0))A.f(A.o("sourceRadiance must be finite",l4))
if(!isFinite(b9)||b9<0)A.f(A.o("keyLightIntensity must be finite and >= 0",l4))
if(j9<0||k2<0||k5<0)A.f(A.o("sourceRadiance channels must be >= 0",l4))
l1=B.b.n(b9*0.12,0,0.35)
l2=1-l1
l3.x1=new A.kV(B.jR,new A.aU(j8*0.08+b5*0.035+k0*0.015,k1*0.08+f8*0.035+k3*0.015,k4*0.08+i*0.035+k6*0.015),1.5*h4/(1+a4*0.45),14*h4/(1+a4*0.16),h6,g0,new A.aU(k7,k8,k9),h6,h9,i0,l0,h7,h8,i8,i1,i2,i3,i4,i5,i6,i7,new A.aU(B.b.n(r*l2+g8.a*l1+j9*0.02,0,1),B.b.n(j*l2+g8.b*l1+k2*0.02,0,1),B.b.n(a*l2+g8.c*l1+k5*0.02,0,1)),B.b.n(d0*0.42,0,1),0,new A.aU(r,j,a),a0,new A.kJ(g6,g8,b9),q,p,s,h,new A.up("main-atmosphere-v1",a1,new A.aU(r,j,a),new A.aU(b4,d4,d5),new A.aU(f7,g1,j3),c5,c6,650,420,0.0012,j4*c7,l8*c7,j5,j7,j6,c8))
j6=$.p.j()
j6.setAttribute("data-renderer-reflection-intensity",B.b.F(l3.x1.dy,4))
j6.setAttribute("data-renderer-reflection-confidence",B.d.F(l3.x1.fr,4))
j7=l3.x1.k4
l8=j7==null?l4:j7.a
if(l8==null)l8="none"
j6.setAttribute("data-renderer-skybox-asset",l8)
l8=l3.x1.k4
l8=l8==null?l4:l8.z
j6.setAttribute("data-renderer-sky-cloud-coverage",B.b.F(l8==null?0:l8,4))
l8=l3.x1.k4
l8=l8==null?l4:l8.Q
j6.setAttribute("data-renderer-sky-cloud-density",B.b.F(l8==null?0:l8,4))
l8=l3.x1.k4
l8=l8==null?l4:l8.db
j6.setAttribute("data-renderer-sky-cloud-samples",""+(l8==null?0:l8))
l8=l3.x1.k4
l8=l8==null?l4:l8.CW
j6.setAttribute("data-renderer-sky-cloud-phase",B.b.F(l8==null?0:l8,3))
j6.setAttribute("data-renderer-reflection-mode","environment-fallback")},
lz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="wetness_override",a7="fog_height_falloff",a8="fog_distance_scale",a9="post_affine_warp",b0="post_vertex_snap",b1="weather_particles_enable",b2="weather_particle_density",b3="weather_particle_size",b4="weather_snow_accumulation",b5="weather_fog_scattering",b6="weather_lightning_intensity",b7="weather_reflection_strength",b8="cloud_coverage_override",b9="cloud_silver_lining",c0="light_ambient_mult",c1="light_direct_mult",c2=null,c3="shadow_csm_hardness",c4=t.N,c5=A.aF(["time_override","rain_override",a6,"fog_enable","fog_density",a7,a8,"post_exposure","post_vignette","post_film_grain",a9,b0,b1,b2,b3,b4,b5,b6,b7,"cloud_enable",b8,"cloud_density","cloud_detail","cloud_speed",b9,"cloud_samples",c0,c1],c4),c6=A.n(c4,c4),c7=$.bT().w
c7===$&&A.t()
s=0
for(;s<60;++s)c6.l(0,c7[s].a,"No resolved Pixeldart frame mapping is installed")
c7=new A.w4(a5,c5,c6)
c7.$2("ssao",B.kp)
c7.$2("shadows",B.l3)
c7.$2("shadows",B.kY)
c7.$2("volumetric",B.jT)
c7.$2("bloom",B.kZ)
c7.$2("dof",B.l0)
c7.$2("grade",B.l_)
c7.$2("ps1",B.le)
c7.$2("vhs",B.l1)
c7=$.bT()
r=a5.i9
q=a5.xr
p=a5.ct
o=a5.eC
n=a5.ia
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
a2=a5.eC
a4=a5.x2
a0=a5.x1
a=c7.bI(b1)
a1=a5.x1.k4
r=a1==null?c2:a1.Q
c7.p5("No resolved debug attachments are exposed by the active Pixeldart profile",A.E(["fog_enable",a2>0,"shadow_ssdo_enable",a4.c>0,"volumetric_light_enable",a0.Q>0,b1,a,"cloud_enable",r!==0],c4,t.y),a3,c5,c6)
c6=$.Ei()
c6.ma(c7)
$.p.j().setAttribute("data-renderer-shader-overrides",B.f.a0(c6.a,c2))
$.p.j().setAttribute("data-renderer-shader-lab",B.f.a0(c7.ne(),c2))
$.p.j().setAttribute("data-renderer-shader-lab-document",B.f.a0(c7.eZ(),c2))
$.p.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a0(A.BD().eZ(),c2))},
ji(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this
t.xw.a(a)
s=J.z9(a.slice(0),A.C(a).c)
r=A.c([],t.A5)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p){o=s[p]
n=o.d
if(n>0){m=o.b
l=o.c
k=o.a
j=B.c.bf(k,":downpipe")?3.2:2.2
r.push(new A.kU(new A.B(m.a,m.b,m.c),new A.B(l.a,l.b,l.c),j,o.e,B.d.n(B.b.ai(2+n*20),2,6),B.c.gU(k)&2147483647))}}i.da=r
i.ex=B.b.n(b,0,1/0)
i.ey=B.b.n(c,0,1/0)
i.ez=B.b.n(d,0,1/0)
i.bU=B.b.n(B.a.b6(s,0,new A.wc(),t.i)*1.8,0,1)},
jn(a){var s,r,q,p=this
if(a==null){p.dl=p.dk=0
p.ct=p.bU
$.p.j().removeAttribute("data-renderer-weather-surface")
return}s=B.b.n($.bT().H("weather_snow_accumulation"),0,2)
p.dk=B.b.n(a.a/0.08*s,0,1)
p.dl=B.b.n(a.x,0,1)
r=a.b
p.ct=Math.max(B.b.n(r/0.0008,0,1),p.bU)
q=$.p.j()
q.setAttribute("data-renderer-weather-surface",B.f.a0(a.C(),null))
q.setAttribute("data-renderer-weather-snow-coverage",B.b.F(p.dk,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.F(p.dl,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.F(r,8))
q.setAttribute("data-renderer-weather-rain-flow-wetness",B.b.F(p.bU,4))},
kW(){var s,r,q,p,o,n,m,l=this
if(l.eA!=null||l.eB!=null)return
s=new Float32Array(A.S(A.c([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=l.e
r===$&&A.t()
l.eA=r.gaD().bG(l.bn(s),"weather:rain-particle")
l.eB=l.bp(B.lB)
q=new A.bP(new Float32Array(5376))
q.eN(new A.h(-0.035,0,0),new A.h(0.035,0,0),new A.h(0.035,-0.07,0),new A.h(-0.035,-0.07,0),14478335,0.78,!0)
l.i_=l.e.gaD().bG(l.bn(B.o.aj(q.a,0,q.b)),"weather:snow-particle")
l.i0=l.bp(B.lE)
p=new A.bP(new Float32Array(5376))
p.eN(new A.h(-0.025,0,0),new A.h(0.025,0,0),new A.h(0.025,-0.12,0),new A.h(-0.025,-0.12,0),11519958,0.9,!0)
l.i1=l.e.gaD().bG(l.bn(B.o.aj(p.a,0,p.b)),"weather:hail-particle")
l.i2=l.bp(B.lG)
o=new A.bP(new Float32Array(5376))
o.eN(new A.h(-0.06,0,0),new A.h(0.06,0,0),new A.h(0.045,0.22,0),new A.h(-0.045,0.22,0),16758062,0.86,!0)
l.i3=l.e.gaD().bG(l.bn(B.o.aj(o.a,0,o.b)),"fire:flame-particle")
l.i4=l.bp(B.lD)
n=new A.bP(new Float32Array(5376))
n.iI(new A.h(-0.11,0,0),new A.h(0.11,0,0),new A.h(0.15,0.2,0),new A.h(-0.15,0.2,0),15198175,0.22)
l.i5=l.e.gaD().bG(l.bn(B.o.aj(n.a,0,n.b)),"fire:white-vapour-particle")
l.i6=l.bp(B.lC)
m=new A.bP(new Float32Array(5376))
m.iI(new A.h(-0.14,0,0),new A.h(0.14,0,0),new A.h(0.18,0.24,0),new A.h(-0.18,0.24,0),1513757,0.34)
l.i7=l.e.gaD().bG(l.bn(B.o.aj(m.a,0,m.b)),"fire:black-soot-particle")
l.i8=l.bp(B.lF)},
lM(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
a4.de=a4.dd=0
a4.df=a4.gha()
a4.di=a4.dh=a4.dg=0
a4.dj=!1
a4.cs=a4.cr=a4.cq=a4.dc=0
a4.lL(a6,a7)
a4.d9=a4.d8=a4.ew=0
s=a4.y2
r=s==null
q=r?a5:s.a
if(q==null)q=B.w
p=$.bT()
if(!p.bI("weather_particles_enable"))return
o=B.b.n(p.H("weather_particle_density"),0,2)
n=B.b.n(p.H("weather_particle_size"),0.25,2)
m=r?a5:A.BX(s.a)
if(m==null)m=A.BX(B.w)
A:{p=B.aa===q
if(p){l=a4.i_
break A}if(B.X===q||B.a9===q){l=a4.i1
break A}l=a4.eA
break A}B:{if(p){k=a4.i0
break B}if(B.X===q||B.a9===q){k=a4.i2
break B}k=a4.eB
break B}if(l==null||k==null||q===B.w||a4.xr<=0.01)return
C:{if(p){p=38
break C}if(B.X===q){p=26
break C}if(B.a9===q){p=30
break C}p=32
break C}j=B.d.n(B.b.ai(8+a4.xr*p*o*a4.y1),0,40)
p=a4.gha()
i=new A.nZ(j,p)
i.A()
h=B.d.n(j,0,p)
a4.dd=j
a4.df=p
a4.dj=B.d.n(j,0,p)!==j
p=Math.sin(a4.dq*0.7)
g=r?a5:s.b.a
if(g==null)g=0
f=g+p*0.18
r=r?a5:s.b.c
e=(r==null?0:r)+0.12
r=m.f
d=A.Ex(B.oO,m.r,B.eC,m.d,B.oS,new A.B(f,m.b,e),2003132788+q.a,m.e,k,l,B.oL,h,r*n,a4.bV,new A.B(f,-m.c,e))
c=d.ii(a7)
a4.dg=c.b
a4.dh=c.c
a4.di=d.nf(a7,i).r
b=new A.kW(a7.a,a7.b,a7.c,a7.d,a7.e,a7.f,a7.r,Math.max(0,a7.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,a=0;a<h;++a){a0=d.c4(a7,a)
g=d.c4(b,a).c
a1=a0.c
a2=a0.d
a3=A.GF(new A.h(a1.a,a1.b,a1.c),q,a4.d7,p,r,new A.h(g.a,g.b,g.c),new A.h(a2.a,a2.b,a2.c))
if(!a3.a)continue;++a4.ew
a4.d8=a4.d8+a3.r
a4.d9=a4.d9+a3.f}if(a4.y1>0.01)a4.de=d.fn(a6,a7,new A.w5(a4,m,n))
r=a4.da
if(r.length!==0)a4.dc=new A.pw(l,k,r,1.4,0.42*n).c8(a6,a7)},
lL(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.i3,a5=a3.i4,a6=a3.i5,a7=a3.i6,a8=a3.i7,a9=a3.i8
if(a3.ev.length===0||a4==null||a5==null||a6==null||a7==null||a8==null||a9==null)return
for(s=isFinite(0.9),r=isFinite(0.08),q=0;p=a3.ev,q<p.length;++q){o=p[q]
p=o.a
n=!0
if(p.length!==0){m=o.b
l=m.a
if(!isNaN(l)){k=m.b
if(!isNaN(k)){m=m.c
if(!isNaN(m)){j=o.c
if(isFinite(j))if(j>0)if(s)if(r)if(isFinite(l)&&isFinite(k)&&isFinite(m)){n=o.f
n=!(isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c))}}}}}if(n)A.f(A.o("invalid fire emitter "+p,null))
i=B.b.n(B.b.n(o.c/80,0,2)*0.9550000000000001,0,1)
h=B.b.n(0.1816,0,1)
g=B.b.n(0.08339999999999999,0,0.65)
p=o.f
n=p.a
m=p.b
p=p.c
f=Math.sqrt(n*n+m*m+p*p)
e=B.b.n(2.072/(1+f*0.12),1,4.8)
d=B.b.n(3.576/(1+f*0.08),2,7.2)
c=B.b.n(85+f*28+18,60,220)
b=B.b.n(0.35+i*1.1-0.0144,0.15,1.8)
m=650+850*i
if(!isFinite(i)||i<0||i>1||!isFinite(h)||h<0||h>1||!isFinite(g)||g<0||g>1||!isFinite(b)||b<0||!isFinite(m)||m<=0||!isFinite(e)||e<0||!isFinite(d)||d<0||!isFinite(c)||c<=0)A.f(A.o("invalid fire emission snapshot",null))
m=o.b
a=new A.B(m.a,m.b+0.03,m.c)
a0=B.d.n(B.b.ai(2+i*5),2,7)
m=a3.bV
a3.cq=a3.cq+new A.fT(a4,a5,B.b1,a,B.oT,new A.B(n*0.03,b,p*0.03),B.oR,new A.B(n*0.08,1.65,p*0.08),2.8,0.52,a0,(m^q*7919)>>>0,0.72+i*0.45,!1,1718381925).c8(b0,b1)
a1=B.d.n(B.b.ai(1+h*5),1,6)
m=a3.bV
a3.cr=a3.cr+new A.fT(a6,a7,B.b1,a,B.oN,new A.B(n*0.12,0.24,p*0.12),B.oM,new A.B(n*0.34,0.92,p*0.34),0.72,e,a1,(m^q*1543^119)>>>0,0.62+h*0.6,!1,2004251762).c8(b0,b1)
a2=B.d.n(B.b.ai(1+g*6),1,5)
m=a3.bV
a3.cs=a3.cs+new A.fT(a8,a9,B.b1,a,B.oU,new A.B(n*0.18,0.18,p*0.18),B.oP,new A.B(n*0.5,0.68,p*0.5),0.52,d,a2,(m^q*3571^4919)>>>0,0.8+g*0.7,!1,1651272563).c8(b0,b1)}},
kV(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.d7,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
giW(){var s=this.y2
s=s==null?null:s.a
return(s==null?B.w:s).b},
gdK(){var s=this.d6
s=s==null?null:s.b
return s==null?0:s},
giV(){var s=this.d6
s=s==null?null:s.d
return s==null?0:s},
gha(){var s,r=this.w
r===$&&A.t()
s=r.a
A:{if(B.G===s){r=40
break A}if(B.Q===s){r=24
break A}r=8
break A}return r},
hh(a,b){var s=A.JQ(a,b),r=A.JO(a,b),q=A.K(s.c,t.i)
B.a.L(q,r)
return A.c([new A.hH("wall",new Float32Array(A.S(q))),new A.hH("floor",s.a),new A.hH("ceiling",s.b)],t.pv)},
bn(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.k(n,new A.B(q,p,a[o]))}if(n.length===0)throw A.a(A.j("house surface mesh cannot be empty"))
return new A.bY(B.ai,a,null,A.b2(n))},
kX(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.hh(a2,a3),a0=a3.a,a1=b.ok.h(0,a0)
if(a1==null)throw A.a(A.j("surface materials missing for room "+a0))
s=A.c([],t.d)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.t()
k=k.w
if(k==null)k=A.f(A.j("renderer is not initialized"))
j=b.bn(l.b)
i=l.a
if(k.x)A.f(A.j("resource library is disposed"))
h=k.a
j.A()
g=h.b.aH(j,n+i)
f=g.a
h.c.l(0,f,h.bc(j))
k.f.k(0,g)
i=a1.h(0,i)
i.toString
e=new A.bb(g,i,B.B,-1,B.V,B.K,!0,!0,0,null)
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
j=B.B.af()
k=k.gan()
h=A.C(k)
A.b2(new A.H(k,h.i("B(1)").a(j.gaq()),h.i("H<1,B>")))
c=i.b.bR(e)
B.a.k(p,g)
B.a.k(o,c)
B.a.k(s,g)
B.a.k(r,c)
B.a.k(q,e)}b.z.l(0,a0,s)
b.ax.l(0,a0,r)
b.ay.l(0,a0,q)
if(r.length!==0)b.as.l(0,a0,B.a.ga1(r))
if(q.length!==0)b.at.l(0,a0,B.a.ga1(q))},
ls(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.ok,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.E(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cN(l,l.r,l.e,A.v(l).i("cN<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bD.h(0,i)
if(h==null)A.f(A.j("Unknown house surface material: "+i))
i=j.a
B.a.k(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.k(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.p.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.W(e,","))
$.p.j().setAttribute("data-renderer-house-surface-bindings",B.a.W(d,","))},
l_(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.bP(new Float32Array(5376))
g=this.kZ(a0.b)
r=new A.h(d,b,f)
q=new A.h(e,b,f)
p=new A.h(e,c,f)
o=new A.h(d,c,f)
n=new A.h(d,b,a)
m=new A.h(e,b,a)
l=new A.h(e,c,a)
k=new A.h(d,c,a)
s.aO(q,r,o,p,g)
s.aO(n,m,l,k,g)
s.aO(r,n,k,o,g)
s.aO(m,q,p,l,g)
s.aO(r,q,m,n,g)
s.aO(o,k,l,p,g)
j=B.o.aj(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.B(e,d,j[c]))}return new A.bY(B.ai,j,null,A.b2(g))},
kZ(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
e6(a){var s
A:{if(0===a){s=B.mW
break A}if(1===a){s=B.mY
break A}if(2===a){s=B.n3
break A}if(3===a){s=B.nb
break A}if(4===a){s=B.nc
break A}if(5===a){s=B.n1
break A}if(6===a){s=B.na
break A}if(7===a){s=B.n6
break A}s=B.n9
break A}return s},
e9(a){var s
A:{if("architecture"===a){s=B.mX
break A}if("furniture"===a){s=B.dX
break A}if("fixture"===a){s=B.n5
break A}if("service"===a){s=B.n7
break A}if("story"===a){s=B.n4
break A}if("decor"===a){s=B.n_
break A}if("micro"===a){s=B.n2
break A}s=B.dX
break A}return s},
dA(a){return this.o6(t.G.a(a))},
o6(a){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l
var $async$dA=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:if(!p.aJ){s=1
break}o=A.c([],t.iJ)
for(n=0;n<8;++n){m=B.jS[n]
l=a.h(0,m)
if(l!=null)o.push(p.cT(m,l))}s=3
return A.a6(A.pD(o,t.H),$async$dA)
case 3:case 1:return A.aJ(q,r)}})
return A.aK($async$dA,r)},
cT(a,b){return this.l2(a,b)},
l2(a2,a3){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cT=A.aM(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a0=n.k2.h(0,a2)
if(a0==null){s=1
break}p=4
c=v.G
b=A.b(A.b(c.document).createElement("img"))
b.src=a3
m=b
s=7
return A.a6(A.av(A.b(m.decode()),t.X),$async$cT)
case 7:l=null
k=null
j=null
i=a2
A:{if("grime"===i){j=B.mU
break A}if("porcelain-albedo"===i||"porcelain-normal"===i){j=B.mT
break A}if("skybox-main-atmosphere-v1"===i){j=B.mS
break A}j=B.mR
break A}h=j
l=h.a
k=h.b
b=A.b(A.b(c.document).createElement("canvas"))
b.width=l
b.height=k
g=b
f=A.G(g.getContext("2d"))
if(!t.m.b(f)){j=A.j("2D canvas context unavailable for "+a2)
throw A.a(j)}A.aV(f,"drawImage",[m,0,0,l,k],t.H)
e=t.mV.a(A.b(f.getImageData(0,0,l,k)).data)
j=n.e
j===$&&A.t()
j=j.gaD()
c=new Uint8Array(A.S(e))
if(j.x)A.f(A.j("resource library is disposed"))
j.c.pn(a0,c)
j=n.e.gaD()
if(j.x)A.f(A.j("resource library is disposed"))
j.c.nF(a0)
$.p.j().setAttribute("data-renderer-texture-"+a2,"loaded")
n.ed()
n.cV()
p=2
s=6
break
case 4:p=3
a1=o.pop()
d=A.ah(a1)
j=$.p.j()
j.setAttribute("data-renderer-texture-"+a2,"fallback")
n.ed()
n.cV()
A.b(v.G.console).warn("Pixeldart texture "+a2+" unavailable: "+A.y(d))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$cT,r)},
ed(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aJ||i.k2.a===0)return
s=i.k2
r=A.v(s).i("N<1,2>")
r=A.lk(new A.N(s,r),r.i("c2(r.E)").a(new A.w0()),r.i("r.E"),t.jP)
q=A.K(r,A.v(r).i("r.E"))
s=i.e
s===$&&A.t()
p=s.gaD().ghq().dD(q)
s=p.a
o=A.c(s.slice(0),A.C(s))
B.a.Y(o,new A.w1())
s=A.C(o)
r=s.i("e(1)")
s=s.i("H<1,e>")
n=new A.H(o,r.a(new A.w2()),s).W(0,",")
m=new A.H(o,r.a(new A.w3()),s).W(0,",")
s=p.d_(B.ef)
r=p.d_(B.eg)
l=p.d_(B.eh)
k=p.d_(B.ei);++i.ib
j=$.p.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.ib)
if(!A.T($.p.j().hasAttribute("data-renderer-texture-residency-initial")))$.p.j().setAttribute("data-renderer-texture-residency-initial",n)},
cV(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aJ||j.rx.a===0)return
s=A.c([],t.a6)
for(r=j.rx,r=new A.N(r,A.v(r).i("N<1,2>")).gv(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.db(p,o,B.c.p(p,"wall")?2:1))}r=j.e
r===$&&A.t()
r=r.gaD()
n=r.e
if(n===$){p=r.ghq()
r.e!==$&&A.nF()
n=r.e=new A.r6(p)}m=n.dD(s)
s=m.a
l=A.c(s.slice(0),A.C(s))
B.a.Y(l,new A.vY())
s=A.C(l)
k=new A.H(l,s.i("e(1)").a(new A.vZ()),s.i("H<1,e>")).W(0,",")
s=$.p.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cQ(B.bG)+";pending="+m.cQ(B.dA)+";missing="+m.cQ(B.dB)+";evicted="+m.cQ(B.dC))},
ce(a,b){return new A.bb(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
fR(a,b,c){var s,r,q,p,o,n=A.JN(a,b,c),m=n.length
if(m===0)throw A.a(A.j("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.B(q,p,n[o]))}return new A.bY(B.ai,n,null,A.b2(s))},
lm(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.R.j().aI(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.h(k,s,r),new A.h(q,s,r),new A.h(q,p,r),new A.h(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.h(k,s,r),new A.h(q,s,r),new A.h(q,p,r),new A.h(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.h(k,s,r),new A.h(k,s,q),new A.h(k,p,q),new A.h(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.h(k,s,r),new A.h(k,s,q),new A.h(k,p,q),new A.h(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.bP(new Float32Array(5376))
o.aO(k[0],k[1],k[2],k[3],g)
n=B.o.aj(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.B(r,q,n[p]))}return new A.bY(B.ai,n,null,A.b2(k))},
ki(a,b){var s,r,q,p=a.e,o=A.v(p).i("N<1,2>"),n=A.K(new A.N(p,o),o.i("r.E"))
B.a.Y(n,new A.vU())
p=$.p.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.H(o,s.i("k(1)").a(new A.vV()),s.i("H<1,k>")).W(0,":")+";spots="+new A.H(r,q.i("k(1)").a(new A.vW()),q.i("H<1,k>")).W(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.H(n,q.i("e(1)").a(new A.vX()),q.i("H<1,e>")).W(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
bp(a){var s,r=this.e
r===$&&A.t()
r=r.gaD()
if(r.x)A.f(A.j("resource library is disposed"))
a.A()
s=r.b.a.aH(a,null)
r.r.k(0,s)
this.rx.l(0,a.a,a)
return s},
$iBy:1}
A.w6.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:34}
A.w9.prototype={
$1(a){var s,r
A.i(a)
s=this.c.a.f
r=s.length
if(r>a){if(!(a>=0))return A.d(s,a)
s=s[a]}else s="DefaultMaterial"
return this.a.lr(this.b.a,s)},
$S:175}
A.wa.prototype={
$1(a){return this.a},
$S:176}
A.w_.prototype={
$1(a){return J.aa(t.of.a(a).h(0,"attached"),!0)},
$S:177}
A.w7.prototype={
$1(a){var s=0,r=A.aL(t.N),q,p
var $async$$1=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.T(p.ok))throw A.a(A.j("package manifest HTTP "+A.y(A.nB(p,"status",t.S))+": "+a))
s=4
return A.a6(A.av(A.b(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$1,r)},
$S:178}
A.w8.prototype={
$2(a,b){var s=0,r=A.aL(t.uo),q,p,o
var $async$$2=A.aM(function(c,d){if(c===1)return A.aI(d,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.T(p.ok))throw A.a(A.j("package payload HTTP "+A.y(A.nB(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a6(A.av(A.b(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.Bm(d,0,null)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$2,r)},
$S:179}
A.wd.prototype={
$1(a){var s=this.a.dy.h(0,A.w(a))
s.toString
return s},
$S:27}
A.we.prototype={
$1(a){var s,r,q,p
A.w(a)
s=this.a
r=s.k3.h(0,a)
q=r==null
p=q?null:s.k2.h(0,r)
if(q||p==null)throw A.a(A.j("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:27}
A.wb.prototype={
$0(){var s,r=this.a.cp,q=this.b
if(!(q<r.length))return A.d(r,q)
s=r[q]
r=s.a
return new A.hA("warm:"+q,new A.B(r.a,r.b,r.c),s.b,B.b.n((s.c-this.c.r)/60,0,1))},
$S:180}
A.w4.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.t()
if(r.b.p(0,a)){this.b.L(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.l(0,b[o],p+s.w.a.b+" does not install it")},
$S:181}
A.wc.prototype={
$2(a,b){return Math.max(A.ax(a),t.z0.a(b).d)},
$S:182}
A.w5.prototype={
$1(a){var s=a.c
return!this.a.kV(new A.h(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:54}
A.w0.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.c2(s,a.b,r)},
$S:183}
A.w1.prototype={
$2(a,b){var s=t.h
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:184}
A.w2.prototype={
$1(a){t.h.a(a)
return a.a.a+"="+a.b.b},
$S:52}
A.w3.prototype={
$1(a){var s=t.h.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:52}
A.vY.prototype={
$2(a,b){var s=t.wl
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:186}
A.vZ.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:187}
A.vU.prototype={
$2(a,b){var s=t.ou
return B.d.I(s.a(a).a,s.a(b).a)},
$S:188}
A.vV.prototype={
$1(a){return t.je.a(a).a},
$S:42}
A.vW.prototype={
$1(a){return t.je.a(a).a},
$S:42}
A.vX.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:190}
A.mU.prototype={}
A.jx.prototype={
hQ(a,b){var s=this,r=b==null?s.d:b
return new A.jx(s.a,s.b,s.c,r,a)},
mD(a){return this.hQ(a,null)}}
A.vy.prototype={
gaz(){return this.b},
gaX(){return this.c}}
A.wL.prototype={
$2(a,b){var s
A.A9(a,A.y(b))
switch(a){case"master":s=$.bm
if(s!=null)s.je(b)
break
case"voice":s=$.bm
if(s!=null)s.jg(b)
break
case"effects":s=$.bm
if(s!=null)s.jd(b)
break
case"ambience":s=$.bm
if(s!=null)s.jc(b)
break
case"music":s=$.bm
if(s!=null)s.jf(b)
break}},
$S:35}
A.wM.prototype={
$1(a){var s
A.A9("muted",""+a)
s=$.bm
if(s!=null)s.fe(a)},
$S:12}
A.wN.prototype={
$1(a){var s
A.A9("mono",""+a)
s=$.bm
if(s!=null)s.dO(a)},
$S:12}
A.wT.prototype={
$2(a,b){A.Aa(a,A.y(b))
A.Cy(a,b)},
$S:35}
A.wU.prototype={
$1(a){var s="high-contrast"
A.Aa(s,""+a)
A.wv(s,a)},
$S:12}
A.wV.prototype={
$1(a){var s="strong-highlights"
A.Aa(s,""+a)
A.wv(s,a)},
$S:12}
A.wW.prototype={
$1(a){$.dt().oT(a)
A.xD()
A.CA()},
$S:192}
A.wX.prototype={
$0(){var s=$.dt()
s.a=A.dS(null,1)
s.b=A.dS(null,1)
A.xD()
A.CA()},
$S:0}
A.wY.prototype={
$0(){A.e6(this.a)},
$S:0}
A.wZ.prototype={
$0(){this.a.ah()},
$S:0}
A.x_.prototype={
$0(){A.e6(this.a)},
$S:0}
A.wO.prototype={
$0(){A.hY(this.a)},
$S:0}
A.wP.prototype={
$1(a){$.jZ=a
A.D3()
A.zD()},
$S:193}
A.wQ.prototype={
$1(a){var s=$.cD()
$.zQ=a
if(!s.Q&&a.Q){$.bw.j().a=1
$.bw.j().iN(7)
$.aC.j().ip()
$.cC().P(0)}A.D5()
A.Cz()},
$S:194}
A.wR.prototype={
$1(a){$.dq=a
A.zY()
A.nl()},
$S:195}
A.wS.prototype={
$0(){$.dq=B.aF
$.fH.j().fa($.dq)
A.zY()
A.nl()},
$S:0}
A.wH.prototype={
$1(a){var s,r=A.DF(a,A.CQ())
$.k0=A.hd($.kb().b,a)
s=r.b
$.eO.j().cJ(a,$.kb().b,s)
$.p.j().setAttribute("data-graphics-fallback",B.a.W(s,"|"))
$.CR=A.nn(a,r,$.CR)},
$S:196}
A.wI.prototype={
$0(){this.a.$1(B.jm)},
$S:0}
A.wJ.prototype={
$0(){A.e6($.eO.j())},
$S:0}
A.wK.prototype={
$0(){A.e6($.eO.j())},
$S:0}
A.wD.prototype={
$1(a){},
$S:19}
A.wE.prototype={
$1(a){var s,r
$.zM=a
$.am.j().fb(a.r)
s=$.am.j()
r=s.ch
r.a=a.f
r.eS()
s.b0()
A.D4()},
$S:197}
A.wF.prototype={
$0(){A.e6($.jS.j())},
$S:0}
A.wG.prototype={
$0(){A.e6($.jS.j())},
$S:0}
A.xu.prototype={
$0(){$.xS=A.T(this.a.matches)
$.Af=A.T(this.b.matches)
A.nl()},
$S:0}
A.xs.prototype={
$1(a){return this.a.$0()},
$S:2}
A.xt.prototype={
$1(a){return this.a.$0()},
$S:2}
A.yj.prototype={
$1(a){var s
try{A.AZ(this.b,a,this.a)
return!0}catch(s){if(A.ah(s) instanceof A.A)return!1
else throw s}},
$S:198}
A.yk.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.jY.j()
break
case 5:p=$.fH.j()
break
case 1:p=$.eO.j()
break
case 4:p=$.hN.j()
break
case 2:p=$.jU.j()
break
case 3:p=$.jS.j()
break}s=p
r=null
switch(o){case 0:r=B.mi
break
case 5:r=B.mn
break
case 1:r=B.mj
break
case 4:r=B.mm
break
case 2:r=B.mk
break
case 3:r=B.ml
break}q=r
p=B.dv.h(0,a)
p.toString
A.zX(s,q,p)},
$S:199}
A.yl.prototype={
$0(){A.e6($.hP.j())},
$S:0}
A.yw.prototype={
$0(){return A.e6($.hP.j())},
$S:0}
A.yG.prototype={
$0(){$.cA.j().ah()},
$S:0}
A.yH.prototype={
$0(){$.cA.j().ah()},
$S:0}
A.yI.prototype={
$0(){A.zX($.hP.j(),B.dE,"pause.settings")},
$S:0}
A.yJ.prototype={
$0(){$.cA.j().ah()
A.hX($.jV.j())},
$S:0}
A.yK.prototype={
$0(){A.k7("saved")},
$S:0}
A.yL.prototype={
$0(){$.cA.j().ah()
A.hX($.jV.j())},
$S:0}
A.yM.prototype={
$0(){A.zX($.nj.j(),B.mo,"pause.credits")},
$S:0}
A.ym.prototype={
$0(){return A.hY($.cA.j())},
$S:0}
A.yn.prototype={
$1(a){var s=$.W.j(),r=s.e.pr(a),q=r?B.iU:B.iV
s.hb(q,r?a:null)
return r},
$S:22}
A.yo.prototype={
$0(){return A.hY($.jW.j())},
$S:0}
A.yp.prototype={
$2(a,b){var s,r
if($.aC.j().y){s=$.aP.j().gcl()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.HX(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.de,a)
A.HW(B.de[a])}}},
$S:200}
A.yq.prototype={
$2(a,b){var s,r,q,p,o,n
if($.W.j().gag().a===21){A.Da(!1)
return}s=$.R.j().y.b
$.W.j().jz(a,b,$.af)
if(b===B.bX&&$.af===$.R.j().r){A.IT()
A.fM("woke in the living room")}r=$.R.j().y.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cG()
if(typeof n!=="number")return A.ye(n)
if(!(o<n))break
if($.R.b===$.R)A.f(A.a9(""))
p=B.a.h(B.W,q).b
o=$.ay
if(o!=null){n=$.R.b
if(n===$.R)A.f(A.a9(""))
o.dF(n,p)}o=q
if(typeof o!=="number")return o.a4()
q=o+1}A.k7("saved after sleep")},
$S:201}
A.yr.prototype={
$0(){return A.hY($.fJ.j())},
$S:0}
A.ys.prototype={
$0(){return A.hY($.jV.j())},
$S:0}
A.yt.prototype={
$0(){return A.e6($.nj.j())},
$S:0}
A.yu.prototype={
$0(){A.hY($.jT.j())},
$S:0}
A.yv.prototype={
$0(){A.hY($.jT.j())},
$S:0}
A.yx.prototype={
$1(a){return A.D9()},
$S:2}
A.yy.prototype={
$1(a){if(A.w(A.b(v.G.document).visibilityState)==="hidden")A.IW()},
$S:1}
A.yz.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.b(a)
if(A.w(l.code)==="CapsLock"&&!A.T(l.repeat)){l.preventDefault()
p=$.bT()
o=!p.a
p.a=o
if(o)A.qH(A.b(v.G.document),"exitPointerLock",t.X)
else $.am.j().dH($.p.j())
return}p=$.bT()
if(p.a&&!A.T(l.repeat)){if(A.w(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.am.j().dH($.p.j())
return}if(A.w(l.code)==="KeyC"){l.preventDefault()
A.x1()
return}if(A.w(l.code)==="KeyI"){l.preventDefault()
A.xq()
return}if(A.w(l.code)==="ArrowUp"||A.w(l.code)==="KeyW"){l.preventDefault()
n=p.gbt().length
if(n>0)p.c=B.d.O(p.c-1+n,n)
o=$.eT
if(o!=null){p=p.gbt().length
o.a.dN(-1,p)}return}if(A.w(l.code)==="ArrowDown"||A.w(l.code)==="KeyS"){l.preventDefault()
n=p.gbt().length
if(n>0)p.c=B.d.O(p.c+1,n)
o=$.eT
if(o!=null){p=p.gbt().length
o.a.dN(1,p)}return}if(A.w(l.code)==="ArrowLeft"||A.w(l.code)==="KeyA"){l.preventDefault()
p.nc()
return}if(A.w(l.code)==="ArrowRight"||A.w(l.code)==="KeyD"){l.preventDefault()
p.nP()
return}if(A.w(l.code)==="KeyQ"){l.preventDefault()
m=p.gbQ()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y-m.w*0.2,m.f,m.r)
return}if(A.w(l.code)==="KeyE"){l.preventDefault()
m=p.gbQ()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y+m.w*0.2,m.f,m.r)
return}if(A.w(l.code)==="KeyR"){l.preventDefault()
if(A.T(l.shiftKey))p.oS()
else p.oU()
return}if(B.c.V(A.w(l.code),"Digit")||B.c.V(A.w(l.code),"Numpad")){o=A.w(l.code)
o=A.yX(o,"Digit","")
s=A.yX(o,"Numpad","")
r=A.dM(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.aC.j().y&&!A.T(l.repeat))if($.cC().nK(A.w(l.code))){l.preventDefault()
return}if(A.w(l.code)==="Escape"&&!A.T(l.repeat)){p=$.bf
if(p==null)A.hX($.cA.j())
else p.ah()
return}q=$.bf==null&&!p.a
if(!A.T(l.repeat)&&q)$.fI.j().ij(new A.lP(A.w(l.code),!0,1))
if(A.w(l.code)==="KeyP"&&!A.T(l.repeat)&&$.E8())$.fL=!$.fL
if((A.w(l.code)==="KeyJ"||A.w(l.code)==="Tab")&&!A.T(l.repeat)&&!$.aC.j().y){l.preventDefault()
A.k8($.jW.j())}if(A.w(l.code)==="KeyL"&&!A.T(l.repeat)&&!$.aC.j().y)A.k8($.fJ.j())
if(A.w(l.code)==="KeyH"&&!A.T(l.repeat)&&!$.aC.j().y)A.k8($.jV.j())
if(A.w(l.code)==="KeyO"&&!A.T(l.repeat)&&!$.aC.j().y)A.k8($.jX.j())
if(A.w(l.code)==="KeyK"&&!A.T(l.repeat)&&q)A.k7("saved")},
$S:1}
A.yA.prototype={
$1(a){var s=A.b(a)
if($.bf==null)$.fI.j().ij(new A.lP(A.w(s.code),!1,0))},
$S:1}
A.yB.prototype={
$1(a){return A.CC()},
$S:2}
A.yC.prototype={
$1(a){return A.CC()},
$S:2}
A.yD.prototype={
$1(a){return A.Io(A.b(a))},
$S:2}
A.yE.prototype={
$1(a){var s=A.b(a)
$.p.j().focus()
if($.aC.j().y){s.preventDefault()
A.In(s)
return}$.am.j().dH($.p.j())},
$S:1}
A.yF.prototype={
$1(a){var s,r,q,p=A.b(a),o=$.bT()
if(!o.a||$.eT==null)return
p.preventDefault()
s=o.gbt()
r=A.a1(p.deltaY)>0?1:-1
o=$.eT
o.toString
q=J.cE(s)
o.a.dN(A.i(r),q)},
$S:1}
A.xv.prototype={
$1(a){var s=A.w(A.b(a).message)
A.xH(s,null)},
$S:1}
A.xw.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.xH("unhandled rejection: "+A.y(s==null?A.w(a.type):s),null)},
$S:1}
A.xC.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:36}
A.xN.prototype={
$0(){this.a.className=""},
$S:14}
A.xV.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:44}
A.xz.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:26}
A.xJ.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.xE.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.xG.prototype={
$1(a){return t.o.a(a).w},
$S:17}
A.y_.prototype={
$1(a){return t.o.a(a).w},
$S:17}
A.xU.prototype={
$2(a,b){return A.ax(a)+t.cZ.a(b).d},
$S:202};(function aliases(){var s=J.ev.prototype
s.jK=s.t
s=A.r.prototype
s.jJ=s.dL
s=A.iN.prototype
s.jL=s.bZ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"Iv","Fx",45)
r(J.x.prototype,"gaF","p",8)
q(A,"IK","FU",39)
r(A.aS.prototype,"gaF","p",8)
r(A.hb.prototype,"gaF","p",8)
p(A.cr.prototype,"gmy","K",8)
o(A,"JI","GZ",18)
o(A,"JJ","H_",18)
o(A,"JK","H0",18)
q(A,"Dq","Jl",0)
r(A.cy.prototype,"gaF","p",8)
r(A.hC.prototype,"gaF","p",8)
o(A,"JV","I5",13)
p(A.ln.prototype,"gp_","p0",174)
var l
p(l=A.m7.prototype,"goW","oX",10)
p(l,"gp8","p9",10)
p(l,"gpa","pb",10)
p(l,"goY","oZ",10)
p(l,"gp6","p7",10)
q(A,"Dv","H4",204)
q(A,"Ly","zj",34)
p(A.da.prototype,"gaq","iR",67)
n(A.jN.prototype,"gnj","a_",0)
p(l=A.l8.prototype,"gl4","l5",2)
p(l,"gl6","l7",2)
p(l,"gla","lb",2)
p(l,"gle","lf",2)
p(l,"glg","lh",2)
p(l,"glc","ld",2)
p(l,"gl8","l9",2)
p(l,"gli","lj",2)
o(A,"Kj","CH",13)
o(A,"Kn","CG",13)
o(A,"Kb","Ft",205)
o(A,"Kc","Fv",206)
o(A,"Ks","Fn",207)
m(A,"KB",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["BZ",function(){return A.BZ(0,0,0)}],208,0)
p(A.iN.prototype,"glk","ll",2)
p(A.hv.prototype,"gkT","kU",147)
p(A.mk.prototype,"gnZ","o_",29)
o(A,"DE","IZ",209)
q(A,"DD","I2",0)
o(A,"Kf","HY",140)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.L,null)
q(A.L,[A.za,J.la,A.j1,J.eZ,A.r,A.ic,A.at,A.a3,A.tA,A.al,A.iD,A.U,A.io,A.ik,A.jg,A.aE,A.eB,A.bk,A.hj,A.h0,A.en,A.e_,A.dg,A.uM,A.rB,A.il,A.jE,A.ag,A.r0,A.bW,A.ac,A.cN,A.iy,A.mQ,A.mw,A.j8,A.n7,A.vz,A.wm,A.cS,A.mJ,A.na,A.wi,A.mx,A.ch,A.bn,A.mB,A.dZ,A.as,A.my,A.n5,A.jQ,A.jo,A.mP,A.fD,A.jr,A.jJ,A.nb,A.eo,A.kA,A.vS,A.wq,A.wn,A.f3,A.dy,A.mG,A.ly,A.j6,A.vA,A.A,A.P,A.az,A.n8,A.uv,A.bE,A.jL,A.uQ,A.n2,A.rA,A.mM,A.eL,A.ec,A.me,A.ri,A.lo,A.rt,A.rk,A.rn,A.fe,A.td,A.dO,A.lF,A.oS,A.oT,A.oV,A.oU,A.lE,A.ib,A.up,A.kV,A.kW,A.dP,A.l4,A.aU,A.kJ,A.lD,A.bO,A.bX,A.bc,A.jd,A.bY,A.kD,A.rC,A.lG,A.lR,A.bb,A.m5,A.iZ,A.aY,A.pz,A.db,A.c9,A.r8,A.r6,A.ln,A.ma,A.re,A.ia,A.rh,A.rj,A.hl,A.lL,A.c2,A.cd,A.uG,A.uE,A.dn,A.m7,A.ut,A.hA,A.cv,A.v8,A.dI,A.kR,A.kS,A.kX,A.py,A.hF,A.aw,A.bz,A.aO,A.Q,A.ie,A.lJ,A.bg,A.tf,A.ba,A.th,A.tg,A.mL,A.iY,A.lQ,A.vB,A.n9,A.wh,A.mW,A.mI,A.n_,A.mT,A.vN,A.bZ,A.bU,A.b3,A.pa,A.p9,A.fR,A.fg,A.pA,A.da,A.lM,A.fs,A.B,A.nZ,A.o1,A.o_,A.fU,A.fT,A.kU,A.pw,A.i9,A.mz,A.ks,A.mA,A.kF,A.mD,A.ii,A.mE,A.kK,A.mF,A.l3,A.mK,A.iF,A.mR,A.fW,A.kt,A.zk,A.iP,A.mX,A.lK,A.mY,A.fq,A.m_,A.n0,A.m0,A.n1,A.m2,A.n4,A.m1,A.n3,A.mf,A.nc,A.mo,A.ne,A.nd,A.j_,A.ms,A.nh,A.oQ,A.l0,A.l2,A.ir,A.j3,A.q,A.kG,A.hn,A.pW,A.eM,A.de,A.h7,A.vr,A.e2,A.jP,A.jO,A.ng,A.nf,A.ws,A.vn,A.vq,A.kI,A.km,A.hJ,A.jN,A.o7,A.nL,A.i6,A.o3,A.z5,A.of,A.o9,A.jh,A.fX,A.oN,A.px,A.l8,A.qy,A.qC,A.b8,A.qX,A.qU,A.pb,A.r2,A.bP,A.h,A.ve,A.cw,A.eF,A.vc,A.va,A.m3,A.mt,A.oG,A.kL,A.pk,A.h8,A.bH,A.lC,A.t4,A.hu,A.tt,A.fn,A.kZ,A.pK,A.pJ,A.ko,A.oA,A.ee,A.eg,A.ei,A.ef,A.eh,A.ku,A.lp,A.cV,A.mu,A.iv,A.qe,A.a8,A.kO,A.l5,A.qf,A.kP,A.dm,A.kQ,A.eK,A.er,A.lS,A.eJ,A.qc,A.po,A.un,A.qh,A.d8,A.cL,A.lb,A.qF,A.qD,A.qE,A.dL,A.qm,A.fx,A.cb,A.lj,A.fr,A.fm,A.qp,A.d7,A.qd,A.f9,A.qo,A.d6,A.qu,A.iO,A.iC,A.bA,A.v7,A.li,A.c6,A.qJ,A.i8,A.oD,A.iQ,A.rY,A.iR,A.lH,A.rS,A.rR,A.rT,A.rU,A.rV,A.rW,A.ho,A.rX,A.rZ,A.t1,A.t2,A.iB,A.tc,A.tp,A.lP,A.to,A.tq,A.uc,A.cu,A.ue,A.hw,A.pc,A.kT,A.vs,A.fy,A.ky,A.qw,A.qA,A.iV,A.iU,A.dd,A.ta,A.tb,A.t9,A.tr,A.df,A.ts,A.l_,A.fv,A.vk,A.hD,A.eE,A.v9,A.vi,A.fw,A.eG,A.mp,A.hE,A.vm,A.pH,A.kY,A.ru,A.d1,A.bC,A.rP,A.uy,A.fu,A.ft,A.jf,A.mn,A.fk,A.dl,A.uw,A.dQ,A.lX,A.lU,A.lV,A.lW,A.uB,A.kf,A.z4,A.eb,A.nV,A.o2,A.ed,A.oF,A.bo,A.oO,A.h2,A.dw,A.kz,A.iN,A.pf,A.pQ,A.pS,A.ha,A.dH,A.q8,A.pZ,A.q_,A.cm,A.q9,A.dc,A.fY,A.rE,A.dK,A.ex,A.ca,A.rJ,A.t8,A.bh,A.u6,A.ua,A.cF,A.nS,A.mk,A.v6,A.dX,A.bF,A.cg,A.c4,A.mm,A.kh,A.mj,A.hH,A.mV,A.mU,A.jx,A.vy])
q(J.la,[J.ld,J.ix,J.iz,J.he,J.hf,J.fa,J.eu])
q(J.iz,[J.ev,J.x,A.ew,A.iJ])
q(J.ev,[J.lB,J.eA,J.dJ])
r(J.lc,A.j1)
r(J.qI,J.x)
q(J.fa,[J.iw,J.le])
q(A.r,[A.eI,A.V,A.cO,A.I,A.im,A.dY,A.fC,A.mv,A.n6,A.bI])
q(A.eI,[A.f2,A.jR])
r(A.jm,A.f2)
r(A.jk,A.jR)
r(A.b9,A.jk)
q(A.at,[A.hg,A.dU,A.lf,A.m9,A.lT,A.mH,A.iA,A.kk,A.cG,A.jb,A.m8,A.hx,A.kx])
r(A.hB,A.a3)
r(A.dx,A.hB)
q(A.V,[A.a0,A.ae,A.ao,A.N,A.fB,A.jq])
q(A.a0,[A.j9,A.H,A.bM,A.mO])
r(A.dz,A.cO)
q(A.bk,[A.e0,A.e1,A.hG])
q(A.e0,[A.a5,A.fG,A.jy,A.jz])
q(A.e1,[A.aH,A.bl,A.jA,A.jB])
r(A.jC,A.hG)
r(A.hL,A.hj)
r(A.eC,A.hL)
r(A.ig,A.eC)
q(A.en,[A.kw,A.kv,A.m6,A.yf,A.yh,A.vv,A.vu,A.wx,A.pE,A.vL,A.vO,A.r3,A.vQ,A.yO,A.yP,A.y6,A.ub,A.rl,A.rq,A.rr,A.rp,A.xx,A.xR,A.xA,A.xP,A.te,A.uV,A.rb,A.rc,A.rd,A.rD,A.r9,A.ra,A.rf,A.y7,A.uH,A.uI,A.uJ,A.uL,A.ps,A.pq,A.pr,A.rG,A.rH,A.tm,A.tl,A.tk,A.tj,A.ti,A.tn,A.xi,A.xj,A.tv,A.tw,A.yW,A.yU,A.pB,A.r5,A.o0,A.y3,A.pX,A.pY,A.vo,A.vp,A.oh,A.ol,A.ok,A.oj,A.om,A.o8,A.nM,A.nN,A.nO,A.o5,A.o6,A.o4,A.qz,A.qV,A.vf,A.vg,A.vb,A.vd,A.pn,A.pL,A.pN,A.pO,A.pP,A.on,A.oo,A.op,A.oq,A.or,A.ot,A.ou,A.ov,A.ow,A.ox,A.oy,A.oz,A.os,A.y2,A.oB,A.oC,A.xB,A.xY,A.oR,A.pp,A.qg,A.yY,A.xo,A.xn,A.wu,A.xM,A.qv,A.uo,A.ql,A.qk,A.qi,A.xX,A.qq,A.qs,A.qt,A.xW,A.pj,A.r_,A.qQ,A.xL,A.t_,A.t0,A.t3,A.ud,A.ul,A.uf,A.ug,A.uj,A.uk,A.ui,A.uh,A.uu,A.pd,A.pe,A.vl,A.pG,A.rQ,A.ux,A.ty,A.tz,A.uC,A.uD,A.nK,A.nI,A.oc,A.od,A.oI,A.oM,A.oL,A.oK,A.p3,A.p2,A.p4,A.p5,A.p6,A.p1,A.oX,A.oY,A.p8,A.pg,A.ph,A.pi,A.pm,A.pR,A.pT,A.pU,A.q6,A.q2,A.q3,A.q4,A.q5,A.q1,A.q0,A.qb,A.qL,A.qM,A.qN,A.rK,A.rL,A.rM,A.u1,A.u2,A.tU,A.tV,A.tT,A.tW,A.tE,A.tX,A.tY,A.tZ,A.tS,A.tK,A.tL,A.tM,A.tN,A.tO,A.tP,A.tQ,A.tR,A.tJ,A.tF,A.tG,A.tH,A.tI,A.u0,A.u_,A.u8,A.us,A.nU,A.v4,A.v3,A.v5,A.v_,A.v2,A.uY,A.uX,A.ya,A.uW,A.nP,A.nQ,A.nR,A.w9,A.wa,A.w_,A.w7,A.wd,A.we,A.w5,A.w0,A.w2,A.w3,A.vZ,A.vV,A.vW,A.vX,A.wM,A.wN,A.wU,A.wV,A.wW,A.wP,A.wQ,A.wR,A.wH,A.wD,A.wE,A.xs,A.xt,A.yj,A.yk,A.yn,A.yx,A.yy,A.yz,A.yA,A.yB,A.yC,A.yD,A.yE,A.yF,A.xv,A.xw,A.xC,A.xV,A.xJ,A.xE,A.xG,A.y_])
q(A.kw,[A.oW,A.qR,A.yg,A.wy,A.y0,A.pF,A.vM,A.r1,A.r4,A.vT,A.uS,A.uR,A.rm,A.ro,A.rs,A.yZ,A.z_,A.yQ,A.r7,A.rg,A.uF,A.uK,A.yR,A.pt,A.tx,A.yV,A.yT,A.oi,A.oa,A.ob,A.qW,A.pM,A.xQ,A.qn,A.qZ,A.um,A.qB,A.pI,A.rw,A.rx,A.ry,A.uz,A.uA,A.oP,A.qO,A.qP,A.nT,A.v0,A.uZ,A.w8,A.w4,A.wc,A.w1,A.vY,A.vU,A.wL,A.wT,A.yp,A.yq,A.xz,A.xU])
q(A.h0,[A.a4,A.d4])
q(A.dg,[A.h1,A.jD,A.jK])
q(A.h1,[A.aS,A.hb])
q(A.kv,[A.t5,A.vw,A.vx,A.wj,A.pC,A.vC,A.vH,A.vG,A.vE,A.vD,A.vK,A.vJ,A.vI,A.wg,A.xK,A.wp,A.wo,A.xh,A.xa,A.xb,A.xg,A.x5,A.x7,A.x6,A.xf,A.x3,A.x4,A.xc,A.xd,A.xe,A.x9,A.x8,A.xl,A.xm,A.y4,A.qj,A.qr,A.xp,A.nJ,A.nX,A.nW,A.oe,A.p_,A.p0,A.oZ,A.pV,A.q7,A.rO,A.tC,A.tD,A.u3,A.u4,A.u5,A.u9,A.ur,A.v1,A.w6,A.wb,A.wX,A.wY,A.wZ,A.x_,A.wO,A.wS,A.wI,A.wJ,A.wK,A.wF,A.wG,A.xu,A.yl,A.yw,A.yG,A.yH,A.yI,A.yJ,A.yK,A.yL,A.yM,A.ym,A.yo,A.yr,A.ys,A.yt,A.yu,A.yv,A.xN])
r(A.iL,A.dU)
q(A.m6,[A.m4,A.fV])
q(A.ag,[A.cr,A.jn,A.mN])
r(A.fb,A.cr)
r(A.hm,A.ew)
q(A.iJ,[A.lq,A.bq])
q(A.bq,[A.jt,A.jv])
r(A.ju,A.jt)
r(A.iH,A.ju)
r(A.jw,A.jv)
r(A.iI,A.jw)
q(A.iH,[A.iG,A.lr])
q(A.iI,[A.ls,A.lt,A.lu,A.lv,A.lw,A.ff,A.iK])
r(A.hK,A.mH)
r(A.ji,A.mB)
r(A.mZ,A.jQ)
r(A.jp,A.jn)
r(A.cy,A.jD)
r(A.hC,A.jK)
q(A.eo,[A.kM,A.kp,A.lg])
q(A.kM,[A.ki,A.md])
q(A.kA,[A.wk,A.oE,A.qT,A.qS,A.uU,A.uT])
r(A.kj,A.wk)
r(A.lh,A.iA)
r(A.vR,A.vS)
q(A.cG,[A.hq,A.l7])
r(A.mC,A.jL)
q(A.mG,[A.kH,A.fi,A.h4,A.h_,A.f8,A.fS,A.iE,A.cT,A.ht,A.h6,A.kr,A.id,A.h5,A.fl,A.fd,A.cR,A.dT,A.bi,A.f5,A.cq,A.j0,A.d5,A.hs,A.j5,A.h9,A.i7,A.jj,A.jl,A.l1,A.ip,A.is,A.it,A.f7,A.iq,A.fp,A.dj,A.fZ,A.hc,A.hI,A.kq,A.f1,A.kB,A.kE,A.bs,A.kn,A.co,A.dB,A.f4,A.dA,A.eq,A.ep,A.es,A.lA,A.lO,A.hr,A.c0,A.j4,A.dh,A.c1,A.bD,A.l9,A.fz,A.ct,A.ez,A.eH,A.f_,A.d_,A.cH,A.d0,A.dv,A.du,A.ek,A.el,A.ej,A.f0,A.dE,A.d2,A.d3,A.dF,A.dD,A.dG,A.cp,A.dC,A.cJ,A.kg,A.bB,A.cs,A.ey,A.cQ,A.c_,A.bN,A.j2,A.bV,A.ce,A.cf,A.eD,A.dk])
q(A.dP,[A.bL,A.bt,A.c8,A.lz,A.cK])
r(A.tu,A.n_)
r(A.mq,A.nf)
r(A.js,A.dm)
q(A.iN,[A.ih,A.p7,A.pl,A.iu,A.qa,A.qK,A.rN,A.tB,A.hv,A.uq])
q(A.v6,[A.ml,A.mS,A.bv,A.mi,A.mg,A.je,A.mh])
s(A.hB,A.eB)
s(A.jR,A.a3)
s(A.jt,A.a3)
s(A.ju,A.aE)
s(A.jv,A.a3)
s(A.jw,A.aE)
s(A.hL,A.jJ)
s(A.jK,A.nb)
s(A.n_,A.vN)
s(A.nf,A.ws)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",z:"double",by:"num",e:"String",l:"bool",az:"Null",J:"List",L:"Object",Y:"Map",aj:"JSObject"},mangledNames:{},types:["~()","az(L?)","~(L?)","l(e)","l(z)","cI()","l(@)","0&()","l(L?)","l(cu)","cI(bt?)","l(aw)","~(l)","@(@)","az()","l(fk)","k(c6,c6)","l(fx)","~(~())","az(@)","~(@)","e(ec)","l(k)","l(bc)","l(Q)","l(c6)","k(P<e,e>,P<e,e>)","e(e)","l(bh)","l(c4)","~(aj)","l(cL)","l(c3?)","~(L?,L?)","l()","~(e,z)","l(cp)","~(e,e)","l(cJ)","k()","l(P<e,J<e>>)","l(d_)","k(b8)","@(e)","l(bC)","k(@,@)","l(c0)","P<e,e>(@,@)","l(eK)","e(eg)","e(ee)","e(L?)","e(cd)","@()","l(fU)","ib()","z()","fW()","cI?()","l(P<e,aY>)","aY(P<e,aY>)","aY(aY,aY)","k(b3<bZ>,b3<bZ>)","cc(b3<bZ>)","k(b3<bU>,b3<bU>)","cc(b3<bU>)","fg(z,z,z,z)","B(B)","J<bO>()","~(fq)","bO?()","Y<e,e>(Y<e,e>,e)","z(z,hJ)","aT<az>(P<e,e>)","l(J<e>)","k(e,e)","k(cb,cb)","0&(e,k?)","+effectiveScore,light,score(z,b8,z)(b8)","k(+effectiveScore,light,score(z,b8,z),+effectiveScore,light,score(z,b8,z))","l(co)","L?(L?)","e(k)","az(~())","l(fm)","ee(L?)","eg(L?)","ef(L?)","eh(L?)","cI(e{fallback:e?})","j_(bL)","cK(k,k,e?)","e(ef)","e(eh)","e(ei)","k(k,c3)","eq(e)","ei(L?)","l(fr)","e(k,a8,a8,a8)","k(dm,dm)","~(@,@)","l(eJ)","k(k)","l(cb)","fq()","l(d8)","az(L,di)","k(dL,dL)","l(d7)","P<e,e>(e,@)","e?(e)","aT<c3>(e)","@(@,e)","k(cu,cu)","k(ad,ad)","z(z)","l(c1)","l(bD)","fv()","z(e)","e(aw)","Y<e,@>(fe)","k(P<e,d1>,P<e,d1>)","k(+influence,source(z,cv),+influence,source(z,cv))","P<k,@>(k,fu)","P<k,@>(k,ft)","l(dQ)","k(k,+(bt,dn))","l(P<@,@>)","P<e,e>(P<@,@>)","l?(L?)","bt(k,k,e?)","e()","0^(r<0^>,L?)<L?>","z(z,e)","~(L,di)","J<e>(J<e>)","~(z)","k(c2,c2)","~(k)","az(aj)","0^(e,r<0^>)<D>","l(cd)","Y<e,L?>(dK)","e(bB)","l(bB)","l(bN)","k(k,+(bL,bY))","l(dE)","l(d2)","l(d3)","l(dF)","l(dD)","l(dG)","l(dC)","bL(k,k,e?)","l(cH)","l(d0)","l(dv)","l(du)","J<aj>()","e(cF)","k(cF,cF)","az(@,di)","k(c4,c4)","J<dl>()","l(dl)","l(P<e,e>)","k(cg,cg)","Y<e,@>(c4)","l(cf)","l(ce)","l(bV)","bX(c8)","c8(k)","hl(ho)","l(Y<e,L>)","aT<e>(e)","aT<c3>(e,e)","hA()","~(e,r<e>)","z(z,dd)","c2(P<e,bt>)","k(cd,cd)","k(db,db)","k(c9,c9)","e(c9)","k(P<k,e>,P<k,e>)","l(c9)","e(P<k,e>)","~(k,@)","~(bN)","~(ed)","~(ha)","~(eb)","~(dH)","~(h2)","l(hu)","~(c_)","~(k,e)","~(c1,bD)","z(z,eE)","k(+influence,light(z,bO),+influence,light(z,bO))","hF()","d8(L?)","cL(L?)","d7(L?)","hE({materialDissolution01:z,snowDepthM:z,waterFilmDepthM:z})","~(by)","c8(k,k,e?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fG&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jy&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.jz&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aH&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.bl&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jA&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.jB&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jC&&A.Kh(a,b.a)}}
A.Hm(v.typeUniverse,JSON.parse('{"dJ":"ev","lB":"ev","eA":"ev","KN":"ew","x":{"J":["1"],"V":["1"],"aj":[],"r":["1"]},"ld":{"l":[],"an":[]},"ix":{"az":[],"an":[]},"iz":{"aj":[]},"ev":{"aj":[]},"lc":{"j1":[]},"qI":{"x":["1"],"J":["1"],"V":["1"],"aj":[],"r":["1"]},"eZ":{"ai":["1"]},"fa":{"z":[],"by":[],"bp":["by"]},"iw":{"z":[],"k":[],"by":[],"bp":["by"],"an":[]},"le":{"z":[],"by":[],"bp":["by"],"an":[]},"eu":{"e":[],"bp":["e"],"rI":[],"an":[]},"eI":{"r":["2"]},"ic":{"ai":["2"]},"f2":{"eI":["1","2"],"r":["2"],"r.E":"2"},"jm":{"f2":["1","2"],"eI":["1","2"],"V":["2"],"r":["2"],"r.E":"2"},"jk":{"a3":["2"],"J":["2"],"eI":["1","2"],"V":["2"],"r":["2"]},"b9":{"jk":["1","2"],"a3":["2"],"J":["2"],"eI":["1","2"],"V":["2"],"r":["2"],"r.E":"2","a3.E":"2"},"hg":{"at":[]},"dx":{"a3":["k"],"eB":["k"],"J":["k"],"V":["k"],"r":["k"],"a3.E":"k","eB.E":"k"},"V":{"r":["1"]},"a0":{"V":["1"],"r":["1"]},"j9":{"a0":["1"],"V":["1"],"r":["1"],"r.E":"1","a0.E":"1"},"al":{"ai":["1"]},"cO":{"r":["2"],"r.E":"2"},"dz":{"cO":["1","2"],"V":["2"],"r":["2"],"r.E":"2"},"iD":{"ai":["2"]},"H":{"a0":["2"],"V":["2"],"r":["2"],"r.E":"2","a0.E":"2"},"I":{"r":["1"],"r.E":"1"},"U":{"ai":["1"]},"im":{"r":["2"],"r.E":"2"},"io":{"ai":["2"]},"ik":{"ai":["1"]},"dY":{"r":["1"],"r.E":"1"},"jg":{"ai":["1"]},"hB":{"a3":["1"],"eB":["1"],"J":["1"],"V":["1"],"r":["1"]},"bM":{"a0":["1"],"V":["1"],"r":["1"],"r.E":"1","a0.E":"1"},"a5":{"e0":[],"bk":[]},"fG":{"e0":[],"bk":[]},"jy":{"e0":[],"bk":[]},"jz":{"e0":[],"bk":[]},"aH":{"e1":[],"bk":[]},"bl":{"e1":[],"bk":[]},"jA":{"e1":[],"bk":[]},"jB":{"e1":[],"bk":[]},"jC":{"hG":[],"bk":[]},"ig":{"eC":["1","2"],"hL":["1","2"],"hj":["1","2"],"jJ":["1","2"],"Y":["1","2"]},"h0":{"Y":["1","2"]},"a4":{"h0":["1","2"],"Y":["1","2"]},"fC":{"r":["1"],"r.E":"1"},"e_":{"ai":["1"]},"d4":{"h0":["1","2"],"Y":["1","2"]},"h1":{"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"aS":{"h1":["1"],"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"hb":{"h1":["1"],"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"iL":{"dU":[],"at":[]},"lf":{"at":[]},"m9":{"at":[]},"jE":{"di":[]},"en":{"f6":[]},"kv":{"f6":[]},"kw":{"f6":[]},"m6":{"f6":[]},"m4":{"f6":[]},"fV":{"f6":[]},"lT":{"at":[]},"cr":{"ag":["1","2"],"zc":["1","2"],"Y":["1","2"],"ag.K":"1","ag.V":"2"},"ae":{"V":["1"],"r":["1"],"r.E":"1"},"bW":{"ai":["1"]},"ao":{"V":["1"],"r":["1"],"r.E":"1"},"ac":{"ai":["1"]},"N":{"V":["P<1,2>"],"r":["P<1,2>"],"r.E":"P<1,2>"},"cN":{"ai":["P<1,2>"]},"fb":{"cr":["1","2"],"ag":["1","2"],"zc":["1","2"],"Y":["1","2"],"ag.K":"1","ag.V":"2"},"e0":{"bk":[]},"e1":{"bk":[]},"hG":{"bk":[]},"iy":{"G4":[],"rI":[]},"mQ":{"iW":[],"hk":[]},"mv":{"r":["iW"],"r.E":"iW"},"mw":{"ai":["iW"]},"j8":{"hk":[]},"n6":{"r":["hk"],"r.E":"hk"},"n7":{"ai":["hk"]},"hm":{"ew":[],"aj":[],"an":[]},"ff":{"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"ew":{"aj":[],"an":[]},"iJ":{"aj":[]},"lq":{"aj":[],"an":[]},"bq":{"c7":["1"],"aj":[]},"iH":{"a3":["z"],"bq":["z"],"J":["z"],"c7":["z"],"V":["z"],"aj":[],"r":["z"],"aE":["z"]},"iI":{"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"]},"iG":{"pu":[],"a3":["z"],"bq":["z"],"J":["z"],"c7":["z"],"V":["z"],"aj":[],"r":["z"],"aE":["z"],"an":[],"a3.E":"z","aE.E":"z"},"lr":{"pv":[],"a3":["z"],"bq":["z"],"J":["z"],"c7":["z"],"V":["z"],"aj":[],"r":["z"],"aE":["z"],"an":[],"a3.E":"z","aE.E":"z"},"ls":{"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lt":{"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lu":{"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lv":{"uO":[],"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"lw":{"uP":[],"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"iK":{"c3":[],"a3":["k"],"bq":["k"],"J":["k"],"c7":["k"],"V":["k"],"aj":[],"r":["k"],"aE":["k"],"an":[],"a3.E":"k","aE.E":"k"},"mH":{"at":[]},"hK":{"dU":[],"at":[]},"ch":{"ai":["1"]},"bI":{"r":["1"],"r.E":"1"},"bn":{"at":[]},"ji":{"mB":["1"]},"as":{"aT":["1"]},"jQ":{"C7":[]},"mZ":{"jQ":[],"C7":[]},"jn":{"ag":["1","2"],"Y":["1","2"]},"jp":{"jn":["1","2"],"ag":["1","2"],"Y":["1","2"],"ag.K":"1","ag.V":"2"},"fB":{"V":["1"],"r":["1"],"r.E":"1"},"jo":{"ai":["1"]},"cy":{"dg":["1"],"Be":["1"],"dR":["1"],"V":["1"],"r":["1"]},"fD":{"ai":["1"]},"a3":{"J":["1"],"V":["1"],"r":["1"]},"ag":{"Y":["1","2"]},"jq":{"V":["2"],"r":["2"],"r.E":"2"},"jr":{"ai":["2"]},"hj":{"Y":["1","2"]},"eC":{"hL":["1","2"],"hj":["1","2"],"jJ":["1","2"],"Y":["1","2"]},"dg":{"dR":["1"],"V":["1"],"r":["1"]},"jD":{"dg":["1"],"dR":["1"],"V":["1"],"r":["1"]},"hC":{"dg":["1"],"nb":["1"],"dR":["1"],"V":["1"],"r":["1"]},"mN":{"ag":["e","@"],"Y":["e","@"],"ag.K":"e","ag.V":"@"},"mO":{"a0":["e"],"V":["e"],"r":["e"],"r.E":"e","a0.E":"e"},"ki":{"eo":["e","J<k>"]},"kp":{"eo":["J<k>","e"]},"kM":{"eo":["e","J<k>"]},"iA":{"at":[]},"lh":{"at":[]},"lg":{"eo":["L?","e"]},"md":{"eo":["e","J<k>"]},"f3":{"bp":["f3"]},"z":{"by":[],"bp":["by"]},"dy":{"bp":["dy"]},"k":{"by":[],"bp":["by"]},"J":{"V":["1"],"r":["1"]},"by":{"bp":["by"]},"iW":{"hk":[]},"dR":{"V":["1"],"r":["1"]},"e":{"bp":["e"],"rI":[]},"mG":{"D":[]},"kk":{"at":[]},"dU":{"at":[]},"cG":{"at":[]},"hq":{"at":[]},"l7":{"at":[]},"jb":{"at":[]},"m8":{"at":[]},"hx":{"at":[]},"kx":{"at":[]},"ly":{"at":[]},"j6":{"at":[]},"n8":{"di":[]},"bE":{"Gr":[]},"jL":{"mb":[]},"n2":{"mb":[]},"mC":{"mb":[]},"mM":{"zl":[]},"eL":{"zl":[]},"kH":{"D":[]},"fi":{"D":[]},"h4":{"D":[]},"h_":{"D":[]},"bL":{"dP":[]},"bt":{"dP":[]},"c8":{"dP":[]},"cK":{"dP":[]},"lz":{"dP":[]},"f8":{"D":[]},"fS":{"D":[]},"iE":{"D":[]},"cT":{"D":[]},"kD":{"Gd":[]},"ht":{"D":[]},"h6":{"D":[]},"kr":{"D":[]},"id":{"D":[]},"h5":{"D":[]},"fl":{"D":[]},"fd":{"D":[]},"cR":{"D":[]},"dT":{"D":[]},"bi":{"D":[]},"f5":{"D":[]},"kX":{"G5":[]},"cq":{"D":[]},"j0":{"D":[]},"d5":{"D":[]},"hs":{"D":[]},"iY":{"G8":[]},"mL":{"cc":[]},"lQ":{"Ga":[]},"n9":{"cc":[]},"mW":{"G7":[]},"mI":{"Fc":[]},"j5":{"D":[]},"bZ":{"bp":["bZ"]},"bU":{"bp":["bU"]},"h9":{"D":[]},"i7":{"D":[]},"jj":{"D":[]},"i9":{"ap":[]},"mz":{"ad":[]},"ks":{"ap":[]},"mA":{"ad":[]},"kF":{"ap":[]},"mD":{"ad":[]},"jl":{"D":[]},"ii":{"ap":[]},"mE":{"ad":[]},"kK":{"ap":[]},"mF":{"ad":[]},"l3":{"ap":[]},"mK":{"ad":[]},"iF":{"ap":[]},"mR":{"ad":[]},"kt":{"G6":[]},"iP":{"ap":[]},"mX":{"ad":[]},"lK":{"ap":[]},"mY":{"ad":[]},"m_":{"ap":[]},"n0":{"ad":[]},"m0":{"ap":[]},"n1":{"ad":[]},"m2":{"ap":[]},"n4":{"ad":[]},"m1":{"ap":[]},"n3":{"ad":[]},"mf":{"ap":[]},"nc":{"ad":[]},"mo":{"ap":[]},"ne":{"ad":[]},"nd":{"ad":[]},"ms":{"ap":[]},"nh":{"ad":[]},"l1":{"D":[]},"ip":{"D":[]},"is":{"D":[]},"it":{"D":[]},"f7":{"D":[]},"iq":{"D":[]},"fp":{"D":[]},"dj":{"D":[]},"fZ":{"D":[]},"kG":{"EX":[]},"hc":{"D":[]},"hI":{"D":[]},"bs":{"D":[]},"kq":{"D":[]},"f1":{"D":[]},"kB":{"D":[]},"kE":{"D":[]},"e2":{"cI":[]},"mq":{"Fj":[]},"kn":{"D":[]},"co":{"D":[]},"dB":{"D":[]},"js":{"dm":[]},"f4":{"D":[]},"dA":{"D":[]},"eq":{"D":[]},"ep":{"D":[]},"es":{"D":[]},"lA":{"D":[]},"lO":{"D":[]},"hr":{"D":[]},"c0":{"D":[]},"dh":{"D":[]},"j4":{"D":[]},"c1":{"D":[]},"bD":{"D":[]},"l9":{"D":[]},"fz":{"D":[]},"ct":{"D":[]},"ez":{"D":[]},"eH":{"D":[]},"f_":{"D":[]},"d_":{"D":[]},"cH":{"D":[]},"d0":{"D":[]},"dv":{"D":[]},"du":{"D":[]},"ek":{"D":[]},"el":{"D":[]},"f0":{"D":[]},"ej":{"D":[]},"dE":{"D":[]},"d2":{"D":[]},"d3":{"D":[]},"dF":{"D":[]},"dD":{"D":[]},"dG":{"D":[]},"cp":{"D":[]},"dC":{"D":[]},"cJ":{"D":[]},"kg":{"D":[]},"bB":{"D":[]},"cs":{"D":[]},"ey":{"D":[]},"cQ":{"D":[]},"c_":{"D":[]},"bN":{"D":[]},"j2":{"D":[]},"bV":{"D":[]},"ce":{"D":[]},"cf":{"D":[]},"eD":{"D":[]},"dk":{"D":[]},"mV":{"By":[]},"Fs":{"J":["k"],"V":["k"],"r":["k"]},"c3":{"J":["k"],"V":["k"],"r":["k"]},"Gu":{"J":["k"],"V":["k"],"r":["k"]},"Fq":{"J":["k"],"V":["k"],"r":["k"]},"uO":{"J":["k"],"V":["k"],"r":["k"]},"Fr":{"J":["k"],"V":["k"],"r":["k"]},"uP":{"J":["k"],"V":["k"],"r":["k"]},"pu":{"J":["z"],"V":["z"],"r":["z"]},"pv":{"J":["z"],"V":["z"],"r":["z"]}}'))
A.Hl(v.typeUniverse,JSON.parse('{"hB":1,"jR":2,"bq":1,"jD":1,"jK":1,"kA":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",t:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nuniform vec3 uClearColor;\nuniform vec3 uSkyHorizon;\nuniform vec3 uSkyZenith;\nuniform vec3 uSkyGround;\nuniform float uSkyEnabled;\nuniform float uSkyHorizonGlow;\nuniform float uSkyStarDensity;\nuniform sampler2D uSkyTexture;\nuniform float uSkyTextureEnabled;\nuniform float uSkyRotation;\nuniform float uSkyExposure;\nuniform float uSkyTextureSrgb;\nuniform mat4 uInverseProjection;\nuniform mat4 uInverseView;\nuniform vec3 uCameraPosition;\nuniform float uCloudCoverage;\nuniform float uCloudDensity;\nuniform float uCloudBaseHeight;\nuniform float uCloudThickness;\nuniform float uCloudScale;\nuniform vec2 uCloudWind;\nuniform float uCloudPhase;\nuniform float uCloudDetail;\nuniform float uCloudSilverLining;\nuniform float uCloudSampleCount;\nuniform vec3 uCloudLightDirection;\nuniform vec3 uCloudLightColor;\nuniform float uCloudLightIntensity;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvec3 skyBackground(vec2 uv){\n  // A deliberately cheap, high-quality fallback sky: three atmospheric bands\n  // provide depth at every camera angle, while the tiny deterministic star\n  // field and horizon glow keep the clear background from reading as a flat\n  // color. It is an environment layer, not a game/weather simulation.\n  float lower=smoothstep(0.0,0.48,uv.y);\n  float upper=smoothstep(0.42,1.0,uv.y);\n  vec3 color=mix(uSkyGround,uSkyHorizon,lower);\n  color=mix(color,uSkyZenith,upper);\n  float horizonGlow=exp(-pow((uv.y-0.48)*7.0,2.0));\n  color+=uSkyHorizon*horizonGlow*clamp(uSkyHorizonGlow,0.,1.);\n  float starMask=smoothstep(0.62,0.92,uv.y);\n  float stars=step(1.0-clamp(uSkyStarDensity,0.,.1),hash(floor(uv*vec2(180.0,100.0))))*starMask;\n  color+=vec3(0.16,0.19,0.24)*stars;\n  return max(color,vec3(0.0));\n}\n\nfloat hash3(vec3 p){\n  return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);\n}\n\nfloat valueNoise(vec3 p){\n  vec3 i=floor(p);\n  vec3 f=fract(p);\n  f=f*f*(3.0-2.0*f);\n  float n000=hash3(i+vec3(0,0,0));\n  float n100=hash3(i+vec3(1,0,0));\n  float n010=hash3(i+vec3(0,1,0));\n  float n110=hash3(i+vec3(1,1,0));\n  float n001=hash3(i+vec3(0,0,1));\n  float n101=hash3(i+vec3(1,0,1));\n  float n011=hash3(i+vec3(0,1,1));\n  float n111=hash3(i+vec3(1,1,1));\n  float x00=mix(n000,n100,f.x);\n  float x10=mix(n010,n110,f.x);\n  float x01=mix(n001,n101,f.x);\n  float x11=mix(n011,n111,f.x);\n  return mix(mix(x00,x10,f.y),mix(x01,x11,f.y),f.z);\n}\n\nfloat cloudNoise(vec3 p){\n  float value=0.0;\n  float amplitude=0.5;\n  for(int octave=0;octave<4;octave++){\n    value+=valueNoise(p)*amplitude;\n    p=p*2.03+vec3(17.3,11.7,7.1);\n    amplitude*=0.5;\n  }\n  return value;\n}\n\nfloat cloudDensityAt(vec3 position){\n  float height01=clamp(\n    (position.y-uCloudBaseHeight)/max(uCloudThickness,0.001),\n    0.0,1.0\n  );\n  float vertical=smoothstep(0.0,0.12,height01)*\n    (1.0-smoothstep(0.72,1.0,height01));\n  vec3 q=position*max(uCloudScale,0.00001)+\n    vec3(uCloudWind.x*uCloudPhase,0.0,uCloudWind.y*uCloudPhase);\n  float macro=cloudNoise(q*0.82);\n  float detail=cloudNoise(q*2.7+vec3(23.0,5.0,41.0));\n  float shape=mix(macro,macro*0.68+detail*0.32,clamp(uCloudDetail,0.,1.));\n  float threshold=1.0-clamp(uCloudCoverage,0.,1.);\n  float body=smoothstep(threshold,threshold+0.26,shape);\n  return body*vertical*clamp(uCloudDensity,0.,1.);\n}\n\nvec4 volumetricClouds(vec3 worldDirection){\n  if(uCloudCoverage<=0.0001 || uCloudDensity<=0.0001 || worldDirection.y<=0.001){\n    return vec4(0.0);\n  }\n  float directionY=max(worldDirection.y,0.001);\n  float startT=(uCloudBaseHeight-uCameraPosition.y)/directionY;\n  float endT=(uCloudBaseHeight+uCloudThickness-uCameraPosition.y)/directionY;\n  startT=max(startT,0.0);\n  endT=max(endT,0.0);\n  if(endT<=startT) return vec4(0.0);\n  int sampleCount=int(clamp(uCloudSampleCount,4.,24.));\n  float stepLength=(endT-startT)/float(sampleCount);\n  float jitter=(hash(gl_FragCoord.xy+vec2(uCloudPhase*0.013))-0.5)*stepLength;\n  vec3 sunDirection=normalize(-uCloudLightDirection);\n  float transmittance=1.0;\n  vec3 inScatter=vec3(0.0);\n  for(int i=0;i<24;i++){\n    if(i>=sampleCount) break;\n    float t=startT+(float(i)+0.5)*stepLength+jitter;\n    vec3 position=uCameraPosition+worldDirection*t;\n    float density=cloudDensityAt(position);\n    float opticalDepth=density*stepLength*0.0035;\n    float segmentAlpha=1.0-exp(-opticalDepth);\n    float towardLight=cloudDensityAt(position+sunDirection*90.0);\n    float lightTransmittance=exp(-towardLight*0.025);\n    float phase=0.72+0.28*pow(max(dot(-worldDirection,sunDirection),0.0),2.0);\n    vec3 ambient=uSkyHorizon*0.32;\n    vec3 direct=uCloudLightColor*\n      (0.14+0.86*clamp(uCloudLightIntensity,0.,1.5))*phase;\n    float edge=pow(1.0-clamp(density,0.,1.),3.0)*uCloudSilverLining*0.22;\n    vec3 sampleLight=(ambient+direct)*lightTransmittance+vec3(edge);\n    inScatter+=transmittance*segmentAlpha*sampleLight;\n    transmittance*=1.0-segmentAlpha;\n    if(transmittance<0.01) break;\n  }\n  return vec4(inScatter,1.0-transmittance);\n}\n\nvec3 srgbToLinear(vec3 color){\n  vec3 low=color/12.92;\n  vec3 high=pow((color+0.055)/1.055,vec3(2.4));\n  return mix(low,high,step(vec3(0.04045),color));\n}\n\nvec3 worldDirectionForUv(vec2 uv){\n  vec2 ndc=uv*2.0-1.0;\n  vec4 viewPoint=uInverseProjection*vec4(ndc,1.0,1.0);\n  return normalize(viewPoint.xyz/viewPoint.w);\n}\n\nvec3 equirectangularSky(vec2 uv){\n  vec3 worldDirection=normalize((uInverseView*vec4(worldDirectionForUv(uv),0.0)).xyz);\n  float longitude=atan(worldDirection.z,worldDirection.x)+uSkyRotation;\n  float latitude=asin(clamp(worldDirection.y,-1.0,1.0));\n  vec2 sampleUv=vec2(\n    fract(longitude/(2.0*3.14159265359)+0.5),\n    0.5-latitude/3.14159265359\n  );\n  vec3 encoded=max(texture(uSkyTexture,sampleUv).rgb,vec3(0.0));\n  vec3 linear=mix(encoded,srgbToLinear(encoded),clamp(uSkyTextureSrgb,0.,1.));\n  return linear*max(uSkyExposure,0.0);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // The world pass clears untouched pixels to uClearColor. Replace only that\n  // exact background, so the sky is always active without covering geometry.\n  if(uSkyEnabled>0.5 && distance(source.rgb,uClearColor)<0.004){\n    vec3 viewDirection=worldDirectionForUv(vUv);\n    vec3 worldDirection=normalize((uInverseView*vec4(viewDirection,0.0)).xyz);\n    source.rgb=uSkyTextureEnabled>0.5\n      ? equirectangularSky(vUv)\n      : skyBackground(vUv);\n    vec4 clouds=volumetricClouds(worldDirection);\n    source.rgb=source.rgb* (1.0-clouds.a)+clouds.rgb;\n  }\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a2
return{mq:s("d_"),dx:s("i6"),bC:s("cF"),zU:s("ec"),v:s("bn"),iF:s("km"),ul:s("du"),EL:s("d0"),xs:s("cH"),gc:s("dv"),t3:s("ko"),mD:s("ee"),lT:s("ef"),bJ:s("eg"),gI:s("eh"),ya:s("ei"),z3:s("bU"),Bu:s("fW"),ml:s("ia"),je:s("b8"),rO:s("fY"),sU:s("dx"),hO:s("bp<@>"),CH:s("ie"),w:s("a4<e,e>"),I:s("a4<e,k>"),M:s("aS<e>"),f7:s("f3"),fP:s("bV"),yb:s("dy"),he:s("V<@>"),yW:s("co"),g:s("c6"),Ct:s("D"),yt:s("at"),hl:s("a8"),B:s("pu"),cE:s("pv"),pH:s("aY"),Fr:s("d1"),BO:s("f6"),ls:s("aT<az>"),xJ:s("aT<e>(e)"),zL:s("aT<c3>(e)"),tX:s("aT<c3>(e,e)"),vS:s("dC"),aJ:s("dD"),x:s("cp"),bK:s("dE"),gm:s("dF"),dn:s("d2"),mx:s("dG"),j_:s("d3"),EJ:s("d4<c_,e>"),_:s("cI"),Eb:s("cJ"),qX:s("es"),mF:s("d7"),iO:s("cK"),oW:s("d8"),fl:s("cL"),FA:s("r<ie>"),CB:s("r<db>"),xw:s("r<dd>"),Eh:s("r<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),yT:s("r<e>"),x6:s("r<c2>"),A1:s("r<eG>"),oJ:s("r<z>"),tY:s("r<@>"),iC:s("r<k>"),Fg:s("x<cF>"),t9:s("x<ec>"),AO:s("x<ia>"),jC:s("x<b8>"),km:s("x<fY>"),sa:s("x<cm>"),ns:s("x<kL>"),U:s("x<c6>"),uH:s("x<kP>"),Dl:s("x<a8>"),xn:s("x<kT>"),A5:s("x<kU>"),iJ:s("x<aT<~>>"),pC:s("x<kZ>"),C1:s("x<cI>"),ka:s("x<bz>"),Fm:s("x<f9>"),op:s("x<d6>"),hr:s("x<dI>"),s3:s("x<cK>"),W:s("x<aj>"),Bv:s("x<li>"),yH:s("x<lj>"),Bq:s("x<P<e,e>>"),rq:s("x<Y<e,L>>"),A7:s("x<Y<e,e>>"),cs:s("x<Y<e,@>>"),bk:s("x<Y<e,L?>>"),a6:s("x<db>"),p0:s("x<c9>"),d:s("x<bL>"),w4:s("x<fe>"),pq:s("x<aw>"),bA:s("x<dK>"),xz:s("x<bC>"),s0:s("x<fg>"),hc:s("x<dc>"),ea:s("x<dL>"),Fk:s("x<lD>"),qP:s("x<cb>"),d8:s("x<iQ>"),Fa:s("x<iR>"),fH:s("x<iU>"),F7:s("x<dd>"),vN:s("x<iV>"),kv:s("x<fk>"),nR:s("x<+(e,J<cb>)>"),kd:s("x<+(e,e)>"),c2:s("x<+(e,B)>"),rh:s("x<+influence,light(z,bO)>"),z4:s("x<+influence,source(z,cv)>"),wt:s("x<+(k,e)>"),ff:s("x<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)>"),e_:s("x<ap>"),u:s("x<ad>"),Ft:s("x<iY>"),C:s("x<Q>"),h1:s("x<bb>"),s2:s("x<cc>"),eY:s("x<fm>"),xB:s("x<df>"),rn:s("x<lU>"),gg:s("x<lV>"),D:s("x<dQ>"),yv:s("x<lW>"),wM:s("x<lX>"),hT:s("x<cu>"),El:s("x<hw>"),AM:s("x<b3<bU>>"),fs:s("x<b3<bZ>>"),cv:s("x<bO>"),DZ:s("x<fr>"),s:s("x<e>"),r8:s("x<c2>"),fa:s("x<cd>"),E7:s("x<hA>"),k:s("x<B>"),fi:s("x<h>"),v5:s("x<bc>"),ld:s("x<jf>"),Dc:s("x<dX>"),Fi:s("x<cg>"),jV:s("x<dl>"),xL:s("x<cv>"),su:s("x<eE>"),wb:s("x<eF>"),eQ:s("x<cw>"),uI:s("x<eG>"),yo:s("x<fv>"),nm:s("x<fx>"),uk:s("x<bH>"),wf:s("x<js>"),il:s("x<eK>"),l5:s("x<eJ>"),ow:s("x<mT>"),j5:s("x<mU>"),pv:s("x<hH>"),Fy:s("x<eM<bX>>"),EM:s("x<eM<bY>>"),w_:s("x<eM<bb>>"),f2:s("x<eM<dn>>"),n:s("x<z>"),zz:s("x<@>"),t:s("x<k>"),Cf:s("x<L?>"),AN:s("x<by>"),E:s("ix"),m:s("aj"),ud:s("dJ"),yO:s("c7<@>"),AQ:s("J<b8>"),hk:s("J<c6>"),b:s("J<bz>"),xp:s("J<cK>"),nx:s("J<aj>"),rW:s("J<Y<e,e>>"),qr:s("J<bL>"),R:s("J<aw>"),fG:s("J<dc>"),Es:s("J<cb>"),DX:s("J<+(e,e)>"),pL:s("J<+(k,e)>"),bE:s("J<bb>"),fx:s("J<df>"),r6:s("J<dQ>"),yu:s("J<cu>"),a:s("J<e>"),uh:s("J<jf>"),D0:s("J<dX>"),cf:s("J<cg>"),p7:s("J<dl>"),dd:s("J<z>"),j:s("J<@>"),L:s("J<k>"),ik:s("J<aj?>"),vX:s("J<L?>"),m2:s("iC"),h6:s("P<e,aY>"),gJ:s("P<e,d1>"),q:s("P<e,e>"),no:s("P<e,bt>"),AC:s("P<@,@>"),ou:s("P<k,e>"),pr:s("P<k,@>"),yx:s("P<e,J<e>>"),mf:s("Y<e,cI>"),vD:s("Y<e,c8>"),of:s("Y<e,L>"),ap:s("Y<e,aw>"),G:s("Y<e,e>"),qH:s("Y<e,dT>"),m0:s("Y<e,l>"),gG:s("Y<e,z>"),P:s("Y<e,@>"),f:s("Y<@,@>"),eU:s("Y<k,e>"),pG:s("Y<k,ft>"),tQ:s("Y<k,fu>"),Bx:s("Y<e,J<e>>"),oZ:s("Y<e,L?>"),q1:s("Y<cf,J<cg>>"),ee:s("Y<k,Y<e,e>>"),dH:s("H<k,e>"),jT:s("H<e,e?>"),w1:s("bX"),pw:s("c8"),jt:s("db"),wl:s("c9"),kc:s("bL"),aw:s("fe"),mL:s("hl"),rV:s("hm"),mV:s("ff"),c:s("az"),K:s("L"),Cx:s("L(ho)"),BB:s("bZ"),A:s("aw"),oP:s("dK"),wJ:s("bB"),E4:s("bC"),A_:s("dL"),e:s("cb"),DL:s("iO"),AB:s("lF"),yi:s("hn"),rx:s("iQ"),c_:s("iR"),zC:s("lH"),xK:s("dO"),cw:s("iU"),z0:s("dd"),Dp:s("iV"),Y:s("fk"),iM:s("KO"),ep:s("+()"),k0:s("+(bL,bY)"),ut:s("+(bt,dn)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bO)"),bG:s("+influence,source(z,cv)"),tK:s("+effectiveScore,light,score(z,b8,z)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(e,z,z,e,z,z,z)"),ez:s("iW"),wZ:s("ad"),lg:s("iZ"),tc:s("de<cK,bb>"),ja:s("de<c8,bX>"),wm:s("de<bL,bY>"),qq:s("de<bt,dn>"),j2:s("Q"),m3:s("bb"),yz:s("cc"),z_:s("fm"),F3:s("df"),Dm:s("dQ"),Q:s("dR<e>"),oG:s("dR<k>"),en:s("bN"),gl:s("bh"),gn:s("c0"),r:s("cu"),u5:s("bD"),is:s("c1"),ho:s("hw"),EH:s("b3<bU>"),E0:s("b3<bZ>"),l:s("di"),w8:s("fr"),qL:s("bs"),N:s("e"),dc:s("e(k)"),Aj:s("bt"),jP:s("c2"),h:s("cd"),bp:s("dT"),sg:s("an"),bs:s("dU"),ys:s("uO"),Dd:s("uP"),uo:s("c3"),qF:s("eA"),hL:s("eC<e,e>"),qt:s("ma"),eP:s("mb"),zo:s("me"),cV:s("B"),a7:s("h"),qY:s("bc"),T:s("c4"),gM:s("ce"),hF:s("cf"),vw:s("ft"),BX:s("fu"),aA:s("dX"),AP:s("cg"),sy:s("mn"),bB:s("bv"),aS:s("dl"),cZ:s("eE"),EI:s("eF"),uz:s("cw"),qR:s("eG"),fu:s("fv"),xe:s("hE"),fw:s("I<bV>"),vL:s("I<co>"),vK:s("I<cp>"),Fj:s("I<bD>"),rZ:s("I<c1>"),vY:s("I<e>"),g2:s("I<ce>"),ni:s("I<cf>"),rt:s("U<bN>"),xG:s("U<bh>"),o:s("fx"),hR:s("as<@>"),BT:s("jp<L?,L?>"),Ez:s("dm"),rL:s("hF"),xT:s("eK"),wU:s("eJ"),la:s("mS"),qS:s("jx"),jS:s("hJ"),EF:s("bI<+(e,bt)>"),Br:s("bI<cc>"),oe:s("bI<dQ>"),a_:s("jN"),V:s("jO"),p:s("jP"),y:s("l"),Bs:s("l()"),C3:s("l(fU)"),kr:s("l(bV)"),e2:s("l(co)"),rg:s("l(cp)"),bl:s("l(L)"),pz:s("l(bN)"),aV:s("l(bh)"),y2:s("l(bD)"),ty:s("l(c1)"),Ag:s("l(e)"),da:s("l(ce)"),u_:s("l(cf)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(L)"),nW:s("@(L,di)"),S:s("k"),eZ:s("aT<az>?"),r9:s("x<L?>?"),gt:s("aj?"),rK:s("J<@>?"),yq:s("Y<@,@>?"),jd:s("Y<e,J<e>>?"),X:s("L?"),dM:s("By?"),dR:s("e?"),oI:s("e?(e)"),Fx:s("c3?"),F:s("dZ<@,@>?"),Af:s("mP?"),k7:s("l?"),wK:s("l(hu)?"),u6:s("z?"),lo:s("k?"),s7:s("by?"),Z:s("~()?"),Cv:s("~(eb)?"),kC:s("~(ed)?"),pf:s("~(h2)?"),hq:s("~(ha)?"),CA:s("~(dH)?"),hQ:s("~(c_)?"),Ci:s("~(bN)?"),nf:s("~(c1,bD)?"),DI:s("~(e,z)?"),xl:s("~(l)?"),vR:s("~(k)?"),dt:s("~(k,e)?"),J:s("by"),H:s("~"),O:s("~()"),m1:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.jL=J.la.prototype
B.a=J.x.prototype
B.d=J.iw.prototype
B.b=J.fa.prototype
B.c=J.eu.prototype
B.jN=J.dJ.prototype
B.jO=J.iz.prototype
B.o=A.iG.prototype
B.a4=A.iK.prototype
B.dQ=J.lB.prototype
B.c7=J.eA.prototype
B.al=new A.d_(1,"standard")
B.S=new A.kf(B.al)
B.cg=new A.d_(0,"concise")
B.ch=new A.d_(2,"verbose")
B.aF=new A.eb(null,null,null,null,null)
B.pX=new A.kg(0,"none")
B.am=new A.fS(0,"opaque")
B.b0=new A.fS(1,"masked")
B.T=new A.fS(2,"blended")
B.eA=new A.kj(!1,127)
B.eB=new A.kj(!0,127)
B.b1=new A.i7(0,"world")
B.eC=new A.i7(1,"camera")
B.eD=new A.kn(4,"ambience")
B.cl=new A.cH(3,"mono")
B.b2=new A.dv(0,"full")
B.ck=new A.cH(0,"auto")
B.cj=new A.d0(1,"standard")
B.ci=new A.du(0,"defaultMix")
B.b3=new A.ed(B.ck,B.cj,B.b2,B.ci)
B.eK=new A.f_(0,"broadcast")
B.eL=new A.f_(1,"visitor")
B.eM=new A.f_(2,"aftermath")
B.eN=new A.f_(3,"ending")
B.aT=new A.lO(0,"pixeldart")
B.eO=new A.i8(B.aT,!0,!1,null,!1,null)
B.eP=new A.i8(B.aT,!1,!1,null,!1,null)
B.cn=new A.ej(1,"capturing")
B.eQ=new A.dw(B.cn,null)
B.co=new A.ej(3,"rejected")
B.b4=new A.dw(B.co,null)
B.cp=new A.ej(4,"applied")
B.cm=new A.dw(B.cp,null)
B.cq=new A.ej(5,"cancelled")
B.eR=new A.dw(B.cq,null)
B.b5=new A.ej(2,"conflict")
B.aG=new A.kq(0,"add")
B.eV=new A.f1(0,"zero")
B.an=new A.f1(1,"one")
B.K=new A.kr(0,"alpha")
B.L=new A.ek(1,"button")
B.q=new A.el(0,"normal")
B.eY=new A.bo("settings.back",B.L,"back","back to pause menu",B.q)
B.aH=new A.ek(0,"heading")
B.eZ=new A.bo("settings.heading",B.aH,"Settings",null,B.q)
B.f_=new A.bo("settings.controls.heading",B.aH,"Controls",null,B.q)
B.f0=new A.bo("settings.controls.back",B.L,"back","back to settings categories",B.q)
B.f1=new A.bo("pause.heading",B.aH,"Paused",null,B.q)
B.f2=new A.ek(3,"slider")
B.f3=new A.ek(4,"toggle")
B.cr=new A.ek(5,"keybind")
B.aI=new A.el(5,"disabled")
B.f4=new A.el(6,"error")
B.f5=new A.el(7,"destructive")
B.cs=new A.el(8,"remapping")
B.ct=new A.i6()
B.f6=new A.ki()
B.pY=new A.oE()
B.f7=new A.kp()
B.cu=new A.oQ()
B.f8=new A.ik(A.a2("ik<0&>"))
B.cv=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f9=function() {
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
B.fe=function(getTagFallback) {
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
B.fa=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.fd=function(hooks) {
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
B.fc=function(hooks) {
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
B.fb=function(hooks) {
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
B.cw=function(hooks) { return hooks; }

B.f=new A.lg()
B.ff=new A.rk()
B.fg=new A.ly()
B.q_=new A.rS()
B.fh=new A.rT()
B.cx=new A.rV()
B.fi=new A.rZ()
B.fj=new A.t2()
B.fk=new A.df()
B.aU=new A.ct(1,"gradeLUT")
B.fl=new A.df()
B.fm=new A.tr()
B.fn=new A.tt()
B.h=new A.tA()
B.cy=new A.md()
B.cz=new A.uU()
B.pZ=new A.kD()
B.fo=new A.vq()
B.b6=new A.mM()
B.C=new A.mZ()
B.aJ=new A.n8()
B.fp=new A.fX(1.3089969389957472,0.1,60)
B.fq=new A.fX(1.0471975511965976,0.1,60)
B.fr=new A.fX(0.8726646259971648,0.08,45)
B.U=new A.fZ(0,"colorOnly")
B.cA=new A.fZ(1,"colorAndDepth")
B.b7=new A.fZ(2,"depthOnly")
B.fs=new A.id(0,"linear")
B.b8=new A.id(1,"srgb")
B.cB=new A.h_(0,"open")
B.ft=new A.h_(1,"committed")
B.fu=new A.h_(2,"aborted")
B.b9=new A.h4(0,"open")
B.fB=new A.h4(1,"committed")
B.fC=new A.h4(2,"rolledBack")
B.aK=new A.kB(1,"back")
B.aL=new A.kE(0,"less")
B.fD=new A.h5(0,"off")
B.cC=new A.h5(1,"errorsOnly")
B.fE=new A.h5(2,"full")
B.cD=new A.kH(2,"error")
B.aM=new A.bV(0,"open")
B.cE=new A.bV(1,"chain")
B.cF=new A.bV(2,"throughDoor")
B.cG=new A.bV(3,"letterbox")
B.ao=new A.bV(4,"ignore")
B.V=new A.h6(0,"opaque")
B.fF=new A.h6(1,"masked")
B.ap=new A.h6(2,"blended")
B.cH=new A.h7(!1,B.aL,!1,!0,B.an,B.an,B.aG,!1,B.aK,!0,!1,!0,!0,!0,!0,!1)
B.fG=new A.h7(!0,B.aL,!1,!0,B.an,B.an,B.aG,!0,B.aK,!0,!1,!0,!0,!0,!0,!1)
B.eW=new A.f1(2,"srcAlpha")
B.eX=new A.f1(3,"oneMinusSrcAlpha")
B.fH=new A.h7(!0,B.aL,!1,!0,B.eW,B.eX,B.aG,!0,B.aK,!0,!1,!0,!0,!0,!0,!1)
B.fI=new A.dy(0)
B.fJ=new A.dy(22e4)
B.fK=new A.dy(24e5)
B.cI=new A.co(0,"compliance")
B.fL=new A.h8(B.cI)
B.cJ=new A.co(1,"rupture")
B.fM=new A.h8(B.cJ)
B.cK=new A.co(2,"synchronisation")
B.fN=new A.h8(B.cK)
B.cL=new A.f4(0,"front")
B.fO=new A.f4(1,"rearService")
B.fP=new A.f4(2,"sideBoundary")
B.fQ=new A.f4(3,"roofline")
B.A=new A.ep(0,"north")
B.aq=new A.ep(1,"east")
B.t=new A.ep(2,"south")
B.ar=new A.ep(3,"west")
B.fR=new A.eq(0,"ground")
B.fS=new A.eq(1,"first")
B.fT=new A.eq(2,"hidden")
B.fU=new A.dA(0,"mantle")
B.fV=new A.dA(1,"portal")
B.fX=new A.dA(3,"inventory")
B.cM=new A.dA(4,"aftermath")
B.fW=new A.dA(2,"window")
B.fZ=new A.er(B.fW,"shutter","the shutter")
B.fY=new A.dA(5,"none")
B.h_=new A.er(B.fY,null,null)
B.h0=new A.A("saved mantle history is malformed",null,null)
B.h1=new A.A("rupture elapsed time is malformed",null,null)
B.h2=new A.A("presentation keys must be strings",null,null)
B.h3=new A.A("model package payload hash mismatch",null,null)
B.h4=new A.A("unsupported accessibility profile",null,null)
B.h5=new A.A("unsupported promoted model index schema",null,null)
B.h6=new A.A("materialSlot is required",null,null)
B.h7=new A.A("weather audio input is not finite",null,null)
B.h8=new A.A("inventory inspections must be an object",null,null)
B.h9=new A.A("screenplay event random range is invalid",null,null)
B.cN=new A.A("saved mantle state is malformed",null,null)
B.ha=new A.A("inactive rupture has elapsed time",null,null)
B.hb=new A.A("control sensitivity is outside 0.1\u20133.0",null,null)
B.hc=new A.A("invalid action bindings",null,null)
B.hd=new A.A("Shader Lab document controls are incomplete",null,null)
B.he=new A.A("weather audio input is out of bounds",null,null)
B.hf=new A.A("listener room is empty",null,null)
B.hg=new A.A("control bindings conflict",null,null)
B.hh=new A.A("saved difficulty state is malformed",null,null)
B.hi=new A.A("weatherSurfaces save data must be an object",null,null)
B.hj=new A.A("residence.restAnchor cannot be empty",null,null)
B.hk=new A.A("saved house drift state is malformed",null,null)
B.hl=new A.A("saved sleep record is malformed",null,null)
B.hm=new A.A("UI scale must be between 0.8 and 2.0",null,null)
B.hn=new A.A("manifest string array is malformed",null,null)
B.ho=new A.A("weather audio event is invalid",null,null)
B.hp=new A.A("unsupported settings store",null,null)
B.hq=new A.A("screenplay scene must be an object",null,null)
B.hr=new A.A("settings values must be an object",null,null)
B.hs=new A.A("saved day-loop sleepHistory must be a list",null,null)
B.ht=new A.A("invalid anisotropy limit",null,null)
B.hu=new A.A("weather audio frame is invalid",null,null)
B.hv=new A.A("requested debug mode is not available",null,null)
B.hw=new A.A("audio event position is not finite",null,null)
B.hx=new A.A("event sequence must be non-negative",null,null)
B.hy=new A.A("screenplay branch is invalid",null,null)
B.hz=new A.A("inventory inspection counts are invalid",null,null)
B.hA=new A.A("only keybinds can be remapping",null,null)
B.hB=new A.A("modelScale must be positive and finite",null,null)
B.hC=new A.A("weather audio layer is not finite",null,null)
B.hD=new A.A("Invalid database dialogue package",null,null)
B.hE=new A.A("listener position is not finite",null,null)
B.hF=new A.A("screenplay event has invalid core fields",null,null)
B.hG=new A.A("invalid action ID",null,null)
B.hH=new A.A("invalid Shader Lab debug mode",null,null)
B.hI=new A.A("saved window state is malformed",null,null)
B.hJ=new A.A("manifest socket map is malformed",null,null)
B.hK=new A.A("unsupported graphics preset",null,null)
B.hL=new A.A("save run and meta must be objects",null,null)
B.hM=new A.A("saved house state is malformed",null,null)
B.hN=new A.A("saved sleep record must be an object",null,null)
B.hO=new A.A("model package parts must be non-empty",null,null)
B.hP=new A.A("sound cue must be a non-empty string",null,null)
B.hQ=new A.A("saved session run is malformed",null,null)
B.hR=new A.A("save map keys must be strings",null,null)
B.hS=new A.A("unsupported graphics profile",null,null)
B.hT=new A.A("model package exceeds payload count limit",null,null)
B.hU=new A.A("screenplay scene has invalid id, day, or title",null,null)
B.hV=new A.A("unsupported audio options",null,null)
B.hW=new A.A("transform.scale must be positive",null,null)
B.hX=new A.A("Escape is reserved for pause navigation",null,null)
B.hY=new A.A("saved day-loop state is malformed",null,null)
B.hZ=new A.A("rupture extinguished mantle is unknown",null,null)
B.i_=new A.A("model package exceeds part limit",null,null)
B.cO=new A.A("unsupported controls profile",null,null)
B.i0=new A.A("promoted model index entry is malformed",null,null)
B.cP=new A.A("saved portal state is malformed",null,null)
B.i1=new A.A("acoustic portal profile is not finite",null,null)
B.i2=new A.A("model package exceeds total byte limit",null,null)
B.i3=new A.A("unsupported model package schema",null,null)
B.i4=new A.A("manifest socket names are malformed",null,null)
B.i5=new A.A("saved house state does not match this house",null,null)
B.i6=new A.A("presentation snapshot contains a non-finite number",null,null)
B.i7=new A.A("screenplay array contains invalid text",null,null)
B.i8=new A.A("weather audio layer identity is empty",null,null)
B.i9=new A.A("screenplay event day/hour is out of range",null,null)
B.ia=new A.A("unsupported gameplay settings profile",null,null)
B.ib=new A.A("save contains a non-finite number",null,null)
B.ic=new A.A("unsupported graphics store",null,null)
B.id=new A.A("screenplay option is invalid",null,null)
B.ig=new A.A("duplicate weather audio event",null,null)
B.ie=new A.A("duplicate weather audio layer",null,null)
B.ih=new A.A("screenplay needs sources and scenes arrays",null,null)
B.ii=new A.A("brush component needs an id and label",null,null)
B.ij=new A.A("text.json root must be an object",null,null)
B.ik=new A.A("screenplay root must be an object",null,null)
B.il=new A.A("event kind is empty",null,null)
B.im=new A.A("unsupported Shader Lab document schema",null,null)
B.io=new A.A("screenplay event effects are invalid",null,null)
B.ip=new A.A("promoted model index entries are required",null,null)
B.iq=new A.A("weather surface state must be an object",null,null)
B.ir=new A.A("invalid control binding token",null,null)
B.is=new A.A("audio transmission muffle is invalid",null,null)
B.it=new A.A("acoustic portal muffle order is invalid",null,null)
B.iu=new A.A("unsupported settings profile",null,null)
B.iv=new A.A("saved session clock is malformed",null,null)
B.iw=new A.A("weather surface room ID must be a string",null,null)
B.ix=new A.A("rupture mantle IDs are malformed",null,null)
B.iy=new A.A("invalid gameplay setting: contextualReminders",null,null)
B.iz=new A.A("invalid screen-reader verbosity",null,null)
B.iA=new A.A("saved sleep record has an unknown enum",null,null)
B.iB=new A.A("weather audio layer is out of bounds",null,null)
B.iC=new A.A("malformed Shader Lab control",null,null)
B.iD=new A.A("audio cue variants are empty",null,null)
B.iE=new A.A("manifest numeric array is malformed",null,null)
B.iF=new A.A("screenplay beat has invalid kind or text",null,null)
B.iG=new A.A("save root must be an object",null,null)
B.iH=new A.A("Shader Lab document must be an object",null,null)
B.iI=new A.A("audio event identity is empty",null,null)
B.iJ=new A.A("screenplay event random range is out of range",null,null)
B.iK=new A.A("render capabilities contain invalid limits",null,null)
B.iL=new A.A("saved house overrides are malformed",null,null)
B.N=new A.aU(0,0,0)
B.bm=new A.aU(1,1,1)
B.kE=s([],t.Fk)
B.bw=s([],t.cv)
B.kF=s([],t.xL)
B.kG=s([],t.E7)
B.iM=new A.kV(B.N,B.N,0,1,null,null,B.bm,0.02,0,0.7,0.35,1,12,1,1,1,1,1,1,1,0.003,B.N,0,0,B.bm,0,null,B.kE,B.bw,B.kF,B.kG,null)
B.cQ=new A.aY(0,0,0)
B.iN=new A.f5(0,"idle")
B.as=new A.f5(1,"active")
B.iO=new A.f5(2,"ended")
B.iP=new A.f5(3,"aborted")
B.ba=new A.h9(0,"outside")
B.iQ=new A.h9(1,"intersects")
B.iR=new A.h9(2,"inside")
B.iS=new A.dB(0,"timeAdvanced")
B.iT=new A.dB(1,"dayEndReached")
B.iU=new A.dB(2,"journalWritten")
B.iV=new A.dB(3,"journalRejected")
B.iW=new A.dB(4,"slept")
B.iX=new A.dB(5,"complianceFloorTripped")
B.bb=new A.dC(0,"twentyFourHour")
B.cR=new A.dC(1,"twelveHour")
B.cS=new A.dD(0,"important")
B.cT=new A.dD(1,"always")
B.bc=new A.cp(0,"pauseAndMute")
B.cU=new A.dE(0,"press")
B.cV=new A.dE(1,"hold")
B.cW=new A.dF(0,"compact")
B.cX=new A.dF(1,"spacious")
B.cY=new A.d2(1,"standard")
B.cZ=new A.d2(2,"detailed")
B.d_=new A.dG(0,"toast")
B.d0=new A.dG(1,"detailed")
B.d1=new A.d3(1,"readable")
B.j2=new A.ip(0,"vertex")
B.d2=new A.ip(1,"indices")
B.d3=new A.l1(0,"staticDraw")
B.j=new A.iq(0,"ready")
B.a2=new A.iq(1,"lost")
B.at=new A.hc(0,"prepared")
B.j3=new A.hc(1,"committed")
B.j4=new A.hc(2,"rolledBack")
B.j5=new A.f7(0,"color")
B.d4=new A.f7(1,"colorAndGlow")
B.j6=new A.f7(2,"colorDepthGlow")
B.bd=new A.f7(3,"depthOnly")
B.be=new A.is(1,"linear")
B.d5=new A.it(0,"clampToEdge")
B.j7=new A.l2(1,1,1,!1,B.be,B.be,B.d5,1)
B.au=new A.is(2,"linearMipmapLinear")
B.j8=new A.it(1,"repeat")
B.j9=new A.d5(0,"beforeShadow")
B.ja=new A.d5(2,"beforeDepth")
B.bf=new A.d5(3,"afterDepth")
B.d6=new A.d5(4,"beforeWorld")
B.jb=new A.d5(5,"afterWorld")
B.M=new A.d5(6,"afterResolve")
B.jc=new A.d5(9,"beforePresent")
B.d7=new A.cq(0,"readBeforeWrite")
B.jd=new A.cq(1,"duplicateWriter")
B.je=new A.cq(2,"sampledMultisampledAttachment")
B.bg=new A.cq(3,"invalidResolve")
B.jf=new A.cq(4,"formatOrSizeMismatch")
B.jg=new A.cq(5,"unversionedReadWrite")
B.jh=new A.cq(6,"invalidHistoryRead")
B.ji=new A.cq(7,"dependencyCycle")
B.jj=new A.cq(8,"missingCapability")
B.bh=new A.cJ(0,"high")
B.bi=new A.cJ(1,"standard")
B.bj=new A.dH(1,B.bi,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.jm=new A.dH(1,B.bh,"1.00",!1,"display","msaa4","high","srgb","errors","profile",!1)
B.aN=new A.es(0,"player")
B.bk=new A.es(1,"inserted")
B.d8=new A.es(2,"warden")
B.d9=new A.f8(0,"wrongKind")
B.da=new A.f8(1,"staleGeneration")
B.jn=new A.f8(2,"doubleRelease")
B.aO=new A.f8(3,"releasedResource")
B.jq=new A.d6("kitchen-range","settle")
B.jr=new A.d6("front-door-knocker","knock")
B.js=new A.d6("cellar-drain","drip")
B.jt=new A.d6("bedroom-timber","creak")
B.ju=new A.d6("kitchen-pipe","tick")
B.jv=new A.d6("bathroom-cistern","settle")
B.jw=new A.d6("landing-window","wind")
B.jK=new A.l9(1,"visitor")
B.jM=new A.lb("none",0,0,0,0,0,!1)
B.jP=new A.qS(null)
B.jQ=new A.qT(null)
B.bl=new A.iB(!1,0,0.85,0.92,1,0,1,0,0)
B.jR=new A.aU(0.008,0.012,0.024)
B.db=s([0,2,2,3],t.t)
B.bn=s([B.cS,B.cT],A.a2("x<dD>"))
B.jS=s(["wall-plaster","grime","floor-linoleum","ceiling-stained","porcelain-albedo","porcelain-normal","glass","skybox-main-atmosphere-v1"],t.s)
B.jT=s(["volumetric_light_enable","volumetric_shaft_intensity","volumetric_precision","volumetric_dust_density","volumetric_scattering"],t.s)
B.jU=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bo=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.I=new A.bN(0,"audio")
B.Z=new A.j2(0,"level")
B.nR=new A.bh("master","Master",B.I,B.Z,1,0,1,"audio")
B.nW=new A.bh("voice","Visitor voice",B.I,B.Z,1,0,1,"audio")
B.nN=new A.bh("effects","Effects",B.I,B.Z,1,0,1,"audio")
B.nO=new A.bh("ambience","House ambience",B.I,B.Z,1,0,1,"audio")
B.nS=new A.bh("music","Music",B.I,B.Z,1,0,1,"audio")
B.aV=new A.bN(1,"display")
B.nV=new A.bh("brightness","Display brightness",B.aV,B.Z,1,0.6,1.4,"display")
B.az=new A.j2(1,"toggle")
B.nQ=new A.bh("muted","Mute house audio",B.I,B.az,!1,null,null,"audio")
B.ae=new A.bN(2,"accessibility")
B.nT=new A.bh("mono","Mono-compatible mix",B.ae,B.az,!1,null,null,"audio")
B.nP=new A.bh("high-contrast","High-contrast interface",B.ae,B.az,!1,null,null,"display")
B.nU=new A.bh("strong-highlights","Strong focus highlights",B.ae,B.az,!1,null,null,"display")
B.F=s([B.nR,B.nW,B.nN,B.nO,B.nS,B.nV,B.nQ,B.nT,B.nP,B.nU],A.a2("x<bh>"))
B.D=s(["who","verb","object","place","time"],t.s)
B.jW=s([81,77,83,72],t.t)
B.jX=s(["porcelain-albedo","porcelain-normal","glass"],t.s)
B.eE=new A.du(1,"strong")
B.bp=s([B.ci,B.eE],A.a2("x<du>"))
B.eS=new A.f0(0,"swap")
B.eT=new A.f0(1,"replace")
B.eU=new A.f0(2,"cancel")
B.jY=s([B.eS,B.eT,B.eU],A.a2("x<f0>"))
B.jZ=s([2,5,9,12,16,19],t.t)
B.iY=new A.cp(1,"pauseOnly")
B.iZ=new A.cp(2,"continuePlayback")
B.aP=s([B.bc,B.iY,B.iZ],A.a2("x<cp>"))
B.k_=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale","uShadowMapTexelSize","uShadowFilterRadius","uShadowBias","uReflectionColor","uReflectionIntensity","uReflectionConfidence","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uSpecularScale","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.k0=s(["uQuantizationBits","uDitherStrength"],t.s)
B.k2=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.k3=s([B.aM,B.cE,B.cF,B.cG,B.ao],A.a2("x<bV>"))
B.k4=s(["30","60","display"],t.s)
B.k5=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.aE=new A.cf(0,"full")
B.cc=new A.cf(1,"compressed")
B.cd=new A.cf(2,"off")
B.dc=s([B.aE,B.cc,B.cd],A.a2("x<cf>"))
B.bq=s([B.bb,B.cR],A.a2("x<dC>"))
B.k6=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection","uView","uInverseProjection","uVolumetricAlbedo","uVolumetricHeightFalloff","uVolumetricDustDensity","uVolumetricJitter","uVolumetricIntensity","uVolumetricSampleCount"],t.s)
B.k7=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.eJ=new A.dv(1,"reduced")
B.br=s([B.b2,B.eJ],A.a2("x<dv>"))
B.eF=new A.d0(0,"wide")
B.eG=new A.d0(2,"night")
B.bs=s([B.eF,B.cj,B.eG],A.a2("x<d0>"))
B.k8=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.kj=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.o6=new A.bD(0,"bed")
B.o7=new A.bD(1,"chair")
B.bX=new A.bD(2,"sofa")
B.o8=new A.bD(3,"floor")
B.dd=s([B.o6,B.o7,B.bX,B.o8],A.a2("x<bD>"))
B.de=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bt=s([B.cW,B.cX],A.a2("x<dF>"))
B.o9=new A.c1(0,"long")
B.ea=new A.c1(1,"short")
B.df=s([B.o9,B.ea],A.a2("x<c1>"))
B.fz=new A.cm("1 - 9","Select Response",!0)
B.fv=new A.cm("SPACE","Silence Ring",!1)
B.kl=s([B.fz,B.fv],t.sa)
B.a6=new A.c_(0,"visual")
B.bJ=new A.c_(1,"graphics")
B.a7=new A.c_(2,"gameplay")
B.bK=new A.c_(3,"controls")
B.O=new A.c_(4,"audio")
B.P=new A.c_(5,"accessibility")
B.km=s([B.a6,B.bJ,B.a7,B.bK,B.O,B.P],A.a2("x<c_>"))
B.kn=s(["master","voice","effects","ambience","music"],t.s)
B.bu=s([B.d_,B.d0],A.a2("x<dG>"))
B.dg=s(["res/house/house.json","assets/house/house.json"],t.s)
B.kp=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.jk=new A.cJ(2,"safe")
B.jl=new A.cJ(3,"custom")
B.dh=s([B.bh,B.bi,B.jk,B.jl],A.a2("x<cJ>"))
B.H=new A.ct(0,"inactive")
B.bU=new A.ct(2,"affineWarp")
B.e1=new A.ct(3,"vertexSnap")
B.bV=new A.ct(4,"tapeGiveup")
B.bW=new A.ct(5,"portalFail")
B.ac=new A.ct(6,"lightsOut")
B.di=s([B.H,B.aU,B.bU,B.e1,B.bV,B.bW,B.ac],A.a2("x<ct>"))
B.kq=s(["#4b8fc5","#79c8d5","#d7c77a","#df824f","#d43b3b"],t.s)
B.kr=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale"],t.s)
B.ks=s([B.aN,B.bk,B.d8],A.a2("x<es>"))
B.kt=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.pS=new A.bH("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.pR=new A.bH("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.pN=new A.bH("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.pV=new A.bH("ronnie.response","named","A route card has Ronnie written on its back.")
B.pU=new A.bH("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ku=s([B.pS,B.pR,B.pN,B.pV,B.pU],t.uk)
B.pT=new A.bH("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.pQ=new A.bH("ronnie.response","named","The name Ronnie holds when the room does not.")
B.pO=new A.bH("denise.revision","accepted","One correction remains yours to protect.")
B.pL=new A.bH("attercliffe.plate","kept","A second place survives the room changing around it.")
B.kv=s([B.pT,B.pQ,B.pO,B.pL],t.uk)
B.kx=s([],t.xn)
B.kJ=s([],t.A5)
B.kA=s([],t.Fm)
B.kz=s([],t.op)
B.kw=s([],A.a2("x<cL>"))
B.ky=s([],t.W)
B.kD=s([],t.yH)
B.a3=s([],t.qP)
B.kB=s([],t.u)
B.dn=s([],t.xB)
B.kL=s([],t.D)
B.kK=s([],t.El)
B.n=s([],t.s)
B.dk=s([],t.ld)
B.dj=s([],t.su)
B.dl=s([],t.uI)
B.dm=s([],t.nm)
B.bv=s([],t.n)
B.kC=s([],t.t)
B.bx=s([],t.zz)
B.jp=new A.iv(15,"kitchen",-0.3,0)
B.jo=new A.iv(19,"spare-room",0,0.3)
B.W=s([B.jp,B.jo],A.a2("x<iv>"))
B.kN=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.kO=s(["high","medium","low"],t.s)
B.eH=new A.cH(1,"headphones")
B.eI=new A.cH(2,"speakers")
B.by=s([B.ck,B.eH,B.eI,B.cl],A.a2("x<cH>"))
B.kP=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bz=s([B.cU,B.cV],A.a2("x<dE>"))
B.bI=new A.cs(0,"root")
B.dF=new A.bB(0,"pauseMenu")
B.mh=new A.dK(B.bI,B.dF,null)
B.kQ=s([B.mh],t.bA)
B.bA=s([B.cg,B.al,B.ch],A.a2("x<d_>"))
B.kR=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap","uClearColor","uSkyHorizon","uSkyZenith","uSkyGround","uSkyEnabled","uSkyHorizonGlow","uSkyStarDensity","uSkyTexture","uSkyTextureEnabled","uSkyRotation","uSkyExposure","uSkyTextureSrgb","uInverseProjection","uInverseView","uCameraPosition","uCloudCoverage","uCloudDensity","uCloudBaseHeight","uCloudThickness","uCloudScale","uCloudWind","uCloudPhase","uCloudDetail","uCloudSilverLining","uCloudSampleCount","uCloudLightDirection","uCloudLightColor","uCloudLightIntensity"],t.s)
B.j0=new A.d3(0,"instant")
B.j1=new A.d3(2,"slow")
B.bB=s([B.j0,B.d1,B.j1],A.a2("x<d3>"))
B.kS=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.kT=s([B.I,B.aV,B.ae],A.a2("x<bN>"))
B.dp=s([B.A,B.aq,B.t,B.ar],A.a2("x<ep>"))
B.bY=new A.bs(0,"depthTest")
B.bZ=new A.bs(1,"depthFunc")
B.c_=new A.bs(2,"depthWrite")
B.c0=new A.bs(3,"blendEnable")
B.c1=new A.bs(4,"blendFunc")
B.c2=new A.bs(5,"blendEquation")
B.c3=new A.bs(6,"cullEnable")
B.c4=new A.bs(7,"cullFace")
B.ee=new A.bs(8,"frontFace")
B.oq=new A.bs(9,"stencilEnable")
B.ec=new A.bs(10,"colorMask")
B.ed=new A.bs(11,"scissorEnable")
B.kU=s([B.bY,B.bZ,B.c_,B.c0,B.c1,B.c2,B.c3,B.c4,B.ee,B.oq,B.ec,B.ed],A.a2("x<bs>"))
B.aA=new A.c0(0,"none")
B.nY=new A.c0(1,"albedoOnly")
B.nZ=new A.c0(2,"normalsOnly")
B.o_=new A.c0(3,"roughnessOnly")
B.o0=new A.c0(4,"metallicOnly")
B.o1=new A.c0(5,"aoOnly")
B.o2=new A.c0(6,"wireframeOnly")
B.dq=s([B.aA,B.nY,B.nZ,B.o_,B.o0,B.o1,B.o2],A.a2("x<c0>"))
B.kV=s(["off","errors","full"],t.s)
B.kW=s(["off","fxaa","msaa2","msaa4"],t.s)
B.kX=s(["off","profile","standard","high"],t.s)
B.kY=s(["pbr_roughness","pbr_metallic","pbr_specular","normal_bump_strength","shadow_bias"],t.s)
B.kZ=s(["post_bloom"],t.s)
B.l_=s(["post_color_grade"],t.s)
B.l0=s(["post_depth_of_field"],t.s)
B.l1=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.a_=new A.dh(0,"pbrMaterial")
B.af=new A.dh(1,"shadowsAndOcclusion")
B.aB=new A.dh(2,"surfaceWeathering")
B.l=new A.dh(3,"atmosphereAndPost")
B.u=new A.dh(4,"weatherEffects")
B.o3=new A.dh(5,"debugView")
B.av=s([B.a_,B.af,B.aB,B.l,B.u,B.o3],A.a2("x<dh>"))
B.l3=s(["shadow_csm_hardness"],t.s)
B.l4=s(["srgb","linear"],t.s)
B.l5=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.l6=s(["uBloomStrength"],t.s)
B.l7=s(["uLutSize","uStrength"],t.s)
B.l8=s([B.cI,B.cJ,B.cK],A.a2("x<co>"))
B.l9=s(["uTexelSize","uNear","uFar"],t.s)
B.dr=s(["uTexelStep"],t.s)
B.la=s(["uVolumetricStrength"],t.s)
B.lb=s(["uninitialized"],t.s)
B.j_=new A.d2(0,"minimal")
B.bC=s([B.j_,B.cY,B.cZ],A.a2("x<d2>"))
B.pP=new A.bH("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.pK=new A.bH("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.pJ=new A.bH("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.pM=new A.bH("ronnie.response","named","The route card gives one name its own line.")
B.lc=s([B.pP,B.pK,B.pJ,B.pM],t.uk)
B.aj=new A.ce(0,"waiting")
B.aC=new A.ce(1,"atDoor")
B.aD=new A.ce(2,"consulting")
B.aX=new A.ce(3,"resolved")
B.ld=s([B.aj,B.aC,B.aD,B.aX],A.a2("x<ce>"))
B.le=s(["post_dither","post_quantization_bits"],t.s)
B.fA=new A.cm("W A S D","Move",!1)
B.fy=new A.cm("TAB","Journal",!1)
B.fx=new A.cm("CAPS","Shader Lab",!1)
B.fw=new A.cm("ESC","Pause",!1)
B.lf=s([B.fA,B.fy,B.fx,B.fw],t.sa)
B.lg=s(["floor-linoleum","ceiling-stained"],t.s)
B.lS={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.lh=new A.a4(B.lS,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a2("a4<e,L?>"))
B.m6={uAlbedo:0}
B.ds=new A.a4(B.m6,[0],t.I)
B.md={uSsaoRaw:0,uSceneDepth:1}
B.li=new A.a4(B.md,[0,1],t.I)
B.dD={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.ki=s(["KeyW","GamepadDpadUp"],t.s)
B.kh=s(["KeyS","GamepadDpadDown"],t.s)
B.k9=s(["KeyA","GamepadDpadLeft"],t.s)
B.ka=s(["KeyD","GamepadDpadRight"],t.s)
B.kb=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.kf=s(["KeyQ","GamepadB"],t.s)
B.kk=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.kM=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.kg=s(["KeyR","GamepadX"],t.s)
B.kc=s(["KeyF","GamepadRB"],t.s)
B.kd=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.ke=s(["KeyL"],t.s)
B.k1=s(["Escape","GamepadMenu"],t.s)
B.lj=new A.a4(B.dD,[B.ki,B.kh,B.k9,B.ka,B.kb,B.kf,B.kk,B.kM,B.kg,B.kc,B.kd,B.ke,B.k1],A.a2("a4<e,J<e>>"))
B.lk=new A.a4(B.dD,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.ma={uScene:0,uHistory:1}
B.ll=new A.a4(B.ma,[0,1],t.I)
B.lI={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.lm=new A.a4(B.lI,["bd0c05e54dd59e48b2f02db6b112ed1c008cce51","f5179efede633e7ebb8b091802d926158f4a45b6","3.12.2","73459684a3fee7d154e75cb8de030541d65ed4559f75251b12d373a91f33100f","0.2.0.3"],t.w)
B.lW={aPosition:0,aUvMat:1}
B.dt=new A.a4(B.lW,[0,4],t.I)
B.lJ={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-hail-tick":32,"weather-wind":33,"weather-window-rattle":34,"weather-window-tick":35,"weather-thunder-bed":36,"weather-interior-drip":37,"weather-interior-warmth":38,"weather-interior-coffee":39,"weather-coffee-clink":40,"weather-thunder-crack":41,"weather-thunder-roll":42,"step-above-0":43,"step-above-1":44,"step-above-2":45,"step-above-3":46}
B.ln=new A.a4(B.lJ,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","transient","air","ambience","transient","sub","ambience","sub","ambience","transient","sub","sub","sub","sub","sub","sub"],t.w)
B.mb={uScene:0,uLut:1}
B.lo=new A.a4(B.mb,[0,1],t.I)
B.mc={uSource:0}
B.du=new A.a4(B.mc,[0],t.I)
B.m3={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.lp=new A.a4(B.m3,[0,1,2,3,4,5,6],t.I)
B.dv=new A.d4([B.a6,"settings.visual",B.bJ,"settings.graphics",B.a7,"settings.gameplay",B.bK,"settings.controls",B.O,"settings.audio",B.P,"settings.accessibility"],t.EJ)
B.dw=new A.d4([B.a6,"visual",B.bJ,"graphics",B.a7,"gameplay",B.bK,"controls",B.O,"audio",B.P,"accessibility"],t.EJ)
B.lQ={uSharp:0,uBlurred:1,uSceneDepth:2}
B.lq=new A.a4(B.lQ,[0,1,2],t.I)
B.me={uTex:0,uSkyTexture:1}
B.lr=new A.a4(B.me,[0,1],t.I)
B.lY={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.jG=new A.bA("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.jB=new A.bA("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.jF=new A.bA("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.jI=new A.bA("wallpaper-damp","grime",7106925,0.94,0.76)
B.jC=new A.bA("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.jH=new A.bA("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.jJ=new A.bA("wallpaper-peeling","grime",9340536,0.91,0.68)
B.jD=new A.bA("floor-wood","wall-plaster",7755327,0.88,0.22)
B.jz=new A.bA("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.jA=new A.bA("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.jx=new A.bA("floor-concrete","grime",7828331,0.96,0.92)
B.jy=new A.bA("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.jE=new A.bA("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bD=new A.a4(B.lY,[B.jG,B.jB,B.jF,B.jI,B.jC,B.jH,B.jJ,B.jD,B.jz,B.jA,B.jx,B.jy,B.jE],A.a2("a4<e,bA>"))
B.m7={uBloom:0}
B.ls=new A.a4(B.m7,[0],t.I)
B.m8={uSceneDepth:0}
B.dx=new A.a4(B.m8,[0],t.I)
B.m9={uScene:0}
B.lt=new A.a4(B.m9,[0],t.I)
B.E={}
B.dy=new A.a4(B.E,[],A.a2("a4<e,i6>"))
B.lu=new A.a4(B.E,[],A.a2("a4<e,J<z>>"))
B.aQ=new A.a4(B.E,[],t.w)
B.q0=new A.a4(B.E,[],A.a2("a4<e,l>"))
B.bE=new A.a4(B.E,[],A.a2("a4<e,z>"))
B.y=new A.a4(B.E,[],t.I)
B.dz=new A.a4(B.E,[],A.a2("a4<e,@>"))
B.q1=new A.a4(B.E,[],A.a2("a4<e,e?>"))
B.lv=new A.a4(B.E,[],A.a2("a4<@,@>"))
B.mg={"porcelain-albedo":0,"porcelain-normal":1}
B.lw=new A.a4(B.mg,["res/house/models/porcelain-mermaid-statuette/textures/retopo_Transferred%20Texture%20from%20Mesh.jpeg","res/house/models/porcelain-mermaid-statuette/textures/retopo_Normal%20Map%20from%20Mesh.jpeg"],t.w)
B.lL={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.lx=new A.a4(B.lL,[0,1,2,3,4,5,6],t.I)
B.dG=new A.cQ(0,"resume")
B.dH=new A.cQ(1,"settings")
B.dI=new A.cQ(2,"controls")
B.dJ=new A.cQ(3,"save")
B.dK=new A.cQ(4,"help")
B.dL=new A.cQ(5,"credits")
B.dM=new A.cQ(6,"back")
B.ly=new A.d4([B.dG,"pause.resume",B.dH,"pause.settings",B.dI,"pause.controls",B.dJ,"pause.save",B.dK,"pause.help",B.dL,"pause.credits",B.dM,"pause.back"],A.a2("d4<cQ,e>"))
B.mf={uVolumetric:0}
B.lz=new A.a4(B.mf,[0],t.I)
B.m0={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.lA=new A.a4(B.m0,[0,1,2,3],t.I)
B.bF=new A.d4([B.aU,1,B.bU,1.5,B.e1,1.5,B.bV,2,B.bW,2,B.ac,4],A.a2("d4<ct,z>"))
B.q2=new A.iE(0,"srgb")
B.q3=new A.iE(1,"linear")
B.lB=new A.bX("weather:rain-particle",null,0.55,0.68,0.82,0.08,null,1,0.18,0,0,0.2,1,1,B.T,0.5,!1,!1)
B.lC=new A.bX("fire:white-vapour-particle",null,0.86,0.86,0.82,0,null,1,0.96,0,0,0.2,1,1,B.T,0.5,!1,!1)
B.lD=new A.bX("fire:flame-particle",null,1,0.42,0.06,2.4,null,1,0.28,0,0,0.2,1,1,B.T,0.5,!1,!1)
B.lE=new A.bX("weather:snow-particle",null,0.82,0.9,1,0.04,null,1,0.72,0,0,0.2,1,1,B.T,0.5,!1,!1)
B.lF=new A.bX("fire:black-soot-particle",null,0.06,0.065,0.075,0,null,1,1,0,0,0.2,1,1,B.T,0.5,!1,!1)
B.lG=new A.bX("weather:hail-particle",null,0.62,0.74,0.82,0.06,null,1,0.35,0,0,0.2,1,1,B.T,0.5,!1,!1)
B.bG=new A.fd(0,"resident")
B.dA=new A.fd(1,"pending")
B.dB=new A.fd(2,"missing")
B.dC=new A.fd(3,"evicted")
B.q4=new A.lo(!1)
B.lH=new A.lo(!0)
B.kH=s([],t.bA)
B.kI=s([],A.a2("x<bB>"))
B.bH=new A.ex(B.kH,B.kI,null)
B.dE=new A.cs(1,"settings")
B.mi=new A.cs(2,"visual")
B.mj=new A.cs(3,"graphics")
B.mk=new A.cs(4,"gameplay")
B.ml=new A.cs(5,"controls")
B.mm=new A.cs(6,"audio")
B.mn=new A.cs(7,"accessibility")
B.mo=new A.cs(8,"credits")
B.a5=new A.bB(1,"settings")
B.mp=new A.bB(2,"journal")
B.mq=new A.bB(3,"sleep")
B.mr=new A.bB(4,"help")
B.ms=new A.bB(5,"visitor")
B.mt=new A.bB(6,"ending")
B.dN=new A.ey(0,"opened")
B.dO=new A.ey(2,"backed")
B.dP=new A.ey(3,"resumed")
B.mu=new A.ey(4,"dismissed")
B.a8=new A.ey(5,"unchanged")
B.mv=new A.bC("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.mw=new A.bC("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.mx=new A.bC("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.my=new A.bC("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.mz=new A.bC("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.mA=new A.bC("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.mB=new A.bC("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.mC=new A.bC("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.mD=new A.bC("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.mE=new A.lz(0,1,null)
B.mG=new A.lA(1,"high")
B.mF=new A.rU(!1,!0,!0,!0,!1,B.mG,35,256)
B.mH=new A.lE(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.w=new A.ez(0,"none")
B.aw=new A.ez(1,"rain")
B.a9=new A.ez(2,"sleet")
B.aa=new A.ez(3,"snow")
B.X=new A.ez(4,"hail")
B.mI=new A.cR(0,"tooShortForHeader")
B.mJ=new A.cR(1,"badMagic")
B.mK=new A.cR(2,"unsupportedVersion")
B.dR=new A.cR(3,"unsupportedStride")
B.mL=new A.cR(4,"truncatedVertexData")
B.mM=new A.cR(5,"nonFiniteBounds")
B.dS=new A.cR(6,"nonFiniteVertex")
B.mN=new A.cR(7,"vertexCountNotMultipleOfThree")
B.bL=new A.fi(0,"safe")
B.Q=new A.fi(1,"standard")
B.G=new A.fi(2,"high")
B.ad=new A.aS(B.E,0,t.M)
B.ax=new A.dO(B.bL,B.ad)
B.m5={shadows:0}
B.nM=new A.aS(B.m5,1,t.M)
B.dT=new A.dO(B.Q,B.nM)
B.lN={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.nC=new A.aS(B.lN,5,t.M)
B.mP=new A.dO(B.G,B.nC)
B.m4={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.nL=new A.aS(B.m4,6,t.M)
B.dU=new A.dO(B.G,B.nL)
B.mO=new A.fi(4,"shipping")
B.lP={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.nE=new A.aS(B.lP,7,t.M)
B.q5=new A.dO(B.mO,B.nE)
B.ab=new A.lM(0,0,0,1)
B.mQ=new A.a5(0,1)
B.mR=new A.a5(256,256)
B.mS=new A.a5(4096,2048)
B.mT=new A.a5(4096,4096)
B.mU=new A.a5(512,512)
B.mV=new A.bl(0.35,0.52,0.88)
B.mW=new A.aH(0.46,0.25,0.2)
B.dV=new A.bl(0.22,0.45,0.92)
B.mX=new A.aH(0.48,0.4,0.34)
B.mY=new A.aH(0.31,0.25,0.23)
B.bM=new A.bl(0.75,0.52,0.42)
B.mZ=new A.bl(0.4,0.65,0.95)
B.dW=new A.bl(0.88,0.96,1)
B.n_=new A.aH(0.37,0.33,0.31)
B.n0=new A.bl(0.62,0.48,0.45)
B.n1=new A.aH(0.34,0.32,0.29)
B.dX=new A.aH(0.38,0.25,0.19)
B.bN=new A.bl(0.9,0.8,0.72)
B.aR=new A.bl(0.28,0.16,0.12)
B.n2=new A.aH(0.31,0.28,0.24)
B.bO=new A.bl(0.65,0.45,0.35)
B.n3=new A.aH(0.58,0.56,0.5)
B.dY=new A.bl(0.2,0.38,0.9)
B.n4=new A.aH(0.44,0.37,0.28)
B.n5=new A.aH(0.52,0.5,0.44)
B.n6=new A.aH(0.24,0.25,0.27)
B.n7=new A.aH(0.28,0.27,0.25)
B.n8=new A.bl(0.35,0.28,0.25)
B.dZ=new A.bl(0.52,0.32,0.38)
B.n9=new A.aH(0.42,0.4,0.38)
B.na=new A.aH(0.18,0.2,0.21)
B.nb=new A.aH(0.2,0.12,0.1)
B.aS=new A.bl(0.35,0.2,0.15)
B.nc=new A.aH(0.12,0.15,0.2)
B.nd=new A.hr(0,"constructed")
B.Y=new A.hr(1,"ready")
B.bP=new A.hr(2,"lost")
B.ne=new A.iZ(B.ax,384,216,1,B.b8,0,512,32,4,1,B.cC)
B.bQ=new A.fl(0,"constructed")
B.nf=new A.fl(1,"initializing")
B.bR=new A.fl(2,"ready")
B.e_=new A.fl(3,"contextLost")
B.i=new A.hs(0,"read")
B.k=new A.hs(1,"write")
B.R=new A.hs(2,"historyRead")
B.bS=new A.ht(0,"prepared")
B.ng=new A.ht(1,"committed")
B.nh=new A.ht(2,"rolledBack")
B.r=new A.j0(0,"rgba8")
B.ni=new A.aO("dofBlurH",B.r,192,108,1,0)
B.nj=new A.aO("dofBlurV",B.r,192,108,1,0)
B.nk=new A.aO("dofOutput",B.r,384,216,1,0)
B.e0=new A.j0(2,"depth24")
B.nl=new A.aO("shadowMap",B.e0,512,512,1,0)
B.nm=new A.aO("volumetricLight",B.r,192,108,1,0)
B.nn=new A.aO("sceneColor",B.r,384,216,1,1)
B.no=new A.aO("ssaoRaw",B.r,192,108,1,0)
B.np=new A.aO("ssaoBlurred",B.r,192,108,1,0)
B.nq=new A.aO("gradeOutput",B.r,384,216,1,0)
B.nr=new A.aO("vhsOutput",B.r,384,216,1,0)
B.ns=new A.aO("sceneDepth",B.e0,384,216,1,0)
B.nt=new A.aO("bloomBlurH",B.r,192,108,1,0)
B.nu=new A.aO("bloomBlurV",B.r,192,108,1,0)
B.nv=new A.aO("present",B.r,384,216,1,0)
B.bT=new A.aO("sceneColor",B.r,384,216,1,0)
B.nw=new A.aO("ps1Output",B.r,384,216,1,0)
B.nx=new A.fn(null,"save storage unavailable")
B.ny=new A.fn(null,"save could not be recovered")
B.nz=new A.fn(null,null)
B.lT={WheelUp:0,WheelDown:1}
B.nA=new A.aS(B.lT,2,t.M)
B.m1={open:0,closed:1}
B.nB=new A.aS(B.m1,2,t.M)
B.lV={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.nD=new A.aS(B.lV,10,t.M)
B.lM={Escape:0}
B.e2=new A.aS(B.lM,1,t.M)
B.lK={open:0,closed:1,mixed:2}
B.nF=new A.aS(B.lK,3,t.M)
B.m_={front:0,"rear-service":1}
B.nG=new A.aS(B.m_,2,t.M)
B.lZ={"living-room":0}
B.e3=new A.aS(B.lZ,1,t.M)
B.nH=new A.hb([18,20],A.a2("hb<k>"))
B.m2={overcast:0,rain:1}
B.nI=new A.aS(B.m2,2,t.M)
B.lX={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.nJ=new A.aS(B.lX,16,t.M)
B.lU={Escape:0,Tab:1,F11:2}
B.e4=new A.aS(B.lU,3,t.M)
B.lR={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.nK=new A.aS(B.lR,5,t.M)
B.lO={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ay=new A.aS(B.lO,7,t.M)
B.e7=new A.fp(2,"link")
B.nX=new A.j3(B.e7,"gl.createProgram() returned null")
B.e5=new A.fp(0,"vertex")
B.e6=new A.fp(1,"fragment")
B.e8=new A.fp(3,"validation")
B.z=new A.j4(0,"live")
B.e9=new A.j4(1,"unavailable")
B.o4=new A.j5(0,"full")
B.o5=new A.j5(2,"culled")
B.oa=new A.bi(0,"polarNight")
B.ob=new A.bi(1,"astronomicalDawn")
B.oc=new A.bi(10,"civilDusk")
B.od=new A.bi(11,"nauticalDusk")
B.oe=new A.bi(12,"astronomicalDusk")
B.of=new A.bi(13,"night")
B.og=new A.bi(14,"polarDay")
B.oh=new A.bi(2,"nauticalDawn")
B.oi=new A.bi(3,"civilDawn")
B.oj=new A.bi(4,"sunrise")
B.eb=new A.bi(5,"morning")
B.ok=new A.bi(6,"solarNoon")
B.ol=new A.bi(7,"afternoon")
B.om=new A.bi(8,"goldenHour")
B.on=new A.bi(9,"sunset")
B.J=new A.B(0,1,0)
B.a1=new A.B(0,-1,0)
B.oo=new A.bO(-1,B.J,B.a1,B.bm,1,1,0.3,0.5)
B.op=new A.m3(!1,"","",B.bv,B.bv)
B.ef=new A.dT(0,"resident")
B.eg=new A.dT(1,"pending")
B.eh=new A.dT(2,"missing")
B.ei=new A.dT(3,"evicted")
B.v=new A.B(0,0,0)
B.B=new A.fs(B.v,B.ab,1)
B.or=A.cB("KD")
B.os=A.cB("KE")
B.ot=A.cB("pu")
B.ou=A.cB("pv")
B.ov=A.cB("Fq")
B.ow=A.cB("Fr")
B.ox=A.cB("Fs")
B.oy=A.cB("aj")
B.oz=A.cB("L")
B.oA=A.cB("uO")
B.oB=A.cB("uP")
B.oC=A.cB("Gu")
B.oD=A.cB("c3")
B.e=new A.dj(0,"float1")
B.ag=new A.dj(1,"float2")
B.m=new A.dj(2,"float3")
B.oE=new A.dj(3,"float4")
B.p=new A.dj(4,"mat4")
B.ej=new A.dj(5,"mat4Array")
B.c5=new A.q(B.e,0)
B.c6=new A.q(B.e,1)
B.a0=new A.dj(6,"sampler")
B.x=new A.q(B.a0,0)
B.ah=new A.q(B.a0,1)
B.ek=new A.q(B.a0,2)
B.oF=new A.q(B.a0,3)
B.oG=new A.q(B.a0,4)
B.oH=new A.q(B.a0,5)
B.oI=new A.q(B.a0,6)
B.oJ=new A.uT(!1)
B.oK=new A.B(0,0,1)
B.oL=new A.B(0,3,0)
B.aW=new A.B(1,0,0)
B.oM=new A.B(0,0.52,0)
B.oN=new A.B(0.08,0.04,0.08)
B.oO=new A.B(0,-9.81,0)
B.oP=new A.B(0,0.34,0)
B.oQ=new A.B(1/0,1/0,1/0)
B.oR=new A.B(0,2.8,0)
B.oS=new A.B(2.75,3,2.75)
B.oT=new A.B(0.045,0.025,0.045)
B.oU=new A.B(0.1,0.05,0.1)
B.oV=new A.B(-1/0,-1/0,-1/0)
B.el=new A.cT(1,"normal")
B.c8=new A.cT(6,"tangent4")
B.oW=new A.cT(0,"position")
B.ca=new A.bc(B.oW,0,3)
B.cb=new A.bc(B.el,3,3)
B.es=new A.bc(B.c8,6,4)
B.em=new A.cT(2,"color")
B.ep=new A.bc(B.em,10,4)
B.en=new A.cT(4,"alpha")
B.eq=new A.bc(B.en,14,1)
B.eo=new A.cT(5,"uv0")
B.er=new A.bc(B.eo,15,2)
B.oX=new A.cT(7,"uv1")
B.p0=new A.bc(B.oX,17,2)
B.c9=new A.cT(8,"legacyMaterialEffect")
B.p3=new A.bc(B.c9,19,1)
B.l2=s([B.ca,B.cb,B.es,B.ep,B.eq,B.er,B.p0,B.p3],t.v5)
B.p4=new A.jd("surfaceV2WithUv1",20,B.l2)
B.oY=new A.bc(B.em,6,4)
B.oZ=new A.bc(B.en,10,1)
B.p_=new A.bc(B.eo,11,2)
B.p1=new A.bc(B.c9,13,1)
B.ko=s([B.ca,B.cb,B.oY,B.oZ,B.p_,B.p1],t.v5)
B.ai=new A.jd("compatibility14",14,B.ko)
B.p2=new A.bc(B.c9,17,1)
B.jV=s([B.ca,B.cb,B.es,B.ep,B.eq,B.er,B.p2],t.v5)
B.p5=new A.jd("surfaceV2",18,B.jV)
B.p6=new A.eD(0,"visitorAnswered")
B.et=new A.eD(1,"visitorIgnored")
B.p7=new A.eD(2,"entryVerified")
B.p8=new A.eD(3,"entryContradicted")
B.p9=new A.eD(4,"exposureAccepted")
B.pb=new A.dk(1,"malformedDay")
B.pc=new A.dk(2,"malformedTier")
B.eu=new A.dk(3,"missingTierLines")
B.ak=new A.dk(6,"invalidPhase")
B.pf=new A.bF(B.ak,"No reaction is due.")
B.pn=new A.bv(B.pf)
B.pk=new A.bF(B.ak,"The active visit cannot be chosen.")
B.po=new A.bv(B.pk)
B.pg=new A.bF(B.ak,"The active visit has no line to advance.")
B.pp=new A.bv(B.pg)
B.pe=new A.dk(5,"noActiveVisit")
B.ph=new A.bF(B.pe,"There is no active visit.")
B.ev=new A.bv(B.ph)
B.pj=new A.bF(B.ak,"A visit is already active.")
B.pq=new A.bv(B.pj)
B.pd=new A.dk(4,"noArrival")
B.pm=new A.bF(B.pd,"The authored arrival is missing.")
B.pr=new A.bv(B.pm)
B.pi=new A.bF(B.ak,"That answer is not offered.")
B.ps=new A.bv(B.pi)
B.pa=new A.dk(0,"missingCorpus")
B.pl=new A.bF(B.pa,"The authored visitor corpus is empty.")
B.pt=new A.bv(B.pl)
B.pu=new A.eH(0,"none")
B.pv=new A.eH(1,"splash")
B.ce=new A.eH(2,"settle")
B.pw=new A.eH(3,"melt")
B.ew=new A.eH(4,"rebound")
B.px=new A.fw(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.py=new A.fw(-2,8.8,4.5,0.9,1,!0,0.00005)
B.pz=new A.fw(0,0,0,1,1,!1,0)
B.pA=new A.fw(-5,18,5.5,0.65,1.35,!0,0.001)
B.pB=new A.fw(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.ex=new A.fz(1,"exact")
B.cf=new A.fz(2,"partial")
B.aY=new A.fz(3,"contradiction")
B.pC=new A.fz(0,"skipped")
B.pD=new A.fy(B.pC,B.ad)
B.pE=new A.fy(B.cf,B.ad)
B.pF=new A.jh(B.a3,!1)
B.pG=new A.jh(B.a3,!0)
B.ey=new A.jj(0,"horizontal")
B.pH=new A.jj(1,"vertical")
B.ez=new A.jl(0,"horizontal")
B.pI=new A.jl(1,"vertical")
B.aZ=new A.hI(0,"empty")
B.pW=new A.hI(1,"cpuReady")
B.b_=new A.hI(4,"released")})();(function staticFields(){$.vP=null
$.ck=A.c([],A.a2("x<L>"))
$.Bo=null
$.t6=0
$.t7=A.IK()
$.AL=null
$.AK=null
$.Dz=null
$.Dp=null
$.DH=null
$.y9=null
$.yi=null
$.Ak=null
$.wf=A.c([],A.a2("x<J<L>?>"))
$.hV=null
$.k1=null
$.k2=null
$.zU=!1
$.ar=B.C
$.BN=""
$.BO=null
$.BI=null
$.rF=null
$.dp=A.ak()
$.fI=A.ak()
$.ay=null
$.wt=A.ak()
$.CR=null
$.p=A.ak()
$.Cu=A.ak()
$.cW=A.ak()
$.am=A.ak()
$.R=A.ak()
$.bw=A.ak()
$.W=A.ak()
$.zC=A.ak()
$.ww=null
$.zP=null
$.bm=null
$.zG=!1
$.A3=!1
$.jZ=B.b3
$.dq=B.aF
$.xS=!1
$.Af=!1
$.CT=null
$.hR=null
$.ny=A.n(t.N,t.xe)
$.nm=null
$.CF=0
$.Do=0
$.zV=null
$.fL=!1
$.CS=!1
$.zW=0
$.eQ=0
$.zI="booting"
$.cj=0
$.eV=0
$.af="hall"
$.eP=A.ak()
$.hO=A.ak()
$.ci=A.ak()
$.CY=null
$.A4=0
$.A8=1.65
$.eT=null
$.bf=null
$.k5=!1
$.cA=A.ak()
$.hP=A.ak()
$.jW=A.ak()
$.nk=A.ak()
$.Ct=A.ak()
$.Cs=A.ak()
$.aC=A.ak()
$.fJ=A.ak()
$.jV=A.ak()
$.nj=A.ak()
$.jX=A.ak()
$.jY=A.ak()
$.fH=A.ak()
$.eO=A.ak()
$.hN=A.ak()
$.jU=A.ak()
$.jS=A.ak()
$.jT=A.ak()
$.aP=A.ak()
$.ni=A.ak()
$.be=A.ak()
$.xT=A.a_(t.S)
$.dr=A.c([],t.s)
$.zN=null
$.Df=!1
$.Cx=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"KG","DR",()=>A.yb("_$dart_dartClosure"))
s($,"KF","z0",()=>A.yb("_$dart_dartClosure_dartJSInterop"))
s($,"Lq","Eg",()=>A.c([new J.lc()],A.a2("x<j1>")))
s($,"KS","DT",()=>A.dV(A.uN({
toString:function(){return"$receiver$"}})))
s($,"KT","DU",()=>A.dV(A.uN({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"KU","DV",()=>A.dV(A.uN(null)))
s($,"KV","DW",()=>A.dV(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"KY","DZ",()=>A.dV(A.uN(void 0)))
s($,"KZ","E_",()=>A.dV(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"KX","DY",()=>A.dV(A.BK(null)))
s($,"KW","DX",()=>A.dV(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"L0","E1",()=>A.dV(A.BK(void 0)))
s($,"L_","E0",()=>A.dV(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"L2","Au",()=>A.GY())
s($,"L6","E6",()=>A.FM(4096))
s($,"L4","E4",()=>new A.wp().$0())
s($,"L5","E5",()=>new A.wo().$0())
s($,"L3","E3",()=>A.FL(A.S(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Lh","i4",()=>A.nE(B.oz))
s($,"KQ","At",()=>{A.G0()
return $.t6})
s($,"KC","DQ",()=>B.bT.ix())
s($,"KL","As",()=>A.lx(A.c([255,255,255,255],t.t)))
s($,"KI","Ap",()=>A.lx(A.c([128,128,255,255],t.t)))
s($,"KH","Ao",()=>A.lx(A.c([0,0,0,255],t.t)))
s($,"KJ","Aq",()=>A.lx(A.c([255,255,0,255],t.t)))
s($,"KK","Ar",()=>A.lx(A.c([255,255,255,255],t.t)))
s($,"Lw","Ek",()=>A.jc(0,1,0))
s($,"L1","E2",()=>A.GV(A.a_(t.N),0,0,A.jc(0,0,0)))
s($,"KP","DS",()=>{var q=A.rz(0),p=A.rz(0),o=A.rz(0)
return A.Gb(p,A.rz(0),q,o)})
s($,"Ls","Eh",()=>A.iX("^[a-z0-9][a-z0-9._-]*$"))
s($,"Lz","fQ",()=>{var q=$.BI
if(q==null){A.y5()
A.y5()
A.y5()
A.y5()
q=$.BI=new A.uB()}return q})
s($,"KM","z1",()=>A.z7(B.bb,B.cS,!0,B.bc,B.cU,B.cX,B.cY,B.d_,!0,!1,B.d1))
s($,"Lc","E7",()=>new A.oD())
r($,"Di","dt",()=>A.zn(null,null))
r($,"k0","kb",()=>A.hd(null,null))
r($,"zM","fP",()=>A.h3(null,null,!1,1,!1,!1,2,1))
r($,"zQ","cD",()=>$.z1())
s($,"Lo","Ee",()=>A.HS())
s($,"Lp","Ef",()=>new A.ta(A.n(t.N,t.i)))
s($,"Li","Ea",()=>new A.qd())
s($,"Lj","Eb",()=>new A.qo())
s($,"Lk","z3",()=>new A.qE(A.n(t.N,t.S)))
s($,"Le","E8",()=>A.dW().gaZ().h(0,"debugPause")==="1")
s($,"Lb","ka",()=>A.dW().gaZ().h(0,"automation")==="1")
s($,"L8","z2",()=>A.J0())
s($,"L7","Av",()=>$.z2()!=null)
s($,"L9","Aw",()=>$.ka()?A.dW().gaZ().h(0,"captureMantleId"):null)
s($,"La","Ax",()=>A.dW().gaZ().h(0,"captureMantleLit")==="1")
r($,"xO","e8",()=>A.jc(0,0,0))
r($,"xF","Ed",()=>A.jc(0,0,0))
r($,"xZ","nG",()=>A.jc(0,0,0))
s($,"Ld","Ay",()=>A.J1())
s($,"Lm","kc",()=>new A.px(A.jc(0,0,0)))
s($,"Ll","Ec",()=>new A.r2(new A.pb()))
s($,"Lf","cC",()=>new A.pQ(A.c([],t.s)))
s($,"Lr","bT",()=>A.BD())
s($,"Lu","Ei",()=>new A.uc(A.n(t.N,t.oZ)))
s($,"Lt","Az",()=>new A.tc(A.G3(520588),B.bl))
s($,"Lv","Ej",()=>new A.va())
s($,"Lg","E9",()=>new A.q9())
s($,"Ln","i5",()=>new A.rJ(B.bH))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ew,ArrayBuffer:A.hm,ArrayBufferView:A.iJ,DataView:A.lq,Float32Array:A.iG,Float64Array:A.lr,Int16Array:A.ls,Int32Array:A.lt,Int8Array:A.lu,Uint16Array:A.lv,Uint32Array:A.lw,Uint8ClampedArray:A.ff,CanvasPixelArray:A.ff,Uint8Array:A.iK})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bq.$nativeSuperclassTag="ArrayBufferView"
A.jt.$nativeSuperclassTag="ArrayBufferView"
A.ju.$nativeSuperclassTag="ArrayBufferView"
A.iH.$nativeSuperclassTag="ArrayBufferView"
A.jv.$nativeSuperclassTag="ArrayBufferView"
A.jw.$nativeSuperclassTag="ArrayBufferView"
A.iI.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.nD
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
