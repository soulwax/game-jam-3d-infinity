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
if(a[b]!==s){A.FF(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.wt(b)
return new s(c,this)}:function(){if(s===null)s=A.wt(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.wt(a).prototype
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
wy(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uE(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ww==null){A.Fg()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.xF("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.rU
if(o==null)o=$.rU=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Fm(a)
if(p!=null)return p
if(typeof a=="function")return B.ht
s=Object.getPrototypeOf(a)
if(s==null)return B.cU
if(s===Object.prototype)return B.cU
if(typeof q=="function"){o=$.rU
if(o==null)o=$.rU=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bq,enumerable:false,writable:true,configurable:true})
return B.bq}return B.bq},
x9(a,b){if(a<0||a>4294967295)throw A.d(A.aU(a,0,4294967295,"length",null))
return J.xb(new Array(a),b)},
xa(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
jV(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
xb(a,b){var s=A.e(a,b.i("u<0>"))
s.$flags=1
return s},
Bb(a,b){var s=t.bP
return J.wN(s.a(a),s.a(b))},
xd(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Bc(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xd(r))break;++b}return b},
Bd(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xd(q))break}return b},
e7(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hr.prototype
return J.jX.prototype}if(typeof a=="string")return J.dN.prototype
if(a==null)return J.hs.prototype
if(typeof a=="boolean")return J.jW.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.F)return a
return J.uE(a)},
aA(a){if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.F)return a
return J.uE(a)},
c6(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.F)return a
return J.uE(a)},
Fc(a){if(typeof a=="number")return J.ep.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.dV.prototype
return a},
zh(a){if(typeof a=="number")return J.ep.prototype
if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.dV.prototype
return a},
zi(a){if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.dV.prototype
return a},
Fd(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dh.prototype
if(typeof a=="symbol")return J.fj.prototype
if(typeof a=="bigint")return J.fi.prototype
return a}if(a instanceof A.F)return a
return J.uE(a)},
wM(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.zh(a).a8(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e7(a).a_(a,b)},
aF(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Fl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aA(a).h(a,b)},
bI(a,b,c){return J.c6(a).k(a,b,c)},
h5(a,b){return J.c6(a).l(a,b)},
A1(a,b){return J.zi(a).hh(a,b)},
vk(a,b){return J.c6(a).N(a,b)},
A2(a,b,c){return J.Fd(a).hj(a,b,c)},
A3(a,b){return J.c6(a).cE(a,b)},
wN(a,b){return J.zh(a).F(a,b)},
wO(a,b){return J.aA(a).q(a,b)},
m9(a,b){return J.c6(a).Y(a,b)},
A4(a,b){return J.c6(a).a2(a,b)},
wP(a){return J.c6(a).gO(a)},
ax(a){return J.e7(a).gL(a)},
vl(a){return J.aA(a).gM(a)},
A5(a){return J.aA(a).gV(a)},
S(a){return J.c6(a).gt(a)},
c7(a){return J.aA(a).gu(a)},
eZ(a){return J.e7(a).ga1(a)},
A6(a,b){return J.c6(a).a6(a,b)},
f_(a,b,c){return J.c6(a).ca(a,b,c)},
A7(a,b){return J.aA(a).su(a,b)},
A8(a,b){return J.c6(a).S(a,b)},
A9(a,b){return J.zi(a).be(a,b)},
vm(a,b){return J.Fc(a).oL(a,b)},
d6(a){return J.e7(a).p(a)},
Aa(a,b){return J.c6(a).eP(a,b)},
jT:function jT(){},
jW:function jW(){},
hs:function hs(){},
hu:function hu(){},
dO:function dO(){},
kh:function kh(){},
dV:function dV(){},
dh:function dh(){},
fi:function fi(){},
fj:function fj(){},
u:function u(a){this.$ti=a},
jU:function jU(){},
oM:function oM(a){this.$ti=a},
ea:function ea(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ep:function ep(){},
hr:function hr(){},
jX:function jX(){},
dN:function dN(){}},A={vs:function vs(){},
uz(){return $},
Ao(a,b,c){if(t.gt.b(a))return new A.ic(a,b.i("@<0>").I(c).i("ic<1,2>"))
return new A.ed(a,b.i("@<0>").I(c).i("ed<1,2>"))},
xh(a){return new A.eq("Field '"+a+"' has been assigned during initialization.")},
a7(a){return new A.eq("Field '"+a+"' has not been initialized.")},
Bf(a){return new A.eq("Field '"+a+"' has already been initialized.")},
uF(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i_(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e6(a,b,c){return a},
wx(a){var s,r
for(s=$.c5.length,r=0;r<s;++r)if(a===$.c5[r])return!0
return!1},
hZ(a,b,c,d){A.kp(b,"start")
if(c!=null){A.kp(c,"end")
if(b>c)A.i(A.aU(b,0,c,"start",null))}return new A.hY(a,b,c,d.i("hY<0>"))},
k2(a,b,c,d){if(t.gt.b(a))return new A.db(a,b,c.i("@<0>").I(d).i("db<1,2>"))
return new A.ct(a,b,c.i("@<0>").I(d).i("ct<1,2>"))},
cr(){return new A.fw("No element")},
x8(){return new A.fw("Too many elements")},
kx(a,b,c,d,e){if(c-b<=32)A.BP(a,b,c,d,e)
else A.BO(a,b,c,d,e)},
BP(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aA(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.am()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
BO(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.T(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.T(a4+a5,2),f=g-j,e=g+j,d=J.aA(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.am()
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
A.kx(a3,a4,r-2,a6,a7)
A.kx(a3,q+2,a5,a6,a7)
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
break}}A.kx(a3,r,q,a6,a7)}else A.kx(a3,r,q,a6,a7)},
dY:function dY(){},
h9:function h9(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b){this.a=a
this.$ti=b},
ic:function ic(a,b){this.a=a
this.$ti=b},
ia:function ia(){},
rD:function rD(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.$ti=b},
eq:function eq(a){this.a=a},
dG:function dG(a){this.a=a},
qd:function qd(){},
Q:function Q(){},
a5:function a5(){},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aT:function aT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ct:function ct(a,b,c){this.a=a
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
R:function R(a,b,c){this.a=a
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
cx:function cx(a,b){this.a=a
this.$ti=b},
i5:function i5(a,b){this.a=a
this.$ti=b},
aq:function aq(){},
cV:function cV(){},
fy:function fy(){},
hQ:function hQ(a,b){this.a=a
this.$ti=b},
iI:function iI(){},
b1(a,b,c){var s,r,q,p,o,n,m,l=A.as(a.gZ(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.as(a.gaA(),!0,c)
m=new A.a6(q,n,b.i("@<0>").I(c).i("a6<1,2>"))
m.$keys=l
return m}return new A.hb(A.aM(a,b,c),b.i("@<0>").I(c).i("hb<1,2>"))},
Au(){throw A.d(A.aX("Cannot modify unmodifiable Map"))},
Av(){throw A.d(A.aX("Cannot modify constant Set"))},
zB(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Fl(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d6(a)
return s},
hJ(a){var s,r=$.xp
if(r==null)r=$.xp=Symbol("identityHashCode")
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
if(isNaN(s)){r=B.b.bc(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
km(a){var s,r,q,p
if(a instanceof A.F)return A.bF(A.bR(a),null)
s=J.e7(a)
if(s===B.hs||s===B.hu||t.cx.b(a)){r=B.bJ(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bF(A.bR(a),null)},
xq(a){var s,r,q
if(a==null||typeof a=="number"||A.c3(a))return J.d6(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dF)return a.p(0)
if(a instanceof A.c1)return a.ha(!0)
s=$.zZ()
for(r=0;r<1;++r){q=s[r].oM(a)
if(q!=null)return q}return"Instance of '"+A.km(a)+"'"},
Bs(){return Date.now()},
BB(){var s,r
if($.pG!==0)return
$.pG=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pG=1e6
$.pH=new A.pF(r)},
Br(){if(!!self.location)return self.location.href
return null},
BC(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
au(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.dE(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aU(a,0,1114111,null,null))},
fo(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
BA(a){var s=A.fo(a).getUTCFullYear()+0
return s},
By(a){var s=A.fo(a).getUTCMonth()+1
return s},
Bu(a){var s=A.fo(a).getUTCDate()+0
return s},
Bv(a){var s=A.fo(a).getUTCHours()+0
return s},
Bx(a){var s=A.fo(a).getUTCMinutes()+0
return s},
Bz(a){var s=A.fo(a).getUTCSeconds()+0
return s},
Bw(a){var s=A.fo(a).getUTCMilliseconds()+0
return s},
Bt(a){var s=a.$thrownJsError
if(s==null)return null
return A.cz(s)},
xr(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aB(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
j_(a){throw A.d(A.ws(a))},
f(a,b){if(a==null)J.c7(a)
throw A.d(A.uB(a,b))},
uB(a,b){var s,r="index"
if(!A.aL(b))return new A.cm(!0,b,r,null)
s=A.c(J.c7(a))
if(b<0||b>=s)return A.oD(b,s,a,r)
return A.xt(b,r)},
F6(a,b,c){if(a>c)return A.aU(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aU(b,a,c,"end",null)
return new A.cm(!0,b,"end",null)},
ws(a){return new A.cm(!0,a,null,null)},
d(a){return A.aB(a,new Error())},
aB(a,b){var s
if(a==null)a=new A.dq()
b.dartException=a
s=A.FI
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
FI(){return J.d6(this.dartException)},
i(a,b){throw A.aB(a,b==null?new Error():b)},
bH(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.i(A.Dt(a,b,c),s)},
Dt(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.i1("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.d(A.ap(a))},
dr(a){var s,r,q,p,o,n
a=A.zt(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.r6(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
r7(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xE(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vt(a,b){var s=b==null,r=s?null:b.method
return new A.jY(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.pm(a)
if(a instanceof A.hh){s=a.a
return A.e8(a,s==null?A.eS(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.e8(a,a.dartException)
return A.EE(a)},
e8(a,b){if(t.D.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
EE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.dE(r,16)&8191)===10)switch(q){case 438:return A.e8(a,A.vt(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.e8(a,new A.hF())}}if(a instanceof TypeError){p=$.zF()
o=$.zG()
n=$.zH()
m=$.zI()
l=$.zL()
k=$.zM()
j=$.zK()
$.zJ()
i=$.zO()
h=$.zN()
g=p.aQ(s)
if(g!=null)return A.e8(a,A.vt(A.x(s),g))
else{g=o.aQ(s)
if(g!=null){g.method="call"
return A.e8(a,A.vt(A.x(s),g))}else if(n.aQ(s)!=null||m.aQ(s)!=null||l.aQ(s)!=null||k.aQ(s)!=null||j.aQ(s)!=null||m.aQ(s)!=null||i.aQ(s)!=null||h.aQ(s)!=null){A.x(s)
return A.e8(a,new A.hF())}}return A.e8(a,new A.kI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hV()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e8(a,new A.cm(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hV()
return a},
cz(a){var s
if(a instanceof A.hh)return a.b
if(a==null)return new A.iw(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iw(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
m6(a){if(a==null)return J.ax(a)
if(typeof a=="object")return A.hJ(a)
return J.ax(a)},
F0(a){if(typeof a=="number")return B.d.gL(a)
if(a instanceof A.lI)return A.hJ(a)
if(a instanceof A.c1)return a.gL(a)
return A.m6(a)},
zf(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Fb(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
DS(a,b,c,d,e,f){t.gY.a(a)
switch(A.c(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.fg("Unsupported number of arguments for wrapped closure"))},
h0(a,b){var s=a.$identity
if(!!s)return s
s=A.F1(a,b)
a.$identity=s
return s},
F1(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.DS)},
At(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kB().constructor.prototype):Object.create(new A.f5(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wV(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Ap(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wV(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Ap(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ak)}throw A.d("Error in functionType of tearoff")},
Aq(a,b,c,d){var s=A.wU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wV(a,b,c,d){if(c)return A.As(a,b,d)
return A.Aq(b.length,d,a,b)},
Ar(a,b,c,d){var s=A.wU,r=A.Al
switch(b?-1:a){case 0:throw A.d(new A.kt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
As(a,b,c){var s,r
if($.wS==null)$.wS=A.wR("interceptor")
if($.wT==null)$.wT=A.wR("receiver")
s=b.length
r=A.Ar(s,c,a,b)
return r},
wt(a){return A.At(a)},
Ak(a,b){return A.iA(v.typeUniverse,A.bR(a.a),b)},
wU(a){return a.a},
Al(a){return a.b},
wR(a){var s,r,q,p=new A.f5("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.y("Field name "+a+" not found.",null))},
zj(a){return v.getIsolateTag(a)},
zx(){return v.G},
Gv(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Fm(a){var s,r,q,p,o,n=A.x($.zk.$1(a)),m=$.uC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aQ($.zc.$2(a,n))
if(q!=null){m=$.uC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.v7(s)
$.uC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.uJ[n]=s
return s}if(p==="-"){o=A.v7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.zr(a,s)
if(p==="*")throw A.d(A.xF(n))
if(v.leafTags[n]===true){o=A.v7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.zr(a,s)},
zr(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.wy(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
v7(a){return J.wy(a,!1,null,!!a.$ibU)},
Fr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.v7(s)
else return J.wy(s,c,null,null)},
Fg(){if(!0===$.ww)return
$.ww=!0
A.Fh()},
Fh(){var s,r,q,p,o,n,m,l
$.uC=Object.create(null)
$.uJ=Object.create(null)
A.Ff()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.zs.$1(o)
if(n!=null){m=A.Fr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Ff(){var s,r,q,p,o,n,m=B.dU()
m=A.h_(B.dV,A.h_(B.dW,A.h_(B.bK,A.h_(B.bK,A.h_(B.dX,A.h_(B.dY,A.h_(B.dZ(B.bJ),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.zk=new A.uG(p)
$.zc=new A.uH(o)
$.zs=new A.uI(n)},
h_(a,b){return a(b)||b},
Cw(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
F3(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xe(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a9("Illegal RegExp pattern ("+String(o)+")",a,null))},
FC(a,b,c){var s=a.indexOf(b,c)
return s>=0},
F9(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
zt(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
FD(a,b,c){var s=A.FE(a,b,c)
return s},
FE(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.zt(b),"g"),A.F9(c))},
aJ:function aJ(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
hb:function hb(a,b){this.a=a
this.$ti=b},
fa:function fa(){},
n8:function n8(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
eL:function eL(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cG:function cG(a,b){this.a=a
this.$ti=b},
hc:function hc(){},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
pF:function pF(a){this.a=a},
hR:function hR(){},
r6:function r6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hF:function hF(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a){this.a=a},
pm:function pm(a){this.a=a},
hh:function hh(a,b){this.a=a
this.b=b},
iw:function iw(a){this.a=a
this.b=null},
dF:function dF(){},
jf:function jf(){},
jg:function jg(){},
kE:function kE(){},
kB:function kB(){},
f5:function f5(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ca:function ca(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oV:function oV(a){this.a=a},
p2:function p2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ar:function ar(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
I:function I(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b,c,d){var _=this
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
uG:function uG(a){this.a=a},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
c1:function c1(){},
eP:function eP(){},
fD:function fD(){},
fE:function fE(){},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ll:function ll(a){this.b=a},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hX:function hX(a,b){this.a=a
this.c=b},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
FF(a){throw A.aB(A.xh(a),new Error())},
h(){throw A.aB(A.a7(""),new Error())},
K(){throw A.aB(A.Bf(""),new Error())},
zA(){throw A.aB(A.xh(""),new Error())},
aa(){var s=new A.rE()
return s.b=s},
rE:function rE(){this.b=null},
yt(a,b,c){},
a_(a){return a},
Bm(a,b,c){A.yt(a,b,c)
return new Float32Array(a,b,c)},
Bn(a){return new Int8Array(a)},
Bo(a){return new Uint8Array(a)},
ke(a){return new Uint8Array(A.a_(a))},
dx(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.uB(b,a))},
Dh(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.F6(a,b,c))
return b},
dP:function dP(){},
fn:function fn(){},
hD:function hD(){},
tc:function tc(a){this.a=a},
k7:function k7(){},
b2:function b2(){},
hB:function hB(){},
hC:function hC(){},
hA:function hA(){},
k8:function k8(){},
k9:function k9(){},
ka:function ka(){},
kb:function kb(){},
kc:function kc(){},
kd:function kd(){},
et:function et(){},
hE:function hE(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
vG(a,b){var s=b.c
return s==null?b.c=A.iy(a,"bT",[b.x]):s},
xw(a){var s=a.w
if(s===6||s===7)return A.xw(a.x)
return s===11||s===12},
BJ(a){return a.as},
Fs(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a1(a){return A.tb(v.typeUniverse,a,!1)},
eW(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eW(a1,s,a3,a4)
if(r===s)return a2
return A.y2(a1,r,!0)
case 7:s=a2.x
r=A.eW(a1,s,a3,a4)
if(r===s)return a2
return A.y1(a1,r,!0)
case 8:q=a2.y
p=A.fZ(a1,q,a3,a4)
if(p===q)return a2
return A.iy(a1,a2.x,p)
case 9:o=a2.x
n=A.eW(a1,o,a3,a4)
m=a2.y
l=A.fZ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vR(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fZ(a1,j,a3,a4)
if(i===j)return a2
return A.y3(a1,k,i)
case 11:h=a2.x
g=A.eW(a1,h,a3,a4)
f=a2.y
e=A.EA(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.y0(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fZ(a1,d,a3,a4)
o=a2.x
n=A.eW(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.vS(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.j6("Attempted to substitute unexpected RTI kind "+a0))}},
fZ(a,b,c,d){var s,r,q,p,o=b.length,n=A.tg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eW(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
EB(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eW(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
EA(a,b,c,d){var s,r=b.a,q=A.fZ(a,r,c,d),p=b.b,o=A.fZ(a,p,c,d),n=b.c,m=A.EB(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.le()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
wu(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Fe(s)
return a.$S()}return null},
Fi(a,b){var s
if(A.xw(b))if(a instanceof A.dF){s=A.wu(a)
if(s!=null)return s}return A.bR(a)},
bR(a){if(a instanceof A.F)return A.q(a)
if(Array.isArray(a))return A.H(a)
return A.w8(J.e7(a))},
H(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.w8(a)},
w8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.DP(a,s)},
DP(a,b){var s=a instanceof A.dF?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.CG(v.typeUniverse,s.name)
b.$ccache=r
return r},
Fe(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
m5(a){return A.d3(A.q(a))},
wo(a){var s
if(a instanceof A.c1)return a.fz()
s=a instanceof A.dF?A.wu(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.eZ(a).a
if(Array.isArray(a))return A.H(a)
return A.bR(a)},
d3(a){var s=a.r
return s==null?a.r=new A.lI(a):s},
Fa(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.f(q,0)
s=A.iA(v.typeUniverse,A.wo(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.y4(v.typeUniverse,s,A.wo(q[r]))}return A.iA(v.typeUniverse,s,a)},
ck(a){return A.d3(A.tb(v.typeUniverse,a,!1))},
DO(a){var s=this
s.b=A.Ev(s)
return s.b(a)},
Ev(a){var s,r,q,p,o
if(a===t.K)return A.DY
if(A.eX(a))return A.E1
s=a.w
if(s===6)return A.DH
if(s===1)return A.yG
if(s===7)return A.DT
r=A.Eu(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eX)){a.f="$i"+q
if(q==="C")return A.DW
if(a===t.m)return A.DV
return A.E0}}else if(s===10){p=A.F3(a.x,a.y)
o=p==null?A.yG:p
return o==null?A.eS(o):o}return A.DF},
Eu(a){if(a.w===8){if(a===t.S)return A.aL
if(a===t.i||a===t.o)return A.DX
if(a===t.N)return A.E_
if(a===t.y)return A.c3}return null},
DN(a){var s=this,r=A.DE
if(A.eX(s))r=A.Db
else if(s===t.K)r=A.eS
else if(A.h1(s)){r=A.DG
if(s===t.aV)r=A.yo
else if(s===t.x)r=A.aQ
else if(s===t.fU)r=A.Da
else if(s===t.jh)r=A.vY
else if(s===t.dE)r=A.yn
else if(s===t.mU)r=A.k}else if(s===t.S)r=A.c
else if(s===t.N)r=A.x
else if(s===t.y)r=A.U
else if(s===t.o)r=A.aE
else if(s===t.i)r=A.by
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
DF(a){var s=this
if(a==null)return A.h1(s)
return A.zo(v.typeUniverse,A.Fi(a,s),s)},
DH(a){if(a==null)return!0
return this.x.b(a)},
E0(a){var s,r=this
if(a==null)return A.h1(r)
s=r.f
if(a instanceof A.F)return!!a[s]
return!!J.e7(a)[s]},
DW(a){var s,r=this
if(a==null)return A.h1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.F)return!!a[s]
return!!J.e7(a)[s]},
DV(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.F)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
yF(a){if(typeof a=="object"){if(a instanceof A.F)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
DE(a){var s=this
if(a==null){if(A.h1(s))return a}else if(s.b(a))return a
throw A.aB(A.yu(a,s),new Error())},
DG(a){var s=this
if(a==null||s.b(a))return a
throw A.aB(A.yu(a,s),new Error())},
yu(a,b){return new A.fJ("TypeError: "+A.xT(a,A.bF(b,null)))},
EZ(a,b,c,d){if(A.zo(v.typeUniverse,a,b))return a
throw A.aB(A.Cy("The type argument '"+A.bF(a,null)+"' is not a subtype of the type variable bound '"+A.bF(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
xT(a,b){return A.jw(a)+": type '"+A.bF(A.wo(a),null)+"' is not a subtype of type '"+b+"'"},
Cy(a){return new A.fJ("TypeError: "+a)},
ci(a,b){return new A.fJ("TypeError: "+A.xT(a,b))},
DT(a){var s=this
return s.x.b(a)||A.vG(v.typeUniverse,s).b(a)},
DY(a){return a!=null},
eS(a){if(a!=null)return a
throw A.aB(A.ci(a,"Object"),new Error())},
E1(a){return!0},
Db(a){return a},
yG(a){return!1},
c3(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aB(A.ci(a,"bool"),new Error())},
Da(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aB(A.ci(a,"bool?"),new Error())},
by(a){if(typeof a=="number")return a
throw A.aB(A.ci(a,"double"),new Error())},
yn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aB(A.ci(a,"double?"),new Error())},
aL(a){return typeof a=="number"&&Math.floor(a)===a},
c(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aB(A.ci(a,"int"),new Error())},
yo(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aB(A.ci(a,"int?"),new Error())},
DX(a){return typeof a=="number"},
aE(a){if(typeof a=="number")return a
throw A.aB(A.ci(a,"num"),new Error())},
vY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aB(A.ci(a,"num?"),new Error())},
E_(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.aB(A.ci(a,"String"),new Error())},
aQ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aB(A.ci(a,"String?"),new Error())},
b(a){if(A.yF(a))return a
throw A.aB(A.ci(a,"JSObject"),new Error())},
k(a){if(a==null)return a
if(A.yF(a))return a
throw A.aB(A.ci(a,"JSObject?"),new Error())},
z1(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bF(a[q],b)
return s},
Ek(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.z1(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bF(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
yx(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.ED(a.x)
o=a.y
return o.length>0?p+("<"+A.z1(o,b)+">"):p}if(l===10)return A.Ek(a,b)
if(l===11)return A.yx(a,b,null)
if(l===12)return A.yx(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
ED(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
CH(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
CG(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tb(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iz(a,5,"#")
q=A.tg(s)
for(p=0;p<s;++p)q[p]=r
o=A.iy(a,b,q)
n[b]=o
return o}else return m},
CF(a,b){return A.yc(a.tR,b)},
CE(a,b){return A.yc(a.eT,b)},
tb(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xY(A.xW(a,null,b,!1))
r.set(b,s)
return s},
iA(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xY(A.xW(a,b,c,!0))
q.set(c,r)
return r},
y4(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vR(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
e1(a,b){b.a=A.DN
b.b=A.DO
return b},
iz(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cw(null,null)
s.w=b
s.as=c
r=A.e1(a,s)
a.eC.set(c,r)
return r},
y2(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.CC(a,b,r,c)
a.eC.set(r,s)
return s},
CC(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eX(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.h1(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cw(null,null)
q.w=6
q.x=b
q.as=c
return A.e1(a,q)},
y1(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.CA(a,b,r,c)
a.eC.set(r,s)
return s},
CA(a,b,c,d){var s,r
if(d){s=b.w
if(A.eX(b)||b===t.K)return b
else if(s===1)return A.iy(a,"bT",[b])
else if(b===t.c||b===t.w)return t.gK}r=new A.cw(null,null)
r.w=7
r.x=b
r.as=c
return A.e1(a,r)},
CD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cw(null,null)
s.w=13
s.x=b
s.as=q
r=A.e1(a,s)
a.eC.set(q,r)
return r},
ix(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Cz(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iy(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ix(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cw(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e1(a,r)
a.eC.set(p,q)
return q},
vR(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ix(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cw(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e1(a,o)
a.eC.set(q,n)
return n},
y3(a,b,c){var s,r,q="+"+(b+"("+A.ix(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cw(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e1(a,s)
a.eC.set(q,r)
return r},
y0(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ix(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ix(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Cz(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cw(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e1(a,p)
a.eC.set(r,o)
return o},
vS(a,b,c,d){var s,r=b.as+("<"+A.ix(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.CB(a,b,c,r,d)
a.eC.set(r,s)
return s},
CB(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eW(a,b,r,0)
m=A.fZ(a,c,r,0)
return A.vS(a,n,m,c!==m)}}l=new A.cw(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e1(a,l)},
xW(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
xY(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Cr(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xX(a,r,l,k,!1)
else if(q===46)r=A.xX(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eO(a.u,a.e,k.pop()))
break
case 94:k.push(A.CD(a.u,k.pop()))
break
case 35:k.push(A.iz(a.u,5,"#"))
break
case 64:k.push(A.iz(a.u,2,"@"))
break
case 126:k.push(A.iz(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Ct(a,k)
break
case 38:A.Cs(a,k)
break
case 63:p=a.u
k.push(A.y2(p,A.eO(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.y1(p,A.eO(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Cq(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xZ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Cv(a.u,a.e,o)
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
return A.eO(a.u,a.e,m)},
Cr(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xX(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.CH(s,o.x)[p]
if(n==null)A.i('No "'+p+'" in "'+A.BJ(o)+'"')
d.push(A.iA(s,o,n))}else d.push(p)
return m},
Ct(a,b){var s,r=a.u,q=A.xV(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iy(r,p,q))
else{s=A.eO(r,a.e,p)
switch(s.w){case 11:b.push(A.vS(r,s,q,a.n))
break
default:b.push(A.vR(r,s,q))
break}}},
Cq(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xV(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eO(p,a.e,o)
q=new A.le()
q.a=s
q.b=n
q.c=m
b.push(A.y0(p,r,q))
return
case-4:b.push(A.y3(p,b.pop(),s))
return
default:throw A.d(A.j6("Unexpected state under `()`: "+A.w(o)))}},
Cs(a,b){var s=b.pop()
if(0===s){b.push(A.iz(a.u,1,"0&"))
return}if(1===s){b.push(A.iz(a.u,4,"1&"))
return}throw A.d(A.j6("Unexpected extended operation "+A.w(s)))},
xV(a,b){var s=b.splice(a.p)
A.xZ(a.u,a.e,s)
a.p=b.pop()
return s},
eO(a,b,c){if(typeof c=="string")return A.iy(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Cu(a,b,c)}else return c},
xZ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eO(a,b,c[s])},
Cv(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eO(a,b,c[s])},
Cu(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.j6("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.j6("Bad index "+c+" for "+b.p(0)))},
zo(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aR(a,b,null,c,null)
r.set(c,s)}return s},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eX(d))return!0
s=b.w
if(s===4)return!0
if(A.eX(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aR(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aR(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aR(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aR(a,b.x,c,d,e))return!1
return A.aR(a,A.vG(a,b),c,d,e)}if(s===6)return A.aR(a,p,c,d,e)&&A.aR(a,b.x,c,d,e)
if(q===7){if(A.aR(a,b,c,d.x,e))return!0
return A.aR(a,b,c,A.vG(a,d),e)}if(q===6)return A.aR(a,b,c,p,e)||A.aR(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.gY)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.dY)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aR(a,j,c,i,e)||!A.aR(a,i,e,j,c))return!1}return A.yE(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.yE(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.DU(a,b,c,d,e)}if(o&&q===10)return A.DZ(a,b,c,d,e)
return!1},
yE(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
DU(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iA(a,b,r[o])
return A.yl(a,p,null,c,d.y,e)}return A.yl(a,b.y,null,c,d.y,e)},
yl(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aR(a,b[s],d,e[s],f))return!1
return!0},
DZ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aR(a,r[s],c,q[s],e))return!1
return!0},
h1(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.eX(a))if(s!==6)r=s===7&&A.h1(a.x)
return r},
eX(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yc(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tg(a){return a>0?new Array(a):v.typeUniverse.sEA},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
le:function le(){this.c=this.b=this.a=null},
lI:function lI(a){this.a=a},
lc:function lc(){},
fJ:function fJ(a){this.a=a},
Cj(){var s,r,q
if(self.scheduleImmediate!=null)return A.ER()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.h0(new A.rz(s),1)).observe(r,{childList:true})
return new A.ry(s,r,q)}else if(self.setImmediate!=null)return A.ES()
return A.ET()},
Ck(a){self.scheduleImmediate(A.h0(new A.rA(t.O.a(a)),0))},
Cl(a){self.setImmediate(A.h0(new A.rB(t.O.a(a)),0))},
Cm(a){A.vJ(B.ei,t.O.a(a))},
vJ(a,b){return A.Cx(a.a/1000|0,b)},
Cx(a,b){var s=new A.t9()
s.kp(a,b)
return s},
bD(a){return new A.l2(new A.av($.ao,a.i("av<0>")),a.i("l2<0>"))},
bB(a,b){a.$2(0,null)
b.b=!0
return b.a},
am(a,b){A.Dd(a,b)},
bA(a,b){b.dI(a)},
bz(a,b){b.dJ(A.ag(a),A.cz(a))},
Dd(a,b){var s,r,q=new A.to(b),p=new A.tp(b)
if(a instanceof A.av)a.h8(q,p,t.z)
else{s=t.z
if(a instanceof A.av)a.eK(q,p,s)
else{r=new A.av($.ao,t.j_)
r.a=8
r.c=a
r.h8(q,p,s)}}},
bG(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ao.ja(new A.uw(s),t.H,t.S,t.z)},
y_(a,b,c){return 0},
mr(a){var s
if(t.D.b(a)){s=a.gbP()
if(s!=null)return s}return B.an},
vp(a){var s
a.a(null)
s=new A.av($.ao,a.i("av<0>"))
s.df(null)
return s},
AY(a,b,c){var s=new A.av($.ao,c.i("av<0>"))
A.BU(a,new A.nP(b,s,c))
return s},
nQ(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.av($.ao,b.i("av<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.nS(i,h,g,f)
try{for(n=J.S(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eK(new A.nR(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.co(A.e([],b.i("u<0>")))
return n}i.a=A.cM(n,null,!1,b.i("0?"))}catch(l){p=A.ag(l)
o=A.cz(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.w9(m,k)
m=new A.aZ(m,k==null?A.mr(m):k)
n.ck(m)
return n}else{i.d=p
i.c=o}}return f},
w9(a,b){if($.ao===B.w)return null
return null},
DQ(a,b){if($.ao!==B.w)A.w9(a,b)
if(b==null)if(t.D.b(a)){b=a.gbP()
if(b==null){A.xr(a,B.an)
b=B.an}}else b=B.an
else if(t.D.b(a))A.xr(a,b)
return new A.aZ(a,b)},
rK(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.BQ()
b.ck(new A.aZ(new A.cm(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fN(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bS()
b.cn(o.a)
A.eJ(b,p)
return}b.a^=2
A.m2(null,null,b.b,t.O.a(new A.rL(o,b)))},
eJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wi(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eJ(d.a,c)
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
A.wi(j.a,j.b)
return}g=$.ao
if(g!==h)$.ao=h
else g=null
c=c.c
if((c&15)===8)new A.rP(q,d,n).$0()
else if(o){if((c&1)!==0)new A.rO(q,j).$0()}else if((c&2)!==0)new A.rN(d,q).$0()
if(g!=null)$.ao=g
c=q.c
if(c instanceof A.av){p=q.a.$ti
p=p.i("bT<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cw(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.rK(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cw(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
El(a,b){var s
if(t.ng.b(a))return b.ja(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.an(a,"onError",u.c))},
Ea(){var s,r
for(s=$.fW;s!=null;s=$.fW){$.iT=null
r=s.b
$.fW=r
if(r==null)$.iS=null
s.a.$0()}},
Ey(){$.wa=!0
try{A.Ea()}finally{$.iT=null
$.wa=!1
if($.fW!=null)$.wG().$1(A.zd())}},
z5(a){var s=new A.l3(a),r=$.iS
if(r==null){$.fW=$.iS=s
if(!$.wa)$.wG().$1(A.zd())}else $.iS=r.b=s},
Es(a){var s,r,q,p=$.fW
if(p==null){A.z5(a)
$.iT=$.iS
return}s=new A.l3(a)
r=$.iT
if(r==null){s.b=p
$.fW=$.iT=s}else{q=r.b
s.b=q
$.iT=r.b=s
if(q==null)$.iS=s}},
FY(a,b){A.e6(a,"stream",t.K)
return new A.lD(b.i("lD<0>"))},
BU(a,b){var s=$.ao
if(s===B.w)return A.vJ(a,t.O.a(b))
return A.vJ(a,t.O.a(s.hl(b)))},
wi(a,b){A.Es(new A.um(a,b))},
z0(a,b,c,d,e){var s,r=$.ao
if(r===c)return d.$0()
$.ao=c
s=r
try{r=d.$0()
return r}finally{$.ao=s}},
Eq(a,b,c,d,e,f,g){var s,r=$.ao
if(r===c)return d.$1(e)
$.ao=c
s=r
try{r=d.$1(e)
return r}finally{$.ao=s}},
Ep(a,b,c,d,e,f,g,h,i){var s,r=$.ao
if(r===c)return d.$2(e,f)
$.ao=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ao=s}},
m2(a,b,c,d){t.O.a(d)
if(B.w!==c){d=c.hl(d)
d=d}A.z5(d)},
rz:function rz(a){this.a=a},
ry:function ry(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
t9:function t9(){},
ta:function ta(a,b){this.a=a
this.b=b},
l2:function l2(a,b){this.a=a
this.b=!1
this.$ti=b},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
uw:function uw(a){this.a=a},
cy:function cy(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
ch:function ch(a,b){this.a=a
this.$ti=b},
aZ:function aZ(a,b){this.a=a
this.b=b},
nP:function nP(a,b,c){this.a=a
this.b=b
this.c=c},
nS:function nS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nR:function nR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l6:function l6(){},
i7:function i7(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
av:function av(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rH:function rH(a,b){this.a=a
this.b=b},
rM:function rM(a,b){this.a=a
this.b=b},
rL:function rL(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b){this.a=a
this.b=b},
rI:function rI(a,b){this.a=a
this.b=b},
rP:function rP(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(a,b){this.a=a
this.b=b},
rR:function rR(a){this.a=a},
rO:function rO(a,b){this.a=a
this.b=b},
rN:function rN(a,b){this.a=a
this.b=b},
l3:function l3(a){this.a=a
this.b=null},
lD:function lD(a){this.$ti=a},
iH:function iH(){},
lv:function lv(){},
t7:function t7(a,b){this.a=a
this.b=b},
um:function um(a,b){this.a=a
this.b=b},
xU(a,b){var s=a[b]
return s===a?null:s},
vP(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vO(){var s=Object.create(null)
A.vP(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
xj(a,b){return new A.ca(a.i("@<0>").I(b).i("ca<1,2>"))},
O(a,b,c){return b.i("@<0>").I(c).i("vu<1,2>").a(A.zf(a,new A.ca(b.i("@<0>").I(c).i("ca<1,2>"))))},
o(a,b){return new A.ca(a.i("@<0>").I(b).i("ca<1,2>"))},
vv(a){return new A.cg(a.i("cg<0>"))},
a2(a){return new A.cg(a.i("cg<0>"))},
aI(a,b){return b.i("xk<0>").a(A.Fb(a,new A.cg(b.i("cg<0>"))))},
vQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ii(a,b,c){var s=new A.eN(a,b,c.i("eN<0>"))
s.c=a.e
return s},
cL(a,b){var s=J.S(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.xj(b,c)
a.aq(0,new A.p3(s,b,c))
return s},
fk(a,b,c){var s=A.xj(b,c)
s.J(0,a)
return s},
hx(a,b){var s,r=A.vv(b)
for(s=J.S(a);s.m();)r.l(0,b.a(s.gn()))
return r},
k1(a,b){var s=A.vv(b)
s.J(0,a)
return s},
Bg(a,b){var s=t.bP
return J.wN(s.a(a),s.a(b))},
vw(a){var s,r
if(A.wx(a))return"{...}"
s=new A.bh("")
try{r={}
B.a.l($.c5,a)
s.a+="{"
r.a=!0
a.aq(0,new A.p5(r,s))
s.a+="}"}finally{if(0>=$.c5.length)return A.f($.c5,-1)
$.c5.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
CI(){throw A.d(A.aX("Cannot change an unmodifiable set"))},
ie:function ie(){},
rT:function rT(a){this.a=a},
ih:function ih(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eK:function eK(a,b){this.a=a
this.$ti=b},
ig:function ig(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cg:function cg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lk:function lk(a){this.a=a
this.c=this.b=null},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p3:function p3(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
a8:function a8(){},
p4:function p4(a){this.a=a},
p5:function p5(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.$ti=b},
ik:function ik(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iB:function iB(){},
fl:function fl(){},
dW:function dW(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
iv:function iv(){},
lJ:function lJ(){},
fz:function fz(a,b){this.a=a
this.$ti=b},
fK:function fK(){},
iC:function iC(){},
Ed(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.a9(String(s),null,null)
throw A.d(q)}q=A.tM(p)
return q},
tM(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.li(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tM(a[s])
return a},
CZ(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.zT()
else s=new Uint8Array(o)
for(r=J.aA(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
CY(a,b,c,d){var s=a?$.zS():$.zR()
if(s==null)return null
if(0===c&&d===b.length)return A.yb(s,b)
return A.yb(s,b.subarray(c,d))},
yb(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
wQ(a,b,c,d,e,f){if(B.c.P(f,4)!==0)throw A.d(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
xg(a,b,c){return new A.hw(a,b)},
Ds(a){return a.B()},
Cn(a,b){return new A.rW(a,[],A.F2())},
Co(a,b,c){var s,r=new A.bh(""),q=A.Cn(r,b)
q.cZ(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
D_(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
li:function li(a,b){this.a=a
this.b=b
this.c=null},
rV:function rV(a){this.a=a},
lj:function lj(a){this.a=a},
tf:function tf(){},
te:function te(){},
j9:function j9(){},
mV:function mV(){},
ee:function ee(){},
jl:function jl(){},
jv:function jv(){},
hw:function hw(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
oX:function oX(a){this.b=a},
oW:function oW(a){this.a=a},
rX:function rX(){},
rY:function rY(a,b){this.a=a
this.b=b},
rW:function rW(a,b,c){this.c=a
this.a=b
this.b=c},
kM:function kM(){},
rb:function rb(a){this.a=a},
td:function td(a){this.a=a
this.b=16
this.c=0},
zn(a){var s=A.fq(a,null)
if(s!=null)return s
throw A.d(A.a9(a,null,null))},
AS(a,b){a=A.aB(a,new Error())
if(a==null)a=A.eS(a)
a.stack=b.p(0)
throw a},
cM(a,b,c,d){var s,r=c?J.xa(a,d):J.x9(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
as(a,b,c){var s,r=A.e([],c.i("u<0>"))
for(s=J.S(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("u<0>"))
s=A.e([],b.i("u<0>"))
for(r=J.S(a);r.m();)B.a.l(s,r.gn())
return s},
al(a,b){var s=A.as(a,!1,b)
s.$flags=3
return s},
xC(a,b,c){var s,r
A.kp(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aU(c,b,null,"end",null))
if(s===0)return""}r=A.BS(a,b,c)
return r},
BS(a,b,c){var s=a.length
if(b>=s)return""
return A.BC(a,b,c==null||c>s?s:c)},
xu(a){return new A.ht(a,A.xe(a,!1,!0,!1,!1,""))},
vI(a,b,c){var s=J.S(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
cW(){var s,r,q=A.Br()
if(q==null)throw A.d(A.aX("'Uri.base' is not supported"))
s=$.xI
if(s!=null&&q===$.xH)return s
r=A.C_(q)
$.xI=r
$.xH=q
return r},
BQ(){return A.cz(new Error())},
Ay(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wX(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jn(a){if(a>=10)return""+a
return"0"+a},
AR(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.an(b,"name","No enum value with that name"))},
jw(a){if(typeof a=="number"||A.c3(a)||a==null)return J.d6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xq(a)},
AT(a,b){A.e6(a,"error",t.K)
A.e6(b,"stackTrace",t.l)
A.AS(a,b)},
j6(a){return new A.j5(a)},
y(a,b){return new A.cm(!1,null,b,a)},
an(a,b,c){return new A.cm(!0,a,b,c)},
xs(a){var s=null
return new A.fr(s,s,!1,s,s,a)},
xt(a,b){return new A.fr(null,null,!0,a,b,"Value not in range")},
aU(a,b,c,d,e){return new A.fr(b,c,!0,a,d,"Invalid value")},
hK(a,b,c){if(0>a||a>c)throw A.d(A.aU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aU(b,a,c,"end",null))
return b}return c},
kp(a,b){if(a<0)throw A.d(A.aU(a,0,null,b,null))
return a},
oD(a,b,c,d){return new A.jQ(b,!0,a,d,"Index out of range")},
aX(a){return new A.i1(a)},
xF(a){return new A.kH(a)},
m(a){return new A.fw(a)},
ap(a){return new A.ji(a)},
fg(a){return new A.rF(a)},
a9(a,b,c){return new A.G(a,b,c)},
Ba(a,b,c){var s,r
if(A.wx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c5,a)
try{A.E2(a,s)}finally{if(0>=$.c5.length)return A.f($.c5,-1)
$.c5.pop()}r=A.vI(b,t.fg.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
vq(a,b,c){var s,r
if(A.wx(a))return b+"..."+c
s=new A.bh(b)
B.a.l($.c5,a)
try{r=s
r.a=A.vI(r.a,a,", ")}finally{if(0>=$.c5.length)return A.f($.c5,-1)
$.c5.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
E2(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
vx(a,b,c){var s=A.o(b,c)
s.m4(a)
return s},
cv(a,b,c,d,e,f){var s
if(B.f===c){s=J.ax(a)
b=J.ax(b)
return A.i_(A.aP(A.aP($.h2(),s),b))}if(B.f===d){s=J.ax(a)
b=J.ax(b)
c=J.ax(c)
return A.i_(A.aP(A.aP(A.aP($.h2(),s),b),c))}if(B.f===e){s=J.ax(a)
b=J.ax(b)
c=J.ax(c)
d=J.ax(d)
return A.i_(A.aP(A.aP(A.aP(A.aP($.h2(),s),b),c),d))}if(B.f===f){s=J.ax(a)
b=J.ax(b)
c=J.ax(c)
d=J.ax(d)
e=J.ax(e)
return A.i_(A.aP(A.aP(A.aP(A.aP(A.aP($.h2(),s),b),c),d),e))}s=J.ax(a)
b=J.ax(b)
c=J.ax(c)
d=J.ax(d)
e=J.ax(e)
f=J.ax(f)
f=A.i_(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.h2(),s),b),c),d),e),f))
return f},
Bp(a){var s,r,q=$.h2()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.aP(q,J.ax(a[r]))
return A.i_(q)},
qe(a,b){return new A.fz(A.k1(a,b),b.i("fz<0>"))},
C_(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.xG(a4<a4?B.b.E(a5,0,a4):a5,5,a3).gjg()
else if(s===32)return A.xG(B.b.E(a5,5,a4),0,a3).gjg()}r=A.cM(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.z4(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.z4(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.lz(a4<a5.length?B.b.E(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.CS(a5,0,q)
else{if(q===0)A.fL(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.CT(a5,c,p-1):""
a=A.CO(a5,p,o,!1)
i=o+1
if(i<n){a0=A.fq(B.b.E(a5,i,n),a3)
d=A.CQ(a0==null?A.i(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.CP(a5,n,m,a3,j,a!=null)
a2=m<l?A.CR(a5,m+1,l,a3):a3
return A.CJ(j,b,a,d,a1,a2,l<a4?A.CN(a5,l+1,a4):a3)},
xK(a){var s=t.N
return B.a.bp(A.e(a.split("&"),t.s),A.o(s,s),new A.ra(B.bL),t.G)},
kL(a,b,c){throw A.d(A.a9("Illegal IPv4 address, "+a,b,c))},
BX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kL("each part must be in the range 0..255",a,r)}A.kL("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kL(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bH(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kL(j,a,q)
p=l}A.kL("IPv4 address should contain exactly 4 parts",a,q)},
BY(a,b,c){var s
if(b===c)throw A.d(A.a9("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.BZ(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.xJ(a,b,c)
return!0},
BZ(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.G(n,a,q)
r=q
break}return new A.G("Unexpected character",a,q-1)}if(r-1===b)return new A.G(n,a,r)
return new A.G("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.G("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.f(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.G("Invalid IPvFuture address character",a,r)}},
xJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.r9(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.BX(a3,m,a5,s,p*2)
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
B.cI.jF(s,a0,16,s,a)
B.cI.nk(s,a,a0,0)}}return s},
CJ(a,b,c,d,e,f,g){return new A.iD(a,b,c,d,e,f,g)},
y5(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fL(a,b,c){throw A.d(A.a9(c,a,b))},
CQ(a,b){var s=A.y5(b)
if(a===s)return null
return a},
CO(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fL(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.CL(a,q,r)
if(o<r){n=o+1
p=A.ya(a,B.b.ac(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.BY(a,q,o)
l=B.b.E(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.cQ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.ya(a,B.b.ac(a,"25",n)?o+3:n,c,"%25")}else p=""
A.xJ(a,b,o)
return"["+B.b.E(a,b,o)+p+"]"}}return A.CV(a,b,c)},
CL(a,b,c){var s=B.b.cQ(a,"%",b)
return s>=b&&s<c?s:c},
ya(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bh(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.vU(a,r,!0)
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
l=A.vT(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.E(a,b,c)
if(q<c){i=B.b.E(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
CV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.vU(a,r,!0)
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
j=A.vT(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.E(a,b,c)
if(q<c){k=B.b.E(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
CS(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.y7(a.charCodeAt(b)))A.fL(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fL(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.E(a,b,c)
return A.CK(q?a.toLowerCase():a)},
CK(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
CT(a,b,c){return A.iE(a,b,c,16,!1,!1)},
CP(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iE(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.CU(q,e,f)},
CU(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.CW(a,!s||c)
return A.CX(a)},
CR(a,b,c,d){return A.iE(a,b,c,256,!0,!1)},
CN(a,b,c){return A.iE(a,b,c,256,!0,!1)},
vU(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.uF(r)
o=A.uF(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.au(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.E(a,b,b+3).toUpperCase()
return null},
vT(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.lN(a,6*p)&63|q
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
o+=3}}return A.xC(s,0,null)},
iE(a,b,c,d,e,f){var s=A.y9(a,b,c,d,e,f)
return s==null?B.b.E(a,b,c):s},
y9(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.vU(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fL(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.vT(n)}if(o==null){o=new A.bh("")
k=o}else k=o
k.a=(k.a+=B.b.E(a,p,q))+l
if(typeof m!=="number")return A.j_(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.E(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
y8(a){if(B.b.W(a,"."))return!0
return B.b.bF(a,"/.")!==-1},
CX(a){var s,r,q,p,o,n,m
if(!A.y8(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a6(s,"/")},
CW(a,b){var s,r,q,p,o,n
if(!A.y8(a))return!b?A.y6(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gU(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.y6(s[0]))}return B.a.a6(s,"/")},
y6(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.y7(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.E(a,0,s)+"%3A"+B.b.be(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
CM(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.y("Invalid URL encoding",null))}}return r},
vV(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.bL===d)return B.b.E(a,b,c)
else p=new A.dG(B.b.E(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.y("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.y("Truncated URI",null))
B.a.l(p,A.CM(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.l4.mz(p)},
y7(a){var s=a|32
return 97<=s&&s<=122},
xG(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a9(k,a,r))}}if(q<0&&r>b)throw A.d(A.a9(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gU(j)
if(p!==44||r!==n+7||!B.b.ac(a,"base64",n+1))throw A.d(A.a9("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.dS.nN(a,m,s)
else{l=A.y9(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bM(a,m,s,l)}return new A.r8(a,j,c)},
z4(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a){this.a=a},
lb:function lb(){},
ak:function ak(){},
j5:function j5(a){this.a=a},
dq:function dq(){},
cm:function cm(a,b,c,d){var _=this
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
jQ:function jQ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i1:function i1(a){this.a=a},
kH:function kH(a){this.a=a},
fw:function fw(a){this.a=a},
ji:function ji(a){this.a=a},
kf:function kf(){},
hV:function hV(){},
rF:function rF(a){this.a=a},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(){},
F:function F(){},
lG:function lG(){},
qT:function qT(){this.b=this.a=0},
bh:function bh(a){this.a=a},
ra:function ra(a){this.a=a},
r9:function r9(a){this.a=a},
iD:function iD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
l7:function l7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pl:function pl(a){this.a=a},
yy(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Dg,a)
s[$.e9()]=a
return s},
a0(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iR,a)
s[$.e9()]=a
return s},
Dg(a){return t.gY.a(a).$0()},
iR(a,b,c){t.gY.a(a)
if(A.c(c)>=1)return a.$1(b)
return a.$0()},
wv(a,b,c){return c.a(a[b])},
yz(a,b){return a[b]},
ai(a,b,c,d){return d.a(a[b].apply(a,c))},
yq(a,b,c,d){return d.a(a[b](c))},
aY(a,b){var s=new A.av($.ao,b.i("av<0>")),r=new A.i7(s,b.i("i7<0>"))
a.then(A.h0(new A.v8(r,b),1),A.h0(new A.v9(r),1))
return s},
yL(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
d4(a){if(A.yL(a))return a
return new A.uA(new A.ih(t.mp)).$1(a)},
v8:function v8(a,b){this.a=a
this.b=b},
v9:function v9(a){this.a=a},
uA:function uA(a){this.a=a},
lh:function lh(){},
fC:function fC(){this.b=this.a=0},
pK:function pK(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
pL:function pL(){},
ew:function ew(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
n6:function n6(a,b){this.a=a
this.b=b},
n7:function n7(){this.a=null
this.d=0},
kk:function kk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
f8:function f8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jC:function jC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
nK:function nK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dM(a,b){return new A.jM(a,b)},
dl:function dl(){},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
Fy(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.gf)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.it(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.S(f,new A.va())
s=A.e([],t.bH)
for(r=A.hZ(f,0,A.e6(b,"count",t.S),t.jX),q=r.$ti,r=new A.aT(r,r.gu(0),q.i("aT<a5.E>")),q=q.i("a5.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bt:function bt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
va:function va(){},
p7(a,b,c,d,e,f,g,h,i,j){return new A.es(c,a,h,g,f,e,i,j,b,!0)},
vz(a,b){if(!isFinite(b)||b<0||b>1)throw A.d(A.y("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
j4:function j4(a,b){this.a=a
this.b=b},
es:function es(a,b,c,d,e,f,g,h,i,j){var _=this
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
Bi(a){A:{break A}return a},
cX:function cX(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(){},
rd:function rd(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pa:function pa(){},
pb:function pb(){},
pc:function pc(){},
po(a){var s,r=t.N,q=A.aI(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.J(0,A.aI(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.J(0,A.aI(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.J(0,A.aI(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.q(0,"dof"))q.J(0,A.aI(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pn(A.qe(q,r),s)},
pn:function pn(a,b){this.a=a
this.b=b},
pp:function pp(){},
pD:function pD(a){this.b=a},
ks:function ks(){this.a=null
this.c=0
this.d=!1},
fd:function fd(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
this.b=b},
bq:function bq(a,b,c,d,e,f,g,h,i,j){var _=this
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
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
ez:function ez(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.d=c},
nM:function nM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Bh(){return new A.k4(new A.cQ(new A.p8(),A.e([],t.dz),A.e([],t.t),t.kk))},
k4:function k4(a){this.a=a},
p8:function p8(){},
z7(a){var s=4
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
case 3:s=A.i(A.aX("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Dm(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.T[r]
if(A.z7(q.a)===b)s+=q.c}return s},
Bj(a){return new A.pd(a,new A.cQ(new A.pe(),A.e([],t.jl),A.e([],t.t),t.ll),A.o(t.S,t.mL))},
xn(a){var s
A:{s=a.byteLength
break A}return s},
kJ:function kJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pd:function pd(a,b,c){this.a=a
this.b=b
this.c=c},
pe:function pe(){},
pf:function pf(){},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
r1:function r1(a,b){this.a=a
this.b=b},
r2:function r2(a){this.a=a},
r_:function r_(a,b){this.a=a
this.b=b},
r0:function r0(){},
BT(a){var s=new A.kF(a,new A.cQ(new A.r3(),A.e([],t.mQ),A.e([],t.t),t.ox),A.o(t.S,t._))
s.d=s.aM($.wE())
s.e=s.aM($.wB())
s.f=s.aM($.wC())
s.r=s.aM($.wA())
s.w=s.aM($.wD())
return s},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
r3:function r3(){},
r5:function r5(){},
r4:function r4(){},
EU(a){var s,r,q,p,o=A.e([],t.og)
for(s=a.length,r=t.ix,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.eo(p,A.e([p],r)))
continue}return o},
eo:function eo(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
nF:function nF(){},
nG:function nG(a){this.a=a},
nD:function nD(a){this.a=a},
nE:function nE(a){this.a=a},
jB:function jB(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
nL:function nL(a,b){this.a=a
this.b=b
this.c=0},
Cp(){return new A.fB()},
nJ:function nJ(a){this.a=a
this.b=null},
fB:function fB(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
vB(){return!0},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pr:function pr(){},
ps:function ps(){},
c9:function c9(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
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
N:function N(a,b){this.a=a
this.b=b},
ha:function ha(a){this.b=a},
pI:function pI(a,b){var _=this
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
pM:function pM(){},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pO:function pO(a,b){this.a=a
this.b=b},
pT:function pT(){},
pS:function pS(){},
pR:function pR(){},
pQ:function pQ(a){this.a=a},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a,b){this.a=a
this.b=b},
BH(a){return new A.hM(a,new A.cQ(new A.pV(),A.e([],t.n_),A.e([],t.t),t.mo))},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a,b){this.a=a
this.b=b},
pV:function pV(){},
yv(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.Dx(a,r,s,a.x.gn().a.b.a).b},
Dx(a,b,c,d){var s,r,q,p,o,n=new A.u1(a),m=new A.u2(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.EY(b,k,B.aN,l,s.gos(),new A.tN(m),new A.tO(m),new A.tP(a),new A.tU(a),new A.tV(a),new A.tW(m),new A.tX(m),s.gou(),new A.tY(a),s.goy(),r.gow(),n,s.goA(),s.goC(),new A.tZ(m,c),new A.u_(m),new A.u0(m),new A.tQ(m),new A.tR(m),new A.tS(a),new A.tT(m),1,i,j,512)}else{p=new A.aN("sceneColor",B.r,j,i,1,0)
n=A.e([new A.kY(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.o5)
n.push(new A.hI(b,u.l,u.B,k,p,B.aN))
q=new A.jA(n)}a.r.toString
o=q.ml(B.O,new A.pM(),!1,new A.ls())
n=o.a.b
if(n.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.w(n)))
return new A.t8(q,o)},
Dy(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.J(b7.giS(),t.os)
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
B.a.l(s,new A.lH(new A.cp((r|1073741824)>>>0,0,"transient"),q,A.ba(new A.R(p,n.i("L(1)").a(o.gaz()),n.i("R<1,L>")))))}p=b8.a
m=A.F4(A.AX(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dM(B.aw,n))
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
if(h==null)A.i(A.dM(B.aw,n))
j=j.b
g=j.$ti
j.a0(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.c.T(n>0?n:h.e,3)}o=t.N
n=A.o(o,t.a1)
e=new A.nJ(n)
e.mh("cull")
j=l-f
d=e.b
if(d==null)A.i(A.m("cull recorded outside an active frame"))
if(j<0)A.i(A.y("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.mX)
a=A.e([],t.ao)
for(i=s.length,g=t.bz,a0=p.a,a1=t.eU,k=0;k<s.length;s.length===i||(0,A.r)(s),++k){a2=s[k]
if(a2.gD().e===B.aO)B.a.l(a,new A.aO(new A.bJ(a0.jd(a2.gD().c.a).c,a2.ga3().a),a2,a1))
else B.a.l(b,new A.aO(new A.bL(B.jE,a2.gD().b,a2.gD().a,a2.ga3().a),a2,g))}a3=new A.ld(A.EU(A.FA(b)),A.Fz(a),p,b8.b,b8.c)
a4=new A.jq(b6.a,e)
for(s=b4.b,p=s.length,i=t.kp,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.i(A.an(g,"passId",null))
e.b=g
n.cb(g,A.zg())
a6=A.o(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.i(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.i(A.m("resource is not in candidate: "+b1))
b3=new A.f6(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cb(b0,new A.u3(b3))}a5.ah(new A.jd(a6,a4,a3))}return new A.rG(e,m,j)},
xz(a){return new A.q9(a,new A.n6(new A.n7(),new A.ks()),new A.nL(A.e([],t.c8),B.fv),A.e([],t.oZ),B.ba,A.e([],t.is),null)},
q3:function q3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=!1},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function lH(a,b,c){this.a=a
this.b=b
this.c=c},
u1:function u1(a){this.a=a},
u2:function u2(a,b){this.a=a
this.b=b},
u0:function u0(a){this.a=a},
tU:function tU(a){this.a=a},
tV:function tV(a){this.a=a},
u_:function u_(a){this.a=a},
tP:function tP(a){this.a=a},
tR:function tR(a){this.a=a},
tQ:function tQ(a){this.a=a},
tZ:function tZ(a,b){this.a=a
this.b=b},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tW:function tW(a){this.a=a},
tX:function tX(a){this.a=a},
tY:function tY(a){this.a=a},
tT:function tT(a){this.a=a},
tS:function tS(a){this.a=a},
u3:function u3(a){this.a=a},
t8:function t8(a,b){this.a=a
this.b=b},
ls:function ls(){},
ld:function ld(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q9:function q9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qa:function qa(){},
qb:function qb(){},
qc:function qc(){},
lq:function lq(a){this.b=a},
rS:function rS(){},
lw:function lw(){},
hU:function hU(a,b){this.a=a
this.b=b},
FA(a){var s,r,q=A.J(a,t.bz)
B.a.S(q,new A.vf())
s=A.H(q)
r=s.i("R<1,bW>")
s=A.J(new A.R(q,s.i("bW(1)").a(new A.vg()),r),r.i("a5.E"))
s.$flags=1
return s},
Fz(a){var s,r,q=A.J(a,t.eU)
B.a.S(q,new A.vd())
s=A.H(q)
r=s.i("R<1,bW>")
s=A.J(new A.R(q,s.i("bW(1)").a(new A.ve()),r),r.i("a5.E"))
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
vf:function vf(){},
vg:function vg(){},
vd:function vd(){},
ve:function ve(){},
F4(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.ix)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.geR()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.y("cullItems: non-finite world bounds for instance "+o.ga3().p(0),null))
if(a.oK(o.geR())===B.bZ){++q
continue}B.a.l(l,o)}return new A.nk(l,new A.nl(q))},
nl:function nl(a){this.b=a},
nk:function nk(a,b){this.a=a
this.b=b},
ba(a){var s,r,q,p,o,n,m,l,k
for(s=J.S(a),r=B.l7,q=B.l8,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.L(m,k,Math.min(r.c,o))
q=new A.L(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.y("Aabb.fromPoints requires at least one point",null))
return new A.j2(r,q)},
j2:function j2(a,b){this.a=a
this.b=b},
AX(a){var s,r,q,p,o,n,m=a.a,l=new A.nO(),k=m.length
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
return new A.nN(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
eu:function eu(a,b){this.a=a
this.b=b},
fh:function fh(a,b){this.a=a
this.b=b},
nN:function nN(a){this.a=a},
nO:function nO(){},
xl(a){if(a.length!==16)throw A.d(A.y("Mat4.fromColumnMajor requires 16 values",null))
return new A.dj(new Float32Array(A.a_(a)))},
vy(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dj(q)},
xm(a,b,c){var s=b.gaa(),r=s.bj(c).gaa(),q=r.bj(s),p=new Float32Array(16)
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
p6:function p6(){},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kG:function kG(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b){this.a=a
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
l4:function l4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jc:function jc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l5:function l5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jp:function jp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
l8:function l8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ib:function ib(a,b){this.a=a
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
l9:function l9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jt:function jt(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
la:function la(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jK:function jK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lf:function lf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.b=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
bo(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aN(a.a,a.b,b,c,s,r)},
vC:function vC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
lt:function lt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lu:function lu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xB(a){var s=a.c,r=Math.abs(s.a)<0.99?B.l6:B.a_,q=A.xm(a.b,s,r)
return new A.eC(A.vy(1,a.f,B.d.K(a.w*2,0.1,3),0.05).a4(0,q))},
eC:function eC(a){this.a=a},
kv:function kv(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lx:function lx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
EY(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.d(A.an(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bo(B.bc,e5,e4,e3,a8)
k=A.bo(B.bc.iZ(),e5,e4,a8,a8)
A.bo(B.kc,e5,e4,a8,a8)
j=A.bo(B.k9,e5,e4,a8,a8)
i=A.bo(B.k4,e6,e6,a8,a8)
h=A.bo(B.k5,b6,m,a8,a8)
g=A.bo(B.k6,b6,m,a8,a8)
f=A.bo(B.ka,b6,m,a8,a8)
e=A.bo(B.kb,b6,m,a8,a8)
d=$.zC()
c=e3>1
b=A.bo(d,e5,e4,a8,c?2:1)
d=A.bo(B.k1,b6,m,a8,a8)
a=A.bo(B.k2,b6,m,a8,a8)
a0=A.bo(B.k3,e5,e4,a8,a8)
a1=A.bo(B.k7,e5,e4,a8,a8)
a2=A.bo(B.kd,e5,e4,a8,a8)
a3=A.bo(B.k8,e5,e4,a8,a8)
a4=c?new A.k6(b8,l,k):a8
b5.a=null
a5=A.xB(B.kK)
a6=t.o5
a7=A.e([],a6)
k=c?k:l
if(r){B.a.J(a7,A.e([new A.h8(b7,a9,b0,b8,b1,b1,B.dm,!0,k,f,d6,b6,m),new A.h8(b7,a9,b0,b8,b2,b2,B.lN,!1,f,e,c2,b6,m),new A.jc(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.J(a7,A.e([new A.he(b7,a9,b0,b8,b3,b3,B.dn,k,d,d6,b6,m),new A.he(b7,a9,b0,b8,b4,b4,B.lO,d,a,c7,b6,m),new A.jt(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jK(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kn(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kN(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.jp(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kz(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.ky(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kv(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.ux(b5),i))
j.push(new A.kw(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.uy(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.J(j,a7)
j.push(new A.hI(b7,a9,u.B,b8,k,b9))
return new A.jA(j)},
ux:function ux(a){this.a=a},
uy:function uy(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
ly:function ly(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kz:function kz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lB:function lB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ky:function ky(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lA:function lA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kN:function kN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lK:function lK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kY:function kY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lN:function lN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4:function n4(){},
ku(a,b){return new A.hT(a,b)},
jG:function jG(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
el:function el(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
z:function z(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
o2:function o2(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
o3:function o3(){},
o4:function o4(){},
fG:function fG(a,b){this.a=a
this.b=b},
e0:function e0(a,b){var _=this
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
wZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fe(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
ja:function ja(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ru:function ru(){this.a=null},
C4(a){var s=new A.kW(a,B.h,new A.ru(),A.Cf(a))
s.ko(a)
return s},
Cf(a){var s,r,q=t.hH.a(a.getSupportedExtensions())
if(q==null)return A.a2(t.N)
s=A.a2(t.N)
r=J.S(t.a.b(q)?q:new A.aS(q,A.H(q).i("aS<1,j>")))
while(r.m())s.l(0,r.gn())
return s},
c0(a,b){var s,r
if(a.b!==B.h)A.i(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.c(s.drawingBufferWidth),A.c(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
Ca(a,b){var s
if(a.b!==B.h)A.i(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.c(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.y("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
C9(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
C8(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
C7(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
xN(a,b){var s
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
C5(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bk(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=a.f
r=s.n3(b)
if(r.a===0)return
if(r.q(0,B.bh)){q=v.G
p=a.a
if(b.a)p.enable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bi))a.a.depthFunc(A.C8(a,b.b))
if(r.q(0,B.bj))a.a.depthMask(b.c)
if(r.q(0,B.bn)){q=v.G
p=a.a
if(b.w)p.enable(A.c(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.c(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bo))a.a.cullFace(A.C7(a,b.x))
if(r.q(0,B.d8)){q=v.G.WebGL2RenderingContext
q=A.c(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bk)){q=v.G
p=a.a
if(b.d)p.enable(A.c(q.WebGL2RenderingContext.BLEND))
else p.disable(A.c(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bl))a.a.blendFunc(A.xN(a,b.e),A.xN(a,b.f))
if(r.q(0,B.bm))a.a.blendEquation(A.C5(a,b.r))
if(r.q(0,B.d6))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.d7)){q=v.G.WebGL2RenderingContext
a.a.disable(A.c(q.SCISSOR_TEST))}s.a=b},
C6(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.c(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.c(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dt(a,b,c,d,e,f){var s
if(a.b!==B.h)A.i(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.C6(a,b))},
cf(a,b){var s
if(a.b!==B.h)A.i(A.m(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.i(A.m(u.k))
s=a.e
if(s==null)throw A.d(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.k(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.by(c.b))
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
bv(a,b){if(a.b!==B.h)A.i(A.m(u.k))
a.a.bindVertexArray(A.b(b.a))},
aC(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.i(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iG){p=s.d>1?A.c(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iF){o=s.b
if(o!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Cb(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.c(p.ELEMENT_ARRAY_BUFFER),c,A.c(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
Cc(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
xQ(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=a.a
r=A.k(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.c6?A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.c(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Cc(a,b.b))
return new A.dv(r)},
xO(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
xP(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
vL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.i(A.m(u.k))
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
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.xO(a,b.e))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.xO(a,b.f))
p=b.r
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.xP(a,p))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.xP(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.fL(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.i(A.an(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dv(new A.iG(r,l,k,q,!1))},
vM(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.i(A.m(u.k))
s=t.fL.a(b.a)
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
kX(a,b){a.a.deleteTexture(t.fL.a(b.a).a)},
Ce(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.i(A.m(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.y("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.k(r.createFramebuffer())
if(q==null)throw A.d(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aP
if(n&&!a1.e)throw A.d(A.y("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.c8||o===B.fQ
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
if(o!==h){A.vN(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dv(new A.iF(q,l,k,f,e,j,i,s,a1.b,a1.c))},
vN(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d_(a){var s
if(a.b!==B.h)A.i(A.m(u.k))
s=A.k(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dv(s)},
xR(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.k(p.createShader(b))
if(o==null)throw A.d(A.ku(b===A.wv(A.yz(A.zx(),r),q,t.S)?B.d1:B.d2,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.d4(p.getShaderParameter(o,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aQ(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.ku(b===A.wv(A.yz(A.zx(),r),q,t.S)?B.d1:B.d2,s))}return o},
Cd(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.i(A.m(u.k))
q=v.G
s=A.xR(a,A.c(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.xR(a,A.c(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.k(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.kD)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.d4(o.getProgramParameter(n,A.c(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aQ(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.ku(B.d3,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.c(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.ku(B.d4,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.k(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.ku(B.d4,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dv(n)},
dv:function dv(a){this.a=a},
iG:function iG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iF:function iF(a,b,c,d,e,f,g,h,i,j){var _=this
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
lM:function lM(a){this.a=a
this.b=!1},
kW:function kW(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rs:function rs(a){this.a=a},
rt:function rt(a){this.a=a},
th:function th(){},
lL:function lL(){},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mF(a,a0){var s=0,r=A.bD(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mF=A.bG(function(a1,a2){if(a1===1)return A.bz(a2,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.m
n=A.o(t.N,o)
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
b=new A.j7(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.bM,A.o(o,t.bp))
b.k6(p,a0)
p=A.q(a).i("I<1,2>")
s=3
return A.am(A.nQ(A.k2(new A.I(a,p),p.i("bT<ay>(p.E)").a(new A.mG(b)),p.i("p.E"),t.mj),t.c),$async$mF)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.l9():n
c.buffer=p
q=b
s=1
break
case 1:return A.bA(q,r)}})
return A.bB($async$mF,r)},
j7:function j7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mH:function mH(){},
mG:function mG(a){this.a=a},
mJ:function mJ(a,b){this.a=a
this.b=b},
mI:function mI(a,b){this.a=a
this.b=b},
mK:function mK(a,b,c){this.a=a
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
Ag(a,b,c,d,e,f,g){var s=new A.mw(c,f,b,g,new A.a(d.a,d.b,d.c),e,a)
s.k8(a,b,c,d,0,e,f,g)
return s},
Ac(a,b){var s=new A.me(b)
s.k5(a,b)
return s},
Af(a){var s,r,q,p,o,n=t.z
n=A.o(n,n)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.as(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.ms(A.b1(n,r,t.a))
n.k7(a)
return n},
Ex(a,b){var s,r,q,p=b>>>0
for(s=new A.dG(a),r=t.gS,s=new A.aT(s,s.gu(0),r.i("aT<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.zl(p,q==null?r.a(q):q)}return p&2147483647},
j8:function j8(a,b){this.a=a
this.b=b},
mw:function mw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mx:function mx(){},
me:function me(a){this.a=a},
mf:function mf(){},
h6:function h6(){},
mg:function mg(){},
mh:function mh(){},
ms:function ms(a){this.a=a},
mu:function mu(){},
mv:function mv(){},
mt:function mt(){},
vn:function vn(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mE:function mE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a){this.a=a},
mA:function mA(){},
i6:function i6(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=1
_.w=0},
nI:function nI(a){this.a=a},
kD:function kD(a,b,c,d,e,f,g,h,i,j){var _=this
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
o0:function o0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
o1:function o1(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=0
this.$ti=b},
jR:function jR(a,b,c,d,e,f,g,h,i,j){var _=this
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
oF:function oF(a){this.a=a},
B4(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=A.as(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.oE(n)},
oE:function oE(a){this.a=a},
oI:function oI(){var _=this
_.c=_.b=_.a=!1
_.d=0},
k3:function k3(a){this.a=a},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p9:function p9(a,b){this.a=a
this.b=b},
hW(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
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
pU:function pU(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
q2:function q2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
BI(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.xx(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.jV(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.lp(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0))
r=t.S
q=A.cM(800,0,!1,r)
p=new Float32Array(8064)
o=J.jV(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.ln(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),0,1,0,0,0)
n=A.cM(4000,0,!1,r)
m=new A.a(0.3,0.7,-0.5).gaa()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.pW(a,new A.o0(a,A.o(t.m,r)),b,c,A.a2(t.N),j,i,h,g,q,p,A.o(r,t.hX),o,n,m,B.ic,new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),new A.k3(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.kh(a,b,c)
return k},
pW:function pW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aN=a
_.aY=b
_.bn=c
_.bo=d
_.eg=_.ip=1
_.eq=_.ep=_.iH=_.iG=_.iF=_.iE=_.iD=_.iC=_.eo=_.en=_.em=_.el=_.ek=_.ej=_.ei=_.iB=_.iA=_.iz=_.eh=_.iy=_.ix=_.iw=_.iv=_.iu=_.it=_.is=_.ir=_.iq=_.ap=$
_.cH=null
_.ht=e
_.hU=_.hT=_.hS=_.hR=_.hQ=_.hP=_.hO=_.hN=_.hM=_.hL=_.hK=_.hJ=_.hI=_.hH=_.hG=_.hF=_.hE=_.hD=_.hC=_.hB=_.hA=_.hz=_.hy=_.hx=_.hw=_.hv=_.hu=_.cI=$
_.cJ=0
_.e_=_.dZ=_.dY=_.dX=_.dW=_.dV=_.dU=$
_.cN=_.cM=_.cL=_.cK=_.c0=_.bm=null
_.c1=$
_.hX=_.hW=_.hV=!1
_.nd=1
_.e0=f
_.e1=g
_.ne=h
_.hY=i
_.cO=0
_.hZ=j
_.nf=k
_.e2=0
_.e3=l
_.ng=1
_.e4=!1
_.c2=0
_.e5=m
_.c3=0
_.i_=n
_.i0=o
_.i3=_.i2=_.i1=1
_.i4=0.4
_.e6=p
_.i5=q
_.e7=r
_.e8=s
_.e9=a0
_.i6=_.ed=_.ec=_.eb=_.ea=0
_.i7=null
_.i8=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ij=_.ef=_.ee=_.ii=_.ih=_.nj=_.ni=_.nh=_.ig=_.ie=_.ic=_.ib=_.ia=_.i9=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.ik=a7
_.il=a8
_.im=a9
_.io=b0},
yO(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.an(0,c).bj(f.an(0,c)).gaa(),r=A.ur(g)
return A.yV(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
iY(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
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
yV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.iY(a,A.iY(a,A.iY(a,A.iY(a,A.iY(a,A.iY(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
ur(a){return new A.az((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
DK(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aO(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.aa(),i=A.aa(),h=A.aa()
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
if(typeof s!=="number")return s.a4()
s=B.d.aF(s*255)
r=i.dB()
if(typeof r!=="number")return r.a4()
r=B.d.aF(r*255)
q=h.dB()
if(typeof q!=="number")return q.a4()
return new A.az(s,r,B.d.aF(q*255))},
id:function id(){},
lC:function lC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
lp:function lp(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ln:function ln(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
pX:function pX(){},
pY:function pY(a){this.a=a},
pZ:function pZ(a){this.a=a},
rw:function rw(){},
qO:function qO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
i2(a,b,c){return new A.a(a,b,c)},
xL(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.a(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
a:function a(a,b,c){this.a=a
this.b=b
this.c=c},
Cg(a,b,c,d){return new A.kZ(d,b,c,a)},
Ci(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.zP()
s=a.d
r=A.rx(s,0)
q=A.rx(s,1)
p=A.rx(s,2)
o=A.rx(s,3)
s=t.N
n=A.a2(s)
m=a.e
if(A.bw(m,0))n.l(0,"GamepadA")
if(A.bw(m,1))n.l(0,"GamepadB")
if(A.bw(m,2))n.l(0,"GamepadX")
if(A.bw(m,3))n.l(0,"GamepadY")
if(A.bw(m,4))n.l(0,"GamepadLB")
if(A.bw(m,5))n.l(0,"GamepadRB")
if(A.bw(m,6))n.l(0,"GamepadLT")
if(A.bw(m,7))n.l(0,"GamepadRT")
if(A.bw(m,8))n.l(0,"GamepadView")
if(A.bw(m,9))n.l(0,"GamepadMenu")
if(A.bw(m,10))n.l(0,"GamepadLStick")
if(A.bw(m,11))n.l(0,"GamepadRStick")
if(A.bw(m,12))n.l(0,h)
if(A.bw(m,13))n.l(0,g)
if(A.bw(m,14))n.l(0,f)
if(A.bw(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.a(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.gaa():i
return new A.kZ(m,p,o,A.qe(n,s))},
rx(a,b){return A.Ch(b<a.length?a[b]:0)},
bw(a,b){return b<a.length&&a[b]>=0.5},
Ch(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.d.K((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.d.gc6(a)?-s:s},
kA:function kA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kZ:function kZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mX:function mX(a){this.a=a},
AC(a,b,c){var s=new A.ju(a,c,null,b)
s.kb(a,null,null,b,c)
return s},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
AP(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.cL(new A.M(B.iz,t.gl.a(new A.nA(a)),t.ns),t.no)
return s==null?null:new A.ff(s)},
Bk(a,b){var s=A.e([],t.s)
switch(b.a){case 0:A.vA(s,a,B.i6)
break
case 1:A.vA(s,a,B.i7)
break
case 2:A.vA(s,a,B.iC)
break}return s},
vA(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
AO(a){if(a.a!==21)return null
if(a.e)return B.el
if(!a.d&&a.b>=0.6&&a.c>=3)return B.em
return B.ek},
c8:function c8(a,b){this.a=a
this.b=b},
nx:function nx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ff:function ff(a){this.a=a},
nA:function nA(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
Bq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.ki(s,new A.a(o,n,m),q,p,l,j)
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
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Ez(a){var s,r,q,p=A.o(t.N,t.z)
for(s=a.gH(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.ez)
p.k(0,q,r.b)}return p},
lT(a){var s,r,q,p,o,n=a.gZ().bN(0)
B.a.X(n)
s=t.z
r=A.o(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.ys(a.h(0,o)))}return A.b1(r,t.N,s)},
ys(a){var s
if(t.f.b(a))return A.lT(A.Ez(a))
if(t.j.b(a)){s=t.z
return A.al(J.f_(a,A.Fu(),s),s)}if(a==null||A.c3(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fb)
return a}throw A.d(A.a9("presentation snapshot contains unsupported value "+J.eZ(a).p(0),null,null))},
pE:function pE(a){this.a=a},
xy(a,b,c){var s=A.w1(b),r=A.w1(a)
if(c!==2)A.i(A.an(c,"version","unsupported save version"))
return new A.ft(c,s,r)},
w1(a){var s,r,q,p,o=A.q(a).i("ae<1>"),n=A.J(new A.ae(a,o),o.i("p.E"))
B.a.X(n)
o=t.z
s=A.o(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.yr(a.h(0,p)))}return A.b1(s,t.N,o)},
yr(a){var s,r,q,p
if(t.f.b(a)){s=A.o(t.N,t.z)
for(r=a.gH(),r=r.gt(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.f2)
s.k(0,p,q.b)}return A.w1(s)}if(t.j.b(a)){r=t.z
return A.al(J.f_(a,A.Fx(),r),r)}if(a==null||A.c3(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fc)
return a}throw A.d(A.a9("save contains unsupported value "+J.eZ(a).p(0),null,null))},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(){},
eA:function eA(a,b){this.a=a
this.b=b},
x1(a,b,c,d,e,f,g,h){var s=A.e([],t.mc),r=A.e([],t.ah)
return new A.nT(a,b,c,d,e,f,g,s,r,h)},
x2(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aL(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.f1)
r=c.h(0,"runSeed")
q=A.aL(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aL(p)||p<1||typeof o!="number")throw A.d(B.fl)
if(!isFinite(480))throw A.d(A.an(480,"daySeconds","must be finite and > 0"))
n=new A.jE(p,480)
if(!isFinite(o)||o<0||o>=24)A.i(A.a9("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.Be(a5,A.aM(a1,s,m))
k=A.Az(l,A.aM(a0,s,m),n)
j=A.x5(b)
A.B3(A.aM(a2,s,m)).mb(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.c3(f))A.i(B.eH)
e=A.Bl(c.h(0,"narrative"))
if(e==null)e=A.ph(d,d,d)
return A.x1(b,q,j,n,l,k,new A.js(i,h,g,f),e)},
Dw(a){var s
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
ek:function ek(a,b){this.a=a
this.b=b},
jD:function jD(){},
nU:function nU(a,b){this.a=a
this.b=b},
nT:function nT(a,b,c,d,e,f,g,h,i,j){var _=this
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
nV:function nV(a){this.a=a},
nW:function nW(){},
nX:function nX(){},
nY:function nY(a){this.a=a},
nZ:function nZ(){},
Ai(a){var s,r,q,p,o,n,m="modelScale",l=A.m_(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.aE(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.eT)
s=A.e5(l,"houseId")
r=A.e5(l,"sourceRef")
q=J.f_(A.lX(l,"rooms"),new A.mM(k),t.fS)
q=A.J(q,q.$ti.i("a5.E"))
q.$flags=1
p=J.f_(A.lX(l,"portals"),new A.mN(k),t.gE)
p=A.J(p,p.$ti.i("a5.E"))
p.$flags=1
o=J.f_(A.lX(l,"stairs"),new A.mO(),t.d2)
o=A.J(o,o.$ti.i("a5.E"))
o.$flags=1
n=J.f_(A.lX(l,"exteriorCells"),new A.mP(),t.N)
n=A.J(n,n.$ti.i("a5.E"))
n.$flags=1
return new A.mL(s,r,q,p,o)},
Aj(a,b){var s=A.m_(a,"room"),r=A.e5(s,"id"),q=A.z3(s.h(0,"origin"),"origin",b),p=A.z3(s.h(0,"size"),"size",b),o=J.f_(A.lX(s,"windows"),new A.mR(b),t.lJ)
o=A.J(o,o.$ti.i("a5.E"))
o.$flags=1
return new A.f1(r,q,p,o)},
m_(a,b){return t.P.b(a)?a:A.iQ(b+" is not an object")},
lX(a,b){return t.j.b(a.h(0,b))?t.ib.a(a.h(0,b)):A.iQ(b+" is not a list")},
e5(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.iQ(b+" is not a string")},
iU(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.iQ(b+" is not finite")},
EM(a,b){var s,r
if(t.j.b(a)){s=J.aA(a)
s=s.gu(a)!==3||s.N(a,new A.uv())}else s=!0
if(s)return A.iQ(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.S(a);r.m();)s.push(A.aE(r.gn()))
return s},
z3(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.EM(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
iQ(a){return A.i(A.a9(a,null,null))},
mL:function mL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
mM:function mM(a){this.a=a},
mN:function mN(a){this.a=a},
mO:function mO(){},
mP:function mP(){},
mQ:function mQ(a){this.a=a},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mR:function mR(a){this.a=a},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
f0:function f0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(a){this.b=a},
uv:function uv(){},
je:function je(a,b){this.a=a
this.b=b
this.d=null},
n5:function n5(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
l_:function l_(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oi:function oi(){this.b=0},
q4:function q4(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
Z:function Z(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jx:function jx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nC:function nC(){},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
ok:function ok(){},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
FH(a){var s,r,q,p,o,n,m,l
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
return new A.cc(B.a4,p,new Uint16Array(A.a_(a.b)),new A.j2(new A.L(s.a,s.b,s.c),new A.L(s.d,s.e,s.f)))},
FG(a){var s,r,q,p,o,n=A.e([],t.ft)
for(s=A.Ew(a,new A.vh(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jy(o,p.c,p.e))}return n},
Ew(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.o(t.N,t.m7)
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
s.k(0,d,l)}B.a.J(l.d,A.e([m,k,j],p))}r=A.e([],t.nP)
q=s.$ti.i("ar<2>")
q=A.J(new A.ar(s,q),q.i("p.E"))
B.a.S(q,new A.up())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].oS(a))
return r},
Df(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jx(r,q,p,o,n,m)},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
vh:function vh(a){this.a=a},
up:function up(){},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eg:function eg(a,b){this.a=a
this.b=b},
jz:function jz(){},
EX(a){var s,r,q,p=new A.oj(A.e([],t.ph),A.e([],t.t),A.o(t.N,t.S))
for(s=0;s<4;++s)A.Dz(p,a,B.cx[s],15.75,15.75,12.044999999999998,0.63)
p.v(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.v(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.v(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.v(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.v(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.v(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.v(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.v(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.Z(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.Z(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ad(r,new A.Z(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ad(r,q,new A.Z(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.Z(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.Z(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ad(q,new A.Z(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ad(q,r,new A.Z(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.v(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ad(new A.Z(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.Z(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.Z(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ad(new A.Z(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.Z(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.Z(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.Z(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.Z(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ad(r,new A.Z(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ad(r,q,new A.Z(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.Z(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.Z(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ad(q,new A.Z(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ad(q,r,new A.Z(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.En(p,15.75,15.75,12.044999999999998,16.32)
A.Di(p,15.75,15.75,16.32)
A.Dv(p,15.75,15.75,12.044999999999998)
A.DD(p,a,15.75)
A.Et(p,15.75,15.75)
A.De(p,15.75)
return p.mj()},
Dz(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.dA)
for(s=b6.b,r=s.length,q=B.x!==b7,p=B.l!==b7,o=B.m===b7,n=B.K===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.aX(k)
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
B.a.l(b4,new A.e_(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aD(i),b=J.S(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.aI(i)!==b7)continue
B:{if(!p||o){a0=g+a.ak(i)
break B}if(!q||n){a0=e+a.ak(i)
break B}a0=null}B.a.l(b4,new A.e_(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
r=t.i
a1=A.aI([0,s],r)
a2=A.aI([0,c0],r)
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
if(B.a.N(b4,new A.u5(b0,b1,b2,b3)))continue
switch(m){case 0:b5.v(0,b1,b3,0,b0,b2,r)
break
case 2:b5.v(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.v(0,0,b3,b1,r,b2,b0)
break
case 1:b5.v(0,s,b3,b1,b8,b2,b0)
break}}A.DC(b5,b4,b7,b8,b9,c1)
A.DA(b5,b4,b7,b8,b9,c1)
A.DB(b5,b4,b7,b8,b9,c0,c1)},
DB(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aI([0,a4===B.l||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.u4(a,a0,g)))continue
switch(s){case 0:a2.v(1,a0,e,m,a,f,l)
break
case 2:a2.v(1,a0,e,k,a,f,j)
break
case 3:a2.v(1,m,e,a0,l,f,a)
break
case 1:a2.v(1,o,e,a0,n,f,a)
break}}}},
DA(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
DC(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Er(a2,g,a4,a5,a6,a7,q)}},
Er(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
En(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.v(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.v(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.v(4,i,p,-0.38,j,q,-0.44)
a.v(4,i,p,s,j,q,o)}A.Eo(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.v(5,h+0.5,p,o,h-0.5,r,q)}},
Eo(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.Z(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.Z(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ad(n,new A.Z(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ad(n,m,new A.Z(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.Z(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.Z(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ad(m,new A.Z(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ad(m,n,new A.Z(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Di(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.v(0,g+0.35,k,n,g-0.35,l,q)
a.v(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.v(5,d+0.1,o,m,d-0.1,r,p)}}},
Dv(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.v(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.v(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.v(6,j,b+0.06,d,k,b,e)}a.v(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
DD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ak("hall")
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
Et(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
De(a,b){var s,r
a.v(0,6.7,1,-4.05,-2.5,0,-4.4)
a.v(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.v(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.v(7,b+3,0,-4.55,-3,-0.08,-5.2)},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
u5:function u5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u4:function u4(a,b,c){this.a=a
this.b=b
this.c=c},
Fv(a,b,c,d){var s,r,q,p,o,n=A.wz(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.eh(B.eq,s)}r=A.zv(a,c,b)
if(r!=null)return new A.eh(B.er,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.zw(a,c,b)!=null)return B.ew
q=A.zu(a,b,c,d)
if(q!=null){p=d.cC(q.c)
o=q.y
return new A.eh(B.et,o==null?"inspect the "+p.b:"inspect "+o)}return B.ev},
zu(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a0==null)return null
s=c.e.h(0,b)
if(s==null)return null
for(r=a0.oc(b),q=J.S(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>")),p=a0.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=3;r.m();){j=q.gn()
if(!j.x)continue
i=a0.cC(j.c)
h=j.f.a
g=j.jc(i,p)
f=a.a
e=new A.a(n+(h.a*p+0)-f.a,m+(h.b*p+(g.a+g.b)*0.5)-f.b,o+(h.c*p+0)-f.c)
d=e.gu(0)
if(d<0.01||d>3)continue
h=e.gaa()
f=a.b
if(Math.acos(B.d.K(h.a*f.a+h.b*f.b+h.c*f.c,-1,1))>0.5236||d>=k)continue
k=d
l=j}return l},
dJ:function dJ(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.c=b},
ze(a,b){var s,r=new A.cT(new Float32Array(5376)),q=new A.cT(new Float32Array(5376)),p=new A.cT(new Float32Array(5376)),o=new A.cT(new Float32Array(5376)),n=b.d,m=a.aX(b),l=A.hq(b.y),k=A.hq(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cU(new A.a(j,i,h),new A.a(j,i,f),new A.a(d,i,f),new A.a(d,i,h),l.c,e/c,g/c)
A.D3(r,b,m)
i+=m.b
c=k.e
q.cU(new A.a(j,i,h),new A.a(d,i,h),new A.a(d,i,f),new A.a(j,i,f),k.c,e/c,g/c)
A.D0(q,b,m)
for(s=0;s<4;++s)A.D7(p,a,b,m,B.cx[s])
for(j=a.aD(b.a),i=J.S(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.yg(o,b,m,h,!0)}A.D1(p,b,m)
A.D4(p,a,b,m)
return new A.q5(B.q.aL(r.a,0,r.b),B.q.aL(q.a,0,q.b),B.q.aL(p.a,0,p.b),B.q.aL(o.a,0,o.b))},
D0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.t(a,new A.a(n,s,r),new A.a(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.t(a,new A.a(m-0.34,g,l-0.34),new A.a(m+0.34,d-0.018,l+0.34),12037536)
A.t(a,new A.a(m-0.22,d-0.075,l-0.22),new A.a(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.t(a,new A.a(s,r,j),new A.a(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.t(a,new A.a(i,s,r),new A.a(i+0.1,q,p),4078648)}},
EV(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cT(new Float32Array(5376))
r=a.aX(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.yh(s,b,r,c,q)
return B.q.aL(s.a,0,s.b)},
EW(a,b){var s,r,q,p=new A.cT(new Float32Array(5376)),o=a.aX(b)
for(s=a.aD(b.a),r=J.S(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.yg(p,b,o,q,!1)}return B.q.aL(p.a,0,p.b)},
D3(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.hq(c)
if(c==="floor-wood"){c=a3.c
r=B.d.aO(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.eV(m,1.04):A.eV(m,0.84)
A.t(a1,new A.a(b,q,k),new A.a(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.t(a1,new A.a(h,a+0.016,a0+0.18),new A.a(p,a+0.026,c-0.18),6443866)
A.t(a1,new A.a(h+0.08,a+0.027,a0+0.22),new A.a(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.t(a1,new A.a(b+1.15,a+0.018,a0+2.15),new A.a(b+4.7,a+0.03,a0+4.35),5589578)
A.t(a1,new A.a(b+1.28,a+0.031,a0+2.28),new A.a(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.eV(c,1.04):A.eV(c,0.88)
A.t(a1,new A.a(p,o,k),new A.a(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.eV(c,1.06):A.eV(c,0.88)
A.t(a1,new A.a(e,o,k),new A.a(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.t(a1,new A.a(b+0.08,a+0.004,a0+0.08),new A.a(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.t(a1,new A.a(b+2.2,a+0.015,a0+2.45),new A.a(b+2.68,a+0.021,a0+2.93),A.eV(c,0.58))}},
D4(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.lR(b2,b4,b5,"living")
A.iO(b2,b4,"living")
a8=a9+b5.a
s=a8-0.48
r=b1+b5.c*0.4
A.t(b2,new A.a(s,b0,r-0.85),new A.a(a8,b0+2.55,r+0.85),7824724)
A.t(b2,new A.a(s-0.38,b0+0.02,r-0.72),new A.a(a8+0.05,b0+0.16,r+0.72),a2)
q=b0+2.34
A.t(b2,new A.a(s-0.52,b0+2.18,r-0.94),new A.a(a8+0.08,q,r+0.94),a3)
p=s-0.02
A.t(b2,new A.a(p,b0+0.45,r-0.48),new A.a(a8+0.03,b0+1.48,r+0.48),2170396)
for(a8=s-0.08,o=b0+0.28,n=r-0.42,m=b0+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.t(b2,new A.a(a8+j,o,n),new A.a(p+j,m,l),a4)}for(a8=s-0.01,p=b0+1.55,o=s+0.04,n=b0+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.t(b2,new A.a(a8,p,l+j),new A.a(o,n,m+j),a2)}for(a8=[r-0.68,r+0.56],p=s-0.42,o=b0+2,n=s-0.26,m=b0+2.2,i=0;i<2;++i){h=a8[i]
A.t(b2,new A.a(p,o,h),new A.a(n,m,h+0.16),a5)}A.t(b2,new A.a(s-0.27,q,r-0.58),new A.a(s-0.07,b0+2.52,r-0.38),a6)
A.t(b2,new A.a(s-0.25,q,r+0.34),new A.a(s-0.06,b0+2.49,r+0.52),a3)
break
case"hall":A.D5(b2,b3,b4,b5,a5,a4)
A.D6(b2,b3,b4,b5,a5,a4)
A.iO(b2,b4,"hall")
A.t(b2,new A.a(a9+0.28,b0+0.78,b1+0.52),new A.a(a9+0.68,b0+0.88,b1+2.15),a5)
for(a8=[b1+0.66,b1+2.01],q=a9+0.34,p=a9+0.42,o=b0+0.8,i=0;i<2;++i){g=a8[i]
A.t(b2,new A.a(q,b0,g),new A.a(p,o,g+0.08),a3)}f=a9+1.22
a8=b1+0.1
A.t(b2,new A.a(f-0.28,b0+2.35,b1+0.02),new A.a(f+0.28,b0+3.02,a8),a5)
A.t(b2,new A.a(f-0.13,b0+2.48,a8),new A.a(f+0.13,b0+2.72,b1+0.15),a2)
a8=b1+0.08
A.t(b2,new A.a(f-0.025,b0+1.82,a8),new A.a(f+0.025,b0+2.36,b1+0.13),a4)
for(q=a9+1.7,p=b0+1.74,o=a9+1.78,n=b0+1.84,m=b1+0.16,k=0;k<3;++k){l=k*0.36
A.t(b2,new A.a(q+l,p,a8),new A.a(o+l,n,m),a4)}a8=b0+0.72
A.t(b2,new A.a(a9+0.86,b0,b1+0.62),new A.a(a9+1.1,a8,b1+0.9),a6)
A.t(b2,new A.a(a9+0.91,a8,b1+0.68),new A.a(a9+1.05,b0+0.82,b1+0.84),a5)
break
case"kitchen":A.iO(b2,b4,"kitchen")
a8=a9+b5.a
e=a8-0.62
q=b0+1.28
A.t(b2,new A.a(e,b0,b1+0.72),new A.a(a8,q,b1+2.18),a4)
A.t(b2,new A.a(e-0.08,q,b1+0.62),new A.a(a8+0.04,b0+1.38,b1+2.28),a2)
for(a8=e+0.12,q=b0+1.39,p=b1+0.88,o=e+0.4,n=b0+1.45,m=b1+1.16,k=0;k<3;++k){l=k*0.4
A.t(b2,new A.a(a8,q,p+l),new A.a(o,n,m+l),2170396)}a8=b0+0.82
q=b0+0.94
A.t(b2,new A.a(a9+1.05,a8,b1+1.15),new A.a(a9+3.1,q,b1+2.35),a3)
for(p=[a9+1.18,a9+2.94],o=b1+1.28,n=b1+1.38,i=0;i<2;++i){d=p[i]
A.t(b2,new A.a(d,b0,o),new A.a(d+0.1,a8,n),a5)}A.t(b2,new A.a(a9+0.48,b0+1.72,b1+2.74),new A.a(a9+2.55,b0+1.84,b1+2.88),a5)
a8=b0+1.02
A.t(b2,new A.a(a9+3.38,q,b1+1.26),new A.a(a9+4.48,a8,b1+2.22),a6)
q=b1+1.66
p=b1+1.74
A.t(b2,new A.a(a9+3.82,a8,q),new A.a(a9+3.9,b0+1.34,p),a4)
A.t(b2,new A.a(a9+3.72,b0+1.3,q),new A.a(a9+4,b0+1.36,p),a4)
for(a8=a9+1.38,q=b0+0.95,p=b1+1.48,o=a9+1.78,n=b0+1.05,m=b1+1.88,k=0;k<2;++k){l=k*0.55
A.t(b2,new A.a(a8+l,q,p),new A.a(o+l,n,m),a6)}break
case"cellar":A.iO(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.t(b2,new A.a(a8+m,b0,q),new A.a(p+m,o+B.c.P(k,2)*0.18,n),a5)}A.t(b2,new A.a(a9+2.55,b0+0.15,b1+0.38),new A.a(a9+2.72,b0+1.55,b1+0.56),a4)
A.t(b2,new A.a(a9+2.42,b0+1.28,b1+0.32),new A.a(a9+2.86,b0+1.38,b1+0.65),a6)
A.t(b2,new A.a(a9+0.4,b0+1.72,b1+0.45),new A.a(a9+3.4,b0+1.82,b1+0.58),a4)
A.t(b2,new A.a(a9+1.9,b0+1.58,b1+0.42),new A.a(a9+2.06,b0+1.76,b1+0.61),a4)
A.t(b2,new A.a(a9+1.84,b0+1.62,b1+0.55),new A.a(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.lR(b2,b4,b5,"bedroom")
A.iO(b2,b4,"bedroom")
c=a9+0.85
b=b1+2.08
a8=b0+0.72
A.t(b2,new A.a(c,b0+0.42,b),new A.a(c+3.65,a8,b+2.05),6972528)
A.t(b2,new A.a(c-0.1,a8,b-0.12),new A.a(c+3.75,b0+1.28,b+0.1),a3)
A.t(b2,new A.a(c+0.22,b0+0.74,b+1.35),new A.a(c+1.05,b0+0.9,b+1.82),a6)
a8=a9+b5.a
q=b0+1.48
A.t(b2,new A.a(a8-0.95,b0+0.78,b1+0.58),new A.a(a8-0.18,q,b1+1.42),a3)
A.t(b2,new A.a(a8-1.04,q,b1+0.48),new A.a(a8-0.1,b0+1.57,b1+1.52),a5)
for(a8=[b+0.22,b+0.78],q=c+0.36,p=b0+0.75,o=c+1.12,n=b0+0.92,i=0;i<2;++i){a=a8[i]
A.t(b2,new A.a(q,p,a),new A.a(o,n,a+0.42),a6)}for(a8=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=b0+0.08,n=b0+0.44,i=0;i<2;++i){a0=a8[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.t(b2,new A.a(a0,o,g),new A.a(l,n,g+0.1),a5)}}break
case"landing":A.lR(b2,b4,b5,"landing")
a8=a9+0.48
A.t(b2,new A.a(a9+0.34,b0+0.02,b1+1.62),new A.a(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.t(b2,new A.a(a8,q+l,p+j),new A.a(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.t(b2,new A.a(a8+l,q,p+j),new A.a(o+l,n,m+j),a5)}break
case"bathroom":A.lR(b2,b4,b5,a7)
A.iO(b2,b4,a7)
a8=b0+0.62
A.t(b2,new A.a(a9+0.3,b0+0.04,b1+0.38),new A.a(a9+2.15,a8,b1+1.22),a6)
q=b0+0.72
A.t(b2,new A.a(a9+0.42,a8,b1+0.48),new A.a(a9+2.03,q,b1+1.12),a2)
a8=a9+b5.a
p=b1+b5.c
A.t(b2,new A.a(a8-0.78,b0+0.12,p-0.88),new A.a(a8-0.18,b0+1.75,p-0.28),a6)
A.t(b2,new A.a(a8-0.86,b0+1.68,p-0.98),new A.a(a8-0.1,b0+1.82,p-0.18),a4)
p=b1+0.68
a8=b0+1.18
o=b1+0.78
A.t(b2,new A.a(a9+0.86,q,p),new A.a(a9+0.96,a8,o),a4)
A.t(b2,new A.a(a9+0.7,b0+1.12,p),new A.a(a9+1.12,a8,o),a4)
break
case"spare-room":A.lR(b2,b4,b5,"spare")
A.t(b2,new A.a(a9+1,b0,b1+0.7),new A.a(a9+3.25,b0+1.65,b1+2),6972528)
A.t(b2,new A.a(a9+0.8,b0+1.6,b1+0.52),new A.a(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.t(b2,new A.a(a8-1.05,b0,q-1.02),new A.a(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.t(b2,new A.a(p,o+l,n),new A.a(a8,m+l,q),a4)}break}},
lR(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
switch(a0){case"living":g=e+0.58
A.t(a,new A.a(f+0.45,e,d+1.86),new A.a(f+1.18,g,d+2.66),7694457)
s=e+0.12
r=d+1.92
q=e+0.78
p=d+2.6
A.t(a,new A.a(f+0.34,s,r),new A.a(f+0.48,q,p),j)
A.t(a,new A.a(f+1.15,s,r),new A.a(f+1.29,q,p),j)
p=e+0.72
A.t(a,new A.a(f+0.52,g,d+1.8),new A.a(f+1.12,p,d+1.94),i)
A.t(a,new A.a(f+0.35,e,d+0.42),new A.a(f+1.95,p,d+0.7),i)
A.t(a,new A.a(f+0.28,p,d+0.34),new A.a(f+2.02,e+0.84,d+0.78),j)
for(g=[f+0.62,f+1.32],s=e+0.25,r=d+0.68,q=e+0.29,p=d+0.72,o=0;o<2;++o){n=g[o]
A.t(a,new A.a(n,s,r),new A.a(n+0.34,q,p),h)}break
case"bedroom":g=e+0.72
s=d+0.38
r=e+0.84
A.t(a,new A.a(f+0.35,g,s),new A.a(f+1.24,r,d+0.86),i)
for(q=f+0.42,p=[q,f+1.08],m=d+0.46,l=d+0.54,o=0;o<2;++o){k=p[o]
A.t(a,new A.a(k,e,m),new A.a(k+0.08,g,l),j)}A.t(a,new A.a(f+0.55,r,d+0.47),new A.a(f+1.05,e+0.96,d+0.78),h)
A.t(a,new A.a(q,e+0.82,d+0.32),new A.a(f+1.18,e+1.58,s),j)
break
case"landing":g=e+0.48
s=e+0.72
A.t(a,new A.a(f+0.64,g,d+0.32),new A.a(f+1.75,s,d+0.82),7694457)
A.t(a,new A.a(f+0.58,s,d+0.26),new A.a(f+1.81,e+0.82,d+0.88),j)
for(s=[f+0.72,f+1.62],r=d+0.4,q=d+0.48,o=0;o<2;++o){k=s[o]
A.t(a,new A.a(k,e,r),new A.a(k+0.08,g,q),i)}break
case"bathroom":g=e+0.48
A.t(a,new A.a(f+1.55,g,d+1.72),new A.a(f+2.12,e+0.6,d+2.16),h)
for(s=[f+1.62,f+2],r=d+1.78,q=d+1.85,o=0;o<2;++o){k=s[o]
A.t(a,new A.a(k,e,r),new A.a(k+0.07,g,q),j)}break
case"spare":g=e+0.74
s=e+0.86
A.t(a,new A.a(f+1.3,g,d+2.3),new A.a(f+2.42,s,d+2.72),j)
for(r=[f+1.4,f+2.3],q=d+2.36,p=d+2.44,o=0;o<2;++o){k=r[o]
A.t(a,new A.a(k,e,q),new A.a(k+0.08,g,p),i)}A.t(a,new A.a(f+1.62,s,d+2.39),new A.a(f+2.1,e+0.98,d+2.63),h)
break}},
iO(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.t(a2,new A.a(a+0.42,a0,a1+3.24),new A.a(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.t(a2,new A.a(b+m,s,r-l),new A.a(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.c.P(n,2)*0.1
A.t(a2,new A.a(k,s+j,r),new A.a(k+0.25,q+j,p),5913386)
A.t(a2,new A.a(k+0.045,o+j,p),new A.a(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.t(a2,new A.a(a+2.98,a0+1.1,a1+2.82),new A.a(a+3.05,a0+1.72,b),c)
s=a+2.72
A.t(a2,new A.a(s,a0+0.82,a1+2.84),new A.a(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.t(a2,new A.a(h,r,q),new A.a(h+0.06,p,b),c)}break
case"cellar":A.t(a2,new A.a(a+2.82,a0,a1+2.72),new A.a(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.c.P(n,2)*0.32
f=s+B.c.T(n,2)*0.32
A.t(a2,new A.a(g,r,f),new A.a(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.t(a2,new A.a(e,s,r),new A.a(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.t(a2,new A.a(a+0.34,b,a1+2.22),new A.a(a+1.24,a0+1.32,a1+2.28),c)
A.t(a2,new A.a(a+0.48,a0+0.82,a1+2.24),new A.a(a+1.1,b,a1+2.3),d)
break}},
D6(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
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
A.t(a,new A.a(r+0.03,n+0.1,m+0.03),new A.a(p-0.03,d,l-0.03),2367259)
q=m+0.08
o=l-0.08
A.t(a,new A.a(r+0.18,n+0.92,q),new A.a(p-0.18,n+0.98,o),a1)
j=r-0.055
A.t(a,new A.a(j-0.06,n+0.08,m-0.08),new A.a(j,n+1.86,l+0.08),6965557)
A.t(a,new A.a(j-0.075,n+0.18,q),new A.a(j-0.005,d,o),4861989)
for(q=[m+0.2,m+0.63],o=j-0.088,i=n+0.28,h=j-0.006,g=n+0.57,f=0;f<2;++f){e=q[f]
A.t(a,new A.a(o,i,e),new A.a(h,g,e+0.27),5847339)}A.t(a,new A.a(j-0.11,d,m-0.1),new A.a(j+0.01,n+1.84,l+0.1),6965557)
A.t(a,new A.a(j-0.12,n+0.9,m+0.52),new A.a(j-0.08,n+0.99,m+0.61),a2)},
D5(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
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
g=B.d.oG(k/0.18)
f=B.d.aF(1>g?1:g)
e=k/f
g=i-h
d=g/f
c=b1+0.1
for(b=0;b<f;){++b
a=i-b*d
A.t(b2,new A.a(p,c,a),new A.a(o,c+b*e,a+d),b6)}a0=b1+0.08
a1=b1+0.34
A.t(b2,new A.a(p-0.1,a0,h),new A.a(p,a1,i),b0)
A.t(b2,new A.a(o,a0,h),new A.a(o+0.1,a1,i),b0)
a2=o+0.16
a3=o+0.25
a4=b1+0.82
a5=l+0.78
a6=m-0.12
a5=a5<a6?a5:a6
A.t(b2,new A.a(a2,a0,i-0.12),new A.a(a3,a4+0.12,i+0.02),b0)
b1=a5-0.86
if(a0>b1)b1=a0
A.t(b2,new A.a(a2,b1,h-0.02),new A.a(a3,a5,h+0.12),b0)
for(b1=a5-a4,m=a2+0.01,a0=a3-0.01,b=0;b<=5;++b){a7=b/5
a8=i-a7*g
a9=a4+a7*b1
A.t(b2,new A.a(m,a9-0.7,a8-0.025),new A.a(a0,a9,a8+0.025),b7)}A.t(b2,new A.a(a2-0.05,a5-0.08,h-0.08),new A.a(a3+0.05,a5+0.08,h+0.08),b0)},
D7(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.e([],t.a9)
for(s=a2.a,r=a1.aD(s),q=J.S(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.aI(s)===a4)a.push(new A.dZ(p.ak(s),p.ak(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.dZ(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aI([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.J(0,A.e([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.X(l)
s=A.aI([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.J(0,A.e([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.N(a,new A.tl(f,e,d,c)))continue
A.EN(a0,a2,a3,a4,f,e,d,c)}A.D8(a0,a2,a3,a4,b,a)},
D8(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tj(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tj(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tj(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tj(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
A.b8(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.H(a9),o=r.i("n(1)").a(new A.tk(b3)),a9=B.a.gt(a9),r=new A.T(a9,o,r.i("T<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
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
A.D9(b0,b1,b2,b3,b,p)}},
D9(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
tj(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.EC(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.b8(a,b,c,d,n,o,g,h,i,j)}},
EC(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.e([new A.fH(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fH(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fH(n,j))}h=p}return h},
D1(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.ki.q(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.t(a,new A.a(p-0.025,n,o-0.025),new A.a(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.t(a,new A.a(p-0.14,k,o-0.14),new A.a(p+0.14,n,o+0.14),j)
A.t(a,new A.a(p-0.09,n-0.16,o-0.09),new A.a(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.t(a,new A.a(h-0.24,k,e-0.24),new A.a(h+0.24,s,e+0.24),l)
j=s-0.034
A.t(a,new A.a(h-0.15,j,e-0.15),new A.a(h+0.15,k,e+0.15),l)
A.t(a,new A.a(h-0.055,s-0.048,e-0.055),new A.a(h+0.055,j,e+0.055),l)},
b8(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.t(a,new A.a(r+e,q+g,p),new A.a(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.t(a,new A.a(r+e,q+g,s-i),new A.a(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.t(a,new A.a(s-i,q+g,p+e),new A.a(s,q+h,p+f),j)
return
case 3:A.t(a,new A.a(r,q+g,p+e),new A.a(r+i,q+h,p+f),j)
return}},
t(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.aw(j,l,g,h,d)
a.aw(s,r,q,p,d)
a.aw(l,s,p,g,d)
a.aw(r,j,h,q,d)
a.aw(l,j,r,s,d)
a.aw(g,p,q,h,d)},
EN(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.hq(n).e
a.cU(s.a8(0,o),r.a8(0,o),q.a8(0,o),p.a8(0,o),A.hq(n).c,(f-e)/m,(a1-a0)/m)
l=A.EO(b,d)
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
default:j=k}A.t(a,o,j,A.eV(A.hq(n).c,0.68))},
eV(a,b){var s,r=new A.un(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.d4()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.d4()
r=r.$1(a&255)
if(typeof r!=="number")return A.j_(r)
return(q<<16|s<<8|r)>>>0},
EO(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
yg(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aI(d),b=a3.ak(d),a=b+a3.w
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
A.t(a0,new A.a(r+l,s,d),new A.a(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.a(l,s,d),new A.a(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.t(a0,new A.a(r+n,s+m,d),new A.a(r+h,j,i),q)
A.t(a0,new A.a(k,s,d),new A.a(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.t(a0,new A.a(r+l,s,k),new A.a(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.a(l,s,k),new A.a(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.t(a0,new A.a(r+n,s+m,k),new A.a(r+h,i,d),q)
A.t(a0,new A.a(j,s,k),new A.a(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.t(a0,new A.a(n,s,d+k),new A.a(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.a(n,s,k),new A.a(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.t(a0,new A.a(n,s+e,d+m),new A.a(r,j,d+l),q)
A.t(a0,new A.a(n,s,i),new A.a(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.t(a0,new A.a(r,s,d+l),new A.a(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.t(a0,new A.a(r,s,l),new A.a(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.t(a0,new A.a(r,s+e,d+n),new A.a(k,j,d+m),q)
A.t(a0,new A.a(r,s,i),new A.a(k,s+0.05,l),q)
break}if(a4)A.yh(a0,a1,a2,a3,q)
A.D2(a0,a1,a2,a3)},
D2(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.ak(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aI(d)
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
yh(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aI(o),m=d.ak(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.t(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.t(a,new A.a(p,s,o-d.w),new A.a(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.t(a,new A.a(p-d.w,s,o),new A.a(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.t(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.t(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.t(a,new A.a(p,s,o-0.055),new A.a(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.t(a,new A.a(p-0.055,s,o),new A.a(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.t(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break}},
q5:function q5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tl:function tl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tk:function tk(a){this.a=a},
un:function un(a){this.a=a},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b){this.a=a
this.b=b},
x5(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.kl,b6=A.e([],b5),b7=t.aN,b8=A.e([],b7),b9=A.e([],t.jn),c0=t.N
c0=new A.og(b6,b8,b9,A.o(c0,t.U),A.o(c0,t.T),new A.oi())
s=t.E
r=t.s
q=t.cs
p=t.jc
B.a.J(b6,A.e([new A.aV(n,B.ar,new A.a(4.5,3.9,4),new A.a(0,0,0),A.e([new A.b6("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.b6("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bd(m,l,new A.a(1,1.95,1),!1,!1,m),new A.bd(k,j,new A.a(3,1.95,3),!1,!1,k)],q),B.aX,"wallpaper-stripes",i,h,B.M),new A.aV(g,B.ar,new A.a(2.5,3.9,7),new A.a(4.5,0,0),A.e([new A.b6("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bd("mantle-hall","the hall mantle",new A.a(1,1.95,3.5),!1,!1,o)],q),A.e([new A.bf(e,e,new A.a(0.2,2.175,0.35)),new A.bf(d,d,new A.a(2.2,2.55,3)),new A.bf(c,c,new A.a(0.4,1.35,4.1)),new A.bf(b,b,new A.a(0.92,0.82,5.55))],p),a,i,h,B.M),new A.aV(a0,B.ar,new A.a(4.5,3.75,3),new A.a(0,0,4),A.e([new A.b6("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.b6("kitchen-west",B.K,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bd(a1,"the mantle by the stove",new A.a(0.8,1.8,0.5),!1,!1,a1),new A.bd("mantle-kitchen-second",l,new A.a(2.2,1.8,2),!1,!1,o),new A.bd("mantle-kitchen-third",j,new A.a(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.bf(a2,a2,new A.a(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.iv),new A.aV("cellar",B.ar,new A.a(4,3,4),new A.a(1,-3,2),B.aZ,A.e(["hall-cellar"],r),B.ia,B.aX,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.aV("bedroom",B.as,new A.a(4.5,3.6,4),new A.a(0,4.2,0),A.e([new A.b6("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.b6("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bd(a3,"the bedroom mantle",new A.a(1,1.95,1),!1,!1,a3),new A.bd("mantle-bedroom-bedside","the bedside mantle",new A.a(3.5,1.5,3),!1,!1,o)],q),A.e([new A.bf(a4,a4,new A.a(2.2,1.125,2.5)),new A.bf(a5,a5,new A.a(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.aV(a6,B.as,new A.a(2.5,3.6,3),new A.a(4.5,4.2,0),B.aZ,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.bd("mantle-landing","the landing mantle",new A.a(1,1.8,1.5),!1,!1,o)],q),B.aX,a,i,h,B.M),new A.aV(a8,B.as,new A.a(2.5,3.6,2.5),new A.a(4.5,4.2,3),A.e([new A.b6("bathroom-east",B.x,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.bd("mantle-bathroom","the bathroom mantle",new A.a(1.5,1.8,1),!1,!1,o)],q),A.e([new A.bf(a9,a9,new A.a(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.aV(b0,B.as,new A.a(4.5,3.15,3),new A.a(0,4.2,4),A.e([new A.b6("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bd("mantle-spare","the broken mantle",new A.a(2,1.95,1),!1,!0,o)],q),A.e([new A.bf(b1,b1,new A.a(0.5,1.8,0.3)),new A.bf(b2,b2,new A.a(3.7,2.1,2.7)),new A.bf(b3,b3,new A.a(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.J(b8,A.e([A.dS(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.dS(g,n,b4,!1,B.K,B.x,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.dS(g,a0,b4,!1,B.K,B.x,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.dS(a0,n,b4,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.dS(g,"cellar","kit-cellar-door-grille",!1,B.m,B.x,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.dS(g,a6,o,!1,B.x,B.x,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.dS(a6,"bedroom",b4,!1,B.K,B.x,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.dS(a6,a8,b4,!1,B.m,B.l,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.dS(a6,b0,b4,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dp("hall-stairs",f,B.i0,new A.a(5,0,2.8),new A.a(6.5,6.3,6),new A.a(5.75,2.475,5.8),new A.a(5.75,6.675,2.2)))
c0.ku()
c0.kv()
c0.l8()
b5=b6.length
if(b5!==8)A.i(A.m("expected eight rooms, got "+b5))
b5=c0.goR()
if(b5!==9)A.i(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaK(b9).c.length!==3||B.a.gU(B.a.gaK(b9).c)!==9.45)A.i(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.i(A.m("expected nine physical portals"))
c0.m_()
c0.lY()
return c0},
og:function og(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ox:function ox(a){this.a=a},
oy:function oy(){},
oz:function oz(){},
ow:function ow(){},
oA:function oA(a){this.a=a},
oB:function oB(){},
wz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.a(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gu(0)
if(g<0.01||g>3)continue
f=h.gaa()
j=a.b
if(Math.acos(B.d.K(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
zv(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aD(c),r=J.S(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=null,p=3;s.m();){o=r.gn()
n=b.of(c,o)
m=a.a
l=new A.a(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.yD(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
zw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.EP(b,i,n)
l=a.a
k=new A.a(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gu(0)
if(!A.yD(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
yD(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.K(a.gaa().c_(c.b),-1,1))<=e},
EP(a,b,c){var s=a.aX(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.a(q.a+r,p,q.c)
break
case 2:q=new A.a(q.a+r,p,q.c+s.c)
break
case 1:q=new A.a(q.a+s.a,p,q.c+r)
break
case 3:q=new A.a(q.a,p,q.c+r)
break
default:q=null}return q},
nB:function nB(){this.a=null
this.b=0},
qP:function qP(){},
qQ:function qQ(){},
B8(a){var s=A.iV(a,"inventory asset"),r=A.dy(s,"id"),q=A.dy(s,"kind")
A.dy(s,"source")
A.dy(s,"proxy")
A.dy(s,"pivot")
s=A.iV(s.h(0,"bounds"),"inventory bounds")
return new A.cK(r,q,new A.oJ(A.m4(s.h(0,"min"),"bounds.min"),A.m4(s.h(0,"max"),"bounds.max")))},
B9(a){var s,r,q,p,o,n,m,l="stateKey",k=A.iV(a,"inventory placement"),j=A.iV(k.h(0,"visibility"),"placement visibility"),i=A.iV(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dy(k,"id"),f=A.dy(k,"roomId"),e=A.dy(k,"assetId")
A.dy(k,"role")
s=typeof k.h(0,"socket")=="string"?A.x(k.h(0,"socket")):null
k=A.iV(k.h(0,"transform"),"inventory transform")
r=A.m4(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.i(B.f5)
q=A.m4(k.h(0,"position"),"transform.position")
p=A.m4(k.h(0,"rotation"),"transform.rotation")
A.dy(j,"layer")
if(typeof j.h(0,l)=="string")A.x(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.x(i.h(0,"focusId")):null
m=t.P.b(h)?A.Ec(h,"radius"):0
return new A.cq(g,f,e,s,new A.oL(q,p,r),o,n,m)},
iV(a,b){return t.P.b(a)?a:A.dw(b+" is not an object")},
dy(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dw(b+" is not a string")},
Ec(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dw(b+" is not finite")},
m4(a,b){var s
if(t.j.b(a)){s=J.aA(a)
s=s.gu(a)!==3||s.N(a,new A.uu())}else s=!0
if(s)return A.dw(b+" is not a finite vec3")
s=J.aA(a)
return new A.a(A.aE(s.h(a,0)),A.aE(s.h(a,1)),A.aE(s.h(a,2)))},
dw(a){return A.i(A.a9(a,null,null))},
ol:function ol(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oo:function oo(a){this.a=a},
om:function om(a){this.a=a},
on:function on(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.b=b
this.f=c},
cq:function cq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
oJ:function oJ(a,b){this.a=a
this.b=b},
uu:function uu(){},
oK:function oK(a){this.a=a},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jO:function jO(a){this.a=a},
op:function op(a){this.a=a},
dS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bp(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hk:function hk(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
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
bp:function bp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aV:function aV(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
B2(a){return A.B1(a)},
B1(a){var s,r,q,p,o,n,m=A.yM(a,"sound emitter"),l=t.N,k=A.o(l,l)
for(s=A.yM(m.h(0,"cues"),"sound emitter cues").gH(),s=s.gt(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.f0)
k.k(0,r.a,q)}s=A.wn(m,"id")
r=A.wn(m,"roomId")
p=A.wn(m,"placementId")
o=A.EL(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.fS("gain is not a number")
return new A.cJ(s,r,p,o,n,A.b1(k,l,l))},
yM(a,b){return t.P.b(a)?a:A.fS(b+" is not an object")},
wn(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.fS(b+" is not a string")},
EL(a,b){var s
if(t.j.b(a)){s=J.aA(a)
s=s.gu(a)!==3||s.N(a,new A.ut())}else s=!0
if(s)throw A.d(A.a9(b+" must be a numeric vec3",null,null))
s=J.aA(a)
return new A.a(A.aE(s.h(a,0)),A.aE(s.h(a,1)),A.aE(s.h(a,2)))},
fS(a){return A.i(A.a9(a,null,null))},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(a){this.a=a},
ot:function ot(a){this.a=a},
ou:function ou(){},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oh:function oh(){this.b=this.a=null},
en:function en(a){this.a=a},
oq:function oq(){this.b=this.a=null},
cI:function cI(a,b){this.a=a
this.b=b},
ut:function ut(){},
x6(a,b,c,d,e,f){var s=t.N
return new A.ov(e,f,c,a,A.b1(A.aM(d,s,s),s,s),A.al(b,s))},
x7(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.o(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.hH(p.ax,p.ay))}s=A.o(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.o(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.hy(j.d,j.r))}return A.x6(a.r.b,B.o,i,B.cG,h,s)},
B3(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.iR
r=a3.h(0,"mantleHistory")
if(r==null)r=B.ik
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aL(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.eZ)
p=t.N
o=A.o(p,t.ku)
for(n=a.gH(),n=n.gt(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bX)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.c3(j)||!A.c3(i))A.i(B.bX)
o.k(0,k,new A.hH(j,i))}h=A.o(p,t.y)
for(n=a0.gH(),n=n.gt(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.c3(l.b))throw A.d(B.eW)
h.k(0,k,A.U(l.b))}g=A.o(p,t.mK)
for(n=a1.gH(),n=n.gt(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bV)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.c3(f)||!A.c3(e))A.i(B.bV)
g.k(0,k,new A.hy(f,e))}d=A.o(p,p)
for(q=s.gH(),q=q.gt(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.ft)
d.k(0,n,A.x(p.b))}c=A.e([],t.s)
for(q=J.S(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.ex)
B.a.l(c,b)}return A.x6(a2,c,g,d,o,h)},
wj(a,b){return a.a.a===b.a&&a.a2(0,b.gau(b))},
ov:function ov(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hH:function hH(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hq(a){var s=B.b1.h(0,a)
if(s==null)throw A.d(A.m("Unknown house surface material: "+a))
return s},
bc:function bc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AM(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hx(e,A.H(e).c)
q=new A.fC()
q.d8((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hf(a,q,2,r,1+s,A.aI(["time"],t.N))
break
case 3:A.hf(a,q,3,r,1+s,A.aI(["place"],t.N))
break
case 4:A.hf(a,q,4,r,2+s,p)
A.AI(a,q,4)
break
case 5:A.hf(a,q,5,r,s,p)
A.AG(a,q,5)
break
case 6:A.hf(a,q,6,r,s,p)
A.AH(a,q)
A.AL(a,q,6)
break
case 7:A.AJ(a,q,7)
break
default:if(s>0)A.hf(a,q,b,r,s,p)}},
AF(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.AK(a,b,c))return!1
return!0},
hf(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(A.AF(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d5(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.x_(a,b,o[p],f)}},
x_(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gU(o).a,n,n)
if(d==null)s=A.e(B.y.slice(0),t.s)
else{n=t.nn
s=A.J(new A.M(B.y,t.dC.a(new A.nw(d)),n),n.i("p.E"))}n=s.length
if(n===0)return
n=b.aJ(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.f0(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aJ(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.dN(c.a,m,B.a.gU(o).b)},
AI(a,b,c){var s=A.x0(a,b,c)
if(!a.bW(s))return
a.fc(c,t.G.a(s),0,B.aT,null)},
x0(a,b,c){var s,r,q,p,o,n=t.N,m=A.o(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.y[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aJ(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
AG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
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
j=s.f0(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aJ(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.dN(q.a,o,B.a.gU(i).b)
a.dN(p.a,n,B.a.gU(r).b)},
AH(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aJ(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.a7(0,q[r].a)},
AL(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aJ(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.x_(a,b,q[s],null)},
AJ(a,b,c){var s=c+1,r=A.x0(a,b,s)
if(!a.bW(r))return
a.fc(s,t.G.a(r),0,B.aT,null)},
AK(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gU(b.c).c===B.av}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gU(b.c).c===B.av}if(c===21)return b.e
return!1},
nw:function nw(a){this.a=a},
C3(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p=A.as(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rq(n)},
p_(a,b,c){var s,r,q,p=t.z
p=A.o(p,p)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.k0(A.b1(p,q,q),b,c)},
xi(a){var s=t.N
return A.p_(t.P.a(a.h(0,"fields")).bH(0,new A.p0(),s,s),A.aE(a.h(0,"shakiness")),A.AR(B.i4,A.x(a.h(0,"hand")),t.bU))},
AQ(a){var s,r,q,p,o=a.h(0,"margin"),n=A.c(a.h(0,"ordinal")),m=A.c(a.h(0,"day")),l=A.e([],t.b1)
for(s=J.S(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.xi(r.a(s.gn())))
s=A.aQ(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.yo(a.h(0,"lastReadDay"))
return new A.bS(n,m,l,s,q,p,o==null?null:A.xi(r.a(o)))},
dL:function dL(a,b){this.a=a
this.b=b},
rq:function rq(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
p0:function p0(){},
p1:function p1(a){this.a=a},
bS:function bS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xf(a){return new A.oN(a,A.o(t.S,t.g),A.a2(t.N),A.e([],t.t))},
Be(a,b){var s,r,q,p,o=A.xf(a)
o.e=A.c(b.h(0,"nextOrdinal"))
o.f=A.c(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.A3(s.a(b.h(0,"tags")),t.N))
for(s=J.S(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.AQ(r.a(s.gn()))
q.k(0,p.a,p)}return o},
oN:function oN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
oU:function oU(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c){this.c=a
this.a=b
this.b=c},
mS:function mS(){},
mT:function mT(){},
f4:function f4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mU:function mU(){},
oZ:function oZ(){},
oY:function oY(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
pB:function pB(){},
pA:function pA(a,b,c){this.b=a
this.c=b
this.d=c},
pC:function pC(){},
vE(a){if(!isFinite(0))A.i(A.an(0,"interpolation",null))
return new A.q1(a)},
hN:function hN(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
q1:function q1(a){this.a=a},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
xv(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hx(c,A.H(c).c)
r=A.J(r,A.q(r).c)
B.a.X(r)
s=t.N
r=A.al(r,s)
r=new A.q_(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b1(l,s,t.X))
r.ki(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
q0(a,b,c,d,e){var s=A.lU("RENDERER_SHA"),r=A.lU("GAME_SHA"),q=A.lU("DART_SDK_VERSION")
return A.xv(a,"9d7ccf86a355-b95463f82d41-dirty",b,c,d,r,A.lU("LOCKFILE_SHA256"),e,A.lU("PROJECT_VERSION"),s,q,null)},
lU(a){var s=B.iJ.h(0,a)
return s.length===0?null:s},
q_:function q_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
wY(a,b,c,d,e,f,g){var s=A.J(f,t.ad)
if(b<0||a<0||e<0)A.i(A.a9("saved day-loop resources must not be negative",null,null))
return new A.nm(c,g,b,a,e,d===!0,s)},
Az(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.eN)
s=A.e([],t.b2)
for(r=J.S(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.oC,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.f_)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aL(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.eJ)
f=A.cL(new A.M(B.cn,q.a(new A.nn(h)),p),o)
e=A.cL(new A.M(B.cu,n.a(new A.no(g)),m),l)
if(f==null||e==null)throw A.d(B.fo)
B.a.l(s,new A.fv(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aL(d)||!A.aL(c)||!A.aL(b)||!A.c3(a))throw A.d(B.f7)
return A.wY(c,d,a1,a,b,s,a3)},
bN:function bN(a,b){this.a=a
this.b=b},
bs:function bs(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
nm:function nm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nn:function nn(a){this.a=a},
no:function no(a){this.a=a},
jS:function jS(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
rv:function rv(a,b){this.b=a
this.c=b},
eG:function eG(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
oC:function oC(a){this.c=a},
oG:function oG(a,b){this.a=a
this.b=b},
oH:function oH(){},
xx(){var s=A.w7(B.o),r=A.w7(B.o),q=new A.q7(B.E,s,r)
if(!isFinite(0))A.i(B.ey)
if(!B.a.a2(r,B.a.gau(s)))A.i(B.f8)
if(q.a===B.E&&q.b!==0&&!q.e)A.i(B.eC)
return q},
w7(a){var s,r,q,p=A.e([],t.s),o=A.a2(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.fm)
B.a.l(p,q)}return p},
cd:function cd(a,b){this.a=a
this.b=b},
q6:function q6(){},
cR:function cR(){},
q7:function q7(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jE:function jE(a,b){this.a=a
this.b=6
this.c=b},
DI(a){var s,r=A.e([],t.hc)
for(s=1;s<=21;++s)r.push(new A.u6(a,s).$0())
return r},
zy(a){var s=B.d.K(a,0,1)
if(s<=0.5)return A.yJ(4491468,16777215,s*2)
return A.yJ(16777215,16759637,(s-0.5)*2)},
zz(a){var s=B.d.K(a,0,1)
return new A.a(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).gaa()},
yJ(a,b,c){var s,r=new A.ue(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.d4()
s=r.$1(8)
if(typeof s!=="number")return s.d4()
r=r.$1(0)
if(typeof r!=="number")return A.j_(r)
return(q<<16|s<<8|r)>>>0},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rr:function rr(a){this.b=a},
u6:function u6(a,b){this.a=a
this.b=b},
ue:function ue(a,b,c){this.a=a
this.b=b
this.c=c},
ph(a,b,c){var s,r=t.N,q=A.o(r,r)
if(a!=null)q.J(0,a)
s=A.o(r,r)
if(b!=null)s.J(0,b)
r=A.o(r,t.ie)
if(c!=null)r.J(0,c)
return new A.pg(q,s,r)},
Bl(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aL(s)||s!==1)return l
r=A.xo(a.h(0,"choices"))
q=A.xo(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.o(t.N,t.ie)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gH(),k=k.gt(k);k.m();){n=k.gn()
m=A.AW(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.ph(r,q,p)},
xo(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.o(s,s)
for(s=a.gH(),s=s.gt(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.x(q.b))}return r},
AW(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aL(r)||r<1||!A.aL(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cC(s,r,q,p)},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(){},
pj:function pj(){},
pk:function pk(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx(a){var s,r,q=A.o(t.N,t.z)
for(s=a.gH(),s=s.gt(s);s.m();){r=s.gn()
q.k(0,B.c.p(r.a),r.b)}return q},
qU:function qU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
qV:function qV(){},
qW:function qW(){},
eE:function eE(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b){this.a=a
this.b=b},
kV:function kV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qX:function qX(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
qY:function qY(){},
qZ:function qZ(){},
ma:function ma(){},
Ab(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.eA)
s=new A.md()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.vY(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dz(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aZ(B.b0,new A.mb(a),new A.mc()))},
cA:function cA(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
md:function md(){},
mb:function mb(a){this.a=a},
mc:function mc(){},
mo:function mo(a,b){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0},
mq:function mq(a){this.a=a},
mp:function mp(a,b){this.a=a
this.b=b},
Ah(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.f4)
s=new A.mB()
return new A.dA(s.$1$2(B.b_,a.h(0,"output"),t.cK),s.$1$2(B.aW,a.h(0,"dynamicRange"),t.cS),s.$1$2(B.aV,a.h(0,"reverb"),t.f1),s.$1$2(B.aU,a.h(0,"ducking"),t.oA))},
cn:function cn(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mB:function mB(){},
mC:function mC(a,b){this.a=a
this.b=b},
mD:function mD(a){this.a=a},
mW:function mW(a){this.a=a
this.b=null},
n_(a,b,c){var s
b.C()
if(c<1||c>6)throw A.d(A.an(c,"level","must be between 1 and 6"))
s=A.D(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.mY(s,b)
return s},
dE(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.D(a,"button","brush-button brush-state-"+s.b,r)
A.mY(q,b)
q.type="button"
q.disabled=s===B.am
q.addEventListener("click",A.a0(new A.mZ(c)))
return q},
An(a,b,c,d){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.am
A.mY(s,b)
s.addEventListener("change",A.a0(new A.n2(d,s)))
return s},
Am(a,b,c,d,e,f){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.w(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.am
A.mY(s,b)
s.addEventListener("input",A.a0(new A.n1(s,e)))
return s},
vo(a,b){var s=B.b.jV(A.x(a.className),A.xu("\\s+")),r=A.H(s),q=r.i("M<1>"),p=A.J(new A.M(s,r.i("n(1)").a(new A.n0()),q),q.i("p.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a6(p," ")
a.setAttribute("data-brush-state",s)},
mY(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gm3())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.am)a.setAttribute("aria-disabled","true")},
mZ:function mZ(a){this.a=a},
n2:function n2(a,b){this.a=a
this.b=b},
n1:function n1(a,b){this.a=a
this.b=b},
n0:function n0(){},
dC:function dC(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wW(a){var s=!1
if(a.length!==0)if(!B.d0.q(0,a))s=B.kq.q(0,a)||B.kh.q(0,a)||B.kp.q(0,a)||!B.b.W(a,"Mouse")
return s},
Dr(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=A.as(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
E4(a){var s,r,q=A.o(t.N,t.a),p=a==null?null:new A.I(a,A.q(a).i("I<1,2>"))
p=J.S(p==null?A.e([],t.cj):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
fc(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fk(B.iG,s,r)
if(b!=null)q.J(0,b)
q.J(0,A.E4(a))
s=new A.fb(g,d,h,e,f,c,A.b1(A.Dr(q),s,r))
s.C()
return s},
Ax(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.bW)
s=a.h(0,"version")
r=J.e7(s)
if(!r.a_(s,1)&&!r.a_(s,2))throw A.d(B.bW)
q=A.o(t.N,t.a)
for(j=j.a(a.h(0,k)).gH(),j=j.gt(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.eV)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.A4(m,new A.ne())){o=A.e([],r)
for(l=J.S(m);l.m();)o.push(A.x(l.gn()))
q.k(0,n,o)}else throw A.d(B.eE)}j=A.aE(a.h(0,"horizontalSensitivity"))
r=A.aE(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.fc(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
w_(a){var s,r,q,p=t.N,o=A.o(p,t.a)
for(s=a.gH(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
wg(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
wr(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fb:function fb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ng:function ng(){},
nf:function nf(a){this.a=a},
nh:function nh(){},
ni:function ni(){},
nj:function nj(){},
ne:function ne(){},
dB:function dB(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.c=b},
jk:function jk(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Aw(a){var s=t.N,r=t.m
r=new A.hd(A.fc(null,null,!1,1,!1,!1,2,1),A.o(s,r),A.o(s,r),A.o(s,r),a,A.b(a.createElement("div")))
r.aS(a)
r.ka(a)
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
nc:function nc(a,b){this.a=a
this.b=b},
nd:function nd(a){this.a=a},
nb:function nb(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
na:function na(a,b){this.a=a
this.b=b},
AD(a){var s=t.W,r=A.e([],s)
s=A.e([],s)
s=new A.nq(A.D(a,"div","door",null),a,r,s)
s.kc(a)
return s},
nq:function nq(a,b,c,d){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=$
_.w=c
_.x=d
_.at=_.as=_.Q=_.z=_.y=null
_.ax=!1},
nr:function nr(a,b){this.a=a
this.b=b},
ns:function ns(a){this.a=a},
nt:function nt(a,b){this.a=a
this.b=b},
nv:function nv(a,b){this.a=a
this.b=b},
nu:function nu(a,b){this.a=a
this.b=b},
AN(a){var s=new A.ny(a,A.b(a.createElement("div")))
s.aS(a)
s.kd(a)
return s},
ny:function ny(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nz:function nz(a){this.a=a},
x3(a,b,c,d,e,f,g,h){return new A.o_(d,f,h,e,a,g,c,b)},
dd:function dd(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
o_:function o_(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
x4(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.f3)
s=new A.dK(1,B.a.aZ(B.cp,new A.ob(a),new A.oc()),A.x(a.h(0,"renderScale")),A.U(a.h(0,"dynamicResolution")),A.x(a.h(0,"frameTarget")),A.x(a.h(0,"antialiasing")),A.x(a.h(0,"textureQuality")))
s.C()
return s},
jL(a,b){var s=b==null?B.aS:b
return new A.od(s,a==null?B.aS:a)},
zq(a,b){var s,r,q
a.C()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dL(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dL("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.ho(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cd&&b.a<2){q=q.hp(B.aR)
B.a.l(s,"High preset was reduced to Standard")}return new A.o6(q,A.al(s,t.N))},
co:function co(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ob:function ob(a){this.a=a},
oc:function oc(){},
od:function od(a,b){this.a=a
this.b=b},
o5:function o5(a,b){this.a=a
this.b=b},
o6:function o6(a,b){this.a=a
this.b=b},
B_(a){var s=new A.ho(A.o(t.N,t.m),B.aS,a,A.b(a.createElement("div")))
s.aS(a)
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
o9:function o9(a){this.a=a},
oa:function oa(a){this.a=a},
o8:function o8(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(a){this.a=a},
B0(a){var s=new A.oe(a,A.b(a.createElement("div")))
s.aS(a)
s.kf(a)
return s},
oe:function oe(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
of:function of(a){this.a=a},
oO:function oO(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
oP:function oP(a){this.a=a},
oQ:function oQ(a){this.a=a},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(){},
oT:function oT(){},
D(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
yw(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.W)
for(s=t.m,r=0;r<A.c(p.length);++r){q=A.k(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hG:function hG(){},
be:function be(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(){},
pw:function pw(){},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
pu:function pu(a){this.a=a},
px:function px(a){this.a=a},
cO:function cO(a,b){this.a=a
this.b=b},
py:function py(a,b){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pz:function pz(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
pJ:function pJ(a){this.a=a
this.b=null},
BK(a){var s=new A.qf(a,A.b(a.createElement("div")))
s.aS(a)
s.kk(a)
return s},
qf:function qf(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qg:function qg(a,b){this.a=a
this.b=b},
qh:function qh(a){this.a=a},
qi(a,b){var s=t.N,r=t.m
r=new A.fu(b,A.o(s,r),A.o(s,r),A.o(s,t.aL),A.o(s,r),$.zE(),B.aj,A.o(s,r),A.o(s,r),B.aI,A.o(s,r),a,A.b(a.createElement("div")))
r.aS(a)
r.kl(a,b)
return r},
fu:function fu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k1=f
_.k2=g
_.k3=h
_.k4=i
_.ok=j
_.p1=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
qE:function qE(a){this.a=a},
qF:function qF(a){this.a=a},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qy:function qy(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
qx:function qx(a){this.a=a},
qA:function qA(a){this.a=a},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a,b){this.a=a
this.b=b},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a){this.a=a},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
qs:function qs(a){this.a=a},
qt:function qt(a){this.a=a},
qu:function qu(a){this.a=a},
qv:function qv(a){this.a=a},
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a){this.a=a},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qK(a){return B.a.aZ(B.D,new A.qL(a),new A.qM(a))},
BL(){var s,r,q=A.o(t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
q.k(0,r.a,r.e)}return q},
dn(a,b){var s=t.z
s=A.fk(A.BL(),s,s)
if(a!=null)s.J(0,a)
s=new A.qJ(b,A.b1(s,t.N,t.K))
s.km(a,b)
return s},
xA(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fk)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.eM)
return A.dn(A.aM(s,t.N,t.K),A.c(a.h(0,"version")))},
br:function br(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
qJ:function qJ(a,b){this.a=a
this.b=b},
vH(a,b){var s=b==null?A.dn(null,1):b
return new A.qN(s,a==null?A.dn(null,1):a)},
BM(a,b){var s,r,q,p,o,n,m,l=A.o(t.N,t.K)
for(q=0;q<10;++q){s=B.D[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fp(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cW(r)
J.bI(l,s.a,r)}catch(n){if(!(A.ag(n) instanceof A.G))throw n}}m=A.dn(l,1)
return A.vH(m,m)},
qN:function qN(a,b){this.a=a
this.b=b},
BN(a){var s=new A.qR(a,A.b(a.createElement("div")))
s.aS(a)
s.kn(a)
return s},
qR:function qR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
Ae(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.od)
for(s=a.d,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gH(),n=n.gt(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cl(p+m+":"+k,m,l.a,l.b,j))}}B.a.S(i,new A.mm())
return new A.ml(A.al(i,t.ot),A.a2(t.N))},
cl:function cl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ml:function ml(a,b){this.a=a
this.b=b},
mn:function mn(){},
mm:function mm(){},
C2(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.lH
s=t.L
r=A.o(s,t.kz)
q=A.q(a).i("ae<1>")
p=A.J(new A.ae(a,q),q.i("p.E"))
B.a.X(p)
for(q=p.length,o=t.ln,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gH(),j=j.gt(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b5(new A.bj(B.lp,k+" has an out-of-range authored day "+h+"."))
g=A.C1(k,h,i.b,m)
if(g instanceof A.b5)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bO(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.lH
e=A.o(a,q)
for(o=a0.ax,o=new A.ah(o,o.r,o.e,A.q(o).i("ah<2>"));o.m();){n=o.d
J.h5(e.cb(n.b,new A.rk()),n)}o=A.b1(a0.at,a,t.fx)
q=A.o(a,q)
for(n=new A.I(e,e.$ti.i("I<1,2>")).gt(0),m=t.iC;n.m();){d=n.d
j=d.a
c=A.as(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.kT(new A.kS(r,A.a2(a),A.a2(s),o,q,A.e([],t.bl),B.O,A.ph(b,b,b)))},
C1(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.o(t.kM,t.j9)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.d7,p=0;p<3;++p){o=B.cl[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gH(),k=k.gt(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.W(h,m))continue
g=A.fq(B.b.be(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b5(new A.bj(B.lq,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.ct
B.a.l(l,new A.c_(g,i.b,f))}if(l.length===0)continue
B.a.S(l,new A.rh())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b5(new A.bj(B.dj,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b5(new A.bj(B.dj,a+" day "+s+" has no authored tiers."))
return new A.lo(c)},
kS:function kS(a,b,c,d,e,f,g,h){var _=this
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
rn:function rn(a){this.a=a},
rm:function rm(a){this.a=a},
ro:function ro(a){this.a=a},
ri:function ri(a){this.a=a},
rj:function rj(){},
rl:function rl(a){this.a=a},
rk:function rk(){},
rg:function rg(a){this.a=a},
rf:function rf(a){this.a=a},
rh:function rh(){},
kT:function kT(a){this.a=a},
lo:function lo(a){this.a=a},
F8(a){var s,r,q,p=A.a2(t.N)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gaA(),q=q.gt(q);q.m();)if(q.gn().gZ().N(0,new A.uD())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.X(s)
return s},
F7(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.as(b,!0,s)
B.a.X(r)
q=new A.fC()
q.d8((a^913741)>>>0)
p=q.aJ(4)
if(!(p>=0&&p<4))return A.f(B.ci,p)
o=B.ci[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.as(r,!0,s)
B.a.d5(m,q)
s=A.hZ(m,0,A.e6(n,"count",t.S),A.H(m).c).bN(0)
B.a.X(s)
return s},
uD:function uD(){},
xM(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aL(r)||!A.aL(q)||!A.aL(p)||r<1||q<0||q>23||p<0)return null
return new A.bO(s,r,q,p)},
C0(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a2(t.N)
for(s=t.j,q=J.S(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a2(t.L)
for(s=J.S(s.a(a.h(0,j)));s.m();){n=A.xM(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Ad(m)
if(!s&&l==null)return i
return new A.kU(r,o,l)},
Ad(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.xM(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aL(p))if(!(p<0))if(A.c3(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.cL(new A.M(B.cl,t.nw.a(new A.mi(r)),t.na),t.kM)
j=A.cL(new A.M(B.iD,t.bQ.a(new A.mj(q)),t.cB),t.nq)
l=o==null
i=l?g:A.cL(new A.M(B.hI,t.hg.a(new A.mk(o)),t.bn),t.lD)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.j3(s,k,j,p,i,n,A.aQ(m))},
bK:function bK(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
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
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(){},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mi:function mi(a){this.a=a},
mj:function mj(a){this.a=a},
mk:function mk(a){this.a=a},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rp:function rp(){},
b5:function b5(a){this.a=a},
kQ:function kQ(a){this.a=a},
kO:function kO(a){this.a=a},
i3:function i3(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
Eh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.j0())return f
n=A.cW().gaE()
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
if(s!=null)try{q=B.k.aH(s,f)
if(t.f.b(q)){m=t.N
p=A.o(m,m)
for(m=q.gH(),m=m.gt(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.kj.q(0,o.b))return f
J.bI(p,A.x(o.a),A.x(o.b))}r=p}else return f}catch(g){if(A.ag(g) instanceof A.G)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.ko.q(0,i))return f
if(h!=null&&!B.km.q(0,h))return f
return new A.rC(l,k,j,h,r)},
Ei(){var s,r,q,p=A.cW().gaE().h(0,"cameraProfile")
A:{if("wide"===p){s=B.e6
break A}if("intimate"===p){s=B.e8
break A}s=B.e7
break A}r=A.cW().gaE().h(0,"cameraFov")
q=A.fp(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.f7(B.d.K(q,35,100)*3.141592653589793/180,s.b,s.c)},
iW(a){var s=$.b7
if(s===a&&B.b.q(A.x(a.b.className),"open"))return
if(s!=null)s.a5()
$.b7=a
if(a===$.cj.j())$.h3().j1("gameplay.viewport")
else $.h3().oa(A.yP(a))
s=$.ad.j()
s.ay=!1
s.b5()
$.e2=0
a.bI()},
yN(a,b,c){var s,r,q
$.iX=!0
s=$.b7
if(s!=null)s.a5()
$.b7=a
s=$.h3()
if(s.a.a.length===0)s.j1(c)
r=A.J(s.a.a,t.lf)
r.push(new A.dk(b,B.a8,c))
q=s.a
s.a=new A.dQ(r,q.b,q.c)
s.kS(b)
s=$.ad.j()
s.ay=!1
s.b5()
$.e2=0
a.bI()
$.iX=!1},
eU(a){var s,r,q,p,o,n,m,l=null
if($.iX)return
$.iX=!0
a.a5()
$.b7=null
s=$.h3().md()
$.iX=!1
r=s.a
if(r===B.cT){$.e2=0
r=$.ad.j()
r.b5()
r.ay=!0
q=A.k(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.cS)return
r=s.c.a
r=r.length===0?l:B.a.gU(r)
p=r==null?l:r.a
A:{if(B.b4===p){r=$.cj.j()
break A}if(B.b5===p){r=$.fQ.j()
break A}r=l
break A}if(r!=null){o=s.d
$.b7=r
n=$.ad.j()
n.ay=!1
n.b5()
$.e2=0
r.bI()
m=o==null?l:A.k(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
iZ(a){if($.b7===a&&B.b.q(A.x(a.b.className),"open"))a.a5()
else A.iW(a)},
eT(a){var s
if($.iX)return
if($.b7===a)$.b7=null
if(a===$.cj.j())$.h3().cd()
else $.h3().n4(A.yP(a))
$.e2=0
s=$.ad.j()
s.b5()
s.ay=!0},
yP(a){if(a===$.cj.j())return B.cK
if(a===$.fQ.j())return B.a8
if(a instanceof A.fu)return B.a8
if(a instanceof A.ho)return B.a8
if(a instanceof A.hd)return B.a8
if(a===$.fP.j())return B.jy
if(a===$.lQ.j())return B.jz
if(a===$.iL.j())return B.jA
if(a===$.iK.j())return B.jC
return B.jB},
tw(a,b){var s
a.snZ(new A.tx())
a.so0(new A.ty())
a.so_(new A.tz())
a.snW(new A.tE())
a.snY(new A.tF())
a.so9(new A.tG())
a.so4(new A.tH())
a.so3(new A.tI())
a.sb_(b?new A.tJ(a):new A.tK(a))
a.sb0(b?new A.tL(a):new A.tA(a))
s=a.f
if(s===B.z)a.snP(new A.tB())
if(s===B.A){a.snO(new A.tC())
a.so2(new A.tD())}},
Do(){var s=$.fO.j()
s.sey(new A.tt())
s.sb_(new A.tu())
s.sb0(new A.tv())},
E8(){var s,r,q,p,o,n=null
try{n=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aH(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.i(B.fd)
q=A.x4(r.h(0,"requested"))
$.u7=A.jL(A.x4(r.h(0,"effective")),q)}catch(s){$.u7=A.jL(null,null)}p=$.wL().a
o=A.zq(p,A.yA())
r=o.a
$.u7=A.jL(r,p)
$.fO.j().eX(p,r,o.b)
A.yS()},
yA(){var s,r,q,p,o=$.d1.j().gbk().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.W(p,"max-samples-"))continue
r=A.fq(B.b.be(p,12),null)
if(r==null)r=1}return new A.o5(r,B.a.q(o,"disjoint-timer-query"))},
yS(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.ao($.wL().B(),null))}catch(s){}},
Dn(){var s=$.iJ.j()
s.sey(new A.tq())
s.sb_(new A.tr())
s.sb0(new A.ts())},
E7(){var s,r,q,p,o,n=null
try{n=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.w4=A.Ax(B.k.aH(n,null))}catch(s){$.w4=A.fc(null,null,!1,1,!1,!1,2,1)}r=$.iJ.j()
q=r.w=$.m7()
r.x=new A.jk(q)
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
$.ad.j().eV($.m7().gcD())
r=$.ad.j()
q=$.m7()
p=r.ch
p.a=q.f
p.eG()
r.b5()
A.yR()},
yR(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.ao($.m7().B(),null))}catch(s){}},
E6(){var s,r=null
try{r=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.iP=A.Ah(B.k.aH(r,null))}catch(s){$.iP=B.aI}$.fM.j().ju($.iP)
A.yQ()
A.vX()},
yQ(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.ao($.iP.B(),null))}catch(s){}},
vX(){var s=$.bC
if(s==null)return
s.jE($.iP)},
E5(){var s,r=null
try{r=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eR=A.Ab(B.k.aH(r,null))}catch(s){$.eR=B.aj}$.eQ.j().eU($.eR)
A.wd()
A.tm()},
wd(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.ao($.eR.B(),null))}catch(s){}},
tm(){var s,r,q=$.eR,p=$.uq,o=$.wp,n=q.d
if(n==null)n=1
if(n<0.8||n>2)A.i(B.eK)
s=q.b
p=s==null?p:s
s=q.c
o=s==null?o:s
q=q.e===!0
$.m1=p
s=$.bP.j()
s.r=$.m1?0.5:1
r=A.k(A.b(v.G.document).documentElement)
s=r==null
if(!s)A.U(A.b(r.classList).toggle("reduced-motion",p))
if(!s)A.U(A.b(r.classList).toggle("photosensitivity-safe",o))
if(!s)A.U(A.b(r.classList).toggle("captions-enabled",q))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.w(n*100)+"%")
s=$.B.j()
s.setAttribute("data-accessibility-reduced-motion",""+p)
s.setAttribute("data-accessibility-photosensitivity-safe",""+o)
s.setAttribute("data-accessibility-ui-scale",A.w(n))
s.setAttribute("data-accessibility-captions",""+q)
if($.yi){p=$.bx.j()
p.c=q
if(!q){q=p.b
q.textContent=""
q.className="caption-cue"}}},
DL(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.ub(r,q)
r.addEventListener("change",A.a0(new A.u9(s)))
q.addEventListener("change",A.a0(new A.ua(s)))},
uK(){var s=0,r=A.bD(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$uK=A.bG(function(e2,e3){if(e2===1){o.push(e3)
s=p}for(;;)switch(s){case 0:d8=v.G
d9=A.k(A.b(d8.document).getElementById("game"))
if(d9==null){s=1
break}$.B.b=d9
$.w6=A.k(A.b(d8.document).getElementById("fps"))
$.c2.b=$.zU().cg(A.cW().gaE().h(0,"renderer"))
A.DM()
b9=$.B.j()
c0=A.c(A.b(d8.window).innerWidth)>0?A.c(A.b(d8.window).innerWidth):800
b9.width=c0
c0=$.B.j()
b9=A.c(A.b(d8.window).innerHeight)>0?A.c(A.b(d8.window).innerHeight):600
c0.height=b9
n=A.k(d9.getContext("webgl2"))
if(n==null){$.c2.b=B.bH.hs($.c2.j(),B.dz)
g=B.aL.n_($.c2.j())
g.ba()
$.d1.b=g
A.yU()
A.e3("no-webgl2")
d8=A.k(A.b(d8.document).getElementById("credits"))
if(d8!=null)d8.textContent="this browser has no webgl2."
s=1
break}try{if($.c2.j().a===B.X){b9=t.dg
c0=t.N
c1=t.hL
c2=t.ob
c3=t.fP
c4=new A.is(n,A.c($.B.j().width),A.c($.B.j().height),A.e([],b9),A.o(c0,t.e4),A.e([],t.jj),A.o(c0,c1),A.o(c0,c2),A.o(c0,t.aD),A.o(c0,t.a2),A.o(c0,c1),A.o(c0,c2),A.e([],b9),A.o(c0,c1),A.o(c0,c2),A.o(c0,c0),A.o(t.S,c3),A.o(c0,t.bS),A.e([],t.jU),B.i8,A.o(c0,t.lu),A.o(c0,c0),A.o(c0,c3),A.o(c0,t.ms),A.o(c0,c3),B.fu,B.jF)}else c4=new A.fA(n,A.c($.B.j().width),A.c($.B.j().height),A.cW().gaE().h(0,"render")==="legacy",$.c2.j().d,$.c2.j().e)
m=c4
$.bE=m instanceof A.is?m:null
$.lW=m instanceof A.fA?m:null
b9=B.aL.dO($.c2.j(),m)
b9.ba()
$.d1.b=b9}catch(e1){l=A.ag(e1)
k=A.cz(e1)
b9=$.c2.j()
$.c2.b=B.bH.hs(b9,B.dy)
$.lW=new A.fA(n,A.c($.B.j().width),A.c($.B.j().height),A.cW().gaE().h(0,"render")==="legacy",!0,$.c2.j().e)
b9=B.aL.dO($.c2.j(),$.lW)
b9.ba()
$.d1.b=b9
$.B.j().setAttribute("data-renderer-error",A.w(l))
if($.j0())$.B.j().setAttribute("data-renderer-error-stack",A.w(k))}A.yU()
p=4
A.e3("initializing")
$.bP.b=new A.n3(new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),$.wK())
$.uq=A.U(A.b(A.b(d8.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.wp=A.U(A.b(A.b(d8.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.m1=$.uq
b9=$.bP.j()
b9.r=$.m1?0.5:1
b9=A.b(d8.window)
c0=t.N
c1=t.s
c2=t.a
c1=A.B4(A.O(["moveForward",A.e(["KeyW"],c1),"moveBack",A.e(["KeyS"],c1),"moveLeft",A.e(["KeyA"],c1),"moveRight",A.e(["KeyD"],c1),"interact",A.e(["KeyE"],c1),"secondary",A.e(["KeyQ"],c1),"run",A.e(["ShiftLeft"],c1),"crouch",A.e(["ControlLeft"],c1),"rotate",A.e(["KeyR"],c1),"reach",A.e(["KeyF"],c1),"journal",A.e(["KeyJ"],c1),"sleep",A.e(["KeyL"],c1),"pause",A.e(["Escape"],c1)],c0,c2))
c3=A.b(b9.document)
c1=new A.jR(b9,c3,A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),new A.a(0,0,0),new A.oI(),c1)
b9.addEventListener("keydown",A.a0(c1.glo()))
b9.addEventListener("keyup",A.a0(c1.glq()))
b9.addEventListener("mousemove",A.a0(c1.glu()))
c3.addEventListener("pointerlockchange",A.a0(c1.gls()))
$.ad.b=c1
$.ye.b=new A.jP(A.e([],t.oX),t.lv)
c1=$.B.j()
b9=A.c(A.b(d8.window).innerWidth)>0?A.c(A.b(d8.window).innerWidth):800
c1.width=b9
b9=$.B.j()
c1=A.c(A.b(d8.window).innerHeight)>0?A.c(A.b(d8.window).innerHeight):600
b9.height=c1
A.e3("renderer")
if($.c2.j().a===B.b9){b9=$.lW
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.fX=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.e3("text")
b9=$.h4()
s=7
return A.am(b9.c9(),$async$uK)
case 7:j=b9.oQ()
i=A.C2(j)
if(!(i instanceof A.kT)){h=t.cq.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aK.b=i.a
$.lO.b=A.Ae(j)
g=A.o(c0,c2)
for(c1=t.j,c6=0;c6<5;++c6){f=B.y[c6]
c2=A.x(f)
c3=b9.c
c3===$&&A.h()
c7=c3.h(0,c2)
c2=c1.b(c7)?A.as(c7,!0,c0):B.o
J.bI(g,f,c2)}e=A.C3(g)
$.vW.b=new A.mX(B.e5)
d=$.vW.j().oh(new A.uL(e))
c8=$.vi()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.bM.aJ(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.d.aO(c2.c)
if(c2==null)c2=10
if(b9<1)A.i(A.an(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.i(A.an(c2,"startHour","must be 0 through 23"))
if(!isFinite(480))A.i(A.an(480,"daySeconds","must be finite and > 0"))
c9=new A.jE(b9,480)
c9.b=c2
d0=A.xf(e)
g=A.x1(42,g,A.x5(42),c9,d0,A.wY(6,16,d0,null,6,B.i9,c9),new A.js(0,0,0,!1),A.ph(null,null,null))}else{g=d.a
g.toString
g=A.x2(g,e)}$.V.b=g
$.aK.j().y=$.V.j().z
g=A.al(A.DI($.V.j().b),t.av)
$.ti.b=new A.rr(g)
g=$.vj()
b9=d.a
g.eI(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.d1.j().b4(A.vE($.V.j().geB()))
if(d.b!=null){g=d.b
g.toString
A.fY(g)}g=$.aK.j()
b9=A.F7($.V.j().b,A.F8(j.b))
g.sjW(A.hx(b9,A.H(b9).c))
A.e3("house")
$.X.b=$.V.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.r)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a3(b,"open")||J.a3(b,"closed")){a3=J.a3(b,"open")
for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.r)(c2),++d1){a5=c2[d1]
a5.sjN(a3)}}}a6=$.wI()
if(a6!=null&&a6.length!==0)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.wJ()}}g=$.bE
if(g!=null)g.mc($.X.j())
$.bm.b=$.V.j().d
$.X.j()
g=new A.a(12.9375,1.65,0.825)
$.wq=$.wf=$.wk=g
a9=g.an(0,new A.a(0,1.3499999999999999,0))
$.iM.b=new A.je(a9,J.wM(a9,new A.a(0,1.2000000000000002,0)))
$.fN.b=new A.nB()
$.bQ.b=A.xx()
$.aw="hall"
g=d.a
b0=A.Bq(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.ny($.X.j())){g=b0.b
$.wq=$.wf=$.wk=g
$.c4=b0.c
$.e4=b0.d
$.aw=b0.a
b1=g.an(0,new A.a(0,1.3499999999999999,0))
g=$.iM.j()
g.sme(b1)
g.b=J.wM(b1,new A.a(0,1.2000000000000002,0))
g=$.iM.j()
b9=$.X.j()
c2=b0.e
c3=b0.f
g.oE($.aw,$.eY(),b9,c3,c2)
A.fY("restored position")}g=A.BK(A.b(d8.document))
g.snQ(new A.uM())
g.sb_(new A.uN())
g.sb0(new A.uY())
$.fQ.b=g
g=A.b(d8.document)
b9=A.b(g.createElement("div"))
c2=new A.py(g,b9)
c2.aS(g)
b9.className=A.x(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.b(b9.appendChild(A.n_(g,B.dN,1)))
A.b(b9.appendChild(A.D(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.D(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bv(g,d2,B.cL,"resume")
c2.bv(g,d2,B.cM,"settings")
c2.bv(g,d2,B.cN,"controls")
c2.bv(g,d2,B.cO,"save now")
c2.bv(g,d2,B.cP,"help")
c2.bv(g,d2,B.cQ,"back")
A.b(b9.appendChild(d2))
c2.so5(new A.v0())
c2.sb_(new A.v1())
c2.so7(new A.v2())
c2.snU(new A.v3())
c2.so6(new A.v4())
c2.snX(new A.v5())
c2.sb0(new A.v6())
$.cj.b=c2
c2=$.V.j().e
b9=$.bm.j()
$.V.j()
$.lP.b=new A.oG(c2,b9)
b9=A.b(d8.document)
c2=$.V.j().e
g=$.bm.j()
c3=$.lP.j()
d3=A.b(b9.createElement("div"))
c3=new A.oO(c2,g,c3,b9,d3)
c3.aS(b9)
d3.setAttribute("aria-label","The Journal")
A.b(d3.appendChild(A.D(b9,"div","journal-title","The Journal")))
d4=A.D(b9,"div","journal-pages",null)
g=A.D(b9,"div","page page-left",null)
c3.y!==$&&A.K()
c3.y=g
c2=A.D(b9,"div","page page-right",null)
c3.z!==$&&A.K()
c3.z=c2
A.b(d4.appendChild(g))
A.b(d4.appendChild(c2))
A.b(d3.appendChild(d4))
A.b(d3.appendChild(c3.kA()))
d5=A.D(b9,"div","tape-roll",null)
A.b(d5.style).setProperty("width","8rem")
c2=A.D(b9,"div","tape-fill",null)
c3.as!==$&&A.K()
c3.as=c2
A.b(d5.appendChild(c2))
A.b(d3.appendChild(d5))
d6=A.D(b9,"div","consult",null)
A.b(d6.appendChild(A.D(b9,"div","consult-label","Cite an entry")))
c2=A.D(b9,"div","entry-picker",null)
c3.at!==$&&A.K()
c3.at=c2
g=A.D(b9,"div","consult-result",null)
c3.ax!==$&&A.K()
c3.ax=g
A.b(d6.appendChild(c2))
A.b(d6.appendChild(g))
A.b(d3.appendChild(d6))
d7=A.k(b9.documentElement)
if(t.m.b(d7)){A.b(d7.style).setProperty("--shake-max-deg","3deg")
A.b(d7.style).setProperty("--shake-max-px","2px")}$.fP.b=c3
$.fP.j().sb0(new A.uO())
g=A.b(d8.document)
b9=A.D(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.b(b9.style).setProperty("transition-duration","0.3s")
A.b(A.k(g.body).appendChild(b9))
$.yf.b=new A.pJ(b9)
b9=A.b(d8.document)
g=A.D(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.k(b9.body).appendChild(g))
$.yd.b=new A.mW(g)
g=A.b(d8.document)
b9=A.D(g,"div","ambient-notice",null)
c2=A.D(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.b(A.k(g.body).appendChild(b9))
A.b(A.k(g.body).appendChild(c2))
$.bx.b=new A.mo(b9,c2)
$.yi=!0
c2=A.AD(A.b(d8.document))
c2.snR(A.Fn())
c2.snT(A.Fq())
c2.snS(A.Fp())
c2.so1(A.Fo())
$.aD.b=c2
c2=d.a
b2=A.C0(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aK.j().eI(b2))A.Em()
g=$.lO.j()
b9=d.a
g.oF(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b3))for(g=J.S(b3);g.m();){b4=g.gn()
if(A.aL(b4))$.us.l(0,b4)}g=A.BN(A.b(d8.document))
g.so8(new A.uP())
g.sb0(new A.uQ())
$.lQ.b=g
g=A.B0(A.b(d8.document))
g.sb0(new A.uR())
$.iL.b=g
$.fR.b=A.qi(A.b(d8.document),null)
$.iN.b=A.qi(A.b(d8.document),B.H)
$.eQ.b=A.qi(A.b(d8.document),B.A)
A.tw($.fR.j(),!1)
A.tw($.iN.j(),!0)
A.tw($.eQ.j(),!0)
A.E5()
A.DL()
$.fO.b=A.B_(A.b(d8.document))
A.Do()
A.E8()
$.fM.b=A.qi(A.b(d8.document),B.z)
A.tw($.fM.j(),!0)
A.E6()
$.iJ.b=A.Aw(A.b(d8.document))
A.Dn()
A.E7()
g=A.AN(A.b(d8.document))
g.sb0(new A.uS())
g.snV(new A.uT())
$.iK.b=g
g=d.a
b5=A.AP(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.yT(b5)
b6=$.fX
if(b6!=null){A.e3("world")
g=$.X.j()
b9=b6
c0=new A.q4(g,b9,A.o(c0,t.J))
c0.kj(g,b9)
$.fT=c0}g=B.b.q(A.x(A.b(A.b(d8.window).location).search),"shaders=live")
$.z8=g
if(g){g=$.fX
if(g!=null)g.bL()}A.yX()
A.b(d8.window).addEventListener("resize",A.a0(new A.uU()))
A.b(d8.window).addEventListener("keydown",A.a0(new A.uV()))
A.b(d8.window).addEventListener("keyup",A.a0(new A.uW()))
A.b(d8.window).addEventListener("keydown",A.a0(new A.uX()))
A.b(d8.window).addEventListener("click",A.a0(new A.uZ()))
$.B.j().addEventListener("click",A.a0(new A.v_()))
A.fV()
A.e3("raf")
A.c(A.b(d8.window).requestAnimationFrame(A.a0(A.zp())))
p=2
s=6
break
case 4:p=3
e0=o.pop()
b7=A.ag(e0)
b8=A.cz(e0)
A.uk(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bA(q,r)
case 2:return A.bz(o.at(-1),r)}})
return A.bB($async$uK,r)},
DM(){var s=v.G
A.b(s.window).addEventListener("error",A.a0(new A.uc()))
A.b(s.window).addEventListener("unhandledrejection",A.a0(new A.ud()))},
e3(a){if($.w0===a)return
$.w0=a
$.B.j().setAttribute("data-boot-phase",a)},
yU(){var s,r,q=$.d1.j().gbk(),p=$.B.j(),o=A.cW().gaE().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.k.ao(q.B(),null))
p=$.bE
s=p==null?null:p.x
if(s!=null)$.B.j().setAttribute("data-renderer-profile-fallback",s)
p=$.lW
r=p==null?null:p.y
if(r!=null)$.B.j().setAttribute("data-renderer-frame-submits",A.w(r))},
Ee(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(!$.j0())return
s=$.wI()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.wJ()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.ti.j().er($.V.j().gab().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vi()
o=q==null?b:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.d.bt(A.yW($.aw),3))
r=$.B.j()
q=$.w0
n=$.aw
m=$.eY()
l=t.N
m=A.O(["x",m.a,"y",m.b,"z",m.c],l,t.i)
k=$.c4
j=$.e4
i=$.b7!=null||$.aD.j().ax
h=t.K
r.setAttribute("data-automation-player",B.k.ao(A.O(["schemaVersion",1,"phase",q,"roomId",n,"eye",m,"yaw",k,"pitch",j,"modal",i,"inputEnabled",$.ad.j().ay,"day",$.V.j().gab().a,"hour",$.V.j().gab().b],l,h),b))
g=A.o(l,t.X)
for(r=$.X.j().c,q=r.length,f=0;f<r.length;r.length===q||(0,A.r)(r),++f){e=r[f]
n=e.ax
m=e.ay
k=e.z
j=n&&!m&&!k
g.k(0,e.a,A.O(["a",e.b,"b",e.c,"open",n,"locked",m,"sticks",k,"passable",j],l,h))}$.B.j().setAttribute("data-automation-portals",B.k.ao(g,b))
d=$.lS
r=!1
if(d!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.aw
q=r.e.h(0,q)!=null
r=q}if(r){c=d.eL("cellar",$.aw)
$.B.j().setAttribute("data-audio-transmission-cellar",B.k.ao(A.O(["sourceRoom","cellar","listenerRoom",$.aw,"portalPath",c.a,"gainDb",c.b,"lowPassHz",c.c,"muffle01",c.d,"reachable",c.e],l,h),b))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
m3(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bQ.j().a!==B.E){A.fY("save unavailable during rupture")
return}try{r=$.vW.j()
q=$.V.j()
p=t.N
o=t.z
s=A.o(p,o)
n=$.aw
m=$.eY()
l=$.c4
k=$.e4
j=$.iM.j().d
j=j==null?null:j.a.a
i=$.iM.j().d
J.bI(s,"player",new A.ki(n,m,l,k,j,i==null?null:i.b).B())
n=$.aK.j()
m=A.qe(n.b,p)
l=A.qe(n.c,t.L)
n=n.r
J.bI(s,"visitors",new A.kU(m,l,n==null?null:new A.j3(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.lO.j().b
n=A.J(n,A.q(n).c)
B.a.X(n)
J.bI(s,"ambient",n)
n=A.J($.us,A.q($.us).c)
B.a.X(n)
J.bI(s,"unverifiables",n)
J.bI(s,"inventoryInspections",$.vj().B())
n=$.w5
if(n!=null)J.bI(s,"ending",A.O(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.x7(q.c).B()
k=q.d
r.oT(A.xy(s,A.O(["houseSeed",n,"runSeed",m,"house",l,"time",A.O(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.fY(a)}catch(h){A.fY("save failed")}},
fY(a){var s=A.k(A.b(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.AY(B.ej,new A.uo(s),t.H)},
uk(a,b){var s,r,q,p
A.e3("error")
s=A.w(a)
r=A.FD(s,"\n"," ")
s=$.w6
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.k(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.j0()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.b(s.console).error(p)},
ym(){var s,r
if($.vZ)return
$.vZ=!0
s=$.bC
r=s==null
if(!r)s.cd()
if(!r)s.f3("music")
B.a.l($.d2,"arm")},
fV(){var s=0,r=A.bD(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fV=A.bG(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.am(A.fU(),$async$fV)
case 2:o=null
q=4
s=7
return A.am(A.aY(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$fV)
case 7:n=b
i=A
s=8
return A.am(A.aY(A.b(n.json()),t.X),$async$fV)
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
if(k!=null&&typeof k==="string"){l=A.k(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.x(k)}s=9
return A.am(A.nQ(A.e([A.uf(o),A.u8(o)],t.iw),t.H),$async$fV)
case 9:return A.bA(null,r)
case 1:return A.bz(p.at(-1),r)}})
return A.bB($async$fV,r)},
fU(){var s=0,r=A.bD(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fU=A.bG(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.i2[g]
q=6
s=9
return A.am(A.aY(A.b(A.b(j.window).fetch(o)),i),$async$fU)
case 9:n=a0
s=10
return A.am(A.aY(A.b(n.text()),h),$async$fU)
case 10:m=a0
l=A.Ai(B.k.aH(m,null))
f=$.X.b
if(f===$.X)A.i(A.a7(""))
l.eO(f)
f=$.B.b
if(f===$.B)A.i(A.a7(""))
f.setAttribute("data-house-manifest","validated")
f=$.B.b
if(f===$.B)A.i(A.a7(""))
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
A.b(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.am(A.lY(),$async$fU)
case 11:s=12
return A.am(A.lZ(),$async$fU)
case 12:return A.bA(null,r)
case 1:return A.bz(p.at(-1),r)}})
return A.bB($async$fU,r)},
lY(){var s=0,r=A.bD(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lY=A.bG(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.hL[c]
p=7
s=10
return A.am(A.aY(A.b(A.b(g.window).fetch(n)),f),$async$lY)
case 10:m=b1
s=11
return A.am(A.aY(A.b(m.text()),e),$async$lY)
case 11:l=b1
b=B.k.aH(l,null)
b=h.b(b)?b:A.dw("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dw("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aL(a)?a:A.dw("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dw("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.as(a,!0,d):A.dw("assets is not a list")
a4=A.H(a3)
a5=a4.i("R<1,cK>")
a3=A.J(new A.R(a3,a4.i("cK(1)").a(A.Fj()),a5),a5.i("a5.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.as(a,!0,d):A.dw("placements is not a list")
a5=A.H(a4)
a6=a5.i("R<1,cq>")
a4=A.J(new A.R(a4,a5.i("cq(1)").a(A.Fk()),a6),a6.i("a5.E"))
a4.$flags=1
k=new A.ol(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.i(A.a7(""))
k.eO(a1)
$.lV=k
a1=$.bE
if(a1!=null)a1.jv(k)
a1=$.B.b
if(a1===$.B)A.i(A.a7(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.B.b
if(a1===$.B)A.i(A.a7(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.B.b
if(a1===$.B)A.i(A.a7(""))
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
A.b(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.bA(q,r)
case 2:return A.bz(o.at(-1),r)}})
return A.bB($async$lY,r)},
lZ(){var s=0,r=A.bD(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$lZ=A.bG(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.lV
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.im[a4]
p=7
s=10
return A.am(A.aY(A.b(A.b(a1.window).fetch(m)),a2),$async$lZ)
case 10:l=b5
s=11
return A.am(A.aY(A.b(l.text()),e),$async$lZ)
case 11:k=b5
a5=B.k.aH(k,null)
a5=a0.b(a5)?a5:A.fS("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.as(a6,!0,a3):A.fS("emitters is not a list")
a8=A.H(a7)
a9=a8.i("R<1,cJ>")
a7=A.J(new A.R(a7,a8.i("cJ(1)").a(A.FB()),a9),a9.i("a5.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aL(a6)?a6:A.fS("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.fS("sourceRef is not a string")
j=new A.or(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.i(A.a7(""))
j.oO(a7,b2)
$.yC=j
i=A.o(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gH(),a9=a9.gt(a9);a9.m();){g=a9.gn()
J.bI(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.X.b
if(a7===$.X)A.i(A.a7(""))
a8=A.Af(i)
a9=new A.my(a7,A.b1(B.cH,e,d),a8)
a9.k9(a8,a7,B.cH)
$.lS=a9
a7=$.bC
if(a7!=null){a7.ch=a9
a7.bA()}a7=$.B.b
if(a7===$.B)A.i(A.a7(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.B.b
if(a7===$.B)A.i(A.a7(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.B.b
if(a7===$.B)A.i(A.a7(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.B.b
if(a7===$.B)A.i(A.a7(""))
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
case 5:$.lS=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.w(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bA(q,r)
case 2:return A.bz(o.at(-1),r)}})
return A.bB($async$lZ,r)},
w3(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.S(t.a.b(s)?s:new A.aS(s,A.H(s).i("aS<1,j>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.x(q))}},
u8(a){var s=0,r=A.bD(t.H),q,p,o,n,m,l
var $async$u8=A.bG(function(b,c){if(b===1)return A.bz(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.o(n,n)
n=a==null
A.w3(A.k(n?null:a.sfx),m,"")
A.w3(A.k(n?null:a.ir),m,"ir-")
q=A.k(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.x(p))
l=$
s=2
return A.am(A.mF(m,$.X.j()),$async$u8)
case 2:o=l.bC=c
o.ch=$.lS
o.bA()
A.E9()
A.yZ(o)
A.vX()
A.z_()
if($.vZ){o.cd()
o.f3("music")}return A.bA(null,r)}})
return A.bB($async$u8,r)},
wm(a,b){var s
A.zb(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Ej(a){var s,r
try{s=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
yj(a,b){var s
if(a!=="brightness")return
s=A.k(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.w(B.d.K(b,0.6,1.4))+")")},
tn(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.k(A.b(v.G.document).documentElement)
if(r!=null)A.U(A.b(r.classList).toggle(s,b))},
z_(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.aE($.d5().a.ce(o)),k=A.U($.d5().a.ce(n)),j=A.U($.d5().a.ce(m))
for(s=[$.fR.j(),$.iN.j(),$.eQ.j(),$.fM.j()],r=0;r<4;++r)s[r].eW(o,l)
A.yj(o,l)
for(s=[$.fR.j(),$.iN.j(),$.eQ.j(),$.fM.j()],r=0;r<4;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tn(n,k)
A.tn(m,j)},
wl(a,b){var s
A.zb(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Eg(a){var s,r
try{s=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
yZ(a){var s,r,q,p,o,n,m,l,k,j=A.o(t.N,t.i)
for(s=0;s<5;++s){r=B.i1[s]
q=$.d5().a.b.h(0,r)
j.k(0,r,A.aE(q==null?A.i(A.m("setting missing from profile: "+r)):q))}p=A.U($.d5().a.ce("muted"))
o=A.U($.d5().a.ce("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bd(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.d2(o)
for(q=[$.fR.j(),$.iN.j(),$.eQ.j(),$.fM.j()],n=j.$ti.i("cs<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cs(j,j.r,j.e,n);m.m();){k=m.d
l.eW(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
yk(){var s=$.bC
if(s!=null)A.yZ(s)
A.z_()},
E9(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aQ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aH(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.i(B.eL)
q=A.xA(r.h(0,"requested"))
$.z6=A.vH(A.xA(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.x
o=A.o(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Eg(l))}}r=A.o(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Ej(p))}}$.z6=A.BM(o,r)
A.uh()},
uh(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.ao($.d5().B(),null))}catch(s){}},
zb(a,b){var s,r,q,p,o,n,m
switch(A.qK(a).d.a){case 0:r=A.fp(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d5()
q=s
A.qK(a).cW(q)
p=t.N
o=t.K
n=A.fk(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dn(n,1)
n=s
A.qK(a).cW(n)
o=A.fk(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dn(o,1)
A.uh()}catch(m){if(!(A.ag(m) instanceof A.G))throw m}},
uf(a){var s=0,r=A.bD(t.H),q,p,o
var $async$uf=A.bG(function(b,c){if(b===1)return A.bz(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.o(p,p)
A.w3(A.k(a==null?null:a.tex),o,"")
p=$.fX
p=p==null?null:p.aP(o)
if(p==null)p=A.vp(t.H)
q=$.bE
q=q==null?null:q.aP(o)
s=2
return A.am(A.nQ(A.e([p,q==null?A.vp(t.H):q],t.iw),t.H),$async$uf)
case 2:return A.bA(null,r)}})
return A.bB($async$uf,r)},
yX(){var s,r,q=v.G,p=A.c(A.b(q.window).innerWidth),o=A.c(A.b(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.fX
if(q!=null)q.b2(A.c($.B.j().width),A.c($.B.j().height))
$.d1.j().b2(A.c($.B.j().width),A.c($.B.j().height))
q=$.bE
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
DJ(){var s,r,q=$.b7
if(q!=null){s=$.ad.j()
if(!s.CW.b8("pause",s.f)){s=$.ad.j()
s=s.CW.b8("secondary",s.f)}else s=!0
if(s){A.Dq(q)
return}if($.ad.j().f.a7(0,"GamepadDpadUp")){A.yK(q,-1)
return}if($.ad.j().f.a7(0,"GamepadDpadDown")){A.yK(q,1)
return}s=$.ad.j()
if(s.CW.b8("interact",s.f)){r=A.k(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.U(q.b.contains(r)))A.vr(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.b8("pause",s.f)){A.iW($.cj.j())
return}if($.aD.j().ax)return
s=$.ad.j()
if(s.CW.b8("journal",s.f))A.iZ($.fP.j())
else{s=$.ad.j()
if(s.CW.b8("sleep",s.f))A.iZ($.lQ.j())}},
Dq(a){if(a===$.cj.j()){a.a5()
return}if(a===$.fQ.j()||a instanceof A.fu||a instanceof A.ho||a instanceof A.hd){A.eU(a)
return}a.a5()},
yK(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.e([],t.W)
for(s=t.m,r=0;r<A.c(l.length);++r){q=A.k(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.k(A.b(v.G.document).activeElement)
o=B.a.bF(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.c.P(o+b+m,m)}if(!(n>=0&&n<k.length))return A.f(k,n)
k[n].focus()},
Ef(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
A.aE(c6)
try{s=c6
if(!$.yB){$.wb=s
$.yB=!0}d=s
c=$.wb
if(typeof d!=="number")return d.an()
r=(d-c)/1000
$.wb=s
d=r
if(typeof d!=="number")return d.d1()
if(d<0)r=0
d=r
if(typeof d!=="number")return d.am()
if(d>0.25)r=0.25
A.EH(r)
$.ad.j().oe()
d=$.B.j()
c=$.ad.j().z!=null?"standard":"none"
d.setAttribute("data-controller",c)
q=$.ad.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.DJ()
if(!$.wc&&$.b7==null){d=$.e2
c=r
if(typeof c!=="number")return A.j_(c)
c=$.e2=d+c
p=0
d=t.mv
for(;;){if(c>=0.008333333333333333){b=p
if(typeof b!=="number")return b.d1()
b=b<10}else b=!1
if(!b)break
$.wf=$.eY()
if(!$.wH()){c=$.V.b
if(c===$.V)A.i(A.a7(""))
c.m6(0.008333333333333333)
c=$.zW()
b=$.V.b
if(b===$.V)A.i(A.a7(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.i(A.a7(""))
c=c.dG(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.r)(c),++a0){o=c[a0]
B.a.l($.d2,"clock:"+o.a)}c=$.zX()
b=$.V.b
if(b===$.V)A.i(A.a7(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.i(A.a7(""))
c=c.dG(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.r)(c),++a0){n=c[a0]
B.a.l($.d2,"service:"+n.a+":"+n.b)}}A.EK()
c=$.aK.b
if(c===$.aK)A.i(A.a7(""))
b=$.V.b
if(b===$.V)A.i(A.a7(""))
c.w=b.r.c>=0.5
c=c.f
a1=A.as(c,!1,d)
a1.$flags=3
a2=a1
B.a.G(c)
if(a2.length!==0){c=$.V.b
if(c===$.V)A.i(A.a7(""))
c.oi(a2)}A.EG()
A.EJ()
A.EI()
A.EF(0.008333333333333333)
c=$.fN.b
if(c===$.fN)A.i(A.a7(""))
if(c.a!=null)if((c.b-=0.008333333333333333)<=0)c.a=null
c=$.bQ.b
if(c===$.bQ)A.i(A.a7(""))
m=c.a!==B.E
b=$.X.b
if(b===$.X)A.i(A.a7(""))
c.m7(0.008333333333333333,b)
if(m){c=$.bQ.b
if(c===$.bQ)A.i(A.a7(""))
c=c.e}else c=!1
if(c)A.yY(!0)
c=$.e2-0.008333333333333333
$.e2=c
b=p
if(typeof b!=="number")return b.a8()
p=b+1}l=B.d.K(c/0.008333333333333333,0,1)
d=$.wq=A.xL($.zY(),$.eY(),l)
k=$.bC
if(k!=null){c=k
b=Math.sin($.c4)
a=Math.cos($.c4)
a3=A.b(c.a.listener)
a3.setPosition(d.a,d.b,d.c)
A.ai(a3,"setOrientation",[b,0,a,0,1,0],t.H)
c.jx($.aw)
for(d=$.d2.length,a0=0;a0<$.d2.length;$.d2.length===d||(0,A.r)($.d2),++a0){j=$.d2[a0]
A.Du(k,j)}B.a.G($.d2)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.d.bt(k.gnK(),3))
d=$.B.j()
c=k.cx?"true":"false"
d.setAttribute("data-audio-music-started",c)
c=$.B.j()
d=k.dx
if(d==null)d="ir-fallback"
c.setAttribute("data-audio-room-ir",d)}}i=$.fX
if(i!=null){$.bP.j().ev($.j1(),$.c4,$.e4)
d=$.b7===$.fP.j()?1:0
i.cJ=d
$.yI=r
$.d1.j().b4(A.vE($.V.j().geB()))}else if($.c2.j().a===B.X){$.bP.j().ev($.j1(),$.c4,$.e4)
d=$.bE
if(d!=null){c=$.bP.j()
b=c.a
a4=new A.L(b.a,b.b,b.c)
b=c.b
a5=new A.L(b.a,b.b,b.c)
b=c.c
a6=d.b/d.c
a7=A.xm(a4,a5,new A.L(b.a,b.b,b.c))
c=c.f
b=c.b
a=c.c
a8=A.vy(a6,a,c.a,b)
d.ok=new A.f8(a7,a8,a8.a4(0,a7),a4,a5,b,a,a6)}d=$.bE
if(d!=null)d.jH($.X.j(),$.aw)
d=$.bE
if(d!=null)d.jw($.X.j(),$.aw,$.j1(),$.bm.j().gbu(),Math.sin(3.141592653589793*$.bm.j().gbu()),$.ti.j().er($.V.j().gab().a),A.Fw($.aw))
if($.yH!==$.bQ.j().a){$.yH=$.bQ.j().a
$.wh=$.wh+1}d=$.bE
if(d!=null){if($.wH())c=0
else{c=s
if(typeof c!=="number")return c.oX()
c/=1000}b=$.wh
a=A.c(Math.max(0,$.V.j().b))
if(!isFinite(c)||c<0)A.i(A.an(c,"timeSeconds",null))
if(a<0)A.i(A.y("frame clock seeds must be non-negative",null))
d.R8=c
d.RG=b
d.rx=a}d=$.bE
if(d!=null){c=$.bQ.j()
b=$.m1
a=$.ti.j().er($.V.j().gab().a)
a9=A.yW($.aw)
b0=c.a
b1=c.gf1()
b2=b1>0?B.d.K(c.b/b1,0,1):0
c=b0.a
b3=c>=3
b4=b0===B.bf
b5=b0===B.Y?0.45:1
if(c>=1)b6=b0===B.ab?b2:1
else b6=0
if(c>=2)c=b0===B.bd?b2:1
else c=0
b7=b3?320:0
b8=b3?5:8
b9=b4?1:0
c0=b4?b2:0
c1=b4?b2:0
c2=b4?b2:0
c3=b4?b2:0
c4=b4?b2:0
d.p2=new A.kk(b5,0.38,0.28,0.18,0.015,a.c,a9,b6,c,b7,b8,b9,c0,c1,c2,c3,c4,b)}$.d1.j().b4(A.vE($.V.j().geB()))
h=$.bE
if(h!=null){g=h.gno()
if(g!=null){$.B.j().setAttribute("data-renderer-frame-stats",g)
d=$.B.j()
c=h.gnn()?"ok":"exceeded"
d.setAttribute("data-renderer-budget",c)}}}A.e3("running")
A.Ee()
d=$.ad.j()
d.as=d.Q=0
d.d.G(0)
d.f.G(0)
A.c(A.b(v.G.window).requestAnimationFrame(A.a0(A.zp())))}catch(c5){f=A.ag(c5)
e=A.cz(c5)
A.uk(f,e)}},
Du(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.j5("confirm")
$.bx.j().aG("interface confirmation")
break
case"ambient-winnow":a.ez("winnow",0.28)
$.bx.j().aG("wind moving through the house")
break
case"ambient-gate":a.ez("gate",0.22)
$.bx.j().aG("distant gate")
break
case"collapse":a.j5("collapse")
$.bx.j().aG("front door shudders and collapses")
break
case"clock:tick":A.m0(a,p,"tick")
break
case"clock:chime":A.m0(a,p,"chime")
break
case"clock:cuckoo":A.m0(a,p,"cuckoo")
break
case"clock:bell":A.m0(a,p,"bell")
break
default:if(B.b.W(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.m0(a,q,s[2])}}}},
m0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.yC,g=$.lV
if(h==null||g==null)return
s=h.n9(b)
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
break A}if(q!=null)$.bx.j().aG(q)
q=$.X.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.i(A.m("sound room missing: "+o))
m=n.d.a8(0,s.d.a4(0,p))
l=$.lS
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.i(A.m("sound emitter "+s.a+" has no cue for "+c))
a.od(q,m,s.e,o)
return}q=$.yp
$.yp=q+1
o=A.Ag(B.dr,r,r+":"+q,m,A.Dc(b,c),q,o)
q=$.aw
q=A.Ac($.j1(),q)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.i(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.i(A.m("audio listener room missing: "+q))
j=l.eL(p,q)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.i(A.m("audio cue family missing: "+q))
k=J.aA(i)
k=k.h(i,B.c.P(A.Ex(q,o.f),k.gu(i)))
o=o.e
A.al(j.a,t.N)
a.j6(k,new A.a(o.a,o.b,o.c),s.e,1,p,j.c,j.b,j.d)},
Dc(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dG(a+":"+b),r=t.gS,s=new A.aT(s,s.gu(0),r.i("aT<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.zl(p,q==null?r.a(q):q)}return p},
EH(a){var s=$.w6
if(s==null)return
s.textContent=""+B.d.aF(a>0?1/a:0)+" fps"},
EF(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4="interact"
if($.z2||$.b7!=null||$.aD.j().ax){$.m8().a=new A.a(0,0,0)
return}s=$.ad.j()
r=s.cs("moveLeft")?-1:0
if(s.cs("moveRight"))++r
q=s.cs("moveForward")?1:0
if(s.cs("moveBack"))--q
s=s.ay?s.w:new A.a(0,0,0)
p=new A.a(r,0,q).a8(0,s)
o=p.gu(0)>1?p.gaa():p
$.ad.j().d7(a5)
n=$.ad.j().Q
m=$.ad.j().as
s=$.c4
l=$.ad.j()
l=l.ay?l.x:0
$.c4=s+(n*0.0028+l*2.4*a5)
l=$.e4
s=$.ad.j()
s=s.ay?s.y:0
s=l-(m*0.0028+s*2.4*a5)
$.e4=s
$.e4=B.d.K(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.a(s*Math.cos($.c4)+l*Math.sin($.c4),0,l*Math.cos($.c4)-s*Math.sin($.c4)).gaa().a4(0,2)
s=$.m8()
if(!isFinite(a5)||a5<0)A.i(A.an(a5,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.i(A.an(j,"rate","must be finite and positive"))
l=Math.exp(-j*a5)
i=s.a
l=i.a8(0,k.an(0,i).a4(0,1-l))
s.a=l
h=$.iM.j().nL($.X.j(),$.aw,$.eY(),l.a4(0,a5))
$.wk=h.a
if($.bQ.j().a!==B.bg&&$.bQ.j().a!==B.Y)$.aw=h.b
$.bP.j().ev($.eY(),$.c4,$.e4)
s=$.bP.j()
l=$.X.j()
g=A.Fv(s,$.aw,l,$.lV)
$.yf.j().jI(g.c)
f=a3
e=a3
d=a3
c=a3
switch(g.a.a){case 0:f=A.wz($.bP.j(),$.X.j(),$.aw)
break
case 1:e=A.zv($.bP.j(),$.X.j(),$.aw)
break
case 2:d=A.zw($.bP.j(),$.X.j(),$.aw)
break
case 3:s=$.bP.j()
l=$.X.j()
i=$.lV
c=A.zu(s,$.aw,l,i)
break
case 4:break}s=$.yd.j()
b=$.h4().jn($.V.j().gab().a)
l=b==null?a3:b.h(0,"status")
s.eM(l,$.aw==="living-room")
s=$.ad.j()
l=s.CW
if(l.b8(a4,s.d)||l.b8(a4,s.f)){s=$.V.j().gab()
l=e==null
i=l?a3:e.a
a=B.a.a2($.aK.j().hi(21),$.aK.j().gnz())
if(s.a===21&&i==="front-door"&&a){s=$.bQ.j()
$.X.j()
s.jX(B.e4,A.al(s.c,t.N))
B.a.l($.d2,"collapse")
A.fY("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d){f.d=!1
$.bx.j().aG("mantle flame extinguished")}else if($.V.j().jU(1,1)){f.d=!0
s=$.fN.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0
$.bx.j().aG("mantle flame catches")}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.bx.j()
s.aG(e.ax?"door opens":"door closes")
s=$.fT
if(s!=null)s.cV(e.b)
s=$.bE
if(s!=null)s.eD($.X.j(),e.a)
s=$.bC
if(s!=null)s.bA()}else if(d!=null)if(d.w){s=$.V.j()
if(s.f.d6(1)){d.w=!1
$.bx.j().aG("shutter closes")}}else{d.w=!0
$.bx.j().aG("shutter opens")}else if(c!=null){s=$.vj()
if(!c.x)A.i(A.m("inventory placement is not pickable: "+c.a))
a0=c.y
if(a0==null)a0=c.a
s=s.a
l=c.a
i=s.h(0,l)
s.k(0,l,(i==null?0:i)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a0)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a0)
s=A.b1(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
a1=A.Eb(a0)
s=$.bx.j()
s.ci("noticed",a1==null?"you inspect "+a0:a1)}}s=$.fN.j()
if(s.a!=null&&s.b>0){a2=$.fN.j().a
if(a2!=null&&A.wz($.bP.j(),$.X.j(),$.aw)!==a2){s=$.fN.j()
s.a=null
s.b=0}}},
Eb(a){var s,r,q,p,o=$.V.j().z.b,n=A.q(o).i("I<1,2>"),m=A.J(new A.I(o,n),n.i("p.E"))
B.a.S(m,new A.ug())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.h4().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
EK(){var s,r,q,p,o,n,m,l,k,j=null
if($.aD.j().ax||$.b7!=null||$.aK.j().r!=null)return
s=$.V.j().gab()
for(r=$.aK.j().hi(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aK.b
if(m===$.aK)A.i(A.a7(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aK.b
if(r===$.aK)A.i(A.a7(""))
l=r.dH(n)
if(!(l instanceof A.kQ))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xc(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.m8().a=new A.a(0,0,0)
r=$.aD.b
if(r===$.aD)A.i(A.a7(""))
r.eY(n.a,k)
A.za(n)
return}},
Em(){var s,r=$.aK.j().r,q=r==null,p=q?null:r.gbD()
if(q||p==null)return
q=$.aD.j()
s=r.a
q.eY(s.a,p)
A.za(s)
if(r.d!==B.a0)A.we()
A.fY("restored visitor")},
za(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().nq("stranger-17-eileen-case")
r=$.h4().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.as(q,!0,t.N):B.o
p=A.cL(r,t.N)
if(s==null||p==null)return
$.bx.j().ci("inside the case",p+" \u201c"+s.d+"\u201d")},
EG(){var s,r,q,p,o=$.V.j().gab(),n=$.lO.j().n7(o.a,o.b)
if(n.length===0)return
s=B.a.gO(n)
$.lO.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bx.j().ci(q,s.e)
p=A.EQ(r)
if(p!=null)B.a.l($.d2,"ambient-"+p)},
EJ(){var s,r,q,p,o=$.V.j().gab()
if(o.b<20)return
s=o.a
if(!$.us.l(0,s))return
r=$.h4().f
r===$&&A.h()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.as(q,!0,t.N):B.o
p=A.Ft(r,$.V.j().b,s)
if(p!=null)$.bx.j().ci("noticed",p)},
yY(a){var s,r,q,p,o
if($.w5!=null)return
s=$.V.j().gab()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.q(q).i("ar<2>")
o=A.AO(new A.nx(s.a,1-r,new A.M(new A.ar(q,p),p.i("n(p.E)").a(new A.ul()),p.i("M<p.E>")).gu(0),$.V.j().r.d,a))
if(o==null)return
A.yT(o)
A.m3("ending recorded")},
yT(a){var s,r,q
$.w5=a
$.z2=!0
$.m8().a=new A.a(0,0,0)
A.iW($.iK.j())
s=a.a
r=$.h4().w
r===$&&A.h()
q=r.h(0,s.b)
r=t.j.b(q)?A.as(q,!0,t.N):B.o
r=A.J(r,t.N)
B.a.J(r,A.Bk($.V.j().z,s))
$.iK.j().jL(a,r)},
Dj(a){var s,r,q,p
A:{if("open"===a){s=B.aq
break A}if("chain"===a){s=B.bO
break A}if("through-door"===a){s=B.bP
break A}if("letterbox"===a){s=B.bQ
break A}s=B.a6
break A}r=$.aK.j().ms(s)
if(s===B.aq){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.fT
if(p!=null)p.cV(q.b)
p=$.bE
if(p!=null)p.eD($.X.j(),q.a)
p=$.bC
if(p!=null)p.bA()}}if(!(r instanceof A.kO)||s===B.a6){$.aD.j().cP()
$.ad.j().cc($.B.j())
return}if(r.a.gbD()==null){A.w2()
$.aD.j().cP()
$.ad.j().cc($.B.j())
return}A.we()},
Dp(){var s=$.aK.j().m8()
if(!(s instanceof A.i3)||s.b){A.w2()
$.aD.j().cP()
$.ad.j().cc($.B.j())
return}if(s.a.gbD()==null){A.w2()
$.aD.j().cP()
$.ad.j().cc($.B.j())
return}A.we()},
we(){var s,r,q,p,o,n,m,l,k=$.aK.j().r,j=k==null,i=j?null:k.gbD()
if(j||i==null)return
s=$.aK.j().gcG()
if(s==null)$.aD.j().jK(i)
else{r=k.w
j=r==null
$.aD.j().eZ(i,j)
q=$.aD.j()
p=A.e([],t.m_)
for(o=s.f,n=o.length,m=0;m<n;++m){l=o[m]
p.push(new A.aJ(l.a,l.b))}q.jM(p,r)
if(!j){j=A.H(o)
l=A.cL(new A.M(o,j.i("n(1)").a(new A.ui(r)),j.i("M<1>")),t.Y)
if(l!=null)$.aD.j().f_(i,l.c)}}A.z9()},
Dk(a){var s,r,q,p=$.aK.j().mt(a)
if(!(p instanceof A.kP))return
s=p.c
if(!$.V.j().ma(p.b,s))return
r=$.aD.j()
q=p.a.gbD()
if(q==null)q=""
r.f_(q,s.c)
A.z9()
A.m3("saved after visitor answer")},
z9(){var s,r,q,p,o=$.aD.j(),n=A.b(v.G.document),m=A.e([],t.fR)
for(s=$.lP.j().eS(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.aJ(p.a,B.a.gU(p.c).p(0)))}o.jJ(n,m)},
Dl(a){var s,r,q,p=$.aK.j().mu(a,!0,$.lP.j())
if(p==null)return
s=$.lP.j().n0(p,B.hr)
r=$.aD.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.J.bE("",!0,q)},
w2(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fT
if(s!=null)s.cV(r.b)
s=$.bE
if(s!=null)s.eD($.X.j(),r.a)
s=$.bC
if(s!=null)s.bA()}},
EI(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bQ.b
if(k===$.bQ)A.i(A.a7(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Fw(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.bm.j().gbu()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.l){n=$.bm.b
if(n===$.bm)A.i(A.a7(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.bm.b
if(n===$.bm)A.i(A.a7(""))
n=n.b>12}else n=!1
if(!n){if(o===B.x){n=$.bm.b
if(n===$.bm)A.i(A.a7(""))
n=n.b<9}else n=!1
if(!n)if(o===B.K){o=$.bm.b
if(o===$.bm)A.i(A.a7(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
yW(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.aZ
if(q.length===0)return 0.12
s=A.H(q)
return B.d.K(new A.M(q,s.i("n(1)").a(new A.uj()),s.i("M<1>")).gu(0)/q.length,0.12,1)},
fF:function fF(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
t2:function t2(a){this.a=a},
t3:function t3(a){this.a=a},
t4:function t4(a){this.a=a},
t5:function t5(a){this.a=a},
rZ:function rZ(){},
t_:function t_(){},
t0:function t0(){},
t1:function t1(){},
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
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rC:function rC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
tx:function tx(){},
ty:function ty(){},
tz:function tz(){},
tE:function tE(){},
tF:function tF(){},
tG:function tG(){},
tH:function tH(){},
tI:function tI(){},
tJ:function tJ(a){this.a=a},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
tA:function tA(a){this.a=a},
tB:function tB(){},
tC:function tC(){},
tD:function tD(){},
tt:function tt(){},
tu:function tu(){},
tv:function tv(){},
tq:function tq(){},
tr:function tr(){},
ts:function ts(){},
ub:function ub(a,b){this.a=a
this.b=b},
u9:function u9(a){this.a=a},
ua:function ua(a){this.a=a},
uL:function uL(a){this.a=a},
uM:function uM(){},
uN:function uN(){},
uY:function uY(){},
v0:function v0(){},
v1:function v1(){},
v2:function v2(){},
v3:function v3(){},
v4:function v4(){},
v5:function v5(){},
v6:function v6(){},
uO:function uO(){},
uP:function uP(){},
uQ:function uQ(){},
uR:function uR(){},
uS:function uS(){},
uT:function uT(){},
uU:function uU(){},
uV:function uV(){},
uW:function uW(){},
uX:function uX(){},
uZ:function uZ(){},
v_:function v_(){},
uc:function uc(){},
ud:function ud(){},
uo:function uo(a){this.a=a},
ug:function ug(){},
ul:function ul(){},
ui:function ui(a){this.a=a},
uj:function uj(){},
xc(a,b,c,d,e,f){var s=a[b]()
return s},
vr(a,b,c){var s=null
return c.a(A.xc(a,b,s,s,s,s))},
vb(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.an(b.gnt(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.a9()
o=q*16
n=o+16
B.q.d3(s,o,n,p.a)
if(l)B.q.d3(r,o,n,p.ex().a)}m=a.a
A.v(m,"uInstanceModels",new A.z(B.dd,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.z(B.dd,r))
A.v(m,"uUseInstances",B.de)},
AB(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
AA(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
zm(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
vc(a,b){var s=B.d.aO(a),r=A.zm(s,b),q=A.zm(s+1,b),p=B.d.K(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
zl(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
EQ(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
F5(a){var s,r,q,p,o,n,m,l=B.k.aH(a,null),k=t.f
if(!k.b(l))throw A.d(B.ff)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.o(s,t.P)
for(o=0;o<14;++o){n=B.ip[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.o(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.d(A.a9('text.json section "'+n+'" must be an object',null,null))}return p},
Ft(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaK(a)
s=new A.fC()
s.d8((b^274953^c)>>>0)
r=s.aJ(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.vs.prototype={}
J.jT.prototype={
a_(a,b){return a===b},
gL(a){return A.hJ(a)},
p(a){return"Instance of '"+A.km(a)+"'"},
ga1(a){return A.d3(A.w8(this))}}
J.jW.prototype={
p(a){return String(a)},
gL(a){return a?519018:218159},
ga1(a){return A.d3(t.y)},
$iaf:1,
$in:1}
J.hs.prototype={
a_(a,b){return null==b},
p(a){return"null"},
gL(a){return 0},
$iaf:1,
$iay:1}
J.hu.prototype={$ia4:1}
J.dO.prototype={
gL(a){return 0},
ga1(a){return B.kU},
p(a){return String(a)}}
J.kh.prototype={}
J.dV.prototype={}
J.dh.prototype={
p(a){var s=a[$.zD()]
if(s==null)s=a[$.e9()]
if(s==null)return this.jZ(a)
return"JavaScript function for "+J.d6(s)},
$iej:1}
J.fi.prototype={
gL(a){return 0},
p(a){return String(a)}}
J.fj.prototype={
gL(a){return 0},
p(a){return String(a)}}
J.u.prototype={
cE(a,b){return new A.aS(a,A.H(a).i("@<1>").I(b).i("aS<1,2>"))},
l(a,b){A.H(a).c.a(b)
a.$flags&1&&A.bH(a,29)
a.push(b)},
on(a,b){var s
a.$flags&1&&A.bH(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.xt(b,null))
return a.splice(b,1)[0]},
a7(a,b){var s
a.$flags&1&&A.bH(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.H(a).i("p<1>").a(b)
a.$flags&1&&A.bH(a,"addAll",2)
if(Array.isArray(b)){this.ks(a,b)
return}for(s=J.S(b);s.m();)a.push(s.gn())},
ks(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ap(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.bH(a,"clear","clear")
a.length=0},
ca(a,b,c){var s=A.H(a)
return new A.R(a,s.I(c).i("1(2)").a(b),s.i("@<1>").I(c).i("R<1,2>"))},
a6(a,b){var s,r=A.cM(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bp(a,b,c,d){var s,r,q
d.a(b)
A.H(a).I(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ap(a))}return r},
aZ(a,b,c){var s,r,q,p=A.H(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.ap(a))}if(c!=null)return c.$0()
throw A.d(A.cr())},
ai(a,b){return this.aZ(a,b,null)},
Y(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aL(a,b,c){var s=a.length
if(b>s)throw A.d(A.aU(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aU(c,b,s,"end",null))
if(b===c)return A.e([],A.H(a))
return A.e(a.slice(b,c),A.H(a))},
gO(a){if(a.length>0)return a[0]
throw A.d(A.cr())},
gU(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cr())},
gaK(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cr())
throw A.d(A.x8())},
N(a,b){var s,r
A.H(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.ap(a))}return!1},
a2(a,b){var s,r
A.H(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.ap(a))}return!0},
S(a,b){var s,r,q,p,o,n=A.H(a)
n.i("l(1,1)?").a(b)
a.$flags&2&&A.bH(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.DR()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.am()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.h0(b,2))
if(p>0)this.lG(a,p)},
X(a){return this.S(a,null)},
lG(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d5(a,b){var s,r,q,p
a.$flags&2&&A.bH(a,"shuffle")
s=a.length
while(s>1){r=b.aJ(s);--s
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
gM(a){return a.length===0},
gV(a){return a.length!==0},
p(a){return A.vq(a,"[","]")},
gt(a){return new J.ea(a,a.length,A.H(a).i("ea<1>"))},
gL(a){return A.hJ(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.bH(a,"set length","change the length of")
if(b<0)throw A.d(A.aU(b,0,null,"newLength",null))
if(b>a.length)A.H(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.uB(a,b))
return a[b]},
k(a,b,c){A.H(a).c.a(c)
a.$flags&2&&A.bH(a)
if(!(b>=0&&b<a.length))throw A.d(A.uB(a,b))
a[b]=c},
eP(a,b){return new A.cx(a,b.i("cx<0>"))},
iO(a,b){var s
A.H(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga1(a){return A.d3(A.H(a))},
$iQ:1,
$ip:1,
$iC:1}
J.jU.prototype={
oM(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.km(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.oM.prototype={}
J.ea.prototype={
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
J.ep.prototype={
F(a,b){var s
A.aE(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc6(b)
if(this.gc6(a)===s)return 0
if(this.gc6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc6(a){return a===0?1/a<0:a<0},
aR(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aX(""+a+".toInt()"))},
mp(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aX(""+a+".ceil()"))},
aO(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aX(""+a+".floor()"))},
aF(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aX(""+a+".round()"))},
oG(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
K(a,b,c){if(this.F(b,c)>0)throw A.d(A.ws(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
bt(a,b){var s
if(b>20)throw A.d(A.aU(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc6(a))return"-"+s
return s},
oL(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aU(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.i(A.aX("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.f(p,1)
s=p[1]
if(3>=r)return A.f(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a4("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL(a){var s,r,q,p,o=a|0
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
k0(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h4(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.h4(a,b)},
h4(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aX("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
dE(a,b){var s
if(a>0)s=this.cA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lN(a,b){if(0>b)throw A.d(A.ws(b))
return this.cA(a,b)},
cA(a,b){return b>31?0:a>>>b},
ga1(a){return A.d3(t.o)},
$ib0:1,
$iA:1,
$ib9:1}
J.hr.prototype={
ga1(a){return A.d3(t.S)},
$iaf:1,
$il:1}
J.jX.prototype={
ga1(a){return A.d3(t.i)},
$iaf:1}
J.dN.prototype={
hh(a,b){return new A.lE(b,a,0)},
jV(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.ht){s=b.e
s=!(s==null?b.e=b.kM():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.kT(a,b)}},
bM(a,b,c,d){var s=A.hK(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kT(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.A1(b,a),s=s.gt(s),r=0,q=1;s.m();){p=s.gn()
o=p.gf2()
n=p.gdT()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.E(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.be(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aU(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.ac(a,b,0)},
E(a,b,c){return a.substring(b,A.hK(b,c,a.length))},
be(a,b){return this.E(a,b,null)},
bc(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.Bc(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.Bd(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a4(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.e0)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ob(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a4(c,s)+a},
cQ(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aU(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bF(a,b){return this.cQ(a,b,0)},
q(a,b){return A.FC(a,b,0)},
F(a,b){var s
A.x(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gL(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga1(a){return A.d3(t.N)},
gu(a){return a.length},
$iaf:1,
$ib0:1,
$ipt:1,
$ij:1}
A.dY.prototype={
gt(a){return new A.h9(J.S(this.gaT()),A.q(this).i("h9<1,2>"))},
gu(a){return J.c7(this.gaT())},
gM(a){return J.vl(this.gaT())},
gV(a){return J.A5(this.gaT())},
Y(a,b){return A.q(this).y[1].a(J.m9(this.gaT(),b))},
gO(a){return A.q(this).y[1].a(J.wP(this.gaT()))},
q(a,b){return J.wO(this.gaT(),b)},
p(a){return J.d6(this.gaT())}}
A.h9.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.ed.prototype={
gaT(){return this.a}}
A.ic.prototype={$iQ:1}
A.ia.prototype={
h(a,b){return this.$ti.y[1].a(J.aF(this.a,b))},
k(a,b,c){var s=this.$ti
J.bI(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.A7(this.a,b)},
l(a,b){var s=this.$ti
J.h5(this.a,s.c.a(s.y[1].a(b)))},
S(a,b){var s
this.$ti.i("l(2,2)?").a(b)
s=b==null?null:new A.rD(this,b)
J.A8(this.a,s)},
$iQ:1,
$iC:1}
A.rD.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("l(1,1)")}}
A.aS.prototype={
cE(a,b){return new A.aS(this.a,this.$ti.i("@<1>").I(b).i("aS<1,2>"))},
gaT(){return this.a}}
A.eq.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dG.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.qd.prototype={}
A.Q.prototype={}
A.a5.prototype={
gt(a){var s=this
return new A.aT(s,s.gu(s),A.q(s).i("aT<a5.E>"))},
gM(a){return this.gu(this)===0},
gO(a){if(this.gu(this)===0)throw A.d(A.cr())
return this.Y(0,0)},
q(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.a3(r.Y(0,s),b))return!0
if(q!==r.gu(r))throw A.d(A.ap(r))}return!1},
a2(a,b){var s,r,q=this
A.q(q).i("n(a5.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.Y(0,r)))return!1
if(s!==q.gu(q))throw A.d(A.ap(q))}return!0},
N(a,b){var s,r,q=this
A.q(q).i("n(a5.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.Y(0,r)))return!0
if(s!==q.gu(q))throw A.d(A.ap(q))}return!1},
a6(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.Y(0,0))
if(o!==p.gu(p))throw A.d(A.ap(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.Y(0,q))
if(o!==p.gu(p))throw A.d(A.ap(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.Y(0,q))
if(o!==p.gu(p))throw A.d(A.ap(p))}return r.charCodeAt(0)==0?r:r}},
cY(a,b){return this.jY(0,A.q(this).i("n(a5.E)").a(b))},
ca(a,b,c){var s=A.q(this)
return new A.R(this,s.I(c).i("1(a5.E)").a(b),s.i("@<a5.E>").I(c).i("R<1,2>"))},
bO(a,b){var s=A.q(this).i("a5.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bN(a){return this.bO(0,!0)},
bs(a){var s,r=this,q=A.vv(A.q(r).i("a5.E"))
for(s=0;s<r.gu(r);++s)q.l(0,r.Y(0,s))
return q}}
A.hY.prototype={
gl_(){var s=J.c7(this.a),r=this.c
if(r==null||r>s)return s
return r},
glQ(){var s=J.c7(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.c7(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
Y(a,b){var s=this,r=s.glQ()+b
if(b<0||r>=s.gl_())throw A.d(A.oD(b,s.gu(0),s,"index"))
return J.m9(s.a,r)},
bO(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aA(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xa(0,n):J.x9(0,n)}r=A.cM(s,m.Y(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.Y(n,o+q))
if(m.gu(n)<l)throw A.d(A.ap(p))}return r},
bN(a){return this.bO(0,!0)}}
A.aT.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aA(q),o=p.gu(q)
if(r.b!==o)throw A.d(A.ap(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.Y(q,s);++r.c
return!0},
$iab:1}
A.ct.prototype={
gt(a){return new A.hz(J.S(this.a),this.b,A.q(this).i("hz<1,2>"))},
gu(a){return J.c7(this.a)},
gM(a){return J.vl(this.a)},
gO(a){return this.b.$1(J.wP(this.a))},
Y(a,b){return this.b.$1(J.m9(this.a,b))}}
A.db.prototype={$iQ:1}
A.hz.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.R.prototype={
gu(a){return J.c7(this.a)},
Y(a,b){return this.b.$1(J.m9(this.a,b))}}
A.M.prototype={
gt(a){return new A.T(J.S(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hi.prototype={
gt(a){return new A.hj(J.S(this.a),this.b,B.dT,this.$ti.i("hj<1,2>"))}}
A.hj.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.S(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iab:1}
A.hg.prototype={
m(){return!1},
gn(){throw A.d(A.cr())},
$iab:1}
A.cx.prototype={
gt(a){return new A.i5(J.S(this.a),this.$ti.i("i5<1>"))}}
A.i5.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.aq.prototype={
su(a,b){throw A.d(A.aX("Cannot change the length of a fixed-length list"))},
l(a,b){A.bR(a).i("aq.E").a(b)
throw A.d(A.aX("Cannot add to a fixed-length list"))}}
A.cV.prototype={
k(a,b,c){A.q(this).i("cV.E").a(c)
throw A.d(A.aX("Cannot modify an unmodifiable list"))},
su(a,b){throw A.d(A.aX("Cannot change the length of an unmodifiable list"))},
l(a,b){A.q(this).i("cV.E").a(b)
throw A.d(A.aX("Cannot add to an unmodifiable list"))},
S(a,b){A.q(this).i("l(cV.E,cV.E)?").a(b)
throw A.d(A.aX("Cannot modify an unmodifiable list"))}}
A.fy.prototype={}
A.hQ.prototype={
gu(a){return J.c7(this.a)},
Y(a,b){var s=this.a,r=J.aA(s)
return r.Y(s,r.gu(s)-1-b)}}
A.iI.prototype={}
A.aJ.prototype={$r:"+(1,2)",$s:1}
A.it.prototype={$r:"+influence,light(1,2)",$s:2}
A.az.prototype={$r:"+(1,2,3)",$s:3}
A.iu.prototype={$r:"+(1,2,3,4)",$s:4}
A.hb.prototype={}
A.fa.prototype={
gM(a){return this.gu(this)===0},
gV(a){return this.gu(this)!==0},
p(a){return A.vw(this)},
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
A.Au()},
gH(){return new A.ch(this.nc(),A.q(this).i("ch<P<1,2>>"))},
nc(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gH(a,b,c){if(b===1){p.push(c)
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
bH(a,b,c,d){var s=A.o(c,d)
this.aq(0,new A.n8(this,A.q(this).I(c).I(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.n8.prototype={
$2(a,b){var s=A.q(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.q(this.a).i("~(1,2)")}}
A.a6.prototype={
gu(a){return this.b.length},
gfD(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
aq(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfD()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gZ(){return new A.eL(this.gfD(),this.$ti.i("eL<1>"))},
gaA(){return new A.eL(this.b,this.$ti.i("eL<2>"))}}
A.eL.prototype={
gu(a){return this.a.length},
gM(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.eM(s,s.length,this.$ti.i("eM<1>"))}}
A.eM.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cG.prototype={
bz(){var s=this,r=s.$map
if(r==null){r=new A.hv(s.$ti.i("hv<1,2>"))
A.zf(s.a,r)
s.$map=r}return r},
R(a){return this.bz().R(a)},
h(a,b){return this.bz().h(0,b)},
aq(a,b){this.$ti.i("~(1,2)").a(b)
this.bz().aq(0,b)},
gZ(){var s=this.bz()
return new A.ae(s,A.q(s).i("ae<1>"))},
gaA(){var s=this.bz()
return new A.ar(s,A.q(s).i("ar<2>"))},
gu(a){return this.bz().a}}
A.hc.prototype={
l(a,b){A.q(this).c.a(b)
A.Av()}}
A.aG.prototype={
gu(a){return this.b},
gM(a){return this.b===0},
gV(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eM(s,s.length,r.$ti.i("eM<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bs(a){return A.k1(this,this.$ti.c)}}
A.pF.prototype={
$0(){return B.d.aO(1000*this.a.now())},
$S:28}
A.hR.prototype={}
A.r6.prototype={
aQ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hF.prototype={
p(a){return"Null check operator used on a null value"}}
A.jY.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kI.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pm.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hh.prototype={}
A.iw.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icS:1}
A.dF.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.zB(r==null?"unknown":r)+"'"},
ga1(a){var s=A.wu(this)
return A.d3(s==null?A.bR(this):s)},
$iej:1,
goW(){return this},
$C:"$1",
$R:1,
$D:null}
A.jf.prototype={$C:"$0",$R:0}
A.jg.prototype={$C:"$2",$R:2}
A.kE.prototype={}
A.kB.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.zB(s)+"'"}}
A.f5.prototype={
a_(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.f5))return!1
return this.$_target===b.$_target&&this.a===b.a},
gL(a){return(A.m6(this.a)^A.hJ(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.km(this.a)+"'")}}
A.kt.prototype={
p(a){return"RuntimeError: "+this.a}}
A.ca.prototype={
gu(a){return this.a},
gM(a){return this.a===0},
gV(a){return this.a!==0},
gZ(){return new A.ae(this,A.q(this).i("ae<1>"))},
gaA(){return new A.ar(this,A.q(this).i("ar<2>"))},
gH(){return new A.I(this,A.q(this).i("I<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nu(a)},
nu(a){var s=this.d
if(s==null)return!1
return this.c5(s[this.c4(a)],a)>=0},
J(a,b){A.q(this).i("Y<1,2>").a(b).aq(0,new A.oV(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nv(b)},
nv(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c4(a)]
r=this.c5(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.f4(s==null?q.b=q.dv():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.f4(r==null?q.c=q.dv():r,b,c)}else q.nx(b,c)},
nx(a,b){var s,r,q,p,o=this,n=A.q(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dv()
r=o.c4(a)
q=s[r]
if(q==null)s[r]=[o.da(a,b)]
else{p=o.c5(q,a)
if(p>=0)q[p].b=b
else q.push(o.da(a,b))}},
cb(a,b){var s,r,q=this,p=A.q(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a7(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.kq(this.c,b)
else return this.nw(b)},
nw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c4(a)
r=n[s]
q=o.c5(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f5(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d9()}},
aq(a,b){var s,r,q=this
A.q(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ap(q))
s=s.c}},
f4(a,b,c){var s,r=A.q(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.da(b,c)
else s.b=c},
kq(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f5(s)
delete a[b]
return s.b},
d9(){this.r=this.r+1&1073741823},
da(a,b){var s=this,r=A.q(s),q=new A.p2(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d9()
return q},
f5(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d9()},
c4(a){return J.ax(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.vw(this)},
dv(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ivu:1}
A.oV.prototype={
$2(a,b){var s=this.a,r=A.q(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.q(this.a).i("~(1,2)")}}
A.p2.prototype={}
A.ae.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cb(s,s.r,s.e,this.$ti.i("cb<1>"))},
q(a,b){return this.a.R(b)}}
A.cb.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iab:1}
A.ar.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gt(a){var s=this.a
return new A.ah(s,s.r,s.e,this.$ti.i("ah<1>"))}}
A.ah.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iab:1}
A.I.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cs(s,s.r,s.e,this.$ti.i("cs<1,2>"))}}
A.cs.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iab:1}
A.hv.prototype={
c4(a){return A.F0(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.uG.prototype={
$1(a){return this.a(a)},
$S:11}
A.uH.prototype={
$2(a,b){return this.a(a,b)},
$S:144}
A.uI.prototype={
$1(a){return this.a(A.x(a))},
$S:29}
A.c1.prototype={
ga1(a){return A.d3(this.fz())},
fz(){return A.Fa(this.$r,this.cr())},
p(a){return this.ha(!1)},
ha(a){var s,r,q,p,o,n=this.l4(),m=this.cr(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.xq(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
l4(){var s,r=this.$s
while($.t6.length<=r)B.a.l($.t6,null)
s=$.t6[r]
if(s==null){s=this.kL()
B.a.k($.t6,r,s)}return s},
kL(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.jV(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.al(j,k)}}
A.eP.prototype={
cr(){return[this.a,this.b]},
a_(a,b){if(b==null)return!1
return b instanceof A.eP&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gL(a){return A.cv(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.fD.prototype={
cr(){return[this.a,this.b,this.c]},
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.fD&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gL(a){var s=this
return A.cv(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fE.prototype={
cr(){return this.a},
a_(a,b){if(b==null)return!1
return b instanceof A.fE&&this.$s===b.$s&&A.Cw(this.a,b.a)},
gL(a){return A.cv(this.$s,A.Bp(this.a),B.f,B.f,B.f,B.f)}}
A.ht.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gln(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xe(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kM(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hh(a,b){return new A.l0(this,b,0)},
l3(a,b){var s,r=this.gln()
if(r==null)r=A.eS(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.ll(s)},
$ipt:1,
$iBD:1}
A.ll.prototype={
gf2(){return this.b.index},
gdT(){var s=this.b
return s.index+s[0].length},
$ifm:1,
$ihL:1}
A.l0.prototype={
gt(a){return new A.l1(this.a,this.b,this.c)}}
A.l1.prototype={
gn(){var s=this.d
return s==null?t.lg.a(s):s},
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
A.hX.prototype={
gdT(){return this.a+this.c.length},
$ifm:1,
gf2(){return this.a}}
A.lE.prototype={
gt(a){return new A.lF(this.a,this.b,this.c)},
gO(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hX(r,s)
throw A.d(A.cr())}}
A.lF.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hX(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.rE.prototype={
dB(){var s=this.b
if(s===this)throw A.d(new A.eq("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a7(""))
return s}}
A.dP.prototype={
ga1(a){return B.kN},
hj(a,b,c){A.yt(a,b,c)
return new Float32Array(a,b,c)},
$iaf:1,
$idP:1}
A.fn.prototype={$ifn:1}
A.hD.prototype={
gmi(a){if(((a.$flags|0)&2)!==0)return new A.tc(a.buffer)
else return a.buffer},
lf(a,b,c,d){var s=A.aU(b,0,c,d,null)
throw A.d(s)},
fh(a,b,c,d){if(b>>>0!==b||b>c)this.lf(a,b,c,d)}}
A.tc.prototype={
hj(a,b,c){var s=A.Bm(this.a,b,c)
s.$flags=3
return s}}
A.k7.prototype={
ga1(a){return B.kO},
$iaf:1}
A.b2.prototype={
gu(a){return a.length},
fZ(a,b,c,d,e){var s,r,q=a.length
this.fh(a,b,q,"start")
this.fh(a,c,q,"end")
if(b>c)throw A.d(A.aU(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.y(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibU:1}
A.hB.prototype={
h(a,b){A.dx(b,a,a.length)
return a[b]},
k(a,b,c){A.by(c)
a.$flags&2&&A.bH(a)
A.dx(b,a,a.length)
a[b]=c},
d3(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bH(a,5)
this.fZ(a,b,c,d,0)
return},
$iQ:1,
$ip:1,
$iC:1}
A.hC.prototype={
k(a,b,c){A.c(c)
a.$flags&2&&A.bH(a)
A.dx(b,a,a.length)
a[b]=c},
jF(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bH(a,5)
this.fZ(a,b,c,d,e)
return},
$iQ:1,
$ip:1,
$iC:1}
A.hA.prototype={
ga1(a){return B.kP},
aL(a,b,c){return new Float32Array(a.subarray(b,A.Dh(b,c,a.length)))},
$iaf:1,
$inH:1}
A.k8.prototype={
ga1(a){return B.kQ},
$iaf:1}
A.k9.prototype={
ga1(a){return B.kR},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.ka.prototype={
ga1(a){return B.kS},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.kb.prototype={
ga1(a){return B.kT},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.kc.prototype={
ga1(a){return B.kW},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1,
$ivK:1}
A.kd.prototype={
ga1(a){return B.kX},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1}
A.et.prototype={
ga1(a){return B.kY},
gu(a){return a.length},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1,
$iet:1}
A.hE.prototype={
ga1(a){return B.kZ},
gu(a){return a.length},
h(a,b){A.dx(b,a,a.length)
return a[b]},
$iaf:1,
$ii0:1}
A.im.prototype={}
A.io.prototype={}
A.ip.prototype={}
A.iq.prototype={}
A.cw.prototype={
i(a){return A.iA(v.typeUniverse,this,a)},
I(a){return A.y4(v.typeUniverse,this,a)}}
A.le.prototype={}
A.lI.prototype={
p(a){return A.bF(this.a,null)}}
A.lc.prototype={
p(a){return this.a}}
A.fJ.prototype={$idq:1}
A.rz.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:31}
A.ry.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:134}
A.rA.prototype={
$0(){this.a.$0()},
$S:12}
A.rB.prototype={
$0(){this.a.$0()},
$S:12}
A.t9.prototype={
kp(a,b){if(self.setTimeout!=null)self.setTimeout(A.h0(new A.ta(this,b),0),a)
else throw A.d(A.aX("`setTimeout()` not found."))}}
A.ta.prototype={
$0(){this.b.$0()},
$S:0}
A.l2.prototype={
dI(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.df(a)
else{s=r.a
if(q.i("bT<1>").b(a))s.fg(a)
else s.co(a)}},
dJ(a,b){var s=this.a
if(this.b)s.bg(new A.aZ(a,b))
else s.ck(new A.aZ(a,b))}}
A.to.prototype={
$1(a){return this.a.$2(0,a)},
$S:17}
A.tp.prototype={
$2(a,b){this.a.$2(1,new A.hh(a,t.l.a(b)))},
$S:62}
A.uw.prototype={
$2(a,b){this.a(A.c(a),b)},
$S:70}
A.cy.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lI(a,b){var s,r,q
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
o.d=null}q=o.lI(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.y_
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
o.a=A.y_
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
oY(a){var s,r,q=this
if(a instanceof A.ch){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.S(a)
return 2}},
$iab:1}
A.ch.prototype={
gt(a){return new A.cy(this.a(),this.$ti.i("cy<1>"))}}
A.aZ.prototype={
p(a){return A.w(this.a)},
$iak:1,
gbP(){return this.b}}
A.nP.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fl(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.cz(p)
l=r
o=q
n=A.w9(l,o)
l=new A.aZ(l,o)
m.b.bg(l)
return}m.b.fl(s)}},
$S:0}
A.nS.prototype={
$2(a,b){var s,r,q=this
A.eS(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bg(new A.aZ(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bg(new A.aZ(r,s))}},
$S:71}
A.nR.prototype={
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
J.h5(q,l)}k.c.co(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bg(new A.aZ(q,o))}},
$S(){return this.d.i("ay(0)")}}
A.l6.prototype={
dJ(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.ck(A.DQ(a,b))},
hm(a){return this.dJ(a,null)}}
A.i7.prototype={
dI(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.df(r.i("1/").a(a))}}
A.eI.prototype={
nJ(a){if((this.c&15)!==6)return!0
return this.b.b.eJ(t.iW.a(this.d),a.a,t.y,t.K)},
nr(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.oI(q,m,a.b,o,n,t.l)
else p=l.eJ(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ag(s))){if((r.c&1)!==0)throw A.d(A.y("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.y("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.av.prototype={
eK(a,b,c){var s,r,q=this.$ti
q.I(c).i("1/(2)").a(a)
s=$.ao
if(s===B.w){if(!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.an(b,"onError",u.c))}else{c.i("@<0/>").I(q.c).i("1(2)").a(a)
b=A.El(b,s)}r=new A.av(s,c.i("av<0>"))
this.dd(new A.eI(r,3,a,b,q.i("@<1>").I(c).i("eI<1,2>")))
return r},
h8(a,b,c){var s,r=this.$ti
r.I(c).i("1/(2)").a(a)
s=new A.av($.ao,c.i("av<0>"))
this.dd(new A.eI(s,19,a,b,r.i("@<1>").I(c).i("eI<1,2>")))
return s},
lL(a){this.a=this.a&1|16
this.c=a},
cn(a){this.a=a.a&30|this.a&1
this.c=a.c},
dd(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.dd(a)
return}r.cn(s)}A.m2(null,null,r.b,t.O.a(new A.rH(r,a)))}},
fN(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.fN(a)
return}m.cn(n)}l.a=m.cw(a)
A.m2(null,null,m.b,t.O.a(new A.rM(l,m)))}},
bS(){var s=t.F.a(this.c)
this.c=null
return this.cw(s)},
cw(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fl(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bT<1>").b(a))A.rK(a,r,!0)
else{s=r.bS()
q.c.a(a)
r.a=8
r.c=a
A.eJ(r,s)}},
co(a){var s,r=this
r.$ti.c.a(a)
s=r.bS()
r.a=8
r.c=a
A.eJ(r,s)},
kK(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bS()
q.cn(a)
A.eJ(q,r)},
bg(a){var s=this.bS()
this.lL(a)
A.eJ(this,s)},
df(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bT<1>").b(a)){this.fg(a)
return}this.kw(a)},
kw(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.m2(null,null,s.b,t.O.a(new A.rJ(s,a)))},
fg(a){A.rK(this.$ti.i("bT<1>").a(a),this,!1)
return},
ck(a){this.a^=2
A.m2(null,null,this.b,t.O.a(new A.rI(this,a)))},
$ibT:1}
A.rH.prototype={
$0(){A.eJ(this.a,this.b)},
$S:0}
A.rM.prototype={
$0(){A.eJ(this.b,this.a.a)},
$S:0}
A.rL.prototype={
$0(){A.rK(this.a.a,this.b,!0)},
$S:0}
A.rJ.prototype={
$0(){this.a.co(this.b)},
$S:0}
A.rI.prototype={
$0(){this.a.bg(this.b)},
$S:0}
A.rP.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.oH(t.mY.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.cz(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mr(q)
n=k.a
n.c=new A.aZ(q,o)
q=n}q.b=!0
return}if(j instanceof A.av&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.av){m=k.b.a
l=new A.av(m.b,m.$ti)
j.eK(new A.rQ(l,m),new A.rR(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rQ.prototype={
$1(a){this.a.kK(this.b)},
$S:31}
A.rR.prototype={
$2(a,b){A.eS(a)
t.l.a(b)
this.a.bg(new A.aZ(a,b))},
$S:72}
A.rO.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eJ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ag(l)
r=A.cz(l)
q=s
p=r
if(p==null)p=A.mr(q)
o=this.a
o.c=new A.aZ(q,p)
o.b=!0}},
$S:0}
A.rN.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nJ(s)&&p.a.e!=null){p.c=p.a.nr(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.cz(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mr(p)
m=l.b
m.c=new A.aZ(p,n)
p=m}p.b=!0}},
$S:0}
A.l3.prototype={}
A.lD.prototype={}
A.iH.prototype={$ixS:1}
A.lv.prototype={
oJ(a){var s,r,q
t.O.a(a)
try{if(B.w===$.ao){a.$0()
return}A.z0(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.cz(q)
A.wi(A.eS(s),t.l.a(r))}},
hl(a){return new A.t7(this,t.O.a(a))},
oH(a,b){b.i("0()").a(a)
if($.ao===B.w)return a.$0()
return A.z0(null,null,this,a,b)},
eJ(a,b,c,d){c.i("@<0>").I(d).i("1(2)").a(a)
d.a(b)
if($.ao===B.w)return a.$1(b)
return A.Eq(null,null,this,a,b,c,d)},
oI(a,b,c,d,e,f){d.i("@<0>").I(e).I(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ao===B.w)return a.$2(b,c)
return A.Ep(null,null,this,a,b,c,d,e,f)},
ja(a,b,c,d){return b.i("@<0>").I(c).I(d).i("1(2,3)").a(a)}}
A.t7.prototype={
$0(){return this.a.oJ(this.b)},
$S:0}
A.um.prototype={
$0(){A.AT(this.a,this.b)},
$S:0}
A.ie.prototype={
gu(a){return this.a},
gM(a){return this.a===0},
gV(a){return this.a!==0},
gZ(){return new A.eK(this,this.$ti.i("eK<1>"))},
gaA(){var s=this.$ti
return A.k2(new A.eK(this,s.i("eK<1>")),new A.rT(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kP(a)},
kP(a){var s=this.d
if(s==null)return!1
return this.bh(this.fw(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xU(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xU(q,b)
return r}else return this.l7(b)},
l7(a){var s,r,q=this.d
if(q==null)return null
s=this.fw(q,a)
r=this.bh(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.f9(s==null?m.b=A.vO():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.f9(r==null?m.c=A.vO():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.vO()
p=A.m6(b)&1073741823
o=q[p]
if(o==null){A.vP(q,p,[b,c]);++m.a
m.e=null}else{n=m.bh(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aq(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fj()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.ap(m))}},
fj(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cM(i.a,null,!1,t.z)
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
f9(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.vP(a,b,c)},
fw(a,b){return a[A.m6(b)&1073741823]}}
A.rT.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.ih.prototype={
bh(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eK.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.ig(s,s.fj(),this.$ti.i("ig<1>"))},
q(a,b){return this.a.R(b)}}
A.ig.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.ap(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.cg.prototype={
fI(){return new A.cg(A.q(this).i("cg<1>"))},
gt(a){var s=this,r=new A.eN(s,s.r,A.q(s).i("eN<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gM(a){return this.a===0},
gV(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.kO(b)},
kO(a){var s=this.d
if(s==null)return!1
return this.bh(s[this.dk(a)],a)>=0},
gO(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.q(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.q(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.f8(s==null?q.b=A.vQ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.f8(r==null?q.c=A.vQ():r,b)}else return q.kr(b)},
kr(a){var s,r,q,p=this
A.q(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.vQ()
r=p.dk(a)
q=s[r]
if(q==null)s[r]=[p.dw(a)]
else{if(p.bh(q,a)>=0)return!1
q.push(p.dw(a))}return!0},
a7(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fO(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fO(s.c,b)
else return s.lF(b)},
lF(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dk(a)
r=n[s]
q=o.bh(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hd(p)
return!0},
l5(a,b){var s,r,q,p,o,n=this,m=A.q(n)
m.i("n(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.d(A.ap(n))
if(!0===o)n.a7(0,r)}},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.du()}},
f8(a,b){A.q(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.dw(b)
return!0},
fO(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.hd(s)
delete a[b]
return!0},
du(){this.r=this.r+1&1073741823},
dw(a){var s,r=this,q=new A.lk(A.q(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.du()
return q},
hd(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.du()},
dk(a){return J.ax(a)&1073741823},
bh(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$ixk:1}
A.lk.prototype={}
A.eN.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ap(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.p3.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:101}
A.W.prototype={
gt(a){return new A.aT(a,this.gu(a),A.bR(a).i("aT<W.E>"))},
Y(a,b){return this.h(a,b)},
gM(a){return this.gu(a)===0},
gV(a){return!this.gM(a)},
gO(a){if(this.gu(a)===0)throw A.d(A.cr())
return this.h(a,0)},
q(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.d(A.ap(a))}return!1},
a2(a,b){var s,r
A.bR(a).i("n(W.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.d(A.ap(a))}return!0},
N(a,b){var s,r
A.bR(a).i("n(W.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.d(A.ap(a))}return!1},
a6(a,b){var s
if(this.gu(a)===0)return""
s=A.vI("",a,b)
return s.charCodeAt(0)==0?s:s},
eP(a,b){return new A.cx(a,b.i("cx<0>"))},
ca(a,b,c){var s=A.bR(a)
return new A.R(a,s.I(c).i("1(W.E)").a(b),s.i("@<W.E>").I(c).i("R<1,2>"))},
l(a,b){var s
A.bR(a).i("W.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.k(a,s,b)},
cE(a,b){return new A.aS(a,A.bR(a).i("@<W.E>").I(b).i("aS<1,2>"))},
S(a,b){var s,r=A.bR(a)
r.i("l(W.E,W.E)?").a(b)
s=b==null?A.F_():b
A.kx(a,0,this.gu(a)-1,s,r.i("W.E"))},
nk(a,b,c,d){var s
A.bR(a).i("W.E?").a(d)
A.hK(b,c,this.gu(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.vq(a,"[","]")},
$iQ:1,
$ip:1,
$iC:1}
A.a8.prototype={
aq(a,b){var s,r,q,p=A.q(this)
p.i("~(a8.K,a8.V)").a(b)
for(s=this.gZ(),s=s.gt(s),p=p.i("a8.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gH(){return this.gZ().ca(0,new A.p4(this),A.q(this).i("P<a8.K,a8.V>"))},
bH(a,b,c,d){var s,r,q,p,o,n=A.q(this)
n.I(c).I(d).i("P<1,2>(a8.K,a8.V)").a(b)
s=A.o(c,d)
for(r=this.gZ(),r=r.gt(r),n=n.i("a8.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
m4(a){var s,r
for(s=J.S(A.q(this).i("p<P<a8.K,a8.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.gZ().q(0,a)},
gu(a){var s=this.gZ()
return s.gu(s)},
gM(a){var s=this.gZ()
return s.gM(s)},
gV(a){var s=this.gZ()
return s.gV(s)},
gaA(){return new A.ij(this,A.q(this).i("ij<a8.K,a8.V>"))},
p(a){return A.vw(this)},
$iY:1}
A.p4.prototype={
$1(a){var s=this.a,r=A.q(s)
r.i("a8.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a8.V").a(s)
return new A.P(a,s,r.i("P<a8.K,a8.V>"))},
$S(){return A.q(this.a).i("P<a8.K,a8.V>(a8.K)")}}
A.p5.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:36}
A.ij.prototype={
gu(a){var s=this.a
return s.gu(s)},
gM(a){var s=this.a
return s.gM(s)},
gV(a){var s=this.a
return s.gV(s)},
gO(a){var s=this.a,r=s.gZ()
r=s.h(0,r.gO(r))
return r==null?this.$ti.y[1].a(r):r},
gt(a){var s=this.a,r=s.gZ()
return new A.ik(r.gt(r),s,this.$ti.i("ik<1,2>"))}}
A.ik.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.iB.prototype={
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aX("Cannot modify unmodifiable map"))}}
A.fl.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.q(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
aq(a,b){this.a.aq(0,A.q(this).i("~(1,2)").a(b))},
gM(a){var s=this.a
return s.gM(s)},
gV(a){var s=this.a
return s.gV(s)},
gu(a){var s=this.a
return s.gu(s)},
gZ(){return this.a.gZ()},
p(a){return this.a.p(0)},
gaA(){return this.a.gaA()},
gH(){return this.a.gH()},
bH(a,b,c,d){return this.a.bH(0,A.q(this).I(c).I(d).i("P<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.dW.prototype={}
A.dm.prototype={
gM(a){return this.gu(this)===0},
gV(a){return this.gu(this)!==0},
J(a,b){var s
for(s=J.S(A.q(this).i("p<1>").a(b));s.m();)this.l(0,s.gn())},
dP(a){var s,r,q=this.bs(0)
for(s=this.gt(this);s.m();){r=s.gn()
if(a.q(0,r))q.a7(0,r)}return q},
p(a){return A.vq(this,"{","}")},
a2(a,b){var s
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
N(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gO(a){var s=this.gt(this)
if(!s.m())throw A.d(A.cr())
return s.gn()},
Y(a,b){var s,r
A.kp(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oD(b,b-r,this,"index"))},
$iQ:1,
$ip:1,
$idT:1}
A.iv.prototype={
dP(a){var s,r,q,p=this,o=p.fI()
for(s=A.ii(p,p.r,A.q(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bs(a){var s=this.fI()
s.J(0,this)
return s}}
A.lJ.prototype={
l(a,b){this.$ti.c.a(b)
return A.CI()}}
A.fz.prototype={
q(a,b){return this.a.q(0,b)},
gu(a){return this.a.a},
gt(a){var s=this.a
return A.ii(s,s.r,A.q(s).c)},
bs(a){return this.a.bs(0)}}
A.fK.prototype={}
A.iC.prototype={}
A.li.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lz(b):s}},
gu(a){return this.b==null?this.c.a:this.bw().length},
gM(a){return this.gu(0)===0},
gV(a){return this.gu(0)>0},
gZ(){if(this.b==null){var s=this.c
return new A.ae(s,A.q(s).i("ae<1>"))}return new A.lj(this)},
gaA(){var s,r=this
if(r.b==null){s=r.c
return new A.ar(s,A.q(s).i("ar<2>"))}return A.k2(r.bw(),new A.rV(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.x(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lW().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aq(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.aq(0,b)
s=o.bw()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tM(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.ap(o))}},
bw(){var s=t.mi.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
lW(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.o(t.N,t.z)
r=n.bw()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
lz(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tM(this.a[a])
return this.b[a]=s}}
A.rV.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:29}
A.lj.prototype={
gu(a){return this.a.gu(0)},
Y(a,b){var s=this.a
if(s.b==null)s=s.gZ().Y(0,b)
else{s=s.bw()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gZ()
s=s.gt(s)}else{s=s.bw()
s=new J.ea(s,s.length,A.H(s).i("ea<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tf.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:26}
A.te.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:26}
A.j9.prototype={
nN(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hK(a4,a5,a2)
s=$.zQ()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.uF(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.uF(a3.charCodeAt(g))
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
c=A.au(j)
g.a+=c
p=k
continue}}throw A.d(A.a9("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.E(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.wQ(a3,m,a5,n,l,r)
else{b=B.c.P(r-1,4)+1
if(b===1)throw A.d(A.a9(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bM(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.wQ(a3,m,a5,n,l,a)
else{b=B.c.P(a,4)
if(b===1)throw A.d(A.a9(a1,a3,a5))
if(b>1)a3=B.b.bM(a3,a5,a5,b===2?"==":"=")}return a3}}
A.mV.prototype={}
A.ee.prototype={}
A.jl.prototype={}
A.jv.prototype={}
A.hw.prototype={
p(a){var s=A.jw(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k_.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.jZ.prototype={
aH(a,b){var s=A.Ed(a,this.gn2().a)
return s},
ao(a,b){var s=A.Co(a,this.gna().b,null)
return s},
gna(){return B.hw},
gn2(){return B.hv}}
A.oX.prototype={}
A.oW.prototype={}
A.rX.prototype={
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.E(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.au(92)
s.a+=o
o=A.au(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.E(a,r,m)},
dh(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.k_(a,null))}B.a.l(s,a)},
cZ(a){var s,r,q,p,o=this
if(o.jk(a))return
o.dh(a)
try{s=o.b.$1(a)
if(!o.jk(s)){q=A.xg(a,null,o.gfM())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.xg(a,r,o.gfM())
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
return!0}else if(t.j.b(a)){q.dh(a)
q.oU(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dh(a)
r=q.oV(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
oU(a){var s,r,q=this.c
q.a+="["
s=J.aA(a)
if(s.gV(a)){this.cZ(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.cZ(s.h(a,r))}}q.a+="]"},
oV(a){var s,r,q,p,o,n,m=this,l={}
if(a.gM(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.cM(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aq(0,new A.rY(l,r))
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
A.rY.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:36}
A.rW.prototype={
gfM(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.kM.prototype={}
A.rb.prototype={
mz(a){return new A.td(this.a).kQ(t.J.a(a),0,null,!0)}}
A.td.prototype={
kQ(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.hK(b,c,J.c7(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.CZ(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.CY(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dl(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.D_(o)
l.b=0
throw A.d(A.a9(m,a,p+l.c))}return n},
dl(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.T(b+c,2)
r=q.dl(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dl(a,s,c,d)}return q.n1(a,b,c,d)},
n1(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bh(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
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
p=A.au(a[l])
e.a+=p}else{p=A.xC(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.au(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ef.prototype={
a_(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ef)if(this.a===b.a)s=this.b===b.b
return s},
gL(a){return A.cv(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
p(a){var s=this,r=A.Ay(A.BA(s)),q=A.jn(A.By(s)),p=A.jn(A.Bu(s)),o=A.jn(A.Bv(s)),n=A.jn(A.Bx(s)),m=A.jn(A.Bz(s)),l=A.wX(A.Bw(s)),k=s.b,j=k===0?"":A.wX(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib0:1}
A.dH.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.dH&&this.a===b.a},
gL(a){return B.c.gL(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.T(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.T(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.ob(B.c.p(o%1e6),6,"0")},
$ib0:1}
A.lb.prototype={
p(a){return this.A()},
$iE:1}
A.ak.prototype={
gbP(){return A.Bt(this)}}
A.j5.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jw(s)
return"Assertion failed"}}
A.dq.prototype={}
A.cm.prototype={
gdq(){return"Invalid argument"+(!this.a?"(s)":"")},
gdn(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gdq()+q+o
if(!s.a)return n
return n+s.gdn()+": "+A.jw(s.geu())},
geu(){return this.b}}
A.fr.prototype={
geu(){return A.vY(this.b)},
gdq(){return"RangeError"},
gdn(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.jQ.prototype={
geu(){return A.c(this.b)},
gdq(){return"RangeError"},
gdn(){if(A.c(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.i1.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kH.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fw.prototype={
p(a){return"Bad state: "+this.a}}
A.ji.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jw(s)+"."}}
A.kf.prototype={
p(a){return"Out of Memory"},
gbP(){return null},
$iak:1}
A.hV.prototype={
p(a){return"Stack Overflow"},
gbP(){return null},
$iak:1}
A.rF.prototype={
p(a){return"Exception: "+this.a}}
A.G.prototype={
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
k=""}return g+l+B.b.E(e,i,j)+k+"\n"+B.b.a4(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.p.prototype={
cE(a,b){return A.Ao(this,A.q(this).i("p.E"),b)},
ca(a,b,c){var s=A.q(this)
return A.k2(this,s.I(c).i("1(p.E)").a(b),s.i("p.E"),c)},
cY(a,b){var s=A.q(this)
return new A.M(this,s.i("n(p.E)").a(b),s.i("M<p.E>"))},
eP(a,b){return new A.cx(this,b.i("cx<0>"))},
q(a,b){var s
for(s=this.gt(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
bp(a,b,c,d){var s,r
d.a(b)
A.q(this).I(d).i("1(1,p.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a2(a,b){var s
A.q(this).i("n(p.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a6(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.d6(q.gn())
if(!q.m())return s
r=b.gM(b)
if(r){r=s
do r+=J.d6(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.d6(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.q(this).i("n(p.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bO(a,b){var s=A.J(this,A.q(this).i("p.E"))
return s},
bN(a){return this.bO(0,!0)},
gu(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gM(a){return!this.gt(this).m()},
gV(a){return!this.gM(this)},
gO(a){var s=this.gt(this)
if(!s.m())throw A.d(A.cr())
return s.gn()},
gaK(a){var s,r=this.gt(this)
if(!r.m())throw A.d(A.cr())
s=r.gn()
if(r.m())throw A.d(A.x8())
return s},
aZ(a,b,c){var s,r=A.q(this)
r.i("n(p.E)").a(b)
r.i("p.E()?").a(c)
for(r=this.gt(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cr())},
ai(a,b){return this.aZ(0,b,null)},
Y(a,b){var s,r
A.kp(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oD(b,b-r,this,"index"))},
p(a){return A.Ba(this,"(",")")}}
A.P.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.ay.prototype={
gL(a){return A.F.prototype.gL.call(this,0)},
p(a){return"null"}}
A.F.prototype={$iF:1,
a_(a,b){return this===b},
gL(a){return A.hJ(this)},
p(a){return"Instance of '"+A.km(this)+"'"},
ga1(a){return A.m5(this)},
toString(){return this.p(this)}}
A.lG.prototype={
p(a){return""},
$icS:1}
A.qT.prototype={
gn8(){var s,r=this.b
if(r==null)r=$.pH.$0()
s=r-this.a
if($.wF()===1e6)return s
return s*1000}}
A.bh.prototype={
gu(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iBR:1}
A.ra.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.x(b)
s=B.b.bF(b,"=")
if(s===-1){if(b!=="")a.k(0,A.vV(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.E(b,0,s)
q=B.b.be(b,s+1)
p=this.a
a.k(0,A.vV(r,0,r.length,p,!0),A.vV(q,0,q.length,p,!0))}return a},
$S:158}
A.r9.prototype={
$2(a,b){throw A.d(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:56}
A.iD.prototype={
gh6(){var s,r,q,p,o=this,n=o.w
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
gL(a){var s,r=this,q=r.y
if(q===$){s=B.b.gL(r.gh6())
r.y!==$&&A.zA()
r.y=s
q=s}return q},
gaE(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.xK(s==null?"":s)
r.z!==$&&A.zA()
q=r.z=new A.dW(s,t.oP)}return q},
gjh(){return this.b},
ges(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.ac(s,"v",1))return B.b.E(s,1,s.length-1)
return s},
geA(){var s=this.d
return s==null?A.y5(this.a):s},
geC(){var s=this.f
return s==null?"":s},
giK(){var s=this.r
return s==null?"":s},
giL(){return this.c!=null},
giN(){return this.f!=null},
giM(){return this.r!=null},
p(a){return this.gh6()},
a_(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.geT())if(p.c!=null===b.giL())if(p.b===b.gjh())if(p.ges()===b.ges())if(p.geA()===b.geA())if(p.e===b.gj3()){r=p.f
q=r==null
if(!q===b.giN()){if(q)r=""
if(r===b.geC()){r=p.r
q=r==null
if(!q===b.giM()){s=q?"":r
s=s===b.giK()}}}}return s},
$ikK:1,
geT(){return this.a},
gj3(){return this.e}}
A.r8.prototype={
gjg(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.cQ(s,"?",m)
q=s.length
if(r>=0){p=A.iE(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.l7("data","",n,n,A.iE(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lz.prototype={
giL(){return this.c>0},
giN(){return this.f<this.r},
giM(){return this.r<this.a.length},
geT(){var s=this.w
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
geA(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.zn(B.b.E(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
gj3(){return B.b.E(this.a,this.e,this.f)},
geC(){var s=this.f,r=this.r
return s<r?B.b.E(this.a,s+1,r):""},
giK(){var s=this.r,r=this.a
return s<r.length?B.b.be(r,s+1):""},
gaE(){if(this.f>=this.r)return B.cG
return new A.dW(A.xK(this.geC()),t.oP)},
gL(a){var s=this.x
return s==null?this.x=B.b.gL(this.a):s},
a_(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ikK:1}
A.l7.prototype={}
A.pl.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.v8.prototype={
$1(a){return this.a.dI(this.b.i("0/?").a(a))},
$S:17}
A.v9.prototype={
$1(a){if(a==null)return this.a.hm(new A.pl(a===undefined))
return this.a.hm(a)},
$S:17}
A.uA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.yL(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.i(A.aU(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e6(!0,"isUtc",t.y)
return new A.ef(r,0,!0)}if(a instanceof RegExp)throw A.d(A.y("structured clone of RegExp",null))
if(a instanceof Promise)return A.aY(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.o(p,p)
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
for(s=J.aA(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:59}
A.lh.prototype={
aJ(a){if(a<=0||a>4294967296)throw A.d(A.xs(u.w+a))
return Math.random()*a>>>0},
cT(){return Math.random()},
$ivD:1}
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
l.b6()
l.b6()
l.b6()
l.b6()},
b6(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.T(o-n+(q-p)+(m-r),4294967296)>>>0},
aJ(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.xs(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b6()
return(p.a&s)>>>0}do{p.b6()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cT(){var s,r=this
r.b6()
s=r.a
r.b6()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ivD:1}
A.pK.prototype={
C(){var s,r=this
if(B.a.N(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.pL()))throw A.d(B.fs)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.eO)}}
A.pL.prototype={
$1(a){return A.c(a)<=0},
$S:27}
A.ew.prototype={
A(){return"QualityProfileKind."+this.b}}
A.ev.prototype={}
A.n6.prototype={}
A.n7.prototype={}
A.kk.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.O(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.I(q,A.q(q).i("I<1,2>")).gt(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.y("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.y("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.y("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.d(A.y("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.f8.prototype={}
A.jC.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gaj(0)||!k.b.gaj(0)||!k.r.gaj(0))throw A.d(A.y("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.y("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.y("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gaj(0)||r.gc7()<1e-12)A.i(A.y("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.i(A.y("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.y("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.i(A.y("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.i(A.y("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.y("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.i(A.y("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.i(A.y("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.nK.prototype={}
A.dl.prototype={
a_(a,b){if(b==null)return!1
return J.eZ(b)===A.m5(this)&&b instanceof A.dl&&this.a===b.a&&this.b===b.b},
gL(a){return A.cv(A.m5(this),this.a,this.b,B.f,B.f,B.f)}}
A.bn.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bi.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cu.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kg.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cp.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.em.prototype={
A(){return"HandleRejection."+this.b}}
A.jM.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.di.prototype={
gaj(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a_(a,b){if(b==null)return!1
return b instanceof A.di&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gL(a){return A.cv(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.np.prototype={}
A.kj.prototype={}
A.bt.prototype={}
A.va.prototype={
$2(a,b){var s,r=t.jX
r.a(a)
r.a(b)
s=B.d.F(b.a,a.a)
return s===0?B.c.F(a.b.a,b.b.a):s},
$S:68}
A.j4.prototype={
A(){return"AlphaMode."+this.b}}
A.es.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.y("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.y("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.y("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.vz("roughness",l.z)
A.vz("metallic",0)
A.vz("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aJ("uvScaleU",s),new A.aJ("uvScaleV",r),new A.aJ("uvOffsetU",0),new A.aJ("uvOffsetV",0),new A.aJ("tintR",l.c),new A.aJ("tintG",l.d),new A.aJ("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.y("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.d(A.y("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.y("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cX.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.bu.prototype={}
A.rc.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.T[s]
q=r.c
if(q<=0)throw A.d(A.y(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.y(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.iV.a(new A.rd())
for(p=B.a.gt(B.T),q=new A.T(p,q,t.mW);q.m();)if(p.gn().c!==4)throw A.d(A.y('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rd.prototype={
$1(a){return t.gm.a(a).a===B.dh},
$S:18}
A.cc.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.c.P(s,14)!==0)throw A.d(A.y("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.lZ()
r=n.c
if(r!=null){q=s/14|0
for(s=A.Bi(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.y("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gaj(0)&&s.b.gaj(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.y("MeshData.localBounds must be a valid AABB",null))},
lZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.iV,a3=t.kh,a4=new A.M(B.T,a2.a(new A.pa()),a3)
if(!a4.gt(0).m())return
s=new A.M(B.T,a2.a(new A.pb()),a3)
if(s.gu(0)!==1)throw A.d(A.y("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaK(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaK(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a2(A.e([j,h,g,f,e,d,c],p),new A.pc()))throw A.d(A.y("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.y("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.y("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.y("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.pa.prototype={
$1(a){return t.gm.a(a).a===B.dh},
$S:18}
A.pb.prototype={
$1(a){return t.gm.a(a).a===B.dg},
$S:18}
A.pc.prototype={
$1(a){return isFinite(A.by(a))},
$S:5}
A.pn.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.d(A.y("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.pp()))throw A.d(A.y("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.d(A.y("resource history does not match vhsOutput ownership",null))}}
A.pp.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.pD.prototype={}
A.ks.prototype={
iP(a){var s=this
if(s.d)A.i(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
bl(){if(this.d)return
this.d=!0
this.a=null}}
A.fd.prototype={
A(){return"DrawMode."+this.b}}
A.jb.prototype={
A(){return"BlendMode."+this.b}}
A.bq.prototype={}
A.kC.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.y("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.y("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.y("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jh.prototype={
A(){return"ColorEncoding."+this.b}}
A.jr.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.kq.prototype={
C(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dP(B.kr)
if(o.a!==0)A.i(A.an(o,r,"contains unknown pipeline features"))
if(q.a===B.b6&&p.gV(p))A.i(A.an(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.y("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.ez.prototype={
A(){return"RendererState."+this.b}}
A.aH.prototype={}
A.nM.prototype={
j2(a){var s=this.z.h(0,a)
return s==null?B.bY:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.k4.prototype={
ox(a){return this.a.bZ(a)}}
A.p8.prototype={
$3(a,b,c){return new A.cu(A.c(a),A.c(b),A.aQ(c))},
$S:80}
A.kJ.prototype={}
A.pd.prototype={
bi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.xQ(f,new A.jF(e.byteLength,B.c7,B.fO))
if(f.b!==B.h)A.i(A.m(g))
s=A.b(d.a)
r=f.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d_(f)
A.bv(f,p)
if(f.b!==B.h)A.i(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a2(t.S)
for(n=a.a,m=0;m<6;++m){l=B.T[m]
k=A.z7(l.a)
if(!o.l(0,k))continue
j=A.Dm(n,k,l)
if(f.b!==B.h)A.i(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.c(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.i(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.xQ(f,new A.jF(A.xn(i),B.c7,B.c6))
if(f.b!==B.h)A.i(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(h.a))
A.Cb(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kJ(d,h,p,f,e.length/14|0,!1)},
eH(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dM(B.aw,a))
this.b.bZ(a)
return s},
b1(a){var s,r,q=this.c.a7(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.b1(a)},
eF(){var s,r,q,p
for(s=this.b.bG(),r=s.$ti,s=new A.cy(s.a(),r.i("cy<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bi(p.b))}},
gc8(){return this.b.bG().bp(0,0,new A.pf(),t.S)}}
A.pe.prototype={
$3(a,b,c){return new A.bn(A.c(a),A.c(b),A.aQ(c))},
$S:84}
A.pf.prototype={
$2(a,b){var s,r
A.c(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.xn(s)
return a+r+s},
$S:86}
A.ce.prototype={}
A.dU.prototype={
A(){return"TextureResidencyStatus."+this.b}}
A.bX.prototype={}
A.r1.prototype={
cp(a){var s=this.a,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.r2(a)),r.i("M<1>")).gu(0)}}
A.r2.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:87}
A.r_.prototype={
og(a){var s,r,q,p,o,n,m,l,k,j,i
t.cZ.a(a)
s=A.o(t.N,t.oB)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.i(A.y("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.i(A.an(n,"handle","must be valid"))
if(s.R(o))throw A.d(A.y("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("ar<2>")
m=A.J(new A.ar(s,r),r.i("p.E"))
B.a.S(m,new A.r0())
r=t.lu
l=A.a2(r)
k=A.o(r,t.nM)
j=A.e([],t.ji)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.ly(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.bX(p,i))}r=l.a
return new A.r1(A.al(j,t.d),r)},
ly(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.h7(a,r)===s.d)return B.da
this.b.k(0,a,!0)
return B.d9}catch(q){if(A.ag(q) instanceof A.jM){s=this.b.h(0,a)===!0?B.dc:B.db
return s}else throw q}}}
A.r0.prototype={
$2(a,b){var s,r=t.oB
r.a(a)
r.a(b)
s=B.c.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:94}
A.du.prototype={}
A.kF.prototype={
aM(a){var s=this.a,r=A.vL(s,B.fR)
A.vM(s,r,0,a)
return r},
oN(a,b){var s,r,q,p=this,o=p.b,n=o.bZ(a),m=A.J(n.b,t.nh)
B.a.k(m,0,b)
s=n.a
o.jf(a,new A.du(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.vL(p.a,s)
o.k(0,r,q)}A.vM(p.a,q,0,b)},
h7(a,b){var s
this.b.bZ(a)
s=this.c.h(0,a.a)
return s==null?b:s},
ot(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.h7(a,s)},
oB(a){var s=this.e
s===$&&A.h()
return s},
oD(a){var s=this.f
s===$&&A.h()
return s},
ov(a){var s=this.r
s===$&&A.h()
return s},
oz(a){var s=this.w
s===$&&A.h()
return s},
bl(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>")),q=n.a,p=q.a,o=t.fL;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.G(0)
s=n.d
s===$&&A.h()
A.kX(q,s)
s=n.e
s===$&&A.h()
A.kX(q,s)
s=n.f
s===$&&A.h()
A.kX(q,s)
s=n.r
s===$&&A.h()
A.kX(q,s)
s=n.w
s===$&&A.h()
A.kX(q,s)},
eF(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aM($.wE())
i.e=i.aM($.wB())
i.f=i.aM($.wC())
i.r=i.aM($.wA())
i.w=i.aM($.wD())
for(s=i.b.bG(),r=s.$ti,s=new A.cy(s.a(),r.i("cy<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a2(o,new A.r5()))continue
l=A.vL(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.vM(p,l,k,j)}q.k(0,n.a,l)}},
gc8(){return this.b.bG().bp(0,0,new A.r4(),t.S)}}
A.r3.prototype={
$3(a,b,c){return new A.bi(A.c(a),A.c(b),A.aQ(c))},
$S:108}
A.r5.prototype={
$1(a){return t.nh.a(a)==null},
$S:111}
A.r4.prototype={
$2(a,b){var s
A.c(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:114}
A.eo.prototype={
gnt(){return this.b.length}}
A.jA.prototype={
ml(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.pO(A.e([],t.hJ),A.a2(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].ag(s,b)
o=s.mk(a,!1)
if(o.b.length!==0)return new A.jB(o,B.ib)
q=o.a
n=A.H(q)
m=new A.R(q,n.i("j(1)").a(new A.nF()),n.i("R<1,j>")).bs(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.af(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.d(A.m('RenderFeature "'+k.ga3()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.S(l,new A.nG(o))
return new A.jB(o,l)}}
A.nF.prototype={
$1(a){return t.A.a(a).a},
$S:115}
A.nG.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.iO(s,new A.nD(a)),B.a.iO(s,new A.nE(b)))},
$S:120}
A.nD.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.nE.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.jB.prototype={}
A.ei.prototype={
A(){return"FrameQueueState."+this.b}}
A.nL.prototype={}
A.nJ.prototype={
mh(a){if(a.length===0)throw A.d(A.an(a,"passId",null))
this.b=a
this.a.cb(a,A.zg())},
jS(){var s,r,q,p,o=t.z
o=A.o(o,o)
for(s=this.a,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aH(p.a,p.b,p.d))}return A.b1(o,t.N,t.m9)},
by(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.y("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.c.T(a,3)*b}}
A.fB.prototype={}
A.at.prototype={
gbK(){var s=this.c,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.pr()),r.i("M<1>"))},
gcf(){var s=this.c,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.ps()),r.i("M<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pr.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.i||s===B.I},
$S:22}
A.ps.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:22}
A.c9.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bb.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hP.prototype={
A(){return"ResourceFormat."+this.b}}
A.cH.prototype={
A(){return"GraphStage."+this.b}}
A.aN.prototype={
iZ(){var s=this
return new A.aN(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.aN&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gL(a){var s=this
return A.cv(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fs.prototype={
A(){return"ResourceAccess."+this.b}}
A.N.prototype={}
A.ha.prototype={}
A.pI.prototype={
ar(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.Cd(m.a,a.c,r.a(a.d.gZ().bN(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.hT){++m.e
throw q}else throw q}p=new A.ha(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
kV(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.ah(s,s.r,s.e,a.$ti.i("ah<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bg.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.y("ProgramSource.id must not be empty",m))
s=t.S
r=A.a2(s)
for(q=this.d.gH(),q=q.gt(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.y('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.y('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a2(s)
for(s=this.e.gH(),s=s.gt(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.y('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.y('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.pM.prototype={}
A.b3.prototype={
ae(){var s=this
return A.wZ(B.dG,s.f,B.ak,B.a2,!0,!0,!0,!0,s.r,B.ao,B.ap,s.d,s.e,!0,!1,!1)}}
A.pO.prototype={
mk(a,b){var s=this.lX(t.Q.a(a),!1),r=this.a,q=A.H(r)
return new A.pN(A.al(new A.M(r,q.i("n(1)").a(new A.pT()),q.i("M<1>")),t.A),s)},
lX(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.aW)
r=m.a
q=A.H(r)
p=q.i("M<1>")
o=A.J(new A.M(r,q.i("n(1)").a(new A.pS()),p),p.i("p.E"))
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
if(p.a!==0)B.a.l(c,new A.bb(B.h1,q.a,"missing capabilities: "+p.a6(0,", ")))}},
kF(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbK(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bb(B.fX,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
kH(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.H(a),r=s.i("n(1)").a(new A.pR()),q=B.a.gt(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbK()
o=A.J(p,p.$ti.i("p.E"))
p=r.gcf()
n=A.J(p,p.$ti.i("p.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bb(B.aQ,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaK(o).a
l=B.a.gaK(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bb(B.aQ,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bb(B.aQ,r.a,"resolve source and destination must match format and extent"))}},
kE(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.I)B.a.l(c,new A.bb(B.h_,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kJ(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.o(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcf(),n=J.S(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bb(B.fW,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kG(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbK(),p=J.S(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.I)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bb(B.cc,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bF(a,m)>s)B.a.l(c,new A.bb(B.cc,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
kI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbK(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.I)continue
for(l=q.gcf(),k=J.S(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bb(B.fZ,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
kD(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbK(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.I)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcf().ai(0,new A.pQ(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bb(B.fY,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
kC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.o(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcf(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.jV(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a2(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbK(),p=J.S(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.I)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cM(s,!1,!1,p)
s=a.length
i=A.cM(s,!1,!1,p)
h=new A.pP(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.bb(B.h0,a[q].a,"participates in a resource dependency cycle"))}}}}
A.pT.prototype={
$1(a){t.A.a(a)
return A.vB()},
$S:9}
A.pS.prototype={
$1(a){t.A.a(a)
return A.vB()},
$S:9}
A.pR.prototype={
$1(a){return t.A.a(a).f},
$S:9}
A.pQ.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:22}
A.pP.prototype={
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
r=A.ii(r,r.r,A.q(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:27}
A.pN.prototype={}
A.lg.prototype={$ibW:1,
ga3(){return this.a},
gD(){return this.b},
geR(){return this.c}}
A.hM.prototype={
hg(a){var s,r,q=a.c,p=q.a
if(!p.gaj(0))A.i(A.y("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.i(A.y("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.i(A.y(u.u,null))
s=this.a.bZ(a.a)
q=q.a9()
p=s.d.gav()
r=A.H(p)
return A.ba(new A.R(p,r.i("L(1)").a(q.gaz()),r.i("R<1,L>")))},
giS(){return new A.ch(this.nC(),t.fJ)},
nC(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$giS(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bG(),n=o.$ti,o=new A.cy(o.a(),n.i("cy<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
return a.b=new A.lg(h,g,A.ba(new A.R(f,d.i("L(1)").a(i.gaz()),d.i("R<1,L>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iBG:1}
A.pV.prototype={
$3(a,b,c){return new A.cp(A.c(a),A.c(b),A.aQ(c))},
$S:145}
A.q3.prototype={
jb(a,b){var s,r
if(this.w)A.i(A.m("resource library is disposed"))
s=this.a
a.C()
r=s.b.aB(a,b)
s.c.k(0,r.a,s.bi(a))
this.e.l(0,r)
return r},
om(a){if(this.w)A.i(A.m("resource library is disposed"))
this.a.b1(a)
this.e.a7(0,a)},
ol(a){var s
if(this.w)A.i(A.m("resource library is disposed"))
a.C()
s=this.b.a.aB(a,null)
this.f.l(0,s)
return s},
eE(a,b,c){var s,r
if(this.w)A.i(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.i(A.y("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.i(A.y("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aB(new A.du(new A.jH(c,b,1,!1,B.au,B.au,B.c9,1),A.cM(1,null,!1,t.nh),!1),a)
this.r.l(0,r)
return r},
bl(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)return
s=i.r
r=A.J(s,A.q(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.a7(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b1(k)}r=i.f
q=A.J(r,A.q(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.b1(q[l])
q=i.e
o=A.J(q,A.q(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.b1(o[l])
s.G(0)
r.G(0)
q.G(0)
p.bl()
i.w=!0}}
A.rG.prototype={}
A.lH.prototype={$ibW:1,
ga3(){return this.a},
gD(){return this.b},
geR(){return this.c}}
A.u1.prototype={
$1(a){var s=this.a.w.a.eH(a),r=s.b!=null,q=r?s.d:s.e
return new A.hO(s.c,r,q,s.f)},
$S:148}
A.u2.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().j_(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().j_(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:149}
A.u0.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.tU.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gO(r)},
$S:159}
A.tV.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.aY
s=q.b.z
r=s.length===0?null:B.a.gO(s)
return A.Fy(s,3,q.a.d,r)},
$S:165}
A.u_.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.tP.prototype={
$0(){return this.a.at.a},
$S:45}
A.tR.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.tQ.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.tZ.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.tN.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.tO.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.tW.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.tX.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.tY.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.tT.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.tS.prototype={
$0(){return this.a.at.w},
$S:46}
A.u3.prototype={
$0(){return this.a},
$S:47}
A.t8.prototype={}
A.ls.prototype={$iBF:1}
A.ld.prototype={$iAV:1}
A.q9.prototype={
gbb(){var s=this.w
return s==null?A.i(A.m("renderer is not initialized")):s},
iQ(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.ba)throw A.d(A.m("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.a7)throw A.d(A.m("renderer device is context lost"))
m.e=B.k0
try{m.r=s.j8()
r=m.b
q=A.po(a)
p=r.a
if(p.a!=null)A.i(A.m("configuration state is already initialized"))
a.C()
p.a=a
A.po(a)
p.d=1
r.b.iP(q)
r=A.Bh()
m.w=new A.q3(A.Bj(s),r,A.BT(s),A.a2(t.l0),A.a2(t.fP),A.a2(t.lu))
r=new A.ks()
p=new A.o2(s,r)
q=A.po(a)
o=p.fn(q,a)
r.iP(q)
p.c=new A.kl(new A.pD(q),o)
m.x=p
m.y=new A.pI(s,A.o(t.N,t.e3))
m.as=a
A.yv(m)
m.e=B.bb}catch(n){s=m.y
if(s!=null){r=s.b
s.kV(new A.ar(r,A.q(r).i("ar<2>")))
r.G(0)}s=m.x
if(s!=null)s.bl()
s=m.w
if(s!=null)s.bl()
m.w=null
m.e=B.ba
throw n}return A.vp(t.H)},
mf(a,b){var s,r,q,p,o,n,m=this,l=null
m.lD()
m.cq()
r=B.a.q(m.d,a)
if(!r)throw A.d(A.y("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gaj(0))A.i(A.y("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gaj(0)||q.gc7()<1e-12)A.i(A.y("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.i(A.y("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.i(A.y("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gaj(0)||!r.b.gaj(0)||!r.c.gaj(0))A.i(A.y("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.i(A.y("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.at)A.i(A.m("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.at
o.c=0
B.a.G(o.a)
s=o
try{r=m.r
if((r==null?A.i(A.m("renderer is not initialized")):r).z)m.b$=m.a.mg()
return s}catch(n){if(o.b!==B.at)A.i(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.fx
m.f6()
m.ax=m.at=null
throw n}},
nb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cq()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.at)A.i(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hZ(l,0,A.e6(m.c,"count",t.S),A.H(l).c).bO(0,!1)
m.b=B.fw
q=k
try{p=A.Dy(a1,r,s,q)
o=p.a.jS()
m=o.gH().cY(0,new A.qa())
l=m.$ti
n=new A.ct(m,l.i("aH(1)").a(new A.qb()),l.i("ct<1,aH>")).bp(0,B.bY,new A.qc(),t.m9)
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
return new A.nM(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.l6(s.e)
a1.ax=a1.at=null}},
lD(){var s,r,q,p=this
if(p.e!==B.cY)return
if(p.a.b===B.a7)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.w)A.i(A.m("resource library is disposed"))
s.a.eF()
s.c.eF()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.i(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.i(A.m("GPU resource adapter is not initialized"))
s.c=new A.kl(q.a,s.fn(A.po(r),r))
s=p.y
s.c=null
s.b.G(0)
A.yv(p)
p.e=B.bb},
cq(){var s=this,r=s.e
if(r!==B.bb)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.a7){s.kY()
s.e=B.cY
throw A.d(A.m("renderer context lost"))}}}
A.qa.prototype={
$1(a){return B.b.q(t.iO.a(a).a.toLowerCase(),"world")},
$S:48}
A.qb.prototype={
$1(a){return t.iO.a(a).b},
$S:49}
A.qc.prototype={
$2(a,b){var s=t.m9
s.a(a)
s.a(b)
return new A.aH(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lq.prototype={}
A.rS.prototype={
l6(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.i(A.m(u.k))
r=s.h9(o)
if(r.b)A.i(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lq(o))}catch(q){p.dm(o)}},
f6(){var s=this.b$
this.b$=null
if(s!=null)this.dm(s)},
kY(){var s,r,q
this.f6()
s=this.a$
r=J.xb(s.slice(0),A.H(s).c)
B.a.G(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.dm(r[q].b)},
dm(a){var s,r
try{s=this.a
s.a.deleteQuery(s.h9(a).a)}catch(r){}}}
A.lw.prototype={}
A.hU.prototype={
A(){return"ShadowCasterLod."+this.b}}
A.bL.prototype={
F(a,b){var s,r=this
t.nL.a(b)
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
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$ib0:1}
A.aO.prototype={}
A.vf.prototype={
$2(a,b){var s=t.bz
return s.a(a).a.F(0,s.a(b).a)},
$S:51}
A.vg.prototype={
$1(a){return t.bz.a(a).b},
$S:52}
A.vd.prototype={
$2(a,b){var s=t.eU
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.ve.prototype={
$1(a){return t.eU.a(a).b},
$S:54}
A.nl.prototype={}
A.nk.prototype={}
A.j2.prototype={
gav(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.L(o,n,p),new A.L(r,n,p),new A.L(o,q,p),new A.L(r,q,p),new A.L(o,n,s),new A.L(r,n,s),new A.L(o,q,s),new A.L(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eu.prototype={}
A.fh.prototype={
A(){return"FrustumTest."+this.b}}
A.nN.prototype={
oK(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.bZ
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.fy:B.fz}}
A.nO.prototype={
$4(a,b,c,d){var s=new A.L(a,b,c),r=new A.eu(s,d),q=Math.sqrt(s.gc7())
if(q<1e-9)s=r
else{s=1/q
s=new A.eu(new A.L(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dj.prototype={
a4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.dj(h)},
jd(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.fQ.a(a)
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
ex(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.i(A.m("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
gaj(a){return B.q.a2(this.a,new A.p6())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.p6.prototype={
$1(a){return isFinite(A.by(a))},
$S:5}
A.ko.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.kG.prototype={
C(){var s=this.a
if(!s.gaj(0))throw A.d(A.y("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.y("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.y(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.xl(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.xl(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.L.prototype={
c_(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bj(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.L(s*r-q*p,q*o-n*r,n*p-s*o)},
gc7(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gc7())},
gaj(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaa(){var s=this,r=Math.sqrt(s.gc7())
return r<1e-9?B.af:new A.L(s.a/r,s.b/r,s.c/r)},
a_(a,b){if(b==null)return!1
return b instanceof A.L&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gL(a){return A.cv(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.i9.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.h8.prototype={
ga3(){return this.f},
ag(a,b){B.a.l(a.a,new A.at(this.f,B.L,A.e([new A.N(this.x,B.i),new A.N(this.y,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.ar(new A.bg(s.e,s.b,s.c,B.u,B.cD,B.cy)),q=A.d_(s.d),p=t.n,o=s.r===B.dm?new Float32Array(A.a_(A.e([1/s.Q,0],p))):new Float32Array(A.a_(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.l4(new A.b3(s.f,A.e([new A.N(s.x,B.i),new A.N(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iaj:1}
A.l4.prototype={
ah(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c0(r,a.al(o.r).b)
A.bk(r,o.a.ae())
A.dt(r,B.a5,1,0,0,0)
A.cf(r,o.b.b)
q=t._
p=o.d
if(o.e)A.C9(r,0,q.a(p.$0()))
else A.aC(r,0,q.a(p.$0()))
A.v(r,"uSource",B.v)
A.v(r,"uTexelStep",new A.z(B.aB,o.f))
A.bv(r,o.c)
s.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.jc.prototype={
ga3(){return"bloomComposite"},
ag(a,b){B.a.l(a.a,new A.at("bloomComposite",B.L,A.e([new A.N(this.f,B.i),new A.N(this.r,B.i),new A.N(this.w,B.j)],t.C),!1))},
af(a){var s=this,r="bloomComposite",q=s.a.ar(new A.bg(r,s.b,s.c,B.u,B.iO,B.ix)),p=A.d_(s.d),o=s.w,n=A.e([new A.N(s.f,B.i),new A.N(s.r,B.i),new A.N(o,B.j)],t.C)
return A.e([new A.l5(new A.b3(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iaj:1}
A.l5.prototype={
ah(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c0(r,a.cX(q.f).b)
A.Ca(r,1)
A.bk(r,B.ef)
A.cf(r,q.b.b)
A.aC(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.v)
A.v(r,"uBloomStrength",new A.z(B.e,p))
A.bv(r,q.c)
s.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.jp.prototype={
ga3(){return"depthPrepass"},
ag(a,b){B.a.l(a.a,new A.at("depthPrepass",B.fT,A.e([new A.N(this.w,B.j)],t.C),!1))},
af(a){var s=this,r="depthPrepass",q=s.a.ar(new A.bg(r,s.b,s.c,B.cC,B.cA,B.hX))
return A.e([new A.l8(new A.b3(r,A.e([new A.N(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iaj:1}
A.l8.prototype={
ah(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c0(a1,a2.al("sceneDepth").b)
A.bk(a1,d.a.ae())
A.dt(a1,B.aM,1,0,0,0)
A.cf(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.z(B.e,a0.Q))
A.v(a1,"uAlbedo",B.v)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.v(a1,"uViewProjection",new A.z(B.t,new Float32Array(A.a_(a))))
A.v(a1,"uModel",new A.z(B.t,new Float32Array(A.a_(i.c.a9().a))))
A.vb(b,k,!1)
d.kW(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.i(A.m(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.i(A.m(c))
e=A.c(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.c(o.WebGL2RenderingContext.UNSIGNED_INT):A.c(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.by(g,f)}else{if(a1.b!==B.h)A.i(A.m(c))
m.drawArraysInstanced(A.c(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.by(g,f)}}},
kW(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.z(B.e,0))
A.v(q,"uAffineWarpStrength",new A.z(B.e,0))
s=this.a.ae()
A.bk(q,r.dx?s.eQ(!1):s)},
$iac:1,
gD(){return this.a}}
A.ib.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.he.prototype={
ga3(){return this.f},
ag(a,b){B.a.l(a.a,new A.at(this.f,B.L,A.e([new A.N(this.w,B.i),new A.N(this.x,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.ar(new A.bg(s.e,s.b,s.c,B.u,B.cD,B.cy)),q=A.d_(s.d),p=t.n,o=s.r===B.dn?new Float32Array(A.a_(A.e([1/s.z,0],p))):new Float32Array(A.a_(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.l9(new A.b3(s.f,A.e([new A.N(s.w,B.i),new A.N(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iaj:1}
A.l9.prototype={
ah(a){return},
$iac:1,
gD(){return this.a}}
A.jt.prototype={
ga3(){return"dofComposite"},
ag(a,b){var s=this
B.a.l(a.a,new A.at("dofComposite",B.L,A.e([new A.N(s.z,B.i),new A.N(s.Q,B.i),new A.N(s.as,B.i),new A.N(s.at,B.j)],t.C),!1))},
af(a){var s=this,r="dofComposite",q=s.a.ar(new A.bg(r,s.b,s.c,B.u,B.iM,B.hM)),p=A.d_(s.d)
return A.e([new A.la(new A.b3(r,A.e([new A.N(s.z,B.i),new A.N(s.Q,B.i),new A.N(s.as,B.i),new A.N(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iaj:1}
A.la.prototype={
ah(a){var s,r=this,q=a.al("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c0(n,q.b)
A.bk(n,r.a.ae())
A.cf(n,r.b.b)
s=t._
A.aC(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.v)
A.aC(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ae)
A.aC(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.df)
A.v(n,"uNear",new A.z(B.e,o.f))
A.v(n,"uFar",new A.z(B.e,o.r))
A.v(n,"uFocusDistance",new A.z(B.e,r.w))
A.v(n,"uFocusRange",new A.z(B.e,r.x))
A.v(n,"uStrength",new A.z(B.e,0))
A.bv(n,r.c)
p.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.jK.prototype={
ga3(){return"grade"},
ag(a,b){B.a.l(a.a,new A.at("grade",B.L,A.e([new A.N(this.r,B.i),new A.N(this.w,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.ar(new A.bg("grade",s.b,s.c,B.u,B.iK,B.iy)),q=A.d_(s.d),p=s.r,o=s.w
return A.e([new A.lf(new A.b3("grade",A.e([new A.N(p,B.i),new A.N(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iaj:1}
A.lf.prototype={
ah(a){var s=this,r=a.al(s.f.a),q=a.b,p=q.a
A.c0(p,a.al(s.r.a).b)
A.bk(p,s.a.ae())
A.cf(p,s.b.b)
A.aC(p,0,r.b)
A.v(p,"uScene",B.v)
A.aC(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ae)
A.v(p,"uLutSize",new A.z(B.e,s.e))
A.v(p,"uStrength",new A.z(B.e,a.c.e.y))
A.bv(p,s.c)
q.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.k6.prototype={
ga3(){return"msaaResolve"},
ag(a,b){B.a.l(a.a,new A.at("msaaResolve",B.fU,A.e([new A.N(this.b,B.i),new A.N(this.c,B.j)],t.C),!0))},
af(a){var s=this.b,r=this.c
return A.e([new A.lm(new A.b3("msaaResolve",A.e([new A.N(s,B.i),new A.N(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iaj:1}
A.lm.prototype={
ah(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cX(this.c),j=a.cX(this.d),i=this.b
if(i.b!==B.h)A.i(A.m(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.i(A.y("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.i(A.y("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.i(A.y("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
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
A.f6.prototype={}
A.jd.prototype={
al(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cX(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.al(s)},
$iBE:1}
A.vC.prototype={}
A.hI.prototype={
ga3(){return"present"},
ag(a,b){B.a.l(a.a,new A.at("present",B.fV,A.e([new A.N(this.f,B.i)],t.C),!1))},
af(a){var s=this,r=s.a.ar(new A.bg("present",s.b,s.c,B.u,B.iV,B.i3)),q=A.d_(s.d),p=s.f
return A.e([new A.lt(new A.b3("present",A.e([new A.N(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iaj:1}
A.lt.prototype={
ah(a){var s,r=this,q=a.cX(r.d),p=a.b,o=p.a
A.c0(o,null)
A.bk(o,r.a.ae())
A.cf(o,r.b.b)
A.bv(o,r.c)
A.aC(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.z(B.e,s.a))
A.v(o,"uVignette",new A.z(B.e,s.e))
A.v(o,"uGrain",new A.z(B.e,s.f))
A.v(o,"uRainIntensity",new A.z(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.z(B.e,s.w))
A.v(o,"uOutputEncoding",new A.z(B.e,r.e===B.aN?1:0))
A.v(o,"uToneMap",B.de)
p.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.kn.prototype={
ga3(){return"ps1Quantize"},
ag(a,b){B.a.l(a.a,new A.at("ps1Quantize",B.L,A.e([new A.N(this.e,B.i),new A.N(this.f,B.j)],t.C),!1))},
af(a){var s=this,r="ps1Quantize",q=s.a.ar(new A.bg(r,s.b,s.c,B.u,B.iQ,B.hF)),p=A.d_(s.d),o=s.e,n=s.f
return A.e([new A.lu(new A.b3(r,A.e([new A.N(o,B.i),new A.N(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iaj:1}
A.lu.prototype={
ah(a){var s=this,r=a.al(s.d.a),q=a.b,p=q.a
A.c0(p,a.al(s.e.a).b)
A.bk(p,s.a.ae())
A.cf(p,s.b.b)
A.aC(p,0,r.b)
A.v(p,"uScene",B.v)
A.v(p,"uQuantizationBits",new A.z(B.e,a.c.e.as))
A.v(p,"uDitherStrength",new A.z(B.e,0))
A.bv(p,s.c)
q.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.eC.prototype={}
A.kv.prototype={
ga3(){return"shadow"},
ag(a,b){B.a.l(a.a,new A.at("shadowCaster",B.fS,A.e([new A.N(this.z,B.j)],t.C),!1))},
af(a){var s=this,r="shadowCaster",q=s.a.ar(new A.bg(r,s.b,s.c,B.cC,B.cA,B.iw))
return A.e([new A.lx(new A.b3(r,A.e([new A.N(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
$iaj:1}
A.lx.prototype={
ah(a){var s,r,q,p,o=this,n=a.al("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c0(s,n.b)
A.bk(s,o.a.ae())
A.dt(s,B.aM,1,0,0,0)
return}r=A.xB(l)
o.x.$1(r)
s=m.a
A.c0(s,n.b)
A.bk(s,o.a.ae())
A.dt(s,B.aM,1,0,0,0)
A.cf(s,o.b.b)
A.v(s,"uAlbedo",B.v)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.kZ(m,s[p],l,r)},
h_(a,b){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.z(B.e,0))
s=this.a.ae()
A.bk(q,r.dx?s.eQ(!1):s)},
kZ(a,b,c,d){var s,r,q,p,o,n=this
if(t.os.b(b)){if(!b.gD().r)return
s=a.a
A.v(s,"uUseInstances",B.bp)
n.fV(a,b.gD().c,d)
n.h_(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bv(s,q.a)
s=q.b
r=q.c
if(s)a.dR(r,q.d,0)
else a.aC(r,0)}else if(b instanceof A.eo){p=b.a
if(!p.gD().r)return
if(n.lU(b,c)===B.kF)return
n.fV(a,p.gD().c,d)
A.vb(a,b,!1)
n.h_(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bv(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dS(r,q.d,o,0)
else a.dQ(r,0,o)}else throw A.d(A.y("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eZ(b).p(0),null))},
lU(a,b){return B.kE},
fV(a,b,c){var s=a.a
A.v(s,"uModel",new A.z(B.t,new Float32Array(A.a_(b.a9().a))))
A.v(s,"uLightViewProjection",new A.z(B.t,new Float32Array(A.a_(c.a.a))))},
$iac:1,
gD(){return this.a}}
A.ux.prototype={
$1(a){return this.a.a=a},
$S:57}
A.uy.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kw.prototype={
ga3(){return"shadowedWorld"},
ag(a,b){var s=this,r=A.e([new A.N(s.db,B.i)],t.C)
if(s.ay)r.push(new A.N(s.dx,B.i))
r.push(new A.N(s.dy,B.j))
B.a.l(a.a,new A.at("shadowedWorld",B.cb,r,!1))},
af(a){var s=this,r="shadowedWorld",q=s.a.ar(new A.bg(r,s.b,s.c,B.iS,B.iL,B.hC)),p=A.e([new A.N(s.db,B.i)],t.C)
if(s.ay)p.push(new A.N(s.dx,B.i))
p.push(new A.N(s.dy,B.j))
return A.e([new A.ly(new A.b3(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$iaj:1}
A.ly.prototype={
ah(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.al("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c0(b1,a4.b)
A.bk(b1,a2.a.ae())
s=a8.a
A.dt(b1,B.bN,1,s.c,s.b,s.a)
A.cf(b1,a2.b.b)
A.v(b1,"uAlbedo",B.v)
A.v(b1,"uNormalMap",B.l0)
A.v(b1,"uOrmMap",B.l1)
A.v(b1,"uEmissiveMap",B.l2)
A.v(b1,"uLightmap",B.l3)
s=t._
A.aC(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ae)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.z(B.aB,new Float32Array(A.a_(A.e([1/a2.ch,1/a2.CW],r)))))
A.aC(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.df)
A.v(b1,"uVertexSnapGrid",new A.z(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.z(B.aB,new Float32Array(A.a_(A.e([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.z(B.t,new Float32Array(A.a_(a7.c.a))))
A.v(b1,"uView",new A.z(B.t,new Float32Array(A.a_(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.z(B.t,new Float32Array(A.a_(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.z(B.p,new Float32Array(A.a_(A.e([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.z(B.e,a8.c))
A.v(b1,"uFogEnd",new A.z(B.e,a8.d))
A.v(b1,"uFogHeightFalloff",new A.z(B.e,0))
A.v(b1,"uFogDensity",new A.z(B.e,0))
q=a2.Q.$0()
s=A.e([],t.bH)
p=a2.as.$0()
p=J.S(p==null?B.aY:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a_
k=o?a3:q.c
if(k==null)k=B.aC
A.v(b1,"uLightPosition",new A.z(B.p,new Float32Array(A.a_(A.e([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.z(B.p,new Float32Array(A.a_(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.S
A.v(b1,"uLightColor",new A.z(B.p,new Float32Array(A.a_(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.z(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.z(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a_
g=p?a3:i.b
if(g==null)g=B.S
A.v(b1,"uDirectionalDirection",new A.z(B.p,new Float32Array(A.a_(A.e([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.z(B.p,new Float32Array(A.a_(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.z(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.af
c=n?a3:e.c
if(c==null)c=B.S
m=""+f
A.v(b1,"uPointPosition"+m,new A.z(B.p,new Float32Array(A.a_(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.z(B.p,new Float32Array(A.a_(A.e([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.z(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.z(B.e,n))}for(f=0;f<3;++f){p=s.length
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
A.v(b1,"uDirectSpotPosition"+n,new A.z(B.p,new Float32Array(A.a_(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.z(B.p,new Float32Array(A.a_(A.e([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.z(B.p,new Float32Array(A.a_(A.e([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.z(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.z(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.z(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.z(B.e,Math.cos(m)))
p=p?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.z(B.e,p))}s=o?a3:q.f
A.v(b1,"uLightRange",new A.z(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.z(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.z(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.z(B.p,new Float32Array(A.a_(A.e([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.z(B.e,a8.w))
A.v(b1,"uRainWetness",new A.z(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.r)(b1),++a1)a2.h0(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.r)(a6),++a1)a2.h0(a5,a6[a1],r)},
h0(a,b,c){var s,r,q,p,o,n,m=this
if(t.os.b(b)){s=a.a
A.v(s,"uUseInstances",B.bp)
m.h1(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.fW(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bv(s,o.a)
s=o.b
r=o.c
if(s)a.dR(r,o.d,0)
else a.aC(r,0)}else if(b instanceof A.eo){n=b.a
m.h1(a,n.gD().c)
A.vb(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.fW(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bv(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dS(r,o.d,q,0)
else a.dQ(r,0,q)}else throw A.d(A.y("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eZ(b).p(0),null))},
fW(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aC(o,0,p.a(s.e.$1(q.b)))
A.aC(o,3,p.a(s.f.$1(r)))
A.aC(o,4,p.a(s.r.$1(r)))
A.aC(o,5,p.a(s.w.$1(r)))
A.aC(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.z(B.e,0))
A.v(o,"uOpaqueCoverage",new A.z(B.e,c===B.aO?0:1))
A.v(o,"uAffineWarpStrength",new A.z(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.z(B.p,new Float32Array(A.a_(A.e([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.z(B.e,0))
A.v(o,"uUvScaleOffset",new A.z(B.l_,new Float32Array(A.a_(A.e([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.z(B.e,1))
A.v(o,"uRoughness",new A.z(B.e,q.z))
A.v(o,"uMetallic",new A.z(B.e,0))
A.v(o,"uOcclusionStrength",new A.z(B.e,1))
A.v(o,"uLightmapIntensity",new A.z(B.e,0))
A.v(o,"uReceivesShadow",new A.z(B.e,1))
A:{p=r
if(B.aO===c){switch(d.a){case 0:p=B.eh
break
case 1:p=B.eg
break}break A}if(B.R===c||B.ee===c){p=s.a.ae()
break A}}A.bk(o,q.dx?p.eQ(!1):p)},
h1(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.z(B.t,new Float32Array(A.a_(s.a))))
A.v(r,"uNormalMatrix",new A.z(B.t,new Float32Array(A.a_(s.ex().a))))},
$iac:1,
gD(){return this.a}}
A.kz.prototype={
ga3(){return"ssaoOcclusion"},
ag(a,b){B.a.l(a.a,new A.at("ssaoOcclusion",B.ca,A.e([new A.N(this.w,B.j)],t.C),!1))},
af(a){var s=this,r="ssaoOcclusion",q=s.a.ar(new A.bg(r,s.b,s.c,B.u,B.iP,B.hB)),p=A.d_(s.d)
return A.e([new A.lB(new A.b3(r,A.e([new A.N(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iaj:1}
A.lB.prototype={
ah(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c0(m,a.al("ssaoRaw").b)
A.bk(m,p.a.ae())
if(n<=0){A.dt(m,B.a5,1,1,1,1)
return}A.dt(m,B.a5,1,0,0,0)
s=p.e.$0()
A.cf(m,p.b.b)
A.aC(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.v)
A.v(m,"uNear",new A.z(B.e,s.f))
A.v(m,"uFar",new A.z(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.f(r,0)
A.v(m,"uProjScaleX",new A.z(B.e,r[0]))
if(5>=q)return A.f(r,5)
A.v(m,"uProjScaleY",new A.z(B.e,r[5]))
A.v(m,"uRadius",new A.z(B.e,p.f))
A.v(m,"uStrength",new A.z(B.e,n))
A.bv(m,p.c)
o.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.ky.prototype={
ga3(){return"ssaoBlur"},
ag(a,b){B.a.l(a.a,new A.at("ssaoBlur",B.ca,A.e([new A.N(this.y,B.i),new A.N(this.z,B.j)],t.C),!1))},
af(a){var s=this,r="ssaoBlur",q=s.a.ar(new A.bg(r,s.b,s.c,B.u,B.iF,B.iA)),p=A.d_(s.d)
return A.e([new A.lA(new A.b3(r,A.e([new A.N(s.y,B.i),new A.N(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iaj:1}
A.lA.prototype={
ah(a){var s,r,q=this,p=a.b,o=p.a
A.c0(o,a.al("ssaoBlurred").b)
A.bk(o,q.a.ae())
if(a.c.e.c<=0){A.dt(o,B.a5,1,1,1,1)
return}A.dt(o,B.a5,1,0,0,0)
s=q.f.$0()
A.cf(o,q.b.b)
r=t._
A.aC(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.v)
A.aC(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ae)
A.v(o,"uTexelSize",new A.z(B.aB,new Float32Array(A.a_(A.e([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.z(B.e,s.f))
A.v(o,"uFar",new A.z(B.e,s.r))
A.bv(o,q.c)
p.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.kN.prototype={
ga3(){return"vhs"},
ag(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.at("vhs",B.L,A.e([new A.N(this.r,B.i),new A.N(s,B.I),new A.N(s,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.ar(new A.bg("vhs",s.b,s.c,B.u,B.iI,B.hH)),q=A.d_(s.d),p=s.r,o=s.w
return A.e([new A.lK(new A.b3("vhs",A.e([new A.N(p,B.i),new A.N(o,B.I),new A.N(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iaj:1}
A.lK.prototype={
ah(a){var s,r=this,q=a.al(r.f.a),p=a.al(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c0(m,p.b)
A.bk(m,r.a.ae())
A.cf(m,r.b.b)
A.aC(m,0,q.b)
A.v(m,"uScene",B.v)
A.aC(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ae)
A.v(m,"uTime",new A.z(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.z(B.e,n.at))
A.v(m,"uTrackingWeight",new A.z(B.e,l))
A.v(m,"uNoiseWeight",new A.z(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.z(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.z(B.e,n.CW))
A.v(m,"uGhostWeight",new A.z(B.e,s))
A.bv(m,r.c)
o.aC(3,0)},
$iac:1,
gD(){return this.a}}
A.hO.prototype={}
A.kY.prototype={
ga3(){return"world"},
ag(a,b){B.a.l(a.a,new A.at("worldOpaqueTransparent",B.cb,A.e([new A.N(this.e,B.j)],t.C),!1))},
af(a){var s=this,r=s.a.ar(new A.bg("safeWorld",s.b,s.c,B.iU,B.u,B.hA)),q=s.e
return A.e([new A.lN(new A.b3("worldOpaqueTransparent",A.e([new A.N(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iaj:1}
A.lN.prototype={
ah(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c0(j,a.al(n.d).b)
A.bk(j,n.a.ae())
s=k.a
A.dt(j,B.bN,1,s.c,s.b,s.a)
A.cf(j,n.b.b)
A.v(j,"uViewProjection",new A.z(B.t,new Float32Array(A.a_(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a_
s=t.n
A.v(j,"uLightDir",new A.z(B.p,new Float32Array(A.a_(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.z(B.p,new Float32Array(A.a_(A.e([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.z(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.fs(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.fs(m,l[o])},
fs(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eo){s=b.a
n.fY(a,s.gD().c)
A.vb(a,b,!0)
r=n.c.$1(s.gD().a)
A.bv(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dS(p,r.d,o,0)
else a.dQ(p,0,o)}else if(t.os.b(b)){q=a.a
A.v(q,"uUseInstances",B.bp)
n.fY(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bv(q,r.a)
q=r.b
p=r.c
if(q)a.dR(p,r.d,0)
else a.aC(p,0)}else throw A.d(A.y("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eZ(b).p(0),null))},
fY(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.z(B.t,new Float32Array(A.a_(s.a))))
A.v(r,"uNormalMatrix",new A.z(B.t,new Float32Array(A.a_(s.ex().a))))},
$iac:1,
gD(){return this.a}}
A.n4.prototype={
cg(a){var s,r,q
a.C()
s=A.a2(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.b8
else q=r===0?B.b6:B.b7
return new A.ev(q,s)},
js(a){var s,r=this.cg(a).a
A:{if(B.b8===r){s=B.jI
break A}if(B.b7===r){s=B.jH
break A}s=B.ay
break A}return s}}
A.jG.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.hl.prototype={
A(){return"GpuBufferKind."+this.b}}
A.jI.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.jJ.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.jF.prototype={}
A.jH.prototype={}
A.el.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.hn.prototype={}
A.hm.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.eB.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.hT.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cU.prototype={
A(){return"UniformType."+this.b}}
A.z.prototype={}
A.f9.prototype={
A(){return"ClearMask."+this.b}}
A.jq.prototype={
aC(a,b){var s=this.a
if(s.b!==B.h)A.i(A.m(u.k))
s.a.drawArrays(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.by(a,1)},
dQ(a,b,c){var s=this.a
if(s.b!==B.h)A.i(A.m(u.k))
s.a.drawArraysInstanced(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.by(a,c)},
dR(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.i(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.by(a,1)},
dS(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.i(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.ai(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.by(a,c)},
$iAE:1}
A.kl.prototype={
j_(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.o2.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
bl(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.kU(s.b)
r.b.bl()
r.c=null
r.e=!0},
fn(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.o(b,a),a1=A.e([],t.l2)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("M<1>")
s=new A.M(l,j.a(new A.o3()),k)
for(i=s,h=J.S(i.a),i=new A.T(h,i.b,i.$ti.i("T<1>")),g=this.a;i.m();){r=h.gn()
q=A.Ce(g,this.kX(r,a3))
J.h5(a1,q)
J.bI(a0,r,q)}f=A.J(new A.M(l,j.a(new A.o4()),k),k.i("p.E"))
B.a.X(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.r)(l),++e){o=l[e]
n=A.zn(J.A9(o,11))
j=J.aF(a0,"sceneColor")
j.toString
J.bI(a0,o,j)}b=A.b1(a0,b,a)
return b}catch(d){for(b=a1,l=A.H(b).i("hQ<1>"),b=new A.hQ(b,l),b=new A.aT(b,b.gu(0),l.i("aT<a5.E>")),k=this.a,j=t.V,l=l.i("a5.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.vN(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
kX(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.hn(512,512,1,B.aP,!0)
if(a==="sceneDepth")return new A.hn(o,n,1,B.aP,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.W(a,"sceneColor#")
return new A.hn(r,q,1,p?B.c8:B.fP,p)},
kU(a){var s,r,q,p,o,n=A.k1(t.f7.a(a).gaA(),t._)
for(n=A.ii(n,n.r,A.q(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.vN(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.o3.prototype={
$1(a){return!B.b.W(A.x(a),"sceneColor#")},
$S:3}
A.o4.prototype={
$1(a){return B.b.W(A.x(a),"sceneColor#")},
$S:3}
A.fG.prototype={
A(){return"_SlotState."+this.b}}
A.e0.prototype={
saW(a){this.c=this.$ti.i("1?").a(a)}}
A.cQ.prototype={
aB(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.e0(B.aF,n.i("e0<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.m1
p.saW(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bY(a){return this.aB(a,null)},
a0(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dM(B.cf,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dM(B.cg,a))
s=q.b
if(s===B.aG||s===B.aF)throw A.d(A.dM(B.aw,a))},
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
r[s].saW(b)},
b1(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dM(B.cf,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dM(B.cg,a))
r=q.b
if(r===B.aG||r===B.aF)throw A.d(A.dM(B.h4,a))
q.b=B.aG
q.saW(null)
B.a.l(p.c,s);++p.e},
bG(){return new A.ch(this.nD(),this.$ti.i("ch<+(1,2)>"))},
nD(){var s=this
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
return a.b=new A.aJ(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.ja.prototype={
A(){return"BlendEquation."+this.b}}
A.ec.prototype={
A(){return"BlendFactor."+this.b}}
A.jm.prototype={
A(){return"CullFace."+this.b}}
A.jo.prototype={
A(){return"DepthFunc."+this.b}}
A.fe.prototype={
eQ(a){var s=this
return A.wZ(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b4.prototype={
A(){return"StateField."+this.b}}
A.ru.prototype={
n3(a){var s,r=this.a
if(r==null)return A.hx(B.it,t.dB)
s=A.a2(t.dB)
if(r.a!==a.a)s.l(0,B.bh)
if(r.b!==a.b)s.l(0,B.bi)
if(r.c!==a.c)s.l(0,B.bj)
if(r.d!==a.d)s.l(0,B.bk)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bl)
if(r.r!==a.r)s.l(0,B.bm)
if(r.w!==a.w)s.l(0,B.bn)
if(r.x!==a.x)s.l(0,B.bo)
return s}}
A.dv.prototype={$idg:1}
A.iG.prototype={}
A.iF.prototype={}
A.lM.prototype={}
A.kW.prototype={
ko(a){var s=this,r=A.b(s.a.canvas)
s.c=A.a0(new A.rs(s))
s.d=A.a0(new A.rt(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
j8(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bR(A.c(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bR(A.c(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bR(A.c(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bR(A.c(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bR(A.c(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fL(34047)
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
return new A.pK("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bR(a){var s=A.d4(this.a.getParameter(a))
return typeof s=="number"?B.d.aR(s):0},
fL(a){var s=A.d4(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iAZ:1}
A.rs.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.a7},
$S:2}
A.rt.prototype={
$1(a){A.b(a)
this.a.b=B.h},
$S:2}
A.th.prototype={
mg(){var s,r=this
if(r.b!==B.h)A.i(A.m(u.k))
s=r.w?A.k(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dv(new A.lM(s))},
h9(a){var s=a.a
if(!(s instanceof A.lM))throw A.d(A.an(a,"query","is not a GPU timer query"))
return s}}
A.lL.prototype={}
A.js.prototype={
B(){var s=this
return A.O(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.j7.prototype={
gnK(){var s=this.CW
return new A.ar(s,A.q(s).i("ar<2>")).bp(0,0,new A.mH(),t.i)},
k6(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.k(i.connect(A.b(s.destination)))
r=j.d
r===$&&A.h()
A.b(r.gain).value=0.25
q=j.e
q===$&&A.h()
A.b(q.gain).value=0.12
p=j.f
p===$&&A.h()
A.b(p.gain).value=0.4
o=j.r
o===$&&A.h()
A.b(o.gain).value=0.2
n=j.w
n===$&&A.h()
A.b(n.gain).value=0.4
m=j.x
m===$&&A.h()
A.b(m.gain).value=0.1
l=j.y
l===$&&A.h()
A.b(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.k(r[k].connect(i))
r=j.z
r===$&&A.h()
A.b(r.gain).value=1
q=j.Q
q===$&&A.h()
A.b(q.gain).value=0.35
A.k(o.connect(r))
A.k(n.connect(r))
A.k(p.connect(r))
p=j.as
p===$&&A.h()
A.k(r.connect(p))
A.k(p.connect(q))
A.k(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k2!==$&&A.K()
j.k2=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k3!==$&&A.K()
j.k3=p
A.k(q.connect(p))
A.k(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.k(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.k4!==$&&A.K()
j.k4=q
i=A.b(s.createChannelMerger(2))
j.ok!==$&&A.K()
j.ok=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p1!==$&&A.K()
j.p1=r
A.k(p.connect(q))
A.k(i.connect(A.b(s.destination)))
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
if(A.x(s.state)==="suspended")A.b(s.resume())},
h2(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.iN.h(0,a)
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
l9(){var s,r,q,p,o,n,m,l=this.a,k=A.aE(l.sampleRate),j=B.d.aF(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cT()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
ez(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.cT()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.k(r.connect(q))
A.k(q.connect(p.h2(a)))
r.onended=A.a0(new A.mJ(r,q))
r.start()},
j5(a){return this.ez(a,1)},
j6(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ax.cT()*0.12)
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
l=j.fm(j.b.j4(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fI(r,q,n,o,p,e,B.d.K(m,0,1)))
r.onended=A.a0(new A.mI(j,o))
A.k(r.connect(q))
A.k(q.connect(n))
A.k(n.connect(o))
A.k(o.connect(p))
A.k(p.connect(j.h2(a)))
r.start()},
od(a,b,c,d){return this.j6(a,b,c,1,d,null,null,null)},
fm(a){var s,r,q,p,o,n,m,l
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.az(r,q,p)},
f3(a){var s,r,q,p,o=this
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
A.k(q.connect(p))
r=o.e
r===$&&A.h()
A.k(p.connect(r))
q.onended=A.a0(new A.mK(o,q,p))
q.start()
o.cy=q},
d2(a){if(this.p2===a)return
this.p2=a
this.fd()},
jE(a){var s,r,q=this
q.d2(a.b===B.by)
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
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.b(s.gain).value=0.35*q.p4},
bd(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.K(c==null?q.fr:c,0,1)
q.fx=B.d.K(f==null?q.fx:f,0,1)
q.fy=B.d.K(b==null?q.fy:b,0,1)
q.go=B.d.K(a==null?q.go:a,0,1)
q.id=B.d.K(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.h()
A.b(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.h()
A.b(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.h()
A.b(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.h()
A.b(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.h()
A.b(s.gain).value=0.4*q.go
s=q.e
s===$&&A.h()
A.b(s.gain).value=0.12*q.id
s=q.y
s===$&&A.h()
A.b(s.gain).value=q.fx
s=q.c
s===$&&A.h()
s=A.b(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
jC(a){var s=null
return this.bd(s,s,s,s,a,s)},
jA(a){var s=null
return this.bd(s,s,a,s,s,s)},
jD(a){var s=null
return this.bd(s,s,s,s,s,a)},
jz(a){var s=null
return this.bd(s,a,s,s,s,s)},
jy(a){var s=null
return this.bd(a,s,s,s,s,s)},
jB(a){var s=null
return this.bd(s,s,s,a,s,s)},
jx(a){if(this.ay===a)return
this.ay=a
this.bA()},
bA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.eL(p,g)
m=n==null?i.fm(h.j4(p,g)):new A.az(n.b,n.c,n.d)
l=A.aE(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.aE(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.aE(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.d.K(m.c,0,1)}}}
A.mH.prototype={
$2(a,b){return Math.max(A.by(a),t.bp.a(b).r)},
$S:60}
A.mG.prototype={
$1(a){return this.jm(t.q.a(a))},
jm(a){var s=0,r=A.bD(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bG(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.am(A.aY(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.am(A.aY(A.b(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.am(A.aY(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bA(null,r)
case 1:return A.bz(p.at(-1),r)}})
return A.bB($async$$1,r)},
$S:61}
A.mJ.prototype={
$1(a){A.b(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.mI.prototype={
$1(a){var s
A.b(a)
s=this.a.CW.a7(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.mK.prototype={
$1(a){var s,r
A.b(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.fI.prototype={}
A.j8.prototype={
A(){return"AudioCategory."+this.b}}
A.mw.prototype={
k8(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.fr)
if(!B.a.a2(A.e([d.a,d.b,d.c],t.n),new A.mx()))throw A.d(B.eP)}}
A.mx.prototype={
$1(a){return isFinite(A.by(a))},
$S:5}
A.me.prototype={
k5(a,b){if(this.a.length===0)throw A.d(B.eF)
if(!B.a.a2(A.e([a.a,a.b,a.c],t.n),new A.mf()))throw A.d(B.eU)}}
A.mf.prototype={
$1(a){return isFinite(A.by(a))},
$S:5}
A.h6.prototype={
C(){var s=t.n
if(B.a.N(A.e([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mg()))throw A.d(B.f9)
s=B.a.N(A.e([0,0.55,1],s),new A.mh())
if(s)throw A.d(B.fj)},
je(a){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.aJ(-1.5,2e4)
if(a.ay)return new A.aJ(-28,320)
return new A.aJ(-12,1100)},
nM(a){this.C()
if(a.ax&&!a.ay&&!a.z)return 0
if(a.ay)return 1
return 0.55}}
A.mg.prototype={
$1(a){return!isFinite(A.by(a))},
$S:5}
A.mh.prototype={
$1(a){A.by(a)
return a<0||a>1},
$S:5}
A.ms.prototype={
k7(a){var s=A.q(a)
if(new A.ae(a,s.i("ae<1>")).N(0,new A.mu())||new A.ar(a,s.i("ar<2>")).N(0,new A.mv()))throw A.d(B.fp)}}
A.mu.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.mv.prototype={
$1(a){var s
t.a.a(a)
s=J.aA(a)
return s.gM(a)||s.N(a,new A.mt())},
$S:63}
A.mt.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.vn.prototype={}
A.mE.prototype={}
A.my.prototype={
k9(a,b,c){var s
for(s=this.b.gaA(),s=s.gt(s);s.m();)s.gn().C()},
eL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a.e
if(f.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(f.h(0,b)==null)throw A.d(A.m("audio listener room missing: "+b))
s=this.lK(a,b)
for(f=s.a,r=f.length,q=this.b,p=0,o=2e4,n=0,m=0;m<f.length;f.length===r||(0,A.r)(f),++m){l=f[m]
k=q.h(0,l.a)
if(k==null)k=B.bG
j=k.je(l)
i=j.b
p+=j.a
if(i<o)o=i
n=1-(1-n)*(1-k.nM(l))}r=!s.b
if(r&&a!==b){p=-48
o=240
n=1}q=A.e([],t.s)
for(h=f.length,m=0;m<f.length;f.length===h||(0,A.r)(f),++m)q.push(f[m].a)
f=B.d.K(p,-60,0)
h=B.c.K(o,120,2e4)
g=B.d.K(n,0,1)
r=!r||a===b
q=A.al(q,t.N)
if(!isFinite(g)||g<0||g>1)A.i(B.fi)
return new A.mE(q,f,h,g,r)},
lK(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.lM
s=t.N
r=A.O([a0,0],s,t.i)
q=A.O([a0,B.U],s,t.fB)
p=A.aI([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.S(k,new A.mz(r))
j=B.a.gO(k)
p.a7(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.i6(s,!0)}i=o.aD(j)
h=A.J(i,i.$ti.i("p.E"))
B.a.S(h,new A.mA())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.bJ(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.bG:d).je(f)
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
p.l(0,e)}}}return B.lL}}
A.mz.prototype={
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
A.mA.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:65}
A.i6.prototype={}
A.f7.prototype={}
A.n3.prototype={
ev(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.a(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.A0().bj(q).gaa()
p.d=q
p.c=p.b.bj(q).gaa()
p.a=a}}
A.nI.prototype={}
A.kD.prototype={}
A.o0.prototype={
l0(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.k(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.k(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.k(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.d4(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cR(a,b,c,d,e,f){return this.nE(a,b,c,d,e,f)},
nE(a,b,c,a0,a1,a2){var s=0,r=A.bD(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cR=A.bG(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.am(A.aY(A.b(m.decode()),t.X),$async$cR)
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
case 6:case 1:return A.bA(q,r)
case 2:return A.bz(o.at(-1),r)}})
return A.bB($async$cR,r)},
cS(a,b,c){var s=!1
return this.nF(t.a.a(a),b,!1)},
nF(b0,b1,b2){var s=0,r=A.bD(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cS=A.bG(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.W)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.b(A.b(a0.document).createElement("img"))
j.src=k
s=10
return A.am(A.aY(A.b(j.decode()),a1),$async$cS)
case 10:J.h5(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.c7(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.c(J.aF(l,0).width)
h=A.c(J.aF(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.vk(l,new A.o1(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.c7(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.am()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.j_(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.am()
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
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.vm(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.c7(l)
if(typeof a1!=="number"){q=a1.d1()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.c(a0.WebGL2RenderingContext.RGBA),A.c(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aF(l,c)])
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.vm(d,16)+")")
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
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.vm(d,16)+")")
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
A.b(v.G.console).error("texture array load failed: "+A.w(b))
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
case 6:case 1:return A.bA(q,r)
case 2:return A.bz(o.at(-1),r)}})
return A.bB($async$cS,r)},
h3(a,b){var s=this.a,r=A.k(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.d4(s.getShaderParameter(r,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.fg("shader compile failed: "+A.w(A.yq(s,"getShaderInfoLog",r,t.x))+"\n"+b))
return r},
aV(a,b){var s=v.G,r=this.h3(A.c(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.h3(A.c(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.k(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.d4(p.getProgramParameter(o,A.c(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.fg("program link failed: "+A.w(A.yq(p,"getProgramInfoLog",o,t.x))))
return o},
giY(){var s=A.d4(this.a.getParameter(A.c(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aR(s):0},
eN(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.c(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.c(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hK(0,c,B.c.k0(b.byteLength,p))*p
if(B.c.P(o,4)!==0)A.i(A.y("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.A2(B.q.gmi(b),b.byteOffset+0*p,B.c.T(o,4)))}},
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
h5(a,b,c){var s,r=this.a,q=A.k(r.createTexture())
q.toString
this.dF(q,a,b)
s=v.G
A.ai(r,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.c(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fp(a,b){var s,r,q=this.a,p=A.k(q.createTexture())
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
ew(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.k(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.dA(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.dA(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.h5(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.h5(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.dA(a,b,e,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fp(a,b)
if(d)h.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.c(h.checkFramebufferStatus(A.c(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.c(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.fg("framebuffer incomplete"))
return new A.kD(g,n,o,m,q,p,l,e,a,b)},
iX(a,b,c,d){return this.ew(a,b,c,d,0)},
nI(a,b,c,d){return this.ew(a,b,!0,c,d)},
br(a,b,c){return this.ew(a,b,c,!1,0)},
dD(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.c(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.ai(s,"renderbufferStorageMultisample",[A.c(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.c(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
b3(a,b,c){var s,r,q,p,o,n=this
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
a.d=n.fp(b,c)}s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
or(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
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
mv(a,b,c,d){var s,r,q=v.G,p=(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
b7(a){var s=this.a,r=A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.c(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.c(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.o1.prototype={
$1(a){A.b(a)
return A.c(a.width)!==this.a||A.c(a.height)!==this.b},
$S:66}
A.jP.prototype={
eM(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].oZ(a)}}
A.jR.prototype={
cc(a){if(this.at)return
A.vr(a,"requestPointerLock",t.X)},
eV(a){var s,r,q,p
t.G.a(a)
s=A.o(t.N,t.a)
for(r=new A.I(a,A.q(a).i("I<1,2>")).gt(0),q=t.s;r.m();){p=r.d
s.k(0,p.a,A.e([p.b],q))}this.jt(s)},
jt(a){var s,r,q,p,o,n,m,l,k
t.i3.a(a)
for(s=this.CW,r=s.a,r=new A.cb(r,r.r,r.e,A.q(r).i("cb<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a2(q)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){k=o[l]
if(k.length!==0)n.l(0,k)}s.op(p,n)}this.b5()},
d7(a){var s,r,q,p,o,n,m=this
if(m.ch.d7(a))for(s=m.CW.aU("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
oe(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.dM,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.S(t.lR.b(c)?c:new A.aS(c,A.H(c).i("aS<1,a4?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.U(r.connected)||A.x(r.mapping)!=="standard")break A
c=A.x(r.id)
q=A.x(r.mapping)
p=t.n
o=A.e([],p)
n=d.a(r.axes)
n=J.S(t.bd.b(n)?n:new A.aS(n,A.H(n).i("aS<1,A>")))
while(n.m())o.push(n.gn())
p=A.e([],p)
d=d.a(r.buttons)
d=J.S(t.ip.b(d)?d:new A.aS(d,A.H(d).i("aS<1,a4>")))
while(d.m()){r=d.gn()
p.push(A.U(r.pressed)?1:A.aE(r.value))}s=new A.kA(!0,c,q,o,p)
break}}d=s==null
m=A.Ci(d?B.kL:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aU(e),q.gau(q))
q=f.r
q.l5(A.q(q).i("n(1)").a(new A.oF(l)),!0)
for(p=l.gt(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.iT())n.l(0,h)}else n.l(0,h)}}f.e=A.hx(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aU(e),l.gau(l))){d=r.a(f.c)
d=!B.a.N(c.aU(e),d.gau(d))}}if(d)i.iU()},
lp(a){var s=this
A.b(a)
if(A.U(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.x(a.code)))if(B.a.q(s.CW.aU("interact"),A.x(a.code))){if(s.ch.iT())s.d.l(0,A.x(a.code))}else s.d.l(0,A.x(a.code))},
lr(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a7(0,A.x(a.code))
r=this.CW
if(B.a.q(r.aU(q),A.x(a.code))){t.Q.a(s)
s=!B.a.N(r.aU(q),s.gau(s))}else s=!1
if(s)this.ch.iU()},
lv(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fH(a,"movementX")
s.as=s.as+s.fH(a,"movementY")},
lt(a){var s=this
A.b(a)
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fH(a,b){var s=A.yn(a[b])
if(s==null)s=null
return s==null?0:s},
cs(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.k1(n.c,t.N)
for(r=n.e,r=A.ii(r,r.r,A.q(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.N(n.CW.aU(a),s.gau(s))},
b5(){var s=this
s.c.G(0)
s.d.G(0)
s.f.G(0)
s.r.J(0,s.e)
s.as=s.Q=0
s.ch.eG()}}
A.oF.prototype={
$1(a){return!this.a.q(0,A.x(a))},
$S:3}
A.oE.prototype={
aU(a){var s=this.a.h(0,a)
return s==null?B.o:s},
op(a,b){var s,r,q,p,o,n
t.bq.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a2(r)
for(p=A.ii(b,b.r,A.q(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.al(q,r))},
b8(a,b){var s,r,q
t.Q.a(b)
for(s=this.aU(a),r=s.length,q=0;q<r;++q)if(b.a7(0,s[q]))return!0
return!1}}
A.oI.prototype={
iT(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
iU(){this.c=this.b=!1
this.d=0},
d7(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.d.K(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eG(){this.c=this.b=!1
this.d=0}}
A.k3.prototype={}
A.er.prototype={
gfB(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gL(B.c.bt(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gL(B.c.bt(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
a_(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.er&&A.m5(r)===A.m5(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gL(a){return this.gfB()}}
A.p9.prototype={
kg(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfB(),q)}}
A.cT.prototype={
cU(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.q.d3(s,0,m,l)
n.a=s}r=b.an(0,a).bj(d.an(0,a)).gaa()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.hW(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.hW(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.hW(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.hW(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.hW(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.hW(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aw(a,b,c,d,e){return this.cU(a,b,c,d,e,1,1)}}
A.pU.prototype={
lc(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aV(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.K()
m.w=r
q=s.aV(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
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
m.d=s.br(m.ay,m.ch,!1)
m.e=s.br(m.ay,m.ch,!1)
m.f=s.br(m.ay,m.ch,!1)
p=A.k(p.createVertexArray())
p.toString
m.CW!==$&&A.K()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
ld(){var s
try{this.r=this.b.br(384,216,!1)}catch(s){this.r=null}},
oo(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.b7(n)
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
p.b7(l)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.b7(m)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.q2.prototype={
dj(a,b,c){var s,r,q
try{r=this.a.aV(b,c)
return r}catch(q){s=A.ag(q)
r=A.fg(a+": "+A.w(s))
throw A.d(r)}}}
A.pW.prototype={}
A.id.prototype={}
A.lC.prototype={}
A.lp.prototype={}
A.ln.prototype={}
A.pX.prototype={
kh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([new A.er(0,0,1,0),new A.er(1,0,1,0),new A.er(2,0,1,0)],t.mn),e=t.S
e=new A.p9(f,A.o(e,e))
e.kg(f)
h.eq=e
h.ip=1.9
h.eg=h.bo/h.bn
r=J.jV(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.id()
t.cu.a(r)
f=h.aY
e=f.aV("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aV(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aV(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aV(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aV(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ap!==$&&A.K()
h.ap=new A.q2(f,e,p,o,n,m)
h.b=t.d4.a(new A.pY(h))
h.fT()
h.fS()
o=h.aN
p=A.k(o.getUniformLocation(m,"uTex"))
h.hR!==$&&A.K()
h.hR=p
p=A.k(o.getUniformLocation(m,"uNoise"))
h.hS!==$&&A.K()
h.hS=p
p=A.k(o.getUniformLocation(m,"uTime"))
h.hx!==$&&A.K()
h.hx=p
p=A.k(o.getUniformLocation(m,"uTexelSize"))
h.hw!==$&&A.K()
h.hw=p
p=A.k(o.getUniformLocation(m,"uNoiseOff"))
h.hy!==$&&A.K()
h.hy=p
p=A.k(o.getUniformLocation(m,"uChromaLuma"))
h.hz!==$&&A.K()
h.hz=p
p=A.k(o.getUniformLocation(m,"uChromaLag"))
h.hA!==$&&A.K()
h.hA=p
p=A.k(o.getUniformLocation(m,"uTapeNoise"))
h.hB!==$&&A.K()
h.hB=p
p=A.k(o.getUniformLocation(m,"uHeadSwitch"))
h.hC!==$&&A.K()
h.hC=p
p=A.k(o.getUniformLocation(m,"uTracking"))
h.hD!==$&&A.K()
h.hD=p
p=A.k(o.getUniformLocation(m,"uDropouts"))
h.hE!==$&&A.K()
h.hE=p
p=A.k(o.getUniformLocation(m,"uGhosting"))
h.hF!==$&&A.K()
h.hF=p
p=A.k(o.getUniformLocation(m,"uChromaBlurI"))
h.hG!==$&&A.K()
h.hG=p
p=A.k(o.getUniformLocation(m,"uChromaBlurQ"))
h.hH!==$&&A.K()
h.hH=p
p=A.k(o.getUniformLocation(m,"uChromaLagAmount"))
h.hI!==$&&A.K()
h.hI=p
p=A.k(o.getUniformLocation(m,"uNoiseScale"))
h.hJ!==$&&A.K()
h.hJ=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.hK!==$&&A.K()
h.hK=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.hL!==$&&A.K()
h.hL=p
p=A.k(o.getUniformLocation(m,"uJitterAmount"))
h.hM!==$&&A.K()
h.hM=p
p=A.k(o.getUniformLocation(m,"uJitterFreq"))
h.hN!==$&&A.K()
h.hN=p
p=A.k(o.getUniformLocation(m,"uDropoutRate"))
h.hO!==$&&A.K()
h.hO=p
p=A.k(o.getUniformLocation(m,"uGhostAmount"))
h.hP!==$&&A.K()
h.hP=p
p=A.k(o.getUniformLocation(m,"uGhostOffset"))
h.hQ!==$&&A.K()
h.hQ=p
p=A.k(o.getUniformLocation(m,"uGhostTarget"))
h.hT!==$&&A.K()
h.hT=p
m=A.k(o.getUniformLocation(m,"uHasGhost"))
h.hU!==$&&A.K()
h.hU=m
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
n=A.U(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.c1!==$&&A.K()
h.c1=n
h.siV(16777215)
n=new A.qO(o,f,A.e([],t.aA),A.e([],t.df),A.e([],t.h),A.e([],t.kS))
m=n.c=f.aV("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.k(o.getUniformLocation(m,"uLightProj"))
n.e=A.k(o.getUniformLocation(m,"uModel"))
h.ep!==$&&A.K()
h.ep=n
n=new A.pU(f,o)
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
h.dg(m)
o.bindVertexArray(l)
h.dg(p)
o.bindVertexArray(k)
h.dg(n)
o.bindVertexArray(null)
try{h.cN=f.iX(384,216,!0,!0)}catch(i){h.cN=null}s=4<f.giY()?4:f.giY()
e=s
if(typeof e!=="number")return e.am()
if(e>1)try{h.c0=f.nI(h.bn,h.bo,!0,s)}catch(i){h.c0=null}try{h.bm=f.iX(h.bn,h.bo,!0,!0)}catch(i){h.c0=h.bm=null}if(h.bm!=null)try{h.cK=f.br(h.gcm(),h.gcl(),!1)
h.cL=f.br(h.gcm(),h.gcl(),!1)
h.cM=f.br(h.bn,h.bo,!1)}catch(i){h.cM=h.cL=h.cK=null}},
gcm(){var s=B.c.T(this.bn,4)
return s<1?1:s},
gcl(){var s=B.c.T(this.bo,4)
return s<1?1:s},
aP(a){return this.nG(t.G.a(a))},
nG(a){var s=0,r=A.bD(t.H),q=this,p,o,n,m,l,k,j
var $async$aP=A.bG(function(b,c){if(b===1)return A.bz(c,r)
for(;;)switch(s){case 0:p=new A.I(a,A.q(a).i("I<1,2>")).gt(0),o=q.aY
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.cB.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.am(o.cR(k,l,!1,!1,!1,m==="grime"),$async$aP)
case 4:if(c!=null)q.fu(m,l)
s=2
break
case 3:p=t.lS
j=A.J(new A.cx(new A.R(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.pZ(a)),t.dD),p),p.i("p.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.am(o.cS(j,12,!1),$async$aP)
case 7:q.cH=c
case 6:return A.bA(null,r)}})
return A.bB($async$aP,r)},
bL(){var s=0,r=A.bD(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bL=A.bG(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.o(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.am(A.aY(A.b(A.b(g.window).fetch("shaders/"+A.w(m))),f),$async$bL)
case 13:l=a3
if(!A.U(l.ok)){i=A.fg("HTTP "+A.w(A.wv(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.am(A.aY(A.b(l.text()),i),$async$bL)
case 14:a.bI(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ag(c)
i=A.fg("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.lC(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ag(b)
A.b(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bA(null,r)
case 1:return A.bz(p.at(-1),r)}})
return A.bB($async$bL,r)},
lC(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ap
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
i.fT()
i.fS()
q=i.ht
q=A.J(q,A.q(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.cB.h(0,s)
o.toString
i.fu(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ag(j)
A.b(v.G.console).error("shader recompile failed: "+A.w(r))}},
fS(){var s=this,r=s.aN,q=s.ap
q===$&&A.h()
s.iq=A.k(r.getUniformLocation(q.c,"uTex"))
s.ir=A.k(r.getUniformLocation(q.c,"uTime"))
s.is=A.k(r.getUniformLocation(q.c,"uFlash"))
s.it=A.k(r.getUniformLocation(q.c,"uVignette"))
s.iu=A.k(r.getUniformLocation(q.c,"uGrain"))
s.iv=A.k(r.getUniformLocation(q.c,"uDesat"))
s.iw=A.k(r.getUniformLocation(q.c,"uBloom"))
s.ix=A.k(r.getUniformLocation(q.c,"uBloomStrength"))
s.iE=A.k(r.getUniformLocation(q.c,"uNoiseOff"))
s.iH=A.k(r.getUniformLocation(q.c,"uLutMix"))
s.iA=A.k(r.getUniformLocation(q.c,"uDepth"))
s.iB=A.k(r.getUniformLocation(q.c,"uDepthViz"))
s.hu=A.k(r.getUniformLocation(q.c,"uSSAO"))
s.hv=A.k(r.getUniformLocation(q.c,"uSSAOStrength"))
s.iC=A.k(r.getUniformLocation(q.c,"uNoise"))
s.iD=A.k(r.getUniformLocation(q.c,"uNoiseOn"))
s.iF=A.k(r.getUniformLocation(q.c,"uLut"))
s.iG=A.k(r.getUniformLocation(q.c,"uLutOn"))
s.iy=A.k(r.getUniformLocation(q.d,"uTex"))
s.eh=A.k(r.getUniformLocation(q.d,"uDir"))
s.iz=A.k(r.getUniformLocation(q.c,"uBlur"))},
fu(a,b){var s,r,q,p=this
p.ht.l(0,a)
switch(a){case"bluenoise":s=p.ap
s===$&&A.h()
s=s.c
r=p.iC
r===$&&A.h()
q=p.iD
q===$&&A.h()
p.bT(s,r,q,b)
break
case"lut-gothic":s=p.ap
s===$&&A.h()
s=s.c
r=p.iF
r===$&&A.h()
q=p.iG
q===$&&A.h()
p.bT(s,r,q,b)
break
case"grime":s=p.ap
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bT(s,r,q,b)
break
case"glass":s=p.ap
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bT(s,r,q,b)
break
case"soft":s=p.ap
s===$&&A.h()
s=s.b
r=p.i9
r===$&&A.h()
q=p.ia
q===$&&A.h()
p.bT(s,r,q,b)
break}},
bT(a,b,c,d){var s=this.aN
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
siV(a){var s=A.ur(a)
this.i1=s.a
this.i2=s.b
this.i3=s.c},
cB(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
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
f[l]=l}a1=b.aN
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
a1=b.ng++
b.e3.k(0,a1,new A.lC(e,d,i,s,s,a3))
return a1},
n6(a){var s,r,q,p=this,o=p.e3.h(0,a)
if(o==null)return
p.fJ()
s=p.i7
r=p.i8
if(s!==r)p.fX(r)
s=p.aN
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
np(a){var s,r=this.e3.a7(0,a)
if(r==null)return
s=this.aN
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.e4)return
c.e4=!0
s=c.aN
r=c.ap
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.i5
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
s.uniform1f(r,c.ip)
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
q=c.hV?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.ea/255*0.34,c.eb/255*0.34,c.ec/255*0.34)
q=c.fx
q===$&&A.h()
r=c.i0
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.i1,c.i2,c.i3)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.i4)
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
continue}j=A.ur(k.b)
m=c.c1
m===$&&A.h()
i=m?1:1+(A.vc(c.ed*8,27229+n)*2-1)*k.e
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
q=r?1:1+(A.vc(c.ed*2.5,40503)*2-1)*0
c.nd=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.hX?1:0
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
q=c.hW
h=q?384:0
g=q?216:0
q=c.e0
p=q.a
if(p===B.be){f=B.d.K(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.ib
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.ep
r===$&&A.h()
q=c.ih
q===$&&A.h()
s.uniform1f(q,0)
q=c.ii
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.ic
q===$&&A.h()
if(q!=null)r.d_(0)
q=c.ie
q===$&&A.h()
if(q!=null)r.d_(1)
q=c.ig
q===$&&A.h()
if(q!=null)r.d_(2)
r.d0(0)
r.d0(1)
r.d0(2)
r=c.ij
r===$&&A.h()
if(c.cH==null)q=0
else{c.eq===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cH!=null){r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cH)
r=c.ee
r===$&&A.h()
s.uniform1i(r,12)}r=c.io
q=c.im
p=c.il
o=c.ik
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
if(m!=null)s.uniform1i(m,d.d);++n}c.fX(c.i8)
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
fX(a){var s
this.i7=a
s=this.dx
s===$&&A.h()
this.aN.uniformMatrix4fv(s,!1,a.a)},
b2(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bn=a
j.bo=b
j.eg=b/a
s=j.cI
s===$&&A.h()
r=B.c.T(a,2)
s.ay=r
q=B.c.T(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.b3(p,r,q)
r=s.e
if(r!=null)s.b.b3(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.b3(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.b3(r,384,216)
o=j.bm
n=j.c0
m=j.cK
l=j.cL
k=j.cM
if(o!=null)j.aY.b3(o,a,b)
if(n!=null)j.aY.b3(n,a,b)
if(m!=null)j.aY.b3(m,j.gcm(),j.gcl())
if(l!=null)j.aY.b3(l,j.gcm(),j.gcl())
if(k!=null)j.aY.b3(k,a,b)},
lP(a){var s,r,q,p,o,n,m
for(s=this.hZ,r=this.hY,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
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
lO(a){var s,r,q,p,o,n,m,l
for(s=this.i_,r=this.e5,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
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
nm(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.e0=b4
s=b2.c3
r=0
if(s>0){for(s=b2.i_,q=0;p=b2.c3,q<p;++q)B.a.k(s,q,q)
b2.lO(p)
for(p=b2.e5,o=b2.e1,n=0;n<b2.c3;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.yO(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.e5,p=b2.e1,q=0;q<b2.c3;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.yO(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.c3=0
for(s=b2.hZ,q=0;p=b2.cO,q<p;++q)B.a.k(s,q,q)
b2.lP(p)
for(p=b2.ne,o=b2.hY,k=0,n=0;n<b2.cO;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.ur(0)
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
e=[new A.a(a-d,a1-c,a2-e),new A.a(g-d,f-c,h-e),new A.a(g+d,f+c,h+e),new A.a(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.e7
k=A.yV(p,k,a3,a4,a5,a6,new A.a(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cO=0
s=b2.aY
o=b2.dU
o===$&&A.h()
s.eN(o,b2.e1,r)
o=b2.dV
o===$&&A.h()
s.eN(o,p,k)
b2.fJ()
p=b2.aN
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
s.eN(h,b2.nf,m)
p.blendFunc(A.c(o.WebGL2RenderingContext.ONE),A.c(o.WebGL2RenderingContext.ONE))
m=b2.dZ
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,b2.e2/14|0);++b2.c2}m=b2.cN
if(m!=null){a7=b2.bm
if(a7!=null)s.or(m,a7)}a8=b2.bm
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
if(!h&&a4!=null&&a9!=null){g=b2.ap
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
g=b2.iy
g===$&&A.h()
p.uniform1i(g,0)
s.b7(a4)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.eh
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.b7(a3)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.eh,0,1/a4.y)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cM
if(b2.cJ>0&&a6!=null){s.b7(a6)
g=b2.ap
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
p.uniform2f(g,1/b2.bn,1/b2.bo)
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cI
g===$&&A.h()
b0=g.oo(a8,0.5)
s.b7(null)
s=b2.ap
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE1))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.iw
g===$&&A.h()
p.uniform1i(g,1)
g=b2.ix
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.iz
s===$&&A.h()
b2.c1===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.iA
s===$&&A.h()
p.uniform1i(s,7)
s=b2.iB
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.hu
s===$&&A.h()
p.uniform1i(s,11)
s=b2.hv
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cJ>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.iq
h===$&&A.h()
p.uniform1i(h,0)
h=b2.ed+=b3;++b2.i6
s=b2.ir
s===$&&A.h()
p.uniform1f(s,h)
h=b2.iE
h===$&&A.h()
s=b2.i6
p.uniform2f(h,B.c.P(s*13,64),B.c.P(s*29,64))
s=b2.is
s===$&&A.h()
p.uniform1f(s,0)
s=b2.it
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.iu
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.iv
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.e0
if(s.a===B.ab)b1=0*(1-s.b/1)
else b1=0
s=b2.iH
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.pY.prototype={
$0(){var s=this.a.ap
s===$&&A.h()
return s.b},
$S:67}
A.pZ.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:43}
A.rw.prototype={
gm1(){var s=this.b
s===$&&A.h()
return s},
fT(){var s,r,q,p,o,n,m=this,l=m.m2(),k=m.a
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
m.i9=A.k(k.getUniformLocation(l,"uSoft"))
m.ia=A.k(k.getUniformLocation(l,"uSoftOn"))
m.ib=A.k(k.getUniformLocation(l,"uInternal"))
m.ic=A.k(k.getUniformLocation(l,"uLightProj0"))
m.ie=A.k(k.getUniformLocation(l,"uLightProj1"))
m.ig=A.k(k.getUniformLocation(l,"uLightProj2"))
m.nh=A.k(k.getUniformLocation(l,"uShadow0"))
m.ni=A.k(k.getUniformLocation(l,"uShadow1"))
m.nj=A.k(k.getUniformLocation(l,"uShadow2"))
m.ih=A.k(k.getUniformLocation(l,"uShadowCasters"))
m.ee=A.k(k.getUniformLocation(l,"uMaterialAlbedo"))
m.ef=A.k(k.getUniformLocation(l,"uStaticMaterial"))
m.ii=A.k(k.getUniformLocation(l,"uShadowBias"))
m.ij=A.k(k.getUniformLocation(l,"uMaterialCount"))
s=m.ik
B.a.G(s)
r=m.il
B.a.G(r)
q=m.im
B.a.G(q)
p=m.io
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.k(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.k(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.k(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.k(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.ee,12)},
dg(a){this.a.bindBuffer(A.c(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
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
m2(){return this.gm1().$0()}}
A.qO.prototype={
d_(a){return null},
d0(a){return null}}
A.a.prototype={
a8(a,b){return new A.a(this.a+b.a,this.b+b.b,this.c+b.c)},
an(a,b){return new A.a(this.a-b.a,this.b-b.b,this.c-b.c)},
a4(a,b){return new A.a(this.a*b,this.b*b,this.c*b)},
c_(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bj(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.a(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaa(){var s=this,r=s.gu(0)
return r<1e-9?new A.a(0,0,0):new A.a(s.a/r,s.b/r,s.c/r)}}
A.kA.prototype={}
A.kZ.prototype={}
A.mX.prototype={
oT(a){var s,r,q,p,o,n=B.k.ao(a.B(),null)
this.a.hr(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.aQ(s.getItem("quarantine.save.active"))
q=A.aQ(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
oh(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.aQ(s.getItem("quarantine.save.active"))
q=A.aQ(s.getItem("quarantine.save.previous"))
p=this.fo(r,a)
if(p!=null)return new A.eA(p,null)
o=this.fo(q,a)
if(o!=null)return new A.eA(o,"recovered previous save")
if(r==null)return B.kg
return B.kf}catch(n){return B.ke}},
fo(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.hr(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.G)return null
else throw q}}}
A.ju.prototype={
kb(a,b,c,d,e){if(this.a.length===0)throw A.d(B.fg)
if(this.b<0)throw A.d(B.eQ)},
B(){var s,r=this,q=r.d
q=q==null?null:A.al(q,t.i)
s=t.z
return A.b1(A.O(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.c8.prototype={
A(){return"EndingKind."+this.b}}
A.nx.prototype={}
A.ff.prototype={
B(){var s=t.N
return A.O(["kind",this.a.b],s,s)}}
A.nA.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:69}
A.bl.prototype={}
A.ki.prototype={
B(){var s,r=this,q=t.N,p=A.o(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.O(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
ny(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.an(0,new A.a(0,1.3499999999999999,0))
return!new A.je(s,s.a8(0,new A.a(0,1.2000000000000002,0))).iR(a,r)}}
A.pE.prototype={
B(){return A.lT(this.a)}}
A.ft.prototype={
B(){return A.O(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.q8.prototype={
hr(a){var s,r,q,p,o,n,m,l=B.k.aH(a,null),k=t.f
if(!k.b(l))throw A.d(B.fq)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aL(p))o=p!==1&&p!==2
else o=!0
if(o)A.i(A.a9("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.i(B.eY)
k=A.aM(n,s,r)
return A.xy(A.aM(m,s,r),k,2)}}
A.eA.prototype={}
A.ek.prototype={
A(){return"GameSessionEventType."+this.b}}
A.jD.prototype={}
A.nU.prototype={}
A.nT.prototype={
gab(){var s=this.d
return new A.nU(s.a,s.b)},
geB(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.O(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.O(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.O(["entryCount",m.e.b.a],k,t.S)
p=A.x7(m.c).B()
o=m.r
n=o.c
return new A.pE(A.lT(A.O(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.O(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
ma(a,b){if(!B.a.N(a.f,new A.nV(b)))return!1
this.z.m9(a,b)
return!0},
nq(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.q(s).i("ar<2>")
q=A.J(new A.ar(s,r),r.i("p.E"))
B.a.S(q,new A.nW())
if(q.length===0)return null
s=A.H(q)
r=s.i("M<1>")
p=A.J(new A.M(q,s.i("n(1)").a(new A.nX()),r),r.i("p.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dG(a),r=t.gS,s=new A.aT(s,s.gu(0),r.i("aT<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.c.P(n,o.length)]
s=l.c
k=new A.cC(a,l.a,s.length-1,B.a.gU(s).p(0))
j.k(0,a,k)
return k},
m6(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.an(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cv(B.fA)}if(n<a)this.cv(B.fB)},
jU(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d6(a)&&s.jT(b)},
oi(a){var s,r,q,p,o
t.ee.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.di){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
jR(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.AB(j,A.al(i.d,h).length)
if(a===B.d5)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.H(r)
A.AA(j,new A.M(r,q.i("n(1)").a(new A.nY(k)),q.i("M<1>")).gu(0))
r=k.f
q=r.b
if(B.a.q(B.hE,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aF(j.a/1*3)
B.a.l(r.r,new A.fv(q.a,a,b))
m=r.a
A.AM(m,q.a,n,k.b,A.al(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.jG(B.ij)
s.r.mx(o,c)
l=B.d.aF(j.b/1*6)
if(l>0)r.d6(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ar(i,A.q(i).i("ar<2>")).N(0,new A.nZ())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cv(B.fD)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cv(B.fC)},
cv(a){var s=this;++s.y
B.a.l(s.w,new A.jD())
B.a.l(s.x,A.AC(A.Dw(a),s.b,s.y-1))}}
A.nV.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.nW.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.nX.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:20}
A.nY.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.qP().jO(this.a.c,a.a)},
$S:73}
A.nZ.prototype={
$1(a){return t.g.a(a).e},
$S:20}
A.mL.prototype={
eO(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
if(Math.abs(g-j)>0.0001)A.i(A.m(n+" origin.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.i(A.m(n+" origin.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.i(A.m(n+" origin.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.i(A.m(n+" size.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.i(A.m(n+" size.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.i(A.m(n+" size.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.m("window count mismatch for "+n))
for(n=A.H(j),i=n.i("n(1)"),n=n.i("M<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.cL(new A.M(j,i.a(new A.mQ(e)),n),r)
if(d==null)throw A.d(A.m("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.i(A.m(c+" offset mismatch: "+A.w(h)+" != "+A.w(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.i(A.m(c+a+A.w(h)+" != "+A.w(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.i(A.m(c+a0+A.w(h)+" != "+A.w(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.i(A.m(q+a+A.w(n)+" != "+A.w(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.i(A.m(q+a0+A.w(n)+" != "+A.w(l)))
if(o.f!=m.at)throw A.d(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaK(a1).b!==B.a.gaK(s).b)throw A.d(A.m("stair manifest mismatch"))}}
A.mM.prototype={
$1(a){return A.Aj(a,this.a)},
$S:74}
A.mN.prototype={
$1(a){var s=this.a,r=A.m_(a,"portal"),q=A.e5(r,"id"),p=A.e5(r,"a"),o=A.e5(r,"b"),n=A.iU(r,"width"),m=A.iU(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.x(r.h(0,"doorKit")):null
return new A.f0(q,p,o,n*s,m*s,l)},
$S:75}
A.mO.prototype={
$1(a){var s=A.m_(a,"stair")
A.e5(s,"id")
return new A.f2(A.e5(s,"portalId"))},
$S:76}
A.mP.prototype={
$1(a){return typeof a=="string"?a:A.iQ("exterior cell")},
$S:77}
A.mQ.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.f1.prototype={}
A.mR.prototype={
$1(a){var s=this.a,r=A.m_(a,"window"),q=A.e5(r,"id"),p=A.iU(r,"offset")
A.iU(r,"sill")
return new A.f3(q,p*s,A.iU(r,"width")*s,A.iU(r,"height")*s)},
$S:79}
A.f3.prototype={}
A.f0.prototype={}
A.f2.prototype={}
A.uv.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.je.prototype={
oE(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.H(s)
q=new A.M(s,r.i("n(1)").a(new A.n5(e)),r.i("M<1>"))
p=!q.gt(0).m()?null:q.gO(0)
if(p==null){n.d=null
return}if(!(n.cu(b,p.f)&&a==="hall"))o=n.cu(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.l_(p,B.d.K(d,0,1))},
nL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fG(f,c,d)
s=g.l1(a,b,c,d)
if(s!=null){g.d=s
return g.fG(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.mp(Math.sqrt(r*r+q*q)/0.08))
o=d.a4(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.hb(a,n,m,new A.a(q,0,0))
l=l||j.b
i=g.j7(a,n)
n=i==null?n:i
h=g.hb(a,n,j.a,new A.a(0,0,r))
l=l||h.b
m=h.a
i=g.j7(a,n)
n=i==null?n:i}g.cz(m)
return new A.k5(m,n)},
l1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cu(c,l.f)&&n
j=q&&this.cu(c,l.r)&&o
if(k||j)return new A.l_(l,k?0:1)}return null},
fG(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.an(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.K(a.b+o/p,0,1)
n=A.xL(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.cz(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.k5(n,k)},
cu(a,b){var s=a.an(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
hb(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.i8(c,!1)
s=c.a8(0,d)
this.cz(s)
if(this.iR(a,b)){this.cz(c)
return new A.i8(c,!0)}return new A.i8(s,!1)},
cz(a){var s=a.an(0,new A.a(0,1.3499999999999999,0))
this.a=s
this.b=s.a8(0,new A.a(0,1.2000000000000002,0))},
iR(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aX(m)
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
return!this.lR(a,m,s)},
j7(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aX(k)
for(r=k.a,q=a.aD(r),p=J.S(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.bJ(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hf(k,o,s)&&this.kR(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lR(a,b,c){var s,r,q
for(s=a.aD(b.a),r=J.S(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hf(b,q,c))return!0}return!1},
hf(a,b,c){var s,r,q,p=a.a,o=b.aI(p),n=b.ak(p)
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
switch(b.aI(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sme(a){this.a=t.mz.a(a)}}
A.n5.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:81}
A.k5.prototype={}
A.i8.prototype={}
A.l_.prototype={}
A.hp.prototype={}
A.oi.prototype={
mx(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jP(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
jQ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.O(["landedCount",this.b],t.N,t.z)}}
A.q4.prototype={
kj(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.K()
o.c=new A.jO(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.k(0,p.a,o.ff(p))}},
cV(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.np(r[o])
s.k(0,a,n.ff(m))},
ff(a){var s=A.ze(this.a,a),r=this.b,q=A.e([r.cB(s.a,1),r.cB(s.b,2),r.cB(s.c,0)],t.t),p=s.d
if(!B.q.gM(p))q.push(r.cB(p,0))
return q},
jo(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.O
s=l.a
r=A.aI([s],t.N)
for(n=n.aD(s),q=J.S(n.a),n=new A.T(q,n.b,n.$ti.i("T<1>"));n.m();){p=q.gn()
o=p.bJ(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
n5(a,b){var s,r,q,p,o=this,n=o.jo(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.ji(n,b))
s=t.f0
m.e6=l.length<=4?A.al(l,s):A.al(A.hZ(l,0,A.e6(4,"count",t.S),A.H(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.n6(r[p])}}}
A.Z.prototype={}
A.jx.prototype={
gnB(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a2(A.e([r,q,p,o,n,m],t.n),new A.nC())&&o>=r&&n>=q&&m>=p}}
A.nC.prototype={
$1(a){return isFinite(A.by(a))},
$S:5}
A.jN.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.P(s,3)!==0}else s=!0
if(s)throw A.d(A.y("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.y("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnB())throw A.d(A.y("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.N(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.ok()))throw A.d(A.y("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.y("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.y("QHMX index "+o+" exceeds vertex count",m))}}}
A.ok.prototype={
$1(a){return!isFinite(A.by(a))},
$S:5}
A.oj.prototype={
v(a,b,c,d,e,f,g){var s=this
s.bx(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bx(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bx(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bx(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bx(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bx(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.Z(a,b,c,m,n,o,0,0,p),r=new A.Z(g,h,i,m,n,o,1,1,p)
this.ad(s,new A.Z(d,e,f,m,n,o,1,0,p),r)
this.ad(s,r,new A.Z(j,k,l,m,n,o,0,1,p))},
ad(a,b,c){var s=this,r=s.b
B.a.l(r,s.ds(a))
B.a.l(r,s.ds(b))
B.a.l(r,s.ds(c))},
ds(a){var s,r,q=B.a.a6(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
mj(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.jN(A.al(g,t.hZ),new Uint16Array(A.a_(this.b)),new A.jx(s,r,q,p,o,n))
h.C()
return h}}
A.jy.prototype={}
A.vh.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ac.q(0,s))A.i(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:82}
A.up.prototype={
$2(a,b){var s=t.m7
return B.b.F(s.a(a).a,s.a(b).a)},
$S:83}
A.d0.prototype={
oS(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.o(k,k),i=A.e([],t.ph)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.il(A.FH(new A.jN(i,new Uint16Array(A.a_(s)),A.Df(i))),l.a,l.b,l.c,A.e([],k))}}
A.il.prototype={}
A.eg.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.jz.prototype={
mq(a){var s
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
mr(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.bU
break A}if("kitchen"===a||"cellar"===a){s=B.en
break A}if("bathroom"===a){s=B.eo
break A}if("spare-room"===a){s=B.ep
break A}s=B.bU
break A}return this.mq(s)},
iI(a,b,c,d){d.i("p<0>").a(b)
t.Q.a(c)
return new A.ch(this.nl(d.i("j(0)").a(a),b,c,d),d.i("ch<0>"))},
nl(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iI(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a2(0,B.ac.gau(B.ac)))throw A.d(A.y("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cb(l,l.r,l.e,r.$ti.i("cb<1>"))
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
A.e_.prototype={
hn(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.u5.prototype={
$1(a){var s=this
return t.e7.a(a).hn(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:32}
A.u4.prototype={
$1(a){return t.e7.a(a).hn(0,(this.a+this.b)*0.5,this.c)},
$S:32}
A.dJ.prototype={
A(){return"FocusKind."+this.b}}
A.eh.prototype={}
A.q5.prototype={}
A.tl.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:85}
A.tk.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.un.prototype={
$1(a){return B.c.K(B.d.aF(a*this.a),0,255)},
$S:38}
A.dZ.prototype={}
A.fH.prototype={}
A.og.prototype={
ku(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.ox(1.5),a4=this.b,a5=A.as(a4,!0,t.U)
B.a.G(a4)
s=A.e([],t.kl)
for(r=a5.length,q=t.jc,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.b6(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.bd(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.bf(b.a,b.b,a3.$1(b.c)))}s.push(new A.aV(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.as(a4,!0,t.T)
B.a.G(a4)
s=A.e([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bp(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dp(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.oy(),a7=this.b,a8=A.as(a7,!0,t.U)
B.a.G(a7)
s=A.e([],t.kl)
for(r=a8.length,q=t.hS,p=t.jc,o=t.cs,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.r)(a8),++m){l=a8[m]
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
d.push(new A.da(a1.a,a1.b*1.5))}s.push(new A.aV(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.J(a7,s)
a7=this.c
a2=A.as(a7,!0,t.T)
B.a.G(a7)
s=A.e([],t.aN)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bp(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.J(a7,s)
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
m_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
lY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.o(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.he(o,i,h,g,f,e)
a5.fb(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aI(l)
h=c.ak(l)
g=c.w
f=c.x
a5.he(o,i,h,g,0,f)
a5.fb(a6,l,c.aI(l),c.ak(l),c.ak(l)+g,0,f)}}for(s=new A.I(a6,a6.$ti.i("I<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.c6(a)
r.S(a,new A.oz())
for(a0=0;a0<r.gu(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gu(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
he(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
fb(a,b,c,d,e,f,g){J.h5(t.gz.a(a).cb(b+":"+c.b,new A.ow()),new A.iu([d,e,f,g]))},
aX(a){var s=a.c,r=this.r,q=a.a
return new A.a(s.a+r.jP(q),s.b+r.jQ(q),s.c)},
aD(a){var s=this.c,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.oA(a)),r.i("M<1>"))},
of(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.an(a,"roomId","not a portal endpoint"))
r=this.aX(o)
q=b.ak(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aI(a).a){case 0:s=new A.a(s.a+q,p,s.c)
break
case 2:s=new A.a(s.a+q,p,s.c+r.c)
break
case 1:s=new A.a(s.a+r.a,p,s.c+q)
break
case 3:s=new A.a(s.a,p,s.c+q)
break
default:s=null}return s},
goR(){return B.a.bp(this.b,0,new A.oB(),t.S)},
j4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.U
s=A.e([new A.aJ(a,B.U)],t.bM)
r=A.aI([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.on(s,0)
n=o.a
m=o.b
for(l=this.aD(n),k=J.S(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.bJ(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.aJ(i,h))}}}return B.U}}
A.ox.prototype={
$1(a){var s=this.a
return new A.a(a.a*s,a.b,a.c*s)},
$S:33}
A.oy.prototype={
$1(a){return a.a4(0,1.5)},
$S:33}
A.oz.prototype={
$2(a,b){var s=t.oJ
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:88}
A.ow.prototype={
$0(){return A.e([],t.a3)},
$S:89}
A.oA.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:90}
A.oB.prototype={
$2(a,b){return A.c(a)+t.U.a(b).e.length},
$S:91}
A.nB.prototype={}
A.qP.prototype={
jO(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a2(s,new A.qQ())}else s=!1
return s}}
A.qQ.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.ol.prototype={
oc(a){var s=this.e,r=A.H(s)
return new A.M(s,r.i("n(1)").a(new A.oo(a)),r.i("M<1>"))},
cC(a){return B.a.aZ(this.d,new A.om(a),new A.on(a))},
eO(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
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
n=a6.cC(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.A_()
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
A.oo.prototype={
$1(a){return t.gB.a(a).b===this.a},
$S:92}
A.om.prototype={
$1(a){return t.p9.a(a).a===this.a},
$S:93}
A.on.prototype={
$0(){return A.i(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cK.prototype={}
A.cq.prototype={
jc(a,b){var s=this.f.c.b*b,r=a.f
return new A.a(r.a.b*s,r.b.b*s,0)}}
A.oL.prototype={}
A.oJ.prototype={}
A.uu.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.oK.prototype={
B(){var s,r,q,p=A.o(t.N,t.z),o=this.a,n=A.q(o).i("ae<1>")
n=A.J(new A.ae(o,n),n.i("p.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
eI(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.eB)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.G(0)
for(q=new A.I(r,A.q(r).i("I<1,2>")).gt(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aL(o)||o<0)throw A.d(B.eR)
s.k(0,n,o)}}}
A.cP.prototype={}
A.jO.prototype={
ji(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.hU)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cP(new A.a(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.lJ(j),0.06))}}B.a.S(s,new A.op(b))
return A.hZ(s,0,A.e6(4,"count",t.S),t.f0).bN(0)},
lJ(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.op.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.an(0,s).gu(0),b.a.an(0,s).gu(0))},
$S:95}
A.hk.prototype={
A(){return"Floor."+this.b}}
A.dI.prototype={
A(){return"Facing."+this.b}}
A.b6.prototype={
sjN(a){this.w=A.U(a)}}
A.bp.prototype={
bJ(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aI(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.an(a,"roomId","not an endpoint of "+s.a))},
ak(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.an(a,"roomId","not an endpoint of "+s.a))}}
A.bd.prototype={}
A.bf.prototype={}
A.da.prototype={}
A.dp.prototype={}
A.aV.prototype={}
A.or.prototype={
n9(a){return B.a.aZ(this.c,new A.os(a),new A.ot(a))},
oO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.m("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.m("soundscape source changed: "+f))
f=t.N
s=A.a2(f)
f=A.o(f,t.gB)
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
if(k.gM(k)||k.gaA().N(0,new A.ou()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
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
A.os.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:96}
A.ot.prototype={
$0(){return A.i(A.m("sound emitter missing: "+this.a))},
$S:6}
A.ou.prototype={
$1(a){return B.b.bc(A.x(a)).length===0},
$S:3}
A.cJ.prototype={}
A.oh.prototype={
dG(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.an(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.ii}q=A.e([],t.iG)
p=B.d.aO(r)+1
o=B.d.aO(b)
for(n=p;n<=o;++n){m=B.c.P(n,24)
B.a.l(q,new A.en("tick"))
if(B.c.P(m,3)===0){B.a.l(q,new A.en("cuckoo"))
B.a.l(q,new A.en("bell"))}if(B.c.P(m,6)===0)B.a.l(q,new A.en("chime"))}l.b=b
return q}}
A.en.prototype={}
A.oq.prototype={
dG(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.an(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.ih}q=A.e([],t.dL)
for(p=B.d.aO(r)+1;p<=B.d.aO(b);++p){o=B.c.P(p,24)
n=B.c.P(o,4)
if(n===2)B.a.l(q,B.h7)
if(B.c.P(o,3)===1)B.a.l(q,B.h9)
if(B.c.P(o,8)===5)B.a.l(q,B.hc)
if(B.c.P(o,5)===0)B.a.l(q,B.h8)
if(B.c.P(o,7)===3)B.a.l(q,B.hd)
if(n===1)B.a.l(q,B.ha)
if(B.c.P(o,6)===4)B.a.l(q,B.hb)}m.b=b
return q}}
A.cI.prototype={}
A.ut.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.ov.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.o(m,l)
for(s=n.a,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.O(["open",o.a,"locked",o.b],m,r))}l=A.o(m,l)
for(s=n.c,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.O(["lit",o.a,"examined",o.b],m,r))}return A.O(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a2(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.a2(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.a2(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wj(new A.ae(o,A.q(o).i("ae<1>")),d)){d=f.b
if(A.wj(new A.ae(d,A.q(d).i("ae<1>")),r)){d=f.c
e=!A.wj(new A.ae(d,A.q(d).i("ae<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.fa)
e=f.d
if(e<0||e>2)A.i(B.eI)
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
A.hH.prototype={
B(){return A.O(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hy.prototype={
B(){return A.O(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bc.prototype={}
A.nw.prototype={
$1(a){return this.a.q(0,A.x(a))},
$S:3}
A.dL.prototype={
A(){return"Hand."+this.b}}
A.rq.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
f0(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.k0.prototype={
B(){var s,r,q,p=t.N,o=A.o(p,t.x)
for(s=this.a,r=0;r<5;++r){q=B.y[r]
o.k(0,q,s.h(0,q))}return A.O(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.R(B.y,t.ej.a(new A.p1(this)),t.dD).a6(0," \xb7 ")}}
A.p0.prototype={
$2(a,b){return new A.P(A.x(a),A.x(b),t.q)},
$S:97}
A.p1.prototype={
$1(a){return this.a.a.h(0,A.x(a))},
$S:43}
A.bS.prototype={
B(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.O(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.oN.prototype={
bW(a){t.G.a(a)
return a.a===5&&B.a.a2(B.y,new A.oU(this,a))},
fc(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bW(b))return null
s=this.e++
r=new A.bS(s,a,A.e([A.p_(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
dN(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bW(b))return!1
B.a.l(s.c,A.p_(b,c,B.av))
return!0},
m5(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bW(b))return!1
s.r=A.p_(b,0,B.ce)
return!0},
jG(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
oP(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.q(n).c)
B.a.X(n)
s=A.e([],t.bV)
for(r=q.b,r=new A.ah(r,r.r,r.e,A.q(r).i("ah<2>"));r.m();)s.push(r.d.B())
return A.O(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.oU.prototype={
$1(a){var s
A.x(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.h7.prototype={
A(){return"BackendFallbackReason."+this.b}}
A.mS.prototype={
hs(a,b){if(a.a!==B.X)return a
return new A.f4(B.b9,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.mT.prototype={
dO(a,b){if(a.a===B.X&&!a.d)return new A.pA(b,a.B(),B.cW)
return new A.oY(b,a.d,a.e,a.B(),B.cW)},
n_(a){return this.dO(a,null)}}
A.f4.prototype={
B(){var s,r=this,q=A.o(t.N,t.X)
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
A.mU.prototype={
cg(a){var s,r,q,p,o=null,n=a==null?o:B.b.bc(a).toLowerCase()
if(n==null||n.length===0)return B.dA
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.f4(B.X,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.f4(B.b9,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.oZ.prototype={}
A.oY.prototype={
gbk(){var s=this,r=s.b,q=r==null?null:r.gbk()
if(q==null)q=A.q0("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jj(s.e)
return r},
ba(){if(this.f===B.cX)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.ba()
this.f=B.B},
b2(a,b){var s
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
if(this.f!==B.B)A.i(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.b2(a,b)},
b4(a){var s
if(this.f!==B.B)A.i(A.m("legacy backend is not ready"))
B.k.ao(A.O(["backend","legacy","interpolation",0,"facts",A.lT(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.b4(a)},
bq(a){var s
if(this.f!==B.B)A.i(A.m("legacy backend is not ready"))
B.k.ao(A.O(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bq(a)}}
A.pB.prototype={}
A.pA.prototype={
gbk(){var s=this.b,r=s==null?null:s.gbk()
if(r==null)r=A.q0("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jj(this.c)
return s},
ba(){if(this.d===B.cX)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.ba()
this.d=B.B},
b2(a,b){var s
if(this.d!==B.B)A.i(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.y("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.b2(a,b)},
b4(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.az){p=q==null
if(p||!q.gdK()){if(s.d!==B.az)A.i(A.m("pixeldart backend is not context-lost"))
s.d=B.B
if(!p)q.j9()}p=s.d
if(p===B.az)return}if(p!==B.B)A.i(A.m(r))
B.k.ao(A.O(["backend","pixeldart","interpolation",0,"facts",A.lT(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdK()){if(s.d!==B.B)A.i(A.m(r))
s.d=B.az
q.iW()
return}q.b4(a)}},
bq(a){var s
if(this.d!==B.B)A.i(A.m("pixeldart backend is not ready"))
B.k.ao(A.O(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bq(a)}}
A.pC.prototype={
mn(a,b){var s,r,q,p,o,n,m
a.C()
s=B.bI.cg(a)
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
A.hN.prototype={
A(){return"RendererBackendKind."+this.b}}
A.ey.prototype={
A(){return"RendererBackendState."+this.b}}
A.q1.prototype={}
A.kr.prototype={}
A.q_.prototype={
ki(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.y("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.y("renderer provenance values must be non-empty",null))}},
jj(a){var s=this
return A.xv(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.lb.a(a))},
B(){var s,r,q,p=this,o=A.o(t.N,t.z)
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
A.bs.prototype={
A(){return"SleepLocation."+this.b}}
A.fv.prototype={}
A.nm.prototype={
d6(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jT(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.O(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.O(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nn.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:98}
A.no.prototype={
$1(a){return t.oC.a(a).b===this.a},
$S:99}
A.jS.prototype={
A(){return"InteractionType."+this.b}}
A.eH.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.rv.prototype={}
A.eG.prototype={}
A.jj.prototype={}
A.oC.prototype={}
A.oG.prototype={
eS(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.S(p,new A.oH())
return p},
mw(a,b){var s,r,q,p,o,n=b.b
if(n.gM(n))return B.lK
s=t.N
r=A.a2(s)
q=A.a2(s)
for(s=n.gZ(),s=s.gt(s),p=a.c;s.m();){o=s.gn()
if(B.a.gU(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eG(B.aE,r)
s=r.a
o=B.a.gU(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.gU(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.eG(B.dl,r)
return new A.eG(B.bt,r)},
lA(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jj(e,!1,B.lJ,null)
s=p.d===c
r=this.mw(p,d)
q.oP(e)
return new A.jj(e,s,r,r.a===B.aE&&s?'The world says "'+d.c+'". The entry says "'+B.a.gU(p.c).p(0)+'".':null)},
n0(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aE)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.oC(B.a.gU(s.c).p(0)+" but "+A.w(a.f))}}
A.oH.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:14}
A.cd.prototype={
A(){return"RuptureStep."+this.b}}
A.q6.prototype={}
A.cR.prototype={}
A.q7.prototype={
gf1(){var s=B.b2.h(0,this.a)
return s==null?0:s},
jX(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.E)s=q.e
else s=!0
if(s)return B.cs
r=A.w7(b)
s=q.c
B.a.G(s)
B.a.J(s,r)
B.a.G(q.d)
q.a=B.ab
q.b=0
q.e=!1
return A.e([B.e3],t.e_)},
m7(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.y("rupture advance must be a finite non-negative duration",null))
if(l.a===B.E||a===0)return B.cs
s=A.e([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.E))break
A:{q=l.a
p=B.b2.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.Y)l.lV(s)
p=l.b
o=B.b2.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cR())
if(q===B.Y){l.a=B.E
l.b=0
l.e=!0
B.a.l(s,B.e2)}else{p=q.a+1
if(!(p<7))return A.f(B.cq,p)
l.a=B.cq[p]
l.b=0
B.a.l(s,new A.cR())}}}return A.al(s,t.k8)},
B(){var s=this,r=t.N
return A.O(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.al(s.c,r),"extinguishedMantles",A.al(s.d,r),"completed",s.e],r,t.z)},
lV(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.K(B.d.aO(l.b/l.gf1()*A.al(s,r).length),0,A.al(s,r).length)
p=l.d
for(;;){o=A.as(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.as(s,!1,r)
o.$flags=3
n=o
o=A.as(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.f(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cR())}}}
A.jE.prototype={
gbu(){var s=this.b
if(s<6||s>18)return 0
return B.d.K((s-6)/12,0,1)}}
A.eF.prototype={
B(){var s=this
return A.O(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rr.prototype={
er(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aU(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.u6.prototype={
$0(){var s,r,q=this.b,p=(this.a^q*73244475)&2147483647
p=(p^p>>>16)*73244475&2147483647
p=(p^p>>>16)&2147483647
s=B.c.P(p,5)===0||B.c.P(p,7)===0
r=s?0.35+B.c.P(p,66)/100:0
return new A.eF(q,s,r,12-(q-1)*0.1)},
$S:100}
A.ue.prototype={
$1(a){var s=B.c.cA(this.a,a)&255
return B.c.K(B.d.aF(s+((B.c.cA(this.b,a)&255)-s)*this.c),0,255)},
$S:38}
A.pg.prototype={
ns(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
m9(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gH(),q=q.gt(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.q(k).i("I<1,2>")
k=A.J(new A.I(k,j),j.i("p.E"))
B.a.S(k,new A.pi())
j=t.N
k=A.vx(k,j,j)
s=this.b
r=A.q(s).i("I<1,2>")
s=A.J(new A.I(s,r),r.i("p.E"))
B.a.S(s,new A.pj())
s=A.vx(s,j,j)
r=A.o(j,t.P)
q=this.c
p=A.q(q).i("I<1,2>")
q=A.J(new A.I(q,p),p.i("p.E"))
B.a.S(q,new A.pk())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.O(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.O(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pi.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.pj.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.pk.prototype={
$2(a,b){var s=t.lY
return B.b.F(s.a(a).a,s.a(b).a)},
$S:102}
A.cC.prototype={
B(){var s=this
return A.O(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.qU.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fx(e.a),c=t.N,b=t.P,a=A.o(c,b)
for(s=e.b,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.m0(q,r.b))}s=A.fx(e.r)
q=A.fx(e.w)
p=A.fx(e.x)
o=A.o(c,t.l_)
for(n=e.as,n=new A.I(n,A.q(n).i("I<1,2>")).gt(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.S(l.b);i.m();){h=i.gn()
j.push(A.O(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.o(c,b)
for(m=e.at,m=new A.I(m,A.q(m).i("I<1,2>")).gt(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.o(c,b)
for(m=e.ax,m=new A.I(m,A.q(m).i("I<1,2>")).gt(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.O(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
m0(a,b){var s,r=A.fx(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fx(q.bH(0,new A.qV(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gV(s))r.k(0,"_ambient",A.fx(s.bH(0,new A.qW(),t.S,t.z)))
return r}}
A.qV.prototype={
$2(a,b){return new A.P(A.c(a),t.ey.a(b).B(),t.iI)},
$S:103}
A.qW.prototype={
$2(a,b){return new A.P(A.c(a),t.bR.a(b).B(),t.iI)},
$S:104}
A.eE.prototype={
B(){return A.O(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eD.prototype={
B(){return A.O(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.i4.prototype={
B(){var s=t.N
return A.O(["field",this.a,"value",this.b],s,s)}}
A.kV.prototype={
B(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.O(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.ex.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gV(s))q.k(0,"effects",s)
return q}}
A.cZ.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gV(s))q.k(0,"when",s)
return q}}
A.qX.prototype={
c9(){var s=0,r=A.bD(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$c9=A.bG(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.am(A.aY(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$c9)
case 6:n=b
j=t.N
s=7
return A.am(A.aY(A.b(n.text()),j),$async$c9)
case 7:m=b
l=A.F5(m)
i=J.aF(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aF(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aF(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aF(l,"documents")
i.toString
h.a(i)
i=J.aF(l,"street")
i.toString
h.a(i)
i=J.aF(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aF(l,"nights")
i.toString
h.a(i)
i=J.aF(l,"endings")
i.toString
o.w=h.a(i)
i=J.aF(l,"records")
i.toString
o.x=h.a(i)
i=J.aF(l,"cues")
i.toString
h.a(i)
i=J.aF(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aF(l,"reactions"))){g=J.aF(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.o(j,t.z)
o.Q=h.a(g)
if(i.b(J.aF(l,"variants"))){g=J.aF(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.o(j,t.z)
o.as=h.a(g)
if(i.b(J.aF(l,"residues"))){g=J.aF(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.o(j,t.z)
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
case 5:return A.bA(null,r)
case 1:return A.bz(p.at(-1),r)}})
return A.bB($async$c9,r)},
jn(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gH().cY(0,new A.qY())
r=p.$ti
q=t.N
return A.vx(new A.ct(p,r.i("P<j,j>(1)").a(new A.qZ()),r.i("ct<1,P<j,j>>")),q,q)}return null},
jr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.h()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.e([],t.hb)
for(o=J.S(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.o(n,n)
if(f.b(l))for(j=l.gH(),j=j.gt(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.x(i.b))}B.a.l(p,new A.ex(A.x(m.h(0,"id")),A.x(m.h(0,"label")),A.x(m.h(0,"reply")),A.b1(k,n,n)))}if(p.length<2)return g
return new A.kV(r,a,b,c,d,A.al(p,t.Y))},
jq(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aR(p)||o!==B.d.aR(o))return n
return new A.eE(B.d.aR(p),B.d.aR(o))},
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
if(typeof p!="number"||p!==B.d.aR(p)||typeof o!="string"||typeof n!="string")return m
return new A.eD(B.d.aR(p),o,n)},
oQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.o(a5,t.iu),a7=A.o(a5,t.c_),a8=A.o(a5,t.d8),a9=t.a,b0=A.o(a5,t.iD),b1=A.o(a5,t.fx),b2=A.o(a5,t.iC),b3=A.o(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.o(a3,a4)
for(o=o.gH(),o=o.gt(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.fq(l,null):null
if(k==null||!q.b(m.b))continue
j=A.o(a5,a5)
for(m=q.a(m.b).gH(),m=m.gt(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.x(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.o(a3,r)
for(m=n.$ti.i("cb<1>"),l=new A.cb(n,n.r,n.e,m);l.m();){i=l.d
g=a1.jq(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.o(a3,s)
for(m=new A.cb(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jp(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.ah(b4,b4.r,b4.e,A.q(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jr(A.x(d.h(0,"visitor")),B.d.aR(A.aE(d.h(0,"day"))),A.x(d.h(0,"tier")),B.d.aR(A.aE(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.ah(b4,b4.r,b4.e,A.q(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.o(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gH(),s=s.gt(s);s.m();){r=s.gn()
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
s=t.cF
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.S(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.i4(A.x(a0.h(0,"field")),A.x(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.qU(A.o(a3,a4),a6,a7,a8,A.o(a5,a9),A.o(a5,a9),A.o(a3,a9),A.o(a3,a9),A.o(a3,a9),A.o(a5,a9),A.o(a5,a9),A.o(a5,a9),b0,b1,b2,b3)}}
A.qY.prototype={
$1(a){t.ag.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:105}
A.qZ.prototype={
$1(a){t.ag.a(a)
return new A.P(A.x(a.a),A.x(a.b),t.q)},
$S:106}
A.ma.prototype={
bE(a,b,c){var s=B.b.bc(a),r=B.b.bc(c)
if(r.length===0)return""
if(b)return s.length===0?r:s+": "+r
return s.length===0?r:s+": "+r},
iJ(a,b){return this.bE(a,!1,b)}}
A.cA.prototype={
A(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dz.prototype={
bX(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dz(q,p,o,n,m)},
mV(a){var s=null
return this.bX(s,s,s,a,s)},
mY(a){var s=null
return this.bX(s,s,s,s,a)},
mR(a){var s=null
return this.bX(s,s,a,s,s)},
mP(a){var s=null
return this.bX(s,a,s,s,s)},
mA(a){var s=null
return this.bX(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.O(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.md.prototype={
$1(a){return a==null?null:A.U(a)},
$S:107}
A.mb.prototype={
$1(a){return t.g8.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:34}
A.mc.prototype={
$0(){return A.i(B.fn)},
$S:6}
A.mo.prototype={
ci(a,b){var s,r=B.J.iJ(a,b)
if(r.length===0)return
s=this.a
s.textContent=r
s.className="ambient-notice visible"
this.aG(r)
A.c(A.b(v.G.window).setTimeout(A.yy(new A.mq(this)),7000))},
aG(a){var s,r,q=this
if(!q.c||B.b.bc(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.c(A.b(v.G.window).setTimeout(A.yy(new A.mp(q,s)),4200))}}
A.mq.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:109}
A.mp.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cn.prototype={
A(){return"AudioOutputMode."+this.b}}
A.cB.prototype={
A(){return"AudioDynamicRange."+this.b}}
A.d8.prototype={
A(){return"AudioReverbMode."+this.b}}
A.d7.prototype={
A(){return"AudioDuckingMode."+this.b}}
A.dA.prototype={
cF(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dA(r,q,p,a==null?s.e:a)},
mO(a){return this.cF(null,null,a,null)},
mF(a){return this.cF(null,a,null,null)},
mT(a){return this.cF(null,null,null,a)},
mE(a){return this.cF(a,null,null,null)},
B(){var s=this
return A.O(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mB.prototype={
$1$2(a,b,c){return B.a.aZ(c.i("p<0>").a(a),new A.mC(b,c),new A.mD(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:166}
A.mC.prototype={
$1(a){return t.aT.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.mD.prototype={
$0(){return A.i(A.a9("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.mW.prototype={
eM(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.J.iJ(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.mZ.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.n2.prototype={
$1(a){A.b(a)
return this.a.$1(A.U(this.b.checked))},
$S:1}
A.n1.prototype={
$1(a){var s
A.b(a)
s=A.fp(A.x(this.a.value))
if(s!=null)this.b.$1(s)},
$S:2}
A.n0.prototype={
$1(a){A.x(a)
return a.length!==0&&!B.b.W(a,"brush-state-")},
$S:3}
A.dC.prototype={
A(){return"BrushComponentKind."+this.b}}
A.dD.prototype={
A(){return"BrushComponentState."+this.b}}
A.b_.prototype={
gm3(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bc(s.a).length===0||B.b.bc(s.c).length===0)throw A.d(B.fe)
if(s.e===B.bF&&s.b!==B.bE)throw A.d(B.eS)}}
A.fb.prototype={
gcD(){var s,r,q,p,o=t.N
o=A.o(o,o)
for(s=this.r.gH(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aA(r)
o.k(0,q,p.gM(r)?"":p.gO(r))}return o},
bC(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.kN.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.O(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.by(r)
q=n.h(0,i)
q.toString
A.by(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
return A.fc(null,a,A.U(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.by(r)
q=n.h(0,i)
q.toString
A.by(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gcD()
return A.fc(l,null,m,r,p,o,s,q)},
dM(a){var s=null
return this.bC(a,s,s,s,s,s)},
mL(a){var s=null
return this.bC(s,s,s,a,s,s)},
mM(a){var s=null
return this.bC(s,s,s,s,a,s)},
mI(a){var s=null
return this.bC(s,a,s,s,s,s)},
mJ(a){var s=null
return this.bC(s,s,a,s,s,s)},
mZ(a){var s=null
return this.bC(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.eD)
p=this.r
if(p.gH().N(0,new A.ng()))throw A.d(B.fh)
if(p.gH().N(0,new A.nh()))throw A.d(B.f6)
p=p.gaA()
o=A.q(p)
s=o.i("hi<p.E,j>")
r=s.i("M<p.E>")
q=A.J(new A.M(new A.hi(p,o.i("p<j>(p.E)").a(new A.ni()),s),s.i("n(p.E)").a(new A.nj()),r),r.i("p.E"))
if(A.hx(q,A.H(q).c).a!==q.length)throw A.d(B.eG)},
B(){var s,r,q=this,p=t.N,o=A.o(p,t.a)
for(s=q.r.gH(),s=s.gt(s);s.m();){r=s.gn()
o.k(0,r.a,A.as(r.b,!0,p))}return A.O(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.ng.prototype={
$1(a){t.cW.a(a)
return J.vk(a.b,new A.nf(a))},
$S:35}
A.nf.prototype={
$1(a){var s
A.x(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.wW(a)
else s=!1
return s},
$S:3}
A.nh.prototype={
$1(a){t.cW.a(a)
return a.a!=="pause"&&J.vk(a.b,B.d_.gau(B.d_))},
$S:35}
A.ni.prototype={
$1(a){return t.a.a(a)},
$S:112}
A.nj.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.ne.prototype={
$1(a){return typeof a=="string"},
$S:16}
A.dB.prototype={
A(){return"BindingCaptureStatus."+this.b}}
A.eb.prototype={
A(){return"BindingConflictResolution."+this.b}}
A.d9.prototype={}
A.jk.prototype={
dH(a){var s=this
if(!s.a.r.R(a))return new A.d9(B.bB,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.dB},
mo(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aJ
if(!A.wW(a)){p.c=p.b=null
return new A.d9(B.bD,B.d0.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gH()
r=r.gt(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.wO(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.d9(B.aK,a+" is already bound to "+s)}return p.kt(a)},
eH(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aJ
switch(a.a){case 2:m.c=m.e=m.d=null
return B.dC
case 1:s=A.w_(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wg(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.wr(r,k))
m.a=m.a.dM(s)
break
case 0:s=A.w_(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gO(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.hZ(p,1,null,A.H(p).c)
o=p.$ti
p=new A.aT(p,p.gu(0),o.i("aT<a5.E>"))
o=o.i("a5.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.wr(r,k)}else{r=s.h(0,j)
r.toString
r=A.wg(A.wr(r,k),q)}s.k(0,j,r)
m.a=m.a.dM(s)
break}m.c=m.e=m.d=null
return B.bz},
kt(a){var s,r,q=this,p=q.b
if(p==null)return B.aJ
s=A.w_(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wg(r,a))
q.a=q.a.dM(s)
q.b=null
return B.bz}}
A.hd.prototype={
ka(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jk(f.w)
s=f.b
s.className=A.x(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.n_(a,B.dL,1)))
A.b(s.appendChild(A.D(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.D(a,"div",c,e)
f.fa(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fa(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.de(a,r,"invertX","Invert horizontal look")
f.de(a,r,"invertY","Invert vertical look")
f.de(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.D(a,"div",c,e)
for(p=B.iH.gH(),p=p.gt(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fc(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.vl(l)?"unbound":J.A6(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.dE(a,new A.b_("settings.controls.bind."+m,B.bE,n,h,B.n),new A.nc(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.b(j.appendChild(g))
A.b(q.appendChild(j))
o.k(0,m,g)}A.b(s.appendChild(q))
p=A.D(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.D(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.dC()
A.b(s.appendChild(A.dE(a,B.dM,new A.nd(f),e)))},
j0(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fv(this.x.mo(A.x(a.code)))},
fv(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aK?B.dQ:B.n
p=o.Q.h(0,r)
if(p!=null)A.vo(p,q)}n=a.a
if(n===B.aK)o.lM()
else if(n===B.bC){n=o.x
n===$&&A.h()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dC()}else{o.di()
o.ax=null}},
lM(){var s,r,q,p,o
this.di()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.hD[r]
p=A.k(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.dE(p,new A.b_("settings.controls.resolve."+o,B.G,o,"resolve key binding conflict",B.n),new A.nb(this,q),null)))}},
di(){var s,r=this.at
if(r==null)return
while(A.k(r.firstChild)!=null){s=A.k(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dC(){var s,r,q,p
for(s=this.Q,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0);s.m();){r=s.d
q=r.b
p=this.x
p===$&&A.h()
p=p.a.gcD().h(0,r.a)
if(p==null)p="unbound"
q.textContent=p
A.vo(q,B.n)}},
fa(a,b,c,d,e,f){var s,r=A.D(a,"label","setting-row",null)
A.b(r.appendChild(A.D(a,"span",null,d)))
s=A.Am(a,new A.b_("settings.controls."+c,B.dO,d,null,B.n),f,e,new A.n9(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
de(a,b,c,d){var s=A.D(a,"label","setting-toggle",null),r=A.An(a,new A.b_("settings.controls."+c,B.dP,d,null,B.n),!1,new A.na(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.D(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
ft(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sey(a){this.f=t.dO.a(a)},
sb_(a){this.r=t.Z.a(a)}}
A.nc.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.h()
s=n.dH(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bA){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.vo(q,B.bF)}p.di()
return null},
$S:0}
A.nd.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nb.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.h()
return s.fv(r.eH(this.b))},
$S:0}
A.n9.prototype={
$1(a){var s=this.a,r=s.w
s.ft(this.b==="horizontalSensitivity"?r.mJ(a):r.mZ(a))},
$S:113}
A.na.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mL(a)
break A}if("invertY"===q){s=r.w.mM(a)
break A}s=r.w.mI(a)
break A}r.ft(s)},
$S:7}
A.nq.prototype={
kc(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.D(a,i,"door-speaker",j)
k.c!==$&&A.K()
k.c=s
r=A.D(a,i,"door-line",j)
k.d!==$&&A.K()
k.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(h.appendChild(s))
A.b(h.appendChild(r))
r=A.D(a,i,"door-cite-list",j)
k.f!==$&&A.K()
k.f=r
s=A.D(a,i,"door-cite-result",j)
k.r!==$&&A.K()
k.r=s
A.b(h.appendChild(r))
A.b(h.appendChild(s))
for(s=A.iR,r=k.w,q=0;q<5;++q){p=B.hY[q]
o=A.b(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.nr(k,p)
if(typeof n=="function")A.i(A.y("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.e9()]=n
o.addEventListener("click",m)
A.b(h.appendChild(o))
B.a.l(r,o)}s=A.D(a,"button","door-continue","continue")
k.e!==$&&A.K()
k.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.a0(new A.ns(k)))
A.b(h.appendChild(s))
l=A.a0(new A.nt(k,a))
k.y=l
h.addEventListener("keydown",l)
A.b(A.k(a.body).appendChild(h))},
eY(a,b){var s,r,q,p=this
p.ax=!0
s=p.c
s===$&&A.h()
s.textContent=a
s=p.d
s===$&&A.h()
s.textContent=B.J.bE("",!0,b)
for(s=p.w,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.b(s[q].style).display=""
r=p.e
r===$&&A.h()
A.b(r.style).display="none"
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
eZ(a,b){var s,r,q,p=this,o=p.d
o===$&&A.h()
o.textContent=B.J.bE("",!0,a)
for(o=p.w,s=o.length,r=0;r<o.length;o.length===s||(0,A.r)(o),++r)A.b(o[r].style).display="none"
for(o=p.x,s=o.length,r=0;r<o.length;o.length===s||(0,A.r)(o),++r)A.b(o[r].style).display="none"
o=p.e
o===$&&A.h()
s=A.b(o.style)
q=b?"none":""
s.display=q
q=p.r
q===$&&A.h()
q.textContent=""
if(!b)o.focus()},
jK(a){return this.eZ(a,!1)},
jM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.lX.a(a)
for(s=g.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].remove()
B.a.G(s)
r=g.e
r===$&&A.h()
r=A.b(r.style)
p=b==null
o=p?"none":""
r.display=o
for(r=a.length,o=g.a,n=!p,m=A.iR,l=g.b,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){k={}
j=a[q]
k.a=null
k.a=j.a
i=A.b(l.createElement("button"))
i.className="door-reaction"
i.textContent=j.b
i.setAttribute("type","button")
j=new A.nv(k,g)
if(typeof j=="function")A.i(A.y("Attempting to rewrap a JS function.",null))
h=function(c,d){return function(e){return c(d,e,arguments.length)}}(m,j)
h[$.e9()]=j
i.addEventListener("click",h)
if(n){i.disabled=!0
if(k.a===b)i.setAttribute("aria-pressed","true")}A.b(o.appendChild(i))
B.a.l(s,i)}if(s.length!==0&&p)B.a.gO(s).focus()},
f_(a,b){var s,r,q=this.d
q===$&&A.h()
q.textContent=B.J.bE("",!0,a+"\n\n"+b)
for(q=this.x,s=q.length,r=0;r<q.length;q.length===s||(0,A.r)(q),++r)q[r].disabled=!0
q=this.e
q===$&&A.h()
A.b(q.style).display=""
q.focus()},
jJ(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.iR,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nu(o,this)
if(typeof o=="function")A.i(A.y("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.e9()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
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
snR(a){this.z=t.ov.a(a)},
snT(a){this.Q=t.Z.a(a)},
snS(a){this.as=t.jY.a(a)},
so1(a){this.at=t.ov.a(a)}}
A.nr.prototype={
$1(a){var s
A.b(a)
s=this.a.z
return s==null?null:s.$1(this.b)},
$S:1}
A.ns.prototype={
$1(a){var s
A.b(a)
s=this.a.Q
return s==null?null:s.$0()},
$S:1}
A.nt.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.b(a)
s=this.a
if(!s.ax||A.x(a.code)!=="Tab")return
r=A.e([],t.W)
for(q=s.w,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.x(A.b(n.style).display)!=="none")r.push(n)}for(q=s.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.x(A.b(n.style).display)!=="none")r.push(n)}q=s.e
q===$&&A.h()
if(A.x(A.b(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.h()
m=A.b(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.c(m.length);++l){k=A.k(m.item(l))
if(s.b(k))B.a.l(r,k)}if(r.length===0)return
j=A.k(this.b.activeElement)
if(A.U(a.shiftKey)){if(j===B.a.gO(r)||!B.a.q(r,j)){a.preventDefault()
B.a.gU(r).focus()}}else if(j===B.a.gU(r)||!B.a.q(r,j)){a.preventDefault()
B.a.gO(r).focus()}},
$S:2}
A.nv.prototype={
$1(a){var s
A.b(a)
s=this.b.at
return s==null?null:s.$1(this.a.a)},
$S:1}
A.nu.prototype={
$1(a){var s
A.b(a)
s=this.b.as
return s==null?null:s.$1(this.a.a)},
$S:1}
A.ny.prototype={
kd(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.D(s,"h1","journal-title",null)
o.f!==$&&A.K()
o.f=r
q=A.D(s,"div","ending-copy",null)
o.r!==$&&A.K()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.D(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.a0(new A.nz(o)))
A.b(n.appendChild(p))},
jL(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bI()},
snV(a){this.w=t.Z.a(a)}}
A.nz.prototype={
$1(a){var s
A.b(a)
s=this.a
s.a5()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.dd.prototype={
A(){return"GameplayInteractionMode."+this.b}}
A.cE.prototype={
A(){return"GameplayPromptDensity."+this.b}}
A.cF.prototype={
A(){return"GameplayTextPacing."+this.b}}
A.de.prototype={
A(){return"GameplayJournalLayout."+this.b}}
A.dc.prototype={
A(){return"GameplayConfirmationLevel."+this.b}}
A.df.prototype={
A(){return"GameplaySaveFeedback."+this.b}}
A.cD.prototype={
A(){return"GameplayFocusLossBehavior."+this.b}}
A.o_.prototype={
b9(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.x3(n,b==null?s.x:b,l,r,o,q,m,p)},
mC(a){var s=null
return this.b9(s,a,s,s,s,s,s,s)},
mK(a){var s=null
return this.b9(s,s,s,a,s,s,s,s)},
mQ(a){var s=null
return this.b9(s,s,s,s,s,a,s,s)},
mW(a){var s=null
return this.b9(s,s,s,s,s,s,s,a)},
mN(a){var s=null
return this.b9(s,s,s,s,a,s,s,s)},
mB(a){var s=null
return this.b9(a,s,s,s,s,s,s,s)},
mU(a){var s=null
return this.b9(s,s,s,s,s,s,a,s)},
mG(a){var s=null
return this.b9(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.O(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.co.prototype={
A(){return"GraphicsPreset."+this.b}}
A.dK.prototype={
bB(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dK(s.a,r,q,p,o,n,m)},
dL(a){var s=null
return this.bB(a,s,s,s,s,s)},
ho(a){var s=null
return this.bB(s,a,s,s,s,s)},
hp(a){var s=null
return this.bB(s,s,s,a,s,s)},
mS(a){var s=null
return this.bB(s,s,s,s,a,s)},
mH(a){var s=null
return this.bB(s,s,a,s,s,s)},
mX(a){var s=null
return this.bB(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.ir,q))throw A.d(A.a9("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.hK,q))throw A.d(A.a9("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.iu,q))throw A.d(A.a9("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.io,q))throw A.d(A.a9("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.O(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.ob.prototype={
$1(a){return t.jI.a(a).b===this.a.h(0,"preset")},
$S:37}
A.oc.prototype={
$0(){return A.i(B.eX)},
$S:6}
A.od.prototype={
B(){return A.O(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.o5.prototype={}
A.o6.prototype={}
A.ho.prototype={
ke(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.b(l.appendChild(A.D(a,"h1","journal-title","Graphics")))
A.b(l.appendChild(A.D(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.D(a,"div","settings-grid",n)
r=t.N
o.bQ(a,s,"preset","quality preset",A.O(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bQ(a,s,"renderScale","render scale",A.O(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bQ(a,s,"frameTarget","frame target",A.O(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bQ(a,s,"antialiasing","anti-aliasing",A.O(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bQ(a,s,"textureQuality","texture quality",A.O(["high","High","medium","Medium","low","Low"],r,r))
q=A.D(a,"label","setting-toggle",n)
r=A.b(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.a0(new A.o9(o)))
r=o.x
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.D(a,"span",n,"Dynamic resolution")))
A.b(s.appendChild(q))
A.b(l.appendChild(s))
r=A.D(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.b(l.appendChild(r))
p=A.D(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.a0(new A.oa(o)))
A.b(l.appendChild(p))},
bQ(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.D(a,"label","setting-row",null)
A.b(s.appendChild(A.D(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.I(e,A.q(e).i("I<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.a0(new A.o8(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
fA(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
eX(a,b,c){var s,r,q=this
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
sey(a){this.f=t.fu.a(a)},
sb_(a){this.r=t.Z.a(a)}}
A.o9.prototype={
$1(a){var s
A.b(a)
s=this.a
s.fA(s.z.ho(A.U(s.x.checked)))},
$S:2}
A.oa.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a5()},
$S:2}
A.o8.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.x(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.hp(B.a.ai(B.cp,new A.o7(s)))
break A}if("renderScale"===q){p=r.z.mS(s)
break A}if("frameTarget"===q){p=r.z.mH(s)
break A}if("antialiasing"===q){p=r.z.dL(s)
break A}if("textureQuality"===q){p=r.z.mX(s)
break A}p=r.z
break A}r.fA(p)},
$S:2}
A.o7.prototype={
$1(a){return t.jI.a(a).b===this.a},
$S:37}
A.oe.prototype={
kf(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.D(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.D(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.D(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.D(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.a0(new A.of(this)))
A.b(p.appendChild(r))}}
A.of.prototype={
$1(a){A.b(a)
return this.a.a5()},
$S:1}
A.oO.prototype={
bI(){var s,r=this
r.k_()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fi(r.CW,s)
r.lE()
r.fQ()},
kA(){var s,r=this,q=r.a,p=A.D(q,"div","page-turn",null),o=A.D(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a0(new A.oP(r)))
s=A.D(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a0(new A.oQ(r)))
q=A.D(q,"span","right-day-label",null)
r.Q!==$&&A.K()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
hc(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fi(s.CW+a,r)
s.fQ()},
fi(a,b){if(a<1)return 1
if(a>b)return b
return a},
lE(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.eS(),r=s.length,q=A.iR,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gU(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.oR(j,n,l)
if(typeof m=="function")A.i(A.y("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.e9()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
fQ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.q(p).i("ah<2>"),n=new A.ah(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.S(r,new A.oS())
j.fP(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.ah(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.S(s,new A.oT())
j.fP(i,s)
k=B.d.K(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.b(i.style).setProperty("width",B.d.bt(k*100,1)+"%")},
fP(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.b(a.appendChild(this.l2(b[r])))},
l2(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.D(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.d.p(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.lj(m,!1)
l.className=A.x(l.className)+" margin"
A.b(j.appendChild(l))}return j},
lj(a,b){var s=b?"hand-line struck":"hand-line",r=A.D(this.a,"div",s,a.p(0))
A.b(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.oP.prototype={
$1(a){A.b(a)
return this.a.hc(-1)},
$S:1}
A.oQ.prototype={
$1(a){A.b(a)
return this.a.hc(1)},
$S:1}
A.oR.prototype={
$1(a){var s,r,q
A.b(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.oS.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.oT.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.hG.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.k(this.a.body).appendChild(s))},
bI(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.x(n.className),"open"))return
s=$.pq
if(s!=null&&s!==o)s.a5()
$.pq=o
r=o.a
o.d=A.k(r.activeElement)
A.vr(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.a0(o.glw())
o.e=q
r.addEventListener("keydown",q)
p=A.yw(n)
if(p.length!==0)B.a.gO(p).focus()
else n.focus()},
a5(){var s,r,q=this,p=q.b
if(!B.b.q(A.x(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pq===q)$.pq=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
j0(a){},
lx(a){A.b(a)
this.j0(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"){a.preventDefault()
this.a5()
return}if(A.x(a.code)==="Tab")this.lT(a)},
lT(a){var s,r=A.yw(this.b)
if(r.length===0)return
s=A.k(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.gO(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}}else if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gO(r).focus()}},
sb0(a){this.c=t.Z.a(a)}}
A.be.prototype={
A(){return"PauseReason."+this.b}}
A.cN.prototype={
A(){return"PausePage."+this.b}}
A.dR.prototype={
A(){return"PauseTransitionKind."+this.b}}
A.dk.prototype={
B(){var s,r=A.o(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a_(a,b){if(b==null)return!1
return b instanceof A.dk&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gL(a){return A.cv(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dQ.prototype={
ghk(){var s=this.a
return s.length===1&&B.a.gO(s).a===B.b4},
B(){var s=A.o(t.N,t.X),r=this.a,q=A.H(r),p=q.i("R<1,Y<j,F?>>")
r=A.J(new A.R(r,q.i("Y<j,F?>(1)").a(new A.pv()),p),p.i("a5.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.H(r)
p=q.i("R<1,j>")
r=A.J(new A.R(r,q.i("j(1)").a(new A.pw()),p),p.i("a5.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.pv.prototype={
$1(a){return t.lf.a(a).B()},
$S:116}
A.pw.prototype={
$1(a){return t.e0.a(a).b},
$S:117}
A.bV.prototype={}
A.pu.prototype={
j1(a){var s,r=this
if(r.a.ghk())return new A.bV(B.W,r.a,null)
s=r.a
s=new A.dQ(B.iq,s.b,a)
r.a=s
return new A.bV(B.cR,s,"pause.resume")},
md(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gU(p)
q=r.a.a
q=B.a.aL(q,0,q.length-1)
p=r.a
p=new A.dQ(q,p.b,p.c)
r.a=p
return new A.bV(B.cS,p,s.c)}if(q.ghk()&&r.a.b.length===0)return r.cd()
return new A.bV(B.W,r.a,null)},
cd(){var s=this.a
if(s.a.length===0)return new A.bV(B.W,s,null)
if(s.b.length!==0)return new A.bV(B.W,s,null)
this.a=B.b3
return new A.bV(B.cT,B.b3,s.c)},
oa(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.bV(B.W,q.a,null)
s=q.a
r=A.J(s.b,t.e0)
r.push(a)
s=new A.dQ(s.a,r,q.a.c)
q.a=s
return new A.bV(B.cR,s,null)},
n4(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.bV(B.W,o.a,null)
s=o.a
r=s.b
q=A.H(r)
p=q.i("M<1>")
r=A.J(new A.M(r,q.i("n(1)").a(new A.px(a)),p),p.i("p.E"))
q=o.a.c
r=new A.dQ(s.a,r,q)
o.a=r
return new A.bV(B.jD,r,q)},
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
case 8:s="help.close"
break
default:s=null}return s}}
A.px.prototype={
$1(a){return t.e0.a(a)!==this.a},
$S:118}
A.cO.prototype={
A(){return"PauseRootAction."+this.b}}
A.py.prototype={
bv(a,b,c,d){var s=B.iT.h(0,c)
s.toString
A.b(b.appendChild(A.dE(a,new A.b_(s,B.G,d,null,B.n),new A.pz(this,c),null)))},
so5(a){this.f=t.Z.a(a)},
so7(a){this.r=t.Z.a(a)},
snU(a){this.w=t.Z.a(a)},
so6(a){this.x=t.Z.a(a)},
snX(a){this.y=t.Z.a(a)},
sb_(a){this.z=t.Z.a(a)}}
A.pz.prototype={
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
break}},
$S:0}
A.bM.prototype={
A(){return"PauseSettingsCategory."+this.b}}
A.pJ.prototype={
jI(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.J.bE("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qf.prototype={
kk(a){var s,r,q,p,o,n=this.b
n.className=A.x(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.n_(a,B.dK,1)))
A.b(n.appendChild(A.D(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.D(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.i_[r]
p=B.cF.h(0,q)
p.toString
o=B.cE.h(0,q)
o.toString
A.b(s.appendChild(A.dE(a,new A.b_(o,B.G,p,p+" settings",B.n),new A.qg(this,q),null)))}A.b(s.appendChild(A.dE(a,B.dJ,new A.qh(this),null)))
A.b(n.appendChild(s))},
snQ(a){this.f=t.mP.a(a)},
sb_(a){this.r=t.Z.a(a)}}
A.qg.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qh.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fu.prototype={
kl(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.cF.h(0,d))+" settings",a=h.b
a.className=A.x(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.n_(a0,new A.b_("settings."+(s==null?f:s)+".heading",B.al,b,g,B.n),2)))
A.b(a.appendChild(A.D(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.D(a0,"div",e,g)
for(s=t.if,q=s.a(new A.qE(h)),p=B.a.gt(B.D),o=t.pl,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.li(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.D(a0,"div",e,g)
for(s=s.a(new A.qF(h)),q=B.a.gt(B.D),o=new A.T(q,s,o);o.m();)A.b(j.appendChild(h.lS(a0,q.gn())))
A.b(a.appendChild(j))
if(d===B.z)A.b(a.appendChild(h.ky(a0)))
if(d===B.A)A.b(a.appendChild(h.kx(a0)))
if(d===B.ax)A.b(a.appendChild(h.kz(a0)))
i=A.D(a0,"div",e,g)
for(s=t.lt.a(h.gla()),q=B.a.gt(B.is),s=new A.T(q,s,t.nU);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.dE(a0,new A.b_("settings."+o+".reset."+n,B.G,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.qG(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.dE(a0,new A.b_("settings."+(s==null?f:s)+".reset.all",B.G,"reset all settings","restore all settings to defaults",B.dR),new A.qH(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.dE(a0,new A.b_("settings."+(d==null?f:d)+".back",B.G,"return","return to settings categories",B.n),new A.qI(h),g)))},
kx(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.D(a,"div","settings-grid",j),f=k.dc(a,g,"reducedMotion","reduced motion (system default)"),e=k.dc(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dc(a,g,"captions","non-speech captions"),c=A.D(a,"label",h,j)
A.b(c.appendChild(A.D(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.a0(new A.qy(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.D(a,"label",h,j)
A.b(r.appendChild(A.D(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.b0[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.a0(new A.qz(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.D(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.a0(new A.qA(k)))
A.b(g.appendChild(l))
k.k3.J(0,A.O(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
dc(a,b,c,d){var s=A.D(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.a0(new A.qj(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.D(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
eU(a){var s,r
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
s.value=(r==null?B.bu:r).b}},
kz(a){var s,r,q=this,p="confirmations",o=A.D(a,"div","settings-grid",null)
q.bf(a,o,"interactionMode","interaction mode",B.cv,t.hP)
q.bf(a,o,"promptDensity","prompt density",B.cz,t.mV)
q.bf(a,o,"textPacing","dialogue text pacing",B.cw,t.ce)
q.bf(a,o,"journalLayout","journal layout",B.cm,t.jp)
q.bf(a,o,p,p,B.cj,t.iv)
q.bf(a,o,"saveFeedback","save feedback",B.co,t.iZ)
q.bf(a,o,"focusLossBehavior","when the window loses focus",B.ck,t.bW)
s=A.D(a,"label","setting-toggle",null)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.a0(new A.qB(q,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.D(a,"span",null,"contextual reminders")))
A.b(o.appendChild(s))
return o},
bf(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.EZ(f,t.aT,"T","_addGameplaySelect")
f.i("C<0>").a(e)
s=A.D(a,"label","setting-row",null)
A.b(s.appendChild(A.D(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.a0(new A.qw(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
ky(a){var s,r,q=this,p=A.D(a,"div","settings-grid",null),o=t.N,n=A.o(o,o)
for(s=0;s<4;++s){r=B.b_[s].b
n.k(0,r,r)}q.cj(a,p,"output","output",n)
n=A.o(o,o)
for(s=0;s<3;++s){r=B.aW[s].b
n.k(0,r,r)}q.cj(a,p,"dynamicRange","dynamic range",n)
n=A.o(o,o)
for(s=0;s<2;++s){r=B.aV[s].b
n.k(0,r,r)}q.cj(a,p,"reverb","room effect",n)
o=A.o(o,o)
for(s=0;s<2;++s){n=B.aU[s].b
o.k(0,n,n)}q.cj(a,p,"ducking","voice intelligibility",o)
return p},
cj(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.D(a,"label","setting-row",null)
A.b(s.appendChild(A.D(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.I(e,A.q(e).i("I<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.a0(new A.qo(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p1.k(0,c,r)},
ju(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.I(s,A.q(s).i("I<1,2>")).gt(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fC(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.H===r){s=a.c===B.aA
break A}if(B.A===r){s=a.c===B.Z
break A}if(B.z===r){s=a.c===B.F
break A}s=!1
break A}return s},
lb(a){var s,r
t.op.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.H===s){r=a===B.aA
break A}if(B.A===s){r=a===B.Z
break A}if(B.z===s){r=a===B.F
break A}r=!1
break A}return r},
lS(a,b){var s=this,r=A.D(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.a0(new A.qD(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.D(a,"span",null,b.b)))
return r},
li(a,b,c,d,e){var s,r,q=this,p=A.D(a,"label","setting-row",null),o=A.D(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.D(a,"output",null,"100%")
n.addEventListener("input",A.a0(new A.qC(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aJ(e,d))
return p},
eW(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.jK
r=B.d.K(b,s.a,s.b)
q.value=B.d.p(r)
p.textContent=""+B.d.aF(r*100)+"%"},
snZ(a){this.r=t.hm.a(a)},
so0(a){this.w=t.cz.a(a)},
so_(a){this.x=t.cz.a(a)},
snW(a){this.y=t.hm.a(a)},
snY(a){this.z=t.cz.a(a)},
so9(a){this.Q=t.cz.a(a)},
so4(a){this.as=t.m5.a(a)},
so3(a){this.at=t.Z.a(a)},
sb_(a){this.ax=t.Z.a(a)},
snP(a){this.ay=t.kn.a(a)},
snO(a){this.CW=t.km.a(a)},
so2(a){this.cx=t.Z.a(a)}}
A.qE.prototype={
$1(a){t.b9.a(a)
return a.d===B.P&&this.a.fC(a)},
$S:19}
A.qF.prototype={
$1(a){t.b9.a(a)
return a.d===B.ad&&this.a.fC(a)},
$S:19}
A.qG.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.qH.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.qI.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a5()},
$S:0}
A.qy.prototype={
$1(a){var s,r,q
A.b(a)
s=this.a
r=s.k2
q=A.fp(A.x(this.b.value))
r=r.mY(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.qz.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.k2.mV(B.a.ai(B.b0,new A.qx(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.qx.prototype={
$1(a){return t.g8.a(a).b===A.x(this.a.value)},
$S:34}
A.qA.prototype={
$1(a){var s
A.b(a)
s=this.a.cx
return s==null?null:s.$0()},
$S:1}
A.qj.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.k2.mR(s)
break A}if("photosensitivitySafe"===q){p=r.k2.mP(s)
break A}p=r.k2.mA(s)
break A}r.k2=p
r=r.CW
if(r!=null)r.$1(p)},
$S:2}
A.qB.prototype={
$1(a){var s
A.b(a)
s=this.a
s.k1=s.k1.mC(A.U(this.b.checked))},
$S:2}
A.qw.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=p.a
r=p.b
A:{if("interactionMode"===r){q=s.k1.mK(B.a.ai(B.cv,new A.qp(p.c)))
break A}if("promptDensity"===r){q=s.k1.mQ(B.a.ai(B.cz,new A.qq(p.c)))
break A}if("textPacing"===r){q=s.k1.mW(B.a.ai(B.cw,new A.qr(p.c)))
break A}if("journalLayout"===r){q=s.k1.mN(B.a.ai(B.cm,new A.qs(p.c)))
break A}if("confirmations"===r){q=s.k1.mB(B.a.ai(B.cj,new A.qt(p.c)))
break A}if("saveFeedback"===r){q=s.k1.mU(B.a.ai(B.co,new A.qu(p.c)))
break A}q=s.k1.mG(B.a.ai(B.ck,new A.qv(p.c)))
break A}s.k1=q},
$S:2}
A.qp.prototype={
$1(a){return t.hP.a(a).b===A.x(this.a.value)},
$S:121}
A.qq.prototype={
$1(a){return t.mV.a(a).b===A.x(this.a.value)},
$S:122}
A.qr.prototype={
$1(a){return t.ce.a(a).b===A.x(this.a.value)},
$S:123}
A.qs.prototype={
$1(a){return t.jp.a(a).b===A.x(this.a.value)},
$S:124}
A.qt.prototype={
$1(a){return t.iv.a(a).b===A.x(this.a.value)},
$S:125}
A.qu.prototype={
$1(a){return t.iZ.a(a).b===A.x(this.a.value)},
$S:126}
A.qv.prototype={
$1(a){return t.bW.a(a).b===A.x(this.a.value)},
$S:127}
A.qo.prototype={
$1(a){var s,r,q,p,o=this
A.b(a)
s=o.a
r=s.ok
q=o.b
A:{if("output"===q){p=r.mO(B.a.ai(B.b_,new A.qk(o.c)))
break A}if("dynamicRange"===q){p=r.mF(B.a.ai(B.aW,new A.ql(o.c)))
break A}if("reverb"===q){p=r.mT(B.a.ai(B.aV,new A.qm(o.c)))
break A}p=r.mE(B.a.ai(B.aU,new A.qn(o.c)))
break A}s.ok=p
s=s.ay
if(s!=null)s.$1(p)},
$S:2}
A.qk.prototype={
$1(a){return t.cK.a(a).b===A.x(this.a.value)},
$S:128}
A.ql.prototype={
$1(a){return t.cS.a(a).b===A.x(this.a.value)},
$S:129}
A.qm.prototype={
$1(a){return t.f1.a(a).b===A.x(this.a.value)},
$S:130}
A.qn.prototype={
$1(a){return t.oA.a(a).b===A.x(this.a.value)},
$S:131}
A.qD.prototype={
$1(a){var s,r=this
A.b(a)
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
A.qC.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=A.fp(A.x(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aF(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:2}
A.br.prototype={
A(){return"SettingCategory."+this.b}}
A.hS.prototype={
A(){return"SettingKind."+this.b}}
A.aW.prototype={
cW(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a9(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a9(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.c3(a))throw A.d(A.a9(r.a+" must be boolean",q,q))
break}}}
A.qL.prototype={
$1(a){return t.b9.a(a).a===this.a},
$S:19}
A.qM.prototype={
$0(){return A.i(A.m("unknown setting: "+this.a))},
$S:6}
A.qJ.prototype={
km(a,b){var s,r=this.a
if(r!==1)throw A.d(A.y("unsupported settings version "+r,null))
for(r=this.b.gH(),r=r.gt(r);r.m();){s=r.gn()
A.qK(s.a).cW(s.b)}},
ce(a){var s=this.b.h(0,a)
return s==null?A.i(A.m("setting missing from profile: "+a)):s},
B(){return A.O(["version",this.a,"values",this.b],t.N,t.K)}}
A.qN.prototype={
oq(a){var s,r,q=A.fk(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dn(q,1)
this.lH(a)},
B(){return A.O(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
lH(a){var s,r,q=A.fk(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dn(q,1)}}
A.qR.prototype={
kn(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.b(i.appendChild(A.D(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.D(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.D(a,"div","entry-picker",null)
for(r=A.iR,q=0;q<2;++q){p=B.cn[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cu[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.qS(this,p,m)
if(typeof k=="function")A.i(A.y("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.e9()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
so8(a){this.f=t.as.a(a)}}
A.qS.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a5()},
$S:2}
A.cl.prototype={}
A.ml.prototype={
oF(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.H(s)
q=new A.R(s,r.i("j(1)").a(new A.mn()),r.i("R<1,j>")).bs(0)
r=this.b
r.G(0)
s=J.Aa(a,t.N)
p=s.$ti
r.J(0,new A.M(s,p.i("n(p.E)").a(q.gau(q)),p.i("M<p.E>")))},
n7(a,b){var s,r,q,p,o,n=A.e([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mn.prototype={
$1(a){return t.ot.a(a).a},
$S:132}
A.mm.prototype={
$2(a,b){var s,r=t.ot
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:133}
A.kS.prototype={
gcG(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nA(a){return this.c.q(0,t.L.a(a))},
eI(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a2(0,g.gmy())||!a.a.a2(0,new A.rn(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fE(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aD){m=s.d
if(m<o.length){n=n===B.a0
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.a6}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.f(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.ro(s))
else k=!1
if(k)return!1
j=new A.kR(r,g,A.al(o,t.kX),B.a0)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.G(0)
g.J(0,a.a)
g=i.c
g.G(0)
g.J(0,h)
i.r=j
return!0},
hi(a){var s=this.a,r=A.q(s).i("ae<1>"),q=r.i("M<p.E>")
s=A.J(new A.M(new A.ae(s,r),r.i("n(p.E)").a(new A.ri(a)),q),q.i("p.E"))
B.a.S(s,new A.rj())
return s},
dH(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.lE
s=m.a.h(0,a)
if(s==null)return B.lF
r=B.c.T(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.br:B.ai
o=p===B.ai&&m.x.q(0,q)&&s.R(B.bs)?B.bs:p
if(s.R(o))n=o
else n=s.R(B.ai)?B.ai:B.br
r=s.h(0,n)
r.toString
m.r=new A.kR(a,n,A.al(m.fE(a,n,r),t.kX),B.a0)
m.gcG()
r=m.r
r.toString
return new A.kQ(r)},
ms(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dk
if(n.d!==B.a0)return B.lC
n.e=a
s=a===B.a6
n.d=s?B.aD:B.ag
r=this.f
q=s?B.di:B.lk
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.ds(q,o,p,a,null))
if(a===B.aq)B.a.l(r,new A.ds(B.ln,o,p,a,null))
if(s)this.fR(n)
return new A.kO(n)},
m8(){var s,r=this.r
if(r==null)return B.dk
s=r.d
if(s!==B.ag&&s!==B.ah)return B.lD
if(this.gcG()!=null&&r.w==null)return new A.b5(new A.bj(B.a1,"The visitor is waiting for an answer."))
r.d=B.ah
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aD
this.fR(r)
return new A.i3(r,!0)}return new A.i3(r,!1)},
mt(a){var s,r,q=this.r,p=this.gcG(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ag&&o!==B.ah}if(o)return B.lB
o=p.f
s=A.H(o)
r=A.cL(new A.M(o,s.i("n(1)").a(new A.rl(a)),s.i("M<1>")),t.Y)
if(r==null)return B.lG
q.w=r.a
return new A.kP(q,p,r)},
mu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ag&&s!==B.ah}else s=!0
if(s)return i
r=h.gbD()
if(r==null)return i
s=t.N
q=A.o(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.ct
p=J.S(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b1(q,s,s)
m=c.lA(!0,!0,o,new A.rv(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aE){B.a.l(this.f,new A.ds(B.lm,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fk(B.a.gU(j.c).a,s,s)
s.J(0,q)
p.m5(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dl)if(k===B.bt){s=n.b
s=s.gV(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.ds(B.ll,o,p.b,i,l))}}return m},
fR(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fE(a,b,c){var s,r
t.j9.a(c)
s=A.e([],t.d7)
for(r=J.S(c);r.m();)s.push(this.lk(a,b,r.gn()))
return s},
lk(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.H(p)
s=A.cL(new A.M(p,r.i("n(1)").a(new A.rg(this)),r.i("M<1>")),t.iC)}return s==null?c:new A.c_(q,s.c,c.c)},
sjW(a){this.x=t.Q.a(a)}}
A.rn.prototype={
$1(a){var s=this.a.a
return new A.ae(s,A.q(s).i("ae<1>")).N(0,new A.rm(A.x(a)))},
$S:3}
A.rm.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:24}
A.ro.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.ri.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:24}
A.rj.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:135}
A.rl.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.rk.prototype={
$0(){return A.e([],t.jk)},
$S:136}
A.rg.prototype={
$1(a){return t.iC.a(a).d.gH().a2(0,new A.rf(this.a))},
$S:137}
A.rf.prototype={
$1(a){t.q.a(a)
return this.a.y.ns(a.a,a.b)},
$S:138}
A.rh.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:139}
A.kT.prototype={}
A.lo.prototype={}
A.uD.prototype={
$1(a){return B.b.W(A.x(a),"off.")},
$S:3}
A.bK.prototype={
A(){return"DoorChoice."+this.b}}
A.bY.prototype={
A(){return"VisitPhase."+this.b}}
A.bZ.prototype={
A(){return"VisitTier."+this.b}}
A.dX.prototype={
A(){return"VisitorFactKind."+this.b}}
A.ds.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
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
gL(a){return A.cv(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c_.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.c_&&b.a===this.a&&b.b===this.b},
gL(a){return A.cv(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bO.prototype={
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.bO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gL(a){var s=this
return A.cv(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.O(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.kU.prototype={
B(){var s,r,q,p=this.a
p=A.J(p,A.q(p).c)
B.a.X(p)
s=this.b
r=A.q(s)
q=r.i("db<1,Y<j,@>>")
s=A.J(new A.db(s,r.i("Y<j,@>(1)").a(new A.re()),q),q.i("p.E"))
r=this.c
return A.O(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.re.prototype={
$1(a){return t.L.a(a).B()},
$S:140}
A.j3.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
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
A.mi.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:141}
A.mj.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:142}
A.mk.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:143}
A.kR.prototype={
gbD(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.rp.prototype={}
A.b5.prototype={}
A.kQ.prototype={}
A.kO.prototype={}
A.i3.prototype={}
A.kP.prototype={}
A.fF.prototype={}
A.is.prototype={
gbk(){var s,r=this.x1
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.q0("pixeldart",r?this.gmm():B.iB,!1,null,s)},
gdK(){if(this.x1){var s=this.d
s===$&&A.h()
s=s.b===B.a7}else s=!1
return s},
gmm(){var s,r
if(!this.x1)return B.o
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.e1.mn(s,r)},
gno(){var s="shadowCaster",r=this.p3
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.j2(s).a+";shadowTriangles="+r.j2(s).b+";frameMs="+B.d.bt(this.p4,3)},
gnn(){var s=this.p3
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.p4<=100},
ba(){var s,r,q,p,o,n,m=this,l=A.C4(m.a)
m.d=l
l=l.j8()
m.r=l
l=m.w=B.bI.js(l)
q=m.b
p=m.c
s=new A.kC(q,p,q,p)
p=A.xz(m.d)
m.e=p
try{p.iQ(new A.kq(l,384,216,l.b.q(0,"shadows")?1:0),s)}catch(o){r=A.ag(o)
l=m.w
if(l===B.ay)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.w(r)
m.w=B.ay
l=A.xz(m.d)
l.iQ(B.k_,s)
m.e=l}l=m.e
l.cq()
n=A.BH(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.x1=!0},
b2(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("Pixeldart surface size must be positive",null))
if(!r.x1){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.cq()
new A.kC(a,b,a,b).C()
r.b=a
r.c=b},
mc(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.x1||b3.Q.length!==0)return
b3.x2=b9
s=b3.go
r=b3.e
r===$&&A.h()
s.k(0,b5,r.gbb().eE("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbb().eE("texture:grime",512,512))
for(q=0;q<2;++q){p=B.iE[q]
r=b3.e.w
if(r==null)r=A.i(A.m(b7))
s.k(0,p,r.eE("texture:"+p,256,256))}b3.dz()
b3.k4=b3.e.gbb().ol(A.p7(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k2,m=b3.k1,l=t.N,k=t.fP,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
i=A.o(l,k)
for(h=A.O(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cs(h,h.r,h.e,A.q(h).i("cs<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.b1.h(0,d)
if(c==null)A.i(A.m("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.i(A.m(b7))
a=e.a
a0=c.a
d=A.p7(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.w)A.i(A.m(b8))
d.C()
a1=b.b.a.aB(d,b4)
b.f.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.k3,q=0;q<7;++q){a2=B.i5[q]
n=b3.e.w
if(n==null)n=A.i(A.m(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dt(a2)
h=b3.dt(a2)
k=A.p7(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dt(a2).c,h.b,k.a,1,1)
if(n.w)A.i(A.m(b8))
k.C()
a1=n.b.a.aB(k,b4)
n.f.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q)b3.le(b9,r[q])
b3.lB(b9)
$.B.j().setAttribute("data-renderer-house-model-scale",B.d.bt(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.r)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.f7(k,b3.fK(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.t2(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.r)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.fq(b9,j,a5)
h=b3.e.w
if(h==null)h=A.i(A.m(b7))
g=a5.a
if(h.w)A.i(A.m(b8))
f=h.a
a6.C()
a1=f.b.aB(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.bi(a6))
h.e.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.k4
f.toString}a7=new A.bq(a1,f,B.C,0,B.R,B.a3,!0,!0,0,b4)
f=b3.f
f===$&&A.h()
B.C.C()
b=f.a
a=b.$ti
b.a0(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.f(b,d)
a6=b[d].c
d=(a6==null?a.y[1].a(a6):a6).d
b=B.C.a9()
d=d.gav()
a=A.H(d)
A.ba(new A.R(d,a.i("L(1)").a(b.gaz()),a.i("R<1,L>")))
n.k(0,g,new A.ir(g,h,f.b.bY(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.r)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.f7(o,b3.fK(j,a5.aI(o),a5.ak(o),a5.ak(o)+a5.w,0,a5.x,5915445),new A.t3(a5))}for(r=A.FG(A.EX(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.id,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.i(A.m(b7))
b=s.h(0,a9)
a=b3.dr(f)
a0=b3.dr(f)
a=A.p7(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.dr(f).c,a0.b,a.a,1,1)
if(d.w)A.i(A.m(b8))
a.C()
a1=d.b.a.aB(a,b4)
d.f.l(0,a1)
g.k(0,f,a1)
c=a1}d=b3.e.w
if(d==null)d=A.i(A.m(b7))
b=a8.c
a=a8.a
f=""+f
if(d.w)A.i(A.m(b8))
a0=d.a
b.C()
a1=a0.b.aB(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.bi(b))
d.e.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ac.q(0,a))A.i(A.y("unknown exterior cell: "+a,b4))
b2=new A.bq(a1,c,B.C,-1,B.R,B.a3,B.kn.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.h()
B.C.C()
d=f.a
b=d.$ti
d.a0(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.f(d,b0)
a6=d[b0].c
d=(a6==null?b.y[1].a(a6):a6).d
b=B.C.a9()
d=d.gav()
a=A.H(d)
A.ba(new A.R(d,a.i("L(1)").a(b.gaz()),a.i("R<1,L>")))
k.k(0,b1,f.b.bY(b2))}},
jv(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.fy=A.al(a8.e,t.gB)
if(!a5.x1)return
for(s=a5.ch,r=new A.I(s,A.q(s).i("I<1,2>")).gt(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b1(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.i(A.m(a6))
o=n.a
if(p.w)A.i(A.m(a7))
p.a.b1(o)
p.e.a7(0,o)}}s.G(0)
q.G(0)
r=a5.cx
B.a.G(r)
for(p=a5.fy,o=p.length,m=a8.c,l=a5.k3,k=0;k<o;++k){j=p[k]
i=a5.x2
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cC(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.i(A.m(a6))
f=a5.lh(g,j,m)
e=j.a
if(i.w)A.i(A.m(a7))
d=i.a
f.C()
c=d.b.aB(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bi(f))
i.e.l(0,c)
i=j.f
f=i.a
a=B.a_.gaa()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.kG(new A.L(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.ko(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bq(c,a2,i,-1,B.R,B.a3,d!=="micro",!0,0,null)
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
A.ba(new A.R(f,b.i("L(1)").a(i.gaz()),b.i("R<1,L>")))
s.k(0,e,d.b.bY(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
jH(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aI([s],r)
for(p=c1.aD(s),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.bJ(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.I(b9,A.q(b9).i("I<1,2>")).gt(0),s=b8.ay,p=t.c8,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.e([],p)
for(g=J.aA(j),f=0;f<g.gu(j);++f){if(!(f<i.length))return A.f(i,f)
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
A.ba(new A.R(a,a0.i("L(1)").a(b.gaz()),a0.i("R<1,L>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a0(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.f(d,c)
d[c].saW(e)
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
A.ba(new A.R(i,g.i("L(1)").a(n.gaz()),g.i("R<1,L>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].saW(o)}b9=b8.fr
s=A.q(b9).i("ae<1>")
s=A.J(new A.ae(b9,s),s.i("p.E"))
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
A.ba(new A.R(g,d.i("L(1)").a(i.gaz()),d.i("R<1,L>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a0(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].saW(e)
b9.k(0,a5.a,a5.mD(e))}for(b9=b8.fy,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
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
A.ba(new A.R(d,c.i("L(1)").a(g.gaz()),c.i("R<1,L>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a0(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.f(n,c)
n[c].saW(i)}a9=new A.jz().mr(c2)
b9=$.B.j()
s=A.J(a9,A.q(a9).c)
B.a.X(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.a6(s,","))
b9=b8.dx
r=new A.jz().iI(new A.t4(b8),new A.ae(b9,A.q(b9).i("ae<1>")),a9,r)
b0=A.k1(r,r.$ti.i("p.E"))
b9=b8.db
s=A.q(b9).i("ae<1>")
s=A.J(new A.ae(b9,s),s.i("p.E"))
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
A.ba(new A.R(i,g.i("L(1)").a(n.gaz()),g.i("R<1,L>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a0(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.f(o,g)
o[g].saW(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.q(b0)
s=b9.i("db<1,j>")
b7=A.J(new A.db(b0,b9.i("j(1)").a(new A.t5(b8)),s),s.i("p.E"))
B.a.X(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a6(b7,","))},
oj(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.x1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fU(b0,n)
l=J.aA(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.e([],t.dg)
j=A.e([],t.c8)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.h()
d=d.w
if(d==null)d=A.i(A.m(a8))
c=a7.fF(e.b)
b=g.b
if(d.w)A.i(A.m(a9))
a=d.a
c.C()
a0=a.b.aB(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bi(c))
d.e.l(0,a0)
if(!(f<q.length))return A.f(q,f)
a1=q[f]
d=a1.c
a2=new A.bq(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
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
A.ba(new A.R(b,a3.i("L(1)").a(d.gaz()),a3.i("R<1,L>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a0(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.f(c,a)
c[a].saW(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.f(o,f)
a6=o[f]
B.a.a7(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.i(A.m(a8)):a
if(d.w)A.i(A.m(a9))
d.a.b1(a6)
d.e.a7(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gO(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.xr+1));++a7.xr},
eD(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gbb().jb(k.fq(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bq(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.hg(l)
p.b.jf(n,l)
s.k(0,b,r.hq(l,m))
s=k.y
n=r.d
B.a.a7(s,n)
B.a.l(s,m)
k.e.gbb().om(n)},
jw(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aI([a1],t.N),b=a0.e,a=b.h(0,a1)
if(a!=null)for(s=a.a,r=a0.aD(s),q=J.S(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.bJ(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&b.h(0,o)!=null)c.l(0,o)}n=new A.jO(a0).ji(c,a2)
m=A.e([],t.dQ)
l=A.e([],t.bH)
for(k=0;k<n.length;++k){j=n[k]
i=this.fk(j.b)
b=j.a
h=new A.L(b.a,b.b,b.c)
b=j.d
s=j.c
if(k===0)B.a.l(l,new A.bt(k,h,B.aC,i,b,s,1.05,1.4))
else B.a.l(m,new A.kj(h,i,b,s))}g=A.zz(a3)
f=B.d.K(a5.c,0,1)
e=B.d.K(1-f*0.24,0.55,1)
d=a6?1:0.38
b=Math.max(0.045,0.52*a4*e*d)
s=a3===0?null:new A.np(new A.L(g.a,g.b,g.c),this.fk(A.zy(a3)),(0.72+a4*0.18)*(1-f*0.28)*d)
this.p1=new A.jC(B.hz,B.hy,1.5/(1+f*0.45),14/(1+f*0.16),B.hx,b,s,m,l)},
b4(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.x1)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.ok
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dj(s)
s=$.wK()
q=s.b
p=s.c
o=A.vy(i.b/i.c,p,s.a,q)
p=new A.f8(r,o,o.a4(0,r),B.af,B.l5,q,p,i.b/i.c)
s=p}q=i.p1
p=i.p2
n=i.ry++
m=i.R8
l=new A.qT()
$.wF()
k=$.pH.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.mf(j,new A.nK(s,q,p,n,m))
i.p3=i.e.nb()
s=$.pH.$0()
l.b=s
i.p4=l.gn8()/1000},
bq(a){},
iW(){},
j9(){++this.RG},
fU(a,b){var s=A.ze(a,b),r=A.EW(a,b),q=A.J(s.c,t.i)
B.a.J(q,r)
return A.e([new A.fF("wall",new Float32Array(A.a_(q))),new A.fF("floor",s.a),new A.fF("ceiling",s.b)],t.ig)},
fF(a){var s,r,q,p,o,n=A.e([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.f(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.f(a,o)
B.a.l(n,new A.L(q,p,a[o]))}if(n.length===0)throw A.d(A.m("house surface mesh cannot be empty"))
return new A.cc(B.a4,a,null,A.ba(n))},
le(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fU(a2,a3),a0=a3.a,a1=b.k2.h(0,a0)
if(a1==null)throw A.d(A.m("surface materials missing for room "+a0))
s=A.e([],t.dg)
r=A.e([],t.jj)
q=A.e([],t.c8)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.h()
k=k.w
if(k==null)k=A.i(A.m("renderer is not initialized"))
j=b.fF(l.b)
i=l.a
if(k.w)A.i(A.m("resource library is disposed"))
h=k.a
j.C()
g=h.b.aB(j,n+i)
f=g.a
h.c.k(0,f,h.bi(j))
k.e.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bq(g,i,B.C,-1,B.R,B.a3,!0,!0,0,null)
i=b.f
i===$&&A.h()
B.C.C()
k=i.a
j=k.$ti
k.a0(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.f(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.C.a9()
k=k.gav()
h=A.H(k)
A.ba(new A.R(k,h.i("L(1)").a(j.gaz()),h.i("R<1,L>")))
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
lB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.e([],f),d=A.e([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k2,p=0;p<f.length;f.length===s||(0,A.r)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.O(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cs(l,l.r,l.e,A.q(l).i("cs<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.b1.h(0,i)
if(h==null)A.i(A.m("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.B.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.a6(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.a6(d,","))},
f7(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.h()
r=s.gbb().jb(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bq(r,p.lm(a),B.C,0,B.R,B.a3,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.hg(q)
B.a.l(p.fx,new A.lr(a,s.b.bY(q),q,c))},
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
r=new A.a(d,b,f)
q=new A.a(e,b,f)
p=new A.a(e,c,f)
o=new A.a(d,c,f)
n=new A.a(d,b,a)
m=new A.a(e,b,a)
l=new A.a(e,c,a)
k=new A.a(d,c,a)
s.aw(q,r,o,p,g)
s.aw(n,m,l,k,g)
s.aw(r,n,k,o,g)
s.aw(m,q,p,l,g)
s.aw(r,q,m,n,g)
s.aw(o,k,l,p,g)
j=B.q.aL(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.L(e,d,j[c]))}return new A.cc(B.a4,j,null,A.ba(g))},
lg(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dr(a){var s
A:{if(0===a){s=B.jL
break A}if(1===a){s=B.jN
break A}if(2===a){s=B.jR
break A}if(3===a){s=B.jY
break A}if(4===a){s=B.jZ
break A}if(5===a){s=B.jP
break A}if(6===a){s=B.jX
break A}if(7===a){s=B.jU
break A}s=B.jW
break A}return s},
dt(a){var s
A:{if("architecture"===a){s=B.jM
break A}if("furniture"===a){s=B.cV
break A}if("fixture"===a){s=B.jT
break A}if("service"===a){s=B.jV
break A}if("story"===a){s=B.jS
break A}if("decor"===a){s=B.jO
break A}if("micro"===a){s=B.jQ
break A}s=B.cV
break A}return s},
aP(a){return this.nH(t.G.a(a))},
nH(a){var s=0,r=A.bD(t.H),q,p=this,o,n,m,l
var $async$aP=A.bG(function(b,c){if(b===1)return A.bz(c,r)
for(;;)switch(s){case 0:if(!p.x1){s=1
break}o=A.e([],t.iw)
for(n=0;n<4;++n){m=B.hJ[n]
l=a.h(0,m)
if(l!=null)o.push(p.ct(m,l))}s=3
return A.am(A.nQ(o,t.H),$async$aP)
case 3:case 1:return A.bA(q,r)}})
return A.bB($async$aP,r)},
ct(a,b){return this.ll(a,b)},
ll(a,b){var s=0,r=A.bD(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$ct=A.bG(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.go.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.am(A.aY(A.b(m.decode()),t.X),$async$ct)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.c(m.naturalWidth)
g.height=A.c(m.naturalHeight)
l=g
k=A.k(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mR.a(A.b(k.getImageData(0,0,A.c(m.naturalWidth),A.c(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gbb()
f=new Uint8Array(A.a_(j))
if(h.w)A.i(A.m("resource library is disposed"))
h.c.oN(d,f)
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
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bA(q,r)
case 2:return A.bz(o.at(-1),r)}})
return A.bB($async$ct,r)},
dz(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.x1||h.go.a===0)return
s=h.go
r=A.q(s).i("I<1,2>")
r=A.k2(new A.I(s,r),r.i("ce(p.E)").a(new A.rZ()),r.i("p.E"),t.oB)
q=A.J(r,A.q(r).i("p.E"))
s=h.e
s===$&&A.h()
s=s.gbb()
p=s.d
o=(p===$?s.d=new A.r_(s.c,A.o(t.lu,t.y)):p).og(q)
s=o.a
n=A.e(s.slice(0),A.H(s))
B.a.S(n,new A.t_())
s=A.H(n)
r=s.i("j(1)")
s=s.i("R<1,j>")
m=new A.R(n,r.a(new A.t0()),s).a6(0,",")
l=new A.R(n,r.a(new A.t1()),s).a6(0,",")
s=o.cp(B.d9)
r=o.cp(B.da)
k=o.cp(B.db)
j=o.cp(B.dc);++h.to
i=$.B.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.to)
if(!A.U($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",m)},
bV(a,b){return new A.bq(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
fq(a,b,c){var s,r,q,p,o,n=A.EV(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.L(q,p,n[o]))}return new A.cc(B.a4,n,null,A.ba(s))},
fK(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aX(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cT(new Float32Array(5376))
o.aw(k[0],k[1],k[2],k[3],g)
n=B.q.aL(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.L(r,q,n[p]))}return new A.cc(B.a4,n,null,A.ba(k))},
fk(a){return new A.di((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ivF:1}
A.t2.prototype={
$0(){return!this.a.w},
$S:25}
A.t3.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:25}
A.t4.prototype={
$1(a){var s=this.a.dx.h(0,A.x(a))
s.toString
return s},
$S:39}
A.t5.prototype={
$1(a){var s,r,q,p
A.x(a)
s=this.a
r=s.id.h(0,a)
q=r==null
p=q?null:s.go.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:39}
A.rZ.prototype={
$1(a){var s,r
t.ia.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.ce(s,a.b,r)},
$S:146}
A.t_.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:147}
A.t0.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:40}
A.t1.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:40}
A.fA.prototype={
gbk(){return A.q0("legacy",B.o,this.e,this.f,"legacy")},
gdK(){return this.x},
ba(){var s,r=this
if(r.w)return
s=A.BI(r.a,r.b,r.c)
r.r!==$&&A.K()
r.r=s
s.hX=s.hW=s.hV=r.d
r.w=!0},
b2(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.b2(a,b)}},
b4(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.m("legacy runtime is not initialized"))
if(j.x||$.fT==null)return;++j.y
$.B.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.yI
q=$.bQ.j()
s.i0=A.zz($.bm.j().gbu()).gaa()
s.siV(A.zy($.bm.j().gbu()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.bm.j().gbu()))
s.i4=p<0?0:p
p=$.bP.j()
o=p.w+=r
n=0.025*p.r
p.a=p.a.a8(0,p.d.a4(0,(A.vc(o*0.28,1309)*2-1)*n)).a8(0,p.c.a4(0,(A.vc(p.w*0.28,2839)*2-1)*n))
p=$.bP.j()
s.i5=p.a
s.e7=p.b
s.e8=p.c
s.e9=p.d
m=A.DK(0,0.25,0.11)
s.ea=m.a
s.eb=m.b
s.ec=m.c
p=s.cN
l=p==null?s.c0:p
if(l==null)l=s.bm
p=s.aY
p.b7(l)
s.aN.depthMask(!0)
p.mv(l,s.ea/255,s.eb/255,s.ec/255)
s.e2=s.cO=0
s.e4=!1
s.c2=0
k=$.fT
if(k!=null)k.n5($.aw,$.j1())
s.nm(r,q)
$.ye.j().eM(B.e_,r)},
bq(a){},
iW(){this.x=!0},
j9(){this.x=!1},
$ivF:1}
A.lr.prototype={}
A.ir.prototype={
hq(a,b){var s=this,r=b==null?s.d:b
return new A.ir(s.a,s.b,s.c,r,a)},
mD(a){return this.hq(a,null)}}
A.rC.prototype={}
A.tx.prototype={
$2(a,b){var s
A.wl(a,A.w(b))
switch(a){case"master":s=$.bC
if(s!=null)s.jA(b)
break
case"voice":s=$.bC
if(s!=null)s.jD(b)
break
case"effects":s=$.bC
if(s!=null)s.jz(b)
break
case"ambience":s=$.bC
if(s!=null)s.jy(b)
break
case"music":s=$.bC
if(s!=null)s.jB(b)
break}},
$S:41}
A.ty.prototype={
$1(a){var s
A.wl("muted",""+a)
s=$.bC
if(s!=null)s.jC(a)},
$S:7}
A.tz.prototype={
$1(a){var s
A.wl("mono",""+a)
s=$.bC
if(s!=null)s.d2(a)},
$S:7}
A.tE.prototype={
$2(a,b){A.wm(a,A.w(b))
A.yj(a,b)},
$S:41}
A.tF.prototype={
$1(a){var s="high-contrast"
A.wm(s,""+a)
A.tn(s,a)},
$S:7}
A.tG.prototype={
$1(a){var s="strong-highlights"
A.wm(s,""+a)
A.tn(s,a)},
$S:7}
A.tH.prototype={
$1(a){$.d5().oq(a)
A.uh()
A.yk()},
$S:150}
A.tI.prototype={
$0(){var s=$.d5()
s.a=A.dn(null,1)
s.b=A.dn(null,1)
A.uh()
A.yk()},
$S:0}
A.tJ.prototype={
$0(){A.eU(this.a)},
$S:0}
A.tK.prototype={
$0(){this.a.a5()},
$S:0}
A.tL.prototype={
$0(){A.eU(this.a)},
$S:0}
A.tA.prototype={
$0(){A.eT(this.a)},
$S:0}
A.tB.prototype={
$1(a){$.iP=a
A.yQ()
A.vX()},
$S:151}
A.tC.prototype={
$1(a){$.eR=a
A.wd()
A.tm()},
$S:152}
A.tD.prototype={
$0(){$.eR=B.aj
$.eQ.j().eU($.eR)
A.wd()
A.tm()},
$S:0}
A.tt.prototype={
$1(a){var s,r=A.zq(a,A.yA()),q=r.a
$.u7=A.jL(q,a)
A.yS()
s=r.b
$.fO.j().eX(a,q,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.a6(s,"|"))},
$S:153}
A.tu.prototype={
$0(){A.eU($.fO.j())},
$S:0}
A.tv.prototype={
$0(){A.eU($.fO.j())},
$S:0}
A.tq.prototype={
$1(a){var s,r
$.w4=a
$.ad.j().eV(a.gcD())
s=$.ad.j()
r=s.ch
r.a=a.f
r.eG()
s.b5()
A.yR()},
$S:154}
A.tr.prototype={
$0(){A.eU($.iJ.j())},
$S:0}
A.ts.prototype={
$0(){A.eU($.iJ.j())},
$S:0}
A.ub.prototype={
$0(){$.uq=A.U(this.a.matches)
$.wp=A.U(this.b.matches)
A.tm()},
$S:0}
A.u9.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.ua.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.uL.prototype={
$1(a){var s
try{A.x2(a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.G)return!1
else throw s}},
$S:155}
A.uM.prototype={
$1(a){var s,r,q,p,o=null,n=a
A:{if(B.H===n){o=$.iN.j()
break A}if(B.A===n){o=$.eQ.j()
break A}if(B.a9===n){o=$.fO.j()
break A}if(B.z===n){o=$.fM.j()
break A}if(B.aa===n){o=$.iJ.j()
break A}o=$.fR.j()
break A}s=o
r=null
q=a
B:{if(B.H===q){r=B.jt
break B}if(B.A===q){r=B.jx
break B}if(B.a9===q){r=B.ju
break B}if(B.z===q){r=B.jw
break B}if(B.aa===q){r=B.jv
break B}r=B.b5
break B}p=r
o=B.cE.h(0,a)
o.toString
A.yN(s,p,o)},
$S:156}
A.uN.prototype={
$0(){A.eU($.fQ.j())},
$S:0}
A.uY.prototype={
$0(){return A.eT($.fQ.j())},
$S:0}
A.v0.prototype={
$0(){$.cj.j().a5()},
$S:0}
A.v1.prototype={
$0(){$.cj.j().a5()},
$S:0}
A.v2.prototype={
$0(){A.yN($.fQ.j(),B.b5,"pause.settings")},
$S:0}
A.v3.prototype={
$0(){$.cj.j().a5()
A.iW($.iL.j())},
$S:0}
A.v4.prototype={
$0(){A.m3("saved")},
$S:0}
A.v5.prototype={
$0(){$.cj.j().a5()
A.iW($.iL.j())},
$S:0}
A.v6.prototype={
$0(){return A.eT($.cj.j())},
$S:0}
A.uO.prototype={
$0(){return A.eT($.fP.j())},
$S:0}
A.uP.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gab().a===21){A.yY(!1)
return}s=$.X.j().r.b
$.V.j().jR(a,b,$.aw)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.d1()
if(typeof n!=="number")return A.j_(n)
if(!(o<n))break
if($.X.b===$.X)A.i(A.a7(""))
p=B.a.h(B.N,q).b
o=$.fT
if(o!=null)o.cV(p)
o=$.bE
if(o!=null){n=$.X.b
if(n===$.X)A.i(A.a7(""))
o.oj(n,p)}o=q
if(typeof o!=="number")return o.a8()
q=o+1}A.m3("saved after sleep")},
$S:157}
A.uQ.prototype={
$0(){return A.eT($.lQ.j())},
$S:0}
A.uR.prototype={
$0(){return A.eT($.iL.j())},
$S:0}
A.uS.prototype={
$0(){A.eT($.iK.j())},
$S:0}
A.uT.prototype={
$0(){A.eT($.iK.j())},
$S:0}
A.uU.prototype={
$1(a){A.b(a)
return A.yX()},
$S:1}
A.uV.prototype={
$1(a){var s,r
A.b(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"&&!A.U(a.repeat)){r=$.b7
if(r==null)A.iW($.cj.j())
else r.a5()
return}s=$.b7==null
if(!A.U(a.repeat)&&s)$.d1.j().bq(new A.kr(A.x(a.code),!0,1))
if(A.x(a.code)==="KeyP"&&!A.U(a.repeat)&&$.zV())$.wc=!$.wc
if(A.x(a.code)==="KeyR"&&!A.U(a.repeat)&&s&&$.z8){r=$.fX
if(r!=null)r.bL()}if(A.x(a.code)==="KeyJ"&&!A.U(a.repeat)&&!$.aD.j().ax)A.iZ($.fP.j())
if(A.x(a.code)==="KeyL"&&!A.U(a.repeat)&&!$.aD.j().ax)A.iZ($.lQ.j())
if(A.x(a.code)==="KeyH"&&!A.U(a.repeat)&&!$.aD.j().ax)A.iZ($.iL.j())
if(A.x(a.code)==="KeyO"&&!A.U(a.repeat)&&!$.aD.j().ax)A.iZ($.fR.j())
if(A.x(a.code)==="KeyK"&&!A.U(a.repeat)&&s)A.m3("saved")},
$S:2}
A.uW.prototype={
$1(a){A.b(a)
if($.b7==null)$.d1.j().bq(new A.kr(A.x(a.code),!1,0))},
$S:2}
A.uX.prototype={
$1(a){A.b(a)
return A.ym()},
$S:1}
A.uZ.prototype={
$1(a){A.b(a)
return A.ym()},
$S:1}
A.v_.prototype={
$1(a){A.b(a)
return $.ad.j().cc($.B.j())},
$S:1}
A.uc.prototype={
$1(a){var s=A.x(A.b(a).message)
A.uk(s,null)},
$S:2}
A.ud.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.uk("unhandled rejection: "+A.w(s==null?A.x(a.type):s),null)},
$S:2}
A.uo.prototype={
$0(){this.a.className=""},
$S:12}
A.ug.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.ul.prototype={
$1(a){return t.g.a(a).e},
$S:20}
A.ui.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.uj.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.dO.prototype
s.jZ=s.p
s=A.p.prototype
s.jY=s.cY
s=A.hG.prototype
s.k_=s.bI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"DR","Bb",42)
r(J.u.prototype,"gau","q",10)
q(A,"E3","Bs",28)
r(A.aG.prototype,"gau","q",10)
p(A.ca.prototype,"gmy","R",10)
o(A,"ER","Ck",21)
o(A,"ES","Cl",21)
o(A,"ET","Cm",21)
q(A,"zd","Ey",0)
s(A,"F_","Bg",42)
r(A.cg.prototype,"gau","q",10)
r(A.fz.prototype,"gau","q",10)
o(A,"F2","Ds",11)
p(A.k4.prototype,"gow","ox",78)
var n
p(n=A.kF.prototype,"gos","ot",8)
p(n,"goA","oB",8)
p(n,"goC","oD",8)
p(n,"gou","ov",8)
p(n,"goy","oz",8)
q(A,"zg","Cp",160)
q(A,"Gw","vB",25)
p(A.dj.prototype,"gaz","jd",44)
p(n=A.jR.prototype,"glo","lp",1)
p(n,"glq","lr",1)
p(n,"glu","lv",1)
p(n,"gls","lt",1)
o(A,"Fu","ys",11)
o(A,"Fx","yr",11)
o(A,"Fj","B8",161)
o(A,"Fk","B9",162)
o(A,"FB","B2",163)
p(A.hG.prototype,"glw","lx",1)
p(A.fu.prototype,"gla","lb",119)
p(A.kS.prototype,"gnz","nA",24)
o(A,"zp","Ef",164)
o(A,"Fn","Dj",30)
q(A,"Fq","Dp",0)
o(A,"Fo","Dk",30)
o(A,"Fp","Dl",110)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.F,null)
q(A.F,[A.vs,J.jT,A.hR,J.ea,A.p,A.h9,A.dF,A.ak,A.W,A.qd,A.aT,A.hz,A.T,A.hj,A.hg,A.i5,A.aq,A.cV,A.c1,A.fl,A.fa,A.eM,A.dm,A.r6,A.pm,A.hh,A.iw,A.a8,A.p2,A.cb,A.ah,A.cs,A.ht,A.ll,A.l1,A.hX,A.lF,A.rE,A.tc,A.cw,A.le,A.lI,A.t9,A.l2,A.cy,A.aZ,A.l6,A.eI,A.av,A.l3,A.lD,A.iH,A.ig,A.lk,A.eN,A.ik,A.iB,A.lJ,A.ee,A.jl,A.rX,A.td,A.ef,A.dH,A.lb,A.kf,A.hV,A.rF,A.G,A.P,A.ay,A.lG,A.qT,A.bh,A.iD,A.r8,A.lz,A.pl,A.lh,A.fC,A.pK,A.ev,A.n6,A.n7,A.kk,A.f8,A.jC,A.nK,A.dl,A.jM,A.di,A.np,A.kj,A.bt,A.es,A.bu,A.rc,A.cc,A.pn,A.pD,A.ks,A.bq,A.kC,A.kq,A.aH,A.nM,A.k4,A.kJ,A.pd,A.ce,A.bX,A.r1,A.r_,A.du,A.kF,A.eo,A.jA,A.jB,A.nL,A.nJ,A.fB,A.at,A.bb,A.aN,A.N,A.ha,A.pI,A.bg,A.pM,A.b3,A.pO,A.pN,A.lg,A.hM,A.q3,A.rG,A.lH,A.t8,A.ls,A.ld,A.lw,A.lq,A.rS,A.bL,A.bJ,A.aO,A.nl,A.nk,A.j2,A.eu,A.nN,A.dj,A.ko,A.kG,A.L,A.h8,A.l4,A.jc,A.l5,A.jp,A.l8,A.he,A.l9,A.jt,A.la,A.jK,A.lf,A.k6,A.lm,A.f6,A.jd,A.vC,A.hI,A.lt,A.kn,A.lu,A.eC,A.kv,A.lx,A.kw,A.ly,A.kz,A.lB,A.ky,A.lA,A.kN,A.lK,A.hO,A.kY,A.lN,A.n4,A.jF,A.jH,A.hn,A.hT,A.z,A.jq,A.kl,A.o2,A.e0,A.cQ,A.fe,A.ru,A.dv,A.iG,A.iF,A.lM,A.lL,A.th,A.js,A.j7,A.fI,A.mw,A.me,A.h6,A.ms,A.vn,A.mE,A.my,A.i6,A.f7,A.n3,A.nI,A.kD,A.o0,A.jP,A.jR,A.oE,A.oI,A.k3,A.er,A.p9,A.cT,A.pU,A.q2,A.rw,A.id,A.lC,A.lp,A.ln,A.qO,A.a,A.kA,A.kZ,A.mX,A.ju,A.nx,A.ff,A.bl,A.ki,A.pE,A.ft,A.q8,A.eA,A.jD,A.nU,A.nT,A.mL,A.f1,A.f3,A.f0,A.f2,A.je,A.k5,A.i8,A.l_,A.hp,A.oi,A.q4,A.Z,A.jx,A.jN,A.oj,A.jy,A.d0,A.jz,A.e_,A.eh,A.q5,A.dZ,A.fH,A.og,A.nB,A.qP,A.ol,A.cK,A.cq,A.oL,A.oJ,A.oK,A.cP,A.jO,A.b6,A.bp,A.bd,A.bf,A.da,A.dp,A.aV,A.or,A.cJ,A.oh,A.en,A.oq,A.cI,A.ov,A.hH,A.hy,A.bc,A.rq,A.k0,A.bS,A.oN,A.mS,A.mT,A.f4,A.mU,A.oZ,A.oY,A.pB,A.pA,A.pC,A.q1,A.kr,A.q_,A.fv,A.nm,A.rv,A.eG,A.jj,A.oC,A.oG,A.q6,A.cR,A.q7,A.jE,A.eF,A.rr,A.pg,A.cC,A.qU,A.eE,A.eD,A.i4,A.kV,A.ex,A.cZ,A.qX,A.ma,A.dz,A.mo,A.dA,A.mW,A.b_,A.fb,A.d9,A.jk,A.hG,A.nq,A.o_,A.dK,A.od,A.o5,A.o6,A.dk,A.dQ,A.bV,A.pu,A.pJ,A.aW,A.qJ,A.qN,A.cl,A.ml,A.kS,A.rp,A.ds,A.bj,A.c_,A.bO,A.kU,A.j3,A.kR,A.fF,A.is,A.fA,A.lr,A.ir,A.rC])
q(J.jT,[J.jW,J.hs,J.hu,J.fi,J.fj,J.ep,J.dN])
q(J.hu,[J.dO,J.u,A.dP,A.hD])
q(J.dO,[J.kh,J.dV,J.dh])
r(J.jU,A.hR)
r(J.oM,J.u)
q(J.ep,[J.hr,J.jX])
q(A.p,[A.dY,A.Q,A.ct,A.M,A.hi,A.cx,A.eL,A.l0,A.lE,A.ch])
q(A.dY,[A.ed,A.iI])
r(A.ic,A.ed)
r(A.ia,A.iI)
q(A.dF,[A.jg,A.jf,A.kE,A.uG,A.uI,A.rz,A.ry,A.to,A.nR,A.rQ,A.rT,A.p4,A.rV,A.v8,A.v9,A.uA,A.pL,A.rd,A.pa,A.pb,A.pc,A.pp,A.p8,A.pe,A.r2,A.r3,A.r5,A.nF,A.nD,A.nE,A.pr,A.ps,A.pT,A.pS,A.pR,A.pQ,A.pP,A.pV,A.u1,A.u2,A.qa,A.qb,A.vg,A.ve,A.nO,A.p6,A.ux,A.o3,A.o4,A.rs,A.rt,A.mG,A.mJ,A.mI,A.mK,A.mx,A.mf,A.mg,A.mh,A.mu,A.mv,A.mt,A.o1,A.oF,A.pZ,A.nA,A.nV,A.nX,A.nY,A.nZ,A.mM,A.mN,A.mO,A.mP,A.mQ,A.mR,A.uv,A.n5,A.nC,A.ok,A.vh,A.u5,A.u4,A.tl,A.tk,A.un,A.ox,A.oy,A.oA,A.qQ,A.oo,A.om,A.uu,A.os,A.ou,A.ut,A.nw,A.p1,A.oU,A.nn,A.no,A.ue,A.qY,A.qZ,A.md,A.mb,A.mB,A.mC,A.mZ,A.n2,A.n1,A.n0,A.ng,A.nf,A.nh,A.ni,A.nj,A.ne,A.n9,A.na,A.nr,A.ns,A.nt,A.nv,A.nu,A.nz,A.ob,A.o9,A.oa,A.o8,A.o7,A.of,A.oP,A.oQ,A.oR,A.pv,A.pw,A.px,A.qE,A.qF,A.qy,A.qz,A.qx,A.qA,A.qj,A.qB,A.qw,A.qp,A.qq,A.qr,A.qs,A.qt,A.qu,A.qv,A.qo,A.qk,A.ql,A.qm,A.qn,A.qD,A.qC,A.qL,A.qS,A.mn,A.rn,A.rm,A.ro,A.ri,A.rl,A.rg,A.rf,A.uD,A.re,A.mi,A.mj,A.mk,A.t4,A.t5,A.rZ,A.t0,A.t1,A.ty,A.tz,A.tF,A.tG,A.tH,A.tB,A.tC,A.tt,A.tq,A.u9,A.ua,A.uL,A.uM,A.uU,A.uV,A.uW,A.uX,A.uZ,A.v_,A.uc,A.ud,A.ul,A.ui,A.uj])
q(A.jg,[A.rD,A.n8,A.oV,A.uH,A.tp,A.uw,A.nS,A.rR,A.p3,A.p5,A.rY,A.ra,A.r9,A.va,A.pf,A.r0,A.r4,A.nG,A.qc,A.vf,A.vd,A.mH,A.mz,A.mA,A.nW,A.up,A.oz,A.oB,A.op,A.p0,A.oH,A.pi,A.pj,A.pk,A.qV,A.qW,A.oS,A.oT,A.mm,A.rj,A.rh,A.t_,A.tx,A.tE,A.uP,A.ug])
r(A.aS,A.ia)
q(A.ak,[A.eq,A.dq,A.jY,A.kI,A.kt,A.lc,A.hw,A.j5,A.cm,A.i1,A.kH,A.fw,A.ji])
r(A.fy,A.W)
r(A.dG,A.fy)
q(A.Q,[A.a5,A.ae,A.ar,A.I,A.eK,A.ij])
q(A.a5,[A.hY,A.R,A.hQ,A.lj])
r(A.db,A.ct)
q(A.c1,[A.eP,A.fD,A.fE])
q(A.eP,[A.aJ,A.it])
r(A.az,A.fD)
r(A.iu,A.fE)
r(A.fK,A.fl)
r(A.dW,A.fK)
r(A.hb,A.dW)
q(A.fa,[A.a6,A.cG])
q(A.dm,[A.hc,A.iv,A.iC])
r(A.aG,A.hc)
q(A.jf,[A.pF,A.rA,A.rB,A.ta,A.nP,A.rH,A.rM,A.rL,A.rJ,A.rI,A.rP,A.rO,A.rN,A.t7,A.um,A.tf,A.te,A.u0,A.tU,A.tV,A.u_,A.tP,A.tR,A.tQ,A.tZ,A.tN,A.tO,A.tW,A.tX,A.tY,A.tT,A.tS,A.u3,A.uy,A.pY,A.ow,A.on,A.ot,A.u6,A.mc,A.mq,A.mp,A.mD,A.nc,A.nd,A.nb,A.oc,A.pz,A.qg,A.qh,A.qG,A.qH,A.qI,A.qM,A.rk,A.t2,A.t3,A.tI,A.tJ,A.tK,A.tL,A.tA,A.tD,A.tu,A.tv,A.tr,A.ts,A.ub,A.uN,A.uY,A.v0,A.v1,A.v2,A.v3,A.v4,A.v5,A.v6,A.uO,A.uQ,A.uR,A.uS,A.uT,A.uo])
r(A.hF,A.dq)
q(A.kE,[A.kB,A.f5])
q(A.a8,[A.ca,A.ie,A.li])
r(A.hv,A.ca)
r(A.fn,A.dP)
q(A.hD,[A.k7,A.b2])
q(A.b2,[A.im,A.ip])
r(A.io,A.im)
r(A.hB,A.io)
r(A.iq,A.ip)
r(A.hC,A.iq)
q(A.hB,[A.hA,A.k8])
q(A.hC,[A.k9,A.ka,A.kb,A.kc,A.kd,A.et,A.hE])
r(A.fJ,A.lc)
r(A.i7,A.l6)
r(A.lv,A.iH)
r(A.ih,A.ie)
r(A.cg,A.iv)
r(A.fz,A.iC)
q(A.ee,[A.j9,A.jv,A.jZ])
q(A.jl,[A.mV,A.oX,A.oW,A.rb])
r(A.k_,A.hw)
r(A.rW,A.rX)
r(A.kM,A.jv)
q(A.cm,[A.fr,A.jQ])
r(A.l7,A.iD)
q(A.lb,[A.ew,A.em,A.j4,A.cX,A.fd,A.jb,A.jh,A.jr,A.ez,A.dU,A.ei,A.c9,A.hP,A.cH,A.fs,A.hU,A.fh,A.i9,A.ib,A.jG,A.hl,A.jI,A.jJ,A.el,A.hm,A.eB,A.cU,A.f9,A.fG,A.ja,A.ec,A.jm,A.jo,A.b4,A.j8,A.c8,A.ek,A.eg,A.dJ,A.hk,A.dI,A.dL,A.h7,A.hN,A.ey,A.bN,A.bs,A.jS,A.eH,A.cd,A.cA,A.cn,A.cB,A.d8,A.d7,A.dC,A.dD,A.dB,A.eb,A.dd,A.cE,A.cF,A.de,A.dc,A.df,A.cD,A.co,A.be,A.cN,A.dR,A.cO,A.bM,A.br,A.hS,A.bK,A.bY,A.bZ,A.dX,A.cY])
q(A.dl,[A.bn,A.bi,A.cu,A.kg,A.cp])
r(A.q9,A.lw)
r(A.kW,A.lL)
r(A.pX,A.rw)
r(A.pW,A.pX)
r(A.il,A.d0)
q(A.hG,[A.hd,A.ny,A.ho,A.oe,A.oO,A.py,A.qf,A.fu,A.qR])
q(A.rp,[A.kT,A.lo,A.b5,A.kQ,A.kO,A.i3,A.kP])
s(A.fy,A.cV)
s(A.iI,A.W)
s(A.im,A.W)
s(A.io,A.aq)
s(A.ip,A.W)
s(A.iq,A.aq)
s(A.fK,A.iB)
s(A.iC,A.lJ)
s(A.lw,A.rS)
s(A.lL,A.th)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",A:"double",b9:"num",j:"String",n:"bool",ay:"Null",C:"List",F:"Object",Y:"Map",a4:"JSObject"},mangledNames:{},types:["~()","~(a4)","ay(a4)","n(j)","dg()","n(A)","0&()","~(n)","dg(bi?)","n(at)","n(F?)","@(@)","ay()","n(ex)","l(bS,bS)","n(b6)","n(@)","~(@)","n(bu)","n(aW)","n(bS)","~(~())","n(N)","l(P<j,j>,P<j,j>)","n(bO)","n()","@()","n(l)","l()","@(j)","~(j)","ay(@)","n(e_)","a(a)","n(cA)","n(P<j,C<j>>)","~(F?,F?)","n(co)","l(l)","j(j)","j(bX)","~(j,A)","l(@,@)","j?(j)","L(L)","f8()","A()","f6()","n(P<j,aH>)","aH(P<j,aH>)","aH(aH,aH)","l(aO<bL>,aO<bL>)","bW(aO<bL>)","l(aO<bJ>,aO<bJ>)","bW(aO<bJ>)","eu(A,A,A,A)","0&(j,l?)","~(eC)","eC()","F?(F?)","A(A,fI)","bT<ay>(P<j,j>)","ay(@,cS)","n(C<j>)","l(j,j)","l(bp,bp)","n(a4)","a4()","l(+influence,light(A,bt),+influence,light(A,bt))","n(c8)","~(l,@)","~(F,cS)","ay(F,cS)","n(aV)","f1(F?)","f0(F?)","f2(F?)","j(F?)","es(cu)","f3(F?)","cu(l,l,j?)","n(dp)","j(l,Z,Z,Z)","l(d0,d0)","bn(l,l,j?)","n(dZ)","l(l,+(bn,cc))","n(bX)","l(+(A,A,A,A),+(A,A,A,A))","C<+(A,A,A,A)>()","n(bp)","l(l,aV)","n(cq)","n(cK)","l(ce,ce)","l(cP,cP)","n(cJ)","P<j,j>(j,@)","n(bN)","n(bs)","eF()","~(@,@)","l(P<j,cC>,P<j,cC>)","P<l,@>(l,eE)","P<l,@>(l,eD)","n(P<@,@>)","P<j,j>(P<@,@>)","n?(F?)","bi(l,l,j?)","j()","~(l)","n(i0?)","C<j>(C<j>)","~(A)","l(l,+(bi,du))","j(at)","Y<j,F?>(dk)","j(be)","n(be)","n(br)","l(ac,ac)","n(dd)","n(cE)","n(cF)","n(de)","n(dc)","n(df)","n(cD)","n(cn)","n(cB)","n(d8)","n(d7)","j(cl)","l(cl,cl)","ay(~())","l(bO,bO)","C<cZ>()","n(cZ)","n(P<j,j>)","l(c_,c_)","Y<j,@>(bO)","n(bZ)","n(bY)","n(bK)","@(@,j)","cp(l,l,j?)","ce(P<j,bi>)","l(bX,bX)","hO(bn)","dg(j{fallback:j?})","~(br)","~(dA)","~(dz)","~(dK)","~(fb)","n(ft)","~(bM)","~(bN,bs)","Y<j,j>(Y<j,j>,j)","bt?()","fB()","cK(F?)","cq(F?)","cJ(F?)","~(b9)","C<bt>()","0^(p<0^>,F?)<F?>"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aJ&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.it&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.az&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iu&&A.Fs(a,b.a)}}
A.CF(v.typeUniverse,JSON.parse('{"dh":"dO","kh":"dO","dV":"dO","FV":"dP","u":{"C":["1"],"Q":["1"],"a4":[],"p":["1"]},"jW":{"n":[],"af":[]},"hs":{"ay":[],"af":[]},"hu":{"a4":[]},"dO":{"a4":[]},"jU":{"hR":[]},"oM":{"u":["1"],"C":["1"],"Q":["1"],"a4":[],"p":["1"]},"ea":{"ab":["1"]},"ep":{"A":[],"b9":[],"b0":["b9"]},"hr":{"A":[],"l":[],"b9":[],"b0":["b9"],"af":[]},"jX":{"A":[],"b9":[],"b0":["b9"],"af":[]},"dN":{"j":[],"b0":["j"],"pt":[],"af":[]},"dY":{"p":["2"]},"h9":{"ab":["2"]},"ed":{"dY":["1","2"],"p":["2"],"p.E":"2"},"ic":{"ed":["1","2"],"dY":["1","2"],"Q":["2"],"p":["2"],"p.E":"2"},"ia":{"W":["2"],"C":["2"],"dY":["1","2"],"Q":["2"],"p":["2"]},"aS":{"ia":["1","2"],"W":["2"],"C":["2"],"dY":["1","2"],"Q":["2"],"p":["2"],"p.E":"2","W.E":"2"},"eq":{"ak":[]},"dG":{"W":["l"],"cV":["l"],"C":["l"],"Q":["l"],"p":["l"],"W.E":"l","cV.E":"l"},"Q":{"p":["1"]},"a5":{"Q":["1"],"p":["1"]},"hY":{"a5":["1"],"Q":["1"],"p":["1"],"p.E":"1","a5.E":"1"},"aT":{"ab":["1"]},"ct":{"p":["2"],"p.E":"2"},"db":{"ct":["1","2"],"Q":["2"],"p":["2"],"p.E":"2"},"hz":{"ab":["2"]},"R":{"a5":["2"],"Q":["2"],"p":["2"],"p.E":"2","a5.E":"2"},"M":{"p":["1"],"p.E":"1"},"T":{"ab":["1"]},"hi":{"p":["2"],"p.E":"2"},"hj":{"ab":["2"]},"hg":{"ab":["1"]},"cx":{"p":["1"],"p.E":"1"},"i5":{"ab":["1"]},"fy":{"W":["1"],"cV":["1"],"C":["1"],"Q":["1"],"p":["1"]},"hQ":{"a5":["1"],"Q":["1"],"p":["1"],"p.E":"1","a5.E":"1"},"aJ":{"eP":[],"c1":[]},"it":{"eP":[],"c1":[]},"az":{"fD":[],"c1":[]},"iu":{"fE":[],"c1":[]},"hb":{"dW":["1","2"],"fK":["1","2"],"fl":["1","2"],"iB":["1","2"],"Y":["1","2"]},"fa":{"Y":["1","2"]},"a6":{"fa":["1","2"],"Y":["1","2"]},"eL":{"p":["1"],"p.E":"1"},"eM":{"ab":["1"]},"cG":{"fa":["1","2"],"Y":["1","2"]},"hc":{"dm":["1"],"dT":["1"],"Q":["1"],"p":["1"]},"aG":{"hc":["1"],"dm":["1"],"dT":["1"],"Q":["1"],"p":["1"]},"hF":{"dq":[],"ak":[]},"jY":{"ak":[]},"kI":{"ak":[]},"iw":{"cS":[]},"dF":{"ej":[]},"jf":{"ej":[]},"jg":{"ej":[]},"kE":{"ej":[]},"kB":{"ej":[]},"f5":{"ej":[]},"kt":{"ak":[]},"ca":{"a8":["1","2"],"vu":["1","2"],"Y":["1","2"],"a8.K":"1","a8.V":"2"},"ae":{"Q":["1"],"p":["1"],"p.E":"1"},"cb":{"ab":["1"]},"ar":{"Q":["1"],"p":["1"],"p.E":"1"},"ah":{"ab":["1"]},"I":{"Q":["P<1,2>"],"p":["P<1,2>"],"p.E":"P<1,2>"},"cs":{"ab":["P<1,2>"]},"hv":{"ca":["1","2"],"a8":["1","2"],"vu":["1","2"],"Y":["1","2"],"a8.K":"1","a8.V":"2"},"eP":{"c1":[]},"fD":{"c1":[]},"fE":{"c1":[]},"ht":{"BD":[],"pt":[]},"ll":{"hL":[],"fm":[]},"l0":{"p":["hL"],"p.E":"hL"},"l1":{"ab":["hL"]},"hX":{"fm":[]},"lE":{"p":["fm"],"p.E":"fm"},"lF":{"ab":["fm"]},"fn":{"dP":[],"a4":[],"af":[]},"et":{"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"dP":{"a4":[],"af":[]},"hD":{"a4":[]},"k7":{"a4":[],"af":[]},"b2":{"bU":["1"],"a4":[]},"hB":{"W":["A"],"b2":["A"],"C":["A"],"bU":["A"],"Q":["A"],"a4":[],"p":["A"],"aq":["A"]},"hC":{"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"]},"hA":{"nH":[],"W":["A"],"b2":["A"],"C":["A"],"bU":["A"],"Q":["A"],"a4":[],"p":["A"],"aq":["A"],"af":[],"W.E":"A","aq.E":"A"},"k8":{"W":["A"],"b2":["A"],"C":["A"],"bU":["A"],"Q":["A"],"a4":[],"p":["A"],"aq":["A"],"af":[],"W.E":"A","aq.E":"A"},"k9":{"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"ka":{"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"kb":{"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"kc":{"vK":[],"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"kd":{"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"hE":{"i0":[],"W":["l"],"b2":["l"],"C":["l"],"bU":["l"],"Q":["l"],"a4":[],"p":["l"],"aq":["l"],"af":[],"W.E":"l","aq.E":"l"},"lc":{"ak":[]},"fJ":{"dq":[],"ak":[]},"cy":{"ab":["1"]},"ch":{"p":["1"],"p.E":"1"},"aZ":{"ak":[]},"i7":{"l6":["1"]},"av":{"bT":["1"]},"iH":{"xS":[]},"lv":{"iH":[],"xS":[]},"ie":{"a8":["1","2"],"Y":["1","2"]},"ih":{"ie":["1","2"],"a8":["1","2"],"Y":["1","2"],"a8.K":"1","a8.V":"2"},"eK":{"Q":["1"],"p":["1"],"p.E":"1"},"ig":{"ab":["1"]},"cg":{"dm":["1"],"xk":["1"],"dT":["1"],"Q":["1"],"p":["1"]},"eN":{"ab":["1"]},"W":{"C":["1"],"Q":["1"],"p":["1"]},"a8":{"Y":["1","2"]},"ij":{"Q":["2"],"p":["2"],"p.E":"2"},"ik":{"ab":["2"]},"fl":{"Y":["1","2"]},"dW":{"fK":["1","2"],"fl":["1","2"],"iB":["1","2"],"Y":["1","2"]},"dm":{"dT":["1"],"Q":["1"],"p":["1"]},"iv":{"dm":["1"],"dT":["1"],"Q":["1"],"p":["1"]},"fz":{"dm":["1"],"lJ":["1"],"dT":["1"],"Q":["1"],"p":["1"]},"li":{"a8":["j","@"],"Y":["j","@"],"a8.K":"j","a8.V":"@"},"lj":{"a5":["j"],"Q":["j"],"p":["j"],"p.E":"j","a5.E":"j"},"j9":{"ee":["C<l>","j"]},"jv":{"ee":["j","C<l>"]},"hw":{"ak":[]},"k_":{"ak":[]},"jZ":{"ee":["F?","j"]},"kM":{"ee":["j","C<l>"]},"ef":{"b0":["ef"]},"A":{"b9":[],"b0":["b9"]},"dH":{"b0":["dH"]},"l":{"b9":[],"b0":["b9"]},"C":{"Q":["1"],"p":["1"]},"b9":{"b0":["b9"]},"hL":{"fm":[]},"dT":{"Q":["1"],"p":["1"]},"j":{"b0":["j"],"pt":[]},"lb":{"E":[]},"j5":{"ak":[]},"dq":{"ak":[]},"cm":{"ak":[]},"fr":{"ak":[]},"jQ":{"ak":[]},"i1":{"ak":[]},"kH":{"ak":[]},"fw":{"ak":[]},"ji":{"ak":[]},"kf":{"ak":[]},"hV":{"ak":[]},"lG":{"cS":[]},"bh":{"BR":[]},"iD":{"kK":[]},"lz":{"kK":[]},"l7":{"kK":[]},"lh":{"vD":[]},"fC":{"vD":[]},"ew":{"E":[]},"bn":{"dl":[]},"bi":{"dl":[]},"cu":{"dl":[]},"cp":{"dl":[]},"kg":{"dl":[]},"em":{"E":[]},"j4":{"E":[]},"cX":{"E":[]},"fd":{"E":[]},"jb":{"E":[]},"jh":{"E":[]},"jr":{"E":[]},"ez":{"E":[]},"dU":{"E":[]},"ei":{"E":[]},"c9":{"E":[]},"hP":{"E":[]},"cH":{"E":[]},"fs":{"E":[]},"hM":{"BG":[]},"lg":{"bW":[]},"lH":{"bW":[]},"ls":{"BF":[]},"ld":{"AV":[]},"hU":{"E":[]},"bL":{"b0":["bL"]},"bJ":{"b0":["bJ"]},"fh":{"E":[]},"i9":{"E":[]},"h8":{"aj":[]},"l4":{"ac":[]},"jc":{"aj":[]},"l5":{"ac":[]},"jp":{"aj":[]},"l8":{"ac":[]},"ib":{"E":[]},"he":{"aj":[]},"l9":{"ac":[]},"jt":{"aj":[]},"la":{"ac":[]},"jK":{"aj":[]},"lf":{"ac":[]},"k6":{"aj":[]},"lm":{"ac":[]},"jd":{"BE":[]},"hI":{"aj":[]},"lt":{"ac":[]},"kn":{"aj":[]},"lu":{"ac":[]},"kv":{"aj":[]},"lx":{"ac":[]},"kw":{"aj":[]},"ly":{"ac":[]},"kz":{"aj":[]},"lB":{"ac":[]},"ky":{"aj":[]},"lA":{"ac":[]},"kN":{"aj":[]},"lK":{"ac":[]},"kY":{"aj":[]},"lN":{"ac":[]},"jG":{"E":[]},"hl":{"E":[]},"jI":{"E":[]},"jJ":{"E":[]},"el":{"E":[]},"hm":{"E":[]},"eB":{"E":[]},"cU":{"E":[]},"f9":{"E":[]},"jq":{"AE":[]},"fG":{"E":[]},"b4":{"E":[]},"ja":{"E":[]},"ec":{"E":[]},"jm":{"E":[]},"jo":{"E":[]},"dv":{"dg":[]},"kW":{"AZ":[]},"j8":{"E":[]},"c8":{"E":[]},"ek":{"E":[]},"il":{"d0":[]},"eg":{"E":[]},"dJ":{"E":[]},"dI":{"E":[]},"hk":{"E":[]},"dL":{"E":[]},"h7":{"E":[]},"hN":{"E":[]},"ey":{"E":[]},"bN":{"E":[]},"bs":{"E":[]},"jS":{"E":[]},"eH":{"E":[]},"cd":{"E":[]},"cA":{"E":[]},"cn":{"E":[]},"cB":{"E":[]},"d8":{"E":[]},"d7":{"E":[]},"dC":{"E":[]},"dD":{"E":[]},"eb":{"E":[]},"dB":{"E":[]},"dd":{"E":[]},"cE":{"E":[]},"cF":{"E":[]},"de":{"E":[]},"dc":{"E":[]},"df":{"E":[]},"cD":{"E":[]},"co":{"E":[]},"be":{"E":[]},"cN":{"E":[]},"dR":{"E":[]},"cO":{"E":[]},"bM":{"E":[]},"br":{"E":[]},"hS":{"E":[]},"bK":{"E":[]},"bY":{"E":[]},"bZ":{"E":[]},"dX":{"E":[]},"cY":{"E":[]},"is":{"vF":[]},"fA":{"vF":[]},"B7":{"C":["l"],"Q":["l"],"p":["l"]},"i0":{"C":["l"],"Q":["l"],"p":["l"]},"BW":{"C":["l"],"Q":["l"],"p":["l"]},"B5":{"C":["l"],"Q":["l"],"p":["l"]},"vK":{"C":["l"],"Q":["l"],"p":["l"]},"B6":{"C":["l"],"Q":["l"],"p":["l"]},"BV":{"C":["l"],"Q":["l"],"p":["l"]},"nH":{"C":["A"],"Q":["A"],"p":["A"]},"AU":{"C":["A"],"Q":["A"],"p":["A"]}}'))
A.CE(v.typeUniverse,JSON.parse('{"fy":1,"iI":2,"b2":1,"iv":1,"iC":1,"jl":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a1
return{g8:s("cA"),lC:s("h6"),ot:s("cl"),v:s("aZ"),f5:s("j7"),oA:s("d7"),cS:s("cB"),cK:s("cn"),f1:s("d8"),gE:s("f0"),fS:s("f1"),d2:s("f2"),lJ:s("f3"),dP:s("bJ"),kp:s("f6"),gS:s("dG"),bP:s("b0<@>"),e3:s("ha"),p:s("a6<j,j>"),I:s("a6<j,l>"),M:s("aG<j>"),ml:s("ef"),lD:s("bK"),jS:s("dH"),gt:s("Q<@>"),no:s("c8"),g:s("bS"),aT:s("E"),D:s("ak"),hZ:s("Z"),B:s("nH"),m9:s("aH"),ie:s("cC"),gY:s("ej"),mj:s("bT<ay>"),iv:s("dc"),bW:s("cD"),hP:s("dd"),jp:s("de"),mV:s("cE"),iZ:s("df"),ce:s("cF"),iP:s("cG<bM,j>"),_:s("dg"),jI:s("co"),bU:s("dL"),mm:s("cJ"),lv:s("jP<F>"),hL:s("cp"),p9:s("cK"),gB:s("cq"),dp:s("p<ha>"),bq:s("p<j>"),cZ:s("p<ce>"),id:s("p<A>"),fg:s("p<@>"),fm:s("p<l>"),od:s("u<cl>"),ah:s("u<ju>"),hS:s("u<da>"),r:s("u<bS>"),ft:s("u<jy>"),ph:s("u<Z>"),iw:s("u<bT<~>>"),mc:s("u<jD>"),l2:s("u<dg>"),aW:s("u<bb>"),iG:s("u<en>"),dL:s("u<cI>"),oX:s("u<FU<F>>"),og:s("u<eo>"),jj:s("u<cp>"),W:s("u<a4>"),b1:s("u<k0>"),cs:s("u<bd>"),cj:s("u<P<j,j>>"),ic:s("u<Y<j,F>>"),hq:s("u<Y<j,j>>"),bV:s("u<Y<j,@>>"),kS:s("u<k3>"),mn:s("u<er>"),dg:s("u<bn>"),hJ:s("u<at>"),eY:s("u<dk>"),jc:s("u<bf>"),de:s("u<eu>"),hU:s("u<cP>"),dQ:s("u<kj>"),aN:s("u<bp>"),hb:s("u<ex>"),bM:s("u<+(j,C<bp>)>"),m_:s("u<+(j,j)>"),gf:s("u<+influence,light(A,bt)>"),fR:s("u<+(l,j)>"),a3:s("u<+(A,A,A,A)>"),o5:s("u<aj>"),u:s("u<ac>"),oZ:s("u<hM>"),C:s("u<N>"),c8:s("u<bq>"),ix:s("u<bW>"),kl:s("u<aV>"),e_:s("u<cR>"),b2:s("u<fv>"),ao:s("u<aO<bJ>>"),mX:s("u<aO<bL>>"),bH:s("u<bt>"),jn:s("u<dp>"),s:s("u<j>"),aA:s("u<kD>"),ji:s("u<bX>"),k:s("u<L>"),h:s("u<a>"),cF:s("u<i4>"),bl:s("u<ds>"),d7:s("u<c_>"),jk:s("u<cZ>"),hc:s("u<eF>"),E:s("u<b6>"),bZ:s("u<bl>"),nP:s("u<il>"),dA:s("u<e_>"),a9:s("u<dZ>"),is:s("u<lq>"),jU:s("u<lr>"),ig:s("u<fF>"),dz:s("u<e0<es>>"),jl:s("u<e0<cc>>"),n_:s("u<e0<bq>>"),mQ:s("u<e0<du>>"),eP:s("u<fH>"),df:s("u<n>"),n:s("u<A>"),dG:s("u<@>"),t:s("u<l>"),kC:s("u<a4?>"),dM:s("u<F?>"),g2:s("u<b9>"),w:s("hs"),m:s("a4"),d4:s("a4()"),dY:s("dh"),dX:s("bU<@>"),bY:s("C<bS>"),b:s("C<bb>"),aD:s("C<cp>"),ip:s("C<a4>"),l_:s("C<Y<j,j>>"),e4:s("C<bn>"),R:s("C<at>"),b3:s("C<cP>"),fB:s("C<bp>"),lX:s("C<+(j,j)>"),jz:s("C<+(l,j)>"),ge:s("C<+(A,A,A,A)>"),a2:s("C<bq>"),io:s("C<cR>"),a:s("C<j>"),iD:s("C<i4>"),ee:s("C<ds>"),j9:s("C<c_>"),lH:s("C<cZ>"),cu:s("C<id>"),bd:s("C<A>"),j:s("C<@>"),J:s("C<l>"),lR:s("C<a4?>"),ib:s("C<F?>"),mK:s("hy"),iO:s("P<j,aH>"),lY:s("P<j,cC>"),q:s("P<j,j>"),ia:s("P<j,bi>"),ag:s("P<@,@>"),iI:s("P<l,@>"),cW:s("P<j,C<j>>"),f7:s("Y<j,dg>"),ms:s("Y<j,cu>"),iE:s("Y<j,at>"),G:s("Y<j,j>"),oQ:s("Y<j,n>"),P:s("Y<j,@>"),f:s("Y<@,@>"),d8:s("Y<l,eD>"),c_:s("Y<l,eE>"),gz:s("Y<j,C<+(A,A,A,A)>>"),i3:s("Y<j,C<j>>"),lb:s("Y<j,F?>"),kz:s("Y<bZ,C<c_>>"),iu:s("Y<l,Y<j,j>>"),dD:s("R<j,j?>"),fP:s("cu"),l0:s("bn"),eb:s("fn"),mR:s("et"),c:s("ay"),K:s("F"),nL:s("bL"),A:s("at"),lf:s("dk"),e0:s("be"),f0:s("cP"),T:s("bp"),ku:s("hH"),Y:s("ex"),lZ:s("FW"),aK:s("+()"),o7:s("+(bn,cc)"),p3:s("+(bi,du)"),aL:s("+(A,A)"),jX:s("+influence,light(A,bt)"),oJ:s("+(A,A,A,A)"),lg:s("hL"),ks:s("ac"),mo:s("cQ<cp,bq>"),kk:s("cQ<cu,es>"),ll:s("cQ<bn,cc>"),ox:s("cQ<bi,du>"),n4:s("N"),ob:s("bq"),os:s("bW"),U:s("aV"),k8:s("cR"),Q:s("dT<j>"),nO:s("dT<l>"),op:s("br"),b9:s("aW"),oC:s("bs"),gC:s("bN"),ad:s("fv"),eU:s("aO<bJ>"),bz:s("aO<bL>"),l:s("cS"),fO:s("dp"),dB:s("b4"),N:s("j"),lu:s("bi"),oB:s("ce"),d:s("bX"),nM:s("dU"),aJ:s("af"),do:s("dq"),cx:s("dV"),oP:s("dW<j,j>"),mL:s("kJ"),jJ:s("kK"),fQ:s("L"),mz:s("a"),gm:s("bu"),L:s("bO"),nq:s("bY"),kM:s("bZ"),bR:s("eD"),ey:s("eE"),mv:s("ds"),kX:s("c_"),fx:s("kV"),cq:s("b5"),iC:s("cZ"),av:s("eF"),bn:s("M<bK>"),ns:s("M<c8>"),hr:s("M<bs>"),am:s("M<bN>"),nn:s("M<j>"),kh:s("M<bu>"),cB:s("M<bY>"),na:s("M<bZ>"),nU:s("T<br>"),pl:s("T<aW>"),mW:s("T<bu>"),lS:s("cx<j>"),e:s("b6"),fH:s("id"),j_:s("av<@>"),mp:s("ih<F?,F?>"),m7:s("d0"),a1:s("fB"),j8:s("ln"),e7:s("e_"),at:s("dZ"),ln:s("lo"),fw:s("lp"),bS:s("ir"),bp:s("fI"),hX:s("lC"),fJ:s("ch<bW>"),V:s("iF"),fL:s("iG"),y:s("n"),al:s("n()"),hg:s("n(bK)"),gl:s("n(c8)"),iW:s("n(F)"),lt:s("n(br)"),if:s("n(aW)"),aZ:s("n(bs)"),gw:s("n(bN)"),dC:s("n(j)"),iV:s("n(bu)"),bQ:s("n(bY)"),nw:s("n(bZ)"),i:s("A"),z:s("@"),mY:s("@()"),mq:s("@(F)"),ng:s("@(F,cS)"),S:s("l"),gK:s("bT<ay>?"),hH:s("u<F?>?"),mU:s("a4?"),mi:s("C<@>?"),kN:s("Y<j,C<j>>?"),X:s("F?"),x:s("j?"),ej:s("j?(j)"),nh:s("i0?"),F:s("eI<@,@>?"),nF:s("lk?"),fU:s("n?"),hK:s("n(ft)?"),dE:s("A?"),aV:s("l?"),jh:s("b9?"),Z:s("~()?"),km:s("~(dz)?"),kn:s("~(dA)?"),dO:s("~(fb)?"),fu:s("~(dK)?"),mP:s("~(bM)?"),m5:s("~(br)?"),as:s("~(bN,bs)?"),ov:s("~(j)?"),hm:s("~(j,A)?"),cz:s("~(n)?"),jY:s("~(l)?"),o:s("b9"),H:s("~"),O:s("~()"),lc:s("~(j,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hs=J.jT.prototype
B.a=J.u.prototype
B.c=J.hr.prototype
B.d=J.ep.prototype
B.b=J.dN.prototype
B.ht=J.dh.prototype
B.hu=J.hu.prototype
B.q=A.hA.prototype
B.cI=A.hE.prototype
B.cU=J.kh.prototype
B.bq=J.dV.prototype
B.bu=new A.cA(1,"standard")
B.aj=new A.dz(null,null,null,null,null)
B.m2=new A.j4(0,"opaque")
B.dr=new A.j8(4,"ambience")
B.by=new A.cn(3,"mono")
B.aH=new A.d8(0,"full")
B.bx=new A.cn(0,"auto")
B.bw=new A.cB(1,"standard")
B.bv=new A.d7(0,"defaultMix")
B.aI=new A.dA(B.bx,B.bw,B.aH,B.bv)
B.dy=new A.h7("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.dz=new A.h7("webgl2 unavailable",0,"webglUnavailable")
B.X=new A.hN(1,"pixeldart")
B.dA=new A.f4(B.X,!1,!0,!1,null,!1,null,!1,null)
B.bA=new A.dB(1,"capturing")
B.dB=new A.d9(B.bA,null)
B.bB=new A.dB(3,"rejected")
B.aJ=new A.d9(B.bB,null)
B.bC=new A.dB(4,"applied")
B.bz=new A.d9(B.bC,null)
B.bD=new A.dB(5,"cancelled")
B.dC=new A.d9(B.bD,null)
B.aK=new A.dB(2,"conflict")
B.ak=new A.ja(0,"add")
B.dG=new A.ec(0,"zero")
B.a2=new A.ec(1,"one")
B.a3=new A.jb(0,"alpha")
B.G=new A.dC(1,"button")
B.n=new A.dD(0,"normal")
B.dJ=new A.b_("settings.back",B.G,"back","back to pause menu",B.n)
B.al=new A.dC(0,"heading")
B.dK=new A.b_("settings.heading",B.al,"Settings",null,B.n)
B.dL=new A.b_("settings.controls.heading",B.al,"Controls",null,B.n)
B.dM=new A.b_("settings.controls.back",B.G,"back","back to settings categories",B.n)
B.dN=new A.b_("pause.heading",B.al,"Paused",null,B.n)
B.dO=new A.dC(3,"slider")
B.dP=new A.dC(4,"toggle")
B.bE=new A.dC(5,"keybind")
B.am=new A.dD(5,"disabled")
B.dQ=new A.dD(6,"error")
B.dR=new A.dD(7,"destructive")
B.bF=new A.dD(8,"remapping")
B.J=new A.ma()
B.bG=new A.h6()
B.bH=new A.mS()
B.aL=new A.mT()
B.m3=new A.mV()
B.dS=new A.j9()
B.bI=new A.n4()
B.dT=new A.hg(A.a1("hg<0&>"))
B.bJ=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.dU=function() {
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
B.dZ=function(getTagFallback) {
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
B.dV=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dY=function(hooks) {
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
B.dX=function(hooks) {
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
B.dW=function(hooks) {
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
B.bK=function(hooks) { return hooks; }

B.k=new A.jZ()
B.m4=new A.oZ()
B.e_=new A.F()
B.e0=new A.kf()
B.m5=new A.pB()
B.e1=new A.pC()
B.e2=new A.cR()
B.ab=new A.cd(1,"gradeLUT")
B.e3=new A.cR()
B.e4=new A.q6()
B.e5=new A.q8()
B.f=new A.qd()
B.bL=new A.kM()
B.l9=new A.cX(0,"position")
B.le=new A.bu(B.l9,0,3)
B.dg=new A.cX(1,"normal")
B.lf=new A.bu(B.dg,3,3)
B.la=new A.cX(2,"color")
B.lg=new A.bu(B.la,6,4)
B.lb=new A.cX(4,"alpha")
B.lh=new A.bu(B.lb,10,1)
B.lc=new A.cX(5,"uv0")
B.li=new A.bu(B.lc,11,2)
B.ld=new A.cX(8,"legacyMaterialEffect")
B.lj=new A.bu(B.ld,13,1)
B.T=s([B.le,B.lf,B.lg,B.lh,B.li,B.lj],A.a1("u<bu>"))
B.a4=new A.rc()
B.bM=new A.lh()
B.w=new A.lv()
B.an=new A.lG()
B.e6=new A.f7(1.3089969389957472,0.1,60)
B.e7=new A.f7(1.0471975511965976,0.1,60)
B.e8=new A.f7(0.8726646259971648,0.08,45)
B.a5=new A.f9(0,"colorOnly")
B.bN=new A.f9(1,"colorAndDepth")
B.aM=new A.f9(2,"depthOnly")
B.aN=new A.jh(1,"srgb")
B.ao=new A.jm(1,"back")
B.ap=new A.jo(0,"less")
B.aq=new A.bK(0,"open")
B.bO=new A.bK(1,"chain")
B.bP=new A.bK(2,"throughDoor")
B.bQ=new A.bK(3,"letterbox")
B.a6=new A.bK(4,"ignore")
B.R=new A.fd(0,"opaque")
B.ee=new A.fd(1,"masked")
B.aO=new A.fd(2,"blended")
B.ef=new A.fe(!1,B.ap,!1,!0,B.a2,B.a2,B.ak,!1,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.eg=new A.fe(!0,B.ap,!1,!0,B.a2,B.a2,B.ak,!0,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.dH=new A.ec(2,"srcAlpha")
B.dI=new A.ec(3,"oneMinusSrcAlpha")
B.eh=new A.fe(!0,B.ap,!1,!0,B.dH,B.dI,B.ak,!0,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.ei=new A.dH(0)
B.ej=new A.dH(24e5)
B.bR=new A.c8(0,"compliance")
B.ek=new A.ff(B.bR)
B.bS=new A.c8(1,"rupture")
B.el=new A.ff(B.bS)
B.bT=new A.c8(2,"synchronisation")
B.em=new A.ff(B.bT)
B.bU=new A.eg(0,"front")
B.en=new A.eg(1,"rearService")
B.eo=new A.eg(2,"sideBoundary")
B.ep=new A.eg(3,"roofline")
B.l=new A.dI(0,"north")
B.x=new A.dI(1,"east")
B.m=new A.dI(2,"south")
B.K=new A.dI(3,"west")
B.ar=new A.hk(0,"ground")
B.as=new A.hk(1,"first")
B.eq=new A.dJ(0,"mantle")
B.er=new A.dJ(1,"portal")
B.et=new A.dJ(3,"inventory")
B.eu=new A.dJ(4,"none")
B.ev=new A.eh(B.eu,null)
B.es=new A.dJ(2,"window")
B.ew=new A.eh(B.es,"the shutter")
B.ex=new A.G("saved mantle history is malformed",null,null)
B.ey=new A.G("rupture elapsed time is malformed",null,null)
B.ez=new A.G("presentation keys must be strings",null,null)
B.eA=new A.G("unsupported accessibility profile",null,null)
B.eB=new A.G("inventory inspections must be an object",null,null)
B.bV=new A.G("saved mantle state is malformed",null,null)
B.eC=new A.G("inactive rupture has elapsed time",null,null)
B.eD=new A.G("control sensitivity is outside 0.1\u20133.0",null,null)
B.eE=new A.G("invalid action bindings",null,null)
B.eF=new A.G("listener room is empty",null,null)
B.eG=new A.G("control bindings conflict",null,null)
B.eH=new A.G("saved difficulty state is malformed",null,null)
B.eI=new A.G("saved house drift state is malformed",null,null)
B.eJ=new A.G("saved sleep record is malformed",null,null)
B.eK=new A.G("UI scale must be between 0.8 and 2.0",null,null)
B.eL=new A.G("unsupported settings store",null,null)
B.eM=new A.G("settings values must be an object",null,null)
B.eN=new A.G("saved day-loop sleepHistory must be a list",null,null)
B.eO=new A.G("invalid anisotropy limit",null,null)
B.eP=new A.G("audio event position is not finite",null,null)
B.eQ=new A.G("event sequence must be non-negative",null,null)
B.eR=new A.G("inventory inspection counts are invalid",null,null)
B.eS=new A.G("only keybinds can be remapping",null,null)
B.eT=new A.G("modelScale must be positive and finite",null,null)
B.eU=new A.G("listener position is not finite",null,null)
B.eV=new A.G("invalid action ID",null,null)
B.eW=new A.G("saved window state is malformed",null,null)
B.eX=new A.G("unsupported graphics preset",null,null)
B.eY=new A.G("save run and meta must be objects",null,null)
B.eZ=new A.G("saved house state is malformed",null,null)
B.f_=new A.G("saved sleep record must be an object",null,null)
B.f0=new A.G("sound cue must be a non-empty string",null,null)
B.f1=new A.G("saved session run is malformed",null,null)
B.f2=new A.G("save map keys must be strings",null,null)
B.f3=new A.G("unsupported graphics profile",null,null)
B.f4=new A.G("unsupported audio options",null,null)
B.f5=new A.G("transform.scale must be positive",null,null)
B.f6=new A.G("Escape is reserved for pause navigation",null,null)
B.f7=new A.G("saved day-loop state is malformed",null,null)
B.f8=new A.G("rupture extinguished mantle is unknown",null,null)
B.bW=new A.G("unsupported controls profile",null,null)
B.bX=new A.G("saved portal state is malformed",null,null)
B.f9=new A.G("acoustic portal profile is not finite",null,null)
B.fa=new A.G("saved house state does not match this house",null,null)
B.fb=new A.G("presentation snapshot contains a non-finite number",null,null)
B.fc=new A.G("save contains a non-finite number",null,null)
B.fd=new A.G("unsupported graphics store",null,null)
B.fe=new A.G("brush component needs an id and label",null,null)
B.ff=new A.G("text.json root must be an object",null,null)
B.fg=new A.G("event kind is empty",null,null)
B.fh=new A.G("invalid control binding token",null,null)
B.fi=new A.G("audio transmission muffle is invalid",null,null)
B.fj=new A.G("acoustic portal muffle order is invalid",null,null)
B.fk=new A.G("unsupported settings profile",null,null)
B.fl=new A.G("saved session clock is malformed",null,null)
B.fm=new A.G("rupture mantle IDs are malformed",null,null)
B.fn=new A.G("invalid screen-reader verbosity",null,null)
B.fo=new A.G("saved sleep record has an unknown enum",null,null)
B.fp=new A.G("audio cue variants are empty",null,null)
B.fq=new A.G("save root must be an object",null,null)
B.fr=new A.G("audio event identity is empty",null,null)
B.fs=new A.G("render capabilities contain invalid limits",null,null)
B.ft=new A.G("saved house overrides are malformed",null,null)
B.S=new A.di(0,0,0)
B.ch=new A.di(1,1,1)
B.id=s([],t.dQ)
B.aY=s([],t.bH)
B.fu=new A.jC(B.S,B.S,0,1,B.ch,0,null,B.id,B.aY)
B.bY=new A.aH(0,0,0)
B.fv=new A.ei(0,"idle")
B.at=new A.ei(1,"active")
B.fw=new A.ei(2,"ended")
B.fx=new A.ei(3,"aborted")
B.bZ=new A.fh(0,"outside")
B.fy=new A.fh(1,"intersects")
B.fz=new A.fh(2,"inside")
B.fA=new A.ek(0,"timeAdvanced")
B.fB=new A.ek(1,"dayEndReached")
B.fC=new A.ek(4,"slept")
B.fD=new A.ek(5,"complianceFloorTripped")
B.c_=new A.dc(0,"important")
B.c0=new A.cD(0,"pauseAndMute")
B.c1=new A.dd(0,"press")
B.c2=new A.de(1,"spacious")
B.c3=new A.cE(1,"standard")
B.c4=new A.df(0,"toast")
B.c5=new A.cF(1,"readable")
B.fO=new A.hl(0,"vertex")
B.c6=new A.hl(1,"indices")
B.c7=new A.jG(0,"staticDraw")
B.h=new A.hm(0,"ready")
B.a7=new A.hm(1,"lost")
B.fP=new A.el(0,"color")
B.c8=new A.el(1,"colorAndGlow")
B.fQ=new A.el(2,"colorDepthGlow")
B.aP=new A.el(3,"depthOnly")
B.au=new A.jI(1,"linear")
B.c9=new A.jJ(0,"clampToEdge")
B.fR=new A.jH(1,1,1,!1,B.au,B.au,B.c9,1)
B.fS=new A.cH(0,"beforeShadow")
B.fT=new A.cH(2,"beforeDepth")
B.ca=new A.cH(3,"afterDepth")
B.cb=new A.cH(4,"beforeWorld")
B.fU=new A.cH(5,"afterWorld")
B.L=new A.cH(6,"afterResolve")
B.fV=new A.cH(9,"beforePresent")
B.cc=new A.c9(0,"readBeforeWrite")
B.fW=new A.c9(1,"duplicateWriter")
B.fX=new A.c9(2,"sampledMultisampledAttachment")
B.aQ=new A.c9(3,"invalidResolve")
B.fY=new A.c9(4,"formatOrSizeMismatch")
B.fZ=new A.c9(5,"unversionedReadWrite")
B.h_=new A.c9(6,"invalidHistoryRead")
B.h0=new A.c9(7,"dependencyCycle")
B.h1=new A.c9(8,"missingCapability")
B.cd=new A.co(0,"high")
B.aR=new A.co(1,"standard")
B.aS=new A.dK(1,B.aR,"auto",!1,"display","off","high")
B.av=new A.dL(0,"player")
B.aT=new A.dL(1,"inserted")
B.ce=new A.dL(2,"warden")
B.cf=new A.em(0,"wrongKind")
B.cg=new A.em(1,"staleGeneration")
B.h4=new A.em(2,"doubleRelease")
B.aw=new A.em(3,"releasedResource")
B.h7=new A.cI("kitchen-range","settle")
B.h8=new A.cI("front-door-knocker","knock")
B.h9=new A.cI("cellar-drain","drip")
B.ha=new A.cI("bedroom-timber","creak")
B.hb=new A.cI("kitchen-pipe","tick")
B.hc=new A.cI("bathroom-cistern","settle")
B.hd=new A.cI("landing-window","wind")
B.hr=new A.jS(1,"visitor")
B.hv=new A.oW(null)
B.hw=new A.oX(null)
B.hx=new A.di(0.34,0.39,0.5)
B.hy=new A.di(0.012,0.016,0.028)
B.hz=new A.di(0.008,0.012,0.024)
B.ci=s([0,2,2,3],t.t)
B.hA=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.fE=new A.dc(1,"always")
B.cj=s([B.c_,B.fE],A.a1("u<dc>"))
B.hB=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.F=new A.br(0,"audio")
B.P=new A.hS(0,"level")
B.kx=new A.aW("master","Master",B.F,B.P,1,0,1,"audio")
B.kC=new A.aW("voice","Visitor voice",B.F,B.P,1,0,1,"audio")
B.kt=new A.aW("effects","Effects",B.F,B.P,1,0,1,"audio")
B.ku=new A.aW("ambience","House ambience",B.F,B.P,1,0,1,"audio")
B.ky=new A.aW("music","Music",B.F,B.P,1,0,1,"audio")
B.aA=new A.br(1,"display")
B.kB=new A.aW("brightness","Display brightness",B.aA,B.P,1,0.6,1.4,"display")
B.ad=new A.hS(1,"toggle")
B.kw=new A.aW("muted","Mute house audio",B.F,B.ad,!1,null,null,"audio")
B.Z=new A.br(2,"accessibility")
B.kz=new A.aW("mono","Mono-compatible mix",B.Z,B.ad,!1,null,null,"audio")
B.kv=new A.aW("high-contrast","High-contrast interface",B.Z,B.ad,!1,null,null,"display")
B.kA=new A.aW("strong-highlights","Strong focus highlights",B.Z,B.ad,!1,null,null,"display")
B.D=s([B.kx,B.kC,B.kt,B.ku,B.ky,B.kB,B.kw,B.kz,B.kv,B.kA],A.a1("u<aW>"))
B.y=s(["who","verb","object","place","time"],t.s)
B.hC=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.ds=new A.d7(1,"strong")
B.aU=s([B.bv,B.ds],A.a1("u<d7>"))
B.dD=new A.eb(0,"swap")
B.dE=new A.eb(1,"replace")
B.dF=new A.eb(2,"cancel")
B.hD=s([B.dD,B.dE,B.dF],A.a1("u<eb>"))
B.hE=s([2,5,9,12,16,19],t.t)
B.fF=new A.cD(1,"pauseOnly")
B.fG=new A.cD(2,"continuePlayback")
B.ck=s([B.c0,B.fF,B.fG],A.a1("u<cD>"))
B.hF=s(["uQuantizationBits","uDitherStrength"],t.s)
B.hH=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.hI=s([B.aq,B.bO,B.bP,B.bQ,B.a6],A.a1("u<bK>"))
B.hJ=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.hK=s(["30","60","display"],t.s)
B.ai=new A.bZ(0,"full")
B.br=new A.bZ(1,"compressed")
B.bs=new A.bZ(2,"off")
B.cl=s([B.ai,B.br,B.bs],A.a1("u<bZ>"))
B.hL=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dx=new A.d8(1,"reduced")
B.aV=s([B.aH,B.dx],A.a1("u<d8>"))
B.dt=new A.cB(0,"wide")
B.du=new A.cB(2,"night")
B.aW=s([B.dt,B.bw,B.du],A.a1("u<cB>"))
B.hM=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.hX=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.hY=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fI=new A.de(0,"compact")
B.cm=s([B.fI,B.c2],A.a1("u<de>"))
B.kJ=new A.bN(0,"long")
B.d5=new A.bN(1,"short")
B.cn=s([B.kJ,B.d5],A.a1("u<bN>"))
B.H=new A.bM(0,"visual")
B.a9=new A.bM(1,"graphics")
B.ax=new A.bM(2,"gameplay")
B.aa=new A.bM(3,"controls")
B.z=new A.bM(4,"audio")
B.A=new A.bM(5,"accessibility")
B.i_=s([B.H,B.a9,B.ax,B.aa,B.z,B.A],A.a1("u<bM>"))
B.i0=s([2.1,4.2,6.3],t.n)
B.i1=s(["master","voice","effects","ambience","music"],t.s)
B.fL=new A.df(1,"detailed")
B.co=s([B.c4,B.fL],A.a1("u<df>"))
B.i2=s(["res/house/house.json","assets/house/house.json"],t.s)
B.h2=new A.co(2,"safe")
B.h3=new A.co(3,"custom")
B.cp=s([B.cd,B.aR,B.h2,B.h3],A.a1("u<co>"))
B.E=new A.cd(0,"inactive")
B.bd=new A.cd(2,"affineWarp")
B.be=new A.cd(3,"vertexSnap")
B.bf=new A.cd(4,"tapeGiveup")
B.bg=new A.cd(5,"portalFail")
B.Y=new A.cd(6,"lightsOut")
B.cq=s([B.E,B.ab,B.bd,B.be,B.bf,B.bg,B.Y],A.a1("u<cd>"))
B.i3=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.i4=s([B.av,B.aT,B.ce],A.a1("u<dL>"))
B.i5=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.lY=new A.bl("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.lX=new A.bl("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.lT=new A.bl("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.m0=new A.bl("ronnie.response","named","A route card has Ronnie written on its back.")
B.m_=new A.bl("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.i6=s([B.lY,B.lX,B.lT,B.m0,B.m_],t.bZ)
B.lZ=new A.bl("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.lW=new A.bl("ronnie.response","named","The name Ronnie holds when the room does not.")
B.lU=new A.bl("denise.revision","accepted","One correction remains yours to protect.")
B.lR=new A.bl("attercliffe.plate","kept","A second place survives the room changing around it.")
B.i7=s([B.lZ,B.lW,B.lU,B.lR],t.bZ)
B.M=s([],t.hS)
B.ii=s([],t.iG)
B.ih=s([],t.dL)
B.i8=s([],A.a1("u<cq>"))
B.ia=s([],t.cs)
B.aX=s([],t.jc)
B.ic=s([],t.hU)
B.U=s([],t.aN)
B.ib=s([],t.u)
B.cs=s([],t.e_)
B.i9=s([],t.b2)
B.o=s([],t.s)
B.ct=s([],t.cF)
B.aZ=s([],t.E)
B.ij=s([],t.t)
B.ik=s([],t.dG)
B.h6=new A.hp(15,"kitchen",-0.3,0)
B.h5=new A.hp(19,"spare-room",0,0.3)
B.N=s([B.h6,B.h5],A.a1("u<hp>"))
B.im=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.kG=new A.bs(0,"bed")
B.kH=new A.bs(1,"chair")
B.kI=new A.bs(2,"floor")
B.cu=s([B.kG,B.kH,B.kI],A.a1("u<bs>"))
B.io=s(["high","medium","low"],t.s)
B.dv=new A.cn(1,"headphones")
B.dw=new A.cn(2,"speakers")
B.b_=s([B.bx,B.dv,B.dw,B.by],A.a1("u<cn>"))
B.ip=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.fH=new A.dd(1,"hold")
B.cv=s([B.c1,B.fH],A.a1("u<dd>"))
B.b4=new A.cN(0,"root")
B.cK=new A.be(0,"pauseMenu")
B.js=new A.dk(B.b4,B.cK,null)
B.iq=s([B.js],t.eY)
B.dp=new A.cA(0,"concise")
B.dq=new A.cA(2,"verbose")
B.b0=s([B.dp,B.bu,B.dq],A.a1("u<cA>"))
B.fM=new A.cF(0,"instant")
B.fN=new A.cF(2,"slow")
B.cw=s([B.fM,B.c5,B.fN],A.a1("u<cF>"))
B.ir=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.is=s([B.F,B.aA,B.Z],A.a1("u<br>"))
B.cx=s([B.l,B.x,B.m,B.K],A.a1("u<dI>"))
B.bh=new A.b4(0,"depthTest")
B.bi=new A.b4(1,"depthFunc")
B.bj=new A.b4(2,"depthWrite")
B.bk=new A.b4(3,"blendEnable")
B.bl=new A.b4(4,"blendFunc")
B.bm=new A.b4(5,"blendEquation")
B.bn=new A.b4(6,"cullEnable")
B.bo=new A.b4(7,"cullFace")
B.d8=new A.b4(8,"frontFace")
B.kM=new A.b4(9,"stencilEnable")
B.d6=new A.b4(10,"colorMask")
B.d7=new A.b4(11,"scissorEnable")
B.it=s([B.bh,B.bi,B.bj,B.bk,B.bl,B.bm,B.bn,B.bo,B.d8,B.kM,B.d6,B.d7],A.a1("u<b4>"))
B.iu=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eb=new A.da("A.J.",1.275)
B.e9=new A.da("A.J.",1.53)
B.ec=new A.da("A.J.",1.77)
B.ed=new A.da("A.J.",2.025)
B.ea=new A.da("A.J.",4.8)
B.iv=s([B.eb,B.e9,B.ec,B.ed,B.ea],t.hS)
B.iw=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.ix=s(["uBloomStrength"],t.s)
B.iy=s(["uLutSize","uStrength"],t.s)
B.iz=s([B.bR,B.bS,B.bT],A.a1("u<c8>"))
B.iA=s(["uTexelSize","uNear","uFar"],t.s)
B.cy=s(["uTexelStep"],t.s)
B.iB=s(["uninitialized"],t.s)
B.fJ=new A.cE(0,"minimal")
B.fK=new A.cE(2,"detailed")
B.cz=s([B.fJ,B.c3,B.fK],A.a1("u<cE>"))
B.lV=new A.bl("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.lQ=new A.bl("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.lP=new A.bl("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.lS=new A.bl("ronnie.response","named","The route card gives one name its own line.")
B.iC=s([B.lV,B.lQ,B.lP,B.lS],t.bZ)
B.a0=new A.bY(0,"waiting")
B.ag=new A.bY(1,"atDoor")
B.ah=new A.bY(2,"consulting")
B.aD=new A.bY(3,"resolved")
B.iD=s([B.a0,B.ag,B.ah,B.aD],A.a1("u<bY>"))
B.iE=s(["floor-linoleum","ceiling-stained"],t.s)
B.ji={uAlbedo:0}
B.cA=new A.a6(B.ji,[0],t.I)
B.iY={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.cB=new A.a6(B.iY,[2,3,4,5,6],t.I)
B.jp={uSsaoRaw:0,uSceneDepth:1}
B.iF=new A.a6(B.jp,[0,1],t.I)
B.cJ={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.hW=s(["KeyW","GamepadDpadUp"],t.s)
B.hV=s(["KeyS","GamepadDpadDown"],t.s)
B.hN=s(["KeyA","GamepadDpadLeft"],t.s)
B.hO=s(["KeyD","GamepadDpadRight"],t.s)
B.hP=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.hT=s(["KeyQ","GamepadB"],t.s)
B.hZ=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.il=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.hU=s(["KeyR","GamepadX"],t.s)
B.hQ=s(["KeyF","GamepadRB"],t.s)
B.hR=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.hS=s(["KeyL"],t.s)
B.hG=s(["Escape","GamepadMenu"],t.s)
B.iG=new A.a6(B.cJ,[B.hW,B.hV,B.hN,B.hO,B.hP,B.hT,B.hZ,B.il,B.hU,B.hQ,B.hR,B.hS,B.hG],A.a1("a6<j,C<j>>"))
B.iH=new A.a6(B.cJ,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.jm={uScene:0,uHistory:1}
B.iI=new A.a6(B.jm,[0,1],t.I)
B.iW={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.iJ=new A.a6(B.iW,["b95463f82d4116a129437eaed9ebe225e46cbffd","9d7ccf86a355d2683b3b32d486aa7c4372579c63","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.j9={aPosition:0,aUvMat:1}
B.cC=new A.a6(B.j9,[0,4],t.I)
B.jn={uScene:0,uLut:1}
B.iK=new A.a6(B.jn,[0,1],t.I)
B.jo={uSource:0}
B.cD=new A.a6(B.jo,[0],t.I)
B.jg={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.iL=new A.a6(B.jg,[0,1,2,3,4,5,6],t.I)
B.cE=new A.cG([B.H,"settings.visual",B.a9,"settings.graphics",B.ax,"settings.gameplay",B.aa,"settings.controls",B.z,"settings.audio",B.A,"settings.accessibility"],t.iP)
B.cF=new A.cG([B.H,"visual",B.a9,"graphics",B.ax,"gameplay",B.aa,"controls",B.z,"audio",B.A,"accessibility"],t.iP)
B.j5={uSharp:0,uBlurred:1,uSceneDepth:2}
B.iM=new A.a6(B.j5,[0,1,2],t.I)
B.jr={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.iN=new A.a6(B.jr,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.jb={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.hn=new A.bc("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hi=new A.bc("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.hm=new A.bc("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.hp=new A.bc("wallpaper-damp","grime",7106925,0.94,0.76)
B.hj=new A.bc("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.ho=new A.bc("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.hq=new A.bc("wallpaper-peeling","grime",9340536,0.91,0.68)
B.hk=new A.bc("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hg=new A.bc("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hh=new A.bc("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.he=new A.bc("floor-concrete","grime",7828331,0.96,0.92)
B.hf=new A.bc("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hl=new A.bc("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.b1=new A.a6(B.jb,[B.hn,B.hi,B.hm,B.hp,B.hj,B.ho,B.hq,B.hk,B.hg,B.hh,B.he,B.hf,B.hl],A.a1("a6<j,bc>"))
B.jj={uBloom:0}
B.iO=new A.a6(B.jj,[0],t.I)
B.jk={uSceneDepth:0}
B.iP=new A.a6(B.jk,[0],t.I)
B.jl={uScene:0}
B.iQ=new A.a6(B.jl,[0],t.I)
B.V={}
B.cH=new A.a6(B.V,[],A.a1("a6<j,h6>"))
B.cG=new A.a6(B.V,[],t.p)
B.u=new A.a6(B.V,[],t.I)
B.m7=new A.a6(B.V,[],A.a1("a6<j,j?>"))
B.iR=new A.a6(B.V,[],A.a1("a6<@,@>"))
B.j_={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.iS=new A.a6(B.j_,[0,1,2,3,4,5,6],t.I)
B.cL=new A.cO(0,"resume")
B.cM=new A.cO(1,"settings")
B.cN=new A.cO(2,"controls")
B.cO=new A.cO(3,"save")
B.cP=new A.cO(4,"help")
B.cQ=new A.cO(5,"back")
B.iT=new A.cG([B.cL,"pause.resume",B.cM,"pause.settings",B.cN,"pause.controls",B.cO,"pause.save",B.cP,"pause.help",B.cQ,"pause.back"],A.a1("cG<cO,j>"))
B.jd={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.iU=new A.a6(B.jd,[0,1,2,3],t.I)
B.jq={uTex:0}
B.iV=new A.a6(B.jq,[0],t.I)
B.b2=new A.cG([B.ab,1,B.bd,1.5,B.be,1.5,B.bf,2,B.bg,2,B.Y,4],A.a1("cG<cd,A>"))
B.ie=s([],t.eY)
B.ig=s([],A.a1("u<be>"))
B.b3=new A.dQ(B.ie,B.ig,null)
B.b5=new A.cN(1,"settings")
B.jt=new A.cN(2,"visual")
B.ju=new A.cN(3,"graphics")
B.jv=new A.cN(5,"controls")
B.jw=new A.cN(6,"audio")
B.jx=new A.cN(7,"accessibility")
B.a8=new A.be(1,"settings")
B.jy=new A.be(2,"journal")
B.jz=new A.be(3,"sleep")
B.jA=new A.be(4,"help")
B.jB=new A.be(5,"visitor")
B.jC=new A.be(6,"ending")
B.cR=new A.dR(0,"opened")
B.cS=new A.dR(2,"backed")
B.cT=new A.dR(3,"resumed")
B.jD=new A.dR(4,"dismissed")
B.W=new A.dR(5,"unchanged")
B.jE=new A.kg(0,1,null)
B.jF=new A.kk(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.b6=new A.ew(0,"safe")
B.b7=new A.ew(1,"standard")
B.b8=new A.ew(2,"high")
B.O=new A.aG(B.V,0,t.M)
B.ay=new A.ev(B.b6,B.O)
B.jh={shadows:0}
B.ks=new A.aG(B.jh,1,t.M)
B.jH=new A.ev(B.b7,B.ks)
B.j2={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.kk=new A.aG(B.j2,5,t.M)
B.jI=new A.ev(B.b8,B.kk)
B.jG=new A.ew(4,"shipping")
B.j4={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.kl=new A.aG(B.j4,7,t.M)
B.m8=new A.ev(B.jG,B.kl)
B.jK=new A.aJ(0,1)
B.jL=new A.az(0.46,0.25,0.2)
B.jM=new A.az(0.48,0.4,0.34)
B.jN=new A.az(0.31,0.25,0.23)
B.jO=new A.az(0.37,0.33,0.31)
B.jP=new A.az(0.34,0.32,0.29)
B.cV=new A.az(0.38,0.25,0.19)
B.jQ=new A.az(0.31,0.28,0.24)
B.jR=new A.az(0.58,0.56,0.5)
B.jS=new A.az(0.44,0.37,0.28)
B.jT=new A.az(0.52,0.5,0.44)
B.jU=new A.az(0.24,0.25,0.27)
B.jV=new A.az(0.28,0.27,0.25)
B.jW=new A.az(0.42,0.4,0.38)
B.jX=new A.az(0.18,0.2,0.21)
B.jY=new A.az(0.2,0.12,0.1)
B.jZ=new A.az(0.12,0.15,0.2)
B.b9=new A.hN(0,"legacy")
B.cW=new A.ey(0,"constructed")
B.B=new A.ey(1,"ready")
B.az=new A.ey(2,"lost")
B.cX=new A.ey(3,"disposed")
B.m6=new A.jr(1,"errorsOnly")
B.k_=new A.kq(B.ay,384,216,0)
B.ba=new A.ez(0,"constructed")
B.k0=new A.ez(1,"initializing")
B.bb=new A.ez(2,"ready")
B.cY=new A.ez(3,"contextLost")
B.i=new A.fs(0,"read")
B.j=new A.fs(1,"write")
B.I=new A.fs(2,"historyRead")
B.r=new A.hP(0,"rgba8")
B.k1=new A.aN("dofBlurH",B.r,192,108,1,0)
B.k2=new A.aN("dofBlurV",B.r,192,108,1,0)
B.k3=new A.aN("dofOutput",B.r,384,216,1,0)
B.cZ=new A.hP(2,"depth24")
B.k4=new A.aN("shadowMap",B.cZ,512,512,1,0)
B.k5=new A.aN("ssaoRaw",B.r,192,108,1,0)
B.k6=new A.aN("ssaoBlurred",B.r,192,108,1,0)
B.k7=new A.aN("gradeOutput",B.r,384,216,1,0)
B.k8=new A.aN("vhsOutput",B.r,384,216,1,0)
B.k9=new A.aN("sceneDepth",B.cZ,384,216,1,0)
B.ka=new A.aN("bloomBlurH",B.r,192,108,1,0)
B.kb=new A.aN("bloomBlurV",B.r,192,108,1,0)
B.kc=new A.aN("present",B.r,384,216,1,0)
B.bc=new A.aN("sceneColor",B.r,384,216,1,0)
B.kd=new A.aN("ps1Output",B.r,384,216,1,0)
B.ke=new A.eA(null,"save storage unavailable")
B.kf=new A.eA(null,"save could not be recovered")
B.kg=new A.eA(null,null)
B.j7={WheelUp:0,WheelDown:1}
B.kh=new A.aG(B.j7,2,t.M)
B.j1={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.ki=new A.aG(B.j1,4,t.M)
B.je={open:0,closed:1}
B.kj=new A.aG(B.je,2,t.M)
B.j0={Escape:0}
B.d_=new A.aG(B.j0,1,t.M)
B.iZ={open:0,closed:1,mixed:2}
B.km=new A.aG(B.iZ,3,t.M)
B.jc={front:0,"rear-service":1}
B.kn=new A.aG(B.jc,2,t.M)
B.jf={overcast:0,rain:1}
B.ko=new A.aG(B.jf,2,t.M)
B.ja={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.kp=new A.aG(B.ja,16,t.M)
B.j8={Escape:0,Tab:1,F11:2}
B.d0=new A.aG(B.j8,3,t.M)
B.j6={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.kq=new A.aG(B.j6,5,t.M)
B.j3={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ac=new A.aG(B.j3,7,t.M)
B.iX={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.kr=new A.aG(B.iX,9,t.M)
B.d3=new A.eB(2,"link")
B.kD=new A.hT(B.d3,"gl.createProgram() returned null")
B.d1=new A.eB(0,"vertex")
B.d2=new A.eB(1,"fragment")
B.d4=new A.eB(3,"validation")
B.kE=new A.hU(0,"full")
B.kF=new A.hU(2,"culled")
B.a_=new A.L(0,1,0)
B.aC=new A.L(0,-1,0)
B.kK=new A.bt(-1,B.a_,B.aC,B.ch,1,1,0.3,0.5)
B.cr=s([],t.n)
B.kL=new A.kA(!1,"","",B.cr,B.cr)
B.d9=new A.dU(0,"resident")
B.da=new A.dU(1,"pending")
B.db=new A.dU(2,"missing")
B.dc=new A.dU(3,"evicted")
B.af=new A.L(0,0,0)
B.jJ=new A.ko(0,0,0,1)
B.C=new A.kG(B.af,B.jJ)
B.kN=A.ck("FK")
B.kO=A.ck("FL")
B.kP=A.ck("nH")
B.kQ=A.ck("AU")
B.kR=A.ck("B5")
B.kS=A.ck("B6")
B.kT=A.ck("B7")
B.kU=A.ck("a4")
B.kV=A.ck("F")
B.kW=A.ck("vK")
B.kX=A.ck("BV")
B.kY=A.ck("BW")
B.kZ=A.ck("i0")
B.e=new A.cU(0,"float1")
B.aB=new A.cU(1,"float2")
B.p=new A.cU(2,"float3")
B.l_=new A.cU(3,"float4")
B.t=new A.cU(4,"mat4")
B.dd=new A.cU(5,"mat4Array")
B.bp=new A.z(B.e,0)
B.de=new A.z(B.e,1)
B.Q=new A.cU(6,"sampler")
B.v=new A.z(B.Q,0)
B.ae=new A.z(B.Q,1)
B.df=new A.z(B.Q,2)
B.l0=new A.z(B.Q,3)
B.l1=new A.z(B.Q,4)
B.l2=new A.z(B.Q,5)
B.l3=new A.z(B.Q,6)
B.l4=new A.rb(!1)
B.l5=new A.L(0,0,1)
B.l6=new A.L(1,0,0)
B.l7=new A.L(1/0,1/0,1/0)
B.l8=new A.L(-1/0,-1/0,-1/0)
B.dh=new A.cX(6,"tangent4")
B.lk=new A.dX(0,"visitorAnswered")
B.di=new A.dX(1,"visitorIgnored")
B.ll=new A.dX(2,"entryVerified")
B.lm=new A.dX(3,"entryContradicted")
B.ln=new A.dX(4,"exposureAccepted")
B.lp=new A.cY(1,"malformedDay")
B.lq=new A.cY(2,"malformedTier")
B.dj=new A.cY(3,"missingTierLines")
B.a1=new A.cY(6,"invalidPhase")
B.lt=new A.bj(B.a1,"No reaction is due.")
B.lB=new A.b5(B.lt)
B.ly=new A.bj(B.a1,"The active visit cannot be chosen.")
B.lC=new A.b5(B.ly)
B.lu=new A.bj(B.a1,"The active visit has no line to advance.")
B.lD=new A.b5(B.lu)
B.ls=new A.cY(5,"noActiveVisit")
B.lv=new A.bj(B.ls,"There is no active visit.")
B.dk=new A.b5(B.lv)
B.lx=new A.bj(B.a1,"A visit is already active.")
B.lE=new A.b5(B.lx)
B.lr=new A.cY(4,"noArrival")
B.lA=new A.bj(B.lr,"The authored arrival is missing.")
B.lF=new A.b5(B.lA)
B.lw=new A.bj(B.a1,"That answer is not offered.")
B.lG=new A.b5(B.lw)
B.lo=new A.cY(0,"missingCorpus")
B.lz=new A.bj(B.lo,"The authored visitor corpus is empty.")
B.lH=new A.b5(B.lz)
B.dl=new A.eH(1,"exact")
B.bt=new A.eH(2,"partial")
B.aE=new A.eH(3,"contradiction")
B.lI=new A.eH(0,"skipped")
B.lJ=new A.eG(B.lI,B.O)
B.lK=new A.eG(B.bt,B.O)
B.lL=new A.i6(B.U,!1)
B.lM=new A.i6(B.U,!0)
B.dm=new A.i9(0,"horizontal")
B.lN=new A.i9(1,"vertical")
B.dn=new A.ib(0,"horizontal")
B.lO=new A.ib(1,"vertical")
B.aF=new A.fG(0,"empty")
B.m1=new A.fG(1,"cpuReady")
B.aG=new A.fG(4,"released")})();(function staticFields(){$.rU=null
$.c5=A.e([],A.a1("u<F>"))
$.xp=null
$.pG=0
$.pH=A.E3()
$.wT=null
$.wS=null
$.zk=null
$.zc=null
$.zs=null
$.uC=null
$.uJ=null
$.ww=null
$.t6=A.e([],A.a1("u<C<F>?>"))
$.fW=null
$.iS=null
$.iT=null
$.wa=!1
$.ao=B.w
$.xH=""
$.xI=null
$.xD=null
$.pq=null
$.c2=A.aa()
$.d1=A.aa()
$.bE=null
$.lW=null
$.ti=A.aa()
$.B=A.aa()
$.bP=A.aa()
$.ad=A.aa()
$.ye=A.aa()
$.fX=null
$.X=A.aa()
$.fT=null
$.bm=A.aa()
$.V=A.aa()
$.vW=A.aa()
$.w6=null
$.bC=null
$.vZ=!1
$.m1=!1
$.iP=B.aI
$.eR=B.aj
$.uq=!1
$.wp=!1
$.yC=null
$.lV=null
$.lS=null
$.yp=0
$.wc=!1
$.yB=!1
$.wb=0
$.yI=0
$.e2=0
$.z8=!1
$.w0="booting"
$.c4=0
$.e4=0
$.aw="hall"
$.iM=A.aa()
$.fN=A.aa()
$.bQ=A.aa()
$.yH=null
$.wh=0
$.b7=null
$.iX=!1
$.cj=A.aa()
$.fQ=A.aa()
$.fP=A.aa()
$.lP=A.aa()
$.yf=A.aa()
$.yd=A.aa()
$.aD=A.aa()
$.lQ=A.aa()
$.iL=A.aa()
$.fR=A.aa()
$.iN=A.aa()
$.eQ=A.aa()
$.fO=A.aa()
$.fM=A.aa()
$.iJ=A.aa()
$.iK=A.aa()
$.aK=A.aa()
$.lO=A.aa()
$.bx=A.aa()
$.us=A.a2(t.S)
$.d2=A.e([],t.s)
$.w5=null
$.z2=!1
$.yi=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"FN","zD",()=>A.zj("_$dart_dartClosure"))
s($,"FM","e9",()=>A.zj("_$dart_dartClosure_dartJSInterop"))
s($,"Gs","zZ",()=>A.e([new J.jU()],A.a1("u<hR>")))
s($,"FZ","zF",()=>A.dr(A.r7({
toString:function(){return"$receiver$"}})))
s($,"G_","zG",()=>A.dr(A.r7({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"G0","zH",()=>A.dr(A.r7(null)))
s($,"G1","zI",()=>A.dr(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"G4","zL",()=>A.dr(A.r7(void 0)))
s($,"G5","zM",()=>A.dr(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"G3","zK",()=>A.dr(A.xE(null)))
s($,"G2","zJ",()=>A.dr(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"G7","zO",()=>A.dr(A.xE(void 0)))
s($,"G6","zN",()=>A.dr(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"G9","wG",()=>A.Cj())
s($,"Gd","zT",()=>A.Bo(4096))
s($,"Gb","zR",()=>new A.tf().$0())
s($,"Gc","zS",()=>new A.te().$0())
s($,"Ga","zQ",()=>A.Bn(A.a_(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Gm","h2",()=>A.m6(B.kV))
s($,"FX","wF",()=>{A.BB()
return $.pG})
s($,"FJ","zC",()=>B.bc.iZ())
s($,"FS","wE",()=>A.ke(A.e([255,255,255,255],t.t)))
s($,"FP","wB",()=>A.ke(A.e([128,128,255,255],t.t)))
s($,"FO","wA",()=>A.ke(A.e([0,0,0,255],t.t)))
s($,"FQ","wC",()=>A.ke(A.e([255,255,0,255],t.t)))
s($,"FR","wD",()=>A.ke(A.e([255,255,255,255],t.t)))
s($,"Gu","A0",()=>A.i2(0,1,0))
s($,"G8","zP",()=>A.Cg(A.a2(t.N),0,0,A.i2(0,0,0)))
s($,"Gt","A_",()=>A.xu("^[a-z0-9][a-z0-9._-]*$"))
s($,"Gx","h4",()=>{var q=$.xD
if(q==null){A.uz()
A.uz()
A.uz()
A.uz()
q=$.xD=new A.qX()}return q})
s($,"FT","zE",()=>A.x3(B.c_,!0,B.c0,B.c1,B.c2,B.c3,B.c4,B.c5))
s($,"Gj","zU",()=>new A.mU())
r($,"z6","d5",()=>A.vH(null,null))
r($,"u7","wL",()=>A.jL(null,null))
r($,"w4","m7",()=>A.fc(null,null,!1,1,!1,!1,2,1))
s($,"Gn","zW",()=>new A.oh())
s($,"Go","zX",()=>new A.oq())
s($,"Gp","vj",()=>new A.oK(A.o(t.N,t.S)))
s($,"Gl","zV",()=>A.cW().gaE().h(0,"debugPause")==="1")
s($,"Gi","j0",()=>A.cW().gaE().h(0,"automation")==="1")
s($,"Gf","vi",()=>A.Eh())
s($,"Ge","wH",()=>$.vi()!=null)
s($,"Gg","wI",()=>$.j0()?A.cW().gaE().h(0,"captureMantleId"):null)
s($,"Gh","wJ",()=>A.cW().gaE().h(0,"captureMantleLit")==="1")
r($,"wk","eY",()=>A.i2(0,0,0))
r($,"wf","zY",()=>A.i2(0,0,0))
r($,"wq","j1",()=>A.i2(0,0,0))
s($,"Gk","wK",()=>A.Ei())
s($,"Gq","m8",()=>new A.nI(A.i2(0,0,0)))
s($,"Gr","h3",()=>new A.pu(B.b3))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dP,ArrayBuffer:A.fn,ArrayBufferView:A.hD,DataView:A.k7,Float32Array:A.hA,Float64Array:A.k8,Int16Array:A.k9,Int32Array:A.ka,Int8Array:A.kb,Uint16Array:A.kc,Uint32Array:A.kd,Uint8ClampedArray:A.et,CanvasPixelArray:A.et,Uint8Array:A.hE})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.im.$nativeSuperclassTag="ArrayBufferView"
A.io.$nativeSuperclassTag="ArrayBufferView"
A.hB.$nativeSuperclassTag="ArrayBufferView"
A.ip.$nativeSuperclassTag="ArrayBufferView"
A.iq.$nativeSuperclassTag="ArrayBufferView"
A.hC.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.uK
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
