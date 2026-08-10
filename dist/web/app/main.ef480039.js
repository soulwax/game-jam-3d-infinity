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
if(a[b]!==s){A.G2(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.wN(b)
return new s(c,this)}:function(){if(s===null)s=A.wN(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.wN(a).prototype
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
wS(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uQ(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.wQ==null){A.FE()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.xZ("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.t5
if(o==null)o=$.t5=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.FK(a)
if(p!=null)return p
if(typeof a=="function")return B.hx
s=Object.getPrototypeOf(a)
if(s==null)return B.d2
if(s===Object.prototype)return B.d2
if(typeof q=="function"){o=$.t5
if(o==null)o=$.t5=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bz,enumerable:false,writable:true,configurable:true})
return B.bz}return B.bz},
xt(a,b){if(a<0||a>4294967295)throw A.d(A.aT(a,0,4294967295,"length",null))
return J.xv(new Array(a),b)},
xu(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
jZ(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
xv(a,b){var s=A.e(a,b.i("u<0>"))
s.$flags=1
return s},
By(a,b){var s=t.hO
return J.x6(s.a(a),s.a(b))},
xx(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Bz(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xx(r))break;++b}return b},
BA(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xx(q))break}return b},
e9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hr.prototype
return J.k0.prototype}if(typeof a=="string")return J.dO.prototype
if(a==null)return J.hs.prototype
if(typeof a=="boolean")return J.k_.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.G)return a
return J.uQ(a)},
aC(a){if(typeof a=="string")return J.dO.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.G)return a
return J.uQ(a)},
c6(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.G)return a
return J.uQ(a)},
FA(a){if(typeof a=="number")return J.er.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.dW.prototype
return a},
zD(a){if(typeof a=="number")return J.er.prototype
if(typeof a=="string")return J.dO.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.dW.prototype
return a},
zE(a){if(typeof a=="string")return J.dO.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.dW.prototype
return a},
FB(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.G)return a
return J.uQ(a)},
x5(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.zD(a).a8(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e9(a).a_(a,b)},
aG(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).h(a,b)},
bI(a,b,c){return J.c6(a).k(a,b,c)},
h5(a,b){return J.c6(a).l(a,b)},
Am(a,b){return J.zE(a).hj(a,b)},
vB(a,b){return J.c6(a).M(a,b)},
An(a,b,c){return J.FB(a).hl(a,b,c)},
Ao(a,b){return J.c6(a).cE(a,b)},
x6(a,b){return J.zD(a).F(a,b)},
x7(a,b){return J.aC(a).q(a,b)},
mh(a,b){return J.c6(a).Y(a,b)},
Ap(a,b){return J.c6(a).a4(a,b)},
x8(a){return J.c6(a).gO(a)},
ay(a){return J.e9(a).gH(a)},
mi(a){return J.aC(a).gN(a)},
Aq(a){return J.aC(a).gV(a)},
R(a){return J.c6(a).gt(a)},
c7(a){return J.aC(a).gu(a)},
eY(a){return J.e9(a).ga2(a)},
x9(a,b){return J.c6(a).a6(a,b)},
eZ(a,b,c){return J.c6(a).ca(a,b,c)},
Ar(a,b){return J.aC(a).su(a,b)},
As(a,b){return J.c6(a).S(a,b)},
At(a,b){return J.zE(a).bf(a,b)},
vC(a,b){return J.FA(a).oT(a,b)},
d6(a){return J.e9(a).p(a)},
Au(a,b){return J.c6(a).eQ(a,b)},
jX:function jX(){},
k_:function k_(){},
hs:function hs(){},
hu:function hu(){},
dP:function dP(){},
kl:function kl(){},
dW:function dW(){},
dh:function dh(){},
fi:function fi(){},
fj:function fj(){},
u:function u(a){this.$ti=a},
jY:function jY(){},
oZ:function oZ(a){this.$ti=a},
ec:function ec(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
er:function er(){},
hr:function hr(){},
k0:function k0(){},
dO:function dO(){}},A={vK:function vK(){},
uL(){return $},
AI(a,b,c){if(t.he.b(a))return new A.id(a,b.i("@<0>").J(c).i("id<1,2>"))
return new A.ef(a,b.i("@<0>").J(c).i("ef<1,2>"))},
xB(a){return new A.es("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.es("Field '"+a+"' has not been initialized.")},
BC(a){return new A.es("Field '"+a+"' has already been initialized.")},
uR(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i0(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e8(a,b,c){return a},
wR(a){var s,r
for(s=$.c5.length,r=0;r<s;++r)if(a===$.c5[r])return!0
return!1},
i_(a,b,c,d){A.kt(b,"start")
if(c!=null){A.kt(c,"end")
if(b>c)A.j(A.aT(b,0,c,"start",null))}return new A.hZ(a,b,c,d.i("hZ<0>"))},
k6(a,b,c,d){if(t.he.b(a))return new A.db(a,b,c.i("@<0>").J(d).i("db<1,2>"))
return new A.cw(a,b,c.i("@<0>").J(d).i("cw<1,2>"))},
ct(){return new A.fw("No element")},
xs(){return new A.fw("Too many elements")},
kC(a,b,c,d,e){if(c-b<=32)A.Cb(a,b,c,d,e)
else A.Ca(a,b,c,d,e)},
Cb(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aC(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.an()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Ca(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.T(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.T(a4+a5,2),f=g-j,e=g+j,d=J.aC(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.an()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.an()
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
A.kC(a3,a4,r-2,a6,a7)
A.kC(a3,q+2,a5,a6,a7)
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
break}}A.kC(a3,r,q,a6,a7)}else A.kC(a3,r,q,a6,a7)},
dZ:function dZ(){},
h9:function h9(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){this.a=a
this.$ti=b},
id:function id(a,b){this.a=a
this.$ti=b},
ib:function ib(){},
rP:function rP(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.$ti=b},
es:function es(a){this.a=a},
dH:function dH(a){this.a=a},
qq:function qq(){},
Q:function Q(){},
a6:function a6(){},
hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.$ti=c},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hg:function hg(a){this.$ti=a},
cB:function cB(a,b){this.a=a
this.$ti=b},
i6:function i6(a,b){this.a=a
this.$ti=b},
ar:function ar(){},
cV:function cV(){},
fy:function fy(){},
hR:function hR(a,b){this.a=a
this.$ti=b},
iJ:function iJ(){},
b1(a,b,c){var s,r,q,p,o,n,m,l=A.at(a.gZ(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.at(a.gaA(),!0,c)
m=new A.a4(q,n,b.i("@<0>").J(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hb(A.aM(a,b,c),b.i("@<0>").J(c).i("hb<1,2>"))},
AO(){throw A.d(A.aW("Cannot modify unmodifiable Map"))},
AP(){throw A.d(A.aW("Cannot modify constant Set"))},
zX(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
FJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d6(a)
return s},
hK(a){var s,r=$.xJ
if(r==null)r=$.xJ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
fq(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fp(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bd(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kq(a){var s,r,q,p
if(a instanceof A.G)return A.bF(A.bS(a),null)
s=J.e9(a)
if(s===B.hw||s===B.hy||t.qF.b(a)){r=B.bT(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bF(A.bS(a),null)},
xK(a){var s,r,q
if(a==null||typeof a=="number"||A.bR(a))return J.d6(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dG)return a.p(0)
if(a instanceof A.c2)return a.hc(!0)
s=$.Aj()
for(r=0;r<1;++r){q=s[r].oV(a)
if(q!=null)return q}return"Instance of '"+A.kq(a)+"'"},
BP(){return Date.now()},
BY(){var s,r
if($.pT!==0)return
$.pT=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pT=1e6
$.pU=new A.pS(r)},
BO(){if(!!self.location)return self.location.href
return null},
BZ(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
av(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.dE(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aT(a,0,1114111,null,null))},
fo(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
BX(a){var s=A.fo(a).getUTCFullYear()+0
return s},
BV(a){var s=A.fo(a).getUTCMonth()+1
return s},
BR(a){var s=A.fo(a).getUTCDate()+0
return s},
BS(a){var s=A.fo(a).getUTCHours()+0
return s},
BU(a){var s=A.fo(a).getUTCMinutes()+0
return s},
BW(a){var s=A.fo(a).getUTCSeconds()+0
return s},
BT(a){var s=A.fo(a).getUTCMilliseconds()+0
return s},
BQ(a){var s=a.$thrownJsError
if(s==null)return null
return A.cD(s)},
xL(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
j2(a){throw A.d(A.wM(a))},
f(a,b){if(a==null)J.c7(a)
throw A.d(A.uN(a,b))},
uN(a,b){var s,r="index"
if(!A.aL(b))return new A.co(!0,b,r,null)
s=A.c(J.c7(a))
if(b<0||b>=s)return A.oQ(b,s,a,r)
return A.xN(b,r)},
Fu(a,b,c){if(a>c)return A.aT(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aT(b,a,c,"end",null)
return new A.co(!0,b,"end",null)},
wM(a){return new A.co(!0,a,null,null)},
d(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.dq()
b.dartException=a
s=A.G5
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
G5(){return J.d6(this.dartException)},
j(a,b){throw A.aD(a,b==null?new Error():b)},
bH(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.DQ(a,b,c),s)},
DQ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.i2("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.d(A.aq(a))},
dr(a){var s,r,q,p,o,n
a=A.zP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ri(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rj(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xY(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vL(a,b){var s=b==null,r=s?null:b.method
return new A.k1(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.pz(a)
if(a instanceof A.hh){s=a.a
return A.ea(a,s==null?A.eS(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ea(a,a.dartException)
return A.F2(a)},
ea(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
F2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.dE(r,16)&8191)===10)switch(q){case 438:return A.ea(a,A.vL(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.ea(a,new A.hG())}}if(a instanceof TypeError){p=$.A_()
o=$.A0()
n=$.A1()
m=$.A2()
l=$.A5()
k=$.A6()
j=$.A4()
$.A3()
i=$.A8()
h=$.A7()
g=p.aU(s)
if(g!=null)return A.ea(a,A.vL(A.x(s),g))
else{g=o.aU(s)
if(g!=null){g.method="call"
return A.ea(a,A.vL(A.x(s),g))}else if(n.aU(s)!=null||m.aU(s)!=null||l.aU(s)!=null||k.aU(s)!=null||j.aU(s)!=null||m.aU(s)!=null||i.aU(s)!=null||h.aU(s)!=null){A.x(s)
return A.ea(a,new A.hG())}}return A.ea(a,new A.kN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hW()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ea(a,new A.co(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hW()
return a},
cD(a){var s
if(a instanceof A.hh)return a.b
if(a==null)return new A.ix(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ix(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mf(a){if(a==null)return J.ay(a)
if(typeof a=="object")return A.hK(a)
return J.ay(a)},
Fo(a){if(typeof a=="number")return B.d.gH(a)
if(a instanceof A.lN)return A.hK(a)
if(a instanceof A.c2)return a.gH(a)
return A.mf(a)},
zB(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Fz(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Ee(a,b,c,d,e,f){t.BO.a(a)
switch(A.c(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ff("Unsupported number of arguments for wrapped closure"))},
h0(a,b){var s=a.$identity
if(!!s)return s
s=A.Fp(a,b)
a.$identity=s
return s},
Fp(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Ee)},
AN(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kG().constructor.prototype):Object.create(new A.f4(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xf(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.AJ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xf(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
AJ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.AE)}throw A.d("Error in functionType of tearoff")},
AK(a,b,c,d){var s=A.xe
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xf(a,b,c,d){if(c)return A.AM(a,b,d)
return A.AK(b.length,d,a,b)},
AL(a,b,c,d){var s=A.xe,r=A.AF
switch(b?-1:a){case 0:throw A.d(new A.kx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
AM(a,b,c){var s,r
if($.xc==null)$.xc=A.xb("interceptor")
if($.xd==null)$.xd=A.xb("receiver")
s=b.length
r=A.AL(s,c,a,b)
return r},
wN(a){return A.AN(a)},
AE(a,b){return A.iB(v.typeUniverse,A.bS(a.a),b)},
xe(a){return a.a},
AF(a){return a.b},
xb(a){var s,r,q,p=new A.f4("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.y("Field name "+a+" not found.",null))},
zF(a){return v.getIsolateTag(a)},
zT(){return v.G},
GT(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
FK(a){var s,r,q,p,o,n=A.x($.zG.$1(a)),m=$.uO[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uV[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aB($.zx.$2(a,n))
if(q!=null){m=$.uO[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uV[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vm(s)
$.uO[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.uV[n]=s
return s}if(p==="-"){o=A.vm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.zN(a,s)
if(p==="*")throw A.d(A.xZ(n))
if(v.leafTags[n]===true){o=A.vm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.zN(a,s)},
zN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.wS(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vm(a){return J.wS(a,!1,null,!!a.$ibV)},
FP(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vm(s)
else return J.wS(s,c,null,null)},
FE(){if(!0===$.wQ)return
$.wQ=!0
A.FF()},
FF(){var s,r,q,p,o,n,m,l
$.uO=Object.create(null)
$.uV=Object.create(null)
A.FD()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.zO.$1(o)
if(n!=null){m=A.FP(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
FD(){var s,r,q,p,o,n,m=B.e0()
m=A.h_(B.e1,A.h_(B.e2,A.h_(B.bU,A.h_(B.bU,A.h_(B.e3,A.h_(B.e4,A.h_(B.e5(B.bT),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.zG=new A.uS(p)
$.zx=new A.uT(o)
$.zO=new A.uU(n)},
h_(a,b){return a(b)||b},
CT(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
Fr(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xy(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a7("Illegal RegExp pattern ("+String(o)+")",a,null))},
G_(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Fx(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
zP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
G0(a,b,c){var s=A.G1(a,b,c)
return s},
G1(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.zP(b),"g"),A.Fx(c))},
aX:function aX(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a){this.a=a},
hb:function hb(a,b){this.a=a
this.$ti=b},
f9:function f9(){},
ng:function ng(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eM:function eM(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
hc:function hc(){},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
pS:function pS(a){this.a=a},
hS:function hS(){},
ri:function ri(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hG:function hG(){},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a){this.a=a},
pz:function pz(a){this.a=a},
hh:function hh(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a
this.b=null},
dG:function dG(){},
jj:function jj(){},
jk:function jk(){},
kJ:function kJ(){},
kG:function kG(){},
f4:function f4(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
cb:function cb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
p7:function p7(a){this.a=a},
pf:function pf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
as:function as(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
I:function I(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hv:function hv(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
uS:function uS(a){this.a=a},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
c2:function c2(){},
eQ:function eQ(){},
fD:function fD(){},
fE:function fE(){},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lq:function lq(a){this.b=a},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
l6:function l6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hY:function hY(a,b){this.a=a
this.c=b},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
G2(a){throw A.aD(A.xB(a),new Error())},
h(){throw A.aD(A.a9(""),new Error())},
K(){throw A.aD(A.BC(""),new Error())},
zW(){throw A.aD(A.xB(""),new Error())},
a8(){var s=new A.rQ()
return s.b=s},
rQ:function rQ(){this.b=null},
yO(a,b,c){},
a1(a){return a},
BJ(a,b,c){A.yO(a,b,c)
return new Float32Array(a,b,c)},
BK(a){return new Int8Array(a)},
BL(a){return new Uint8Array(a)},
ki(a){return new Uint8Array(A.a1(a))},
dx(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.uN(b,a))},
DE(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.Fu(a,b,c))
return b},
dQ:function dQ(){},
fn:function fn(){},
hE:function hE(){},
to:function to(a){this.a=a},
kb:function kb(){},
b2:function b2(){},
hC:function hC(){},
hD:function hD(){},
hB:function hB(){},
kc:function kc(){},
kd:function kd(){},
ke:function ke(){},
kf:function kf(){},
kg:function kg(){},
kh:function kh(){},
eu:function eu(){},
hF:function hF(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
vZ(a,b){var s=b.c
return s==null?b.c=A.iz(a,"bU",[b.x]):s},
xQ(a){var s=a.w
if(s===6||s===7)return A.xQ(a.x)
return s===11||s===12},
C5(a){return a.as},
FQ(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a0(a){return A.tn(v.typeUniverse,a,!1)},
eU(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eU(a1,s,a3,a4)
if(r===s)return a2
return A.ym(a1,r,!0)
case 7:s=a2.x
r=A.eU(a1,s,a3,a4)
if(r===s)return a2
return A.yl(a1,r,!0)
case 8:q=a2.y
p=A.fZ(a1,q,a3,a4)
if(p===q)return a2
return A.iz(a1,a2.x,p)
case 9:o=a2.x
n=A.eU(a1,o,a3,a4)
m=a2.y
l=A.fZ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.w9(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fZ(a1,j,a3,a4)
if(i===j)return a2
return A.yn(a1,k,i)
case 11:h=a2.x
g=A.eU(a1,h,a3,a4)
f=a2.y
e=A.EZ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yk(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fZ(a1,d,a3,a4)
o=a2.x
n=A.eU(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wa(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.ja("Attempted to substitute unexpected RTI kind "+a0))}},
fZ(a,b,c,d){var s,r,q,p,o=b.length,n=A.ts(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eU(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
F_(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ts(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eU(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
EZ(a,b,c,d){var s,r=b.a,q=A.fZ(a,r,c,d),p=b.b,o=A.fZ(a,p,c,d),n=b.c,m=A.F_(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lj()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
wO(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.FC(s)
return a.$S()}return null},
FG(a,b){var s
if(A.xQ(b))if(a instanceof A.dG){s=A.wO(a)
if(s!=null)return s}return A.bS(a)},
bS(a){if(a instanceof A.G)return A.q(a)
if(Array.isArray(a))return A.H(a)
return A.ws(J.e9(a))},
H(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.ws(a)},
ws(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Eb(a,s)},
Eb(a,b){var s=a instanceof A.dG?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.D2(v.typeUniverse,s.name)
b.$ccache=r
return r},
FC(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tn(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
me(a){return A.d3(A.q(a))},
wI(a){var s
if(a instanceof A.c2)return a.fB()
s=a instanceof A.dG?A.wO(a):null
if(s!=null)return s
if(t.sg.b(a))return J.eY(a).a
if(Array.isArray(a))return A.H(a)
return A.bS(a)},
d3(a){var s=a.r
return s==null?a.r=new A.lN(a):s},
Fy(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.f(q,0)
s=A.iB(v.typeUniverse,A.wI(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.yo(v.typeUniverse,s,A.wI(q[r]))}return A.iB(v.typeUniverse,s,a)},
cm(a){return A.d3(A.tn(v.typeUniverse,a,!1))},
Ea(a){var s=this
s.b=A.EU(s)
return s.b(a)},
EU(a){var s,r,q,p,o
if(a===t.K)return A.Ek
if(A.eV(a))return A.Eo
s=a.w
if(s===6)return A.E3
if(s===1)return A.z0
if(s===7)return A.Ef
r=A.ET(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eV)){a.f="$i"+q
if(q==="D")return A.Ei
if(a===t.m)return A.Eh
return A.En}}else if(s===10){p=A.Fr(a.x,a.y)
o=p==null?A.z0:p
return o==null?A.eS(o):o}return A.E1},
ET(a){if(a.w===8){if(a===t.S)return A.aL
if(a===t.i||a===t.o)return A.Ej
if(a===t.N)return A.Em
if(a===t.y)return A.bR}return null},
E9(a){var s=this,r=A.E0
if(A.eV(s))r=A.Dy
else if(s===t.K)r=A.eS
else if(A.h1(s)){r=A.E2
if(s===t.lo)r=A.yJ
else if(s===t.D)r=A.aB
else if(s===t.k7)r=A.Dx
else if(s===t.s7)r=A.wg
else if(s===t.u6)r=A.yI
else if(s===t.uh)r=A.k}else if(s===t.S)r=A.c
else if(s===t.N)r=A.x
else if(s===t.y)r=A.U
else if(s===t.o)r=A.aA
else if(s===t.i)r=A.bz
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
E1(a){var s=this
if(a==null)return A.h1(s)
return A.zK(v.typeUniverse,A.FG(a,s),s)},
E3(a){if(a==null)return!0
return this.x.b(a)},
En(a){var s,r=this
if(a==null)return A.h1(r)
s=r.f
if(a instanceof A.G)return!!a[s]
return!!J.e9(a)[s]},
Ei(a){var s,r=this
if(a==null)return A.h1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.G)return!!a[s]
return!!J.e9(a)[s]},
Eh(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.G)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
z_(a){if(typeof a=="object"){if(a instanceof A.G)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
E0(a){var s=this
if(a==null){if(A.h1(s))return a}else if(s.b(a))return a
throw A.aD(A.yP(a,s),new Error())},
E2(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.yP(a,s),new Error())},
yP(a,b){return new A.fJ("TypeError: "+A.yc(a,A.bF(b,null)))},
zA(a,b,c,d){if(A.zK(v.typeUniverse,a,b))return a
throw A.aD(A.CV("The type argument '"+A.bF(a,null)+"' is not a subtype of the type variable bound '"+A.bF(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yc(a,b){return A.jA(a)+": type '"+A.bF(A.wI(a),null)+"' is not a subtype of type '"+b+"'"},
CV(a){return new A.fJ("TypeError: "+a)},
ck(a,b){return new A.fJ("TypeError: "+A.yc(a,b))},
Ef(a){var s=this
return s.x.b(a)||A.vZ(v.typeUniverse,s).b(a)},
Ek(a){return a!=null},
eS(a){if(a!=null)return a
throw A.aD(A.ck(a,"Object"),new Error())},
Eo(a){return!0},
Dy(a){return a},
z0(a){return!1},
bR(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.ck(a,"bool"),new Error())},
Dx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.ck(a,"bool?"),new Error())},
bz(a){if(typeof a=="number")return a
throw A.aD(A.ck(a,"double"),new Error())},
yI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.ck(a,"double?"),new Error())},
aL(a){return typeof a=="number"&&Math.floor(a)===a},
c(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.ck(a,"int"),new Error())},
yJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.ck(a,"int?"),new Error())},
Ej(a){return typeof a=="number"},
aA(a){if(typeof a=="number")return a
throw A.aD(A.ck(a,"num"),new Error())},
wg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.ck(a,"num?"),new Error())},
Em(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.aD(A.ck(a,"String"),new Error())},
aB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.ck(a,"String?"),new Error())},
a(a){if(A.z_(a))return a
throw A.aD(A.ck(a,"JSObject"),new Error())},
k(a){if(a==null)return a
if(A.z_(a))return a
throw A.aD(A.ck(a,"JSObject?"),new Error())},
zm(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bF(a[q],b)
return s},
EJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zm(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bF(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
yS(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bF(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bF(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bF(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bF(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bF(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bF(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bF(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bF(a.x,b)+">"
if(l===8){p=A.F1(a.x)
o=a.y
return o.length>0?p+("<"+A.zm(o,b)+">"):p}if(l===10)return A.EJ(a,b)
if(l===11)return A.yS(a,b,null)
if(l===12)return A.yS(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
F1(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
D3(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
D2(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tn(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iA(a,5,"#")
q=A.ts(s)
for(p=0;p<s;++p)q[p]=r
o=A.iz(a,b,q)
n[b]=o
return o}else return m},
D1(a,b){return A.yw(a.tR,b)},
D0(a,b){return A.yw(a.eT,b)},
tn(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yh(A.yf(a,null,b,!1))
r.set(b,s)
return s},
iB(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yh(A.yf(a,b,c,!0))
q.set(c,r)
return r},
yo(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.w9(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
e2(a,b){b.a=A.E9
b.b=A.Ea
return b},
iA(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cA(null,null)
s.w=b
s.as=c
r=A.e2(a,s)
a.eC.set(c,r)
return r},
ym(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.CZ(a,b,r,c)
a.eC.set(r,s)
return s},
CZ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eV(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.h1(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cA(null,null)
q.w=6
q.x=b
q.as=c
return A.e2(a,q)},
yl(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.CX(a,b,r,c)
a.eC.set(r,s)
return s},
CX(a,b,c,d){var s,r
if(d){s=b.w
if(A.eV(b)||b===t.K)return b
else if(s===1)return A.iz(a,"bU",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cA(null,null)
r.w=7
r.x=b
r.as=c
return A.e2(a,r)},
D_(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cA(null,null)
s.w=13
s.x=b
s.as=q
r=A.e2(a,s)
a.eC.set(q,r)
return r},
iy(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
CW(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iz(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iy(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cA(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e2(a,r)
a.eC.set(p,q)
return q},
w9(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iy(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cA(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e2(a,o)
a.eC.set(q,n)
return n},
yn(a,b,c){var s,r,q="+"+(b+"("+A.iy(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cA(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e2(a,s)
a.eC.set(q,r)
return r},
yk(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iy(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iy(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.CW(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cA(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e2(a,p)
a.eC.set(r,o)
return o},
wa(a,b,c,d){var s,r=b.as+("<"+A.iy(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.CY(a,b,c,r,d)
a.eC.set(r,s)
return s},
CY(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ts(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eU(a,b,r,0)
m=A.fZ(a,c,r,0)
return A.wa(a,n,m,c!==m)}}l=new A.cA(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e2(a,l)},
yf(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yh(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.CO(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yg(a,r,l,k,!1)
else if(q===46)r=A.yg(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eP(a.u,a.e,k.pop()))
break
case 94:k.push(A.D_(a.u,k.pop()))
break
case 35:k.push(A.iA(a.u,5,"#"))
break
case 64:k.push(A.iA(a.u,2,"@"))
break
case 126:k.push(A.iA(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.CQ(a,k)
break
case 38:A.CP(a,k)
break
case 63:p=a.u
k.push(A.ym(p,A.eP(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yl(p,A.eP(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.CN(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yi(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.CS(a.u,a.e,o)
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
return A.eP(a.u,a.e,m)},
CO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yg(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.D3(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.C5(o)+'"')
d.push(A.iB(s,o,n))}else d.push(p)
return m},
CQ(a,b){var s,r=a.u,q=A.ye(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iz(r,p,q))
else{s=A.eP(r,a.e,p)
switch(s.w){case 11:b.push(A.wa(r,s,q,a.n))
break
default:b.push(A.w9(r,s,q))
break}}},
CN(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ye(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eP(p,a.e,o)
q=new A.lj()
q.a=s
q.b=n
q.c=m
b.push(A.yk(p,r,q))
return
case-4:b.push(A.yn(p,b.pop(),s))
return
default:throw A.d(A.ja("Unexpected state under `()`: "+A.w(o)))}},
CP(a,b){var s=b.pop()
if(0===s){b.push(A.iA(a.u,1,"0&"))
return}if(1===s){b.push(A.iA(a.u,4,"1&"))
return}throw A.d(A.ja("Unexpected extended operation "+A.w(s)))},
ye(a,b){var s=b.splice(a.p)
A.yi(a.u,a.e,s)
a.p=b.pop()
return s},
eP(a,b,c){if(typeof c=="string")return A.iz(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.CR(a,b,c)}else return c},
yi(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eP(a,b,c[s])},
CS(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eP(a,b,c[s])},
CR(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.ja("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.ja("Bad index "+c+" for "+b.p(0)))},
zK(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aQ(a,b,null,c,null)
r.set(c,s)}return s},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eV(d))return!0
s=b.w
if(s===4)return!0
if(A.eV(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aQ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aQ(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aQ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aQ(a,b.x,c,d,e))return!1
return A.aQ(a,A.vZ(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.vZ(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.yZ(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.yZ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Eg(a,b,c,d,e)}if(o&&q===10)return A.El(a,b,c,d,e)
return!1},
yZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Eg(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iB(a,b,r[o])
return A.yG(a,p,null,c,d.y,e)}return A.yG(a,b.y,null,c,d.y,e)},
yG(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
El(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
h1(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.eV(a))if(s!==6)r=s===7&&A.h1(a.x)
return r},
eV(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yw(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ts(a){return a>0?new Array(a):v.typeUniverse.sEA},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lj:function lj(){this.c=this.b=this.a=null},
lN:function lN(a){this.a=a},
lh:function lh(){},
fJ:function fJ(a){this.a=a},
CG(){var s,r,q
if(self.scheduleImmediate!=null)return A.Ff()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.h0(new A.rL(s),1)).observe(r,{childList:true})
return new A.rK(s,r,q)}else if(self.setImmediate!=null)return A.Fg()
return A.Fh()},
CH(a){self.scheduleImmediate(A.h0(new A.rM(t.O.a(a)),0))},
CI(a){self.setImmediate(A.h0(new A.rN(t.O.a(a)),0))},
CJ(a){A.w1(B.ep,t.O.a(a))},
w1(a,b){return A.CU(a.a/1000|0,b)},
CU(a,b){var s=new A.tl()
s.kp(a,b)
return s},
bD(a){return new A.l7(new A.aw($.ao,a.i("aw<0>")),a.i("l7<0>"))},
bC(a,b){a.$2(0,null)
b.b=!0
return b.a},
am(a,b){A.DA(a,b)},
bB(a,b){b.dI(a)},
bA(a,b){b.dJ(A.ag(a),A.cD(a))},
DA(a,b){var s,r,q=new A.tz(b),p=new A.tA(b)
if(a instanceof A.aw)a.ha(q,p,t.z)
else{s=t.z
if(a instanceof A.aw)a.eM(q,p,s)
else{r=new A.aw($.ao,t.hR)
r.a=8
r.c=a
r.ha(q,p,s)}}},
bG(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ao.ja(new A.uI(s),t.H,t.S,t.z)},
yj(a,b,c){return 0},
mz(a){var s
if(t.yt.b(a)){s=a.gbP()
if(s!=null)return s}return B.an},
vG(a){var s
a.a(null)
s=new A.aw($.ao,a.i("aw<0>"))
s.de(null)
return s},
Bi(a,b,c){var s=new A.aw($.ao,c.i("aw<0>"))
A.Cg(a,new A.nZ(b,s,c))
return s},
o_(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aw($.ao,b.i("aw<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.o1(i,h,g,f)
try{for(n=J.R(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eM(new A.o0(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cp(A.e([],b.i("u<0>")))
return n}i.a=A.cO(n,null,!1,b.i("0?"))}catch(l){p=A.ag(l)
o=A.cD(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wt(m,k)
m=new A.aZ(m,k==null?A.mz(m):k)
n.cl(m)
return n}else{i.d=p
i.c=o}}return f},
wt(a,b){if($.ao===B.w)return null
return null},
Ec(a,b){if($.ao!==B.w)A.wt(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbP()
if(b==null){A.xL(a,B.an)
b=B.an}}else b=B.an
else if(t.yt.b(a))A.xL(a,b)
return new A.aZ(a,b)},
rW(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Cc()
b.cl(new A.aZ(new A.co(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fP(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bS()
b.co(o.a)
A.eK(b,p)
return}b.a^=2
A.mb(null,null,b.b,t.O.a(new A.rX(o,b)))},
eK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wC(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eK(d.a,c)
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
A.wC(j.a,j.b)
return}g=$.ao
if(g!==h)$.ao=h
else g=null
c=c.c
if((c&15)===8)new A.t0(q,d,n).$0()
else if(o){if((c&1)!==0)new A.t_(q,j).$0()}else if((c&2)!==0)new A.rZ(d,q).$0()
if(g!=null)$.ao=g
c=q.c
if(c instanceof A.aw){p=q.a.$ti
p=p.i("bU<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cz(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.rW(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cz(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
EK(a,b){var s
if(t.nW.b(a))return b.ja(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.d(A.an(a,"onError",u.c))},
Ey(){var s,r
for(s=$.fV;s!=null;s=$.fV){$.iW=null
r=s.b
$.fV=r
if(r==null)$.iV=null
s.a.$0()}},
EX(){$.wu=!0
try{A.Ey()}finally{$.iW=null
$.wu=!1
if($.fV!=null)$.x_().$1(A.zy())}},
zq(a){var s=new A.l8(a),r=$.iV
if(r==null){$.fV=$.iV=s
if(!$.wu)$.x_().$1(A.zy())}else $.iV=r.b=s},
ER(a){var s,r,q,p=$.fV
if(p==null){A.zq(a)
$.iW=$.iV
return}s=new A.l8(a)
r=$.iW
if(r==null){s.b=p
$.fV=$.iW=s}else{q=r.b
s.b=q
$.iW=r.b=s
if(q==null)$.iV=s}},
Gl(a,b){A.e8(a,"stream",t.K)
return new A.lI(b.i("lI<0>"))},
Cg(a,b){var s=$.ao
if(s===B.w)return A.w1(a,t.O.a(b))
return A.w1(a,t.O.a(s.hn(b)))},
wC(a,b){A.ER(new A.uy(a,b))},
zl(a,b,c,d,e){var s,r=$.ao
if(r===c)return d.$0()
$.ao=c
s=r
try{r=d.$0()
return r}finally{$.ao=s}},
EP(a,b,c,d,e,f,g){var s,r=$.ao
if(r===c)return d.$1(e)
$.ao=c
s=r
try{r=d.$1(e)
return r}finally{$.ao=s}},
EO(a,b,c,d,e,f,g,h,i){var s,r=$.ao
if(r===c)return d.$2(e,f)
$.ao=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ao=s}},
mb(a,b,c,d){t.O.a(d)
if(B.w!==c){d=c.hn(d)
d=d}A.zq(d)},
rL:function rL(a){this.a=a},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a){this.a=a},
rN:function rN(a){this.a=a},
tl:function tl(){},
tm:function tm(a,b){this.a=a
this.b=b},
l7:function l7(a,b){this.a=a
this.b=!1
this.$ti=b},
tz:function tz(a){this.a=a},
tA:function tA(a){this.a=a},
uI:function uI(a){this.a=a},
cC:function cC(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cj:function cj(a,b){this.a=a
this.$ti=b},
aZ:function aZ(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function o1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o0:function o0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lb:function lb(){},
i8:function i8(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aw:function aw(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rT:function rT(a,b){this.a=a
this.b=b},
rY:function rY(a,b){this.a=a
this.b=b},
rX:function rX(a,b){this.a=a
this.b=b},
rV:function rV(a,b){this.a=a
this.b=b},
rU:function rU(a,b){this.a=a
this.b=b},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
t1:function t1(a,b){this.a=a
this.b=b},
t2:function t2(a){this.a=a},
t_:function t_(a,b){this.a=a
this.b=b},
rZ:function rZ(a,b){this.a=a
this.b=b},
l8:function l8(a){this.a=a
this.b=null},
lI:function lI(a){this.$ti=a},
iI:function iI(){},
lA:function lA(){},
tj:function tj(a,b){this.a=a
this.b=b},
uy:function uy(a,b){this.a=a
this.b=b},
yd(a,b){var s=a[b]
return s===a?null:s},
w7(a,b,c){if(c==null)a[b]=a
else a[b]=c},
w6(){var s=Object.create(null)
A.w7(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
xD(a,b){return new A.cb(a.i("@<0>").J(b).i("cb<1,2>"))},
N(a,b,c){return b.i("@<0>").J(c).i("vM<1,2>").a(A.zB(a,new A.cb(b.i("@<0>").J(c).i("cb<1,2>"))))},
p(a,b){return new A.cb(a.i("@<0>").J(b).i("cb<1,2>"))},
vN(a){return new A.ci(a.i("ci<0>"))},
a2(a){return new A.ci(a.i("ci<0>"))},
aJ(a,b){return b.i("xE<0>").a(A.Fz(a,new A.ci(b.i("ci<0>"))))},
w8(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ij(a,b,c){var s=new A.eO(a,b,c.i("eO<0>"))
s.c=a.e
return s},
cu(a,b){var s=J.R(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.xD(b,c)
a.ar(0,new A.pg(s,b,c))
return s},
fk(a,b,c){var s=A.xD(b,c)
s.K(0,a)
return s},
hx(a,b){var s,r=A.vN(b)
for(s=J.R(a);s.m();)r.l(0,b.a(s.gn()))
return r},
k5(a,b){var s=A.vN(b)
s.K(0,a)
return s},
BD(a,b){var s=t.hO
return J.x6(s.a(a),s.a(b))},
vO(a){var s,r
if(A.wR(a))return"{...}"
s=new A.bh("")
try{r={}
B.a.l($.c5,a)
s.a+="{"
r.a=!0
a.ar(0,new A.pi(r,s))
s.a+="}"}finally{if(0>=$.c5.length)return A.f($.c5,-1)
$.c5.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
D4(){throw A.d(A.aW("Cannot change an unmodifiable set"))},
ig:function ig(){},
t4:function t4(a){this.a=a},
ii:function ii(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eL:function eL(a,b){this.a=a
this.$ti=b},
ih:function ih(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ci:function ci(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lp:function lp(a){this.a=a
this.c=this.b=null},
eO:function eO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
aa:function aa(){},
ph:function ph(a){this.a=a},
pi:function pi(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.$ti=b},
il:function il(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iC:function iC(){},
fl:function fl(){},
dX:function dX(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
iw:function iw(){},
lO:function lO(){},
fz:function fz(a,b){this.a=a
this.$ti=b},
fK:function fK(){},
iD:function iD(){},
EC(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.a7(String(s),null,null)
throw A.d(q)}q=A.tX(p)
return q},
tX(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ln(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tX(a[s])
return a},
Dl(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Ad()
else s=new Uint8Array(o)
for(r=J.aC(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Dk(a,b,c,d){var s=a?$.Ac():$.Ab()
if(s==null)return null
if(0===c&&d===b.length)return A.yv(s,b)
return A.yv(s,b.subarray(c,d))},
yv(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xa(a,b,c,d,e,f){if(B.c.P(f,4)!==0)throw A.d(A.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a7("Invalid base64 padding, more than two '=' characters",a,b))},
xA(a,b,c){return new A.hw(a,b)},
DP(a){return a.B()},
CK(a,b){return new A.t7(a,[],A.Fq())},
CL(a,b,c){var s,r=new A.bh(""),q=A.CK(r,b)
q.cZ(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Dm(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ln:function ln(a,b){this.a=a
this.b=b
this.c=null},
t6:function t6(a){this.a=a},
lo:function lo(a){this.a=a},
tr:function tr(){},
tq:function tq(){},
jd:function jd(){},
n2:function n2(){},
eg:function eg(){},
jp:function jp(){},
jz:function jz(){},
hw:function hw(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
k2:function k2(){},
p9:function p9(a){this.b=a},
p8:function p8(a){this.a=a},
t8:function t8(){},
t9:function t9(a,b){this.a=a
this.b=b},
t7:function t7(a,b,c){this.c=a
this.a=b
this.b=c},
kR:function kR(){},
rn:function rn(a){this.a=a},
tp:function tp(a){this.a=a
this.b=16
this.c=0},
zJ(a){var s=A.fq(a,null)
if(s!=null)return s
throw A.d(A.a7(a,null,null))},
Bc(a,b){a=A.aD(a,new Error())
if(a==null)a=A.eS(a)
a.stack=b.p(0)
throw a},
cO(a,b,c,d){var s,r=c?J.xu(a,d):J.xt(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
at(a,b,c){var s,r=A.e([],c.i("u<0>"))
for(s=J.R(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("u<0>"))
s=A.e([],b.i("u<0>"))
for(r=J.R(a);r.m();)B.a.l(s,r.gn())
return s},
aj(a,b){var s=A.at(a,!1,b)
s.$flags=3
return s},
xW(a,b,c){var s,r
A.kt(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aT(c,b,null,"end",null))
if(s===0)return""}r=A.Ce(a,b,c)
return r},
Ce(a,b,c){var s=a.length
if(b>=s)return""
return A.BZ(a,b,c==null||c>s?s:c)},
xO(a){return new A.ht(a,A.xy(a,!1,!0,!1,!1,""))},
w0(a,b,c){var s=J.R(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
cW(){var s,r,q=A.BO()
if(q==null)throw A.d(A.aW("'Uri.base' is not supported"))
s=$.y1
if(s!=null&&q===$.y0)return s
r=A.Cm(q)
$.y1=r
$.y0=q
return r},
Cc(){return A.cD(new Error())},
AT(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xh(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jr(a){if(a>=10)return""+a
return"0"+a},
Bb(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.an(b,"name","No enum value with that name"))},
jA(a){if(typeof a=="number"||A.bR(a)||a==null)return J.d6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xK(a)},
Bd(a,b){A.e8(a,"error",t.K)
A.e8(b,"stackTrace",t.l)
A.Bc(a,b)},
ja(a){return new A.j9(a)},
y(a,b){return new A.co(!1,null,b,a)},
an(a,b,c){return new A.co(!0,a,b,c)},
xM(a){var s=null
return new A.fr(s,s,!1,s,s,a)},
xN(a,b){return new A.fr(null,null,!0,a,b,"Value not in range")},
aT(a,b,c,d,e){return new A.fr(b,c,!0,a,d,"Invalid value")},
hL(a,b,c){if(0>a||a>c)throw A.d(A.aT(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aT(b,a,c,"end",null))
return b}return c},
kt(a,b){if(a<0)throw A.d(A.aT(a,0,null,b,null))
return a},
oQ(a,b,c,d){return new A.jU(b,!0,a,d,"Index out of range")},
aW(a){return new A.i2(a)},
xZ(a){return new A.kM(a)},
m(a){return new A.fw(a)},
aq(a){return new A.jm(a)},
ff(a){return new A.rR(a)},
a7(a,b,c){return new A.F(a,b,c)},
Bx(a,b,c){var s,r
if(A.wR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c5,a)
try{A.Ep(a,s)}finally{if(0>=$.c5.length)return A.f($.c5,-1)
$.c5.pop()}r=A.w0(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
vI(a,b,c){var s,r
if(A.wR(a))return b+"..."+c
s=new A.bh(b)
B.a.l($.c5,a)
try{r=s
r.a=A.w0(r.a,a,", ")}finally{if(0>=$.c5.length)return A.f($.c5,-1)
$.c5.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ep(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
vP(a,b,c){var s=A.p(b,c)
s.ma(a)
return s},
cy(a,b,c,d,e,f){var s
if(B.f===c){s=J.ay(a)
b=J.ay(b)
return A.i0(A.aP(A.aP($.h2(),s),b))}if(B.f===d){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
return A.i0(A.aP(A.aP(A.aP($.h2(),s),b),c))}if(B.f===e){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
return A.i0(A.aP(A.aP(A.aP(A.aP($.h2(),s),b),c),d))}if(B.f===f){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
e=J.ay(e)
return A.i0(A.aP(A.aP(A.aP(A.aP(A.aP($.h2(),s),b),c),d),e))}s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
e=J.ay(e)
f=J.ay(f)
f=A.i0(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.h2(),s),b),c),d),e),f))
return f},
BM(a){var s,r,q=$.h2()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.aP(q,J.ay(a[r]))
return A.i0(q)},
qr(a,b){return new A.fz(A.k5(a,b),b.i("fz<0>"))},
Cm(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.y_(a4<a4?B.b.E(a5,0,a4):a5,5,a3).gjg()
else if(s===32)return A.y_(B.b.E(a5,5,a4),0,a3).gjg()}r=A.cO(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zp(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zp(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ac(a5,"\\",n))if(p>0)h=B.b.ac(a5,"\\",p-1)||B.b.ac(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ac(a5,"..",n)))h=m>n+2&&B.b.ac(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ac(a5,"file",0)){if(p<=0){if(!B.b.ac(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.E(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bM(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ac(a5,"http",0)){if(i&&o+3===n&&B.b.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bM(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ac(a5,"https",0)){if(i&&o+4===n&&B.b.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bM(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lE(a4<a5.length?B.b.E(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.De(a5,0,q)
else{if(q===0)A.fL(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Df(a5,c,p-1):""
a=A.Da(a5,p,o,!1)
i=o+1
if(i<n){a0=A.fq(B.b.E(a5,i,n),a3)
d=A.Dc(a0==null?A.j(A.a7("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Db(a5,n,m,a3,j,a!=null)
a2=m<l?A.Dd(a5,m+1,l,a3):a3
return A.D5(j,b,a,d,a1,a2,l<a4?A.D9(a5,l+1,a4):a3)},
y3(a){var s=t.N
return B.a.br(A.e(a.split("&"),t.s),A.p(s,s),new A.rm(B.bV),t.G)},
kQ(a,b,c){throw A.d(A.a7("Illegal IPv4 address, "+a,b,c))},
Cj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kQ("each part must be in the range 0..255",a,r)}A.kQ("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kQ(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bH(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kQ(j,a,q)
p=l}A.kQ("IPv4 address should contain exactly 4 parts",a,q)},
Ck(a,b,c){var s
if(b===c)throw A.d(A.a7("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.Cl(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.y2(a,b,c)
return!0},
Cl(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.F(n,a,q)
r=q
break}return new A.F("Unexpected character",a,q-1)}if(r-1===b)return new A.F(n,a,r)
return new A.F("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.F("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.f(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.F("Invalid IPvFuture address character",a,r)}},
y2(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rl(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Cj(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.dE(l,8)
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
B.cP.jE(s,a0,16,s,a)
B.cP.nr(s,a,a0,0)}}return s},
D5(a,b,c,d,e,f,g){return new A.iE(a,b,c,d,e,f,g)},
yp(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fL(a,b,c){throw A.d(A.a7(c,a,b))},
Dc(a,b){var s=A.yp(b)
if(a===s)return null
return a},
Da(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fL(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.D7(a,q,r)
if(o<r){n=o+1
p=A.yu(a,B.b.ac(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Ck(a,q,o)
l=B.b.E(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.cQ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yu(a,B.b.ac(a,"25",n)?o+3:n,c,"%25")}else p=""
A.y2(a,b,o)
return"["+B.b.E(a,b,o)+p+"]"}}return A.Dh(a,b,c)},
D7(a,b,c){var s=B.b.cQ(a,"%",b)
return s>=b&&s<c?s:c},
yu(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bh(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wc(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bh("")
l=h.a+=B.b.E(a,q,r)
if(m)n=B.b.E(a,r,r+3)
else if(n==="%")A.fL(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bh("")
if(q<r){h.a+=B.b.E(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.E(a,q,r)
if(h==null){h=new A.bh("")
m=h}else m=h
m.a+=i
l=A.wb(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.E(a,b,c)
if(q<c){i=B.b.E(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Dh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wc(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bh("")
k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.E(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bh("")
if(q<r){p.a+=B.b.E(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fL(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bh("")
l=p}else l=p
l.a+=k
j=A.wb(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.E(a,b,c)
if(q<c){k=B.b.E(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
De(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.yr(a.charCodeAt(b)))A.fL(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fL(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.E(a,b,c)
return A.D6(q?a.toLowerCase():a)},
D6(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Df(a,b,c){return A.iF(a,b,c,16,!1,!1)},
Db(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iF(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.Dg(q,e,f)},
Dg(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.Di(a,!s||c)
return A.Dj(a)},
Dd(a,b,c,d){return A.iF(a,b,c,256,!0,!1)},
D9(a,b,c){return A.iF(a,b,c,256,!0,!1)},
wc(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.uR(r)
o=A.uR(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.av(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.E(a,b,b+3).toUpperCase()
return null},
wb(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.lT(a,6*p)&63|q
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
o+=3}}return A.xW(s,0,null)},
iF(a,b,c,d,e,f){var s=A.yt(a,b,c,d,e,f)
return s==null?B.b.E(a,b,c):s},
yt(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wc(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fL(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wb(n)}if(o==null){o=new A.bh("")
k=o}else k=o
k.a=(k.a+=B.b.E(a,p,q))+l
if(typeof m!=="number")return A.j2(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.E(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
ys(a){if(B.b.W(a,"."))return!0
return B.b.bF(a,"/.")!==-1},
Dj(a){var s,r,q,p,o,n,m
if(!A.ys(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a6(s,"/")},
Di(a,b){var s,r,q,p,o,n
if(!A.ys(a))return!b?A.yq(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gU(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.yq(s[0]))}return B.a.a6(s,"/")},
yq(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yr(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.E(a,0,s)+"%3A"+B.b.bf(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
D8(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.y("Invalid URL encoding",null))}}return r},
wd(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.bV===d)return B.b.E(a,b,c)
else p=new A.dH(B.b.E(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.y("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.y("Truncated URI",null))
B.a.l(p,A.D8(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.la.mG(p)},
yr(a){var s=a|32
return 97<=s&&s<=122},
y_(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a7(k,a,r))}}if(q<0&&r>b)throw A.d(A.a7(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gU(j)
if(p!==44||r!==n+7||!B.b.ac(a,"base64",n+1))throw A.d(A.a7("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.dZ.nT(a,m,s)
else{l=A.yt(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bM(a,m,s,l)}return new A.rk(a,j,c)},
zp(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a},
lg:function lg(){},
al:function al(){},
j9:function j9(a){this.a=a},
dq:function dq(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jU:function jU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i2:function i2(a){this.a=a},
kM:function kM(a){this.a=a},
fw:function fw(a){this.a=a},
jm:function jm(a){this.a=a},
kj:function kj(){},
hW:function hW(){},
rR:function rR(a){this.a=a},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(){},
G:function G(){},
lL:function lL(){},
r4:function r4(){this.b=this.a=0},
bh:function bh(a){this.a=a},
rm:function rm(a){this.a=a},
rl:function rl(a){this.a=a},
iE:function iE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rk:function rk(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lc:function lc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
py:function py(a){this.a=a},
yT(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.DD,a)
s[$.eb()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iU,a)
s[$.eb()]=a
return s},
DD(a){return t.BO.a(a).$0()},
iU(a,b,c){t.BO.a(a)
if(A.c(c)>=1)return a.$1(b)
return a.$0()},
wP(a,b,c){return c.a(a[b])},
yU(a,b){return a[b]},
ai(a,b,c,d){return d.a(a[b].apply(a,c))},
yL(a,b,c,d){return d.a(a[b](c))},
aY(a,b){var s=new A.aw($.ao,b.i("aw<0>")),r=new A.i8(s,b.i("i8<0>"))
a.then(A.h0(new A.vn(r,b),1),A.h0(new A.vo(r),1))
return s},
z5(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
d4(a){if(A.z5(a))return a
return new A.uM(new A.ii(t.BT)).$1(a)},
vn:function vn(a,b){this.a=a
this.b=b},
vo:function vo(a){this.a=a},
uM:function uM(a){this.a=a},
lm:function lm(){},
fC:function fC(){this.b=this.a=0},
pX:function pX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
pY:function pY(){},
ex:function ex(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
ne:function ne(a,b){this.a=a
this.b=b},
nf:function nf(){this.a=null
this.d=0},
ko:function ko(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
f7:function f7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jG:function jG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
nU:function nU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dN(a,b){return new A.jQ(a,b)},
dl:function dl(){},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
FW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iu(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.S(f,new A.vp())
s=A.e([],t.cv)
for(r=A.i_(f,0,A.e8(b,"count",t.S),t.mn),q=r.$ti,r=new A.aS(r,r.gu(0),q.i("aS<a6.E>")),q=q.i("a6.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function nz(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bv:function bv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vp:function vp(){},
pk(a,b,c,d,e,f,g,h,i,j){return new A.et(c,a,h,g,f,e,i,j,b,!0)},
vS(a,b){if(!isFinite(b)||b<0||b>1)throw A.d(A.y("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
j8:function j8(a,b){this.a=a
this.b=b},
et:function et(a,b,c,d,e,f,g,h,i,j){var _=this
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
BF(a){A:{break A}return a},
cX:function cX(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(){},
rp:function rp(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pn:function pn(){},
po:function po(){},
pp:function pp(){},
pB(a){var s,r=t.N,q=A.aJ(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.K(0,A.aJ(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.K(0,A.aJ(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.K(0,A.aJ(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.q(0,"dof"))q.K(0,A.aJ(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pA(A.qr(q,r),s)},
pA:function pA(a,b){this.a=a
this.b=b},
pC:function pC(){},
pQ:function pQ(a){this.b=a},
kw:function kw(){this.a=null
this.c=0
this.d=!1},
fc:function fc(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c,d,e,f,g,h,i,j){var _=this
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
kH:function kH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl:function jl(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
eA:function eA(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c){this.a=a
this.b=b
this.d=c},
nW:function nW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
BE(){return new A.k8(new A.cQ(new A.pl(),A.e([],t.Fy),A.e([],t.t),t.ou))},
k8:function k8(a){this.a=a},
pl:function pl(){},
zs(a){var s=4
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
case 3:s=A.j(A.aW("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
DJ(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.T[r]
if(A.zs(q.a)===b)s+=q.c}return s},
BG(a){return new A.pq(a,new A.cQ(new A.pr(),A.e([],t.EM),A.e([],t.t),t.wm),A.p(t.S,t.jC))},
xH(a){var s
A:{s=a.byteLength
break A}return s},
kO:function kO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pq:function pq(a,b,c){this.a=a
this.b=b
this.c=c},
pr:function pr(){},
ps:function ps(){},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
rd:function rd(a,b){this.a=a
this.b=b},
re:function re(a){this.a=a},
rb:function rb(a,b){this.a=a
this.b=b},
rc:function rc(){},
Cf(a){var s=new A.kK(a,new A.cQ(new A.rf(),A.e([],t.f2),A.e([],t.t),t.qq),A.p(t.S,t._))
s.d=s.aP($.wY())
s.e=s.aP($.wV())
s.f=s.aP($.wW())
s.r=s.aP($.wU())
s.w=s.aP($.wX())
return s},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rf:function rf(){},
rh:function rh(){},
rg:function rg(){},
Fi(a){var s,r,q,p,o=A.e([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.eq(p,A.e([p],r)))
continue}return o},
eq:function eq(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
nP:function nP(){},
nQ:function nQ(a){this.a=a},
nN:function nN(a){this.a=a},
nO:function nO(a){this.a=a},
jF:function jF(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
nV:function nV(a,b){this.a=a
this.b=b
this.c=0},
CM(){return new A.fB()},
nT:function nT(a){this.a=a
this.b=null},
fB:function fB(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
vU(){return!0},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pE:function pE(){},
pF:function pF(){},
ca:function ca(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fs:function fs(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
ha:function ha(a){this.b=a},
pV:function pV(a,b){var _=this
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
pZ:function pZ(){},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
q0:function q0(a,b){this.a=a
this.b=b},
q5:function q5(){},
q4:function q4(){},
q3:function q3(){},
q2:function q2(a){this.a=a},
q1:function q1(a,b,c){this.a=a
this.b=b
this.c=c},
q_:function q_(a,b){this.a=a
this.b=b},
C3(a){return new A.hN(a,new A.cQ(new A.q7(),A.e([],t.w_),A.e([],t.t),t.tc))},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a,b){this.a=a
this.b=b},
q7:function q7(){},
yQ(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.DU(a,r,s,a.x.gn().a.b.a).b},
DU(a,b,c,d){var s,r,q,p,o,n=new A.uc(a),m=new A.ud(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Fm(b,k,B.aN,l,s.goA(),new A.tY(m),new A.tZ(m),new A.u_(a),new A.u4(a),new A.u5(a),new A.u6(m),new A.u7(m),s.goC(),new A.u8(a),s.goG(),r.goE(),n,s.goI(),s.goK(),new A.u9(m,c),new A.ua(m),new A.ub(m),new A.u0(m),new A.u1(m),new A.u2(a),new A.u3(m),1,i,j,512)}else{p=new A.aN("sceneColor",B.r,j,i,1,0)
n=A.e([new A.l2(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.e_)
n.push(new A.hJ(b,u.l,u.B,k,p,B.aN))
q=new A.jE(n)}a.r.toString
o=q.ms(B.O,new A.pZ(),!1,new A.lx())
n=o.a.b
if(n.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.w(n)))
return new A.tk(q,o)},
DV(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.J(b7.giU(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.a9()
p=p.gav()
n=A.H(p)
B.a.l(s,new A.lM(new A.cr((r|1073741824)>>>0,0,"transient"),q,A.ba(new A.S(p,n.i("L(1)").a(o.gaz()),n.i("S<1,L>")))))}p=b8.a
m=A.Fs(A.Bh(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dN(B.aw,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.c.T(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dN(B.aw,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.c.T(n>0?n:h.e,3)}o=t.N
n=A.p(o,t.rL)
e=new A.nT(n)
e.mn("cull")
j=l-f
d=e.b
if(d==null)A.j(A.m("cull recorded outside an active frame"))
if(j<0)A.j(A.y("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.fs)
a=A.e([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.r)(s),++k){a2=s[k]
if(a2.gD().e===B.aO)B.a.l(a,new A.aO(new A.bJ(a0.jd(a2.gD().c.a).c,a2.ga5().a),a2,a1))
else B.a.l(b,new A.aO(new A.bL(B.jK,a2.gD().b,a2.gD().a,a2.ga5().a),a2,g))}a3=new A.li(A.Fi(A.FY(b)),A.FX(a),p,b8.b,b8.c)
a4=new A.ju(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.j(A.an(g,"passId",null))
e.b=g
n.cb(g,A.zC())
a6=A.p(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.m("resource is not in candidate: "+b1))
b3=new A.f5(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cb(b0,new A.ue(b3))}a5.ai(new A.jh(a6,a4,a3))}return new A.rS(e,m,j)},
xT(a){return new A.qm(a,new A.ne(new A.nf(),new A.kw()),new A.nV(A.e([],t.h1),B.fE),A.e([],t.Ft),B.bj,A.e([],t.ow),null)},
qg:function qg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=!1},
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(a){this.a=a},
ud:function ud(a,b){this.a=a
this.b=b},
ub:function ub(a){this.a=a},
u4:function u4(a){this.a=a},
u5:function u5(a){this.a=a},
ua:function ua(a){this.a=a},
u_:function u_(a){this.a=a},
u1:function u1(a){this.a=a},
u0:function u0(a){this.a=a},
u9:function u9(a,b){this.a=a
this.b=b},
tY:function tY(a){this.a=a},
tZ:function tZ(a){this.a=a},
u6:function u6(a){this.a=a},
u7:function u7(a){this.a=a},
u8:function u8(a){this.a=a},
u3:function u3(a){this.a=a},
u2:function u2(a){this.a=a},
ue:function ue(a){this.a=a},
tk:function tk(a,b){this.a=a
this.b=b},
lx:function lx(){},
li:function li(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qm:function qm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qn:function qn(){},
qo:function qo(){},
qp:function qp(){},
lv:function lv(a){this.b=a},
t3:function t3(){},
lB:function lB(){},
hV:function hV(a,b){this.a=a
this.b=b},
FY(a){var s,r,q=A.J(a,t.E0)
B.a.S(q,new A.vu())
s=A.H(q)
r=s.i("S<1,bX>")
s=A.J(new A.S(q,s.i("bX(1)").a(new A.vv()),r),r.i("a6.E"))
s.$flags=1
return s},
FX(a){var s,r,q=A.J(a,t.EH)
B.a.S(q,new A.vs())
s=A.H(q)
r=s.i("S<1,bX>")
s=A.J(new A.S(q,s.i("bX(1)").a(new A.vt()),r),r.i("a6.E"))
s.$flags=1
return s},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
vu:function vu(){},
vv:function vv(){},
vs:function vs(){},
vt:function vt(){},
Fs(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.geS()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.y("cullItems: non-finite world bounds for instance "+o.ga5().p(0),null))
if(a.oS(o.geS())===B.c8){++q
continue}B.a.l(l,o)}return new A.nu(l,new A.nv(q))},
nv:function nv(a){this.b=a},
nu:function nu(a,b){this.a=a
this.b=b},
ba(a){var s,r,q,p,o,n,m,l,k
for(s=J.R(a),r=B.ld,q=B.le,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.L(m,k,Math.min(r.c,o))
q=new A.L(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.y("Aabb.fromPoints requires at least one point",null))
return new A.j5(r,q)},
j5:function j5(a,b){this.a=a
this.b=b},
Bh(a){var s,r,q,p,o,n,m=a.a,l=new A.nY(),k=m.length
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
return new A.nX(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
ev:function ev(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
nX:function nX(a){this.a=a},
nY:function nY(){},
xF(a){if(a.length!==16)throw A.d(A.y("Mat4.fromColumnMajor requires 16 values",null))
return new A.dj(new Float32Array(A.a1(a)))},
vQ(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dj(q)},
xG(a,b,c){var s=b.gaa(),r=s.bl(c).gaa(),q=r.bl(s),p=new Float32Array(16)
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
p[12]=-r.c_(a)
p[13]=-q.c_(a)
p[14]=s.c_(a)
p[15]=1
return new A.dj(p)},
dj:function dj(a){this.a=a},
pj:function pj(){},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kL:function kL(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
l9:function l9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jg:function jg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
la:function la(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jt:function jt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
ld:function ld(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ic:function ic(a,b){this.a=a
this.b=b},
he:function he(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
le:function le(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jx:function jx(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lf:function lf(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jO:function jO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lk:function lk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a){this.b=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
bq(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aN(a.a,a.b,b,c,s,r)},
vV:function vV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hJ:function hJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
ly:function ly(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kr:function kr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lz:function lz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xV(a){var s=a.c,r=Math.abs(s.a)<0.99?B.lc:B.a1,q=A.xG(a.b,s,r)
return new A.eD(A.vQ(1,a.f,B.d.L(a.w*2,0.1,3),0.05).a7(0,q))},
eD:function eD(a){this.a=a},
kA:function kA(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lC:function lC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Fm(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.d(A.an(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bq(B.bl,e5,e4,e3,a8)
k=A.bq(B.bl.iZ(),e5,e4,a8,a8)
A.bq(B.ki,e5,e4,a8,a8)
j=A.bq(B.kf,e5,e4,a8,a8)
i=A.bq(B.ka,e6,e6,a8,a8)
h=A.bq(B.kb,b6,m,a8,a8)
g=A.bq(B.kc,b6,m,a8,a8)
f=A.bq(B.kg,b6,m,a8,a8)
e=A.bq(B.kh,b6,m,a8,a8)
d=$.zY()
c=e3>1
b=A.bq(d,e5,e4,a8,c?2:1)
d=A.bq(B.k7,b6,m,a8,a8)
a=A.bq(B.k8,b6,m,a8,a8)
a0=A.bq(B.k9,e5,e4,a8,a8)
a1=A.bq(B.kd,e5,e4,a8,a8)
a2=A.bq(B.kj,e5,e4,a8,a8)
a3=A.bq(B.ke,e5,e4,a8,a8)
a4=c?new A.ka(b8,l,k):a8
b5.a=null
a5=A.xV(B.kQ)
a6=t.e_
a7=A.e([],a6)
k=c?k:l
if(r){B.a.K(a7,A.e([new A.h8(b7,a9,b0,b8,b1,b1,B.dw,!0,k,f,d6,b6,m),new A.h8(b7,a9,b0,b8,b2,b2,B.lT,!1,f,e,c2,b6,m),new A.jg(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.K(a7,A.e([new A.he(b7,a9,b0,b8,b3,b3,B.dx,k,d,d6,b6,m),new A.he(b7,a9,b0,b8,b4,b4,B.lU,d,a,c7,b6,m),new A.jx(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jO(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kr(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kS(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.jt(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kE(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kD(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kA(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.uJ(b5),i))
j.push(new A.kB(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.uK(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.K(j,a7)
j.push(new A.hJ(b7,a9,u.B,b8,k,b9))
return new A.jE(j)},
uJ:function uJ(a){this.a=a},
uK:function uK(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lD:function lD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kE:function kE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lG:function lG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kD:function kD(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lF:function lF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kS:function kS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lP:function lP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hP:function hP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l2:function l2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lS:function lS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nc:function nc(){},
kz(a,b){return new A.hU(a,b)},
jK:function jK(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
en:function en(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
A:function A(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
kp:function kp(a,b){this.a=a
this.b=b},
of:function of(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
og:function og(){},
oh:function oh(){},
fG:function fG(a,b){this.a=a
this.b=b},
e1:function e1(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fd(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
je:function je(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b4:function b4(a,b){this.a=a
this.b=b},
rG:function rG(){this.a=null},
Cr(a){var s=new A.l0(a,B.h,new A.rG(),A.CC(a))
s.ko(a)
return s},
CC(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a2(t.N)
s=A.a2(t.N)
r=J.R(t.a.b(q)?q:new A.aR(q,A.H(q).i("aR<1,i>")))
while(r.m())s.l(0,r.gn())
return s},
c1(a,b){var s,r
if(a.b!==B.h)A.j(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.c(s.drawingBufferWidth),A.c(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
Cx(a,b){var s
if(a.b!==B.h)A.j(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.c(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.y("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
Cw(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Cv(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Cu(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
y6(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.c(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.c(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
Cs(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bk(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=a.f
r=s.na(b)
if(r.a===0)return
if(r.q(0,B.bq)){q=v.G
p=a.a
if(b.a)p.enable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.br))a.a.depthFunc(A.Cv(a,b.b))
if(r.q(0,B.bs))a.a.depthMask(b.c)
if(r.q(0,B.bw)){q=v.G
p=a.a
if(b.w)p.enable(A.c(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.c(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bx))a.a.cullFace(A.Cu(a,b.x))
if(r.q(0,B.dh)){q=v.G.WebGL2RenderingContext
q=A.c(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bt)){q=v.G
p=a.a
if(b.d)p.enable(A.c(q.WebGL2RenderingContext.BLEND))
else p.disable(A.c(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bu))a.a.blendFunc(A.y6(a,b.e),A.y6(a,b.f))
if(r.q(0,B.bv))a.a.blendEquation(A.Cs(a,b.r))
if(r.q(0,B.df))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dg)){q=v.G.WebGL2RenderingContext
a.a.disable(A.c(q.SCISSOR_TEST))}s.a=b},
Ct(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.c(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.c(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dt(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.Ct(a,b))},
ch(a,b){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.j(A.m(u.k))
s=a.e
if(s==null)throw A.d(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.k(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bz(c.b))
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
A.ai(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.c(c.b))
break}},
bx(a,b){if(a.b!==B.h)A.j(A.m(u.k))
a.a.bindVertexArray(A.a(b.a))},
aE(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iH){p=s.d>1?A.c(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iG){o=s.b
if(o!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Cy(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.c(p.ELEMENT_ARRAY_BUFFER),c,A.c(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
Cz(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
y9(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
r=A.k(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.ck?A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.c(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Cz(a,b.b))
return new A.dv(r)},
y7(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
y8(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
w3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
r=A.k(s.createTexture())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.c(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.ai(s,"texStorage3D",[n,1,A.c(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.ai(s,"texStorage2D",[n,1,A.c(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.y7(a,b.e))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.y7(a,b.f))
p=b.r
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.y8(a,p))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.y8(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.fN(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.j(A.an(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dv(new A.iH(r,l,k,q,!1))},
w4(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.j(A.m(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.d(A.y("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.y("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.c(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.ai(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.c(n.WebGL2RenderingContext.RGBA),A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.ai(l,"texSubImage2D",[m,0,0,0,q,p,A.c(n.WebGL2RenderingContext.RGBA),A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
l1(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
CB(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.j(A.m(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.y("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.k(r.createFramebuffer())
if(q==null)throw A.d(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aQ
if(n&&!a1.e)throw A.d(A.y("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cm||o===B.fU
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.e([A.c(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.c(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.k(r.createRenderbuffer())
r.bindRenderbuffer(A.c(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.ai(r,c,[A.c(p.WebGL2RenderingContext.RENDERBUFFER),o,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.k(r.createRenderbuffer())
r.bindRenderbuffer(A.c(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.ai(r,c,[A.c(p.WebGL2RenderingContext.RENDERBUFFER),o,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.c(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.e([A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.k(r.createTexture())
r.bindTexture(A.c(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.ai(r,b,[A.c(p.WebGL2RenderingContext.TEXTURE_2D),1,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
A.ai(r,a,[A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.k(r.createTexture())
r.bindTexture(A.c(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.ai(r,b,[A.c(p.WebGL2RenderingContext.TEXTURE_2D),1,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
A.ai(r,a,[A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.c(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.e([A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.k(r.createRenderbuffer())
r.bindRenderbuffer(A.c(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.ai(r,c,[A.c(p.WebGL2RenderingContext.RENDERBUFFER),o,A.c(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.c(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.k(r.createTexture())
r.bindTexture(A.c(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.ai(r,b,[A.c(p.WebGL2RenderingContext.TEXTURE_2D),1,A.c(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(p.WebGL2RenderingContext.NEAREST))
A.ai(r,a,[A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.c(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.c(r.checkFramebufferStatus(A.c(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.c(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.w5(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dv(new A.iG(q,l,k,f,e,j,i,s,a1.b,a1.c))},
w5(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d_(a){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=A.k(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dv(s)},
ya(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.k(p.createShader(b))
if(o==null)throw A.d(A.kz(b===A.wP(A.yU(A.zT(),r),q,t.S)?B.da:B.db,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.d4(p.getShaderParameter(o,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aB(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.kz(b===A.wP(A.yU(A.zT(),r),q,t.S)?B.da:B.db,s))}return o},
CA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.m(u.k))
q=v.G
s=A.ya(a,A.c(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.ya(a,A.c(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.k(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.kJ)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.d4(o.getProgramParameter(n,A.c(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aB(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kz(B.dc,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.c(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kz(B.dd,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.k(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kz(B.dd,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dv(n)},
dv:function dv(a){this.a=a},
iH:function iH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iG:function iG(a,b,c,d,e,f,g,h,i,j){var _=this
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
lR:function lR(a){this.a=a
this.b=!1},
l0:function l0(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rE:function rE(a){this.a=a},
rF:function rF(a){this.a=a},
tt:function tt(){},
lQ:function lQ(){},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mN(a,a0){var s=0,r=A.bD(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mN=A.bG(function(a1,a2){if(a1===1)return A.bA(a2,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.m
n=A.p(t.N,o)
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
b=new A.jb(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.bW,A.p(o,t.jS))
b.k5(p,a0)
p=A.q(a).i("I<1,2>")
s=3
return A.am(A.o_(A.k6(new A.I(a,p),p.i("bU<az>(o.E)").a(new A.mO(b)),p.i("o.E"),t.ls),t.c),$async$mN)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.l9():n
c.buffer=p
q=b
s=1
break
case 1:return A.bB(q,r)}})
return A.bC($async$mN,r)},
jb:function jb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mP:function mP(){},
mO:function mO(a){this.a=a},
mR:function mR(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b){this.a=a
this.b=b},
mS:function mS(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AA(a,b,c,d,e,f,g){var s=new A.mE(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.k7(a,b,c,d,0,e,f,g)
return s},
Aw(a,b){var s=new A.mm(b)
s.k0(a,b)
return s},
Az(a){var s,r,q,p,o,n=t.z
n=A.p(n,n)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.at(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mA(A.b1(n,r,t.a))
n.k6(a)
return n},
EW(a,b){var s,r,q,p=b>>>0
for(s=new A.dH(a),r=t.sU,s=new A.aS(s,s.gu(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.zH(p,q==null?r.a(q):q)}return p&2147483647},
jc:function jc(a,b){this.a=a
this.b=b},
mE:function mE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mF:function mF(){},
mm:function mm(a){this.a=a},
mn:function mn(){},
h6:function h6(){},
mo:function mo(){},
mp:function mp(){},
mA:function mA(a){this.a=a},
mC:function mC(){},
mD:function mD(){},
mB:function mB(){},
vE:function vE(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mM:function mM(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
mG:function mG(a,b,c){this.a=a
this.b=b
this.c=c},
mH:function mH(a){this.a=a},
mI:function mI(){},
i7:function i7(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
nb:function nb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=1
_.w=0},
nS:function nS(a){this.a=a},
kI:function kI(a,b,c,d,e,f,g,h,i,j){var _=this
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
od:function od(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
oe:function oe(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=0
this.$ti=b},
jV:function jV(a,b,c,d,e,f,g,h,i,j){var _=this
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
oS:function oS(a){this.a=a},
Br(a){var s,r,q,p,o=t.N,n=A.p(o,t.a)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.oR(n)},
oR:function oR(a){this.a=a},
oV:function oV(){var _=this
_.c=_.b=_.a=!1
_.d=0},
k7:function k7(a){this.a=a},
vR(a,b,c,d){return new A.hA(a,b,c,d)},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pm:function pm(a,b){this.a=a
this.b=b},
hX(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bH(a)
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
cT:function cT(a){this.a=a
this.b=0},
q6:function q6(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
qf:function qf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
C4(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.xR(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.jZ(800,t.cX)
for(s=0;s<800;++s)g[s]=new A.lu(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.cO(800,0,!1,r)
p=new Float32Array(8064)
o=J.jZ(4000,t.fo)
for(s=0;s<4000;++s)o[s]=new A.ls(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.cO(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).gaa()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.vj
k=new A.q8(a,new A.od(a,A.p(t.m,r)),b,c,A.a2(t.N),j,i,h,g,q,p,A.p(r,t.kA),o,n,m,B.ih,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.k7(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.kh(a,b,c)
return k},
q8:function q8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aQ=a
_.b0=b
_.bp=c
_.bq=d
_.eg=_.ir=1
_.eq=_.ep=_.iJ=_.iI=_.iH=_.iG=_.iF=_.iE=_.eo=_.en=_.em=_.el=_.ek=_.ej=_.ei=_.iD=_.iC=_.iB=_.eh=_.iA=_.iz=_.iy=_.ix=_.iw=_.iv=_.iu=_.it=_.is=_.aq=$
_.cH=null
_.hv=e
_.hW=_.hV=_.hU=_.hT=_.hS=_.hR=_.hQ=_.hP=_.hO=_.hN=_.hM=_.hL=_.hK=_.hJ=_.hI=_.hH=_.hG=_.hF=_.hE=_.hD=_.hC=_.hB=_.hA=_.hz=_.hy=_.hx=_.hw=_.cI=$
_.cJ=0
_.e_=_.dZ=_.dY=_.dX=_.dW=_.dV=_.dU=$
_.cN=_.cM=_.cL=_.cK=_.c0=_.bo=null
_.c1=$
_.hZ=_.hY=_.hX=!1
_.nk=1
_.e0=f
_.e1=g
_.nl=h
_.i_=i
_.cO=0
_.i0=j
_.nm=k
_.e2=0
_.e3=l
_.nn=1
_.e4=!1
_.c2=0
_.e5=m
_.c3=0
_.i1=n
_.i2=o
_.i5=_.i4=_.i3=1
_.i6=0.4
_.e6=p
_.i7=q
_.e7=r
_.e8=s
_.e9=a0
_.i8=_.ed=_.ec=_.eb=_.ea=0
_.i9=null
_.ia=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.il=_.ef=_.ee=_.ik=_.ij=_.nq=_.np=_.no=_.ii=_.ih=_.ig=_.ie=_.ic=_.ib=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.im=a7
_.io=a8
_.ip=a9
_.iq=b0},
z7(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ao(0,c).bl(f.ao(0,c)).gaa(),r=A.uD(g)
return A.zf(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
j0(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bH(a)
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
zf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.j0(a,A.j0(a,A.j0(a,A.j0(a,A.j0(a,A.j0(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
uD(a){return new A.ap((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
E6(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aS(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a8(),i=A.a8(),h=A.a8()
switch(B.c.P(o,6)){case 0:j.b=c
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
h.b=l}s=j.dB()
if(typeof s!=="number")return s.a7()
s=B.d.aH(s*255)
r=i.dB()
if(typeof r!=="number")return r.a7()
r=B.d.aH(r*255)
q=h.dB()
if(typeof q!=="number")return q.a7()
return new A.ap(s,r,B.d.aH(q*255))},
ie:function ie(){},
lH:function lH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
lu:function lu(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ls:function ls(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
q9:function q9(){},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
rI:function rI(){},
r_:function r_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
i3(a,b,c){return new A.b(a,b,c)},
y4(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
CD(a,b,c,d){return new A.l3(d,b,c,a)},
CF(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.A9()
s=a.d
r=A.rJ(s,0)
q=A.rJ(s,1)
p=A.rJ(s,2)
o=A.rJ(s,3)
s=t.N
n=A.a2(s)
m=a.e
if(A.by(m,0))n.l(0,"GamepadA")
if(A.by(m,1))n.l(0,"GamepadB")
if(A.by(m,2))n.l(0,"GamepadX")
if(A.by(m,3))n.l(0,"GamepadY")
if(A.by(m,4))n.l(0,"GamepadLB")
if(A.by(m,5))n.l(0,"GamepadRB")
if(A.by(m,6))n.l(0,"GamepadLT")
if(A.by(m,7))n.l(0,"GamepadRT")
if(A.by(m,8))n.l(0,"GamepadView")
if(A.by(m,9))n.l(0,"GamepadMenu")
if(A.by(m,10))n.l(0,"GamepadLStick")
if(A.by(m,11))n.l(0,"GamepadRStick")
if(A.by(m,12))n.l(0,h)
if(A.by(m,13))n.l(0,g)
if(A.by(m,14))n.l(0,f)
if(A.by(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.b(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.gaa():i
return new A.l3(m,p,o,A.qr(n,s))},
rJ(a,b){return A.CE(b<a.length?a[b]:0)},
by(a,b){return b<a.length&&a[b]>=0.5},
CE(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.d.L((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.d.gc6(a)?-s:s},
kF:function kF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l3:function l3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4:function n4(a){this.a=a},
AX(a,b,c){var s=new A.jy(a,c,null,b)
s.kb(a,null,null,b,c)
return s},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
B9(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.cu(new A.M(B.iD,t.e2.a(new A.nK(a)),t.vL),t.yW)
return s==null?null:new A.fe(s)},
BH(a,b){var s=A.e([],t.s)
switch(b.a){case 0:A.vT(s,a,B.ia)
break
case 1:A.vT(s,a,B.ib)
break
case 2:A.vT(s,a,B.iG)
break}return s},
vT(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
B8(a){if(a.a!==21)return null
if(a.e)return B.es
if(!a.d&&a.b>=0.6&&a.c>=3)return B.et
return B.er},
c8:function c8(a,b){this.a=a
this.b=b},
nH:function nH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fe:function fe(a){this.a=a},
nK:function nK(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
BN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.x(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.km(s,new A.b(o,n,m),q,p,l,j)
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
km:function km(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
EY(a){var s,r,q,p=A.p(t.N,t.z)
for(s=a.gI(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.eG)
p.k(0,q,r.b)}return p},
m_(a){var s,r,q,p,o,n=a.gZ().bN(0)
B.a.X(n)
s=t.z
r=A.p(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.yN(a.h(0,o)))}return A.b1(r,t.N,s)},
yN(a){var s
if(t.f.b(a))return A.m_(A.EY(a))
if(t.j.b(a)){s=t.z
return A.aj(J.eZ(a,A.FS(),s),s)}if(a==null||A.bR(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fi)
return a}throw A.d(A.a7("presentation snapshot contains unsupported value "+J.eY(a).p(0),null,null))},
pR:function pR(a){this.a=a},
xS(a,b,c){var s=A.wk(b),r=A.wk(a)
if(c!==2)A.j(A.an(c,"version","unsupported save version"))
return new A.ft(c,s,r)},
wk(a){var s,r,q,p,o=A.q(a).i("ae<1>"),n=A.J(new A.ae(a,o),o.i("o.E"))
B.a.X(n)
o=t.z
s=A.p(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.yM(a.h(0,p)))}return A.b1(s,t.N,o)},
yM(a){var s,r,q,p
if(t.f.b(a)){s=A.p(t.N,t.z)
for(r=a.gI(),r=r.gt(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.f9)
s.k(0,p,q.b)}return A.wk(s)}if(t.j.b(a)){r=t.z
return A.aj(J.eZ(a,A.FV(),r),r)}if(a==null||A.bR(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fk)
return a}throw A.d(A.a7("save contains unsupported value "+J.eY(a).p(0),null,null))},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(){},
eB:function eB(a,b){this.a=a
this.b=b},
xm(a,b,c,d,e,f,g,h){var s=A.e([],t.pC),r=A.e([],t.ns)
return new A.o2(a,b,c,d,e,f,g,s,r,h)},
xn(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aL(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.f8)
r=c.h(0,"runSeed")
q=A.aL(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aL(p)||p<1||typeof o!="number")throw A.d(B.ft)
if(!isFinite(480))throw A.d(A.an(480,"daySeconds","must be finite and > 0"))
n=new A.jI(p,480)
if(!isFinite(o)||o<0||o>=24)A.j(A.a7("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.BB(a5,A.aM(a1,s,m))
k=A.AU(l,A.aM(a0,s,m),n)
j=A.xp(b)
A.Bq(A.aM(a2,s,m)).mh(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bR(f))A.j(B.eO)
e=A.BI(c.h(0,"narrative"))
if(e==null)e=A.pu(d,d,d)
return A.xm(b,q,j,n,l,k,new A.jw(i,h,g,f),e)},
DT(a){var s
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
em:function em(a,b){this.a=a
this.b=b},
jH:function jH(){},
o3:function o3(a,b){this.a=a
this.b=b},
o2:function o2(a,b,c,d,e,f,g,h,i,j){var _=this
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
o4:function o4(a){this.a=a},
o5:function o5(){},
o6:function o6(){},
o7:function o7(a){this.a=a},
o8:function o8(){},
AC(a){var s,r,q,p,o,n,m="modelScale",l=A.m7(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.aA(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.f_)
s=A.e7(l,"houseId")
r=A.e7(l,"sourceRef")
q=J.eZ(A.m4(l,"rooms"),new A.mU(k),t.bJ)
q=A.J(q,q.$ti.i("a6.E"))
q.$flags=1
p=J.eZ(A.m4(l,"portals"),new A.mV(k),t.lT)
p=A.J(p,p.$ti.i("a6.E"))
p.$flags=1
o=J.eZ(A.m4(l,"stairs"),new A.mW(),t.gI)
o=A.J(o,o.$ti.i("a6.E"))
o.$flags=1
n=J.eZ(A.m4(l,"exteriorCells"),new A.mX(),t.N)
n=A.J(n,n.$ti.i("a6.E"))
n.$flags=1
return new A.mT(s,r,q,p,o)},
AD(a,b){var s=A.m7(a,"room"),r=A.e7(s,"id"),q=A.zo(s.h(0,"origin"),"origin",b),p=A.zo(s.h(0,"size"),"size",b),o=J.eZ(A.m4(s,"windows"),new A.mZ(b),t.ya)
o=A.J(o,o.$ti.i("a6.E"))
o.$flags=1
return new A.f0(r,q,p,o)},
m7(a,b){return t.P.b(a)?a:A.iT(b+" is not an object")},
m4(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.iT(b+" is not a list")},
e7(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.iT(b+" is not a string")},
iX(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.iT(b+" is not finite")},
Fa(a,b){var s,r
if(t.j.b(a)){s=J.aC(a)
s=s.gu(a)!==3||s.M(a,new A.uH())}else s=!0
if(s)return A.iT(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.R(a);r.m();)s.push(A.aA(r.gn()))
return s},
zo(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.Fa(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
iT(a){return A.j(A.a7(a,null,null))},
mT:function mT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
mU:function mU(a){this.a=a},
mV:function mV(a){this.a=a},
mW:function mW(){},
mX:function mX(){},
mY:function mY(a){this.a=a},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mZ:function mZ(a){this.a=a},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
f_:function f_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f1:function f1(a){this.b=a},
uH:function uH(){},
ji:function ji(a,b){this.a=a
this.b=b
this.d=null},
nd:function nd(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
l4:function l4(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ov:function ov(){this.b=0},
qh:function qh(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
a_:function a_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nM:function nM(){},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(){},
ow:function ow(a,b,c){this.a=a
this.b=b
this.c=c},
G4(a){var s,r,q,p,o,n,m,l
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
return new A.cd(B.a7,p,new Uint16Array(A.a1(a.b)),new A.j5(new A.L(s.a,s.b,s.c),new A.L(s.d,s.e,s.f)))},
G3(a){var s,r,q,p,o,n=A.e([],t.uH)
for(s=A.EV(a,new A.vw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jC(o,p.c,p.e))}return n},
EV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.p(t.N,t.Ez)
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
throw A.d(A.y("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.f(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.E(d,0,B.b.bF(d,":")):null
l=new A.d0(d,l,h,A.e([],p))
s.k(0,d,l)}B.a.K(l.d,A.e([m,k,j],p))}r=A.e([],t.wf)
q=s.$ti.i("as<2>")
q=A.J(new A.as(s,q),q.i("o.E"))
B.a.S(q,new A.uB())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].p0(a))
return r},
DC(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jB(r,q,p,o,n,m)},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
vw:function vw(a){this.a=a},
uB:function uB(){},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ei:function ei(a,b){this.a=a
this.b=b},
jD:function jD(){},
Fl(a){var s,r,q,p=new A.ow(A.e([],t.Dl),A.e([],t.t),A.p(t.N,t.S))
for(s=0;s<4;++s)A.DW(p,a,B.cF[s],15.75,15.75,12.044999999999998,0.63)
p.v(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.v(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.v(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.v(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.v(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.v(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.v(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.v(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a_(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a_(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ad(r,new A.a_(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ad(r,q,new A.a_(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a_(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a_(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ad(q,new A.a_(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ad(q,r,new A.a_(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.v(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ad(new A.a_(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a_(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a_(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ad(new A.a_(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a_(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a_(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a_(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a_(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ad(r,new A.a_(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ad(r,q,new A.a_(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a_(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a_(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ad(q,new A.a_(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ad(q,r,new A.a_(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.EM(p,15.75,15.75,12.044999999999998,16.32)
A.DF(p,15.75,15.75,16.32)
A.DS(p,15.75,15.75,12.044999999999998)
A.E_(p,a,15.75)
A.ES(p,15.75,15.75)
A.DB(p,15.75)
return p.mq()},
DW(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.il)
for(s=b6.b,r=s.length,q=B.x!==b7,p=B.l!==b7,o=B.m===b7,n=B.J===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.b_(k)
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
B.a.l(b4,new A.e0(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aF(i),b=J.R(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.aJ(i)!==b7)continue
B:{if(!p||o){a0=g+a.al(i)
break B}if(!q||n){a0=e+a.al(i)
break B}a0=null}B.a.l(b4,new A.e0(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
r=t.i
a1=A.aJ([0,s],r)
a2=A.aJ([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.J(a1,a1.$ti.c)
B.a.X(a4)
a5=A.J(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.f(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.f(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.f(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.ug(b0,b1,b2,b3)))continue
switch(m){case 0:b5.v(0,b1,b3,0,b0,b2,r)
break
case 2:b5.v(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.v(0,0,b3,b1,r,b2,b0)
break
case 1:b5.v(0,s,b3,b1,b8,b2,b0)
break}}A.DZ(b5,b4,b7,b8,b9,c1)
A.DX(b5,b4,b7,b8,b9,c1)
A.DY(b5,b4,b7,b8,b9,c0,c1)},
DY(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aJ([0,a4===B.l||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.uf(a,a0,g)))continue
switch(s){case 0:a2.v(1,a0,e,m,a,f,l)
break
case 2:a2.v(1,a0,e,k,a,f,j)
break
case 3:a2.v(1,m,e,a0,l,f,a)
break
case 1:a2.v(1,o,e,a0,n,f,a)
break}}}},
DX(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.r)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.v(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.v(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.v(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.v(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.v(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.v(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.l)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.v(2,a+0.18,n,r,a,a1,p)}}},
DZ(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.r)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.v(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.v(e,a1,a,l,a0,b,m)
a2.v(e,a1,b,l,c,b-0.06,m)
a2.v(e,a1,a+0.06,l,c,a,m)
if(f)a2.v(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.v(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.v(e,a1,a,j,a0,b,k)
a2.v(e,a1,b,j,c,b-0.06,k)
a2.v(e,a1,a+0.06,j,c,a,k)
if(f)a2.v(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.v(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.v(e,l,a,a1,m,d,a0)
a2.v(e,l,d,a1,m,d-0.06,b)
a2.v(e,l,a+0.06,a1,m,a,b)
if(f)a2.v(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.v(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.v(e,o,a,a1,p,d,a0)
a2.v(e,o,d,a1,p,d-0.06,b)
a2.v(e,o,a+0.06,a1,p,a,b)
if(f)a2.v(3,p,a,c+0.07,n,d,c)
break}if(!f)A.EQ(a2,g,a4,a5,a6,a7,q)}},
EQ(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.v(3,o+0.025,m,r,o-0.025,n,s)
a.v(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.v(3,o+0.025,m,r,o-0.025,n,s)
a.v(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.v(3,r,m,o+0.025,s,n,o-0.025)
a.v(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.v(3,r,m,o+0.025,s,n,o-0.025)
a.v(3,r,l+0.025,p,s,l-0.025,q)
break}},
EM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.v(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.v(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.v(4,i,p,-0.38,j,q,-0.44)
a.v(4,i,p,s,j,q,o)}A.EN(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.v(5,h+0.5,p,o,h-0.5,r,q)}},
EN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a_(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a_(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ad(n,new A.a_(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ad(n,m,new A.a_(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a_(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a_(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ad(m,new A.a_(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ad(m,n,new A.a_(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
DF(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.v(0,g+0.35,k,n,g-0.35,l,q)
a.v(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.v(5,d+0.1,o,m,d-0.1,r,p)}}},
DS(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.v(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.v(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.v(6,j,b+0.06,d,k,b,e)}a.v(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
E_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.al("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.v(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.v(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.v(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.v(6,p,1.95,-0.58,q+0.16,1.55,-0.63)
a.v(3,q+0.32,1.5,-0.55,q+0.12,1.42,-0.69)
k=r-0.18
a.v(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.v(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
ES(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.v(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.v(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.v(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.v(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.v(6,m,j+0.06,l,s,j,n)}a.v(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.v(6,i+0.34,0.22,s,i,0.1,h)}},
DB(a,b){var s,r
a.v(0,6.7,1,-4.05,-2.5,0,-4.4)
a.v(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.v(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.v(7,b+3,0,-4.55,-3,-0.08,-5.2)},
e0:function e0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ug:function ug(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uf:function uf(a,b,c){this.a=a
this.b=b
this.c=c},
FT(a,b,c,d){var s,r,q,p,o,n=A.wT(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.ej(B.ex,s)}r=A.zR(a,c,b)
if(r!=null)return new A.ej(B.ey,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.zS(a,c,b)!=null)return B.eD
q=A.zQ(a,b,c,d)
if(q!=null){p=d.cD(q.c)
o=q.y
return new A.ej(B.eA,o==null?"inspect the "+p.b:"inspect "+o)}return B.eC},
zQ(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(a2==null)return null
s=a1.e.h(0,a0)
if(s==null)return null
for(r=a2.ol(a0),q=J.R(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>")),p=a2.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=1/0;r.m();){j=q.gn()
if(!j.x)continue
i=a2.cD(j.c)
h=j.f.a
g=j.jc(i,p)
f=a.a
e=new A.b(n+(h.a*p+0)-f.a,m+(h.b*p+(g.a+g.b)*0.5)-f.b,o+(h.c*p+0)-f.c)
d=e.gu(0)
if(d<0.01||d>4.5)continue
h=e.gaa()
f=a.b
c=Math.acos(B.d.L(h.a*f.a+h.b*f.b+h.c*f.c,-1,1))
if(c>0.5236)continue
b=c+d/4.5*0.2
if(b<k){k=b
l=j}}return l},
dK:function dK(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.c=b},
zz(a,b){var s,r=new A.cT(new Float32Array(5376)),q=new A.cT(new Float32Array(5376)),p=new A.cT(new Float32Array(5376)),o=new A.cT(new Float32Array(5376)),n=b.d,m=a.b_(b),l=A.hq(b.y),k=A.hq(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cU(new A.b(j,i,h),new A.b(j,i,f),new A.b(d,i,f),new A.b(d,i,h),l.c,e/c,g/c)
A.Dq(r,b,m)
i+=m.b
c=k.e
q.cU(new A.b(j,i,h),new A.b(d,i,h),new A.b(d,i,f),new A.b(j,i,f),k.c,e/c,g/c)
A.Dn(q,b,m)
for(s=0;s<4;++s)A.Du(p,a,b,m,B.cF[s])
for(j=a.aF(b.a),i=J.R(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.yA(o,b,m,h,!0)}A.Do(p,b,m)
A.Dr(p,a,b,m)
return new A.qi(B.q.aN(r.a,0,r.b),B.q.aN(q.a,0,q.b),B.q.aN(p.a,0,p.b),B.q.aN(o.a,0,o.b))},
Dn(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.t(a,new A.b(n,s,r),new A.b(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.t(a,new A.b(m-0.34,g,l-0.34),new A.b(m+0.34,d-0.018,l+0.34),12037536)
A.t(a,new A.b(m-0.22,d-0.075,l-0.22),new A.b(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.t(a,new A.b(s,r,j),new A.b(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.t(a,new A.b(i,s,r),new A.b(i+0.1,q,p),4078648)}},
Fj(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cT(new Float32Array(5376))
r=a.b_(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.yB(s,b,r,c,q)
return B.q.aN(s.a,0,s.b)},
Fk(a,b){var s,r,q,p=new A.cT(new Float32Array(5376)),o=a.b_(b)
for(s=a.aF(b.a),r=J.R(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.yA(p,b,o,q,!1)}return B.q.aN(p.a,0,p.b)},
Dq(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.hq(c)
if(c==="floor-wood"){c=a3.c
r=B.d.aS(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.eT(m,1.04):A.eT(m,0.84)
A.t(a1,new A.b(b,q,k),new A.b(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.t(a1,new A.b(h,a+0.016,a0+0.18),new A.b(p,a+0.026,c-0.18),6443866)
A.t(a1,new A.b(h+0.08,a+0.027,a0+0.22),new A.b(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.t(a1,new A.b(b+1.15,a+0.018,a0+2.15),new A.b(b+4.7,a+0.03,a0+4.35),5589578)
A.t(a1,new A.b(b+1.28,a+0.031,a0+2.28),new A.b(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.eT(c,1.04):A.eT(c,0.88)
A.t(a1,new A.b(p,o,k),new A.b(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.eT(c,1.06):A.eT(c,0.88)
A.t(a1,new A.b(e,o,k),new A.b(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.t(a1,new A.b(b+0.08,a+0.004,a0+0.08),new A.b(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.t(a1,new A.b(b+2.2,a+0.015,a0+2.45),new A.b(b+2.68,a+0.021,a0+2.93),A.eT(c,0.58))}},
Dr(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.lX(b2,b4,b5,"living")
A.iR(b2,b4,"living")
a8=a9+b5.a
s=a8-0.48
r=b1+b5.c*0.4
A.t(b2,new A.b(s,b0,r-0.85),new A.b(a8,b0+2.55,r+0.85),7824724)
A.t(b2,new A.b(s-0.38,b0+0.02,r-0.72),new A.b(a8+0.05,b0+0.16,r+0.72),a2)
q=b0+2.34
A.t(b2,new A.b(s-0.52,b0+2.18,r-0.94),new A.b(a8+0.08,q,r+0.94),a3)
p=s-0.02
A.t(b2,new A.b(p,b0+0.45,r-0.48),new A.b(a8+0.03,b0+1.48,r+0.48),2170396)
for(a8=s-0.08,o=b0+0.28,n=r-0.42,m=b0+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.t(b2,new A.b(a8+j,o,n),new A.b(p+j,m,l),a4)}for(a8=s-0.01,p=b0+1.55,o=s+0.04,n=b0+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.t(b2,new A.b(a8,p,l+j),new A.b(o,n,m+j),a2)}for(a8=[r-0.68,r+0.56],p=s-0.42,o=b0+2,n=s-0.26,m=b0+2.2,i=0;i<2;++i){h=a8[i]
A.t(b2,new A.b(p,o,h),new A.b(n,m,h+0.16),a5)}A.t(b2,new A.b(s-0.27,q,r-0.58),new A.b(s-0.07,b0+2.52,r-0.38),a6)
A.t(b2,new A.b(s-0.25,q,r+0.34),new A.b(s-0.06,b0+2.49,r+0.52),a3)
break
case"hall":A.Ds(b2,b3,b4,b5,a5,a4)
A.Dt(b2,b3,b4,b5,a5,a4)
A.iR(b2,b4,"hall")
A.t(b2,new A.b(a9+0.28,b0+0.78,b1+0.52),new A.b(a9+0.68,b0+0.88,b1+2.15),a5)
for(a8=[b1+0.66,b1+2.01],q=a9+0.34,p=a9+0.42,o=b0+0.8,i=0;i<2;++i){g=a8[i]
A.t(b2,new A.b(q,b0,g),new A.b(p,o,g+0.08),a3)}f=a9+1.22
a8=b1+0.1
A.t(b2,new A.b(f-0.28,b0+2.35,b1+0.02),new A.b(f+0.28,b0+3.02,a8),a5)
A.t(b2,new A.b(f-0.13,b0+2.48,a8),new A.b(f+0.13,b0+2.72,b1+0.15),a2)
a8=b1+0.08
A.t(b2,new A.b(f-0.025,b0+1.82,a8),new A.b(f+0.025,b0+2.36,b1+0.13),a4)
for(q=a9+1.7,p=b0+1.74,o=a9+1.78,n=b0+1.84,m=b1+0.16,k=0;k<3;++k){l=k*0.36
A.t(b2,new A.b(q+l,p,a8),new A.b(o+l,n,m),a4)}a8=b0+0.72
A.t(b2,new A.b(a9+0.86,b0,b1+0.62),new A.b(a9+1.1,a8,b1+0.9),a6)
A.t(b2,new A.b(a9+0.91,a8,b1+0.68),new A.b(a9+1.05,b0+0.82,b1+0.84),a5)
break
case"kitchen":A.iR(b2,b4,"kitchen")
a8=a9+b5.a
e=a8-0.62
q=b0+1.28
A.t(b2,new A.b(e,b0,b1+0.72),new A.b(a8,q,b1+2.18),a4)
A.t(b2,new A.b(e-0.08,q,b1+0.62),new A.b(a8+0.04,b0+1.38,b1+2.28),a2)
for(a8=e+0.12,q=b0+1.39,p=b1+0.88,o=e+0.4,n=b0+1.45,m=b1+1.16,k=0;k<3;++k){l=k*0.4
A.t(b2,new A.b(a8,q,p+l),new A.b(o,n,m+l),2170396)}a8=b0+0.82
q=b0+0.94
A.t(b2,new A.b(a9+1.05,a8,b1+1.15),new A.b(a9+3.1,q,b1+2.35),a3)
for(p=[a9+1.18,a9+2.94],o=b1+1.28,n=b1+1.38,i=0;i<2;++i){d=p[i]
A.t(b2,new A.b(d,b0,o),new A.b(d+0.1,a8,n),a5)}A.t(b2,new A.b(a9+0.48,b0+1.72,b1+2.74),new A.b(a9+2.55,b0+1.84,b1+2.88),a5)
a8=b0+1.02
A.t(b2,new A.b(a9+3.38,q,b1+1.26),new A.b(a9+4.48,a8,b1+2.22),a6)
q=b1+1.66
p=b1+1.74
A.t(b2,new A.b(a9+3.82,a8,q),new A.b(a9+3.9,b0+1.34,p),a4)
A.t(b2,new A.b(a9+3.72,b0+1.3,q),new A.b(a9+4,b0+1.36,p),a4)
for(a8=a9+1.38,q=b0+0.95,p=b1+1.48,o=a9+1.78,n=b0+1.05,m=b1+1.88,k=0;k<2;++k){l=k*0.55
A.t(b2,new A.b(a8+l,q,p),new A.b(o+l,n,m),a6)}break
case"cellar":A.iR(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.t(b2,new A.b(a8+m,b0,q),new A.b(p+m,o+B.c.P(k,2)*0.18,n),a5)}A.t(b2,new A.b(a9+2.55,b0+0.15,b1+0.38),new A.b(a9+2.72,b0+1.55,b1+0.56),a4)
A.t(b2,new A.b(a9+2.42,b0+1.28,b1+0.32),new A.b(a9+2.86,b0+1.38,b1+0.65),a6)
A.t(b2,new A.b(a9+0.4,b0+1.72,b1+0.45),new A.b(a9+3.4,b0+1.82,b1+0.58),a4)
A.t(b2,new A.b(a9+1.9,b0+1.58,b1+0.42),new A.b(a9+2.06,b0+1.76,b1+0.61),a4)
A.t(b2,new A.b(a9+1.84,b0+1.62,b1+0.55),new A.b(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.lX(b2,b4,b5,"bedroom")
A.iR(b2,b4,"bedroom")
c=a9+0.85
b=b1+2.08
a8=b0+0.72
A.t(b2,new A.b(c,b0+0.42,b),new A.b(c+3.65,a8,b+2.05),6972528)
A.t(b2,new A.b(c-0.1,a8,b-0.12),new A.b(c+3.75,b0+1.28,b+0.1),a3)
A.t(b2,new A.b(c+0.22,b0+0.74,b+1.35),new A.b(c+1.05,b0+0.9,b+1.82),a6)
a8=a9+b5.a
q=b0+1.48
A.t(b2,new A.b(a8-0.95,b0+0.78,b1+0.58),new A.b(a8-0.18,q,b1+1.42),a3)
A.t(b2,new A.b(a8-1.04,q,b1+0.48),new A.b(a8-0.1,b0+1.57,b1+1.52),a5)
for(a8=[b+0.22,b+0.78],q=c+0.36,p=b0+0.75,o=c+1.12,n=b0+0.92,i=0;i<2;++i){a=a8[i]
A.t(b2,new A.b(q,p,a),new A.b(o,n,a+0.42),a6)}for(a8=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=b0+0.08,n=b0+0.44,i=0;i<2;++i){a0=a8[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.t(b2,new A.b(a0,o,g),new A.b(l,n,g+0.1),a5)}}break
case"landing":A.lX(b2,b4,b5,"landing")
a8=a9+0.48
A.t(b2,new A.b(a9+0.34,b0+0.02,b1+1.62),new A.b(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.t(b2,new A.b(a8,q+l,p+j),new A.b(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.t(b2,new A.b(a8+l,q,p+j),new A.b(o+l,n,m+j),a5)}break
case"bathroom":A.lX(b2,b4,b5,a7)
A.iR(b2,b4,a7)
a8=b0+0.62
A.t(b2,new A.b(a9+0.3,b0+0.04,b1+0.38),new A.b(a9+2.15,a8,b1+1.22),a6)
q=b0+0.72
A.t(b2,new A.b(a9+0.42,a8,b1+0.48),new A.b(a9+2.03,q,b1+1.12),a2)
a8=a9+b5.a
p=b1+b5.c
A.t(b2,new A.b(a8-0.78,b0+0.12,p-0.88),new A.b(a8-0.18,b0+1.75,p-0.28),a6)
A.t(b2,new A.b(a8-0.86,b0+1.68,p-0.98),new A.b(a8-0.1,b0+1.82,p-0.18),a4)
p=b1+0.68
a8=b0+1.18
o=b1+0.78
A.t(b2,new A.b(a9+0.86,q,p),new A.b(a9+0.96,a8,o),a4)
A.t(b2,new A.b(a9+0.7,b0+1.12,p),new A.b(a9+1.12,a8,o),a4)
break
case"spare-room":A.lX(b2,b4,b5,"spare")
A.t(b2,new A.b(a9+1,b0,b1+0.7),new A.b(a9+3.25,b0+1.65,b1+2),6972528)
A.t(b2,new A.b(a9+0.8,b0+1.6,b1+0.52),new A.b(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.t(b2,new A.b(a8-1.05,b0,q-1.02),new A.b(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.t(b2,new A.b(p,o+l,n),new A.b(a8,m+l,q),a4)}break}},
lX(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
switch(a0){case"living":g=e+0.58
A.t(a,new A.b(f+0.45,e,d+1.86),new A.b(f+1.18,g,d+2.66),7694457)
s=e+0.12
r=d+1.92
q=e+0.78
p=d+2.6
A.t(a,new A.b(f+0.34,s,r),new A.b(f+0.48,q,p),j)
A.t(a,new A.b(f+1.15,s,r),new A.b(f+1.29,q,p),j)
p=e+0.72
A.t(a,new A.b(f+0.52,g,d+1.8),new A.b(f+1.12,p,d+1.94),i)
A.t(a,new A.b(f+0.35,e,d+0.42),new A.b(f+1.95,p,d+0.7),i)
A.t(a,new A.b(f+0.28,p,d+0.34),new A.b(f+2.02,e+0.84,d+0.78),j)
for(g=[f+0.62,f+1.32],s=e+0.25,r=d+0.68,q=e+0.29,p=d+0.72,o=0;o<2;++o){n=g[o]
A.t(a,new A.b(n,s,r),new A.b(n+0.34,q,p),h)}break
case"bedroom":g=e+0.72
s=d+0.38
r=e+0.84
A.t(a,new A.b(f+0.35,g,s),new A.b(f+1.24,r,d+0.86),i)
for(q=f+0.42,p=[q,f+1.08],m=d+0.46,l=d+0.54,o=0;o<2;++o){k=p[o]
A.t(a,new A.b(k,e,m),new A.b(k+0.08,g,l),j)}A.t(a,new A.b(f+0.55,r,d+0.47),new A.b(f+1.05,e+0.96,d+0.78),h)
A.t(a,new A.b(q,e+0.82,d+0.32),new A.b(f+1.18,e+1.58,s),j)
break
case"landing":g=e+0.48
s=e+0.72
A.t(a,new A.b(f+0.64,g,d+0.32),new A.b(f+1.75,s,d+0.82),7694457)
A.t(a,new A.b(f+0.58,s,d+0.26),new A.b(f+1.81,e+0.82,d+0.88),j)
for(s=[f+0.72,f+1.62],r=d+0.4,q=d+0.48,o=0;o<2;++o){k=s[o]
A.t(a,new A.b(k,e,r),new A.b(k+0.08,g,q),i)}break
case"bathroom":g=e+0.48
A.t(a,new A.b(f+1.55,g,d+1.72),new A.b(f+2.12,e+0.6,d+2.16),h)
for(s=[f+1.62,f+2],r=d+1.78,q=d+1.85,o=0;o<2;++o){k=s[o]
A.t(a,new A.b(k,e,r),new A.b(k+0.07,g,q),j)}break
case"spare":g=e+0.74
s=e+0.86
A.t(a,new A.b(f+1.3,g,d+2.3),new A.b(f+2.42,s,d+2.72),j)
for(r=[f+1.4,f+2.3],q=d+2.36,p=d+2.44,o=0;o<2;++o){k=r[o]
A.t(a,new A.b(k,e,q),new A.b(k+0.08,g,p),i)}A.t(a,new A.b(f+1.62,s,d+2.39),new A.b(f+2.1,e+0.98,d+2.63),h)
break}},
iR(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.t(a2,new A.b(a+0.42,a0,a1+3.24),new A.b(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.t(a2,new A.b(b+m,s,r-l),new A.b(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.c.P(n,2)*0.1
A.t(a2,new A.b(k,s+j,r),new A.b(k+0.25,q+j,p),5913386)
A.t(a2,new A.b(k+0.045,o+j,p),new A.b(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.t(a2,new A.b(a+2.98,a0+1.1,a1+2.82),new A.b(a+3.05,a0+1.72,b),c)
s=a+2.72
A.t(a2,new A.b(s,a0+0.82,a1+2.84),new A.b(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.t(a2,new A.b(h,r,q),new A.b(h+0.06,p,b),c)}break
case"cellar":A.t(a2,new A.b(a+2.82,a0,a1+2.72),new A.b(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.c.P(n,2)*0.32
f=s+B.c.T(n,2)*0.32
A.t(a2,new A.b(g,r,f),new A.b(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.t(a2,new A.b(e,s,r),new A.b(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.t(a2,new A.b(a+0.34,b,a1+2.22),new A.b(a+1.24,a0+1.32,a1+2.28),c)
A.t(a2,new A.b(a+0.48,a0+0.82,a1+2.24),new A.b(a+1.1,b,a1+2.3),d)
break}},
Dt(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
if(d.length===0)return
s=B.a.gO(d)
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
A.t(a,new A.b(r+0.03,n+0.1,m+0.03),new A.b(p-0.03,d,l-0.03),2367259)
q=m+0.08
o=l-0.08
A.t(a,new A.b(r+0.18,n+0.92,q),new A.b(p-0.18,n+0.98,o),a1)
j=r-0.055
A.t(a,new A.b(j-0.06,n+0.08,m-0.08),new A.b(j,n+1.86,l+0.08),6965557)
A.t(a,new A.b(j-0.075,n+0.18,q),new A.b(j-0.005,d,o),4861989)
for(q=[m+0.2,m+0.63],o=j-0.088,i=n+0.28,h=j-0.006,g=n+0.57,f=0;f<2;++f){e=q[f]
A.t(a,new A.b(o,i,e),new A.b(h,g,e+0.27),5847339)}A.t(a,new A.b(j-0.11,d,m-0.1),new A.b(j+0.01,n+1.84,l+0.1),6965557)
A.t(a,new A.b(j-0.12,n+0.9,m+0.52),new A.b(j-0.08,n+0.99,m+0.61),a2)},
Ds(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
if(b1.length===0)return
s=B.a.gO(b1)
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
g=B.d.oO(k/0.18)
f=B.d.aH(1>g?1:g)
e=k/f
g=i-h
d=g/f
c=b1+0.1
for(b=0;b<f;){++b
a=i-b*d
A.t(b2,new A.b(p,c,a),new A.b(o,c+b*e,a+d),b6)}a0=b1+0.08
a1=b1+0.34
A.t(b2,new A.b(p-0.1,a0,h),new A.b(p,a1,i),b0)
A.t(b2,new A.b(o,a0,h),new A.b(o+0.1,a1,i),b0)
a2=o+0.16
a3=o+0.25
a4=b1+0.82
a5=l+0.78
a6=m-0.12
a5=a5<a6?a5:a6
A.t(b2,new A.b(a2,a0,i-0.12),new A.b(a3,a4+0.12,i+0.02),b0)
b1=a5-0.86
if(a0>b1)b1=a0
A.t(b2,new A.b(a2,b1,h-0.02),new A.b(a3,a5,h+0.12),b0)
for(b1=a5-a4,m=a2+0.01,a0=a3-0.01,b=0;b<=5;++b){a7=b/5
a8=i-a7*g
a9=a4+a7*b1
A.t(b2,new A.b(m,a9-0.7,a8-0.025),new A.b(a0,a9,a8+0.025),b7)}A.t(b2,new A.b(a2-0.05,a5-0.08,h-0.08),new A.b(a3+0.05,a5+0.08,h+0.08),b0)},
Du(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.e([],t.l5)
for(s=a2.a,r=a1.aF(s),q=J.R(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.aJ(s)===a4)a.push(new A.e_(p.al(s),p.al(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.e_(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aJ([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.K(0,A.e([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.X(l)
s=A.aJ([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.K(0,A.e([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.tx(f,e,d,c)))continue
A.Fb(a0,a2,a3,a4,f,e,d,c)}A.Dv(a0,a2,a3,a4,b,a)},
Dv(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tv(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tv(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tv(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tv(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
for(r=b5.length,l=0;l<b5.length;b5.length===r||(0,A.r)(b5),++l){k=b5[l]
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
if(o>0)A.b8(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.b8(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.b8(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.b8(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.H(a9),o=r.i("n(1)").a(new A.tw(b3)),a9=B.a.gt(a9),r=new A.T(a9,o,r.i("T<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.b8(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.b8(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.b8(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.b8(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.Dw(b0,b1,b2,b3,b,p)}},
Dw(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
if(a2==="hall"||a7.r||a7.f<1)return
s=a6===B.l||a6===B.m?a5.a:a5.c
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
A.b8(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.b8(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.b8(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.b8(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.b8(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
tv(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.F0(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.b8(a,b,c,d,n,o,g,h,i,j)}},
F0(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.e([new A.fH(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fH(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fH(n,j))}h=p}return h},
Do(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.ko.q(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.t(a,new A.b(p-0.025,n,o-0.025),new A.b(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.t(a,new A.b(p-0.14,k,o-0.14),new A.b(p+0.14,n,o+0.14),j)
A.t(a,new A.b(p-0.09,n-0.16,o-0.09),new A.b(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.t(a,new A.b(h-0.24,k,e-0.24),new A.b(h+0.24,s,e+0.24),l)
j=s-0.034
A.t(a,new A.b(h-0.15,j,e-0.15),new A.b(h+0.15,k,e+0.15),l)
A.t(a,new A.b(h-0.055,s-0.048,e-0.055),new A.b(h+0.055,j,e+0.055),l)},
b8(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.t(a,new A.b(r+e,q+g,p),new A.b(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.t(a,new A.b(r+e,q+g,s-i),new A.b(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.t(a,new A.b(s-i,q+g,p+e),new A.b(s,q+h,p+f),j)
return
case 3:A.t(a,new A.b(r,q+g,p+e),new A.b(r+i,q+h,p+f),j)
return}},
t(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.b(o,n,m),k=c.a,j=new A.b(k,n,m),i=c.b,h=new A.b(k,i,m),g=new A.b(o,i,m)
m=c.c
s=new A.b(o,n,m)
r=new A.b(k,n,m)
q=new A.b(k,i,m)
p=new A.b(o,i,m)
a.aw(j,l,g,h,d)
a.aw(s,r,q,p,d)
a.aw(l,s,p,g,d)
a.aw(r,j,h,q,d)
a.aw(l,j,r,s,d)
a.aw(g,p,q,h,d)},
Fb(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.b(i+e,h+a0,g)
break
case 2:s=new A.b(i+f,h+a0,g+c.c)
break
case 1:s=new A.b(i+c.a,h+a1,g+f)
break
case 3:s=new A.b(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.b(i+f,h+a0,g)
break
case 2:r=new A.b(i+e,h+a0,g+c.c)
break
case 1:r=new A.b(i+c.a,h+a1,g+e)
break
case 3:r=new A.b(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.b(i+f,h+a1,g)
break
case 2:q=new A.b(i+e,h+a1,g+c.c)
break
case 1:q=new A.b(i+c.a,h+a0,g+e)
break
case 3:q=new A.b(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.b(i+e,h+a1,g)
break
case 2:p=new A.b(i+f,h+a1,g+c.c)
break
case 1:p=new A.b(i+c.a,h+a0,g+f)
break
case 3:p=new A.b(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.b(0,0,0.003)
break
case 2:o=new A.b(0,0,-0.003)
break
case 1:o=new A.b(-0.003,0,0)
break
case 3:o=new A.b(0.003,0,0)
break
default:o=k}n=b.x
m=A.hq(n).e
a.cU(s.a8(0,o),r.a8(0,o),q.a8(0,o),p.a8(0,o),A.hq(n).c,(f-e)/m,(a1-a0)/m)
l=A.Fc(b,d)
switch(j){case 0:o=new A.b(s.a,s.b,s.c-l)
break
case 2:o=new A.b(r.a,s.b,s.c)
break
case 1:o=new A.b(s.a,s.b,p.c)
break
case 3:o=new A.b(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.b(r.a,q.b,s.c)
break
case 2:j=new A.b(s.a,q.b,s.c+l)
break
case 1:j=new A.b(s.a+l,q.b,r.c)
break
case 3:j=new A.b(p.a,q.b,r.c)
break
default:j=k}A.t(a,o,j,A.eT(A.hq(n).c,0.68))},
eT(a,b){var s,r=new A.uz(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.d4()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.d4()
r=r.$1(a&255)
if(typeof r!=="number")return A.j2(r)
return(q<<16|s<<8|r)>>>0},
Fc(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
yA(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aJ(d),b=a3.al(d),a=b+a3.w
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
A.t(a0,new A.b(r+l,s,d),new A.b(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.b(l,s,d),new A.b(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.t(a0,new A.b(r+n,s+m,d),new A.b(r+h,j,i),q)
A.t(a0,new A.b(k,s,d),new A.b(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.t(a0,new A.b(r+l,s,k),new A.b(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.b(l,s,k),new A.b(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.t(a0,new A.b(r+n,s+m,k),new A.b(r+h,i,d),q)
A.t(a0,new A.b(j,s,k),new A.b(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.t(a0,new A.b(n,s,d+k),new A.b(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.b(n,s,k),new A.b(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.t(a0,new A.b(n,s+e,d+m),new A.b(r,j,d+l),q)
A.t(a0,new A.b(n,s,i),new A.b(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.t(a0,new A.b(r,s,d+l),new A.b(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.b(r,s,l),new A.b(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.t(a0,new A.b(r,s+e,d+n),new A.b(k,j,d+m),q)
A.t(a0,new A.b(r,s,i),new A.b(k,s+0.05,l),q)
break}if(a4)A.yB(a0,a1,a2,a3,q)
A.Dp(a0,a1,a2,a3)},
Dp(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.al(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aJ(d)
d=a0-0.035
if(0>d)d=0
r=s!==B.l
q=!r||s===B.m?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.035
A.b8(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.m,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.b8(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.b8(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.b8(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
yB(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aJ(o),m=d.al(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.t(a,new A.b(p,s,o),new A.b(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.t(a,new A.b(p,s,o-d.w),new A.b(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.t(a,new A.b(p-d.w,s,o),new A.b(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.t(a,new A.b(p,s,o),new A.b(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.t(a,new A.b(p,s,o),new A.b(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.t(a,new A.b(p,s,o-0.055),new A.b(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.t(a,new A.b(p-0.055,s,o),new A.b(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.t(a,new A.b(p,s,o),new A.b(p+0.055,s+r,o+d.w),e)
break}},
qi:function qi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tx:function tx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tw:function tw(a){this.a=a},
uz:function uz(a){this.a=a},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b){this.a=a
this.b=b},
xp(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.e([],b5),b7=t.qP,b8=A.e([],b7),b9=A.e([],t.DZ),c0=t.N
c0=new A.ot(b6,b8,b9,A.p(c0,t.U),A.p(c0,t.T),new A.ov())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.K(b6,A.e([new A.aU(n,B.ar,new A.b(4.5,3.9,4),new A.b(0,0,0),A.e([new A.b6("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.b6("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bd(m,l,new A.b(1,1.95,1),!1,!1,m),new A.bd(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.b0,"wallpaper-stripes",i,h,B.L),new A.aU(g,B.ar,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.e([new A.b6("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bd("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.e([new A.bf(e,e,new A.b(0.2,2.175,0.35)),new A.bf(d,d,new A.b(2.2,2.55,3)),new A.bf(c,c,new A.b(0.4,1.35,4.1)),new A.bf(b,b,new A.b(0.92,0.82,5.55))],p),a,i,h,B.L),new A.aU(a0,B.ar,new A.b(4.5,3.75,3),new A.b(0,0,4),A.e([new A.b6("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.b6("kitchen-west",B.J,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bd(a1,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a1),new A.bd("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.bd("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.bf(a2,a2,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.iz),new A.aU("cellar",B.ar,new A.b(4,3,4),new A.b(1,-3,2),B.b2,A.e(["hall-cellar"],r),B.ie,B.b0,"wallpaper-damp","floor-concrete","ceiling-pipes",B.L),new A.aU("bedroom",B.as,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.e([new A.b6("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.b6("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bd(a3,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a3),new A.bd("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.e([new A.bf(a4,a4,new A.b(2.2,1.125,2.5)),new A.bf(a5,a5,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.L),new A.aU(a6,B.as,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.b2,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.bd("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.b0,a,i,h,B.L),new A.aU(a8,B.as,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.e([new A.b6("bathroom-east",B.x,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.bd("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.e([new A.bf(a9,a9,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.L),new A.aU(b0,B.as,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.e([new A.b6("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bd("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.e([new A.bf(b1,b1,new A.b(0.5,1.8,0.3)),new A.bf(b2,b2,new A.b(3.7,2.1,2.7)),new A.bf(b3,b3,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.L)],b5))
B.a.K(b8,A.e([A.dT(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.dT(g,n,b4,!1,B.J,B.x,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.dT(g,a0,b4,!1,B.J,B.x,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.dT(a0,n,b4,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.dT(g,"cellar","kit-cellar-door-grille",!1,B.m,B.x,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.dT(g,a6,o,!1,B.x,B.x,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.dT(a6,"bedroom",b4,!1,B.J,B.x,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.dT(a6,a8,b4,!1,B.m,B.l,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.dT(a6,b0,b4,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dp("hall-stairs",f,B.i4,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
c0.ku()
c0.kv()
c0.l8()
b5=b6.length
if(b5!==8)A.j(A.m("expected eight rooms, got "+b5))
b5=c0.gp_()
if(b5!==9)A.j(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaM(b9).c.length!==3||B.a.gU(B.a.gaM(b9).c)!==9.45)A.j(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.j(A.m("expected nine physical portals"))
c0.m5()
c0.m3()
return c0},
ot:function ot(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oK:function oK(a){this.a=a},
oL:function oL(){},
oM:function oM(){},
oJ:function oJ(){},
oN:function oN(a){this.a=a},
oO:function oO(){},
wT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=4.5,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gu(0)
if(g<0.01||g>4.5)continue
f=h.gaa()
j=a.b
if(Math.acos(B.d.L(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
zR(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aF(c),r=J.R(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=null,p=4.5;s.m();){o=r.gn()
n=b.oo(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.yY(l,k,a,4.5,0.5236)||k>=p)continue
p=k
q=o}return q},
zS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=4.5,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.Fd(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gu(0)
if(!A.yY(k,j,a,4.5,0.5236)||j>=p)continue
p=j
q=n}return q},
yY(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.L(a.gaa().c_(c.b),-1,1))<=e},
Fd(a,b,c){var s=a.b_(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
nL:function nL(){this.a=null
this.b=0},
r0:function r0(){},
r1:function r1(){},
Bv(a){var s=A.iY(a,"inventory asset"),r=A.dz(s,"id"),q=A.dz(s,"kind")
A.dz(s,"source")
A.dz(s,"proxy")
A.dz(s,"pivot")
s=A.iY(s.h(0,"bounds"),"inventory bounds")
return new A.cN(r,q,new A.oW(A.md(s.h(0,"min"),"bounds.min"),A.md(s.h(0,"max"),"bounds.max")))},
Bw(a){var s,r,q,p,o,n,m,l="stateKey",k=A.iY(a,"inventory placement"),j=A.iY(k.h(0,"visibility"),"placement visibility"),i=A.iY(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dz(k,"id"),f=A.dz(k,"roomId"),e=A.dz(k,"assetId")
A.dz(k,"role")
s=typeof k.h(0,"socket")=="string"?A.x(k.h(0,"socket")):null
k=A.iY(k.h(0,"transform"),"inventory transform")
r=A.md(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.fc)
q=A.md(k.h(0,"position"),"transform.position")
p=A.md(k.h(0,"rotation"),"transform.rotation")
A.dz(j,"layer")
if(typeof j.h(0,l)=="string")A.x(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.x(i.h(0,"focusId")):null
m=t.P.b(h)?A.EA(h,"radius"):0
return new A.cs(g,f,e,s,new A.oY(q,p,r),o,n,m)},
iY(a,b){return t.P.b(a)?a:A.dw(b+" is not an object")},
dz(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dw(b+" is not a string")},
EA(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dw(b+" is not finite")},
md(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gu(a)!==3||s.M(a,new A.uG())}else s=!0
if(s)return A.dw(b+" is not a finite vec3")
s=J.aC(a)
return new A.b(A.aA(s.h(a,0)),A.aA(s.h(a,1)),A.aA(s.h(a,2)))},
dw(a){return A.j(A.a7(a,null,null))},
oy:function oy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oB:function oB(a){this.a=a},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.b=b
this.f=c},
cs:function cs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
oW:function oW(a,b){this.a=a
this.b=b},
uG:function uG(){},
oX:function oX(a){this.a=a},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jS:function jS(a){this.a=a},
oC:function oC(a){this.a=a},
dT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.br(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hk:function hk(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
br:function br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bd:function bd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aU:function aU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
Bp(a){return A.Bo(a)},
Bo(a){var s,r,q,p,o,n,m=A.z6(a,"sound emitter"),l=t.N,k=A.p(l,l)
for(s=A.z6(m.h(0,"cues"),"sound emitter cues").gI(),s=s.gt(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.f7)
k.k(0,r.a,q)}s=A.wH(m,"id")
r=A.wH(m,"roomId")
p=A.wH(m,"placementId")
o=A.F9(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.fR("gain is not a number")
return new A.cM(s,r,p,o,n,A.b1(k,l,l))},
z6(a,b){return t.P.b(a)?a:A.fR(b+" is not an object")},
wH(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.fR(b+" is not a string")},
F9(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gu(a)!==3||s.M(a,new A.uF())}else s=!0
if(s)throw A.d(A.a7(b+" must be a numeric vec3",null,null))
s=J.aC(a)
return new A.b(A.aA(s.h(a,0)),A.aA(s.h(a,1)),A.aA(s.h(a,2)))},
fR(a){return A.j(A.a7(a,null,null))},
oE:function oE(a,b,c){this.a=a
this.b=b
this.c=c},
oF:function oF(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(){},
cM:function cM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ou:function ou(){this.b=this.a=null},
ep:function ep(a){this.a=a},
oD:function oD(){this.b=this.a=null},
cL:function cL(a,b){this.a=a
this.b=b},
uF:function uF(){},
xq(a,b,c,d,e,f){var s=t.N
return new A.oI(e,f,c,a,A.b1(A.aM(d,s,s),s,s),A.aj(b,s))},
xr(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.p(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.hI(p.ax,p.ay))}s=A.p(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.p(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.hy(j.d,j.r))}return A.xq(a.r.b,B.o,i,B.cN,h,s)},
Bq(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.iV
r=a3.h(0,"mantleHistory")
if(r==null)r=B.ip
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aL(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.f5)
p=t.N
o=A.p(p,t.DL)
for(n=a.gI(),n=n.gt(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.c6)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bR(j)||!A.bR(i))A.j(B.c6)
o.k(0,k,new A.hI(j,i))}h=A.p(p,t.y)
for(n=a0.gI(),n=n.gt(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bR(l.b))throw A.d(B.f2)
h.k(0,k,A.U(l.b))}g=A.p(p,t.m2)
for(n=a1.gI(),n=n.gt(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.c4)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bR(f)||!A.bR(e))A.j(B.c4)
g.k(0,k,new A.hy(f,e))}d=A.p(p,p)
for(q=s.gI(),q=q.gt(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.fC)
d.k(0,n,A.x(p.b))}c=A.e([],t.s)
for(q=J.R(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.eE)
B.a.l(c,b)}return A.xq(a2,c,g,d,o,h)},
wD(a,b){return a.a.a===b.a&&a.a4(0,b.gap(b))},
oI:function oI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hq(a){var s=B.b8.h(0,a)
if(s==null)throw A.d(A.m("Unknown house surface material: "+a))
return s},
bc:function bc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B6(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hx(e,A.H(e).c)
q=new A.fC()
q.d8((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hf(a,q,2,r,1+s,A.aJ(["time"],t.N))
break
case 3:A.hf(a,q,3,r,1+s,A.aJ(["place"],t.N))
break
case 4:A.hf(a,q,4,r,2+s,p)
A.B2(a,q,4)
break
case 5:A.hf(a,q,5,r,s,p)
A.B0(a,q,5)
break
case 6:A.hf(a,q,6,r,s,p)
A.B1(a,q)
A.B5(a,q,6)
break
case 7:A.B3(a,q,7)
break
default:if(s>0)A.hf(a,q,b,r,s,p)}},
B_(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.B4(a,b,c))return!1
return!0},
hf(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(A.B_(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d5(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.xk(a,b,o[p],f)}},
xk(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gU(o).a,n,n)
if(d==null)s=A.e(B.y.slice(0),t.s)
else{n=t.vY
s=A.J(new A.M(B.y,t.Ag.a(new A.nG(d)),n),n.i("o.E"))}n=s.length
if(n===0)return
n=b.aK(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.f2(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aK(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.dN(c.a,m,B.a.gU(o).b)},
B2(a,b,c){var s=A.xl(a,b,c)
if(!a.bW(s))return
a.fc(c,t.G.a(s),0,B.aU,null)},
xl(a,b,c){var s,r,q,p,o,n=t.N,m=A.p(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.y[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aK(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
B0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d5(i,b)
s=i.length
if(0>=s)return A.f(i,0)
q=i[0]
if(1>=s)return A.f(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aM(B.a.gU(i).a,s,s)
r=p.c
n=A.aM(B.a.gU(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.y[m]
k=o.h(0,l)
j=s.f2(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aK(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.dN(q.a,o,B.a.gU(i).b)
a.dN(p.a,n,B.a.gU(r).b)},
B1(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aK(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.a1(0,q[r].a)},
B5(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aK(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.xk(a,b,q[s],null)},
B3(a,b,c){var s=c+1,r=A.xl(a,b,s)
if(!a.bW(r))return
a.fc(s,t.G.a(r),0,B.aU,null)},
B4(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gU(b.c).c===B.av}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gU(b.c).c===B.av}if(c===21)return b.e
return!1},
nG:function nG(a){this.a=a},
Cq(a){var s,r,q,p,o=t.N,n=A.p(o,t.a)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p=A.at(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rC(n)},
pc(a,b,c){var s,r,q,p=t.z
p=A.p(p,p)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.k4(A.b1(p,q,q),b,c)},
xC(a){var s=t.N
return A.pc(t.P.a(a.h(0,"fields")).bH(0,new A.pd(),s,s),A.aA(a.h(0,"shakiness")),A.Bb(B.i8,A.x(a.h(0,"hand")),t.qX))},
Ba(a){var s,r,q,p,o=a.h(0,"margin"),n=A.c(a.h(0,"ordinal")),m=A.c(a.h(0,"day")),l=A.e([],t.Bv)
for(s=J.R(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.xC(r.a(s.gn())))
s=A.aB(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.yJ(a.h(0,"lastReadDay"))
return new A.bT(n,m,l,s,q,p,o==null?null:A.xC(r.a(o)))},
dM:function dM(a,b){this.a=a
this.b=b},
rC:function rC(a){this.a=a},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(){},
pe:function pe(a){this.a=a},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xz(a){return new A.p_(a,A.p(t.S,t.g),A.a2(t.N),A.e([],t.t))},
BB(a,b){var s,r,q,p,o=A.xz(a)
o.e=A.c(b.h(0,"nextOrdinal"))
o.f=A.c(b.h(0,"locksRemaining"))
s=t.j
o.c.K(0,J.Ao(s.a(b.h(0,"tags")),t.N))
for(s=J.R(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Ba(r.a(s.gn()))
q.k(0,p.a,p)}return o},
p_:function p_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
p6:function p6(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c){this.c=a
this.a=b
this.b=c},
n_:function n_(){},
n0:function n0(){},
f3:function f3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
n1:function n1(){},
pb:function pb(){},
pa:function pa(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
pO:function pO(){},
pN:function pN(a,b,c){this.b=a
this.c=b
this.d=c},
pP:function pP(){},
vX(a){if(!isFinite(0))A.j(A.an(0,"interpolation",null))
return new A.qe(a)},
hO:function hO(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
qe:function qe(a){this.a=a},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
xP(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hx(c,A.H(c).c)
r=A.J(r,A.q(r).c)
B.a.X(r)
s=t.N
r=A.aj(r,s)
r=new A.qc(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b1(l,s,t.X))
r.ki(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
qd(a,b,c,d,e){var s=A.m1("RENDERER_SHA"),r=A.m1("GAME_SHA"),q=A.m1("DART_SDK_VERSION")
return A.xP(a,"c3096a567303-b95463f82d41-dirty",b,c,d,r,A.m1("LOCKFILE_SHA256"),e,A.m1("PROJECT_VERSION"),s,q,null)},
m1(a){var s=B.iN.h(0,a)
return s.length===0?null:s},
qc:function qc(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
xi(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.j(A.a7("saved day-loop resources must not be negative",null,null))
return new A.nw(c,g,b,a,e,d===!0,s)},
AU(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.eU)
s=A.e([],t.El)
for(r=J.R(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.f6)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aL(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.eQ)
f=A.cu(new A.M(B.cy,q.a(new A.nx(h)),p),o)
e=A.cu(new A.M(B.cE,n.a(new A.ny(g)),m),l)
if(f==null||e==null)throw A.d(B.fx)
B.a.l(s,new A.fv(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aL(d)||!A.aL(c)||!A.aL(b)||!A.bR(a))throw A.d(B.fe)
return A.xi(c,d,a1,a,b,s,a3)},
bN:function bN(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
nw:function nw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nx:function nx(a){this.a=a},
ny:function ny(a){this.a=a},
jW:function jW(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
rH:function rH(a,b){this.b=a
this.c=b},
eH:function eH(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
oP:function oP(a){this.c=a},
oT:function oT(a,b){this.a=a
this.b=b},
oU:function oU(){},
xR(){var s=A.wr(B.o),r=A.wr(B.o),q=new A.qk(B.C,s,r)
if(!isFinite(0))A.j(B.eF)
if(!B.a.a4(r,B.a.gap(s)))A.j(B.ff)
if(q.a===B.C&&q.b!==0&&!q.e)A.j(B.eJ)
return q},
wr(a){var s,r,q,p=A.e([],t.s),o=A.a2(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.fu)
B.a.l(p,q)}return p},
cf:function cf(a,b){this.a=a
this.b=b},
qj:function qj(){},
cR:function cR(){},
qk:function qk(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jI:function jI(a,b){this.a=a
this.b=6
this.c=b},
E4(a){var s,r=A.e([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uh(a,s).$0())
return r},
zU(a){var s=B.d.L(a,0,1)
if(s<=0.5)return A.z3(4491468,16777215,s*2)
return A.z3(16777215,16759637,(s-0.5)*2)},
zV(a){var s=B.d.L(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).gaa()},
z3(a,b,c){var s,r=new A.up(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.d4()
s=r.$1(8)
if(typeof s!=="number")return s.d4()
r=r.$1(0)
if(typeof r!=="number")return A.j2(r)
return(q<<16|s<<8|r)>>>0},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD:function rD(a){this.b=a},
uh:function uh(a,b){this.a=a
this.b=b},
up:function up(a,b,c){this.a=a
this.b=b
this.c=c},
pu(a,b,c){var s,r=t.N,q=A.p(r,r)
if(a!=null)q.K(0,a)
s=A.p(r,r)
if(b!=null)s.K(0,b)
r=A.p(r,t.Fr)
if(c!=null)r.K(0,c)
return new A.pt(q,s,r)},
BI(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aL(s)||s!==1)return l
r=A.xI(a.h(0,"choices"))
q=A.xI(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.p(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gI(),k=k.gt(k);k.m();){n=k.gn()
m=A.Bg(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pu(r,q,p)},
xI(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.p(s,s)
for(s=a.gI(),s=s.gt(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.x(q.b))}return r},
Bg(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aL(r)||r<1||!A.aL(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cG(s,r,q,p)},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(){},
pw:function pw(){},
px:function px(){},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx(a){var s,r,q=A.p(t.N,t.z)
for(s=a.gI(),s=s.gt(s);s.m();){r=s.gn()
q.k(0,B.c.p(r.a),r.b)}return q},
r5:function r5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
r6:function r6(){},
r7:function r7(){},
eF:function eF(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b){this.a=a
this.b=b},
l_:function l_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r8:function r8(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
r9:function r9(){},
ra:function ra(){},
j6:function j6(a){this.a=a},
vD:function vD(a,b,c){this.b=a
this.e=b
this.f=c},
Av(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.eH)
s=new A.ml()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wg(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dA(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aR(B.b5,new A.mj(a),new A.mk()))},
cE:function cE(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
ml:function ml(){},
mj:function mj(a){this.a=a},
mk:function mk(){},
mw:function mw(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
my:function my(a){this.a=a},
mx:function mx(a,b){this.a=a
this.b=b},
AB(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fb)
s=new A.mJ()
return new A.dB(s.$1$2(B.b3,a.h(0,"output"),t.xs),s.$1$2(B.aY,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.aX,a.h(0,"reverb"),t.gc),s.$1$2(B.aW,a.h(0,"ducking"),t.ul))},
cp:function cp(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mJ:function mJ(){},
mK:function mK(a,b){this.a=a
this.b=b},
mL:function mL(a){this.a=a},
n3:function n3(a){this.a=a
this.b=null},
n7(a,b,c){var s
b.C()
if(c<1||c>6)throw A.d(A.an(c,"level","must be between 1 and 6"))
s=A.C(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.n5(s,b)
return s},
dF(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.C(a,"button","brush-button brush-state-"+s.b,r)
A.n5(q,b)
q.type="button"
q.disabled=s===B.am
q.addEventListener("click",A.Z(new A.n6(c)))
return q},
AH(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.am
A.n5(s,b)
s.addEventListener("change",A.Z(new A.na(d,s)))
return s},
AG(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.w(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.am
A.n5(s,b)
s.addEventListener("input",A.Z(new A.n9(s,e)))
return s},
vF(a,b){var s=B.b.jU(A.x(a.className),A.xO("\\s+")),r=A.H(s),q=r.i("M<1>"),p=A.J(new A.M(s,r.i("n(1)").a(new A.n8()),q),q.i("o.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a6(p," ")
a.setAttribute("data-brush-state",s)},
n5(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gm9())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.am)a.setAttribute("aria-disabled","true")},
n6:function n6(a){this.a=a},
na:function na(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
n8:function n8(){},
dD:function dD(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xg(a){var s=!1
if(a.length!==0)if(!B.d9.q(0,a))s=B.kw.q(0,a)||B.kn.q(0,a)||B.kv.q(0,a)||!B.b.W(a,"Mouse")
return s},
DO(a){var s,r,q,p,o=t.N,n=A.p(o,t.a)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Er(a){var s,r,q=A.p(t.N,t.a),p=a==null?null:new A.I(a,A.q(a).i("I<1,2>"))
p=J.R(p==null?A.e([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
fb(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fk(B.iK,s,r)
if(b!=null)q.K(0,b)
q.K(0,A.Er(a))
s=new A.fa(g,d,h,e,f,c,A.b1(A.DO(q),s,r))
s.C()
return s},
AR(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.c5)
s=a.h(0,"version")
r=J.e9(s)
if(!r.a_(s,1)&&!r.a_(s,2))throw A.d(B.c5)
q=A.p(t.N,t.a)
for(j=j.a(a.h(0,k)).gI(),j=j.gt(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.f1)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.Ap(m,new A.nm())){o=A.e([],r)
for(l=J.R(m);l.m();)o.push(A.x(l.gn()))
q.k(0,n,o)}else throw A.d(B.eL)}j=A.aA(a.h(0,"horizontalSensitivity"))
r=A.aA(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.fb(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
wi(a){var s,r,q,p=t.N,o=A.p(p,t.a)
for(s=a.gI(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
wA(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
wL(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fa:function fa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
no:function no(){},
nn:function nn(a){this.a=a},
np:function np(){},
nq:function nq(){},
nr:function nr(){},
nm:function nm(){},
dC:function dC(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.c=b},
jo:function jo(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
AQ(a){var s=t.N,r=t.m
r=new A.hd(A.fb(null,null,!1,1,!1,!1,2,1),A.p(s,r),A.p(s,r),A.p(s,r),a,A.a(a.createElement("div")))
r.aO(a)
r.k9(a)
return r},
hd:function hd(a,b,c,d,e,f){var _=this
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
nk:function nk(a,b){this.a=a
this.b=b},
nl:function nl(a){this.a=a},
nj:function nj(a,b){this.a=a
this.b=b},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(a,b){this.a=a
this.b=b},
AS(a){var s=new A.ns(a,A.a(a.createElement("div")))
s.aO(a)
s.ka(a)
return s},
ns:function ns(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nt:function nt(a){this.a=a},
AY(a){var s=t.W,r=A.e([],s)
s=A.e([],s)
s=new A.nA(A.C(a,"div","door",null),a,r,s)
s.kc(a)
return s},
nA:function nA(a,b,c,d){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=$
_.w=c
_.x=d
_.at=_.as=_.Q=_.z=_.y=null
_.ax=!1},
nB:function nB(a,b){this.a=a
this.b=b},
nC:function nC(a){this.a=a},
nD:function nD(a,b){this.a=a
this.b=b},
nF:function nF(a,b){this.a=a
this.b=b},
nE:function nE(a,b){this.a=a
this.b=b},
B7(a){var s=new A.nI(a,A.a(a.createElement("div")))
s.aO(a)
s.kd(a)
return s},
nI:function nI(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nJ:function nJ(a){this.a=a},
Bj(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.o9(a.b===B.cc,a.c===B.cg,s,a.e===B.cd,a.f===B.ca,a.r===B.ci,a.w,a.x)},
o9:function o9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vH(a,b,c,d,e,f,g,h){return new A.fh(d,f,h,e,a,g,c,b)},
Bk(a){var s,r,q,p,o,n,m,l
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fj)
s=new A.oa(a)
r=a.h(0,"contextualReminders")
if(!A.bR(r))throw A.d(B.fv)
q=s.$1$2("interactionMode",B.b4,t.bK)
p=s.$1$2("promptDensity",B.b7,t.dn)
o=s.$1$2("textPacing",B.b6,t.j_)
n=s.$1$2("journalLayout",B.aZ,t.gm)
m=s.$1$2("confirmations",B.aV,t.aJ)
l=s.$1$2("saveFeedback",B.b_,t.mx)
return A.vH(m,r,s.$1$2("focusLossBehavior",B.ax,t.x),q,n,p,l,o)},
dd:function dd(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
oa:function oa(a){this.a=a},
ob:function ob(a,b){this.a=a
this.b=b},
oc:function oc(a){this.a=a},
xo(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fa)
s=new A.dL(1,B.a.aR(B.cz,new A.oo(a),new A.op()),A.x(a.h(0,"renderScale")),A.U(a.h(0,"dynamicResolution")),A.x(a.h(0,"frameTarget")),A.x(a.h(0,"antialiasing")),A.x(a.h(0,"textureQuality")))
s.C()
return s},
jP(a,b){var s=b==null?B.aT:b
return new A.oq(s,a==null?B.aT:a)},
zM(a,b){var s,r,q
a.C()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dL(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dL("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hq(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cr&&b.a<2){q=q.hr(B.aS)
B.a.l(s,"High preset was reduced to Standard")}return new A.oj(q,A.aj(s,t.N))},
cq:function cq(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oo:function oo(a){this.a=a},
op:function op(){},
oq:function oq(a,b){this.a=a
this.b=b},
oi:function oi(a,b){this.a=a
this.b=b},
oj:function oj(a,b){this.a=a
this.b=b},
Bm(a){var s=new A.ho(A.p(t.N,t.m),B.aT,a,A.a(a.createElement("div")))
s.aO(a)
s.ke(a)
return s},
ho:function ho(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
om:function om(a){this.a=a},
on:function on(a){this.a=a},
ol:function ol(a,b,c){this.a=a
this.b=b
this.c=c},
ok:function ok(a){this.a=a},
Bn(a){var s=new A.or(a,A.a(a.createElement("div")))
s.aO(a)
s.kf(a)
return s},
or:function or(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
os:function os(a){this.a=a},
p0:function p0(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
p1:function p1(a){this.a=a},
p2:function p2(a){this.a=a},
p3:function p3(a,b,c){this.a=a
this.b=b
this.c=c},
p4:function p4(){},
p5:function p5(){},
C(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
yR(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.W)
for(s=t.m,r=0;r<A.c(p.length);++r){q=A.k(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hH:function hH(){},
be:function be(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(){},
pJ:function pJ(){},
bW:function bW(a,b,c){this.a=a
this.c=b
this.d=c},
pH:function pH(a){this.a=a},
pK:function pK(a){this.a=a},
cz:function cz(a,b){this.a=a
this.b=b},
pL:function pL(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pM:function pM(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
pW:function pW(a){this.a=a
this.b=null},
C6(a){var s=new A.qs(a,A.a(a.createElement("div")))
s.aO(a)
s.kk(a)
return s},
qs:function qs(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qt:function qt(a,b){this.a=a
this.b=b},
qu:function qu(a){this.a=a},
ky(a,b){var s=t.N,r=t.m
r=new A.fu(b,A.p(s,r),A.p(s,r),A.p(s,t.rf),A.p(s,r),$.vx(),B.aj,A.p(s,r),A.p(s,r),B.aI,A.p(s,r),a,A.a(a.createElement("div")))
r.aO(a)
r.kl(a,b)
return r},
fu:function fu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
qQ:function qQ(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a,b){this.a=a
this.b=b},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
qK:function qK(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
qJ:function qJ(a){this.a=a},
qM:function qM(a){this.a=a},
qv:function qv(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(a,b){this.a=a
this.b=b},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a){this.a=a},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
qE:function qE(a){this.a=a},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a){this.a=a},
qx:function qx(a){this.a=a},
qy:function qy(a){this.a=a},
qz:function qz(a){this.a=a},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qW(a){return B.a.aR(B.B,new A.qX(a),new A.qY(a))},
C7(){var s,r,q=A.p(t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
q.k(0,r.a,r.e)}return q},
dn(a,b){var s=t.z
s=A.fk(A.C7(),s,s)
if(a!=null)s.K(0,a)
s=new A.qV(b,A.b1(s,t.N,t.K))
s.km(a,b)
return s},
xU(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fs)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.eT)
return A.dn(A.aM(s,t.N,t.K),A.c(a.h(0,"version")))},
bt:function bt(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
aV:function aV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
qV:function qV(a,b){this.a=a
this.b=b},
w_(a,b){var s=b==null?A.dn(null,1):b
return new A.qZ(s,a==null?A.dn(null,1):a)},
C8(a,b){var s,r,q,p,o,n,m,l=A.p(t.N,t.K)
for(q=0;q<10;++q){s=B.B[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fp(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cW(r)
J.bI(l,s.a,r)}catch(n){if(!(A.ag(n) instanceof A.F))throw n}}m=A.dn(l,1)
return A.w_(m,m)},
qZ:function qZ(a,b){this.a=a
this.b=b},
C9(a){var s=new A.r2(a,A.a(a.createElement("div")))
s.aO(a)
s.kn(a)
return s},
r2:function r2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
Ay(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.Fg)
for(s=a.d,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gI(),n=n.gt(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cn(p+m+":"+k,m,l.a,l.b,j))}}B.a.S(i,new A.mu())
return new A.mt(A.aj(i,t.bC),A.a2(t.N))},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mt:function mt(a,b){this.a=a
this.b=b},
mv:function mv(){},
mu:function mu(){},
Cp(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.lN
s=t.L
r=A.p(s,t.q1)
q=A.q(a).i("ae<1>")
p=A.J(new A.ae(a,q),q.i("o.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gI(),j=j.gt(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b5(new A.bj(B.lv,k+" has an out-of-range authored day "+h+"."))
g=A.Co(k,h,i.b,m)
if(g instanceof A.b5)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bO(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.p(a,q)
for(o=a0.ax,o=new A.ah(o,o.r,o.e,A.q(o).i("ah<2>"));o.m();){n=o.d
J.h5(e.cb(n.b,new A.rw()),n)}o=A.b1(a0.at,a,t.sy)
q=A.p(a,q)
for(n=new A.I(e,e.$ti.i("I<1,2>")).gt(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.at(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.kY(new A.kX(r,A.a2(a),A.a2(s),o,q,A.e([],t.Dc),B.O,A.pu(b,b,b)))},
Co(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.p(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cx[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gI(),k=k.gt(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.W(h,m))continue
g=A.fq(B.b.bf(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b5(new A.bj(B.lw,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cD
B.a.l(l,new A.c0(g,i.b,f))}if(l.length===0)continue
B.a.S(l,new A.rt())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b5(new A.bj(B.dt,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b5(new A.bj(B.dt,a+" day "+s+" has no authored tiers."))
return new A.lt(c)},
kX:function kX(a,b,c,d,e,f,g,h){var _=this
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
rz:function rz(a){this.a=a},
ry:function ry(a){this.a=a},
rA:function rA(a){this.a=a},
ru:function ru(a){this.a=a},
rv:function rv(){},
rx:function rx(a){this.a=a},
rw:function rw(){},
rs:function rs(a){this.a=a},
rr:function rr(a){this.a=a},
rt:function rt(){},
kY:function kY(a){this.a=a},
lt:function lt(a){this.a=a},
Fw(a){var s,r,q,p=A.a2(t.N)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gaA(),q=q.gt(q);q.m();)if(q.gn().gZ().M(0,new A.uP())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.X(s)
return s},
Fv(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.at(b,!0,s)
B.a.X(r)
q=new A.fC()
q.d8((a^913741)>>>0)
p=q.aK(4)
if(!(p>=0&&p<4))return A.f(B.cw,p)
o=B.cw[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.at(r,!0,s)
B.a.d5(m,q)
s=A.i_(m,0,A.e8(n,"count",t.S),A.H(m).c).bN(0)
B.a.X(s)
return s},
uP:function uP(){},
y5(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aL(r)||!A.aL(q)||!A.aL(p)||r<1||q<0||q>23||p<0)return null
return new A.bO(s,r,q,p)},
Cn(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a2(t.N)
for(s=t.j,q=J.R(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a2(t.L)
for(s=J.R(s.a(a.h(0,j)));s.m();){n=A.y5(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Ax(m)
if(!s&&l==null)return i
return new A.kZ(r,o,l)},
Ax(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.y5(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aL(p))if(!(p<0))if(A.bR(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.cu(new A.M(B.cx,t.qR.a(new A.mq(r)),t.cE),t.hF)
j=A.cu(new A.M(B.iH,t.da.a(new A.mr(q)),t.g2),t.gM)
l=o==null
i=l?g:A.cu(new A.M(B.hM,t.kr.a(new A.ms(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.j7(s,k,j,p,i,n,A.aB(m))},
bK:function bK(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
dY:function dY(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cY:function cY(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function rq(){},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mq:function mq(a){this.a=a},
mr:function mr(a){this.a=a},
ms:function ms(a){this.a=a},
kW:function kW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rB:function rB(){},
b5:function b5(a){this.a=a},
kV:function kV(a){this.a=a},
kT:function kT(a){this.a=a},
i4:function i4(a,b){this.a=a
this.b=b},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
EG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.j3())return f
n=A.cW().gaG()
m=n.h(0,"captureSeed")
l=A.fq(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.fq(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fp(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aD(s,f)
if(t.f.b(q)){m=t.N
p=A.p(m,m)
for(m=q.gI(),m=m.gt(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.kp.q(0,o.b))return f
J.bI(p,A.x(o.a),A.x(o.b))}r=p}else return f}catch(g){if(A.ag(g) instanceof A.F)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.ku.q(0,i))return f
if(h!=null&&!B.ks.q(0,h))return f
return new A.rO(l,k,j,h,r)},
EH(){var s,r,q,p=A.cW().gaG().h(0,"cameraProfile")
A:{if("wide"===p){s=B.ed
break A}if("intimate"===p){s=B.ef
break A}s=B.ee
break A}r=A.cW().gaG().h(0,"cameraFov")
q=A.fp(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.f6(B.d.L(q,35,100)*3.141592653589793/180,s.b,s.c)},
iZ(a){var s=$.b7
if(s===a&&B.b.q(A.x(a.b.className),"open"))return
if(s!=null)s.a3()
$.b7=a
if(a===$.cl.j())$.h3().j1("gameplay.viewport")
else $.h3().oi(A.z8(a))
s=$.ad.j()
s.ay=!1
s.b6()
$.e4=0
a.bI()},
ww(a,b,c){var s,r,q
$.j_=!0
s=$.b7
if(s!=null)s.a3()
$.b7=a
s=$.h3()
if(s.a.a.length===0)s.j1(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dk(b,B.V,c))
q=s.a
s.a=new A.dR(r,q.b,q.c)
s.kS(b)
s=$.ad.j()
s.ay=!1
s.b6()
$.e4=0
a.bI()
$.j_=!1},
dy(a){var s,r,q,p,o,n,m,l=null
if($.j_)return
$.j_=!0
a.a3()
$.b7=null
s=$.h3().mj()
$.j_=!1
r=s.a
if(r===B.d1){$.e4=0
r=$.ad.j()
r.b6()
r.ay=!0
q=A.k(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.d0)return
r=s.c.a
r=r.length===0?l:B.a.gU(r)
p=r==null?l:r.a
A:{if(B.bc===p){r=$.cl.j()
break A}if(B.cR===p){r=$.fQ.j()
break A}r=l
break A}if(r!=null){o=s.d
$.b7=r
n=$.ad.j()
n.ay=!1
n.b6()
$.e4=0
r.bI()
m=o==null?l:A.k(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
j1(a){if($.b7===a&&B.b.q(A.x(a.b.className),"open"))a.a3()
else A.iZ(a)},
fW(a){var s
if($.j_)return
if($.b7===a)$.b7=null
if(a===$.cl.j())$.h3().cd()
else $.h3().nb(A.z8(a))
$.e4=0
s=$.ad.j()
s.b6()
s.ay=!0},
z8(a){if(a===$.cl.j())return B.cS
if(a===$.fQ.j())return B.V
if(a instanceof A.fu)return B.V
if(a instanceof A.ho)return B.V
if(a instanceof A.hd)return B.V
if(a===$.fP.j())return B.jE
if(a===$.lW.j())return B.jF
if(a===$.iN.j())return B.jG
if(a===$.lU.j())return B.V
if(a===$.iL.j())return B.jI
return B.jH},
m0(a,b){var s
a.so6(new A.tH())
a.so8(new A.tI())
a.so7(new A.tJ())
a.so2(new A.tP())
a.so5(new A.tQ())
a.soh(new A.tR())
a.soc(new A.tS())
a.sob(new A.tT())
a.sb1(b?new A.tU(a):new A.tV(a))
a.saV(b?new A.tW(a):new A.tK(a))
s=a.f
if(s===B.F)a.snV(new A.tL())
if(s===B.X)a.so3(new A.tM())
if(s===B.G){a.snU(new A.tN())
a.soa(new A.tO())}},
DL(){var s=$.fO.j()
s.seA(new A.tE())
s.sb1(new A.tF())
s.saV(new A.tG())},
Ew(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aD(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.fl)
q=A.xo(r.h(0,"requested"))
$.ui=A.jP(A.xo(r.h(0,"effective")),q)}catch(s){$.ui=A.jP(null,null)}p=$.x4().a
o=A.zM(p,A.yV())
r=o.a
$.ui=A.jP(r,p)
$.fO.j().eZ(p,r,o.b)
A.zc()},
yV(){var s,r,q,p,o=$.d1.j().gbm().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.W(p,"max-samples-"))continue
r=A.fq(B.b.bf(p,12),null)
if(r==null)r=1}return new A.oi(r,B.a.q(o,"disjoint-timer-query"))},
zc(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.ah($.x4().B(),null))}catch(s){}},
DK(){var s=$.iK.j()
s.seA(new A.tB())
s.sb1(new A.tC())
s.saV(new A.tD())},
Eu(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wn=A.AR(B.k.aD(n,null))}catch(s){$.wn=A.fb(null,null,!1,1,!1,!1,2,1)}r=$.iK.j()
q=r.w=$.eW()
r.x=new A.jo(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.d.p(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.d.p(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.dC()
$.ad.j().eW($.eW().r)
r=$.ad.j()
q=$.eW()
p=r.ch
p.a=q.f
p.eI()
r.b6()
A.za()},
za(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.ah($.eW().B(),null))}catch(s){}},
Et(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.iS=A.AB(B.k.aD(r,null))}catch(s){$.iS=B.aI}$.fM.j().jt($.iS)
A.z9()
A.wf()},
z9(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.ah($.iS.B(),null))}catch(s){}},
wf(){var s=$.bo
if(s==null)return
s.jD($.iS)},
Ev(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wq=A.Bk(B.k.aD(r,null))}catch(s){$.wq=$.vx()}$.iM.j().ju($.vz())
A.zb()
A.yE()},
zb(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.k.ah($.vz().B(),null))}catch(s){}},
yE(){var s,r="detailed",q=A.Bj($.vz()),p=A.k(A.a(v.G.document).documentElement)
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
Es(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.e3=A.Av(B.k.aD(r,null))}catch(s){$.e3=B.aj}$.eR.j().eV($.e3)
A.wx()
A.lY()},
wx(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.ah($.e3.B(),null))}catch(s){}},
lY(){var s,r,q,p,o,n,m=$.e3,l=$.uC,k=$.wJ,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.j(B.eR)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a4
$.ma=l
r=$.bP.j()
r.r=$.ma?0.5:1
q=A.k(A.a(v.G.document).documentElement)
r=q==null
p=r?null:A.U(A.a(q.classList).contains("high-contrast"))
o=r?null:A.U(A.a(q.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!r)A.U(A.a(q.classList).toggle("reduced-motion",l))
if(!r)A.U(A.a(q.classList).toggle("photosensitivity-safe",k))
if(!r)A.U(A.a(q.classList).toggle("captions-enabled",s))
if(!r)A.U(A.a(q.classList).toggle("reduced-effects",o))
if(!r)A.U(A.a(q.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(q))A.a(q.style).setProperty("font-size",A.w(j*100)+"%")
r=$.B.j()
r.setAttribute("data-accessibility-reduced-motion",""+l)
r.setAttribute("data-accessibility-photosensitivity-safe",""+k)
r.setAttribute("data-accessibility-ui-scale",A.w(j))
r.setAttribute("data-accessibility-captions",""+s)
r.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
r.setAttribute("data-accessibility-reduced-effects",""+o)
r.setAttribute("data-accessibility-focus-visible",""+p)
r.setAttribute("data-accessibility-essential-cues","true")
if($.yC){m=$.bm.j()
l=$.e3.f
m.e=new A.j6(l==null?B.a4:l)
m=$.bm.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
E7(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.um(r,q)
r.addEventListener("change",A.Z(new A.uk(s)))
q.addEventListener("change",A.Z(new A.ul(s)))},
uW(){var s=0,r=A.bD(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$uW=A.bG(function(e2,e3){if(e2===1){o.push(e3)
s=p}for(;;)switch(s){case 0:d8=v.G
d9=A.k(A.a(d8.document).getElementById("game"))
if(d9==null){s=1
break}$.B.b=d9
$.wp=A.k(A.a(d8.document).getElementById("fps"))
$.c3.b=$.Ae().ci(A.cW().gaG().h(0,"renderer"))
A.E8()
b9=$.B.j()
c0=A.c(A.a(d8.window).innerWidth)>0?A.c(A.a(d8.window).innerWidth):800
b9.width=c0
c0=$.B.j()
b9=A.c(A.a(d8.window).innerHeight)>0?A.c(A.a(d8.window).innerHeight):600
c0.height=b9
n=A.k(d9.getContext("webgl2"))
if(n==null){$.c3.b=B.bR.hu($.c3.j(),B.dG)
g=B.aL.n6($.c3.j())
g.bb()
$.d1.b=g
A.ze()
A.e5("no-webgl2")
d8=A.k(A.a(d8.document).getElementById("credits"))
if(d8!=null)d8.textContent="this browser has no webgl2."
s=1
break}try{if($.c3.j().a===B.Z){b9=t.s6
c0=t.N
c1=t.iO
c2=t.m3
c3=t.pw
c4=new A.it(n,A.c($.B.j().width),A.c($.B.j().height),A.e([],b9),A.p(c0,t.qr),A.e([],t.s3),A.p(c0,c1),A.p(c0,c2),A.p(c0,t.xp),A.p(c0,t.bE),A.p(c0,c1),A.p(c0,c2),A.e([],b9),A.p(c0,c1),A.p(c0,c2),A.p(c0,c0),A.p(t.S,c3),A.p(c0,t.qS),A.e([],t.j5),B.ic,A.p(c0,t.Aj),A.p(c0,c0),A.p(c0,c3),A.p(c0,t.vD),A.p(c0,c3),B.fD,B.jL)}else c4=new A.fA(n,A.c($.B.j().width),A.c($.B.j().height),A.cW().gaG().h(0,"render")==="legacy",$.c3.j().d,$.c3.j().e)
m=c4
$.bE=m instanceof A.it?m:null
$.m3=m instanceof A.fA?m:null
b9=B.aL.dO($.c3.j(),m)
b9.bb()
$.d1.b=b9}catch(e1){l=A.ag(e1)
k=A.cD(e1)
b9=$.c3.j()
$.c3.b=B.bR.hu(b9,B.dF)
$.m3=new A.fA(n,A.c($.B.j().width),A.c($.B.j().height),A.cW().gaG().h(0,"render")==="legacy",!0,$.c3.j().e)
b9=B.aL.dO($.c3.j(),$.m3)
b9.bb()
$.d1.b=b9
$.B.j().setAttribute("data-renderer-error",A.w(l))
if($.j3())$.B.j().setAttribute("data-renderer-error-stack",A.w(k))}A.ze()
p=4
A.e5("initializing")
$.bP.b=new A.nb(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),$.x3())
$.uC=A.U(A.a(A.a(d8.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.wJ=A.U(A.a(A.a(d8.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.ma=$.uC
b9=$.bP.j()
b9.r=$.ma?0.5:1
b9=A.a(d8.window)
c0=t.N
c1=t.s
c2=t.a
c1=A.Br(A.N(["moveForward",A.e(["KeyW"],c1),"moveBack",A.e(["KeyS"],c1),"moveLeft",A.e(["KeyA"],c1),"moveRight",A.e(["KeyD"],c1),"interact",A.e(["KeyE"],c1),"secondary",A.e(["KeyQ"],c1),"run",A.e(["ShiftLeft"],c1),"crouch",A.e(["ControlLeft"],c1),"rotate",A.e(["KeyR"],c1),"reach",A.e(["KeyF"],c1),"journal",A.e(["KeyJ"],c1),"sleep",A.e(["KeyL"],c1),"pause",A.e(["Escape"],c1)],c0,c2))
c3=A.a(b9.document)
c1=new A.jV(b9,c3,A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),new A.b(0,0,0),new A.oV(),c1)
b9.addEventListener("keydown",A.Z(c1.glo()))
b9.addEventListener("keyup",A.Z(c1.glq()))
b9.addEventListener("mousemove",A.Z(c1.glw()))
b9.addEventListener("mousedown",A.Z(c1.glu()))
b9.addEventListener("mouseup",A.Z(c1.gly()))
b9.addEventListener("wheel",A.Z(c1.glA()))
c3.addEventListener("pointerlockchange",A.Z(c1.gls()))
$.ad.b=c1
$.yy.b=new A.jT(A.e([],t.pW),t.eO)
c1=$.B.j()
b9=A.c(A.a(d8.window).innerWidth)>0?A.c(A.a(d8.window).innerWidth):800
c1.width=b9
b9=$.B.j()
c1=A.c(A.a(d8.window).innerHeight)>0?A.c(A.a(d8.window).innerHeight):600
b9.height=c1
A.e5("renderer")
if($.c3.j().a===B.bi){b9=$.m3
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.fX=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.e5("text")
b9=$.h4()
s=7
return A.am(b9.c9(),$async$uW)
case 7:j=b9.oZ()
i=A.Cp(j)
if(!(i instanceof A.kY)){h=t.bB.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aK.b=i.a
$.lT.b=A.Ay(j)
g=A.p(c0,c2)
for(c1=t.j,c6=0;c6<5;++c6){f=B.y[c6]
c2=A.x(f)
c3=b9.c
c3===$&&A.h()
c7=c3.h(0,c2)
c2=c1.b(c7)?A.at(c7,!0,c0):B.o
J.bI(g,f,c2)}e=A.Cq(g)
$.we.b=new A.n4(B.ec)
d=$.we.j().oq(new A.uX(e))
c8=$.vy()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.bW.aK(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.d.aS(c2.c)
if(c2==null)c2=10
if(b9<1)A.j(A.an(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.j(A.an(c2,"startHour","must be 0 through 23"))
if(!isFinite(480))A.j(A.an(480,"daySeconds","must be finite and > 0"))
c9=new A.jI(b9,480)
c9.b=c2
d0=A.xz(e)
g=A.xm(42,g,A.xp(42),c9,d0,A.xi(6,16,d0,null,6,B.id,c9),new A.jw(0,0,0,!1),A.pu(null,null,null))}else{g=d.a
g.toString
g=A.xn(g,e)}$.V.b=g
$.aK.j().y=$.V.j().z
g=A.aj(A.E4($.V.j().b),t.fu)
$.tu.b=new A.rD(g)
g=$.vA()
b9=d.a
g.eK(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.d1.j().b5(A.vX($.V.j().geD()))
if(d.b!=null){g=d.b
g.toString
A.fY(g)}g=$.aK.j()
b9=A.Fv($.V.j().b,A.Fw(j.b))
g.sjV(A.hx(b9,A.H(b9).c))
A.e5("house")
$.Y.b=$.V.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.Y.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.r)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a3(b,"open")||J.a3(b,"closed")){a3=J.a3(b,"open")
for(g=$.Y.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.r)(c2),++d1){a5=c2[d1]
a5.sjM(a3)}}}a6=$.x1()
if(a6!=null&&a6.length!==0)for(g=$.Y.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.x2()}}g=$.bE
if(g!=null)g.mi($.Y.j())
$.bn.b=$.V.j().d
$.Y.j()
g=new A.b(12.9375,1.65,0.825)
$.wK=$.wz=$.wE=g
a9=g.ao(0,new A.b(0,1.3499999999999999,0))
$.iO.b=new A.ji(a9,J.x5(a9,new A.b(0,1.2000000000000002,0)))
$.fN.b=new A.nL()
$.bQ.b=A.xR()
$.ax="hall"
g=d.a
b0=A.BN(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.nF($.Y.j())){g=b0.b
$.wK=$.wz=$.wE=g
$.c4=b0.c
$.e6=b0.d
$.ax=b0.a
b1=g.ao(0,new A.b(0,1.3499999999999999,0))
g=$.iO.j()
g.smk(b1)
g.b=J.x5(b1,new A.b(0,1.2000000000000002,0))
g=$.iO.j()
b9=$.Y.j()
c2=b0.e
c3=b0.f
g.oM($.ax,$.eX(),b9,c3,c2)
A.fY("restored position")}g=A.C6(A.a(d8.document))
g.snW(new A.uY())
g.sb1(new A.uZ())
g.saV(new A.v9())
$.fQ.b=g
g=A.a(d8.document)
b9=A.a(g.createElement("div"))
c2=new A.pL(g,b9)
c2.aO(g)
b9.className=A.x(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.a(b9.appendChild(A.n7(g,B.dU,1)))
A.a(b9.appendChild(A.C(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.C(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bg(g,d2,B.cT,"resume")
c2.bg(g,d2,B.cU,"settings")
c2.bg(g,d2,B.cV,"controls")
c2.bg(g,d2,B.cW,"save now")
c2.bg(g,d2,B.cX,"help")
c2.bg(g,d2,B.cY,"credits")
c2.bg(g,d2,B.cZ,"back")
A.a(b9.appendChild(d2))
c2.sod(new A.vf())
c2.sb1(new A.vg())
c2.sof(new A.vh())
c2.so_(new A.vi())
c2.soe(new A.vj())
c2.so4(new A.vk())
c2.so0(new A.vl())
c2.saV(new A.v_())
$.cl.b=c2
c2=$.V.j().e
b9=$.bn.j()
$.V.j()
$.lV.b=new A.oT(c2,b9)
b9=A.a(d8.document)
c2=$.V.j().e
g=$.bn.j()
c3=$.lV.j()
d3=A.a(b9.createElement("div"))
c3=new A.p0(c2,g,c3,b9,d3)
c3.aO(b9)
d3.setAttribute("aria-label","The Journal")
A.a(d3.appendChild(A.C(b9,"div","journal-title","The Journal")))
d4=A.C(b9,"div","journal-pages",null)
g=A.C(b9,"div","page page-left",null)
c3.y!==$&&A.K()
c3.y=g
c2=A.C(b9,"div","page page-right",null)
c3.z!==$&&A.K()
c3.z=c2
A.a(d4.appendChild(g))
A.a(d4.appendChild(c2))
A.a(d3.appendChild(d4))
A.a(d3.appendChild(c3.kA()))
d5=A.C(b9,"div","tape-roll",null)
A.a(d5.style).setProperty("width","8rem")
c2=A.C(b9,"div","tape-fill",null)
c3.as!==$&&A.K()
c3.as=c2
A.a(d5.appendChild(c2))
A.a(d3.appendChild(d5))
d6=A.C(b9,"div","consult",null)
A.a(d6.appendChild(A.C(b9,"div","consult-label","Cite an entry")))
c2=A.C(b9,"div","entry-picker",null)
c3.at!==$&&A.K()
c3.at=c2
g=A.C(b9,"div","consult-result",null)
c3.ax!==$&&A.K()
c3.ax=g
A.a(d6.appendChild(c2))
A.a(d6.appendChild(g))
A.a(d3.appendChild(d6))
d7=A.k(b9.documentElement)
if(t.m.b(d7)){A.a(d7.style).setProperty("--shake-max-deg","3deg")
A.a(d7.style).setProperty("--shake-max-px","2px")}$.fP.b=c3
$.fP.j().saV(new A.v0())
g=A.a(d8.document)
b9=A.C(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.k(g.body).appendChild(b9))
$.yz.b=new A.pW(b9)
b9=A.a(d8.document)
g=A.C(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.k(b9.body).appendChild(g))
$.yx.b=new A.n3(g)
g=A.a(d8.document)
b9=A.C(g,"div","ambient-notice",null)
c2=A.C(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.a(A.k(g.body).appendChild(b9))
A.a(A.k(g.body).appendChild(c2))
$.bm.b=new A.mw(b9,c2,B.I)
$.yC=!0
c2=A.AY(A.a(d8.document))
c2.snX(A.FL())
c2.snZ(A.FO())
c2.snY(A.FN())
c2.so9(A.FM())
$.aF.b=c2
c2=d.a
b2=A.Cn(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aK.j().eK(b2))A.EL()
g=$.lT.j()
b9=d.a
g.oN(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b3))for(g=J.R(b3);g.m();){b4=g.gn()
if(A.aL(b4))$.uE.l(0,b4)}g=A.C9(A.a(d8.document))
g.sog(new A.v1())
g.saV(new A.v2())
$.lW.b=g
g=A.Bn(A.a(d8.document))
g.saV(new A.v3())
$.iN.b=g
g=A.AS(A.a(d8.document))
g.saV(new A.v4())
$.lU.b=g
$.iP.b=A.ky(A.a(d8.document),null)
$.iQ.b=A.ky(A.a(d8.document),B.W)
$.eR.b=A.ky(A.a(d8.document),B.G)
A.m0($.iP.j(),!1)
A.m0($.iQ.j(),!0)
A.m0($.eR.j(),!0)
A.Es()
A.E7()
$.fO.b=A.Bm(A.a(d8.document))
A.DL()
A.Ew()
$.fM.b=A.ky(A.a(d8.document),B.F)
A.m0($.fM.j(),!0)
A.Et()
$.iM.b=A.ky(A.a(d8.document),B.X)
A.m0($.iM.j(),!0)
A.Ev()
$.iK.b=A.AQ(A.a(d8.document))
A.DK()
A.Eu()
g=A.B7(A.a(d8.document))
g.saV(new A.v5())
g.so1(new A.v6())
$.iL.b=g
g=d.a
b5=A.B9(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zd(b5)
b6=$.fX
if(b6!=null){A.e5("world")
g=$.Y.j()
b9=b6
c0=new A.qh(g,b9,A.p(c0,t.J))
c0.kj(g,b9)
$.fS=c0}g=B.b.q(A.x(A.a(A.a(d8.window).location).search),"shaders=live")
$.zt=g
if(g){g=$.fX
if(g!=null)g.bL()}A.zh()
A.a(d8.window).addEventListener("resize",A.Z(new A.v7()))
A.a(d8.document).addEventListener("visibilitychange",A.Z(new A.v8()))
A.a(d8.window).addEventListener("keydown",A.Z(new A.va()))
A.a(d8.window).addEventListener("keyup",A.Z(new A.vb()))
A.a(d8.window).addEventListener("keydown",A.Z(new A.vc()))
A.a(d8.window).addEventListener("click",A.Z(new A.vd()))
$.B.j().addEventListener("click",A.Z(new A.ve()))
A.fU()
A.e5("raf")
A.c(A.a(d8.window).requestAnimationFrame(A.Z(A.zL())))
p=2
s=6
break
case 4:p=3
e0=o.pop()
b7=A.ag(e0)
b8=A.cD(e0)
A.uw(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bB(q,r)
case 2:return A.bA(o.at(-1),r)}})
return A.bC($async$uW,r)},
E8(){var s=v.G
A.a(s.window).addEventListener("error",A.Z(new A.un()))
A.a(s.window).addEventListener("unhandledrejection",A.Z(new A.uo()))},
e5(a){if($.wj===a)return
$.wj=a
$.B.j().setAttribute("data-boot-phase",a)},
ze(){var s,r,q=$.d1.j().gbm(),p=$.B.j(),o=A.cW().gaG().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.k.ah(q.B(),null))
p=$.bE
s=p==null?null:p.x
if(s!=null)$.B.j().setAttribute("data-renderer-profile-fallback",s)
p=$.m3
r=p==null?null:p.y
if(r!=null)$.B.j().setAttribute("data-renderer-frame-submits",A.w(r))},
ED(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(!$.j3())return
s=$.x1()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.x2()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tu.j().er($.V.j().gab().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vy()
o=q==null?b:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.d.aL(A.zg($.ax),3))
r=$.B.j()
q=$.wj
n=$.ax
m=$.eX()
l=t.N
m=A.N(["x",m.a,"y",m.b,"z",m.c],l,t.i)
k=$.c4
j=$.e6
i=$.b7!=null||$.aF.j().ax
h=t.K
r.setAttribute("data-automation-player",B.k.ah(A.N(["schemaVersion",1,"phase",q,"roomId",n,"eye",m,"yaw",k,"pitch",j,"modal",i,"inputEnabled",$.ad.j().ay,"day",$.V.j().gab().a,"hour",$.V.j().gab().b],l,h),b))
g=A.p(l,t.X)
for(r=$.Y.j().c,q=r.length,f=0;f<r.length;r.length===q||(0,A.r)(r),++f){e=r[f]
n=e.ax
m=e.ay
k=e.z
j=n&&!m&&!k
g.k(0,e.a,A.N(["a",e.b,"b",e.c,"open",n,"locked",m,"sticks",k,"passable",j],l,h))}$.B.j().setAttribute("data-automation-portals",B.k.ah(g,b))
d=$.lZ
r=!1
if(d!=null)if($.Y.j().e.h(0,"cellar")!=null){r=$.Y.j()
q=$.ax
q=r.e.h(0,q)!=null
r=q}if(r){c=d.ce("cellar",$.ax)
$.B.j().setAttribute("data-audio-transmission-cellar",B.k.ah(A.N(["sourceRoom","cellar","listenerRoom",$.ax,"portalPath",c.a,"gainDb",c.c,"lowPassHz",c.d,"muffle01",c.e,"reachable",c.f],l,h),b))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mc(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bQ.j().a!==B.C){A.fY("save unavailable during rupture")
return}try{r=$.we.j()
q=$.V.j()
p=t.N
o=t.z
s=A.p(p,o)
n=$.ax
m=$.eX()
l=$.c4
k=$.e6
j=$.iO.j().d
j=j==null?null:j.a.a
i=$.iO.j().d
J.bI(s,"player",new A.km(n,m,l,k,j,i==null?null:i.b).B())
n=$.aK.j()
m=A.qr(n.b,p)
l=A.qr(n.c,t.L)
n=n.r
J.bI(s,"visitors",new A.kZ(m,l,n==null?null:new A.j7(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.lT.j().b
n=A.J(n,A.q(n).c)
B.a.X(n)
J.bI(s,"ambient",n)
n=A.J($.uE,A.q($.uE).c)
B.a.X(n)
J.bI(s,"unverifiables",n)
J.bI(s,"inventoryInspections",$.vA().B())
n=$.wo
if(n!=null)J.bI(s,"ending",A.N(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xr(q.c).B()
k=q.d
r.p5(A.xS(s,A.N(["houseSeed",n,"runSeed",m,"house",l,"time",A.N(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.fY(a)}catch(h){A.fY("save failed")}},
EB(){var s=A.k(A.a(v.G.document).documentElement),r=s==null?null:A.aB(s.getAttribute("data-gameplay-focus-loss")),q=A.cu(new A.M(B.ax,t.rg.a(new A.us(r)),t.vK),t.x)
switch((q==null?B.aP:q).a){case 0:$.m8=!0
s=$.bo
if(s!=null)s.eY(!0)
break
case 1:$.m8=!0
break
case 2:break}},
fY(a){var s=v.G,r=A.k(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.k(A.a(s.document).documentElement)
s=s==null?null:A.aB(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Bi(B.eq,new A.uA(r),t.H)},
uw(a,b){var s,r,q,p
A.e5("error")
s=A.w(a)
r=A.G0(s,"\n"," ")
s=$.wp
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.k(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.j3()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
yH(){var s,r
if($.wh)return
$.wh=!0
s=$.bo
r=s==null
if(!r)s.cd()
if(!r)s.f5("music")
B.a.l($.d2,"arm")},
fU(){var s=0,r=A.bD(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fU=A.bG(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.am(A.fT(),$async$fU)
case 2:o=null
q=4
s=7
return A.am(A.aY(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$fU)
case 7:n=b
i=A
s=8
return A.am(A.aY(A.a(n.json()),t.X),$async$fU)
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
if(k!=null&&typeof k==="string"){A.x(k)
l=A.k(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.lU.j().f
l===$&&A.h()
l.textContent=k}s=9
return A.am(A.o_(A.e([A.uq(o),A.uj(o)],t.iJ),t.H),$async$fU)
case 9:return A.bB(null,r)
case 1:return A.bA(p.at(-1),r)}})
return A.bC($async$fU,r)},
fT(){var s=0,r=A.bD(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fT=A.bG(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.i6[g]
q=6
s=9
return A.am(A.aY(A.a(A.a(j.window).fetch(o)),i),$async$fT)
case 9:n=a0
s=10
return A.am(A.aY(A.a(n.text()),h),$async$fT)
case 10:m=a0
l=A.AC(B.k.aD(m,null))
f=$.Y.b
if(f===$.Y)A.j(A.a9(""))
l.eP(f)
f=$.B.b
if(f===$.B)A.j(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.B.b
if(f===$.B)A.j(A.a9(""))
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
case 4:if(!c){$.B.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.am(A.m5(),$async$fT)
case 11:s=12
return A.am(A.m6(),$async$fT)
case 12:return A.bB(null,r)
case 1:return A.bA(p.at(-1),r)}})
return A.bC($async$fT,r)},
m5(){var s=0,r=A.bD(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$m5=A.bG(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.hP[c]
p=7
s=10
return A.am(A.aY(A.a(A.a(g.window).fetch(n)),f),$async$m5)
case 10:m=b1
s=11
return A.am(A.aY(A.a(m.text()),e),$async$m5)
case 11:l=b1
b=B.k.aD(l,null)
b=h.b(b)?b:A.dw("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dw("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aL(a)?a:A.dw("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dw("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.at(a,!0,d):A.dw("assets is not a list")
a4=A.H(a3)
a5=a4.i("S<1,cN>")
a3=A.J(new A.S(a3,a4.i("cN(1)").a(A.FH()),a5),a5.i("a6.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.at(a,!0,d):A.dw("placements is not a list")
a5=A.H(a4)
a6=a5.i("S<1,cs>")
a4=A.J(new A.S(a4,a5.i("cs(1)").a(A.FI()),a6),a6.i("a6.E"))
a4.$flags=1
k=new A.oy(a1,a2,a0,a3,a4)
a1=$.Y.b
if(a1===$.Y)A.j(A.a9(""))
k.eP(a1)
$.m2=k
a1=$.bE
if(a1!=null)a1.jv(k)
a1=$.B.b
if(a1===$.B)A.j(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.B.b
if(a1===$.B)A.j(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.B.b
if(a1===$.B)A.j(A.a9(""))
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
case 5:$.B.j().setAttribute("data-house-inventory","unavailable")
$.B.j().setAttribute("data-house-inventory-error",A.w(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.bB(q,r)
case 2:return A.bA(o.at(-1),r)}})
return A.bC($async$m5,r)},
m6(){var s=0,r=A.bD(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$m6=A.bG(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.m2
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.ir[a4]
p=7
s=10
return A.am(A.aY(A.a(A.a(a1.window).fetch(m)),a2),$async$m6)
case 10:l=b5
s=11
return A.am(A.aY(A.a(l.text()),e),$async$m6)
case 11:k=b5
a5=B.k.aD(k,null)
a5=a0.b(a5)?a5:A.fR("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.at(a6,!0,a3):A.fR("emitters is not a list")
a8=A.H(a7)
a9=a8.i("S<1,cM>")
a7=A.J(new A.S(a7,a8.i("cM(1)").a(A.FZ()),a9),a9.i("a6.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aL(a6)?a6:A.fR("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.fR("sourceRef is not a string")
j=new A.oE(a8,a9,a7)
a7=$.Y.b
if(a7===$.Y)A.j(A.a9(""))
j.oX(a7,b2)
$.yX=j
i=A.p(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gI(),a9=a9.gt(a9);a9.m();){g=a9.gn()
J.bI(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.Y.b
if(a7===$.Y)A.j(A.a9(""))
a8=A.Az(i)
a9=new A.mG(a7,A.b1(B.cO,e,d),a8)
a9.k8(a8,a7,B.cO)
$.lZ=a9
a7=$.bo
if(a7!=null){a7.ch=a9
a7.bA()}a7=$.B.b
if(a7===$.B)A.j(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.B.b
if(a7===$.B)A.j(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.B.b
if(a7===$.B)A.j(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.B.b
if(a7===$.B)A.j(A.a9(""))
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
case 5:$.lZ=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.w(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bB(q,r)
case 2:return A.bA(o.at(-1),r)}})
return A.bC($async$m6,r)},
wm(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.R(t.a.b(s)?s:new A.aR(s,A.H(s).i("aR<1,i>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.x(q))}},
uj(a){var s=0,r=A.bD(t.H),q,p,o,n,m,l
var $async$uj=A.bG(function(b,c){if(b===1)return A.bA(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.p(n,n)
n=a==null
A.wm(A.k(n?null:a.sfx),m,"")
A.wm(A.k(n?null:a.ir),m,"ir-")
q=A.k(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.x(p))
l=$
s=2
return A.am(A.mN(m,$.Y.j()),$async$uj)
case 2:o=l.bo=c
o.ch=$.lZ
o.bA()
A.Ex()
A.zj(o)
A.wf()
A.zk()
if($.wh){o.cd()
o.f5("music")}return A.bB(null,r)}})
return A.bC($async$uj,r)},
wG(a,b){var s
A.zw(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
EI(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
yD(a,b){var s
if(a!=="brightness")return
s=A.k(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.w(B.d.L(b,0.6,1.4))+")")},
ty(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.k(A.a(v.G.document).documentElement)
if(r!=null)A.U(A.a(r.classList).toggle(s,b))
A.lY()},
zk(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.aA($.d5().a.cf(o)),k=A.U($.d5().a.cf(n)),j=A.U($.d5().a.cf(m))
for(s=[$.iP.j(),$.iQ.j(),$.eR.j(),$.fM.j(),$.iM.j()],r=0;r<5;++r)s[r].eX(o,l)
A.yD(o,l)
for(s=[$.iP.j(),$.iQ.j(),$.eR.j(),$.fM.j(),$.iM.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.ty(n,k)
A.ty(m,j)},
wF(a,b){var s
A.zw(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
EF(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zj(a){var s,r,q,p,o,n,m,l,k,j=A.p(t.N,t.i)
for(s=0;s<5;++s){r=B.i5[s]
q=$.d5().a.b.h(0,r)
j.k(0,r,A.aA(q==null?A.j(A.m("setting missing from profile: "+r)):q))}p=A.U($.d5().a.cf("muted"))
o=A.U($.d5().a.cf("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.be(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.d2(o)
for(q=[$.iP.j(),$.iQ.j(),$.eR.j(),$.fM.j()],n=j.$ti.i("cv<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cv(j,j.r,j.e,n);m.m();){k=m.d
l.eX(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
yF(){var s=$.bo
if(s!=null)A.zj(s)
A.zk()},
Ex(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aD(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.eS)
q=A.xU(r.h(0,"requested"))
$.zr=A.w_(A.xU(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.D
o=A.p(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.EF(l))}}r=A.p(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.EI(p))}}$.zr=A.C8(o,r)
A.ut()},
ut(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.ah($.d5().B(),null))}catch(s){}},
zw(a,b){var s,r,q,p,o,n,m
switch(A.qW(a).d.a){case 0:r=A.fp(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d5()
q=s
A.qW(a).cW(q)
p=t.N
o=t.K
n=A.fk(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dn(n,1)
n=s
A.qW(a).cW(n)
o=A.fk(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dn(o,1)
A.ut()}catch(m){if(!(A.ag(m) instanceof A.F))throw m}},
uq(a){var s=0,r=A.bD(t.H),q,p,o
var $async$uq=A.bG(function(b,c){if(b===1)return A.bA(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.p(p,p)
A.wm(A.k(a==null?null:a.tex),o,"")
p=$.fX
p=p==null?null:p.aT(o)
if(p==null)p=A.vG(t.H)
q=$.bE
q=q==null?null:q.aT(o)
s=2
return A.am(A.o_(A.e([p,q==null?A.vG(t.H):q],t.iJ),t.H),$async$uq)
case 2:return A.bB(null,r)}})
return A.bC($async$uq,r)},
zh(){var s,r,q=v.G,p=A.c(A.a(q.window).innerWidth),o=A.c(A.a(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.fX
if(q!=null)q.b3(A.c($.B.j().width),A.c($.B.j().height))
$.d1.j().b3(A.c($.B.j().width),A.c($.B.j().height))
q=$.bE
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
E5(){var s,r,q=$.b7
if(q!=null){s=$.ad.j()
if(!s.CW.b9("pause",s.f)){s=$.ad.j()
s=s.CW.b9("secondary",s.f)}else s=!0
if(s){A.DN(q)
return}if($.ad.j().f.a1(0,"GamepadDpadUp")){A.z4(q,-1)
return}if($.ad.j().f.a1(0,"GamepadDpadDown")){A.z4(q,1)
return}s=$.ad.j()
if(s.CW.b9("interact",s.f)){r=A.k(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.U(q.b.contains(r)))A.vJ(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.b9("pause",s.f)){A.iZ($.cl.j())
return}if($.aF.j().ax)return
s=$.ad.j()
if(s.CW.b9("journal",s.f))A.j1($.fP.j())
else{s=$.ad.j()
if(s.CW.b9("sleep",s.f))A.j1($.lW.j())}},
DN(a){if(a===$.cl.j()){a.a3()
return}if(a===$.fQ.j()||a instanceof A.fu||a instanceof A.ho||a instanceof A.hd){A.dy(a)
return}a.a3()},
z4(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.e([],t.W)
for(s=t.m,r=0;r<A.c(l.length);++r){q=A.k(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.k(A.a(v.G.document).activeElement)
o=B.a.bF(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.c.P(o+b+m,m)}if(!(n>=0&&n<k.length))return A.f(k,n)
k[n].focus()},
EE(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
A.aA(c6)
try{s=c6
if(!$.yW){$.wv=s
$.yW=!0}d=s
c=$.wv
if(typeof d!=="number")return d.ao()
r=(d-c)/1000
$.wv=s
d=r
if(typeof d!=="number")return d.d1()
if(d<0)r=0
d=r
if(typeof d!=="number")return d.an()
if(d>0.25)r=0.25
A.F5(r)
$.ad.j().on()
d=$.B.j()
c=$.ad.j().z!=null?"standard":"none"
d.setAttribute("data-controller",c)
q=$.ad.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.E5()
if(!$.m8&&$.b7==null){d=$.e4
c=r
if(typeof c!=="number")return A.j2(c)
c=$.e4=d+c
p=0
d=t.aA
for(;;){if(c>=0.008333333333333333){b=p
if(typeof b!=="number")return b.d1()
b=b<10}else b=!1
if(!b)break
$.wz=$.eX()
if(!$.x0()){c=$.V.b
if(c===$.V)A.j(A.a9(""))
c.mc(0.008333333333333333)
c=$.Ag()
b=$.V.b
if(b===$.V)A.j(A.a9(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.j(A.a9(""))
c=c.dG(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.r)(c),++a0){o=c[a0]
B.a.l($.d2,"clock:"+o.a)}c=$.Ah()
b=$.V.b
if(b===$.V)A.j(A.a9(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.j(A.a9(""))
c=c.dG(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.r)(c),++a0){n=c[a0]
B.a.l($.d2,"service:"+n.a+":"+n.b)}}A.F8()
c=$.aK.b
if(c===$.aK)A.j(A.a9(""))
b=$.V.b
if(b===$.V)A.j(A.a9(""))
c.w=b.r.c>=0.5
c=c.f
a1=A.at(c,!1,d)
a1.$flags=3
a2=a1
B.a.G(c)
if(a2.length!==0){c=$.V.b
if(c===$.V)A.j(A.a9(""))
c.or(a2)}A.F4()
A.F7()
A.F6()
A.F3(0.008333333333333333)
c=$.fN.b
if(c===$.fN)A.j(A.a9(""))
if(c.a!=null)if((c.b-=0.008333333333333333)<=0)c.a=null
c=$.bQ.b
if(c===$.bQ)A.j(A.a9(""))
m=c.a!==B.C
b=$.Y.b
if(b===$.Y)A.j(A.a9(""))
c.md(0.008333333333333333,b)
if(m){c=$.bQ.b
if(c===$.bQ)A.j(A.a9(""))
c=c.e}else c=!1
if(c)A.zi(!0)
c=$.e4-0.008333333333333333
$.e4=c
b=p
if(typeof b!=="number")return b.a8()
p=b+1}l=B.d.L(c/0.008333333333333333,0,1)
d=$.wK=A.y4($.Ai(),$.eX(),l)
k=$.bo
if(k!=null){c=k
b=Math.sin($.c4)
a=Math.cos($.c4)
a3=A.a(c.a.listener)
a3.setPosition(d.a,d.b,d.c)
A.ai(a3,"setOrientation",[b,0,a,0,1,0],t.H)
c.jx($.ax)
for(d=$.d2.length,a0=0;a0<$.d2.length;$.d2.length===d||(0,A.r)($.d2),++a0){j=$.d2[a0]
A.DR(k,j)}B.a.G($.d2)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.d.aL(k.gnR(),3))
d=$.B.j()
c=k.cx?"true":"false"
d.setAttribute("data-audio-music-started",c)
c=$.B.j()
d=k.dx
if(d==null)d="ir-fallback"
c.setAttribute("data-audio-room-ir",d)}}i=$.fX
if(i!=null){$.bP.j().ex($.j4(),$.c4,$.e6)
d=$.b7===$.fP.j()?1:0
i.cJ=d
$.z2=r
$.d1.j().b5(A.vX($.V.j().geD()))}else if($.c3.j().a===B.Z){$.bP.j().ex($.j4(),$.c4,$.e6)
d=$.bE
if(d!=null){c=$.bP.j()
b=c.a
a4=new A.L(b.a,b.b,b.c)
b=c.b
a5=new A.L(b.a,b.b,b.c)
b=c.c
a6=d.b/d.c
a7=A.xG(a4,a5,new A.L(b.a,b.b,b.c))
c=c.f
b=c.b
a=c.c
a8=A.vQ(a6,a,c.a,b)
d.ok=new A.f7(a7,a8,a8.a7(0,a7),a4,a5,b,a,a6)}d=$.bE
if(d!=null)d.jG($.Y.j(),$.ax)
d=$.bE
if(d!=null)d.jw($.Y.j(),$.ax,$.j4(),$.bn.j().gbv(),Math.sin(3.141592653589793*$.bn.j().gbv()),$.tu.j().er($.V.j().gab().a),A.FU($.ax))
if($.z1!==$.bQ.j().a){$.z1=$.bQ.j().a
$.wB=$.wB+1}d=$.bE
if(d!=null){if($.x0())c=0
else{c=s
if(typeof c!=="number")return c.p9()
c/=1000}b=$.wB
a=A.c(Math.max(0,$.V.j().b))
if(!isFinite(c)||c<0)A.j(A.an(c,"timeSeconds",null))
if(a<0)A.j(A.y("frame clock seeds must be non-negative",null))
d.R8=c
d.RG=b
d.rx=a}d=$.bE
if(d!=null){c=$.bQ.j()
b=$.ma
a=$.tu.j().er($.V.j().gab().a)
a9=A.zg($.ax)
b0=c.a
b1=c.gf3()
b2=b1>0?B.d.L(c.b/b1,0,1):0
c=b0.a
b3=c>=3
b4=b0===B.bo
b5=b0===B.a_?0.45:1
if(c>=1)b6=b0===B.ab?b2:1
else b6=0
if(c>=2)c=b0===B.bm?b2:1
else c=0
b7=b3?320:0
b8=b3?5:8
b9=b4?1:0
c0=b4?b2:0
c1=b4?b2:0
c2=b4?b2:0
c3=b4?b2:0
c4=b4?b2:0
d.p2=new A.ko(b5,0.38,0.28,0.18,0.015,a.c,a9,b6,c,b7,b8,b9,c0,c1,c2,c3,c4,b)}$.d1.j().b5(A.vX($.V.j().geD()))
h=$.bE
if(h!=null){g=h.gnv()
if(g!=null){$.B.j().setAttribute("data-renderer-frame-stats",g)
d=$.B.j()
c=h.gnu()?"ok":"exceeded"
d.setAttribute("data-renderer-budget",c)}}}A.e5("running")
A.ED()
d=$.ad.j()
d.as=d.Q=0
c=d.c
c.a1(0,"WheelUp")
c.a1(0,"WheelDown")
d.d.G(0)
d.f.G(0)
A.c(A.a(v.G.window).requestAnimationFrame(A.Z(A.zL())))}catch(c5){f=A.ag(c5)
e=A.cD(c5)
A.uw(f,e)}},
DR(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.j5("confirm")
$.bm.j().aI("interface confirmation")
break
case"ambient-winnow":a.eB("winnow",0.28)
$.bm.j().aI("wind moving through the house")
break
case"ambient-gate":a.eB("gate",0.22)
$.bm.j().aI("distant gate")
break
case"collapse":a.j5("collapse")
$.bm.j().aI("front door shudders and collapses")
break
case"clock:tick":A.m9(a,p,"tick")
break
case"clock:chime":A.m9(a,p,"chime")
break
case"clock:cuckoo":A.m9(a,p,"cuckoo")
break
case"clock:bell":A.m9(a,p,"bell")
break
default:if(B.b.W(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.m9(a,q,s[2])}}}},
m9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.yX,g=$.m2
if(h==null||g==null)return
s=h.ng(b)
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
break A}if(q!=null)$.bm.j().aI(q)
q=$.Y.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.m("sound room missing: "+o))
m=n.d.a8(0,s.d.a7(0,p))
l=$.lZ
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.m("sound emitter "+s.a+" has no cue for "+c))
a.om(q,m,s.e,o)
return}q=$.yK
$.yK=q+1
o=A.AA(B.dy,r,r+":"+q,m,A.Dz(b,c),q,o)
q=$.ax
q=A.Aw($.j4(),q)
t.gG.a(B.b9)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.m("audio listener room missing: "+q))
j=l.je(p,q,B.b9)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.m("audio cue family missing: "+q))
k=J.aC(i)
k=k.h(i,B.c.P(A.EW(q,o.f),k.gu(i)))
o=o.e
A.aj(j.a,t.N)
a.j6(k,new A.b(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
Dz(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dH(a+":"+b),r=t.sU,s=new A.aS(s,s.gu(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.zH(p,q==null?r.a(q):q)}return p},
F5(a){var s=$.wp
if(s==null)return
s.textContent=""+B.d.aH(a>0?1/a:0)+" fps"},
F3(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7="interact"
if($.zn||$.b7!=null||$.aF.j().ax){$.mg().a=new A.b(0,0,0)
return}s=$.ad.j()
r=s.ct("moveLeft")?-1:0
if(s.ct("moveRight"))++r
q=s.ct("moveForward")?1:0
if(s.ct("moveBack"))--q
s=s.ay?s.w:new A.b(0,0,0)
p=new A.b(r,0,q).a8(0,s)
o=p.gu(0)>1?p.gaa():p
$.ad.j().d7(a8)
n=$.ad.j().Q
m=$.ad.j().as
s=$.eW()
l=s.d?-1:1
k=s.e?-1:1
j=$.c4
i=$.ad.j()
i=i.ay?i.x:0
h=$.eW()
g=h.d?-1:1
$.c4=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*a8)
g=$.e6
h=$.ad.j()
l=h.ay?h.y:0
j=$.eW()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*a8)
$.e6=i
$.e6=B.d.L(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.b(i*Math.cos($.c4)+j*Math.sin($.c4),0,j*Math.cos($.c4)-i*Math.sin($.c4)).gaa().a7(0,2)
i=$.mg()
if(!isFinite(a8)||a8<0)A.j(A.an(a8,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.j(A.an(e,"rate","must be finite and positive"))
s=Math.exp(-e*a8)
l=i.a
s=l.a8(0,f.ao(0,l).a7(0,1-s))
i.a=s
d=$.iO.j().nS($.Y.j(),$.ax,$.eX(),s.a7(0,a8))
$.wE=d.a
if($.bQ.j().a!==B.bp&&$.bQ.j().a!==B.a_)$.ax=d.b
$.bP.j().ex($.eX(),$.c4,$.e6)
s=$.bP.j()
l=$.Y.j()
c=A.FT(s,$.ax,l,$.m2)
$.yz.j().jH(c.c)
b=a6
a=a6
a0=a6
a1=a6
switch(c.a.a){case 0:b=A.wT($.bP.j(),$.Y.j(),$.ax)
break
case 1:a=A.zR($.bP.j(),$.Y.j(),$.ax)
break
case 2:a0=A.zS($.bP.j(),$.Y.j(),$.ax)
break
case 3:s=$.bP.j()
l=$.Y.j()
k=$.m2
a1=A.zQ(s,$.ax,l,k)
break
case 4:break}s=$.yx.j()
a2=$.h4().jn($.V.j().gab().a)
l=a2==null?a6:a2.h(0,"status")
s.eN(l,$.ax==="living-room")
s=$.ad.j()
l=s.CW
if(l.b9(a7,s.d)||l.b9(a7,s.f)){s=$.V.j().gab()
l=a==null
k=l?a6:a.a
j=B.a.a4($.aK.j().hk(21),$.aK.j().gnG())
if(s.a===21&&k==="front-door"&&j){s=$.bQ.j()
$.Y.j()
s.jW(B.eb,A.aj(s.c,t.N))
B.a.l($.d2,"collapse")
A.fY("the front door opens on itself")}else if(b!=null&&!b.e){if(b.d){b.d=!1
$.bm.j().aI("mantle flame extinguished")}else if($.V.j().jT(1,1)){b.d=!0
s=$.fN.j()
s.a=b
s.b=2
if(b.f!=null)b.r=!0
$.bm.j().aI("mantle flame catches")}}else if(!l&&!a.z&&!a.ay){a.ax=!a.ax
s=$.bm.j()
s.aI(a.ax?"door opens":"door closes")
s=$.fS
if(s!=null)s.cV(a.b)
s=$.bE
if(s!=null)s.eF($.Y.j(),a.a)
s=$.bo
if(s!=null)s.bA()}else if(a0!=null)if(a0.w){s=$.V.j()
if(s.f.d6(1)){a0.w=!1
$.bm.j().aI("shutter closes")}}else{a0.w=!0
$.bm.j().aI("shutter opens")}else if(a1!=null){s=$.vA()
if(!a1.x)A.j(A.m("inventory placement is not pickable: "+a1.a))
a3=a1.y
if(a3==null)a3=a1.a
s=s.a
l=a1.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a3)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a3)
s=A.b1(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
a4=A.Ez(a3)
s=$.bm.j()
s.cj("noticed",a4==null?"you inspect "+a3:a4)}}s=$.fN.j()
if(s.a!=null&&s.b>0){a5=$.fN.j().a
if(a5!=null&&A.wT($.bP.j(),$.Y.j(),$.ax)!==a5){s=$.fN.j()
s.a=null
s.b=0}}},
Ez(a){var s,r,q,p,o=$.V.j().z.b,n=A.q(o).i("I<1,2>"),m=A.J(new A.I(o,n),n.i("o.E"))
B.a.S(m,new A.ur())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.h4().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
F8(){var s,r,q,p,o,n,m,l,k,j=null
if($.aF.j().ax||$.b7!=null||$.aK.j().r!=null)return
s=$.V.j().gab()
for(r=$.aK.j().hk(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aK.b
if(m===$.aK)A.j(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aK.b
if(r===$.aK)A.j(A.a9(""))
l=r.dH(n)
if(!(l instanceof A.kV))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xw(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mg().a=new A.b(0,0,0)
r=$.aF.b
if(r===$.aF)A.j(A.a9(""))
r.f_(n.a,k)
A.zv(n)
return}},
EL(){var s,r=$.aK.j().r,q=r==null,p=q?null:r.gbD()
if(q||p==null)return
q=$.aF.j()
s=r.a
q.f_(s.a,p)
A.zv(s)
if(r.d!==B.a2)A.wy()
A.fY("restored visitor")},
zv(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().nx("stranger-17-eileen-case")
r=$.h4().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.at(q,!0,t.N):B.o
p=A.cu(r,t.N)
if(s==null||p==null)return
$.bm.j().cj("inside the case",p+" \u201c"+s.d+"\u201d")},
F4(){var s,r,q,p,o=$.V.j().gab(),n=$.lT.j().ne(o.a,o.b)
if(n.length===0)return
s=B.a.gO(n)
$.lT.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bm.j().cj(q,s.e)
p=A.Fe(r)
if(p!=null)B.a.l($.d2,"ambient-"+p)},
F7(){var s,r,q,p,o=$.V.j().gab()
if(o.b<20)return
s=o.a
if(!$.uE.l(0,s))return
r=$.h4().f
r===$&&A.h()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.at(q,!0,t.N):B.o
p=A.FR(r,$.V.j().b,s)
if(p!=null)$.bm.j().cj("noticed",p)},
zi(a){var s,r,q,p,o
if($.wo!=null)return
s=$.V.j().gab()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.q(q).i("as<2>")
o=A.B8(new A.nH(s.a,1-r,new A.M(new A.as(q,p),p.i("n(o.E)").a(new A.ux()),p.i("M<o.E>")).gu(0),$.V.j().r.d,a))
if(o==null)return
A.zd(o)
A.mc("ending recorded")},
zd(a){var s,r,q
$.wo=a
$.zn=!0
$.mg().a=new A.b(0,0,0)
A.iZ($.iL.j())
s=a.a
r=$.h4().w
r===$&&A.h()
q=r.h(0,s.b)
r=t.j.b(q)?A.at(q,!0,t.N):B.o
r=A.J(r,t.N)
B.a.K(r,A.BH($.V.j().z,s))
$.iL.j().jK(a,r)},
DG(a){var s,r,q,p
A:{if("open"===a){s=B.aq
break A}if("chain"===a){s=B.bY
break A}if("through-door"===a){s=B.bZ
break A}if("letterbox"===a){s=B.c_
break A}s=B.a9
break A}r=$.aK.j().mz(s)
if(s===B.aq){q=$.Y.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.fS
if(p!=null)p.cV(q.b)
p=$.bE
if(p!=null)p.eF($.Y.j(),q.a)
p=$.bo
if(p!=null)p.bA()}}if(!(r instanceof A.kT)||s===B.a9){$.aF.j().cP()
$.ad.j().cc($.B.j())
return}if(r.a.gbD()==null){A.wl()
$.aF.j().cP()
$.ad.j().cc($.B.j())
return}A.wy()},
DM(){var s=$.aK.j().me()
if(!(s instanceof A.i4)||s.b){A.wl()
$.aF.j().cP()
$.ad.j().cc($.B.j())
return}if(s.a.gbD()==null){A.wl()
$.aF.j().cP()
$.ad.j().cc($.B.j())
return}A.wy()},
wy(){var s,r,q,p,o,n,m,l,k=$.aK.j().r,j=k==null,i=j?null:k.gbD()
if(j||i==null)return
s=$.aK.j().gcG()
if(s==null)$.aF.j().jJ(i)
else{r=k.w
j=r==null
$.aF.j().f0(i,j)
q=$.aF.j()
p=A.e([],t.kd)
for(o=s.f,n=o.length,m=0;m<n;++m){l=o[m]
p.push(new A.aX(l.a,l.b))}q.jL(p,r)
if(!j){j=A.H(o)
l=A.cu(new A.M(o,j.i("n(1)").a(new A.uu(r)),j.i("M<1>")),t.Y)
if(l!=null)$.aF.j().f1(i,l.c)}}A.zu()},
DH(a){var s,r,q,p=$.aK.j().mA(a)
if(!(p instanceof A.kU))return
s=p.c
if(!$.V.j().mg(p.b,s))return
r=$.aF.j()
q=p.a.gbD()
if(q==null)q=""
r.f1(q,s.c)
A.zu()
A.mc("saved after visitor answer")},
zu(){var s,r,q,p,o=$.aF.j(),n=A.a(v.G.document),m=A.e([],t.wt)
for(s=$.lV.j().eT(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.aX(p.a,B.a.gU(p.c).p(0)))}o.jI(n,m)},
DI(a){var s,r,q,p=$.aK.j().mB(a,!0,$.lV.j())
if(p==null)return
s=$.lV.j().n7(p,B.hv)
r=$.aF.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.I.bE("",!0,q)},
wl(){var s,r=$.Y.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fS
if(s!=null)s.cV(r.b)
s=$.bE
if(s!=null)s.eF($.Y.j(),r.a)
s=$.bo
if(s!=null)s.bA()}},
F6(){var s,r,q,p,o,n,m,l,k
for(s=$.Y.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bQ.b
if(k===$.bQ)A.j(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
FU(a){var s,r,q,p,o,n,m,l=$.Y.j().e.h(0,a)
if(l==null||$.bn.j().gbv()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.l){n=$.bn.b
if(n===$.bn)A.j(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.bn.b
if(n===$.bn)A.j(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.x){n=$.bn.b
if(n===$.bn)A.j(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.J){o=$.bn.b
if(o===$.bn)A.j(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zg(a){var s,r=$.Y.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.b2
if(q.length===0)return 0.12
s=A.H(q)
return B.d.L(new A.M(q,s.i("n(1)").a(new A.uv()),s.i("M<1>")).gu(0)/q.length,0.12,1)},
fF:function fF(a,b){this.a=a
this.b=b},
it:function it(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.x2=null
_.xr=0},
te:function te(a){this.a=a},
tf:function tf(a){this.a=a},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
ta:function ta(){},
tb:function tb(){},
tc:function tc(){},
td:function td(){},
fA:function fA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rO:function rO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
tH:function tH(){},
tI:function tI(){},
tJ:function tJ(){},
tP:function tP(){},
tQ:function tQ(){},
tR:function tR(){},
tS:function tS(){},
tT:function tT(){},
tU:function tU(a){this.a=a},
tV:function tV(a){this.a=a},
tW:function tW(a){this.a=a},
tK:function tK(a){this.a=a},
tL:function tL(){},
tM:function tM(){},
tN:function tN(){},
tO:function tO(){},
tE:function tE(){},
tF:function tF(){},
tG:function tG(){},
tB:function tB(){},
tC:function tC(){},
tD:function tD(){},
um:function um(a,b){this.a=a
this.b=b},
uk:function uk(a){this.a=a},
ul:function ul(a){this.a=a},
uX:function uX(a){this.a=a},
uY:function uY(){},
uZ:function uZ(){},
v9:function v9(){},
vf:function vf(){},
vg:function vg(){},
vh:function vh(){},
vi:function vi(){},
vj:function vj(){},
vk:function vk(){},
vl:function vl(){},
v_:function v_(){},
v0:function v0(){},
v1:function v1(){},
v2:function v2(){},
v3:function v3(){},
v4:function v4(){},
v5:function v5(){},
v6:function v6(){},
v7:function v7(){},
v8:function v8(){},
va:function va(){},
vb:function vb(){},
vc:function vc(){},
vd:function vd(){},
ve:function ve(){},
un:function un(){},
uo:function uo(){},
us:function us(a){this.a=a},
uA:function uA(a){this.a=a},
ur:function ur(){},
ux:function ux(){},
uu:function uu(a){this.a=a},
uv:function uv(){},
xw(a,b,c,d,e,f){var s=a[b]()
return s},
vJ(a,b,c){var s=null
return c.a(A.xw(a,b,s,s,s,s))},
vq(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.an(b.gnA(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.a9()
o=q*16
n=o+16
B.q.d3(s,o,n,p.a)
if(l)B.q.d3(r,o,n,p.ez().a)}m=a.a
A.v(m,"uInstanceModels",new A.A(B.dm,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.A(B.dm,r))
A.v(m,"uUseInstances",B.dn)},
AW(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
AV(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
zI(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
vr(a,b){var s=B.d.aS(a),r=A.zI(s,b),q=A.zI(s+1,b),p=B.d.L(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
zH(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Fe(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
Ft(a){var s,r,q,p,o,n,m,l=B.k.aD(a,null),k=t.f
if(!k.b(l))throw A.d(B.fn)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.p(s,t.P)
for(o=0;o<14;++o){n=B.it[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.p(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.d(A.a7('text.json section "'+n+'" must be an object',null,null))}return p},
FR(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaM(a)
s=new A.fC()
s.d8((b^274953^c)>>>0)
r=s.aK(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.vK.prototype={}
J.jX.prototype={
a_(a,b){return a===b},
gH(a){return A.hK(a)},
p(a){return"Instance of '"+A.kq(a)+"'"},
ga2(a){return A.d3(A.ws(this))}}
J.k_.prototype={
p(a){return String(a)},
gH(a){return a?519018:218159},
ga2(a){return A.d3(t.y)},
$iaf:1,
$in:1}
J.hs.prototype={
a_(a,b){return null==b},
p(a){return"null"},
gH(a){return 0},
$iaf:1,
$iaz:1}
J.hu.prototype={$ia5:1}
J.dP.prototype={
gH(a){return 0},
ga2(a){return B.l_},
p(a){return String(a)}}
J.kl.prototype={}
J.dW.prototype={}
J.dh.prototype={
p(a){var s=a[$.zZ()]
if(s==null)s=a[$.eb()]
if(s==null)return this.jY(a)
return"JavaScript function for "+J.d6(s)},
$iel:1}
J.fi.prototype={
gH(a){return 0},
p(a){return String(a)}}
J.fj.prototype={
gH(a){return 0},
p(a){return String(a)}}
J.u.prototype={
cE(a,b){return new A.aR(a,A.H(a).i("@<1>").J(b).i("aR<1,2>"))},
l(a,b){A.H(a).c.a(b)
a.$flags&1&&A.bH(a,29)
a.push(b)},
ov(a,b){var s
a.$flags&1&&A.bH(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.xN(b,null))
return a.splice(b,1)[0]},
a1(a,b){var s
a.$flags&1&&A.bH(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
K(a,b){var s
A.H(a).i("o<1>").a(b)
a.$flags&1&&A.bH(a,"addAll",2)
if(Array.isArray(b)){this.ks(a,b)
return}for(s=J.R(b);s.m();)a.push(s.gn())},
ks(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.aq(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.bH(a,"clear","clear")
a.length=0},
ca(a,b,c){var s=A.H(a)
return new A.S(a,s.J(c).i("1(2)").a(b),s.i("@<1>").J(c).i("S<1,2>"))},
a6(a,b){var s,r=A.cO(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
br(a,b,c,d){var s,r,q
d.a(b)
A.H(a).J(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.aq(a))}return r},
aR(a,b,c){var s,r,q,p=A.H(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.aq(a))}if(c!=null)return c.$0()
throw A.d(A.ct())},
aj(a,b){return this.aR(a,b,null)},
Y(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aN(a,b,c){var s=a.length
if(b>s)throw A.d(A.aT(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aT(c,b,s,"end",null))
if(b===c)return A.e([],A.H(a))
return A.e(a.slice(b,c),A.H(a))},
gO(a){if(a.length>0)return a[0]
throw A.d(A.ct())},
gU(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.ct())},
gaM(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.ct())
throw A.d(A.xs())},
M(a,b){var s,r
A.H(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.aq(a))}return!1},
a4(a,b){var s,r
A.H(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.aq(a))}return!0},
S(a,b){var s,r,q,p,o,n=A.H(a)
n.i("l(1,1)?").a(b)
a.$flags&2&&A.bH(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Ed()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.an()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.h0(b,2))
if(p>0)this.lM(a,p)},
X(a){return this.S(a,null)},
lM(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d5(a,b){var s,r,q,p
a.$flags&2&&A.bH(a,"shuffle")
s=a.length
while(s>1){r=b.aK(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
bF(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a3(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a3(a[s],b))return!0
return!1},
gN(a){return a.length===0},
gV(a){return a.length!==0},
p(a){return A.vI(a,"[","]")},
gt(a){return new J.ec(a,a.length,A.H(a).i("ec<1>"))},
gH(a){return A.hK(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.bH(a,"set length","change the length of")
if(b<0)throw A.d(A.aT(b,0,null,"newLength",null))
if(b>a.length)A.H(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.uN(a,b))
return a[b]},
k(a,b,c){A.H(a).c.a(c)
a.$flags&2&&A.bH(a)
if(!(b>=0&&b<a.length))throw A.d(A.uN(a,b))
a[b]=c},
eQ(a,b){return new A.cB(a,b.i("cB<0>"))},
iQ(a,b){var s
A.H(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga2(a){return A.d3(A.H(a))},
$iQ:1,
$io:1,
$iD:1}
J.jY.prototype={
oV(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kq(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.oZ.prototype={}
J.ec.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iab:1}
J.er.prototype={
F(a,b){var s
A.aA(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc6(b)
if(this.gc6(a)===s)return 0
if(this.gc6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc6(a){return a===0?1/a<0:a<0},
aW(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aW(""+a+".toInt()"))},
mw(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aW(""+a+".ceil()"))},
aS(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aW(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aW(""+a+".round()"))},
oO(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
L(a,b,c){if(this.F(b,c)>0)throw A.d(A.wM(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
aL(a,b){var s
if(b>20)throw A.d(A.aT(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc6(a))return"-"+s
return s},
oT(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aT(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.j(A.aW("Unexpected toString result: "+s))
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
gH(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
P(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
k_(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h6(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.h6(a,b)},
h6(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aW("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
dE(a,b){var s
if(a>0)s=this.cB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lT(a,b){if(0>b)throw A.d(A.wM(b))
return this.cB(a,b)},
cB(a,b){return b>31?0:a>>>b},
ga2(a){return A.d3(t.o)},
$ib0:1,
$iz:1,
$ib9:1}
J.hr.prototype={
ga2(a){return A.d3(t.S)},
$iaf:1,
$il:1}
J.k0.prototype={
ga2(a){return A.d3(t.i)},
$iaf:1}
J.dO.prototype={
hj(a,b){return new A.lJ(b,a,0)},
jU(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.ht){s=b.e
s=!(s==null?b.e=b.kM():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.kT(a,b)}},
bM(a,b,c,d){var s=A.hL(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kT(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.Am(b,a),s=s.gt(s),r=0,q=1;s.m();){p=s.gn()
o=p.gf4()
n=p.gdT()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.E(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.bf(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.ac(a,b,0)},
E(a,b,c){return a.substring(b,A.hL(b,c,a.length))},
bf(a,b){return this.E(a,b,null)},
bd(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.Bz(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.BA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a7(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.e7)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oj(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a7(c,s)+a},
cQ(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bF(a,b){return this.cQ(a,b,0)},
q(a,b){return A.G_(a,b,0)},
F(a,b){var s
A.x(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gH(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga2(a){return A.d3(t.N)},
gu(a){return a.length},
$iaf:1,
$ib0:1,
$ipG:1,
$ii:1}
A.dZ.prototype={
gt(a){return new A.h9(J.R(this.gaX()),A.q(this).i("h9<1,2>"))},
gu(a){return J.c7(this.gaX())},
gN(a){return J.mi(this.gaX())},
gV(a){return J.Aq(this.gaX())},
Y(a,b){return A.q(this).y[1].a(J.mh(this.gaX(),b))},
gO(a){return A.q(this).y[1].a(J.x8(this.gaX()))},
q(a,b){return J.x7(this.gaX(),b)},
p(a){return J.d6(this.gaX())}}
A.h9.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.ef.prototype={
gaX(){return this.a}}
A.id.prototype={$iQ:1}
A.ib.prototype={
h(a,b){return this.$ti.y[1].a(J.aG(this.a,b))},
k(a,b,c){var s=this.$ti
J.bI(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.Ar(this.a,b)},
l(a,b){var s=this.$ti
J.h5(this.a,s.c.a(s.y[1].a(b)))},
S(a,b){var s
this.$ti.i("l(2,2)?").a(b)
s=b==null?null:new A.rP(this,b)
J.As(this.a,s)},
$iQ:1,
$iD:1}
A.rP.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("l(1,1)")}}
A.aR.prototype={
cE(a,b){return new A.aR(this.a,this.$ti.i("@<1>").J(b).i("aR<1,2>"))},
gaX(){return this.a}}
A.es.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dH.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.qq.prototype={}
A.Q.prototype={}
A.a6.prototype={
gt(a){var s=this
return new A.aS(s,s.gu(s),A.q(s).i("aS<a6.E>"))},
gN(a){return this.gu(this)===0},
gO(a){if(this.gu(this)===0)throw A.d(A.ct())
return this.Y(0,0)},
q(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.a3(r.Y(0,s),b))return!0
if(q!==r.gu(r))throw A.d(A.aq(r))}return!1},
a4(a,b){var s,r,q=this
A.q(q).i("n(a6.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.Y(0,r)))return!1
if(s!==q.gu(q))throw A.d(A.aq(q))}return!0},
M(a,b){var s,r,q=this
A.q(q).i("n(a6.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.Y(0,r)))return!0
if(s!==q.gu(q))throw A.d(A.aq(q))}return!1},
a6(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.Y(0,0))
if(o!==p.gu(p))throw A.d(A.aq(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.Y(0,q))
if(o!==p.gu(p))throw A.d(A.aq(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.Y(0,q))
if(o!==p.gu(p))throw A.d(A.aq(p))}return r.charCodeAt(0)==0?r:r}},
cY(a,b){return this.jX(0,A.q(this).i("n(a6.E)").a(b))},
ca(a,b,c){var s=A.q(this)
return new A.S(this,s.J(c).i("1(a6.E)").a(b),s.i("@<a6.E>").J(c).i("S<1,2>"))},
bO(a,b){var s=A.q(this).i("a6.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bN(a){return this.bO(0,!0)},
bu(a){var s,r=this,q=A.vN(A.q(r).i("a6.E"))
for(s=0;s<r.gu(r);++s)q.l(0,r.Y(0,s))
return q}}
A.hZ.prototype={
gl_(){var s=J.c7(this.a),r=this.c
if(r==null||r>s)return s
return r},
glW(){var s=J.c7(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.c7(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
Y(a,b){var s=this,r=s.glW()+b
if(b<0||r>=s.gl_())throw A.d(A.oQ(b,s.gu(0),s,"index"))
return J.mh(s.a,r)},
bO(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aC(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xu(0,n):J.xt(0,n)}r=A.cO(s,m.Y(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.Y(n,o+q))
if(m.gu(n)<l)throw A.d(A.aq(p))}return r},
bN(a){return this.bO(0,!0)}}
A.aS.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aC(q),o=p.gu(q)
if(r.b!==o)throw A.d(A.aq(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.Y(q,s);++r.c
return!0},
$iab:1}
A.cw.prototype={
gt(a){return new A.hz(J.R(this.a),this.b,A.q(this).i("hz<1,2>"))},
gu(a){return J.c7(this.a)},
gN(a){return J.mi(this.a)},
gO(a){return this.b.$1(J.x8(this.a))},
Y(a,b){return this.b.$1(J.mh(this.a,b))}}
A.db.prototype={$iQ:1}
A.hz.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.S.prototype={
gu(a){return J.c7(this.a)},
Y(a,b){return this.b.$1(J.mh(this.a,b))}}
A.M.prototype={
gt(a){return new A.T(J.R(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hi.prototype={
gt(a){return new A.hj(J.R(this.a),this.b,B.e_,this.$ti.i("hj<1,2>"))}}
A.hj.prototype={
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
A.hg.prototype={
m(){return!1},
gn(){throw A.d(A.ct())},
$iab:1}
A.cB.prototype={
gt(a){return new A.i6(J.R(this.a),this.$ti.i("i6<1>"))}}
A.i6.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.ar.prototype={
su(a,b){throw A.d(A.aW("Cannot change the length of a fixed-length list"))},
l(a,b){A.bS(a).i("ar.E").a(b)
throw A.d(A.aW("Cannot add to a fixed-length list"))}}
A.cV.prototype={
k(a,b,c){A.q(this).i("cV.E").a(c)
throw A.d(A.aW("Cannot modify an unmodifiable list"))},
su(a,b){throw A.d(A.aW("Cannot change the length of an unmodifiable list"))},
l(a,b){A.q(this).i("cV.E").a(b)
throw A.d(A.aW("Cannot add to an unmodifiable list"))},
S(a,b){A.q(this).i("l(cV.E,cV.E)?").a(b)
throw A.d(A.aW("Cannot modify an unmodifiable list"))}}
A.fy.prototype={}
A.hR.prototype={
gu(a){return J.c7(this.a)},
Y(a,b){var s=this.a,r=J.aC(s)
return r.Y(s,r.gu(s)-1-b)}}
A.iJ.prototype={}
A.aX.prototype={$r:"+(1,2)",$s:1}
A.iu.prototype={$r:"+influence,light(1,2)",$s:2}
A.ap.prototype={$r:"+(1,2,3)",$s:3}
A.iv.prototype={$r:"+(1,2,3,4)",$s:4}
A.hb.prototype={}
A.f9.prototype={
gN(a){return this.gu(this)===0},
gV(a){return this.gu(this)!==0},
p(a){return A.vO(this)},
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
A.AO()},
gI(){return new A.cj(this.nj(),A.q(this).i("cj<P<1,2>>"))},
nj(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gI(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gZ(),o=o.gt(o),n=A.q(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bH(a,b,c,d){var s=A.p(c,d)
this.ar(0,new A.ng(this,A.q(this).J(c).J(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.ng.prototype={
$2(a,b){var s=A.q(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.q(this.a).i("~(1,2)")}}
A.a4.prototype={
gu(a){return this.b.length},
gfF(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
ar(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfF()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gZ(){return new A.eM(this.gfF(),this.$ti.i("eM<1>"))},
gaA(){return new A.eM(this.b,this.$ti.i("eM<2>"))}}
A.eM.prototype={
gu(a){return this.a.length},
gN(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.eN(s,s.length,this.$ti.i("eN<1>"))}}
A.eN.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cJ.prototype={
bz(){var s=this,r=s.$map
if(r==null){r=new A.hv(s.$ti.i("hv<1,2>"))
A.zB(s.a,r)
s.$map=r}return r},
R(a){return this.bz().R(a)},
h(a,b){return this.bz().h(0,b)},
ar(a,b){this.$ti.i("~(1,2)").a(b)
this.bz().ar(0,b)},
gZ(){var s=this.bz()
return new A.ae(s,A.q(s).i("ae<1>"))},
gaA(){var s=this.bz()
return new A.as(s,A.q(s).i("as<2>"))},
gu(a){return this.bz().a}}
A.hc.prototype={
l(a,b){A.q(this).c.a(b)
A.AP()}}
A.aH.prototype={
gu(a){return this.b},
gN(a){return this.b===0},
gV(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eN(s,s.length,r.$ti.i("eN<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bu(a){return A.k5(this,this.$ti.c)}}
A.pS.prototype={
$0(){return B.d.aS(1000*this.a.now())},
$S:30}
A.hS.prototype={}
A.ri.prototype={
aU(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hG.prototype={
p(a){return"Null check operator used on a null value"}}
A.k1.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kN.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pz.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hh.prototype={}
A.ix.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icS:1}
A.dG.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.zX(r==null?"unknown":r)+"'"},
ga2(a){var s=A.wO(this)
return A.d3(s==null?A.bS(this):s)},
$iel:1,
gp8(){return this},
$C:"$1",
$R:1,
$D:null}
A.jj.prototype={$C:"$0",$R:0}
A.jk.prototype={$C:"$2",$R:2}
A.kJ.prototype={}
A.kG.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.zX(s)+"'"}}
A.f4.prototype={
a_(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.f4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.mf(this.a)^A.hK(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kq(this.a)+"'")}}
A.kx.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cb.prototype={
gu(a){return this.a},
gN(a){return this.a===0},
gV(a){return this.a!==0},
gZ(){return new A.ae(this,A.q(this).i("ae<1>"))},
gaA(){return new A.as(this,A.q(this).i("as<2>"))},
gI(){return new A.I(this,A.q(this).i("I<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nB(a)},
nB(a){var s=this.d
if(s==null)return!1
return this.c5(s[this.c4(a)],a)>=0},
K(a,b){A.q(this).i("X<1,2>").a(b).ar(0,new A.p7(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nC(b)},
nC(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c4(a)]
r=this.c5(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.f9(s==null?q.b=q.dv():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.f9(r==null?q.c=q.dv():r,b,c)}else q.nE(b,c)},
nE(a,b){var s,r,q,p,o=this,n=A.q(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dv()
r=o.c4(a)
q=s[r]
if(q==null)s[r]=[o.dw(a,b)]
else{p=o.c5(q,a)
if(p>=0)q[p].b=b
else q.push(o.dw(a,b))}},
cb(a,b){var s,r,q=this,p=A.q(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a1(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.kq(this.c,b)
else return this.nD(b)},
nD(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c4(a)
r=n[s]
q=o.c5(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f6(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d9()}},
ar(a,b){var s,r,q=this
A.q(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.aq(q))
s=s.c}},
f9(a,b,c){var s,r=A.q(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dw(b,c)
else s.b=c},
kq(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f6(s)
delete a[b]
return s.b},
d9(){this.r=this.r+1&1073741823},
dw(a,b){var s=this,r=A.q(s),q=new A.pf(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d9()
return q},
f6(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d9()},
c4(a){return J.ay(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.vO(this)},
dv(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ivM:1}
A.p7.prototype={
$2(a,b){var s=this.a,r=A.q(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.q(this.a).i("~(1,2)")}}
A.pf.prototype={}
A.ae.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cc(s,s.r,s.e,this.$ti.i("cc<1>"))},
q(a,b){return this.a.R(b)}}
A.cc.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aq(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iab:1}
A.as.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gt(a){var s=this.a
return new A.ah(s,s.r,s.e,this.$ti.i("ah<1>"))}}
A.ah.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aq(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iab:1}
A.I.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cv(s,s.r,s.e,this.$ti.i("cv<1,2>"))}}
A.cv.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aq(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iab:1}
A.hv.prototype={
c4(a){return A.Fo(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.uS.prototype={
$1(a){return this.a(a)},
$S:11}
A.uT.prototype={
$2(a,b){return this.a(a,b)},
$S:128}
A.uU.prototype={
$1(a){return this.a(A.x(a))},
$S:31}
A.c2.prototype={
ga2(a){return A.d3(this.fB())},
fB(){return A.Fy(this.$r,this.cs())},
p(a){return this.hc(!1)},
hc(a){var s,r,q,p,o,n=this.l4(),m=this.cs(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.xK(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
l4(){var s,r=this.$s
while($.ti.length<=r)B.a.l($.ti,null)
s=$.ti[r]
if(s==null){s=this.kL()
B.a.k($.ti,r,s)}return s},
kL(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.jZ(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.aj(j,k)}}
A.eQ.prototype={
cs(){return[this.a,this.b]},
a_(a,b){if(b==null)return!1
return b instanceof A.eQ&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gH(a){return A.cy(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.fD.prototype={
cs(){return[this.a,this.b,this.c]},
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.fD&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gH(a){var s=this
return A.cy(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fE.prototype={
cs(){return this.a},
a_(a,b){if(b==null)return!1
return b instanceof A.fE&&this.$s===b.$s&&A.CT(this.a,b.a)},
gH(a){return A.cy(this.$s,A.BM(this.a),B.f,B.f,B.f,B.f)}}
A.ht.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gln(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xy(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kM(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hj(a,b){return new A.l5(this,b,0)},
l3(a,b){var s,r=this.gln()
if(r==null)r=A.eS(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lq(s)},
$ipG:1,
$iC_:1}
A.lq.prototype={
gf4(){return this.b.index},
gdT(){var s=this.b
return s.index+s[0].length},
$ifm:1,
$ihM:1}
A.l5.prototype={
gt(a){return new A.l6(this.a,this.b,this.c)}}
A.l6.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.l3(l,s)
if(p!=null){m.d=p
o=p.gdT()
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
A.hY.prototype={
gdT(){return this.a+this.c.length},
$ifm:1,
gf4(){return this.a}}
A.lJ.prototype={
gt(a){return new A.lK(this.a,this.b,this.c)},
gO(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hY(r,s)
throw A.d(A.ct())}}
A.lK.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hY(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.rQ.prototype={
dB(){var s=this.b
if(s===this)throw A.d(new A.es("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a9(""))
return s}}
A.dQ.prototype={
ga2(a){return B.kT},
hl(a,b,c){A.yO(a,b,c)
return new Float32Array(a,b,c)},
$iaf:1,
$idQ:1}
A.fn.prototype={$ifn:1}
A.hE.prototype={
gmp(a){if(((a.$flags|0)&2)!==0)return new A.to(a.buffer)
else return a.buffer},
lf(a,b,c,d){var s=A.aT(b,0,c,d,null)
throw A.d(s)},
fh(a,b,c,d){if(b>>>0!==b||b>c)this.lf(a,b,c,d)}}
A.to.prototype={
hl(a,b,c){var s=A.BJ(this.a,b,c)
s.$flags=3
return s}}
A.kb.prototype={
ga2(a){return B.kU},
$iaf:1}
A.b2.prototype={
gu(a){return a.length},
h0(a,b,c,d,e){var s,r,q=a.length
this.fh(a,b,q,"start")
this.fh(a,c,q,"end")
if(b>c)throw A.d(A.aT(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.y(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibV:1}
A.hC.prototype={
h(a,b){A.dx(b,a,a.length)
return a[b]},
k(a,b,c){A.bz(c)
a.$flags&2&&A.bH(a)
A.dx(b,a,a.length)
a[b]=c},
d3(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bH(a,5)
this.h0(a,b,c,d,0)
return},
$iQ:1,
$io:1,
$iD:1}
A.hD.prototype={
k(a,b,c){A.c(c)
a.$flags&2&&A.bH(a)
A.dx(b,a,a.length)
a[b]=c},
jE(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bH(a,5)
this.h0(a,b,c,d,e)
return},
$iQ:1,
$io:1,
$iD:1}
A.hB.prototype={
ga2(a){return B.kV},
aN(a,b,c){return new Float32Array(a.subarray(b,A.DE(b,c,a.length)))},
$iaf:1,
$inR:1}
A.kc.prototype={
ga2(a){return B.kW},
$iaf:1}
A.kd.prototype={
ga2(a){return B.kX},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.ke.prototype={
ga2(a){return B.kY},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.kf.prototype={
ga2(a){return B.kZ},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.kg.prototype={
ga2(a){return B.l1},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1,
$iw2:1}
A.kh.prototype={
ga2(a){return B.l2},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.eu.prototype={
ga2(a){return B.l3},
gu(a){return a.length},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1,
$ieu:1}
A.hF.prototype={
ga2(a){return B.l4},
gu(a){return a.length},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1,
$ii1:1}
A.io.prototype={}
A.ip.prototype={}
A.iq.prototype={}
A.ir.prototype={}
A.cA.prototype={
i(a){return A.iB(v.typeUniverse,this,a)},
J(a){return A.yo(v.typeUniverse,this,a)}}
A.lj.prototype={}
A.lN.prototype={
p(a){return A.bF(this.a,null)}}
A.lh.prototype={
p(a){return this.a}}
A.fJ.prototype={$idq:1}
A.rL.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:35}
A.rK.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:101}
A.rM.prototype={
$0(){this.a.$0()},
$S:12}
A.rN.prototype={
$0(){this.a.$0()},
$S:12}
A.tl.prototype={
kp(a,b){if(self.setTimeout!=null)self.setTimeout(A.h0(new A.tm(this,b),0),a)
else throw A.d(A.aW("`setTimeout()` not found."))}}
A.tm.prototype={
$0(){this.b.$0()},
$S:0}
A.l7.prototype={
dI(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.de(a)
else{s=r.a
if(q.i("bU<1>").b(a))s.fg(a)
else s.cp(a)}},
dJ(a,b){var s=this.a
if(this.b)s.bi(new A.aZ(a,b))
else s.cl(new A.aZ(a,b))}}
A.tz.prototype={
$1(a){return this.a.$2(0,a)},
$S:17}
A.tA.prototype={
$2(a,b){this.a.$2(1,new A.hh(a,t.l.a(b)))},
$S:59}
A.uI.prototype={
$2(a,b){this.a(A.c(a),b)},
$S:68}
A.cC.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lO(a,b){var s,r,q
a=A.c(a)
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
o.d=null}q=o.lO(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yj
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
o.a=A.yj
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
pa(a){var s,r,q=this
if(a instanceof A.cj){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.R(a)
return 2}},
$iab:1}
A.cj.prototype={
gt(a){return new A.cC(this.a(),this.$ti.i("cC<1>"))}}
A.aZ.prototype={
p(a){return A.w(this.a)},
$ial:1,
gbP(){return this.b}}
A.nZ.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fn(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.cD(p)
l=r
o=q
n=A.wt(l,o)
l=new A.aZ(l,o)
m.b.bi(l)
return}m.b.fn(s)}},
$S:0}
A.o1.prototype={
$2(a,b){var s,r,q=this
A.eS(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bi(new A.aZ(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bi(new A.aZ(r,s))}},
$S:70}
A.o0.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bI(r,k.b,a)
if(J.a3(s,0)){q=A.e([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.h5(q,l)}k.c.cp(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bi(new A.aZ(q,o))}},
$S(){return this.d.i("az(0)")}}
A.lb.prototype={
dJ(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.cl(A.Ec(a,b))},
ho(a){return this.dJ(a,null)}}
A.i8.prototype={
dI(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.de(r.i("1/").a(a))}}
A.eJ.prototype={
nQ(a){if((this.c&15)!==6)return!0
return this.b.b.eL(t.bl.a(this.d),a.a,t.y,t.K)},
ny(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.oQ(q,m,a.b,o,n,t.l)
else p=l.eL(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ag(s))){if((r.c&1)!==0)throw A.d(A.y("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.y("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aw.prototype={
eM(a,b,c){var s,r,q=this.$ti
q.J(c).i("1/(2)").a(a)
s=$.ao
if(s===B.w){if(!t.nW.b(b)&&!t.h_.b(b))throw A.d(A.an(b,"onError",u.c))}else{c.i("@<0/>").J(q.c).i("1(2)").a(a)
b=A.EK(b,s)}r=new A.aw(s,c.i("aw<0>"))
this.dc(new A.eJ(r,3,a,b,q.i("@<1>").J(c).i("eJ<1,2>")))
return r},
ha(a,b,c){var s,r=this.$ti
r.J(c).i("1/(2)").a(a)
s=new A.aw($.ao,c.i("aw<0>"))
this.dc(new A.eJ(s,19,a,b,r.i("@<1>").J(c).i("eJ<1,2>")))
return s},
lR(a){this.a=this.a&1|16
this.c=a},
co(a){this.a=a.a&30|this.a&1
this.c=a.c},
dc(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dc(a)
return}r.co(s)}A.mb(null,null,r.b,t.O.a(new A.rT(r,a)))}},
fP(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fP(a)
return}m.co(n)}l.a=m.cz(a)
A.mb(null,null,m.b,t.O.a(new A.rY(l,m)))}},
bS(){var s=t.F.a(this.c)
this.c=null
return this.cz(s)},
cz(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fn(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bU<1>").b(a))A.rW(a,r,!0)
else{s=r.bS()
q.c.a(a)
r.a=8
r.c=a
A.eK(r,s)}},
cp(a){var s,r=this
r.$ti.c.a(a)
s=r.bS()
r.a=8
r.c=a
A.eK(r,s)},
kK(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bS()
q.co(a)
A.eK(q,r)},
bi(a){var s=this.bS()
this.lR(a)
A.eK(this,s)},
de(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bU<1>").b(a)){this.fg(a)
return}this.kw(a)},
kw(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mb(null,null,s.b,t.O.a(new A.rV(s,a)))},
fg(a){A.rW(this.$ti.i("bU<1>").a(a),this,!1)
return},
cl(a){this.a^=2
A.mb(null,null,this.b,t.O.a(new A.rU(this,a)))},
$ibU:1}
A.rT.prototype={
$0(){A.eK(this.a,this.b)},
$S:0}
A.rY.prototype={
$0(){A.eK(this.b,this.a.a)},
$S:0}
A.rX.prototype={
$0(){A.rW(this.a.a,this.b,!0)},
$S:0}
A.rV.prototype={
$0(){this.a.cp(this.b)},
$S:0}
A.rU.prototype={
$0(){this.a.bi(this.b)},
$S:0}
A.t0.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.oP(t.pF.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.cD(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mz(q)
n=k.a
n.c=new A.aZ(q,o)
q=n}q.b=!0
return}if(j instanceof A.aw&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aw){m=k.b.a
l=new A.aw(m.b,m.$ti)
j.eM(new A.t1(l,m),new A.t2(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.t1.prototype={
$1(a){this.a.kK(this.b)},
$S:35}
A.t2.prototype={
$2(a,b){A.eS(a)
t.l.a(b)
this.a.bi(new A.aZ(a,b))},
$S:71}
A.t_.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eL(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ag(l)
r=A.cD(l)
q=s
p=r
if(p==null)p=A.mz(q)
o=this.a
o.c=new A.aZ(q,p)
o.b=!0}},
$S:0}
A.rZ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nQ(s)&&p.a.e!=null){p.c=p.a.ny(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.cD(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mz(p)
m=l.b
m.c=new A.aZ(p,n)
p=m}p.b=!0}},
$S:0}
A.l8.prototype={}
A.lI.prototype={}
A.iI.prototype={$iyb:1}
A.lA.prototype={
oR(a){var s,r,q
t.O.a(a)
try{if(B.w===$.ao){a.$0()
return}A.zl(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.cD(q)
A.wC(A.eS(s),t.l.a(r))}},
hn(a){return new A.tj(this,t.O.a(a))},
oP(a,b){b.i("0()").a(a)
if($.ao===B.w)return a.$0()
return A.zl(null,null,this,a,b)},
eL(a,b,c,d){c.i("@<0>").J(d).i("1(2)").a(a)
d.a(b)
if($.ao===B.w)return a.$1(b)
return A.EP(null,null,this,a,b,c,d)},
oQ(a,b,c,d,e,f){d.i("@<0>").J(e).J(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ao===B.w)return a.$2(b,c)
return A.EO(null,null,this,a,b,c,d,e,f)},
ja(a,b,c,d){return b.i("@<0>").J(c).J(d).i("1(2,3)").a(a)}}
A.tj.prototype={
$0(){return this.a.oR(this.b)},
$S:0}
A.uy.prototype={
$0(){A.Bd(this.a,this.b)},
$S:0}
A.ig.prototype={
gu(a){return this.a},
gN(a){return this.a===0},
gV(a){return this.a!==0},
gZ(){return new A.eL(this,this.$ti.i("eL<1>"))},
gaA(){var s=this.$ti
return A.k6(new A.eL(this,s.i("eL<1>")),new A.t4(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kP(a)},
kP(a){var s=this.d
if(s==null)return!1
return this.bj(this.fA(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yd(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yd(q,b)
return r}else return this.l7(b)},
l7(a){var s,r,q=this.d
if(q==null)return null
s=this.fA(q,a)
r=this.bj(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fk(s==null?m.b=A.w6():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fk(r==null?m.c=A.w6():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.w6()
p=A.mf(b)&1073741823
o=q[p]
if(o==null){A.w7(q,p,[b,c]);++m.a
m.e=null}else{n=m.bj(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ar(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fl()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.aq(m))}},
fl(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cO(i.a,null,!1,t.z)
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
fk(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.w7(a,b,c)},
fA(a,b){return a[A.mf(b)&1073741823]}}
A.t4.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.ii.prototype={
bj(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eL.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.ih(s,s.fl(),this.$ti.i("ih<1>"))},
q(a,b){return this.a.R(b)}}
A.ih.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.aq(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.ci.prototype={
fK(){return new A.ci(A.q(this).i("ci<1>"))},
gt(a){var s=this,r=new A.eO(s,s.r,A.q(s).i("eO<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gN(a){return this.a===0},
gV(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.kO(b)},
kO(a){var s=this.d
if(s==null)return!1
return this.bj(s[this.dk(a)],a)>=0},
gO(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.q(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.q(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fj(s==null?q.b=A.w8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fj(r==null?q.c=A.w8():r,b)}else return q.kr(b)},
kr(a){var s,r,q,p=this
A.q(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.w8()
r=p.dk(a)
q=s[r]
if(q==null)s[r]=[p.di(a)]
else{if(p.bj(q,a)>=0)return!1
q.push(p.di(a))}return!0},
a1(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fQ(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fQ(s.c,b)
else return s.lL(b)},
lL(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dk(a)
r=n[s]
q=o.bj(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hf(p)
return!0},
l5(a,b){var s,r,q,p,o,n=this,m=A.q(n)
m.i("n(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.d(A.aq(n))
if(!0===o)n.a1(0,r)}},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.du()}},
fj(a,b){A.q(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.di(b)
return!0},
fQ(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hf(s)
delete a[b]
return!0},
du(){this.r=this.r+1&1073741823},
di(a){var s,r=this,q=new A.lp(A.q(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.du()
return q},
hf(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.du()},
dk(a){return J.ay(a)&1073741823},
bj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$ixE:1}
A.lp.prototype={}
A.eO.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aq(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.pg.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:86}
A.W.prototype={
gt(a){return new A.aS(a,this.gu(a),A.bS(a).i("aS<W.E>"))},
Y(a,b){return this.h(a,b)},
gN(a){return this.gu(a)===0},
gV(a){return!this.gN(a)},
gO(a){if(this.gu(a)===0)throw A.d(A.ct())
return this.h(a,0)},
q(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.d(A.aq(a))}return!1},
a4(a,b){var s,r
A.bS(a).i("n(W.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.d(A.aq(a))}return!0},
M(a,b){var s,r
A.bS(a).i("n(W.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.d(A.aq(a))}return!1},
a6(a,b){var s
if(this.gu(a)===0)return""
s=A.w0("",a,b)
return s.charCodeAt(0)==0?s:s},
eQ(a,b){return new A.cB(a,b.i("cB<0>"))},
ca(a,b,c){var s=A.bS(a)
return new A.S(a,s.J(c).i("1(W.E)").a(b),s.i("@<W.E>").J(c).i("S<1,2>"))},
l(a,b){var s
A.bS(a).i("W.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.k(a,s,b)},
cE(a,b){return new A.aR(a,A.bS(a).i("@<W.E>").J(b).i("aR<1,2>"))},
S(a,b){var s,r=A.bS(a)
r.i("l(W.E,W.E)?").a(b)
s=b==null?A.Fn():b
A.kC(a,0,this.gu(a)-1,s,r.i("W.E"))},
nr(a,b,c,d){var s
A.bS(a).i("W.E?").a(d)
A.hL(b,c,this.gu(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.vI(a,"[","]")},
$iQ:1,
$io:1,
$iD:1}
A.aa.prototype={
ar(a,b){var s,r,q,p=A.q(this)
p.i("~(aa.K,aa.V)").a(b)
for(s=this.gZ(),s=s.gt(s),p=p.i("aa.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gI(){return this.gZ().ca(0,new A.ph(this),A.q(this).i("P<aa.K,aa.V>"))},
bH(a,b,c,d){var s,r,q,p,o,n=A.q(this)
n.J(c).J(d).i("P<1,2>(aa.K,aa.V)").a(b)
s=A.p(c,d)
for(r=this.gZ(),r=r.gt(r),n=n.i("aa.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
ma(a){var s,r
for(s=J.R(A.q(this).i("o<P<aa.K,aa.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.gZ().q(0,a)},
gu(a){var s=this.gZ()
return s.gu(s)},
gN(a){var s=this.gZ()
return s.gN(s)},
gV(a){var s=this.gZ()
return s.gV(s)},
gaA(){return new A.ik(this,A.q(this).i("ik<aa.K,aa.V>"))},
p(a){return A.vO(this)},
$iX:1}
A.ph.prototype={
$1(a){var s=this.a,r=A.q(s)
r.i("aa.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("aa.V").a(s)
return new A.P(a,s,r.i("P<aa.K,aa.V>"))},
$S(){return A.q(this.a).i("P<aa.K,aa.V>(aa.K)")}}
A.pi.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:26}
A.ik.prototype={
gu(a){var s=this.a
return s.gu(s)},
gN(a){var s=this.a
return s.gN(s)},
gV(a){var s=this.a
return s.gV(s)},
gO(a){var s=this.a,r=s.gZ()
r=s.h(0,r.gO(r))
return r==null?this.$ti.y[1].a(r):r},
gt(a){var s=this.a,r=s.gZ()
return new A.il(r.gt(r),s,this.$ti.i("il<1,2>"))}}
A.il.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.iC.prototype={
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aW("Cannot modify unmodifiable map"))}}
A.fl.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.q(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
ar(a,b){this.a.ar(0,A.q(this).i("~(1,2)").a(b))},
gN(a){var s=this.a
return s.gN(s)},
gV(a){var s=this.a
return s.gV(s)},
gu(a){var s=this.a
return s.gu(s)},
gZ(){return this.a.gZ()},
p(a){return this.a.p(0)},
gaA(){return this.a.gaA()},
gI(){return this.a.gI()},
bH(a,b,c,d){return this.a.bH(0,A.q(this).J(c).J(d).i("P<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.dX.prototype={}
A.dm.prototype={
gN(a){return this.gu(this)===0},
gV(a){return this.gu(this)!==0},
K(a,b){var s
for(s=J.R(A.q(this).i("o<1>").a(b));s.m();)this.l(0,s.gn())},
dP(a){var s,r,q=this.bu(0)
for(s=this.gt(this);s.m();){r=s.gn()
if(a.q(0,r))q.a1(0,r)}return q},
p(a){return A.vI(this,"{","}")},
a4(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a6(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.d6(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gO(a){var s=this.gt(this)
if(!s.m())throw A.d(A.ct())
return s.gn()},
Y(a,b){var s,r
A.kt(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oQ(b,b-r,this,"index"))},
$iQ:1,
$io:1,
$idU:1}
A.iw.prototype={
dP(a){var s,r,q,p=this,o=p.fK()
for(s=A.ij(p,p.r,A.q(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bu(a){var s=this.fK()
s.K(0,this)
return s}}
A.lO.prototype={
l(a,b){this.$ti.c.a(b)
return A.D4()}}
A.fz.prototype={
q(a,b){return this.a.q(0,b)},
gu(a){return this.a.a},
gt(a){var s=this.a
return A.ij(s,s.r,A.q(s).c)},
bu(a){return this.a.bu(0)}}
A.fK.prototype={}
A.iD.prototype={}
A.ln.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lF(b):s}},
gu(a){return this.b==null?this.c.a:this.bw().length},
gN(a){return this.gu(0)===0},
gV(a){return this.gu(0)>0},
gZ(){if(this.b==null){var s=this.c
return new A.ae(s,A.q(s).i("ae<1>"))}return new A.lo(this)},
gaA(){var s,r=this
if(r.b==null){s=r.c
return new A.as(s,A.q(s).i("as<2>"))}return A.k6(r.bw(),new A.t6(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.x(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.m1().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ar(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.ar(0,b)
s=o.bw()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tX(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.aq(o))}},
bw(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
m1(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.p(t.N,t.z)
r=n.bw()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
lF(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tX(this.a[a])
return this.b[a]=s}}
A.t6.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:31}
A.lo.prototype={
gu(a){return this.a.gu(0)},
Y(a,b){var s=this.a
if(s.b==null)s=s.gZ().Y(0,b)
else{s=s.bw()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gZ()
s=s.gt(s)}else{s=s.bw()
s=new J.ec(s,s.length,A.H(s).i("ec<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tr.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:27}
A.tq.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:27}
A.jd.prototype={
nT(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hL(a4,a5,a2)
s=$.Aa()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.uR(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.uR(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bh("")
g=o}else g=o
g.a+=B.b.E(a3,p,q)
c=A.av(j)
g.a+=c
p=k
continue}}throw A.d(A.a7("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.E(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xa(a3,m,a5,n,l,r)
else{b=B.c.P(r-1,4)+1
if(b===1)throw A.d(A.a7(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bM(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xa(a3,m,a5,n,l,a)
else{b=B.c.P(a,4)
if(b===1)throw A.d(A.a7(a1,a3,a5))
if(b>1)a3=B.b.bM(a3,a5,a5,b===2?"==":"=")}return a3}}
A.n2.prototype={}
A.eg.prototype={}
A.jp.prototype={}
A.jz.prototype={}
A.hw.prototype={
p(a){var s=A.jA(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k3.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.k2.prototype={
aD(a,b){var s=A.EC(a,this.gn9().a)
return s},
ah(a,b){var s=A.CL(a,this.gnh().b,null)
return s},
gnh(){return B.hA},
gn9(){return B.hz}}
A.p9.prototype={}
A.p8.prototype={}
A.t8.prototype={
jl(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.av(92)
s.a+=o
o=A.av(117)
s.a+=o
o=A.av(100)
s.a+=o
o=p>>>8&15
o=A.av(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.av(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.av(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.av(92)
s.a+=o
switch(p){case 8:o=A.av(98)
s.a+=o
break
case 9:o=A.av(116)
s.a+=o
break
case 10:o=A.av(110)
s.a+=o
break
case 12:o=A.av(102)
s.a+=o
break
case 13:o=A.av(114)
s.a+=o
break
default:o=A.av(117)
s.a+=o
o=A.av(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.av(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.av(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.av(92)
s.a+=o
o=A.av(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.E(a,r,m)},
dg(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.k3(a,null))}B.a.l(s,a)},
cZ(a){var s,r,q,p,o=this
if(o.jk(a))return
o.dg(a)
try{s=o.b.$1(a)
if(!o.jk(s)){q=A.xA(a,null,o.gfO())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.xA(a,r,o.gfO())
throw A.d(q)}},
jk(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jl(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dg(a)
q.p6(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dg(a)
r=q.p7(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
p6(a){var s,r,q=this.c
q.a+="["
s=J.aC(a)
if(s.gV(a)){this.cZ(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.cZ(s.h(a,r))}}q.a+="]"},
p7(a){var s,r,q,p,o,n,m=this,l={}
if(a.gN(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.cO(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ar(0,new A.t9(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jl(A.x(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.cZ(r[n])}p.a+="}"
return!0}}
A.t9.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:26}
A.t7.prototype={
gfO(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.kR.prototype={}
A.rn.prototype={
mG(a){return new A.tp(this.a).kQ(t.J.a(a),0,null,!0)}}
A.tp.prototype={
kQ(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.hL(b,c,J.c7(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Dl(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Dk(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dl(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Dm(o)
l.b=0
throw A.d(A.a7(m,a,p+l.c))}return n},
dl(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.T(b+c,2)
r=q.dl(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dl(a,s,c,d)}return q.n8(a,b,c,d)},
n8(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bh(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.av(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.av(h)
e.a+=p
break
case 65:p=A.av(h)
e.a+=p;--d
break
default:p=A.av(h)
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
p=A.av(a[l])
e.a+=p}else{p=A.xW(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.av(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eh.prototype={
a_(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eh)if(this.a===b.a)s=this.b===b.b
return s},
gH(a){return A.cy(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.f7.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
p(a){var s=this,r=A.AT(A.BX(s)),q=A.jr(A.BV(s)),p=A.jr(A.BR(s)),o=A.jr(A.BS(s)),n=A.jr(A.BU(s)),m=A.jr(A.BW(s)),l=A.xh(A.BT(s)),k=s.b,j=k===0?"":A.xh(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib0:1}
A.dI.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.dI&&this.a===b.a},
gH(a){return B.c.gH(this.a)},
F(a,b){return B.c.F(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.T(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.T(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.oj(B.c.p(o%1e6),6,"0")},
$ib0:1}
A.lg.prototype={
p(a){return this.A()},
$iE:1}
A.al.prototype={
gbP(){return A.BQ(this)}}
A.j9.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jA(s)
return"Assertion failed"}}
A.dq.prototype={}
A.co.prototype={
gdq(){return"Invalid argument"+(!this.a?"(s)":"")},
gdn(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gdq()+q+o
if(!s.a)return n
return n+s.gdn()+": "+A.jA(s.geu())},
geu(){return this.b}}
A.fr.prototype={
geu(){return A.wg(this.b)},
gdq(){return"RangeError"},
gdn(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.jU.prototype={
geu(){return A.c(this.b)},
gdq(){return"RangeError"},
gdn(){if(A.c(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.i2.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kM.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fw.prototype={
p(a){return"Bad state: "+this.a}}
A.jm.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jA(s)+"."}}
A.kj.prototype={
p(a){return"Out of Memory"},
gbP(){return null},
$ial:1}
A.hW.prototype={
p(a){return"Stack Overflow"},
gbP(){return null},
$ial:1}
A.rR.prototype={
p(a){return"Exception: "+this.a}}
A.F.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.E(e,0,75)+"..."
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
k=""}return g+l+B.b.E(e,i,j)+k+"\n"+B.b.a7(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.o.prototype={
cE(a,b){return A.AI(this,A.q(this).i("o.E"),b)},
ca(a,b,c){var s=A.q(this)
return A.k6(this,s.J(c).i("1(o.E)").a(b),s.i("o.E"),c)},
cY(a,b){var s=A.q(this)
return new A.M(this,s.i("n(o.E)").a(b),s.i("M<o.E>"))},
eQ(a,b){return new A.cB(this,b.i("cB<0>"))},
q(a,b){var s
for(s=this.gt(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
br(a,b,c,d){var s,r
d.a(b)
A.q(this).J(d).i("1(1,o.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a4(a,b){var s
A.q(this).i("n(o.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a6(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.d6(q.gn())
if(!q.m())return s
r=b.gN(b)
if(r){r=s
do r+=J.d6(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.d6(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("n(o.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bO(a,b){var s=A.J(this,A.q(this).i("o.E"))
return s},
bN(a){return this.bO(0,!0)},
gu(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gN(a){return!this.gt(this).m()},
gV(a){return!this.gN(this)},
gO(a){var s=this.gt(this)
if(!s.m())throw A.d(A.ct())
return s.gn()},
gaM(a){var s,r=this.gt(this)
if(!r.m())throw A.d(A.ct())
s=r.gn()
if(r.m())throw A.d(A.xs())
return s},
aR(a,b,c){var s,r=A.q(this)
r.i("n(o.E)").a(b)
r.i("o.E()?").a(c)
for(r=this.gt(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.ct())},
aj(a,b){return this.aR(0,b,null)},
Y(a,b){var s,r
A.kt(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oQ(b,b-r,this,"index"))},
p(a){return A.Bx(this,"(",")")}}
A.P.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.az.prototype={
gH(a){return A.G.prototype.gH.call(this,0)},
p(a){return"null"}}
A.G.prototype={$iG:1,
a_(a,b){return this===b},
gH(a){return A.hK(this)},
p(a){return"Instance of '"+A.kq(this)+"'"},
ga2(a){return A.me(this)},
toString(){return this.p(this)}}
A.lL.prototype={
p(a){return""},
$icS:1}
A.r4.prototype={
gnf(){var s,r=this.b
if(r==null)r=$.pU.$0()
s=r-this.a
if($.wZ()===1e6)return s
return s*1000}}
A.bh.prototype={
gu(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCd:1}
A.rm.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.x(b)
s=B.b.bF(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wd(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.E(b,0,s)
q=B.b.bf(b,s+1)
p=this.a
a.k(0,A.wd(r,0,r.length,p,!0),A.wd(q,0,q.length,p,!0))}return a},
$S:135}
A.rl.prototype={
$2(a,b){throw A.d(A.a7("Illegal IPv6 address, "+a,this.a,b))},
$S:150}
A.iE.prototype={
gh8(){var s,r,q,p,o=this,n=o.w
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
gH(a){var s,r=this,q=r.y
if(q===$){s=B.b.gH(r.gh8())
r.y!==$&&A.zW()
r.y=s
q=s}return q},
gaG(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.y3(s==null?"":s)
r.z!==$&&A.zW()
q=r.z=new A.dX(s,t.hL)}return q},
gjh(){return this.b},
ges(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.ac(s,"v",1))return B.b.E(s,1,s.length-1)
return s},
geC(){var s=this.d
return s==null?A.yp(this.a):s},
geE(){var s=this.f
return s==null?"":s},
giM(){var s=this.r
return s==null?"":s},
giN(){return this.c!=null},
giP(){return this.f!=null},
giO(){return this.r!=null},
p(a){return this.gh8()},
a_(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.geU())if(p.c!=null===b.giN())if(p.b===b.gjh())if(p.ges()===b.ges())if(p.geC()===b.geC())if(p.e===b.gj3()){r=p.f
q=r==null
if(!q===b.giP()){if(q)r=""
if(r===b.geE()){r=p.r
q=r==null
if(!q===b.giO()){s=q?"":r
s=s===b.giM()}}}}return s},
$ikP:1,
geU(){return this.a},
gj3(){return this.e}}
A.rk.prototype={
gjg(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.cQ(s,"?",m)
q=s.length
if(r>=0){p=A.iF(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lc("data","",n,n,A.iF(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lE.prototype={
giN(){return this.c>0},
giP(){return this.f<this.r},
giO(){return this.r<this.a.length},
geU(){var s=this.w
return s==null?this.w=this.kN():s},
kN(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.E(r.a,0,q)},
gjh(){var s=this.c,r=this.b+3
return s>r?B.b.E(this.a,r,s-1):""},
ges(){var s=this.c
return s>0?B.b.E(this.a,s,this.d):""},
geC(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.zJ(B.b.E(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
gj3(){return B.b.E(this.a,this.e,this.f)},
geE(){var s=this.f,r=this.r
return s<r?B.b.E(this.a,s+1,r):""},
giM(){var s=this.r,r=this.a
return s<r.length?B.b.bf(r,s+1):""},
gaG(){if(this.f>=this.r)return B.cN
return new A.dX(A.y3(this.geE()),t.hL)},
gH(a){var s=this.x
return s==null?this.x=B.b.gH(this.a):s},
a_(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ikP:1}
A.lc.prototype={}
A.py.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vn.prototype={
$1(a){return this.a.dI(this.b.i("0/?").a(a))},
$S:17}
A.vo.prototype={
$1(a){if(a==null)return this.a.ho(new A.py(a===undefined))
return this.a.ho(a)},
$S:17}
A.uM.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.z5(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aT(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e8(!0,"isUtc",t.y)
return new A.eh(r,0,!0)}if(a instanceof RegExp)throw A.d(A.y("structured clone of RegExp",null))
if(a instanceof Promise)return A.aY(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.p(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c6(n),p=s.gt(n);p.m();)m.push(A.d4(p.gn()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.c(a.length)
for(s=J.aC(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:56}
A.lm.prototype={
aK(a){if(a<=0||a>4294967296)throw A.d(A.xM(u.w+a))
return Math.random()*a>>>0},
cT(){return Math.random()},
$ivW:1}
A.fC.prototype={
d8(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.T(a-s,k)
r=a>>>0
a=B.c.T(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.T(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.T(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.T(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.T(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.T(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.b7()
l.b7()
l.b7()
l.b7()},
b7(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.T(o-n+(q-p)+(m-r),4294967296)>>>0},
aK(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.xM(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b7()
return(p.a&s)>>>0}do{p.b7()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cT(){var s,r=this
r.b7()
s=r.a
r.b7()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ivW:1}
A.pX.prototype={
C(){var s,r=this
if(B.a.M(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.pY()))throw A.d(B.fB)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.eV)}}
A.pY.prototype={
$1(a){return A.c(a)<=0},
$S:28}
A.ex.prototype={
A(){return"QualityProfileKind."+this.b}}
A.ew.prototype={}
A.ne.prototype={}
A.nf.prototype={}
A.ko.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.N(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.I(q,A.q(q).i("I<1,2>")).gt(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.y("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.y("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.y("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.d(A.y("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.f7.prototype={}
A.jG.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gak(0)||!k.b.gak(0)||!k.r.gak(0))throw A.d(A.y("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.y("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.y("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gak(0)||r.gc7()<1e-12)A.j(A.y("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.j(A.y("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.y("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.j(A.y("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.j(A.y("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.y("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.j(A.y("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.j(A.y("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.nU.prototype={}
A.dl.prototype={
a_(a,b){if(b==null)return!1
return J.eY(b)===A.me(this)&&b instanceof A.dl&&this.a===b.a&&this.b===b.b},
gH(a){return A.cy(A.me(this),this.a,this.b,B.f,B.f,B.f)}}
A.bp.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bi.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cx.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kk.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cr.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eo.prototype={
A(){return"HandleRejection."+this.b}}
A.jQ.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.di.prototype={
gak(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a_(a,b){if(b==null)return!1
return b instanceof A.di&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gH(a){return A.cy(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.nz.prototype={}
A.kn.prototype={}
A.bv.prototype={}
A.vp.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.d.F(b.a,a.a)
return s===0?B.c.F(a.b.a,b.b.a):s},
$S:62}
A.j8.prototype={
A(){return"AlphaMode."+this.b}}
A.et.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.y("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.y("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.y("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.vS("roughness",l.z)
A.vS("metallic",0)
A.vS("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aX("uvScaleU",s),new A.aX("uvScaleV",r),new A.aX("uvOffsetU",0),new A.aX("uvOffsetV",0),new A.aX("tintR",l.c),new A.aX("tintG",l.d),new A.aX("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.y("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.d(A.y("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.y("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cX.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.bw.prototype={}
A.ro.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.T[s]
q=r.c
if(q<=0)throw A.d(A.y(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.y(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rp())
for(p=B.a.gt(B.T),q=new A.T(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.d(A.y('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rp.prototype={
$1(a){return t.qY.a(a).a===B.dr},
$S:18}
A.cd.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.c.P(s,14)!==0)throw A.d(A.y("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.m4()
r=n.c
if(r!=null){q=s/14|0
for(s=A.BF(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.y("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gak(0)&&s.b.gak(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.y("MeshData.localBounds must be a valid AABB",null))},
m4(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.M(B.T,a2.a(new A.pn()),a3)
if(!a4.gt(0).m())return
s=new A.M(B.T,a2.a(new A.po()),a3)
if(s.gu(0)!==1)throw A.d(A.y("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaM(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaM(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a4(A.e([j,h,g,f,e,d,c],p),new A.pp()))throw A.d(A.y("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.y("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.y("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.y("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.pn.prototype={
$1(a){return t.qY.a(a).a===B.dr},
$S:18}
A.po.prototype={
$1(a){return t.qY.a(a).a===B.dq},
$S:18}
A.pp.prototype={
$1(a){return isFinite(A.bz(a))},
$S:5}
A.pA.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.d(A.y("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.pC()))throw A.d(A.y("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.d(A.y("resource history does not match vhsOutput ownership",null))}}
A.pC.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.pQ.prototype={}
A.kw.prototype={
iR(a){var s=this
if(s.d)A.j(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
bn(){if(this.d)return
this.d=!0
this.a=null}}
A.fc.prototype={
A(){return"DrawMode."+this.b}}
A.jf.prototype={
A(){return"BlendMode."+this.b}}
A.bs.prototype={}
A.kH.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.y("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.y("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.y("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jl.prototype={
A(){return"ColorEncoding."+this.b}}
A.jv.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.ku.prototype={
C(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dP(B.kx)
if(o.a!==0)A.j(A.an(o,r,"contains unknown pipeline features"))
if(q.a===B.bf&&p.gV(p))A.j(A.an(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.y("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.eA.prototype={
A(){return"RendererState."+this.b}}
A.aI.prototype={}
A.nW.prototype={
j2(a){var s=this.z.h(0,a)
return s==null?B.c7:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.k8.prototype={
oF(a){return this.a.bZ(a)}}
A.pl.prototype={
$3(a,b,c){return new A.cx(A.c(a),A.c(b),A.aB(c))},
$S:78}
A.kO.prototype={}
A.pq.prototype={
bk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.y9(f,new A.jJ(e.byteLength,B.cl,B.fS))
if(f.b!==B.h)A.j(A.m(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d_(f)
A.bx(f,p)
if(f.b!==B.h)A.j(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a2(t.S)
for(n=a.a,m=0;m<6;++m){l=B.T[m]
k=A.zs(l.a)
if(!o.l(0,k))continue
j=A.DJ(n,k,l)
if(f.b!==B.h)A.j(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.c(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.y9(f,new A.jJ(A.xH(i),B.cl,B.ck))
if(f.b!==B.h)A.j(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.Cy(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kO(d,h,p,f,e.length/14|0,!1)},
eJ(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dN(B.aw,a))
this.b.bZ(a)
return s},
b2(a){var s,r,q=this.c.a1(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b2(a)},
eH(){var s,r,q,p
for(s=this.b.bG(),r=s.$ti,s=new A.cC(s.a(),r.i("cC<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bk(p.b))}},
gc8(){return this.b.bG().br(0,0,new A.ps(),t.S)}}
A.pr.prototype={
$3(a,b,c){return new A.bp(A.c(a),A.c(b),A.aB(c))},
$S:80}
A.ps.prototype={
$2(a,b){var s,r
A.c(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.xH(s)
return a+r+s},
$S:84}
A.cg.prototype={}
A.dV.prototype={
A(){return"TextureResidencyStatus."+this.b}}
A.bY.prototype={}
A.rd.prototype={
cq(a){var s=this.a,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.re(a)),r.i("M<1>")).gu(0)}}
A.re.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:87}
A.rb.prototype={
op(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.p(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.j(A.y("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.j(A.an(n,"handle","must be valid"))
if(s.R(o))throw A.d(A.y("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("as<2>")
m=A.J(new A.as(s,r),r.i("o.E"))
B.a.S(m,new A.rc())
r=t.Aj
l=A.a2(r)
k=A.p(r,t.bp)
j=A.e([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.lE(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.bY(p,i))}r=l.a
return new A.rd(A.aj(j,t.d),r)},
lE(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.h9(a,r)===s.d)return B.dj
this.b.k(0,a,!0)
return B.di}catch(q){if(A.ag(q) instanceof A.jQ){s=this.b.h(0,a)===!0?B.dl:B.dk
return s}else throw q}}}
A.rc.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.c.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:94}
A.du.prototype={}
A.kK.prototype={
aP(a){var s=this.a,r=A.w3(s,B.fV)
A.w4(s,r,0,a)
return r},
oW(a,b){var s,r,q,p=this,o=p.b,n=o.bZ(a),m=A.J(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.jf(a,new A.du(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.w3(p.a,s)
o.k(0,r,q)}A.w4(p.a,q,0,b)},
h9(a,b){var s
this.b.bZ(a)
s=this.c.h(0,a.a)
return s==null?b:s},
oB(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.h9(a,s)},
oJ(a){var s=this.e
s===$&&A.h()
return s},
oL(a){var s=this.f
s===$&&A.h()
return s},
oD(a){var s=this.r
s===$&&A.h()
return s},
oH(a){var s=this.w
s===$&&A.h()
return s},
bn(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.G(0)
s=n.d
s===$&&A.h()
A.l1(q,s)
s=n.e
s===$&&A.h()
A.l1(q,s)
s=n.f
s===$&&A.h()
A.l1(q,s)
s=n.r
s===$&&A.h()
A.l1(q,s)
s=n.w
s===$&&A.h()
A.l1(q,s)},
eH(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aP($.wY())
i.e=i.aP($.wV())
i.f=i.aP($.wW())
i.r=i.aP($.wU())
i.w=i.aP($.wX())
for(s=i.b.bG(),r=s.$ti,s=new A.cC(s.a(),r.i("cC<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a4(o,new A.rh()))continue
l=A.w3(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.w4(p,l,k,j)}q.k(0,n.a,l)}},
gc8(){return this.b.bG().br(0,0,new A.rg(),t.S)}}
A.rf.prototype={
$3(a,b,c){return new A.bi(A.c(a),A.c(b),A.aB(c))},
$S:108}
A.rh.prototype={
$1(a){return t.Fx.a(a)==null},
$S:111}
A.rg.prototype={
$2(a,b){var s
A.c(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:114}
A.eq.prototype={
gnA(){return this.b.length}}
A.jE.prototype={
ms(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.q0(A.e([],t.pq),A.a2(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].ag(s,b)
o=s.mr(a,!1)
if(o.b.length!==0)return new A.jF(o,B.ig)
q=o.a
n=A.H(q)
m=new A.S(q,n.i("i(1)").a(new A.nP()),n.i("S<1,i>")).bu(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.af(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.d(A.m('RenderFeature "'+k.ga5()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.S(l,new A.nQ(o))
return new A.jF(o,l)}}
A.nP.prototype={
$1(a){return t.A.a(a).a},
$S:116}
A.nQ.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.iQ(s,new A.nN(a)),B.a.iQ(s,new A.nO(b)))},
$S:121}
A.nN.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.nO.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.jF.prototype={}
A.ek.prototype={
A(){return"FrameQueueState."+this.b}}
A.nV.prototype={}
A.nT.prototype={
mn(a){if(a.length===0)throw A.d(A.an(a,"passId",null))
this.b=a
this.a.cb(a,A.zC())},
jR(){var s,r,q,p,o=t.z
o=A.p(o,o)
for(s=this.a,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aI(p.a,p.b,p.d))}return A.b1(o,t.N,t.pH)},
by(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.y("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.c.T(a,3)*b}}
A.fB.prototype={}
A.au.prototype={
gbK(){var s=this.c,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.pE()),r.i("M<1>"))},
gcg(){var s=this.c,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.pF()),r.i("M<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pE.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.H},
$S:22}
A.pF.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:22}
A.ca.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bb.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hQ.prototype={
A(){return"ResourceFormat."+this.b}}
A.cK.prototype={
A(){return"GraphStage."+this.b}}
A.aN.prototype={
iZ(){var s=this
return new A.aN(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.aN&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gH(a){var s=this
return A.cy(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fs.prototype={
A(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.ha.prototype={}
A.pV.prototype={
au(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.CA(m.a,a.c,r.a(a.d.gZ().bN(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.hU){++m.e
throw q}else throw q}p=new A.ha(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
kV(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ah(s,s.r,s.e,a.$ti.i("ah<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bg.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.y("ProgramSource.id must not be empty",m))
s=t.S
r=A.a2(s)
for(q=this.d.gI(),q=q.gt(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.y('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.y('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a2(s)
for(s=this.e.gI(),s=s.gt(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.y('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.y('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.pZ.prototype={}
A.b3.prototype={
ae(){var s=this
return A.xj(B.dN,s.f,B.ak,B.a5,!0,!0,!0,!0,s.r,B.ao,B.ap,s.d,s.e,!0,!1,!1)}}
A.q0.prototype={
mr(a,b){var s=this.m2(t.Q.a(a),!1),r=this.a,q=A.H(r)
return new A.q_(A.aj(new A.M(r,q.i("n(1)").a(new A.q5()),q.i("M<1>")),t.A),s)},
m2(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.ka)
r=m.a
q=A.H(r)
p=q.i("M<1>")
o=A.J(new A.M(r,q.i("n(1)").a(new A.q4()),p),p.i("o.E"))
m.kB(o,a,s)
m.kF(o,s)
m.kH(o,s)
m.kE(o,!1,s)
n=m.kJ(o,s)
m.kG(o,n,s)
m.kI(o,s)
m.kD(o,n,s)
m.kC(o,s)
return s},
kB(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.O.dP(b)
if(p.a!==0)B.a.l(c,new A.bb(B.h5,q.a,"missing capabilities: "+p.a6(0,", ")))}},
kF(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbK(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bb(B.h0,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
kH(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.H(a),r=s.i("n(1)").a(new A.q3()),q=B.a.gt(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbK()
o=A.J(p,p.$ti.i("o.E"))
p=r.gcg()
n=A.J(p,p.$ti.i("o.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bb(B.aR,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaM(o).a
l=B.a.gaM(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bb(B.aR,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bb(B.aR,r.a,"resolve source and destination must match format and extent"))}},
kE(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.H)B.a.l(c,new A.bb(B.h3,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kJ(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.p(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcg(),n=J.R(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bb(B.h_,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kG(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbK(),p=J.R(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.H)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bb(B.cq,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bF(a,m)>s)B.a.l(c,new A.bb(B.cq,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
kI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbK(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.H)continue
for(l=q.gcg(),k=J.R(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bb(B.h2,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
kD(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbK(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.H)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcg().aj(0,new A.q2(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bb(B.h1,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
kC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.p(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcg(),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.jZ(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a2(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbK(),p=J.R(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.H)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cO(s,!1,!1,p)
s=a.length
i=A.cO(s,!1,!1,p)
h=new A.q1(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.bb(B.h4,a[q].a,"participates in a resource dependency cycle"))}}}}
A.q5.prototype={
$1(a){t.A.a(a)
return A.vU()},
$S:9}
A.q4.prototype={
$1(a){t.A.a(a)
return A.vU()},
$S:9}
A.q3.prototype={
$1(a){return t.A.a(a).f},
$S:9}
A.q2.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:22}
A.q1.prototype={
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
r=A.ij(r,r.r,A.q(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.q_.prototype={}
A.ll.prototype={$ibX:1,
ga5(){return this.a},
gD(){return this.b},
geS(){return this.c}}
A.hN.prototype={
hi(a){var s,r,q=a.c,p=q.a
if(!p.gak(0))A.j(A.y("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.y("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.y(u.u,null))
s=this.a.bZ(a.a)
q=q.a9()
p=s.d.gav()
r=A.H(p)
return A.ba(new A.S(p,r.i("L(1)").a(q.gaz()),r.i("S<1,L>")))},
giU(){return new A.cj(this.nJ(),t.Br)},
nJ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$giU(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bG(),n=o.$ti,o=new A.cC(o.a(),n.i("cC<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
if(!(f>=0&&f<j.length)){A.f(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a9()
f=f.gav()
d=A.H(f)
r=5
return a.b=new A.ll(h,g,A.ba(new A.S(f,d.i("L(1)").a(i.gaz()),d.i("S<1,L>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iC2:1}
A.q7.prototype={
$3(a,b,c){return new A.cr(A.c(a),A.c(b),A.aB(c))},
$S:145}
A.qg.prototype={
jb(a,b){var s,r
if(this.w)A.j(A.m("resource library is disposed"))
s=this.a
a.C()
r=s.b.aC(a,b)
s.c.k(0,r.a,s.bk(a))
this.e.l(0,r)
return r},
ou(a){if(this.w)A.j(A.m("resource library is disposed"))
this.a.b2(a)
this.e.a1(0,a)},
ot(a){var s
if(this.w)A.j(A.m("resource library is disposed"))
a.C()
s=this.b.a.aC(a,null)
this.f.l(0,s)
return s},
eG(a,b,c){var s,r
if(this.w)A.j(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.j(A.y("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.j(A.y("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aC(new A.du(new A.jL(c,b,1,!1,B.au,B.au,B.cn,1),A.cO(1,null,!1,t.Fx),!1),a)
this.r.l(0,r)
return r},
bn(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)return
s=i.r
r=A.J(s,A.q(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.a1(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b2(k)}r=i.f
q=A.J(r,A.q(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.b2(q[l])
q=i.e
o=A.J(q,A.q(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.b2(o[l])
s.G(0)
r.G(0)
q.G(0)
p.bn()
i.w=!0}}
A.rS.prototype={}
A.lM.prototype={$ibX:1,
ga5(){return this.a},
gD(){return this.b},
geS(){return this.c}}
A.uc.prototype={
$1(a){var s=this.a.w.a.eJ(a),r=s.b!=null,q=r?s.d:s.e
return new A.hP(s.c,r,q,s.f)},
$S:146}
A.ud.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().j_(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().j_(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:149}
A.ub.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.u4.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gO(r)},
$S:160}
A.u5.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.b1
s=q.b.z
r=s.length===0?null:B.a.gO(s)
return A.FW(s,3,q.a.d,r)},
$S:161}
A.ua.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.u_.prototype={
$0(){return this.a.at.a},
$S:167}
A.u1.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.u0.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.u9.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.tY.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.tZ.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.u6.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.u7.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.u8.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.u3.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.u2.prototype={
$0(){return this.a.at.w},
$S:46}
A.ue.prototype={
$0(){return this.a},
$S:47}
A.tk.prototype={}
A.lx.prototype={$iC1:1}
A.li.prototype={$iBf:1}
A.qm.prototype={
gbc(){var s=this.w
return s==null?A.j(A.m("renderer is not initialized")):s},
iS(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bj)throw A.d(A.m("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.aa)throw A.d(A.m("renderer device is context lost"))
m.e=B.k6
try{m.r=s.j8()
r=m.b
q=A.pB(a)
p=r.a
if(p.a!=null)A.j(A.m("configuration state is already initialized"))
a.C()
p.a=a
A.pB(a)
p.d=1
r.b.iR(q)
r=A.BE()
m.w=new A.qg(A.BG(s),r,A.Cf(s),A.a2(t.kc),A.a2(t.pw),A.a2(t.Aj))
r=new A.kw()
p=new A.of(s,r)
q=A.pB(a)
o=p.fp(q,a)
r.iR(q)
p.c=new A.kp(new A.pQ(q),o)
m.x=p
m.y=new A.pV(s,A.p(t.N,t.CH))
m.as=a
A.yQ(m)
m.e=B.bk}catch(n){s=m.y
if(s!=null){r=s.b
s.kV(new A.as(r,A.q(r).i("as<2>")))
r.G(0)}s=m.x
if(s!=null)s.bn()
s=m.w
if(s!=null)s.bn()
m.w=null
m.e=B.bj
throw n}return A.vG(t.H)},
ml(a,b){var s,r,q,p,o,n,m=this,l=null
m.lJ()
m.cr()
r=B.a.q(m.d,a)
if(!r)throw A.d(A.y("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gak(0))A.j(A.y("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gak(0)||q.gc7()<1e-12)A.j(A.y("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.y("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.y("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gak(0)||!r.b.gak(0)||!r.c.gak(0))A.j(A.y("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.j(A.y("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.at)A.j(A.m("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.at
o.c=0
B.a.G(o.a)
s=o
try{r=m.r
if((r==null?A.j(A.m("renderer is not initialized")):r).z)m.b$=m.a.mm()
return s}catch(n){if(o.b!==B.at)A.j(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.fG
m.f7()
m.ax=m.at=null
throw n}},
ni(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cr()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.at)A.j(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.i_(l,0,A.e8(m.c,"count",t.S),A.H(l).c).bO(0,!1)
m.b=B.fF
q=k
try{p=A.DV(a1,r,s,q)
o=p.a.jR()
m=o.gI().cY(0,new A.qn())
l=m.$ti
n=new A.cw(m,l.i("aI(1)").a(new A.qo()),l.i("cw<1,aI>")).br(0,B.c7,new A.qp(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gc8()
g=g.c.gc8()
e=a1.w
e.a.gc8()
e.c.gc8()
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
return new A.nW(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.l6(s.e)
a1.ax=a1.at=null}},
lJ(){var s,r,q,p=this
if(p.e!==B.d6)return
if(p.a.b===B.aa)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.w)A.j(A.m("resource library is disposed"))
s.a.eH()
s.c.eH()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.m("GPU resource adapter is not initialized"))
s.c=new A.kp(q.a,s.fp(A.pB(r),r))
s=p.y
s.c=null
s.b.G(0)
A.yQ(p)
p.e=B.bk},
cr(){var s=this,r=s.e
if(r!==B.bk)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.aa){s.kY()
s.e=B.d6
throw A.d(A.m("renderer context lost"))}}}
A.qn.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.qo.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.qp.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aI(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lv.prototype={}
A.t3.prototype={
l6(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.m(u.k))
r=s.hb(o)
if(r.b)A.j(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lv(o))}catch(q){p.dm(o)}},
f7(){var s=this.b$
this.b$=null
if(s!=null)this.dm(s)},
kY(){var s,r,q
this.f7()
s=this.a$
r=J.xv(s.slice(0),A.H(s).c)
B.a.G(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.dm(r[q].b)},
dm(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hb(a).a)}catch(r){}}}
A.lB.prototype={}
A.hV.prototype={
A(){return"ShadowCasterLod."+this.b}}
A.bL.prototype={
F(a,b){var s,r=this
t.BB.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$ib0:1}
A.bJ.prototype={
F(a,b){var s
t.z3.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$ib0:1}
A.aO.prototype={}
A.vu.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.F(0,s.a(b).a)},
$S:51}
A.vv.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.vs.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.vt.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.nv.prototype={}
A.nu.prototype={}
A.j5.prototype={
gav(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.L(o,n,p),new A.L(r,n,p),new A.L(o,q,p),new A.L(r,q,p),new A.L(o,n,s),new A.L(r,n,s),new A.L(o,q,s),new A.L(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.ev.prototype={}
A.fg.prototype={
A(){return"FrustumTest."+this.b}}
A.nX.prototype={
oS(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.c8
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.fH:B.fI}}
A.nY.prototype={
$4(a,b,c,d){var s=new A.L(a,b,c),r=new A.ev(s,d),q=Math.sqrt(s.gc7())
if(q<1e-9)s=r
else{s=1/q
s=new A.ev(new A.L(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dj.prototype={
a7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.dj(h)},
jd(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.L(k,j,i):new A.L(k/h,j/h,i/h)},
ez(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.j(A.m("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
return new A.dj(h)},
gak(a){return B.q.a4(this.a,new A.pj())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.pj.prototype={
$1(a){return isFinite(A.bz(a))},
$S:5}
A.ks.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.kL.prototype={
C(){var s=this.a
if(!s.gak(0))throw A.d(A.y("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.y("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.y(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.xF(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.xF(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.L.prototype={
c_(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bl(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.L(s*r-q*p,q*o-n*r,n*p-s*o)},
gc7(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gc7())},
gak(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaa(){var s=this,r=Math.sqrt(s.gc7())
return r<1e-9?B.af:new A.L(s.a/r,s.b/r,s.c/r)},
a_(a,b){if(b==null)return!1
return b instanceof A.L&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gH(a){return A.cy(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.ia.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.h8.prototype={
ga5(){return this.f},
ag(a,b){B.a.l(a.a,new A.au(this.f,B.K,A.e([new A.O(this.x,B.i),new A.O(this.y,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.au(new A.bg(s.e,s.b,s.c,B.u,B.cK,B.cG)),q=A.d_(s.d),p=t.n,o=s.r===B.dw?new Float32Array(A.a1(A.e([1/s.Q,0],p))):new Float32Array(A.a1(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.l9(new A.b3(s.f,A.e([new A.O(s.x,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iak:1}
A.l9.prototype={
ai(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c1(r,a.am(o.r).b)
A.bk(r,o.a.ae())
A.dt(r,B.a8,1,0,0,0)
A.ch(r,o.b.b)
q=t._
p=o.d
if(o.e)A.Cw(r,0,q.a(p.$0()))
else A.aE(r,0,q.a(p.$0()))
A.v(r,"uSource",B.v)
A.v(r,"uTexelStep",new A.A(B.aB,o.f))
A.bx(r,o.c)
s.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.jg.prototype={
ga5(){return"bloomComposite"},
ag(a,b){B.a.l(a.a,new A.au("bloomComposite",B.K,A.e([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
af(a){var s=this,r="bloomComposite",q=s.a.au(new A.bg(r,s.b,s.c,B.u,B.iS,B.iB)),p=A.d_(s.d),o=s.w,n=A.e([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.j)],t.C)
return A.e([new A.la(new A.b3(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iak:1}
A.la.prototype={
ai(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c1(r,a.cX(q.f).b)
A.Cx(r,1)
A.bk(r,B.em)
A.ch(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.v)
A.v(r,"uBloomStrength",new A.A(B.e,p))
A.bx(r,q.c)
s.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.jt.prototype={
ga5(){return"depthPrepass"},
ag(a,b){B.a.l(a.a,new A.au("depthPrepass",B.fX,A.e([new A.O(this.w,B.j)],t.C),!1))},
af(a){var s=this,r="depthPrepass",q=s.a.au(new A.bg(r,s.b,s.c,B.cJ,B.cH,B.i0))
return A.e([new A.ld(new A.b3(r,A.e([new A.O(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iak:1}
A.ld.prototype={
ai(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c1(a1,a2.am("sceneDepth").b)
A.bk(a1,d.a.ae())
A.dt(a1,B.aM,1,0,0,0)
A.ch(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.A(B.e,a0.Q))
A.v(a1,"uAlbedo",B.v)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.v(a1,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(a))))
A.v(a1,"uModel",new A.A(B.t,new Float32Array(A.a1(i.c.a9().a))))
A.vq(b,k,!1)
d.kW(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.j(A.m(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.j(A.m(c))
e=A.c(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.c(o.WebGL2RenderingContext.UNSIGNED_INT):A.c(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.by(g,f)}else{if(a1.b!==B.h)A.j(A.m(c))
m.drawArraysInstanced(A.c(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.by(g,f)}}},
kW(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.A(B.e,0))
A.v(q,"uAffineWarpStrength",new A.A(B.e,0))
s=this.a.ae()
A.bk(q,r.dx?s.eR(!1):s)},
$iac:1,
gD(){return this.a}}
A.ic.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.he.prototype={
ga5(){return this.f},
ag(a,b){B.a.l(a.a,new A.au(this.f,B.K,A.e([new A.O(this.w,B.i),new A.O(this.x,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.au(new A.bg(s.e,s.b,s.c,B.u,B.cK,B.cG)),q=A.d_(s.d),p=t.n,o=s.r===B.dx?new Float32Array(A.a1(A.e([1/s.z,0],p))):new Float32Array(A.a1(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.le(new A.b3(s.f,A.e([new A.O(s.w,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iak:1}
A.le.prototype={
ai(a){return},
$iac:1,
gD(){return this.a}}
A.jx.prototype={
ga5(){return"dofComposite"},
ag(a,b){var s=this
B.a.l(a.a,new A.au("dofComposite",B.K,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1))},
af(a){var s=this,r="dofComposite",q=s.a.au(new A.bg(r,s.b,s.c,B.u,B.iQ,B.hQ)),p=A.d_(s.d)
return A.e([new A.lf(new A.b3(r,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iak:1}
A.lf.prototype={
ai(a){var s,r=this,q=a.am("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c1(n,q.b)
A.bk(n,r.a.ae())
A.ch(n,r.b.b)
s=t._
A.aE(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.v)
A.aE(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ae)
A.aE(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.dp)
A.v(n,"uNear",new A.A(B.e,o.f))
A.v(n,"uFar",new A.A(B.e,o.r))
A.v(n,"uFocusDistance",new A.A(B.e,r.w))
A.v(n,"uFocusRange",new A.A(B.e,r.x))
A.v(n,"uStrength",new A.A(B.e,0))
A.bx(n,r.c)
p.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.jO.prototype={
ga5(){return"grade"},
ag(a,b){B.a.l(a.a,new A.au("grade",B.K,A.e([new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.au(new A.bg("grade",s.b,s.c,B.u,B.iO,B.iC)),q=A.d_(s.d),p=s.r,o=s.w
return A.e([new A.lk(new A.b3("grade",A.e([new A.O(p,B.i),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iak:1}
A.lk.prototype={
ai(a){var s=this,r=a.am(s.f.a),q=a.b,p=q.a
A.c1(p,a.am(s.r.a).b)
A.bk(p,s.a.ae())
A.ch(p,s.b.b)
A.aE(p,0,r.b)
A.v(p,"uScene",B.v)
A.aE(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ae)
A.v(p,"uLutSize",new A.A(B.e,s.e))
A.v(p,"uStrength",new A.A(B.e,a.c.e.y))
A.bx(p,s.c)
q.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.ka.prototype={
ga5(){return"msaaResolve"},
ag(a,b){B.a.l(a.a,new A.au("msaaResolve",B.fY,A.e([new A.O(this.b,B.i),new A.O(this.c,B.j)],t.C),!0))},
af(a){var s=this.b,r=this.c
return A.e([new A.lr(new A.b3("msaaResolve",A.e([new A.O(s,B.i),new A.O(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iak:1}
A.lr.prototype={
ai(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cX(this.c),j=a.cX(this.d),i=this.b
if(i.b!==B.h)A.j(A.m(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.j(A.y("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.j(A.y("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.j(A.y("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.e([A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(m.WebGL2RenderingContext.NONE)],t.n))}A.ai(i,l,[0,0,s,r.x,0,0,p,q.x,A.c(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.e([A.c(m.WebGL2RenderingContext.NONE),A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.ai(i,l,[0,0,s,r.x,0,0,p,q.x,A.c(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.ai(i,l,[0,0,s,r.x,0,0,p,q.x,A.c(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.c(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.e([A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iac:1,
gD(){return this.a}}
A.f5.prototype={}
A.jh.prototype={
am(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cX(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.am(s)},
$iC0:1}
A.vV.prototype={}
A.hJ.prototype={
ga5(){return"present"},
ag(a,b){B.a.l(a.a,new A.au("present",B.fZ,A.e([new A.O(this.f,B.i)],t.C),!1))},
af(a){var s=this,r=s.a.au(new A.bg("present",s.b,s.c,B.u,B.iZ,B.i7)),q=A.d_(s.d),p=s.f
return A.e([new A.ly(new A.b3("present",A.e([new A.O(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iak:1}
A.ly.prototype={
ai(a){var s,r=this,q=a.cX(r.d),p=a.b,o=p.a
A.c1(o,null)
A.bk(o,r.a.ae())
A.ch(o,r.b.b)
A.bx(o,r.c)
A.aE(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.A(B.e,s.a))
A.v(o,"uVignette",new A.A(B.e,s.e))
A.v(o,"uGrain",new A.A(B.e,s.f))
A.v(o,"uRainIntensity",new A.A(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.A(B.e,s.w))
A.v(o,"uOutputEncoding",new A.A(B.e,r.e===B.aN?1:0))
A.v(o,"uToneMap",B.dn)
p.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.kr.prototype={
ga5(){return"ps1Quantize"},
ag(a,b){B.a.l(a.a,new A.au("ps1Quantize",B.K,A.e([new A.O(this.e,B.i),new A.O(this.f,B.j)],t.C),!1))},
af(a){var s=this,r="ps1Quantize",q=s.a.au(new A.bg(r,s.b,s.c,B.u,B.iU,B.hJ)),p=A.d_(s.d),o=s.e,n=s.f
return A.e([new A.lz(new A.b3(r,A.e([new A.O(o,B.i),new A.O(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iak:1}
A.lz.prototype={
ai(a){var s=this,r=a.am(s.d.a),q=a.b,p=q.a
A.c1(p,a.am(s.e.a).b)
A.bk(p,s.a.ae())
A.ch(p,s.b.b)
A.aE(p,0,r.b)
A.v(p,"uScene",B.v)
A.v(p,"uQuantizationBits",new A.A(B.e,a.c.e.as))
A.v(p,"uDitherStrength",new A.A(B.e,0))
A.bx(p,s.c)
q.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.eD.prototype={}
A.kA.prototype={
ga5(){return"shadow"},
ag(a,b){B.a.l(a.a,new A.au("shadowCaster",B.fW,A.e([new A.O(this.z,B.j)],t.C),!1))},
af(a){var s=this,r="shadowCaster",q=s.a.au(new A.bg(r,s.b,s.c,B.cJ,B.cH,B.iA))
return A.e([new A.lC(new A.b3(r,A.e([new A.O(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
$iak:1}
A.lC.prototype={
ai(a){var s,r,q,p,o=this,n=a.am("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c1(s,n.b)
A.bk(s,o.a.ae())
A.dt(s,B.aM,1,0,0,0)
return}r=A.xV(l)
o.x.$1(r)
s=m.a
A.c1(s,n.b)
A.bk(s,o.a.ae())
A.dt(s,B.aM,1,0,0,0)
A.ch(s,o.b.b)
A.v(s,"uAlbedo",B.v)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.kZ(m,s[p],l,r)},
h1(a,b){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.A(B.e,0))
s=this.a.ae()
A.bk(q,r.dx?s.eR(!1):s)},
kZ(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.v(s,"uUseInstances",B.by)
n.fX(a,b.gD().c,d)
n.h1(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bx(s,q.a)
s=q.b
r=q.c
if(s)a.dR(r,q.d,0)
else a.aE(r,0)}else if(b instanceof A.eq){p=b.a
if(!p.gD().r)return
if(n.m_(b,c)===B.kL)return
n.fX(a,p.gD().c,d)
A.vq(a,b,!1)
n.h1(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bx(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dS(r,q.d,o,0)
else a.dQ(r,0,o)}else throw A.d(A.y("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).p(0),null))},
m_(a,b){return B.kK},
fX(a,b,c){var s=a.a
A.v(s,"uModel",new A.A(B.t,new Float32Array(A.a1(b.a9().a))))
A.v(s,"uLightViewProjection",new A.A(B.t,new Float32Array(A.a1(c.a.a))))},
$iac:1,
gD(){return this.a}}
A.uJ.prototype={
$1(a){return this.a.a=a},
$S:57}
A.uK.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kB.prototype={
ga5(){return"shadowedWorld"},
ag(a,b){var s=this,r=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.j))
B.a.l(a.a,new A.au("shadowedWorld",B.cp,r,!1))},
af(a){var s=this,r="shadowedWorld",q=s.a.au(new A.bg(r,s.b,s.c,B.iW,B.iP,B.hG)),p=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.j))
return A.e([new A.lD(new A.b3(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$iak:1}
A.lD.prototype={
ai(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.am("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c1(b1,a4.b)
A.bk(b1,a2.a.ae())
s=a8.a
A.dt(b1,B.bX,1,s.c,s.b,s.a)
A.ch(b1,a2.b.b)
A.v(b1,"uAlbedo",B.v)
A.v(b1,"uNormalMap",B.l6)
A.v(b1,"uOrmMap",B.l7)
A.v(b1,"uEmissiveMap",B.l8)
A.v(b1,"uLightmap",B.l9)
s=t._
A.aE(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ae)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.A(B.aB,new Float32Array(A.a1(A.e([1/a2.ch,1/a2.CW],r)))))
A.aE(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.dp)
A.v(b1,"uVertexSnapGrid",new A.A(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.A(B.aB,new Float32Array(A.a1(A.e([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(a7.c.a))))
A.v(b1,"uView",new A.A(B.t,new Float32Array(A.a1(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.A(B.t,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.A(B.p,new Float32Array(A.a1(A.e([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.A(B.e,a8.c))
A.v(b1,"uFogEnd",new A.A(B.e,a8.d))
A.v(b1,"uFogHeightFalloff",new A.A(B.e,0))
A.v(b1,"uFogDensity",new A.A(B.e,0))
q=a2.Q.$0()
s=A.e([],t.cv)
p=a2.as.$0()
p=J.R(p==null?B.b1:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a1
k=o?a3:q.c
if(k==null)k=B.aC
A.v(b1,"uLightPosition",new A.A(B.p,new Float32Array(A.a1(A.e([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.A(B.p,new Float32Array(A.a1(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.S
A.v(b1,"uLightColor",new A.A(B.p,new Float32Array(A.a1(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.A(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.A(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a1
g=p?a3:i.b
if(g==null)g=B.S
A.v(b1,"uDirectionalDirection",new A.A(B.p,new Float32Array(A.a1(A.e([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.A(B.p,new Float32Array(A.a1(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.A(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.af
c=n?a3:e.c
if(c==null)c=B.S
m=""+f
A.v(b1,"uPointPosition"+m,new A.A(B.p,new Float32Array(A.a1(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.A(B.p,new Float32Array(A.a1(A.e([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.A(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.A(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.f(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.af
a=p?a3:e.c
if(a==null)a=B.aC
c=p?a3:e.d
if(c==null)c=B.S
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.A(B.p,new Float32Array(A.a1(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.A(B.p,new Float32Array(A.a1(A.e([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.A(B.p,new Float32Array(A.a1(A.e([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.A(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.A(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.A(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.A(B.e,Math.cos(m)))
p=p?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.A(B.e,p))}s=o?a3:q.f
A.v(b1,"uLightRange",new A.A(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.A(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.A(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.A(B.p,new Float32Array(A.a1(A.e([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.A(B.e,a8.w))
A.v(b1,"uRainWetness",new A.A(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.r)(b1),++a1)a2.h2(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.r)(a6),++a1)a2.h2(a5,a6[a1],r)},
h2(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.by)
m.h3(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.fY(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bx(s,o.a)
s=o.b
r=o.c
if(s)a.dR(r,o.d,0)
else a.aE(r,0)}else if(b instanceof A.eq){n=b.a
m.h3(a,n.gD().c)
A.vq(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.fY(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bx(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dS(r,o.d,q,0)
else a.dQ(r,0,q)}else throw A.d(A.y("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).p(0),null))},
fY(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aE(o,0,p.a(s.e.$1(q.b)))
A.aE(o,3,p.a(s.f.$1(r)))
A.aE(o,4,p.a(s.r.$1(r)))
A.aE(o,5,p.a(s.w.$1(r)))
A.aE(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.A(B.e,0))
A.v(o,"uOpaqueCoverage",new A.A(B.e,c===B.aO?0:1))
A.v(o,"uAffineWarpStrength",new A.A(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.A(B.p,new Float32Array(A.a1(A.e([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.A(B.e,0))
A.v(o,"uUvScaleOffset",new A.A(B.l5,new Float32Array(A.a1(A.e([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.A(B.e,1))
A.v(o,"uRoughness",new A.A(B.e,q.z))
A.v(o,"uMetallic",new A.A(B.e,0))
A.v(o,"uOcclusionStrength",new A.A(B.e,1))
A.v(o,"uLightmapIntensity",new A.A(B.e,0))
A.v(o,"uReceivesShadow",new A.A(B.e,1))
A:{p=r
if(B.aO===c){switch(d.a){case 0:p=B.eo
break
case 1:p=B.en
break}break A}if(B.R===c||B.el===c){p=s.a.ae()
break A}}A.bk(o,q.dx?p.eR(!1):p)},
h3(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.A(B.t,new Float32Array(A.a1(s.a))))
A.v(r,"uNormalMatrix",new A.A(B.t,new Float32Array(A.a1(s.ez().a))))},
$iac:1,
gD(){return this.a}}
A.kE.prototype={
ga5(){return"ssaoOcclusion"},
ag(a,b){B.a.l(a.a,new A.au("ssaoOcclusion",B.co,A.e([new A.O(this.w,B.j)],t.C),!1))},
af(a){var s=this,r="ssaoOcclusion",q=s.a.au(new A.bg(r,s.b,s.c,B.u,B.iT,B.hF)),p=A.d_(s.d)
return A.e([new A.lG(new A.b3(r,A.e([new A.O(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iak:1}
A.lG.prototype={
ai(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c1(m,a.am("ssaoRaw").b)
A.bk(m,p.a.ae())
if(n<=0){A.dt(m,B.a8,1,1,1,1)
return}A.dt(m,B.a8,1,0,0,0)
s=p.e.$0()
A.ch(m,p.b.b)
A.aE(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.v)
A.v(m,"uNear",new A.A(B.e,s.f))
A.v(m,"uFar",new A.A(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.f(r,0)
A.v(m,"uProjScaleX",new A.A(B.e,r[0]))
if(5>=q)return A.f(r,5)
A.v(m,"uProjScaleY",new A.A(B.e,r[5]))
A.v(m,"uRadius",new A.A(B.e,p.f))
A.v(m,"uStrength",new A.A(B.e,n))
A.bx(m,p.c)
o.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.kD.prototype={
ga5(){return"ssaoBlur"},
ag(a,b){B.a.l(a.a,new A.au("ssaoBlur",B.co,A.e([new A.O(this.y,B.i),new A.O(this.z,B.j)],t.C),!1))},
af(a){var s=this,r="ssaoBlur",q=s.a.au(new A.bg(r,s.b,s.c,B.u,B.iJ,B.iE)),p=A.d_(s.d)
return A.e([new A.lF(new A.b3(r,A.e([new A.O(s.y,B.i),new A.O(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iak:1}
A.lF.prototype={
ai(a){var s,r,q=this,p=a.b,o=p.a
A.c1(o,a.am("ssaoBlurred").b)
A.bk(o,q.a.ae())
if(a.c.e.c<=0){A.dt(o,B.a8,1,1,1,1)
return}A.dt(o,B.a8,1,0,0,0)
s=q.f.$0()
A.ch(o,q.b.b)
r=t._
A.aE(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.v)
A.aE(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ae)
A.v(o,"uTexelSize",new A.A(B.aB,new Float32Array(A.a1(A.e([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.A(B.e,s.f))
A.v(o,"uFar",new A.A(B.e,s.r))
A.bx(o,q.c)
p.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.kS.prototype={
ga5(){return"vhs"},
ag(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.au("vhs",B.K,A.e([new A.O(this.r,B.i),new A.O(s,B.H),new A.O(s,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.au(new A.bg("vhs",s.b,s.c,B.u,B.iM,B.hL)),q=A.d_(s.d),p=s.r,o=s.w
return A.e([new A.lP(new A.b3("vhs",A.e([new A.O(p,B.i),new A.O(o,B.H),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iak:1}
A.lP.prototype={
ai(a){var s,r=this,q=a.am(r.f.a),p=a.am(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c1(m,p.b)
A.bk(m,r.a.ae())
A.ch(m,r.b.b)
A.aE(m,0,q.b)
A.v(m,"uScene",B.v)
A.aE(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ae)
A.v(m,"uTime",new A.A(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.A(B.e,n.at))
A.v(m,"uTrackingWeight",new A.A(B.e,l))
A.v(m,"uNoiseWeight",new A.A(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.A(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.A(B.e,n.CW))
A.v(m,"uGhostWeight",new A.A(B.e,s))
A.bx(m,r.c)
o.aE(3,0)},
$iac:1,
gD(){return this.a}}
A.hP.prototype={}
A.l2.prototype={
ga5(){return"world"},
ag(a,b){B.a.l(a.a,new A.au("worldOpaqueTransparent",B.cp,A.e([new A.O(this.e,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.au(new A.bg("safeWorld",s.b,s.c,B.iY,B.u,B.hE)),q=s.e
return A.e([new A.lS(new A.b3("worldOpaqueTransparent",A.e([new A.O(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iak:1}
A.lS.prototype={
ai(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c1(j,a.am(n.d).b)
A.bk(j,n.a.ae())
s=k.a
A.dt(j,B.bX,1,s.c,s.b,s.a)
A.ch(j,n.b.b)
A.v(j,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a1
s=t.n
A.v(j,"uLightDir",new A.A(B.p,new Float32Array(A.a1(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.A(B.p,new Float32Array(A.a1(A.e([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.A(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.fu(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.fu(m,l[o])},
fu(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eq){s=b.a
n.h_(a,s.gD().c)
A.vq(a,b,!0)
r=n.c.$1(s.gD().a)
A.bx(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dS(p,r.d,o,0)
else a.dQ(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.by)
n.h_(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bx(q,r.a)
q=r.b
p=r.c
if(q)a.dR(p,r.d,0)
else a.aE(p,0)}else throw A.d(A.y("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eY(b).p(0),null))},
h_(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.A(B.t,new Float32Array(A.a1(s.a))))
A.v(r,"uNormalMatrix",new A.A(B.t,new Float32Array(A.a1(s.ez().a))))},
$iac:1,
gD(){return this.a}}
A.nc.prototype={
ci(a){var s,r,q
a.C()
s=A.a2(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.bh
else q=r===0?B.bf:B.bg
return new A.ew(q,s)},
js(a){var s,r=this.ci(a).a
A:{if(B.bh===r){s=B.jO
break A}if(B.bg===r){s=B.jN
break A}s=B.ay
break A}return s}}
A.jK.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.hl.prototype={
A(){return"GpuBufferKind."+this.b}}
A.jM.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.jN.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.jJ.prototype={}
A.jL.prototype={}
A.en.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.hn.prototype={}
A.hm.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.eC.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.hU.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cU.prototype={
A(){return"UniformType."+this.b}}
A.A.prototype={}
A.f8.prototype={
A(){return"ClearMask."+this.b}}
A.ju.prototype={
aE(a,b){var s=this.a
if(s.b!==B.h)A.j(A.m(u.k))
s.a.drawArrays(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.by(a,1)},
dQ(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.m(u.k))
s.a.drawArraysInstanced(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.by(a,c)},
dR(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.by(a,1)},
dS(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.ai(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.by(a,c)},
$iAZ:1}
A.kp.prototype={
j_(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.of.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
bn(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.kU(s.b)
r.b.bn()
r.c=null
r.e=!0},
fp(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.p(b,a),a1=A.e([],t.C1)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("M<1>")
s=new A.M(l,j.a(new A.og()),k)
for(i=s,h=J.R(i.a),i=new A.T(h,i.b,i.$ti.i("T<1>")),g=this.a;i.m();){r=h.gn()
q=A.CB(g,this.kX(r,a3))
J.h5(a1,q)
J.bI(a0,r,q)}f=A.J(new A.M(l,j.a(new A.oh()),k),k.i("o.E"))
B.a.X(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.r)(l),++e){o=l[e]
n=A.zJ(J.At(o,11))
j=J.aG(a0,"sceneColor")
j.toString
J.bI(a0,o,j)}b=A.b1(a0,b,a)
return b}catch(d){for(b=a1,l=A.H(b).i("hR<1>"),b=new A.hR(b,l),b=new A.aS(b,b.gu(0),l.i("aS<a6.E>")),k=this.a,j=t.V,l=l.i("a6.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.w5(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
kX(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.hn(512,512,1,B.aQ,!0)
if(a==="sceneDepth")return new A.hn(o,n,1,B.aQ,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.W(a,"sceneColor#")
return new A.hn(r,q,1,p?B.cm:B.fT,p)},
kU(a){var s,r,q,p,o,n=A.k5(t.mf.a(a).gaA(),t._)
for(n=A.ij(n,n.r,A.q(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.w5(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.og.prototype={
$1(a){return!B.b.W(A.x(a),"sceneColor#")},
$S:3}
A.oh.prototype={
$1(a){return B.b.W(A.x(a),"sceneColor#")},
$S:3}
A.fG.prototype={
A(){return"_SlotState."+this.b}}
A.e1.prototype={
saZ(a){this.c=this.$ti.i("1?").a(a)}}
A.cQ.prototype={
aC(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.e1(B.aF,n.i("e1<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.m7
p.saZ(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bY(a){return this.aC(a,null)},
a0(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dN(B.ct,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dN(B.cu,a))
s=q.b
if(s===B.aG||s===B.aF)throw A.d(A.dN(B.aw,a))},
bZ(a){var s,r,q=this.$ti
q.c.a(a)
this.a0(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
jf(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a0(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].saZ(b)},
b2(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dN(B.ct,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dN(B.cu,a))
r=q.b
if(r===B.aG||r===B.aF)throw A.d(A.dN(B.h8,a))
q.b=B.aG
q.saZ(null)
B.a.l(p.c,s);++p.e},
bG(){return new A.cj(this.nK(),this.$ti.i("cj<+(1,2)>"))},
nK(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bG(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aG||j===B.aF){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aX(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.je.prototype={
A(){return"BlendEquation."+this.b}}
A.ee.prototype={
A(){return"BlendFactor."+this.b}}
A.jq.prototype={
A(){return"CullFace."+this.b}}
A.js.prototype={
A(){return"DepthFunc."+this.b}}
A.fd.prototype={
eR(a){var s=this
return A.xj(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b4.prototype={
A(){return"StateField."+this.b}}
A.rG.prototype={
na(a){var s,r=this.a
if(r==null)return A.hx(B.ix,t.qL)
s=A.a2(t.qL)
if(r.a!==a.a)s.l(0,B.bq)
if(r.b!==a.b)s.l(0,B.br)
if(r.c!==a.c)s.l(0,B.bs)
if(r.d!==a.d)s.l(0,B.bt)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bu)
if(r.r!==a.r)s.l(0,B.bv)
if(r.w!==a.w)s.l(0,B.bw)
if(r.x!==a.x)s.l(0,B.bx)
return s}}
A.dv.prototype={$idg:1}
A.iH.prototype={}
A.iG.prototype={}
A.lR.prototype={}
A.l0.prototype={
ko(a){var s=this,r=A.a(s.a.canvas)
s.c=A.Z(new A.rE(s))
s.d=A.Z(new A.rF(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
j8(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bR(A.c(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bR(A.c(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bR(A.c(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bR(A.c(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bR(A.c(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fN(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.d4(e.getParameter(A.c(k.WebGL2RenderingContext.RENDERER)))
m=A.d4(e.getParameter(A.c(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.pX("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bR(a){var s=A.d4(this.a.getParameter(a))
return typeof s=="number"?B.d.aW(s):0},
fN(a){var s=A.d4(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBl:1}
A.rE.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.aa},
$S:2}
A.rF.prototype={
$1(a){A.a(a)
this.a.b=B.h},
$S:2}
A.tt.prototype={
mm(){var s,r=this
if(r.b!==B.h)A.j(A.m(u.k))
s=r.w?A.k(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dv(new A.lR(s))},
hb(a){var s=a.a
if(!(s instanceof A.lR))throw A.d(A.an(a,"query","is not a GPU timer query"))
return s}}
A.lQ.prototype={}
A.jw.prototype={
B(){var s=this
return A.N(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jb.prototype={
gnR(){var s=this.CW
return new A.as(s,A.q(s).i("as<2>")).br(0,0,new A.mP(),t.i)},
k5(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.k(i.connect(A.a(s.destination)))
r=j.d
r===$&&A.h()
A.a(r.gain).value=0.25
q=j.e
q===$&&A.h()
A.a(q.gain).value=0.12
p=j.f
p===$&&A.h()
A.a(p.gain).value=0.4
o=j.r
o===$&&A.h()
A.a(o.gain).value=0.2
n=j.w
n===$&&A.h()
A.a(n.gain).value=0.4
m=j.x
m===$&&A.h()
A.a(m.gain).value=0.1
l=j.y
l===$&&A.h()
A.a(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.k(r[k].connect(i))
r=j.z
r===$&&A.h()
A.a(r.gain).value=1
q=j.Q
q===$&&A.h()
A.a(q.gain).value=0.35
A.k(o.connect(r))
A.k(n.connect(r))
A.k(p.connect(r))
p=j.as
p===$&&A.h()
A.k(r.connect(p))
A.k(p.connect(q))
A.k(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.K()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.K()
j.k3=p
A.k(q.connect(p))
A.k(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.k(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.K()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.K()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.K()
j.p1=r
A.k(p.connect(q))
A.k(i.connect(A.a(s.destination)))
j.fd()},
fd(){var s,r=this,q=r.k4
q===$&&A.h()
q.disconnect()
s=r.p1
s===$&&A.h()
s.disconnect()
if(r.p2){A.k(q.connect(s,0))
A.k(q.connect(s,1))
q=r.ok
q===$&&A.h()
A.k(s.connect(q,0,0))
A.k(s.connect(q,0,1))}else{s=r.ok
s===$&&A.h()
A.k(q.connect(s,0,0))
A.k(q.connect(s,1,1))}},
cd(){var s=this.a
if(A.x(s.state)==="suspended")A.a(s.resume())},
h4(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.iR.h(0,a)
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
l9(){var s,r,q,p,o,n,m,l=this.a,k=A.aA(l.sampleRate),j=B.d.aH(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cT()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
eB(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.cT()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.k(r.connect(q))
A.k(q.connect(p.h4(a)))
r.onended=A.Z(new A.mR(r,q))
r.start()},
j5(a){return this.eB(a,1)},
j6(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.cT()*0.12)
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
l=j.fo(j.b.j4(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fI(r,q,n,o,p,e,B.d.L(m,0,1)))
r.onended=A.Z(new A.mQ(j,o))
A.k(r.connect(q))
A.k(q.connect(n))
A.k(n.connect(o))
A.k(o.connect(p))
A.k(p.connect(j.h4(a)))
r.start()},
om(a,b,c,d){return this.j6(a,b,c,1,d,null,null,null)},
fo(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.ap(r,q,p)},
f5(a){var s,r,q,p,o=this
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
A.k(q.connect(p))
r=o.e
r===$&&A.h()
A.k(p.connect(r))
q.onended=A.Z(new A.mS(o,q,p))
q.start()
o.cy=q},
d2(a){if(this.p2===a)return
this.p2=a
this.fd()},
jD(a){var s,r,q=this
q.d2(a.b===B.bI)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aH?1:0.55
r=q.c
r===$&&A.h()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.a(s.gain).value=0.35*q.p4},
be(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.L(c==null?q.fr:c,0,1)
q.fx=B.d.L(f==null?q.fx:f,0,1)
q.fy=B.d.L(b==null?q.fy:b,0,1)
q.go=B.d.L(a==null?q.go:a,0,1)
q.id=B.d.L(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.h()
A.a(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.h()
A.a(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.h()
A.a(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.h()
A.a(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.h()
A.a(s.gain).value=0.4*q.go
s=q.e
s===$&&A.h()
A.a(s.gain).value=0.12*q.id
s=q.y
s===$&&A.h()
A.a(s.gain).value=q.fx
s=q.c
s===$&&A.h()
s=A.a(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
eY(a){var s=null
return this.be(s,s,s,s,a,s)},
jA(a){var s=null
return this.be(s,s,a,s,s,s)},
jC(a){var s=null
return this.be(s,s,s,s,s,a)},
jz(a){var s=null
return this.be(s,a,s,s,s,s)},
jy(a){var s=null
return this.be(a,s,s,s,s,s)},
jB(a){var s=null
return this.be(s,s,s,a,s,s)},
jx(a){if(this.ay===a)return
this.ay=a
this.bA()},
bA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.ce(p,g)
m=n==null?i.fo(h.j4(p,g)):new A.ap(n.c,n.d,n.e)
l=A.aA(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.aA(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.aA(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.d.L(m.c,0,1)}}}
A.mP.prototype={
$2(a,b){return Math.max(A.bz(a),t.jS.a(b).r)},
$S:60}
A.mO.prototype={
$1(a){return this.jm(t.q.a(a))},
jm(a){var s=0,r=A.bD(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bG(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.am(A.aY(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.am(A.aY(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.am(A.aY(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bB(null,r)
case 1:return A.bA(p.at(-1),r)}})
return A.bC($async$$1,r)},
$S:61}
A.mR.prototype={
$1(a){A.a(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.mQ.prototype={
$1(a){var s
A.a(a)
s=this.a.CW.a1(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.mS.prototype={
$1(a){var s,r
A.a(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.fI.prototype={}
A.jc.prototype={
A(){return"AudioCategory."+this.b}}
A.mE.prototype={
k7(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.fA)
if(!B.a.a4(A.e([d.a,d.b,d.c],t.n),new A.mF()))throw A.d(B.eW)}}
A.mF.prototype={
$1(a){return isFinite(A.bz(a))},
$S:5}
A.mm.prototype={
k0(a,b){if(this.a.length===0)throw A.d(B.eM)
if(!B.a.a4(A.e([a.a,a.b,a.c],t.n),new A.mn()))throw A.d(B.f0)}}
A.mn.prototype={
$1(a){return isFinite(A.bz(a))},
$S:5}
A.h6.prototype={
C(){var s=t.n
if(B.a.M(A.e([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mo()))throw A.d(B.fg)
s=B.a.M(A.e([0,0.55,1],s),new A.mp())
if(s)throw A.d(B.fr)},
ce(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ap(-1.5,2e4,0)
if(a.ay)return new A.ap(-28,320,1)
return new A.ap(-12,1100,0.55)},
oU(a){return this.ce(a,null)}}
A.mo.prototype={
$1(a){return!isFinite(A.bz(a))},
$S:5}
A.mp.prototype={
$1(a){A.bz(a)
return a<0||a>1},
$S:5}
A.mA.prototype={
k6(a){var s=A.q(a)
if(new A.ae(a,s.i("ae<1>")).M(0,new A.mC())||new A.as(a,s.i("as<2>")).M(0,new A.mD()))throw A.d(B.fy)}}
A.mC.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.mD.prototype={
$1(a){var s
t.a.a(a)
s=J.aC(a)
return s.gN(a)||s.M(a,new A.mB())},
$S:63}
A.mB.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.vE.prototype={}
A.mM.prototype={}
A.mG.prototype={
k8(a,b,c){var s
for(s=this.b.gaA(),s=s.gt(s);s.m();)s.gn().C()},
je(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.gG.a(a0)
s=this.a.e
if(s.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(s.h(0,b)==null)throw A.d(A.m("audio listener room missing: "+b))
r=this.lQ(a,b)
s=t.s
q=A.e([],s)
p=A.e([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.bQ
e=f.ce(h,a0.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
B.a.l(p,"portal:"+g)}n=!r.b
if(n&&a!==b){B.a.l(p,"unreachable")
l=-48
k=240
j=1}s=A.e([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.r)(o),++i)s.push(o[i].a)
o=B.d.L(l,-60,0)
m=B.c.L(k,120,2e4)
g=B.d.L(j,0,1)
n=!n||a===b
if(p.length!==0)B.a.a6(p,"; ")
c=t.N
s=A.aj(s,c)
A.aj(q,c)
if(!isFinite(g)||g<0||g>1)A.j(B.fq)
return new A.mM(s,o,m,g,n)},
ce(a,b){return this.je(a,b,B.b9)},
lQ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.lS
s=t.N
r=A.N([a0,0],s,t.i)
q=A.N([a0,B.U],s,t.Es)
p=A.aJ([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.S(k,new A.mH(r))
j=B.a.gO(k)
p.a1(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.i7(s,!0)}i=o.aF(j)
h=A.J(i,i.$ti.i("o.E"))
B.a.S(h,new A.mI())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.bJ(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.bQ:d).oU(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.J(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.lR}}
A.mH.prototype={
$2(a,b){var s,r,q
A.x(a)
A.x(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.F(r,s)
return q===0?B.b.F(a,b):q},
$S:64}
A.mI.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:65}
A.i7.prototype={}
A.f6.prototype={}
A.nb.prototype={
ex(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Al().bl(q).gaa()
p.d=q
p.c=p.b.bl(q).gaa()
p.a=a}}
A.nS.prototype={}
A.kI.prototype={}
A.od.prototype={
l0(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.k(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.k(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.k(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.d4(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cR(a,b,c,d,e,f){return this.nL(a,b,c,d,e,f)},
nL(a,b,c,a0,a1,a2){var s=0,r=A.bD(t.uh),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cR=A.bG(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.a(A.a(j.document).createElement("img"))
m.src=a
s=7
return A.am(A.aY(A.a(m.decode()),t.X),$async$cR)
case 7:i=n.a
h=A.k(i.createTexture())
h.toString
l=h
i.activeTexture(A.c(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.c(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.c(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.ai(i,"texImage2D",[A.c(j.WebGL2RenderingContext.TEXTURE_2D),0,A.c(j.WebGL2RenderingContext.RGBA8),A.c(j.WebGL2RenderingContext.RGBA),A.c(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
k=a2?A.c(j.WebGL2RenderingContext.REPEAT):A.c(j.WebGL2RenderingContext.CLAMP_TO_EDGE)
i.texParameteri(A.c(j.WebGL2RenderingContext.TEXTURE_2D),A.c(j.WebGL2RenderingContext.TEXTURE_WRAP_S),k)
i.texParameteri(A.c(j.WebGL2RenderingContext.TEXTURE_2D),A.c(j.WebGL2RenderingContext.TEXTURE_WRAP_T),k)
h=A.c(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.c(j.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
f=a0?A.c(j.WebGL2RenderingContext.LINEAR):A.c(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(a1)i.generateMipmap(A.c(j.WebGL2RenderingContext.TEXTURE_2D))
h=A.c(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.c(j.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
if(a1)f=A.c(j.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
else f=a0?A.c(j.WebGL2RenderingContext.LINEAR):A.c(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(c){n.l0()
h=n.c
if(h>1)i.texParameterf(A.c(j.WebGL2RenderingContext.TEXTURE_2D),34046,h)}q=l
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
case 6:case 1:return A.bB(q,r)
case 2:return A.bA(o.at(-1),r)}})
return A.bC($async$cR,r)},
cS(a,b,c){var s=!1
return this.nM(t.a.a(a),b,!1)},
nM(b0,b1,b2){var s=0,r=A.bD(t.uh),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cS=A.bG(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.W)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.a(A.a(a0.document).createElement("img"))
j.src=k
s=10
return A.am(A.aY(A.a(j.decode()),a1),$async$cS)
case 10:J.h5(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.c7(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.c(J.aG(l,0).width)
h=A.c(J.aG(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.vB(l,new A.oe(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.c7(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.an()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.j2(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.an()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a8()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a8()
n=[1]
s=5
break A}e=B.d.T(a+1,2)}}a=m.a
a7=A.k(a.createTexture())
if(a7==null){a=A.m("could not create texture array")
throw A.d(a)}a.activeTexture(A.c(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.c(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.ai(a,"texStorage3D",[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.c(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.vC(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.c7(l)
if(typeof a1!=="number"){q=a1.d1()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.c(a0.WebGL2RenderingContext.RGBA),A.c(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aG(l,c)])
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.vC(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a8()
n=[1]
s=5
break A}c=a1+1}a.texParameteri(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.c(a0.WebGL2RenderingContext.TEXTURE_WRAP_S),A.c(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a.texParameteri(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.c(a0.WebGL2RenderingContext.TEXTURE_WRAP_T),A.c(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a1=A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.c(a0.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
a4=a0.WebGL2RenderingContext
a4=A.c(a4.NEAREST)
a.texParameteri(a1,a3,a4)
if(a6){a.generateMipmap(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY))
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.vC(d,16)+")")
throw A.d(a)}a.texParameteri(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.c(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.c(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
a0=a0.WebGL2RenderingContext
a0=A.c(a0.NEAREST)
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
b=A.ag(a9)
A.a(v.G.console).error("texture array load failed: "+A.w(b))
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
a.bindTexture(A.c(v.G.WebGL2RenderingContext.TEXTURE_2D_ARRAY),null)
a.deleteTexture(a7)}s=n.pop()
break
case 6:case 1:return A.bB(q,r)
case 2:return A.bA(o.at(-1),r)}})
return A.bC($async$cS,r)},
h5(a,b){var s=this.a,r=A.k(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.d4(s.getShaderParameter(r,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.ff("shader compile failed: "+A.w(A.yL(s,"getShaderInfoLog",r,t.D))+"\n"+b))
return r},
aY(a,b){var s=v.G,r=this.h5(A.c(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.h5(A.c(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.k(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.d4(p.getProgramParameter(o,A.c(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.ff("program link failed: "+A.w(A.yL(p,"getProgramInfoLog",o,t.D))))
return o},
giY(){var s=A.d4(this.a.getParameter(A.c(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aW(s):0},
eO(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.c(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.c(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hL(0,c,B.c.k_(b.byteLength,p))*p
if(B.c.P(o,4)!==0)A.j(A.y("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.An(B.q.gmp(b),b.byteOffset+0*p,B.c.T(o,4)))}},
dF(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.c(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.c(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.c(n.WebGL2RenderingContext.RGBA8)
q=A.c(n.WebGL2RenderingContext.RGBA)
p=A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.ai(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.c(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.c(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
dA(a,b,c,d,e){var s,r=this.a,q=A.k(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.ai(r,"renderbufferStorageMultisample",[A.c(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.c(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
h7(a,b,c){var s,r=this.a,q=A.k(r.createTexture())
q.toString
this.dF(q,a,b)
s=v.G
A.ai(r,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.c(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fs(a,b){var s,r,q=this.a,p=A.k(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.c(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.ai(q,"texStorage2D",[A.c(s.WebGL2RenderingContext.TEXTURE_2D),1,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.c(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.c(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.ai(q,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.c(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
ey(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.k(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.dA(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.dA(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.h7(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.h7(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.dA(a,b,e,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fs(a,b)
if(d)h.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.c(h.checkFramebufferStatus(A.c(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.c(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.ff("framebuffer incomplete"))
return new A.kI(g,n,o,m,q,p,l,e,a,b)},
iX(a,b,c,d){return this.ey(a,b,c,d,0)},
nP(a,b,c,d){return this.ey(a,b,!0,c,d)},
bt(a,b,c){return this.ey(a,b,c,!1,0)},
dD(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.c(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.ai(s,"renderbufferStorageMultisample",[A.c(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.c(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
b4(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.dF(q,b,c)
if(p!=null)n.dF(p,b,c)
n.dD(a,a.e,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dD(a,a.f,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dD(a,a.r,A.c(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.fs(b,c)}s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
oz(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.ai(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.c(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.c(o.WebGL2RenderingContext.NONE),A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.ai(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.c(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.ai(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.c(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.c(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
mC(a,b,c,d){var s,r,q=v.G,p=(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.e([A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.e([A.c(q.WebGL2RenderingContext.NONE),A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.e([A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
b8(a){var s=this.a,r=A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.c(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.c(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.oe.prototype={
$1(a){A.a(a)
return A.c(a.width)!==this.a||A.c(a.height)!==this.b},
$S:66}
A.jT.prototype={
eN(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].pb(a)}}
A.jV.prototype={
cc(a){if(this.at)return
A.vJ(a,"requestPointerLock",t.X)},
eW(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cc(r,r.r,r.e,A.q(r).i("cc<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a2(q)
for(m=J.R(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.ox(p,n)}this.b6()},
d7(a){var s,r,q,p,o,n,m=this
if(m.ch.d7(a))for(s=m.CW.aB("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
on(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.R(t.ik.b(c)?c:new A.aR(c,A.H(c).i("aR<1,a5?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.U(r.connected)||A.x(r.mapping)!=="standard")break A
c=A.x(r.id)
q=A.x(r.mapping)
p=t.n
o=A.e([],p)
n=d.a(r.axes)
n=J.R(t.dd.b(n)?n:new A.aR(n,A.H(n).i("aR<1,z>")))
while(n.m())o.push(n.gn())
p=A.e([],p)
d=d.a(r.buttons)
d=J.R(t.nx.b(d)?d:new A.aR(d,A.H(d).i("aR<1,a5>")))
while(d.m()){r=d.gn()
p.push(A.U(r.pressed)?1:A.aA(r.value))}s=new A.kF(!0,c,q,o,p)
break}}d=s==null
m=A.CF(d?B.kR:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aB(e),q.gap(q))
q=f.r
q.l5(A.q(q).i("n(1)").a(new A.oS(l)),!0)
for(p=l.gt(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.ev())n.l(0,h)}else n.l(0,h)}}f.e=A.hx(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aB(e),l.gap(l))){d=r.a(f.c)
d=!B.a.M(c.aB(e),d.gap(d))}}if(d)i.ew()},
lp(a){var s=this
A.a(a)
if(A.U(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.x(a.code)))if(B.a.q(s.CW.aB("interact"),A.x(a.code))){if(s.ch.ev())s.d.l(0,A.x(a.code))}else s.d.l(0,A.x(a.code))},
lr(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a1(0,A.x(a.code))
r=this.CW
if(B.a.q(r.aB(q),A.x(a.code))){t.Q.a(s)
s=!B.a.M(r.aB(q),s.gap(s))}else s=!1
if(s)this.ch.ew()},
lv(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.c(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aB("interact"),s)){if(r.ch.ev())r.d.l(0,s)}else r.d.l(0,s)},
lz(a){var s,r="interact",q="Mouse"+A.c(A.a(a).button),p=this.c
p.a1(0,q)
s=this.CW
if(B.a.q(s.aB(r),q)){t.Q.a(p)
p=!B.a.M(s.aB(r),p.gap(p))}else p=!1
if(p)this.ch.ew()},
lB(a){var s
A.a(a)
if(!this.ay)return
s=A.aA(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
lx(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fJ(a,"movementX")
s.as=s.as+s.fJ(a,"movementY")},
lt(a){var s=this
A.a(a)
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fJ(a,b){var s=A.yI(a[b])
if(s==null)s=null
return s==null?0:s},
ct(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.k5(n.c,t.N)
for(r=n.e,r=A.ij(r,r.r,A.q(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.M(n.CW.aB(a),s.gap(s))},
b6(){var s=this
s.c.G(0)
s.d.G(0)
s.f.G(0)
s.r.K(0,s.e)
s.as=s.Q=0
s.ch.eI()}}
A.oS.prototype={
$1(a){return!this.a.q(0,A.x(a))},
$S:3}
A.oR.prototype={
aB(a){var s=this.a.h(0,a)
return s==null?B.o:s},
ox(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a2(r)
for(p=A.ij(b,b.r,A.q(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.aj(q,r))},
b9(a,b){var s,r,q
t.Q.a(b)
for(s=this.aB(a),r=s.length,q=0;q<r;++q)if(b.a1(0,s[q]))return!0
return!1}}
A.oV.prototype={
ev(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
ew(){this.c=this.b=!1
this.d=0},
d7(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.d.L(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eI(){this.c=this.b=!1
this.d=0}}
A.k7.prototype={}
A.hA.prototype={
gfD(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gH(B.c.aL(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gH(B.c.aL(s.c,4)))>>>0
r=((r<<5>>>0)+r^s.d)>>>0
r=((r<<5>>>0)+r^B.b.gH(B.d.aL(0.5,4)))>>>0
r=((r<<5>>>0)+r^B.b.gH(B.c.aL(0,4)))>>>0
r=((r<<5>>>0)+r^B.b.gH(B.c.aL(1,4)))>>>0
return((r<<5>>>0)+r^B.b.gH(B.c.aL(1,4)))&2147483647},
a_(a,b){var s,r=this
if(b==null)return!1
if(r!==b){s=!1
if(b instanceof A.hA)if(A.me(r)===A.me(b))if(r.a===b.a)if(r.b===b.b)if(r.c===b.c)s=r.d===b.d}else s=!0
return s},
gH(a){return this.gfD()},
B(){var s=this
return A.N(["atlasLayer",s.a,"emissiveStrength",s.b,"uvScale",s.c,"flags",s.d,"roughness",0.5,"metallic",0,"aoStrength",1,"normalScale",1],t.N,t.K)}}
A.pm.prototype={
kg(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfD(),q)}}
A.cT.prototype={
cU(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.q.d3(s,0,m,l)
n.a=s}r=b.ao(0,a).bl(d.ao(0,a)).gaa()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.hX(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.hX(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.hX(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.hX(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.hX(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.hX(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aw(a,b,c,d,e){return this.cU(a,b,c,d,e,1,1)}}
A.q6.prototype={
lc(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aY(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.K()
m.w=r
q=s.aY(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.K()
m.x=q
p=m.c
o=A.k(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.K()
m.y=o
o=A.k(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.K()
m.z=o
o=A.k(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.K()
m.Q=o
r=A.k(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.K()
m.as=r
r=A.k(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.K()
m.at=r
q=A.k(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.K()
m.ax=q
m.d=s.bt(m.ay,m.ch,!1)
m.e=s.bt(m.ay,m.ch,!1)
m.f=s.bt(m.ay,m.ch,!1)
p=A.k(p.createVertexArray())
p.toString
m.CW!==$&&A.K()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
ld(){var s
try{this.r=this.b.bt(384,216,!1)}catch(s){this.r=null}},
ow(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
if(n==null||m==null||l==null||a.d==null)return null
s=o.c
r=o.w
r===$&&A.h()
s.useProgram(r)
r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0))
q=A.c(r.WebGL2RenderingContext.TEXTURE_2D)
p=a.d
p.toString
s.bindTexture(q,p)
p=o.y
p===$&&A.h()
s.uniform1i(p,0)
p=o.z
p===$&&A.h()
s.uniform2f(p,n.x,n.y)
p=o.Q
p===$&&A.h()
s.uniform1f(p,b)
p=o.as
p===$&&A.h()
s.uniform1f(p,0.0025)
p=o.b
p.b8(n)
q=o.CW
q===$&&A.h()
s.bindVertexArray(q)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
q=o.x
q===$&&A.h()
s.useProgram(q)
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0))
q=o.at
q===$&&A.h()
s.uniform1i(q,0)
p.b8(l)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.b8(m)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.qf.prototype={
dj(a,b,c){var s,r,q
try{r=this.a.aY(b,c)
return r}catch(q){s=A.ag(q)
r=A.ff(a+": "+A.w(s))
throw A.d(r)}}}
A.q8.prototype={}
A.ie.prototype={}
A.lH.prototype={}
A.lu.prototype={}
A.ls.prototype={}
A.q9.prototype={
kh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([A.vR(0,0,1,0),A.vR(1,0,1,0),A.vR(2,0,1,0)],t.td),e=t.S
e=new A.pm(f,A.p(e,e))
e.kg(f)
h.eq=e
h.ir=1.9
h.eg=h.bq/h.bp
r=J.jZ(6,t.dr)
for(q=0;q<6;++q)r[q]=new A.ie()
t.lm.a(r)
f=h.b0
e=f.aY("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aY(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aY(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aY(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aY(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.aq!==$&&A.K()
h.aq=new A.qf(f,e,p,o,n,m)
h.b=t.w7.a(new A.qa(h))
h.fV()
h.fU()
o=h.aQ
p=A.k(o.getUniformLocation(m,"uTex"))
h.hT!==$&&A.K()
h.hT=p
p=A.k(o.getUniformLocation(m,"uNoise"))
h.hU!==$&&A.K()
h.hU=p
p=A.k(o.getUniformLocation(m,"uTime"))
h.hz!==$&&A.K()
h.hz=p
p=A.k(o.getUniformLocation(m,"uTexelSize"))
h.hy!==$&&A.K()
h.hy=p
p=A.k(o.getUniformLocation(m,"uNoiseOff"))
h.hA!==$&&A.K()
h.hA=p
p=A.k(o.getUniformLocation(m,"uChromaLuma"))
h.hB!==$&&A.K()
h.hB=p
p=A.k(o.getUniformLocation(m,"uChromaLag"))
h.hC!==$&&A.K()
h.hC=p
p=A.k(o.getUniformLocation(m,"uTapeNoise"))
h.hD!==$&&A.K()
h.hD=p
p=A.k(o.getUniformLocation(m,"uHeadSwitch"))
h.hE!==$&&A.K()
h.hE=p
p=A.k(o.getUniformLocation(m,"uTracking"))
h.hF!==$&&A.K()
h.hF=p
p=A.k(o.getUniformLocation(m,"uDropouts"))
h.hG!==$&&A.K()
h.hG=p
p=A.k(o.getUniformLocation(m,"uGhosting"))
h.hH!==$&&A.K()
h.hH=p
p=A.k(o.getUniformLocation(m,"uChromaBlurI"))
h.hI!==$&&A.K()
h.hI=p
p=A.k(o.getUniformLocation(m,"uChromaBlurQ"))
h.hJ!==$&&A.K()
h.hJ=p
p=A.k(o.getUniformLocation(m,"uChromaLagAmount"))
h.hK!==$&&A.K()
h.hK=p
p=A.k(o.getUniformLocation(m,"uNoiseScale"))
h.hL!==$&&A.K()
h.hL=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.hM!==$&&A.K()
h.hM=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.hN!==$&&A.K()
h.hN=p
p=A.k(o.getUniformLocation(m,"uJitterAmount"))
h.hO!==$&&A.K()
h.hO=p
p=A.k(o.getUniformLocation(m,"uJitterFreq"))
h.hP!==$&&A.K()
h.hP=p
p=A.k(o.getUniformLocation(m,"uDropoutRate"))
h.hQ!==$&&A.K()
h.hQ=p
p=A.k(o.getUniformLocation(m,"uGhostAmount"))
h.hR!==$&&A.K()
h.hR=p
p=A.k(o.getUniformLocation(m,"uGhostOffset"))
h.hS!==$&&A.K()
h.hS=p
p=A.k(o.getUniformLocation(m,"uGhostTarget"))
h.hV!==$&&A.K()
h.hV=p
m=A.k(o.getUniformLocation(m,"uHasGhost"))
h.hW!==$&&A.K()
h.hW=m
m=A.k(o.getUniformLocation(n,"uTex"))
h.ei!==$&&A.K()
h.ei=m
m=A.k(o.getUniformLocation(n,"uDepth"))
h.ej!==$&&A.K()
h.ej=m
m=A.k(o.getUniformLocation(n,"uFocusDistance"))
h.ek!==$&&A.K()
h.ek=m
m=A.k(o.getUniformLocation(n,"uDofBlurScale"))
h.el!==$&&A.K()
h.el=m
m=A.k(o.getUniformLocation(n,"uBlurRadius"))
h.em!==$&&A.K()
h.em=m
m=A.k(o.getUniformLocation(n,"uDofStrength"))
h.en!==$&&A.K()
h.en=m
n=A.k(o.getUniformLocation(n,"uTexel"))
h.eo!==$&&A.K()
h.eo=n
n=A.U(A.a(A.a(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.c1!==$&&A.K()
h.c1=n
h.siV(16777215)
n=new A.r_(o,f,A.e([],t.qy),A.e([],t.sj),A.e([],t.h),A.e([],t.fv))
m=n.c=f.aY("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.k(o.getUniformLocation(m,"uLightProj"))
n.e=A.k(o.getUniformLocation(m,"uModel"))
h.ep!==$&&A.K()
h.ep=n
n=new A.q6(f,o)
n.lc()
n.ld()
h.cI!==$&&A.K()
h.cI=n
n=f.a
m=A.k(n.createBuffer())
m.toString
h.dU!==$&&A.K()
h.dU=m
p=A.k(n.createBuffer())
p.toString
h.dV!==$&&A.K()
h.dV=p
n=A.k(n.createBuffer())
n.toString
h.dW!==$&&A.K()
h.dW=n
e=A.k(o.createVertexArray())
e.toString
h.dX!==$&&A.K()
h.dX=e
l=A.k(o.createVertexArray())
l.toString
h.dY!==$&&A.K()
h.dY=l
k=A.k(o.createVertexArray())
k.toString
h.dZ!==$&&A.K()
h.dZ=k
j=A.k(o.createVertexArray())
j.toString
h.e_!==$&&A.K()
h.e_=j
o.bindVertexArray(e)
h.df(m)
o.bindVertexArray(l)
h.df(p)
o.bindVertexArray(k)
h.df(n)
o.bindVertexArray(null)
try{h.cN=f.iX(384,216,!0,!0)}catch(i){h.cN=null}s=4<f.giY()?4:f.giY()
e=s
if(typeof e!=="number")return e.an()
if(e>1)try{h.c0=f.nP(h.bp,h.bq,!0,s)}catch(i){h.c0=null}try{h.bo=f.iX(h.bp,h.bq,!0,!0)}catch(i){h.c0=h.bo=null}if(h.bo!=null)try{h.cK=f.bt(h.gcn(),h.gcm(),!1)
h.cL=f.bt(h.gcn(),h.gcm(),!1)
h.cM=f.bt(h.bp,h.bq,!1)}catch(i){h.cM=h.cL=h.cK=null}},
gcn(){var s=B.c.T(this.bp,4)
return s<1?1:s},
gcm(){var s=B.c.T(this.bq,4)
return s<1?1:s},
aT(a){return this.nN(t.G.a(a))},
nN(a){var s=0,r=A.bD(t.H),q=this,p,o,n,m,l,k,j
var $async$aT=A.bG(function(b,c){if(b===1)return A.bA(c,r)
for(;;)switch(s){case 0:p=new A.I(a,A.q(a).i("I<1,2>")).gt(0),o=q.b0
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.cI.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.am(o.cR(k,l,!1,!1,!1,m==="grime"),$async$aT)
case 4:if(c!=null)q.fw(m,l)
s=2
break
case 3:p=t.Ai
j=A.J(new A.cB(new A.S(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.oI.a(new A.qb(a)),t.jT),p),p.i("o.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.am(o.cS(j,12,!1),$async$aT)
case 7:q.cH=c
case 6:return A.bB(null,r)}})
return A.bC($async$aT,r)},
bL(){var s=0,r=A.bD(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bL=A.bG(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.p(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.am(A.aY(A.a(A.a(g.window).fetch("shaders/"+A.w(m))),f),$async$bL)
case 13:l=a3
if(!A.U(l.ok)){i=A.ff("HTTP "+A.w(A.wP(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.am(A.aY(A.a(l.text()),i),$async$bL)
case 14:a.bI(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ag(c)
i=A.ff("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.lI(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ag(b)
A.a(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bB(null,r)
case 1:return A.bA(p.at(-1),r)}})
return A.bC($async$bL,r)},
lI(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.aq
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.dj("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.dj("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.dj("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.fV()
i.fU()
q=i.hv
q=A.J(q,A.q(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.cI.h(0,s)
o.toString
i.fw(s,o)}A.a(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ag(j)
A.a(v.G.console).error("shader recompile failed: "+A.w(r))}},
fU(){var s=this,r=s.aQ,q=s.aq
q===$&&A.h()
s.is=A.k(r.getUniformLocation(q.c,"uTex"))
s.it=A.k(r.getUniformLocation(q.c,"uTime"))
s.iu=A.k(r.getUniformLocation(q.c,"uFlash"))
s.iv=A.k(r.getUniformLocation(q.c,"uVignette"))
s.iw=A.k(r.getUniformLocation(q.c,"uGrain"))
s.ix=A.k(r.getUniformLocation(q.c,"uDesat"))
s.iy=A.k(r.getUniformLocation(q.c,"uBloom"))
s.iz=A.k(r.getUniformLocation(q.c,"uBloomStrength"))
s.iG=A.k(r.getUniformLocation(q.c,"uNoiseOff"))
s.iJ=A.k(r.getUniformLocation(q.c,"uLutMix"))
s.iC=A.k(r.getUniformLocation(q.c,"uDepth"))
s.iD=A.k(r.getUniformLocation(q.c,"uDepthViz"))
s.hw=A.k(r.getUniformLocation(q.c,"uSSAO"))
s.hx=A.k(r.getUniformLocation(q.c,"uSSAOStrength"))
s.iE=A.k(r.getUniformLocation(q.c,"uNoise"))
s.iF=A.k(r.getUniformLocation(q.c,"uNoiseOn"))
s.iH=A.k(r.getUniformLocation(q.c,"uLut"))
s.iI=A.k(r.getUniformLocation(q.c,"uLutOn"))
s.iA=A.k(r.getUniformLocation(q.d,"uTex"))
s.eh=A.k(r.getUniformLocation(q.d,"uDir"))
s.iB=A.k(r.getUniformLocation(q.c,"uBlur"))},
fw(a,b){var s,r,q,p=this
p.hv.l(0,a)
switch(a){case"bluenoise":s=p.aq
s===$&&A.h()
s=s.c
r=p.iE
r===$&&A.h()
q=p.iF
q===$&&A.h()
p.bT(s,r,q,b)
break
case"lut-gothic":s=p.aq
s===$&&A.h()
s=s.c
r=p.iH
r===$&&A.h()
q=p.iI
q===$&&A.h()
p.bT(s,r,q,b)
break
case"grime":s=p.aq
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bT(s,r,q,b)
break
case"glass":s=p.aq
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bT(s,r,q,b)
break
case"soft":s=p.aq
s===$&&A.h()
s=s.b
r=p.ib
r===$&&A.h()
q=p.ic
q===$&&A.h()
p.bT(s,r,q,b)
break}},
bT(a,b,c,d){var s=this.aQ
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
siV(a){var s=A.uD(a)
this.i3=s.a
this.i4=s.b
this.i5=s.c},
cC(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.P(a1,14)!==0)throw A.d(A.y("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.aQ
i=A.k(a1.createVertexArray())
i.toString
e=A.k(a1.createBuffer())
e.toString
d=A.k(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.c(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.c(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.c(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.c(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.fe(56)
a1.bindBuffer(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.c(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.nn++
b.e3.k(0,a1,new A.lH(e,d,i,s,s,a3))
return a1},
nd(a){var s,r,q,p=this,o=p.e3.h(0,a)
if(o==null)return
p.fL()
s=p.i9
r=p.ia
if(s!==r)p.fZ(r)
s=p.aQ
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.ef
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.c(q.WebGL2RenderingContext.TRIANGLES),r,A.c(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.c(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.c2},
nw(a){var s,r=this.e3.a1(0,a)
if(r==null)return
s=this.aQ
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.e4)return
c.e4=!0
s=c.aQ
r=c.aq
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.i7
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.e7
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.e8
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.e9
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.ir)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.eg)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.hX?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.ea/255*0.34,c.eb/255*0.34,c.ec/255*0.34)
q=c.fx
q===$&&A.h()
r=c.i2
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.i3,c.i4,c.i5)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.i6)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.e6.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.e6
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.uD(k.b)
m=c.c1
m===$&&A.h()
i=m?1:1+(A.vr(c.ed*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.c1
r===$&&A.h()
q=r?1:1+(A.vr(c.ed*2.5,40503)*2-1)*0
c.nk=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.hZ?1:0
s.uniform1f(q,p)
p=c.ry
p===$&&A.h()
s.uniform1f(p,0.505)
p=c.to
p===$&&A.h()
s.uniform1f(p,1.2)
p=c.x1
p===$&&A.h()
s.uniform1f(p,0.25)
p=c.y1
p===$&&A.h()
s.uniform1f(p,2)
p=c.y2
p===$&&A.h()
s.uniform1f(p,0.45)
q=c.hY
h=q?384:0
g=q?216:0
q=c.e0
p=q.a
if(p===B.bn){f=B.d.L(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.ie
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.ep
r===$&&A.h()
q=c.ij
q===$&&A.h()
s.uniform1f(q,0)
q=c.ik
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.ig
q===$&&A.h()
if(q!=null)r.d_(0)
q=c.ih
q===$&&A.h()
if(q!=null)r.d_(1)
q=c.ii
q===$&&A.h()
if(q!=null)r.d_(2)
r.d0(0)
r.d0(1)
r.d0(2)
r=c.il
r===$&&A.h()
if(c.cH==null)q=0
else{c.eq===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cH!=null){r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cH)
r=c.ee
r===$&&A.h()
s.uniform1i(r,12)}r=c.iq
q=c.ip
p=c.io
o=c.im
n=0
for(;;){m=c.eq
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
if(m!=null)s.uniform1i(m,d.d);++n}c.fZ(c.ia)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.ef
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.c(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.c(r.WebGL2RenderingContext.BLEND))},
fZ(a){var s
this.i9=a
s=this.dx
s===$&&A.h()
this.aQ.uniformMatrix4fv(s,!1,a.a)},
b3(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bp=a
j.bq=b
j.eg=b/a
s=j.cI
s===$&&A.h()
r=B.c.T(a,2)
s.ay=r
q=B.c.T(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.b4(p,r,q)
r=s.e
if(r!=null)s.b.b4(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.b4(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.b4(r,384,216)
o=j.bo
n=j.c0
m=j.cK
l=j.cL
k=j.cM
if(o!=null)j.b0.b4(o,a,b)
if(n!=null)j.b0.b4(n,a,b)
if(m!=null)j.b0.b4(m,j.gcn(),j.gcm())
if(l!=null)j.b0.b4(l,j.gcn(),j.gcm())
if(k!=null)j.b0.b4(k,a,b)},
lV(a){var s,r,q,p,o,n,m
for(s=this.i0,r=this.i_,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
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
lU(a){var s,r,q,p,o,n,m,l
for(s=this.i1,r=this.e5,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
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
nt(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.e0=b4
s=b2.c3
r=0
if(s>0){for(s=b2.i1,q=0;p=b2.c3,q<p;++q)B.a.k(s,q,q)
b2.lU(p)
for(p=b2.e5,o=b2.e1,n=0;n<b2.c3;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.z7(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.e5,p=b2.e1,q=0;q<b2.c3;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.z7(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.c3=0
for(s=b2.i0,q=0;p=b2.cO,q<p;++q)B.a.k(s,q,q)
b2.lV(p)
for(p=b2.nl,o=b2.i_,k=0,n=0;n<b2.cO;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.uD(0)
m=j.b
h=b2.e9
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.e8
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
e=[new A.b(a-d,a1-c,a2-e),new A.b(g-d,f-c,h-e),new A.b(g+d,f+c,h+e),new A.b(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.e7
k=A.zf(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cO=0
s=b2.b0
o=b2.dU
o===$&&A.h()
s.eO(o,b2.e1,r)
o=b2.dV
o===$&&A.h()
s.eO(o,p,k)
b2.fL()
p=b2.aQ
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.dX
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.c.T(r,14));++b2.c2
p.depthMask(!1)
p.enable(A.c(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.c(o.WebGL2RenderingContext.SRC_ALPHA),A.c(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.dY
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.c.T(k,14));++b2.c2
m=b2.e2
if(m>0){h=b2.dW
h===$&&A.h()
s.eO(h,b2.nm,m)
p.blendFunc(A.c(o.WebGL2RenderingContext.ONE),A.c(o.WebGL2RenderingContext.ONE))
m=b2.dZ
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,b2.e2/14|0);++b2.c2}m=b2.cN
if(m!=null){a7=b2.bo
if(a7!=null)s.oz(m,a7)}a8=b2.bo
if(a8==null)return
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
m=b2.e_
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cK
a4=b2.cL
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.aq
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
g=b2.iA
g===$&&A.h()
p.uniform1i(g,0)
s.b8(a4)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.eh
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.b8(a3)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.eh,0,1/a4.y)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cM
if(b2.cJ>0&&a6!=null){s.b8(a6)
g=b2.aq
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.ei
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.ej
g===$&&A.h()
p.uniform1i(g,7)
g=b2.ek
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.el
g===$&&A.h()
p.uniform1f(g,1)
g=b2.em
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.en
g===$&&A.h()
p.uniform1f(g,b2.cJ)
g=b2.eo
g===$&&A.h()
p.uniform2f(g,1/b2.bp,1/b2.bq)
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cI
g===$&&A.h()
b0=g.ow(a8,0.5)
s.b8(null)
s=b2.aq
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE1))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.iy
g===$&&A.h()
p.uniform1i(g,1)
g=b2.iz
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.iB
s===$&&A.h()
b2.c1===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.iC
s===$&&A.h()
p.uniform1i(s,7)
s=b2.iD
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.hw
s===$&&A.h()
p.uniform1i(s,11)
s=b2.hx
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cJ>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.is
h===$&&A.h()
p.uniform1i(h,0)
h=b2.ed+=b3;++b2.i8
s=b2.it
s===$&&A.h()
p.uniform1f(s,h)
h=b2.iG
h===$&&A.h()
s=b2.i8
p.uniform2f(h,B.c.P(s*13,64),B.c.P(s*29,64))
s=b2.iu
s===$&&A.h()
p.uniform1f(s,0)
s=b2.iv
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.iw
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.ix
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.e0
if(s.a===B.ab)b1=0*(1-s.b/1)
else b1=0
s=b2.iJ
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.qa.prototype={
$0(){var s=this.a.aq
s===$&&A.h()
return s.b},
$S:67}
A.qb.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:29}
A.rI.prototype={
gm7(){var s=this.b
s===$&&A.h()
return s},
fV(){var s,r,q,p,o,n,m=this,l=m.m8(),k=m.a
m.c=A.c(k.getAttribLocation(l,"aPos"))
m.d=A.c(k.getAttribLocation(l,"aColor"))
m.e=A.c(k.getAttribLocation(l,"aAlpha"))
m.f=A.c(k.getAttribLocation(l,"aNormal"))
m.r=A.c(k.getAttribLocation(l,"aUv"))
A.c(k.getAttribLocation(l,"aModelRow0"))
A.c(k.getAttribLocation(l,"aModelRow1"))
A.c(k.getAttribLocation(l,"aModelRow2"))
A.c(k.getAttribLocation(l,"aModelRow3"))
A.c(k.getAttribLocation(l,"aMaterialTint"))
m.as=A.k(k.getUniformLocation(l,"uEye"))
m.at=A.k(k.getUniformLocation(l,"uFwd"))
m.ax=A.k(k.getUniformLocation(l,"uUp"))
m.ay=A.k(k.getUniformLocation(l,"uRight"))
m.ch=A.k(k.getUniformLocation(l,"uScale"))
m.CW=A.k(k.getUniformLocation(l,"uAspect"))
m.cx=A.k(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.k(k.getUniformLocation(l,"uDepthFar"))
m.db=A.k(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.k(k.getUniformLocation(l,"uModel"))
m.dy=A.k(k.getUniformLocation(l,"uInstanced"))
m.fr=A.k(k.getUniformLocation(l,"uFog"))
m.fx=A.k(k.getUniformLocation(l,"uLight"))
m.fy=A.k(k.getUniformLocation(l,"uLightColor"))
m.go=A.k(k.getUniformLocation(l,"uFogStart"))
m.id=A.k(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.k(k.getUniformLocation(l,"uAmbient"))
m.k2=A.k(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.k(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.G(s)
r=m.ok
B.a.G(r)
q=m.p1
B.a.G(q)
p=m.p2
B.a.G(p)
for(o=0;o<4;++o){n=""+o
B.a.l(s,A.k(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.l(r,A.k(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.l(q,A.k(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.l(p,A.k(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.k(k.getUniformLocation(l,"uFlicker"))
m.p4=A.k(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.k(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.k(k.getUniformLocation(l,"uWall"))
m.rx=A.k(k.getUniformLocation(l,"uWallOn"))
m.ry=A.k(k.getUniformLocation(l,"uWallMid"))
m.to=A.k(k.getUniformLocation(l,"uWallAmt"))
m.x1=A.k(k.getUniformLocation(l,"uWallScale"))
m.x2=A.k(k.getUniformLocation(l,"uGlass"))
m.xr=A.k(k.getUniformLocation(l,"uGlassOn"))
m.y1=A.k(k.getUniformLocation(l,"uGlassGain"))
m.y2=A.k(k.getUniformLocation(l,"uGlassFog"))
m.ib=A.k(k.getUniformLocation(l,"uSoft"))
m.ic=A.k(k.getUniformLocation(l,"uSoftOn"))
m.ie=A.k(k.getUniformLocation(l,"uInternal"))
m.ig=A.k(k.getUniformLocation(l,"uLightProj0"))
m.ih=A.k(k.getUniformLocation(l,"uLightProj1"))
m.ii=A.k(k.getUniformLocation(l,"uLightProj2"))
m.no=A.k(k.getUniformLocation(l,"uShadow0"))
m.np=A.k(k.getUniformLocation(l,"uShadow1"))
m.nq=A.k(k.getUniformLocation(l,"uShadow2"))
m.ij=A.k(k.getUniformLocation(l,"uShadowCasters"))
m.ee=A.k(k.getUniformLocation(l,"uMaterialAlbedo"))
m.ef=A.k(k.getUniformLocation(l,"uStaticMaterial"))
m.ik=A.k(k.getUniformLocation(l,"uShadowBias"))
m.il=A.k(k.getUniformLocation(l,"uMaterialCount"))
s=m.im
B.a.G(s)
r=m.io
B.a.G(r)
q=m.ip
B.a.G(q)
p=m.iq
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.k(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.k(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.k(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.k(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.ee,12)},
df(a){this.a.bindBuffer(A.c(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.fe(56)},
fe(a){var s=this,r=s.c
r===$&&A.h()
s.bU(r,3,a,0)
r=s.f
r===$&&A.h()
s.bU(r,3,a,12)
r=s.d
r===$&&A.h()
s.bU(r,4,a,24)
r=s.e
r===$&&A.h()
s.bU(r,1,a,40)
r=s.r
r===$&&A.h()
s.bU(r,3,a,44)},
bU(a,b,c,d){var s=this.a
A.ai(s,"vertexAttribPointer",[a,b,A.c(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
m8(){return this.gm7().$0()}}
A.r_.prototype={
d_(a){return null},
d0(a){return null}}
A.b.prototype={
a8(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
ao(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
a7(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
c_(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bl(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaa(){var s=this,r=s.gu(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kF.prototype={}
A.l3.prototype={}
A.n4.prototype={
p5(a){var s,r,q,p,o,n=B.k.ah(a.B(),null)
this.a.ht(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
oq(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
p=this.fq(r,a)
if(p!=null)return new A.eB(p,null)
o=this.fq(q,a)
if(o!=null)return new A.eB(o,"recovered previous save")
if(r==null)return B.km
return B.kl}catch(n){return B.kk}},
fq(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.ht(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.F)return null
else throw q}}}
A.jy.prototype={
kb(a,b,c,d,e){if(this.a.length===0)throw A.d(B.fo)
if(this.b<0)throw A.d(B.eX)},
B(){var s,r=this,q=r.d
q=q==null?null:A.aj(q,t.i)
s=t.z
return A.b1(A.N(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.c8.prototype={
A(){return"EndingKind."+this.b}}
A.nH.prototype={}
A.fe.prototype={
B(){var s=t.N
return A.N(["kind",this.a.b],s,s)}}
A.nK.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:69}
A.bl.prototype={}
A.km.prototype={
B(){var s,r=this,q=t.N,p=A.p(q,t.z)
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
nF(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ao(0,new A.b(0,1.3499999999999999,0))
return!new A.ji(s,s.a8(0,new A.b(0,1.2000000000000002,0))).iT(a,r)}}
A.pR.prototype={
B(){return A.m_(this.a)}}
A.ft.prototype={
B(){return A.N(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.ql.prototype={
ht(a){var s,r,q,p,o,n,m,l=B.k.aD(a,null),k=t.f
if(!k.b(l))throw A.d(B.fz)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aL(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a7("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.f4)
k=A.aM(n,s,r)
return A.xS(A.aM(m,s,r),k,2)}}
A.eB.prototype={}
A.em.prototype={
A(){return"GameSessionEventType."+this.b}}
A.jH.prototype={}
A.o3.prototype={}
A.o2.prototype={
gab(){var s=this.d
return new A.o3(s.a,s.b)},
geD(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.N(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.N(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.N(["entryCount",m.e.b.a],k,t.S)
p=A.xr(m.c).B()
o=m.r
n=o.c
return new A.pR(A.m_(A.N(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.N(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
mg(a,b){if(!B.a.M(a.f,new A.o4(b)))return!1
this.z.mf(a,b)
return!0},
nx(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.q(s).i("as<2>")
q=A.J(new A.as(s,r),r.i("o.E"))
B.a.S(q,new A.o5())
if(q.length===0)return null
s=A.H(q)
r=s.i("M<1>")
p=A.J(new A.M(q,s.i("n(1)").a(new A.o6()),r),r.i("o.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dH(a),r=t.sU,s=new A.aS(s,s.gu(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.c.P(n,o.length)]
s=l.c
k=new A.cG(a,l.a,s.length-1,B.a.gU(s).p(0))
j.k(0,a,k)
return k},
mc(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.an(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cw(B.fJ)}if(n<a)this.cw(B.fK)},
jT(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d6(a)&&s.jS(b)},
or(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.ds){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
jQ(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.AW(j,A.aj(i.d,h).length)
if(a===B.de)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.H(r)
A.AV(j,new A.M(r,q.i("n(1)").a(new A.o7(k)),q.i("M<1>")).gu(0))
r=k.f
q=r.b
if(B.a.q(B.hI,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aH(j.a/1*3)
B.a.l(r.r,new A.fv(q.a,a,b))
m=r.a
A.B6(m,q.a,n,k.b,A.aj(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.jF(B.io)
s.r.mE(o,c)
l=B.d.aH(j.b/1*6)
if(l>0)r.d6(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.as(i,A.q(i).i("as<2>")).M(0,new A.o8())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cw(B.fM)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cw(B.fL)},
cw(a){var s=this;++s.y
B.a.l(s.w,new A.jH())
B.a.l(s.x,A.AX(A.DT(a),s.b,s.y-1))}}
A.o4.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.o5.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.o6.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:19}
A.o7.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.r0().jN(this.a.c,a.a)},
$S:73}
A.o8.prototype={
$1(a){return t.g.a(a).e},
$S:19}
A.mT.prototype={
eP(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.m("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.m("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.m("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
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
if(Math.abs(g-j)>0.0001)A.j(A.m(n+" origin.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.m(n+" origin.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.m(n+" origin.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.m(n+" size.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.m(n+" size.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.m(n+" size.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.m("window count mismatch for "+n))
for(n=A.H(j),i=n.i("n(1)"),n=n.i("M<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.cu(new A.M(j,i.a(new A.mY(e)),n),r)
if(d==null)throw A.d(A.m("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.j(A.m(c+" offset mismatch: "+A.w(h)+" != "+A.w(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.j(A.m(c+a+A.w(h)+" != "+A.w(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.j(A.m(c+a0+A.w(h)+" != "+A.w(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.j(A.m(q+a+A.w(n)+" != "+A.w(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.j(A.m(q+a0+A.w(n)+" != "+A.w(l)))
if(o.f!=m.at)throw A.d(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaM(a1).b!==B.a.gaM(s).b)throw A.d(A.m("stair manifest mismatch"))}}
A.mU.prototype={
$1(a){return A.AD(a,this.a)},
$S:74}
A.mV.prototype={
$1(a){var s=this.a,r=A.m7(a,"portal"),q=A.e7(r,"id"),p=A.e7(r,"a"),o=A.e7(r,"b"),n=A.iX(r,"width"),m=A.iX(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.x(r.h(0,"doorKit")):null
return new A.f_(q,p,o,n*s,m*s,l)},
$S:75}
A.mW.prototype={
$1(a){var s=A.m7(a,"stair")
A.e7(s,"id")
return new A.f1(A.e7(s,"portalId"))},
$S:76}
A.mX.prototype={
$1(a){return typeof a=="string"?a:A.iT("exterior cell")},
$S:77}
A.mY.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.f0.prototype={}
A.mZ.prototype={
$1(a){var s=this.a,r=A.m7(a,"window"),q=A.e7(r,"id"),p=A.iX(r,"offset")
A.iX(r,"sill")
return new A.f2(q,p*s,A.iX(r,"width")*s,A.iX(r,"height")*s)},
$S:79}
A.f2.prototype={}
A.f_.prototype={}
A.f1.prototype={}
A.uH.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.ji.prototype={
oM(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.H(s)
q=new A.M(s,r.i("n(1)").a(new A.nd(e)),r.i("M<1>"))
p=!q.gt(0).m()?null:q.gO(0)
if(p==null){n.d=null
return}if(!(n.cv(b,p.f)&&a==="hall"))o=n.cv(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.l4(p,B.d.L(d,0,1))},
nS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fI(f,c,d)
s=g.l1(a,b,c,d)
if(s!=null){g.d=s
return g.fI(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.mw(Math.sqrt(r*r+q*q)/0.08))
o=d.a7(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.hd(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.j7(a,n)
n=i==null?n:i
h=g.hd(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.j7(a,n)
n=i==null?n:i}g.cA(m)
return new A.k9(m,n)},
l1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cv(c,l.f)&&n
j=q&&this.cv(c,l.r)&&o
if(k||j)return new A.l4(l,k?0:1)}return null},
fI(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ao(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.L(a.b+o/p,0,1)
n=A.y4(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.cA(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.k9(n,k)},
cv(a,b){var s=a.ao(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
hd(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.i9(c,!1)
s=c.a8(0,d)
this.cA(s)
if(this.iT(a,b)){this.cA(c)
return new A.i9(c,!0)}return new A.i9(s,!1)},
cA(a){var s=a.ao(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.a8(0,new A.b(0,1.2000000000000002,0))},
iT(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.b_(m)
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
return!this.lX(a,m,s)},
j7(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.b_(k)
for(r=k.a,q=a.aF(r),p=J.R(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.bJ(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hh(k,o,s)&&this.kR(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lX(a,b,c){var s,r,q
for(s=a.aF(b.a),r=J.R(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hh(b,q,c))return!0}return!1},
hh(a,b,c){var s,r,q,p=a.a,o=b.aJ(p),n=b.al(p)
p=o===B.l||o===B.m
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
kR(a,b,c){var s,r=this
switch(b.aJ(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smk(a){this.a=t.a7.a(a)}}
A.nd.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:81}
A.k9.prototype={}
A.i9.prototype={}
A.l4.prototype={}
A.hp.prototype={}
A.ov.prototype={
mE(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.M,r)
s=B.M[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jO(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.c}return r},
jP(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.d}return r},
B(){return A.N(["landedCount",this.b],t.N,t.z)}}
A.qh.prototype={
kj(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.K()
o.c=new A.jS(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.k(0,p.a,o.ff(p))}},
cV(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.nw(r[o])
s.k(0,a,n.ff(m))},
ff(a){var s=A.zz(this.a,a),r=this.b,q=A.e([r.cC(s.a,1),r.cC(s.b,2),r.cC(s.c,0)],t.t),p=s.d
if(!B.q.gN(p))q.push(r.cC(p,0))
return q},
jo(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.O
s=l.a
r=A.aJ([s],t.N)
for(n=n.aF(s),q=J.R(n.a),n=new A.T(q,n.b,n.$ti.i("T<1>"));n.m();){p=q.gn()
o=p.bJ(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
nc(a,b){var s,r,q,p,o=this,n=o.jo(a),m=o.b,l=o.c
l===$&&A.h()
l=t.ba.a(l.ji(n,b))
s=t.A_
m.e6=l.length<=4?A.aj(l,s):A.aj(A.i_(l,0,A.e8(4,"count",t.S),A.H(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.nd(r[p])}}}
A.a_.prototype={}
A.jB.prototype={
gnI(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a4(A.e([r,q,p,o,n,m],t.n),new A.nM())&&o>=r&&n>=q&&m>=p}}
A.nM.prototype={
$1(a){return isFinite(A.bz(a))},
$S:5}
A.jR.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.P(s,3)!==0}else s=!0
if(s)throw A.d(A.y("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.y("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnI())throw A.d(A.y("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.M(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.ox()))throw A.d(A.y("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.y("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.y("QHMX index "+o+" exceeds vertex count",m))}}}
A.ox.prototype={
$1(a){return!isFinite(A.bz(a))},
$S:5}
A.ow.prototype={
v(a,b,c,d,e,f,g){var s=this
s.bx(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bx(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bx(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bx(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bx(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bx(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a_(a,b,c,m,n,o,0,0,p),r=new A.a_(g,h,i,m,n,o,1,1,p)
this.ad(s,new A.a_(d,e,f,m,n,o,1,0,p),r)
this.ad(s,r,new A.a_(j,k,l,m,n,o,0,1,p))},
ad(a,b,c){var s=this,r=s.b
B.a.l(r,s.ds(a))
B.a.l(r,s.ds(b))
B.a.l(r,s.ds(c))},
ds(a){var s,r,q=B.a.a6(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
mq(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.jR(A.aj(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jB(s,r,q,p,o,n))
h.C()
return h}}
A.jC.prototype={}
A.vw.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ac.q(0,s))A.j(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:82}
A.uB.prototype={
$2(a,b){var s=t.Ez
return B.b.F(s.a(a).a,s.a(b).a)},
$S:83}
A.d0.prototype={
p0(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.p(k,k),i=A.e([],t.Dl)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.im(A.G4(new A.jR(i,new Uint16Array(A.a1(s)),A.DC(i))),l.a,l.b,l.c,A.e([],k))}}
A.im.prototype={}
A.ei.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.jD.prototype={
mx(a){var s
switch(a.a){case 0:s=A.aJ(["front","street","opposite-house"],t.N)
break
case 1:s=A.aJ(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aJ(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aJ(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aJ(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
my(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.c3
break A}if("kitchen"===a||"cellar"===a){s=B.eu
break A}if("bathroom"===a){s=B.ev
break A}if("spare-room"===a){s=B.ew
break A}s=B.c3
break A}return this.mx(s)},
iK(a,b,c,d){d.i("o<0>").a(b)
t.Q.a(c)
return new A.cj(this.ns(d.i("i(0)").a(a),b,c,d),d.i("cj<0>"))},
ns(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iK(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a4(0,B.ac.gap(B.ac)))throw A.d(A.y("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cc(l,l.r,l.e,r.$ti.i("cc<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ac.q(0,j))throw A.d(A.m("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.e0.prototype={
hp(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.ug.prototype={
$1(a){var s=this
return t.xT.a(a).hp(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:32}
A.uf.prototype={
$1(a){return t.xT.a(a).hp(0,(this.a+this.b)*0.5,this.c)},
$S:32}
A.dK.prototype={
A(){return"FocusKind."+this.b}}
A.ej.prototype={}
A.qi.prototype={}
A.tx.prototype={
$1(a){var s,r,q=this
t.xz.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:85}
A.tw.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.uz.prototype={
$1(a){return B.c.L(B.d.aH(a*this.a),0,255)},
$S:34}
A.e_.prototype={}
A.fH.prototype={}
A.ot.prototype={
ku(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oK(1.5),a4=this.b,a5=A.at(a4,!0,t.U)
B.a.G(a4)
s=A.e([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.b6(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.bd(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.bf(b.a,b.b,a3.$1(b.c)))}s.push(new A.aU(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.K(a4,s)
a4=this.c
a=A.at(a4,!0,t.T)
B.a.G(a4)
s=A.e([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.br(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.K(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dp(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.oL(),a7=this.b,a8=A.at(a7,!0,t.U)
B.a.G(a7)
s=A.e([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.r)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.e([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.r)(h),++f){e=h[f]
i.push(new A.b6(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.e([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.r)(g),++f){c=g[f]
h.push(new A.bd(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.e([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.r)(d),++f){a=d[f]
g.push(new A.bf(a.a,a.b,a6.$1(a.c)))}d=A.e([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.r)(b),++f){a1=b[f]
d.push(new A.da(a1.a,a1.b*1.5))}s.push(new A.aU(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.K(a7,s)
a7=this.c
a2=A.at(a7,!0,t.T)
B.a.G(a7)
s=A.e([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.br(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.K(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.e([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.r)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dp(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
l8(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.d(A.m("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.d(A.m("duplicate portal "+n))
q.k(0,n,m)}},
m5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
m3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.p(t.N,t.E4)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.hg(o,i,h,g,f,e)
a5.fb(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aJ(l)
h=c.al(l)
g=c.w
f=c.x
a5.hg(o,i,h,g,0,f)
a5.fb(a6,l,c.aJ(l),c.al(l),c.al(l)+g,0,f)}}for(s=new A.I(a6,a6.$ti.i("I<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.c6(a)
r.S(a,new A.oM())
for(a0=0;a0<r.gu(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gu(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
hg(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
fb(a,b,c,d,e,f,g){J.h5(t.aD.a(a).cb(b+":"+c.b,new A.oJ()),new A.iv([d,e,f,g]))},
b_(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.jO(q),s.b+r.jP(q),s.c)},
aF(a){var s=this.c,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.oN(a)),r.i("M<1>"))},
oo(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.an(a,"roomId","not a portal endpoint"))
r=this.b_(o)
q=b.al(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aJ(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
gp_(){return B.a.br(this.b,0,new A.oO(),t.S)},
j4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.U
s=A.e([new A.aX(a,B.U)],t.nR)
r=A.aJ([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.ov(s,0)
n=o.a
m=o.b
for(l=this.aF(n),k=J.R(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.bJ(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.aX(i,h))}}}return B.U}}
A.oK.prototype={
$1(a){var s=this.a
return new A.b(a.a*s,a.b,a.c*s)},
$S:44}
A.oL.prototype={
$1(a){return a.a7(0,1.5)},
$S:44}
A.oM.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:88}
A.oJ.prototype={
$0(){return A.e([],t.wx)},
$S:89}
A.oN.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:90}
A.oO.prototype={
$2(a,b){return A.c(a)+t.U.a(b).e.length},
$S:91}
A.nL.prototype={}
A.r0.prototype={
jN(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a4(s,new A.r1())}else s=!1
return s}}
A.r1.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.oy.prototype={
ol(a){var s=this.e,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.oB(a)),r.i("M<1>"))},
cD(a){return B.a.aR(this.d,new A.oz(a),new A.oA(a))},
eP(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.m("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.m("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.d(A.m("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a2(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.m("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.m("invalid bounds for inventory asset "+m))}j=A.a2(s)
i=A.a2(s)
h=A.a2(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.m("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.m(a7+m+" references "+l))
n=a6.cD(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.Ak()
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
a4=g.jc(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.m(a7+m+" escapes "+f.a))}}}
A.oB.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:92}
A.oz.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:93}
A.oA.prototype={
$0(){return A.j(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cN.prototype={}
A.cs.prototype={
jc(a,b){var s=this.f.c.b*b,r=a.f
return new A.b(r.a.b*s,r.b.b*s,0)}}
A.oY.prototype={}
A.oW.prototype={}
A.uG.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.oX.prototype={
B(){var s,r,q,p=A.p(t.N,t.z),o=this.a,n=A.q(o).i("ae<1>")
n=A.J(new A.ae(o,n),n.i("o.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
eK(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.eI)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.G(0)
for(q=new A.I(r,A.q(r).i("I<1,2>")).gt(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aL(o)||o<0)throw A.d(B.eY)
s.k(0,n,o)}}}
A.cP.prototype={}
A.jS.prototype={
ji(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.ea)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cP(new A.b(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.lP(j),0.06))}}B.a.S(s,new A.oC(b))
return A.i_(s,0,A.e8(4,"count",t.S),t.A_).bN(0)},
lP(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oC.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.ao(0,s).gu(0),b.a.ao(0,s).gu(0))},
$S:95}
A.hk.prototype={
A(){return"Floor."+this.b}}
A.dJ.prototype={
A(){return"Facing."+this.b}}
A.b6.prototype={
sjM(a){this.w=A.U(a)}}
A.br.prototype={
bJ(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aJ(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.an(a,"roomId","not an endpoint of "+s.a))},
al(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.an(a,"roomId","not an endpoint of "+s.a))}}
A.bd.prototype={}
A.bf.prototype={}
A.da.prototype={}
A.dp.prototype={}
A.aU.prototype={}
A.oE.prototype={
ng(a){return B.a.aR(this.c,new A.oF(a),new A.oG(a))},
oX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.m("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.m("soundscape source changed: "+f))
f=t.N
s=A.a2(f)
f=A.p(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){m=r[p]
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
if(k.gN(k)||k.gaA().M(0,new A.oH()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
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
A.oF.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:96}
A.oG.prototype={
$0(){return A.j(A.m("sound emitter missing: "+this.a))},
$S:6}
A.oH.prototype={
$1(a){return B.b.bd(A.x(a)).length===0},
$S:3}
A.cM.prototype={}
A.ou.prototype={
dG(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.an(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.im}q=A.e([],t.Fm)
p=B.d.aS(r)+1
o=B.d.aS(b)
for(n=p;n<=o;++n){m=B.c.P(n,24)
B.a.l(q,new A.ep("tick"))
if(B.c.P(m,3)===0){B.a.l(q,new A.ep("cuckoo"))
B.a.l(q,new A.ep("bell"))}if(B.c.P(m,6)===0)B.a.l(q,new A.ep("chime"))}l.b=b
return q}}
A.ep.prototype={}
A.oD.prototype={
dG(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.an(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.il}q=A.e([],t.vS)
for(p=B.d.aS(r)+1;p<=B.d.aS(b);++p){o=B.c.P(p,24)
n=B.c.P(o,4)
if(n===2)B.a.l(q,B.hb)
if(B.c.P(o,3)===1)B.a.l(q,B.hd)
if(B.c.P(o,8)===5)B.a.l(q,B.hg)
if(B.c.P(o,5)===0)B.a.l(q,B.hc)
if(B.c.P(o,7)===3)B.a.l(q,B.hh)
if(n===1)B.a.l(q,B.he)
if(B.c.P(o,6)===4)B.a.l(q,B.hf)}m.b=b
return q}}
A.cL.prototype={}
A.uF.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.oI.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.p(m,l)
for(s=n.a,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.N(["open",o.a,"locked",o.b],m,r))}l=A.p(m,l)
for(s=n.c,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.N(["lit",o.a,"examined",o.b],m,r))}return A.N(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a2(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.a2(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.a2(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wD(new A.ae(o,A.q(o).i("ae<1>")),d)){d=f.b
if(A.wD(new A.ae(d,A.q(d).i("ae<1>")),r)){d=f.c
e=!A.wD(new A.ae(d,A.q(d).i("ae<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.fh)
e=f.d
if(e<0||e>2)A.j(B.eP)
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
A.hI.prototype={
B(){return A.N(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hy.prototype={
B(){return A.N(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bc.prototype={}
A.nG.prototype={
$1(a){return this.a.q(0,A.x(a))},
$S:3}
A.dM.prototype={
A(){return"Hand."+this.b}}
A.rC.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
f2(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.k4.prototype={
B(){var s,r,q,p=t.N,o=A.p(p,t.D)
for(s=this.a,r=0;r<5;++r){q=B.y[r]
o.k(0,q,s.h(0,q))}return A.N(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.S(B.y,t.oI.a(new A.pe(this)),t.jT).a6(0," \xb7 ")}}
A.pd.prototype={
$2(a,b){return new A.P(A.x(a),A.x(b),t.q)},
$S:97}
A.pe.prototype={
$1(a){return this.a.a.h(0,A.x(a))},
$S:29}
A.bT.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.N(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.p_.prototype={
bW(a){t.G.a(a)
return a.a===5&&B.a.a4(B.y,new A.p6(this,a))},
fc(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bW(b))return null
s=this.e++
r=new A.bT(s,a,A.e([A.pc(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dN(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bW(b))return!1
B.a.l(s.c,A.pc(b,c,B.av))
return!0},
mb(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bW(b))return!1
s.r=A.pc(b,0,B.cs)
return!0},
jF(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
oY(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.q(n).c)
B.a.X(n)
s=A.e([],t.cs)
for(r=q.b,r=new A.ah(r,r.r,r.e,A.q(r).i("ah<2>"));r.m();)s.push(r.d.B())
return A.N(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.p6.prototype={
$1(a){var s
A.x(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.h7.prototype={
A(){return"BackendFallbackReason."+this.b}}
A.n_.prototype={
hu(a,b){if(a.a!==B.Z)return a
return new A.f3(B.bi,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.n0.prototype={
dO(a,b){if(a.a===B.Z&&!a.d)return new A.pN(b,a.B(),B.d4)
return new A.pa(b,a.d,a.e,a.B(),B.d4)},
n6(a){return this.dO(a,null)}}
A.f3.prototype={
B(){var s,r=this,q=A.p(t.N,t.X)
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
A.n1.prototype={
ci(a){var s,r,q,p,o=null,n=a==null?o:B.b.bd(a).toLowerCase()
if(n==null||n.length===0)return B.dH
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.f3(B.Z,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.f3(B.bi,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.pb.prototype={}
A.pa.prototype={
gbm(){var s=this,r=s.b,q=r==null?null:r.gbm()
if(q==null)q=A.qd("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jj(s.e)
return r},
bb(){if(this.f===B.d5)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.bb()
this.f=B.z},
b3(a,b){var s
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
if(this.f!==B.z)A.j(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.b3(a,b)},
b5(a){var s
if(this.f!==B.z)A.j(A.m("legacy backend is not ready"))
B.k.ah(A.N(["backend","legacy","interpolation",0,"facts",A.m_(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.b5(a)},
bs(a){var s
if(this.f!==B.z)A.j(A.m("legacy backend is not ready"))
B.k.ah(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bs(a)}}
A.pO.prototype={}
A.pN.prototype={
gbm(){var s=this.b,r=s==null?null:s.gbm()
if(r==null)r=A.qd("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jj(this.c)
return s},
bb(){if(this.d===B.d5)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.bb()
this.d=B.z},
b3(a,b){var s
if(this.d!==B.z)A.j(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.y("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.b3(a,b)},
b5(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.az){p=q==null
if(p||!q.gdK()){if(s.d!==B.az)A.j(A.m("pixeldart backend is not context-lost"))
s.d=B.z
if(!p)q.j9()}p=s.d
if(p===B.az)return}if(p!==B.z)A.j(A.m(r))
B.k.ah(A.N(["backend","pixeldart","interpolation",0,"facts",A.m_(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdK()){if(s.d!==B.z)A.j(A.m(r))
s.d=B.az
q.iW()
return}q.b5(a)}},
bs(a){var s
if(this.d!==B.z)A.j(A.m("pixeldart backend is not ready"))
B.k.ah(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bs(a)}}
A.pP.prototype={
mu(a,b){var s,r,q,p,o,n,m
a.C()
s=B.bS.ci(a)
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
A.hO.prototype={
A(){return"RendererBackendKind."+this.b}}
A.ez.prototype={
A(){return"RendererBackendState."+this.b}}
A.qe.prototype={}
A.kv.prototype={}
A.qc.prototype={
ki(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.y("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.y("renderer provenance values must be non-empty",null))}},
jj(a){var s=this
return A.xP(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
B(){var s,r,q,p=this,o=A.p(t.N,t.z)
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
A.bN.prototype={
A(){return"SleepQuality."+this.b}}
A.bu.prototype={
A(){return"SleepLocation."+this.b}}
A.fv.prototype={}
A.nw.prototype={
d6(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jS(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.N(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.N(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nx.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:98}
A.ny.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:99}
A.jW.prototype={
A(){return"InteractionType."+this.b}}
A.eI.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.rH.prototype={}
A.eH.prototype={}
A.jn.prototype={}
A.oP.prototype={}
A.oT.prototype={
eT(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.S(p,new A.oU())
return p},
mD(a,b){var s,r,q,p,o,n=b.b
if(n.gN(n))return B.lQ
s=t.N
r=A.a2(s)
q=A.a2(s)
for(s=n.gZ(),s=s.gt(s),p=a.c;s.m();){o=s.gn()
if(B.a.gU(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eH(B.aE,r)
s=r.a
o=B.a.gU(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.gU(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.eH(B.dv,r)
return new A.eH(B.bC,r)},
lG(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jn(e,!1,B.lP,null)
s=p.d===c
r=this.mD(p,d)
q.oY(e)
return new A.jn(e,s,r,r.a===B.aE&&s?'The world says "'+d.c+'". The entry says "'+B.a.gU(p.c).p(0)+'".':null)},
n7(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aE)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.oP(B.a.gU(s.c).p(0)+" but "+A.w(a.f))}}
A.oU.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:14}
A.cf.prototype={
A(){return"RuptureStep."+this.b}}
A.qj.prototype={}
A.cR.prototype={}
A.qk.prototype={
gf3(){var s=B.ba.h(0,this.a)
return s==null?0:s},
jW(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.C)s=q.e
else s=!0
if(s)return B.cC
r=A.wr(b)
s=q.c
B.a.G(s)
B.a.K(s,r)
B.a.G(q.d)
q.a=B.ab
q.b=0
q.e=!1
return A.e([B.ea],t.xB)},
md(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.y("rupture advance must be a finite non-negative duration",null))
if(l.a===B.C||a===0)return B.cC
s=A.e([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.C))break
A:{q=l.a
p=B.ba.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a_)l.m0(s)
p=l.b
o=B.ba.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cR())
if(q===B.a_){l.a=B.C
l.b=0
l.e=!0
B.a.l(s,B.e9)}else{p=q.a+1
if(!(p<7))return A.f(B.cA,p)
l.a=B.cA[p]
l.b=0
B.a.l(s,new A.cR())}}}return A.aj(s,t.F3)},
B(){var s=this,r=t.N
return A.N(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.aj(s.c,r),"extinguishedMantles",A.aj(s.d,r),"completed",s.e],r,t.z)},
m0(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.c.L(B.d.aS(l.b/l.gf3()*A.aj(s,r).length),0,A.aj(s,r).length)
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
B.a.l(a,new A.cR())}}}
A.jI.prototype={
gbv(){var s=this.b
if(s<6||s>18)return 0
return B.d.L((s-6)/12,0,1)}}
A.eG.prototype={
B(){var s=this
return A.N(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rD.prototype={
er(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aT(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.uh.prototype={
$0(){var s,r,q=this.b,p=(this.a^q*73244475)&2147483647
p=(p^p>>>16)*73244475&2147483647
p=(p^p>>>16)&2147483647
s=B.c.P(p,5)===0||B.c.P(p,7)===0
r=s?0.35+B.c.P(p,66)/100:0
return new A.eG(q,s,r,12-(q-1)*0.1)},
$S:100}
A.up.prototype={
$1(a){var s=B.c.cB(this.a,a)&255
return B.c.L(B.d.aH(s+((B.c.cB(this.b,a)&255)-s)*this.c),0,255)},
$S:34}
A.pt.prototype={
nz(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
mf(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gI(),q=q.gt(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.q(k).i("I<1,2>")
k=A.J(new A.I(k,j),j.i("o.E"))
B.a.S(k,new A.pv())
j=t.N
k=A.vP(k,j,j)
s=this.b
r=A.q(s).i("I<1,2>")
s=A.J(new A.I(s,r),r.i("o.E"))
B.a.S(s,new A.pw())
s=A.vP(s,j,j)
r=A.p(j,t.P)
q=this.c
p=A.q(q).i("I<1,2>")
q=A.J(new A.I(q,p),p.i("o.E"))
B.a.S(q,new A.px())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.N(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.N(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pv.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:21}
A.pw.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:21}
A.px.prototype={
$2(a,b){var s=t.gJ
return B.b.F(s.a(a).a,s.a(b).a)},
$S:102}
A.cG.prototype={
B(){var s=this
return A.N(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.r5.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fx(e.a),c=t.N,b=t.P,a=A.p(c,b)
for(s=e.b,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.m6(q,r.b))}s=A.fx(e.r)
q=A.fx(e.w)
p=A.fx(e.x)
o=A.p(c,t.rW)
for(n=e.as,n=new A.I(n,A.q(n).i("I<1,2>")).gt(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.R(l.b);i.m();){h=i.gn()
j.push(A.N(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.p(c,b)
for(m=e.at,m=new A.I(m,A.q(m).i("I<1,2>")).gt(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.p(c,b)
for(m=e.ax,m=new A.I(m,A.q(m).i("I<1,2>")).gt(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.N(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
m6(a,b){var s,r=A.fx(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fx(q.bH(0,new A.r6(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gV(s))r.k(0,"_ambient",A.fx(s.bH(0,new A.r7(),t.S,t.z)))
return r}}
A.r6.prototype={
$2(a,b){return new A.P(A.c(a),t.BX.a(b).B(),t.pr)},
$S:103}
A.r7.prototype={
$2(a,b){return new A.P(A.c(a),t.vw.a(b).B(),t.pr)},
$S:104}
A.eF.prototype={
B(){return A.N(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eE.prototype={
B(){return A.N(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.i5.prototype={
B(){var s=t.N
return A.N(["field",this.a,"value",this.b],s,s)}}
A.l_.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.N(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.ey.prototype={
B(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gV(s))q.k(0,"effects",s)
return q}}
A.cZ.prototype={
B(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gV(s))q.k(0,"when",s)
return q}}
A.r8.prototype={
c9(){var s=0,r=A.bD(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$c9=A.bG(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.am(A.aY(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$c9)
case 6:n=b
j=t.N
s=7
return A.am(A.aY(A.a(n.text()),j),$async$c9)
case 7:m=b
l=A.Ft(m)
i=J.aG(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aG(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aG(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aG(l,"documents")
i.toString
h.a(i)
i=J.aG(l,"street")
i.toString
h.a(i)
i=J.aG(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aG(l,"nights")
i.toString
h.a(i)
i=J.aG(l,"endings")
i.toString
o.w=h.a(i)
i=J.aG(l,"records")
i.toString
o.x=h.a(i)
i=J.aG(l,"cues")
i.toString
h.a(i)
i=J.aG(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aG(l,"reactions"))){g=J.aG(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.p(j,t.z)
o.Q=h.a(g)
if(i.b(J.aG(l,"variants"))){g=J.aG(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.p(j,t.z)
o.as=h.a(g)
if(i.b(J.aG(l,"residues"))){g=J.aG(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.p(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.ag(e)
j=A.w(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bB(null,r)
case 1:return A.bA(p.at(-1),r)}})
return A.bC($async$c9,r)},
jn(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gI().cY(0,new A.r9())
r=p.$ti
q=t.N
return A.vP(new A.cw(p,r.i("P<i,i>(1)").a(new A.ra()),r.i("cw<1,P<i,i>>")),q,q)}return null},
jr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
k=A.p(n,n)
if(f.b(l))for(j=l.gI(),j=j.gt(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.x(i.b))}B.a.l(p,new A.ey(A.x(m.h(0,"id")),A.x(m.h(0,"label")),A.x(m.h(0,"reply")),A.b1(k,n,n)))}if(p.length<2)return g
return new A.l_(r,a,b,c,d,A.aj(p,t.Y))},
jq(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aW(p)||o!==B.d.aW(o))return n
return new A.eF(B.d.aW(p),B.d.aW(o))},
jp(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aW(p)||typeof o!="string"||typeof n!="string")return m
return new A.eE(B.d.aW(p),o,n)},
oZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.p(a5,t.ee),a7=A.p(a5,t.tQ),a8=A.p(a5,t.pG),a9=t.a,b0=A.p(a5,t.gt),b1=A.p(a5,t.sy),b2=A.p(a5,t.aS),b3=A.p(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gt(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.p(a3,a4)
for(o=o.gI(),o=o.gt(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.fq(l,null):null
if(k==null||!q.b(m.b))continue
j=A.p(a5,a5)
for(m=q.a(m.b).gI(),m=m.gt(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.x(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.p(a3,r)
for(m=n.$ti.i("cc<1>"),l=new A.cc(n,n.r,n.e,m);l.m();){i=l.d
g=a1.jq(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.p(a3,s)
for(m=new A.cc(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jp(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.ah(b4,b4.r,b4.e,A.q(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jr(A.x(d.h(0,"visitor")),B.d.aW(A.aA(d.h(0,"day"))),A.x(d.h(0,"tier")),B.d.aW(A.aA(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.ah(b4,b4.r,b4.e,A.q(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.p(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gI(),s=s.gt(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.x(r.b))}s=A.x(d.h(0,"id"))
b2.k(0,s,new A.cZ(s,A.x(d.h(0,"target")),A.x(d.h(0,a2)),A.b1(b,a5,a5)))}b4=a1.at
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gt(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gt(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.R(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.i5(A.x(a0.h(0,"field")),A.x(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.r5(A.p(a3,a4),a6,a7,a8,A.p(a5,a9),A.p(a5,a9),A.p(a3,a9),A.p(a3,a9),A.p(a3,a9),A.p(a5,a9),A.p(a5,a9),A.p(a5,a9),b0,b1,b2,b3)}}
A.r9.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:105}
A.ra.prototype={
$1(a){t.AC.a(a)
return new A.P(A.x(a.a),A.x(a.b),t.q)},
$S:106}
A.j6.prototype={
bE(a,b,c){var s=B.b.bd(a),r=B.b.bd(c)
if(r.length===0)return""
if(b||this.a===B.bE)return s.length===0?r:s+": "+r
if(this.a===B.bD)return r
return s.length===0?r:s+": "+r},
iL(a,b){return this.bE(a,!1,b)}}
A.vD.prototype={}
A.cE.prototype={
A(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dA.prototype={
bX(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dA(q,p,o,n,m)},
n1(a){var s=null
return this.bX(s,s,s,a,s)},
n4(a){var s=null
return this.bX(s,s,s,s,a)},
mY(a){var s=null
return this.bX(s,s,a,s,s)},
mW(a){var s=null
return this.bX(s,a,s,s,s)},
mH(a){var s=null
return this.bX(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.N(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.ml.prototype={
$1(a){return a==null?null:A.U(a)},
$S:107}
A.mj.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:36}
A.mk.prototype={
$0(){return A.j(B.fw)},
$S:6}
A.mw.prototype={
cj(a,b){var s,r=this,q=r.e.iL(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aI(q)
A.c(A.a(v.G.window).setTimeout(A.yT(new A.my(r)),7000))},
aI(a){var s,r,q=this
if(!q.c||B.b.bd(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.c(A.a(v.G.window).setTimeout(A.yT(new A.mx(q,s)),4200))}}
A.my.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:109}
A.mx.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cp.prototype={
A(){return"AudioOutputMode."+this.b}}
A.cF.prototype={
A(){return"AudioDynamicRange."+this.b}}
A.d8.prototype={
A(){return"AudioReverbMode."+this.b}}
A.d7.prototype={
A(){return"AudioDuckingMode."+this.b}}
A.dB.prototype={
cF(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dB(r,q,p,a==null?s.e:a)},
mV(a){return this.cF(null,null,a,null)},
mM(a){return this.cF(null,a,null,null)},
n_(a){return this.cF(null,null,null,a)},
mL(a){return this.cF(a,null,null,null)},
B(){var s=this
return A.N(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mJ.prototype={
$1$2(a,b,c){return B.a.aR(c.i("o<0>").a(a),new A.mK(b,c),new A.mL(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:110}
A.mK.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.mL.prototype={
$0(){return A.j(A.a7("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.n3.prototype={
eN(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.I.iL(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.n6.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:1}
A.na.prototype={
$1(a){A.a(a)
return this.a.$1(A.U(this.b.checked))},
$S:1}
A.n9.prototype={
$1(a){var s
A.a(a)
s=A.fp(A.x(this.a.value))
if(s!=null)this.b.$1(s)},
$S:2}
A.n8.prototype={
$1(a){A.x(a)
return a.length!==0&&!B.b.W(a,"brush-state-")},
$S:3}
A.dD.prototype={
A(){return"BrushComponentKind."+this.b}}
A.dE.prototype={
A(){return"BrushComponentState."+this.b}}
A.b_.prototype={
gm9(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bd(s.a).length===0||B.b.bd(s.c).length===0)throw A.d(B.fm)
if(s.e===B.bP&&s.b!==B.bO)throw A.d(B.eZ)}}
A.fa.prototype={
gmo(){var s,r,q,p,o=t.N
o=A.p(o,o)
for(s=this.r.gI(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aC(r)
o.k(0,q,p.gN(r)?"":p.gO(r))}return o},
bC(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.N(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bz(r)
q=n.h(0,i)
q.toString
A.bz(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
return A.fb(null,a,A.U(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bz(r)
q=n.h(0,i)
q.toString
A.bz(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gmo()
return A.fb(l,null,m,r,p,o,s,q)},
dM(a){var s=null
return this.bC(a,s,s,s,s,s)},
mS(a){var s=null
return this.bC(s,s,s,a,s,s)},
mT(a){var s=null
return this.bC(s,s,s,s,a,s)},
mP(a){var s=null
return this.bC(s,a,s,s,s,s)},
mQ(a){var s=null
return this.bC(s,s,a,s,s,s)},
n5(a){var s=null
return this.bC(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.eK)
p=this.r
if(p.gI().M(0,new A.no()))throw A.d(B.fp)
if(p.gI().M(0,new A.np()))throw A.d(B.fd)
p=p.gaA()
o=A.q(p)
s=o.i("hi<o.E,i>")
r=s.i("M<o.E>")
q=A.J(new A.M(new A.hi(p,o.i("o<i>(o.E)").a(new A.nq()),s),s.i("n(o.E)").a(new A.nr()),r),r.i("o.E"))
if(A.hx(q,A.H(q).c).a!==q.length)throw A.d(B.eN)},
B(){var s,r,q=this,p=t.N,o=A.p(p,t.a)
for(s=q.r.gI(),s=s.gt(s);s.m();){r=s.gn()
o.k(0,r.a,A.at(r.b,!0,p))}return A.N(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.no.prototype={
$1(a){t.yx.a(a)
return J.vB(a.b,new A.nn(a))},
$S:37}
A.nn.prototype={
$1(a){var s
A.x(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xg(a)
else s=!1
return s},
$S:3}
A.np.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.vB(a.b,B.d8.gap(B.d8))},
$S:37}
A.nq.prototype={
$1(a){return t.a.a(a)},
$S:168}
A.nr.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.nm.prototype={
$1(a){return typeof a=="string"},
$S:16}
A.dC.prototype={
A(){return"BindingCaptureStatus."+this.b}}
A.ed.prototype={
A(){return"BindingConflictResolution."+this.b}}
A.d9.prototype={}
A.jo.prototype={
dH(a){var s=this
if(!s.a.r.R(a))return new A.d9(B.bL,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.dI},
mv(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aJ
if(!A.xg(a)){p.c=p.b=null
return new A.d9(B.bN,B.d9.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gI()
r=r.gt(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.x7(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.d9(B.aK,a+" is already bound to "+s)}return p.kt(a)},
eJ(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aJ
switch(a.a){case 2:m.c=m.e=m.d=null
return B.dJ
case 1:s=A.wi(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wA(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.wL(r,k))
m.a=m.a.dM(s)
break
case 0:s=A.wi(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gO(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.i_(p,1,null,A.H(p).c)
o=p.$ti
p=new A.aS(p,p.gu(0),o.i("aS<a6.E>"))
o=o.i("a6.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.wL(r,k)}else{r=s.h(0,j)
r.toString
r=A.wA(A.wL(r,k),q)}s.k(0,j,r)
m.a=m.a.dM(s)
break}m.c=m.e=m.d=null
return B.bJ},
kt(a){var s,r,q=this,p=q.b
if(p==null)return B.aJ
s=A.wi(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wA(r,a))
q.a=q.a.dM(s)
q.b=null
return B.bJ}}
A.hd.prototype={
k9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jo(f.w)
s=f.b
s.className=A.x(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.n7(a,B.dS,1)))
A.a(s.appendChild(A.C(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.C(a,"div",c,e)
f.fa(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fa(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dd(a,r,"invertX","Invert horizontal look")
f.dd(a,r,"invertY","Invert vertical look")
f.dd(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.C(a,"div",c,e)
for(p=B.iL.gI(),p=p.gt(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fb(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mi(l)?"unbound":J.x9(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dF(a,new A.b_("settings.controls.bind."+m,B.bO,n,h,B.n),new A.nk(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.C(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.C(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.dC()
A.a(s.appendChild(A.dF(a,B.dT,new A.nl(f),e)))},
j0(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fz(this.x.mv(A.x(a.code)))},
fz(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aK?B.dX:B.n
p=o.Q.h(0,r)
if(p!=null)A.vF(p,q)}n=a.a
if(n===B.aK)o.lS()
else if(n===B.bM){n=o.x
n===$&&A.h()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dC()}else{o.dh()
o.ax=null}},
lS(){var s,r,q,p,o
this.dh()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.hH[r]
p=A.k(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dF(p,new A.b_("settings.controls.resolve."+o,B.E,o,"resolve key binding conflict",B.n),new A.nj(this,q),null)))}},
dh(){var s,r=this.at
if(r==null)return
while(A.k(r.firstChild)!=null){s=A.k(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dC(){var s,r,q,p
for(s=this.Q,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.h()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mi(p)?"unbound":J.x9(p," / ")
r.textContent=q
A.vF(r,B.n)}},
fa(a,b,c,d,e,f){var s,r=A.C(a,"label","setting-row",null)
A.a(r.appendChild(A.C(a,"span",null,d)))
s=A.AG(a,new A.b_("settings.controls."+c,B.dV,d,null,B.n),f,e,new A.nh(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
dd(a,b,c,d){var s=A.C(a,"label","setting-toggle",null),r=A.AH(a,new A.b_("settings.controls."+c,B.dW,d,null,B.n),!1,new A.ni(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.C(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
fv(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seA(a){this.f=t.pf.a(a)},
sb1(a){this.r=t.Z.a(a)}}
A.nk.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.h()
s=n.dH(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bK){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.vF(q,B.bP)}p.dh()
return null},
$S:0}
A.nl.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nj.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.h()
return s.fz(r.eJ(this.b))},
$S:0}
A.nh.prototype={
$1(a){var s=this.a,r=s.w
s.fv(this.b==="horizontalSensitivity"?r.mQ(a):r.n5(a))},
$S:113}
A.ni.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mS(a)
break A}if("invertY"===q){s=r.w.mT(a)
break A}s=r.w.mP(a)
break A}r.fv(s)},
$S:7}
A.ns.prototype={
ka(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.C(s,"h1","journal-title","credits")))
r=A.C(s,"p","credits-body",null)
p.f!==$&&A.K()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.C(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.C(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.nt(p)))
A.a(o.appendChild(q))}}
A.nt.prototype={
$1(a){A.a(a)
return this.a.a3()},
$S:1}
A.nA.prototype={
kc(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.C(a,i,"door-speaker",j)
k.c!==$&&A.K()
k.c=s
r=A.C(a,i,"door-line",j)
k.d!==$&&A.K()
k.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(h.appendChild(s))
A.a(h.appendChild(r))
r=A.C(a,i,"door-cite-list",j)
k.f!==$&&A.K()
k.f=r
s=A.C(a,i,"door-cite-result",j)
k.r!==$&&A.K()
k.r=s
A.a(h.appendChild(r))
A.a(h.appendChild(s))
for(s=A.iU,r=k.w,q=0;q<5;++q){p=B.i1[q]
o=A.a(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.nB(k,p)
if(typeof n=="function")A.j(A.y("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.eb()]=n
o.addEventListener("click",m)
A.a(h.appendChild(o))
B.a.l(r,o)}s=A.C(a,"button","door-continue","continue")
k.e!==$&&A.K()
k.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.nC(k)))
A.a(h.appendChild(s))
l=A.Z(new A.nD(k,a))
k.y=l
h.addEventListener("keydown",l)
A.a(A.k(a.body).appendChild(h))},
f_(a,b){var s,r,q,p=this
p.ax=!0
s=p.c
s===$&&A.h()
s.textContent=a
s=p.d
s===$&&A.h()
s.textContent=B.I.bE("",!0,b)
for(s=p.w,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.a(s[q].style).display=""
r=p.e
r===$&&A.h()
A.a(r.style).display="none"
r=p.f
r===$&&A.h()
r.textContent=""
r=p.r
r===$&&A.h()
r.textContent=""
r=p.a
r.className="door visible"
r.removeAttribute("hidden")
B.a.gO(s).focus()},
f0(a,b){var s,r,q,p=this,o=p.d
o===$&&A.h()
o.textContent=B.I.bE("",!0,a)
for(o=p.w,s=o.length,r=0;r<o.length;o.length===s||(0,A.r)(o),++r)A.a(o[r].style).display="none"
for(o=p.x,s=o.length,r=0;r<o.length;o.length===s||(0,A.r)(o),++r)A.a(o[r].style).display="none"
o=p.e
o===$&&A.h()
s=A.a(o.style)
q=b?"none":""
s.display=q
q=p.r
q===$&&A.h()
q.textContent=""
if(!b)o.focus()},
jJ(a){return this.f0(a,!1)},
jL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.DX.a(a)
for(s=g.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].remove()
B.a.G(s)
r=g.e
r===$&&A.h()
r=A.a(r.style)
p=b==null
o=p?"none":""
r.display=o
for(r=a.length,o=g.a,n=!p,m=A.iU,l=g.b,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){k={}
j=a[q]
k.a=null
k.a=j.a
i=A.a(l.createElement("button"))
i.className="door-reaction"
i.textContent=j.b
i.setAttribute("type","button")
j=new A.nF(k,g)
if(typeof j=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
h=function(c,d){return function(e){return c(d,e,arguments.length)}}(m,j)
h[$.eb()]=j
i.addEventListener("click",h)
if(n){i.disabled=!0
if(k.a===b)i.setAttribute("aria-pressed","true")}A.a(o.appendChild(i))
B.a.l(s,i)}if(s.length!==0&&p)B.a.gO(s).focus()},
f1(a,b){var s,r,q=this.d
q===$&&A.h()
q.textContent=B.I.bE("",!0,a+"\n\n"+b)
for(q=this.x,s=q.length,r=0;r<q.length;q.length===s||(0,A.r)(q),++r)q[r].disabled=!0
q=this.e
q===$&&A.h()
A.a(q.style).display=""
q.focus()},
jI(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.iU,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nE(o,this)
if(typeof o=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eb()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
cP(){var s,r,q,p,o=this
o.ax=!1
s=o.f
s===$&&A.h()
s.textContent=""
s=o.r
s===$&&A.h()
s.textContent=""
for(s=o.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].remove()
B.a.G(s)
s=o.a
s.className="door"
s.setAttribute("hidden","")
p=o.y
if(p!=null){s.removeEventListener("keydown",p)
o.y=null}},
snX(a){this.z=t.f_.a(a)},
snZ(a){this.Q=t.Z.a(a)},
snY(a){this.as=t.vR.a(a)},
so9(a){this.at=t.f_.a(a)}}
A.nB.prototype={
$1(a){var s
A.a(a)
s=this.a.z
return s==null?null:s.$1(this.b)},
$S:1}
A.nC.prototype={
$1(a){var s
A.a(a)
s=this.a.Q
return s==null?null:s.$0()},
$S:1}
A.nD.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.a(a)
s=this.a
if(!s.ax||A.x(a.code)!=="Tab")return
r=A.e([],t.W)
for(q=s.w,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.x(A.a(n.style).display)!=="none")r.push(n)}for(q=s.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.x(A.a(n.style).display)!=="none")r.push(n)}q=s.e
q===$&&A.h()
if(A.x(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.h()
m=A.a(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.c(m.length);++l){k=A.k(m.item(l))
if(s.b(k))B.a.l(r,k)}if(r.length===0)return
j=A.k(this.b.activeElement)
if(A.U(a.shiftKey)){if(j===B.a.gO(r)||!B.a.q(r,j)){a.preventDefault()
B.a.gU(r).focus()}}else if(j===B.a.gU(r)||!B.a.q(r,j)){a.preventDefault()
B.a.gO(r).focus()}},
$S:2}
A.nF.prototype={
$1(a){var s
A.a(a)
s=this.b.at
return s==null?null:s.$1(this.a.a)},
$S:1}
A.nE.prototype={
$1(a){var s
A.a(a)
s=this.b.as
return s==null?null:s.$1(this.a.a)},
$S:1}
A.nI.prototype={
kd(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.C(s,"h1","journal-title",null)
o.f!==$&&A.K()
o.f=r
q=A.C(s,"div","ending-copy",null)
o.r!==$&&A.K()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.C(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.nJ(o)))
A.a(n.appendChild(p))},
jK(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bI()},
so1(a){this.w=t.Z.a(a)}}
A.nJ.prototype={
$1(a){var s
A.a(a)
s=this.a
s.a3()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.o9.prototype={}
A.dd.prototype={
A(){return"GameplayInteractionMode."+this.b}}
A.cH.prototype={
A(){return"GameplayPromptDensity."+this.b}}
A.cI.prototype={
A(){return"GameplayTextPacing."+this.b}}
A.de.prototype={
A(){return"GameplayJournalLayout."+this.b}}
A.dc.prototype={
A(){return"GameplayConfirmationLevel."+this.b}}
A.df.prototype={
A(){return"GameplaySaveFeedback."+this.b}}
A.c9.prototype={
A(){return"GameplayFocusLossBehavior."+this.b}}
A.fh.prototype={
ba(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.vH(n,b==null?s.x:b,l,r,o,q,m,p)},
mJ(a){var s=null
return this.ba(s,a,s,s,s,s,s,s)},
mR(a){var s=null
return this.ba(s,s,s,a,s,s,s,s)},
mX(a){var s=null
return this.ba(s,s,s,s,s,a,s,s)},
n2(a){var s=null
return this.ba(s,s,s,s,s,s,s,a)},
mU(a){var s=null
return this.ba(s,s,s,s,a,s,s,s)},
mI(a){var s=null
return this.ba(a,s,s,s,s,s,s,s)},
n0(a){var s=null
return this.ba(s,s,s,s,s,s,a,s)},
mN(a){var s=null
return this.ba(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.N(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.oa.prototype={
$1$2(a,b,c){var s
A.zA(c,t.Ct,"T","call")
c.i("o<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.d(A.a7("invalid gameplay setting: "+a,null,null))
return B.a.aR(b,new A.ob(s,c),new A.oc(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:115}
A.ob.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("n(0)")}}
A.oc.prototype={
$0(){return A.j(A.a7("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cq.prototype={
A(){return"GraphicsPreset."+this.b}}
A.dL.prototype={
bB(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dL(s.a,r,q,p,o,n,m)},
dL(a){var s=null
return this.bB(a,s,s,s,s,s)},
hq(a){var s=null
return this.bB(s,a,s,s,s,s)},
hr(a){var s=null
return this.bB(s,s,s,a,s,s)},
mZ(a){var s=null
return this.bB(s,s,s,s,a,s)},
mO(a){var s=null
return this.bB(s,s,a,s,s,s)},
n3(a){var s=null
return this.bB(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.iv,q))throw A.d(A.a7("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.hO,q))throw A.d(A.a7("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.iy,q))throw A.d(A.a7("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.is,q))throw A.d(A.a7("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.N(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oo.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:38}
A.op.prototype={
$0(){return A.j(B.f3)},
$S:6}
A.oq.prototype={
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.oi.prototype={}
A.oj.prototype={}
A.ho.prototype={
ke(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.a(l.appendChild(A.C(a,"h1","journal-title","Graphics")))
A.a(l.appendChild(A.C(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.C(a,"div","settings-grid",n)
r=t.N
o.bQ(a,s,"preset","quality preset",A.N(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bQ(a,s,"renderScale","render scale",A.N(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bQ(a,s,"frameTarget","frame target",A.N(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bQ(a,s,"antialiasing","anti-aliasing",A.N(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bQ(a,s,"textureQuality","texture quality",A.N(["high","High","medium","Medium","low","Low"],r,r))
q=A.C(a,"label","setting-toggle",n)
r=A.a(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.Z(new A.om(o)))
r=o.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.C(a,"span",n,"Dynamic resolution")))
A.a(s.appendChild(q))
A.a(l.appendChild(s))
r=A.C(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.a(l.appendChild(r))
p=A.C(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.Z(new A.on(o)))
A.a(l.appendChild(p))},
bQ(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.C(a,"label","setting-row",null)
A.a(s.appendChild(A.C(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.I(e,A.q(e).i("I<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.ol(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
fC(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
eZ(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a6(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seA(a){this.f=t.CA.a(a)},
sb1(a){this.r=t.Z.a(a)}}
A.om.prototype={
$1(a){var s
A.a(a)
s=this.a
s.fC(s.z.hq(A.U(s.x.checked)))},
$S:2}
A.on.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a3()},
$S:2}
A.ol.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.x(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.hr(B.a.aj(B.cz,new A.ok(s)))
break A}if("renderScale"===q){p=r.z.mZ(s)
break A}if("frameTarget"===q){p=r.z.mO(s)
break A}if("antialiasing"===q){p=r.z.dL(s)
break A}if("textureQuality"===q){p=r.z.n3(s)
break A}p=r.z
break A}r.fC(p)},
$S:2}
A.ok.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:38}
A.or.prototype={
kf(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.C(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.C(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.C(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.C(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.os(this)))
A.a(p.appendChild(r))}}
A.os.prototype={
$1(a){A.a(a)
return this.a.a3()},
$S:1}
A.p0.prototype={
bI(){var s,r=this
r.jZ()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fi(r.CW,s)
r.lK()
r.fS()},
kA(){var s,r=this,q=r.a,p=A.C(q,"div","page-turn",null),o=A.C(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.p1(r)))
s=A.C(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.p2(r)))
q=A.C(q,"span","right-day-label",null)
r.Q!==$&&A.K()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
he(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fi(s.CW+a,r)
s.fS()},
fi(a,b){if(a<1)return 1
if(a>b)return b
return a},
lK(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.eT(),r=s.length,q=A.iU,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gU(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.p3(j,n,l)
if(typeof m=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eb()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
fS(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.q(p).i("ah<2>"),n=new A.ah(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.S(r,new A.p4())
j.fR(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.ah(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.S(s,new A.p5())
j.fR(i,s)
k=B.d.L(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.a(i.style).setProperty("width",B.d.aL(k*100,1)+"%")},
fR(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.a(a.appendChild(this.l2(b[r])))},
l2(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.C(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.d.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.lj(m,!1)
l.className=A.x(l.className)+" margin"
A.a(j.appendChild(l))}return j},
lj(a,b){var s=b?"hand-line struck":"hand-line",r=A.C(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.p1.prototype={
$1(a){A.a(a)
return this.a.he(-1)},
$S:1}
A.p2.prototype={
$1(a){A.a(a)
return this.a.he(1)},
$S:1}
A.p3.prototype={
$1(a){var s,r,q
A.a(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.p4.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.p5.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.hH.prototype={
aO(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.k(this.a.body).appendChild(s))},
bI(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.x(n.className),"open"))return
s=$.pD
if(s!=null&&s!==o)s.a3()
$.pD=o
r=o.a
o.d=A.k(r.activeElement)
A.vJ(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glC())
o.e=q
r.addEventListener("keydown",q)
p=A.yR(n)
if(p.length!==0)B.a.gO(p).focus()
else n.focus()},
a3(){var s,r,q=this,p=q.b
if(!B.b.q(A.x(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pD===q)$.pD=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
j0(a){},
lD(a){A.a(a)
this.j0(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"){a.preventDefault()
this.a3()
return}if(A.x(a.code)==="Tab")this.lZ(a)},
lZ(a){var s,r=A.yR(this.b)
if(r.length===0)return
s=A.k(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.gO(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}}else if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gO(r).focus()}},
saV(a){this.c=t.Z.a(a)}}
A.be.prototype={
A(){return"PauseReason."+this.b}}
A.ce.prototype={
A(){return"PausePage."+this.b}}
A.dS.prototype={
A(){return"PauseTransitionKind."+this.b}}
A.dk.prototype={
B(){var s,r=A.p(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a_(a,b){if(b==null)return!1
return b instanceof A.dk&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gH(a){return A.cy(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dR.prototype={
ghm(){var s=this.a
return s.length===1&&B.a.gO(s).a===B.bc},
B(){var s=A.p(t.N,t.X),r=this.a,q=A.H(r),p=q.i("S<1,X<i,G?>>")
r=A.J(new A.S(r,q.i("X<i,G?>(1)").a(new A.pI()),p),p.i("a6.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.H(r)
p=q.i("S<1,i>")
r=A.J(new A.S(r,q.i("i(1)").a(new A.pJ()),p),p.i("a6.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.pI.prototype={
$1(a){return t.oP.a(a).B()},
$S:117}
A.pJ.prototype={
$1(a){return t.wJ.a(a).b},
$S:118}
A.bW.prototype={}
A.pH.prototype={
j1(a){var s,r=this
if(r.a.ghm())return new A.bW(B.Y,r.a,null)
s=r.a
s=new A.dR(B.iu,s.b,a)
r.a=s
return new A.bW(B.d_,s,"pause.resume")},
mj(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gU(p)
q=r.a.a
q=B.a.aN(q,0,q.length-1)
p=r.a
p=new A.dR(q,p.b,p.c)
r.a=p
return new A.bW(B.d0,p,s.c)}if(q.ghm()&&r.a.b.length===0)return r.cd()
return new A.bW(B.Y,r.a,null)},
cd(){var s=this.a
if(s.a.length===0)return new A.bW(B.Y,s,null)
if(s.b.length!==0)return new A.bW(B.Y,s,null)
this.a=B.bb
return new A.bW(B.d1,B.bb,s.c)},
oi(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.bW(B.Y,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.dR(s.a,r,q.a.c)
q.a=s
return new A.bW(B.d_,s,null)},
nb(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.bW(B.Y,o.a,null)
s=o.a
r=s.b
q=A.H(r)
p=q.i("M<1>")
r=A.J(new A.M(r,q.i("n(1)").a(new A.pK(a)),p),p.i("o.E"))
q=o.a.c
r=new A.dR(s.a,r,q)
o.a=r
return new A.bW(B.jJ,r,q)},
kS(a){var s
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
A.pK.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:119}
A.cz.prototype={
A(){return"PauseRootAction."+this.b}}
A.pL.prototype={
bg(a,b,c,d){var s=B.iX.h(0,c)
s.toString
A.a(b.appendChild(A.dF(a,new A.b_(s,B.E,d,null,B.n),new A.pM(this,c),null)))},
sod(a){this.f=t.Z.a(a)},
sof(a){this.r=t.Z.a(a)},
so_(a){this.w=t.Z.a(a)},
soe(a){this.x=t.Z.a(a)},
so4(a){this.y=t.Z.a(a)},
so0(a){this.z=t.Z.a(a)},
sb1(a){this.Q=t.Z.a(a)}}
A.pM.prototype={
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
A.bM.prototype={
A(){return"PauseSettingsCategory."+this.b}}
A.pW.prototype={
jH(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.I.bE("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qs.prototype={
kk(a){var s,r,q,p,o,n=this.b
n.className=A.x(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.n7(a,B.dR,1)))
A.a(n.appendChild(A.C(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.C(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.i3[r]
p=B.cM.h(0,q)
p.toString
o=B.cL.h(0,q)
o.toString
A.a(s.appendChild(A.dF(a,new A.b_(o,B.E,p,p+" settings",B.n),new A.qt(this,q),null)))}A.a(s.appendChild(A.dF(a,B.dQ,new A.qu(this),null)))
A.a(n.appendChild(s))},
snW(a){this.f=t.hQ.a(a)},
sb1(a){this.r=t.Z.a(a)}}
A.qt.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qu.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fu.prototype={
kl(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.cM.h(0,d))+" settings",a=h.b
a.className=A.x(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.n7(a0,new A.b_("settings."+(s==null?f:s)+".heading",B.al,b,g,B.n),2)))
A.a(a.appendChild(A.C(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.C(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.qQ(h)),p=B.a.gt(B.B),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.li(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.C(a0,"div",e,g)
for(s=s.a(new A.qR(h)),q=B.a.gt(B.B),o=new A.T(q,s,o);o.m();)A.a(j.appendChild(h.lY(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.F)A.a(a.appendChild(h.ky(a0)))
if(d===B.G)A.a(a.appendChild(h.kx(a0)))
if(d===B.X)A.a(a.appendChild(h.kz(a0)))
i=A.C(a0,"div",e,g)
for(s=t.pz.a(h.gla()),q=B.a.gt(B.iw),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dF(a0,new A.b_("settings."+o+".reset."+n,B.E,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.qS(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dF(a0,new A.b_("settings."+(s==null?f:s)+".reset.all",B.E,"reset all settings","restore all settings to defaults",B.dY),new A.qT(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dF(a0,new A.b_("settings."+(d==null?f:d)+".back",B.E,"return","return to settings categories",B.n),new A.qU(h),g)))},
kx(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.C(a,"div","settings-grid",j),f=k.da(a,g,"reducedMotion","reduced motion (system default)"),e=k.da(a,g,i,"photosensitivity-safe effects (system default)"),d=k.da(a,g,"captions","non-speech captions"),c=A.C(a,"label",h,j)
A.a(c.appendChild(A.C(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.qK(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.C(a,"label",h,j)
A.a(r.appendChild(A.C(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.b5[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.Z(new A.qL(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.C(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.qM(k)))
A.a(g.appendChild(l))
k.k3.K(0,A.N(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
da(a,b,c,d){var s=A.C(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.qv(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.C(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eV(a){var s,r
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
s.value=B.d.p(r==null?1:r)}s=this.k4.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a4:r).b}},
kz(a){var s,r,q=this,p="confirmations",o=A.C(a,"div","settings-grid",null)
q.bh(a,o,"interactionMode","interaction mode",B.b4,t.bK)
q.bh(a,o,"promptDensity","prompt density",B.b7,t.dn)
q.bh(a,o,"textPacing","dialogue text pacing",B.b6,t.j_)
q.bh(a,o,"journalLayout","journal layout",B.aZ,t.gm)
q.bh(a,o,p,p,B.aV,t.aJ)
q.bh(a,o,"saveFeedback","save feedback",B.b_,t.mx)
q.bh(a,o,"focusLossBehavior","when the window loses focus",B.ax,t.x)
s=A.C(a,"label","setting-toggle",null)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.Z(new A.qN(q,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.C(a,"span",null,"contextual reminders")))
A.a(o.appendChild(s))
q.id=r
return o},
bh(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.zA(f,t.Ct,"T","_addGameplaySelect")
f.i("D<0>").a(e)
s=A.C(a,"label","setting-row",null)
A.a(s.appendChild(A.C(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.Z(new A.qI(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
ju(a){var s,r,q,p,o,n,m,l,k,j,i,h
this.k1=a
for(s=this.go,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=a.w.b,q=a.r.b,p=a.f.b,o=a.e.b,n=a.d.b,m=a.c.b,l=a.b.b;s.m();){k=s.d
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
ky(a){var s,r,q=this,p=A.C(a,"div","settings-grid",null),o=t.N,n=A.p(o,o)
for(s=0;s<4;++s){r=B.b3[s].b
n.k(0,r,r)}q.ck(a,p,"output","output",n)
n=A.p(o,o)
for(s=0;s<3;++s){r=B.aY[s].b
n.k(0,r,r)}q.ck(a,p,"dynamicRange","dynamic range",n)
n=A.p(o,o)
for(s=0;s<2;++s){r=B.aX[s].b
n.k(0,r,r)}q.ck(a,p,"reverb","room effect",n)
o=A.p(o,o)
for(s=0;s<2;++s){n=B.aW[s].b
o.k(0,n,n)}q.ck(a,p,"ducking","voice intelligibility",o)
return p},
ck(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.C(a,"label","setting-row",null)
A.a(s.appendChild(A.C(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.I(e,A.q(e).i("I<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.qA(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p1.k(0,c,r)},
jt(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fE(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.W===r){s=a.c===B.aA
break A}if(B.G===r){s=a.c===B.a0
break A}if(B.F===r){s=a.c===B.D
break A}s=!1
break A}return s},
lb(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.W===s){r=a===B.aA
break A}if(B.G===s){r=a===B.a0
break A}if(B.F===s){r=a===B.D
break A}r=!1
break A}return r},
lY(a,b){var s=this,r=A.C(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.qP(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.C(a,"span",null,b.b)))
return r},
li(a,b,c,d,e){var s,r,q=this,p=A.C(a,"label","setting-row",null),o=A.C(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.C(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.qO(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aX(e,d))
return p},
eX(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.jQ
r=B.d.L(b,s.a,s.b)
q.value=B.d.p(r)
p.textContent=""+B.d.aH(r*100)+"%"},
so6(a){this.r=t.DI.a(a)},
so8(a){this.w=t.xl.a(a)},
so7(a){this.x=t.xl.a(a)},
so2(a){this.y=t.DI.a(a)},
so5(a){this.z=t.xl.a(a)},
soh(a){this.Q=t.xl.a(a)},
soc(a){this.as=t.Ci.a(a)},
sob(a){this.at=t.Z.a(a)},
sb1(a){this.ax=t.Z.a(a)},
snV(a){this.ay=t.kC.a(a)},
so3(a){this.ch=t.hq.a(a)},
snU(a){this.CW=t.Cv.a(a)},
soa(a){this.cx=t.Z.a(a)}}
A.qQ.prototype={
$1(a){t.gl.a(a)
return a.d===B.P&&this.a.fE(a)},
$S:23}
A.qR.prototype={
$1(a){t.gl.a(a)
return a.d===B.ad&&this.a.fE(a)},
$S:23}
A.qS.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.qT.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.qU.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a3()},
$S:0}
A.qK.prototype={
$1(a){var s,r,q
A.a(a)
s=this.a
r=s.k2
q=A.fp(A.x(this.b.value))
r=r.n4(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.qL.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.k2.n1(B.a.aj(B.b5,new A.qJ(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.qJ.prototype={
$1(a){return t.mq.a(a).b===A.x(this.a.value)},
$S:36}
A.qM.prototype={
$1(a){var s
A.a(a)
s=this.a.cx
return s==null?null:s.$0()},
$S:1}
A.qv.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.k2.mY(s)
break A}if("photosensitivitySafe"===q){p=r.k2.mW(s)
break A}p=r.k2.mH(s)
break A}r.k2=p
r=r.CW
if(r!=null)r.$1(p)},
$S:2}
A.qN.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.k1.mJ(A.U(this.b.checked))
s.k1=r
s=s.ch
if(s!=null)s.$1(r)},
$S:2}
A.qI.prototype={
$1(a){var s,r,q,p=this
A.a(a)
s=p.a
r=p.b
A:{if("interactionMode"===r){q=s.k1.mR(B.a.aj(B.b4,new A.qB(p.c)))
break A}if("promptDensity"===r){q=s.k1.mX(B.a.aj(B.b7,new A.qC(p.c)))
break A}if("textPacing"===r){q=s.k1.n2(B.a.aj(B.b6,new A.qD(p.c)))
break A}if("journalLayout"===r){q=s.k1.mU(B.a.aj(B.aZ,new A.qE(p.c)))
break A}if("confirmations"===r){q=s.k1.mI(B.a.aj(B.aV,new A.qF(p.c)))
break A}if("saveFeedback"===r){q=s.k1.n0(B.a.aj(B.b_,new A.qG(p.c)))
break A}q=s.k1.mN(B.a.aj(B.ax,new A.qH(p.c)))
break A}s.k1=q
s=s.ch
if(s!=null)s.$1(q)},
$S:2}
A.qB.prototype={
$1(a){return t.bK.a(a).b===A.x(this.a.value)},
$S:122}
A.qC.prototype={
$1(a){return t.dn.a(a).b===A.x(this.a.value)},
$S:123}
A.qD.prototype={
$1(a){return t.j_.a(a).b===A.x(this.a.value)},
$S:124}
A.qE.prototype={
$1(a){return t.gm.a(a).b===A.x(this.a.value)},
$S:125}
A.qF.prototype={
$1(a){return t.aJ.a(a).b===A.x(this.a.value)},
$S:126}
A.qG.prototype={
$1(a){return t.mx.a(a).b===A.x(this.a.value)},
$S:127}
A.qH.prototype={
$1(a){return t.x.a(a).b===A.x(this.a.value)},
$S:39}
A.qA.prototype={
$1(a){var s,r,q,p,o=this
A.a(a)
s=o.a
r=s.ok
q=o.b
A:{if("output"===q){p=r.mV(B.a.aj(B.b3,new A.qw(o.c)))
break A}if("dynamicRange"===q){p=r.mM(B.a.aj(B.aY,new A.qx(o.c)))
break A}if("reverb"===q){p=r.n_(B.a.aj(B.aX,new A.qy(o.c)))
break A}p=r.mL(B.a.aj(B.aW,new A.qz(o.c)))
break A}s.ok=p
s=s.ay
if(s!=null)s.$1(p)},
$S:2}
A.qw.prototype={
$1(a){return t.xs.a(a).b===A.x(this.a.value)},
$S:129}
A.qx.prototype={
$1(a){return t.EL.a(a).b===A.x(this.a.value)},
$S:130}
A.qy.prototype={
$1(a){return t.gc.a(a).b===A.x(this.a.value)},
$S:131}
A.qz.prototype={
$1(a){return t.ul.a(a).b===A.x(this.a.value)},
$S:132}
A.qP.prototype={
$1(a){var s,r=this
A.a(a)
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.U(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.U(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.U(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.U(r.c.checked))
break}},
$S:2}
A.qO.prototype={
$1(a){var s,r,q,p=this
A.a(a)
s=A.fp(A.x(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aH(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:2}
A.bt.prototype={
A(){return"SettingCategory."+this.b}}
A.hT.prototype={
A(){return"SettingKind."+this.b}}
A.aV.prototype={
cW(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a7(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a7(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bR(a))throw A.d(A.a7(r.a+" must be boolean",q,q))
break}}}
A.qX.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:23}
A.qY.prototype={
$0(){return A.j(A.m("unknown setting: "+this.a))},
$S:6}
A.qV.prototype={
km(a,b){var s,r=this.a
if(r!==1)throw A.d(A.y("unsupported settings version "+r,null))
for(r=this.b.gI(),r=r.gt(r);r.m();){s=r.gn()
A.qW(s.a).cW(s.b)}},
cf(a){var s=this.b.h(0,a)
return s==null?A.j(A.m("setting missing from profile: "+a)):s},
B(){return A.N(["version",this.a,"values",this.b],t.N,t.K)}}
A.qZ.prototype={
oy(a){var s,r,q=A.fk(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dn(q,1)
this.lN(a)},
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
lN(a){var s,r,q=A.fk(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dn(q,1)}}
A.r2.prototype={
kn(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.C(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.C(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.C(a,"div","entry-picker",null)
for(r=A.iU,q=0;q<2;++q){p=B.cy[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cE[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.r3(this,p,m)
if(typeof k=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eb()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
sog(a){this.f=t.nf.a(a)}}
A.r3.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a3()},
$S:2}
A.cn.prototype={}
A.mt.prototype={
oN(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.H(s)
q=new A.S(s,r.i("i(1)").a(new A.mv()),r.i("S<1,i>")).bu(0)
r=this.b
r.G(0)
s=J.Au(a,t.N)
p=s.$ti
r.K(0,new A.M(s,p.i("n(o.E)").a(q.gap(q)),p.i("M<o.E>")))},
ne(a,b){var s,r,q,p,o,n=A.e([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mv.prototype={
$1(a){return t.bC.a(a).a},
$S:133}
A.mu.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:134}
A.kX.prototype={
gcG(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nH(a){return this.c.q(0,t.L.a(a))},
eK(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a4(0,g.gmF())||!a.a.a4(0,new A.rz(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fG(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aD){m=s.d
if(m<o.length){n=n===B.a2
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.a9}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.f(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.rA(s))
else k=!1
if(k)return!1
j=new A.kW(r,g,A.aj(o,t.AP),B.a2)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.G(0)
g.K(0,a.a)
g=i.c
g.G(0)
g.K(0,h)
i.r=j
return!0},
hk(a){var s=this.a,r=A.q(s).i("ae<1>"),q=r.i("M<o.E>")
s=A.J(new A.M(new A.ae(s,r),r.i("n(o.E)").a(new A.ru(a)),q),q.i("o.E"))
B.a.S(s,new A.rv())
return s},
dH(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.lK
s=m.a.h(0,a)
if(s==null)return B.lL
r=B.c.T(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bA:B.ai
o=p===B.ai&&m.x.q(0,q)&&s.R(B.bB)?B.bB:p
if(s.R(o))n=o
else n=s.R(B.ai)?B.ai:B.bA
r=s.h(0,n)
r.toString
m.r=new A.kW(a,n,A.aj(m.fG(a,n,r),t.AP),B.a2)
m.gcG()
r=m.r
r.toString
return new A.kV(r)},
mz(a){var s,r,q,p,o,n=this.r
if(n==null)return B.du
if(n.d!==B.a2)return B.lI
n.e=a
s=a===B.a9
n.d=s?B.aD:B.ag
r=this.f
q=s?B.ds:B.lq
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.ds(q,o,p,a,null))
if(a===B.aq)B.a.l(r,new A.ds(B.lt,o,p,a,null))
if(s)this.fT(n)
return new A.kT(n)},
me(){var s,r=this.r
if(r==null)return B.du
s=r.d
if(s!==B.ag&&s!==B.ah)return B.lJ
if(this.gcG()!=null&&r.w==null)return new A.b5(new A.bj(B.a3,"The visitor is waiting for an answer."))
r.d=B.ah
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aD
this.fT(r)
return new A.i4(r,!0)}return new A.i4(r,!1)},
mA(a){var s,r,q=this.r,p=this.gcG(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ag&&o!==B.ah}if(o)return B.lH
o=p.f
s=A.H(o)
r=A.cu(new A.M(o,s.i("n(1)").a(new A.rx(a)),s.i("M<1>")),t.Y)
if(r==null)return B.lM
q.w=r.a
return new A.kU(q,p,r)},
mB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ag&&s!==B.ah}else s=!0
if(s)return i
r=h.gbD()
if(r==null)return i
s=t.N
q=A.p(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cD
p=J.R(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b1(q,s,s)
m=c.lG(!0,!0,o,new A.rH(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aE){B.a.l(this.f,new A.ds(B.ls,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fk(B.a.gU(j.c).a,s,s)
s.K(0,q)
p.mb(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dv)if(k===B.bC){s=n.b
s=s.gV(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.ds(B.lr,o,p.b,i,l))}}return m},
fT(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fG(a,b,c){var s,r
t.cf.a(c)
s=A.e([],t.Fi)
for(r=J.R(c);r.m();)s.push(this.lk(a,b,r.gn()))
return s},
lk(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.H(p)
s=A.cu(new A.M(p,r.i("n(1)").a(new A.rs(this)),r.i("M<1>")),t.aS)}return s==null?c:new A.c0(q,s.c,c.c)},
sjV(a){this.x=t.Q.a(a)}}
A.rz.prototype={
$1(a){var s=this.a.a
return new A.ae(s,A.q(s).i("ae<1>")).M(0,new A.ry(A.x(a)))},
$S:3}
A.ry.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:24}
A.rA.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.ru.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:24}
A.rv.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:136}
A.rx.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.rw.prototype={
$0(){return A.e([],t.jV)},
$S:137}
A.rs.prototype={
$1(a){return t.aS.a(a).d.gI().a4(0,new A.rr(this.a))},
$S:138}
A.rr.prototype={
$1(a){t.q.a(a)
return this.a.y.nz(a.a,a.b)},
$S:139}
A.rt.prototype={
$2(a,b){var s=t.AP
return B.c.F(s.a(a).a,s.a(b).a)},
$S:140}
A.kY.prototype={}
A.lt.prototype={}
A.uP.prototype={
$1(a){return B.b.W(A.x(a),"off.")},
$S:3}
A.bK.prototype={
A(){return"DoorChoice."+this.b}}
A.bZ.prototype={
A(){return"VisitPhase."+this.b}}
A.c_.prototype={
A(){return"VisitTier."+this.b}}
A.dY.prototype={
A(){return"VisitorFactKind."+this.b}}
A.ds.prototype={
B(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.cY.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bj.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.bj&&b.a===this.a&&b.b===this.b},
gH(a){return A.cy(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c0.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.c0&&b.a===this.a&&b.b===this.b},
gH(a){return A.cy(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bO.prototype={
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.bO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gH(a){var s=this
return A.cy(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.N(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.kZ.prototype={
B(){var s,r,q,p=this.a
p=A.J(p,A.q(p).c)
B.a.X(p)
s=this.b
r=A.q(s)
q=r.i("db<1,X<i,@>>")
s=A.J(new A.db(s,r.i("X<i,@>(1)").a(new A.rq()),q),q.i("o.E"))
r=this.c
return A.N(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rq.prototype={
$1(a){return t.L.a(a).B()},
$S:141}
A.j7.prototype={
B(){var s,r=this,q=A.p(t.N,t.z)
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
A.mq.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:142}
A.mr.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:143}
A.ms.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:144}
A.kW.prototype={
gbD(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.rB.prototype={}
A.b5.prototype={}
A.kV.prototype={}
A.kT.prototype={}
A.i4.prototype={}
A.kU.prototype={}
A.fF.prototype={}
A.it.prototype={
gbm(){var s,r=this.x1
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.qd("pixeldart",r?this.gmt():B.iF,!1,null,s)},
gdK(){if(this.x1){var s=this.d
s===$&&A.h()
s=s.b===B.aa}else s=!1
return s},
gmt(){var s,r
if(!this.x1)return B.o
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.e8.mu(s,r)},
gnv(){var s="shadowCaster",r=this.p3
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.j2(s).a+";shadowTriangles="+r.j2(s).b+";frameMs="+B.d.aL(this.p4,3)},
gnu(){var s=this.p3
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.p4<=100},
bb(){var s,r,q,p,o,n,m=this,l=A.Cr(m.a)
m.d=l
l=l.j8()
m.r=l
l=m.w=B.bS.js(l)
q=m.b
p=m.c
s=new A.kH(q,p,q,p)
p=A.xT(m.d)
m.e=p
try{p.iS(new A.ku(l,384,216,l.b.q(0,"shadows")?1:0),s)}catch(o){r=A.ag(o)
l=m.w
if(l===B.ay)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.w(r)
m.w=B.ay
l=A.xT(m.d)
l.iS(B.k5,s)
m.e=l}l=m.e
l.cr()
n=A.C3(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.x1=!0},
b3(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("Pixeldart surface size must be positive",null))
if(!r.x1){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.cr()
new A.kH(a,b,a,b).C()
r.b=a
r.c=b},
mi(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.x1||b3.Q.length!==0)return
b3.x2=b9
s=b3.go
r=b3.e
r===$&&A.h()
s.k(0,b5,r.gbc().eG("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbc().eG("texture:grime",512,512))
for(q=0;q<2;++q){p=B.iI[q]
r=b3.e.w
if(r==null)r=A.j(A.m(b7))
s.k(0,p,r.eG("texture:"+p,256,256))}b3.dz()
b3.k4=b3.e.gbc().ot(A.pk(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k2,m=b3.k1,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
i=A.p(l,k)
for(h=A.N(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cv(h,h.r,h.e,A.q(h).i("cv<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.b8.h(0,d)
if(c==null)A.j(A.m("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.j(A.m(b7))
a=e.a
a0=c.a
d=A.pk(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.w)A.j(A.m(b8))
d.C()
a1=b.b.a.aC(d,b4)
b.f.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.k3,q=0;q<7;++q){a2=B.i9[q]
n=b3.e.w
if(n==null)n=A.j(A.m(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dt(a2)
h=b3.dt(a2)
k=A.pk(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dt(a2).c,h.b,k.a,1,1)
if(n.w)A.j(A.m(b8))
k.C()
a1=n.b.a.aC(k,b4)
n.f.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q)b3.le(b9,r[q])
b3.lH(b9)
$.B.j().setAttribute("data-renderer-house-model-scale",B.d.aL(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.r)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.f8(k,b3.fM(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.te(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.r)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.ft(b9,j,a5)
h=b3.e.w
if(h==null)h=A.j(A.m(b7))
g=a5.a
if(h.w)A.j(A.m(b8))
f=h.a
a6.C()
a1=f.b.aC(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.bk(a6))
h.e.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.k4
f.toString}a7=new A.bs(a1,f,B.A,0,B.R,B.a6,!0,!0,0,b4)
f=b3.f
f===$&&A.h()
B.A.C()
b=f.a
a=b.$ti
b.a0(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.f(b,d)
a6=b[d].c
d=(a6==null?a.y[1].a(a6):a6).d
b=B.A.a9()
d=d.gav()
a=A.H(d)
A.ba(new A.S(d,a.i("L(1)").a(b.gaz()),a.i("S<1,L>")))
n.k(0,g,new A.is(g,h,f.b.bY(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.r)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.f8(o,b3.fM(j,a5.aJ(o),a5.al(o),a5.al(o)+a5.w,0,a5.x,5915445),new A.tf(a5))}for(r=A.G3(A.Fl(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.id,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.j(A.m(b7))
b=s.h(0,a9)
a=b3.dr(f)
a0=b3.dr(f)
a=A.pk(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.dr(f).c,a0.b,a.a,1,1)
if(d.w)A.j(A.m(b8))
a.C()
a1=d.b.a.aC(a,b4)
d.f.l(0,a1)
g.k(0,f,a1)
c=a1}d=b3.e.w
if(d==null)d=A.j(A.m(b7))
b=a8.c
a=a8.a
f=""+f
if(d.w)A.j(A.m(b8))
a0=d.a
b.C()
a1=a0.b.aC(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.bk(b))
d.e.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ac.q(0,a))A.j(A.y("unknown exterior cell: "+a,b4))
b2=new A.bs(a1,c,B.A,-1,B.R,B.a6,B.kt.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.h()
B.A.C()
d=f.a
b=d.$ti
d.a0(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.f(d,b0)
a6=d[b0].c
d=(a6==null?b.y[1].a(a6):a6).d
b=B.A.a9()
d=d.gav()
a=A.H(d)
A.ba(new A.S(d,a.i("L(1)").a(b.gaz()),a.i("S<1,L>")))
k.k(0,b1,f.b.bY(b2))}},
jv(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.fy=A.aj(a8.e,t.fl)
if(!a5.x1)return
for(s=a5.ch,r=new A.I(s,A.q(s).i("I<1,2>")).gt(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b2(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.j(A.m(a6))
o=n.a
if(p.w)A.j(A.m(a7))
p.a.b2(o)
p.e.a1(0,o)}}s.G(0)
q.G(0)
r=a5.cx
B.a.G(r)
for(p=a5.fy,o=p.length,m=a8.c,l=a5.k3,k=0;k<o;++k){j=p[k]
i=a5.x2
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cD(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.j(A.m(a6))
f=a5.lh(g,j,m)
e=j.a
if(i.w)A.j(A.m(a7))
d=i.a
f.C()
c=d.b.aC(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bk(f))
i.e.l(0,c)
i=j.f
f=i.a
a=B.a1.gaa()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.kL(new A.L(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.ks(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bs(c,a2,i,-1,B.R,B.a6,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.C()
a2=d.a
f=a2.$ti
a2.a0(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.f(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.a9()
f=f.gav()
b=A.H(f)
A.ba(new A.S(f,b.i("L(1)").a(i.gaz()),b.i("S<1,L>")))
s.k(0,e,d.b.bY(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
jG(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aJ([s],r)
for(p=c1.aF(s),o=J.R(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.bJ(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.I(b9,A.q(b9).i("I<1,2>")).gt(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.e([],p)
for(g=J.aC(j),f=0;f<g.gu(j);++f){if(!(f<i.length))return A.f(i,f)
e=b8.bV(i[f],k)
d=b8.f
d===$&&A.h()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a0(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.f(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a9()
a=a.gav()
a0=A.H(a)
A.ba(new A.S(a,a0.i("L(1)").a(b.gaz()),a0.i("S<1,L>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a0(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.f(d,c)
d[c].saZ(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gO(h))}for(b9=b8.fx,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.r)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.h()
o=b8.bV(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a0(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gav()
g=A.H(i)
A.ba(new A.S(i,g.i("L(1)").a(n.gaz()),g.i("S<1,L>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].saZ(o)}b9=b8.fr
s=A.q(b9).i("ae<1>")
s=A.J(new A.ae(b9,s),s.i("o.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.r)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bV(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.h()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a0(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.f(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.a9()
g=g.gav()
d=A.H(g)
A.ba(new A.S(g,d.i("L(1)").a(i.gaz()),d.i("S<1,L>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a0(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].saZ(e)
b9.k(0,a5.a,a5.mK(e))}for(b9=b8.fy,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.h()
i=b8.bV(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a0(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.f(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.a9()
d=d.gav()
c=A.H(d)
A.ba(new A.S(d,c.i("L(1)").a(g.gaz()),c.i("S<1,L>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a0(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.f(n,c)
n[c].saZ(i)}a9=new A.jD().my(c2)
b9=$.B.j()
s=A.J(a9,A.q(a9).c)
B.a.X(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.a6(s,","))
b9=b8.dx
r=new A.jD().iK(new A.tg(b8),new A.ae(b9,A.q(b9).i("ae<1>")),a9,r)
b0=A.k5(r,r.$ti.i("o.E"))
b9=b8.db
s=A.q(b9).i("ae<1>")
s=A.J(new A.ae(b9,s),s.i("o.E"))
r=s.length
p=b8.cy
b1=0
b2=0
b3=0
a3=0
for(;a3<s.length;s.length===r||(0,A.r)(s),++a3){b4=s[a3]
b5=p.h(0,b4)
if(b5==null)continue
a8=b9.h(0,b4)
o=a8.r
if(o)++b3
b6=b0.q(0,b4)
if(b6)++b1
if(b6&&o)++b2
e=b8.bV(a8,b6?-1:0)
o=b8.f
o===$&&A.h()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a0(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gav()
g=A.H(i)
A.ba(new A.S(i,g.i("L(1)").a(n.gaz()),g.i("S<1,L>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a0(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.f(o,g)
o[g].saZ(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.q(b0)
s=b9.i("db<1,i>")
b7=A.J(new A.db(b0,b9.i("i(1)").a(new A.th(b8)),s),s.i("o.E"))
B.a.X(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a6(b7,","))},
os(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.x1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fW(b0,n)
l=J.aC(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.e([],t.s6)
j=A.e([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.h()
d=d.w
if(d==null)d=A.j(A.m(a8))
c=a7.fH(e.b)
b=g.b
if(d.w)A.j(A.m(a9))
a=d.a
c.C()
a0=a.b.aC(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bk(c))
d.e.l(0,a0)
if(!(f<q.length))return A.f(q,f)
a1=q[f]
d=a1.c
a2=new A.bs(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.h()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a0(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.f(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a9()
b=b.gav()
a3=A.H(b)
A.ba(new A.S(b,a3.i("L(1)").a(d.gaz()),a3.i("S<1,L>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a0(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.f(c,a)
c[a].saZ(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.f(o,f)
a6=o[f]
B.a.a1(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.j(A.m(a8)):a
if(d.w)A.j(A.m(a9))
d.a.b2(a6)
d.e.a1(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gO(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.xr+1));++a7.xr},
eF(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gbc().jb(k.ft(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bs(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.hi(l)
p.b.jf(n,l)
s.k(0,b,r.hs(l,m))
s=k.y
n=r.d
B.a.a1(s,n)
B.a.l(s,m)
k.e.gbc().ou(n)},
jw(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aJ([a1],t.N),b=a0.e,a=b.h(0,a1)
if(a!=null)for(s=a.a,r=a0.aF(s),q=J.R(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.bJ(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&b.h(0,o)!=null)c.l(0,o)}n=new A.jS(a0).ji(c,a2)
m=A.e([],t.Fk)
l=A.e([],t.cv)
for(k=0;k<n.length;++k){j=n[k]
i=this.fm(j.b)
b=j.a
h=new A.L(b.a,b.b,b.c)
b=j.d
s=j.c
if(k===0)B.a.l(l,new A.bv(k,h,B.aC,i,b,s,1.05,1.4))
else B.a.l(m,new A.kn(h,i,b,s))}g=A.zV(a3)
f=B.d.L(a5.c,0,1)
e=B.d.L(1-f*0.24,0.55,1)
d=a6?1:0.38
b=Math.max(0.045,0.52*a4*e*d)
s=a3===0?null:new A.nz(new A.L(g.a,g.b,g.c),this.fm(A.zU(a3)),(0.72+a4*0.18)*(1-f*0.28)*d)
this.p1=new A.jG(B.hD,B.hC,1.5/(1+f*0.45),14/(1+f*0.16),B.hB,b,s,m,l)},
b5(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.x1)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.ok
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dj(s)
s=$.x3()
q=s.b
p=s.c
o=A.vQ(i.b/i.c,p,s.a,q)
p=new A.f7(r,o,o.a7(0,r),B.af,B.lb,q,p,i.b/i.c)
s=p}q=i.p1
p=i.p2
n=i.ry++
m=i.R8
l=new A.r4()
$.wZ()
k=$.pU.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.ml(j,new A.nU(s,q,p,n,m))
i.p3=i.e.ni()
s=$.pU.$0()
l.b=s
i.p4=l.gnf()/1000},
bs(a){},
iW(){},
j9(){++this.RG},
fW(a,b){var s=A.zz(a,b),r=A.Fk(a,b),q=A.J(s.c,t.i)
B.a.K(q,r)
return A.e([new A.fF("wall",new Float32Array(A.a1(q))),new A.fF("floor",s.a),new A.fF("ceiling",s.b)],t.pv)},
fH(a){var s,r,q,p,o,n=A.e([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.f(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.f(a,o)
B.a.l(n,new A.L(q,p,a[o]))}if(n.length===0)throw A.d(A.m("house surface mesh cannot be empty"))
return new A.cd(B.a7,a,null,A.ba(n))},
le(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fW(a2,a3),a0=a3.a,a1=b.k2.h(0,a0)
if(a1==null)throw A.d(A.m("surface materials missing for room "+a0))
s=A.e([],t.s6)
r=A.e([],t.s3)
q=A.e([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.h()
k=k.w
if(k==null)k=A.j(A.m("renderer is not initialized"))
j=b.fH(l.b)
i=l.a
if(k.w)A.j(A.m("resource library is disposed"))
h=k.a
j.C()
g=h.b.aC(j,n+i)
f=g.a
h.c.k(0,f,h.bk(j))
k.e.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bs(g,i,B.A,-1,B.R,B.a6,!0,!0,0,null)
i=b.f
i===$&&A.h()
B.A.C()
k=i.a
j=k.$ti
k.a0(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.f(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.A.a9()
k=k.gav()
h=A.H(k)
A.ba(new A.S(k,h.i("L(1)").a(j.gaz()),h.i("S<1,L>")))
c=i.b.bY(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gO(r))
if(q.length!==0)b.at.k(0,a0,B.a.gO(q))},
lH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.e([],f),d=A.e([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k2,p=0;p<f.length;f.length===s||(0,A.r)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.N(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cv(l,l.r,l.e,A.q(l).i("cv<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.b8.h(0,i)
if(h==null)A.j(A.m("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.B.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.a6(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.a6(d,","))},
f8(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.h()
r=s.gbc().jb(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bs(r,p.lm(a),B.A,0,B.R,B.a6,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.hi(q)
B.a.l(p.fx,new A.lw(a,s.b.bY(q),q,c))},
lm(a){var s=this.k1.h(0,a)
if(s==null){s=this.k4
s.toString}return s},
lh(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cT(new Float32Array(5376))
g=this.lg(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.aw(q,r,o,p,g)
s.aw(n,m,l,k,g)
s.aw(r,n,k,o,g)
s.aw(m,q,p,l,g)
s.aw(r,q,m,n,g)
s.aw(o,k,l,p,g)
j=B.q.aN(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.L(e,d,j[c]))}return new A.cd(B.a7,j,null,A.ba(g))},
lg(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dr(a){var s
A:{if(0===a){s=B.jR
break A}if(1===a){s=B.jT
break A}if(2===a){s=B.jX
break A}if(3===a){s=B.k3
break A}if(4===a){s=B.k4
break A}if(5===a){s=B.jV
break A}if(6===a){s=B.k2
break A}if(7===a){s=B.k_
break A}s=B.k1
break A}return s},
dt(a){var s
A:{if("architecture"===a){s=B.jS
break A}if("furniture"===a){s=B.d3
break A}if("fixture"===a){s=B.jZ
break A}if("service"===a){s=B.k0
break A}if("story"===a){s=B.jY
break A}if("decor"===a){s=B.jU
break A}if("micro"===a){s=B.jW
break A}s=B.d3
break A}return s},
aT(a){return this.nO(t.G.a(a))},
nO(a){var s=0,r=A.bD(t.H),q,p=this,o,n,m,l
var $async$aT=A.bG(function(b,c){if(b===1)return A.bA(c,r)
for(;;)switch(s){case 0:if(!p.x1){s=1
break}o=A.e([],t.iJ)
for(n=0;n<4;++n){m=B.hN[n]
l=a.h(0,m)
if(l!=null)o.push(p.cu(m,l))}s=3
return A.am(A.o_(o,t.H),$async$aT)
case 3:case 1:return A.bB(q,r)}})
return A.bC($async$aT,r)},
cu(a,b){return this.ll(a,b)},
ll(a,b){var s=0,r=A.bD(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cu=A.bG(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.go.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.am(A.aY(A.a(m.decode()),t.X),$async$cu)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.c(m.naturalWidth)
g.height=A.c(m.naturalHeight)
l=g
k=A.k(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.c(m.naturalWidth),A.c(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gbc()
f=new Uint8Array(A.a1(j))
if(h.w)A.j(A.m("resource library is disposed"))
h.c.oW(d,f)
$.B.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dz()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ag(c)
h=$.B.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dz()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bB(q,r)
case 2:return A.bA(o.at(-1),r)}})
return A.bC($async$cu,r)},
dz(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.x1||h.go.a===0)return
s=h.go
r=A.q(s).i("I<1,2>")
r=A.k6(new A.I(s,r),r.i("cg(o.E)").a(new A.ta()),r.i("o.E"),t.jP)
q=A.J(r,A.q(r).i("o.E"))
s=h.e
s===$&&A.h()
s=s.gbc()
p=s.d
o=(p===$?s.d=new A.rb(s.c,A.p(t.Aj,t.y)):p).op(q)
s=o.a
n=A.e(s.slice(0),A.H(s))
B.a.S(n,new A.tb())
s=A.H(n)
r=s.i("i(1)")
s=s.i("S<1,i>")
m=new A.S(n,r.a(new A.tc()),s).a6(0,",")
l=new A.S(n,r.a(new A.td()),s).a6(0,",")
s=o.cq(B.di)
r=o.cq(B.dj)
k=o.cq(B.dk)
j=o.cq(B.dl);++h.to
i=$.B.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.to)
if(!A.U($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",m)},
bV(a,b){return new A.bs(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
ft(a,b,c){var s,r,q,p,o,n=A.Fj(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.L(q,p,n[o]))}return new A.cd(B.a7,n,null,A.ba(s))},
fM(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Y.j().b_(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.e([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.e([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.e([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.e([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.cT(new Float32Array(5376))
o.aw(k[0],k[1],k[2],k[3],g)
n=B.q.aN(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.L(r,q,n[p]))}return new A.cd(B.a7,n,null,A.ba(k))},
fm(a){return new A.di((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ivY:1}
A.te.prototype={
$0(){return!this.a.w},
$S:25}
A.tf.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:25}
A.tg.prototype={
$1(a){var s=this.a.dx.h(0,A.x(a))
s.toString
return s},
$S:40}
A.th.prototype={
$1(a){var s,r,q,p
A.x(a)
s=this.a
r=s.id.h(0,a)
q=r==null
p=q?null:s.go.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:40}
A.ta.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.cg(s,a.b,r)},
$S:147}
A.tb.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:148}
A.tc.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:41}
A.td.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:41}
A.fA.prototype={
gbm(){return A.qd("legacy",B.o,this.e,this.f,"legacy")},
gdK(){return this.x},
bb(){var s,r=this
if(r.w)return
s=A.C4(r.a,r.b,r.c)
r.r!==$&&A.K()
r.r=s
s.hZ=s.hY=s.hX=r.d
r.w=!0},
b3(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.b3(a,b)}},
b5(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.m("legacy runtime is not initialized"))
if(j.x||$.fS==null)return;++j.y
$.B.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.z2
q=$.bQ.j()
s.i2=A.zV($.bn.j().gbv()).gaa()
s.siV(A.zU($.bn.j().gbv()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.bn.j().gbv()))
s.i6=p<0?0:p
p=$.bP.j()
o=p.w+=r
n=0.025*p.r
p.a=p.a.a8(0,p.d.a7(0,(A.vr(o*0.28,1309)*2-1)*n)).a8(0,p.c.a7(0,(A.vr(p.w*0.28,2839)*2-1)*n))
p=$.bP.j()
s.i7=p.a
s.e7=p.b
s.e8=p.c
s.e9=p.d
m=A.E6(0,0.25,0.11)
s.ea=m.a
s.eb=m.b
s.ec=m.c
p=s.cN
l=p==null?s.c0:p
if(l==null)l=s.bo
p=s.b0
p.b8(l)
s.aQ.depthMask(!0)
p.mC(l,s.ea/255,s.eb/255,s.ec/255)
s.e2=s.cO=0
s.e4=!1
s.c2=0
k=$.fS
if(k!=null)k.nc($.ax,$.j4())
s.nt(r,q)
$.yy.j().eN(B.e6,r)},
bs(a){},
iW(){this.x=!0},
j9(){this.x=!1},
$ivY:1}
A.lw.prototype={}
A.is.prototype={
hs(a,b){var s=this,r=b==null?s.d:b
return new A.is(s.a,s.b,s.c,r,a)},
mK(a){return this.hs(a,null)}}
A.rO.prototype={}
A.tH.prototype={
$2(a,b){var s
A.wF(a,A.w(b))
switch(a){case"master":s=$.bo
if(s!=null)s.jA(b)
break
case"voice":s=$.bo
if(s!=null)s.jC(b)
break
case"effects":s=$.bo
if(s!=null)s.jz(b)
break
case"ambience":s=$.bo
if(s!=null)s.jy(b)
break
case"music":s=$.bo
if(s!=null)s.jB(b)
break}},
$S:42}
A.tI.prototype={
$1(a){var s
A.wF("muted",""+a)
s=$.bo
if(s!=null)s.eY(a)},
$S:7}
A.tJ.prototype={
$1(a){var s
A.wF("mono",""+a)
s=$.bo
if(s!=null)s.d2(a)},
$S:7}
A.tP.prototype={
$2(a,b){A.wG(a,A.w(b))
A.yD(a,b)},
$S:42}
A.tQ.prototype={
$1(a){var s="high-contrast"
A.wG(s,""+a)
A.ty(s,a)},
$S:7}
A.tR.prototype={
$1(a){var s="strong-highlights"
A.wG(s,""+a)
A.ty(s,a)},
$S:7}
A.tS.prototype={
$1(a){$.d5().oy(a)
A.ut()
A.yF()},
$S:151}
A.tT.prototype={
$0(){var s=$.d5()
s.a=A.dn(null,1)
s.b=A.dn(null,1)
A.ut()
A.yF()},
$S:0}
A.tU.prototype={
$0(){A.dy(this.a)},
$S:0}
A.tV.prototype={
$0(){this.a.a3()},
$S:0}
A.tW.prototype={
$0(){A.dy(this.a)},
$S:0}
A.tK.prototype={
$0(){A.fW(this.a)},
$S:0}
A.tL.prototype={
$1(a){$.iS=a
A.z9()
A.wf()},
$S:152}
A.tM.prototype={
$1(a){$.wq=a
A.zb()
A.yE()},
$S:153}
A.tN.prototype={
$1(a){$.e3=a
A.wx()
A.lY()},
$S:154}
A.tO.prototype={
$0(){$.e3=B.aj
$.eR.j().eV($.e3)
A.wx()
A.lY()},
$S:0}
A.tE.prototype={
$1(a){var s,r=A.zM(a,A.yV()),q=r.a
$.ui=A.jP(q,a)
A.zc()
s=r.b
$.fO.j().eZ(a,q,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.a6(s,"|"))},
$S:155}
A.tF.prototype={
$0(){A.dy($.fO.j())},
$S:0}
A.tG.prototype={
$0(){A.dy($.fO.j())},
$S:0}
A.tB.prototype={
$1(a){var s,r
$.wn=a
$.ad.j().eW(a.r)
s=$.ad.j()
r=s.ch
r.a=a.f
r.eI()
s.b6()
A.za()},
$S:156}
A.tC.prototype={
$0(){A.dy($.iK.j())},
$S:0}
A.tD.prototype={
$0(){A.dy($.iK.j())},
$S:0}
A.um.prototype={
$0(){$.uC=A.U(this.a.matches)
$.wJ=A.U(this.b.matches)
A.lY()},
$S:0}
A.uk.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:1}
A.ul.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:1}
A.uX.prototype={
$1(a){var s
try{A.xn(a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.F)return!1
else throw s}},
$S:157}
A.uY.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.iQ.j()
break
case 5:p=$.eR.j()
break
case 1:p=$.fO.j()
break
case 4:p=$.fM.j()
break
case 2:p=$.iM.j()
break
case 3:p=$.iK.j()
break}s=p
r=null
switch(o){case 0:r=B.jx
break
case 5:r=B.jC
break
case 1:r=B.jy
break
case 4:r=B.jB
break
case 2:r=B.jz
break
case 3:r=B.jA
break}q=r
p=B.cL.h(0,a)
p.toString
A.ww(s,q,p)},
$S:158}
A.uZ.prototype={
$0(){A.dy($.fQ.j())},
$S:0}
A.v9.prototype={
$0(){return A.dy($.fQ.j())},
$S:0}
A.vf.prototype={
$0(){$.cl.j().a3()},
$S:0}
A.vg.prototype={
$0(){$.cl.j().a3()},
$S:0}
A.vh.prototype={
$0(){A.ww($.fQ.j(),B.cR,"pause.settings")},
$S:0}
A.vi.prototype={
$0(){$.cl.j().a3()
A.iZ($.iN.j())},
$S:0}
A.vj.prototype={
$0(){A.mc("saved")},
$S:0}
A.vk.prototype={
$0(){$.cl.j().a3()
A.iZ($.iN.j())},
$S:0}
A.vl.prototype={
$0(){A.ww($.lU.j(),B.jD,"pause.credits")},
$S:0}
A.v_.prototype={
$0(){return A.fW($.cl.j())},
$S:0}
A.v0.prototype={
$0(){return A.fW($.fP.j())},
$S:0}
A.v1.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gab().a===21){A.zi(!1)
return}s=$.Y.j().r.b
$.V.j().jQ(a,b,$.ax)
r=$.Y.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.d1()
if(typeof n!=="number")return A.j2(n)
if(!(o<n))break
if($.Y.b===$.Y)A.j(A.a9(""))
p=B.a.h(B.M,q).b
o=$.fS
if(o!=null)o.cV(p)
o=$.bE
if(o!=null){n=$.Y.b
if(n===$.Y)A.j(A.a9(""))
o.os(n,p)}o=q
if(typeof o!=="number")return o.a8()
q=o+1}A.mc("saved after sleep")},
$S:159}
A.v2.prototype={
$0(){return A.fW($.lW.j())},
$S:0}
A.v3.prototype={
$0(){return A.fW($.iN.j())},
$S:0}
A.v4.prototype={
$0(){return A.dy($.lU.j())},
$S:0}
A.v5.prototype={
$0(){A.fW($.iL.j())},
$S:0}
A.v6.prototype={
$0(){A.fW($.iL.j())},
$S:0}
A.v7.prototype={
$1(a){A.a(a)
return A.zh()},
$S:1}
A.v8.prototype={
$1(a){A.a(a)
if(A.x(A.a(v.G.document).visibilityState)==="hidden")A.EB()},
$S:2}
A.va.prototype={
$1(a){var s,r
A.a(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"&&!A.U(a.repeat)){r=$.b7
if(r==null)A.iZ($.cl.j())
else r.a3()
return}s=$.b7==null
if(!A.U(a.repeat)&&s)$.d1.j().bs(new A.kv(A.x(a.code),!0,1))
if(A.x(a.code)==="KeyP"&&!A.U(a.repeat)&&$.Af())$.m8=!$.m8
if(A.x(a.code)==="KeyR"&&!A.U(a.repeat)&&s&&$.zt){r=$.fX
if(r!=null)r.bL()}if(A.x(a.code)==="KeyJ"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j1($.fP.j())
if(A.x(a.code)==="KeyL"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j1($.lW.j())
if(A.x(a.code)==="KeyH"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j1($.iN.j())
if(A.x(a.code)==="KeyO"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j1($.iP.j())
if(A.x(a.code)==="KeyK"&&!A.U(a.repeat)&&s)A.mc("saved")},
$S:2}
A.vb.prototype={
$1(a){A.a(a)
if($.b7==null)$.d1.j().bs(new A.kv(A.x(a.code),!1,0))},
$S:2}
A.vc.prototype={
$1(a){A.a(a)
return A.yH()},
$S:1}
A.vd.prototype={
$1(a){A.a(a)
return A.yH()},
$S:1}
A.ve.prototype={
$1(a){A.a(a)
return $.ad.j().cc($.B.j())},
$S:1}
A.un.prototype={
$1(a){var s=A.x(A.a(a).message)
A.uw(s,null)},
$S:2}
A.uo.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.uw("unhandled rejection: "+A.w(s==null?A.x(a.type):s),null)},
$S:2}
A.us.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:39}
A.uA.prototype={
$0(){this.a.className=""},
$S:12}
A.ur.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:21}
A.ux.prototype={
$1(a){return t.g.a(a).e},
$S:19}
A.uu.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.uv.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.dP.prototype
s.jY=s.p
s=A.o.prototype
s.jX=s.cY
s=A.hH.prototype
s.jZ=s.bI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Ed","By",43)
r(J.u.prototype,"gap","q",10)
q(A,"Eq","BP",30)
r(A.aH.prototype,"gap","q",10)
p(A.cb.prototype,"gmF","R",10)
o(A,"Ff","CH",20)
o(A,"Fg","CI",20)
o(A,"Fh","CJ",20)
q(A,"zy","EX",0)
s(A,"Fn","BD",43)
r(A.ci.prototype,"gap","q",10)
r(A.fz.prototype,"gap","q",10)
o(A,"Fq","DP",11)
p(A.k8.prototype,"goE","oF",72)
var n
p(n=A.kK.prototype,"goA","oB",8)
p(n,"goI","oJ",8)
p(n,"goK","oL",8)
p(n,"goC","oD",8)
p(n,"goG","oH",8)
q(A,"zC","CM",162)
q(A,"GU","vU",25)
p(A.dj.prototype,"gaz","jd",45)
p(n=A.jV.prototype,"glo","lp",1)
p(n,"glq","lr",1)
p(n,"glu","lv",1)
p(n,"gly","lz",1)
p(n,"glA","lB",1)
p(n,"glw","lx",1)
p(n,"gls","lt",1)
o(A,"FS","yN",11)
o(A,"FV","yM",11)
o(A,"FH","Bv",163)
o(A,"FI","Bw",164)
o(A,"FZ","Bp",165)
p(A.hH.prototype,"glC","lD",1)
p(A.fu.prototype,"gla","lb",120)
p(A.kX.prototype,"gnG","nH",24)
o(A,"zL","EE",166)
o(A,"FL","DG",33)
q(A,"FO","DM",0)
o(A,"FM","DH",33)
o(A,"FN","DI",112)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.G,null)
q(A.G,[A.vK,J.jX,A.hS,J.ec,A.o,A.h9,A.dG,A.al,A.W,A.qq,A.aS,A.hz,A.T,A.hj,A.hg,A.i6,A.ar,A.cV,A.c2,A.fl,A.f9,A.eN,A.dm,A.ri,A.pz,A.hh,A.ix,A.aa,A.pf,A.cc,A.ah,A.cv,A.ht,A.lq,A.l6,A.hY,A.lK,A.rQ,A.to,A.cA,A.lj,A.lN,A.tl,A.l7,A.cC,A.aZ,A.lb,A.eJ,A.aw,A.l8,A.lI,A.iI,A.ih,A.lp,A.eO,A.il,A.iC,A.lO,A.eg,A.jp,A.t8,A.tp,A.eh,A.dI,A.lg,A.kj,A.hW,A.rR,A.F,A.P,A.az,A.lL,A.r4,A.bh,A.iE,A.rk,A.lE,A.py,A.lm,A.fC,A.pX,A.ew,A.ne,A.nf,A.ko,A.f7,A.jG,A.nU,A.dl,A.jQ,A.di,A.nz,A.kn,A.bv,A.et,A.bw,A.ro,A.cd,A.pA,A.pQ,A.kw,A.bs,A.kH,A.ku,A.aI,A.nW,A.k8,A.kO,A.pq,A.cg,A.bY,A.rd,A.rb,A.du,A.kK,A.eq,A.jE,A.jF,A.nV,A.nT,A.fB,A.au,A.bb,A.aN,A.O,A.ha,A.pV,A.bg,A.pZ,A.b3,A.q0,A.q_,A.ll,A.hN,A.qg,A.rS,A.lM,A.tk,A.lx,A.li,A.lB,A.lv,A.t3,A.bL,A.bJ,A.aO,A.nv,A.nu,A.j5,A.ev,A.nX,A.dj,A.ks,A.kL,A.L,A.h8,A.l9,A.jg,A.la,A.jt,A.ld,A.he,A.le,A.jx,A.lf,A.jO,A.lk,A.ka,A.lr,A.f5,A.jh,A.vV,A.hJ,A.ly,A.kr,A.lz,A.eD,A.kA,A.lC,A.kB,A.lD,A.kE,A.lG,A.kD,A.lF,A.kS,A.lP,A.hP,A.l2,A.lS,A.nc,A.jJ,A.jL,A.hn,A.hU,A.A,A.ju,A.kp,A.of,A.e1,A.cQ,A.fd,A.rG,A.dv,A.iH,A.iG,A.lR,A.lQ,A.tt,A.jw,A.jb,A.fI,A.mE,A.mm,A.h6,A.mA,A.vE,A.mM,A.mG,A.i7,A.f6,A.nb,A.nS,A.kI,A.od,A.jT,A.jV,A.oR,A.oV,A.k7,A.hA,A.pm,A.cT,A.q6,A.qf,A.rI,A.ie,A.lH,A.lu,A.ls,A.r_,A.b,A.kF,A.l3,A.n4,A.jy,A.nH,A.fe,A.bl,A.km,A.pR,A.ft,A.ql,A.eB,A.jH,A.o3,A.o2,A.mT,A.f0,A.f2,A.f_,A.f1,A.ji,A.k9,A.i9,A.l4,A.hp,A.ov,A.qh,A.a_,A.jB,A.jR,A.ow,A.jC,A.d0,A.jD,A.e0,A.ej,A.qi,A.e_,A.fH,A.ot,A.nL,A.r0,A.oy,A.cN,A.cs,A.oY,A.oW,A.oX,A.cP,A.jS,A.b6,A.br,A.bd,A.bf,A.da,A.dp,A.aU,A.oE,A.cM,A.ou,A.ep,A.oD,A.cL,A.oI,A.hI,A.hy,A.bc,A.rC,A.k4,A.bT,A.p_,A.n_,A.n0,A.f3,A.n1,A.pb,A.pa,A.pO,A.pN,A.pP,A.qe,A.kv,A.qc,A.fv,A.nw,A.rH,A.eH,A.jn,A.oP,A.oT,A.qj,A.cR,A.qk,A.jI,A.eG,A.rD,A.pt,A.cG,A.r5,A.eF,A.eE,A.i5,A.l_,A.ey,A.cZ,A.r8,A.j6,A.vD,A.dA,A.mw,A.dB,A.n3,A.b_,A.fa,A.d9,A.jo,A.hH,A.nA,A.o9,A.fh,A.dL,A.oq,A.oi,A.oj,A.dk,A.dR,A.bW,A.pH,A.pW,A.aV,A.qV,A.qZ,A.cn,A.mt,A.kX,A.rB,A.ds,A.bj,A.c0,A.bO,A.kZ,A.j7,A.kW,A.fF,A.it,A.fA,A.lw,A.is,A.rO])
q(J.jX,[J.k_,J.hs,J.hu,J.fi,J.fj,J.er,J.dO])
q(J.hu,[J.dP,J.u,A.dQ,A.hE])
q(J.dP,[J.kl,J.dW,J.dh])
r(J.jY,A.hS)
r(J.oZ,J.u)
q(J.er,[J.hr,J.k0])
q(A.o,[A.dZ,A.Q,A.cw,A.M,A.hi,A.cB,A.eM,A.l5,A.lJ,A.cj])
q(A.dZ,[A.ef,A.iJ])
r(A.id,A.ef)
r(A.ib,A.iJ)
q(A.dG,[A.jk,A.jj,A.kJ,A.uS,A.uU,A.rL,A.rK,A.tz,A.o0,A.t1,A.t4,A.ph,A.t6,A.vn,A.vo,A.uM,A.pY,A.rp,A.pn,A.po,A.pp,A.pC,A.pl,A.pr,A.re,A.rf,A.rh,A.nP,A.nN,A.nO,A.pE,A.pF,A.q5,A.q4,A.q3,A.q2,A.q1,A.q7,A.uc,A.ud,A.qn,A.qo,A.vv,A.vt,A.nY,A.pj,A.uJ,A.og,A.oh,A.rE,A.rF,A.mO,A.mR,A.mQ,A.mS,A.mF,A.mn,A.mo,A.mp,A.mC,A.mD,A.mB,A.oe,A.oS,A.qb,A.nK,A.o4,A.o6,A.o7,A.o8,A.mU,A.mV,A.mW,A.mX,A.mY,A.mZ,A.uH,A.nd,A.nM,A.ox,A.vw,A.ug,A.uf,A.tx,A.tw,A.uz,A.oK,A.oL,A.oN,A.r1,A.oB,A.oz,A.uG,A.oF,A.oH,A.uF,A.nG,A.pe,A.p6,A.nx,A.ny,A.up,A.r9,A.ra,A.ml,A.mj,A.mJ,A.mK,A.n6,A.na,A.n9,A.n8,A.no,A.nn,A.np,A.nq,A.nr,A.nm,A.nh,A.ni,A.nt,A.nB,A.nC,A.nD,A.nF,A.nE,A.nJ,A.oa,A.ob,A.oo,A.om,A.on,A.ol,A.ok,A.os,A.p1,A.p2,A.p3,A.pI,A.pJ,A.pK,A.qQ,A.qR,A.qK,A.qL,A.qJ,A.qM,A.qv,A.qN,A.qI,A.qB,A.qC,A.qD,A.qE,A.qF,A.qG,A.qH,A.qA,A.qw,A.qx,A.qy,A.qz,A.qP,A.qO,A.qX,A.r3,A.mv,A.rz,A.ry,A.rA,A.ru,A.rx,A.rs,A.rr,A.uP,A.rq,A.mq,A.mr,A.ms,A.tg,A.th,A.ta,A.tc,A.td,A.tI,A.tJ,A.tQ,A.tR,A.tS,A.tL,A.tM,A.tN,A.tE,A.tB,A.uk,A.ul,A.uX,A.uY,A.v7,A.v8,A.va,A.vb,A.vc,A.vd,A.ve,A.un,A.uo,A.us,A.ux,A.uu,A.uv])
q(A.jk,[A.rP,A.ng,A.p7,A.uT,A.tA,A.uI,A.o1,A.t2,A.pg,A.pi,A.t9,A.rm,A.rl,A.vp,A.ps,A.rc,A.rg,A.nQ,A.qp,A.vu,A.vs,A.mP,A.mH,A.mI,A.o5,A.uB,A.oM,A.oO,A.oC,A.pd,A.oU,A.pv,A.pw,A.px,A.r6,A.r7,A.p4,A.p5,A.mu,A.rv,A.rt,A.tb,A.tH,A.tP,A.v1,A.ur])
r(A.aR,A.ib)
q(A.al,[A.es,A.dq,A.k1,A.kN,A.kx,A.lh,A.hw,A.j9,A.co,A.i2,A.kM,A.fw,A.jm])
r(A.fy,A.W)
r(A.dH,A.fy)
q(A.Q,[A.a6,A.ae,A.as,A.I,A.eL,A.ik])
q(A.a6,[A.hZ,A.S,A.hR,A.lo])
r(A.db,A.cw)
q(A.c2,[A.eQ,A.fD,A.fE])
q(A.eQ,[A.aX,A.iu])
r(A.ap,A.fD)
r(A.iv,A.fE)
r(A.fK,A.fl)
r(A.dX,A.fK)
r(A.hb,A.dX)
q(A.f9,[A.a4,A.cJ])
q(A.dm,[A.hc,A.iw,A.iD])
r(A.aH,A.hc)
q(A.jj,[A.pS,A.rM,A.rN,A.tm,A.nZ,A.rT,A.rY,A.rX,A.rV,A.rU,A.t0,A.t_,A.rZ,A.tj,A.uy,A.tr,A.tq,A.ub,A.u4,A.u5,A.ua,A.u_,A.u1,A.u0,A.u9,A.tY,A.tZ,A.u6,A.u7,A.u8,A.u3,A.u2,A.ue,A.uK,A.qa,A.oJ,A.oA,A.oG,A.uh,A.mk,A.my,A.mx,A.mL,A.nk,A.nl,A.nj,A.oc,A.op,A.pM,A.qt,A.qu,A.qS,A.qT,A.qU,A.qY,A.rw,A.te,A.tf,A.tT,A.tU,A.tV,A.tW,A.tK,A.tO,A.tF,A.tG,A.tC,A.tD,A.um,A.uZ,A.v9,A.vf,A.vg,A.vh,A.vi,A.vj,A.vk,A.vl,A.v_,A.v0,A.v2,A.v3,A.v4,A.v5,A.v6,A.uA])
r(A.hG,A.dq)
q(A.kJ,[A.kG,A.f4])
q(A.aa,[A.cb,A.ig,A.ln])
r(A.hv,A.cb)
r(A.fn,A.dQ)
q(A.hE,[A.kb,A.b2])
q(A.b2,[A.io,A.iq])
r(A.ip,A.io)
r(A.hC,A.ip)
r(A.ir,A.iq)
r(A.hD,A.ir)
q(A.hC,[A.hB,A.kc])
q(A.hD,[A.kd,A.ke,A.kf,A.kg,A.kh,A.eu,A.hF])
r(A.fJ,A.lh)
r(A.i8,A.lb)
r(A.lA,A.iI)
r(A.ii,A.ig)
r(A.ci,A.iw)
r(A.fz,A.iD)
q(A.eg,[A.jd,A.jz,A.k2])
q(A.jp,[A.n2,A.p9,A.p8,A.rn])
r(A.k3,A.hw)
r(A.t7,A.t8)
r(A.kR,A.jz)
q(A.co,[A.fr,A.jU])
r(A.lc,A.iE)
q(A.lg,[A.ex,A.eo,A.j8,A.cX,A.fc,A.jf,A.jl,A.jv,A.eA,A.dV,A.ek,A.ca,A.hQ,A.cK,A.fs,A.hV,A.fg,A.ia,A.ic,A.jK,A.hl,A.jM,A.jN,A.en,A.hm,A.eC,A.cU,A.f8,A.fG,A.je,A.ee,A.jq,A.js,A.b4,A.jc,A.c8,A.em,A.ei,A.dK,A.hk,A.dJ,A.dM,A.h7,A.hO,A.ez,A.bN,A.bu,A.jW,A.eI,A.cf,A.cE,A.cp,A.cF,A.d8,A.d7,A.dD,A.dE,A.dC,A.ed,A.dd,A.cH,A.cI,A.de,A.dc,A.df,A.c9,A.cq,A.be,A.ce,A.dS,A.cz,A.bM,A.bt,A.hT,A.bK,A.bZ,A.c_,A.dY,A.cY])
q(A.dl,[A.bp,A.bi,A.cx,A.kk,A.cr])
r(A.qm,A.lB)
r(A.l0,A.lQ)
r(A.q9,A.rI)
r(A.q8,A.q9)
r(A.im,A.d0)
q(A.hH,[A.hd,A.ns,A.nI,A.ho,A.or,A.p0,A.pL,A.qs,A.fu,A.r2])
q(A.rB,[A.kY,A.lt,A.b5,A.kV,A.kT,A.i4,A.kU])
s(A.fy,A.cV)
s(A.iJ,A.W)
s(A.io,A.W)
s(A.ip,A.ar)
s(A.iq,A.W)
s(A.ir,A.ar)
s(A.fK,A.iC)
s(A.iD,A.lO)
s(A.lB,A.t3)
s(A.lQ,A.tt)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",z:"double",b9:"num",i:"String",n:"bool",az:"Null",D:"List",G:"Object",X:"Map",a5:"JSObject"},mangledNames:{},types:["~()","~(a5)","az(a5)","n(i)","dg()","n(z)","0&()","~(n)","dg(bi?)","n(au)","n(G?)","@(@)","az()","n(ey)","l(bT,bT)","n(b6)","n(@)","~(@)","n(bw)","n(bT)","~(~())","l(P<i,i>,P<i,i>)","n(O)","n(aV)","n(bO)","n()","~(G?,G?)","@()","n(l)","i?(i)","l()","@(i)","n(e0)","~(i)","l(l)","az(@)","n(cE)","n(P<i,D<i>>)","n(cq)","n(c9)","i(i)","i(bY)","~(i,z)","l(@,@)","b(b)","L(L)","z()","f5()","n(P<i,aI>)","aI(P<i,aI>)","aI(aI,aI)","l(aO<bL>,aO<bL>)","bX(aO<bL>)","l(aO<bJ>,aO<bJ>)","bX(aO<bJ>)","ev(z,z,z,z)","G?(G?)","~(eD)","eD()","az(@,cS)","z(z,fI)","bU<az>(P<i,i>)","l(+influence,light(z,bv),+influence,light(z,bv))","n(D<i>)","l(i,i)","l(br,br)","n(a5)","a5()","~(l,@)","n(c8)","~(G,cS)","az(G,cS)","et(cx)","n(aU)","f0(G?)","f_(G?)","f1(G?)","i(G?)","cx(l,l,i?)","f2(G?)","bp(l,l,i?)","n(dp)","i(l,a_,a_,a_)","l(d0,d0)","l(l,+(bp,cd))","n(e_)","~(@,@)","n(bY)","l(+(z,z,z,z),+(z,z,z,z))","D<+(z,z,z,z)>()","n(br)","l(l,aU)","n(cs)","n(cN)","l(cg,cg)","l(cP,cP)","n(cM)","P<i,i>(i,@)","n(bN)","n(bu)","eG()","az(~())","l(P<i,cG>,P<i,cG>)","P<l,@>(l,eF)","P<l,@>(l,eE)","n(P<@,@>)","P<i,i>(P<@,@>)","n?(G?)","bi(l,l,i?)","i()","0^(o<0^>,G?)<G?>","n(i1?)","~(l)","~(z)","l(l,+(bi,du))","0^(i,o<0^>)<E>","i(au)","X<i,G?>(dk)","i(be)","n(be)","n(bt)","l(ac,ac)","n(dd)","n(cH)","n(cI)","n(de)","n(dc)","n(df)","@(@,i)","n(cp)","n(cF)","n(d8)","n(d7)","i(cn)","l(cn,cn)","X<i,i>(X<i,i>,i)","l(bO,bO)","D<cZ>()","n(cZ)","n(P<i,i>)","l(c0,c0)","X<i,@>(bO)","n(c_)","n(bZ)","n(bK)","cr(l,l,i?)","hP(bp)","cg(P<i,bi>)","l(bY,bY)","dg(i{fallback:i?})","0&(i,l?)","~(bt)","~(dB)","~(fh)","~(dA)","~(dL)","~(fa)","n(ft)","~(bM)","~(bN,bu)","bv?()","D<bv>()","fB()","cN(G?)","cs(G?)","cM(G?)","~(b9)","f7()","D<i>(D<i>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aX&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iu&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ap&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iv&&A.FQ(a,b.a)}}
A.D1(v.typeUniverse,JSON.parse('{"dh":"dP","kl":"dP","dW":"dP","Gi":"dQ","u":{"D":["1"],"Q":["1"],"a5":[],"o":["1"]},"k_":{"n":[],"af":[]},"hs":{"az":[],"af":[]},"hu":{"a5":[]},"dP":{"a5":[]},"jY":{"hS":[]},"oZ":{"u":["1"],"D":["1"],"Q":["1"],"a5":[],"o":["1"]},"ec":{"ab":["1"]},"er":{"z":[],"b9":[],"b0":["b9"]},"hr":{"z":[],"l":[],"b9":[],"b0":["b9"],"af":[]},"k0":{"z":[],"b9":[],"b0":["b9"],"af":[]},"dO":{"i":[],"b0":["i"],"pG":[],"af":[]},"dZ":{"o":["2"]},"h9":{"ab":["2"]},"ef":{"dZ":["1","2"],"o":["2"],"o.E":"2"},"id":{"ef":["1","2"],"dZ":["1","2"],"Q":["2"],"o":["2"],"o.E":"2"},"ib":{"W":["2"],"D":["2"],"dZ":["1","2"],"Q":["2"],"o":["2"]},"aR":{"ib":["1","2"],"W":["2"],"D":["2"],"dZ":["1","2"],"Q":["2"],"o":["2"],"o.E":"2","W.E":"2"},"es":{"al":[]},"dH":{"W":["l"],"cV":["l"],"D":["l"],"Q":["l"],"o":["l"],"W.E":"l","cV.E":"l"},"Q":{"o":["1"]},"a6":{"Q":["1"],"o":["1"]},"hZ":{"a6":["1"],"Q":["1"],"o":["1"],"o.E":"1","a6.E":"1"},"aS":{"ab":["1"]},"cw":{"o":["2"],"o.E":"2"},"db":{"cw":["1","2"],"Q":["2"],"o":["2"],"o.E":"2"},"hz":{"ab":["2"]},"S":{"a6":["2"],"Q":["2"],"o":["2"],"o.E":"2","a6.E":"2"},"M":{"o":["1"],"o.E":"1"},"T":{"ab":["1"]},"hi":{"o":["2"],"o.E":"2"},"hj":{"ab":["2"]},"hg":{"ab":["1"]},"cB":{"o":["1"],"o.E":"1"},"i6":{"ab":["1"]},"fy":{"W":["1"],"cV":["1"],"D":["1"],"Q":["1"],"o":["1"]},"hR":{"a6":["1"],"Q":["1"],"o":["1"],"o.E":"1","a6.E":"1"},"aX":{"eQ":[],"c2":[]},"iu":{"eQ":[],"c2":[]},"ap":{"fD":[],"c2":[]},"iv":{"fE":[],"c2":[]},"hb":{"dX":["1","2"],"fK":["1","2"],"fl":["1","2"],"iC":["1","2"],"X":["1","2"]},"f9":{"X":["1","2"]},"a4":{"f9":["1","2"],"X":["1","2"]},"eM":{"o":["1"],"o.E":"1"},"eN":{"ab":["1"]},"cJ":{"f9":["1","2"],"X":["1","2"]},"hc":{"dm":["1"],"dU":["1"],"Q":["1"],"o":["1"]},"aH":{"hc":["1"],"dm":["1"],"dU":["1"],"Q":["1"],"o":["1"]},"hG":{"dq":[],"al":[]},"k1":{"al":[]},"kN":{"al":[]},"ix":{"cS":[]},"dG":{"el":[]},"jj":{"el":[]},"jk":{"el":[]},"kJ":{"el":[]},"kG":{"el":[]},"f4":{"el":[]},"kx":{"al":[]},"cb":{"aa":["1","2"],"vM":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"ae":{"Q":["1"],"o":["1"],"o.E":"1"},"cc":{"ab":["1"]},"as":{"Q":["1"],"o":["1"],"o.E":"1"},"ah":{"ab":["1"]},"I":{"Q":["P<1,2>"],"o":["P<1,2>"],"o.E":"P<1,2>"},"cv":{"ab":["P<1,2>"]},"hv":{"cb":["1","2"],"aa":["1","2"],"vM":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"eQ":{"c2":[]},"fD":{"c2":[]},"fE":{"c2":[]},"ht":{"C_":[],"pG":[]},"lq":{"hM":[],"fm":[]},"l5":{"o":["hM"],"o.E":"hM"},"l6":{"ab":["hM"]},"hY":{"fm":[]},"lJ":{"o":["fm"],"o.E":"fm"},"lK":{"ab":["fm"]},"fn":{"dQ":[],"a5":[],"af":[]},"eu":{"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"dQ":{"a5":[],"af":[]},"hE":{"a5":[]},"kb":{"a5":[],"af":[]},"b2":{"bV":["1"],"a5":[]},"hC":{"W":["z"],"b2":["z"],"D":["z"],"bV":["z"],"Q":["z"],"a5":[],"o":["z"],"ar":["z"]},"hD":{"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"]},"hB":{"nR":[],"W":["z"],"b2":["z"],"D":["z"],"bV":["z"],"Q":["z"],"a5":[],"o":["z"],"ar":["z"],"af":[],"W.E":"z","ar.E":"z"},"kc":{"W":["z"],"b2":["z"],"D":["z"],"bV":["z"],"Q":["z"],"a5":[],"o":["z"],"ar":["z"],"af":[],"W.E":"z","ar.E":"z"},"kd":{"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"ke":{"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"kf":{"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"kg":{"w2":[],"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"kh":{"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"hF":{"i1":[],"W":["l"],"b2":["l"],"D":["l"],"bV":["l"],"Q":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"lh":{"al":[]},"fJ":{"dq":[],"al":[]},"cC":{"ab":["1"]},"cj":{"o":["1"],"o.E":"1"},"aZ":{"al":[]},"i8":{"lb":["1"]},"aw":{"bU":["1"]},"iI":{"yb":[]},"lA":{"iI":[],"yb":[]},"ig":{"aa":["1","2"],"X":["1","2"]},"ii":{"ig":["1","2"],"aa":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"eL":{"Q":["1"],"o":["1"],"o.E":"1"},"ih":{"ab":["1"]},"ci":{"dm":["1"],"xE":["1"],"dU":["1"],"Q":["1"],"o":["1"]},"eO":{"ab":["1"]},"W":{"D":["1"],"Q":["1"],"o":["1"]},"aa":{"X":["1","2"]},"ik":{"Q":["2"],"o":["2"],"o.E":"2"},"il":{"ab":["2"]},"fl":{"X":["1","2"]},"dX":{"fK":["1","2"],"fl":["1","2"],"iC":["1","2"],"X":["1","2"]},"dm":{"dU":["1"],"Q":["1"],"o":["1"]},"iw":{"dm":["1"],"dU":["1"],"Q":["1"],"o":["1"]},"fz":{"dm":["1"],"lO":["1"],"dU":["1"],"Q":["1"],"o":["1"]},"ln":{"aa":["i","@"],"X":["i","@"],"aa.K":"i","aa.V":"@"},"lo":{"a6":["i"],"Q":["i"],"o":["i"],"o.E":"i","a6.E":"i"},"jd":{"eg":["D<l>","i"]},"jz":{"eg":["i","D<l>"]},"hw":{"al":[]},"k3":{"al":[]},"k2":{"eg":["G?","i"]},"kR":{"eg":["i","D<l>"]},"eh":{"b0":["eh"]},"z":{"b9":[],"b0":["b9"]},"dI":{"b0":["dI"]},"l":{"b9":[],"b0":["b9"]},"D":{"Q":["1"],"o":["1"]},"b9":{"b0":["b9"]},"hM":{"fm":[]},"dU":{"Q":["1"],"o":["1"]},"i":{"b0":["i"],"pG":[]},"lg":{"E":[]},"j9":{"al":[]},"dq":{"al":[]},"co":{"al":[]},"fr":{"al":[]},"jU":{"al":[]},"i2":{"al":[]},"kM":{"al":[]},"fw":{"al":[]},"jm":{"al":[]},"kj":{"al":[]},"hW":{"al":[]},"lL":{"cS":[]},"bh":{"Cd":[]},"iE":{"kP":[]},"lE":{"kP":[]},"lc":{"kP":[]},"lm":{"vW":[]},"fC":{"vW":[]},"ex":{"E":[]},"bp":{"dl":[]},"bi":{"dl":[]},"cx":{"dl":[]},"cr":{"dl":[]},"kk":{"dl":[]},"eo":{"E":[]},"j8":{"E":[]},"cX":{"E":[]},"fc":{"E":[]},"jf":{"E":[]},"jl":{"E":[]},"jv":{"E":[]},"eA":{"E":[]},"dV":{"E":[]},"ek":{"E":[]},"ca":{"E":[]},"hQ":{"E":[]},"cK":{"E":[]},"fs":{"E":[]},"hN":{"C2":[]},"ll":{"bX":[]},"lM":{"bX":[]},"lx":{"C1":[]},"li":{"Bf":[]},"hV":{"E":[]},"bL":{"b0":["bL"]},"bJ":{"b0":["bJ"]},"fg":{"E":[]},"ia":{"E":[]},"h8":{"ak":[]},"l9":{"ac":[]},"jg":{"ak":[]},"la":{"ac":[]},"jt":{"ak":[]},"ld":{"ac":[]},"ic":{"E":[]},"he":{"ak":[]},"le":{"ac":[]},"jx":{"ak":[]},"lf":{"ac":[]},"jO":{"ak":[]},"lk":{"ac":[]},"ka":{"ak":[]},"lr":{"ac":[]},"jh":{"C0":[]},"hJ":{"ak":[]},"ly":{"ac":[]},"kr":{"ak":[]},"lz":{"ac":[]},"kA":{"ak":[]},"lC":{"ac":[]},"kB":{"ak":[]},"lD":{"ac":[]},"kE":{"ak":[]},"lG":{"ac":[]},"kD":{"ak":[]},"lF":{"ac":[]},"kS":{"ak":[]},"lP":{"ac":[]},"l2":{"ak":[]},"lS":{"ac":[]},"jK":{"E":[]},"hl":{"E":[]},"jM":{"E":[]},"jN":{"E":[]},"en":{"E":[]},"hm":{"E":[]},"eC":{"E":[]},"cU":{"E":[]},"f8":{"E":[]},"ju":{"AZ":[]},"fG":{"E":[]},"b4":{"E":[]},"je":{"E":[]},"ee":{"E":[]},"jq":{"E":[]},"js":{"E":[]},"dv":{"dg":[]},"l0":{"Bl":[]},"jc":{"E":[]},"c8":{"E":[]},"em":{"E":[]},"im":{"d0":[]},"ei":{"E":[]},"dK":{"E":[]},"dJ":{"E":[]},"hk":{"E":[]},"dM":{"E":[]},"h7":{"E":[]},"hO":{"E":[]},"ez":{"E":[]},"bN":{"E":[]},"bu":{"E":[]},"jW":{"E":[]},"eI":{"E":[]},"cf":{"E":[]},"cE":{"E":[]},"cp":{"E":[]},"cF":{"E":[]},"d8":{"E":[]},"d7":{"E":[]},"dD":{"E":[]},"dE":{"E":[]},"ed":{"E":[]},"dC":{"E":[]},"dd":{"E":[]},"cH":{"E":[]},"cI":{"E":[]},"de":{"E":[]},"dc":{"E":[]},"df":{"E":[]},"c9":{"E":[]},"cq":{"E":[]},"be":{"E":[]},"ce":{"E":[]},"dS":{"E":[]},"cz":{"E":[]},"bM":{"E":[]},"bt":{"E":[]},"hT":{"E":[]},"bK":{"E":[]},"bZ":{"E":[]},"c_":{"E":[]},"dY":{"E":[]},"cY":{"E":[]},"it":{"vY":[]},"fA":{"vY":[]},"Bu":{"D":["l"],"Q":["l"],"o":["l"]},"i1":{"D":["l"],"Q":["l"],"o":["l"]},"Ci":{"D":["l"],"Q":["l"],"o":["l"]},"Bs":{"D":["l"],"Q":["l"],"o":["l"]},"w2":{"D":["l"],"Q":["l"],"o":["l"]},"Bt":{"D":["l"],"Q":["l"],"o":["l"]},"Ch":{"D":["l"],"Q":["l"],"o":["l"]},"nR":{"D":["z"],"Q":["z"],"o":["z"]},"Be":{"D":["z"],"Q":["z"],"o":["z"]}}'))
A.D0(v.typeUniverse,JSON.parse('{"fy":1,"iJ":2,"b2":1,"iw":1,"iD":1,"jp":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a0
return{mq:s("cE"),dx:s("h6"),bC:s("cn"),v:s("aZ"),iF:s("jb"),ul:s("d7"),EL:s("cF"),xs:s("cp"),gc:s("d8"),lT:s("f_"),bJ:s("f0"),gI:s("f1"),ya:s("f2"),z3:s("bJ"),Bu:s("f5"),sU:s("dH"),hO:s("b0<@>"),CH:s("ha"),p:s("a4<i,i>"),I:s("a4<i,l>"),M:s("aH<i>"),f7:s("eh"),fP:s("bK"),yb:s("dI"),he:s("Q<@>"),yW:s("c8"),g:s("bT"),Ct:s("E"),yt:s("al"),hl:s("a_"),B:s("nR"),pH:s("aI"),Fr:s("cG"),BO:s("el"),ls:s("bU<az>"),aJ:s("dc"),x:s("c9"),bK:s("dd"),gm:s("de"),dn:s("cH"),mx:s("df"),j_:s("cI"),EJ:s("cJ<bM,i>"),_:s("dg"),Eb:s("cq"),qX:s("dM"),mF:s("cM"),eO:s("jT<G>"),iO:s("cr"),oW:s("cN"),fl:s("cs"),FA:s("o<ha>"),yT:s("o<i>"),x6:s("o<cg>"),oJ:s("o<z>"),tY:s("o<@>"),uI:s("o<l>"),Fg:s("u<cn>"),ns:s("u<jy>"),cO:s("u<da>"),r:s("u<bT>"),uH:s("u<jC>"),Dl:s("u<a_>"),iJ:s("u<bU<~>>"),pC:s("u<jH>"),C1:s("u<dg>"),ka:s("u<bb>"),Fm:s("u<ep>"),vS:s("u<cL>"),pW:s("u<Gh<G>>"),hr:s("u<eq>"),s3:s("u<cr>"),W:s("u<a5>"),Bv:s("u<k4>"),yH:s("u<bd>"),Bq:s("u<P<i,i>>"),rq:s("u<X<i,G>>"),A7:s("u<X<i,i>>"),cs:s("u<X<i,@>>"),fv:s("u<k7>"),td:s("u<hA>"),s6:s("u<bp>"),pq:s("u<au>"),bA:s("u<dk>"),b4:s("u<bf>"),s0:s("u<ev>"),ea:s("u<cP>"),Fk:s("u<kn>"),qP:s("u<br>"),kv:s("u<ey>"),nR:s("u<+(i,D<br>)>"),kd:s("u<+(i,i)>"),rh:s("u<+influence,light(z,bv)>"),wt:s("u<+(l,i)>"),wx:s("u<+(z,z,z,z)>"),e_:s("u<ak>"),u:s("u<ac>"),Ft:s("u<hN>"),C:s("u<O>"),h1:s("u<bs>"),s2:s("u<bX>"),eY:s("u<aU>"),xB:s("u<cR>"),El:s("u<fv>"),AM:s("u<aO<bJ>>"),fs:s("u<aO<bL>>"),cv:s("u<bv>"),DZ:s("u<dp>"),s:s("u<i>"),qy:s("u<kI>"),fa:s("u<bY>"),k:s("u<L>"),h:s("u<b>"),ld:s("u<i5>"),Dc:s("u<ds>"),Fi:s("u<c0>"),jV:s("u<cZ>"),yo:s("u<eG>"),E:s("u<b6>"),uk:s("u<bl>"),wf:s("u<im>"),il:s("u<e0>"),l5:s("u<e_>"),ow:s("u<lv>"),j5:s("u<lw>"),pv:s("u<fF>"),Fy:s("u<e1<et>>"),EM:s("u<e1<cd>>"),w_:s("u<e1<bs>>"),f2:s("u<e1<du>>"),Fa:s("u<fH>"),sj:s("u<n>"),n:s("u<z>"),zz:s("u<@>"),t:s("u<l>"),vj:s("u<a5?>"),Cf:s("u<G?>"),AN:s("u<b9>"),w:s("hs"),m:s("a5"),w7:s("a5()"),ud:s("dh"),Eh:s("bV<@>"),hk:s("D<bT>"),b:s("D<bb>"),xp:s("D<cr>"),nx:s("D<a5>"),rW:s("D<X<i,i>>"),qr:s("D<bp>"),R:s("D<au>"),ba:s("D<cP>"),Es:s("D<br>"),DX:s("D<+(i,i)>"),pL:s("D<+(l,i)>"),E4:s("D<+(z,z,z,z)>"),bE:s("D<bs>"),fx:s("D<cR>"),a:s("D<i>"),gt:s("D<i5>"),D0:s("D<ds>"),cf:s("D<c0>"),p7:s("D<cZ>"),lm:s("D<ie>"),dd:s("D<z>"),j:s("D<@>"),J:s("D<l>"),ik:s("D<a5?>"),vX:s("D<G?>"),m2:s("hy"),h6:s("P<i,aI>"),gJ:s("P<i,cG>"),q:s("P<i,i>"),no:s("P<i,bi>"),AC:s("P<@,@>"),pr:s("P<l,@>"),yx:s("P<i,D<i>>"),mf:s("X<i,dg>"),vD:s("X<i,cx>"),ap:s("X<i,au>"),G:s("X<i,i>"),m0:s("X<i,n>"),gG:s("X<i,z>"),P:s("X<i,@>"),f:s("X<@,@>"),pG:s("X<l,eE>"),tQ:s("X<l,eF>"),aD:s("X<i,D<+(z,z,z,z)>>"),Bx:s("X<i,D<i>>"),oZ:s("X<i,G?>"),q1:s("X<c_,D<c0>>"),ee:s("X<l,X<i,i>>"),jT:s("S<i,i?>"),pw:s("cx"),kc:s("bp"),rV:s("fn"),mV:s("eu"),c:s("az"),K:s("G"),BB:s("bL"),A:s("au"),oP:s("dk"),wJ:s("be"),A_:s("cP"),T:s("br"),DL:s("hI"),Y:s("ey"),op:s("Gj"),ep:s("+()"),k0:s("+(bp,cd)"),ut:s("+(bi,du)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bv)"),nz:s("+(z,z,z,z)"),ez:s("hM"),wZ:s("ac"),tc:s("cQ<cr,bs>"),ou:s("cQ<cx,et>"),wm:s("cQ<bp,cd>"),qq:s("cQ<bi,du>"),j2:s("O"),m3:s("bs"),yz:s("bX"),U:s("aU"),F3:s("cR"),Q:s("dU<i>"),oG:s("dU<l>"),en:s("bt"),gl:s("aV"),u5:s("bu"),bG:s("bN"),ho:s("fv"),EH:s("aO<bJ>"),E0:s("aO<bL>"),l:s("cS"),w8:s("dp"),qL:s("b4"),N:s("i"),Aj:s("bi"),jP:s("cg"),d:s("bY"),bp:s("dV"),sg:s("af"),bs:s("dq"),qF:s("dW"),hL:s("dX<i,i>"),jC:s("kO"),eP:s("kP"),cV:s("L"),a7:s("b"),qY:s("bw"),L:s("bO"),gM:s("bZ"),hF:s("c_"),vw:s("eE"),BX:s("eF"),aA:s("ds"),AP:s("c0"),sy:s("l_"),bB:s("b5"),aS:s("cZ"),fu:s("eG"),fw:s("M<bK>"),vL:s("M<c8>"),vK:s("M<c9>"),Fj:s("M<bu>"),rZ:s("M<bN>"),vY:s("M<i>"),r4:s("M<bw>"),g2:s("M<bZ>"),cE:s("M<c_>"),rt:s("T<bt>"),xG:s("T<aV>"),fh:s("T<bw>"),Ai:s("cB<i>"),e:s("b6"),dr:s("ie"),hR:s("aw<@>"),BT:s("ii<G?,G?>"),Ez:s("d0"),rL:s("fB"),fo:s("ls"),xT:s("e0"),xz:s("e_"),la:s("lt"),cX:s("lu"),qS:s("is"),jS:s("fI"),kA:s("lH"),Br:s("cj<bX>"),V:s("iG"),jm:s("iH"),y:s("n"),Bs:s("n()"),kr:s("n(bK)"),e2:s("n(c8)"),rg:s("n(c9)"),bl:s("n(G)"),pz:s("n(bt)"),aV:s("n(aV)"),y2:s("n(bu)"),ty:s("n(bN)"),Ag:s("n(i)"),rd:s("n(bw)"),da:s("n(bZ)"),qR:s("n(c_)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(G)"),nW:s("@(G,cS)"),S:s("l"),eZ:s("bU<az>?"),r9:s("u<G?>?"),uh:s("a5?"),rK:s("D<@>?"),jd:s("X<i,D<i>>?"),X:s("G?"),D:s("i?"),oI:s("i?(i)"),Fx:s("i1?"),F:s("eJ<@,@>?"),Af:s("lp?"),k7:s("n?"),wK:s("n(ft)?"),u6:s("z?"),lo:s("l?"),s7:s("b9?"),Z:s("~()?"),Cv:s("~(dA)?"),kC:s("~(dB)?"),pf:s("~(fa)?"),hq:s("~(fh)?"),CA:s("~(dL)?"),hQ:s("~(bM)?"),Ci:s("~(bt)?"),nf:s("~(bN,bu)?"),f_:s("~(i)?"),DI:s("~(i,z)?"),xl:s("~(n)?"),vR:s("~(l)?"),o:s("b9"),H:s("~"),O:s("~()"),m1:s("~(i,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hw=J.jX.prototype
B.a=J.u.prototype
B.c=J.hr.prototype
B.d=J.er.prototype
B.b=J.dO.prototype
B.hx=J.dh.prototype
B.hy=J.hu.prototype
B.q=A.hB.prototype
B.cP=A.hF.prototype
B.d2=J.kl.prototype
B.bz=J.dW.prototype
B.a4=new A.cE(1,"standard")
B.I=new A.j6(B.a4)
B.bD=new A.cE(0,"concise")
B.bE=new A.cE(2,"verbose")
B.aj=new A.dA(null,null,null,null,null)
B.m8=new A.j8(0,"opaque")
B.dy=new A.jc(4,"ambience")
B.bI=new A.cp(3,"mono")
B.aH=new A.d8(0,"full")
B.bH=new A.cp(0,"auto")
B.bG=new A.cF(1,"standard")
B.bF=new A.d7(0,"defaultMix")
B.aI=new A.dB(B.bH,B.bG,B.aH,B.bF)
B.dF=new A.h7("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.dG=new A.h7("webgl2 unavailable",0,"webglUnavailable")
B.Z=new A.hO(1,"pixeldart")
B.dH=new A.f3(B.Z,!1,!0,!1,null,!1,null,!1,null)
B.bK=new A.dC(1,"capturing")
B.dI=new A.d9(B.bK,null)
B.bL=new A.dC(3,"rejected")
B.aJ=new A.d9(B.bL,null)
B.bM=new A.dC(4,"applied")
B.bJ=new A.d9(B.bM,null)
B.bN=new A.dC(5,"cancelled")
B.dJ=new A.d9(B.bN,null)
B.aK=new A.dC(2,"conflict")
B.ak=new A.je(0,"add")
B.dN=new A.ee(0,"zero")
B.a5=new A.ee(1,"one")
B.a6=new A.jf(0,"alpha")
B.E=new A.dD(1,"button")
B.n=new A.dE(0,"normal")
B.dQ=new A.b_("settings.back",B.E,"back","back to pause menu",B.n)
B.al=new A.dD(0,"heading")
B.dR=new A.b_("settings.heading",B.al,"Settings",null,B.n)
B.dS=new A.b_("settings.controls.heading",B.al,"Controls",null,B.n)
B.dT=new A.b_("settings.controls.back",B.E,"back","back to settings categories",B.n)
B.dU=new A.b_("pause.heading",B.al,"Paused",null,B.n)
B.dV=new A.dD(3,"slider")
B.dW=new A.dD(4,"toggle")
B.bO=new A.dD(5,"keybind")
B.am=new A.dE(5,"disabled")
B.dX=new A.dE(6,"error")
B.dY=new A.dE(7,"destructive")
B.bP=new A.dE(8,"remapping")
B.bQ=new A.h6()
B.bR=new A.n_()
B.aL=new A.n0()
B.m9=new A.n2()
B.dZ=new A.jd()
B.bS=new A.nc()
B.e_=new A.hg(A.a0("hg<0&>"))
B.bT=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.e0=function() {
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
B.e5=function(getTagFallback) {
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
B.e1=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.e4=function(hooks) {
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
B.e3=function(hooks) {
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
B.e2=function(hooks) {
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
B.bU=function(hooks) { return hooks; }

B.k=new A.k2()
B.ma=new A.pb()
B.e6=new A.G()
B.e7=new A.kj()
B.mb=new A.pO()
B.e8=new A.pP()
B.e9=new A.cR()
B.ab=new A.cf(1,"gradeLUT")
B.ea=new A.cR()
B.eb=new A.qj()
B.ec=new A.ql()
B.f=new A.qq()
B.bV=new A.kR()
B.lf=new A.cX(0,"position")
B.lk=new A.bw(B.lf,0,3)
B.dq=new A.cX(1,"normal")
B.ll=new A.bw(B.dq,3,3)
B.lg=new A.cX(2,"color")
B.lm=new A.bw(B.lg,6,4)
B.lh=new A.cX(4,"alpha")
B.ln=new A.bw(B.lh,10,1)
B.li=new A.cX(5,"uv0")
B.lo=new A.bw(B.li,11,2)
B.lj=new A.cX(8,"legacyMaterialEffect")
B.lp=new A.bw(B.lj,13,1)
B.T=s([B.lk,B.ll,B.lm,B.ln,B.lo,B.lp],A.a0("u<bw>"))
B.a7=new A.ro()
B.bW=new A.lm()
B.w=new A.lA()
B.an=new A.lL()
B.ed=new A.f6(1.3089969389957472,0.1,60)
B.ee=new A.f6(1.0471975511965976,0.1,60)
B.ef=new A.f6(0.8726646259971648,0.08,45)
B.a8=new A.f8(0,"colorOnly")
B.bX=new A.f8(1,"colorAndDepth")
B.aM=new A.f8(2,"depthOnly")
B.aN=new A.jl(1,"srgb")
B.ao=new A.jq(1,"back")
B.ap=new A.js(0,"less")
B.aq=new A.bK(0,"open")
B.bY=new A.bK(1,"chain")
B.bZ=new A.bK(2,"throughDoor")
B.c_=new A.bK(3,"letterbox")
B.a9=new A.bK(4,"ignore")
B.R=new A.fc(0,"opaque")
B.el=new A.fc(1,"masked")
B.aO=new A.fc(2,"blended")
B.em=new A.fd(!1,B.ap,!1,!0,B.a5,B.a5,B.ak,!1,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.en=new A.fd(!0,B.ap,!1,!0,B.a5,B.a5,B.ak,!0,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.dO=new A.ee(2,"srcAlpha")
B.dP=new A.ee(3,"oneMinusSrcAlpha")
B.eo=new A.fd(!0,B.ap,!1,!0,B.dO,B.dP,B.ak,!0,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.ep=new A.dI(0)
B.eq=new A.dI(24e5)
B.c0=new A.c8(0,"compliance")
B.er=new A.fe(B.c0)
B.c1=new A.c8(1,"rupture")
B.es=new A.fe(B.c1)
B.c2=new A.c8(2,"synchronisation")
B.et=new A.fe(B.c2)
B.c3=new A.ei(0,"front")
B.eu=new A.ei(1,"rearService")
B.ev=new A.ei(2,"sideBoundary")
B.ew=new A.ei(3,"roofline")
B.l=new A.dJ(0,"north")
B.x=new A.dJ(1,"east")
B.m=new A.dJ(2,"south")
B.J=new A.dJ(3,"west")
B.ar=new A.hk(0,"ground")
B.as=new A.hk(1,"first")
B.ex=new A.dK(0,"mantle")
B.ey=new A.dK(1,"portal")
B.eA=new A.dK(3,"inventory")
B.eB=new A.dK(4,"none")
B.eC=new A.ej(B.eB,null)
B.ez=new A.dK(2,"window")
B.eD=new A.ej(B.ez,"the shutter")
B.eE=new A.F("saved mantle history is malformed",null,null)
B.eF=new A.F("rupture elapsed time is malformed",null,null)
B.eG=new A.F("presentation keys must be strings",null,null)
B.eH=new A.F("unsupported accessibility profile",null,null)
B.eI=new A.F("inventory inspections must be an object",null,null)
B.c4=new A.F("saved mantle state is malformed",null,null)
B.eJ=new A.F("inactive rupture has elapsed time",null,null)
B.eK=new A.F("control sensitivity is outside 0.1\u20133.0",null,null)
B.eL=new A.F("invalid action bindings",null,null)
B.eM=new A.F("listener room is empty",null,null)
B.eN=new A.F("control bindings conflict",null,null)
B.eO=new A.F("saved difficulty state is malformed",null,null)
B.eP=new A.F("saved house drift state is malformed",null,null)
B.eQ=new A.F("saved sleep record is malformed",null,null)
B.eR=new A.F("UI scale must be between 0.8 and 2.0",null,null)
B.eS=new A.F("unsupported settings store",null,null)
B.eT=new A.F("settings values must be an object",null,null)
B.eU=new A.F("saved day-loop sleepHistory must be a list",null,null)
B.eV=new A.F("invalid anisotropy limit",null,null)
B.eW=new A.F("audio event position is not finite",null,null)
B.eX=new A.F("event sequence must be non-negative",null,null)
B.eY=new A.F("inventory inspection counts are invalid",null,null)
B.eZ=new A.F("only keybinds can be remapping",null,null)
B.f_=new A.F("modelScale must be positive and finite",null,null)
B.f0=new A.F("listener position is not finite",null,null)
B.f1=new A.F("invalid action ID",null,null)
B.f2=new A.F("saved window state is malformed",null,null)
B.f3=new A.F("unsupported graphics preset",null,null)
B.f4=new A.F("save run and meta must be objects",null,null)
B.f5=new A.F("saved house state is malformed",null,null)
B.f6=new A.F("saved sleep record must be an object",null,null)
B.f7=new A.F("sound cue must be a non-empty string",null,null)
B.f8=new A.F("saved session run is malformed",null,null)
B.f9=new A.F("save map keys must be strings",null,null)
B.fa=new A.F("unsupported graphics profile",null,null)
B.fb=new A.F("unsupported audio options",null,null)
B.fc=new A.F("transform.scale must be positive",null,null)
B.fd=new A.F("Escape is reserved for pause navigation",null,null)
B.fe=new A.F("saved day-loop state is malformed",null,null)
B.ff=new A.F("rupture extinguished mantle is unknown",null,null)
B.c5=new A.F("unsupported controls profile",null,null)
B.c6=new A.F("saved portal state is malformed",null,null)
B.fg=new A.F("acoustic portal profile is not finite",null,null)
B.fh=new A.F("saved house state does not match this house",null,null)
B.fi=new A.F("presentation snapshot contains a non-finite number",null,null)
B.fj=new A.F("unsupported gameplay settings profile",null,null)
B.fk=new A.F("save contains a non-finite number",null,null)
B.fl=new A.F("unsupported graphics store",null,null)
B.fm=new A.F("brush component needs an id and label",null,null)
B.fn=new A.F("text.json root must be an object",null,null)
B.fo=new A.F("event kind is empty",null,null)
B.fp=new A.F("invalid control binding token",null,null)
B.fq=new A.F("audio transmission muffle is invalid",null,null)
B.fr=new A.F("acoustic portal muffle order is invalid",null,null)
B.fs=new A.F("unsupported settings profile",null,null)
B.ft=new A.F("saved session clock is malformed",null,null)
B.fu=new A.F("rupture mantle IDs are malformed",null,null)
B.fv=new A.F("invalid gameplay setting: contextualReminders",null,null)
B.fw=new A.F("invalid screen-reader verbosity",null,null)
B.fx=new A.F("saved sleep record has an unknown enum",null,null)
B.fy=new A.F("audio cue variants are empty",null,null)
B.fz=new A.F("save root must be an object",null,null)
B.fA=new A.F("audio event identity is empty",null,null)
B.fB=new A.F("render capabilities contain invalid limits",null,null)
B.fC=new A.F("saved house overrides are malformed",null,null)
B.S=new A.di(0,0,0)
B.cv=new A.di(1,1,1)
B.ii=s([],t.Fk)
B.b1=s([],t.cv)
B.fD=new A.jG(B.S,B.S,0,1,B.cv,0,null,B.ii,B.b1)
B.c7=new A.aI(0,0,0)
B.fE=new A.ek(0,"idle")
B.at=new A.ek(1,"active")
B.fF=new A.ek(2,"ended")
B.fG=new A.ek(3,"aborted")
B.c8=new A.fg(0,"outside")
B.fH=new A.fg(1,"intersects")
B.fI=new A.fg(2,"inside")
B.fJ=new A.em(0,"timeAdvanced")
B.fK=new A.em(1,"dayEndReached")
B.fL=new A.em(4,"slept")
B.fM=new A.em(5,"complianceFloorTripped")
B.c9=new A.dc(0,"important")
B.ca=new A.dc(1,"always")
B.aP=new A.c9(0,"pauseAndMute")
B.cb=new A.dd(0,"press")
B.cc=new A.dd(1,"hold")
B.cd=new A.de(0,"compact")
B.ce=new A.de(1,"spacious")
B.cf=new A.cH(1,"standard")
B.cg=new A.cH(2,"detailed")
B.ch=new A.df(0,"toast")
B.ci=new A.df(1,"detailed")
B.cj=new A.cI(1,"readable")
B.fS=new A.hl(0,"vertex")
B.ck=new A.hl(1,"indices")
B.cl=new A.jK(0,"staticDraw")
B.h=new A.hm(0,"ready")
B.aa=new A.hm(1,"lost")
B.fT=new A.en(0,"color")
B.cm=new A.en(1,"colorAndGlow")
B.fU=new A.en(2,"colorDepthGlow")
B.aQ=new A.en(3,"depthOnly")
B.au=new A.jM(1,"linear")
B.cn=new A.jN(0,"clampToEdge")
B.fV=new A.jL(1,1,1,!1,B.au,B.au,B.cn,1)
B.fW=new A.cK(0,"beforeShadow")
B.fX=new A.cK(2,"beforeDepth")
B.co=new A.cK(3,"afterDepth")
B.cp=new A.cK(4,"beforeWorld")
B.fY=new A.cK(5,"afterWorld")
B.K=new A.cK(6,"afterResolve")
B.fZ=new A.cK(9,"beforePresent")
B.cq=new A.ca(0,"readBeforeWrite")
B.h_=new A.ca(1,"duplicateWriter")
B.h0=new A.ca(2,"sampledMultisampledAttachment")
B.aR=new A.ca(3,"invalidResolve")
B.h1=new A.ca(4,"formatOrSizeMismatch")
B.h2=new A.ca(5,"unversionedReadWrite")
B.h3=new A.ca(6,"invalidHistoryRead")
B.h4=new A.ca(7,"dependencyCycle")
B.h5=new A.ca(8,"missingCapability")
B.cr=new A.cq(0,"high")
B.aS=new A.cq(1,"standard")
B.aT=new A.dL(1,B.aS,"auto",!1,"display","off","high")
B.av=new A.dM(0,"player")
B.aU=new A.dM(1,"inserted")
B.cs=new A.dM(2,"warden")
B.ct=new A.eo(0,"wrongKind")
B.cu=new A.eo(1,"staleGeneration")
B.h8=new A.eo(2,"doubleRelease")
B.aw=new A.eo(3,"releasedResource")
B.hb=new A.cL("kitchen-range","settle")
B.hc=new A.cL("front-door-knocker","knock")
B.hd=new A.cL("cellar-drain","drip")
B.he=new A.cL("bedroom-timber","creak")
B.hf=new A.cL("kitchen-pipe","tick")
B.hg=new A.cL("bathroom-cistern","settle")
B.hh=new A.cL("landing-window","wind")
B.hv=new A.jW(1,"visitor")
B.hz=new A.p8(null)
B.hA=new A.p9(null)
B.hB=new A.di(0.34,0.39,0.5)
B.hC=new A.di(0.012,0.016,0.028)
B.hD=new A.di(0.008,0.012,0.024)
B.cw=s([0,2,2,3],t.t)
B.hE=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.aV=s([B.c9,B.ca],A.a0("u<dc>"))
B.hF=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.D=new A.bt(0,"audio")
B.P=new A.hT(0,"level")
B.kD=new A.aV("master","Master",B.D,B.P,1,0,1,"audio")
B.kI=new A.aV("voice","Visitor voice",B.D,B.P,1,0,1,"audio")
B.kz=new A.aV("effects","Effects",B.D,B.P,1,0,1,"audio")
B.kA=new A.aV("ambience","House ambience",B.D,B.P,1,0,1,"audio")
B.kE=new A.aV("music","Music",B.D,B.P,1,0,1,"audio")
B.aA=new A.bt(1,"display")
B.kH=new A.aV("brightness","Display brightness",B.aA,B.P,1,0.6,1.4,"display")
B.ad=new A.hT(1,"toggle")
B.kC=new A.aV("muted","Mute house audio",B.D,B.ad,!1,null,null,"audio")
B.a0=new A.bt(2,"accessibility")
B.kF=new A.aV("mono","Mono-compatible mix",B.a0,B.ad,!1,null,null,"audio")
B.kB=new A.aV("high-contrast","High-contrast interface",B.a0,B.ad,!1,null,null,"display")
B.kG=new A.aV("strong-highlights","Strong focus highlights",B.a0,B.ad,!1,null,null,"display")
B.B=s([B.kD,B.kI,B.kz,B.kA,B.kE,B.kH,B.kC,B.kF,B.kB,B.kG],A.a0("u<aV>"))
B.y=s(["who","verb","object","place","time"],t.s)
B.hG=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dz=new A.d7(1,"strong")
B.aW=s([B.bF,B.dz],A.a0("u<d7>"))
B.dK=new A.ed(0,"swap")
B.dL=new A.ed(1,"replace")
B.dM=new A.ed(2,"cancel")
B.hH=s([B.dK,B.dL,B.dM],A.a0("u<ed>"))
B.hI=s([2,5,9,12,16,19],t.t)
B.fN=new A.c9(1,"pauseOnly")
B.fO=new A.c9(2,"continuePlayback")
B.ax=s([B.aP,B.fN,B.fO],A.a0("u<c9>"))
B.hJ=s(["uQuantizationBits","uDitherStrength"],t.s)
B.hL=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.hM=s([B.aq,B.bY,B.bZ,B.c_,B.a9],A.a0("u<bK>"))
B.hN=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.hO=s(["30","60","display"],t.s)
B.ai=new A.c_(0,"full")
B.bA=new A.c_(1,"compressed")
B.bB=new A.c_(2,"off")
B.cx=s([B.ai,B.bA,B.bB],A.a0("u<c_>"))
B.hP=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dE=new A.d8(1,"reduced")
B.aX=s([B.aH,B.dE],A.a0("u<d8>"))
B.dA=new A.cF(0,"wide")
B.dB=new A.cF(2,"night")
B.aY=s([B.dA,B.bG,B.dB],A.a0("u<cF>"))
B.hQ=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.i0=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.i1=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.aZ=s([B.cd,B.ce],A.a0("u<de>"))
B.kP=new A.bN(0,"long")
B.de=new A.bN(1,"short")
B.cy=s([B.kP,B.de],A.a0("u<bN>"))
B.W=new A.bM(0,"visual")
B.bd=new A.bM(1,"graphics")
B.X=new A.bM(2,"gameplay")
B.be=new A.bM(3,"controls")
B.F=new A.bM(4,"audio")
B.G=new A.bM(5,"accessibility")
B.i3=s([B.W,B.bd,B.X,B.be,B.F,B.G],A.a0("u<bM>"))
B.i4=s([2.1,4.2,6.3],t.n)
B.i5=s(["master","voice","effects","ambience","music"],t.s)
B.b_=s([B.ch,B.ci],A.a0("u<df>"))
B.i6=s(["res/house/house.json","assets/house/house.json"],t.s)
B.h6=new A.cq(2,"safe")
B.h7=new A.cq(3,"custom")
B.cz=s([B.cr,B.aS,B.h6,B.h7],A.a0("u<cq>"))
B.C=new A.cf(0,"inactive")
B.bm=new A.cf(2,"affineWarp")
B.bn=new A.cf(3,"vertexSnap")
B.bo=new A.cf(4,"tapeGiveup")
B.bp=new A.cf(5,"portalFail")
B.a_=new A.cf(6,"lightsOut")
B.cA=s([B.C,B.ab,B.bm,B.bn,B.bo,B.bp,B.a_],A.a0("u<cf>"))
B.i7=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.i8=s([B.av,B.aU,B.cs],A.a0("u<dM>"))
B.i9=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.m3=new A.bl("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.m2=new A.bl("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.lZ=new A.bl("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.m6=new A.bl("ronnie.response","named","A route card has Ronnie written on its back.")
B.m5=new A.bl("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ia=s([B.m3,B.m2,B.lZ,B.m6,B.m5],t.uk)
B.m4=new A.bl("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.m1=new A.bl("ronnie.response","named","The name Ronnie holds when the room does not.")
B.m_=new A.bl("denise.revision","accepted","One correction remains yours to protect.")
B.lX=new A.bl("attercliffe.plate","kept","A second place survives the room changing around it.")
B.ib=s([B.m4,B.m1,B.m_,B.lX],t.uk)
B.L=s([],t.cO)
B.im=s([],t.Fm)
B.il=s([],t.vS)
B.ic=s([],A.a0("u<cs>"))
B.ie=s([],t.yH)
B.b0=s([],t.b4)
B.ih=s([],t.ea)
B.U=s([],t.qP)
B.ig=s([],t.u)
B.cC=s([],t.xB)
B.id=s([],t.El)
B.o=s([],t.s)
B.cD=s([],t.ld)
B.b2=s([],t.E)
B.io=s([],t.t)
B.ip=s([],t.zz)
B.ha=new A.hp(15,"kitchen",-0.3,0)
B.h9=new A.hp(19,"spare-room",0,0.3)
B.M=s([B.ha,B.h9],A.a0("u<hp>"))
B.ir=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.kM=new A.bu(0,"bed")
B.kN=new A.bu(1,"chair")
B.kO=new A.bu(2,"floor")
B.cE=s([B.kM,B.kN,B.kO],A.a0("u<bu>"))
B.is=s(["high","medium","low"],t.s)
B.dC=new A.cp(1,"headphones")
B.dD=new A.cp(2,"speakers")
B.b3=s([B.bH,B.dC,B.dD,B.bI],A.a0("u<cp>"))
B.it=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.b4=s([B.cb,B.cc],A.a0("u<dd>"))
B.bc=new A.ce(0,"root")
B.cS=new A.be(0,"pauseMenu")
B.jw=new A.dk(B.bc,B.cS,null)
B.iu=s([B.jw],t.bA)
B.b5=s([B.bD,B.a4,B.bE],A.a0("u<cE>"))
B.fQ=new A.cI(0,"instant")
B.fR=new A.cI(2,"slow")
B.b6=s([B.fQ,B.cj,B.fR],A.a0("u<cI>"))
B.iv=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.iw=s([B.D,B.aA,B.a0],A.a0("u<bt>"))
B.cF=s([B.l,B.x,B.m,B.J],A.a0("u<dJ>"))
B.bq=new A.b4(0,"depthTest")
B.br=new A.b4(1,"depthFunc")
B.bs=new A.b4(2,"depthWrite")
B.bt=new A.b4(3,"blendEnable")
B.bu=new A.b4(4,"blendFunc")
B.bv=new A.b4(5,"blendEquation")
B.bw=new A.b4(6,"cullEnable")
B.bx=new A.b4(7,"cullFace")
B.dh=new A.b4(8,"frontFace")
B.kS=new A.b4(9,"stencilEnable")
B.df=new A.b4(10,"colorMask")
B.dg=new A.b4(11,"scissorEnable")
B.ix=s([B.bq,B.br,B.bs,B.bt,B.bu,B.bv,B.bw,B.bx,B.dh,B.kS,B.df,B.dg],A.a0("u<b4>"))
B.iy=s(["off","fxaa","msaa2","msaa4"],t.s)
B.ei=new A.da("A.J.",1.275)
B.eg=new A.da("A.J.",1.53)
B.ej=new A.da("A.J.",1.77)
B.ek=new A.da("A.J.",2.025)
B.eh=new A.da("A.J.",4.8)
B.iz=s([B.ei,B.eg,B.ej,B.ek,B.eh],t.cO)
B.iA=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.iB=s(["uBloomStrength"],t.s)
B.iC=s(["uLutSize","uStrength"],t.s)
B.iD=s([B.c0,B.c1,B.c2],A.a0("u<c8>"))
B.iE=s(["uTexelSize","uNear","uFar"],t.s)
B.cG=s(["uTexelStep"],t.s)
B.iF=s(["uninitialized"],t.s)
B.fP=new A.cH(0,"minimal")
B.b7=s([B.fP,B.cf,B.cg],A.a0("u<cH>"))
B.m0=new A.bl("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.lW=new A.bl("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.lV=new A.bl("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.lY=new A.bl("ronnie.response","named","The route card gives one name its own line.")
B.iG=s([B.m0,B.lW,B.lV,B.lY],t.uk)
B.a2=new A.bZ(0,"waiting")
B.ag=new A.bZ(1,"atDoor")
B.ah=new A.bZ(2,"consulting")
B.aD=new A.bZ(3,"resolved")
B.iH=s([B.a2,B.ag,B.ah,B.aD],A.a0("u<bZ>"))
B.iI=s(["floor-linoleum","ceiling-stained"],t.s)
B.jm={uAlbedo:0}
B.cH=new A.a4(B.jm,[0],t.I)
B.j1={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.cI=new A.a4(B.j1,[2,3,4,5,6],t.I)
B.jt={uSsaoRaw:0,uSceneDepth:1}
B.iJ=new A.a4(B.jt,[0,1],t.I)
B.cQ={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.i_=s(["KeyW","GamepadDpadUp"],t.s)
B.hZ=s(["KeyS","GamepadDpadDown"],t.s)
B.hR=s(["KeyA","GamepadDpadLeft"],t.s)
B.hS=s(["KeyD","GamepadDpadRight"],t.s)
B.hT=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.hX=s(["KeyQ","GamepadB"],t.s)
B.i2=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.iq=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.hY=s(["KeyR","GamepadX"],t.s)
B.hU=s(["KeyF","GamepadRB"],t.s)
B.hV=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.hW=s(["KeyL"],t.s)
B.hK=s(["Escape","GamepadMenu"],t.s)
B.iK=new A.a4(B.cQ,[B.i_,B.hZ,B.hR,B.hS,B.hT,B.hX,B.i2,B.iq,B.hY,B.hU,B.hV,B.hW,B.hK],A.a0("a4<i,D<i>>"))
B.iL=new A.a4(B.cQ,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.jq={uScene:0,uHistory:1}
B.iM=new A.a4(B.jq,[0,1],t.I)
B.j_={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.iN=new A.a4(B.j_,["b95463f82d4116a129437eaed9ebe225e46cbffd","c3096a56730324c3a41d97fc4579be1e735cd92d","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.jd={aPosition:0,aUvMat:1}
B.cJ=new A.a4(B.jd,[0,4],t.I)
B.jr={uScene:0,uLut:1}
B.iO=new A.a4(B.jr,[0,1],t.I)
B.js={uSource:0}
B.cK=new A.a4(B.js,[0],t.I)
B.jk={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.iP=new A.a4(B.jk,[0,1,2,3,4,5,6],t.I)
B.cL=new A.cJ([B.W,"settings.visual",B.bd,"settings.graphics",B.X,"settings.gameplay",B.be,"settings.controls",B.F,"settings.audio",B.G,"settings.accessibility"],t.EJ)
B.cM=new A.cJ([B.W,"visual",B.bd,"graphics",B.X,"gameplay",B.be,"controls",B.F,"audio",B.G,"accessibility"],t.EJ)
B.j9={uSharp:0,uBlurred:1,uSceneDepth:2}
B.iQ=new A.a4(B.j9,[0,1,2],t.I)
B.jv={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.iR=new A.a4(B.jv,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.jf={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.hr=new A.bc("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hm=new A.bc("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.hq=new A.bc("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.ht=new A.bc("wallpaper-damp","grime",7106925,0.94,0.76)
B.hn=new A.bc("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.hs=new A.bc("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.hu=new A.bc("wallpaper-peeling","grime",9340536,0.91,0.68)
B.ho=new A.bc("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hk=new A.bc("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hl=new A.bc("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hi=new A.bc("floor-concrete","grime",7828331,0.96,0.92)
B.hj=new A.bc("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hp=new A.bc("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.b8=new A.a4(B.jf,[B.hr,B.hm,B.hq,B.ht,B.hn,B.hs,B.hu,B.ho,B.hk,B.hl,B.hi,B.hj,B.hp],A.a0("a4<i,bc>"))
B.jn={uBloom:0}
B.iS=new A.a4(B.jn,[0],t.I)
B.jo={uSceneDepth:0}
B.iT=new A.a4(B.jo,[0],t.I)
B.jp={uScene:0}
B.iU=new A.a4(B.jp,[0],t.I)
B.N={}
B.cO=new A.a4(B.N,[],A.a0("a4<i,h6>"))
B.cN=new A.a4(B.N,[],t.p)
B.b9=new A.a4(B.N,[],A.a0("a4<i,z>"))
B.u=new A.a4(B.N,[],t.I)
B.md=new A.a4(B.N,[],A.a0("a4<i,i?>"))
B.iV=new A.a4(B.N,[],A.a0("a4<@,@>"))
B.j3={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.iW=new A.a4(B.j3,[0,1,2,3,4,5,6],t.I)
B.cT=new A.cz(0,"resume")
B.cU=new A.cz(1,"settings")
B.cV=new A.cz(2,"controls")
B.cW=new A.cz(3,"save")
B.cX=new A.cz(4,"help")
B.cY=new A.cz(5,"credits")
B.cZ=new A.cz(6,"back")
B.iX=new A.cJ([B.cT,"pause.resume",B.cU,"pause.settings",B.cV,"pause.controls",B.cW,"pause.save",B.cX,"pause.help",B.cY,"pause.credits",B.cZ,"pause.back"],A.a0("cJ<cz,i>"))
B.jh={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.iY=new A.a4(B.jh,[0,1,2,3],t.I)
B.ju={uTex:0}
B.iZ=new A.a4(B.ju,[0],t.I)
B.ba=new A.cJ([B.ab,1,B.bm,1.5,B.bn,1.5,B.bo,2,B.bp,2,B.a_,4],A.a0("cJ<cf,z>"))
B.ij=s([],t.bA)
B.ik=s([],A.a0("u<be>"))
B.bb=new A.dR(B.ij,B.ik,null)
B.cR=new A.ce(1,"settings")
B.jx=new A.ce(2,"visual")
B.jy=new A.ce(3,"graphics")
B.jz=new A.ce(4,"gameplay")
B.jA=new A.ce(5,"controls")
B.jB=new A.ce(6,"audio")
B.jC=new A.ce(7,"accessibility")
B.jD=new A.ce(8,"credits")
B.V=new A.be(1,"settings")
B.jE=new A.be(2,"journal")
B.jF=new A.be(3,"sleep")
B.jG=new A.be(4,"help")
B.jH=new A.be(5,"visitor")
B.jI=new A.be(6,"ending")
B.d_=new A.dS(0,"opened")
B.d0=new A.dS(2,"backed")
B.d1=new A.dS(3,"resumed")
B.jJ=new A.dS(4,"dismissed")
B.Y=new A.dS(5,"unchanged")
B.jK=new A.kk(0,1,null)
B.jL=new A.ko(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.bf=new A.ex(0,"safe")
B.bg=new A.ex(1,"standard")
B.bh=new A.ex(2,"high")
B.O=new A.aH(B.N,0,t.M)
B.ay=new A.ew(B.bf,B.O)
B.jl={shadows:0}
B.ky=new A.aH(B.jl,1,t.M)
B.jN=new A.ew(B.bg,B.ky)
B.j6={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.kq=new A.aH(B.j6,5,t.M)
B.jO=new A.ew(B.bh,B.kq)
B.jM=new A.ex(4,"shipping")
B.j8={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.kr=new A.aH(B.j8,7,t.M)
B.me=new A.ew(B.jM,B.kr)
B.jQ=new A.aX(0,1)
B.jR=new A.ap(0.46,0.25,0.2)
B.jS=new A.ap(0.48,0.4,0.34)
B.jT=new A.ap(0.31,0.25,0.23)
B.jU=new A.ap(0.37,0.33,0.31)
B.jV=new A.ap(0.34,0.32,0.29)
B.d3=new A.ap(0.38,0.25,0.19)
B.jW=new A.ap(0.31,0.28,0.24)
B.jX=new A.ap(0.58,0.56,0.5)
B.jY=new A.ap(0.44,0.37,0.28)
B.jZ=new A.ap(0.52,0.5,0.44)
B.k_=new A.ap(0.24,0.25,0.27)
B.k0=new A.ap(0.28,0.27,0.25)
B.k1=new A.ap(0.42,0.4,0.38)
B.k2=new A.ap(0.18,0.2,0.21)
B.k3=new A.ap(0.2,0.12,0.1)
B.k4=new A.ap(0.12,0.15,0.2)
B.bi=new A.hO(0,"legacy")
B.d4=new A.ez(0,"constructed")
B.z=new A.ez(1,"ready")
B.az=new A.ez(2,"lost")
B.d5=new A.ez(3,"disposed")
B.mc=new A.jv(1,"errorsOnly")
B.k5=new A.ku(B.ay,384,216,0)
B.bj=new A.eA(0,"constructed")
B.k6=new A.eA(1,"initializing")
B.bk=new A.eA(2,"ready")
B.d6=new A.eA(3,"contextLost")
B.i=new A.fs(0,"read")
B.j=new A.fs(1,"write")
B.H=new A.fs(2,"historyRead")
B.r=new A.hQ(0,"rgba8")
B.k7=new A.aN("dofBlurH",B.r,192,108,1,0)
B.k8=new A.aN("dofBlurV",B.r,192,108,1,0)
B.k9=new A.aN("dofOutput",B.r,384,216,1,0)
B.d7=new A.hQ(2,"depth24")
B.ka=new A.aN("shadowMap",B.d7,512,512,1,0)
B.kb=new A.aN("ssaoRaw",B.r,192,108,1,0)
B.kc=new A.aN("ssaoBlurred",B.r,192,108,1,0)
B.kd=new A.aN("gradeOutput",B.r,384,216,1,0)
B.ke=new A.aN("vhsOutput",B.r,384,216,1,0)
B.kf=new A.aN("sceneDepth",B.d7,384,216,1,0)
B.kg=new A.aN("bloomBlurH",B.r,192,108,1,0)
B.kh=new A.aN("bloomBlurV",B.r,192,108,1,0)
B.ki=new A.aN("present",B.r,384,216,1,0)
B.bl=new A.aN("sceneColor",B.r,384,216,1,0)
B.kj=new A.aN("ps1Output",B.r,384,216,1,0)
B.kk=new A.eB(null,"save storage unavailable")
B.kl=new A.eB(null,"save could not be recovered")
B.km=new A.eB(null,null)
B.jb={WheelUp:0,WheelDown:1}
B.kn=new A.aH(B.jb,2,t.M)
B.j5={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.ko=new A.aH(B.j5,4,t.M)
B.ji={open:0,closed:1}
B.kp=new A.aH(B.ji,2,t.M)
B.j4={Escape:0}
B.d8=new A.aH(B.j4,1,t.M)
B.j2={open:0,closed:1,mixed:2}
B.ks=new A.aH(B.j2,3,t.M)
B.jg={front:0,"rear-service":1}
B.kt=new A.aH(B.jg,2,t.M)
B.jj={overcast:0,rain:1}
B.ku=new A.aH(B.jj,2,t.M)
B.je={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.kv=new A.aH(B.je,16,t.M)
B.jc={Escape:0,Tab:1,F11:2}
B.d9=new A.aH(B.jc,3,t.M)
B.ja={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.kw=new A.aH(B.ja,5,t.M)
B.j7={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ac=new A.aH(B.j7,7,t.M)
B.j0={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.kx=new A.aH(B.j0,9,t.M)
B.dc=new A.eC(2,"link")
B.kJ=new A.hU(B.dc,"gl.createProgram() returned null")
B.da=new A.eC(0,"vertex")
B.db=new A.eC(1,"fragment")
B.dd=new A.eC(3,"validation")
B.kK=new A.hV(0,"full")
B.kL=new A.hV(2,"culled")
B.a1=new A.L(0,1,0)
B.aC=new A.L(0,-1,0)
B.kQ=new A.bv(-1,B.a1,B.aC,B.cv,1,1,0.3,0.5)
B.cB=s([],t.n)
B.kR=new A.kF(!1,"","",B.cB,B.cB)
B.di=new A.dV(0,"resident")
B.dj=new A.dV(1,"pending")
B.dk=new A.dV(2,"missing")
B.dl=new A.dV(3,"evicted")
B.af=new A.L(0,0,0)
B.jP=new A.ks(0,0,0,1)
B.A=new A.kL(B.af,B.jP)
B.kT=A.cm("G7")
B.kU=A.cm("G8")
B.kV=A.cm("nR")
B.kW=A.cm("Be")
B.kX=A.cm("Bs")
B.kY=A.cm("Bt")
B.kZ=A.cm("Bu")
B.l_=A.cm("a5")
B.l0=A.cm("G")
B.l1=A.cm("w2")
B.l2=A.cm("Ch")
B.l3=A.cm("Ci")
B.l4=A.cm("i1")
B.e=new A.cU(0,"float1")
B.aB=new A.cU(1,"float2")
B.p=new A.cU(2,"float3")
B.l5=new A.cU(3,"float4")
B.t=new A.cU(4,"mat4")
B.dm=new A.cU(5,"mat4Array")
B.by=new A.A(B.e,0)
B.dn=new A.A(B.e,1)
B.Q=new A.cU(6,"sampler")
B.v=new A.A(B.Q,0)
B.ae=new A.A(B.Q,1)
B.dp=new A.A(B.Q,2)
B.l6=new A.A(B.Q,3)
B.l7=new A.A(B.Q,4)
B.l8=new A.A(B.Q,5)
B.l9=new A.A(B.Q,6)
B.la=new A.rn(!1)
B.lb=new A.L(0,0,1)
B.lc=new A.L(1,0,0)
B.ld=new A.L(1/0,1/0,1/0)
B.le=new A.L(-1/0,-1/0,-1/0)
B.dr=new A.cX(6,"tangent4")
B.lq=new A.dY(0,"visitorAnswered")
B.ds=new A.dY(1,"visitorIgnored")
B.lr=new A.dY(2,"entryVerified")
B.ls=new A.dY(3,"entryContradicted")
B.lt=new A.dY(4,"exposureAccepted")
B.lv=new A.cY(1,"malformedDay")
B.lw=new A.cY(2,"malformedTier")
B.dt=new A.cY(3,"missingTierLines")
B.a3=new A.cY(6,"invalidPhase")
B.lz=new A.bj(B.a3,"No reaction is due.")
B.lH=new A.b5(B.lz)
B.lE=new A.bj(B.a3,"The active visit cannot be chosen.")
B.lI=new A.b5(B.lE)
B.lA=new A.bj(B.a3,"The active visit has no line to advance.")
B.lJ=new A.b5(B.lA)
B.ly=new A.cY(5,"noActiveVisit")
B.lB=new A.bj(B.ly,"There is no active visit.")
B.du=new A.b5(B.lB)
B.lD=new A.bj(B.a3,"A visit is already active.")
B.lK=new A.b5(B.lD)
B.lx=new A.cY(4,"noArrival")
B.lG=new A.bj(B.lx,"The authored arrival is missing.")
B.lL=new A.b5(B.lG)
B.lC=new A.bj(B.a3,"That answer is not offered.")
B.lM=new A.b5(B.lC)
B.lu=new A.cY(0,"missingCorpus")
B.lF=new A.bj(B.lu,"The authored visitor corpus is empty.")
B.lN=new A.b5(B.lF)
B.dv=new A.eI(1,"exact")
B.bC=new A.eI(2,"partial")
B.aE=new A.eI(3,"contradiction")
B.lO=new A.eI(0,"skipped")
B.lP=new A.eH(B.lO,B.O)
B.lQ=new A.eH(B.bC,B.O)
B.lR=new A.i7(B.U,!1)
B.lS=new A.i7(B.U,!0)
B.dw=new A.ia(0,"horizontal")
B.lT=new A.ia(1,"vertical")
B.dx=new A.ic(0,"horizontal")
B.lU=new A.ic(1,"vertical")
B.aF=new A.fG(0,"empty")
B.m7=new A.fG(1,"cpuReady")
B.aG=new A.fG(4,"released")})();(function staticFields(){$.t5=null
$.c5=A.e([],A.a0("u<G>"))
$.xJ=null
$.pT=0
$.pU=A.Eq()
$.xd=null
$.xc=null
$.zG=null
$.zx=null
$.zO=null
$.uO=null
$.uV=null
$.wQ=null
$.ti=A.e([],A.a0("u<D<G>?>"))
$.fV=null
$.iV=null
$.iW=null
$.wu=!1
$.ao=B.w
$.y0=""
$.y1=null
$.xX=null
$.pD=null
$.c3=A.a8()
$.d1=A.a8()
$.bE=null
$.m3=null
$.tu=A.a8()
$.B=A.a8()
$.bP=A.a8()
$.ad=A.a8()
$.yy=A.a8()
$.fX=null
$.Y=A.a8()
$.fS=null
$.bn=A.a8()
$.V=A.a8()
$.we=A.a8()
$.wp=null
$.bo=null
$.wh=!1
$.ma=!1
$.iS=B.aI
$.e3=B.aj
$.uC=!1
$.wJ=!1
$.yX=null
$.m2=null
$.lZ=null
$.yK=0
$.m8=!1
$.yW=!1
$.wv=0
$.z2=0
$.e4=0
$.zt=!1
$.wj="booting"
$.c4=0
$.e6=0
$.ax="hall"
$.iO=A.a8()
$.fN=A.a8()
$.bQ=A.a8()
$.z1=null
$.wB=0
$.b7=null
$.j_=!1
$.cl=A.a8()
$.fQ=A.a8()
$.fP=A.a8()
$.lV=A.a8()
$.yz=A.a8()
$.yx=A.a8()
$.aF=A.a8()
$.lW=A.a8()
$.iN=A.a8()
$.lU=A.a8()
$.iP=A.a8()
$.iQ=A.a8()
$.eR=A.a8()
$.fO=A.a8()
$.fM=A.a8()
$.iM=A.a8()
$.iK=A.a8()
$.iL=A.a8()
$.aK=A.a8()
$.lT=A.a8()
$.bm=A.a8()
$.uE=A.a2(t.S)
$.d2=A.e([],t.s)
$.wo=null
$.zn=!1
$.yC=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Ga","zZ",()=>A.zF("_$dart_dartClosure"))
s($,"G9","eb",()=>A.zF("_$dart_dartClosure_dartJSInterop"))
s($,"GQ","Aj",()=>A.e([new J.jY()],A.a0("u<hS>")))
s($,"Gm","A_",()=>A.dr(A.rj({
toString:function(){return"$receiver$"}})))
s($,"Gn","A0",()=>A.dr(A.rj({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Go","A1",()=>A.dr(A.rj(null)))
s($,"Gp","A2",()=>A.dr(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Gs","A5",()=>A.dr(A.rj(void 0)))
s($,"Gt","A6",()=>A.dr(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Gr","A4",()=>A.dr(A.xY(null)))
s($,"Gq","A3",()=>A.dr(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Gv","A8",()=>A.dr(A.xY(void 0)))
s($,"Gu","A7",()=>A.dr(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Gx","x_",()=>A.CG())
s($,"GB","Ad",()=>A.BL(4096))
s($,"Gz","Ab",()=>new A.tr().$0())
s($,"GA","Ac",()=>new A.tq().$0())
s($,"Gy","Aa",()=>A.BK(A.a1(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"GK","h2",()=>A.mf(B.l0))
s($,"Gk","wZ",()=>{A.BY()
return $.pT})
s($,"G6","zY",()=>B.bl.iZ())
s($,"Gf","wY",()=>A.ki(A.e([255,255,255,255],t.t)))
s($,"Gc","wV",()=>A.ki(A.e([128,128,255,255],t.t)))
s($,"Gb","wU",()=>A.ki(A.e([0,0,0,255],t.t)))
s($,"Gd","wW",()=>A.ki(A.e([255,255,0,255],t.t)))
s($,"Ge","wX",()=>A.ki(A.e([255,255,255,255],t.t)))
s($,"GS","Al",()=>A.i3(0,1,0))
s($,"Gw","A9",()=>A.CD(A.a2(t.N),0,0,A.i3(0,0,0)))
s($,"GR","Ak",()=>A.xO("^[a-z0-9][a-z0-9._-]*$"))
s($,"GV","h4",()=>{var q=$.xX
if(q==null){A.uL()
A.uL()
A.uL()
A.uL()
q=$.xX=new A.r8()}return q})
s($,"Gg","vx",()=>A.vH(B.c9,!0,B.aP,B.cb,B.ce,B.cf,B.ch,B.cj))
s($,"GH","Ae",()=>new A.n1())
r($,"zr","d5",()=>A.w_(null,null))
r($,"ui","x4",()=>A.jP(null,null))
r($,"wn","eW",()=>A.fb(null,null,!1,1,!1,!1,2,1))
r($,"wq","vz",()=>$.vx())
s($,"GL","Ag",()=>new A.ou())
s($,"GM","Ah",()=>new A.oD())
s($,"GN","vA",()=>new A.oX(A.p(t.N,t.S)))
s($,"GJ","Af",()=>A.cW().gaG().h(0,"debugPause")==="1")
s($,"GG","j3",()=>A.cW().gaG().h(0,"automation")==="1")
s($,"GD","vy",()=>A.EG())
s($,"GC","x0",()=>$.vy()!=null)
s($,"GE","x1",()=>$.j3()?A.cW().gaG().h(0,"captureMantleId"):null)
s($,"GF","x2",()=>A.cW().gaG().h(0,"captureMantleLit")==="1")
r($,"wE","eX",()=>A.i3(0,0,0))
r($,"wz","Ai",()=>A.i3(0,0,0))
r($,"wK","j4",()=>A.i3(0,0,0))
s($,"GI","x3",()=>A.EH())
s($,"GO","mg",()=>new A.nS(A.i3(0,0,0)))
s($,"GP","h3",()=>new A.pH(B.bb))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dQ,ArrayBuffer:A.fn,ArrayBufferView:A.hE,DataView:A.kb,Float32Array:A.hB,Float64Array:A.kc,Int16Array:A.kd,Int32Array:A.ke,Int8Array:A.kf,Uint16Array:A.kg,Uint32Array:A.kh,Uint8ClampedArray:A.eu,CanvasPixelArray:A.eu,Uint8Array:A.hF})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.io.$nativeSuperclassTag="ArrayBufferView"
A.ip.$nativeSuperclassTag="ArrayBufferView"
A.hC.$nativeSuperclassTag="ArrayBufferView"
A.iq.$nativeSuperclassTag="ArrayBufferView"
A.ir.$nativeSuperclassTag="ArrayBufferView"
A.hD.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.uW
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
