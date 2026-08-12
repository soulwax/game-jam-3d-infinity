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
if(a[b]!==s){A.GV(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xr(b)
return new s(c,this)}:function(){if(s===null)s=A.xr(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xr(a).prototype
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
xw(a,b,c,d){return{i:a,p:b,e:c,x:d}},
vr(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xu==null){A.Gx()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.yF("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tC
if(o==null)o=$.tC=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.GD(a)
if(p!=null)return p
if(typeof a=="function")return B.hX
s=Object.getPrototypeOf(a)
if(s==null)return B.dg
if(s===Object.prototype)return B.dg
if(typeof q=="function"){o=$.tC
if(o==null)o=$.tC=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bL,enumerable:false,writable:true,configurable:true})
return B.bL}return B.bL},
y9(a,b){if(a<0||a>4294967295)throw A.d(A.aV(a,0,4294967295,"length",null))
return J.yb(new Array(a),b)},
ya(a,b){if(a<0)throw A.d(A.z("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("t<0>"))},
kb(a,b){if(a<0)throw A.d(A.z("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("t<0>"))},
yb(a,b){var s=A.e(a,b.i("t<0>"))
s.$flags=1
return s},
Cj(a,b){var s=t.hO
return J.xM(s.a(a),s.a(b))},
yd(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Ck(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.yd(r))break;++b}return b},
Cl(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.yd(q))break}return b},
eo(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hF.prototype
return J.kd.prototype}if(typeof a=="string")return J.e0.prototype
if(a==null)return J.hG.prototype
if(typeof a=="boolean")return J.kc.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.fz.prototype
return a}if(a instanceof A.F)return a
return J.vr(a)},
aE(a){if(typeof a=="string")return J.e0.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.fz.prototype
return a}if(a instanceof A.F)return a
return J.vr(a)},
ca(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.fz.prototype
return a}if(a instanceof A.F)return a
return J.vr(a)},
Gt(a){if(typeof a=="number")return J.eF.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.e9.prototype
return a},
Am(a){if(typeof a=="number")return J.eF.prototype
if(typeof a=="string")return J.e0.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.e9.prototype
return a},
An(a){if(typeof a=="string")return J.e0.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.e9.prototype
return a},
Gu(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.du.prototype
if(typeof a=="symbol")return J.fA.prototype
if(typeof a=="bigint")return J.fz.prototype
return a}if(a instanceof A.F)return a
return J.vr(a)},
xL(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Am(a).a6(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eo(a).a1(a,b)},
aI(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.GC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).h(a,b)},
bM(a,b,c){return J.ca(a).k(a,b,c)},
hj(a,b){return J.ca(a).l(a,b)},
B7(a,b){return J.An(a).hB(a,b)},
we(a,b){return J.ca(a).N(a,b)},
B8(a,b,c){return J.Gu(a).hD(a,b,c)},
B9(a,b){return J.ca(a).cS(a,b)},
xM(a,b){return J.Am(a).G(a,b)},
xN(a,b){return J.aE(a).q(a,b)},
mz(a,b){return J.ca(a).a_(a,b)},
Ba(a,b){return J.ca(a).a9(a,b)},
xO(a){return J.ca(a).gR(a)},
aC(a){return J.eo(a).gI(a)},
mA(a){return J.aE(a).gO(a)},
Bb(a){return J.aE(a).gY(a)},
R(a){return J.ca(a).gu(a)},
cb(a){return J.aE(a).gt(a)},
fd(a){return J.eo(a).ga4(a)},
xP(a,b){return J.ca(a).a5(a,b)},
fe(a,b,c){return J.ca(a).cr(a,b,c)},
Bc(a,b){return J.aE(a).st(a,b)},
Bd(a,b){return J.ca(a).V(a,b)},
Be(a,b){return J.An(a).b1(a,b)},
wf(a,b){return J.Gt(a).pz(a,b)},
dg(a){return J.eo(a).p(a)},
Bf(a,b){return J.ca(a).f5(a,b)},
k9:function k9(){},
kc:function kc(){},
hG:function hG(){},
hI:function hI(){},
e1:function e1(){},
kA:function kA(){},
e9:function e9(){},
du:function du(){},
fz:function fz(){},
fA:function fA(){},
t:function t(a){this.$ti=a},
ka:function ka(){},
pk:function pk(a){this.$ti=a},
er:function er(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eF:function eF(){},
hF:function hF(){},
kd:function kd(){},
e0:function e0(){}},A={wm:function wm(){},
vm(){return $},
Bt(a,b,c){if(t.he.b(a))return new A.is(a,b.i("@<0>").K(c).i("is<1,2>"))
return new A.eu(a,b.i("@<0>").K(c).i("eu<1,2>"))},
yh(a){return new A.eG("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.eG("Field '"+a+"' has not been initialized.")},
Cn(a){return new A.eG("Field '"+a+"' has already been initialized.")},
vs(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ie(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
en(a,b,c){return a},
xv(a){var s,r
for(s=$.c9.length,r=0;r<s;++r)if(a===$.c9[r])return!0
return!1},
id(a,b,c,d){A.kI(b,"start")
if(c!=null){A.kI(c,"end")
if(b>c)A.k(A.aV(b,0,c,"start",null))}return new A.ic(a,b,c,d.i("ic<0>"))},
kk(a,b,c,d){if(t.he.b(a))return new A.dm(a,b,c.i("@<0>").K(d).i("dm<1,2>"))
return new A.cB(a,b,c.i("@<0>").K(d).i("cB<1,2>"))},
cz(){return new A.fL("No element")},
y8(){return new A.fL("Too many elements")},
kR(a,b,c,d,e){if(c-b<=32)A.CZ(a,b,c,d,e)
else A.CY(a,b,c,d,e)},
CZ(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aE(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.au()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
CY(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.W(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.W(a4+a5,2),f=g-j,e=g+j,d=J.aE(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.au()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a3(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.h(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.k(a3,o,d.h(a3,r))
d.k(a3,r,n)}++r}else for(;;){m=a6.$2(d.h(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.k(a3,o,d.h(a3,r))
k=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,n)
q=l
r=k
break}else{d.k(a3,o,d.h(a3,q))
d.k(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.k(a3,o,d.h(a3,r))
d.k(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,o,d.h(a3,r))
k=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,n)
r=k}else{d.k(a3,o,d.h(a3,q))
d.k(a3,q,n)}q=l
break}}a2=r-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
A.kR(a3,a4,r-2,a6,a7)
A.kR(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a3(a6.$2(d.h(a3,r),b),0))++r
while(J.a3(a6.$2(d.h(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.k(a3,o,d.h(a3,r))
d.k(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,o,d.h(a3,r))
k=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,n)
r=k}else{d.k(a3,o,d.h(a3,q))
d.k(a3,q,n)}q=l
break}}A.kR(a3,r,q,a6,a7)}else A.kR(a3,r,q,a6,a7)},
ec:function ec(){},
hn:function hn(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b){this.a=a
this.$ti=b},
is:function is(a,b){this.a=a
this.$ti=b},
iq:function iq(){},
tl:function tl(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.$ti=b},
eG:function eG(a){this.a=a},
dU:function dU(a){this.a=a},
qS:function qS(){},
S:function S(){},
a7:function a7(){},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.$ti=c},
dm:function dm(a,b,c){this.a=a
this.b=b
this.$ti=c},
hN:function hN(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hu:function hu(a){this.$ti=a},
cH:function cH(a,b){this.a=a
this.$ti=b},
il:function il(a,b){this.a=a
this.$ti=b},
ax:function ax(){},
d3:function d3(){},
fN:function fN(){},
i4:function i4(a,b){this.a=a
this.$ti=b},
iW:function iW(){},
b6(a,b,c){var s,r,q,p,o,n,m,l=A.at(a.ga0(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.v)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.at(a.gaE(),!0,c)
m=new A.a4(q,n,b.i("@<0>").K(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hp(A.aN(a,b,c),b.i("@<0>").K(c).i("hp<1,2>"))},
Bz(){throw A.d(A.aZ("Cannot modify unmodifiable Map"))},
BA(){throw A.d(A.aZ("Cannot modify constant Set"))},
AE(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
GC(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dg(a)
return s},
hY(a){var s,r=$.yp
if(r==null)r=$.yp=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dx(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eK(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bl(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kF(a){var s,r,q,p
if(a instanceof A.F)return A.bJ(A.bX(a),null)
s=J.eo(a)
if(s===B.hW||s===B.hY||t.qF.b(a)){r=B.c4(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bJ(A.bX(a),null)},
yq(a){var s,r,q
if(a==null||typeof a=="number"||A.bW(a))return J.dg(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dT)return a.p(0)
if(a instanceof A.bT)return a.hv(!0)
s=$.B2()
for(r=0;r<1;++r){q=s[r].pB(a)
if(q!=null)return q}return"Instance of '"+A.kF(a)+"'"},
CB(){return Date.now()},
CK(){var s,r
if($.qj!==0)return
$.qj=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qj=1e6
$.qk=new A.qi(r)},
CA(){if(!!self.location)return self.location.href
return null},
CL(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aA(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.c4(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aV(a,0,1114111,null,null))},
fF(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
CJ(a){var s=A.fF(a).getUTCFullYear()+0
return s},
CH(a){var s=A.fF(a).getUTCMonth()+1
return s},
CD(a){var s=A.fF(a).getUTCDate()+0
return s},
CE(a){var s=A.fF(a).getUTCHours()+0
return s},
CG(a){var s=A.fF(a).getUTCMinutes()+0
return s},
CI(a){var s=A.fF(a).getUTCSeconds()+0
return s},
CF(a){var s=A.fF(a).getUTCMilliseconds()+0
return s},
CC(a){var s=a.$thrownJsError
if(s==null)return null
return A.cK(s)},
yr(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aF(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
je(a){throw A.d(A.xq(a))},
f(a,b){if(a==null)J.cb(a)
throw A.d(A.vo(a,b))},
vo(a,b){var s,r="index"
if(!A.aM(b))return new A.cu(!0,b,r,null)
s=A.b(J.cb(a))
if(b<0||b>=s)return A.pa(b,s,a,r)
return A.yt(b,r)},
Gn(a,b,c){if(a>c)return A.aV(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aV(b,a,c,"end",null)
return new A.cu(!0,b,"end",null)},
xq(a){return new A.cu(!0,a,null,null)},
d(a){return A.aF(a,new Error())},
aF(a,b){var s
if(a==null)a=new A.dD()
b.dartException=a
s=A.GY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
GY(){return J.dg(this.dartException)},
k(a,b){throw A.aF(a,b==null?new Error():b)},
bL(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.EE(a,b,c),s)},
EE(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ih("'"+s+"': Cannot "+o+" "+l+k+n)},
v(a){throw A.d(A.aw(a))},
dE(a){var s,r,q,p,o,n
a=A.Ay(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rP(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rQ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yE(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
wn(a,b){var s=b==null,r=s?null:b.method
return new A.ke(a,r,s?null:b.receiver)},
ak(a){var s
if(a==null)return new A.pW(a)
if(a instanceof A.hv){s=a.a
return A.ep(a,s==null?A.f7(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ep(a,a.dartException)
return A.FW(a)},
ep(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
FW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.c4(r,16)&8191)===10)switch(q){case 438:return A.ep(a,A.wn(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.ep(a,new A.hU())}}if(a instanceof TypeError){p=$.AH()
o=$.AI()
n=$.AJ()
m=$.AK()
l=$.AN()
k=$.AO()
j=$.AM()
$.AL()
i=$.AQ()
h=$.AP()
g=p.aZ(s)
if(g!=null)return A.ep(a,A.wn(A.u(s),g))
else{g=o.aZ(s)
if(g!=null){g.method="call"
return A.ep(a,A.wn(A.u(s),g))}else if(n.aZ(s)!=null||m.aZ(s)!=null||l.aZ(s)!=null||k.aZ(s)!=null||j.aZ(s)!=null||m.aZ(s)!=null||i.aZ(s)!=null||h.aZ(s)!=null){A.u(s)
return A.ep(a,new A.hU())}}return A.ep(a,new A.l1(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.i9()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ep(a,new A.cu(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.i9()
return a},
cK(a){var s
if(a instanceof A.hv)return a.b
if(a==null)return new A.iK(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iK(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mw(a){if(a==null)return J.aC(a)
if(typeof a=="object")return A.hY(a)
return J.aC(a)},
Gh(a){if(typeof a=="number")return B.c.gI(a)
if(a instanceof A.m1)return A.hY(a)
if(a instanceof A.bT)return a.gI(a)
return A.mw(a)},
Ak(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Gs(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
F4(a,b,c,d,e,f){t.BO.a(a)
switch(A.b(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.fw("Unsupported number of arguments for wrapped closure"))},
he(a,b){var s=a.$identity
if(!!s)return s
s=A.Gi(a,b)
a.$identity=s
return s},
Gi(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.F4)},
By(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kV().constructor.prototype):Object.create(new A.fk(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xV(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Bu(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xV(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Bu(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Bp)}throw A.d("Error in functionType of tearoff")},
Bv(a,b,c,d){var s=A.xU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xV(a,b,c,d){if(c)return A.Bx(a,b,d)
return A.Bv(b.length,d,a,b)},
Bw(a,b,c,d){var s=A.xU,r=A.Bq
switch(b?-1:a){case 0:throw A.d(new A.kM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Bx(a,b,c){var s,r
if($.xS==null)$.xS=A.xR("interceptor")
if($.xT==null)$.xT=A.xR("receiver")
s=b.length
r=A.Bw(s,c,a,b)
return r},
xr(a){return A.By(a)},
Bp(a,b){return A.iO(v.typeUniverse,A.bX(a.a),b)},
xU(a){return a.a},
Bq(a){return a.b},
xR(a){var s,r,q,p=new A.fk("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.z("Field name "+a+" not found.",null))},
Ao(a){return v.getIsolateTag(a)},
AC(){return v.G},
HR(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
GD(a){var s,r,q,p,o,n=A.u($.Ap.$1(a)),m=$.vp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aD($.Af.$2(a,n))
if(q!=null){m=$.vp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.w_(s)
$.vp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vw[n]=s
return s}if(p==="-"){o=A.w_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Aw(a,s)
if(p==="*")throw A.d(A.yF(n))
if(v.leafTags[n]===true){o=A.w_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Aw(a,s)},
Aw(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xw(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
w_(a){return J.xw(a,!1,null,!!a.$ic_)},
GG(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.w_(s)
else return J.xw(s,c,null,null)},
Gx(){if(!0===$.xu)return
$.xu=!0
A.Gy()},
Gy(){var s,r,q,p,o,n,m,l
$.vp=Object.create(null)
$.vw=Object.create(null)
A.Gw()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ax.$1(o)
if(n!=null){m=A.GG(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Gw(){var s,r,q,p,o,n,m=B.ek()
m=A.hd(B.el,A.hd(B.em,A.hd(B.c5,A.hd(B.c5,A.hd(B.en,A.hd(B.eo,A.hd(B.ep(B.c4),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Ap=new A.vt(p)
$.Af=new A.vu(o)
$.Ax=new A.vv(n)},
hd(a,b){return a(b)||b},
DG(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
Gk(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ye(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a5("Illegal RegExp pattern ("+String(o)+")",a,null))},
GS(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Gq(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ay(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xy(a,b,c){var s=A.GT(a,b,c)
return s},
GT(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ay(b),"g"),A.Gq(c))},
aW:function aW(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
hp:function hp(a,b){this.a=a
this.$ti=b},
fq:function fq(){},
nz:function nz(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cR:function cR(a,b){this.a=a
this.$ti=b},
hq:function hq(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
qi:function qi(a){this.a=a},
i5:function i5(){},
rP:function rP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(){},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a){this.a=a},
pW:function pW(a){this.a=a},
hv:function hv(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a
this.b=null},
dT:function dT(){},
jw:function jw(){},
jx:function jx(){},
kY:function kY(){},
kV:function kV(){},
fk:function fk(a,b){this.a=a
this.b=b},
kM:function kM(a){this.a=a},
cg:function cg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pt:function pt(a){this.a=a},
pB:function pB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ad:function ad(a,b){this.a=a
this.$ti=b},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(a,b){this.a=a
this.$ti=b},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
J:function J(a,b){this.a=a
this.$ti=b},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hJ:function hJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vt:function vt(a){this.a=a},
vu:function vu(a){this.a=a},
vv:function vv(a){this.a=a},
bT:function bT(){},
f4:function f4(){},
f5:function f5(){},
fR:function fR(){},
hH:function hH(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lF:function lF(a){this.b=a},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ib:function ib(a,b){this.a=a
this.c=b},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
GV(a){throw A.aF(A.yh(a),new Error())},
h(){throw A.aF(A.a9(""),new Error())},
L(){throw A.aF(A.Cn(""),new Error())},
AD(){throw A.aF(A.yh(""),new Error())},
a8(){var s=new A.tm()
return s.b=s},
tm:function tm(){this.b=null},
zv(a,b,c){},
a1(a){return a},
Cu(a,b,c){A.zv(a,b,c)
return new Float32Array(a,b,c)},
Cv(a){return new Int8Array(a)},
Cw(a){return new Uint8Array(a)},
kw(a){return new Uint8Array(A.a1(a))},
dK(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.vo(b,a))},
Es(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.Gn(a,b,c))
return b},
e2:function e2(){},
fE:function fE(){},
hS:function hS(){},
tV:function tV(a){this.a=a},
kp:function kp(){},
b7:function b7(){},
hQ:function hQ(){},
hR:function hR(){},
hP:function hP(){},
kq:function kq(){},
kr:function kr(){},
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
eI:function eI(){},
hT:function hT(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
wB(a,b){var s=b.c
return s==null?b.c=A.iM(a,"bZ",[b.x]):s},
yw(a){var s=a.w
if(s===6||s===7)return A.yw(a.x)
return s===11||s===12},
CT(a){return a.as},
GH(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.tU(v.typeUniverse,a,!1)},
f9(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.f9(a1,s,a3,a4)
if(r===s)return a2
return A.z2(a1,r,!0)
case 7:s=a2.x
r=A.f9(a1,s,a3,a4)
if(r===s)return a2
return A.z1(a1,r,!0)
case 8:q=a2.y
p=A.hc(a1,q,a3,a4)
if(p===q)return a2
return A.iM(a1,a2.x,p)
case 9:o=a2.x
n=A.f9(a1,o,a3,a4)
m=a2.y
l=A.hc(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wM(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hc(a1,j,a3,a4)
if(i===j)return a2
return A.z3(a1,k,i)
case 11:h=a2.x
g=A.f9(a1,h,a3,a4)
f=a2.y
e=A.FS(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.z0(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hc(a1,d,a3,a4)
o=a2.x
n=A.f9(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wN(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.jn("Attempted to substitute unexpected RTI kind "+a0))}},
hc(a,b,c,d){var s,r,q,p,o=b.length,n=A.tZ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.f9(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
FT(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tZ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.f9(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
FS(a,b,c,d){var s,r=b.a,q=A.hc(a,r,c,d),p=b.b,o=A.hc(a,p,c,d),n=b.c,m=A.FT(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ly()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
xs(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Gv(s)
return a.$S()}return null},
Gz(a,b){var s
if(A.yw(b))if(a instanceof A.dT){s=A.xs(a)
if(s!=null)return s}return A.bX(a)},
bX(a){if(a instanceof A.F)return A.r(a)
if(Array.isArray(a))return A.G(a)
return A.x4(J.eo(a))},
G(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
r(a){var s=a.$ti
return s!=null?s:A.x4(a)},
x4(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.F1(a,s)},
F1(a,b){var s=a instanceof A.dT?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.DQ(v.typeUniverse,s.name)
b.$ccache=r
return r},
Gv(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tU(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mu(a){return A.dd(A.r(a))},
xm(a){var s
if(a instanceof A.bT)return a.fU()
s=a instanceof A.dT?A.xs(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fd(a).a
if(Array.isArray(a))return A.G(a)
return A.bX(a)},
dd(a){var s=a.r
return s==null?a.r=new A.m1(a):s},
Gr(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.f(q,0)
s=A.iO(v.typeUniverse,A.xm(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.z4(v.typeUniverse,s,A.xm(q[r]))}return A.iO(v.typeUniverse,s,a)},
cs(a){return A.dd(A.tU(v.typeUniverse,a,!1))},
F0(a){var s=this
s.b=A.FM(s)
return s.b(a)},
FM(a){var s,r,q,p,o
if(a===t.K)return A.Fa
if(A.fa(a))return A.Ff
s=a.w
if(s===6)return A.ES
if(s===1)return A.zI
if(s===7)return A.F5
r=A.FL(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fa)){a.f="$i"+q
if(q==="C")return A.F8
if(a===t.m)return A.F7
return A.Fe}}else if(s===10){p=A.Gk(a.x,a.y)
o=p==null?A.zI:p
return o==null?A.f7(o):o}return A.EQ},
FL(a){if(a.w===8){if(a===t.S)return A.aM
if(a===t.i||a===t.o)return A.F9
if(a===t.N)return A.Fd
if(a===t.y)return A.bW}return null},
F_(a){var s=this,r=A.EP
if(A.fa(s))r=A.Em
else if(s===t.K)r=A.f7
else if(A.hf(s)){r=A.ER
if(s===t.lo)r=A.zp
else if(s===t.D)r=A.aD
else if(s===t.k7)r=A.El
else if(s===t.s7)r=A.wT
else if(s===t.u6)r=A.zo
else if(s===t.uh)r=A.i}else if(s===t.S)r=A.b
else if(s===t.N)r=A.u
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.am
else if(s===t.i)r=A.bD
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
EQ(a){var s=this
if(a==null)return A.hf(s)
return A.At(v.typeUniverse,A.Gz(a,s),s)},
ES(a){if(a==null)return!0
return this.x.b(a)},
Fe(a){var s,r=this
if(a==null)return A.hf(r)
s=r.f
if(a instanceof A.F)return!!a[s]
return!!J.eo(a)[s]},
F8(a){var s,r=this
if(a==null)return A.hf(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.F)return!!a[s]
return!!J.eo(a)[s]},
F7(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.F)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zH(a){if(typeof a=="object"){if(a instanceof A.F)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
EP(a){var s=this
if(a==null){if(A.hf(s))return a}else if(s.b(a))return a
throw A.aF(A.zw(a,s),new Error())},
ER(a){var s=this
if(a==null||s.b(a))return a
throw A.aF(A.zw(a,s),new Error())},
zw(a,b){return new A.fW("TypeError: "+A.yT(a,A.bJ(b,null)))},
Ai(a,b,c,d){if(A.At(v.typeUniverse,a,b))return a
throw A.aF(A.DI("The type argument '"+A.bJ(a,null)+"' is not a subtype of the type variable bound '"+A.bJ(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yT(a,b){return A.jN(a)+": type '"+A.bJ(A.xm(a),null)+"' is not a subtype of type '"+b+"'"},
DI(a){return new A.fW("TypeError: "+a)},
cq(a,b){return new A.fW("TypeError: "+A.yT(a,b))},
F5(a){var s=this
return s.x.b(a)||A.wB(v.typeUniverse,s).b(a)},
Fa(a){return a!=null},
f7(a){if(a!=null)return a
throw A.aF(A.cq(a,"Object"),new Error())},
Ff(a){return!0},
Em(a){return a},
zI(a){return!1},
bW(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aF(A.cq(a,"bool"),new Error())},
El(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aF(A.cq(a,"bool?"),new Error())},
bD(a){if(typeof a=="number")return a
throw A.aF(A.cq(a,"double"),new Error())},
zo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cq(a,"double?"),new Error())},
aM(a){return typeof a=="number"&&Math.floor(a)===a},
b(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aF(A.cq(a,"int"),new Error())},
zp(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aF(A.cq(a,"int?"),new Error())},
F9(a){return typeof a=="number"},
am(a){if(typeof a=="number")return a
throw A.aF(A.cq(a,"num"),new Error())},
wT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cq(a,"num?"),new Error())},
Fd(a){return typeof a=="string"},
u(a){if(typeof a=="string")return a
throw A.aF(A.cq(a,"String"),new Error())},
aD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aF(A.cq(a,"String?"),new Error())},
c(a){if(A.zH(a))return a
throw A.aF(A.cq(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.zH(a))return a
throw A.aF(A.cq(a,"JSObject?"),new Error())},
A3(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bJ(a[q],b)
return s},
FA(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.A3(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bJ(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zz(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.f(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bJ(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bJ(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bJ(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bJ(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bJ(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bJ(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bJ(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bJ(a.x,b)+">"
if(l===8){p=A.FV(a.x)
o=a.y
return o.length>0?p+("<"+A.A3(o,b)+">"):p}if(l===10)return A.FA(a,b)
if(l===11)return A.zz(a,b,null)
if(l===12)return A.zz(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
FV(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
DR(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
DQ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tU(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iN(a,5,"#")
q=A.tZ(s)
for(p=0;p<s;++p)q[p]=r
o=A.iM(a,b,q)
n[b]=o
return o}else return m},
DP(a,b){return A.zc(a.tR,b)},
DO(a,b){return A.zc(a.eT,b)},
tU(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yY(A.yW(a,null,b,!1))
r.set(b,s)
return s},
iO(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yY(A.yW(a,b,c,!0))
q.set(c,r)
return r},
z4(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wM(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eh(a,b){b.a=A.F_
b.b=A.F0
return b},
iN(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cF(null,null)
s.w=b
s.as=c
r=A.eh(a,s)
a.eC.set(c,r)
return r},
z2(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.DM(a,b,r,c)
a.eC.set(r,s)
return s},
DM(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fa(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hf(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cF(null,null)
q.w=6
q.x=b
q.as=c
return A.eh(a,q)},
z1(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.DK(a,b,r,c)
a.eC.set(r,s)
return s},
DK(a,b,c,d){var s,r
if(d){s=b.w
if(A.fa(b)||b===t.K)return b
else if(s===1)return A.iM(a,"bZ",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cF(null,null)
r.w=7
r.x=b
r.as=c
return A.eh(a,r)},
DN(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cF(null,null)
s.w=13
s.x=b
s.as=q
r=A.eh(a,s)
a.eC.set(q,r)
return r},
iL(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
DJ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iM(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iL(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cF(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eh(a,r)
a.eC.set(p,q)
return q},
wM(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iL(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cF(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eh(a,o)
a.eC.set(q,n)
return n},
z3(a,b,c){var s,r,q="+"+(b+"("+A.iL(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cF(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eh(a,s)
a.eC.set(q,r)
return r},
z0(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iL(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iL(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.DJ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cF(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eh(a,p)
a.eC.set(r,o)
return o},
wN(a,b,c,d){var s,r=b.as+("<"+A.iL(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.DL(a,b,c,r,d)
a.eC.set(r,s)
return s},
DL(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tZ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.f9(a,b,r,0)
m=A.hc(a,c,r,0)
return A.wN(a,n,m,c!==m)}}l=new A.cF(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eh(a,l)},
yW(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yY(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.DB(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yX(a,r,l,k,!1)
else if(q===46)r=A.yX(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f3(a.u,a.e,k.pop()))
break
case 94:k.push(A.DN(a.u,k.pop()))
break
case 35:k.push(A.iN(a.u,5,"#"))
break
case 64:k.push(A.iN(a.u,2,"@"))
break
case 126:k.push(A.iN(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.DD(a,k)
break
case 38:A.DC(a,k)
break
case 63:p=a.u
k.push(A.z2(p,A.f3(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.z1(p,A.f3(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.DA(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yZ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.DF(a.u,a.e,o)
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
return A.f3(a.u,a.e,m)},
DB(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yX(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.DR(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.CT(o)+'"')
d.push(A.iO(s,o,n))}else d.push(p)
return m},
DD(a,b){var s,r=a.u,q=A.yV(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iM(r,p,q))
else{s=A.f3(r,a.e,p)
switch(s.w){case 11:b.push(A.wN(r,s,q,a.n))
break
default:b.push(A.wM(r,s,q))
break}}},
DA(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yV(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f3(p,a.e,o)
q=new A.ly()
q.a=s
q.b=n
q.c=m
b.push(A.z0(p,r,q))
return
case-4:b.push(A.z3(p,b.pop(),s))
return
default:throw A.d(A.jn("Unexpected state under `()`: "+A.w(o)))}},
DC(a,b){var s=b.pop()
if(0===s){b.push(A.iN(a.u,1,"0&"))
return}if(1===s){b.push(A.iN(a.u,4,"1&"))
return}throw A.d(A.jn("Unexpected extended operation "+A.w(s)))},
yV(a,b){var s=b.splice(a.p)
A.yZ(a.u,a.e,s)
a.p=b.pop()
return s},
f3(a,b,c){if(typeof c=="string")return A.iM(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.DE(a,b,c)}else return c},
yZ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f3(a,b,c[s])},
DF(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f3(a,b,c[s])},
DE(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.jn("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.jn("Bad index "+c+" for "+b.p(0)))},
At(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aR(a,b,null,c,null)
r.set(c,s)}return s},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fa(d))return!0
s=b.w
if(s===4)return!0
if(A.fa(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aR(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aR(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aR(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aR(a,b.x,c,d,e))return!1
return A.aR(a,A.wB(a,b),c,d,e)}if(s===6)return A.aR(a,p,c,d,e)&&A.aR(a,b.x,c,d,e)
if(q===7){if(A.aR(a,b,c,d.x,e))return!0
return A.aR(a,b,c,A.wB(a,d),e)}if(q===6)return A.aR(a,b,c,p,e)||A.aR(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.BO)return!0
o=s===10
if(o&&d===t.op)return!0
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
if(!A.aR(a,j,c,i,e)||!A.aR(a,i,e,j,c))return!1}return A.zG(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zG(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.F6(a,b,c,d,e)}if(o&&q===10)return A.Fb(a,b,c,d,e)
return!1},
zG(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aR(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aR(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aR(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aR(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aR(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
F6(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iO(a,b,r[o])
return A.zm(a,p,null,c,d.y,e)}return A.zm(a,b.y,null,c,d.y,e)},
zm(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aR(a,b[s],d,e[s],f))return!1
return!0},
Fb(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aR(a,r[s],c,q[s],e))return!1
return!0},
hf(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fa(a))if(s!==6)r=s===7&&A.hf(a.x)
return r},
fa(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
zc(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ly:function ly(){this.c=this.b=this.a=null},
m1:function m1(a){this.a=a},
lw:function lw(){},
fW:function fW(a){this.a=a},
Dt(){var s,r,q
if(self.scheduleImmediate!=null)return A.G8()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.he(new A.th(s),1)).observe(r,{childList:true})
return new A.tg(s,r,q)}else if(self.setImmediate!=null)return A.G9()
return A.Ga()},
Du(a){self.scheduleImmediate(A.he(new A.ti(t.O.a(a)),0))},
Dv(a){self.setImmediate(A.he(new A.tj(t.O.a(a)),0))},
Dw(a){A.wE(B.eP,t.O.a(a))},
wE(a,b){return A.DH(a.a/1000|0,b)},
DH(a,b){var s=new A.tS()
s.kP(a,b)
return s},
bH(a){return new A.lm(new A.aB($.ar,a.i("aB<0>")),a.i("lm<0>"))},
bG(a,b){a.$2(0,null)
b.b=!0
return b.a},
ap(a,b){A.Eo(a,b)},
bF(a,b){b.dV(a)},
bE(a,b){b.dW(A.ak(a),A.cK(a))},
Eo(a,b){var s,r,q=new A.u5(b),p=new A.u6(b)
if(a instanceof A.aB)a.ht(q,p,t.z)
else{s=t.z
if(a instanceof A.aB)a.f1(q,p,s)
else{r=new A.aB($.ar,t.hR)
r.a=8
r.c=a
r.ht(q,p,s)}}},
bK(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.jw(new A.vj(s),t.H,t.S,t.z)},
z_(a,b,c){return 0},
mR(a){var s
if(t.yt.b(a)){s=a.gbZ()
if(s!=null)return s}return B.ar},
wj(a){var s
a.a(null)
s=new A.aB($.ar,a.i("aB<0>"))
s.dt(null)
return s},
C3(a,b,c){var s=new A.aB($.ar,c.i("aB<0>"))
A.D3(a,new A.og(b,s,c))
return s},
oh(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aB($.ar,b.i("aB<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.oj(i,h,g,f)
try{for(n=J.R(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.f1(new A.oi(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cF(A.e([],b.i("t<0>")))
return n}i.a=A.cW(n,null,!1,b.i("0?"))}catch(l){p=A.ak(l)
o=A.cK(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.x5(m,k)
m=new A.b3(m,k==null?A.mR(m):k)
n.cB(m)
return n}else{i.d=p
i.c=o}}return f},
x5(a,b){if($.ar===B.y)return null
return null},
F2(a,b){if($.ar!==B.y)A.x5(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbZ()
if(b==null){A.yr(a,B.ar)
b=B.ar}}else b=B.ar
else if(t.yt.b(a))A.yr(a,b)
return new A.b3(a,b)},
ts(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.D_()
b.cB(new A.b3(new A.cu(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.h7(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c2()
b.cE(o.a)
A.eZ(b,p)
return}b.a^=2
A.mq(null,null,b.b,t.O.a(new A.tt(o,b)))},
eZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.xf(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eZ(d.a,c)
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
A.xf(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.tx(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tw(q,j).$0()}else if((c&2)!==0)new A.tv(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.aB){p=q.a.$ti
p=p.i("bZ<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cN(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.ts(c,f,!0)
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
FB(a,b){var s
if(t.nW.b(a))return b.jw(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.d(A.aq(a,"onError",u.c))},
Fp(){var s,r
for(s=$.h7;s!=null;s=$.h7){$.j7=null
r=s.b
$.h7=r
if(r==null)$.j6=null
s.a.$0()}},
FP(){$.x6=!0
try{A.Fp()}finally{$.j7=null
$.x6=!1
if($.h7!=null)$.xF().$1(A.Ag())}},
A7(a){var s=new A.ln(a),r=$.j6
if(r==null){$.h7=$.j6=s
if(!$.x6)$.xF().$1(A.Ag())}else $.j6=r.b=s},
FJ(a){var s,r,q,p=$.h7
if(p==null){A.A7(a)
$.j7=$.j6
return}s=new A.ln(a)
r=$.j7
if(r==null){s.b=p
$.h7=$.j7=s}else{q=r.b
s.b=q
$.j7=r.b=s
if(q==null)$.j6=s}},
Hd(a,b){A.en(a,"stream",t.K)
return new A.lX(b.i("lX<0>"))},
D3(a,b){var s=$.ar
if(s===B.y)return A.wE(a,t.O.a(b))
return A.wE(a,t.O.a(s.hF(b)))},
xf(a,b){A.FJ(new A.v8(a,b))},
A2(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
FH(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
FG(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
mq(a,b,c,d){t.O.a(d)
if(B.y!==c){d=c.hF(d)
d=d}A.A7(d)},
th:function th(a){this.a=a},
tg:function tg(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a){this.a=a},
tj:function tj(a){this.a=a},
tS:function tS(){},
tT:function tT(a,b){this.a=a
this.b=b},
lm:function lm(a,b){this.a=a
this.b=!1
this.$ti=b},
u5:function u5(a){this.a=a},
u6:function u6(a){this.a=a},
vj:function vj(a){this.a=a},
cJ:function cJ(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cp:function cp(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b){this.a=a
this.b=b},
og:function og(a,b,c){this.a=a
this.b=b
this.c=c},
oj:function oj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oi:function oi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lq:function lq(){},
io:function io(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aB:function aB(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tp:function tp(a,b){this.a=a
this.b=b},
tu:function tu(a,b){this.a=a
this.b=b},
tt:function tt(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
tq:function tq(a,b){this.a=a
this.b=b},
tx:function tx(a,b,c){this.a=a
this.b=b
this.c=c},
ty:function ty(a,b){this.a=a
this.b=b},
tz:function tz(a){this.a=a},
tw:function tw(a,b){this.a=a
this.b=b},
tv:function tv(a,b){this.a=a
this.b=b},
ln:function ln(a){this.a=a
this.b=null},
lX:function lX(a){this.$ti=a},
iV:function iV(){},
lP:function lP(){},
tQ:function tQ(a,b){this.a=a
this.b=b},
v8:function v8(a,b){this.a=a
this.b=b},
yU(a,b){var s=a[b]
return s===a?null:s},
wK(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wJ(){var s=Object.create(null)
A.wK(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
yj(a,b){return new A.cg(a.i("@<0>").K(b).i("cg<1,2>"))},
N(a,b,c){return b.i("@<0>").K(c).i("wo<1,2>").a(A.Ak(a,new A.cg(b.i("@<0>").K(c).i("cg<1,2>"))))},
q(a,b){return new A.cg(a.i("@<0>").K(b).i("cg<1,2>"))},
wp(a){return new A.co(a.i("co<0>"))},
a2(a){return new A.co(a.i("co<0>"))},
aL(a,b){return b.i("yk<0>").a(A.Gs(a,new A.co(b.i("co<0>"))))},
wL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ix(a,b,c){var s=new A.f2(a,b,c.i("f2<0>"))
s.c=a.e
return s},
br(a,b){var s=J.R(a)
if(s.m())return s.gn()
return null},
aN(a,b,c){var s=A.yj(b,c)
a.az(0,new A.pC(s,b,c))
return s},
fB(a,b,c){var s=A.yj(b,c)
s.L(0,a)
return s},
hL(a,b){var s,r=A.wp(b)
for(s=J.R(a);s.m();)r.l(0,b.a(s.gn()))
return r},
kj(a,b){var s=A.wp(b)
s.L(0,a)
return s},
Co(a,b){var s=t.hO
return J.xM(s.a(a),s.a(b))},
wq(a){var s,r
if(A.xv(a))return"{...}"
s=new A.bl("")
try{r={}
B.a.l($.c9,a)
s.a+="{"
r.a=!0
a.az(0,new A.pF(r,s))
s.a+="}"}finally{if(0>=$.c9.length)return A.f($.c9,-1)
$.c9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DS(){throw A.d(A.aZ("Cannot change an unmodifiable set"))},
iu:function iu(){},
tB:function tB(a){this.a=a},
iw:function iw(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f_:function f_(a,b){this.a=a
this.$ti=b},
iv:function iv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lE:function lE(a){this.a=a
this.c=this.b=null},
f2:function f2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
aa:function aa(){},
pE:function pE(a){this.a=a},
pF:function pF(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.$ti=b},
iz:function iz(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iP:function iP(){},
fC:function fC(){},
ea:function ea(a,b){this.a=a
this.$ti=b},
dz:function dz(){},
iJ:function iJ(){},
m2:function m2(){},
fO:function fO(a,b){this.a=a
this.$ti=b},
fX:function fX(){},
iQ:function iQ(){},
Ft(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ak(r)
q=A.a5(String(s),null,null)
throw A.d(q)}q=A.uv(p)
return q},
uv(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lC(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uv(a[s])
return a},
E8(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.AV()
else s=new Uint8Array(o)
for(r=J.aE(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
E7(a,b,c,d){var s=a?$.AU():$.AT()
if(s==null)return null
if(0===c&&d===b.length)return A.zb(s,b)
return A.zb(s,b.subarray(c,d))},
zb(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xQ(a,b,c,d,e,f){if(B.d.M(f,4)!==0)throw A.d(A.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a5("Invalid base64 padding, more than two '=' characters",a,b))},
yg(a,b,c){return new A.hK(a,b)},
ED(a){return a.B()},
Dx(a,b){return new A.tE(a,[],A.Gj())},
Dy(a,b,c){var s,r=new A.bl(""),q=A.Dx(r,b)
q.dc(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
E9(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lC:function lC(a,b){this.a=a
this.b=b
this.c=null},
tD:function tD(a){this.a=a},
lD:function lD(a){this.a=a},
tY:function tY(){},
tX:function tX(){},
jq:function jq(){},
nk:function nk(){},
ev:function ev(){},
jC:function jC(){},
jM:function jM(){},
hK:function hK(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(){},
pv:function pv(a){this.b=a},
pu:function pu(a){this.a=a},
tF:function tF(){},
tG:function tG(a,b){this.a=a
this.b=b},
tE:function tE(a,b,c){this.c=a
this.a=b
this.b=c},
l5:function l5(){},
rU:function rU(a){this.a=a},
tW:function tW(a){this.a=a
this.b=16
this.c=0},
As(a){var s=A.dx(a,null)
if(s!=null)return s
throw A.d(A.a5(a,null,null))},
Aj(a){var s=A.eK(a)
if(s!=null)return s
throw A.d(A.a5("Invalid double",a,null))},
BY(a,b){a=A.aF(a,new Error())
if(a==null)a=A.f7(a)
a.stack=b.p(0)
throw a},
cW(a,b,c,d){var s,r=c?J.ya(a,d):J.y9(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
at(a,b,c){var s,r=A.e([],c.i("t<0>"))
for(s=J.R(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("t<0>"))
s=A.e([],b.i("t<0>"))
for(r=J.R(a);r.m();)B.a.l(s,r.gn())
return s},
ai(a,b){var s=A.at(a,!1,b)
s.$flags=3
return s},
yC(a,b,c){var s,r
A.kI(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aV(c,b,null,"end",null))
if(s===0)return""}r=A.D1(a,b,c)
return r},
D1(a,b,c){var s=a.length
if(b>=s)return""
return A.CL(a,b,c==null||c>s?s:c)},
yu(a){return new A.hH(a,A.ye(a,!1,!0,!1,!1,""))},
wD(a,b,c){var s=J.R(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
d4(){var s,r,q=A.CA()
if(q==null)throw A.d(A.aZ("'Uri.base' is not supported"))
s=$.yI
if(s!=null&&q===$.yH)return s
r=A.D9(q)
$.yI=r
$.yH=q
return r},
D_(){return A.cK(new Error())},
BE(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xX(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jE(a){if(a>=10)return""+a
return"0"+a},
BX(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.aq(b,"name","No enum value with that name"))},
jN(a){if(typeof a=="number"||A.bW(a)||a==null)return J.dg(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yq(a)},
BZ(a,b){A.en(a,"error",t.K)
A.en(b,"stackTrace",t.l)
A.BY(a,b)},
jn(a){return new A.jm(a)},
z(a,b){return new A.cu(!1,null,b,a)},
aq(a,b,c){return new A.cu(!0,a,b,c)},
ys(a){var s=null
return new A.fG(s,s,!1,s,s,a)},
yt(a,b){return new A.fG(null,null,!0,a,b,"Value not in range")},
aV(a,b,c,d,e){return new A.fG(b,c,!0,a,d,"Invalid value")},
hZ(a,b,c){if(0>a||a>c)throw A.d(A.aV(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aV(b,a,c,"end",null))
return b}return c},
kI(a,b){if(a<0)throw A.d(A.aV(a,0,null,b,null))
return a},
pa(a,b,c,d){return new A.k6(b,!0,a,d,"Index out of range")},
aZ(a){return new A.ih(a)},
yF(a){return new A.l0(a)},
m(a){return new A.fL(a)},
aw(a){return new A.jz(a)},
fw(a){return new A.tn(a)},
a5(a,b,c){return new A.H(a,b,c)},
Ci(a,b,c){var s,r
if(A.xv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c9,a)
try{A.Fg(a,s)}finally{if(0>=$.c9.length)return A.f($.c9,-1)
$.c9.pop()}r=A.wD(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wl(a,b,c){var s,r
if(A.xv(a))return b+"..."+c
s=new A.bl(b)
B.a.l($.c9,a)
try{r=s
r.a=A.wD(r.a,a,", ")}finally{if(0>=$.c9.length)return A.f($.c9,-1)
$.c9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Fg(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.w(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wr(a,b,c){var s=A.q(b,c)
s.mC(a)
return s},
cD(a,b,c,d,e,f){var s
if(B.f===c){s=J.aC(a)
b=J.aC(b)
return A.ie(A.aQ(A.aQ($.hh(),s),b))}if(B.f===d){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
return A.ie(A.aQ(A.aQ(A.aQ($.hh(),s),b),c))}if(B.f===e){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
return A.ie(A.aQ(A.aQ(A.aQ(A.aQ($.hh(),s),b),c),d))}if(B.f===f){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
e=J.aC(e)
return A.ie(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ($.hh(),s),b),c),d),e))}s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
e=J.aC(e)
f=J.aC(f)
f=A.ie(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ($.hh(),s),b),c),d),e),f))
return f},
Cx(a){var s,r,q=$.hh()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)q=A.aQ(q,J.aC(a[r]))
return A.ie(q)},
qT(a,b){return new A.fO(A.kj(a,b),b.i("fO<0>"))},
D9(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yG(a4<a4?B.b.F(a5,0,a4):a5,5,a3).gjD()
else if(s===32)return A.yG(B.b.F(a5,5,a4),0,a3).gjD()}r=A.cW(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.A6(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.A6(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.af(a5,"\\",n))if(p>0)h=B.b.af(a5,"\\",p-1)||B.b.af(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.af(a5,"..",n)))h=m>n+2&&B.b.af(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.af(a5,"file",0)){if(p<=0){if(!B.b.af(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.F(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bV(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.af(a5,"http",0)){if(i&&o+3===n&&B.b.af(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bV(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.af(a5,"https",0)){if(i&&o+4===n&&B.b.af(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bV(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lT(a4<a5.length?B.b.F(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.E1(a5,0,q)
else{if(q===0)A.fY(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.E2(a5,c,p-1):""
a=A.DY(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dx(B.b.F(a5,i,n),a3)
d=A.E_(a0==null?A.k(A.a5("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.DZ(a5,n,m,a3,j,a!=null)
a2=m<l?A.E0(a5,m+1,l,a3):a3
return A.DT(j,b,a,d,a1,a2,l<a4?A.DX(a5,l+1,a4):a3)},
yK(a){var s=t.N
return B.a.bz(A.e(a.split("&"),t.s),A.q(s,s),new A.rT(B.c6),t.G)},
l4(a,b,c){throw A.d(A.a5("Illegal IPv4 address, "+a,b,c))},
D6(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l4("each part must be in the range 0..255",a,r)}A.l4("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l4(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bL(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l4(j,a,q)
p=l}A.l4("IPv4 address should contain exactly 4 parts",a,q)},
D7(a,b,c){var s
if(b===c)throw A.d(A.a5("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.D8(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.yJ(a,b,c)
return!0},
D8(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.H(n,a,q)
r=q
break}return new A.H("Unexpected character",a,q-1)}if(r-1===b)return new A.H(n,a,r)
return new A.H("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.H("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.f(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.H("Invalid IPvFuture address character",a,r)}},
yJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rS(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.f(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.f(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.f(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.D6(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.c4(l,8)
if(!(o<16))return A.f(s,o)
s[o]=e;++o
if(!(o<16))return A.f(s,o)
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
B.d2.k6(s,a0,16,s,a)
B.d2.o_(s,a,a0,0)}}return s},
DT(a,b,c,d,e,f,g){return new A.iR(a,b,c,d,e,f,g)},
z5(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fY(a,b,c){throw A.d(A.a5(c,a,b))},
E_(a,b){var s=A.z5(b)
if(a===s)return null
return a},
DY(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fY(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.DV(a,q,r)
if(o<r){n=o+1
p=A.za(a,B.b.af(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.D7(a,q,o)
l=B.b.F(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.d2(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.za(a,B.b.af(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yJ(a,b,o)
return"["+B.b.F(a,b,o)+p+"]"}}return A.E4(a,b,c)},
DV(a,b,c){var s=B.b.d2(a,"%",b)
return s>=b&&s<c?s:c},
za(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bl(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wP(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bl("")
l=h.a+=B.b.F(a,q,r)
if(m)n=B.b.F(a,r,r+3)
else if(n==="%")A.fY(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bl("")
if(q<r){h.a+=B.b.F(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.F(a,q,r)
if(h==null){h=new A.bl("")
m=h}else m=h
m.a+=i
l=A.wO(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.F(a,b,c)
if(q<c){i=B.b.F(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
E4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wP(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bl("")
k=B.b.F(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.F(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bl("")
if(q<r){p.a+=B.b.F(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fY(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.F(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bl("")
l=p}else l=p
l.a+=k
j=A.wO(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.F(a,b,c)
if(q<c){k=B.b.F(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
E1(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.z7(a.charCodeAt(b)))A.fY(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fY(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.F(a,b,c)
return A.DU(q?a.toLowerCase():a)},
DU(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
E2(a,b,c){return A.iS(a,b,c,16,!1,!1)},
DZ(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iS(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.U(q,"/"))q="/"+q
return A.E3(q,e,f)},
E3(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.U(a,"/")&&!B.b.U(a,"\\"))return A.E5(a,!s||c)
return A.E6(a)},
E0(a,b,c,d){return A.iS(a,b,c,256,!0,!1)},
DX(a,b,c){return A.iS(a,b,c,256,!0,!1)},
wP(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.vs(r)
o=A.vs(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aA(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.F(a,b,b+3).toUpperCase()
return null},
wO(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.f(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.d.mi(a,6*p)&63|q
if(!(o<r))return A.f(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.f(k,l)
if(!(m<r))return A.f(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.f(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.yC(s,0,null)},
iS(a,b,c,d,e,f){var s=A.z9(a,b,c,d,e,f)
return s==null?B.b.F(a,b,c):s},
z9(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wP(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fY(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wO(n)}if(o==null){o=new A.bl("")
k=o}else k=o
k.a=(k.a+=B.b.F(a,p,q))+l
if(typeof m!=="number")return A.je(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.F(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
z8(a){if(B.b.U(a,"."))return!0
return B.b.bO(a,"/.")!==-1},
E6(a){var s,r,q,p,o,n,m
if(!A.z8(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a5(s,"/")},
E5(a,b){var s,r,q,p,o,n
if(!A.z8(a))return!b?A.z6(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gX(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.z6(s[0]))}return B.a.a5(s,"/")},
z6(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.z7(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.F(a,0,s)+"%3A"+B.b.b1(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
DW(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.z("Invalid URL encoding",null))}}return r},
wQ(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.c6===d)return B.b.F(a,b,c)
else p=new A.dU(B.b.F(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.z("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.z("Truncated URI",null))
B.a.l(p,A.DW(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.lZ.n7(p)},
z7(a){var s=a|32
return 97<=s&&s<=122},
yG(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a5(k,a,r))}}if(q<0&&r>b)throw A.d(A.a5(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gX(j)
if(p!==44||r!==n+7||!B.b.af(a,"base64",n+1))throw A.d(A.a5("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.ei.ou(a,m,s)
else{l=A.z9(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bV(a,m,s,l)}return new A.rR(a,j,c)},
A6(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a},
lv:function lv(){},
ao:function ao(){},
jm:function jm(a){this.a=a},
dD:function dD(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
k6:function k6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ih:function ih(a){this.a=a},
l0:function l0(a){this.a=a},
fL:function fL(a){this.a=a},
jz:function jz(a){this.a=a},
kx:function kx(){},
i9:function i9(){},
tn:function tn(a){this.a=a},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
au:function au(){},
F:function F(){},
m_:function m_(){},
rB:function rB(){this.b=this.a=0},
bl:function bl(a){this.a=a},
rT:function rT(a){this.a=a},
rS:function rS(a){this.a=a},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rR:function rR(a,b,c){this.a=a
this.b=b
this.c=c},
lT:function lT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lr:function lr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pV:function pV(a){this.a=a},
zA(a){var s
if(typeof a=="function")throw A.d(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Er,a)
s[$.hg()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.d(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.u7,a)
s[$.hg()]=a
return s},
Er(a){return t.BO.a(a).$0()},
u7(a,b,c){t.BO.a(a)
if(A.b(c)>=1)return a.$1(b)
return a.$0()},
xt(a,b,c){return c.a(a[b])},
zB(a,b){return a[b]},
af(a,b,c,d){return d.a(a[b].apply(a,c))},
zr(a,b,c,d){return d.a(a[b](c))},
b2(a,b){var s=new A.aB($.ar,b.i("aB<0>")),r=new A.io(s,b.i("io<0>"))
a.then(A.he(new A.w0(r,b),1),A.he(new A.w1(r),1))
return s},
zN(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
de(a){if(A.zN(a))return a
return new A.vn(new A.iw(t.BT)).$1(a)},
w0:function w0(a,b){this.a=a
this.b=b},
w1:function w1(a){this.a=a},
vn:function vn(a){this.a=a},
CM(a){var s
if(a==null)s=B.aR
else{s=new A.ef()
s.c_(a)}return s},
lB:function lB(){},
ef:function ef(){this.b=this.a=0},
qo:function qo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qp:function qp(){},
eM:function eM(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
nx:function nx(a,b){this.a=a
this.b=b},
ny:function ny(){this.a=null
this.d=0},
kD:function kD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.at=l
_.ax=m
_.ay=n
_.ch=o
_.CW=p
_.cx=q
_.cy=r},
fn:function fn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jT:function jT(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ob:function ob(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
e_(a,b){return new A.k2(a,b)},
dy:function dy(){},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
GO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.v)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iH(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.V(f,new A.w2())
s=A.e([],t.cv)
for(r=A.id(f,0,A.en(b,"count",t.S),t.mn),q=r.$ti,r=new A.aU(r,r.gt(0),q.i("aU<a7.E>")),q=q.i("a7.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
nT:function nT(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bz:function bz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
w2:function w2(){},
pH(a,b,c,d,e,f,g,h,i,j){return new A.eH(c,a,h,g,f,e,i,j,b,!0)},
wu(a,b){if(!isFinite(b)||b<0||b>1)throw A.d(A.z("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
jl:function jl(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.z=f
_.ay=g
_.ch=h
_.dx=i
_.dy=j},
Cq(a){A:{break A}return a},
d5:function d5(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(){},
rW:function rW(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pK:function pK(){},
pL:function pL(){},
pM:function pM(){},
pY(a){var s,r=t.N,q=A.aL(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.L(0,A.aL(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.L(0,A.aL(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.L(0,A.aL(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.q(0,"dof"))q.L(0,A.aL(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pX(A.qT(q,r),s)},
pX:function pX(a,b){this.a=a
this.b=b},
pZ:function pZ(){},
qg:function qg(a){this.b=a},
kL:function kL(){this.a=null
this.c=0
this.d=!1},
ft:function ft(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c,d,e,f,g,h,i,j){var _=this
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
kW:function kW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
eP:function eP(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c){this.a=a
this.b=b
this.d=c},
od:function od(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Cp(){return new A.km(new A.cZ(new A.pI(),A.e([],t.Fy),A.e([],t.t),t.ou))},
km:function km(a){this.a=a},
pI:function pI(){},
A9(a){var s=4
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
case 3:s=A.k(A.aZ("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Ex(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.U[r]
if(A.A9(q.a)===b)s+=q.c}return s},
Cr(a){return new A.pN(a,new A.cZ(new A.pO(),A.e([],t.EM),A.e([],t.t),t.wm),A.q(t.S,t.jC))},
yn(a){var s
A:{s=a.byteLength
break A}return s},
l2:function l2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(){},
pP:function pP(){},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(a){this.a=a},
rI:function rI(a,b){this.a=a
this.b=b},
rJ:function rJ(){},
D2(a){var s=new A.kZ(a,new A.cZ(new A.rM(),A.e([],t.f2),A.e([],t.t),t.qq),A.q(t.S,t._))
s.d=s.aT($.xD())
s.e=s.aT($.xA())
s.f=s.aT($.xB())
s.r=s.aT($.xz())
s.w=s.aT($.xC())
return s},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
kZ:function kZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rM:function rM(){},
rO:function rO(){},
rN:function rN(){},
Gb(a){var s,r,q,p,o=A.e([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.v)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.eE(p,A.e([p],r)))
continue}return o},
eE:function eE(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
o6:function o6(){},
o7:function o7(a){this.a=a},
o4:function o4(a){this.a=a},
o5:function o5(a){this.a=a},
jS:function jS(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
oc:function oc(a,b){this.a=a
this.b=b
this.c=0},
Dz(){return new A.fQ()},
oa:function oa(a){this.a=a
this.b=null},
fQ:function fQ(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
ww(){return!0},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
q1:function q1(){},
q2:function q2(){},
cf:function cf(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
ho:function ho(a){this.b=a},
ql:function ql(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bk:function bk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qq:function qq(){},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qs:function qs(a,b){this.a=a
this.b=b},
qx:function qx(){},
qw:function qw(){},
qv:function qv(){},
qu:function qu(a){this.a=a},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qr:function qr(a,b){this.a=a
this.b=b},
CR(a){return new A.i0(a,new A.cZ(new A.qz(),A.e([],t.w_),A.e([],t.t),t.tc))},
lA:function lA(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b){this.a=a
this.b=b},
qz:function qz(){},
zx(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.EI(a,r,s,a.x.gn().a.b.a).b},
EI(a,b,c,d){var s,r,q,p,o,n=new A.uM(a),m=new A.uN(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Gf(b,k,B.aT,l,s.gpf(),new A.ux(m),new A.uy(m),new A.uz(a),new A.uE(a),new A.uF(a),new A.uG(m),new A.uH(m),s.gph(),new A.uI(a),s.gpl(),r.gpj(),n,s.gpn(),s.gpp(),new A.uJ(m,c),new A.uK(m),new A.uL(m),new A.uA(m),new A.uB(m),new A.uC(a),new A.uD(m),1,i,j,512)}else{p=new A.aO("sceneColor",B.t,j,i,1,0)
n=A.e([new A.lh(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.e_)
n.push(new A.hX(b,u.l,u.B,k,p,B.aT))
q=new A.jR(n)}a.r.toString
o=q.mU(B.P,new A.qq(),!1,new A.lM())
n=o.a.b
if(n.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.w(n)))
return new A.tR(q,o)},
EJ(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.K(b7.gjf(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a2(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ad()
p=p.gaB()
n=A.G(p)
B.a.l(s,new A.m0(new A.cx((r|1073741824)>>>0,0,"transient"),q,A.be(new A.U(p,n.i("M(1)").a(o.gaD()),n.i("U<1,M>")))))}p=b8.a
m=A.Gl(A.C2(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.v)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.k(A.e_(B.aA,n))
j=j.b
g=j.$ti
j.a2(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.W(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.v)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.k(A.e_(B.aA,n))
j=j.b
g=j.$ti
j.a2(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.W(n>0?n:h.e,3)}o=t.N
n=A.q(o,t.rL)
e=new A.oa(n)
e.mP("cull")
j=l-f
d=e.b
if(d==null)A.k(A.m("cull recorded outside an active frame"))
if(j<0)A.k(A.z("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.fs)
a=A.e([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.v)(s),++k){a2=s[k]
if(a2.gD().e===B.aU)B.a.l(a,new A.aP(new A.bN(a0.jz(a2.gD().c.a).c,a2.gaa().a),a2,a1))
else B.a.l(b,new A.aP(new A.bP(B.kh,a2.gD().b,a2.gD().a,a2.gaa().a),a2,g))}a3=new A.lx(A.Gb(A.GQ(b)),A.GP(a),p,b8.b,b8.c)
a4=new A.jH(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.v)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.k(A.aq(g,"passId",null))
e.b=g
n.cs(g,A.Al())
a6=A.q(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.v)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.k(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.k(A.m("resource is not in candidate: "+b1))
b3=new A.fl(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cs(b0,new A.uO(b3))}a5.an(new A.ju(a6,a4,a3))}return new A.to(e,m,j)},
yz(a){return new A.qO(a,new A.nx(new A.ny(),new A.kL()),new A.oc(A.e([],t.h1),B.h3),A.e([],t.Ft),B.bv,A.e([],t.ow),null)},
qI:function qI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=!1},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a){this.a=a},
uN:function uN(a,b){this.a=a
this.b=b},
uL:function uL(a){this.a=a},
uE:function uE(a){this.a=a},
uF:function uF(a){this.a=a},
uK:function uK(a){this.a=a},
uz:function uz(a){this.a=a},
uB:function uB(a){this.a=a},
uA:function uA(a){this.a=a},
uJ:function uJ(a,b){this.a=a
this.b=b},
ux:function ux(a){this.a=a},
uy:function uy(a){this.a=a},
uG:function uG(a){this.a=a},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
uD:function uD(a){this.a=a},
uC:function uC(a){this.a=a},
uO:function uO(a){this.a=a},
tR:function tR(a,b){this.a=a
this.b=b},
lM:function lM(){},
lx:function lx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qO:function qO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qP:function qP(){},
qQ:function qQ(){},
qR:function qR(){},
lK:function lK(a){this.b=a},
tA:function tA(){},
lQ:function lQ(){},
i8:function i8(a,b){this.a=a
this.b=b},
GQ(a){var s,r,q=A.K(a,t.E0)
B.a.V(q,new A.w7())
s=A.G(q)
r=s.i("U<1,c1>")
s=A.K(new A.U(q,s.i("c1(1)").a(new A.w8()),r),r.i("a7.E"))
s.$flags=1
return s},
GP(a){var s,r,q=A.K(a,t.EH)
B.a.V(q,new A.w5())
s=A.G(q)
r=s.i("U<1,c1>")
s=A.K(new A.U(q,s.i("c1(1)").a(new A.w6()),r),r.i("a7.E"))
s.$flags=1
return s},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
w7:function w7(){},
w8:function w8(){},
w5:function w5(){},
w6:function w6(){},
Gl(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.v)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.gf7()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.z("cullItems: non-finite world bounds for instance "+o.gaa().p(0),null))
if(a.py(o.gf7())===B.ck){++q
continue}B.a.l(l,o)}return new A.nN(l,new A.nO(q))},
nO:function nO(a){this.b=a},
nN:function nN(a,b){this.a=a
this.b=b},
be(a){var s,r,q,p,o,n,m,l,k
for(s=J.R(a),r=B.m1,q=B.m2,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.M(m,k,Math.min(r.c,o))
q=new A.M(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.z("Aabb.fromPoints requires at least one point",null))
return new A.jh(r,q)},
jh:function jh(a,b){this.a=a
this.b=b},
C2(a){var s,r,q,p,o,n,m=a.a,l=new A.of(),k=m.length
if(3>=k)return A.f(m,3)
s=m[3]
r=m[0]
if(7>=k)return A.f(m,7)
q=m[7]
p=m[4]
if(11>=k)return A.f(m,11)
o=m[11]
n=m[8]
if(15>=k)return A.f(m,15)
return new A.oe(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eJ:function eJ(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
oe:function oe(a){this.a=a},
of:function of(){},
yl(a){if(a.length!==16)throw A.d(A.z("Mat4.fromColumnMajor requires 16 values",null))
return new A.dv(new Float32Array(A.a1(a)))},
ws(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dv(q)},
ym(a,b,c){var s=b.gac(),r=c.bs(s).gac(),q=s.bs(r),p=new Float32Array(16)
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
p[12]=-r.cd(a)
p[13]=-q.cd(a)
p[14]=s.cd(a)
p[15]=1
return new A.dv(p)},
dv:function dv(a){this.a=a},
pG:function pG(){},
kH:function kH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l_:function l_(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lo:function lo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jt:function jt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lp:function lp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jG:function jG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
ls:function ls(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ir:function ir(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lt:function lt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jK:function jK(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lu:function lu(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
k0:function k0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lz:function lz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.b=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
bu(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aO(a.a,a.b,b,c,s,r)},
wx:function wx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
lN:function lN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kG:function kG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lO:function lO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yB(a){var s=a.c,r=Math.abs(s.a)<0.99?B.m0:B.a4,q=A.ym(a.b,s,r)
return new A.eS(A.ws(1,a.f,B.c.E(a.w*2,0.1,3),0.05).a7(0,q))},
eS:function eS(a){this.a=a},
kP:function kP(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lR:function lR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Gf(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.d(A.aq(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bu(B.bx,e5,e4,e3,a8)
k=A.bu(B.bx.jk(),e5,e4,a8,a8)
A.bu(B.l_,e5,e4,a8,a8)
j=A.bu(B.kX,e5,e4,a8,a8)
i=A.bu(B.kS,e6,e6,a8,a8)
h=A.bu(B.kT,b6,m,a8,a8)
g=A.bu(B.kU,b6,m,a8,a8)
f=A.bu(B.kY,b6,m,a8,a8)
e=A.bu(B.kZ,b6,m,a8,a8)
d=$.AF()
c=e3>1
b=A.bu(d,e5,e4,a8,c?2:1)
d=A.bu(B.kP,b6,m,a8,a8)
a=A.bu(B.kQ,b6,m,a8,a8)
a0=A.bu(B.kR,e5,e4,a8,a8)
a1=A.bu(B.kV,e5,e4,a8,a8)
a2=A.bu(B.l0,e5,e4,a8,a8)
a3=A.bu(B.kW,e5,e4,a8,a8)
a4=c?new A.ko(b8,l,k):a8
b5.a=null
a5=A.yB(B.lE)
a6=t.e_
a7=A.e([],a6)
k=c?k:l
if(r){B.a.L(a7,A.e([new A.hm(b7,a9,b0,b8,b1,b1,B.dQ,!0,k,f,d6,b6,m),new A.hm(b7,a9,b0,b8,b2,b2,B.mH,!1,f,e,c2,b6,m),new A.jt(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.L(a7,A.e([new A.hs(b7,a9,b0,b8,b3,b3,B.dR,k,d,d6,b6,m),new A.hs(b7,a9,b0,b8,b4,b4,B.mI,d,a,c7,b6,m),new A.jK(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.k0(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kG(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.l6(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.jG(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kT(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kS(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kP(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.vk(b5),i))
j.push(new A.kQ(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vl(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.L(j,a7)
j.push(new A.hX(b7,a9,u.B,b8,k,b9))
return new A.jR(j)},
vk:function vk(a){this.a=a},
vl:function vl(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lS:function lS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kT:function kT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lV:function lV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kS:function kS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lU:function lU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l6:function l6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m3:function m3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lh:function lh(a,b,c,d,e){var _=this
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
nv:function nv(){},
kO(a,b){return new A.i7(a,b)},
jX:function jX(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eB:function eB(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hA:function hA(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
A:function A(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
oz:function oz(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
oA:function oA(){},
oB:function oB(){},
fT:function fT(a,b){this.a=a
this.b=b},
eg:function eg(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
y_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fu(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jr:function jr(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
jF:function jF(a,b){this.a=a
this.b=b},
fu:function fu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b9:function b9(a,b){this.a=a
this.b=b},
tc:function tc(){this.a=null},
De(a){var s=new A.lf(a,B.h,new A.tc(),A.Dp(a))
s.kO(a)
return s},
Dp(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a2(t.N)
s=A.a2(t.N)
r=J.R(t.a.b(q)?q:new A.aT(q,A.G(q).i("aT<1,j>")))
while(r.m())s.l(0,r.gn())
return s},
c6(a,b){var s,r
if(a.b!==B.h)A.k(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.b(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.b(s.drawingBufferWidth),A.b(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.b(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
Dk(a,b){var s
if(a.b!==B.h)A.k(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.b(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.z("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
Dj(a,b,c){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.b(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.b(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Di(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.b(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Dh(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yN(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.b(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.b(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.b(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
Df(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bo(a,b){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=a.f
r=s.nC(b)
if(r.a===0)return
if(r.q(0,B.bC)){q=v.G
p=a.a
if(b.a)p.enable(A.b(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.b(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bD))a.a.depthFunc(A.Di(a,b.b))
if(r.q(0,B.bE))a.a.depthMask(b.c)
if(r.q(0,B.bI)){q=v.G
p=a.a
if(b.w)p.enable(A.b(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.b(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bJ))a.a.cullFace(A.Dh(a,b.x))
if(r.q(0,B.dC)){q=v.G.WebGL2RenderingContext
q=A.b(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bF)){q=v.G
p=a.a
if(b.d)p.enable(A.b(q.WebGL2RenderingContext.BLEND))
else p.disable(A.b(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bG))a.a.blendFunc(A.yN(a,b.e),A.yN(a,b.f))
if(r.q(0,B.bH))a.a.blendEquation(A.Df(a,b.r))
if(r.q(0,B.dA))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dB)){q=v.G.WebGL2RenderingContext
a.a.disable(A.b(q.SCISSOR_TEST))}s.a=b},
Dg(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.b(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.b(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.b(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dG(a,b,c,d,e,f){var s
if(a.b!==B.h)A.k(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.Dg(a,b))},
cn(a,b){var s
if(a.b!==B.h)A.k(A.m(u.k))
s=A.c(b.a)
a.a.useProgram(s)
a.e=s},
x(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.k(A.m(u.k))
s=a.e
if(s==null)throw A.d(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bD(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.f(p,0)
n=p[0]
if(1>=o)return A.f(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.f(p,0)
n=p[0]
if(1>=o)return A.f(p,1)
m=p[1]
if(2>=o)return A.f(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.f(p,0)
n=p[0]
if(1>=o)return A.f(p,1)
m=p[1]
if(2>=o)return A.f(p,2)
l=p[2]
if(3>=o)return A.f(p,3)
A.af(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.b(c.b))
break}},
bB(a,b){if(a.b!==B.h)A.k(A.m(u.k))
a.a.bindVertexArray(A.c(b.a))},
aG(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.k(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.b(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iU){p=s.d>1?A.b(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.b(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iT){o=s.b
if(o!=null){r.bindTexture(A.b(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.b(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Dl(a,b,c){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=A.c(b.a)
r=a.a
q=v.G
r.bindBuffer(A.b(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.b(p.ELEMENT_ARRAY_BUFFER),c,A.b(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
Dm(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yQ(a,b){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cw?A.b(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.b(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Dm(a,b.b))
return new A.dI(r)},
yO(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yP(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
wG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.k(A.m(u.k))
s=a.a
r=A.i(s.createTexture())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.b(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.b(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.af(s,"texStorage3D",[n,1,A.b(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.af(s,"texStorage2D",[n,1,A.b(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yO(a,b.e))
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yO(a,b.f))
p=b.r
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yP(a,p))
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yP(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.h5(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.k(A.aq(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dI(new A.iU(r,l,k,q,!1))},
wH(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.k(A.m(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.d(A.z("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.z("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.b(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.b(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.af(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.b(n.WebGL2RenderingContext.RGBA),A.b(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.af(l,"texSubImage2D",[m,0,0,0,q,p,A.b(n.WebGL2RenderingContext.RGBA),A.b(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
lg(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
Do(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.k(A.m(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.z("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.i(r.createFramebuffer())
if(q==null)throw A.d(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aW
if(n&&!a1.e)throw A.d(A.z("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cy||o===B.hj
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.e([A.b(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.b(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.b(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.af(r,c,[A.b(p.WebGL2RenderingContext.RENDERBUFFER),o,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.b(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.af(r,c,[A.b(p.WebGL2RenderingContext.RENDERBUFFER),o,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.b(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.e([A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.i(r.createTexture())
r.bindTexture(A.b(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.af(r,b,[A.b(p.WebGL2RenderingContext.TEXTURE_2D),1,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.i(r.createTexture())
r.bindTexture(A.b(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.af(r,b,[A.b(p.WebGL2RenderingContext.TEXTURE_2D),1,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.b(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.e([A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.b(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.af(r,c,[A.b(p.WebGL2RenderingContext.RENDERBUFFER),o,A.b(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.b(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.i(r.createTexture())
r.bindTexture(A.b(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.af(r,b,[A.b(p.WebGL2RenderingContext.TEXTURE_2D),1,A.b(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(p.WebGL2RenderingContext.NEAREST))
A.af(r,a,[A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.b(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.b(r.checkFramebufferStatus(A.b(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.b(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wI(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dI(new A.iT(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wI(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d8(a){var s
if(a.b!==B.h)A.k(A.m(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dI(s)},
yR(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.d(A.kO(b===A.xt(A.zB(A.AC(),r),q,t.S)?B.dv:B.dw,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.de(p.getShaderParameter(o,A.b(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aD(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.kO(b===A.xt(A.zB(A.AC(),r),q,t.S)?B.dv:B.dw,s))}return o},
Dn(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.k(A.m(u.k))
q=v.G
s=A.yR(a,A.b(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yR(a,A.b(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.lq)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.de(o.getProgramParameter(n,A.b(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aD(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kO(B.dx,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.v)(c),++l){k=c[l]
if(A.b(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kO(B.dy,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kO(B.dy,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dI(n)},
dI:function dI(a){this.a=a},
iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iT:function iT(a,b,c,d,e,f,g,h,i,j){var _=this
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
m5:function m5(a){this.a=a
this.b=!1},
lf:function lf(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
ta:function ta(a){this.a=a},
tb:function tb(a){this.a=a},
u_:function u_(){},
m4:function m4(){},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4(a,a0){var s=0,r=A.bH(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$n4=A.bK(function(a1,a2){if(a1===1)return A.bE(a2,r)
for(;;)switch(s){case 0:p=A.c(new v.G.AudioContext())
o=t.m
n=A.q(t.N,o)
m=A.c(p.createGain())
l=A.c(p.createGain())
k=A.c(p.createGain())
j=A.c(p.createGain())
i=A.c(p.createGain())
h=A.c(p.createGain())
g=A.c(p.createGain())
f=A.c(p.createGain())
e=A.c(p.createGain())
d=A.c(p.createGain())
c=A.c(p.createConvolver())
b=new A.jo(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aR,A.q(o,t.jS))
b.kv(p,a0)
p=A.r(a).i("J<1,2>")
s=3
return A.ap(A.oh(A.kk(new A.J(a,p),p.i("bZ<au>(p.E)").a(new A.n5(b)),p.i("p.E"),t.ls),t.c),$async$n4)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.lz():n
c.buffer=p
q=b
s=1
break
case 1:return A.bF(q,r)}})
return A.bG($async$n4,r)},
jo:function jo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fV:function fV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Bl(a,b,c,d,e,f,g){var s=new A.mW(c,f,b,g,new A.a(d.a,d.b,d.c),e,a)
s.kx(a,b,c,d,0,e,f,g)
return s},
Bh(a,b){var s=new A.mE(b)
s.ku(a,b)
return s},
Bk(a){var s,r,q,p,o,n=t.z
n=A.q(n,n)
for(s=new A.J(a,A.r(a).i("J<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.at(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mS(A.b6(n,r,t.a))
n.kw(a)
return n},
FO(a,b){var s,r,q,p=b>>>0
for(s=new A.dU(a),r=t.sU,s=new A.aU(s,s.gt(0),r.i("aU<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.Aq(p,q==null?r.a(q):q)}return p&2147483647},
jp:function jp(a,b){this.a=a
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
hk:function hk(){},
mG:function mG(){},
mH:function mH(){},
mS:function mS(a){this.a=a},
mU:function mU(){},
mV:function mV(){},
mT:function mT(){},
wh:function wh(a,b,c,d,e,f){var _=this
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
im:function im(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
nt:function nt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=1
_.w=0},
o9:function o9(a){this.a=a},
kX:function kX(a,b,c,d,e,f,g,h,i,j){var _=this
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
ox:function ox(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
oy:function oy(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=0
this.$ti=b},
k7:function k7(a,b,c,d,e,f,g,h,i,j){var _=this
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
pc:function pc(a){this.a=a},
Cc(a){var s,r,q,p,o=t.N,n=A.q(o,t.a)
for(s=new A.J(a,A.r(a).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.pb(n)},
pb:function pb(a){this.a=a},
pf:function pf(){var _=this
_.c=_.b=_.a=!1
_.d=0},
nP:function nP(){this.b=this.a=0},
pD:function pD(a){this.a=a
this.b=0
this.e=!1},
kl:function kl(a){this.a=a},
wt(a,b,c,d){return new A.hO(a,b,c,d)},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pJ:function pJ(a,b){this.a=a
this.b=b},
ia(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bL(a)
s=a.length
if(!(b<s))return A.f(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.f(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.f(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.f(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.f(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.f(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.f(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.f(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.f(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.f(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.f(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.f(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.f(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.f(a,r)
a[r]=l
return b+14},
d1:function d1(a){this.a=a
this.b=0},
qy:function qy(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
qH:function qH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
CS(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.yx(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.kb(800,t.cX)
for(s=0;s<800;++s)g[s]=new A.lJ(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0))
r=t.S
q=A.cW(800,0,!1,r)
p=new Float32Array(8064)
o=J.kb(4000,t.fo)
for(s=0;s<4000;++s)o[s]=new A.lH(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),0,1,0,0,0)
n=A.cW(4000,0,!1,r)
m=new A.a(0.3,0.7,-0.5).gac()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.vj
k=new A.qA(a,new A.ox(a,A.q(t.m,r)),b,c,A.a2(t.N),j,i,h,g,q,p,A.q(r,t.kA),o,n,m,B.iG,new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),new A.kl(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.kH(a,b,c)
return k},
qA:function qA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aU=a
_.b6=b
_.bx=c
_.by=d
_.ew=_.iS=1
_.e7=_.e6=_.hQ=_.hP=_.hO=_.hN=_.j5=_.j4=_.eE=_.eD=_.eC=_.eB=_.eA=_.ez=_.ey=_.j3=_.j2=_.j1=_.ex=_.j0=_.j_=_.iZ=_.iY=_.iX=_.iW=_.iV=_.iU=_.iT=_.aw=$
_.cV=null
_.hR=e
_.ij=_.ii=_.ih=_.ig=_.ie=_.ic=_.ib=_.ia=_.i9=_.i8=_.i7=_.i6=_.i5=_.i4=_.i3=_.i2=_.i1=_.i0=_.i_=_.hZ=_.hY=_.hX=_.hW=_.hV=_.hU=_.hT=_.hS=_.cW=$
_.cX=0
_.ee=_.ed=_.ec=_.eb=_.ea=_.e9=_.e8=$
_.d0=_.d_=_.cZ=_.cY=_.ce=_.bw=null
_.cf=$
_.im=_.il=_.ik=!1
_.nT=1
_.ef=f
_.eg=g
_.nU=h
_.io=i
_.d1=0
_.ip=j
_.nV=k
_.eh=0
_.ei=l
_.nW=1
_.ej=!1
_.cg=0
_.ek=m
_.ci=0
_.iq=n
_.ir=o
_.iu=_.it=_.is=1
_.iv=0.4
_.el=p
_.iw=q
_.em=r
_.en=s
_.eo=a0
_.ix=_.es=_.er=_.eq=_.ep=0
_.iy=null
_.iz=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.eu=_.iM=_.iL=_.nZ=_.nY=_.nX=_.iK=_.iJ=_.iI=_.iH=_.iG=_.iF=_.iE=_.iD=_.iC=_.iB=_.iA=_.cj=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.iN=_.ev=$
_.iO=a7
_.iP=a8
_.iQ=a9
_.iR=b0},
zP(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.aj(0,c).bs(f.aj(0,c)).gac(),r=A.vd(g)
return A.zX(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
jc(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bL(a)
s=a.length
if(!(b<s))return A.f(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.f(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.f(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.f(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.f(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.f(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.f(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.f(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.f(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.f(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.f(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.f(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.f(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.f(a,r)
a[r]=l
return b+14},
zX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.jc(a,A.jc(a,A.jc(a,A.jc(a,A.jc(a,A.jc(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
vd(a){return new A.aj((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
EX(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.c.aW(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a8(),i=A.a8(),h=A.a8()
switch(B.d.M(o,6)){case 0:j.b=c
i.b=k
h.b=m
break
case 1:j.b=l
i.b=c
h.b=m
break
case 2:j.b=m
i.b=c
h.b=k
break
case 3:j.b=m
i.b=l
h.b=c
break
case 4:j.b=k
i.b=m
h.b=c
break
default:j.b=c
i.b=m
h.b=l}s=j.dO()
if(typeof s!=="number")return s.a7()
s=B.c.aN(s*255)
r=i.dO()
if(typeof r!=="number")return r.a7()
r=B.c.aN(r*255)
q=h.dO()
if(typeof q!=="number")return q.a7()
return new A.aj(s,r,B.c.aN(q*255))},
it:function it(){},
lW:function lW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
lJ:function lJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lH:function lH(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qB:function qB(){},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
te:function te(){},
rw:function rw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
ii(a,b,c){return new A.a(a,b,c)},
yL(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.a(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
a:function a(a,b,c){this.a=a
this.b=b
this.c=c},
Dq(a,b,c,d){return new A.li(d,b,c,a)},
Ds(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.AR()
s=a.d
r=A.tf(s,0)
q=A.tf(s,1)
p=A.tf(s,2)
o=A.tf(s,3)
s=t.N
n=A.a2(s)
m=a.e
if(A.bC(m,0))n.l(0,"GamepadA")
if(A.bC(m,1))n.l(0,"GamepadB")
if(A.bC(m,2))n.l(0,"GamepadX")
if(A.bC(m,3))n.l(0,"GamepadY")
if(A.bC(m,4))n.l(0,"GamepadLB")
if(A.bC(m,5))n.l(0,"GamepadRB")
if(A.bC(m,6))n.l(0,"GamepadLT")
if(A.bC(m,7))n.l(0,"GamepadRT")
if(A.bC(m,8))n.l(0,"GamepadView")
if(A.bC(m,9))n.l(0,"GamepadMenu")
if(A.bC(m,10))n.l(0,"GamepadLStick")
if(A.bC(m,11))n.l(0,"GamepadRStick")
if(A.bC(m,12))n.l(0,h)
if(A.bC(m,13))n.l(0,g)
if(A.bC(m,14))n.l(0,f)
if(A.bC(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.a(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gac():i
return new A.li(m,p,o,A.qT(n,s))},
tf(a,b){return A.Dr(b<a.length?a[b]:0)},
bC(a,b){return b<a.length&&a[b]>=0.5},
Dr(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.E((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gcm(a)?-s:s},
kU:function kU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
li:function li(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nm:function nm(a){this.a=a},
BI(a,b,c){var s=new A.jL(a,c,null,b)
s.kB(a,null,null,b,c)
return s},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
BV(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.br(new A.I(B.j0,t.e2.a(new A.o1(a)),t.vL),t.yW)
return s==null?null:new A.fv(s)},
Cs(a,b){var s=A.e([],t.s)
switch(b.a){case 0:A.wv(s,a,B.iA)
break
case 1:A.wv(s,a,B.iB)
break
case 2:A.wv(s,a,B.j3)
break}return s},
wv(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.T(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
BU(a){if(a.a!==21)return null
if(a.e)return B.eS
if(!a.d&&a.b>=0.6&&a.c>=3)return B.eT
return B.eR},
cd:function cd(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fv:function fv(a){this.a=a},
o1:function o1(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
Cz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kB(s,new A.a(o,n,m),q,p,l,j)
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
FR(a){var s,r,q,p=A.q(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.f5)
p.k(0,q,r.b)}return p},
me(a){var s,r,q,p,o,n=a.ga0().bW(0)
B.a.Z(n)
s=t.z
r=A.q(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.v)(n),++p){o=n[p]
r.k(0,o,A.zt(a.h(0,o)))}return A.b6(r,t.N,s)},
zt(a){var s
if(t.f.b(a))return A.me(A.FR(a))
if(t.j.b(a)){s=t.z
return A.ai(J.fe(a,A.GJ(),s),s)}if(a==null||A.bW(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fI)
return a}throw A.d(A.a5("presentation snapshot contains unsupported value "+J.fd(a).p(0),null,null))},
qh:function qh(a){this.a=a},
yy(a,b,c){var s=A.wX(b),r=A.wX(a)
if(c!==2)A.k(A.aq(c,"version","unsupported save version"))
return new A.fI(c,s,r)},
wX(a){var s,r,q,p,o=A.r(a).i("ad<1>"),n=A.K(new A.ad(a,o),o.i("p.E"))
B.a.Z(n)
o=t.z
s=A.q(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.v)(n),++q){p=n[q]
s.k(0,p,A.zs(a.h(0,p)))}return A.b6(s,t.N,o)},
zs(a){var s,r,q,p
if(t.f.b(a)){s=A.q(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.fz)
s.k(0,p,q.b)}return A.wX(s)}if(t.j.b(a)){r=t.z
return A.ai(J.fe(a,A.GN(),r),r)}if(a==null||A.bW(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fK)
return a}throw A.d(A.a5("save contains unsupported value "+J.fd(a).p(0),null,null))},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
y2(a,b,c,d,e,f,g,h){var s=A.e([],t.pC),r=A.e([],t.ns)
return new A.ok(a,b,c,d,e,f,g,s,r,h)},
y3(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aM(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.fy)
r=c.h(0,"runSeed")
q=A.aM(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aM(p)||p<1||typeof o!="number")throw A.d(B.fT)
if(!isFinite(480))throw A.d(A.aq(480,"daySeconds","must be finite and > 0"))
n=new A.jV(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.a5("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.Cm(a5,A.aN(a1,s,m))
k=A.BF(l,A.aN(a0,s,m),n)
j=A.y5(b)
A.Cb(A.aN(a2,s,m)).mJ(j)
m=A.aN(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bW(f))A.k(B.fd)
e=A.Ct(c.h(0,"narrative"))
if(e==null)e=A.pR(d,d,d)
return A.y2(b,q,j,n,l,k,new A.jJ(i,h,g,f),e)},
EH(a){var s
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
eA:function eA(a,b){this.a=a
this.b=b},
jU:function jU(){},
ol:function ol(a,b){this.a=a
this.b=b},
ok:function ok(a,b,c,d,e,f,g,h,i,j){var _=this
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
om:function om(a){this.a=a},
on:function on(){},
oo:function oo(){},
op:function op(a){this.a=a},
oq:function oq(){},
Bn(a){var s,r,q,p,o,n,m="modelScale",l=A.mm(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.am(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.fp)
s=A.em(l,"houseId")
r=A.em(l,"sourceRef")
q=J.fe(A.mj(l,"rooms"),new A.nb(k),t.bJ)
q=A.K(q,q.$ti.i("a7.E"))
q.$flags=1
p=J.fe(A.mj(l,"portals"),new A.nc(k),t.lT)
p=A.K(p,p.$ti.i("a7.E"))
p.$flags=1
o=J.fe(A.mj(l,"stairs"),new A.nd(),t.gI)
o=A.K(o,o.$ti.i("a7.E"))
o.$flags=1
n=J.fe(A.mj(l,"exteriorCells"),new A.ne(),t.N)
n=A.K(n,n.$ti.i("a7.E"))
n.$flags=1
return new A.na(s,r,q,p,o)},
Bo(a,b){var s=A.mm(a,"room"),r=A.em(s,"id"),q=A.A5(s.h(0,"origin"),"origin",b),p=A.A5(s.h(0,"size"),"size",b),o=J.fe(A.mj(s,"windows"),new A.ng(b),t.ya)
o=A.K(o,o.$ti.i("a7.E"))
o.$flags=1
return new A.fg(r,q,p,o)},
mm(a,b){return t.P.b(a)?a:A.j5(b+" is not an object")},
mj(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.j5(b+" is not a list")},
em(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.j5(b+" is not a string")},
j8(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.j5(b+" is not finite")},
G3(a,b){var s,r
if(t.j.b(a)){s=J.aE(a)
s=s.gt(a)!==3||s.N(a,new A.vi())}else s=!0
if(s)return A.j5(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.R(a);r.m();)s.push(A.am(r.gn()))
return s},
A5(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.G3(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)p.push(s[q]*c)
return p},
j5(a){return A.k(A.a5(a,null,null))},
na:function na(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
nb:function nb(a){this.a=a},
nc:function nc(a){this.a=a},
nd:function nd(){},
ne:function ne(){},
nf:function nf(a){this.a=a},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ng:function ng(a){this.a=a},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
ff:function ff(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fh:function fh(a){this.b=a},
vi:function vi(){},
jv:function jv(a,b){this.a=a
this.b=b
this.d=null},
nw:function nw(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
lj:function lj(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oQ:function oQ(){this.b=0},
qJ:function qJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
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
jO:function jO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o3:function o3(){},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(){},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
GX(a){var s,r,q,p,o,n,m,l
a.C()
s=a.a
r=s.length
q=r*14
p=new Float32Array(q)
for(o=0;o<r;++o){n=s[o]
m=o*14
if(!(m<q))return A.f(p,m)
p[m]=n.a
l=m+1
if(!(l<q))return A.f(p,l)
p[l]=n.b
l=m+2
if(!(l<q))return A.f(p,l)
p[l]=n.c
l=m+3
if(!(l<q))return A.f(p,l)
p[l]=n.d
l=m+4
if(!(l<q))return A.f(p,l)
p[l]=n.e
l=m+5
if(!(l<q))return A.f(p,l)
p[l]=n.f
l=m+6
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+7
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+8
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+9
if(!(l<q))return A.f(p,l)
p[l]=0
l=m+10
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+11
if(!(l<q))return A.f(p,l)
p[l]=n.r
l=m+12
if(!(l<q))return A.f(p,l)
p[l]=n.w
l=m+13
if(!(l<q))return A.f(p,l)
p[l]=n.x}s=a.c
return new A.cj(B.aa,p,new Uint16Array(A.a1(a.b)),new A.jh(new A.M(s.a,s.b,s.c),new A.M(s.d,s.e,s.f)))},
GW(a){var s,r,q,p,o,n=A.e([],t.uH)
for(s=A.FN(a,new A.w9(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jP(o,p.c,p.e))}return n},
FN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.q(t.N,t.Ez)
for(r=a.b,q=r.length,p=t.t,o=a.a,n=0;n<q;n+=3){m=r[n]
l=n+1
if(!(l<q))return A.f(r,l)
k=r[l]
l=n+2
if(!(l<q))return A.f(r,l)
j=r[l]
l=o.length
if(!(m<l))return A.f(o,m)
i=o[m]
h=i.x
if(!(k<l))return A.f(o,k)
g=o[k]
f=g.x
if(f===h){if(!(j<l))return A.f(o,j)
e=o[j].x!==h}else e=!0
if(e){if(!(j<l))return A.f(o,j)
throw A.d(A.z("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.f(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.F(d,0,B.b.bO(d,":")):null
l=new A.d9(d,l,h,A.e([],p))
s.k(0,d,l)}B.a.L(l.d,A.e([m,k,j],p))}r=A.e([],t.wf)
q=s.$ti.i("ay<2>")
q=A.K(new A.ay(s,q),q.i("p.E"))
B.a.V(q,new A.vb())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.v)(q),++c)r.push(q[c].pI(a))
return r},
Eq(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jO(r,q,p,o,n,m)},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
w9:function w9(a){this.a=a},
vb:function vb(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ex:function ex(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
Ge(a){var s,r,q,p=new A.oR(A.e([],t.Dl),A.e([],t.t),A.q(t.N,t.S))
for(s=0;s<4;++s)A.EK(p,a,B.cS[s],15.75,15.75,12.044999999999998,0.63)
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
p.ag(r,new A.a0(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ag(r,q,new A.a0(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a0(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a0(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ag(q,new A.a0(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ag(q,r,new A.a0(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ag(new A.a0(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a0(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a0(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ag(new A.a0(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a0(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a0(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a0(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a0(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ag(r,new A.a0(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ag(r,q,new A.a0(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a0(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a0(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ag(q,new A.a0(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ag(q,r,new A.a0(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.FE(p,15.75,15.75,12.044999999999998,16.32)
A.Et(p,15.75,15.75,16.32)
A.EG(p,15.75,15.75,12.044999999999998)
A.EO(p,a,15.75)
A.FK(p,15.75,15.75)
A.Ep(p,15.75)
return p.mS()},
EK(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.il)
for(s=b6.b,r=s.length,q=B.v!==b7,p=B.m!==b7,o=B.l===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
j=b6.aJ(k)
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
B.a.l(b4,new A.ee(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aC(i),b=J.R(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.aK(i)!==b7)continue
B:{if(!p||o){a0=g+a.ah(i)
break B}if(!q||n){a0=e+a.ah(i)
break B}a0=null}B.a.l(b4,new A.ee(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.m||b7===B.l?b8:b9
r=t.i
a1=A.aL([0,s],r)
a2=A.aL([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.v)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.Z(a4)
a5=A.K(a2,a2.$ti.c)
B.a.Z(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.f(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.f(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.f(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.N(b4,new A.uQ(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.EN(b5,b4,b7,b8,b9,c1)
A.EL(b5,b4,b7,b8,b9,c1)
A.EM(b5,b4,b7,b8,b9,c0,c1)},
EM(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aL([0,a4===B.m||a4===B.l?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.v)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.Z(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.uP(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
EL(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.v)(a4),++g){f=a4[g]
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
break}}if(a5!==B.m)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.A(2,a+0.18,n,r,a,a1,p)}}},
EN(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.v)(a3),++h){g=a3[h]
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
break}if(!f)A.FI(a2,g,a4,a5,a6,a7,q)}},
FI(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
FE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.FF(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
FF(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a0(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a0(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ag(n,new A.a0(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ag(n,m,new A.a0(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a0(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a0(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ag(m,new A.a0(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ag(m,n,new A.a0(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Et(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
EG(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
EO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ah("hall")
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
FK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
Ep(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ee:function ee(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uQ:function uQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uP:function uP(a,b,c){this.a=a
this.b=b
this.c=c},
GL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xx(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dX(B.eX,k.a,s)}r=A.AA(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dX(B.eY,r.a,s)}if(A.AB(b,d,c)!=null)return B.f1
q=A.GK(a,b,c,d)
if(q!=null)return new A.dX(B.cf,q.a,"inspect the "+q.b)
p=A.Az(b,c,d,e)
if(p!=null){o=e.cR(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dX(B.f_,l,m?"inspect the "+o.b:"inspect "+n)}return B.f2},
Az(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mt(a5,s,4.5)
for(q=a6.oU(a4),p=J.R(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cR(i.c)
g=i.f.a
f=i.jy(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.a(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gac()
a0=a3.b
a1=Math.acos(B.c.E(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mv(a5,a4,a3.a,new A.a(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
GK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.jM(c)
if(s.length===0)return f
r=d.aJ(e)
q=A.mt(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.v)(s),++l){k=s[l]
j=b.a
i=new A.a(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gac()
j=b.b
if(Math.acos(B.c.E(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mv(d,c,b.a,new A.a(n,m,o)))return k}return f},
dn:function dn(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
Ah(a,b){var s,r=new A.d1(new Float32Array(5376)),q=new A.d1(new Float32Array(5376)),p=new A.d1(new Float32Array(5376)),o=new A.d1(new Float32Array(5376)),n=b.d,m=a.aJ(b),l=A.hE(b.y),k=A.hE(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.eS(new A.a(j,i,h),new A.a(j,i,f),new A.a(d,i,f),new A.a(d,i,h),l.c,e/c,g/c)
A.Ed(r,b,m)
i+=m.b
c=k.e
q.eS(new A.a(j,i,h),new A.a(d,i,h),new A.a(d,i,f),new A.a(j,i,f),k.c,e/c,g/c)
A.Ea(q,b,m)
for(s=0;s<4;++s)A.Ei(p,a,b,m,B.cS[s])
for(j=a.aC(b.a),i=J.R(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.zg(o,b,m,h,!0)}A.Eb(p,b,m)
A.Ee(p,a,b,m)
return new A.qK(B.r.aR(r.a,0,r.b),B.r.aR(q.a,0,q.b),B.r.aR(p.a,0,p.b),B.r.aR(o.a,0,o.b))},
Ea(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.o(a,new A.a(n,s,r),new A.a(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.o(a,new A.a(m-0.34,g,l-0.34),new A.a(m+0.34,d-0.018,l+0.34),12037536)
A.o(a,new A.a(m-0.22,d-0.075,l-0.22),new A.a(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.o(a,new A.a(s,r,j),new A.a(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.o(a,new A.a(i,s,r),new A.a(i+0.1,q,p),4078648)}},
Gc(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d1(new Float32Array(5376))
r=a.aJ(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.zh(s,b,r,c,q)
return B.r.aR(s.a,0,s.b)},
Gd(a,b){var s,r,q,p=new A.d1(new Float32Array(5376)),o=a.aJ(b)
for(s=a.aC(b.a),r=J.R(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.zg(p,b,o,q,!1)}return B.r.aR(p.a,0,p.b)},
Ed(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.hE(c)
if(c==="floor-wood"){c=a3.c
r=B.c.aW(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.f8(m,1.04):A.f8(m,0.84)
A.o(a1,new A.a(b,q,k),new A.a(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.o(a1,new A.a(h,a+0.016,a0+0.18),new A.a(p,a+0.026,c-0.18),6443866)
A.o(a1,new A.a(h+0.08,a+0.027,a0+0.22),new A.a(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.o(a1,new A.a(b+1.15,a+0.018,a0+2.15),new A.a(b+4.7,a+0.03,a0+4.35),5589578)
A.o(a1,new A.a(b+1.28,a+0.031,a0+2.28),new A.a(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.f8(c,1.04):A.f8(c,0.88)
A.o(a1,new A.a(p,o,k),new A.a(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.f8(c,1.06):A.f8(c,0.88)
A.o(a1,new A.a(e,o,k),new A.a(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.o(a1,new A.a(b+0.08,a+0.004,a0+0.08),new A.a(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.o(a1,new A.a(b+2.2,a+0.015,a0+2.45),new A.a(b+2.68,a+0.021,a0+2.93),A.f8(c,0.58))}},
Ee(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.mb(b2,b4,b5,"living")
A.j3(b2,b4,"living")
a8=a9+b5.a
s=a8-0.48
r=b1+b5.c*0.4
A.o(b2,new A.a(s,b0,r-0.85),new A.a(a8,b0+2.55,r+0.85),7824724)
A.o(b2,new A.a(s-0.38,b0+0.02,r-0.72),new A.a(a8+0.05,b0+0.16,r+0.72),a2)
q=b0+2.34
A.o(b2,new A.a(s-0.52,b0+2.18,r-0.94),new A.a(a8+0.08,q,r+0.94),a3)
p=s-0.02
A.o(b2,new A.a(p,b0+0.45,r-0.48),new A.a(a8+0.03,b0+1.48,r+0.48),2170396)
for(a8=s-0.08,o=b0+0.28,n=r-0.42,m=b0+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.o(b2,new A.a(a8+j,o,n),new A.a(p+j,m,l),a4)}for(a8=s-0.01,p=b0+1.55,o=s+0.04,n=b0+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.o(b2,new A.a(a8,p,l+j),new A.a(o,n,m+j),a2)}for(a8=[r-0.68,r+0.56],p=s-0.42,o=b0+2,n=s-0.26,m=b0+2.2,i=0;i<2;++i){h=a8[i]
A.o(b2,new A.a(p,o,h),new A.a(n,m,h+0.16),a5)}A.o(b2,new A.a(s-0.27,q,r-0.58),new A.a(s-0.07,b0+2.52,r-0.38),a6)
A.o(b2,new A.a(s-0.25,q,r+0.34),new A.a(s-0.06,b0+2.49,r+0.52),a3)
break
case"hall":A.Ef(b2,b3,b4,b5,a5,a4)
A.Eh(b2,b3,b4,b5,a5,a4)
A.j3(b2,b4,"hall")
A.o(b2,new A.a(a9+0.28,b0+0.78,b1+0.52),new A.a(a9+0.68,b0+0.88,b1+2.15),a5)
for(a8=[b1+0.66,b1+2.01],q=a9+0.34,p=a9+0.42,o=b0+0.8,i=0;i<2;++i){g=a8[i]
A.o(b2,new A.a(q,b0,g),new A.a(p,o,g+0.08),a3)}f=a9+1.22
a8=b1+0.1
A.o(b2,new A.a(f-0.28,b0+2.35,b1+0.02),new A.a(f+0.28,b0+3.02,a8),a5)
A.o(b2,new A.a(f-0.13,b0+2.48,a8),new A.a(f+0.13,b0+2.72,b1+0.15),a2)
a8=b1+0.08
A.o(b2,new A.a(f-0.025,b0+1.82,a8),new A.a(f+0.025,b0+2.36,b1+0.13),a4)
for(q=a9+1.7,p=b0+1.74,o=a9+1.78,n=b0+1.84,m=b1+0.16,k=0;k<3;++k){l=k*0.36
A.o(b2,new A.a(q+l,p,a8),new A.a(o+l,n,m),a4)}a8=b0+0.72
A.o(b2,new A.a(a9+0.86,b0,b1+0.62),new A.a(a9+1.1,a8,b1+0.9),a6)
A.o(b2,new A.a(a9+0.91,a8,b1+0.68),new A.a(a9+1.05,b0+0.82,b1+0.84),a5)
break
case"kitchen":A.j3(b2,b4,"kitchen")
a8=a9+b5.a
e=a8-0.62
q=b0+1.28
A.o(b2,new A.a(e,b0,b1+0.72),new A.a(a8,q,b1+2.18),a4)
A.o(b2,new A.a(e-0.08,q,b1+0.62),new A.a(a8+0.04,b0+1.38,b1+2.28),a2)
for(a8=e+0.12,q=b0+1.39,p=b1+0.88,o=e+0.4,n=b0+1.45,m=b1+1.16,k=0;k<3;++k){l=k*0.4
A.o(b2,new A.a(a8,q,p+l),new A.a(o,n,m+l),2170396)}a8=b0+0.82
q=b0+0.94
A.o(b2,new A.a(a9+1.05,a8,b1+1.15),new A.a(a9+3.1,q,b1+2.35),a3)
for(p=[a9+1.18,a9+2.94],o=b1+1.28,n=b1+1.38,i=0;i<2;++i){d=p[i]
A.o(b2,new A.a(d,b0,o),new A.a(d+0.1,a8,n),a5)}A.o(b2,new A.a(a9+0.48,b0+1.72,b1+2.74),new A.a(a9+2.55,b0+1.84,b1+2.88),a5)
a8=b0+1.02
A.o(b2,new A.a(a9+3.38,q,b1+1.26),new A.a(a9+4.48,a8,b1+2.22),a6)
q=b1+1.66
p=b1+1.74
A.o(b2,new A.a(a9+3.82,a8,q),new A.a(a9+3.9,b0+1.34,p),a4)
A.o(b2,new A.a(a9+3.72,b0+1.3,q),new A.a(a9+4,b0+1.36,p),a4)
for(a8=a9+1.38,q=b0+0.95,p=b1+1.48,o=a9+1.78,n=b0+1.05,m=b1+1.88,k=0;k<2;++k){l=k*0.55
A.o(b2,new A.a(a8+l,q,p),new A.a(o+l,n,m),a6)}break
case"cellar":A.j3(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.o(b2,new A.a(a8+m,b0,q),new A.a(p+m,o+B.d.M(k,2)*0.18,n),a5)}A.o(b2,new A.a(a9+2.55,b0+0.15,b1+0.38),new A.a(a9+2.72,b0+1.55,b1+0.56),a4)
A.o(b2,new A.a(a9+2.42,b0+1.28,b1+0.32),new A.a(a9+2.86,b0+1.38,b1+0.65),a6)
A.o(b2,new A.a(a9+0.4,b0+1.72,b1+0.45),new A.a(a9+3.4,b0+1.82,b1+0.58),a4)
A.o(b2,new A.a(a9+1.9,b0+1.58,b1+0.42),new A.a(a9+2.06,b0+1.76,b1+0.61),a4)
A.o(b2,new A.a(a9+1.84,b0+1.62,b1+0.55),new A.a(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.mb(b2,b4,b5,"bedroom")
A.j3(b2,b4,"bedroom")
c=a9+0.85
b=b1+2.08
a8=b0+0.72
A.o(b2,new A.a(c,b0+0.42,b),new A.a(c+3.65,a8,b+2.05),6972528)
A.o(b2,new A.a(c-0.1,a8,b-0.12),new A.a(c+3.75,b0+1.28,b+0.1),a3)
A.o(b2,new A.a(c+0.22,b0+0.74,b+1.35),new A.a(c+1.05,b0+0.9,b+1.82),a6)
a8=a9+b5.a
q=b0+1.48
A.o(b2,new A.a(a8-0.95,b0+0.78,b1+0.58),new A.a(a8-0.18,q,b1+1.42),a3)
A.o(b2,new A.a(a8-1.04,q,b1+0.48),new A.a(a8-0.1,b0+1.57,b1+1.52),a5)
for(a8=[b+0.22,b+0.78],q=c+0.36,p=b0+0.75,o=c+1.12,n=b0+0.92,i=0;i<2;++i){a=a8[i]
A.o(b2,new A.a(q,p,a),new A.a(o,n,a+0.42),a6)}for(a8=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=b0+0.08,n=b0+0.44,i=0;i<2;++i){a0=a8[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.o(b2,new A.a(a0,o,g),new A.a(l,n,g+0.1),a5)}}break
case"landing":A.mb(b2,b4,b5,"landing")
a8=a9+0.48
A.o(b2,new A.a(a9+0.34,b0+0.02,b1+1.62),new A.a(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.o(b2,new A.a(a8,q+l,p+j),new A.a(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.o(b2,new A.a(a8+l,q,p+j),new A.a(o+l,n,m+j),a5)}break
case"bathroom":A.mb(b2,b4,b5,a7)
A.j3(b2,b4,a7)
a8=b0+0.62
A.o(b2,new A.a(a9+0.3,b0+0.04,b1+0.38),new A.a(a9+2.15,a8,b1+1.22),a6)
q=b0+0.72
A.o(b2,new A.a(a9+0.42,a8,b1+0.48),new A.a(a9+2.03,q,b1+1.12),a2)
a8=a9+b5.a
p=b1+b5.c
A.o(b2,new A.a(a8-0.78,b0+0.12,p-0.88),new A.a(a8-0.18,b0+1.75,p-0.28),a6)
A.o(b2,new A.a(a8-0.86,b0+1.68,p-0.98),new A.a(a8-0.1,b0+1.82,p-0.18),a4)
p=b1+0.68
a8=b0+1.18
o=b1+0.78
A.o(b2,new A.a(a9+0.86,q,p),new A.a(a9+0.96,a8,o),a4)
A.o(b2,new A.a(a9+0.7,b0+1.12,p),new A.a(a9+1.12,a8,o),a4)
break
case"spare-room":A.mb(b2,b4,b5,"spare")
A.o(b2,new A.a(a9+1,b0,b1+0.7),new A.a(a9+3.25,b0+1.65,b1+2),6972528)
A.o(b2,new A.a(a9+0.8,b0+1.6,b1+0.52),new A.a(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.o(b2,new A.a(a8-1.05,b0,q-1.02),new A.a(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.o(b2,new A.a(p,o+l,n),new A.a(a8,m+l,q),a4)}break}A.Eg(b2,b3,b4,b5)},
Eg(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=2503224,b9=4545124,c0=7901340,c1=3706428,c2=c8.d,c3=c2.a,c4=c2.b,c5=c2.c
c2=c9.a
switch(c8.a){case"living-room":s=c3+c2*0.45
r=c9.c
q=c5+r*0.5
A.db(c6,new A.a(s,c4,q),0.85,0.35,b8,16)
p=[B.ku,B.kw,B.kL,B.kI]
for(o=c4+0.35,n=c4+0.8,m=0;m<4;++m){l=p[m]
k=s+l.a
j=q+l.b
A.db(c6,new A.a(k,o,j),0.12,0.3,b9,8)
A.hb(c6,new A.a(k,n,j),0.16,l.c,!1,8,12)}o=c4+0.55
A.xd(c6,new A.a(s,o,q),0.3,0.45,16752640,!0)
i=c3+0.8
h=c5+r*0.25
g=c5+r*0.35
for(n=c4+0.6,f=0;f<5;++f){e=i+f*0.45
A.db(c6,new A.a(e,c4,h),0.08,0.45,b8,8)
d=80+f*45
A.hb(c6,new A.a(e,n,h),0.12,(d<<16|d<<8|d)>>>0,!1,6,10)}c=[16766720,15114588,12632256,9489145,14737646]
for(f=0;f<5;++f){e=i+f*0.45
A.db(c6,new A.a(e,c4,g),0.08,0.45,b9,8)
A.hb(c6,new A.a(e,n,g),0.12,c[f],!1,6,10)}b=c3+c2*0.72
a=c5+r*0.22
a0=c4+0.02
A.o(c6,new A.a(b-0.6,c4,a-0.6),new A.a(b+0.6,a0,a+0.6),3622735)
A.o(c6,new A.a(b-0.4,a0,a-0.4),new A.a(b+0.4,c4+0.03,a+0.4),11583173)
A.db(c6,new A.a(b-0.3,c4,a),0.02,1.2,b8,6)
A.db(c6,new A.a(b,c4,a),0.05,1.2,b9,8)
A.db(c6,new A.a(b+0.3,c4,a),0.1,1.2,b8,10)
a0=c3+c2
a1=a0-1.8
a2=c5+0.6
a3=[0.05,0.1,0.15,0.2,0.3]
for(a4=a1+0.9,f=0;f<5;++f){a5=a2+f*0.4
a6=a3[f]
a7=B.d.M(f,2)===0?b9:c0
A.o(c6,new A.a(a1,c4,a5),new A.a(a4,c4+a6,a5+0.35),a7)}a8=c3+c2*0.5
a4=c5+r
a9=a4-1.2
a7=a9-0.1
b0=c4+2.5
b1=a9+0.1
A.o(c6,new A.a(a8-0.8,c4,a7),new A.a(a8-0.65,b0,b1),b8)
A.o(c6,new A.a(a8+0.65,c4,a7),new A.a(a8+0.8,b0,b1),b8)
A.o(c6,new A.a(a8-0.85,c4+2.4,a9-0.12),new A.a(a8+0.85,c4+2.55,a9+0.12),13840175)
b1=a8-0.82
b0=c4+1
a7=a9-0.11
b2=a8-0.63
b3=a9+0.11
A.o(c6,new A.a(b1,b0,a7),new A.a(b2,c4+1.04,b3),16766720)
A.o(c6,new A.a(b1,c4+1.68,a7),new A.a(b2,c4+1.72,b3),c1)
A.o(c6,new A.a(b1,c4+2,a7),new A.a(b2,c4+2.04,b3),16766720)
b4=c3+1.2
b5=c5+1.2
A.o(c6,new A.a(b4,c4,b5),new A.a(b4+0.8,n,b5+0.8),b9)
A.o(c6,new A.a(b4+0.15,n,b5+0.15),new A.a(b4+0.65,b0,b5+0.65),c0)
A.xd(c6,new A.a(b4+0.4,b0,b5+0.4),0.35,0.35,16117990,!1)
A.Ae(c6,new A.a(i,c4,a4-2.2),new A.a(c3+2.2,o,a4-1),b8,B.m)
A.FQ(c6,new A.a(a0-2.8,c4,c5+r*0.55),1,0.28,0.14,4,b9)
A.xd(c6,new A.a(c3+c2*0.25,c4,c5+r*0.78),0.75,1.05,1668818,!1)
break
case"hall":r=c5+0.55
A.db(c6,new A.a(c3+0.55,c4,r),0.22,2.4,b9,12)
A.db(c6,new A.a(c3+c2-0.55,c4,r),0.22,2.4,b9,12)
A.hb(c6,new A.a(c3+c2*0.5,c4+1.6,c5+1.2),0.18,c1,!0,8,12)
c2=c3+0.8
r=c5+2.4
A.db(c6,new A.a(c2,c4,r),0.15,0.9,b8,8)
A.hb(c6,new A.a(c2,c4+1.05,r),0.15,16752640,!0,8,12)
break
case"kitchen":b6=c3+c2*0.45
b7=c5+c9.c*0.5
A.o(c6,new A.a(b6-0.7,c4,b7-0.4),new A.a(b6+0.7,c4+0.85,b7+0.4),b8)
c2=c4+1.1
A.hb(c6,new A.a(b6-0.35,c2,b7),0.22,1668818,!1,8,12)
A.hb(c6,new A.a(b6+0.35,c2,b7),0.22,c1,!1,8,12)
c2=c3+0.9
r=c3+1.4
A.o(c6,new A.a(c2,c4,c5+0.9),new A.a(r,c4+0.5,c5+1.4),c0)
A.Ae(c6,new A.a(c2,c4,c5+1.5),new A.a(r,c4+0.4,c5+2.2),b9,B.l)
break
default:c2=c3+c2*0.5
r=c5+c9.c*0.5
A.db(c6,new A.a(c2,c4,r),0.45,0.6,b9,10)
A.o(c6,new A.a(c2-0.15,c4+0.6,r-0.15),new A.a(c2+0.15,c4+0.9,r+0.15),16117990)}},
mb(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
switch(a0){case"living":g=e+0.58
A.o(a,new A.a(f+0.45,e,d+1.86),new A.a(f+1.18,g,d+2.66),7694457)
s=e+0.12
r=d+1.92
q=e+0.78
p=d+2.6
A.o(a,new A.a(f+0.34,s,r),new A.a(f+0.48,q,p),j)
A.o(a,new A.a(f+1.15,s,r),new A.a(f+1.29,q,p),j)
p=e+0.72
A.o(a,new A.a(f+0.52,g,d+1.8),new A.a(f+1.12,p,d+1.94),i)
A.o(a,new A.a(f+0.35,e,d+0.42),new A.a(f+1.95,p,d+0.7),i)
A.o(a,new A.a(f+0.28,p,d+0.34),new A.a(f+2.02,e+0.84,d+0.78),j)
for(g=[f+0.62,f+1.32],s=e+0.25,r=d+0.68,q=e+0.29,p=d+0.72,o=0;o<2;++o){n=g[o]
A.o(a,new A.a(n,s,r),new A.a(n+0.34,q,p),h)}break
case"bedroom":g=e+0.72
s=d+0.38
r=e+0.84
A.o(a,new A.a(f+0.35,g,s),new A.a(f+1.24,r,d+0.86),i)
for(q=f+0.42,p=[q,f+1.08],m=d+0.46,l=d+0.54,o=0;o<2;++o){k=p[o]
A.o(a,new A.a(k,e,m),new A.a(k+0.08,g,l),j)}A.o(a,new A.a(f+0.55,r,d+0.47),new A.a(f+1.05,e+0.96,d+0.78),h)
A.o(a,new A.a(q,e+0.82,d+0.32),new A.a(f+1.18,e+1.58,s),j)
break
case"landing":g=e+0.48
s=e+0.72
A.o(a,new A.a(f+0.64,g,d+0.32),new A.a(f+1.75,s,d+0.82),7694457)
A.o(a,new A.a(f+0.58,s,d+0.26),new A.a(f+1.81,e+0.82,d+0.88),j)
for(s=[f+0.72,f+1.62],r=d+0.4,q=d+0.48,o=0;o<2;++o){k=s[o]
A.o(a,new A.a(k,e,r),new A.a(k+0.08,g,q),i)}break
case"bathroom":g=e+0.48
A.o(a,new A.a(f+1.55,g,d+1.72),new A.a(f+2.12,e+0.6,d+2.16),h)
for(s=[f+1.62,f+2],r=d+1.78,q=d+1.85,o=0;o<2;++o){k=s[o]
A.o(a,new A.a(k,e,r),new A.a(k+0.07,g,q),j)}break
case"spare":g=e+0.74
s=e+0.86
A.o(a,new A.a(f+1.3,g,d+2.3),new A.a(f+2.42,s,d+2.72),j)
for(r=[f+1.4,f+2.3],q=d+2.36,p=d+2.44,o=0;o<2;++o){k=r[o]
A.o(a,new A.a(k,e,q),new A.a(k+0.08,g,p),i)}A.o(a,new A.a(f+1.62,s,d+2.39),new A.a(f+2.1,e+0.98,d+2.63),h)
break}},
j3(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.o(a2,new A.a(a+0.42,a0,a1+3.24),new A.a(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.o(a2,new A.a(b+m,s,r-l),new A.a(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.d.M(n,2)*0.1
A.o(a2,new A.a(k,s+j,r),new A.a(k+0.25,q+j,p),5913386)
A.o(a2,new A.a(k+0.045,o+j,p),new A.a(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.o(a2,new A.a(a+2.98,a0+1.1,a1+2.82),new A.a(a+3.05,a0+1.72,b),c)
s=a+2.72
A.o(a2,new A.a(s,a0+0.82,a1+2.84),new A.a(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.o(a2,new A.a(h,r,q),new A.a(h+0.06,p,b),c)}break
case"cellar":A.o(a2,new A.a(a+2.82,a0,a1+2.72),new A.a(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.d.M(n,2)*0.32
f=s+B.d.W(n,2)*0.32
A.o(a2,new A.a(g,r,f),new A.a(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.o(a2,new A.a(e,s,r),new A.a(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.o(a2,new A.a(a+0.34,b,a1+2.22),new A.a(a+1.24,a0+1.32,a1+2.28),c)
A.o(a2,new A.a(a+0.48,a0+0.82,a1+2.24),new A.a(a+1.1,b,a1+2.3),d)
break}},
Eh(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
if(d.length===0)return
s=B.a.gR(d)
d=s.d
r=d.a+0.24
q=s.e
p=q.a-0.24
o=q.c
n=c.d.b
q=(n+a0.b-0.18-n-0.1)/(q.b-d.b)
if(1<q)q=1
m=o-q*(o-d.c)+0.28
l=o-0.72
k=m+1.02
l=l<k?l:k
if(l<=m)return
d=n+1.72
A.o(a,new A.a(r+0.03,n+0.1,m+0.03),new A.a(p-0.03,d,l-0.03),2367259)
q=m+0.08
o=l-0.08
A.o(a,new A.a(r+0.18,n+0.92,q),new A.a(p-0.18,n+0.98,o),a1)
j=r-0.055
A.o(a,new A.a(j-0.06,n+0.08,m-0.08),new A.a(j,n+1.86,l+0.08),6965557)
A.o(a,new A.a(j-0.075,n+0.18,q),new A.a(j-0.005,d,o),4861989)
for(q=[m+0.2,m+0.63],o=j-0.088,i=n+0.28,h=j-0.006,g=n+0.57,f=0;f<2;++f){e=q[f]
A.o(a,new A.a(o,i,e),new A.a(h,g,e+0.27),5847339)}A.o(a,new A.a(j-0.11,d,m-0.1),new A.a(j+0.01,n+1.84,l+0.1),6965557)
A.o(a,new A.a(j-0.12,n+0.9,m+0.52),new A.a(j-0.08,n+0.99,m+0.61),a2)},
Ef(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
if(b1.length===0)return
s=B.a.gR(b1)
r=s.d
q=s.e
p=r.a+0.12
o=q.a-0.12
n=q.b
b1=b4.d.b
m=b1+b5.b
l=m-0.18
if(n<l)l=n
k=l-b1-0.1
if(0.1>k)k=0.1
j=k/(n-r.b)
if(1<j)j=1
i=q.c
h=i-j*(i-r.c)
g=B.c.pu(k/0.18)
f=B.c.aN(1>g?1:g)
e=k/f
g=i-h
d=g/f
c=b1+0.1
for(b=0;b<f;){++b
a=i-b*d
A.o(b2,new A.a(p,c,a),new A.a(o,c+b*e,a+d),b6)}a0=b1+0.08
a1=b1+0.34
A.o(b2,new A.a(p-0.1,a0,h),new A.a(p,a1,i),b0)
A.o(b2,new A.a(o,a0,h),new A.a(o+0.1,a1,i),b0)
a2=o+0.16
a3=o+0.25
a4=b1+0.82
a5=l+0.78
a6=m-0.12
a5=a5<a6?a5:a6
A.o(b2,new A.a(a2,a0,i-0.12),new A.a(a3,a4+0.12,i+0.02),b0)
b1=a5-0.86
if(a0>b1)b1=a0
A.o(b2,new A.a(a2,b1,h-0.02),new A.a(a3,a5,h+0.12),b0)
for(b1=a5-a4,m=a2+0.01,a0=a3-0.01,b=0;b<=5;++b){a7=b/5
a8=i-a7*g
a9=a4+a7*b1
A.o(b2,new A.a(m,a9-0.7,a8-0.025),new A.a(a0,a9,a8+0.025),b7)}A.o(b2,new A.a(a2-0.05,a5-0.08,h-0.08),new A.a(a3+0.05,a5+0.08,h+0.08),b0)},
Ei(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.m||a4===B.l?a3.a:a3.c,a=A.e([],t.l5)
for(s=a2.a,r=a1.aC(s),q=J.R(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.aK(s)===a4)a.push(new A.ed(p.ah(s),p.ah(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.ed(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aL([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.v)(a),++o){m=a[o]
r.L(0,A.e([m.a,m.b],p))}l=A.K(r,r.$ti.c)
B.a.Z(l)
s=A.aL([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.v)(a),++o){m=a[o]
s.L(0,A.e([m.c,m.d],p))}k=A.K(s,s.$ti.c)
B.a.Z(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.N(a,new A.u3(f,e,d,c)))continue
A.G4(a0,a2,a3,a4,f,e,d,c)}A.Ej(a0,a2,a3,a4,b,a)},
Ej(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.u1(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.u1(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.u1(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.u1(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
for(r=b5.length,l=0;l<b5.length;b5.length===r||(0,A.v)(b5),++l){k=b5[l]
o=k.a
j=o-0.075
if(0>j)j=0
i=k.b
h=i+0.075
if(b4<h)h=b4
g=k.c
f=0.018>g?0.018:g
e=k.d
d=e+0.075
if(m<d)d=m
if(o>0)A.aS(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.aS(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.aS(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.aS(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.G(a9),o=r.i("n(1)").a(new A.u2(b3)),a9=B.a.gu(a9),r=new A.T(a9,o,r.i("T<1>")),o=b2.c,i=b3!==B.m,e=b3===B.l,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.aS(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.aS(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.aS(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.aS(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.Ek(b0,b1,b2,b3,b,p)}},
Ek(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
if(a2==="hall"||a7.r||a7.f<1)return
s=a6===B.m||a6===B.l?a5.a:a5.c
r=a7.c
q=r+a7.e
p=a5.b
o=p-0.16
n=a7.d
m=n+a7.f
l=m+0.08
o=o<l?o:l
k=p-0.11
j=o+0.045
k=k<j?k:j
i=a2==="spare-room"?5062710:7165765
h=a2==="kitchen"?10984329:7694457
a2=r-0.13
if(0>a2)a2=0
g=q+0.13
A.aS(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
f=n-0.18
if(0.24>f)f=0.24
e=p-0.2
d=m+0.03
e=e<d?e:d
c=r-0.11
if(0>c)c=0
b=r+0.1
if(s<b)b=s
a=q-0.1
if(0>a)a=0
a0=q+0.11
if(s<a0)a0=s
if(e>f){A.aS(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.aS(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.aS(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.aS(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
u1(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.FU(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aS(a,b,c,d,n,o,g,h,i,j)}},
FU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.e([new A.fU(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.v)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.v)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fU(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fU(n,j))}h=p}return h},
Eb(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.l5.q(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.o(a,new A.a(p-0.025,n,o-0.025),new A.a(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.o(a,new A.a(p-0.14,k,o-0.14),new A.a(p+0.14,n,o+0.14),j)
A.o(a,new A.a(p-0.09,n-0.16,o-0.09),new A.a(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.o(a,new A.a(h-0.24,k,e-0.24),new A.a(h+0.24,s,e+0.24),l)
j=s-0.034
A.o(a,new A.a(h-0.15,j,e-0.15),new A.a(h+0.15,k,e+0.15),l)
A.o(a,new A.a(h-0.055,s-0.048,e-0.055),new A.a(h+0.055,j,e+0.055),l)},
aS(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.o(a,new A.a(r+e,q+g,p),new A.a(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.o(a,new A.a(r+e,q+g,s-i),new A.a(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.o(a,new A.a(s-i,q+g,p+e),new A.a(s,q+h,p+f),j)
return
case 3:A.o(a,new A.a(r,q+g,p+e),new A.a(r+i,q+h,p+f),j)
return}},
o(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.S(j,l,g,h,d)
a.S(s,r,q,p,d)
a.S(l,s,p,g,d)
a.S(r,j,h,q,d)
a.S(l,j,r,s,d)
a.S(g,p,q,h,d)},
db(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=6.283185307179586/a3,g=b.a,f=b.b,e=f+a1,d=b.c,c=new A.a(g,e,d)
for(s=0;s<a3;){r=s*h;++s
q=s*h
p=g+Math.cos(r)*a0
o=d+Math.sin(r)*a0
n=new A.a(p,f,o)
m=g+Math.cos(q)*a0
l=d+Math.sin(q)*a0
k=new A.a(m,f,l)
j=new A.a(p,e,o)
i=new A.a(m,e,l)
a.b8(n,k,i,j,a2,!1)
a.b8(c,c,i,j,a2,!1)
a.b8(b,n,k,b,a2,!1)}},
hb(a,b,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(s=b.a,r=b.b,q=b.c,p=0;p<a3;){o=p/a3*3.141592653589793;++p
n=p/a3*3.141592653589793
for(m=a0*Math.sin(o),l=r+a0*Math.cos(o),k=a0*Math.sin(n),j=r+a0*Math.cos(n),i=0;i<a4;){h=i/a4*3.141592653589793*2;++i
g=i/a4*3.141592653589793*2
f=Math.cos(h)
e=Math.sin(h)
d=Math.cos(g)
c=Math.sin(g)
a.b8(new A.a(s+m*f,l,q+m*e),new A.a(s+m*d,l,q+m*c),new A.a(s+k*d,j,q+k*c),new A.a(s+k*f,j,q+k*e),a1,a2)}}},
Ae(a,b,c,d,e){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.S(l,j,r,s,d)
switch(e.a){case 0:a.S(s,r,h,g,d)
a.S(j,l,g,h,d)
a.S(l,s,g,g,d)
a.S(r,j,h,h,d)
break
case 2:a.S(j,l,p,q,d)
a.S(s,r,q,p,d)
a.S(l,s,p,l,d)
a.S(r,j,j,q,d)
break
case 1:a.S(l,s,q,h,d)
a.S(r,j,h,q,d)
a.S(j,l,l,h,d)
a.S(s,r,q,s,d)
break
case 3:a.S(r,j,g,p,d)
a.S(l,s,p,g,d)
a.S(j,l,g,j,d)
a.S(s,r,r,p,d)
break}},
xd(a,b,c,d,e,f){var s,r,q,p=c*0.5,o=b.a,n=b.b,m=b.c,l=new A.a(o,n+d,m),k=o-p,j=m-p,i=new A.a(k,n,j)
o+=p
s=new A.a(o,n,j)
m+=p
r=new A.a(o,n,m)
q=new A.a(k,n,m)
a.b8(i,s,r,q,e,f)
a.b8(i,s,l,l,e,f)
a.b8(s,r,l,l,e,f)
a.b8(r,q,l,l,e,f)
a.b8(q,i,l,l,e,f)},
FQ(a,b,c,d,e,f,g){var s,r,q,p,o,n
for(s=b.c,r=b.a,q=b.b,p=r+c,o=0;o<f;){n=s+o*d;++o
A.o(a,new A.a(r,q,n),new A.a(p,q+o*e,n+d),g)}},
G4(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.a(i+e,h+a0,g)
break
case 2:s=new A.a(i+f,h+a0,g+c.c)
break
case 1:s=new A.a(i+c.a,h+a1,g+f)
break
case 3:s=new A.a(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.a(i+f,h+a0,g)
break
case 2:r=new A.a(i+e,h+a0,g+c.c)
break
case 1:r=new A.a(i+c.a,h+a1,g+e)
break
case 3:r=new A.a(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.a(i+f,h+a1,g)
break
case 2:q=new A.a(i+e,h+a1,g+c.c)
break
case 1:q=new A.a(i+c.a,h+a0,g+e)
break
case 3:q=new A.a(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.a(i+e,h+a1,g)
break
case 2:p=new A.a(i+f,h+a1,g+c.c)
break
case 1:p=new A.a(i+c.a,h+a0,g+f)
break
case 3:p=new A.a(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.a(0,0,0.003)
break
case 2:o=new A.a(0,0,-0.003)
break
case 1:o=new A.a(-0.003,0,0)
break
case 3:o=new A.a(0.003,0,0)
break
default:o=k}n=b.x
m=A.hE(n).e
a.eS(s.a6(0,o),r.a6(0,o),q.a6(0,o),p.a6(0,o),A.hE(n).c,(f-e)/m,(a1-a0)/m)
l=A.G5(b,d)
switch(j){case 0:o=new A.a(s.a,s.b,s.c-l)
break
case 2:o=new A.a(r.a,s.b,s.c)
break
case 1:o=new A.a(s.a,s.b,p.c)
break
case 3:o=new A.a(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.a(r.a,q.b,s.c)
break
case 2:j=new A.a(s.a,q.b,s.c+l)
break
case 1:j=new A.a(s.a+l,q.b,r.c)
break
case 3:j=new A.a(p.a,q.b,r.c)
break
default:j=k}A.o(a,o,j,A.f8(A.hE(n).c,0.68))},
f8(a,b){var s,r=new A.v9(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.dj()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.dj()
r=r.$1(a&255)
if(typeof r!=="number")return A.je(r)
return(q<<16|s<<8|r)>>>0},
G5(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
zg(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aK(d),b=a3.ah(d),a=b+a3.w
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
A.o(a0,new A.a(r+l,s,d),new A.a(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(l,s,d),new A.a(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.o(a0,new A.a(r+n,s+m,d),new A.a(r+h,j,i),q)
A.o(a0,new A.a(k,s,d),new A.a(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.o(a0,new A.a(r+l,s,k),new A.a(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(l,s,k),new A.a(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.o(a0,new A.a(r+n,s+m,k),new A.a(r+h,i,d),q)
A.o(a0,new A.a(j,s,k),new A.a(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.o(a0,new A.a(n,s,d+k),new A.a(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(n,s,k),new A.a(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.o(a0,new A.a(n,s+e,d+m),new A.a(r,j,d+l),q)
A.o(a0,new A.a(n,s,i),new A.a(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.o(a0,new A.a(r,s,d+l),new A.a(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(r,s,l),new A.a(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.o(a0,new A.a(r,s+e,d+n),new A.a(k,j,d+m),q)
A.o(a0,new A.a(r,s,i),new A.a(k,s+0.05,l),q)
break}if(a4)A.zh(a0,a1,a2,a3,q)
A.Ec(a0,a1,a2,a3)},
Ec(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.ah(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aK(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.m
q=!r||s===B.l?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.aS(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.l?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.aS(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.l?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.aS(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.l?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.aS(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.l,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.aS(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.aS(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.aS(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
zh(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aK(o),m=d.ah(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.o(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.o(a,new A.a(p,s,o-d.w),new A.a(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.o(a,new A.a(p-d.w,s,o),new A.a(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.o(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.o(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.o(a,new A.a(p,s,o-0.055),new A.a(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.o(a,new A.a(p-0.055,s,o),new A.a(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.o(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break}},
qK:function qK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u3:function u3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u2:function u2(a){this.a=a},
v9:function v9(a){this.a=a},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a,b){this.a=a
this.b=b},
y5(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.e([],b5),b7=t.qP,b8=A.e([],b7),b9=A.e([],t.DZ),c0=t.N
c0=new A.oO(b6,b8,b9,A.q(c0,t.U),A.q(c0,t.T),new A.oQ())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.L(b6,A.e([new A.aX(n,B.av,new A.a(4.5,3.9,4),new A.a(0,0,0),A.e([new A.bb("living-north-west",B.m,0.5,0.9,1.2,1.8,!1,!0),new A.bb("living-north-east",B.m,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bh(m,l,new A.a(1,1.95,1),!1,!1,m),new A.bh(k,j,new A.a(3,1.95,3),!1,!1,k)],q),B.b8,"wallpaper-stripes",i,h,B.M),new A.aX(g,B.av,new A.a(2.5,3.9,7),new A.a(4.5,0,0),A.e([new A.bb("hall-fanlight",B.m,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bh("mantle-hall","the hall mantle",new A.a(1,1.95,3.5),!1,!1,o)],q),A.e([new A.bj(e,e,new A.a(0.2,2.175,0.35)),new A.bj(d,d,new A.a(2.2,2.55,3)),new A.bj(c,c,new A.a(0.4,1.35,4.1)),new A.bj(b,b,new A.a(0.92,0.82,5.55))],p),a,i,h,B.M),new A.aX(a0,B.av,new A.a(4.5,3.75,3),new A.a(0,0,4),A.e([new A.bb("kitchen-south",B.l,1.5,1.05,1.2,1.65,!1,!0),new A.bb("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bh(a1,"the mantle by the stove",new A.a(0.8,1.8,0.5),!1,!1,a1),new A.bh("mantle-kitchen-second",l,new A.a(2.2,1.8,2),!1,!1,o),new A.bh("mantle-kitchen-third",j,new A.a(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.bj(a2,a2,new A.a(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.iX),new A.aX("cellar",B.av,new A.a(4,3,4),new A.a(1,-3,2),B.ba,A.e(["hall-cellar"],r),B.iE,B.b8,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.aX("bedroom",B.aw,new A.a(4.5,3.6,4),new A.a(0,4.2,0),A.e([new A.bb("bedroom-north-west",B.m,0.7,1.05,1.1,1.65,!1,!0),new A.bb("bedroom-north-east",B.m,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bh(a3,"the bedroom mantle",new A.a(1,1.95,1),!1,!1,a3),new A.bh("mantle-bedroom-bedside","the bedside mantle",new A.a(3.5,1.5,3),!1,!1,o)],q),A.e([new A.bj(a4,a4,new A.a(2.2,1.125,2.5)),new A.bj(a5,a5,new A.a(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.aX(a6,B.aw,new A.a(2.5,3.6,3),new A.a(4.5,4.2,0),B.ba,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.bh("mantle-landing","the landing mantle",new A.a(1,1.8,1.5),!1,!1,o)],q),B.b8,a,i,h,B.M),new A.aX(a8,B.aw,new A.a(2.5,3.6,2.5),new A.a(4.5,4.2,3),A.e([new A.bb("bathroom-east",B.v,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.bh("mantle-bathroom","the bathroom mantle",new A.a(1.5,1.8,1),!1,!1,o)],q),A.e([new A.bj(a9,a9,new A.a(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.aX(b0,B.aw,new A.a(4.5,3.15,3),new A.a(0,4.2,4),A.e([new A.bb("spare-south",B.l,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bh("mantle-spare","the broken mantle",new A.a(2,1.95,1),!1,!0,o)],q),A.e([new A.bj(b1,b1,new A.a(0.5,1.8,0.3)),new A.bj(b2,b2,new A.a(3.7,2.1,2.7)),new A.bj(b3,b3,new A.a(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.L(b8,A.e([A.e5(g,"outside","kit-front-door-recessed",!0,B.m,B.l,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.e5(g,n,b4,!1,B.G,B.v,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.e5(g,a0,b4,!1,B.G,B.v,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.e5(a0,n,b4,!1,B.m,B.l,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.e5(g,"cellar","kit-cellar-door-grille",!1,B.l,B.v,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.e5(g,a6,o,!1,B.v,B.v,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.e5(a6,"bedroom",b4,!1,B.G,B.v,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.e5(a6,a8,b4,!1,B.l,B.m,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.e5(a6,b0,b4,!1,B.l,B.m,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dC("hall-stairs",f,B.iu,new A.a(5,0,2.8),new A.a(6.5,6.3,6),new A.a(5.75,2.475,5.8),new A.a(5.75,6.675,2.2)))
c0.kU()
c0.kV()
c0.ly()
b5=b6.length
if(b5!==8)A.k(A.m("expected eight rooms, got "+b5))
b5=c0.gpH()
if(b5!==9)A.k(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaQ(b9).c.length!==3||B.a.gX(B.a.gaQ(b9).c)!==9.45)A.k(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.k(A.m("expected nine physical portals"))
c0.mw()
c0.mu()
return c0},
oO:function oO(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
p4:function p4(a){this.a=a},
p5:function p5(){},
p6:function p6(){},
p3:function p3(){},
p7:function p7(a){this.a=a},
p8:function p8(){},
mt(a,b,c){var s=a.aJ(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mv(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Fc(a,s,c,d)},
Fc(a,b,c,d){var s,r,q,p,o=a.aJ(b),n=d.aj(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.u8(a,b,o,B.m,r,q,p,c,n,m))return!0
if(A.u8(a,b,o,B.l,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.u8(a,b,o,B.G,s,r,q,c,n,m))return!0
if(A.u8(a,b,o,B.v,s+o.a,r,q,c,n,m))return!0
return!1},
u8(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a6(0,a6.a7(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.m||a1===B.l
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aC(m),k=J.R(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aK(m)===a1){g=q.ah(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
xx(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mt(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.v)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.a(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gac()
f=a.b
if(Math.acos(B.c.E(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mv(a0,a1,a.a,new A.a(h,g,i)))continue
m=d
l=j}}return l},
AA(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mt(b,j,4.5):4.5
for(s=b.aC(c),r=J.R(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.oX(c,o)
m=a.a
l=new A.a(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zF(l,k,a,i,0.5236)||k>=q)continue
if(!A.mv(b,c,a.a,n))continue
q=k
p=o}return p},
AB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mt(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.v)(r),++n){m=r[n]
l=A.G6(b,h,m)
k=a.a
j=new A.a(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zF(j,i,a,s,0.5236)||i>=p)continue
if(!A.mv(b,c,a.a,l))continue
p=i
o=m}return o},
zF(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.E(a.gac().cd(c.b),-1,1))<=e},
G6(a,b,c){var s=a.aJ(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.a(q.a+r,p,q.c)
break
case 2:q=new A.a(q.a+r,p,q.c+s.c)
break
case 1:q=new A.a(q.a+s.a,p,q.c+r)
break
case 3:q=new A.a(q.a,p,q.c+r)
break
default:q=null}return q},
o2:function o2(){this.a=null
this.b=0},
rx:function rx(){},
ry:function ry(){},
Cg(a){var s=A.j9(a,"inventory asset"),r=A.dM(s,"id"),q=A.dM(s,"kind")
A.dM(s,"source")
A.dM(s,"proxy")
A.dM(s,"pivot")
s=A.j9(s.h(0,"bounds"),"inventory bounds")
return new A.cV(r,q,new A.pg(A.ms(s.h(0,"min"),"bounds.min"),A.ms(s.h(0,"max"),"bounds.max")))},
Ch(a){var s,r,q,p,o,n,m,l="stateKey",k=A.j9(a,"inventory placement"),j=A.j9(k.h(0,"visibility"),"placement visibility"),i=A.j9(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dM(k,"id"),f=A.dM(k,"roomId"),e=A.dM(k,"assetId")
A.dM(k,"role")
s=typeof k.h(0,"socket")=="string"?A.u(k.h(0,"socket")):null
k=A.j9(k.h(0,"transform"),"inventory transform")
r=A.ms(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.fC)
q=A.ms(k.h(0,"position"),"transform.position")
p=A.ms(k.h(0,"rotation"),"transform.rotation")
A.dM(j,"layer")
if(typeof j.h(0,l)=="string")A.u(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.u(i.h(0,"focusId")):null
m=t.P.b(h)?A.Fr(h,"radius"):0
return new A.cy(g,f,e,s,new A.pi(q,p,r),o,n,m)},
j9(a,b){return t.P.b(a)?a:A.dJ(b+" is not an object")},
dM(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dJ(b+" is not a string")},
Fr(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dJ(b+" is not finite")},
ms(a,b){var s
if(t.j.b(a)){s=J.aE(a)
s=s.gt(a)!==3||s.N(a,new A.vh())}else s=!0
if(s)return A.dJ(b+" is not a finite vec3")
s=J.aE(a)
return new A.a(A.am(s.h(a,0)),A.am(s.h(a,1)),A.am(s.h(a,2)))},
dJ(a){return A.k(A.a5(a,null,null))},
oT:function oT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oW:function oW(a){this.a=a},
oU:function oU(a){this.a=a},
oV:function oV(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.f=c},
cy:function cy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
pi:function pi(a,b,c){this.a=a
this.b=b
this.c=c},
pg:function pg(a,b){this.a=a
this.b=b},
vh:function vh(){},
ph:function ph(a){this.a=a},
cY:function cY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k4:function k4(a){this.a=a},
oX:function oX(a){this.a=a},
e5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bv(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hy:function hy(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bv:function bv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bh:function bh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aX:function aX(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
Ca(a){return A.C9(a)},
C9(a){var s,r,q,p,o,n,m=A.zO(a,"sound emitter"),l=t.N,k=A.q(l,l)
for(s=A.zO(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.fx)
k.k(0,r.a,q)}s=A.xl(m,"id")
r=A.xl(m,"roomId")
p=A.xl(m,"placementId")
o=A.G2(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h3("gain is not a number")
return new A.cU(s,r,p,o,n,A.b6(k,l,l))},
zO(a,b){return t.P.b(a)?a:A.h3(b+" is not an object")},
xl(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h3(b+" is not a string")},
G2(a,b){var s
if(t.j.b(a)){s=J.aE(a)
s=s.gt(a)!==3||s.N(a,new A.vg())}else s=!0
if(s)throw A.d(A.a5(b+" must be a numeric vec3",null,null))
s=J.aE(a)
return new A.a(A.am(s.h(a,0)),A.am(s.h(a,1)),A.am(s.h(a,2)))},
h3(a){return A.k(A.a5(a,null,null))},
oZ:function oZ(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function p_(a){this.a=a},
p0:function p0(a){this.a=a},
p1:function p1(){},
cU:function cU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oP:function oP(){this.b=this.a=null},
eD:function eD(a){this.a=a},
oY:function oY(){this.b=this.a=null},
cT:function cT(a,b){this.a=a
this.b=b},
vg:function vg(){},
y6(a,b,c,d,e,f){var s=t.N
return new A.p2(e,f,c,a,A.b6(A.aN(d,s,s),s,s),A.ai(b,s))},
y7(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.q(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
h.k(0,p.a,new A.hW(p.ax,p.ay))}s=A.q(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.v)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.q(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.v)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l){j=o[l]
i.k(0,j.a,new A.hM(j.d,j.r))}return A.y6(a.r.b,B.n,i,B.d0,h,s)},
Cb(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jj
r=a3.h(0,"mantleHistory")
if(r==null)r=B.iN
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aM(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.fv)
p=t.N
o=A.q(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.ci)
l=A.aN(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bW(j)||!A.bW(i))A.k(B.ci)
o.k(0,k,new A.hW(j,i))}h=A.q(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bW(l.b))throw A.d(B.fs)
h.k(0,k,A.Q(l.b))}g=A.q(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.cg)
l=A.aN(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bW(f)||!A.bW(e))A.k(B.cg)
g.k(0,k,new A.hM(f,e))}d=A.q(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.h1)
d.k(0,n,A.u(p.b))}c=A.e([],t.s)
for(q=J.R(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.f3)
B.a.l(c,b)}return A.y6(a2,c,g,d,o,h)},
xg(a,b){return a.a.a===b.a&&a.a9(0,b.gav(b))},
p2:function p2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hE(a){var s=B.bh.h(0,a)
if(s==null)throw A.d(A.m("Unknown house surface material: "+a))
return s},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
BS(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hL(e,A.G(e).c)
q=new A.ef()
q.c_((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ht(a,q,2,r,1+s,A.aL(["time"],t.N))
break
case 3:A.ht(a,q,3,r,1+s,A.aL(["place"],t.N))
break
case 4:A.ht(a,q,4,r,2+s,p)
A.BO(a,q,4)
break
case 5:A.ht(a,q,5,r,s,p)
A.BM(a,q,5)
break
case 6:A.ht(a,q,6,r,s,p)
A.BN(a,q)
A.BR(a,q,6)
break
case 7:A.BP(a,q,7)
break
default:if(s>0)A.ht(a,q,b,r,s,p)}},
BL(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.BQ(a,b,c))return!1
return!0},
ht(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.r(s).i("al<2>"));s.m();){r=s.d
if(A.BL(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dk(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.y0(a,b,o[p],f)}},
y0(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aN(B.a.gX(o).a,n,n)
if(d==null)s=A.e(B.z.slice(0),t.s)
else{n=t.vY
s=A.K(new A.I(B.z,t.Ag.a(new A.nY(d)),n),n.i("p.E"))}n=s.length
if(n===0)return
n=b.aP(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fk(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aP(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.e_(c.a,m,B.a.gX(o).b)},
BO(a,b,c){var s=A.y1(a,b,c)
if(!a.c7(s))return
a.fv(c,t.G.a(s),0,B.b_,null)},
y1(a,b,c){var s,r,q,p,o,n=t.N,m=A.q(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.z[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aP(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
BM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.r(s).i("al<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dk(i,b)
s=i.length
if(0>=s)return A.f(i,0)
q=i[0]
if(1>=s)return A.f(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aN(B.a.gX(i).a,s,s)
r=p.c
n=A.aN(B.a.gX(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.z[m]
k=o.h(0,l)
j=s.fk(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aP(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.e_(q.a,o,B.a.gX(i).b)
a.e_(p.a,n,B.a.gX(r).b)},
BN(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.al(s,s.r,s.e,A.r(s).i("al<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aP(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.a3(0,q[r].a)},
BR(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.r(s).i("al<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aP(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.y0(a,b,q[s],null)},
BP(a,b,c){var s=c+1,r=A.y1(a,b,s)
if(!a.c7(r))return
a.fv(s,t.G.a(r),0,B.b_,null)},
BQ(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gX(b.c).c===B.az}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gX(b.c).c===B.az}if(c===21)return b.e
return!1},
nY:function nY(a){this.a=a},
Dd(a){var s,r,q,p,o=t.N,n=A.q(o,t.a)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p=A.at(q==null?B.n:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.t8(n)},
py(a,b,c){var s,r,q,p=t.z
p=A.q(p,p)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.ki(A.b6(p,q,q),b,c)},
yi(a){var s=t.N
return A.py(t.P.a(a.h(0,"fields")).bQ(0,new A.pz(),s,s),A.am(a.h(0,"shakiness")),A.BX(B.iy,A.u(a.h(0,"hand")),t.qX))},
BW(a){var s,r,q,p,o=a.h(0,"margin"),n=A.b(a.h(0,"ordinal")),m=A.b(a.h(0,"day")),l=A.e([],t.Bv)
for(s=J.R(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.yi(r.a(s.gn())))
s=A.aD(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.zp(a.h(0,"lastReadDay"))
return new A.bY(n,m,l,s,q,p,o==null?null:A.yi(r.a(o)))},
dZ:function dZ(a,b){this.a=a
this.b=b},
t8:function t8(a){this.a=a},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(){},
pA:function pA(a){this.a=a},
bY:function bY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yf(a){return new A.pl(a,A.q(t.S,t.g),A.a2(t.N),A.e([],t.t))},
Cm(a,b){var s,r,q,p,o=A.yf(a)
o.e=A.b(b.h(0,"nextOrdinal"))
o.f=A.b(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.B9(s.a(b.h(0,"tags")),t.N))
for(s=J.R(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.BW(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pl:function pl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
ps:function ps(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.c=a
this.a=b
this.b=c},
nh:function nh(){},
ni:function ni(){},
fj:function fj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nj:function nj(){},
px:function px(){},
pw:function pw(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
qd:function qd(){},
qc:function qc(a,b,c){this.b=a
this.c=b
this.d=c},
qe:function qe(){},
Cy(a,b,c){return B.ki},
kz:function kz(a,b){this.a=a
this.b=b},
qf:function qf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kh:function kh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qn:function qn(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
wz(a){if(!isFinite(0))A.k(A.aq(0,"interpolation",null))
return new A.qG(a)},
i1:function i1(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
qG:function qG(a){this.a=a},
kK:function kK(a,b,c){this.a=a
this.b=b
this.c=c},
yv(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hL(c,A.G(c).c)
r=A.K(r,A.r(r).c)
B.a.Z(r)
s=t.N
r=A.ai(r,s)
r=new A.qE(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b6(l,s,t.X))
r.kI(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
qF(a,b,c,d,e){var s=A.mg("RENDERER_SHA"),r=A.mg("GAME_SHA"),q=A.mg("DART_SDK_VERSION")
return A.yv(a,"64159cda6a88-2998513ce371-dirty",b,c,d,r,A.mg("LOCKFILE_SHA256"),e,A.mg("PROJECT_VERSION"),s,q,null)},
mg(a){var s=B.jb.h(0,a)
return s.length===0?null:s},
qE:function qE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
rr:function rr(a){this.a=a},
ag(a,b,c,d,e,f,g,h,i,j){return new A.e7(e,g,a,f,i,h,j,c,c,b)},
cG:function cG(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c,d,e,f,g,h,i,j){var _=this
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
rs:function rs(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rv:function rv(a){this.a=a},
ru:function ru(a){this.a=a},
rt:function rt(a){this.a=a},
xY(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.k(A.a5("saved day-loop resources must not be negative",null,null))
return new A.nQ(c,g,b,a,e,d===!0,s)},
BF(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.fj)
s=A.e([],t.El)
for(r=J.R(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.fw)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aM(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.ff)
f=A.br(new A.I(B.cL,q.a(new A.nR(h)),p),o)
e=A.br(new A.I(B.cR,n.a(new A.nS(g)),m),l)
if(f==null||e==null)throw A.d(B.fX)
B.a.l(s,new A.fK(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aM(d)||!A.aM(c)||!A.aM(b)||!A.bW(a))throw A.d(B.fE)
return A.xY(c,d,a1,a,b,s,a3)},
bR:function bR(a,b){this.a=a
this.b=b},
by:function by(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function nQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nR:function nR(a){this.a=a},
nS:function nS(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
td:function td(a,b){this.b=a
this.c=b},
eW:function eW(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
p9:function p9(a){this.c=a},
pd:function pd(a,b){this.a=a
this.b=b},
pe:function pe(){},
yx(){var s=A.x3(B.n),r=A.x3(B.n),q=new A.qM(B.D,s,r)
if(!isFinite(0))A.k(B.f4)
if(!B.a.a9(r,B.a.gav(s)))A.k(B.fF)
if(q.a===B.D&&q.b!==0&&!q.e)A.k(B.f8)
return q},
x3(a){var s,r,q,p=A.e([],t.s),o=A.a2(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.fU)
B.a.l(p,q)}return p},
cl:function cl(a,b){this.a=a
this.b=b},
qL:function qL(){},
d_:function d_(){},
qM:function qM(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jV:function jV(a,b){this.a=a
this.b=6
this.c=b},
ET(a){var s,r=A.e([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uR(s).$0())
return r},
GU(a){var s=B.c.E(a,0,1)
if(s<=0.5)return A.zL(4491468,16777215,s*2)
return A.zL(16777215,16759637,(s-0.5)*2)},
zL(a,b,c){var s,r=new A.uZ(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.dj()
s=r.$1(8)
if(typeof s!=="number")return s.dj()
r=r.$1(0)
if(typeof r!=="number")return A.je(r)
return(q<<16|s<<8|r)>>>0},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t9:function t9(a){this.b=a},
uR:function uR(a){this.a=a},
uZ:function uZ(a,b,c){this.a=a
this.b=b
this.c=c},
pR(a,b,c){var s,r=t.N,q=A.q(r,r)
if(a!=null)q.L(0,a)
s=A.q(r,r)
if(b!=null)s.L(0,b)
r=A.q(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.pQ(q,s,r)},
Ct(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aM(s)||s!==1)return l
r=A.yo(a.h(0,"choices"))
q=A.yo(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.q(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.C1(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pR(r,q,p)},
yo(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.q(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.u(q.b))}return r},
C1(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aM(r)||r<1||!A.aM(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cO(s,r,q,p)},
pQ:function pQ(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(){},
pT:function pT(){},
pU:function pU(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
fM(a){var s,r,q=A.q(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rC:function rC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rD:function rD(){},
rE:function rE(){},
eU:function eU(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b){this.a=a
this.b=b},
le:function le(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rF:function rF(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
rG:function rG(){},
rH:function rH(){},
ji:function ji(a){this.a=a},
wg:function wg(a,b,c){this.b=a
this.e=b
this.f=c},
Bg(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.f6)
s=new A.mD()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wT(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dN(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aV(B.bd,new A.mB(a),new A.mC()))},
cM:function cM(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c,d,e){var _=this
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
Bm(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fB)
s=new A.n0()
return new A.dO(s.$1$2(B.bb,a.h(0,"output"),t.xs),s.$1$2(B.b4,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b3,a.h(0,"reverb"),t.gc),s.$1$2(B.b2,a.h(0,"ducking"),t.ul))},
cv:function cv(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
n0:function n0(){},
n1:function n1(a,b){this.a=a
this.b=b},
n2:function n2(a){this.a=a},
nl:function nl(a){this.a=a
this.b=null},
np(a,b,c){var s
b.C()
if(c<1||c>6)throw A.d(A.aq(c,"level","must be between 1 and 6"))
s=A.D(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nn(s,b)
return s},
dS(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.D(a,"button","brush-button brush-state-"+s.b,r)
A.nn(q,b)
q.type="button"
q.disabled=s===B.aq
q.addEventListener("click",A.Z(new A.no(c)))
return q},
Bs(a,b,c,d){var s,r
b.C()
s=A.c(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aq
A.nn(s,b)
s.addEventListener("change",A.Z(new A.ns(d,s)))
return s},
Br(a,b,c,d,e,f){var s,r
b.C()
s=A.c(a.createElement("input"))
s.type="range"
s.min=A.w(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aq
A.nn(s,b)
s.addEventListener("input",A.Z(new A.nr(s,e)))
return s},
wi(a,b){var s=B.b.kn(A.u(a.className),A.yu("\\s+")),r=A.G(s),q=r.i("I<1>"),p=A.K(new A.I(s,r.i("n(1)").a(new A.nq()),q),q.i("p.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a5(p," ")
a.setAttribute("data-brush-state",s)},
nn(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gmB())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aq)a.setAttribute("aria-disabled","true")},
no:function no(a){this.a=a},
ns:function ns(a,b){this.a=a
this.b=b},
nr:function nr(a,b){this.a=a
this.b=b},
nq:function nq(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nu:function nu(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b},
xW(a){var s=!1
if(a.length!==0)if(!B.du.q(0,a))s=B.ld.q(0,a)||B.l4.q(0,a)||B.lc.q(0,a)||!B.b.U(a,"Mouse")
return s},
EC(a){var s,r,q,p,o=t.N,n=A.q(o,t.a)
for(s=new A.J(a,A.r(a).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Fi(a){var s,r,q=A.q(t.N,t.a),p=a==null?null:new A.J(a,A.r(a).i("J<1,2>"))
p=J.R(p==null?A.e([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
fs(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fB(B.j8,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.Fi(a))
s=new A.fr(g,d,h,e,f,c,A.b6(A.EC(q),s,r))
s.C()
return s},
BC(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.ch)
s=a.h(0,"version")
r=J.eo(s)
if(!r.a1(s,1)&&!r.a1(s,2))throw A.d(B.ch)
q=A.q(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.fr)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.Ba(m,new A.nF())){o=A.e([],r)
for(l=J.R(m);l.m();)o.push(A.u(l.gn()))
q.k(0,n,o)}else throw A.d(B.fa)}j=A.am(a.h(0,"horizontalSensitivity"))
r=A.am(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fs(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
wV(a){var s,r,q,p=t.N,o=A.q(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.K(r.b,p)
o.k(0,q,r)}return o},
xc(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xp(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fr:function fr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nH:function nH(){},
nG:function nG(a){this.a=a},
nI:function nI(){},
nJ:function nJ(){},
nK:function nK(){},
nF:function nF(){},
dP:function dP(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.c=b},
jB:function jB(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
BB(a){var s=t.N,r=t.m
r=new A.hr(A.fs(null,null,!1,1,!1,!1,2,1),A.q(s,r),A.q(s,r),A.q(s,r),a,A.c(a.createElement("div")))
r.aS(a)
r.kz(a)
return r},
hr:function hr(a,b,c,d,e,f){var _=this
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
nD:function nD(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
nC:function nC(a,b){this.a=a
this.b=b},
nA:function nA(a,b){this.a=a
this.b=b},
nB:function nB(a,b){this.a=a
this.b=b},
BD(a){var s=new A.nL(a,A.c(a.createElement("div")))
s.aS(a)
s.kA(a)
return s},
nL:function nL(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nM:function nM(a){this.a=a},
BJ(a){var s=new A.nU(A.D(a,"div","door",null))
s.kC(a)
return s},
xZ(a){var s,r,q
if(a.length===0)return""
s=A.e([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.a5(s,"; ")+"."},
nU:function nU(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nV:function nV(a){this.a=a},
nW:function nW(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
this.b=b},
BT(a){var s=new A.o_(a,A.c(a.createElement("div")))
s.aS(a)
s.kD(a)
return s},
o_:function o_(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
o0:function o0(a){this.a=a},
or:function or(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.y=null},
os:function os(){},
C4(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.ot(a.b===B.co,a.c===B.cs,s,a.e===B.cp,a.f===B.cm,a.r===B.cu,a.w,a.x)},
ot:function ot(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wk(a,b,c,d,e,f,g,h){return new A.fy(d,f,h,e,a,g,c,b)},
C5(a){var s,r,q,p,o,n,m,l
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fJ)
s=new A.ou(a)
r=a.h(0,"contextualReminders")
if(!A.bW(r))throw A.d(B.fV)
q=s.$1$2("interactionMode",B.bc,t.bK)
p=s.$1$2("promptDensity",B.bg,t.dn)
o=s.$1$2("textPacing",B.be,t.j_)
n=s.$1$2("journalLayout",B.b5,t.gm)
m=s.$1$2("confirmations",B.b1,t.aJ)
l=s.$1$2("saveFeedback",B.b7,t.mx)
return A.wk(m,r,s.$1$2("focusLossBehavior",B.aB,t.x),q,n,p,l,o)},
dq:function dq(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
ou:function ou(a){this.a=a},
ov:function ov(a,b){this.a=a
this.b=b},
ow:function ow(a){this.a=a},
y4(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fA)
s=new A.dY(1,B.a.aV(B.cM,new A.oI(a),new A.oJ()),A.u(a.h(0,"renderScale")),A.Q(a.h(0,"dynamicResolution")),A.u(a.h(0,"frameTarget")),A.u(a.h(0,"antialiasing")),A.u(a.h(0,"textureQuality")))
s.C()
return s},
k1(a,b){var s=b==null?B.aZ:b
return new A.oK(s,a==null?B.aZ:a)},
Av(a,b){var s,r,q
a.C()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dY(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dY("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hH(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cD&&b.a<2){q=q.hI(B.aY)
B.a.l(s,"High preset was reduced to Standard")}return new A.oD(q,A.ai(s,t.N))},
cw:function cw(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oI:function oI(a){this.a=a},
oJ:function oJ(){},
oK:function oK(a,b){this.a=a
this.b=b},
oC:function oC(a,b){this.a=a
this.b=b},
oD:function oD(a,b){this.a=a
this.b=b},
C7(a){var s=new A.hC(A.q(t.N,t.m),B.aZ,a,A.c(a.createElement("div")))
s.aS(a)
s.kE(a)
return s},
hC:function hC(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oG:function oG(a){this.a=a},
oH:function oH(a){this.a=a},
oF:function oF(a,b,c){this.a=a
this.b=b
this.c=c},
oE:function oE(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(){this.c=0},
C8(a){var s=new A.oM(a,A.c(a.createElement("div")))
s.aS(a)
s.kF(a)
return s},
oM:function oM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oN:function oN(a){this.a=a},
pm:function pm(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pn:function pn(a){this.a=a},
po:function po(a){this.a=a},
pp:function pp(a,b,c){this.a=a
this.b=b
this.c=c},
pq:function pq(){},
pr:function pr(){},
cX:function cX(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
q_:function q_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
D(a,b,c,d){var s=A.c(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zy(a){var s,r,q,p=A.c(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.sL)
for(s=t.m,r=0;r<A.b(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hV:function hV(){},
bi:function bi(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(){},
q6:function q6(){},
c0:function c0(a,b,c){this.a=a
this.c=b
this.d=c},
q4:function q4(a){this.a=a},
q7:function q7(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
q8:function q8(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
q9:function q9(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
qm:function qm(a){this.a=a
this.b=null},
CU(a){var s=new A.qU(a,A.c(a.createElement("div")))
s.aS(a)
s.kK(a)
return s},
qU:function qU(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qV:function qV(a,b){this.a=a
this.b=b},
qW:function qW(a){this.a=a},
kN(a,b){var s=t.N,r=t.m
r=new A.fJ(b,A.q(s,r),A.q(s,r),A.q(s,t.rf),A.q(s,r),$.wa(),B.an,A.q(s,r),A.q(s,r),B.aN,A.q(s,r),a,A.c(a.createElement("div")))
r.aS(a)
r.kL(a,b)
return r},
fJ:function fJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.id=null
_.k1=f
_.k2=g
_.k3=h
_.k4=i
_.ok=j
_.p1=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
rj:function rj(a,b){this.a=a
this.b=b},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
rb:function rb(a,b){this.a=a
this.b=b},
rc:function rc(a,b){this.a=a
this.b=b},
ra:function ra(a){this.a=a},
rd:function rd(a){this.a=a},
qX:function qX(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(a,b){this.a=a
this.b=b},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a){this.a=a},
r3:function r3(a){this.a=a},
r4:function r4(a){this.a=a},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
qY:function qY(a){this.a=a},
qZ:function qZ(a){this.a=a},
r_:function r_(a){this.a=a},
r0:function r0(a){this.a=a},
rg:function rg(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rn(a){return B.a.aV(B.C,new A.ro(a),new A.rp(a))},
CV(){var s,r,q=A.q(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
dA(a,b){var s=t.z
s=A.fB(A.CV(),s,s)
if(a!=null)s.L(0,a)
s=new A.rm(b,A.b6(s,t.N,t.K))
s.kM(a,b)
return s},
yA(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fS)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.fi)
return A.dA(A.aN(s,t.N,t.K),A.b(a.h(0,"version")))},
bx:function bx(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ro:function ro(a){this.a=a},
rp:function rp(a){this.a=a},
rm:function rm(a,b){this.a=a
this.b=b},
wC(a,b){var s=b==null?A.dA(null,1):b
return new A.rq(s,a==null?A.dA(null,1):a)},
CW(a,b){var s,r,q,p,o,n,m,l=A.q(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eK(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.d8(r)
J.bM(l,s.a,r)}catch(n){if(!(A.ak(n) instanceof A.H))throw n}}m=A.dA(l,1)
return A.wC(m,m)},
rq:function rq(a,b){this.a=a
this.b=b},
CX(a){var s=new A.rz(a,A.c(a.createElement("div")))
s.aS(a)
s.kN(a)
return s},
rz:function rz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rA:function rA(a,b,c){this.a=a
this.b=b
this.c=c},
Bj(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.Fg)
for(s=a.d,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.ct(p+m+":"+k,m,l.a,l.b,j))}}B.a.V(i,new A.mM())
return new A.mL(A.ai(i,t.bC),A.a2(t.N))},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mL:function mL(a,b){this.a=a
this.b=b},
mN:function mN(){},
mM:function mM(){},
Dc(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mB
s=t.L
r=A.q(s,t.q1)
q=A.r(a).i("ad<1>")
p=A.K(new A.ad(a,q),q.i("p.E"))
B.a.Z(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.v)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.ba(new A.bn(B.mj,k+" has an out-of-range authored day "+h+"."))
g=A.Db(k,h,i.b,m)
if(g instanceof A.ba)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bS(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.q(a,q)
for(o=a0.ax,o=new A.al(o,o.r,o.e,A.r(o).i("al<2>"));o.m();){n=o.d
J.hj(e.cs(n.b,new A.t2()),n)}o=A.b6(a0.at,a,t.sy)
q=A.q(a,q)
for(n=new A.J(e,e.$ti.i("J<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.at(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lc(new A.lb(r,A.a2(a),A.a2(s),o,q,A.e([],t.Dc),B.P,A.pR(b,b,b)))},
Db(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.q(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cJ[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.U(h,m))continue
g=A.dx(B.b.b1(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.ba(new A.bn(B.mk,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cQ
B.a.l(l,new A.c5(g,i.b,f))}if(l.length===0)continue
B.a.V(l,new A.t_())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.ba(new A.bn(B.dN,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.ba(new A.bn(B.dN,a+" day "+s+" has no authored tiers."))
return new A.lI(c)},
lb:function lb(a,b,c,d,e,f,g,h){var _=this
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
t5:function t5(a){this.a=a},
t4:function t4(a){this.a=a},
t6:function t6(a){this.a=a},
t0:function t0(a){this.a=a},
t1:function t1(){},
t3:function t3(a){this.a=a},
t2:function t2(){},
rZ:function rZ(a){this.a=a},
rY:function rY(a){this.a=a},
t_:function t_(){},
lc:function lc(a){this.a=a},
lI:function lI(a){this.a=a},
Gp(a){var s,r,q,p=A.a2(t.N)
for(s=new A.J(a,A.r(a).i("J<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaE(),q=q.gu(q);q.m();)if(q.gn().ga0().N(0,new A.vq())){p.l(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.Z(s)
return s},
Go(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.at(b,!0,s)
B.a.Z(r)
q=new A.ef()
q.c_((a^913741)>>>0)
p=q.aP(4)
if(!(p>=0&&p<4))return A.f(B.cI,p)
o=B.cI[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.at(r,!0,s)
B.a.dk(m,q)
s=A.id(m,0,A.en(n,"count",t.S),A.G(m).c).bW(0)
B.a.Z(s)
return s},
vq:function vq(){},
yM(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aM(r)||!A.aM(q)||!A.aM(p)||r<1||q<0||q>23||p<0)return null
return new A.bS(s,r,q,p)},
Da(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a2(t.N)
for(s=t.j,q=J.R(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a2(t.L)
for(s=J.R(s.a(a.h(0,j)));s.m();){n=A.yM(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Bi(m)
if(!s&&l==null)return i
return new A.ld(r,o,l)},
Bi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yM(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aM(p))if(!(p<0))if(A.bW(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.br(new A.I(B.cJ,t.qR.a(new A.mI(r)),t.cE),t.hF)
j=A.br(new A.I(B.j4,t.da.a(new A.mJ(q)),t.g2),t.gM)
l=o==null
i=l?g:A.br(new A.I(B.i9,t.kr.a(new A.mK(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jk(s,k,j,p,i,n,A.aD(m))},
bO:function bO(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d6:function d6(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
rX:function rX(){},
jk:function jk(a,b,c,d,e,f,g){var _=this
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
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
t7:function t7(){},
ba:function ba(a){this.a=a},
l9:function l9(a){this.a=a},
l7:function l7(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
Fx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jf())return f
n=A.d4().gaM()
m=n.h(0,"captureSeed")
l=A.dx(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dx(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eK(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aH(s,f)
if(t.f.b(q)){m=t.N
p=A.q(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.l6.q(0,o.b))return f
J.bM(p,A.u(o.a),A.u(o.b))}r=p}else return f}catch(g){if(A.ak(g) instanceof A.H)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lb.q(0,i))return f
if(h!=null&&!B.l9.q(0,h))return f
return new A.tk(l,k,j,h,r)},
Fy(){var s,r,q,p=A.d4().gaM().h(0,"cameraProfile")
A:{if("wide"===p){s=B.ex
break A}if("intimate"===p){s=B.ez
break A}s=B.ey
break A}r=A.d4().gaM().h(0,"cameraFov")
q=A.eK(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fm(B.c.E(q,35,100)*3.141592653589793/180,s.b,s.c)},
ja(a){var s=$.b1
if(s===a&&B.b.q(A.u(a.b.className),"open"))return
if(s!=null)s.a8()
$.b1=a
if(a===$.cr.j())$.hi().jn("gameplay.viewport")
else $.hi().oT(A.zQ(a))
s=$.ae.j()
s.ay=!1
s.bd()
$.ej=0
a.bR()},
x8(a,b,c){var s,r,q
$.jb=!0
s=$.b1
if(s!=null)s.a8()
$.b1=a
s=$.hi()
if(s.a.a.length===0)s.jn(c)
r=A.K(s.a.a,t.oP)
r.push(new A.dw(b,B.W,c))
q=s.a
s.a=new A.e3(r,q.b,q.c)
s.lh(b)
s=$.ae.j()
s.ay=!1
s.bd()
$.ej=0
a.bR()
$.jb=!1},
dL(a){var s,r,q,p,o,n,m,l=null
if($.jb)return
$.jb=!0
a.a8()
$.b1=null
s=$.hi().mL()
$.jb=!1
r=s.a
if(r===B.df){$.ej=0
r=$.ae.j()
r.bd()
r.ay=!0
q=A.i(A.c(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.de)return
r=s.c.a
r=r.length===0?l:B.a.gX(r)
p=r==null?l:r.a
A:{if(B.bl===p){r=$.cr.j()
break A}if(B.d4===p){r=$.h2.j()
break A}r=l
break A}if(r!=null){o=s.d
$.b1=r
n=$.ae.j()
n.ay=!1
n.bd()
$.ej=0
r.bR()
m=o==null?l:A.i(A.c(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jd(a){if($.b1===a&&B.b.q(A.u(a.b.className),"open"))a.a8()
else A.ja(a)},
h8(a){var s
if($.jb)return
if($.b1===a)$.b1=null
if(a===$.cr.j())$.hi().ct()
else $.hi().nD(A.zQ(a))
$.ej=0
s=$.ae.j()
s.bd()
s.ay=!0},
zQ(a){if(a===$.cr.j())return B.d5
if(a===$.h2.j())return B.W
if(a instanceof A.fJ)return B.W
if(a instanceof A.hC)return B.W
if(a instanceof A.hr)return B.W
if(a===$.h1.j())return B.k2
if(a===$.ma.j())return B.k3
if(a===$.j_.j())return B.k4
if(a===$.m8.j())return B.W
if(a===$.iY.j())return B.k6
return B.k5},
mf(a,b){var s
a.soI(new A.uf())
a.soK(new A.ug())
a.soJ(new A.uh())
a.soE(new A.un())
a.soH(new A.uo())
a.soS(new A.up())
a.soN(new A.uq())
a.soM(new A.ur())
a.sb7(b?new A.us(a):new A.ut(a))
a.sb_(b?new A.uu(a):new A.ui(a))
s=a.f
if(s===B.H)a.sow(new A.uj())
if(s===B.Y)a.soF(new A.uk())
if(s===B.I){a.sov(new A.ul())
a.soL(new A.um())}},
Ez(){var s=$.h0.j()
s.seO(new A.uc())
s.sb7(new A.ud())
s.sb_(new A.ue())},
Fn(){var s,r,q,p,o,n=null
try{n=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aH(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.k(B.fL)
q=A.y4(r.h(0,"requested"))
$.uS=A.k1(A.y4(r.h(0,"effective")),q)}catch(s){$.uS=A.k1(null,null)}p=$.xK().a
o=A.Av(p,A.zC())
r=o.a
$.uS=A.k1(r,p)
$.h0.j().fg(p,r,o.b)
A.zU()},
zC(){var s,r,q,p,o=$.da.j().gbu().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.U(p,"max-samples-"))continue
r=A.dx(B.b.b1(p,12),null)
if(r==null)r=1}return new A.oC(r,B.a.q(o,"disjoint-timer-query"))},
zU(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.am($.xK().B(),null))}catch(s){}},
Ey(){var s=$.iX.j()
s.seO(new A.u9())
s.sb7(new A.ua())
s.sb_(new A.ub())},
Fl(){var s,r,q,p,o,n=null
try{n=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.x_=A.BC(B.k.aH(n,null))}catch(s){$.x_=A.fs(null,null,!1,1,!1,!1,2,1)}r=$.iX.j()
q=r.w=$.fb()
r.x=new A.jB(q)
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
r.dP()
$.ae.j().fd($.fb().r)
r=$.ae.j()
q=$.fb()
p=r.ch
p.a=q.f
p.eY()
r.bd()
A.zS()},
zS(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.am($.fb().B(),null))}catch(s){}},
Fk(){var s,r=null
try{r=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j4=A.Bm(B.k.aH(r,null))}catch(s){$.j4=B.aN}$.fZ.j().jS($.j4)
A.zR()
A.wS()},
zR(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.am($.j4.B(),null))}catch(s){}},
wS(){var s=$.bq
if(s==null)return
s.k5($.j4)},
Fm(){var s,r=null
try{r=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.x2=A.C5(B.k.aH(r,null))}catch(s){$.x2=$.wa()}$.iZ.j().jT($.wc())
A.zT()
A.zk()},
zT(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.k.am($.wc().B(),null))}catch(s){}},
zk(){var s,r="detailed",q=A.C4($.wc()),p=A.i(A.c(v.G.document).documentElement)
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
p.setAttribute("data-gameplay-reminders",s)},
Fj(){var s,r=null
try{r=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.ei=A.Bg(B.k.aH(r,null))}catch(s){$.ei=B.an}$.f6.j().fc($.ei)
A.x9()
A.mc()},
x9(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.am($.ei.B(),null))}catch(s){}},
mc(){var s,r,q,p,o,n,m=$.ei,l=$.vc,k=$.xn,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.k(B.fg)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a7
$.mp=l
r=$.bU.j()
r.r=$.mp?0.5:1
q=A.i(A.c(v.G.document).documentElement)
r=q==null
p=r?null:A.Q(A.c(q.classList).contains("high-contrast"))
o=r?null:A.Q(A.c(q.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!r)A.Q(A.c(q.classList).toggle("reduced-motion",l))
if(!r)A.Q(A.c(q.classList).toggle("photosensitivity-safe",k))
if(!r)A.Q(A.c(q.classList).toggle("captions-enabled",s))
if(!r)A.Q(A.c(q.classList).toggle("reduced-effects",o))
if(!r)A.Q(A.c(q.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(q))A.c(q.style).setProperty("font-size",A.w(j*100)+"%")
r=$.B.j()
r.setAttribute("data-accessibility-reduced-motion",""+l)
r.setAttribute("data-accessibility-photosensitivity-safe",""+k)
r.setAttribute("data-accessibility-ui-scale",A.w(j))
r.setAttribute("data-accessibility-captions",""+s)
r.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
r.setAttribute("data-accessibility-reduced-effects",""+o)
r.setAttribute("data-accessibility-focus-visible",""+p)
r.setAttribute("data-accessibility-essential-cues","true")
if($.zi){m=$.bc.j()
l=$.ei.f
m.e=new A.ji(l==null?B.a7:l)
m=$.bc.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
EY(){var s=v.G,r=A.c(A.c(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.c(A.c(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uW(r,q)
r.addEventListener("change",A.Z(new A.uU(s)))
q.addEventListener("change",A.Z(new A.uV(s)))},
vx(){var s=0,r=A.bH(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$vx=A.bK(function(e4,e5){if(e4===1){o.push(e5)
s=p}for(;;)switch(s){case 0:e0=v.G
e1=A.i(A.c(e0.document).getElementById("game"))
if(e1==null){s=1
break}$.B.b=e1
$.x1=A.i(A.c(e0.document).getElementById("fps"))
$.c7.b=$.AW().cz(A.d4().gaM().h(0,"renderer"))
A.EZ()
b9=$.B.j()
c0=A.b(A.c(e0.window).innerWidth)>0?A.b(A.c(e0.window).innerWidth):800
b9.width=c0
c0=$.B.j()
b9=A.b(A.c(e0.window).innerHeight)>0?A.b(A.c(e0.window).innerHeight):600
c0.height=b9
c1=A.i(A.c(e0.document).getElementById("ui-canvas"))
if(c1!=null){c1.width=A.b($.B.j().width)
c1.height=A.b($.B.j().height)
b9=new A.nu(c1,A.e([],t.km))
c2=A.i(c1.getContext("2d"))
if(!t.m.b(c2))A.k(A.m("Failed to get 2D context for CanvasP5GuiEngine"))
b9.b=c2
$.v2=b9}n=A.i(e1.getContext("webgl2"))
if(n==null){$.c7.b=B.c2.hM($.c7.j(),B.e_)
g=B.aQ.ny($.c7.j())
g.bj()
$.da.b=g
A.zW()
A.ek("no-webgl2")
e0=A.i(A.c(e0.document).getElementById("credits"))
if(e0!=null)e0.textContent="this browser has no webgl2."
s=1
break}try{if($.c7.j().a===B.a_){b9=t.s6
c0=t.N
c3=t.iO
c4=t.m3
c5=t.pw
c6=new A.iG(n,A.b($.B.j().width),A.b($.B.j().height),A.e([],b9),A.q(c0,t.qr),A.e([],t.s3),A.q(c0,c3),A.q(c0,c4),A.q(c0,t.xp),A.q(c0,t.bE),A.q(c0,c3),A.q(c0,c4),A.e([],b9),A.q(c0,c3),A.q(c0,c4),A.q(c0,c0),A.q(t.S,c5),A.q(c0,t.qS),A.e([],t.j5),B.iC,A.q(c0,t.Aj),A.q(c0,c0),A.q(c0,c5),A.q(c0,t.vD),A.q(c0,c5),B.h2,B.kk)}else c6=new A.fP(n,A.b($.B.j().width),A.b($.B.j().height),A.d4().gaM().h(0,"render")==="legacy",$.c7.j().d,$.c7.j().e)
m=c6
$.bI=m instanceof A.iG?m:null
$.mi=m instanceof A.fP?m:null
b9=B.aQ.e0($.c7.j(),m)
b9.bj()
$.da.b=b9}catch(e3){l=A.ak(e3)
k=A.cK(e3)
b9=$.c7.j()
$.c7.b=B.c2.hM(b9,B.dZ)
$.mi=new A.fP(n,A.b($.B.j().width),A.b($.B.j().height),A.d4().gaM().h(0,"render")==="legacy",!0,$.c7.j().e)
b9=B.aQ.e0($.c7.j(),$.mi)
b9.bj()
$.da.b=b9
$.B.j().setAttribute("data-renderer-error",A.w(l))
if($.jf())$.B.j().setAttribute("data-renderer-error-stack",A.w(k))}A.zW()
p=4
A.ek("initializing")
$.bU.b=new A.nt(new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),$.xJ())
$.vc=A.Q(A.c(A.c(e0.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xn=A.Q(A.c(A.c(e0.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.mp=$.vc
b9=$.bU.j()
b9.r=$.mp?0.5:1
b9=A.c(e0.window)
c0=t.N
c3=t.s
c4=t.a
c3=A.Cc(A.N(["moveForward",A.e(["KeyW"],c3),"moveBack",A.e(["KeyS"],c3),"moveLeft",A.e(["KeyA"],c3),"moveRight",A.e(["KeyD"],c3),"interact",A.e(["KeyE"],c3),"secondary",A.e(["KeyQ"],c3),"run",A.e(["ShiftLeft"],c3),"crouch",A.e(["ControlLeft"],c3),"rotate",A.e(["KeyR"],c3),"reach",A.e(["KeyF"],c3),"journal",A.e(["KeyJ"],c3),"sleep",A.e(["KeyL"],c3),"pause",A.e(["Escape"],c3)],c0,c4))
c5=A.c(b9.document)
c3=new A.k7(b9,c5,A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),new A.a(0,0,0),new A.pf(),c3)
b9.addEventListener("keydown",A.Z(c3.glO()))
b9.addEventListener("keyup",A.Z(c3.glQ()))
b9.addEventListener("mousemove",A.Z(c3.glW()))
b9.addEventListener("mousedown",A.Z(c3.glU()))
b9.addEventListener("mouseup",A.Z(c3.glY()))
b9.addEventListener("wheel",A.Z(c3.gm_()))
c5.addEventListener("pointerlockchange",A.Z(c3.glS()))
$.ae.b=c3
$.ze.b=new A.k5(A.e([],t.pW),t.eO)
c3=$.B.j()
b9=A.b(A.c(e0.window).innerWidth)>0?A.b(A.c(e0.window).innerWidth):800
c3.width=b9
b9=$.B.j()
c3=A.b(A.c(e0.window).innerHeight)>0?A.b(A.c(e0.window).innerHeight):600
b9.height=c3
A.ek("renderer")
if($.c7.j().a===B.bu){b9=$.mi
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.h9=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.ek("text")
b9=$.fc()
s=7
return A.ap(b9.cq(),$async$vx)
case 7:j=b9.pG()
i=A.Dc(j)
if(!(i instanceof A.lc)){h=t.bB.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aH.b=i.a
$.m7.b=A.Bj(j)
g=A.q(c0,c4)
for(c3=t.j,c8=0;c8<5;++c8){f=B.z[c8]
c4=A.u(f)
c5=b9.c
c5===$&&A.h()
c9=c5.h(0,c4)
c4=c3.b(c9)?A.at(c9,!0,c0):B.n
J.bM(g,f,c4)}e=A.Dd(g)
$.wR.b=new A.nm(B.ew)
d=$.wR.j().p_(new A.vy(e))
d0=$.wb()
c=d0
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aR.aP(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c4=c
c4=c4==null?null:B.c.aW(c4.c)
if(c4==null)c4=10
if(b9<1)A.k(A.aq(b9,"startDay","must be at least 1"))
if(c4<0||c4>=24)A.k(A.aq(c4,"startHour","must be 0 through 23"))
if(!isFinite(480))A.k(A.aq(480,"daySeconds","must be finite and > 0"))
d1=new A.jV(b9,480)
d1.b=c4
d2=A.yf(e)
g=A.y2(42,g,A.y5(42),d1,d2,A.xY(6,16,d2,null,6,B.iD,d1),new A.jJ(0,0,0,!1),A.pR(null,null,null))}else{g=d.a
g.toString
g=A.y3(g,e)}$.V.b=g
$.aH.j().y=$.V.j().z
g=A.ai(A.ET($.V.j().b),t.fu)
$.u0.b=new A.t9(g)
g=$.wd()
b9=d.a
g.f_(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.da.j().bc(A.wz($.V.j().geR()))
if(d.b!=null){g=d.b
g.toString
A.ha(g)}g=$.aH.j()
b9=A.Go($.V.j().b,A.Gp(j.b))
g.sko(A.hL(b9,A.G(b9).c))
A.ek("house")
$.X.b=$.V.j().c
g=d0==null
b=g?null:d0.e
a=g?null:d0.f
if(a!=null)for(g=$.X.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.v)(g),++c8){a0=g[c8]
for(c4=a0.e,c5=c4.length,d3=0;d3<c4.length;c4.length===c5||(0,A.v)(c4),++d3){a1=c4[d3]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a3(b,"open")||J.a3(b,"closed")){a3=J.a3(b,"open")
for(g=$.X.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.v)(g),++c8){a4=g[c8]
for(c4=a4.e,c5=c4.length,d3=0;d3<c4.length;c4.length===c5||(0,A.v)(c4),++d3){a5=c4[d3]
a5.ske(a3)}}}a6=$.xH()
if(a6!=null&&a6.length!==0)for(g=$.X.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.v)(g),++c8){a7=g[c8]
for(c4=a7.r,c5=c4.length,d3=0;d3<c5;++d3){a8=c4[d3]
if(a8.a===a6)a8.d=$.xI()}}g=$.bI
if(g!=null)g.mK($.X.j())
$.b0.b=$.V.j().d
$.X.j()
g=new A.a(12.9375,1.65,0.825)
$.xo=$.xb=$.xh=g
a9=g.aj(0,new A.a(0,1.3499999999999999,0))
$.j0.b=new A.jv(a9,J.xL(a9,new A.a(0,1.2000000000000002,0)))
$.h_.b=new A.o2()
$.bV.b=A.yx()
$.as="hall"
g=d.a
b0=A.Cz(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.of($.X.j())){g=b0.b
$.xo=$.xb=$.xh=g
$.c8=b0.c
$.el=b0.d
$.as=b0.a
b1=g.aj(0,new A.a(0,1.3499999999999999,0))
g=$.j0.j()
g.smM(b1)
g.b=J.xL(b1,new A.a(0,1.2000000000000002,0))
g=$.j0.j()
b9=$.X.j()
c4=b0.e
c5=b0.f
g.pr($.as,$.eq(),b9,c5,c4)
A.ha("restored position")}g=A.CU(A.c(e0.document))
g.sox(new A.vz())
g.sb7(new A.vA())
g.sb_(new A.vL())
$.h2.b=g
g=A.c(e0.document)
b9=A.c(g.createElement("div"))
c4=new A.q8(g,b9)
c4.aS(g)
b9.className=A.u(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.c(b9.appendChild(A.np(g,B.ed,1)))
A.c(b9.appendChild(A.D(g,"p","settings-copy","The house waits. Choose what to do next.")))
d4=A.D(g,"nav","pause-actions",null)
d4.setAttribute("aria-label","Pause actions")
c4.bn(g,d4,B.d6,"resume")
c4.bn(g,d4,B.d7,"settings")
c4.bn(g,d4,B.d8,"controls")
c4.bn(g,d4,B.d9,"save now")
c4.bn(g,d4,B.da,"help")
c4.bn(g,d4,B.db,"credits")
c4.bn(g,d4,B.dc,"back")
A.c(b9.appendChild(d4))
c4.soO(new A.vT())
c4.sb7(new A.vU())
c4.soQ(new A.vV())
c4.soB(new A.vW())
c4.soP(new A.vX())
c4.soG(new A.vY())
c4.soC(new A.vZ())
c4.sb_(new A.vB())
$.cr.b=c4
c4=$.V.j().e
b9=$.b0.j()
$.V.j()
$.m9.b=new A.pd(c4,b9)
b9=A.c(e0.document)
c4=$.V.j().e
g=$.b0.j()
c5=$.m9.j()
d5=A.c(b9.createElement("div"))
c5=new A.pm(c4,g,c5,b9,d5)
c5.aS(b9)
d5.setAttribute("aria-label","The Journal")
A.c(d5.appendChild(A.D(b9,"div","journal-title","The Journal")))
d6=A.D(b9,"div","journal-pages",null)
g=A.D(b9,"div","page page-left",null)
c5.y!==$&&A.L()
c5.y=g
c4=A.D(b9,"div","page page-right",null)
c5.z!==$&&A.L()
c5.z=c4
A.c(d6.appendChild(g))
A.c(d6.appendChild(c4))
A.c(d5.appendChild(d6))
A.c(d5.appendChild(c5.l_()))
d7=A.D(b9,"div","tape-roll",null)
A.c(d7.style).setProperty("width","8rem")
c4=A.D(b9,"div","tape-fill",null)
c5.as!==$&&A.L()
c5.as=c4
A.c(d7.appendChild(c4))
A.c(d5.appendChild(d7))
d8=A.D(b9,"div","consult",null)
A.c(d8.appendChild(A.D(b9,"div","consult-label","Cite an entry")))
c4=A.D(b9,"div","entry-picker",null)
c5.at!==$&&A.L()
c5.at=c4
g=A.D(b9,"div","consult-result",null)
c5.ax!==$&&A.L()
c5.ax=g
A.c(d8.appendChild(c4))
A.c(d8.appendChild(g))
A.c(d5.appendChild(d8))
d9=A.i(b9.documentElement)
if(t.m.b(d9)){A.c(d9.style).setProperty("--shake-max-deg","3deg")
A.c(d9.style).setProperty("--shake-max-px","2px")}$.h1.b=c5
$.h1.j().sb_(new A.vC())
g=A.c(e0.document)
b9=A.D(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.c(b9.style).setProperty("transition-duration","0.3s")
A.c(A.i(g.body).appendChild(b9))
$.zf.b=new A.qm(b9)
b9=A.c(e0.document)
g=A.D(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.c(A.i(b9.body).appendChild(g))
$.zd.b=new A.nl(g)
g=A.c(e0.document)
b9=A.D(g,"div","ambient-notice",null)
c4=A.D(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.c(A.i(g.body).appendChild(b9))
A.c(A.i(g.body).appendChild(c4))
$.bc.b=new A.mO(b9,c4,B.K)
$.zi=!0
c4=A.BJ(A.c(e0.document))
c4.soA(A.GF())
c4.soz(A.GE())
$.av.b=c4
$.cL().soy(new A.vD())
c4=d.a
b2=A.Da(c4==null?null:c4.c.h(0,"visitors"))
if(b2!=null&&$.aH.j().f_(b2))A.FD()
g=$.m7.j()
b9=d.a
g.ps(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c3.b(b3))for(g=J.R(b3);g.m();){b4=g.gn()
if(A.aM(b4))$.ve.l(0,b4)}g=A.CX(A.c(e0.document))
g.soR(new A.vE())
g.sb_(new A.vF())
$.ma.b=g
g=A.C8(A.c(e0.document))
g.sb_(new A.vG())
$.j_.b=g
g=A.BD(A.c(e0.document))
g.sb_(new A.vH())
$.m8.b=g
$.j1.b=A.kN(A.c(e0.document),null)
$.j2.b=A.kN(A.c(e0.document),B.X)
$.f6.b=A.kN(A.c(e0.document),B.I)
A.mf($.j1.j(),!1)
A.mf($.j2.j(),!0)
A.mf($.f6.j(),!0)
A.Fj()
A.EY()
$.h0.b=A.C7(A.c(e0.document))
A.Ez()
A.Fn()
$.fZ.b=A.kN(A.c(e0.document),B.H)
A.mf($.fZ.j(),!0)
A.Fk()
$.iZ.b=A.kN(A.c(e0.document),B.Y)
A.mf($.iZ.j(),!0)
A.Fm()
$.iX.b=A.BB(A.c(e0.document))
A.Ey()
A.Fl()
g=A.BT(A.c(e0.document))
g.sb_(new A.vI())
g.soD(new A.vJ())
$.iY.b=g
g=d.a
b5=A.BV(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zV(b5)
b6=$.h9
if(b6!=null){A.ek("world")
g=$.X.j()
b9=b6
c0=new A.qJ(g,b9,A.q(c0,t.J))
c0.kJ(g,b9)
$.h4=c0}g=B.b.q(A.u(A.c(A.c(e0.window).location).search),"shaders=live")
$.Aa=g
if(g){g=$.h9
if(g!=null)g.bU()}A.zZ()
A.c(e0.window).addEventListener("resize",A.Z(new A.vK()))
A.c(e0.document).addEventListener("visibilitychange",A.Z(new A.vM()))
A.c(e0.window).addEventListener("keydown",A.Z(new A.vN()))
A.c(e0.window).addEventListener("keyup",A.Z(new A.vO()))
A.c(e0.window).addEventListener("keydown",A.Z(new A.vP()))
A.c(e0.window).addEventListener("click",A.Z(new A.vQ()))
$.B.j().addEventListener("mousemove",A.Z(new A.vR()))
$.B.j().addEventListener("click",A.Z(new A.vS()))
A.h6()
A.ek("raf")
A.b(A.c(e0.window).requestAnimationFrame(A.Z(A.Au())))
p=2
s=6
break
case 4:p=3
e2=o.pop()
b7=A.ak(e2)
b8=A.cK(e2)
A.v6(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bF(q,r)
case 2:return A.bE(o.at(-1),r)}})
return A.bG($async$vx,r)},
EW(a){var s,r=$.v2
if(!$.av.j().y||r==null)return
s=A.zu(a)
if(s==null)return
$.cL().o9(s.a,s.b,A.ai(r.d,t.rO))},
EV(a){var s,r=$.v2
if(!$.av.j().y||r==null)return!1
s=A.zu(a)
if(s==null)return!1
return $.cL().o8(s.a,s.b,A.ai(r.d,t.rO))},
zu(a){var s=A.c($.B.j().getBoundingClientRect()),r=A.am(s.width),q=A.am(s.height)
if(r<=0||q<=0)return null
return new A.aW((A.b(a.clientX)-A.am(s.left))*(A.b($.B.j().width)/r),(A.b(a.clientY)-A.am(s.top))*(A.b($.B.j().height)/q))},
EZ(){var s=v.G
A.c(s.window).addEventListener("error",A.Z(new A.uX()))
A.c(s.window).addEventListener("unhandledrejection",A.Z(new A.uY()))},
ek(a){if($.wW===a)return
$.wW=a
$.B.j().setAttribute("data-boot-phase",a)},
zW(){var s,r,q=$.da.j().gbu(),p=$.B.j(),o=A.d4().gaM().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-diagnostics",B.k.am(q.B(),null))
p.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
p.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
p.setAttribute("data-renderer-lighting-falloff","smoothstep")
p.setAttribute("data-renderer-dof-focal-distance","2.5m")
p.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
p=$.bI
s=p==null?null:p.x
if(s!=null)$.B.j().setAttribute("data-renderer-profile-fallback",s)
p=$.mi
r=p==null?null:p.y
if(r!=null)$.B.j().setAttribute("data-renderer-frame-submits",A.w(r))},
Fu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(!$.jf())return
s=$.xH()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.xI()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.u0.j().eF($.V.j().gab().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.wb()
o=q==null?b:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.c.ae(A.zY($.as),3))
r=$.B.j()
q=$.wW
n=$.as
m=$.eq()
l=t.N
m=A.N(["x",m.a,"y",m.b,"z",m.c],l,t.i)
k=$.c8
j=$.el
i=$.b1!=null||$.av.j().y
h=t.K
r.setAttribute("data-automation-player",B.k.am(A.N(["schemaVersion",1,"phase",q,"roomId",n,"eye",m,"yaw",k,"pitch",j,"modal",i,"inputEnabled",$.ae.j().ay,"day",$.V.j().gab().a,"hour",$.V.j().gab().b],l,h),b))
g=A.q(l,t.X)
for(r=$.X.j().c,q=r.length,f=0;f<r.length;r.length===q||(0,A.v)(r),++f){e=r[f]
n=e.ax
m=e.ay
k=e.z
j=n&&!m&&!k
g.k(0,e.a,A.N(["a",e.b,"b",e.c,"open",n,"locked",m,"sticks",k,"passable",j],l,h))}$.B.j().setAttribute("data-automation-portals",B.k.am(g,b))
d=$.md
r=!1
if(d!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.as
q=r.e.h(0,q)!=null
r=q}if(r){c=d.cu("cellar",$.as)
$.B.j().setAttribute("data-audio-transmission-cellar",B.k.am(A.N(["sourceRoom","cellar","listenerRoom",$.as,"portalPath",c.a,"gainDb",c.c,"lowPassHz",c.d,"muffle01",c.e,"barrierIds",c.b,"reasonTrace",c.r,"reachable",c.f],l,h),b))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mr(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bV.j().a!==B.D){A.ha("save unavailable during rupture")
return}try{r=$.wR.j()
q=$.V.j()
p=t.N
o=t.z
s=A.q(p,o)
n=$.as
m=$.eq()
l=$.c8
k=$.el
j=$.j0.j().d
j=j==null?null:j.a.a
i=$.j0.j().d
J.bM(s,"player",new A.kB(n,m,l,k,j,i==null?null:i.b).B())
n=$.aH.j()
m=A.qT(n.b,p)
l=A.qT(n.c,t.L)
n=n.r
J.bM(s,"visitors",new A.ld(m,l,n==null?null:new A.jk(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.m7.j().b
n=A.K(n,A.r(n).c)
B.a.Z(n)
J.bM(s,"ambient",n)
n=A.K($.ve,A.r($.ve).c)
B.a.Z(n)
J.bM(s,"unverifiables",n)
J.bM(s,"inventoryInspections",$.wd().B())
n=$.x0
if(n!=null)J.bM(s,"ending",A.N(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.y7(q.c).B()
k=q.d
r.pJ(A.yy(s,A.N(["houseSeed",n,"runSeed",m,"house",l,"time",A.N(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.ha(a)}catch(h){A.ha("save failed")}},
Fs(){var s=A.i(A.c(v.G.document).documentElement),r=s==null?null:A.aD(s.getAttribute("data-gameplay-focus-loss")),q=A.br(new A.I(B.aB,t.rg.a(new A.v1(r)),t.vK),t.x)
switch((q==null?B.aV:q).a){case 0:$.mn=!0
s=$.bq
if(s!=null)s.ff(!0)
break
case 1:$.mn=!0
break
case 2:break}},
ha(a){var s=v.G,r=A.i(A.c(s.document).getElementById("save-status"))
if(r==null)return
s=A.i(A.c(s.document).documentElement)
s=s==null?null:A.aD(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.C3(B.eQ,new A.va(r),t.H)},
v6(a,b){var s,r,q,p
A.ek("error")
s=A.w(a)
r=A.xy(s,"\n"," ")
s=$.x1
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.c(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.jf()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.c(s.console).error(p)},
zn(){var s,r
if($.wU)return
$.wU=!0
s=$.bq
r=s==null
if(!r)s.ct()
if(!r)s.fn("music")
B.a.l($.dc,"arm")},
h6(){var s=0,r=A.bH(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$h6=A.bK(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ap(A.h5(),$async$h6)
case 2:o=null
q=4
s=7
return A.ap(A.b2(A.c(A.c(v.G.window).fetch("res/manifest.json")),t.m),$async$h6)
case 7:n=b
i=A
s=8
return A.ap(A.b2(A.c(n.json()),t.X),$async$h6)
case 8:o=i.c(b)
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
l=A.i(A.c(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.m8.j().f
l===$&&A.h()
l.textContent=k}s=9
return A.ap(A.oh(A.e([A.v_(o),A.uT(o)],t.iJ),t.H),$async$h6)
case 9:return A.bF(null,r)
case 1:return A.bE(p.at(-1),r)}})
return A.bG($async$h6,r)},
h5(){var s=0,r=A.bH(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$h5=A.bK(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.iw[g]
q=6
s=9
return A.ap(A.b2(A.c(A.c(j.window).fetch(o)),i),$async$h5)
case 9:n=a0
s=10
return A.ap(A.b2(A.c(n.text()),h),$async$h5)
case 10:m=a0
l=A.Bn(B.k.aH(m,null))
f=$.X.b
if(f===$.X)A.k(A.a9(""))
l.f4(f)
f=$.B.b
if(f===$.B)A.k(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.B.b
if(f===$.B)A.k(A.a9(""))
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
case 4:if(!c){$.B.j().setAttribute("data-house-manifest","unavailable")
A.c(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.ap(A.mk(),$async$h5)
case 11:s=12
return A.ap(A.ml(),$async$h5)
case 12:return A.bF(null,r)
case 1:return A.bE(p.at(-1),r)}})
return A.bG($async$h5,r)},
mk(){var s=0,r=A.bH(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mk=A.bK(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.ic[c]
p=7
s=10
return A.ap(A.b2(A.c(A.c(g.window).fetch(n)),f),$async$mk)
case 10:m=b1
s=11
return A.ap(A.b2(A.c(m.text()),e),$async$mk)
case 11:l=b1
b=B.k.aH(l,null)
b=h.b(b)?b:A.dJ("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dJ("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aM(a)?a:A.dJ("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dJ("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.at(a,!0,d):A.dJ("assets is not a list")
a4=A.G(a3)
a5=a4.i("U<1,cV>")
a3=A.K(new A.U(a3,a4.i("cV(1)").a(A.GA()),a5),a5.i("a7.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.at(a,!0,d):A.dJ("placements is not a list")
a5=A.G(a4)
a6=a5.i("U<1,cy>")
a4=A.K(new A.U(a4,a5.i("cy(1)").a(A.GB()),a6),a6.i("a7.E"))
a4.$flags=1
k=new A.oT(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.k(A.a9(""))
k.f4(a1)
$.mh=k
a1=$.bI
if(a1!=null)a1.jU(k)
a1=$.B.b
if(a1===$.B)A.k(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.B.b
if(a1===$.B)A.k(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.B.b
if(a1===$.B)A.k(A.a9(""))
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
case 5:$.B.j().setAttribute("data-house-inventory","unavailable")
$.B.j().setAttribute("data-house-inventory-error",A.w(a8))
A.c(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.bF(q,r)
case 2:return A.bE(o.at(-1),r)}})
return A.bG($async$mk,r)},
ml(){var s=0,r=A.bH(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ml=A.bK(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.mh
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.iP[a4]
p=7
s=10
return A.ap(A.b2(A.c(A.c(a1.window).fetch(m)),a2),$async$ml)
case 10:l=b5
s=11
return A.ap(A.b2(A.c(l.text()),e),$async$ml)
case 11:k=b5
a5=B.k.aH(k,null)
a5=a0.b(a5)?a5:A.h3("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.at(a6,!0,a3):A.h3("emitters is not a list")
a8=A.G(a7)
a9=a8.i("U<1,cU>")
a7=A.K(new A.U(a7,a8.i("cU(1)").a(A.GR()),a9),a9.i("a7.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aM(a6)?a6:A.h3("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h3("sourceRef is not a string")
j=new A.oZ(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.k(A.a9(""))
j.pE(a7,b2)
$.zE=j
i=A.q(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.v)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bM(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.X.b
if(a7===$.X)A.k(A.a9(""))
a8=A.Bk(i)
a9=new A.mY(a7,A.b6(B.d1,e,d),a8)
a9.ky(a8,a7,B.d1)
$.md=a9
a7=$.bq
if(a7!=null){a7.ch=a9
a7.bJ()}a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
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
case 5:$.md=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.w(n))
A.c(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bF(q,r)
case 2:return A.bE(o.at(-1),r)}})
return A.bG($async$ml,r)},
wZ(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.R(t.a.b(s)?s:new A.aT(s,A.G(s).i("aT<1,j>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.u(q))}},
uT(a){var s=0,r=A.bH(t.H),q,p,o,n,m,l
var $async$uT=A.bK(function(b,c){if(b===1)return A.bE(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.q(n,n)
n=a==null
A.wZ(A.i(n?null:a.sfx),m,"")
A.wZ(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.u(p))
l=$
s=2
return A.ap(A.n4(m,$.X.j()),$async$uT)
case 2:o=l.bq=c
o.ch=$.md
o.bJ()
A.Fo()
A.A0(o)
A.wS()
A.A1()
if($.wU){o.ct()
o.fn("music")}return A.bF(null,r)}})
return A.bG($async$uT,r)},
xk(a,b){var s
A.Ad(a,b)
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Fz(a){var s,r
try{s=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
zj(a,b){var s
if(a!=="brightness")return
s=A.i(A.c(v.G.document).documentElement)
if(t.m.b(s))A.c(s.style).setProperty("filter","brightness("+A.w(B.c.E(b,0.6,1.4))+")")},
u4(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.i(A.c(v.G.document).documentElement)
if(r!=null)A.Q(A.c(r.classList).toggle(s,b))
A.mc()},
A1(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.am($.df().a.cv(o)),k=A.Q($.df().a.cv(n)),j=A.Q($.df().a.cv(m))
for(s=[$.j1.j(),$.j2.j(),$.f6.j(),$.fZ.j(),$.iZ.j()],r=0;r<5;++r)s[r].fe(o,l)
A.zj(o,l)
for(s=[$.j1.j(),$.j2.j(),$.f6.j(),$.fZ.j(),$.iZ.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.u4(n,k)
A.u4(m,j)},
xj(a,b){var s
A.Ad(a,b)
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Fw(a){var s,r
try{s=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
A0(a){var s,r,q,p,o,n,m,l,k,j=A.q(t.N,t.i)
for(s=0;s<5;++s){r=B.iv[s]
q=$.df().a.b.h(0,r)
j.k(0,r,A.am(q==null?A.k(A.m("setting missing from profile: "+r)):q))}p=A.Q($.df().a.cv("muted"))
o=A.Q($.df().a.cv("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bm(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.dh(o)
for(q=[$.j1.j(),$.j2.j(),$.f6.j(),$.fZ.j()],n=j.$ti.i("cA<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cA(j,j.r,j.e,n);m.m();){k=m.d
l.fe(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zl(){var s=$.bq
if(s!=null)A.A0(s)
A.A1()},
Fo(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aH(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.k(B.fh)
q=A.yA(r.h(0,"requested"))
$.A8=A.wC(A.yA(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.D
o=A.q(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Fw(l))}}r=A.q(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Fz(p))}}$.A8=A.CW(o,r)
A.v3()},
v3(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.am($.df().B(),null))}catch(s){}},
Ad(a,b){var s,r,q,p,o,n,m
switch(A.rn(a).d.a){case 0:r=A.eK(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.df()
q=s
A.rn(a).d8(q)
p=t.N
o=t.K
n=A.fB(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dA(n,1)
n=s
A.rn(a).d8(n)
o=A.fB(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dA(o,1)
A.v3()}catch(m){if(!(A.ak(m) instanceof A.H))throw m}},
v_(a){var s=0,r=A.bH(t.H),q,p,o
var $async$v_=A.bK(function(b,c){if(b===1)return A.bE(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.q(p,p)
A.wZ(A.i(a==null?null:a.tex),o,"")
p=$.h9
p=p==null?null:p.aY(o)
if(p==null)p=A.wj(t.H)
q=$.bI
q=q==null?null:q.aY(o)
s=2
return A.ap(A.oh(A.e([p,q==null?A.wj(t.H):q],t.iJ),t.H),$async$v_)
case 2:return A.bF(null,r)}})
return A.bG($async$v_,r)},
zZ(){var s,r,q=v.G,p=A.b(A.c(q.window).innerWidth),o=A.b(A.c(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.h9
if(q!=null)q.ba(A.b($.B.j().width),A.b($.B.j().height))
$.da.j().ba(A.b($.B.j().width),A.b($.B.j().height))
q=$.bI
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
EU(){var s,r,q=$.b1
if(q!=null){s=$.ae.j()
if(!s.CW.bh("pause",s.f)){s=$.ae.j()
s=s.CW.bh("secondary",s.f)}else s=!0
if(s){A.EB(q)
return}if($.ae.j().f.a3(0,"GamepadDpadUp")){A.zM(q,-1)
return}if($.ae.j().f.a3(0,"GamepadDpadDown")){A.zM(q,1)
return}s=$.ae.j()
if(s.CW.bh("interact",s.f)){r=A.i(A.c(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.pj(r,"click",t.X)}return}s=$.ae.j()
if(s.CW.bh("pause",s.f)){A.ja($.cr.j())
return}if($.av.j().y)return
s=$.ae.j()
if(s.CW.bh("journal",s.f))A.jd($.h1.j())
else{s=$.ae.j()
if(s.CW.bh("sleep",s.f))A.jd($.ma.j())}},
EB(a){if(a===$.cr.j()){a.a8()
return}if(a===$.h2.j()||a instanceof A.fJ||a instanceof A.hC||a instanceof A.hr){A.dL(a)
return}a.a8()},
zM(a,b){var s,r,q,p,o,n,m=a.b,l=A.c(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.e([],t.sL)
for(s=t.m,r=0;r<A.b(l.length);++r){q=A.i(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.i(A.c(v.G.document).activeElement)
o=B.a.bO(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.M(o+b+m,m)}if(!(n>=0&&n<k.length))return A.f(k,n)
k[n].focus()},
Fv(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
A.am(c6)
try{s=c6
if(!$.zD){$.x7=s
$.zD=!0}d=s
c=$.x7
if(typeof d!=="number")return d.aj()
r=(d-c)/1000
$.x7=s
d=r
if(typeof d!=="number")return d.df()
if(d<0)r=0
d=r
if(typeof d!=="number")return d.au()
if(d>0.25)r=0.25
A.FZ(r)
$.ae.j().oW()
d=$.B.j()
c=$.ae.j().z!=null?"standard":"none"
d.setAttribute("data-controller",c)
q=$.ae.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.EU()
if(!$.mn&&$.b1==null){d=$.ej
c=r
if(typeof c!=="number")return A.je(c)
c=$.ej=d+c
p=0
d=t.aA
for(;;){if(c>=0.008333333333333333){b=p
if(typeof b!=="number")return b.df()
b=b<10}else b=!1
if(!b)break
$.xb=$.eq()
if(!$.xG()){c=$.V.b
if(c===$.V)A.k(A.a9(""))
c.mE(0.008333333333333333)
c=$.AZ()
b=$.V.b
if(b===$.V)A.k(A.a9(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.k(A.a9(""))
c=c.dT(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.v)(c),++a0){o=c[a0]
B.a.l($.dc,"clock:"+o.a)}c=$.B_()
b=$.V.b
if(b===$.V)A.k(A.a9(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.k(A.a9(""))
c=c.dT(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.v)(c),++a0){n=c[a0]
B.a.l($.dc,"service:"+n.a+":"+n.b)}}A.G1()
c=$.aH.b
if(c===$.aH)A.k(A.a9(""))
b=$.V.b
if(b===$.V)A.k(A.a9(""))
c.w=b.r.c>=0.5
c=c.f
a1=A.at(c,!1,d)
a1.$flags=3
a2=a1
B.a.H(c)
if(a2.length!==0){c=$.V.b
if(c===$.V)A.k(A.a9(""))
c.p0(a2)}A.FY()
A.G0()
A.G_()
A.FX(0.008333333333333333)
c=$.h_.b
if(c===$.h_)A.k(A.a9(""))
if(c.a!=null)if((c.b-=0.008333333333333333)<=0)c.a=null
c=$.bV.b
if(c===$.bV)A.k(A.a9(""))
m=c.a!==B.D
b=$.X.b
if(b===$.X)A.k(A.a9(""))
c.dS(0.008333333333333333,b)
if(m){c=$.bV.b
if(c===$.bV)A.k(A.a9(""))
c=c.e}else c=!1
if(c)A.A_(!0)
c=$.ej-0.008333333333333333
$.ej=c
b=p
if(typeof b!=="number")return b.a6()
p=b+1}l=B.c.E(c/0.008333333333333333,0,1)
d=$.xo=A.yL($.B1(),$.eq(),l)
k=$.bq
if(k!=null){c=k
b=Math.sin($.c8)
a=Math.cos($.c8)
a3=A.c(c.a.listener)
a3.setPosition(d.a,d.b,d.c)
A.af(a3,"setOrientation",[b,0,a,0,1,0],t.H)
c.jW($.as)
for(d=$.dc.length,a0=0;a0<$.dc.length;$.dc.length===d||(0,A.v)($.dc),++a0){j=$.dc[a0]
A.EF(k,j)}B.a.H($.dc)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.c.ae(k.gos(),3))
d=$.B.j()
c=k.cx?"true":"false"
d.setAttribute("data-audio-music-started",c)
c=$.B.j()
d=k.dx
if(d==null)d="ir-fallback"
c.setAttribute("data-audio-room-ir",d)}}i=$.h9
if(i!=null){$.bU.j().eL($.jg(),$.c8,$.el)
d=$.b1===$.h1.j()?1:0
i.cX=d
$.zK=r
$.da.j().bc(A.wz($.V.j().geR()))}else if($.c7.j().a===B.a_){$.bU.j().eL($.jg(),$.c8,$.el)
d=$.bI
if(d!=null){c=$.bU.j()
b=c.a
a4=new A.M(b.a,b.b,b.c)
b=c.b
a5=new A.M(b.a,b.b,b.c)
b=c.c
a6=d.b/d.c
a7=A.ym(a4,a5,new A.M(b.a,b.b,b.c))
c=c.f
b=c.b
a=c.c
a8=A.ws(a6,a,c.a,b)
d.ok=new A.fn(a7,a8,a8.a7(0,a7),a4,a5,b,a,a6)}d=$.bI
if(d!=null)d.k8($.X.j(),$.as)
d=$.bI
if(d!=null)d.jV($.X.j(),$.as,$.jg(),$.b0.j().gbE(),Math.sin(3.141592653589793*$.b0.j().gbE()),$.u0.j().eF($.V.j().gab().a),A.GM($.as),$.b0.j().b)
if($.zJ!==$.bV.j().a){$.zJ=$.bV.j().a
$.xe=$.xe+1}d=$.bI
if(d!=null){if($.xG())c=0
else{c=s
if(typeof c!=="number")return c.pN()
c/=1000}b=$.xe
a=A.b(Math.max(0,$.V.j().b))
if(!isFinite(c)||c<0)A.k(A.aq(c,"timeSeconds",null))
if(a<0)A.k(A.z("frame clock seeds must be non-negative",null))
d.R8=c
d.RG=b
d.rx=a}d=$.bI
if(d!=null){c=$.bV.j()
b=$.mp
a=$.u0.j().eF($.V.j().gab().a)
a9=A.zY($.as)
b0=c.a
b1=c.gfl()
b2=b1>0?B.c.E(c.b/b1,0,1):0
c=b0.a
b3=c>=3
b4=b0===B.bA
b5=b0===B.a0?0.45:1
if(c>=1)b6=b0===B.ae?b2:1
else b6=0
if(c>=2)c=b0===B.by?b2:1
else c=0
b7=b3?320:0
b8=b3?5:8
b9=b4?1:0
c0=b4?b2:0
c1=b4?b2:0
c2=b4?b2:0
c3=b4?b2:0
c4=b4?b2:0
d.p2=new A.kD(b5,0.38,0.28,0.18,0.015,a.c,a9,b6,c,b7,b8,b9,c0,c1,c2,c3,c4,b)}$.da.j().bc(A.wz($.V.j().geR()))
h=$.bI
if(h!=null){g=h.go3()
if(g!=null){$.B.j().setAttribute("data-renderer-frame-stats",g)
d=$.B.j()
c=h.go2()?"ok":"exceeded"
d.setAttribute("data-renderer-budget",c)}}}A.ek("running")
A.Fu()
d=$.ae.j()
d.as=d.Q=0
c=d.c
c.a3(0,"WheelUp")
c.a3(0,"WheelDown")
d.d.H(0)
d.f.H(0)
A.b(A.c(v.G.window).requestAnimationFrame(A.Z(A.Au())))}catch(c5){f=A.ak(c5)
e=A.cK(c5)
A.v6(f,e)}},
EF(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.js("confirm")
$.bc.j().aO("interface confirmation")
break
case"ambient-winnow":a.eP("winnow",0.28)
$.bc.j().aO("wind moving through the house")
break
case"ambient-gate":a.eP("gate",0.22)
$.bc.j().aO("distant gate")
break
case"collapse":a.js("collapse")
$.bc.j().aO("front door shudders and collapses")
break
case"clock:tick":A.mo(a,p,"tick")
break
case"clock:chime":A.mo(a,p,"chime")
break
case"clock:cuckoo":A.mo(a,p,"cuckoo")
break
case"clock:bell":A.mo(a,p,"bell")
break
default:if(B.b.U(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.mo(a,q,s[2])}}}},
mo(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zE,g=$.mh
if(h==null||g==null)return
s=h.nP(b)
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
break A}if(q!=null)$.bc.j().aO(q)
q=$.X.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.k(A.m("sound room missing: "+o))
m=n.d.a6(0,s.d.a7(0,p))
l=$.md
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.k(A.m("sound emitter "+s.a+" has no cue for "+c))
a.oV(q,m,s.e,o)
return}q=$.zq
$.zq=q+1
o=A.Bl(B.dS,r,r+":"+q,m,A.En(b,c),q,o)
q=$.as
q=A.Bh($.jg(),q)
t.gG.a(B.bi)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.k(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.k(A.m("audio listener room missing: "+q))
j=l.jA(p,q,B.bi)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.k(A.m("audio cue family missing: "+q))
k=J.aE(i)
k=k.h(i,B.d.M(A.FO(q,o.f),k.gt(i)))
o=o.e
A.ai(j.a,t.N)
a.jt(k,new A.a(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
En(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dU(a+":"+b),r=t.sU,s=new A.aU(s,s.gt(0),r.i("aU<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.Aq(p,q==null?r.a(q):q)}return p},
FZ(a){var s=$.x1
if(s==null)return
s.textContent=""+B.c.aN(a>0?1/a:0)+" fps"},
FX(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.A4||$.b1!=null||$.av.j().y){$.mx().a=new A.a(0,0,0)
return}s=$.ae.j()
r=s.cJ("moveLeft")?-1:0
if(s.cJ("moveRight"))++r
q=s.cJ("moveForward")?1:0
if(s.cJ("moveBack"))--q
s=s.ay?s.w:new A.a(0,0,0)
p=new A.a(r,0,q).a6(0,s)
o=p.gt(0)>1?p.gac():p
$.ae.j().dm(b3)
n=$.ae.j().Q
m=$.ae.j().as
s=$.fb()
l=s.d?-1:1
k=s.e?-1:1
j=$.c8
i=$.ae.j()
i=i.ay?i.x:0
h=$.fb()
g=h.d?-1:1
$.c8=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.el
h=$.ae.j()
l=h.ay?h.y:0
j=$.fb()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.el=i
$.el=B.c.E(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.a(i*Math.cos($.c8)+j*Math.sin($.c8),0,-i*Math.sin($.c8)+j*Math.cos($.c8)).gac().a7(0,2)
j=$.mx()
if(!isFinite(b3)||b3<0)A.k(A.aq(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.k(A.aq(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.a6(0,f.aj(0,l).a7(0,1-s))
j.a=s
d=$.j0.j().ot($.X.j(),$.as,$.eq(),s.a7(0,b3))
$.xh=d.a
if($.bV.j().a!==B.bB&&$.bV.j().a!==B.a0)$.as=d.b
c=B.c.E(j.a.gt(0)/2,0,1)
s=$.B0()
$.xi=s.kj($.xi,$.eq().b,b3)
b=s.mF(b3,c)
s=$.eq()
l=$.xi
$.bU.j().eL(new A.a(s.a+b.a,l+b.b,s.c+b.c),$.c8,$.el)
s=$.V.j().z
a=new A.qa(s)
s=$.bU.j()
l=$.X.j()
a0=A.GL(a,s,$.as,l,$.mh)
l=a0.c
$.zf.j().k9(l)
a1=A.i(A.c(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xx($.bU.j(),$.X.j(),$.as)
break
case 1:a3=A.AA($.bU.j(),$.X.j(),$.as)
break
case 2:a4=A.AB($.bU.j(),$.X.j(),$.as)
break
case 3:l=$.bU.j()
k=$.X.j()
j=$.mh
a5=A.Az(l,$.as,k,j)
break
case 4:case 5:break}$.zd.j().f2($.fc().f9($.V.j().gab().a,"status"),$.as==="living-room")
l=$.ae.j()
k=l.CW
if(k.bh(b2,l.d)||k.bh(b2,l.f)){l=$.V.j().gab()
k=a3==null
j=k?b1:a3.a
i=B.a.a9($.aH.j().hC(21),$.aH.j().gog())
if(l.a===21&&j==="front-door"&&i){s=$.bV.j()
$.X.j()
s.kp(B.ev,A.ai(s.c,t.N))
B.a.l($.dc,"collapse")
A.ha("the front door opens on itself")}else if(a2!=null&&!a2.e){if(a2.d){a2.d=!1
$.bc.j().aO("mantle flame extinguished")}else if($.V.j().km(1,1)){a2.d=!0
s=$.h_.j()
s.a=a2
s.b=2
if(a2.f!=null)a2.r=!0
$.bc.j().aO("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bc.j()
s.aO(a3.ax?"door opens":"door closes")
s=$.h4
if(s!=null)s.d6(a3.b)
s=$.bI
if(s!=null)s.eV($.X.j(),a3.a)
s=$.bq
if(s!=null)s.bJ()}else if(a4!=null)if(a4.w){s=$.V.j()
if(s.f.dl(1)){a4.w=!1
$.bc.j().aO("shutter closes")}}else{a4.w=!0
$.bc.j().aO("shutter opens")}else if(s===B.cf){a6=a.f8()
s=A.G(a6)
l=t.E4
a7=A.br(new A.I(a6,s.i("n(1)").a(new A.vf(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.br(a6,l)
if(a7!=null)$.bc.j().bY("noticed",a7.d)}else if(a5!=null){s=$.wd()
if(!a5.x)A.k(A.m("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.b6(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.Fq(a8)
s=$.bc.j()
s.bY("noticed",a9==null?"you inspect "+a8:a9)}}s=$.h_.j()
if(s.a!=null&&s.b>0){b0=$.h_.j().a
if(b0!=null&&A.xx($.bU.j(),$.X.j(),$.as)!==b0){s=$.h_.j()
s.a=null
s.b=0}}A.FC(b3,a0)},
FC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="rgba(12, 10, 14, 0.92)",d=$.v2
if(d==null)return
s=A.b($.B.j().width)
r=A.b($.B.j().height)
d.c+=a
B.a.H(d.d)
q=A.am(A.c(v.G.window).devicePixelRatio)
p=B.c.aq(s*q)
o=B.c.aq(r*q)
n=d.a
if(A.b(n.width)!==p||A.b(n.height)!==o){n.width=p
n.height=o}n=d.b
n===$&&A.h()
n.save()
n.scale(q,q)
n.clearRect(0,0,s,r)
if(!$.av.j().y&&$.b1==null){m=b.c
n.save()
n.translate(s*0.5,r*0.5)
l=t.H
if(m!=null){k=Math.sin(d.c*8)
j=d.c
i=22*(1+k*0.08)
n.strokeStyle="rgba(0, 0, 0, 0.85)"
n.lineWidth=3.5
n.save()
j=j*1.5+0.7853981633974483
n.rotate(j)
k=-i*0.5
n.strokeRect(k,k,i,i)
n.restore()
n.strokeStyle="#c49a45"
n.lineWidth=2
n.save()
n.rotate(j)
n.strokeRect(k,k,i,i)
n.restore()
n.fillStyle="#f5f0e6"
n.beginPath()
A.af(n,"arc",[0,0,2.5,0,6.283185307179586],l)
n.fill()}else{n.fillStyle="rgba(0, 0, 0, 0.85)"
n.beginPath()
A.af(n,"arc",[1,1,3,0,6.283185307179586],l)
n.fill()
n.fillStyle="#f5f0e6"
n.beginPath()
A.af(n,"arc",[0,0,2.5,0,6.283185307179586],l)
n.fill()}n.restore()
d.nJ(m,r,s)}m=$.cL()
m.jB(a)
d.nI(r,s,new A.q_(m.a,m.b,m.c,m.e,m.f,m.r,m.w))
m=$.X.j()
l=$.as
h=m.e.h(0,l)
l=$.V.j().gab()
m=B.c.aq($.b0.j().b)
k=h==null?null:h.a
if(k==null)k=$.as
j=$.fc().f9($.V.j().gab().a,"status")
g=s-80-24
d.b5("#d32f2f",2,8,e,44,-0.08,160,g,42)
n.save()
n.fillStyle="#f5f0e6"
n.font='bold 14px "Cinzel", serif'
n.textAlign="center"
n.textBaseline="middle"
n.fillText("DAY "+l.a+"  \u2022  "+B.b.jo(B.d.p(m),2,"0")+":00",g,42)
n.restore()
d.b5("#c49a45",1.8,6,e,34,0.08,170,109,37)
n.save()
n.fillStyle="#c49a45"
n.font='bold 13px "Cinzel", serif'
n.textAlign="center"
n.textBaseline="middle"
n.fillText(k.toUpperCase(),109,37)
n.restore()
if(j!=null&&j.length!==0){f=s*0.5
d.b5("#f5f0e6",1.5,6,e,32,-0.04,Math.min(s*0.6,420),f,36)
n.save()
n.fillStyle="#f5f0e6"
n.font='13px "Cinzel", serif'
n.textAlign="center"
n.textBaseline="middle"
n.fillText(j,f,36)
n.restore()}m=$.AY()
l=m.c
if(l<1)m.c=Math.min(1,l+a*6)
l=b.c
d.nH(m.jK(l,l!=null,$.av.j().y),r,s)
l=$.my()
m=l.a
k=l.d
j=a*8
if(m)l.d=Math.min(1,k+j)
else l.d=Math.max(0,k-j)
d.nK(r,s,l)
n.restore()},
Fq(a){var s,r,q,p,o=$.V.j().z.b,n=A.r(o).i("J<1,2>"),m=A.K(new A.J(o,n),n.i("p.E"))
B.a.V(m,new A.v0())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.v)(m),++s){r=m[s]
n=$.fc().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
G1(){var s,r,q,p,o,n,m,l,k,j=null
if($.av.j().y||$.b1!=null||$.aH.j().r!=null)return
s=$.V.j().gab()
for(r=$.aH.j().hC(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
m=$.aH.b
if(m===$.aH)A.k(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aH.b
if(r===$.aH)A.k(A.a9(""))
l=r.dU(n)
if(!(l instanceof A.l9))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.yc(A.c(v.G.document),"exitPointerLock",j,j,j,j)
$.mx().a=new A.a(0,0,0)
r=$.av.b
if(r===$.av)A.k(A.a9(""))
q=n.a
r.fh(q,k)
$.cL().bD(!0,B.b6,q,k)
A.Ac(n)
return}},
FD(){var s,r,q=$.aH.j().r,p=q==null,o=p?null:q.gbt()
if(p||o==null)return
p=$.av.j()
s=q.a
r=s.a
p.fh(r,o)
$.cL().bD(!0,B.b6,r,o)
A.Ac(s)
if(q.d!==B.a5)A.xa()
A.ha("restored visitor")},
Ac(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().o5("stranger-17-eileen-case")
r=$.fc().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.at(q,!0,t.N):B.n
p=A.br(r,t.N)
if(s==null||p==null)return
$.bc.j().bY("inside the case",p+" \u201c"+s.d+"\u201d")},
FY(){var s,r,q,p,o=$.V.j().gab(),n=$.m7.j().nN(o.a,o.b)
if(n.length===0)return
s=B.a.gR(n)
$.m7.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bc.j().bY(q,s.e)
p=A.G7(r)
if(p!=null)B.a.l($.dc,"ambient-"+p)},
G0(){var s,r,q,p,o=$.V.j().gab()
if(o.b<20)return
s=o.a
if(!$.ve.l(0,s))return
r=$.fc().f
r===$&&A.h()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.at(q,!0,t.N):B.n
p=A.GI(r,$.V.j().b,s)
if(p!=null)$.bc.j().bY("noticed",p)},
A_(a){var s,r,q,p,o
if($.x0!=null)return
s=$.V.j().gab()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.r(q).i("ay<2>")
o=A.BU(new A.nZ(s.a,1-r,new A.I(new A.ay(q,p),p.i("n(p.E)").a(new A.v7()),p.i("I<p.E>")).gt(0),$.V.j().r.d,a))
if(o==null)return
A.zV(o)
A.mr("ending recorded")},
zV(a){var s,r,q
$.x0=a
$.A4=!0
$.mx().a=new A.a(0,0,0)
A.ja($.iY.j())
s=a.a
r=$.fc().w
r===$&&A.h()
q=r.h(0,s.b)
r=t.j.b(q)?A.at(q,!0,t.N):B.n
r=A.K(r,t.N)
B.a.L(r,A.Cs($.V.j().z,s))
$.iY.j().kc(a,r)},
Eu(a){var s,r,q,p
A:{if("open"===a){s=B.au
break A}if("chain"===a){s=B.c8
break A}if("through-door"===a){s=B.c9
break A}if("letterbox"===a){s=B.ca
break A}s=B.ac
break A}r=$.aH.j().n0(s)
if(s===B.au){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.h4
if(p!=null)p.d6(q.b)
p=$.bI
if(p!=null)p.eV($.X.j(),q.a)
p=$.bq
if(p!=null)p.bJ()}}if(!(r instanceof A.l7)||s===B.ac){A.uw()
return}if(r.a.gbt()==null){A.wY()
A.uw()
return}A.xa()},
EA(){var s=$.aH.j().mG()
if(!(s instanceof A.ij)||s.b){A.wY()
A.uw()
return}if(s.a.gbt()==null){A.wY()
A.uw()
return}A.xa()},
xa(){var s,r,q,p,o,n,m,l,k,j=$.aH.j().r,i=j==null,h=i?null:j.gbt()
if(i||h==null)return
s=$.aH.j().gca()
if(s==null){$.av.j().kb(h)
$.cL().bD(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.av.j().fi(h,i)
q=A.e([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.av.j()
l=A.e([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aW(k.a,k.b))}m.kd(l,r)
o=$.cL()
m=j.a.a
o.bD(!0,i?q:B.n,m,h)
if(!i){i=A.G(p)
k=A.br(new A.I(p,i.i("n(1)").a(new A.v4(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.av.j()
q=k.c
i.fj(h,q)
o.bD(!0,B.n,m,h+"\n\n"+q)}}}A.Ab()},
Ev(a){var s,r,q,p,o,n=$.aH.j().n1(a)
if(!(n instanceof A.l8))return
s=n.c
if(!$.V.j().mI(n.b,s))return
r=s.c
s=$.av.j()
q=n.a
p=q.gbt()
s.fj(p==null?"":p,r)
o=q.gbt()
if(o==null)o=""
$.cL().bD(!0,B.n,q.a.a,o+"\n\n"+r)
A.Ab()
A.mr("saved after visitor answer")},
uw(){var s,r=$.av.j()
r.y=!1
s=r.d
s===$&&A.h()
s.textContent=""
s=r.f
s===$&&A.h()
s.textContent=""
s=r.r
s===$&&A.h()
s.textContent=""
r=r.a
r.className="door"
r.setAttribute("hidden","")
r=$.cL()
r.a=null
r.b=""
r.e=A.e([],t.s)
r.c=1
r.r=r.f=null
r.w=!1
r.x=0
$.ae.j().d7($.B.j())},
Ab(){var s,r,q,p,o=$.av.j(),n=A.c(v.G.document),m=A.e([],t.wt)
for(s=$.m9.j().fa(),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
m.push(new A.aW(p.a,B.a.gX(p.c).p(0)))}o.ka(n,m)},
Ew(a){var s,r,q,p=$.aH.j().n2(a,!0,$.m9.j())
if(p==null)return
s=$.m9.j().nz(p,B.hV)
r=$.av.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.K.bN("",!0,q)},
wY(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.h4
if(s!=null)s.d6(r.b)
s=$.bI
if(s!=null)s.eV($.X.j(),r.a)
s=$.bq
if(s!=null)s.bJ()}},
G_(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bV.b
if(k===$.bV)A.k(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
GM(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.b0.j().gbE()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.m){n=$.b0.b
if(n===$.b0)A.k(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.l){n=$.b0.b
if(n===$.b0)A.k(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.v){n=$.b0.b
if(n===$.b0)A.k(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.G){o=$.b0.b
if(o===$.b0)A.k(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zY(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.ba
if(q.length===0)return 0.12
s=A.G(q)
return B.c.E(new A.I(q,s.i("n(1)").a(new A.v5()),s.i("I<1>")).gt(0)/q.length,0.12,1)},
fS:function fS(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.fx=s
_.fy=a0
_.go=a1
_.id=a2
_.k1=a3
_.k2=a4
_.k3=a5
_.ok=_.k4=null
_.p1=a6
_.p2=a7
_.p3=null
_.to=_.ry=_.rx=_.RG=_.R8=_.p4=0
_.x1=!1
_.x2=$
_.y2=null
_.cj=0},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tH:function tH(){},
tI:function tI(){},
tJ:function tJ(){},
tK:function tK(){},
fP:function fP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
lL:function lL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tk:function tk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
uf:function uf(){},
ug:function ug(){},
uh:function uh(){},
un:function un(){},
uo:function uo(){},
up:function up(){},
uq:function uq(){},
ur:function ur(){},
us:function us(a){this.a=a},
ut:function ut(a){this.a=a},
uu:function uu(a){this.a=a},
ui:function ui(a){this.a=a},
uj:function uj(){},
uk:function uk(){},
ul:function ul(){},
um:function um(){},
uc:function uc(){},
ud:function ud(){},
ue:function ue(){},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
uW:function uW(a,b){this.a=a
this.b=b},
uU:function uU(a){this.a=a},
uV:function uV(a){this.a=a},
vy:function vy(a){this.a=a},
vz:function vz(){},
vA:function vA(){},
vL:function vL(){},
vT:function vT(){},
vU:function vU(){},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
vY:function vY(){},
vZ:function vZ(){},
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
vG:function vG(){},
vH:function vH(){},
vI:function vI(){},
vJ:function vJ(){},
vK:function vK(){},
vM:function vM(){},
vN:function vN(){},
vO:function vO(){},
vP:function vP(){},
vQ:function vQ(){},
vR:function vR(){},
vS:function vS(){},
uX:function uX(){},
uY:function uY(){},
v1:function v1(a){this.a=a},
va:function va(a){this.a=a},
vf:function vf(a){this.a=a},
v0:function v0(){},
v7:function v7(){},
v4:function v4(a){this.a=a},
v5:function v5(){},
yc(a,b,c,d,e,f){var s=a[b]()
return s},
pj(a,b,c){var s=null
return c.a(A.yc(a,b,s,s,s,s))},
w3(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.aq(b.goa(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.ad()
o=q*16
n=o+16
B.r.di(s,o,n,p.a)
if(l)B.r.di(r,o,n,p.eN().a)}m=a.a
A.x(m,"uInstanceModels",new A.A(B.dH,s))
if(l)A.x(m,"uInstanceNormalMatrices",new A.A(B.dH,r))
A.x(m,"uUseInstances",B.dI)},
BH(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
BG(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Ar(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
w4(a,b){var s=B.c.aW(a),r=A.Ar(s,b),q=A.Ar(s+1,b),p=B.c.E(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
Aq(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
G7(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
dk(a,b,c){var s=B.c.E(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b_(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
Gm(a){var s,r,q,p,o,n,m,l=B.k.aH(a,null),k=t.f
if(!k.b(l))throw A.d(B.fN)
s=t.N
r=t.z
q=A.aN(l,s,r)
p=A.q(s,t.P)
for(o=0;o<14;++o){n=B.iR[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.q(s,r))
else if(k.b(m))p.k(0,n,A.aN(m,s,r))
else throw A.d(A.a5('text.json section "'+n+'" must be an object',null,null))}return p},
GI(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaQ(a)
s=new A.ef()
s.c_((b^274953^c)>>>0)
r=s.aP(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.wm.prototype={}
J.k9.prototype={
a1(a,b){return a===b},
gI(a){return A.hY(a)},
p(a){return"Instance of '"+A.kF(a)+"'"},
ga4(a){return A.dd(A.x4(this))}}
J.kc.prototype={
p(a){return String(a)},
gI(a){return a?519018:218159},
ga4(a){return A.dd(t.y)},
$iah:1,
$in:1}
J.hG.prototype={
a1(a,b){return null==b},
p(a){return"null"},
gI(a){return 0},
$iah:1,
$iau:1}
J.hI.prototype={$ia6:1}
J.e1.prototype={
gI(a){return 0},
ga4(a){return B.lO},
p(a){return String(a)}}
J.kA.prototype={}
J.e9.prototype={}
J.du.prototype={
p(a){var s=a[$.AG()]
if(s==null)s=a[$.hg()]
if(s==null)return this.kr(a)
return"JavaScript function for "+J.dg(s)},
$iez:1}
J.fz.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.fA.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.t.prototype={
cS(a,b){return new A.aT(a,A.G(a).i("@<1>").K(b).i("aT<1,2>"))},
l(a,b){A.G(a).c.a(b)
a.$flags&1&&A.bL(a,29)
a.push(b)},
p8(a,b){var s
a.$flags&1&&A.bL(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.yt(b,null))
return a.splice(b,1)[0]},
a3(a,b){var s
a.$flags&1&&A.bL(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.G(a).i("p<1>").a(b)
a.$flags&1&&A.bL(a,"addAll",2)
if(Array.isArray(b)){this.kS(a,b)
return}for(s=J.R(b);s.m();)a.push(s.gn())},
kS(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.aw(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.bL(a,"clear","clear")
a.length=0},
cr(a,b,c){var s=A.G(a)
return new A.U(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("U<1,2>"))},
a5(a,b){var s,r=A.cW(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bz(a,b,c,d){var s,r,q
d.a(b)
A.G(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.aw(a))}return r},
aV(a,b,c){var s,r,q,p=A.G(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.aw(a))}if(c!=null)return c.$0()
throw A.d(A.cz())},
ao(a,b){return this.aV(a,b,null)},
a_(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aR(a,b,c){var s=a.length
if(b>s)throw A.d(A.aV(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aV(c,b,s,"end",null))
if(b===c)return A.e([],A.G(a))
return A.e(a.slice(b,c),A.G(a))},
gR(a){if(a.length>0)return a[0]
throw A.d(A.cz())},
gX(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cz())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cz())
throw A.d(A.y8())},
N(a,b){var s,r
A.G(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.aw(a))}return!1},
a9(a,b){var s,r
A.G(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.aw(a))}return!0},
V(a,b){var s,r,q,p,o,n=A.G(a)
n.i("l(1,1)?").a(b)
a.$flags&2&&A.bL(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.F3()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.au()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.he(b,2))
if(p>0)this.mb(a,p)},
Z(a){return this.V(a,null)},
mb(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dk(a,b){var s,r,q,p
a.$flags&2&&A.bL(a,"shuffle")
s=a.length
while(s>1){r=b.aP(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
bO(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a3(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a3(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gY(a){return a.length!==0},
p(a){return A.wl(a,"[","]")},
gu(a){return new J.er(a,a.length,A.G(a).i("er<1>"))},
gI(a){return A.hY(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bL(a,"set length","change the length of")
if(b<0)throw A.d(A.aV(b,0,null,"newLength",null))
if(b>a.length)A.G(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.vo(a,b))
return a[b]},
k(a,b,c){A.G(a).c.a(c)
a.$flags&2&&A.bL(a)
if(!(b>=0&&b<a.length))throw A.d(A.vo(a,b))
a[b]=c},
f5(a,b){return new A.cH(a,b.i("cH<0>"))},
eH(a,b){var s
A.G(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga4(a){return A.dd(A.G(a))},
$iS:1,
$ip:1,
$iC:1}
J.ka.prototype={
pB(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kF(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pk.prototype={}
J.er.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.v(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iab:1}
J.eF.prototype={
G(a,b){var s
A.am(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcm(b)
if(this.gcm(a)===s)return 0
if(this.gcm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcm(a){return a===0?1/a<0:a<0},
aq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aZ(""+a+".toInt()"))},
mY(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aZ(""+a+".ceil()"))},
aW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aZ(""+a+".floor()"))},
aN(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aZ(""+a+".round()"))},
pu(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
E(a,b,c){if(this.G(b,c)>0)throw A.d(A.xq(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
ae(a,b){var s
if(b>20)throw A.d(A.aV(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcm(a))return"-"+s
return s},
pz(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aV(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.aZ("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.f(p,1)
s=p[1]
if(3>=r)return A.f(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a7("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
M(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
kt(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hp(a,b)},
W(a,b){return(a|0)===a?a/b|0:this.hp(a,b)},
hp(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aZ("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
c4(a,b){var s
if(a>0)s=this.cO(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mi(a,b){if(0>b)throw A.d(A.xq(b))
return this.cO(a,b)},
cO(a,b){return b>31?0:a>>>b},
ga4(a){return A.dd(t.o)},
$ib5:1,
$iy:1,
$ibd:1}
J.hF.prototype={
ga4(a){return A.dd(t.S)},
$iah:1,
$il:1}
J.kd.prototype={
ga4(a){return A.dd(t.i)},
$iah:1}
J.e0.prototype={
hB(a,b){return new A.lY(b,a,0)},
kn(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.hH){s=b.e
s=!(s==null?b.e=b.lb():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.li(a,b)}},
bV(a,b,c,d){var s=A.hZ(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
li(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.B7(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gfm()
n=p.ge5()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.F(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b1(a,r))
return m},
af(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aV(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
U(a,b){return this.af(a,b,0)},
F(a,b,c){return a.substring(b,A.hZ(b,c,a.length))},
b1(a,b){return this.F(a,b,null)},
bl(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.Ck(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.Cl(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a7(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.er)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
jo(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a7(c,s)+a},
d2(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aV(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bO(a,b){return this.d2(a,b,0)},
q(a,b){return A.GS(a,b,0)},
G(a,b){var s
A.u(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gI(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga4(a){return A.dd(t.N)},
gt(a){return a.length},
$iah:1,
$ib5:1,
$iq3:1,
$ij:1}
A.ec.prototype={
gu(a){return new A.hn(J.R(this.gb2()),A.r(this).i("hn<1,2>"))},
gt(a){return J.cb(this.gb2())},
gO(a){return J.mA(this.gb2())},
gY(a){return J.Bb(this.gb2())},
a_(a,b){return A.r(this).y[1].a(J.mz(this.gb2(),b))},
gR(a){return A.r(this).y[1].a(J.xO(this.gb2()))},
q(a,b){return J.xN(this.gb2(),b)},
p(a){return J.dg(this.gb2())}}
A.hn.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.eu.prototype={
gb2(){return this.a}}
A.is.prototype={$iS:1}
A.iq.prototype={
h(a,b){return this.$ti.y[1].a(J.aI(this.a,b))},
k(a,b,c){var s=this.$ti
J.bM(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.Bc(this.a,b)},
l(a,b){var s=this.$ti
J.hj(this.a,s.c.a(s.y[1].a(b)))},
V(a,b){var s
this.$ti.i("l(2,2)?").a(b)
s=b==null?null:new A.tl(this,b)
J.Bd(this.a,s)},
$iS:1,
$iC:1}
A.tl.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("l(1,1)")}}
A.aT.prototype={
cS(a,b){return new A.aT(this.a,this.$ti.i("@<1>").K(b).i("aT<1,2>"))},
gb2(){return this.a}}
A.eG.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dU.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.qS.prototype={}
A.S.prototype={}
A.a7.prototype={
gu(a){var s=this
return new A.aU(s,s.gt(s),A.r(s).i("aU<a7.E>"))},
gO(a){return this.gt(this)===0},
gR(a){if(this.gt(this)===0)throw A.d(A.cz())
return this.a_(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a3(r.a_(0,s),b))return!0
if(q!==r.gt(r))throw A.d(A.aw(r))}return!1},
a9(a,b){var s,r,q=this
A.r(q).i("n(a7.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a_(0,r)))return!1
if(s!==q.gt(q))throw A.d(A.aw(q))}return!0},
N(a,b){var s,r,q=this
A.r(q).i("n(a7.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a_(0,r)))return!0
if(s!==q.gt(q))throw A.d(A.aw(q))}return!1},
a5(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.a_(0,0))
if(o!==p.gt(p))throw A.d(A.aw(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.a_(0,q))
if(o!==p.gt(p))throw A.d(A.aw(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.a_(0,q))
if(o!==p.gt(p))throw A.d(A.aw(p))}return r.charCodeAt(0)==0?r:r}},
da(a,b){return this.kq(0,A.r(this).i("n(a7.E)").a(b))},
cr(a,b,c){var s=A.r(this)
return new A.U(this,s.K(c).i("1(a7.E)").a(b),s.i("@<a7.E>").K(c).i("U<1,2>"))},
bX(a,b){var s=A.r(this).i("a7.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bW(a){return this.bX(0,!0)},
bC(a){var s,r=this,q=A.wp(A.r(r).i("a7.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a_(0,s))
return q}}
A.ic.prototype={
glp(){var s=J.cb(this.a),r=this.c
if(r==null||r>s)return s
return r},
gml(){var s=J.cb(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cb(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a_(a,b){var s=this,r=s.gml()+b
if(b<0||r>=s.glp())throw A.d(A.pa(b,s.gt(0),s,"index"))
return J.mz(s.a,r)},
bX(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aE(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ya(0,n):J.y9(0,n)}r=A.cW(s,m.a_(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a_(n,o+q))
if(m.gt(n)<l)throw A.d(A.aw(p))}return r},
bW(a){return this.bX(0,!0)}}
A.aU.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aE(q),o=p.gt(q)
if(r.b!==o)throw A.d(A.aw(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a_(q,s);++r.c
return!0},
$iab:1}
A.cB.prototype={
gu(a){return new A.hN(J.R(this.a),this.b,A.r(this).i("hN<1,2>"))},
gt(a){return J.cb(this.a)},
gO(a){return J.mA(this.a)},
gR(a){return this.b.$1(J.xO(this.a))},
a_(a,b){return this.b.$1(J.mz(this.a,b))}}
A.dm.prototype={$iS:1}
A.hN.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.U.prototype={
gt(a){return J.cb(this.a)},
a_(a,b){return this.b.$1(J.mz(this.a,b))}}
A.I.prototype={
gu(a){return new A.T(J.R(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hw.prototype={
gu(a){return new A.hx(J.R(this.a),this.b,B.ej,this.$ti.i("hx<1,2>"))}}
A.hx.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.R(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iab:1}
A.hu.prototype={
m(){return!1},
gn(){throw A.d(A.cz())},
$iab:1}
A.cH.prototype={
gu(a){return new A.il(J.R(this.a),this.$ti.i("il<1>"))}}
A.il.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.ax.prototype={
st(a,b){throw A.d(A.aZ("Cannot change the length of a fixed-length list"))},
l(a,b){A.bX(a).i("ax.E").a(b)
throw A.d(A.aZ("Cannot add to a fixed-length list"))}}
A.d3.prototype={
k(a,b,c){A.r(this).i("d3.E").a(c)
throw A.d(A.aZ("Cannot modify an unmodifiable list"))},
st(a,b){throw A.d(A.aZ("Cannot change the length of an unmodifiable list"))},
l(a,b){A.r(this).i("d3.E").a(b)
throw A.d(A.aZ("Cannot add to an unmodifiable list"))},
V(a,b){A.r(this).i("l(d3.E,d3.E)?").a(b)
throw A.d(A.aZ("Cannot modify an unmodifiable list"))}}
A.fN.prototype={}
A.i4.prototype={
gt(a){return J.cb(this.a)},
a_(a,b){var s=this.a,r=J.aE(s)
return r.a_(s,r.gt(s)-1-b)}}
A.iW.prototype={}
A.aW.prototype={$r:"+(1,2)",$s:1}
A.iH.prototype={$r:"+influence,light(1,2)",$s:2}
A.aj.prototype={$r:"+(1,2,3)",$s:3}
A.b_.prototype={$r:"+b,g,r(1,2,3)",$s:4}
A.iI.prototype={$r:"+(1,2,3,4)",$s:6}
A.hp.prototype={}
A.fq.prototype={
gO(a){return this.gt(this)===0},
gY(a){return this.gt(this)!==0},
p(a){return A.wq(this)},
k(a,b,c){var s=A.r(this)
s.c.a(b)
s.y[1].a(c)
A.Bz()},
gJ(){return new A.cp(this.nS(),A.r(this).i("cp<P<1,2>>"))},
nS(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga0(),o=o.gu(o),n=A.r(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bQ(a,b,c,d){var s=A.q(c,d)
this.az(0,new A.nz(this,A.r(this).K(c).K(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.nz.prototype={
$2(a,b){var s=A.r(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.r(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
gfY(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
T(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.T(b))return null
return this.b[this.a[b]]},
az(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfY()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga0(){return new A.f0(this.gfY(),this.$ti.i("f0<1>"))},
gaE(){return new A.f0(this.b,this.$ti.i("f0<2>"))}}
A.f0.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gY(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f1(s,s.length,this.$ti.i("f1<1>"))}}
A.f1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cR.prototype={
bI(){var s=this,r=s.$map
if(r==null){r=new A.hJ(s.$ti.i("hJ<1,2>"))
A.Ak(s.a,r)
s.$map=r}return r},
T(a){return this.bI().T(a)},
h(a,b){return this.bI().h(0,b)},
az(a,b){this.$ti.i("~(1,2)").a(b)
this.bI().az(0,b)},
ga0(){var s=this.bI()
return new A.ad(s,A.r(s).i("ad<1>"))},
gaE(){var s=this.bI()
return new A.ay(s,A.r(s).i("ay<2>"))},
gt(a){return this.bI().a}}
A.hq.prototype={
l(a,b){A.r(this).c.a(b)
A.BA()}}
A.aJ.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gY(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f1(s,s.length,r.$ti.i("f1<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bC(a){return A.kj(this,this.$ti.c)}}
A.qi.prototype={
$0(){return B.c.aW(1000*this.a.now())},
$S:42}
A.i5.prototype={}
A.rP.prototype={
aZ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hU.prototype={
p(a){return"Null check operator used on a null value"}}
A.ke.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.l1.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pW.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hv.prototype={}
A.iK.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id0:1}
A.dT.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.AE(r==null?"unknown":r)+"'"},
ga4(a){var s=A.xs(this)
return A.dd(s==null?A.bX(this):s)},
$iez:1,
gpM(){return this},
$C:"$1",
$R:1,
$D:null}
A.jw.prototype={$C:"$0",$R:0}
A.jx.prototype={$C:"$2",$R:2}
A.kY.prototype={}
A.kV.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.AE(s)+"'"}}
A.fk.prototype={
a1(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fk))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.mw(this.a)^A.hY(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kF(this.a)+"'")}}
A.kM.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cg.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gY(a){return this.a!==0},
ga0(){return new A.ad(this,A.r(this).i("ad<1>"))},
gaE(){return new A.ay(this,A.r(this).i("ay<2>"))},
gJ(){return new A.J(this,A.r(this).i("J<1,2>"))},
T(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ob(a)},
ob(a){var s=this.d
if(s==null)return!1
return this.cl(s[this.ck(a)],a)>=0},
L(a,b){A.r(this).i("Y<1,2>").a(b).az(0,new A.pt(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.oc(b)},
oc(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ck(a)]
r=this.cl(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.r(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fs(s==null?q.b=q.dK():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fs(r==null?q.c=q.dK():r,b,c)}else q.oe(b,c)},
oe(a,b){var s,r,q,p,o=this,n=A.r(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dK()
r=o.ck(a)
q=s[r]
if(q==null)s[r]=[o.dL(a,b)]
else{p=o.cl(q,a)
if(p>=0)q[p].b=b
else q.push(o.dL(a,b))}},
cs(a,b){var s,r,q=this,p=A.r(q)
p.c.a(a)
p.i("2()").a(b)
if(q.T(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a3(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.kQ(this.c,b)
else return this.od(b)},
od(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ck(a)
r=n[s]
q=o.cl(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fo(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dn()}},
az(a,b){var s,r,q=this
A.r(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.aw(q))
s=s.c}},
fs(a,b,c){var s,r=A.r(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dL(b,c)
else s.b=c},
kQ(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fo(s)
delete a[b]
return s.b},
dn(){this.r=this.r+1&1073741823},
dL(a,b){var s=this,r=A.r(s),q=new A.pB(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dn()
return q},
fo(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dn()},
ck(a){return J.aC(a)&1073741823},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.wq(this)},
dK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iwo:1}
A.pt.prototype={
$2(a,b){var s=this.a,r=A.r(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.r(this.a).i("~(1,2)")}}
A.pB.prototype={}
A.ad.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ci(s,s.r,s.e,this.$ti.i("ci<1>"))},
q(a,b){return this.a.T(b)}}
A.ci.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iab:1}
A.ay.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.al(s,s.r,s.e,this.$ti.i("al<1>"))}}
A.al.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iab:1}
A.J.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cA(s,s.r,s.e,this.$ti.i("cA<1,2>"))}}
A.cA.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iab:1}
A.hJ.prototype={
ck(a){return A.Gh(a)&1073741823},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.vt.prototype={
$1(a){return this.a(a)},
$S:13}
A.vu.prototype={
$2(a,b){return this.a(a,b)},
$S:117}
A.vv.prototype={
$1(a){return this.a(A.u(a))},
$S:41}
A.bT.prototype={
ga4(a){return A.dd(this.fU())},
fU(){return A.Gr(this.$r,this.cI())},
p(a){return this.hv(!1)},
hv(a){var s,r,q,p,o,n=this.lu(),m=this.cI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.yq(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
lu(){var s,r=this.$s
while($.tP.length<=r)B.a.l($.tP,null)
s=$.tP[r]
if(s==null){s=this.la()
B.a.k($.tP,r,s)}return s},
la(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.kb(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.f4.prototype={
cI(){return[this.a,this.b]},
a1(a,b){if(b==null)return!1
return b instanceof A.f4&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gI(a){return A.cD(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.f5.prototype={
cI(){return[this.a,this.b,this.c]},
a1(a,b){var s=this
if(b==null)return!1
return b instanceof A.f5&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gI(a){var s=this
return A.cD(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fR.prototype={
cI(){return this.a},
a1(a,b){if(b==null)return!1
return b instanceof A.fR&&this.$s===b.$s&&A.DG(this.a,b.a)},
gI(a){return A.cD(this.$s,A.Cx(this.a),B.f,B.f,B.f,B.f)}}
A.hH.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
glN(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.ye(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
lb(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hB(a,b){return new A.lk(this,b,0)},
lt(a,b){var s,r=this.glN()
if(r==null)r=A.f7(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lF(s)},
$iq3:1,
$iCN:1}
A.lF.prototype={
gfm(){return this.b.index},
ge5(){var s=this.b
return s.index+s[0].length},
$ifD:1,
$ii_:1}
A.lk.prototype={
gu(a){return new A.ll(this.a,this.b,this.c)}}
A.ll.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.lt(l,s)
if(p!=null){m.d=p
o=p.ge5()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.f(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.f(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iab:1}
A.ib.prototype={
ge5(){return this.a+this.c.length},
$ifD:1,
gfm(){return this.a}}
A.lY.prototype={
gu(a){return new A.lZ(this.a,this.b,this.c)},
gR(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ib(r,s)
throw A.d(A.cz())}}
A.lZ.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ib(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.tm.prototype={
dO(){var s=this.b
if(s===this)throw A.d(new A.eG("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a9(""))
return s}}
A.e2.prototype={
ga4(a){return B.lH},
hD(a,b,c){A.zv(a,b,c)
return new Float32Array(a,b,c)},
$iah:1,
$ie2:1}
A.fE.prototype={$ifE:1}
A.hS.prototype={
gmR(a){if(((a.$flags|0)&2)!==0)return new A.tV(a.buffer)
else return a.buffer},
lF(a,b,c,d){var s=A.aV(b,0,c,d,null)
throw A.d(s)},
fC(a,b,c,d){if(b>>>0!==b||b>c)this.lF(a,b,c,d)}}
A.tV.prototype={
hD(a,b,c){var s=A.Cu(this.a,b,c)
s.$flags=3
return s}}
A.kp.prototype={
ga4(a){return B.lI},
$iah:1}
A.b7.prototype={
gt(a){return a.length},
hj(a,b,c,d,e){var s,r,q=a.length
this.fC(a,b,q,"start")
this.fC(a,c,q,"end")
if(b>c)throw A.d(A.aV(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.z(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic_:1}
A.hQ.prototype={
h(a,b){A.dK(b,a,a.length)
return a[b]},
k(a,b,c){A.bD(c)
a.$flags&2&&A.bL(a)
A.dK(b,a,a.length)
a[b]=c},
di(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bL(a,5)
this.hj(a,b,c,d,0)
return},
$iS:1,
$ip:1,
$iC:1}
A.hR.prototype={
k(a,b,c){A.b(c)
a.$flags&2&&A.bL(a)
A.dK(b,a,a.length)
a[b]=c},
k6(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bL(a,5)
this.hj(a,b,c,d,e)
return},
$iS:1,
$ip:1,
$iC:1}
A.hP.prototype={
ga4(a){return B.lJ},
aR(a,b,c){return new Float32Array(a.subarray(b,A.Es(b,c,a.length)))},
$iah:1,
$io8:1}
A.kq.prototype={
ga4(a){return B.lK},
$iah:1}
A.kr.prototype={
ga4(a){return B.lL},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1}
A.ks.prototype={
ga4(a){return B.lM},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1}
A.kt.prototype={
ga4(a){return B.lN},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1}
A.ku.prototype={
ga4(a){return B.lQ},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1,
$iwF:1}
A.kv.prototype={
ga4(a){return B.lR},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1}
A.eI.prototype={
ga4(a){return B.lS},
gt(a){return a.length},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1,
$ieI:1}
A.hT.prototype={
ga4(a){return B.lT},
gt(a){return a.length},
h(a,b){A.dK(b,a,a.length)
return a[b]},
$iah:1,
$iig:1}
A.iB.prototype={}
A.iC.prototype={}
A.iD.prototype={}
A.iE.prototype={}
A.cF.prototype={
i(a){return A.iO(v.typeUniverse,this,a)},
K(a){return A.z4(v.typeUniverse,this,a)}}
A.ly.prototype={}
A.m1.prototype={
p(a){return A.bJ(this.a,null)}}
A.lw.prototype={
p(a){return this.a}}
A.fW.prototype={$idD:1}
A.th.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:39}
A.tg.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:98}
A.ti.prototype={
$0(){this.a.$0()},
$S:12}
A.tj.prototype={
$0(){this.a.$0()},
$S:12}
A.tS.prototype={
kP(a,b){if(self.setTimeout!=null)self.setTimeout(A.he(new A.tT(this,b),0),a)
else throw A.d(A.aZ("`setTimeout()` not found."))}}
A.tT.prototype={
$0(){this.b.$0()},
$S:0}
A.lm.prototype={
dV(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dt(a)
else{s=r.a
if(q.i("bZ<1>").b(a))s.fB(a)
else s.cF(a)}},
dW(a,b){var s=this.a
if(this.b)s.bp(new A.b3(a,b))
else s.cB(new A.b3(a,b))}}
A.u5.prototype={
$1(a){return this.a.$2(0,a)},
$S:26}
A.u6.prototype={
$2(a,b){this.a.$2(1,new A.hv(a,t.l.a(b)))},
$S:59}
A.vj.prototype={
$2(a,b){this.a(A.b(a),b)},
$S:68}
A.cJ.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
md(a,b){var s,r,q
a=A.b(a)
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
o.d=null}q=o.md(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.z_
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.z_
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
pO(a){var s,r,q=this
if(a instanceof A.cp){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.R(a)
return 2}},
$iab:1}
A.cp.prototype={
gu(a){return new A.cJ(this.a(),this.$ti.i("cJ<1>"))}}
A.b3.prototype={
p(a){return A.w(this.a)},
$iao:1,
gbZ(){return this.b}}
A.og.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fH(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ak(p)
q=A.cK(p)
l=r
o=q
n=A.x5(l,o)
l=new A.b3(l,o)
m.b.bp(l)
return}m.b.fH(s)}},
$S:0}
A.oj.prototype={
$2(a,b){var s,r,q=this
A.f7(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bp(new A.b3(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bp(new A.b3(r,s))}},
$S:70}
A.oi.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bM(r,k.b,a)
if(J.a3(s,0)){q=A.e([],j.i("t<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.v)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hj(q,l)}k.c.cF(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bp(new A.b3(q,o))}},
$S(){return this.d.i("au(0)")}}
A.lq.prototype={
dW(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.cB(A.F2(a,b))},
hG(a){return this.dW(a,null)}}
A.io.prototype={
dV(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.dt(r.i("1/").a(a))}}
A.eY.prototype={
or(a){if((this.c&15)!==6)return!0
return this.b.b.f0(t.bl.a(this.d),a.a,t.y,t.K)},
o6(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.pw(q,m,a.b,o,n,t.l)
else p=l.f0(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ak(s))){if((r.c&1)!==0)throw A.d(A.z("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.z("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aB.prototype={
f1(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ar
if(s===B.y){if(!t.nW.b(b)&&!t.h_.b(b))throw A.d(A.aq(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.FB(b,s)}r=new A.aB(s,c.i("aB<0>"))
this.dr(new A.eY(r,3,a,b,q.i("@<1>").K(c).i("eY<1,2>")))
return r},
ht(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.aB($.ar,c.i("aB<0>"))
this.dr(new A.eY(s,19,a,b,r.i("@<1>").K(c).i("eY<1,2>")))
return s},
mg(a){this.a=this.a&1|16
this.c=a},
cE(a){this.a=a.a&30|this.a&1
this.c=a.c},
dr(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dr(a)
return}r.cE(s)}A.mq(null,null,r.b,t.O.a(new A.tp(r,a)))}},
h7(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.h7(a)
return}m.cE(n)}l.a=m.cN(a)
A.mq(null,null,m.b,t.O.a(new A.tu(l,m)))}},
c2(){var s=t.F.a(this.c)
this.c=null
return this.cN(s)},
cN(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fH(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bZ<1>").b(a))A.ts(a,r,!0)
else{s=r.c2()
q.c.a(a)
r.a=8
r.c=a
A.eZ(r,s)}},
cF(a){var s,r=this
r.$ti.c.a(a)
s=r.c2()
r.a=8
r.c=a
A.eZ(r,s)},
l9(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c2()
q.cE(a)
A.eZ(q,r)},
bp(a){var s=this.c2()
this.mg(a)
A.eZ(this,s)},
dt(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bZ<1>").b(a)){this.fB(a)
return}this.kW(a)},
kW(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mq(null,null,s.b,t.O.a(new A.tr(s,a)))},
fB(a){A.ts(this.$ti.i("bZ<1>").a(a),this,!1)
return},
cB(a){this.a^=2
A.mq(null,null,this.b,t.O.a(new A.tq(this,a)))},
$ibZ:1}
A.tp.prototype={
$0(){A.eZ(this.a,this.b)},
$S:0}
A.tu.prototype={
$0(){A.eZ(this.b,this.a.a)},
$S:0}
A.tt.prototype={
$0(){A.ts(this.a.a,this.b,!0)},
$S:0}
A.tr.prototype={
$0(){this.a.cF(this.b)},
$S:0}
A.tq.prototype={
$0(){this.a.bp(this.b)},
$S:0}
A.tx.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pv(t.pF.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.cK(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mR(q)
n=k.a
n.c=new A.b3(q,o)
q=n}q.b=!0
return}if(j instanceof A.aB&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aB){m=k.b.a
l=new A.aB(m.b,m.$ti)
j.f1(new A.ty(l,m),new A.tz(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ty.prototype={
$1(a){this.a.l9(this.b)},
$S:39}
A.tz.prototype={
$2(a,b){A.f7(a)
t.l.a(b)
this.a.bp(new A.b3(a,b))},
$S:71}
A.tw.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.f0(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.cK(l)
q=s
p=r
if(p==null)p=A.mR(q)
o=this.a
o.c=new A.b3(q,p)
o.b=!0}},
$S:0}
A.tv.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.or(s)&&p.a.e!=null){p.c=p.a.o6(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.cK(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mR(p)
m=l.b
m.c=new A.b3(p,n)
p=m}p.b=!0}},
$S:0}
A.ln.prototype={}
A.lX.prototype={}
A.iV.prototype={$iyS:1}
A.lP.prototype={
px(a){var s,r,q
t.O.a(a)
try{if(B.y===$.ar){a.$0()
return}A.A2(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.cK(q)
A.xf(A.f7(s),t.l.a(r))}},
hF(a){return new A.tQ(this,t.O.a(a))},
pv(a,b){b.i("0()").a(a)
if($.ar===B.y)return a.$0()
return A.A2(null,null,this,a,b)},
f0(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.y)return a.$1(b)
return A.FH(null,null,this,a,b,c,d)},
pw(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.y)return a.$2(b,c)
return A.FG(null,null,this,a,b,c,d,e,f)},
jw(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tQ.prototype={
$0(){return this.a.px(this.b)},
$S:0}
A.v8.prototype={
$0(){A.BZ(this.a,this.b)},
$S:0}
A.iu.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gY(a){return this.a!==0},
ga0(){return new A.f_(this,this.$ti.i("f_<1>"))},
gaE(){var s=this.$ti
return A.kk(new A.f_(this,s.i("f_<1>")),new A.tB(this),s.c,s.y[1])},
T(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.le(a)},
le(a){var s=this.d
if(s==null)return!1
return this.bq(this.fT(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yU(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yU(q,b)
return r}else return this.lx(b)},
lx(a){var s,r,q=this.d
if(q==null)return null
s=this.fT(q,a)
r=this.bq(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fF(s==null?m.b=A.wJ():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fF(r==null?m.c=A.wJ():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wJ()
p=A.mw(b)&1073741823
o=q[p]
if(o==null){A.wK(q,p,[b,c]);++m.a
m.e=null}else{n=m.bq(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
az(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fG()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.aw(m))}},
fG(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cW(i.a,null,!1,t.z)
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
fF(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wK(a,b,c)},
fT(a,b){return a[A.mw(b)&1073741823]}}
A.tB.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iw.prototype={
bq(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.f_.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gY(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iv(s,s.fG(),this.$ti.i("iv<1>"))},
q(a,b){return this.a.T(b)}}
A.iv.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.aw(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.co.prototype={
h2(){return new A.co(A.r(this).i("co<1>"))},
gu(a){var s=this,r=new A.f2(s,s.r,A.r(s).i("f2<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gY(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.ld(b)},
ld(a){var s=this.d
if(s==null)return!1
return this.bq(s[this.dB(a)],a)>=0},
gR(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.r(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.r(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fE(s==null?q.b=A.wL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fE(r==null?q.c=A.wL():r,b)}else return q.kR(b)},
kR(a){var s,r,q,p=this
A.r(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wL()
r=p.dB(a)
q=s[r]
if(q==null)s[r]=[p.dz(a)]
else{if(p.bq(q,a)>=0)return!1
q.push(p.dz(a))}return!0},
a3(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.h8(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.h8(s.c,b)
else return s.ma(b)},
ma(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dB(a)
r=n[s]
q=o.bq(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hx(p)
return!0},
lv(a,b){var s,r,q,p,o,n=this,m=A.r(n)
m.i("n(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.d(A.aw(n))
if(!0===o)n.a3(0,r)}},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dJ()}},
fE(a,b){A.r(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dz(b)
return!0},
h8(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hx(s)
delete a[b]
return!0},
dJ(){this.r=this.r+1&1073741823},
dz(a){var s,r=this,q=new A.lE(A.r(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dJ()
return q},
hx(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dJ()},
dB(a){return J.aC(a)&1073741823},
bq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$iyk:1}
A.lE.prototype={}
A.f2.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aw(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.pC.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:84}
A.W.prototype={
gu(a){return new A.aU(a,this.gt(a),A.bX(a).i("aU<W.E>"))},
a_(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gY(a){return!this.gO(a)},
gR(a){if(this.gt(a)===0)throw A.d(A.cz())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.d(A.aw(a))}return!1},
a9(a,b){var s,r
A.bX(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.d(A.aw(a))}return!0},
N(a,b){var s,r
A.bX(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.d(A.aw(a))}return!1},
a5(a,b){var s
if(this.gt(a)===0)return""
s=A.wD("",a,b)
return s.charCodeAt(0)==0?s:s},
f5(a,b){return new A.cH(a,b.i("cH<0>"))},
cr(a,b,c){var s=A.bX(a)
return new A.U(a,s.K(c).i("1(W.E)").a(b),s.i("@<W.E>").K(c).i("U<1,2>"))},
l(a,b){var s
A.bX(a).i("W.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cS(a,b){return new A.aT(a,A.bX(a).i("@<W.E>").K(b).i("aT<1,2>"))},
V(a,b){var s,r=A.bX(a)
r.i("l(W.E,W.E)?").a(b)
s=b==null?A.Gg():b
A.kR(a,0,this.gt(a)-1,s,r.i("W.E"))},
o_(a,b,c,d){var s
A.bX(a).i("W.E?").a(d)
A.hZ(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.wl(a,"[","]")},
$iS:1,
$ip:1,
$iC:1}
A.aa.prototype={
az(a,b){var s,r,q,p=A.r(this)
p.i("~(aa.K,aa.V)").a(b)
for(s=this.ga0(),s=s.gu(s),p=p.i("aa.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga0().cr(0,new A.pE(this),A.r(this).i("P<aa.K,aa.V>"))},
bQ(a,b,c,d){var s,r,q,p,o,n=A.r(this)
n.K(c).K(d).i("P<1,2>(aa.K,aa.V)").a(b)
s=A.q(c,d)
for(r=this.ga0(),r=r.gu(r),n=n.i("aa.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
mC(a){var s,r
for(s=J.R(A.r(this).i("p<P<aa.K,aa.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
T(a){return this.ga0().q(0,a)},
gt(a){var s=this.ga0()
return s.gt(s)},
gO(a){var s=this.ga0()
return s.gO(s)},
gY(a){var s=this.ga0()
return s.gY(s)},
gaE(){return new A.iy(this,A.r(this).i("iy<aa.K,aa.V>"))},
p(a){return A.wq(this)},
$iY:1}
A.pE.prototype={
$1(a){var s=this.a,r=A.r(s)
r.i("aa.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("aa.V").a(s)
return new A.P(a,s,r.i("P<aa.K,aa.V>"))},
$S(){return A.r(this.a).i("P<aa.K,aa.V>(aa.K)")}}
A.pF.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:36}
A.iy.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gY(a){var s=this.a
return s.gY(s)},
gR(a){var s=this.a,r=s.ga0()
r=s.h(0,r.gR(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga0()
return new A.iz(r.gu(r),s,this.$ti.i("iz<1,2>"))}}
A.iz.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.iP.prototype={
k(a,b,c){var s=A.r(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aZ("Cannot modify unmodifiable map"))}}
A.fC.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.r(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
T(a){return this.a.T(a)},
az(a,b){this.a.az(0,A.r(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gY(a){var s=this.a
return s.gY(s)},
gt(a){var s=this.a
return s.gt(s)},
ga0(){return this.a.ga0()},
p(a){return this.a.p(0)},
gaE(){return this.a.gaE()},
gJ(){return this.a.gJ()},
bQ(a,b,c,d){return this.a.bQ(0,A.r(this).K(c).K(d).i("P<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.ea.prototype={}
A.dz.prototype={
gO(a){return this.gt(this)===0},
gY(a){return this.gt(this)!==0},
L(a,b){var s
for(s=J.R(A.r(this).i("p<1>").a(b));s.m();)this.l(0,s.gn())},
e1(a){var s,r,q=this.bC(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a3(0,r)}return q},
p(a){return A.wl(this,"{","}")},
a9(a,b){var s
A.r(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a5(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dg(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.r(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gR(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cz())
return s.gn()},
a_(a,b){var s,r
A.kI(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.pa(b,b-r,this,"index"))},
$iS:1,
$ip:1,
$ie6:1}
A.iJ.prototype={
e1(a){var s,r,q,p=this,o=p.h2()
for(s=A.ix(p,p.r,A.r(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bC(a){var s=this.h2()
s.L(0,this)
return s}}
A.m2.prototype={
l(a,b){this.$ti.c.a(b)
return A.DS()}}
A.fO.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.ix(s,s.r,A.r(s).c)},
bC(a){return this.a.bC(0)}}
A.fX.prototype={}
A.iQ.prototype={}
A.lC.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.m4(b):s}},
gt(a){return this.b==null?this.c.a:this.bF().length},
gO(a){return this.gt(0)===0},
gY(a){return this.gt(0)>0},
ga0(){if(this.b==null){var s=this.c
return new A.ad(s,A.r(s).i("ad<1>"))}return new A.lD(this)},
gaE(){var s,r=this
if(r.b==null){s=r.c
return new A.ay(s,A.r(s).i("ay<2>"))}return A.kk(r.bF(),new A.tD(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.u(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.T(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.ms().k(0,b,c)},
T(a){if(this.b==null)return this.c.T(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
az(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.az(0,b)
s=o.bF()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uv(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.aw(o))}},
bF(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
ms(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.q(t.N,t.z)
r=n.bF()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
m4(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uv(this.a[a])
return this.b[a]=s}}
A.tD.prototype={
$1(a){return this.a.h(0,A.u(a))},
$S:41}
A.lD.prototype={
gt(a){return this.a.gt(0)},
a_(a,b){var s=this.a
if(s.b==null)s=s.ga0().a_(0,b)
else{s=s.bF()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga0()
s=s.gu(s)}else{s=s.bF()
s=new J.er(s,s.length,A.G(s).i("er<1>"))}return s},
q(a,b){return this.a.T(b)}}
A.tY.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:32}
A.tX.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:32}
A.jq.prototype={
ou(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hZ(a4,a5,a2)
s=$.AS()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.vs(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.vs(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.f(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.f(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bl("")
g=o}else g=o
g.a+=B.b.F(a3,p,q)
c=A.aA(j)
g.a+=c
p=k
continue}}throw A.d(A.a5("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.F(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xQ(a3,m,a5,n,l,r)
else{b=B.d.M(r-1,4)+1
if(b===1)throw A.d(A.a5(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bV(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xQ(a3,m,a5,n,l,a)
else{b=B.d.M(a,4)
if(b===1)throw A.d(A.a5(a1,a3,a5))
if(b>1)a3=B.b.bV(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nk.prototype={}
A.ev.prototype={}
A.jC.prototype={}
A.jM.prototype={}
A.hK.prototype={
p(a){var s=A.jN(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kg.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.kf.prototype={
aH(a,b){var s=A.Ft(a,this.gnB().a)
return s},
am(a,b){var s=A.Dy(a,this.gnQ().b,null)
return s},
gnQ(){return B.i_},
gnB(){return B.hZ}}
A.pv.prototype={}
A.pu.prototype={}
A.tF.prototype={
jI(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.F(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.F(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.F(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
o=A.aA(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.F(a,r,m)},
dv(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.kg(a,null))}B.a.l(s,a)},
dc(a){var s,r,q,p,o=this
if(o.jH(a))return
o.dv(a)
try{s=o.b.$1(a)
if(!o.jH(s)){q=A.yg(a,null,o.gh6())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.ak(p)
q=A.yg(a,r,o.gh6())
throw A.d(q)}},
jH(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jI(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dv(a)
q.pK(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dv(a)
r=q.pL(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
pK(a){var s,r,q=this.c
q.a+="["
s=J.aE(a)
if(s.gY(a)){this.dc(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.dc(s.h(a,r))}}q.a+="]"},
pL(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.cW(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.az(0,new A.tG(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jI(A.u(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.dc(r[n])}p.a+="}"
return!0}}
A.tG.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:36}
A.tE.prototype={
gh6(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.l5.prototype={}
A.rU.prototype={
n7(a){return new A.tW(this.a).lf(t.J.a(a),0,null,!0)}}
A.tW.prototype={
lf(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.hZ(b,c,J.cb(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.E8(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.E7(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dC(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.E9(o)
l.b=0
throw A.d(A.a5(m,a,p+l.c))}return n},
dC(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.W(b+c,2)
r=q.dC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dC(a,s,c,d)}return q.nA(a,b,c,d)},
nA(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bl(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
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
if(!(d>=0&&d<c))return A.f(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.f(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.f(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.f(a,l)
p=A.aA(a[l])
e.a+=p}else{p=A.yC(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aA(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ew.prototype={
a1(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ew)if(this.a===b.a)s=this.b===b.b
return s},
gI(a){return A.cD(this.a,this.b,B.f,B.f,B.f,B.f)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
p(a){var s=this,r=A.BE(A.CJ(s)),q=A.jE(A.CH(s)),p=A.jE(A.CD(s)),o=A.jE(A.CE(s)),n=A.jE(A.CG(s)),m=A.jE(A.CI(s)),l=A.xX(A.CF(s)),k=s.b,j=k===0?"":A.xX(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib5:1}
A.dV.prototype={
a1(a,b){if(b==null)return!1
return b instanceof A.dV&&this.a===b.a},
gI(a){return B.d.gI(this.a)},
G(a,b){return B.d.G(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.W(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.W(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.jo(B.d.p(o%1e6),6,"0")},
$ib5:1}
A.lv.prototype={
p(a){return this.v()},
$iE:1}
A.ao.prototype={
gbZ(){return A.CC(this)}}
A.jm.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jN(s)
return"Assertion failed"}}
A.dD.prototype={}
A.cu.prototype={
gdF(){return"Invalid argument"+(!this.a?"(s)":"")},
gdE(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gdF()+q+o
if(!s.a)return n
return n+s.gdE()+": "+A.jN(s.geI())},
geI(){return this.b}}
A.fG.prototype={
geI(){return A.wT(this.b)},
gdF(){return"RangeError"},
gdE(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.k6.prototype={
geI(){return A.b(this.b)},
gdF(){return"RangeError"},
gdE(){if(A.b(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.ih.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.l0.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fL.prototype={
p(a){return"Bad state: "+this.a}}
A.jz.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jN(s)+"."}}
A.kx.prototype={
p(a){return"Out of Memory"},
gbZ(){return null},
$iao:1}
A.i9.prototype={
p(a){return"Stack Overflow"},
gbZ(){return null},
$iao:1}
A.tn.prototype={
p(a){return"Exception: "+this.a}}
A.H.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.F(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.f(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.f(e,n)
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
k=""}return g+l+B.b.F(e,i,j)+k+"\n"+B.b.a7(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.p.prototype={
cS(a,b){return A.Bt(this,A.r(this).i("p.E"),b)},
cr(a,b,c){var s=A.r(this)
return A.kk(this,s.K(c).i("1(p.E)").a(b),s.i("p.E"),c)},
da(a,b){var s=A.r(this)
return new A.I(this,s.i("n(p.E)").a(b),s.i("I<p.E>"))},
f5(a,b){return new A.cH(this,b.i("cH<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
bz(a,b,c,d){var s,r
d.a(b)
A.r(this).K(d).i("1(1,p.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a9(a,b){var s
A.r(this).i("n(p.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a5(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dg(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.dg(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.dg(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.r(this).i("n(p.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bX(a,b){var s=A.K(this,A.r(this).i("p.E"))
return s},
bW(a){return this.bX(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gY(a){return!this.gO(this)},
gR(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cz())
return s.gn()},
gaQ(a){var s,r=this.gu(this)
if(!r.m())throw A.d(A.cz())
s=r.gn()
if(r.m())throw A.d(A.y8())
return s},
aV(a,b,c){var s,r=A.r(this)
r.i("n(p.E)").a(b)
r.i("p.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cz())},
ao(a,b){return this.aV(0,b,null)},
a_(a,b){var s,r
A.kI(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.pa(b,b-r,this,"index"))},
p(a){return A.Ci(this,"(",")")}}
A.P.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.au.prototype={
gI(a){return A.F.prototype.gI.call(this,0)},
p(a){return"null"}}
A.F.prototype={$iF:1,
a1(a,b){return this===b},
gI(a){return A.hY(this)},
p(a){return"Instance of '"+A.kF(this)+"'"},
ga4(a){return A.mu(this)},
toString(){return this.p(this)}}
A.m_.prototype={
p(a){return""},
$id0:1}
A.rB.prototype={
gnO(){var s,r=this.b
if(r==null)r=$.qk.$0()
s=r-this.a
if($.xE()===1e6)return s
return s*1000}}
A.bl.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iD0:1}
A.rT.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.u(b)
s=B.b.bO(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wQ(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.F(b,0,s)
q=B.b.b1(b,s+1)
p=this.a
a.k(0,A.wQ(r,0,r.length,p,!0),A.wQ(q,0,q.length,p,!0))}return a},
$S:120}
A.rS.prototype={
$2(a,b){throw A.d(A.a5("Illegal IPv6 address, "+a,this.a,b))},
$S:149}
A.iR.prototype={
ghr(){var s,r,q,p,o=this,n=o.w
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
gI(a){var s,r=this,q=r.y
if(q===$){s=B.b.gI(r.ghr())
r.y!==$&&A.AD()
r.y=s
q=s}return q},
gaM(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yK(s==null?"":s)
r.z!==$&&A.AD()
q=r.z=new A.ea(s,t.hL)}return q},
gjE(){return this.b},
geG(){var s=this.c
if(s==null)return""
if(B.b.U(s,"[")&&!B.b.af(s,"v",1))return B.b.F(s,1,s.length-1)
return s},
geQ(){var s=this.d
return s==null?A.z5(this.a):s},
geU(){var s=this.f
return s==null?"":s},
gj9(){var s=this.r
return s==null?"":s},
gja(){return this.c!=null},
gjc(){return this.f!=null},
gjb(){return this.r!=null},
p(a){return this.ghr()},
a1(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gfb())if(p.c!=null===b.gja())if(p.b===b.gjE())if(p.geG()===b.geG())if(p.geQ()===b.geQ())if(p.e===b.gjq()){r=p.f
q=r==null
if(!q===b.gjc()){if(q)r=""
if(r===b.geU()){r=p.r
q=r==null
if(!q===b.gjb()){s=q?"":r
s=s===b.gj9()}}}}return s},
$il3:1,
gfb(){return this.a},
gjq(){return this.e}}
A.rR.prototype={
gjD(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.d2(s,"?",m)
q=s.length
if(r>=0){p=A.iS(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lr("data","",n,n,A.iS(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lT.prototype={
gja(){return this.c>0},
gjc(){return this.f<this.r},
gjb(){return this.r<this.a.length},
gfb(){var s=this.w
return s==null?this.w=this.lc():s},
lc(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.U(r.a,"http"))return"http"
if(q===5&&B.b.U(r.a,"https"))return"https"
if(s&&B.b.U(r.a,"file"))return"file"
if(q===7&&B.b.U(r.a,"package"))return"package"
return B.b.F(r.a,0,q)},
gjE(){var s=this.c,r=this.b+3
return s>r?B.b.F(this.a,r,s-1):""},
geG(){var s=this.c
return s>0?B.b.F(this.a,s,this.d):""},
geQ(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.As(B.b.F(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.U(r.a,"http"))return 80
if(s===5&&B.b.U(r.a,"https"))return 443
return 0},
gjq(){return B.b.F(this.a,this.e,this.f)},
geU(){var s=this.f,r=this.r
return s<r?B.b.F(this.a,s+1,r):""},
gj9(){var s=this.r,r=this.a
return s<r.length?B.b.b1(r,s+1):""},
gaM(){if(this.f>=this.r)return B.d0
return new A.ea(A.yK(this.geU()),t.hL)},
gI(a){var s=this.x
return s==null?this.x=B.b.gI(this.a):s},
a1(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il3:1}
A.lr.prototype={}
A.pV.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.w0.prototype={
$1(a){return this.a.dV(this.b.i("0/?").a(a))},
$S:26}
A.w1.prototype={
$1(a){if(a==null)return this.a.hG(new A.pV(a===undefined))
return this.a.hG(a)},
$S:26}
A.vn.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zN(a))return a
s=this.a
a.toString
if(s.T(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aV(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.en(!0,"isUtc",t.y)
return new A.ew(r,0,!0)}if(a instanceof RegExp)throw A.d(A.z("structured clone of RegExp",null))
if(a instanceof Promise)return A.b2(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.q(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.ca(n),p=s.gu(n);p.m();)m.push(A.de(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.b(a.length)
for(s=J.aE(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:58}
A.lB.prototype={
aP(a){if(a<=0||a>4294967296)throw A.d(A.ys(u.w+a))
return Math.random()*a>>>0},
aL(){return Math.random()},
$iwy:1}
A.ef.prototype={
c_(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.W(a-s,k)
r=a>>>0
a=B.d.W(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.W(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.W(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.W(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.W(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.W(q-n,k)>>>0
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
s.b=B.d.W(o-n+(q-p)+(m-r),4294967296)>>>0},
aP(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.ys(u.w+a))
s=a-1
if((a&s)>>>0===0){p.be()
return(p.a&s)>>>0}do{p.be()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aL(){var s,r=this
r.be()
s=r.a
r.be()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwy:1}
A.qo.prototype={
C(){var s,r=this
if(B.a.N(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.qp()))throw A.d(B.h0)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.fk)}}
A.qp.prototype={
$1(a){return A.b(a)<=0},
$S:31}
A.eM.prototype={
v(){return"QualityProfileKind."+this.b}}
A.eL.prototype={}
A.nx.prototype={}
A.ny.prototype={}
A.kD.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.N(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.J(q,A.r(q).i("J<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.z("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.z("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.z("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.d(A.z("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.fn.prototype={}
A.jT.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gap(0)||!k.b.gap(0)||!k.r.gap(0))throw A.d(A.z("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.z("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.z("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gap(0)||r.gco()<1e-12)A.k(A.z("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.k(A.z("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.z("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.k(A.z("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.z("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.z("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.k(A.z("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.k(A.z("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.ob.prototype={}
A.dy.prototype={
a1(a,b){if(b==null)return!1
return J.fd(b)===A.mu(this)&&b instanceof A.dy&&this.a===b.a&&this.b===b.b},
gI(a){return A.cD(A.mu(this),this.a,this.b,B.f,B.f,B.f)}}
A.bs.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bm.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cC.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ky.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cx.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eC.prototype={
v(){return"HandleRejection."+this.b}}
A.k2.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.ch.prototype={
gap(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a1(a,b){if(b==null)return!1
return b instanceof A.ch&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cD(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.nT.prototype={}
A.kC.prototype={}
A.bz.prototype={}
A.w2.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:66}
A.jl.prototype={
v(){return"AlphaMode."+this.b}}
A.eH.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.z("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.z("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.z("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.wu("roughness",l.z)
A.wu("metallic",0)
A.wu("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aW("uvScaleU",s),new A.aW("uvScaleV",r),new A.aW("uvOffsetU",0),new A.aW("uvOffsetV",0),new A.aW("tintR",l.c),new A.aW("tintG",l.d),new A.aW("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.z("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.d(A.z("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.z("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d5.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bA.prototype={}
A.rV.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.U[s]
q=r.c
if(q<=0)throw A.d(A.z(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.z(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rW())
for(p=B.a.gu(B.U),q=new A.T(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.d(A.z('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rW.prototype={
$1(a){return t.qY.a(a).a===B.dL},
$S:19}
A.cj.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.M(s,14)!==0)throw A.d(A.z("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.mv()
r=n.c
if(r!=null){q=s/14|0
for(s=A.Cq(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.z("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gap(0)&&s.b.gap(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.z("MeshData.localBounds must be a valid AABB",null))},
mv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.I(B.U,a2.a(new A.pK()),a3)
if(!a4.gu(0).m())return
s=new A.I(B.U,a2.a(new A.pL()),a3)
if(s.gt(0)!==1)throw A.d(A.z("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaQ(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaQ(0).b,n=r.b,m=0;m<q;++m){l=m*14
k=l+o
if(!(k<a3))return A.f(a2,k)
j=a2[k]
i=k+1
if(!(i<a3))return A.f(a2,i)
h=a2[i]
k+=2
if(!(k<a3))return A.f(a2,k)
g=a2[k]
k=l+n
if(!(k<a3))return A.f(a2,k)
f=a2[k]
i=k+1
if(!(i<a3))return A.f(a2,i)
e=a2[i]
i=k+2
if(!(i<a3))return A.f(a2,i)
d=a2[i]
k+=3
if(!(k<a3))return A.f(a2,k)
c=a2[k]
b=j*j+h*h+g*g
a=f*f+e*e+d*d
if(!B.a.a9(A.e([j,h,g,f,e,d,c],p),new A.pM()))throw A.d(A.z("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.z("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.z("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.z("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.pK.prototype={
$1(a){return t.qY.a(a).a===B.dL},
$S:19}
A.pL.prototype={
$1(a){return t.qY.a(a).a===B.dK},
$S:19}
A.pM.prototype={
$1(a){return isFinite(A.bD(a))},
$S:5}
A.pX.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.d(A.z("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.pZ()))throw A.d(A.z("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.d(A.z("resource history does not match vhsOutput ownership",null))}}
A.pZ.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.qg.prototype={}
A.kL.prototype={
jd(a){var s=this
if(s.d)A.k(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
bv(){if(this.d)return
this.d=!0
this.a=null}}
A.ft.prototype={
v(){return"DrawMode."+this.b}}
A.js.prototype={
v(){return"BlendMode."+this.b}}
A.bw.prototype={}
A.kW.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.z("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.z("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.z("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jy.prototype={
v(){return"ColorEncoding."+this.b}}
A.jI.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.kJ.prototype={
C(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.e1(B.le)
if(o.a!==0)A.k(A.aq(o,r,"contains unknown pipeline features"))
if(q.a===B.bo&&p.gY(p))A.k(A.aq(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.z("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.eP.prototype={
v(){return"RendererState."+this.b}}
A.aK.prototype={}
A.od.prototype={
jp(a){var s=this.z.h(0,a)
return s==null?B.cj:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.km.prototype={
pk(a){return this.a.cc(a)}}
A.pI.prototype={
$3(a,b,c){return new A.cC(A.b(a),A.b(b),A.aD(c))},
$S:78}
A.l2.prototype={}
A.pN.prototype={
br(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yQ(f,new A.jW(e.byteLength,B.cx,B.hh))
if(f.b!==B.h)A.k(A.m(g))
s=A.c(d.a)
r=f.a
q=v.G
r.bindBuffer(A.b(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.b(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d8(f)
A.bB(f,p)
if(f.b!==B.h)A.k(A.m(g))
r.bindBuffer(A.b(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a2(t.S)
for(n=a.a,m=0;m<6;++m){l=B.U[m]
k=A.A9(l.a)
if(!o.l(0,k))continue
j=A.Ex(n,k,l)
if(f.b!==B.h)A.k(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.b(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.k(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yQ(f,new A.jW(A.yn(i),B.cx,B.cw))
if(f.b!==B.h)A.k(A.m(g))
r.bindBuffer(A.b(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.c(h.a))
A.Dl(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l2(d,h,p,f,e.length/14|0,!1)},
eZ(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.e_(B.aA,a))
this.b.cc(a)
return s},
b9(a){var s,r,q=this.c.a3(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.c(q.c.a))
s.deleteBuffer(A.c(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.c(r.a))}this.b.b9(a)},
eX(){var s,r,q,p
for(s=this.b.bP(),r=s.$ti,s=new A.cJ(s.a(),r.i("cJ<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.br(p.b))}},
gcp(){return this.b.bP().bz(0,0,new A.pP(),t.S)}}
A.pO.prototype={
$3(a,b,c){return new A.bs(A.b(a),A.b(b),A.aD(c))},
$S:80}
A.pP.prototype={
$2(a,b){var s,r
A.b(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.yn(s)
return a+r+s},
$S:86}
A.cm.prototype={}
A.e8.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c2.prototype={}
A.rK.prototype={
cG(a){var s=this.a,r=A.G(s)
return new A.I(s,r.i("n(1)").a(new A.rL(a)),r.i("I<1>")).gt(0)}}
A.rL.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:87}
A.rI.prototype={
oZ(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.q(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.k(A.z("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.k(A.aq(n,"handle","must be valid"))
if(s.T(o))throw A.d(A.z("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("ay<2>")
m=A.K(new A.ay(s,r),r.i("p.E"))
B.a.V(m,new A.rJ())
r=t.Aj
l=A.a2(r)
k=A.q(r,t.bp)
j=A.e([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.v)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.m3(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c2(p,i))}r=l.a
return new A.rK(A.ai(j,t.d),r)},
m3(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.hs(a,r)===s.d)return B.dE
this.b.k(0,a,!0)
return B.dD}catch(q){if(A.ak(q) instanceof A.k2){s=this.b.h(0,a)===!0?B.dG:B.dF
return s}else throw q}}}
A.rJ.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:94}
A.dH.prototype={}
A.kZ.prototype={
aT(a){var s=this.a,r=A.wG(s,B.hk)
A.wH(s,r,0,a)
return r},
pD(a,b){var s,r,q,p=this,o=p.b,n=o.cc(a),m=A.K(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.jC(a,new A.dH(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wG(p.a,s)
o.k(0,r,q)}A.wH(p.a,q,0,b)},
hs(a,b){var s
this.b.cc(a)
s=this.c.h(0,a.a)
return s==null?b:s},
pg(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.hs(a,s)},
po(a){var s=this.e
s===$&&A.h()
return s},
pq(a){var s=this.f
s===$&&A.h()
return s},
pi(a){var s=this.r
s===$&&A.h()
return s},
pm(a){var s=this.w
s===$&&A.h()
return s},
bv(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.al(s,s.r,s.e,A.r(s).i("al<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.H(0)
s=n.d
s===$&&A.h()
A.lg(q,s)
s=n.e
s===$&&A.h()
A.lg(q,s)
s=n.f
s===$&&A.h()
A.lg(q,s)
s=n.r
s===$&&A.h()
A.lg(q,s)
s=n.w
s===$&&A.h()
A.lg(q,s)},
eX(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aT($.xD())
i.e=i.aT($.xA())
i.f=i.aT($.xB())
i.r=i.aT($.xz())
i.w=i.aT($.xC())
for(s=i.b.bP(),r=s.$ti,s=new A.cJ(s.a(),r.i("cJ<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a9(o,new A.rO()))continue
l=A.wG(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wH(p,l,k,j)}q.k(0,n.a,l)}},
gcp(){return this.b.bP().bz(0,0,new A.rN(),t.S)}}
A.rM.prototype={
$3(a,b,c){return new A.bm(A.b(a),A.b(b),A.aD(c))},
$S:102}
A.rO.prototype={
$1(a){return t.Fx.a(a)==null},
$S:104}
A.rN.prototype={
$2(a,b){var s
A.b(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:110}
A.eE.prototype={
goa(){return this.b.length}}
A.jR.prototype={
mU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qs(A.e([],t.pq),A.a2(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p)r[p].al(s,b)
o=s.mT(a,!1)
if(o.b.length!==0)return new A.jS(o,B.iF)
q=o.a
n=A.G(q)
m=new A.U(q,n.i("j(1)").a(new A.o6()),n.i("U<1,j>")).bC(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){k=r[p]
for(n=k.ak(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.d(A.m('RenderFeature "'+k.gaa()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.V(l,new A.o7(o))
return new A.jS(o,l)}}
A.o6.prototype={
$1(a){return t.A.a(a).a},
$S:113}
A.o7.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.eH(s,new A.o4(a)),B.a.eH(s,new A.o5(b)))},
$S:116}
A.o4.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:7}
A.o5.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:7}
A.jS.prototype={}
A.ey.prototype={
v(){return"FrameQueueState."+this.b}}
A.oc.prototype={}
A.oa.prototype={
mP(a){if(a.length===0)throw A.d(A.aq(a,"passId",null))
this.b=a
this.a.cs(a,A.Al())},
kk(){var s,r,q,p,o=t.z
o=A.q(o,o)
for(s=this.a,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aK(p.a,p.b,p.d))}return A.b6(o,t.N,t.pH)},
bH(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.z("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.W(a,3)*b}}
A.fQ.prototype={}
A.az.prototype={
gbT(){var s=this.c,r=A.G(s)
return new A.I(s,r.i("n(1)").a(new A.q1()),r.i("I<1>"))},
gcw(){var s=this.c,r=A.G(s)
return new A.I(s,r.i("n(1)").a(new A.q2()),r.i("I<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.q1.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:23}
A.q2.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:23}
A.cf.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bf.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i3.prototype={
v(){return"ResourceFormat."+this.b}}
A.cS.prototype={
v(){return"GraphStage."+this.b}}
A.aO.prototype={
jk(){var s=this
return new A.aO(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a1(a,b){var s=this
if(b==null)return!1
return b instanceof A.aO&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gI(a){var s=this
return A.cD(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fH.prototype={
v(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.ho.prototype={}
A.ql.prototype={
aA(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.Dn(m.a,a.c,r.a(a.d.ga0().bW(0)),r.a(a.f),a.b)}catch(q){if(A.ak(q) instanceof A.i7){++m.e
throw q}else throw q}p=new A.ho(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.c(n.b.a))
return p},
lk(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.al(s,s.r,s.e,a.$ti.i("al<1>")),r=this.a.a;s.m();)r.deleteProgram(A.c(s.d.b.a))}}
A.bk.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.z("ProgramSource.id must not be empty",m))
s=t.S
r=A.a2(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.z('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.z('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a2(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.z('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.z('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.qq.prototype={}
A.b8.prototype={
ai(){var s=this
return A.y_(B.e6,s.f,B.ao,B.a8,!0,!0,!0,!0,s.r,B.as,B.at,s.d,s.e,!0,!1,!1)}}
A.qs.prototype={
mT(a,b){var s=this.mt(t.Q.a(a),!1),r=this.a,q=A.G(r)
return new A.qr(A.ai(new A.I(r,q.i("n(1)").a(new A.qx()),q.i("I<1>")),t.A),s)},
mt(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.ka)
r=m.a
q=A.G(r)
p=q.i("I<1>")
o=A.K(new A.I(r,q.i("n(1)").a(new A.qw()),p),p.i("p.E"))
m.l0(o,a,s)
m.l4(o,s)
m.l6(o,s)
m.l3(o,!1,s)
n=m.l8(o,s)
m.l5(o,n,s)
m.l7(o,s)
m.l2(o,n,s)
m.l1(o,s)
return s},
l0(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
p=B.P.e1(b)
if(p.a!==0)B.a.l(c,new A.bf(B.hv,q.a,"missing capabilities: "+p.a5(0,", ")))}},
l4(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbT(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bf(B.hq,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
l6(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.G(a),r=s.i("n(1)").a(new A.qv()),q=B.a.gu(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbT()
o=A.K(p,p.$ti.i("p.E"))
p=r.gcw()
n=A.K(p,p.$ti.i("p.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bf(B.aX,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaQ(o).a
l=B.a.gaQ(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bf(B.aX,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bf(B.aX,r.a,"resolve source and destination must match format and extent"))}},
l3(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.v)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bf(B.ht,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
l8(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.q(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
for(o=p.gcw(),n=J.R(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bf(B.hp,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
l5(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbT(),p=J.R(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bf(B.cC,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bO(a,m)>s)B.a.l(c,new A.bf(B.cC,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
l7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gbT(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcw(),k=J.R(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bf(B.hs,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
l2(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gbT(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcw().ao(0,new A.qu(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bf(B.hr,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
l1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.q(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcw(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.kb(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a2(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbT(),p=J.R(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cW(s,!1,!1,p)
s=a.length
i=A.cW(s,!1,!1,p)
h=new A.qt(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.bf(B.hu,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qx.prototype={
$1(a){t.A.a(a)
return A.ww()},
$S:7}
A.qw.prototype={
$1(a){t.A.a(a)
return A.ww()},
$S:7}
A.qv.prototype={
$1(a){return t.A.a(a).f},
$S:7}
A.qu.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:23}
A.qt.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.f(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.f(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.f(r,a)
r=r[a]
r=A.ix(r,r.r,A.r(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:31}
A.qr.prototype={}
A.lA.prototype={$ic1:1,
gaa(){return this.a},
gD(){return this.b},
gf7(){return this.c}}
A.i0.prototype={
hA(a){var s,r,q=a.c,p=q.a
if(!p.gap(0))A.k(A.z("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.k(A.z("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.k(A.z(u.u,null))
s=this.a.cc(a.a)
q=q.ad()
p=s.d.gaB()
r=A.G(p)
return A.be(new A.U(p,r.i("M(1)").a(q.gaD()),r.i("U<1,M>")))},
gjf(){return new A.cp(this.oj(),t.Br)},
oj(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gjf(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bP(),n=o.$ti,o=new A.cJ(o.a(),n.i("cJ<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.a2(f)
f=f.a
if(!(f>=0&&f<j.length)){A.f(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ad()
f=f.gaB()
d=A.G(f)
r=5
return a.b=new A.lA(h,g,A.be(new A.U(f,d.i("M(1)").a(i.gaD()),d.i("U<1,M>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCQ:1}
A.qz.prototype={
$3(a,b,c){return new A.cx(A.b(a),A.b(b),A.aD(c))},
$S:125}
A.qI.prototype={
jx(a,b){var s,r
if(this.w)A.k(A.m("resource library is disposed"))
s=this.a
a.C()
r=s.b.aG(a,b)
s.c.k(0,r.a,s.br(a))
this.e.l(0,r)
return r},
p7(a){if(this.w)A.k(A.m("resource library is disposed"))
this.a.b9(a)
this.e.a3(0,a)},
p6(a){var s
if(this.w)A.k(A.m("resource library is disposed"))
a.C()
s=this.b.a.aG(a,null)
this.f.l(0,s)
return s},
eW(a,b,c){var s,r
if(this.w)A.k(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.k(A.z("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.k(A.z("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aG(new A.dH(new A.jY(c,b,1,!1,B.ay,B.ay,B.cz,1),A.cW(1,null,!1,t.Fx),!1),a)
this.r.l(0,r)
return r},
bv(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)return
s=i.r
r=A.K(s,A.r(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.v)(r),++l){k=r[l]
j=o.a3(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b9(k)}r=i.f
q=A.K(r,A.r(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.v)(q),++l)n.b9(q[l])
q=i.e
o=A.K(q,A.r(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.v)(o),++l)m.b9(o[l])
s.H(0)
r.H(0)
q.H(0)
p.bv()
i.w=!0}}
A.to.prototype={}
A.m0.prototype={$ic1:1,
gaa(){return this.a},
gD(){return this.b},
gf7(){return this.c}}
A.uM.prototype={
$1(a){var s=this.a.w.a.eZ(a),r=s.b!=null,q=r?s.d:s.e
return new A.i2(s.c,r,q,s.f)},
$S:132}
A.uN.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().jl(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().jl(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:139}
A.uL.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uE.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gR(r)},
$S:150}
A.uF.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.b9
s=q.b.z
r=s.length===0?null:B.a.gR(s)
return A.GO(s,3,q.a.d,r)},
$S:153}
A.uK.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uz.prototype={
$0(){return this.a.at.a},
$S:154}
A.uB.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uA.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uJ.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.ux.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uy.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uG.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uH.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uI.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.uD.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uC.prototype={
$0(){return this.a.at.w},
$S:165}
A.uO.prototype={
$0(){return this.a},
$S:166}
A.tR.prototype={}
A.lM.prototype={$iCP:1}
A.lx.prototype={$iC0:1}
A.qO.prototype={
gbk(){var s=this.w
return s==null?A.k(A.m("renderer is not initialized")):s},
je(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bv)throw A.d(A.m("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.ad)throw A.d(A.m("renderer device is context lost"))
m.e=B.kO
try{m.r=s.ju()
r=m.b
q=A.pY(a)
p=r.a
if(p.a!=null)A.k(A.m("configuration state is already initialized"))
a.C()
p.a=a
A.pY(a)
p.d=1
r.b.jd(q)
r=A.Cp()
m.w=new A.qI(A.Cr(s),r,A.D2(s),A.a2(t.kc),A.a2(t.pw),A.a2(t.Aj))
r=new A.kL()
p=new A.oz(s,r)
q=A.pY(a)
o=p.fJ(q,a)
r.jd(q)
p.c=new A.kE(new A.qg(q),o)
m.x=p
m.y=new A.ql(s,A.q(t.N,t.CH))
m.as=a
A.zx(m)
m.e=B.bw}catch(n){s=m.y
if(s!=null){r=s.b
s.lk(new A.ay(r,A.r(r).i("ay<2>")))
r.H(0)}s=m.x
if(s!=null)s.bv()
s=m.w
if(s!=null)s.bv()
m.w=null
m.e=B.bv
throw n}return A.wj(t.H)},
mN(a,b){var s,r,q,p,o,n,m=this,l=null
m.m8()
m.cH()
r=B.a.q(m.d,a)
if(!r)throw A.d(A.z("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gap(0))A.k(A.z("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gap(0)||q.gco()<1e-12)A.k(A.z("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.k(A.z("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.k(A.z("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gap(0)||!r.b.gap(0)||!r.c.gap(0))A.k(A.z("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.k(A.z("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ax)A.k(A.m("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ax
o.c=0
B.a.H(o.a)
s=o
try{r=m.r
if((r==null?A.k(A.m("renderer is not initialized")):r).z)m.b$=m.a.mO()
return s}catch(n){if(o.b!==B.ax)A.k(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.h5
m.fp()
m.ax=m.at=null
throw n}},
nR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cH()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ax)A.k(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.id(l,0,A.en(m.c,"count",t.S),A.G(l).c).bX(0,!1)
m.b=B.h4
q=k
try{p=A.EJ(a1,r,s,q)
o=p.a.kk()
m=o.gJ().da(0,new A.qP())
l=m.$ti
n=new A.cB(m,l.i("aK(1)").a(new A.qQ()),l.i("cB<1,aK>")).bz(0,B.cj,new A.qR(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcp()
g=g.c.gcp()
e=a1.w
e.a.gcp()
e.c.gcp()
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
return new A.od(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.lw(s.e)
a1.ax=a1.at=null}},
m8(){var s,r,q,p=this
if(p.e!==B.dr)return
if(p.a.b===B.ad)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.w)A.k(A.m("resource library is disposed"))
s.a.eX()
s.c.eX()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.m("GPU resource adapter is not initialized"))
s.c=new A.kE(q.a,s.fJ(A.pY(r),r))
s=p.y
s.c=null
s.b.H(0)
A.zx(p)
p.e=B.bw},
cH(){var s=this,r=s.e
if(r!==B.bw)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.ad){s.ln()
s.e=B.dr
throw A.d(A.m("renderer context lost"))}}}
A.qP.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.qQ.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.qR.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aK(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lK.prototype={}
A.tA.prototype={
lw(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.k(A.m(u.k))
r=s.hu(o)
if(r.b)A.k(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lK(o))}catch(q){p.dD(o)}},
fp(){var s=this.b$
this.b$=null
if(s!=null)this.dD(s)},
ln(){var s,r,q
this.fp()
s=this.a$
r=J.yb(s.slice(0),A.G(s).c)
B.a.H(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.v)(r),++q)this.dD(r[q].b)},
dD(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hu(a).a)}catch(r){}}}
A.lQ.prototype={}
A.i8.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bP.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ib5:1}
A.bN.prototype={
G(a,b){var s
t.z3.a(b)
s=B.c.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ib5:1}
A.aP.prototype={}
A.w7.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:51}
A.w8.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.w5.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:53}
A.w6.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.nO.prototype={}
A.nN.prototype={}
A.jh.prototype={
gaB(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.M(o,n,p),new A.M(r,n,p),new A.M(o,q,p),new A.M(r,q,p),new A.M(o,n,s),new A.M(r,n,s),new A.M(o,q,s),new A.M(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eJ.prototype={}
A.fx.prototype={
v(){return"FrustumTest."+this.b}}
A.oe.prototype={
py(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.ck
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.h6:B.h7}}
A.of.prototype={
$4(a,b,c,d){var s=new A.M(a,b,c),r=new A.eJ(s,d),q=Math.sqrt(s.gco())
if(q<1e-9)s=r
else{s=1/q
s=new A.eJ(new A.M(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dv.prototype={
a7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.dv(h)},
jz(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.cV.a(a)
s=a.a
r=this.a
q=r.length
if(0>=q)return A.f(r,0)
p=r[0]
o=a.b
if(4>=q)return A.f(r,4)
n=r[4]
m=a.c
if(8>=q)return A.f(r,8)
l=r[8]
if(12>=q)return A.f(r,12)
k=s*p+o*n+m*l+r[12]
l=r[1]
n=r[5]
p=r[9]
if(13>=q)return A.f(r,13)
j=s*l+o*n+m*p+r[13]
p=r[2]
n=r[6]
l=r[10]
if(14>=q)return A.f(r,14)
i=s*p+o*n+m*l+r[14]
l=r[3]
n=r[7]
p=r[11]
if(15>=q)return A.f(r,15)
h=s*l+o*n+m*p+r[15]
return h===0||h===1?new A.M(k,j,i):new A.M(k/h,j/h,i/h)},
eN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
if(0>=d)return A.f(e,0)
s=e[0]
if(5>=d)return A.f(e,5)
r=e[5]
if(10>=d)return A.f(e,10)
d=e[10]
q=e[9]
p=e[6]
o=r*d-q*p
n=e[4]
m=e[1]
l=e[2]
k=s*o-n*(m*d-q*l)+e[8]*(m*p-r*l)
if(!isFinite(k)||Math.abs(k)<1e-12)A.k(A.m("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
if(!(s<16))return A.f(i,s)
s=i[s]
if(!(d<16))return A.f(h,d)
h[d]=s}if(15>=16)return A.f(h,15)
h[15]=1
return new A.dv(h)},
gap(a){return B.r.a9(this.a,new A.pG())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.pG.prototype={
$1(a){return isFinite(A.bD(a))},
$S:5}
A.kH.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.l_.prototype={
C(){var s=this.a
if(!s.gap(0))throw A.d(A.z("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.z("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.z(u.u,null))},
ad(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.yl(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
f=i.length
if(0>=f)return A.f(i,0)
h=i[0]
if(1>=f)return A.f(i,1)
p=i[1]
if(2>=f)return A.f(i,2)
o=i[2]
if(4>=f)return A.f(i,4)
n=i[4]
if(5>=f)return A.f(i,5)
m=i[5]
if(6>=f)return A.f(i,6)
l=i[6]
if(8>=f)return A.f(i,8)
k=i[8]
if(9>=f)return A.f(i,9)
j=i[9]
if(10>=f)return A.f(i,10)
f=this.a
return A.yl(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.M.prototype={
cd(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bs(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.M(s*r-q*p,q*o-n*r,n*p-s*o)},
gco(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gco())},
gap(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gco())
return r<1e-9?B.aj:new A.M(s.a/r,s.b/r,s.c/r)},
a1(a,b){if(b==null)return!1
return b instanceof A.M&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cD(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.ip.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hm.prototype={
gaa(){return this.f},
al(a,b){B.a.l(a.a,new A.az(this.f,B.L,A.e([new A.O(this.x,B.i),new A.O(this.y,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.aA(new A.bk(s.e,s.b,s.c,B.w,B.cY,B.cU)),q=A.d8(s.d),p=t.n,o=s.r===B.dQ?new Float32Array(A.a1(A.e([1/s.Q,0],p))):new Float32Array(A.a1(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.lo(new A.b8(s.f,A.e([new A.O(s.x,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$ian:1}
A.lo.prototype={
an(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c6(r,a.ar(o.r).b)
A.bo(r,o.a.ai())
A.dG(r,B.ab,1,0,0,0)
A.cn(r,o.b.b)
q=t._
p=o.d
if(o.e)A.Dj(r,0,q.a(p.$0()))
else A.aG(r,0,q.a(p.$0()))
A.x(r,"uSource",B.x)
A.x(r,"uTexelStep",new A.A(B.aG,o.f))
A.bB(r,o.c)
s.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.jt.prototype={
gaa(){return"bloomComposite"},
al(a,b){B.a.l(a.a,new A.az("bloomComposite",B.L,A.e([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r="bloomComposite",q=s.a.aA(new A.bk(r,s.b,s.c,B.w,B.jg,B.iZ)),p=A.d8(s.d),o=s.w,n=A.e([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.j)],t.C)
return A.e([new A.lp(new A.b8(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$ian:1}
A.lp.prototype={
an(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c6(r,a.d9(q.f).b)
A.Dk(r,1)
A.bo(r,B.eM)
A.cn(r,q.b.b)
A.aG(r,0,t._.a(q.d.$0()))
A.x(r,"uBloom",B.x)
A.x(r,"uBloomStrength",new A.A(B.e,p))
A.bB(r,q.c)
s.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.jG.prototype={
gaa(){return"depthPrepass"},
al(a,b){B.a.l(a.a,new A.az("depthPrepass",B.hm,A.e([new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r="depthPrepass",q=s.a.aA(new A.bk(r,s.b,s.c,B.cX,B.cV,B.iq))
return A.e([new A.ls(new A.b8(r,A.e([new A.O(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ian:1}
A.ls.prototype={
an(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c6(a1,a2.ar("sceneDepth").b)
A.bo(a1,d.a.ai())
A.dG(a1,B.aS,1,0,0,0)
A.cn(a1,d.b.b)
A.x(a1,"uVertexSnapGrid",new A.A(B.e,a0.Q))
A.x(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.x(a1,"uViewProjection",new A.A(B.u,new Float32Array(A.a1(a))))
A.x(a1,"uModel",new A.A(B.u,new Float32Array(A.a1(i.c.ad().a))))
A.w3(b,k,!1)
d.ll(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.k(A.m(c))
m.bindVertexArray(A.c(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.k(A.m(c))
e=A.b(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.b(o.WebGL2RenderingContext.UNSIGNED_INT):A.b(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bH(g,f)}else{if(a1.b!==B.h)A.k(A.m(c))
m.drawArraysInstanced(A.b(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bH(g,f)}}},
ll(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aG(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.A(B.e,0))
A.x(q,"uAffineWarpStrength",new A.A(B.e,0))
s=this.a.ai()
A.bo(q,r.dx?s.f6(!1):s)},
$iac:1,
gD(){return this.a}}
A.ir.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hs.prototype={
gaa(){return this.f},
al(a,b){B.a.l(a.a,new A.az(this.f,B.L,A.e([new A.O(this.w,B.i),new A.O(this.x,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.aA(new A.bk(s.e,s.b,s.c,B.w,B.cY,B.cU)),q=A.d8(s.d),p=t.n,o=s.r===B.dR?new Float32Array(A.a1(A.e([1/s.z,0],p))):new Float32Array(A.a1(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.lt(new A.b8(s.f,A.e([new A.O(s.w,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$ian:1}
A.lt.prototype={
an(a){return},
$iac:1,
gD(){return this.a}}
A.jK.prototype={
gaa(){return"dofComposite"},
al(a,b){var s=this
B.a.l(a.a,new A.az("dofComposite",B.L,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1))},
ak(a){var s=this,r="dofComposite",q=s.a.aA(new A.bk(r,s.b,s.c,B.w,B.je,B.id)),p=A.d8(s.d)
return A.e([new A.lu(new A.b8(r,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ian:1}
A.lu.prototype={
an(a){var s,r=this,q=a.ar("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c6(n,q.b)
A.bo(n,r.a.ai())
A.cn(n,r.b.b)
s=t._
A.aG(n,0,s.a(r.d.$0()))
A.x(n,"uSharp",B.x)
A.aG(n,1,s.a(r.e.$0()))
A.x(n,"uBlurred",B.ai)
A.aG(n,2,s.a(r.f.$0()))
A.x(n,"uSceneDepth",B.dJ)
A.x(n,"uNear",new A.A(B.e,o.f))
A.x(n,"uFar",new A.A(B.e,o.r))
A.x(n,"uFocusDistance",new A.A(B.e,r.w))
A.x(n,"uFocusRange",new A.A(B.e,r.x))
A.x(n,"uStrength",new A.A(B.e,0))
A.bB(n,r.c)
p.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.k0.prototype={
gaa(){return"grade"},
al(a,b){B.a.l(a.a,new A.az("grade",B.L,A.e([new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.aA(new A.bk("grade",s.b,s.c,B.w,B.jc,B.j_)),q=A.d8(s.d),p=s.r,o=s.w
return A.e([new A.lz(new A.b8("grade",A.e([new A.O(p,B.i),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$ian:1}
A.lz.prototype={
an(a){var s=this,r=a.ar(s.f.a),q=a.b,p=q.a
A.c6(p,a.ar(s.r.a).b)
A.bo(p,s.a.ai())
A.cn(p,s.b.b)
A.aG(p,0,r.b)
A.x(p,"uScene",B.x)
A.aG(p,1,t._.a(s.d.$0()))
A.x(p,"uLut",B.ai)
A.x(p,"uLutSize",new A.A(B.e,s.e))
A.x(p,"uStrength",new A.A(B.e,a.c.e.y))
A.bB(p,s.c)
q.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.ko.prototype={
gaa(){return"msaaResolve"},
al(a,b){B.a.l(a.a,new A.az("msaaResolve",B.hn,A.e([new A.O(this.b,B.i),new A.O(this.c,B.j)],t.C),!0))},
ak(a){var s=this.b,r=this.c
return A.e([new A.lG(new A.b8("msaaResolve",A.e([new A.O(s,B.i),new A.O(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$ian:1}
A.lG.prototype={
an(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.d9(this.c),j=a.d9(this.d),i=this.b
if(i.b!==B.h)A.k(A.m(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.k(A.z("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.k(A.z("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.k(A.z("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.b(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.b(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.b(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.e([A.b(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(m.WebGL2RenderingContext.NONE)],t.n))}A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.b(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.b(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.b(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.e([A.b(m.WebGL2RenderingContext.NONE),A.b(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.b(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.b(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.b(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.b(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.e([A.b(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.b(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.b(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iac:1,
gD(){return this.a}}
A.fl.prototype={}
A.ju.prototype={
ar(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
d9(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ar(s)},
$iCO:1}
A.wx.prototype={}
A.hX.prototype={
gaa(){return"present"},
al(a,b){B.a.l(a.a,new A.az("present",B.ho,A.e([new A.O(this.f,B.i)],t.C),!1))},
ak(a){var s=this,r=s.a.aA(new A.bk("present",s.b,s.c,B.w,B.jn,B.ix)),q=A.d8(s.d),p=s.f
return A.e([new A.lN(new A.b8("present",A.e([new A.O(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$ian:1}
A.lN.prototype={
an(a){var s,r=this,q=a.d9(r.d),p=a.b,o=p.a
A.c6(o,null)
A.bo(o,r.a.ai())
A.cn(o,r.b.b)
A.bB(o,r.c)
A.aG(o,0,q.b)
s=a.c.e
A.x(o,"uExposure",new A.A(B.e,s.a))
A.x(o,"uVignette",new A.A(B.e,s.e))
A.x(o,"uGrain",new A.A(B.e,s.f))
A.x(o,"uRainIntensity",new A.A(B.e,s.r))
A.x(o,"uRainWindowVisibility",new A.A(B.e,s.w))
A.x(o,"uOutputEncoding",new A.A(B.e,r.e===B.aT?1:0))
A.x(o,"uToneMap",B.dI)
p.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.kG.prototype={
gaa(){return"ps1Quantize"},
al(a,b){B.a.l(a.a,new A.az("ps1Quantize",B.L,A.e([new A.O(this.e,B.i),new A.O(this.f,B.j)],t.C),!1))},
ak(a){var s=this,r="ps1Quantize",q=s.a.aA(new A.bk(r,s.b,s.c,B.w,B.ji,B.i6)),p=A.d8(s.d),o=s.e,n=s.f
return A.e([new A.lO(new A.b8(r,A.e([new A.O(o,B.i),new A.O(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$ian:1}
A.lO.prototype={
an(a){var s=this,r=a.ar(s.d.a),q=a.b,p=q.a
A.c6(p,a.ar(s.e.a).b)
A.bo(p,s.a.ai())
A.cn(p,s.b.b)
A.aG(p,0,r.b)
A.x(p,"uScene",B.x)
A.x(p,"uQuantizationBits",new A.A(B.e,a.c.e.as))
A.x(p,"uDitherStrength",new A.A(B.e,0))
A.bB(p,s.c)
q.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.eS.prototype={}
A.kP.prototype={
gaa(){return"shadow"},
al(a,b){B.a.l(a.a,new A.az("shadowCaster",B.hl,A.e([new A.O(this.z,B.j)],t.C),!1))},
ak(a){var s=this,r="shadowCaster",q=s.a.aA(new A.bk(r,s.b,s.c,B.cX,B.cV,B.iY))
return A.e([new A.lR(new A.b8(r,A.e([new A.O(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
$ian:1}
A.lR.prototype={
an(a){var s,r,q,p,o=this,n=a.ar("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c6(s,n.b)
A.bo(s,o.a.ai())
A.dG(s,B.aS,1,0,0,0)
return}r=A.yB(l)
o.x.$1(r)
s=m.a
A.c6(s,n.b)
A.bo(s,o.a.ai())
A.dG(s,B.aS,1,0,0,0)
A.cn(s,o.b.b)
A.x(s,"uAlbedo",B.x)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.v)(s),++p)o.lo(m,s[p],l,r)},
hk(a,b){var s,r=this.d.$1(b),q=a.a
A.aG(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.A(B.e,0))
s=this.a.ai()
A.bo(q,r.dx?s.f6(!1):s)},
lo(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.x(s,"uUseInstances",B.bK)
n.hf(a,b.gD().c,d)
n.hk(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bB(s,q.a)
s=q.b
r=q.c
if(s)a.e3(r,q.d,0)
else a.aI(r,0)}else if(b instanceof A.eE){p=b.a
if(!p.gD().r)return
if(n.mq(b,c)===B.lz)return
n.hf(a,p.gD().c,d)
A.w3(a,b,!1)
n.hk(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bB(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.e4(r,q.d,o,0)
else a.e2(r,0,o)}else throw A.d(A.z("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).p(0),null))},
mq(a,b){return B.ly},
hf(a,b,c){var s=a.a
A.x(s,"uModel",new A.A(B.u,new Float32Array(A.a1(b.ad().a))))
A.x(s,"uLightViewProjection",new A.A(B.u,new Float32Array(A.a1(c.a.a))))},
$iac:1,
gD(){return this.a}}
A.vk.prototype={
$1(a){return this.a.a=a},
$S:57}
A.vl.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:47}
A.kQ.prototype={
gaa(){return"shadowedWorld"},
al(a,b){var s=this,r=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.j))
B.a.l(a.a,new A.az("shadowedWorld",B.cB,r,!1))},
ak(a){var s=this,r="shadowedWorld",q=s.a.aA(new A.bk(r,s.b,s.c,B.jk,B.jd,B.i3)),p=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.j))
return A.e([new A.lS(new A.b8(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$ian:1}
A.lS.prototype={
an(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ar("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c6(b1,a4.b)
A.bo(b1,a2.a.ai())
s=a8.a
A.dG(b1,B.c7,1,s.c,s.b,s.a)
A.cn(b1,a2.b.b)
A.x(b1,"uAlbedo",B.x)
A.x(b1,"uNormalMap",B.lV)
A.x(b1,"uOrmMap",B.lW)
A.x(b1,"uEmissiveMap",B.lX)
A.x(b1,"uLightmap",B.lY)
s=t._
A.aG(b1,1,s.a(a2.y.$0()))
A.x(b1,"uShadowMap",B.ai)
r=t.n
A.x(b1,"uShadowMapTexelSize",new A.A(B.aG,new Float32Array(A.a1(A.e([1/a2.ch,1/a2.CW],r)))))
A.aG(b1,2,s.a(a2.at.$0()))
A.x(b1,"uSsao",B.dJ)
A.x(b1,"uVertexSnapGrid",new A.A(B.e,a9.Q))
A.x(b1,"uSceneColorSize",new A.A(B.aG,new Float32Array(A.a1(A.e([a2.ax,a2.ay],r)))))
A.x(b1,"uViewProjection",new A.A(B.u,new Float32Array(A.a1(a7.c.a))))
A.x(b1,"uView",new A.A(B.u,new Float32Array(A.a1(a7.a.a))))
A.x(b1,"uLightViewProjection",new A.A(B.u,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.x(b1,"uFogColor",new A.A(B.q,new Float32Array(A.a1(A.e([s.a,s.b,s.c],r)))))
A.x(b1,"uFogStart",new A.A(B.e,a8.c))
A.x(b1,"uFogEnd",new A.A(B.e,a8.d))
s=a8.e
A.x(b1,"uFogHeightFalloff",new A.A(B.e,s==null?0:s))
s=a8.f
A.x(b1,"uFogDensity",new A.A(B.e,s==null?0:s))
q=a2.Q.$0()
s=A.e([],t.cv)
p=a2.as.$0()
p=J.R(p==null?B.b9:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a4
k=o?a3:q.c
if(k==null)k=B.aH
A.x(b1,"uLightPosition",new A.A(B.q,new Float32Array(A.a1(A.e([l.a,l.b,l.c],r)))))
A.x(b1,"uLightDirection",new A.A(B.q,new Float32Array(A.a1(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.T
A.x(b1,"uLightColor",new A.A(B.q,new Float32Array(A.a1(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.x(b1,"uLightIntensity",new A.A(B.e,p==null?0:p))
A.x(b1,"uSpotEnabled",new A.A(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a4
g=p?a3:i.b
if(g==null)g=B.T
A.x(b1,"uDirectionalDirection",new A.A(B.q,new Float32Array(A.a1(A.e([h.a,h.b,h.c],r)))))
A.x(b1,"uDirectionalColor",new A.A(B.q,new Float32Array(A.a1(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.x(b1,"uDirectionalIntensity",new A.A(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.aj
c=n?a3:e.c
if(c==null)c=B.T
m=""+f
A.x(b1,"uPointPosition"+m,new A.A(B.q,new Float32Array(A.a1(A.e([d.a,d.b,d.c],r)))))
A.x(b1,"uPointColor"+m,new A.A(B.q,new Float32Array(A.a1(A.e([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.x(b1,"uPointIntensity"+m,new A.A(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.x(b1,"uPointRadius"+m,new A.A(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.f(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.aj
a=p?a3:e.c
if(a==null)a=B.aH
c=p?a3:e.d
if(c==null)c=B.T
n=""+f
A.x(b1,"uDirectSpotPosition"+n,new A.A(B.q,new Float32Array(A.a1(A.e([d.a,d.b,d.c],r)))))
A.x(b1,"uDirectSpotDirection"+n,new A.A(B.q,new Float32Array(A.a1(A.e([a.a,a.b,a.c],r)))))
A.x(b1,"uDirectSpotColor"+n,new A.A(B.q,new Float32Array(A.a1(A.e([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.x(b1,"uDirectSpotIntensity"+n,new A.A(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.x(b1,"uDirectSpotRange"+n,new A.A(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.x(b1,"uDirectSpotInnerCos"+n,new A.A(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.x(b1,"uDirectSpotOuterCos"+n,new A.A(B.e,Math.cos(m)))
p=p?0:1
A.x(b1,"uDirectSpotEnabled"+n,new A.A(B.e,p))}s=o?a3:q.f
A.x(b1,"uLightRange",new A.A(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.x(b1,"uLightInnerCos",new A.A(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.x(b1,"uLightOuterCos",new A.A(B.e,Math.cos(s)))
a0=a8.r
A.x(b1,"uAmbientColor",new A.A(B.q,new Float32Array(A.a1(A.e([a0.a,a0.b,a0.c],r)))))
A.x(b1,"uAmbientIntensity",new A.A(B.e,a8.w))
A.x(b1,"uRainWetness",new A.A(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.v)(b1),++a1)a2.hl(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.v)(a6),++a1)a2.hl(a5,a6[a1],r)},
hl(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.x(s,"uUseInstances",B.bK)
m.hm(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.hg(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bB(s,o.a)
s=o.b
r=o.c
if(s)a.e3(r,o.d,0)
else a.aI(r,0)}else if(b instanceof A.eE){n=b.a
m.hm(a,n.gD().c)
A.w3(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.hg(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bB(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.e4(r,o.d,q,0)
else a.e2(r,0,q)}else throw A.d(A.z("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).p(0),null))},
hg(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aG(o,0,p.a(s.e.$1(q.b)))
A.aG(o,3,p.a(s.f.$1(r)))
A.aG(o,4,p.a(s.r.$1(r)))
A.aG(o,5,p.a(s.w.$1(r)))
A.aG(o,6,p.a(s.x.$1(r)))
A.x(o,"uAlphaCutoff",new A.A(B.e,0))
A.x(o,"uOpaqueCoverage",new A.A(B.e,c===B.aU?0:1))
A.x(o,"uAffineWarpStrength",new A.A(B.e,0))
p=t.n
A.x(o,"uMaterialTint",new A.A(B.q,new Float32Array(A.a1(A.e([q.c,q.d,q.e],p)))))
A.x(o,"uEmissiveStrength",new A.A(B.e,0))
A.x(o,"uUvScaleOffset",new A.A(B.lU,new Float32Array(A.a1(A.e([q.ay,q.ch,0,0],p)))))
A.x(o,"uNormalStrength",new A.A(B.e,1))
A.x(o,"uRoughness",new A.A(B.e,q.z))
A.x(o,"uMetallic",new A.A(B.e,0))
A.x(o,"uOcclusionStrength",new A.A(B.e,1))
A.x(o,"uLightmapIntensity",new A.A(B.e,0))
A.x(o,"uReceivesShadow",new A.A(B.e,1))
A:{p=r
if(B.aU===c){switch(d.a){case 0:p=B.eO
break
case 1:p=B.eN
break}break A}if(B.S===c||B.eL===c){p=s.a.ai()
break A}}A.bo(o,q.dx?p.f6(!1):p)},
hm(a,b){var s=b.ad(),r=a.a
A.x(r,"uModel",new A.A(B.u,new Float32Array(A.a1(s.a))))
A.x(r,"uNormalMatrix",new A.A(B.u,new Float32Array(A.a1(s.eN().a))))},
$iac:1,
gD(){return this.a}}
A.kT.prototype={
gaa(){return"ssaoOcclusion"},
al(a,b){B.a.l(a.a,new A.az("ssaoOcclusion",B.cA,A.e([new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r="ssaoOcclusion",q=s.a.aA(new A.bk(r,s.b,s.c,B.w,B.jh,B.i2)),p=A.d8(s.d)
return A.e([new A.lV(new A.b8(r,A.e([new A.O(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ian:1}
A.lV.prototype={
an(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c6(m,a.ar("ssaoRaw").b)
A.bo(m,p.a.ai())
if(n<=0){A.dG(m,B.ab,1,1,1,1)
return}A.dG(m,B.ab,1,0,0,0)
s=p.e.$0()
A.cn(m,p.b.b)
A.aG(m,0,t._.a(p.d.$0()))
A.x(m,"uSceneDepth",B.x)
A.x(m,"uNear",new A.A(B.e,s.f))
A.x(m,"uFar",new A.A(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.f(r,0)
A.x(m,"uProjScaleX",new A.A(B.e,r[0]))
if(5>=q)return A.f(r,5)
A.x(m,"uProjScaleY",new A.A(B.e,r[5]))
A.x(m,"uRadius",new A.A(B.e,p.f))
A.x(m,"uStrength",new A.A(B.e,n))
A.bB(m,p.c)
o.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.kS.prototype={
gaa(){return"ssaoBlur"},
al(a,b){B.a.l(a.a,new A.az("ssaoBlur",B.cA,A.e([new A.O(this.y,B.i),new A.O(this.z,B.j)],t.C),!1))},
ak(a){var s=this,r="ssaoBlur",q=s.a.aA(new A.bk(r,s.b,s.c,B.w,B.j7,B.j1)),p=A.d8(s.d)
return A.e([new A.lU(new A.b8(r,A.e([new A.O(s.y,B.i),new A.O(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$ian:1}
A.lU.prototype={
an(a){var s,r,q=this,p=a.b,o=p.a
A.c6(o,a.ar("ssaoBlurred").b)
A.bo(o,q.a.ai())
if(a.c.e.c<=0){A.dG(o,B.ab,1,1,1,1)
return}A.dG(o,B.ab,1,0,0,0)
s=q.f.$0()
A.cn(o,q.b.b)
r=t._
A.aG(o,0,r.a(q.d.$0()))
A.x(o,"uSsaoRaw",B.x)
A.aG(o,1,r.a(q.e.$0()))
A.x(o,"uSceneDepth",B.ai)
A.x(o,"uTexelSize",new A.A(B.aG,new Float32Array(A.a1(A.e([1/q.r,1/q.w],t.n)))))
A.x(o,"uNear",new A.A(B.e,s.f))
A.x(o,"uFar",new A.A(B.e,s.r))
A.bB(o,q.c)
p.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.l6.prototype={
gaa(){return"vhs"},
al(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.az("vhs",B.L,A.e([new A.O(this.r,B.i),new A.O(s,B.J),new A.O(s,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.aA(new A.bk("vhs",s.b,s.c,B.w,B.ja,B.i8)),q=A.d8(s.d),p=s.r,o=s.w
return A.e([new A.m3(new A.b8("vhs",A.e([new A.O(p,B.i),new A.O(o,B.J),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$ian:1}
A.m3.prototype={
an(a){var s,r=this,q=a.ar(r.f.a),p=a.ar(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c6(m,p.b)
A.bo(m,r.a.ai())
A.cn(m,r.b.b)
A.aG(m,0,q.b)
A.x(m,"uScene",B.x)
A.aG(m,1,t._.a(r.d.$0()))
A.x(m,"uHistory",B.ai)
A.x(m,"uTime",new A.A(B.e,r.e.$0()))
A.x(m,"uChromaWeight",new A.A(B.e,n.at))
A.x(m,"uTrackingWeight",new A.A(B.e,l))
A.x(m,"uNoiseWeight",new A.A(B.e,n.ay))
A.x(m,"uHeadSwitchWeight",new A.A(B.e,n.ch))
A.x(m,"uDropoutWeight",new A.A(B.e,n.CW))
A.x(m,"uGhostWeight",new A.A(B.e,s))
A.bB(m,r.c)
o.aI(3,0)},
$iac:1,
gD(){return this.a}}
A.i2.prototype={}
A.lh.prototype={
gaa(){return"world"},
al(a,b){B.a.l(a.a,new A.az("worldOpaqueTransparent",B.cB,A.e([new A.O(this.e,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.aA(new A.bk("safeWorld",s.b,s.c,B.jm,B.w,B.i1)),q=s.e
return A.e([new A.m6(new A.b8("worldOpaqueTransparent",A.e([new A.O(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$ian:1}
A.m6.prototype={
an(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c6(j,a.ar(n.d).b)
A.bo(j,n.a.ai())
s=k.a
A.dG(j,B.c7,1,s.c,s.b,s.a)
A.cn(j,n.b.b)
A.x(j,"uViewProjection",new A.A(B.u,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a4
s=t.n
A.x(j,"uLightDir",new A.A(B.q,new Float32Array(A.a1(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.x(j,"uAmbientColor",new A.A(B.q,new Float32Array(A.a1(A.e([p.a,p.b,p.c],s)))))
A.x(j,"uAmbientIntensity",new A.A(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.v)(j),++o)n.fN(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.v)(l),++o)n.fN(m,l[o])},
fN(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eE){s=b.a
n.hi(a,s.gD().c)
A.w3(a,b,!0)
r=n.c.$1(s.gD().a)
A.bB(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.e4(p,r.d,o,0)
else a.e2(p,0,o)}else if(t.yz.b(b)){q=a.a
A.x(q,"uUseInstances",B.bK)
n.hi(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bB(q,r.a)
q=r.b
p=r.c
if(q)a.e3(p,r.d,0)
else a.aI(p,0)}else throw A.d(A.z("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).p(0),null))},
hi(a,b){var s=b.ad(),r=a.a
A.x(r,"uModel",new A.A(B.u,new Float32Array(A.a1(s.a))))
A.x(r,"uNormalMatrix",new A.A(B.u,new Float32Array(A.a1(s.eN().a))))},
$iac:1,
gD(){return this.a}}
A.nv.prototype={
cz(a){var s,r,q
a.C()
s=A.a2(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.bq
else q=r===0?B.bo:B.bp
return new A.eL(q,s)},
jR(a){var s,r=this.cz(a).a
A:{if(B.bq===r){s=B.kn
break A}if(B.bp===r){s=B.km
break A}s=B.aC
break A}return s}}
A.jX.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hz.prototype={
v(){return"GpuBufferKind."+this.b}}
A.jZ.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.k_.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jW.prototype={}
A.jY.prototype={}
A.eB.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hB.prototype={}
A.hA.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eR.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.i7.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d2.prototype={
v(){return"UniformType."+this.b}}
A.A.prototype={}
A.fp.prototype={
v(){return"ClearMask."+this.b}}
A.jH.prototype={
aI(a,b){var s=this.a
if(s.b!==B.h)A.k(A.m(u.k))
s.a.drawArrays(A.b(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bH(a,1)},
e2(a,b,c){var s=this.a
if(s.b!==B.h)A.k(A.m(u.k))
s.a.drawArraysInstanced(A.b(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bH(a,c)},
e3(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.k(A.m(u.k))
s=v.G
r=A.b(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.b(s.WebGL2RenderingContext.UNSIGNED_INT):A.b(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bH(a,1)},
e4(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.k(A.m(u.k))
s=v.G
r=A.b(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.b(s.WebGL2RenderingContext.UNSIGNED_INT):A.b(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.af(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bH(a,c)},
$iBK:1}
A.kE.prototype={
jl(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.oz.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
bv(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.lj(s.b)
r.b.bv()
r.c=null
r.e=!0},
fJ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.q(b,a),a1=A.e([],t.C1)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("I<1>")
s=new A.I(l,j.a(new A.oA()),k)
for(i=s,h=J.R(i.a),i=new A.T(h,i.b,i.$ti.i("T<1>")),g=this.a;i.m();){r=h.gn()
q=A.Do(g,this.lm(r,a3))
J.hj(a1,q)
J.bM(a0,r,q)}f=A.K(new A.I(l,j.a(new A.oB()),k),k.i("p.E"))
B.a.Z(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.v)(l),++e){o=l[e]
n=A.As(J.Be(o,11))
j=J.aI(a0,"sceneColor")
j.toString
J.bM(a0,o,j)}b=A.b6(a0,b,a)
return b}catch(d){for(b=a1,l=A.G(b).i("i4<1>"),b=new A.i4(b,l),b=new A.aU(b,b.gt(0),l.i("aU<a7.E>")),k=this.a,j=t.V,l=l.i("a7.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.wI(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
lm(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.hB(512,512,1,B.aW,!0)
if(a==="sceneDepth")return new A.hB(o,n,1,B.aW,!0)
s=B.b.U(a,"ssao")||B.b.U(a,"bloomBlur")||B.b.U(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.U(a,"sceneColor#")
return new A.hB(r,q,1,p?B.cy:B.hi,p)},
lj(a){var s,r,q,p,o,n=A.kj(t.mf.a(a).gaE(),t._)
for(n=A.ix(n,n.r,A.r(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wI(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.oA.prototype={
$1(a){return!B.b.U(A.u(a),"sceneColor#")},
$S:3}
A.oB.prototype={
$1(a){return B.b.U(A.u(a),"sceneColor#")},
$S:3}
A.fT.prototype={
v(){return"_SlotState."+this.b}}
A.eg.prototype={
sb4(a){this.c=this.$ti.i("1?").a(a)}}
A.cZ.prototype={
aG(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.eg(B.aK,n.i("eg<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.mW
p.sb4(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
cb(a){return this.aG(a,null)},
a2(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.e_(B.cF,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.e_(B.cG,a))
s=q.b
if(s===B.aL||s===B.aK)throw A.d(A.e_(B.aA,a))},
cc(a){var s,r,q=this.$ti
q.c.a(a)
this.a2(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
jC(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a2(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].sb4(b)},
b9(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.e_(B.cF,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.e_(B.cG,a))
r=q.b
if(r===B.aL||r===B.aK)throw A.d(A.e_(B.hy,a))
q.b=B.aL
q.sb4(null)
B.a.l(p.c,s);++p.e},
bP(){return new A.cp(this.ol(),this.$ti.i("cp<+(1,2)>"))},
ol(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bP(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aL||j===B.aK){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aW(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jr.prototype={
v(){return"BlendEquation."+this.b}}
A.et.prototype={
v(){return"BlendFactor."+this.b}}
A.jD.prototype={
v(){return"CullFace."+this.b}}
A.jF.prototype={
v(){return"DepthFunc."+this.b}}
A.fu.prototype={
f6(a){var s=this
return A.y_(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b9.prototype={
v(){return"StateField."+this.b}}
A.tc.prototype={
nC(a){var s,r=this.a
if(r==null)return A.hL(B.iV,t.qL)
s=A.a2(t.qL)
if(r.a!==a.a)s.l(0,B.bC)
if(r.b!==a.b)s.l(0,B.bD)
if(r.c!==a.c)s.l(0,B.bE)
if(r.d!==a.d)s.l(0,B.bF)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bG)
if(r.r!==a.r)s.l(0,B.bH)
if(r.w!==a.w)s.l(0,B.bI)
if(r.x!==a.x)s.l(0,B.bJ)
return s}}
A.dI.prototype={$idt:1}
A.iU.prototype={}
A.iT.prototype={}
A.m5.prototype={}
A.lf.prototype={
kO(a){var s=this,r=A.c(s.a.canvas)
s.c=A.Z(new A.ta(s))
s.d=A.Z(new A.tb(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
ju(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c1(A.b(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c1(A.b(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c1(A.b(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c1(A.b(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c1(A.b(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.h5(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.de(e.getParameter(A.b(k.WebGL2RenderingContext.RENDERER)))
m=A.de(e.getParameter(A.b(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qo("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c1(a){var s=A.de(this.a.getParameter(a))
return typeof s=="number"?B.c.aq(s):0},
h5(a){var s=A.de(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iC6:1}
A.ta.prototype={
$1(a){A.c(a).preventDefault()
this.a.b=B.ad},
$S:1}
A.tb.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.u_.prototype={
mO(){var s,r=this
if(r.b!==B.h)A.k(A.m(u.k))
s=r.w?A.i(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dI(new A.m5(s))},
hu(a){var s=a.a
if(!(s instanceof A.m5))throw A.d(A.aq(a,"query","is not a GPU timer query"))
return s}}
A.m4.prototype={}
A.jJ.prototype={
B(){var s=this
return A.N(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jo.prototype={
gos(){var s=this.CW
return new A.ay(s,A.r(s).i("ay<2>")).bz(0,0,new A.n6(),t.i)},
kv(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.i(i.connect(A.c(s.destination)))
r=j.d
r===$&&A.h()
A.c(r.gain).value=0.25
q=j.e
q===$&&A.h()
A.c(q.gain).value=0.12
p=j.f
p===$&&A.h()
A.c(p.gain).value=0.4
o=j.r
o===$&&A.h()
A.c(o.gain).value=0.2
n=j.w
n===$&&A.h()
A.c(n.gain).value=0.4
m=j.x
m===$&&A.h()
A.c(m.gain).value=0.1
l=j.y
l===$&&A.h()
A.c(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.i(r[k].connect(i))
r=j.z
r===$&&A.h()
A.c(r.gain).value=1
q=j.Q
q===$&&A.h()
A.c(q.gain).value=0.35
A.i(o.connect(r))
A.i(n.connect(r))
A.i(p.connect(r))
p=j.as
p===$&&A.h()
A.i(r.connect(p))
A.i(p.connect(q))
A.i(q.connect(i))
q=A.c(s.createBiquadFilter())
q.type="highpass"
A.c(q.frequency).value=80
j.k2!==$&&A.L()
j.k2=q
p=A.c(s.createBiquadFilter())
p.type="lowpass"
A.c(p.frequency).value=11e3
j.k3!==$&&A.L()
j.k3=p
A.i(q.connect(p))
A.i(p.connect(A.c(s.destination)))
i.disconnect(A.c(s.destination))
A.i(i.connect(q))
p.disconnect(A.c(s.destination))
q=A.c(s.createChannelSplitter(2))
j.k4!==$&&A.L()
j.k4=q
i=A.c(s.createChannelMerger(2))
j.ok!==$&&A.L()
j.ok=i
r=A.c(s.createGain())
A.c(r.gain).value=0.5
j.p1!==$&&A.L()
j.p1=r
A.i(p.connect(q))
A.i(i.connect(A.c(s.destination)))
j.fw()},
fw(){var s,r=this,q=r.k4
q===$&&A.h()
q.disconnect()
s=r.p1
s===$&&A.h()
s.disconnect()
if(r.p2){A.i(q.connect(s,0))
A.i(q.connect(s,1))
q=r.ok
q===$&&A.h()
A.i(s.connect(q,0,0))
A.i(s.connect(q,0,1))}else{s=r.ok
s===$&&A.h()
A.i(q.connect(s,0,0))
A.i(q.connect(s,1,1))}},
ct(){var s=this.a
if(A.u(s.state)==="suspended")A.c(s.resume())},
hn(a){var s,r,q=this
if(B.b.U(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.jf.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.h()
break A}if("bed"===r){s=q.e
s===$&&A.h()
break A}if("mid"===r){s=q.r
s===$&&A.h()
break A}if("air"===r){s=q.x
s===$&&A.h()
break A}s=q.w
s===$&&A.h()
break A}return s},
lz(){var s,r,q,p,o,n,m,l=this.a,k=A.am(l.sampleRate),j=B.c.aN(k*2),i=A.c(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aL()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
eP(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.c(s.createBufferSource())
r.buffer=o
A.c(r.playbackRate).value=0.94+p.ax.aL()*0.12
q=A.c(s.createGain())
A.c(q.gain).value=b
A.i(r.connect(q))
A.i(q.connect(p.hn(a)))
r.onended=A.Z(new A.n8(r,q))
r.start()},
js(a){return this.eP(a,1)},
jt(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.c(s.createBufferSource())
r.buffer=i
A.c(r.playbackRate).value=d*(0.94+j.ax.aL()*0.12)
q=A.c(s.createGain())
A.c(q.gain).value=c
p=A.c(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.c(p.positionX).value=b.a
A.c(p.positionY).value=b.b
A.c(p.positionZ).value=b.c
o=A.c(s.createBiquadFilter())
o.type="lowpass"
A.c(o.frequency).value=2e4
n=A.c(s.createGain())
A.c(n.gain).value=1
m=h==null?0:h
if(g!=null&&f!=null){A.c(o.frequency).value=f
A.c(n.gain).value=Math.pow(10,g/20)}else{s=j.ay!=null
if(s){s=j.ay
s.toString
l=j.fI(j.b.jr(e,s))
k=l.c
A.c(o.frequency).value=l.b
A.c(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fV(r,q,n,o,p,e,B.c.E(m,0,1)))
r.onended=A.Z(new A.n7(j,o))
A.i(r.connect(q))
A.i(q.connect(n))
A.i(n.connect(o))
A.i(o.connect(p))
A.i(p.connect(j.hn(a)))
r.start()},
oV(a,b,c,d){return this.jt(a,b,c,1,d,null,null,null)},
fI(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aj(r,q,p)},
fn(a){var s,r,q,p,o=this
if(o.cx)return
s=o.at.h(0,a)
if(s==null)return
o.cx=!0
r=o.a
q=A.c(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.c(r.createGain())
A.c(p.gain).value=0.6
A.i(q.connect(p))
r=o.e
r===$&&A.h()
A.i(p.connect(r))
q.onended=A.Z(new A.n9(o,q,p))
q.start()
o.cy=q},
dh(a){if(this.p2===a)return
this.p2=a
this.fw()},
k5(a){var s,r,q=this
q.dh(a.b===B.bU)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aM?1:0.55
r=q.c
r===$&&A.h()
r=A.c(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.c(s.gain).value=0.35*q.p4},
bm(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.E(c==null?q.fr:c,0,1)
q.fx=B.c.E(f==null?q.fx:f,0,1)
q.fy=B.c.E(b==null?q.fy:b,0,1)
q.go=B.c.E(a==null?q.go:a,0,1)
q.id=B.c.E(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.h()
A.c(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.h()
A.c(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.h()
A.c(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.h()
A.c(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.h()
A.c(s.gain).value=0.4*q.go
s=q.e
s===$&&A.h()
A.c(s.gain).value=0.12*q.id
s=q.y
s===$&&A.h()
A.c(s.gain).value=q.fx
s=q.c
s===$&&A.h()
s=A.c(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
ff(a){var s=null
return this.bm(s,s,s,s,a,s)},
jZ(a){var s=null
return this.bm(s,s,a,s,s,s)},
k0(a){var s=null
return this.bm(s,s,s,s,s,a)},
jY(a){var s=null
return this.bm(s,a,s,s,s,s)},
jX(a){var s=null
return this.bm(a,s,s,s,s,s)},
k_(a){var s=null
return this.bm(s,s,s,a,s,s)},
jW(a){if(this.ay===a)return
this.ay=a
this.bJ()},
bJ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cu(p,g)
m=n==null?i.fI(h.jr(p,g)):new A.aj(n.c,n.d,n.e)
l=A.am(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.c(A.c(o.frequency).cancelScheduledValues(l))
A.c(A.c(o.frequency).setValueAtTime(A.am(A.c(o.frequency).value),l))
j=l+0.08
A.c(A.c(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.c(A.c(o.gain).cancelScheduledValues(l))
A.c(A.c(o.gain).setValueAtTime(A.am(A.c(o.gain).value),l))
A.c(A.c(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.E(m.c,0,1)}}}
A.n6.prototype={
$2(a,b){return Math.max(A.bD(a),t.jS.a(b).r)},
$S:60}
A.n5.prototype={
$1(a){return this.jJ(t.q.a(a))},
jJ(a){var s=0,r=A.bH(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bK(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ap(A.b2(A.c(A.c(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ap(A.b2(A.c(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ap(A.b2(A.c(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ak(h)
A.c(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bF(null,r)
case 1:return A.bE(p.at(-1),r)}})
return A.bG($async$$1,r)},
$S:61}
A.n8.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.n7.prototype={
$1(a){var s=this.a.CW.a3(0,this.b)
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
A.fV.prototype={}
A.jp.prototype={
v(){return"AudioCategory."+this.b}}
A.mW.prototype={
kx(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.h_)
if(!B.a.a9(A.e([d.a,d.b,d.c],t.n),new A.mX()))throw A.d(B.fl)}}
A.mX.prototype={
$1(a){return isFinite(A.bD(a))},
$S:5}
A.mE.prototype={
ku(a,b){if(this.a.length===0)throw A.d(B.fb)
if(!B.a.a9(A.e([a.a,a.b,a.c],t.n),new A.mF()))throw A.d(B.fq)}}
A.mF.prototype={
$1(a){return isFinite(A.bD(a))},
$S:5}
A.hk.prototype={
C(){var s=t.n
if(B.a.N(A.e([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mG()))throw A.d(B.fG)
s=B.a.N(A.e([0,0.55,1],s),new A.mH())
if(s)throw A.d(B.fR)},
cu(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.aj(-1.5,2e4,0)
if(a.ay)return new A.aj(-28,320,1)
return new A.aj(-12,1100,0.55)},
pA(a){return this.cu(a,null)}}
A.mG.prototype={
$1(a){return!isFinite(A.bD(a))},
$S:5}
A.mH.prototype={
$1(a){A.bD(a)
return a<0||a>1},
$S:5}
A.mS.prototype={
kw(a){var s=A.r(a)
if(new A.ad(a,s.i("ad<1>")).N(0,new A.mU())||new A.ay(a,s.i("ay<2>")).N(0,new A.mV()))throw A.d(B.fY)}}
A.mU.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.mV.prototype={
$1(a){var s
t.a.a(a)
s=J.aE(a)
return s.gO(a)||s.N(a,new A.mT())},
$S:62}
A.mT.prototype={
$1(a){return A.u(a).length===0},
$S:3}
A.wh.prototype={}
A.n3.prototype={}
A.mY.prototype={
ky(a,b,c){var s
for(s=this.b.gaE(),s=s.gu(s);s.m();)s.gn().C()},
jA(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.d(A.m("audio listener room missing: "+a0))
r=this.mf(a,a0)
s=t.s
q=A.e([],s)
p=A.e([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.v)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c1
e=f.cu(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
B.a.l(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.l(p,"unreachable")
l=-48
k=240
j=1}s=A.e([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.v)(o),++i)s.push(o[i].a)
o=B.c.E(l,-60,0)
m=B.d.E(k,120,2e4)
g=B.c.E(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.a5(p,"; ")
b=t.N
s=A.ai(s,b)
b=A.ai(q,b)
if(!isFinite(g)||g<0||g>1)A.k(B.fQ)
return new A.n3(s,b,o,m,g,n,c)},
cu(a,b){return this.jA(a,b,B.bi)},
mf(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.mG
s=t.N
r=A.N([a0,0],s,t.i)
q=A.N([a0,B.V],s,t.Es)
p=A.aL([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.V(k,new A.mZ(r))
j=B.a.gR(k)
p.a3(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.im(s,!0)}i=o.aC(j)
h=A.K(i,i.$ti.i("p.E"))
B.a.V(h,new A.n_())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.v)(h),++g){f=h[g]
e=f.bS(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c1:d).pA(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.K(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.mF}}
A.mZ.prototype={
$2(a,b){var s,r,q
A.u(a)
A.u(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.G(r,s)
return q===0?B.b.G(a,b):q},
$S:63}
A.n_.prototype={
$2(a,b){var s=t.T
return B.b.G(s.a(a).a,s.a(b).a)},
$S:64}
A.im.prototype={}
A.fm.prototype={}
A.nt.prototype={
eL(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.a(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.B6().bs(q).gac()
p.d=q
p.c=p.b.bs(q).gac()
p.a=a}}
A.o9.prototype={}
A.kX.prototype={}
A.ox.prototype={
lq(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.de(s.getParameter(34047))
if(typeof p=="number")o.c=p},
d4(a,b,c,d,e,f){return this.om(a,b,c,d,e,f)},
om(a,b,c,a0,a1,a2){var s=0,r=A.bH(t.uh),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$d4=A.bK(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.c(A.c(j.document).createElement("img"))
m.src=a
s=7
return A.ap(A.b2(A.c(m.decode()),t.X),$async$d4)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.b(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.b(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.b(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(i,"texImage2D",[A.b(j.WebGL2RenderingContext.TEXTURE_2D),0,A.b(j.WebGL2RenderingContext.RGBA8),A.b(j.WebGL2RenderingContext.RGBA),A.b(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
k=a2?A.b(j.WebGL2RenderingContext.REPEAT):A.b(j.WebGL2RenderingContext.CLAMP_TO_EDGE)
i.texParameteri(A.b(j.WebGL2RenderingContext.TEXTURE_2D),A.b(j.WebGL2RenderingContext.TEXTURE_WRAP_S),k)
i.texParameteri(A.b(j.WebGL2RenderingContext.TEXTURE_2D),A.b(j.WebGL2RenderingContext.TEXTURE_WRAP_T),k)
h=A.b(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.b(j.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
f=a0?A.b(j.WebGL2RenderingContext.LINEAR):A.b(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(a1)i.generateMipmap(A.b(j.WebGL2RenderingContext.TEXTURE_2D))
h=A.b(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.b(j.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
if(a1)f=A.b(j.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
else f=a0?A.b(j.WebGL2RenderingContext.LINEAR):A.b(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(c){n.lq()
h=n.c
if(h>1)i.texParameterf(A.b(j.WebGL2RenderingContext.TEXTURE_2D),34046,h)}q=l
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bF(q,r)
case 2:return A.bE(o.at(-1),r)}})
return A.bG($async$d4,r)},
d5(a,b,c){var s=!1
return this.on(t.a.a(a),b,!1)},
on(b0,b1,b2){var s=0,r=A.bH(t.uh),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d5=A.bK(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.sL)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.c(A.c(a0.document).createElement("img"))
j.src=k
s=10
return A.ap(A.b2(A.c(j.decode()),a1),$async$d5)
case 10:J.hj(l,j)
case 8:b0.length===a||(0,A.v)(b0),++a2
s=7
break
case 9:if(J.cb(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.b(J.aI(l,0).width)
h=A.b(J.aI(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.we(l,new A.oy(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.cb(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.au()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.je(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.au()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a6()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a6()
n=[1]
s=5
break A}e=B.c.W(a+1,2)}}a=m.a
a7=A.i(a.createTexture())
if(a7==null){a=A.m("could not create texture array")
throw A.d(a)}a.activeTexture(A.b(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.b(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(a,"texStorage3D",[A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.b(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.b(a.getError())
if(!J.a3(d,A.b(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.wf(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.cb(l)
if(typeof a1!=="number"){q=a1.df()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.b(a0.WebGL2RenderingContext.RGBA),A.b(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aI(l,c)])
d=A.b(a.getError())
if(!J.a3(d,A.b(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.wf(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a6()
n=[1]
s=5
break A}c=a1+1}a.texParameteri(A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.b(a0.WebGL2RenderingContext.TEXTURE_WRAP_S),A.b(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a.texParameteri(A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.b(a0.WebGL2RenderingContext.TEXTURE_WRAP_T),A.b(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a1=A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.b(a0.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
a4=a0.WebGL2RenderingContext
a4=A.b(a4.NEAREST)
a.texParameteri(a1,a3,a4)
if(a6){a.generateMipmap(A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY))
d=A.b(a.getError())
if(!J.a3(d,A.b(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.wf(d,16)+")")
throw A.d(a)}a.texParameteri(A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.b(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.b(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
a0=a0.WebGL2RenderingContext
a0=A.b(a0.NEAREST)
a.texParameteri(a1,a3,a0)}a8=!0
a=a7
q=a
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a9=o.pop()
b=A.ak(a9)
A.c(v.G.console).error("texture array load failed: "+A.w(b))
q=null
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
if(!a8&&a7!=null){a=m.a
a.bindTexture(A.b(v.G.WebGL2RenderingContext.TEXTURE_2D_ARRAY),null)
a.deleteTexture(a7)}s=n.pop()
break
case 6:case 1:return A.bF(q,r)
case 2:return A.bE(o.at(-1),r)}})
return A.bG($async$d5,r)},
ho(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.de(s.getShaderParameter(r,A.b(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.fw("shader compile failed: "+A.w(A.zr(s,"getShaderInfoLog",r,t.D))+"\n"+b))
return r},
b3(a,b){var s=v.G,r=this.ho(A.b(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.ho(A.b(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.de(p.getProgramParameter(o,A.b(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.fw("program link failed: "+A.w(A.zr(p,"getProgramInfoLog",o,t.D))))
return o},
gjj(){var s=A.de(this.a.getParameter(A.b(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.c.aq(s):0},
f3(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.b(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.b(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.b(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.b(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hZ(0,c,B.d.kt(b.byteLength,p))*p
if(B.d.M(o,4)!==0)A.k(A.z("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.B8(B.r.gmR(b),b.byteOffset+0*p,B.d.W(o,4)))}},
dR(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.b(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.b(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.b(n.WebGL2RenderingContext.RGBA8)
q=A.b(n.WebGL2RenderingContext.RGBA)
p=A.b(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.af(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.b(n.WebGL2RenderingContext.TEXTURE_2D),A.b(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.b(n.WebGL2RenderingContext.TEXTURE_2D),A.b(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.b(n.WebGL2RenderingContext.TEXTURE_2D),A.b(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.b(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.b(n.WebGL2RenderingContext.TEXTURE_2D),A.b(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.b(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
dN(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.b(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.af(r,"renderbufferStorageMultisample",[A.b(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.b(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.b(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.b(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
hq(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.dR(q,a,b)
s=v.G
A.af(r,"framebufferTexture2D",[A.b(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.b(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fL(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.b(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.af(q,"texStorage2D",[A.b(s.WebGL2RenderingContext.TEXTURE_2D),1,A.b(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.b(s.WebGL2RenderingContext.TEXTURE_2D),A.b(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.b(s.WebGL2RenderingContext.TEXTURE_2D),A.b(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.b(s.WebGL2RenderingContext.TEXTURE_2D),A.b(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.b(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.b(s.WebGL2RenderingContext.TEXTURE_2D),A.b(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.b(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.af(q,"framebufferTexture2D",[A.b(s.WebGL2RenderingContext.FRAMEBUFFER),A.b(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.b(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
eM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.b(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.dN(a,b,e,A.b(s.WebGL2RenderingContext.RGBA8),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.dN(a,b,e,A.b(s.WebGL2RenderingContext.RGBA8),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.hq(a,b,A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.hq(a,b,A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.dN(a,b,e,A.b(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.b(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fL(a,b)
if(d)h.drawBuffers(A.e([A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.b(h.checkFramebufferStatus(A.b(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.b(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.b(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.fw("framebuffer incomplete"))
return new A.kX(g,n,o,m,q,p,l,e,a,b)},
ji(a,b,c,d){return this.eM(a,b,c,d,0)},
oq(a,b,c,d){return this.eM(a,b,!0,c,d)},
bB(a,b,c){return this.eM(a,b,c,!1,0)},
dQ(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.b(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.af(s,"renderbufferStorageMultisample",[A.b(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.b(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
bb(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.b(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.dR(q,b,c)
if(p!=null)n.dR(p,b,c)
n.dQ(a,a.e,A.b(r.WebGL2RenderingContext.RGBA8),b,c)
n.dQ(a,a.f,A.b(r.WebGL2RenderingContext.RGBA8),b,c)
n.dQ(a,a.r,A.b(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.fL(b,c)}s.bindFramebuffer(A.b(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
pe(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.b(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.b(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.b(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.b(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.b(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.b(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.b(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.b(o.WebGL2RenderingContext.NONE),A.b(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.b(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.b(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.b(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.b(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.b(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.b(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.b(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
n3(a,b,c,d){var s,r,q=v.G,p=(A.b(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.b(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.e([A.b(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.e([A.b(q.WebGL2RenderingContext.NONE),A.b(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.b(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.e([A.b(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
bg(a){var s=this.a,r=A.b(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.b(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.b(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.oy.prototype={
$1(a){A.c(a)
return A.b(a.width)!==this.a||A.b(a.height)!==this.b},
$S:65}
A.k5.prototype={
f2(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].jB(a)}}
A.k7.prototype={
d7(a){if(this.at)return
A.pj(a,"requestPointerLock",t.X)},
fd(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.ci(r,r.r,r.e,A.r(r).i("ci<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a2(q)
for(m=J.R(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.pa(p,n)}this.bd()},
dm(a){var s,r,q,p,o,n,m=this
if(m.ch.dm(a))for(s=m.CW.aF("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
oW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.c(f.a.navigator).getGamepads())
c=J.R(t.ik.b(c)?c:new A.aT(c,A.G(c).i("aT<1,a6?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.u(r.mapping)!=="standard")break A
c=A.u(r.id)
q=A.u(r.mapping)
p=t.n
o=A.e([],p)
n=d.a(r.axes)
n=J.R(t.dd.b(n)?n:new A.aT(n,A.G(n).i("aT<1,y>")))
while(n.m())o.push(n.gn())
p=A.e([],p)
d=d.a(r.buttons)
d=J.R(t.nx.b(d)?d:new A.aT(d,A.G(d).i("aT<1,a6>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.am(r.value))}s=new A.kU(!0,c,q,o,p)
break}}d=s==null
m=A.Ds(d?B.lF:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aF(e),q.gav(q))
q=f.r
q.lv(A.r(q).i("n(1)").a(new A.pc(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.n:g,h)){if(i.eJ())n.l(0,h)}else n.l(0,h)}}f.e=A.hL(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aF(e),l.gav(l))){d=r.a(f.c)
d=!B.a.N(c.aF(e),d.gav(d))}}if(d)i.eK()},
lP(a){var s=this
A.c(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.u(a.code)))if(B.a.q(s.CW.aF("interact"),A.u(a.code))){if(s.ch.eJ())s.d.l(0,A.u(a.code))}else s.d.l(0,A.u(a.code))},
lR(a){var s,r,q="interact"
A.c(a)
s=this.c
s.a3(0,A.u(a.code))
r=this.CW
if(B.a.q(r.aF(q),A.u(a.code))){t.Q.a(s)
s=!B.a.N(r.aF(q),s.gav(s))}else s=!1
if(s)this.ch.eK()},
lV(a){var s,r=this
A.c(a)
if(!r.ay)return
s="Mouse"+A.b(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aF("interact"),s)){if(r.ch.eJ())r.d.l(0,s)}else r.d.l(0,s)},
lZ(a){var s,r="interact",q="Mouse"+A.b(A.c(a).button),p=this.c
p.a3(0,q)
s=this.CW
if(B.a.q(s.aF(r),q)){t.Q.a(p)
p=!B.a.N(s.aF(r),p.gav(p))}else p=!1
if(p)this.ch.eK()},
m0(a){var s
A.c(a)
if(!this.ay)return
s=A.am(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
lX(a){var s=this
A.c(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.h1(a,"movementX")
s.as=s.as+s.h1(a,"movementY")},
lT(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
h1(a,b){var s=A.zo(a[b])
if(s==null)s=null
return s==null?0:s},
cJ(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.kj(n.c,t.N)
for(r=n.e,r=A.ix(r,r.r,A.r(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.N(n.CW.aF(a),s.gav(s))},
bd(){var s=this
s.c.H(0)
s.d.H(0)
s.f.H(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.eY()}}
A.pc.prototype={
$1(a){return!this.a.q(0,A.u(a))},
$S:3}
A.pb.prototype={
aF(a){var s=this.a.h(0,a)
return s==null?B.n:s},
pa(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.T(a))return
r=t.N
q=A.a2(r)
for(p=A.ix(b,b.r,A.r(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ai(q,r))},
bh(a,b){var s,r,q
t.Q.a(b)
for(s=this.aF(a),r=s.length,q=0;q<r;++q)if(b.a3(0,s[q]))return!0
return!1}}
A.pf.prototype={
eJ(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
eK(){this.c=this.b=!1
this.d=0},
dm(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.E(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eY(){this.c=this.b=!1
this.d=0}}
A.nP.prototype={
dS(a,b){var s,r,q,p,o,n,m,l=this
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
A.pD.prototype={
kj(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dS(b,c)},
mF(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.a(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.M(s,6.283185307179586)
r=Math.sin(s)
return new A.a(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.kl.prototype={}
A.hO.prototype={
gfW(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gI(B.d.ae(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.ae(s.c,4)))>>>0
r=((r<<5>>>0)+r^s.d)>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.ae(0.5,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.ae(0,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.ae(1,4)))>>>0
return((r<<5>>>0)+r^B.b.gI(B.d.ae(1,4)))&2147483647},
a1(a,b){var s,r=this
if(b==null)return!1
if(r!==b){s=!1
if(b instanceof A.hO)if(A.mu(r)===A.mu(b))if(r.a===b.a)if(r.b===b.b)if(r.c===b.c)s=r.d===b.d}else s=!0
return s},
gI(a){return this.gfW()},
B(){var s=this
return A.N(["atlasLayer",s.a,"emissiveStrength",s.b,"uvScale",s.c,"flags",s.d,"roughness",0.5,"metallic",0,"aoStrength",1,"normalScale",1],t.N,t.K)}}
A.pJ.prototype={
kG(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfW(),q)}}
A.d1.prototype={
eT(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.r.di(s,0,l,k)
m.a=s}r=b.aj(0,a).bs(d.aj(0,a)).gac()
q=(B.d.c4(e,16)&255)/255
p=(B.d.c4(e,8)&255)/255
o=(e&255)/255
n=f?0.6000000000000001:0
l=A.ia(m.a,m.b,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=0+g
l=A.ia(m.a,l,b,r,q,p,o,n,1,k,0,0)
m.b=l
j=0+h
l=A.ia(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=l
l=A.ia(m.a,l,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=A.ia(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=k
m.b=A.ia(m.a,k,d,r,q,p,o,n,1,0,j,0)},
S(a,b,c,d,e){return this.eT(a,b,c,d,e,!1,1,1)},
eS(a,b,c,d,e,f,g){return this.eT(a,b,c,d,e,!1,f,g)},
b8(a,b,c,d,e,f){return this.eT(a,b,c,d,e,f,1,1)}}
A.qy.prototype={
lC(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.b3(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.L()
m.w=r
q=s.b3(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.L()
m.x=q
p=m.c
o=A.i(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.L()
m.y=o
o=A.i(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.L()
m.z=o
o=A.i(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.L()
m.Q=o
r=A.i(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.L()
m.as=r
r=A.i(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.L()
m.at=r
q=A.i(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.L()
m.ax=q
m.d=s.bB(m.ay,m.ch,!1)
m.e=s.bB(m.ay,m.ch,!1)
m.f=s.bB(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.L()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
lD(){var s
try{this.r=this.b.bB(384,216,!1)}catch(s){this.r=null}},
p9(a,b){var s,r,q,p=this,o=p.d,n=p.e,m=p.f
if(o==null||n==null||m==null||a.d==null)return null
s=p.c
r=p.w
r===$&&A.h()
s.useProgram(r)
s.activeTexture(33984)
r=a.d
r.toString
s.bindTexture(3553,r)
r=p.y
r===$&&A.h()
s.uniform1i(r,0)
r=p.z
r===$&&A.h()
s.uniform2f(r,o.x,o.y)
r=p.Q
r===$&&A.h()
s.uniform1f(r,b)
r=p.as
r===$&&A.h()
s.uniform1f(r,0.0025)
r=p.b
r.bg(o)
q=p.CW
q===$&&A.h()
s.bindVertexArray(q)
s.drawArrays(4,0,3)
q=p.x
q===$&&A.h()
s.useProgram(q)
s.activeTexture(33984)
q=p.at
q===$&&A.h()
s.uniform1i(q,0)
r.bg(m)
s.bindTexture(3553,o.b)
q=p.ax
q===$&&A.h()
s.uniform2f(q,1/o.x,0)
s.drawArrays(4,0,3)
r.bg(n)
s.bindTexture(3553,m.b)
s.uniform2f(q,0,1/o.y)
s.drawArrays(4,0,3)
return n.b}}
A.qH.prototype={
dA(a,b,c){var s,r,q
try{r=this.a.b3(b,c)
return r}catch(q){s=A.ak(q)
r=A.fw(a+": "+A.w(s))
throw A.d(r)}}}
A.qA.prototype={}
A.it.prototype={}
A.lW.prototype={}
A.lJ.prototype={}
A.lH.prototype={}
A.qB.prototype={
kH(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([A.wt(0,0,1,0),A.wt(1,0,1,0),A.wt(2,0,1,0)],t.td),e=t.S
e=new A.pJ(f,A.q(e,e))
e.kG(f)
h.e7=e
h.iS=1.9
h.ew=h.by/h.bx
r=J.kb(6,t.dr)
for(q=0;q<6;++q)r[q]=new A.it()
t.lm.a(r)
f=h.b6
e=f.b3("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=smoothstep(uPointLightRadius[i],0.0,distanceToLight);\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uFogDensity,uFogHeightFalloff,uFogGroundHeight;\nuniform float uRainIntensity,uSurfaceWetness,uWindowWetness;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float currentDepth=projCoords.z;\n  float bias=max(uShadowBias.x, uShadowBias.y*abs(dFdy(currentDepth)));\n  vec2 texelSize=vec2(1.0/512.0);\n  float shadowSum=0.0;\n  for(int x=-1;x<=1;x++){\n    for(int y=-1;y<=1;y++){\n      float pcfDepth=texture(shadowTex,projCoords.xy+vec2(x,y)*texelSize).r;\n      shadowSum+=(currentDepth-bias>pcfDepth)?0.15:1.0;\n    }\n  }\n  return shadowSum/9.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n\n  // Surface wetness PBR modification\n  if (uSurfaceWetness > 0.001) {\n    c *= mix(1.0, 0.65, uSurfaceWetness * 0.85);\n  }\n\n  // Calculate exponential height fog if density > 0, otherwise fallback to linear range\n  float fog = 0.0;\n  if (uFogDensity > 0.0001) {\n    float heightDecay = exp(-uFogHeightFalloff * max(vWorldPos.y - uFogGroundHeight, 0.0));\n    fog = clamp(1.0 - exp(-uFogDensity * vDepth * heightDecay), 0.0, 1.0);\n  } else {\n    fog = smoothstep(uFogStart, uFogEnd, vDepth);\n  }\n\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec2 glassUv = uv.xy;\n      if (uWindowWetness > 0.05 && uNoiseOn > 0.0) {\n        vec2 dropUv = uv.xy * 6.0 + vec2(0.0, -uv.y * 0.3);\n        glassUv += (texture(uNoise, dropUv).rg - 0.5) * 0.03 * uWindowWetness;\n      }\n      vec4 g=texture(uGlass,glassUv);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog *= clamp(uGlassFog, 0.1, 1.0);\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.b3(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.b3(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.b3(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.b3(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.aw!==$&&A.L()
h.aw=new A.qH(f,e,p,o,n,m)
h.b=t.w7.a(new A.qC(h))
h.hd()
h.hc()
o=h.aU
p=A.i(o.getUniformLocation(m,"uTex"))
h.ig!==$&&A.L()
h.ig=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.ih!==$&&A.L()
h.ih=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.hV!==$&&A.L()
h.hV=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.hU!==$&&A.L()
h.hU=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.hW!==$&&A.L()
h.hW=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.hX!==$&&A.L()
h.hX=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.hY!==$&&A.L()
h.hY=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.hZ!==$&&A.L()
h.hZ=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.i_!==$&&A.L()
h.i_=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.i0!==$&&A.L()
h.i0=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.i1!==$&&A.L()
h.i1=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.i2!==$&&A.L()
h.i2=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.i3!==$&&A.L()
h.i3=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.i4!==$&&A.L()
h.i4=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.i5!==$&&A.L()
h.i5=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.i6!==$&&A.L()
h.i6=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.i7!==$&&A.L()
h.i7=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.i8!==$&&A.L()
h.i8=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.i9!==$&&A.L()
h.i9=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.ia!==$&&A.L()
h.ia=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.ib!==$&&A.L()
h.ib=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.ic!==$&&A.L()
h.ic=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.ie!==$&&A.L()
h.ie=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.ii!==$&&A.L()
h.ii=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.ij!==$&&A.L()
h.ij=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.ey!==$&&A.L()
h.ey=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.ez!==$&&A.L()
h.ez=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.eA!==$&&A.L()
h.eA=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.eB!==$&&A.L()
h.eB=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.eC!==$&&A.L()
h.eC=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.eD!==$&&A.L()
h.eD=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.eE!==$&&A.L()
h.eE=n
n=A.Q(A.c(A.c(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.cf!==$&&A.L()
h.cf=n
h.sjg(16777215)
n=new A.rw(o,f,A.e([],t.qy),A.e([],t.sj),A.e([],t.h),A.e([],t.fv))
m=n.c=f.b3("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.e6!==$&&A.L()
h.e6=n
n=new A.qy(f,o)
n.lC()
n.lD()
h.cW!==$&&A.L()
h.cW=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.e8!==$&&A.L()
h.e8=m
p=A.i(n.createBuffer())
p.toString
h.e9!==$&&A.L()
h.e9=p
n=A.i(n.createBuffer())
n.toString
h.ea!==$&&A.L()
h.ea=n
e=A.i(o.createVertexArray())
e.toString
h.eb!==$&&A.L()
h.eb=e
l=A.i(o.createVertexArray())
l.toString
h.ec!==$&&A.L()
h.ec=l
k=A.i(o.createVertexArray())
k.toString
h.ed!==$&&A.L()
h.ed=k
j=A.i(o.createVertexArray())
j.toString
h.ee!==$&&A.L()
h.ee=j
o.bindVertexArray(e)
h.du(m)
o.bindVertexArray(l)
h.du(p)
o.bindVertexArray(k)
h.du(n)
o.bindVertexArray(null)
try{h.d0=f.ji(384,216,!0,!0)}catch(i){h.d0=null}s=4<f.gjj()?4:f.gjj()
e=s
if(typeof e!=="number")return e.au()
if(e>1)try{h.ce=f.oq(h.bx,h.by,!0,s)}catch(i){h.ce=null}try{h.bw=f.ji(h.bx,h.by,!0,!0)}catch(i){h.ce=h.bw=null}if(h.bw!=null)try{h.cY=f.bB(h.gcD(),h.gcC(),!1)
h.cZ=f.bB(h.gcD(),h.gcC(),!1)
h.d_=f.bB(h.bx,h.by,!1)}catch(i){h.d_=h.cZ=h.cY=null}},
gcD(){var s=B.d.W(this.bx,4)
return s<1?1:s},
gcC(){var s=B.d.W(this.by,4)
return s<1?1:s},
aY(a){return this.oo(t.G.a(a))},
oo(a){var s=0,r=A.bH(t.H),q=this,p,o,n,m,l,k,j
var $async$aY=A.bK(function(b,c){if(b===1)return A.bE(c,r)
for(;;)switch(s){case 0:p=new A.J(a,A.r(a).i("J<1,2>")).gu(0),o=q.b6
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.cW.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ap(o.d4(k,l,!1,!1,!1,m==="grime"),$async$aY)
case 4:if(c!=null)q.fR(m,l)
s=2
break
case 3:p=t.Ai
j=A.K(new A.cH(new A.U(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.oI.a(new A.qD(a)),t.jT),p),p.i("p.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ap(o.d5(j,12,!1),$async$aY)
case 7:q.cV=c
case 6:return A.bF(null,r)}})
return A.bG($async$aY,r)},
bU(){var s=0,r=A.bH(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bU=A.bK(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.q(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ap(A.b2(A.c(A.c(g.window).fetch("shaders/"+A.w(m))),f),$async$bU)
case 13:l=a3
if(!A.Q(l.ok)){i=A.fw("HTTP "+A.w(A.xt(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.ap(A.b2(A.c(l.text()),i),$async$bU)
case 14:a.bM(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ak(c)
i=A.fw("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.m7(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ak(b)
A.c(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bF(null,r)
case 1:return A.bE(p.at(-1),r)}})
return A.bG($async$bU,r)},
m7(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.aw
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.dA("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.dA("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.dA("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.hd()
i.hc()
q=i.hR
q=A.K(q,A.r(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.v)(q),++k){s=q[k]
o=B.cW.h(0,s)
o.toString
i.fR(s,o)}A.c(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ak(j)
A.c(v.G.console).error("shader recompile failed: "+A.w(r))}},
hc(){var s=this,r=s.aU,q=s.aw
q===$&&A.h()
s.iT=A.i(r.getUniformLocation(q.c,"uTex"))
s.iU=A.i(r.getUniformLocation(q.c,"uTime"))
s.iV=A.i(r.getUniformLocation(q.c,"uFlash"))
s.iW=A.i(r.getUniformLocation(q.c,"uVignette"))
s.iX=A.i(r.getUniformLocation(q.c,"uGrain"))
s.iY=A.i(r.getUniformLocation(q.c,"uDesat"))
s.iZ=A.i(r.getUniformLocation(q.c,"uBloom"))
s.j_=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.hN=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.hQ=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.j2=A.i(r.getUniformLocation(q.c,"uDepth"))
s.j3=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.hS=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.hT=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.j4=A.i(r.getUniformLocation(q.c,"uNoise"))
s.j5=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.hO=A.i(r.getUniformLocation(q.c,"uLut"))
s.hP=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.j0=A.i(r.getUniformLocation(q.d,"uTex"))
s.ex=A.i(r.getUniformLocation(q.d,"uDir"))
s.j1=A.i(r.getUniformLocation(q.c,"uBlur"))},
fR(a,b){var s,r,q,p=this
p.hR.l(0,a)
switch(a){case"bluenoise":s=p.aw
s===$&&A.h()
s=s.c
r=p.j4
r===$&&A.h()
q=p.j5
q===$&&A.h()
p.c3(s,r,q,b)
break
case"lut-gothic":s=p.aw
s===$&&A.h()
s=s.c
r=p.hO
r===$&&A.h()
q=p.hP
q===$&&A.h()
p.c3(s,r,q,b)
break
case"grime":s=p.aw
s===$&&A.h()
s=s.b
r=p.xr
r===$&&A.h()
q=p.y1
q===$&&A.h()
p.c3(s,r,q,b)
break
case"glass":s=p.aw
s===$&&A.h()
s=s.b
r=p.iB
r===$&&A.h()
q=p.iC
q===$&&A.h()
p.c3(s,r,q,b)
break
case"soft":s=p.aw
s===$&&A.h()
s=s.b
r=p.iF
r===$&&A.h()
q=p.iG
q===$&&A.h()
p.c3(s,r,q,b)
break}},
c3(a,b,c,d){var s=this.aU
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sjg(a){var s=A.vd(a)
this.is=s.a
this.it=s.b
this.iu=s.c},
cQ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.d.M(a1,14)!==0)throw A.d(A.z("static mesh needs a multiple of 14 floats, got "+a1,null))
s=a1/14|0
for(r=a0,q=r,p=q,o=a,n=o,m=n,l=0;l<s;++l){k=l*14
if(!(k<a1))return A.f(a2,k)
j=a2[k]
i=k+1
if(!(i<a1))return A.f(a2,i)
h=a2[i]
i=k+2
if(!(i<a1))return A.f(a2,i)
g=a2[i]
if(j<m)m=j
if(h<n)n=h
if(g<o)o=g
if(j>p)p=j
if(h>q)q=h
if(g>r)r=g}f=new Uint16Array(s)
for(l=0;l<s;++l){if(!(l<s))return A.f(f,l)
f[l]=l}a1=b.aU
i=A.i(a1.createVertexArray())
i.toString
e=A.i(a1.createBuffer())
e.toString
d=A.i(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.b(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.b(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.b(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.b(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.fz(56)
a1.bindBuffer(A.b(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.b(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.b(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.nW++
b.ei.k(0,a1,new A.lW(e,d,i,s,s,a3))
return a1},
nM(a){var s,r,q,p=this,o=p.ei.h(0,a)
if(o==null)return
p.h3()
s=p.iy
r=p.iz
if(s!==r)p.hh(r)
s=p.aU
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.ev
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.b(q.WebGL2RenderingContext.TRIANGLES),r,A.b(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.b(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.cg},
o4(a){var s,r=this.ei.a3(0,a)
if(r==null)return
s=this.aU
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
h3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.ej)return
c.ej=!0
s=c.aU
r=c.aw
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.iw
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.em
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.en
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.eo
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.iS)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.ew)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.ik?1:0
s.uniform1f(r,q)
r=c.ep
q=c.eq
p=c.er
o=c.fr
o===$&&A.h()
s.uniform3f(o,r/255*0.34,q/255*0.34,p/255*0.34)
p=c.RG
p===$&&A.h()
s.uniform1f(p,0.035)
p=c.rx
p===$&&A.h()
s.uniform1f(p,0.6)
p=c.ry
p===$&&A.h()
s.uniform1f(p,0)
p=c.to
p===$&&A.h()
s.uniform1f(p,0)
p=c.x1
p===$&&A.h()
s.uniform1f(p,0)
p=c.x2
p===$&&A.h()
s.uniform1f(p,0)
p=c.fx
p===$&&A.h()
q=c.ir
s.uniform3f(p,q.a,q.b,q.c)
q=c.fy
q===$&&A.h()
s.uniform3f(q,c.is,c.it,c.iu)
q=c.go
q===$&&A.h()
s.uniform1f(q,1.5)
q=c.id
q===$&&A.h()
s.uniform1f(q,14)
q=c.k1
q===$&&A.h()
s.uniform1f(q,c.iv)
q=c.k2
q===$&&A.h()
s.uniform1f(q,0.6)
q=c.k3
q===$&&A.h()
s.uniform1i(q,c.el.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.el
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.vd(k.b)
m=c.cf
m===$&&A.h()
i=m?1:1+(A.w4(c.es*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.cf
r===$&&A.h()
q=r?1:1+(A.w4(c.es*2.5,40503)*2-1)*0
c.nT=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.im?1:0
s.uniform1f(q,p)
p=c.y2
p===$&&A.h()
s.uniform1f(p,0.505)
p=c.cj
p===$&&A.h()
s.uniform1f(p,1.2)
p=c.iA
p===$&&A.h()
s.uniform1f(p,0.25)
p=c.iD
p===$&&A.h()
s.uniform1f(p,2)
p=c.iE
p===$&&A.h()
s.uniform1f(p,0.45)
q=c.il
h=q?384:0
g=q?216:0
q=c.ef
p=q.a
if(p===B.bz){f=B.c.E(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.iH
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.e6
r===$&&A.h()
q=c.iL
q===$&&A.h()
s.uniform1f(q,0)
q=c.iM
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.iI
q===$&&A.h()
if(q!=null)r.dd(0)
q=c.iJ
q===$&&A.h()
if(q!=null)r.dd(1)
q=c.iK
q===$&&A.h()
if(q!=null)r.dd(2)
r.de(0)
r.de(1)
r.de(2)
r=c.iN
r===$&&A.h()
if(c.cV==null)q=0
else{c.e7===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cV!=null){r=v.G
s.activeTexture(A.b(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.b(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cV)
r=c.eu
r===$&&A.h()
s.uniform1i(r,12)}r=c.iR
q=c.iQ
p=c.iP
o=c.iO
n=0
for(;;){m=c.e7
m===$&&A.h()
if(!(n<3))break
d=m.a[n]
if(!(n<o.length))return A.f(o,n)
m=o[n]
if(m!=null)s.uniform1f(m,d.b)
if(!(n<p.length))return A.f(p,n)
m=p[n]
if(m!=null)s.uniform1f(m,d.c)
if(!(n<q.length))return A.f(q,n)
m=q[n]
if(m!=null)s.uniform1i(m,d.a)
if(!(n<r.length))return A.f(r,n)
m=r[n]
if(m!=null)s.uniform1i(m,d.d);++n}c.hh(c.iz)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.ev
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.b(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.b(r.WebGL2RenderingContext.BLEND))},
hh(a){var s
this.iy=a
s=this.dx
s===$&&A.h()
this.aU.uniformMatrix4fv(s,!1,a.a)},
ba(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bx=a
j.by=b
j.ew=b/a
s=j.cW
s===$&&A.h()
r=B.d.W(a,2)
s.ay=r
q=B.d.W(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.bb(p,r,q)
r=s.e
if(r!=null)s.b.bb(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.bb(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.bb(r,384,216)
o=j.bw
n=j.ce
m=j.cY
l=j.cZ
k=j.d_
if(o!=null)j.b6.bb(o,a,b)
if(n!=null)j.b6.bb(n,a,b)
if(m!=null)j.b6.bb(m,j.gcD(),j.gcC())
if(l!=null)j.b6.bb(l,j.gcD(),j.gcC())
if(k!=null)j.b6.bb(k,a,b)},
mk(a){var s,r,q,p,o,n,m
for(s=this.ip,r=this.io,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
p=s[q]
if(!(p<r.length))return A.f(r,p)
o=q-1
for(;;){if(o>=0){n=s[o]
if(!(n<r.length))return A.f(r,n)}if(!!1)break
n=o+1
if(!(o>=0))return A.f(s,o)
m=s[o]
if(!(n>=0&&n<800))return A.f(s,n)
s[n]=m;--o}n=o+1
if(!(n>=0&&n<800))return A.f(s,n)
s[n]=p}},
mj(a){var s,r,q,p,o,n,m,l
for(s=this.iq,r=this.ek,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
p=s[q]
if(!(p<r.length))return A.f(r,p)
o=r[p].x
n=q-1
for(;;){if(n>=0){m=s[n]
if(!(m<r.length))return A.f(r,m)
m=r[m].x>o}else m=!1
if(!m)break
m=n+1
if(!(n>=0))return A.f(s,n)
l=s[n]
if(!(m>=0&&m<4000))return A.f(s,m)
s[m]=l;--n}m=n+1
if(!(m>=0&&m<4000))return A.f(s,m)
s[m]=p}},
o1(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.ef=b4
s=b2.ci
r=0
if(s>0){for(s=b2.iq,q=0;p=b2.ci,q<p;++q)B.a.k(s,q,q)
b2.mj(p)
for(p=b2.ek,o=b2.eg,n=0;n<b2.ci;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.zP(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.ek,p=b2.eg,q=0;q<b2.ci;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.zP(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.ci=0
for(s=b2.ip,q=0;p=b2.d1,q<p;++q)B.a.k(s,q,q)
b2.mk(p)
for(p=b2.nU,o=b2.io,k=0,n=0;n<b2.d1;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.vd(0)
m=j.b
h=b2.eo
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.en
d=e.a*0
c=e.b*0
e=e.c*0
b=m.a
a=b-g
a0=m.b
a1=a0-f
m=m.c
a2=m-h
g=b+g
f=a0+f
h=m+h
e=[new A.a(a-d,a1-c,a2-e),new A.a(g-d,f-c,h-e),new A.a(g+d,f+c,h+e),new A.a(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.em
k=A.zX(p,k,a3,a4,a5,a6,new A.a(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.d1=0
s=b2.b6
o=b2.e8
o===$&&A.h()
s.f3(o,b2.eg,r)
o=b2.e9
o===$&&A.h()
s.f3(o,p,k)
b2.h3()
p=b2.aU
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.eb
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,B.d.W(r,14));++b2.cg
p.depthMask(!1)
p.enable(A.b(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.b(o.WebGL2RenderingContext.SRC_ALPHA),A.b(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.ec
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,B.d.W(k,14));++b2.cg
m=b2.eh
if(m>0){h=b2.ea
h===$&&A.h()
s.f3(h,b2.nV,m)
p.blendFunc(A.b(o.WebGL2RenderingContext.ONE),A.b(o.WebGL2RenderingContext.ONE))
m=b2.ed
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,b2.eh/14|0);++b2.cg}m=b2.d0
if(m!=null){a7=b2.bw
if(a7!=null)s.pe(m,a7)}a8=b2.bw
if(a8==null)return
p.disable(A.b(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.b(o.WebGL2RenderingContext.BLEND))
m=b2.ee
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cY
a4=b2.cZ
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.aw
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE0))
g=b2.j0
g===$&&A.h()
p.uniform1i(g,0)
s.bg(a4)
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.ex
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.bg(a3)
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.ex,0,1/a4.y)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.d_
if(b2.cX>0&&a6!=null){s.bg(a6)
g=b2.aw
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.ey
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.ez
g===$&&A.h()
p.uniform1i(g,7)
g=b2.eA
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.eB
g===$&&A.h()
p.uniform1f(g,1)
g=b2.eC
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.eD
g===$&&A.h()
p.uniform1f(g,b2.cX)
g=b2.eE
g===$&&A.h()
p.uniform2f(g,1/b2.bx,1/b2.by)
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cW
g===$&&A.h()
b0=g.p9(a8,0.5)
s.bg(null)
s=b2.aw
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE1))
s=A.b(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.iZ
g===$&&A.h()
p.uniform1i(g,1)
g=b2.j_
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.j1
s===$&&A.h()
b2.cf===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.j2
s===$&&A.h()
p.uniform1i(s,7)
s=b2.j3
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.hS
s===$&&A.h()
p.uniform1i(s,11)
s=b2.hT
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE0))
s=A.b(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cX>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.iT
h===$&&A.h()
p.uniform1i(h,0)
h=b2.es+=b3;++b2.ix
s=b2.iU
s===$&&A.h()
p.uniform1f(s,h)
h=b2.hN
h===$&&A.h()
s=b2.ix
p.uniform2f(h,B.d.M(s*13,64),B.d.M(s*29,64))
s=b2.iV
s===$&&A.h()
p.uniform1f(s,0)
s=b2.iW
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.iX
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.iY
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.ef
if(s.a===B.ae)b1=0*(1-s.b/1)
else b1=0
s=b2.hQ
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.b(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.b(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.qC.prototype={
$0(){var s=this.a.aw
s===$&&A.h()
return s.b},
$S:67}
A.qD.prototype={
$1(a){return this.a.h(0,A.u(a))},
$S:46}
A.te.prototype={
gmy(){var s=this.b
s===$&&A.h()
return s},
hd(){var s,r,q,p,o,n,m=this,l=m.mz(),k=m.a
m.c=A.b(k.getAttribLocation(l,"aPos"))
m.d=A.b(k.getAttribLocation(l,"aColor"))
m.e=A.b(k.getAttribLocation(l,"aAlpha"))
m.f=A.b(k.getAttribLocation(l,"aNormal"))
m.r=A.b(k.getAttribLocation(l,"aUv"))
A.b(k.getAttribLocation(l,"aModelRow0"))
A.b(k.getAttribLocation(l,"aModelRow1"))
A.b(k.getAttribLocation(l,"aModelRow2"))
A.b(k.getAttribLocation(l,"aModelRow3"))
A.b(k.getAttribLocation(l,"aMaterialTint"))
m.as=A.i(k.getUniformLocation(l,"uEye"))
m.at=A.i(k.getUniformLocation(l,"uFwd"))
m.ax=A.i(k.getUniformLocation(l,"uUp"))
m.ay=A.i(k.getUniformLocation(l,"uRight"))
m.ch=A.i(k.getUniformLocation(l,"uScale"))
m.CW=A.i(k.getUniformLocation(l,"uAspect"))
m.cx=A.i(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.i(k.getUniformLocation(l,"uDepthFar"))
m.db=A.i(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.i(k.getUniformLocation(l,"uModel"))
m.dy=A.i(k.getUniformLocation(l,"uInstanced"))
m.fr=A.i(k.getUniformLocation(l,"uFog"))
m.fx=A.i(k.getUniformLocation(l,"uLight"))
m.fy=A.i(k.getUniformLocation(l,"uLightColor"))
m.go=A.i(k.getUniformLocation(l,"uFogStart"))
m.id=A.i(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.i(k.getUniformLocation(l,"uAmbient"))
m.k2=A.i(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.i(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.H(s)
r=m.ok
B.a.H(r)
q=m.p1
B.a.H(q)
p=m.p2
B.a.H(p)
for(o=0;o<4;++o){n=""+o
B.a.l(s,A.i(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.l(r,A.i(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.l(q,A.i(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.l(p,A.i(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.i(k.getUniformLocation(l,"uFlicker"))
m.p4=A.i(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.i(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.i(k.getUniformLocation(l,"uFogDensity"))
m.rx=A.i(k.getUniformLocation(l,"uFogHeightFalloff"))
m.ry=A.i(k.getUniformLocation(l,"uFogGroundHeight"))
m.to=A.i(k.getUniformLocation(l,"uRainIntensity"))
m.x1=A.i(k.getUniformLocation(l,"uSurfaceWetness"))
m.x2=A.i(k.getUniformLocation(l,"uWindowWetness"))
m.xr=A.i(k.getUniformLocation(l,"uWall"))
m.y1=A.i(k.getUniformLocation(l,"uWallOn"))
m.y2=A.i(k.getUniformLocation(l,"uWallMid"))
m.cj=A.i(k.getUniformLocation(l,"uWallAmt"))
m.iA=A.i(k.getUniformLocation(l,"uWallScale"))
m.iB=A.i(k.getUniformLocation(l,"uGlass"))
m.iC=A.i(k.getUniformLocation(l,"uGlassOn"))
m.iD=A.i(k.getUniformLocation(l,"uGlassGain"))
m.iE=A.i(k.getUniformLocation(l,"uGlassFog"))
m.iF=A.i(k.getUniformLocation(l,"uSoft"))
m.iG=A.i(k.getUniformLocation(l,"uSoftOn"))
m.iH=A.i(k.getUniformLocation(l,"uInternal"))
m.iI=A.i(k.getUniformLocation(l,"uLightProj0"))
m.iJ=A.i(k.getUniformLocation(l,"uLightProj1"))
m.iK=A.i(k.getUniformLocation(l,"uLightProj2"))
m.nX=A.i(k.getUniformLocation(l,"uShadow0"))
m.nY=A.i(k.getUniformLocation(l,"uShadow1"))
m.nZ=A.i(k.getUniformLocation(l,"uShadow2"))
m.iL=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.eu=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.ev=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.iM=A.i(k.getUniformLocation(l,"uShadowBias"))
m.iN=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.iO
B.a.H(s)
r=m.iP
B.a.H(r)
q=m.iQ
B.a.H(q)
p=m.iR
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.eu,12)},
du(a){this.a.bindBuffer(A.b(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.fz(56)},
fz(a){var s=this,r=s.c
r===$&&A.h()
s.c5(r,3,a,0)
r=s.f
r===$&&A.h()
s.c5(r,3,a,12)
r=s.d
r===$&&A.h()
s.c5(r,4,a,24)
r=s.e
r===$&&A.h()
s.c5(r,1,a,40)
r=s.r
r===$&&A.h()
s.c5(r,3,a,44)},
c5(a,b,c,d){var s=this.a
A.af(s,"vertexAttribPointer",[a,b,A.b(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
mz(){return this.gmy().$0()}}
A.rw.prototype={
dd(a){return null},
de(a){return null}}
A.a.prototype={
a6(a,b){return new A.a(this.a+b.a,this.b+b.b,this.c+b.c)},
aj(a,b){return new A.a(this.a-b.a,this.b-b.b,this.c-b.c)},
a7(a,b){return new A.a(this.a*b,this.b*b,this.c*b)},
cd(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bs(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.a(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gt(0)
return r<1e-9?new A.a(0,0,0):new A.a(s.a/r,s.b/r,s.c/r)}}
A.kU.prototype={}
A.li.prototype={}
A.nm.prototype={
pJ(a){var s,r,q,p,o,n=B.k.am(a.B(),null)
this.a.hK(n)
s=A.c(A.c(v.G.window).localStorage)
r=A.aD(s.getItem("quarantine.save.active"))
q=A.aD(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
p_(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.c(A.c(v.G.window).localStorage)
r=A.aD(s.getItem("quarantine.save.active"))
q=A.aD(s.getItem("quarantine.save.previous"))
p=this.fK(r,a)
if(p!=null)return new A.eQ(p,null)
o=this.fK(q,a)
if(o!=null)return new A.eQ(o,"recovered previous save")
if(r==null)return B.l3
return B.l2}catch(n){return B.l1}},
fK(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hK(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ak(q) instanceof A.H)return null
else throw q}}}
A.jL.prototype={
kB(a,b,c,d,e){if(this.a.length===0)throw A.d(B.fO)
if(this.b<0)throw A.d(B.fm)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.b6(A.N(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cd.prototype={
v(){return"EndingKind."+this.b}}
A.nZ.prototype={}
A.fv.prototype={
B(){var s=t.N
return A.N(["kind",this.a.b],s,s)}}
A.o1.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:69}
A.bp.prototype={}
A.kB.prototype={
B(){var s,r=this,q=t.N,p=A.q(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.N(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
of(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.aj(0,new A.a(0,1.3499999999999999,0))
return!new A.jv(s,s.a6(0,new A.a(0,1.2000000000000002,0))).d3(a,r)}}
A.qh.prototype={
B(){return A.me(this.a)}}
A.fI.prototype={
B(){return A.N(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qN.prototype={
hK(a){var s,r,q,p,o,n,m,l=B.k.aH(a,null),k=t.f
if(!k.b(l))throw A.d(B.fZ)
s=t.N
r=t.z
q=A.aN(l,s,r)
p=q.h(0,"version")
if(A.aM(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.a5("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.fu)
k=A.aN(n,s,r)
return A.yy(A.aN(m,s,r),k,2)}}
A.eQ.prototype={}
A.eA.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jU.prototype={}
A.ol.prototype={}
A.ok.prototype={
gab(){var s=this.d
return new A.ol(s.a,s.b)},
geR(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.N(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.N(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.N(["entryCount",m.e.b.a],k,t.S)
p=A.y7(m.c).B()
o=m.r
n=o.c
return new A.qh(A.me(A.N(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.N(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
mI(a,b){if(!B.a.N(a.f,new A.om(b)))return!1
this.z.mH(a,b)
return!0},
o5(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.r(s).i("ay<2>")
q=A.K(new A.ay(s,r),r.i("p.E"))
B.a.V(q,new A.on())
if(q.length===0)return null
s=A.G(q)
r=s.i("I<1>")
p=A.K(new A.I(q,s.i("n(1)").a(new A.oo()),r),r.i("p.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dU(a),r=t.sU,s=new A.aU(s,s.gt(0),r.i("aU<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.M(n,o.length)]
s=l.c
k=new A.cO(a,l.a,s.length-1,B.a.gX(s).p(0))
j.k(0,a,k)
return k},
mE(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.aq(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cM(B.h8)}if(n<a)this.cM(B.h9)},
km(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dl(a)&&s.kl(b)},
p0(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dM){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
ki(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.BH(j,A.ai(i.d,h).length)
if(a===B.dz)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.G(r)
A.BG(j,new A.I(r,q.i("n(1)").a(new A.op(k)),q.i("I<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.i5,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aN(j.a/1*3)
B.a.l(r.r,new A.fK(q.a,a,b))
m=r.a
A.BS(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.k7(B.iM)
s.r.n5(o,c)
l=B.c.aN(j.b/1*6)
if(l>0)r.dl(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ay(i,A.r(i).i("ay<2>")).N(0,new A.oq())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cM(B.hb)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cM(B.ha)},
cM(a){var s=this;++s.y
B.a.l(s.w,new A.jU())
B.a.l(s.x,A.BI(A.EH(a),s.b,s.y-1))}}
A.om.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:15}
A.on.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.oo.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:25}
A.op.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.rx().kf(this.a.c,a.a)},
$S:73}
A.oq.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.na.prototype={
f4(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.m("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.m("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.m("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.v)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.d(A.m("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" origin.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" origin.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" origin.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" size.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" size.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" size.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.m("window count mismatch for "+n))
for(n=A.G(j),i=n.i("n(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.v)(l),++f){e=l[f]
d=A.br(new A.I(j,i.a(new A.nf(e)),n),r)
if(d==null)throw A.d(A.m("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.k(A.m(c+" offset mismatch: "+A.w(h)+" != "+A.w(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.k(A.m(c+a+A.w(h)+" != "+A.w(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.k(A.m(c+a0+A.w(h)+" != "+A.w(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.v)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a+A.w(n)+" != "+A.w(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a0+A.w(n)+" != "+A.w(l)))
if(o.f!=m.at)throw A.d(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaQ(a1).b!==B.a.gaQ(s).b)throw A.d(A.m("stair manifest mismatch"))}}
A.nb.prototype={
$1(a){return A.Bo(a,this.a)},
$S:74}
A.nc.prototype={
$1(a){var s=this.a,r=A.mm(a,"portal"),q=A.em(r,"id"),p=A.em(r,"a"),o=A.em(r,"b"),n=A.j8(r,"width"),m=A.j8(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.u(r.h(0,"doorKit")):null
return new A.ff(q,p,o,n*s,m*s,l)},
$S:75}
A.nd.prototype={
$1(a){var s=A.mm(a,"stair")
A.em(s,"id")
return new A.fh(A.em(s,"portalId"))},
$S:76}
A.ne.prototype={
$1(a){return typeof a=="string"?a:A.j5("exterior cell")},
$S:77}
A.nf.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:14}
A.fg.prototype={}
A.ng.prototype={
$1(a){var s=this.a,r=A.mm(a,"window"),q=A.em(r,"id"),p=A.j8(r,"offset")
A.j8(r,"sill")
return new A.fi(q,p*s,A.j8(r,"width")*s,A.j8(r,"height")*s)},
$S:79}
A.fi.prototype={}
A.ff.prototype={}
A.fh.prototype={}
A.vi.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:11}
A.jv.prototype={
pr(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.G(s)
q=new A.I(s,r.i("n(1)").a(new A.nw(e)),r.i("I<1>"))
p=!q.gu(0).m()?null:q.gR(0)
if(p==null){n.d=null
return}if(!(n.cL(b,p.f)&&a==="hall"))o=n.cL(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lj(p,B.c.E(d,0,1))},
ot(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.h0(g,c,d)
s=h.lr(a,b,c,d)
if(s!=null){h.d=s
return h.h0(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.mY(Math.sqrt(r*r+q*q)/0.08))
o=d.a7(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.mp(a,n,m,o)
l=l||j.b
m=j.a
i=h.oY(a,n)
n=i==null?n:i}h.bf(m)
return new A.kn(m,n)},
lr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cL(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cL(c,l)){l=j<0||o
h=l}if(i||h)return new A.lj(m,i?0:1)}return null},
h0(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.aj(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.E(a.b+o/p,0,1)
n=A.yL(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bf(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kn(n,k)},
cL(a,b){var s=a.aj(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
mp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cI(c,!1)
s=h.cP(a,b,c,new A.a(g,0,0))
r=s.a
q=d.c
p=h.cP(a,b,r,new A.a(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cI(p.a,!1)
n=c.a6(0,new A.a(0,0.35,0))
h.bf(n)
if(!h.d3(a,b)){m=h.cP(a,b,n,new A.a(g,0,0))
l=h.cP(a,b,m.a,new A.a(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.a(g,r-j,q)
h.bf(i)
if(h.d3(a,b))break}h.bf(k)
return new A.cI(k,!1)}}if(o)return new A.cI(r,!0)
if(!p.b)return new A.cI(p.a,!0)
h.bf(c)
return new A.cI(c,!0)},
cP(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cI(c,!1)
s=c.a6(0,d)
this.bf(s)
if(this.d3(a,b)){this.bf(c)
return new A.cI(c,!0)}return new A.cI(s,!1)},
bf(a){var s=a.aj(0,new A.a(0,1.3499999999999999,0))
this.a=s
this.b=s.a6(0,new A.a(0,1.2000000000000002,0))},
d3(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aJ(m)
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
return!this.mm(a,m,s)},
oY(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aJ(k)
for(r=k.a,q=a.aC(r),p=J.R(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.bS(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hz(k,o,s)&&this.lg(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
mm(a,b,c){var s,r,q
for(s=a.aC(b.a),r=J.R(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hz(b,q,c))return!0}return!1},
hz(a,b,c){var s,r,q,p=a.a,o=b.aK(p),n=b.ah(p)
p=o===B.m||o===B.l
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
lg(a,b,c){var s,r=this
switch(b.aK(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smM(a){this.a=t.a7.a(a)}}
A.nw.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:81}
A.kn.prototype={}
A.cI.prototype={}
A.lj.prototype={}
A.hD.prototype={}
A.oQ.prototype={
n5(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
kg(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
kh(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.N(["landedCount",this.b],t.N,t.z)}}
A.qJ.prototype={
kJ(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.L()
o.c=new A.k4(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.v)(n),++q){p=n[q]
r.k(0,p.a,o.fA(p))}},
d6(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.v)(r),++o)p.o4(r[o])
s.k(0,a,n.fA(m))},
fA(a){var s=A.Ah(this.a,a),r=this.b,q=A.e([r.cQ(s.a,1),r.cQ(s.b,2),r.cQ(s.c,0)],t.t),p=s.d
if(!B.r.gO(p))q.push(r.cQ(p,0))
return q},
jN(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.P
s=l.a
r=A.aL([s],t.N)
for(n=n.aC(s),q=J.R(n.a),n=new A.T(q,n.b,n.$ti.i("T<1>"));n.m();){p=q.gn()
o=p.bS(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
nF(a,b){var s,r,q,p,o=this,n=o.jN(a),m=o.b,l=o.c
l===$&&A.h()
l=t.ba.a(l.jF(n,b))
s=t.A_
m.el=l.length<=4?A.ai(l,s):A.ai(A.id(l,0,A.en(4,"count",t.S),A.G(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p)m.nM(r[p])}}}
A.a0.prototype={}
A.jO.prototype={
goi(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a9(A.e([r,q,p,o,n,m],t.n),new A.o3())&&o>=r&&n>=q&&m>=p}}
A.o3.prototype={
$1(a){return isFinite(A.bD(a))},
$S:5}
A.k3.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.M(s,3)!==0}else s=!0
if(s)throw A.d(A.z("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.z("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.goi())throw A.d(A.z("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.v)(l),++r){p=l[r]
if(B.a.N(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oS()))throw A.d(A.z("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.z("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.z("QHMX index "+o+" exceeds vertex count",m))}}}
A.oS.prototype={
$1(a){return!isFinite(A.bD(a))},
$S:5}
A.oR.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bG(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bG(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bG(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bG(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bG(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bG(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a0(a,b,c,m,n,o,0,0,p),r=new A.a0(g,h,i,m,n,o,1,1,p)
this.ag(s,new A.a0(d,e,f,m,n,o,1,0,p),r)
this.ag(s,r,new A.a0(j,k,l,m,n,o,0,1,p))},
ag(a,b,c){var s=this,r=s.b
B.a.l(r,s.dH(a))
B.a.l(r,s.dH(b))
B.a.l(r,s.dH(c))},
dH(a){var s,r,q=B.a.a5(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
mS(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.d(A.m("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.k3(A.ai(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jO(s,r,q,p,o,n))
h.C()
return h}}
A.jP.prototype={}
A.w9.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.af.q(0,s))A.k(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:82}
A.vb.prototype={
$2(a,b){var s=t.Ez
return B.b.G(s.a(a).a,s.a(b).a)},
$S:83}
A.d9.prototype={
pI(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.q(k,k),i=A.e([],t.Dl)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iA(A.GX(new A.k3(i,new Uint16Array(A.a1(s)),A.Eq(i))),l.a,l.b,l.c,A.e([],k))}}
A.iA.prototype={}
A.ex.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jQ.prototype={
mZ(a){var s
switch(a.a){case 0:s=A.aL(["front","street","opposite-house"],t.N)
break
case 1:s=A.aL(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aL(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aL(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aL(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
n_(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ce
break A}if("kitchen"===a||"cellar"===a){s=B.eU
break A}if("bathroom"===a){s=B.eV
break A}if("spare-room"===a){s=B.eW
break A}s=B.ce
break A}return this.mZ(s)},
j6(a,b,c,d){d.i("p<0>").a(b)
t.Q.a(c)
return new A.cp(this.o0(d.i("j(0)").a(a),b,c,d),d.i("cp<0>"))},
o0(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$j6(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a9(0,B.af.gav(B.af)))throw A.d(A.z("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.ci(l,l.r,l.e,r.$ti.i("ci<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.af.q(0,j))throw A.d(A.m("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ee.prototype={
c8(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uQ.prototype={
$1(a){var s=this
return t.xT.a(a).c8(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:28}
A.uP.prototype={
$1(a){return t.xT.a(a).c8(0,(this.a+this.b)*0.5,this.c)},
$S:28}
A.dn.prototype={
v(){return"FocusKind."+this.b}}
A.dX.prototype={}
A.qK.prototype={}
A.u3.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:85}
A.u2.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:14}
A.v9.prototype={
$1(a){return B.d.E(B.c.aN(a*this.a),0,255)},
$S:27}
A.ed.prototype={}
A.fU.prototype={}
A.oO.prototype={
kU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.p4(1.5),a4=this.b,a5=A.at(a4,!0,t.U)
B.a.H(a4)
s=A.e([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.v)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.v)(i),++g){f=i[g]
j.push(new A.bb(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.v)(h),++g){d=h[g]
i.push(new A.bh(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.v)(e),++g){b=e[g]
h.push(new A.bj(b.a,b.b,a3.$1(b.c)))}s.push(new A.aX(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.L(a4,s)
a4=this.c
a=A.at(a4,!0,t.T)
B.a.H(a4)
s=A.e([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bv(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.L(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dC(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.p5(),a7=this.b,a8=A.at(a7,!0,t.U)
B.a.H(a7)
s=A.e([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.v)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.e([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.v)(h),++f){e=h[f]
i.push(new A.bb(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.e([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.v)(g),++f){c=g[f]
h.push(new A.bh(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.e([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.v)(d),++f){a=d[f]
g.push(new A.bj(a.a,a.b,a6.$1(a.c)))}d=A.e([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.v)(b),++f){a1=b[f]
d.push(new A.dl(a1.a,a1.b*1.5))}s.push(new A.aX(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.L(a7,s)
a7=this.c
a2=A.at(a7,!0,t.T)
B.a.H(a7)
s=A.e([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bv(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.L(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.e([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.v)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dC(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
ly(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
n=o.a
if(q.T(n))throw A.d(A.m("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){m=s[p]
n=m.a
if(q.T(n))throw A.d(A.m("duplicate portal "+n))
q.k(0,n,m)}},
mw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.b,r=s.length,q=0;q<r;q=p)for(p=q+1,o=p;o<r;++o){n=s[q]
m=s[o]
l=n.d
k=l.a
j=m.d
i=j.a
h=m.c
g=k<i+h.a&&i<k+n.c.a
k=l.b
i=j.b
f=k<i+h.b&&i<k+n.c.b
l=l.c
j=j.c
e=l<j+h.c&&j<l+n.c.c
if(g&&f&&e)throw A.d(A.m("3D room overlap: "+n.a+" and "+m.a))}},
mu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.q(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.v)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.hy(o,i,h,g,f,e)
a5.fu(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.v)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aK(l)
h=c.ah(l)
g=c.w
f=c.x
a5.hy(o,i,h,g,0,f)
a5.fu(a6,l,c.aK(l),c.ah(l),c.ah(l)+g,0,f)}}for(s=new A.J(a6,a6.$ti.i("J<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.ca(a)
r.V(a,new A.p6())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
hy(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.m||b===B.l
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
fu(a,b,c,d,e,f,g){J.hj(t.aD.a(a).cs(b+":"+c.b,new A.p3()),new A.iI([d,e,f,g]))},
aJ(a){var s=a.c,r=this.r,q=a.a
return new A.a(s.a+r.kg(q),s.b+r.kh(q),s.c)},
aC(a){var s=this.c,r=A.G(s)
return new A.I(s,r.i("n(1)").a(new A.p7(a)),r.i("I<1>"))},
oX(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.aq(a,"roomId","not a portal endpoint"))
r=this.aJ(o)
q=b.ah(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aK(a).a){case 0:s=new A.a(s.a+q,p,s.c)
break
case 2:s=new A.a(s.a+q,p,s.c+r.c)
break
case 1:s=new A.a(s.a+r.a,p,s.c+q)
break
case 3:s=new A.a(s.a,p,s.c+q)
break
default:s=null}return s},
gpH(){return B.a.bz(this.b,0,new A.p8(),t.S)},
jr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.V
s=A.e([new A.aW(a,B.V)],t.nR)
r=A.aL([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.p8(s,0)
n=o.a
m=o.b
for(l=this.aC(n),k=J.R(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.bS(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.K(m,p)
h.push(j)
B.a.l(s,new A.aW(i,h))}}}return B.V}}
A.p4.prototype={
$1(a){var s=this.a
return new A.a(a.a*s,a.b,a.c*s)},
$S:29}
A.p5.prototype={
$1(a){return a.a7(0,1.5)},
$S:29}
A.p6.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.G(a.a[0],b.a[0])},
$S:88}
A.p3.prototype={
$0(){return A.e([],t.wx)},
$S:89}
A.p7.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:90}
A.p8.prototype={
$2(a,b){return A.b(a)+t.U.a(b).e.length},
$S:91}
A.o2.prototype={}
A.rx.prototype={
kf(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a9(s,new A.ry())}else s=!1
return s}}
A.ry.prototype={
$1(a){return t.e.a(a).w},
$S:14}
A.oT.prototype={
oU(a){var s=this.e,r=A.G(s)
return new A.I(s,r.i("n(1)").a(new A.oW(a)),r.i("I<1>"))},
cR(a){return B.a.aV(this.d,new A.oU(a),new A.oV(a))},
f4(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.m("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.m("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.d(A.m("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a2(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.m("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.m("invalid bounds for inventory asset "+m))}j=A.a2(s)
i=A.a2(s)
h=A.a2(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.v)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.m("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.m(a7+m+" references "+l))
n=a6.cR(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.B3()
if(!e.b.test(k))throw A.d(A.m("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.d(A.m("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.d(A.m("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.d(A.m("duplicate inventory socket "+l+":"+e))
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
a4=g.jy(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.m(a7+m+" escapes "+f.a))}}}
A.oW.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:92}
A.oU.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:93}
A.oV.prototype={
$0(){return A.k(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cV.prototype={}
A.cy.prototype={
jy(a,b){var s=this.f.c.b*b,r=a.f
return new A.a(r.a.b*s,r.b.b*s,0)}}
A.pi.prototype={}
A.pg.prototype={}
A.vh.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:11}
A.ph.prototype={
B(){var s,r,q,p=A.q(t.N,t.z),o=this.a,n=A.r(o).i("ad<1>")
n=A.K(new A.ad(o,n),n.i("p.E"))
B.a.Z(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.v)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
f_(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.f7)
s=t.X
r=A.aN(a,s,s)
s=this.a
s.H(0)
for(q=new A.J(r,A.r(r).i("J<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aM(o)||o<0)throw A.d(B.fn)
s.k(0,n,o)}}}
A.cY.prototype={}
A.k4.prototype={
jF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.ea)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.v)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cY(new A.a(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.me(j),0.06))}}B.a.V(s,new A.oX(b))
return A.id(s,0,A.en(4,"count",t.S),t.A_).bW(0)},
me(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oX.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.G(a.a.aj(0,s).gt(0),b.a.aj(0,s).gt(0))},
$S:95}
A.hy.prototype={
v(){return"Floor."+this.b}}
A.dW.prototype={
v(){return"Facing."+this.b}}
A.bb.prototype={
ske(a){this.w=A.Q(a)}}
A.bv.prototype={
bS(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aK(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.aq(a,"roomId","not an endpoint of "+s.a))},
ah(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.aq(a,"roomId","not an endpoint of "+s.a))}}
A.bh.prototype={}
A.bj.prototype={}
A.dl.prototype={}
A.dC.prototype={}
A.aX.prototype={}
A.oZ.prototype={
nP(a){return B.a.aV(this.c,new A.p_(a),new A.p0(a))},
pE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.m("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.m("soundscape source changed: "+f))
f=t.N
s=A.a2(f)
f=A.q(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.d(A.m("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.d(A.m("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.d(A.m("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.d(A.m("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaE().N(0,new A.p1()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.d(A.m("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.d(A.m("sound emitter "+l+" escapes "+j.a))}}}
A.p_.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:96}
A.p0.prototype={
$0(){return A.k(A.m("sound emitter missing: "+this.a))},
$S:6}
A.p1.prototype={
$1(a){return B.b.bl(A.u(a)).length===0},
$S:3}
A.cU.prototype={}
A.oP.prototype={
dT(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.aq(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.iL}q=A.e([],t.Fm)
p=B.c.aW(r)+1
o=B.c.aW(b)
for(n=p;n<=o;++n){m=B.d.M(n,24)
B.a.l(q,new A.eD("tick"))
if(B.d.M(m,3)===0){B.a.l(q,new A.eD("cuckoo"))
B.a.l(q,new A.eD("bell"))}if(B.d.M(m,6)===0)B.a.l(q,new A.eD("chime"))}l.b=b
return q}}
A.eD.prototype={}
A.oY.prototype={
dT(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.aq(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iK}q=A.e([],t.vS)
for(p=B.c.aW(r)+1;p<=B.c.aW(b);++p){o=B.d.M(p,24)
n=B.d.M(o,4)
if(n===2)B.a.l(q,B.hB)
if(B.d.M(o,3)===1)B.a.l(q,B.hD)
if(B.d.M(o,8)===5)B.a.l(q,B.hG)
if(B.d.M(o,5)===0)B.a.l(q,B.hC)
if(B.d.M(o,7)===3)B.a.l(q,B.hH)
if(n===1)B.a.l(q,B.hE)
if(B.d.M(o,6)===4)B.a.l(q,B.hF)}m.b=b
return q}}
A.cT.prototype={}
A.vg.prototype={
$1(a){return typeof a!="number"},
$S:11}
A.p2.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.q(m,l)
for(s=n.a,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.N(["open",o.a,"locked",o.b],m,r))}l=A.q(m,l)
for(s=n.c,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.N(["lit",o.a,"examined",o.b],m,r))}return A.N(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a2(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)d.l(0,s[q].a)
r=A.a2(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.v)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l)r.l(0,n[l].a)
e=A.a2(e)
for(q=0;q<p.length;p.length===n||(0,A.v)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.xg(new A.ad(o,A.r(o).i("ad<1>")),d)){d=f.b
if(A.xg(new A.ad(d,A.r(d).i("ad<1>")),r)){d=f.c
e=!A.xg(new A.ad(d,A.r(d).i("ad<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.fH)
e=f.d
if(e<0||e>2)A.k(B.fe)
a.r.b=e
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
A.hW.prototype={
B(){return A.N(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hM.prototype={
B(){return A.N(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bg.prototype={}
A.nY.prototype={
$1(a){return this.a.q(0,A.u(a))},
$S:3}
A.dZ.prototype={
v(){return"Hand."+this.b}}
A.t8.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
fk(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.ki.prototype={
B(){var s,r,q,p=t.N,o=A.q(p,t.D)
for(s=this.a,r=0;r<5;++r){q=B.z[r]
o.k(0,q,s.h(0,q))}return A.N(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.U(B.z,t.oI.a(new A.pA(this)),t.jT).a5(0," \xb7 ")}}
A.pz.prototype={
$2(a,b){return new A.P(A.u(a),A.u(b),t.q)},
$S:97}
A.pA.prototype={
$1(a){return this.a.a.h(0,A.u(a))},
$S:46}
A.bY.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.N(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pl.prototype={
c7(a){t.G.a(a)
return a.a===5&&B.a.a9(B.z,new A.ps(this,a))},
fv(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.c7(b))return null
s=this.e++
r=new A.bY(s,a,A.e([A.py(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
e_(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.c7(b))return!1
B.a.l(s.c,A.py(b,c,B.az))
return!0},
mD(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.c7(b))return!1
s.r=A.py(b,0,B.cE)
return!0},
k7(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.T(p)&&!B.a.q(s,p))B.a.l(s,p)}},
pF(a){var s
if(!this.b.T(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.r(n).c)
B.a.Z(n)
s=A.e([],t.cs)
for(r=q.b,r=new A.al(r,r.r,r.e,A.r(r).i("al<2>"));r.m();)s.push(r.d.B())
return A.N(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.ps.prototype={
$1(a){var s
A.u(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.hl.prototype={
v(){return"BackendFallbackReason."+this.b}}
A.nh.prototype={
hM(a,b){if(a.a!==B.a_)return a
return new A.fj(B.bu,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.ni.prototype={
e0(a,b){if(a.a===B.a_&&!a.d)return new A.qc(b,a.B(),B.dp)
return new A.pw(b,a.d,a.e,a.B(),B.dp)},
ny(a){return this.e0(a,null)}}
A.fj.prototype={
B(){var s,r=this,q=A.q(t.N,t.X)
q.k(0,"kind",r.a.b)
q.k(0,"explicit",r.b)
q.k(0,"automatic",r.c)
q.k(0,"fallback",r.d)
q.k(0,"rejected",r.f)
q.k(0,"aliasUsed",r.w)
s=r.e
if(s!=null)q.k(0,"fallbackReason",s)
s=r.r
if(s!=null)q.k(0,"rejectionReason",s)
s=r.x
if(s!=null)q.k(0,"aliasReason",s)
return q}}
A.nj.prototype={
cz(a){var s,r,q,p,o=null,n=a==null?o:B.b.bl(a).toLowerCase()
if(n==null||n.length===0)return B.e0
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.fj(B.a_,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.fj(B.bu,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.px.prototype={}
A.pw.prototype={
gbu(){var s=this,r=s.b,q=r==null?null:r.gbu()
if(q==null)q=A.qF("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jG(s.e)
return r},
bj(){if(this.f===B.dq)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.bj()
this.f=B.A},
ba(a,b){var s
if(a<=0||b<=0)throw A.d(A.z("legacy surface size must be positive",null))
if(this.f!==B.A)A.k(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.ba(a,b)},
bc(a){var s
if(this.f!==B.A)A.k(A.m("legacy backend is not ready"))
B.k.am(A.N(["backend","legacy","interpolation",0,"facts",A.me(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.bc(a)},
bA(a){var s
if(this.f!==B.A)A.k(A.m("legacy backend is not ready"))
B.k.am(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bA(a)}}
A.qd.prototype={}
A.qc.prototype={
gbu(){var s=this.b,r=s==null?null:s.gbu()
if(r==null)r=A.qF("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jG(this.c)
return s},
bj(){if(this.d===B.dq)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.bj()
this.d=B.A},
ba(a,b){var s
if(this.d!==B.A)A.k(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.z("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.ba(a,b)},
bc(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.aD){p=q==null
if(p||!q.gdX()){if(s.d!==B.aD)A.k(A.m("pixeldart backend is not context-lost"))
s.d=B.A
if(!p)q.jv()}p=s.d
if(p===B.aD)return}if(p!==B.A)A.k(A.m(r))
B.k.am(A.N(["backend","pixeldart","interpolation",0,"facts",A.me(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdX()){if(s.d!==B.A)A.k(A.m(r))
s.d=B.aD
q.jh()
return}q.bc(a)}},
bA(a){var s
if(this.d!==B.A)A.k(A.m("pixeldart backend is not ready"))
B.k.am(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bA(a)}}
A.qe.prototype={
mW(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c3.cz(a)
r=A.e([a.a,"webgl2"],t.s)
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
o=A.K(o,A.r(o).c)
B.a.Z(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.v)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.kz.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qf.prototype={
B(){var s=this
return A.N(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.kh.prototype={}
A.qn.prototype={
pC(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b0
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b0
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.kh(!0,B.c.E(q*(0.6+b*0.6),0,1),0.82+s.aL()*0.1,0.9+s.aL()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aL()*0.15
p.e=(0.6+s.aL()*2.8)/0.343
p.b=16-b*11+s.aL()*6}}}
A.i1.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eO.prototype={
v(){return"RendererBackendState."+this.b}}
A.qG.prototype={}
A.kK.prototype={}
A.qE.prototype={
kI(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.z("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.z("renderer provenance values must be non-empty",null))}},
jG(a){var s=this
return A.yv(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
B(){var s,r,q,p=this,o=A.q(t.N,t.z)
o.k(0,"backend",p.a)
o.k(0,"profile",p.b)
o.k(0,"buildId",p.c)
o.k(0,"capabilities",p.d)
s=p.e
r=s!=null
o.k(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null&&p.x!=null)
o.k(0,"fallback",p.y)
q=p.z
if(q!=null)o.k(0,"fallbackReason",q)
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
A.rr.prototype={}
A.cG.prototype={
v(){return"ShaderDebugMode."+this.b},
gnE(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dB.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e7.prototype={
gj8(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.ae(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.ae(r,2)
else return B.c.ae(r,3)}}}
A.rs.prototype={
gcn(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.f(B.bf,p)
s=B.bf[p]
p=this.f
p===$&&A.h()
r=A.G(p)
q=r.i("I<1>")
p=A.K(new A.I(p,r.i("n(1)").a(new A.rv(s)),q),q.i("p.E"))
return p},
gcU(){var s,r=this.gcn(),q=r.length
if(q===0)return null
s=B.d.E(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.f(r,s)
return r[s]},
pd(){var s,r,q,p,o
if(this.b===4)this.e=B.aF
else for(s=this.gcn(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
pb(){var s,r,q,p
this.e=B.aF
s=this.f
s===$&&A.h()
r=0
for(;r<33;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
P(a){var s,r,q=this.f
q===$&&A.h()
s=A.G(q)
r=A.br(new A.I(q,s.i("n(1)").a(new A.ru(a)),s.i("I<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
b0(a){var s,r,q=this.f
q===$&&A.h()
s=A.G(q)
r=A.br(new A.I(q,s.i("n(1)").a(new A.rt(a)),s.i("I<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rv.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:18}
A.ru.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:18}
A.rt.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:18}
A.bR.prototype={
v(){return"SleepQuality."+this.b}}
A.by.prototype={
v(){return"SleepLocation."+this.b}}
A.fK.prototype={}
A.nQ.prototype={
dl(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
kl(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
i.push(A.N(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.N(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nR.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:99}
A.nS.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:100}
A.k8.prototype={
v(){return"InteractionType."+this.b}}
A.eX.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.td.prototype={}
A.eW.prototype={}
A.jA.prototype={}
A.p9.prototype={}
A.pd.prototype={
fa(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.al(s,s.r,s.e,A.r(s).i("al<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.V(p,new A.pe())
return p},
n4(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.mE
s=t.N
r=A.a2(s)
q=A.a2(s)
for(s=n.ga0(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gX(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eW(B.aJ,r)
s=r.a
o=B.a.gX(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gX(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eW(B.dP,r)
return new A.eW(B.bO,r)},
m5(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jA(e,!1,B.mD,null)
s=p.d===c
r=this.n4(p,d)
q.pF(e)
return new A.jA(e,s,r,r.a===B.aJ&&s?'The world says "'+d.c+'". The entry says "'+B.a.gX(p.c).p(0)+'".':null)},
nz(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aJ)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.p9(B.a.gX(s.c).p(0)+" but "+A.w(a.f))}}
A.pe.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:16}
A.cl.prototype={
v(){return"RuptureStep."+this.b}}
A.qL.prototype={}
A.d_.prototype={}
A.qM.prototype={
gfl(){var s=B.bj.h(0,this.a)
return s==null?0:s},
kp(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.cP
r=A.x3(b)
s=q.c
B.a.H(s)
B.a.L(s,r)
B.a.H(q.d)
q.a=B.ae
q.b=0
q.e=!1
return A.e([B.eu],t.xB)},
dS(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.z("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.cP
s=A.e([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.bj.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a0)l.mr(s)
p=l.b
o=B.bj.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.d_())
if(q===B.a0){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.et)}else{p=q.a+1
if(!(p<7))return A.f(B.cN,p)
l.a=B.cN[p]
l.b=0
B.a.l(s,new A.d_())}}}return A.ai(s,t.F3)},
B(){var s=this,r=t.N
return A.N(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
mr(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.E(B.c.aW(l.b/l.gfl()*A.ai(s,r).length),0,A.ai(s,r).length)
p=l.d
for(;;){o=A.at(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.at(s,!1,r)
o.$flags=3
n=o
o=A.at(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.f(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.d_())}}}
A.jV.prototype={
gbE(){var s=this.b
if(s<6||s>18)return 0
return B.c.E((s-6)/12,0,1)}}
A.eV.prototype={
B(){var s=this
return A.N(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.t9.prototype={
eF(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aV(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.uR.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.E(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eV(r,q,A.Aj(B.c.ae(s,2)),A.Aj(B.c.ae(12-(r-1)*0.11000000000000001,2)))},
$S:101}
A.uZ.prototype={
$1(a){var s=B.d.cO(this.a,a)&255
return B.d.E(B.c.aN(s+((B.d.cO(this.b,a)&255)-s)*this.c),0,255)},
$S:27}
A.pQ.prototype={
aX(a,b){var s=this.b
if(s.T(a))s=s.h(0,a)===b
else s=!1
return s},
mH(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.r(k).i("J<1,2>")
k=A.K(new A.J(k,j),j.i("p.E"))
B.a.V(k,new A.pS())
j=t.N
k=A.wr(k,j,j)
s=this.b
r=A.r(s).i("J<1,2>")
s=A.K(new A.J(s,r),r.i("p.E"))
B.a.V(s,new A.pT())
s=A.wr(s,j,j)
r=A.q(j,t.P)
q=this.c
p=A.r(q).i("J<1,2>")
q=A.K(new A.J(q,p),p.i("p.E"))
B.a.V(q,new A.pU())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.v)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.N(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.N(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pS.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:17}
A.pT.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:17}
A.pU.prototype={
$2(a,b){var s=t.gJ
return B.b.G(s.a(a).a,s.a(b).a)},
$S:103}
A.cO.prototype={
B(){var s=this
return A.N(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bt.prototype={
B(){var s=this
return A.N(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.qa.prototype={
f8(){var s="denise.pears",r=A.e([],t.xz),q=this.a
if(q.aX("ashworth.compact","accepted"))B.a.l(r,B.kc)
if(q.aX(s,"taken"))B.a.l(r,B.kg)
else if(q.aX(s,"left"))B.a.l(r,B.kd)
if(q.aX("sylvia.certificate","granted"))B.a.l(r,B.kf)
if(q.aX("residue.coal","cellar"))B.a.l(r,B.kb)
if(q.aX("telegram.08","read"))B.a.l(r,B.ka)
if(q.aX("truth.shawl","home"))B.a.l(r,B.k9)
if(q.aX("sowerby.paraffin","received"))B.a.l(r,B.ke)
if(q.aX("inspector.proclamation","acknowledged"))B.a.l(r,B.k8)
return r},
jM(a){var s=this.f8(),r=A.G(s),q=r.i("I<1>")
s=A.K(new A.I(s,r.i("n(1)").a(new A.qb(a)),q),q.i("p.E"))
return s}}
A.qb.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:33}
A.rC.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fM(e.a),c=t.N,b=t.P,a=A.q(c,b)
for(s=e.b,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.mx(q,r.b))}s=A.fM(e.r)
q=A.fM(e.w)
p=A.fM(e.x)
o=A.q(c,t.rW)
for(n=e.as,n=new A.J(n,A.r(n).i("J<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.R(l.b);i.m();){h=i.gn()
j.push(A.N(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.q(c,b)
for(m=e.at,m=new A.J(m,A.r(m).i("J<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.q(c,b)
for(m=e.ax,m=new A.J(m,A.r(m).i("J<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.N(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
mx(a,b){var s,r=A.fM(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fM(q.bQ(0,new A.rD(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gY(s))r.k(0,"_ambient",A.fM(s.bQ(0,new A.rE(),t.S,t.z)))
return r}}
A.rD.prototype={
$2(a,b){return new A.P(A.b(a),t.BX.a(b).B(),t.pr)},
$S:105}
A.rE.prototype={
$2(a,b){return new A.P(A.b(a),t.vw.a(b).B(),t.pr)},
$S:106}
A.eU.prototype={
B(){return A.N(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eT.prototype={
B(){return A.N(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.ik.prototype={
B(){var s=t.N
return A.N(["field",this.a,"value",this.b],s,s)}}
A.le.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.N(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eN.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gY(s))q.k(0,"effects",s)
return q}}
A.d7.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gY(s))q.k(0,"when",s)
return q}}
A.rF.prototype={
cq(){var s=0,r=A.bH(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$cq=A.bK(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ap(A.b2(A.c(A.c(v.G.window).fetch("res/text.json")),t.m),$async$cq)
case 6:n=b
j=t.N
s=7
return A.ap(A.b2(A.c(n.text()),j),$async$cq)
case 7:m=b
l=A.Gm(m)
i=J.aI(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aI(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aI(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aI(l,"documents")
i.toString
h.a(i)
i=J.aI(l,"street")
i.toString
h.a(i)
i=J.aI(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aI(l,"nights")
i.toString
h.a(i)
i=J.aI(l,"endings")
i.toString
o.w=h.a(i)
i=J.aI(l,"records")
i.toString
o.x=h.a(i)
i=J.aI(l,"cues")
i.toString
h.a(i)
i=J.aI(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aI(l,"reactions"))){g=J.aI(l,"reactions")
if(g==null)g=i.a(g)
g=A.aN(g,j,t.z)}else g=A.q(j,t.z)
o.Q=h.a(g)
if(i.b(J.aI(l,"variants"))){g=J.aI(l,"variants")
if(g==null)g=i.a(g)
g=A.aN(g,j,t.z)}else g=A.q(j,t.z)
o.as=h.a(g)
if(i.b(J.aI(l,"residues"))){g=J.aI(l,"residues")
i=g==null?i.a(g):g
j=A.aN(i,j,t.z)}else j=A.q(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.ak(e)
j=A.w(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bF(null,r)
case 1:return A.bE(p.at(-1),r)}})
return A.bG($async$cq,r)},
jL(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().da(0,new A.rG())
r=p.$ti
q=t.N
return A.wr(new A.cB(p,r.i("P<j,j>(1)").a(new A.rH()),r.i("cB<1,P<j,j>>")),q,q)}return null},
f9(a,b){var s=this.jL(a)
return s==null?null:s.h(0,b)},
jQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.h()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.e([],t.kv)
for(o=J.R(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.q(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.u(i.b))}B.a.l(p,new A.eN(A.u(m.h(0,"id")),A.u(m.h(0,"label")),A.u(m.h(0,"reply")),A.b6(k,n,n)))}if(p.length<2)return g
return new A.le(r,a,b,c,d,A.ai(p,t.Y))},
jP(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.aq(p)||o!==B.c.aq(o))return n
return new A.eU(B.c.aq(p),B.c.aq(o))},
jO(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.aq(p)||typeof o!="string"||typeof n!="string")return m
return new A.eT(B.c.aq(p),o,n)},
pG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.q(a5,t.ee),a7=A.q(a5,t.tQ),a8=A.q(a5,t.pG),a9=t.a,b0=A.q(a5,t.gt),b1=A.q(a5,t.sy),b2=A.q(a5,t.aS),b3=A.q(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.J(b4,A.r(b4).i("J<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.q(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dx(l,null):null
if(k==null||!q.b(m.b))continue
j=A.q(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.u(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.q(a3,r)
for(m=n.$ti.i("ci<1>"),l=new A.ci(n,n.r,n.e,m);l.m();){i=l.d
g=a1.jP(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.q(a3,s)
for(m=new A.ci(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jO(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.al(b4,b4.r,b4.e,A.r(b4).i("al<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jQ(A.u(d.h(0,"visitor")),B.c.aq(A.am(d.h(0,"day"))),A.u(d.h(0,"tier")),B.c.aq(A.am(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.al(b4,b4.r,b4.e,A.r(b4).i("al<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.q(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.u(r.b))}s=A.u(d.h(0,"id"))
b2.k(0,s,new A.d7(s,A.u(d.h(0,"target")),A.u(d.h(0,a2)),A.b6(b,a5,a5)))}b4=a1.at
b4===$&&A.h()
b4=new A.J(b4,A.r(b4).i("J<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.h()
b4=new A.J(b4,A.r(b4).i("J<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.R(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ik(A.u(a0.h(0,"field")),A.u(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rC(A.q(a3,a4),a6,a7,a8,A.q(a5,a9),A.q(a5,a9),A.q(a3,a9),A.q(a3,a9),A.q(a3,a9),A.q(a5,a9),A.q(a5,a9),A.q(a5,a9),b0,b1,b2,b3)}}
A.rG.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:107}
A.rH.prototype={
$1(a){t.AC.a(a)
return new A.P(A.u(a.a),A.u(a.b),t.q)},
$S:108}
A.ji.prototype={
bN(a,b,c){var s=B.b.bl(a),r=B.b.bl(c)
if(r.length===0)return""
if(b||this.a===B.bQ)return s.length===0?r:s+": "+r
if(this.a===B.bP)return r
return s.length===0?r:s+": "+r},
j7(a,b){return this.bN(a,!1,b)}}
A.wg.prototype={}
A.cM.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dN.prototype={
c9(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dN(q,p,o,n,m)},
nt(a){var s=null
return this.c9(s,s,s,a,s)},
nw(a){var s=null
return this.c9(s,s,s,s,a)},
np(a){var s=null
return this.c9(s,s,a,s,s)},
nn(a){var s=null
return this.c9(s,a,s,s,s)},
n8(a){var s=null
return this.c9(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.N(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mD.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:109}
A.mB.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:34}
A.mC.prototype={
$0(){return A.k(B.fW)},
$S:6}
A.mO.prototype={
bY(a,b){var s,r=this,q=r.e.j7(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aO(q)
A.b(A.c(v.G.window).setTimeout(A.zA(new A.mQ(r)),7000))},
aO(a){var s,r,q=this
if(!q.c||B.b.bl(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.b(A.c(v.G.window).setTimeout(A.zA(new A.mP(q,s)),4200))}}
A.mQ.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:111}
A.mP.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cv.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cN.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.di.prototype={
v(){return"AudioReverbMode."+this.b}}
A.dh.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dO.prototype={
cT(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dO(r,q,p,a==null?s.e:a)},
nm(a){return this.cT(null,null,a,null)},
nd(a){return this.cT(null,a,null,null)},
nr(a){return this.cT(null,null,null,a)},
nc(a){return this.cT(a,null,null,null)},
B(){var s=this
return A.N(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.n0.prototype={
$1$2(a,b,c){return B.a.aV(c.i("p<0>").a(a),new A.n1(b,c),new A.n2(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:112}
A.n1.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.n2.prototype={
$0(){return A.k(A.a5("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.nl.prototype={
f2(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.j7(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.no.prototype={
$1(a){return this.a.$0()},
$S:2}
A.ns.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nr.prototype={
$1(a){var s=A.eK(A.u(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.nq.prototype={
$1(a){A.u(a)
return a.length!==0&&!B.b.U(a,"brush-state-")},
$S:3}
A.dQ.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dR.prototype={
v(){return"BrushComponentState."+this.b}}
A.b4.prototype={
gmB(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bl(s.a).length===0||B.b.bl(s.c).length===0)throw A.d(B.fM)
if(s.e===B.c0&&s.b!==B.c_)throw A.d(B.fo)}}
A.nu.prototype={
bM(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.h()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cX(o+c,n)
l=new A.cX(s+p,n)
k=s-p
j=new A.cX(k,r-c)
i=new A.cX(k-c,r)
h=new A.cX(q-p,r)
g=new A.cX(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.fP(A.e([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fP(A.e([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
b5(a,b,c,d,e,f,g,h,i){return this.bM(a,b,c,d,e,!0,f,g,h,i)},
nG(a,b,c,d,e,f,g,h,i){return this.bM(a,b,14,c,d,e,f,g,h,i)},
nL(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.h()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ef()
s.c_(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aL()-0.5)*8
l=s.aL()
k=s.aL()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hL(a,b,c,d,e){var s,r,q=this.b
q===$&&A.h()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fO(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fO(0,0,c)
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
nJ(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.h()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.am(A.c(q.measureText(a.toUpperCase())).width)+70)
this.b5("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
nI(b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="rgba(12, 10, 14, 0.92)",b2="#f5f0e6"
if(!b5.r&&b5.b.length===0&&b5.d.length===0)return
s=Math.min(b4*0.85,780)
r=b4*0.5
q=b3*0.72
b0.b5(b2,2.5,16,b1,140,-0.05,s,r,q)
p=b5.a
if(p==null)p="VISITOR"
o=r-s*0.5
n=o+81
m=q-70
l=m-6
b0.bM(b2,2,6,"#d32f2f",34,!0,-0.12,180,n,l)
k=b0.b
k===$&&A.h()
k.save()
k.fillStyle="#f5f0e6"
k.font='bold 15px "Cinzel", serif'
k.textAlign="center"
k.textBaseline="middle"
k.shadowColor="rgba(0, 0, 0, 0.85)"
k.shadowBlur=4
k.fillText(p.toUpperCase(),n,l)
k.restore()
j=b5.gpt()
k.save()
k.fillStyle="#f5f0e6"
k.font='16px "Georgia", serif'
k.textAlign="left"
k.textBaseline="top"
b0.mA(k,j,o+32,m+32,s-64,24)
k.restore()
o=b5.d
i=o.length
if(i!==0){h=Math.min(b4*0.75,480)
g=m-i*46-12
for(m=h*0.5,f=b0.d,e=b5.f,d=b5.e,c=0;c<i;c=a){if(!(c<o.length))return A.f(o,c)
b=o[c]
a=c+1
a0=g+c*46+19
a1=e===c
a2=d===c
a3=!a1
a4=r+(!a3||a2?18:0)
a5=a4-m
B.a.l(f,new A.fo(c,a5,a0-19,h,38))
if(a2)a6="#d32f2f"
else a6=a1?"#1a1820":b1
a7=!a3||a2?"#c49a45":b2
b0.b5(a7,!a3||a2?2.5:1.5,8,a6,38,-0.06,h,a4,a0)
a8=a5+24
a3=!a2
b0.hL(!a3||a1,a,24,a8,a0)
k.save()
a9=!a3||a1?"#ffd54f":b2
k.fillStyle=a9
k.font='bold 15px "Cinzel", serif'
k.textAlign="left"
k.textBaseline="middle"
k.fillText(b,a8+22,a0)
k.restore()}}},
nH(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.f(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bM(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.h()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText("["+p.a+"] "+p.b,o,r)
m.restore()}},
nK(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="rgba(12, 10, 14, 0.92)",b6="#d32f2f",b7="#f5f0e6",b8="#c49a45",b9="#1a1820",c0="#8c887e",c1=c4.d
if(c1<=0.001)return
s=Math.sin(c1*3.141592653589793*0.5)
r=Math.min(c3*0.92,860)
q=Math.min(c2*0.88,620)
p=c3+r*0.6
o=p+(c3*0.5-p)*s
n=c2*0.5
c1=b4.b
c1===$&&A.h()
c1.save()
c1.fillStyle="rgba(10, 8, 12, "+A.w(0.75*s)+")"
c1.fillRect(0,0,c3,c2)
b4.b5(b6,3,18,b5,q,-0.025,r,o,n)
b4.nL(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
b4.b5(b7,2,8,b6,42,-0.06,Math.min(r*0.85,560),o,k)
c1.save()
c1.fillStyle="#f5f0e6"
c1.font='bold 16px "Cinzel", serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.shadowColor="rgba(0, 0, 0, 0.85)"
c1.shadowBlur=4
c1.fillText("\u25c6 SHADER LAB & POST-PROCESSING SUITE \u25c6",o,k)
c1.restore()
j=r-60
i=j/5
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bf[g]
e=c4.b===g
d=l+i*(g+0.5)
c=e?b8:b9
b=e?b7:c0
b4.bM(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
default:c=null}c1.save()
a=e?"#0c0a0e":b7
c1.fillStyle=a
c1.font='bold 12px "Cinzel", sans-serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.fillText(c,d,h)
c1.restore()}a0=h+36
if(c4.b===4){a1=a0+70+20
b4.b5(b8,2.5,10,b9,140,-0.02,r-80,o,a1)
c1.save()
c1.fillStyle="#c49a45"
c1.font='bold 14px "Cinzel", serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.fillText("ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [\u2190 / \u2192] TO CYCLE):",o,a1-35)
c1.fillStyle="#f5f0e6"
c1.font='bold 22px "Cinzel", serif'
c1.shadowColor="rgba(0, 0, 0, 0.85)"
c1.shadowBlur=6
c1.fillText(c4.e.gnE().toUpperCase(),o,a1+5)
c1.fillStyle="#ffd54f"
c1.font='13px "Georgia", serif'
c1.shadowBlur=0
c1.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c1.restore()}else{a2=c4.gcn()
for(a3=r-80,l=a3*0.5,g=0;g<a2.length;++g){a4=a2[g]
e=c4.c===g
a5=a0+g*52+22
a6=o+(e?12:0)
j=e?b9:b5
c=e?b8:c0
b4.bM(c,e?2.2:1,6,j,44,e,-0.02,a3,a6,a5)
if(e)b4.hL(!0,g+1,20,a6-l+20,a5)
c1.save()
a=e?"#ffd54f":b7
c1.fillStyle=a
c1.font='bold 14px "Cinzel", serif'
c1.textAlign="left"
c1.textBaseline="middle"
a7=e?38:18
c1.fillText(a4.b.toUpperCase(),a6-l+a7,a5)
a8=a6+l-20
if(a4.e){a9=a4.z
j=a8-37
c=a9?b6:"#0c0a0e"
b4.nG(a9?b7:c0,1.5,c,24,!1,-0.04,74,j,a5)
c1.fillStyle="#f5f0e6"
c1.font='bold 12px "Cinzel", sans-serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.fillText(a4.gj8(),j,a5)}else{b0=a8-80-80
c1.fillStyle="#0c0a0e"
j=b0-80
c=a5-4
c1.fillRect(j,c,160,8)
b=a4.f
b1=a4.r
b2=B.c.E((a4.y-b)/(b1-b),0,1)
a=e?b8:b6
c1.fillStyle=a
b3=160*b2
c1.fillRect(j,c,b3,8)
c1.fillStyle="#f5f0e6"
c1.fillRect(j+b3-3,a5-7,6,14)
c1.fillStyle="#8c887e"
c1.font='10px "Courier New", monospace'
c1.textAlign="right"
c1.textBaseline="middle"
c1.fillText(B.c.ae(b,1)+" ",j-4,a5)
c1.textAlign="left"
c1.fillText(" "+B.c.ae(b1,1),b0+80+4,a5)
a=e?"#ffd54f":b7
c1.fillStyle=a
c1.font='bold 13px "Courier New", monospace'
c1.textAlign="right"
c1.textBaseline="middle"
c1.fillText(a4.gj8(),a8,a5)}c1.restore()}}c1.save()
c1.fillStyle="#8c887e"
c1.font='12px "Cinzel", sans-serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Coarse  \u2022  [Q / E] Fine (1/5)  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,n+m-24)
c1.restore()
c1.restore()},
fP(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.h()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fO(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.h()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
mA(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.am(A.c(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)}}
A.fr.prototype={
gmQ(){var s,r,q,p,o=t.N
o=A.q(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aE(r)
o.k(0,q,p.gO(r)?"":p.gR(r))}return o},
bL(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.N(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.b(s)
r=n.h(0,j)
r.toString
A.bD(r)
q=n.h(0,i)
q.toString
A.bD(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fs(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.b(s)
r=n.h(0,j)
r.toString
A.bD(r)
q=n.h(0,i)
q.toString
A.bD(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gmQ()
return A.fs(l,null,m,r,p,o,s,q)},
dZ(a){var s=null
return this.bL(a,s,s,s,s,s)},
nj(a){var s=null
return this.bL(s,s,s,a,s,s)},
nk(a){var s=null
return this.bL(s,s,s,s,a,s)},
ng(a){var s=null
return this.bL(s,a,s,s,s,s)},
nh(a){var s=null
return this.bL(s,s,a,s,s,s)},
nx(a){var s=null
return this.bL(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.f9)
p=this.r
if(p.gJ().N(0,new A.nH()))throw A.d(B.fP)
if(p.gJ().N(0,new A.nI()))throw A.d(B.fD)
p=p.gaE()
o=A.r(p)
s=o.i("hw<p.E,j>")
r=s.i("I<p.E>")
q=A.K(new A.I(new A.hw(p,o.i("p<j>(p.E)").a(new A.nJ()),s),s.i("n(p.E)").a(new A.nK()),r),r.i("p.E"))
if(A.hL(q,A.G(q).c).a!==q.length)throw A.d(B.fc)},
B(){var s,r,q=this,p=t.N,o=A.q(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.at(r.b,!0,p))}return A.N(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nH.prototype={
$1(a){t.yx.a(a)
return J.we(a.b,new A.nG(a))},
$S:35}
A.nG.prototype={
$1(a){var s
A.u(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xW(a)
else s=!1
return s},
$S:3}
A.nI.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.we(a.b,B.dt.gav(B.dt))},
$S:35}
A.nJ.prototype={
$1(a){return t.a.a(a)},
$S:172}
A.nK.prototype={
$1(a){return A.u(a).length!==0},
$S:3}
A.nF.prototype={
$1(a){return typeof a=="string"},
$S:11}
A.dP.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.es.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dj.prototype={}
A.jB.prototype={
dU(a){var s=this
if(!s.a.r.T(a))return new A.dj(B.bX,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e1},
mX(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aO
if(!A.xW(a)){p.c=p.b=null
return new A.dj(B.bZ,B.du.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xN(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dj(B.aP,a+" is already bound to "+s)}return p.kT(a)},
eZ(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aO
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e2
case 1:s=A.wV(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.xc(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xp(r,k))
m.a=m.a.dZ(s)
break
case 0:s=A.wV(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gR(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.id(p,1,null,A.G(p).c)
o=p.$ti
p=new A.aU(p,p.gt(0),o.i("aU<a7.E>"))
o=o.i("a7.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xp(r,k)}else{r=s.h(0,j)
r.toString
r=A.xc(A.xp(r,k),q)}s.k(0,j,r)
m.a=m.a.dZ(s)
break}m.c=m.e=m.d=null
return B.bV},
kT(a){var s,r,q=this,p=q.b
if(p==null)return B.aO
s=A.wV(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.xc(r,a))
q.a=q.a.dZ(s)
q.b=null
return B.bV}}
A.hr.prototype={
kz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jB(f.w)
s=f.b
s.className=A.u(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.c(s.appendChild(A.np(a,B.eb,1)))
A.c(s.appendChild(A.D(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.D(a,"div",c,e)
f.ft(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.ft(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.ds(a,r,"invertX","Invert horizontal look")
f.ds(a,r,"invertY","Invert vertical look")
f.ds(a,r,"holdToInteract","Hold to interact")
A.c(s.appendChild(r))
q=A.D(a,"div",c,e)
for(p=B.j9.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fs(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mA(l)?"unbound":J.xP(l," / ")
j=A.c(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.c(a.createElement("span"))
i.textContent=n
A.c(j.appendChild(i))
h="change "+m+" binding"
g=A.dS(a,new A.b4("settings.controls.bind."+m,B.c_,n,h,B.p),new A.nD(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.c(j.appendChild(g))
A.c(q.appendChild(j))
o.k(0,m,g)}A.c(s.appendChild(q))
p=A.D(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.c(s.appendChild(p))
p=A.D(a,"div","pause-actions",e)
f.at=p
A.c(s.appendChild(p))
f.dP()
A.c(s.appendChild(A.dS(a,B.ec,new A.nE(f),e)))},
jm(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fS(this.x.mX(A.u(a.code)))},
fS(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aP?B.eg:B.p
p=o.Q.h(0,r)
if(p!=null)A.wi(p,q)}n=a.a
if(n===B.aP)o.mh()
else if(n===B.bY){n=o.x
n===$&&A.h()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dP()}else{o.dw()
o.ax=null}},
mh(){var s,r,q,p,o
this.dw()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.i4[r]
p=A.i(s.ownerDocument)
p.toString
o=q.b
A.c(s.appendChild(A.dS(p,new A.b4("settings.controls.resolve."+o,B.F,o,"resolve key binding conflict",B.p),new A.nC(this,q),null)))}},
dw(){var s,r=this.at
if(r==null)return
while(A.i(r.firstChild)!=null){s=A.i(r.firstChild)
s.toString
A.c(r.removeChild(s))}},
dP(){var s,r,q,p
for(s=this.Q,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.h()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mA(p)?"unbound":J.xP(p," / ")
r.textContent=q
A.wi(r,B.p)}},
ft(a,b,c,d,e,f){var s,r=A.D(a,"label","setting-row",null)
A.c(r.appendChild(A.D(a,"span",null,d)))
s=A.Br(a,new A.b4("settings.controls."+c,B.ee,d,null,B.p),f,e,new A.nA(this,c),1)
A.c(r.appendChild(s))
A.c(b.appendChild(r))
this.y.k(0,c,s)},
ds(a,b,c,d){var s=A.D(a,"label","setting-toggle",null),r=A.Bs(a,new A.b4("settings.controls."+c,B.ef,d,null,B.p),!1,new A.nB(this,c))
A.c(s.appendChild(r))
A.c(s.appendChild(A.D(a,"span",null,d)))
A.c(b.appendChild(s))
this.z.k(0,c,r)},
fQ(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seO(a){this.f=t.pf.a(a)},
sb7(a){this.r=t.Z.a(a)}}
A.nD.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.h()
s=n.dU(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bW){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.wi(q,B.c0)}p.dw()
return null},
$S:0}
A.nE.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nC.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.h()
return s.fS(r.eZ(this.b))},
$S:0}
A.nA.prototype={
$1(a){var s=this.a,r=s.w
s.fQ(this.b==="horizontalSensitivity"?r.nh(a):r.nx(a))},
$S:115}
A.nB.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.nj(a)
break A}if("invertY"===q){s=r.w.nk(a)
break A}s=r.w.ng(a)
break A}r.fQ(s)},
$S:8}
A.nL.prototype={
kA(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.c(o.appendChild(A.D(s,"h1","journal-title","credits")))
r=A.D(s,"p","credits-body",null)
p.f!==$&&A.L()
p.f=r
r.textContent="\u2014"
A.c(o.appendChild(r))
A.c(o.appendChild(A.D(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.D(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.nM(p)))
A.c(o.appendChild(q))}}
A.nM.prototype={
$1(a){return this.a.a8()},
$S:2}
A.nU.prototype={
kC(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","dialog")
n.setAttribute("aria-modal","true")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.D(a,o,"door-speaker",p)
q.b!==$&&A.L()
q.b=s
r=A.D(a,o,"door-line",p)
q.c!==$&&A.L()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(n.appendChild(s))
A.c(n.appendChild(r))
r=A.D(a,o,"door-choice-status",p)
q.d!==$&&A.L()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(n.appendChild(r))
r=A.D(a,o,"door-cite-list",p)
q.f!==$&&A.L()
q.f=r
s=A.D(a,o,"door-cite-result",p)
q.r!==$&&A.L()
q.r=s
A.c(n.appendChild(r))
A.c(n.appendChild(s))
s=A.D(a,"button","door-continue","continue")
q.e!==$&&A.L()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.nV(q)))
A.c(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.nW(q,a)))
A.c(A.i(a.body).appendChild(n))},
fh(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.h()
s.textContent=a
s=r.c
s===$&&A.h()
s.textContent=B.K.bN("",!0,b)
s=r.d
s===$&&A.h()
s.textContent=A.xZ(B.b6)
s=r.e
s===$&&A.h()
A.c(s.style).display="none"
s=r.f
s===$&&A.h()
s.textContent=""
s=r.r
s===$&&A.h()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")
s.focus()},
fi(a,b){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=B.K.bN("",!0,a)
p=q.d
p===$&&A.h()
p.textContent=""
p=q.e
p===$&&A.h()
s=A.c(p.style)
r=b?"none":""
s.display=r
r=q.r
r===$&&A.h()
r.textContent=""
if(!b)p.focus()},
kb(a){return this.fi(a,!1)},
kd(a,b){var s,r,q,p,o,n
t.DX.a(a)
s=this.e
s===$&&A.h()
s=A.c(s.style)
r=b==null
q=r?"none":""
s.display=q
q=A.e([],t.s)
for(s=a.length,p=0;p<a.length;a.length===s||(0,A.v)(a),++p){o=a[p]
n=o.b
q.push(b===o.a?n+", selected":n)}s=this.d
s===$&&A.h()
s.textContent=A.xZ(q)
if(r)this.a.focus()},
fj(a,b){var s=this.c
s===$&&A.h()
s.textContent=B.K.bN("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.h()
s.textContent=""
s=this.e
s===$&&A.h()
A.c(s.style).display=""
s.focus()},
ka(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.u7,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.c(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nX(o,this)
if(typeof o=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.hg()]=o
m.addEventListener("click",l)
A.c(s.appendChild(m))}},
soA(a){this.w=t.Z.a(a)},
soz(a){this.x=t.vR.a(a)}}
A.nV.prototype={
$1(a){var s
A.c(a)
s=this.a.w
return s==null?null:s.$0()},
$S:37}
A.nW.prototype={
$1(a){var s,r,q,p,o,n,m
A.c(a)
s=this.a
if(!s.y||A.u(a.code)!=="Tab")return
r=A.e([],t.sL)
q=s.e
q===$&&A.h()
if(A.u(A.c(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.h()
p=A.c(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.b(p.length);++o){n=A.i(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.i(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gR(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gX(r).focus()}}else if(m===B.a.gX(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gR(r).focus()}},
$S:118}
A.nX.prototype={
$1(a){var s
A.c(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:37}
A.o_.prototype={
kD(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.D(s,"h1","journal-title",null)
o.f!==$&&A.L()
o.f=r
q=A.D(s,"div","ending-copy",null)
o.r!==$&&A.L()
o.r=q
A.c(n.appendChild(r))
A.c(n.appendChild(q))
p=A.D(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.o0(o)))
A.c(n.appendChild(p))},
kc(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o=b[p]
n=A.c(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.c(s.appendChild(n))}m.bR()},
soD(a){this.w=t.Z.a(a)}}
A.o0.prototype={
$1(a){var s=this.a
s.a8()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.or.prototype={
bD(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.at(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
jB(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
o7(a){var s,r,q,p=this,o=null,n=p.e
if(n.length===0)return!1
if(a==="Space"){s=B.a.eH(n,new A.os())
if(s!==-1){p.dg(s)
return!0}}if(B.b.U(a,"Digit")){r=A.dx(B.b.b1(a,5),o)
q=r!=null&&r>=1&&r<=p.e.length?r-1:o}else if(B.b.U(a,"Numpad")){r=A.dx(B.b.b1(a,6),o)
q=r!=null&&r>=1&&r<=p.e.length?r-1:o}else q=o
if(q!=null){p.dg(q)
return!0}return!1},
dg(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.f(r,a)
s.$2(a,r[a])}},
o9(a,b,c){var s,r,q
t.vp.a(c)
this.r=null
for(s=c.length,r=0;r<s;++r){q=c[r]
if(q.c8(0,a,b)){this.r=q.b
break}}},
o8(a,b,c){var s,r,q
t.vp.a(c)
for(s=c.length,r=0;r<s;++r){q=c[r]
if(q.c8(0,a,b)){this.dg(q.b)
return!0}}return!1},
soy(a){this.y=t.dt.a(a)}}
A.os.prototype={
$1(a){A.u(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.ot.prototype={}
A.dq.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cP.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cQ.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dr.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dp.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.ds.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.ce.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.fy.prototype={
bi(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.wk(n,b==null?s.x:b,l,r,o,q,m,p)},
na(a){var s=null
return this.bi(s,a,s,s,s,s,s,s)},
ni(a){var s=null
return this.bi(s,s,s,a,s,s,s,s)},
no(a){var s=null
return this.bi(s,s,s,s,s,a,s,s)},
nu(a){var s=null
return this.bi(s,s,s,s,s,s,s,a)},
nl(a){var s=null
return this.bi(s,s,s,s,a,s,s,s)},
n9(a){var s=null
return this.bi(a,s,s,s,s,s,s,s)},
ns(a){var s=null
return this.bi(s,s,s,s,s,s,a,s)},
ne(a){var s=null
return this.bi(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.N(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.ou.prototype={
$1$2(a,b,c){var s
A.Ai(c,t.Ct,"T","call")
c.i("p<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.d(A.a5("invalid gameplay setting: "+a,null,null))
return B.a.aV(b,new A.ov(s,c),new A.ow(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:119}
A.ov.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("n(0)")}}
A.ow.prototype={
$0(){return A.k(A.a5("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cw.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dY.prototype={
bK(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dY(s.a,r,q,p,o,n,m)},
dY(a){var s=null
return this.bK(a,s,s,s,s,s)},
hH(a){var s=null
return this.bK(s,a,s,s,s,s)},
hI(a){var s=null
return this.bK(s,s,s,a,s,s)},
nq(a){var s=null
return this.bK(s,s,s,s,a,s)},
nf(a){var s=null
return this.bK(s,s,a,s,s,s)},
nv(a){var s=null
return this.bK(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.iT,q))throw A.d(A.a5("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.ib,q))throw A.d(A.a5("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.iW,q))throw A.d(A.a5("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.iQ,q))throw A.d(A.a5("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.N(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oI.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:38}
A.oJ.prototype={
$0(){return A.k(B.ft)},
$S:6}
A.oK.prototype={
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.oC.prototype={}
A.oD.prototype={}
A.hC.prototype={
kE(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.c(l.appendChild(A.D(a,"h1","journal-title","Graphics")))
A.c(l.appendChild(A.D(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.D(a,"div","settings-grid",n)
r=t.N
o.c0(a,s,"preset","quality preset",A.N(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.c0(a,s,"renderScale","render scale",A.N(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.c0(a,s,"frameTarget","frame target",A.N(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.c0(a,s,"antialiasing","anti-aliasing",A.N(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.c0(a,s,"textureQuality","texture quality",A.N(["high","High","medium","Medium","low","Low"],r,r))
q=A.D(a,"label","setting-toggle",n)
r=A.c(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.Z(new A.oG(o)))
r=o.x
r.toString
A.c(q.appendChild(r))
A.c(q.appendChild(A.D(a,"span",n,"Dynamic resolution")))
A.c(s.appendChild(q))
A.c(l.appendChild(s))
r=A.D(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.c(l.appendChild(r))
p=A.D(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.Z(new A.oH(o)))
A.c(l.appendChild(p))},
c0(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.D(a,"label","setting-row",null)
A.c(s.appendChild(A.D(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.J(e,A.r(e).i("J<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.c(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.c(r.appendChild(o))}r.addEventListener("change",A.Z(new A.oF(this,r,c)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.w.k(0,c,r)},
fV(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
fg(a,b,c){var s,r,q=this
t.a.a(c)
q.z=a
s=q.w
r=s.h(0,"preset")
if(r!=null)r.value=a.b.b
r=s.h(0,"renderScale")
if(r!=null)r.value=a.c
r=s.h(0,"frameTarget")
if(r!=null)r.value=a.e
r=s.h(0,"antialiasing")
if(r!=null)r.value=a.f
s=s.h(0,"textureQuality")
if(s!=null)s.value=a.r
s=q.x
if(s!=null)s.checked=a.d
s=q.y
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a5(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seO(a){this.f=t.CA.a(a)},
sb7(a){this.r=t.Z.a(a)}}
A.oG.prototype={
$1(a){var s=this.a
s.fV(s.z.hH(A.Q(s.x.checked)))},
$S:1}
A.oH.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a8()},
$S:1}
A.oF.prototype={
$1(a){var s,r=A.u(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.z.hI(B.a.ao(B.cM,new A.oE(r)))
break A}if("renderScale"===p){s=q.z.nq(r)
break A}if("frameTarget"===p){s=q.z.nf(r)
break A}if("antialiasing"===p){s=q.z.dY(r)
break A}if("textureQuality"===p){s=q.z.nv(r)
break A}s=q.z
break A}q.fV(s)},
$S:1}
A.oE.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:38}
A.jj.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.cc.prototype={}
A.oL.prototype={
jK(a,b,c){if(c)return B.is
if(b&&a!=null)return A.e([new A.cc("E","Examine "+a,!0),new A.cc("TAB","Journal",!1),new A.cc("CAPS","Shader Lab",!1)],t.sa)
return B.j5}}
A.oM.prototype={
kF(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.c(p.appendChild(A.D(s,"h1","journal-title","house notes")))
A.c(p.appendChild(A.D(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.c(p.appendChild(A.D(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.D(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.oN(this)))
A.c(p.appendChild(r))}}
A.oN.prototype={
$1(a){return this.a.a8()},
$S:2}
A.pm.prototype={
bR(){var s,r=this
r.ks()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fD(r.CW,s)
r.m9()
r.ha()},
l_(){var s,r=this,q=r.a,p=A.D(q,"div","page-turn",null),o=A.D(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.pn(r)))
s=A.D(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.po(r)))
q=A.D(q,"span","right-day-label",null)
r.Q!==$&&A.L()
r.Q=q
A.c(p.appendChild(o))
A.c(p.appendChild(q))
A.c(p.appendChild(s))
return p},
hw(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fD(s.CW+a,r)
s.ha()},
fD(a,b){if(a<1)return 1
if(a>b)return b
return a},
m9(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.fa(),r=s.length,q=A.u7,p=j.a,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
m=B.a.gX(n.c).p(0)
l=A.c(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.pp(j,n,l)
if(typeof m=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.hg()]=m
l.addEventListener("click",k)
A.c(i.appendChild(l))}},
ha(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.r(p).i("al<2>"),n=new A.al(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.V(r,new A.pq())
j.h9(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.al(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.V(s,new A.pr())
j.h9(i,s)
k=B.c.E(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.c(i.style).setProperty("width",B.c.ae(k*100,1)+"%")},
h9(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.v)(b),++r)A.c(a.appendChild(this.ls(b[r])))},
ls(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.D(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.c(k.createElement("div"))
n.className=q
n.textContent=o
A.c(n.style).setProperty("--shake",B.c.p(p.b))
A.c(j.appendChild(n))}m=a.r
if(m!=null){l=this.lJ(m,!1)
l.className=A.u(l.className)+" margin"
A.c(j.appendChild(l))}return j},
lJ(a,b){var s=b?"hand-line struck":"hand-line",r=A.D(this.a,"div",s,a.p(0))
A.c(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.pn.prototype={
$1(a){return this.a.hw(-1)},
$S:2}
A.po.prototype={
$1(a){return this.a.hw(1)},
$S:2}
A.pp.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pq.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.pr.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.cX.prototype={}
A.fo.prototype={
c8(a,b,c){var s=this,r=s.c,q=!1
if(b>=r)if(b<=r+s.e){r=s.d
r=c>=r&&c<=r+s.f}else r=q
else r=q
return r}}
A.q_.prototype={
gpt(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.F(s,0,B.c.aq(B.c.E(r*q,0,r)))}}
A.hV.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.c(s.style).setProperty("--panel-fade","0.25s")
A.c(A.i(this.a.body).appendChild(s))},
bR(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.u(n.className),"open"))return
s=$.q0
if(s!=null&&s!==o)s.a8()
$.q0=o
r=o.a
o.d=A.i(r.activeElement)
A.pj(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.gm1())
o.e=q
r.addEventListener("keydown",q)
p=A.zy(n)
if(p.length!==0)B.a.gR(p).focus()
else n.focus()},
a8(){var s,r,q=this,p=q.b
if(!B.b.q(A.u(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.q0===q)$.q0=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jm(a){},
m2(a){A.c(a)
this.jm(a)
if(A.Q(a.defaultPrevented))return
if(A.u(a.code)==="Escape"){a.preventDefault()
this.a8()
return}if(A.u(a.code)==="Tab")this.mo(a)},
mo(a){var s,r=A.zy(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gR(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gX(r).focus()}}else if(s===B.a.gX(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gR(r).focus()}},
sb_(a){this.c=t.Z.a(a)}}
A.bi.prototype={
v(){return"PauseReason."+this.b}}
A.ck.prototype={
v(){return"PausePage."+this.b}}
A.e4.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dw.prototype={
B(){var s,r=A.q(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a1(a,b){if(b==null)return!1
return b instanceof A.dw&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gI(a){return A.cD(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e3.prototype={
ghE(){var s=this.a
return s.length===1&&B.a.gR(s).a===B.bl},
B(){var s=A.q(t.N,t.X),r=this.a,q=A.G(r),p=q.i("U<1,Y<j,F?>>")
r=A.K(new A.U(r,q.i("Y<j,F?>(1)").a(new A.q5()),p),p.i("a7.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.G(r)
p=q.i("U<1,j>")
r=A.K(new A.U(r,q.i("j(1)").a(new A.q6()),p),p.i("a7.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.q5.prototype={
$1(a){return t.oP.a(a).B()},
$S:121}
A.q6.prototype={
$1(a){return t.wJ.a(a).b},
$S:122}
A.c0.prototype={}
A.q4.prototype={
jn(a){var s,r=this
if(r.a.ghE())return new A.c0(B.Z,r.a,null)
s=r.a
s=new A.e3(B.iS,s.b,a)
r.a=s
return new A.c0(B.dd,s,"pause.resume")},
mL(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gX(p)
q=r.a.a
q=B.a.aR(q,0,q.length-1)
p=r.a
p=new A.e3(q,p.b,p.c)
r.a=p
return new A.c0(B.de,p,s.c)}if(q.ghE()&&r.a.b.length===0)return r.ct()
return new A.c0(B.Z,r.a,null)},
ct(){var s=this.a
if(s.a.length===0)return new A.c0(B.Z,s,null)
if(s.b.length!==0)return new A.c0(B.Z,s,null)
this.a=B.bk
return new A.c0(B.df,B.bk,s.c)},
oT(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c0(B.Z,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.e3(s.a,r,q.a.c)
q.a=s
return new A.c0(B.dd,s,null)},
nD(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c0(B.Z,o.a,null)
s=o.a
r=s.b
q=A.G(r)
p=q.i("I<1>")
r=A.K(new A.I(r,q.i("n(1)").a(new A.q7(a)),p),p.i("p.E"))
q=o.a.c
r=new A.e3(s.a,r,q)
o.a=r
return new A.c0(B.k7,r,q)},
lh(a){var s
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
A.q7.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:123}
A.cE.prototype={
v(){return"PauseRootAction."+this.b}}
A.q8.prototype={
bn(a,b,c,d){var s=B.jl.h(0,c)
s.toString
A.c(b.appendChild(A.dS(a,new A.b4(s,B.F,d,null,B.p),new A.q9(this,c),null)))},
soO(a){this.f=t.Z.a(a)},
soQ(a){this.r=t.Z.a(a)},
soB(a){this.w=t.Z.a(a)},
soP(a){this.x=t.Z.a(a)},
soG(a){this.y=t.Z.a(a)},
soC(a){this.z=t.Z.a(a)},
sb7(a){this.Q=t.Z.a(a)}}
A.q9.prototype={
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
A.bQ.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.qm.prototype={
k9(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bN("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qU.prototype={
kK(a){var s,r,q,p,o,n=this.b
n.className=A.u(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.c(n.appendChild(A.np(a,B.ea,1)))
A.c(n.appendChild(A.D(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.D(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.it[r]
p=B.d_.h(0,q)
p.toString
o=B.cZ.h(0,q)
o.toString
A.c(s.appendChild(A.dS(a,new A.b4(o,B.F,p,p+" settings",B.p),new A.qV(this,q),null)))}A.c(s.appendChild(A.dS(a,B.e9,new A.qW(this),null)))
A.c(n.appendChild(s))},
sox(a){this.f=t.hQ.a(a)},
sb7(a){this.r=t.Z.a(a)}}
A.qV.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qW.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fJ.prototype={
kL(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.d_.h(0,d))+" settings",a=h.b
a.className=A.u(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.c(a.appendChild(A.np(a0,new A.b4("settings."+(s==null?f:s)+".heading",B.ap,b,g,B.p),2)))
A.c(a.appendChild(A.D(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.D(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.rh(h)),p=B.a.gu(B.C),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.c(r.appendChild(h.lI(a0,m,l,n==null?1:n,k)))}A.c(a.appendChild(r))
j=A.D(a0,"div",e,g)
for(s=s.a(new A.ri(h)),q=B.a.gu(B.C),o=new A.T(q,s,o);o.m();)A.c(j.appendChild(h.mn(a0,q.gn())))
A.c(a.appendChild(j))
if(d===B.H)A.c(a.appendChild(h.kY(a0)))
if(d===B.I)A.c(a.appendChild(h.kX(a0)))
if(d===B.Y)A.c(a.appendChild(h.kZ(a0)))
i=A.D(a0,"div",e,g)
for(s=t.pz.a(h.glA()),q=B.a.gu(B.iU),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.c(i.appendChild(A.dS(a0,new A.b4("settings."+o+".reset."+n,B.F,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.rj(h,p),g)))}s=c?g:d.b
A.c(i.appendChild(A.dS(a0,new A.b4("settings."+(s==null?f:s)+".reset.all",B.F,"reset all settings","restore all settings to defaults",B.eh),new A.rk(h),g)))
A.c(a.appendChild(i))
d=c?g:d.b
A.c(a.appendChild(A.dS(a0,new A.b4("settings."+(d==null?f:d)+".back",B.F,"return","return to settings categories",B.p),new A.rl(h),g)))},
kX(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.D(a,"div","settings-grid",j),f=k.dq(a,g,"reducedMotion","reduced motion (system default)"),e=k.dq(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dq(a,g,"captions","non-speech captions"),c=A.D(a,"label",h,j)
A.c(c.appendChild(A.D(a,"span",j,"UI scale")))
s=A.c(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.rb(k,s)))
A.c(c.appendChild(s))
A.c(g.appendChild(c))
r=A.D(a,"label",h,j)
A.c(r.appendChild(A.D(a,"span",j,"screen-reader verbosity")))
q=A.c(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bd[p]
n=A.c(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.c(q.appendChild(n))}q.addEventListener("change",A.Z(new A.rc(k,q)))
A.c(r.appendChild(q))
A.c(g.appendChild(r))
l=A.D(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.rd(k)))
A.c(g.appendChild(l))
k.k3.L(0,A.N(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
dq(a,b,c,d){var s=A.D(a,"label","setting-toggle",null),r=A.c(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.qX(this,r,c)))
A.c(s.appendChild(r))
A.c(s.appendChild(A.D(a,"span",null,d)))
A.c(b.appendChild(s))
return r},
fc(a){var s,r
this.k2=a
s=this.k3
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.c.p(r==null?1:r)}s=this.k4.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a7:r).b}},
kZ(a){var s,r,q=this,p="confirmations",o=A.D(a,"div","settings-grid",null)
q.bo(a,o,"interactionMode","interaction mode",B.bc,t.bK)
q.bo(a,o,"promptDensity","prompt density",B.bg,t.dn)
q.bo(a,o,"textPacing","text pacing",B.be,t.j_)
q.bo(a,o,"journalLayout","journal layout",B.b5,t.gm)
q.bo(a,o,p,p,B.b1,t.aJ)
q.bo(a,o,"saveFeedback","save feedback",B.b7,t.mx)
q.bo(a,o,"focusLossBehavior","when the window loses focus",B.aB,t.x)
s=A.D(a,"label","setting-toggle",null)
r=A.c(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.Z(new A.re(q,r)))
A.c(s.appendChild(r))
A.c(s.appendChild(A.D(a,"span",null,"contextual reminders")))
A.c(o.appendChild(s))
q.id=r
return o},
bo(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Ai(f,t.Ct,"T","_addGameplaySelect")
f.i("C<0>").a(e)
s=A.D(a,"label","setting-row",null)
A.c(s.appendChild(A.D(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.c(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.c(r.appendChild(n))}r.addEventListener("change",A.Z(new A.r9(this,c,r)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.go.k(0,c,r)},
jT(a){var s,r,q,p,o,n,m,l,k,j,i,h
this.k1=a
for(s=this.go,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0),r=a.w.b,q=a.r.b,p=a.f.b,o=a.e.b,n=a.d.b,m=a.c.b,l=a.b.b;s.m();){k=s.d
j=k.b
i=k.a
A:{if("interactionMode"===i){h=l
break A}if("promptDensity"===i){h=m
break A}if("textPacing"===i){h=n
break A}if("journalLayout"===i){h=o
break A}if("confirmations"===i){h=p
break A}if("saveFeedback"===i){h=q
break A}h=r
break A}j.value=h}s=this.id
if(s!=null)s.checked=a.x},
kY(a){var s,r,q=this,p=A.D(a,"div","settings-grid",null),o=t.N,n=A.q(o,o)
for(s=0;s<4;++s){r=B.bb[s].b
n.k(0,r,r)}q.cA(a,p,"output","output",n)
n=A.q(o,o)
for(s=0;s<3;++s){r=B.b4[s].b
n.k(0,r,r)}q.cA(a,p,"dynamicRange","dynamic range",n)
n=A.q(o,o)
for(s=0;s<2;++s){r=B.b3[s].b
n.k(0,r,r)}q.cA(a,p,"reverb","room effect",n)
o=A.q(o,o)
for(s=0;s<2;++s){n=B.b2[s].b
o.k(0,n,n)}q.cA(a,p,"ducking","voice intelligibility",o)
return p},
cA(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.D(a,"label","setting-row",null)
A.c(s.appendChild(A.D(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.J(e,A.r(e).i("J<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.c(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.c(r.appendChild(o))}r.addEventListener("change",A.Z(new A.r1(this,c,r)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.p1.k(0,c,r)},
jS(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.J(s,A.r(s).i("J<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fX(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.X===r){s=a.c===B.aE
break A}if(B.I===r){s=a.c===B.a1
break A}if(B.H===r){s=a.c===B.E
break A}s=!1
break A}return s},
lB(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.X===s){r=a===B.aE
break A}if(B.I===s){r=a===B.a1
break A}if(B.H===s){r=a===B.E
break A}r=!1
break A}return r},
mn(a,b){var s=this,r=A.D(a,"label","setting-toggle",null),q=A.c(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.rg(s,b,q)))
A.c(r.appendChild(q))
A.c(r.appendChild(A.D(a,"span",null,b.b)))
return r},
lI(a,b,c,d,e){var s,r,q=this,p=A.D(a,"label","setting-row",null),o=A.D(a,"span",null,c),n=A.c(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.D(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.rf(q,n,r,b)))
A.c(p.appendChild(o))
A.c(p.appendChild(n))
A.c(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aW(e,d))
return p},
fe(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kp
r=B.c.E(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aN(r*100)+"%"},
soI(a){this.r=t.DI.a(a)},
soK(a){this.w=t.xl.a(a)},
soJ(a){this.x=t.xl.a(a)},
soE(a){this.y=t.DI.a(a)},
soH(a){this.z=t.xl.a(a)},
soS(a){this.Q=t.xl.a(a)},
soN(a){this.as=t.Ci.a(a)},
soM(a){this.at=t.Z.a(a)},
sb7(a){this.ax=t.Z.a(a)},
sow(a){this.ay=t.kC.a(a)},
soF(a){this.ch=t.hq.a(a)},
sov(a){this.CW=t.Cv.a(a)},
soL(a){this.cx=t.Z.a(a)}}
A.rh.prototype={
$1(a){t.gl.a(a)
return a.d===B.Q&&this.a.fX(a)},
$S:21}
A.ri.prototype={
$1(a){t.gl.a(a)
return a.d===B.ag&&this.a.fX(a)},
$S:21}
A.rj.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.rk.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.rl.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a8()},
$S:0}
A.rb.prototype={
$1(a){var s=this.a,r=s.k2,q=A.eK(A.u(this.b.value))
r=r.nw(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rc.prototype={
$1(a){var s=this.a,r=s.k2.nt(B.a.ao(B.bd,new A.ra(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.ra.prototype={
$1(a){return t.mq.a(a).b===A.u(this.a.value)},
$S:34}
A.rd.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qX.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k2.np(r)
break A}if("photosensitivitySafe"===p){s=q.k2.nn(r)
break A}if("captions"===p){s=q.k2.n8(r)
break A}s=q.k2
break A}q.k2=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.re.prototype={
$1(a){var s=this.a,r=s.k1.na(A.Q(this.b.checked))
s.k1=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r9.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k1.ni(B.a.ao(B.bc,new A.r2(r.c)))
break A}if("promptDensity"===p){s=q.k1.no(B.a.ao(B.bg,new A.r3(r.c)))
break A}if("textPacing"===p){s=q.k1.nu(B.a.ao(B.be,new A.r4(r.c)))
break A}if("journalLayout"===p){s=q.k1.nl(B.a.ao(B.b5,new A.r5(r.c)))
break A}if("confirmations"===p){s=q.k1.n9(B.a.ao(B.b1,new A.r6(r.c)))
break A}if("saveFeedback"===p){s=q.k1.ns(B.a.ao(B.b7,new A.r7(r.c)))
break A}s=q.k1.ne(B.a.ao(B.aB,new A.r8(r.c)))
break A}q.k1=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.r2.prototype={
$1(a){return t.bK.a(a).b===A.u(this.a.value)},
$S:126}
A.r3.prototype={
$1(a){return t.dn.a(a).b===A.u(this.a.value)},
$S:127}
A.r4.prototype={
$1(a){return t.j_.a(a).b===A.u(this.a.value)},
$S:128}
A.r5.prototype={
$1(a){return t.gm.a(a).b===A.u(this.a.value)},
$S:129}
A.r6.prototype={
$1(a){return t.aJ.a(a).b===A.u(this.a.value)},
$S:130}
A.r7.prototype={
$1(a){return t.mx.a(a).b===A.u(this.a.value)},
$S:131}
A.r8.prototype={
$1(a){return t.x.a(a).b===A.u(this.a.value)},
$S:40}
A.r1.prototype={
$1(a){var s,r=this,q=r.a,p=q.ok,o=r.b
A:{if("output"===o){s=p.nm(B.a.ao(B.bb,new A.qY(r.c)))
break A}if("dynamicRange"===o){s=p.nd(B.a.ao(B.b4,new A.qZ(r.c)))
break A}if("reverb"===o){s=p.nr(B.a.ao(B.b3,new A.r_(r.c)))
break A}s=p.nc(B.a.ao(B.b2,new A.r0(r.c)))
break A}q.ok=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qY.prototype={
$1(a){return t.xs.a(a).b===A.u(this.a.value)},
$S:133}
A.qZ.prototype={
$1(a){return t.EL.a(a).b===A.u(this.a.value)},
$S:134}
A.r_.prototype={
$1(a){return t.gc.a(a).b===A.u(this.a.value)},
$S:135}
A.r0.prototype={
$1(a){return t.ul.a(a).b===A.u(this.a.value)},
$S:136}
A.rg.prototype={
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
A.rf.prototype={
$1(a){var s,r,q=this,p=A.eK(A.u(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aN(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bx.prototype={
v(){return"SettingCategory."+this.b}}
A.i6.prototype={
v(){return"SettingKind."+this.b}}
A.aY.prototype={
d8(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a5(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a5(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bW(a))throw A.d(A.a5(r.a+" must be boolean",q,q))
break}}}
A.ro.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:21}
A.rp.prototype={
$0(){return A.k(A.m("unknown setting: "+this.a))},
$S:6}
A.rm.prototype={
kM(a,b){var s,r=this.a
if(r!==1)throw A.d(A.z("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rn(s.a).d8(s.b)}},
cv(a){var s=this.b.h(0,a)
return s==null?A.k(A.m("setting missing from profile: "+a)):s},
B(){return A.N(["version",this.a,"values",this.b],t.N,t.K)}}
A.rq.prototype={
pc(a){var s,r,q=A.fB(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dA(q,1)
this.mc(a)},
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
mc(a){var s,r,q=A.fB(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dA(q,1)}}
A.rz.prototype={
kN(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.c(i.appendChild(A.D(a,"h2","journal-title","Rest")))
A.c(i.appendChild(A.D(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.D(a,"div","entry-picker",null)
for(r=A.u7,q=0;q<2;++q){p=B.cL[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cR[n]
l=A.c(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rA(this,p,m)
if(typeof k=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.hg()]=k
l.addEventListener("click",j)
A.c(s.appendChild(l))}}A.c(i.appendChild(s))},
soR(a){this.f=t.nf.a(a)}}
A.rA.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a8()},
$S:1}
A.ct.prototype={}
A.mL.prototype={
ps(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.G(s)
q=new A.U(s,r.i("j(1)").a(new A.mN()),r.i("U<1,j>")).bC(0)
r=this.b
r.H(0)
s=J.Bf(a,t.N)
p=s.$ti
r.L(0,new A.I(s,p.i("n(p.E)").a(q.gav(q)),p.i("I<p.E>")))},
nN(a,b){var s,r,q,p,o,n=A.e([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mN.prototype={
$1(a){return t.bC.a(a).a},
$S:137}
A.mM.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:138}
A.lb.prototype={
gca(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
oh(a){return this.c.q(0,t.L.a(a))},
f_(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a9(0,g.gn6())||!a.a.a9(0,new A.t5(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fZ(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aI){m=s.d
if(m<o.length){n=n===B.a5
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ac}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.f(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.t6(s))
else k=!1
if(k)return!1
j=new A.la(r,g,A.ai(o,t.AP),B.a5)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.H(0)
g.L(0,a.a)
g=i.c
g.H(0)
g.L(0,h)
i.r=j
return!0},
hC(a){var s=this.a,r=A.r(s).i("ad<1>"),q=r.i("I<p.E>")
s=A.K(new A.I(new A.ad(s,r),r.i("n(p.E)").a(new A.t0(a)),q),q.i("p.E"))
B.a.V(s,new A.t1())
return s},
dU(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.my
s=m.a.h(0,a)
if(s==null)return B.mz
r=B.d.W(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bM:B.am
o=p===B.am&&m.x.q(0,q)&&s.T(B.bN)?B.bN:p
if(s.T(o))n=o
else n=s.T(B.am)?B.am:B.bM
r=s.h(0,n)
r.toString
m.r=new A.la(a,n,A.ai(m.fZ(a,n,r),t.AP),B.a5)
m.gca()
r=m.r
r.toString
return new A.l9(r)},
n0(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dO
if(n.d!==B.a5)return B.mw
n.e=a
s=a===B.ac
n.d=s?B.aI:B.ak
r=this.f
q=s?B.dM:B.me
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dF(q,o,p,a,null))
if(a===B.au)B.a.l(r,new A.dF(B.mh,o,p,a,null))
if(s)this.hb(n)
return new A.l7(n)},
mG(){var s,r=this.r
if(r==null)return B.dO
s=r.d
if(s!==B.ak&&s!==B.al)return B.mx
if(this.gca()!=null&&r.w==null)return new A.ba(new A.bn(B.a6,"The visitor is waiting for an answer."))
r.d=B.al
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aI
this.hb(r)
return new A.ij(r,!0)}return new A.ij(r,!1)},
n1(a){var s,r,q=this.r,p=this.gca(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ak&&o!==B.al}if(o)return B.mv
o=p.f
s=A.G(o)
r=A.br(new A.I(o,s.i("n(1)").a(new A.t3(a)),s.i("I<1>")),t.Y)
if(r==null)return B.mA
q.w=r.a
return new A.l8(q,p,r)},
n2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ak&&s!==B.al}else s=!0
if(s)return i
r=h.gbt()
if(r==null)return i
s=t.N
q=A.q(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cQ
p=J.R(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b6(q,s,s)
m=c.m5(!0,!0,o,new A.td(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aJ){B.a.l(this.f,new A.dF(B.mg,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fB(B.a.gX(j.c).a,s,s)
s.L(0,q)
p.mD(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dP)if(k===B.bO){s=n.b
s=s.gY(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dF(B.mf,o,p.b,i,l))}}return m},
hb(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fZ(a,b,c){var s,r
t.cf.a(c)
s=A.e([],t.Fi)
for(r=J.R(c);r.m();)s.push(this.lK(a,b,r.gn()))
return s},
lK(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.G(p)
s=A.br(new A.I(p,r.i("n(1)").a(new A.rZ(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.c5(q,s.c,c.c)},
sko(a){this.x=t.Q.a(a)}}
A.t5.prototype={
$1(a){var s=this.a.a
return new A.ad(s,A.r(s).i("ad<1>")).N(0,new A.t4(A.u(a)))},
$S:3}
A.t4.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:20}
A.t6.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:15}
A.t0.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:20}
A.t1.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:140}
A.t3.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.t2.prototype={
$0(){return A.e([],t.jV)},
$S:141}
A.rZ.prototype={
$1(a){return t.aS.a(a).d.gJ().a9(0,new A.rY(this.a))},
$S:142}
A.rY.prototype={
$1(a){t.q.a(a)
return this.a.y.aX(a.a,a.b)},
$S:143}
A.t_.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:144}
A.lc.prototype={}
A.lI.prototype={}
A.vq.prototype={
$1(a){return B.b.U(A.u(a),"off.")},
$S:3}
A.bO.prototype={
v(){return"DoorChoice."+this.b}}
A.c3.prototype={
v(){return"VisitPhase."+this.b}}
A.c4.prototype={
v(){return"VisitTier."+this.b}}
A.eb.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dF.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d6.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bn.prototype={
a1(a,b){if(b==null)return!1
return b instanceof A.bn&&b.a===this.a&&b.b===this.b},
gI(a){return A.cD(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c5.prototype={
a1(a,b){if(b==null)return!1
return b instanceof A.c5&&b.a===this.a&&b.b===this.b},
gI(a){return A.cD(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bS.prototype={
a1(a,b){var s=this
if(b==null)return!1
return b instanceof A.bS&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gI(a){var s=this
return A.cD(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.N(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.ld.prototype={
B(){var s,r,q,p=this.a
p=A.K(p,A.r(p).c)
B.a.Z(p)
s=this.b
r=A.r(s)
q=r.i("dm<1,Y<j,@>>")
s=A.K(new A.dm(s,r.i("Y<j,@>(1)").a(new A.rX()),q),q.i("p.E"))
r=this.c
return A.N(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rX.prototype={
$1(a){return t.L.a(a).B()},
$S:145}
A.jk.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
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
$S:146}
A.mJ.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:147}
A.mK.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:148}
A.la.prototype={
gbt(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.t7.prototype={}
A.ba.prototype={}
A.l9.prototype={}
A.l7.prototype={}
A.ij.prototype={}
A.l8.prototype={}
A.fS.prototype={}
A.iG.prototype={
gbu(){var s,r=this.x1
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.qF("pixeldart",r?this.gmV():B.j2,!1,null,s)},
gdX(){if(this.x1){var s=this.d
s===$&&A.h()
s=s.b===B.ad}else s=!1
return s},
gmV(){var s,r
if(!this.x1)return B.n
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.es.mW(s,r)},
go3(){var s="shadowCaster",r=this.p3
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.jp(s).a+";shadowTriangles="+r.jp(s).b+";frameMs="+B.c.ae(this.p4,3)},
go2(){var s=this.p3
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.p4<=100},
bj(){var s,r,q,p,o,n,m=this,l=A.De(m.a)
m.d=l
l=l.ju()
m.r=l
l=m.w=B.c3.jR(l)
q=m.b
p=m.c
s=new A.kW(q,p,q,p)
p=A.yz(m.d)
m.e=p
try{p.je(new A.kJ(l,384,216,l.b.q(0,"shadows")?1:0),s)}catch(o){r=A.ak(o)
l=m.w
if(l===B.aC)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.w(r)
m.w=B.aC
l=A.yz(m.d)
l.je(B.kN,s)
m.e=l}l=m.e
l.cH()
n=A.CR(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.x2=A.Cy(!0,!0,!0)
m.x1=!0},
ba(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.z("Pixeldart surface size must be positive",null))
if(!r.x1){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.cH()
new A.kW(a,b,a,b).C()
r.b=a
r.c=b},
mK(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.x1||b3.Q.length!==0)return
b3.y2=b9
s=b3.go
r=b3.e
r===$&&A.h()
s.k(0,b5,r.gbk().eW("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbk().eW("texture:grime",512,512))
for(q=0;q<2;++q){p=B.j6[q]
r=b3.e.w
if(r==null)r=A.k(A.m(b7))
s.k(0,p,r.eW("texture:"+p,256,256))}b3.dM()
b3.k4=b3.e.gbk().p6(A.pH(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k2,m=b3.k1,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.v)(r),++q){j=r[q]
i=A.q(l,k)
for(h=A.N(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cA(h,h.r,h.e,A.r(h).i("cA<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.bh.h(0,d)
if(c==null)A.k(A.m("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.k(A.m(b7))
a=e.a
a0=c.a
d=A.pH(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.w)A.k(A.m(b8))
d.C()
a1=b.b.a.aG(d,b4)
b.f.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.k3,q=0;q<7;++q){a2=B.iz[q]
n=b3.e.w
if(n==null)n=A.k(A.m(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dI(a2)
h=b3.dI(a2)
k=A.pH(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dI(a2).c,h.b,k.a,1,1)
if(n.w)A.k(A.m(b8))
k.C()
a1=n.b.a.aG(k,b4)
n.f.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.v)(r),++q)b3.lE(b9,r[q])
b3.m6(b9)
$.B.j().setAttribute("data-renderer-house-model-scale",B.c.ae(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.v)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.v)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.fq(k,b3.h4(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.tL(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.v)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.fM(b9,j,a5)
h=b3.e.w
if(h==null)h=A.k(A.m(b7))
g=a5.a
if(h.w)A.k(A.m(b8))
f=h.a
a6.C()
a1=f.b.aG(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.br(a6))
h.e.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.k4
f.toString}a7=new A.bw(a1,f,B.B,0,B.S,B.a9,!0,!0,0,b4)
f=b3.f
f===$&&A.h()
B.B.C()
b=f.a
a=b.$ti
b.a2(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.f(b,d)
a6=b[d].c
d=(a6==null?a.y[1].a(a6):a6).d
b=B.B.ad()
d=d.gaB()
a=A.G(d)
A.be(new A.U(d,a.i("M(1)").a(b.gaD()),a.i("U<1,M>")))
n.k(0,g,new A.iF(g,h,f.b.cb(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.v)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.fq(o,b3.h4(j,a5.aK(o),a5.ah(o),a5.ah(o)+a5.w,0,a5.x,5915445),new A.tM(a5))}for(r=A.GW(A.Ge(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.id,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.v)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.k(A.m(b7))
b=s.h(0,a9)
a=b3.dG(f)
a0=b3.dG(f)
a=A.pH(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.dG(f).c,a0.b,a.a,1,1)
if(d.w)A.k(A.m(b8))
a.C()
a1=d.b.a.aG(a,b4)
d.f.l(0,a1)
g.k(0,f,a1)
c=a1}d=b3.e.w
if(d==null)d=A.k(A.m(b7))
b=a8.c
a=a8.a
f=""+f
if(d.w)A.k(A.m(b8))
a0=d.a
b.C()
a1=a0.b.aG(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.br(b))
d.e.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.af.q(0,a))A.k(A.z("unknown exterior cell: "+a,b4))
b2=new A.bw(a1,c,B.B,-1,B.S,B.a9,B.la.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.h()
B.B.C()
d=f.a
b=d.$ti
d.a2(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.f(d,b0)
a6=d[b0].c
d=(a6==null?b.y[1].a(a6):a6).d
b=B.B.ad()
d=d.gaB()
a=A.G(d)
A.be(new A.U(d,a.i("M(1)").a(b.gaD()),a.i("U<1,M>")))
k.k(0,b1,f.b.cb(b2))}},
jU(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.fy=A.ai(a8.e,t.fl)
if(!a5.x1)return
for(s=a5.ch,r=new A.J(s,A.r(s).i("J<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b9(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.k(A.m(a6))
o=n.a
if(p.w)A.k(A.m(a7))
p.a.b9(o)
p.e.a3(0,o)}}s.H(0)
q.H(0)
r=a5.cx
B.a.H(r)
for(p=a5.fy,o=p.length,m=a8.c,l=a5.k3,k=0;k<o;++k){j=p[k]
i=a5.y2
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cR(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.k(A.m(a6))
f=a5.lH(g,j,m)
e=j.a
if(i.w)A.k(A.m(a7))
d=i.a
f.C()
c=d.b.aG(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.br(f))
i.e.l(0,c)
i=j.f
f=i.a
a=B.a4.gac()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.l_(new A.M(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.kH(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bw(c,a2,i,-1,B.S,B.a9,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.C()
a2=d.a
f=a2.$ti
a2.a2(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.f(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.ad()
f=f.gaB()
b=A.G(f)
A.be(new A.U(f,b.i("M(1)").a(i.gaD()),b.i("U<1,M>")))
s.k(0,e,d.b.cb(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
k8(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aL([s],r)
for(p=c1.aC(s),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.bS(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.J(b9,A.r(b9).i("J<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.e([],p)
for(g=J.aE(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.f(i,f)
e=b8.c6(i[f],k)
d=b8.f
d===$&&A.h()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a2(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.f(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.ad()
a=a.gaB()
a0=A.G(a)
A.be(new A.U(a,a0.i("M(1)").a(b.gaD()),a0.i("U<1,M>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a2(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.f(d,c)
d[c].sb4(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gR(h))}for(b9=b8.fx,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.v)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.h()
o=b8.c6(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a2(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ad()
i=i.gaB()
g=A.G(i)
A.be(new A.U(i,g.i("M(1)").a(n.gaD()),g.i("U<1,M>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a2(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].sb4(o)}b9=b8.fr
s=A.r(b9).i("ad<1>")
s=A.K(new A.ad(b9,s),s.i("p.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.v)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.c6(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.h()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a2(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.f(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.ad()
g=g.gaB()
d=A.G(g)
A.be(new A.U(g,d.i("M(1)").a(i.gaD()),d.i("U<1,M>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a2(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].sb4(e)
b9.k(0,a5.a,a5.nb(e))}for(b9=b8.fy,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.h()
i=b8.c6(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a2(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.f(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.ad()
d=d.gaB()
c=A.G(d)
A.be(new A.U(d,c.i("M(1)").a(g.gaD()),c.i("U<1,M>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a2(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.f(n,c)
n[c].sb4(i)}a9=new A.jQ().n_(c2)
b9=$.B.j()
s=A.K(a9,A.r(a9).c)
B.a.Z(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.a5(s,","))
b9=b8.dx
r=new A.jQ().j6(new A.tN(b8),new A.ad(b9,A.r(b9).i("ad<1>")),a9,r)
b0=A.kj(r,r.$ti.i("p.E"))
b9=b8.db
s=A.r(b9).i("ad<1>")
s=A.K(new A.ad(b9,s),s.i("p.E"))
r=s.length
p=b8.cy
b1=0
b2=0
b3=0
a3=0
for(;a3<s.length;s.length===r||(0,A.v)(s),++a3){b4=s[a3]
b5=p.h(0,b4)
if(b5==null)continue
a8=b9.h(0,b4)
o=a8.r
if(o)++b3
b6=b0.q(0,b4)
if(b6)++b1
if(b6&&o)++b2
e=b8.c6(a8,b6?-1:0)
o=b8.f
o===$&&A.h()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a2(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ad()
i=i.gaB()
g=A.G(i)
A.be(new A.U(i,g.i("M(1)").a(n.gaD()),g.i("U<1,M>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a2(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.f(o,g)
o[g].sb4(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.r(b0)
s=b9.i("dm<1,j>")
b7=A.K(new A.dm(b0,b9.i("j(1)").a(new A.tO(b8)),s),s.i("p.E"))
B.a.Z(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a5(b7,","))},
p5(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.x1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.he(b0,n)
l=J.aE(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.e([],t.s6)
j=A.e([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.h()
d=d.w
if(d==null)d=A.k(A.m(a8))
c=a7.h_(e.b)
b=g.b
if(d.w)A.k(A.m(a9))
a=d.a
c.C()
a0=a.b.aG(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.br(c))
d.e.l(0,a0)
if(!(f<q.length))return A.f(q,f)
a1=q[f]
d=a1.c
a2=new A.bw(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.h()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a2(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.f(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ad()
b=b.gaB()
a3=A.G(b)
A.be(new A.U(b,a3.i("M(1)").a(d.gaD()),a3.i("U<1,M>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a2(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.f(c,a)
c[a].sb4(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.f(o,f)
a6=o[f]
B.a.a3(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.k(A.m(a8)):a
if(d.w)A.k(A.m(a9))
d.a.b9(a6)
d.e.a3(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gR(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.cj+1));++a7.cj},
eV(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.x1)return
s=k.fr
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.h()
m=p.gbk().jx(k.fM(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bw(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.hA(l)
p.b.jC(n,l)
s.k(0,b,r.hJ(l,m))
s=k.y
n=r.d
B.a.a3(s,n)
B.a.l(s,m)
k.e.gbk().p7(n)},
jV(c2,c3,c4,c5,c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5="wetness_override",b6="fog_density",b7="fog_height_falloff",b8="rain_override",b9=A.aL([c3],t.N),c0=c2.e,c1=c0.h(0,c3)
if(c1!=null)for(s=c1.a,r=c2.aC(s),q=J.R(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.bS(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&c0.h(0,o)!=null)b9.l(0,o)}n=new A.k4(c2).jF(b9,c4)
m=A.e([],t.Fk)
l=A.e([],t.cv)
for(k=0;k<n.length;++k){j=n[k]
c0=j.b
i=new A.ch((c0>>>16&255)/255,(c0>>>8&255)/255,(c0&255)/255)
c0=j.a
h=new A.M(c0.a,c0.b,c0.c)
c0=j.d
s=j.c
if(k===0)B.a.l(l,new A.bz(k,h,B.aH,i,c0,s,1.05,1.4))
else B.a.l(m,new A.kC(h,i,c0,s))}g=c7.c
f=B.c.M(B.c.M(c9,24)+24,24)
e=B.c.E(g,0,1)
d=B.c.E(c7.d,6,16)/2
c=12-d
b=12+d
a=(f>=c&&f<=b?Math.sin(3.141592653589793*((f-c)/(b-c)))*65:-18)*3.141592653589793/180
a0=(90+f/24*360)*3.141592653589793/180
c0=Math.cos(a0)*Math.cos(a)
s=B.c.E(Math.sin(a),0,1)
r=Math.sin(a0)*Math.cos(a)
q=B.c.E(1-s,0.1,0.9)
if(f>=5&&f<7){a1=(f-5)/2
a2=A.dk(B.kv,B.bs,a1)
a3=A.dk(B.ky,B.br,a1)
a4=A.dk(B.kq,B.bt,a1)
a5=0.3+0.5*a1
a6=0.25+0.2*a1}else if(f>=7&&f<17){a2=B.bs
a3=B.br
a4=B.bt
a5=0.85
a6=0.45}else if(f>=17&&f<19){a1=(f-17)/2
a2=A.dk(B.bs,B.dh,a1)
a3=A.dk(B.br,B.dm,a1)
a4=A.dk(B.bt,B.dl,a1)
a5=0.85*(1-a1*0.6)
a6=0.45*(1-a1*0.5)}else if(f>=19&&f<21){a1=(f-19)/2
a2=A.dk(B.dh,B.dk,a1)
a3=A.dk(B.dm,B.dj,a1)
a4=A.dk(B.dl,B.dn,a1)
a5=0.34*(1-a1*0.6)
a6=0.22*(1-a1*0.4)}else{a2=B.dk
a3=B.dj
a4=B.dn
a5=0.15
a6=0.18}if(e>0){a7=A.dk(a4,B.kG,e*0.7)
a5*=1-e*0.35
a6*=1-e*0.15}else a7=a4
a8=c8?1:0.15
B.c.E(e*0.75+B.c.E(0.3333333333333333,0,1)*0.25,0,1)
p=$.B5()
a9=$.my()
p=p.a
p.k(0,"pbrRoughnessScale",a9.P("pbr_roughness"))
p.k(0,"pbrMetallicScale",a9.P("pbr_metallic"))
p.k(0,"pbrSpecularMult",a9.P("pbr_specular"))
p.k(0,"pbrWrapDiffuse",a9.P("pbr_wrap_diffuse"))
p.k(0,"pbrFresnelF0",a9.P("pbr_fresnel_f0"))
p.k(0,"ambientLightScale",a9.P("light_ambient_mult"))
p.k(0,"directLightScale",a9.P("light_direct_mult"))
p.k(0,"ssdoEnabled",a9.b0("shadow_ssdo_enable"))
p.k(0,"aoIntensity",a9.P("shadow_ao_intensity"))
p.k(0,"csmEnabled",a9.b0("shadow_csm_enable"))
p.k(0,"csmHardness",a9.P("shadow_csm_hardness"))
p.k(0,"shadowBias",a9.P("shadow_bias"))
p.k(0,"weatheringEnabled",a9.b0("weathering_enable"))
p.k(0,"normalBumpStrength",a9.P("normal_bump_strength"))
p.k(0,"grimeAccumulation",a9.P("grime_accumulation"))
p.k(0,"wetnessOverride",a9.P(b5))
p.k(0,"fogEnabled",a9.b0("fog_enable"))
p.k(0,"fogDensity",a9.P(b6))
p.k(0,"fogHeightFalloff",a9.P(b7))
p.k(0,"volumetricEnabled",a9.b0("volumetric_light_enable"))
p.k(0,"volumetricShaftIntensity",a9.P("volumetric_shaft_intensity"))
p.k(0,"volumetricScattering",a9.P("volumetric_scattering"))
p.k(0,"ssrEnabled",a9.b0("ssr_enable"))
p.k(0,"tonemapMode",B.c.aq(a9.P("tonemap_mode")))
p.k(0,"ssssEnabled",a9.b0("ssss_enable"))
p.k(0,"taaEnabled",a9.b0("taa_enable"))
p.k(0,"lensFlareEnabled",a9.b0("lens_flare_enable"))
p.k(0,"timeOverride",a9.P("time_override"))
p.k(0,"rainOverride",a9.P(b8))
p.k(0,"postBloom",a9.P("post_bloom"))
p.k(0,"postVignette",a9.P("post_vignette"))
p.k(0,"postChromaticAberration",a9.P("post_chromatic_aberration"))
p.k(0,"postFilmGrain",a9.P("post_film_grain"))
p.k(0,"postExposure",a9.P("post_exposure"))
p.k(0,"postSaturation",a9.P("post_saturation"))
p.k(0,"debugViewMode",a9.e)
if(a9.P(b8)>=0)g=a9.P(b8)
if(a9.P(b5)>=0)a9.P(b5)
p=$.B4()
p.pC(0.0166,g)
b0=p.f
b1=c5>0
b2=b1?new A.M(c0,s,r):new A.M(-c0,q,-r)
b3=b1?new A.ch(a2.c,a2.b,a2.a):new A.ch(0.35,0.45,0.65)
c0=b0.a
if(c0){s=b0.b
b4=new A.ch(b3.a+b0.c*s*2,b3.b+b0.d*s*2,b3.c+b0.e*s*2.5)}else b4=b3
a5*=a8
if(c0)a5+=b0.b*4.5
c0=Math.max(0.045,a6*(b1?c6:1)*a8)
this.p1=new A.jT(B.i0,new A.ch(a7.c*0.08,a7.b*0.08,a7.a*0.08),1.5/(1+g*0.45),14/(1+g*0.16),a9.P(b7),a9.P(b6),new A.ch(a3.c,a3.b,a3.a),c0,new A.nT(b2,b4,a5),m,l)},
bc(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.x1)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.ok
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dv(s)
s=$.xJ()
q=s.b
p=s.c
o=A.ws(i.b/i.c,p,s.a,q)
p=new A.fn(r,o,o.a7(0,r),B.aj,B.m_,q,p,i.b/i.c)
s=p}q=i.p1
p=i.p2
n=i.ry++
m=i.R8
l=new A.rB()
$.xE()
k=$.qk.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.mN(j,new A.ob(s,q,p,n,m))
i.p3=i.e.nR()
s=$.qk.$0()
l.b=s
i.p4=l.gnO()/1000},
bA(a){},
jh(){},
jv(){++this.RG},
he(a,b){var s=A.Ah(a,b),r=A.Gd(a,b),q=A.K(s.c,t.i)
B.a.L(q,r)
return A.e([new A.fS("wall",new Float32Array(A.a1(q))),new A.fS("floor",s.a),new A.fS("ceiling",s.b)],t.pv)},
h_(a){var s,r,q,p,o,n=A.e([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.f(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.f(a,o)
B.a.l(n,new A.M(q,p,a[o]))}if(n.length===0)throw A.d(A.m("house surface mesh cannot be empty"))
return new A.cj(B.aa,a,null,A.be(n))},
lE(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.he(a2,a3),a0=a3.a,a1=b.k2.h(0,a0)
if(a1==null)throw A.d(A.m("surface materials missing for room "+a0))
s=A.e([],t.s6)
r=A.e([],t.s3)
q=A.e([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.h()
k=k.w
if(k==null)k=A.k(A.m("renderer is not initialized"))
j=b.h_(l.b)
i=l.a
if(k.w)A.k(A.m("resource library is disposed"))
h=k.a
j.C()
g=h.b.aG(j,n+i)
f=g.a
h.c.k(0,f,h.br(j))
k.e.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bw(g,i,B.B,-1,B.S,B.a9,!0,!0,0,null)
i=b.f
i===$&&A.h()
B.B.C()
k=i.a
j=k.$ti
k.a2(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.f(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.B.ad()
k=k.gaB()
h=A.G(k)
A.be(new A.U(k,h.i("M(1)").a(j.gaD()),h.i("U<1,M>")))
c=i.b.cb(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gR(r))
if(q.length!==0)b.at.k(0,a0,B.a.gR(q))},
m6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.e([],f),d=A.e([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k2,p=0;p<f.length;f.length===s||(0,A.v)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.N(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cA(l,l.r,l.e,A.r(l).i("cA<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bh.h(0,i)
if(h==null)A.k(A.m("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Z(d)
f=$.B.j()
B.a.Z(e)
f.setAttribute("data-renderer-house-materials",B.a.a5(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.a5(d,","))},
fq(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.h()
r=s.gbk().jx(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bw(r,p.lM(a),B.B,0,B.S,B.a9,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.hA(q)
B.a.l(p.fx,new A.lL(a,s.b.cb(q),q,c))},
lM(a){var s=this.k1.h(0,a)
if(s==null){s=this.k4
s.toString}return s},
lH(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d1(new Float32Array(5376))
g=this.lG(a0.b)
r=new A.a(d,b,f)
q=new A.a(e,b,f)
p=new A.a(e,c,f)
o=new A.a(d,c,f)
n=new A.a(d,b,a)
m=new A.a(e,b,a)
l=new A.a(e,c,a)
k=new A.a(d,c,a)
s.S(q,r,o,p,g)
s.S(n,m,l,k,g)
s.S(r,n,k,o,g)
s.S(m,q,p,l,g)
s.S(r,q,m,n,g)
s.S(o,k,l,p,g)
j=B.r.aR(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.M(e,d,j[c]))}return new A.cj(B.aa,j,null,A.be(g))},
lG(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dG(a){var s
A:{if(0===a){s=B.kr
break A}if(1===a){s=B.kt
break A}if(2===a){s=B.kB
break A}if(3===a){s=B.kK
break A}if(4===a){s=B.kM
break A}if(5===a){s=B.kz
break A}if(6===a){s=B.kJ
break A}if(7===a){s=B.kE
break A}s=B.kH
break A}return s},
dI(a){var s
A:{if("architecture"===a){s=B.ks
break A}if("furniture"===a){s=B.di
break A}if("fixture"===a){s=B.kD
break A}if("service"===a){s=B.kF
break A}if("story"===a){s=B.kC
break A}if("decor"===a){s=B.kx
break A}if("micro"===a){s=B.kA
break A}s=B.di
break A}return s},
aY(a){return this.op(t.G.a(a))},
op(a){var s=0,r=A.bH(t.H),q,p=this,o,n,m,l
var $async$aY=A.bK(function(b,c){if(b===1)return A.bE(c,r)
for(;;)switch(s){case 0:if(!p.x1){s=1
break}o=A.e([],t.iJ)
for(n=0;n<4;++n){m=B.ia[n]
l=a.h(0,m)
if(l!=null)o.push(p.cK(m,l))}s=3
return A.ap(A.oh(o,t.H),$async$aY)
case 3:case 1:return A.bF(q,r)}})
return A.bG($async$aY,r)},
cK(a,b){return this.lL(a,b)},
lL(a,b){var s=0,r=A.bH(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cK=A.bK(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.go.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.c(A.c(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ap(A.b2(A.c(m.decode()),t.X),$async$cK)
case 7:g=A.c(A.c(h.document).createElement("canvas"))
g.width=A.b(m.naturalWidth)
g.height=A.b(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mV.a(A.c(k.getImageData(0,0,A.b(m.naturalWidth),A.b(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gbk()
f=new Uint8Array(A.a1(j))
if(h.w)A.k(A.m("resource library is disposed"))
h.c.pD(d,f)
$.B.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dM()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ak(c)
h=$.B.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dM()
A.c(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bF(q,r)
case 2:return A.bE(o.at(-1),r)}})
return A.bG($async$cK,r)},
dM(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.x1||h.go.a===0)return
s=h.go
r=A.r(s).i("J<1,2>")
r=A.kk(new A.J(s,r),r.i("cm(p.E)").a(new A.tH()),r.i("p.E"),t.jP)
q=A.K(r,A.r(r).i("p.E"))
s=h.e
s===$&&A.h()
s=s.gbk()
p=s.d
o=(p===$?s.d=new A.rI(s.c,A.q(t.Aj,t.y)):p).oZ(q)
s=o.a
n=A.e(s.slice(0),A.G(s))
B.a.V(n,new A.tI())
s=A.G(n)
r=s.i("j(1)")
s=s.i("U<1,j>")
m=new A.U(n,r.a(new A.tJ()),s).a5(0,",")
l=new A.U(n,r.a(new A.tK()),s).a5(0,",")
s=o.cG(B.dD)
r=o.cG(B.dE)
k=o.cG(B.dF)
j=o.cG(B.dG);++h.to
i=$.B.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.to)
if(!A.Q($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",m)},
c6(a,b){return new A.bw(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
fM(a,b,c){var s,r,q,p,o,n=A.Gc(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.M(q,p,n[o]))}return new A.cj(B.aa,n,null,A.be(s))},
h4(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aJ(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.e([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.e([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.e([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.e([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.d1(new Float32Array(5376))
o.S(k[0],k[1],k[2],k[3],g)
n=B.r.aR(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.M(r,q,n[p]))}return new A.cj(B.aa,n,null,A.be(k))},
$iwA:1}
A.tL.prototype={
$0(){return!this.a.w},
$S:24}
A.tM.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:24}
A.tN.prototype={
$1(a){var s=this.a.dx.h(0,A.u(a))
s.toString
return s},
$S:43}
A.tO.prototype={
$1(a){var s,r,q,p
A.u(a)
s=this.a
r=s.id.h(0,a)
q=r==null
p=q?null:s.go.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:43}
A.tH.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.cm(s,a.b,r)},
$S:151}
A.tI.prototype={
$2(a,b){var s=t.d
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:152}
A.tJ.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:44}
A.tK.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:44}
A.fP.prototype={
gbu(){return A.qF("legacy",B.n,this.e,this.f,"legacy")},
gdX(){return this.x},
bj(){var s,r=this
if(r.w)return
s=A.CS(r.a,r.b,r.c)
r.r!==$&&A.L()
r.r=s
s.im=s.il=s.ik=r.d
r.w=!0},
ba(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.z("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.ba(a,b)}},
bc(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.w)throw A.d(A.m("legacy runtime is not initialized"))
if(i.x||$.h4==null)return;++i.y
$.B.j().setAttribute("data-renderer-frame-submits",""+i.y)
s=i.r
s===$&&A.h()
r=$.zK
q=$.bV.j()
p=B.c.E($.b0.j().gbE(),0,1)
s.ir=new A.a(Math.cos((p-0.5)*3.141592653589793),Math.sin(3.141592653589793*p),-0.5).gac().gac()
s.sjg(A.GU($.b0.j().gbE()))
o=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.b0.j().gbE()))
s.iv=o<0?0:o
o=$.bU.j()
n=o.w+=r
m=0.025*o.r
o.a=o.a.a6(0,o.d.a7(0,(A.w4(n*0.28,1309)*2-1)*m)).a6(0,o.c.a7(0,(A.w4(o.w*0.28,2839)*2-1)*m))
o=$.bU.j()
s.iw=o.a
s.em=o.b
s.en=o.c
s.eo=o.d
l=A.EX(0,0.25,0.11)
s.ep=l.a
s.eq=l.b
s.er=l.c
o=s.d0
k=o==null?s.ce:o
if(k==null)k=s.bw
o=s.b6
o.bg(k)
s.aU.depthMask(!0)
o.n3(k,s.ep/255,s.eq/255,s.er/255)
s.eh=s.d1=0
s.ej=!1
s.cg=0
j=$.h4
if(j!=null)j.nF($.as,$.jg())
s.o1(r,q)
$.ze.j().f2(B.eq,r)},
bA(a){},
jh(){this.x=!0},
jv(){this.x=!1},
$iwA:1}
A.lL.prototype={}
A.iF.prototype={
hJ(a,b){var s=this,r=b==null?s.d:b
return new A.iF(s.a,s.b,s.c,r,a)},
nb(a){return this.hJ(a,null)}}
A.tk.prototype={}
A.uf.prototype={
$2(a,b){var s
A.xj(a,A.w(b))
switch(a){case"master":s=$.bq
if(s!=null)s.jZ(b)
break
case"voice":s=$.bq
if(s!=null)s.k0(b)
break
case"effects":s=$.bq
if(s!=null)s.jY(b)
break
case"ambience":s=$.bq
if(s!=null)s.jX(b)
break
case"music":s=$.bq
if(s!=null)s.k_(b)
break}},
$S:45}
A.ug.prototype={
$1(a){var s
A.xj("muted",""+a)
s=$.bq
if(s!=null)s.ff(a)},
$S:8}
A.uh.prototype={
$1(a){var s
A.xj("mono",""+a)
s=$.bq
if(s!=null)s.dh(a)},
$S:8}
A.un.prototype={
$2(a,b){A.xk(a,A.w(b))
A.zj(a,b)},
$S:45}
A.uo.prototype={
$1(a){var s="high-contrast"
A.xk(s,""+a)
A.u4(s,a)},
$S:8}
A.up.prototype={
$1(a){var s="strong-highlights"
A.xk(s,""+a)
A.u4(s,a)},
$S:8}
A.uq.prototype={
$1(a){$.df().pc(a)
A.v3()
A.zl()},
$S:155}
A.ur.prototype={
$0(){var s=$.df()
s.a=A.dA(null,1)
s.b=A.dA(null,1)
A.v3()
A.zl()},
$S:0}
A.us.prototype={
$0(){A.dL(this.a)},
$S:0}
A.ut.prototype={
$0(){this.a.a8()},
$S:0}
A.uu.prototype={
$0(){A.dL(this.a)},
$S:0}
A.ui.prototype={
$0(){A.h8(this.a)},
$S:0}
A.uj.prototype={
$1(a){$.j4=a
A.zR()
A.wS()},
$S:156}
A.uk.prototype={
$1(a){$.x2=a
A.zT()
A.zk()},
$S:157}
A.ul.prototype={
$1(a){$.ei=a
A.x9()
A.mc()},
$S:158}
A.um.prototype={
$0(){$.ei=B.an
$.f6.j().fc($.ei)
A.x9()
A.mc()},
$S:0}
A.uc.prototype={
$1(a){var s,r=A.Av(a,A.zC()),q=r.a
$.uS=A.k1(q,a)
A.zU()
s=r.b
$.h0.j().fg(a,q,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.a5(s,"|"))},
$S:159}
A.ud.prototype={
$0(){A.dL($.h0.j())},
$S:0}
A.ue.prototype={
$0(){A.dL($.h0.j())},
$S:0}
A.u9.prototype={
$1(a){var s,r
$.x_=a
$.ae.j().fd(a.r)
s=$.ae.j()
r=s.ch
r.a=a.f
r.eY()
s.bd()
A.zS()},
$S:160}
A.ua.prototype={
$0(){A.dL($.iX.j())},
$S:0}
A.ub.prototype={
$0(){A.dL($.iX.j())},
$S:0}
A.uW.prototype={
$0(){$.vc=A.Q(this.a.matches)
$.xn=A.Q(this.b.matches)
A.mc()},
$S:0}
A.uU.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uV.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vy.prototype={
$1(a){var s
try{A.y3(a,this.a)
return!0}catch(s){if(A.ak(s) instanceof A.H)return!1
else throw s}},
$S:161}
A.vz.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j2.j()
break
case 5:p=$.f6.j()
break
case 1:p=$.h0.j()
break
case 4:p=$.fZ.j()
break
case 2:p=$.iZ.j()
break
case 3:p=$.iX.j()
break}s=p
r=null
switch(o){case 0:r=B.jW
break
case 5:r=B.k0
break
case 1:r=B.jX
break
case 4:r=B.k_
break
case 2:r=B.jY
break
case 3:r=B.jZ
break}q=r
p=B.cZ.h(0,a)
p.toString
A.x8(s,q,p)},
$S:162}
A.vA.prototype={
$0(){A.dL($.h2.j())},
$S:0}
A.vL.prototype={
$0(){return A.dL($.h2.j())},
$S:0}
A.vT.prototype={
$0(){$.cr.j().a8()},
$S:0}
A.vU.prototype={
$0(){$.cr.j().a8()},
$S:0}
A.vV.prototype={
$0(){A.x8($.h2.j(),B.d4,"pause.settings")},
$S:0}
A.vW.prototype={
$0(){$.cr.j().a8()
A.ja($.j_.j())},
$S:0}
A.vX.prototype={
$0(){A.mr("saved")},
$S:0}
A.vY.prototype={
$0(){$.cr.j().a8()
A.ja($.j_.j())},
$S:0}
A.vZ.prototype={
$0(){A.x8($.m8.j(),B.k1,"pause.credits")},
$S:0}
A.vB.prototype={
$0(){return A.h8($.cr.j())},
$S:0}
A.vC.prototype={
$0(){return A.h8($.h1.j())},
$S:0}
A.vD.prototype={
$2(a,b){var s,r
if($.av.j().y){s=$.aH.j().gca()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.f(r,a)
A.Ev(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.f(B.cK,a)
A.Eu(B.cK[a])}}},
$S:163}
A.vE.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gab().a===21){A.A_(!1)
return}s=$.X.j().r.b
$.V.j().ki(a,b,$.as)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.df()
if(typeof n!=="number")return A.je(n)
if(!(o<n))break
if($.X.b===$.X)A.k(A.a9(""))
p=B.a.h(B.N,q).b
o=$.h4
if(o!=null)o.d6(p)
o=$.bI
if(o!=null){n=$.X.b
if(n===$.X)A.k(A.a9(""))
o.p5(n,p)}o=q
if(typeof o!=="number")return o.a6()
q=o+1}A.mr("saved after sleep")},
$S:164}
A.vF.prototype={
$0(){return A.h8($.ma.j())},
$S:0}
A.vG.prototype={
$0(){return A.h8($.j_.j())},
$S:0}
A.vH.prototype={
$0(){return A.dL($.m8.j())},
$S:0}
A.vI.prototype={
$0(){A.h8($.iY.j())},
$S:0}
A.vJ.prototype={
$0(){A.h8($.iY.j())},
$S:0}
A.vK.prototype={
$1(a){return A.zZ()},
$S:2}
A.vM.prototype={
$1(a){if(A.u(A.c(v.G.document).visibilityState)==="hidden")A.Fs()},
$S:1}
A.vN.prototype={
$1(a){var s,r,q,p,o,n,m=A.c(a)
if(A.u(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.my()
o=!p.a
p.a=o
if(o)A.pj(A.c(v.G.document),"exitPointerLock",t.X)
else $.ae.j().d7($.B.j())
return}p=$.my()
if(p.a&&!A.Q(m.repeat)){if(A.u(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ae.j().d7($.B.j())
return}if(A.u(m.code)==="ArrowUp"||A.u(m.code)==="KeyW"){m.preventDefault()
n=p.gcn().length
if(n>0)p.c=B.d.M(p.c-1+n,n)
return}if(A.u(m.code)==="ArrowDown"||A.u(m.code)==="KeyS"){m.preventDefault()
n=p.gcn().length
if(n>0)p.c=B.d.M(p.c+1,n)
return}if(A.u(m.code)==="ArrowLeft"||A.u(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.cT[B.d.M(p.e.a-1+7,7)]
else{p=p.gcU()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y-p.w,p.f,p.r)}return}if(A.u(m.code)==="ArrowRight"||A.u(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.cT[(p.e.a+1)%7]
else{p=p.gcU()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y+p.w,p.f,p.r)}return}if(A.u(m.code)==="KeyQ"){m.preventDefault()
p=p.gcU()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y-p.w*0.2,p.f,p.r)
return}if(A.u(m.code)==="KeyE"){m.preventDefault()
p=p.gcU()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y+p.w*0.2,p.f,p.r)
return}if(A.u(m.code)==="KeyR"){m.preventDefault()
if(A.Q(m.shiftKey))p.pb()
else p.pd()
return}if(B.b.U(A.u(m.code),"Digit")||B.b.U(A.u(m.code),"Numpad")){o=A.u(m.code)
o=A.xy(o,"Digit","")
s=A.xy(o,"Numpad","")
r=A.dx(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.av.j().y&&!A.Q(m.repeat))if($.cL().o7(A.u(m.code))){m.preventDefault()
return}if(A.u(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.b1
if(p==null)A.ja($.cr.j())
else p.a8()
return}q=$.b1==null&&!p.a
if(!A.Q(m.repeat)&&q)$.da.j().bA(new A.kK(A.u(m.code),!0,1))
if(A.u(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.AX())$.mn=!$.mn
if(A.u(m.code)==="KeyR"&&!A.Q(m.repeat)&&q&&$.Aa){p=$.h9
if(p!=null)p.bU()}if((A.u(m.code)==="KeyJ"||A.u(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.av.j().y){m.preventDefault()
A.jd($.h1.j())}if(A.u(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.av.j().y)A.jd($.ma.j())
if(A.u(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.av.j().y)A.jd($.j_.j())
if(A.u(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.av.j().y)A.jd($.j1.j())
if(A.u(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.mr("saved")},
$S:1}
A.vO.prototype={
$1(a){var s=A.c(a)
if($.b1==null)$.da.j().bA(new A.kK(A.u(s.code),!1,0))},
$S:1}
A.vP.prototype={
$1(a){return A.zn()},
$S:2}
A.vQ.prototype={
$1(a){return A.zn()},
$S:2}
A.vR.prototype={
$1(a){return A.EW(A.c(a))},
$S:2}
A.vS.prototype={
$1(a){var s=A.c(a)
if($.av.j().y){s.preventDefault()
A.EV(s)
return}$.ae.j().d7($.B.j())},
$S:1}
A.uX.prototype={
$1(a){var s=A.u(A.c(a).message)
A.v6(s,null)},
$S:1}
A.uY.prototype={
$1(a){var s
A.c(a)
s=a.reason
A.v6("unhandled rejection: "+A.w(s==null?A.u(a.type):s),null)},
$S:1}
A.v1.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:40}
A.va.prototype={
$0(){this.a.className=""},
$S:12}
A.vf.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:33}
A.v0.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:17}
A.v7.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.v4.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.v5.prototype={
$1(a){return t.e.a(a).w},
$S:14};(function aliases(){var s=J.e1.prototype
s.kr=s.p
s=A.p.prototype
s.kq=s.da
s=A.hV.prototype
s.ks=s.bR})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"F3","Cj",30)
r(J.t.prototype,"gav","q",10)
q(A,"Fh","CB",42)
r(A.aJ.prototype,"gav","q",10)
p(A.cg.prototype,"gn6","T",10)
o(A,"G8","Du",22)
o(A,"G9","Dv",22)
o(A,"Ga","Dw",22)
q(A,"Ag","FP",0)
s(A,"Gg","Co",30)
r(A.co.prototype,"gav","q",10)
r(A.fO.prototype,"gav","q",10)
o(A,"Gj","ED",13)
p(A.km.prototype,"gpj","pk",72)
var n
p(n=A.kZ.prototype,"gpf","pg",9)
p(n,"gpn","po",9)
p(n,"gpp","pq",9)
p(n,"gph","pi",9)
p(n,"gpl","pm",9)
q(A,"Al","Dz",167)
q(A,"HS","ww",24)
p(A.dv.prototype,"gaD","jz",56)
p(n=A.k7.prototype,"glO","lP",2)
p(n,"glQ","lR",2)
p(n,"glU","lV",2)
p(n,"glY","lZ",2)
p(n,"gm_","m0",2)
p(n,"glW","lX",2)
p(n,"glS","lT",2)
o(A,"GJ","zt",13)
o(A,"GN","zs",13)
o(A,"GA","Cg",168)
o(A,"GB","Ch",169)
o(A,"GR","Ca",170)
p(A.hV.prototype,"gm1","m2",2)
p(A.fJ.prototype,"glA","lB",124)
p(A.lb.prototype,"gog","oh",20)
o(A,"Au","Fv",171)
q(A,"GF","EA",0)
o(A,"GE","Ew",114)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.F,null)
q(A.F,[A.wm,J.k9,A.i5,J.er,A.p,A.hn,A.dT,A.ao,A.W,A.qS,A.aU,A.hN,A.T,A.hx,A.hu,A.il,A.ax,A.d3,A.bT,A.fC,A.fq,A.f1,A.dz,A.rP,A.pW,A.hv,A.iK,A.aa,A.pB,A.ci,A.al,A.cA,A.hH,A.lF,A.ll,A.ib,A.lZ,A.tm,A.tV,A.cF,A.ly,A.m1,A.tS,A.lm,A.cJ,A.b3,A.lq,A.eY,A.aB,A.ln,A.lX,A.iV,A.iv,A.lE,A.f2,A.iz,A.iP,A.m2,A.ev,A.jC,A.tF,A.tW,A.ew,A.dV,A.lv,A.kx,A.i9,A.tn,A.H,A.P,A.au,A.m_,A.rB,A.bl,A.iR,A.rR,A.lT,A.pV,A.lB,A.ef,A.qo,A.eL,A.nx,A.ny,A.kD,A.fn,A.jT,A.ob,A.dy,A.k2,A.ch,A.nT,A.kC,A.bz,A.eH,A.bA,A.rV,A.cj,A.pX,A.qg,A.kL,A.bw,A.kW,A.kJ,A.aK,A.od,A.km,A.l2,A.pN,A.cm,A.c2,A.rK,A.rI,A.dH,A.kZ,A.eE,A.jR,A.jS,A.oc,A.oa,A.fQ,A.az,A.bf,A.aO,A.O,A.ho,A.ql,A.bk,A.qq,A.b8,A.qs,A.qr,A.lA,A.i0,A.qI,A.to,A.m0,A.tR,A.lM,A.lx,A.lQ,A.lK,A.tA,A.bP,A.bN,A.aP,A.nO,A.nN,A.jh,A.eJ,A.oe,A.dv,A.kH,A.l_,A.M,A.hm,A.lo,A.jt,A.lp,A.jG,A.ls,A.hs,A.lt,A.jK,A.lu,A.k0,A.lz,A.ko,A.lG,A.fl,A.ju,A.wx,A.hX,A.lN,A.kG,A.lO,A.eS,A.kP,A.lR,A.kQ,A.lS,A.kT,A.lV,A.kS,A.lU,A.l6,A.m3,A.i2,A.lh,A.m6,A.nv,A.jW,A.jY,A.hB,A.i7,A.A,A.jH,A.kE,A.oz,A.eg,A.cZ,A.fu,A.tc,A.dI,A.iU,A.iT,A.m5,A.m4,A.u_,A.jJ,A.jo,A.fV,A.mW,A.mE,A.hk,A.mS,A.wh,A.n3,A.mY,A.im,A.fm,A.nt,A.o9,A.kX,A.ox,A.k5,A.k7,A.pb,A.pf,A.nP,A.pD,A.kl,A.hO,A.pJ,A.d1,A.qy,A.qH,A.te,A.it,A.lW,A.lJ,A.lH,A.rw,A.a,A.kU,A.li,A.nm,A.jL,A.nZ,A.fv,A.bp,A.kB,A.qh,A.fI,A.qN,A.eQ,A.jU,A.ol,A.ok,A.na,A.fg,A.fi,A.ff,A.fh,A.jv,A.kn,A.cI,A.lj,A.hD,A.oQ,A.qJ,A.a0,A.jO,A.k3,A.oR,A.jP,A.d9,A.jQ,A.ee,A.dX,A.qK,A.ed,A.fU,A.oO,A.o2,A.rx,A.oT,A.cV,A.cy,A.pi,A.pg,A.ph,A.cY,A.k4,A.bb,A.bv,A.bh,A.bj,A.dl,A.dC,A.aX,A.oZ,A.cU,A.oP,A.eD,A.oY,A.cT,A.p2,A.hW,A.hM,A.bg,A.t8,A.ki,A.bY,A.pl,A.nh,A.ni,A.fj,A.nj,A.px,A.pw,A.qd,A.qc,A.qe,A.qf,A.kh,A.qn,A.qG,A.kK,A.qE,A.rr,A.e7,A.rs,A.fK,A.nQ,A.td,A.eW,A.jA,A.p9,A.pd,A.qL,A.d_,A.qM,A.jV,A.eV,A.t9,A.pQ,A.cO,A.bt,A.qa,A.rC,A.eU,A.eT,A.ik,A.le,A.eN,A.d7,A.rF,A.ji,A.wg,A.dN,A.mO,A.dO,A.nl,A.b4,A.nu,A.fr,A.dj,A.jB,A.hV,A.nU,A.or,A.ot,A.fy,A.dY,A.oK,A.oC,A.oD,A.cc,A.oL,A.cX,A.fo,A.q_,A.dw,A.e3,A.c0,A.q4,A.qm,A.aY,A.rm,A.rq,A.ct,A.mL,A.lb,A.t7,A.dF,A.bn,A.c5,A.bS,A.ld,A.jk,A.la,A.fS,A.iG,A.fP,A.lL,A.iF,A.tk])
q(J.k9,[J.kc,J.hG,J.hI,J.fz,J.fA,J.eF,J.e0])
q(J.hI,[J.e1,J.t,A.e2,A.hS])
q(J.e1,[J.kA,J.e9,J.du])
r(J.ka,A.i5)
r(J.pk,J.t)
q(J.eF,[J.hF,J.kd])
q(A.p,[A.ec,A.S,A.cB,A.I,A.hw,A.cH,A.f0,A.lk,A.lY,A.cp])
q(A.ec,[A.eu,A.iW])
r(A.is,A.eu)
r(A.iq,A.iW)
q(A.dT,[A.jx,A.jw,A.kY,A.vt,A.vv,A.th,A.tg,A.u5,A.oi,A.ty,A.tB,A.pE,A.tD,A.w0,A.w1,A.vn,A.qp,A.rW,A.pK,A.pL,A.pM,A.pZ,A.pI,A.pO,A.rL,A.rM,A.rO,A.o6,A.o4,A.o5,A.q1,A.q2,A.qx,A.qw,A.qv,A.qu,A.qt,A.qz,A.uM,A.uN,A.qP,A.qQ,A.w8,A.w6,A.of,A.pG,A.vk,A.oA,A.oB,A.ta,A.tb,A.n5,A.n8,A.n7,A.n9,A.mX,A.mF,A.mG,A.mH,A.mU,A.mV,A.mT,A.oy,A.pc,A.qD,A.o1,A.om,A.oo,A.op,A.oq,A.nb,A.nc,A.nd,A.ne,A.nf,A.ng,A.vi,A.nw,A.o3,A.oS,A.w9,A.uQ,A.uP,A.u3,A.u2,A.v9,A.p4,A.p5,A.p7,A.ry,A.oW,A.oU,A.vh,A.p_,A.p1,A.vg,A.nY,A.pA,A.ps,A.rv,A.ru,A.rt,A.nR,A.nS,A.uZ,A.qb,A.rG,A.rH,A.mD,A.mB,A.n0,A.n1,A.no,A.ns,A.nr,A.nq,A.nH,A.nG,A.nI,A.nJ,A.nK,A.nF,A.nA,A.nB,A.nM,A.nV,A.nW,A.nX,A.o0,A.os,A.ou,A.ov,A.oI,A.oG,A.oH,A.oF,A.oE,A.oN,A.pn,A.po,A.pp,A.q5,A.q6,A.q7,A.rh,A.ri,A.rb,A.rc,A.ra,A.rd,A.qX,A.re,A.r9,A.r2,A.r3,A.r4,A.r5,A.r6,A.r7,A.r8,A.r1,A.qY,A.qZ,A.r_,A.r0,A.rg,A.rf,A.ro,A.rA,A.mN,A.t5,A.t4,A.t6,A.t0,A.t3,A.rZ,A.rY,A.vq,A.rX,A.mI,A.mJ,A.mK,A.tN,A.tO,A.tH,A.tJ,A.tK,A.ug,A.uh,A.uo,A.up,A.uq,A.uj,A.uk,A.ul,A.uc,A.u9,A.uU,A.uV,A.vy,A.vz,A.vK,A.vM,A.vN,A.vO,A.vP,A.vQ,A.vR,A.vS,A.uX,A.uY,A.v1,A.vf,A.v7,A.v4,A.v5])
q(A.jx,[A.tl,A.nz,A.pt,A.vu,A.u6,A.vj,A.oj,A.tz,A.pC,A.pF,A.tG,A.rT,A.rS,A.w2,A.pP,A.rJ,A.rN,A.o7,A.qR,A.w7,A.w5,A.n6,A.mZ,A.n_,A.on,A.vb,A.p6,A.p8,A.oX,A.pz,A.pe,A.pS,A.pT,A.pU,A.rD,A.rE,A.pq,A.pr,A.mM,A.t1,A.t_,A.tI,A.uf,A.un,A.vD,A.vE,A.v0])
r(A.aT,A.iq)
q(A.ao,[A.eG,A.dD,A.ke,A.l1,A.kM,A.lw,A.hK,A.jm,A.cu,A.ih,A.l0,A.fL,A.jz])
r(A.fN,A.W)
r(A.dU,A.fN)
q(A.S,[A.a7,A.ad,A.ay,A.J,A.f_,A.iy])
q(A.a7,[A.ic,A.U,A.i4,A.lD])
r(A.dm,A.cB)
q(A.bT,[A.f4,A.f5,A.fR])
q(A.f4,[A.aW,A.iH])
q(A.f5,[A.aj,A.b_])
r(A.iI,A.fR)
r(A.fX,A.fC)
r(A.ea,A.fX)
r(A.hp,A.ea)
q(A.fq,[A.a4,A.cR])
q(A.dz,[A.hq,A.iJ,A.iQ])
r(A.aJ,A.hq)
q(A.jw,[A.qi,A.ti,A.tj,A.tT,A.og,A.tp,A.tu,A.tt,A.tr,A.tq,A.tx,A.tw,A.tv,A.tQ,A.v8,A.tY,A.tX,A.uL,A.uE,A.uF,A.uK,A.uz,A.uB,A.uA,A.uJ,A.ux,A.uy,A.uG,A.uH,A.uI,A.uD,A.uC,A.uO,A.vl,A.qC,A.p3,A.oV,A.p0,A.uR,A.mC,A.mQ,A.mP,A.n2,A.nD,A.nE,A.nC,A.ow,A.oJ,A.q9,A.qV,A.qW,A.rj,A.rk,A.rl,A.rp,A.t2,A.tL,A.tM,A.ur,A.us,A.ut,A.uu,A.ui,A.um,A.ud,A.ue,A.ua,A.ub,A.uW,A.vA,A.vL,A.vT,A.vU,A.vV,A.vW,A.vX,A.vY,A.vZ,A.vB,A.vC,A.vF,A.vG,A.vH,A.vI,A.vJ,A.va])
r(A.hU,A.dD)
q(A.kY,[A.kV,A.fk])
q(A.aa,[A.cg,A.iu,A.lC])
r(A.hJ,A.cg)
r(A.fE,A.e2)
q(A.hS,[A.kp,A.b7])
q(A.b7,[A.iB,A.iD])
r(A.iC,A.iB)
r(A.hQ,A.iC)
r(A.iE,A.iD)
r(A.hR,A.iE)
q(A.hQ,[A.hP,A.kq])
q(A.hR,[A.kr,A.ks,A.kt,A.ku,A.kv,A.eI,A.hT])
r(A.fW,A.lw)
r(A.io,A.lq)
r(A.lP,A.iV)
r(A.iw,A.iu)
r(A.co,A.iJ)
r(A.fO,A.iQ)
q(A.ev,[A.jq,A.jM,A.kf])
q(A.jC,[A.nk,A.pv,A.pu,A.rU])
r(A.kg,A.hK)
r(A.tE,A.tF)
r(A.l5,A.jM)
q(A.cu,[A.fG,A.k6])
r(A.lr,A.iR)
q(A.lv,[A.eM,A.eC,A.jl,A.d5,A.ft,A.js,A.jy,A.jI,A.eP,A.e8,A.ey,A.cf,A.i3,A.cS,A.fH,A.i8,A.fx,A.ip,A.ir,A.jX,A.hz,A.jZ,A.k_,A.eB,A.hA,A.eR,A.d2,A.fp,A.fT,A.jr,A.et,A.jD,A.jF,A.b9,A.jp,A.cd,A.eA,A.ex,A.dn,A.hy,A.dW,A.dZ,A.hl,A.kz,A.i1,A.eO,A.cG,A.dB,A.bR,A.by,A.k8,A.eX,A.cl,A.cM,A.cv,A.cN,A.di,A.dh,A.dQ,A.dR,A.dP,A.es,A.dq,A.cP,A.cQ,A.dr,A.dp,A.ds,A.ce,A.cw,A.jj,A.bi,A.ck,A.e4,A.cE,A.bQ,A.bx,A.i6,A.bO,A.c3,A.c4,A.eb,A.d6])
q(A.dy,[A.bs,A.bm,A.cC,A.ky,A.cx])
r(A.qO,A.lQ)
r(A.lf,A.m4)
r(A.qB,A.te)
r(A.qA,A.qB)
r(A.iA,A.d9)
q(A.hV,[A.hr,A.nL,A.o_,A.hC,A.oM,A.pm,A.q8,A.qU,A.fJ,A.rz])
q(A.t7,[A.lc,A.lI,A.ba,A.l9,A.l7,A.ij,A.l8])
s(A.fN,A.d3)
s(A.iW,A.W)
s(A.iB,A.W)
s(A.iC,A.ax)
s(A.iD,A.W)
s(A.iE,A.ax)
s(A.fX,A.iP)
s(A.iQ,A.m2)
s(A.lQ,A.tA)
s(A.m4,A.u_)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",y:"double",bd:"num",j:"String",n:"bool",au:"Null",C:"List",F:"Object",Y:"Map",a6:"JSObject"},mangledNames:{},types:["~()","au(F?)","~(F?)","n(j)","dt()","n(y)","0&()","n(az)","~(n)","dt(bm?)","n(F?)","n(@)","au()","@(@)","n(bb)","n(eN)","l(bY,bY)","l(P<j,j>,P<j,j>)","n(e7)","n(bA)","n(bS)","n(aY)","~(~())","n(O)","n()","n(bY)","~(@)","l(l)","n(ee)","a(a)","l(@,@)","n(l)","@()","n(bt)","n(cM)","n(P<j,C<j>>)","~(F?,F?)","~(a6)","n(cw)","au(@)","n(ce)","@(j)","l()","j(j)","j(c2)","~(j,y)","j?(j)","eS()","n(P<j,aK>)","aK(P<j,aK>)","aK(aK,aK)","l(aP<bP>,aP<bP>)","c1(aP<bP>)","l(aP<bN>,aP<bN>)","c1(aP<bN>)","eJ(y,y,y,y)","M(M)","~(eS)","F?(F?)","au(@,d0)","y(y,fV)","bZ<au>(P<j,j>)","n(C<j>)","l(j,j)","l(bv,bv)","n(a6)","l(+influence,light(y,bz),+influence,light(y,bz))","a6()","~(l,@)","n(cd)","~(F,d0)","au(F,d0)","eH(cC)","n(aX)","fg(F?)","ff(F?)","fh(F?)","j(F?)","cC(l,l,j?)","fi(F?)","bs(l,l,j?)","n(dC)","j(l,a0,a0,a0)","l(d9,d9)","~(@,@)","n(ed)","l(l,+(bs,cj))","n(c2)","l(+(y,y,y,y),+(y,y,y,y))","C<+(y,y,y,y)>()","n(bv)","l(l,aX)","n(cy)","n(cV)","l(cm,cm)","l(cY,cY)","n(cU)","P<j,j>(j,@)","au(~())","n(bR)","n(by)","eV()","bm(l,l,j?)","l(P<j,cO>,P<j,cO>)","n(ig?)","P<l,@>(l,eU)","P<l,@>(l,eT)","n(P<@,@>)","P<j,j>(P<@,@>)","n?(F?)","l(l,+(bm,dH))","j()","0^(p<0^>,F?)<F?>","j(az)","~(l)","~(y)","l(ac,ac)","@(@,j)","au(a6)","0^(j,p<0^>)<E>","Y<j,j>(Y<j,j>,j)","Y<j,F?>(dw)","j(bi)","n(bi)","n(bx)","cx(l,l,j?)","n(dq)","n(cP)","n(cQ)","n(dr)","n(dp)","n(ds)","i2(bs)","n(cv)","n(cN)","n(di)","n(dh)","j(ct)","l(ct,ct)","dt(j{fallback:j?})","l(bS,bS)","C<d7>()","n(d7)","n(P<j,j>)","l(c5,c5)","Y<j,@>(bS)","n(c4)","n(c3)","n(bO)","0&(j,l?)","bz?()","cm(P<j,bm>)","l(c2,c2)","C<bz>()","fn()","~(bx)","~(dO)","~(fy)","~(dN)","~(dY)","~(fr)","n(fI)","~(bQ)","~(l,j)","~(bR,by)","y()","fl()","fQ()","cV(F?)","cy(F?)","cU(F?)","~(bd)","C<j>(C<j>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aW&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iH&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aj&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b_&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iI&&A.GH(a,b.a)}}
A.DP(v.typeUniverse,JSON.parse('{"du":"e1","kA":"e1","e9":"e1","Ha":"e2","t":{"C":["1"],"S":["1"],"a6":[],"p":["1"]},"kc":{"n":[],"ah":[]},"hG":{"au":[],"ah":[]},"hI":{"a6":[]},"e1":{"a6":[]},"ka":{"i5":[]},"pk":{"t":["1"],"C":["1"],"S":["1"],"a6":[],"p":["1"]},"er":{"ab":["1"]},"eF":{"y":[],"bd":[],"b5":["bd"]},"hF":{"y":[],"l":[],"bd":[],"b5":["bd"],"ah":[]},"kd":{"y":[],"bd":[],"b5":["bd"],"ah":[]},"e0":{"j":[],"b5":["j"],"q3":[],"ah":[]},"ec":{"p":["2"]},"hn":{"ab":["2"]},"eu":{"ec":["1","2"],"p":["2"],"p.E":"2"},"is":{"eu":["1","2"],"ec":["1","2"],"S":["2"],"p":["2"],"p.E":"2"},"iq":{"W":["2"],"C":["2"],"ec":["1","2"],"S":["2"],"p":["2"]},"aT":{"iq":["1","2"],"W":["2"],"C":["2"],"ec":["1","2"],"S":["2"],"p":["2"],"p.E":"2","W.E":"2"},"eG":{"ao":[]},"dU":{"W":["l"],"d3":["l"],"C":["l"],"S":["l"],"p":["l"],"W.E":"l","d3.E":"l"},"S":{"p":["1"]},"a7":{"S":["1"],"p":["1"]},"ic":{"a7":["1"],"S":["1"],"p":["1"],"p.E":"1","a7.E":"1"},"aU":{"ab":["1"]},"cB":{"p":["2"],"p.E":"2"},"dm":{"cB":["1","2"],"S":["2"],"p":["2"],"p.E":"2"},"hN":{"ab":["2"]},"U":{"a7":["2"],"S":["2"],"p":["2"],"p.E":"2","a7.E":"2"},"I":{"p":["1"],"p.E":"1"},"T":{"ab":["1"]},"hw":{"p":["2"],"p.E":"2"},"hx":{"ab":["2"]},"hu":{"ab":["1"]},"cH":{"p":["1"],"p.E":"1"},"il":{"ab":["1"]},"fN":{"W":["1"],"d3":["1"],"C":["1"],"S":["1"],"p":["1"]},"i4":{"a7":["1"],"S":["1"],"p":["1"],"p.E":"1","a7.E":"1"},"aW":{"f4":[],"bT":[]},"iH":{"f4":[],"bT":[]},"aj":{"f5":[],"bT":[]},"b_":{"f5":[],"bT":[]},"iI":{"fR":[],"bT":[]},"hp":{"ea":["1","2"],"fX":["1","2"],"fC":["1","2"],"iP":["1","2"],"Y":["1","2"]},"fq":{"Y":["1","2"]},"a4":{"fq":["1","2"],"Y":["1","2"]},"f0":{"p":["1"],"p.E":"1"},"f1":{"ab":["1"]},"cR":{"fq":["1","2"],"Y":["1","2"]},"hq":{"dz":["1"],"e6":["1"],"S":["1"],"p":["1"]},"aJ":{"hq":["1"],"dz":["1"],"e6":["1"],"S":["1"],"p":["1"]},"hU":{"dD":[],"ao":[]},"ke":{"ao":[]},"l1":{"ao":[]},"iK":{"d0":[]},"dT":{"ez":[]},"jw":{"ez":[]},"jx":{"ez":[]},"kY":{"ez":[]},"kV":{"ez":[]},"fk":{"ez":[]},"kM":{"ao":[]},"cg":{"aa":["1","2"],"wo":["1","2"],"Y":["1","2"],"aa.K":"1","aa.V":"2"},"ad":{"S":["1"],"p":["1"],"p.E":"1"},"ci":{"ab":["1"]},"ay":{"S":["1"],"p":["1"],"p.E":"1"},"al":{"ab":["1"]},"J":{"S":["P<1,2>"],"p":["P<1,2>"],"p.E":"P<1,2>"},"cA":{"ab":["P<1,2>"]},"hJ":{"cg":["1","2"],"aa":["1","2"],"wo":["1","2"],"Y":["1","2"],"aa.K":"1","aa.V":"2"},"f4":{"bT":[]},"f5":{"bT":[]},"fR":{"bT":[]},"hH":{"CN":[],"q3":[]},"lF":{"i_":[],"fD":[]},"lk":{"p":["i_"],"p.E":"i_"},"ll":{"ab":["i_"]},"ib":{"fD":[]},"lY":{"p":["fD"],"p.E":"fD"},"lZ":{"ab":["fD"]},"fE":{"e2":[],"a6":[],"ah":[]},"eI":{"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"e2":{"a6":[],"ah":[]},"hS":{"a6":[]},"kp":{"a6":[],"ah":[]},"b7":{"c_":["1"],"a6":[]},"hQ":{"W":["y"],"b7":["y"],"C":["y"],"c_":["y"],"S":["y"],"a6":[],"p":["y"],"ax":["y"]},"hR":{"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"]},"hP":{"o8":[],"W":["y"],"b7":["y"],"C":["y"],"c_":["y"],"S":["y"],"a6":[],"p":["y"],"ax":["y"],"ah":[],"W.E":"y","ax.E":"y"},"kq":{"W":["y"],"b7":["y"],"C":["y"],"c_":["y"],"S":["y"],"a6":[],"p":["y"],"ax":["y"],"ah":[],"W.E":"y","ax.E":"y"},"kr":{"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"ks":{"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"kt":{"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"ku":{"wF":[],"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"kv":{"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"hT":{"ig":[],"W":["l"],"b7":["l"],"C":["l"],"c_":["l"],"S":["l"],"a6":[],"p":["l"],"ax":["l"],"ah":[],"W.E":"l","ax.E":"l"},"lw":{"ao":[]},"fW":{"dD":[],"ao":[]},"cJ":{"ab":["1"]},"cp":{"p":["1"],"p.E":"1"},"b3":{"ao":[]},"io":{"lq":["1"]},"aB":{"bZ":["1"]},"iV":{"yS":[]},"lP":{"iV":[],"yS":[]},"iu":{"aa":["1","2"],"Y":["1","2"]},"iw":{"iu":["1","2"],"aa":["1","2"],"Y":["1","2"],"aa.K":"1","aa.V":"2"},"f_":{"S":["1"],"p":["1"],"p.E":"1"},"iv":{"ab":["1"]},"co":{"dz":["1"],"yk":["1"],"e6":["1"],"S":["1"],"p":["1"]},"f2":{"ab":["1"]},"W":{"C":["1"],"S":["1"],"p":["1"]},"aa":{"Y":["1","2"]},"iy":{"S":["2"],"p":["2"],"p.E":"2"},"iz":{"ab":["2"]},"fC":{"Y":["1","2"]},"ea":{"fX":["1","2"],"fC":["1","2"],"iP":["1","2"],"Y":["1","2"]},"dz":{"e6":["1"],"S":["1"],"p":["1"]},"iJ":{"dz":["1"],"e6":["1"],"S":["1"],"p":["1"]},"fO":{"dz":["1"],"m2":["1"],"e6":["1"],"S":["1"],"p":["1"]},"lC":{"aa":["j","@"],"Y":["j","@"],"aa.K":"j","aa.V":"@"},"lD":{"a7":["j"],"S":["j"],"p":["j"],"p.E":"j","a7.E":"j"},"jq":{"ev":["C<l>","j"]},"jM":{"ev":["j","C<l>"]},"hK":{"ao":[]},"kg":{"ao":[]},"kf":{"ev":["F?","j"]},"l5":{"ev":["j","C<l>"]},"ew":{"b5":["ew"]},"y":{"bd":[],"b5":["bd"]},"dV":{"b5":["dV"]},"l":{"bd":[],"b5":["bd"]},"C":{"S":["1"],"p":["1"]},"bd":{"b5":["bd"]},"i_":{"fD":[]},"e6":{"S":["1"],"p":["1"]},"j":{"b5":["j"],"q3":[]},"lv":{"E":[]},"jm":{"ao":[]},"dD":{"ao":[]},"cu":{"ao":[]},"fG":{"ao":[]},"k6":{"ao":[]},"ih":{"ao":[]},"l0":{"ao":[]},"fL":{"ao":[]},"jz":{"ao":[]},"kx":{"ao":[]},"i9":{"ao":[]},"m_":{"d0":[]},"bl":{"D0":[]},"iR":{"l3":[]},"lT":{"l3":[]},"lr":{"l3":[]},"lB":{"wy":[]},"ef":{"wy":[]},"eM":{"E":[]},"bs":{"dy":[]},"bm":{"dy":[]},"cC":{"dy":[]},"cx":{"dy":[]},"ky":{"dy":[]},"eC":{"E":[]},"jl":{"E":[]},"d5":{"E":[]},"ft":{"E":[]},"js":{"E":[]},"jy":{"E":[]},"jI":{"E":[]},"eP":{"E":[]},"e8":{"E":[]},"ey":{"E":[]},"cf":{"E":[]},"i3":{"E":[]},"cS":{"E":[]},"fH":{"E":[]},"i0":{"CQ":[]},"lA":{"c1":[]},"m0":{"c1":[]},"lM":{"CP":[]},"lx":{"C0":[]},"i8":{"E":[]},"bP":{"b5":["bP"]},"bN":{"b5":["bN"]},"fx":{"E":[]},"ip":{"E":[]},"hm":{"an":[]},"lo":{"ac":[]},"jt":{"an":[]},"lp":{"ac":[]},"jG":{"an":[]},"ls":{"ac":[]},"ir":{"E":[]},"hs":{"an":[]},"lt":{"ac":[]},"jK":{"an":[]},"lu":{"ac":[]},"k0":{"an":[]},"lz":{"ac":[]},"ko":{"an":[]},"lG":{"ac":[]},"ju":{"CO":[]},"hX":{"an":[]},"lN":{"ac":[]},"kG":{"an":[]},"lO":{"ac":[]},"kP":{"an":[]},"lR":{"ac":[]},"kQ":{"an":[]},"lS":{"ac":[]},"kT":{"an":[]},"lV":{"ac":[]},"kS":{"an":[]},"lU":{"ac":[]},"l6":{"an":[]},"m3":{"ac":[]},"lh":{"an":[]},"m6":{"ac":[]},"jX":{"E":[]},"hz":{"E":[]},"jZ":{"E":[]},"k_":{"E":[]},"eB":{"E":[]},"hA":{"E":[]},"eR":{"E":[]},"d2":{"E":[]},"fp":{"E":[]},"jH":{"BK":[]},"fT":{"E":[]},"b9":{"E":[]},"jr":{"E":[]},"et":{"E":[]},"jD":{"E":[]},"jF":{"E":[]},"dI":{"dt":[]},"lf":{"C6":[]},"jp":{"E":[]},"cd":{"E":[]},"eA":{"E":[]},"iA":{"d9":[]},"ex":{"E":[]},"dn":{"E":[]},"dW":{"E":[]},"hy":{"E":[]},"dZ":{"E":[]},"hl":{"E":[]},"kz":{"E":[]},"i1":{"E":[]},"eO":{"E":[]},"cG":{"E":[]},"dB":{"E":[]},"bR":{"E":[]},"by":{"E":[]},"k8":{"E":[]},"eX":{"E":[]},"cl":{"E":[]},"cM":{"E":[]},"cv":{"E":[]},"cN":{"E":[]},"di":{"E":[]},"dh":{"E":[]},"dQ":{"E":[]},"dR":{"E":[]},"es":{"E":[]},"dP":{"E":[]},"dq":{"E":[]},"cP":{"E":[]},"cQ":{"E":[]},"dr":{"E":[]},"dp":{"E":[]},"ds":{"E":[]},"ce":{"E":[]},"cw":{"E":[]},"jj":{"E":[]},"bi":{"E":[]},"ck":{"E":[]},"e4":{"E":[]},"cE":{"E":[]},"bQ":{"E":[]},"bx":{"E":[]},"i6":{"E":[]},"bO":{"E":[]},"c3":{"E":[]},"c4":{"E":[]},"eb":{"E":[]},"d6":{"E":[]},"iG":{"wA":[]},"fP":{"wA":[]},"Cf":{"C":["l"],"S":["l"],"p":["l"]},"ig":{"C":["l"],"S":["l"],"p":["l"]},"D5":{"C":["l"],"S":["l"],"p":["l"]},"Cd":{"C":["l"],"S":["l"],"p":["l"]},"wF":{"C":["l"],"S":["l"],"p":["l"]},"Ce":{"C":["l"],"S":["l"],"p":["l"]},"D4":{"C":["l"],"S":["l"],"p":["l"]},"o8":{"C":["y"],"S":["y"],"p":["y"]},"C_":{"C":["y"],"S":["y"],"p":["y"]}}'))
A.DO(v.typeUniverse,JSON.parse('{"fN":1,"iW":2,"b7":1,"iJ":1,"iQ":1,"jC":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a_
return{mq:s("cM"),dx:s("hk"),bC:s("ct"),v:s("b3"),iF:s("jo"),ul:s("dh"),EL:s("cN"),xs:s("cv"),gc:s("di"),lT:s("ff"),bJ:s("fg"),gI:s("fh"),ya:s("fi"),z3:s("bN"),Bu:s("fl"),rO:s("fo"),sU:s("dU"),hO:s("b5<@>"),CH:s("ho"),p:s("a4<j,j>"),I:s("a4<j,l>"),M:s("aJ<j>"),f7:s("ew"),fP:s("bO"),yb:s("dV"),he:s("S<@>"),yW:s("cd"),g:s("bY"),Ct:s("E"),yt:s("ao"),hl:s("a0"),B:s("o8"),pH:s("aK"),Fr:s("cO"),BO:s("ez"),ls:s("bZ<au>"),aJ:s("dp"),x:s("ce"),bK:s("dq"),gm:s("dr"),dn:s("cP"),mx:s("ds"),j_:s("cQ"),EJ:s("cR<bQ,j>"),_:s("dt"),Eb:s("cw"),qX:s("dZ"),mF:s("cU"),eO:s("k5<F>"),iO:s("cx"),oW:s("cV"),fl:s("cy"),FA:s("p<ho>"),yT:s("p<j>"),x6:s("p<cm>"),oJ:s("p<y>"),tY:s("p<@>"),uI:s("p<l>"),Fg:s("t<ct>"),km:s("t<fo>"),sa:s("t<cc>"),ns:s("t<jL>"),cO:s("t<dl>"),r:s("t<bY>"),uH:s("t<jP>"),Dl:s("t<a0>"),iJ:s("t<bZ<~>>"),pC:s("t<jU>"),C1:s("t<dt>"),ka:s("t<bf>"),Fm:s("t<eD>"),vS:s("t<cT>"),pW:s("t<H9<F>>"),hr:s("t<eE>"),s3:s("t<cx>"),sL:s("t<a6>"),Bv:s("t<ki>"),yH:s("t<bh>"),Bq:s("t<P<j,j>>"),rq:s("t<Y<j,F>>"),A7:s("t<Y<j,j>>"),cs:s("t<Y<j,@>>"),fv:s("t<kl>"),td:s("t<hO>"),s6:s("t<bs>"),pq:s("t<az>"),bA:s("t<dw>"),xz:s("t<bt>"),b4:s("t<bj>"),s0:s("t<eJ>"),hc:s("t<cX>"),ea:s("t<cY>"),Fk:s("t<kC>"),qP:s("t<bv>"),kv:s("t<eN>"),nR:s("t<+(j,C<bv>)>"),kd:s("t<+(j,j)>"),rh:s("t<+influence,light(y,bz)>"),wt:s("t<+(l,j)>"),wx:s("t<+(y,y,y,y)>"),e_:s("t<an>"),u:s("t<ac>"),Ft:s("t<i0>"),C:s("t<O>"),h1:s("t<bw>"),s2:s("t<c1>"),eY:s("t<aX>"),xB:s("t<d_>"),El:s("t<fK>"),AM:s("t<aP<bN>>"),fs:s("t<aP<bP>>"),cv:s("t<bz>"),DZ:s("t<dC>"),s:s("t<j>"),qy:s("t<kX>"),fa:s("t<c2>"),k:s("t<M>"),h:s("t<a>"),ld:s("t<ik>"),Dc:s("t<dF>"),Fi:s("t<c5>"),jV:s("t<d7>"),yo:s("t<eV>"),E:s("t<bb>"),uk:s("t<bp>"),wf:s("t<iA>"),il:s("t<ee>"),l5:s("t<ed>"),ow:s("t<lK>"),j5:s("t<lL>"),pv:s("t<fS>"),Fy:s("t<eg<eH>>"),EM:s("t<eg<cj>>"),w_:s("t<eg<bw>>"),f2:s("t<eg<dH>>"),Fa:s("t<fU>"),sj:s("t<n>"),n:s("t<y>"),zz:s("t<@>"),t:s("t<l>"),vj:s("t<a6?>"),Cf:s("t<F?>"),AN:s("t<bd>"),w:s("hG"),m:s("a6"),w7:s("a6()"),ud:s("du"),Eh:s("c_<@>"),vp:s("C<fo>"),hk:s("C<bY>"),b:s("C<bf>"),xp:s("C<cx>"),nx:s("C<a6>"),rW:s("C<Y<j,j>>"),qr:s("C<bs>"),R:s("C<az>"),fG:s("C<cX>"),ba:s("C<cY>"),Es:s("C<bv>"),DX:s("C<+(j,j)>"),pL:s("C<+(l,j)>"),xM:s("C<+(y,y,y,y)>"),bE:s("C<bw>"),fx:s("C<d_>"),a:s("C<j>"),gt:s("C<ik>"),D0:s("C<dF>"),cf:s("C<c5>"),p7:s("C<d7>"),lm:s("C<it>"),dd:s("C<y>"),j:s("C<@>"),J:s("C<l>"),ik:s("C<a6?>"),vX:s("C<F?>"),m2:s("hM"),h6:s("P<j,aK>"),gJ:s("P<j,cO>"),q:s("P<j,j>"),no:s("P<j,bm>"),AC:s("P<@,@>"),pr:s("P<l,@>"),yx:s("P<j,C<j>>"),mf:s("Y<j,dt>"),vD:s("Y<j,cC>"),ap:s("Y<j,az>"),G:s("Y<j,j>"),m0:s("Y<j,n>"),gG:s("Y<j,y>"),P:s("Y<j,@>"),f:s("Y<@,@>"),pG:s("Y<l,eT>"),tQ:s("Y<l,eU>"),aD:s("Y<j,C<+(y,y,y,y)>>"),Bx:s("Y<j,C<j>>"),oZ:s("Y<j,F?>"),q1:s("Y<c4,C<c5>>"),ee:s("Y<l,Y<j,j>>"),jT:s("U<j,j?>"),pw:s("cC"),kc:s("bs"),rV:s("fE"),mV:s("eI"),c:s("au"),K:s("F"),BB:s("bP"),A:s("az"),oP:s("dw"),wJ:s("bi"),E4:s("bt"),A_:s("cY"),T:s("bv"),DL:s("hW"),Y:s("eN"),op:s("Hb"),ep:s("+()"),k0:s("+(bs,cj)"),ut:s("+(bm,dH)"),rf:s("+(y,y)"),mn:s("+influence,light(y,bz)"),nz:s("+(y,y,y,y)"),ez:s("i_"),wZ:s("ac"),tc:s("cZ<cx,bw>"),ou:s("cZ<cC,eH>"),wm:s("cZ<bs,cj>"),qq:s("cZ<bm,dH>"),j2:s("O"),m3:s("bw"),yz:s("c1"),U:s("aX"),F3:s("d_"),Q:s("e6<j>"),oG:s("e6<l>"),en:s("bx"),gl:s("aY"),W:s("e7"),u5:s("by"),bG:s("bR"),ho:s("fK"),EH:s("aP<bN>"),E0:s("aP<bP>"),l:s("d0"),w8:s("dC"),qL:s("b9"),N:s("j"),Aj:s("bm"),jP:s("cm"),d:s("c2"),bp:s("e8"),sg:s("ah"),bs:s("dD"),qF:s("e9"),hL:s("ea<j,j>"),jC:s("l2"),eP:s("l3"),cV:s("M"),a7:s("a"),qY:s("bA"),L:s("bS"),gM:s("c3"),hF:s("c4"),vw:s("eT"),BX:s("eU"),aA:s("dF"),AP:s("c5"),sy:s("le"),bB:s("ba"),aS:s("d7"),fu:s("eV"),fw:s("I<bO>"),vL:s("I<cd>"),vK:s("I<ce>"),Fj:s("I<by>"),rZ:s("I<bR>"),vY:s("I<j>"),r4:s("I<bA>"),g2:s("I<c3>"),cE:s("I<c4>"),rt:s("T<bx>"),xG:s("T<aY>"),fh:s("T<bA>"),Ai:s("cH<j>"),e:s("bb"),dr:s("it"),hR:s("aB<@>"),BT:s("iw<F?,F?>"),Ez:s("d9"),rL:s("fQ"),fo:s("lH"),xT:s("ee"),wU:s("ed"),la:s("lI"),cX:s("lJ"),qS:s("iF"),jS:s("fV"),kA:s("lW"),Br:s("cp<c1>"),V:s("iT"),jm:s("iU"),y:s("n"),Bs:s("n()"),kr:s("n(bO)"),e2:s("n(cd)"),rg:s("n(ce)"),bl:s("n(F)"),pz:s("n(bx)"),aV:s("n(aY)"),y2:s("n(by)"),ty:s("n(bR)"),Ag:s("n(j)"),rd:s("n(bA)"),da:s("n(c3)"),qR:s("n(c4)"),i:s("y"),z:s("@"),pF:s("@()"),h_:s("@(F)"),nW:s("@(F,d0)"),S:s("l"),eZ:s("bZ<au>?"),r9:s("t<F?>?"),uh:s("a6?"),rK:s("C<@>?"),jd:s("Y<j,C<j>>?"),X:s("F?"),D:s("j?"),oI:s("j?(j)"),Fx:s("ig?"),F:s("eY<@,@>?"),Af:s("lE?"),k7:s("n?"),wK:s("n(fI)?"),u6:s("y?"),lo:s("l?"),s7:s("bd?"),Z:s("~()?"),Cv:s("~(dN)?"),kC:s("~(dO)?"),pf:s("~(fr)?"),hq:s("~(fy)?"),CA:s("~(dY)?"),hQ:s("~(bQ)?"),Ci:s("~(bx)?"),nf:s("~(bR,by)?"),DI:s("~(j,y)?"),xl:s("~(n)?"),vR:s("~(l)?"),dt:s("~(l,j)?"),o:s("bd"),H:s("~"),O:s("~()"),m1:s("~(j,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hW=J.k9.prototype
B.a=J.t.prototype
B.d=J.hF.prototype
B.c=J.eF.prototype
B.b=J.e0.prototype
B.hX=J.du.prototype
B.hY=J.hI.prototype
B.r=A.hP.prototype
B.d2=A.hT.prototype
B.dg=J.kA.prototype
B.bL=J.e9.prototype
B.a7=new A.cM(1,"standard")
B.K=new A.ji(B.a7)
B.bP=new A.cM(0,"concise")
B.bQ=new A.cM(2,"verbose")
B.an=new A.dN(null,null,null,null,null)
B.mX=new A.jj(0,"none")
B.mY=new A.jl(0,"opaque")
B.dS=new A.jp(4,"ambience")
B.bU=new A.cv(3,"mono")
B.aM=new A.di(0,"full")
B.bT=new A.cv(0,"auto")
B.bS=new A.cN(1,"standard")
B.bR=new A.dh(0,"defaultMix")
B.aN=new A.dO(B.bT,B.bS,B.aM,B.bR)
B.dZ=new A.hl("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.e_=new A.hl("webgl2 unavailable",0,"webglUnavailable")
B.a_=new A.i1(1,"pixeldart")
B.e0=new A.fj(B.a_,!1,!0,!1,null,!1,null,!1,null)
B.bW=new A.dP(1,"capturing")
B.e1=new A.dj(B.bW,null)
B.bX=new A.dP(3,"rejected")
B.aO=new A.dj(B.bX,null)
B.bY=new A.dP(4,"applied")
B.bV=new A.dj(B.bY,null)
B.bZ=new A.dP(5,"cancelled")
B.e2=new A.dj(B.bZ,null)
B.aP=new A.dP(2,"conflict")
B.ao=new A.jr(0,"add")
B.e6=new A.et(0,"zero")
B.a8=new A.et(1,"one")
B.a9=new A.js(0,"alpha")
B.F=new A.dQ(1,"button")
B.p=new A.dR(0,"normal")
B.e9=new A.b4("settings.back",B.F,"back","back to pause menu",B.p)
B.ap=new A.dQ(0,"heading")
B.ea=new A.b4("settings.heading",B.ap,"Settings",null,B.p)
B.eb=new A.b4("settings.controls.heading",B.ap,"Controls",null,B.p)
B.ec=new A.b4("settings.controls.back",B.F,"back","back to settings categories",B.p)
B.ed=new A.b4("pause.heading",B.ap,"Paused",null,B.p)
B.ee=new A.dQ(3,"slider")
B.ef=new A.dQ(4,"toggle")
B.c_=new A.dQ(5,"keybind")
B.aq=new A.dR(5,"disabled")
B.eg=new A.dR(6,"error")
B.eh=new A.dR(7,"destructive")
B.c0=new A.dR(8,"remapping")
B.c1=new A.hk()
B.c2=new A.nh()
B.aQ=new A.ni()
B.mZ=new A.nk()
B.ei=new A.jq()
B.c3=new A.nv()
B.ej=new A.hu(A.a_("hu<0&>"))
B.c4=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ek=function() {
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
B.ep=function(getTagFallback) {
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
B.el=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eo=function(hooks) {
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
B.en=function(hooks) {
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
B.em=function(hooks) {
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
B.c5=function(hooks) { return hooks; }

B.k=new A.kf()
B.n_=new A.px()
B.eq=new A.F()
B.er=new A.kx()
B.n0=new A.qd()
B.es=new A.qe()
B.et=new A.d_()
B.ae=new A.cl(1,"gradeLUT")
B.eu=new A.d_()
B.ev=new A.qL()
B.ew=new A.qN()
B.f=new A.qS()
B.c6=new A.l5()
B.m3=new A.d5(0,"position")
B.m8=new A.bA(B.m3,0,3)
B.dK=new A.d5(1,"normal")
B.m9=new A.bA(B.dK,3,3)
B.m4=new A.d5(2,"color")
B.ma=new A.bA(B.m4,6,4)
B.m5=new A.d5(4,"alpha")
B.mb=new A.bA(B.m5,10,1)
B.m6=new A.d5(5,"uv0")
B.mc=new A.bA(B.m6,11,2)
B.m7=new A.d5(8,"legacyMaterialEffect")
B.md=new A.bA(B.m7,13,1)
B.U=s([B.m8,B.m9,B.ma,B.mb,B.mc,B.md],A.a_("t<bA>"))
B.aa=new A.rV()
B.aR=new A.lB()
B.y=new A.lP()
B.ar=new A.m_()
B.ex=new A.fm(1.3089969389957472,0.1,60)
B.ey=new A.fm(1.0471975511965976,0.1,60)
B.ez=new A.fm(0.8726646259971648,0.08,45)
B.ab=new A.fp(0,"colorOnly")
B.c7=new A.fp(1,"colorAndDepth")
B.aS=new A.fp(2,"depthOnly")
B.aT=new A.jy(1,"srgb")
B.as=new A.jD(1,"back")
B.at=new A.jF(0,"less")
B.au=new A.bO(0,"open")
B.c8=new A.bO(1,"chain")
B.c9=new A.bO(2,"throughDoor")
B.ca=new A.bO(3,"letterbox")
B.ac=new A.bO(4,"ignore")
B.S=new A.ft(0,"opaque")
B.eL=new A.ft(1,"masked")
B.aU=new A.ft(2,"blended")
B.eM=new A.fu(!1,B.at,!1,!0,B.a8,B.a8,B.ao,!1,B.as,!0,!1,!0,!0,!0,!0,!1)
B.eN=new A.fu(!0,B.at,!1,!0,B.a8,B.a8,B.ao,!0,B.as,!0,!1,!0,!0,!0,!0,!1)
B.e7=new A.et(2,"srcAlpha")
B.e8=new A.et(3,"oneMinusSrcAlpha")
B.eO=new A.fu(!0,B.at,!1,!0,B.e7,B.e8,B.ao,!0,B.as,!0,!1,!0,!0,!0,!0,!1)
B.eP=new A.dV(0)
B.eQ=new A.dV(24e5)
B.cb=new A.cd(0,"compliance")
B.eR=new A.fv(B.cb)
B.cc=new A.cd(1,"rupture")
B.eS=new A.fv(B.cc)
B.cd=new A.cd(2,"synchronisation")
B.eT=new A.fv(B.cd)
B.ce=new A.ex(0,"front")
B.eU=new A.ex(1,"rearService")
B.eV=new A.ex(2,"sideBoundary")
B.eW=new A.ex(3,"roofline")
B.m=new A.dW(0,"north")
B.v=new A.dW(1,"east")
B.l=new A.dW(2,"south")
B.G=new A.dW(3,"west")
B.av=new A.hy(0,"ground")
B.aw=new A.hy(1,"first")
B.eX=new A.dn(0,"mantle")
B.eY=new A.dn(1,"portal")
B.f_=new A.dn(3,"inventory")
B.cf=new A.dn(4,"aftermath")
B.eZ=new A.dn(2,"window")
B.f1=new A.dX(B.eZ,"shutter","the shutter")
B.f0=new A.dn(5,"none")
B.f2=new A.dX(B.f0,null,null)
B.f3=new A.H("saved mantle history is malformed",null,null)
B.f4=new A.H("rupture elapsed time is malformed",null,null)
B.f5=new A.H("presentation keys must be strings",null,null)
B.f6=new A.H("unsupported accessibility profile",null,null)
B.f7=new A.H("inventory inspections must be an object",null,null)
B.cg=new A.H("saved mantle state is malformed",null,null)
B.f8=new A.H("inactive rupture has elapsed time",null,null)
B.f9=new A.H("control sensitivity is outside 0.1\u20133.0",null,null)
B.fa=new A.H("invalid action bindings",null,null)
B.fb=new A.H("listener room is empty",null,null)
B.fc=new A.H("control bindings conflict",null,null)
B.fd=new A.H("saved difficulty state is malformed",null,null)
B.fe=new A.H("saved house drift state is malformed",null,null)
B.ff=new A.H("saved sleep record is malformed",null,null)
B.fg=new A.H("UI scale must be between 0.8 and 2.0",null,null)
B.fh=new A.H("unsupported settings store",null,null)
B.fi=new A.H("settings values must be an object",null,null)
B.fj=new A.H("saved day-loop sleepHistory must be a list",null,null)
B.fk=new A.H("invalid anisotropy limit",null,null)
B.fl=new A.H("audio event position is not finite",null,null)
B.fm=new A.H("event sequence must be non-negative",null,null)
B.fn=new A.H("inventory inspection counts are invalid",null,null)
B.fo=new A.H("only keybinds can be remapping",null,null)
B.fp=new A.H("modelScale must be positive and finite",null,null)
B.fq=new A.H("listener position is not finite",null,null)
B.fr=new A.H("invalid action ID",null,null)
B.fs=new A.H("saved window state is malformed",null,null)
B.ft=new A.H("unsupported graphics preset",null,null)
B.fu=new A.H("save run and meta must be objects",null,null)
B.fv=new A.H("saved house state is malformed",null,null)
B.fw=new A.H("saved sleep record must be an object",null,null)
B.fx=new A.H("sound cue must be a non-empty string",null,null)
B.fy=new A.H("saved session run is malformed",null,null)
B.fz=new A.H("save map keys must be strings",null,null)
B.fA=new A.H("unsupported graphics profile",null,null)
B.fB=new A.H("unsupported audio options",null,null)
B.fC=new A.H("transform.scale must be positive",null,null)
B.fD=new A.H("Escape is reserved for pause navigation",null,null)
B.fE=new A.H("saved day-loop state is malformed",null,null)
B.fF=new A.H("rupture extinguished mantle is unknown",null,null)
B.ch=new A.H("unsupported controls profile",null,null)
B.ci=new A.H("saved portal state is malformed",null,null)
B.fG=new A.H("acoustic portal profile is not finite",null,null)
B.fH=new A.H("saved house state does not match this house",null,null)
B.fI=new A.H("presentation snapshot contains a non-finite number",null,null)
B.fJ=new A.H("unsupported gameplay settings profile",null,null)
B.fK=new A.H("save contains a non-finite number",null,null)
B.fL=new A.H("unsupported graphics store",null,null)
B.fM=new A.H("brush component needs an id and label",null,null)
B.fN=new A.H("text.json root must be an object",null,null)
B.fO=new A.H("event kind is empty",null,null)
B.fP=new A.H("invalid control binding token",null,null)
B.fQ=new A.H("audio transmission muffle is invalid",null,null)
B.fR=new A.H("acoustic portal muffle order is invalid",null,null)
B.fS=new A.H("unsupported settings profile",null,null)
B.fT=new A.H("saved session clock is malformed",null,null)
B.fU=new A.H("rupture mantle IDs are malformed",null,null)
B.fV=new A.H("invalid gameplay setting: contextualReminders",null,null)
B.fW=new A.H("invalid screen-reader verbosity",null,null)
B.fX=new A.H("saved sleep record has an unknown enum",null,null)
B.fY=new A.H("audio cue variants are empty",null,null)
B.fZ=new A.H("save root must be an object",null,null)
B.h_=new A.H("audio event identity is empty",null,null)
B.h0=new A.H("render capabilities contain invalid limits",null,null)
B.h1=new A.H("saved house overrides are malformed",null,null)
B.T=new A.ch(0,0,0)
B.cH=new A.ch(1,1,1)
B.iH=s([],t.Fk)
B.b9=s([],t.cv)
B.h2=new A.jT(B.T,B.T,0,1,null,null,B.cH,0,null,B.iH,B.b9)
B.cj=new A.aK(0,0,0)
B.h3=new A.ey(0,"idle")
B.ax=new A.ey(1,"active")
B.h4=new A.ey(2,"ended")
B.h5=new A.ey(3,"aborted")
B.ck=new A.fx(0,"outside")
B.h6=new A.fx(1,"intersects")
B.h7=new A.fx(2,"inside")
B.h8=new A.eA(0,"timeAdvanced")
B.h9=new A.eA(1,"dayEndReached")
B.ha=new A.eA(4,"slept")
B.hb=new A.eA(5,"complianceFloorTripped")
B.cl=new A.dp(0,"important")
B.cm=new A.dp(1,"always")
B.aV=new A.ce(0,"pauseAndMute")
B.cn=new A.dq(0,"press")
B.co=new A.dq(1,"hold")
B.cp=new A.dr(0,"compact")
B.cq=new A.dr(1,"spacious")
B.cr=new A.cP(1,"standard")
B.cs=new A.cP(2,"detailed")
B.ct=new A.ds(0,"toast")
B.cu=new A.ds(1,"detailed")
B.cv=new A.cQ(1,"readable")
B.hh=new A.hz(0,"vertex")
B.cw=new A.hz(1,"indices")
B.cx=new A.jX(0,"staticDraw")
B.h=new A.hA(0,"ready")
B.ad=new A.hA(1,"lost")
B.hi=new A.eB(0,"color")
B.cy=new A.eB(1,"colorAndGlow")
B.hj=new A.eB(2,"colorDepthGlow")
B.aW=new A.eB(3,"depthOnly")
B.ay=new A.jZ(1,"linear")
B.cz=new A.k_(0,"clampToEdge")
B.hk=new A.jY(1,1,1,!1,B.ay,B.ay,B.cz,1)
B.hl=new A.cS(0,"beforeShadow")
B.hm=new A.cS(2,"beforeDepth")
B.cA=new A.cS(3,"afterDepth")
B.cB=new A.cS(4,"beforeWorld")
B.hn=new A.cS(5,"afterWorld")
B.L=new A.cS(6,"afterResolve")
B.ho=new A.cS(9,"beforePresent")
B.cC=new A.cf(0,"readBeforeWrite")
B.hp=new A.cf(1,"duplicateWriter")
B.hq=new A.cf(2,"sampledMultisampledAttachment")
B.aX=new A.cf(3,"invalidResolve")
B.hr=new A.cf(4,"formatOrSizeMismatch")
B.hs=new A.cf(5,"unversionedReadWrite")
B.ht=new A.cf(6,"invalidHistoryRead")
B.hu=new A.cf(7,"dependencyCycle")
B.hv=new A.cf(8,"missingCapability")
B.cD=new A.cw(0,"high")
B.aY=new A.cw(1,"standard")
B.aZ=new A.dY(1,B.aY,"auto",!1,"display","off","high")
B.az=new A.dZ(0,"player")
B.b_=new A.dZ(1,"inserted")
B.cE=new A.dZ(2,"warden")
B.cF=new A.eC(0,"wrongKind")
B.cG=new A.eC(1,"staleGeneration")
B.hy=new A.eC(2,"doubleRelease")
B.aA=new A.eC(3,"releasedResource")
B.hB=new A.cT("kitchen-range","settle")
B.hC=new A.cT("front-door-knocker","knock")
B.hD=new A.cT("cellar-drain","drip")
B.hE=new A.cT("bedroom-timber","creak")
B.hF=new A.cT("kitchen-pipe","tick")
B.hG=new A.cT("bathroom-cistern","settle")
B.hH=new A.cT("landing-window","wind")
B.hV=new A.k8(1,"visitor")
B.hZ=new A.pu(null)
B.i_=new A.pv(null)
B.b0=new A.kh(!1,0,0.85,0.92,1)
B.i0=new A.ch(0.008,0.012,0.024)
B.cI=s([0,2,2,3],t.t)
B.i1=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b1=s([B.cl,B.cm],A.a_("t<dp>"))
B.i2=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.E=new A.bx(0,"audio")
B.Q=new A.i6(0,"level")
B.lk=new A.aY("master","Master",B.E,B.Q,1,0,1,"audio")
B.lp=new A.aY("voice","Visitor voice",B.E,B.Q,1,0,1,"audio")
B.lg=new A.aY("effects","Effects",B.E,B.Q,1,0,1,"audio")
B.lh=new A.aY("ambience","House ambience",B.E,B.Q,1,0,1,"audio")
B.ll=new A.aY("music","Music",B.E,B.Q,1,0,1,"audio")
B.aE=new A.bx(1,"display")
B.lo=new A.aY("brightness","Display brightness",B.aE,B.Q,1,0.6,1.4,"display")
B.ag=new A.i6(1,"toggle")
B.lj=new A.aY("muted","Mute house audio",B.E,B.ag,!1,null,null,"audio")
B.a1=new A.bx(2,"accessibility")
B.lm=new A.aY("mono","Mono-compatible mix",B.a1,B.ag,!1,null,null,"audio")
B.li=new A.aY("high-contrast","High-contrast interface",B.a1,B.ag,!1,null,null,"display")
B.ln=new A.aY("strong-highlights","Strong focus highlights",B.a1,B.ag,!1,null,null,"display")
B.C=s([B.lk,B.lp,B.lg,B.lh,B.ll,B.lo,B.lj,B.lm,B.li,B.ln],A.a_("t<aY>"))
B.z=s(["who","verb","object","place","time"],t.s)
B.i3=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dT=new A.dh(1,"strong")
B.b2=s([B.bR,B.dT],A.a_("t<dh>"))
B.e3=new A.es(0,"swap")
B.e4=new A.es(1,"replace")
B.e5=new A.es(2,"cancel")
B.i4=s([B.e3,B.e4,B.e5],A.a_("t<es>"))
B.i5=s([2,5,9,12,16,19],t.t)
B.hc=new A.ce(1,"pauseOnly")
B.hd=new A.ce(2,"continuePlayback")
B.aB=s([B.aV,B.hc,B.hd],A.a_("t<ce>"))
B.i6=s(["uQuantizationBits","uDitherStrength"],t.s)
B.i8=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.i9=s([B.au,B.c8,B.c9,B.ca,B.ac],A.a_("t<bO>"))
B.ia=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.ib=s(["30","60","display"],t.s)
B.am=new A.c4(0,"full")
B.bM=new A.c4(1,"compressed")
B.bN=new A.c4(2,"off")
B.cJ=s([B.am,B.bM,B.bN],A.a_("t<c4>"))
B.ic=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dY=new A.di(1,"reduced")
B.b3=s([B.aM,B.dY],A.a_("t<di>"))
B.dU=new A.cN(0,"wide")
B.dV=new A.cN(2,"night")
B.b4=s([B.dU,B.bS,B.dV],A.a_("t<cN>"))
B.id=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iq=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cK=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.b5=s([B.cp,B.cq],A.a_("t<dr>"))
B.lD=new A.bR(0,"long")
B.dz=new A.bR(1,"short")
B.cL=s([B.lD,B.dz],A.a_("t<bR>"))
B.b6=s(["Open the door","Keep the chain on","Answer through the door","Use the letterbox","Ignore the knock"],t.s)
B.eE=new A.cc("1 - 9","Select Response",!0)
B.eA=new A.cc("SPACE","Silence Ring",!1)
B.is=s([B.eE,B.eA],t.sa)
B.X=new A.bQ(0,"visual")
B.bm=new A.bQ(1,"graphics")
B.Y=new A.bQ(2,"gameplay")
B.bn=new A.bQ(3,"controls")
B.H=new A.bQ(4,"audio")
B.I=new A.bQ(5,"accessibility")
B.it=s([B.X,B.bm,B.Y,B.bn,B.H,B.I],A.a_("t<bQ>"))
B.iu=s([2.1,4.2,6.3],t.n)
B.iv=s(["master","voice","effects","ambience","music"],t.s)
B.b7=s([B.ct,B.cu],A.a_("t<ds>"))
B.iw=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hw=new A.cw(2,"safe")
B.hx=new A.cw(3,"custom")
B.cM=s([B.cD,B.aY,B.hw,B.hx],A.a_("t<cw>"))
B.D=new A.cl(0,"inactive")
B.by=new A.cl(2,"affineWarp")
B.bz=new A.cl(3,"vertexSnap")
B.bA=new A.cl(4,"tapeGiveup")
B.bB=new A.cl(5,"portalFail")
B.a0=new A.cl(6,"lightsOut")
B.cN=s([B.D,B.ae,B.by,B.bz,B.bA,B.bB,B.a0],A.a_("t<cl>"))
B.ix=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iy=s([B.az,B.b_,B.cE],A.a_("t<dZ>"))
B.iz=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.mS=new A.bp("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.mR=new A.bp("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.mN=new A.bp("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.mV=new A.bp("ronnie.response","named","A route card has Ronnie written on its back.")
B.mU=new A.bp("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iA=s([B.mS,B.mR,B.mN,B.mV,B.mU],t.uk)
B.mT=new A.bp("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.mQ=new A.bp("ronnie.response","named","The name Ronnie holds when the room does not.")
B.mO=new A.bp("denise.revision","accepted","One correction remains yours to protect.")
B.mL=new A.bp("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iB=s([B.mT,B.mQ,B.mO,B.mL],t.uk)
B.M=s([],t.cO)
B.iL=s([],t.Fm)
B.iK=s([],t.vS)
B.iC=s([],A.a_("t<cy>"))
B.iE=s([],t.yH)
B.b8=s([],t.b4)
B.iG=s([],t.ea)
B.V=s([],t.qP)
B.iF=s([],t.u)
B.cP=s([],t.xB)
B.iD=s([],t.El)
B.n=s([],t.s)
B.cQ=s([],t.ld)
B.ba=s([],t.E)
B.iM=s([],t.t)
B.iN=s([],t.zz)
B.hA=new A.hD(15,"kitchen",-0.3,0)
B.hz=new A.hD(19,"spare-room",0,0.3)
B.N=s([B.hA,B.hz],A.a_("t<hD>"))
B.iP=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lA=new A.by(0,"bed")
B.lB=new A.by(1,"chair")
B.lC=new A.by(2,"floor")
B.cR=s([B.lA,B.lB,B.lC],A.a_("t<by>"))
B.iQ=s(["high","medium","low"],t.s)
B.dW=new A.cv(1,"headphones")
B.dX=new A.cv(2,"speakers")
B.bb=s([B.bT,B.dW,B.dX,B.bU],A.a_("t<cv>"))
B.iR=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bc=s([B.cn,B.co],A.a_("t<dq>"))
B.bl=new A.ck(0,"root")
B.d5=new A.bi(0,"pauseMenu")
B.jV=new A.dw(B.bl,B.d5,null)
B.iS=s([B.jV],t.bA)
B.bd=s([B.bP,B.a7,B.bQ],A.a_("t<cM>"))
B.hf=new A.cQ(0,"instant")
B.hg=new A.cQ(2,"slow")
B.be=s([B.hf,B.cv,B.hg],A.a_("t<cQ>"))
B.iT=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.iU=s([B.E,B.aE,B.a1],A.a_("t<bx>"))
B.cS=s([B.m,B.v,B.l,B.G],A.a_("t<dW>"))
B.a2=new A.dB(0,"pbrMaterial")
B.a3=new A.dB(1,"shadowsAndOcclusion")
B.ah=new A.dB(2,"surfaceWeathering")
B.o=new A.dB(3,"atmosphereAndPost")
B.lx=new A.dB(4,"debugView")
B.bf=s([B.a2,B.a3,B.ah,B.o,B.lx],A.a_("t<dB>"))
B.bC=new A.b9(0,"depthTest")
B.bD=new A.b9(1,"depthFunc")
B.bE=new A.b9(2,"depthWrite")
B.bF=new A.b9(3,"blendEnable")
B.bG=new A.b9(4,"blendFunc")
B.bH=new A.b9(5,"blendEquation")
B.bI=new A.b9(6,"cullEnable")
B.bJ=new A.b9(7,"cullFace")
B.dC=new A.b9(8,"frontFace")
B.lG=new A.b9(9,"stencilEnable")
B.dA=new A.b9(10,"colorMask")
B.dB=new A.b9(11,"scissorEnable")
B.iV=s([B.bC,B.bD,B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.dC,B.lG,B.dA,B.dB],A.a_("t<b9>"))
B.aF=new A.cG(0,"none")
B.lr=new A.cG(1,"albedoOnly")
B.ls=new A.cG(2,"normalsOnly")
B.lt=new A.cG(3,"roughnessOnly")
B.lu=new A.cG(4,"metallicOnly")
B.lv=new A.cG(5,"aoOnly")
B.lw=new A.cG(6,"wireframeOnly")
B.cT=s([B.aF,B.lr,B.ls,B.lt,B.lu,B.lv,B.lw],A.a_("t<cG>"))
B.iW=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eI=new A.dl("A.J.",1.275)
B.eG=new A.dl("A.J.",1.53)
B.eJ=new A.dl("A.J.",1.77)
B.eK=new A.dl("A.J.",2.025)
B.eH=new A.dl("A.J.",4.8)
B.iX=s([B.eI,B.eG,B.eJ,B.eK,B.eH],t.cO)
B.iY=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.iZ=s(["uBloomStrength"],t.s)
B.j_=s(["uLutSize","uStrength"],t.s)
B.j0=s([B.cb,B.cc,B.cd],A.a_("t<cd>"))
B.j1=s(["uTexelSize","uNear","uFar"],t.s)
B.cU=s(["uTexelStep"],t.s)
B.j2=s(["uninitialized"],t.s)
B.he=new A.cP(0,"minimal")
B.bg=s([B.he,B.cr,B.cs],A.a_("t<cP>"))
B.mP=new A.bp("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mK=new A.bp("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mJ=new A.bp("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.mM=new A.bp("ronnie.response","named","The route card gives one name its own line.")
B.j3=s([B.mP,B.mK,B.mJ,B.mM],t.uk)
B.a5=new A.c3(0,"waiting")
B.ak=new A.c3(1,"atDoor")
B.al=new A.c3(2,"consulting")
B.aI=new A.c3(3,"resolved")
B.j4=s([B.a5,B.ak,B.al,B.aI],A.a_("t<c3>"))
B.eF=new A.cc("W A S D","Move",!1)
B.eD=new A.cc("TAB","Journal",!1)
B.eC=new A.cc("CAPS","Shader Lab",!1)
B.eB=new A.cc("ESC","Pause",!1)
B.j5=s([B.eF,B.eD,B.eC,B.eB],t.sa)
B.j6=s(["floor-linoleum","ceiling-stained"],t.s)
B.jL={uAlbedo:0}
B.cV=new A.a4(B.jL,[0],t.I)
B.jq={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.cW=new A.a4(B.jq,[2,3,4,5,6],t.I)
B.jS={uSsaoRaw:0,uSceneDepth:1}
B.j7=new A.a4(B.jS,[0,1],t.I)
B.d3={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.ip=s(["KeyW","GamepadDpadUp"],t.s)
B.io=s(["KeyS","GamepadDpadDown"],t.s)
B.ie=s(["KeyA","GamepadDpadLeft"],t.s)
B.ig=s(["KeyD","GamepadDpadRight"],t.s)
B.ih=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.il=s(["KeyQ","GamepadB"],t.s)
B.ir=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.iO=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.im=s(["KeyR","GamepadX"],t.s)
B.ii=s(["KeyF","GamepadRB"],t.s)
B.ij=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.ik=s(["KeyL"],t.s)
B.i7=s(["Escape","GamepadMenu"],t.s)
B.j8=new A.a4(B.d3,[B.ip,B.io,B.ie,B.ig,B.ih,B.il,B.ir,B.iO,B.im,B.ii,B.ij,B.ik,B.i7],A.a_("a4<j,C<j>>"))
B.j9=new A.a4(B.d3,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.jP={uScene:0,uHistory:1}
B.ja=new A.a4(B.jP,[0,1],t.I)
B.jo={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jb=new A.a4(B.jo,["2998513ce371245044aa738df684fb850f7a8e8a","64159cda6a880ac4d0f0c356578a8d80a592bcf0","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.jC={aPosition:0,aUvMat:1}
B.cX=new A.a4(B.jC,[0,4],t.I)
B.jQ={uScene:0,uLut:1}
B.jc=new A.a4(B.jQ,[0,1],t.I)
B.jR={uSource:0}
B.cY=new A.a4(B.jR,[0],t.I)
B.jJ={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jd=new A.a4(B.jJ,[0,1,2,3,4,5,6],t.I)
B.cZ=new A.cR([B.X,"settings.visual",B.bm,"settings.graphics",B.Y,"settings.gameplay",B.bn,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d_=new A.cR([B.X,"visual",B.bm,"graphics",B.Y,"gameplay",B.bn,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jy={uSharp:0,uBlurred:1,uSceneDepth:2}
B.je=new A.a4(B.jy,[0,1,2],t.I)
B.jU={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jf=new A.a4(B.jU,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.jE={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.hR=new A.bg("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hM=new A.bg("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.hQ=new A.bg("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.hT=new A.bg("wallpaper-damp","grime",7106925,0.94,0.76)
B.hN=new A.bg("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.hS=new A.bg("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.hU=new A.bg("wallpaper-peeling","grime",9340536,0.91,0.68)
B.hO=new A.bg("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hK=new A.bg("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hL=new A.bg("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hI=new A.bg("floor-concrete","grime",7828331,0.96,0.92)
B.hJ=new A.bg("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hP=new A.bg("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bh=new A.a4(B.jE,[B.hR,B.hM,B.hQ,B.hT,B.hN,B.hS,B.hU,B.hO,B.hK,B.hL,B.hI,B.hJ,B.hP],A.a_("a4<j,bg>"))
B.jM={uBloom:0}
B.jg=new A.a4(B.jM,[0],t.I)
B.jN={uSceneDepth:0}
B.jh=new A.a4(B.jN,[0],t.I)
B.jO={uScene:0}
B.ji=new A.a4(B.jO,[0],t.I)
B.O={}
B.d1=new A.a4(B.O,[],A.a_("a4<j,hk>"))
B.d0=new A.a4(B.O,[],t.p)
B.bi=new A.a4(B.O,[],A.a_("a4<j,y>"))
B.w=new A.a4(B.O,[],t.I)
B.n2=new A.a4(B.O,[],A.a_("a4<j,j?>"))
B.jj=new A.a4(B.O,[],A.a_("a4<@,@>"))
B.js={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jk=new A.a4(B.js,[0,1,2,3,4,5,6],t.I)
B.d6=new A.cE(0,"resume")
B.d7=new A.cE(1,"settings")
B.d8=new A.cE(2,"controls")
B.d9=new A.cE(3,"save")
B.da=new A.cE(4,"help")
B.db=new A.cE(5,"credits")
B.dc=new A.cE(6,"back")
B.jl=new A.cR([B.d6,"pause.resume",B.d7,"pause.settings",B.d8,"pause.controls",B.d9,"pause.save",B.da,"pause.help",B.db,"pause.credits",B.dc,"pause.back"],A.a_("cR<cE,j>"))
B.jG={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jm=new A.a4(B.jG,[0,1,2,3],t.I)
B.jT={uTex:0}
B.jn=new A.a4(B.jT,[0],t.I)
B.bj=new A.cR([B.ae,1,B.by,1.5,B.bz,1.5,B.bA,2,B.bB,2,B.a0,4],A.a_("cR<cl,y>"))
B.iI=s([],t.bA)
B.iJ=s([],A.a_("t<bi>"))
B.bk=new A.e3(B.iI,B.iJ,null)
B.d4=new A.ck(1,"settings")
B.jW=new A.ck(2,"visual")
B.jX=new A.ck(3,"graphics")
B.jY=new A.ck(4,"gameplay")
B.jZ=new A.ck(5,"controls")
B.k_=new A.ck(6,"audio")
B.k0=new A.ck(7,"accessibility")
B.k1=new A.ck(8,"credits")
B.W=new A.bi(1,"settings")
B.k2=new A.bi(2,"journal")
B.k3=new A.bi(3,"sleep")
B.k4=new A.bi(4,"help")
B.k5=new A.bi(5,"visitor")
B.k6=new A.bi(6,"ending")
B.dd=new A.e4(0,"opened")
B.de=new A.e4(2,"backed")
B.df=new A.e4(3,"resumed")
B.k7=new A.e4(4,"dismissed")
B.Z=new A.e4(5,"unchanged")
B.k8=new A.bt("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.k9=new A.bt("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.ka=new A.bt("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kb=new A.bt("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kc=new A.bt("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kd=new A.bt("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.ke=new A.bt("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kf=new A.bt("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kg=new A.bt("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kh=new A.ky(0,1,null)
B.kj=new A.kz(1,"high")
B.ki=new A.qf(!1,!0,!0,!0,!1,B.kj,35,256)
B.kk=new A.kD(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.bo=new A.eM(0,"safe")
B.bp=new A.eM(1,"standard")
B.bq=new A.eM(2,"high")
B.P=new A.aJ(B.O,0,t.M)
B.aC=new A.eL(B.bo,B.P)
B.jK={shadows:0}
B.lf=new A.aJ(B.jK,1,t.M)
B.km=new A.eL(B.bp,B.lf)
B.jv={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.l7=new A.aJ(B.jv,5,t.M)
B.kn=new A.eL(B.bq,B.l7)
B.kl=new A.eM(4,"shipping")
B.jx={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.l8=new A.aJ(B.jx,7,t.M)
B.n3=new A.eL(B.kl,B.l8)
B.kp=new A.aW(0,1)
B.kq=new A.b_(0.35,0.52,0.88)
B.kr=new A.aj(0.46,0.25,0.2)
B.dh=new A.b_(0.22,0.45,0.92)
B.ks=new A.aj(0.48,0.4,0.34)
B.kt=new A.aj(0.31,0.25,0.23)
B.br=new A.b_(0.75,0.52,0.42)
B.ku=new A.aj(-0.45,-0.45,14737646)
B.kv=new A.b_(0.4,0.65,0.95)
B.bs=new A.b_(0.88,0.96,1)
B.kw=new A.aj(0.45,-0.45,16766720)
B.kx=new A.aj(0.37,0.33,0.31)
B.ky=new A.b_(0.62,0.48,0.45)
B.kz=new A.aj(0.34,0.32,0.29)
B.di=new A.aj(0.38,0.25,0.19)
B.bt=new A.b_(0.9,0.8,0.72)
B.dj=new A.b_(0.28,0.16,0.12)
B.kA=new A.aj(0.31,0.28,0.24)
B.dk=new A.b_(0.65,0.45,0.35)
B.kB=new A.aj(0.58,0.56,0.5)
B.dl=new A.b_(0.2,0.38,0.9)
B.kC=new A.aj(0.44,0.37,0.28)
B.kD=new A.aj(0.52,0.5,0.44)
B.kE=new A.aj(0.24,0.25,0.27)
B.kF=new A.aj(0.28,0.27,0.25)
B.kG=new A.b_(0.35,0.28,0.25)
B.dm=new A.b_(0.52,0.32,0.38)
B.kH=new A.aj(0.42,0.4,0.38)
B.kI=new A.aj(0.45,0.45,16117990)
B.kJ=new A.aj(0.18,0.2,0.21)
B.kK=new A.aj(0.2,0.12,0.1)
B.kL=new A.aj(-0.45,0.45,13840175)
B.dn=new A.b_(0.35,0.2,0.15)
B.kM=new A.aj(0.12,0.15,0.2)
B.bu=new A.i1(0,"legacy")
B.dp=new A.eO(0,"constructed")
B.A=new A.eO(1,"ready")
B.aD=new A.eO(2,"lost")
B.dq=new A.eO(3,"disposed")
B.n1=new A.jI(1,"errorsOnly")
B.kN=new A.kJ(B.aC,384,216,0)
B.bv=new A.eP(0,"constructed")
B.kO=new A.eP(1,"initializing")
B.bw=new A.eP(2,"ready")
B.dr=new A.eP(3,"contextLost")
B.i=new A.fH(0,"read")
B.j=new A.fH(1,"write")
B.J=new A.fH(2,"historyRead")
B.t=new A.i3(0,"rgba8")
B.kP=new A.aO("dofBlurH",B.t,192,108,1,0)
B.kQ=new A.aO("dofBlurV",B.t,192,108,1,0)
B.kR=new A.aO("dofOutput",B.t,384,216,1,0)
B.ds=new A.i3(2,"depth24")
B.kS=new A.aO("shadowMap",B.ds,512,512,1,0)
B.kT=new A.aO("ssaoRaw",B.t,192,108,1,0)
B.kU=new A.aO("ssaoBlurred",B.t,192,108,1,0)
B.kV=new A.aO("gradeOutput",B.t,384,216,1,0)
B.kW=new A.aO("vhsOutput",B.t,384,216,1,0)
B.kX=new A.aO("sceneDepth",B.ds,384,216,1,0)
B.kY=new A.aO("bloomBlurH",B.t,192,108,1,0)
B.kZ=new A.aO("bloomBlurV",B.t,192,108,1,0)
B.l_=new A.aO("present",B.t,384,216,1,0)
B.bx=new A.aO("sceneColor",B.t,384,216,1,0)
B.l0=new A.aO("ps1Output",B.t,384,216,1,0)
B.l1=new A.eQ(null,"save storage unavailable")
B.l2=new A.eQ(null,"save could not be recovered")
B.l3=new A.eQ(null,null)
B.jA={WheelUp:0,WheelDown:1}
B.l4=new A.aJ(B.jA,2,t.M)
B.ju={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.l5=new A.aJ(B.ju,4,t.M)
B.jH={open:0,closed:1}
B.l6=new A.aJ(B.jH,2,t.M)
B.jt={Escape:0}
B.dt=new A.aJ(B.jt,1,t.M)
B.jr={open:0,closed:1,mixed:2}
B.l9=new A.aJ(B.jr,3,t.M)
B.jF={front:0,"rear-service":1}
B.la=new A.aJ(B.jF,2,t.M)
B.jI={overcast:0,rain:1}
B.lb=new A.aJ(B.jI,2,t.M)
B.jD={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lc=new A.aJ(B.jD,16,t.M)
B.jB={Escape:0,Tab:1,F11:2}
B.du=new A.aJ(B.jB,3,t.M)
B.jz={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.ld=new A.aJ(B.jz,5,t.M)
B.jw={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.af=new A.aJ(B.jw,7,t.M)
B.jp={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.le=new A.aJ(B.jp,9,t.M)
B.dx=new A.eR(2,"link")
B.lq=new A.i7(B.dx,"gl.createProgram() returned null")
B.dv=new A.eR(0,"vertex")
B.dw=new A.eR(1,"fragment")
B.dy=new A.eR(3,"validation")
B.ly=new A.i8(0,"full")
B.lz=new A.i8(2,"culled")
B.a4=new A.M(0,1,0)
B.aH=new A.M(0,-1,0)
B.lE=new A.bz(-1,B.a4,B.aH,B.cH,1,1,0.3,0.5)
B.cO=s([],t.n)
B.lF=new A.kU(!1,"","",B.cO,B.cO)
B.dD=new A.e8(0,"resident")
B.dE=new A.e8(1,"pending")
B.dF=new A.e8(2,"missing")
B.dG=new A.e8(3,"evicted")
B.aj=new A.M(0,0,0)
B.ko=new A.kH(0,0,0,1)
B.B=new A.l_(B.aj,B.ko)
B.lH=A.cs("H_")
B.lI=A.cs("H0")
B.lJ=A.cs("o8")
B.lK=A.cs("C_")
B.lL=A.cs("Cd")
B.lM=A.cs("Ce")
B.lN=A.cs("Cf")
B.lO=A.cs("a6")
B.lP=A.cs("F")
B.lQ=A.cs("wF")
B.lR=A.cs("D4")
B.lS=A.cs("D5")
B.lT=A.cs("ig")
B.e=new A.d2(0,"float1")
B.aG=new A.d2(1,"float2")
B.q=new A.d2(2,"float3")
B.lU=new A.d2(3,"float4")
B.u=new A.d2(4,"mat4")
B.dH=new A.d2(5,"mat4Array")
B.bK=new A.A(B.e,0)
B.dI=new A.A(B.e,1)
B.R=new A.d2(6,"sampler")
B.x=new A.A(B.R,0)
B.ai=new A.A(B.R,1)
B.dJ=new A.A(B.R,2)
B.lV=new A.A(B.R,3)
B.lW=new A.A(B.R,4)
B.lX=new A.A(B.R,5)
B.lY=new A.A(B.R,6)
B.lZ=new A.rU(!1)
B.m_=new A.M(0,0,1)
B.m0=new A.M(1,0,0)
B.m1=new A.M(1/0,1/0,1/0)
B.m2=new A.M(-1/0,-1/0,-1/0)
B.dL=new A.d5(6,"tangent4")
B.me=new A.eb(0,"visitorAnswered")
B.dM=new A.eb(1,"visitorIgnored")
B.mf=new A.eb(2,"entryVerified")
B.mg=new A.eb(3,"entryContradicted")
B.mh=new A.eb(4,"exposureAccepted")
B.mj=new A.d6(1,"malformedDay")
B.mk=new A.d6(2,"malformedTier")
B.dN=new A.d6(3,"missingTierLines")
B.a6=new A.d6(6,"invalidPhase")
B.mn=new A.bn(B.a6,"No reaction is due.")
B.mv=new A.ba(B.mn)
B.ms=new A.bn(B.a6,"The active visit cannot be chosen.")
B.mw=new A.ba(B.ms)
B.mo=new A.bn(B.a6,"The active visit has no line to advance.")
B.mx=new A.ba(B.mo)
B.mm=new A.d6(5,"noActiveVisit")
B.mp=new A.bn(B.mm,"There is no active visit.")
B.dO=new A.ba(B.mp)
B.mr=new A.bn(B.a6,"A visit is already active.")
B.my=new A.ba(B.mr)
B.ml=new A.d6(4,"noArrival")
B.mu=new A.bn(B.ml,"The authored arrival is missing.")
B.mz=new A.ba(B.mu)
B.mq=new A.bn(B.a6,"That answer is not offered.")
B.mA=new A.ba(B.mq)
B.mi=new A.d6(0,"missingCorpus")
B.mt=new A.bn(B.mi,"The authored visitor corpus is empty.")
B.mB=new A.ba(B.mt)
B.dP=new A.eX(1,"exact")
B.bO=new A.eX(2,"partial")
B.aJ=new A.eX(3,"contradiction")
B.mC=new A.eX(0,"skipped")
B.mD=new A.eW(B.mC,B.P)
B.mE=new A.eW(B.bO,B.P)
B.mF=new A.im(B.V,!1)
B.mG=new A.im(B.V,!0)
B.dQ=new A.ip(0,"horizontal")
B.mH=new A.ip(1,"vertical")
B.dR=new A.ir(0,"horizontal")
B.mI=new A.ir(1,"vertical")
B.aK=new A.fT(0,"empty")
B.mW=new A.fT(1,"cpuReady")
B.aL=new A.fT(4,"released")})();(function staticFields(){$.tC=null
$.c9=A.e([],A.a_("t<F>"))
$.yp=null
$.qj=0
$.qk=A.Fh()
$.xT=null
$.xS=null
$.Ap=null
$.Af=null
$.Ax=null
$.vp=null
$.vw=null
$.xu=null
$.tP=A.e([],A.a_("t<C<F>?>"))
$.h7=null
$.j6=null
$.j7=null
$.x6=!1
$.ar=B.y
$.yH=""
$.yI=null
$.yD=null
$.q0=null
$.c7=A.a8()
$.da=A.a8()
$.bI=null
$.mi=null
$.u0=A.a8()
$.B=A.a8()
$.bU=A.a8()
$.ae=A.a8()
$.ze=A.a8()
$.h9=null
$.X=A.a8()
$.h4=null
$.b0=A.a8()
$.V=A.a8()
$.wR=A.a8()
$.x1=null
$.bq=null
$.wU=!1
$.mp=!1
$.j4=B.aN
$.ei=B.an
$.vc=!1
$.xn=!1
$.zE=null
$.mh=null
$.md=null
$.zq=0
$.mn=!1
$.zD=!1
$.x7=0
$.zK=0
$.ej=0
$.Aa=!1
$.wW="booting"
$.c8=0
$.el=0
$.as="hall"
$.j0=A.a8()
$.h_=A.a8()
$.bV=A.a8()
$.zJ=null
$.xe=0
$.xi=1.65
$.v2=null
$.b1=null
$.jb=!1
$.cr=A.a8()
$.h2=A.a8()
$.h1=A.a8()
$.m9=A.a8()
$.zf=A.a8()
$.zd=A.a8()
$.av=A.a8()
$.ma=A.a8()
$.j_=A.a8()
$.m8=A.a8()
$.j1=A.a8()
$.j2=A.a8()
$.f6=A.a8()
$.h0=A.a8()
$.fZ=A.a8()
$.iZ=A.a8()
$.iX=A.a8()
$.iY=A.a8()
$.aH=A.a8()
$.m7=A.a8()
$.bc=A.a8()
$.ve=A.a2(t.S)
$.dc=A.e([],t.s)
$.x0=null
$.A4=!1
$.zi=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"H2","AG",()=>A.Ao("_$dart_dartClosure"))
s($,"H1","hg",()=>A.Ao("_$dart_dartClosure_dartJSInterop"))
s($,"HL","B2",()=>A.e([new J.ka()],A.a_("t<i5>")))
s($,"He","AH",()=>A.dE(A.rQ({
toString:function(){return"$receiver$"}})))
s($,"Hf","AI",()=>A.dE(A.rQ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Hg","AJ",()=>A.dE(A.rQ(null)))
s($,"Hh","AK",()=>A.dE(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hk","AN",()=>A.dE(A.rQ(void 0)))
s($,"Hl","AO",()=>A.dE(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hj","AM",()=>A.dE(A.yE(null)))
s($,"Hi","AL",()=>A.dE(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Hn","AQ",()=>A.dE(A.yE(void 0)))
s($,"Hm","AP",()=>A.dE(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Hp","xF",()=>A.Dt())
s($,"Ht","AV",()=>A.Cw(4096))
s($,"Hr","AT",()=>new A.tY().$0())
s($,"Hs","AU",()=>new A.tX().$0())
s($,"Hq","AS",()=>A.Cv(A.a1(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"HE","hh",()=>A.mw(B.lP))
s($,"Hc","xE",()=>{A.CK()
return $.qj})
s($,"GZ","AF",()=>B.bx.jk())
s($,"H7","xD",()=>A.kw(A.e([255,255,255,255],t.t)))
s($,"H4","xA",()=>A.kw(A.e([128,128,255,255],t.t)))
s($,"H3","xz",()=>A.kw(A.e([0,0,0,255],t.t)))
s($,"H5","xB",()=>A.kw(A.e([255,255,0,255],t.t)))
s($,"H6","xC",()=>A.kw(A.e([255,255,255,255],t.t)))
s($,"HQ","B6",()=>A.ii(0,1,0))
s($,"Ho","AR",()=>A.Dq(A.a2(t.N),0,0,A.ii(0,0,0)))
s($,"HN","B3",()=>A.yu("^[a-z0-9][a-z0-9._-]*$"))
s($,"HT","fc",()=>{var q=$.yD
if(q==null){A.vm()
A.vm()
A.vm()
A.vm()
q=$.yD=new A.rF()}return q})
s($,"H8","wa",()=>A.wk(B.cl,!0,B.aV,B.cn,B.cq,B.cr,B.ct,B.cv))
s($,"Hz","AW",()=>new A.nj())
r($,"A8","df",()=>A.wC(null,null))
r($,"uS","xK",()=>A.k1(null,null))
r($,"x_","fb",()=>A.fs(null,null,!1,1,!1,!1,2,1))
r($,"x2","wc",()=>$.wa())
s($,"HF","AZ",()=>new A.oP())
s($,"HG","B_",()=>new A.oY())
s($,"HH","wd",()=>new A.ph(A.q(t.N,t.S)))
s($,"HB","AX",()=>A.d4().gaM().h(0,"debugPause")==="1")
s($,"Hy","jf",()=>A.d4().gaM().h(0,"automation")==="1")
s($,"Hv","wb",()=>A.Fx())
s($,"Hu","xG",()=>$.wb()!=null)
s($,"Hw","xH",()=>$.jf()?A.d4().gaM().h(0,"captureMantleId"):null)
s($,"Hx","xI",()=>A.d4().gaM().h(0,"captureMantleLit")==="1")
r($,"xh","eq",()=>A.ii(0,0,0))
r($,"xb","B1",()=>A.ii(0,0,0))
r($,"xo","jg",()=>A.ii(0,0,0))
s($,"HA","xJ",()=>A.Fy())
s($,"HJ","mx",()=>new A.o9(A.ii(0,0,0)))
s($,"HI","B0",()=>new A.pD(new A.nP()))
s($,"HC","cL",()=>new A.or(A.e([],t.s)))
s($,"HM","my",()=>{var q=new A.rs(B.aF)
q.f=A.a_("C<e7>").a(A.e([A.ag(B.a2,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.ag(B.a2,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.ag(B.a2,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.ag(B.a2,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.ag(B.a2,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.ag(B.a3,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.ag(B.a3,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.ag(B.a3,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.ag(B.a3,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.ag(B.a3,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.ag(B.ah,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.ag(B.ah,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.ag(B.ah,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.ag(B.ah,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.ag(B.o,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.ag(B.o,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.ag(B.o,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.ag(B.o,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.ag(B.o,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.ag(B.o,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.ag(B.o,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.ag(B.o,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.ag(B.o,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.ag(B.o,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.ag(B.o,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.ag(B.o,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.ag(B.o,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.ag(B.o,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.ag(B.o,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.ag(B.o,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.ag(B.o,!0,0.01,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.ag(B.o,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.ag(B.o,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05)],A.a_("t<e7>")))
return q})
s($,"HP","B5",()=>new A.rr(A.q(t.N,t.z)))
s($,"HO","B4",()=>new A.qn(A.CM(520588),B.b0))
s($,"HD","AY",()=>new A.oL())
s($,"HK","hi",()=>new A.q4(B.bk))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.e2,ArrayBuffer:A.fE,ArrayBufferView:A.hS,DataView:A.kp,Float32Array:A.hP,Float64Array:A.kq,Int16Array:A.kr,Int32Array:A.ks,Int8Array:A.kt,Uint16Array:A.ku,Uint32Array:A.kv,Uint8ClampedArray:A.eI,CanvasPixelArray:A.eI,Uint8Array:A.hT})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b7.$nativeSuperclassTag="ArrayBufferView"
A.iB.$nativeSuperclassTag="ArrayBufferView"
A.iC.$nativeSuperclassTag="ArrayBufferView"
A.hQ.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.iE.$nativeSuperclassTag="ArrayBufferView"
A.hR.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
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
var s=A.vx
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
