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
if(a[b]!==s){A.Gq(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.x7(b)
return new s(c,this)}:function(){if(s===null)s=A.x7(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.x7(a).prototype
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
xd(a,b,c,d){return{i:a,p:b,e:c,x:d}},
x9(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xb==null){A.G5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.yr("Return interceptor for "+A.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tp
if(o==null)o=$.tp=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Gb(a)
if(p!=null)return p
if(typeof a=="function")return B.ie
s=Object.getPrototypeOf(a)
if(s==null)return B.dp
if(s===Object.prototype)return B.dp
if(typeof q=="function"){o=$.tp
if(o==null)o=$.tp=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bM,enumerable:false,writable:true,configurable:true})
return B.bM}return B.bM},
xV(a,b){if(a<0||a>4294967295)throw A.b(A.aY(a,0,4294967295,"length",null))
return J.xX(new Array(a),b)},
xW(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("q<0>"))},
xU(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("q<0>"))},
xX(a,b){var s=A.c(a,b.i("q<0>"))
s.$flags=1
return s},
BZ(a,b){var s=t.hO
return J.xu(s.a(a),s.a(b))},
xZ(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
C_(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xZ(r))break;++b}return b},
C0(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xZ(q))break}return b},
en(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hE.prototype
return J.k5.prototype}if(typeof a=="string")return J.dY.prototype
if(a==null)return J.hF.prototype
if(typeof a=="boolean")return J.k4.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dZ.prototype
if(typeof a=="symbol")return J.hJ.prototype
if(typeof a=="bigint")return J.hH.prototype
return a}if(a instanceof A.N)return a
return J.x9(a)},
aF(a){if(typeof a=="string")return J.dY.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dZ.prototype
if(typeof a=="symbol")return J.hJ.prototype
if(typeof a=="bigint")return J.hH.prototype
return a}if(a instanceof A.N)return a
return J.x9(a)},
c9(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dZ.prototype
if(typeof a=="symbol")return J.hJ.prototype
if(typeof a=="bigint")return J.hH.prototype
return a}if(a instanceof A.N)return a
return J.x9(a)},
A3(a){if(typeof a=="number")return J.fz.prototype
if(typeof a=="string")return J.dY.prototype
if(a==null)return a
if(!(a instanceof A.N))return J.eS.prototype
return a},
A4(a){if(typeof a=="string")return J.dY.prototype
if(a==null)return a
if(!(a instanceof A.N))return J.eS.prototype
return a},
xs(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.A3(a).aj(a,b)},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.en(a).a4(a,b)},
aT(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Ga(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).h(a,b)},
br(a,b,c){return J.c9(a).k(a,b,c)},
hi(a,b){return J.c9(a).l(a,b)},
AQ(a,b){return J.A4(a).ft(a,b)},
xt(a,b){return J.c9(a).N(a,b)},
AR(a,b){return J.c9(a).cG(a,b)},
xu(a,b){return J.A3(a).G(a,b)},
xv(a,b){return J.aF(a).q(a,b)},
mr(a,b){return J.c9(a).a0(a,b)},
AS(a,b){return J.c9(a).a7(a,b)},
xw(a){return J.c9(a).gU(a)},
aB(a){return J.en(a).gM(a)},
ms(a){return J.aF(a).gO(a)},
AT(a){return J.aF(a).gV(a)},
P(a){return J.c9(a).gu(a)},
cK(a){return J.aF(a).gt(a)},
ff(a){return J.en(a).ga3(a)},
xx(a,b){return J.c9(a).W(a,b)},
xy(a,b,c){return J.c9(a).cc(a,b,c)},
AU(a,b){return J.aF(a).st(a,b)},
AV(a,b){return J.c9(a).P(a,b)},
AW(a,b){return J.A4(a).b2(a,b)},
dd(a){return J.en(a).p(a)},
AX(a,b){return J.c9(a).e1(a,b)},
k2:function k2(){},
k4:function k4(){},
hF:function hF(){},
hI:function hI(){},
e_:function e_(){},
kr:function kr(){},
eS:function eS(){},
dZ:function dZ(){},
hH:function hH(){},
hJ:function hJ(){},
q:function q(a){this.$ti=a},
k3:function k3(){},
p9:function p9(a){this.$ti=a},
eq:function eq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fz:function fz(){},
hE:function hE(){},
k5:function k5(){},
dY:function dY(){}},A={w5:function w5(){},
v8(){return $},
B8(a,b,c){if(t.he.b(a))return new A.it(a,b.i("@<0>").K(c).i("it<1,2>"))
return new A.et(a,b.i("@<0>").K(c).i("et<1,2>"))},
y2(a){return new A.fA("Field '"+a+"' has been assigned during initialization.")},
aa(a){return new A.fA("Field '"+a+"' has not been initialized.")},
C2(a){return new A.fA("Field '"+a+"' has already been initialized.")},
vd(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ig(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fb(a,b,c){return a},
xc(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
kV(a,b,c,d){A.kB(b,"start")
if(c!=null){A.kB(c,"end")
if(b>c)A.i(A.aY(b,0,c,"start",null))}return new A.ie(a,b,c,d.i("ie<0>"))},
kc(a,b,c,d){if(t.he.b(a))return new A.dh(a,b,c.i("@<0>").K(d).i("dh<1,2>"))
return new A.cz(a,b,c.i("@<0>").K(d).i("cz<1,2>"))},
cx(){return new A.fO("No element")},
xT(){return new A.fO("Too many elements")},
kQ(a,b,c,d,e){if(c-b<=32)A.CI(a,b,c,d,e)
else A.CH(a,b,c,d,e)},
CI(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aF(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aM()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
CH(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.a2(a4+a5,2),f=g-j,e=g+j,d=J.aF(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aM()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a9(a6.$2(b,a0),0)
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
A.kQ(a3,a4,r-2,a6,a7)
A.kQ(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a9(a6.$2(d.h(a3,r),b),0))++r
while(J.a9(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.kQ(a3,r,q,a6,a7)}else A.kQ(a3,r,q,a6,a7)},
eb:function eb(){},
hm:function hm(a,b){this.a=a
this.$ti=b},
et:function et(a,b){this.a=a
this.$ti=b},
it:function it(a,b){this.a=a
this.$ti=b},
ir:function ir(){},
t8:function t8(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.$ti=b},
fA:function fA(a){this.a=a},
dR:function dR(a){this.a=a},
qE:function qE(){},
R:function R(){},
a4:function a4(){},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
hO:function hO(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
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
dC:function dC(a,b){this.a=a
this.$ti=b},
im:function im(a,b){this.a=a
this.$ti=b},
ax:function ax(){},
d2:function d2(){},
fQ:function fQ(){},
eN:function eN(a,b){this.a=a
this.$ti=b},
iV:function iV(){},
aX(a,b,c){var s,r,q,p,o,n,m,l=A.aq(a.ga1(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aq(a.gaE(),!0,c)
m=new A.a3(q,n,b.i("@<0>").K(c).i("a3<1,2>"))
m.$keys=l
return m}return new A.hp(A.aN(a,b,c),b.i("@<0>").K(c).i("hp<1,2>"))},
Be(){throw A.b(A.b8("Cannot modify unmodifiable Map"))},
Bf(){throw A.b(A.b8("Cannot modify constant Set"))},
Am(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Ga(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dd(a)
return s},
i1(a){var s,r=$.yb
if(r==null)r=$.yb=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dt(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eI(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bh(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kx(a){var s,r,q,p
if(a instanceof A.N)return A.bG(A.bS(a),null)
s=J.en(a)
if(s===B.id||s===B.ig||t.qF.b(a)){r=B.c5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bG(A.bS(a),null)},
yc(a){var s,r,q
if(a==null||typeof a=="number"||A.bq(a))return J.dd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dQ)return a.p(0)
if(a instanceof A.bb)return a.fj(!0)
s=$.AL()
for(r=0;r<1;++r){q=s[r].mT(a)
if(q!=null)return q}return"Instance of '"+A.kx(a)+"'"},
Cg(){return Date.now()},
Cp(){var s,r
if($.qe!==0)return
$.qe=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qe=1e6
$.qf=new A.qd(r)},
Cf(){if(!!self.location)return self.location.href
return null},
Cq(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
az(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dq(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aY(a,0,1114111,null,null))},
fH(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Co(a){var s=A.fH(a).getUTCFullYear()+0
return s},
Cm(a){var s=A.fH(a).getUTCMonth()+1
return s},
Ci(a){var s=A.fH(a).getUTCDate()+0
return s},
Cj(a){var s=A.fH(a).getUTCHours()+0
return s},
Cl(a){var s=A.fH(a).getUTCMinutes()+0
return s},
Cn(a){var s=A.fH(a).getUTCSeconds()+0
return s},
Ck(a){var s=A.fH(a).getUTCMilliseconds()+0
return s},
Ch(a){var s=a.$thrownJsError
if(s==null)return null
return A.cI(s)},
yd(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
ve(a){throw A.b(A.x6(a))},
d(a,b){if(a==null)J.cK(a)
throw A.b(A.va(a,b))},
va(a,b){var s,r="index"
if(!A.aJ(b))return new A.cs(!0,b,r,null)
s=A.e(J.cK(a))
if(b<0||b>=s)return A.p_(b,s,a,r)
return A.yf(b,r)},
FY(a,b,c){if(a>c)return A.aY(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aY(b,a,c,"end",null)
return new A.cs(!0,b,"end",null)},
x6(a){return new A.cs(!0,a,null,null)},
b(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.dz()
b.dartException=a
s=A.Gt
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Gt(){return J.dd(this.dartException)},
i(a,b){throw A.aD(a,b==null?new Error():b)},
bU(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.i(A.Eg(a,b,c),s)},
Eg(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ii("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.b(A.aw(a))},
dA(a){var s,r,q,p,o,n
a=A.Ah(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rE(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yq(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
w6(a,b){var s=b==null,r=s?null:b.method
return new A.k6(a,r,s?null:b.receiver)},
ao(a){var s
if(a==null)return new A.pS(a)
if(a instanceof A.hv){s=a.a
return A.eo(a,s==null?A.f7(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eo(a,a.dartException)
return A.Fw(a)},
eo(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Fw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dq(r,16)&8191)===10)switch(q){case 438:return A.eo(a,A.w6(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.eo(a,new A.hW())}}if(a instanceof TypeError){p=$.Ap()
o=$.Aq()
n=$.Ar()
m=$.As()
l=$.Av()
k=$.Aw()
j=$.Au()
$.At()
i=$.Ay()
h=$.Ax()
g=p.aZ(s)
if(g!=null)return A.eo(a,A.w6(A.r(s),g))
else{g=o.aZ(s)
if(g!=null){g.method="call"
return A.eo(a,A.w6(A.r(s),g))}else if(n.aZ(s)!=null||m.aZ(s)!=null||l.aZ(s)!=null||k.aZ(s)!=null||j.aZ(s)!=null||m.aZ(s)!=null||i.aZ(s)!=null||h.aZ(s)!=null){A.r(s)
return A.eo(a,new A.hW())}}return A.eo(a,new A.l0(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ib()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eo(a,new A.cs(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ib()
return a},
cI(a){var s
if(a instanceof A.hv)return a.b
if(a==null)return new A.iJ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iJ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mp(a){if(a==null)return J.aB(a)
if(typeof a=="object")return A.i1(a)
return J.aB(a)},
FS(a){if(typeof a=="number")return B.c.gM(a)
if(a instanceof A.lZ)return A.i1(a)
if(a instanceof A.bb)return a.gM(a)
return A.mp(a)},
A1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
G2(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
EG(a,b,c,d,e,f){t.BO.a(a)
switch(A.e(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.ta("Unsupported number of arguments for wrapped closure"))},
ha(a,b){var s=a.$identity
if(!!s)return s
s=A.FT(a,b)
a.$identity=s
return s},
FT(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.EG)},
Bd(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kU().constructor.prototype):Object.create(new A.fg(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xE(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.B9(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xE(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
B9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.B4)}throw A.b("Error in functionType of tearoff")},
Ba(a,b,c,d){var s=A.xD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xE(a,b,c,d){if(c)return A.Bc(a,b,d)
return A.Ba(b.length,d,a,b)},
Bb(a,b,c,d){var s=A.xD,r=A.B5
switch(b?-1:a){case 0:throw A.b(new A.kH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Bc(a,b,c){var s,r
if($.xB==null)$.xB=A.xA("interceptor")
if($.xC==null)$.xC=A.xA("receiver")
s=b.length
r=A.Bb(s,c,a,b)
return r},
x7(a){return A.Bd(a)},
B4(a,b){return A.iN(v.typeUniverse,A.bS(a.a),b)},
xD(a){return a.a},
B5(a){return a.b},
xA(a){var s,r,q,p=new A.fg("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
A5(a){return v.getIsolateTag(a)},
Al(){return v.G},
Hm(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Gb(a){var s,r,q,p,o,n=A.r($.A7.$1(a)),m=$.vb[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vi[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ap($.zY.$2(a,n))
if(q!=null){m=$.vb[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vi[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vN(s)
$.vb[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vi[n]=s
return s}if(p==="-"){o=A.vN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Af(a,s)
if(p==="*")throw A.b(A.yr(n))
if(v.leafTags[n]===true){o=A.vN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Af(a,s)},
Af(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xd(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vN(a){return J.xd(a,!1,null,!!a.$ibX)},
Gd(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vN(s)
else return J.xd(s,c,null,null)},
G5(){if(!0===$.xb)return
$.xb=!0
A.G6()},
G6(){var s,r,q,p,o,n,m,l
$.vb=Object.create(null)
$.vi=Object.create(null)
A.G4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ag.$1(o)
if(n!=null){m=A.Gd(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
G4(){var s,r,q,p,o,n,m=B.er()
m=A.h9(B.es,A.h9(B.et,A.h9(B.c6,A.h9(B.c6,A.h9(B.eu,A.h9(B.ev,A.h9(B.ew(B.c5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.A7=new A.vf(p)
$.zY=new A.vg(o)
$.Ag=new A.vh(n)},
h9(a,b){return a(b)||b},
Dq(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.a9(r,b[s]))return!1}return!0},
FV(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
y_(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a1("Illegal RegExp pattern ("+String(o)+")",a,null))},
Go(a,b,c){var s=a.indexOf(b,c)
return s>=0},
G0(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ah(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xf(a,b,c){var s=A.Gp(a,b,c)
return s},
Gp(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ah(b),"g"),A.G0(c))},
aR:function aR(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
cl:function cl(a){this.a=a},
hp:function hp(a,b){this.a=a
this.$ti=b},
fn:function fn(){},
nm:function nm(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
hq:function hq(){},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
qd:function qd(a){this.a=a},
i7:function i7(){},
rD:function rD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(){},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a){this.a=a},
pS:function pS(a){this.a=a},
hv:function hv(a,b){this.a=a
this.b=b},
iJ:function iJ(a){this.a=a
this.b=null},
dQ:function dQ(){},
js:function js(){},
jt:function jt(){},
kX:function kX(){},
kU:function kU(){},
fg:function fg(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pi:function pi(a){this.a=a},
pu:function pu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ab:function ab(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aj:function aj(a,b){this.a=a
this.$ti=b},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
G:function G(a,b){this.a=a
this.$ti=b},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hK:function hK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vf:function vf(a){this.a=a},
vg:function vg(a){this.a=a},
vh:function vh(a){this.a=a},
bb:function bb(){},
ef:function ef(){},
eg:function eg(){},
f3:function f3(){},
hG:function hG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lE:function lE(a){this.b=a},
lj:function lj(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
id:function id(a,b){this.a=a
this.c=b},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Gq(a){throw A.aD(A.y2(a),new Error())},
p(){throw A.aD(A.aa(""),new Error())},
aW(){throw A.aD(A.C2(""),new Error())},
xg(){throw A.aD(A.y2(""),new Error())},
ac(){var s=new A.t9()
return s.b=s},
t9:function t9(){this.b=null},
a0(a){return a},
Ca(a){return new Int8Array(a)},
Cb(a){return new Uint8Array(a)},
kn(a){return new Uint8Array(A.a0(a))},
dH(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.va(b,a))},
E3(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.FY(a,b,c))
return b},
fF:function fF(){},
fE:function fE(){},
hU:function hU(){},
kg:function kg(){},
b4:function b4(){},
hS:function hS(){},
hT:function hT(){},
hR:function hR(){},
kh:function kh(){},
ki:function ki(){},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
eG:function eG(){},
hV:function hV(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
wg(a,b){var s=b.c
return s==null?b.c=A.iL(a,"bW",[b.x]):s},
yj(a){var s=a.w
if(s===6||s===7)return A.yj(a.x)
return s===11||s===12},
CA(a){return a.as},
Ae(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
Y(a){return A.tM(v.typeUniverse,a,!1)},
fa(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fa(a1,s,a3,a4)
if(r===s)return a2
return A.yR(a1,r,!0)
case 7:s=a2.x
r=A.fa(a1,s,a3,a4)
if(r===s)return a2
return A.yQ(a1,r,!0)
case 8:q=a2.y
p=A.h7(a1,q,a3,a4)
if(p===q)return a2
return A.iL(a1,a2.x,p)
case 9:o=a2.x
n=A.fa(a1,o,a3,a4)
m=a2.y
l=A.h7(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wr(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.h7(a1,j,a3,a4)
if(i===j)return a2
return A.yS(a1,k,i)
case 11:h=a2.x
g=A.fa(a1,h,a3,a4)
f=a2.y
e=A.Fs(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yP(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.h7(a1,d,a3,a4)
o=a2.x
n=A.fa(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ws(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jj("Attempted to substitute unexpected RTI kind "+a0))}},
h7(a,b,c,d){var s,r,q,p,o=b.length,n=A.tQ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fa(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Ft(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tQ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fa(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Fs(a,b,c,d){var s,r=b.a,q=A.h7(a,r,c,d),p=b.b,o=A.h7(a,p,c,d),n=b.c,m=A.Ft(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lx()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
x8(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.G3(s)
return a.$S()}return null},
G7(a,b){var s
if(A.yj(b))if(a instanceof A.dQ){s=A.x8(a)
if(s!=null)return s}return A.bS(a)},
bS(a){if(a instanceof A.N)return A.o(a)
if(Array.isArray(a))return A.C(a)
return A.wK(J.en(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.wK(a)},
wK(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ED(a,s)},
ED(a,b){var s=a instanceof A.dQ?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.DA(v.typeUniverse,s.name)
b.$ccache=r
return r},
G3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tM(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xa(a){return A.db(A.o(a))},
x2(a){var s
if(a instanceof A.bb)return a.eR()
s=a instanceof A.dQ?A.x8(a):null
if(s!=null)return s
if(t.sg.b(a))return J.ff(a).a
if(Array.isArray(a))return A.C(a)
return A.bS(a)},
db(a){var s=a.r
return s==null?a.r=new A.lZ(a):s},
G1(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iN(v.typeUniverse,A.x2(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.yT(v.typeUniverse,s,A.x2(q[r]))}return A.iN(v.typeUniverse,s,a)},
cp(a){return A.db(A.tM(v.typeUniverse,a,!1))},
EC(a){var s=this
s.b=A.Fn(s)
return s.b(a)},
Fn(a){var s,r,q,p,o
if(a===t.K)return A.EM
if(A.fc(a))return A.ER
s=a.w
if(s===6)return A.Eu
if(s===1)return A.zx
if(s===7)return A.EH
r=A.Fm(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fc)){a.f="$i"+q
if(q==="E")return A.EK
if(a===t.m)return A.EJ
return A.EQ}}else if(s===10){p=A.FV(a.x,a.y)
o=p==null?A.zx:p
return o==null?A.f7(o):o}return A.Es},
Fm(a){if(a.w===8){if(a===t.S)return A.aJ
if(a===t.i||a===t.o)return A.EL
if(a===t.N)return A.EP
if(a===t.y)return A.bq}return null},
EB(a){var s=this,r=A.Er
if(A.fc(s))r=A.DY
else if(s===t.K)r=A.f7
else if(A.hc(s)){r=A.Et
if(s===t.lo)r=A.ze
else if(s===t.dR)r=A.ap
else if(s===t.k7)r=A.zc
else if(s===t.s7)r=A.wy
else if(s===t.u6)r=A.zd
else if(s===t.gt)r=A.F}else if(s===t.S)r=A.e
else if(s===t.N)r=A.r
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a6
else if(s===t.i)r=A.bo
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
Es(a){var s=this
if(a==null)return A.hc(s)
return A.Aa(v.typeUniverse,A.G7(a,s),s)},
Eu(a){if(a==null)return!0
return this.x.b(a)},
EQ(a){var s,r=this
if(a==null)return A.hc(r)
s=r.f
if(a instanceof A.N)return!!a[s]
return!!J.en(a)[s]},
EK(a){var s,r=this
if(a==null)return A.hc(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.N)return!!a[s]
return!!J.en(a)[s]},
EJ(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.N)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zw(a){if(typeof a=="object"){if(a instanceof A.N)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Er(a){var s=this
if(a==null){if(A.hc(s))return a}else if(s.b(a))return a
throw A.aD(A.zj(a,s),new Error())},
Et(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.zj(a,s),new Error())},
zj(a,b){return new A.fX("TypeError: "+A.yH(a,A.bG(b,null)))},
A_(a,b,c,d){if(A.Aa(v.typeUniverse,a,b))return a
throw A.aD(A.Ds("The type argument '"+A.bG(a,null)+"' is not a subtype of the type variable bound '"+A.bG(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yH(a,b){return A.jI(a)+": type '"+A.bG(A.x2(a),null)+"' is not a subtype of type '"+b+"'"},
Ds(a){return new A.fX("TypeError: "+a)},
cm(a,b){return new A.fX("TypeError: "+A.yH(a,b))},
EH(a){var s=this
return s.x.b(a)||A.wg(v.typeUniverse,s).b(a)},
EM(a){return a!=null},
f7(a){if(a!=null)return a
throw A.aD(A.cm(a,"Object"),new Error())},
ER(a){return!0},
DY(a){return a},
zx(a){return!1},
bq(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.cm(a,"bool"),new Error())},
zc(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.cm(a,"bool?"),new Error())},
bo(a){if(typeof a=="number")return a
throw A.aD(A.cm(a,"double"),new Error())},
zd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cm(a,"double?"),new Error())},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
e(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.cm(a,"int"),new Error())},
ze(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.cm(a,"int?"),new Error())},
EL(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.aD(A.cm(a,"num"),new Error())},
wy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cm(a,"num?"),new Error())},
EP(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.aD(A.cm(a,"String"),new Error())},
ap(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.cm(a,"String?"),new Error())},
a(a){if(A.zw(a))return a
throw A.aD(A.cm(a,"JSObject"),new Error())},
F(a){if(a==null)return a
if(A.zw(a))return a
throw A.aD(A.cm(a,"JSObject?"),new Error())},
zO(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bG(a[q],b)
return s},
Fb(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zO(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bG(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zn(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bG(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bG(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bG(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bG(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bG(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bG(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bG(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bG(a.x,b)+">"
if(l===8){p=A.Fv(a.x)
o=a.y
return o.length>0?p+("<"+A.zO(o,b)+">"):p}if(l===10)return A.Fb(a,b)
if(l===11)return A.zn(a,b,null)
if(l===12)return A.zn(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Fv(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
DB(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
DA(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tM(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iM(a,5,"#")
q=A.tQ(s)
for(p=0;p<s;++p)q[p]=r
o=A.iL(a,b,q)
n[b]=o
return o}else return m},
Dz(a,b){return A.z0(a.tR,b)},
Dy(a,b){return A.z0(a.eT,b)},
tM(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yM(A.yK(a,null,b,!1))
r.set(b,s)
return s},
iN(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yM(A.yK(a,b,c,!0))
q.set(c,r)
return r},
yT(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wr(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ei(a,b){b.a=A.EB
b.b=A.EC
return b},
iM(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cE(null,null)
s.w=b
s.as=c
r=A.ei(a,s)
a.eC.set(c,r)
return r},
yR(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Dw(a,b,r,c)
a.eC.set(r,s)
return s},
Dw(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fc(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hc(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cE(null,null)
q.w=6
q.x=b
q.as=c
return A.ei(a,q)},
yQ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Du(a,b,r,c)
a.eC.set(r,s)
return s},
Du(a,b,c,d){var s,r
if(d){s=b.w
if(A.fc(b)||b===t.K)return b
else if(s===1)return A.iL(a,"bW",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cE(null,null)
r.w=7
r.x=b
r.as=c
return A.ei(a,r)},
Dx(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=13
s.x=b
s.as=q
r=A.ei(a,s)
a.eC.set(q,r)
return r},
iK(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Dt(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iL(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iK(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cE(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ei(a,r)
a.eC.set(p,q)
return q},
wr(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iK(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cE(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ei(a,o)
a.eC.set(q,n)
return n},
yS(a,b,c){var s,r,q="+"+(b+"("+A.iK(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ei(a,s)
a.eC.set(q,r)
return r},
yP(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iK(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iK(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Dt(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cE(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ei(a,p)
a.eC.set(r,o)
return o},
ws(a,b,c,d){var s,r=b.as+("<"+A.iK(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Dv(a,b,c,r,d)
a.eC.set(r,s)
return s},
Dv(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tQ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fa(a,b,r,0)
m=A.h7(a,c,r,0)
return A.ws(a,n,m,c!==m)}}l=new A.cE(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ei(a,l)},
yK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yM(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Dl(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yL(a,r,l,k,!1)
else if(q===46)r=A.yL(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f2(a.u,a.e,k.pop()))
break
case 94:k.push(A.Dx(a.u,k.pop()))
break
case 35:k.push(A.iM(a.u,5,"#"))
break
case 64:k.push(A.iM(a.u,2,"@"))
break
case 126:k.push(A.iM(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Dn(a,k)
break
case 38:A.Dm(a,k)
break
case 63:p=a.u
k.push(A.yR(p,A.f2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yQ(p,A.f2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Dk(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yN(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Dp(a.u,a.e,o)
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
return A.f2(a.u,a.e,m)},
Dl(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.DB(s,o.x)[p]
if(n==null)A.i('No "'+p+'" in "'+A.CA(o)+'"')
d.push(A.iN(s,o,n))}else d.push(p)
return m},
Dn(a,b){var s,r=a.u,q=A.yJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iL(r,p,q))
else{s=A.f2(r,a.e,p)
switch(s.w){case 11:b.push(A.ws(r,s,q,a.n))
break
default:b.push(A.wr(r,s,q))
break}}},
Dk(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yJ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f2(p,a.e,o)
q=new A.lx()
q.a=s
q.b=n
q.c=m
b.push(A.yP(p,r,q))
return
case-4:b.push(A.yS(p,b.pop(),s))
return
default:throw A.b(A.jj("Unexpected state under `()`: "+A.y(o)))}},
Dm(a,b){var s=b.pop()
if(0===s){b.push(A.iM(a.u,1,"0&"))
return}if(1===s){b.push(A.iM(a.u,4,"1&"))
return}throw A.b(A.jj("Unexpected extended operation "+A.y(s)))},
yJ(a,b){var s=b.splice(a.p)
A.yN(a.u,a.e,s)
a.p=b.pop()
return s},
f2(a,b,c){if(typeof c=="string")return A.iL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Do(a,b,c)}else return c},
yN(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f2(a,b,c[s])},
Dp(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f2(a,b,c[s])},
Do(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jj("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jj("Bad index "+c+" for "+b.p(0)))},
Aa(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aS(a,b,null,c,null)
r.set(c,s)}return s},
aS(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fc(d))return!0
s=b.w
if(s===4)return!0
if(A.fc(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aS(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aS(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aS(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aS(a,b.x,c,d,e))return!1
return A.aS(a,A.wg(a,b),c,d,e)}if(s===6)return A.aS(a,p,c,d,e)&&A.aS(a,b.x,c,d,e)
if(q===7){if(A.aS(a,b,c,d.x,e))return!0
return A.aS(a,b,c,A.wg(a,d),e)}if(q===6)return A.aS(a,b,c,p,e)||A.aS(a,b,c,d.x,e)
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
if(!A.aS(a,j,c,i,e)||!A.aS(a,i,e,j,c))return!1}return A.zv(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zv(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.EI(a,b,c,d,e)}if(o&&q===10)return A.EN(a,b,c,d,e)
return!1},
zv(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aS(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aS(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aS(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aS(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aS(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
EI(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iN(a,b,r[o])
return A.za(a,p,null,c,d.y,e)}return A.za(a,b.y,null,c,d.y,e)},
za(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aS(a,b[s],d,e[s],f))return!1
return!0},
EN(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aS(a,r[s],c,q[s],e))return!1
return!0},
hc(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fc(a))if(s!==6)r=s===7&&A.hc(a.x)
return r},
fc(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
z0(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tQ(a){return a>0?new Array(a):v.typeUniverse.sEA},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lx:function lx(){this.c=this.b=this.a=null},
lZ:function lZ(a){this.a=a},
lv:function lv(){},
fX:function fX(a){this.a=a},
Dd(){var s,r,q
if(self.scheduleImmediate!=null)return A.FI()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ha(new A.t4(s),1)).observe(r,{childList:true})
return new A.t3(s,r,q)}else if(self.setImmediate!=null)return A.FJ()
return A.FK()},
De(a){self.scheduleImmediate(A.ha(new A.t5(t.O.a(a)),0))},
Df(a){self.setImmediate(A.ha(new A.t6(t.O.a(a)),0))},
Dg(a){A.wj(B.eX,t.O.a(a))},
wj(a,b){return A.Dr(a.a/1000|0,b)},
Dr(a,b){var s=new A.tK()
s.ih(a,b)
return s},
bF(a){return new A.ll(new A.as($.am,a.i("as<0>")),a.i("ll<0>"))},
bE(a,b){a.$2(0,null)
b.b=!0
return b.a},
au(a,b){A.E_(a,b)},
bD(a,b){b.dt(a)},
bC(a,b){b.du(A.ao(a),A.cI(a))},
E_(a,b){var s,r,q=new A.tV(b),p=new A.tW(b)
if(a instanceof A.as)a.fh(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.e_(q,p,s)
else{r=new A.as($.am,t.hR)
r.a=8
r.c=a
r.fh(q,p,s)}}},
bH(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.am.h6(new A.v5(s),t.H,t.S,t.z)},
yO(a,b,c){return 0},
mJ(a){var s
if(t.yt.b(a)){s=a.gbO()
if(s!=null)return s}return B.at},
xM(a){var s
a.a(null)
s=new A.as($.am,a.i("as<0>"))
s.d3(null)
return s},
BJ(a,b,c){var s=new A.as($.am,c.i("as<0>"))
A.CO(a,new A.o5(b,s,c))
return s},
o6(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.am,b.i("as<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.o8(i,h,g,f)
try{for(n=J.P(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.e_(new A.o7(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cr(A.c([],b.i("q<0>")))
return n}i.a=A.e0(n,null,!1,b.i("0?"))}catch(l){p=A.ao(l)
o=A.cI(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wL(m,k)
m=new A.b1(m,k==null?A.mJ(m):k)
n.cp(m)
return n}else{i.d=p
i.c=o}}return f},
wL(a,b){if($.am===B.x)return null
return null},
EE(a,b){if($.am!==B.x)A.wL(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbO()
if(b==null){A.yd(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.yd(a,b)
return new A.b1(a,b)},
tf(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.CJ()
b.cp(new A.b1(new A.cs(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f0(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bU()
b.cq(o.a)
A.eY(b,p)
return}b.a^=2
A.mk(null,null,b.b,t.O.a(new A.tg(o,b)))},
eY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wW(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eY(d.a,c)
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
A.wW(j.a,j.b)
return}g=$.am
if(g!==h)$.am=h
else g=null
c=c.c
if((c&15)===8)new A.tk(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tj(q,j).$0()}else if((c&2)!==0)new A.ti(d,q).$0()
if(g!=null)$.am=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("bW<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.tf(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cB(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
zI(a,b){var s
if(t.nW.b(a))return b.h6(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.ah(a,"onError",u.c))},
F0(){var s,r
for(s=$.h4;s!=null;s=$.h4){$.j6=null
r=s.b
$.h4=r
if(r==null)$.j5=null
s.a.$0()}},
Fq(){$.wM=!0
try{A.F0()}finally{$.j6=null
$.wM=!1
if($.h4!=null)$.xn().$1(A.zZ())}},
zR(a){var s=new A.lm(a),r=$.j5
if(r==null){$.h4=$.j5=s
if(!$.wM)$.xn().$1(A.zZ())}else $.j5=r.b=s},
Fj(a){var s,r,q,p=$.h4
if(p==null){A.zR(a)
$.j6=$.j5
return}s=new A.lm(a)
r=$.j6
if(r==null){s.b=p
$.h4=$.j6=s}else{q=r.b
s.b=q
$.j6=r.b=s
if(q==null)$.j5=s}},
GJ(a,b){A.fb(a,"stream",t.K)
return new A.lU(b.i("lU<0>"))},
CO(a,b){var s=$.am
if(s===B.x)return A.wj(a,t.O.a(b))
return A.wj(a,t.O.a(s.fw(b)))},
wW(a,b){A.Fj(new A.uX(a,b))},
zN(a,b,c,d,e){var s,r=$.am
if(r===c)return d.$0()
$.am=c
s=r
try{r=d.$0()
return r}finally{$.am=s}},
Fh(a,b,c,d,e,f,g){var s,r=$.am
if(r===c)return d.$1(e)
$.am=c
s=r
try{r=d.$1(e)
return r}finally{$.am=s}},
Fg(a,b,c,d,e,f,g,h,i){var s,r=$.am
if(r===c)return d.$2(e,f)
$.am=c
s=r
try{r=d.$2(e,f)
return r}finally{$.am=s}},
mk(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.fw(d)
d=d}A.zR(d)},
t4:function t4(a){this.a=a},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a){this.a=a},
t6:function t6(a){this.a=a},
tK:function tK(){},
tL:function tL(a,b){this.a=a
this.b=b},
ll:function ll(a,b){this.a=a
this.b=!1
this.$ti=b},
tV:function tV(a){this.a=a},
tW:function tW(a){this.a=a},
v5:function v5(a){this.a=a},
c6:function c6(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
b1:function b1(a,b){this.a=a
this.b=b},
o5:function o5(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function o8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o7:function o7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lp:function lp(){},
ip:function ip(a,b){this.a=a
this.$ti=b},
dE:function dE(a,b,c,d,e){var _=this
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
tc:function tc(a,b){this.a=a
this.b=b},
th:function th(a,b){this.a=a
this.b=b},
tg:function tg(a,b){this.a=a
this.b=b},
te:function te(a,b){this.a=a
this.b=b},
td:function td(a,b){this.a=a
this.b=b},
tk:function tk(a,b,c){this.a=a
this.b=b
this.c=c},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a){this.a=a},
tj:function tj(a,b){this.a=a
this.b=b},
ti:function ti(a,b){this.a=a
this.b=b},
lm:function lm(a){this.a=a
this.b=null},
lU:function lU(a){this.$ti=a},
iU:function iU(){},
lN:function lN(){},
tI:function tI(a,b){this.a=a
this.b=b},
uX:function uX(a,b){this.a=a
this.b=b},
yI(a,b){var s=a[b]
return s===a?null:s},
wp(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wo(){var s=Object.create(null)
A.wp(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
y4(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
J(a,b,c){return b.i("@<0>").K(c).i("w7<1,2>").a(A.A1(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
m(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
w8(a){return new A.ck(a.i("ck<0>"))},
a_(a){return new A.ck(a.i("ck<0>"))},
aO(a,b){return b.i("y5<0>").a(A.G2(a,new A.ck(b.i("ck<0>"))))},
wq(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fS(a,b,c){var s=new A.f1(a,b,c.i("f1<0>"))
s.c=a.e
return s},
bK(a,b){var s=J.P(a)
if(s.m())return s.gn()
return null},
aN(a,b,c){var s=A.y4(b,c)
a.au(0,new A.pv(s,b,c))
return s},
eE(a,b,c){var s=A.y4(b,c)
s.I(0,a)
return s},
hM(a,b){var s,r=A.w8(b)
for(s=J.P(a);s.m();)r.l(0,b.a(s.gn()))
return r},
kb(a,b){var s=A.w8(b)
s.I(0,a)
return s},
C3(a,b){var s=t.hO
return J.xu(s.a(a),s.a(b))},
w9(a){var s,r
if(A.xc(a))return"{...}"
s=new A.bk("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.au(0,new A.py(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DC(){throw A.b(A.b8("Cannot change an unmodifiable set"))},
iu:function iu(){},
to:function to(a){this.a=a},
iw:function iw(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
iv:function iv(a,b,c){var _=this
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
lD:function lD(a){this.a=a
this.c=this.b=null},
f1:function f1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pv:function pv(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a5:function a5(){},
px:function px(a){this.a=a},
py:function py(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iO:function iO(){},
fC:function fC(){},
e8:function e8(a,b){this.a=a
this.$ti=b},
dv:function dv(){},
iI:function iI(){},
m_:function m_(){},
fR:function fR(a,b){this.a=a
this.$ti=b},
fY:function fY(){},
iP:function iP(){},
F4(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ao(r)
q=A.a1(String(s),null,null)
throw A.b(q)}q=A.ul(p)
return q},
ul(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lB(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ul(a[s])
return a},
DT(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.AD()
else s=new Uint8Array(o)
for(r=J.aF(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DS(a,b,c,d){var s=a?$.AC():$.AB()
if(s==null)return null
if(0===c&&d===b.length)return A.z_(s,b)
return A.z_(s,b.subarray(c,d))},
z_(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xz(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a1("Invalid base64 padding, more than two '=' characters",a,b))},
y1(a,b,c){return new A.hL(a,b)},
Ef(a){return a.B()},
Dh(a,b){return new A.tr(a,[],A.FU())},
Di(a,b,c){var s,r=new A.bk(""),q=A.Dh(r,b)
q.cU(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DU(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lB:function lB(a,b){this.a=a
this.b=b
this.c=null},
tq:function tq(a){this.a=a},
lC:function lC(a){this.a=a},
tP:function tP(){},
tO:function tO(){},
jm:function jm(){},
n4:function n4(){},
eu:function eu(){},
jx:function jx(){},
jH:function jH(){},
hL:function hL(a,b){this.a=a
this.b=b},
k8:function k8(a,b){this.a=a
this.b=b},
k7:function k7(){},
pk:function pk(a){this.b=a},
pj:function pj(a){this.a=a},
ts:function ts(){},
tt:function tt(a,b){this.a=a
this.b=b},
tr:function tr(a,b,c){this.c=a
this.a=b
this.b=c},
l4:function l4(){},
rI:function rI(a){this.a=a},
tN:function tN(a){this.a=a
this.b=16
this.c=0},
A9(a){var s=A.dt(a,null)
if(s!=null)return s
throw A.b(A.a1(a,null,null))},
A0(a){var s=A.eI(a)
if(s!=null)return s
throw A.b(A.a1("Invalid double",a,null))},
BD(a,b){a=A.aD(a,new Error())
if(a==null)a=A.f7(a)
a.stack=b.p(0)
throw a},
e0(a,b,c,d){var s,r=c?J.xW(a,d):J.xV(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aq(a,b,c){var s,r=A.c([],c.i("q<0>"))
for(s=J.P(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("q<0>"))
s=A.c([],b.i("q<0>"))
for(r=J.P(a);r.m();)B.a.l(s,r.gn())
return s},
ai(a,b){var s=A.aq(a,!1,b)
s.$flags=3
return s},
yo(a,b,c){var s,r
A.kB(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aY(c,b,null,"end",null))
if(s===0)return""}r=A.CM(a,b,c)
return r},
CM(a,b,c){var s=a.length
if(b>=s)return""
return A.Cq(a,b,c==null||c>s?s:c)},
yg(a){return new A.hG(a,A.y_(a,!1,!0,!1,!1,""))},
wi(a,b,c){var s=J.P(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gn())
while(s.m())}else{a+=A.y(s.gn())
while(s.m())a=a+c+A.y(s.gn())}return a},
e9(){var s,r,q=A.Cf()
if(q==null)throw A.b(A.b8("'Uri.base' is not supported"))
s=$.yu
if(s!=null&&q===$.yt)return s
r=A.CU(q)
$.yu=r
$.yt=q
return r},
CJ(){return A.cI(new Error())},
Bj(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xG(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jz(a){if(a>=10)return""+a
return"0"+a},
BC(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.ah(b,"name","No enum value with that name"))},
jI(a){if(typeof a=="number"||A.bq(a)||a==null)return J.dd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yc(a)},
BE(a,b){A.fb(a,"error",t.K)
A.fb(b,"stackTrace",t.l)
A.BD(a,b)},
jj(a){return new A.ji(a)},
w(a,b){return new A.cs(!1,null,b,a)},
ah(a,b,c){return new A.cs(!0,a,b,c)},
ye(a){var s=null
return new A.fI(s,s,!1,s,s,a)},
yf(a,b){return new A.fI(null,null,!0,a,b,"Value not in range")},
aY(a,b,c,d,e){return new A.fI(b,c,!0,a,d,"Invalid value")},
kC(a,b,c){if(0>a||a>c)throw A.b(A.aY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aY(b,a,c,"end",null))
return b}return c},
kB(a,b){if(a<0)throw A.b(A.aY(a,0,null,b,null))
return a},
p_(a,b,c,d){return new A.k_(b,!0,a,d,"Index out of range")},
b8(a){return new A.ii(a)},
yr(a){return new A.l_(a)},
k(a){return new A.fO(a)},
aw(a){return new A.ju(a)},
a1(a,b,c){return new A.D(a,b,c)},
BY(a,b,c){var s,r
if(A.xc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c8,a)
try{A.ES(a,s)}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=A.wi(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
w4(a,b,c){var s,r
if(A.xc(a))return b+"..."+c
s=new A.bk(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wi(r.a,a,", ")}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ES(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.y(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.y(p)
r=A.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wa(a,b,c){var s=A.m(b,c)
s.k7(a)
return s},
cB(a,b,c,d,e,f){var s
if(B.f===c){s=J.aB(a)
b=J.aB(b)
return A.ig(A.aQ(A.aQ($.hf(),s),b))}if(B.f===d){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
return A.ig(A.aQ(A.aQ(A.aQ($.hf(),s),b),c))}if(B.f===e){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
return A.ig(A.aQ(A.aQ(A.aQ(A.aQ($.hf(),s),b),c),d))}if(B.f===f){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
e=J.aB(e)
return A.ig(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ($.hf(),s),b),c),d),e))}s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
e=J.aB(e)
f=J.aB(f)
f=A.ig(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ($.hf(),s),b),c),d),e),f))
return f},
Cc(a){var s,r,q=$.hf()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r)q=A.aQ(q,J.aB(a[r]))
return A.ig(q)},
eP(a,b){return new A.fR(A.kb(a,b),b.i("fR<0>"))},
CU(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.ys(a4<a4?B.b.H(a5,0,a4):a5,5,a3).ghb()
else if(s===32)return A.ys(B.b.H(a5,5,a4),0,a3).ghb()}r=A.e0(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zQ(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zQ(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ad(a5,"\\",n))if(p>0)h=B.b.ad(a5,"\\",p-1)||B.b.ad(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ad(a5,"..",n)))h=m>n+2&&B.b.ad(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ad(a5,"file",0)){if(p<=0){if(!B.b.ad(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.H(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bK(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ad(a5,"http",0)){if(i&&o+3===n&&B.b.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bK(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ad(a5,"https",0)){if(i&&o+4===n&&B.b.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bK(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lR(a4<a5.length?B.b.H(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DM(a5,0,q)
else{if(q===0)A.fZ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.DN(a5,c,p-1):""
a=A.DI(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dt(B.b.H(a5,i,n),a3)
d=A.DK(a0==null?A.i(A.a1("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.DJ(a5,n,m,a3,j,a!=null)
a2=m<l?A.DL(a5,m+1,l,a3):a3
return A.DD(j,b,a,d,a1,a2,l<a4?A.DH(a5,l+1,a4):a3)},
yw(a){var s=t.N
return B.a.be(A.c(a.split("&"),t.s),A.m(s,s),new A.rH(B.c8),t.G)},
l3(a,b,c){throw A.b(A.a1("Illegal IPv4 address, "+a,b,c))},
CR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l3("each part must be in the range 0..255",a,r)}A.l3("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l3(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bU(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l3(j,a,q)
p=l}A.l3("IPv4 address should contain exactly 4 parts",a,q)},
CS(a,b,c){var s
if(b===c)throw A.b(A.a1("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.CT(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.yv(a,b,c)
return!0},
CT(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.D(n,a,q)
r=q
break}return new A.D("Unexpected character",a,q-1)}if(r-1===b)return new A.D(n,a,r)
return new A.D("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.D("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.D("Invalid IPvFuture address character",a,r)}},
yv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rG(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CR(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dq(l,8)
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
B.da.hA(s,a0,16,s,a)
B.da.lv(s,a,a0,0)}}return s},
DD(a,b,c,d,e,f,g){return new A.iQ(a,b,c,d,e,f,g)},
yU(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fZ(a,b,c){throw A.b(A.a1(c,a,b))},
DK(a,b){var s=A.yU(b)
if(a===s)return null
return a},
DI(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.fZ(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.DF(a,q,r)
if(o<r){n=o+1
p=A.yZ(a,B.b.ad(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CS(a,q,o)
l=B.b.H(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cJ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yZ(a,B.b.ad(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yv(a,b,o)
return"["+B.b.H(a,b,o)+p+"]"}}return A.DP(a,b,c)},
DF(a,b,c){var s=B.b.cJ(a,"%",b)
return s>=b&&s<c?s:c},
yZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bk(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wu(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bk("")
l=h.a+=B.b.H(a,q,r)
if(m)n=B.b.H(a,r,r+3)
else if(n==="%")A.fZ(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bk("")
if(q<r){h.a+=B.b.H(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.H(a,q,r)
if(h==null){h=new A.bk("")
m=h}else m=h
m.a+=i
l=A.wt(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.H(a,b,c)
if(q<c){i=B.b.H(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wu(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bk("")
k=B.b.H(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.H(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bk("")
if(q<r){p.a+=B.b.H(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fZ(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.H(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bk("")
l=p}else l=p
l.a+=k
j=A.wt(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.H(a,b,c)
if(q<c){k=B.b.H(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
DM(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.yW(a.charCodeAt(b)))A.fZ(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fZ(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.H(a,b,c)
return A.DE(q?a.toLowerCase():a)},
DE(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
DN(a,b,c){return A.iR(a,b,c,16,!1,!1)},
DJ(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iR(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.DO(q,e,f)},
DO(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.DQ(a,!s||c)
return A.DR(a)},
DL(a,b,c,d){return A.iR(a,b,c,256,!0,!1)},
DH(a,b,c){return A.iR(a,b,c,256,!0,!1)},
wu(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.vd(r)
o=A.vd(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.az(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.H(a,b,b+3).toUpperCase()
return null},
wt(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jM(a,6*p)&63|q
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
o+=3}}return A.yo(s,0,null)},
iR(a,b,c,d,e,f){var s=A.yY(a,b,c,d,e,f)
return s==null?B.b.H(a,b,c):s},
yY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wu(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fZ(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wt(n)}if(o==null){o=new A.bk("")
k=o}else k=o
k.a=(k.a+=B.b.H(a,p,q))+l
if(typeof m!=="number")return A.ve(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.H(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
yX(a){if(B.b.T(a,"."))return!0
return B.b.bF(a,"/.")!==-1},
DR(a){var s,r,q,p,o,n,m
if(!A.yX(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.W(s,"/")},
DQ(a,b){var s,r,q,p,o,n
if(!A.yX(a))return!b?A.yV(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gX(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.yV(s[0]))}return B.a.W(s,"/")},
yV(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yW(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.H(a,0,s)+"%3A"+B.b.b2(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
DG(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
wv(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.c8===d)return B.b.H(a,b,c)
else p=new A.dR(B.b.H(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.w("Truncated URI",null))
B.a.l(p,A.DG(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.U.a(p)
return B.mu.kB(p)},
yW(a){var s=a|32
return 97<=s&&s<=122},
ys(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a1(k,a,r))}}if(q<0&&r>b)throw A.b(A.a1(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gX(j)
if(p!==44||r!==n+7||!B.b.ad(a,"base64",n+1))throw A.b(A.a1("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.ep.lT(a,m,s)
else{l=A.yY(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bK(a,m,s,l)}return new A.rF(a,j,c)},
zQ(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a},
lu:function lu(){},
al:function al(){},
ji:function ji(a){this.a=a},
dz:function dz(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
k_:function k_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ii:function ii(a){this.a=a},
l_:function l_(a){this.a=a},
fO:function fO(a){this.a=a},
ju:function ju(a){this.a=a},
ko:function ko(){},
ib:function ib(){},
ta:function ta(a){this.a=a},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(){},
N:function N(){},
lX:function lX(){},
ro:function ro(){this.b=this.a=0},
bk:function bk(a){this.a=a},
rH:function rH(a){this.a=a},
rG:function rG(a){this.a=a},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lq:function lq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pR:function pR(a){this.a=a},
zo(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.E2,a)
s[$.hd()]=a
return s},
U(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.tX,a)
s[$.hd()]=a
return s},
E2(a){return t.BO.a(a).$0()},
tX(a,b,c){t.BO.a(a)
if(A.e(c)>=1)return a.$1(b)
return a.$0()},
A6(a,b,c){return c.a(a[b])},
zp(a,b){return a[b]},
aL(a,b,c,d){return d.a(a[b].apply(a,c))},
bT(a,b){var s=new A.as($.am,b.i("as<0>")),r=new A.ip(s,b.i("ip<0>"))
a.then(A.ha(new A.vO(r,b),1),A.ha(new A.vP(r),1))
return s},
zA(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hb(a){if(A.zA(a))return a
return new A.v9(new A.iw(t.BT)).$1(a)},
vO:function vO(a,b){this.a=a
this.b=b},
vP:function vP(a){this.a=a},
v9:function v9(a){this.a=a},
Cr(a){var s
if(a==null)s=B.aQ
else{s=new A.ee()
s.bP(a)}return s},
lA:function lA(){},
ee:function ee(){this.b=this.a=0},
qi:function qi(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qj:function qj(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(a,b){this.a=a
this.b=b
this.c=null},
fm:function fm(a,b){this.a=a
this.b=b},
nj:function nj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nl:function nl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nk:function nk(){var _=this
_.c=_.b=_.a=null
_.d=0},
ku:function ku(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
_.cy=a0},
fj:function fj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jP:function jP(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
o0:function o0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dX(a,b){return new A.jX(a,b)},
du:function du(){},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
Gk(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iF(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.P(f,new A.vQ())
s=A.c([],t.cv)
for(r=A.kV(f,0,A.fb(b,"count",t.S),t.mn),q=r.$ti,r=new A.aH(r,r.gt(0),q.i("aH<a4.E>")),q=q.i("a4.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a,b,c,d){var _=this
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
vQ:function vQ(){},
pA(a,b,c,d,e,f,g,h,i,j){return new A.e1(c,a,h,g,f,e,i,j,b,!0)},
kd(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
jh:function jh(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c,d,e,f,g,h,i,j){var _=this
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
C6(a){A:{break A}return a},
d3:function d3(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(){},
rK:function rK(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pG:function pG(){},
pH:function pH(){},
pI:function pI(){},
hX(a){var s,r=t.N,q=A.aO(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.I(0,A.aO(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.I(0,A.aO(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.I(0,A.aO(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.I(0,A.aO(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pT(A.eP(q,r),s)},
pT:function pT(a,b){this.a=a
this.b=b},
pU:function pU(){},
fK:function fK(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fs:function fs(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
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
hn:function hn(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
eM:function eM(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.d=c},
o2:function o2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
C4(a){var s,r,q
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=B.bm;s.m();){switch(s.d.a){case 0:q=B.bm
break
case 1:q=B.d7
break
case 2:q=B.d8
break
case 3:q=B.d9
break
default:q=null}if(A.y8(q)>A.y8(r))r=q}return r},
y8(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
zW(a){return new A.bR(A.Fu(a),t.EF)},
Fu(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$zW(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aR("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eF:function eF(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b){this.a=a
this.b=b},
pD:function pD(a){this.a=a},
pE:function pE(a){this.a=a},
pB:function pB(a){this.a=a},
pC:function pC(){},
C5(){return new A.ke(new A.cY(new A.pF(),A.c([],t.Fy),A.c([],t.t),t.ja))},
ke:function ke(a){this.a=a},
pF:function pF(){},
zT(a){var s=4
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
case 3:s=A.i(A.b8("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
E9(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.W[r]
if(A.zT(q.a)===b)s+=q.c}return s},
C7(a){return new A.pJ(a,new A.cY(new A.pK(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
y9(a){var s
A:{s=a.byteLength
break A}return s},
l1:function l1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pJ:function pJ(a,b,c){this.a=a
this.b=b
this.c=c},
pK:function pK(){},
pL:function pL(){},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(a){this.a=a},
rw:function rw(a,b){this.a=a
this.b=b},
rx:function rx(){},
CN(a){var s=new A.kY(a,new A.cY(new A.rA(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aT($.xl())
s.e=s.aT($.xi())
s.f=s.aT($.xj())
s.r=s.aT($.xh())
s.w=s.aT($.xk())
return s},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rA:function rA(){},
rC:function rC(){},
rB:function rB(){},
FL(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
p.gE()
B.a.l(o,new A.eD(p,A.c([p],r)))
continue}return o},
eD:function eD(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
nW:function nW(){},
nX:function nX(a){this.a=a},
nU:function nU(a){this.a=a},
nV:function nV(a){this.a=a},
jN:function jN(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
o1:function o1(a,b){this.a=a
this.b=b
this.c=0},
Dj(){return new A.fT()},
o_:function o_(a){this.a=a
this.b=null},
fT:function fT(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wd(){return!0},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pX:function pX(){},
pY:function pY(){},
ce:function ce(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fJ:function fJ(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
ho:function ho(a){this.b=a},
ky:function ky(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bj:function bj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qk:function qk(){},
b5:function b5(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qm:function qm(a,b){this.a=a
this.b=b},
qr:function qr(){},
qq:function qq(){},
qp:function qp(){},
qo:function qo(a){this.a=a},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b){this.a=a
this.b=b},
Cw(a){return new A.i3(a,new A.cY(new A.qs(),A.c([],t.w_),A.c([],t.t),t.tc))},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a,b){this.a=a
this.b=b},
qs:function qs(){},
uE(a,b){return A.Ek(a,b)},
Ek(a,b){var s=0,r=A.bF(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uE=A.bH(function(c,a0){if(c===1)return A.bC(a0,r)
for(;;)switch(s){case 0:a.bR()
if(a.at!=null)throw A.b(A.k("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.bW(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.bX(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cM(b)
n=new A.ky(a.a,A.m(t.N,t.CH))
l=A.zk(a,n,b,o.a.b.a)
m=l.a
i.bX(p)
h=a.x
g=o
if(h.e)A.i(A.k("GPU resource adapter is disposed"))
h.ev(g)
f=h.c
h.b.bX(g.a)
h.c=g
h.d=null
if(f!=null)h.dc(f.b)
g.c=B.hy
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
i.eE(h)
i.a.fq(h.a)
i.b.dY(h.b)
h.c=B.eQ
i.c=null}i=o
if((i==null?null:i.c)===B.ae){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.i(A.k("GPU resource adapter is disposed"))
i.ev(h)
i.dc(h.b)
i.b.dY(h.a)
h.c=B.hz
i.d=null}i=m
if(i!=null)i.bC()
i=n
if(i!=null)i.bC()
throw d}case 1:return A.bD(q,r)}})
return A.bE($async$uE,r)},
zl(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zk(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zk(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uC(a),j=new A.uD(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.FQ(b,h,d,i,s.gmz(),new A.un(j),new A.uo(j),new A.up(a),new A.uu(a),new A.uv(a),new A.uw(j),new A.ux(j),s.gmB(),new A.uy(a),s.gmF(),r.gmD(),k,s.gmH(),s.gmJ(),new A.uz(j,c),new A.uA(j),new A.uB(j),new A.uq(j),new A.ur(j),new A.us(a),new A.ut(j),e,f,g,c.r)}else{p=new A.aI(l,B.r,g,f,e,0)
o=new A.aI(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hQ(h,p,o):null
k=A.c([new A.lg(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i0(b,u.l,u.B,h,i,d))
q=new A.jM(k)}a.r.toString
m=q.ko(B.a3,new A.qk(),!1,new A.lK())
k=m.a.b
if(k.length!==0)throw A.b(A.k("safe renderer graph is invalid: "+A.y(k)))
return new A.tJ(q,m)},
El(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.k("renderer graph is not initialized"))
s=A.K(b7.gfU(),t.yz)
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
o=q.c.a9()
p=p.gar()
n=A.C(p)
B.a.l(s,new A.lY(new A.cv((r|1073741824)>>>0,0,"transient"),q,A.b0(new A.M(p,n.i("I(1)").a(o.gaz()),n.i("M<1,I>")))))}p=b8.a
m=A.FW(A.BI(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dX(B.az,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a2(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dX(B.az,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a2(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.o_(n)
e.kk("cull")
j=l-f
d=e.b
if(d==null)A.i(A.k("cull recorded outside an active frame"))
if(j<0)A.i(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.u)(s),++k){a2=s[k]
if(a2.gE().e===B.aU)B.a.l(a,new A.aP(new A.bI(a0.h9(a2.gE().c.a).c,a2.ga8().a),a2,a1))
else B.a.l(b,new A.aP(new A.bL(B.kK,a2.gE().b,a2.gE().a,a2.ga8().a),a2,g))}a3=new A.lw(A.FL(A.Gm(b)),A.Gl(a),p,b8.b,b8.c)
a4=new A.jC(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gE().a
if(g.length===0)A.i(A.ah(g,"passId",null))
e.b=g
n.ce(g,A.A2())
a6=A.m(o,i)
for(g=a5.gE().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.i(A.k("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.i(A.k("resource is not in candidate: "+b1))
b3=new A.fh(b2)
a6.k(0,b0+"#"+a1,b3)
a6.ce(b0,new A.uF(b3))}a5.an(new A.jq(a6,a4,a3))}return new A.tb(e,m,j)},
yl(a){return new A.qA(a,new A.ni(new A.nk(),new A.kG()),new A.o1(A.c([],t.h1),B.hj),A.c([],t.Ft),B.bw,A.c([],t.ow),null)},
kF:function kF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(a){this.a=a},
uD:function uD(a,b){this.a=a
this.b=b},
uB:function uB(a){this.a=a},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
uA:function uA(a){this.a=a},
up:function up(a){this.a=a},
ur:function ur(a){this.a=a},
uq:function uq(a){this.a=a},
uz:function uz(a,b){this.a=a
this.b=b},
un:function un(a){this.a=a},
uo:function uo(a){this.a=a},
uw:function uw(a){this.a=a},
ux:function ux(a){this.a=a},
uy:function uy(a){this.a=a},
ut:function ut(a){this.a=a},
us:function us(a){this.a=a},
uF:function uF(a){this.a=a},
tJ:function tJ(a,b){this.a=a
this.b=b},
lK:function lK(){},
lw:function lw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qA:function qA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qB:function qB(){},
qC:function qC(){},
qD:function qD(){},
lH:function lH(a){this.b=a},
tn:function tn(){},
lO:function lO(){},
ia:function ia(a,b){this.a=a
this.b=b},
Gm(a){var s,r,q=A.K(a,t.E0)
B.a.P(q,new A.vU())
s=A.C(q)
r=s.i("M<1,c0>")
s=A.K(new A.M(q,s.i("c0(1)").a(new A.vV()),r),r.i("a4.E"))
s.$flags=1
return s},
Gl(a){var s,r,q=A.K(a,t.EH)
B.a.P(q,new A.vS())
s=A.C(q)
r=s.i("M<1,c0>")
s=A.K(new A.M(q,s.i("c0(1)").a(new A.vT()),r),r.i("a4.E"))
s.$flags=1
return s},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
vU:function vU(){},
vV:function vV(){},
vS:function vS(){},
vT:function vT(){},
FW(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gE().d&c)>>>0===0){++q
continue}n=o.ge3()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.ga8().p(0),null))
if(a.mR(o.ge3())===B.co){++q
continue}B.a.l(l,o)}return new A.nA(l,new A.nB(q))},
nB:function nB(a){this.b=a},
nA:function nA(a,b){this.a=a
this.b=b},
b0(a){var s,r,q,p,o,n,m,l,k
for(s=J.P(a),r=B.mx,q=B.my,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.I(m,k,Math.min(r.c,o))
q=new A.I(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.jd(r,q)},
jd:function jd(a,b){this.a=a
this.b=b},
BI(a){var s,r,q,p,o,n,m=a.a,l=new A.o4(),k=m.length
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
return new A.o3(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eH:function eH(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
o3:function o3(a){this.a=a},
o4:function o4(){},
y6(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dq(new Float32Array(A.a0(a)))},
wb(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dq(q)},
y7(a,b,c){var s=b.gav(),r=c.bz(s).gav(),q=s.bz(r),p=new Float32Array(16)
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
return new A.dq(p)},
dq:function dq(a){this.a=a},
pz:function pz(){},
kA:function kA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kZ:function kZ(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ln:function ln(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jp:function jp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lo:function lo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jB:function jB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lr:function lr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
is:function is(a,b){this.a=a
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
ls:function ls(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lt:function lt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jW:function jW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
ly:function ly(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.b=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
bu(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aI(a.a,a.b,b,c,s,r)},
we:function we(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i0:function i0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kz:function kz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lM:function lM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yn(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mw:B.a6,q=A.y7(a.b,s,r)
return new A.eR(A.wb(1,a.f,B.c.D(a.w*2,0.1,3),0.05).ak(0,q))},
eR:function eR(a){this.a=a},
kO:function kO(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lP:function lP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
FQ(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.b(A.ah(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a2(e5+1,2)
m=B.d.a2(e4+1,2)
l=A.bu(B.bz,e5,e4,e3,a8)
k=A.bu(B.bz.fW(),e5,e4,a8,a8)
A.bu(B.lw,e5,e4,a8,a8)
j=A.bu(B.lt,e5,e4,a8,a8)
i=A.bu(B.lo,e6,e6,a8,a8)
h=A.bu(B.lp,b6,m,a8,a8)
g=A.bu(B.lq,b6,m,a8,a8)
f=A.bu(B.lu,b6,m,a8,a8)
e=A.bu(B.lv,b6,m,a8,a8)
d=$.An()
c=e3>1
b=A.bu(d,e5,e4,a8,c?2:1)
d=A.bu(B.ll,b6,m,a8,a8)
a=A.bu(B.lm,b6,m,a8,a8)
a0=A.bu(B.ln,e5,e4,a8,a8)
a1=A.bu(B.lr,e5,e4,a8,a8)
a2=A.bu(B.lx,e5,e4,a8,a8)
a3=A.bu(B.ls,e5,e4,a8,a8)
a4=c?new A.hQ(b8,l,k):a8
b5.a=null
a5=A.yn(B.m9)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.I(a7,A.c([new A.hl(b7,a9,b0,b8,b1,b1,B.dY,!0,k,f,d6,b6,m),new A.hl(b7,a9,b0,b8,b2,b2,B.nc,!1,f,e,c2,b6,m),new A.jp(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.c([new A.hs(b7,a9,b0,b8,b3,b3,B.dZ,k,d,d6,b6,m),new A.hs(b7,a9,b0,b8,b4,b4,B.nd,d,a,c7,b6,m),new A.jE(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jW(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kz(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.l5(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jB(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kS(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kR(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kO(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.v6(b5),i))
j.push(new A.kP(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.v7(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.i0(b7,a9,u.B,b8,k,b9))
return new A.jM(j)},
v6:function v6(a){this.a=a},
v7:function v7(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lQ:function lQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kS:function kS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lT:function lT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kR:function kR(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lS:function lS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l5:function l5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m0:function m0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lg:function lg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ng:function ng(){},
kN(a,b){return new A.i9(a,b)},
jT:function jT(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eA:function eA(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hz:function hz(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
om:function om(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
on:function on(){},
oo:function oo(){},
fV:function fV(a,b){this.a=a
this.b=b},
eh:function eh(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.ft(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jn:function jn(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b6:function b6(a,b){this.a=a
this.b=b},
t0:function t0(){this.a=null},
CZ(a){var s=new A.le(a,B.h,new A.t0(),A.D9(a))
s.ig(a)
return s},
D9(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.P(t.a.b(q)?q:new A.aV(q,A.C(q).i("aV<1,f>")))
while(r.m())s.l(0,r.gn())
return s},
bQ(a,b){var s,r
if(a.b!==B.h)A.i(A.k(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.e(s.drawingBufferWidth),A.e(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
D4(a,b){var s
if(a.b!==B.h)A.i(A.k(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.e(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
D3(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.k("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
D2(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
D1(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yz(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.e(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.e(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
D_(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
ba(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=a.f
r=s.le(b)
if(r.a===0)return
if(r.q(0,B.bD)){q=v.G
p=a.a
if(b.a)p.enable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bE))a.a.depthFunc(A.D2(a,b.b))
if(r.q(0,B.bF))a.a.depthMask(b.c)
if(r.q(0,B.bJ)){q=v.G
p=a.a
if(b.w)p.enable(A.e(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.e(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bK))a.a.cullFace(A.D1(a,b.x))
if(r.q(0,B.dK)){q=v.G.WebGL2RenderingContext
q=A.e(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bG)){q=v.G
p=a.a
if(b.d)p.enable(A.e(q.WebGL2RenderingContext.BLEND))
else p.disable(A.e(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bH))a.a.blendFunc(A.yz(a,b.e),A.yz(a,b.f))
if(r.q(0,B.bI))a.a.blendEquation(A.D_(a,b.r))
if(r.q(0,B.dI))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dJ)){q=v.G.WebGL2RenderingContext
a.a.disable(A.e(q.SCISSOR_TEST))}s.a=b},
D0(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.e(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.e(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.e(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d6(a,b,c,d,e,f){var s
if(a.b!==B.h)A.i(A.k(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.D0(a,b))},
c5(a,b){var s
if(a.b!==B.h)A.i(A.k(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.i(A.k(u.k))
s=a.e
if(s==null)throw A.b(A.k("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.F(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bo(c.b))
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
case 6:r.uniform1i(q,A.e(c.b))
break}},
bm(a,b){if(a.b!==B.h)A.i(A.k(u.k))
a.a.bindVertexArray(A.a(b.a))},
aC(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.i(A.k(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iT){p=s.d>1?A.e(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iS){o=s.b
if(o!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.k("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.k("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
D5(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.e(p.ELEMENT_ARRAY_BUFFER),c,A.e(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
D6(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yC(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=a.a
r=A.F(s.createBuffer())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cB?A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.e(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.D6(a,b.b))
return new A.dF(r)},
yA(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yB(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
D7(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
wl(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.h)A.i(A.k(u.k))
s=a.a
r=A.F(s.createTexture())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.e(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.D7(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aL(s,"texStorage3D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aL(s,"texStorage2D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yA(a,b.e))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yA(a,b.f))
p=b.r
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yB(a,p))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yB(a,p))
h=a.r.q(0,"EXT_texture_filter_anisotropic")
g=h?a.eZ(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.i(A.ah(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dF(new A.iT(r,j,i,q,m))},
wm(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.i(A.k(u.k))
s=t.h.a(b.a)
r=s.d
if(c>=r)throw A.b(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.e(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aL(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aL(l,"texSubImage2D",[m,0,0,0,q,p,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
yD(a,b){var s,r,q
if(a.b!==B.h)A.i(A.k(u.k))
s=t.h.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.e(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
lf(a,b){a.a.deleteTexture(t.h.a(b.a).a)},
yF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.i(A.k(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.F(r.createFramebuffer())
if(q==null)throw A.b(A.k("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aX
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cD||o===B.hB
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.e(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.F(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aL(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.F(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aL(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.F(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aL(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aL(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.F(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aL(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aL(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.F(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aL(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.F(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aL(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
A.aL(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.e(r.checkFramebufferStatus(A.e(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.e(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wn(a0,q,l,k,f,e,j,i)
throw A.b(A.k("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dF(new A.iS(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wn(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d7(a){var s
if(a.b!==B.h)A.i(A.k(u.k))
s=A.F(a.a.createVertexArray())
if(s==null)throw A.b(A.k("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dF(s)},
yE(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.F(p.createShader(b))
if(o==null)throw A.b(A.kN(b===A.A6(A.zp(A.Al(),r),q,t.S)?B.dD:B.dE,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a9(A.hb(p.getShaderParameter(o,A.e(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.ap(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kN(b===A.A6(A.zp(A.Al(),r),q,t.S)?B.dD:B.dE,s))}return o},
D8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.i(A.k(u.k))
q=v.G
s=A.yE(a,A.e(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yE(a,A.e(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.F(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lW)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a9(A.hb(o.getProgramParameter(n,A.e(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.ap(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kN(B.dF,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.e(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kN(B.dG,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.F(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kN(B.dG,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dF(n)},
dF:function dF(a){this.a=a},
iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iS:function iS(a,b,c,d,e,f,g,h,i,j){var _=this
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
m2:function m2(a){this.a=a
this.b=!1},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rZ:function rZ(a){this.a=a},
t_:function t_(a){this.a=a},
tR:function tR(){},
m1:function m1(){},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mX(a,a0){var s=0,r=A.bF(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mX=A.bH(function(a1,a2){if(a1===1)return A.bC(a2,r)
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
b=new A.jk(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aQ,A.m(o,t.jS))
b.hZ(p,a0)
p=A.o(a).i("G<1,2>")
s=3
return A.au(A.o6(A.kc(new A.G(a,p),p.i("bW<ar>(n.E)").a(new A.mY(b)),p.i("n.E"),t.ls),t.c),$async$mX)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.j2():n
c.buffer=p
q=b
s=1
break
case 1:return A.bD(q,r)}})
return A.bE($async$mX,r)},
jk:function jk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mZ:function mZ(){},
mY:function mY(a){this.a=a},
n0:function n0(a,b){this.a=a
this.b=b},
n_:function n_(a,b){this.a=a
this.b=b},
n1:function n1(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
B2(a,b,c,d,e,f,g){var s=new A.mO(c,f,b,g,new A.j(d.a,d.b,d.c),e,a)
s.i0(a,b,c,d,0,e,f,g)
return s},
AZ(a,b){var s=new A.mw(b)
s.hY(a,b)
return s},
B1(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.G(a,A.o(a).i("G<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aq(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mK(A.aX(n,r,t.a))
n.i_(a)
return n},
Fp(a,b){var s,r,q,p=b>>>0
for(s=new A.dR(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.A8(p,q==null?r.a(q):q)}return p&2147483647},
jl:function jl(a,b){this.a=a
this.b=b},
mO:function mO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mP:function mP(){},
mw:function mw(a){this.a=a},
mx:function mx(){},
hj:function hj(){},
my:function my(){},
mz:function mz(){},
mK:function mK(a){this.a=a},
mM:function mM(){},
mN:function mN(){},
mL:function mL(){},
w1:function w1(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mW:function mW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mQ:function mQ(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function mR(a){this.a=a},
mS:function mS(){},
io:function io(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
nd:function nd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
nS:function nS(a){this.a=a},
nT:function nT(a,b,c){this.f=a
this.r=b
this.w=c},
nZ:function nZ(a){this.a=a},
k0:function k0(a,b,c,d,e,f,g,h,i,j){var _=this
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
p1:function p1(a){this.a=a},
BS(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.G(a,A.o(a).i("G<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aq(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.p0(n)},
p0:function p0(a){this.a=a},
p4:function p4(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pq:function pq(a,b,c){this.a=a
this.c=b
this.e=c},
pn:function pn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(){},
nC:function nC(){this.b=this.a=0},
pw:function pw(a){this.a=a
this.b=0
this.e=!1},
ic(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bU(a)
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
d0:function d0(a){this.a=a
this.b=0},
ij(a,b,c){return new A.j(a,b,c)},
yx(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.j(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
Da(a,b,c,d){return new A.lh(d,b,c,a)},
Dc(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Az()
s=a.d
r=A.t2(s,0)
q=A.t2(s,1)
p=A.t2(s,2)
o=A.t2(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bB(m,0))n.l(0,"GamepadA")
if(A.bB(m,1))n.l(0,"GamepadB")
if(A.bB(m,2))n.l(0,"GamepadX")
if(A.bB(m,3))n.l(0,"GamepadY")
if(A.bB(m,4))n.l(0,"GamepadLB")
if(A.bB(m,5))n.l(0,"GamepadRB")
if(A.bB(m,6))n.l(0,"GamepadLT")
if(A.bB(m,7))n.l(0,"GamepadRT")
if(A.bB(m,8))n.l(0,"GamepadView")
if(A.bB(m,9))n.l(0,"GamepadMenu")
if(A.bB(m,10))n.l(0,"GamepadLStick")
if(A.bB(m,11))n.l(0,"GamepadRStick")
if(A.bB(m,12))n.l(0,h)
if(A.bB(m,13))n.l(0,g)
if(A.bB(m,14))n.l(0,f)
if(A.bB(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.j(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gav():i
return new A.lh(m,p,o,A.eP(n,s))},
t2(a,b){return A.Db(b<a.length?a[b]:0)},
bB(a,b){return b<a.length&&a[b]>=0.5},
Db(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc9(a)?-s:s},
kT:function kT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n6:function n6(a){this.a=a},
Bn(a,b,c){var s=new A.jF(a,c,null,b)
s.i4(a,null,null,b,c)
return s},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
BA(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bK(new A.H(B.jq,t.e2.a(new A.nP(a)),t.vL),t.yW)
return s==null?null:new A.fu(s)},
C8(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.wc(s,a,B.iW)
break
case 1:A.wc(s,a,B.iX)
break
case 2:A.wc(s,a,B.ju)
break}return s},
wc(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Bz(a){if(a.a!==21)return null
if(a.e)return B.f_
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f0
return B.eZ},
cc:function cc(a,b){this.a=a
this.b=b},
nM:function nM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fu:function fu(a){this.a=a},
nP:function nP(a){this.a=a},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
Ce(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.r(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.ks(s,new A.j(o,n,m),q,p,l,j)
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
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Fr(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.fe)
p.k(0,q,r.b)}return p},
ma(a){var s,r,q,p,o,n=a.ga1().bL(0)
B.a.Y(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.k(0,o,A.zh(a.h(0,o)))}return A.aX(r,t.N,s)},
zh(a){var s
if(t.f.b(a))return A.ma(A.Fr(a))
if(t.j.b(a)){s=t.z
return A.ai(J.xy(a,A.Gf(),s),s)}if(a==null||A.bq(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fT)
return a}throw A.b(A.a1("presentation snapshot contains unsupported value "+J.ff(a).p(0),null,null))},
qc:function qc(a){this.a=a},
yk(a,b,c){var s=A.wC(b),r=A.wC(a)
if(c!==2)A.i(A.ah(c,"version","unsupported save version"))
return new A.fL(c,s,r)},
wC(a){var s,r,q,p,o=A.o(a).i("ab<1>"),n=A.K(new A.ab(a,o),o.i("n.E"))
B.a.Y(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.k(0,p,A.zg(a.h(0,p)))}return A.aX(s,t.N,o)},
zg(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fJ)
s.k(0,p,q.b)}return A.wC(s)}if(t.j.b(a)){r=t.z
return A.ai(J.xy(a,A.Gj(),r),r)}if(a==null||A.bq(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fW)
return a}throw A.b(A.a1("save contains unsupported value "+J.ff(a).p(0),null,null))},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(){},
eO:function eO(a,b){this.a=a
this.b=b},
xN(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.o9(a,b,c,d,e,f,g,s,r,h)},
xO(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aJ(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.fI)
r=d.h(0,"runSeed")
q=A.aJ(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aJ(p)||p<1||typeof o!="number")throw A.b(B.h7)
if(!isFinite(5760))throw A.b(A.ah(5760,"daySeconds","must be finite and > 0"))
n=new A.jR(p,7,5760)
n.h7(o)
s=t.N
m=t.z
l=A.C1(a4,A.aN(a0,s,m))
k=A.Bk(l,A.aN(a,s,m),n)
j=A.xQ(c)
A.BR(A.aN(a1,s,m)).ke(j)
m=A.aN(a2,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bq(f))A.i(B.fm)
e=A.C9(d.h(0,"narrative"))
if(e==null)e=A.pN(null,null,null)
return A.xN(c,q,j,n,l,k,new A.jD(i,h,g,f),e)},
Ej(a){var s
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
ez:function ez(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
oa:function oa(a,b){this.a=a
this.b=b},
o9:function o9(a,b,c,d,e,f,g,h,i,j){var _=this
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
ob:function ob(a){this.a=a},
oc:function oc(){},
od:function od(){},
oe:function oe(a){this.a=a},
of:function of(){},
jr:function jr(a,b){this.a=a
this.b=b
this.d=null},
nh:function nh(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
li:function li(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oE:function oE(){this.b=0},
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
jJ:function jJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nR:function nR(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
oG:function oG(){},
oF:function oF(a,b,c){this.a=a
this.b=b
this.c=c},
Gs(a){var s,r,q,p,o,n,m,l
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
return new A.ch(B.ac,p,new Uint16Array(A.a0(a.b)),new A.jd(new A.I(s.a,s.b,s.c),new A.I(s.d,s.e,s.f)))},
Gr(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Fo(a,new A.vW(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jK(o,p.c,p.e))}return n},
Fo(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(l==null){l=B.b.q(d,":")?B.b.H(d,0,B.b.bF(d,":")):null
l=new A.d8(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.I(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("aj<2>")
q=A.K(new A.aj(s,q),q.i("n.E"))
B.a.P(q,new A.v_())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].n2(a))
return r},
E1(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jJ(r,q,p,o,n,m)},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(a){this.a=a},
v_:function v_(){},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ew:function ew(a,b){this.a=a
this.b=b},
jL:function jL(){},
FO(a){var s,r,q,p=new A.oF(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.Em(p,a,B.cX[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.Z(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.Z(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ae(r,new A.Z(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ae(r,q,new A.Z(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.Z(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.Z(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ae(q,new A.Z(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ae(q,r,new A.Z(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ae(new A.Z(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.Z(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.Z(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ae(new A.Z(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.Z(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.Z(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.Z(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.Z(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ae(r,new A.Z(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ae(r,q,new A.Z(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.Z(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.Z(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ae(q,new A.Z(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ae(q,r,new A.Z(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.Fe(p,15.75,15.75,12.044999999999998,16.32)
A.E4(p,15.75,15.75,16.32)
A.Ei(p,15.75,15.75,12.044999999999998)
A.Eq(p,a,15.75)
A.Fk(p,15.75,15.75)
A.E0(p,15.75)
return p.km()},
Em(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.A!==b7,p=B.o!==b7,o=B.m===b7,n=B.C===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aC(k)
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
B.a.l(b4,new A.ed(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aJ(i),b=J.P(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aH(i)!==b7)continue
B:{if(!p||o){a0=g+a.ag(i)
break B}if(!q||n){a0=e+a.ag(i)
break B}a0=null}B.a.l(b4,new A.ed(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.o||b7===B.m?b8:b9
r=t.i
a1=A.aO([0,s],r)
a2=A.aO([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.u)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.K(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.N(b4,new A.uH(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Ep(b5,b4,b7,b8,b9,c1)
A.En(b5,b4,b7,b8,b9,c1)
A.Eo(b5,b4,b7,b8,b9,c0,c1)},
Eo(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aO([0,a4===B.o||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.Y(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.uG(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
En(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
break}}if(a5!==B.o)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.A(2,a+0.18,n,r,a,a1,p)}}},
Ep(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Fi(a2,g,a4,a5,a6,a7,q)}},
Fi(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
Fe(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.Ff(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
Ff(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.Z(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.Z(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ae(n,new A.Z(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ae(n,m,new A.Z(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.Z(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.Z(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ae(m,new A.Z(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ae(m,n,new A.Z(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
E4(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
Ei(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Eq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ag("hall")
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
Fk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
E0(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uH:function uH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uG:function uG(a,b,c){this.a=a
this.b=b
this.c=c},
Gh(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xe(b,d,c)
if(k!=null){s=k.b
return new A.dU(B.f5,k.a,s)}r=A.Aj(b,d,c)
if(r!=null){if(r.ax)q=!r.ay
else q=!1
s=q?"close door":"open door"
return new A.dU(B.f6,r.a,s)}if(A.Ak(b,d,c)!=null)return B.fa
p=A.Gg(a,b,c,d)
if(p!=null)return new A.dU(B.cj,p.a,"inspect the "+p.b)
o=A.Ai(b,c,d,e)
if(o!=null){n=e.cF(o.c)
q=o.y
m=q==null
l=m?o.a:q
return new A.dU(B.f8,l,m?"inspect the "+n.b:"inspect "+q)}return B.fb},
Ai(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mn(a5,s,4.5)
for(q=a6.mj(a4),p=J.P(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cF(i.c)
g=i.f.a
f=i.h8(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.j(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gav()
a0=a3.b
a1=Math.acos(B.c.D(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mo(a5,a4,a3.a,new A.j(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Gg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hk(c)
if(s.length===0)return f
r=d.aC(e)
q=A.mn(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.j(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gav()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mo(d,c,b.a,new A.j(n,m,o)))return k}return f},
di:function di(a,b){this.a=a
this.b=b},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
FP(a,b){var s,r=new A.d0(new Float32Array(5376)),q=new A.d0(new Float32Array(5376)),p=new A.d0(new Float32Array(5376)),o=new A.d0(new Float32Array(5376)),n=b.d,m=a.aC(b),l=A.jZ(b.y),k=A.jZ(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cO(new A.j(j,i,h),new A.j(j,i,f),new A.j(d,i,f),new A.j(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cO(new A.j(j,i,h),new A.j(d,i,h),new A.j(d,i,f),new A.j(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.DW(p,a,b,m,B.cX[s])
for(j=a.aJ(b.a),i=J.P(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
g=h.at
if(g==null)continue
A.z4(o,b,m,h,!0)}j=B.t.aR(r.a,0,r.b)
i=B.t.aR(q.a,0,q.b)
h=B.t.aR(p.a,0,p.b)
B.t.aR(o.a,0,o.b)
return new A.qw(j,i,h)},
FM(a,b,c){var s,r,q=c.at
if(q==null)return new Float32Array(0)
s=new A.d0(new Float32Array(5376))
r=a.aC(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.z5(s,b,r,c,q)
return B.t.aR(s.a,0,s.b)},
FN(a,b){var s,r,q,p,o=new A.d0(new Float32Array(5376)),n=a.aC(b)
for(s=a.aJ(b.a),r=J.P(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
p=q.at
if(p==null)continue
A.z4(o,b,n,q,!1)}return B.t.aR(o.a,0,o.b)},
DW(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a5===B.o||a5===B.m?a4.a:a4.c,a0=A.c([],t.l5)
for(s=a3.a,r=a2.aJ(s),q=J.P(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.aH(s)
if(o===a5)a0.push(new A.ec(p.ag(s),p.ag(s)+p.w,0,p.x))}for(s=a3.e,r=s.length,n=0;n<s.length;s.length===r||(0,A.u)(s),++n){m=s[n]
if(m.b===a5){q=m.c
p=m.d
a0.push(new A.ec(q,q+m.e,p,p+m.f))}}s=t.i
r=A.aO([0,a],s)
for(q=a0.length,p=t.n,n=0;n<a0.length;a0.length===q||(0,A.u)(a0),++n){l=a0[n]
r.I(0,A.c([l.a,l.b],p))}k=A.K(r,r.$ti.c)
B.a.Y(k)
s=A.aO([0,a4.b],s)
for(r=a0.length,n=0;n<a0.length;a0.length===r||(0,A.u)(a0),++n){l=a0[n]
s.I(0,A.c([l.c,l.d],p))}j=A.K(s,s.$ti.c)
B.a.Y(j)
for(i=0;h=i+1,h<k.length;i=h)for(g=0;f=g+1,s=j.length,f<s;g=f){r=k.length
if(!(i<r))return A.d(k,i)
e=k[i]
if(!(h<r))return A.d(k,h)
d=k[h]
if(!(g<s))return A.d(j,g)
c=j[g]
b=j[f]
if(B.a.N(a0,new A.tT(e,d,c,b)))continue
A.FE(a1,a3,a4,a5,e,d,c,b)}A.DX(a1,a3,a4,a5,a,a0)},
DX(a,b,c,d,e,f){return},
h8(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.an(a,new A.j(r+e,q+g,p),new A.j(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.an(a,new A.j(r+e,q+g,s-i),new A.j(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.an(a,new A.j(s-i,q+g,p+e),new A.j(s,q+h,p+f),j)
return
case 3:A.an(a,new A.j(r,q+g,p+e),new A.j(r+i,q+h,p+f),j)
return}},
an(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.j(o,n,m),k=c.a,j=new A.j(k,n,m),i=c.b,h=new A.j(k,i,m),g=new A.j(o,i,m)
m=c.c
s=new A.j(o,n,m)
r=new A.j(k,n,m)
q=new A.j(k,i,m)
p=new A.j(o,i,m)
a.aD(j,l,g,h,d)
a.aD(s,r,q,p,d)
a.aD(l,s,p,g,d)
a.aD(r,j,h,q,d)
a.aD(l,j,r,s,d)
a.aD(g,p,q,h,d)},
FE(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.jZ(n).e
a.cO(s.aj(0,o),r.aj(0,o),q.aj(0,o),p.aj(0,o),A.jZ(n).c,(f-e)/m,(a1-a0)/m)
l=A.FF(b,d)
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
default:j=k}A.an(a,o,j,A.Fl(A.jZ(n).c,0.68))},
Fl(a,b){var s,r=new A.uY(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hD()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hD()
r=r.$1(a&255)
if(typeof r!=="number")return A.ve(r)
return(q<<16|s<<8|r)>>>0},
FF(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
z4(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aH(d),b=a3.ag(d),a=b+a3.w
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
A.an(a0,new A.j(r+l,s,d),new A.j(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(l,s,d),new A.j(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.an(a0,new A.j(r+n,s+m,d),new A.j(r+h,j,i),q)
A.an(a0,new A.j(k,s,d),new A.j(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.an(a0,new A.j(r+l,s,k),new A.j(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(l,s,k),new A.j(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.an(a0,new A.j(r+n,s+m,k),new A.j(r+h,i,d),q)
A.an(a0,new A.j(j,s,k),new A.j(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.an(a0,new A.j(n,s,d+k),new A.j(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(n,s,k),new A.j(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.an(a0,new A.j(n,s+e,d+m),new A.j(r,j,d+l),q)
A.an(a0,new A.j(n,s,i),new A.j(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.an(a0,new A.j(r,s,d+l),new A.j(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(r,s,l),new A.j(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.an(a0,new A.j(r,s+e,d+n),new A.j(k,j,d+m),q)
A.an(a0,new A.j(r,s,i),new A.j(k,s+0.05,l),q)
break}if(a4)A.z5(a0,a1,a2,a3,q)
A.DV(a0,a1,a2,a3)},
DV(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.ag(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aH(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.o
q=!r||s===B.m?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.h8(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.m?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.h8(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.m?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.h8(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.m?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.h8(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.m,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.h8(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.h8(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.h8(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
z5(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aH(o),m=d.ag(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.an(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.an(a,new A.j(p,s,o-d.w),new A.j(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.an(a,new A.j(p-d.w,s,o),new A.j(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.an(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.an(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.an(a,new A.j(p,s,o-0.055),new A.j(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.an(a,new A.j(p-0.055,s,o),new A.j(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.an(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break}},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
tT:function tT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uY:function uY(a){this.a=a},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xQ(a){var s=A.c([],t.eY),r=A.c([],t.J),q=t.N
q=new A.oC(s,r,A.c([],t.DZ),A.m(q,t.W),A.m(q,t.T),new A.oE())
q.iu()
q.it()
q.im()
q.io()
q.j1()
s=s.length
if(s!==8)A.i(A.k("expected eight rooms, got "+s))
if(q.ghd()<1||11<q.ghd())A.i(A.k("showcase apertures must expose a stable inside/outside split"))
if(r.length!==11)A.i(A.k("expected eleven showcase portals"))
q.jZ()
q.jX()
return q},
oC:function oC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oU:function oU(a){this.a=a},
oV:function oV(){},
oW:function oW(){},
oT:function oT(){},
oX:function oX(a){this.a=a},
oY:function oY(){},
mn(a,b,c){var s=a.aC(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mo(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.EO(a,s,c,d)},
EO(a,b,c,d){var s,r,q,p,o=a.aC(b),n=d.ap(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tY(a,b,o,B.o,r,q,p,c,n,m))return!0
if(A.tY(a,b,o,B.m,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tY(a,b,o,B.C,s,r,q,c,n,m))return!0
if(A.tY(a,b,o,B.A,s+o.a,r,q,c,n,m))return!0
return!1},
tY(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.aj(0,a6.ak(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.o||a1===B.m
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aJ(m),k=J.P(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aH(m)===a1){g=q.ag(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05){if(q.ax)q=!q.ay
else q=!1
if(q)return!1
else return!0}}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
xe(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mn(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.u)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.j(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gav()
f=a.b
if(Math.acos(B.c.D(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mo(a0,a1,a.a,new A.j(h,g,i)))continue
m=d
l=j}}return l},
Aj(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mn(b,j,4.5):4.5
for(s=b.aJ(c),r=J.P(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.mm(c,o)
m=a.a
l=new A.j(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zu(l,k,a,i,0.5236)||k>=q)continue
if(!A.mo(b,c,a.a,n))continue
q=k
p=o}return p},
Ak(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mn(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.FG(b,h,m)
k=a.a
j=new A.j(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zu(j,i,a,s,0.5236)||i>=p)continue
if(!A.mo(b,c,a.a,l))continue
p=i
o=m}return o},
zu(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gav().c1(c.b),-1,1))<=e},
FG(a,b,c){var s=a.aC(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.j(q.a+r,p,q.c)
break
case 2:q=new A.j(q.a+r,p,q.c+s.c)
break
case 1:q=new A.j(q.a+s.a,p,q.c+r)
break
case 3:q=new A.j(q.a,p,q.c+r)
break
default:q=null}return q},
nQ:function nQ(){this.a=null
this.b=0},
rk:function rk(){},
rl:function rl(){},
BW(a){var s=A.j7(a,"inventory asset"),r=A.dJ(s,"id"),q=A.dJ(s,"kind")
A.dJ(s,"source")
A.dJ(s,"proxy")
A.dJ(s,"pivot")
s=A.j7(s.h(0,"bounds"),"inventory bounds")
return new A.cU(r,q,new A.p5(A.mm(s.h(0,"min"),"bounds.min"),A.mm(s.h(0,"max"),"bounds.max")))},
BX(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.j7(a,"inventory placement"),i=A.j7(j.h(0,"visibility"),"placement visibility"),h=A.j7(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dJ(j,"id"),e=A.dJ(j,"roomId"),d=A.dJ(j,"assetId")
A.dJ(j,"role")
s=typeof j.h(0,"socket")=="string"?A.r(j.h(0,"socket")):null
j=A.j7(j.h(0,"transform"),"inventory transform")
r=A.mm(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.i(B.fN)
q=A.mm(j.h(0,"position"),"transform.position")
p=A.mm(j.h(0,"rotation"),"transform.rotation")
o=A.dJ(i,"layer")
if(typeof i.h(0,k)=="string")A.r(i.h(0,k))
n=J.a9(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.r(h.h(0,"focusId")):null
l=t.P.b(g)?A.F2(g,"radius"):0
return new A.cw(f,e,d,s,new A.p7(q,p,r),o,n,m,l)},
j7(a,b){return t.P.b(a)?a:A.dG(b+" is not an object")},
dJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dG(b+" is not a string")},
F2(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dG(b+" is not finite")},
mm(a,b){var s
if(t.j.b(a)){s=J.aF(a)
s=s.gt(a)!==3||s.N(a,new A.v4())}else s=!0
if(s)return A.dG(b+" is not a finite vec3")
s=J.aF(a)
return new A.j(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
dG(a){return A.i(A.a1(a,null,null))},
oH:function oH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oK:function oK(a){this.a=a},
oI:function oI(a){this.a=a},
oJ:function oJ(a){this.a=a},
cU:function cU(a,b,c){this.a=a
this.b=b
this.f=c},
cw:function cw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
p7:function p7(a,b,c){this.a=a
this.b=b
this.c=c},
p5:function p5(a,b){this.a=a
this.b=b},
v4:function v4(){},
p6:function p6(a){this.a=a},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
cX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bv(i,a,b,e,f,k,l,p,g,!1,!1,d,!1,c,m,j)},
jO:function jO(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d,e,f,g,h){var _=this
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
fB:function fB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
BQ(a){return A.BP(a)},
BP(a){var s,r,q,p,o,n,m=A.zB(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.zB(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fH)
k.k(0,r.a,q)}s=A.x1(m,"id")
r=A.x1(m,"roomId")
p=A.x1(m,"placementId")
o=A.FD(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h2("gain is not a number")
return new A.cT(s,r,p,o,n,A.aX(k,l,l))},
zB(a,b){return t.P.b(a)?a:A.h2(b+" is not an object")},
x1(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h2(b+" is not a string")},
FD(a,b){var s
if(t.j.b(a)){s=J.aF(a)
s=s.gt(a)!==3||s.N(a,new A.v3())}else s=!0
if(s)throw A.b(A.a1(b+" must be a numeric vec3",null,null))
s=J.aF(a)
return new A.j(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
h2(a){return A.i(A.a1(a,null,null))},
oO:function oO(a,b,c){this.a=a
this.b=b
this.c=c},
oP:function oP(a){this.a=a},
oQ:function oQ(a){this.a=a},
oR:function oR(){},
cT:function cT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oD:function oD(){this.b=this.a=null},
eC:function eC(a){this.a=a},
oN:function oN(){this.b=this.a=null},
cS:function cS(a,b){this.a=a
this.b=b},
v3:function v3(){},
xR(a,b,c,d,e,f){var s=t.N
return new A.oS(e,f,c,a,A.aX(A.aN(d,s,s),s,s),A.ai(b,s))},
xS(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.k(0,p.a,new A.i_(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l){j=o[l]
i.k(0,j.a,new A.hN(j.d,j.r))}return A.xR(a.r.b,B.n,i,B.d5,h,s)},
BR(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jM
r=a3.h(0,"mantleHistory")
if(r==null)r=B.j0
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aJ(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fF)
p=t.N
o=A.m(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cm)
l=A.aN(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bq(j)||!A.bq(i))A.i(B.cm)
o.k(0,k,new A.i_(j,i))}h=A.m(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bq(l.b))throw A.b(B.fC)
h.k(0,k,A.Q(l.b))}g=A.m(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.ck)
l=A.aN(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bq(f)||!A.bq(e))A.i(B.ck)
g.k(0,k,new A.hN(f,e))}d=A.m(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.hh)
d.k(0,n,A.r(p.b))}c=A.c([],t.s)
for(q=J.P(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fc)
B.a.l(c,b)}return A.xR(a2,c,g,d,o,h)},
wX(a,b){return a.a.a===b.a&&a.a7(0,b.gaq(b))},
oS:function oS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i_:function i_(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
jZ(a){var s=B.bj.h(0,a)
if(s==null)throw A.b(A.k("Unknown house surface material: "+a))
return s},
bh:function bh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bx(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hM(e,A.C(e).c)
q=new A.ee()
q.bP((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ht(a,q,2,r,1+s,A.aO(["time"],t.N))
break
case 3:A.ht(a,q,3,r,1+s,A.aO(["place"],t.N))
break
case 4:A.ht(a,q,4,r,2+s,p)
A.Bt(a,q,4)
break
case 5:A.ht(a,q,5,r,s,p)
A.Br(a,q,5)
break
case 6:A.ht(a,q,6,r,s,p)
A.Bs(a,q)
A.Bw(a,q,6)
break
case 7:A.Bu(a,q,7)
break
default:if(s>0)A.ht(a,q,b,r,s,p)}},
Bq(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Bv(a,b,c))return!1
return!0},
ht(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(A.Bq(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cY(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.xK(a,b,o[p],f)}},
xK(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aN(B.a.gX(o).a,n,n)
if(d==null)s=A.c(B.B.slice(0),t.s)
else{n=t.vY
s=A.K(new A.H(B.B,t.Ag.a(new A.nL(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aP(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eg(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aP(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dz(c.a,m,B.a.gX(o).b)},
Bt(a,b,c){var s=A.xL(a,b,c)
if(!a.bY(s))return
a.eq(c,t.G.a(s),0,B.b2,null)},
xL(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.B[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aP(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
Br(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cY(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aN(B.a.gX(i).a,s,s)
r=p.c
n=A.aN(B.a.gX(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.B[m]
k=o.h(0,l)
j=s.eg(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aP(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dz(q.a,o,B.a.gX(i).b)
a.dz(p.a,n,B.a.gX(r).b)},
Bs(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aP(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a5(0,q[r].a)},
Bw(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aP(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.xK(a,b,q[s],null)},
Bu(a,b,c){var s=c+1,r=A.xL(a,b,s)
if(!a.bY(r))return
a.eq(s,t.G.a(r),0,B.b2,null)},
Bv(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gX(b.c).c===B.ay}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gX(b.c).c===B.ay}if(c===21)return b.e
return!1},
nL:function nL(a){this.a=a},
CY(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p=A.aq(q==null?B.n:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rX(n)},
pr(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.ka(A.aX(p,q,q),b,c)},
y3(a){var s=t.N
return A.pr(t.P.a(a.h(0,"fields")).bH(0,new A.ps(),s,s),A.a6(a.h(0,"shakiness")),A.BC(B.iU,A.r(a.h(0,"hand")),t.qX))},
BB(a){var s,r,q,p,o=a.h(0,"margin"),n=A.e(a.h(0,"ordinal")),m=A.e(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.P(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.y3(r.a(s.gn())))
s=A.ap(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.ze(a.h(0,"lastReadDay"))
return new A.bV(n,m,l,s,q,p,o==null?null:A.y3(r.a(o)))},
dW:function dW(a,b){this.a=a
this.b=b},
rX:function rX(a){this.a=a},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(){},
pt:function pt(a){this.a=a},
bV:function bV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y0(a){return new A.pa(a,A.m(t.S,t.g),A.a_(t.N),A.c([],t.t))},
C1(a,b){var s,r,q,p,o=A.y0(a)
o.e=A.e(b.h(0,"nextOrdinal"))
o.f=A.e(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.AR(s.a(b.h(0,"tags")),t.N))
for(s=J.P(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.BB(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pa:function pa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
ph:function ph(a,b){this.a=a
this.b=b},
n2:function n2(){},
hk:function hk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g},
n3:function n3(){},
pm:function pm(){},
pl:function pl(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
q8:function q8(){},
q7:function q7(a,b,c){this.b=a
this.c=b
this.d=c},
q9:function q9(){},
Cd(a,b,c){return B.kL},
kq:function kq(a,b){this.a=a
this.b=b},
qa:function qa(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qb:function qb(){},
k9:function k9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qh:function qh(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yi(a){if(!isFinite(0))A.i(A.ah(0,"interpolation",null))
return new A.qu(a)},
kD:function kD(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
qu:function qu(a){this.a=a},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
yh(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hM(c,A.C(c).c)
r=A.K(r,A.o(r).c)
B.a.Y(r)
s=t.N
r=A.ai(r,s)
r=new A.qt(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aX(l,s,t.X))
r.i9(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Cx(a,b,c,d,e){var s=A.md("RENDERER_SHA"),r=A.md("GAME_SHA"),q=A.md("DART_SDK_VERSION")
return A.yh(a,"90688e1f7a06-90d3581f33d7-dirty",b,!1,d,r,A.md("LOCKFILE_SHA256"),e,A.md("PROJECT_VERSION"),s,q,null)},
md(a){var s=B.jD.h(0,a)
return s.length===0?null:s},
qt:function qt(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qv:function qv(a){var _=this
_.a=a
_.d=_.c=_.b=0},
rf:function rf(a){this.a=a},
a2(a,b,c,d,e,f,g,h,i,j){return new A.e6(e,g,a,f,i,h,j,c,c,b)},
cF:function cF(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c,d,e,f,g,h,i,j){var _=this
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
rg:function rg(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rj:function rj(a){this.a=a},
ri:function ri(a){this.a=a},
rh:function rh(a){this.a=a},
xH(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.i(A.a1("saved day-loop resources must not be negative",null,null))
return new A.nD(c,g,b,a,e,d===!0,s)},
Bk(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.ft)
s=A.c([],t.El)
for(r=J.P(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fG)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aJ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fo)
f=A.bK(new A.H(B.cQ,q.a(new A.nE(h)),p),o)
e=A.bK(new A.H(B.cW,n.a(new A.nF(g)),m),l)
if(f==null||e==null)throw A.b(B.hb)
B.a.l(s,new A.fN(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aJ(d)||!A.aJ(c)||!A.aJ(b)||!A.bq(a))throw A.b(B.fP)
return A.xH(c,d,a1,a,b,s,a3)},
bN:function bN(a,b){this.a=a
this.b=b},
by:function by(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
nD:function nD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nE:function nE(a){this.a=a},
nF:function nF(a){this.a=a},
k1:function k1(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
t1:function t1(a,b){this.b=a
this.c=b},
eW:function eW(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
oZ:function oZ(a){this.c=a},
p2:function p2(a,b){this.a=a
this.b=b},
p3:function p3(){},
wJ(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.h8)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qx:function qx(){},
cZ:function cZ(){},
qy:function qy(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
Ev(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uI(s).$0())
return r},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rY:function rY(a){this.b=a},
uI:function uI(a){this.a=a},
pN(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.I(0,a)
s=A.m(r,r)
if(b!=null)s.I(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.I(0,c)
return new A.pM(q,s,r)},
C9(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aJ(s)||s!==1)return l
r=A.ya(a.h(0,"choices"))
q=A.ya(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.BH(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pN(r,q,p)},
ya(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.r(q.b))}return r},
BH(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aJ(r)||r<1||!A.aJ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cN(s,r,q,p)},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(){},
pP:function pP(){},
pQ:function pQ(){},
cN:function cN(a,b,c,d){var _=this
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
q5:function q5(a){this.a=a},
q6:function q6(a){this.a=a},
fP(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rq:function rq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rr:function rr(){},
rs:function rs(){},
eU:function eU(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b){this.a=a
this.b=b},
ld:function ld(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
CK(a){var s,r,q,p,o,n=B.j.aG(a,null)
if(!t.f.b(n))throw A.b(B.h1)
s=n.h(0,"sources")
r=n.h(0,"scenes")
if(J.a9(n.h(0,"version"),1)){q=t.j
q=!q.b(s)||!q.b(r)}else q=!0
if(q)throw A.b(B.fZ)
q=A.c([],t.s)
for(p=J.P(s);p.m();){o=p.gn()
if(typeof o!="string"||o.length===0)A.i(A.a1("source must be a non-empty string",null,null))
q.push(o)}q=A.c([],t.wM)
for(p=J.P(r);p.m();)q.push(A.CC(p.gn()))
return new A.rp()},
CC(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(B.fr)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.c.ah(r)!==r)throw A.b(B.fL)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.a1("screenplay scene "+s+" has invalid arrays",null,null))
B.c.ah(r)
m=A.c([],t.s)
for(l=J.P(p);l.m();){k=l.gn()
if(typeof k!="string"||k.length===0)A.i(B.fU)
m.push(k)}m=A.c([],t.rn)
for(l=J.P(o);l.m();){k=l.gn()
if(!j.b(k)||typeof k.h(0,"kind")!="string"||typeof k.h(0,"text")!="string")A.i(B.hd)
A.r(k.h(0,"kind"))
A.r(k.h(0,"text"))
A.ap(k.h(0,"speaker"))
m.push(new A.kI())}j=A.c([],t.gg)
for(m=J.P(n);m.m();)j.push(A.CB(m.gn()))
return new A.kL()},
CB(a){var s,r,q,p,o="id",n=t.f
if(!n.b(a)||typeof a.h(0,o)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.fx)
A.r(a.h(0,o))
A.r(a.h(0,"prompt"))
s=A.c([],t.yv)
for(r=J.P(t.tY.a(a.h(0,"options")));r.m();){q=r.gn()
if(!n.b(q)||typeof q.h(0,o)!="string"||typeof q.h(0,"label")!="string"||typeof q.h(0,"next")!="string")A.i(B.fY)
A.r(q.h(0,o))
p=A.r(q.h(0,"label"))
A.r(q.h(0,"next"))
s.push(new A.kK(p))}return new A.kJ()},
rp:function rp(){},
kL:function kL(){},
kI:function kI(){},
kJ:function kJ(){},
kK:function kK(a){this.b=a},
rt:function rt(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
ru:function ru(){},
rv:function rv(){},
je:function je(a){this.a=a},
w0:function w0(a,b,c){this.b=a
this.e=b
this.f=c},
AY(a){var s,r,q,p
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.b(B.ff)
s=new A.mv()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wy(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dK(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aW(B.bf,new A.mt(a),new A.mu()))},
cL:function cL(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mv:function mv(){},
mt:function mt(a){this.a=a},
mu:function mu(){},
mG:function mG(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mI:function mI(a){this.a=a},
mH:function mH(a,b){this.a=a
this.b=b},
B3(a){var s
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.b(B.fM)
s=new A.mT()
return new A.dL(s.$1$2(B.bd,a.h(0,"output"),t.xs),s.$1$2(B.b9,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b8,a.h(0,"reverb"),t.gc),s.$1$2(B.b6,a.h(0,"ducking"),t.ul))},
ct:function ct(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mT:function mT(){},
mU:function mU(a,b){this.a=a
this.b=b},
mV:function mV(a){this.a=a},
n5:function n5(a){this.a=a
this.b=null},
n9(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.ah(c,"level","must be between 1 and 6"))
s=A.z(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.n7(s,b)
return s},
dP(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.z(a,"button","brush-button brush-state-"+s.b,r)
A.n7(q,b)
q.type="button"
q.disabled=s===B.as
q.addEventListener("click",A.U(new A.n8(c)))
return q},
B7(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.as
A.n7(s,b)
s.addEventListener("change",A.U(new A.nc(d,s)))
return s},
B6(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.as
A.n7(s,b)
s.addEventListener("input",A.U(new A.nb(s,e)))
return s},
w2(a,b){var s=B.b.hS(A.r(a.className),A.yg("\\s+")),r=A.C(s),q=r.i("H<1>"),p=A.K(new A.H(s,r.i("l(1)").a(new A.na()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.W(p," ")
a.setAttribute("data-brush-state",s)},
n7(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gk6())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.as)a.setAttribute("aria-disabled","true")},
n8:function n8(a){this.a=a},
nc:function nc(a,b){this.a=a
this.b=b},
nb:function nb(a,b){this.a=a
this.b=b},
na:function na(){},
dN:function dN(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ne:function ne(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
nf:function nf(a){this.a=a},
xF(a){var s=!1
if(a.length!==0)if(!B.dC.q(0,a))s=B.lJ.q(0,a)||B.lB.q(0,a)||B.lI.q(0,a)||!B.b.T(a,"Mouse")
return s},
Ee(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.G(a,A.o(a).i("G<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aq(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
EU(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.G(a,A.o(a).i("G<1,2>"))
p=J.P(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fp(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.eE(B.jA,s,r)
if(b!=null)q.I(0,b)
q.I(0,A.EU(a))
s=new A.fo(g,d,h,e,f,c,A.aX(A.Ee(q),s,r))
s.C()
return s},
Bh(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cl)
s=a.h(0,"version")
r=J.en(s)
if(!r.a4(s,1)&&!r.a4(s,2))throw A.b(B.cl)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fB)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.AS(m,new A.ns())){o=A.c([],r)
for(l=J.P(m);l.m();)o.push(A.r(l.gn()))
q.k(0,n,o)}else throw A.b(B.fj)}j=A.a6(a.h(0,"horizontalSensitivity"))
r=A.a6(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fp(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
wA(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.K(r.b,p)
o.k(0,q,r)}return o},
wT(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
x5(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fo:function fo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nu:function nu(){},
nt:function nt(a){this.a=a},
nv:function nv(){},
nw:function nw(){},
nx:function nx(){},
ns:function ns(){},
dM:function dM(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.c=b},
jw:function jw(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Bg(a){var s=t.N,r=t.m
r=new A.hr(A.fp(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.i2(a)
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
nq:function nq(a,b){this.a=a
this.b=b},
nr:function nr(a){this.a=a},
np:function np(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
no:function no(a,b){this.a=a
this.b=b},
Bi(a){var s=new A.ny(a,A.a(a.createElement("div")))
s.aS(a)
s.i3(a)
return s},
ny:function ny(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nz:function nz(a){this.a=a},
Bo(a){var s=new A.nH(A.z(a,"div","door",null))
s.i5(a)
return s},
xI(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.W(s,"; ")+"."},
nH:function nH(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nI:function nI(a){this.a=a},
nJ:function nJ(a,b){this.a=a
this.b=b},
nK:function nK(a,b){this.a=a
this.b=b},
By(a){var s=new A.nN(a,A.a(a.createElement("div")))
s.aS(a)
s.i6(a)
return s},
nN:function nN(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nO:function nO(a){this.a=a},
og:function og(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
oh:function oh(){},
BK(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oi(a.b===B.ct,a.c===B.cx,s,a.e===B.cu,a.f===B.cr,a.r===B.cz,a.w,a.x)},
oi:function oi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
w3(a,b,c,d,e,f,g,h,i,j,k){return new A.fw(e,g,k,f,b,h,d,c,a,i,j)},
BL(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.b(B.fV)
s=new A.oj(a)
r=a.h(0,"contextualReminders")
if(!A.bq(r))throw A.b(B.h9)
q=!A.bq(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.be,t.bK)
o=s.$1$2("promptDensity",B.bi,t.dn)
n=s.$1$2("textPacing",B.bg,t.j_)
m=s.$1$2("journalLayout",B.ba,t.gm)
l=s.$1$2("confirmations",B.b4,t.aJ)
k=s.$1$2("saveFeedback",B.bb,t.mx)
j=s.$1$2("focusLossBehavior",B.aA,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.b7,t.vS):B.aV
return A.w3(s,l,r,j,p,m,o,k,q,A.bq(a.h(0,g))&&A.Q(a.h(0,g)),n)},
dl:function dl(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
oj:function oj(a){this.a=a},
ok:function ok(a,b){this.a=a
this.b=b},
ol:function ol(a){this.a=a},
xP(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.a9(a.h(0,"version"),1))throw A.b(B.fK)
s=B.a.aW(B.cR,new A.ow(a),new A.ox())
r=A.r(a.h(0,"renderScale"))
q=A.Q(a.h(0,"dynamicResolution"))
p=A.r(a.h(0,"frameTarget"))
o=A.r(a.h(0,"antialiasing"))
n=A.r(a.h(0,"textureQuality"))
m=A.ap(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.ap(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.ap(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=A.zc(a.h(0,"fbxDiagnostics"))
i=new A.dV(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
fy(a,b){var s=b==null?B.b1:b
return new A.oy(s,a==null?B.b1:a)},
Ad(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dv(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dv("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fC(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cI&&b.a<2){q=q.fD(B.b0)
B.a.l(s,"High preset was reduced to Standard")}return new A.oq(q,A.ai(s,t.N))},
cu:function cu(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ow:function ow(a){this.a=a},
ox:function ox(){},
oy:function oy(a,b){this.a=a
this.b=b},
op:function op(a,b){this.a=a
this.b=b},
oq:function oq(a,b){this.a=a
this.b=b},
BN(a){var s=new A.hC(A.m(t.N,t.m),B.b1,a,A.a(a.createElement("div")))
s.aS(a)
s.i7(a)
return s},
hC:function hC(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
ot:function ot(a){this.a=a},
ou:function ou(a){this.a=a},
ov:function ov(a){this.a=a},
os:function os(a,b,c){this.a=a
this.b=b
this.c=c},
or:function or(a){this.a=a},
jf:function jf(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(){this.c=0},
BO(a){var s=new A.oA(a,A.a(a.createElement("div")))
s.aS(a)
s.i8(a)
return s},
oA:function oA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oB:function oB(a){this.a=a},
pb:function pb(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a,b,c){this.a=a
this.b=b
this.c=c},
pf:function pf(){},
pg:function pg(){},
cW:function cW(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pV:function pV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
z(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zm(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(p.length);++r){q=A.F(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hY:function hY(){},
bi:function bi(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
q0:function q0(){},
q1:function q1(){},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
q_:function q_(a){this.a=a},
q2:function q2(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
q3:function q3(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
q4:function q4(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
qg:function qg(a){this.a=a
this.b=null},
CD(a){var s=new A.qF(a,A.a(a.createElement("div")))
s.aS(a)
s.ia(a)
return s},
qF:function qF(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(a){this.a=a},
kM(a,b){var s=t.N,r=t.m
r=new A.fM(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.vX(),B.ap,A.m(s,r),A.m(s,r),B.aN,A.m(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.ib(a,b)
return r},
fM:function fM(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a){this.a=a},
r9:function r9(a){this.a=a},
qY:function qY(a,b){this.a=a
this.b=b},
qZ:function qZ(a,b){this.a=a
this.b=b},
qX:function qX(a){this.a=a},
r_:function r_(a){this.a=a},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(a,b){this.a=a
this.b=b},
r1:function r1(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
qW:function qW(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qJ:function qJ(a){this.a=a},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rb(a){return B.a.aW(B.D,new A.rc(a),new A.rd(a))},
CE(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
q.k(0,r.a,r.e)}return q},
dw(a,b){var s=t.z
s=A.eE(A.CE(),s,s)
if(a!=null)s.I(0,a)
s=new A.ra(b,A.aX(s,t.N,t.K))
s.ic(a,b)
return s},
ym(a){var s,r=t.f
if(!r.b(a)||!J.a9(a.h(0,"version"),1))throw A.b(B.h6)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fs)
return A.dw(A.aN(s,t.N,t.K),A.e(a.h(0,"version")))},
bx:function bx(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
ra:function ra(a,b){this.a=a
this.b=b},
wh(a,b){var s=b==null?A.dw(null,1):b
return new A.re(s,a==null?A.dw(null,1):a)},
CF(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.D[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eI(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cR(r)
J.br(l,s.a,r)}catch(n){if(!(A.ao(n) instanceof A.D))throw n}}m=A.dw(l,1)
return A.wh(m,m)},
re:function re(a,b){this.a=a
this.b=b},
CG(a){var s=new A.rm(a,A.a(a.createElement("div")))
s.aS(a)
s.ie(a)
return s},
rm:function rm(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
B0(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cr(p+m+":"+k,m,l.a,l.b,j))}}B.a.P(i,new A.mE())
return new A.mD(A.ai(i,t.bC),A.a_(t.N))},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mD:function mD(a,b){this.a=a
this.b=b},
mF:function mF(){},
mE:function mE(){},
CX(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.n6
s=t.L
r=A.m(s,t.q1)
q=A.o(a).i("ab<1>")
p=A.K(new A.ab(a,q),q.i("n.E"))
B.a.Y(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b9(new A.bl(B.mP,k+" has an out-of-range authored day "+h+"."))
g=A.CW(k,h,i.b,m)
if(g instanceof A.b9)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bP(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.af(o,o.r,o.e,A.o(o).i("af<2>"));o.m();){n=o.d
J.hi(e.ce(n.b,new A.rR()),n)}o=A.aX(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.G(e,e.$ti.i("G<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aq(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lb(new A.la(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a3,A.pN(b,b,b)))},
CW(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cO[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.dt(B.b.b2(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b9(new A.bl(B.mQ,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cV
B.a.l(l,new A.c4(g,i.b,f))}if(l.length===0)continue
B.a.P(l,new A.rO())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b9(new A.bl(B.dV,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b9(new A.bl(B.dV,a+" day "+s+" has no authored tiers."))
return new A.lG(c)},
la:function la(a,b,c,d,e,f,g,h){var _=this
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
rU:function rU(a){this.a=a},
rT:function rT(a){this.a=a},
rV:function rV(a){this.a=a},
rP:function rP(a){this.a=a},
rQ:function rQ(){},
rS:function rS(a){this.a=a},
rR:function rR(){},
rN:function rN(a){this.a=a},
rM:function rM(a){this.a=a},
rO:function rO(){},
lb:function lb(a){this.a=a},
lG:function lG(a){this.a=a},
G_(a){var s,r,q,p=A.a_(t.N)
for(s=new A.G(a,A.o(a).i("G<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaE(),q=q.gu(q);q.m();)if(q.gn().ga1().N(0,new A.vc())){p.l(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.Y(s)
return s},
FZ(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.aq(b,!0,s)
B.a.Y(r)
q=new A.ee()
q.bP((a^913741)>>>0)
p=q.aP(4)
if(!(p>=0&&p<4))return A.d(B.cN,p)
o=B.cN[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.aq(r,!0,s)
B.a.cY(m,q)
s=A.kV(m,0,A.fb(n,"count",t.S),A.C(m).c).bL(0)
B.a.Y(s)
return s},
vc:function vc(){},
yy(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aJ(r)||!A.aJ(q)||!A.aJ(p)||r<1||q<0||q>23||p<0)return null
return new A.bP(s,r,q,p)},
CV(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.P(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.P(s.a(a.h(0,j)));s.m();){n=A.yy(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.B_(m)
if(!s&&l==null)return i
return new A.lc(r,o,l)},
B_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yy(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aJ(p))if(!(p<0))if(A.bq(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bK(new A.H(B.cO,t.qR.a(new A.mA(r)),t.cE),t.hF)
j=A.bK(new A.H(B.jw,t.da.a(new A.mB(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bK(new A.H(B.iw,t.kr.a(new A.mC(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jg(s,k,j,p,i,n,A.ap(m))},
bJ:function bJ(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d4:function d4(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(){},
jg:function jg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mA:function mA(a){this.a=a},
mB:function mB(a){this.a=a},
mC:function mC(a){this.a=a},
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rW:function rW(){},
b9:function b9(a){this.a=a},
l8:function l8(a){this.a=a},
l6:function l6(a){this.a=a},
ik:function ik(a,b){this.a=a
this.b=b},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
F8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jc())return f
n=A.e9().gb0()
m=n.h(0,"captureSeed")
l=A.dt(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dt(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eI(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.j.aG(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.lC.q(0,o.b))return f
J.br(p,A.r(o.a),A.r(o.b))}r=p}else return f}catch(g){if(A.ao(g) instanceof A.D)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lH.q(0,i))return f
if(h!=null&&!B.lF.q(0,h))return f
return new A.t7(l,k,j,h,r)},
F9(){var s,r,q,p=A.e9().gb0().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eD
break A}if("intimate"===p){s=B.eF
break A}s=B.eE
break A}r=A.e9().gb0().h(0,"cameraFov")
q=A.eI(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fi(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
j8(a){var s=$.be
if(s===a&&B.b.q(A.r(a.b.className),"open"))return
if(s!=null)s.a6()
$.be=a
if(a===$.cn.j())$.hg().fZ("gameplay.viewport")
else $.hg().mi(A.zC(a))
s=$.ad.j()
s.ay=!1
s.b9()
$.el=0
a.bI()},
wO(a,b,c){var s,r,q
$.j9=!0
s=$.be
if(s!=null)s.a6()
$.be=a
s=$.hg()
if(s.a.a.length===0)s.fZ(c)
r=A.K(s.a.a,t.oP)
r.push(new A.dr(b,B.Y,c))
q=s.a
s.a=new A.e2(r,q.b,q.c)
s.iP(b)
s=$.ad.j()
s.ay=!1
s.b9()
$.el=0
a.bI()
$.j9=!1},
dI(a){var s,r,q,p,o,n,m,l=null
if($.j9)return
$.j9=!0
a.a6()
$.be=null
s=$.hg().kg()
$.j9=!1
r=s.a
if(r===B.dn){$.el=0
r=$.ad.j()
r.b9()
r.ay=!0
q=A.F(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dm)return
r=s.c.a
r=r.length===0?l:B.a.gX(r)
p=r==null?l:r.a
A:{if(B.bo===p){r=$.cn.j()
break A}if(B.dc===p){r=$.h1.j()
break A}r=l
break A}if(r!=null){o=s.d
$.be=r
n=$.ad.j()
n.ay=!1
n.b9()
$.el=0
r.bI()
m=o==null?l:A.F(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jb(a){if($.be===a&&B.b.q(A.r(a.b.className),"open"))a.a6()
else A.j8(a)},
h5(a){var s
if($.j9)return
if($.be===a)$.be=null
if(a===$.cn.j())$.hg().cf()
else $.hg().lf(A.zC(a))
$.el=0
s=$.ad.j()
s.b9()
s.ay=!0},
zC(a){if(a===$.cn.j())return B.dd
if(a===$.h1.j())return B.Y
if(a instanceof A.fM)return B.Y
if(a instanceof A.hC)return B.Y
if(a instanceof A.hr)return B.Y
if(a===$.j_.j())return B.kv
if(a===$.m7.j())return B.kw
if(a===$.iZ.j())return B.kx
if(a===$.m5.j())return B.Y
if(a===$.iX.j())return B.kz
return B.ky},
mc(a,b){var s
a.sm7(new A.u5())
a.sm9(new A.u6())
a.sm8(new A.u7())
a.sm3(new A.ud())
a.sm6(new A.ue())
a.smh(new A.uf())
a.smc(new A.ug())
a.smb(new A.uh())
a.sb5(b?new A.ui(a):new A.uj(a))
a.sb_(b?new A.uk(a):new A.u8(a))
s=a.f
if(s===B.H)a.slV(new A.u9())
if(s===B.a_)a.sm4(new A.ua())
if(s===B.I){a.slU(new A.ub())
a.sma(new A.uc())}},
Eb(){var s=$.ej.j()
s.sdN(new A.u2())
s.sb5(new A.u3())
s.sb_(new A.u4())},
mb(a,b,c){return A.E8(a,b,c)},
E8(a,b,c){var s=0,r=A.bF(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$mb=A.bH(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.tZ()
k=c.$ti
j=$.am
i=new A.as(j,k)
if(j!==B.x)l=A.zI(l,j)
c.co(new A.dE(i,2,null,l,k.i("dE<1,1>")))
s=4
return A.au(i,$async$mb)
case 4:case 3:o=$.he().b
n=$.aK
q=6
s=n!=null?9:10
break
case 9:s=11
return A.au(n.cE(b.a),$async$mb)
case 11:case 10:k=b.a
$.j4=A.fy(k,a)
$.ej.j().cm(a,k,b.b)
A.wQ()
A.ja()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ao(g)
$.j4=A.fy(o,o)
k=$.ej.j()
k.cm(o,o,A.c(["renderer transaction rejected: "+A.y(m)],t.s))
A.wQ()
s=8
break
case 5:s=1
break
case 8:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$mb,r)},
EZ(){var s,r,q,p,o,n=null
try{n=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.j.aG(n,null)
if(!t.f.b(r)||!J.a9(r.h(0,"version"),1))A.i(B.fX)
q=A.xP(r.h(0,"requested"))
$.j4=A.fy(A.xP(r.h(0,"effective")),q)}catch(s){$.j4=A.fy(null,null)}p=$.he().a
o=A.Ad(p,A.zq())
r=o.a
$.j4=A.fy(r,p)
$.ej.j().cm(p,r,o.b)
A.wQ()
A.ja()},
zq(){var s,r,q,p,o=$.f6.j().gbB().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.dt(B.b.b2(p,12),null)
if(r==null)r=1}return new A.op(r,B.a.q(o,"disjoint-timer-query"))},
wQ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.j.ab($.he().B(),null))}catch(s){}},
Ea(){var s=$.iW.j()
s.sdN(new A.u_())
s.sb5(new A.u0())
s.sb_(new A.u1())},
EX(){var s,r,q,p,o,n=null
try{n=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wF=A.Bh(B.j.aG(n,null))}catch(s){$.wF=A.fp(null,null,!1,1,!1,!1,2,1)}r=$.iW.j()
q=r.w=$.fd()
r.x=new A.jw(q)
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
r.dn()
$.ad.j().ea($.fd().r)
r=$.ad.j()
q=$.fd()
p=r.ch
p.a=q.f
p.dV()
r.b9()
A.zE()},
zE(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.j.ab($.fd().B(),null))}catch(s){}},
EW(){var s,r=null
try{r=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j3=A.B3(B.j.aG(r,null))}catch(s){$.j3=B.aN}$.h_.j().hp($.j3)
A.zD()
A.wx()},
zD(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.j.ab($.j3.B(),null))}catch(s){}},
wx(){var s=$.bp
if(s==null)return
s.hz($.j3)},
EY(){var s,r=null
try{r=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wI=A.BL(B.j.aG(r,null))}catch(s){$.wI=$.vX()}$.iY.j().hq($.cJ())
A.zF()
A.z8()},
zF(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.j.ab($.cJ().B(),null))}catch(s){}},
z8(){var s,r="detailed",q=A.BK($.cJ()),p=A.F(A.a(v.G.document).documentElement)
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
s=$.cJ().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cJ().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
EV(){var s,r=null
try{r=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.ek=A.AY(B.j.aG(r,null))}catch(s){$.ek=B.ap}$.f5.j().e9($.ek)
A.wP()
A.m8()},
wP(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.j.ab($.ek.B(),null))}catch(s){}},
m8(){var s,r,q,p,o,n,m=$.ek,l=$.v0,k=$.x3,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.i(B.fp)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.wU=l
$.cH.j()
r=A.F(A.a(v.G.document).documentElement)
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
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.y(j*100)+"%")
q=$.B.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.z6){m=$.bc.j()
l=$.ek.f
m.e=new A.je(l==null?B.a9:l)
m=$.bc.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Ez(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uM(r,q)
r.addEventListener("change",A.U(new A.uK(s)))
q.addEventListener("change",A.U(new A.uL(s)))},
vj(){var s=0,r=A.bF(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9
var $async$vj=A.bH(function(e1,e2){if(e1===1){o.push(e2)
s=p}for(;;)switch(s){case 0:d7=v.G
d8=A.F(A.a(d7.document).getElementById("game"))
if(d8==null){s=1
break}$.B.b=d8
$.wH=A.F(A.a(d7.document).getElementById("fps"))
$.z1.b=$.AE().ck(A.e9().gb0().h(0,"renderer"))
A.EA()
b8=$.B.j()
b9=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
b8.width=b9
b9=$.B.j()
b8=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b9.height=b8
c0=A.F(A.a(d7.document).getElementById("ui-canvas"))
if(c0!=null){c0.width=A.e($.B.j().width)
c0.height=A.e($.B.j().height)
b8=new A.ne(c0,A.c([],t.km))
c1=A.F(c0.getContext("2d"))
if(!t.m.b(c1))A.i(A.k("Failed to get 2D context for CanvasP5GuiEngine"))
b8.b=c1
b8=new A.qv(b8)
$.em=b8
b8.bg(A.e($.B.j().width),A.e($.B.j().height))}n=A.F(d8.getContext("webgl2"))
if(n==null)throw A.b(A.k("Pixeldart requires WebGL2"))
try{b8=t.s6
b9=t.N
c2=t.iO
c3=t.m3
c4=t.pw
m=new A.lJ(n,A.e($.B.j().width),A.e($.B.j().height),A.c([],b8),A.m(b9,t.qr),A.c([],t.s3),A.m(b9,c2),A.m(b9,c3),A.m(b9,t.xp),A.m(b9,t.bE),A.m(b9,c2),A.m(b9,c3),A.c([],b8),A.m(b9,c2),A.m(b9,c3),A.m(b9,b9),A.m(t.S,c4),A.m(b9,t.qS),A.c([],t.j5),B.iY,A.m(b9,t.Aj),A.m(b9,b9),A.m(b9,c4),A.m(b9,t.vD),A.m(b9,c4),A.m(b9,t.w1),B.hi,B.kN)
$.aK=m
b9=B.eo.l8($.z1.j(),m)
b9.c6()
$.f6.b=b9}catch(e0){l=A.ao(e0)
k=A.cI(e0)
g=$.B.j()
g.setAttribute("data-renderer-error",A.y(l))
if($.jc())$.B.j().setAttribute("data-renderer-error-stack",A.y(k))
throw e0}A.ja()
p=4
A.f8("initializing")
$.cH.b=new A.nd(new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0),$.xr())
$.v0=A.Q(A.a(A.a(d7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.x3=A.Q(A.a(A.a(d7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.wU=$.v0
$.cH.j()
b8=A.a(d7.window)
b9=t.N
c2=t.s
c3=t.a
c2=A.BS(A.J(["moveForward",A.c(["KeyW"],c2),"moveBack",A.c(["KeyS"],c2),"moveLeft",A.c(["KeyA"],c2),"moveRight",A.c(["KeyD"],c2),"interact",A.c(["KeyE"],c2),"secondary",A.c(["KeyQ"],c2),"run",A.c(["ShiftLeft"],c2),"crouch",A.c(["ControlLeft"],c2),"rotate",A.c(["KeyR"],c2),"reach",A.c(["KeyF"],c2),"journal",A.c(["KeyJ"],c2),"sleep",A.c(["KeyL"],c2),"pause",A.c(["Escape"],c2)],b9,c3))
c4=A.a(b8.document)
c2=new A.k0(b8,c4,A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),new A.j(0,0,0),new A.p4(),c2)
b8.addEventListener("keydown",A.U(c2.gje()))
b8.addEventListener("keyup",A.U(c2.gjg()))
b8.addEventListener("mousemove",A.U(c2.gjm()))
b8.addEventListener("mousedown",A.U(c2.gjk()))
b8.addEventListener("mouseup",A.U(c2.gjo()))
b8.addEventListener("wheel",A.U(c2.gjq()))
c4.addEventListener("pointerlockchange",A.U(c2.gji()))
$.ad.b=c2
c2=$.B.j()
b8=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
c2.width=b8
b8=$.B.j()
c2=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b8.height=c2
A.f8("renderer")
A.f8("text")
c2=$.fe()
s=7
return A.au(c2.bo(),$async$vj)
case 7:j=c2.n1()
i=A.CX(j)
if(!(i instanceof A.lb)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aE.b=i.a
$.m4.b=A.B0(j)
g=A.m(b9,c3)
for(b8=t.j,c6=0;c6<5;++c6){f=B.B[c6]
c3=A.r(f)
c4=c2.c
c4===$&&A.p()
c7=c4.h(0,c3)
c3=b8.b(c7)?A.aq(c7,!0,b9):B.n
J.br(g,f,c3)}e=A.CY(g)
$.ww.b=new A.n6(B.eC)
d=$.ww.j().mq(new A.vk(e))
c8=$.vY()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aQ.aP(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.c.aX(c2.c)
if(c2==null)c2=7
if(b9<1)A.i(A.ah(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.i(A.ah(c2,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.i(A.ah(5760,"daySeconds","must be finite and > 0"))
c9=new A.jR(b9,7,5760)
c9.b=c2
d0=A.y0(e)
g=A.xN(42,g,A.xQ(42),c9,d0,A.xH(6,16,d0,null,6,B.iZ,c9),new A.jD(0,0,0,!1),A.pN(null,null,null))}else{g=d.a
g.toString
g=A.xO(g,e)}$.T.b=g
$.aE.j().y=$.T.j().z
g=A.ai(A.Ev($.T.j().b),t.fu)
$.tS.b=new A.rY(g)
g=$.vZ()
b9=d.a
g.dX(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.f6.j().bs(A.yi($.T.j().gh4()))
if(d.b!=null){g=d.b
g.toString
A.h6(g)}g=$.aE.j()
b9=A.FZ($.T.j().b,A.G_(j.b))
g.shT(A.hM(b9,A.C(b9).c))
A.f8("house")
$.X.b=$.T.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.u)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.u)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a9(b,"open")||J.a9(b,"closed")){a3=J.a9(b,"open")
for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.u)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.u)(c2),++d1){a5=c2[d1]
a5.shJ(a3)}}}a6=$.xp()
if(a6!=null&&a6.length!==0)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.u)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.xq()}}g=$.aK
if(g!=null)g.kf($.X.j())
$.bd.b=$.T.j().d
$.X.j()
g=new A.j(12.9375,1.65,0.825)
$.x4=$.wS=$.wY=g
a9=g.ap(0,new A.j(0,1.3499999999999999,0))
$.j0.b=new A.jr(a9,J.xs(a9,new A.j(0,1.2000000000000002,0)))
$.h0.b=new A.nQ()
g=A.wJ(B.n)
b9=A.wJ(B.n)
c2=new A.qy(B.E,g,b9)
if(!isFinite(0))A.i(B.fd)
if(!B.a.a7(b9,B.a.gaq(g)))A.i(B.fQ)
if(c2.a===B.E&&c2.b!==0&&!c2.e)A.i(B.fh)
$.c7.b=c2
$.av="hall"
g=d.a
b0=A.Ce(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.lJ($.X.j())){g=b0.b
$.x4=$.wS=$.wY=g
$.co=b0.c
$.f9=b0.d
$.av=b0.a
b1=g.ap(0,new A.j(0,1.3499999999999999,0))
g=$.j0.j()
g.skh(b1)
g.b=J.xs(b1,new A.j(0,1.2000000000000002,0))
g=$.j0.j()
b9=$.X.j()
c2=b0.e
c3=b0.f
g.mL($.av,$.ep(),b9,c3,c2)
A.h6("restored position")}g=A.CD(A.a(d7.document))
g.slW(new A.vl())
g.sb5(new A.vm())
g.sb_(new A.vx())
$.h1.b=g
g=A.a(d7.document)
b9=A.a(g.createElement("div"))
c2=new A.q3(g,b9)
c2.aS(g)
b9.className=A.r(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.a(b9.appendChild(A.n9(g,B.ej,1)))
A.a(b9.appendChild(A.z(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.z(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bj(g,d2,B.de,"resume")
c2.bj(g,d2,B.df,"settings")
c2.bj(g,d2,B.dg,"controls")
c2.bj(g,d2,B.dh,"save now")
c2.bj(g,d2,B.di,"help")
c2.bj(g,d2,B.dj,"credits")
c2.bj(g,d2,B.dk,"back")
A.a(b9.appendChild(d2))
c2.smd(new A.vG())
c2.sb5(new A.vH())
c2.smf(new A.vI())
c2.sm_(new A.vJ())
c2.sme(new A.vK())
c2.sm5(new A.vL())
c2.sm0(new A.vM())
c2.sb_(new A.vn())
$.cn.b=c2
c2=$.T.j().e
b9=$.bd.j()
$.T.j()
$.m6.b=new A.p2(c2,b9)
b9=A.a(d7.document)
c2=$.T.j().e
g=$.bd.j()
c3=$.m6.j()
c4=A.a(b9.createElement("div"))
c3=new A.pb(c2,g,c3,b9,c4)
c3.aS(b9)
c4.setAttribute("aria-label","The Journal")
A.a(c4.appendChild(A.z(b9,"div","journal-title","The Journal")))
d3=A.z(b9,"div","journal-pages",null)
g=A.z(b9,"div","page page-left",null)
c3.y!==$&&A.aW()
c3.y=g
c2=A.z(b9,"div","page page-right",null)
c3.z!==$&&A.aW()
c3.z=c2
A.a(d3.appendChild(g))
A.a(d3.appendChild(c2))
A.a(c4.appendChild(d3))
A.a(c4.appendChild(c3.iv()))
d4=A.z(b9,"div","tape-roll",null)
A.a(d4.style).setProperty("width","8rem")
c2=A.z(b9,"div","tape-fill",null)
c3.as!==$&&A.aW()
c3.as=c2
A.a(d4.appendChild(c2))
A.a(c4.appendChild(d4))
d5=A.z(b9,"div","consult",null)
A.a(d5.appendChild(A.z(b9,"div","consult-label","Cite an entry")))
c2=A.z(b9,"div","entry-picker",null)
c3.at!==$&&A.aW()
c3.at=c2
g=A.z(b9,"div","consult-result",null)
c3.ax!==$&&A.aW()
c3.ax=g
A.a(d5.appendChild(c2))
A.a(d5.appendChild(g))
A.a(c4.appendChild(d5))
d6=A.F(b9.documentElement)
if(t.m.b(d6)){A.a(d6.style).setProperty("--shake-max-deg","3deg")
A.a(d6.style).setProperty("--shake-max-px","2px")}$.j_.b=c3
$.j_.j().sb_(new A.vo())
g=A.a(d7.document)
b9=A.z(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.F(g.body).appendChild(b9))
$.z3.b=new A.qg(b9)
b9=A.a(d7.document)
g=A.z(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.F(b9.body).appendChild(g))
$.z2.b=new A.n5(g)
g=A.a(d7.document)
b9=A.z(g,"div","ambient-notice",null)
c2=A.z(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.a(A.F(g.body).appendChild(b9))
A.a(A.F(g.body).appendChild(c2))
$.bc.b=new A.mG(b9,c2,B.K)
$.z6=!0
c2=A.Bo(A.a(d7.document))
c2.slZ(A.Ab())
c2.slY(A.Gc())
$.at.b=c2
c2=$.cq()
c2.slX(new A.vp())
c2.sm1(A.Ab())
c2=d.a
b2=A.CV(c2==null?null:c2.c.h(0,"visitors"))
if($.cJ().Q&&b2!=null&&$.aE.j().dX(b2))A.Fd()
g=$.m4.j()
b9=d.a
g.mM(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(b8.b(b3))for(g=J.P(b3);g.m();){b4=g.gn()
if(A.aJ(b4))$.v1.l(0,b4)}g=A.CG(A.a(d7.document))
g.smg(new A.vq())
g.sb_(new A.vr())
$.m7.b=g
g=A.BO(A.a(d7.document))
g.sb_(new A.vs())
$.iZ.b=g
g=A.Bi(A.a(d7.document))
g.sb_(new A.vt())
$.m5.b=g
$.j1.b=A.kM(A.a(d7.document),null)
$.j2.b=A.kM(A.a(d7.document),B.Z)
$.f5.b=A.kM(A.a(d7.document),B.I)
A.mc($.j1.j(),!1)
A.mc($.j2.j(),!0)
A.mc($.f5.j(),!0)
A.EV()
A.Ez()
$.ej.b=A.BN(A.a(d7.document))
A.Eb()
A.EZ()
$.h_.b=A.kM(A.a(d7.document),B.H)
A.mc($.h_.j(),!0)
A.EW()
$.iY.b=A.kM(A.a(d7.document),B.a_)
A.mc($.iY.j(),!0)
A.EY()
$.iW.b=A.Bg(A.a(d7.document))
A.Ea()
A.EX()
g=A.By(A.a(d7.document))
g.sb_(new A.vu())
g.sm2(new A.vv())
$.iX.b=g
g=d.a
b5=A.BA(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zG(b5)
A.f8("world")
A.zJ()
A.a(d7.window).addEventListener("resize",A.U(new A.vw()))
A.a(d7.document).addEventListener("visibilitychange",A.U(new A.vy()))
A.a(d7.window).addEventListener("keydown",A.U(new A.vz()))
A.a(d7.window).addEventListener("keyup",A.U(new A.vA()))
A.a(d7.window).addEventListener("keydown",A.U(new A.vB()))
A.a(d7.window).addEventListener("click",A.U(new A.vC()))
$.B.j().addEventListener("mousemove",A.U(new A.vD()))
$.B.j().addEventListener("click",A.U(new A.vE()))
$.B.j().addEventListener("wheel",A.U(new A.vF()))
A.h3()
A.f8("raf")
A.e(A.a(d7.window).requestAnimationFrame(A.U(A.Ac())))
p=2
s=6
break
case 4:p=3
d9=o.pop()
b6=A.ao(d9)
b7=A.cI(d9)
A.uV(b6,b7)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$vj,r)},
Ey(a){var s,r,q,p=$.em
if(!$.at.j().y||p==null)return
s=A.zi(a)
if(s==null)return
r=$.cq()
q=p.fR(s.a,s.b)
r.r=q==null?null:q.b},
Ex(a){var s,r=$.em
if(!$.at.j().y||r==null)return!1
s=A.zi(a)
if(s==null)return!1
return $.cq().lD(r.fR(s.a,s.b))},
zi(a){var s=A.a($.B.j().getBoundingClientRect()),r=A.a6(s.width),q=A.a6(s.height)
if(r<=0||q<=0)return null
return new A.aR(A.e(a.clientX)-A.a6(s.left),A.e(a.clientY)-A.a6(s.top))},
EA(){var s=v.G
A.a(s.window).addEventListener("error",A.U(new A.uN()))
A.a(s.window).addEventListener("unhandledrejection",A.U(new A.uO()))},
f8(a){if($.wB===a)return
$.wB=a
$.B.j().setAttribute("data-boot-phase",a)},
ja(){var s,r,q,p,o,n=null,m=$.f6.j().gbB(),l=$.B.j(),k=A.e9().gb0().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.j.ab(m.B(),n))
k=$.aK
if(k==null)k="{}"
else{k=k.e
k===$&&A.p()
k=k.as
if(k==null)k=A.i(A.k("renderer is not initialized"))
s=k.a
s.C()
r=s.b
q=A.K(r,A.o(r).c)
B.a.Y(q)
r=t.N
p=t.K
p=B.j.ab(A.J(["profile",A.J(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
k=$.aK
if(k==null)k=n
else{k=k.dE
if(k==null)k=n
else{s=A.m(t.N,t.X)
s.k(0,"schema","pixeldart-fbx-diagnostic-v1")
s.k(0,"enabled",!1)
s.I(0,k.a.ld())
k=s}if(k==null)k=B.d_}if(k==null)k=B.d_
k=A.eE(k,t.N,t.X)
k.k(0,"settingsEnabled",$.he().b.z)
l.setAttribute("data-renderer-fbx-diagnostics",B.j.ab(k,n))
k=$.aK
o=k==null?n:k.x
if(o!=null)$.B.j().setAttribute("data-renderer-profile-fallback",o)},
F5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(!$.jc())return
s=$.xp()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.xq()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tS.j().dF($.T.j().gaa().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vY()
o=q==null?d:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.c.aL(A.zH($.av),3))
r=$.B.j()
q=$.wB
n=$.av
m=$.ep()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.j.ab(A.J(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.J(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.co,"pitch",$.f9,"modal",$.be!=null,"dialogueOverlay",$.at.j().y,"inputEnabled",$.ad.j().ay,"day",$.T.j().gaa().a,"hour",$.T.j().gaa().b],l,k),d))
j=A.m(l,t.X)
for(r=$.X.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.u)(r),++i){h=r[i]
n=h.ax
m=h.ay
if(n)g=!m
else g=!1
j.k(0,h.a,A.J(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",!1,"passable",g],l,k))}$.B.j().setAttribute("data-automation-portals",B.j.ab(j,d))
f=$.m9
r=!1
if(f!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.av
q=r.e.h(0,q)!=null
r=q}if(r){e=f.cg("cellar",$.av)
$.B.j().setAttribute("data-audio-transmission-cellar",B.j.ab(A.J(["sourceRoom","cellar","listenerRoom",$.av,"portalPath",e.a,"gainDb",e.c,"lowPassHz",e.d,"muffle01",e.e,"barrierIds",e.b,"reasonTrace",e.r,"reachable",e.f],l,k),d))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
ml(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c7.j().a!==B.E){A.h6("save unavailable during rupture")
return}try{r=$.ww.j()
q=$.T.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.av
m=$.ep()
l=$.co
k=$.f9
j=$.j0.j().d
j=j==null?null:j.a.a
i=$.j0.j().d
J.br(s,"player",new A.ks(n,m,l,k,j,i==null?null:i.b).B())
n=$.aE.j()
m=A.eP(n.b,p)
l=A.eP(n.c,t.L)
n=n.r
J.br(s,"visitors",new A.lc(m,l,n==null?null:new A.jg(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.m4.j().b
n=A.K(n,A.o(n).c)
B.a.Y(n)
J.br(s,"ambient",n)
n=A.K($.v1,A.o($.v1).c)
B.a.Y(n)
J.br(s,"unverifiables",n)
J.br(s,"inventoryInspections",$.vZ().B())
n=$.wG
if(n!=null)J.br(s,"ending",A.J(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xS(q.c).B()
k=q.d
r.n3(A.yk(s,A.J(["houseSeed",n,"runSeed",m,"house",l,"time",A.J(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.h6(a)}catch(h){A.h6("save failed")}},
F3(){var s=A.F(A.a(v.G.document).documentElement),r=s==null?null:A.ap(s.getAttribute("data-gameplay-focus-loss")),q=A.bK(new A.H(B.aA,t.rg.a(new A.uR(r)),t.vK),t.x)
switch((q==null?B.aW:q).a){case 0:$.mi=!0
s=$.bp
if(s!=null)s.ec(!0)
break
case 1:$.mi=!0
break
case 2:break}},
h6(a){var s=v.G,r=A.F(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.F(A.a(s.document).documentElement)
s=s==null?null:A.ap(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.BJ(B.eY,new A.uZ(r),t.H)},
uV(a,b){var s,r,q,p
A.f8("error")
s=A.y(a)
r=A.xf(s,"\n"," ")
s=$.wH
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.F(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.jc()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
zb(){var s,r
if($.wz)return
$.wz=!0
s=$.bp
r=s==null
if(!r)s.cf()
if(!r)s.ej("music")
B.a.l($.da,"arm")},
h3(){var s=0,r=A.bF(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$h3=A.bH(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.au(A.mg(),$async$h3)
case 2:o=null
q=4
s=7
return A.au(A.bT(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$h3)
case 7:n=b
i=A
s=8
return A.au(A.bT(A.a(n.json()),t.X),$async$h3)
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
if(k!=null&&typeof k==="string"){A.r(k)
l=A.F(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.m5.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.au(A.o6(A.c([A.uP(o),A.uJ(o)],t.iJ),t.H),$async$h3)
case 9:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$h3,r)},
mg(){var s=0,r=A.bF(t.H),q,p
var $async$mg=A.bH(function(a,b){if(a===1)return A.bC(b,r)
for(;;)switch(s){case 0:$.X.j()
p=$.B.j()
p.setAttribute("data-house-manifest","renderer-showcase")
$.B.j().setAttribute("data-house-manifest-source","runtime-showcase")
s=3
return A.au(A.mf(),$async$mg)
case 3:s=4
return A.au(A.mh(),$async$mg)
case 4:s=1
break
case 1:return A.bD(q,r)}})
return A.bE($async$mg,r)},
mf(){var s=0,r=A.bF(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mf=A.bH(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.iA[c]
p=7
s=10
return A.au(A.bT(A.a(A.a(g.window).fetch(n)),f),$async$mf)
case 10:m=b1
s=11
return A.au(A.bT(A.a(m.text()),e),$async$mf)
case 11:l=b1
b=B.j.aG(l,null)
b=h.b(b)?b:A.dG("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dG("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aJ(a)?a:A.dG("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dG("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aq(a,!0,d):A.dG("assets is not a list")
a4=A.C(a3)
a5=a4.i("M<1,cU>")
a3=A.K(new A.M(a3,a4.i("cU(1)").a(A.G8()),a5),a5.i("a4.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aq(a,!0,d):A.dG("placements is not a list")
a5=A.C(a4)
a6=a5.i("M<1,cw>")
a4=A.K(new A.M(a4,a5.i("cw(1)").a(A.G9()),a6),a6.i("a4.E"))
a4.$flags=1
k=new A.oH(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.i(A.aa(""))
k.mY(a1)
$.me=k
a1=$.aK
if(a1!=null)a1.hr(k)
a1=$.B.b
if(a1===$.B)A.i(A.aa(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.B.b
if(a1===$.B)A.i(A.aa(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.B.b
if(a1===$.B)A.i(A.aa(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ao(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.B.j().setAttribute("data-house-inventory","unavailable")
$.B.j().setAttribute("data-house-inventory-error",A.y(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$mf,r)},
mh(){var s=0,r=A.bF(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mh=A.bH(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.me
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.jb[a4]
p=7
s=10
return A.au(A.bT(A.a(A.a(a1.window).fetch(m)),a2),$async$mh)
case 10:l=b5
s=11
return A.au(A.bT(A.a(l.text()),e),$async$mh)
case 11:k=b5
a5=B.j.aG(k,null)
a5=a0.b(a5)?a5:A.h2("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aq(a6,!0,a3):A.h2("emitters is not a list")
a8=A.C(a7)
a9=a8.i("M<1,cT>")
a7=A.K(new A.M(a7,a8.i("cT(1)").a(A.Gn()),a9),a9.i("a4.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aJ(a6)?a6:A.h2("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h2("sourceRef is not a string")
j=new A.oO(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.i(A.aa(""))
j.mZ(a7,b2)
$.zt=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.br(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.X.b
if(a7===$.X)A.i(A.aa(""))
a8=A.B1(i)
a9=new A.mQ(a7,A.aX(B.d6,e,d),a8)
a9.i1(a8,a7,B.d6)
$.m9=a9
a7=$.bp
if(a7!=null){a7.ch=a9
a7.bx()}a7=$.B.b
if(a7===$.B)A.i(A.aa(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.B.b
if(a7===$.B)A.i(A.aa(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.B.b
if(a7===$.B)A.i(A.aa(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.B.b
if(a7===$.B)A.i(A.aa(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ao(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.m9=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.y(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$mh,r)},
wE(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.P(t.a.b(s)?s:new A.aV(s,A.C(s).i("aV<1,f>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.r(q))}},
uJ(a){var s=0,r=A.bF(t.H),q,p,o,n,m,l
var $async$uJ=A.bH(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.wE(A.F(n?null:a.sfx),m,"")
A.wE(A.F(n?null:a.ir),m,"ir-")
q=A.F(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.r(p))
l=$
s=2
return A.au(A.mX(m,$.X.j()),$async$uJ)
case 2:o=l.bp=c
o.ch=$.m9
o.bx()
A.F_()
A.zL(o)
A.wx()
A.zM()
if($.wz){o.cf()
o.ej("music")}return A.bD(null,r)}})
return A.bE($async$uJ,r)},
x0(a,b){var s
A.zX(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Fa(a){var s,r
try{s=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
z7(a,b){var s
if(a!=="brightness")return
s=A.F(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.y(B.c.D(b,0.6,1.4))+")")},
tU(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.F(A.a(v.G.document).documentElement)
if(r!=null)A.Q(A.a(r.classList).toggle(s,b))
A.m8()},
zM(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a6($.dc().a.ci(o)),k=A.Q($.dc().a.ci(n)),j=A.Q($.dc().a.ci(m))
for(s=[$.j1.j(),$.j2.j(),$.f5.j(),$.h_.j(),$.iY.j()],r=0;r<5;++r)s[r].eb(o,l)
A.z7(o,l)
for(s=[$.j1.j(),$.j2.j(),$.f5.j(),$.h_.j(),$.iY.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tU(n,k)
A.tU(m,j)},
x_(a,b){var s
A.zX(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
F7(a){var s,r
try{s=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zL(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.iR[s]
q=$.dc().a.b.h(0,r)
j.k(0,r,A.a6(q==null?A.i(A.k("setting missing from profile: "+r)):q))}p=A.Q($.dc().a.ci("muted"))
o=A.Q($.dc().a.ci("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bi(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cW(o)
for(q=[$.j1.j(),$.j2.j(),$.f5.j(),$.h_.j()],n=j.$ti.i("cy<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cy(j,j.r,j.e,n);m.m();){k=m.d
l.eb(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
z9(){var s=$.bp
if(s!=null)A.zL(s)
A.zM()},
F_(){var s,r,q,p,o,n,m,l,k=null
try{k=A.ap(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.j.aG(k,null)
if(!t.f.b(r)||!J.a9(r.h(0,"version"),1))A.i(B.fq)
q=A.ym(r.h(0,"requested"))
$.zS=A.wh(A.ym(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.F7(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Fa(p))}}$.zS=A.CF(o,r)
A.uS()},
uS(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.j.ab($.dc().B(),null))}catch(s){}},
zX(a,b){var s,r,q,p,o,n,m
switch(A.rb(a).d.a){case 0:r=A.eI(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dc()
q=s
A.rb(a).cR(q)
p=t.N
o=t.K
n=A.eE(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dw(n,1)
n=s
A.rb(a).cR(n)
o=A.eE(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dw(o,1)
A.uS()}catch(m){if(!(A.ao(m) instanceof A.D))throw m}},
uP(a){var s=0,r=A.bF(t.H),q,p
var $async$uP=A.bH(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.wE(A.F(a==null?null:a.tex),p,"")
q=$.aK
q=q==null?null:q.cL(p)
s=2
return A.au(A.o6(A.c([q==null?A.xM(t.H):q],t.iJ),t.H),$async$uP)
case 2:return A.bD(null,r)}})
return A.bE($async$uP,r)},
zJ(){var s,r,q=v.G,p=A.e(A.a(q.window).innerWidth),o=A.e(A.a(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.em
if(q!=null)q.bg(A.e($.B.j().width),A.e($.B.j().height))
$.f6.j().bg(A.e($.B.j().width),A.e($.B.j().height))
q=$.aK
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
Ew(){var s,r,q=$.be
if(q!=null){s=$.ad.j()
if(!s.CW.bd("pause",s.f)){s=$.ad.j()
s=s.CW.bd("secondary",s.f)}else s=!0
if(s){A.Ed(q)
return}if($.ad.j().f.a5(0,"GamepadDpadUp")){A.zz(q,-1)
return}if($.ad.j().f.a5(0,"GamepadDpadDown")){A.zz(q,1)
return}s=$.ad.j()
if(s.CW.bd("interact",s.f)){r=A.F(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.p8(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.bd("pause",s.f)){A.j8($.cn.j())
return}if($.at.j().y)return
s=$.ad.j()
if(s.CW.bd("journal",s.f))A.jb($.j_.j())
else{s=$.ad.j()
if(s.CW.bd("sleep",s.f))A.jb($.m7.j())}},
Ed(a){if(a===$.cn.j()){a.a6()
return}if(a===$.h1.j()||a instanceof A.fM||a instanceof A.hC||a instanceof A.hr){A.dI(a)
return}a.a6()},
zz(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(l.length);++r){q=A.F(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.F(A.a(v.G.document).activeElement)
o=B.a.bF(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
F6(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.a6(d9)
try{s=d9
if(!$.zs){$.wN=s
$.zs=!0}e=s
d=$.wN
if(typeof e!=="number")return e.ap()
r=(e-d)/1000
$.wN=s
e=r
if(typeof e!=="number")return e.e7()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.aM()
if(e>0.25)r=0.25
A.Fz(r)
$.ad.j().ml()
e=$.B.j()
d=$.ad.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ad.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.Ew()
if(!$.mi&&$.be==null){e=$.el
d=r
if(typeof d!=="number")return A.ve(d)
d=$.el=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e7()
c=c<10}else c=!1
if(!c)break
$.wS=$.ep()
if(!$.xo()){d=$.T.b
if(d===$.T)A.i(A.aa(""))
d.k9(0.008333333333333333*($.cJ().Q?1:20))
d=$.AH()
c=$.T.b
if(c===$.T)A.i(A.aa(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.i(A.aa(""))
d=d.ds(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){o=d[a]
B.a.l($.da,"clock:"+o.a)}d=$.AI()
c=$.T.b
if(c===$.T)A.i(A.aa(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.i(A.aa(""))
d=d.ds(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){n=d[a]
B.a.l($.da,"service:"+n.a+":"+n.b)}}A.FC()
d=$.aE.b
if(d===$.aE)A.i(A.aa(""))
c=$.T.b
if(c===$.T)A.i(A.aa(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.aq(d,!1,e)
a0.$flags=3
a1=a0
B.a.L(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.i(A.aa(""))
d.mr(a1)}A.Fy()
A.FB()
A.FA()
A.Fx(0.008333333333333333)
d=$.h0.b
if(d===$.h0)A.i(A.aa(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.c7.b
if(d===$.c7)A.i(A.aa(""))
m=d.a!==B.E
c=$.X.b
if(c===$.X)A.i(A.aa(""))
d.dr(0.008333333333333333,c)
if(m){d=$.c7.b
if(d===$.c7)A.i(A.aa(""))
d=d.e}else d=!1
if(d)A.zK(!0)
d=$.el-0.008333333333333333
$.el=d
c=p
if(typeof c!=="number")return c.aj()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.x4=A.yx($.AK(),$.ep(),l)
k=$.bp
if(k!=null){d=k
c=Math.sin($.co)
b=Math.cos($.co)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aL(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.ht($.av)
for(e=$.da.length,a=0;a<$.da.length;$.da.length===e||(0,A.u)($.da),++a){j=$.da[a]
A.Eh(k,j)}B.a.L($.da)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.c.aL(k.glR(),3))
e=$.B.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.B.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cH.j().fV($.w_(),$.co,$.f9)
e=$.aK
if(e!=null){d=$.cH.j()
c=d.a
a3=new A.I(c.a,c.b,c.c)
c=d.b
a4=new A.I(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.y7(a3,a4,new A.I(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wb(a5,b,d.a,c)
e.p3=new A.fj(a6,a7,a7.ak(0,a6),a3,a4,c,b,a5)}e=$.aK
if(e!=null)e.hC($.X.j(),$.av)
e=$.aK
if(e!=null)e.hs($.X.j(),$.av,$.w_(),$.bd.j().gek(),$.bd.j().gla(),$.tS.j().dF($.T.j().gaa().a),A.Gi($.av),$.bd.j().b)
if($.zy!==$.c7.j().a){$.zy=$.c7.j().a
$.wV=$.wV+1}e=$.aK
if(e!=null){if($.xo())d=0
else{d=s
if(typeof d!=="number")return d.n7()
d/=1000}c=$.wV
b=A.e(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.i(A.ah(d,"timeSeconds",null))
if(b<0)A.i(A.w("frame clock seeds must be non-negative",null))
e.ry=d
e.to=c
e.x1=b}e=$.aK
if(e!=null){d=$.c7.j()
c=$.wU
b=$.tS.j().dF($.T.j().gaa().a)
a8=A.zH($.av)
a9=d.a
b0=d.geh()
b1=b0>0?B.c.D(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.bB
b4=$.hh()
b5=b4.F("post_exposure")
b6=b4.F("post_bloom")
b7=b4.F("post_vignette")
b8=b4.F("post_film_grain")
b9=b4.F("post_dither")
c0=b4.F("post_depth_of_field")
c1=b4.F("post_color_grade")
c2=b4.F("post_affine_warp")
c3=b4.F("post_vertex_snap")
c4=B.c.aK(b4.F("post_quantization_bits"))
c5=b4.F("post_vhs_chroma")
c6=b4.F("post_vhs_noise")
c7=b4.F("shadow_ao_intensity")
c8=a9===B.a2?0.45:b5
b4=b4.aQ("shadow_ssdo_enable")?c7:0
if(d>=1)c9=a9===B.aF?b1:1
else c9=0
c9=Math.max(c1,c9)
if(d>=2)d=a9===B.bA?b1:1
else d=0
d=Math.max(c2,d)
d0=b2?320:0
d0=Math.max(c3,d0)
d1=b2?5:c4
d2=b3?1:0
d2=Math.max(c5,d2)
d3=b3?b1:0
d4=b3?b1:0
d4=Math.max(c6,d4)
d5=b3?b1:0
d6=b3?b1:0
d7=b3?b1:0
e.R8=new A.ku(c8,b6,b4,c0,b7,b8,b.c,a8,b9,c9,d,d0,d1,d2,d3,d4,d5,d6,d7,c)}$.f6.j().bs(A.yi($.T.j().gh4()))
i=$.aK
if(i!=null){h=i.glz()
if(h!=null){$.B.j().setAttribute("data-renderer-frame-stats",h)
e=$.B.j()
d=i.gly()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.f8("running")
A.F5()
e=$.ad.j()
e.as=e.Q=0
d=e.c
d.a5(0,"WheelUp")
d.a5(0,"WheelDown")
e.d.L(0)
e.f.L(0)
A.e(A.a(v.G.window).requestAnimationFrame(A.U(A.Ac())))}catch(d8){g=A.ao(d8)
f=A.cI(d8)
A.uV(g,f)}},
Eh(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.h2("confirm")
$.bc.j().aN("interface confirmation")
break
case"ambient-winnow":a.dP("winnow",0.28)
$.bc.j().aN("wind moving through the house")
break
case"ambient-gate":a.dP("gate",0.22)
$.bc.j().aN("distant gate")
break
case"collapse":a.h2("collapse")
$.bc.j().aN("front door shudders and collapses")
break
case"clock:tick":A.mj(a,p,"tick")
break
case"clock:chime":A.mj(a,p,"chime")
break
case"clock:cuckoo":A.mj(a,p,"cuckoo")
break
case"clock:bell":A.mj(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mj(a,q,s[2])}}}},
mj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zt,g=$.me
if(h==null||g==null)return
s=h.lp(b)
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
if(n==null)A.i(A.k("sound room missing: "+o))
m=n.d.aj(0,s.d.ak(0,p))
l=$.m9
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.i(A.k("sound emitter "+s.a+" has no cue for "+c))
a.mk(q,m,s.e,o)
return}q=$.zf
$.zf=q+1
o=A.B2(B.e_,r,r+":"+q,m,A.DZ(b,c),q,o)
q=$.av
q=A.AZ($.w_(),q)
t.gG.a(B.bk)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.i(A.k("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.i(A.k("audio listener room missing: "+q))
j=l.ha(p,q,B.bk)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.i(A.k("audio cue family missing: "+q))
k=J.aF(i)
k=k.h(i,B.d.S(A.Fp(q,o.f),k.gt(i)))
o=o.e
A.ai(j.a,t.N)
a.h3(k,new A.j(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
DZ(a,b){var s,r,q,p=$.T.j().b
for(s=new A.dR(a+":"+b),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.A8(p,q==null?r.a(q):q)}return p},
Fz(a){var s=$.wH
if(s==null)return
s.textContent=""+B.c.aK(a>0?1/a:0)+" fps"},
Fx(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zP||$.be!=null){$.mq().a=new A.j(0,0,0)
return}s=$.ad.j()
r=s.cu("moveLeft")?-1:0
if(s.cu("moveRight"))++r
q=s.cu("moveForward")?1:0
if(s.cu("moveBack"))--q
s=s.ay?s.w:new A.j(0,0,0)
p=new A.j(r,0,q).aj(0,s)
o=p.gt(0)>1?p.gav():p
$.ad.j().d_(b3)
n=$.ad.j().Q
m=$.ad.j().as
s=$.fd()
l=s.d?-1:1
k=s.e?-1:1
j=$.co
i=$.ad.j()
i=i.ay?i.x:0
h=$.fd()
g=h.d?-1:1
$.co=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.f9
h=$.ad.j()
l=h.ay?h.y:0
j=$.fd()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.f9=i
$.f9=B.c.D(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.j(i*Math.cos($.co)+j*Math.sin($.co),0,-i*Math.sin($.co)+j*Math.cos($.co)).gav().ak(0,2)
j=$.mq()
if(!isFinite(b3)||b3<0)A.i(A.ah(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.i(A.ah(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.aj(0,f.ap(0,l).ak(0,1-s))
j.a=s
d=$.j0.j().lS($.X.j(),$.av,$.ep(),s.ak(0,b3))
$.wY=d.a
if($.c7.j().a!==B.bC&&$.c7.j().a!==B.a2)$.av=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.AJ()
$.wZ=s.hO($.wZ,$.ep().b,b3)
b=s.ka(b3,c)
s=$.ep()
l=$.wZ
$.cH.j().fV(new A.j(s.a+b.a,l+b.b,s.c+b.c),$.co,$.f9)
s=$.T.j().z
a=new A.q5(s)
s=$.cH.j()
l=$.X.j()
a0=A.Gh(a,s,$.av,l,$.me)
l=a0.c
$.z3.j().hE(l)
a1=A.F(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xe($.cH.j(),$.X.j(),$.av)
break
case 1:a3=A.Aj($.cH.j(),$.X.j(),$.av)
break
case 2:a4=A.Ak($.cH.j(),$.X.j(),$.av)
break
case 3:l=$.cH.j()
k=$.X.j()
j=$.me
a5=A.Ai(l,$.av,k,j)
break
case 4:case 5:break}$.z2.j().mV($.fe().e5($.T.j().gaa().a,"status"),$.av==="living-room")
l=$.ad.j()
k=l.CW
if(k.bd(b2,l.d)||k.bd(b2,l.f)){l=$.T.j().gaa()
k=a3==null
j=k?b1:a3.a
i=B.a.a7($.aE.j().fu(21),$.aE.j().glK())
if(l.a===21&&j==="front-door"&&i){s=$.c7.j()
$.X.j()
s.hU(B.eB,A.ai(s.c,t.N))
B.a.l($.da,"collapse")
A.h6("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bc.j().aN("mantle flame extinguished")}else if($.T.j().hR(1,1)){a2.d=!0
s=$.h0.j()
s.a=a2
s.b=2
$.bc.j().aN("mantle flame catches")}}else{if(!k)l=!a3.ay
else l=!1
if(l){a3.ax=!a3.ax
s=$.bc.j()
s.aN(a3.ax?"door opens":"door closes")
s=$.aK
if(s!=null)s.cP($.X.j(),a3.b)
s=$.aK
if(s!=null)s.dS($.X.j(),a3.a)
s=$.bp
if(s!=null)s.bx()}else if(a4!=null)if(a4.w){s=$.T.j()
if(s.f.cZ(1)){a4.w=!1
$.bc.j().aN("shutter closes")}}else{a4.w=!0
$.bc.j().aN("shutter opens")}else if(s===B.cj){a6=a.e4()
s=A.C(a6)
l=t.E4
a7=A.bK(new A.H(a6,s.i("l(1)").a(new A.v2(a0)),s.i("H<1>")),l)
if(a7==null)a7=A.bK(a6,l)
if(a7!=null)$.bc.j().bN("noticed",a7.d)}else if(a5!=null){s=$.vZ()
if(!a5.x)A.i(A.k("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.aX(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.F1(a8)
s=$.bc.j()
s.bN("noticed",a9==null?"you inspect "+a8:a9)}}}s=$.h0.j()
if(s.a!=null&&s.b>0){b0=$.h0.j().a
if(b0!=null&&A.xe($.cH.j(),$.X.j(),$.av)!==b0){s=$.h0.j()
s.a=null
s.b=0}}A.Fc(b3,a0)},
Fc(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.em
if(b9==null)return
s=A.a($.B.j().getBoundingClientRect())
r=A.a6(s.width)
q=A.a6(s.height)
if(r<=0||q<=0)return
p=$.cq()
p.mU(c0)
o=$.AG()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.hi(n,m,$.at.j().y)
o=$.hh()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.X.j()
j=$.av
h=k.e.h(0,j)
k=!$.at.j().y&&$.be==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.T.j().gaa()
b=$.bd.j().b
a=$.cJ()
a0=a.y===B.cp
a1=h==null?null:h.a
if(a1==null)a1=$.av
a=a.z?$.fe().e5($.T.j().gaa().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.L(a3)
a4=A.a6(A.a(v.G.window).devicePixelRatio)
a5=B.c.ah(r*a4)
a6=B.c.ah(q*a4)
a7=a2.a
if(A.e(a7.width)!==a5||A.e(a7.height)!==a6){a7.width=a5
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
A.aL(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aL(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aL(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.lk(n,q,r)}a2.lj(q,r,new A.pV(j,i,g,f,e,d,p))
b0=r-80-24
a2.aV("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aX(b*60),0,1439)
b2=B.d.a2(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.dO(B.d.p(b4),2,"0")+":"+B.b.dO(B.d.p(b3),2,"0")+b5,b0,42)
a7.restore()
a2.aV("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bS(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.aV("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bS(a,b6-28),b7,68)
a7.restore()}a2.li(l,q,r)
a2.ll(q,r,o)
a7.restore();++b9.b
p=$.B.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ai(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
F1(a){var s,r,q,p,o=$.T.j().z.b,n=A.o(o).i("G<1,2>"),m=A.K(new A.G(o,n),n.i("n.E"))
B.a.P(m,new A.uQ())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fe().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
FC(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cJ().Q)return
if($.at.j().y||$.be!=null||$.aE.j().r!=null)return
s=$.T.j().gaa()
for(r=$.aE.j().fu(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aE.b
if(m===$.aE)A.i(A.aa(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aE.b
if(r===$.aE)A.i(A.aa(""))
l=r.bW(n)
if(!(l instanceof A.l8))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xY(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mq().a=new A.j(0,0,0)
r=$.at.b
if(r===$.at)A.i(A.aa(""))
q=n.a
r.ed(q,k)
$.cq().bq(!0,B.b5,q,k)
A.zV(n)
return}},
Fd(){var s,r,q=$.aE.j().r,p=q==null,o=p?null:q.gbm()
if(p||o==null)return
p=$.at.j()
s=q.a
r=s.a
p.ed(r,o)
$.cq().bq(!0,B.b5,r,o)
A.zV(s)
if(q.d!==B.a7)A.wR()
A.h6("restored visitor")},
zV(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.T.j().lA("stranger-17-eileen-case")
r=$.fe().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aq(q,!0,t.N):B.n
p=A.bK(r,t.N)
if(s==null||p==null)return
$.bc.j().bN("inside the case",p+" \u201c"+s.d+"\u201d")},
Fy(){var s,r,q,p,o,n
if(!$.cJ().Q)return
s=$.T.j().gaa()
r=$.m4.j().ln(s.a,s.b)
if(r.length===0)return
q=B.a.gU(r)
$.m4.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bc.j().bN(o,q.e)
n=A.FH(p)
if(n!=null)B.a.l($.da,"ambient-"+n)},
FB(){var s,r,q,p,o=$.T.j().gaa()
if(o.b<20)return
s=o.a
if(!$.v1.l(0,s))return
r=$.fe().f
r===$&&A.p()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.aq(q,!0,t.N):B.n
p=A.Ge(r,$.T.j().b,s)
if(p!=null)$.bc.j().bN("noticed",p)},
zK(a){var s,r,q,p,o
if($.wG!=null)return
s=$.T.j().gaa()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("aj<2>")
o=A.Bz(new A.nM(s.a,1-r,new A.H(new A.aj(q,p),p.i("l(n.E)").a(new A.uW()),p.i("H<n.E>")).gt(0),$.T.j().r.d,a))
if(o==null)return
A.zG(o)
A.ml("ending recorded")},
zG(a){var s,r,q
$.wG=a
$.zP=!0
$.mq().a=new A.j(0,0,0)
A.j8($.iX.j())
s=a.a
r=$.fe().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.aq(q,!0,t.N):B.n
r=A.K(r,t.N)
B.a.I(r,A.C8($.T.j().z,s))
$.iX.j().hH(a,r)},
E5(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.cc
break A}if("through-door"===a){s=B.cd
break A}if("letterbox"===a){s=B.ce
break A}s=B.ad
break A}r=$.aE.j().kv(s)
if(s===B.aw){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aK
if(p!=null)p.cP($.X.j(),q.b)
p=$.aK
if(p!=null)p.dS($.X.j(),q.a)
p=$.bp
if(p!=null)p.bx()}}if(!(r instanceof A.l6)||s===B.ad){A.um()
return}if(r.a.gbm()==null){A.wD()
A.um()
return}A.wR()},
Ec(){var s=$.aE.j().kb()
if(!(s instanceof A.ik)||s.b){A.wD()
A.um()
return}if(s.a.gbm()==null){A.wD()
A.um()
return}A.wR()},
wR(){var s,r,q,p,o,n,m,l,k,j=$.aE.j().r,i=j==null,h=i?null:j.gbm()
if(i||h==null)return
s=$.aE.j().gc_()
if(s==null){$.at.j().hG(h)
$.cq().bq(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.at.j().ee(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.at.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aR(k.a,k.b))}m.hI(l,r)
o=$.cq()
m=j.a.a
o.bq(!0,i?q:B.n,m,h)
if(!i){i=A.C(p)
k=A.bK(new A.H(p,i.i("l(1)").a(new A.uT(r)),i.i("H<1>")),t.Y)
if(k!=null){i=$.at.j()
q=k.c
i.ef(h,q)
o.bq(!0,B.n,m,h+"\n\n"+q)}}}A.zU()},
E6(a){var s,r,q,p,o,n=$.aE.j().kw(a)
if(!(n instanceof A.l7))return
s=n.c
if(!$.T.j().kd(n.b,s))return
r=s.c
s=$.at.j()
q=n.a
p=q.gbm()
s.ef(p==null?"":p,r)
o=q.gbm()
if(o==null)o=""
$.cq().bq(!0,B.n,q.a.a,o+"\n\n"+r)
A.zU()
A.ml("saved after visitor answer")},
um(){$.at.j().fQ()
$.cq().L(0)
$.ad.j().cQ($.B.j())},
zU(){var s,r,q,p,o=$.at.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.m6.j().e6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.aR(p.a,B.a.gX(p.c).p(0)))}o.hF(n,m)},
E7(a){var s,r,q,p=$.aE.j().kx(a,!0,$.m6.j())
if(p==null)return
s=$.m6.j().l9(p,B.ic)
r=$.at.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.K.bE("",!0,q)},
wD(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aK
if(s!=null)s.cP($.X.j(),r.b)
s=$.aK
if(s!=null)s.dS($.X.j(),r.a)
s=$.bp
if(s!=null)s.bx()}},
FA(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.c7.b
if(k===$.c7)A.i(A.aa(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Gi(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.bd.j().gek()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.o){n=$.bd.b
if(n===$.bd)A.i(A.aa(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.bd.b
if(n===$.bd)A.i(A.aa(""))
n=n.b>12}else n=!1
if(!n){if(o===B.A){n=$.bd.b
if(n===$.bd)A.i(A.aa(""))
n=n.b<9}else n=!1
if(!n)if(o===B.C){o=$.bd.b
if(o===$.bd)A.i(A.aa(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zH(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.j6
if(q.length===0)return 0.12
s=A.C(q)
return B.c.D(new A.H(q,s.i("l(1)").a(new A.uU()),s.i("H<1>")).gt(0)/q.length,0.12,1)},
fU:function fU(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
_.RG=null
_.xr=_.x2=_.x1=_.to=_.ry=_.rx=0
_.y1=!1
_.y2=null
_.c3=_.c2=0
_.c5=_.c4=null
_.lu=$
_.fH=_.dE=null
_.fI=0},
tE:function tE(a){this.a=a},
tF:function tF(a){this.a=a},
tG:function tG(a){this.a=a},
tA:function tA(){},
tB:function tB(){},
tC:function tC(){},
tD:function tD(){},
ty:function ty(){},
tz:function tz(){},
tu:function tu(){},
tv:function tv(){},
tw:function tw(){},
tx:function tx(){},
lI:function lI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t7:function t7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
u5:function u5(){},
u6:function u6(){},
u7:function u7(){},
ud:function ud(){},
ue:function ue(){},
uf:function uf(){},
ug:function ug(){},
uh:function uh(){},
ui:function ui(a){this.a=a},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
u8:function u8(a){this.a=a},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
uc:function uc(){},
u2:function u2(){},
u3:function u3(){},
u4:function u4(){},
tZ:function tZ(){},
u_:function u_(){},
u0:function u0(){},
u1:function u1(){},
uM:function uM(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uL:function uL(a){this.a=a},
vk:function vk(a){this.a=a},
vl:function vl(){},
vm:function vm(){},
vx:function vx(){},
vG:function vG(){},
vH:function vH(){},
vI:function vI(){},
vJ:function vJ(){},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vn:function vn(){},
vo:function vo(){},
vp:function vp(){},
vq:function vq(){},
vr:function vr(){},
vs:function vs(){},
vt:function vt(){},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
vy:function vy(){},
vz:function vz(){},
vA:function vA(){},
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
uN:function uN(){},
uO:function uO(){},
uR:function uR(a){this.a=a},
uZ:function uZ(a){this.a=a},
v2:function v2(a){this.a=a},
uQ:function uQ(){},
uW:function uW(){},
uT:function uT(a){this.a=a},
uU:function uU(){},
xY(a,b,c,d,e,f){var s=a[b]()
return s},
p8(a,b,c){var s=null
return c.a(A.xY(a,b,s,s,s,s))},
vR(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.ah(b.glE(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gE().c.a9()
o=q*16
n=o+16
B.t.cX(s,o,n,p.a)
if(l)B.t.cX(r,o,n,p.dM().a)}m=a.a
A.v(m,"uInstanceModels",new A.x(B.dP,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.x(B.dP,r))
A.v(m,"uUseInstances",B.dQ)},
Bm(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Bl(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
A8(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
FH(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b_(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
FX(a){var s,r,q,p,o,n,m,l=B.j.aG(a,null),k=t.f
if(!k.b(l))throw A.b(B.h0)
s=t.N
r=t.z
q=A.aN(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.jd[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aN(m,s,r))
else throw A.b(A.a1('text.json section "'+n+'" must be an object',null,null))}return p},
Ge(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbr(a)
s=new A.ee()
s.bP((b^274953^c)>>>0)
r=s.aP(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.w5.prototype={}
J.k2.prototype={
a4(a,b){return a===b},
gM(a){return A.i1(a)},
p(a){return"Instance of '"+A.kx(a)+"'"},
ga3(a){return A.db(A.wK(this))}}
J.k4.prototype={
p(a){return String(a)},
gM(a){return a?519018:218159},
ga3(a){return A.db(t.y)},
$iag:1,
$il:1}
J.hF.prototype={
a4(a,b){return null==b},
p(a){return"null"},
gM(a){return 0},
$iag:1,
$iar:1}
J.hI.prototype={$iae:1}
J.e_.prototype={
gM(a){return 0},
ga3(a){return B.mj},
p(a){return String(a)}}
J.kr.prototype={}
J.eS.prototype={}
J.dZ.prototype={
p(a){var s=a[$.Ao()]
if(s==null)s=a[$.hd()]
if(s==null)return this.hW(a)
return"JavaScript function for "+J.dd(s)},
$iey:1}
J.hH.prototype={
gM(a){return 0},
p(a){return String(a)}}
J.hJ.prototype={
gM(a){return 0},
p(a){return String(a)}}
J.q.prototype={
cG(a,b){return new A.aV(a,A.C(a).i("@<1>").K(b).i("aV<1,2>"))},
l(a,b){A.C(a).c.a(b)
a.$flags&1&&A.bU(a,29)
a.push(b)},
mu(a,b){var s
a.$flags&1&&A.bU(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.yf(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bU(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.C(a).i("n<1>").a(b)
a.$flags&1&&A.bU(a,"addAll",2)
if(Array.isArray(b)){this.ik(a,b)
return}for(s=J.P(b);s.m();)a.push(s.gn())},
ik(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.aw(a))
for(r=0;r<s;++r)a.push(b[r])},
L(a){a.$flags&1&&A.bU(a,"clear","clear")
a.length=0},
cc(a,b,c){var s=A.C(a)
return new A.M(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("M<1,2>"))},
W(a,b){var s,r=A.e0(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.y(a[s]))
return r.join(b)},
be(a,b,c,d){var s,r,q
d.a(b)
A.C(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.aw(a))}return r},
aW(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.aw(a))}if(c!=null)return c.$0()
throw A.b(A.cx())},
af(a,b){return this.aW(a,b,null)},
a0(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aR(a,b,c){var s=a.length
if(b>s)throw A.b(A.aY(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aY(c,b,s,"end",null))
if(b===c)return A.c([],A.C(a))
return A.c(a.slice(b,c),A.C(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cx())},
gX(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cx())},
gbr(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cx())
throw A.b(A.xT())},
N(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.aw(a))}return!1},
a7(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.aw(a))}return!0},
P(a,b){var s,r,q,p,o,n=A.C(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.bU(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.EF()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aM()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ha(b,2))
if(p>0)this.jD(a,p)},
Y(a){return this.P(a,null)},
jD(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cY(a,b){var s,r,q,p
a.$flags&2&&A.bU(a,"shuffle")
s=a.length
while(s>1){r=b.aP(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bF(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a9(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gV(a){return a.length!==0},
p(a){return A.w4(a,"[","]")},
gu(a){return new J.eq(a,a.length,A.C(a).i("eq<1>"))},
gM(a){return A.i1(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bU(a,"set length","change the length of")
if(b<0)throw A.b(A.aY(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.va(a,b))
return a[b]},
k(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.bU(a)
if(!(b>=0&&b<a.length))throw A.b(A.va(a,b))
a[b]=c},
e1(a,b){return new A.dC(a,b.i("dC<0>"))},
dI(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.db(A.C(a))},
$iR:1,
$in:1,
$iE:1}
J.k3.prototype={
mT(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kx(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.p9.prototype={}
J.eq.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.u(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia7:1}
J.fz.prototype={
G(a,b){var s
A.a6(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc9(b)
if(this.gc9(a)===s)return 0
if(this.gc9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc9(a){return a===0?1/a<0:a<0},
ah(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.b8(""+a+".toInt()"))},
ks(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.b8(""+a+".ceil()"))},
aX(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.b8(""+a+".floor()"))},
aK(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.b8(""+a+".round()"))},
D(a,b,c){if(this.G(b,c)>0)throw A.b(A.x6(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
aL(a,b){var s
if(b>20)throw A.b(A.aY(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc9(a))return"-"+s
return s},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM(a){var s,r,q,p,o=a|0
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
a2(a,b){return(a|0)===a?a/b|0:this.jO(a,b)},
jO(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.b8("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
dq(a,b){var s
if(a>0)s=this.fc(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jM(a,b){if(0>b)throw A.b(A.x6(b))
return this.fc(a,b)},
fc(a,b){return b>31?0:a>>>b},
ga3(a){return A.db(t.o)},
$ib3:1,
$it:1,
$ibf:1}
J.hE.prototype={
ga3(a){return A.db(t.S)},
$iag:1,
$ih:1}
J.k5.prototype={
ga3(a){return A.db(t.i)},
$iag:1}
J.dY.prototype={
ft(a,b){return new A.lV(b,a,0)},
hS(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hG){s=b.e
s=!(s==null?b.e=b.iI():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iQ(a,b)}},
bK(a,b,c,d){var s=A.kC(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iQ(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.AQ(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gei()
n=p.gdD()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.H(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b2(a,r))
return m},
ad(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aY(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ad(a,b,0)},
H(a,b,c){return a.substring(b,A.kC(b,c,a.length))},
b2(a,b){return this.H(a,b,null)},
bh(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.C_(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.C0(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ak(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.ex)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dO(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ak(c,s)+a},
cJ(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aY(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bF(a,b){return this.cJ(a,b,0)},
q(a,b){return A.Go(a,b,0)},
G(a,b){var s
A.r(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gM(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.db(t.N)},
gt(a){return a.length},
$iag:1,
$ib3:1,
$ipZ:1,
$if:1}
A.eb.prototype={
gu(a){return new A.hm(J.P(this.gb3()),A.o(this).i("hm<1,2>"))},
gt(a){return J.cK(this.gb3())},
gO(a){return J.ms(this.gb3())},
gV(a){return J.AT(this.gb3())},
a0(a,b){return A.o(this).y[1].a(J.mr(this.gb3(),b))},
gU(a){return A.o(this).y[1].a(J.xw(this.gb3()))},
q(a,b){return J.xv(this.gb3(),b)},
p(a){return J.dd(this.gb3())}}
A.hm.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia7:1}
A.et.prototype={
gb3(){return this.a}}
A.it.prototype={$iR:1}
A.ir.prototype={
h(a,b){return this.$ti.y[1].a(J.aT(this.a,b))},
k(a,b,c){var s=this.$ti
J.br(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.AU(this.a,b)},
l(a,b){var s=this.$ti
J.hi(this.a,s.c.a(s.y[1].a(b)))},
P(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.t8(this,b)
J.AV(this.a,s)},
$iR:1,
$iE:1}
A.t8.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.aV.prototype={
cG(a,b){return new A.aV(this.a,this.$ti.i("@<1>").K(b).i("aV<1,2>"))},
gb3(){return this.a}}
A.fA.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dR.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.qE.prototype={}
A.R.prototype={}
A.a4.prototype={
gu(a){var s=this
return new A.aH(s,s.gt(s),A.o(s).i("aH<a4.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cx())
return this.a0(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a9(r.a0(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.aw(r))}return!1},
a7(a,b){var s,r,q=this
A.o(q).i("l(a4.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a0(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.aw(q))}return!0},
N(a,b){var s,r,q=this
A.o(q).i("l(a4.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a0(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.aw(q))}return!1},
W(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.a0(0,0))
if(o!==p.gt(p))throw A.b(A.aw(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.aw(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.aw(p))}return r.charCodeAt(0)==0?r:r}},
cT(a,b){return this.hV(0,A.o(this).i("l(a4.E)").a(b))},
cc(a,b,c){var s=A.o(this)
return new A.M(this,s.K(c).i("1(a4.E)").a(b),s.i("@<a4.E>").K(c).i("M<1,2>"))},
bM(a,b){var s=A.o(this).i("a4.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bL(a){return this.bM(0,!0)},
bp(a){var s,r=this,q=A.w8(A.o(r).i("a4.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a0(0,s))
return q}}
A.ie.prototype={
giU(){var s=J.cK(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjN(){var s=J.cK(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cK(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a0(a,b){var s=this,r=s.gjN()+b
if(b<0||r>=s.giU())throw A.b(A.p_(b,s.gt(0),s,"index"))
return J.mr(s.a,r)},
bM(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aF(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xW(0,n):J.xV(0,n)}r=A.e0(s,m.a0(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a0(n,o+q))
if(m.gt(n)<l)throw A.b(A.aw(p))}return r},
bL(a){return this.bM(0,!0)}}
A.aH.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aF(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.aw(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a0(q,s);++r.c
return!0},
$ia7:1}
A.cz.prototype={
gu(a){return new A.hO(J.P(this.a),this.b,A.o(this).i("hO<1,2>"))},
gt(a){return J.cK(this.a)},
gO(a){return J.ms(this.a)},
gU(a){return this.b.$1(J.xw(this.a))},
a0(a,b){return this.b.$1(J.mr(this.a,b))}}
A.dh.prototype={$iR:1}
A.hO.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia7:1}
A.M.prototype={
gt(a){return J.cK(this.a)},
a0(a,b){return this.b.$1(J.mr(this.a,b))}}
A.H.prototype={
gu(a){return new A.S(J.P(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia7:1}
A.hw.prototype={
gu(a){return new A.hx(J.P(this.a),this.b,B.eq,this.$ti.i("hx<1,2>"))}}
A.hx.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.P(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia7:1}
A.hu.prototype={
m(){return!1},
gn(){throw A.b(A.cx())},
$ia7:1}
A.dC.prototype={
gu(a){return new A.im(J.P(this.a),this.$ti.i("im<1>"))}}
A.im.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia7:1}
A.ax.prototype={
st(a,b){throw A.b(A.b8("Cannot change the length of a fixed-length list"))},
l(a,b){A.bS(a).i("ax.E").a(b)
throw A.b(A.b8("Cannot add to a fixed-length list"))}}
A.d2.prototype={
k(a,b,c){A.o(this).i("d2.E").a(c)
throw A.b(A.b8("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.b8("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("d2.E").a(b)
throw A.b(A.b8("Cannot add to an unmodifiable list"))},
P(a,b){A.o(this).i("h(d2.E,d2.E)?").a(b)
throw A.b(A.b8("Cannot modify an unmodifiable list"))}}
A.fQ.prototype={}
A.eN.prototype={
gt(a){return J.cK(this.a)},
a0(a,b){var s=this.a,r=J.aF(s)
return r.a0(s,r.gt(s)-1-b)}}
A.iV.prototype={}
A.aR.prototype={$r:"+(1,2)",$s:1}
A.f4.prototype={$r:"+height,width(1,2)",$s:2}
A.iF.prototype={$r:"+influence,light(1,2)",$s:3}
A.aA.prototype={$r:"+(1,2,3)",$s:4}
A.b_.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iG.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iH.prototype={$r:"+(1,2,3,4)",$s:8}
A.cl.prototype={$r:"+floor,id,wall,x,z(1,2,3,4,5)",$s:9}
A.hp.prototype={}
A.fn.prototype={
gO(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
p(a){return A.w9(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.Be()},
gJ(){return new A.bR(this.lt(),A.o(this).i("bR<L<1,2>>"))},
lt(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga1(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("L<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.L(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bH(a,b,c,d){var s=A.m(c,d)
this.au(0,new A.nm(this,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),s))
return s},
$iW:1}
A.nm.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a3.prototype={
gt(a){return this.b.length},
geT(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
au(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geT()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga1(){return new A.f_(this.geT(),this.$ti.i("f_<1>"))},
gaE(){return new A.f_(this.b,this.$ti.i("f_<2>"))}}
A.f_.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f0(s,s.length,this.$ti.i("f0<1>"))}}
A.f0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia7:1}
A.cQ.prototype={
bw(){var s=this,r=s.$map
if(r==null){r=new A.hK(s.$ti.i("hK<1,2>"))
A.A1(s.a,r)
s.$map=r}return r},
R(a){return this.bw().R(a)},
h(a,b){return this.bw().h(0,b)},
au(a,b){this.$ti.i("~(1,2)").a(b)
this.bw().au(0,b)},
ga1(){var s=this.bw()
return new A.ab(s,A.o(s).i("ab<1>"))},
gaE(){var s=this.bw()
return new A.aj(s,A.o(s).i("aj<2>"))},
gt(a){return this.bw().a}}
A.hq.prototype={
l(a,b){A.o(this).c.a(b)
A.Bf()}}
A.aM.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gV(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f0(s,s.length,r.$ti.i("f0<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bp(a){return A.kb(this,this.$ti.c)}}
A.qd.prototype={
$0(){return B.c.aX(1000*this.a.now())},
$S:39}
A.i7.prototype={}
A.rD.prototype={
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
A.hW.prototype={
p(a){return"Null check operator used on a null value"}}
A.k6.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.l0.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pS.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hv.prototype={}
A.iJ.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id_:1}
A.dQ.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Am(r==null?"unknown":r)+"'"},
ga3(a){var s=A.x8(this)
return A.db(s==null?A.bS(this):s)},
$iey:1,
gn6(){return this},
$C:"$1",
$R:1,
$D:null}
A.js.prototype={$C:"$0",$R:0}
A.jt.prototype={$C:"$2",$R:2}
A.kX.prototype={}
A.kU.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Am(s)+"'"}}
A.fg.prototype={
a4(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fg))return!1
return this.$_target===b.$_target&&this.a===b.a},
gM(a){return(A.mp(this.a)^A.i1(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kx(this.a)+"'")}}
A.kH.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gV(a){return this.a!==0},
ga1(){return new A.ab(this,A.o(this).i("ab<1>"))},
gaE(){return new A.aj(this,A.o(this).i("aj<2>"))},
gJ(){return new A.G(this,A.o(this).i("G<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lF(a)},
lF(a){var s=this.d
if(s==null)return!1
return this.c8(s[this.c7(a)],a)>=0},
I(a,b){A.o(this).i("W<1,2>").a(b).au(0,new A.pi(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lG(b)},
lG(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c7(a)]
r=this.c8(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.en(s==null?q.b=q.dk():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.en(r==null?q.c=q.dk():r,b,c)}else q.lI(b,c)},
lI(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dk()
r=o.c7(a)
q=s[r]
if(q==null)s[r]=[o.dl(a,b)]
else{p=o.c8(q,a)
if(p>=0)q[p].b=b
else q.push(o.dl(a,b))}},
ce(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.ii(this.c,b)
else return this.lH(b)},
lH(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c7(a)
r=n[s]
q=o.c8(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.el(p)
if(r.length===0)delete n[s]
return p.b},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d0()}},
au(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.aw(q))
s=s.c}},
en(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dl(b,c)
else s.b=c},
ii(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.el(s)
delete a[b]
return s.b},
d0(){this.r=this.r+1&1073741823},
dl(a,b){var s=this,r=A.o(s),q=new A.pu(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d0()
return q},
el(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d0()},
c7(a){return J.aB(a)&1073741823},
c8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
p(a){return A.w9(this)},
dk(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iw7:1}
A.pi.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pu.prototype={}
A.ab.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
q(a,b){return this.a.R(b)}}
A.cg.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia7:1}
A.aj.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.af(s,s.r,s.e,this.$ti.i("af<1>"))}}
A.af.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia7:1}
A.G.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cy(s,s.r,s.e,this.$ti.i("cy<1,2>"))}}
A.cy.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$ia7:1}
A.hK.prototype={
c7(a){return A.FS(a)&1073741823},
c8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.vf.prototype={
$1(a){return this.a(a)},
$S:13}
A.vg.prototype={
$2(a,b){return this.a(a,b)},
$S:148}
A.vh.prototype={
$1(a){return this.a(A.r(a))},
$S:37}
A.bb.prototype={
ga3(a){return A.db(this.eR())},
eR(){return A.G1(this.$r,this.ct())},
p(a){return this.fj(!1)},
fj(a){var s,r,q,p,o,n=this.iY(),m=this.ct(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.yc(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iY(){var s,r=this.$s
while($.tH.length<=r)B.a.l($.tH,null)
s=$.tH[r]
if(s==null){s=this.iH()
B.a.k($.tH,r,s)}return s},
iH(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.xU(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.ef.prototype={
ct(){return[this.a,this.b]},
a4(a,b){if(b==null)return!1
return b instanceof A.ef&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gM(a){return A.cB(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.eg.prototype={
ct(){return[this.a,this.b,this.c]},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.eg&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
gM(a){var s=this
return A.cB(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.f3.prototype={
ct(){return this.a},
a4(a,b){if(b==null)return!1
return b instanceof A.f3&&this.$s===b.$s&&A.Dq(this.a,b.a)},
gM(a){return A.cB(this.$s,A.Cc(this.a),B.f,B.f,B.f,B.f)}}
A.hG.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjd(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.y_(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iI(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ft(a,b){return new A.lj(this,b,0)},
iX(a,b){var s,r=this.gjd()
if(r==null)r=A.f7(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lE(s)},
$ipZ:1,
$iCs:1}
A.lE.prototype={
gei(){return this.b.index},
gdD(){var s=this.b
return s.index+s[0].length},
$ifD:1,
$ii2:1}
A.lj.prototype={
gu(a){return new A.lk(this.a,this.b,this.c)}}
A.lk.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iX(l,s)
if(p!=null){m.d=p
o=p.gdD()
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
$ia7:1}
A.id.prototype={
gdD(){return this.a+this.c.length},
$ifD:1,
gei(){return this.a}}
A.lV.prototype={
gu(a){return new A.lW(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.id(r,s)
throw A.b(A.cx())}}
A.lW.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.id(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia7:1}
A.t9.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.aa(""))
return s}}
A.fF.prototype={
ga3(a){return B.mc},
$iag:1}
A.fE.prototype={$ifE:1}
A.hU.prototype={
j6(a,b,c,d){var s=A.aY(b,0,c,d,null)
throw A.b(s)},
ew(a,b,c,d){if(b>>>0!==b||b>c)this.j6(a,b,c,d)}}
A.kg.prototype={
ga3(a){return B.md},
$iag:1}
A.b4.prototype={
gt(a){return a.length},
f9(a,b,c,d,e){var s,r,q=a.length
this.ew(a,b,q,"start")
this.ew(a,c,q,"end")
if(b>c)throw A.b(A.aY(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.w(e,null))
r=d.length
if(r-e<s)throw A.b(A.k("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibX:1}
A.hS.prototype={
h(a,b){A.dH(b,a,a.length)
return a[b]},
k(a,b,c){A.bo(c)
a.$flags&2&&A.bU(a)
A.dH(b,a,a.length)
a[b]=c},
cX(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bU(a,5)
this.f9(a,b,c,d,0)
return},
$iR:1,
$in:1,
$iE:1}
A.hT.prototype={
k(a,b,c){A.e(c)
a.$flags&2&&A.bU(a)
A.dH(b,a,a.length)
a[b]=c},
hA(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bU(a,5)
this.f9(a,b,c,d,e)
return},
$iR:1,
$in:1,
$iE:1}
A.hR.prototype={
ga3(a){return B.me},
aR(a,b,c){return new Float32Array(a.subarray(b,A.E3(b,c,a.length)))},
$iag:1,
$inY:1}
A.kh.prototype={
ga3(a){return B.mf},
$iag:1}
A.ki.prototype={
ga3(a){return B.mg},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1}
A.kj.prototype={
ga3(a){return B.mh},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1}
A.kk.prototype={
ga3(a){return B.mi},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1}
A.kl.prototype={
ga3(a){return B.ml},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1,
$iwk:1}
A.km.prototype={
ga3(a){return B.mm},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1}
A.eG.prototype={
ga3(a){return B.mn},
gt(a){return a.length},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1,
$ieG:1}
A.hV.prototype={
ga3(a){return B.mo},
gt(a){return a.length},
h(a,b){A.dH(b,a,a.length)
return a[b]},
$iag:1,
$iih:1}
A.iA.prototype={}
A.iB.prototype={}
A.iC.prototype={}
A.iD.prototype={}
A.cE.prototype={
i(a){return A.iN(v.typeUniverse,this,a)},
K(a){return A.yT(v.typeUniverse,this,a)}}
A.lx.prototype={}
A.lZ.prototype={
p(a){return A.bG(this.a,null)}}
A.lv.prototype={
p(a){return this.a}}
A.fX.prototype={$idz:1}
A.t4.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
A.t3.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:138}
A.t5.prototype={
$0(){this.a.$0()},
$S:12}
A.t6.prototype={
$0(){this.a.$0()},
$S:12}
A.tK.prototype={
ih(a,b){if(self.setTimeout!=null)self.setTimeout(A.ha(new A.tL(this,b),0),a)
else throw A.b(A.b8("`setTimeout()` not found."))}}
A.tL.prototype={
$0(){this.b.$0()},
$S:0}
A.ll.prototype={
dt(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d3(a)
else{s=r.a
if(q.i("bW<1>").b(a))s.eu(a)
else s.cr(a)}},
du(a,b){var s=this.a
if(this.b)s.bk(new A.b1(a,b))
else s.cp(new A.b1(a,b))}}
A.tV.prototype={
$1(a){return this.a.$2(0,a)},
$S:22}
A.tW.prototype={
$2(a,b){this.a.$2(1,new A.hv(a,t.l.a(b)))},
$S:67}
A.v5.prototype={
$2(a,b){this.a(A.e(a),b)},
$S:72}
A.c6.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jG(a,b){var s,r,q
a=A.e(a)
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
o.d=null}q=o.jG(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yO
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
o.a=A.yO
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.k("sync*"))}return!1},
n9(a){var s,r,q=this
if(a instanceof A.bR){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.P(a)
return 2}},
$ia7:1}
A.bR.prototype={
gu(a){return new A.c6(this.a(),this.$ti.i("c6<1>"))}}
A.b1.prototype={
p(a){return A.y(this.a)},
$ial:1,
gbO(){return this.b}}
A.o5.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eB(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ao(p)
q=A.cI(p)
l=r
o=q
n=A.wL(l,o)
l=new A.b1(l,o)
m.b.bk(l)
return}m.b.eB(s)}},
$S:0}
A.o8.prototype={
$2(a,b){var s,r,q=this
A.f7(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bk(new A.b1(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bk(new A.b1(r,s))}},
$S:73}
A.o7.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.br(r,k.b,a)
if(J.a9(s,0)){q=A.c([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.u)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hi(q,l)}k.c.cr(q)}}else if(J.a9(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bk(new A.b1(q,o))}},
$S(){return this.d.i("ar(0)")}}
A.lp.prototype={
du(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.cp(A.EE(a,b))},
fz(a){return this.du(a,null)}}
A.ip.prototype={
dt(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.d3(r.i("1/").a(a))}}
A.dE.prototype={
lQ(a){if((this.c&15)!==6)return!0
return this.b.b.dZ(t.bl.a(this.d),a.a,t.y,t.K)},
lB(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mP(q,m,a.b,o,n,t.l)
else p=l.dZ(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ao(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
e_(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.am
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.ah(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.zI(b,s)}r=new A.as(s,c.i("as<0>"))
this.co(new A.dE(r,3,a,b,q.i("@<1>").K(c).i("dE<1,2>")))
return r},
fh(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.as($.am,c.i("as<0>"))
this.co(new A.dE(s,19,a,b,r.i("@<1>").K(c).i("dE<1,2>")))
return s},
jJ(a){this.a=this.a&1|16
this.c=a},
cq(a){this.a=a.a&30|this.a&1
this.c=a.c},
co(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.co(a)
return}r.cq(s)}A.mk(null,null,r.b,t.O.a(new A.tc(r,a)))}},
f0(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f0(a)
return}m.cq(n)}l.a=m.cB(a)
A.mk(null,null,m.b,t.O.a(new A.th(l,m)))}},
bU(){var s=t.F.a(this.c)
this.c=null
return this.cB(s)},
cB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eB(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bW<1>").b(a))A.tf(a,r,!0)
else{s=r.bU()
q.c.a(a)
r.a=8
r.c=a
A.eY(r,s)}},
cr(a){var s,r=this
r.$ti.c.a(a)
s=r.bU()
r.a=8
r.c=a
A.eY(r,s)},
iG(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bU()
q.cq(a)
A.eY(q,r)},
bk(a){var s=this.bU()
this.jJ(a)
A.eY(this,s)},
d3(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bW<1>").b(a)){this.eu(a)
return}this.ip(a)},
ip(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mk(null,null,s.b,t.O.a(new A.te(s,a)))},
eu(a){A.tf(this.$ti.i("bW<1>").a(a),this,!1)
return},
cp(a){this.a^=2
A.mk(null,null,this.b,t.O.a(new A.td(this,a)))},
$ibW:1}
A.tc.prototype={
$0(){A.eY(this.a,this.b)},
$S:0}
A.th.prototype={
$0(){A.eY(this.b,this.a.a)},
$S:0}
A.tg.prototype={
$0(){A.tf(this.a.a,this.b,!0)},
$S:0}
A.te.prototype={
$0(){this.a.cr(this.b)},
$S:0}
A.td.prototype={
$0(){this.a.bk(this.b)},
$S:0}
A.tk.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mO(t.pF.a(q.d),t.z)}catch(p){s=A.ao(p)
r=A.cI(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mJ(q)
n=k.a
n.c=new A.b1(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.e_(new A.tl(l,m),new A.tm(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tl.prototype={
$1(a){this.a.iG(this.b)},
$S:15}
A.tm.prototype={
$2(a,b){A.f7(a)
t.l.a(b)
this.a.bk(new A.b1(a,b))},
$S:78}
A.tj.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dZ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ao(l)
r=A.cI(l)
q=s
p=r
if(p==null)p=A.mJ(q)
o=this.a
o.c=new A.b1(q,p)
o.b=!0}},
$S:0}
A.ti.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lQ(s)&&p.a.e!=null){p.c=p.a.lB(s)
p.b=!1}}catch(o){r=A.ao(o)
q=A.cI(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mJ(p)
m=l.b
m.c=new A.b1(p,n)
p=m}p.b=!0}},
$S:0}
A.lm.prototype={}
A.lU.prototype={}
A.iU.prototype={$iyG:1}
A.lN.prototype={
mQ(a){var s,r,q
t.O.a(a)
try{if(B.x===$.am){a.$0()
return}A.zN(null,null,this,a,t.H)}catch(q){s=A.ao(q)
r=A.cI(q)
A.wW(A.f7(s),t.l.a(r))}},
fw(a){return new A.tI(this,t.O.a(a))},
mO(a,b){b.i("0()").a(a)
if($.am===B.x)return a.$0()
return A.zN(null,null,this,a,b)},
dZ(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.am===B.x)return a.$1(b)
return A.Fh(null,null,this,a,b,c,d)},
mP(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.am===B.x)return a.$2(b,c)
return A.Fg(null,null,this,a,b,c,d,e,f)},
h6(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tI.prototype={
$0(){return this.a.mQ(this.b)},
$S:0}
A.uX.prototype={
$0(){A.BE(this.a,this.b)},
$S:0}
A.iu.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gV(a){return this.a!==0},
ga1(){return new A.eZ(this,this.$ti.i("eZ<1>"))},
gaE(){var s=this.$ti
return A.kc(new A.eZ(this,s.i("eZ<1>")),new A.to(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iM(a)},
iM(a){var s=this.d
if(s==null)return!1
return this.bl(this.eQ(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yI(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yI(q,b)
return r}else return this.j0(b)},
j0(a){var s,r,q=this.d
if(q==null)return null
s=this.eQ(q,a)
r=this.bl(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ez(s==null?m.b=A.wo():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ez(r==null?m.c=A.wo():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wo()
p=A.mp(b)&1073741823
o=q[p]
if(o==null){A.wp(q,p,[b,c]);++m.a
m.e=null}else{n=m.bl(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
au(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eA()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.aw(m))}},
eA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.e0(i.a,null,!1,t.z)
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
ez(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wp(a,b,c)},
eQ(a,b){return a[A.mp(b)&1073741823]}}
A.to.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iw.prototype={
bl(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eZ.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iv(s,s.eA(),this.$ti.i("iv<1>"))},
q(a,b){return this.a.R(b)}}
A.iv.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aw(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia7:1}
A.ck.prototype={
eY(){return new A.ck(A.o(this).i("ck<1>"))},
gu(a){var s=this,r=new A.f1(s,s.r,A.o(s).i("f1<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gV(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iL(b)},
iL(a){var s=this.d
if(s==null)return!1
return this.bl(s[this.d7(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.k("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ey(s==null?q.b=A.wq():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ey(r==null?q.c=A.wq():r,b)}else return q.ij(b)},
ij(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wq()
r=p.d7(a)
q=s[r]
if(q==null)s[r]=[p.d6(a)]
else{if(p.bl(q,a)>=0)return!1
q.push(p.d6(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f1(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f1(s.c,b)
else return s.jC(b)},
jC(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d7(a)
r=n[s]
q=o.bl(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fl(p)
return!0},
iZ(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.aw(n))
if(!0===o)n.a5(0,r)}},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dj()}},
ey(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d6(b)
return!0},
f1(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fl(s)
delete a[b]
return!0},
dj(){this.r=this.r+1&1073741823},
d6(a){var s,r=this,q=new A.lD(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dj()
return q},
fl(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dj()},
d7(a){return J.aB(a)&1073741823},
bl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
$iy5:1}
A.lD.prototype={}
A.f1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aw(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia7:1}
A.pv.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:111}
A.V.prototype={
gu(a){return new A.aH(a,this.gt(a),A.bS(a).i("aH<V.E>"))},
a0(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gV(a){return!this.gO(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cx())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a9(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.aw(a))}return!1},
a7(a,b){var s,r
A.bS(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.b(A.aw(a))}return!0},
N(a,b){var s,r
A.bS(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.b(A.aw(a))}return!1},
W(a,b){var s
if(this.gt(a)===0)return""
s=A.wi("",a,b)
return s.charCodeAt(0)==0?s:s},
e1(a,b){return new A.dC(a,b.i("dC<0>"))},
cc(a,b,c){var s=A.bS(a)
return new A.M(a,s.K(c).i("1(V.E)").a(b),s.i("@<V.E>").K(c).i("M<1,2>"))},
l(a,b){var s
A.bS(a).i("V.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cG(a,b){return new A.aV(a,A.bS(a).i("@<V.E>").K(b).i("aV<1,2>"))},
P(a,b){var s,r=A.bS(a)
r.i("h(V.E,V.E)?").a(b)
s=b==null?A.FR():b
A.kQ(a,0,this.gt(a)-1,s,r.i("V.E"))},
lv(a,b,c,d){var s
A.bS(a).i("V.E?").a(d)
A.kC(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.w4(a,"[","]")},
$iR:1,
$in:1,
$iE:1}
A.a5.prototype={
au(a,b){var s,r,q,p=A.o(this)
p.i("~(a5.K,a5.V)").a(b)
for(s=this.ga1(),s=s.gu(s),p=p.i("a5.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga1().cc(0,new A.px(this),A.o(this).i("L<a5.K,a5.V>"))},
bH(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("L<1,2>(a5.K,a5.V)").a(b)
s=A.m(c,d)
for(r=this.ga1(),r=r.gu(r),n=n.i("a5.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
k7(a){var s,r
for(s=J.P(A.o(this).i("n<L<a5.K,a5.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga1().q(0,a)},
gt(a){var s=this.ga1()
return s.gt(s)},
gO(a){var s=this.ga1()
return s.gO(s)},
gV(a){var s=this.ga1()
return s.gV(s)},
gaE(){return new A.ix(this,A.o(this).i("ix<a5.K,a5.V>"))},
p(a){return A.w9(this)},
$iW:1}
A.px.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a5.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a5.V").a(s)
return new A.L(a,s,r.i("L<a5.K,a5.V>"))},
$S(){return A.o(this.a).i("L<a5.K,a5.V>(a5.K)")}}
A.py.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:34}
A.ix.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gV(a){var s=this.a
return s.gV(s)},
gU(a){var s=this.a,r=s.ga1()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga1()
return new A.iy(r.gu(r),s,this.$ti.i("iy<1,2>"))}}
A.iy.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia7:1}
A.iO.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.b8("Cannot modify unmodifiable map"))}}
A.fC.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
au(a,b){this.a.au(0,A.o(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gV(a){var s=this.a
return s.gV(s)},
gt(a){var s=this.a
return s.gt(s)},
ga1(){return this.a.ga1()},
p(a){return this.a.p(0)},
gaE(){return this.a.gaE()},
gJ(){return this.a.gJ()},
bH(a,b,c,d){return this.a.bH(0,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),c,d)},
$iW:1}
A.e8.prototype={}
A.dv.prototype={
gO(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
I(a,b){var s
for(s=J.P(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bn(a){var s,r,q=this.bp(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a5(0,r)}return q},
p(a){return A.w4(this,"{","}")},
a7(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
W(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dd(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.y(q.gn())
while(q.m())}else{r=s
do r=r+b+A.y(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cx())
return s.gn()},
a0(a,b){var s,r
A.kB(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.p_(b,b-r,this,"index"))},
$iR:1,
$in:1,
$ie5:1}
A.iI.prototype={
bn(a){var s,r,q,p=this,o=p.eY()
for(s=A.fS(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bp(a){var s=this.eY()
s.I(0,this)
return s}}
A.m_.prototype={
l(a,b){this.$ti.c.a(b)
return A.DC()}}
A.fR.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fS(s,s.r,A.o(s).c)},
bp(a){return this.a.bp(0)}}
A.fY.prototype={}
A.iP.prototype={}
A.lB.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jw(b):s}},
gt(a){return this.b==null?this.c.a:this.bt().length},
gO(a){return this.gt(0)===0},
gV(a){return this.gt(0)>0},
ga1(){if(this.b==null){var s=this.c
return new A.ab(s,A.o(s).i("ab<1>"))}return new A.lC(this)},
gaE(){var s,r=this
if(r.b==null){s=r.c
return new A.aj(s,A.o(s).i("aj<2>"))}return A.kc(r.bt(),new A.tq(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.r(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jV().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
au(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.au(0,b)
s=o.bt()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ul(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aw(o))}},
bt(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jV(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bt()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.L(r)
n.a=n.b=null
return n.c=s},
jw(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ul(this.a[a])
return this.b[a]=s}}
A.tq.prototype={
$1(a){return this.a.h(0,A.r(a))},
$S:37}
A.lC.prototype={
gt(a){return this.a.gt(0)},
a0(a,b){var s=this.a
if(s.b==null)s=s.ga1().a0(0,b)
else{s=s.bt()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga1()
s=s.gu(s)}else{s=s.bt()
s=new J.eq(s,s.length,A.C(s).i("eq<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tP.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:30}
A.tO.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:30}
A.jm.prototype={
lT(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kC(a4,a5,a2)
s=$.AA()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.vd(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.vd(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bk("")
g=o}else g=o
g.a+=B.b.H(a3,p,q)
c=A.az(j)
g.a+=c
p=k
continue}}throw A.b(A.a1("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.H(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xz(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.a1(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bK(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xz(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.a1(a1,a3,a5))
if(b>1)a3=B.b.bK(a3,a5,a5,b===2?"==":"=")}return a3}}
A.n4.prototype={}
A.eu.prototype={}
A.jx.prototype={}
A.jH.prototype={}
A.hL.prototype={
p(a){var s=A.jI(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k8.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.k7.prototype={
aG(a,b){var s=A.F4(a,this.glc().a)
return s},
ab(a,b){var s=A.Di(a,this.glq().b,null)
return s},
glq(){return B.ii},
glc(){return B.ih}}
A.pk.prototype={}
A.pj.prototype={}
A.ts.prototype={
hg(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.az(92)
s.a+=o
o=A.az(117)
s.a+=o
o=A.az(100)
s.a+=o
o=p>>>8&15
o=A.az(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.az(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.az(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.az(92)
s.a+=o
switch(p){case 8:o=A.az(98)
s.a+=o
break
case 9:o=A.az(116)
s.a+=o
break
case 10:o=A.az(110)
s.a+=o
break
case 12:o=A.az(102)
s.a+=o
break
case 13:o=A.az(114)
s.a+=o
break
default:o=A.az(117)
s.a+=o
o=A.az(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.az(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.az(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.az(92)
s.a+=o
o=A.az(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.H(a,r,m)},
d4(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.k8(a,null))}B.a.l(s,a)},
cU(a){var s,r,q,p,o=this
if(o.hf(a))return
o.d4(a)
try{s=o.b.$1(a)
if(!o.hf(s)){q=A.y1(a,null,o.gf_())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ao(p)
q=A.y1(a,r,o.gf_())
throw A.b(q)}},
hf(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hg(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d4(a)
q.n4(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d4(a)
r=q.n5(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
n4(a){var s,r,q=this.c
q.a+="["
s=J.aF(a)
if(s.gV(a)){this.cU(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cU(s.h(a,r))}}q.a+="]"},
n5(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e0(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.au(0,new A.tt(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hg(A.r(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cU(r[n])}p.a+="}"
return!0}}
A.tt.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:34}
A.tr.prototype={
gf_(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.l4.prototype={}
A.rI.prototype={
kB(a){return new A.tN(this.a).iN(t.U.a(a),0,null,!0)}}
A.tN.prototype={
iN(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.U.a(a)
s=A.kC(b,c,J.cK(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DT(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DS(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.d9(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.DU(o)
l.b=0
throw A.b(A.a1(m,a,p+l.c))}return n},
d9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a2(b+c,2)
r=q.d9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.d9(a,s,c,d)}return q.lb(a,b,c,d)},
lb(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bk(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.az(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.az(h)
e.a+=p
break
case 65:p=A.az(h)
e.a+=p;--d
break
default:p=A.az(h)
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
p=A.az(a[l])
e.a+=p}else{p=A.yo(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.az(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ev.prototype={
a4(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ev)if(this.a===b.a)s=this.b===b.b
return s},
gM(a){return A.cB(this.a,this.b,B.f,B.f,B.f,B.f)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
p(a){var s=this,r=A.Bj(A.Co(s)),q=A.jz(A.Cm(s)),p=A.jz(A.Ci(s)),o=A.jz(A.Cj(s)),n=A.jz(A.Cl(s)),m=A.jz(A.Cn(s)),l=A.xG(A.Ck(s)),k=s.b,j=k===0?"":A.xG(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib3:1}
A.dS.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.dS&&this.a===b.a},
gM(a){return B.d.gM(this.a)},
G(a,b){return B.d.G(this.a,t.ya.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a2(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a2(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.dO(B.d.p(o%1e6),6,"0")},
$ib3:1}
A.lu.prototype={
p(a){return this.v()},
$iA:1}
A.al.prototype={
gbO(){return A.Ch(this)}}
A.ji.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jI(s)
return"Assertion failed"}}
A.dz.prototype={}
A.cs.prototype={
gde(){return"Invalid argument"+(!this.a?"(s)":"")},
gdd(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.gde()+q+o
if(!s.a)return n
return n+s.gdd()+": "+A.jI(s.gdJ())},
gdJ(){return this.b}}
A.fI.prototype={
gdJ(){return A.wy(this.b)},
gde(){return"RangeError"},
gdd(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.k_.prototype={
gdJ(){return A.e(this.b)},
gde(){return"RangeError"},
gdd(){if(A.e(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.ii.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.l_.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fO.prototype={
p(a){return"Bad state: "+this.a}}
A.ju.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jI(s)+"."}}
A.ko.prototype={
p(a){return"Out of Memory"},
gbO(){return null},
$ial:1}
A.ib.prototype={
p(a){return"Stack Overflow"},
gbO(){return null},
$ial:1}
A.ta.prototype={
p(a){return"Exception: "+this.a}}
A.D.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.H(e,0,75)+"..."
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
k=""}return g+l+B.b.H(e,i,j)+k+"\n"+B.b.ak(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.n.prototype={
cG(a,b){return A.B8(this,A.o(this).i("n.E"),b)},
cc(a,b,c){var s=A.o(this)
return A.kc(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
cT(a,b){var s=A.o(this)
return new A.H(this,s.i("l(n.E)").a(b),s.i("H<n.E>"))},
e1(a,b){return new A.dC(this,b.i("dC<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.a9(s.gn(),b))return!0
return!1},
be(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a7(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
W(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dd(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.dd(q.gn())
while(q.m())}else{r=s
do r=r+A.y(b)+J.dd(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bM(a,b){var s=A.K(this,A.o(this).i("n.E"))
return s},
bL(a){return this.bM(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gV(a){return!this.gO(this)},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cx())
return s.gn()},
gbr(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cx())
s=r.gn()
if(r.m())throw A.b(A.xT())
return s},
aW(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cx())},
af(a,b){return this.aW(0,b,null)},
a0(a,b){var s,r
A.kB(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.p_(b,b-r,this,"index"))},
p(a){return A.BY(this,"(",")")}}
A.L.prototype={
p(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.ar.prototype={
gM(a){return A.N.prototype.gM.call(this,0)},
p(a){return"null"}}
A.N.prototype={$iN:1,
a4(a,b){return this===b},
gM(a){return A.i1(this)},
p(a){return"Instance of '"+A.kx(this)+"'"},
ga3(a){return A.xa(this)},
toString(){return this.p(this)}}
A.lX.prototype={
p(a){return""},
$id_:1}
A.ro.prototype={
glo(){var s,r=this.b
if(r==null)r=$.qf.$0()
s=r-this.a
if($.xm()===1e6)return s
return s*1000}}
A.bk.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCL:1}
A.rH.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.r(b)
s=B.b.bF(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wv(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.H(b,0,s)
q=B.b.b2(b,s+1)
p=this.a
a.k(0,A.wv(r,0,r.length,p,!0),A.wv(q,0,q.length,p,!0))}return a},
$S:158}
A.rG.prototype={
$2(a,b){throw A.b(A.a1("Illegal IPv6 address, "+a,this.a,b))},
$S:59}
A.iQ.prototype={
gfe(){var s,r,q,p,o=this,n=o.w
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
gM(a){var s,r=this,q=r.y
if(q===$){s=B.b.gM(r.gfe())
r.y!==$&&A.xg()
r.y=s
q=s}return q},
gb0(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yw(s==null?"":s)
r.z!==$&&A.xg()
q=r.z=new A.e8(s,t.hL)}return q},
ghc(){return this.b},
gdH(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ad(s,"v",1))return B.b.H(s,1,s.length-1)
return s},
gdQ(){var s=this.d
return s==null?A.yU(this.a):s},
gdR(){var s=this.f
return s==null?"":s},
gfM(){var s=this.r
return s==null?"":s},
gfN(){return this.c!=null},
gfP(){return this.f!=null},
gfO(){return this.r!=null},
p(a){return this.gfe()},
a4(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge8())if(p.c!=null===b.gfN())if(p.b===b.ghc())if(p.gdH()===b.gdH())if(p.gdQ()===b.gdQ())if(p.e===b.gh0()){r=p.f
q=r==null
if(!q===b.gfP()){if(q)r=""
if(r===b.gdR()){r=p.r
q=r==null
if(!q===b.gfO()){s=q?"":r
s=s===b.gfM()}}}}return s},
$il2:1,
ge8(){return this.a},
gh0(){return this.e}}
A.rF.prototype={
ghb(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cJ(s,"?",m)
q=s.length
if(r>=0){p=A.iR(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lq("data","",n,n,A.iR(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lR.prototype={
gfN(){return this.c>0},
gfP(){return this.f<this.r},
gfO(){return this.r<this.a.length},
ge8(){var s=this.w
return s==null?this.w=this.iJ():s},
iJ(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.H(r.a,0,q)},
ghc(){var s=this.c,r=this.b+3
return s>r?B.b.H(this.a,r,s-1):""},
gdH(){var s=this.c
return s>0?B.b.H(this.a,s,this.d):""},
gdQ(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.A9(B.b.H(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gh0(){return B.b.H(this.a,this.e,this.f)},
gdR(){var s=this.f,r=this.r
return s<r?B.b.H(this.a,s+1,r):""},
gfM(){var s=this.r,r=this.a
return s<r.length?B.b.b2(r,s+1):""},
gb0(){if(this.f>=this.r)return B.d5
return new A.e8(A.yw(this.gdR()),t.hL)},
gM(a){var s=this.x
return s==null?this.x=B.b.gM(this.a):s},
a4(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il2:1}
A.lq.prototype={}
A.pR.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vO.prototype={
$1(a){return this.a.dt(this.b.i("0/?").a(a))},
$S:22}
A.vP.prototype={
$1(a){if(a==null)return this.a.fz(new A.pR(a===undefined))
return this.a.fz(a)},
$S:22}
A.v9.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zA(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.i(A.aY(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fb(!0,"isUtc",t.y)
return new A.ev(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.bT(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c9(n),p=s.gu(n);p.m();)m.push(A.hb(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.e(a.length)
for(s=J.aF(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:61}
A.lA.prototype={
aP(a){if(a<=0||a>4294967296)throw A.b(A.ye(u.w+a))
return Math.random()*a>>>0},
aI(){return Math.random()},
$iwf:1}
A.ee.prototype={
bP(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a2(a-s,k)
r=a>>>0
a=B.d.a2(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a2(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a2(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a2(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a2(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a2(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.ba()
l.ba()
l.ba()
l.ba()},
ba(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a2(o-n+(q-p)+(m-r),4294967296)>>>0},
aP(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.ye(u.w+a))
s=a-1
if((a&s)>>>0===0){p.ba()
return(p.a&s)>>>0}do{p.ba()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aI(){var s,r=this
r.ba()
s=r.a
r.ba()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwf:1}
A.qi.prototype={
C(){var s,r=this
if(B.a.N(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.qj()))throw A.b(B.hg)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fu)}}
A.qj.prototype={
$1(a){return A.e(a)<=0},
$S:28}
A.eJ.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e4.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bn(B.lK)
if(q.a!==0)throw A.b(A.ah(q,s,"contains unknown pipeline features"))
if(this.a===B.br&&r.gV(r))throw A.b(A.ah(r,s,"safe profiles cannot install optional features"))}}
A.fq.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kv.prototype={}
A.ni.prototype={
bW(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.k("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.i(A.k("configuration state is not initialized"))
if(p.c!=null)A.i(A.k("a configuration transition is already open"))
a2.C()
n=A.hX(a2)
m=p.d
l=p.b
if(l==null)A.i(A.k("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bn(h)
f=h.bn(j)
j=n.a
h=l.a
e=j.bn(h)
d=h.bn(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.nl(m,a2,n,new A.nj(A.eP(g,k),A.eP(f,k),A.eP(e,k),A.eP(d,k),c,b,o.z!==a2.z),B.ca)
p.c=a
s=a
try{r=a1.b.cM(s.c)
q=new A.kv(s,r,B.aT)
a1.c=q
return q}catch(a0){p.fq(s)
throw a0}},
bX(a){var s,r,q,p=this
p.eE(a)
s=p.a
r=a.a
s.eF(r)
q=s.d
if(r.a!==q)A.i(A.k("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eH
s.c=null
p.b.bX(a.b)
a.c=B.eP
p.c=null},
eE(a){if(this.c!==a||a.c!==B.aT)throw A.b(A.k("coordinated transition is not open"))}}
A.fm.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nj.prototype={}
A.nl.prototype={}
A.nk.prototype={
fq(a){this.eF(a)
a.e=B.eI
this.c=null},
eF(a){if(this.c!==a||a.e!==B.ca)throw A.b(A.k("configuration transition is not open"))}}
A.ku.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.J(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",m.d,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",m.x,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.G(q,A.o(q).i("G<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.b(A.w("PostProcessState."+o+" must be >= 0: "+A.y(n),l))}q=m.as
if(q<1||q>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),l))
if(r>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(r),l))}}
A.fj.prototype={}
A.jP.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gao(0)||!k.b.gao(0)||!k.r.gao(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gao(0)||r.gca()<1e-12)A.i(A.w("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.i(A.w("DirectionalLight.intensity must be >= 0: "+A.y(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.w("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.i(A.w("PointLight.intensity must be >= 0: "+A.y(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.i(A.w("PointLight.radius must be > 0: "+A.y(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.w("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.i(A.w("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.i(A.w("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.o0.prototype={}
A.du.prototype={
a4(a,b){if(b==null)return!1
return J.ff(b)===A.xa(this)&&b instanceof A.du&&this.a===b.a&&this.b===b.b},
gM(a){return A.cB(A.xa(this),this.a,this.b,B.f,B.f,B.f)}}
A.bs.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.b7.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cA.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kp.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cv.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eB.prototype={
v(){return"HandleRejection."+this.b}}
A.jX.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.bY.prototype={
gao(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a4(a,b){if(b==null)return!1
return b instanceof A.bY&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gM(a){return A.cB(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.nG.prototype={}
A.kt.prototype={}
A.bz.prototype={}
A.vQ.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:71}
A.jh.prototype={
v(){return"AlphaMode."+this.b}}
A.hP.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.e1.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.kd("roughness",l.at)
A.kd("metallic",0)
A.kd("occlusionStrength",1)
A.kd("clearcoatStrength",0)
A.kd("clearcoatRoughness",0.2)
for(s=l.db,r=l.dx,q=[new A.aR("uvScaleU",s),new A.aR("uvScaleV",r),new A.aR("uvOffsetU",0),new A.aR("uvOffsetV",0),new A.aR("tintR",l.d),new A.aR("tintG",l.e),new A.aR("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d3.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bA.prototype={}
A.rJ.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.W[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rK())
for(p=B.a.gu(B.W),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rK.prototype={
$1(a){return t.qY.a(a).a===B.dT},
$S:24}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jY()
r=n.c
if(r!=null){q=s/14|0
for(s=A.C6(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gao(0)&&s.b.gao(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
jY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.H(B.W,a2.a(new A.pG()),a3)
if(!a4.gu(0).m())return
s=new A.H(B.W,a2.a(new A.pH()),a3)
if(s.gt(0)!==1)throw A.b(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gbr(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gbr(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a7(A.c([j,h,g,f,e,d,c],p),new A.pI()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.y(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.y(c),a1))}}}
A.pG.prototype={
$1(a){return t.qY.a(a).a===B.dT},
$S:24}
A.pH.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:24}
A.pI.prototype={
$1(a){return isFinite(A.bo(a))},
$S:5}
A.pT.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.pU()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.pU.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.fK.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kw.prototype={}
A.kG.prototype={
fS(a){var s=this
if(s.d)A.i(A.k("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.k("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cM(a){var s=this
if(s.d)A.i(A.k("resource assembler is disposed"))
if(s.a==null)throw A.b(A.k("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.k("resource assembly is already open"))
a.C()
return s.b=new A.kw(s.c,a,B.by)},
bX(a){var s,r=this
if(r.d)A.i(A.k("resource assembler is disposed"))
r.f5(a)
s=r.c
if(a.a!==s)throw A.b(A.k("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.lj
r.b=null},
dY(a){if(this.d)A.i(A.k("resource assembler is disposed"))
this.f5(a)
a.c=B.lk
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.k("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f5(a){if(this.b!==a||a.c!==B.by)throw A.b(A.k("resource assembly is not prepared"))}}
A.fs.prototype={
v(){return"DrawMode."+this.b}}
A.jo.prototype={
v(){return"BlendMode."+this.b}}
A.bw.prototype={}
A.kW.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hn.prototype={
v(){return"ColorEncoding."+this.b}}
A.fr.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.i4.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.w("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.w("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.w("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.w("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eM.prototype={
v(){return"RendererState."+this.b}}
A.aG.prototype={}
A.o2.prototype={
h_(a){var s=this.z.h(0,a)
return s==null?B.cn:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eF.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cV.prototype={}
A.bZ.prototype={}
A.pD.prototype={
cs(a){var s=this.a,r=A.C(s)
return new A.H(s,r.i("l(1)").a(new A.pE(a)),r.i("H<1>")).gt(0)}}
A.pE.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:81}
A.pB.prototype={
cN(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.u)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.i(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.R(l))throw A.b(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.zW(k),i=k.$ti,k=new A.c6(k.a(),i.i("c6<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bO(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.cN(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("aj<2>")
a=A.K(new A.aj(r,o),o.i("n.E"))
B.a.P(a,new A.pC())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jF(m,k,s))}return new A.pD(A.ai(o,t.wl))},
jF(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.G(b,A.o(b).i("G<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.C4(new A.aj(q,q.$ti.i("aj<2>")))
A.aX(q,s,r)
return new A.bZ(a,p)}}
A.pC.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:86}
A.ke.prototype={
mE(a){return this.a.bA(a)}}
A.pF.prototype={
$3(a,b,c){return new A.cA(A.e(a),A.e(b),A.ap(c))},
$S:90}
A.l1.prototype={}
A.pJ.prototype={
bc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yC(f,new A.jS(e.byteLength,B.cC,B.hx))
if(f.b!==B.h)A.i(A.k(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d7(f)
A.bm(f,p)
if(f.b!==B.h)A.i(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.W[m]
k=A.zT(l.a)
if(!o.l(0,k))continue
j=A.E9(n,k,l)
if(f.b!==B.h)A.i(A.k(g))
r.vertexAttribPointer.apply(r,[k,j,A.e(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.i(A.k(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yC(f,new A.jS(A.y9(i),B.cC,B.cB))
if(f.b!==B.h)A.i(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.D5(f,h,t.U.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l1(d,h,p,f,e.length/14|0,!1)},
dW(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.dX(B.az,a))
this.b.bA(a)
return s},
b6(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b6(a)},
dU(){var s,r,q,p
for(s=this.b.bG(),r=s.$ti,s=new A.c6(s.a(),r.i("c6<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bc(p.b))}},
gcb(){return this.b.bG().be(0,0,new A.pL(),t.S)}}
A.pK.prototype={
$3(a,b,c){return new A.bs(A.e(a),A.e(b),A.ap(c))},
$S:95}
A.pL.prototype={
$2(a,b){var s,r
A.e(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.y9(s)
return a+r+s},
$S:99}
A.bO.prototype={}
A.dy.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c1.prototype={}
A.ry.prototype={
cC(a){var s=this.a,r=A.C(s)
return new A.H(s,r.i("l(1)").a(new A.rz(a)),r.i("H<1>")).gt(0)}}
A.rz.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:101}
A.rw.prototype={
cN(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.i(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.i(A.ah(n,"handle","must be valid"))
if(s.R(o))throw A.b(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("aj<2>")
m=A.K(new A.aj(s,r),r.i("n.E"))
B.a.P(m,new A.rx())
r=t.Aj
l=A.a_(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jv(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c1(p,i))}r=l.a
return new A.ry(A.ai(j,t.e),r)},
jv(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.fg(a,r)===s.d)return B.dM
this.b.k(0,a,!0)
return B.dL}catch(q){if(A.ao(q) instanceof A.jX){s=this.b.h(0,a)===!0?B.dO:B.dN
return s}else throw q}}}
A.rx.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:107}
A.d9.prototype={}
A.kY.prototype={
aT(a){var s=this.a,r=A.wl(s,B.hC)
A.wm(s,r,0,a)
return r},
mX(a,b){var s,r,q,p=this,o=p.b,n=o.bA(a),m=A.K(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.e0(a,new A.d9(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wl(p.a,s)
o.k(0,r,q)}A.wm(p.a,q,0,b)},
lx(a){var s,r=this.b,q=r.bA(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.k("TextureStore.finalizeMips: no pixels uploaded yet for "+a.p(0)))
A.yD(this.a,s)
r.e0(a,new A.d9(p,q.b,!0))},
fg(a,b){var s
this.b.bA(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mA(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.fg(a,s)},
mI(a){var s=this.e
s===$&&A.p()
return s},
mK(a){var s=this.f
s===$&&A.p()
return s},
mC(a){var s=this.r
s===$&&A.p()
return s},
mG(a){var s=this.w
s===$&&A.p()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),q=n.a,p=q.a,o=t.h;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.L(0)
s=n.d
s===$&&A.p()
A.lf(q,s)
s=n.e
s===$&&A.p()
A.lf(q,s)
s=n.f
s===$&&A.p()
A.lf(q,s)
s=n.r
s===$&&A.p()
A.lf(q,s)
s=n.w
s===$&&A.p()
A.lf(q,s)},
dU(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aT($.xl())
i.e=i.aT($.xi())
i.f=i.aT($.xj())
i.r=i.aT($.xh())
i.w=i.aT($.xk())
for(s=i.b.bG(),r=s.$ti,s=new A.c6(s.a(),r.i("c6<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.rC()))continue
l=A.wl(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wm(p,l,k,j)}if(m.c)A.yD(p,l)
q.k(0,n.a,l)}},
gcb(){return this.b.bG().be(0,0,new A.rB(),t.S)}}
A.rA.prototype={
$3(a,b,c){return new A.b7(A.e(a),A.e(b),A.ap(c))},
$S:114}
A.rC.prototype={
$1(a){return t.Fx.a(a)==null},
$S:115}
A.rB.prototype={
$2(a,b){var s
A.e(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:118}
A.eD.prototype={
glE(){return this.b.length}}
A.jM.prototype={
ko(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qm(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].am(s,b)
o=s.kn(a,!1)
if(o.b.length!==0)return new A.jN(o,B.j9)
q=o.a
n=A.C(q)
m=new A.M(q,n.i("f(1)").a(new A.nW()),n.i("M<1,f>")).bp(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.al(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gE().a))throw A.b(A.k('RenderFeature "'+k.ga8()+'" created a pass "'+i.gE().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.P(l,new A.nX(o))
return new A.jN(o,l)},
bC(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a_()}}
A.nW.prototype={
$1(a){return t.A.a(a).a},
$S:123}
A.nX.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.dI(s,new A.nU(a)),B.a.dI(s,new A.nV(b)))},
$S:131}
A.nU.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:7}
A.nV.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:7}
A.jN.prototype={}
A.ex.prototype={
v(){return"FrameQueueState."+this.b}}
A.o1.prototype={}
A.o_.prototype={
kk(a){if(a.length===0)throw A.b(A.ah(a,"passId",null))
this.b=a
this.a.ce(a,A.A2())},
hP(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aG(p.a,p.b,p.d))}return A.aX(o,t.N,t.pH)},
bv(a,b){var s,r=this.b
if(r==null)throw A.b(A.k("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a2(a,3)*b}}
A.fT.prototype={}
A.ay.prototype={
gbJ(){var s=this.c,r=A.C(s)
return new A.H(s,r.i("l(1)").a(new A.pX()),r.i("H<1>"))},
gcj(){var s=this.c,r=A.C(s)
return new A.H(s,r.i("l(1)").a(new A.pY()),r.i("H<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pX.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:18}
A.pY.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:18}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bg.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i6.prototype={
v(){return"ResourceFormat."+this.b}}
A.cR.prototype={
v(){return"GraphStage."+this.b}}
A.aI.prototype={
fW(){var s=this
return new A.aI(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.aI&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gM(a){var s=this
return A.cB(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fJ.prototype={
v(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.ho.prototype={}
A.ky.prototype={
aw(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.D8(m.a,a.c,r.a(a.d.ga1().bL(0)),r.a(a.f),a.b)}catch(q){if(A.ao(q) instanceof A.i9){++m.e
throw q}else throw q}p=new A.ho(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bC(){var s=this.b
this.iR(new A.aj(s,A.o(s).i("aj<2>")))
s.L(0)},
iR(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bj.prototype={
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
if(!n.l(0,p))throw A.b(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.qk.prototype={}
A.b5.prototype={
ac(){var s=this
return A.xJ(B.ec,s.f,B.aq,B.aa,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)}}
A.qm.prototype={
kn(a,b){var s=this.jW(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.ql(A.ai(new A.H(r,q.i("l(1)").a(new A.qr()),q.i("H<1>")),t.A),s)},
jW(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.C(r)
p=q.i("H<1>")
o=A.K(new A.H(r,q.i("l(1)").a(new A.qq()),p),p.i("n.E"))
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
p=B.a3.bn(b)
if(p.a!==0)B.a.l(c,new A.bg(B.hN,q.a,"missing capabilities: "+p.W(0,", ")))}},
iB(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbJ(),o=J.P(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bg(B.hI,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
iD(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.qp()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbJ()
o=A.K(p,p.$ti.i("n.E"))
p=r.gcj()
n=A.K(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bg(B.b_,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbr(o).a
l=B.a.gbr(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bg(B.b_,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bg(B.b_,r.a,"resolve source and destination must match format and extent"))}},
iA(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bg(B.hL,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iF(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcj(),n=J.P(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bg(B.hH,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iC(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbJ(),p=J.P(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bg(B.cH,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bF(a,m)>s)B.a.l(c,new A.bg(B.cH,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbJ(),o=J.P(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcj(),k=J.P(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bg(B.hK,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
iz(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbJ(),o=J.P(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcj().af(0,new A.qo(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bg(B.hJ,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
iy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcj(),o=J.P(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.xU(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbJ(),p=J.P(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e0(s,!1,!1,p)
s=a.length
i=A.e0(s,!1,!1,p)
h=new A.qn(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bg(B.hM,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qr.prototype={
$1(a){t.A.a(a)
return A.wd()},
$S:7}
A.qq.prototype={
$1(a){t.A.a(a)
return A.wd()},
$S:7}
A.qp.prototype={
$1(a){return t.A.a(a).f},
$S:7}
A.qo.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:18}
A.qn.prototype={
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
r=A.fS(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.ql.prototype={}
A.lz.prototype={$ic0:1,
ga8(){return this.a},
gE(){return this.b},
ge3(){return this.c}}
A.i3.prototype={
k0(a){var s,r,q=a.c,p=q.a
if(!p.gao(0))A.i(A.w("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.i(A.w("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.i(A.w(u.u,null))
s=this.a.bA(a.a)
q=q.a9()
p=s.d.gar()
r=A.C(p)
return A.b0(new A.M(p,r.i("I(1)").a(q.gaz()),r.i("M<1,I>")))},
gfU(){return new A.bR(this.lN(),t.Br)},
lN(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gfU(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bG(),n=o.$ti,o=new A.c6(o.a(),n.i("c6<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.Z(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a9()
f=f.gar()
d=A.C(f)
r=5
return a.b=new A.lz(h,g,A.b0(new A.M(f,d.i("I(1)").a(i.gaz()),d.i("M<1,I>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCv:1}
A.qs.prototype={
$3(a,b,c){return new A.cv(A.e(a),A.e(b),A.ap(c))},
$S:149}
A.kF.prototype={
gff(){var s=this.d
return s===$?this.d=new A.rw(this.c,A.m(t.Aj,t.y)):s},
ms(a,b){var s,r
if(this.x)A.i(A.k("resource library is disposed"))
s=this.a
a.C()
r=s.b.aA(a,b)
s.c.k(0,r.a,s.bc(a))
this.f.l(0,r)
return r},
mt(a){if(this.x)A.i(A.k("resource library is disposed"))
this.a.b6(a)
this.f.a5(0,a)},
dT(a,b,c,d,e,f){var s,r
if(this.x)A.i(A.k("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.i(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.i(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aA(new A.d9(new A.jU(f,d,1,!0,e,B.aY,B.cE,a),A.e0(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.K(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.h
l=0
for(;l<r.length;r.length===q||(0,A.u)(r),++l){k=r[l]
j=o.a5(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b6(k)}r=i.r
q=A.K(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.b6(q[l])
q=i.f
o=A.K(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.b6(o[l])
s.L(0)
r.L(0)
q.L(0)
p.a_()
i.x=!0},
$iCz:1}
A.tb.prototype={}
A.lY.prototype={$ic0:1,
ga8(){return this.a},
gE(){return this.b},
ge3(){return this.c}}
A.uC.prototype={
$1(a){var s=this.a.w.a.dW(a),r=s.b!=null,q=r?s.d:s.e
return new A.i5(s.c,r,q,s.f)},
$S:152}
A.uD.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().fX(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().fX(b)
throw A.b(A.k("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:156}
A.uB.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uu.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:169}
A.uv.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bc
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.Gk(s,3,q.a.d,r)},
$S:170}
A.uA.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.up.prototype={
$0(){return this.a.at.a},
$S:47}
A.ur.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uq.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uz.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.un.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uo.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uw.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.ux.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uy.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:4}
A.ut.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.us.prototype={
$0(){return this.a.at.w},
$S:48}
A.uF.prototype={
$0(){return this.a},
$S:49}
A.tJ.prototype={}
A.lK.prototype={$iCu:1}
A.lw.prototype={$iBG:1}
A.qA.prototype={
gb1(){var s=this.w
return s==null?A.i(A.k("renderer is not initialized")):s},
fT(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bw)throw A.b(A.k("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.U)throw A.b(A.k("renderer device is context lost"))
m.e=B.li
try{m.r=s.h5()
r=m.b
q=A.hX(a)
p=r.a
if(p.a!=null)A.i(A.k("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.hX(a)
p.d=1
r.b.fS(q)
r=A.C5()
m.w=new A.kF(A.C7(s),r,A.CN(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kG()
p=new A.om(s,r)
q=A.hX(a)
o=p.d8(q,a)
r.fS(q)
p.c=new A.fG(new A.kw(0,q,B.by),o,B.ae)
m.x=p
m.y=new A.ky(s,A.m(t.N,t.CH))
m.as=a
A.zl(m)
m.e=B.bx}catch(n){s=m.y
if(s!=null)s.bC()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bw
throw n}return A.xM(t.H)},
ki(a,b){var s,r,q,p,o,n,m=this,l=null
m.jz()
m.bR()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.k("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gao(0))A.i(A.w("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gao(0)||q.gca()<1e-12)A.i(A.w("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.i(A.w("CameraView requires 0 < near < far, got "+A.y(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.i(A.w("CameraView.aspect must be finite and > 0: "+A.y(q),l))
if(!r.a.gao(0)||!r.b.gao(0)||!r.c.gao(0))A.i(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.i(A.w("FrameInput.timeSeconds must be finite: "+A.y(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ax)A.i(A.k("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ax
o.c=0
B.a.L(o.a)
s=o
try{r=m.r
if((r==null?A.i(A.k("renderer is not initialized")):r).z)m.b$=m.a.kj()
return s}catch(n){if(o.b!==B.ax)A.i(A.k("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hl
m.em()
m.ax=m.at=null
throw n}},
lr(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bR()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.k("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ax)A.i(A.k("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.kV(l,0,A.fb(m.c,"count",t.S),A.C(l).c).bM(0,!1)
m.b=B.hk
q=k
try{p=A.El(a1,r,s,q)
o=p.a.hP()
m=o.gJ().cT(0,new A.qB())
l=m.$ti
n=new A.cz(m,l.i("aG(1)").a(new A.qC()),l.i("cz<1,aG>")).be(0,B.cn,new A.qD(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcb()
g=g.c.gcb()
e=a1.w
e.a.gcb()
e.c.gcb()
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
return new A.o2(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.j_(s.e)
a1.ax=a1.at=null}},
jz(){var s,r,q,p=this
if(p.e!==B.dy)return
if(p.a.b===B.U)throw A.b(A.k("renderer context remains lost"))
s=p.w
if(s.x)A.i(A.k("resource library is disposed"))
s.a.dU()
s.c.dU()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.i(A.k("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.i(A.k("GPU resource adapter is not initialized"))
s.c=new A.fG(q.a,s.d8(A.hX(r),r),B.ae)
s=p.y
s.c=null
s.b.L(0)
A.zl(p)
p.e=B.bx},
bR(){var s=this,r=s.e
if(r!==B.bx)throw A.b(A.k("renderer is not ready: "+r.b))
if(s.a.b===B.U){s.iS()
s.e=B.dy
throw A.b(A.k("renderer context lost"))}}}
A.qB.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qC.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qD.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aG(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lH.prototype={}
A.tn.prototype={
j_(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.i(A.k(u.k))
r=s.fi(o)
if(r.b)A.i(A.k("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lH(o))}catch(q){p.da(o)}},
em(){var s=this.b$
this.b$=null
if(s!=null)this.da(s)},
iS(){var s,r,q
this.em()
s=this.a$
r=J.xX(s.slice(0),A.C(s).c)
B.a.L(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.da(r[q].b)},
da(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fi(a).a)}catch(r){}}}
A.lO.prototype={}
A.ia.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bL.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ib3:1}
A.bI.prototype={
G(a,b){var s
t.z3.a(b)
s=B.c.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ib3:1}
A.aP.prototype={}
A.vU.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:53}
A.vV.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.vS.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:55}
A.vT.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.nB.prototype={}
A.nA.prototype={}
A.jd.prototype={
gar(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.I(o,n,p),new A.I(r,n,p),new A.I(o,q,p),new A.I(r,q,p),new A.I(o,n,s),new A.I(r,n,s),new A.I(o,q,s),new A.I(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eH.prototype={}
A.fv.prototype={
v(){return"FrustumTest."+this.b}}
A.o3.prototype={
mR(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.co
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hm:B.hn}}
A.o4.prototype={
$4(a,b,c,d){var s=new A.I(a,b,c),r=new A.eH(s,d),q=Math.sqrt(s.gca())
if(q<1e-9)s=r
else{s=1/q
s=new A.eH(new A.I(a*s,b*s,c*s),d/q)}return s},
$S:57}
A.dq.prototype={
ak(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dq(h)},
h9(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.I(k,j,i):new A.I(k/h,j/h,i/h)},
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.i(A.k("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.y(k)+")"))
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
return new A.dq(h)},
gao(a){return B.t.a7(this.a,new A.pz())},
p(a){return"Mat4("+A.y(this.a)+")"}}
A.pz.prototype={
$1(a){return isFinite(A.bo(a))},
$S:5}
A.kA.prototype={
p(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.kZ.prototype={
C(){var s=this.a
if(!s.gao(0))throw A.b(A.w("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.b(A.w(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.y6(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.y6(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.I.prototype={
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.I(s*r-q*p,q*o-n*r,n*p-s*o)},
gca(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gca())},
gao(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gav(){var s=this,r=Math.sqrt(s.gca())
return r<1e-9?B.al:new A.I(s.a/r,s.b/r,s.c/r)},
a4(a,b){if(b==null)return!1
return b instanceof A.I&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gM(a){return A.cB(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.iq.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hl.prototype={
ga8(){return this.f},
am(a,b){B.a.l(a.a,new A.ay(this.f,B.L,A.c([new A.O(this.x,B.i),new A.O(this.y,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aw(new A.bj(s.e,s.b,s.c,B.y,B.d2,B.cZ)),q=A.d7(s.d),p=t.n,o=s.r===B.dY?new Float32Array(A.a0(A.c([1/s.Q,0],p))):new Float32Array(A.a0(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.ln(new A.b5(s.f,A.c([new A.O(s.x,B.i),new A.O(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iak:1}
A.ln.prototype={
an(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bQ(r,a.ai(o.r).b)
A.ba(r,o.a.ac())
A.d6(r,B.S,1,0,0,0)
A.c5(r,o.b.b)
q=t._
p=o.d
if(o.e)A.D3(r,0,q.a(p.$0()))
else A.aC(r,0,q.a(p.$0()))
A.v(r,"uSource",B.w)
A.v(r,"uTexelStep",new A.x(B.aj,o.f))
A.bm(r,o.c)
s.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jp.prototype={
ga8(){return"bloomComposite"},
am(a,b){B.a.l(a.a,new A.ay("bloomComposite",B.L,A.c([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.k)],t.C),!1))},
al(a){var s=this,r="bloomComposite",q=s.a.aw(new A.bj(r,s.b,s.c,B.y,B.jJ,B.jo)),p=A.d7(s.d),o=s.w,n=A.c([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.k)],t.C)
return A.c([new A.lo(new A.b5(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iak:1}
A.lo.prototype={
an(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bQ(r,a.cS(q.f).b)
A.D4(r,1)
A.ba(r,B.eU)
A.c5(r,q.b.b)
A.aC(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.w)
A.v(r,"uBloomStrength",new A.x(B.e,p))
A.bm(r,q.c)
s.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jB.prototype={
ga8(){return"depthPrepass"},
am(a,b){B.a.l(a.a,new A.ay("depthPrepass",B.hE,A.c([new A.O(this.w,B.k)],t.C),!1))},
al(a){var s=this,r="depthPrepass",q=s.a.aw(new A.bj(r,s.b,s.c,B.d1,B.d0,B.iM))
return A.c([new A.lr(new A.b5(r,A.c([new A.O(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iak:1}
A.lr.prototype={
an(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bQ(a1,a2.ai("sceneDepth").b)
A.ba(a1,d.a.ac())
A.d6(a1,B.aR,1,0,0,0)
A.c5(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.x(B.e,a0.Q))
A.v(a1,"uAlbedo",B.w)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gE()
A.v(a1,"uViewProjection",new A.x(B.v,new Float32Array(A.a0(a))))
A.v(a1,"uModel",new A.x(B.v,new Float32Array(A.a0(i.c.a9().a))))
A.vR(b,k,!1)
d.jK(b,j.gE().b,p)
h=q.$1(j.gE().a)
i=h.a
if(a1.b!==B.h)A.i(A.k(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.i(A.k(c))
e=A.e(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.e(o.WebGL2RenderingContext.UNSIGNED_INT):A.e(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bv(g,f)}else{if(a1.b!==B.h)A.i(A.k(c))
m.drawArraysInstanced(A.e(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bv(g,f)}}},
jK(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.x(B.e,0))
A.v(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.ac()
A.ba(q,r.go?s.e2(!1):s)},
$ia8:1,
gE(){return this.a}}
A.is.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hs.prototype={
ga8(){return this.f},
am(a,b){B.a.l(a.a,new A.ay(this.f,B.L,A.c([new A.O(this.w,B.i),new A.O(this.x,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aw(new A.bj(s.e,s.b,s.c,B.y,B.d2,B.cZ)),q=A.d7(s.d),p=t.n,o=s.r===B.dZ?new Float32Array(A.a0(A.c([1/s.z,0],p))):new Float32Array(A.a0(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.ls(new A.b5(s.f,A.c([new A.O(s.w,B.i),new A.O(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iak:1}
A.ls.prototype={
an(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bQ(r,a.ai(q.f).b)
A.ba(r,q.a.ac())
A.d6(r,B.S,1,0,0,0)
A.c5(r,q.b.b)
A.aC(r,0,t._.a(q.d.$0()))
A.v(r,"uSource",B.w)
A.v(r,"uTexelStep",new A.x(B.aj,q.e))
A.bm(r,q.c)
s.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jE.prototype={
ga8(){return"dofComposite"},
am(a,b){var s=this
B.a.l(a.a,new A.ay("dofComposite",B.L,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.k)],t.C),!1))},
al(a){var s=this,r="dofComposite",q=s.a.aw(new A.bj(r,s.b,s.c,B.y,B.jG,B.iB)),p=A.d7(s.d)
return A.c([new A.lt(new A.b5(r,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iak:1}
A.lt.prototype={
an(a){var s,r=this,q=a.ai("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bQ(n,q.b)
A.ba(n,r.a.ac())
A.c5(n,r.b.b)
s=t._
A.aC(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.w)
A.aC(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ak)
A.aC(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.dR)
A.v(n,"uNear",new A.x(B.e,o.f))
A.v(n,"uFar",new A.x(B.e,o.r))
A.v(n,"uFocusDistance",new A.x(B.e,r.w))
A.v(n,"uFocusRange",new A.x(B.e,r.x))
A.v(n,"uStrength",new A.x(B.e,a.c.e.d))
A.bm(n,r.c)
p.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jW.prototype={
ga8(){return"grade"},
am(a,b){B.a.l(a.a,new A.ay("grade",B.L,A.c([new A.O(this.r,B.i),new A.O(this.w,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aw(new A.bj("grade",s.b,s.c,B.y,B.jE,B.jp)),q=A.d7(s.d),p=s.r,o=s.w
return A.c([new A.ly(new A.b5("grade",A.c([new A.O(p,B.i),new A.O(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iak:1}
A.ly.prototype={
an(a){var s=this,r=a.ai(s.f.a),q=a.b,p=q.a
A.bQ(p,a.ai(s.r.a).b)
A.ba(p,s.a.ac())
A.c5(p,s.b.b)
A.aC(p,0,r.b)
A.v(p,"uScene",B.w)
A.aC(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ak)
A.v(p,"uLutSize",new A.x(B.e,s.e))
A.v(p,"uStrength",new A.x(B.e,a.c.e.y))
A.bm(p,s.c)
q.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.hQ.prototype={
ga8(){return"msaaResolve"},
am(a,b){B.a.l(a.a,new A.ay("msaaResolve",B.hF,A.c([new A.O(this.b,B.i),new A.O(this.c,B.k)],t.C),!0))},
al(a){var s=this.b,r=this.c
return A.c([new A.lF(new A.b5("msaaResolve",A.c([new A.O(s,B.i),new A.O(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iak:1}
A.lF.prototype={
an(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cS(this.c),j=a.cS(this.d),i=this.b
if(i.b!==B.h)A.i(A.k(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.i(A.w("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.i(A.w("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.i(A.w("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.NONE)],t.n))}A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.NONE),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.e(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia8:1,
gE(){return this.a}}
A.fh.prototype={}
A.jq.prototype={
ai(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.k('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cS(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ai(s)},
$iCt:1}
A.we.prototype={}
A.i0.prototype={
ga8(){return"present"},
am(a,b){B.a.l(a.a,new A.ay("present",B.hG,A.c([new A.O(this.f,B.i)],t.C),!1))},
al(a){var s,r=this,q=r.a.aw(new A.bj("present",r.b,r.c,B.y,B.jQ,B.iT)),p=A.d7(r.d)
r.w=p
s=r.f
return A.c([new A.lL(new A.b5("present",A.c([new A.O(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iak:1}
A.lL.prototype={
an(a){var s,r=this,q=a.cS(r.d),p=a.b,o=p.a
A.bQ(o,null)
A.ba(o,r.a.ac())
A.c5(o,r.b.b)
A.bm(o,r.c)
A.aC(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.x(B.e,s.a))
A.v(o,"uVignette",new A.x(B.e,s.e))
A.v(o,"uGrain",new A.x(B.e,s.f))
A.v(o,"uRainIntensity",new A.x(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.x(B.e,s.w))
A.v(o,"uOutputEncoding",new A.x(B.e,r.e===B.aS?1:0))
A.v(o,"uToneMap",B.dQ)
p.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.kz.prototype={
ga8(){return"ps1Quantize"},
am(a,b){B.a.l(a.a,new A.ay("ps1Quantize",B.L,A.c([new A.O(this.e,B.i),new A.O(this.f,B.k)],t.C),!1))},
al(a){var s=this,r="ps1Quantize",q=s.a.aw(new A.bj(r,s.b,s.c,B.y,B.jL,B.is)),p=A.d7(s.d),o=s.e,n=s.f
return A.c([new A.lM(new A.b5(r,A.c([new A.O(o,B.i),new A.O(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iak:1}
A.lM.prototype={
an(a){var s=this,r=a.ai(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bQ(o,a.ai(s.e.a).b)
A.ba(o,s.a.ac())
A.c5(o,s.b.b)
A.aC(o,0,r.b)
A.v(o,"uScene",B.w)
A.v(o,"uQuantizationBits",new A.x(B.e,p.as))
A.v(o,"uDitherStrength",new A.x(B.e,p.x))
A.bm(o,s.c)
q.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.eR.prototype={}
A.kO.prototype={
ga8(){return"shadow"},
am(a,b){B.a.l(a.a,new A.ay("shadowCaster",B.hD,A.c([new A.O(this.z,B.k)],t.C),!1))},
al(a){var s=this,r="shadowCaster",q=s.a.aw(new A.bj(r,s.b,s.c,B.d1,B.d0,B.jn))
return A.c([new A.lP(new A.b5(r,A.c([new A.O(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iak:1}
A.lP.prototype={
an(a){var s,r,q,p,o=this,n=a.ai("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bQ(s,n.b)
A.ba(s,o.a.ac())
A.d6(s,B.aR,1,0,0,0)
return}r=A.yn(l)
o.x.$1(r)
s=m.a
A.bQ(s,n.b)
A.ba(s,o.a.ac())
A.d6(s,B.aR,1,0,0,0)
A.c5(s,o.b.b)
A.v(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.iT(m,s[p],l,r)},
fa(a,b){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.ac()
A.ba(q,r.go?s.e2(!1):s)},
iT(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gE().r)return
s=a.a
A.v(s,"uUseInstances",B.bL)
n.f7(a,b.gE().c,d)
n.fa(a,b.gE().b)
r=b.gE()
q=n.c.$1(r.a)
A.bm(s,q.a)
s=q.b
r=q.c
if(s)a.dB(r,q.d,0)
else a.aB(r,0)}else if(b instanceof A.eD){p=b.a
if(!p.gE().r)return
if(n.jT(b,c)===B.m4)return
n.f7(a,p.gE().c,d)
A.vR(a,b,!1)
n.fa(a,p.gE().b)
s=p.gE()
q=n.c.$1(s.a)
A.bm(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dC(r,q.d,o,0)
else a.dA(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).p(0),null))},
jT(a,b){return B.m3},
f7(a,b,c){var s=a.a
A.v(s,"uModel",new A.x(B.v,new Float32Array(A.a0(b.a9().a))))
A.v(s,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a0(c.a.a))))},
$ia8:1,
gE(){return this.a}}
A.v6.prototype={
$1(a){return this.a.a=a},
$S:46}
A.v7.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:60}
A.kP.prototype={
ga8(){return"shadowedWorld"},
am(a,b){var s=this,r=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.k))
B.a.l(a.a,new A.ay("shadowedWorld",B.cG,r,!1))},
al(a){var s=this,r="shadowedWorld",q=s.a.aw(new A.bj(r,s.b,s.c,B.jN,B.jF,B.il)),p=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.k))
return A.c([new A.lQ(new A.b5(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iak:1}
A.lQ.prototype={
an(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ai("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bQ(b1,a4.b)
A.ba(b1,a2.a.ac())
s=a8.a
A.d6(b1,B.c9,1,s.c,s.b,s.a)
A.c5(b1,a2.b.b)
A.v(b1,"uAlbedo",B.w)
A.v(b1,"uNormalMap",B.mq)
A.v(b1,"uOrmMap",B.mr)
A.v(b1,"uEmissiveMap",B.ms)
A.v(b1,"uLightmap",B.mt)
s=t._
A.aC(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ak)
r=a7.d
q=t.n
A.v(b1,"uCameraPosition",new A.x(B.q,new Float32Array(A.a0(A.c([r.a,r.b,r.c],q)))))
A.v(b1,"uShadowMapTexelSize",new A.x(B.aj,new Float32Array(A.a0(A.c([1/a2.ch,1/a2.CW],q)))))
A.aC(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.dR)
A.v(b1,"uVertexSnapGrid",new A.x(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.x(B.aj,new Float32Array(A.a0(A.c([a2.ax,a2.ay],q)))))
A.v(b1,"uViewProjection",new A.x(B.v,new Float32Array(A.a0(a7.c.a))))
A.v(b1,"uView",new A.x(B.v,new Float32Array(A.a0(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a0(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.x(B.q,new Float32Array(A.a0(A.c([s.a,s.b,s.c],q)))))
A.v(b1,"uFogStart",new A.x(B.e,a8.c))
A.v(b1,"uFogEnd",new A.x(B.e,a8.d))
s=a8.e
A.v(b1,"uFogHeightFalloff",new A.x(B.e,s==null?0:s))
s=a8.f
A.v(b1,"uFogDensity",new A.x(B.e,s==null?0:s))
p=a2.Q.$0()
s=A.c([],t.cv)
r=a2.as.$0()
r=J.P(r==null?B.bc:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a3:p.a))s.push(n)}l=o?a3:p.b
if(l==null)l=B.a6
k=o?a3:p.c
if(k==null)k=B.bN
A.v(b1,"uLightPosition",new A.x(B.q,new Float32Array(A.a0(A.c([l.a,l.b,l.c],q)))))
A.v(b1,"uLightDirection",new A.x(B.q,new Float32Array(A.a0(A.c([k.a,k.b,k.c],q)))))
j=o?a3:p.d
if(j==null)j=B.V
A.v(b1,"uLightColor",new A.x(B.q,new Float32Array(A.a0(A.c([j.a,j.b,j.c],q)))))
r=o?a3:p.e
A.v(b1,"uLightIntensity",new A.x(B.e,r==null?0:r))
A.v(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
r=i==null
h=r?a3:i.a
if(h==null)h=B.a6
g=r?a3:i.b
if(g==null)g=B.V
A.v(b1,"uDirectionalDirection",new A.x(B.q,new Float32Array(A.a0(A.c([h.a,h.b,h.c],q)))))
A.v(b1,"uDirectionalColor",new A.x(B.q,new Float32Array(A.a0(A.c([g.a,g.b,g.c],q)))))
r=r?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.x(B.e,r==null?0:r))
for(r=a8.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.al
c=n?a3:e.c
if(c==null)c=B.V
m=""+f
A.v(b1,"uPointPosition"+m,new A.x(B.q,new Float32Array(A.a0(A.c([d.a,d.b,d.c],q)))))
A.v(b1,"uPointColor"+m,new A.x(B.q,new Float32Array(A.a0(A.c([c.a,c.b,c.c],q)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a3
r=e==null
d=r?a3:e.b
if(d==null)d=B.al
a=r?a3:e.c
if(a==null)a=B.bN
c=r?a3:e.d
if(c==null)c=B.V
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.x(B.q,new Float32Array(A.a0(A.c([d.a,d.b,d.c],q)))))
A.v(b1,"uDirectSpotDirection"+n,new A.x(B.q,new Float32Array(A.a0(A.c([a.a,a.b,a.c],q)))))
A.v(b1,"uDirectSpotColor"+n,new A.x(B.q,new Float32Array(A.a0(A.c([c.a,c.b,c.c],q)))))
m=r?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.x(B.e,m))
m=r?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.x(B.e,m))
m=r?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.x(B.e,Math.cos(m)))
m=r?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.x(B.e,Math.cos(m)))
r=r?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.x(B.e,r))}s=o?a3:p.f
A.v(b1,"uLightRange",new A.x(B.e,s==null?1:s))
s=o?a3:p.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.x(B.e,Math.cos(s)))
s=o?a3:p.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.x(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.x(B.q,new Float32Array(A.a0(A.c([a0.a,a0.b,a0.c],q)))))
A.v(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
A.v(b1,"uRainWetness",new A.x(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.u)(b1),++a1)a2.eK(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.u)(a6),++a1)a2.eK(a5,a6[a1],r)},
eK(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.bL)
m.f8(a,b.gE().c)
r=b.gE()
q=b.gE()
p=b.gE()
b.gE()
m.fb(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gE().a)
A.bm(s,o.a)
s=o.b
r=o.c
if(s)a.dB(r,o.d,0)
else a.aB(r,0)}else if(b instanceof A.eD){n=b.a
m.f8(a,n.gE().c)
A.vR(a,b,!0)
s=n.gE()
r=n.gE()
q=n.gE()
n.gE()
m.fb(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gE().a)
A.bm(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dC(r,o.d,q,0)
else a.dA(r,0,q)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).p(0),null))},
fb(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aC(o,0,p.a(s.e.$1(q.b)))
A.aC(o,3,p.a(s.f.$1(r)))
A.aC(o,4,p.a(s.r.$1(r)))
A.aC(o,5,p.a(s.w.$1(r)))
A.aC(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.x(B.e,0))
A.v(o,"uOpaqueCoverage",new A.x(B.e,c===B.aU?0:1))
A.v(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.x(B.q,new Float32Array(A.a0(A.c([q.d,q.e,q.f],p)))))
A.v(o,"uEmissiveStrength",new A.x(B.e,0))
A.v(o,"uUvScaleOffset",new A.x(B.mp,new Float32Array(A.a0(A.c([q.db,q.dx,0,0],p)))))
A.v(o,"uNormalStrength",new A.x(B.e,1))
A.v(o,"uRoughness",new A.x(B.e,q.at))
A.v(o,"uMetallic",new A.x(B.e,0))
A.v(o,"uClearcoatStrength",new A.x(B.e,0))
A.v(o,"uClearcoatRoughness",new A.x(B.e,0.2))
A.v(o,"uOcclusionStrength",new A.x(B.e,1))
A.v(o,"uLightmapIntensity",new A.x(B.e,0))
A.v(o,"uReceivesShadow",new A.x(B.e,1))
A:{p=r
if(B.aU===c){switch(d.a){case 0:p=B.eW
break
case 1:p=B.eV
break}break A}if(B.T===c||B.eT===c){p=s.a.ac()
break A}}A.ba(o,q.go?p.e2(!1):p)},
f8(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.x(B.v,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a0(s.dM().a))))},
$ia8:1,
gE(){return this.a}}
A.kS.prototype={
ga8(){return"ssaoOcclusion"},
am(a,b){B.a.l(a.a,new A.ay("ssaoOcclusion",B.cF,A.c([new A.O(this.w,B.k)],t.C),!1))},
al(a){var s=this,r="ssaoOcclusion",q=s.a.aw(new A.bj(r,s.b,s.c,B.y,B.jK,B.im)),p=A.d7(s.d)
return A.c([new A.lT(new A.b5(r,A.c([new A.O(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iak:1}
A.lT.prototype={
an(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bQ(m,a.ai("ssaoRaw").b)
A.ba(m,p.a.ac())
if(n<=0){A.d6(m,B.S,1,1,1,1)
return}A.d6(m,B.S,1,0,0,0)
s=p.e.$0()
A.c5(m,p.b.b)
A.aC(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.w)
A.v(m,"uNear",new A.x(B.e,s.f))
A.v(m,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.v(m,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.v(m,"uProjScaleY",new A.x(B.e,r[5]))
A.v(m,"uRadius",new A.x(B.e,p.f))
A.v(m,"uStrength",new A.x(B.e,n))
A.bm(m,p.c)
o.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.kR.prototype={
ga8(){return"ssaoBlur"},
am(a,b){B.a.l(a.a,new A.ay("ssaoBlur",B.cF,A.c([new A.O(this.y,B.i),new A.O(this.z,B.k)],t.C),!1))},
al(a){var s=this,r="ssaoBlur",q=s.a.aw(new A.bj(r,s.b,s.c,B.y,B.jz,B.jr)),p=A.d7(s.d)
return A.c([new A.lS(new A.b5(r,A.c([new A.O(s.y,B.i),new A.O(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iak:1}
A.lS.prototype={
an(a){var s,r,q=this,p=a.b,o=p.a
A.bQ(o,a.ai("ssaoBlurred").b)
A.ba(o,q.a.ac())
if(a.c.e.c<=0){A.d6(o,B.S,1,1,1,1)
return}A.d6(o,B.S,1,0,0,0)
s=q.f.$0()
A.c5(o,q.b.b)
r=t._
A.aC(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.w)
A.aC(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ak)
A.v(o,"uTexelSize",new A.x(B.aj,new Float32Array(A.a0(A.c([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.x(B.e,s.f))
A.v(o,"uFar",new A.x(B.e,s.r))
A.bm(o,q.c)
p.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.l5.prototype={
ga8(){return"vhs"},
am(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.ay("vhs",B.L,A.c([new A.O(this.r,B.i),new A.O(s,B.J),new A.O(s,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aw(new A.bj("vhs",s.b,s.c,B.y,B.jC,B.iv)),q=A.d7(s.d),p=s.r,o=s.w
return A.c([new A.m0(new A.b5("vhs",A.c([new A.O(p,B.i),new A.O(o,B.J),new A.O(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iak:1}
A.m0.prototype={
an(a){var s,r=this,q=a.ai(r.f.a),p=a.ai(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.bQ(m,p.b)
A.ba(m,r.a.ac())
A.c5(m,r.b.b)
A.aC(m,0,q.b)
A.v(m,"uScene",B.w)
A.aC(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ak)
A.v(m,"uTime",new A.x(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.x(B.e,n.at))
A.v(m,"uTrackingWeight",new A.x(B.e,l))
A.v(m,"uNoiseWeight",new A.x(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.x(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.x(B.e,n.CW))
A.v(m,"uGhostWeight",new A.x(B.e,s))
A.bm(m,r.c)
o.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.i5.prototype={}
A.lg.prototype={
ga8(){return"world"},
am(a,b){B.a.l(a.a,new A.ay("worldOpaqueTransparent",B.cG,A.c([new A.O(this.e,B.k)],t.C),!1))},
al(a){var s=this,r=s.a.aw(new A.bj("safeWorld",s.b,s.c,B.jP,B.y,B.ik)),q=s.e
return A.c([new A.m3(new A.b5("worldOpaqueTransparent",A.c([new A.O(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iak:1}
A.m3.prototype={
an(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bQ(j,a.ai(n.d).b)
A.ba(j,n.a.ac())
s=k.a
A.d6(j,B.c9,1,s.c,s.b,s.a)
A.c5(j,n.b.b)
A.v(j,"uViewProjection",new A.x(B.v,new Float32Array(A.a0(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.v(j,"uLightDir",new A.x(B.q,new Float32Array(A.a0(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.x(B.q,new Float32Array(A.a0(A.c([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.fo(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.fo(m,l[o])},
fo(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eD){s=b.a
n.fp(a,s.gE().c)
A.vR(a,b,!0)
r=n.c.$1(s.gE().a)
A.bm(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dC(p,r.d,o,0)
else a.dA(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.bL)
n.fp(a,b.gE().c)
r=n.c.$1(b.gE().a)
A.bm(q,r.a)
q=r.b
p=r.c
if(q)a.dB(p,r.d,0)
else a.aB(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).p(0),null))},
fp(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.x(B.v,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a0(s.dM().a))))},
$ia8:1,
gE(){return this.a}}
A.ng.prototype={
ck(a){var s,r,q
a.C()
s=A.a_(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.a1
else q=r===0?B.br:B.O
return new A.e4(q,s)},
ho(a){var s,r=this.ck(a).a
A:{if(B.a1===r){s=B.dr
break A}if(B.O===r){s=B.dq
break A}s=B.af
break A}return s}}
A.jT.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hy.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hB.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.jV.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jS.prototype={}
A.jU.prototype={}
A.eA.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hA.prototype={}
A.hz.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eQ.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.i9.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d1.prototype={
v(){return"UniformType."+this.b}}
A.x.prototype={}
A.fl.prototype={
v(){return"ClearMask."+this.b}}
A.jC.prototype={
aB(a,b){var s=this.a
if(s.b!==B.h)A.i(A.k(u.k))
s.a.drawArrays(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bv(a,1)},
dA(a,b,c){var s=this.a
if(s.b!==B.h)A.i(A.k(u.k))
s.a.drawArraysInstanced(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bv(a,c)},
dB(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.i(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bv(a,1)},
dC(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.i(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aL(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bv(a,c)},
$iBp:1}
A.fx.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fG.prototype={
fX(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.k("resource is not in candidate: "+a))
return s}}
A.om.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.k("GPU resource adapter is not initialized"))
return s},
cM(a){var s,r,q,p,o,n=this
if(n.e)A.i(A.k("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.k("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.k("GPU resource candidate is already open"))
s=A.hX(a)
p=n.b
r=p.cM(s)
try{q=new A.fG(r,n.d8(s,a),B.ae)
n.d=q
return q}catch(o){p.dY(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.k("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dc(s.b)
r.b.a_()
r.c=null
r.e=!0},
d8(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("H<1>")
s=new A.H(k,i.a(new A.on()),j)
for(h=s,g=J.P(h.a),h=new A.S(g,h.b,h.$ti.i("S<1>")),f=a.a;h.m();){r=g.gn()
q=A.yF(f,a.eI(r,a5))
J.hi(a3,q)
J.br(a2,r,q)}e=A.K(new A.H(k,i.a(new A.oo()),j),j.i("n.E"))
B.a.Y(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.A9(J.AW(o,11))
if(i){h=J.aT(a2,"sceneColor")
h.toString
J.br(a2,o,h)}else{h=n
if(typeof h!=="number")return h.n8()
if(h>=2){h=J.aT(a2,"sceneColor#1")
h.toString
J.br(a2,o,h)}else{m=A.yF(f,a.eI(o,a5))
J.hi(a3,m)
J.br(a2,o,m)}}}a0=A.aX(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("eN<1>"),a0=new A.eN(a0,k),a0=new A.aH(a0,a0.gt(0),k.i("aH<a4.E>")),j=a.a,i=t.V,k=k.i("a4.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wn(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eI(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hA(s,s,1,B.aX,!0)}if(a==="sceneDepth")return new A.hA(n,m,1,B.aX,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a2(n+1,2):n
p=r?B.d.a2(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hA(q,p,s,o?B.cD:B.hA,o)},
dc(a){var s,r,q,p,o,n=A.kb(t.mf.a(a).gaE(),t._)
for(n=A.fS(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wn(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ev(a){if(this.d!==a||a.c!==B.ae)throw A.b(A.k("GPU resource candidate is not open"))}}
A.on.prototype={
$1(a){return!B.b.T(A.r(a),"sceneColor#")},
$S:3}
A.oo.prototype={
$1(a){return B.b.T(A.r(a),"sceneColor#")},
$S:3}
A.fV.prototype={
v(){return"_SlotState."+this.b}}
A.eh.prototype={
sb4(a){this.c=this.$ti.i("1?").a(a)}}
A.cY.prototype={
aA(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.eh(B.aK,n.i("eh<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.nr
p.sb4(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c0(a){return this.aA(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.dX(B.cK,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dX(B.cL,a))
s=q.b
if(s===B.aL||s===B.aK)throw A.b(A.dX(B.az,a))},
bA(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
e0(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Z(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb4(b)},
b6(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.dX(B.cK,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dX(B.cL,a))
r=q.b
if(r===B.aL||r===B.aK)throw A.b(A.dX(B.hQ,a))
q.b=B.aL
q.sb4(null)
B.a.l(p.c,s);++p.e},
bG(){return new A.bR(this.lO(),this.$ti.i("bR<+(1,2)>"))},
lO(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bG(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aL||j===B.aK){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aR(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jn.prototype={
v(){return"BlendEquation."+this.b}}
A.es.prototype={
v(){return"BlendFactor."+this.b}}
A.jy.prototype={
v(){return"CullFace."+this.b}}
A.jA.prototype={
v(){return"DepthFunc."+this.b}}
A.ft.prototype={
e2(a){var s=this
return A.xJ(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b6.prototype={
v(){return"StateField."+this.b}}
A.t0.prototype={
le(a){var s,r=this.a
if(r==null)return A.hM(B.ji,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.l(0,B.bD)
if(r.b!==a.b)s.l(0,B.bE)
if(r.c!==a.c)s.l(0,B.bF)
if(r.d!==a.d)s.l(0,B.bG)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bH)
if(r.r!==a.r)s.l(0,B.bI)
if(r.w!==a.w)s.l(0,B.bJ)
if(r.x!==a.x)s.l(0,B.bK)
return s}}
A.dF.prototype={$idp:1}
A.iT.prototype={}
A.iS.prototype={}
A.m2.prototype={}
A.le.prototype={
ig(a){var s=this,r=A.a(s.a.canvas)
s.c=A.U(new A.rZ(s))
s.d=A.U(new A.t_(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
h5(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bT(A.e(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bT(A.e(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bT(A.e(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bT(A.e(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bT(A.e(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.eZ(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.hb(e.getParameter(A.e(k.WebGL2RenderingContext.RENDERER)))
m=A.hb(e.getParameter(A.e(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qi("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bT(a){var s=A.hb(this.a.getParameter(a))
return typeof s=="number"?B.c.ah(s):0},
eZ(a){var s=A.hb(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBM:1}
A.rZ.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.U},
$S:1}
A.t_.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.tR.prototype={
kj(){var s,r=this
if(r.b!==B.h)A.i(A.k(u.k))
s=r.w?A.F(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dF(new A.m2(s))},
fi(a){var s=a.a
if(!(s instanceof A.m2))throw A.b(A.ah(a,"query","is not a GPU timer query"))
return s}}
A.m1.prototype={}
A.jD.prototype={
B(){var s=this
return A.J(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jk.prototype={
glR(){var s=this.CW
return new A.aj(s,A.o(s).i("aj<2>")).be(0,0,new A.mZ(),t.i)},
hZ(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.p()
s=j.a
A.F(i.connect(A.a(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.F(r[k].connect(i))
r=j.z
r===$&&A.p()
A.a(r.gain).value=1
q=j.Q
q===$&&A.p()
A.a(q.gain).value=0.35
A.F(o.connect(r))
A.F(n.connect(r))
A.F(p.connect(r))
p=j.as
p===$&&A.p()
A.F(r.connect(p))
A.F(p.connect(q))
A.F(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.aW()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aW()
j.k3=p
A.F(q.connect(p))
A.F(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.F(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aW()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aW()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aW()
j.p1=r
A.F(p.connect(q))
A.F(i.connect(A.a(s.destination)))
j.er()},
er(){var s,r=this,q=r.k4
q===$&&A.p()
q.disconnect()
s=r.p1
s===$&&A.p()
s.disconnect()
if(r.p2){A.F(q.connect(s,0))
A.F(q.connect(s,1))
q=r.ok
q===$&&A.p()
A.F(s.connect(q,0,0))
A.F(s.connect(q,0,1))}else{s=r.ok
s===$&&A.p()
A.F(q.connect(s,0,0))
A.F(q.connect(s,1,1))}},
cf(){var s=this.a
if(A.r(s.state)==="suspended")A.a(s.resume())},
fd(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.jI.h(0,a)
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
j2(){var s,r,q,p,o,n,m,l=this.a,k=A.a6(l.sampleRate),j=B.c.aK(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aI()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dP(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aI()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.F(r.connect(q))
A.F(q.connect(p.fd(a)))
r.onended=A.U(new A.n0(r,q))
r.start()},
h2(a){return this.dP(a,1)},
h3(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.aI()*0.12)
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
l=j.eC(j.b.h1(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fW(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.U(new A.n_(j,o))
A.F(r.connect(q))
A.F(q.connect(n))
A.F(n.connect(o))
A.F(o.connect(p))
A.F(p.connect(j.fd(a)))
r.start()},
mk(a,b,c,d){return this.h3(a,b,c,1,d,null,null,null)},
eC(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
if(n.ax)m=!n.ay
else m=!1
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aA(r,q,p)},
ej(a){var s,r,q,p,o=this
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
A.F(q.connect(p))
r=o.e
r===$&&A.p()
A.F(p.connect(r))
q.onended=A.U(new A.n1(o,q,p))
q.start()
o.cy=q},
cW(a){if(this.p2===a)return
this.p2=a
this.er()},
hz(a){var s,r,q=this
q.cW(a.b===B.bW)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aM?1:0.55
r=q.c
r===$&&A.p()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.p()
A.a(s.gain).value=0.35*q.p4},
bi(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.D(c==null?q.fr:c,0,1)
q.fx=B.c.D(f==null?q.fx:f,0,1)
q.fy=B.c.D(b==null?q.fy:b,0,1)
q.go=B.c.D(a==null?q.go:a,0,1)
q.id=B.c.D(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.p()
A.a(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.p()
A.a(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.p()
A.a(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.p()
A.a(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.p()
A.a(s.gain).value=0.4*q.go
s=q.e
s===$&&A.p()
A.a(s.gain).value=0.12*q.id
s=q.y
s===$&&A.p()
A.a(s.gain).value=q.fx
s=q.c
s===$&&A.p()
s=A.a(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
ec(a){var s=null
return this.bi(s,s,s,s,a,s)},
hw(a){var s=null
return this.bi(s,s,a,s,s,s)},
hy(a){var s=null
return this.bi(s,s,s,s,s,a)},
hv(a){var s=null
return this.bi(s,a,s,s,s,s)},
hu(a){var s=null
return this.bi(a,s,s,s,s,s)},
hx(a){var s=null
return this.bi(s,s,s,a,s,s)},
ht(a){if(this.ay===a)return
this.ay=a
this.bx()},
bx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cg(p,g)
m=n==null?i.eC(h.h1(p,g)):new A.aA(n.c,n.d,n.e)
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
A.mZ.prototype={
$2(a,b){return Math.max(A.bo(a),t.jS.a(b).r)},
$S:62}
A.mY.prototype={
$1(a){return this.hh(t.q.a(a))},
hh(a){var s=0,r=A.bF(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bH(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.au(A.bT(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.au(A.bT(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.au(A.bT(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ao(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$$1,r)},
$S:63}
A.n0.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.n_.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.n1.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.fW.prototype={}
A.jl.prototype={
v(){return"AudioCategory."+this.b}}
A.mO.prototype={
i0(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.hf)
if(!B.a.a7(A.c([d.a,d.b,d.c],t.n),new A.mP()))throw A.b(B.fv)}}
A.mP.prototype={
$1(a){return isFinite(A.bo(a))},
$S:5}
A.mw.prototype={
hY(a,b){if(this.a.length===0)throw A.b(B.fk)
if(!B.a.a7(A.c([a.a,a.b,a.c],t.n),new A.mx()))throw A.b(B.fA)}}
A.mx.prototype={
$1(a){return isFinite(A.bo(a))},
$S:5}
A.hj.prototype={
C(){var s=t.n
if(B.a.N(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.my()))throw A.b(B.fR)
s=B.a.N(A.c([0,0.55,1],s),new A.mz())
if(s)throw A.b(B.h5)},
cg(a,b){var s
this.C()
if(a.ax)s=!a.ay
else s=!1
if(s)return new A.aA(-1.5,2e4,0)
if(a.ay)return new A.aA(-28,320,1)
return new A.aA(-12,1100,0.55)},
mS(a){return this.cg(a,null)}}
A.my.prototype={
$1(a){return!isFinite(A.bo(a))},
$S:5}
A.mz.prototype={
$1(a){A.bo(a)
return a<0||a>1},
$S:5}
A.mK.prototype={
i_(a){var s=A.o(a)
if(new A.ab(a,s.i("ab<1>")).N(0,new A.mM())||new A.aj(a,s.i("aj<2>")).N(0,new A.mN()))throw A.b(B.hc)}}
A.mM.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.mN.prototype={
$1(a){var s
t.a.a(a)
s=J.aF(a)
return s.gO(a)||s.N(a,new A.mL())},
$S:64}
A.mL.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.w1.prototype={}
A.mW.prototype={}
A.mQ.prototype={
i1(a,b,c){var s
for(s=this.b.gaE(),s=s.gu(s);s.m();)s.gn().C()},
ha(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.k("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.k("audio listener room missing: "+a0))
r=this.jI(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c3
e=f.cg(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
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
c=p.length===0?"unobstructed":B.a.W(p,"; ")
b=t.N
s=A.ai(s,b)
b=A.ai(q,b)
if(!isFinite(g)||g<0||g>1)A.i(B.h4)
return new A.mW(s,b,o,m,g,n,c)},
cg(a,b){return this.ha(a,b,B.bk)},
jI(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.nb
s=t.N
r=A.J([a0,0],s,t.i)
q=A.J([a0,B.X],s,t.Es)
p=A.aO([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.P(k,new A.mR(r))
j=B.a.gU(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.io(s,!0)}i=o.aJ(j)
h=A.K(i,i.$ti.i("n.E"))
B.a.P(h,new A.mS())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cd(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c3:d).mS(f)
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
p.l(0,e)}}}return B.na}}
A.mR.prototype={
$2(a,b){var s,r,q
A.r(a)
A.r(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.G(r,s)
return q===0?B.b.G(a,b):q},
$S:65}
A.mS.prototype={
$2(a,b){var s=t.T
return B.b.G(s.a(a).a,s.a(b).a)},
$S:66}
A.io.prototype={}
A.fi.prototype={}
A.nd.prototype={
fV(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.j(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AP().bz(q).gav()
p.d=q
p.c=p.b.bz(q).gav()
p.a=a}}
A.nS.prototype={}
A.nT.prototype={
ld(){return A.J(["attached",!1,"disposed",!1,"assetId",null,"activeLod",null,"itemCount",0,"meshCount",0,"cacheReferenceCount",0,"materialSlotCount",0],t.N,t.X)}}
A.nZ.prototype={}
A.k0.prototype={
cQ(a){if(this.at)return
A.p8(a,"requestPointerLock",t.X)},
ea(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.o(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.P(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mv(p,n)}this.b9()},
d_(a){var s,r,q,p,o,n,m=this
if(m.ch.d_(a))for(s=m.CW.aF("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
ml(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.P(t.ik.b(c)?c:new A.aV(c,A.C(c).i("aV<1,ae?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.r(r.mapping)!=="standard")break A
c=A.r(r.id)
q=A.r(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.P(t.dd.b(n)?n:new A.aV(n,A.C(n).i("aV<1,t>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.P(t.nx.b(d)?d:new A.aV(d,A.C(d).i("aV<1,ae>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a6(r.value))}s=new A.kT(!0,c,q,o,p)
break}}d=s==null
m=A.Dc(d?B.ma:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aF(e),q.gaq(q))
q=f.r
q.iZ(A.o(q).i("l(1)").a(new A.p1(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.n:g,h)){if(i.dK())n.l(0,h)}else n.l(0,h)}}f.e=A.hM(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aF(e),l.gaq(l))){d=r.a(f.c)
d=!B.a.N(c.aF(e),d.gaq(d))}}if(d)i.dL()},
jf(a){var s=this
A.a(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.r(a.code)))if(B.a.q(s.CW.aF("interact"),A.r(a.code))){if(s.ch.dK())s.d.l(0,A.r(a.code))}else s.d.l(0,A.r(a.code))},
jh(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a5(0,A.r(a.code))
r=this.CW
if(B.a.q(r.aF(q),A.r(a.code))){t.Q.a(s)
s=!B.a.N(r.aF(q),s.gaq(s))}else s=!1
if(s)this.ch.dL()},
jl(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.e(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aF("interact"),s)){if(r.ch.dK())r.d.l(0,s)}else r.d.l(0,s)},
jp(a){var s,r="interact",q="Mouse"+A.e(A.a(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.q(s.aF(r),q)){t.Q.a(p)
p=!B.a.N(s.aF(r),p.gaq(p))}else p=!1
if(p)this.ch.dL()},
jr(a){var s
A.a(a)
if(!this.ay)return
s=A.a6(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jn(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.eX(a,"movementX")
s.as=s.as+s.eX(a,"movementY")},
jj(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
eX(a,b){var s=A.zd(a[b])
if(s==null)s=null
return s==null?0:s},
cu(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.kb(n.c,t.N)
for(r=n.e,r=A.fS(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.N(n.CW.aF(a),s.gaq(s))},
b9(){var s=this
s.c.L(0)
s.d.L(0)
s.f.L(0)
s.r.I(0,s.e)
s.as=s.Q=0
s.ch.dV()}}
A.p1.prototype={
$1(a){return!this.a.q(0,A.r(a))},
$S:3}
A.p0.prototype={
aF(a){var s=this.a.h(0,a)
return s==null?B.n:s},
mv(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.fS(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ai(q,r))},
bd(a,b){var s,r,q
t.Q.a(b)
for(s=this.aF(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.p4.prototype={
dK(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dL(){this.c=this.b=!1
this.d=0},
d_(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dV(){this.c=this.b=!1
this.d=0}}
A.aU.prototype={}
A.pq.prototype={}
A.pn.prototype={
mp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.K(b,t.p)
B.a.I(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.w("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.eO(n,i.d,a,b,i.a,j,m)
i.eO(l,i.e,a,c,i.b,j,k)
return new A.pq(n,l,j)},
eO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("M<1,+effectiveScore,light,score(t,aU,t)>")
r=A.K(new A.M(d,k.i("+effectiveScore,light,score(t,aU,t)(1)").a(new A.po(this,c,b)),s),s.i("a4.E"))
B.a.P(r,new A.pp())
q=A.a_(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.L(0)
b.I(0,q)}}
A.po.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ap(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iG(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:68}
A.pp.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:69}
A.nC.prototype={
dr(a,b){var s,r,q,p,o,n,m,l=this
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
A.pw.prototype={
hO(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dr(b,c)},
ka(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.j(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.j(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.d0.prototype={
cO(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.cX(s,0,m,l)
n.a=s}r=b.ap(0,a).bz(d.ap(0,a)).gav()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ic(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ic(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ic(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ic(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ic(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ic(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aD(a,b,c,d,e){return this.cO(a,b,c,d,e,1,1)}}
A.j.prototype={
aj(a,b){return new A.j(this.a+b.a,this.b+b.b,this.c+b.c)},
ap(a,b){return new A.j(this.a-b.a,this.b-b.b,this.c-b.c)},
ak(a,b){return new A.j(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bz(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.j(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gav(){var s=this,r=s.gt(0)
return r<1e-9?new A.j(0,0,0):new A.j(s.a/r,s.b/r,s.c/r)}}
A.kT.prototype={}
A.lh.prototype={}
A.n6.prototype={
n3(a){var s,r,q,p,o,n=B.j.ab(a.B(),null)
this.a.fF(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.ap(s.getItem("quarantine.save.active"))
q=A.ap(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mq(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.ap(s.getItem("quarantine.save.active"))
q=A.ap(s.getItem("quarantine.save.previous"))
p=this.eH(r,a)
if(p!=null)return new A.eO(p,null)
o=this.eH(q,a)
if(o!=null)return new A.eO(o,"recovered previous save")
if(r==null)return B.lA
return B.lz}catch(n){return B.ly}},
eH(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fF(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ao(q) instanceof A.D)return null
else throw q}}}
A.jF.prototype={
i4(a,b,c,d,e){if(this.a.length===0)throw A.b(B.h2)
if(this.b<0)throw A.b(B.fw)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.aX(A.J(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.nM.prototype={}
A.fu.prototype={
B(){var s=t.N
return A.J(["kind",this.a.b],s,s)}}
A.nP.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:70}
A.bn.prototype={}
A.ks.prototype={
B(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.J(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lJ(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ap(0,new A.j(0,1.3499999999999999,0))
return!new A.jr(s,s.aj(0,new A.j(0,1.2000000000000002,0))).cK(a,r)}}
A.qc.prototype={
B(){return A.ma(this.a)}}
A.fL.prototype={
B(){return A.J(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qz.prototype={
fF(a){var s,r,q,p,o,n,m,l=B.j.aG(a,null),k=t.f
if(!k.b(l))throw A.b(B.he)
s=t.N
r=t.z
q=A.aN(l,s,r)
p=q.h(0,"version")
if(A.aJ(p))o=p!==1&&p!==2
else o=!0
if(o)A.i(A.a1("unsupported save version "+A.y(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.i(B.fE)
k=A.aN(n,s,r)
return A.yk(A.aN(m,s,r),k,2)}}
A.eO.prototype={}
A.ez.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jQ.prototype={}
A.oa.prototype={}
A.o9.prototype={
gaa(){var s=this.d
return new A.oa(s.a,s.b)},
gh4(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.J(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.J(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.J(["entryCount",m.e.b.a],k,t.S)
p=A.xS(m.c).B()
o=m.r
n=o.c
return new A.qc(A.ma(A.J(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.J(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
kd(a,b){if(!B.a.N(a.f,new A.ob(b)))return!1
this.z.kc(a,b)
return!0},
lA(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("aj<2>")
q=A.K(new A.aj(s,r),r.i("n.E"))
B.a.P(q,new A.oc())
if(q.length===0)return null
s=A.C(q)
r=s.i("H<1>")
p=A.K(new A.H(q,s.i("l(1)").a(new A.od()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dR(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cN(a,l.a,s.length-1,B.a.gX(s).p(0))
j.k(0,a,k)
return k},
k9(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.ah(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cA(B.ho)}if(n<a)this.cA(B.hp)},
hR(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cZ(a)&&s.hQ(b)},
mr(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dU){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hN(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Bm(j,A.ai(i.d,h).length)
if(a===B.dH)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.Bl(j,new A.H(r,q.i("l(1)").a(new A.oe(k)),q.i("H<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.ir,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aK(j.a/1*3)
B.a.l(r.r,new A.fN(q.a,a,b))
m=r.a
A.Bx(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.hB(B.j_)
s.r.kz(o,c)
l=B.c.aK(j.b/1*6)
if(l>0)r.cZ(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aj(i,A.o(i).i("aj<2>")).N(0,new A.of())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cA(B.hr)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cA(B.hq)},
cA(a){var s=this;++s.y
B.a.l(s.w,new A.jQ())
B.a.l(s.x,A.Bn(A.Ej(a),s.b,s.y-1))}}
A.ob.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:14}
A.oc.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:11}
A.od.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:23}
A.oe.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.rk().hK(this.a.c,a.a)},
$S:74}
A.of.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.jr.prototype={
mL(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.C(s)
q=new A.H(s,r.i("l(1)").a(new A.nh(e)),r.i("H<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cw(b,p.f)&&a==="hall"))o=n.cw(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.li(p,B.c.D(d,0,1))},
lS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eW(g,c,d)
s=h.iV(a,b,c,d)
if(s!=null){h.d=s
return h.eW(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.ks(Math.sqrt(r*r+q*q)/0.08))
o=d.ak(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jS(a,n,m,o)
l=l||j.b
m=j.a
i=h.mn(a,n)
n=i==null?n:i}h.bb(m)
return new A.kf(m,n)},
iV(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d.a,g=d.c
for(s=a.d,r=b==="landing",q=b==="hall",p=Math.sqrt(h*h+g*g)<0.001,o=0;!1;++o){n=s[o]
m=n.r
l=n.f
k=h*(m.a-l.a)+g*(m.c-l.c)
j=!1
if(q)if(this.cw(c,l)){l=k>0||p
j=l}i=!1
if(r)if(this.cw(c,m)){m=k<0||p
i=m}if(j||i)return new A.li(n,j?0:1)}return null},
eW(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ap(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.yx(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bb(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kf(n,k)},
cw(a,b){var s=a.ap(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cG(c,!1)
s=h.cD(a,b,c,new A.j(g,0,0))
r=s.a
q=d.c
p=h.cD(a,b,r,new A.j(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cG(p.a,!1)
n=c.aj(0,new A.j(0,0.35,0))
h.bb(n)
if(!h.cK(a,b)){m=h.cD(a,b,n,new A.j(g,0,0))
l=h.cD(a,b,m.a,new A.j(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.j(g,r-j,q)
h.bb(i)
if(h.cK(a,b))break}h.bb(k)
return new A.cG(k,!1)}}if(o)return new A.cG(r,!0)
if(!p.b)return new A.cG(p.a,!0)
h.bb(c)
return new A.cG(c,!0)},
cD(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cG(c,!1)
s=c.aj(0,d)
this.bb(s)
if(this.cK(a,b)){this.bb(c)
return new A.cG(c,!0)}return new A.cG(s,!1)},
bb(a){var s=a.ap(0,new A.j(0,1.3499999999999999,0))
this.a=s
this.b=s.aj(0,new A.j(0,1.2000000000000002,0))},
cK(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aC(m)
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
return!this.jP(a,m,s)},
mn(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aC(k)
for(r=k.a,q=a.aJ(r),p=J.P(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.cd(r)
m=!1
if(n!=null)if(l.h(0,n)!=null){if(o.ax)m=!o.ay
else m=!1
o=m&&this.fn(k,o,s)&&this.iO(k,o,s)}else o=m
else o=m
if(o)return n}return null},
jP(a,b,c){var s,r,q,p
for(s=a.aJ(b.a),r=J.P(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax)p=!q.ay
else p=!1
if(p&&this.fn(b,q,c))return!0}return!1},
fn(a,b,c){var s,r,q,p=a.a,o=b.aH(p),n=b.ag(p)
p=o===B.o||o===B.m
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
switch(b.aH(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
skh(a){this.a=t.a7.a(a)}}
A.nh.prototype={
$1(a){t.w8.a(a)
return!1},
$S:75}
A.kf.prototype={}
A.cG.prototype={}
A.li.prototype={}
A.hD.prototype={}
A.oE.prototype={
kz(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.M,r)
s=B.M[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hL(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.c}return r},
hM(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.d}return r},
B(){return A.J(["landedCount",this.b],t.N,t.z)}}
A.Z.prototype={}
A.jJ.prototype={
glM(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.c([r,q,p,o,n,m],t.n),new A.nR())&&o>=r&&n>=q&&m>=p}}
A.nR.prototype={
$1(a){return isFinite(A.bo(a))},
$S:5}
A.jY.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glM())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.N(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oG()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.oG.prototype={
$1(a){return!isFinite(A.bo(a))},
$S:5}
A.oF.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bu(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bu(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bu(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bu(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bu(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bu(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.Z(a,b,c,m,n,o,0,0,p),r=new A.Z(g,h,i,m,n,o,1,1,p)
this.ae(s,new A.Z(d,e,f,m,n,o,1,0,p),r)
this.ae(s,r,new A.Z(j,k,l,m,n,o,0,1,p))},
ae(a,b,c){var s=this,r=s.b
B.a.l(r,s.dh(a))
B.a.l(r,s.dh(b))
B.a.l(r,s.dh(c))},
dh(a){var s,r,q=B.a.W(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.k("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
km(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.k("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.jY(A.ai(g,t.hl),new Uint16Array(A.a0(this.b)),new A.jJ(s,r,q,p,o,n))
h.C()
return h}}
A.jK.prototype={}
A.vW.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ag.q(0,s))A.i(A.k("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:76}
A.v_.prototype={
$2(a,b){var s=t.Ez
return B.b.G(s.a(a).a,s.a(b).a)},
$S:77}
A.d8.prototype={
n2(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iz(A.Gs(new A.jY(i,new Uint16Array(A.a0(s)),A.E1(i))),l.a,l.b,l.c,A.c([],k))}}
A.iz.prototype={}
A.ew.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jL.prototype={
kt(a){var s
switch(a.a){case 0:s=A.aO(["front","street","opposite-house"],t.N)
break
case 1:s=A.aO(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aO(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aO(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aO(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
ku(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ci
break A}if("kitchen"===a||"cellar"===a){s=B.f1
break A}if("bathroom"===a){s=B.f2
break A}if("spare-room"===a){s=B.f3
break A}s=B.ci
break A}return this.kt(s)},
fJ(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bR(this.lw(d.i("f(0)").a(a),b,c,d),d.i("bR<0>"))},
lw(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fJ(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a7(0,B.ag.gaq(B.ag)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ag.q(0,j))throw A.b(A.k("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ed.prototype={
fB(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uH.prototype={
$1(a){var s=this
return t.xT.a(a).fB(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:27}
A.uG.prototype={
$1(a){return t.xT.a(a).fB(0,(this.a+this.b)*0.5,this.c)},
$S:27}
A.di.prototype={
v(){return"FocusKind."+this.b}}
A.dU.prototype={}
A.qw.prototype={}
A.tT.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:79}
A.uY.prototype={
$1(a){return B.d.D(B.c.aK(a*this.a),0,255)},
$S:80}
A.ec.prototype={}
A.oC.prototype={
iu(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=t.s,r=t.yH,q=t.E,p=this.b,o=0;o<8;++o){n=B.io[o].a
m=n[1]
l=n[3]
k=n[4]
if(m==="hall"||m==="landing")j=A.c([],q)
else{j=m==="bathroom"
i=j?B.A:B.o
j=A.c([new A.dD(m+"-north-aperture",i,1.7,1,1.4,1.5,j,!0)],q)}i=A.c([],s)
h=n[1]
B.a.l(p,new A.cD(m,B.f4,new A.j(4.8,3.2,5),new A.j(l,0,k),j,i,A.c([new A.fB("showcase-"+h+"-light",h+" test light",new A.j(2.4,2.2,0.35),!1,!1,null)],r),B.j1,n[2],n[0],"ceiling-plaster",B.j2))}},
it(){var s,r,q,p,o,n=null,m="hall",l="outside",k="kit-internal-four-panel-door",j="kitchen",i="landing",h="bathroom"
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=B.jH.h(0,p.a)
if(o==null)o=B.n
B.a.I(p.f,o)}B.a.I(this.c,A.c([A.cX(m,l,"kit-front-door-recessed",!0,B.o,B.m,2.6,!1,"front-door",!1,1.9,0,!0,!1,!1,1),A.cX(m,"living-room",k,!1,B.C,B.A,2.6,!1,"hall-living",!1,2,2,!0,!1,!1,1.2),A.cX(m,j,k,!1,B.A,B.C,2.6,!1,"hall-kitchen",!1,2,2,!0,!1,!1,1.2),A.cX(j,"cellar","kit-cellar-door-grille",!1,B.A,B.C,2.6,!1,"kitchen-living",!1,2,2,!0,!1,!1,1.2),A.cX(m,i,n,!1,B.m,B.o,2.6,!1,"hall-landing",!1,2,2,!0,!1,!1,1.2),A.cX(i,"bedroom",k,!1,B.C,B.A,2.6,!1,"landing-bedroom",!1,2,2,!0,!1,!1,1.2),A.cX(i,h,k,!1,B.A,B.C,2.6,!1,"landing-bathroom",!1,2,2,!0,!1,!1,1.2),A.cX(j,h,k,!1,B.m,B.o,2.6,!1,"kitchen-bathroom",!1,2,2,!0,!1,!1,1.2),A.cX("cellar",l,n,!0,B.m,B.o,2.6,!1,"cellar-service",!1,2,0,!0,!1,!1,1),A.cX("bedroom",l,n,!0,B.m,B.o,2.6,!1,"bedroom-service",!1,2,0,!0,!1,!1,1),A.cX("spare-room",l,n,!0,B.m,B.o,2.6,!1,"spare-service",!1,2,0,!0,!1,!1,1)],t.J))},
im(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oU(1.5),a4=this.b,a5=A.aq(a4,!0,t.W)
B.a.L(a4)
s=A.c([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.u)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.c([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.u)(i),++g){f=i[g]
j.push(new A.dD(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.c([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.u)(h),++g){d=h[g]
i.push(new A.fB(d.a,d.b,a3.$1(d.c),d.d,!1,d.f))}h=A.c([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.u)(e),++g){b=e[g]
h.push(new A.hZ(b.a,b.b,a3.$1(b.c)))}s.push(new A.cD(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.aq(a4,!0,t.T)
B.a.L(a4)
s=A.c([],t.J)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bv(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,!1,a0.Q,!1,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;!1;++a1){if(!(a1<0))return A.d(a4,a1)
a2=a4[a1]
B.a.k(a4,a1,new A.e7(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
io(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.oV(),a7=this.b,a8=A.aq(a7,!0,t.W)
B.a.L(a7)
s=A.c([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.u)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.c([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.u)(h),++f){e=h[f]
i.push(new A.dD(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.c([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.u)(g),++f){c=g[f]
h.push(new A.fB(c.a,c.b,a6.$1(c.c),c.d,!1,c.f))}g=A.c([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.u)(d),++f){a=d[f]
g.push(new A.hZ(a.a,a.b,a6.$1(a.c)))}d=A.c([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.u)(b),++f){a1=b[f]
d.push(new A.jG(a1.a,a1.b.ak(0,1.5)))}s.push(new A.cD(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.I(a7,s)
a7=this.c
a2=A.aq(a7,!0,t.T)
B.a.L(a7)
s=A.c([],t.J)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bv(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,!1,a3.Q,!1,a3.at,a3.ax,a3.ay))}B.a.I(a7,s)
for(a7=this.d,s=t.n,a4=0;!1;++a4){if(!(a4<0))return A.d(a7,a4)
a5=a7[a4]
r=A.c([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.u)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.e7(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
j1(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.k("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.k("duplicate portal "+n))
q.k(0,n,m)}},
jZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.b(A.k("3D room overlap: "+n.a+" and "+m.a))}},
jX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.m(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.u)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fm(o,i,h,g,f,e)
a5.ep(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.u)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.k(l+" references invalid portal "+d))
i=c.aH(l)
h=c.ag(l)
g=c.w
f=c.x
a5.fm(o,i,h,g,0,f)
a5.ep(a6,l,c.aH(l),c.ag(l),c.ag(l)+g,0,f)}}for(s=new A.G(a6,a6.$ti.i("G<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c9(a)
r.P(a,new A.oW())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.b(A.k("overlapping apertures on "+b.a))}}},
fm(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.o||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.k("aperture outside "+a.a+" "+b.b+" wall"))},
ep(a,b,c,d,e,f,g){J.hi(t.aD.a(a).ce(b+":"+c.b,new A.oT()),new A.iH([d,e,f,g]))},
aC(a){var s=a.c,r=this.r,q=a.a
return new A.j(s.a+r.hL(q),s.b+r.hM(q),s.c)},
aJ(a){var s=this.c,r=A.C(s)
return new A.H(s,r.i("l(1)").a(new A.oX(a)),r.i("H<1>"))},
mm(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.ah(a,"roomId","not a portal endpoint"))
r=this.aC(o)
q=b.ag(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aH(a).a){case 0:s=new A.j(s.a+q,p,s.c)
break
case 2:s=new A.j(s.a+q,p,s.c+r.c)
break
case 1:s=new A.j(s.a+r.a,p,s.c+q)
break
case 3:s=new A.j(s.a,p,s.c+q)
break
default:s=null}return s},
ghd(){return B.a.be(this.b,0,new A.oY(),t.S)},
h1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.X
s=A.c([new A.aR(a,B.X)],t.nR)
r=A.aO([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.mu(s,0)
n=o.a
m=o.b
for(l=this.aJ(n),k=J.P(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.cd(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.K(m,p)
h.push(j)
B.a.l(s,new A.aR(i,h))}}}return B.X}}
A.oU.prototype={
$1(a){var s=this.a
return new A.j(a.a*s,a.b,a.c*s)},
$S:45}
A.oV.prototype={
$1(a){return a.ak(0,1.5)},
$S:45}
A.oW.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.G(a.a[0],b.a[0])},
$S:82}
A.oT.prototype={
$0(){return A.c([],t.wx)},
$S:83}
A.oX.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:84}
A.oY.prototype={
$2(a,b){return A.e(a)+t.W.a(b).e.length},
$S:85}
A.nQ.prototype={}
A.rk.prototype={
hK(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.rl())}else s=!1
return s}}
A.rl.prototype={
$1(a){return t.fW.a(a).w},
$S:26}
A.oH.prototype={
mj(a){var s=this.e,r=A.C(s)
return new A.H(s,r.i("l(1)").a(new A.oK(a)),r.i("H<1>"))},
cF(a){return B.a.aW(this.d,new A.oI(a),new A.oJ(a))},
mY(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.k("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.k("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.k("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.b(A.k("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.k("invalid bounds for inventory asset "+m))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.u)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.b(A.k("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.b(A.k(a7+m+" references "+l))
n=a6.cF(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.AM()
if(!e.b.test(k))throw A.b(A.k("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.b(A.k("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.b(A.k("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.b(A.k("duplicate inventory socket "+l+":"+e))
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
a4=g.h8(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.k(a7+m+" escapes "+f.a))}}}
A.oK.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:87}
A.oI.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:88}
A.oJ.prototype={
$0(){return A.i(A.k("inventory asset missing: "+this.a))},
$S:6}
A.cU.prototype={}
A.cw.prototype={
h8(a,b){var s=this.f.c.b*b,r=a.f
return new A.j(r.a.b*s,r.b.b*s,0)}}
A.p7.prototype={}
A.p5.prototype={}
A.v4.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:21}
A.p6.prototype={
B(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("ab<1>")
n=A.K(new A.ab(o,n),n.i("n.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dX(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.fg)
s=t.X
r=A.aN(a,s,s)
s=this.a
s.L(0)
for(q=new A.G(r,A.o(r).i("G<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aJ(o)||o<0)throw A.b(B.fy)
s.k(0,n,o)}}}
A.ds.prototype={}
A.oL.prototype={
n0(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fS(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.u)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aC(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.j(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.j(a*a3,a0*a3,a1*a3)}else a4=new A.j(0,-1,0)
B.a.l(s,new A.ds(new A.j(d,c,e),a4,16760952,3.8,2.1*this.jH(k)))}}B.a.P(s,new A.oM(a6))
return A.kV(s,0,A.fb(4,"count",t.S),t.A_).bL(0)},
jH(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.oM.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.G(a.a.ap(0,s).gt(0),b.a.ap(0,s).gt(0))},
$S:91}
A.jO.prototype={
v(){return"Floor."+this.b}}
A.dT.prototype={
v(){return"Facing."+this.b}}
A.dD.prototype={
shJ(a){this.w=A.Q(a)}}
A.bv.prototype={
cd(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aH(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.ah(a,"roomId","not an endpoint of "+s.a))},
ag(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.ah(a,"roomId","not an endpoint of "+s.a))}}
A.fB.prototype={}
A.hZ.prototype={}
A.jG.prototype={}
A.e7.prototype={}
A.cD.prototype={}
A.oO.prototype={
lp(a){return B.a.aW(this.c,new A.oP(a),new A.oQ(a))},
mZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.k("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.k("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.b(A.k("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.b(A.k("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.b(A.k("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.b(A.k("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaE().N(0,new A.oR()))throw A.b(A.k("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.b(A.k("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.b(A.k("sound emitter "+l+" escapes "+j.a))}}}
A.oP.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:92}
A.oQ.prototype={
$0(){return A.i(A.k("sound emitter missing: "+this.a))},
$S:6}
A.oR.prototype={
$1(a){return B.b.bh(A.r(a)).length===0},
$S:3}
A.cT.prototype={}
A.oD.prototype={
ds(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ah(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.j8}q=A.c([],t.Fm)
p=B.c.aX(r)+1
o=B.c.aX(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eC("tick"))
if(B.d.S(m,3)===0){B.a.l(q,new A.eC("cuckoo"))
B.a.l(q,new A.eC("bell"))}if(B.d.S(m,6)===0)B.a.l(q,new A.eC("chime"))}l.b=b
return q}}
A.eC.prototype={}
A.oN.prototype={
ds(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ah(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.j7}q=A.c([],t.op)
for(p=B.c.aX(r)+1;p<=B.c.aX(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.hT)
if(B.d.S(o,3)===1)B.a.l(q,B.hV)
if(B.d.S(o,8)===5)B.a.l(q,B.hY)
if(B.d.S(o,5)===0)B.a.l(q,B.hU)
if(B.d.S(o,7)===3)B.a.l(q,B.hZ)
if(n===1)B.a.l(q,B.hW)
if(B.d.S(o,6)===4)B.a.l(q,B.hX)}m.b=b
return q}}
A.cS.prototype={}
A.v3.prototype={
$1(a){return typeof a!="number"},
$S:21}
A.oS.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.J(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.J(["lit",o.a,"examined",o.b],m,r))}return A.J(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
ke(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wX(new A.ab(o,A.o(o).i("ab<1>")),d)){d=f.b
if(A.wX(new A.ab(d,A.o(d).i("ab<1>")),r)){d=f.c
e=!A.wX(new A.ab(d,A.o(d).i("ab<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fS)
e=f.d
if(e<0||e>2)A.i(B.fn)
a.r.b=e
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
A.i_.prototype={
B(){return A.J(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hN.prototype={
B(){return A.J(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bh.prototype={}
A.nL.prototype={
$1(a){return this.a.q(0,A.r(a))},
$S:3}
A.dW.prototype={
v(){return"Hand."+this.b}}
A.rX.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
eg(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.ka.prototype={
B(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.B[r]
o.k(0,q,s.h(0,q))}return A.J(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.M(B.B,t.oI.a(new A.pt(this)),t.jT).W(0," \xb7 ")}}
A.ps.prototype={
$2(a,b){return new A.L(A.r(a),A.r(b),t.q)},
$S:93}
A.pt.prototype={
$1(a){return this.a.a.h(0,A.r(a))},
$S:94}
A.bV.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.J(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pa.prototype={
bY(a){t.G.a(a)
return a.a===5&&B.a.a7(B.B,new A.ph(this,a))},
eq(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bY(b))return null
s=this.e++
r=new A.bV(s,a,A.c([A.pr(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dz(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bY(b))return!1
B.a.l(s.c,A.pr(b,c,B.ay))
return!0},
k8(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bY(b))return!1
s.r=A.pr(b,0,B.cJ)
return!0},
hB(a){var s,r,q,p
t.U.a(a)
s=this.d
B.a.L(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
n_(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.o(n).c)
B.a.Y(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.af(r,r.r,r.e,A.o(r).i("af<2>"));r.m();)s.push(r.d.B())
return A.J(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.ph.prototype={
$1(a){var s
A.r(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.n2.prototype={
l8(a,b){if(a.a===B.aE)return new A.q7(b,a.B(),B.dw)
return new A.pl(b,!1,null,a.B(),B.dw)}}
A.hk.prototype={
B(){var s,r=this,q=A.m(t.N,t.X)
q.k(0,"kind",r.a.b)
q.k(0,"explicit",r.b)
q.k(0,"automatic",r.c)
q.k(0,"fallback",!1)
q.k(0,"rejected",r.f)
q.k(0,"aliasUsed",r.w)
s=r.r
if(s!=null)q.k(0,"rejectionReason",s)
s=r.x
if(s!=null)q.k(0,"aliasReason",s)
return q}}
A.n3.prototype={
ck(a){var s,r,q,p=null,o=a==null?p:B.b.bh(a).toLowerCase()
if(o==null||o.length===0)return B.e6
s=o!=="pixeldart"
if(!s||o==="next"||o==="auto"||o==="legacy"){s=!s||o==="next"
r=o==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':p
return new A.hk(B.aE,s,o==="auto",!1,p,r,q)}return new A.hk(B.aE,!1,!1,!0,'unsupported renderer query "'+o+'"; use pixeldart',!1,p)}}
A.pm.prototype={}
A.pl.prototype={
gbB(){var s=this.b.gbB(),r=s.he(this.e)
return r},
c6(){if(this.f===B.dx)throw A.b(A.k("legacy backend is disposed"))
this.b.c6()
this.f=B.z},
bg(a,b){if(a<=0||b<=0)throw A.b(A.w("legacy surface size must be positive",null))
if(this.f!==B.z)A.i(A.k("legacy backend is not ready"))
this.b.bg(a,b)},
bs(a){if(this.f!==B.z)A.i(A.k("legacy backend is not ready"))
B.j.ab(A.J(["backend","legacy","interpolation",0,"facts",A.ma(a.a.a)],t.N,t.X),null)
this.b.bs(a)},
dG(a){if(this.f!==B.z)A.i(A.k("legacy backend is not ready"))
B.j.ab(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.q8.prototype={}
A.q7.prototype={
gbB(){var s=this.b.gbB(),r=s.he(this.c)
return r},
c6(){if(this.d===B.dx)throw A.b(A.k("pixeldart backend is disposed"))
this.b.c6()
this.d=B.z},
bg(a,b){if(this.d!==B.z)A.i(A.k("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.b(A.w("pixeldart surface size must be positive",null))
this.b.bg(a,b)},
bs(a){var s,r=this,q="pixeldart backend is not ready",p=r.b,o=r.d
if(o===B.bv){if(p.y1){s=p.d
s===$&&A.p()
s=s.b===B.U}else s=!1
s=!s
if(s){r.d=B.z;++p.to
o=B.z}if(o===B.bv)return}if(o!==B.z)A.i(A.k(q))
B.j.ab(A.J(["backend","pixeldart","interpolation",0,"facts",A.ma(a.a.a)],t.N,t.X),null)
if(p.y1){o=p.d
o===$&&A.p()
o=o.b===B.U}else o=!1
if(o){if(r.d!==B.z)A.i(A.k(q))
r.d=B.bv
return}p.bs(a)},
dG(a){if(this.d!==B.z)A.i(A.k("pixeldart backend is not ready"))
B.j.ab(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.q9.prototype={
kq(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c4.ck(a)
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
o=A.K(o,A.o(o).c)
B.a.Y(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.u)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.kq.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qa.prototype={
B(){var s=this
return A.J(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qb.prototype={
fA(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.w("surface dimensions must be positive",null))
s=a1.a
A:{if(B.a1===s){r=new A.f4(1080,1920)
break A}if(B.O===s){r=new A.f4(720,1280)
break A}r=new A.f4(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.c.aK(r.b*q)
q=B.c.aK(r.a*q)
o=B.c.D(a5/p,0,1)
n=B.c.D(a4/q,0,1)
m=o<n?o:n
r=this.es(B.c.aK(p*m),320,a5)
q=this.es(B.c.aK(q*m),180,a4)
l=s===B.a1
k=s===B.O
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
break E}g=a0==="linear"?B.eG:B.aS
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.eR
break F}if("errors"===b){c=B.cb
break F}c=B.eS
break F}return new A.i4(a1,r,q,h,g,i,p,f,e,d,c)},
es(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.k9.prototype={}
A.qh.prototype={
mW(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b3
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b3
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.k9(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aI()*0.1,0.9+s.aI()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aI()*0.15
p.e=(0.6+s.aI()*2.8)/0.343
p.b=16-b*11+s.aI()*6}}}
A.kD.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eL.prototype={
v(){return"RendererBackendState."+this.b}}
A.qu.prototype={}
A.kE.prototype={}
A.qt.prototype={
i9(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.w("renderer provenance values must be non-empty",null))}},
he(a){var s=this
return A.yh(s.a,s.c,s.d,!1,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
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
A.qv.prototype={
bg(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fR(a,b){var s,r,q,p,o
for(s=A.ai(this.a.d,t.rO),r=A.C(s).i("eN<1>"),s=new A.eN(s,r),s=new A.aH(s,s.gt(0),r.i("aH<a4.E>")),r=r.i("a4.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.rf.prototype={}
A.cF.prototype={
v(){return"ShaderDebugMode."+this.b},
glg(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dx.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e6.prototype={
gfL(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aL(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aL(r,2)
else return B.c.aL(r,3)}}}
A.rg.prototype={
gbf(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bh,p)
s=B.bh[p]
p=this.f
p===$&&A.p()
r=A.C(p)
q=r.i("H<1>")
p=A.K(new A.H(p,r.i("l(1)").a(new A.rj(s)),q),q.i("n.E"))
return p},
gcI(){var s,r=this.gbf(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
my(){var s,r,q,p,o
if(this.b===4)this.e=B.aH
else for(s=this.gbf(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mw(){var s,r,q,p
this.e=B.aH
s=this.f
s===$&&A.p()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
F(a){var s,r,q=this.f
q===$&&A.p()
s=A.C(q)
r=A.bK(new A.H(q,s.i("l(1)").a(new A.ri(a)),s.i("H<1>")),t.d)
q=r==null?null:r.y
return q==null?1:q},
aQ(a){var s,r,q=this.f
q===$&&A.p()
s=A.C(q)
r=A.bK(new A.H(q,s.i("l(1)").a(new A.rh(a)),s.i("H<1>")),t.d)
q=r==null?null:r.z
return q!==!1}}
A.rj.prototype={
$1(a){return t.d.a(a).d===this.a},
$S:25}
A.ri.prototype={
$1(a){return t.d.a(a).a===this.a},
$S:25}
A.rh.prototype={
$1(a){return t.d.a(a).a===this.a},
$S:25}
A.bN.prototype={
v(){return"SleepQuality."+this.b}}
A.by.prototype={
v(){return"SleepLocation."+this.b}}
A.fN.prototype={}
A.nD.prototype={
cZ(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hQ(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.J(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.J(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nE.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:96}
A.nF.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:97}
A.k1.prototype={
v(){return"InteractionType."+this.b}}
A.eX.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.t1.prototype={}
A.eW.prototype={}
A.jv.prototype={}
A.oZ.prototype={}
A.p2.prototype={
e6(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.P(p,new A.p3())
return p},
ky(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.n9
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga1(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gX(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eW(B.aJ,r)
s=r.a
o=B.a.gX(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gX(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eW(B.dX,r)
return new A.eW(B.bQ,r)},
jx(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jv(e,!1,B.n8,null)
s=p.d===c
r=this.ky(p,d)
q.n_(e)
return new A.jv(e,s,r,r.a===B.aJ&&s?'The world says "'+d.c+'". The entry says "'+B.a.gX(p.c).p(0)+'".':null)},
l9(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aJ)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.oZ(B.a.gX(s.c).p(0)+" but "+A.y(a.f))}}
A.p3.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:11}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qx.prototype={}
A.cZ.prototype={}
A.qy.prototype={
geh(){var s=B.bl.h(0,this.a)
return s==null?0:s},
hU(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.E)s=q.e
else s=!0
if(s)return B.cU
r=A.wJ(b)
s=q.c
B.a.L(s)
B.a.I(s,r)
B.a.L(q.d)
q.a=B.aF
q.b=0
q.e=!1
return A.c([B.eA],t.xB)},
dr(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.E||a===0)return B.cU
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.E))break
A:{q=l.a
p=B.bl.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a2)l.jU(s)
p=l.b
o=B.bl.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cZ())
if(q===B.a2){l.a=B.E
l.b=0
l.e=!0
B.a.l(s,B.ez)}else{p=q.a+1
if(!(p<7))return A.d(B.cS,p)
l.a=B.cS[p]
l.b=0
B.a.l(s,new A.cZ())}}}return A.ai(s,t.F3)},
B(){var s=this,r=t.N
return A.J(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
jU(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aX(l.b/l.geh()*A.ai(s,r).length),0,A.ai(s,r).length)
p=l.d
for(;;){o=A.aq(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aq(s,!1,r)
o.$flags=3
n=o
o=A.aq(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cZ())}}}
A.jR.prototype={
gek(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gla(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))},
h7(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.a1("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.eV.prototype={
B(){var s=this
return A.J(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rY.prototype={
dF(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aY(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.uI.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.D(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eV(r,q,A.A0(B.c.aL(s,2)),A.A0(B.c.aL(12-(r-1)*0.11000000000000001,2)))},
$S:98}
A.pM.prototype={
aY(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
kc(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("G<1,2>")
k=A.K(new A.G(k,j),j.i("n.E"))
B.a.P(k,new A.pO())
j=t.N
k=A.wa(k,j,j)
s=this.b
r=A.o(s).i("G<1,2>")
s=A.K(new A.G(s,r),r.i("n.E"))
B.a.P(s,new A.pP())
s=A.wa(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("G<1,2>")
q=A.K(new A.G(q,p),p.i("n.E"))
B.a.P(q,new A.pQ())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.J(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.J(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pO.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:20}
A.pP.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:20}
A.pQ.prototype={
$2(a,b){var s=t.gI
return B.b.G(s.a(a).a,s.a(b).a)},
$S:100}
A.cN.prototype={
B(){var s=this
return A.J(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bt.prototype={
B(){var s=this
return A.J(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.q5.prototype={
e4(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aY("ashworth.compact","accepted"))B.a.l(r,B.kF)
if(q.aY(s,"taken"))B.a.l(r,B.kJ)
else if(q.aY(s,"left"))B.a.l(r,B.kG)
if(q.aY("sylvia.certificate","granted"))B.a.l(r,B.kI)
if(q.aY("residue.coal","cellar"))B.a.l(r,B.kE)
if(q.aY("telegram.08","read"))B.a.l(r,B.kD)
if(q.aY("truth.shawl","home"))B.a.l(r,B.kC)
if(q.aY("sowerby.paraffin","received"))B.a.l(r,B.kH)
if(q.aY("inspector.proclamation","acknowledged"))B.a.l(r,B.kB)
return r},
hk(a){var s=this.e4(),r=A.C(s),q=r.i("H<1>")
s=A.K(new A.H(s,r.i("l(1)").a(new A.q6(a)),q),q.i("n.E"))
return s}}
A.q6.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:31}
A.rq.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fP(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.k_(q,r.b))}s=A.fP(e.r)
q=A.fP(e.w)
p=A.fP(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.G(n,A.o(n).i("G<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.P(l.b);i.m();){h=i.gn()
j.push(A.J(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.G(m,A.o(m).i("G<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.m(c,b)
for(m=e.ax,m=new A.G(m,A.o(m).i("G<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.J(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
k_(a,b){var s,r=A.fP(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fP(q.bH(0,new A.rr(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gV(s))r.k(0,"_ambient",A.fP(s.bH(0,new A.rs(),t.S,t.z)))
return r}}
A.rr.prototype={
$2(a,b){return new A.L(A.e(a),t.BX.a(b).B(),t.pr)},
$S:102}
A.rs.prototype={
$2(a,b){return new A.L(A.e(a),t.vw.a(b).B(),t.pr)},
$S:103}
A.eU.prototype={
B(){return A.J(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eT.prototype={
B(){return A.J(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.il.prototype={
B(){var s=t.N
return A.J(["field",this.a,"value",this.b],s,s)}}
A.ld.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.J(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eK.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gV(s))q.k(0,"effects",s)
return q}}
A.d5.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gV(s))q.k(0,"when",s)
return q}}
A.rp.prototype={}
A.kL.prototype={}
A.kI.prototype={}
A.kJ.prototype={}
A.kK.prototype={}
A.rt.prototype={
bo(){var s=0,r=A.bF(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bo=A.bH(function(a0,a1){if(a0===1){p.push(a1)
s=q}for(;;)switch(s){case 0:q=3
i=v.G
h=t.m
s=6
return A.au(A.bT(A.a(A.a(i.window).fetch("res/text.json")),h),$async$bo)
case 6:n=a1
g=t.N
s=7
return A.au(A.bT(A.a(n.text()),g),$async$bo)
case 7:m=a1
l=A.FX(m)
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
return A.au(A.bT(A.a(A.a(i.window).fetch("res/story_script.json")),h),$async$bo)
case 8:k=a1
s=A.Q(k.ok)?9:10
break
case 9:a=A
s=11
return A.au(A.bT(A.a(k.text()),g),$async$bo)
case 11:a.CK(a1)
case 10:q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ao(b)
i=A.y(j)
throw A.b("Failed to load text.json: "+i)
s=5
break
case 2:s=1
break
case 5:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$bo,r)},
hj(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().cT(0,new A.ru())
r=p.$ti
q=t.N
return A.wa(new A.cz(p,r.i("L<f,f>(1)").a(new A.rv()),r.i("cz<1,L<f,f>>")),q,q)}return null},
e5(a,b){var s=this.hj(a)
return s==null?null:s.h(0,b)},
hn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.r(i.b))}B.a.l(p,new A.eK(A.r(m.h(0,"id")),A.r(m.h(0,"label")),A.r(m.h(0,"reply")),A.aX(k,n,n)))}if(p.length<2)return g
return new A.ld(r,a,b,c,d,A.ai(p,t.Y))},
hm(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.ah(p)||o!==B.c.ah(o))return n
return new A.eU(B.c.ah(p),B.c.ah(o))},
hl(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.ah(p)||typeof o!="string"||typeof n!="string")return m
return new A.eT(B.c.ah(p),o,n)},
n1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.G(b4,A.o(b4).i("G<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dt(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.r(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hm(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hl(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hn(A.r(d.h(0,"visitor")),B.c.ah(A.a6(d.h(0,"day"))),A.r(d.h(0,"tier")),B.c.ah(A.a6(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.r(r.b))}s=A.r(d.h(0,"id"))
b2.k(0,s,new A.d5(s,A.r(d.h(0,"target")),A.r(d.h(0,a2)),A.aX(b,a5,a5)))}b4=a1.at
b4===$&&A.p()
b4=new A.G(b4,A.o(b4).i("G<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.G(b4,A.o(b4).i("G<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.P(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.il(A.r(a0.h(0,"field")),A.r(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rq(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.ru.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:104}
A.rv.prototype={
$1(a){t.AC.a(a)
return new A.L(A.r(a.a),A.r(a.b),t.q)},
$S:105}
A.je.prototype={
bE(a,b,c){var s=B.b.bh(a),r=B.b.bh(c)
if(r.length===0)return""
if(b||this.a===B.bS)return s.length===0?r:s+": "+r
if(this.a===B.bR)return r
return s.length===0?r:s+": "+r},
fK(a,b){return this.bE(a,!1,b)}}
A.w0.prototype={}
A.cL.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dK.prototype={
bZ(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dK(q,p,o,n,m)},
l0(a){var s=null
return this.bZ(s,s,s,a,s)},
l6(a){var s=null
return this.bZ(s,s,s,s,a)},
kX(a){var s=null
return this.bZ(s,s,a,s,s)},
kV(a){var s=null
return this.bZ(s,a,s,s,s)},
kC(a){var s=null
return this.bZ(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.J(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mv.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:106}
A.mt.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:32}
A.mu.prototype={
$0(){return A.i(B.ha)},
$S:6}
A.mG.prototype={
bN(a,b){var s,r=this,q=r.e.fK(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aN(q)
A.e(A.a(v.G.window).setTimeout(A.zo(new A.mI(r)),7000))},
aN(a){var s,r,q=this
if(!q.c||B.b.bh(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.e(A.a(v.G.window).setTimeout(A.zo(new A.mH(q,s)),4200))}}
A.mI.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:108}
A.mH.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.ct.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cM.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.df.prototype={
v(){return"AudioReverbMode."+this.b}}
A.de.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dL.prototype={
cH(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dL(r,q,p,a==null?s.e:a)},
kT(a){return this.cH(null,null,a,null)},
kJ(a){return this.cH(null,a,null,null)},
kZ(a){return this.cH(null,null,null,a)},
kI(a){return this.cH(a,null,null,null)},
B(){var s=this
return A.J(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mT.prototype={
$1$2(a,b,c){return B.a.aW(c.i("n<0>").a(a),new A.mU(b,c),new A.mV(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:109}
A.mU.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.mV.prototype={
$0(){return A.i(A.a1("unsupported audio option: "+A.y(this.a),null,null))},
$S:6}
A.n5.prototype={
mV(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.fK(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.n8.prototype={
$1(a){return this.a.$0()},
$S:2}
A.nc.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nb.prototype={
$1(a){var s=A.eI(A.r(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.na.prototype={
$1(a){A.r(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dN.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dO.prototype={
v(){return"BrushComponentState."+this.b}}
A.b2.prototype={
gk6(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bh(s.a).length===0||B.b.bh(s.c).length===0)throw A.b(B.h_)
if(s.e===B.c2&&s.b!==B.c1)throw A.b(B.fz)}}
A.ne.prototype={
ls(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
cV(a,b){if(b<=0){this.f=0
return}this.f=B.d.D(this.f+a,0,Math.max(0,b-1))},
bD(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cW(o+c,n)
l=new A.cW(s+p,n)
k=s-p
j=new A.cW(k,r-c)
i=new A.cW(k-c,r)
h=new A.cW(q-p,r)
g=new A.cW(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.eM(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eM(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aV(a,b,c,d,e,f,g,h,i){return this.bD(a,b,c,d,e,!0,f,g,h,i)},
lh(a,b,c,d,e,f,g,h,i){return this.bD(a,b,14,c,d,e,f,g,h,i)},
lm(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ee()
s.bP(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aI()-0.5)*8
l=s.aI()
k=s.aI()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fG(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eL(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eL(0,0,c)
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
lk(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a6(A.a(q.measureText(a.toUpperCase())).width)+70)
this.aV("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
lj(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aV(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
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
d=d4.gmN()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.k5(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.be(i,0,new A.nf(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aX((a5+a2-a1)/a2))
d1=d4.f
c7.ls(d1==null?0:d1,c,a6)
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
B.a.l(f,new A.fk("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aV(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.fG(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bS(b1,g),c1+22,b3)
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
B.a.l(c7.d,new A.fk("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aV("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
li(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
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
m===$&&A.p()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText(this.bS("["+p.a+"] "+p.b,122),o,r)
m.restore()}},
ll(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
if(c7<=0.001)return
s=Math.sin(c7*3.141592653589793*0.5)
r=Math.min(c9*0.92,860)
q=Math.min(c8*0.88,620)
p=c9+r*0.6
o=p+(c9*0.5-p)*s
n=c8*0.5
c7=c0.b
c7===$&&A.p()
c7.save()
c7.fillStyle="rgba(10, 8, 12, "+A.y(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aV(c2,3,18,c1,q,-0.025,r,o,n)
c0.lm(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c0.aV(c3,2,8,c2,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bh[g]
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
c0.aV(c4,2.5,10,c5,140,-0.02,r-80,o,a1)
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
c7.fillText(d0.e.glg().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbf()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aX((a4+52-44)/52))
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
if(e)c0.fG(!0,g+1,20,b1-j+20,b0)
c7.save()
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="left"
c7.textBaseline="middle"
b2=e?38:18
c=a9.e
b=c?122:250
c7.fillText(c0.bS(a9.b.toUpperCase(),a8-b),b1-j+b2,b0)
b3=b1+j-20
if(c){b4=a9.z
c=b3-37
b=b4?c2:"#0c0a0e"
c0.lh(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfL(),c,b0)}else{b5=b3-80-80
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
c7.fillText(B.c.aL(b6,1)+" ",c-4,b0)
c7.textAlign="left"
c7.fillText(" "+B.c.aL(b7,1),b5+80+4,b0)
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 13px "Courier New", monospace'
c7.textAlign="right"
c7.textBaseline="middle"
c7.fillText(a9.gfL(),b3,b0)}c7.restore()}c7.restore()
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
eM(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eL(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
k5(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a6(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bS(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a6(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a6(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.H(r,0,s-1)}return q?"...":r+"..."}}
A.nf.prototype={
$2(a,b){var s
A.bo(a)
A.r(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a6(A.a(s.measureText(b)).width))},
$S:110}
A.fo.prototype={
gkl(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aF(r)
o.k(0,q,p.gO(r)?"":p.gU(r))}return o},
by(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.J(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.bo(r)
q=n.h(0,i)
q.toString
A.bo(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fp(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.bo(r)
q=n.h(0,i)
q.toString
A.bo(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gkl()
return A.fp(l,null,m,r,p,o,s,q)},
dw(a){var s=null
return this.by(a,s,s,s,s,s)},
kQ(a){var s=null
return this.by(s,s,s,a,s,s)},
kR(a){var s=null
return this.by(s,s,s,s,a,s)},
kN(a){var s=null
return this.by(s,a,s,s,s,s)},
kO(a){var s=null
return this.by(s,s,a,s,s,s)},
l7(a){var s=null
return this.by(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fi)
p=this.r
if(p.gJ().N(0,new A.nu()))throw A.b(B.h3)
if(p.gJ().N(0,new A.nv()))throw A.b(B.fO)
p=p.gaE()
o=A.o(p)
s=o.i("hw<n.E,f>")
r=s.i("H<n.E>")
q=A.K(new A.H(new A.hw(p,o.i("n<f>(n.E)").a(new A.nw()),s),s.i("l(n.E)").a(new A.nx()),r),r.i("n.E"))
if(A.hM(q,A.C(q).c).a!==q.length)throw A.b(B.fl)},
B(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.aq(r.b,!0,p))}return A.J(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nu.prototype={
$1(a){t.yx.a(a)
return J.xt(a.b,new A.nt(a))},
$S:33}
A.nt.prototype={
$1(a){var s
A.r(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xF(a)
else s=!1
return s},
$S:3}
A.nv.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.xt(a.b,B.dB.gaq(B.dB))},
$S:33}
A.nw.prototype={
$1(a){return t.a.a(a)},
$S:112}
A.nx.prototype={
$1(a){return A.r(a).length!==0},
$S:3}
A.ns.prototype={
$1(a){return typeof a=="string"},
$S:21}
A.dM.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.er.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dg.prototype={}
A.jw.prototype={
bW(a){var s=this
if(!s.a.r.R(a))return new A.dg(B.bZ,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e7},
kr(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aO
if(!A.xF(a)){p.c=p.b=null
return new A.dg(B.c0,B.dC.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xv(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dg(B.aP,a+" is already bound to "+s)}return p.il(a)},
dW(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aO
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e8
case 1:s=A.wA(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wT(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.x5(r,k))
m.a=m.a.dw(s)
break
case 0:s=A.wA(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.kV(p,1,null,A.C(p).c)
o=p.$ti
p=new A.aH(p,p.gt(0),o.i("aH<a4.E>"))
o=o.i("a4.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.x5(r,k)}else{r=s.h(0,j)
r.toString
r=A.wT(A.x5(r,k),q)}s.k(0,j,r)
m.a=m.a.dw(s)
break}m.c=m.e=m.d=null
return B.bX},
il(a){var s,r,q=this,p=q.b
if(p==null)return B.aO
s=A.wA(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wT(r,a))
q.a=q.a.dw(s)
q.b=null
return B.bX}}
A.hr.prototype={
i2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jw(f.w)
s=f.b
s.className=A.r(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.n9(a,B.eh,1)))
A.a(s.appendChild(A.z(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.z(a,"div",c,e)
f.eo(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.eo(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d2(a,r,"invertX","Invert horizontal look")
f.d2(a,r,"invertY","Invert vertical look")
f.d2(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.z(a,"div",c,e)
for(p=B.jB.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fp(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.ms(l)?"unbound":J.xx(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dP(a,new A.b2("settings.controls.bind."+m,B.c1,n,h,B.p),new A.nq(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.z(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.z(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.dn()
A.a(s.appendChild(A.dP(a,B.ei,new A.nr(f),e)))},
fY(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.eP(this.x.kr(A.r(a.code)))},
eP(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aP?B.em:B.p
p=o.Q.h(0,r)
if(p!=null)A.w2(p,q)}n=a.a
if(n===B.aP)o.jL()
else if(n===B.c_){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dn()}else{o.d5()
o.ax=null}},
jL(){var s,r,q,p,o
this.d5()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.ip[r]
p=A.F(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dP(p,new A.b2("settings.controls.resolve."+o,B.G,o,"resolve key binding conflict",B.p),new A.np(this,q),null)))}},
d5(){var s,r=this.at
if(r==null)return
while(A.F(r.firstChild)!=null){s=A.F(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dn(){var s,r,q,p
for(s=this.Q,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.ms(p)?"unbound":J.xx(p," / ")
r.textContent=q
A.w2(r,B.p)}},
eo(a,b,c,d,e,f){var s,r=A.z(a,"label","setting-row",null)
A.a(r.appendChild(A.z(a,"span",null,d)))
s=A.B6(a,new A.b2("settings.controls."+c,B.ek,d,null,B.p),f,e,new A.nn(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d2(a,b,c,d){var s=A.z(a,"label","setting-toggle",null),r=A.B7(a,new A.b2("settings.controls."+c,B.el,d,null,B.p),!1,new A.no(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eN(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdN(a){this.f=t.pf.a(a)},
sb5(a){this.r=t.Z.a(a)}}
A.nq.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.bW(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bY){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.w2(q,B.c2)}p.d5()
return null},
$S:0}
A.nr.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.np.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.eP(r.dW(this.b))},
$S:0}
A.nn.prototype={
$1(a){var s=this.a,r=s.w
s.eN(this.b==="horizontalSensitivity"?r.kO(a):r.l7(a))},
$S:113}
A.no.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kQ(a)
break A}if("invertY"===q){s=r.w.kR(a)
break A}s=r.w.kN(a)
break A}r.eN(s)},
$S:8}
A.ny.prototype={
i3(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.z(s,"h1","journal-title","credits")))
r=A.z(s,"p","credits-body",null)
p.f!==$&&A.aW()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.z(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.z(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.U(new A.nz(p)))
A.a(o.appendChild(q))}}
A.nz.prototype={
$1(a){return this.a.a6()},
$S:2}
A.nH.prototype={
i5(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.z(a,o,"door-speaker",p)
q.b!==$&&A.aW()
q.b=s
r=A.z(a,o,"door-line",p)
q.c!==$&&A.aW()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.z(a,o,"door-choice-status",p)
q.d!==$&&A.aW()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.z(a,o,"door-cite-list",p)
q.f!==$&&A.aW()
q.f=r
s=A.z(a,o,"door-cite-result",p)
q.r!==$&&A.aW()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.z(a,"button","door-continue","continue")
q.e!==$&&A.aW()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.nI(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.U(new A.nJ(q,a)))
A.a(A.F(a.body).appendChild(n))},
ed(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.K.bE("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.xI(B.b5)
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
ee(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.K.bE("",!0,a)
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
hG(a){return this.ee(a,!1)},
hI(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.xI(r)},
ef(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.K.bE("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.a(s.style).display=""},
hF(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=A.tX,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nK(o,this)
if(typeof o=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.hd()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
fQ(){var s,r=this
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
slZ(a){this.w=t.Z.a(a)},
slY(a){this.x=t.vR.a(a)}}
A.nI.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:35}
A.nJ.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.r(a.code)!=="Tab")return
r=A.c([],t.sL)
q=s.e
q===$&&A.p()
if(A.r(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.p()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.e(p.length);++o){n=A.F(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.F(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gU(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gX(r).focus()}}else if(m===B.a.gX(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:116}
A.nK.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:35}
A.nN.prototype={
i6(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.z(s,"h1","journal-title",null)
o.f!==$&&A.aW()
o.f=r
q=A.z(s,"div","ending-copy",null)
o.r!==$&&A.aW()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.z(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.U(new A.nO(o)))
A.a(n.appendChild(p))},
hH(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bI()},
sm2(a){this.w=t.Z.a(a)}}
A.nO.prototype={
$1(a){var s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.og.prototype={
bq(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aq(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
L(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
mU(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lC(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fs()
return!0}return!1}if(a==="Space"){s=B.a.dI(l,new A.oh())
if(s!==-1){n.cl(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.S(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.S(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cl(q)
return!0}}if(B.b.T(a,"Digit")){p=A.dt(B.b.b2(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.dt(B.b.b2(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cl(o)
return!0}return!1},
cl(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
fs(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lD(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fs()
return!0}this.cl(a.b)
return!0},
slX(a){this.y=t.dt.a(a)},
sm1(a){this.z=t.Z.a(a)}}
A.oh.prototype={
$1(a){A.r(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.oi.prototype={}
A.dl.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cO.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cP.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dm.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dk.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dn.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cd.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dj.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fw.prototype={
aO(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.w3(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
l3(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,s,a,s)},
l2(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,a,s,s)},
kF(a){var s=null
return this.aO(s,s,a,s,s,s,s,s,s,s,s)},
kP(a){var s=null
return this.aO(s,s,s,s,a,s,s,s,s,s,s)},
kW(a){var s=null
return this.aO(s,s,s,s,s,s,a,s,s,s,s)},
l4(a){var s=null
return this.aO(s,s,s,s,s,s,s,s,s,s,a)},
kS(a){var s=null
return this.aO(s,s,s,s,s,a,s,s,s,s,s)},
kE(a){var s=null
return this.aO(s,a,s,s,s,s,s,s,s,s,s)},
l_(a){var s=null
return this.aO(s,s,s,s,s,s,s,a,s,s,s)},
kD(a){var s=null
return this.aO(a,s,s,s,s,s,s,s,s,s,s)},
kL(a){var s=null
return this.aO(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.J(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.oj.prototype={
$1$2(a,b,c){var s
A.A_(c,t.Ct,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.a1("invalid gameplay setting: "+a,null,null))
return B.a.aW(b,new A.ok(s,c),new A.ol(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:176}
A.ok.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.ol.prototype={
$0(){return A.i(A.a1("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cu.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dV.prototype={
aU(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=e==null?s.e:e,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=d==null?s.z:d
return new A.dV(s.a,r,q,p,o,n,m,l,k,j,i)},
dv(a){var s=null
return this.aU(a,s,s,s,s,s,s,s,s,s)},
fC(a){var s=null
return this.aU(s,s,a,s,s,s,s,s,s,s)},
fD(a){var s=null
return this.aU(s,s,s,s,s,s,a,s,s,s)},
kK(a){var s=null
return this.aU(s,s,s,a,s,s,s,s,s,s)},
kY(a){var s=null
return this.aU(s,s,s,s,s,s,s,a,s,s)},
kM(a){var s=null
return this.aU(s,s,s,s,a,s,s,s,s,s)},
l5(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,s,a)},
kU(a){var s=null
return this.aU(s,s,s,s,s,a,s,s,s,s)},
kH(a){var s=null
return this.aU(s,a,s,s,s,s,s,s,s,s)},
l1(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.jf,q))throw A.b(A.a1("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.iz,q))throw A.b(A.a1("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.jk,q))throw A.b(A.a1("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.jc,q))throw A.b(A.a1("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.jm,q))throw A.b(A.a1("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.jj,q))throw A.b(A.a1("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.jl,q))throw A.b(A.a1("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.J(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"fbxDiagnostics",s.z],t.N,t.K)}}
A.ow.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:36}
A.ox.prototype={
$0(){return A.i(B.fD)},
$S:6}
A.oy.prototype={
B(){return A.J(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.op.prototype={}
A.oq.prototype={}
A.hC.prototype={
i7(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.a(j.appendChild(A.z(a,"h1","journal-title","Graphics")))
A.a(j.appendChild(A.z(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.z(a,"div","settings-grid",m)
r=t.N
n.b8(a,s,"preset","quality preset",A.J(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.b8(a,s,"renderScale","render scale",A.J(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.b8(a,s,"frameTarget","frame target",A.J(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.b8(a,s,"antialiasing","anti-aliasing",A.J(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.b8(a,s,"textureQuality","texture quality",A.J(["high","High","medium","Medium","low","Low"],r,r))
n.b8(a,s,"outputEncoding","output encoding",A.J(["srgb","sRGB display","linear","Linear light"],r,r))
n.b8(a,s,"diagnosticLevel","renderer diagnostics",A.J(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.b8(a,s,"shadowQuality","shadow allocation",A.J(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.z(a,"label",k,m)
r=A.a(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.U(new A.ot(n)))
r=n.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.z(a,"span",m,"Dynamic resolution")))
A.a(s.appendChild(q))
p=A.z(a,"label",k,m)
r=A.a(a.createElement("input"))
n.y=r
r.type="checkbox"
r=n.y
r.toString
r.addEventListener("change",A.U(new A.ou(n)))
r=n.y
r.toString
A.a(p.appendChild(r))
A.a(p.appendChild(A.z(a,"span",m,"FBX room diagnostics (debug)")))
A.a(s.appendChild(p))
A.a(j.appendChild(s))
r=A.z(a,"p",l,m)
n.z=r
r.setAttribute("aria-live","polite")
r=n.z
r.toString
A.a(j.appendChild(r))
o=A.z(a,"button","door-continue","back")
o.setAttribute("type","button")
o.id="settings.graphics.back"
o.setAttribute("aria-label","back to settings categories")
o.addEventListener("click",A.U(new A.ov(n)))
A.a(j.appendChild(o))},
b8(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.G(e,A.o(e).i("G<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.os(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
dg(a){var s
a.C()
this.Q=a
s=this.f
if(s!=null)s.$1(a)},
cm(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.W(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.z
if(s!=null)s.textContent="effective graphics profile differs"}},
sdN(a){this.f=t.CA.a(a)},
sb5(a){this.r=t.Z.a(a)}}
A.ot.prototype={
$1(a){var s=this.a
s.dg(s.Q.fC(A.Q(s.x.checked)))},
$S:1}
A.ou.prototype={
$1(a){var s=this.a
s.dg(s.Q.kK(A.Q(s.y.checked)))},
$S:1}
A.ov.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.os.prototype={
$1(a){var s,r=A.r(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.fD(B.a.af(B.cR,new A.or(r)))
break A}if("renderScale"===p){s=q.Q.kY(r)
break A}if("frameTarget"===p){s=q.Q.kM(r)
break A}if("antialiasing"===p){s=q.Q.dv(r)
break A}if("textureQuality"===p){s=q.Q.l5(r)
break A}if("outputEncoding"===p){s=q.Q.kU(r)
break A}if("diagnosticLevel"===p){s=q.Q.kH(r)
break A}if("shadowQuality"===p){s=q.Q.l1(r)
break A}s=q.Q
break A}q.dg(s)},
$S:1}
A.or.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:36}
A.jf.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.oz.prototype={
hi(a,b,c){if(c)return B.iP
if(b&&a!=null)return A.c([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.jx}}
A.oA.prototype={
i8(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.z(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.z(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.z(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.z(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.U(new A.oB(this)))
A.a(p.appendChild(r))}}
A.oB.prototype={
$1(a){return this.a.a6()},
$S:2}
A.pb.prototype={
bI(){var s,r=this
r.hX()
s=r.r.a-1
if(s<1)s=1
r.CW=r.ex(r.CW,s)
r.jA()
r.f3()},
iv(){var s,r=this,q=r.a,p=A.z(q,"div","page-turn",null),o=A.z(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.U(new A.pc(r)))
s=A.z(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.pd(r)))
q=A.z(q,"span","right-day-label",null)
r.Q!==$&&A.aW()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fk(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ex(s.CW+a,r)
s.f3()},
ex(a,b){if(a<1)return 1
if(a>b)return b
return a},
jA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.p()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.p()
s.textContent=""
for(s=j.w.e6(),r=s.length,q=A.tX,p=j.a,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
m=B.a.gX(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.pe(j,n,l)
if(typeof m=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.hd()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
f3(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("af<2>"),n=new A.af(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.P(r,new A.pf())
j.f2(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.af(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.P(s,new A.pg())
j.f2(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.a(i.style).setProperty("width",B.c.aL(k*100,1)+"%")},
f2(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.a(a.appendChild(this.iW(b[r])))},
iW(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.z(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.c.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.ja(m,!1)
l.className=A.r(l.className)+" margin"
A.a(j.appendChild(l))}return j},
ja(a,b){var s=b?"hand-line struck":"hand-line",r=A.z(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.pc.prototype={
$1(a){return this.a.fk(-1)},
$S:2}
A.pd.prototype={
$1(a){return this.a.fk(1)},
$S:2}
A.pe.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pf.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:11}
A.pg.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:11}
A.cW.prototype={}
A.fk.prototype={}
A.pV.prototype={
gmN(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.H(s,0,B.c.ah(B.c.D(r*q,0,r)))}}
A.hY.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.F(this.a.body).appendChild(s))},
bI(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.r(n.className),"open"))return
s=$.pW
if(s!=null&&s!==o)s.a6()
$.pW=o
r=o.a
o.d=A.F(r.activeElement)
A.p8(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.U(o.gjs())
o.e=q
r.addEventListener("keydown",q)
p=A.zm(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.q(A.r(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pW===q)$.pW=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
fY(a){},
jt(a){A.a(a)
this.fY(a)
if(A.Q(a.defaultPrevented))return
if(A.r(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.r(a.code)==="Tab")this.jR(a)},
jR(a){var s,r=A.zm(this.b)
if(r.length===0)return
s=A.F(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gX(r).focus()}}else if(s===B.a.gX(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
sb_(a){this.c=t.Z.a(a)}}
A.bi.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e3.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dr.prototype={
B(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a4(a,b){if(b==null)return!1
return b instanceof A.dr&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gM(a){return A.cB(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e2.prototype={
gfv(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bo},
B(){var s=A.m(t.N,t.X),r=this.a,q=A.C(r),p=q.i("M<1,W<f,N?>>")
r=A.K(new A.M(r,q.i("W<f,N?>(1)").a(new A.q0()),p),p.i("a4.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("M<1,f>")
r=A.K(new A.M(r,q.i("f(1)").a(new A.q1()),p),p.i("a4.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.q0.prototype={
$1(a){return t.oP.a(a).B()},
$S:119}
A.q1.prototype={
$1(a){return t.wJ.a(a).b},
$S:120}
A.c_.prototype={}
A.q_.prototype={
fZ(a){var s,r=this
if(r.a.gfv())return new A.c_(B.a0,r.a,null)
s=r.a
s=new A.e2(B.je,s.b,a)
r.a=s
return new A.c_(B.dl,s,"pause.resume")},
kg(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gX(p)
q=r.a.a
q=B.a.aR(q,0,q.length-1)
p=r.a
p=new A.e2(q,p.b,p.c)
r.a=p
return new A.c_(B.dm,p,s.c)}if(q.gfv()&&r.a.b.length===0)return r.cf()
return new A.c_(B.a0,r.a,null)},
cf(){var s=this.a
if(s.a.length===0)return new A.c_(B.a0,s,null)
if(s.b.length!==0)return new A.c_(B.a0,s,null)
this.a=B.bn
return new A.c_(B.dn,B.bn,s.c)},
mi(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c_(B.a0,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.e2(s.a,r,q.a.c)
q.a=s
return new A.c_(B.dl,s,null)},
lf(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c_(B.a0,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("H<1>")
r=A.K(new A.H(r,q.i("l(1)").a(new A.q2(a)),p),p.i("n.E"))
q=o.a.c
r=new A.e2(s.a,r,q)
o.a=r
return new A.c_(B.kA,r,q)},
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
A.q2.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:121}
A.cC.prototype={
v(){return"PauseRootAction."+this.b}}
A.q3.prototype={
bj(a,b,c,d){var s=B.jO.h(0,c)
s.toString
A.a(b.appendChild(A.dP(a,new A.b2(s,B.G,d,null,B.p),new A.q4(this,c),null)))},
smd(a){this.f=t.Z.a(a)},
smf(a){this.r=t.Z.a(a)},
sm_(a){this.w=t.Z.a(a)},
sme(a){this.x=t.Z.a(a)},
sm5(a){this.y=t.Z.a(a)},
sm0(a){this.z=t.Z.a(a)},
sb5(a){this.Q=t.Z.a(a)}}
A.q4.prototype={
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
v(){return"PauseSettingsCategory."+this.b}}
A.qg.prototype={
hE(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bE("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qF.prototype={
ia(a){var s,r,q,p,o,n=this.b
n.className=A.r(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.n9(a,B.eg,1)))
A.a(n.appendChild(A.z(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.z(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iQ[r]
p=B.d4.h(0,q)
p.toString
o=B.d3.h(0,q)
o.toString
A.a(s.appendChild(A.dP(a,new A.b2(o,B.G,p,p+" settings",B.p),new A.qG(this,q),null)))}A.a(s.appendChild(A.dP(a,B.ef,new A.qH(this),null)))
A.a(n.appendChild(s))},
slW(a){this.f=t.hQ.a(a)},
sb5(a){this.r=t.Z.a(a)}}
A.qG.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qH.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fM.prototype={
ib(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.d4.h(0,d))+" settings",a=h.b
a.className=A.r(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.n9(a0,new A.b2("settings."+(s==null?f:s)+".heading",B.ar,b,g,B.p),2)))
A.a(a.appendChild(A.z(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.z(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.r5(h)),p=B.a.gu(B.D),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.j9(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.z(a0,"div",e,g)
for(s=s.a(new A.r6(h)),q=B.a.gu(B.D),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.jQ(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.H)A.a(a.appendChild(h.ir(a0)))
if(d===B.I)A.a(a.appendChild(h.iq(a0)))
if(d===B.a_)A.a(a.appendChild(h.is(a0)))
i=A.z(a0,"div",e,g)
for(s=t.pz.a(h.gj3()),q=B.a.gu(B.jg),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dP(a0,new A.b2("settings."+o+".reset."+n,B.G,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.r7(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dP(a0,new A.b2("settings."+(s==null?f:s)+".reset.all",B.G,"reset all settings","restore all settings to defaults",B.en),new A.r8(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dP(a0,new A.b2("settings."+(d==null?f:d)+".back",B.G,"return","return to settings categories",B.p),new A.r9(h),g)))},
iq(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.z(a,"div","settings-grid",j),f=k.d1(a,g,"reducedMotion","reduced motion (system default)"),e=k.d1(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d1(a,g,"captions","non-speech captions"),c=A.z(a,"label",h,j)
A.a(c.appendChild(A.z(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.U(new A.qY(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.z(a,"label",h,j)
A.a(r.appendChild(A.z(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bf[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.U(new A.qZ(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.z(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.U(new A.r_(k)))
A.a(g.appendChild(l))
k.ok.I(0,A.J(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
d1(a,b,c,d){var s=A.z(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.U(new A.qI(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,"span",null,d)))
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
s.value=B.c.p(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a9:r).b}},
is(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.z(a,"div","settings-grid",l)
m.b7(a,g,"interactionMode","interaction mode",B.be,t.bK)
m.b7(a,g,"promptDensity","prompt density",B.bi,t.dn)
m.b7(a,g,"textPacing","text pacing",B.bg,t.j_)
m.b7(a,g,"journalLayout","journal layout",B.ba,t.gm)
m.b7(a,g,k,k,B.b4,t.aJ)
m.b7(a,g,"saveFeedback","save feedback",B.bb,t.mx)
m.b7(a,g,"focusLossBehavior","when the window loses focus",B.aA,t.x)
m.b7(a,g,"clockFormat","clock format",B.b7,t.vS)
s=A.z(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.U(new A.r0(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.z(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.U(new A.r1(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.z(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.z(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.U(new A.r2(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.z(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
b7(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.A_(f,t.Ct,"T","_addGameplaySelect")
f.i("E<0>").a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.U(new A.qW(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
ir(a){var s,r,q=this,p=A.z(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bd[s].b
n.k(0,r,r)}q.cn(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.b9[s].b
n.k(0,r,r)}q.cn(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.b8[s].b
n.k(0,r,r)}q.cn(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.b6[s].b
o.k(0,n,n)}q.cn(a,p,"ducking","voice intelligibility",o)
return p},
cn(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.G(e,A.o(e).i("G<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.qN(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.k(0,c,r)},
hp(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.G(s,A.o(s).i("G<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eS(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Z===r){s=a.c===B.aG
break A}if(B.I===r){s=a.c===B.a4
break A}if(B.H===r){s=a.c===B.F
break A}s=!1
break A}return s},
j4(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Z===s){r=a===B.aG
break A}if(B.I===s){r=a===B.a4
break A}if(B.H===s){r=a===B.F
break A}r=!1
break A}return r},
jQ(a,b){var s=this,r=A.z(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.U(new A.r4(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.z(a,"span",null,b.b)))
return r},
j9(a,b,c,d,e){var s,r,q=this,p=A.z(a,"label","setting-row",null),o=A.z(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.z(a,"output",null,"100%")
n.addEventListener("input",A.U(new A.r3(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aR(e,d))
return p},
eb(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kQ
r=B.c.D(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aK(r*100)+"%"},
sm7(a){this.r=t.DI.a(a)},
sm9(a){this.w=t.xl.a(a)},
sm8(a){this.x=t.xl.a(a)},
sm3(a){this.y=t.DI.a(a)},
sm6(a){this.z=t.xl.a(a)},
smh(a){this.Q=t.xl.a(a)},
smc(a){this.as=t.Ci.a(a)},
smb(a){this.at=t.Z.a(a)},
sb5(a){this.ax=t.Z.a(a)},
slV(a){this.ay=t.kC.a(a)},
sm4(a){this.ch=t.hq.a(a)},
slU(a){this.CW=t.Cv.a(a)},
sma(a){this.cx=t.Z.a(a)}}
A.r5.prototype={
$1(a){t.gl.a(a)
return a.d===B.P&&this.a.eS(a)},
$S:19}
A.r6.prototype={
$1(a){t.gl.a(a)
return a.d===B.ah&&this.a.eS(a)},
$S:19}
A.r7.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.r8.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.r9.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:0}
A.qY.prototype={
$1(a){var s=this.a,r=s.k4,q=A.eI(A.r(this.b.value))
r=r.l6(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qZ.prototype={
$1(a){var s=this.a,r=s.k4.l0(B.a.af(B.bf,new A.qX(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qX.prototype={
$1(a){return t.mq.a(a).b===A.r(this.a.value)},
$S:32}
A.r_.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qI.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.kX(r)
break A}if("photosensitivitySafe"===p){s=q.k4.kV(r)
break A}if("captions"===p){s=q.k4.kC(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.r0.prototype={
$1(a){var s=this.a,r=s.k3.kF(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r1.prototype={
$1(a){var s=this.a,r=s.k3.l2(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r2.prototype={
$1(a){var s=this.a,r=s.k3.l3(A.Q(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qW.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.kP(B.a.af(B.be,new A.qO(r.c)))
break A}if("promptDensity"===p){s=q.k3.kW(B.a.af(B.bi,new A.qP(r.c)))
break A}if("textPacing"===p){s=q.k3.l4(B.a.af(B.bg,new A.qQ(r.c)))
break A}if("journalLayout"===p){s=q.k3.kS(B.a.af(B.ba,new A.qR(r.c)))
break A}if("confirmations"===p){s=q.k3.kE(B.a.af(B.b4,new A.qS(r.c)))
break A}if("saveFeedback"===p){s=q.k3.l_(B.a.af(B.bb,new A.qT(r.c)))
break A}if("clockFormat"===p){s=q.k3.kD(B.a.af(B.b7,new A.qU(r.c)))
break A}s=q.k3.kL(B.a.af(B.aA,new A.qV(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.qO.prototype={
$1(a){return t.bK.a(a).b===A.r(this.a.value)},
$S:124}
A.qP.prototype={
$1(a){return t.dn.a(a).b===A.r(this.a.value)},
$S:125}
A.qQ.prototype={
$1(a){return t.j_.a(a).b===A.r(this.a.value)},
$S:126}
A.qR.prototype={
$1(a){return t.gm.a(a).b===A.r(this.a.value)},
$S:127}
A.qS.prototype={
$1(a){return t.aJ.a(a).b===A.r(this.a.value)},
$S:128}
A.qT.prototype={
$1(a){return t.mx.a(a).b===A.r(this.a.value)},
$S:129}
A.qU.prototype={
$1(a){return t.vS.a(a).b===A.r(this.a.value)},
$S:130}
A.qV.prototype={
$1(a){return t.x.a(a).b===A.r(this.a.value)},
$S:38}
A.qN.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.kT(B.a.af(B.bd,new A.qJ(r.c)))
break A}if("dynamicRange"===o){s=p.kJ(B.a.af(B.b9,new A.qK(r.c)))
break A}if("reverb"===o){s=p.kZ(B.a.af(B.b8,new A.qL(r.c)))
break A}s=p.kI(B.a.af(B.b6,new A.qM(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qJ.prototype={
$1(a){return t.xs.a(a).b===A.r(this.a.value)},
$S:132}
A.qK.prototype={
$1(a){return t.EL.a(a).b===A.r(this.a.value)},
$S:133}
A.qL.prototype={
$1(a){return t.gc.a(a).b===A.r(this.a.value)},
$S:134}
A.qM.prototype={
$1(a){return t.ul.a(a).b===A.r(this.a.value)},
$S:135}
A.r4.prototype={
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
A.r3.prototype={
$1(a){var s,r,q=this,p=A.eI(A.r(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aK(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bx.prototype={
v(){return"SettingCategory."+this.b}}
A.i8.prototype={
v(){return"SettingKind."+this.b}}
A.aZ.prototype={
cR(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.a1(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.a1(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bq(a))throw A.b(A.a1(r.a+" must be boolean",q,q))
break}}}
A.rc.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:19}
A.rd.prototype={
$0(){return A.i(A.k("unknown setting: "+this.a))},
$S:6}
A.ra.prototype={
ic(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rb(s.a).cR(s.b)}},
ci(a){var s=this.b.h(0,a)
return s==null?A.i(A.k("setting missing from profile: "+a)):s},
B(){return A.J(["version",this.a,"values",this.b],t.N,t.K)}}
A.re.prototype={
mx(a){var s,r,q=A.eE(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dw(q,1)
this.jE(a)},
B(){return A.J(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jE(a){var s,r,q=A.eE(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dw(q,1)}}
A.rm.prototype={
ie(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.z(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.z(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.z(a,"div","entry-picker",null)
for(r=A.tX,q=0;q<2;++q){p=B.cQ[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cW[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rn(this,p,m)
if(typeof k=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.hd()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
smg(a){this.f=t.nf.a(a)}}
A.rn.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:1}
A.cr.prototype={}
A.mD.prototype={
mM(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.M(s,r.i("f(1)").a(new A.mF()),r.i("M<1,f>")).bp(0)
r=this.b
r.L(0)
s=J.AX(a,t.N)
p=s.$ti
r.I(0,new A.H(s,p.i("l(n.E)").a(q.gaq(q)),p.i("H<n.E>")))},
ln(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mF.prototype={
$1(a){return t.bC.a(a).a},
$S:136}
A.mE.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:137}
A.la.prototype={
gc_(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
lL(a){return this.c.q(0,t.L.a(a))},
dX(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a7(0,g.gkA())||!a.a.a7(0,new A.rU(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eU(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aI){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ad}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.rV(s))
else k=!1
if(k)return!1
j=new A.l9(r,g,A.ai(o,t.AP),B.a7)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.L(0)
g.I(0,a.a)
g=i.c
g.L(0)
g.I(0,h)
i.r=j
return!0},
fu(a){var s=this.a,r=A.o(s).i("ab<1>"),q=r.i("H<n.E>")
s=A.K(new A.H(new A.ab(s,r),r.i("l(n.E)").a(new A.rP(a)),q),q.i("n.E"))
B.a.P(s,new A.rQ())
return s},
bW(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.n3
s=m.a.h(0,a)
if(s==null)return B.n4
r=B.d.a2(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bO:B.ao
o=p===B.ao&&m.x.q(0,q)&&s.R(B.bP)?B.bP:p
if(s.R(o))n=o
else n=s.R(B.ao)?B.ao:B.bO
r=s.h(0,n)
r.toString
m.r=new A.l9(a,n,A.ai(m.eU(a,n,r),t.AP),B.a7)
m.gc_()
r=m.r
r.toString
return new A.l8(r)},
kv(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dW
if(n.d!==B.a7)return B.n1
n.e=a
s=a===B.ad
n.d=s?B.aI:B.am
r=this.f
q=s?B.dU:B.mK
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dB(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dB(B.mN,o,p,a,null))
if(s)this.f4(n)
return new A.l6(n)},
kb(){var s,r=this.r
if(r==null)return B.dW
s=r.d
if(s!==B.am&&s!==B.an)return B.n2
if(this.gc_()!=null&&r.w==null)return new A.b9(new A.bl(B.a8,"The visitor is waiting for an answer."))
r.d=B.an
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aI
this.f4(r)
return new A.ik(r,!0)}return new A.ik(r,!1)},
kw(a){var s,r,q=this.r,p=this.gc_(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.am&&o!==B.an}if(o)return B.n0
o=p.f
s=A.C(o)
r=A.bK(new A.H(o,s.i("l(1)").a(new A.rS(a)),s.i("H<1>")),t.Y)
if(r==null)return B.n5
q.w=r.a
return new A.l7(q,p,r)},
kx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.am&&s!==B.an}else s=!0
if(s)return i
r=h.gbm()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cV
p=J.P(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aX(q,s,s)
m=c.jx(!0,!0,o,new A.t1(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aJ){B.a.l(this.f,new A.dB(B.mM,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.eE(B.a.gX(j.c).a,s,s)
s.I(0,q)
p.k8(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dX)if(k===B.bQ){s=n.b
s=s.gV(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dB(B.mL,o,p.b,i,l))}}return m},
f4(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eU(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.P(c);r.m();)s.push(this.jb(a,b,r.gn()))
return s},
jb(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bK(new A.H(p,r.i("l(1)").a(new A.rN(this)),r.i("H<1>")),t.aS)}return s==null?c:new A.c4(q,s.c,c.c)},
shT(a){this.x=t.Q.a(a)}}
A.rU.prototype={
$1(a){var s=this.a.a
return new A.ab(s,A.o(s).i("ab<1>")).N(0,new A.rT(A.r(a)))},
$S:3}
A.rT.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:16}
A.rV.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:14}
A.rP.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:16}
A.rQ.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:139}
A.rS.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.rR.prototype={
$0(){return A.c([],t.jV)},
$S:140}
A.rN.prototype={
$1(a){return t.aS.a(a).d.gJ().a7(0,new A.rM(this.a))},
$S:141}
A.rM.prototype={
$1(a){t.q.a(a)
return this.a.y.aY(a.a,a.b)},
$S:142}
A.rO.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:143}
A.lb.prototype={}
A.lG.prototype={}
A.vc.prototype={
$1(a){return B.b.T(A.r(a),"off.")},
$S:3}
A.bJ.prototype={
v(){return"DoorChoice."+this.b}}
A.c2.prototype={
v(){return"VisitPhase."+this.b}}
A.c3.prototype={
v(){return"VisitTier."+this.b}}
A.ea.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dB.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d4.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bl.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.bl&&b.a===this.a&&b.b===this.b},
gM(a){return A.cB(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c4.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.c4&&b.a===this.a&&b.b===this.b},
gM(a){return A.cB(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bP.prototype={
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.bP&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gM(a){var s=this
return A.cB(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.J(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.lc.prototype={
B(){var s,r,q,p=this.a
p=A.K(p,A.o(p).c)
B.a.Y(p)
s=this.b
r=A.o(s)
q=r.i("dh<1,W<f,@>>")
s=A.K(new A.dh(s,r.i("W<f,@>(1)").a(new A.rL()),q),q.i("n.E"))
r=this.c
return A.J(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rL.prototype={
$1(a){return t.L.a(a).B()},
$S:144}
A.jg.prototype={
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
A.mA.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:145}
A.mB.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:146}
A.mC.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:147}
A.l9.prototype={
gbm(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.rW.prototype={}
A.b9.prototype={}
A.l8.prototype={}
A.l6.prototype={}
A.ik.prototype={}
A.l7.prototype={}
A.fU.prototype={}
A.lJ.prototype={
gbB(){var s,r=this.y1
if(r){s=this.w
s===$&&A.p()
s=s.a.b}else s="safe"
return A.Cx("pixeldart",r?this.gkp():B.js,!1,null,s)},
gkp(){var s,r
if(!this.y1)return B.n
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.ey.kq(s,r)},
glz(){var s="shadowCaster",r=this.RG
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.h_(s).a+";shadowTriangles="+r.h_(s).b+";frameMs="+B.c.aL(this.rx,3)},
gly(){var s=this.RG
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.rx<=100},
mo(){var s,r=this
if(!r.y1||r.dE!=null)return
if(r.p2==null)return
s=r.e
s===$&&A.p()
s.gb1()
r.f===$&&A.p()
r.dE=new A.nS(new A.nT(A.c([],t.s6),A.c([],t.s3),A.c([],t.AO)))},
c6(){var s,r,q,p,o,n,m,l=this,k=A.CZ(l.a)
l.d=k
k=k.h5()
l.r=k
k=B.c4.ho(k)
l.w=k
q=l.b
p=l.c
s=new A.kW(q,p,q,p)
o=A.yl(l.d)
l.e=o
try{o.fT(l.iK(k,q,p),s)}catch(n){r=A.ao(n)
k=l.w
if(k===B.af)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.y(r)
l.w=B.af
k=A.yl(l.d)
k.fT(B.lh,s)
l.e=k}k=l.e
k.bR()
m=A.Cw(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c2=l.b
l.c3=l.c
l.eG()
l.lu=A.Cd(!0,!0,!0)
l.y1=!0},
bg(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.w("Pixeldart surface size must be positive",null))
if(!r.y1){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c4!==a||r.c5!==b)r.c5=r.c4=null
s=r.e
s===$&&A.p()
s.bR()
new A.kW(a,b,a,b).C()
if(r.y2==null)r.y2=r.bQ()},
bQ(){var s=0,r=A.bF(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bQ=A.bH(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.c2
h=n.b
if(!(i!==h||n.c3!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.e(m)
s=8
return A.au(A.uE(i,B.c7.fA("auto","full","srgb",h,"auto","profile",A.e(l),g)),$async$bQ)
case 8:n.c2=m
n.c3=l
n.c5=n.c4=null
A.ja()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ao(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.y(k)
n.c4=n.b
n.c5=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.y2=null
i=n.c4
h=n.b
j=i===h&&n.c5===n.c
if(!j)i=n.c2!==h||n.c3!==n.c
else i=!1
if(i)n.y2=n.bQ()
s=o.pop()
break
case 5:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$bQ,r)},
eD(a,b,c,d,e,f,g,h){return B.c7.fA(d,e,f,a,g,h,c,b)},
iK(a,b,c){return this.eD(a,b,c,"auto","full","srgb","auto","profile")},
eG(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.a1===s
if(p){r=7
break A}if(B.O===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.O===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.i(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.pn(r,p,A.a_(q),A.a_(q),A.m(q,t.i))},
cE(a){var s=0,r=A.bF(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cE=A.bH(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.y1){s=1
break}switch(a.b.a){case 0:i=B.dr
break
case 2:i=B.af
break
case 1:i=B.dq
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
k=n.eD(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.p()
s=7
return A.au(A.uE(i,t.lg.a(k)),$async$cE)
case 7:n.w=t.xK.a(m)
n.eG()
n.c2=n.b
n.c3=n.c
n.x=null
A.ja()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ao(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.y(j)
A.ja()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$cE,r)},
kf(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.y1||b4.Q.length!==0)return
b4.fH=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.k(0,b6,r.gb1().dT(8,"texture:wall-plaster",!0,256,B.aZ,256))
s.k(0,b7,b4.e.gb1().dT(8,"texture:grime",!0,512,B.aZ,512))
for(q=0;q<2;++q){p=B.jy[q]
r=b4.e.w
if(r==null)r=A.i(A.k(b8))
s.k(0,p,r.dT(8,"texture:"+p,!0,256,B.aZ,256))}b4.dm()
b4.cz()
b4.p2=b4.jB(A.pA(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.J(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cy(g,g.r,g.e,A.o(g).i("cy<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bj.h(0,c)
if(b==null)A.i(A.k("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.pA(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.i(A.k(b8))
if(a0.x)A.i(A.k(b9))
c.C()
a1=a0.b.a.aA(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.iV[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.di(a2)
j=b4.di(a2)
l=A.pA(n,!1,"quarantine-inventory-"+a2,!0,1,b4.di(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.i(A.k(b8)):j
if(n.x)A.i(A.k(b9))
l.C()
a1=n.b.a.aA(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.cz()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q)b4.j5(c0,r[q])
b4.jy(c0)
$.B.j().setAttribute("data-renderer-house-model-scale",B.c.aL(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.u)(r),++q){a4=r[q]
if(a4.at==null)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eJ(c0,i,a4)
g=b4.e.w
if(g==null)g=A.i(A.k(b8))
f=a4.a
if(g.x)A.i(A.k(b9))
e=g.a
a5.C()
a1=e.b.aA(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bc(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.p2
e.toString}a6=new A.bw(a1,e,B.u,0,B.T,B.ab,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.u.C()
a=e.a
a0=a.$ti
a.Z(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gar()
a0=A.C(c)
A.b0(new A.M(c,a0.i("I(1)").a(a.gaz()),a0.i("M<1,I>")))
n.k(0,f,new A.iE(f,g,e.b.c0(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.u)(r),++q){a4=r[q]
if(a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.ju(i,a4.aH(f),a4.ag(f),a4.ag(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.tE(a4))
a=b4.e.w
if(a==null)a=A.i(A.k(b8))
if(a.x)A.i(A.k(b9))
a0=a.a
e.C()
a1=a0.b.aA(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bc(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.p2
e.toString}else e=a
a8=new A.bw(a1,e,B.u,0,B.T,B.ab,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.u.C()
a=e.a
a0=a.$ti
a.Z(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.u.a9()
a=a.gar()
a7=A.C(a)
A.b0(new A.M(a,a7.i("I(1)").a(a0.gaz()),a7.i("M<1,I>")))
B.a.l(o,new A.lI(f,e.b.c0(a8),a8,c))}for(r=A.Gr(A.FO(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.df(e)
a0=b4.df(e)
a=A.pA(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.df(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.i(A.k(b8)):a0
if(c.x)A.i(A.k(b9))
a.C()
a1=c.b.a.aA(a,b5)
c.r.l(0,a1)
k.k(0,a.a,a)
f.k(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.i(A.k(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.i(A.k(b9))
a7=c.a
a.C()
a1=a7.b.aA(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bc(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ag.q(0,a0))A.i(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bw(a1,b,B.u,-1,B.T,B.ab,B.lG.q(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.p()
B.u.C()
c=e.a
a=c.$ti
c.Z(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gar()
a0=A.C(c)
A.b0(new A.M(c,a0.i("I(1)").a(a.gaz()),a0.i("M<1,I>")))
j.k(0,b2,e.b.c0(b3))}b4.mo()},
hr(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ai(a8.e,t.fl)
if(!a5.y1)return
for(s=a5.ch,r=new A.G(s,A.o(s).i("G<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.p()
o.b.b6(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.p()
p=p.w
if(p==null)p=A.i(A.k(a6))
o=n.a
if(p.x)A.i(A.k(a7))
p.a.b6(o)
p.f.a5(0,o)}}s.L(0)
q.L(0)
r=a5.cx
B.a.L(r)
for(p=a5.id,o=p.length,m=a8.c,l=a5.ok,k=0;k<o;++k){j=p[k]
i=j.c
h=B.b.q(i.toLowerCase(),"stair")
if(h)continue
h=j.r
h=h!=="story"&&h!=="architecture"
if(h)continue
h=a5.fH
g=h==null?null:h.e.h(0,j.b)
if(g==null)continue
f=a8.cF(i)
i=a5.e
i===$&&A.p()
i=i.w
if(i==null)i=A.i(A.k(a6))
h=a5.j8(f,j,m)
e=j.a
if(i.x)A.i(A.k(a7))
d=i.a
h.C()
c=d.b.aA(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bc(h))
i.f.l(0,c)
i=j.f
h=i.a
a=B.a6.gav()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=f.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=g.d
i=new A.kZ(new A.I(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.kA(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bw(c,a2,i,-1,B.T,B.ab,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.p()
i.C()
a2=d.a
h=a2.$ti
a2.Z(h.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.d(a2,b)
a4=a2[b].c
h=(a4==null?h.y[1].a(a4):a4).d
i=i.a9()
h=h.gar()
b=A.C(h)
A.b0(new A.M(h,b.i("I(1)").a(i.gaz()),b.i("M<1,I>")))
s.k(0,e,d.b.c0(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
hC(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aO([s],r)
for(p=c1.aJ(s),o=J.P(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.cd(s)
if(n.ax)n=!n.ay
else n=!1
if(n&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.G(b9,A.o(b9).i("G<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aF(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=b8.bV(i[f],k)
d=b8.f
d===$&&A.p()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.Z(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a9()
a=a.gar()
a0=A.C(a)
A.b0(new A.M(a,a0.i("I(1)").a(b.gaz()),a0.i("M<1,I>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.Z(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb4(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.u)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.p()
o=b8.bV(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.Z(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gar()
g=A.C(i)
A.b0(new A.M(i,g.i("I(1)").a(n.gaz()),g.i("M<1,I>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb4(o)}b9=b8.fr
s=A.o(b9).i("ab<1>")
s=A.K(new A.ab(b9,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.u)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bV(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.p()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.Z(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.a9()
g=g.gar()
d=A.C(g)
A.b0(new A.M(g,d.i("I(1)").a(i.gaz()),d.i("M<1,I>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb4(e)
b9.k(0,a5.a,a5.kG(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.p()
i=b8.bV(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.Z(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.d(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.a9()
d=d.gar()
c=A.C(d)
A.b0(new A.M(d,c.i("I(1)").a(g.gaz()),c.i("M<1,I>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.Z(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb4(i)}a9=new A.jL().ku(c2)
b9=$.B.j()
s=A.K(a9,A.o(a9).c)
B.a.Y(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.W(s,","))
b9=b8.dx
r=new A.jL().fJ(new A.tF(b8),new A.ab(b9,A.o(b9).i("ab<1>")),a9,r)
b0=A.kb(r,r.$ti.i("n.E"))
b9=b8.db
s=A.o(b9).i("ab<1>")
s=A.K(new A.ab(b9,s),s.i("n.E"))
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
b6=b0.q(0,b4)
if(b6)++b1
if(b6&&o)++b2
e=b8.bV(a8,b6?-1:0)
o=b8.f
o===$&&A.p()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.Z(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gar()
g=A.C(i)
A.b0(new A.M(i,g.i("I(1)").a(n.gaz()),g.i("M<1,I>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.Z(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb4(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("dh<1,f>")
b7=A.K(new A.dh(b0,b9.i("f(1)").a(new A.tG(b8)),s),s.i("n.E"))
B.a.Y(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.W(b7,","))},
cP(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.y1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.f6(b0,n)
l=J.aF(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.i(A.k(a8))
c=a7.eV(e.b)
b=g.b
if(d.x)A.i(A.k(a9))
a=d.a
c.C()
a0=a.b.aA(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bc(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bw(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.p()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.Z(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a9()
b=b.gar()
a3=A.C(b)
A.b0(new A.M(b,a3.i("I(1)").a(d.gaz()),a3.i("M<1,I>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.Z(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb4(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a5(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.i(A.k(a8)):a
if(d.x)A.i(A.k(a9))
d.a.b6(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fI+1));++a7.fI},
dS(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.y1)return
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
m=p.gb1().ms(k.eJ(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bw(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.k0(l)
p.b.e0(n,l)
s.k(0,b,r.fE(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gb1().mt(n)},
hs(d2,d3,d4,d5,d6,d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="time_override",c5="wetness_override",c6="fog_density",c7="fog_height_falloff",c8="rain_override",c9=A.aO([d3],t.N),d0=d2.e,d1=d0.h(0,d3)
if(d1!=null)for(s=d1.a,r=d2.aJ(s),q=J.P(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.cd(s)
if(p.ax)p=!p.ay
else p=!1
if(p&&o!=null&&d0.h(0,o)!=null)c9.l(0,o)}n=new A.oL(d2).n0(c9,d4)
d0=t.jC
m=A.c([],d0)
l=A.c([],d0)
for(k=0;k<n.length;++k){j=n[k]
d0=k===0
s=d0?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.i(A.ah(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.i(A.ah(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.i(A.ah(p,"radius","must be finite and > 0"))
d0=d0?l:m
B.a.l(d0,new A.aU(k,s,j.a,new A.j((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d0=c3.fx
d0===$&&A.p()
i=d0.mp(d4,m,l)
d0=A.m(t.S,t.A_)
for(k=0;k<n.length;++k)d0.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.u)(r),++h){g=r[h]
p=d0.h(0,g.a).a
f=g.d
s.push(new A.kt(new A.I(p.a,p.b,p.c),new A.bY(f.a,f.b,f.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.u)(q),++h){g=q[h]
f=g.a
e=d0.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bz(f,new A.I(d.a,d.b,d.c),new A.I(e.a,e.b,e.c),new A.bY(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c3.iw(i,++c3.fy)
d0=$.hh()
b=d0.F(c4)
if(b>=0)a=B.c.D(b,0,23.999)
else a=d9
a0=d7.c
a1=B.c.S(B.c.S(a,24)+24,24)
a2=B.c.D(a0,0,1)
a3=B.c.D(d7.d,6,16)/2
a4=13-a3
a5=13+a3
q=a1>=a4
a6=q&&a1<=a5?Math.sin(3.141592653589793*((a1-a4)/(a5-a4)))*65:-18
a7=a6*3.141592653589793/180
a8=(90+a1/24*360)*3.141592653589793/180
p=Math.cos(a8)*Math.cos(a7)
f=B.c.D(Math.sin(a7),0,1)
e=Math.sin(a8)*Math.cos(a7)
d=B.c.D(1-f,0.1,0.9)
c=a4-1.5
if(a1>=c&&a1<a4){a9=(a1-c)/1.5
b0=A.cb(B.kV,B.bt,a9)
b1=A.cb(B.kX,B.bs,a9)
b2=A.cb(B.kR,B.bu,a9)
b3=0.3+0.5*a9
b4=0.25+0.2*a9}else if(q&&a1<14){b0=B.bt
b1=B.bs
b2=B.bu
b3=0.85
b4=0.45}else if(a1>=14&&a1<a5){a9=(a1-14)/(a5-14)
b0=A.cb(B.bt,B.ds,a9)
b1=A.cb(B.bs,B.dv,a9)
b2=A.cb(B.bu,B.du,a9)
b3=0.85*(1-a9*0.35)
b4=0.45*(1-a9*0.25)}else if(a1>=a5&&a1<a5+1.5){a9=(a1-a5)/1.5
b0=A.cb(B.ds,B.aC,a9)
b1=A.cb(B.dv,B.aB,a9)
b2=A.cb(B.du,B.aD,a9)
b3=0.55*(1-a9*0.8)
b4=0.34*(1-a9*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){a9=(a1-q)/1.5
b0=A.cb(B.aC,B.aC,a9)
b1=A.cb(B.aB,B.aB,a9)
b2=A.cb(B.aD,B.aD,a9)
b3=0.11*(1-a9*0.25)
b4=0.16*(1-a9*0.15)}else{b0=B.aC
b1=B.aB
b2=B.aD
b3=0.15
b4=0.18}}if(a2>0){b5=A.cb(b2,B.l4,a2*0.7)
b3*=1-a2*0.35
b4*=1-a2*0.15}else b5=b2
b6=d8?1:0.15
B.c.D(a2*0.75+B.c.D(0.3333333333333333,0,1)*0.25,0,1)
q=$.AO().a
q.k(0,"pbrRoughnessScale",d0.F("pbr_roughness"))
q.k(0,"pbrMetallicScale",d0.F("pbr_metallic"))
q.k(0,"pbrSpecularMult",d0.F("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d0.F("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d0.F("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d0.F("light_ambient_mult"))
q.k(0,"directLightScale",d0.F("light_direct_mult"))
q.k(0,"ssdoEnabled",d0.aQ("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d0.F("shadow_ao_intensity"))
q.k(0,"csmEnabled",d0.aQ("shadow_csm_enable"))
q.k(0,"csmHardness",d0.F("shadow_csm_hardness"))
q.k(0,"shadowBias",d0.F("shadow_bias"))
q.k(0,"weatheringEnabled",d0.aQ("weathering_enable"))
q.k(0,"normalBumpStrength",d0.F("normal_bump_strength"))
q.k(0,"grimeAccumulation",d0.F("grime_accumulation"))
q.k(0,"wetnessOverride",d0.F(c5))
q.k(0,"fogEnabled",d0.aQ("fog_enable"))
q.k(0,"fogDensity",d0.F(c6))
q.k(0,"fogHeightFalloff",d0.F(c7))
q.k(0,"volumetricEnabled",d0.aQ("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d0.F("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d0.F("volumetric_scattering"))
q.k(0,"ssrEnabled",d0.aQ("ssr_enable"))
q.k(0,"tonemapMode",B.c.ah(d0.F("tonemap_mode")))
q.k(0,"ssssEnabled",d0.aQ("ssss_enable"))
q.k(0,"taaEnabled",d0.aQ("taa_enable"))
q.k(0,"lensFlareEnabled",d0.aQ("lens_flare_enable"))
q.k(0,"timeOverride",d0.F(c4))
q.k(0,"rainOverride",d0.F(c8))
q.k(0,"postBloom",d0.F("post_bloom"))
q.k(0,"postVignette",d0.F("post_vignette"))
q.k(0,"postChromaticAberration",d0.F("post_chromatic_aberration"))
q.k(0,"postFilmGrain",d0.F("post_film_grain"))
q.k(0,"postExposure",d0.F("post_exposure"))
q.k(0,"postSaturation",d0.F("post_saturation"))
q.k(0,"postBloomThreshold",d0.F("post_bloom_threshold"))
q.k(0,"postDither",d0.F("post_dither"))
q.k(0,"postDepthOfField",d0.F("post_depth_of_field"))
q.k(0,"postColorGrade",d0.F("post_color_grade"))
q.k(0,"postAffineWarp",d0.F("post_affine_warp"))
q.k(0,"postVertexSnap",d0.F("post_vertex_snap"))
q.k(0,"postQuantizationBits",B.c.ah(d0.F("post_quantization_bits")))
q.k(0,"postVhsChroma",d0.F("post_vhs_chroma"))
q.k(0,"postVhsNoise",d0.F("post_vhs_noise"))
q.k(0,"contactLightBoost",d0.F("light_contact_boost"))
q.k(0,"debugViewMode",d0.e.b)
$.B.j().setAttribute("data-renderer-shader-overrides",B.j.ab(q,null))
if(d0.F(c8)>=0)a0=d0.F(c8)
if(d0.F(c5)>=0)d0.F(c5)
q=$.AN()
q.mW(0.0166,a0)
b7=q.f
b8=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b9=b8>0.001
c0=b9?new A.I(p,f,e):new A.I(-p,d,-e)
c1=b9?new A.bY(b0.c,b0.b,b0.a):new A.bY(0.35,0.45,0.65)
q=b7.a
if(q){p=b7.b
c2=new A.bY(c1.a+b7.c*p*2,c1.b+b7.d*p*2,c1.c+b7.e*p*2.5)}else c2=c1
b3*=b6
if(q)b3+=b7.b*4.5
q=Math.max(0.045,b4*(b9?b8:1)*b6)
c3.p4=new A.jP(B.ij,new A.bY(b5.c*0.08,b5.b*0.08,b5.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),d0.F(c7),d0.F(c6),new A.bY(b1.c,b1.b,b1.a),q,new A.nG(c0,c2,b3),s,r)},
bs(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1)throw A.b(A.k("Pixeldart runtime is not initialized"))
s=i.p3
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dq(s)
s=$.xr()
q=s.b
p=s.c
o=A.wb(i.b/i.c,p,s.a,q)
p=new A.fj(r,o,o.ak(0,r),B.al,B.mv,q,p,i.b/i.c)
s=p}q=i.p4
p=i.R8
n=i.x2++
m=i.ry
l=new A.ro()
$.xm()
k=$.qf.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.p()
j=i.f
j===$&&A.p()
k.ki(j,new A.o0(s,q,p,n,m))
i.RG=i.e.lr()
s=$.qf.$0()
l.b=s
i.rx=l.glo()/1000},
f6(a,b){var s=A.FP(a,b),r=A.FN(a,b),q=A.K(s.c,t.i)
B.a.I(q,r)
return A.c([new A.fU("wall",new Float32Array(A.a0(q))),new A.fU("floor",s.a),new A.fU("ceiling",s.b)],t.pv)},
eV(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.I(q,p,a[o]))}if(n.length===0)throw A.b(A.k("house surface mesh cannot be empty"))
return new A.ch(B.ac,a,null,A.b0(n))},
j5(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f6(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.k("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.i(A.k("renderer is not initialized"))
j=b.eV(l.b)
i=l.a
if(k.x)A.i(A.k("resource library is disposed"))
h=k.a
j.C()
g=h.b.aA(j,n+i)
f=g.a
h.c.k(0,f,h.bc(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bw(g,i,B.u,-1,B.T,B.ab,!0,!0,0,null)
i=b.f
i===$&&A.p()
B.u.C()
k=i.a
j=k.$ti
k.Z(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.u.a9()
k=k.gar()
h=A.C(k)
A.b0(new A.M(k,h.i("I(1)").a(j.gaz()),h.i("M<1,I>")))
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
jy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.J(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cy(l,l.r,l.e,A.o(l).i("cy<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bj.h(0,i)
if(h==null)A.i(A.k("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Y(d)
f=$.B.j()
B.a.Y(e)
f.setAttribute("data-renderer-house-materials",B.a.W(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.W(d,","))},
j8(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d0(new Float32Array(5376))
g=this.j7(a0.b)
r=new A.j(d,b,f)
q=new A.j(e,b,f)
p=new A.j(e,c,f)
o=new A.j(d,c,f)
n=new A.j(d,b,a)
m=new A.j(e,b,a)
l=new A.j(e,c,a)
k=new A.j(d,c,a)
s.aD(q,r,o,p,g)
s.aD(n,m,l,k,g)
s.aD(r,n,k,o,g)
s.aD(m,q,p,l,g)
s.aD(r,q,m,n,g)
s.aD(o,k,l,p,g)
j=B.t.aR(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.I(e,d,j[c]))}return new A.ch(B.ac,j,null,A.b0(g))},
j7(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
df(a){var s
A:{if(0===a){s=B.kS
break A}if(1===a){s=B.kU
break A}if(2===a){s=B.l_
break A}if(3===a){s=B.l7
break A}if(4===a){s=B.l8
break A}if(5===a){s=B.kY
break A}if(6===a){s=B.l6
break A}if(7===a){s=B.l2
break A}s=B.l5
break A}return s},
di(a){var s
A:{if("architecture"===a){s=B.kT
break A}if("furniture"===a){s=B.dt
break A}if("fixture"===a){s=B.l1
break A}if("service"===a){s=B.l3
break A}if("story"===a){s=B.l0
break A}if("decor"===a){s=B.kW
break A}if("micro"===a){s=B.kZ
break A}s=B.dt
break A}return s},
cL(a){return this.lP(t.G.a(a))},
lP(a){var s=0,r=A.bF(t.H),q,p=this,o,n,m,l
var $async$cL=A.bH(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:if(!p.y1){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.ix[n]
l=a.h(0,m)
if(l!=null)o.push(p.cv(m,l))}s=3
return A.au(A.o6(o,t.H),$async$cL)
case 3:case 1:return A.bD(q,r)}})
return A.bE($async$cL,r)},
cv(a,b){return this.jc(a,b)},
jc(a,b){var s=0,r=A.bF(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cv=A.bH(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.au(A.bT(A.a(m.decode()),t.X),$async$cv)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.e(m.naturalWidth)
g.height=A.e(m.naturalHeight)
l=g
k=A.F(l.getContext("2d"))
if(!t.m.b(k)){h=A.k("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.e(m.naturalWidth),A.e(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gb1()
f=new Uint8Array(A.a0(j))
if(h.x)A.i(A.k("resource library is disposed"))
h.c.mX(d,f)
h=n.e.gb1()
if(h.x)A.i(A.k("resource library is disposed"))
h.c.lx(d)
$.B.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dm()
n.cz()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ao(c)
h=$.B.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dm()
n.cz()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.y(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$cv,r)},
dm(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1||i.k1.a===0)return
s=i.k1
r=A.o(s).i("G<1,2>")
r=A.kc(new A.G(s,r),r.i("bO(n.E)").a(new A.tA()),r.i("n.E"),t.jP)
q=A.K(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.p()
p=s.gb1().gff().cN(q)
s=p.a
o=A.c(s.slice(0),A.C(s))
B.a.P(o,new A.tB())
s=A.C(o)
r=s.i("f(1)")
s=s.i("M<1,f>")
n=new A.M(o,r.a(new A.tC()),s).W(0,",")
m=new A.M(o,r.a(new A.tD()),s).W(0,",")
s=p.cC(B.dL)
r=p.cC(B.dM)
l=p.cC(B.dN)
k=p.cC(B.dO);++i.xr
j=$.B.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.xr)
if(!A.Q($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",n)},
cz(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.y1||j.p1.a===0)return
s=A.c([],t.a6)
for(r=j.p1,r=new A.G(r,A.o(r).i("G<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cV(p,o,B.b.q(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gb1()
n=r.e
if(n===$){p=r.gff()
r.e!==$&&A.xg()
n=r.e=new A.pB(p)}m=n.cN(s)
s=m.a
l=A.c(s.slice(0),A.C(s))
B.a.P(l,new A.ty())
s=A.C(l)
k=new A.M(l,s.i("f(1)").a(new A.tz()),s.i("M<1,f>")).W(0,",")
s=$.B.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cs(B.bm)+";pending="+m.cs(B.d7)+";missing="+m.cs(B.d8)+";evicted="+m.cs(B.d9))},
bV(a,b){return new A.bw(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eJ(a,b,c){var s,r,q,p,o,n=A.FM(a,b,c),m=n.length
if(m===0)throw A.b(A.k("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.I(q,p,n[o]))}return new A.ch(B.ac,n,null,A.b0(s))},
ju(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aC(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.d0(new Float32Array(5376))
o.aD(k[0],k[1],k[2],k[3],g)
n=B.t.aR(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.I(r,q,n[p]))}return new A.ch(B.ac,n,null,A.b0(k))},
iw(a,b){var s,r,q,p=a.e,o=A.o(p).i("G<1,2>"),n=A.K(new A.G(p,o),o.i("n.E"))
B.a.P(n,new A.tu())
p=$.B.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.M(o,s.i("h(1)").a(new A.tv()),s.i("M<1,h>")).W(0,":")+";spots="+new A.M(r,q.i("h(1)").a(new A.tw()),q.i("M<1,h>")).W(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.M(n,q.i("f(1)").a(new A.tx()),q.i("M<1,f>")).W(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
jB(a){var s,r=this.e
r===$&&A.p()
r=r.gb1()
if(r.x)A.i(A.k("resource library is disposed"))
a.C()
s=r.b.a.aA(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iCy:1}
A.tE.prototype={
$0(){var s=this.a
if(s.ax)s=!s.ay
else s=!1
return!s},
$S:40}
A.tF.prototype={
$1(a){var s=this.a.dx.h(0,A.r(a))
s.toString
return s},
$S:41}
A.tG.prototype={
$1(a){var s,r,q,p
A.r(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.k("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:41}
A.tA.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bO(s,a.b,r)},
$S:150}
A.tB.prototype={
$2(a,b){var s=t.e
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:151}
A.tC.prototype={
$1(a){t.e.a(a)
return a.a.a+"="+a.b.b},
$S:42}
A.tD.prototype={
$1(a){var s=t.e.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:42}
A.ty.prototype={
$2(a,b){var s=t.wl
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:153}
A.tz.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:154}
A.tu.prototype={
$2(a,b){var s=t.ou
return B.d.G(s.a(a).a,s.a(b).a)},
$S:155}
A.tv.prototype={
$1(a){return t.p.a(a).a},
$S:43}
A.tw.prototype={
$1(a){return t.p.a(a).a},
$S:43}
A.tx.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:157}
A.lI.prototype={}
A.iE.prototype={
fE(a,b){var s=this,r=b==null?s.d:b
return new A.iE(s.a,s.b,s.c,r,a)},
kG(a){return this.fE(a,null)}}
A.t7.prototype={}
A.u5.prototype={
$2(a,b){var s
A.x_(a,A.y(b))
switch(a){case"master":s=$.bp
if(s!=null)s.hw(b)
break
case"voice":s=$.bp
if(s!=null)s.hy(b)
break
case"effects":s=$.bp
if(s!=null)s.hv(b)
break
case"ambience":s=$.bp
if(s!=null)s.hu(b)
break
case"music":s=$.bp
if(s!=null)s.hx(b)
break}},
$S:44}
A.u6.prototype={
$1(a){var s
A.x_("muted",""+a)
s=$.bp
if(s!=null)s.ec(a)},
$S:8}
A.u7.prototype={
$1(a){var s
A.x_("mono",""+a)
s=$.bp
if(s!=null)s.cW(a)},
$S:8}
A.ud.prototype={
$2(a,b){A.x0(a,A.y(b))
A.z7(a,b)},
$S:44}
A.ue.prototype={
$1(a){var s="high-contrast"
A.x0(s,""+a)
A.tU(s,a)},
$S:8}
A.uf.prototype={
$1(a){var s="strong-highlights"
A.x0(s,""+a)
A.tU(s,a)},
$S:8}
A.ug.prototype={
$1(a){$.dc().mx(a)
A.uS()
A.z9()},
$S:159}
A.uh.prototype={
$0(){var s=$.dc()
s.a=A.dw(null,1)
s.b=A.dw(null,1)
A.uS()
A.z9()},
$S:0}
A.ui.prototype={
$0(){A.dI(this.a)},
$S:0}
A.uj.prototype={
$0(){this.a.a6()},
$S:0}
A.uk.prototype={
$0(){A.dI(this.a)},
$S:0}
A.u8.prototype={
$0(){A.h5(this.a)},
$S:0}
A.u9.prototype={
$1(a){$.j3=a
A.zD()
A.wx()},
$S:160}
A.ua.prototype={
$1(a){var s=$.cJ()
$.wI=a
if(!s.Q&&a.Q){$.bd.j().a=1
$.bd.j().h7(7)
$.at.j().fQ()
$.cq().L(0)}A.zF()
A.z8()},
$S:161}
A.ub.prototype={
$1(a){$.ek=a
A.wP()
A.m8()},
$S:162}
A.uc.prototype={
$0(){$.ek=B.ap
$.f5.j().e9($.ek)
A.wP()
A.m8()},
$S:0}
A.u2.prototype={
$1(a){var s,r=A.Ad(a,A.zq())
$.j4=A.fy($.he().b,a)
s=r.b
$.ej.j().cm(a,$.he().b,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.W(s,"|"))
$.zr=A.mb(a,r,$.zr)},
$S:163}
A.u3.prototype={
$0(){A.dI($.ej.j())},
$S:0}
A.u4.prototype={
$0(){A.dI($.ej.j())},
$S:0}
A.tZ.prototype={
$1(a){},
$S:15}
A.u_.prototype={
$1(a){var s,r
$.wF=a
$.ad.j().ea(a.r)
s=$.ad.j()
r=s.ch
r.a=a.f
r.dV()
s.b9()
A.zE()},
$S:164}
A.u0.prototype={
$0(){A.dI($.iW.j())},
$S:0}
A.u1.prototype={
$0(){A.dI($.iW.j())},
$S:0}
A.uM.prototype={
$0(){$.v0=A.Q(this.a.matches)
$.x3=A.Q(this.b.matches)
A.m8()},
$S:0}
A.uK.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uL.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vk.prototype={
$1(a){var s
try{A.xO(a,this.a)
return!0}catch(s){if(A.ao(s) instanceof A.D)return!1
else throw s}},
$S:165}
A.vl.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j2.j()
break
case 5:p=$.f5.j()
break
case 1:p=$.ej.j()
break
case 4:p=$.h_.j()
break
case 2:p=$.iY.j()
break
case 3:p=$.iW.j()
break}s=p
r=null
switch(o){case 0:r=B.ko
break
case 5:r=B.kt
break
case 1:r=B.kp
break
case 4:r=B.ks
break
case 2:r=B.kq
break
case 3:r=B.kr
break}q=r
p=B.d3.h(0,a)
p.toString
A.wO(s,q,p)},
$S:166}
A.vm.prototype={
$0(){A.dI($.h1.j())},
$S:0}
A.vx.prototype={
$0(){return A.dI($.h1.j())},
$S:0}
A.vG.prototype={
$0(){$.cn.j().a6()},
$S:0}
A.vH.prototype={
$0(){$.cn.j().a6()},
$S:0}
A.vI.prototype={
$0(){A.wO($.h1.j(),B.dc,"pause.settings")},
$S:0}
A.vJ.prototype={
$0(){$.cn.j().a6()
A.j8($.iZ.j())},
$S:0}
A.vK.prototype={
$0(){A.ml("saved")},
$S:0}
A.vL.prototype={
$0(){$.cn.j().a6()
A.j8($.iZ.j())},
$S:0}
A.vM.prototype={
$0(){A.wO($.m5.j(),B.ku,"pause.credits")},
$S:0}
A.vn.prototype={
$0(){return A.h5($.cn.j())},
$S:0}
A.vo.prototype={
$0(){return A.h5($.j_.j())},
$S:0}
A.vp.prototype={
$2(a,b){var s,r
if($.at.j().y){s=$.aE.j().gc_()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.E6(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cP,a)
A.E5(B.cP[a])}}},
$S:167}
A.vq.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gaa().a===21){A.zK(!1)
return}s=$.X.j().r.b
$.T.j().hN(a,b,$.av)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e7()
if(typeof n!=="number")return A.ve(n)
if(!(o<n))break
if($.X.b===$.X)A.i(A.aa(""))
p=B.a.h(B.M,q).b
o=$.aK
if(o!=null){n=$.X.b
if(n===$.X)A.i(A.aa(""))
o.cP(n,p)}o=q
if(typeof o!=="number")return o.aj()
q=o+1}A.ml("saved after sleep")},
$S:168}
A.vr.prototype={
$0(){return A.h5($.m7.j())},
$S:0}
A.vs.prototype={
$0(){return A.h5($.iZ.j())},
$S:0}
A.vt.prototype={
$0(){return A.dI($.m5.j())},
$S:0}
A.vu.prototype={
$0(){A.h5($.iX.j())},
$S:0}
A.vv.prototype={
$0(){A.h5($.iX.j())},
$S:0}
A.vw.prototype={
$1(a){return A.zJ()},
$S:2}
A.vy.prototype={
$1(a){if(A.r(A.a(v.G.document).visibilityState)==="hidden")A.F3()},
$S:1}
A.vz.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.r(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.hh()
o=!p.a
p.a=o
if(o)A.p8(A.a(v.G.document),"exitPointerLock",t.X)
else $.ad.j().cQ($.B.j())
return}p=$.hh()
if(p.a&&!A.Q(m.repeat)){if(A.r(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ad.j().cQ($.B.j())
return}if(A.r(m.code)==="ArrowUp"||A.r(m.code)==="KeyW"){m.preventDefault()
n=p.gbf().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.em
if(o!=null){p=p.gbf().length
o.a.cV(-1,p)}return}if(A.r(m.code)==="ArrowDown"||A.r(m.code)==="KeyS"){m.preventDefault()
n=p.gbf().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.em
if(o!=null){p=p.gbf().length
o.a.cV(1,p)}return}if(A.r(m.code)==="ArrowLeft"||A.r(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.cY[B.d.S(p.e.a-1+7,7)]
else{p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w,p.f,p.r)}return}if(A.r(m.code)==="ArrowRight"||A.r(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.cY[(p.e.a+1)%7]
else{p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w,p.f,p.r)}return}if(A.r(m.code)==="KeyQ"){m.preventDefault()
p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w*0.2,p.f,p.r)
return}if(A.r(m.code)==="KeyE"){m.preventDefault()
p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w*0.2,p.f,p.r)
return}if(A.r(m.code)==="KeyR"){m.preventDefault()
if(A.Q(m.shiftKey))p.mw()
else p.my()
return}if(B.b.T(A.r(m.code),"Digit")||B.b.T(A.r(m.code),"Numpad")){o=A.r(m.code)
o=A.xf(o,"Digit","")
s=A.xf(o,"Numpad","")
r=A.dt(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.at.j().y&&!A.Q(m.repeat))if($.cq().lC(A.r(m.code))){m.preventDefault()
return}if(A.r(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.be
if(p==null)A.j8($.cn.j())
else p.a6()
return}q=$.be==null&&!p.a
if(!A.Q(m.repeat)&&q)$.f6.j().dG(new A.kE(A.r(m.code),!0,1))
if(A.r(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.AF())$.mi=!$.mi
if((A.r(m.code)==="KeyJ"||A.r(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.at.j().y){m.preventDefault()
A.jb($.j_.j())}if(A.r(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.at.j().y)A.jb($.m7.j())
if(A.r(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.at.j().y)A.jb($.iZ.j())
if(A.r(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.at.j().y)A.jb($.j1.j())
if(A.r(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.ml("saved")},
$S:1}
A.vA.prototype={
$1(a){var s=A.a(a)
if($.be==null)$.f6.j().dG(new A.kE(A.r(s.code),!1,0))},
$S:1}
A.vB.prototype={
$1(a){return A.zb()},
$S:2}
A.vC.prototype={
$1(a){return A.zb()},
$S:2}
A.vD.prototype={
$1(a){return A.Ey(A.a(a))},
$S:2}
A.vE.prototype={
$1(a){var s=A.a(a)
if($.at.j().y){s.preventDefault()
A.Ex(s)
return}$.ad.j().cQ($.B.j())},
$S:1}
A.vF.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hh()
if(!o.a||$.em==null)return
p.preventDefault()
s=o.gbf()
r=A.a6(p.deltaY)>0?1:-1
o=$.em
o.toString
q=J.cK(s)
o.a.cV(A.e(r),q)},
$S:1}
A.uN.prototype={
$1(a){var s=A.r(A.a(a).message)
A.uV(s,null)},
$S:1}
A.uO.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.uV("unhandled rejection: "+A.y(s==null?A.r(a.type):s),null)},
$S:1}
A.uR.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:38}
A.uZ.prototype={
$0(){this.a.className=""},
$S:12}
A.v2.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:31}
A.uQ.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:20}
A.uW.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.uT.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.uU.prototype={
$1(a){return t.fW.a(a).w},
$S:26};(function aliases(){var s=J.e_.prototype
s.hW=s.p
s=A.n.prototype
s.hV=s.cT
s=A.hY.prototype
s.hX=s.bI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"EF","BZ",29)
r(J.q.prototype,"gaq","q",10)
q(A,"ET","Cg",39)
r(A.aM.prototype,"gaq","q",10)
p(A.cf.prototype,"gkA","R",10)
o(A,"FI","De",17)
o(A,"FJ","Df",17)
o(A,"FK","Dg",17)
q(A,"zZ","Fq",0)
s(A,"FR","C3",29)
r(A.ck.prototype,"gaq","q",10)
r(A.fR.prototype,"gaq","q",10)
o(A,"FU","Ef",13)
p(A.ke.prototype,"gmD","mE",89)
var n
p(n=A.kY.prototype,"gmz","mA",9)
p(n,"gmH","mI",9)
p(n,"gmJ","mK",9)
p(n,"gmB","mC",9)
p(n,"gmF","mG",9)
q(A,"A2","Dj",171)
q(A,"Hn","wd",40)
p(A.dq.prototype,"gaz","h9",58)
p(n=A.k0.prototype,"gje","jf",2)
p(n,"gjg","jh",2)
p(n,"gjk","jl",2)
p(n,"gjo","jp",2)
p(n,"gjq","jr",2)
p(n,"gjm","jn",2)
p(n,"gji","jj",2)
o(A,"Gf","zh",13)
o(A,"Gj","zg",13)
o(A,"G8","BW",172)
o(A,"G9","BX",173)
o(A,"Gn","BQ",174)
p(A.hY.prototype,"gjs","jt",2)
p(A.fM.prototype,"gj3","j4",122)
p(A.la.prototype,"glK","lL",16)
o(A,"Ac","F6",175)
q(A,"Ab","Ec",0)
o(A,"Gc","E7",117)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.N,null)
q(A.N,[A.w5,J.k2,A.i7,J.eq,A.n,A.hm,A.dQ,A.al,A.V,A.qE,A.aH,A.hO,A.S,A.hx,A.hu,A.im,A.ax,A.d2,A.bb,A.fC,A.fn,A.f0,A.dv,A.rD,A.pS,A.hv,A.iJ,A.a5,A.pu,A.cg,A.af,A.cy,A.hG,A.lE,A.lk,A.id,A.lW,A.t9,A.cE,A.lx,A.lZ,A.tK,A.ll,A.c6,A.b1,A.lp,A.dE,A.as,A.lm,A.lU,A.iU,A.iv,A.lD,A.f1,A.iy,A.iO,A.m_,A.eu,A.jx,A.ts,A.tN,A.ev,A.dS,A.lu,A.ko,A.ib,A.ta,A.D,A.L,A.ar,A.lX,A.ro,A.bk,A.iQ,A.rF,A.lR,A.pR,A.lA,A.ee,A.qi,A.e4,A.kv,A.ni,A.nj,A.nl,A.nk,A.ku,A.fj,A.jP,A.o0,A.du,A.jX,A.bY,A.nG,A.kt,A.bz,A.e1,A.bA,A.rJ,A.ch,A.pT,A.kw,A.kG,A.bw,A.kW,A.i4,A.aG,A.o2,A.cV,A.bZ,A.pD,A.pB,A.ke,A.l1,A.pJ,A.bO,A.c1,A.ry,A.rw,A.d9,A.kY,A.eD,A.jM,A.jN,A.o1,A.o_,A.fT,A.ay,A.bg,A.aI,A.O,A.ho,A.ky,A.bj,A.qk,A.b5,A.qm,A.ql,A.lz,A.i3,A.kF,A.tb,A.lY,A.tJ,A.lK,A.lw,A.lO,A.lH,A.tn,A.bL,A.bI,A.aP,A.nB,A.nA,A.jd,A.eH,A.o3,A.dq,A.kA,A.kZ,A.I,A.hl,A.ln,A.jp,A.lo,A.jB,A.lr,A.hs,A.ls,A.jE,A.lt,A.jW,A.ly,A.hQ,A.lF,A.fh,A.jq,A.we,A.i0,A.lL,A.kz,A.lM,A.eR,A.kO,A.lP,A.kP,A.lQ,A.kS,A.lT,A.kR,A.lS,A.l5,A.m0,A.i5,A.lg,A.m3,A.ng,A.jS,A.jU,A.hA,A.i9,A.x,A.jC,A.fG,A.om,A.eh,A.cY,A.ft,A.t0,A.dF,A.iT,A.iS,A.m2,A.m1,A.tR,A.jD,A.jk,A.fW,A.mO,A.mw,A.hj,A.mK,A.w1,A.mW,A.mQ,A.io,A.fi,A.nd,A.nS,A.nT,A.nZ,A.k0,A.p0,A.p4,A.aU,A.pq,A.pn,A.nC,A.pw,A.d0,A.j,A.kT,A.lh,A.n6,A.jF,A.nM,A.fu,A.bn,A.ks,A.qc,A.fL,A.qz,A.eO,A.jQ,A.oa,A.o9,A.jr,A.kf,A.cG,A.li,A.hD,A.oE,A.Z,A.jJ,A.jY,A.oF,A.jK,A.d8,A.jL,A.ed,A.dU,A.qw,A.ec,A.oC,A.nQ,A.rk,A.oH,A.cU,A.cw,A.p7,A.p5,A.p6,A.ds,A.oL,A.dD,A.bv,A.fB,A.hZ,A.jG,A.e7,A.cD,A.oO,A.cT,A.oD,A.eC,A.oN,A.cS,A.oS,A.i_,A.hN,A.bh,A.rX,A.ka,A.bV,A.pa,A.n2,A.hk,A.n3,A.pm,A.pl,A.q8,A.q7,A.q9,A.qa,A.qb,A.k9,A.qh,A.qu,A.kE,A.qt,A.qv,A.rf,A.e6,A.rg,A.fN,A.nD,A.t1,A.eW,A.jv,A.oZ,A.p2,A.qx,A.cZ,A.qy,A.jR,A.eV,A.rY,A.pM,A.cN,A.bt,A.q5,A.rq,A.eU,A.eT,A.il,A.ld,A.eK,A.d5,A.rp,A.kL,A.kI,A.kJ,A.kK,A.rt,A.je,A.w0,A.dK,A.mG,A.dL,A.n5,A.b2,A.ne,A.fo,A.dg,A.jw,A.hY,A.nH,A.og,A.oi,A.fw,A.dV,A.oy,A.op,A.oq,A.ca,A.oz,A.cW,A.fk,A.pV,A.dr,A.e2,A.c_,A.q_,A.qg,A.aZ,A.ra,A.re,A.cr,A.mD,A.la,A.rW,A.dB,A.bl,A.c4,A.bP,A.lc,A.jg,A.l9,A.fU,A.lJ,A.lI,A.iE,A.t7])
q(J.k2,[J.k4,J.hF,J.hI,J.hH,J.hJ,J.fz,J.dY])
q(J.hI,[J.e_,J.q,A.fF,A.hU])
q(J.e_,[J.kr,J.eS,J.dZ])
r(J.k3,A.i7)
r(J.p9,J.q)
q(J.fz,[J.hE,J.k5])
q(A.n,[A.eb,A.R,A.cz,A.H,A.hw,A.dC,A.f_,A.lj,A.lV,A.bR])
q(A.eb,[A.et,A.iV])
r(A.it,A.et)
r(A.ir,A.iV)
q(A.dQ,[A.jt,A.js,A.kX,A.vf,A.vh,A.t4,A.t3,A.tV,A.o7,A.tl,A.to,A.px,A.tq,A.vO,A.vP,A.v9,A.qj,A.rK,A.pG,A.pH,A.pI,A.pU,A.pE,A.pF,A.pK,A.rz,A.rA,A.rC,A.nW,A.nU,A.nV,A.pX,A.pY,A.qr,A.qq,A.qp,A.qo,A.qn,A.qs,A.uC,A.uD,A.qB,A.qC,A.vV,A.vT,A.o4,A.pz,A.v6,A.on,A.oo,A.rZ,A.t_,A.mY,A.n0,A.n_,A.n1,A.mP,A.mx,A.my,A.mz,A.mM,A.mN,A.mL,A.p1,A.po,A.nP,A.ob,A.od,A.oe,A.of,A.nh,A.nR,A.oG,A.vW,A.uH,A.uG,A.tT,A.uY,A.oU,A.oV,A.oX,A.rl,A.oK,A.oI,A.v4,A.oP,A.oR,A.v3,A.nL,A.pt,A.ph,A.rj,A.ri,A.rh,A.nE,A.nF,A.q6,A.ru,A.rv,A.mv,A.mt,A.mT,A.mU,A.n8,A.nc,A.nb,A.na,A.nu,A.nt,A.nv,A.nw,A.nx,A.ns,A.nn,A.no,A.nz,A.nI,A.nJ,A.nK,A.nO,A.oh,A.oj,A.ok,A.ow,A.ot,A.ou,A.ov,A.os,A.or,A.oB,A.pc,A.pd,A.pe,A.q0,A.q1,A.q2,A.r5,A.r6,A.qY,A.qZ,A.qX,A.r_,A.qI,A.r0,A.r1,A.r2,A.qW,A.qO,A.qP,A.qQ,A.qR,A.qS,A.qT,A.qU,A.qV,A.qN,A.qJ,A.qK,A.qL,A.qM,A.r4,A.r3,A.rc,A.rn,A.mF,A.rU,A.rT,A.rV,A.rP,A.rS,A.rN,A.rM,A.vc,A.rL,A.mA,A.mB,A.mC,A.tF,A.tG,A.tA,A.tC,A.tD,A.tz,A.tv,A.tw,A.tx,A.u6,A.u7,A.ue,A.uf,A.ug,A.u9,A.ua,A.ub,A.u2,A.tZ,A.u_,A.uK,A.uL,A.vk,A.vl,A.vw,A.vy,A.vz,A.vA,A.vB,A.vC,A.vD,A.vE,A.vF,A.uN,A.uO,A.uR,A.v2,A.uW,A.uT,A.uU])
q(A.jt,[A.t8,A.nm,A.pi,A.vg,A.tW,A.v5,A.o8,A.tm,A.pv,A.py,A.tt,A.rH,A.rG,A.vQ,A.pC,A.pL,A.rx,A.rB,A.nX,A.qD,A.vU,A.vS,A.mZ,A.mR,A.mS,A.pp,A.oc,A.v_,A.oW,A.oY,A.oM,A.ps,A.p3,A.pO,A.pP,A.pQ,A.rr,A.rs,A.nf,A.pf,A.pg,A.mE,A.rQ,A.rO,A.tB,A.ty,A.tu,A.u5,A.ud,A.vp,A.vq,A.uQ])
r(A.aV,A.ir)
q(A.al,[A.fA,A.dz,A.k6,A.l0,A.kH,A.lv,A.hL,A.ji,A.cs,A.ii,A.l_,A.fO,A.ju])
r(A.fQ,A.V)
r(A.dR,A.fQ)
q(A.R,[A.a4,A.ab,A.aj,A.G,A.eZ,A.ix])
q(A.a4,[A.ie,A.M,A.eN,A.lC])
r(A.dh,A.cz)
q(A.bb,[A.ef,A.eg,A.f3])
q(A.ef,[A.aR,A.f4,A.iF])
q(A.eg,[A.aA,A.b_,A.iG])
q(A.f3,[A.iH,A.cl])
r(A.fY,A.fC)
r(A.e8,A.fY)
r(A.hp,A.e8)
q(A.fn,[A.a3,A.cQ])
q(A.dv,[A.hq,A.iI,A.iP])
r(A.aM,A.hq)
q(A.js,[A.qd,A.t5,A.t6,A.tL,A.o5,A.tc,A.th,A.tg,A.te,A.td,A.tk,A.tj,A.ti,A.tI,A.uX,A.tP,A.tO,A.uB,A.uu,A.uv,A.uA,A.up,A.ur,A.uq,A.uz,A.un,A.uo,A.uw,A.ux,A.uy,A.ut,A.us,A.uF,A.v7,A.oT,A.oJ,A.oQ,A.uI,A.mu,A.mI,A.mH,A.mV,A.nq,A.nr,A.np,A.ol,A.ox,A.q4,A.qG,A.qH,A.r7,A.r8,A.r9,A.rd,A.rR,A.tE,A.uh,A.ui,A.uj,A.uk,A.u8,A.uc,A.u3,A.u4,A.u0,A.u1,A.uM,A.vm,A.vx,A.vG,A.vH,A.vI,A.vJ,A.vK,A.vL,A.vM,A.vn,A.vo,A.vr,A.vs,A.vt,A.vu,A.vv,A.uZ])
r(A.hW,A.dz)
q(A.kX,[A.kU,A.fg])
q(A.a5,[A.cf,A.iu,A.lB])
r(A.hK,A.cf)
r(A.fE,A.fF)
q(A.hU,[A.kg,A.b4])
q(A.b4,[A.iA,A.iC])
r(A.iB,A.iA)
r(A.hS,A.iB)
r(A.iD,A.iC)
r(A.hT,A.iD)
q(A.hS,[A.hR,A.kh])
q(A.hT,[A.ki,A.kj,A.kk,A.kl,A.km,A.eG,A.hV])
r(A.fX,A.lv)
r(A.ip,A.lp)
r(A.lN,A.iU)
r(A.iw,A.iu)
r(A.ck,A.iI)
r(A.fR,A.iP)
q(A.eu,[A.jm,A.jH,A.k7])
q(A.jx,[A.n4,A.pk,A.pj,A.rI])
r(A.k8,A.hL)
r(A.tr,A.ts)
r(A.l4,A.jH)
q(A.cs,[A.fI,A.k_])
r(A.lq,A.iQ)
q(A.lu,[A.eJ,A.fq,A.fm,A.eB,A.jh,A.hP,A.d3,A.fK,A.fs,A.jo,A.hn,A.fr,A.eM,A.eF,A.dy,A.ex,A.ce,A.i6,A.cR,A.fJ,A.ia,A.fv,A.iq,A.is,A.jT,A.hy,A.hB,A.jV,A.eA,A.hz,A.eQ,A.d1,A.fl,A.fx,A.fV,A.jn,A.es,A.jy,A.jA,A.b6,A.jl,A.cc,A.ez,A.ew,A.di,A.jO,A.dT,A.dW,A.kq,A.kD,A.eL,A.cF,A.dx,A.bN,A.by,A.k1,A.eX,A.cj,A.cL,A.ct,A.cM,A.df,A.de,A.dN,A.dO,A.dM,A.er,A.dl,A.cO,A.cP,A.dm,A.dk,A.dn,A.cd,A.dj,A.cu,A.jf,A.bi,A.ci,A.e3,A.cC,A.bM,A.bx,A.i8,A.bJ,A.c2,A.c3,A.ea,A.d4])
q(A.du,[A.bs,A.b7,A.cA,A.kp,A.cv])
r(A.qA,A.lO)
r(A.le,A.m1)
r(A.iz,A.d8)
q(A.hY,[A.hr,A.ny,A.nN,A.hC,A.oA,A.pb,A.q3,A.qF,A.fM,A.rm])
q(A.rW,[A.lb,A.lG,A.b9,A.l8,A.l6,A.ik,A.l7])
s(A.fQ,A.d2)
s(A.iV,A.V)
s(A.iA,A.V)
s(A.iB,A.ax)
s(A.iC,A.V)
s(A.iD,A.ax)
s(A.fY,A.iO)
s(A.iP,A.m_)
s(A.lO,A.tn)
s(A.m1,A.tR)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",t:"double",bf:"num",f:"String",l:"bool",ar:"Null",E:"List",N:"Object",W:"Map",ae:"JSObject"},mangledNames:{},types:["~()","ar(N?)","~(N?)","l(f)","dp()","l(t)","0&()","l(ay)","~(l)","dp(b7?)","l(N?)","h(bV,bV)","ar()","@(@)","l(eK)","ar(@)","l(bP)","~(~())","l(O)","l(aZ)","h(L<f,f>,L<f,f>)","l(@)","~(@)","l(bV)","l(bA)","l(e6)","l(dD)","l(ed)","l(h)","h(@,@)","@()","l(bt)","l(cL)","l(L<f,E<f>>)","~(N?,N?)","~(ae)","l(cu)","@(f)","l(cd)","h()","l()","f(f)","f(c1)","h(aU)","~(f,t)","j(j)","~(eR)","fj()","t()","fh()","l(L<f,aG>)","aG(L<f,aG>)","aG(aG,aG)","h(aP<bL>,aP<bL>)","c0(aP<bL>)","h(aP<bI>,aP<bI>)","c0(aP<bI>)","eH(t,t,t,t)","I(I)","0&(f,h?)","eR()","N?(N?)","t(t,fW)","bW<ar>(L<f,f>)","l(E<f>)","h(f,f)","h(bv,bv)","ar(@,d_)","+effectiveScore,light,score(t,aU,t)(aU)","h(+effectiveScore,light,score(t,aU,t),+effectiveScore,light,score(t,aU,t))","l(cc)","h(+influence,light(t,bz),+influence,light(t,bz))","~(h,@)","~(N,d_)","l(cD)","l(e7)","f(h,Z,Z,Z)","h(d8,d8)","ar(N,d_)","l(ec)","h(h)","l(bZ)","h(+(t,t,t,t),+(t,t,t,t))","E<+(t,t,t,t)>()","l(bv)","h(h,cD)","h(cV,cV)","l(cw)","l(cU)","e1(cA)","cA(h,h,f?)","h(ds,ds)","l(cT)","L<f,f>(f,@)","f?(f)","bs(h,h,f?)","l(bN)","l(by)","eV()","h(h,+(bs,ch))","h(L<f,cN>,L<f,cN>)","l(c1)","L<h,@>(h,eU)","L<h,@>(h,eT)","l(L<@,@>)","L<f,f>(L<@,@>)","l?(N?)","h(bO,bO)","f()","0^(n<0^>,N?)<N?>","t(t,f)","~(@,@)","E<f>(E<f>)","~(t)","b7(h,h,f?)","l(ih?)","ar(ae)","~(h)","h(h,+(b7,d9))","W<f,N?>(dr)","f(bi)","l(bi)","l(bx)","f(ay)","l(dl)","l(cO)","l(cP)","l(dm)","l(dk)","l(dn)","l(dj)","h(a8,a8)","l(ct)","l(cM)","l(df)","l(de)","f(cr)","h(cr,cr)","ar(~())","h(bP,bP)","E<d5>()","l(d5)","l(L<f,f>)","h(c4,c4)","W<f,@>(bP)","l(c3)","l(c2)","l(bJ)","@(@,f)","cv(h,h,f?)","bO(L<f,b7>)","h(c1,c1)","i5(bs)","h(bZ,bZ)","f(bZ)","h(L<h,f>,L<h,f>)","dp(f{fallback:f?})","f(L<h,f>)","W<f,f>(W<f,f>,f)","~(bx)","~(dL)","~(fw)","~(dK)","~(dV)","~(fo)","l(fL)","~(bM)","~(h,f)","~(bN,by)","bz?()","E<bz>()","fT()","cU(N?)","cw(N?)","cT(N?)","~(bf)","0^(f,n<0^>)<A>"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aR&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f4&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iF&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aA&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b_&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iG&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iH&&A.Ae(a,b.a),"5;floor,id,wall,x,z":a=>b=>b instanceof A.cl&&A.Ae(a,b.a)}}
A.Dz(v.typeUniverse,JSON.parse('{"dZ":"e_","kr":"e_","eS":"e_","GG":"fF","q":{"E":["1"],"R":["1"],"ae":[],"n":["1"]},"k4":{"l":[],"ag":[]},"hF":{"ar":[],"ag":[]},"hI":{"ae":[]},"e_":{"ae":[]},"k3":{"i7":[]},"p9":{"q":["1"],"E":["1"],"R":["1"],"ae":[],"n":["1"]},"eq":{"a7":["1"]},"fz":{"t":[],"bf":[],"b3":["bf"]},"hE":{"t":[],"h":[],"bf":[],"b3":["bf"],"ag":[]},"k5":{"t":[],"bf":[],"b3":["bf"],"ag":[]},"dY":{"f":[],"b3":["f"],"pZ":[],"ag":[]},"eb":{"n":["2"]},"hm":{"a7":["2"]},"et":{"eb":["1","2"],"n":["2"],"n.E":"2"},"it":{"et":["1","2"],"eb":["1","2"],"R":["2"],"n":["2"],"n.E":"2"},"ir":{"V":["2"],"E":["2"],"eb":["1","2"],"R":["2"],"n":["2"]},"aV":{"ir":["1","2"],"V":["2"],"E":["2"],"eb":["1","2"],"R":["2"],"n":["2"],"n.E":"2","V.E":"2"},"fA":{"al":[]},"dR":{"V":["h"],"d2":["h"],"E":["h"],"R":["h"],"n":["h"],"V.E":"h","d2.E":"h"},"R":{"n":["1"]},"a4":{"R":["1"],"n":["1"]},"ie":{"a4":["1"],"R":["1"],"n":["1"],"n.E":"1","a4.E":"1"},"aH":{"a7":["1"]},"cz":{"n":["2"],"n.E":"2"},"dh":{"cz":["1","2"],"R":["2"],"n":["2"],"n.E":"2"},"hO":{"a7":["2"]},"M":{"a4":["2"],"R":["2"],"n":["2"],"n.E":"2","a4.E":"2"},"H":{"n":["1"],"n.E":"1"},"S":{"a7":["1"]},"hw":{"n":["2"],"n.E":"2"},"hx":{"a7":["2"]},"hu":{"a7":["1"]},"dC":{"n":["1"],"n.E":"1"},"im":{"a7":["1"]},"fQ":{"V":["1"],"d2":["1"],"E":["1"],"R":["1"],"n":["1"]},"eN":{"a4":["1"],"R":["1"],"n":["1"],"n.E":"1","a4.E":"1"},"aR":{"ef":[],"bb":[]},"f4":{"ef":[],"bb":[]},"iF":{"ef":[],"bb":[]},"aA":{"eg":[],"bb":[]},"b_":{"eg":[],"bb":[]},"iG":{"eg":[],"bb":[]},"iH":{"f3":[],"bb":[]},"cl":{"f3":[],"bb":[]},"hp":{"e8":["1","2"],"fY":["1","2"],"fC":["1","2"],"iO":["1","2"],"W":["1","2"]},"fn":{"W":["1","2"]},"a3":{"fn":["1","2"],"W":["1","2"]},"f_":{"n":["1"],"n.E":"1"},"f0":{"a7":["1"]},"cQ":{"fn":["1","2"],"W":["1","2"]},"hq":{"dv":["1"],"e5":["1"],"R":["1"],"n":["1"]},"aM":{"hq":["1"],"dv":["1"],"e5":["1"],"R":["1"],"n":["1"]},"hW":{"dz":[],"al":[]},"k6":{"al":[]},"l0":{"al":[]},"iJ":{"d_":[]},"dQ":{"ey":[]},"js":{"ey":[]},"jt":{"ey":[]},"kX":{"ey":[]},"kU":{"ey":[]},"fg":{"ey":[]},"kH":{"al":[]},"cf":{"a5":["1","2"],"w7":["1","2"],"W":["1","2"],"a5.K":"1","a5.V":"2"},"ab":{"R":["1"],"n":["1"],"n.E":"1"},"cg":{"a7":["1"]},"aj":{"R":["1"],"n":["1"],"n.E":"1"},"af":{"a7":["1"]},"G":{"R":["L<1,2>"],"n":["L<1,2>"],"n.E":"L<1,2>"},"cy":{"a7":["L<1,2>"]},"hK":{"cf":["1","2"],"a5":["1","2"],"w7":["1","2"],"W":["1","2"],"a5.K":"1","a5.V":"2"},"ef":{"bb":[]},"eg":{"bb":[]},"f3":{"bb":[]},"hG":{"Cs":[],"pZ":[]},"lE":{"i2":[],"fD":[]},"lj":{"n":["i2"],"n.E":"i2"},"lk":{"a7":["i2"]},"id":{"fD":[]},"lV":{"n":["fD"],"n.E":"fD"},"lW":{"a7":["fD"]},"fE":{"ae":[],"ag":[]},"eG":{"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"fF":{"ae":[],"ag":[]},"hU":{"ae":[]},"kg":{"ae":[],"ag":[]},"b4":{"bX":["1"],"ae":[]},"hS":{"V":["t"],"b4":["t"],"E":["t"],"bX":["t"],"R":["t"],"ae":[],"n":["t"],"ax":["t"]},"hT":{"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"]},"hR":{"nY":[],"V":["t"],"b4":["t"],"E":["t"],"bX":["t"],"R":["t"],"ae":[],"n":["t"],"ax":["t"],"ag":[],"V.E":"t","ax.E":"t"},"kh":{"V":["t"],"b4":["t"],"E":["t"],"bX":["t"],"R":["t"],"ae":[],"n":["t"],"ax":["t"],"ag":[],"V.E":"t","ax.E":"t"},"ki":{"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"kj":{"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"kk":{"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"kl":{"wk":[],"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"km":{"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"hV":{"ih":[],"V":["h"],"b4":["h"],"E":["h"],"bX":["h"],"R":["h"],"ae":[],"n":["h"],"ax":["h"],"ag":[],"V.E":"h","ax.E":"h"},"lv":{"al":[]},"fX":{"dz":[],"al":[]},"c6":{"a7":["1"]},"bR":{"n":["1"],"n.E":"1"},"b1":{"al":[]},"ip":{"lp":["1"]},"as":{"bW":["1"]},"iU":{"yG":[]},"lN":{"iU":[],"yG":[]},"iu":{"a5":["1","2"],"W":["1","2"]},"iw":{"iu":["1","2"],"a5":["1","2"],"W":["1","2"],"a5.K":"1","a5.V":"2"},"eZ":{"R":["1"],"n":["1"],"n.E":"1"},"iv":{"a7":["1"]},"ck":{"dv":["1"],"y5":["1"],"e5":["1"],"R":["1"],"n":["1"]},"f1":{"a7":["1"]},"V":{"E":["1"],"R":["1"],"n":["1"]},"a5":{"W":["1","2"]},"ix":{"R":["2"],"n":["2"],"n.E":"2"},"iy":{"a7":["2"]},"fC":{"W":["1","2"]},"e8":{"fY":["1","2"],"fC":["1","2"],"iO":["1","2"],"W":["1","2"]},"dv":{"e5":["1"],"R":["1"],"n":["1"]},"iI":{"dv":["1"],"e5":["1"],"R":["1"],"n":["1"]},"fR":{"dv":["1"],"m_":["1"],"e5":["1"],"R":["1"],"n":["1"]},"lB":{"a5":["f","@"],"W":["f","@"],"a5.K":"f","a5.V":"@"},"lC":{"a4":["f"],"R":["f"],"n":["f"],"n.E":"f","a4.E":"f"},"jm":{"eu":["E<h>","f"]},"jH":{"eu":["f","E<h>"]},"hL":{"al":[]},"k8":{"al":[]},"k7":{"eu":["N?","f"]},"l4":{"eu":["f","E<h>"]},"ev":{"b3":["ev"]},"t":{"bf":[],"b3":["bf"]},"dS":{"b3":["dS"]},"h":{"bf":[],"b3":["bf"]},"E":{"R":["1"],"n":["1"]},"bf":{"b3":["bf"]},"i2":{"fD":[]},"e5":{"R":["1"],"n":["1"]},"f":{"b3":["f"],"pZ":[]},"lu":{"A":[]},"ji":{"al":[]},"dz":{"al":[]},"cs":{"al":[]},"fI":{"al":[]},"k_":{"al":[]},"ii":{"al":[]},"l_":{"al":[]},"fO":{"al":[]},"ju":{"al":[]},"ko":{"al":[]},"ib":{"al":[]},"lX":{"d_":[]},"bk":{"CL":[]},"iQ":{"l2":[]},"lR":{"l2":[]},"lq":{"l2":[]},"lA":{"wf":[]},"ee":{"wf":[]},"eJ":{"A":[]},"fq":{"A":[]},"fm":{"A":[]},"bs":{"du":[]},"b7":{"du":[]},"cA":{"du":[]},"cv":{"du":[]},"kp":{"du":[]},"eB":{"A":[]},"jh":{"A":[]},"hP":{"A":[]},"d3":{"A":[]},"fK":{"A":[]},"fs":{"A":[]},"jo":{"A":[]},"hn":{"A":[]},"fr":{"A":[]},"eM":{"A":[]},"eF":{"A":[]},"dy":{"A":[]},"ex":{"A":[]},"ce":{"A":[]},"i6":{"A":[]},"cR":{"A":[]},"fJ":{"A":[]},"i3":{"Cv":[]},"lz":{"c0":[]},"kF":{"Cz":[]},"lY":{"c0":[]},"lK":{"Cu":[]},"lw":{"BG":[]},"ia":{"A":[]},"bL":{"b3":["bL"]},"bI":{"b3":["bI"]},"fv":{"A":[]},"iq":{"A":[]},"hl":{"ak":[]},"ln":{"a8":[]},"jp":{"ak":[]},"lo":{"a8":[]},"jB":{"ak":[]},"lr":{"a8":[]},"is":{"A":[]},"hs":{"ak":[]},"ls":{"a8":[]},"jE":{"ak":[]},"lt":{"a8":[]},"jW":{"ak":[]},"ly":{"a8":[]},"hQ":{"ak":[]},"lF":{"a8":[]},"jq":{"Ct":[]},"i0":{"ak":[]},"lL":{"a8":[]},"kz":{"ak":[]},"lM":{"a8":[]},"kO":{"ak":[]},"lP":{"a8":[]},"kP":{"ak":[]},"lQ":{"a8":[]},"kS":{"ak":[]},"lT":{"a8":[]},"kR":{"ak":[]},"lS":{"a8":[]},"l5":{"ak":[]},"m0":{"a8":[]},"lg":{"ak":[]},"m3":{"a8":[]},"jT":{"A":[]},"hy":{"A":[]},"hB":{"A":[]},"jV":{"A":[]},"eA":{"A":[]},"hz":{"A":[]},"eQ":{"A":[]},"d1":{"A":[]},"fl":{"A":[]},"jC":{"Bp":[]},"fx":{"A":[]},"fV":{"A":[]},"b6":{"A":[]},"jn":{"A":[]},"es":{"A":[]},"jy":{"A":[]},"jA":{"A":[]},"dF":{"dp":[]},"le":{"BM":[]},"jl":{"A":[]},"cc":{"A":[]},"ez":{"A":[]},"iz":{"d8":[]},"ew":{"A":[]},"di":{"A":[]},"dT":{"A":[]},"jO":{"A":[]},"dW":{"A":[]},"kq":{"A":[]},"kD":{"A":[]},"eL":{"A":[]},"cF":{"A":[]},"dx":{"A":[]},"bN":{"A":[]},"by":{"A":[]},"k1":{"A":[]},"eX":{"A":[]},"cj":{"A":[]},"cL":{"A":[]},"ct":{"A":[]},"cM":{"A":[]},"df":{"A":[]},"de":{"A":[]},"dN":{"A":[]},"dO":{"A":[]},"er":{"A":[]},"dM":{"A":[]},"dl":{"A":[]},"cO":{"A":[]},"cP":{"A":[]},"dm":{"A":[]},"dk":{"A":[]},"dn":{"A":[]},"cd":{"A":[]},"dj":{"A":[]},"cu":{"A":[]},"jf":{"A":[]},"bi":{"A":[]},"ci":{"A":[]},"e3":{"A":[]},"cC":{"A":[]},"bM":{"A":[]},"bx":{"A":[]},"i8":{"A":[]},"bJ":{"A":[]},"c2":{"A":[]},"c3":{"A":[]},"ea":{"A":[]},"d4":{"A":[]},"lJ":{"Cy":[]},"BV":{"E":["h"],"R":["h"],"n":["h"]},"ih":{"E":["h"],"R":["h"],"n":["h"]},"CQ":{"E":["h"],"R":["h"],"n":["h"]},"BT":{"E":["h"],"R":["h"],"n":["h"]},"wk":{"E":["h"],"R":["h"],"n":["h"]},"BU":{"E":["h"],"R":["h"],"n":["h"]},"CP":{"E":["h"],"R":["h"],"n":["h"]},"nY":{"E":["t"],"R":["t"],"n":["t"]},"BF":{"E":["t"],"R":["t"],"n":["t"]}}'))
A.Dy(v.typeUniverse,JSON.parse('{"fQ":1,"iV":2,"b4":1,"iI":1,"iP":1,"jx":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.Y
return{mq:s("cL"),dx:s("hj"),bC:s("cr"),v:s("b1"),iF:s("jk"),ul:s("de"),EL:s("cM"),xs:s("ct"),gc:s("df"),z3:s("bI"),Bu:s("fh"),p:s("aU"),rO:s("fk"),sU:s("dR"),hO:s("b3<@>"),CH:s("ho"),D:s("a3<f,f>"),I:s("a3<f,h>"),mJ:s("a3<f,E<f>>"),M:s("aM<f>"),f7:s("ev"),fP:s("bJ"),ya:s("dS"),he:s("R<@>"),yW:s("cc"),g:s("bV"),Ct:s("A"),yt:s("al"),hl:s("Z"),B:s("nY"),pH:s("aG"),Fr:s("cN"),BO:s("ey"),ls:s("bW<ar>"),vS:s("dj"),aJ:s("dk"),x:s("cd"),bK:s("dl"),gm:s("dm"),dn:s("cO"),mx:s("dn"),j_:s("cP"),EJ:s("cQ<bM,f>"),_:s("dp"),Eb:s("cu"),qX:s("dW"),mF:s("cT"),iO:s("cv"),oW:s("cU"),fl:s("cw"),FA:s("n<ho>"),CB:s("n<cV>"),yT:s("n<f>"),x6:s("n<bO>"),oJ:s("n<t>"),tY:s("n<@>"),uI:s("n<h>"),Fg:s("q<cr>"),AO:s("q<Gx>"),jC:s("q<aU>"),km:s("q<fk>"),sa:s("q<ca>"),ns:s("q<jF>"),cO:s("q<jG>"),r:s("q<bV>"),uH:s("q<jK>"),Dl:s("q<Z>"),iJ:s("q<bW<~>>"),pC:s("q<jQ>"),C1:s("q<dp>"),ka:s("q<bg>"),Fm:s("q<eC>"),op:s("q<cS>"),hr:s("q<eD>"),s3:s("q<cv>"),sL:s("q<ae>"),Bv:s("q<ka>"),yH:s("q<fB>"),Bq:s("q<L<f,f>>"),rq:s("q<W<f,N>>"),A7:s("q<W<f,f>>"),cs:s("q<W<f,@>>"),a6:s("q<cV>"),p0:s("q<bZ>"),s6:s("q<bs>"),pq:s("q<ay>"),bA:s("q<dr>"),xz:s("q<bt>"),b4:s("q<hZ>"),s0:s("q<eH>"),hc:s("q<cW>"),ea:s("q<ds>"),Fk:s("q<kt>"),J:s("q<bv>"),kv:s("q<eK>"),nR:s("q<+(f,E<bv>)>"),kd:s("q<+(f,f)>"),rh:s("q<+influence,light(t,bz)>"),wt:s("q<+(h,f)>"),wx:s("q<+(t,t,t,t)>"),e_:s("q<ak>"),u:s("q<a8>"),Ft:s("q<i3>"),C:s("q<O>"),h1:s("q<bw>"),s2:s("q<c0>"),eY:s("q<cD>"),xB:s("q<cZ>"),rn:s("q<kI>"),gg:s("q<kJ>"),yv:s("q<kK>"),wM:s("q<kL>"),El:s("q<fN>"),AM:s("q<aP<bI>>"),fs:s("q<aP<bL>>"),cv:s("q<bz>"),DZ:s("q<e7>"),s:s("q<f>"),r8:s("q<bO>"),fa:s("q<c1>"),k:s("q<I>"),fi:s("q<j>"),ld:s("q<il>"),Dc:s("q<dB>"),Fi:s("q<c4>"),jV:s("q<d5>"),yo:s("q<eV>"),E:s("q<dD>"),uk:s("q<bn>"),wf:s("q<iz>"),il:s("q<ed>"),l5:s("q<ec>"),ow:s("q<lH>"),j5:s("q<lI>"),pv:s("q<fU>"),Fy:s("q<eh<e1>>"),EM:s("q<eh<ch>>"),w_:s("q<eh<bw>>"),f2:s("q<eh<d9>>"),n:s("q<t>"),zz:s("q<@>"),t:s("q<h>"),Cf:s("q<N?>"),AN:s("q<bf>"),w:s("hF"),m:s("ae"),ud:s("dZ"),Eh:s("bX<@>"),AQ:s("E<aU>"),hk:s("E<bV>"),b:s("E<bg>"),xp:s("E<cv>"),nx:s("E<ae>"),rW:s("E<W<f,f>>"),qr:s("E<bs>"),R:s("E<ay>"),fG:s("E<cW>"),Es:s("E<bv>"),DX:s("E<+(f,f)>"),pL:s("E<+(h,f)>"),xM:s("E<+(t,t,t,t)>"),bE:s("E<bw>"),fx:s("E<cZ>"),a:s("E<f>"),uh:s("E<il>"),D0:s("E<dB>"),cf:s("E<c4>"),p7:s("E<d5>"),dd:s("E<t>"),j:s("E<@>"),U:s("E<h>"),ik:s("E<ae?>"),m2:s("hN"),h6:s("L<f,aG>"),gI:s("L<f,cN>"),q:s("L<f,f>"),no:s("L<f,b7>"),AC:s("L<@,@>"),ou:s("L<h,f>"),pr:s("L<h,@>"),yx:s("L<f,E<f>>"),mf:s("W<f,dp>"),vD:s("W<f,cA>"),ap:s("W<f,ay>"),G:s("W<f,f>"),qH:s("W<f,dy>"),m0:s("W<f,l>"),gG:s("W<f,t>"),P:s("W<f,@>"),f:s("W<@,@>"),eU:s("W<h,f>"),pG:s("W<h,eT>"),tQ:s("W<h,eU>"),aD:s("W<f,E<+(t,t,t,t)>>"),Bx:s("W<f,E<f>>"),oZ:s("W<f,N?>"),q1:s("W<c3,E<c4>>"),ee:s("W<h,W<f,f>>"),jT:s("M<f,f?>"),w1:s("e1"),pw:s("cA"),jt:s("cV"),wl:s("bZ"),kc:s("bs"),rV:s("fE"),mV:s("eG"),c:s("ar"),K:s("N"),BB:s("bL"),A:s("ay"),oP:s("dr"),wJ:s("bi"),E4:s("bt"),A_:s("ds"),T:s("bv"),DL:s("i_"),AB:s("kv"),yi:s("fG"),xK:s("e4"),Y:s("eK"),iM:s("GH"),ep:s("+()"),k0:s("+(bs,ch)"),ut:s("+(b7,d9)"),rf:s("+(t,t)"),mn:s("+influence,light(t,bz)"),tK:s("+effectiveScore,light,score(t,aU,t)"),nz:s("+(t,t,t,t)"),ez:s("i2"),wZ:s("a8"),lg:s("i4"),tc:s("cY<cv,bw>"),ja:s("cY<cA,e1>"),wm:s("cY<bs,ch>"),qq:s("cY<b7,d9>"),j2:s("O"),m3:s("bw"),yz:s("c0"),W:s("cD"),F3:s("cZ"),Q:s("e5<f>"),oG:s("e5<h>"),en:s("bx"),gl:s("aZ"),d:s("e6"),u5:s("by"),bG:s("bN"),ho:s("fN"),EH:s("aP<bI>"),E0:s("aP<bL>"),l:s("d_"),w8:s("e7"),qL:s("b6"),N:s("f"),Aj:s("b7"),jP:s("bO"),e:s("c1"),bp:s("dy"),sg:s("ag"),bs:s("dz"),qF:s("eS"),hL:s("e8<f,f>"),qt:s("l1"),eP:s("l2"),cV:s("I"),a7:s("j"),qY:s("bA"),L:s("bP"),gM:s("c2"),hF:s("c3"),vw:s("eT"),BX:s("eU"),aA:s("dB"),AP:s("c4"),sy:s("ld"),bB:s("b9"),aS:s("d5"),fu:s("eV"),fw:s("H<bJ>"),vL:s("H<cc>"),vK:s("H<cd>"),Fj:s("H<by>"),rZ:s("H<bN>"),vY:s("H<f>"),r4:s("H<bA>"),g2:s("H<c2>"),cE:s("H<c3>"),rt:s("S<bx>"),xG:s("S<aZ>"),fh:s("S<bA>"),fW:s("dD"),hR:s("as<@>"),BT:s("iw<N?,N?>"),Ez:s("d8"),rL:s("fT"),xT:s("ed"),wU:s("ec"),la:s("lG"),qS:s("iE"),jS:s("fW"),EF:s("bR<+(f,b7)>"),Br:s("bR<c0>"),V:s("iS"),h:s("iT"),y:s("l"),Bs:s("l()"),kr:s("l(bJ)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(N)"),pz:s("l(bx)"),aV:s("l(aZ)"),y2:s("l(by)"),ty:s("l(bN)"),Ag:s("l(f)"),rd:s("l(bA)"),da:s("l(c2)"),qR:s("l(c3)"),i:s("t"),z:s("@"),pF:s("@()"),h_:s("@(N)"),nW:s("@(N,d_)"),S:s("h"),eZ:s("bW<ar>?"),r9:s("q<N?>?"),gt:s("ae?"),rK:s("E<@>?"),jd:s("W<f,E<f>>?"),X:s("N?"),dR:s("f?"),oI:s("f?(f)"),Fx:s("ih?"),F:s("dE<@,@>?"),Af:s("lD?"),k7:s("l?"),wK:s("l(fL)?"),u6:s("t?"),lo:s("h?"),s7:s("bf?"),Z:s("~()?"),Cv:s("~(dK)?"),kC:s("~(dL)?"),pf:s("~(fo)?"),hq:s("~(fw)?"),CA:s("~(dV)?"),hQ:s("~(bM)?"),Ci:s("~(bx)?"),nf:s("~(bN,by)?"),DI:s("~(f,t)?"),xl:s("~(l)?"),vR:s("~(h)?"),dt:s("~(h,f)?"),o:s("bf"),H:s("~"),O:s("~()"),m1:s("~(f,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.id=J.k2.prototype
B.a=J.q.prototype
B.d=J.hE.prototype
B.c=J.fz.prototype
B.b=J.dY.prototype
B.ie=J.dZ.prototype
B.ig=J.hI.prototype
B.t=A.hR.prototype
B.da=A.hV.prototype
B.dp=J.kr.prototype
B.bM=J.eS.prototype
B.a9=new A.cL(1,"standard")
B.K=new A.je(B.a9)
B.bR=new A.cL(0,"concise")
B.bS=new A.cL(2,"verbose")
B.ap=new A.dK(null,null,null,null,null)
B.ns=new A.jf(0,"none")
B.nt=new A.jh(0,"opaque")
B.e_=new A.jl(4,"ambience")
B.bW=new A.ct(3,"mono")
B.aM=new A.df(0,"full")
B.bV=new A.ct(0,"auto")
B.bU=new A.cM(1,"standard")
B.bT=new A.de(0,"defaultMix")
B.aN=new A.dL(B.bV,B.bU,B.aM,B.bT)
B.aE=new A.kD(1,"pixeldart")
B.e6=new A.hk(B.aE,!1,!0,!1,null,!1,null)
B.bY=new A.dM(1,"capturing")
B.e7=new A.dg(B.bY,null)
B.bZ=new A.dM(3,"rejected")
B.aO=new A.dg(B.bZ,null)
B.c_=new A.dM(4,"applied")
B.bX=new A.dg(B.c_,null)
B.c0=new A.dM(5,"cancelled")
B.e8=new A.dg(B.c0,null)
B.aP=new A.dM(2,"conflict")
B.aq=new A.jn(0,"add")
B.ec=new A.es(0,"zero")
B.aa=new A.es(1,"one")
B.ab=new A.jo(0,"alpha")
B.G=new A.dN(1,"button")
B.p=new A.dO(0,"normal")
B.ef=new A.b2("settings.back",B.G,"back","back to pause menu",B.p)
B.ar=new A.dN(0,"heading")
B.eg=new A.b2("settings.heading",B.ar,"Settings",null,B.p)
B.eh=new A.b2("settings.controls.heading",B.ar,"Controls",null,B.p)
B.ei=new A.b2("settings.controls.back",B.G,"back","back to settings categories",B.p)
B.ej=new A.b2("pause.heading",B.ar,"Paused",null,B.p)
B.ek=new A.dN(3,"slider")
B.el=new A.dN(4,"toggle")
B.c1=new A.dN(5,"keybind")
B.as=new A.dO(5,"disabled")
B.em=new A.dO(6,"error")
B.en=new A.dO(7,"destructive")
B.c2=new A.dO(8,"remapping")
B.c3=new A.hj()
B.eo=new A.n2()
B.nu=new A.n4()
B.ep=new A.jm()
B.c4=new A.ng()
B.eq=new A.hu(A.Y("hu<0&>"))
B.c5=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.er=function() {
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
B.ew=function(getTagFallback) {
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
B.es=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ev=function(hooks) {
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
B.eu=function(hooks) {
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
B.et=function(hooks) {
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
B.c6=function(hooks) { return hooks; }

B.j=new A.k7()
B.nv=new A.pm()
B.ex=new A.ko()
B.nw=new A.q8()
B.ey=new A.q9()
B.c7=new A.qb()
B.ez=new A.cZ()
B.aF=new A.cj(1,"gradeLUT")
B.eA=new A.cZ()
B.eB=new A.qx()
B.eC=new A.qz()
B.f=new A.qE()
B.c8=new A.l4()
B.mz=new A.d3(0,"position")
B.mE=new A.bA(B.mz,0,3)
B.dS=new A.d3(1,"normal")
B.mF=new A.bA(B.dS,3,3)
B.mA=new A.d3(2,"color")
B.mG=new A.bA(B.mA,6,4)
B.mB=new A.d3(4,"alpha")
B.mH=new A.bA(B.mB,10,1)
B.mC=new A.d3(5,"uv0")
B.mI=new A.bA(B.mC,11,2)
B.mD=new A.d3(8,"legacyMaterialEffect")
B.mJ=new A.bA(B.mD,13,1)
B.W=s([B.mE,B.mF,B.mG,B.mH,B.mI,B.mJ],A.Y("q<bA>"))
B.ac=new A.rJ()
B.aQ=new A.lA()
B.x=new A.lN()
B.at=new A.lX()
B.eD=new A.fi(1.3089969389957472,0.1,60)
B.eE=new A.fi(1.0471975511965976,0.1,60)
B.eF=new A.fi(0.8726646259971648,0.08,45)
B.S=new A.fl(0,"colorOnly")
B.c9=new A.fl(1,"colorAndDepth")
B.aR=new A.fl(2,"depthOnly")
B.eG=new A.hn(0,"linear")
B.aS=new A.hn(1,"srgb")
B.ca=new A.fm(0,"open")
B.eH=new A.fm(1,"committed")
B.eI=new A.fm(2,"aborted")
B.aT=new A.fq(0,"open")
B.eP=new A.fq(1,"committed")
B.eQ=new A.fq(2,"rolledBack")
B.au=new A.jy(1,"back")
B.av=new A.jA(0,"less")
B.eR=new A.fr(0,"off")
B.cb=new A.fr(1,"errorsOnly")
B.eS=new A.fr(2,"full")
B.aw=new A.bJ(0,"open")
B.cc=new A.bJ(1,"chain")
B.cd=new A.bJ(2,"throughDoor")
B.ce=new A.bJ(3,"letterbox")
B.ad=new A.bJ(4,"ignore")
B.T=new A.fs(0,"opaque")
B.eT=new A.fs(1,"masked")
B.aU=new A.fs(2,"blended")
B.eU=new A.ft(!1,B.av,!1,!0,B.aa,B.aa,B.aq,!1,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eV=new A.ft(!0,B.av,!1,!0,B.aa,B.aa,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.ed=new A.es(2,"srcAlpha")
B.ee=new A.es(3,"oneMinusSrcAlpha")
B.eW=new A.ft(!0,B.av,!1,!0,B.ed,B.ee,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eX=new A.dS(0)
B.eY=new A.dS(24e5)
B.cf=new A.cc(0,"compliance")
B.eZ=new A.fu(B.cf)
B.cg=new A.cc(1,"rupture")
B.f_=new A.fu(B.cg)
B.ch=new A.cc(2,"synchronisation")
B.f0=new A.fu(B.ch)
B.ci=new A.ew(0,"front")
B.f1=new A.ew(1,"rearService")
B.f2=new A.ew(2,"sideBoundary")
B.f3=new A.ew(3,"roofline")
B.o=new A.dT(0,"north")
B.A=new A.dT(1,"east")
B.m=new A.dT(2,"south")
B.C=new A.dT(3,"west")
B.f4=new A.jO(0,"ground")
B.f5=new A.di(0,"mantle")
B.f6=new A.di(1,"portal")
B.f8=new A.di(3,"inventory")
B.cj=new A.di(4,"aftermath")
B.f7=new A.di(2,"window")
B.fa=new A.dU(B.f7,"shutter","the shutter")
B.f9=new A.di(5,"none")
B.fb=new A.dU(B.f9,null,null)
B.fc=new A.D("saved mantle history is malformed",null,null)
B.fd=new A.D("rupture elapsed time is malformed",null,null)
B.fe=new A.D("presentation keys must be strings",null,null)
B.ff=new A.D("unsupported accessibility profile",null,null)
B.fg=new A.D("inventory inspections must be an object",null,null)
B.ck=new A.D("saved mantle state is malformed",null,null)
B.fh=new A.D("inactive rupture has elapsed time",null,null)
B.fi=new A.D("control sensitivity is outside 0.1\u20133.0",null,null)
B.fj=new A.D("invalid action bindings",null,null)
B.fk=new A.D("listener room is empty",null,null)
B.fl=new A.D("control bindings conflict",null,null)
B.fm=new A.D("saved difficulty state is malformed",null,null)
B.fn=new A.D("saved house drift state is malformed",null,null)
B.fo=new A.D("saved sleep record is malformed",null,null)
B.fp=new A.D("UI scale must be between 0.8 and 2.0",null,null)
B.fq=new A.D("unsupported settings store",null,null)
B.fr=new A.D("screenplay scene must be an object",null,null)
B.fs=new A.D("settings values must be an object",null,null)
B.ft=new A.D("saved day-loop sleepHistory must be a list",null,null)
B.fu=new A.D("invalid anisotropy limit",null,null)
B.fv=new A.D("audio event position is not finite",null,null)
B.fw=new A.D("event sequence must be non-negative",null,null)
B.fx=new A.D("screenplay branch is invalid",null,null)
B.fy=new A.D("inventory inspection counts are invalid",null,null)
B.fz=new A.D("only keybinds can be remapping",null,null)
B.fA=new A.D("listener position is not finite",null,null)
B.fB=new A.D("invalid action ID",null,null)
B.fC=new A.D("saved window state is malformed",null,null)
B.fD=new A.D("unsupported graphics preset",null,null)
B.fE=new A.D("save run and meta must be objects",null,null)
B.fF=new A.D("saved house state is malformed",null,null)
B.fG=new A.D("saved sleep record must be an object",null,null)
B.fH=new A.D("sound cue must be a non-empty string",null,null)
B.fI=new A.D("saved session run is malformed",null,null)
B.fJ=new A.D("save map keys must be strings",null,null)
B.fK=new A.D("unsupported graphics profile",null,null)
B.fL=new A.D("screenplay scene has invalid id, day, or title",null,null)
B.fM=new A.D("unsupported audio options",null,null)
B.fN=new A.D("transform.scale must be positive",null,null)
B.fO=new A.D("Escape is reserved for pause navigation",null,null)
B.fP=new A.D("saved day-loop state is malformed",null,null)
B.fQ=new A.D("rupture extinguished mantle is unknown",null,null)
B.cl=new A.D("unsupported controls profile",null,null)
B.cm=new A.D("saved portal state is malformed",null,null)
B.fR=new A.D("acoustic portal profile is not finite",null,null)
B.fS=new A.D("saved house state does not match this house",null,null)
B.fT=new A.D("presentation snapshot contains a non-finite number",null,null)
B.fU=new A.D("screenplay array contains invalid text",null,null)
B.fV=new A.D("unsupported gameplay settings profile",null,null)
B.fW=new A.D("save contains a non-finite number",null,null)
B.fX=new A.D("unsupported graphics store",null,null)
B.fY=new A.D("screenplay option is invalid",null,null)
B.fZ=new A.D("screenplay needs sources and scenes arrays",null,null)
B.h_=new A.D("brush component needs an id and label",null,null)
B.h0=new A.D("text.json root must be an object",null,null)
B.h1=new A.D("screenplay root must be an object",null,null)
B.h2=new A.D("event kind is empty",null,null)
B.h3=new A.D("invalid control binding token",null,null)
B.h4=new A.D("audio transmission muffle is invalid",null,null)
B.h5=new A.D("acoustic portal muffle order is invalid",null,null)
B.h6=new A.D("unsupported settings profile",null,null)
B.h7=new A.D("saved session clock is malformed",null,null)
B.h8=new A.D("rupture mantle IDs are malformed",null,null)
B.h9=new A.D("invalid gameplay setting: contextualReminders",null,null)
B.ha=new A.D("invalid screen-reader verbosity",null,null)
B.hb=new A.D("saved sleep record has an unknown enum",null,null)
B.hc=new A.D("audio cue variants are empty",null,null)
B.hd=new A.D("screenplay beat has invalid kind or text",null,null)
B.he=new A.D("save root must be an object",null,null)
B.hf=new A.D("audio event identity is empty",null,null)
B.hg=new A.D("render capabilities contain invalid limits",null,null)
B.hh=new A.D("saved house overrides are malformed",null,null)
B.V=new A.bY(0,0,0)
B.cM=new A.bY(1,1,1)
B.j3=s([],t.Fk)
B.bc=s([],t.cv)
B.hi=new A.jP(B.V,B.V,0,1,null,null,B.cM,0,null,B.j3,B.bc)
B.cn=new A.aG(0,0,0)
B.hj=new A.ex(0,"idle")
B.ax=new A.ex(1,"active")
B.hk=new A.ex(2,"ended")
B.hl=new A.ex(3,"aborted")
B.co=new A.fv(0,"outside")
B.hm=new A.fv(1,"intersects")
B.hn=new A.fv(2,"inside")
B.ho=new A.ez(0,"timeAdvanced")
B.hp=new A.ez(1,"dayEndReached")
B.hq=new A.ez(4,"slept")
B.hr=new A.ez(5,"complianceFloorTripped")
B.aV=new A.dj(0,"twentyFourHour")
B.cp=new A.dj(1,"twelveHour")
B.cq=new A.dk(0,"important")
B.cr=new A.dk(1,"always")
B.aW=new A.cd(0,"pauseAndMute")
B.cs=new A.dl(0,"press")
B.ct=new A.dl(1,"hold")
B.cu=new A.dm(0,"compact")
B.cv=new A.dm(1,"spacious")
B.cw=new A.cO(1,"standard")
B.cx=new A.cO(2,"detailed")
B.cy=new A.dn(0,"toast")
B.cz=new A.dn(1,"detailed")
B.cA=new A.cP(1,"readable")
B.hx=new A.hy(0,"vertex")
B.cB=new A.hy(1,"indices")
B.cC=new A.jT(0,"staticDraw")
B.h=new A.hz(0,"ready")
B.U=new A.hz(1,"lost")
B.ae=new A.fx(0,"prepared")
B.hy=new A.fx(1,"committed")
B.hz=new A.fx(2,"rolledBack")
B.hA=new A.eA(0,"color")
B.cD=new A.eA(1,"colorAndGlow")
B.hB=new A.eA(2,"colorDepthGlow")
B.aX=new A.eA(3,"depthOnly")
B.aY=new A.hB(1,"linear")
B.cE=new A.jV(0,"clampToEdge")
B.hC=new A.jU(1,1,1,!1,B.aY,B.aY,B.cE,1)
B.aZ=new A.hB(2,"linearMipmapLinear")
B.hD=new A.cR(0,"beforeShadow")
B.hE=new A.cR(2,"beforeDepth")
B.cF=new A.cR(3,"afterDepth")
B.cG=new A.cR(4,"beforeWorld")
B.hF=new A.cR(5,"afterWorld")
B.L=new A.cR(6,"afterResolve")
B.hG=new A.cR(9,"beforePresent")
B.cH=new A.ce(0,"readBeforeWrite")
B.hH=new A.ce(1,"duplicateWriter")
B.hI=new A.ce(2,"sampledMultisampledAttachment")
B.b_=new A.ce(3,"invalidResolve")
B.hJ=new A.ce(4,"formatOrSizeMismatch")
B.hK=new A.ce(5,"unversionedReadWrite")
B.hL=new A.ce(6,"invalidHistoryRead")
B.hM=new A.ce(7,"dependencyCycle")
B.hN=new A.ce(8,"missingCapability")
B.cI=new A.cu(0,"high")
B.b0=new A.cu(1,"standard")
B.b1=new A.dV(1,B.b0,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.ay=new A.dW(0,"player")
B.b2=new A.dW(1,"inserted")
B.cJ=new A.dW(2,"warden")
B.cK=new A.eB(0,"wrongKind")
B.cL=new A.eB(1,"staleGeneration")
B.hQ=new A.eB(2,"doubleRelease")
B.az=new A.eB(3,"releasedResource")
B.hT=new A.cS("kitchen-range","settle")
B.hU=new A.cS("front-door-knocker","knock")
B.hV=new A.cS("cellar-drain","drip")
B.hW=new A.cS("bedroom-timber","creak")
B.hX=new A.cS("kitchen-pipe","tick")
B.hY=new A.cS("bathroom-cistern","settle")
B.hZ=new A.cS("landing-window","wind")
B.ic=new A.k1(1,"visitor")
B.ih=new A.pj(null)
B.ii=new A.pk(null)
B.b3=new A.k9(!1,0,0.85,0.92,1)
B.ij=new A.bY(0.008,0.012,0.024)
B.cN=s([0,2,2,3],t.t)
B.ik=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b4=s([B.cq,B.cr],A.Y("q<dk>"))
B.il=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.im=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b5=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.F=new A.bx(0,"audio")
B.P=new A.i8(0,"level")
B.lQ=new A.aZ("master","Master",B.F,B.P,1,0,1,"audio")
B.lV=new A.aZ("voice","Visitor voice",B.F,B.P,1,0,1,"audio")
B.lM=new A.aZ("effects","Effects",B.F,B.P,1,0,1,"audio")
B.lN=new A.aZ("ambience","House ambience",B.F,B.P,1,0,1,"audio")
B.lR=new A.aZ("music","Music",B.F,B.P,1,0,1,"audio")
B.aG=new A.bx(1,"display")
B.lU=new A.aZ("brightness","Display brightness",B.aG,B.P,1,0.6,1.4,"display")
B.ah=new A.i8(1,"toggle")
B.lP=new A.aZ("muted","Mute house audio",B.F,B.ah,!1,null,null,"audio")
B.a4=new A.bx(2,"accessibility")
B.lS=new A.aZ("mono","Mono-compatible mix",B.a4,B.ah,!1,null,null,"audio")
B.lO=new A.aZ("high-contrast","High-contrast interface",B.a4,B.ah,!1,null,null,"display")
B.lT=new A.aZ("strong-highlights","Strong focus highlights",B.a4,B.ah,!1,null,null,"display")
B.D=s([B.lQ,B.lV,B.lM,B.lN,B.lR,B.lU,B.lP,B.lS,B.lO,B.lT],A.Y("q<aZ>"))
B.B=s(["who","verb","object","place","time"],t.s)
B.le=new A.cl(["floor-wood","living-room","wallpaper-stripes",0,0])
B.l9=new A.cl(["floor-linoleum","hall","wallpaper-damask",5,0])
B.ld=new A.cl(["floor-tiles","kitchen","wallpaper-tiles",10,0])
B.lb=new A.cl(["floor-concrete","cellar","wallpaper-damp",15,0])
B.lf=new A.cl(["floor-wood","bedroom","wallpaper-faded",0,6])
B.la=new A.cl(["floor-concrete","landing","wallpaper-peeling",5,6])
B.lc=new A.cl(["floor-tiles","bathroom","wallpaper-tiles",10,6])
B.lg=new A.cl(["floor-linoleum","spare-room","wallpaper-stripes",15,6])
B.io=s([B.le,B.l9,B.ld,B.lb,B.lf,B.la,B.lc,B.lg],A.Y("q<+floor,id,wall,x,z(f,f,f,t,t)>"))
B.e0=new A.de(1,"strong")
B.b6=s([B.bT,B.e0],A.Y("q<de>"))
B.e9=new A.er(0,"swap")
B.ea=new A.er(1,"replace")
B.eb=new A.er(2,"cancel")
B.ip=s([B.e9,B.ea,B.eb],A.Y("q<er>"))
B.ir=s([2,5,9,12,16,19],t.t)
B.hs=new A.cd(1,"pauseOnly")
B.ht=new A.cd(2,"continuePlayback")
B.aA=s([B.aW,B.hs,B.ht],A.Y("q<cd>"))
B.is=s(["uQuantizationBits","uDitherStrength"],t.s)
B.iv=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.iw=s([B.aw,B.cc,B.cd,B.ce,B.ad],A.Y("q<bJ>"))
B.ix=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iz=s(["30","60","display"],t.s)
B.ao=new A.c3(0,"full")
B.bO=new A.c3(1,"compressed")
B.bP=new A.c3(2,"off")
B.cO=s([B.ao,B.bO,B.bP],A.Y("q<c3>"))
B.b7=s([B.aV,B.cp],A.Y("q<dj>"))
B.iA=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e5=new A.df(1,"reduced")
B.b8=s([B.aM,B.e5],A.Y("q<df>"))
B.e1=new A.cM(0,"wide")
B.e2=new A.cM(2,"night")
B.b9=s([B.e1,B.bU,B.e2],A.Y("q<cM>"))
B.iB=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iM=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cP=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.ba=s([B.cu,B.cv],A.Y("q<dm>"))
B.m8=new A.bN(0,"long")
B.dH=new A.bN(1,"short")
B.cQ=s([B.m8,B.dH],A.Y("q<bN>"))
B.eN=new A.ca("1 - 9","Select Response",!0)
B.eJ=new A.ca("SPACE","Silence Ring",!1)
B.iP=s([B.eN,B.eJ],t.sa)
B.Z=new A.bM(0,"visual")
B.bp=new A.bM(1,"graphics")
B.a_=new A.bM(2,"gameplay")
B.bq=new A.bM(3,"controls")
B.H=new A.bM(4,"audio")
B.I=new A.bM(5,"accessibility")
B.iQ=s([B.Z,B.bp,B.a_,B.bq,B.H,B.I],A.Y("q<bM>"))
B.iR=s(["master","voice","effects","ambience","music"],t.s)
B.bb=s([B.cy,B.cz],A.Y("q<dn>"))
B.hO=new A.cu(2,"safe")
B.hP=new A.cu(3,"custom")
B.cR=s([B.cI,B.b0,B.hO,B.hP],A.Y("q<cu>"))
B.E=new A.cj(0,"inactive")
B.bA=new A.cj(2,"affineWarp")
B.dA=new A.cj(3,"vertexSnap")
B.bB=new A.cj(4,"tapeGiveup")
B.bC=new A.cj(5,"portalFail")
B.a2=new A.cj(6,"lightsOut")
B.cS=s([B.E,B.aF,B.bA,B.dA,B.bB,B.bC,B.a2],A.Y("q<cj>"))
B.iT=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iU=s([B.ay,B.b2,B.cJ],A.Y("q<dW>"))
B.iV=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.nn=new A.bn("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.nm=new A.bn("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.ni=new A.bn("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.nq=new A.bn("ronnie.response","named","A route card has Ronnie written on its back.")
B.np=new A.bn("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iW=s([B.nn,B.nm,B.ni,B.nq,B.np],t.uk)
B.no=new A.bn("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.nl=new A.bn("ronnie.response","named","The name Ronnie holds when the room does not.")
B.nj=new A.bn("denise.revision","accepted","One correction remains yours to protect.")
B.ng=new A.bn("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iX=s([B.no,B.nl,B.nj,B.ng],t.uk)
B.j2=s([],t.cO)
B.j8=s([],t.Fm)
B.j7=s([],t.op)
B.iY=s([],A.Y("q<cw>"))
B.j1=s([],t.b4)
B.X=s([],t.J)
B.j9=s([],t.u)
B.cU=s([],t.xB)
B.iZ=s([],t.El)
B.n=s([],t.s)
B.cV=s([],t.ld)
B.j6=s([],t.E)
B.j_=s([],t.t)
B.j0=s([],t.zz)
B.hS=new A.hD(15,"kitchen",-0.3,0)
B.hR=new A.hD(19,"spare-room",0,0.3)
B.M=s([B.hS,B.hR],A.Y("q<hD>"))
B.jb=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.m5=new A.by(0,"bed")
B.m6=new A.by(1,"chair")
B.m7=new A.by(2,"floor")
B.cW=s([B.m5,B.m6,B.m7],A.Y("q<by>"))
B.jc=s(["high","medium","low"],t.s)
B.e3=new A.ct(1,"headphones")
B.e4=new A.ct(2,"speakers")
B.bd=s([B.bV,B.e3,B.e4,B.bW],A.Y("q<ct>"))
B.jd=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.be=s([B.cs,B.ct],A.Y("q<dl>"))
B.bo=new A.ci(0,"root")
B.dd=new A.bi(0,"pauseMenu")
B.kn=new A.dr(B.bo,B.dd,null)
B.je=s([B.kn],t.bA)
B.bf=s([B.bR,B.a9,B.bS],A.Y("q<cL>"))
B.hv=new A.cP(0,"instant")
B.hw=new A.cP(2,"slow")
B.bg=s([B.hv,B.cA,B.hw],A.Y("q<cP>"))
B.jf=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.jg=s([B.F,B.aG,B.a4],A.Y("q<bx>"))
B.cX=s([B.o,B.A,B.m,B.C],A.Y("q<dT>"))
B.Q=new A.dx(0,"pbrMaterial")
B.a5=new A.dx(1,"shadowsAndOcclusion")
B.ai=new A.dx(2,"surfaceWeathering")
B.l=new A.dx(3,"atmosphereAndPost")
B.m2=new A.dx(4,"debugView")
B.bh=s([B.Q,B.a5,B.ai,B.l,B.m2],A.Y("q<dx>"))
B.bD=new A.b6(0,"depthTest")
B.bE=new A.b6(1,"depthFunc")
B.bF=new A.b6(2,"depthWrite")
B.bG=new A.b6(3,"blendEnable")
B.bH=new A.b6(4,"blendFunc")
B.bI=new A.b6(5,"blendEquation")
B.bJ=new A.b6(6,"cullEnable")
B.bK=new A.b6(7,"cullFace")
B.dK=new A.b6(8,"frontFace")
B.mb=new A.b6(9,"stencilEnable")
B.dI=new A.b6(10,"colorMask")
B.dJ=new A.b6(11,"scissorEnable")
B.ji=s([B.bD,B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.dK,B.mb,B.dI,B.dJ],A.Y("q<b6>"))
B.aH=new A.cF(0,"none")
B.lX=new A.cF(1,"albedoOnly")
B.lY=new A.cF(2,"normalsOnly")
B.lZ=new A.cF(3,"roughnessOnly")
B.m_=new A.cF(4,"metallicOnly")
B.m0=new A.cF(5,"aoOnly")
B.m1=new A.cF(6,"wireframeOnly")
B.cY=s([B.aH,B.lX,B.lY,B.lZ,B.m_,B.m0,B.m1],A.Y("q<cF>"))
B.jj=s(["off","errors","full"],t.s)
B.jk=s(["off","fxaa","msaa2","msaa4"],t.s)
B.jl=s(["off","profile","standard","high"],t.s)
B.jm=s(["srgb","linear"],t.s)
B.jn=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.jo=s(["uBloomStrength"],t.s)
B.jp=s(["uLutSize","uStrength"],t.s)
B.jq=s([B.cf,B.cg,B.ch],A.Y("q<cc>"))
B.jr=s(["uTexelSize","uNear","uFar"],t.s)
B.cZ=s(["uTexelStep"],t.s)
B.js=s(["uninitialized"],t.s)
B.hu=new A.cO(0,"minimal")
B.bi=s([B.hu,B.cw,B.cx],A.Y("q<cO>"))
B.nk=new A.bn("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.nf=new A.bn("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.ne=new A.bn("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.nh=new A.bn("ronnie.response","named","The route card gives one name its own line.")
B.ju=s([B.nk,B.nf,B.ne,B.nh],t.uk)
B.a7=new A.c2(0,"waiting")
B.am=new A.c2(1,"atDoor")
B.an=new A.c2(2,"consulting")
B.aI=new A.c2(3,"resolved")
B.jw=s([B.a7,B.am,B.an,B.aI],A.Y("q<c2>"))
B.eO=new A.ca("W A S D","Move",!1)
B.eM=new A.ca("TAB","Journal",!1)
B.eL=new A.ca("CAPS","Shader Lab",!1)
B.eK=new A.ca("ESC","Pause",!1)
B.jx=s([B.eO,B.eM,B.eL,B.eK],t.sa)
B.jy=s(["floor-linoleum","ceiling-stained"],t.s)
B.k0={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.d_=new A.a3(B.k0,["pixeldart-fbx-diagnostic-v1",!1,!1,null,0],A.Y("a3<f,N?>"))
B.kd={uAlbedo:0}
B.d0=new A.a3(B.kd,[0],t.I)
B.kk={uSsaoRaw:0,uSceneDepth:1}
B.jz=new A.a3(B.kk,[0,1],t.I)
B.db={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iL=s(["KeyW","GamepadDpadUp"],t.s)
B.iK=s(["KeyS","GamepadDpadDown"],t.s)
B.iC=s(["KeyA","GamepadDpadLeft"],t.s)
B.iD=s(["KeyD","GamepadDpadRight"],t.s)
B.iE=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iI=s(["KeyQ","GamepadB"],t.s)
B.iN=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.ja=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iJ=s(["KeyR","GamepadX"],t.s)
B.iF=s(["KeyF","GamepadRB"],t.s)
B.iG=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iH=s(["KeyL"],t.s)
B.it=s(["Escape","GamepadMenu"],t.s)
B.jA=new A.a3(B.db,[B.iL,B.iK,B.iC,B.iD,B.iE,B.iI,B.iN,B.ja,B.iJ,B.iF,B.iG,B.iH,B.it],t.mJ)
B.jB=new A.a3(B.db,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.D)
B.kh={uScene:0,uHistory:1}
B.jC=new A.a3(B.kh,[0,1],t.I)
B.jR={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jD=new A.a3(B.jR,["90d3581f33d758cad946424664b978a38b3c3d27","90688e1f7a06ef9722b546c626a67c527b374db4","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.D)
B.k3={aPosition:0,aUvMat:1}
B.d1=new A.a3(B.k3,[0,4],t.I)
B.ki={uScene:0,uLut:1}
B.jE=new A.a3(B.ki,[0,1],t.I)
B.kj={uSource:0}
B.d2=new A.a3(B.kj,[0],t.I)
B.kb={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jF=new A.a3(B.kb,[0,1,2,3,4,5,6],t.I)
B.d3=new A.cQ([B.Z,"settings.visual",B.bp,"settings.graphics",B.a_,"settings.gameplay",B.bq,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d4=new A.cQ([B.Z,"visual",B.bp,"graphics",B.a_,"gameplay",B.bq,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jZ={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jG=new A.a3(B.jZ,[0,1,2],t.I)
B.ka={"living-room":0,hall:1,kitchen:2,cellar:3,bedroom:4,landing:5,bathroom:6,"spare-room":7}
B.iO=s(["hall-living"],t.s)
B.iu=s(["front-door","hall-living","hall-kitchen","hall-landing"],t.s)
B.iy=s(["hall-kitchen","kitchen-living","kitchen-bathroom"],t.s)
B.jt=s(["cellar-service"],t.s)
B.iS=s(["bedroom-service"],t.s)
B.jh=s(["hall-landing","landing-bedroom","landing-bathroom"],t.s)
B.jv=s(["landing-bathroom","kitchen-bathroom"],t.s)
B.iq=s(["spare-service"],t.s)
B.jH=new A.a3(B.ka,[B.iO,B.iu,B.iy,B.jt,B.iS,B.jh,B.jv,B.iq],t.mJ)
B.km={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jI=new A.a3(B.km,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.k5={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i8=new A.bh("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.i3=new A.bh("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.i7=new A.bh("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.ia=new A.bh("wallpaper-damp","grime",7106925,0.94,0.76)
B.i4=new A.bh("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i9=new A.bh("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.ib=new A.bh("wallpaper-peeling","grime",9340536,0.91,0.68)
B.i5=new A.bh("floor-wood","wall-plaster",7755327,0.88,0.22)
B.i1=new A.bh("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.i2=new A.bh("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.i_=new A.bh("floor-concrete","grime",7828331,0.96,0.92)
B.i0=new A.bh("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.i6=new A.bh("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bj=new A.a3(B.k5,[B.i8,B.i3,B.i7,B.ia,B.i4,B.i9,B.ib,B.i5,B.i1,B.i2,B.i_,B.i0,B.i6],A.Y("a3<f,bh>"))
B.ke={uBloom:0}
B.jJ=new A.a3(B.ke,[0],t.I)
B.kf={uSceneDepth:0}
B.jK=new A.a3(B.kf,[0],t.I)
B.kg={uScene:0}
B.jL=new A.a3(B.kg,[0],t.I)
B.N={}
B.d6=new A.a3(B.N,[],A.Y("a3<f,hj>"))
B.d5=new A.a3(B.N,[],t.D)
B.bk=new A.a3(B.N,[],A.Y("a3<f,t>"))
B.y=new A.a3(B.N,[],t.I)
B.nx=new A.a3(B.N,[],A.Y("a3<f,f?>"))
B.jM=new A.a3(B.N,[],A.Y("a3<@,@>"))
B.jU={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jN=new A.a3(B.jU,[0,1,2,3,4,5,6],t.I)
B.de=new A.cC(0,"resume")
B.df=new A.cC(1,"settings")
B.dg=new A.cC(2,"controls")
B.dh=new A.cC(3,"save")
B.di=new A.cC(4,"help")
B.dj=new A.cC(5,"credits")
B.dk=new A.cC(6,"back")
B.jO=new A.cQ([B.de,"pause.resume",B.df,"pause.settings",B.dg,"pause.controls",B.dh,"pause.save",B.di,"pause.help",B.dj,"pause.credits",B.dk,"pause.back"],A.Y("cQ<cC,f>"))
B.k7={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jP=new A.a3(B.k7,[0,1,2,3],t.I)
B.kl={uTex:0}
B.jQ=new A.a3(B.kl,[0],t.I)
B.bl=new A.cQ([B.aF,1,B.bA,1.5,B.dA,1.5,B.bB,2,B.bC,2,B.a2,4],A.Y("cQ<cj,t>"))
B.ny=new A.hP(0,"srgb")
B.nz=new A.hP(1,"linear")
B.bm=new A.eF(0,"resident")
B.d7=new A.eF(1,"pending")
B.d8=new A.eF(2,"missing")
B.d9=new A.eF(3,"evicted")
B.j4=s([],t.bA)
B.j5=s([],A.Y("q<bi>"))
B.bn=new A.e2(B.j4,B.j5,null)
B.dc=new A.ci(1,"settings")
B.ko=new A.ci(2,"visual")
B.kp=new A.ci(3,"graphics")
B.kq=new A.ci(4,"gameplay")
B.kr=new A.ci(5,"controls")
B.ks=new A.ci(6,"audio")
B.kt=new A.ci(7,"accessibility")
B.ku=new A.ci(8,"credits")
B.Y=new A.bi(1,"settings")
B.kv=new A.bi(2,"journal")
B.kw=new A.bi(3,"sleep")
B.kx=new A.bi(4,"help")
B.ky=new A.bi(5,"visitor")
B.kz=new A.bi(6,"ending")
B.dl=new A.e3(0,"opened")
B.dm=new A.e3(2,"backed")
B.dn=new A.e3(3,"resumed")
B.kA=new A.e3(4,"dismissed")
B.a0=new A.e3(5,"unchanged")
B.kB=new A.bt("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kC=new A.bt("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.kD=new A.bt("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kE=new A.bt("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kF=new A.bt("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kG=new A.bt("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kH=new A.bt("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kI=new A.bt("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kJ=new A.bt("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kK=new A.kp(0,1,null)
B.kM=new A.kq(1,"high")
B.kL=new A.qa(!1,!0,!0,!0,!1,B.kM,35,256)
B.kN=new A.ku(1,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.br=new A.eJ(0,"safe")
B.O=new A.eJ(1,"standard")
B.a1=new A.eJ(2,"high")
B.a3=new A.aM(B.N,0,t.M)
B.af=new A.e4(B.br,B.a3)
B.kc={shadows:0}
B.lL=new A.aM(B.kc,1,t.M)
B.dq=new A.e4(B.O,B.lL)
B.jW={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lD=new A.aM(B.jW,5,t.M)
B.dr=new A.e4(B.a1,B.lD)
B.kO=new A.eJ(4,"shipping")
B.jY={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lE=new A.aM(B.jY,7,t.M)
B.nA=new A.e4(B.kO,B.lE)
B.kQ=new A.aR(0,1)
B.kR=new A.b_(0.35,0.52,0.88)
B.kS=new A.aA(0.46,0.25,0.2)
B.ds=new A.b_(0.22,0.45,0.92)
B.kT=new A.aA(0.48,0.4,0.34)
B.kU=new A.aA(0.31,0.25,0.23)
B.bs=new A.b_(0.75,0.52,0.42)
B.kV=new A.b_(0.4,0.65,0.95)
B.bt=new A.b_(0.88,0.96,1)
B.kW=new A.aA(0.37,0.33,0.31)
B.kX=new A.b_(0.62,0.48,0.45)
B.kY=new A.aA(0.34,0.32,0.29)
B.dt=new A.aA(0.38,0.25,0.19)
B.bu=new A.b_(0.9,0.8,0.72)
B.aB=new A.b_(0.28,0.16,0.12)
B.kZ=new A.aA(0.31,0.28,0.24)
B.aC=new A.b_(0.65,0.45,0.35)
B.l_=new A.aA(0.58,0.56,0.5)
B.du=new A.b_(0.2,0.38,0.9)
B.l0=new A.aA(0.44,0.37,0.28)
B.l1=new A.aA(0.52,0.5,0.44)
B.l2=new A.aA(0.24,0.25,0.27)
B.l3=new A.aA(0.28,0.27,0.25)
B.l4=new A.b_(0.35,0.28,0.25)
B.dv=new A.b_(0.52,0.32,0.38)
B.l5=new A.aA(0.42,0.4,0.38)
B.l6=new A.aA(0.18,0.2,0.21)
B.l7=new A.aA(0.2,0.12,0.1)
B.aD=new A.b_(0.35,0.2,0.15)
B.l8=new A.aA(0.12,0.15,0.2)
B.dw=new A.eL(0,"constructed")
B.z=new A.eL(1,"ready")
B.bv=new A.eL(2,"lost")
B.dx=new A.eL(3,"disposed")
B.lh=new A.i4(B.af,384,216,1,B.aS,0,512,32,4,1,B.cb)
B.bw=new A.eM(0,"constructed")
B.li=new A.eM(1,"initializing")
B.bx=new A.eM(2,"ready")
B.dy=new A.eM(3,"contextLost")
B.i=new A.fJ(0,"read")
B.k=new A.fJ(1,"write")
B.J=new A.fJ(2,"historyRead")
B.by=new A.fK(0,"prepared")
B.lj=new A.fK(1,"committed")
B.lk=new A.fK(2,"rolledBack")
B.r=new A.i6(0,"rgba8")
B.ll=new A.aI("dofBlurH",B.r,192,108,1,0)
B.lm=new A.aI("dofBlurV",B.r,192,108,1,0)
B.ln=new A.aI("dofOutput",B.r,384,216,1,0)
B.dz=new A.i6(2,"depth24")
B.lo=new A.aI("shadowMap",B.dz,512,512,1,0)
B.lp=new A.aI("ssaoRaw",B.r,192,108,1,0)
B.lq=new A.aI("ssaoBlurred",B.r,192,108,1,0)
B.lr=new A.aI("gradeOutput",B.r,384,216,1,0)
B.ls=new A.aI("vhsOutput",B.r,384,216,1,0)
B.lt=new A.aI("sceneDepth",B.dz,384,216,1,0)
B.lu=new A.aI("bloomBlurH",B.r,192,108,1,0)
B.lv=new A.aI("bloomBlurV",B.r,192,108,1,0)
B.lw=new A.aI("present",B.r,384,216,1,0)
B.bz=new A.aI("sceneColor",B.r,384,216,1,0)
B.lx=new A.aI("ps1Output",B.r,384,216,1,0)
B.ly=new A.eO(null,"save storage unavailable")
B.lz=new A.eO(null,"save could not be recovered")
B.lA=new A.eO(null,null)
B.k1={WheelUp:0,WheelDown:1}
B.lB=new A.aM(B.k1,2,t.M)
B.k8={open:0,closed:1}
B.lC=new A.aM(B.k8,2,t.M)
B.jV={Escape:0}
B.dB=new A.aM(B.jV,1,t.M)
B.jT={open:0,closed:1,mixed:2}
B.lF=new A.aM(B.jT,3,t.M)
B.k6={front:0,"rear-service":1}
B.lG=new A.aM(B.k6,2,t.M)
B.k9={overcast:0,rain:1}
B.lH=new A.aM(B.k9,2,t.M)
B.k4={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lI=new A.aM(B.k4,16,t.M)
B.k2={Escape:0,Tab:1,F11:2}
B.dC=new A.aM(B.k2,3,t.M)
B.k_={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lJ=new A.aM(B.k_,5,t.M)
B.jX={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ag=new A.aM(B.jX,7,t.M)
B.jS={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lK=new A.aM(B.jS,9,t.M)
B.dF=new A.eQ(2,"link")
B.lW=new A.i9(B.dF,"gl.createProgram() returned null")
B.dD=new A.eQ(0,"vertex")
B.dE=new A.eQ(1,"fragment")
B.dG=new A.eQ(3,"validation")
B.m3=new A.ia(0,"full")
B.m4=new A.ia(2,"culled")
B.a6=new A.I(0,1,0)
B.bN=new A.I(0,-1,0)
B.m9=new A.bz(-1,B.a6,B.bN,B.cM,1,1,0.3,0.5)
B.cT=s([],t.n)
B.ma=new A.kT(!1,"","",B.cT,B.cT)
B.dL=new A.dy(0,"resident")
B.dM=new A.dy(1,"pending")
B.dN=new A.dy(2,"missing")
B.dO=new A.dy(3,"evicted")
B.al=new A.I(0,0,0)
B.kP=new A.kA(0,0,0,1)
B.u=new A.kZ(B.al,B.kP)
B.mc=A.cp("Gv")
B.md=A.cp("Gw")
B.me=A.cp("nY")
B.mf=A.cp("BF")
B.mg=A.cp("BT")
B.mh=A.cp("BU")
B.mi=A.cp("BV")
B.mj=A.cp("ae")
B.mk=A.cp("N")
B.ml=A.cp("wk")
B.mm=A.cp("CP")
B.mn=A.cp("CQ")
B.mo=A.cp("ih")
B.e=new A.d1(0,"float1")
B.aj=new A.d1(1,"float2")
B.q=new A.d1(2,"float3")
B.mp=new A.d1(3,"float4")
B.v=new A.d1(4,"mat4")
B.dP=new A.d1(5,"mat4Array")
B.bL=new A.x(B.e,0)
B.dQ=new A.x(B.e,1)
B.R=new A.d1(6,"sampler")
B.w=new A.x(B.R,0)
B.ak=new A.x(B.R,1)
B.dR=new A.x(B.R,2)
B.mq=new A.x(B.R,3)
B.mr=new A.x(B.R,4)
B.ms=new A.x(B.R,5)
B.mt=new A.x(B.R,6)
B.mu=new A.rI(!1)
B.mv=new A.I(0,0,1)
B.mw=new A.I(1,0,0)
B.mx=new A.I(1/0,1/0,1/0)
B.my=new A.I(-1/0,-1/0,-1/0)
B.dT=new A.d3(6,"tangent4")
B.mK=new A.ea(0,"visitorAnswered")
B.dU=new A.ea(1,"visitorIgnored")
B.mL=new A.ea(2,"entryVerified")
B.mM=new A.ea(3,"entryContradicted")
B.mN=new A.ea(4,"exposureAccepted")
B.mP=new A.d4(1,"malformedDay")
B.mQ=new A.d4(2,"malformedTier")
B.dV=new A.d4(3,"missingTierLines")
B.a8=new A.d4(6,"invalidPhase")
B.mT=new A.bl(B.a8,"No reaction is due.")
B.n0=new A.b9(B.mT)
B.mY=new A.bl(B.a8,"The active visit cannot be chosen.")
B.n1=new A.b9(B.mY)
B.mU=new A.bl(B.a8,"The active visit has no line to advance.")
B.n2=new A.b9(B.mU)
B.mS=new A.d4(5,"noActiveVisit")
B.mV=new A.bl(B.mS,"There is no active visit.")
B.dW=new A.b9(B.mV)
B.mX=new A.bl(B.a8,"A visit is already active.")
B.n3=new A.b9(B.mX)
B.mR=new A.d4(4,"noArrival")
B.n_=new A.bl(B.mR,"The authored arrival is missing.")
B.n4=new A.b9(B.n_)
B.mW=new A.bl(B.a8,"That answer is not offered.")
B.n5=new A.b9(B.mW)
B.mO=new A.d4(0,"missingCorpus")
B.mZ=new A.bl(B.mO,"The authored visitor corpus is empty.")
B.n6=new A.b9(B.mZ)
B.dX=new A.eX(1,"exact")
B.bQ=new A.eX(2,"partial")
B.aJ=new A.eX(3,"contradiction")
B.n7=new A.eX(0,"skipped")
B.n8=new A.eW(B.n7,B.a3)
B.n9=new A.eW(B.bQ,B.a3)
B.na=new A.io(B.X,!1)
B.nb=new A.io(B.X,!0)
B.dY=new A.iq(0,"horizontal")
B.nc=new A.iq(1,"vertical")
B.dZ=new A.is(0,"horizontal")
B.nd=new A.is(1,"vertical")
B.aK=new A.fV(0,"empty")
B.nr=new A.fV(1,"cpuReady")
B.aL=new A.fV(4,"released")})();(function staticFields(){$.tp=null
$.c8=A.c([],A.Y("q<N>"))
$.yb=null
$.qe=0
$.qf=A.ET()
$.xC=null
$.xB=null
$.A7=null
$.zY=null
$.Ag=null
$.vb=null
$.vi=null
$.xb=null
$.tH=A.c([],A.Y("q<E<N>?>"))
$.h4=null
$.j5=null
$.j6=null
$.wM=!1
$.am=B.x
$.yt=""
$.yu=null
$.yp=null
$.pW=null
$.z1=A.ac()
$.f6=A.ac()
$.aK=null
$.tS=A.ac()
$.zr=null
$.B=A.ac()
$.cH=A.ac()
$.ad=A.ac()
$.X=A.ac()
$.bd=A.ac()
$.T=A.ac()
$.ww=A.ac()
$.wH=null
$.bp=null
$.wz=!1
$.wU=!1
$.j3=B.aN
$.ek=B.ap
$.v0=!1
$.x3=!1
$.zt=null
$.me=null
$.m9=null
$.zf=0
$.mi=!1
$.zs=!1
$.wN=0
$.el=0
$.wB="booting"
$.co=0
$.f9=0
$.av="hall"
$.j0=A.ac()
$.h0=A.ac()
$.c7=A.ac()
$.zy=null
$.wV=0
$.wZ=1.65
$.em=null
$.be=null
$.j9=!1
$.cn=A.ac()
$.h1=A.ac()
$.j_=A.ac()
$.m6=A.ac()
$.z3=A.ac()
$.z2=A.ac()
$.at=A.ac()
$.m7=A.ac()
$.iZ=A.ac()
$.m5=A.ac()
$.j1=A.ac()
$.j2=A.ac()
$.f5=A.ac()
$.ej=A.ac()
$.h_=A.ac()
$.iY=A.ac()
$.iW=A.ac()
$.iX=A.ac()
$.aE=A.ac()
$.m4=A.ac()
$.bc=A.ac()
$.v1=A.a_(t.S)
$.da=A.c([],t.s)
$.wG=null
$.zP=!1
$.z6=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Gz","Ao",()=>A.A5("_$dart_dartClosure"))
s($,"Gy","hd",()=>A.A5("_$dart_dartClosure_dartJSInterop"))
s($,"Hg","AL",()=>A.c([new J.k3()],A.Y("q<i7>")))
s($,"GK","Ap",()=>A.dA(A.rE({
toString:function(){return"$receiver$"}})))
s($,"GL","Aq",()=>A.dA(A.rE({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"GM","Ar",()=>A.dA(A.rE(null)))
s($,"GN","As",()=>A.dA(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GQ","Av",()=>A.dA(A.rE(void 0)))
s($,"GR","Aw",()=>A.dA(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GP","Au",()=>A.dA(A.yq(null)))
s($,"GO","At",()=>A.dA(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"GT","Ay",()=>A.dA(A.yq(void 0)))
s($,"GS","Ax",()=>A.dA(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"GV","xn",()=>A.Dd())
s($,"GZ","AD",()=>A.Cb(4096))
s($,"GX","AB",()=>new A.tP().$0())
s($,"GY","AC",()=>new A.tO().$0())
s($,"GW","AA",()=>A.Ca(A.a0(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"H9","hf",()=>A.mp(B.mk))
s($,"GI","xm",()=>{A.Cp()
return $.qe})
s($,"Gu","An",()=>B.bz.fW())
s($,"GE","xl",()=>A.kn(A.c([255,255,255,255],t.t)))
s($,"GB","xi",()=>A.kn(A.c([128,128,255,255],t.t)))
s($,"GA","xh",()=>A.kn(A.c([0,0,0,255],t.t)))
s($,"GC","xj",()=>A.kn(A.c([255,255,0,255],t.t)))
s($,"GD","xk",()=>A.kn(A.c([255,255,255,255],t.t)))
s($,"Hl","AP",()=>A.ij(0,1,0))
s($,"GU","Az",()=>A.Da(A.a_(t.N),0,0,A.ij(0,0,0)))
s($,"Hi","AM",()=>A.yg("^[a-z0-9][a-z0-9._-]*$"))
s($,"Ho","fe",()=>{var q=$.yp
if(q==null){A.v8()
A.v8()
A.v8()
A.v8()
q=$.yp=new A.rt()}return q})
s($,"GF","vX",()=>A.w3(B.aV,B.cq,!0,B.aW,B.cs,B.cv,B.cw,B.cy,!0,!1,B.cA))
s($,"H4","AE",()=>new A.n3())
r($,"zS","dc",()=>A.wh(null,null))
r($,"j4","he",()=>A.fy(null,null))
r($,"wF","fd",()=>A.fp(null,null,!1,1,!1,!1,2,1))
r($,"wI","cJ",()=>$.vX())
s($,"Ha","AH",()=>new A.oD())
s($,"Hb","AI",()=>new A.oN())
s($,"Hc","vZ",()=>new A.p6(A.m(t.N,t.S)))
s($,"H6","AF",()=>A.e9().gb0().h(0,"debugPause")==="1")
s($,"H3","jc",()=>A.e9().gb0().h(0,"automation")==="1")
s($,"H0","vY",()=>A.F8())
s($,"H_","xo",()=>$.vY()!=null)
s($,"H1","xp",()=>$.jc()?A.e9().gb0().h(0,"captureMantleId"):null)
s($,"H2","xq",()=>A.e9().gb0().h(0,"captureMantleLit")==="1")
r($,"wY","ep",()=>A.ij(0,0,0))
r($,"wS","AK",()=>A.ij(0,0,0))
r($,"x4","w_",()=>A.ij(0,0,0))
s($,"H5","xr",()=>A.F9())
s($,"He","mq",()=>new A.nZ(A.ij(0,0,0)))
s($,"Hd","AJ",()=>new A.pw(new A.nC()))
s($,"H7","cq",()=>new A.og(A.c([],t.s)))
s($,"Hh","hh",()=>{var q=new A.rg(B.aH)
q.f=A.Y("E<e6>").a(A.c([A.a2(B.Q,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a2(B.Q,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a2(B.Q,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a2(B.Q,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a2(B.Q,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a2(B.a5,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a2(B.a5,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a2(B.a5,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a2(B.a5,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a2(B.a5,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a2(B.ai,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a2(B.ai,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a2(B.ai,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a2(B.ai,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a2(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a2(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a2(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a2(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a2(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a2(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a2(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a2(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a2(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a2(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a2(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a2(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a2(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a2(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a2(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a2(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a2(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a2(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a2(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a2(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a2(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a2(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a2(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a2(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a2(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a2(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a2(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a2(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a2(B.Q,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.Y("q<e6>")))
return q})
s($,"Hk","AO",()=>new A.rf(A.m(t.N,t.z)))
s($,"Hj","AN",()=>new A.qh(A.Cr(520588),B.b3))
s($,"H8","AG",()=>new A.oz())
s($,"Hf","hg",()=>new A.q_(B.bn))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fF,ArrayBuffer:A.fE,ArrayBufferView:A.hU,DataView:A.kg,Float32Array:A.hR,Float64Array:A.kh,Int16Array:A.ki,Int32Array:A.kj,Int8Array:A.kk,Uint16Array:A.kl,Uint32Array:A.km,Uint8ClampedArray:A.eG,CanvasPixelArray:A.eG,Uint8Array:A.hV})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b4.$nativeSuperclassTag="ArrayBufferView"
A.iA.$nativeSuperclassTag="ArrayBufferView"
A.iB.$nativeSuperclassTag="ArrayBufferView"
A.hS.$nativeSuperclassTag="ArrayBufferView"
A.iC.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.hT.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.vj
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
