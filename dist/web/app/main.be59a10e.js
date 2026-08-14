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
if(a[b]!==s){A.Gm(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.x8(b)
return new s(c,this)}:function(){if(s===null)s=A.x8(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.x8(a).prototype
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
xe(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xa(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xc==null){A.G0()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.yp("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tn
if(o==null)o=$.tn=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.G6(a)
if(p!=null)return p
if(typeof a=="function")return B.i8
s=Object.getPrototypeOf(a)
if(s==null)return B.dm
if(s===Object.prototype)return B.dm
if(typeof q=="function"){o=$.tn
if(o==null)o=$.tn=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bQ,enumerable:false,writable:true,configurable:true})
return B.bQ}return B.bQ},
xU(a,b){if(a<0||a>4294967295)throw A.b(A.aY(a,0,4294967295,"length",null))
return J.xW(new Array(a),b)},
xV(a,b){if(a<0)throw A.b(A.x("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
xT(a,b){if(a<0)throw A.b(A.x("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
xW(a,b){var s=A.c(a,b.i("r<0>"))
s.$flags=1
return s},
BX(a,b){var s=t.hO
return J.xu(s.a(a),s.a(b))},
xY(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
BY(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xY(r))break;++b}return b},
BZ(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xY(q))break}return b},
en(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hH.prototype
return J.k8.prototype}if(typeof a=="string")return J.dX.prototype
if(a==null)return J.hI.prototype
if(typeof a=="boolean")return J.k7.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dY.prototype
if(typeof a=="symbol")return J.hM.prototype
if(typeof a=="bigint")return J.hK.prototype
return a}if(a instanceof A.H)return a
return J.xa(a)},
aC(a){if(typeof a=="string")return J.dX.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dY.prototype
if(typeof a=="symbol")return J.hM.prototype
if(typeof a=="bigint")return J.hK.prototype
return a}if(a instanceof A.H)return a
return J.xa(a)},
c9(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dY.prototype
if(typeof a=="symbol")return J.hM.prototype
if(typeof a=="bigint")return J.hK.prototype
return a}if(a instanceof A.H)return a
return J.xa(a)},
A_(a){if(typeof a=="number")return J.fB.prototype
if(typeof a=="string")return J.dX.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.eR.prototype
return a},
A0(a){if(typeof a=="string")return J.dX.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.eR.prototype
return a},
xs(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.A_(a).ah(a,b)},
ad(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.en(a).a4(a,b)},
aT(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.G5(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).h(a,b)},
bt(a,b,c){return J.c9(a).k(a,b,c)},
hl(a,b){return J.c9(a).l(a,b)},
AM(a,b){return J.A0(a).fm(a,b)},
xt(a,b){return J.c9(a).M(a,b)},
AN(a,b){return J.c9(a).cD(a,b)},
xu(a,b){return J.A_(a).G(a,b)},
xv(a,b){return J.aC(a).q(a,b)},
mq(a,b){return J.c9(a).a0(a,b)},
AO(a,b){return J.c9(a).a7(a,b)},
xw(a){return J.c9(a).gU(a)},
aA(a){return J.en(a).gN(a)},
mr(a){return J.aC(a).gO(a)},
AP(a){return J.aC(a).gW(a)},
R(a){return J.c9(a).gu(a)},
cL(a){return J.aC(a).gt(a)},
fd(a){return J.en(a).ga3(a)},
xx(a,b){return J.c9(a).Y(a,b)},
fe(a,b,c){return J.c9(a).cb(a,b,c)},
AQ(a,b){return J.aC(a).st(a,b)},
AR(a,b){return J.c9(a).P(a,b)},
AS(a,b){return J.A0(a).b1(a,b)},
da(a){return J.en(a).p(a)},
AT(a,b){return J.c9(a).dX(a,b)},
k5:function k5(){},
k7:function k7(){},
hI:function hI(){},
hL:function hL(){},
dZ:function dZ(){},
kt:function kt(){},
eR:function eR(){},
dY:function dY(){},
hK:function hK(){},
hM:function hM(){},
r:function r(a){this.$ti=a},
k6:function k6(){},
pc:function pc(a){this.$ti=a},
eq:function eq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fB:function fB(){},
hH:function hH(){},
k8:function k8(){},
dX:function dX(){}},A={w5:function w5(){},
v8(){return $},
B6(a,b,c){if(t.he.b(a))return new A.iu(a,b.i("@<0>").K(c).i("iu<1,2>"))
return new A.et(a,b.i("@<0>").K(c).i("et<1,2>"))},
y1(a){return new A.fC("Field '"+a+"' has been assigned during initialization.")},
a5(a){return new A.fC("Field '"+a+"' has not been initialized.")},
C0(a){return new A.fC("Field '"+a+"' has already been initialized.")},
vd(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ih(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f9(a,b,c){return a},
xd(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
kS(a,b,c,d){A.kD(b,"start")
if(c!=null){A.kD(c,"end")
if(b>c)A.j(A.aY(b,0,c,"start",null))}return new A.ig(a,b,c,d.i("ig<0>"))},
kf(a,b,c,d){if(t.he.b(a))return new A.df(a,b,c.i("@<0>").K(d).i("df<1,2>"))
return new A.cA(a,b,c.i("@<0>").K(d).i("cA<1,2>"))},
cy(){return new A.fQ("No element")},
xS(){return new A.fQ("Too many elements")},
kN(a,b,c,d,e){if(c-b<=32)A.CC(a,b,c,d,e)
else A.CB(a,b,c,d,e)},
CC(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aC(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aL()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
CB(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.a2(a4+a5,2),f=g-j,e=g+j,d=J.aC(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.ad(a6.$2(b,a0),0)
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
A.kN(a3,a4,r-2,a6,a7)
A.kN(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.ad(a6.$2(d.h(a3,r),b),0))++r
while(J.ad(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.kN(a3,r,q,a6,a7)}else A.kN(a3,r,q,a6,a7)},
ea:function ea(){},
hp:function hp(a,b){this.a=a
this.$ti=b},
et:function et(a,b){this.a=a
this.$ti=b},
iu:function iu(a,b){this.a=a
this.$ti=b},
is:function is(){},
t6:function t6(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.$ti=b},
fC:function fC(a){this.a=a},
dQ:function dQ(a){this.a=a},
qE:function qE(){},
P:function P(){},
a1:function a1(){},
ig:function ig(a,b,c,d){var _=this
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
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b,c){this.a=a
this.b=b
this.$ti=c},
hR:function hR(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.$ti=c},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hx:function hx(a){this.$ti=a},
dB:function dB(a,b){this.a=a
this.$ti=b},
io:function io(a,b){this.a=a
this.$ti=b},
au:function au(){},
d1:function d1(){},
fS:function fS(){},
eM:function eM(a,b){this.a=a
this.$ti=b},
iW:function iW(){},
b5(a,b,c){var s,r,q,p,o,n,m,l=A.ao(a.ga1(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.ao(a.gaD(),!0,c)
m=new A.a2(q,n,b.i("@<0>").K(c).i("a2<1,2>"))
m.$keys=l
return m}return new A.hr(A.aM(a,b,c),b.i("@<0>").K(c).i("hr<1,2>"))},
Bc(){throw A.b(A.b9("Cannot modify unmodifiable Map"))},
Bd(){throw A.b(A.b9("Cannot modify constant Set"))},
Ai(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
G5(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.da(a)
return s},
i2(a){var s,r=$.y9
if(r==null)r=$.y9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dr(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eH(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bf(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kz(a){var s,r,q,p
if(a instanceof A.H)return A.bM(A.bU(a),null)
s=J.en(a)
if(s===B.i7||s===B.i9||t.qF.b(a)){r=B.c9(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bM(A.bU(a),null)},
ya(a){var s,r,q
if(a==null||typeof a=="number"||A.bK(a))return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dP)return a.p(0)
if(a instanceof A.bq)return a.fd(!0)
s=$.AH()
for(r=0;r<1;++r){q=s[r].mz(a)
if(q!=null)return q}return"Instance of '"+A.kz(a)+"'"},
Cd(){return Date.now()},
Cm(){var s,r
if($.qd!==0)return
$.qd=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qd=1e6
$.qe=new A.qc(r)},
Cc(){if(!!self.location)return self.location.href
return null},
Cn(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dj(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aY(a,0,1114111,null,null))},
fJ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Cl(a){var s=A.fJ(a).getUTCFullYear()+0
return s},
Cj(a){var s=A.fJ(a).getUTCMonth()+1
return s},
Cf(a){var s=A.fJ(a).getUTCDate()+0
return s},
Cg(a){var s=A.fJ(a).getUTCHours()+0
return s},
Ci(a){var s=A.fJ(a).getUTCMinutes()+0
return s},
Ck(a){var s=A.fJ(a).getUTCSeconds()+0
return s},
Ch(a){var s=A.fJ(a).getUTCMilliseconds()+0
return s},
Ce(a){var s=a.$thrownJsError
if(s==null)return null
return A.cJ(s)},
yb(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
ve(a){throw A.b(A.x7(a))},
d(a,b){if(a==null)J.cL(a)
throw A.b(A.va(a,b))},
va(a,b){var s,r="index"
if(!A.aJ(b))return new A.ct(!0,b,r,null)
s=A.e(J.cL(a))
if(b<0||b>=s)return A.p2(b,s,a,r)
return A.yd(b,r)},
FT(a,b,c){if(a>c)return A.aY(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aY(b,a,c,"end",null)
return new A.ct(!0,b,"end",null)},
x7(a){return new A.ct(!0,a,null,null)},
b(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.dx()
b.dartException=a
s=A.Gp
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Gp(){return J.da(this.dartException)},
j(a,b){throw A.aD(a,b==null?new Error():b)},
bW(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.Ea(a,b,c),s)},
Ea(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ij("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.b(A.at(a))},
dy(a){var s,r,q,p,o,n
a=A.Ac(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rC(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yo(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
w6(a,b){var s=b==null,r=s?null:b.method
return new A.k9(a,r,s?null:b.receiver)},
ak(a){var s
if(a==null)return new A.pR(a)
if(a instanceof A.hy){s=a.a
return A.eo(a,s==null?A.f5(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eo(a,a.dartException)
return A.Fq(a)},
eo(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Fq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dj(r,16)&8191)===10)switch(q){case 438:return A.eo(a,A.w6(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.eo(a,new A.hY())}}if(a instanceof TypeError){p=$.Al()
o=$.Am()
n=$.An()
m=$.Ao()
l=$.Ar()
k=$.As()
j=$.Aq()
$.Ap()
i=$.Au()
h=$.At()
g=p.aZ(s)
if(g!=null)return A.eo(a,A.w6(A.q(s),g))
else{g=o.aZ(s)
if(g!=null){g.method="call"
return A.eo(a,A.w6(A.q(s),g))}else if(n.aZ(s)!=null||m.aZ(s)!=null||l.aZ(s)!=null||k.aZ(s)!=null||j.aZ(s)!=null||m.aZ(s)!=null||i.aZ(s)!=null||h.aZ(s)!=null){A.q(s)
return A.eo(a,new A.hY())}}return A.eo(a,new A.kY(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ic()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eo(a,new A.ct(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ic()
return a},
cJ(a){var s
if(a instanceof A.hy)return a.b
if(a==null)return new A.iK(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iK(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mn(a){if(a==null)return J.aA(a)
if(typeof a=="object")return A.i2(a)
return J.aA(a)},
FN(a){if(typeof a=="number")return B.c.gN(a)
if(a instanceof A.lW)return A.i2(a)
if(a instanceof A.bq)return a.gN(a)
return A.mn(a)},
zY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
FY(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
EA(a,b,c,d,e,f){t.BO.a(a)
switch(A.e(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.t8("Unsupported number of arguments for wrapped closure"))},
he(a,b){var s=a.$identity
if(!!s)return s
s=A.FO(a,b)
a.$identity=s
return s},
FO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.EA)},
Bb(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kR().constructor.prototype):Object.create(new A.fj(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xD(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.B7(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xD(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
B7(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.B2)}throw A.b("Error in functionType of tearoff")},
B8(a,b,c,d){var s=A.xC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xD(a,b,c,d){if(c)return A.Ba(a,b,d)
return A.B8(b.length,d,a,b)},
B9(a,b,c,d){var s=A.xC,r=A.B3
switch(b?-1:a){case 0:throw A.b(new A.kI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Ba(a,b,c){var s,r
if($.xA==null)$.xA=A.xz("interceptor")
if($.xB==null)$.xB=A.xz("receiver")
s=b.length
r=A.B9(s,c,a,b)
return r},
x8(a){return A.Bb(a)},
B2(a,b){return A.iO(v.typeUniverse,A.bU(a.a),b)},
xC(a){return a.a},
B3(a){return a.b},
xz(a){var s,r,q,p=new A.fj("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.x("Field name "+a+" not found.",null))},
A1(a){return v.getIsolateTag(a)},
Ag(){return v.G},
Hh(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
G6(a){var s,r,q,p,o,n=A.q($.A3.$1(a)),m=$.vb[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vi[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aB($.zU.$2(a,n))
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
return o.i}if(p==="+")return A.Aa(a,s)
if(p==="*")throw A.b(A.yp(n))
if(v.leafTags[n]===true){o=A.vN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Aa(a,s)},
Aa(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xe(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vN(a){return J.xe(a,!1,null,!!a.$ibZ)},
G8(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vN(s)
else return J.xe(s,c,null,null)},
G0(){if(!0===$.xc)return
$.xc=!0
A.G1()},
G1(){var s,r,q,p,o,n,m,l
$.vb=Object.create(null)
$.vi=Object.create(null)
A.G_()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ab.$1(o)
if(n!=null){m=A.G8(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
G_(){var s,r,q,p,o,n,m=B.ep()
m=A.hd(B.eq,A.hd(B.er,A.hd(B.ca,A.hd(B.ca,A.hd(B.es,A.hd(B.et,A.hd(B.eu(B.c9),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.A3=new A.vf(p)
$.zU=new A.vg(o)
$.Ab=new A.vh(n)},
hd(a,b){return a(b)||b},
Di(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.ad(r,b[s]))return!1}return!0},
FQ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xZ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a3("Illegal RegExp pattern ("+String(o)+")",a,null))},
Gk(a,b,c){var s=a.indexOf(b,c)
return s>=0},
FW(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ac(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xg(a,b,c){var s=A.Gl(a,b,c)
return s},
Gl(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ac(b),"g"),A.FW(c))},
aW:function aW(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
hr:function hr(a,b){this.a=a
this.$ti=b},
fq:function fq(){},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cR:function cR(a,b){this.a=a
this.$ti=b},
hs:function hs(){},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
qc:function qc(a){this.a=a},
i8:function i8(){},
rB:function rB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hY:function hY(){},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a){this.a=a},
pR:function pR(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a
this.b=null},
dP:function dP(){},
jv:function jv(){},
jw:function jw(){},
kU:function kU(){},
kR:function kR(){},
fj:function fj(a,b){this.a=a
this.b=b},
kI:function kI(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pl:function pl(a){this.a=a},
px:function px(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
J:function J(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hN:function hN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vf:function vf(a){this.a=a},
vg:function vg(a){this.a=a},
vh:function vh(a){this.a=a},
bq:function bq(){},
ee:function ee(){},
ef:function ef(){},
fW:function fW(){},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lB:function lB(a){this.b=a},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function lh(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ie:function ie(a,b){this.a=a
this.c=b},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
lT:function lT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Gm(a){throw A.aD(A.y1(a),new Error())},
p(){throw A.aD(A.a5(""),new Error())},
aX(){throw A.aD(A.C0(""),new Error())},
Ah(){throw A.aD(A.y1(""),new Error())},
ab(){var s=new A.t7()
return s.b=s},
t7:function t7(){this.b=null},
a0(a){return a},
C7(a){return new Int8Array(a)},
C8(a){return new Uint8Array(a)},
kp(a){return new Uint8Array(A.a0(a))},
dG(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.va(b,a))},
DY(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.FT(a,b,c))
return b},
fH:function fH(){},
fG:function fG(){},
hW:function hW(){},
ki:function ki(){},
b6:function b6(){},
hU:function hU(){},
hV:function hV(){},
hT:function hT(){},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
kn:function kn(){},
ko:function ko(){},
eF:function eF(){},
hX:function hX(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
wh(a,b){var s=b.c
return s==null?b.c=A.iM(a,"bY",[b.x]):s},
yh(a){var s=a.w
if(s===6||s===7)return A.yh(a.x)
return s===11||s===12},
Cw(a){return a.as},
G9(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
Y(a){return A.tI(v.typeUniverse,a,!1)},
f8(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.f8(a1,s,a3,a4)
if(r===s)return a2
return A.yO(a1,r,!0)
case 7:s=a2.x
r=A.f8(a1,s,a3,a4)
if(r===s)return a2
return A.yN(a1,r,!0)
case 8:q=a2.y
p=A.hc(a1,q,a3,a4)
if(p===q)return a2
return A.iM(a1,a2.x,p)
case 9:o=a2.x
n=A.f8(a1,o,a3,a4)
m=a2.y
l=A.hc(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ws(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hc(a1,j,a3,a4)
if(i===j)return a2
return A.yP(a1,k,i)
case 11:h=a2.x
g=A.f8(a1,h,a3,a4)
f=a2.y
e=A.Fm(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yM(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hc(a1,d,a3,a4)
o=a2.x
n=A.f8(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wt(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jm("Attempted to substitute unexpected RTI kind "+a0))}},
hc(a,b,c,d){var s,r,q,p,o=b.length,n=A.tM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.f8(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Fn(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.f8(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Fm(a,b,c,d){var s,r=b.a,q=A.hc(a,r,c,d),p=b.b,o=A.hc(a,p,c,d),n=b.c,m=A.Fn(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lu()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
x9(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.FZ(s)
return a.$S()}return null},
G2(a,b){var s
if(A.yh(b))if(a instanceof A.dP){s=A.x9(a)
if(s!=null)return s}return A.bU(a)},
bU(a){if(a instanceof A.H)return A.o(a)
if(Array.isArray(a))return A.D(a)
return A.wL(J.en(a))},
D(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.wL(a)},
wL(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Ex(a,s)},
Ex(a,b){var s=a instanceof A.dP?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Ds(v.typeUniverse,s.name)
b.$ccache=r
return r},
FZ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xb(a){return A.d8(A.o(a))},
x3(a){var s
if(a instanceof A.bq)return a.eL()
s=a instanceof A.dP?A.x9(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fd(a).a
if(Array.isArray(a))return A.D(a)
return A.bU(a)},
d8(a){var s=a.r
return s==null?a.r=new A.lW(a):s},
FX(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iO(v.typeUniverse,A.x3(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.yQ(v.typeUniverse,s,A.x3(q[r]))}return A.iO(v.typeUniverse,s,a)},
cr(a){return A.d8(A.tI(v.typeUniverse,a,!1))},
Ew(a){var s=this
s.b=A.Fh(s)
return s.b(a)},
Fh(a){var s,r,q,p,o
if(a===t.K)return A.EG
if(A.fa(a))return A.EL
s=a.w
if(s===6)return A.Eo
if(s===1)return A.zt
if(s===7)return A.EB
r=A.Fg(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fa)){a.f="$i"+q
if(q==="C")return A.EE
if(a===t.m)return A.ED
return A.EK}}else if(s===10){p=A.FQ(a.x,a.y)
o=p==null?A.zt:p
return o==null?A.f5(o):o}return A.Em},
Fg(a){if(a.w===8){if(a===t.S)return A.aJ
if(a===t.i||a===t.o)return A.EF
if(a===t.N)return A.EJ
if(a===t.y)return A.bK}return null},
Ev(a){var s=this,r=A.El
if(A.fa(s))r=A.DS
else if(s===t.K)r=A.f5
else if(A.hg(s)){r=A.En
if(s===t.lo)r=A.za
else if(s===t.dR)r=A.aB
else if(s===t.k7)r=A.DR
else if(s===t.s7)r=A.wz
else if(s===t.u6)r=A.z9
else if(s===t.gt)r=A.E}else if(s===t.S)r=A.e
else if(s===t.N)r=A.q
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a4
else if(s===t.i)r=A.br
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
Em(a){var s=this
if(a==null)return A.hg(s)
return A.A6(v.typeUniverse,A.G2(a,s),s)},
Eo(a){if(a==null)return!0
return this.x.b(a)},
EK(a){var s,r=this
if(a==null)return A.hg(r)
s=r.f
if(a instanceof A.H)return!!a[s]
return!!J.en(a)[s]},
EE(a){var s,r=this
if(a==null)return A.hg(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.H)return!!a[s]
return!!J.en(a)[s]},
ED(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.H)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zs(a){if(typeof a=="object"){if(a instanceof A.H)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
El(a){var s=this
if(a==null){if(A.hg(s))return a}else if(s.b(a))return a
throw A.aD(A.zf(a,s),new Error())},
En(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.zf(a,s),new Error())},
zf(a,b){return new A.h0("TypeError: "+A.yE(a,A.bM(b,null)))},
zW(a,b,c,d){if(A.A6(v.typeUniverse,a,b))return a
throw A.aD(A.Dk("The type argument '"+A.bM(a,null)+"' is not a subtype of the type variable bound '"+A.bM(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yE(a,b){return A.jL(a)+": type '"+A.bM(A.x3(a),null)+"' is not a subtype of type '"+b+"'"},
Dk(a){return new A.h0("TypeError: "+a)},
co(a,b){return new A.h0("TypeError: "+A.yE(a,b))},
EB(a){var s=this
return s.x.b(a)||A.wh(v.typeUniverse,s).b(a)},
EG(a){return a!=null},
f5(a){if(a!=null)return a
throw A.aD(A.co(a,"Object"),new Error())},
EL(a){return!0},
DS(a){return a},
zt(a){return!1},
bK(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.co(a,"bool"),new Error())},
DR(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.co(a,"bool?"),new Error())},
br(a){if(typeof a=="number")return a
throw A.aD(A.co(a,"double"),new Error())},
z9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.co(a,"double?"),new Error())},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
e(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.co(a,"int"),new Error())},
za(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.co(a,"int?"),new Error())},
EF(a){return typeof a=="number"},
a4(a){if(typeof a=="number")return a
throw A.aD(A.co(a,"num"),new Error())},
wz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.co(a,"num?"),new Error())},
EJ(a){return typeof a=="string"},
q(a){if(typeof a=="string")return a
throw A.aD(A.co(a,"String"),new Error())},
aB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.co(a,"String?"),new Error())},
a(a){if(A.zs(a))return a
throw A.aD(A.co(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.zs(a))return a
throw A.aD(A.co(a,"JSObject?"),new Error())},
zK(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bM(a[q],b)
return s},
F5(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zK(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bM(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zj(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.Fp(a.x)
o=a.y
return o.length>0?p+("<"+A.zK(o,b)+">"):p}if(l===10)return A.F5(a,b)
if(l===11)return A.zj(a,b,null)
if(l===12)return A.zj(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Fp(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Dt(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Ds(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tI(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iN(a,5,"#")
q=A.tM(s)
for(p=0;p<s;++p)q[p]=r
o=A.iM(a,b,q)
n[b]=o
return o}else return m},
Dr(a,b){return A.yY(a.tR,b)},
Dq(a,b){return A.yY(a.eT,b)},
tI(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yJ(A.yH(a,null,b,!1))
r.set(b,s)
return s},
iO(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yJ(A.yH(a,b,c,!0))
q.set(c,r)
return r},
yQ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ws(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eh(a,b){b.a=A.Ev
b.b=A.Ew
return b},
iN(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cE(null,null)
s.w=b
s.as=c
r=A.eh(a,s)
a.eC.set(c,r)
return r},
yO(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Do(a,b,r,c)
a.eC.set(r,s)
return s},
Do(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fa(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hg(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cE(null,null)
q.w=6
q.x=b
q.as=c
return A.eh(a,q)},
yN(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Dm(a,b,r,c)
a.eC.set(r,s)
return s},
Dm(a,b,c,d){var s,r
if(d){s=b.w
if(A.fa(b)||b===t.K)return b
else if(s===1)return A.iM(a,"bY",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cE(null,null)
r.w=7
r.x=b
r.as=c
return A.eh(a,r)},
Dp(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=13
s.x=b
s.as=q
r=A.eh(a,s)
a.eC.set(q,r)
return r},
iL(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Dl(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iM(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iL(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cE(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eh(a,r)
a.eC.set(p,q)
return q},
ws(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iL(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cE(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eh(a,o)
a.eC.set(q,n)
return n},
yP(a,b,c){var s,r,q="+"+(b+"("+A.iL(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eh(a,s)
a.eC.set(q,r)
return r},
yM(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iL(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iL(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Dl(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cE(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eh(a,p)
a.eC.set(r,o)
return o},
wt(a,b,c,d){var s,r=b.as+("<"+A.iL(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Dn(a,b,c,r,d)
a.eC.set(r,s)
return s},
Dn(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.f8(a,b,r,0)
m=A.hc(a,c,r,0)
return A.wt(a,n,m,c!==m)}}l=new A.cE(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eh(a,l)},
yH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yJ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Dd(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yI(a,r,l,k,!1)
else if(q===46)r=A.yI(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f1(a.u,a.e,k.pop()))
break
case 94:k.push(A.Dp(a.u,k.pop()))
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
case 62:A.Df(a,k)
break
case 38:A.De(a,k)
break
case 63:p=a.u
k.push(A.yO(p,A.f1(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yN(p,A.f1(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Dc(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yK(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Dh(a.u,a.e,o)
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
return A.f1(a.u,a.e,m)},
Dd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yI(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Dt(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.Cw(o)+'"')
d.push(A.iO(s,o,n))}else d.push(p)
return m},
Df(a,b){var s,r=a.u,q=A.yG(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iM(r,p,q))
else{s=A.f1(r,a.e,p)
switch(s.w){case 11:b.push(A.wt(r,s,q,a.n))
break
default:b.push(A.ws(r,s,q))
break}}},
Dc(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yG(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f1(p,a.e,o)
q=new A.lu()
q.a=s
q.b=n
q.c=m
b.push(A.yM(p,r,q))
return
case-4:b.push(A.yP(p,b.pop(),s))
return
default:throw A.b(A.jm("Unexpected state under `()`: "+A.w(o)))}},
De(a,b){var s=b.pop()
if(0===s){b.push(A.iN(a.u,1,"0&"))
return}if(1===s){b.push(A.iN(a.u,4,"1&"))
return}throw A.b(A.jm("Unexpected extended operation "+A.w(s)))},
yG(a,b){var s=b.splice(a.p)
A.yK(a.u,a.e,s)
a.p=b.pop()
return s},
f1(a,b,c){if(typeof c=="string")return A.iM(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Dg(a,b,c)}else return c},
yK(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f1(a,b,c[s])},
Dh(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f1(a,b,c[s])},
Dg(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jm("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jm("Bad index "+c+" for "+b.p(0)))},
A6(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aQ(a,b,null,c,null)
r.set(c,s)}return s},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fa(d))return!0
s=b.w
if(s===4)return!0
if(A.fa(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aQ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aQ(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aQ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aQ(a,b.x,c,d,e))return!1
return A.aQ(a,A.wh(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.wh(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.zr(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zr(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.EC(a,b,c,d,e)}if(o&&q===10)return A.EH(a,b,c,d,e)
return!1},
zr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
EC(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iO(a,b,r[o])
return A.z7(a,p,null,c,d.y,e)}return A.z7(a,b.y,null,c,d.y,e)},
z7(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
EH(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
hg(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fa(a))if(s!==6)r=s===7&&A.hg(a.x)
return r},
fa(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yY(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tM(a){return a>0?new Array(a):v.typeUniverse.sEA},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lu:function lu(){this.c=this.b=this.a=null},
lW:function lW(a){this.a=a},
ls:function ls(){},
h0:function h0(a){this.a=a},
D5(){var s,r,q
if(self.scheduleImmediate!=null)return A.FD()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.he(new A.t2(s),1)).observe(r,{childList:true})
return new A.t1(s,r,q)}else if(self.setImmediate!=null)return A.FE()
return A.FF()},
D6(a){self.scheduleImmediate(A.he(new A.t3(t.O.a(a)),0))},
D7(a){self.setImmediate(A.he(new A.t4(t.O.a(a)),0))},
D8(a){A.wk(B.eZ,t.O.a(a))},
wk(a,b){return A.Dj(a.a/1000|0,b)},
Dj(a,b){var s=new A.tG()
s.i6(a,b)
return s},
bL(a){return new A.li(new A.aq($.am,a.i("aq<0>")),a.i("li<0>"))},
bJ(a,b){a.$2(0,null)
b.b=!0
return b.a},
ar(a,b){A.DU(a,b)},
bI(a,b){b.dm(a)},
bH(a,b){b.dn(A.ak(a),A.cJ(a))},
DU(a,b){var s,r,q=new A.tT(b),p=new A.tU(b)
if(a instanceof A.aq)a.fb(q,p,t.z)
else{s=t.z
if(a instanceof A.aq)a.dV(q,p,s)
else{r=new A.aq($.am,t.hR)
r.a=8
r.c=a
r.fb(q,p,s)}}},
bN(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.am.fZ(new A.v5(s),t.H,t.S,t.z)},
yL(a,b,c){return 0},
mI(a){var s
if(t.yt.b(a)){s=a.gbL()
if(s!=null)return s}return B.at},
xL(a){var s
a.a(null)
s=new A.aq($.am,a.i("aq<0>"))
s.d_(null)
return s},
BH(a,b,c){var s=new A.aq($.am,c.i("aq<0>"))
A.CH(a,new A.o9(b,s,c))
return s},
oa(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aq($.am,b.i("aq<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.oc(i,h,g,f)
try{for(n=J.R(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.dV(new A.ob(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cq(A.c([],b.i("r<0>")))
return n}i.a=A.e_(n,null,!1,b.i("0?"))}catch(l){p=A.ak(l)
o=A.cJ(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wM(m,k)
m=new A.b2(m,k==null?A.mI(m):k)
n.co(m)
return n}else{i.d=p
i.c=o}}return f},
wM(a,b){if($.am===B.w)return null
return null},
Ey(a,b){if($.am!==B.w)A.wM(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbL()
if(b==null){A.yb(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.yb(a,b)
return new A.b2(a,b)},
td(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.CD()
b.co(new A.b2(new A.ct(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eW(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bS()
b.cp(o.a)
A.eX(b,p)
return}b.a^=2
A.mi(null,null,b.b,t.O.a(new A.te(o,b)))},
eX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wX(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eX(d.a,c)
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
A.wX(j.a,j.b)
return}g=$.am
if(g!==h)$.am=h
else g=null
c=c.c
if((c&15)===8)new A.ti(q,d,n).$0()
else if(o){if((c&1)!==0)new A.th(q,j).$0()}else if((c&2)!==0)new A.tg(d,q).$0()
if(g!=null)$.am=g
c=q.c
if(c instanceof A.aq){p=q.a.$ti
p=p.i("bY<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cz(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.td(c,f,!0)
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
zE(a,b){var s
if(t.nW.b(a))return b.fZ(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.ag(a,"onError",u.c))},
EV(){var s,r
for(s=$.h9;s!=null;s=$.h9){$.j8=null
r=s.b
$.h9=r
if(r==null)$.j7=null
s.a.$0()}},
Fk(){$.wN=!0
try{A.EV()}finally{$.j8=null
$.wN=!1
if($.h9!=null)$.xn().$1(A.zV())}},
zO(a){var s=new A.lj(a),r=$.j7
if(r==null){$.h9=$.j7=s
if(!$.wN)$.xn().$1(A.zV())}else $.j7=r.b=s},
Fd(a){var s,r,q,p=$.h9
if(p==null){A.zO(a)
$.j8=$.j7
return}s=new A.lj(a)
r=$.j8
if(r==null){s.b=p
$.h9=$.j8=s}else{q=r.b
s.b=q
$.j8=r.b=s
if(q==null)$.j7=s}},
GE(a,b){A.f9(a,"stream",t.K)
return new A.lR(b.i("lR<0>"))},
CH(a,b){var s=$.am
if(s===B.w)return A.wk(a,t.O.a(b))
return A.wk(a,t.O.a(s.fp(b)))},
wX(a,b){A.Fd(new A.uW(a,b))},
zJ(a,b,c,d,e){var s,r=$.am
if(r===c)return d.$0()
$.am=c
s=r
try{r=d.$0()
return r}finally{$.am=s}},
Fb(a,b,c,d,e,f,g){var s,r=$.am
if(r===c)return d.$1(e)
$.am=c
s=r
try{r=d.$1(e)
return r}finally{$.am=s}},
Fa(a,b,c,d,e,f,g,h,i){var s,r=$.am
if(r===c)return d.$2(e,f)
$.am=c
s=r
try{r=d.$2(e,f)
return r}finally{$.am=s}},
mi(a,b,c,d){t.O.a(d)
if(B.w!==c){d=c.fp(d)
d=d}A.zO(d)},
t2:function t2(a){this.a=a},
t1:function t1(a,b,c){this.a=a
this.b=b
this.c=c},
t3:function t3(a){this.a=a},
t4:function t4(a){this.a=a},
tG:function tG(){},
tH:function tH(a,b){this.a=a
this.b=b},
li:function li(a,b){this.a=a
this.b=!1
this.$ti=b},
tT:function tT(a){this.a=a},
tU:function tU(a){this.a=a},
v5:function v5(a){this.a=a},
cH:function cH(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cn:function cn(a,b){this.a=a
this.$ti=b},
b2:function b2(a,b){this.a=a
this.b=b},
o9:function o9(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function oc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ob:function ob(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lm:function lm(){},
iq:function iq(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ta:function ta(a,b){this.a=a
this.b=b},
tf:function tf(a,b){this.a=a
this.b=b},
te:function te(a,b){this.a=a
this.b=b},
tc:function tc(a,b){this.a=a
this.b=b},
tb:function tb(a,b){this.a=a
this.b=b},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
tj:function tj(a,b){this.a=a
this.b=b},
tk:function tk(a){this.a=a},
th:function th(a,b){this.a=a
this.b=b},
tg:function tg(a,b){this.a=a
this.b=b},
lj:function lj(a){this.a=a
this.b=null},
lR:function lR(a){this.$ti=a},
iV:function iV(){},
lK:function lK(){},
tE:function tE(a,b){this.a=a
this.b=b},
uW:function uW(a,b){this.a=a
this.b=b},
yF(a,b){var s=a[b]
return s===a?null:s},
wq(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wp(){var s=Object.create(null)
A.wq(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
y3(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
M(a,b,c){return b.i("@<0>").K(c).i("w7<1,2>").a(A.zY(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
n(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
w8(a){return new A.cm(a.i("cm<0>"))},
a_(a){return new A.cm(a.i("cm<0>"))},
aN(a,b){return b.i("y4<0>").a(A.FY(a,new A.cm(b.i("cm<0>"))))},
wr(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fU(a,b,c){var s=new A.f0(a,b,c.i("f0<0>"))
s.c=a.e
return s},
bu(a,b){var s=J.R(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.y3(b,c)
a.ar(0,new A.py(s,b,c))
return s},
fD(a,b,c){var s=A.y3(b,c)
s.I(0,a)
return s},
hP(a,b){var s,r=A.w8(b)
for(s=J.R(a);s.m();)r.l(0,b.a(s.gn()))
return r},
ke(a,b){var s=A.w8(b)
s.I(0,a)
return s},
C1(a,b){var s=t.hO
return J.xu(s.a(a),s.a(b))},
w9(a){var s,r
if(A.xd(a))return"{...}"
s=new A.bl("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.ar(0,new A.pB(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Du(){throw A.b(A.b9("Cannot change an unmodifiable set"))},
iv:function iv(){},
tm:function tm(a){this.a=a},
ix:function ix(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eY:function eY(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cm:function cm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lA:function lA(a){this.a=a
this.c=this.b=null},
f0:function f0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a6:function a6(){},
pA:function pA(a){this.a=a},
pB:function pB(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.$ti=b},
iz:function iz(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iP:function iP(){},
fE:function fE(){},
e7:function e7(a,b){this.a=a
this.$ti=b},
dt:function dt(){},
iJ:function iJ(){},
lX:function lX(){},
fT:function fT(a,b){this.a=a
this.$ti=b},
h1:function h1(){},
iQ:function iQ(){},
EZ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ak(r)
q=A.a3(String(s),null,null)
throw A.b(q)}q=A.uj(p)
return q},
uj(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ly(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uj(a[s])
return a},
DL(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Az()
else s=new Uint8Array(o)
for(r=J.aC(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DK(a,b,c,d){var s=a?$.Ay():$.Ax()
if(s==null)return null
if(0===c&&d===b.length)return A.yX(s,b)
return A.yX(s,b.subarray(c,d))},
yX(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xy(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a3("Invalid base64 padding, more than two '=' characters",a,b))},
y0(a,b,c){return new A.hO(a,b)},
E9(a){return a.B()},
D9(a,b){return new A.tp(a,[],A.FP())},
Da(a,b,c){var s,r=new A.bl(""),q=A.D9(r,b)
q.cQ(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DM(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ly:function ly(a,b){this.a=a
this.b=b
this.c=null},
to:function to(a){this.a=a},
lz:function lz(a){this.a=a},
tL:function tL(){},
tK:function tK(){},
jp:function jp(){},
na:function na(){},
eu:function eu(){},
jB:function jB(){},
jK:function jK(){},
hO:function hO(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=b},
ka:function ka(){},
pn:function pn(a){this.b=a},
pm:function pm(a){this.a=a},
tq:function tq(){},
tr:function tr(a,b){this.a=a
this.b=b},
tp:function tp(a,b,c){this.c=a
this.a=b
this.b=c},
l1:function l1(){},
rG:function rG(a){this.a=a},
tJ:function tJ(a){this.a=a
this.b=16
this.c=0},
A5(a){var s=A.dr(a,null)
if(s!=null)return s
throw A.b(A.a3(a,null,null))},
zX(a){var s=A.eH(a)
if(s!=null)return s
throw A.b(A.a3("Invalid double",a,null))},
BB(a,b){a=A.aD(a,new Error())
if(a==null)a=A.f5(a)
a.stack=b.p(0)
throw a},
e_(a,b,c,d){var s,r=c?J.xV(a,d):J.xU(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ao(a,b,c){var s,r=A.c([],c.i("r<0>"))
for(s=J.R(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
I(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.R(a);r.m();)B.a.l(s,r.gn())
return s},
ai(a,b){var s=A.ao(a,!1,b)
s.$flags=3
return s},
ym(a,b,c){var s,r
A.kD(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aY(c,b,null,"end",null))
if(s===0)return""}r=A.CF(a,b,c)
return r},
CF(a,b,c){var s=a.length
if(b>=s)return""
return A.Cn(a,b,c==null||c>s?s:c)},
ye(a){return new A.hJ(a,A.xZ(a,!1,!0,!1,!1,""))},
wj(a,b,c){var s=J.R(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
e8(){var s,r,q=A.Cc()
if(q==null)throw A.b(A.b9("'Uri.base' is not supported"))
s=$.ys
if(s!=null&&q===$.yr)return s
r=A.CN(q)
$.ys=r
$.yr=q
return r},
CD(){return A.cJ(new Error())},
Bh(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xF(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jD(a){if(a>=10)return""+a
return"0"+a},
BA(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.ag(b,"name","No enum value with that name"))},
jL(a){if(typeof a=="number"||A.bK(a)||a==null)return J.da(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ya(a)},
BC(a,b){A.f9(a,"error",t.K)
A.f9(b,"stackTrace",t.l)
A.BB(a,b)},
jm(a){return new A.jl(a)},
x(a,b){return new A.ct(!1,null,b,a)},
ag(a,b,c){return new A.ct(!0,a,b,c)},
yc(a){var s=null
return new A.fK(s,s,!1,s,s,a)},
yd(a,b){return new A.fK(null,null,!0,a,b,"Value not in range")},
aY(a,b,c,d,e){return new A.fK(b,c,!0,a,d,"Invalid value")},
kE(a,b,c){if(0>a||a>c)throw A.b(A.aY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aY(b,a,c,"end",null))
return b}return c},
kD(a,b){if(a<0)throw A.b(A.aY(a,0,null,b,null))
return a},
p2(a,b,c,d){return new A.k2(b,!0,a,d,"Index out of range")},
b9(a){return new A.ij(a)},
yp(a){return new A.kX(a)},
k(a){return new A.fQ(a)},
at(a){return new A.jy(a)},
a3(a,b,c){return new A.F(a,b,c)},
BW(a,b,c){var s,r
if(A.xd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c8,a)
try{A.EM(a,s)}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=A.wj(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
w4(a,b,c){var s,r
if(A.xd(a))return b+"..."+c
s=new A.bl(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wj(r.a,a,", ")}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
EM(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
wa(a,b,c){var s=A.n(b,c)
s.jQ(a)
return s},
cC(a,b,c,d,e,f){var s
if(B.f===c){s=J.aA(a)
b=J.aA(b)
return A.ih(A.aP(A.aP($.hi(),s),b))}if(B.f===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.ih(A.aP(A.aP(A.aP($.hi(),s),b),c))}if(B.f===e){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
return A.ih(A.aP(A.aP(A.aP(A.aP($.hi(),s),b),c),d))}if(B.f===f){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
return A.ih(A.aP(A.aP(A.aP(A.aP(A.aP($.hi(),s),b),c),d),e))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
f=J.aA(f)
f=A.ih(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.hi(),s),b),c),d),e),f))
return f},
C9(a){var s,r,q=$.hi()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q=A.aP(q,J.aA(a[r]))
return A.ih(q)},
eO(a,b){return new A.fT(A.ke(a,b),b.i("fT<0>"))},
CN(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yq(a4<a4?B.b.F(a5,0,a4):a5,5,a3).gh3()
else if(s===32)return A.yq(B.b.F(a5,5,a4),0,a3).gh3()}r=A.e_(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zN(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zN(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.b.F(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bH(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ac(a5,"http",0)){if(i&&o+3===n&&B.b.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bH(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ac(a5,"https",0)){if(i&&o+4===n&&B.b.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bH(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lO(a4<a5.length?B.b.F(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DE(a5,0,q)
else{if(q===0)A.h2(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.DF(a5,c,p-1):""
a=A.DA(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dr(B.b.F(a5,i,n),a3)
d=A.DC(a0==null?A.j(A.a3("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.DB(a5,n,m,a3,j,a!=null)
a2=m<l?A.DD(a5,m+1,l,a3):a3
return A.Dv(j,b,a,d,a1,a2,l<a4?A.Dz(a5,l+1,a4):a3)},
yu(a){var s=t.N
return B.a.bc(A.c(a.split("&"),t.s),A.n(s,s),new A.rF(B.cb),t.G)},
l0(a,b,c){throw A.b(A.a3("Illegal IPv4 address, "+a,b,c))},
CK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l0("each part must be in the range 0..255",a,r)}A.l0("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l0(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bW(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l0(j,a,q)
p=l}A.l0("IPv4 address should contain exactly 4 parts",a,q)},
CL(a,b,c){var s
if(b===c)throw A.b(A.a3("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.CM(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.yt(a,b,c)
return!0},
CM(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.F(n,a,q)
r=q
break}return new A.F("Unexpected character",a,q-1)}if(r-1===b)return new A.F(n,a,r)
return new A.F("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.F("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.F("Invalid IPvFuture address character",a,r)}},
yt(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rE(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CK(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dj(l,8)
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
B.d8.hr(s,a0,16,s,a)
B.d8.lb(s,a,a0,0)}}return s},
Dv(a,b,c,d,e,f,g){return new A.iR(a,b,c,d,e,f,g)},
yR(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h2(a,b,c){throw A.b(A.a3(c,a,b))},
DC(a,b){var s=A.yR(b)
if(a===s)return null
return a},
DA(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.h2(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Dx(a,q,r)
if(o<r){n=o+1
p=A.yW(a,B.b.ac(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CL(a,q,o)
l=B.b.F(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cG(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yW(a,B.b.ac(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yt(a,b,o)
return"["+B.b.F(a,b,o)+p+"]"}}return A.DH(a,b,c)},
Dx(a,b,c){var s=B.b.cG(a,"%",b)
return s>=b&&s<c?s:c},
yW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bl(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wv(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bl("")
l=h.a+=B.b.F(a,q,r)
if(m)n=B.b.F(a,r,r+3)
else if(n==="%")A.h2(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bl("")
if(q<r){h.a+=B.b.F(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.F(a,q,r)
if(h==null){h=new A.bl("")
m=h}else m=h
m.a+=i
l=A.wu(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.F(a,b,c)
if(q<c){i=B.b.F(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DH(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wv(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h2(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.F(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bl("")
l=p}else l=p
l.a+=k
j=A.wu(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.F(a,b,c)
if(q<c){k=B.b.F(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
DE(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.yT(a.charCodeAt(b)))A.h2(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h2(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.F(a,b,c)
return A.Dw(q?a.toLowerCase():a)},
Dw(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
DF(a,b,c){return A.iS(a,b,c,16,!1,!1)},
DB(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iS(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.DG(q,e,f)},
DG(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.DI(a,!s||c)
return A.DJ(a)},
DD(a,b,c,d){return A.iS(a,b,c,256,!0,!1)},
Dz(a,b,c){return A.iS(a,b,c,256,!0,!1)},
wv(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
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
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.F(a,b,b+3).toUpperCase()
return null},
wu(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jy(a,6*p)&63|q
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
iS(a,b,c,d,e,f){var s=A.yV(a,b,c,d,e,f)
return s==null?B.b.F(a,b,c):s},
yV(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wv(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h2(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wu(n)}if(o==null){o=new A.bl("")
k=o}else k=o
k.a=(k.a+=B.b.F(a,p,q))+l
if(typeof m!=="number")return A.ve(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.F(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
yU(a){if(B.b.T(a,"."))return!0
return B.b.bC(a,"/.")!==-1},
DJ(a){var s,r,q,p,o,n,m
if(!A.yU(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.Y(s,"/")},
DI(a,b){var s,r,q,p,o,n
if(!A.yU(a))return!b?A.yS(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gV(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.yS(s[0]))}return B.a.Y(s,"/")},
yS(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yT(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.F(a,0,s)+"%3A"+B.b.b1(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Dy(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.x("Invalid URL encoding",null))}}return r},
ww(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cb===d)return B.b.F(a,b,c)
else p=new A.dQ(B.b.F(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.x("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.x("Truncated URI",null))
B.a.l(p,A.Dy(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.m2.kn(p)},
yT(a){var s=a|32
return 97<=s&&s<=122},
yq(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a3(k,a,r))}}if(q<0&&r>b)throw A.b(A.a3(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gV(j)
if(p!==44||r!==n+7||!B.b.ac(a,"base64",n+1))throw A.b(A.a3("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.en.ly(a,m,s)
else{l=A.yV(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bH(a,m,s,l)}return new A.rD(a,j,c)},
zN(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
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
dR:function dR(a){this.a=a},
lr:function lr(){},
al:function al(){},
jl:function jl(a){this.a=a},
dx:function dx(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
k2:function k2(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ij:function ij(a){this.a=a},
kX:function kX(a){this.a=a},
fQ:function fQ(a){this.a=a},
jy:function jy(a){this.a=a},
kq:function kq(){},
ic:function ic(){},
t8:function t8(a){this.a=a},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(){},
H:function H(){},
lU:function lU(){},
rn:function rn(){this.b=this.a=0},
bl:function bl(a){this.a=a},
rF:function rF(a){this.a=a},
rE:function rE(a){this.a=a},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rD:function rD(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function lO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
ln:function ln(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pQ:function pQ(a){this.a=a},
zk(a){var s
if(typeof a=="function")throw A.b(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.DX,a)
s[$.hh()]=a
return s},
W(a){var s
if(typeof a=="function")throw A.b(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.tV,a)
s[$.hh()]=a
return s},
DX(a){return t.BO.a(a).$0()},
tV(a,b,c){t.BO.a(a)
if(A.e(c)>=1)return a.$1(b)
return a.$0()},
A2(a,b,c){return c.a(a[b])},
zl(a,b){return a[b]},
aK(a,b,c,d){return d.a(a[b].apply(a,c))},
bV(a,b){var s=new A.aq($.am,b.i("aq<0>")),r=new A.iq(s,b.i("iq<0>"))
a.then(A.he(new A.vO(r,b),1),A.he(new A.vP(r),1))
return s},
zw(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hf(a){if(A.zw(a))return a
return new A.v9(new A.ix(t.BT)).$1(a)},
vO:function vO(a,b){this.a=a
this.b=b},
vP:function vP(a){this.a=a},
v9:function v9(a){this.a=a},
Co(a){var s
if(a==null)s=B.aV
else{s=new A.ed()
s.bM(a)}return s},
lx:function lx(){},
ed:function ed(){this.b=this.a=0},
qh:function qh(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qi:function qi(){},
eI:function eI(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
no:function no(a,b){this.a=a
this.b=b
this.c=null},
fp:function fp(a,b){this.a=a
this.b=b},
np:function np(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nr:function nr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nq:function nq(){var _=this
_.c=_.b=_.a=null
_.d=0},
kw:function kw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s},
fm:function fm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jR:function jR(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
o4:function o4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dW(a,b){return new A.k_(a,b)},
ds:function ds(){},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
Gg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iG(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.P(f,new A.vQ())
s=A.c([],t.cv)
for(r=A.kS(f,0,A.f9(b,"count",t.S),t.mn),q=r.$ti,r=new A.aH(r,r.gt(0),q.i("aH<a1.E>")),q=q.i("a1.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
nM:function nM(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bC:function bC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vQ:function vQ(){},
pD(a,b,c,d,e,f,g,h,i,j){return new A.eE(c,a,h,g,f,e,i,j,b,!0)},
wc(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.x("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
jk:function jk(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c,d,e,f,g,h,i,j){var _=this
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
C3(a){A:{break A}return a},
d2:function d2(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
rH:function rH(){},
rI:function rI(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pF:function pF(){},
pG:function pG(){},
pH:function pH(){},
hZ(a){var s,r=t.N,q=A.aN(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.I(0,A.aN(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.I(0,A.aN(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.I(0,A.aN(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.I(0,A.aN(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pS(A.eO(q,r),s)},
pS:function pS(a,b){this.a=a
this.b=b},
pT:function pT(){},
fM:function fM(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fu:function fu(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g,h,i,j){var _=this
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
kT:function kT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jx:function jx(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
eL:function eL(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.d=c},
o6:function o6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
C2(){return new A.kg(new A.cX(new A.pE(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kg:function kg(a){this.a=a},
pE:function pE(){},
zQ(a){var s=4
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
case 3:s=A.j(A.b9("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
E3(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.W[r]
if(A.zQ(q.a)===b)s+=q.c}return s},
C4(a){return new A.pI(a,new A.cX(new A.pJ(),A.c([],t.EM),A.c([],t.t),t.wm),A.n(t.S,t.qt))},
y7(a){var s
A:{s=a.byteLength
break A}return s},
kZ:function kZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(){},
pK:function pK(){},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
rw:function rw(a,b){this.a=a
this.b=b},
rx:function rx(a){this.a=a},
ru:function ru(a,b){this.a=a
this.b=b},
rv:function rv(){},
CG(a){var s=new A.kV(a,new A.cX(new A.ry(),A.c([],t.f2),A.c([],t.t),t.qq),A.n(t.S,t._))
s.d=s.aT($.xl())
s.e=s.aT($.xi())
s.f=s.aT($.xj())
s.r=s.aT($.xh())
s.w=s.aT($.xk())
return s},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
ry:function ry(){},
rA:function rA(){},
rz:function rz(){},
FG(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
p.gE()
B.a.l(o,new A.eD(p,A.c([p],r)))
continue}return o},
eD:function eD(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
o_:function o_(){},
o0:function o0(a){this.a=a},
nY:function nY(a){this.a=a},
nZ:function nZ(a){this.a=a},
jQ:function jQ(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
o5:function o5(a,b){this.a=a
this.b=b
this.c=0},
Db(){return new A.fV()},
o3:function o3(a){this.a=a
this.b=null},
fV:function fV(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
we(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pW:function pW(){},
pX:function pX(){},
ce:function ce(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fL:function fL(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
hq:function hq(a){this.b=a},
kA:function kA(a,b){var _=this
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
qj:function qj(){},
b7:function b7(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ql:function ql(a,b){this.a=a
this.b=b},
qq:function qq(){},
qp:function qp(){},
qo:function qo(){},
qn:function qn(a){this.a=a},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b){this.a=a
this.b=b},
Ct(a){return new A.i4(a,new A.cX(new A.qr(),A.c([],t.w_),A.c([],t.t),t.tc))},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b){this.a=a
this.b=b},
qr:function qr(){},
uC(a,b){return A.Ee(a,b)},
Ee(a,b){var s=0,r=A.bL(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uC=A.bN(function(c,a0){if(c===1)return A.bH(a0,r)
for(;;)switch(s){case 0:a.bP()
if(a.at!=null)throw A.b(A.k("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.bU(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.bV(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cJ(b)
n=new A.kA(a.a,A.n(t.N,t.CH))
l=A.zg(a,n,b,o.a.b.a)
m=l.a
i.bV(p)
h=a.x
g=o
if(h.e)A.j(A.k("GPU resource adapter is disposed"))
h.ep(g)
f=h.c
h.b.bV(g.a)
h.c=g
h.d=null
if(f!=null)h.d7(f.b)
g.c=B.hs
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bz()
h=j
if(h!=null)h.bz()}catch(d){if(p.c===B.aY){h=t.AB.a(p)
i.ey(h)
i.a.fk(h.a)
i.b.dT(h.b)
h.c=B.eN
i.c=null}i=o
if((i==null?null:i.c)===B.af){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.j(A.k("GPU resource adapter is disposed"))
i.ep(h)
i.d7(h.b)
i.b.dT(h.a)
h.c=B.ht
i.d=null}i=m
if(i!=null)i.bz()
i=n
if(i!=null)i.bz()
throw d}case 1:return A.bI(q,r)}})
return A.bJ($async$uC,r)},
zh(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zg(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zg(a,b,c,d){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uA(a),j=new A.uB(d,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.FL(b,h,B.aX,i,s.gmf(),new A.ul(j),new A.um(j),new A.un(a),new A.us(a),new A.ut(a),new A.uu(j),new A.uv(j),s.gmh(),new A.uw(a),s.gml(),r.gmj(),k,s.gmn(),s.gmp(),new A.ux(j,c),new A.uy(j),new A.uz(j),new A.uo(j),new A.up(j),new A.uq(a),new A.ur(j),e,f,g,c.r)}else{p=new A.aI(l,B.r,g,f,e,0)
o=new A.aI(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hS(h,p,o):null
k=A.c([new A.ld(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i1(b,u.l,u.B,h,i,B.aX))
q=new A.jP(k)}a.r.toString
m=q.ka(B.a3,new A.qj(),!1,new A.lH())
k=m.a.b
if(k.length!==0)throw A.b(A.k("safe renderer graph is invalid: "+A.w(k)))
return new A.tF(q,m)},
Ef(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.k("renderer graph is not initialized"))
s=A.I(b7.gfM(),t.yz)
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
p=p.gaq()
n=A.D(p)
B.a.l(s,new A.lV(new A.cw((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.N(p,n.i("K(1)").a(o.gaw()),n.i("N<1,K>")))))}p=b8.a
m=A.FR(A.BG(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dW(B.aC,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a2(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dW(B.aC,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a2(n>0?n:h.e,3)}o=t.N
n=A.n(o,t.rL)
e=new A.o3(n)
e.k6("cull")
j=l-f
d=e.b
if(d==null)A.j(A.k("cull recorded outside an active frame"))
if(j<0)A.j(A.x("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gE().e===B.aZ)B.a.l(a,new A.aO(new A.bO(a0.h0(a2.gE().c.a).c,a2.ga8().a),a2,a1))
else B.a.l(b,new A.aO(new A.bQ(B.kq,a2.gE().b,a2.gE().a,a2.ga8().a),a2,g))}a3=new A.lt(A.FG(A.Gi(b)),A.Gh(a),p,b8.b,b8.c)
a4=new A.jG(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gE().a
if(g.length===0)A.j(A.ag(g,"passId",null))
e.b=g
n.cd(g,A.zZ())
a6=A.n(o,i)
for(g=a5.gE().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.k("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.k("resource is not in candidate: "+b1))
b3=new A.fk(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cd(b0,new A.uD(b3))}a5.ak(new A.jt(a6,a4,a3))}return new A.t9(e,m,j)},
yj(a){return new A.qA(a,new A.no(new A.nq(),new A.kH()),new A.o5(A.c([],t.h1),B.hd),A.c([],t.Ft),B.bA,A.c([],t.ow),null)},
qv:function qv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
uA:function uA(a){this.a=a},
uB:function uB(a,b){this.a=a
this.b=b},
uz:function uz(a){this.a=a},
us:function us(a){this.a=a},
ut:function ut(a){this.a=a},
uy:function uy(a){this.a=a},
un:function un(a){this.a=a},
up:function up(a){this.a=a},
uo:function uo(a){this.a=a},
ux:function ux(a,b){this.a=a
this.b=b},
ul:function ul(a){this.a=a},
um:function um(a){this.a=a},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
uw:function uw(a){this.a=a},
ur:function ur(a){this.a=a},
uq:function uq(a){this.a=a},
uD:function uD(a){this.a=a},
tF:function tF(a,b){this.a=a
this.b=b},
lH:function lH(){},
lt:function lt(a,b,c,d,e){var _=this
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
lE:function lE(a){this.b=a},
tl:function tl(){},
lL:function lL(){},
ib:function ib(a,b){this.a=a
this.b=b},
Gi(a){var s,r,q=A.I(a,t.E0)
B.a.P(q,new A.vU())
s=A.D(q)
r=s.i("N<1,c1>")
s=A.I(new A.N(q,s.i("c1(1)").a(new A.vV()),r),r.i("a1.E"))
s.$flags=1
return s},
Gh(a){var s,r,q=A.I(a,t.EH)
B.a.P(q,new A.vS())
s=A.D(q)
r=s.i("N<1,c1>")
s=A.I(new A.N(q,s.i("c1(1)").a(new A.vT()),r),r.i("a1.E"))
s.$flags=1
return s},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
vU:function vU(){},
vV:function vV(){},
vS:function vS(){},
vT:function vT(){},
FR(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gE().d&c)>>>0===0){++q
continue}n=o.gdZ()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.x("cullItems: non-finite world bounds for instance "+o.ga8().p(0),null))
if(a.mx(o.gdZ())===B.cq){++q
continue}B.a.l(l,o)}return new A.nG(l,new A.nH(q))},
nH:function nH(a){this.b=a},
nG:function nG(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.R(a),r=B.m5,q=B.m6,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.K(m,k,Math.min(r.c,o))
q=new A.K(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.x("Aabb.fromPoints requires at least one point",null))
return new A.jg(r,q)},
jg:function jg(a,b){this.a=a
this.b=b},
BG(a){var s,r,q,p,o,n,m=a.a,l=new A.o8(),k=m.length
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
return new A.o7(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eG:function eG(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
o7:function o7(a){this.a=a},
o8:function o8(){},
y5(a){if(a.length!==16)throw A.b(A.x("Mat4.fromColumnMajor requires 16 values",null))
return new A.dn(new Float32Array(A.a0(a)))},
wb(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dn(q)},
y6(a,b,c){var s=b.gau(),r=c.bx(s).gau(),q=s.bx(r),p=new Float32Array(16)
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
p[12]=-r.c0(a)
p[13]=-q.c0(a)
p[14]=s.c0(a)
p[15]=1
return new A.dn(p)},
dn:function dn(a){this.a=a},
pC:function pC(){},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kW:function kW(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lk:function lk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
js:function js(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ll:function ll(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jF:function jF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lo:function lo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
it:function it(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lp:function lp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jI:function jI(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lq:function lq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jZ:function jZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lv:function lv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.b=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
bx(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aI(a.a,a.b,b,c,s,r)},
wf:function wf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i1:function i1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lI:function lI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kB:function kB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lJ:function lJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yl(a){var s=a.c,r=Math.abs(s.a)<0.99?B.m4:B.a6,q=A.y6(a.b,s,r)
return new A.eQ(A.wb(1,a.f,B.c.D(a.w*2,0.1,3),0.05).an(0,q))},
eQ:function eQ(a){this.a=a},
kL:function kL(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lM:function lM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
FL(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.b(A.ag(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a2(e5+1,2)
m=B.d.a2(e4+1,2)
l=A.bx(B.bD,e5,e4,e3,a8)
k=A.bx(B.bD.fO(),e5,e4,a8,a8)
A.bx(B.l4,e5,e4,a8,a8)
j=A.bx(B.l1,e5,e4,a8,a8)
i=A.bx(B.kX,e6,e6,a8,a8)
h=A.bx(B.kY,b6,m,a8,a8)
g=A.bx(B.kZ,b6,m,a8,a8)
f=A.bx(B.l2,b6,m,a8,a8)
e=A.bx(B.l3,b6,m,a8,a8)
d=$.Aj()
c=e3>1
b=A.bx(d,e5,e4,a8,c?2:1)
d=A.bx(B.kU,b6,m,a8,a8)
a=A.bx(B.kV,b6,m,a8,a8)
a0=A.bx(B.kW,e5,e4,a8,a8)
a1=A.bx(B.l_,e5,e4,a8,a8)
a2=A.bx(B.l5,e5,e4,a8,a8)
a3=A.bx(B.l0,e5,e4,a8,a8)
a4=c?new A.hS(b8,l,k):a8
b5.a=null
a5=A.yl(B.lI)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.I(a7,A.c([new A.ho(b7,a9,b0,b8,b1,b1,B.dW,!0,k,f,d6,b6,m),new A.ho(b7,a9,b0,b8,b2,b2,B.mL,!1,f,e,c2,b6,m),new A.js(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.c([new A.hv(b7,a9,b0,b8,b3,b3,B.dX,k,d,d6,b6,m),new A.hv(b7,a9,b0,b8,b4,b4,B.mM,d,a,c7,b6,m),new A.jI(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jZ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kB(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.l2(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jF(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kP(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kO(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kL(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.v6(b5),i))
j.push(new A.kM(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.v7(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.i1(b7,a9,u.B,b8,k,b9))
return new A.jP(j)},
v6:function v6(a){this.a=a},
v7:function v7(a,b){this.a=a
this.b=b},
kM:function kM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lN:function lN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kP:function kP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lQ:function lQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
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
lP:function lP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l2:function l2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lY:function lY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ld:function ld(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m0:function m0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nm:function nm(){},
kK(a,b){return new A.ia(a,b)},
jV:function jV(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
jY:function jY(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d,e,f,g,h){var _=this
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
hE:function hE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hD:function hD(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
y:function y(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
or:function or(){},
os:function os(){},
fY:function fY(a,b){this.a=a
this.b=b},
eg:function eg(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fv(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jq:function jq(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b8:function b8(a,b){this.a=a
this.b=b},
rZ:function rZ(){this.a=null},
CS(a){var s=new A.lb(a,B.h,new A.rZ(),A.D1(a))
s.i5(a)
return s},
D1(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.R(t.a.b(q)?q:new A.aV(q,A.D(q).i("aV<1,h>")))
while(r.m())s.l(0,r.gn())
return s},
c6(a,b){var s,r
if(a.b!==B.h)A.j(A.k(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.e(s.drawingBufferWidth),A.e(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
CY(a,b){var s
if(a.b!==B.h)A.j(A.k(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.e(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.x("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
CX(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.k("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
CW(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
CV(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yx(a,b){var s
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
CT(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bo(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=a.f
r=s.kV(b)
if(r.a===0)return
if(r.q(0,B.bH)){q=v.G
p=a.a
if(b.a)p.enable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bI))a.a.depthFunc(A.CW(a,b.b))
if(r.q(0,B.bJ))a.a.depthMask(b.c)
if(r.q(0,B.bN)){q=v.G
p=a.a
if(b.w)p.enable(A.e(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.e(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bO))a.a.cullFace(A.CV(a,b.x))
if(r.q(0,B.dI)){q=v.G.WebGL2RenderingContext
q=A.e(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bK)){q=v.G
p=a.a
if(b.d)p.enable(A.e(q.WebGL2RenderingContext.BLEND))
else p.disable(A.e(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bL))a.a.blendFunc(A.yx(a,b.e),A.yx(a,b.f))
if(r.q(0,B.bM))a.a.blendEquation(A.CT(a,b.r))
if(r.q(0,B.dG))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dH)){q=v.G.WebGL2RenderingContext
a.a.disable(A.e(q.SCISSOR_TEST))}s.a=b},
CU(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.e(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.e(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.e(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dA(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.CU(a,b))},
cl(a,b){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.j(A.k(u.k))
s=a.e
if(s==null)throw A.b(A.k("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.E(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.br(c.b))
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
A.aK(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.e(c.b))
break}},
bE(a,b){if(a.b!==B.h)A.j(A.k(u.k))
a.a.bindVertexArray(A.a(b.a))},
aE(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.k(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iU){p=s.d>1?A.e(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iT){o=s.b
if(o!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.k("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.k("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
CZ(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.e(p.ELEMENT_ARRAY_BUFFER),c,A.e(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
D_(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yA(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
r=A.E(s.createBuffer())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cD?A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.e(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.D_(a,b.b))
return new A.dE(r)},
yy(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yz(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
wm(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
r=A.E(s.createTexture())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.e(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.aK(s,"texStorage3D",[n,1,A.e(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aK(s,"texStorage2D",[n,1,A.e(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yy(a,b.e))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yy(a,b.f))
p=b.r
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yz(a,p))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yz(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.eU(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.j(A.ag(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dE(new A.iU(r,l,k,q,!1))},
wn(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.j(A.k(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.b(A.x("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.x("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.e(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aK(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aK(l,"texSubImage2D",[m,0,0,0,q,p,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
lc(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
yC(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.j(A.k(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.x("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.E(r.createFramebuffer())
if(q==null)throw A.b(A.k("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b1
if(n&&!a1.e)throw A.b(A.x("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cF||o===B.hv
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.e(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aK(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aK(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.E(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aK(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aK(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.E(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aK(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aK(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aK(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.E(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aK(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
A.aK(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.e(r.checkFramebufferStatus(A.e(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.e(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wo(a0,q,l,k,f,e,j,i)
throw A.b(A.k("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dE(new A.iT(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wo(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d5(a){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=A.E(a.a.createVertexArray())
if(s==null)throw A.b(A.k("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dE(s)},
yB(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.E(p.createShader(b))
if(o==null)throw A.b(A.kK(b===A.A2(A.zl(A.Ag(),r),q,t.S)?B.dB:B.dC,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ad(A.hf(p.getShaderParameter(o,A.e(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aB(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kK(b===A.A2(A.zl(A.Ag(),r),q,t.S)?B.dB:B.dC,s))}return o},
D0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.k(u.k))
q=v.G
s=A.yB(a,A.e(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yB(a,A.e(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.E(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lu)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ad(A.hf(o.getProgramParameter(n,A.e(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aB(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kK(B.dD,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.e(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kK(B.dE,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.E(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kK(B.dE,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dE(n)},
dE:function dE(a){this.a=a},
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
m_:function m_(a){this.a=a
this.b=!1},
lb:function lb(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rX:function rX(a){this.a=a},
rY:function rY(a){this.a=a},
tN:function tN(){},
lZ:function lZ(){},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mW(a,a0){var s=0,r=A.bL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mW=A.bN(function(a1,a2){if(a1===1)return A.bH(a2,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.m
n=A.n(t.N,o)
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
b=new A.jn(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aV,A.n(o,t.jS))
b.hQ(p,a0)
p=A.o(a).i("J<1,2>")
s=3
return A.ar(A.oa(A.kf(new A.J(a,p),p.i("bY<ap>(m.E)").a(new A.mX(b)),p.i("m.E"),t.ls),t.c),$async$mW)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.iR():n
c.buffer=p
q=b
s=1
break
case 1:return A.bI(q,r)}})
return A.bJ($async$mW,r)},
jn:function jn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mY:function mY(){},
mX:function mX(a){this.a=a},
n_:function n_(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b){this.a=a
this.b=b},
n0:function n0(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AZ(a,b,c,d,e,f,g){var s=new A.mN(c,f,b,g,new A.f(d.a,d.b,d.c),e,a)
s.hS(a,b,c,d,0,e,f,g)
return s},
AV(a,b){var s=new A.mv(b)
s.hP(a,b)
return s},
AY(a){var s,r,q,p,o,n=t.z
n=A.n(n,n)
for(s=new A.J(a,A.o(a).i("J<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.ao(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mJ(A.b5(n,r,t.a))
n.hR(a)
return n},
Fj(a,b){var s,r,q,p=b>>>0
for(s=new A.dQ(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.A4(p,q==null?r.a(q):q)}return p&2147483647},
jo:function jo(a,b){this.a=a
this.b=b},
mN:function mN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mO:function mO(){},
mv:function mv(a){this.a=a},
mw:function mw(){},
hm:function hm(){},
mx:function mx(){},
my:function my(){},
mJ:function mJ(a){this.a=a},
mL:function mL(){},
mM:function mM(){},
mK:function mK(){},
w1:function w1(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mV:function mV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mP:function mP(a,b,c){this.a=a
this.b=b
this.c=c},
mQ:function mQ(a){this.a=a},
mR:function mR(){},
ip:function ip(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function nj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
o2:function o2(a){this.a=a},
k3:function k3(a,b,c,d,e,f,g,h,i,j){var _=this
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
p4:function p4(a){this.a=a},
BQ(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.J(a,A.o(a).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ao(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.p3(n)},
p3:function p3(a){this.a=a},
p7:function p7(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pt:function pt(a,b,c){this.a=a
this.c=b
this.e=c},
pq:function pq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(){},
nI:function nI(){this.b=this.a=0},
pz:function pz(a){this.a=a
this.b=0
this.e=!1},
id(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bW(a)
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
d_:function d_(a){this.a=a
this.b=0},
ik(a,b,c){return new A.f(a,b,c)},
yv(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.f(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
f:function f(a,b,c){this.a=a
this.b=b
this.c=c},
D2(a,b,c,d){return new A.le(d,b,c,a)},
D4(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Av()
s=a.d
r=A.t0(s,0)
q=A.t0(s,1)
p=A.t0(s,2)
o=A.t0(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bF(m,0))n.l(0,"GamepadA")
if(A.bF(m,1))n.l(0,"GamepadB")
if(A.bF(m,2))n.l(0,"GamepadX")
if(A.bF(m,3))n.l(0,"GamepadY")
if(A.bF(m,4))n.l(0,"GamepadLB")
if(A.bF(m,5))n.l(0,"GamepadRB")
if(A.bF(m,6))n.l(0,"GamepadLT")
if(A.bF(m,7))n.l(0,"GamepadRT")
if(A.bF(m,8))n.l(0,"GamepadView")
if(A.bF(m,9))n.l(0,"GamepadMenu")
if(A.bF(m,10))n.l(0,"GamepadLStick")
if(A.bF(m,11))n.l(0,"GamepadRStick")
if(A.bF(m,12))n.l(0,h)
if(A.bF(m,13))n.l(0,g)
if(A.bF(m,14))n.l(0,f)
if(A.bF(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.f(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gau():i
return new A.le(m,p,o,A.eO(n,s))},
t0(a,b){return A.D3(b<a.length?a[b]:0)},
bF(a,b){return b<a.length&&a[b]>=0.5},
D3(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc7(a)?-s:s},
kQ:function kQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nc:function nc(a){this.a=a},
Bl(a,b,c){var s=new A.jJ(a,c,null,b)
s.hW(a,null,null,b,c)
return s},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
By(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bu(new A.G(B.jb,t.e2.a(new A.nV(a)),t.vL),t.yW)
return s==null?null:new A.fw(s)},
C5(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.wd(s,a,B.iM)
break
case 1:A.wd(s,a,B.iN)
break
case 2:A.wd(s,a,B.je)
break}return s},
wd(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Bx(a){if(a.a!==21)return null
if(a.e)return B.f1
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f2
return B.f0},
cc:function cc(a,b){this.a=a
this.b=b},
nS:function nS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fw:function fw(a){this.a=a},
nV:function nV(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
Cb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.ku(s,new A.f(o,n,m),q,p,l,j)
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
ku:function ku(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Fl(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.ff)
p.k(0,q,r.b)}return p},
m7(a){var s,r,q,p,o,n=a.ga1().bI(0)
B.a.X(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.zd(a.h(0,o)))}return A.b5(r,t.N,s)},
zd(a){var s
if(t.f.b(a))return A.m7(A.Fl(a))
if(t.j.b(a)){s=t.z
return A.ai(J.fe(a,A.Gb(),s),s)}if(a==null||A.bK(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fS)
return a}throw A.b(A.a3("presentation snapshot contains unsupported value "+J.fd(a).p(0),null,null))},
qb:function qb(a){this.a=a},
yi(a,b,c){var s=A.wD(b),r=A.wD(a)
if(c!==2)A.j(A.ag(c,"version","unsupported save version"))
return new A.fN(c,s,r)},
wD(a){var s,r,q,p,o=A.o(a).i("aa<1>"),n=A.I(new A.aa(a,o),o.i("m.E"))
B.a.X(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.zc(a.h(0,p)))}return A.b5(s,t.N,o)},
zc(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fJ)
s.k(0,p,q.b)}return A.wD(s)}if(t.j.b(a)){r=t.z
return A.ai(J.fe(a,A.Gf(),r),r)}if(a==null||A.bK(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fU)
return a}throw A.b(A.a3("save contains unsupported value "+J.fd(a).p(0),null,null))},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(){},
eN:function eN(a,b){this.a=a
this.b=b},
xM(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.od(a,b,c,d,e,f,g,s,r,h)},
xN(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aJ(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.b(B.fI)
r=c.h(0,"runSeed")
q=A.aJ(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aJ(p)||p<1||typeof o!="number")throw A.b(B.h2)
if(!isFinite(5760))throw A.b(A.ag(5760,"daySeconds","must be finite and > 0"))
n=new A.jT(p,7,5760)
if(!isFinite(o)||o<0||o>=24)A.j(A.a3("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.C_(a5,A.aM(a1,s,m))
k=A.Bi(l,A.aM(a0,s,m),n)
j=A.xP(b)
A.BP(A.aM(a2,s,m)).jX(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bK(f))A.j(B.fn)
e=A.C6(c.h(0,"narrative"))
if(e==null)e=A.pM(d,d,d)
return A.xM(b,q,j,n,l,k,new A.jH(i,h,g,f),e)},
Ed(a){var s
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
jS:function jS(){},
oe:function oe(a,b){this.a=a
this.b=b},
od:function od(a,b,c,d,e,f,g,h,i,j){var _=this
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
of:function of(a){this.a=a},
og:function og(){},
oh:function oh(){},
oi:function oi(a){this.a=a},
oj:function oj(){},
B0(a){var s,r,q,p,o,n,m="modelScale",l=A.mf(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.a4(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.b(B.fz)
s=A.em(l,"houseId")
r=A.em(l,"sourceRef")
q=J.fe(A.mc(l,"rooms"),new A.n2(k),t.bJ)
q=A.I(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.fe(A.mc(l,"portals"),new A.n3(k),t.lT)
p=A.I(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.fe(A.mc(l,"stairs"),new A.n4(),t.gI)
o=A.I(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.fe(A.mc(l,"exteriorCells"),new A.n5(),t.N)
n=A.I(n,n.$ti.i("a1.E"))
n.$flags=1
return new A.n1(s,r,q,p,o)},
B1(a,b){var s=A.mf(a,"room"),r=A.em(s,"id"),q=A.zM(s.h(0,"origin"),"origin",b),p=A.zM(s.h(0,"size"),"size",b),o=J.fe(A.mc(s,"windows"),new A.n7(b),t.ya)
o=A.I(o,o.$ti.i("a1.E"))
o.$flags=1
return new A.fg(r,q,p,o)},
mf(a,b){return t.P.b(a)?a:A.j5(b+" is not an object")},
mc(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.j5(b+" is not a list")},
em(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.j5(b+" is not a string")},
j9(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.j5(b+" is not finite")},
Fy(a,b){var s,r
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.v4())}else s=!0
if(s)return A.j5(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.R(a);r.m();)s.push(A.a4(r.gn()))
return s},
zM(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.Fy(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
j5(a){return A.j(A.a3(a,null,null))},
n1:function n1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
n2:function n2(a){this.a=a},
n3:function n3(a){this.a=a},
n4:function n4(){},
n5:function n5(){},
n6:function n6(a){this.a=a},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n7:function n7(a){this.a=a},
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
v4:function v4(){},
ju:function ju(a,b){this.a=a
this.b=b
this.d=null},
nn:function nn(a){this.a=a},
kh:function kh(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
lf:function lf(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oH:function oH(){this.b=0},
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
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nX:function nX(){},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
oJ:function oJ(){},
oI:function oI(a,b,c){this.a=a
this.b=b
this.c=c},
Go(a){var s,r,q,p,o,n,m,l
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
return new A.ch(B.ac,p,new Uint16Array(A.a0(a.b)),new A.jg(new A.K(s.a,s.b,s.c),new A.K(s.d,s.e,s.f)))},
Gn(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Fi(a,new A.vW(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jN(o,p.c,p.e))}return n},
Fi(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
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
throw A.b(A.x("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.F(d,0,B.b.bC(d,":")):null
l=new A.d6(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.I(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("av<2>")
q=A.I(new A.av(s,q),q.i("m.E"))
B.a.P(q,new A.uZ())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.t)(q),++c)r.push(q[c].mJ(a))
return r},
DW(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jM(r,q,p,o,n,m)},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(a){this.a=a},
uZ:function uZ(){},
d6:function d6(a,b,c,d){var _=this
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
ew:function ew(a,b){this.a=a
this.b=b},
jO:function jO(){},
FJ(a){var s,r,q,p=new A.oI(A.c([],t.Dl),A.c([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.Eg(p,a,B.cZ[s],15.75,15.75,12.044999999999998,0.63)
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
p.ad(r,new A.Z(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ad(r,q,new A.Z(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.Z(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.Z(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ad(q,new A.Z(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ad(q,r,new A.Z(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
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
A.F8(p,15.75,15.75,12.044999999999998,16.32)
A.DZ(p,15.75,15.75,16.32)
A.Ec(p,15.75,15.75,12.044999999999998)
A.Ek(p,a,15.75)
A.Fe(p,15.75,15.75)
A.DV(p,15.75)
return p.k8()},
Eg(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.x!==b7,p=B.m!==b7,o=B.l===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=b6.aA(k)
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
B.a.l(b4,new A.ec(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aJ(i),b=J.R(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aH(i)!==b7)continue
B:{if(!p||o){a0=g+a.af(i)
break B}if(!q||n){a0=e+a.af(i)
break B}a0=null}B.a.l(b4,new A.ec(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.m||b7===B.l?b8:b9
r=t.i
a1=A.aN([0,s],r)
a2=A.aN([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.I(a1,a1.$ti.c)
B.a.X(a4)
a5=A.I(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.uF(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Ej(b5,b4,b7,b8,b9,c1)
A.Eh(b5,b4,b7,b8,b9,c1)
A.Ei(b5,b4,b7,b8,b9,c0,c1)},
Ei(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aN([0,a4===B.m||a4===B.l?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.t)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.I(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.uE(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
Eh(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.t)(a4),++g){f=a4[g]
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
Ej(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.t)(a3),++h){g=a3[h]
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
break}if(!f)A.Fc(a2,g,a4,a5,a6,a7,q)}},
Fc(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
F8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.F9(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
F9(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
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
DZ(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
Ec(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Ek(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.af("hall")
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
Fe(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
DV(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uF:function uF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uE:function uE(a,b,c){this.a=a
this.b=b
this.c=c},
Gd(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xf(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dT(B.f6,k.a,s)}r=A.Ae(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dT(B.f7,r.a,s)}if(A.Af(b,d,c)!=null)return B.fb
q=A.Gc(a,b,c,d)
if(q!=null)return new A.dT(B.cl,q.a,"inspect the "+q.b)
p=A.Ad(b,c,d,e)
if(p!=null){o=e.cC(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dT(B.f9,l,m?"inspect the "+o.b:"inspect "+n)}return B.fc},
Ad(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.ml(a5,s,4.5)
for(q=a6.lZ(a4),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cC(i.c)
g=i.f.a
f=i.h_(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.f(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gau()
a0=a3.b
a1=Math.acos(B.c.D(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mm(a5,a4,a3.a,new A.f(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Gc(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hb(c)
if(s.length===0)return f
r=d.aA(e)
q=A.ml(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.t)(s),++l){k=s[l]
j=b.a
i=new A.f(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gau()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mm(d,c,b.a,new A.f(n,m,o)))return k}return f},
dg:function dg(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
FK(a,b){var s,r=new A.d_(new Float32Array(5376)),q=new A.d_(new Float32Array(5376)),p=new A.d_(new Float32Array(5376)),o=new A.d_(new Float32Array(5376)),n=b.d,m=a.aA(b),l=A.k1(b.y),k=A.k1(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cK(new A.f(j,i,h),new A.f(j,i,f),new A.f(d,i,f),new A.f(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cK(new A.f(j,i,h),new A.f(d,i,h),new A.f(d,i,f),new A.f(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.DO(p,a,b,m,B.cZ[s])
for(j=a.aJ(b.a),i=J.R(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.z1(o,b,m,h,!0)}j=B.t.aR(r.a,0,r.b)
i=B.t.aR(q.a,0,q.b)
h=B.t.aR(p.a,0,p.b)
B.t.aR(o.a,0,o.b)
return new A.qw(j,i,h)},
FH(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d_(new Float32Array(5376))
r=a.aA(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.z2(s,b,r,c,q)
return B.t.aR(s.a,0,s.b)},
FI(a,b){var s,r,q,p=new A.d_(new Float32Array(5376)),o=a.aA(b)
for(s=a.aJ(b.a),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.z1(p,b,o,q,!1)}return B.t.aR(p.a,0,p.b)},
DO(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.m||a4===B.l?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aJ(s),q=J.R(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
if(!p.as&&p.aH(s)===a4)a.push(new A.eb(p.af(s),p.af(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eb(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aN([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.I(0,A.c([m.a,m.b],p))}l=A.I(r,r.$ti.c)
B.a.X(l)
s=A.aN([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.I(0,A.c([m.c,m.d],p))}k=A.I(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.tR(f,e,d,c)))continue
A.Fz(a0,a2,a3,a4,f,e,d,c)}A.DP(a0,a2,a3,a4,b,a)},
DP(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tP(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tP(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tP(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tP(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
for(r=b5.length,l=0;l<b5.length;b5.length===r||(0,A.t)(b5),++l){k=b5[l]
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
A.aS(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.D(a9),o=r.i("l(1)").a(new A.tQ(b3)),a9=B.a.gu(a9),r=new A.S(a9,o,r.i("S<1>")),o=b2.c,i=b3!==B.m,e=b3===B.l,c=b2.a;r.m();){b=a9.gn()
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
A.DQ(b0,b1,b2,b3,b,p)}},
DQ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
tP(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.Fo(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aS(a,b,c,d,n,o,g,h,i,j)}},
Fo(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.c([new A.fZ(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.c([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.t)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fZ(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fZ(n,j))}h=p}return h},
aS(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.an(a,new A.f(r+e,q+g,p),new A.f(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.an(a,new A.f(r+e,q+g,s-i),new A.f(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.an(a,new A.f(s-i,q+g,p+e),new A.f(s,q+h,p+f),j)
return
case 3:A.an(a,new A.f(r,q+g,p+e),new A.f(r+i,q+h,p+f),j)
return}},
an(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.f(o,n,m),k=c.a,j=new A.f(k,n,m),i=c.b,h=new A.f(k,i,m),g=new A.f(o,i,m)
m=c.c
s=new A.f(o,n,m)
r=new A.f(k,n,m)
q=new A.f(k,i,m)
p=new A.f(o,i,m)
a.aB(j,l,g,h,d)
a.aB(s,r,q,p,d)
a.aB(l,s,p,g,d)
a.aB(r,j,h,q,d)
a.aB(l,j,r,s,d)
a.aB(g,p,q,h,d)},
Fz(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.f(i+e,h+a0,g)
break
case 2:s=new A.f(i+f,h+a0,g+c.c)
break
case 1:s=new A.f(i+c.a,h+a1,g+f)
break
case 3:s=new A.f(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.f(i+f,h+a0,g)
break
case 2:r=new A.f(i+e,h+a0,g+c.c)
break
case 1:r=new A.f(i+c.a,h+a1,g+e)
break
case 3:r=new A.f(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.f(i+f,h+a1,g)
break
case 2:q=new A.f(i+e,h+a1,g+c.c)
break
case 1:q=new A.f(i+c.a,h+a0,g+e)
break
case 3:q=new A.f(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.f(i+e,h+a1,g)
break
case 2:p=new A.f(i+f,h+a1,g+c.c)
break
case 1:p=new A.f(i+c.a,h+a0,g+f)
break
case 3:p=new A.f(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.f(0,0,0.003)
break
case 2:o=new A.f(0,0,-0.003)
break
case 1:o=new A.f(-0.003,0,0)
break
case 3:o=new A.f(0.003,0,0)
break
default:o=k}n=b.x
m=A.k1(n).e
a.cK(s.ah(0,o),r.ah(0,o),q.ah(0,o),p.ah(0,o),A.k1(n).c,(f-e)/m,(a1-a0)/m)
l=A.FA(b,d)
switch(j){case 0:o=new A.f(s.a,s.b,s.c-l)
break
case 2:o=new A.f(r.a,s.b,s.c)
break
case 1:o=new A.f(s.a,s.b,p.c)
break
case 3:o=new A.f(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.f(r.a,q.b,s.c)
break
case 2:j=new A.f(s.a,q.b,s.c+l)
break
case 1:j=new A.f(s.a+l,q.b,r.c)
break
case 3:j=new A.f(p.a,q.b,r.c)
break
default:j=k}A.an(a,o,j,A.Ff(A.k1(n).c,0.68))},
Ff(a,b){var s,r=new A.uX(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hu()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hu()
r=r.$1(a&255)
if(typeof r!=="number")return A.ve(r)
return(q<<16|s<<8|r)>>>0},
FA(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
z1(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aH(d),b=a3.af(d),a=b+a3.w
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
A.an(a0,new A.f(r+l,s,d),new A.f(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.f(l,s,d),new A.f(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.an(a0,new A.f(r+n,s+m,d),new A.f(r+h,j,i),q)
A.an(a0,new A.f(k,s,d),new A.f(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.an(a0,new A.f(r+l,s,k),new A.f(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.f(l,s,k),new A.f(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.an(a0,new A.f(r+n,s+m,k),new A.f(r+h,i,d),q)
A.an(a0,new A.f(j,s,k),new A.f(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.an(a0,new A.f(n,s,d+k),new A.f(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.f(n,s,k),new A.f(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.an(a0,new A.f(n,s+e,d+m),new A.f(r,j,d+l),q)
A.an(a0,new A.f(n,s,i),new A.f(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.an(a0,new A.f(r,s,d+l),new A.f(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.f(r,s,l),new A.f(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.an(a0,new A.f(r,s+e,d+n),new A.f(k,j,d+m),q)
A.an(a0,new A.f(r,s,i),new A.f(k,s+0.05,l),q)
break}if(a4)A.z2(a0,a1,a2,a3,q)
A.DN(a0,a1,a2,a3)},
DN(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.af(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aH(d)
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
z2(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aH(o),m=d.af(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.an(a,new A.f(p,s,o),new A.f(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.an(a,new A.f(p,s,o-d.w),new A.f(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.an(a,new A.f(p-d.w,s,o),new A.f(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.an(a,new A.f(p,s,o),new A.f(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.an(a,new A.f(p,s,o),new A.f(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.an(a,new A.f(p,s,o-0.055),new A.f(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.an(a,new A.f(p-0.055,s,o),new A.f(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.an(a,new A.f(p,s,o),new A.f(p+0.055,s+r,o+d.w),e)
break}},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
tR:function tR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tQ:function tQ(a){this.a=a},
uX:function uX(a){this.a=a},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a,b){this.a=a
this.b=b},
xP(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.c([],b5),b7=t.qP,b8=A.c([],b7),b9=A.c([],t.DZ),c0=t.N
c0=new A.oF(b6,b8,b9,A.n(c0,t.U),A.n(c0,t.T),new A.oH())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.I(b6,A.c([new A.aZ(n,B.ax,new A.f(4.5,3.9,4),new A.f(0,0,0),A.c([new A.bb("living-north-west",B.m,0.5,0.9,1.2,1.8,!1,!0),new A.bb("living-north-east",B.m,2.7,0.9,1.2,1.8,!1,!0)],s),A.c(["hall-living","kitchen-living"],r),A.c([new A.bh(m,l,new A.f(1,1.95,1),!1,!1,m),new A.bh(k,j,new A.f(3,1.95,3),!1,!1,k)],q),B.bf,"wallpaper-stripes",i,h,B.M),new A.aZ(g,B.ax,new A.f(2.5,3.9,7),new A.f(4.5,0,0),A.c([new A.bb("hall-fanlight",B.m,0.85,3.225,0.8,0.525,!1,!0)],s),A.c(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.c([new A.bh("mantle-hall","the hall mantle",new A.f(1,1.95,3.5),!1,!1,o)],q),A.c([new A.bj(e,e,new A.f(0.2,2.175,0.35)),new A.bj(d,d,new A.f(2.2,2.55,3)),new A.bj(c,c,new A.f(0.4,1.35,4.1)),new A.bj(b,b,new A.f(0.92,0.82,5.55))],p),a,i,h,B.M),new A.aZ(a0,B.ax,new A.f(4.5,3.75,3),new A.f(0,0,4),A.c([new A.bb("kitchen-south",B.l,1.5,1.05,1.2,1.65,!1,!0),new A.bb("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.c(["hall-kitchen","kitchen-living"],r),A.c([new A.bh(a1,"the mantle by the stove",new A.f(0.8,1.8,0.5),!1,!1,a1),new A.bh("mantle-kitchen-second",l,new A.f(2.2,1.8,2),!1,!1,o),new A.bh("mantle-kitchen-third",j,new A.f(3.8,1.8,1.2),!1,!1,o)],q),A.c([new A.bj(a2,a2,new A.f(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.j7),new A.aZ("cellar",B.ax,new A.f(4,3,4),new A.f(1,-3,2),B.bg,A.c(["hall-cellar"],r),B.iS,B.bf,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.aZ("bedroom",B.ay,new A.f(4.5,3.6,4),new A.f(0,4.2,0),A.c([new A.bb("bedroom-north-west",B.m,0.7,1.05,1.1,1.65,!1,!0),new A.bb("bedroom-north-east",B.m,2.7,1.05,1,1.65,!1,!0)],s),A.c(["landing-bedroom"],r),A.c([new A.bh(a3,"the bedroom mantle",new A.f(1,1.95,1),!1,!1,a3),new A.bh("mantle-bedroom-bedside","the bedside mantle",new A.f(3.5,1.5,3),!1,!1,o)],q),A.c([new A.bj(a4,a4,new A.f(2.2,1.125,2.5)),new A.bj(a5,a5,new A.f(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.aZ(a6,B.ay,new A.f(2.5,3.6,3),new A.f(4.5,4.2,0),B.bg,A.c(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.c([new A.bh("mantle-landing","the landing mantle",new A.f(1,1.8,1.5),!1,!1,o)],q),B.bf,a,i,h,B.M),new A.aZ(a8,B.ay,new A.f(2.5,3.6,2.5),new A.f(4.5,4.2,3),A.c([new A.bb("bathroom-east",B.x,0.9,1.5,0.7,1.5,!0,!0)],s),A.c([a7],r),A.c([new A.bh("mantle-bathroom","the bathroom mantle",new A.f(1.5,1.8,1),!1,!1,o)],q),A.c([new A.bj(a9,a9,new A.f(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.aZ(b0,B.ay,new A.f(4.5,3.15,3),new A.f(0,4.2,4),A.c([new A.bb("spare-south",B.l,1.8,1.05,0.9,1.35,!1,!0)],s),A.c(["landing-spare"],r),A.c([new A.bh("mantle-spare","the broken mantle",new A.f(2,1.95,1),!1,!0,o)],q),A.c([new A.bj(b1,b1,new A.f(0.5,1.8,0.3)),new A.bj(b2,b2,new A.f(3.7,2.1,2.7)),new A.bj(b3,b3,new A.f(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.I(b8,A.c([A.e2(g,"outside","kit-front-door-recessed",!0,B.m,B.l,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.e2(g,n,b4,!1,B.G,B.x,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.e2(g,a0,b4,!1,B.G,B.x,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.e2(a0,n,b4,!1,B.m,B.l,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.e2(g,"cellar","kit-cellar-door-grille",!1,B.l,B.x,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.e2(g,a6,o,!1,B.x,B.x,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.e2(a6,"bedroom",b4,!1,B.G,B.x,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.e2(a6,a8,b4,!1,B.l,B.m,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.e2(a6,b0,b4,!1,B.l,B.m,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dw("hall-stairs",f,B.iG,new A.f(5,0,2.8),new A.f(6.5,6.3,6),new A.f(5.75,2.475,5.8),new A.f(5.75,6.675,2.2)))
c0.ib()
c0.ic()
c0.iQ()
b5=b6.length
if(b5!==8)A.j(A.k("expected eight rooms, got "+b5))
b5=c0.gmI()
if(b5!==9)A.j(A.k("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaQ(b9).c.length!==3||B.a.gV(B.a.gaQ(b9).c)!==9.45)A.j(A.k("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.j(A.k("expected nine physical portals"))
c0.jL()
c0.jJ()
return c0},
oF:function oF(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oX:function oX(a){this.a=a},
oY:function oY(){},
oZ:function oZ(){},
oW:function oW(){},
p_:function p_(a){this.a=a},
p0:function p0(){},
ml(a,b,c){var s=a.aA(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mm(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.EI(a,s,c,d)},
EI(a,b,c,d){var s,r,q,p,o=a.aA(b),n=d.ao(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tW(a,b,o,B.m,r,q,p,c,n,m))return!0
if(A.tW(a,b,o,B.l,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tW(a,b,o,B.G,s,r,q,c,n,m))return!0
if(A.tW(a,b,o,B.x,s+o.a,r,q,c,n,m))return!0
return!1},
tW(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.ah(0,a6.an(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.m||a1===B.l
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aJ(m),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aH(m)===a1){g=q.af(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
xf(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.ml(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.t)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.f(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gau()
f=a.b
if(Math.acos(B.c.D(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mm(a0,a1,a.a,new A.f(h,g,i)))continue
m=d
l=j}}return l},
Ae(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.ml(b,j,4.5):4.5
for(s=b.aJ(c),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.m1(c,o)
m=a.a
l=new A.f(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zq(l,k,a,i,0.5236)||k>=q)continue
if(!A.mm(b,c,a.a,n))continue
q=k
p=o}return p},
Af(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.ml(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
l=A.FB(b,h,m)
k=a.a
j=new A.f(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zq(j,i,a,s,0.5236)||i>=p)continue
if(!A.mm(b,c,a.a,l))continue
p=i
o=m}return o},
zq(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gau().c0(c.b),-1,1))<=e},
FB(a,b,c){var s=a.aA(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.f(q.a+r,p,q.c)
break
case 2:q=new A.f(q.a+r,p,q.c+s.c)
break
case 1:q=new A.f(q.a+s.a,p,q.c+r)
break
case 3:q=new A.f(q.a,p,q.c+r)
break
default:q=null}return q},
nW:function nW(){this.a=null
this.b=0},
rj:function rj(){},
rk:function rk(){},
BU(a){var s=A.ja(a,"inventory asset"),r=A.dI(s,"id"),q=A.dI(s,"kind")
A.dI(s,"source")
A.dI(s,"proxy")
A.dI(s,"pivot")
s=A.ja(s.h(0,"bounds"),"inventory bounds")
return new A.cV(r,q,new A.p8(A.mk(s.h(0,"min"),"bounds.min"),A.mk(s.h(0,"max"),"bounds.max")))},
BV(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.ja(a,"inventory placement"),i=A.ja(j.h(0,"visibility"),"placement visibility"),h=A.ja(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dI(j,"id"),e=A.dI(j,"roomId"),d=A.dI(j,"assetId")
A.dI(j,"role")
s=typeof j.h(0,"socket")=="string"?A.q(j.h(0,"socket")):null
j=A.ja(j.h(0,"transform"),"inventory transform")
r=A.mk(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.fM)
q=A.mk(j.h(0,"position"),"transform.position")
p=A.mk(j.h(0,"rotation"),"transform.rotation")
o=A.dI(i,"layer")
if(typeof i.h(0,k)=="string")A.q(i.h(0,k))
n=J.ad(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.q(h.h(0,"focusId")):null
l=t.P.b(g)?A.EX(g,"radius"):0
return new A.cx(f,e,d,s,new A.pa(q,p,r),o,n,m,l)},
ja(a,b){return t.P.b(a)?a:A.dF(b+" is not an object")},
dI(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dF(b+" is not a string")},
EX(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dF(b+" is not finite")},
mk(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.v3())}else s=!0
if(s)return A.dF(b+" is not a finite vec3")
s=J.aC(a)
return new A.f(A.a4(s.h(a,0)),A.a4(s.h(a,1)),A.a4(s.h(a,2)))},
dF(a){return A.j(A.a3(a,null,null))},
oK:function oK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oN:function oN(a){this.a=a},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.f=c},
cx:function cx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
pa:function pa(a,b,c){this.a=a
this.b=b
this.c=c},
p8:function p8(a,b){this.a=a
this.b=b},
v3:function v3(){},
p9:function p9(a){this.a=a},
dq:function dq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oO:function oO(a){this.a=a},
oP:function oP(a){this.a=a},
e2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.by(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hB:function hB(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
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
by:function by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
de:function de(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
BO(a){return A.BN(a)},
BN(a){var s,r,q,p,o,n,m=A.zx(a,"sound emitter"),l=t.N,k=A.n(l,l)
for(s=A.zx(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fH)
k.k(0,r.a,q)}s=A.x2(m,"id")
r=A.x2(m,"roomId")
p=A.x2(m,"placementId")
o=A.Fx(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h6("gain is not a number")
return new A.cU(s,r,p,o,n,A.b5(k,l,l))},
zx(a,b){return t.P.b(a)?a:A.h6(b+" is not an object")},
x2(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h6(b+" is not a string")},
Fx(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.v2())}else s=!0
if(s)throw A.b(A.a3(b+" must be a numeric vec3",null,null))
s=J.aC(a)
return new A.f(A.a4(s.h(a,0)),A.a4(s.h(a,1)),A.a4(s.h(a,2)))},
h6(a){return A.j(A.a3(a,null,null))},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(a){this.a=a},
oT:function oT(a){this.a=a},
oU:function oU(){},
cU:function cU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oG:function oG(){this.b=this.a=null},
eC:function eC(a){this.a=a},
oQ:function oQ(){this.b=this.a=null},
cT:function cT(a,b){this.a=a
this.b=b},
v2:function v2(){},
xQ(a,b,c,d,e,f){var s=t.N
return new A.oV(e,f,c,a,A.b5(A.aM(d,s,s),s,s),A.ai(b,s))},
xR(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.i0(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.hQ(j.d,j.r))}return A.xQ(a.r.b,B.o,i,B.d6,h,s)},
BP(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.ju
r=a3.h(0,"mantleHistory")
if(r==null)r=B.iR
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aJ(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fF)
p=t.N
o=A.n(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.co)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bK(j)||!A.bK(i))A.j(B.co)
o.k(0,k,new A.i0(j,i))}h=A.n(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bK(l.b))throw A.b(B.fC)
h.k(0,k,A.Q(l.b))}g=A.n(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cm)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bK(f)||!A.bK(e))A.j(B.cm)
g.k(0,k,new A.hQ(f,e))}d=A.n(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.hb)
d.k(0,n,A.q(p.b))}c=A.c([],t.s)
for(q=J.R(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fd)
B.a.l(c,b)}return A.xQ(a2,c,g,d,o,h)},
wY(a,b){return a.a.a===b.a&&a.a7(0,b.gap(b))},
oV:function oV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
k1(a){var s=B.bo.h(0,a)
if(s==null)throw A.b(A.k("Unknown house surface material: "+a))
return s},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bv(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hP(e,A.D(e).c)
q=new A.ed()
q.bM((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hw(a,q,2,r,1+s,A.aN(["time"],t.N))
break
case 3:A.hw(a,q,3,r,1+s,A.aN(["place"],t.N))
break
case 4:A.hw(a,q,4,r,2+s,p)
A.Br(a,q,4)
break
case 5:A.hw(a,q,5,r,s,p)
A.Bp(a,q,5)
break
case 6:A.hw(a,q,6,r,s,p)
A.Bq(a,q)
A.Bu(a,q,6)
break
case 7:A.Bs(a,q,7)
break
default:if(s>0)A.hw(a,q,b,r,s,p)}},
Bo(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Bt(a,b,c))return!1
return!0},
hw(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.o(s).i("ah<2>"));s.m();){r=s.d
if(A.Bo(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cU(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.xJ(a,b,o[p],f)}},
xJ(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gV(o).a,n,n)
if(d==null)s=A.c(B.B.slice(0),t.s)
else{n=t.vY
s=A.I(new A.G(B.B,t.Ag.a(new A.nR(d)),n),n.i("m.E"))}n=s.length
if(n===0)return
n=b.aN(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eb(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aN(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dt(c.a,m,B.a.gV(o).b)},
Br(a,b,c){var s=A.xK(a,b,c)
if(!a.bW(s))return
a.el(c,t.G.a(s),0,B.b5,null)},
xK(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.B[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aN(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
Bp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.o(s).i("ah<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cU(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aM(B.a.gV(i).a,s,s)
r=p.c
n=A.aM(B.a.gV(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.B[m]
k=o.h(0,l)
j=s.eb(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aN(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dt(q.a,o,B.a.gV(i).b)
a.dt(p.a,n,B.a.gV(r).b)},
Bq(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.ah(s,s.r,s.e,A.o(s).i("ah<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aN(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a5(0,q[r].a)},
Bu(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.o(s).i("ah<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aN(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.xJ(a,b,q[s],null)},
Bs(a,b,c){var s=c+1,r=A.xK(a,b,s)
if(!a.bW(r))return
a.el(s,t.G.a(r),0,B.b5,null)},
Bt(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gV(b.c).c===B.aB}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gV(b.c).c===B.aB}if(c===21)return b.e
return!1},
nR:function nR(a){this.a=a},
CR(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p=A.ao(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rV(n)},
pu(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kd(A.b5(p,q,q),b,c)},
y2(a){var s=t.N
return A.pu(t.P.a(a.h(0,"fields")).bE(0,new A.pv(),s,s),A.a4(a.h(0,"shakiness")),A.BA(B.iK,A.q(a.h(0,"hand")),t.qX))},
Bz(a){var s,r,q,p,o=a.h(0,"margin"),n=A.e(a.h(0,"ordinal")),m=A.e(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.R(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.y2(r.a(s.gn())))
s=A.aB(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.za(a.h(0,"lastReadDay"))
return new A.bX(n,m,l,s,q,p,o==null?null:A.y2(r.a(o)))},
dV:function dV(a,b){this.a=a
this.b=b},
rV:function rV(a){this.a=a},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(){},
pw:function pw(a){this.a=a},
bX:function bX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y_(a){return new A.pd(a,A.n(t.S,t.g),A.a_(t.N),A.c([],t.t))},
C_(a,b){var s,r,q,p,o=A.y_(a)
o.e=A.e(b.h(0,"nextOrdinal"))
o.f=A.e(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.AN(s.a(b.h(0,"tags")),t.N))
for(s=J.R(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Bz(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pd:function pd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pk:function pk(a,b){this.a=a
this.b=b},
n8:function n8(){},
hn:function hn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g},
n9:function n9(){},
pp:function pp(){},
po:function po(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
q7:function q7(){},
q6:function q6(a,b,c){this.b=a
this.c=b
this.d=c},
q8:function q8(){},
Ca(a,b,c){return B.kr},
ks:function ks(a,b){this.a=a
this.b=b},
q9:function q9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qa:function qa(){},
kc:function kc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qg:function qg(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yg(a){if(!isFinite(0))A.j(A.ag(0,"interpolation",null))
return new A.qt(a)},
kF:function kF(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
qt:function qt(a){this.a=a},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
yf(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hP(c,A.D(c).c)
r=A.I(r,A.o(r).c)
B.a.X(r)
s=t.N
r=A.ai(r,s)
r=new A.qs(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.b5(l,s,t.X))
r.i0(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Cu(a,b,c,d,e){var s=A.ma("RENDERER_SHA"),r=A.ma("GAME_SHA"),q=A.ma("DART_SDK_VERSION")
return A.yf(a,"a47f81fed96b-f8ff05f01916-dirty",b,!1,d,r,A.ma("LOCKFILE_SHA256"),e,A.ma("PROJECT_VERSION"),s,q,null)},
ma(a){var s=B.jm.h(0,a)
return s.length===0?null:s},
qs:function qs(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qu:function qu(a){var _=this
_.a=a
_.d=_.c=_.b=0},
re:function re(a){this.a=a},
a7(a,b,c,d,e,f,g,h,i,j){return new A.e5(e,g,a,f,i,h,j,c,c,b)},
cF:function cF(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c,d,e,f,g,h,i,j){var _=this
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
rf:function rf(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
ri:function ri(a){this.a=a},
rh:function rh(a){this.a=a},
rg:function rg(a){this.a=a},
xG(a,b,c,d,e,f,g){var s=A.I(f,t.ho)
if(b<0||a<0||e<0)A.j(A.a3("saved day-loop resources must not be negative",null,null))
return new A.nJ(c,g,b,a,e,d===!0,s)},
Bi(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.ft)
s=A.c([],t.El)
for(r=J.R(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fG)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aJ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fp)
f=A.bu(new A.G(B.cS,q.a(new A.nK(h)),p),o)
e=A.bu(new A.G(B.cY,n.a(new A.nL(g)),m),l)
if(f==null||e==null)throw A.b(B.h6)
B.a.l(s,new A.fP(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aJ(d)||!A.aJ(c)||!A.aJ(b)||!A.bK(a))throw A.b(B.fO)
return A.xG(c,d,a1,a,b,s,a3)},
bS:function bS(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
nJ:function nJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nK:function nK(a){this.a=a},
nL:function nL(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
t_:function t_(a,b){this.b=a
this.c=b},
eV:function eV(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
p1:function p1(a){this.c=a},
p5:function p5(a,b){this.a=a
this.b=b},
p6:function p6(){},
wK(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.h3)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qx:function qx(){},
cY:function cY(){},
qy:function qy(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
Ep(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uG(s).$0())
return r},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rW:function rW(a){this.b=a},
uG:function uG(a){this.a=a},
pM(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.I(0,a)
s=A.n(r,r)
if(b!=null)s.I(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.I(0,c)
return new A.pL(q,s,r)},
C6(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aJ(s)||s!==1)return l
r=A.y8(a.h(0,"choices"))
q=A.y8(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.BF(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pM(r,q,p)},
y8(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.q(q.b))}return r},
BF(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aJ(r)||r<1||!A.aJ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cO(s,r,q,p)},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(){},
pO:function pO(){},
pP:function pP(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q4:function q4(a){this.a=a},
q5:function q5(a){this.a=a},
fR(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
ro:function ro(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rp:function rp(){},
rq:function rq(){},
eT:function eT(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a,b){this.a=a
this.b=b},
la:function la(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rr:function rr(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
rs:function rs(){},
rt:function rt(){},
jh:function jh(a){this.a=a},
w0:function w0(a,b,c){this.b=a
this.e=b
this.f=c},
AU(a){var s,r,q,p
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fg)
s=new A.mu()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wz(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dJ(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aW(B.bk,new A.ms(a),new A.mt()))},
cM:function cM(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mu:function mu(){},
ms:function ms(a){this.a=a},
mt:function mt(){},
mF:function mF(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mH:function mH(a){this.a=a},
mG:function mG(a,b){this.a=a
this.b=b},
B_(a){var s
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fL)
s=new A.mS()
return new A.dK(s.$1$2(B.bi,a.h(0,"output"),t.xs),s.$1$2(B.bc,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bb,a.h(0,"reverb"),t.gc),s.$1$2(B.b9,a.h(0,"ducking"),t.ul))},
cu:function cu(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mS:function mS(){},
mT:function mT(a,b){this.a=a
this.b=b},
mU:function mU(a){this.a=a},
nb:function nb(a){this.a=a
this.b=null},
nf(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.ag(c,"level","must be between 1 and 6"))
s=A.A(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nd(s,b)
return s},
dO(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.A(a,"button","brush-button brush-state-"+s.b,r)
A.nd(q,b)
q.type="button"
q.disabled=s===B.as
q.addEventListener("click",A.W(new A.ne(c)))
return q},
B5(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.as
A.nd(s,b)
s.addEventListener("change",A.W(new A.ni(d,s)))
return s},
B4(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.w(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.as
A.nd(s,b)
s.addEventListener("input",A.W(new A.nh(s,e)))
return s},
w2(a,b){var s=B.b.hJ(A.q(a.className),A.ye("\\s+")),r=A.D(s),q=r.i("G<1>"),p=A.I(new A.G(s,r.i("l(1)").a(new A.ng()),q),q.i("m.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.Y(p," ")
a.setAttribute("data-brush-state",s)},
nd(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gjP())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.as)a.setAttribute("aria-disabled","true")},
ne:function ne(a){this.a=a},
ni:function ni(a,b){this.a=a
this.b=b},
nh:function nh(a,b){this.a=a
this.b=b},
ng:function ng(){},
dM:function dM(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nk:function nk(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
nl:function nl(a){this.a=a},
xE(a){var s=!1
if(a.length!==0)if(!B.dA.q(0,a))s=B.lh.q(0,a)||B.l9.q(0,a)||B.lg.q(0,a)||!B.b.T(a,"Mouse")
return s},
E8(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.J(a,A.o(a).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ao(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
EO(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.J(a,A.o(a).i("J<1,2>"))
p=J.R(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fs(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fD(B.jj,s,r)
if(b!=null)q.I(0,b)
q.I(0,A.EO(a))
s=new A.fr(g,d,h,e,f,c,A.b5(A.E8(q),s,r))
s.C()
return s},
Bf(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cn)
s=a.h(0,"version")
r=J.en(s)
if(!r.a4(s,1)&&!r.a4(s,2))throw A.b(B.cn)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fB)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.AO(m,new A.ny())){o=A.c([],r)
for(l=J.R(m);l.m();)o.push(A.q(l.gn()))
q.k(0,n,o)}else throw A.b(B.fk)}j=A.a4(a.h(0,"horizontalSensitivity"))
r=A.a4(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fs(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
wB(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.I(r.b,p)
o.k(0,q,r)}return o},
wU(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
x6(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fr:function fr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nA:function nA(){},
nz:function nz(a){this.a=a},
nB:function nB(){},
nC:function nC(){},
nD:function nD(){},
ny:function ny(){},
dL:function dL(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.c=b},
jA:function jA(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Be(a){var s=t.N,r=t.m
r=new A.ht(A.fs(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.hU(a)
return r},
ht:function ht(a,b,c,d,e,f){var _=this
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
nw:function nw(a,b){this.a=a
this.b=b},
nx:function nx(a){this.a=a},
nv:function nv(a,b){this.a=a
this.b=b},
nt:function nt(a,b){this.a=a
this.b=b},
nu:function nu(a,b){this.a=a
this.b=b},
Bg(a){var s=new A.nE(a,A.a(a.createElement("div")))
s.aS(a)
s.hV(a)
return s},
nE:function nE(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nF:function nF(a){this.a=a},
Bm(a){var s=new A.nN(A.A(a,"div","door",null))
s.hX(a)
return s},
xH(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.Y(s,"; ")+"."},
nN:function nN(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nO:function nO(a){this.a=a},
nP:function nP(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b){this.a=a
this.b=b},
Bw(a){var s=new A.nT(a,A.a(a.createElement("div")))
s.aS(a)
s.hY(a)
return s},
nT:function nT(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nU:function nU(a){this.a=a},
ok:function ok(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
ol:function ol(){},
BI(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.om(a.b===B.cv,a.c===B.cz,s,a.e===B.cw,a.f===B.ct,a.r===B.cB,a.w,a.x)},
om:function om(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
w3(a,b,c,d,e,f,g,h,i,j){return new A.fy(e,g,j,f,b,h,d,c,a,i)},
BJ(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat"
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fT)
s=new A.on(a)
r=a.h(0,"contextualReminders")
if(!A.bK(r))throw A.b(B.h4)
q=!A.bK(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bj,t.bK)
o=s.$1$2("promptDensity",B.bn,t.dn)
n=s.$1$2("textPacing",B.bl,t.j_)
m=s.$1$2("journalLayout",B.bd,t.gm)
l=s.$1$2("confirmations",B.b7,t.aJ)
k=s.$1$2("saveFeedback",B.be,t.mx)
j=s.$1$2("focusLossBehavior",B.aD,t.x)
return A.w3(typeof a.h(0,h)=="string"?s.$1$2(h,B.ba,t.vS):B.b_,l,r,j,p,m,o,k,q,n)},
dj:function dj(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c,d,e,f,g,h,i,j){var _=this
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
on:function on(a){this.a=a},
oo:function oo(a,b){this.a=a
this.b=b},
op:function op(a){this.a=a},
xO(a){var s
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fK)
s=new A.dU(1,B.a.aW(B.cT,new A.oz(a),new A.oA()),A.q(a.h(0,"renderScale")),A.Q(a.h(0,"dynamicResolution")),A.q(a.h(0,"frameTarget")),A.q(a.h(0,"antialiasing")),A.q(a.h(0,"textureQuality")))
s.C()
return s},
fA(a,b){var s=b==null?B.b4:b
return new A.oB(s,a==null?B.b4:a)},
A9(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dr(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dr("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.ft(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cK&&b.a<2){q=q.fu(B.b3)
B.a.l(s,"High preset was reduced to Standard")}return new A.ou(q,A.ai(s,t.N))},
cv:function cv(a,b){this.a=a
this.b=b},
dU:function dU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oz:function oz(a){this.a=a},
oA:function oA(){},
oB:function oB(a,b){this.a=a
this.b=b},
ot:function ot(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
BL(a){var s=new A.hF(A.n(t.N,t.m),B.b4,a,A.a(a.createElement("div")))
s.aS(a)
s.hZ(a)
return s},
hF:function hF(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
ox:function ox(a){this.a=a},
oy:function oy(a){this.a=a},
ow:function ow(a,b,c){this.a=a
this.b=b
this.c=c},
ov:function ov(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
oC:function oC(){this.c=0},
BM(a){var s=new A.oD(a,A.a(a.createElement("div")))
s.aS(a)
s.i_(a)
return s},
oD:function oD(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oE:function oE(a){this.a=a},
pe:function pe(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
ph:function ph(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(){},
pj:function pj(){},
cW:function cW(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pU:function pU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
A(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zi(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(p.length);++r){q=A.E(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i_:function i_(){},
bi:function bi(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
q_:function q_(){},
q0:function q0(){},
c0:function c0(a,b,c){this.a=a
this.c=b
this.d=c},
pZ:function pZ(a){this.a=a},
q1:function q1(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
q2:function q2(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
q3:function q3(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a
this.b=null},
Cx(a){var s=new A.qF(a,A.a(a.createElement("div")))
s.aS(a)
s.i1(a)
return s},
qF:function qF(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(a){this.a=a},
kJ(a,b){var s=t.N,r=t.m
r=new A.fO(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.vX(),B.ap,A.n(s,r),A.n(s,r),B.aR,A.n(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.i2(a,b)
return r},
fO:function fO(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k1=_.id=null
_.k2=f
_.k3=g
_.k4=h
_.ok=i
_.p1=j
_.p2=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
r4:function r4(a){this.a=a},
r5:function r5(a){this.a=a},
r6:function r6(a,b){this.a=a
this.b=b},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
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
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ra(a){return B.a.aW(B.C,new A.rb(a),new A.rc(a))},
Cy(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
du(a,b){var s=t.z
s=A.fD(A.Cy(),s,s)
if(a!=null)s.I(0,a)
s=new A.r9(b,A.b5(s,t.N,t.K))
s.i3(a,b)
return s},
yk(a){var s,r=t.f
if(!r.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.h1)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fs)
return A.du(A.aM(s,t.N,t.K),A.e(a.h(0,"version")))},
bA:function bA(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
r9:function r9(a,b){this.a=a
this.b=b},
wi(a,b){var s=b==null?A.du(null,1):b
return new A.rd(s,a==null?A.du(null,1):a)},
Cz(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eH(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cN(r)
J.bt(l,s.a,r)}catch(n){if(!(A.ak(n) instanceof A.F))throw n}}m=A.du(l,1)
return A.wi(m,m)},
rd:function rd(a,b){this.a=a
this.b=b},
CA(a){var s=new A.rl(a,A.a(a.createElement("div")))
s.aS(a)
s.i4(a)
return s},
rl:function rl(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rm:function rm(a,b,c){this.a=a
this.b=b
this.c=c},
AX(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cs(p+m+":"+k,m,l.a,l.b,j))}}B.a.P(i,new A.mD())
return new A.mC(A.ai(i,t.bC),A.a_(t.N))},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mC:function mC(a,b){this.a=a
this.b=b},
mE:function mE(){},
mD:function mD(){},
CQ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mF
s=t.L
r=A.n(s,t.q1)
q=A.o(a).i("aa<1>")
p=A.I(new A.aa(a,q),q.i("m.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.ba(new A.bn(B.mn,k+" has an out-of-range authored day "+h+"."))
g=A.CP(k,h,i.b,m)
if(g instanceof A.ba)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bT(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.ah(o,o.r,o.e,A.o(o).i("ah<2>"));o.m();){n=o.d
J.hl(e.cd(n.b,new A.rP()),n)}o=A.b5(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.J(e,e.$ti.i("J<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.ao(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.l8(new A.l7(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a3,A.pM(b,b,b)))},
CP(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cQ[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.dr(B.b.b1(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.ba(new A.bn(B.mo,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cX
B.a.l(l,new A.c5(g,i.b,f))}if(l.length===0)continue
B.a.P(l,new A.rM())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.ba(new A.bn(B.dT,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.ba(new A.bn(B.dT,a+" day "+s+" has no authored tiers."))
return new A.lD(c)},
l7:function l7(a,b,c,d,e,f,g,h){var _=this
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
rS:function rS(a){this.a=a},
rR:function rR(a){this.a=a},
rT:function rT(a){this.a=a},
rN:function rN(a){this.a=a},
rO:function rO(){},
rQ:function rQ(a){this.a=a},
rP:function rP(){},
rL:function rL(a){this.a=a},
rK:function rK(a){this.a=a},
rM:function rM(){},
l8:function l8(a){this.a=a},
lD:function lD(a){this.a=a},
FV(a){var s,r,q,p=A.a_(t.N)
for(s=new A.J(a,A.o(a).i("J<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaD(),q=q.gu(q);q.m();)if(q.gn().ga1().M(0,new A.vc())){p.l(0,r.a)
break}}s=A.I(p,p.$ti.c)
B.a.X(s)
return s},
FU(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.ao(b,!0,s)
B.a.X(r)
q=new A.ed()
q.bM((a^913741)>>>0)
p=q.aN(4)
if(!(p>=0&&p<4))return A.d(B.cP,p)
o=B.cP[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.ao(r,!0,s)
B.a.cU(m,q)
s=A.kS(m,0,A.f9(n,"count",t.S),A.D(m).c).bI(0)
B.a.X(s)
return s},
vc:function vc(){},
yw(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aJ(r)||!A.aJ(q)||!A.aJ(p)||r<1||q<0||q>23||p<0)return null
return new A.bT(s,r,q,p)},
CO(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.R(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.R(s.a(a.h(0,j)));s.m();){n=A.yw(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.AW(m)
if(!s&&l==null)return i
return new A.l9(r,o,l)},
AW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yw(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aJ(p))if(!(p<0))if(A.bK(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bu(new A.G(B.cQ,t.qR.a(new A.mz(r)),t.cE),t.hF)
j=A.bu(new A.G(B.jf,t.da.a(new A.mA(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bu(new A.G(B.im,t.kr.a(new A.mB(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jj(s,k,j,p,i,n,A.aB(m))},
bP:function bP(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d3:function d3(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(){},
jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mz:function mz(a){this.a=a},
mA:function mA(a){this.a=a},
mB:function mB(a){this.a=a},
l6:function l6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rU:function rU(){},
ba:function ba(a){this.a=a},
l5:function l5(a){this.a=a},
l3:function l3(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
l4:function l4(a,b,c){this.a=a
this.b=b
this.c=c},
F2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.je())return f
n=A.e8().gb0()
m=n.h(0,"captureSeed")
l=A.dr(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dr(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eH(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.j.aF(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.la.q(0,o.b))return f
J.bt(p,A.q(o.a),A.q(o.b))}r=p}else return f}catch(g){if(A.ak(g) instanceof A.F)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lf.q(0,i))return f
if(h!=null&&!B.ld.q(0,h))return f
return new A.t5(l,k,j,h,r)},
F3(){var s,r,q,p=A.e8().gb0().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eB
break A}if("intimate"===p){s=B.eD
break A}s=B.eC
break A}r=A.e8().gb0().h(0,"cameraFov")
q=A.eH(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fl(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
jb(a){var s=$.bd
if(s===a&&B.b.q(A.q(a.b.className),"open"))return
if(s!=null)s.a6()
$.bd=a
if(a===$.cp.j())$.hj().fR("gameplay.viewport")
else $.hj().lY(A.zy(a))
s=$.ac.j()
s.ay=!1
s.b7()
$.ek=0
a.bF()},
wP(a,b,c){var s,r,q
$.jc=!0
s=$.bd
if(s!=null)s.a6()
$.bd=a
s=$.hj()
if(s.a.a.length===0)s.fR(c)
r=A.I(s.a.a,t.oP)
r.push(new A.dp(b,B.Y,c))
q=s.a
s.a=new A.e0(r,q.b,q.c)
s.iD(b)
s=$.ac.j()
s.ay=!1
s.b7()
$.ek=0
a.bF()
$.jc=!1},
dH(a){var s,r,q,p,o,n,m,l=null
if($.jc)return
$.jc=!0
a.a6()
$.bd=null
s=$.hj().jZ()
$.jc=!1
r=s.a
if(r===B.dl){$.ek=0
r=$.ac.j()
r.b7()
r.ay=!0
q=A.E(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dk)return
r=s.c.a
r=r.length===0?l:B.a.gV(r)
p=r==null?l:r.a
A:{if(B.bs===p){r=$.cp.j()
break A}if(B.da===p){r=$.h5.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bd=r
n=$.ac.j()
n.ay=!1
n.b7()
$.ek=0
r.bF()
m=o==null?l:A.E(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jd(a){if($.bd===a&&B.b.q(A.q(a.b.className),"open"))a.a6()
else A.jb(a)},
ha(a){var s
if($.jc)return
if($.bd===a)$.bd=null
if(a===$.cp.j())$.hj().ce()
else $.hj().kW(A.zy(a))
$.ek=0
s=$.ac.j()
s.b7()
s.ay=!0},
zy(a){if(a===$.cp.j())return B.db
if(a===$.h5.j())return B.Y
if(a instanceof A.fO)return B.Y
if(a instanceof A.hF)return B.Y
if(a instanceof A.ht)return B.Y
if(a===$.j0.j())return B.kb
if(a===$.m4.j())return B.kc
if(a===$.j_.j())return B.kd
if(a===$.m2.j())return B.Y
if(a===$.iY.j())return B.kf
return B.ke},
m9(a,b){var s
a.slN(new A.u3())
a.slP(new A.u4())
a.slO(new A.u5())
a.slJ(new A.ub())
a.slM(new A.uc())
a.slX(new A.ud())
a.slS(new A.ue())
a.slR(new A.uf())
a.sb4(b?new A.ug(a):new A.uh(a))
a.sb_(b?new A.ui(a):new A.u6(a))
s=a.f
if(s===B.H)a.slA(new A.u7())
if(s===B.a_)a.slK(new A.u8())
if(s===B.I){a.slz(new A.u9())
a.slQ(new A.ua())}},
E5(){var s=$.ei.j()
s.sdI(new A.u0())
s.sb4(new A.u1())
s.sb_(new A.u2())},
m8(a,b,c){return A.E2(a,b,c)},
E2(a,b,c){var s=0,r=A.bL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$m8=A.bN(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.tX()
k=c.$ti
j=$.am
i=new A.aq(j,k)
if(j!==B.w)l=A.zE(l,j)
c.cn(new A.dC(i,2,null,l,k.i("dC<1,1>")))
s=4
return A.ar(i,$async$m8)
case 4:case 3:o=$.jf().b
n=$.aR
q=6
s=n!=null?9:10
break
case 9:s=11
return A.ar(n.cB(b.a),$async$m8)
case 11:case 10:k=b.a
$.j6=A.fA(k,a)
$.ei.j().cl(a,k,b.b)
A.wR()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ak(g)
$.j6=A.fA(o,o)
k=$.ei.j()
k.cl(o,o,A.c(["renderer transaction rejected: "+A.w(m)],t.s))
A.wR()
s=8
break
case 5:s=1
break
case 8:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$m8,r)},
ET(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.j.aF(n,null)
if(!t.f.b(r)||!J.ad(r.h(0,"version"),1))A.j(B.fV)
q=A.xO(r.h(0,"requested"))
$.j6=A.fA(A.xO(r.h(0,"effective")),q)}catch(s){$.j6=A.fA(null,null)}p=$.jf().a
o=A.A9(p,A.zm())
r=o.a
$.j6=A.fA(r,p)
$.ei.j().cl(p,r,o.b)
A.wR()},
zm(){var s,r,q,p,o=$.f4.j().gby().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.dr(B.b.b1(p,12),null)
if(r==null)r=1}return new A.ot(r,B.a.q(o,"disjoint-timer-query"))},
wR(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.j.ab($.jf().B(),null))}catch(s){}},
E4(){var s=$.iX.j()
s.sdI(new A.tY())
s.sb4(new A.tZ())
s.sb_(new A.u_())},
ER(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wG=A.Bf(B.j.aF(n,null))}catch(s){$.wG=A.fs(null,null,!1,1,!1,!1,2,1)}r=$.iX.j()
q=r.w=$.fb()
r.x=new A.jA(q)
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
r.di()
$.ac.j().e5($.fb().r)
r=$.ac.j()
q=$.fb()
p=r.ch
p.a=q.f
p.dQ()
r.b7()
A.zA()},
zA(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.j.ab($.fb().B(),null))}catch(s){}},
EQ(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j4=A.B_(B.j.aF(r,null))}catch(s){$.j4=B.aR}$.h3.j().hg($.j4)
A.zz()
A.wy()},
zz(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.j.ab($.j4.B(),null))}catch(s){}},
wy(){var s=$.bs
if(s==null)return
s.hq($.j4)},
ES(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wJ=A.BJ(B.j.aF(r,null))}catch(s){$.wJ=$.vX()}$.iZ.j().hh($.mo())
A.zB()
A.z5()},
zB(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.j.ab($.mo().B(),null))}catch(s){}},
z5(){var s,r="detailed",q=A.BI($.mo()),p=A.E(A.a(v.G.document).documentElement)
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
EP(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.ej=A.AU(B.j.aF(r,null))}catch(s){$.ej=B.ap}$.f3.j().e4($.ej)
A.wQ()
A.m5()},
wQ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.j.ab($.ej.B(),null))}catch(s){}},
m5(){var s,r,q,p,o,n,m=$.ej,l=$.v_,k=$.x4,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.j(B.fq)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.wV=l
$.cI.j()
r=A.E(A.a(v.G.document).documentElement)
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
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.w(j*100)+"%")
q=$.z.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.w(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.z3){m=$.bc.j()
l=$.ej.f
m.e=new A.jh(l==null?B.a9:l)
m=$.bc.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Et(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uK(r,q)
r.addEventListener("change",A.W(new A.uI(s)))
q.addEventListener("change",A.W(new A.uJ(s)))},
vj(){var s=0,r=A.bL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9
var $async$vj=A.bN(function(e1,e2){if(e1===1){o.push(e2)
s=p}for(;;)switch(s){case 0:d7=v.G
d8=A.E(A.a(d7.document).getElementById("game"))
if(d8==null){s=1
break}$.z.b=d8
$.wI=A.E(A.a(d7.document).getElementById("fps"))
$.yZ.b=$.AA().cj(A.e8().gb0().h(0,"renderer"))
A.Eu()
b8=$.z.j()
b9=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
b8.width=b9
b9=$.z.j()
b8=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b9.height=b8
c0=A.E(A.a(d7.document).getElementById("ui-canvas"))
if(c0!=null){c0.width=A.e($.z.j().width)
c0.height=A.e($.z.j().height)
b8=new A.nk(c0,A.c([],t.km))
c1=A.E(c0.getContext("2d"))
if(!t.m.b(c1))A.j(A.k("Failed to get 2D context for CanvasP5GuiEngine"))
b8.b=c1
b8=new A.qu(b8)
$.el=b8
b8.be(A.e($.z.j().width),A.e($.z.j().height))}n=A.E(d8.getContext("webgl2"))
if(n==null)throw A.b(A.k("Pixeldart requires WebGL2"))
try{b8=t.s6
b9=t.N
c2=t.iO
c3=t.m3
c4=t.pw
m=new A.lG(n,A.e($.z.j().width),A.e($.z.j().height),A.c([],b8),A.n(b9,t.qr),A.c([],t.s3),A.n(b9,c2),A.n(b9,c3),A.n(b9,t.xp),A.n(b9,t.bE),A.n(b9,c2),A.n(b9,c3),A.c([],b8),A.n(b9,c2),A.n(b9,c3),A.n(b9,b9),A.n(t.S,c4),A.n(b9,t.qS),A.c([],t.j5),B.iO,A.n(b9,t.Aj),A.n(b9,b9),A.n(b9,c4),A.n(b9,t.vD),A.n(b9,c4),B.hc,B.kt)
$.aR=m
c4=B.em.kQ($.yZ.j(),m)
c4.c4()
$.f4.b=c4}catch(e0){l=A.ak(e0)
k=A.cJ(e0)
g=$.z.j()
g.setAttribute("data-renderer-error",A.w(l))
if($.je())$.z.j().setAttribute("data-renderer-error-stack",A.w(k))
throw e0}A.uS()
p=4
A.f6("initializing")
$.cI.b=new A.nj(new A.f(0,0,0),new A.f(0,0,1),new A.f(0,1,0),new A.f(1,0,0),$.xr())
$.v_=A.Q(A.a(A.a(d7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.x4=A.Q(A.a(A.a(d7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.wV=$.v_
$.cI.j()
b8=A.a(d7.window)
b9=t.N
c2=t.s
c3=t.a
c2=A.BQ(A.M(["moveForward",A.c(["KeyW"],c2),"moveBack",A.c(["KeyS"],c2),"moveLeft",A.c(["KeyA"],c2),"moveRight",A.c(["KeyD"],c2),"interact",A.c(["KeyE"],c2),"secondary",A.c(["KeyQ"],c2),"run",A.c(["ShiftLeft"],c2),"crouch",A.c(["ControlLeft"],c2),"rotate",A.c(["KeyR"],c2),"reach",A.c(["KeyF"],c2),"journal",A.c(["KeyJ"],c2),"sleep",A.c(["KeyL"],c2),"pause",A.c(["Escape"],c2)],b9,c3))
c4=A.a(b8.document)
c2=new A.k3(b8,c4,A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),new A.f(0,0,0),new A.p7(),c2)
b8.addEventListener("keydown",A.W(c2.gj2()))
b8.addEventListener("keyup",A.W(c2.gj4()))
b8.addEventListener("mousemove",A.W(c2.gja()))
b8.addEventListener("mousedown",A.W(c2.gj8()))
b8.addEventListener("mouseup",A.W(c2.gjc()))
b8.addEventListener("wheel",A.W(c2.gje()))
c4.addEventListener("pointerlockchange",A.W(c2.gj6()))
$.ac.b=c2
c2=$.z.j()
b8=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
c2.width=b8
b8=$.z.j()
c2=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b8.height=c2
A.f6("renderer")
A.f6("text")
c2=$.fc()
s=7
return A.ar(c2.ca(),$async$vj)
case 7:j=c2.mH()
i=A.CQ(j)
if(!(i instanceof A.l8)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aF.b=i.a
$.m1.b=A.AX(j)
g=A.n(b9,c3)
for(b8=t.j,c6=0;c6<5;++c6){f=B.B[c6]
c3=A.q(f)
c4=c2.c
c4===$&&A.p()
c7=c4.h(0,c3)
c3=b8.b(c7)?A.ao(c7,!0,b9):B.o
J.bt(g,f,c3)}e=A.CR(g)
$.wx.b=new A.nc(B.eA)
d=$.wx.j().m5(new A.vk(e))
c8=$.vY()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aV.aN(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.c.aX(c2.c)
if(c2==null)c2=7
if(b9<1)A.j(A.ag(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.j(A.ag(c2,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.j(A.ag(5760,"daySeconds","must be finite and > 0"))
c9=new A.jT(b9,7,5760)
c9.b=c2
d0=A.y_(e)
g=A.xM(42,g,A.xP(42),c9,d0,A.xG(6,16,d0,null,6,B.iP,c9),new A.jH(0,0,0,!1),A.pM(null,null,null))}else{g=d.a
g.toString
g=A.xN(g,e)}$.T.b=g
$.aF.j().y=$.T.j().z
g=A.ai(A.Ep($.T.j().b),t.fu)
$.tO.b=new A.rW(g)
g=$.vZ()
b9=d.a
g.dS(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.f4.j().bp(A.yg($.T.j().gfX()))
if(d.b!=null){g=d.b
g.toString
A.hb(g)}g=$.aF.j()
b9=A.FU($.T.j().b,A.FV(j.b))
g.shK(A.hP(b9,A.D(b9).c))
A.f6("house")
$.U.b=$.T.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.U.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.t)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.ad(b,"open")||J.ad(b,"closed")){a3=J.ad(b,"open")
for(g=$.U.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.t)(c2),++d1){a5=c2[d1]
a5.shA(a3)}}}a6=$.xp()
if(a6!=null&&a6.length!==0)for(g=$.U.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.xq()}}g=$.aR
if(g!=null)g.jY($.U.j())
$.bG.b=$.T.j().d
$.U.j()
g=new A.f(12.9375,1.65,0.825)
$.x5=$.wT=$.wZ=g
a9=g.ao(0,new A.f(0,1.3499999999999999,0))
$.j1.b=new A.ju(a9,J.xs(a9,new A.f(0,1.2000000000000002,0)))
$.h4.b=new A.nW()
g=A.wK(B.o)
b9=A.wK(B.o)
c2=new A.qy(B.D,g,b9)
if(!isFinite(0))A.j(B.fe)
if(!B.a.a7(b9,B.a.gap(g)))A.j(B.fP)
if(c2.a===B.D&&c2.b!==0&&!c2.e)A.j(B.fi)
$.c7.b=c2
$.as="hall"
g=d.a
b0=A.Cb(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.lo($.U.j())){g=b0.b
$.x5=$.wT=$.wZ=g
$.cq=b0.c
$.f7=b0.d
$.as=b0.a
b1=g.ao(0,new A.f(0,1.3499999999999999,0))
g=$.j1.j()
g.sk_(b1)
g.b=J.xs(b1,new A.f(0,1.2000000000000002,0))
g=$.j1.j()
b9=$.U.j()
c2=b0.e
c3=b0.f
g.mr($.as,$.ep(),b9,c3,c2)
A.hb("restored position")}g=A.Cx(A.a(d7.document))
g.slB(new A.vl())
g.sb4(new A.vm())
g.sb_(new A.vx())
$.h5.b=g
g=A.a(d7.document)
b9=A.a(g.createElement("div"))
c2=new A.q2(g,b9)
c2.aS(g)
b9.className=A.q(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.a(b9.appendChild(A.nf(g,B.eh,1)))
A.a(b9.appendChild(A.A(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.A(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bh(g,d2,B.dc,"resume")
c2.bh(g,d2,B.dd,"settings")
c2.bh(g,d2,B.de,"controls")
c2.bh(g,d2,B.df,"save now")
c2.bh(g,d2,B.dg,"help")
c2.bh(g,d2,B.dh,"credits")
c2.bh(g,d2,B.di,"back")
A.a(b9.appendChild(d2))
c2.slT(new A.vG())
c2.sb4(new A.vH())
c2.slV(new A.vI())
c2.slF(new A.vJ())
c2.slU(new A.vK())
c2.slL(new A.vL())
c2.slG(new A.vM())
c2.sb_(new A.vn())
$.cp.b=c2
c2=$.T.j().e
b9=$.bG.j()
$.T.j()
$.m3.b=new A.p5(c2,b9)
b9=A.a(d7.document)
c2=$.T.j().e
g=$.bG.j()
c3=$.m3.j()
c4=A.a(b9.createElement("div"))
c3=new A.pe(c2,g,c3,b9,c4)
c3.aS(b9)
c4.setAttribute("aria-label","The Journal")
A.a(c4.appendChild(A.A(b9,"div","journal-title","The Journal")))
d3=A.A(b9,"div","journal-pages",null)
g=A.A(b9,"div","page page-left",null)
c3.y!==$&&A.aX()
c3.y=g
c2=A.A(b9,"div","page page-right",null)
c3.z!==$&&A.aX()
c3.z=c2
A.a(d3.appendChild(g))
A.a(d3.appendChild(c2))
A.a(c4.appendChild(d3))
A.a(c4.appendChild(c3.ij()))
d4=A.A(b9,"div","tape-roll",null)
A.a(d4.style).setProperty("width","8rem")
c2=A.A(b9,"div","tape-fill",null)
c3.as!==$&&A.aX()
c3.as=c2
A.a(d4.appendChild(c2))
A.a(c4.appendChild(d4))
d5=A.A(b9,"div","consult",null)
A.a(d5.appendChild(A.A(b9,"div","consult-label","Cite an entry")))
c2=A.A(b9,"div","entry-picker",null)
c3.at!==$&&A.aX()
c3.at=c2
g=A.A(b9,"div","consult-result",null)
c3.ax!==$&&A.aX()
c3.ax=g
A.a(d5.appendChild(c2))
A.a(d5.appendChild(g))
A.a(c4.appendChild(d5))
d6=A.E(b9.documentElement)
if(t.m.b(d6)){A.a(d6.style).setProperty("--shake-max-deg","3deg")
A.a(d6.style).setProperty("--shake-max-px","2px")}$.j0.b=c3
$.j0.j().sb_(new A.vo())
g=A.a(d7.document)
b9=A.A(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.E(g.body).appendChild(b9))
$.z0.b=new A.qf(b9)
b9=A.a(d7.document)
g=A.A(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.E(b9.body).appendChild(g))
$.z_.b=new A.nb(g)
g=A.a(d7.document)
b9=A.A(g,"div","ambient-notice",null)
c2=A.A(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.a(A.E(g.body).appendChild(b9))
A.a(A.E(g.body).appendChild(c2))
$.bc.b=new A.mF(b9,c2,B.K)
$.z3=!0
c2=A.Bm(A.a(d7.document))
c2.slE(A.A7())
c2.slD(A.G7())
$.az.b=c2
c2=$.cK()
c2.slC(new A.vp())
c2.slH(A.A7())
c2=d.a
b2=A.CO(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aF.j().dS(b2))A.F7()
g=$.m1.j()
b9=d.a
g.ms(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(b8.b(b3))for(g=J.R(b3);g.m();){b4=g.gn()
if(A.aJ(b4))$.v0.l(0,b4)}g=A.CA(A.a(d7.document))
g.slW(new A.vq())
g.sb_(new A.vr())
$.m4.b=g
g=A.BM(A.a(d7.document))
g.sb_(new A.vs())
$.j_.b=g
g=A.Bg(A.a(d7.document))
g.sb_(new A.vt())
$.m2.b=g
$.j2.b=A.kJ(A.a(d7.document),null)
$.j3.b=A.kJ(A.a(d7.document),B.Z)
$.f3.b=A.kJ(A.a(d7.document),B.I)
A.m9($.j2.j(),!1)
A.m9($.j3.j(),!0)
A.m9($.f3.j(),!0)
A.EP()
A.Et()
$.ei.b=A.BL(A.a(d7.document))
A.E5()
A.ET()
$.h3.b=A.kJ(A.a(d7.document),B.H)
A.m9($.h3.j(),!0)
A.EQ()
$.iZ.b=A.kJ(A.a(d7.document),B.a_)
A.m9($.iZ.j(),!0)
A.ES()
$.iX.b=A.Be(A.a(d7.document))
A.E4()
A.ER()
g=A.Bw(A.a(d7.document))
g.sb_(new A.vu())
g.slI(new A.vv())
$.iY.b=g
g=d.a
b5=A.By(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zC(b5)
A.f6("world")
A.zF()
A.a(d7.window).addEventListener("resize",A.W(new A.vw()))
A.a(d7.document).addEventListener("visibilitychange",A.W(new A.vy()))
A.a(d7.window).addEventListener("keydown",A.W(new A.vz()))
A.a(d7.window).addEventListener("keyup",A.W(new A.vA()))
A.a(d7.window).addEventListener("keydown",A.W(new A.vB()))
A.a(d7.window).addEventListener("click",A.W(new A.vC()))
$.z.j().addEventListener("mousemove",A.W(new A.vD()))
$.z.j().addEventListener("click",A.W(new A.vE()))
$.z.j().addEventListener("wheel",A.W(new A.vF()))
A.h8()
A.f6("raf")
A.e(A.a(d7.window).requestAnimationFrame(A.W(A.A8())))
p=2
s=6
break
case 4:p=3
d9=o.pop()
b6=A.ak(d9)
b7=A.cJ(d9)
A.uU(b6,b7)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$vj,r)},
Es(a){var s,r,q,p=$.el
if(!$.az.j().y||p==null)return
s=A.ze(a)
if(s==null)return
r=$.cK()
q=p.fJ(s.a,s.b)
r.r=q==null?null:q.b},
Er(a){var s,r=$.el
if(!$.az.j().y||r==null)return!1
s=A.ze(a)
if(s==null)return!1
return $.cK().li(r.fJ(s.a,s.b))},
ze(a){var s=A.a($.z.j().getBoundingClientRect()),r=A.a4(s.width),q=A.a4(s.height)
if(r<=0||q<=0)return null
return new A.aW(A.e(a.clientX)-A.a4(s.left),A.e(a.clientY)-A.a4(s.top))},
Eu(){var s=v.G
A.a(s.window).addEventListener("error",A.W(new A.uL()))
A.a(s.window).addEventListener("unhandledrejection",A.W(new A.uM()))},
f6(a){if($.wC===a)return
$.wC=a
$.z.j().setAttribute("data-boot-phase",a)},
uS(){var s,r,q,p,o,n=$.f4.j().gby(),m=$.z.j(),l=A.e8().gb0().h(0,"renderer")
if(l==null)l="auto"
m.setAttribute("data-renderer-request",l)
m.setAttribute("data-renderer-backend",n.a)
m.setAttribute("data-renderer-profile",n.b)
m.setAttribute("data-renderer-diagnostics",B.j.ab(n.B(),null))
l=$.aR
if(l==null)l="{}"
else{l=l.e
l===$&&A.p()
l=l.as
if(l==null)l=A.j(A.k("renderer is not initialized"))
s=l.a
s.C()
r=s.b
q=A.I(r,A.o(r).c)
B.a.X(q)
r=t.N
p=t.K
p=B.j.ab(A.M(["profile",A.M(["kind",s.a.b,"features",q],r,p),"internalWidth",l.b,"internalHeight",l.c,"sampleCount",l.d,"outputEncoding","srgb","shadowMapCount",l.f,"shadowMapSize",l.r,"materialTableCapacity",l.w,"lightTableCapacity",l.x,"textureArrayLayerCapacity",l.y,"diagnosticLevel",l.z.b],r,p),null)
l=p}m.setAttribute("data-renderer-configuration",l)
m.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
m.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
m.setAttribute("data-renderer-lighting-falloff","smoothstep")
m.setAttribute("data-renderer-dof-focal-distance","2.5m")
m.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
m=$.aR
o=m==null?null:m.x
if(o!=null)$.z.j().setAttribute("data-renderer-profile-fallback",o)},
F_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.je())return
s=$.xp()
if(s!=null&&s.length!==0){r=$.z.j()
q=$.xq()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tO.j().dA($.T.j().gaa().a)
r=$.z.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vY()
o=q==null?c:q.e
if(o!=null)$.z.j().setAttribute("data-automation-capture-shutters",o)
$.z.j().setAttribute("data-automation-rain-window-visibility",B.c.aK(A.zD($.as),3))
r=$.z.j()
q=$.wC
n=$.as
m=$.ep()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.j.ab(A.M(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.M(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cq,"pitch",$.f7,"modal",$.bd!=null,"dialogueOverlay",$.az.j().y,"inputEnabled",$.ac.j().ay,"day",$.T.j().gaa().a,"hour",$.T.j().gaa().b],l,k),c))
j=A.n(l,t.X)
for(r=$.U.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.M(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.z.j().setAttribute("data-automation-portals",B.j.ab(j,c))
e=$.m6
r=!1
if(e!=null)if($.U.j().e.h(0,"cellar")!=null){r=$.U.j()
q=$.as
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cf("cellar",$.as)
$.z.j().setAttribute("data-audio-transmission-cellar",B.j.ab(A.M(["sourceRoom","cellar","listenerRoom",$.as,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.z.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mj(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c7.j().a!==B.D){A.hb("save unavailable during rupture")
return}try{r=$.wx.j()
q=$.T.j()
p=t.N
o=t.z
s=A.n(p,o)
n=$.as
m=$.ep()
l=$.cq
k=$.f7
j=$.j1.j().d
j=j==null?null:j.a.a
i=$.j1.j().d
J.bt(s,"player",new A.ku(n,m,l,k,j,i==null?null:i.b).B())
n=$.aF.j()
m=A.eO(n.b,p)
l=A.eO(n.c,t.L)
n=n.r
J.bt(s,"visitors",new A.l9(m,l,n==null?null:new A.jj(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.m1.j().b
n=A.I(n,A.o(n).c)
B.a.X(n)
J.bt(s,"ambient",n)
n=A.I($.v0,A.o($.v0).c)
B.a.X(n)
J.bt(s,"unverifiables",n)
J.bt(s,"inventoryInspections",$.vZ().B())
n=$.wH
if(n!=null)J.bt(s,"ending",A.M(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xR(q.c).B()
k=q.d
r.mK(A.yi(s,A.M(["houseSeed",n,"runSeed",m,"house",l,"time",A.M(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hb(a)}catch(h){A.hb("save failed")}},
EY(){var s=A.E(A.a(v.G.document).documentElement),r=s==null?null:A.aB(s.getAttribute("data-gameplay-focus-loss")),q=A.bu(new A.G(B.aD,t.rg.a(new A.uP(r)),t.vK),t.x)
switch((q==null?B.b0:q).a){case 0:$.mg=!0
s=$.bs
if(s!=null)s.e7(!0)
break
case 1:$.mg=!0
break
case 2:break}},
hb(a){var s=v.G,r=A.E(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.E(A.a(s.document).documentElement)
s=s==null?null:A.aB(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.BH(B.f_,new A.uY(r),t.H)},
uU(a,b){var s,r,q,p
A.f6("error")
s=A.w(a)
r=A.xg(s,"\n"," ")
s=$.wI
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.E(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.z.j().setAttribute("data-boot-error",p)
if($.je()&&!q)$.z.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
z8(){var s,r
if($.wA)return
$.wA=!0
s=$.bs
r=s==null
if(!r)s.ce()
if(!r)s.ee("music")
B.a.l($.d7,"arm")},
h8(){var s=0,r=A.bL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$h8=A.bN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ar(A.h7(),$async$h8)
case 2:o=null
q=4
s=7
return A.ar(A.bV(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$h8)
case 7:n=b
i=A
s=8
return A.ar(A.bV(A.a(n.json()),t.X),$async$h8)
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
if(k!=null&&typeof k==="string"){A.q(k)
l=A.E(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.m2.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.ar(A.oa(A.c([A.uN(o),A.uH(o)],t.iJ),t.H),$async$h8)
case 9:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$h8,r)},
h7(){var s=0,r=A.bL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$h7=A.bN(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.iI[g]
q=6
s=9
return A.ar(A.bV(A.a(A.a(j.window).fetch(o)),i),$async$h7)
case 9:n=a0
s=10
return A.ar(A.bV(A.a(n.text()),h),$async$h7)
case 10:m=a0
l=A.B0(B.j.aF(m,null))
f=$.U.b
if(f===$.U)A.j(A.a5(""))
l.dW(f)
f=$.z.b
if(f===$.z)A.j(A.a5(""))
f.setAttribute("data-house-manifest","validated")
f=$.z.b
if(f===$.z)A.j(A.a5(""))
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
case 4:if(!c){$.z.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.ar(A.md(),$async$h7)
case 11:s=12
return A.ar(A.me(),$async$h7)
case 12:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$h7,r)},
md(){var s=0,r=A.bL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$md=A.bN(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.iq[c]
p=7
s=10
return A.ar(A.bV(A.a(A.a(g.window).fetch(n)),f),$async$md)
case 10:m=b1
s=11
return A.ar(A.bV(A.a(m.text()),e),$async$md)
case 11:l=b1
b=B.j.aF(l,null)
b=h.b(b)?b:A.dF("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dF("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aJ(a)?a:A.dF("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dF("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.ao(a,!0,d):A.dF("assets is not a list")
a4=A.D(a3)
a5=a4.i("N<1,cV>")
a3=A.I(new A.N(a3,a4.i("cV(1)").a(A.G3()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.ao(a,!0,d):A.dF("placements is not a list")
a5=A.D(a4)
a6=a5.i("N<1,cx>")
a4=A.I(new A.N(a4,a5.i("cx(1)").a(A.G4()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.oK(a1,a2,a0,a3,a4)
a1=$.U.b
if(a1===$.U)A.j(A.a5(""))
k.dW(a1)
$.mb=k
a1=$.aR
if(a1!=null)a1.hi(k)
a1=$.z.b
if(a1===$.z)A.j(A.a5(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.z.b
if(a1===$.z)A.j(A.a5(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.z.b
if(a1===$.z)A.j(A.a5(""))
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
case 5:$.z.j().setAttribute("data-house-inventory","unavailable")
$.z.j().setAttribute("data-house-inventory-error",A.w(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$md,r)},
me(){var s=0,r=A.bL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$me=A.bN(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.mb
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.j_[a4]
p=7
s=10
return A.ar(A.bV(A.a(A.a(a1.window).fetch(m)),a2),$async$me)
case 10:l=b5
s=11
return A.ar(A.bV(A.a(l.text()),e),$async$me)
case 11:k=b5
a5=B.j.aF(k,null)
a5=a0.b(a5)?a5:A.h6("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.ao(a6,!0,a3):A.h6("emitters is not a list")
a8=A.D(a7)
a9=a8.i("N<1,cU>")
a7=A.I(new A.N(a7,a8.i("cU(1)").a(A.Gj()),a9),a9.i("a1.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aJ(a6)?a6:A.h6("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h6("sourceRef is not a string")
j=new A.oR(a8,a9,a7)
a7=$.U.b
if(a7===$.U)A.j(A.a5(""))
j.mE(a7,b2)
$.zp=j
i=A.n(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bt(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.U.b
if(a7===$.U)A.j(A.a5(""))
a8=A.AY(i)
a9=new A.mP(a7,A.b5(B.d7,e,d),a8)
a9.hT(a8,a7,B.d7)
$.m6=a9
a7=$.bs
if(a7!=null){a7.ch=a9
a7.bu()}a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
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
case 5:$.m6=null
$.z.j().setAttribute("data-audio-planner","unavailable")
$.z.j().setAttribute("data-house-soundscape","unavailable")
$.z.j().setAttribute("data-house-soundscape-error",A.w(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$me,r)},
wF(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.R(t.a.b(s)?s:new A.aV(s,A.D(s).i("aV<1,h>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.q(q))}},
uH(a){var s=0,r=A.bL(t.H),q,p,o,n,m,l
var $async$uH=A.bN(function(b,c){if(b===1)return A.bH(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.wF(A.E(n?null:a.sfx),m,"")
A.wF(A.E(n?null:a.ir),m,"ir-")
q=A.E(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.q(p))
l=$
s=2
return A.ar(A.mW(m,$.U.j()),$async$uH)
case 2:o=l.bs=c
o.ch=$.m6
o.bu()
A.EU()
A.zH(o)
A.wy()
A.zI()
if($.wA){o.ce()
o.ee("music")}return A.bI(null,r)}})
return A.bJ($async$uH,r)},
x1(a,b){var s
A.zT(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
F4(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
z4(a,b){var s
if(a!=="brightness")return
s=A.E(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.w(B.c.D(b,0.6,1.4))+")")},
tS(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.E(A.a(v.G.document).documentElement)
if(r!=null)A.Q(A.a(r.classList).toggle(s,b))
A.m5()},
zI(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a4($.d9().a.cg(o)),k=A.Q($.d9().a.cg(n)),j=A.Q($.d9().a.cg(m))
for(s=[$.j2.j(),$.j3.j(),$.f3.j(),$.h3.j(),$.iZ.j()],r=0;r<5;++r)s[r].e6(o,l)
A.z4(o,l)
for(s=[$.j2.j(),$.j3.j(),$.f3.j(),$.h3.j(),$.iZ.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tS(n,k)
A.tS(m,j)},
x0(a,b){var s
A.zT(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
F1(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zH(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.iH[s]
q=$.d9().a.b.h(0,r)
j.k(0,r,A.a4(q==null?A.j(A.k("setting missing from profile: "+r)):q))}p=A.Q($.d9().a.cg("muted"))
o=A.Q($.d9().a.cg("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bg(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cS(o)
for(q=[$.j2.j(),$.j3.j(),$.f3.j(),$.h3.j()],n=j.$ti.i("cz<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cz(j,j.r,j.e,n);m.m();){k=m.d
l.e6(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
z6(){var s=$.bs
if(s!=null)A.zH(s)
A.zI()},
EU(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.j.aF(k,null)
if(!t.f.b(r)||!J.ad(r.h(0,"version"),1))A.j(B.fr)
q=A.yk(r.h(0,"requested"))
$.zP=A.wi(A.yk(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.F1(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.F4(p))}}$.zP=A.Cz(o,r)
A.uQ()},
uQ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.j.ab($.d9().B(),null))}catch(s){}},
zT(a,b){var s,r,q,p,o,n,m
switch(A.ra(a).d.a){case 0:r=A.eH(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d9()
q=s
A.ra(a).cN(q)
p=t.N
o=t.K
n=A.fD(r.a.b,p,o)
n.k(0,a,q)
r.a=A.du(n,1)
n=s
A.ra(a).cN(n)
o=A.fD(r.b.b,p,o)
o.k(0,a,n)
r.b=A.du(o,1)
A.uQ()}catch(m){if(!(A.ak(m) instanceof A.F))throw m}},
uN(a){var s=0,r=A.bL(t.H),q,p
var $async$uN=A.bN(function(b,c){if(b===1)return A.bH(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.n(q,q)
A.wF(A.E(a==null?null:a.tex),p,"")
q=$.aR
q=q==null?null:q.cI(p)
s=2
return A.ar(A.oa(A.c([q==null?A.xL(t.H):q],t.iJ),t.H),$async$uN)
case 2:return A.bI(null,r)}})
return A.bJ($async$uN,r)},
zF(){var s,r,q=v.G,p=A.e(A.a(q.window).innerWidth),o=A.e(A.a(q.window).innerHeight)
q=$.z.j()
s=p>0?p:800
q.width=s
s=$.z.j()
q=o>0?o:600
s.height=q
q=$.el
if(q!=null)q.be(A.e($.z.j().width),A.e($.z.j().height))
$.f4.j().be(A.e($.z.j().width),A.e($.z.j().height))
q=$.aR
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.z.j().setAttribute("data-renderer-surface",r)},
Eq(){var s,r,q=$.bd
if(q!=null){s=$.ac.j()
if(!s.CW.bb("pause",s.f)){s=$.ac.j()
s=s.CW.bb("secondary",s.f)}else s=!0
if(s){A.E7(q)
return}if($.ac.j().f.a5(0,"GamepadDpadUp")){A.zv(q,-1)
return}if($.ac.j().f.a5(0,"GamepadDpadDown")){A.zv(q,1)
return}s=$.ac.j()
if(s.CW.bb("interact",s.f)){r=A.E(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.pb(r,"click",t.X)}return}s=$.ac.j()
if(s.CW.bb("pause",s.f)){A.jb($.cp.j())
return}if($.az.j().y)return
s=$.ac.j()
if(s.CW.bb("journal",s.f))A.jd($.j0.j())
else{s=$.ac.j()
if(s.CW.bb("sleep",s.f))A.jd($.m4.j())}},
E7(a){if(a===$.cp.j()){a.a6()
return}if(a===$.h5.j()||a instanceof A.fO||a instanceof A.hF||a instanceof A.ht){A.dH(a)
return}a.a6()},
zv(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(l.length);++r){q=A.E(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.E(A.a(v.G.document).activeElement)
o=B.a.bC(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
F0(d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1
A.a4(d2)
try{s=d2
if(!$.zo){$.wO=s
$.zo=!0}e=s
d=$.wO
if(typeof e!=="number")return e.ao()
r=(e-d)/1000
$.wO=s
e=r
if(typeof e!=="number")return e.e2()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.aL()
if(e>0.25)r=0.25
A.Ft(r)
$.ac.j().m0()
e=$.z.j()
d=$.ac.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ac.j().z
if(q!=null)$.z.j().setAttribute("data-controller-id",q)
else $.z.j().removeAttribute("data-controller-id")
A.Eq()
if(!$.mg&&$.bd==null){e=$.ek
d=r
if(typeof d!=="number")return A.ve(d)
d=$.ek=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e2()
c=c<10}else c=!1
if(!c)break
$.wT=$.ep()
if(!$.xo()){d=$.T.b
if(d===$.T)A.j(A.a5(""))
d.jS(0.008333333333333333)
d=$.AD()
c=$.T.b
if(c===$.T)A.j(A.a5(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.j(A.a5(""))
d=d.dl(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){o=d[a]
B.a.l($.d7,"clock:"+o.a)}d=$.AE()
c=$.T.b
if(c===$.T)A.j(A.a5(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.j(A.a5(""))
d=d.dl(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){n=d[a]
B.a.l($.d7,"service:"+n.a+":"+n.b)}}A.Fw()
d=$.aF.b
if(d===$.aF)A.j(A.a5(""))
c=$.T.b
if(c===$.T)A.j(A.a5(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.ao(d,!1,e)
a0.$flags=3
a1=a0
B.a.L(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.j(A.a5(""))
d.m6(a1)}A.Fs()
A.Fv()
A.Fu()
A.Fr(0.008333333333333333)
d=$.h4.b
if(d===$.h4)A.j(A.a5(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.c7.b
if(d===$.c7)A.j(A.a5(""))
m=d.a!==B.D
c=$.U.b
if(c===$.U)A.j(A.a5(""))
d.dk(0.008333333333333333,c)
if(m){d=$.c7.b
if(d===$.c7)A.j(A.a5(""))
d=d.e}else d=!1
if(d)A.zG(!0)
d=$.ek-0.008333333333333333
$.ek=d
c=p
if(typeof c!=="number")return c.ah()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.x5=A.yv($.AG(),$.ep(),l)
k=$.bs
if(k!=null){d=k
c=Math.sin($.cq)
b=Math.cos($.cq)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aK(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hk($.as)
for(e=$.d7.length,a=0;a<$.d7.length;$.d7.length===e||(0,A.t)($.d7),++a){j=$.d7[a]
A.Eb(k,j)}B.a.L($.d7)
$.z.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.z.j().setAttribute("data-audio-muffle01",B.c.aK(k.glw(),3))
e=$.z.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.z.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cI.j().fN($.w_(),$.cq,$.f7)
e=$.aR
if(e!=null){d=$.cI.j()
c=d.a
a3=new A.K(c.a,c.b,c.c)
c=d.b
a4=new A.K(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.y6(a3,a4,new A.K(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wb(a5,b,d.a,c)
e.p2=new A.fm(a6,a7,a7.an(0,a6),a3,a4,c,b,a5)}e=$.aR
if(e!=null)e.ht($.U.j(),$.as)
e=$.aR
if(e!=null)e.hj($.U.j(),$.as,$.w_(),$.bG.j().gef(),$.bG.j().gkS(),$.tO.j().dA($.T.j().gaa().a),A.Ge($.as),$.bG.j().b)
if($.zu!==$.c7.j().a){$.zu=$.c7.j().a
$.wW=$.wW+1}e=$.aR
if(e!=null){if($.xo())d=0
else{d=s
if(typeof d!=="number")return d.mO()
d/=1000}c=$.wW
b=A.e(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.j(A.ag(d,"timeSeconds",null))
if(b<0)A.j(A.x("frame clock seeds must be non-negative",null))
e.rx=d
e.ry=c
e.to=b}e=$.aR
if(e!=null){d=$.c7.j()
c=$.wV
b=$.tO.j().dA($.T.j().gaa().a)
a8=A.zD($.as)
a9=d.a
b0=d.gec()
b1=b0>0?B.c.D(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.bF
b4=$.hk()
b5=b4.H("post_exposure")
b6=b4.H("post_bloom")
b7=b4.H("post_vignette")
b8=b4.H("post_film_grain")
b9=b4.H("post_dither")
c0=b4.H("shadow_ao_intensity")
c1=a9===B.a2?0.45:b5
b4=b4.aP("shadow_ssdo_enable")?c0:0
if(d>=1)c2=a9===B.aI?b1:1
else c2=0
if(d>=2)d=a9===B.bE?b1:1
else d=0
c3=b2?320:0
c4=b2?5:8
c5=b3?1:0
c6=b3?b1:0
c7=b3?b1:0
c8=b3?b1:0
c9=b3?b1:0
d0=b3?b1:0
e.p4=new A.kw(c1,b6,b4,b7,b8,b.c,a8,b9,c2,d,c3,c4,c5,c6,c7,c8,c9,d0,c)}$.f4.j().bp(A.yg($.T.j().gfX()))
i=$.aR
if(i!=null){h=i.gle()
if(h!=null){$.z.j().setAttribute("data-renderer-frame-stats",h)
e=$.z.j()
d=i.gld()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.f6("running")
A.F_()
e=$.ac.j()
e.as=e.Q=0
d=e.c
d.a5(0,"WheelUp")
d.a5(0,"WheelDown")
e.d.L(0)
e.f.L(0)
A.e(A.a(v.G.window).requestAnimationFrame(A.W(A.A8())))}catch(d1){g=A.ak(d1)
f=A.cJ(d1)
A.uU(g,f)}},
Eb(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.fV("confirm")
$.bc.j().aM("interface confirmation")
break
case"ambient-winnow":a.dK("winnow",0.28)
$.bc.j().aM("wind moving through the house")
break
case"ambient-gate":a.dK("gate",0.22)
$.bc.j().aM("distant gate")
break
case"collapse":a.fV("collapse")
$.bc.j().aM("front door shudders and collapses")
break
case"clock:tick":A.mh(a,p,"tick")
break
case"clock:chime":A.mh(a,p,"chime")
break
case"clock:cuckoo":A.mh(a,p,"cuckoo")
break
case"clock:bell":A.mh(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mh(a,q,s[2])}}}},
mh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zp,g=$.mb
if(h==null||g==null)return
s=h.l5(b)
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
break A}if(q!=null)$.bc.j().aM(q)
q=$.U.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.k("sound room missing: "+o))
m=n.d.ah(0,s.d.an(0,p))
l=$.m6
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.k("sound emitter "+s.a+" has no cue for "+c))
a.m_(q,m,s.e,o)
return}q=$.zb
$.zb=q+1
o=A.AZ(B.dY,r,r+":"+q,m,A.DT(b,c),q,o)
q=$.as
q=A.AV($.w_(),q)
t.gG.a(B.bp)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.k("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.k("audio listener room missing: "+q))
j=l.h1(p,q,B.bp)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.k("audio cue family missing: "+q))
k=J.aC(i)
k=k.h(i,B.d.S(A.Fj(q,o.f),k.gt(i)))
o=o.e
A.ai(j.a,t.N)
a.fW(k,new A.f(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
DT(a,b){var s,r,q,p=$.T.j().b
for(s=new A.dQ(a+":"+b),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.A4(p,q==null?r.a(q):q)}return p},
Ft(a){var s=$.wI
if(s==null)return
s.textContent=""+B.c.aO(a>0?1/a:0)+" fps"},
Fr(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zL||$.bd!=null){$.mp().a=new A.f(0,0,0)
return}s=$.ac.j()
r=s.ct("moveLeft")?-1:0
if(s.ct("moveRight"))++r
q=s.ct("moveForward")?1:0
if(s.ct("moveBack"))--q
s=s.ay?s.w:new A.f(0,0,0)
p=new A.f(r,0,q).ah(0,s)
o=p.gt(0)>1?p.gau():p
$.ac.j().cW(b3)
n=$.ac.j().Q
m=$.ac.j().as
s=$.fb()
l=s.d?-1:1
k=s.e?-1:1
j=$.cq
i=$.ac.j()
i=i.ay?i.x:0
h=$.fb()
g=h.d?-1:1
$.cq=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.f7
h=$.ac.j()
l=h.ay?h.y:0
j=$.fb()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.f7=i
$.f7=B.c.D(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.f(i*Math.cos($.cq)+j*Math.sin($.cq),0,-i*Math.sin($.cq)+j*Math.cos($.cq)).gau().an(0,2)
j=$.mp()
if(!isFinite(b3)||b3<0)A.j(A.ag(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.j(A.ag(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.ah(0,f.ao(0,l).an(0,1-s))
j.a=s
d=$.j1.j().lx($.U.j(),$.as,$.ep(),s.an(0,b3))
$.wZ=d.a
if($.c7.j().a!==B.bG&&$.c7.j().a!==B.a2)$.as=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.AF()
$.x_=s.hF($.x_,$.ep().b,b3)
b=s.jT(b3,c)
s=$.ep()
l=$.x_
$.cI.j().fN(new A.f(s.a+b.a,l+b.b,s.c+b.c),$.cq,$.f7)
s=$.T.j().z
a=new A.q4(s)
s=$.cI.j()
l=$.U.j()
a0=A.Gd(a,s,$.as,l,$.mb)
l=a0.c
$.z0.j().hv(l)
a1=A.E(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xf($.cI.j(),$.U.j(),$.as)
break
case 1:a3=A.Ae($.cI.j(),$.U.j(),$.as)
break
case 2:a4=A.Af($.cI.j(),$.U.j(),$.as)
break
case 3:l=$.cI.j()
k=$.U.j()
j=$.mb
a5=A.Ad(l,$.as,k,j)
break
case 4:case 5:break}$.z_.j().mB($.fc().e0($.T.j().gaa().a,"status"),$.as==="living-room")
l=$.ac.j()
k=l.CW
if(k.bb(b2,l.d)||k.bb(b2,l.f)){l=$.T.j().gaa()
k=a3==null
j=k?b1:a3.a
i=B.a.a7($.aF.j().fn(21),$.aF.j().glp())
if(l.a===21&&j==="front-door"&&i){s=$.c7.j()
$.U.j()
s.hL(B.ez,A.ai(s.c,t.N))
B.a.l($.d7,"collapse")
A.hb("the front door opens on itself")}else if(a2!=null&&!a2.e){if(a2.d){a2.d=!1
$.bc.j().aM("mantle flame extinguished")}else if($.T.j().hI(1,1)){a2.d=!0
s=$.h4.j()
s.a=a2
s.b=2
if(a2.f!=null)a2.r=!0
$.bc.j().aM("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bc.j()
s.aM(a3.ax?"door opens":"door closes")
s=$.aR
if(s!=null)s.cL($.U.j(),a3.b)
s=$.aR
if(s!=null)s.dN($.U.j(),a3.a)
s=$.bs
if(s!=null)s.bu()}else if(a4!=null)if(a4.w){s=$.T.j()
if(s.f.cV(1)){a4.w=!1
$.bc.j().aM("shutter closes")}}else{a4.w=!0
$.bc.j().aM("shutter opens")}else if(s===B.cl){a6=a.e_()
s=A.D(a6)
l=t.E4
a7=A.bu(new A.G(a6,s.i("l(1)").a(new A.v1(a0)),s.i("G<1>")),l)
if(a7==null)a7=A.bu(a6,l)
if(a7!=null)$.bc.j().bK("noticed",a7.d)}else if(a5!=null){s=$.vZ()
if(!a5.x)A.j(A.k("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.z.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.b5(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.EW(a8)
s=$.bc.j()
s.bK("noticed",a9==null?"you inspect "+a8:a9)}}s=$.h4.j()
if(s.a!=null&&s.b>0){b0=$.h4.j().a
if(b0!=null&&A.xf($.cI.j(),$.U.j(),$.as)!==b0){s=$.h4.j()
s.a=null
s.b=0}}A.F6(b3,a0)},
F6(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="rgba(12, 10, 14, 0.92)",c0=$.el
if(c0==null)return
s=A.a($.z.j().getBoundingClientRect())
r=A.a4(s.width)
q=A.a4(s.height)
if(r<=0||q<=0)return
p=$.cK()
p.mA(c1)
o=$.AC()
n=o.c
if(n<1)o.c=Math.min(1,n+c1*6)
n=c2.c
m=n!=null
l=o.h9(n,m,$.az.j().y)
o=$.hk()
k=o.a
j=o.d
i=c1*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.U.j()
j=$.as
h=k.e.h(0,j)
k=!$.az.j().y&&$.bd==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.T.j().gaa()
b=$.bG.j().b
a=$.mo()
a0=a.y===B.cr
a1=h==null?null:h.a
if(a1==null)a1=$.as
a=a.z?$.fc().e0($.T.j().gaa().a,"status"):null
a2=c0.a
a2.c+=c1
a3=a2.d
B.a.L(a3)
a4=A.a4(A.a(v.G.window).devicePixelRatio)
a5=B.c.aC(r*a4)
a6=B.c.aC(q*a4)
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
A.aK(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aK(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aK(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.l0(n,q,r)}a2.l_(q,r,new A.pU(j,i,g,f,e,d,p))
b0=r-80-24
a2.aV("#d32f2f",2,8,b9,44,-0.08,160,b0,42)
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
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.dJ(B.d.p(b4),2,"0")+":"+B.b.dJ(B.d.p(b3),2,"0")+b5,b0,42)
a7.restore()
a2.aV("#c49a45",1.8,6,b9,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bQ(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
b8=r<640||q<540?78:76
a2.aV("#f5f0e6",1.5,6,b9,32,-0.04,b6,b7,b8)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bQ(a,b6-28),b7,b8)
a7.restore()}a2.kZ(l,q,r)
a2.l1(q,r,o)
a7.restore();++c0.b
p=$.z.j()
p.setAttribute("data-renderer-gui-frame",""+c0.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ai(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+c0.c+"x"+c0.d)},
EW(a){var s,r,q,p,o=$.T.j().z.b,n=A.o(o).i("J<1,2>"),m=A.I(new A.J(o,n),n.i("m.E"))
B.a.P(m,new A.uO())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.t)(m),++s){r=m[s]
n=$.fc().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Fw(){var s,r,q,p,o,n,m,l,k,j=null
if($.az.j().y||$.bd!=null||$.aF.j().r!=null)return
s=$.T.j().gaa()
for(r=$.aF.j().fn(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aF.b
if(m===$.aF)A.j(A.a5(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aF.b
if(r===$.aF)A.j(A.a5(""))
l=r.bU(n)
if(!(l instanceof A.l5))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xX(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mp().a=new A.f(0,0,0)
r=$.az.b
if(r===$.az)A.j(A.a5(""))
q=n.a
r.e8(q,k)
$.cK().bo(!0,B.b8,q,k)
A.zS(n)
return}},
F7(){var s,r,q=$.aF.j().r,p=q==null,o=p?null:q.gbk()
if(p||o==null)return
p=$.az.j()
s=q.a
r=s.a
p.e8(r,o)
$.cK().bo(!0,B.b8,r,o)
A.zS(s)
if(q.d!==B.a7)A.wS()
A.hb("restored visitor")},
zS(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.T.j().lf("stranger-17-eileen-case")
r=$.fc().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.ao(q,!0,t.N):B.o
p=A.bu(r,t.N)
if(s==null||p==null)return
$.bc.j().bK("inside the case",p+" \u201c"+s.d+"\u201d")},
Fs(){var s,r,q,p,o=$.T.j().gaa(),n=$.m1.j().l3(o.a,o.b)
if(n.length===0)return
s=B.a.gU(n)
$.m1.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bc.j().bK(q,s.e)
p=A.FC(r)
if(p!=null)B.a.l($.d7,"ambient-"+p)},
Fv(){var s,r,q,p,o=$.T.j().gaa()
if(o.b<20)return
s=o.a
if(!$.v0.l(0,s))return
r=$.fc().f
r===$&&A.p()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.ao(q,!0,t.N):B.o
p=A.Ga(r,$.T.j().b,s)
if(p!=null)$.bc.j().bK("noticed",p)},
zG(a){var s,r,q,p,o
if($.wH!=null)return
s=$.T.j().gaa()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("av<2>")
o=A.Bx(new A.nS(s.a,1-r,new A.G(new A.av(q,p),p.i("l(m.E)").a(new A.uV()),p.i("G<m.E>")).gt(0),$.T.j().r.d,a))
if(o==null)return
A.zC(o)
A.mj("ending recorded")},
zC(a){var s,r,q
$.wH=a
$.zL=!0
$.mp().a=new A.f(0,0,0)
A.jb($.iY.j())
s=a.a
r=$.fc().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.ao(q,!0,t.N):B.o
r=A.I(r,t.N)
B.a.I(r,A.C5($.T.j().z,s))
$.iY.j().hy(a,r)},
E_(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.ce
break A}if("through-door"===a){s=B.cf
break A}if("letterbox"===a){s=B.cg
break A}s=B.ae
break A}r=$.aF.j().kh(s)
if(s===B.aw){q=$.U.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aR
if(p!=null)p.cL($.U.j(),q.b)
p=$.aR
if(p!=null)p.dN($.U.j(),q.a)
p=$.bs
if(p!=null)p.bu()}}if(!(r instanceof A.l3)||s===B.ae){A.uk()
return}if(r.a.gbk()==null){A.wE()
A.uk()
return}A.wS()},
E6(){var s=$.aF.j().jU()
if(!(s instanceof A.il)||s.b){A.wE()
A.uk()
return}if(s.a.gbk()==null){A.wE()
A.uk()
return}A.wS()},
wS(){var s,r,q,p,o,n,m,l,k,j=$.aF.j().r,i=j==null,h=i?null:j.gbk()
if(i||h==null)return
s=$.aF.j().gbY()
if(s==null){$.az.j().hx(h)
$.cK().bo(!0,B.o,j.a.a,h)}else{r=j.w
i=r==null
$.az.j().e9(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.az.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aW(k.a,k.b))}m.hz(l,r)
o=$.cK()
m=j.a.a
o.bo(!0,i?q:B.o,m,h)
if(!i){i=A.D(p)
k=A.bu(new A.G(p,i.i("l(1)").a(new A.uR(r)),i.i("G<1>")),t.Y)
if(k!=null){i=$.az.j()
q=k.c
i.ea(h,q)
o.bo(!0,B.o,m,h+"\n\n"+q)}}}A.zR()},
E0(a){var s,r,q,p,o,n=$.aF.j().ki(a)
if(!(n instanceof A.l4))return
s=n.c
if(!$.T.j().jW(n.b,s))return
r=s.c
s=$.az.j()
q=n.a
p=q.gbk()
s.ea(p==null?"":p,r)
o=q.gbk()
if(o==null)o=""
$.cK().bo(!0,B.o,q.a.a,o+"\n\n"+r)
A.zR()
A.mj("saved after visitor answer")},
uk(){var s,r=$.az.j()
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
r=r.a
r.className="door"
r.setAttribute("hidden","")
r=$.cK()
r.a=null
r.b=""
r.e=A.c([],t.s)
r.c=1
r.r=r.f=null
r.w=!1
r.x=0
$.ac.j().cM($.z.j())},
zR(){var s,r,q,p,o=$.az.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.m3.j().e1(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.aW(p.a,B.a.gV(p.c).p(0)))}o.hw(n,m)},
E1(a){var s,r,q,p=$.aF.j().kj(a,!0,$.m3.j())
if(p==null)return
s=$.m3.j().kR(p,B.i6)
r=$.az.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.K.bB("",!0,q)},
wE(){var s,r=$.U.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aR
if(s!=null)s.cL($.U.j(),r.b)
s=$.aR
if(s!=null)s.dN($.U.j(),r.a)
s=$.bs
if(s!=null)s.bu()}},
Fu(){var s,r,q,p,o,n,m,l,k
for(s=$.U.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.c7.b
if(k===$.c7)A.j(A.a5(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Ge(a){var s,r,q,p,o,n,m,l=$.U.j().e.h(0,a)
if(l==null||$.bG.j().gef()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.m){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.l){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b>12}else n=!1
if(!n){if(o===B.x){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b<9}else n=!1
if(!n)if(o===B.G){o=$.bG.b
if(o===$.bG)A.j(A.a5(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zD(a){var s,r=$.U.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.bg
if(q.length===0)return 0.12
s=A.D(q)
return B.c.D(new A.G(q,s.i("l(1)").a(new A.uT()),s.i("G<1>")).gt(0)/q.length,0.12,1)},
fX:function fX(a,b){this.a=a
this.b=b},
lG:function lG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.p2=_.p1=null
_.p3=a6
_.p4=a7
_.R8=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=0
_.xr=!1
_.y1=null
_.c1=_.y2=0
_.c3=_.c2=null
_.la=$
_.fA=null
_.fB=0},
tA:function tA(a){this.a=a},
tB:function tB(a){this.a=a},
tC:function tC(a){this.a=a},
tw:function tw(){},
tx:function tx(){},
ty:function ty(){},
tz:function tz(){},
ts:function ts(){},
tt:function tt(){},
tu:function tu(){},
tv:function tv(){},
lF:function lF(a,b,c,d){var _=this
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
t5:function t5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
u3:function u3(){},
u4:function u4(){},
u5:function u5(){},
ub:function ub(){},
uc:function uc(){},
ud:function ud(){},
ue:function ue(){},
uf:function uf(){},
ug:function ug(a){this.a=a},
uh:function uh(a){this.a=a},
ui:function ui(a){this.a=a},
u6:function u6(a){this.a=a},
u7:function u7(){},
u8:function u8(){},
u9:function u9(){},
ua:function ua(){},
u0:function u0(){},
u1:function u1(){},
u2:function u2(){},
tX:function tX(){},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
uK:function uK(a,b){this.a=a
this.b=b},
uI:function uI(a){this.a=a},
uJ:function uJ(a){this.a=a},
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
uL:function uL(){},
uM:function uM(){},
uP:function uP(a){this.a=a},
uY:function uY(a){this.a=a},
v1:function v1(a){this.a=a},
uO:function uO(){},
uV:function uV(){},
uR:function uR(a){this.a=a},
uT:function uT(){},
xX(a,b,c,d,e,f){var s=a[b]()
return s},
pb(a,b,c){var s=null
return c.a(A.xX(a,b,s,s,s,s))},
vR(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.ag(b.glj(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gE().c.a9()
o=q*16
n=o+16
B.t.cT(s,o,n,p.a)
if(l)B.t.cT(r,o,n,p.dH().a)}m=a.a
A.v(m,"uInstanceModels",new A.y(B.dN,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.y(B.dN,r))
A.v(m,"uUseInstances",B.dO)},
Bk(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Bj(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
A4(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
FC(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b0(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
FS(a){var s,r,q,p,o,n,m,l=B.j.aF(a,null),k=t.f
if(!k.b(l))throw A.b(B.fX)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.n(s,t.P)
for(o=0;o<14;++o){n=B.j1[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.n(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.b(A.a3('text.json section "'+n+'" must be an object',null,null))}return p},
Ga(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaQ(a)
s=new A.ed()
s.bM((b^274953^c)>>>0)
r=s.aN(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.w5.prototype={}
J.k5.prototype={
a4(a,b){return a===b},
gN(a){return A.i2(a)},
p(a){return"Instance of '"+A.kz(a)+"'"},
ga3(a){return A.d8(A.wL(this))}}
J.k7.prototype={
p(a){return String(a)},
gN(a){return a?519018:218159},
ga3(a){return A.d8(t.y)},
$iaf:1,
$il:1}
J.hI.prototype={
a4(a,b){return null==b},
p(a){return"null"},
gN(a){return 0},
$iaf:1,
$iap:1}
J.hL.prototype={$iae:1}
J.dZ.prototype={
gN(a){return 0},
ga3(a){return B.lS},
p(a){return String(a)}}
J.kt.prototype={}
J.eR.prototype={}
J.dY.prototype={
p(a){var s=a[$.Ak()]
if(s==null)s=a[$.hh()]
if(s==null)return this.hN(a)
return"JavaScript function for "+J.da(s)},
$iey:1}
J.hK.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.hM.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.r.prototype={
cD(a,b){return new A.aV(a,A.D(a).i("@<1>").K(b).i("aV<1,2>"))},
l(a,b){A.D(a).c.a(b)
a.$flags&1&&A.bW(a,29)
a.push(b)},
ma(a,b){var s
a.$flags&1&&A.bW(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.yd(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bW(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ad(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.D(a).i("m<1>").a(b)
a.$flags&1&&A.bW(a,"addAll",2)
if(Array.isArray(b)){this.i9(a,b)
return}for(s=J.R(b);s.m();)a.push(s.gn())},
i9(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.at(a))
for(r=0;r<s;++r)a.push(b[r])},
L(a){a.$flags&1&&A.bW(a,"clear","clear")
a.length=0},
cb(a,b,c){var s=A.D(a)
return new A.N(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("N<1,2>"))},
Y(a,b){var s,r=A.e_(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bc(a,b,c,d){var s,r,q
d.a(b)
A.D(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.at(a))}return r},
aW(a,b,c){var s,r,q,p=A.D(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.at(a))}if(c!=null)return c.$0()
throw A.b(A.cy())},
ae(a,b){return this.aW(a,b,null)},
a0(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aR(a,b,c){var s=a.length
if(b>s)throw A.b(A.aY(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aY(c,b,s,"end",null))
if(b===c)return A.c([],A.D(a))
return A.c(a.slice(b,c),A.D(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cy())},
gV(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cy())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cy())
throw A.b(A.xS())},
M(a,b){var s,r
A.D(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.at(a))}return!1},
a7(a,b){var s,r
A.D(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.at(a))}return!0},
P(a,b){var s,r,q,p,o,n=A.D(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.bW(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Ez()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aL()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.he(b,2))
if(p>0)this.jq(a,p)},
X(a){return this.P(a,null)},
jq(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cU(a,b){var s,r,q,p
a.$flags&2&&A.bW(a,"shuffle")
s=a.length
while(s>1){r=b.aN(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bC(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.ad(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.ad(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gW(a){return a.length!==0},
p(a){return A.w4(a,"[","]")},
gu(a){return new J.eq(a,a.length,A.D(a).i("eq<1>"))},
gN(a){return A.i2(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bW(a,"set length","change the length of")
if(b<0)throw A.b(A.aY(b,0,null,"newLength",null))
if(b>a.length)A.D(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.va(a,b))
return a[b]},
k(a,b,c){A.D(a).c.a(c)
a.$flags&2&&A.bW(a)
if(!(b>=0&&b<a.length))throw A.b(A.va(a,b))
a[b]=c},
dX(a,b){return new A.dB(a,b.i("dB<0>"))},
dD(a,b){var s
A.D(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.d8(A.D(a))},
$iP:1,
$im:1,
$iC:1}
J.k6.prototype={
mz(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kz(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pc.prototype={}
J.eq.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia8:1}
J.fB.prototype={
G(a,b){var s
A.a4(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc7(b)
if(this.gc7(a)===s)return 0
if(this.gc7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc7(a){return a===0?1/a<0:a<0},
aC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.b9(""+a+".toInt()"))},
ke(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.b9(""+a+".ceil()"))},
aX(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.b9(""+a+".floor()"))},
aO(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.b9(""+a+".round()"))},
D(a,b,c){if(this.G(b,c)>0)throw A.b(A.x7(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
aK(a,b){var s
if(b>20)throw A.b(A.aY(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc7(a))return"-"+s
return s},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN(a){var s,r,q,p,o=a|0
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
a2(a,b){return(a|0)===a?a/b|0:this.jA(a,b)},
jA(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.b9("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
dj(a,b){var s
if(a>0)s=this.f7(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jy(a,b){if(0>b)throw A.b(A.x7(b))
return this.f7(a,b)},
f7(a,b){return b>31?0:a>>>b},
ga3(a){return A.d8(t.o)},
$ib4:1,
$iu:1,
$ibe:1}
J.hH.prototype={
ga3(a){return A.d8(t.S)},
$iaf:1,
$ii:1}
J.k8.prototype={
ga3(a){return A.d8(t.i)},
$iaf:1}
J.dX.prototype={
fm(a,b){return new A.lS(b,a,0)},
hJ(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hJ){s=b.e
s=!(s==null?b.e=b.ix():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iE(a,b)}},
bH(a,b,c,d){var s=A.kE(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iE(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.AM(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.ged()
n=p.gdz()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.F(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b1(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aY(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ac(a,b,0)},
F(a,b,c){return a.substring(b,A.kE(b,c,a.length))},
b1(a,b){return this.F(a,b,null)},
bf(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.BY(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.BZ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
an(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.ev)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dJ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.an(c,s)+a},
cG(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aY(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bC(a,b){return this.cG(a,b,0)},
q(a,b){return A.Gk(a,b,0)},
G(a,b){var s
A.q(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gN(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.d8(t.N)},
gt(a){return a.length},
$iaf:1,
$ib4:1,
$ipY:1,
$ih:1}
A.ea.prototype={
gu(a){return new A.hp(J.R(this.gb2()),A.o(this).i("hp<1,2>"))},
gt(a){return J.cL(this.gb2())},
gO(a){return J.mr(this.gb2())},
gW(a){return J.AP(this.gb2())},
a0(a,b){return A.o(this).y[1].a(J.mq(this.gb2(),b))},
gU(a){return A.o(this).y[1].a(J.xw(this.gb2()))},
q(a,b){return J.xv(this.gb2(),b)},
p(a){return J.da(this.gb2())}}
A.hp.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia8:1}
A.et.prototype={
gb2(){return this.a}}
A.iu.prototype={$iP:1}
A.is.prototype={
h(a,b){return this.$ti.y[1].a(J.aT(this.a,b))},
k(a,b,c){var s=this.$ti
J.bt(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.AQ(this.a,b)},
l(a,b){var s=this.$ti
J.hl(this.a,s.c.a(s.y[1].a(b)))},
P(a,b){var s
this.$ti.i("i(2,2)?").a(b)
s=b==null?null:new A.t6(this,b)
J.AR(this.a,s)},
$iP:1,
$iC:1}
A.t6.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.aV.prototype={
cD(a,b){return new A.aV(this.a,this.$ti.i("@<1>").K(b).i("aV<1,2>"))},
gb2(){return this.a}}
A.fC.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dQ.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.qE.prototype={}
A.P.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.aH(s,s.gt(s),A.o(s).i("aH<a1.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cy())
return this.a0(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.ad(r.a0(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.at(r))}return!1},
a7(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a0(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.at(q))}return!0},
M(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a0(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.at(q))}return!1},
Y(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.a0(0,0))
if(o!==p.gt(p))throw A.b(A.at(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.at(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.at(p))}return r.charCodeAt(0)==0?r:r}},
cP(a,b){return this.hM(0,A.o(this).i("l(a1.E)").a(b))},
cb(a,b,c){var s=A.o(this)
return new A.N(this,s.K(c).i("1(a1.E)").a(b),s.i("@<a1.E>").K(c).i("N<1,2>"))},
bJ(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.I(this,s)
else{s=A.I(this,s)
s.$flags=1
s=s}return s},
bI(a){return this.bJ(0,!0)},
bn(a){var s,r=this,q=A.w8(A.o(r).i("a1.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a0(0,s))
return q}}
A.ig.prototype={
giI(){var s=J.cL(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjz(){var s=J.cL(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cL(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a0(a,b){var s=this,r=s.gjz()+b
if(b<0||r>=s.giI())throw A.b(A.p2(b,s.gt(0),s,"index"))
return J.mq(s.a,r)},
bJ(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aC(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xV(0,n):J.xU(0,n)}r=A.e_(s,m.a0(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a0(n,o+q))
if(m.gt(n)<l)throw A.b(A.at(p))}return r},
bI(a){return this.bJ(0,!0)}}
A.aH.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aC(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.at(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a0(q,s);++r.c
return!0},
$ia8:1}
A.cA.prototype={
gu(a){return new A.hR(J.R(this.a),this.b,A.o(this).i("hR<1,2>"))},
gt(a){return J.cL(this.a)},
gO(a){return J.mr(this.a)},
gU(a){return this.b.$1(J.xw(this.a))},
a0(a,b){return this.b.$1(J.mq(this.a,b))}}
A.df.prototype={$iP:1}
A.hR.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia8:1}
A.N.prototype={
gt(a){return J.cL(this.a)},
a0(a,b){return this.b.$1(J.mq(this.a,b))}}
A.G.prototype={
gu(a){return new A.S(J.R(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia8:1}
A.hz.prototype={
gu(a){return new A.hA(J.R(this.a),this.b,B.eo,this.$ti.i("hA<1,2>"))}}
A.hA.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.R(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia8:1}
A.hx.prototype={
m(){return!1},
gn(){throw A.b(A.cy())},
$ia8:1}
A.dB.prototype={
gu(a){return new A.io(J.R(this.a),this.$ti.i("io<1>"))}}
A.io.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia8:1}
A.au.prototype={
st(a,b){throw A.b(A.b9("Cannot change the length of a fixed-length list"))},
l(a,b){A.bU(a).i("au.E").a(b)
throw A.b(A.b9("Cannot add to a fixed-length list"))}}
A.d1.prototype={
k(a,b,c){A.o(this).i("d1.E").a(c)
throw A.b(A.b9("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.b9("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("d1.E").a(b)
throw A.b(A.b9("Cannot add to an unmodifiable list"))},
P(a,b){A.o(this).i("i(d1.E,d1.E)?").a(b)
throw A.b(A.b9("Cannot modify an unmodifiable list"))}}
A.fS.prototype={}
A.eM.prototype={
gt(a){return J.cL(this.a)},
a0(a,b){var s=this.a,r=J.aC(s)
return r.a0(s,r.gt(s)-1-b)}}
A.iW.prototype={}
A.aW.prototype={$r:"+(1,2)",$s:1}
A.f2.prototype={$r:"+height,width(1,2)",$s:2}
A.iG.prototype={$r:"+influence,light(1,2)",$s:3}
A.ay.prototype={$r:"+(1,2,3)",$s:4}
A.b0.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iH.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iI.prototype={$r:"+(1,2,3,4)",$s:8}
A.hr.prototype={}
A.fq.prototype={
gO(a){return this.gt(this)===0},
gW(a){return this.gt(this)!==0},
p(a){return A.w9(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.Bc()},
gJ(){return new A.cn(this.l9(),A.o(this).i("cn<L<1,2>>"))},
l9(){var s=this
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
bE(a,b,c,d){var s=A.n(c,d)
this.ar(0,new A.ns(this,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.ns.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a2.prototype={
gt(a){return this.b.length},
geO(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
ar(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geO()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga1(){return new A.eZ(this.geO(),this.$ti.i("eZ<1>"))},
gaD(){return new A.eZ(this.b,this.$ti.i("eZ<2>"))}}
A.eZ.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f_(s,s.length,this.$ti.i("f_<1>"))}}
A.f_.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia8:1}
A.cR.prototype={
bt(){var s=this,r=s.$map
if(r==null){r=new A.hN(s.$ti.i("hN<1,2>"))
A.zY(s.a,r)
s.$map=r}return r},
R(a){return this.bt().R(a)},
h(a,b){return this.bt().h(0,b)},
ar(a,b){this.$ti.i("~(1,2)").a(b)
this.bt().ar(0,b)},
ga1(){var s=this.bt()
return new A.aa(s,A.o(s).i("aa<1>"))},
gaD(){var s=this.bt()
return new A.av(s,A.o(s).i("av<2>"))},
gt(a){return this.bt().a}}
A.hs.prototype={
l(a,b){A.o(this).c.a(b)
A.Bd()}}
A.aL.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gW(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f_(s,s.length,r.$ti.i("f_<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bn(a){return A.ke(this,this.$ti.c)}}
A.qc.prototype={
$0(){return B.c.aX(1000*this.a.now())},
$S:36}
A.i8.prototype={}
A.rB.prototype={
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
A.hY.prototype={
p(a){return"Null check operator used on a null value"}}
A.k9.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kY.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pR.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hy.prototype={}
A.iK.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icZ:1}
A.dP.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Ai(r==null?"unknown":r)+"'"},
ga3(a){var s=A.x9(this)
return A.d8(s==null?A.bU(this):s)},
$iey:1,
gmN(){return this},
$C:"$1",
$R:1,
$D:null}
A.jv.prototype={$C:"$0",$R:0}
A.jw.prototype={$C:"$2",$R:2}
A.kU.prototype={}
A.kR.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Ai(s)+"'"}}
A.fj.prototype={
a4(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fj))return!1
return this.$_target===b.$_target&&this.a===b.a},
gN(a){return(A.mn(this.a)^A.i2(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kz(this.a)+"'")}}
A.kI.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gW(a){return this.a!==0},
ga1(){return new A.aa(this,A.o(this).i("aa<1>"))},
gaD(){return new A.av(this,A.o(this).i("av<2>"))},
gJ(){return new A.J(this,A.o(this).i("J<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lk(a)},
lk(a){var s=this.d
if(s==null)return!1
return this.c6(s[this.c5(a)],a)>=0},
I(a,b){A.o(this).i("X<1,2>").a(b).ar(0,new A.pl(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ll(b)},
ll(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c5(a)]
r=this.c6(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ei(s==null?q.b=q.df():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ei(r==null?q.c=q.df():r,b,c)}else q.ln(b,c)},
ln(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.df()
r=o.c5(a)
q=s[r]
if(q==null)s[r]=[o.dg(a,b)]
else{p=o.c6(q,a)
if(p>=0)q[p].b=b
else q.push(o.dg(a,b))}},
cd(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.i7(this.c,b)
else return this.lm(b)},
lm(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c5(a)
r=n[s]
q=o.c6(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eg(p)
if(r.length===0)delete n[s]
return p.b},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cX()}},
ar(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.at(q))
s=s.c}},
ei(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dg(b,c)
else s.b=c},
i7(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.eg(s)
delete a[b]
return s.b},
cX(){this.r=this.r+1&1073741823},
dg(a,b){var s=this,r=A.o(s),q=new A.px(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cX()
return q},
eg(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cX()},
c5(a){return J.aA(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
p(a){return A.w9(this)},
df(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iw7:1}
A.pl.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.px.prototype={}
A.aa.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
q(a,b){return this.a.R(b)}}
A.cg.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia8:1}
A.av.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ah(s,s.r,s.e,this.$ti.i("ah<1>"))}}
A.ah.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia8:1}
A.J.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cz(s,s.r,s.e,this.$ti.i("cz<1,2>"))}}
A.cz.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$ia8:1}
A.hN.prototype={
c5(a){return A.FN(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1}}
A.vf.prototype={
$1(a){return this.a(a)},
$S:13}
A.vg.prototype={
$2(a,b){return this.a(a,b)},
$S:126}
A.vh.prototype={
$1(a){return this.a(A.q(a))},
$S:34}
A.bq.prototype={
ga3(a){return A.d8(this.eL())},
eL(){return A.FX(this.$r,this.cs())},
p(a){return this.fd(!1)},
fd(a){var s,r,q,p,o,n=this.iM(),m=this.cs(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.ya(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iM(){var s,r=this.$s
while($.tD.length<=r)B.a.l($.tD,null)
s=$.tD[r]
if(s==null){s=this.iw()
B.a.k($.tD,r,s)}return s},
iw(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.xT(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.ee.prototype={
cs(){return[this.a,this.b]},
a4(a,b){if(b==null)return!1
return b instanceof A.ee&&this.$s===b.$s&&J.ad(this.a,b.a)&&J.ad(this.b,b.b)},
gN(a){return A.cC(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ef.prototype={
cs(){return[this.a,this.b,this.c]},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.ef&&s.$s===b.$s&&J.ad(s.a,b.a)&&J.ad(s.b,b.b)&&J.ad(s.c,b.c)},
gN(a){var s=this
return A.cC(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fW.prototype={
cs(){return this.a},
a4(a,b){if(b==null)return!1
return b instanceof A.fW&&this.$s===b.$s&&A.Di(this.a,b.a)},
gN(a){return A.cC(this.$s,A.C9(this.a),B.f,B.f,B.f,B.f)}}
A.hJ.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gj1(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xZ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
ix(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fm(a,b){return new A.lg(this,b,0)},
iL(a,b){var s,r=this.gj1()
if(r==null)r=A.f5(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lB(s)},
$ipY:1,
$iCp:1}
A.lB.prototype={
ged(){return this.b.index},
gdz(){var s=this.b
return s.index+s[0].length},
$ifF:1,
$ii3:1}
A.lg.prototype={
gu(a){return new A.lh(this.a,this.b,this.c)}}
A.lh.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iL(l,s)
if(p!=null){m.d=p
o=p.gdz()
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
$ia8:1}
A.ie.prototype={
gdz(){return this.a+this.c.length},
$ifF:1,
ged(){return this.a}}
A.lS.prototype={
gu(a){return new A.lT(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ie(r,s)
throw A.b(A.cy())}}
A.lT.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ie(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia8:1}
A.t7.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a5(""))
return s}}
A.fH.prototype={
ga3(a){return B.lL},
$iaf:1}
A.fG.prototype={$ifG:1}
A.hW.prototype={
iV(a,b,c,d){var s=A.aY(b,0,c,d,null)
throw A.b(s)},
eq(a,b,c,d){if(b>>>0!==b||b>c)this.iV(a,b,c,d)}}
A.ki.prototype={
ga3(a){return B.lM},
$iaf:1}
A.b6.prototype={
gt(a){return a.length},
f4(a,b,c,d,e){var s,r,q=a.length
this.eq(a,b,q,"start")
this.eq(a,c,q,"end")
if(b>c)throw A.b(A.aY(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.x(e,null))
r=d.length
if(r-e<s)throw A.b(A.k("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibZ:1}
A.hU.prototype={
h(a,b){A.dG(b,a,a.length)
return a[b]},
k(a,b,c){A.br(c)
a.$flags&2&&A.bW(a)
A.dG(b,a,a.length)
a[b]=c},
cT(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bW(a,5)
this.f4(a,b,c,d,0)
return},
$iP:1,
$im:1,
$iC:1}
A.hV.prototype={
k(a,b,c){A.e(c)
a.$flags&2&&A.bW(a)
A.dG(b,a,a.length)
a[b]=c},
hr(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bW(a,5)
this.f4(a,b,c,d,e)
return},
$iP:1,
$im:1,
$iC:1}
A.hT.prototype={
ga3(a){return B.lN},
aR(a,b,c){return new Float32Array(a.subarray(b,A.DY(b,c,a.length)))},
$iaf:1,
$io1:1}
A.kj.prototype={
ga3(a){return B.lO},
$iaf:1}
A.kk.prototype={
ga3(a){return B.lP},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1}
A.kl.prototype={
ga3(a){return B.lQ},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1}
A.km.prototype={
ga3(a){return B.lR},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1}
A.kn.prototype={
ga3(a){return B.lU},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1,
$iwl:1}
A.ko.prototype={
ga3(a){return B.lV},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1}
A.eF.prototype={
ga3(a){return B.lW},
gt(a){return a.length},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1,
$ieF:1}
A.hX.prototype={
ga3(a){return B.lX},
gt(a){return a.length},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iaf:1,
$iii:1}
A.iB.prototype={}
A.iC.prototype={}
A.iD.prototype={}
A.iE.prototype={}
A.cE.prototype={
i(a){return A.iO(v.typeUniverse,this,a)},
K(a){return A.yQ(v.typeUniverse,this,a)}}
A.lu.prototype={}
A.lW.prototype={
p(a){return A.bM(this.a,null)}}
A.ls.prototype={
p(a){return this.a}}
A.h0.prototype={$idx:1}
A.t2.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:26}
A.t1.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:65}
A.t3.prototype={
$0(){this.a.$0()},
$S:14}
A.t4.prototype={
$0(){this.a.$0()},
$S:14}
A.tG.prototype={
i6(a,b){if(self.setTimeout!=null)self.setTimeout(A.he(new A.tH(this,b),0),a)
else throw A.b(A.b9("`setTimeout()` not found."))}}
A.tH.prototype={
$0(){this.b.$0()},
$S:0}
A.li.prototype={
dm(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d_(a)
else{s=r.a
if(q.i("bY<1>").b(a))s.eo(a)
else s.cq(a)}},
dn(a,b){var s=this.a
if(this.b)s.bi(new A.b2(a,b))
else s.co(new A.b2(a,b))}}
A.tT.prototype={
$1(a){return this.a.$2(0,a)},
$S:23}
A.tU.prototype={
$2(a,b){this.a.$2(1,new A.hy(a,t.l.a(b)))},
$S:171}
A.v5.prototype={
$2(a,b){this.a(A.e(a),b)},
$S:170}
A.cH.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
js(a,b){var s,r,q
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
o.d=null}q=o.js(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yL
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
o.a=A.yL
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.k("sync*"))}return!1},
mQ(a){var s,r,q=this
if(a instanceof A.cn){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.R(a)
return 2}},
$ia8:1}
A.cn.prototype={
gu(a){return new A.cH(this.a(),this.$ti.i("cH<1>"))}}
A.b2.prototype={
p(a){return A.w(this.a)},
$ial:1,
gbL(){return this.b}}
A.o9.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ew(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ak(p)
q=A.cJ(p)
l=r
o=q
n=A.wM(l,o)
l=new A.b2(l,o)
m.b.bi(l)
return}m.b.ew(s)}},
$S:0}
A.oc.prototype={
$2(a,b){var s,r,q=this
A.f5(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bi(new A.b2(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bi(new A.b2(r,s))}},
$S:159}
A.ob.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bt(r,k.b,a)
if(J.ad(s,0)){q=A.c([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hl(q,l)}k.c.cq(q)}}else if(J.ad(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bi(new A.b2(q,o))}},
$S(){return this.d.i("ap(0)")}}
A.lm.prototype={
dn(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.co(A.Ey(a,b))},
fq(a){return this.dn(a,null)}}
A.iq.prototype={
dm(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.d_(r.i("1/").a(a))}}
A.dC.prototype={
lv(a){if((this.c&15)!==6)return!0
return this.b.b.dU(t.bl.a(this.d),a.a,t.y,t.K)},
lg(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mv(q,m,a.b,o,n,t.l)
else p=l.dU(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ak(s))){if((r.c&1)!==0)throw A.b(A.x("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.x("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aq.prototype={
dV(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.am
if(s===B.w){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.ag(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.zE(b,s)}r=new A.aq(s,c.i("aq<0>"))
this.cn(new A.dC(r,3,a,b,q.i("@<1>").K(c).i("dC<1,2>")))
return r},
fb(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.aq($.am,c.i("aq<0>"))
this.cn(new A.dC(s,19,a,b,r.i("@<1>").K(c).i("dC<1,2>")))
return s},
jv(a){this.a=this.a&1|16
this.c=a},
cp(a){this.a=a.a&30|this.a&1
this.c=a.c},
cn(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cn(a)
return}r.cp(s)}A.mi(null,null,r.b,t.O.a(new A.ta(r,a)))}},
eW(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.eW(a)
return}m.cp(n)}l.a=m.cz(a)
A.mi(null,null,m.b,t.O.a(new A.tf(l,m)))}},
bS(){var s=t.F.a(this.c)
this.c=null
return this.cz(s)},
cz(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ew(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bY<1>").b(a))A.td(a,r,!0)
else{s=r.bS()
q.c.a(a)
r.a=8
r.c=a
A.eX(r,s)}},
cq(a){var s,r=this
r.$ti.c.a(a)
s=r.bS()
r.a=8
r.c=a
A.eX(r,s)},
iv(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bS()
q.cp(a)
A.eX(q,r)},
bi(a){var s=this.bS()
this.jv(a)
A.eX(this,s)},
d_(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bY<1>").b(a)){this.eo(a)
return}this.ie(a)},
ie(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mi(null,null,s.b,t.O.a(new A.tc(s,a)))},
eo(a){A.td(this.$ti.i("bY<1>").a(a),this,!1)
return},
co(a){this.a^=2
A.mi(null,null,this.b,t.O.a(new A.tb(this,a)))},
$ibY:1}
A.ta.prototype={
$0(){A.eX(this.a,this.b)},
$S:0}
A.tf.prototype={
$0(){A.eX(this.b,this.a.a)},
$S:0}
A.te.prototype={
$0(){A.td(this.a.a,this.b,!0)},
$S:0}
A.tc.prototype={
$0(){this.a.cq(this.b)},
$S:0}
A.tb.prototype={
$0(){this.a.bi(this.b)},
$S:0}
A.ti.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mu(t.pF.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.cJ(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mI(q)
n=k.a
n.c=new A.b2(q,o)
q=n}q.b=!0
return}if(j instanceof A.aq&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aq){m=k.b.a
l=new A.aq(m.b,m.$ti)
j.dV(new A.tj(l,m),new A.tk(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tj.prototype={
$1(a){this.a.iv(this.b)},
$S:26}
A.tk.prototype={
$2(a,b){A.f5(a)
t.l.a(b)
this.a.bi(new A.b2(a,b))},
$S:157}
A.th.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dU(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.cJ(l)
q=s
p=r
if(p==null)p=A.mI(q)
o=this.a
o.c=new A.b2(q,p)
o.b=!0}},
$S:0}
A.tg.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lv(s)&&p.a.e!=null){p.c=p.a.lg(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.cJ(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mI(p)
m=l.b
m.c=new A.b2(p,n)
p=m}p.b=!0}},
$S:0}
A.lj.prototype={}
A.lR.prototype={}
A.iV.prototype={$iyD:1}
A.lK.prototype={
mw(a){var s,r,q
t.O.a(a)
try{if(B.w===$.am){a.$0()
return}A.zJ(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.cJ(q)
A.wX(A.f5(s),t.l.a(r))}},
fp(a){return new A.tE(this,t.O.a(a))},
mu(a,b){b.i("0()").a(a)
if($.am===B.w)return a.$0()
return A.zJ(null,null,this,a,b)},
dU(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.am===B.w)return a.$1(b)
return A.Fb(null,null,this,a,b,c,d)},
mv(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.am===B.w)return a.$2(b,c)
return A.Fa(null,null,this,a,b,c,d,e,f)},
fZ(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tE.prototype={
$0(){return this.a.mw(this.b)},
$S:0}
A.uW.prototype={
$0(){A.BC(this.a,this.b)},
$S:0}
A.iv.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gW(a){return this.a!==0},
ga1(){return new A.eY(this,this.$ti.i("eY<1>"))},
gaD(){var s=this.$ti
return A.kf(new A.eY(this,s.i("eY<1>")),new A.tm(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iA(a)},
iA(a){var s=this.d
if(s==null)return!1
return this.bj(this.eK(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yF(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yF(q,b)
return r}else return this.iP(b)},
iP(a){var s,r,q=this.d
if(q==null)return null
s=this.eK(q,a)
r=this.bj(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eu(s==null?m.b=A.wp():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eu(r==null?m.c=A.wp():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wp()
p=A.mn(b)&1073741823
o=q[p]
if(o==null){A.wq(q,p,[b,c]);++m.a
m.e=null}else{n=m.bj(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ar(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ev()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.at(m))}},
ev(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.e_(i.a,null,!1,t.z)
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
eu(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wq(a,b,c)},
eK(a,b){return a[A.mn(b)&1073741823]}}
A.tm.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.ix.prototype={
bj(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eY.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iw(s,s.ev(),this.$ti.i("iw<1>"))},
q(a,b){return this.a.R(b)}}
A.iw.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.at(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia8:1}
A.cm.prototype={
eT(){return new A.cm(A.o(this).i("cm<1>"))},
gu(a){var s=this,r=new A.f0(s,s.r,A.o(s).i("f0<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gW(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iz(b)},
iz(a){var s=this.d
if(s==null)return!1
return this.bj(s[this.d3(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.k("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.es(s==null?q.b=A.wr():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.es(r==null?q.c=A.wr():r,b)}else return q.i8(b)},
i8(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wr()
r=p.d3(a)
q=s[r]
if(q==null)s[r]=[p.d2(a)]
else{if(p.bj(q,a)>=0)return!1
q.push(p.d2(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eX(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eX(s.c,b)
else return s.jp(b)},
jp(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d3(a)
r=n[s]
q=o.bj(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ff(p)
return!0},
iN(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.at(n))
if(!0===o)n.a5(0,r)}},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.de()}},
es(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d2(b)
return!0},
eX(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.ff(s)
delete a[b]
return!0},
de(){this.r=this.r+1&1073741823},
d2(a){var s,r=this,q=new A.lA(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.de()
return q},
ff(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.de()},
d3(a){return J.aA(a)&1073741823},
bj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
$iy4:1}
A.lA.prototype={}
A.f0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.at(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia8:1}
A.py.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:155}
A.V.prototype={
gu(a){return new A.aH(a,this.gt(a),A.bU(a).i("aH<V.E>"))},
a0(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gW(a){return!this.gO(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cy())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.ad(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.at(a))}return!1},
a7(a,b){var s,r
A.bU(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.b(A.at(a))}return!0},
M(a,b){var s,r
A.bU(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.b(A.at(a))}return!1},
Y(a,b){var s
if(this.gt(a)===0)return""
s=A.wj("",a,b)
return s.charCodeAt(0)==0?s:s},
dX(a,b){return new A.dB(a,b.i("dB<0>"))},
cb(a,b,c){var s=A.bU(a)
return new A.N(a,s.K(c).i("1(V.E)").a(b),s.i("@<V.E>").K(c).i("N<1,2>"))},
l(a,b){var s
A.bU(a).i("V.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cD(a,b){return new A.aV(a,A.bU(a).i("@<V.E>").K(b).i("aV<1,2>"))},
P(a,b){var s,r=A.bU(a)
r.i("i(V.E,V.E)?").a(b)
s=b==null?A.FM():b
A.kN(a,0,this.gt(a)-1,s,r.i("V.E"))},
lb(a,b,c,d){var s
A.bU(a).i("V.E?").a(d)
A.kE(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.w4(a,"[","]")},
$iP:1,
$im:1,
$iC:1}
A.a6.prototype={
ar(a,b){var s,r,q,p=A.o(this)
p.i("~(a6.K,a6.V)").a(b)
for(s=this.ga1(),s=s.gu(s),p=p.i("a6.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga1().cb(0,new A.pA(this),A.o(this).i("L<a6.K,a6.V>"))},
bE(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("L<1,2>(a6.K,a6.V)").a(b)
s=A.n(c,d)
for(r=this.ga1(),r=r.gu(r),n=n.i("a6.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
jQ(a){var s,r
for(s=J.R(A.o(this).i("m<L<a6.K,a6.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga1().q(0,a)},
gt(a){var s=this.ga1()
return s.gt(s)},
gO(a){var s=this.ga1()
return s.gO(s)},
gW(a){var s=this.ga1()
return s.gW(s)},
gaD(){return new A.iy(this,A.o(this).i("iy<a6.K,a6.V>"))},
p(a){return A.w9(this)},
$iX:1}
A.pA.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a6.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a6.V").a(s)
return new A.L(a,s,r.i("L<a6.K,a6.V>"))},
$S(){return A.o(this.a).i("L<a6.K,a6.V>(a6.K)")}}
A.pB.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:42}
A.iy.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gW(a){var s=this.a
return s.gW(s)},
gU(a){var s=this.a,r=s.ga1()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga1()
return new A.iz(r.gu(r),s,this.$ti.i("iz<1,2>"))}}
A.iz.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia8:1}
A.iP.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.b9("Cannot modify unmodifiable map"))}}
A.fE.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
ar(a,b){this.a.ar(0,A.o(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gW(a){var s=this.a
return s.gW(s)},
gt(a){var s=this.a
return s.gt(s)},
ga1(){return this.a.ga1()},
p(a){return this.a.p(0)},
gaD(){return this.a.gaD()},
gJ(){return this.a.gJ()},
bE(a,b,c,d){return this.a.bE(0,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.e7.prototype={}
A.dt.prototype={
gO(a){return this.gt(this)===0},
gW(a){return this.gt(this)!==0},
I(a,b){var s
for(s=J.R(A.o(this).i("m<1>").a(b));s.m();)this.l(0,s.gn())},
bl(a){var s,r,q=this.bn(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a5(0,r)}return q},
p(a){return A.w4(this,"{","}")},
a7(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Y(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.da(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cy())
return s.gn()},
a0(a,b){var s,r
A.kD(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.p2(b,b-r,this,"index"))},
$iP:1,
$im:1,
$ie4:1}
A.iJ.prototype={
bl(a){var s,r,q,p=this,o=p.eT()
for(s=A.fU(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bn(a){var s=this.eT()
s.I(0,this)
return s}}
A.lX.prototype={
l(a,b){this.$ti.c.a(b)
return A.Du()}}
A.fT.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fU(s,s.r,A.o(s).c)},
bn(a){return this.a.bn(0)}}
A.h1.prototype={}
A.iQ.prototype={}
A.ly.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jk(b):s}},
gt(a){return this.b==null?this.c.a:this.bq().length},
gO(a){return this.gt(0)===0},
gW(a){return this.gt(0)>0},
ga1(){if(this.b==null){var s=this.c
return new A.aa(s,A.o(s).i("aa<1>"))}return new A.lz(this)},
gaD(){var s,r=this
if(r.b==null){s=r.c
return new A.av(s,A.o(s).i("av<2>"))}return A.kf(r.bq(),new A.to(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.q(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jH().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ar(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.ar(0,b)
s=o.bq()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uj(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.at(o))}},
bq(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jH(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bq()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.L(r)
n.a=n.b=null
return n.c=s},
jk(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uj(this.a[a])
return this.b[a]=s}}
A.to.prototype={
$1(a){return this.a.h(0,A.q(a))},
$S:34}
A.lz.prototype={
gt(a){return this.a.gt(0)},
a0(a,b){var s=this.a
if(s.b==null)s=s.ga1().a0(0,b)
else{s=s.bq()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga1()
s=s.gu(s)}else{s=s.bq()
s=new J.eq(s,s.length,A.D(s).i("eq<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tL.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:45}
A.tK.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:45}
A.jp.prototype={
ly(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kE(a4,a5,a2)
s=$.Aw()
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bl("")
g=o}else g=o
g.a+=B.b.F(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.a3("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.F(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xy(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.a3(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bH(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xy(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.a3(a1,a3,a5))
if(b>1)a3=B.b.bH(a3,a5,a5,b===2?"==":"=")}return a3}}
A.na.prototype={}
A.eu.prototype={}
A.jB.prototype={}
A.jK.prototype={}
A.hO.prototype={
p(a){var s=A.jL(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kb.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.ka.prototype={
aF(a,b){var s=A.EZ(a,this.gkU().a)
return s},
ab(a,b){var s=A.Da(a,this.gl6().b,null)
return s},
gl6(){return B.ib},
gkU(){return B.ia}}
A.pn.prototype={}
A.pm.prototype={}
A.tq.prototype={
h7(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.F(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.F(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.F(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.F(a,r,m)},
d0(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.kb(a,null))}B.a.l(s,a)},
cQ(a){var s,r,q,p,o=this
if(o.h6(a))return
o.d0(a)
try{s=o.b.$1(a)
if(!o.h6(s)){q=A.y0(a,null,o.geV())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ak(p)
q=A.y0(a,r,o.geV())
throw A.b(q)}},
h6(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.h7(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d0(a)
q.mL(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d0(a)
r=q.mM(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
mL(a){var s,r,q=this.c
q.a+="["
s=J.aC(a)
if(s.gW(a)){this.cQ(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cQ(s.h(a,r))}}q.a+="]"},
mM(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e_(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ar(0,new A.tr(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.h7(A.q(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cQ(r[n])}p.a+="}"
return!0}}
A.tr.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:42}
A.tp.prototype={
geV(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.l1.prototype={}
A.rG.prototype={
kn(a){return new A.tJ(this.a).iB(t.J.a(a),0,null,!0)}}
A.tJ.prototype={
iB(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.kE(b,c,J.cL(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DL(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DK(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.d5(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.DM(o)
l.b=0
throw A.b(A.a3(m,a,p+l.c))}return n},
d5(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a2(b+c,2)
r=q.d5(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.d5(a,s,c,d)}return q.kT(a,b,c,d)},
kT(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bl(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.ym(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
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
gN(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
p(a){var s=this,r=A.Bh(A.Cl(s)),q=A.jD(A.Cj(s)),p=A.jD(A.Cf(s)),o=A.jD(A.Cg(s)),n=A.jD(A.Ci(s)),m=A.jD(A.Ck(s)),l=A.xF(A.Ch(s)),k=s.b,j=k===0?"":A.xF(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.dR.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.dR&&this.a===b.a},
gN(a){return B.d.gN(this.a)},
G(a,b){return B.d.G(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a2(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a2(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.dJ(B.d.p(o%1e6),6,"0")},
$ib4:1}
A.lr.prototype={
p(a){return this.v()},
$iB:1}
A.al.prototype={
gbL(){return A.Ce(this)}}
A.jl.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jL(s)
return"Assertion failed"}}
A.dx.prototype={}
A.ct.prototype={
gd9(){return"Invalid argument"+(!this.a?"(s)":"")},
gd8(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gd9()+q+o
if(!s.a)return n
return n+s.gd8()+": "+A.jL(s.gdE())},
gdE(){return this.b}}
A.fK.prototype={
gdE(){return A.wz(this.b)},
gd9(){return"RangeError"},
gd8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.k2.prototype={
gdE(){return A.e(this.b)},
gd9(){return"RangeError"},
gd8(){if(A.e(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.ij.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kX.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fQ.prototype={
p(a){return"Bad state: "+this.a}}
A.jy.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jL(s)+"."}}
A.kq.prototype={
p(a){return"Out of Memory"},
gbL(){return null},
$ial:1}
A.ic.prototype={
p(a){return"Stack Overflow"},
gbL(){return null},
$ial:1}
A.t8.prototype={
p(a){return"Exception: "+this.a}}
A.F.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.F(e,0,75)+"..."
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
k=""}return g+l+B.b.F(e,i,j)+k+"\n"+B.b.an(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.m.prototype={
cD(a,b){return A.B6(this,A.o(this).i("m.E"),b)},
cb(a,b,c){var s=A.o(this)
return A.kf(this,s.K(c).i("1(m.E)").a(b),s.i("m.E"),c)},
cP(a,b){var s=A.o(this)
return new A.G(this,s.i("l(m.E)").a(b),s.i("G<m.E>"))},
dX(a,b){return new A.dB(this,b.i("dB<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.ad(s.gn(),b))return!0
return!1},
bc(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,m.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a7(a,b){var s
A.o(this).i("l(m.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Y(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.da(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.da(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.da(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.o(this).i("l(m.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bJ(a,b){var s=A.I(this,A.o(this).i("m.E"))
return s},
bI(a){return this.bJ(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gW(a){return!this.gO(this)},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cy())
return s.gn()},
gaQ(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cy())
s=r.gn()
if(r.m())throw A.b(A.xS())
return s},
aW(a,b,c){var s,r=A.o(this)
r.i("l(m.E)").a(b)
r.i("m.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cy())},
ae(a,b){return this.aW(0,b,null)},
a0(a,b){var s,r
A.kD(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.p2(b,b-r,this,"index"))},
p(a){return A.BW(this,"(",")")}}
A.L.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.ap.prototype={
gN(a){return A.H.prototype.gN.call(this,0)},
p(a){return"null"}}
A.H.prototype={$iH:1,
a4(a,b){return this===b},
gN(a){return A.i2(this)},
p(a){return"Instance of '"+A.kz(this)+"'"},
ga3(a){return A.xb(this)},
toString(){return this.p(this)}}
A.lU.prototype={
p(a){return""},
$icZ:1}
A.rn.prototype={
gl4(){var s,r=this.b
if(r==null)r=$.qe.$0()
s=r-this.a
if($.xm()===1e6)return s
return s*1000}}
A.bl.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCE:1}
A.rF.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.q(b)
s=B.b.bC(b,"=")
if(s===-1){if(b!=="")a.k(0,A.ww(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.F(b,0,s)
q=B.b.b1(b,s+1)
p=this.a
a.k(0,A.ww(r,0,r.length,p,!0),A.ww(q,0,q.length,p,!0))}return a},
$S:152}
A.rE.prototype={
$2(a,b){throw A.b(A.a3("Illegal IPv6 address, "+a,this.a,b))},
$S:151}
A.iR.prototype={
gf9(){var s,r,q,p,o=this,n=o.w
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
gN(a){var s,r=this,q=r.y
if(q===$){s=B.b.gN(r.gf9())
r.y!==$&&A.Ah()
r.y=s
q=s}return q},
gb0(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yu(s==null?"":s)
r.z!==$&&A.Ah()
q=r.z=new A.e7(s,t.hL)}return q},
gh4(){return this.b},
gdC(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ac(s,"v",1))return B.b.F(s,1,s.length-1)
return s},
gdL(){var s=this.d
return s==null?A.yR(this.a):s},
gdM(){var s=this.f
return s==null?"":s},
gfF(){var s=this.r
return s==null?"":s},
gfG(){return this.c!=null},
gfI(){return this.f!=null},
gfH(){return this.r!=null},
p(a){return this.gf9()},
a4(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge3())if(p.c!=null===b.gfG())if(p.b===b.gh4())if(p.gdC()===b.gdC())if(p.gdL()===b.gdL())if(p.e===b.gfT()){r=p.f
q=r==null
if(!q===b.gfI()){if(q)r=""
if(r===b.gdM()){r=p.r
q=r==null
if(!q===b.gfH()){s=q?"":r
s=s===b.gfF()}}}}return s},
$il_:1,
ge3(){return this.a},
gfT(){return this.e}}
A.rD.prototype={
gh3(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cG(s,"?",m)
q=s.length
if(r>=0){p=A.iS(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.ln("data","",n,n,A.iS(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lO.prototype={
gfG(){return this.c>0},
gfI(){return this.f<this.r},
gfH(){return this.r<this.a.length},
ge3(){var s=this.w
return s==null?this.w=this.iy():s},
iy(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.F(r.a,0,q)},
gh4(){var s=this.c,r=this.b+3
return s>r?B.b.F(this.a,r,s-1):""},
gdC(){var s=this.c
return s>0?B.b.F(this.a,s,this.d):""},
gdL(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.A5(B.b.F(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gfT(){return B.b.F(this.a,this.e,this.f)},
gdM(){var s=this.f,r=this.r
return s<r?B.b.F(this.a,s+1,r):""},
gfF(){var s=this.r,r=this.a
return s<r.length?B.b.b1(r,s+1):""},
gb0(){if(this.f>=this.r)return B.d6
return new A.e7(A.yu(this.gdM()),t.hL)},
gN(a){var s=this.x
return s==null?this.x=B.b.gN(this.a):s},
a4(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il_:1}
A.ln.prototype={}
A.pQ.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vO.prototype={
$1(a){return this.a.dm(this.b.i("0/?").a(a))},
$S:23}
A.vP.prototype={
$1(a){if(a==null)return this.a.fq(new A.pQ(a===undefined))
return this.a.fq(a)},
$S:23}
A.v9.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zw(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aY(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.f9(!0,"isUtc",t.y)
return new A.ev(r,0,!0)}if(a instanceof RegExp)throw A.b(A.x("structured clone of RegExp",null))
if(a instanceof Promise)return A.bV(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c9(n),p=s.gu(n);p.m();)m.push(A.hf(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.e(a.length)
for(s=J.aC(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:141}
A.lx.prototype={
aN(a){if(a<=0||a>4294967296)throw A.b(A.yc(u.w+a))
return Math.random()*a>>>0},
aI(){return Math.random()},
$iwg:1}
A.ed.prototype={
bM(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.b8()
l.b8()
l.b8()
l.b8()},
b8(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a2(o-n+(q-p)+(m-r),4294967296)>>>0},
aN(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.yc(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b8()
return(p.a&s)>>>0}do{p.b8()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aI(){var s,r=this
r.b8()
s=r.a
r.b8()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwg:1}
A.qh.prototype={
C(){var s,r=this
if(B.a.M(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.qi()))throw A.b(B.ha)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fu)}}
A.qi.prototype={
$1(a){return A.e(a)<=0},
$S:28}
A.eI.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e3.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bl(B.li)
if(q.a!==0)throw A.b(A.ag(q,s,"contains unknown pipeline features"))
if(this.a===B.bv&&r.gW(r))throw A.b(A.ag(r,s,"safe profiles cannot install optional features"))}}
A.ft.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kx.prototype={}
A.no.prototype={
bU(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.k("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.j(A.k("configuration state is not initialized"))
if(p.c!=null)A.j(A.k("a configuration transition is already open"))
a2.C()
n=A.hZ(a2)
m=p.d
l=p.b
if(l==null)A.j(A.k("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bl(h)
f=h.bl(j)
j=n.a
h=l.a
e=j.bl(h)
d=h.bl(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.nr(m,a2,n,new A.np(A.eO(g,k),A.eO(f,k),A.eO(e,k),A.eO(d,k),c,b,o.z!==a2.z),B.cd)
p.c=a
s=a
try{r=a1.b.cJ(s.c)
q=new A.kx(s,r,B.aY)
a1.c=q
return q}catch(a0){p.fk(s)
throw a0}},
bV(a){var s,r,q,p=this
p.ey(a)
s=p.a
r=a.a
s.ez(r)
q=s.d
if(r.a!==q)A.j(A.k("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eE
s.c=null
p.b.bV(a.b)
a.c=B.eM
p.c=null},
ey(a){if(this.c!==a||a.c!==B.aY)throw A.b(A.k("coordinated transition is not open"))}}
A.fp.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.np.prototype={}
A.nr.prototype={}
A.nq.prototype={
fk(a){this.ez(a)
a.e=B.eF
this.c=null},
ez(a){if(this.c!==a||a.e!==B.cd)throw A.b(A.k("configuration transition is not open"))}}
A.kw.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.M(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",m.x,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.J(q,A.o(q).i("J<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.b(A.x("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.b(A.x("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.b(A.x("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.b(A.x("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.fm.prototype={}
A.jR.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gal(0)||!k.b.gal(0)||!k.r.gal(0))throw A.b(A.x("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.x("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.x("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gal(0)||r.gc8()<1e-12)A.j(A.x("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.j(A.x("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.x("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.j(A.x("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.j(A.x("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.x("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.j(A.x("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.j(A.x("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.o4.prototype={}
A.ds.prototype={
a4(a,b){if(b==null)return!1
return J.fd(b)===A.xb(this)&&b instanceof A.ds&&this.a===b.a&&this.b===b.b},
gN(a){return A.cC(A.xb(this),this.a,this.b,B.f,B.f,B.f)}}
A.bv.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bm.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cB.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kr.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cw.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eB.prototype={
v(){return"HandleRejection."+this.b}}
A.k_.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.c_.prototype={
gal(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a4(a,b){if(b==null)return!1
return b instanceof A.c_&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.nM.prototype={}
A.kv.prototype={}
A.bC.prototype={}
A.vQ.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:134}
A.jk.prototype={
v(){return"AlphaMode."+this.b}}
A.eE.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.x("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.x("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.x("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.wc("roughness",l.z)
A.wc("metallic",0)
A.wc("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aW("uvScaleU",s),new A.aW("uvScaleV",r),new A.aW("uvOffsetU",0),new A.aW("uvOffsetV",0),new A.aW("tintR",l.c),new A.aW("tintG",l.d),new A.aW("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.x("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.b(A.x("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.x("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d2.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bD.prototype={}
A.rH.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.W[s]
q=r.c
if(q<=0)throw A.b(A.x(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.x(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rI())
for(p=B.a.gu(B.W),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.x('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rI.prototype={
$1(a){return t.qY.a(a).a===B.dR},
$S:20}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.x("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jK()
r=n.c
if(r!=null){q=s/14|0
for(s=A.C3(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.x("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gal(0)&&s.b.gal(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.x("MeshData.localBounds must be a valid AABB",null))},
jK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.G(B.W,a2.a(new A.pF()),a3)
if(!a4.gu(0).m())return
s=new A.G(B.W,a2.a(new A.pG()),a3)
if(s.gt(0)!==1)throw A.b(A.x("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaQ(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaQ(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a7(A.c([j,h,g,f,e,d,c],p),new A.pH()))throw A.b(A.x("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.x("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.x("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.x("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.pF.prototype={
$1(a){return t.qY.a(a).a===B.dR},
$S:20}
A.pG.prototype={
$1(a){return t.qY.a(a).a===B.dQ},
$S:20}
A.pH.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.pS.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.x("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.pT()))throw A.b(A.x("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.x("resource history does not match vhsOutput ownership",null))}}
A.pT.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.fM.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.ky.prototype={}
A.kH.prototype={
fK(a){var s=this
if(s.d)A.j(A.k("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.k("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cJ(a){var s=this
if(s.d)A.j(A.k("resource assembler is disposed"))
if(s.a==null)throw A.b(A.k("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.k("resource assembly is already open"))
a.C()
return s.b=new A.ky(s.c,a,B.bC)},
bV(a){var s,r=this
if(r.d)A.j(A.k("resource assembler is disposed"))
r.f0(a)
s=r.c
if(a.a!==s)throw A.b(A.k("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.kS
r.b=null},
dT(a){if(this.d)A.j(A.k("resource assembler is disposed"))
this.f0(a)
a.c=B.kT
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.k("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f0(a){if(this.b!==a||a.c!==B.bC)throw A.b(A.k("resource assembly is not prepared"))}}
A.fu.prototype={
v(){return"DrawMode."+this.b}}
A.jr.prototype={
v(){return"BlendMode."+this.b}}
A.bz.prototype={}
A.kT.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.x("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.x("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.x("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jx.prototype={
v(){return"ColorEncoding."+this.b}}
A.hu.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.i5.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.x("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.x("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.x("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.x("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eL.prototype={
v(){return"RendererState."+this.b}}
A.aG.prototype={}
A.o6.prototype={
fS(a){var s=this.z.h(0,a)
return s==null?B.cp:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.kg.prototype={
mk(a){return this.a.c_(a)}}
A.pE.prototype={
$3(a,b,c){return new A.cB(A.e(a),A.e(b),A.aB(c))},
$S:118}
A.kZ.prototype={}
A.pI.prototype={
ba(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yA(f,new A.jU(e.byteLength,B.cE,B.hr))
if(f.b!==B.h)A.j(A.k(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d5(f)
A.bE(f,p)
if(f.b!==B.h)A.j(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.W[m]
k=A.zQ(l.a)
if(!o.l(0,k))continue
j=A.E3(n,k,l)
if(f.b!==B.h)A.j(A.k(g))
r.vertexAttribPointer.apply(r,[k,j,A.e(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.k(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yA(f,new A.jU(A.y7(i),B.cE,B.cD))
if(f.b!==B.h)A.j(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.CZ(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kZ(d,h,p,f,e.length/14|0,!1)},
dR(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.dW(B.aC,a))
this.b.c_(a)
return s},
b5(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b5(a)},
dP(){var s,r,q,p
for(s=this.b.bD(),r=s.$ti,s=new A.cH(s.a(),r.i("cH<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.ba(p.b))}},
gc9(){return this.b.bD().bc(0,0,new A.pK(),t.S)}}
A.pJ.prototype={
$3(a,b,c){return new A.bv(A.e(a),A.e(b),A.aB(c))},
$S:114}
A.pK.prototype={
$2(a,b){var s,r
A.e(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.y7(s)
return a+r+s},
$S:110}
A.ck.prototype={}
A.e6.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c2.prototype={}
A.rw.prototype={
cr(a){var s=this.a,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.rx(a)),r.i("G<1>")).gt(0)}}
A.rx.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:88}
A.ru.prototype={
m3(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.j(A.x("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.j(A.ag(n,"handle","must be valid"))
if(s.R(o))throw A.b(A.x("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("av<2>")
m=A.I(new A.av(s,r),r.i("m.E"))
B.a.P(m,new A.rv())
r=t.Aj
l=A.a_(r)
k=A.n(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.t)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jj(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c2(p,i))}r=l.a
return new A.rw(A.ai(j,t.d),r)},
jj(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.fa(a,r)===s.d)return B.dK
this.b.k(0,a,!0)
return B.dJ}catch(q){if(A.ak(q) instanceof A.k_){s=this.b.h(0,a)===!0?B.dM:B.dL
return s}else throw q}}}
A.rv.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:104}
A.dD.prototype={}
A.kV.prototype={
aT(a){var s=this.a,r=A.wm(s,B.hw)
A.wn(s,r,0,a)
return r},
mD(a,b){var s,r,q,p=this,o=p.b,n=o.c_(a),m=A.I(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.h2(a,new A.dD(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wm(p.a,s)
o.k(0,r,q)}A.wn(p.a,q,0,b)},
fa(a,b){var s
this.b.c_(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mg(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.fa(a,s)},
mo(a){var s=this.e
s===$&&A.p()
return s},
mq(a){var s=this.f
s===$&&A.p()
return s},
mi(a){var s=this.r
s===$&&A.p()
return s},
mm(a){var s=this.w
s===$&&A.p()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ah(s,s.r,s.e,A.o(s).i("ah<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.L(0)
s=n.d
s===$&&A.p()
A.lc(q,s)
s=n.e
s===$&&A.p()
A.lc(q,s)
s=n.f
s===$&&A.p()
A.lc(q,s)
s=n.r
s===$&&A.p()
A.lc(q,s)
s=n.w
s===$&&A.p()
A.lc(q,s)},
dP(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aT($.xl())
i.e=i.aT($.xi())
i.f=i.aT($.xj())
i.r=i.aT($.xh())
i.w=i.aT($.xk())
for(s=i.b.bD(),r=s.$ti,s=new A.cH(s.a(),r.i("cH<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.rA()))continue
l=A.wm(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wn(p,l,k,j)}q.k(0,n.a,l)}},
gc9(){return this.b.bD().bc(0,0,new A.rz(),t.S)}}
A.ry.prototype={
$3(a,b,c){return new A.bm(A.e(a),A.e(b),A.aB(c))},
$S:102}
A.rA.prototype={
$1(a){return t.Fx.a(a)==null},
$S:98}
A.rz.prototype={
$2(a,b){var s
A.e(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:93}
A.eD.prototype={
glj(){return this.b.length}}
A.jP.prototype={
ka(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.ql(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].aj(s,b)
o=s.k9(a,!1)
if(o.b.length!==0)return new A.jQ(o,B.iY)
q=o.a
n=A.D(q)
m=new A.N(q,n.i("h(1)").a(new A.o_()),n.i("N<1,h>")).bn(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.ai(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gE().a))throw A.b(A.k('RenderFeature "'+k.ga8()+'" created a pass "'+i.gE().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.P(l,new A.o0(o))
return new A.jQ(o,l)},
bz(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)s[q].a_()}}
A.o_.prototype={
$1(a){return t.A.a(a).a},
$S:86}
A.o0.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.dD(s,new A.nY(a)),B.a.dD(s,new A.nZ(b)))},
$S:83}
A.nY.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:9}
A.nZ.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:9}
A.jQ.prototype={}
A.ex.prototype={
v(){return"FrameQueueState."+this.b}}
A.o5.prototype={}
A.o3.prototype={
k6(a){if(a.length===0)throw A.b(A.ag(a,"passId",null))
this.b=a
this.a.cd(a,A.zZ())},
hG(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aG(p.a,p.b,p.d))}return A.b5(o,t.N,t.pH)},
bs(a,b){var s,r=this.b
if(r==null)throw A.b(A.k("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.x("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a2(a,3)*b}}
A.fV.prototype={}
A.aw.prototype={
gbG(){var s=this.c,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.pW()),r.i("G<1>"))},
gci(){var s=this.c,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.pX()),r.i("G<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pW.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:24}
A.pX.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:24}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bf.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i7.prototype={
v(){return"ResourceFormat."+this.b}}
A.cS.prototype={
v(){return"GraphStage."+this.b}}
A.aI.prototype={
fO(){var s=this
return new A.aI(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.aI&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gN(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fL.prototype={
v(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.hq.prototype={}
A.kA.prototype={
av(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.D0(m.a,a.c,r.a(a.d.ga1().bI(0)),r.a(a.f),a.b)}catch(q){if(A.ak(q) instanceof A.ia){++m.e
throw q}else throw q}p=new A.hq(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bz(){var s=this.b
this.iF(new A.av(s,A.o(s).i("av<2>")))
s.L(0)},
iF(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ah(s,s.r,s.e,a.$ti.i("ah<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bk.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.x("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.b(A.x('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.b(A.x('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.b(A.x('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.b(A.x('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.qj.prototype={}
A.b7.prototype={
ag(){var s=this
return A.xI(B.ea,s.f,B.aq,B.aa,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)}}
A.ql.prototype={
k9(a,b){var s=this.jI(t.Q.a(a),!1),r=this.a,q=A.D(r)
return new A.qk(A.ai(new A.G(r,q.i("l(1)").a(new A.qq()),q.i("G<1>")),t.A),s)},
jI(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.D(r)
p=q.i("G<1>")
o=A.I(new A.G(r,q.i("l(1)").a(new A.qp()),p),p.i("m.E"))
m.il(o,a,s)
m.iq(o,s)
m.is(o,s)
m.ip(o,!1,s)
n=m.iu(o,s)
m.ir(o,n,s)
m.it(o,s)
m.io(o,n,s)
m.im(o,s)
return s},
il(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.a3.bl(b)
if(p.a!==0)B.a.l(c,new A.bf(B.hH,q.a,"missing capabilities: "+p.Y(0,", ")))}},
iq(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbG(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bf(B.hC,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
is(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.D(a),r=s.i("l(1)").a(new A.qo()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbG()
o=A.I(p,p.$ti.i("m.E"))
p=r.gci()
n=A.I(p,p.$ti.i("m.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bf(B.b2,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaQ(o).a
l=B.a.gaQ(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bf(B.b2,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bf(B.b2,r.a,"resolve source and destination must match format and extent"))}},
ip(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bf(B.hF,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iu(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gci(),n=J.R(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bf(B.hB,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
ir(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbG(),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bf(B.cJ,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bC(a,m)>s)B.a.l(c,new A.bf(B.cJ,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
it(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbG(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gci(),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bf(B.hE,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
io(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbG(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gci().ae(0,new A.qn(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bf(B.hD,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
im(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gci(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.xT(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbG(),p=J.R(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e_(s,!1,!1,p)
s=a.length
i=A.e_(s,!1,!1,p)
h=new A.qm(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bf(B.hG,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qq.prototype={
$1(a){t.A.a(a)
return A.we()},
$S:9}
A.qp.prototype={
$1(a){t.A.a(a)
return A.we()},
$S:9}
A.qo.prototype={
$1(a){return t.A.a(a).f},
$S:9}
A.qn.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:24}
A.qm.prototype={
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
r=A.fU(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.qk.prototype={}
A.lw.prototype={$ic1:1,
ga8(){return this.a},
gE(){return this.b},
gdZ(){return this.c}}
A.i4.prototype={
jN(a){var s,r,q=a.c,p=q.a
if(!p.gal(0))A.j(A.x("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.x("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.x(u.u,null))
s=this.a.c_(a.a)
q=q.a9()
p=s.d.gaq()
r=A.D(p)
return A.b1(new A.N(p,r.i("K(1)").a(q.gaw()),r.i("N<1,K>")))},
gfM(){return new A.cn(this.ls(),t.Br)},
ls(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gfM(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bD(),n=o.$ti,o=new A.cH(o.a(),n.i("cH<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
f=f.gaq()
d=A.D(f)
r=5
return a.b=new A.lw(h,g,A.b1(new A.N(f,d.i("K(1)").a(i.gaw()),d.i("N<1,K>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCs:1}
A.qr.prototype={
$3(a,b,c){return new A.cw(A.e(a),A.e(b),A.aB(c))},
$S:79}
A.qv.prototype={
m8(a,b){var s,r
if(this.x)A.j(A.k("resource library is disposed"))
s=this.a
a.C()
r=s.b.az(a,b)
s.c.k(0,r.a,s.ba(a))
this.f.l(0,r)
return r},
m9(a){if(this.x)A.j(A.k("resource library is disposed"))
this.a.b5(a)
this.f.a5(0,a)},
m7(a){var s
if(this.x)A.j(A.k("resource library is disposed"))
a.C()
s=this.b.a.az(a,null)
this.r.l(0,s)
return s},
dO(a,b,c){var s,r
if(this.x)A.j(A.k("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.j(A.x("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.j(A.x("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.az(new A.dD(new A.jW(c,b,1,!1,B.aA,B.aA,B.cG,1),A.e_(1,null,!1,t.Fx),!1),a)
this.w.l(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.I(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.a5(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b5(k)}r=i.r
q=A.I(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.b5(q[l])
q=i.f
o=A.I(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.b5(o[l])
s.L(0)
r.L(0)
q.L(0)
p.a_()
i.x=!0}}
A.t9.prototype={}
A.lV.prototype={$ic1:1,
ga8(){return this.a},
gE(){return this.b},
gdZ(){return this.c}}
A.uA.prototype={
$1(a){var s=this.a.w.a.dR(a),r=s.b!=null,q=r?s.d:s.e
return new A.i6(s.c,r,q,s.f)},
$S:77}
A.uB.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().fP(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().fP(b)
throw A.b(A.k("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:71}
A.uz.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.us.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:70}
A.ut.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bh
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.Gg(s,3,q.a.d,r)},
$S:69}
A.uy.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.un.prototype={
$0(){return this.a.at.a},
$S:59}
A.up.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uo.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.ux.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.ul.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.um.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uu.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uv.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uw.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:4}
A.ur.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uq.prototype={
$0(){return this.a.at.w},
$S:46}
A.uD.prototype={
$0(){return this.a},
$S:47}
A.tF.prototype={}
A.lH.prototype={$iCr:1}
A.lt.prototype={$iBE:1}
A.qA.prototype={
gbm(){var s=this.w
return s==null?A.j(A.k("renderer is not initialized")):s},
fL(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bA)throw A.b(A.k("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.U)throw A.b(A.k("renderer device is context lost"))
m.e=B.kR
try{m.r=s.fY()
r=m.b
q=A.hZ(a)
p=r.a
if(p.a!=null)A.j(A.k("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.hZ(a)
p.d=1
r.b.fK(q)
r=A.C2()
m.w=new A.qv(A.C4(s),r,A.CG(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kH()
p=new A.oq(s,r)
q=A.hZ(a)
o=p.d4(q,a)
r.fK(q)
p.c=new A.fI(new A.ky(0,q,B.bC),o,B.af)
m.x=p
m.y=new A.kA(s,A.n(t.N,t.CH))
m.as=a
A.zh(m)
m.e=B.bB}catch(n){s=m.y
if(s!=null)s.bz()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bA
throw n}return A.xL(t.H)},
k0(a,b){var s,r,q,p,o,n,m=this,l=null
m.jn()
m.bP()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.x("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.k("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gal(0))A.j(A.x("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gal(0)||q.gc8()<1e-12)A.j(A.x("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.x("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.x("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gal(0)||!r.b.gal(0)||!r.c.gal(0))A.j(A.x("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.j(A.x("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.az)A.j(A.k("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.az
o.c=0
B.a.L(o.a)
s=o
try{r=m.r
if((r==null?A.j(A.k("renderer is not initialized")):r).z)m.b$=m.a.k5()
return s}catch(n){if(o.b!==B.az)A.j(A.k("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hf
m.eh()
m.ax=m.at=null
throw n}},
l7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bP()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.k("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.az)A.j(A.k("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.kS(l,0,A.f9(m.c,"count",t.S),A.D(l).c).bJ(0,!1)
m.b=B.he
q=k
try{p=A.Ef(a1,r,s,q)
o=p.a.hG()
m=o.gJ().cP(0,new A.qB())
l=m.$ti
n=new A.cA(m,l.i("aG(1)").a(new A.qC()),l.i("cA<1,aG>")).bc(0,B.cp,new A.qD(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gc9()
g=g.c.gc9()
e=a1.w
e.a.gc9()
e.c.gc9()
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
return new A.o6(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.iO(s.e)
a1.ax=a1.at=null}},
jn(){var s,r,q,p=this
if(p.e!==B.dw)return
if(p.a.b===B.U)throw A.b(A.k("renderer context remains lost"))
s=p.w
if(s.x)A.j(A.k("resource library is disposed"))
s.a.dP()
s.c.dP()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.k("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.k("GPU resource adapter is not initialized"))
s.c=new A.fI(q.a,s.d4(A.hZ(r),r),B.af)
s=p.y
s.c=null
s.b.L(0)
A.zh(p)
p.e=B.bB},
bP(){var s=this,r=s.e
if(r!==B.bB)throw A.b(A.k("renderer is not ready: "+r.b))
if(s.a.b===B.U){s.iG()
s.e=B.dw
throw A.b(A.k("renderer context lost"))}}}
A.qB.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.qC.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.qD.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aG(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lE.prototype={}
A.tl.prototype={
iO(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.k(u.k))
r=s.fc(o)
if(r.b)A.j(A.k("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lE(o))}catch(q){p.d6(o)}},
eh(){var s=this.b$
this.b$=null
if(s!=null)this.d6(s)},
iG(){var s,r,q
this.eh()
s=this.a$
r=J.xW(s.slice(0),A.D(s).c)
B.a.L(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.d6(r[q].b)},
d6(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fc(a).a)}catch(r){}}}
A.lL.prototype={}
A.ib.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bQ.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ib4:1}
A.bO.prototype={
G(a,b){var s
t.z3.a(b)
s=B.c.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ib4:1}
A.aO.prototype={}
A.vU.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:51}
A.vV.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.vS.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:53}
A.vT.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.nH.prototype={}
A.nG.prototype={}
A.jg.prototype={
gaq(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.K(o,n,p),new A.K(r,n,p),new A.K(o,q,p),new A.K(r,q,p),new A.K(o,n,s),new A.K(r,n,s),new A.K(o,q,s),new A.K(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eG.prototype={}
A.fx.prototype={
v(){return"FrustumTest."+this.b}}
A.o7.prototype={
mx(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.cq
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hg:B.hh}}
A.o8.prototype={
$4(a,b,c,d){var s=new A.K(a,b,c),r=new A.eG(s,d),q=Math.sqrt(s.gc8())
if(q<1e-9)s=r
else{s=1/q
s=new A.eG(new A.K(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dn.prototype={
an(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dn(h)},
h0(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.K(k,j,i):new A.K(k/h,j/h,i/h)},
dH(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.j(A.k("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
return new A.dn(h)},
gal(a){return B.t.a7(this.a,new A.pC())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.pC.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.kC.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.kW.prototype={
C(){var s=this.a
if(!s.gal(0))throw A.b(A.x("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.x("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.b(A.x(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.y5(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.y5(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.K.prototype={
c0(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.K(s*r-q*p,q*o-n*r,n*p-s*o)},
gc8(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc8())},
gal(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gau(){var s=this,r=Math.sqrt(s.gc8())
return r<1e-9?B.al:new A.K(s.a/r,s.b/r,s.c/r)},
a4(a,b){if(b==null)return!1
return b instanceof A.K&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.ir.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.ho.prototype={
ga8(){return this.f},
aj(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.c([new A.O(this.x,B.i),new A.O(this.y,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.y,B.d3,B.d0)),q=A.d5(s.d),p=t.n,o=s.r===B.dW?new Float32Array(A.a0(A.c([1/s.Q,0],p))):new Float32Array(A.a0(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lk(new A.b7(s.f,A.c([new A.O(s.x,B.i),new A.O(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iaj:1}
A.lk.prototype={
ak(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c6(r,a.am(o.r).b)
A.bo(r,o.a.ag())
A.dA(r,B.ad,1,0,0,0)
A.cl(r,o.b.b)
q=t._
p=o.d
if(o.e)A.CX(r,0,q.a(p.$0()))
else A.aE(r,0,q.a(p.$0()))
A.v(r,"uSource",B.A)
A.v(r,"uTexelStep",new A.y(B.aL,o.f))
A.bE(r,o.c)
s.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.js.prototype={
ga8(){return"bloomComposite"},
aj(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.L,A.c([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r="bloomComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jr,B.j9)),p=A.d5(s.d),o=s.w,n=A.c([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.k)],t.C)
return A.c([new A.ll(new A.b7(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iaj:1}
A.ll.prototype={
ak(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c6(r,a.cO(q.f).b)
A.CY(r,1)
A.bo(r,B.eW)
A.cl(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.A)
A.v(r,"uBloomStrength",new A.y(B.e,p))
A.bE(r,q.c)
s.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.jF.prototype={
ga8(){return"depthPrepass"},
aj(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hy,A.c([new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r="depthPrepass",q=s.a.av(new A.bk(r,s.b,s.c,B.d2,B.d1,B.iC))
return A.c([new A.lo(new A.b7(r,A.c([new A.O(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iaj:1}
A.lo.prototype={
ak(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c6(a1,a2.am("sceneDepth").b)
A.bo(a1,d.a.ag())
A.dA(a1,B.aW,1,0,0,0)
A.cl(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.y(B.e,a0.Q))
A.v(a1,"uAlbedo",B.A)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gE()
A.v(a1,"uViewProjection",new A.y(B.v,new Float32Array(A.a0(a))))
A.v(a1,"uModel",new A.y(B.v,new Float32Array(A.a0(i.c.a9().a))))
A.vR(b,k,!1)
d.jw(b,j.gE().b,p)
h=q.$1(j.gE().a)
i=h.a
if(a1.b!==B.h)A.j(A.k(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.j(A.k(c))
e=A.e(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.e(o.WebGL2RenderingContext.UNSIGNED_INT):A.e(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bs(g,f)}else{if(a1.b!==B.h)A.j(A.k(c))
m.drawArraysInstanced(A.e(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bs(g,f)}}},
jw(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,0))
A.v(q,"uAffineWarpStrength",new A.y(B.e,0))
s=this.a.ag()
A.bo(q,r.dx?s.dY(!1):s)},
$ia9:1,
gE(){return this.a}}
A.it.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hv.prototype={
ga8(){return this.f},
aj(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.c([new A.O(this.w,B.i),new A.O(this.x,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.y,B.d3,B.d0)),q=A.d5(s.d),p=t.n,o=s.r===B.dX?new Float32Array(A.a0(A.c([1/s.z,0],p))):new Float32Array(A.a0(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.lp(new A.b7(s.f,A.c([new A.O(s.w,B.i),new A.O(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iaj:1}
A.lp.prototype={
ak(a){return},
$ia9:1,
gE(){return this.a}}
A.jI.prototype={
ga8(){return"dofComposite"},
aj(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.L,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.k)],t.C),!1))},
ai(a){var s=this,r="dofComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jp,B.ir)),p=A.d5(s.d)
return A.c([new A.lq(new A.b7(r,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iaj:1}
A.lq.prototype={
ak(a){var s,r=this,q=a.am("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c6(n,q.b)
A.bo(n,r.a.ag())
A.cl(n,r.b.b)
s=t._
A.aE(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.A)
A.aE(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ak)
A.aE(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.dP)
A.v(n,"uNear",new A.y(B.e,o.f))
A.v(n,"uFar",new A.y(B.e,o.r))
A.v(n,"uFocusDistance",new A.y(B.e,r.w))
A.v(n,"uFocusRange",new A.y(B.e,r.x))
A.v(n,"uStrength",new A.y(B.e,0))
A.bE(n,r.c)
p.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.jZ.prototype={
ga8(){return"grade"},
aj(a,b){B.a.l(a.a,new A.aw("grade",B.L,A.c([new A.O(this.r,B.i),new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("grade",s.b,s.c,B.y,B.jn,B.ja)),q=A.d5(s.d),p=s.r,o=s.w
return A.c([new A.lv(new A.b7("grade",A.c([new A.O(p,B.i),new A.O(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iaj:1}
A.lv.prototype={
ak(a){var s=this,r=a.am(s.f.a),q=a.b,p=q.a
A.c6(p,a.am(s.r.a).b)
A.bo(p,s.a.ag())
A.cl(p,s.b.b)
A.aE(p,0,r.b)
A.v(p,"uScene",B.A)
A.aE(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ak)
A.v(p,"uLutSize",new A.y(B.e,s.e))
A.v(p,"uStrength",new A.y(B.e,a.c.e.y))
A.bE(p,s.c)
q.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.hS.prototype={
ga8(){return"msaaResolve"},
aj(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hz,A.c([new A.O(this.b,B.i),new A.O(this.c,B.k)],t.C),!0))},
ai(a){var s=this.b,r=this.c
return A.c([new A.lC(new A.b7("msaaResolve",A.c([new A.O(s,B.i),new A.O(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iaj:1}
A.lC.prototype={
ak(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cO(this.c),j=a.cO(this.d),i=this.b
if(i.b!==B.h)A.j(A.k(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.j(A.x("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.j(A.x("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.j(A.x("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.NONE)],t.n))}A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.NONE),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.e(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia9:1,
gE(){return this.a}}
A.fk.prototype={}
A.jt.prototype={
am(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.k('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cO(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.am(s)},
$iCq:1}
A.wf.prototype={}
A.i1.prototype={
ga8(){return"present"},
aj(a,b){B.a.l(a.a,new A.aw("present",B.hA,A.c([new A.O(this.f,B.i)],t.C),!1))},
ai(a){var s,r=this,q=r.a.av(new A.bk("present",r.b,r.c,B.y,B.jy,B.iJ)),p=A.d5(r.d)
r.w=p
s=r.f
return A.c([new A.lI(new A.b7("present",A.c([new A.O(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iaj:1}
A.lI.prototype={
ak(a){var s,r=this,q=a.cO(r.d),p=a.b,o=p.a
A.c6(o,null)
A.bo(o,r.a.ag())
A.cl(o,r.b.b)
A.bE(o,r.c)
A.aE(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.y(B.e,s.a))
A.v(o,"uVignette",new A.y(B.e,s.e))
A.v(o,"uGrain",new A.y(B.e,s.f))
A.v(o,"uRainIntensity",new A.y(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.y(B.e,s.w))
A.v(o,"uOutputEncoding",new A.y(B.e,r.e===B.aX?1:0))
A.v(o,"uToneMap",B.dO)
p.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.kB.prototype={
ga8(){return"ps1Quantize"},
aj(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.L,A.c([new A.O(this.e,B.i),new A.O(this.f,B.k)],t.C),!1))},
ai(a){var s=this,r="ps1Quantize",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jt,B.ij)),p=A.d5(s.d),o=s.e,n=s.f
return A.c([new A.lJ(new A.b7(r,A.c([new A.O(o,B.i),new A.O(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iaj:1}
A.lJ.prototype={
ak(a){var s=this,r=a.am(s.d.a),q=a.b,p=a.c.e,o=q.a
A.c6(o,a.am(s.e.a).b)
A.bo(o,s.a.ag())
A.cl(o,s.b.b)
A.aE(o,0,r.b)
A.v(o,"uScene",B.A)
A.v(o,"uQuantizationBits",new A.y(B.e,p.as))
A.v(o,"uDitherStrength",new A.y(B.e,p.x))
A.bE(o,s.c)
q.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.eQ.prototype={}
A.kL.prototype={
ga8(){return"shadow"},
aj(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.hx,A.c([new A.O(this.z,B.k)],t.C),!1))},
ai(a){var s=this,r="shadowCaster",q=s.a.av(new A.bk(r,s.b,s.c,B.d2,B.d1,B.j8))
return A.c([new A.lM(new A.b7(r,A.c([new A.O(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iaj:1}
A.lM.prototype={
ak(a){var s,r,q,p,o=this,n=a.am("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c6(s,n.b)
A.bo(s,o.a.ag())
A.dA(s,B.aW,1,0,0,0)
return}r=A.yl(l)
o.x.$1(r)
s=m.a
A.c6(s,n.b)
A.bo(s,o.a.ag())
A.dA(s,B.aW,1,0,0,0)
A.cl(s,o.b.b)
A.v(s,"uAlbedo",B.A)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.iH(m,s[p],l,r)},
f5(a,b){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,0))
s=this.a.ag()
A.bo(q,r.dx?s.dY(!1):s)},
iH(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gE().r)return
s=a.a
A.v(s,"uUseInstances",B.bP)
n.f2(a,b.gE().c,d)
n.f5(a,b.gE().b)
r=b.gE()
q=n.c.$1(r.a)
A.bE(s,q.a)
s=q.b
r=q.c
if(s)a.dv(r,q.d,0)
else a.aG(r,0)}else if(b instanceof A.eD){p=b.a
if(!p.gE().r)return
if(n.jF(b,c)===B.lD)return
n.f2(a,p.gE().c,d)
A.vR(a,b,!1)
n.f5(a,p.gE().b)
s=p.gE()
q=n.c.$1(s.a)
A.bE(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dw(r,q.d,o,0)
else a.du(r,0,o)}else throw A.b(A.x("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).p(0),null))},
jF(a,b){return B.lC},
f2(a,b,c){var s=a.a
A.v(s,"uModel",new A.y(B.v,new Float32Array(A.a0(b.a9().a))))
A.v(s,"uLightViewProjection",new A.y(B.v,new Float32Array(A.a0(c.a.a))))},
$ia9:1,
gE(){return this.a}}
A.v6.prototype={
$1(a){return this.a.a=a},
$S:57}
A.v7.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kM.prototype={
ga8(){return"shadowedWorld"},
aj(a,b){var s=this,r=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.cI,r,!1))},
ai(a){var s=this,r="shadowedWorld",q=s.a.av(new A.bk(r,s.b,s.c,B.jv,B.jo,B.ig)),p=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.k))
return A.c([new A.lN(new A.b7(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iaj:1}
A.lN.prototype={
ak(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.am("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c6(b1,a4.b)
A.bo(b1,a2.a.ag())
s=a8.a
A.dA(b1,B.cc,1,s.c,s.b,s.a)
A.cl(b1,a2.b.b)
A.v(b1,"uAlbedo",B.A)
A.v(b1,"uNormalMap",B.lZ)
A.v(b1,"uOrmMap",B.m_)
A.v(b1,"uEmissiveMap",B.m0)
A.v(b1,"uLightmap",B.m1)
s=t._
A.aE(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ak)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.y(B.aL,new Float32Array(A.a0(A.c([1/a2.ch,1/a2.CW],r)))))
A.aE(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.dP)
A.v(b1,"uVertexSnapGrid",new A.y(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.y(B.aL,new Float32Array(A.a0(A.c([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.y(B.v,new Float32Array(A.a0(a7.c.a))))
A.v(b1,"uView",new A.y(B.v,new Float32Array(A.a0(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.y(B.v,new Float32Array(A.a0(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.y(B.q,new Float32Array(A.a0(A.c([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.y(B.e,a8.c))
A.v(b1,"uFogEnd",new A.y(B.e,a8.d))
s=a8.e
A.v(b1,"uFogHeightFalloff",new A.y(B.e,s==null?0:s))
s=a8.f
A.v(b1,"uFogDensity",new A.y(B.e,s==null?0:s))
q=a2.Q.$0()
s=A.c([],t.cv)
p=a2.as.$0()
p=J.R(p==null?B.bh:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a6
k=o?a3:q.c
if(k==null)k=B.bR
A.v(b1,"uLightPosition",new A.y(B.q,new Float32Array(A.a0(A.c([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.y(B.q,new Float32Array(A.a0(A.c([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.V
A.v(b1,"uLightColor",new A.y(B.q,new Float32Array(A.a0(A.c([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.y(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.y(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a6
g=p?a3:i.b
if(g==null)g=B.V
A.v(b1,"uDirectionalDirection",new A.y(B.q,new Float32Array(A.a0(A.c([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.y(B.q,new Float32Array(A.a0(A.c([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.y(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.d(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.al
c=n?a3:e.c
if(c==null)c=B.V
m=""+f
A.v(b1,"uPointPosition"+m,new A.y(B.q,new Float32Array(A.a0(A.c([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.y(B.q,new Float32Array(A.a0(A.c([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.y(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.y(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.d(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.al
a=p?a3:e.c
if(a==null)a=B.bR
c=p?a3:e.d
if(c==null)c=B.V
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.y(B.q,new Float32Array(A.a0(A.c([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.y(B.q,new Float32Array(A.a0(A.c([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.y(B.q,new Float32Array(A.a0(A.c([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.y(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.y(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.y(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.y(B.e,Math.cos(m)))
p=p?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.y(B.e,p))}s=o?a3:q.f
A.v(b1,"uLightRange",new A.y(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.y(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.y(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.y(B.q,new Float32Array(A.a0(A.c([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.y(B.e,a8.w))
A.v(b1,"uRainWetness",new A.y(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.eE(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.eE(a5,a6[a1],r)},
eE(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.bP)
m.f3(a,b.gE().c)
r=b.gE()
q=b.gE()
p=b.gE()
b.gE()
m.f6(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gE().a)
A.bE(s,o.a)
s=o.b
r=o.c
if(s)a.dv(r,o.d,0)
else a.aG(r,0)}else if(b instanceof A.eD){n=b.a
m.f3(a,n.gE().c)
A.vR(a,b,!0)
s=n.gE()
r=n.gE()
q=n.gE()
n.gE()
m.f6(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gE().a)
A.bE(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dw(r,o.d,q,0)
else a.du(r,0,q)}else throw A.b(A.x("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).p(0),null))},
f6(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aE(o,0,p.a(s.e.$1(q.b)))
A.aE(o,3,p.a(s.f.$1(r)))
A.aE(o,4,p.a(s.r.$1(r)))
A.aE(o,5,p.a(s.w.$1(r)))
A.aE(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.y(B.e,0))
A.v(o,"uOpaqueCoverage",new A.y(B.e,c===B.aZ?0:1))
A.v(o,"uAffineWarpStrength",new A.y(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.y(B.q,new Float32Array(A.a0(A.c([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.y(B.e,0))
A.v(o,"uUvScaleOffset",new A.y(B.lY,new Float32Array(A.a0(A.c([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.y(B.e,1))
A.v(o,"uRoughness",new A.y(B.e,q.z))
A.v(o,"uMetallic",new A.y(B.e,0))
A.v(o,"uOcclusionStrength",new A.y(B.e,1))
A.v(o,"uLightmapIntensity",new A.y(B.e,0))
A.v(o,"uReceivesShadow",new A.y(B.e,1))
A:{p=r
if(B.aZ===c){switch(d.a){case 0:p=B.eY
break
case 1:p=B.eX
break}break A}if(B.T===c||B.eV===c){p=s.a.ag()
break A}}A.bo(o,q.dx?p.dY(!1):p)},
f3(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.y(B.v,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.v,new Float32Array(A.a0(s.dH().a))))},
$ia9:1,
gE(){return this.a}}
A.kP.prototype={
ga8(){return"ssaoOcclusion"},
aj(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cH,A.c([new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r="ssaoOcclusion",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.js,B.ie)),p=A.d5(s.d)
return A.c([new A.lQ(new A.b7(r,A.c([new A.O(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iaj:1}
A.lQ.prototype={
ak(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c6(m,a.am("ssaoRaw").b)
A.bo(m,p.a.ag())
if(n<=0){A.dA(m,B.ad,1,1,1,1)
return}A.dA(m,B.ad,1,0,0,0)
s=p.e.$0()
A.cl(m,p.b.b)
A.aE(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.A)
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
A.bE(m,p.c)
o.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.kO.prototype={
ga8(){return"ssaoBlur"},
aj(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cH,A.c([new A.O(this.y,B.i),new A.O(this.z,B.k)],t.C),!1))},
ai(a){var s=this,r="ssaoBlur",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.ji,B.jc)),p=A.d5(s.d)
return A.c([new A.lP(new A.b7(r,A.c([new A.O(s.y,B.i),new A.O(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iaj:1}
A.lP.prototype={
ak(a){var s,r,q=this,p=a.b,o=p.a
A.c6(o,a.am("ssaoBlurred").b)
A.bo(o,q.a.ag())
if(a.c.e.c<=0){A.dA(o,B.ad,1,1,1,1)
return}A.dA(o,B.ad,1,0,0,0)
s=q.f.$0()
A.cl(o,q.b.b)
r=t._
A.aE(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.A)
A.aE(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ak)
A.v(o,"uTexelSize",new A.y(B.aL,new Float32Array(A.a0(A.c([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.y(B.e,s.f))
A.v(o,"uFar",new A.y(B.e,s.r))
A.bE(o,q.c)
p.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.l2.prototype={
ga8(){return"vhs"},
aj(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.L,A.c([new A.O(this.r,B.i),new A.O(s,B.J),new A.O(s,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("vhs",s.b,s.c,B.y,B.jl,B.il)),q=A.d5(s.d),p=s.r,o=s.w
return A.c([new A.lY(new A.b7("vhs",A.c([new A.O(p,B.i),new A.O(o,B.J),new A.O(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iaj:1}
A.lY.prototype={
ak(a){var s,r=this,q=a.am(r.f.a),p=a.am(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c6(m,p.b)
A.bo(m,r.a.ag())
A.cl(m,r.b.b)
A.aE(m,0,q.b)
A.v(m,"uScene",B.A)
A.aE(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ak)
A.v(m,"uTime",new A.y(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.y(B.e,n.at))
A.v(m,"uTrackingWeight",new A.y(B.e,l))
A.v(m,"uNoiseWeight",new A.y(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.y(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.y(B.e,n.CW))
A.v(m,"uGhostWeight",new A.y(B.e,s))
A.bE(m,r.c)
o.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.i6.prototype={}
A.ld.prototype={
ga8(){return"world"},
aj(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cI,A.c([new A.O(this.e,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("safeWorld",s.b,s.c,B.jx,B.y,B.id)),q=s.e
return A.c([new A.m0(new A.b7("worldOpaqueTransparent",A.c([new A.O(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iaj:1}
A.m0.prototype={
ak(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c6(j,a.am(n.d).b)
A.bo(j,n.a.ag())
s=k.a
A.dA(j,B.cc,1,s.c,s.b,s.a)
A.cl(j,n.b.b)
A.v(j,"uViewProjection",new A.y(B.v,new Float32Array(A.a0(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.v(j,"uLightDir",new A.y(B.q,new Float32Array(A.a0(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.y(B.q,new Float32Array(A.a0(A.c([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.y(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.fi(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.fi(m,l[o])},
fi(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eD){s=b.a
n.fj(a,s.gE().c)
A.vR(a,b,!0)
r=n.c.$1(s.gE().a)
A.bE(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dw(p,r.d,o,0)
else a.du(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.bP)
n.fj(a,b.gE().c)
r=n.c.$1(b.gE().a)
A.bE(q,r.a)
q=r.b
p=r.c
if(q)a.dv(p,r.d,0)
else a.aG(p,0)}else throw A.b(A.x("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).p(0),null))},
fj(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.y(B.v,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.v,new Float32Array(A.a0(s.dH().a))))},
$ia9:1,
gE(){return this.a}}
A.nm.prototype={
cj(a){var s,r,q
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
else q=r===0?B.bv:B.P
return new A.e3(q,s)},
hf(a){var s,r=this.cj(a).a
A:{if(B.a1===r){s=B.dp
break A}if(B.P===r){s=B.dn
break A}s=B.ag
break A}return s}}
A.jV.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hC.prototype={
v(){return"GpuBufferKind."+this.b}}
A.jX.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.jY.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jU.prototype={}
A.jW.prototype={}
A.eA.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hE.prototype={}
A.hD.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eP.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ia.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d0.prototype={
v(){return"UniformType."+this.b}}
A.y.prototype={}
A.fo.prototype={
v(){return"ClearMask."+this.b}}
A.jG.prototype={
aG(a,b){var s=this.a
if(s.b!==B.h)A.j(A.k(u.k))
s.a.drawArrays(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bs(a,1)},
du(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.k(u.k))
s.a.drawArraysInstanced(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bs(a,c)},
dv(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bs(a,1)},
dw(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aK(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bs(a,c)},
$iBn:1}
A.fz.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fI.prototype={
fP(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.k("resource is not in candidate: "+a))
return s}}
A.oq.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.k("GPU resource adapter is not initialized"))
return s},
cJ(a){var s,r,q,p,o,n=this
if(n.e)A.j(A.k("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.k("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.k("GPU resource candidate is already open"))
s=A.hZ(a)
p=n.b
r=p.cJ(s)
try{q=new A.fI(r,n.d4(s,a),B.af)
n.d=q
return q}catch(o){p.dT(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.k("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.d7(s.b)
r.b.a_()
r.c=null
r.e=!0},
d4(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("G<1>")
s=new A.G(k,i.a(new A.or()),j)
for(h=s,g=J.R(h.a),h=new A.S(g,h.b,h.$ti.i("S<1>")),f=a.a;h.m();){r=g.gn()
q=A.yC(f,a.eC(r,a5))
J.hl(a3,q)
J.bt(a2,r,q)}e=A.I(new A.G(k,i.a(new A.os()),j),j.i("m.E"))
B.a.X(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.t)(k),++d){o=k[d]
n=A.A5(J.AS(o,11))
if(i){h=J.aT(a2,"sceneColor")
h.toString
J.bt(a2,o,h)}else{h=n
if(typeof h!=="number")return h.mP()
if(h>=2){h=J.aT(a2,"sceneColor#1")
h.toString
J.bt(a2,o,h)}else{m=A.yC(f,a.eC(o,a5))
J.hl(a3,m)
J.bt(a2,o,m)}}}a0=A.b5(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.D(a0).i("eM<1>"),a0=new A.eM(a0,k),a0=new A.aH(a0,a0.gt(0),k.i("aH<a1.E>")),j=a.a,i=t.V,k=k.i("a1.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wo(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eC(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hE(s,s,1,B.b1,!0)}if(a==="sceneDepth")return new A.hE(n,m,1,B.b1,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a2(n+1,2):n
p=r?B.d.a2(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hE(q,p,s,o?B.cF:B.hu,o)},
d7(a){var s,r,q,p,o,n=A.ke(t.mf.a(a).gaD(),t._)
for(n=A.fU(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wo(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ep(a){if(this.d!==a||a.c!==B.af)throw A.b(A.k("GPU resource candidate is not open"))}}
A.or.prototype={
$1(a){return!B.b.T(A.q(a),"sceneColor#")},
$S:3}
A.os.prototype={
$1(a){return B.b.T(A.q(a),"sceneColor#")},
$S:3}
A.fY.prototype={
v(){return"_SlotState."+this.b}}
A.eg.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.cX.prototype={
az(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.eg(B.aO,n.i("eg<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.n_
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bZ(a){return this.az(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.dW(B.cM,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dW(B.cN,a))
s=q.b
if(s===B.aP||s===B.aO)throw A.b(A.dW(B.aC,a))},
c_(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
h2(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Z(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb3(b)},
b5(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.dW(B.cM,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dW(B.cN,a))
r=q.b
if(r===B.aP||r===B.aO)throw A.b(A.dW(B.hK,a))
q.b=B.aP
q.sb3(null)
B.a.l(p.c,s);++p.e},
bD(){return new A.cn(this.lt(),this.$ti.i("cn<+(1,2)>"))},
lt(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bD(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aP||j===B.aO){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aW(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jq.prototype={
v(){return"BlendEquation."+this.b}}
A.es.prototype={
v(){return"BlendFactor."+this.b}}
A.jC.prototype={
v(){return"CullFace."+this.b}}
A.jE.prototype={
v(){return"DepthFunc."+this.b}}
A.fv.prototype={
dY(a){var s=this
return A.xI(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b8.prototype={
v(){return"StateField."+this.b}}
A.rZ.prototype={
kV(a){var s,r=this.a
if(r==null)return A.hP(B.j5,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.l(0,B.bH)
if(r.b!==a.b)s.l(0,B.bI)
if(r.c!==a.c)s.l(0,B.bJ)
if(r.d!==a.d)s.l(0,B.bK)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bL)
if(r.r!==a.r)s.l(0,B.bM)
if(r.w!==a.w)s.l(0,B.bN)
if(r.x!==a.x)s.l(0,B.bO)
return s}}
A.dE.prototype={$idm:1}
A.iU.prototype={}
A.iT.prototype={}
A.m_.prototype={}
A.lb.prototype={
i5(a){var s=this,r=A.a(s.a.canvas)
s.c=A.W(new A.rX(s))
s.d=A.W(new A.rY(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
fY(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bR(A.e(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bR(A.e(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bR(A.e(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bR(A.e(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bR(A.e(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.eU(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.hf(e.getParameter(A.e(k.WebGL2RenderingContext.RENDERER)))
m=A.hf(e.getParameter(A.e(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qh("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bR(a){var s=A.hf(this.a.getParameter(a))
return typeof s=="number"?B.c.aC(s):0},
eU(a){var s=A.hf(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBK:1}
A.rX.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.U},
$S:1}
A.rY.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.tN.prototype={
k5(){var s,r=this
if(r.b!==B.h)A.j(A.k(u.k))
s=r.w?A.E(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dE(new A.m_(s))},
fc(a){var s=a.a
if(!(s instanceof A.m_))throw A.b(A.ag(a,"query","is not a GPU timer query"))
return s}}
A.lZ.prototype={}
A.jH.prototype={
B(){var s=this
return A.M(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jn.prototype={
glw(){var s=this.CW
return new A.av(s,A.o(s).i("av<2>")).bc(0,0,new A.mY(),t.i)},
hQ(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.p()
s=j.a
A.E(i.connect(A.a(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.E(r[k].connect(i))
r=j.z
r===$&&A.p()
A.a(r.gain).value=1
q=j.Q
q===$&&A.p()
A.a(q.gain).value=0.35
A.E(o.connect(r))
A.E(n.connect(r))
A.E(p.connect(r))
p=j.as
p===$&&A.p()
A.E(r.connect(p))
A.E(p.connect(q))
A.E(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.aX()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aX()
j.k3=p
A.E(q.connect(p))
A.E(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.E(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aX()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aX()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aX()
j.p1=r
A.E(p.connect(q))
A.E(i.connect(A.a(s.destination)))
j.em()},
em(){var s,r=this,q=r.k4
q===$&&A.p()
q.disconnect()
s=r.p1
s===$&&A.p()
s.disconnect()
if(r.p2){A.E(q.connect(s,0))
A.E(q.connect(s,1))
q=r.ok
q===$&&A.p()
A.E(s.connect(q,0,0))
A.E(s.connect(q,0,1))}else{s=r.ok
s===$&&A.p()
A.E(q.connect(s,0,0))
A.E(q.connect(s,1,1))}},
ce(){var s=this.a
if(A.q(s.state)==="suspended")A.a(s.resume())},
f8(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.jq.h(0,a)
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
iR(){var s,r,q,p,o,n,m,l=this.a,k=A.a4(l.sampleRate),j=B.c.aO(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aI()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dK(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aI()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.E(r.connect(q))
A.E(q.connect(p.f8(a)))
r.onended=A.W(new A.n_(r,q))
r.start()},
fV(a){return this.dK(a,1)},
fW(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
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
l=j.ex(j.b.fU(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h_(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.W(new A.mZ(j,o))
A.E(r.connect(q))
A.E(q.connect(n))
A.E(n.connect(o))
A.E(o.connect(p))
A.E(p.connect(j.f8(a)))
r.start()},
m_(a,b,c,d){return this.fW(a,b,c,1,d,null,null,null)},
ex(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.ay(r,q,p)},
ee(a){var s,r,q,p,o=this
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
A.E(q.connect(p))
r=o.e
r===$&&A.p()
A.E(p.connect(r))
q.onended=A.W(new A.n0(o,q,p))
q.start()
o.cy=q},
cS(a){if(this.p2===a)return
this.p2=a
this.em()},
hq(a){var s,r,q=this
q.cS(a.b===B.c_)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aQ?1:0.55
r=q.c
r===$&&A.p()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.p()
A.a(s.gain).value=0.35*q.p4},
bg(a,b,c,d,e,f){var s,r,q=this
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
e7(a){var s=null
return this.bg(s,s,s,s,a,s)},
hn(a){var s=null
return this.bg(s,s,a,s,s,s)},
hp(a){var s=null
return this.bg(s,s,s,s,s,a)},
hm(a){var s=null
return this.bg(s,a,s,s,s,s)},
hl(a){var s=null
return this.bg(a,s,s,s,s,s)},
ho(a){var s=null
return this.bg(s,s,s,a,s,s)},
hk(a){if(this.ay===a)return
this.ay=a
this.bu()},
bu(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cf(p,g)
m=n==null?i.ex(h.fU(p,g)):new A.ay(n.c,n.d,n.e)
l=A.a4(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.a4(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.a4(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.D(m.c,0,1)}}}
A.mY.prototype={
$2(a,b){return Math.max(A.br(a),t.jS.a(b).r)},
$S:60}
A.mX.prototype={
$1(a){return this.h8(t.q.a(a))},
h8(a){var s=0,r=A.bL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bN(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ar(A.bV(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ar(A.bV(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ar(A.bV(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ak(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$$1,r)},
$S:61}
A.n_.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.mZ.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.n0.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h_.prototype={}
A.jo.prototype={
v(){return"AudioCategory."+this.b}}
A.mN.prototype={
hS(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.h9)
if(!B.a.a7(A.c([d.a,d.b,d.c],t.n),new A.mO()))throw A.b(B.fv)}}
A.mO.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.mv.prototype={
hP(a,b){if(this.a.length===0)throw A.b(B.fl)
if(!B.a.a7(A.c([a.a,a.b,a.c],t.n),new A.mw()))throw A.b(B.fA)}}
A.mw.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.hm.prototype={
C(){var s=t.n
if(B.a.M(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mx()))throw A.b(B.fQ)
s=B.a.M(A.c([0,0.55,1],s),new A.my())
if(s)throw A.b(B.h0)},
cf(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ay(-1.5,2e4,0)
if(a.ay)return new A.ay(-28,320,1)
return new A.ay(-12,1100,0.55)},
my(a){return this.cf(a,null)}}
A.mx.prototype={
$1(a){return!isFinite(A.br(a))},
$S:5}
A.my.prototype={
$1(a){A.br(a)
return a<0||a>1},
$S:5}
A.mJ.prototype={
hR(a){var s=A.o(a)
if(new A.aa(a,s.i("aa<1>")).M(0,new A.mL())||new A.av(a,s.i("av<2>")).M(0,new A.mM()))throw A.b(B.h7)}}
A.mL.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.mM.prototype={
$1(a){var s
t.a.a(a)
s=J.aC(a)
return s.gO(a)||s.M(a,new A.mK())},
$S:62}
A.mK.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.w1.prototype={}
A.mV.prototype={}
A.mP.prototype={
hT(a,b,c){var s
for(s=this.b.gaD(),s=s.gu(s);s.m();)s.gn().C()},
h1(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.k("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.k("audio listener room missing: "+a0))
r=this.ju(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c7
e=f.cf(h,a1.h(0,g))
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.t)(o),++i)s.push(o[i].a)
o=B.c.D(l,-60,0)
m=B.d.D(k,120,2e4)
g=B.c.D(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.Y(p,"; ")
b=t.N
s=A.ai(s,b)
b=A.ai(q,b)
if(!isFinite(g)||g<0||g>1)A.j(B.h_)
return new A.mV(s,b,o,m,g,n,c)},
cf(a,b){return this.h1(a,b,B.bp)},
ju(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.mK
s=t.N
r=A.M([a0,0],s,t.i)
q=A.M([a0,B.X],s,t.Es)
p=A.aN([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.I(p,l)
B.a.P(k,new A.mQ(r))
j=B.a.gU(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.ip(s,!0)}i=o.aJ(j)
h=A.I(i,i.$ti.i("m.E"))
B.a.P(h,new A.mR())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.cc(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c7:d).my(f)
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
p.l(0,e)}}}return B.mJ}}
A.mQ.prototype={
$2(a,b){var s,r,q
A.q(a)
A.q(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.G(r,s)
return q===0?B.b.G(a,b):q},
$S:63}
A.mR.prototype={
$2(a,b){var s=t.T
return B.b.G(s.a(a).a,s.a(b).a)},
$S:64}
A.ip.prototype={}
A.fl.prototype={}
A.nj.prototype={
fN(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.f(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AL().bx(q).gau()
p.d=q
p.c=p.b.bx(q).gau()
p.a=a}}
A.o2.prototype={}
A.k3.prototype={
cM(a){if(this.at)return
A.pb(a,"requestPointerLock",t.X)},
e5(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.o(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.R(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mb(p,n)}this.b7()},
cW(a){var s,r,q,p,o,n,m=this
if(m.ch.cW(a))for(s=m.CW.aE("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
m0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.R(t.ik.b(c)?c:new A.aV(c,A.D(c).i("aV<1,ae?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.q(r.mapping)!=="standard")break A
c=A.q(r.id)
q=A.q(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.R(t.dd.b(n)?n:new A.aV(n,A.D(n).i("aV<1,u>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.R(t.nx.b(d)?d:new A.aV(d,A.D(d).i("aV<1,ae>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a4(r.value))}s=new A.kQ(!0,c,q,o,p)
break}}d=s==null
m=A.D4(d?B.lJ:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aE(e),q.gap(q))
q=f.r
q.iN(A.o(q).i("l(1)").a(new A.p4(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.dF())n.l(0,h)}else n.l(0,h)}}f.e=A.hP(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aE(e),l.gap(l))){d=r.a(f.c)
d=!B.a.M(c.aE(e),d.gap(d))}}if(d)i.dG()},
j3(a){var s=this
A.a(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.q(a.code)))if(B.a.q(s.CW.aE("interact"),A.q(a.code))){if(s.ch.dF())s.d.l(0,A.q(a.code))}else s.d.l(0,A.q(a.code))},
j5(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a5(0,A.q(a.code))
r=this.CW
if(B.a.q(r.aE(q),A.q(a.code))){t.Q.a(s)
s=!B.a.M(r.aE(q),s.gap(s))}else s=!1
if(s)this.ch.dG()},
j9(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.e(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aE("interact"),s)){if(r.ch.dF())r.d.l(0,s)}else r.d.l(0,s)},
jd(a){var s,r="interact",q="Mouse"+A.e(A.a(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.q(s.aE(r),q)){t.Q.a(p)
p=!B.a.M(s.aE(r),p.gap(p))}else p=!1
if(p)this.ch.dG()},
jf(a){var s
A.a(a)
if(!this.ay)return
s=A.a4(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jb(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.eS(a,"movementX")
s.as=s.as+s.eS(a,"movementY")},
j7(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
eS(a,b){var s=A.z9(a[b])
if(s==null)s=null
return s==null?0:s},
ct(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.ke(n.c,t.N)
for(r=n.e,r=A.fU(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.M(n.CW.aE(a),s.gap(s))},
b7(){var s=this
s.c.L(0)
s.d.L(0)
s.f.L(0)
s.r.I(0,s.e)
s.as=s.Q=0
s.ch.dQ()}}
A.p4.prototype={
$1(a){return!this.a.q(0,A.q(a))},
$S:3}
A.p3.prototype={
aE(a){var s=this.a.h(0,a)
return s==null?B.o:s},
mb(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.fU(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ai(q,r))},
bb(a,b){var s,r,q
t.Q.a(b)
for(s=this.aE(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.p7.prototype={
dF(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dG(){this.c=this.b=!1
this.d=0},
cW(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dQ(){this.c=this.b=!1
this.d=0}}
A.aU.prototype={}
A.pt.prototype={}
A.pq.prototype={
m4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.I(b,t.p)
B.a.I(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.x("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.n(h,t.N)
i.eI(n,i.d,a,b,i.a,j,m)
i.eI(l,i.e,a,c,i.b,j,k)
return new A.pt(n,l,j)},
eI(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.D(d)
s=k.i("N<1,+effectiveScore,light,score(u,aU,u)>")
r=A.I(new A.N(d,k.i("+effectiveScore,light,score(u,aU,u)(1)").a(new A.pr(this,c,b)),s),s.i("a1.E"))
B.a.P(r,new A.ps())
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
A.pr.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ao(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iH(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:66}
A.ps.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:67}
A.nI.prototype={
dk(a,b){var s,r,q,p,o,n,m,l=this
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
A.pz.prototype={
hF(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dk(b,c)},
jT(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.f(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.f(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.d_.prototype={
cK(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.cT(s,0,m,l)
n.a=s}r=b.ao(0,a).bx(d.ao(0,a)).gau()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.id(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.id(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.id(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.id(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.id(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.id(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aB(a,b,c,d,e){return this.cK(a,b,c,d,e,1,1)}}
A.f.prototype={
ah(a,b){return new A.f(this.a+b.a,this.b+b.b,this.c+b.c)},
ao(a,b){return new A.f(this.a-b.a,this.b-b.b,this.c-b.c)},
an(a,b){return new A.f(this.a*b,this.b*b,this.c*b)},
c0(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.f(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gau(){var s=this,r=s.gt(0)
return r<1e-9?new A.f(0,0,0):new A.f(s.a/r,s.b/r,s.c/r)}}
A.kQ.prototype={}
A.le.prototype={}
A.nc.prototype={
mK(a){var s,r,q,p,o,n=B.j.ab(a.B(),null)
this.a.fw(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
m5(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
p=this.eB(r,a)
if(p!=null)return new A.eN(p,null)
o=this.eB(q,a)
if(o!=null)return new A.eN(o,"recovered previous save")
if(r==null)return B.l8
return B.l7}catch(n){return B.l6}},
eB(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fw(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ak(q) instanceof A.F)return null
else throw q}}}
A.jJ.prototype={
hW(a,b,c,d,e){if(this.a.length===0)throw A.b(B.fY)
if(this.b<0)throw A.b(B.fw)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.b5(A.M(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.nS.prototype={}
A.fw.prototype={
B(){var s=t.N
return A.M(["kind",this.a.b],s,s)}}
A.nV.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:68}
A.bp.prototype={}
A.ku.prototype={
B(){var s,r=this,q=t.N,p=A.n(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.M(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lo(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ao(0,new A.f(0,1.3499999999999999,0))
return!new A.ju(s,s.ah(0,new A.f(0,1.2000000000000002,0))).cH(a,r)}}
A.qb.prototype={
B(){return A.m7(this.a)}}
A.fN.prototype={
B(){return A.M(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qz.prototype={
fw(a){var s,r,q,p,o,n,m,l=B.j.aF(a,null),k=t.f
if(!k.b(l))throw A.b(B.h8)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aJ(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a3("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.fE)
k=A.aM(n,s,r)
return A.yi(A.aM(m,s,r),k,2)}}
A.eN.prototype={}
A.ez.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jS.prototype={}
A.oe.prototype={}
A.od.prototype={
gaa(){var s=this.d
return new A.oe(s.a,s.b)},
gfX(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.M(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.M(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.M(["entryCount",m.e.b.a],k,t.S)
p=A.xR(m.c).B()
o=m.r
n=o.c
return new A.qb(A.m7(A.M(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.M(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
jW(a,b){if(!B.a.M(a.f,new A.of(b)))return!1
this.z.jV(a,b)
return!0},
lf(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("av<2>")
q=A.I(new A.av(s,r),r.i("m.E"))
B.a.P(q,new A.og())
if(q.length===0)return null
s=A.D(q)
r=s.i("G<1>")
p=A.I(new A.G(q,s.i("l(1)").a(new A.oh()),r),r.i("m.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dQ(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cO(a,l.a,s.length-1,B.a.gV(s).p(0))
j.k(0,a,k)
return k},
jS(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.ag(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cw(B.hi)}if(n<a)this.cw(B.hj)},
hI(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cV(a)&&s.hH(b)},
m6(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dS){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hE(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Bk(j,A.ai(i.d,h).length)
if(a===B.dF)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.D(r)
A.Bj(j,new A.G(r,q.i("l(1)").a(new A.oi(k)),q.i("G<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.ii,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aO(j.a/1*3)
B.a.l(r.r,new A.fP(q.a,a,b))
m=r.a
A.Bv(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.hs(B.iQ)
s.r.kl(o,c)
l=B.c.aO(j.b/1*6)
if(l>0)r.cV(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.av(i,A.o(i).i("av<2>")).M(0,new A.oj())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cw(B.hl)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cw(B.hk)},
cw(a){var s=this;++s.y
B.a.l(s.w,new A.jS())
B.a.l(s.x,A.Bl(A.Ed(a),s.b,s.y-1))}}
A.of.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:11}
A.og.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.oh.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:25}
A.oi.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.rj().hB(this.a.c,a.a)},
$S:72}
A.oj.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.n1.prototype={
dW(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.k("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.k("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.b(A.k("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.b(A.k("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.k(n+" origin.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.k(n+" origin.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.k(n+" origin.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.k(n+" size.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.k(n+" size.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.k(n+" size.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.b(A.k("window count mismatch for "+n))
for(n=A.D(j),i=n.i("l(1)"),n=n.i("G<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.bu(new A.G(j,i.a(new A.n6(e)),n),r)
if(d==null)throw A.b(A.k("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.j(A.k(c+" offset mismatch: "+A.w(h)+" != "+A.w(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.j(A.k(c+a+A.w(h)+" != "+A.w(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.j(A.k(c+a0+A.w(h)+" != "+A.w(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.b(A.k("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.k("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.j(A.k(q+a+A.w(n)+" != "+A.w(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.j(A.k(q+a0+A.w(n)+" != "+A.w(l)))
if(o.f!=m.at)throw A.b(A.k("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaQ(a1).b!==B.a.gaQ(s).b)throw A.b(A.k("stair manifest mismatch"))}}
A.n2.prototype={
$1(a){return A.B1(a,this.a)},
$S:73}
A.n3.prototype={
$1(a){var s=this.a,r=A.mf(a,"portal"),q=A.em(r,"id"),p=A.em(r,"a"),o=A.em(r,"b"),n=A.j9(r,"width"),m=A.j9(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.q(r.h(0,"doorKit")):null
return new A.ff(q,p,o,n*s,m*s,l)},
$S:74}
A.n4.prototype={
$1(a){var s=A.mf(a,"stair")
A.em(s,"id")
return new A.fh(A.em(s,"portalId"))},
$S:75}
A.n5.prototype={
$1(a){return typeof a=="string"?a:A.j5("exterior cell")},
$S:76}
A.n6.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.fg.prototype={}
A.n7.prototype={
$1(a){var s=this.a,r=A.mf(a,"window"),q=A.em(r,"id"),p=A.j9(r,"offset")
A.j9(r,"sill")
return new A.fi(q,p*s,A.j9(r,"width")*s,A.j9(r,"height")*s)},
$S:78}
A.fi.prototype={}
A.ff.prototype={}
A.fh.prototype={}
A.v4.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:12}
A.ju.prototype={
mr(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.D(s)
q=new A.G(s,r.i("l(1)").a(new A.nn(e)),r.i("G<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cv(b,p.f)&&a==="hall"))o=n.cv(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lf(p,B.c.D(d,0,1))},
lx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eR(g,c,d)
s=h.iJ(a,b,c,d)
if(s!=null){h.d=s
return h.eR(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.ke(Math.sqrt(r*r+q*q)/0.08))
o=d.an(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jE(a,n,m,o)
l=l||j.b
m=j.a
i=h.m2(a,n)
n=i==null?n:i}h.b9(m)
return new A.kh(m,n)},
iJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cv(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cv(c,l)){l=j<0||o
h=l}if(i||h)return new A.lf(m,i?0:1)}return null},
eR(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ao(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.yv(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.b9(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kh(n,k)},
cv(a,b){var s=a.ao(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cG(c,!1)
s=h.cA(a,b,c,new A.f(g,0,0))
r=s.a
q=d.c
p=h.cA(a,b,r,new A.f(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cG(p.a,!1)
n=c.ah(0,new A.f(0,0.35,0))
h.b9(n)
if(!h.cH(a,b)){m=h.cA(a,b,n,new A.f(g,0,0))
l=h.cA(a,b,m.a,new A.f(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.f(g,r-j,q)
h.b9(i)
if(h.cH(a,b))break}h.b9(k)
return new A.cG(k,!1)}}if(o)return new A.cG(r,!0)
if(!p.b)return new A.cG(p.a,!0)
h.b9(c)
return new A.cG(c,!0)},
cA(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cG(c,!1)
s=c.ah(0,d)
this.b9(s)
if(this.cH(a,b)){this.b9(c)
return new A.cG(c,!0)}return new A.cG(s,!1)},
b9(a){var s=a.ao(0,new A.f(0,1.3499999999999999,0))
this.a=s
this.b=s.ah(0,new A.f(0,1.2000000000000002,0))},
cH(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aA(m)
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
return!this.jB(a,m,s)},
m2(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aA(k)
for(r=k.a,q=a.aJ(r),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.cc(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fh(k,o,s)&&this.iC(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jB(a,b,c){var s,r,q
for(s=a.aJ(b.a),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fh(b,q,c))return!0}return!1},
fh(a,b,c){var s,r,q,p=a.a,o=b.aH(p),n=b.af(p)
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
iC(a,b,c){var s,r=this
switch(b.aH(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sk_(a){this.a=t.a7.a(a)}}
A.nn.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:80}
A.kh.prototype={}
A.cG.prototype={}
A.lf.prototype={}
A.hG.prototype={}
A.oH.prototype={
kl(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hC(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
hD(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.M(["landedCount",this.b],t.N,t.z)}}
A.Z.prototype={}
A.jM.prototype={
glr(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.c([r,q,p,o,n,m],t.n),new A.nX())&&o>=r&&n>=q&&m>=p}}
A.nX.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.k0.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.x("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.x("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glr())throw A.b(A.x("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.M(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oJ()))throw A.b(A.x("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.x("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.x("QHMX index "+o+" exceeds vertex count",m))}}}
A.oJ.prototype={
$1(a){return!isFinite(A.br(a))},
$S:5}
A.oI.prototype={
A(a,b,c,d,e,f,g){var s=this
s.br(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.br(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.br(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.br(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.br(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.br(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.Z(a,b,c,m,n,o,0,0,p),r=new A.Z(g,h,i,m,n,o,1,1,p)
this.ad(s,new A.Z(d,e,f,m,n,o,1,0,p),r)
this.ad(s,r,new A.Z(j,k,l,m,n,o,0,1,p))},
ad(a,b,c){var s=this,r=s.b
B.a.l(r,s.dc(a))
B.a.l(r,s.dc(b))
B.a.l(r,s.dc(c))},
dc(a){var s,r,q=B.a.Y(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.k("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
k8(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.k0(A.ai(g,t.hl),new Uint16Array(A.a0(this.b)),new A.jM(s,r,q,p,o,n))
h.C()
return h}}
A.jN.prototype={}
A.vW.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ah.q(0,s))A.j(A.k("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:81}
A.uZ.prototype={
$2(a,b){var s=t.Ez
return B.b.G(s.a(a).a,s.a(b).a)},
$S:82}
A.d6.prototype={
mJ(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iA(A.Go(new A.k0(i,new Uint16Array(A.a0(s)),A.DW(i))),l.a,l.b,l.c,A.c([],k))}}
A.iA.prototype={}
A.ew.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jO.prototype={
kf(a){var s
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
kg(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ck
break A}if("kitchen"===a||"cellar"===a){s=B.f3
break A}if("bathroom"===a){s=B.f4
break A}if("spare-room"===a){s=B.f5
break A}s=B.ck
break A}return this.kf(s)},
fC(a,b,c,d){d.i("m<0>").a(b)
t.Q.a(c)
return new A.cn(this.lc(d.i("h(0)").a(a),b,c,d),d.i("cn<0>"))},
lc(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fC(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a7(0,B.ah.gap(B.ah)))throw A.b(A.x("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ah.q(0,j))throw A.b(A.k("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ec.prototype={
fs(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uF.prototype={
$1(a){var s=this
return t.xT.a(a).fs(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:40}
A.uE.prototype={
$1(a){return t.xT.a(a).fs(0,(this.a+this.b)*0.5,this.c)},
$S:40}
A.dg.prototype={
v(){return"FocusKind."+this.b}}
A.dT.prototype={}
A.qw.prototype={}
A.tR.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:84}
A.tQ.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.uX.prototype={
$1(a){return B.d.D(B.c.aO(a*this.a),0,255)},
$S:85}
A.eb.prototype={}
A.fZ.prototype={}
A.oF.prototype={
ib(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oX(1.5),a4=this.b,a5=A.ao(a4,!0,t.U)
B.a.L(a4)
s=A.c([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.t)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.c([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.t)(i),++g){f=i[g]
j.push(new A.bb(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.c([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.t)(h),++g){d=h[g]
i.push(new A.bh(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.c([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.t)(e),++g){b=e[g]
h.push(new A.bj(b.a,b.b,a3.$1(b.c)))}s.push(new A.aZ(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.ao(a4,!0,t.T)
B.a.L(a4)
s=A.c([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.by(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dw(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
ic(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.oY(),a7=this.b,a8=A.ao(a7,!0,t.U)
B.a.L(a7)
s=A.c([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.t)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.c([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.t)(h),++f){e=h[f]
i.push(new A.bb(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.c([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.t)(g),++f){c=g[f]
h.push(new A.bh(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.c([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.t)(d),++f){a=d[f]
g.push(new A.bj(a.a,a.b,a6.$1(a.c)))}d=A.c([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.t)(b),++f){a1=b[f]
d.push(new A.de(a1.a,a1.b*1.5))}s.push(new A.aZ(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.I(a7,s)
a7=this.c
a2=A.ao(a7,!0,t.T)
B.a.L(a7)
s=A.c([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.by(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.I(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.c([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.t)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dw(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
iQ(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.k("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.k("duplicate portal "+n))
q.k(0,n,m)}},
jL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
jJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.n(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fg(o,i,h,g,f,e)
a5.ek(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.k(l+" references invalid portal "+d))
i=c.aH(l)
h=c.af(l)
g=c.w
f=c.x
a5.fg(o,i,h,g,0,f)
a5.ek(a6,l,c.aH(l),c.af(l),c.af(l)+g,0,f)}}for(s=new A.J(a6,a6.$ti.i("J<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c9(a)
r.P(a,new A.oZ())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.b(A.k("overlapping apertures on "+b.a))}}},
fg(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.m||b===B.l
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.k("aperture outside "+a.a+" "+b.b+" wall"))},
ek(a,b,c,d,e,f,g){J.hl(t.aD.a(a).cd(b+":"+c.b,new A.oW()),new A.iI([d,e,f,g]))},
aA(a){var s=a.c,r=this.r,q=a.a
return new A.f(s.a+r.hC(q),s.b+r.hD(q),s.c)},
aJ(a){var s=this.c,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.p_(a)),r.i("G<1>"))},
m1(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.ag(a,"roomId","not a portal endpoint"))
r=this.aA(o)
q=b.af(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aH(a).a){case 0:s=new A.f(s.a+q,p,s.c)
break
case 2:s=new A.f(s.a+q,p,s.c+r.c)
break
case 1:s=new A.f(s.a+r.a,p,s.c+q)
break
case 3:s=new A.f(s.a,p,s.c+q)
break
default:s=null}return s},
gmI(){return B.a.bc(this.b,0,new A.p0(),t.S)},
fU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.X
s=A.c([new A.aW(a,B.X)],t.nR)
r=A.aN([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.ma(s,0)
n=o.a
m=o.b
for(l=this.aJ(n),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.cc(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.I(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.I(m,p)
h.push(j)
B.a.l(s,new A.aW(i,h))}}}return B.X}}
A.oX.prototype={
$1(a){var s=this.a
return new A.f(a.a*s,a.b,a.c*s)},
$S:39}
A.oY.prototype={
$1(a){return a.an(0,1.5)},
$S:39}
A.oZ.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.G(a.a[0],b.a[0])},
$S:87}
A.oW.prototype={
$0(){return A.c([],t.wx)},
$S:177}
A.p_.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:89}
A.p0.prototype={
$2(a,b){return A.e(a)+t.U.a(b).e.length},
$S:90}
A.nW.prototype={}
A.rj.prototype={
hB(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.rk())}else s=!1
return s}}
A.rk.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.oK.prototype={
lZ(a){var s=this.e,r=A.D(s)
return new A.G(s,r.i("l(1)").a(new A.oN(a)),r.i("G<1>"))},
cC(a){return B.a.aW(this.d,new A.oL(a),new A.oM(a))},
dW(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.k("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.k("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.k("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.b(A.k("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.k("invalid bounds for inventory asset "+m))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.b(A.k("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.b(A.k(a7+m+" references "+l))
n=a6.cC(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.AI()
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
a4=g.h_(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.k(a7+m+" escapes "+f.a))}}}
A.oN.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:91}
A.oL.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:92}
A.oM.prototype={
$0(){return A.j(A.k("inventory asset missing: "+this.a))},
$S:6}
A.cV.prototype={}
A.cx.prototype={
h_(a,b){var s=this.f.c.b*b,r=a.f
return new A.f(r.a.b*s,r.b.b*s,0)}}
A.pa.prototype={}
A.p8.prototype={}
A.v3.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:12}
A.p9.prototype={
B(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.o(o).i("aa<1>")
n=A.I(new A.aa(o,n),n.i("m.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dS(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.fh)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.L(0)
for(q=new A.J(r,A.o(r).i("J<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aJ(o)||o<0)throw A.b(B.fx)
s.k(0,n,o)}}}
A.dq.prototype={}
A.oO.prototype={
mG(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fU(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.t)(n),++g){f=n[g]
if(!f.d||f.e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aA(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.f(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.f(a*a3,a0*a3,a1*a3)}else a4=new A.f(0,-1,0)
B.a.l(s,new A.dq(new A.f(d,c,e),a4,16760952,3.8,2.1*this.jt(k)))}}B.a.P(s,new A.oP(a6))
return A.kS(s,0,A.f9(4,"count",t.S),t.A_).bI(0)},
jt(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oP.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.G(a.a.ao(0,s).gt(0),b.a.ao(0,s).gt(0))},
$S:94}
A.hB.prototype={
v(){return"Floor."+this.b}}
A.dS.prototype={
v(){return"Facing."+this.b}}
A.bb.prototype={
shA(a){this.w=A.Q(a)}}
A.by.prototype={
cc(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aH(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.ag(a,"roomId","not an endpoint of "+s.a))},
af(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.ag(a,"roomId","not an endpoint of "+s.a))}}
A.bh.prototype={}
A.bj.prototype={}
A.de.prototype={}
A.dw.prototype={}
A.aZ.prototype={}
A.oR.prototype={
l5(a){return B.a.aW(this.c,new A.oS(a),new A.oT(a))},
mE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.k("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.k("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.n(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
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
if(k.gO(k)||k.gaD().M(0,new A.oU()))throw A.b(A.k("sound emitter "+l+" has no usable cues"))
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
A.oS.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:95}
A.oT.prototype={
$0(){return A.j(A.k("sound emitter missing: "+this.a))},
$S:6}
A.oU.prototype={
$1(a){return B.b.bf(A.q(a)).length===0},
$S:3}
A.cU.prototype={}
A.oG.prototype={
dl(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ag(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.iX}q=A.c([],t.Fm)
p=B.c.aX(r)+1
o=B.c.aX(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eC("tick"))
if(B.d.S(m,3)===0){B.a.l(q,new A.eC("cuckoo"))
B.a.l(q,new A.eC("bell"))}if(B.d.S(m,6)===0)B.a.l(q,new A.eC("chime"))}l.b=b
return q}}
A.eC.prototype={}
A.oQ.prototype={
dl(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ag(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iW}q=A.c([],t.op)
for(p=B.c.aX(r)+1;p<=B.c.aX(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.hN)
if(B.d.S(o,3)===1)B.a.l(q,B.hP)
if(B.d.S(o,8)===5)B.a.l(q,B.hS)
if(B.d.S(o,5)===0)B.a.l(q,B.hO)
if(B.d.S(o,7)===3)B.a.l(q,B.hT)
if(n===1)B.a.l(q,B.hQ)
if(B.d.S(o,6)===4)B.a.l(q,B.hR)}m.b=b
return q}}
A.cT.prototype={}
A.v2.prototype={
$1(a){return typeof a!="number"},
$S:12}
A.oV.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.M(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.M(["lit",o.a,"examined",o.b],m,r))}return A.M(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wY(new A.aa(o,A.o(o).i("aa<1>")),d)){d=f.b
if(A.wY(new A.aa(d,A.o(d).i("aa<1>")),r)){d=f.c
e=!A.wY(new A.aa(d,A.o(d).i("aa<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fR)
e=f.d
if(e<0||e>2)A.j(B.fo)
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
A.i0.prototype={
B(){return A.M(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hQ.prototype={
B(){return A.M(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bg.prototype={}
A.nR.prototype={
$1(a){return this.a.q(0,A.q(a))},
$S:3}
A.dV.prototype={
v(){return"Hand."+this.b}}
A.rV.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
eb(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kd.prototype={
B(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.B[r]
o.k(0,q,s.h(0,q))}return A.M(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.N(B.B,t.oI.a(new A.pw(this)),t.jT).Y(0," \xb7 ")}}
A.pv.prototype={
$2(a,b){return new A.L(A.q(a),A.q(b),t.q)},
$S:96}
A.pw.prototype={
$1(a){return this.a.a.h(0,A.q(a))},
$S:97}
A.bX.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.M(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pd.prototype={
bW(a){t.G.a(a)
return a.a===5&&B.a.a7(B.B,new A.pk(this,a))},
el(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bW(b))return null
s=this.e++
r=new A.bX(s,a,A.c([A.pu(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dt(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bW(b))return!1
B.a.l(s.c,A.pu(b,c,B.aB))
return!0},
jR(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bW(b))return!1
s.r=A.pu(b,0,B.cL)
return!0},
hs(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.L(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
mF(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.I(n,A.o(n).c)
B.a.X(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ah(r,r.r,r.e,A.o(r).i("ah<2>"));r.m();)s.push(r.d.B())
return A.M(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pk.prototype={
$1(a){var s
A.q(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.n8.prototype={
kQ(a,b){if(a.a===B.aH)return new A.q6(b,a.B(),B.du)
return new A.po(b,!1,null,a.B(),B.du)}}
A.hn.prototype={
B(){var s,r=this,q=A.n(t.N,t.X)
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
A.n9.prototype={
cj(a){var s,r,q,p=null,o=a==null?p:B.b.bf(a).toLowerCase()
if(o==null||o.length===0)return B.e4
s=o!=="pixeldart"
if(!s||o==="next"||o==="auto"||o==="legacy"){s=!s||o==="next"
r=o==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':p
return new A.hn(B.aH,s,o==="auto",!1,p,r,q)}return new A.hn(B.aH,!1,!1,!0,'unsupported renderer query "'+o+'"; use pixeldart',!1,p)}}
A.pp.prototype={}
A.po.prototype={
gby(){var s=this.b.gby(),r=s.h5(this.e)
return r},
c4(){if(this.f===B.dv)throw A.b(A.k("legacy backend is disposed"))
this.b.c4()
this.f=B.z},
be(a,b){if(a<=0||b<=0)throw A.b(A.x("legacy surface size must be positive",null))
if(this.f!==B.z)A.j(A.k("legacy backend is not ready"))
this.b.be(a,b)},
bp(a){if(this.f!==B.z)A.j(A.k("legacy backend is not ready"))
B.j.ab(A.M(["backend","legacy","interpolation",0,"facts",A.m7(a.a.a)],t.N,t.X),null)
this.b.bp(a)},
dB(a){if(this.f!==B.z)A.j(A.k("legacy backend is not ready"))
B.j.ab(A.M(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.q7.prototype={}
A.q6.prototype={
gby(){var s=this.b.gby(),r=s.h5(this.c)
return r},
c4(){if(this.d===B.dv)throw A.b(A.k("pixeldart backend is disposed"))
this.b.c4()
this.d=B.z},
be(a,b){if(this.d!==B.z)A.j(A.k("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.b(A.x("pixeldart surface size must be positive",null))
this.b.be(a,b)},
bp(a){var s,r=this,q="pixeldart backend is not ready",p=r.b,o=r.d
if(o===B.bz){if(p.xr){s=p.d
s===$&&A.p()
s=s.b===B.U}else s=!1
s=!s
if(s){r.d=B.z;++p.ry
o=B.z}if(o===B.bz)return}if(o!==B.z)A.j(A.k(q))
B.j.ab(A.M(["backend","pixeldart","interpolation",0,"facts",A.m7(a.a.a)],t.N,t.X),null)
if(p.xr){o=p.d
o===$&&A.p()
o=o.b===B.U}else o=!1
if(o){if(r.d!==B.z)A.j(A.k(q))
r.d=B.bz
return}p.bp(a)},
dB(a){if(this.d!==B.z)A.j(A.k("pixeldart backend is not ready"))
B.j.ab(A.M(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.q8.prototype={
kc(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c8.cj(a)
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
B.a.X(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.t)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.ks.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.q9.prototype={
B(){var s=this
return A.M(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qa.prototype={
dq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d<=0||c<=0)throw A.b(A.x("surface dimensions must be positive",null))
s=a.a
A:{if(B.a1===s){r=new A.f2(540,960)
break A}if(B.P===s){r=new A.f2(360,640)
break A}r=new A.f2(216,384)
break A}B:{if("0.50"===b){q=0.5
break B}if("0.67"===b){q=0.67
break B}if("0.75"===b){q=0.75
break B}if("0.85"===b){q=0.85
break B}q=1
break B}p=B.c.aO(r.b*q)
q=B.c.aO(r.a*q)
o=B.c.D(d/p,0,1)
n=B.c.D(c/q,0,1)
m=o<n?o:n
r=this.en(B.c.aO(p*m),320,d)
q=this.en(B.c.aO(q*m),180,c)
l=s===B.a1
k=s===B.P
p=a.b
j=p.q(0,"shadows")
p=p.q(0,"msaa")?2:1
if(j)if(l)i=3
else i=k?2:1
else i=0
if(l)h=1024
else h=k?768:512
if(l)g=64
else g=k?32:16
if(l)f=8
else f=k?4:1
if(l)e=8
else e=k?4:1
return new A.i5(a,r,q,p,i,h,g,f,e,B.eP)},
en(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.kc.prototype={}
A.qg.prototype={
mC(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b6
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b6
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.kc(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aI()*0.1,0.9+s.aI()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aI()*0.15
p.e=(0.6+s.aI()*2.8)/0.343
p.b=16-b*11+s.aI()*6}}}
A.kF.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eK.prototype={
v(){return"RendererBackendState."+this.b}}
A.qt.prototype={}
A.kG.prototype={}
A.qs.prototype={
i0(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.x("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.x("renderer provenance values must be non-empty",null))}},
h5(a){var s=this
return A.yf(s.a,s.c,s.d,!1,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
B(){var s,r,q,p=this,o=A.n(t.N,t.z)
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
A.qu.prototype={
be(a,b){if(a<=0||b<=0)throw A.b(A.x("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fJ(a,b){var s,r,q,p,o
for(s=A.ai(this.a.d,t.rO),r=A.D(s).i("eM<1>"),s=new A.eM(s,r),s=new A.aH(s,s.gt(0),r.i("aH<a1.E>")),r=r.i("a1.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.re.prototype={}
A.cF.prototype={
v(){return"ShaderDebugMode."+this.b},
gkX(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dv.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e5.prototype={
gfE(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aK(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aK(r,2)
else return B.c.aK(r,3)}}}
A.rf.prototype={
gbd(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bm,p)
s=B.bm[p]
p=this.f
p===$&&A.p()
r=A.D(p)
q=r.i("G<1>")
p=A.I(new A.G(p,r.i("l(1)").a(new A.ri(s)),q),q.i("m.E"))
return p},
gcF(){var s,r=this.gbd(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
me(){var s,r,q,p,o
if(this.b===4)this.e=B.aK
else for(s=this.gbd(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mc(){var s,r,q,p
this.e=B.aK
s=this.f
s===$&&A.p()
r=0
for(;r<36;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
H(a){var s,r,q=this.f
q===$&&A.p()
s=A.D(q)
r=A.bu(new A.G(q,s.i("l(1)").a(new A.rh(a)),s.i("G<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
aP(a){var s,r,q=this.f
q===$&&A.p()
s=A.D(q)
r=A.bu(new A.G(q,s.i("l(1)").a(new A.rg(a)),s.i("G<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.ri.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:17}
A.rh.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:17}
A.rg.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:17}
A.bS.prototype={
v(){return"SleepQuality."+this.b}}
A.bB.prototype={
v(){return"SleepLocation."+this.b}}
A.fP.prototype={}
A.nJ.prototype={
cV(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hH(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.M(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.M(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nK.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:99}
A.nL.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:100}
A.k4.prototype={
v(){return"InteractionType."+this.b}}
A.eW.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.t_.prototype={}
A.eV.prototype={}
A.jz.prototype={}
A.p1.prototype={}
A.p5.prototype={
e1(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.ah(s,s.r,s.e,A.o(s).i("ah<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.P(p,new A.p6())
return p},
kk(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.mI
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga1(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gV(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eV(B.aN,r)
s=r.a
o=B.a.gV(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gV(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eV(B.dV,r)
return new A.eV(B.bU,r)},
jl(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jz(e,!1,B.mH,null)
s=p.d===c
r=this.kk(p,d)
q.mF(e)
return new A.jz(e,s,r,r.a===B.aN&&s?'The world says "'+d.c+'". The entry says "'+B.a.gV(p.c).p(0)+'".':null)},
kR(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aN)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.p1(B.a.gV(s.c).p(0)+" but "+A.w(a.f))}}
A.p6.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:16}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qx.prototype={}
A.cY.prototype={}
A.qy.prototype={
gec(){var s=B.bq.h(0,this.a)
return s==null?0:s},
hL(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.cW
r=A.wK(b)
s=q.c
B.a.L(s)
B.a.I(s,r)
B.a.L(q.d)
q.a=B.aI
q.b=0
q.e=!1
return A.c([B.ey],t.xB)},
dk(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.x("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.cW
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.bq.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a2)l.jG(s)
p=l.b
o=B.bq.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cY())
if(q===B.a2){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.ex)}else{p=q.a+1
if(!(p<7))return A.d(B.cU,p)
l.a=B.cU[p]
l.b=0
B.a.l(s,new A.cY())}}}return A.ai(s,t.F3)},
B(){var s=this,r=t.N
return A.M(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
jG(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aX(l.b/l.gec()*A.ai(s,r).length),0,A.ai(s,r).length)
p=l.d
for(;;){o=A.ao(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.ao(s,!1,r)
o.$flags=3
n=o
o=A.ao(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cY())}}}
A.jT.prototype={
gef(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gkS(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))}}
A.eU.prototype={
B(){var s=this
return A.M(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rW.prototype={
dA(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aY(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.uG.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.D(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eU(r,q,A.zX(B.c.aK(s,2)),A.zX(B.c.aK(12-(r-1)*0.11000000000000001,2)))},
$S:101}
A.pL.prototype={
aY(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
jV(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("J<1,2>")
k=A.I(new A.J(k,j),j.i("m.E"))
B.a.P(k,new A.pN())
j=t.N
k=A.wa(k,j,j)
s=this.b
r=A.o(s).i("J<1,2>")
s=A.I(new A.J(s,r),r.i("m.E"))
B.a.P(s,new A.pO())
s=A.wa(s,j,j)
r=A.n(j,t.P)
q=this.c
p=A.o(q).i("J<1,2>")
q=A.I(new A.J(q,p),p.i("m.E"))
B.a.P(q,new A.pP())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.t)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.M(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.M(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pN.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:22}
A.pO.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:22}
A.pP.prototype={
$2(a,b){var s=t.gJ
return B.b.G(s.a(a).a,s.a(b).a)},
$S:103}
A.cO.prototype={
B(){var s=this
return A.M(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bw.prototype={
B(){var s=this
return A.M(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.q4.prototype={
e_(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aY("ashworth.compact","accepted"))B.a.l(r,B.kl)
if(q.aY(s,"taken"))B.a.l(r,B.kp)
else if(q.aY(s,"left"))B.a.l(r,B.km)
if(q.aY("sylvia.certificate","granted"))B.a.l(r,B.ko)
if(q.aY("residue.coal","cellar"))B.a.l(r,B.kk)
if(q.aY("telegram.08","read"))B.a.l(r,B.kj)
if(q.aY("truth.shawl","home"))B.a.l(r,B.ki)
if(q.aY("sowerby.paraffin","received"))B.a.l(r,B.kn)
if(q.aY("inspector.proclamation","acknowledged"))B.a.l(r,B.kh)
return r},
hb(a){var s=this.e_(),r=A.D(s),q=r.i("G<1>")
s=A.I(new A.G(s,r.i("l(1)").a(new A.q5(a)),q),q.i("m.E"))
return s}}
A.q5.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:35}
A.ro.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fR(e.a),c=t.N,b=t.P,a=A.n(c,b)
for(s=e.b,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jM(q,r.b))}s=A.fR(e.r)
q=A.fR(e.w)
p=A.fR(e.x)
o=A.n(c,t.rW)
for(n=e.as,n=new A.J(n,A.o(n).i("J<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.R(l.b);i.m();){h=i.gn()
j.push(A.M(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.n(c,b)
for(m=e.at,m=new A.J(m,A.o(m).i("J<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.n(c,b)
for(m=e.ax,m=new A.J(m,A.o(m).i("J<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.M(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jM(a,b){var s,r=A.fR(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fR(q.bE(0,new A.rp(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gW(s))r.k(0,"_ambient",A.fR(s.bE(0,new A.rq(),t.S,t.z)))
return r}}
A.rp.prototype={
$2(a,b){return new A.L(A.e(a),t.BX.a(b).B(),t.pr)},
$S:105}
A.rq.prototype={
$2(a,b){return new A.L(A.e(a),t.vw.a(b).B(),t.pr)},
$S:106}
A.eT.prototype={
B(){return A.M(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eS.prototype={
B(){return A.M(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.im.prototype={
B(){var s=t.N
return A.M(["field",this.a,"value",this.b],s,s)}}
A.la.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.M(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eJ.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gW(s))q.k(0,"effects",s)
return q}}
A.d4.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gW(s))q.k(0,"when",s)
return q}}
A.rr.prototype={
ca(){var s=0,r=A.bL(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ca=A.bN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ar(A.bV(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$ca)
case 6:n=b
j=t.N
s=7
return A.ar(A.bV(A.a(n.text()),j),$async$ca)
case 7:m=b
l=A.FS(m)
i=J.aT(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aT(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aT(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aT(l,"documents")
i.toString
h.a(i)
i=J.aT(l,"street")
i.toString
h.a(i)
i=J.aT(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aT(l,"nights")
i.toString
h.a(i)
i=J.aT(l,"endings")
i.toString
o.w=h.a(i)
i=J.aT(l,"records")
i.toString
o.x=h.a(i)
i=J.aT(l,"cues")
i.toString
h.a(i)
i=J.aT(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aT(l,"reactions"))){g=J.aT(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.n(j,t.z)
o.Q=h.a(g)
if(i.b(J.aT(l,"variants"))){g=J.aT(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.n(j,t.z)
o.as=h.a(g)
if(i.b(J.aT(l,"residues"))){g=J.aT(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.n(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.ak(e)
j=A.w(k)
throw A.b("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$ca,r)},
ha(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().cP(0,new A.rs())
r=p.$ti
q=t.N
return A.wa(new A.cA(p,r.i("L<h,h>(1)").a(new A.rt()),r.i("cA<1,L<h,h>>")),q,q)}return null},
e0(a,b){var s=this.ha(a)
return s==null?null:s.h(0,b)},
he(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.p()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.R(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.n(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.q(i.b))}B.a.l(p,new A.eJ(A.q(m.h(0,"id")),A.q(m.h(0,"label")),A.q(m.h(0,"reply")),A.b5(k,n,n)))}if(p.length<2)return g
return new A.la(r,a,b,c,d,A.ai(p,t.Y))},
hd(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.aC(p)||o!==B.c.aC(o))return n
return new A.eT(B.c.aC(p),B.c.aC(o))},
hc(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.aC(p)||typeof o!="string"||typeof n!="string")return m
return new A.eS(B.c.aC(p),o,n)},
mH(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.J(b4,A.o(b4).i("J<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.n(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dr(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.q(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hd(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.n(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hc(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.ah(b4,b4.r,b4.e,A.o(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.he(A.q(d.h(0,"visitor")),B.c.aC(A.a4(d.h(0,"day"))),A.q(d.h(0,"tier")),B.c.aC(A.a4(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.ah(b4,b4.r,b4.e,A.o(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.q(r.b))}s=A.q(d.h(0,"id"))
b2.k(0,s,new A.d4(s,A.q(d.h(0,"target")),A.q(d.h(0,a2)),A.b5(b,a5,a5)))}b4=a1.at
b4===$&&A.p()
b4=new A.J(b4,A.o(b4).i("J<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.J(b4,A.o(b4).i("J<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.R(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.im(A.q(a0.h(0,"field")),A.q(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.ro(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.rs.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:107}
A.rt.prototype={
$1(a){t.AC.a(a)
return new A.L(A.q(a.a),A.q(a.b),t.q)},
$S:108}
A.jh.prototype={
bB(a,b,c){var s=B.b.bf(a),r=B.b.bf(c)
if(r.length===0)return""
if(b||this.a===B.bW)return s.length===0?r:s+": "+r
if(this.a===B.bV)return r
return s.length===0?r:s+": "+r},
fD(a,b){return this.bB(a,!1,b)}}
A.w0.prototype={}
A.cM.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dJ.prototype={
bX(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dJ(q,p,o,n,m)},
kK(a){var s=null
return this.bX(s,s,s,a,s)},
kO(a){var s=null
return this.bX(s,s,s,s,a)},
kG(a){var s=null
return this.bX(s,s,a,s,s)},
kE(a){var s=null
return this.bX(s,a,s,s,s)},
ko(a){var s=null
return this.bX(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.M(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mu.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:109}
A.ms.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:33}
A.mt.prototype={
$0(){return A.j(B.h5)},
$S:6}
A.mF.prototype={
bK(a,b){var s,r=this,q=r.e.fD(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aM(q)
A.e(A.a(v.G.window).setTimeout(A.zk(new A.mH(r)),7000))},
aM(a){var s,r,q=this
if(!q.c||B.b.bf(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.e(A.a(v.G.window).setTimeout(A.zk(new A.mG(q,s)),4200))}}
A.mH.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:111}
A.mG.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:14}
A.cu.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cN.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dc.prototype={
v(){return"AudioReverbMode."+this.b}}
A.db.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dK.prototype={
cE(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dK(r,q,p,a==null?s.e:a)},
kD(a){return this.cE(null,null,a,null)},
ku(a){return this.cE(null,a,null,null)},
kI(a){return this.cE(null,null,null,a)},
kt(a){return this.cE(a,null,null,null)},
B(){var s=this
return A.M(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mS.prototype={
$1$2(a,b,c){return B.a.aW(c.i("m<0>").a(a),new A.mT(b,c),new A.mU(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:112}
A.mT.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.mU.prototype={
$0(){return A.j(A.a3("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.nb.prototype={
mB(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.fD(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.ne.prototype={
$1(a){return this.a.$0()},
$S:2}
A.ni.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nh.prototype={
$1(a){var s=A.eH(A.q(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.ng.prototype={
$1(a){A.q(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dM.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dN.prototype={
v(){return"BrushComponentState."+this.b}}
A.b3.prototype={
gjP(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bf(s.a).length===0||B.b.bf(s.c).length===0)throw A.b(B.fW)
if(s.e===B.c6&&s.b!==B.c5)throw A.b(B.fy)}}
A.nk.prototype={
l8(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
cR(a,b){if(b<=0){this.f=0
return}this.f=B.d.D(this.f+a,0,Math.max(0,b-1))},
bA(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
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
this.eG(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eG(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aV(a,b,c,d,e,f,g,h,i){return this.bA(a,b,c,d,e,!0,f,g,h,i)},
kY(a,b,c,d,e,f,g,h,i){return this.bA(a,b,14,c,d,e,f,g,h,i)},
l2(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ed()
s.bM(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aI()-0.5)*8
l=s.aI()
k=s.aI()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fz(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eF(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eF(0,0,c)
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
l0(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a4(A.a(q.measureText(a.toUpperCase())).width)+70)
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
l_(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
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
k=Math.min(r-28,Math.max(180,A.a4(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bA(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gmt()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.jO(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bc(i,0,new A.nl(c7),t.i)
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
c7.l8(d1==null?0:d1,c,a6)
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
B.a.l(f,new A.fn("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aV(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.fz(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bQ(b1,g),c1+22,b3)
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
B.a.l(c7.d,new A.fn("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aV("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
kZ(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.d(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bA(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.p()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText(this.bQ("["+p.a+"] "+p.b,122),o,r)
m.restore()}},
l1(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
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
c7.fillStyle="rgba(10, 8, 12, "+A.w(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aV(c2,3,18,c1,q,-0.025,r,o,n)
c0.l2(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bm[g]
e=d0.b===g
d=l+i*(g+0.5)
c=e?c4:c5
b=e?c3:c6
c0.bA(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c7.fillText(d0.e.gkX().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbd()
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
c0.bA(b,e?2.2:1,6,c,44,e,-0.02,a8,b1,b0)
if(e)c0.fz(!0,g+1,20,b1-j+20,b0)
c7.save()
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="left"
c7.textBaseline="middle"
b2=e?38:18
c=a9.e
b=c?122:250
c7.fillText(c0.bQ(a9.b.toUpperCase(),a8-b),b1-j+b2,b0)
b3=b1+j-20
if(c){b4=a9.z
c=b3-37
b=b4?c2:"#0c0a0e"
c0.kY(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfE(),c,b0)}else{b5=b3-80-80
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
c7.fillText(B.c.aK(b6,1)+" ",c-4,b0)
c7.textAlign="left"
c7.fillText(" "+B.c.aK(b7,1),b5+80+4,b0)
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 13px "Courier New", monospace'
c7.textAlign="right"
c7.textBaseline="middle"
c7.fillText(a9.gfE(),b3,b0)}c7.restore()}c7.restore()
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
eG(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eF(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
jO(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a4(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bQ(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a4(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a4(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.F(r,0,s-1)}return q?"...":r+"..."}}
A.nl.prototype={
$2(a,b){var s
A.br(a)
A.q(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a4(A.a(s.measureText(b)).width))},
$S:113}
A.fr.prototype={
gk7(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aC(r)
o.k(0,q,p.gO(r)?"":p.gU(r))}return o},
bw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.M(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.br(r)
q=n.h(0,i)
q.toString
A.br(q)
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
A.e(s)
r=n.h(0,j)
r.toString
A.br(r)
q=n.h(0,i)
q.toString
A.br(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gk7()
return A.fs(l,null,m,r,p,o,s,q)},
ds(a){var s=null
return this.bw(a,s,s,s,s,s)},
kA(a){var s=null
return this.bw(s,s,s,a,s,s)},
kB(a){var s=null
return this.bw(s,s,s,s,a,s)},
kx(a){var s=null
return this.bw(s,a,s,s,s,s)},
ky(a){var s=null
return this.bw(s,s,a,s,s,s)},
kP(a){var s=null
return this.bw(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fj)
p=this.r
if(p.gJ().M(0,new A.nA()))throw A.b(B.fZ)
if(p.gJ().M(0,new A.nB()))throw A.b(B.fN)
p=p.gaD()
o=A.o(p)
s=o.i("hz<m.E,h>")
r=s.i("G<m.E>")
q=A.I(new A.G(new A.hz(p,o.i("m<h>(m.E)").a(new A.nC()),s),s.i("l(m.E)").a(new A.nD()),r),r.i("m.E"))
if(A.hP(q,A.D(q).c).a!==q.length)throw A.b(B.fm)},
B(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.ao(r.b,!0,p))}return A.M(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nA.prototype={
$1(a){t.yx.a(a)
return J.xt(a.b,new A.nz(a))},
$S:32}
A.nz.prototype={
$1(a){var s
A.q(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xE(a)
else s=!1
return s},
$S:3}
A.nB.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.xt(a.b,B.dz.gap(B.dz))},
$S:32}
A.nC.prototype={
$1(a){return t.a.a(a)},
$S:115}
A.nD.prototype={
$1(a){return A.q(a).length!==0},
$S:3}
A.ny.prototype={
$1(a){return typeof a=="string"},
$S:12}
A.dL.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.er.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dd.prototype={}
A.jA.prototype={
bU(a){var s=this
if(!s.a.r.R(a))return new A.dd(B.c2,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e5},
kd(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aS
if(!A.xE(a)){p.c=p.b=null
return new A.dd(B.c4,B.dA.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xv(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dd(B.aT,a+" is already bound to "+s)}return p.ia(a)},
dR(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aS
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e6
case 1:s=A.wB(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wU(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.x6(r,k))
m.a=m.a.ds(s)
break
case 0:s=A.wB(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.kS(p,1,null,A.D(p).c)
o=p.$ti
p=new A.aH(p,p.gt(0),o.i("aH<a1.E>"))
o=o.i("a1.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.x6(r,k)}else{r=s.h(0,j)
r.toString
r=A.wU(A.x6(r,k),q)}s.k(0,j,r)
m.a=m.a.ds(s)
break}m.c=m.e=m.d=null
return B.c0},
ia(a){var s,r,q=this,p=q.b
if(p==null)return B.aS
s=A.wB(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wU(r,a))
q.a=q.a.ds(s)
q.b=null
return B.c0}}
A.ht.prototype={
hU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jA(f.w)
s=f.b
s.className=A.q(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.nf(a,B.ef,1)))
A.a(s.appendChild(A.A(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.A(a,"div",c,e)
f.ej(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.ej(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.cZ(a,r,"invertX","Invert horizontal look")
f.cZ(a,r,"invertY","Invert vertical look")
f.cZ(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.A(a,"div",c,e)
for(p=B.jk.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fs(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mr(l)?"unbound":J.xx(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dO(a,new A.b3("settings.controls.bind."+m,B.c5,n,h,B.p),new A.nw(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.A(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.A(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.di()
A.a(s.appendChild(A.dO(a,B.eg,new A.nx(f),e)))},
fQ(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.eJ(this.x.kd(A.q(a.code)))},
eJ(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aT?B.ek:B.p
p=o.Q.h(0,r)
if(p!=null)A.w2(p,q)}n=a.a
if(n===B.aT)o.jx()
else if(n===B.c3){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.di()}else{o.d1()
o.ax=null}},
jx(){var s,r,q,p,o
this.d1()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.ih[r]
p=A.E(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dO(p,new A.b3("settings.controls.resolve."+o,B.F,o,"resolve key binding conflict",B.p),new A.nv(this,q),null)))}},
d1(){var s,r=this.at
if(r==null)return
while(A.E(r.firstChild)!=null){s=A.E(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
di(){var s,r,q,p
for(s=this.Q,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mr(p)?"unbound":J.xx(p," / ")
r.textContent=q
A.w2(r,B.p)}},
ej(a,b,c,d,e,f){var s,r=A.A(a,"label","setting-row",null)
A.a(r.appendChild(A.A(a,"span",null,d)))
s=A.B4(a,new A.b3("settings.controls."+c,B.ei,d,null,B.p),f,e,new A.nt(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
cZ(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.B5(a,new A.b3("settings.controls."+c,B.ej,d,null,B.p),!1,new A.nu(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eH(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdI(a){this.f=t.pf.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.nw.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.bU(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.c1){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.w2(q,B.c6)}p.d1()
return null},
$S:0}
A.nx.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nv.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.eJ(r.dR(this.b))},
$S:0}
A.nt.prototype={
$1(a){var s=this.a,r=s.w
s.eH(this.b==="horizontalSensitivity"?r.ky(a):r.kP(a))},
$S:116}
A.nu.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kA(a)
break A}if("invertY"===q){s=r.w.kB(a)
break A}s=r.w.kx(a)
break A}r.eH(s)},
$S:7}
A.nE.prototype={
hV(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.A(s,"h1","journal-title","credits")))
r=A.A(s,"p","credits-body",null)
p.f!==$&&A.aX()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.A(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.A(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.W(new A.nF(p)))
A.a(o.appendChild(q))}}
A.nF.prototype={
$1(a){return this.a.a6()},
$S:2}
A.nN.prototype={
hX(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.A(a,o,"door-speaker",p)
q.b!==$&&A.aX()
q.b=s
r=A.A(a,o,"door-line",p)
q.c!==$&&A.aX()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.A(a,o,"door-choice-status",p)
q.d!==$&&A.aX()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.A(a,o,"door-cite-list",p)
q.f!==$&&A.aX()
q.f=r
s=A.A(a,o,"door-cite-result",p)
q.r!==$&&A.aX()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.A(a,"button","door-continue","continue")
q.e!==$&&A.aX()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.nO(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.W(new A.nP(q,a)))
A.a(A.E(a.body).appendChild(n))},
e8(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.K.bB("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.xH(B.b8)
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
e9(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.K.bB("",!0,a)
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
hx(a){return this.e9(a,!1)},
hz(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.xH(r)},
ea(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.K.bB("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.a(s.style).display=""},
hw(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=A.tV,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nQ(o,this)
if(typeof o=="function")A.j(A.x("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.hh()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
slE(a){this.w=t.Z.a(a)},
slD(a){this.x=t.vR.a(a)}}
A.nO.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:31}
A.nP.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.q(a.code)!=="Tab")return
r=A.c([],t.sL)
q=s.e
q===$&&A.p()
if(A.q(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.p()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.e(p.length);++o){n=A.E(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.E(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gU(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gV(r).focus()}}else if(m===B.a.gV(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:119}
A.nQ.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:31}
A.nT.prototype={
hY(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.A(s,"h1","journal-title",null)
o.f!==$&&A.aX()
o.f=r
q=A.A(s,"div","ending-copy",null)
o.r!==$&&A.aX()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.A(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.W(new A.nU(o)))
A.a(n.appendChild(p))},
hy(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bF()},
slI(a){this.w=t.Z.a(a)}}
A.nU.prototype={
$1(a){var s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.ok.prototype={
bo(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.ao(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
mA(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lh(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fl()
return!0}return!1}if(a==="Space"){s=B.a.dD(l,new A.ol())
if(s!==-1){n.ck(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.S(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.S(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.ck(q)
return!0}}if(B.b.T(a,"Digit")){p=A.dr(B.b.b1(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.dr(B.b.b1(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.ck(o)
return!0}return!1},
ck(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
fl(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
li(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fl()
return!0}this.ck(a.b)
return!0},
slC(a){this.y=t.dt.a(a)},
slH(a){this.z=t.Z.a(a)}}
A.ol.prototype={
$1(a){A.q(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.om.prototype={}
A.dj.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cP.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cQ.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dk.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.di.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dl.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cd.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dh.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fy.prototype={
aU(a,b,c,d,e,f,g,h,i,a0){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a0==null?s.d:a0,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a
return A.w3(j,n,k,l,r,o,q,m,i==null?s.z:i,p)},
kL(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,a,s)},
kr(a){var s=null
return this.aU(s,s,a,s,s,s,s,s,s,s)},
kz(a){var s=null
return this.aU(s,s,s,s,a,s,s,s,s,s)},
kF(a){var s=null
return this.aU(s,s,s,s,s,s,a,s,s,s)},
kM(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,s,a)},
kC(a){var s=null
return this.aU(s,s,s,s,s,a,s,s,s,s)},
kq(a){var s=null
return this.aU(s,a,s,s,s,s,s,s,s,s)},
kJ(a){var s=null
return this.aU(s,s,s,s,s,s,s,a,s,s)},
kp(a){var s=null
return this.aU(a,s,s,s,s,s,s,s,s,s)},
kv(a){var s=null
return this.aU(s,s,s,a,s,s,s,s,s,s)},
B(){var s=this
return A.M(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z],t.N,t.K)}}
A.on.prototype={
$1$2(a,b,c){var s
A.zW(c,t.Ct,"T","call")
c.i("m<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.a3("invalid gameplay setting: "+a,null,null))
return B.a.aW(b,new A.oo(s,c),new A.op(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:120}
A.oo.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.op.prototype={
$0(){return A.j(A.a3("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cv.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dU.prototype={
bv(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dU(s.a,r,q,p,o,n,m)},
dr(a){var s=null
return this.bv(a,s,s,s,s,s)},
ft(a){var s=null
return this.bv(s,a,s,s,s,s)},
fu(a){var s=null
return this.bv(s,s,s,a,s,s)},
kH(a){var s=null
return this.bv(s,s,s,s,a,s)},
kw(a){var s=null
return this.bv(s,s,a,s,s,s)},
kN(a){var s=null
return this.bv(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.j3,q))throw A.b(A.a3("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.ip,q))throw A.b(A.a3("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.j6,q))throw A.b(A.a3("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.j0,q))throw A.b(A.a3("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.M(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oz.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:30}
A.oA.prototype={
$0(){return A.j(B.fD)},
$S:6}
A.oB.prototype={
B(){return A.M(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.ot.prototype={}
A.ou.prototype={}
A.hF.prototype={
hZ(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.a(l.appendChild(A.A(a,"h1","journal-title","Graphics")))
A.a(l.appendChild(A.A(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.A(a,"div","settings-grid",n)
r=t.N
o.bN(a,s,"preset","quality preset",A.M(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bN(a,s,"renderScale","render scale",A.M(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bN(a,s,"frameTarget","frame target",A.M(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bN(a,s,"antialiasing","anti-aliasing",A.M(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bN(a,s,"textureQuality","texture quality",A.M(["high","High","medium","Medium","low","Low"],r,r))
q=A.A(a,"label","setting-toggle",n)
r=A.a(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.W(new A.ox(o)))
r=o.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.A(a,"span",n,"Dynamic resolution")))
A.a(s.appendChild(q))
A.a(l.appendChild(s))
r=A.A(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.a(l.appendChild(r))
p=A.A(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.W(new A.oy(o)))
A.a(l.appendChild(p))},
bN(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.J(e,A.o(e).i("J<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.W(new A.ow(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
eM(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
cl(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.Y(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
sdI(a){this.f=t.CA.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.ox.prototype={
$1(a){var s=this.a
s.eM(s.z.ft(A.Q(s.x.checked)))},
$S:1}
A.oy.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.ow.prototype={
$1(a){var s,r=A.q(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.z.fu(B.a.ae(B.cT,new A.ov(r)))
break A}if("renderScale"===p){s=q.z.kH(r)
break A}if("frameTarget"===p){s=q.z.kw(r)
break A}if("antialiasing"===p){s=q.z.dr(r)
break A}if("textureQuality"===p){s=q.z.kN(r)
break A}s=q.z
break A}q.eM(s)},
$S:1}
A.ov.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:30}
A.ji.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.oC.prototype={
h9(a,b,c){if(c)return B.iE
if(b&&a!=null)return A.c([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.jg}}
A.oD.prototype={
i_(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.A(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.A(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.A(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.A(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.W(new A.oE(this)))
A.a(p.appendChild(r))}}
A.oE.prototype={
$1(a){return this.a.a6()},
$S:2}
A.pe.prototype={
bF(){var s,r=this
r.hO()
s=r.r.a-1
if(s<1)s=1
r.CW=r.er(r.CW,s)
r.jo()
r.eZ()},
ij(){var s,r=this,q=r.a,p=A.A(q,"div","page-turn",null),o=A.A(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.W(new A.pf(r)))
s=A.A(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.pg(r)))
q=A.A(q,"span","right-day-label",null)
r.Q!==$&&A.aX()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fe(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.er(s.CW+a,r)
s.eZ()},
er(a,b){if(a<1)return 1
if(a>b)return b
return a},
jo(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.p()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.p()
s.textContent=""
for(s=j.w.e1(),r=s.length,q=A.tV,p=j.a,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m=B.a.gV(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.ph(j,n,l)
if(typeof m=="function")A.j(A.x("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.hh()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
eZ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ah<2>"),n=new A.ah(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.P(r,new A.pi())
j.eY(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.ah(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.P(s,new A.pj())
j.eY(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.a(i.style).setProperty("width",B.c.aK(k*100,1)+"%")},
eY(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.a(a.appendChild(this.iK(b[r])))},
iK(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.A(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.c.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.iZ(m,!1)
l.className=A.q(l.className)+" margin"
A.a(j.appendChild(l))}return j},
iZ(a,b){var s=b?"hand-line struck":"hand-line",r=A.A(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.pf.prototype={
$1(a){return this.a.fe(-1)},
$S:2}
A.pg.prototype={
$1(a){return this.a.fe(1)},
$S:2}
A.ph.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pi.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.pj.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:16}
A.cW.prototype={}
A.fn.prototype={}
A.pU.prototype={
gmt(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.F(s,0,B.c.aC(B.c.D(r*q,0,r)))}}
A.i_.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.E(this.a.body).appendChild(s))},
bF(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.q(n.className),"open"))return
s=$.pV
if(s!=null&&s!==o)s.a6()
$.pV=o
r=o.a
o.d=A.E(r.activeElement)
A.pb(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.W(o.gjg())
o.e=q
r.addEventListener("keydown",q)
p=A.zi(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.q(A.q(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pV===q)$.pV=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
fQ(a){},
jh(a){A.a(a)
this.fQ(a)
if(A.Q(a.defaultPrevented))return
if(A.q(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.q(a.code)==="Tab")this.jD(a)},
jD(a){var s,r=A.zi(this.b)
if(r.length===0)return
s=A.E(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gV(r).focus()}}else if(s===B.a.gV(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
sb_(a){this.c=t.Z.a(a)}}
A.bi.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e1.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dp.prototype={
B(){var s,r=A.n(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a4(a,b){if(b==null)return!1
return b instanceof A.dp&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gN(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e0.prototype={
gfo(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bs},
B(){var s=A.n(t.N,t.X),r=this.a,q=A.D(r),p=q.i("N<1,X<h,H?>>")
r=A.I(new A.N(r,q.i("X<h,H?>(1)").a(new A.q_()),p),p.i("a1.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.D(r)
p=q.i("N<1,h>")
r=A.I(new A.N(r,q.i("h(1)").a(new A.q0()),p),p.i("a1.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.q_.prototype={
$1(a){return t.oP.a(a).B()},
$S:122}
A.q0.prototype={
$1(a){return t.wJ.a(a).b},
$S:123}
A.c0.prototype={}
A.pZ.prototype={
fR(a){var s,r=this
if(r.a.gfo())return new A.c0(B.a0,r.a,null)
s=r.a
s=new A.e0(B.j2,s.b,a)
r.a=s
return new A.c0(B.dj,s,"pause.resume")},
jZ(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gV(p)
q=r.a.a
q=B.a.aR(q,0,q.length-1)
p=r.a
p=new A.e0(q,p.b,p.c)
r.a=p
return new A.c0(B.dk,p,s.c)}if(q.gfo()&&r.a.b.length===0)return r.ce()
return new A.c0(B.a0,r.a,null)},
ce(){var s=this.a
if(s.a.length===0)return new A.c0(B.a0,s,null)
if(s.b.length!==0)return new A.c0(B.a0,s,null)
this.a=B.br
return new A.c0(B.dl,B.br,s.c)},
lY(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c0(B.a0,q.a,null)
s=q.a
r=A.I(s.b,t.wJ)
r.push(a)
s=new A.e0(s.a,r,q.a.c)
q.a=s
return new A.c0(B.dj,s,null)},
kW(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c0(B.a0,o.a,null)
s=o.a
r=s.b
q=A.D(r)
p=q.i("G<1>")
r=A.I(new A.G(r,q.i("l(1)").a(new A.q1(a)),p),p.i("m.E"))
q=o.a.c
r=new A.e0(s.a,r,q)
o.a=r
return new A.c0(B.kg,r,q)},
iD(a){var s
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
A.q1.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:124}
A.cD.prototype={
v(){return"PauseRootAction."+this.b}}
A.q2.prototype={
bh(a,b,c,d){var s=B.jw.h(0,c)
s.toString
A.a(b.appendChild(A.dO(a,new A.b3(s,B.F,d,null,B.p),new A.q3(this,c),null)))},
slT(a){this.f=t.Z.a(a)},
slV(a){this.r=t.Z.a(a)},
slF(a){this.w=t.Z.a(a)},
slU(a){this.x=t.Z.a(a)},
slL(a){this.y=t.Z.a(a)},
slG(a){this.z=t.Z.a(a)},
sb4(a){this.Q=t.Z.a(a)}}
A.q3.prototype={
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
A.bR.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.qf.prototype={
hv(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bB("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qF.prototype={
i1(a){var s,r,q,p,o,n=this.b
n.className=A.q(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.nf(a,B.ee,1)))
A.a(n.appendChild(A.A(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.A(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iF[r]
p=B.d5.h(0,q)
p.toString
o=B.d4.h(0,q)
o.toString
A.a(s.appendChild(A.dO(a,new A.b3(o,B.F,p,p+" settings",B.p),new A.qG(this,q),null)))}A.a(s.appendChild(A.dO(a,B.ed,new A.qH(this),null)))
A.a(n.appendChild(s))},
slB(a){this.f=t.hQ.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.qG.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qH.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fO.prototype={
i2(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.d5.h(0,d))+" settings",a=h.b
a.className=A.q(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.nf(a0,new A.b3("settings."+(s==null?f:s)+".heading",B.ar,b,g,B.p),2)))
A.a(a.appendChild(A.A(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.A(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.r4(h)),p=B.a.gu(B.C),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.iY(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.A(a0,"div",e,g)
for(s=s.a(new A.r5(h)),q=B.a.gu(B.C),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.jC(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.H)A.a(a.appendChild(h.ih(a0)))
if(d===B.I)A.a(a.appendChild(h.ig(a0)))
if(d===B.a_)A.a(a.appendChild(h.ii(a0)))
i=A.A(a0,"div",e,g)
for(s=t.pz.a(h.giS()),q=B.a.gu(B.j4),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dO(a0,new A.b3("settings."+o+".reset."+n,B.F,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.r6(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dO(a0,new A.b3("settings."+(s==null?f:s)+".reset.all",B.F,"reset all settings","restore all settings to defaults",B.el),new A.r7(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dO(a0,new A.b3("settings."+(d==null?f:d)+".back",B.F,"return","return to settings categories",B.p),new A.r8(h),g)))},
ig(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.A(a,"div","settings-grid",j),f=k.cY(a,g,"reducedMotion","reduced motion (system default)"),e=k.cY(a,g,i,"photosensitivity-safe effects (system default)"),d=k.cY(a,g,"captions","non-speech captions"),c=A.A(a,"label",h,j)
A.a(c.appendChild(A.A(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.W(new A.qY(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.A(a,"label",h,j)
A.a(r.appendChild(A.A(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bk[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.W(new A.qZ(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.A(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.W(new A.r_(k)))
A.a(g.appendChild(l))
k.k4.I(0,A.M(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.ok.k(0,"screenReaderVerbosity",q)
return g},
cY(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.W(new A.qI(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
e4(a){var s,r
this.k3=a
s=this.k4
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.c.p(r==null?1:r)}s=this.ok.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a9:r).b}},
ii(a){var s,r,q,p,o=this,n=null,m="confirmations",l="setting-toggle",k=A.A(a,"div","settings-grid",n)
o.b6(a,k,"interactionMode","interaction mode",B.bj,t.bK)
o.b6(a,k,"promptDensity","prompt density",B.bn,t.dn)
o.b6(a,k,"textPacing","text pacing",B.bl,t.j_)
o.b6(a,k,"journalLayout","journal layout",B.bd,t.gm)
o.b6(a,k,m,m,B.b7,t.aJ)
o.b6(a,k,"saveFeedback","save feedback",B.be,t.mx)
o.b6(a,k,"focusLossBehavior","when the window loses focus",B.aD,t.x)
o.b6(a,k,"clockFormat","clock format",B.ba,t.vS)
s=A.A(a,"label",l,n)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=o.k2.x
r.addEventListener("change",A.W(new A.r0(o,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.A(a,"span",n,"contextual reminders")))
A.a(k.appendChild(s))
o.id=r
q=A.A(a,"label",l,n)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=o.k2.z
p.addEventListener("change",A.W(new A.r1(o,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.A(a,"span",n,"show daily objective")))
A.a(k.appendChild(q))
o.k1=p
return k},
b6(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.zW(f,t.Ct,"T","_addGameplaySelect")
f.i("C<0>").a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.W(new A.qW(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k2=a
for(s=f.go,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
if(s!=null)s.checked=a.z},
ih(a){var s,r,q=this,p=A.A(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.bi[s].b
n.k(0,r,r)}q.cm(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.bc[s].b
n.k(0,r,r)}q.cm(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.bb[s].b
n.k(0,r,r)}q.cm(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.b9[s].b
o.k(0,n,n)}q.cm(a,p,"ducking","voice intelligibility",o)
return p},
cm(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.a(s.appendChild(A.A(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.J(e,A.o(e).i("J<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.W(new A.qN(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p2.k(0,c,r)},
hg(a){var s,r,q,p,o,n,m,l,k
this.p1=a
for(s=this.p2,s=new A.J(s,A.o(s).i("J<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eN(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Z===r){s=a.c===B.aJ
break A}if(B.I===r){s=a.c===B.a4
break A}if(B.H===r){s=a.c===B.E
break A}s=!1
break A}return s},
iT(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Z===s){r=a===B.aJ
break A}if(B.I===s){r=a===B.a4
break A}if(B.H===s){r=a===B.E
break A}r=!1
break A}return r},
jC(a,b){var s=this,r=A.A(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.W(new A.r3(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.A(a,"span",null,b.b)))
return r},
iY(a,b,c,d,e){var s,r,q=this,p=A.A(a,"label","setting-row",null),o=A.A(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.A(a,"output",null,"100%")
n.addEventListener("input",A.W(new A.r2(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aW(e,d))
return p},
e6(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kw
r=B.c.D(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aO(r*100)+"%"},
slN(a){this.r=t.DI.a(a)},
slP(a){this.w=t.xl.a(a)},
slO(a){this.x=t.xl.a(a)},
slJ(a){this.y=t.DI.a(a)},
slM(a){this.z=t.xl.a(a)},
slX(a){this.Q=t.xl.a(a)},
slS(a){this.as=t.Ci.a(a)},
slR(a){this.at=t.Z.a(a)},
sb4(a){this.ax=t.Z.a(a)},
slA(a){this.ay=t.kC.a(a)},
slK(a){this.ch=t.hq.a(a)},
slz(a){this.CW=t.Cv.a(a)},
slQ(a){this.cx=t.Z.a(a)}}
A.r4.prototype={
$1(a){t.gl.a(a)
return a.d===B.Q&&this.a.eN(a)},
$S:21}
A.r5.prototype={
$1(a){t.gl.a(a)
return a.d===B.ai&&this.a.eN(a)},
$S:21}
A.r6.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.r7.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.r8.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:0}
A.qY.prototype={
$1(a){var s=this.a,r=s.k3,q=A.eH(A.q(this.b.value))
r=r.kO(q==null?1:q)
s.k3=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qZ.prototype={
$1(a){var s=this.a,r=s.k3.kK(B.a.ae(B.bk,new A.qX(this.b)))
s.k3=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qX.prototype={
$1(a){return t.mq.a(a).b===A.q(this.a.value)},
$S:33}
A.r_.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qI.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k3.kG(r)
break A}if("photosensitivitySafe"===p){s=q.k3.kE(r)
break A}if("captions"===p){s=q.k3.ko(r)
break A}s=q.k3
break A}q.k3=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.r0.prototype={
$1(a){var s=this.a,r=s.k2.kr(A.Q(this.b.checked))
s.k2=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r1.prototype={
$1(a){var s=this.a,r=s.k2.kL(A.Q(this.b.checked))
s.k2=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qW.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k2.kz(B.a.ae(B.bj,new A.qO(r.c)))
break A}if("promptDensity"===p){s=q.k2.kF(B.a.ae(B.bn,new A.qP(r.c)))
break A}if("textPacing"===p){s=q.k2.kM(B.a.ae(B.bl,new A.qQ(r.c)))
break A}if("journalLayout"===p){s=q.k2.kC(B.a.ae(B.bd,new A.qR(r.c)))
break A}if("confirmations"===p){s=q.k2.kq(B.a.ae(B.b7,new A.qS(r.c)))
break A}if("saveFeedback"===p){s=q.k2.kJ(B.a.ae(B.be,new A.qT(r.c)))
break A}if("clockFormat"===p){s=q.k2.kp(B.a.ae(B.ba,new A.qU(r.c)))
break A}s=q.k2.kv(B.a.ae(B.aD,new A.qV(r.c)))
break A}q.k2=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.qO.prototype={
$1(a){return t.bK.a(a).b===A.q(this.a.value)},
$S:127}
A.qP.prototype={
$1(a){return t.dn.a(a).b===A.q(this.a.value)},
$S:128}
A.qQ.prototype={
$1(a){return t.j_.a(a).b===A.q(this.a.value)},
$S:129}
A.qR.prototype={
$1(a){return t.gm.a(a).b===A.q(this.a.value)},
$S:130}
A.qS.prototype={
$1(a){return t.aJ.a(a).b===A.q(this.a.value)},
$S:131}
A.qT.prototype={
$1(a){return t.mx.a(a).b===A.q(this.a.value)},
$S:132}
A.qU.prototype={
$1(a){return t.vS.a(a).b===A.q(this.a.value)},
$S:133}
A.qV.prototype={
$1(a){return t.x.a(a).b===A.q(this.a.value)},
$S:41}
A.qN.prototype={
$1(a){var s,r=this,q=r.a,p=q.p1,o=r.b
A:{if("output"===o){s=p.kD(B.a.ae(B.bi,new A.qJ(r.c)))
break A}if("dynamicRange"===o){s=p.ku(B.a.ae(B.bc,new A.qK(r.c)))
break A}if("reverb"===o){s=p.kI(B.a.ae(B.bb,new A.qL(r.c)))
break A}s=p.kt(B.a.ae(B.b9,new A.qM(r.c)))
break A}q.p1=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qJ.prototype={
$1(a){return t.xs.a(a).b===A.q(this.a.value)},
$S:135}
A.qK.prototype={
$1(a){return t.EL.a(a).b===A.q(this.a.value)},
$S:136}
A.qL.prototype={
$1(a){return t.gc.a(a).b===A.q(this.a.value)},
$S:137}
A.qM.prototype={
$1(a){return t.ul.a(a).b===A.q(this.a.value)},
$S:138}
A.r3.prototype={
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
A.r2.prototype={
$1(a){var s,r,q=this,p=A.eH(A.q(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aO(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bA.prototype={
v(){return"SettingCategory."+this.b}}
A.i9.prototype={
v(){return"SettingKind."+this.b}}
A.b_.prototype={
cN(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.a3(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.a3(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bK(a))throw A.b(A.a3(r.a+" must be boolean",q,q))
break}}}
A.rb.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:21}
A.rc.prototype={
$0(){return A.j(A.k("unknown setting: "+this.a))},
$S:6}
A.r9.prototype={
i3(a,b){var s,r=this.a
if(r!==1)throw A.b(A.x("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.ra(s.a).cN(s.b)}},
cg(a){var s=this.b.h(0,a)
return s==null?A.j(A.k("setting missing from profile: "+a)):s},
B(){return A.M(["version",this.a,"values",this.b],t.N,t.K)}}
A.rd.prototype={
md(a){var s,r,q=A.fD(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.du(q,1)
this.jr(a)},
B(){return A.M(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jr(a){var s,r,q=A.fD(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.du(q,1)}}
A.rl.prototype={
i4(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.A(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.A(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.A(a,"div","entry-picker",null)
for(r=A.tV,q=0;q<2;++q){p=B.cS[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cY[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rm(this,p,m)
if(typeof k=="function")A.j(A.x("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.hh()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
slW(a){this.f=t.nf.a(a)}}
A.rm.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:1}
A.cs.prototype={}
A.mC.prototype={
ms(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.D(s)
q=new A.N(s,r.i("h(1)").a(new A.mE()),r.i("N<1,h>")).bn(0)
r=this.b
r.L(0)
s=J.AT(a,t.N)
p=s.$ti
r.I(0,new A.G(s,p.i("l(m.E)").a(q.gap(q)),p.i("G<m.E>")))},
l3(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mE.prototype={
$1(a){return t.bC.a(a).a},
$S:139}
A.mD.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:140}
A.l7.prototype={
gbY(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
lq(a){return this.c.q(0,t.L.a(a))},
dS(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a7(0,g.gkm())||!a.a.a7(0,new A.rS(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eP(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aM){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ae}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.rT(s))
else k=!1
if(k)return!1
j=new A.l6(r,g,A.ai(o,t.AP),B.a7)
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
fn(a){var s=this.a,r=A.o(s).i("aa<1>"),q=r.i("G<m.E>")
s=A.I(new A.G(new A.aa(s,r),r.i("l(m.E)").a(new A.rN(a)),q),q.i("m.E"))
B.a.P(s,new A.rO())
return s},
bU(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mC
s=m.a.h(0,a)
if(s==null)return B.mD
r=B.d.a2(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bS:B.ao
o=p===B.ao&&m.x.q(0,q)&&s.R(B.bT)?B.bT:p
if(s.R(o))n=o
else n=s.R(B.ao)?B.ao:B.bS
r=s.h(0,n)
r.toString
m.r=new A.l6(a,n,A.ai(m.eP(a,n,r),t.AP),B.a7)
m.gbY()
r=m.r
r.toString
return new A.l5(r)},
kh(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dU
if(n.d!==B.a7)return B.mA
n.e=a
s=a===B.ae
n.d=s?B.aM:B.am
r=this.f
q=s?B.dS:B.mi
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dz(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dz(B.ml,o,p,a,null))
if(s)this.f_(n)
return new A.l3(n)},
jU(){var s,r=this.r
if(r==null)return B.dU
s=r.d
if(s!==B.am&&s!==B.an)return B.mB
if(this.gbY()!=null&&r.w==null)return new A.ba(new A.bn(B.a8,"The visitor is waiting for an answer."))
r.d=B.an
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aM
this.f_(r)
return new A.il(r,!0)}return new A.il(r,!1)},
ki(a){var s,r,q=this.r,p=this.gbY(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.am&&o!==B.an}if(o)return B.mz
o=p.f
s=A.D(o)
r=A.bu(new A.G(o,s.i("l(1)").a(new A.rQ(a)),s.i("G<1>")),t.Y)
if(r==null)return B.mE
q.w=r.a
return new A.l4(q,p,r)},
kj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.am&&s!==B.an}else s=!0
if(s)return i
r=h.gbk()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cX
p=J.R(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b5(q,s,s)
m=c.jl(!0,!0,o,new A.t_(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aN){B.a.l(this.f,new A.dz(B.mk,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fD(B.a.gV(j.c).a,s,s)
s.I(0,q)
p.jR(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dV)if(k===B.bU){s=n.b
s=s.gW(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dz(B.mj,o,p.b,i,l))}}return m},
f_(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eP(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.R(c);r.m();)s.push(this.j_(a,b,r.gn()))
return s},
j_(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.D(p)
s=A.bu(new A.G(p,r.i("l(1)").a(new A.rL(this)),r.i("G<1>")),t.aS)}return s==null?c:new A.c5(q,s.c,c.c)},
shK(a){this.x=t.Q.a(a)}}
A.rS.prototype={
$1(a){var s=this.a.a
return new A.aa(s,A.o(s).i("aa<1>")).M(0,new A.rR(A.q(a)))},
$S:3}
A.rR.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:18}
A.rT.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:11}
A.rN.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:18}
A.rO.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:142}
A.rQ.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:11}
A.rP.prototype={
$0(){return A.c([],t.jV)},
$S:143}
A.rL.prototype={
$1(a){return t.aS.a(a).d.gJ().a7(0,new A.rK(this.a))},
$S:144}
A.rK.prototype={
$1(a){t.q.a(a)
return this.a.y.aY(a.a,a.b)},
$S:145}
A.rM.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:146}
A.l8.prototype={}
A.lD.prototype={}
A.vc.prototype={
$1(a){return B.b.T(A.q(a),"off.")},
$S:3}
A.bP.prototype={
v(){return"DoorChoice."+this.b}}
A.c3.prototype={
v(){return"VisitPhase."+this.b}}
A.c4.prototype={
v(){return"VisitTier."+this.b}}
A.e9.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dz.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d3.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bn.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.bn&&b.a===this.a&&b.b===this.b},
gN(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c5.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.c5&&b.a===this.a&&b.b===this.b},
gN(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bT.prototype={
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.bT&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gN(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.M(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.l9.prototype={
B(){var s,r,q,p=this.a
p=A.I(p,A.o(p).c)
B.a.X(p)
s=this.b
r=A.o(s)
q=r.i("df<1,X<h,@>>")
s=A.I(new A.df(s,r.i("X<h,@>(1)").a(new A.rJ()),q),q.i("m.E"))
r=this.c
return A.M(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rJ.prototype={
$1(a){return t.L.a(a).B()},
$S:147}
A.jj.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
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
A.mz.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:148}
A.mA.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:149}
A.mB.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:150}
A.l6.prototype={
gbk(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.rU.prototype={}
A.ba.prototype={}
A.l5.prototype={}
A.l3.prototype={}
A.il.prototype={}
A.l4.prototype={}
A.fX.prototype={}
A.lG.prototype={
gby(){var s,r=this.xr
if(r){s=this.w
s===$&&A.p()
s=s.a.b}else s="safe"
return A.Cu("pixeldart",r?this.gkb():B.jd,!1,null,s)},
gkb(){var s,r
if(!this.xr)return B.o
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.ew.kc(s,r)},
gle(){var s="shadowCaster",r=this.R8
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.fS(s).a+";shadowTriangles="+r.fS(s).b+";frameMs="+B.c.aK(this.RG,3)},
gld(){var s=this.R8
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.RG<=100},
c4(){var s,r,q,p,o,n,m,l=this,k=A.CS(l.a)
l.d=k
k=k.fY()
l.r=k
k=B.c8.hf(k)
l.w=k
q=l.b
p=l.c
s=new A.kT(q,p,q,p)
o=A.yj(l.d)
l.e=o
try{o.fL(B.aU.dq(k,"auto",p,q),s)}catch(n){r=A.ak(n)
k=l.w
if(k===B.ag)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.w(r)
l.w=B.ag
k=A.yj(l.d)
k.fL(B.kQ,s)
l.e=k}k=l.e
k.bP()
m=A.Ct(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.y2=l.b
l.c1=l.c
l.eA()
l.la=A.Ca(!0,!0,!0)
l.xr=!0},
be(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.x("Pixeldart surface size must be positive",null))
if(!r.xr){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c2!==a||r.c3!==b)r.c3=r.c2=null
s=r.e
s===$&&A.p()
s.bP()
new A.kT(a,b,a,b).C()
if(r.y1==null)r.y1=r.bO()},
bO(){var s=0,r=A.bL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bO=A.bN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.y2
h=n.b
if(!(i!==h||n.c1!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.e(m)
s=8
return A.ar(A.uC(i,B.aU.dq(h,"auto",A.e(l),g)),$async$bO)
case 8:n.y2=m
n.c1=l
n.c3=n.c2=null
A.uS()
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
n.x=i.a.b+" surface reconfigure failed: "+A.w(k)
n.c2=n.b
n.c3=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.y1=null
i=n.c2
h=n.b
j=i===h&&n.c3===n.c
if(!j)i=n.y2!==h||n.c1!==n.c
else i=!1
if(i)n.y1=n.bO()
s=o.pop()
break
case 5:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$bO,r)},
eA(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.a1===s
if(p){r=7
break A}if(B.P===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.P===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.j(A.x("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.pq(r,p,A.a_(q),A.a_(q),A.n(q,t.i))},
cB(a){var s=0,r=A.bL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$cB=A.bN(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.xr){s=1
break}switch(a.b.a){case 0:i=B.dp
break
case 2:i=B.ag
break
case 1:i=B.dn
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
i=n.b
h=n.c
g=t.xK
k=B.aU.dq(g.a(m),a.c,h,i)
p=4
i=n.e
i===$&&A.p()
s=7
return A.ar(A.uC(i,t.lg.a(k)),$async$cB)
case 7:n.w=g.a(m)
n.eA()
n.y2=n.b
n.c1=n.c
n.x=null
A.uS()
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.ak(e)
n.w=g.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.w(j)
A.uS()
throw e
s=6
break
case 3:s=2
break
case 6:case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$cB,r)},
jY(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.xr||b3.Q.length!==0)return
b3.fA=b9
s=b3.k1
r=b3.e
r===$&&A.p()
s.k(0,b5,r.gbm().dO("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbm().dO("texture:grime",512,512))
for(q=0;q<2;++q){p=B.jh[q]
r=b3.e.w
if(r==null)r=A.j(A.k(b7))
s.k(0,p,r.dO("texture:"+p,256,256))}b3.dh()
b3.p1=b3.e.gbm().m7(A.pD(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k4,m=b3.k3,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){j=r[q]
i=A.n(l,k)
for(h=A.M(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cz(h,h.r,h.e,A.o(h).i("cz<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.bo.h(0,d)
if(c==null)A.j(A.k("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.j(A.k(b7))
a=e.a
a0=c.a
d=A.pD(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.x)A.j(A.k(b8))
d.C()
a1=b.b.a.az(d,b4)
b.r.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.ok,q=0;q<7;++q){a2=B.iL[q]
n=b3.e.w
if(n==null)n=A.j(A.k(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dd(a2)
h=b3.dd(a2)
k=A.pD(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dd(a2).c,h.b,k.a,1,1)
if(n.x)A.j(A.k(b8))
k.C()
a1=n.b.a.az(k,b4)
n.r.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q)b3.iU(b9,r[q])
b3.jm(b9)
$.z.j().setAttribute("data-renderer-house-model-scale",B.c.aK(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.t)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
j=k.h(0,a4.b)
if(j==null)continue
a5=b3.eD(b9,j,a4)
h=b3.e.w
if(h==null)h=A.j(A.k(b7))
g=a4.a
if(h.x)A.j(A.k(b8))
f=h.a
a5.C()
a1=f.b.az(a5,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.ba(a5))
h.f.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.p1
f.toString}a6=new A.bz(a1,f,B.u,0,B.T,B.ab,!0,!0,0,b4)
f=b3.f
f===$&&A.p()
B.u.C()
b=f.a
a=b.$ti
b.Z(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.d(b,d)
a5=b[d].c
d=(a5==null?a.y[1].a(a5):a5).d
b=B.u.a9()
d=d.gaq()
a=A.D(d)
A.b1(new A.N(d,a.i("K(1)").a(b.gaw()),a.i("N<1,K>")))
n.k(0,g,new A.iF(g,h,f.b.bZ(a6),a1,a6))}for(o=b3.go,n=t.Bs,q=0;q<r.length;r.length===h||(0,A.t)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
j=k.h(0,a4.b)
if(j==null)continue
g=j.a
f=b3.ji(j,a4.aH(g),a4.af(g),a4.af(g)+a4.w,0,a4.x,5915445)
d=n.a(new A.tA(a4))
b=b3.e.w
if(b==null)b=A.j(A.k(b7))
if(b.x)A.j(A.k(b8))
a=b.a
f.C()
a1=a.b.az(f,"decoration:"+g)
a0=a1.a
a.c.k(0,a0,a.ba(f))
b.f.l(0,a1)
B.a.l(l,a1)
b=m.h(0,g)
if(b==null){f=b3.p1
f.toString}else f=b
a7=new A.bz(a1,f,B.u,0,B.T,B.ab,!0,!0,0,b4)
f=b3.f
f===$&&A.p()
B.u.C()
b=f.a
a=b.$ti
b.Z(a.c.a(a1))
b=b.b
if(!(a0>=0&&a0<b.length))return A.d(b,a0)
a5=b[a0].c
b=(a5==null?a.y[1].a(a5):a5).d
a=B.u.a9()
b=b.gaq()
a0=A.D(b)
A.b1(new A.N(b,a0.i("K(1)").a(a.gaw()),a0.i("N<1,K>")))
B.a.l(o,new A.lF(g,f.b.bZ(a7),a7,d))}for(r=A.Gn(A.FJ(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.k2,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.j(A.k(b7))
b=s.h(0,a9)
a=b3.da(f)
a0=b3.da(f)
a=A.pD(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.da(f).c,a0.b,a.a,1,1)
if(d.x)A.j(A.k(b8))
a.C()
a1=d.b.a.az(a,b4)
d.r.l(0,a1)
g.k(0,f,a1)
c=a1}d=b3.e.w
if(d==null)d=A.j(A.k(b7))
b=a8.c
a=a8.a
f=""+f
if(d.x)A.j(A.k(b8))
a0=d.a
b.C()
a1=a0.b.az(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.ba(b))
d.f.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ah.q(0,a))A.j(A.x("unknown exterior cell: "+a,b4))
b2=new A.bz(a1,c,B.u,-1,B.T,B.ab,B.le.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.p()
B.u.C()
d=f.a
b=d.$ti
d.Z(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.d(d,b0)
a5=d[b0].c
d=(a5==null?b.y[1].a(a5):a5).d
b=B.u.a9()
d=d.gaq()
a=A.D(d)
A.b1(new A.N(d,a.i("K(1)").a(b.gaw()),a.i("N<1,K>")))
k.k(0,b1,f.b.bZ(b2))}},
hi(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ai(a8.e,t.fl)
if(!a5.xr)return
for(s=a5.ch,r=new A.J(s,A.o(s).i("J<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.p()
o.b.b5(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.p()
p=p.w
if(p==null)p=A.j(A.k(a6))
o=n.a
if(p.x)A.j(A.k(a7))
p.a.b5(o)
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
h=a5.fA
g=h==null?null:h.e.h(0,j.b)
if(g==null)continue
f=a8.cC(i)
i=a5.e
i===$&&A.p()
i=i.w
if(i==null)i=A.j(A.k(a6))
h=a5.iX(f,j,m)
e=j.a
if(i.x)A.j(A.k(a7))
d=i.a
h.C()
c=d.b.az(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.ba(h))
i.f.l(0,c)
i=j.f
h=i.a
a=B.a6.gau()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=f.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=g.d
i=new A.kW(new A.K(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.kC(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bz(c,a2,i,-1,B.T,B.ab,d!=="micro",!0,0,null)
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
h=h.gaq()
b=A.D(h)
A.b1(new A.N(h,b.i("K(1)").a(i.gaw()),b.i("N<1,K>")))
s.k(0,e,d.b.bZ(n))}$.z.j().setAttribute("data-renderer-inventory-items",""+s.a)},
ht(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aN([s],r)
for(p=c1.aJ(s),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.cc(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.J(b9,A.o(b9).i("J<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aC(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=b8.bT(i[f],k)
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
a=a.gaq()
a0=A.D(a)
A.b1(new A.N(a,a0.i("K(1)").a(b.gaw()),a0.i("N<1,K>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.Z(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb3(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.t)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.p()
o=b8.bT(a4.c,k)
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
i=i.gaq()
g=A.D(i)
A.b1(new A.N(i,g.i("K(1)").a(n.gaw()),g.i("N<1,K>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb3(o)}b9=b8.fr
s=A.o(b9).i("aa<1>")
s=A.I(new A.aa(b9,s),s.i("m.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.t)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bT(o,q.q(0,a5.b)?-1:0)
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
g=g.gaq()
d=A.D(g)
A.b1(new A.N(g,d.i("K(1)").a(i.gaw()),d.i("N<1,K>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(e)
b9.k(0,a5.a,a5.ks(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.p()
i=b8.bT(a8,q.q(0,a6.b)?-1:0)
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
d=d.gaq()
c=A.D(d)
A.b1(new A.N(d,c.i("K(1)").a(g.gaw()),c.i("N<1,K>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.Z(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb3(i)}a9=new A.jO().kg(c2)
b9=$.z.j()
s=A.I(a9,A.o(a9).c)
B.a.X(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.Y(s,","))
b9=b8.dx
r=new A.jO().fC(new A.tB(b8),new A.aa(b9,A.o(b9).i("aa<1>")),a9,r)
b0=A.ke(r,r.$ti.i("m.E"))
b9=b8.db
s=A.o(b9).i("aa<1>")
s=A.I(new A.aa(b9,s),s.i("m.E"))
r=s.length
p=b8.cy
b1=0
b2=0
b3=0
a3=0
for(;a3<s.length;s.length===r||(0,A.t)(s),++a3){b4=s[a3]
b5=p.h(0,b4)
if(b5==null)continue
a8=b9.h(0,b4)
o=a8.r
if(o)++b3
b6=b0.q(0,b4)
if(b6)++b1
if(b6&&o)++b2
e=b8.bT(a8,b6?-1:0)
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
i=i.gaq()
g=A.D(i)
A.b1(new A.N(i,g.i("K(1)").a(n.gaw()),g.i("N<1,K>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.Z(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb3(e)
b9.k(0,b4,e)}$.z.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.z.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("df<1,h>")
b7=A.I(new A.df(b0,b9.i("h(1)").a(new A.tC(b8)),s),s.i("m.E"))
B.a.X(b7)
$.z.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.Y(b7,","))},
cL(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.xr)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.f1(b0,n)
l=J.aC(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.j(A.k(a8))
c=a7.eQ(e.b)
b=g.b
if(d.x)A.j(A.k(a9))
a=d.a
c.C()
a0=a.b.az(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.ba(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bz(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
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
b=b.gaq()
a3=A.D(b)
A.b1(new A.N(b,a3.i("K(1)").a(d.gaw()),a3.i("N<1,K>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.Z(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb3(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a5(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.j(A.k(a8)):a
if(d.x)A.j(A.k(a9))
d.a.b5(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.z.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fB+1));++a7.fB},
dN(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.xr)return
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
m=p.gbm().m8(k.eD(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bz(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.jN(l)
p.b.h2(n,l)
s.k(0,b,r.fv(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gbm().m9(n)},
hj(d2,d3,d4,d5,d6,d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="time_override",c5="wetness_override",c6="fog_density",c7="fog_height_falloff",c8="rain_override",c9=A.aN([d3],t.N),d0=d2.e,d1=d0.h(0,d3)
if(d1!=null)for(s=d1.a,r=d2.aJ(s),q=J.R(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.cc(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&d0.h(0,o)!=null)c9.l(0,o)}n=new A.oO(d2).mG(c9,d4)
d0=t.jC
m=A.c([],d0)
l=A.c([],d0)
for(k=0;k<n.length;++k){j=n[k]
d0=k===0
s=d0?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.j(A.ag(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.j(A.ag(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.j(A.ag(p,"radius","must be finite and > 0"))
d0=d0?l:m
B.a.l(d0,new A.aU(k,s,j.a,new A.f((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d0=c3.fx
d0===$&&A.p()
i=d0.m4(d4,m,l)
d0=A.n(t.S,t.A_)
for(k=0;k<n.length;++k)d0.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.t)(r),++h){g=r[h]
p=d0.h(0,g.a).a
f=g.d
s.push(new A.kv(new A.K(p.a,p.b,p.c),new A.c_(f.a,f.b,f.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.t)(q),++h){g=q[h]
f=g.a
e=d0.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bC(f,new A.K(d.a,d.b,d.c),new A.K(e.a,e.b,e.c),new A.c_(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c3.ik(i,++c3.fy)
d0=$.hk()
b=d0.H(c4)
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
b0=A.cb(B.kB,B.bx,a9)
b1=A.cb(B.kD,B.bw,a9)
b2=A.cb(B.kx,B.by,a9)
b3=0.3+0.5*a9
b4=0.25+0.2*a9}else if(q&&a1<14){b0=B.bx
b1=B.bw
b2=B.by
b3=0.85
b4=0.45}else if(a1>=14&&a1<a5){a9=(a1-14)/(a5-14)
b0=A.cb(B.bx,B.dq,a9)
b1=A.cb(B.bw,B.dt,a9)
b2=A.cb(B.by,B.ds,a9)
b3=0.85*(1-a9*0.35)
b4=0.45*(1-a9*0.25)}else if(a1>=a5&&a1<a5+1.5){a9=(a1-a5)/1.5
b0=A.cb(B.dq,B.aF,a9)
b1=A.cb(B.dt,B.aE,a9)
b2=A.cb(B.ds,B.aG,a9)
b3=0.55*(1-a9*0.8)
b4=0.34*(1-a9*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){a9=(a1-q)/1.5
b0=A.cb(B.aF,B.aF,a9)
b1=A.cb(B.aE,B.aE,a9)
b2=A.cb(B.aG,B.aG,a9)
b3=0.11*(1-a9*0.25)
b4=0.16*(1-a9*0.15)}else{b0=B.aF
b1=B.aE
b2=B.aG
b3=0.15
b4=0.18}}if(a2>0){b5=A.cb(b2,B.kL,a2*0.7)
b3*=1-a2*0.35
b4*=1-a2*0.15}else b5=b2
b6=d8?1:0.15
B.c.D(a2*0.75+B.c.D(0.3333333333333333,0,1)*0.25,0,1)
q=$.AK().a
q.k(0,"pbrRoughnessScale",d0.H("pbr_roughness"))
q.k(0,"pbrMetallicScale",d0.H("pbr_metallic"))
q.k(0,"pbrSpecularMult",d0.H("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d0.H("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d0.H("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d0.H("light_ambient_mult"))
q.k(0,"directLightScale",d0.H("light_direct_mult"))
q.k(0,"ssdoEnabled",d0.aP("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d0.H("shadow_ao_intensity"))
q.k(0,"csmEnabled",d0.aP("shadow_csm_enable"))
q.k(0,"csmHardness",d0.H("shadow_csm_hardness"))
q.k(0,"shadowBias",d0.H("shadow_bias"))
q.k(0,"weatheringEnabled",d0.aP("weathering_enable"))
q.k(0,"normalBumpStrength",d0.H("normal_bump_strength"))
q.k(0,"grimeAccumulation",d0.H("grime_accumulation"))
q.k(0,"wetnessOverride",d0.H(c5))
q.k(0,"fogEnabled",d0.aP("fog_enable"))
q.k(0,"fogDensity",d0.H(c6))
q.k(0,"fogHeightFalloff",d0.H(c7))
q.k(0,"volumetricEnabled",d0.aP("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d0.H("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d0.H("volumetric_scattering"))
q.k(0,"ssrEnabled",d0.aP("ssr_enable"))
q.k(0,"tonemapMode",B.c.aC(d0.H("tonemap_mode")))
q.k(0,"ssssEnabled",d0.aP("ssss_enable"))
q.k(0,"taaEnabled",d0.aP("taa_enable"))
q.k(0,"lensFlareEnabled",d0.aP("lens_flare_enable"))
q.k(0,"timeOverride",d0.H(c4))
q.k(0,"rainOverride",d0.H(c8))
q.k(0,"postBloom",d0.H("post_bloom"))
q.k(0,"postVignette",d0.H("post_vignette"))
q.k(0,"postChromaticAberration",d0.H("post_chromatic_aberration"))
q.k(0,"postFilmGrain",d0.H("post_film_grain"))
q.k(0,"postExposure",d0.H("post_exposure"))
q.k(0,"postSaturation",d0.H("post_saturation"))
q.k(0,"postBloomThreshold",d0.H("post_bloom_threshold"))
q.k(0,"postDither",d0.H("post_dither"))
q.k(0,"contactLightBoost",d0.H("light_contact_boost"))
q.k(0,"debugViewMode",d0.e.b)
$.z.j().setAttribute("data-renderer-shader-overrides",B.j.ab(q,null))
if(d0.H(c8)>=0)a0=d0.H(c8)
if(d0.H(c5)>=0)d0.H(c5)
q=$.AJ()
q.mC(0.0166,a0)
b7=q.f
b8=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b9=b8>0.001
c0=b9?new A.K(p,f,e):new A.K(-p,d,-e)
c1=b9?new A.c_(b0.c,b0.b,b0.a):new A.c_(0.35,0.45,0.65)
q=b7.a
if(q){p=b7.b
c2=new A.c_(c1.a+b7.c*p*2,c1.b+b7.d*p*2,c1.c+b7.e*p*2.5)}else c2=c1
b3*=b6
if(q)b3+=b7.b*4.5
q=Math.max(0.045,b4*(b9?b8:1)*b6)
c3.p3=new A.jR(B.ic,new A.c_(b5.c*0.08,b5.b*0.08,b5.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),d0.H(c7),d0.H(c6),new A.c_(b1.c,b1.b,b1.a),q,new A.nM(c0,c2,b3),s,r)},
bp(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.xr)throw A.b(A.k("Pixeldart runtime is not initialized"))
s=i.p2
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dn(s)
s=$.xr()
q=s.b
p=s.c
o=A.wb(i.b/i.c,p,s.a,q)
p=new A.fm(r,o,o.an(0,r),B.al,B.m3,q,p,i.b/i.c)
s=p}q=i.p3
p=i.p4
n=i.x1++
m=i.rx
l=new A.rn()
$.xm()
k=$.qe.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.p()
j=i.f
j===$&&A.p()
k.k0(j,new A.o4(s,q,p,n,m))
i.R8=i.e.l7()
s=$.qe.$0()
l.b=s
i.RG=l.gl4()/1000},
f1(a,b){var s=A.FK(a,b),r=A.FI(a,b),q=A.I(s.c,t.i)
B.a.I(q,r)
return A.c([new A.fX("wall",new Float32Array(A.a0(q))),new A.fX("floor",s.a),new A.fX("ceiling",s.b)],t.pv)},
eQ(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.K(q,p,a[o]))}if(n.length===0)throw A.b(A.k("house surface mesh cannot be empty"))
return new A.ch(B.ac,a,null,A.b1(n))},
iU(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f1(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.k("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.j(A.k("renderer is not initialized"))
j=b.eQ(l.b)
i=l.a
if(k.x)A.j(A.k("resource library is disposed"))
h=k.a
j.C()
g=h.b.az(j,n+i)
f=g.a
h.c.k(0,f,h.ba(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bz(g,i,B.u,-1,B.T,B.ab,!0,!0,0,null)
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
k=k.gaq()
h=A.D(k)
A.b1(new A.N(k,h.i("K(1)").a(j.gaw()),h.i("N<1,K>")))
c=i.b.bZ(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gU(r))
if(q.length!==0)b.at.k(0,a0,B.a.gU(q))},
jm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.t)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.M(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cz(l,l.r,l.e,A.o(l).i("cz<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bo.h(0,i)
if(h==null)A.j(A.k("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.z.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.Y(e,","))
$.z.j().setAttribute("data-renderer-house-surface-bindings",B.a.Y(d,","))},
iX(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d_(new Float32Array(5376))
g=this.iW(a0.b)
r=new A.f(d,b,f)
q=new A.f(e,b,f)
p=new A.f(e,c,f)
o=new A.f(d,c,f)
n=new A.f(d,b,a)
m=new A.f(e,b,a)
l=new A.f(e,c,a)
k=new A.f(d,c,a)
s.aB(q,r,o,p,g)
s.aB(n,m,l,k,g)
s.aB(r,n,k,o,g)
s.aB(m,q,p,l,g)
s.aB(r,q,m,n,g)
s.aB(o,k,l,p,g)
j=B.t.aR(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.K(e,d,j[c]))}return new A.ch(B.ac,j,null,A.b1(g))},
iW(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
da(a){var s
A:{if(0===a){s=B.ky
break A}if(1===a){s=B.kA
break A}if(2===a){s=B.kG
break A}if(3===a){s=B.kO
break A}if(4===a){s=B.kP
break A}if(5===a){s=B.kE
break A}if(6===a){s=B.kN
break A}if(7===a){s=B.kJ
break A}s=B.kM
break A}return s},
dd(a){var s
A:{if("architecture"===a){s=B.kz
break A}if("furniture"===a){s=B.dr
break A}if("fixture"===a){s=B.kI
break A}if("service"===a){s=B.kK
break A}if("story"===a){s=B.kH
break A}if("decor"===a){s=B.kC
break A}if("micro"===a){s=B.kF
break A}s=B.dr
break A}return s},
cI(a){return this.lu(t.G.a(a))},
lu(a){var s=0,r=A.bL(t.H),q,p=this,o,n,m,l
var $async$cI=A.bN(function(b,c){if(b===1)return A.bH(c,r)
for(;;)switch(s){case 0:if(!p.xr){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.io[n]
l=a.h(0,m)
if(l!=null)o.push(p.cu(m,l))}s=3
return A.ar(A.oa(o,t.H),$async$cI)
case 3:case 1:return A.bI(q,r)}})
return A.bJ($async$cI,r)},
cu(a,b){return this.j0(a,b)},
j0(a,b){var s=0,r=A.bL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cu=A.bN(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ar(A.bV(A.a(m.decode()),t.X),$async$cu)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.e(m.naturalWidth)
g.height=A.e(m.naturalHeight)
l=g
k=A.E(l.getContext("2d"))
if(!t.m.b(k)){h=A.k("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.e(m.naturalWidth),A.e(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gbm()
f=new Uint8Array(A.a0(j))
if(h.x)A.j(A.k("resource library is disposed"))
h.c.mD(d,f)
$.z.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dh()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ak(c)
h=$.z.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dh()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$cu,r)},
dh(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.xr||h.k1.a===0)return
s=h.k1
r=A.o(s).i("J<1,2>")
r=A.kf(new A.J(s,r),r.i("ck(m.E)").a(new A.tw()),r.i("m.E"),t.jP)
q=A.I(r,A.o(r).i("m.E"))
s=h.e
s===$&&A.p()
s=s.gbm()
p=s.d
o=(p===$?s.d=new A.ru(s.c,A.n(t.Aj,t.y)):p).m3(q)
s=o.a
n=A.c(s.slice(0),A.D(s))
B.a.P(n,new A.tx())
s=A.D(n)
r=s.i("h(1)")
s=s.i("N<1,h>")
m=new A.N(n,r.a(new A.ty()),s).Y(0,",")
l=new A.N(n,r.a(new A.tz()),s).Y(0,",")
s=o.cr(B.dJ)
r=o.cr(B.dK)
k=o.cr(B.dL)
j=o.cr(B.dM);++h.x2
i=$.z.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.x2)
if(!A.Q($.z.j().hasAttribute("data-renderer-texture-residency-initial")))$.z.j().setAttribute("data-renderer-texture-residency-initial",m)},
bT(a,b){return new A.bz(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eD(a,b,c){var s,r,q,p,o,n=A.FH(a,b,c),m=n.length
if(m===0)throw A.b(A.k("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.K(q,p,n[o]))}return new A.ch(B.ac,n,null,A.b1(s))},
ji(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.U.j().aA(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.f(k,s,r),new A.f(q,s,r),new A.f(q,p,r),new A.f(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.f(k,s,r),new A.f(q,s,r),new A.f(q,p,r),new A.f(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.f(k,s,r),new A.f(k,s,q),new A.f(k,p,q),new A.f(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.f(k,s,r),new A.f(k,s,q),new A.f(k,p,q),new A.f(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.d_(new Float32Array(5376))
o.aB(k[0],k[1],k[2],k[3],g)
n=B.t.aR(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.K(r,q,n[p]))}return new A.ch(B.ac,n,null,A.b1(k))},
ik(a,b){var s,r,q,p=a.e,o=A.o(p).i("J<1,2>"),n=A.I(new A.J(p,o),o.i("m.E"))
B.a.P(n,new A.ts())
p=$.z.j()
o=a.a
s=A.D(o)
r=a.c
q=A.D(r)
p.setAttribute("data-renderer-light-selection","points="+new A.N(o,s.i("i(1)").a(new A.tt()),s.i("N<1,i>")).Y(0,":")+";spots="+new A.N(r,q.i("i(1)").a(new A.tu()),q.i("N<1,i>")).Y(0,":"))
q=A.D(n)
p.setAttribute("data-renderer-light-rejections",new A.N(n,q.i("h(1)").a(new A.tv()),q.i("N<1,h>")).Y(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
$iCv:1}
A.tA.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:27}
A.tB.prototype={
$1(a){var s=this.a.dx.h(0,A.q(a))
s.toString
return s},
$S:44}
A.tC.prototype={
$1(a){var s,r,q,p
A.q(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.k("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:44}
A.tw.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.ck(s,a.b,r)},
$S:153}
A.tx.prototype={
$2(a,b){var s=t.d
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:154}
A.ty.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:38}
A.tz.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:38}
A.ts.prototype={
$2(a,b){var s=t.ou
return B.d.G(s.a(a).a,s.a(b).a)},
$S:156}
A.tt.prototype={
$1(a){return t.p.a(a).a},
$S:37}
A.tu.prototype={
$1(a){return t.p.a(a).a},
$S:37}
A.tv.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:158}
A.lF.prototype={}
A.iF.prototype={
fv(a,b){var s=this,r=b==null?s.d:b
return new A.iF(s.a,s.b,s.c,r,a)},
ks(a){return this.fv(a,null)}}
A.t5.prototype={}
A.u3.prototype={
$2(a,b){var s
A.x0(a,A.w(b))
switch(a){case"master":s=$.bs
if(s!=null)s.hn(b)
break
case"voice":s=$.bs
if(s!=null)s.hp(b)
break
case"effects":s=$.bs
if(s!=null)s.hm(b)
break
case"ambience":s=$.bs
if(s!=null)s.hl(b)
break
case"music":s=$.bs
if(s!=null)s.ho(b)
break}},
$S:29}
A.u4.prototype={
$1(a){var s
A.x0("muted",""+a)
s=$.bs
if(s!=null)s.e7(a)},
$S:7}
A.u5.prototype={
$1(a){var s
A.x0("mono",""+a)
s=$.bs
if(s!=null)s.cS(a)},
$S:7}
A.ub.prototype={
$2(a,b){A.x1(a,A.w(b))
A.z4(a,b)},
$S:29}
A.uc.prototype={
$1(a){var s="high-contrast"
A.x1(s,""+a)
A.tS(s,a)},
$S:7}
A.ud.prototype={
$1(a){var s="strong-highlights"
A.x1(s,""+a)
A.tS(s,a)},
$S:7}
A.ue.prototype={
$1(a){$.d9().md(a)
A.uQ()
A.z6()},
$S:160}
A.uf.prototype={
$0(){var s=$.d9()
s.a=A.du(null,1)
s.b=A.du(null,1)
A.uQ()
A.z6()},
$S:0}
A.ug.prototype={
$0(){A.dH(this.a)},
$S:0}
A.uh.prototype={
$0(){this.a.a6()},
$S:0}
A.ui.prototype={
$0(){A.dH(this.a)},
$S:0}
A.u6.prototype={
$0(){A.ha(this.a)},
$S:0}
A.u7.prototype={
$1(a){$.j4=a
A.zz()
A.wy()},
$S:161}
A.u8.prototype={
$1(a){$.wJ=a
A.zB()
A.z5()},
$S:162}
A.u9.prototype={
$1(a){$.ej=a
A.wQ()
A.m5()},
$S:163}
A.ua.prototype={
$0(){$.ej=B.ap
$.f3.j().e4($.ej)
A.wQ()
A.m5()},
$S:0}
A.u0.prototype={
$1(a){var s,r=A.A9(a,A.zm())
$.j6=A.fA($.jf().b,a)
s=r.b
$.ei.j().cl(a,$.jf().b,s)
$.z.j().setAttribute("data-graphics-fallback",B.a.Y(s,"|"))
$.zn=A.m8(a,r,$.zn)},
$S:164}
A.u1.prototype={
$0(){A.dH($.ei.j())},
$S:0}
A.u2.prototype={
$0(){A.dH($.ei.j())},
$S:0}
A.tX.prototype={
$1(a){},
$S:26}
A.tY.prototype={
$1(a){var s,r
$.wG=a
$.ac.j().e5(a.r)
s=$.ac.j()
r=s.ch
r.a=a.f
r.dQ()
s.b7()
A.zA()},
$S:165}
A.tZ.prototype={
$0(){A.dH($.iX.j())},
$S:0}
A.u_.prototype={
$0(){A.dH($.iX.j())},
$S:0}
A.uK.prototype={
$0(){$.v_=A.Q(this.a.matches)
$.x4=A.Q(this.b.matches)
A.m5()},
$S:0}
A.uI.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uJ.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vk.prototype={
$1(a){var s
try{A.xN(a,this.a)
return!0}catch(s){if(A.ak(s) instanceof A.F)return!1
else throw s}},
$S:166}
A.vl.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j3.j()
break
case 5:p=$.f3.j()
break
case 1:p=$.ei.j()
break
case 4:p=$.h3.j()
break
case 2:p=$.iZ.j()
break
case 3:p=$.iX.j()
break}s=p
r=null
switch(o){case 0:r=B.k4
break
case 5:r=B.k9
break
case 1:r=B.k5
break
case 4:r=B.k8
break
case 2:r=B.k6
break
case 3:r=B.k7
break}q=r
p=B.d4.h(0,a)
p.toString
A.wP(s,q,p)},
$S:167}
A.vm.prototype={
$0(){A.dH($.h5.j())},
$S:0}
A.vx.prototype={
$0(){return A.dH($.h5.j())},
$S:0}
A.vG.prototype={
$0(){$.cp.j().a6()},
$S:0}
A.vH.prototype={
$0(){$.cp.j().a6()},
$S:0}
A.vI.prototype={
$0(){A.wP($.h5.j(),B.da,"pause.settings")},
$S:0}
A.vJ.prototype={
$0(){$.cp.j().a6()
A.jb($.j_.j())},
$S:0}
A.vK.prototype={
$0(){A.mj("saved")},
$S:0}
A.vL.prototype={
$0(){$.cp.j().a6()
A.jb($.j_.j())},
$S:0}
A.vM.prototype={
$0(){A.wP($.m2.j(),B.ka,"pause.credits")},
$S:0}
A.vn.prototype={
$0(){return A.ha($.cp.j())},
$S:0}
A.vo.prototype={
$0(){return A.ha($.j0.j())},
$S:0}
A.vp.prototype={
$2(a,b){var s,r
if($.az.j().y){s=$.aF.j().gbY()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.E0(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cR,a)
A.E_(B.cR[a])}}},
$S:168}
A.vq.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gaa().a===21){A.zG(!1)
return}s=$.U.j().r.b
$.T.j().hE(a,b,$.as)
r=$.U.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e2()
if(typeof n!=="number")return A.ve(n)
if(!(o<n))break
if($.U.b===$.U)A.j(A.a5(""))
p=B.a.h(B.N,q).b
o=$.aR
if(o!=null){n=$.U.b
if(n===$.U)A.j(A.a5(""))
o.cL(n,p)}o=q
if(typeof o!=="number")return o.ah()
q=o+1}A.mj("saved after sleep")},
$S:169}
A.vr.prototype={
$0(){return A.ha($.m4.j())},
$S:0}
A.vs.prototype={
$0(){return A.ha($.j_.j())},
$S:0}
A.vt.prototype={
$0(){return A.dH($.m2.j())},
$S:0}
A.vu.prototype={
$0(){A.ha($.iY.j())},
$S:0}
A.vv.prototype={
$0(){A.ha($.iY.j())},
$S:0}
A.vw.prototype={
$1(a){return A.zF()},
$S:2}
A.vy.prototype={
$1(a){if(A.q(A.a(v.G.document).visibilityState)==="hidden")A.EY()},
$S:1}
A.vz.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.q(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.hk()
o=!p.a
p.a=o
if(o)A.pb(A.a(v.G.document),"exitPointerLock",t.X)
else $.ac.j().cM($.z.j())
return}p=$.hk()
if(p.a&&!A.Q(m.repeat)){if(A.q(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ac.j().cM($.z.j())
return}if(A.q(m.code)==="ArrowUp"||A.q(m.code)==="KeyW"){m.preventDefault()
n=p.gbd().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.el
if(o!=null){p=p.gbd().length
o.a.cR(-1,p)}return}if(A.q(m.code)==="ArrowDown"||A.q(m.code)==="KeyS"){m.preventDefault()
n=p.gbd().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.el
if(o!=null){p=p.gbd().length
o.a.cR(1,p)}return}if(A.q(m.code)==="ArrowLeft"||A.q(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d_[B.d.S(p.e.a-1+7,7)]
else{p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w,p.f,p.r)}return}if(A.q(m.code)==="ArrowRight"||A.q(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.d_[(p.e.a+1)%7]
else{p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w,p.f,p.r)}return}if(A.q(m.code)==="KeyQ"){m.preventDefault()
p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w*0.2,p.f,p.r)
return}if(A.q(m.code)==="KeyE"){m.preventDefault()
p=p.gcF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w*0.2,p.f,p.r)
return}if(A.q(m.code)==="KeyR"){m.preventDefault()
if(A.Q(m.shiftKey))p.mc()
else p.me()
return}if(B.b.T(A.q(m.code),"Digit")||B.b.T(A.q(m.code),"Numpad")){o=A.q(m.code)
o=A.xg(o,"Digit","")
s=A.xg(o,"Numpad","")
r=A.dr(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.az.j().y&&!A.Q(m.repeat))if($.cK().lh(A.q(m.code))){m.preventDefault()
return}if(A.q(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.bd
if(p==null)A.jb($.cp.j())
else p.a6()
return}q=$.bd==null&&!p.a
if(!A.Q(m.repeat)&&q)$.f4.j().dB(new A.kG(A.q(m.code),!0,1))
if(A.q(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.AB())$.mg=!$.mg
if((A.q(m.code)==="KeyJ"||A.q(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.az.j().y){m.preventDefault()
A.jd($.j0.j())}if(A.q(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.az.j().y)A.jd($.m4.j())
if(A.q(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.az.j().y)A.jd($.j_.j())
if(A.q(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.az.j().y)A.jd($.j2.j())
if(A.q(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.mj("saved")},
$S:1}
A.vA.prototype={
$1(a){var s=A.a(a)
if($.bd==null)$.f4.j().dB(new A.kG(A.q(s.code),!1,0))},
$S:1}
A.vB.prototype={
$1(a){return A.z8()},
$S:2}
A.vC.prototype={
$1(a){return A.z8()},
$S:2}
A.vD.prototype={
$1(a){return A.Es(A.a(a))},
$S:2}
A.vE.prototype={
$1(a){var s=A.a(a)
if($.az.j().y){s.preventDefault()
A.Er(s)
return}$.ac.j().cM($.z.j())},
$S:1}
A.vF.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hk()
if(!o.a||$.el==null)return
p.preventDefault()
s=o.gbd()
r=A.a4(p.deltaY)>0?1:-1
o=$.el
o.toString
q=J.cL(s)
o.a.cR(A.e(r),q)},
$S:1}
A.uL.prototype={
$1(a){var s=A.q(A.a(a).message)
A.uU(s,null)},
$S:1}
A.uM.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.uU("unhandled rejection: "+A.w(s==null?A.q(a.type):s),null)},
$S:1}
A.uP.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:41}
A.uY.prototype={
$0(){this.a.className=""},
$S:14}
A.v1.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:35}
A.uO.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:22}
A.uV.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.uR.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:11}
A.uT.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.dZ.prototype
s.hN=s.p
s=A.m.prototype
s.hM=s.cP
s=A.i_.prototype
s.hO=s.bF})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Ez","BX",43)
r(J.r.prototype,"gap","q",10)
q(A,"EN","Cd",36)
r(A.aL.prototype,"gap","q",10)
p(A.cf.prototype,"gkm","R",10)
o(A,"FD","D6",19)
o(A,"FE","D7",19)
o(A,"FF","D8",19)
q(A,"zV","Fk",0)
s(A,"FM","C1",43)
r(A.cm.prototype,"gap","q",10)
r(A.fT.prototype,"gap","q",10)
o(A,"FP","E9",13)
p(A.kg.prototype,"gmj","mk",121)
var n
p(n=A.kV.prototype,"gmf","mg",8)
p(n,"gmn","mo",8)
p(n,"gmp","mq",8)
p(n,"gmh","mi",8)
p(n,"gml","mm",8)
q(A,"zZ","Db",172)
q(A,"Hi","we",27)
p(A.dn.prototype,"gaw","h0",56)
p(n=A.k3.prototype,"gj2","j3",2)
p(n,"gj4","j5",2)
p(n,"gj8","j9",2)
p(n,"gjc","jd",2)
p(n,"gje","jf",2)
p(n,"gja","jb",2)
p(n,"gj6","j7",2)
o(A,"Gb","zd",13)
o(A,"Gf","zc",13)
o(A,"G3","BU",173)
o(A,"G4","BV",174)
o(A,"Gj","BO",175)
p(A.i_.prototype,"gjg","jh",2)
p(A.fO.prototype,"giS","iT",125)
p(A.l7.prototype,"glp","lq",18)
o(A,"A8","F0",176)
q(A,"A7","E6",0)
o(A,"G7","E1",117)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.H,null)
q(A.H,[A.w5,J.k5,A.i8,J.eq,A.m,A.hp,A.dP,A.al,A.V,A.qE,A.aH,A.hR,A.S,A.hA,A.hx,A.io,A.au,A.d1,A.bq,A.fE,A.fq,A.f_,A.dt,A.rB,A.pR,A.hy,A.iK,A.a6,A.px,A.cg,A.ah,A.cz,A.hJ,A.lB,A.lh,A.ie,A.lT,A.t7,A.cE,A.lu,A.lW,A.tG,A.li,A.cH,A.b2,A.lm,A.dC,A.aq,A.lj,A.lR,A.iV,A.iw,A.lA,A.f0,A.iz,A.iP,A.lX,A.eu,A.jB,A.tq,A.tJ,A.ev,A.dR,A.lr,A.kq,A.ic,A.t8,A.F,A.L,A.ap,A.lU,A.rn,A.bl,A.iR,A.rD,A.lO,A.pQ,A.lx,A.ed,A.qh,A.e3,A.kx,A.no,A.np,A.nr,A.nq,A.kw,A.fm,A.jR,A.o4,A.ds,A.k_,A.c_,A.nM,A.kv,A.bC,A.eE,A.bD,A.rH,A.ch,A.pS,A.ky,A.kH,A.bz,A.kT,A.i5,A.aG,A.o6,A.kg,A.kZ,A.pI,A.ck,A.c2,A.rw,A.ru,A.dD,A.kV,A.eD,A.jP,A.jQ,A.o5,A.o3,A.fV,A.aw,A.bf,A.aI,A.O,A.hq,A.kA,A.bk,A.qj,A.b7,A.ql,A.qk,A.lw,A.i4,A.qv,A.t9,A.lV,A.tF,A.lH,A.lt,A.lL,A.lE,A.tl,A.bQ,A.bO,A.aO,A.nH,A.nG,A.jg,A.eG,A.o7,A.dn,A.kC,A.kW,A.K,A.ho,A.lk,A.js,A.ll,A.jF,A.lo,A.hv,A.lp,A.jI,A.lq,A.jZ,A.lv,A.hS,A.lC,A.fk,A.jt,A.wf,A.i1,A.lI,A.kB,A.lJ,A.eQ,A.kL,A.lM,A.kM,A.lN,A.kP,A.lQ,A.kO,A.lP,A.l2,A.lY,A.i6,A.ld,A.m0,A.nm,A.jU,A.jW,A.hE,A.ia,A.y,A.jG,A.fI,A.oq,A.eg,A.cX,A.fv,A.rZ,A.dE,A.iU,A.iT,A.m_,A.lZ,A.tN,A.jH,A.jn,A.h_,A.mN,A.mv,A.hm,A.mJ,A.w1,A.mV,A.mP,A.ip,A.fl,A.nj,A.o2,A.k3,A.p3,A.p7,A.aU,A.pt,A.pq,A.nI,A.pz,A.d_,A.f,A.kQ,A.le,A.nc,A.jJ,A.nS,A.fw,A.bp,A.ku,A.qb,A.fN,A.qz,A.eN,A.jS,A.oe,A.od,A.n1,A.fg,A.fi,A.ff,A.fh,A.ju,A.kh,A.cG,A.lf,A.hG,A.oH,A.Z,A.jM,A.k0,A.oI,A.jN,A.d6,A.jO,A.ec,A.dT,A.qw,A.eb,A.fZ,A.oF,A.nW,A.rj,A.oK,A.cV,A.cx,A.pa,A.p8,A.p9,A.dq,A.oO,A.bb,A.by,A.bh,A.bj,A.de,A.dw,A.aZ,A.oR,A.cU,A.oG,A.eC,A.oQ,A.cT,A.oV,A.i0,A.hQ,A.bg,A.rV,A.kd,A.bX,A.pd,A.n8,A.hn,A.n9,A.pp,A.po,A.q7,A.q6,A.q8,A.q9,A.qa,A.kc,A.qg,A.qt,A.kG,A.qs,A.qu,A.re,A.e5,A.rf,A.fP,A.nJ,A.t_,A.eV,A.jz,A.p1,A.p5,A.qx,A.cY,A.qy,A.jT,A.eU,A.rW,A.pL,A.cO,A.bw,A.q4,A.ro,A.eT,A.eS,A.im,A.la,A.eJ,A.d4,A.rr,A.jh,A.w0,A.dJ,A.mF,A.dK,A.nb,A.b3,A.nk,A.fr,A.dd,A.jA,A.i_,A.nN,A.ok,A.om,A.fy,A.dU,A.oB,A.ot,A.ou,A.ca,A.oC,A.cW,A.fn,A.pU,A.dp,A.e0,A.c0,A.pZ,A.qf,A.b_,A.r9,A.rd,A.cs,A.mC,A.l7,A.rU,A.dz,A.bn,A.c5,A.bT,A.l9,A.jj,A.l6,A.fX,A.lG,A.lF,A.iF,A.t5])
q(J.k5,[J.k7,J.hI,J.hL,J.hK,J.hM,J.fB,J.dX])
q(J.hL,[J.dZ,J.r,A.fH,A.hW])
q(J.dZ,[J.kt,J.eR,J.dY])
r(J.k6,A.i8)
r(J.pc,J.r)
q(J.fB,[J.hH,J.k8])
q(A.m,[A.ea,A.P,A.cA,A.G,A.hz,A.dB,A.eZ,A.lg,A.lS,A.cn])
q(A.ea,[A.et,A.iW])
r(A.iu,A.et)
r(A.is,A.iW)
q(A.dP,[A.jw,A.jv,A.kU,A.vf,A.vh,A.t2,A.t1,A.tT,A.ob,A.tj,A.tm,A.pA,A.to,A.vO,A.vP,A.v9,A.qi,A.rI,A.pF,A.pG,A.pH,A.pT,A.pE,A.pJ,A.rx,A.ry,A.rA,A.o_,A.nY,A.nZ,A.pW,A.pX,A.qq,A.qp,A.qo,A.qn,A.qm,A.qr,A.uA,A.uB,A.qB,A.qC,A.vV,A.vT,A.o8,A.pC,A.v6,A.or,A.os,A.rX,A.rY,A.mX,A.n_,A.mZ,A.n0,A.mO,A.mw,A.mx,A.my,A.mL,A.mM,A.mK,A.p4,A.pr,A.nV,A.of,A.oh,A.oi,A.oj,A.n2,A.n3,A.n4,A.n5,A.n6,A.n7,A.v4,A.nn,A.nX,A.oJ,A.vW,A.uF,A.uE,A.tR,A.tQ,A.uX,A.oX,A.oY,A.p_,A.rk,A.oN,A.oL,A.v3,A.oS,A.oU,A.v2,A.nR,A.pw,A.pk,A.ri,A.rh,A.rg,A.nK,A.nL,A.q5,A.rs,A.rt,A.mu,A.ms,A.mS,A.mT,A.ne,A.ni,A.nh,A.ng,A.nA,A.nz,A.nB,A.nC,A.nD,A.ny,A.nt,A.nu,A.nF,A.nO,A.nP,A.nQ,A.nU,A.ol,A.on,A.oo,A.oz,A.ox,A.oy,A.ow,A.ov,A.oE,A.pf,A.pg,A.ph,A.q_,A.q0,A.q1,A.r4,A.r5,A.qY,A.qZ,A.qX,A.r_,A.qI,A.r0,A.r1,A.qW,A.qO,A.qP,A.qQ,A.qR,A.qS,A.qT,A.qU,A.qV,A.qN,A.qJ,A.qK,A.qL,A.qM,A.r3,A.r2,A.rb,A.rm,A.mE,A.rS,A.rR,A.rT,A.rN,A.rQ,A.rL,A.rK,A.vc,A.rJ,A.mz,A.mA,A.mB,A.tB,A.tC,A.tw,A.ty,A.tz,A.tt,A.tu,A.tv,A.u4,A.u5,A.uc,A.ud,A.ue,A.u7,A.u8,A.u9,A.u0,A.tX,A.tY,A.uI,A.uJ,A.vk,A.vl,A.vw,A.vy,A.vz,A.vA,A.vB,A.vC,A.vD,A.vE,A.vF,A.uL,A.uM,A.uP,A.v1,A.uV,A.uR,A.uT])
q(A.jw,[A.t6,A.ns,A.pl,A.vg,A.tU,A.v5,A.oc,A.tk,A.py,A.pB,A.tr,A.rF,A.rE,A.vQ,A.pK,A.rv,A.rz,A.o0,A.qD,A.vU,A.vS,A.mY,A.mQ,A.mR,A.ps,A.og,A.uZ,A.oZ,A.p0,A.oP,A.pv,A.p6,A.pN,A.pO,A.pP,A.rp,A.rq,A.nl,A.pi,A.pj,A.mD,A.rO,A.rM,A.tx,A.ts,A.u3,A.ub,A.vp,A.vq,A.uO])
r(A.aV,A.is)
q(A.al,[A.fC,A.dx,A.k9,A.kY,A.kI,A.ls,A.hO,A.jl,A.ct,A.ij,A.kX,A.fQ,A.jy])
r(A.fS,A.V)
r(A.dQ,A.fS)
q(A.P,[A.a1,A.aa,A.av,A.J,A.eY,A.iy])
q(A.a1,[A.ig,A.N,A.eM,A.lz])
r(A.df,A.cA)
q(A.bq,[A.ee,A.ef,A.fW])
q(A.ee,[A.aW,A.f2,A.iG])
q(A.ef,[A.ay,A.b0,A.iH])
r(A.iI,A.fW)
r(A.h1,A.fE)
r(A.e7,A.h1)
r(A.hr,A.e7)
q(A.fq,[A.a2,A.cR])
q(A.dt,[A.hs,A.iJ,A.iQ])
r(A.aL,A.hs)
q(A.jv,[A.qc,A.t3,A.t4,A.tH,A.o9,A.ta,A.tf,A.te,A.tc,A.tb,A.ti,A.th,A.tg,A.tE,A.uW,A.tL,A.tK,A.uz,A.us,A.ut,A.uy,A.un,A.up,A.uo,A.ux,A.ul,A.um,A.uu,A.uv,A.uw,A.ur,A.uq,A.uD,A.v7,A.oW,A.oM,A.oT,A.uG,A.mt,A.mH,A.mG,A.mU,A.nw,A.nx,A.nv,A.op,A.oA,A.q3,A.qG,A.qH,A.r6,A.r7,A.r8,A.rc,A.rP,A.tA,A.uf,A.ug,A.uh,A.ui,A.u6,A.ua,A.u1,A.u2,A.tZ,A.u_,A.uK,A.vm,A.vx,A.vG,A.vH,A.vI,A.vJ,A.vK,A.vL,A.vM,A.vn,A.vo,A.vr,A.vs,A.vt,A.vu,A.vv,A.uY])
r(A.hY,A.dx)
q(A.kU,[A.kR,A.fj])
q(A.a6,[A.cf,A.iv,A.ly])
r(A.hN,A.cf)
r(A.fG,A.fH)
q(A.hW,[A.ki,A.b6])
q(A.b6,[A.iB,A.iD])
r(A.iC,A.iB)
r(A.hU,A.iC)
r(A.iE,A.iD)
r(A.hV,A.iE)
q(A.hU,[A.hT,A.kj])
q(A.hV,[A.kk,A.kl,A.km,A.kn,A.ko,A.eF,A.hX])
r(A.h0,A.ls)
r(A.iq,A.lm)
r(A.lK,A.iV)
r(A.ix,A.iv)
r(A.cm,A.iJ)
r(A.fT,A.iQ)
q(A.eu,[A.jp,A.jK,A.ka])
q(A.jB,[A.na,A.pn,A.pm,A.rG])
r(A.kb,A.hO)
r(A.tp,A.tq)
r(A.l1,A.jK)
q(A.ct,[A.fK,A.k2])
r(A.ln,A.iR)
q(A.lr,[A.eI,A.ft,A.fp,A.eB,A.jk,A.d2,A.fM,A.fu,A.jr,A.jx,A.hu,A.eL,A.e6,A.ex,A.ce,A.i7,A.cS,A.fL,A.ib,A.fx,A.ir,A.it,A.jV,A.hC,A.jX,A.jY,A.eA,A.hD,A.eP,A.d0,A.fo,A.fz,A.fY,A.jq,A.es,A.jC,A.jE,A.b8,A.jo,A.cc,A.ez,A.ew,A.dg,A.hB,A.dS,A.dV,A.ks,A.kF,A.eK,A.cF,A.dv,A.bS,A.bB,A.k4,A.eW,A.cj,A.cM,A.cu,A.cN,A.dc,A.db,A.dM,A.dN,A.dL,A.er,A.dj,A.cP,A.cQ,A.dk,A.di,A.dl,A.cd,A.dh,A.cv,A.ji,A.bi,A.ci,A.e1,A.cD,A.bR,A.bA,A.i9,A.bP,A.c3,A.c4,A.e9,A.d3])
q(A.ds,[A.bv,A.bm,A.cB,A.kr,A.cw])
r(A.qA,A.lL)
r(A.lb,A.lZ)
r(A.iA,A.d6)
q(A.i_,[A.ht,A.nE,A.nT,A.hF,A.oD,A.pe,A.q2,A.qF,A.fO,A.rl])
q(A.rU,[A.l8,A.lD,A.ba,A.l5,A.l3,A.il,A.l4])
s(A.fS,A.d1)
s(A.iW,A.V)
s(A.iB,A.V)
s(A.iC,A.au)
s(A.iD,A.V)
s(A.iE,A.au)
s(A.h1,A.iP)
s(A.iQ,A.lX)
s(A.lL,A.tl)
s(A.lZ,A.tN)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",u:"double",be:"num",h:"String",l:"bool",ap:"Null",C:"List",H:"Object",X:"Map",ae:"JSObject"},mangledNames:{},types:["~()","ap(H?)","~(H?)","l(h)","dm()","l(u)","0&()","~(l)","dm(bm?)","l(aw)","l(H?)","l(eJ)","l(@)","@(@)","ap()","l(bb)","i(bX,bX)","l(e5)","l(bT)","~(~())","l(bD)","l(b_)","i(L<h,h>,L<h,h>)","~(@)","l(O)","l(bX)","ap(@)","l()","l(i)","~(h,u)","l(cv)","~(ae)","l(L<h,C<h>>)","l(cM)","@(h)","l(bw)","i()","i(aU)","h(c2)","f(f)","l(ec)","l(cd)","~(H?,H?)","i(@,@)","h(h)","@()","u()","fk()","l(L<h,aG>)","aG(L<h,aG>)","aG(aG,aG)","i(aO<bQ>,aO<bQ>)","c1(aO<bQ>)","i(aO<bO>,aO<bO>)","c1(aO<bO>)","eG(u,u,u,u)","K(K)","~(eQ)","eQ()","fm()","u(u,h_)","bY<ap>(L<h,h>)","l(C<h>)","i(h,h)","i(by,by)","ap(~())","+effectiveScore,light,score(u,aU,u)(aU)","i(+effectiveScore,light,score(u,aU,u),+effectiveScore,light,score(u,aU,u))","l(cc)","C<bC>()","bC?()","dm(h{fallback:h?})","l(aZ)","fg(H?)","ff(H?)","fh(H?)","h(H?)","i6(bv)","fi(H?)","cw(i,i,h?)","l(dw)","h(i,Z,Z,Z)","i(d6,d6)","i(a9,a9)","l(eb)","i(i)","h(aw)","i(+(u,u,u,u),+(u,u,u,u))","l(c2)","l(by)","i(i,aZ)","l(cx)","l(cV)","i(i,+(bm,dD))","i(dq,dq)","l(cU)","L<h,h>(h,@)","h?(h)","l(ii?)","l(bS)","l(bB)","eU()","bm(i,i,h?)","i(L<h,cO>,L<h,cO>)","i(ck,ck)","L<i,@>(i,eT)","L<i,@>(i,eS)","l(L<@,@>)","L<h,h>(L<@,@>)","l?(H?)","i(i,+(bv,ch))","h()","0^(m<0^>,H?)<H?>","u(u,h)","bv(i,i,h?)","C<h>(C<h>)","~(u)","~(i)","cB(i,i,h?)","ap(ae)","0^(h,m<0^>)<B>","eE(cB)","X<h,H?>(dp)","h(bi)","l(bi)","l(bA)","@(@,h)","l(dj)","l(cP)","l(cQ)","l(dk)","l(di)","l(dl)","l(dh)","i(+influence,light(u,bC),+influence,light(u,bC))","l(cu)","l(cN)","l(dc)","l(db)","h(cs)","i(cs,cs)","H?(H?)","i(bT,bT)","C<d4>()","l(d4)","l(L<h,h>)","i(c5,c5)","X<h,@>(bT)","l(c4)","l(c3)","l(bP)","0&(h,i?)","X<h,h>(X<h,h>,h)","ck(L<h,bm>)","i(c2,c2)","~(@,@)","i(L<i,h>,L<i,h>)","ap(H,cZ)","h(L<i,h>)","~(H,cZ)","~(bA)","~(dK)","~(fy)","~(dJ)","~(dU)","~(fr)","l(fN)","~(bR)","~(i,h)","~(bS,bB)","~(i,@)","ap(@,cZ)","fV()","cV(H?)","cx(H?)","cU(H?)","~(be)","C<+(u,u,u,u)>()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aW&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f2&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iG&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ay&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b0&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iH&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iI&&A.G9(a,b.a)}}
A.Dr(v.typeUniverse,JSON.parse('{"dY":"dZ","kt":"dZ","eR":"dZ","GB":"fH","r":{"C":["1"],"P":["1"],"ae":[],"m":["1"]},"k7":{"l":[],"af":[]},"hI":{"ap":[],"af":[]},"hL":{"ae":[]},"dZ":{"ae":[]},"k6":{"i8":[]},"pc":{"r":["1"],"C":["1"],"P":["1"],"ae":[],"m":["1"]},"eq":{"a8":["1"]},"fB":{"u":[],"be":[],"b4":["be"]},"hH":{"u":[],"i":[],"be":[],"b4":["be"],"af":[]},"k8":{"u":[],"be":[],"b4":["be"],"af":[]},"dX":{"h":[],"b4":["h"],"pY":[],"af":[]},"ea":{"m":["2"]},"hp":{"a8":["2"]},"et":{"ea":["1","2"],"m":["2"],"m.E":"2"},"iu":{"et":["1","2"],"ea":["1","2"],"P":["2"],"m":["2"],"m.E":"2"},"is":{"V":["2"],"C":["2"],"ea":["1","2"],"P":["2"],"m":["2"]},"aV":{"is":["1","2"],"V":["2"],"C":["2"],"ea":["1","2"],"P":["2"],"m":["2"],"m.E":"2","V.E":"2"},"fC":{"al":[]},"dQ":{"V":["i"],"d1":["i"],"C":["i"],"P":["i"],"m":["i"],"V.E":"i","d1.E":"i"},"P":{"m":["1"]},"a1":{"P":["1"],"m":["1"]},"ig":{"a1":["1"],"P":["1"],"m":["1"],"m.E":"1","a1.E":"1"},"aH":{"a8":["1"]},"cA":{"m":["2"],"m.E":"2"},"df":{"cA":["1","2"],"P":["2"],"m":["2"],"m.E":"2"},"hR":{"a8":["2"]},"N":{"a1":["2"],"P":["2"],"m":["2"],"m.E":"2","a1.E":"2"},"G":{"m":["1"],"m.E":"1"},"S":{"a8":["1"]},"hz":{"m":["2"],"m.E":"2"},"hA":{"a8":["2"]},"hx":{"a8":["1"]},"dB":{"m":["1"],"m.E":"1"},"io":{"a8":["1"]},"fS":{"V":["1"],"d1":["1"],"C":["1"],"P":["1"],"m":["1"]},"eM":{"a1":["1"],"P":["1"],"m":["1"],"m.E":"1","a1.E":"1"},"aW":{"ee":[],"bq":[]},"f2":{"ee":[],"bq":[]},"iG":{"ee":[],"bq":[]},"ay":{"ef":[],"bq":[]},"b0":{"ef":[],"bq":[]},"iH":{"ef":[],"bq":[]},"iI":{"fW":[],"bq":[]},"hr":{"e7":["1","2"],"h1":["1","2"],"fE":["1","2"],"iP":["1","2"],"X":["1","2"]},"fq":{"X":["1","2"]},"a2":{"fq":["1","2"],"X":["1","2"]},"eZ":{"m":["1"],"m.E":"1"},"f_":{"a8":["1"]},"cR":{"fq":["1","2"],"X":["1","2"]},"hs":{"dt":["1"],"e4":["1"],"P":["1"],"m":["1"]},"aL":{"hs":["1"],"dt":["1"],"e4":["1"],"P":["1"],"m":["1"]},"hY":{"dx":[],"al":[]},"k9":{"al":[]},"kY":{"al":[]},"iK":{"cZ":[]},"dP":{"ey":[]},"jv":{"ey":[]},"jw":{"ey":[]},"kU":{"ey":[]},"kR":{"ey":[]},"fj":{"ey":[]},"kI":{"al":[]},"cf":{"a6":["1","2"],"w7":["1","2"],"X":["1","2"],"a6.K":"1","a6.V":"2"},"aa":{"P":["1"],"m":["1"],"m.E":"1"},"cg":{"a8":["1"]},"av":{"P":["1"],"m":["1"],"m.E":"1"},"ah":{"a8":["1"]},"J":{"P":["L<1,2>"],"m":["L<1,2>"],"m.E":"L<1,2>"},"cz":{"a8":["L<1,2>"]},"hN":{"cf":["1","2"],"a6":["1","2"],"w7":["1","2"],"X":["1","2"],"a6.K":"1","a6.V":"2"},"ee":{"bq":[]},"ef":{"bq":[]},"fW":{"bq":[]},"hJ":{"Cp":[],"pY":[]},"lB":{"i3":[],"fF":[]},"lg":{"m":["i3"],"m.E":"i3"},"lh":{"a8":["i3"]},"ie":{"fF":[]},"lS":{"m":["fF"],"m.E":"fF"},"lT":{"a8":["fF"]},"fG":{"ae":[],"af":[]},"eF":{"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"fH":{"ae":[],"af":[]},"hW":{"ae":[]},"ki":{"ae":[],"af":[]},"b6":{"bZ":["1"],"ae":[]},"hU":{"V":["u"],"b6":["u"],"C":["u"],"bZ":["u"],"P":["u"],"ae":[],"m":["u"],"au":["u"]},"hV":{"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"]},"hT":{"o1":[],"V":["u"],"b6":["u"],"C":["u"],"bZ":["u"],"P":["u"],"ae":[],"m":["u"],"au":["u"],"af":[],"V.E":"u","au.E":"u"},"kj":{"V":["u"],"b6":["u"],"C":["u"],"bZ":["u"],"P":["u"],"ae":[],"m":["u"],"au":["u"],"af":[],"V.E":"u","au.E":"u"},"kk":{"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"kl":{"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"km":{"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"kn":{"wl":[],"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"ko":{"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"hX":{"ii":[],"V":["i"],"b6":["i"],"C":["i"],"bZ":["i"],"P":["i"],"ae":[],"m":["i"],"au":["i"],"af":[],"V.E":"i","au.E":"i"},"ls":{"al":[]},"h0":{"dx":[],"al":[]},"cH":{"a8":["1"]},"cn":{"m":["1"],"m.E":"1"},"b2":{"al":[]},"iq":{"lm":["1"]},"aq":{"bY":["1"]},"iV":{"yD":[]},"lK":{"iV":[],"yD":[]},"iv":{"a6":["1","2"],"X":["1","2"]},"ix":{"iv":["1","2"],"a6":["1","2"],"X":["1","2"],"a6.K":"1","a6.V":"2"},"eY":{"P":["1"],"m":["1"],"m.E":"1"},"iw":{"a8":["1"]},"cm":{"dt":["1"],"y4":["1"],"e4":["1"],"P":["1"],"m":["1"]},"f0":{"a8":["1"]},"V":{"C":["1"],"P":["1"],"m":["1"]},"a6":{"X":["1","2"]},"iy":{"P":["2"],"m":["2"],"m.E":"2"},"iz":{"a8":["2"]},"fE":{"X":["1","2"]},"e7":{"h1":["1","2"],"fE":["1","2"],"iP":["1","2"],"X":["1","2"]},"dt":{"e4":["1"],"P":["1"],"m":["1"]},"iJ":{"dt":["1"],"e4":["1"],"P":["1"],"m":["1"]},"fT":{"dt":["1"],"lX":["1"],"e4":["1"],"P":["1"],"m":["1"]},"ly":{"a6":["h","@"],"X":["h","@"],"a6.K":"h","a6.V":"@"},"lz":{"a1":["h"],"P":["h"],"m":["h"],"m.E":"h","a1.E":"h"},"jp":{"eu":["C<i>","h"]},"jK":{"eu":["h","C<i>"]},"hO":{"al":[]},"kb":{"al":[]},"ka":{"eu":["H?","h"]},"l1":{"eu":["h","C<i>"]},"ev":{"b4":["ev"]},"u":{"be":[],"b4":["be"]},"dR":{"b4":["dR"]},"i":{"be":[],"b4":["be"]},"C":{"P":["1"],"m":["1"]},"be":{"b4":["be"]},"i3":{"fF":[]},"e4":{"P":["1"],"m":["1"]},"h":{"b4":["h"],"pY":[]},"lr":{"B":[]},"jl":{"al":[]},"dx":{"al":[]},"ct":{"al":[]},"fK":{"al":[]},"k2":{"al":[]},"ij":{"al":[]},"kX":{"al":[]},"fQ":{"al":[]},"jy":{"al":[]},"kq":{"al":[]},"ic":{"al":[]},"lU":{"cZ":[]},"bl":{"CE":[]},"iR":{"l_":[]},"lO":{"l_":[]},"ln":{"l_":[]},"lx":{"wg":[]},"ed":{"wg":[]},"eI":{"B":[]},"ft":{"B":[]},"fp":{"B":[]},"bv":{"ds":[]},"bm":{"ds":[]},"cB":{"ds":[]},"cw":{"ds":[]},"kr":{"ds":[]},"eB":{"B":[]},"jk":{"B":[]},"d2":{"B":[]},"fM":{"B":[]},"fu":{"B":[]},"jr":{"B":[]},"jx":{"B":[]},"hu":{"B":[]},"eL":{"B":[]},"e6":{"B":[]},"ex":{"B":[]},"ce":{"B":[]},"i7":{"B":[]},"cS":{"B":[]},"fL":{"B":[]},"i4":{"Cs":[]},"lw":{"c1":[]},"lV":{"c1":[]},"lH":{"Cr":[]},"lt":{"BE":[]},"ib":{"B":[]},"bQ":{"b4":["bQ"]},"bO":{"b4":["bO"]},"fx":{"B":[]},"ir":{"B":[]},"ho":{"aj":[]},"lk":{"a9":[]},"js":{"aj":[]},"ll":{"a9":[]},"jF":{"aj":[]},"lo":{"a9":[]},"it":{"B":[]},"hv":{"aj":[]},"lp":{"a9":[]},"jI":{"aj":[]},"lq":{"a9":[]},"jZ":{"aj":[]},"lv":{"a9":[]},"hS":{"aj":[]},"lC":{"a9":[]},"jt":{"Cq":[]},"i1":{"aj":[]},"lI":{"a9":[]},"kB":{"aj":[]},"lJ":{"a9":[]},"kL":{"aj":[]},"lM":{"a9":[]},"kM":{"aj":[]},"lN":{"a9":[]},"kP":{"aj":[]},"lQ":{"a9":[]},"kO":{"aj":[]},"lP":{"a9":[]},"l2":{"aj":[]},"lY":{"a9":[]},"ld":{"aj":[]},"m0":{"a9":[]},"jV":{"B":[]},"hC":{"B":[]},"jX":{"B":[]},"jY":{"B":[]},"eA":{"B":[]},"hD":{"B":[]},"eP":{"B":[]},"d0":{"B":[]},"fo":{"B":[]},"jG":{"Bn":[]},"fz":{"B":[]},"fY":{"B":[]},"b8":{"B":[]},"jq":{"B":[]},"es":{"B":[]},"jC":{"B":[]},"jE":{"B":[]},"dE":{"dm":[]},"lb":{"BK":[]},"jo":{"B":[]},"cc":{"B":[]},"ez":{"B":[]},"iA":{"d6":[]},"ew":{"B":[]},"dg":{"B":[]},"dS":{"B":[]},"hB":{"B":[]},"dV":{"B":[]},"ks":{"B":[]},"kF":{"B":[]},"eK":{"B":[]},"cF":{"B":[]},"dv":{"B":[]},"bS":{"B":[]},"bB":{"B":[]},"k4":{"B":[]},"eW":{"B":[]},"cj":{"B":[]},"cM":{"B":[]},"cu":{"B":[]},"cN":{"B":[]},"dc":{"B":[]},"db":{"B":[]},"dM":{"B":[]},"dN":{"B":[]},"er":{"B":[]},"dL":{"B":[]},"dj":{"B":[]},"cP":{"B":[]},"cQ":{"B":[]},"dk":{"B":[]},"di":{"B":[]},"dl":{"B":[]},"cd":{"B":[]},"dh":{"B":[]},"cv":{"B":[]},"ji":{"B":[]},"bi":{"B":[]},"ci":{"B":[]},"e1":{"B":[]},"cD":{"B":[]},"bR":{"B":[]},"bA":{"B":[]},"i9":{"B":[]},"bP":{"B":[]},"c3":{"B":[]},"c4":{"B":[]},"e9":{"B":[]},"d3":{"B":[]},"lG":{"Cv":[]},"BT":{"C":["i"],"P":["i"],"m":["i"]},"ii":{"C":["i"],"P":["i"],"m":["i"]},"CJ":{"C":["i"],"P":["i"],"m":["i"]},"BR":{"C":["i"],"P":["i"],"m":["i"]},"wl":{"C":["i"],"P":["i"],"m":["i"]},"BS":{"C":["i"],"P":["i"],"m":["i"]},"CI":{"C":["i"],"P":["i"],"m":["i"]},"o1":{"C":["u"],"P":["u"],"m":["u"]},"BD":{"C":["u"],"P":["u"],"m":["u"]}}'))
A.Dq(v.typeUniverse,JSON.parse('{"fS":1,"iW":2,"b6":1,"iJ":1,"iQ":1,"jB":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.Y
return{mq:s("cM"),dx:s("hm"),bC:s("cs"),v:s("b2"),iF:s("jn"),ul:s("db"),EL:s("cN"),xs:s("cu"),gc:s("dc"),lT:s("ff"),bJ:s("fg"),gI:s("fh"),ya:s("fi"),z3:s("bO"),Bu:s("fk"),p:s("aU"),rO:s("fn"),sU:s("dQ"),hO:s("b4<@>"),CH:s("hq"),D:s("a2<h,h>"),I:s("a2<h,i>"),M:s("aL<h>"),f7:s("ev"),fP:s("bP"),yb:s("dR"),he:s("P<@>"),yW:s("cc"),g:s("bX"),Ct:s("B"),yt:s("al"),hl:s("Z"),B:s("o1"),pH:s("aG"),Fr:s("cO"),BO:s("ey"),ls:s("bY<ap>"),vS:s("dh"),aJ:s("di"),x:s("cd"),bK:s("dj"),gm:s("dk"),dn:s("cP"),mx:s("dl"),j_:s("cQ"),EJ:s("cR<bR,h>"),_:s("dm"),Eb:s("cv"),qX:s("dV"),mF:s("cU"),iO:s("cw"),oW:s("cV"),fl:s("cx"),FA:s("m<hq>"),yT:s("m<h>"),x6:s("m<ck>"),oJ:s("m<u>"),tY:s("m<@>"),uI:s("m<i>"),Fg:s("r<cs>"),jC:s("r<aU>"),km:s("r<fn>"),sa:s("r<ca>"),ns:s("r<jJ>"),cO:s("r<de>"),r:s("r<bX>"),uH:s("r<jN>"),Dl:s("r<Z>"),iJ:s("r<bY<~>>"),pC:s("r<jS>"),C1:s("r<dm>"),ka:s("r<bf>"),Fm:s("r<eC>"),op:s("r<cT>"),hr:s("r<eD>"),s3:s("r<cw>"),sL:s("r<ae>"),Bv:s("r<kd>"),yH:s("r<bh>"),Bq:s("r<L<h,h>>"),rq:s("r<X<h,H>>"),A7:s("r<X<h,h>>"),cs:s("r<X<h,@>>"),s6:s("r<bv>"),pq:s("r<aw>"),bA:s("r<dp>"),xz:s("r<bw>"),b4:s("r<bj>"),s0:s("r<eG>"),hc:s("r<cW>"),ea:s("r<dq>"),Fk:s("r<kv>"),qP:s("r<by>"),kv:s("r<eJ>"),nR:s("r<+(h,C<by>)>"),kd:s("r<+(h,h)>"),rh:s("r<+influence,light(u,bC)>"),wt:s("r<+(i,h)>"),wx:s("r<+(u,u,u,u)>"),e_:s("r<aj>"),u:s("r<a9>"),Ft:s("r<i4>"),C:s("r<O>"),h1:s("r<bz>"),s2:s("r<c1>"),eY:s("r<aZ>"),xB:s("r<cY>"),El:s("r<fP>"),AM:s("r<aO<bO>>"),fs:s("r<aO<bQ>>"),cv:s("r<bC>"),DZ:s("r<dw>"),s:s("r<h>"),fa:s("r<c2>"),k:s("r<K>"),h:s("r<f>"),ld:s("r<im>"),Dc:s("r<dz>"),Fi:s("r<c5>"),jV:s("r<d4>"),yo:s("r<eU>"),E:s("r<bb>"),uk:s("r<bp>"),wf:s("r<iA>"),il:s("r<ec>"),l5:s("r<eb>"),ow:s("r<lE>"),j5:s("r<lF>"),pv:s("r<fX>"),Fy:s("r<eg<eE>>"),EM:s("r<eg<ch>>"),w_:s("r<eg<bz>>"),f2:s("r<eg<dD>>"),Fa:s("r<fZ>"),n:s("r<u>"),zz:s("r<@>"),t:s("r<i>"),Cf:s("r<H?>"),AN:s("r<be>"),w:s("hI"),m:s("ae"),ud:s("dY"),Eh:s("bZ<@>"),AQ:s("C<aU>"),hk:s("C<bX>"),b:s("C<bf>"),xp:s("C<cw>"),nx:s("C<ae>"),rW:s("C<X<h,h>>"),qr:s("C<bv>"),R:s("C<aw>"),fG:s("C<cW>"),Es:s("C<by>"),DX:s("C<+(h,h)>"),pL:s("C<+(i,h)>"),xM:s("C<+(u,u,u,u)>"),bE:s("C<bz>"),fx:s("C<cY>"),a:s("C<h>"),uh:s("C<im>"),D0:s("C<dz>"),cf:s("C<c5>"),p7:s("C<d4>"),dd:s("C<u>"),j:s("C<@>"),J:s("C<i>"),ik:s("C<ae?>"),vX:s("C<H?>"),m2:s("hQ"),h6:s("L<h,aG>"),gJ:s("L<h,cO>"),q:s("L<h,h>"),no:s("L<h,bm>"),AC:s("L<@,@>"),ou:s("L<i,h>"),pr:s("L<i,@>"),yx:s("L<h,C<h>>"),mf:s("X<h,dm>"),vD:s("X<h,cB>"),ap:s("X<h,aw>"),G:s("X<h,h>"),m0:s("X<h,l>"),gG:s("X<h,u>"),P:s("X<h,@>"),f:s("X<@,@>"),eU:s("X<i,h>"),pG:s("X<i,eS>"),tQ:s("X<i,eT>"),aD:s("X<h,C<+(u,u,u,u)>>"),Bx:s("X<h,C<h>>"),oZ:s("X<h,H?>"),q1:s("X<c4,C<c5>>"),ee:s("X<i,X<h,h>>"),jT:s("N<h,h?>"),pw:s("cB"),kc:s("bv"),rV:s("fG"),mV:s("eF"),c:s("ap"),K:s("H"),BB:s("bQ"),A:s("aw"),oP:s("dp"),wJ:s("bi"),E4:s("bw"),A_:s("dq"),T:s("by"),DL:s("i0"),AB:s("kx"),yi:s("fI"),xK:s("e3"),Y:s("eJ"),iM:s("GC"),ep:s("+()"),k0:s("+(bv,ch)"),ut:s("+(bm,dD)"),rf:s("+(u,u)"),mn:s("+influence,light(u,bC)"),tK:s("+effectiveScore,light,score(u,aU,u)"),nz:s("+(u,u,u,u)"),ez:s("i3"),wZ:s("a9"),lg:s("i5"),tc:s("cX<cw,bz>"),ja:s("cX<cB,eE>"),wm:s("cX<bv,ch>"),qq:s("cX<bm,dD>"),j2:s("O"),m3:s("bz"),yz:s("c1"),U:s("aZ"),F3:s("cY"),Q:s("e4<h>"),oG:s("e4<i>"),en:s("bA"),gl:s("b_"),W:s("e5"),u5:s("bB"),bG:s("bS"),ho:s("fP"),EH:s("aO<bO>"),E0:s("aO<bQ>"),l:s("cZ"),w8:s("dw"),qL:s("b8"),N:s("h"),Aj:s("bm"),jP:s("ck"),d:s("c2"),bp:s("e6"),sg:s("af"),bs:s("dx"),qF:s("eR"),hL:s("e7<h,h>"),qt:s("kZ"),eP:s("l_"),cV:s("K"),a7:s("f"),qY:s("bD"),L:s("bT"),gM:s("c3"),hF:s("c4"),vw:s("eS"),BX:s("eT"),aA:s("dz"),AP:s("c5"),sy:s("la"),bB:s("ba"),aS:s("d4"),fu:s("eU"),fw:s("G<bP>"),vL:s("G<cc>"),vK:s("G<cd>"),Fj:s("G<bB>"),rZ:s("G<bS>"),vY:s("G<h>"),r4:s("G<bD>"),g2:s("G<c3>"),cE:s("G<c4>"),rt:s("S<bA>"),xG:s("S<b_>"),fh:s("S<bD>"),e:s("bb"),hR:s("aq<@>"),BT:s("ix<H?,H?>"),Ez:s("d6"),rL:s("fV"),xT:s("ec"),wU:s("eb"),la:s("lD"),qS:s("iF"),jS:s("h_"),Br:s("cn<c1>"),V:s("iT"),jm:s("iU"),y:s("l"),Bs:s("l()"),kr:s("l(bP)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(H)"),pz:s("l(bA)"),aV:s("l(b_)"),y2:s("l(bB)"),ty:s("l(bS)"),Ag:s("l(h)"),rd:s("l(bD)"),da:s("l(c3)"),qR:s("l(c4)"),i:s("u"),z:s("@"),pF:s("@()"),h_:s("@(H)"),nW:s("@(H,cZ)"),S:s("i"),eZ:s("bY<ap>?"),r9:s("r<H?>?"),gt:s("ae?"),rK:s("C<@>?"),jd:s("X<h,C<h>>?"),X:s("H?"),dR:s("h?"),oI:s("h?(h)"),Fx:s("ii?"),F:s("dC<@,@>?"),Af:s("lA?"),k7:s("l?"),wK:s("l(fN)?"),u6:s("u?"),lo:s("i?"),s7:s("be?"),Z:s("~()?"),Cv:s("~(dJ)?"),kC:s("~(dK)?"),pf:s("~(fr)?"),hq:s("~(fy)?"),CA:s("~(dU)?"),hQ:s("~(bR)?"),Ci:s("~(bA)?"),nf:s("~(bS,bB)?"),DI:s("~(h,u)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,h)?"),o:s("be"),H:s("~"),O:s("~()"),m1:s("~(h,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.i7=J.k5.prototype
B.a=J.r.prototype
B.d=J.hH.prototype
B.c=J.fB.prototype
B.b=J.dX.prototype
B.i8=J.dY.prototype
B.i9=J.hL.prototype
B.t=A.hT.prototype
B.d8=A.hX.prototype
B.dm=J.kt.prototype
B.bQ=J.eR.prototype
B.a9=new A.cM(1,"standard")
B.K=new A.jh(B.a9)
B.bV=new A.cM(0,"concise")
B.bW=new A.cM(2,"verbose")
B.ap=new A.dJ(null,null,null,null,null)
B.n0=new A.ji(0,"none")
B.n1=new A.jk(0,"opaque")
B.dY=new A.jo(4,"ambience")
B.c_=new A.cu(3,"mono")
B.aQ=new A.dc(0,"full")
B.bZ=new A.cu(0,"auto")
B.bY=new A.cN(1,"standard")
B.bX=new A.db(0,"defaultMix")
B.aR=new A.dK(B.bZ,B.bY,B.aQ,B.bX)
B.aH=new A.kF(1,"pixeldart")
B.e4=new A.hn(B.aH,!1,!0,!1,null,!1,null)
B.c1=new A.dL(1,"capturing")
B.e5=new A.dd(B.c1,null)
B.c2=new A.dL(3,"rejected")
B.aS=new A.dd(B.c2,null)
B.c3=new A.dL(4,"applied")
B.c0=new A.dd(B.c3,null)
B.c4=new A.dL(5,"cancelled")
B.e6=new A.dd(B.c4,null)
B.aT=new A.dL(2,"conflict")
B.aq=new A.jq(0,"add")
B.ea=new A.es(0,"zero")
B.aa=new A.es(1,"one")
B.ab=new A.jr(0,"alpha")
B.F=new A.dM(1,"button")
B.p=new A.dN(0,"normal")
B.ed=new A.b3("settings.back",B.F,"back","back to pause menu",B.p)
B.ar=new A.dM(0,"heading")
B.ee=new A.b3("settings.heading",B.ar,"Settings",null,B.p)
B.ef=new A.b3("settings.controls.heading",B.ar,"Controls",null,B.p)
B.eg=new A.b3("settings.controls.back",B.F,"back","back to settings categories",B.p)
B.eh=new A.b3("pause.heading",B.ar,"Paused",null,B.p)
B.ei=new A.dM(3,"slider")
B.ej=new A.dM(4,"toggle")
B.c5=new A.dM(5,"keybind")
B.as=new A.dN(5,"disabled")
B.ek=new A.dN(6,"error")
B.el=new A.dN(7,"destructive")
B.c6=new A.dN(8,"remapping")
B.c7=new A.hm()
B.em=new A.n8()
B.n2=new A.na()
B.en=new A.jp()
B.c8=new A.nm()
B.eo=new A.hx(A.Y("hx<0&>"))
B.c9=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ep=function() {
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
B.eu=function(getTagFallback) {
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
B.eq=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.et=function(hooks) {
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
B.es=function(hooks) {
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
B.er=function(hooks) {
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
B.ca=function(hooks) { return hooks; }

B.j=new A.ka()
B.n3=new A.pp()
B.ev=new A.kq()
B.n4=new A.q7()
B.ew=new A.q8()
B.aU=new A.qa()
B.ex=new A.cY()
B.aI=new A.cj(1,"gradeLUT")
B.ey=new A.cY()
B.ez=new A.qx()
B.eA=new A.qz()
B.f=new A.qE()
B.cb=new A.l1()
B.m7=new A.d2(0,"position")
B.mc=new A.bD(B.m7,0,3)
B.dQ=new A.d2(1,"normal")
B.md=new A.bD(B.dQ,3,3)
B.m8=new A.d2(2,"color")
B.me=new A.bD(B.m8,6,4)
B.m9=new A.d2(4,"alpha")
B.mf=new A.bD(B.m9,10,1)
B.ma=new A.d2(5,"uv0")
B.mg=new A.bD(B.ma,11,2)
B.mb=new A.d2(8,"legacyMaterialEffect")
B.mh=new A.bD(B.mb,13,1)
B.W=s([B.mc,B.md,B.me,B.mf,B.mg,B.mh],A.Y("r<bD>"))
B.ac=new A.rH()
B.aV=new A.lx()
B.w=new A.lK()
B.at=new A.lU()
B.eB=new A.fl(1.3089969389957472,0.1,60)
B.eC=new A.fl(1.0471975511965976,0.1,60)
B.eD=new A.fl(0.8726646259971648,0.08,45)
B.ad=new A.fo(0,"colorOnly")
B.cc=new A.fo(1,"colorAndDepth")
B.aW=new A.fo(2,"depthOnly")
B.aX=new A.jx(1,"srgb")
B.cd=new A.fp(0,"open")
B.eE=new A.fp(1,"committed")
B.eF=new A.fp(2,"aborted")
B.aY=new A.ft(0,"open")
B.eM=new A.ft(1,"committed")
B.eN=new A.ft(2,"rolledBack")
B.au=new A.jC(1,"back")
B.av=new A.jE(0,"less")
B.eP=new A.hu(2,"full")
B.aw=new A.bP(0,"open")
B.ce=new A.bP(1,"chain")
B.cf=new A.bP(2,"throughDoor")
B.cg=new A.bP(3,"letterbox")
B.ae=new A.bP(4,"ignore")
B.T=new A.fu(0,"opaque")
B.eV=new A.fu(1,"masked")
B.aZ=new A.fu(2,"blended")
B.eW=new A.fv(!1,B.av,!1,!0,B.aa,B.aa,B.aq,!1,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eX=new A.fv(!0,B.av,!1,!0,B.aa,B.aa,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eb=new A.es(2,"srcAlpha")
B.ec=new A.es(3,"oneMinusSrcAlpha")
B.eY=new A.fv(!0,B.av,!1,!0,B.eb,B.ec,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eZ=new A.dR(0)
B.f_=new A.dR(24e5)
B.ch=new A.cc(0,"compliance")
B.f0=new A.fw(B.ch)
B.ci=new A.cc(1,"rupture")
B.f1=new A.fw(B.ci)
B.cj=new A.cc(2,"synchronisation")
B.f2=new A.fw(B.cj)
B.ck=new A.ew(0,"front")
B.f3=new A.ew(1,"rearService")
B.f4=new A.ew(2,"sideBoundary")
B.f5=new A.ew(3,"roofline")
B.m=new A.dS(0,"north")
B.x=new A.dS(1,"east")
B.l=new A.dS(2,"south")
B.G=new A.dS(3,"west")
B.ax=new A.hB(0,"ground")
B.ay=new A.hB(1,"first")
B.f6=new A.dg(0,"mantle")
B.f7=new A.dg(1,"portal")
B.f9=new A.dg(3,"inventory")
B.cl=new A.dg(4,"aftermath")
B.f8=new A.dg(2,"window")
B.fb=new A.dT(B.f8,"shutter","the shutter")
B.fa=new A.dg(5,"none")
B.fc=new A.dT(B.fa,null,null)
B.fd=new A.F("saved mantle history is malformed",null,null)
B.fe=new A.F("rupture elapsed time is malformed",null,null)
B.ff=new A.F("presentation keys must be strings",null,null)
B.fg=new A.F("unsupported accessibility profile",null,null)
B.fh=new A.F("inventory inspections must be an object",null,null)
B.cm=new A.F("saved mantle state is malformed",null,null)
B.fi=new A.F("inactive rupture has elapsed time",null,null)
B.fj=new A.F("control sensitivity is outside 0.1\u20133.0",null,null)
B.fk=new A.F("invalid action bindings",null,null)
B.fl=new A.F("listener room is empty",null,null)
B.fm=new A.F("control bindings conflict",null,null)
B.fn=new A.F("saved difficulty state is malformed",null,null)
B.fo=new A.F("saved house drift state is malformed",null,null)
B.fp=new A.F("saved sleep record is malformed",null,null)
B.fq=new A.F("UI scale must be between 0.8 and 2.0",null,null)
B.fr=new A.F("unsupported settings store",null,null)
B.fs=new A.F("settings values must be an object",null,null)
B.ft=new A.F("saved day-loop sleepHistory must be a list",null,null)
B.fu=new A.F("invalid anisotropy limit",null,null)
B.fv=new A.F("audio event position is not finite",null,null)
B.fw=new A.F("event sequence must be non-negative",null,null)
B.fx=new A.F("inventory inspection counts are invalid",null,null)
B.fy=new A.F("only keybinds can be remapping",null,null)
B.fz=new A.F("modelScale must be positive and finite",null,null)
B.fA=new A.F("listener position is not finite",null,null)
B.fB=new A.F("invalid action ID",null,null)
B.fC=new A.F("saved window state is malformed",null,null)
B.fD=new A.F("unsupported graphics preset",null,null)
B.fE=new A.F("save run and meta must be objects",null,null)
B.fF=new A.F("saved house state is malformed",null,null)
B.fG=new A.F("saved sleep record must be an object",null,null)
B.fH=new A.F("sound cue must be a non-empty string",null,null)
B.fI=new A.F("saved session run is malformed",null,null)
B.fJ=new A.F("save map keys must be strings",null,null)
B.fK=new A.F("unsupported graphics profile",null,null)
B.fL=new A.F("unsupported audio options",null,null)
B.fM=new A.F("transform.scale must be positive",null,null)
B.fN=new A.F("Escape is reserved for pause navigation",null,null)
B.fO=new A.F("saved day-loop state is malformed",null,null)
B.fP=new A.F("rupture extinguished mantle is unknown",null,null)
B.cn=new A.F("unsupported controls profile",null,null)
B.co=new A.F("saved portal state is malformed",null,null)
B.fQ=new A.F("acoustic portal profile is not finite",null,null)
B.fR=new A.F("saved house state does not match this house",null,null)
B.fS=new A.F("presentation snapshot contains a non-finite number",null,null)
B.fT=new A.F("unsupported gameplay settings profile",null,null)
B.fU=new A.F("save contains a non-finite number",null,null)
B.fV=new A.F("unsupported graphics store",null,null)
B.fW=new A.F("brush component needs an id and label",null,null)
B.fX=new A.F("text.json root must be an object",null,null)
B.fY=new A.F("event kind is empty",null,null)
B.fZ=new A.F("invalid control binding token",null,null)
B.h_=new A.F("audio transmission muffle is invalid",null,null)
B.h0=new A.F("acoustic portal muffle order is invalid",null,null)
B.h1=new A.F("unsupported settings profile",null,null)
B.h2=new A.F("saved session clock is malformed",null,null)
B.h3=new A.F("rupture mantle IDs are malformed",null,null)
B.h4=new A.F("invalid gameplay setting: contextualReminders",null,null)
B.h5=new A.F("invalid screen-reader verbosity",null,null)
B.h6=new A.F("saved sleep record has an unknown enum",null,null)
B.h7=new A.F("audio cue variants are empty",null,null)
B.h8=new A.F("save root must be an object",null,null)
B.h9=new A.F("audio event identity is empty",null,null)
B.ha=new A.F("render capabilities contain invalid limits",null,null)
B.hb=new A.F("saved house overrides are malformed",null,null)
B.V=new A.c_(0,0,0)
B.cO=new A.c_(1,1,1)
B.iT=s([],t.Fk)
B.bh=s([],t.cv)
B.hc=new A.jR(B.V,B.V,0,1,null,null,B.cO,0,null,B.iT,B.bh)
B.cp=new A.aG(0,0,0)
B.hd=new A.ex(0,"idle")
B.az=new A.ex(1,"active")
B.he=new A.ex(2,"ended")
B.hf=new A.ex(3,"aborted")
B.cq=new A.fx(0,"outside")
B.hg=new A.fx(1,"intersects")
B.hh=new A.fx(2,"inside")
B.hi=new A.ez(0,"timeAdvanced")
B.hj=new A.ez(1,"dayEndReached")
B.hk=new A.ez(4,"slept")
B.hl=new A.ez(5,"complianceFloorTripped")
B.b_=new A.dh(0,"twentyFourHour")
B.cr=new A.dh(1,"twelveHour")
B.cs=new A.di(0,"important")
B.ct=new A.di(1,"always")
B.b0=new A.cd(0,"pauseAndMute")
B.cu=new A.dj(0,"press")
B.cv=new A.dj(1,"hold")
B.cw=new A.dk(0,"compact")
B.cx=new A.dk(1,"spacious")
B.cy=new A.cP(1,"standard")
B.cz=new A.cP(2,"detailed")
B.cA=new A.dl(0,"toast")
B.cB=new A.dl(1,"detailed")
B.cC=new A.cQ(1,"readable")
B.hr=new A.hC(0,"vertex")
B.cD=new A.hC(1,"indices")
B.cE=new A.jV(0,"staticDraw")
B.h=new A.hD(0,"ready")
B.U=new A.hD(1,"lost")
B.af=new A.fz(0,"prepared")
B.hs=new A.fz(1,"committed")
B.ht=new A.fz(2,"rolledBack")
B.hu=new A.eA(0,"color")
B.cF=new A.eA(1,"colorAndGlow")
B.hv=new A.eA(2,"colorDepthGlow")
B.b1=new A.eA(3,"depthOnly")
B.aA=new A.jX(1,"linear")
B.cG=new A.jY(0,"clampToEdge")
B.hw=new A.jW(1,1,1,!1,B.aA,B.aA,B.cG,1)
B.hx=new A.cS(0,"beforeShadow")
B.hy=new A.cS(2,"beforeDepth")
B.cH=new A.cS(3,"afterDepth")
B.cI=new A.cS(4,"beforeWorld")
B.hz=new A.cS(5,"afterWorld")
B.L=new A.cS(6,"afterResolve")
B.hA=new A.cS(9,"beforePresent")
B.cJ=new A.ce(0,"readBeforeWrite")
B.hB=new A.ce(1,"duplicateWriter")
B.hC=new A.ce(2,"sampledMultisampledAttachment")
B.b2=new A.ce(3,"invalidResolve")
B.hD=new A.ce(4,"formatOrSizeMismatch")
B.hE=new A.ce(5,"unversionedReadWrite")
B.hF=new A.ce(6,"invalidHistoryRead")
B.hG=new A.ce(7,"dependencyCycle")
B.hH=new A.ce(8,"missingCapability")
B.cK=new A.cv(0,"high")
B.b3=new A.cv(1,"standard")
B.b4=new A.dU(1,B.b3,"auto",!1,"display","off","high")
B.aB=new A.dV(0,"player")
B.b5=new A.dV(1,"inserted")
B.cL=new A.dV(2,"warden")
B.cM=new A.eB(0,"wrongKind")
B.cN=new A.eB(1,"staleGeneration")
B.hK=new A.eB(2,"doubleRelease")
B.aC=new A.eB(3,"releasedResource")
B.hN=new A.cT("kitchen-range","settle")
B.hO=new A.cT("front-door-knocker","knock")
B.hP=new A.cT("cellar-drain","drip")
B.hQ=new A.cT("bedroom-timber","creak")
B.hR=new A.cT("kitchen-pipe","tick")
B.hS=new A.cT("bathroom-cistern","settle")
B.hT=new A.cT("landing-window","wind")
B.i6=new A.k4(1,"visitor")
B.ia=new A.pm(null)
B.ib=new A.pn(null)
B.b6=new A.kc(!1,0,0.85,0.92,1)
B.ic=new A.c_(0.008,0.012,0.024)
B.cP=s([0,2,2,3],t.t)
B.id=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b7=s([B.cs,B.ct],A.Y("r<di>"))
B.ie=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b8=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.E=new A.bA(0,"audio")
B.Q=new A.i9(0,"level")
B.lo=new A.b_("master","Master",B.E,B.Q,1,0,1,"audio")
B.lt=new A.b_("voice","Visitor voice",B.E,B.Q,1,0,1,"audio")
B.lk=new A.b_("effects","Effects",B.E,B.Q,1,0,1,"audio")
B.ll=new A.b_("ambience","House ambience",B.E,B.Q,1,0,1,"audio")
B.lp=new A.b_("music","Music",B.E,B.Q,1,0,1,"audio")
B.aJ=new A.bA(1,"display")
B.ls=new A.b_("brightness","Display brightness",B.aJ,B.Q,1,0.6,1.4,"display")
B.ai=new A.i9(1,"toggle")
B.ln=new A.b_("muted","Mute house audio",B.E,B.ai,!1,null,null,"audio")
B.a4=new A.bA(2,"accessibility")
B.lq=new A.b_("mono","Mono-compatible mix",B.a4,B.ai,!1,null,null,"audio")
B.lm=new A.b_("high-contrast","High-contrast interface",B.a4,B.ai,!1,null,null,"display")
B.lr=new A.b_("strong-highlights","Strong focus highlights",B.a4,B.ai,!1,null,null,"display")
B.C=s([B.lo,B.lt,B.lk,B.ll,B.lp,B.ls,B.ln,B.lq,B.lm,B.lr],A.Y("r<b_>"))
B.B=s(["who","verb","object","place","time"],t.s)
B.ig=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dZ=new A.db(1,"strong")
B.b9=s([B.bX,B.dZ],A.Y("r<db>"))
B.e7=new A.er(0,"swap")
B.e8=new A.er(1,"replace")
B.e9=new A.er(2,"cancel")
B.ih=s([B.e7,B.e8,B.e9],A.Y("r<er>"))
B.ii=s([2,5,9,12,16,19],t.t)
B.hm=new A.cd(1,"pauseOnly")
B.hn=new A.cd(2,"continuePlayback")
B.aD=s([B.b0,B.hm,B.hn],A.Y("r<cd>"))
B.ij=s(["uQuantizationBits","uDitherStrength"],t.s)
B.il=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.im=s([B.aw,B.ce,B.cf,B.cg,B.ae],A.Y("r<bP>"))
B.io=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.ip=s(["30","60","display"],t.s)
B.ao=new A.c4(0,"full")
B.bS=new A.c4(1,"compressed")
B.bT=new A.c4(2,"off")
B.cQ=s([B.ao,B.bS,B.bT],A.Y("r<c4>"))
B.ba=s([B.b_,B.cr],A.Y("r<dh>"))
B.iq=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e3=new A.dc(1,"reduced")
B.bb=s([B.aQ,B.e3],A.Y("r<dc>"))
B.e_=new A.cN(0,"wide")
B.e0=new A.cN(2,"night")
B.bc=s([B.e_,B.bY,B.e0],A.Y("r<cN>"))
B.ir=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iC=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cR=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bd=s([B.cw,B.cx],A.Y("r<dk>"))
B.lH=new A.bS(0,"long")
B.dF=new A.bS(1,"short")
B.cS=s([B.lH,B.dF],A.Y("r<bS>"))
B.eK=new A.ca("1 - 9","Select Response",!0)
B.eG=new A.ca("SPACE","Silence Ring",!1)
B.iE=s([B.eK,B.eG],t.sa)
B.Z=new A.bR(0,"visual")
B.bt=new A.bR(1,"graphics")
B.a_=new A.bR(2,"gameplay")
B.bu=new A.bR(3,"controls")
B.H=new A.bR(4,"audio")
B.I=new A.bR(5,"accessibility")
B.iF=s([B.Z,B.bt,B.a_,B.bu,B.H,B.I],A.Y("r<bR>"))
B.iG=s([2.1,4.2,6.3],t.n)
B.iH=s(["master","voice","effects","ambience","music"],t.s)
B.be=s([B.cA,B.cB],A.Y("r<dl>"))
B.iI=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hI=new A.cv(2,"safe")
B.hJ=new A.cv(3,"custom")
B.cT=s([B.cK,B.b3,B.hI,B.hJ],A.Y("r<cv>"))
B.D=new A.cj(0,"inactive")
B.bE=new A.cj(2,"affineWarp")
B.dy=new A.cj(3,"vertexSnap")
B.bF=new A.cj(4,"tapeGiveup")
B.bG=new A.cj(5,"portalFail")
B.a2=new A.cj(6,"lightsOut")
B.cU=s([B.D,B.aI,B.bE,B.dy,B.bF,B.bG,B.a2],A.Y("r<cj>"))
B.iJ=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iK=s([B.aB,B.b5,B.cL],A.Y("r<dV>"))
B.iL=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.mW=new A.bp("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.mV=new A.bp("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.mR=new A.bp("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.mZ=new A.bp("ronnie.response","named","A route card has Ronnie written on its back.")
B.mY=new A.bp("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iM=s([B.mW,B.mV,B.mR,B.mZ,B.mY],t.uk)
B.mX=new A.bp("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.mU=new A.bp("ronnie.response","named","The name Ronnie holds when the room does not.")
B.mS=new A.bp("denise.revision","accepted","One correction remains yours to protect.")
B.mP=new A.bp("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iN=s([B.mX,B.mU,B.mS,B.mP],t.uk)
B.M=s([],t.cO)
B.iX=s([],t.Fm)
B.iW=s([],t.op)
B.iO=s([],A.Y("r<cx>"))
B.iS=s([],t.yH)
B.bf=s([],t.b4)
B.X=s([],t.qP)
B.iY=s([],t.u)
B.cW=s([],t.xB)
B.iP=s([],t.El)
B.o=s([],t.s)
B.cX=s([],t.ld)
B.bg=s([],t.E)
B.iQ=s([],t.t)
B.iR=s([],t.zz)
B.hM=new A.hG(15,"kitchen",-0.3,0)
B.hL=new A.hG(19,"spare-room",0,0.3)
B.N=s([B.hM,B.hL],A.Y("r<hG>"))
B.j_=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lE=new A.bB(0,"bed")
B.lF=new A.bB(1,"chair")
B.lG=new A.bB(2,"floor")
B.cY=s([B.lE,B.lF,B.lG],A.Y("r<bB>"))
B.j0=s(["high","medium","low"],t.s)
B.e1=new A.cu(1,"headphones")
B.e2=new A.cu(2,"speakers")
B.bi=s([B.bZ,B.e1,B.e2,B.c_],A.Y("r<cu>"))
B.j1=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bj=s([B.cu,B.cv],A.Y("r<dj>"))
B.bs=new A.ci(0,"root")
B.db=new A.bi(0,"pauseMenu")
B.k3=new A.dp(B.bs,B.db,null)
B.j2=s([B.k3],t.bA)
B.bk=s([B.bV,B.a9,B.bW],A.Y("r<cM>"))
B.hp=new A.cQ(0,"instant")
B.hq=new A.cQ(2,"slow")
B.bl=s([B.hp,B.cC,B.hq],A.Y("r<cQ>"))
B.j3=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.j4=s([B.E,B.aJ,B.a4],A.Y("r<bA>"))
B.cZ=s([B.m,B.x,B.l,B.G],A.Y("r<dS>"))
B.R=new A.dv(0,"pbrMaterial")
B.a5=new A.dv(1,"shadowsAndOcclusion")
B.aj=new A.dv(2,"surfaceWeathering")
B.n=new A.dv(3,"atmosphereAndPost")
B.lB=new A.dv(4,"debugView")
B.bm=s([B.R,B.a5,B.aj,B.n,B.lB],A.Y("r<dv>"))
B.bH=new A.b8(0,"depthTest")
B.bI=new A.b8(1,"depthFunc")
B.bJ=new A.b8(2,"depthWrite")
B.bK=new A.b8(3,"blendEnable")
B.bL=new A.b8(4,"blendFunc")
B.bM=new A.b8(5,"blendEquation")
B.bN=new A.b8(6,"cullEnable")
B.bO=new A.b8(7,"cullFace")
B.dI=new A.b8(8,"frontFace")
B.lK=new A.b8(9,"stencilEnable")
B.dG=new A.b8(10,"colorMask")
B.dH=new A.b8(11,"scissorEnable")
B.j5=s([B.bH,B.bI,B.bJ,B.bK,B.bL,B.bM,B.bN,B.bO,B.dI,B.lK,B.dG,B.dH],A.Y("r<b8>"))
B.aK=new A.cF(0,"none")
B.lv=new A.cF(1,"albedoOnly")
B.lw=new A.cF(2,"normalsOnly")
B.lx=new A.cF(3,"roughnessOnly")
B.ly=new A.cF(4,"metallicOnly")
B.lz=new A.cF(5,"aoOnly")
B.lA=new A.cF(6,"wireframeOnly")
B.d_=s([B.aK,B.lv,B.lw,B.lx,B.ly,B.lz,B.lA],A.Y("r<cF>"))
B.j6=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eS=new A.de("A.J.",1.275)
B.eQ=new A.de("A.J.",1.53)
B.eT=new A.de("A.J.",1.77)
B.eU=new A.de("A.J.",2.025)
B.eR=new A.de("A.J.",4.8)
B.j7=s([B.eS,B.eQ,B.eT,B.eU,B.eR],t.cO)
B.j8=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.j9=s(["uBloomStrength"],t.s)
B.ja=s(["uLutSize","uStrength"],t.s)
B.jb=s([B.ch,B.ci,B.cj],A.Y("r<cc>"))
B.jc=s(["uTexelSize","uNear","uFar"],t.s)
B.d0=s(["uTexelStep"],t.s)
B.jd=s(["uninitialized"],t.s)
B.ho=new A.cP(0,"minimal")
B.bn=s([B.ho,B.cy,B.cz],A.Y("r<cP>"))
B.mT=new A.bp("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mO=new A.bp("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mN=new A.bp("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.mQ=new A.bp("ronnie.response","named","The route card gives one name its own line.")
B.je=s([B.mT,B.mO,B.mN,B.mQ],t.uk)
B.a7=new A.c3(0,"waiting")
B.am=new A.c3(1,"atDoor")
B.an=new A.c3(2,"consulting")
B.aM=new A.c3(3,"resolved")
B.jf=s([B.a7,B.am,B.an,B.aM],A.Y("r<c3>"))
B.eL=new A.ca("W A S D","Move",!1)
B.eJ=new A.ca("TAB","Journal",!1)
B.eI=new A.ca("CAPS","Shader Lab",!1)
B.eH=new A.ca("ESC","Pause",!1)
B.jg=s([B.eL,B.eJ,B.eI,B.eH],t.sa)
B.jh=s(["floor-linoleum","ceiling-stained"],t.s)
B.jU={uAlbedo:0}
B.d1=new A.a2(B.jU,[0],t.I)
B.k0={uSsaoRaw:0,uSceneDepth:1}
B.ji=new A.a2(B.k0,[0,1],t.I)
B.d9={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iB=s(["KeyW","GamepadDpadUp"],t.s)
B.iA=s(["KeyS","GamepadDpadDown"],t.s)
B.is=s(["KeyA","GamepadDpadLeft"],t.s)
B.it=s(["KeyD","GamepadDpadRight"],t.s)
B.iu=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iy=s(["KeyQ","GamepadB"],t.s)
B.iD=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.iZ=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iz=s(["KeyR","GamepadX"],t.s)
B.iv=s(["KeyF","GamepadRB"],t.s)
B.iw=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.ix=s(["KeyL"],t.s)
B.ik=s(["Escape","GamepadMenu"],t.s)
B.jj=new A.a2(B.d9,[B.iB,B.iA,B.is,B.it,B.iu,B.iy,B.iD,B.iZ,B.iz,B.iv,B.iw,B.ix,B.ik],A.Y("a2<h,C<h>>"))
B.jk=new A.a2(B.d9,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.D)
B.jY={uScene:0,uHistory:1}
B.jl=new A.a2(B.jY,[0,1],t.I)
B.jz={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jm=new A.a2(B.jz,["f8ff05f019166b02150cde34c23a826d99fb13cc","a47f81fed96bcc58d239cbee5b01488f972cc74b","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.D)
B.jL={aPosition:0,aUvMat:1}
B.d2=new A.a2(B.jL,[0,4],t.I)
B.jZ={uScene:0,uLut:1}
B.jn=new A.a2(B.jZ,[0,1],t.I)
B.k_={uSource:0}
B.d3=new A.a2(B.k_,[0],t.I)
B.jS={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jo=new A.a2(B.jS,[0,1,2,3,4,5,6],t.I)
B.d4=new A.cR([B.Z,"settings.visual",B.bt,"settings.graphics",B.a_,"settings.gameplay",B.bu,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d5=new A.cR([B.Z,"visual",B.bt,"graphics",B.a_,"gameplay",B.bu,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jH={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jp=new A.a2(B.jH,[0,1,2],t.I)
B.k2={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jq=new A.a2(B.k2,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.jN={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i2=new A.bg("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hY=new A.bg("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.i1=new A.bg("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.i4=new A.bg("wallpaper-damp","grime",7106925,0.94,0.76)
B.hZ=new A.bg("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i3=new A.bg("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.i5=new A.bg("wallpaper-peeling","grime",9340536,0.91,0.68)
B.i_=new A.bg("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hW=new A.bg("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hX=new A.bg("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hU=new A.bg("floor-concrete","grime",7828331,0.96,0.92)
B.hV=new A.bg("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.i0=new A.bg("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bo=new A.a2(B.jN,[B.i2,B.hY,B.i1,B.i4,B.hZ,B.i3,B.i5,B.i_,B.hW,B.hX,B.hU,B.hV,B.i0],A.Y("a2<h,bg>"))
B.jV={uBloom:0}
B.jr=new A.a2(B.jV,[0],t.I)
B.jW={uSceneDepth:0}
B.js=new A.a2(B.jW,[0],t.I)
B.jX={uScene:0}
B.jt=new A.a2(B.jX,[0],t.I)
B.O={}
B.d7=new A.a2(B.O,[],A.Y("a2<h,hm>"))
B.d6=new A.a2(B.O,[],t.D)
B.bp=new A.a2(B.O,[],A.Y("a2<h,u>"))
B.y=new A.a2(B.O,[],t.I)
B.n5=new A.a2(B.O,[],A.Y("a2<h,h?>"))
B.ju=new A.a2(B.O,[],A.Y("a2<@,@>"))
B.jC={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jv=new A.a2(B.jC,[0,1,2,3,4,5,6],t.I)
B.dc=new A.cD(0,"resume")
B.dd=new A.cD(1,"settings")
B.de=new A.cD(2,"controls")
B.df=new A.cD(3,"save")
B.dg=new A.cD(4,"help")
B.dh=new A.cD(5,"credits")
B.di=new A.cD(6,"back")
B.jw=new A.cR([B.dc,"pause.resume",B.dd,"pause.settings",B.de,"pause.controls",B.df,"pause.save",B.dg,"pause.help",B.dh,"pause.credits",B.di,"pause.back"],A.Y("cR<cD,h>"))
B.jP={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jx=new A.a2(B.jP,[0,1,2,3],t.I)
B.k1={uTex:0}
B.jy=new A.a2(B.k1,[0],t.I)
B.bq=new A.cR([B.aI,1,B.bE,1.5,B.dy,1.5,B.bF,2,B.bG,2,B.a2,4],A.Y("cR<cj,u>"))
B.iU=s([],t.bA)
B.iV=s([],A.Y("r<bi>"))
B.br=new A.e0(B.iU,B.iV,null)
B.da=new A.ci(1,"settings")
B.k4=new A.ci(2,"visual")
B.k5=new A.ci(3,"graphics")
B.k6=new A.ci(4,"gameplay")
B.k7=new A.ci(5,"controls")
B.k8=new A.ci(6,"audio")
B.k9=new A.ci(7,"accessibility")
B.ka=new A.ci(8,"credits")
B.Y=new A.bi(1,"settings")
B.kb=new A.bi(2,"journal")
B.kc=new A.bi(3,"sleep")
B.kd=new A.bi(4,"help")
B.ke=new A.bi(5,"visitor")
B.kf=new A.bi(6,"ending")
B.dj=new A.e1(0,"opened")
B.dk=new A.e1(2,"backed")
B.dl=new A.e1(3,"resumed")
B.kg=new A.e1(4,"dismissed")
B.a0=new A.e1(5,"unchanged")
B.kh=new A.bw("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.ki=new A.bw("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.kj=new A.bw("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kk=new A.bw("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kl=new A.bw("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.km=new A.bw("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kn=new A.bw("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.ko=new A.bw("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kp=new A.bw("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kq=new A.kr(0,1,null)
B.ks=new A.ks(1,"high")
B.kr=new A.q9(!1,!0,!0,!0,!1,B.ks,35,256)
B.kt=new A.kw(1,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.bv=new A.eI(0,"safe")
B.P=new A.eI(1,"standard")
B.a1=new A.eI(2,"high")
B.a3=new A.aL(B.O,0,t.M)
B.ag=new A.e3(B.bv,B.a3)
B.jT={shadows:0}
B.lj=new A.aL(B.jT,1,t.M)
B.dn=new A.e3(B.P,B.lj)
B.jE={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lb=new A.aL(B.jE,5,t.M)
B.dp=new A.e3(B.a1,B.lb)
B.ku=new A.eI(4,"shipping")
B.jG={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lc=new A.aL(B.jG,7,t.M)
B.n6=new A.e3(B.ku,B.lc)
B.kw=new A.aW(0,1)
B.kx=new A.b0(0.35,0.52,0.88)
B.ky=new A.ay(0.46,0.25,0.2)
B.dq=new A.b0(0.22,0.45,0.92)
B.kz=new A.ay(0.48,0.4,0.34)
B.kA=new A.ay(0.31,0.25,0.23)
B.bw=new A.b0(0.75,0.52,0.42)
B.kB=new A.b0(0.4,0.65,0.95)
B.bx=new A.b0(0.88,0.96,1)
B.kC=new A.ay(0.37,0.33,0.31)
B.kD=new A.b0(0.62,0.48,0.45)
B.kE=new A.ay(0.34,0.32,0.29)
B.dr=new A.ay(0.38,0.25,0.19)
B.by=new A.b0(0.9,0.8,0.72)
B.aE=new A.b0(0.28,0.16,0.12)
B.kF=new A.ay(0.31,0.28,0.24)
B.aF=new A.b0(0.65,0.45,0.35)
B.kG=new A.ay(0.58,0.56,0.5)
B.ds=new A.b0(0.2,0.38,0.9)
B.kH=new A.ay(0.44,0.37,0.28)
B.kI=new A.ay(0.52,0.5,0.44)
B.kJ=new A.ay(0.24,0.25,0.27)
B.kK=new A.ay(0.28,0.27,0.25)
B.kL=new A.b0(0.35,0.28,0.25)
B.dt=new A.b0(0.52,0.32,0.38)
B.kM=new A.ay(0.42,0.4,0.38)
B.kN=new A.ay(0.18,0.2,0.21)
B.kO=new A.ay(0.2,0.12,0.1)
B.aG=new A.b0(0.35,0.2,0.15)
B.kP=new A.ay(0.12,0.15,0.2)
B.du=new A.eK(0,"constructed")
B.z=new A.eK(1,"ready")
B.bz=new A.eK(2,"lost")
B.dv=new A.eK(3,"disposed")
B.eO=new A.hu(1,"errorsOnly")
B.kQ=new A.i5(B.ag,384,216,1,0,512,32,4,1,B.eO)
B.bA=new A.eL(0,"constructed")
B.kR=new A.eL(1,"initializing")
B.bB=new A.eL(2,"ready")
B.dw=new A.eL(3,"contextLost")
B.i=new A.fL(0,"read")
B.k=new A.fL(1,"write")
B.J=new A.fL(2,"historyRead")
B.bC=new A.fM(0,"prepared")
B.kS=new A.fM(1,"committed")
B.kT=new A.fM(2,"rolledBack")
B.r=new A.i7(0,"rgba8")
B.kU=new A.aI("dofBlurH",B.r,192,108,1,0)
B.kV=new A.aI("dofBlurV",B.r,192,108,1,0)
B.kW=new A.aI("dofOutput",B.r,384,216,1,0)
B.dx=new A.i7(2,"depth24")
B.kX=new A.aI("shadowMap",B.dx,512,512,1,0)
B.kY=new A.aI("ssaoRaw",B.r,192,108,1,0)
B.kZ=new A.aI("ssaoBlurred",B.r,192,108,1,0)
B.l_=new A.aI("gradeOutput",B.r,384,216,1,0)
B.l0=new A.aI("vhsOutput",B.r,384,216,1,0)
B.l1=new A.aI("sceneDepth",B.dx,384,216,1,0)
B.l2=new A.aI("bloomBlurH",B.r,192,108,1,0)
B.l3=new A.aI("bloomBlurV",B.r,192,108,1,0)
B.l4=new A.aI("present",B.r,384,216,1,0)
B.bD=new A.aI("sceneColor",B.r,384,216,1,0)
B.l5=new A.aI("ps1Output",B.r,384,216,1,0)
B.l6=new A.eN(null,"save storage unavailable")
B.l7=new A.eN(null,"save could not be recovered")
B.l8=new A.eN(null,null)
B.jJ={WheelUp:0,WheelDown:1}
B.l9=new A.aL(B.jJ,2,t.M)
B.jQ={open:0,closed:1}
B.la=new A.aL(B.jQ,2,t.M)
B.jD={Escape:0}
B.dz=new A.aL(B.jD,1,t.M)
B.jB={open:0,closed:1,mixed:2}
B.ld=new A.aL(B.jB,3,t.M)
B.jO={front:0,"rear-service":1}
B.le=new A.aL(B.jO,2,t.M)
B.jR={overcast:0,rain:1}
B.lf=new A.aL(B.jR,2,t.M)
B.jM={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lg=new A.aL(B.jM,16,t.M)
B.jK={Escape:0,Tab:1,F11:2}
B.dA=new A.aL(B.jK,3,t.M)
B.jI={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lh=new A.aL(B.jI,5,t.M)
B.jF={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ah=new A.aL(B.jF,7,t.M)
B.jA={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.li=new A.aL(B.jA,9,t.M)
B.dD=new A.eP(2,"link")
B.lu=new A.ia(B.dD,"gl.createProgram() returned null")
B.dB=new A.eP(0,"vertex")
B.dC=new A.eP(1,"fragment")
B.dE=new A.eP(3,"validation")
B.lC=new A.ib(0,"full")
B.lD=new A.ib(2,"culled")
B.a6=new A.K(0,1,0)
B.bR=new A.K(0,-1,0)
B.lI=new A.bC(-1,B.a6,B.bR,B.cO,1,1,0.3,0.5)
B.cV=s([],t.n)
B.lJ=new A.kQ(!1,"","",B.cV,B.cV)
B.dJ=new A.e6(0,"resident")
B.dK=new A.e6(1,"pending")
B.dL=new A.e6(2,"missing")
B.dM=new A.e6(3,"evicted")
B.al=new A.K(0,0,0)
B.kv=new A.kC(0,0,0,1)
B.u=new A.kW(B.al,B.kv)
B.lL=A.cr("Gr")
B.lM=A.cr("Gs")
B.lN=A.cr("o1")
B.lO=A.cr("BD")
B.lP=A.cr("BR")
B.lQ=A.cr("BS")
B.lR=A.cr("BT")
B.lS=A.cr("ae")
B.lT=A.cr("H")
B.lU=A.cr("wl")
B.lV=A.cr("CI")
B.lW=A.cr("CJ")
B.lX=A.cr("ii")
B.e=new A.d0(0,"float1")
B.aL=new A.d0(1,"float2")
B.q=new A.d0(2,"float3")
B.lY=new A.d0(3,"float4")
B.v=new A.d0(4,"mat4")
B.dN=new A.d0(5,"mat4Array")
B.bP=new A.y(B.e,0)
B.dO=new A.y(B.e,1)
B.S=new A.d0(6,"sampler")
B.A=new A.y(B.S,0)
B.ak=new A.y(B.S,1)
B.dP=new A.y(B.S,2)
B.lZ=new A.y(B.S,3)
B.m_=new A.y(B.S,4)
B.m0=new A.y(B.S,5)
B.m1=new A.y(B.S,6)
B.m2=new A.rG(!1)
B.m3=new A.K(0,0,1)
B.m4=new A.K(1,0,0)
B.m5=new A.K(1/0,1/0,1/0)
B.m6=new A.K(-1/0,-1/0,-1/0)
B.dR=new A.d2(6,"tangent4")
B.mi=new A.e9(0,"visitorAnswered")
B.dS=new A.e9(1,"visitorIgnored")
B.mj=new A.e9(2,"entryVerified")
B.mk=new A.e9(3,"entryContradicted")
B.ml=new A.e9(4,"exposureAccepted")
B.mn=new A.d3(1,"malformedDay")
B.mo=new A.d3(2,"malformedTier")
B.dT=new A.d3(3,"missingTierLines")
B.a8=new A.d3(6,"invalidPhase")
B.mr=new A.bn(B.a8,"No reaction is due.")
B.mz=new A.ba(B.mr)
B.mw=new A.bn(B.a8,"The active visit cannot be chosen.")
B.mA=new A.ba(B.mw)
B.ms=new A.bn(B.a8,"The active visit has no line to advance.")
B.mB=new A.ba(B.ms)
B.mq=new A.d3(5,"noActiveVisit")
B.mt=new A.bn(B.mq,"There is no active visit.")
B.dU=new A.ba(B.mt)
B.mv=new A.bn(B.a8,"A visit is already active.")
B.mC=new A.ba(B.mv)
B.mp=new A.d3(4,"noArrival")
B.my=new A.bn(B.mp,"The authored arrival is missing.")
B.mD=new A.ba(B.my)
B.mu=new A.bn(B.a8,"That answer is not offered.")
B.mE=new A.ba(B.mu)
B.mm=new A.d3(0,"missingCorpus")
B.mx=new A.bn(B.mm,"The authored visitor corpus is empty.")
B.mF=new A.ba(B.mx)
B.dV=new A.eW(1,"exact")
B.bU=new A.eW(2,"partial")
B.aN=new A.eW(3,"contradiction")
B.mG=new A.eW(0,"skipped")
B.mH=new A.eV(B.mG,B.a3)
B.mI=new A.eV(B.bU,B.a3)
B.mJ=new A.ip(B.X,!1)
B.mK=new A.ip(B.X,!0)
B.dW=new A.ir(0,"horizontal")
B.mL=new A.ir(1,"vertical")
B.dX=new A.it(0,"horizontal")
B.mM=new A.it(1,"vertical")
B.aO=new A.fY(0,"empty")
B.n_=new A.fY(1,"cpuReady")
B.aP=new A.fY(4,"released")})();(function staticFields(){$.tn=null
$.c8=A.c([],A.Y("r<H>"))
$.y9=null
$.qd=0
$.qe=A.EN()
$.xB=null
$.xA=null
$.A3=null
$.zU=null
$.Ab=null
$.vb=null
$.vi=null
$.xc=null
$.tD=A.c([],A.Y("r<C<H>?>"))
$.h9=null
$.j7=null
$.j8=null
$.wN=!1
$.am=B.w
$.yr=""
$.ys=null
$.yn=null
$.pV=null
$.yZ=A.ab()
$.f4=A.ab()
$.aR=null
$.tO=A.ab()
$.zn=null
$.z=A.ab()
$.cI=A.ab()
$.ac=A.ab()
$.U=A.ab()
$.bG=A.ab()
$.T=A.ab()
$.wx=A.ab()
$.wI=null
$.bs=null
$.wA=!1
$.wV=!1
$.j4=B.aR
$.ej=B.ap
$.v_=!1
$.x4=!1
$.zp=null
$.mb=null
$.m6=null
$.zb=0
$.mg=!1
$.zo=!1
$.wO=0
$.ek=0
$.wC="booting"
$.cq=0
$.f7=0
$.as="hall"
$.j1=A.ab()
$.h4=A.ab()
$.c7=A.ab()
$.zu=null
$.wW=0
$.x_=1.65
$.el=null
$.bd=null
$.jc=!1
$.cp=A.ab()
$.h5=A.ab()
$.j0=A.ab()
$.m3=A.ab()
$.z0=A.ab()
$.z_=A.ab()
$.az=A.ab()
$.m4=A.ab()
$.j_=A.ab()
$.m2=A.ab()
$.j2=A.ab()
$.j3=A.ab()
$.f3=A.ab()
$.ei=A.ab()
$.h3=A.ab()
$.iZ=A.ab()
$.iX=A.ab()
$.iY=A.ab()
$.aF=A.ab()
$.m1=A.ab()
$.bc=A.ab()
$.v0=A.a_(t.S)
$.d7=A.c([],t.s)
$.wH=null
$.zL=!1
$.z3=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Gu","Ak",()=>A.A1("_$dart_dartClosure"))
s($,"Gt","hh",()=>A.A1("_$dart_dartClosure_dartJSInterop"))
s($,"Hb","AH",()=>A.c([new J.k6()],A.Y("r<i8>")))
s($,"GF","Al",()=>A.dy(A.rC({
toString:function(){return"$receiver$"}})))
s($,"GG","Am",()=>A.dy(A.rC({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"GH","An",()=>A.dy(A.rC(null)))
s($,"GI","Ao",()=>A.dy(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GL","Ar",()=>A.dy(A.rC(void 0)))
s($,"GM","As",()=>A.dy(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GK","Aq",()=>A.dy(A.yo(null)))
s($,"GJ","Ap",()=>A.dy(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"GO","Au",()=>A.dy(A.yo(void 0)))
s($,"GN","At",()=>A.dy(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"GQ","xn",()=>A.D5())
s($,"GU","Az",()=>A.C8(4096))
s($,"GS","Ax",()=>new A.tL().$0())
s($,"GT","Ay",()=>new A.tK().$0())
s($,"GR","Aw",()=>A.C7(A.a0(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"H4","hi",()=>A.mn(B.lT))
s($,"GD","xm",()=>{A.Cm()
return $.qd})
s($,"Gq","Aj",()=>B.bD.fO())
s($,"Gz","xl",()=>A.kp(A.c([255,255,255,255],t.t)))
s($,"Gw","xi",()=>A.kp(A.c([128,128,255,255],t.t)))
s($,"Gv","xh",()=>A.kp(A.c([0,0,0,255],t.t)))
s($,"Gx","xj",()=>A.kp(A.c([255,255,0,255],t.t)))
s($,"Gy","xk",()=>A.kp(A.c([255,255,255,255],t.t)))
s($,"Hg","AL",()=>A.ik(0,1,0))
s($,"GP","Av",()=>A.D2(A.a_(t.N),0,0,A.ik(0,0,0)))
s($,"Hd","AI",()=>A.ye("^[a-z0-9][a-z0-9._-]*$"))
s($,"Hj","fc",()=>{var q=$.yn
if(q==null){A.v8()
A.v8()
A.v8()
A.v8()
q=$.yn=new A.rr()}return q})
s($,"GA","vX",()=>A.w3(B.b_,B.cs,!0,B.b0,B.cu,B.cx,B.cy,B.cA,!0,B.cC))
s($,"H_","AA",()=>new A.n9())
r($,"zP","d9",()=>A.wi(null,null))
r($,"j6","jf",()=>A.fA(null,null))
r($,"wG","fb",()=>A.fs(null,null,!1,1,!1,!1,2,1))
r($,"wJ","mo",()=>$.vX())
s($,"H5","AD",()=>new A.oG())
s($,"H6","AE",()=>new A.oQ())
s($,"H7","vZ",()=>new A.p9(A.n(t.N,t.S)))
s($,"H1","AB",()=>A.e8().gb0().h(0,"debugPause")==="1")
s($,"GZ","je",()=>A.e8().gb0().h(0,"automation")==="1")
s($,"GW","vY",()=>A.F2())
s($,"GV","xo",()=>$.vY()!=null)
s($,"GX","xp",()=>$.je()?A.e8().gb0().h(0,"captureMantleId"):null)
s($,"GY","xq",()=>A.e8().gb0().h(0,"captureMantleLit")==="1")
r($,"wZ","ep",()=>A.ik(0,0,0))
r($,"wT","AG",()=>A.ik(0,0,0))
r($,"x5","w_",()=>A.ik(0,0,0))
s($,"H0","xr",()=>A.F3())
s($,"H9","mp",()=>new A.o2(A.ik(0,0,0)))
s($,"H8","AF",()=>new A.pz(new A.nI()))
s($,"H2","cK",()=>new A.ok(A.c([],t.s)))
s($,"Hc","hk",()=>{var q=new A.rf(B.aK)
q.f=A.Y("C<e5>").a(A.c([A.a7(B.R,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a7(B.R,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a7(B.R,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a7(B.R,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a7(B.R,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a7(B.a5,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a7(B.a5,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a7(B.a5,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a7(B.a5,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a7(B.a5,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a7(B.aj,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a7(B.aj,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a7(B.aj,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a7(B.aj,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a7(B.n,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a7(B.n,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a7(B.n,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a7(B.n,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a7(B.n,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a7(B.n,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a7(B.n,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a7(B.n,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a7(B.n,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a7(B.n,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a7(B.n,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a7(B.n,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a7(B.n,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a7(B.n,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a7(B.n,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a7(B.n,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a7(B.n,!0,0.01,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a7(B.n,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a7(B.n,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a7(B.n,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a7(B.n,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a7(B.R,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.Y("r<e5>")))
return q})
s($,"Hf","AK",()=>new A.re(A.n(t.N,t.z)))
s($,"He","AJ",()=>new A.qg(A.Co(520588),B.b6))
s($,"H3","AC",()=>new A.oC())
s($,"Ha","hj",()=>new A.pZ(B.br))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fH,ArrayBuffer:A.fG,ArrayBufferView:A.hW,DataView:A.ki,Float32Array:A.hT,Float64Array:A.kj,Int16Array:A.kk,Int32Array:A.kl,Int8Array:A.km,Uint16Array:A.kn,Uint32Array:A.ko,Uint8ClampedArray:A.eF,CanvasPixelArray:A.eF,Uint8Array:A.hX})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b6.$nativeSuperclassTag="ArrayBufferView"
A.iB.$nativeSuperclassTag="ArrayBufferView"
A.iC.$nativeSuperclassTag="ArrayBufferView"
A.hU.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.iE.$nativeSuperclassTag="ArrayBufferView"
A.hV.$nativeSuperclassTag="ArrayBufferView"})()
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
