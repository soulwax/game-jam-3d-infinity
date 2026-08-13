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
if(a[b]!==s){A.Gx(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xa(b)
return new s(c,this)}:function(){if(s===null)s=A.xa(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xa(a).prototype
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
xg(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xc(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xe==null){A.Gb()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.ys("Return interceptor for "+A.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tp
if(o==null)o=$.tp=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Gh(a)
if(p!=null)return p
if(typeof a=="function")return B.i6
s=Object.getPrototypeOf(a)
if(s==null)return B.dm
if(s===Object.prototype)return B.dm
if(typeof q=="function"){o=$.tp
if(o==null)o=$.tp=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bQ,enumerable:false,writable:true,configurable:true})
return B.bQ}return B.bQ},
xX(a,b){if(a<0||a>4294967295)throw A.c(A.aY(a,0,4294967295,"length",null))
return J.xZ(new Array(a),b)},
xY(a,b){if(a<0)throw A.c(A.x("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("u<0>"))},
xW(a,b){if(a<0)throw A.c(A.x("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("u<0>"))},
xZ(a,b){var s=A.d(a,b.i("u<0>"))
s.$flags=1
return s},
C0(a,b){var s=t.hO
return J.xx(s.a(a),s.a(b))},
y0(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
C1(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.y0(r))break;++b}return b},
C2(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.y0(q))break}return b},
el(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hK.prototype
return J.k9.prototype}if(typeof a=="string")return J.dX.prototype
if(a==null)return J.hL.prototype
if(typeof a=="boolean")return J.k8.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dY.prototype
if(typeof a=="symbol")return J.hP.prototype
if(typeof a=="bigint")return J.hN.prototype
return a}if(a instanceof A.I)return a
return J.xc(a)},
aC(a){if(typeof a=="string")return J.dX.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dY.prototype
if(typeof a=="symbol")return J.hP.prototype
if(typeof a=="bigint")return J.hN.prototype
return a}if(a instanceof A.I)return a
return J.xc(a)},
c9(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dY.prototype
if(typeof a=="symbol")return J.hP.prototype
if(typeof a=="bigint")return J.hN.prototype
return a}if(a instanceof A.I)return a
return J.xc(a)},
A3(a){if(typeof a=="number")return J.fB.prototype
if(typeof a=="string")return J.dX.prototype
if(a==null)return a
if(!(a instanceof A.I))return J.eQ.prototype
return a},
A4(a){if(typeof a=="string")return J.dX.prototype
if(a==null)return a
if(!(a instanceof A.I))return J.eQ.prototype
return a},
xv(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.A3(a).ai(a,b)},
ae(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.el(a).a5(a,b)},
aS(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).h(a,b)},
bt(a,b,c){return J.c9(a).k(a,b,c)},
hn(a,b){return J.c9(a).l(a,b)},
AQ(a,b){return J.A4(a).fn(a,b)},
xw(a,b){return J.c9(a).M(a,b)},
AR(a,b){return J.c9(a).cA(a,b)},
xx(a,b){return J.A3(a).F(a,b)},
xy(a,b){return J.aC(a).q(a,b)},
ms(a,b){return J.c9(a).a1(a,b)},
AS(a,b){return J.c9(a).a8(a,b)},
xz(a){return J.c9(a).gR(a)},
az(a){return J.el(a).gN(a)},
mt(a){return J.aC(a).gP(a)},
AT(a){return J.aC(a).gX(a)},
S(a){return J.c9(a).gu(a)},
cL(a){return J.aC(a).gt(a)},
fe(a){return J.el(a).ga4(a)},
xA(a,b){return J.c9(a).Z(a,b)},
ff(a,b,c){return J.c9(a).cb(a,b,c)},
AU(a,b){return J.aC(a).st(a,b)},
AV(a,b){return J.c9(a).T(a,b)},
AW(a,b){return J.A4(a).b1(a,b)},
db(a){return J.el(a).p(a)},
AX(a,b){return J.c9(a).dV(a,b)},
k6:function k6(){},
k8:function k8(){},
hL:function hL(){},
hO:function hO(){},
dZ:function dZ(){},
ku:function ku(){},
eQ:function eQ(){},
dY:function dY(){},
hN:function hN(){},
hP:function hP(){},
u:function u(a){this.$ti=a},
k7:function k7(){},
pe:function pe(a){this.$ti=a},
eo:function eo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fB:function fB(){},
hK:function hK(){},
k9:function k9(){},
dX:function dX(){}},A={w6:function w6(){},
v9(){return $},
Ba(a,b,c){if(t.he.b(a))return new A.iw(a,b.i("@<0>").K(c).i("iw<1,2>"))
return new A.er(a,b.i("@<0>").K(c).i("er<1,2>"))},
y4(a){return new A.fC("Field '"+a+"' has been assigned during initialization.")},
a5(a){return new A.fC("Field '"+a+"' has not been initialized.")},
C4(a){return new A.fC("Field '"+a+"' has already been initialized.")},
ve(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ij(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fa(a,b,c){return a},
xf(a){var s,r
for(s=$.c7.length,r=0;r<s;++r)if(a===$.c7[r])return!0
return!1},
kU(a,b,c,d){A.kE(b,"start")
if(c!=null){A.kE(c,"end")
if(b>c)A.j(A.aY(b,0,c,"start",null))}return new A.ii(a,b,c,d.i("ii<0>"))},
kg(a,b,c,d){if(t.he.b(a))return new A.dg(a,b,c.i("@<0>").K(d).i("dg<1,2>"))
return new A.cA(a,b,c.i("@<0>").K(d).i("cA<1,2>"))},
cy(){return new A.fQ("No element")},
xV(){return new A.fQ("Too many elements")},
kP(a,b,c,d,e){if(c-b<=32)A.CG(a,b,c,d,e)
else A.CF(a,b,c,d,e)},
CG(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aC(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aL()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
CF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.a_(a4+a5,2),f=g-j,e=g+j,d=J.aC(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
p=J.ae(a6.$2(b,a0),0)
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
A.kP(a3,a4,r-2,a6,a7)
A.kP(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.ae(a6.$2(d.h(a3,r),b),0))++r
while(J.ae(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.kP(a3,r,q,a6,a7)}else A.kP(a3,r,q,a6,a7)},
e9:function e9(){},
hr:function hr(a,b){this.a=a
this.$ti=b},
er:function er(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b){this.a=a
this.$ti=b},
iu:function iu(){},
t8:function t8(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.$ti=b},
fC:function fC(a){this.a=a},
dQ:function dQ(a){this.a=a},
qG:function qG(){},
Q:function Q(){},
a2:function a2(){},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dg:function dg(a,b,c){this.a=a
this.b=b
this.$ti=c},
hU:function hU(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hz:function hz(a){this.$ti=a},
dC:function dC(a,b){this.a=a
this.$ti=b},
iq:function iq(a,b){this.a=a
this.$ti=b},
at:function at(){},
d1:function d1(){},
fS:function fS(){},
eL:function eL(a,b){this.a=a
this.$ti=b},
iY:function iY(){},
b4(a,b,c){var s,r,q,p,o,n,m,l=A.ap(a.ga2(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.ap(a.gaB(),!0,c)
m=new A.a3(q,n,b.i("@<0>").K(c).i("a3<1,2>"))
m.$keys=l
return m}return new A.ht(A.aM(a,b,c),b.i("@<0>").K(c).i("ht<1,2>"))},
Bg(){throw A.c(A.b8("Cannot modify unmodifiable Map"))},
Bh(){throw A.c(A.b8("Cannot modify constant Set"))},
Am(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Gg(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.db(a)
return s},
i5(a){var s,r=$.yc
if(r==null)r=$.yc=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ds(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eF(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bg(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kA(a){var s,r,q,p
if(a instanceof A.I)return A.bI(A.bP(a),null)
s=J.el(a)
if(s===B.i5||s===B.i7||t.qF.b(a)){r=B.c8(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bI(A.bP(a),null)},
yd(a){var s,r,q
if(a==null||typeof a=="number"||A.bH(a))return J.db(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dP)return a.p(0)
if(a instanceof A.bq)return a.ff(!0)
s=$.AL()
for(r=0;r<1;++r){q=s[r].mB(a)
if(q!=null)return q}return"Instance of '"+A.kA(a)+"'"},
Ch(){return Date.now()},
Cq(){var s,r
if($.qf!==0)return
$.qf=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qf=1e6
$.qg=new A.qe(r)},
Cg(){if(!!self.location)return self.location.href
return null},
Cr(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aw(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.bT(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aY(a,0,1114111,null,null))},
fJ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Cp(a){var s=A.fJ(a).getUTCFullYear()+0
return s},
Cn(a){var s=A.fJ(a).getUTCMonth()+1
return s},
Cj(a){var s=A.fJ(a).getUTCDate()+0
return s},
Ck(a){var s=A.fJ(a).getUTCHours()+0
return s},
Cm(a){var s=A.fJ(a).getUTCMinutes()+0
return s},
Co(a){var s=A.fJ(a).getUTCSeconds()+0
return s},
Cl(a){var s=A.fJ(a).getUTCMilliseconds()+0
return s},
Ci(a){var s=a.$thrownJsError
if(s==null)return null
return A.cJ(s)},
ye(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
vf(a){throw A.c(A.x9(a))},
e(a,b){if(a==null)J.cL(a)
throw A.c(A.vb(a,b))},
vb(a,b){var s,r="index"
if(!A.aK(b))return new A.ct(!0,b,r,null)
s=A.f(J.cL(a))
if(b<0||b>=s)return A.p4(b,s,a,r)
return A.yg(b,r)},
G3(a,b,c){if(a>c)return A.aY(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aY(b,a,c,"end",null)
return new A.ct(!0,b,"end",null)},
x9(a){return new A.ct(!0,a,null,null)},
c(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.dy()
b.dartException=a
s=A.GA
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
GA(){return J.db(this.dartException)},
j(a,b){throw A.aD(a,b==null?new Error():b)},
bR(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.Ek(a,b,c),s)},
Ek(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.il("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.c(A.as(a))},
dz(a){var s,r,q,p,o,n
a=A.Ag(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rE(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yr(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
w7(a,b){var s=b==null,r=s?null:b.method
return new A.ka(a,r,s?null:b.receiver)},
ao(a){var s
if(a==null)return new A.pT(a)
if(a instanceof A.hA){s=a.a
return A.em(a,s==null?A.f5(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.em(a,a.dartException)
return A.FB(a)},
em(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
FB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.bT(r,16)&8191)===10)switch(q){case 438:return A.em(a,A.w7(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.em(a,new A.i0())}}if(a instanceof TypeError){p=$.Ap()
o=$.Aq()
n=$.Ar()
m=$.As()
l=$.Av()
k=$.Aw()
j=$.Au()
$.At()
i=$.Ay()
h=$.Ax()
g=p.aY(s)
if(g!=null)return A.em(a,A.w7(A.r(s),g))
else{g=o.aY(s)
if(g!=null){g.method="call"
return A.em(a,A.w7(A.r(s),g))}else if(n.aY(s)!=null||m.aY(s)!=null||l.aY(s)!=null||k.aY(s)!=null||j.aY(s)!=null||m.aY(s)!=null||i.aY(s)!=null||h.aY(s)!=null){A.r(s)
return A.em(a,new A.i0())}}return A.em(a,new A.l_(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ie()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.em(a,new A.ct(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ie()
return a},
cJ(a){var s
if(a instanceof A.hA)return a.b
if(a==null)return new A.iM(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iM(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mp(a){if(a==null)return J.az(a)
if(typeof a=="object")return A.i5(a)
return J.az(a)},
FY(a){if(typeof a=="number")return B.c.gN(a)
if(a instanceof A.lY)return A.i5(a)
if(a instanceof A.bq)return a.gN(a)
return A.mp(a)},
A1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
G8(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
EK(a,b,c,d,e,f){t.BO.a(a)
switch(A.f(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.ta("Unsupported number of arguments for wrapped closure"))},
hg(a,b){var s=a.$identity
if(!!s)return s
s=A.FZ(a,b)
a.$identity=s
return s},
FZ(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.EK)},
Bf(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kT().constructor.prototype):Object.create(new A.fk(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xG(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Bb(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xG(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Bb(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.B6)}throw A.c("Error in functionType of tearoff")},
Bc(a,b,c,d){var s=A.xF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xG(a,b,c,d){if(c)return A.Be(a,b,d)
return A.Bc(b.length,d,a,b)},
Bd(a,b,c,d){var s=A.xF,r=A.B7
switch(b?-1:a){case 0:throw A.c(new A.kK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Be(a,b,c){var s,r
if($.xD==null)$.xD=A.xC("interceptor")
if($.xE==null)$.xE=A.xC("receiver")
s=b.length
r=A.Bd(s,c,a,b)
return r},
xa(a){return A.Bf(a)},
B6(a,b){return A.iQ(v.typeUniverse,A.bP(a.a),b)},
xF(a){return a.a},
B7(a){return a.b},
xC(a){var s,r,q,p=new A.fk("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.x("Field name "+a+" not found.",null))},
A5(a){return v.getIsolateTag(a)},
Ak(){return v.G},
Hs(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Gh(a){var s,r,q,p,o,n=A.r($.A7.$1(a)),m=$.vc[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vj[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aA($.zY.$2(a,n))
if(q!=null){m=$.vc[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vj[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vO(s)
$.vc[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vj[n]=s
return s}if(p==="-"){o=A.vO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Ae(a,s)
if(p==="*")throw A.c(A.ys(n))
if(v.leafTags[n]===true){o=A.vO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Ae(a,s)},
Ae(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xg(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vO(a){return J.xg(a,!1,null,!!a.$ibU)},
Gj(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vO(s)
else return J.xg(s,c,null,null)},
Gb(){if(!0===$.xe)return
$.xe=!0
A.Gc()},
Gc(){var s,r,q,p,o,n,m,l
$.vc=Object.create(null)
$.vj=Object.create(null)
A.Ga()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Af.$1(o)
if(n!=null){m=A.Gj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Ga(){var s,r,q,p,o,n,m=B.en()
m=A.hf(B.eo,A.hf(B.ep,A.hf(B.c9,A.hf(B.c9,A.hf(B.eq,A.hf(B.er,A.hf(B.es(B.c8),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.A7=new A.vg(p)
$.zY=new A.vh(o)
$.Af=new A.vi(n)},
hf(a,b){return a(b)||b},
Dm(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.ae(r,b[s]))return!1}return!0},
G0(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
y1(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.a4("Illegal RegExp pattern ("+String(o)+")",a,null))},
Gv(a,b,c){var s=a.indexOf(b,c)
return s>=0},
G6(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ag(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xi(a,b,c){var s=A.Gw(a,b,c)
return s},
Gw(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ag(b),"g"),A.G6(c))},
aV:function aV(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
ht:function ht(a,b){this.a=a
this.$ti=b},
fr:function fr(){},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c){this.a=a
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
hu:function hu(){},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
qe:function qe(a){this.a=a},
ia:function ia(){},
rD:function rD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(){},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
l_:function l_(a){this.a=a},
pT:function pT(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a
this.b=null},
dP:function dP(){},
jw:function jw(){},
jx:function jx(){},
kW:function kW(){},
kT:function kT(){},
fk:function fk(a,b){this.a=a
this.b=b},
kK:function kK(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pn:function pn(a){this.a=a},
pz:function pz(a,b){var _=this
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
au:function au(a,b){this.a=a
this.$ti=b},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
K:function K(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hQ:function hQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vg:function vg(a){this.a=a},
vh:function vh(a){this.a=a},
vi:function vi(a){this.a=a},
bq:function bq(){},
ed:function ed(){},
ee:function ee(){},
fW:function fW(){},
hM:function hM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lD:function lD(a){this.b=a},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ih:function ih(a,b){this.a=a
this.c=b},
lU:function lU(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Gx(a){throw A.aD(A.y4(a),new Error())},
q(){throw A.aD(A.a5(""),new Error())},
aX(){throw A.aD(A.C4(""),new Error())},
Al(){throw A.aD(A.y4(""),new Error())},
ab(){var s=new A.t9()
return s.b=s},
t9:function t9(){this.b=null},
a1(a){return a},
Cb(a){return new Int8Array(a)},
Cc(a){return new Uint8Array(a)},
kq(a){return new Uint8Array(A.a1(a))},
dG(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.vb(b,a))},
E8(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.G3(a,b,c))
return b},
fH:function fH(){},
fG:function fG(){},
hZ:function hZ(){},
kj:function kj(){},
b5:function b5(){},
hX:function hX(){},
hY:function hY(){},
hW:function hW(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
eD:function eD(){},
i_:function i_(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
wi(a,b){var s=b.c
return s==null?b.c=A.iO(a,"bT",[b.x]):s},
yk(a){var s=a.w
if(s===6||s===7)return A.yk(a.x)
return s===11||s===12},
CA(a){return a.as},
Gk(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
Z(a){return A.tL(v.typeUniverse,a,!1)},
f9(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.f9(a1,s,a3,a4)
if(r===s)return a2
return A.yR(a1,r,!0)
case 7:s=a2.x
r=A.f9(a1,s,a3,a4)
if(r===s)return a2
return A.yQ(a1,r,!0)
case 8:q=a2.y
p=A.he(a1,q,a3,a4)
if(p===q)return a2
return A.iO(a1,a2.x,p)
case 9:o=a2.x
n=A.f9(a1,o,a3,a4)
m=a2.y
l=A.he(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wt(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.he(a1,j,a3,a4)
if(i===j)return a2
return A.yS(a1,k,i)
case 11:h=a2.x
g=A.f9(a1,h,a3,a4)
f=a2.y
e=A.Fx(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yP(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.he(a1,d,a3,a4)
o=a2.x
n=A.f9(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wu(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.jn("Attempted to substitute unexpected RTI kind "+a0))}},
he(a,b,c,d){var s,r,q,p,o=b.length,n=A.tP(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.f9(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Fy(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tP(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.f9(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Fx(a,b,c,d){var s,r=b.a,q=A.he(a,r,c,d),p=b.b,o=A.he(a,p,c,d),n=b.c,m=A.Fy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lw()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
xb(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.G9(s)
return a.$S()}return null},
Gd(a,b){var s
if(A.yk(b))if(a instanceof A.dP){s=A.xb(a)
if(s!=null)return s}return A.bP(a)},
bP(a){if(a instanceof A.I)return A.p(a)
if(Array.isArray(a))return A.E(a)
return A.wN(J.el(a))},
E(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
p(a){var s=a.$ti
return s!=null?s:A.wN(a)},
wN(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.EH(a,s)},
EH(a,b){var s=a instanceof A.dP?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Dw(v.typeUniverse,s.name)
b.$ccache=r
return r},
G9(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tL(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xd(a){return A.d9(A.p(a))},
x5(a){var s
if(a instanceof A.bq)return a.eK()
s=a instanceof A.dP?A.xb(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fe(a).a
if(Array.isArray(a))return A.E(a)
return A.bP(a)},
d9(a){var s=a.r
return s==null?a.r=new A.lY(a):s},
G7(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.e(q,0)
s=A.iQ(v.typeUniverse,A.x5(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.yT(v.typeUniverse,s,A.x5(q[r]))}return A.iQ(v.typeUniverse,s,a)},
cr(a){return A.d9(A.tL(v.typeUniverse,a,!1))},
EG(a){var s=this
s.b=A.Fr(s)
return s.b(a)},
Fr(a){var s,r,q,p,o
if(a===t.K)return A.EQ
if(A.fb(a))return A.EV
s=a.w
if(s===6)return A.Ey
if(s===1)return A.zv
if(s===7)return A.EL
r=A.Fq(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fb)){a.f="$i"+q
if(q==="D")return A.EO
if(a===t.m)return A.EN
return A.EU}}else if(s===10){p=A.G0(a.x,a.y)
o=p==null?A.zv:p
return o==null?A.f5(o):o}return A.Ew},
Fq(a){if(a.w===8){if(a===t.S)return A.aK
if(a===t.i||a===t.o)return A.EP
if(a===t.N)return A.ET
if(a===t.y)return A.bH}return null},
EF(a){var s=this,r=A.Ev
if(A.fb(s))r=A.E2
else if(s===t.K)r=A.f5
else if(A.hi(s)){r=A.Ex
if(s===t.lo)r=A.zd
else if(s===t.dR)r=A.aA
else if(s===t.k7)r=A.E1
else if(s===t.s7)r=A.wA
else if(s===t.u6)r=A.zc
else if(s===t.gt)r=A.F}else if(s===t.S)r=A.f
else if(s===t.N)r=A.r
else if(s===t.y)r=A.R
else if(s===t.o)r=A.ad
else if(s===t.i)r=A.br
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
Ew(a){var s=this
if(a==null)return A.hi(s)
return A.Aa(v.typeUniverse,A.Gd(a,s),s)},
Ey(a){if(a==null)return!0
return this.x.b(a)},
EU(a){var s,r=this
if(a==null)return A.hi(r)
s=r.f
if(a instanceof A.I)return!!a[s]
return!!J.el(a)[s]},
EO(a){var s,r=this
if(a==null)return A.hi(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.I)return!!a[s]
return!!J.el(a)[s]},
EN(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.I)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zu(a){if(typeof a=="object"){if(a instanceof A.I)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ev(a){var s=this
if(a==null){if(A.hi(s))return a}else if(s.b(a))return a
throw A.aD(A.zi(a,s),new Error())},
Ex(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.zi(a,s),new Error())},
zi(a,b){return new A.h0("TypeError: "+A.yH(a,A.bI(b,null)))},
A_(a,b,c,d){if(A.Aa(v.typeUniverse,a,b))return a
throw A.aD(A.Do("The type argument '"+A.bI(a,null)+"' is not a subtype of the type variable bound '"+A.bI(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yH(a,b){return A.jM(a)+": type '"+A.bI(A.x5(a),null)+"' is not a subtype of type '"+b+"'"},
Do(a){return new A.h0("TypeError: "+a)},
co(a,b){return new A.h0("TypeError: "+A.yH(a,b))},
EL(a){var s=this
return s.x.b(a)||A.wi(v.typeUniverse,s).b(a)},
EQ(a){return a!=null},
f5(a){if(a!=null)return a
throw A.aD(A.co(a,"Object"),new Error())},
EV(a){return!0},
E2(a){return a},
zv(a){return!1},
bH(a){return!0===a||!1===a},
R(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.co(a,"bool"),new Error())},
E1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.co(a,"bool?"),new Error())},
br(a){if(typeof a=="number")return a
throw A.aD(A.co(a,"double"),new Error())},
zc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.co(a,"double?"),new Error())},
aK(a){return typeof a=="number"&&Math.floor(a)===a},
f(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.co(a,"int"),new Error())},
zd(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.co(a,"int?"),new Error())},
EP(a){return typeof a=="number"},
ad(a){if(typeof a=="number")return a
throw A.aD(A.co(a,"num"),new Error())},
wA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.co(a,"num?"),new Error())},
ET(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.aD(A.co(a,"String"),new Error())},
aA(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.co(a,"String?"),new Error())},
b(a){if(A.zu(a))return a
throw A.aD(A.co(a,"JSObject"),new Error())},
F(a){if(a==null)return a
if(A.zu(a))return a
throw A.aD(A.co(a,"JSObject?"),new Error())},
zN(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bI(a[q],b)
return s},
Ff(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zN(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bI(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zm(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.d([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.e(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bI(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bI(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bI(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bI(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bI(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bI(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bI(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bI(a.x,b)+">"
if(l===8){p=A.FA(a.x)
o=a.y
return o.length>0?p+("<"+A.zN(o,b)+">"):p}if(l===10)return A.Ff(a,b)
if(l===11)return A.zm(a,b,null)
if(l===12)return A.zm(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
FA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Dx(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Dw(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tL(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iP(a,5,"#")
q=A.tP(s)
for(p=0;p<s;++p)q[p]=r
o=A.iO(a,b,q)
n[b]=o
return o}else return m},
Dv(a,b){return A.z0(a.tR,b)},
Du(a,b){return A.z0(a.eT,b)},
tL(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yM(A.yK(a,null,b,!1))
r.set(b,s)
return s},
iQ(a,b,c){var s,r,q=b.z
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
q=A.wt(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eg(a,b){b.a=A.EF
b.b=A.EG
return b},
iP(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cE(null,null)
s.w=b
s.as=c
r=A.eg(a,s)
a.eC.set(c,r)
return r},
yR(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Ds(a,b,r,c)
a.eC.set(r,s)
return s},
Ds(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fb(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hi(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cE(null,null)
q.w=6
q.x=b
q.as=c
return A.eg(a,q)},
yQ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Dq(a,b,r,c)
a.eC.set(r,s)
return s},
Dq(a,b,c,d){var s,r
if(d){s=b.w
if(A.fb(b)||b===t.K)return b
else if(s===1)return A.iO(a,"bT",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cE(null,null)
r.w=7
r.x=b
r.as=c
return A.eg(a,r)},
Dt(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=13
s.x=b
s.as=q
r=A.eg(a,s)
a.eC.set(q,r)
return r},
iN(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Dp(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iO(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cE(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eg(a,r)
a.eC.set(p,q)
return q},
wt(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cE(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eg(a,o)
a.eC.set(q,n)
return n},
yS(a,b,c){var s,r,q="+"+(b+"("+A.iN(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eg(a,s)
a.eC.set(q,r)
return r},
yP(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iN(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iN(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Dp(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cE(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eg(a,p)
a.eC.set(r,o)
return o},
wu(a,b,c,d){var s,r=b.as+("<"+A.iN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Dr(a,b,c,r,d)
a.eC.set(r,s)
return s},
Dr(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tP(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.f9(a,b,r,0)
m=A.he(a,c,r,0)
return A.wu(a,n,m,c!==m)}}l=new A.cE(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eg(a,l)},
yK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yM(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Dh(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yL(a,r,l,k,!1)
else if(q===46)r=A.yL(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f1(a.u,a.e,k.pop()))
break
case 94:k.push(A.Dt(a.u,k.pop()))
break
case 35:k.push(A.iP(a.u,5,"#"))
break
case 64:k.push(A.iP(a.u,2,"@"))
break
case 126:k.push(A.iP(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Dj(a,k)
break
case 38:A.Di(a,k)
break
case 63:p=a.u
k.push(A.yR(p,A.f1(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yQ(p,A.f1(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Dg(a,k)
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
A.Dl(a.u,a.e,o)
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
Dh(a,b,c,d){var s,r,q=b-48
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
n=A.Dx(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.CA(o)+'"')
d.push(A.iQ(s,o,n))}else d.push(p)
return m},
Dj(a,b){var s,r=a.u,q=A.yJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iO(r,p,q))
else{s=A.f1(r,a.e,p)
switch(s.w){case 11:b.push(A.wu(r,s,q,a.n))
break
default:b.push(A.wt(r,s,q))
break}}},
Dg(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
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
r=A.f1(p,a.e,o)
q=new A.lw()
q.a=s
q.b=n
q.c=m
b.push(A.yP(p,r,q))
return
case-4:b.push(A.yS(p,b.pop(),s))
return
default:throw A.c(A.jn("Unexpected state under `()`: "+A.y(o)))}},
Di(a,b){var s=b.pop()
if(0===s){b.push(A.iP(a.u,1,"0&"))
return}if(1===s){b.push(A.iP(a.u,4,"1&"))
return}throw A.c(A.jn("Unexpected extended operation "+A.y(s)))},
yJ(a,b){var s=b.splice(a.p)
A.yN(a.u,a.e,s)
a.p=b.pop()
return s},
f1(a,b,c){if(typeof c=="string")return A.iO(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Dk(a,b,c)}else return c},
yN(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f1(a,b,c[s])},
Dl(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f1(a,b,c[s])},
Dk(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.jn("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.jn("Bad index "+c+" for "+b.p(0)))},
Aa(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aQ(a,b,null,c,null)
r.set(c,s)}return s},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fb(d))return!0
s=b.w
if(s===4)return!0
if(A.fb(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aQ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aQ(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aQ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aQ(a,b.x,c,d,e))return!1
return A.aQ(a,A.wi(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.wi(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.zt(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zt(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.EM(a,b,c,d,e)}if(o&&q===10)return A.ER(a,b,c,d,e)
return!1},
zt(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
EM(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iQ(a,b,r[o])
return A.za(a,p,null,c,d.y,e)}return A.za(a,b.y,null,c,d.y,e)},
za(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
ER(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
hi(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fb(a))if(s!==6)r=s===7&&A.hi(a.x)
return r},
fb(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
z0(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tP(a){return a>0?new Array(a):v.typeUniverse.sEA},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lw:function lw(){this.c=this.b=this.a=null},
lY:function lY(a){this.a=a},
lu:function lu(){},
h0:function h0(a){this.a=a},
D9(){var s,r,q
if(self.scheduleImmediate!=null)return A.FO()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hg(new A.t4(s),1)).observe(r,{childList:true})
return new A.t3(s,r,q)}else if(self.setImmediate!=null)return A.FP()
return A.FQ()},
Da(a){self.scheduleImmediate(A.hg(new A.t5(t.O.a(a)),0))},
Db(a){self.setImmediate(A.hg(new A.t6(t.O.a(a)),0))},
Dc(a){A.wl(B.eX,t.O.a(a))},
wl(a,b){return A.Dn(a.a/1000|0,b)},
Dn(a,b){var s=new A.tJ()
s.i9(a,b)
return s},
c6(a){return new A.lk(new A.ax($.an,a.i("ax<0>")),a.i("lk<0>"))},
c5(a,b){a.$2(0,null)
b.b=!0
return b.a},
aB(a,b){A.E4(a,b)},
c4(a,b){b.dj(a)},
c3(a,b){b.dk(A.ao(a),A.cJ(a))},
E4(a,b){var s,r,q=new A.tW(b),p=new A.tX(b)
if(a instanceof A.ax)a.fd(q,p,t.z)
else{s=t.z
if(a instanceof A.ax)a.dT(q,p,s)
else{r=new A.ax($.an,t.hR)
r.a=8
r.c=a
r.fd(q,p,s)}}},
c8(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.an.h0(new A.v6(s),t.H,t.S,t.z)},
yO(a,b,c){return 0},
mK(a){var s
if(t.yt.b(a)){s=a.gbM()
if(s!=null)return s}return B.as},
xO(a){var s
a.a(null)
s=new A.ax($.an,a.i("ax<0>"))
s.cY(null)
return s},
BL(a,b,c){var s=new A.ax($.an,c.i("ax<0>"))
A.CL(a,new A.ob(b,s,c))
return s},
oc(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ax($.an,b.i("ax<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.oe(i,h,g,f)
try{for(n=J.S(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.dT(new A.od(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.co(A.d([],b.i("u<0>")))
return n}i.a=A.e_(n,null,!1,b.i("0?"))}catch(l){p=A.ao(l)
o=A.cJ(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wO(m,k)
m=new A.b1(m,k==null?A.mK(m):k)
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
wO(a,b){if($.an===B.z)return null
return null},
EI(a,b){if($.an!==B.z)A.wO(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbM()
if(b==null){A.ye(a,B.as)
b=B.as}}else b=B.as
else if(t.yt.b(a))A.ye(a,b)
return new A.b1(a,b)},
tf(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.CH()
b.cm(new A.b1(new A.ct(!0,n,null,"Cannot complete a future with itself"),s))
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
b.cn(o.a)
A.eX(b,p)
return}b.a^=2
A.mk(null,null,b.b,t.O.a(new A.tg(o,b)))},
eX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wZ(m.a,m.b)}return}q.a=b
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
A.wZ(j.a,j.b)
return}g=$.an
if(g!==h)$.an=h
else g=null
c=c.c
if((c&15)===8)new A.tk(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tj(q,j).$0()}else if((c&2)!==0)new A.ti(d,q).$0()
if(g!=null)$.an=g
c=q.c
if(c instanceof A.ax){p=q.a.$ti
p=p.i("bT<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cv(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.tf(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cv(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Fg(a,b){var s
if(t.nW.b(a))return b.h0(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.c(A.ah(a,"onError",u.c))},
F4(){var s,r
for(s=$.ha;s!=null;s=$.ha){$.ja=null
r=s.b
$.ha=r
if(r==null)$.j9=null
s.a.$0()}},
Fu(){$.wP=!0
try{A.F4()}finally{$.ja=null
$.wP=!1
if($.ha!=null)$.xp().$1(A.zZ())}},
zR(a){var s=new A.ll(a),r=$.j9
if(r==null){$.ha=$.j9=s
if(!$.wP)$.xp().$1(A.zZ())}else $.j9=r.b=s},
Fo(a){var s,r,q,p=$.ha
if(p==null){A.zR(a)
$.ja=$.j9
return}s=new A.ll(a)
r=$.ja
if(r==null){s.b=p
$.ha=$.ja=s}else{q=r.b
s.b=q
$.ja=r.b=s
if(q==null)$.j9=s}},
GP(a,b){A.fa(a,"stream",t.K)
return new A.lT(b.i("lT<0>"))},
CL(a,b){var s=$.an
if(s===B.z)return A.wl(a,t.O.a(b))
return A.wl(a,t.O.a(s.fq(b)))},
wZ(a,b){A.Fo(new A.uX(a,b))},
zM(a,b,c,d,e){var s,r=$.an
if(r===c)return d.$0()
$.an=c
s=r
try{r=d.$0()
return r}finally{$.an=s}},
Fm(a,b,c,d,e,f,g){var s,r=$.an
if(r===c)return d.$1(e)
$.an=c
s=r
try{r=d.$1(e)
return r}finally{$.an=s}},
Fl(a,b,c,d,e,f,g,h,i){var s,r=$.an
if(r===c)return d.$2(e,f)
$.an=c
s=r
try{r=d.$2(e,f)
return r}finally{$.an=s}},
mk(a,b,c,d){t.O.a(d)
if(B.z!==c){d=c.fq(d)
d=d}A.zR(d)},
t4:function t4(a){this.a=a},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a){this.a=a},
t6:function t6(a){this.a=a},
tJ:function tJ(){},
tK:function tK(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=!1
this.$ti=b},
tW:function tW(a){this.a=a},
tX:function tX(a){this.a=a},
v6:function v6(a){this.a=a},
cH:function cH(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cn:function cn(a,b){this.a=a
this.$ti=b},
b1:function b1(a,b){this.a=a
this.b=b},
ob:function ob(a,b,c){this.a=a
this.b=b
this.c=c},
oe:function oe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
od:function od(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lo:function lo(){},
is:function is(a,b){this.a=a
this.$ti=b},
eW:function eW(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ax:function ax(a,b){var _=this
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
ll:function ll(a){this.a=a
this.b=null},
lT:function lT(a){this.$ti=a},
iX:function iX(){},
lM:function lM(){},
tH:function tH(a,b){this.a=a
this.b=b},
uX:function uX(a,b){this.a=a
this.b=b},
yI(a,b){var s=a[b]
return s===a?null:s},
wr(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wq(){var s=Object.create(null)
A.wr(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
y6(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
N(a,b,c){return b.i("@<0>").K(c).i("w8<1,2>").a(A.A1(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
o(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
w9(a){return new A.cm(a.i("cm<0>"))},
a0(a){return new A.cm(a.i("cm<0>"))},
aN(a,b){return b.i("y7<0>").a(A.G8(a,new A.cm(b.i("cm<0>"))))},
ws(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fU(a,b,c){var s=new A.f0(a,b,c.i("f0<0>"))
s.c=a.e
return s},
bu(a,b){var s=J.S(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.y6(b,c)
a.ar(0,new A.pA(s,b,c))
return s},
fD(a,b,c){var s=A.y6(b,c)
s.I(0,a)
return s},
hS(a,b){var s,r=A.w9(b)
for(s=J.S(a);s.m();)r.l(0,b.a(s.gn()))
return r},
kf(a,b){var s=A.w9(b)
s.I(0,a)
return s},
C5(a,b){var s=t.hO
return J.xx(s.a(a),s.a(b))},
wa(a){var s,r
if(A.xf(a))return"{...}"
s=new A.bl("")
try{r={}
B.a.l($.c7,a)
s.a+="{"
r.a=!0
a.ar(0,new A.pD(r,s))
s.a+="}"}finally{if(0>=$.c7.length)return A.e($.c7,-1)
$.c7.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Dy(){throw A.c(A.b8("Cannot change an unmodifiable set"))},
ix:function ix(){},
to:function to(a){this.a=a},
iz:function iz(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eY:function eY(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b,c){var _=this
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
lC:function lC(a){this.a=a
this.c=this.b=null},
f0:function f0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
a6:function a6(){},
pC:function pC(a){this.a=a},
pD:function pD(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.$ti=b},
iB:function iB(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iR:function iR(){},
fE:function fE(){},
e6:function e6(a,b){this.a=a
this.$ti=b},
du:function du(){},
iL:function iL(){},
lZ:function lZ(){},
fT:function fT(a,b){this.a=a
this.$ti=b},
h1:function h1(){},
iS:function iS(){},
F8(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ao(r)
q=A.a4(String(s),null,null)
throw A.c(q)}q=A.ul(p)
return q},
ul(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lA(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ul(a[s])
return a},
DP(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.AD()
else s=new Uint8Array(o)
for(r=J.aC(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DO(a,b,c,d){var s=a?$.AC():$.AB()
if(s==null)return null
if(0===c&&d===b.length)return A.z_(s,b)
return A.z_(s,b.subarray(c,d))},
z_(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xB(a,b,c,d,e,f){if(B.d.O(f,4)!==0)throw A.c(A.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.a4("Invalid base64 padding, more than two '=' characters",a,b))},
y3(a,b,c){return new A.hR(a,b)},
Ej(a){return a.B()},
Dd(a,b){return new A.tr(a,[],A.G_())},
De(a,b,c){var s,r=new A.bl(""),q=A.Dd(r,b)
q.cN(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DQ(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lA:function lA(a,b){this.a=a
this.b=b
this.c=null},
tq:function tq(a){this.a=a},
lB:function lB(a){this.a=a},
tO:function tO(){},
tN:function tN(){},
jq:function jq(){},
nc:function nc(){},
es:function es(){},
jC:function jC(){},
jL:function jL(){},
hR:function hR(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(){},
pp:function pp(a){this.b=a},
po:function po(a){this.a=a},
ts:function ts(){},
tt:function tt(a,b){this.a=a
this.b=b},
tr:function tr(a,b,c){this.c=a
this.a=b
this.b=c},
l3:function l3(){},
rI:function rI(a){this.a=a},
tM:function tM(a){this.a=a
this.b=16
this.c=0},
A9(a){var s=A.ds(a,null)
if(s!=null)return s
throw A.c(A.a4(a,null,null))},
A0(a){var s=A.eF(a)
if(s!=null)return s
throw A.c(A.a4("Invalid double",a,null))},
BF(a,b){a=A.aD(a,new Error())
if(a==null)a=A.f5(a)
a.stack=b.p(0)
throw a},
e_(a,b,c,d){var s,r=c?J.xY(a,d):J.xX(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ap(a,b,c){var s,r=A.d([],c.i("u<0>"))
for(s=J.S(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.i("u<0>"))
s=A.d([],b.i("u<0>"))
for(r=J.S(a);r.m();)B.a.l(s,r.gn())
return s},
aj(a,b){var s=A.ap(a,!1,b)
s.$flags=3
return s},
yp(a,b,c){var s,r
A.kE(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aY(c,b,null,"end",null))
if(s===0)return""}r=A.CJ(a,b,c)
return r},
CJ(a,b,c){var s=a.length
if(b>=s)return""
return A.Cr(a,b,c==null||c>s?s:c)},
yh(a){return new A.hM(a,A.y1(a,!1,!0,!1,!1,""))},
wk(a,b,c){var s=J.S(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gn())
while(s.m())}else{a+=A.y(s.gn())
while(s.m())a=a+c+A.y(s.gn())}return a},
e7(){var s,r,q=A.Cg()
if(q==null)throw A.c(A.b8("'Uri.base' is not supported"))
s=$.yv
if(s!=null&&q===$.yu)return s
r=A.CR(q)
$.yv=r
$.yu=q
return r},
CH(){return A.cJ(new Error())},
Bl(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xI(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jE(a){if(a>=10)return""+a
return"0"+a},
BE(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.ah(b,"name","No enum value with that name"))},
jM(a){if(typeof a=="number"||A.bH(a)||a==null)return J.db(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yd(a)},
BG(a,b){A.fa(a,"error",t.K)
A.fa(b,"stackTrace",t.l)
A.BF(a,b)},
jn(a){return new A.jm(a)},
x(a,b){return new A.ct(!1,null,b,a)},
ah(a,b,c){return new A.ct(!0,a,b,c)},
yf(a){var s=null
return new A.fK(s,s,!1,s,s,a)},
yg(a,b){return new A.fK(null,null,!0,a,b,"Value not in range")},
aY(a,b,c,d,e){return new A.fK(b,c,!0,a,d,"Invalid value")},
kF(a,b,c){if(0>a||a>c)throw A.c(A.aY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aY(b,a,c,"end",null))
return b}return c},
kE(a,b){if(a<0)throw A.c(A.aY(a,0,null,b,null))
return a},
p4(a,b,c,d){return new A.k3(b,!0,a,d,"Index out of range")},
b8(a){return new A.il(a)},
ys(a){return new A.kZ(a)},
k(a){return new A.fQ(a)},
as(a){return new A.jz(a)},
a4(a,b,c){return new A.G(a,b,c)},
C_(a,b,c){var s,r
if(A.xf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.l($.c7,a)
try{A.EW(a,s)}finally{if(0>=$.c7.length)return A.e($.c7,-1)
$.c7.pop()}r=A.wk(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
w5(a,b,c){var s,r
if(A.xf(a))return b+"..."+c
s=new A.bl(b)
B.a.l($.c7,a)
try{r=s
r.a=A.wk(r.a,a,", ")}finally{if(0>=$.c7.length)return A.e($.c7,-1)
$.c7.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
EW(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.y(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.y(p)
r=A.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wb(a,b,c){var s=A.o(b,c)
s.jS(a)
return s},
cC(a,b,c,d,e,f){var s
if(B.f===c){s=J.az(a)
b=J.az(b)
return A.ij(A.aP(A.aP($.hk(),s),b))}if(B.f===d){s=J.az(a)
b=J.az(b)
c=J.az(c)
return A.ij(A.aP(A.aP(A.aP($.hk(),s),b),c))}if(B.f===e){s=J.az(a)
b=J.az(b)
c=J.az(c)
d=J.az(d)
return A.ij(A.aP(A.aP(A.aP(A.aP($.hk(),s),b),c),d))}if(B.f===f){s=J.az(a)
b=J.az(b)
c=J.az(c)
d=J.az(d)
e=J.az(e)
return A.ij(A.aP(A.aP(A.aP(A.aP(A.aP($.hk(),s),b),c),d),e))}s=J.az(a)
b=J.az(b)
c=J.az(c)
d=J.az(d)
e=J.az(e)
f=J.az(f)
f=A.ij(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.hk(),s),b),c),d),e),f))
return f},
Cd(a){var s,r,q=$.hk()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q=A.aP(q,J.az(a[r]))
return A.ij(q)},
eN(a,b){return new A.fT(A.kf(a,b),b.i("fT<0>"))},
CR(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yt(a4<a4?B.b.G(a5,0,a4):a5,5,a3).gh6()
else if(s===32)return A.yt(B.b.G(a5,5,a4),0,a3).gh6()}r=A.e_(8,0,!1,t.S)
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
if(!(i&&o+1===n)){if(!B.b.ac(a5,"\\",n))if(p>0)h=B.b.ac(a5,"\\",p-1)||B.b.ac(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ac(a5,"..",n)))h=m>n+2&&B.b.ac(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ac(a5,"file",0)){if(p<=0){if(!B.b.ac(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.G(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bI(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ac(a5,"http",0)){if(i&&o+3===n&&B.b.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bI(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ac(a5,"https",0)){if(i&&o+4===n&&B.b.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bI(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lQ(a4<a5.length?B.b.G(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DI(a5,0,q)
else{if(q===0)A.h2(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.DJ(a5,c,p-1):""
a=A.DE(a5,p,o,!1)
i=o+1
if(i<n){a0=A.ds(B.b.G(a5,i,n),a3)
d=A.DG(a0==null?A.j(A.a4("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.DF(a5,n,m,a3,j,a!=null)
a2=m<l?A.DH(a5,m+1,l,a3):a3
return A.Dz(j,b,a,d,a1,a2,l<a4?A.DD(a5,l+1,a4):a3)},
yx(a){var s=t.N
return B.a.bc(A.d(a.split("&"),t.s),A.o(s,s),new A.rH(B.cb),t.G)},
l2(a,b,c){throw A.c(A.a4("Illegal IPv4 address, "+a,b,c))},
CO(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l2("each part must be in the range 0..255",a,r)}A.l2("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l2(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bR(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l2(j,a,q)
p=l}A.l2("IPv4 address should contain exactly 4 parts",a,q)},
CP(a,b,c){var s
if(b===c)throw A.c(A.a4("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.CQ(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.yw(a,b,c)
return!0},
CQ(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.G(n,a,q)
r=q
break}return new A.G("Unexpected character",a,q-1)}if(r-1===b)return new A.G(n,a,r)
return new A.G("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.G("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.G("Invalid IPvFuture address character",a,r)}},
yw(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rG(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.e(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.e(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.e(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CO(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.bT(l,8)
if(!(o<16))return A.e(s,o)
s[o]=e;++o
if(!(o<16))return A.e(s,o)
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
B.d8.hu(s,a0,16,s,a)
B.d8.ld(s,a,a0,0)}}return s},
Dz(a,b,c,d,e,f,g){return new A.iT(a,b,c,d,e,f,g)},
yU(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h2(a,b,c){throw A.c(A.a4(c,a,b))},
DG(a,b){var s=A.yU(b)
if(a===s)return null
return a},
DE(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.h2(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.DB(a,q,r)
if(o<r){n=o+1
p=A.yZ(a,B.b.ac(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CP(a,q,o)
l=B.b.G(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.b.cE(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yZ(a,B.b.ac(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yw(a,b,o)
return"["+B.b.G(a,b,o)+p+"]"}}return A.DL(a,b,c)},
DB(a,b,c){var s=B.b.cE(a,"%",b)
return s>=b&&s<c?s:c},
yZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bl(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.ww(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bl("")
l=h.a+=B.b.G(a,q,r)
if(m)n=B.b.G(a,r,r+3)
else if(n==="%")A.h2(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bl("")
if(q<r){h.a+=B.b.G(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.G(a,q,r)
if(h==null){h=new A.bl("")
m=h}else m=h
m.a+=i
l=A.wv(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.G(a,b,c)
if(q<c){i=B.b.G(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.ww(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bl("")
k=B.b.G(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.G(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bl("")
if(q<r){p.a+=B.b.G(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h2(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.G(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bl("")
l=p}else l=p
l.a+=k
j=A.wv(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.G(a,b,c)
if(q<c){k=B.b.G(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
DI(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.yW(a.charCodeAt(b)))A.h2(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h2(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.G(a,b,c)
return A.DA(q?a.toLowerCase():a)},
DA(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
DJ(a,b,c){return A.iU(a,b,c,16,!1,!1)},
DF(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iU(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.V(q,"/"))q="/"+q
return A.DK(q,e,f)},
DK(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.V(a,"/")&&!B.b.V(a,"\\"))return A.DM(a,!s||c)
return A.DN(a)},
DH(a,b,c,d){return A.iU(a,b,c,256,!0,!1)},
DD(a,b,c){return A.iU(a,b,c,256,!0,!1)},
ww(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.ve(r)
o=A.ve(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aw(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.G(a,b,b+3).toUpperCase()
return null},
wv(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.e(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.d.jB(a,6*p)&63|q
if(!(o<r))return A.e(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.e(k,l)
if(!(m<r))return A.e(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.e(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.yp(s,0,null)},
iU(a,b,c,d,e,f){var s=A.yY(a,b,c,d,e,f)
return s==null?B.b.G(a,b,c):s},
yY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.ww(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h2(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wv(n)}if(o==null){o=new A.bl("")
k=o}else k=o
k.a=(k.a+=B.b.G(a,p,q))+l
if(typeof m!=="number")return A.vf(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.G(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
yX(a){if(B.b.V(a,"."))return!0
return B.b.bD(a,"/.")!==-1},
DN(a){var s,r,q,p,o,n,m
if(!A.yX(a))return a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.Z(s,"/")},
DM(a,b){var s,r,q,p,o,n
if(!A.yX(a))return!b?A.yV(a):a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gW(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.k(s,0,A.yV(s[0]))}return B.a.Z(s,"/")},
yV(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yW(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.G(a,0,s)+"%3A"+B.b.b1(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
DC(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.x("Invalid URL encoding",null))}}return r},
wx(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cb===d)return B.b.G(a,b,c)
else p=new A.dQ(B.b.G(a,b,c))
else{p=A.d([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.x("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.x("Truncated URI",null))
B.a.l(p,A.DC(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.m8.kp(p)},
yW(a){var s=a|32
return 97<=s&&s<=122},
yt(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.a4(k,a,r))}}if(q<0&&r>b)throw A.c(A.a4(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gW(j)
if(p!==44||r!==n+7||!B.b.ac(a,"base64",n+1))throw A.c(A.a4("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.el.lA(a,m,s)
else{l=A.yY(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bI(a,m,s,l)}return new A.rF(a,j,c)},
zQ(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a},
lt:function lt(){},
am:function am(){},
jm:function jm(a){this.a=a},
dy:function dy(){},
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
k3:function k3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
il:function il(a){this.a=a},
kZ:function kZ(a){this.a=a},
fQ:function fQ(a){this.a=a},
jz:function jz(a){this.a=a},
kr:function kr(){},
ie:function ie(){},
ta:function ta(a){this.a=a},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
I:function I(){},
lW:function lW(){},
rp:function rp(){this.b=this.a=0},
bl:function bl(a){this.a=a},
rH:function rH(a){this.a=a},
rG:function rG(a){this.a=a},
iT:function iT(a,b,c,d,e,f,g){var _=this
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
lQ:function lQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lp:function lp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pS:function pS(a){this.a=a},
zn(a){var s
if(typeof a=="function")throw A.c(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.E7,a)
s[$.hj()]=a
return s},
X(a){var s
if(typeof a=="function")throw A.c(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.tY,a)
s[$.hj()]=a
return s},
E7(a){return t.BO.a(a).$0()},
tY(a,b,c){t.BO.a(a)
if(A.f(c)>=1)return a.$1(b)
return a.$0()},
A6(a,b,c){return c.a(a[b])},
zo(a,b){return a[b]},
aL(a,b,c,d){return d.a(a[b].apply(a,c))},
bQ(a,b){var s=new A.ax($.an,b.i("ax<0>")),r=new A.is(s,b.i("is<0>"))
a.then(A.hg(new A.vP(r,b),1),A.hg(new A.vQ(r),1))
return s},
zy(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hh(a){if(A.zy(a))return a
return new A.va(new A.iz(t.BT)).$1(a)},
vP:function vP(a,b){this.a=a
this.b=b},
vQ:function vQ(a){this.a=a},
va:function va(a){this.a=a},
Cs(a){var s
if(a==null)s=B.aV
else{s=new A.ec()
s.bN(a)}return s},
lz:function lz(){},
ec:function ec(){this.b=this.a=0},
qj:function qj(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qk:function qk(){},
eH:function eH(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
nq:function nq(a,b){this.a=a
this.b=b
this.c=null},
fq:function fq(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nt:function nt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ns:function ns(){var _=this
_.c=_.b=_.a=null
_.d=0},
kx:function kx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
fn:function fn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jS:function jS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
o6:function o6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dW(a,b){return new A.k1(a,b)},
dt:function dt(){},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
Gr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.d([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iI(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.T(f,new A.vR())
s=A.d([],t.cv)
for(r=A.kU(f,0,A.fa(b,"count",t.S),t.mn),q=r.$ti,r=new A.aI(r,r.gt(0),q.i("aI<a2.E>")),q=q.i("a2.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a,b,c,d){var _=this
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
vR:function vR(){},
pF(a,b,c,d,e,f,g,h,i,j){return new A.eC(c,a,h,g,f,e,i,j,b,!0)},
wd(a,b){if(!isFinite(b)||b<0||b>1)throw A.c(A.x("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
jl:function jl(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c,d,e,f,g,h,i,j){var _=this
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
C7(a){A:{break A}return a},
d2:function d2(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(){},
rK:function rK(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pH:function pH(){},
pI:function pI(){},
pJ:function pJ(){},
i1(a){var s,r=t.N,q=A.aN(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.I(0,A.aN(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.I(0,A.aN(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.I(0,A.aN(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.I(0,A.aN(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pU(A.eN(q,r),s)},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(){},
fM:function fM(a,b){this.a=a
this.b=b},
kz:function kz(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fv:function fv(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
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
kV:function kV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
kH:function kH(a,b,c,d,e,f,g,h,i,j){var _=this
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
eK:function eK(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.d=c},
o8:function o8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
C6(){return new A.kh(new A.cX(new A.pG(),A.d([],t.Fy),A.d([],t.t),t.ja))},
kh:function kh(a){this.a=a},
pG:function pG(){},
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
case 3:s=A.j(A.b8("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Ed(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.W[r]
if(A.zT(q.a)===b)s+=q.c}return s},
C8(a){return new A.pK(a,new A.cX(new A.pL(),A.d([],t.EM),A.d([],t.t),t.wm),A.o(t.S,t.qt))},
ya(a){var s
A:{s=a.byteLength
break A}return s},
l0:function l0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pK:function pK(a,b,c){this.a=a
this.b=b
this.c=c},
pL:function pL(){},
pM:function pM(){},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(a){this.a=a},
rw:function rw(a,b){this.a=a
this.b=b},
rx:function rx(){},
CK(a){var s=new A.kX(a,new A.cX(new A.rA(),A.d([],t.f2),A.d([],t.t),t.qq),A.o(t.S,t._))
s.d=s.aT($.xn())
s.e=s.aT($.xk())
s.f=s.aT($.xl())
s.r=s.aT($.xj())
s.w=s.aT($.xm())
return s},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rA:function rA(){},
rC:function rC(){},
rB:function rB(){},
FR(a){var s,r,q,p,o=A.d([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.eB(p,A.d([p],r)))
continue}return o},
eB:function eB(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
o1:function o1(){},
o2:function o2(a){this.a=a},
o_:function o_(a){this.a=a},
o0:function o0(a){this.a=a},
jR:function jR(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b
this.c=0},
Df(){return new A.fV()},
o5:function o5(a){this.a=a
this.b=null},
fV:function fV(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wf(){return!0},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pY:function pY(){},
pZ:function pZ(){},
ce:function ce(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fL:function fL(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
hs:function hs(a){this.b=a},
kB:function kB(a,b){var _=this
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
ql:function ql(){},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qn:function qn(a,b){this.a=a
this.b=b},
qs:function qs(){},
qr:function qr(){},
qq:function qq(){},
qp:function qp(a){this.a=a},
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a,b){this.a=a
this.b=b},
Cx(a){return new A.i7(a,new A.cX(new A.qt(),A.d([],t.w_),A.d([],t.t),t.tc))},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b){this.a=a
this.b=b},
qt:function qt(){},
wJ(a,b){return A.Eo(a,b)},
Eo(a,b){var s=0,r=A.c6(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wJ=A.c8(function(c,a0){if(c===1)return A.c3(a0,r)
for(;;)switch(s){case 0:a.bQ()
if(a.at!=null)throw A.c(A.k("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.bV(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.bW(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cH(b)
n=new A.kB(a.a,A.o(t.N,t.CH))
l=A.zj(a,n,b,o.a.b.a)
m=l.a
i.bW(p)
h=a.x
g=o
if(h.e)A.j(A.k("GPU resource adapter is disposed"))
h.ep(g)
f=h.c
h.b.bW(g.a)
h.c=g
h.d=null
if(f!=null)h.d5(f.b)
g.c=B.hq
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bA()
h=j
if(h!=null)h.bA()}catch(d){if(p.c===B.aY){h=t.AB.a(p)
i.ey(h)
i.a.fl(h.a)
i.b.dR(h.b)
h.c=B.eL
i.c=null}i=o
if((i==null?null:i.c)===B.af){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.j(A.k("GPU resource adapter is disposed"))
i.ep(h)
i.d5(h.b)
i.b.dR(h.a)
h.c=B.hr
i.d=null}i=m
if(i!=null)i.bA()
i=n
if(i!=null)i.bA()
throw d}case 1:return A.c4(q,r)}})
return A.c5($async$wJ,r)},
zk(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zj(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zj(a,b,c,d){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uC(a),j=new A.uD(d,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.FW(b,h,B.aX,i,s.gmg(),new A.un(j),new A.uo(j),new A.up(a),new A.uu(a),new A.uv(a),new A.uw(j),new A.ux(j),s.gmi(),new A.uy(a),s.gmm(),r.gmk(),k,s.gmo(),s.gmq(),new A.uz(j,c),new A.uA(j),new A.uB(j),new A.uq(j),new A.ur(j),new A.us(a),new A.ut(j),e,f,g,c.r)}else{p=new A.aJ(l,B.r,g,f,e,0)
o=new A.aJ(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hV(h,p,o):null
k=A.d([new A.lf(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i4(b,u.l,u.B,h,i,B.aX))
q=new A.jQ(k)}a.r.toString
m=q.kc(B.a3,new A.ql(),!1,new A.lJ())
k=m.a.b
if(k.length!==0)throw A.c(A.k("safe renderer graph is invalid: "+A.y(k)))
return new A.tI(q,m)},
Ep(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.c(A.k("renderer graph is not initialized"))
s=A.J(b7.gfO(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a3(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.e(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ab()
p=p.gaw()
n=A.E(p)
B.a.l(s,new A.lX(new A.cw((r|1073741824)>>>0,0,"transient"),q,A.be(new A.O(p,n.i("M(1)").a(o.gaA()),n.i("O<1,M>")))))}p=b8.a
m=A.G1(A.BK(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dW(B.aB,n))
j=j.b
g=j.$ti
j.a3(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.e(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a_(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dW(B.aB,n))
j=j.b
g=j.$ti
j.a3(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.e(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a_(n>0?n:h.e,3)}o=t.N
n=A.o(o,t.rL)
e=new A.o5(n)
e.k8("cull")
j=l-f
d=e.b
if(d==null)A.j(A.k("cull recorded outside an active frame"))
if(j<0)A.j(A.x("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.d([],t.fs)
a=A.d([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gD().e===B.aZ)B.a.l(a,new A.aO(new A.bJ(a0.h3(a2.gD().c.a).c,a2.ga9().a),a2,a1))
else B.a.l(b,new A.aO(new A.bL(B.kp,a2.gD().b,a2.gD().a,a2.ga9().a),a2,g))}a3=new A.lv(A.FR(A.Gt(b)),A.Gs(a),p,b8.b,b8.c)
a4=new A.jH(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.j(A.ah(g,"passId",null))
e.b=g
n.cd(g,A.A2())
a6=A.o(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.k("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.k("resource is not in candidate: "+b1))
b3=new A.fl(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cd(b0,new A.uE(b3))}a5.al(new A.ju(a6,a4,a3))}return new A.tb(e,m,j)},
ym(a){return new A.qC(a,new A.nq(new A.ns(),new A.kJ()),new A.o7(A.d([],t.h1),B.hb),A.d([],t.Ft),B.bA,A.d([],t.ow),null)},
qx:function qx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(a,b,c){this.a=a
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
uE:function uE(a){this.a=a},
tI:function tI(a,b){this.a=a
this.b=b},
lJ:function lJ(){},
lv:function lv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qC:function qC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qD:function qD(){},
qE:function qE(){},
qF:function qF(){},
lG:function lG(a){this.b=a},
tn:function tn(){},
lN:function lN(){},
id:function id(a,b){this.a=a
this.b=b},
Gt(a){var s,r,q=A.J(a,t.E0)
B.a.T(q,new A.vV())
s=A.E(q)
r=s.i("O<1,bX>")
s=A.J(new A.O(q,s.i("bX(1)").a(new A.vW()),r),r.i("a2.E"))
s.$flags=1
return s},
Gs(a){var s,r,q=A.J(a,t.EH)
B.a.T(q,new A.vT())
s=A.E(q)
r=s.i("O<1,bX>")
s=A.J(new A.O(q,s.i("bX(1)").a(new A.vU()),r),r.i("a2.E"))
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
vV:function vV(){},
vW:function vW(){},
vT:function vT(){},
vU:function vU(){},
G1(a,b,c){var s,r,q,p,o,n,m,l=A.d([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.gdX()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.c(A.x("cullItems: non-finite world bounds for instance "+o.ga9().p(0),null))
if(a.mz(o.gdX())===B.cq){++q
continue}B.a.l(l,o)}return new A.nI(l,new A.nJ(q))},
nJ:function nJ(a){this.b=a},
nI:function nI(a,b){this.a=a
this.b=b},
be(a){var s,r,q,p,o,n,m,l,k
for(s=J.S(a),r=B.mb,q=B.mc,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.M(m,k,Math.min(r.c,o))
q=new A.M(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.x("Aabb.fromPoints requires at least one point",null))
return new A.jh(r,q)},
jh:function jh(a,b){this.a=a
this.b=b},
BK(a){var s,r,q,p,o,n,m=a.a,l=new A.oa(),k=m.length
if(3>=k)return A.e(m,3)
s=m[3]
r=m[0]
if(7>=k)return A.e(m,7)
q=m[7]
p=m[4]
if(11>=k)return A.e(m,11)
o=m[11]
n=m[8]
if(15>=k)return A.e(m,15)
return new A.o9(A.d([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eE:function eE(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
o9:function o9(a){this.a=a},
oa:function oa(){},
y8(a){if(a.length!==16)throw A.c(A.x("Mat4.fromColumnMajor requires 16 values",null))
return new A.dp(new Float32Array(A.a1(a)))},
wc(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dp(q)},
y9(a,b,c){var s=b.gau(),r=c.by(s).gau(),q=s.by(r),p=new Float32Array(16)
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
return new A.dp(p)},
dp:function dp(a){this.a=a},
pE:function pE(){},
kD:function kD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kY:function kY(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lm:function lm(a,b,c,d,e,f,g){var _=this
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
ln:function ln(a,b,c,d,e){var _=this
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
lq:function lq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iv:function iv(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lr:function lr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jJ:function jJ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
k_:function k_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lx:function lx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.b=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
bx(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aJ(a.a,a.b,b,c,s,r)},
wg:function wg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lK:function lK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kC:function kC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yo(a){var s=a.c,r=Math.abs(s.a)<0.99?B.ma:B.a6,q=A.y9(a.b,s,r)
return new A.eP(A.wc(1,a.f,B.c.E(a.w*2,0.1,3),0.05).ao(0,q))},
eP:function eP(a){this.a=a},
kN:function kN(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lO:function lO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
FW(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.c(A.ah(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a_(e5+1,2)
m=B.d.a_(e4+1,2)
l=A.bx(B.bD,e5,e4,e3,a8)
k=A.bx(B.bD.fQ(),e5,e4,a8,a8)
A.bx(B.l9,e5,e4,a8,a8)
j=A.bx(B.l6,e5,e4,a8,a8)
i=A.bx(B.l1,e6,e6,a8,a8)
h=A.bx(B.l2,b6,m,a8,a8)
g=A.bx(B.l3,b6,m,a8,a8)
f=A.bx(B.l7,b6,m,a8,a8)
e=A.bx(B.l8,b6,m,a8,a8)
d=$.An()
c=e3>1
b=A.bx(d,e5,e4,a8,c?2:1)
d=A.bx(B.kZ,b6,m,a8,a8)
a=A.bx(B.l_,b6,m,a8,a8)
a0=A.bx(B.l0,e5,e4,a8,a8)
a1=A.bx(B.l4,e5,e4,a8,a8)
a2=A.bx(B.la,e5,e4,a8,a8)
a3=A.bx(B.l5,e5,e4,a8,a8)
a4=c?new A.hV(b8,l,k):a8
b5.a=null
a5=A.yo(B.lO)
a6=t.e_
a7=A.d([],a6)
k=c?k:l
if(r){B.a.I(a7,A.d([new A.hq(b7,a9,b0,b8,b1,b1,B.dU,!0,k,f,d6,b6,m),new A.hq(b7,a9,b0,b8,b2,b2,B.mR,!1,f,e,c2,b6,m),new A.jt(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.d([new A.hx(b7,a9,b0,b8,b3,b3,B.dV,k,d,d6,b6,m),new A.hx(b7,a9,b0,b8,b4,b4,B.mS,d,a,c7,b6,m),new A.jJ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.k_(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kC(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.l4(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.d([new A.jG(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kR(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kQ(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kN(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.v7(b5),i))
j.push(new A.kO(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.v8(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.i4(b7,a9,u.B,b8,k,b9))
return new A.jQ(j)},
v7:function v7(a){this.a=a},
v8:function v8(a,b){this.a=a
this.b=b},
kO:function kO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lP:function lP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kR:function kR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lS:function lS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kQ:function kQ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lR:function lR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l4:function l4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m_:function m_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lf:function lf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m2:function m2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
no:function no(){},
kM(a,b){return new A.ic(a,b)},
jW:function jW(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
jY:function jY(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ey:function ey(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hF:function hF(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
z:function z(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
ot:function ot(){},
ou:function ou(){},
fY:function fY(a,b){this.a=a
this.b=b},
ef:function ef(a,b){var _=this
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
xL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fw(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jr:function jr(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
jF:function jF(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b7:function b7(a,b){this.a=a
this.b=b},
t0:function t0(){this.a=null},
CW(a){var s=new A.ld(a,B.h,new A.t0(),A.D5(a))
s.i8(a)
return s},
D5(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a0(t.N)
s=A.a0(t.N)
r=J.S(t.a.b(q)?q:new A.aU(q,A.E(q).i("aU<1,h>")))
while(r.m())s.l(0,r.gn())
return s},
c1(a,b){var s,r
if(a.b!==B.h)A.j(A.k(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.f(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.f(s.drawingBufferWidth),A.f(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.f(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
D1(a,b){var s
if(a.b!==B.h)A.j(A.k(u.k))
switch(b){case 1:a.a.drawBuffers(A.d([A.f(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.d([A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.c(A.x("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
D0(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.c(A.k("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
D_(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
CZ(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yA(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.f(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.f(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.f(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
CX(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bo(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=a.f
r=s.kX(b)
if(r.a===0)return
if(r.q(0,B.bH)){q=v.G
p=a.a
if(b.a)p.enable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.f(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bI))a.a.depthFunc(A.D_(a,b.b))
if(r.q(0,B.bJ))a.a.depthMask(b.c)
if(r.q(0,B.bN)){q=v.G
p=a.a
if(b.w)p.enable(A.f(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.f(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bO))a.a.cullFace(A.CZ(a,b.x))
if(r.q(0,B.dG)){q=v.G.WebGL2RenderingContext
q=A.f(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bK)){q=v.G
p=a.a
if(b.d)p.enable(A.f(q.WebGL2RenderingContext.BLEND))
else p.disable(A.f(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bL))a.a.blendFunc(A.yA(a,b.e),A.yA(a,b.f))
if(r.q(0,B.bM))a.a.blendEquation(A.CX(a,b.r))
if(r.q(0,B.dE))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dF)){q=v.G.WebGL2RenderingContext
a.a.disable(A.f(q.SCISSOR_TEST))}s.a=b},
CY(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.f(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.f(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.f(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dB(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.CY(a,b))},
cl(a,b){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
w(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.j(A.k(u.k))
s=a.e
if(s==null)throw A.c(A.k("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.F(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.br(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
m=p[1]
if(2>=o)return A.e(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
m=p[1]
if(2>=o)return A.e(p,2)
l=p[2]
if(3>=o)return A.e(p,3)
A.aL(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.f(c.b))
break}},
bE(a,b){if(a.b!==B.h)A.j(A.k(u.k))
a.a.bindVertexArray(A.b(b.a))},
aE(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.k(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.f(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iW){p=s.d>1?A.f(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iV){o=s.b
if(o!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.f(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.k("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.k("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
D2(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.f(p.ELEMENT_ARRAY_BUFFER),c,A.f(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
D3(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yD(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
r=A.F(s.createBuffer())
if(r==null)throw A.c(A.k("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cD?A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.f(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.D3(a,b.b))
return new A.dE(r)},
yB(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.f(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yC(a,b){var s
switch(b.a){case 0:s=A.f(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.f(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
wn(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
r=A.F(s.createTexture())
if(r==null)throw A.c(A.k("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.f(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.aL(s,"texStorage3D",[n,1,A.f(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aL(s,"texStorage2D",[n,1,A.f(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yB(a,b.e))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yB(a,b.f))
p=b.r
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yC(a,p))
s.texParameteri(n,A.f(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yC(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.eU(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.j(A.ah(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dE(new A.iW(r,l,k,q,!1))},
wo(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.j(A.k(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.c(A.x("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.c(A.x("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.f(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.f(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aL(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aL(l,"texSubImage2D",[m,0,0,0,q,p,A.f(n.WebGL2RenderingContext.RGBA),A.f(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
le(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
yF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.j(A.k(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.c(A.x("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.F(r.createFramebuffer())
if(q==null)throw A.c(A.k("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b1
if(n&&!a1.e)throw A.c(A.x("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cF||o===B.ht
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.d([A.f(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.f(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.F(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aL(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.F(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aL(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.d([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.F(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aL(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aL(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.F(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aL(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.LINEAR))
A.aL(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.f(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.d([A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.F(r.createRenderbuffer())
r.bindRenderbuffer(A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aL(r,c,[A.f(p.WebGL2RenderingContext.RENDERBUFFER),o,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.F(r.createTexture())
r.bindTexture(A.f(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aL(r,b,[A.f(p.WebGL2RenderingContext.TEXTURE_2D),1,A.f(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.f(p.WebGL2RenderingContext.TEXTURE_2D),A.f(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.f(p.WebGL2RenderingContext.NEAREST))
A.aL(r,a,[A.f(p.WebGL2RenderingContext.FRAMEBUFFER),A.f(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.f(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.f(r.checkFramebufferStatus(A.f(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.f(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.f(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wp(a0,q,l,k,f,e,j,i)
throw A.c(A.k("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dE(new A.iV(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wp(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d5(a){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=A.F(a.a.createVertexArray())
if(s==null)throw A.c(A.k("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dE(s)},
yE(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.F(p.createShader(b))
if(o==null)throw A.c(A.kM(b===A.A6(A.zo(A.Ak(),r),q,t.S)?B.dz:B.dA,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ae(A.hh(p.getShaderParameter(o,A.f(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aA(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.kM(b===A.A6(A.zo(A.Ak(),r),q,t.S)?B.dz:B.dA,s))}return o},
D4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.k(u.k))
q=v.G
s=A.yE(a,A.f(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yE(a,A.f(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.F(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.lA)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ae(A.hh(o.getProgramParameter(n,A.f(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aA(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.kM(B.dB,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.f(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.kM(B.dC,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.F(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.kM(B.dC,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dE(n)},
dE:function dE(a){this.a=a},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iV:function iV(a,b,c,d,e,f,g,h,i,j){var _=this
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
m1:function m1(a){this.a=a
this.b=!1},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rZ:function rZ(a){this.a=a},
t_:function t_(a){this.a=a},
tQ:function tQ(){},
m0:function m0(){},
jI:function jI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mY(a,a0){var s=0,r=A.c6(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mY=A.c8(function(a1,a2){if(a1===1)return A.c3(a2,r)
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
b=new A.jo(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aV,A.o(o,t.jS))
b.hT(p,a0)
p=A.p(a).i("K<1,2>")
s=3
return A.aB(A.oc(A.kg(new A.K(a,p),p.i("bT<aq>(n.E)").a(new A.mZ(b)),p.i("n.E"),t.ls),t.c),$async$mY)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.iV():n
c.buffer=p
q=b
s=1
break
case 1:return A.c4(q,r)}})
return A.c5($async$mY,r)},
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
n_:function n_(){},
mZ:function mZ(a){this.a=a},
n1:function n1(a,b){this.a=a
this.b=b},
n0:function n0(a,b){this.a=a
this.b=b},
n2:function n2(a,b,c){this.a=a
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
B2(a,b,c,d,e,f,g){var s=new A.mP(c,f,b,g,new A.a(d.a,d.b,d.c),e,a)
s.hV(a,b,c,d,0,e,f,g)
return s},
AZ(a,b){var s=new A.mx(b)
s.hS(a,b)
return s},
B1(a){var s,r,q,p,o,n=t.z
n=A.o(n,n)
for(s=new A.K(a,A.p(a).i("K<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.ap(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mL(A.b4(n,r,t.a))
n.hU(a)
return n},
Ft(a,b){var s,r,q,p=b>>>0
for(s=new A.dQ(a),r=t.sU,s=new A.aI(s,s.gt(0),r.i("aI<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.A8(p,q==null?r.a(q):q)}return p&2147483647},
jp:function jp(a,b){this.a=a
this.b=b},
mP:function mP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mQ:function mQ(){},
mx:function mx(a){this.a=a},
my:function my(){},
ho:function ho(){},
mz:function mz(){},
mA:function mA(){},
mL:function mL(a){this.a=a},
mN:function mN(){},
mO:function mO(){},
mM:function mM(){},
w2:function w2(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mX:function mX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function mS(a){this.a=a},
mT:function mT(){},
ir:function ir(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
nl:function nl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
o4:function o4(a){this.a=a},
k4:function k4(a,b,c,d,e,f,g,h,i,j){var _=this
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
p6:function p6(a){this.a=a},
BU(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.K(a,A.p(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ap(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.p5(n)},
p5:function p5(a){this.a=a},
p9:function p9(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pv:function pv(a,b,c){this.a=a
this.c=b
this.e=c},
ps:function ps(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(){},
nK:function nK(){this.b=this.a=0},
pB:function pB(a){this.a=a
this.b=0
this.e=!1},
ig(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bR(a)
s=a.length
if(!(b<s))return A.e(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.e(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.e(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.e(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.e(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.e(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.e(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.e(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.e(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.e(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.e(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.e(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.e(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.e(a,r)
a[r]=l
return b+14},
d_:function d_(a){this.a=a
this.b=0},
im(a,b,c){return new A.a(a,b,c)},
yy(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.a(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
a:function a(a,b,c){this.a=a
this.b=b
this.c=c},
D6(a,b,c,d){return new A.lg(d,b,c,a)},
D8(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Az()
s=a.d
r=A.t2(s,0)
q=A.t2(s,1)
p=A.t2(s,2)
o=A.t2(s,3)
s=t.N
n=A.a0(s)
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
i=new A.a(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gau():i
return new A.lg(m,p,o,A.eN(n,s))},
t2(a,b){return A.D7(b<a.length?a[b]:0)},
bF(a,b){return b<a.length&&a[b]>=0.5},
D7(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.E((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc7(a)?-s:s},
kS:function kS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lg:function lg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ne:function ne(a){this.a=a},
Bp(a,b,c){var s=new A.jK(a,c,null,b)
s.hZ(a,null,null,b,c)
return s},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
BC(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bu(new A.H(B.j9,t.e2.a(new A.nX(a)),t.vL),t.yW)
return s==null?null:new A.fx(s)},
C9(a,b){var s=A.d([],t.s)
switch(b.a){case 0:A.we(s,a,B.iK)
break
case 1:A.we(s,a,B.iL)
break
case 2:A.we(s,a,B.jc)
break}return s},
we(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.U(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
BB(a){if(a.a!==21)return null
if(a.e)return B.f_
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f0
return B.eZ},
cc:function cc(a,b){this.a=a
this.b=b},
nU:function nU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fx:function fx(a){this.a=a},
nX:function nX(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
Cf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kv(s,new A.a(o,n,m),q,p,l,j)
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
kv:function kv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Fw(a){var s,r,q,p=A.o(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.c(B.fd)
p.k(0,q,r.b)}return p},
ma(a){var s,r,q,p,o,n=a.ga2().bJ(0)
B.a.Y(n)
s=t.z
r=A.o(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.zg(a.h(0,o)))}return A.b4(r,t.N,s)},
zg(a){var s
if(t.f.b(a))return A.ma(A.Fw(a))
if(t.j.b(a)){s=t.z
return A.aj(J.ff(a,A.Gm(),s),s)}if(a==null||A.bH(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.fQ)
return a}throw A.c(A.a4("presentation snapshot contains unsupported value "+J.fe(a).p(0),null,null))},
qd:function qd(a){this.a=a},
yl(a,b,c){var s=A.wE(b),r=A.wE(a)
if(c!==2)A.j(A.ah(c,"version","unsupported save version"))
return new A.fN(c,s,r)},
wE(a){var s,r,q,p,o=A.p(a).i("aa<1>"),n=A.J(new A.aa(a,o),o.i("n.E"))
B.a.Y(n)
o=t.z
s=A.o(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.zf(a.h(0,p)))}return A.b4(s,t.N,o)},
zf(a){var s,r,q,p
if(t.f.b(a)){s=A.o(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.c(B.fH)
s.k(0,p,q.b)}return A.wE(s)}if(t.j.b(a)){r=t.z
return A.aj(J.ff(a,A.Gq(),r),r)}if(a==null||A.bH(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.fS)
return a}throw A.c(A.a4("save contains unsupported value "+J.fe(a).p(0),null,null))},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(){},
eM:function eM(a,b){this.a=a
this.b=b},
xP(a,b,c,d,e,f,g,h){var s=A.d([],t.pC),r=A.d([],t.ns)
return new A.of(a,b,c,d,e,f,g,s,r,h)},
xQ(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aK(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.c(B.fG)
r=c.h(0,"runSeed")
q=A.aK(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aK(p)||p<1||typeof o!="number")throw A.c(B.h0)
if(!isFinite(5760))throw A.c(A.ah(5760,"daySeconds","must be finite and > 0"))
n=new A.jU(p,7,5760)
if(!isFinite(o)||o<0||o>=24)A.j(A.a4("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.C3(a5,A.aM(a1,s,m))
k=A.Bm(l,A.aM(a0,s,m),n)
j=A.xS(b)
A.BT(A.aM(a2,s,m)).jZ(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bH(f))A.j(B.fl)
e=A.Ca(c.h(0,"narrative"))
if(e==null)e=A.pO(d,d,d)
return A.xP(b,q,j,n,l,k,new A.jI(i,h,g,f),e)},
En(a){var s
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
ex:function ex(a,b){this.a=a
this.b=b},
jT:function jT(){},
og:function og(a,b){this.a=a
this.b=b},
of:function of(a,b,c,d,e,f,g,h,i,j){var _=this
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
oh:function oh(a){this.a=a},
oi:function oi(){},
oj:function oj(){},
ok:function ok(a){this.a=a},
ol:function ol(){},
B4(a){var s,r,q,p,o,n,m="modelScale",l=A.mh(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.ad(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.fx)
s=A.ek(l,"houseId")
r=A.ek(l,"sourceRef")
q=J.ff(A.me(l,"rooms"),new A.n4(k),t.bJ)
q=A.J(q,q.$ti.i("a2.E"))
q.$flags=1
p=J.ff(A.me(l,"portals"),new A.n5(k),t.lT)
p=A.J(p,p.$ti.i("a2.E"))
p.$flags=1
o=J.ff(A.me(l,"stairs"),new A.n6(),t.gI)
o=A.J(o,o.$ti.i("a2.E"))
o.$flags=1
n=J.ff(A.me(l,"exteriorCells"),new A.n7(),t.N)
n=A.J(n,n.$ti.i("a2.E"))
n.$flags=1
return new A.n3(s,r,q,p,o)},
B5(a,b){var s=A.mh(a,"room"),r=A.ek(s,"id"),q=A.zP(s.h(0,"origin"),"origin",b),p=A.zP(s.h(0,"size"),"size",b),o=J.ff(A.me(s,"windows"),new A.n9(b),t.ya)
o=A.J(o,o.$ti.i("a2.E"))
o.$flags=1
return new A.fh(r,q,p,o)},
mh(a,b){return t.P.b(a)?a:A.j8(b+" is not an object")},
me(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.j8(b+" is not a list")},
ek(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.j8(b+" is not a string")},
jb(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.j8(b+" is not finite")},
FJ(a,b){var s,r
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.v5())}else s=!0
if(s)return A.j8(b+" is not a finite vec3")
s=A.d([],t.n)
for(r=J.S(a);r.m();)s.push(A.ad(r.gn()))
return s},
zP(a,b,c){var s,r,q,p=A.d([],t.n)
for(s=A.FJ(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
j8(a){return A.j(A.a4(a,null,null))},
n3:function n3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
n4:function n4(a){this.a=a},
n5:function n5(a){this.a=a},
n6:function n6(){},
n7:function n7(){},
n8:function n8(a){this.a=a},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n9:function n9(a){this.a=a},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fg:function fg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fi:function fi(a){this.b=a},
v5:function v5(){},
jv:function jv(a,b){this.a=a
this.b=b
this.d=null},
np:function np(a){this.a=a},
ki:function ki(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
lh:function lh(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oJ:function oJ(){this.b=0},
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
jN:function jN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nZ:function nZ(){},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(){},
oK:function oK(a,b,c){this.a=a
this.b=b
this.c=c},
Gz(a){var s,r,q,p,o,n,m,l
a.C()
s=a.a
r=s.length
q=r*14
p=new Float32Array(q)
for(o=0;o<r;++o){n=s[o]
m=o*14
if(!(m<q))return A.e(p,m)
p[m]=n.a
l=m+1
if(!(l<q))return A.e(p,l)
p[l]=n.b
l=m+2
if(!(l<q))return A.e(p,l)
p[l]=n.c
l=m+3
if(!(l<q))return A.e(p,l)
p[l]=n.d
l=m+4
if(!(l<q))return A.e(p,l)
p[l]=n.e
l=m+5
if(!(l<q))return A.e(p,l)
p[l]=n.f
l=m+6
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+7
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+8
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+9
if(!(l<q))return A.e(p,l)
p[l]=0
l=m+10
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+11
if(!(l<q))return A.e(p,l)
p[l]=n.r
l=m+12
if(!(l<q))return A.e(p,l)
p[l]=n.w
l=m+13
if(!(l<q))return A.e(p,l)
p[l]=n.x}s=a.c
return new A.ch(B.ac,p,new Uint16Array(A.a1(a.b)),new A.jh(new A.M(s.a,s.b,s.c),new A.M(s.d,s.e,s.f)))},
Gy(a){var s,r,q,p,o,n=A.d([],t.uH)
for(s=A.Fs(a,new A.vX(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jO(o,p.c,p.e))}return n},
Fs(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.o(t.N,t.Ez)
for(r=a.b,q=r.length,p=t.t,o=a.a,n=0;n<q;n+=3){m=r[n]
l=n+1
if(!(l<q))return A.e(r,l)
k=r[l]
l=n+2
if(!(l<q))return A.e(r,l)
j=r[l]
l=o.length
if(!(m<l))return A.e(o,m)
i=o[m]
h=i.x
if(!(k<l))return A.e(o,k)
g=o[k]
f=g.x
if(f===h){if(!(j<l))return A.e(o,j)
e=o[j].x!==h}else e=!0
if(e){if(!(j<l))return A.e(o,j)
throw A.c(A.x("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.e(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.G(d,0,B.b.bD(d,":")):null
l=new A.d6(d,l,h,A.d([],p))
s.k(0,d,l)}B.a.I(l.d,A.d([m,k,j],p))}r=A.d([],t.wf)
q=s.$ti.i("au<2>")
q=A.J(new A.au(s,q),q.i("n.E"))
B.a.T(q,new A.v_())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.t)(q),++c)r.push(q[c].mL(a))
return r},
E6(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jN(r,q,p,o,n,m)},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
vX:function vX(a){this.a=a},
v_:function v_(){},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eu:function eu(a,b){this.a=a
this.b=b},
jP:function jP(){},
FU(a){var s,r,q,p=new A.oK(A.d([],t.Dl),A.d([],t.t),A.o(t.N,t.S))
for(s=0;s<4;++s)A.Eq(p,a,B.cZ[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a_(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a_(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ad(r,new A.a_(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ad(r,q,new A.a_(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a_(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a_(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ad(q,new A.a_(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ad(q,r,new A.a_(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
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
A.Fj(p,15.75,15.75,12.044999999999998,16.32)
A.E9(p,15.75,15.75,16.32)
A.Em(p,15.75,15.75,12.044999999999998)
A.Eu(p,a,15.75)
A.Fp(p,15.75,15.75)
A.E5(p,15.75)
return p.ka()},
Eq(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.d([],t.il)
for(s=b6.b,r=s.length,q=B.v!==b7,p=B.m!==b7,o=B.l===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.t)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.eb(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aJ(i),b=J.S(h.a),h=new A.T(b,h.b,h.$ti.i("T<1>"));h.m();){a=b.gn()
if(!a.Q||a.aH(i)!==b7)continue
B:{if(!p||o){a0=g+a.ag(i)
break B}if(!q||n){a0=e+a.ag(i)
break B}a0=null}B.a.l(b4,new A.eb(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.m||b7===B.l?b8:b9
r=t.i
a1=A.aN([0,s],r)
a2=A.aN([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.J(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.J(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.uG(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Et(b5,b4,b7,b8,b9,c1)
A.Er(b5,b4,b7,b8,b9,c1)
A.Es(b5,b4,b7,b8,b9,c0,c1)},
Es(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aN([0,a4===B.m||a4===B.l?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.t)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.Y(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.e(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.uF(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
Er(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Et(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Fn(a2,g,a4,a5,a6,a7,q)}},
Fn(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
Fj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.Fk(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
Fk(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
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
E9(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
Em(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Eu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
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
Fp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
E5(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uG:function uG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uF:function uF(a,b,c){this.a=a
this.b=b
this.c=c},
Go(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xh(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dT(B.f4,k.a,s)}r=A.Ai(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dT(B.f5,r.a,s)}if(A.Aj(b,d,c)!=null)return B.f9
q=A.Gn(a,b,c,d)
if(q!=null)return new A.dT(B.cl,q.a,"inspect the "+q.b)
p=A.Ah(b,c,d,e)
if(p!=null){o=e.cz(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dT(B.f7,l,m?"inspect the "+o.b:"inspect "+n)}return B.fa},
Ah(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mn(a5,s,4.5)
for(q=a6.m0(a4),p=J.S(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cz(i.c)
g=i.f.a
f=i.h2(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.a(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gau()
a0=a3.b
a1=Math.acos(B.c.E(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mo(a5,a4,a3.a,new A.a(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Gn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.he(c)
if(s.length===0)return f
r=d.aG(e)
q=A.mn(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.t)(s),++l){k=s[l]
j=b.a
i=new A.a(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gau()
j=b.b
if(Math.acos(B.c.E(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mo(d,c,b.a,new A.a(n,m,o)))return k}return f},
dh:function dh(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
FV(a,b){var s,r=new A.d_(new Float32Array(5376)),q=new A.d_(new Float32Array(5376)),p=new A.d_(new Float32Array(5376)),o=new A.d_(new Float32Array(5376)),n=b.d,m=a.aG(b),l=A.hJ(b.y),k=A.hJ(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.dI(new A.a(j,i,h),new A.a(j,i,f),new A.a(d,i,f),new A.a(d,i,h),l.c,e/c,g/c)
A.DU(r,b,m)
i+=m.b
c=k.e
q.dI(new A.a(j,i,h),new A.a(d,i,h),new A.a(d,i,f),new A.a(j,i,f),k.c,e/c,g/c)
A.DR(q,b,m)
for(s=0;s<4;++s)A.DZ(p,a,b,m,B.cZ[s])
for(j=a.aJ(b.a),i=J.S(j.a),j=new A.T(i,j.b,j.$ti.i("T<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.z4(o,b,m,h,!0)}A.DS(p,b,m)
A.DV(p,a,b,m)
j=B.t.aR(r.a,0,r.b)
i=B.t.aR(q.a,0,q.b)
h=B.t.aR(p.a,0,p.b)
B.t.aR(o.a,0,o.b)
return new A.qy(j,i,h)},
DR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.m(a,new A.a(n,s,r),new A.a(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.m(a,new A.a(m-0.34,g,l-0.34),new A.a(m+0.34,d-0.018,l+0.34),12037536)
A.m(a,new A.a(m-0.22,d-0.075,l-0.22),new A.a(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.m(a,new A.a(s,r,j),new A.a(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.m(a,new A.a(i,s,r),new A.a(i+0.1,q,p),4078648)}},
FS(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d_(new Float32Array(5376))
r=a.aG(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.z5(s,b,r,c,q)
return B.t.aR(s.a,0,s.b)},
FT(a,b){var s,r,q,p=new A.d_(new Float32Array(5376)),o=a.aG(b)
for(s=a.aJ(b.a),r=J.S(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.z4(p,b,o,q,!1)}return B.t.aR(p.a,0,p.b)},
DU(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.hJ(c)
if(c==="floor-wood"){c=a3.c
r=B.c.aN(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.f7(m,1.04):A.f7(m,0.84)
A.m(a1,new A.a(b,q,k),new A.a(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.m(a1,new A.a(h,a+0.016,a0+0.18),new A.a(p,a+0.026,c-0.18),6443866)
A.m(a1,new A.a(h+0.08,a+0.027,a0+0.22),new A.a(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.m(a1,new A.a(b+1.15,a+0.018,a0+2.15),new A.a(b+4.7,a+0.03,a0+4.35),5589578)
A.m(a1,new A.a(b+1.28,a+0.031,a0+2.28),new A.a(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.f7(c,1.04):A.f7(c,0.88)
A.m(a1,new A.a(p,o,k),new A.a(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.f7(c,1.06):A.f7(c,0.88)
A.m(a1,new A.a(e,o,k),new A.a(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.m(a1,new A.a(b+0.08,a+0.004,a0+0.08),new A.a(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.m(a1,new A.a(b+2.2,a+0.015,a0+2.45),new A.a(b+2.68,a+0.021,a0+2.93),A.f7(c,0.58))}},
DV(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.m7(b2,b4,b5,"living")
A.j6(b2,b4,"living")
a8=a9+b5.a
s=a8-0.48
r=b1+b5.c*0.4
A.m(b2,new A.a(s,b0,r-0.85),new A.a(a8,b0+2.55,r+0.85),7824724)
A.m(b2,new A.a(s-0.38,b0+0.02,r-0.72),new A.a(a8+0.05,b0+0.16,r+0.72),a2)
q=b0+2.34
A.m(b2,new A.a(s-0.52,b0+2.18,r-0.94),new A.a(a8+0.08,q,r+0.94),a3)
p=s-0.02
A.m(b2,new A.a(p,b0+0.45,r-0.48),new A.a(a8+0.03,b0+1.48,r+0.48),2170396)
for(a8=s-0.08,o=b0+0.28,n=r-0.42,m=b0+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.m(b2,new A.a(a8+j,o,n),new A.a(p+j,m,l),a4)}for(a8=s-0.01,p=b0+1.55,o=s+0.04,n=b0+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.m(b2,new A.a(a8,p,l+j),new A.a(o,n,m+j),a2)}for(a8=[r-0.68,r+0.56],p=s-0.42,o=b0+2,n=s-0.26,m=b0+2.2,i=0;i<2;++i){h=a8[i]
A.m(b2,new A.a(p,o,h),new A.a(n,m,h+0.16),a5)}A.m(b2,new A.a(s-0.27,q,r-0.58),new A.a(s-0.07,b0+2.52,r-0.38),a6)
A.m(b2,new A.a(s-0.25,q,r+0.34),new A.a(s-0.06,b0+2.49,r+0.52),a3)
break
case"hall":A.DW(b2,b3,b4,b5,a5,a4)
A.DY(b2,b3,b4,b5,a5,a4)
A.j6(b2,b4,"hall")
A.m(b2,new A.a(a9+0.28,b0+0.78,b1+0.52),new A.a(a9+0.68,b0+0.88,b1+2.15),a5)
for(a8=[b1+0.66,b1+2.01],q=a9+0.34,p=a9+0.42,o=b0+0.8,i=0;i<2;++i){g=a8[i]
A.m(b2,new A.a(q,b0,g),new A.a(p,o,g+0.08),a3)}f=a9+1.22
a8=b1+0.1
A.m(b2,new A.a(f-0.28,b0+2.35,b1+0.02),new A.a(f+0.28,b0+3.02,a8),a5)
A.m(b2,new A.a(f-0.13,b0+2.48,a8),new A.a(f+0.13,b0+2.72,b1+0.15),a2)
a8=b1+0.08
A.m(b2,new A.a(f-0.025,b0+1.82,a8),new A.a(f+0.025,b0+2.36,b1+0.13),a4)
for(q=a9+1.7,p=b0+1.74,o=a9+1.78,n=b0+1.84,m=b1+0.16,k=0;k<3;++k){l=k*0.36
A.m(b2,new A.a(q+l,p,a8),new A.a(o+l,n,m),a4)}a8=b0+0.72
A.m(b2,new A.a(a9+0.86,b0,b1+0.62),new A.a(a9+1.1,a8,b1+0.9),a6)
A.m(b2,new A.a(a9+0.91,a8,b1+0.68),new A.a(a9+1.05,b0+0.82,b1+0.84),a5)
break
case"kitchen":A.j6(b2,b4,"kitchen")
a8=a9+b5.a
e=a8-0.62
q=b0+1.28
A.m(b2,new A.a(e,b0,b1+0.72),new A.a(a8,q,b1+2.18),a4)
A.m(b2,new A.a(e-0.08,q,b1+0.62),new A.a(a8+0.04,b0+1.38,b1+2.28),a2)
for(a8=e+0.12,q=b0+1.39,p=b1+0.88,o=e+0.4,n=b0+1.45,m=b1+1.16,k=0;k<3;++k){l=k*0.4
A.m(b2,new A.a(a8,q,p+l),new A.a(o,n,m+l),2170396)}a8=b0+0.82
q=b0+0.94
A.m(b2,new A.a(a9+1.05,a8,b1+1.15),new A.a(a9+3.1,q,b1+2.35),a3)
for(p=[a9+1.18,a9+2.94],o=b1+1.28,n=b1+1.38,i=0;i<2;++i){d=p[i]
A.m(b2,new A.a(d,b0,o),new A.a(d+0.1,a8,n),a5)}A.m(b2,new A.a(a9+0.48,b0+1.72,b1+2.74),new A.a(a9+2.55,b0+1.84,b1+2.88),a5)
a8=b0+1.02
A.m(b2,new A.a(a9+3.38,q,b1+1.26),new A.a(a9+4.48,a8,b1+2.22),a6)
q=b1+1.66
p=b1+1.74
A.m(b2,new A.a(a9+3.82,a8,q),new A.a(a9+3.9,b0+1.34,p),a4)
A.m(b2,new A.a(a9+3.72,b0+1.3,q),new A.a(a9+4,b0+1.36,p),a4)
for(a8=a9+1.38,q=b0+0.95,p=b1+1.48,o=a9+1.78,n=b0+1.05,m=b1+1.88,k=0;k<2;++k){l=k*0.55
A.m(b2,new A.a(a8+l,q,p),new A.a(o+l,n,m),a6)}break
case"cellar":A.j6(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.m(b2,new A.a(a8+m,b0,q),new A.a(p+m,o+B.d.O(k,2)*0.18,n),a5)}A.m(b2,new A.a(a9+2.55,b0+0.15,b1+0.38),new A.a(a9+2.72,b0+1.55,b1+0.56),a4)
A.m(b2,new A.a(a9+2.42,b0+1.28,b1+0.32),new A.a(a9+2.86,b0+1.38,b1+0.65),a6)
A.m(b2,new A.a(a9+0.4,b0+1.72,b1+0.45),new A.a(a9+3.4,b0+1.82,b1+0.58),a4)
A.m(b2,new A.a(a9+1.9,b0+1.58,b1+0.42),new A.a(a9+2.06,b0+1.76,b1+0.61),a4)
A.m(b2,new A.a(a9+1.84,b0+1.62,b1+0.55),new A.a(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.m7(b2,b4,b5,"bedroom")
A.j6(b2,b4,"bedroom")
c=a9+0.85
b=b1+2.08
a8=b0+0.72
A.m(b2,new A.a(c,b0+0.42,b),new A.a(c+3.65,a8,b+2.05),6972528)
A.m(b2,new A.a(c-0.1,a8,b-0.12),new A.a(c+3.75,b0+1.28,b+0.1),a3)
A.m(b2,new A.a(c+0.22,b0+0.74,b+1.35),new A.a(c+1.05,b0+0.9,b+1.82),a6)
a8=a9+b5.a
q=b0+1.48
A.m(b2,new A.a(a8-0.95,b0+0.78,b1+0.58),new A.a(a8-0.18,q,b1+1.42),a3)
A.m(b2,new A.a(a8-1.04,q,b1+0.48),new A.a(a8-0.1,b0+1.57,b1+1.52),a5)
for(a8=[b+0.22,b+0.78],q=c+0.36,p=b0+0.75,o=c+1.12,n=b0+0.92,i=0;i<2;++i){a=a8[i]
A.m(b2,new A.a(q,p,a),new A.a(o,n,a+0.42),a6)}for(a8=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=b0+0.08,n=b0+0.44,i=0;i<2;++i){a0=a8[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.m(b2,new A.a(a0,o,g),new A.a(l,n,g+0.1),a5)}}break
case"landing":A.m7(b2,b4,b5,"landing")
a8=a9+0.48
A.m(b2,new A.a(a9+0.34,b0+0.02,b1+1.62),new A.a(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.m(b2,new A.a(a8,q+l,p+j),new A.a(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.m(b2,new A.a(a8+l,q,p+j),new A.a(o+l,n,m+j),a5)}break
case"bathroom":A.m7(b2,b4,b5,a7)
A.j6(b2,b4,a7)
a8=b0+0.62
A.m(b2,new A.a(a9+0.3,b0+0.04,b1+0.38),new A.a(a9+2.15,a8,b1+1.22),a6)
q=b0+0.72
A.m(b2,new A.a(a9+0.42,a8,b1+0.48),new A.a(a9+2.03,q,b1+1.12),a2)
a8=a9+b5.a
p=b1+b5.c
A.m(b2,new A.a(a8-0.78,b0+0.12,p-0.88),new A.a(a8-0.18,b0+1.75,p-0.28),a6)
A.m(b2,new A.a(a8-0.86,b0+1.68,p-0.98),new A.a(a8-0.1,b0+1.82,p-0.18),a4)
p=b1+0.68
a8=b0+1.18
o=b1+0.78
A.m(b2,new A.a(a9+0.86,q,p),new A.a(a9+0.96,a8,o),a4)
A.m(b2,new A.a(a9+0.7,b0+1.12,p),new A.a(a9+1.12,a8,o),a4)
break
case"spare-room":A.m7(b2,b4,b5,"spare")
A.m(b2,new A.a(a9+1,b0,b1+0.7),new A.a(a9+3.25,b0+1.65,b1+2),6972528)
A.m(b2,new A.a(a9+0.8,b0+1.6,b1+0.52),new A.a(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.m(b2,new A.a(a8-1.05,b0,q-1.02),new A.a(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.m(b2,new A.a(p,o+l,n),new A.a(a8,m+l,q),a4)}break}A.DX(b2,b3,b4,b5)},
DX(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=2503224,b9=4545124,c0=7901340,c1=3706428,c2=c8.d,c3=c2.a,c4=c2.b,c5=c2.c
c2=c9.a
switch(c8.a){case"living-room":s=c3+c2*0.45
r=c9.c
q=c5+r*0.5
A.d7(c6,new A.a(s,c4,q),0.85,0.35,b8,16)
p=[B.kC,B.kE,B.kT,B.kQ]
for(o=c4+0.35,n=c4+0.8,m=0;m<4;++m){l=p[m]
k=s+l.a
j=q+l.b
A.d7(c6,new A.a(k,o,j),0.12,0.3,b9,8)
A.hd(c6,new A.a(k,n,j),0.16,l.c,!1,8,12)}o=c4+0.55
A.wW(c6,new A.a(s,o,q),0.3,0.45,16752640,!0)
i=c3+0.8
h=c5+r*0.25
g=c5+r*0.35
for(n=c4+0.6,f=0;f<5;++f){e=i+f*0.45
A.d7(c6,new A.a(e,c4,h),0.08,0.45,b8,8)
d=80+f*45
A.hd(c6,new A.a(e,n,h),0.12,(d<<16|d<<8|d)>>>0,!1,6,10)}c=[16766720,15114588,12632256,9489145,14737646]
for(f=0;f<5;++f){e=i+f*0.45
A.d7(c6,new A.a(e,c4,g),0.08,0.45,b9,8)
A.hd(c6,new A.a(e,n,g),0.12,c[f],!1,6,10)}b=c3+c2*0.72
a=c5+r*0.22
a0=c4+0.02
A.m(c6,new A.a(b-0.6,c4,a-0.6),new A.a(b+0.6,a0,a+0.6),3622735)
A.m(c6,new A.a(b-0.4,a0,a-0.4),new A.a(b+0.4,c4+0.03,a+0.4),11583173)
A.d7(c6,new A.a(b-0.3,c4,a),0.02,1.2,b8,6)
A.d7(c6,new A.a(b,c4,a),0.05,1.2,b9,8)
A.d7(c6,new A.a(b+0.3,c4,a),0.1,1.2,b8,10)
a0=c3+c2
a1=a0-1.8
a2=c5+0.6
a3=[0.05,0.1,0.15,0.2,0.3]
for(a4=a1+0.9,f=0;f<5;++f){a5=a2+f*0.4
a6=a3[f]
a7=B.d.O(f,2)===0?b9:c0
A.m(c6,new A.a(a1,c4,a5),new A.a(a4,c4+a6,a5+0.35),a7)}a8=c3+c2*0.5
a4=c5+r
a9=a4-1.2
a7=a9-0.1
b0=c4+2.5
b1=a9+0.1
A.m(c6,new A.a(a8-0.8,c4,a7),new A.a(a8-0.65,b0,b1),b8)
A.m(c6,new A.a(a8+0.65,c4,a7),new A.a(a8+0.8,b0,b1),b8)
A.m(c6,new A.a(a8-0.85,c4+2.4,a9-0.12),new A.a(a8+0.85,c4+2.55,a9+0.12),13840175)
b1=a8-0.82
b0=c4+1
a7=a9-0.11
b2=a8-0.63
b3=a9+0.11
A.m(c6,new A.a(b1,b0,a7),new A.a(b2,c4+1.04,b3),16766720)
A.m(c6,new A.a(b1,c4+1.68,a7),new A.a(b2,c4+1.72,b3),c1)
A.m(c6,new A.a(b1,c4+2,a7),new A.a(b2,c4+2.04,b3),16766720)
b4=c3+1.2
b5=c5+1.2
A.m(c6,new A.a(b4,c4,b5),new A.a(b4+0.8,n,b5+0.8),b9)
A.m(c6,new A.a(b4+0.15,n,b5+0.15),new A.a(b4+0.65,b0,b5+0.65),c0)
A.wW(c6,new A.a(b4+0.4,b0,b5+0.4),0.35,0.35,16117990,!1)
A.zX(c6,new A.a(i,c4,a4-2.2),new A.a(c3+2.2,o,a4-1),b8,B.m)
A.Fv(c6,new A.a(a0-2.8,c4,c5+r*0.55),1,0.28,0.14,4,b9)
A.wW(c6,new A.a(c3+c2*0.25,c4,c5+r*0.78),0.75,1.05,1668818,!1)
break
case"hall":r=c5+0.55
A.d7(c6,new A.a(c3+0.55,c4,r),0.22,2.4,b9,12)
A.d7(c6,new A.a(c3+c2-0.55,c4,r),0.22,2.4,b9,12)
A.hd(c6,new A.a(c3+c2*0.5,c4+1.6,c5+1.2),0.18,c1,!0,8,12)
c2=c3+0.8
r=c5+2.4
A.d7(c6,new A.a(c2,c4,r),0.15,0.9,b8,8)
A.hd(c6,new A.a(c2,c4+1.05,r),0.15,16752640,!0,8,12)
break
case"kitchen":b6=c3+c2*0.45
b7=c5+c9.c*0.5
A.m(c6,new A.a(b6-0.7,c4,b7-0.4),new A.a(b6+0.7,c4+0.85,b7+0.4),b8)
c2=c4+1.1
A.hd(c6,new A.a(b6-0.35,c2,b7),0.22,1668818,!1,8,12)
A.hd(c6,new A.a(b6+0.35,c2,b7),0.22,c1,!1,8,12)
c2=c3+0.9
r=c3+1.4
A.m(c6,new A.a(c2,c4,c5+0.9),new A.a(r,c4+0.5,c5+1.4),c0)
A.zX(c6,new A.a(c2,c4,c5+1.5),new A.a(r,c4+0.4,c5+2.2),b9,B.l)
break
default:c2=c3+c2*0.5
r=c5+c9.c*0.5
A.d7(c6,new A.a(c2,c4,r),0.45,0.6,b9,10)
A.m(c6,new A.a(c2-0.15,c4+0.6,r-0.15),new A.a(c2+0.15,c4+0.9,r+0.15),16117990)}},
m7(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
switch(a0){case"living":g=e+0.58
A.m(a,new A.a(f+0.45,e,d+1.86),new A.a(f+1.18,g,d+2.66),7694457)
s=e+0.12
r=d+1.92
q=e+0.78
p=d+2.6
A.m(a,new A.a(f+0.34,s,r),new A.a(f+0.48,q,p),j)
A.m(a,new A.a(f+1.15,s,r),new A.a(f+1.29,q,p),j)
p=e+0.72
A.m(a,new A.a(f+0.52,g,d+1.8),new A.a(f+1.12,p,d+1.94),i)
A.m(a,new A.a(f+0.35,e,d+0.42),new A.a(f+1.95,p,d+0.7),i)
A.m(a,new A.a(f+0.28,p,d+0.34),new A.a(f+2.02,e+0.84,d+0.78),j)
for(g=[f+0.62,f+1.32],s=e+0.25,r=d+0.68,q=e+0.29,p=d+0.72,o=0;o<2;++o){n=g[o]
A.m(a,new A.a(n,s,r),new A.a(n+0.34,q,p),h)}break
case"bedroom":g=e+0.72
s=d+0.38
r=e+0.84
A.m(a,new A.a(f+0.35,g,s),new A.a(f+1.24,r,d+0.86),i)
for(q=f+0.42,p=[q,f+1.08],m=d+0.46,l=d+0.54,o=0;o<2;++o){k=p[o]
A.m(a,new A.a(k,e,m),new A.a(k+0.08,g,l),j)}A.m(a,new A.a(f+0.55,r,d+0.47),new A.a(f+1.05,e+0.96,d+0.78),h)
A.m(a,new A.a(q,e+0.82,d+0.32),new A.a(f+1.18,e+1.58,s),j)
break
case"landing":g=e+0.48
s=e+0.72
A.m(a,new A.a(f+0.64,g,d+0.32),new A.a(f+1.75,s,d+0.82),7694457)
A.m(a,new A.a(f+0.58,s,d+0.26),new A.a(f+1.81,e+0.82,d+0.88),j)
for(s=[f+0.72,f+1.62],r=d+0.4,q=d+0.48,o=0;o<2;++o){k=s[o]
A.m(a,new A.a(k,e,r),new A.a(k+0.08,g,q),i)}break
case"bathroom":g=e+0.48
A.m(a,new A.a(f+1.55,g,d+1.72),new A.a(f+2.12,e+0.6,d+2.16),h)
for(s=[f+1.62,f+2],r=d+1.78,q=d+1.85,o=0;o<2;++o){k=s[o]
A.m(a,new A.a(k,e,r),new A.a(k+0.07,g,q),j)}break
case"spare":g=e+0.74
s=e+0.86
A.m(a,new A.a(f+1.3,g,d+2.3),new A.a(f+2.42,s,d+2.72),j)
for(r=[f+1.4,f+2.3],q=d+2.36,p=d+2.44,o=0;o<2;++o){k=r[o]
A.m(a,new A.a(k,e,q),new A.a(k+0.08,g,p),i)}A.m(a,new A.a(f+1.62,s,d+2.39),new A.a(f+2.1,e+0.98,d+2.63),h)
break}},
j6(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.m(a2,new A.a(a+0.42,a0,a1+3.24),new A.a(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.m(a2,new A.a(b+m,s,r-l),new A.a(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.d.O(n,2)*0.1
A.m(a2,new A.a(k,s+j,r),new A.a(k+0.25,q+j,p),5913386)
A.m(a2,new A.a(k+0.045,o+j,p),new A.a(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.m(a2,new A.a(a+2.98,a0+1.1,a1+2.82),new A.a(a+3.05,a0+1.72,b),c)
s=a+2.72
A.m(a2,new A.a(s,a0+0.82,a1+2.84),new A.a(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.m(a2,new A.a(h,r,q),new A.a(h+0.06,p,b),c)}break
case"cellar":A.m(a2,new A.a(a+2.82,a0,a1+2.72),new A.a(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.d.O(n,2)*0.32
f=s+B.d.a_(n,2)*0.32
A.m(a2,new A.a(g,r,f),new A.a(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.m(a2,new A.a(e,s,r),new A.a(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.m(a2,new A.a(a+0.34,b,a1+2.22),new A.a(a+1.24,a0+1.32,a1+2.28),c)
A.m(a2,new A.a(a+0.48,a0+0.82,a1+2.24),new A.a(a+1.1,b,a1+2.3),d)
break}},
DY(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
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
A.m(a,new A.a(r+0.03,n+0.1,m+0.03),new A.a(p-0.03,d,l-0.03),2367259)
q=m+0.08
o=l-0.08
A.m(a,new A.a(r+0.18,n+0.92,q),new A.a(p-0.18,n+0.98,o),a1)
j=r-0.055
A.m(a,new A.a(j-0.06,n+0.08,m-0.08),new A.a(j,n+1.86,l+0.08),6965557)
A.m(a,new A.a(j-0.075,n+0.18,q),new A.a(j-0.005,d,o),4861989)
for(q=[m+0.2,m+0.63],o=j-0.088,i=n+0.28,h=j-0.006,g=n+0.57,f=0;f<2;++f){e=q[f]
A.m(a,new A.a(o,i,e),new A.a(h,g,e+0.27),5847339)}A.m(a,new A.a(j-0.11,d,m-0.1),new A.a(j+0.01,n+1.84,l+0.1),6965557)
A.m(a,new A.a(j-0.12,n+0.9,m+0.52),new A.a(j-0.08,n+0.99,m+0.61),a2)},
DW(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
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
g=B.c.mv(k/0.18)
f=B.c.b0(1>g?1:g)
e=k/f
g=i-h
d=g/f
c=b1+0.1
for(b=0;b<f;){++b
a=i-b*d
A.m(b2,new A.a(p,c,a),new A.a(o,c+b*e,a+d),b6)}a0=b1+0.08
a1=b1+0.34
A.m(b2,new A.a(p-0.1,a0,h),new A.a(p,a1,i),b0)
A.m(b2,new A.a(o,a0,h),new A.a(o+0.1,a1,i),b0)
a2=o+0.16
a3=o+0.25
a4=b1+0.82
a5=l+0.78
a6=m-0.12
a5=a5<a6?a5:a6
A.m(b2,new A.a(a2,a0,i-0.12),new A.a(a3,a4+0.12,i+0.02),b0)
b1=a5-0.86
if(a0>b1)b1=a0
A.m(b2,new A.a(a2,b1,h-0.02),new A.a(a3,a5,h+0.12),b0)
for(b1=a5-a4,m=a2+0.01,a0=a3-0.01,b=0;b<=5;++b){a7=b/5
a8=i-a7*g
a9=a4+a7*b1
A.m(b2,new A.a(m,a9-0.7,a8-0.025),new A.a(a0,a9,a8+0.025),b7)}A.m(b2,new A.a(a2-0.05,a5-0.08,h-0.08),new A.a(a3+0.05,a5+0.08,h+0.08),b0)},
DZ(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.m||a4===B.l?a3.a:a3.c,a=A.d([],t.l5)
for(s=a2.a,r=a1.aJ(s),q=J.S(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
if(!p.as&&p.aH(s)===a4)a.push(new A.ea(p.ag(s),p.ag(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.ea(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aN([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.I(0,A.d([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.Y(l)
s=A.aN([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.I(0,A.d([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.Y(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.e(l,j)
f=l[j]
if(!(i<r))return A.e(l,i)
e=l[i]
if(!(h<s))return A.e(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.tU(f,e,d,c)))continue
A.FK(a0,a2,a3,a4,f,e,d,c)}A.E_(a0,a2,a3,a4,b,a)},
E_(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tS(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tS(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tS(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tS(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.aR(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.aR(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.aR(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.aR(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.E(a9),o=r.i("l(1)").a(new A.tT(b3)),a9=B.a.gu(a9),r=new A.T(a9,o,r.i("T<1>")),o=b2.c,i=b3!==B.m,e=b3===B.l,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.aR(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.aR(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.aR(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.aR(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.E0(b0,b1,b2,b3,b,p)}},
E0(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.aR(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.aR(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.aR(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.aR(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.aR(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
tS(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.Fz(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aR(a,b,c,d,n,o,g,h,i,j)}},
Fz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.d([new A.fZ(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.d([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.t)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fZ(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fZ(n,j))}h=p}return h},
DS(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.lf.q(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.m(a,new A.a(p-0.025,n,o-0.025),new A.a(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.m(a,new A.a(p-0.14,k,o-0.14),new A.a(p+0.14,n,o+0.14),j)
A.m(a,new A.a(p-0.09,n-0.16,o-0.09),new A.a(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.m(a,new A.a(h-0.24,k,e-0.24),new A.a(h+0.24,s,e+0.24),l)
j=s-0.034
A.m(a,new A.a(h-0.15,j,e-0.15),new A.a(h+0.15,k,e+0.15),l)
A.m(a,new A.a(h-0.055,s-0.048,e-0.055),new A.a(h+0.055,j,e+0.055),l)},
aR(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.m(a,new A.a(r+e,q+g,p),new A.a(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.m(a,new A.a(r+e,q+g,s-i),new A.a(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.m(a,new A.a(s-i,q+g,p+e),new A.a(s,q+h,p+f),j)
return
case 3:A.m(a,new A.a(r,q+g,p+e),new A.a(r+i,q+h,p+f),j)
return}},
m(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
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
d7(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=6.283185307179586/a3,g=b.a,f=b.b,e=f+a1,d=b.c,c=new A.a(g,e,d)
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
a.b5(n,k,i,j,a2,!1)
a.b5(c,c,i,j,a2,!1)
a.b5(b,n,k,b,a2,!1)}},
hd(a,b,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(s=b.a,r=b.b,q=b.c,p=0;p<a3;){o=p/a3*3.141592653589793;++p
n=p/a3*3.141592653589793
for(m=a0*Math.sin(o),l=r+a0*Math.cos(o),k=a0*Math.sin(n),j=r+a0*Math.cos(n),i=0;i<a4;){h=i/a4*3.141592653589793*2;++i
g=i/a4*3.141592653589793*2
f=Math.cos(h)
e=Math.sin(h)
d=Math.cos(g)
c=Math.sin(g)
a.b5(new A.a(s+m*f,l,q+m*e),new A.a(s+m*d,l,q+m*c),new A.a(s+k*d,j,q+k*c),new A.a(s+k*f,j,q+k*e),a1,a2)}}},
zX(a,b,c,d,e){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
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
wW(a,b,c,d,e,f){var s,r,q,p=c*0.5,o=b.a,n=b.b,m=b.c,l=new A.a(o,n+d,m),k=o-p,j=m-p,i=new A.a(k,n,j)
o+=p
s=new A.a(o,n,j)
m+=p
r=new A.a(o,n,m)
q=new A.a(k,n,m)
a.b5(i,s,r,q,e,f)
a.b5(i,s,l,l,e,f)
a.b5(s,r,l,l,e,f)
a.b5(r,q,l,l,e,f)
a.b5(q,i,l,l,e,f)},
Fv(a,b,c,d,e,f,g){var s,r,q,p,o,n
for(s=b.c,r=b.a,q=b.b,p=r+c,o=0;o<f;){n=s+o*d;++o
A.m(a,new A.a(r,q,n),new A.a(p,q+o*e,n+d),g)}},
FK(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.hJ(n).e
a.dI(s.ai(0,o),r.ai(0,o),q.ai(0,o),p.ai(0,o),A.hJ(n).c,(f-e)/m,(a1-a0)/m)
l=A.FL(b,d)
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
default:j=k}A.m(a,o,j,A.f7(A.hJ(n).c,0.68))},
f7(a,b){var s,r=new A.uY(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hx()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hx()
r=r.$1(a&255)
if(typeof r!=="number")return A.vf(r)
return(q<<16|s<<8|r)>>>0},
FL(a,b){var s
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
A.m(a0,new A.a(r+l,s,d),new A.a(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.m(a0,new A.a(l,s,d),new A.a(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.m(a0,new A.a(r+n,s+m,d),new A.a(r+h,j,i),q)
A.m(a0,new A.a(k,s,d),new A.a(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.m(a0,new A.a(r+l,s,k),new A.a(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.m(a0,new A.a(l,s,k),new A.a(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.m(a0,new A.a(r+n,s+m,k),new A.a(r+h,i,d),q)
A.m(a0,new A.a(j,s,k),new A.a(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.m(a0,new A.a(n,s,d+k),new A.a(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.m(a0,new A.a(n,s,k),new A.a(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.m(a0,new A.a(n,s+e,d+m),new A.a(r,j,d+l),q)
A.m(a0,new A.a(n,s,i),new A.a(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.m(a0,new A.a(r,s,d+l),new A.a(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.m(a0,new A.a(r,s,l),new A.a(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.m(a0,new A.a(r,s+e,d+n),new A.a(k,j,d+m),q)
A.m(a0,new A.a(r,s,i),new A.a(k,s+0.05,l),q)
break}if(a4)A.z5(a0,a1,a2,a3,q)
A.DT(a0,a1,a2,a3)},
DT(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.ag(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
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
A.aR(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.l?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.aR(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.l?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.aR(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.l?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.aR(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.l,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.aR(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.aR(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.aR(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
z5(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aH(o),m=d.ag(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.m(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.m(a,new A.a(p,s,o-d.w),new A.a(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.m(a,new A.a(p-d.w,s,o),new A.a(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.m(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.m(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.m(a,new A.a(p,s,o-0.055),new A.a(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.m(a,new A.a(p-0.055,s,o),new A.a(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.m(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break}},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
tU:function tU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tT:function tT(a){this.a=a},
uY:function uY(a){this.a=a},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a,b){this.a=a
this.b=b},
xS(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.d([],b5),b7=t.qP,b8=A.d([],b7),b9=A.d([],t.DZ),c0=t.N
c0=new A.oH(b6,b8,b9,A.o(c0,t.U),A.o(c0,t.T),new A.oJ())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.I(b6,A.d([new A.aZ(n,B.aw,new A.a(4.5,3.9,4),new A.a(0,0,0),A.d([new A.ba("living-north-west",B.m,0.5,0.9,1.2,1.8,!1,!0),new A.ba("living-north-east",B.m,2.7,0.9,1.2,1.8,!1,!0)],s),A.d(["hall-living","kitchen-living"],r),A.d([new A.bh(m,l,new A.a(1,1.95,1),!1,!1,m),new A.bh(k,j,new A.a(3,1.95,3),!1,!1,k)],q),B.bf,"wallpaper-stripes",i,h,B.M),new A.aZ(g,B.aw,new A.a(2.5,3.9,7),new A.a(4.5,0,0),A.d([new A.ba("hall-fanlight",B.m,0.85,3.225,0.8,0.525,!1,!0)],s),A.d(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.d([new A.bh("mantle-hall","the hall mantle",new A.a(1,1.95,3.5),!1,!1,o)],q),A.d([new A.bj(e,e,new A.a(0.2,2.175,0.35)),new A.bj(d,d,new A.a(2.2,2.55,3)),new A.bj(c,c,new A.a(0.4,1.35,4.1)),new A.bj(b,b,new A.a(0.92,0.82,5.55))],p),a,i,h,B.M),new A.aZ(a0,B.aw,new A.a(4.5,3.75,3),new A.a(0,0,4),A.d([new A.ba("kitchen-south",B.l,1.5,1.05,1.2,1.65,!1,!0),new A.ba("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.d(["hall-kitchen","kitchen-living"],r),A.d([new A.bh(a1,"the mantle by the stove",new A.a(0.8,1.8,0.5),!1,!1,a1),new A.bh("mantle-kitchen-second",l,new A.a(2.2,1.8,2),!1,!1,o),new A.bh("mantle-kitchen-third",j,new A.a(3.8,1.8,1.2),!1,!1,o)],q),A.d([new A.bj(a2,a2,new A.a(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.j5),new A.aZ("cellar",B.aw,new A.a(4,3,4),new A.a(1,-3,2),B.bh,A.d(["hall-cellar"],r),B.iO,B.bf,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.aZ("bedroom",B.ax,new A.a(4.5,3.6,4),new A.a(0,4.2,0),A.d([new A.ba("bedroom-north-west",B.m,0.7,1.05,1.1,1.65,!1,!0),new A.ba("bedroom-north-east",B.m,2.7,1.05,1,1.65,!1,!0)],s),A.d(["landing-bedroom"],r),A.d([new A.bh(a3,"the bedroom mantle",new A.a(1,1.95,1),!1,!1,a3),new A.bh("mantle-bedroom-bedside","the bedside mantle",new A.a(3.5,1.5,3),!1,!1,o)],q),A.d([new A.bj(a4,a4,new A.a(2.2,1.125,2.5)),new A.bj(a5,a5,new A.a(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.aZ(a6,B.ax,new A.a(2.5,3.6,3),new A.a(4.5,4.2,0),B.bh,A.d(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.d([new A.bh("mantle-landing","the landing mantle",new A.a(1,1.8,1.5),!1,!1,o)],q),B.bf,a,i,h,B.M),new A.aZ(a8,B.ax,new A.a(2.5,3.6,2.5),new A.a(4.5,4.2,3),A.d([new A.ba("bathroom-east",B.v,0.9,1.5,0.7,1.5,!0,!0)],s),A.d([a7],r),A.d([new A.bh("mantle-bathroom","the bathroom mantle",new A.a(1.5,1.8,1),!1,!1,o)],q),A.d([new A.bj(a9,a9,new A.a(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.aZ(b0,B.ax,new A.a(4.5,3.15,3),new A.a(0,4.2,4),A.d([new A.ba("spare-south",B.l,1.8,1.05,0.9,1.35,!1,!0)],s),A.d(["landing-spare"],r),A.d([new A.bh("mantle-spare","the broken mantle",new A.a(2,1.95,1),!1,!0,o)],q),A.d([new A.bj(b1,b1,new A.a(0.5,1.8,0.3)),new A.bj(b2,b2,new A.a(3.7,2.1,2.7)),new A.bj(b3,b3,new A.a(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.I(b8,A.d([A.e2(g,"outside","kit-front-door-recessed",!0,B.m,B.l,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.e2(g,n,b4,!1,B.G,B.v,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.e2(g,a0,b4,!1,B.G,B.v,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.e2(a0,n,b4,!1,B.m,B.l,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.e2(g,"cellar","kit-cellar-door-grille",!1,B.l,B.v,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.e2(g,a6,o,!1,B.v,B.v,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.e2(a6,"bedroom",b4,!1,B.G,B.v,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.e2(a6,a8,b4,!1,B.l,B.m,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.e2(a6,b0,b4,!1,B.l,B.m,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dx("hall-stairs",f,B.iE,new A.a(5,0,2.8),new A.a(6.5,6.3,6),new A.a(5.75,2.475,5.8),new A.a(5.75,6.675,2.2)))
c0.ig()
c0.ih()
c0.iU()
b5=b6.length
if(b5!==8)A.j(A.k("expected eight rooms, got "+b5))
b5=c0.gmK()
if(b5!==9)A.j(A.k("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaQ(b9).c.length!==3||B.a.gW(B.a.gaQ(b9).c)!==9.45)A.j(A.k("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.j(A.k("expected nine physical portals"))
c0.jO()
c0.jM()
return c0},
oH:function oH(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oZ:function oZ(a){this.a=a},
p_:function p_(){},
p0:function p0(){},
oY:function oY(){},
p1:function p1(a){this.a=a},
p2:function p2(){},
mn(a,b,c){var s=a.aG(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mo(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.ES(a,s,c,d)},
ES(a,b,c,d){var s,r,q,p,o=a.aG(b),n=d.ap(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tZ(a,b,o,B.m,r,q,p,c,n,m))return!0
if(A.tZ(a,b,o,B.l,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tZ(a,b,o,B.G,s,r,q,c,n,m))return!0
if(A.tZ(a,b,o,B.v,s+o.a,r,q,c,n,m))return!0
return!1},
tZ(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.ai(0,a6.ao(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.m||a1===B.l
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aJ(m),k=J.S(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aH(m)===a1){g=q.ag(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
xh(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mn(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.t)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.a(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gau()
f=a.b
if(Math.acos(B.c.E(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mo(a0,a1,a.a,new A.a(h,g,i)))continue
m=d
l=j}}return l},
Ai(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mn(b,j,4.5):4.5
for(s=b.aJ(c),r=J.S(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.m3(c,o)
m=a.a
l=new A.a(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zs(l,k,a,i,0.5236)||k>=q)continue
if(!A.mo(b,c,a.a,n))continue
q=k
p=o}return p},
Aj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mn(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
l=A.FM(b,h,m)
k=a.a
j=new A.a(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zs(j,i,a,s,0.5236)||i>=p)continue
if(!A.mo(b,c,a.a,l))continue
p=i
o=m}return o},
zs(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.E(a.gau().c1(c.b),-1,1))<=e},
FM(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.a(q.a+r,p,q.c)
break
case 2:q=new A.a(q.a+r,p,q.c+s.c)
break
case 1:q=new A.a(q.a+s.a,p,q.c+r)
break
case 3:q=new A.a(q.a,p,q.c+r)
break
default:q=null}return q},
nY:function nY(){this.a=null
this.b=0},
rl:function rl(){},
rm:function rm(){},
BY(a){var s=A.jc(a,"inventory asset"),r=A.dI(s,"id"),q=A.dI(s,"kind")
A.dI(s,"source")
A.dI(s,"proxy")
A.dI(s,"pivot")
s=A.jc(s.h(0,"bounds"),"inventory bounds")
return new A.cV(r,q,new A.pa(A.mm(s.h(0,"min"),"bounds.min"),A.mm(s.h(0,"max"),"bounds.max")))},
BZ(a){var s,r,q,p,o,n,m,l="stateKey",k=A.jc(a,"inventory placement"),j=A.jc(k.h(0,"visibility"),"placement visibility"),i=A.jc(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dI(k,"id"),f=A.dI(k,"roomId"),e=A.dI(k,"assetId")
A.dI(k,"role")
s=typeof k.h(0,"socket")=="string"?A.r(k.h(0,"socket")):null
k=A.jc(k.h(0,"transform"),"inventory transform")
r=A.mm(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.fK)
q=A.mm(k.h(0,"position"),"transform.position")
p=A.mm(k.h(0,"rotation"),"transform.rotation")
A.dI(j,"layer")
if(typeof j.h(0,l)=="string")A.r(j.h(0,l))
o=J.ae(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.r(i.h(0,"focusId")):null
m=t.P.b(h)?A.F6(h,"radius"):0
return new A.cx(g,f,e,s,new A.pc(q,p,r),o,n,m)},
jc(a,b){return t.P.b(a)?a:A.dF(b+" is not an object")},
dI(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dF(b+" is not a string")},
F6(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dF(b+" is not finite")},
mm(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.v4())}else s=!0
if(s)return A.dF(b+" is not a finite vec3")
s=J.aC(a)
return new A.a(A.ad(s.h(a,0)),A.ad(s.h(a,1)),A.ad(s.h(a,2)))},
dF(a){return A.j(A.a4(a,null,null))},
oM:function oM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oP:function oP(a){this.a=a},
oN:function oN(a){this.a=a},
oO:function oO(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.f=c},
cx:function cx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
pc:function pc(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function pa(a,b){this.a=a
this.b=b},
v4:function v4(){},
pb:function pb(a){this.a=a},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oQ:function oQ(a){this.a=a},
oR:function oR(a){this.a=a},
e2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.by(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hD:function hD(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
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
df:function df(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c,d,e,f,g){var _=this
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
BS(a){return A.BR(a)},
BR(a){var s,r,q,p,o,n,m=A.zz(a,"sound emitter"),l=t.N,k=A.o(l,l)
for(s=A.zz(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.c(B.fF)
k.k(0,r.a,q)}s=A.x4(m,"id")
r=A.x4(m,"roomId")
p=A.x4(m,"placementId")
o=A.FI(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h7("gain is not a number")
return new A.cU(s,r,p,o,n,A.b4(k,l,l))},
zz(a,b){return t.P.b(a)?a:A.h7(b+" is not an object")},
x4(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h7(b+" is not a string")},
FI(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.v3())}else s=!0
if(s)throw A.c(A.a4(b+" must be a numeric vec3",null,null))
s=J.aC(a)
return new A.a(A.ad(s.h(a,0)),A.ad(s.h(a,1)),A.ad(s.h(a,2)))},
h7(a){return A.j(A.a4(a,null,null))},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
oU:function oU(a){this.a=a},
oV:function oV(a){this.a=a},
oW:function oW(){},
cU:function cU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oI:function oI(){this.b=this.a=null},
eA:function eA(a){this.a=a},
oS:function oS(){this.b=this.a=null},
cT:function cT(a,b){this.a=a
this.b=b},
v3:function v3(){},
xT(a,b,c,d,e,f){var s=t.N
return new A.oX(e,f,c,a,A.b4(A.aM(d,s,s),s,s),A.aj(b,s))},
xU(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.o(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.i3(p.ax,p.ay))}s=A.o(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.o(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.hT(j.d,j.r))}return A.xT(a.r.b,B.o,i,B.d6,h,s)},
BT(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.js
r=a3.h(0,"mantleHistory")
if(r==null)r=B.iW
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aK(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.fD)
p=t.N
o=A.o(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.co)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bH(j)||!A.bH(i))A.j(B.co)
o.k(0,k,new A.i3(j,i))}h=A.o(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bH(l.b))throw A.c(B.fA)
h.k(0,k,A.R(l.b))}g=A.o(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.cm)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bH(f)||!A.bH(e))A.j(B.cm)
g.k(0,k,new A.hT(f,e))}d=A.o(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.h9)
d.k(0,n,A.r(p.b))}c=A.d([],t.s)
for(q=J.S(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.c(B.fb)
B.a.l(c,b)}return A.xT(a2,c,g,d,o,h)},
x_(a,b){return a.a.a===b.a&&a.a8(0,b.gaq(b))},
oX:function oX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i3:function i3(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
hJ(a){var s=B.bo.h(0,a)
if(s==null)throw A.c(A.k("Unknown house surface material: "+a))
return s},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bz(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hS(e,A.E(e).c)
q=new A.ec()
q.bN((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hy(a,q,2,r,1+s,A.aN(["time"],t.N))
break
case 3:A.hy(a,q,3,r,1+s,A.aN(["place"],t.N))
break
case 4:A.hy(a,q,4,r,2+s,p)
A.Bv(a,q,4)
break
case 5:A.hy(a,q,5,r,s,p)
A.Bt(a,q,5)
break
case 6:A.hy(a,q,6,r,s,p)
A.Bu(a,q)
A.By(a,q,6)
break
case 7:A.Bw(a,q,7)
break
default:if(s>0)A.hy(a,q,b,r,s,p)}},
Bs(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Bx(a,b,c))return!1
return!0},
hy(a,b,c,d,e,f){var s,r,q,p,o=A.d([],t.r)
for(s=a.b,s=new A.ai(s,s.r,s.e,A.p(s).i("ai<2>"));s.m();){r=s.d
if(A.Bs(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cR(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.xM(a,b,o[p],f)}},
xM(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gW(o).a,n,n)
if(d==null)s=A.d(B.A.slice(0),t.s)
else{n=t.vY
s=A.J(new A.H(B.A,t.Ag.a(new A.nT(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aO(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.ea(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aO(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.k(0,r,p[n])}a.dn(c.a,m,B.a.gW(o).b)},
Bv(a,b,c){var s=A.xN(a,b,c)
if(!a.bX(s))return
a.el(c,t.G.a(s),0,B.b5,null)},
xN(a,b,c){var s,r,q,p,o,n=t.N,m=A.o(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.A[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aO(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.k(0,r,q[o])}}return m},
Bt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.r)
for(s=a.b,s=new A.ai(s,s.r,s.e,A.p(s).i("ai<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cR(i,b)
s=i.length
if(0>=s)return A.e(i,0)
q=i[0]
if(1>=s)return A.e(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aM(B.a.gW(i).a,s,s)
r=p.c
n=A.aM(B.a.gW(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.A[m]
k=o.h(0,l)
j=s.ea(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aO(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.k(0,l,j[k])}}a.dn(q.a,o,B.a.gW(i).b)
a.dn(p.a,n,B.a.gW(r).b)},
Bu(a,b){var s,r,q=A.d([],t.r)
for(s=a.b,r=new A.ai(s,s.r,s.e,A.p(s).i("ai<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aO(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.a6(0,q[r].a)},
By(a,b,c){var s,r,q=A.d([],t.r)
for(s=a.b,s=new A.ai(s,s.r,s.e,A.p(s).i("ai<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aO(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.xM(a,b,q[s],null)},
Bw(a,b,c){var s=c+1,r=A.xN(a,b,s)
if(!a.bX(r))return
a.el(s,t.G.a(r),0,B.b5,null)},
Bx(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gW(b.c).c===B.aA}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gW(b.c).c===B.aA}if(c===21)return b.e
return!1},
nT:function nT(a){this.a=a},
CV(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=0;s<5;++s){r=B.A[s]
q=a.h(0,r)
p=A.ap(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rX(n)},
pw(a,b,c){var s,r,q,p=t.z
p=A.o(p,p)
for(s=0;s<5;++s){r=B.A[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.ke(A.b4(p,q,q),b,c)},
y5(a){var s=t.N
return A.pw(t.P.a(a.h(0,"fields")).bF(0,new A.px(),s,s),A.ad(a.h(0,"shakiness")),A.BE(B.iI,A.r(a.h(0,"hand")),t.qX))},
BD(a){var s,r,q,p,o=a.h(0,"margin"),n=A.f(a.h(0,"ordinal")),m=A.f(a.h(0,"day")),l=A.d([],t.Bv)
for(s=J.S(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.y5(r.a(s.gn())))
s=A.aA(a.h(0,"corroborator"))
q=A.R(a.h(0,"locked"))
p=A.zd(a.h(0,"lastReadDay"))
return new A.bS(n,m,l,s,q,p,o==null?null:A.y5(r.a(o)))},
dV:function dV(a,b){this.a=a
this.b=b},
rX:function rX(a){this.a=a},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(){},
py:function py(a){this.a=a},
bS:function bS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y2(a){return new A.pf(a,A.o(t.S,t.g),A.a0(t.N),A.d([],t.t))},
C3(a,b){var s,r,q,p,o=A.y2(a)
o.e=A.f(b.h(0,"nextOrdinal"))
o.f=A.f(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.AR(s.a(b.h(0,"tags")),t.N))
for(s=J.S(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.BD(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pf:function pf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pm:function pm(a,b){this.a=a
this.b=b},
na:function na(){},
hp:function hp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g},
nb:function nb(){},
pr:function pr(){},
pq:function pq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
q9:function q9(){},
q8:function q8(a,b,c){this.b=a
this.c=b
this.d=c},
qa:function qa(){},
Ce(a,b,c){return B.kq},
kt:function kt(a,b){this.a=a
this.b=b},
qb:function qb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qc:function qc(){},
kd:function kd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qi:function qi(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yj(a){if(!isFinite(0))A.j(A.ah(0,"interpolation",null))
return new A.qv(a)},
kG:function kG(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
qv:function qv(a){this.a=a},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
yi(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hS(c,A.E(c).c)
r=A.J(r,A.p(r).c)
B.a.Y(r)
s=t.N
r=A.aj(r,s)
r=new A.qu(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.b4(l,s,t.X))
r.i3(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Cy(a,b,c,d,e){var s=A.mc("RENDERER_SHA"),r=A.mc("GAME_SHA"),q=A.mc("DART_SDK_VERSION")
return A.yi(a,"8f974b6767f6-f8ff05f01916-dirty",b,!1,d,r,A.mc("LOCKFILE_SHA256"),e,A.mc("PROJECT_VERSION"),s,q,null)},
mc(a){var s=B.jk.h(0,a)
return s.length===0?null:s},
qu:function qu(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qw:function qw(a){var _=this
_.a=a
_.d=_.c=_.b=0},
rg:function rg(a){this.a=a},
a7(a,b,c,d,e,f,g,h,i,j){return new A.e4(e,g,a,f,i,h,j,c,c,b)},
cF:function cF(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
e4:function e4(a,b,c,d,e,f,g,h,i,j){var _=this
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
rh:function rh(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rk:function rk(a){this.a=a},
rj:function rj(a){this.a=a},
ri:function ri(a){this.a=a},
xJ(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.j(A.a4("saved day-loop resources must not be negative",null,null))
return new A.nL(c,g,b,a,e,d===!0,s)},
Bm(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.fr)
s=A.d([],t.El)
for(r=J.S(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.c(B.fE)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aK(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.fn)
f=A.bu(new A.H(B.cS,q.a(new A.nM(h)),p),o)
e=A.bu(new A.H(B.cY,n.a(new A.nN(g)),m),l)
if(f==null||e==null)throw A.c(B.h4)
B.a.l(s,new A.fP(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aK(d)||!A.aK(c)||!A.aK(b)||!A.bH(a))throw A.c(B.fM)
return A.xJ(c,d,a1,a,b,s,a3)},
bN:function bN(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
nL:function nL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nM:function nM(a){this.a=a},
nN:function nN(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
t1:function t1(a,b){this.b=a
this.c=b},
eU:function eU(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
p3:function p3(a){this.c=a},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(){},
wM(a){var s,r,q,p=A.d([],t.s),o=A.a0(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.c(B.h1)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qz:function qz(){},
cY:function cY(){},
qA:function qA(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
Ez(a){var s,r=A.d([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uH(s).$0())
return r},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rY:function rY(a){this.b=a},
uH:function uH(a){this.a=a},
pO(a,b,c){var s,r=t.N,q=A.o(r,r)
if(a!=null)q.I(0,a)
s=A.o(r,r)
if(b!=null)s.I(0,b)
r=A.o(r,t.Fr)
if(c!=null)r.I(0,c)
return new A.pN(q,s,r)},
Ca(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aK(s)||s!==1)return l
r=A.yb(a.h(0,"choices"))
q=A.yb(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.o(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.BJ(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pO(r,q,p)},
yb(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.o(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.r(q.b))}return r},
BJ(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aK(r)||r<1||!A.aK(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cO(s,r,q,p)},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
pP:function pP(){},
pQ:function pQ(){},
pR:function pR(){},
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
q6:function q6(a){this.a=a},
q7:function q7(a){this.a=a},
fR(a){var s,r,q=A.o(t.N,t.z)
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
eS:function eS(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b){this.a=a
this.b=b},
lc:function lc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rt:function rt(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
ru:function ru(){},
rv:function rv(){},
ji:function ji(a){this.a=a},
w1:function w1(a,b,c){this.b=a
this.e=b
this.f=c},
AY(a){var s,r,q,p
if(!t.f.b(a)||!J.ae(a.h(0,"version"),1))throw A.c(B.fe)
s=new A.mw()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wA(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dJ(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aW(B.bk,new A.mu(a),new A.mv()))},
cM:function cM(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mw:function mw(){},
mu:function mu(a){this.a=a},
mv:function mv(){},
mH:function mH(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mJ:function mJ(a){this.a=a},
mI:function mI(a,b){this.a=a
this.b=b},
B3(a){var s
if(!t.f.b(a)||!J.ae(a.h(0,"version"),1))throw A.c(B.fJ)
s=new A.mU()
return new A.dK(s.$1$2(B.bi,a.h(0,"output"),t.xs),s.$1$2(B.bc,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bb,a.h(0,"reverb"),t.gc),s.$1$2(B.b9,a.h(0,"ducking"),t.ul))},
cu:function cu(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mU:function mU(){},
mV:function mV(a,b){this.a=a
this.b=b},
mW:function mW(a){this.a=a},
nd:function nd(a){this.a=a
this.b=null},
nh(a,b,c){var s
b.C()
if(c<1||c>6)throw A.c(A.ah(c,"level","must be between 1 and 6"))
s=A.B(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nf(s,b)
return s},
dO(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.B(a,"button","brush-button brush-state-"+s.b,r)
A.nf(q,b)
q.type="button"
q.disabled=s===B.ar
q.addEventListener("click",A.X(new A.ng(c)))
return q},
B9(a,b,c,d){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.ar
A.nf(s,b)
s.addEventListener("change",A.X(new A.nk(d,s)))
return s},
B8(a,b,c,d,e,f){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.ar
A.nf(s,b)
s.addEventListener("input",A.X(new A.nj(s,e)))
return s},
w3(a,b){var s=B.b.hM(A.r(a.className),A.yh("\\s+")),r=A.E(s),q=r.i("H<1>"),p=A.J(new A.H(s,r.i("l(1)").a(new A.ni()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.Z(p," ")
a.setAttribute("data-brush-state",s)},
nf(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gjR())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.ar)a.setAttribute("aria-disabled","true")},
ng:function ng(a){this.a=a},
nk:function nk(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
ni:function ni(){},
dM:function dM(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nm:function nm(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
nn:function nn(a){this.a=a},
xH(a){var s=!1
if(a.length!==0)if(!B.dy.q(0,a))s=B.ln.q(0,a)||B.le.q(0,a)||B.lm.q(0,a)||!B.b.V(a,"Mouse")
return s},
Ei(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.K(a,A.p(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ap(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
EY(a){var s,r,q=A.o(t.N,t.a),p=a==null?null:new A.K(a,A.p(a).i("K<1,2>"))
p=J.S(p==null?A.d([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.d([r.b],s))}return q},
ft(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fD(B.jh,s,r)
if(b!=null)q.I(0,b)
q.I(0,A.EY(a))
s=new A.fs(g,d,h,e,f,c,A.b4(A.Ei(q),s,r))
s.C()
return s},
Bj(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.c(B.cn)
s=a.h(0,"version")
r=J.el(s)
if(!r.a5(s,1)&&!r.a5(s,2))throw A.c(B.cn)
q=A.o(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.c(B.fz)
if(typeof m=="string")q.k(0,n,A.d([m],r))
else if(p.b(m)&&J.AS(m,new A.nA())){o=A.d([],r)
for(l=J.S(m);l.m();)o.push(A.r(l.gn()))
q.k(0,n,o)}else throw A.c(B.fi)}j=A.ad(a.h(0,"horizontalSensitivity"))
r=A.ad(a.h(0,"verticalSensitivity"))
p=A.R(a.h(0,"invertX"))
o=A.R(a.h(0,"invertY"))
return A.ft(null,q,A.R(a.h(0,"holdToInteract")),j,p,o,2,r)},
wC(a){var s,r,q,p=t.N,o=A.o(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
wV(a,b){var s,r,q,p=A.d([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
x8(a,b){var s,r,q,p=A.d([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fs:function fs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nC:function nC(){},
nB:function nB(a){this.a=a},
nD:function nD(){},
nE:function nE(){},
nF:function nF(){},
nA:function nA(){},
dL:function dL(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.c=b},
jB:function jB(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Bi(a){var s=t.N,r=t.m
r=new A.hv(A.ft(null,null,!1,1,!1,!1,2,1),A.o(s,r),A.o(s,r),A.o(s,r),a,A.b(a.createElement("div")))
r.aS(a)
r.hX(a)
return r},
hv:function hv(a,b,c,d,e,f){var _=this
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
ny:function ny(a,b){this.a=a
this.b=b},
nz:function nz(a){this.a=a},
nx:function nx(a,b){this.a=a
this.b=b},
nv:function nv(a,b){this.a=a
this.b=b},
nw:function nw(a,b){this.a=a
this.b=b},
Bk(a){var s=new A.nG(a,A.b(a.createElement("div")))
s.aS(a)
s.hY(a)
return s},
nG:function nG(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nH:function nH(a){this.a=a},
Bq(a){var s=new A.nP(A.B(a,"div","door",null))
s.i_(a)
return s},
xK(a){var s,r,q
if(a.length===0)return""
s=A.d([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.Z(s,"; ")+"."},
nP:function nP(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nQ:function nQ(a){this.a=a},
nR:function nR(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
BA(a){var s=new A.nV(a,A.b(a.createElement("div")))
s.aS(a)
s.i0(a)
return s},
nV:function nV(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nW:function nW(a){this.a=a},
om:function om(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
on:function on(){},
BM(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oo(a.b===B.cv,a.c===B.cz,s,a.e===B.cw,a.f===B.ct,a.r===B.cB,a.w,a.x)},
oo:function oo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
w4(a,b,c,d,e,f,g,h,i,j){return new A.fz(e,g,j,f,b,h,d,c,a,i)},
BN(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat"
if(!t.f.b(a)||!J.ae(a.h(0,"version"),1))throw A.c(B.fR)
s=new A.op(a)
r=a.h(0,"contextualReminders")
if(!A.bH(r))throw A.c(B.h2)
q=!A.bH(a.h(0,i))||A.R(a.h(0,i))
p=s.$1$2("interactionMode",B.bj,t.bK)
o=s.$1$2("promptDensity",B.bn,t.dn)
n=s.$1$2("textPacing",B.bl,t.j_)
m=s.$1$2("journalLayout",B.bd,t.gm)
l=s.$1$2("confirmations",B.b7,t.aJ)
k=s.$1$2("saveFeedback",B.be,t.mx)
j=s.$1$2("focusLossBehavior",B.aC,t.x)
return A.w4(typeof a.h(0,h)=="string"?s.$1$2(h,B.ba,t.vS):B.b_,l,r,j,p,m,o,k,q,n)},
dk:function dk(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c,d,e,f,g,h,i,j){var _=this
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
op:function op(a){this.a=a},
oq:function oq(a,b){this.a=a
this.b=b},
or:function or(a){this.a=a},
xR(a){var s
if(!t.f.b(a)||!J.ae(a.h(0,"version"),1))throw A.c(B.fI)
s=new A.dU(1,B.a.aW(B.cT,new A.oB(a),new A.oC()),A.r(a.h(0,"renderScale")),A.R(a.h(0,"dynamicResolution")),A.r(a.h(0,"frameTarget")),A.r(a.h(0,"antialiasing")),A.r(a.h(0,"textureQuality")))
s.C()
return s},
k0(a,b){var s=b==null?B.b4:b
return new A.oD(s,a==null?B.b4:a)},
Ad(a,b){var s,r,q
a.C()
s=A.d([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dl(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dl("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fv(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cK&&b.a<2){q=q.fw(B.b3)
B.a.l(s,"High preset was reduced to Standard")}return new A.ow(q,A.aj(s,t.N))},
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
oB:function oB(a){this.a=a},
oC:function oC(){},
oD:function oD(a,b){this.a=a
this.b=b},
ov:function ov(a,b){this.a=a
this.b=b},
ow:function ow(a,b){this.a=a
this.b=b},
BP(a){var s=new A.hH(A.o(t.N,t.m),B.b4,a,A.b(a.createElement("div")))
s.aS(a)
s.i1(a)
return s},
hH:function hH(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
oy:function oy(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
oE:function oE(){this.c=0},
BQ(a){var s=new A.oF(a,A.b(a.createElement("div")))
s.aS(a)
s.i2(a)
return s},
oF:function oF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oG:function oG(a){this.a=a},
pg:function pg(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
ph:function ph(a){this.a=a},
pi:function pi(a){this.a=a},
pj:function pj(a,b,c){this.a=a
this.b=b
this.c=c},
pk:function pk(){},
pl:function pl(){},
cW:function cW(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pW:function pW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
B(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zl(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.d([],t.sL)
for(s=t.m,r=0;r<A.f(p.length);++r){q=A.F(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i2:function i2(){},
bi:function bi(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(){},
q2:function q2(){},
bW:function bW(a,b,c){this.a=a
this.c=b
this.d=c},
q0:function q0(a){this.a=a},
q3:function q3(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
q4:function q4(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
q5:function q5(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
qh:function qh(a){this.a=a
this.b=null},
CB(a){var s=new A.qH(a,A.b(a.createElement("div")))
s.aS(a)
s.i4(a)
return s},
qH:function qH(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qI:function qI(a,b){this.a=a
this.b=b},
qJ:function qJ(a){this.a=a},
kL(a,b){var s=t.N,r=t.m
r=new A.fO(b,A.o(s,r),A.o(s,r),A.o(s,t.rf),A.o(s,r),$.vY(),B.ao,A.o(s,r),A.o(s,r),B.aS,A.o(s,r),a,A.b(a.createElement("div")))
r.aS(a)
r.i5(a,b)
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
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
r8:function r8(a,b){this.a=a
this.b=b},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
r_:function r_(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
qZ:function qZ(a){this.a=a},
r1:function r1(a){this.a=a},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b){this.a=a
this.b=b},
r3:function r3(a,b){this.a=a
this.b=b},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
qW:function qW(a){this.a=a},
qX:function qX(a){this.a=a},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
qN:function qN(a){this.a=a},
qO:function qO(a){this.a=a},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rc(a){return B.a.aW(B.C,new A.rd(a),new A.re(a))},
CC(){var s,r,q=A.o(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
dv(a,b){var s=t.z
s=A.fD(A.CC(),s,s)
if(a!=null)s.I(0,a)
s=new A.rb(b,A.b4(s,t.N,t.K))
s.i6(a,b)
return s},
yn(a){var s,r=t.f
if(!r.b(a)||!J.ae(a.h(0,"version"),1))throw A.c(B.h_)
s=a.h(0,"values")
if(!r.b(s))throw A.c(B.fq)
return A.dv(A.aM(s,t.N,t.K),A.f(a.h(0,"version")))},
bA:function bA(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
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
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rb:function rb(a,b){this.a=a
this.b=b},
wj(a,b){var s=b==null?A.dv(null,1):b
return new A.rf(s,a==null?A.dv(null,1):a)},
CD(a,b){var s,r,q,p,o,n,m,l=A.o(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eF(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cK(r)
J.bt(l,s.a,r)}catch(n){if(!(A.ao(n) instanceof A.G))throw n}}m=A.dv(l,1)
return A.wj(m,m)},
rf:function rf(a,b){this.a=a
this.b=b},
CE(a){var s=new A.rn(a,A.b(a.createElement("div")))
s.aS(a)
s.i7(a)
return s},
rn:function rn(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ro:function ro(a,b,c){this.a=a
this.b=b
this.c=c},
B0(a){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.Fg)
for(s=a.d,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cs(p+m+":"+k,m,l.a,l.b,j))}}B.a.T(i,new A.mF())
return new A.mE(A.aj(i,t.bC),A.a0(t.N))},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mE:function mE(a,b){this.a=a
this.b=b},
mG:function mG(){},
mF:function mF(){},
CU(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mL
s=t.L
r=A.o(s,t.q1)
q=A.p(a).i("aa<1>")
p=A.J(new A.aa(a,q),q.i("n.E"))
B.a.Y(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b9(new A.bn(B.mt,k+" has an out-of-range authored day "+h+"."))
g=A.CT(k,h,i.b,m)
if(g instanceof A.b9)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bO(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.o(a,q)
for(o=a0.ax,o=new A.ai(o,o.r,o.e,A.p(o).i("ai<2>"));o.m();){n=o.d
J.hn(e.cd(n.b,new A.rR()),n)}o=A.b4(a0.at,a,t.sy)
q=A.o(a,q)
for(n=new A.K(e,e.$ti.i("K<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.ap(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.la(new A.l9(r,A.a0(a),A.a0(s),o,q,A.d([],t.Dc),B.a3,A.pO(b,b,b)))},
CT(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.o(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cQ[p]
n=o.b
m=n+"."
l=A.d([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.V(h,m))continue
g=A.ds(B.b.b1(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b9(new A.bn(B.mu,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cX
B.a.l(l,new A.c0(g,i.b,f))}if(l.length===0)continue
B.a.T(l,new A.rO())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b9(new A.bn(B.dR,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b9(new A.bn(B.dR,a+" day "+s+" has no authored tiers."))
return new A.lF(c)},
l9:function l9(a,b,c,d,e,f,g,h){var _=this
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
la:function la(a){this.a=a},
lF:function lF(a){this.a=a},
G5(a){var s,r,q,p=A.a0(t.N)
for(s=new A.K(a,A.p(a).i("K<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaB(),q=q.gu(q);q.m();)if(q.gn().ga2().M(0,new A.vd())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.Y(s)
return s},
G4(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.ap(b,!0,s)
B.a.Y(r)
q=new A.ec()
q.bN((a^913741)>>>0)
p=q.aO(4)
if(!(p>=0&&p<4))return A.e(B.cP,p)
o=B.cP[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.ap(r,!0,s)
B.a.cR(m,q)
s=A.kU(m,0,A.fa(n,"count",t.S),A.E(m).c).bJ(0)
B.a.Y(s)
return s},
vd:function vd(){},
yz(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aK(r)||!A.aK(q)||!A.aK(p)||r<1||q<0||q>23||p<0)return null
return new A.bO(s,r,q,p)},
CS(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a0(t.N)
for(s=t.j,q=J.S(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a0(t.L)
for(s=J.S(s.a(a.h(0,j)));s.m();){n=A.yz(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.B_(m)
if(!s&&l==null)return i
return new A.lb(r,o,l)},
B_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yz(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aK(p))if(!(p<0))if(A.bH(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bu(new A.H(B.cQ,t.qR.a(new A.mB(r)),t.cE),t.hF)
j=A.bu(new A.H(B.jd,t.da.a(new A.mC(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bu(new A.H(B.ik,t.kr.a(new A.mD(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jk(s,k,j,p,i,n,A.aA(m))},
bK:function bK(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d3:function d3(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(){},
jk:function jk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mB:function mB(a){this.a=a},
mC:function mC(a){this.a=a},
mD:function mD(a){this.a=a},
l8:function l8(a,b,c,d){var _=this
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
l7:function l7(a){this.a=a},
l5:function l5(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
Fc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jg())return f
n=A.e7().gb_()
m=n.h(0,"captureSeed")
l=A.ds(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.ds(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eF(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aE(s,f)
if(t.f.b(q)){m=t.N
p=A.o(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.lg.q(0,o.b))return f
J.bt(p,A.r(o.a),A.r(o.b))}r=p}else return f}catch(g){if(A.ao(g) instanceof A.G)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.ll.q(0,i))return f
if(h!=null&&!B.lj.q(0,h))return f
return new A.t7(l,k,j,h,r)},
Fd(){var s,r,q,p=A.e7().gb_().h(0,"cameraProfile")
A:{if("wide"===p){s=B.ez
break A}if("intimate"===p){s=B.eB
break A}s=B.eA
break A}r=A.e7().gb_().h(0,"cameraFov")
q=A.eF(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fm(B.c.E(q,35,100)*3.141592653589793/180,s.b,s.c)},
jd(a){var s=$.bc
if(s===a&&B.b.q(A.r(a.b.className),"open"))return
if(s!=null)s.a7()
$.bc=a
if(a===$.cp.j())$.hl().fT("gameplay.viewport")
else $.hl().m_(A.zA(a))
s=$.ac.j()
s.ay=!1
s.b8()
$.ei=0
a.bG()},
wR(a,b,c){var s,r,q
$.je=!0
s=$.bc
if(s!=null)s.a7()
$.bc=a
s=$.hl()
if(s.a.a.length===0)s.fT(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dq(b,B.Y,c))
q=s.a
s.a=new A.e0(r,q.b,q.c)
s.iG(b)
s=$.ac.j()
s.ay=!1
s.b8()
$.ei=0
a.bG()
$.je=!1},
dH(a){var s,r,q,p,o,n,m,l=null
if($.je)return
$.je=!0
a.a7()
$.bc=null
s=$.hl().k0()
$.je=!1
r=s.a
if(r===B.dl){$.ei=0
r=$.ac.j()
r.b8()
r.ay=!0
q=A.F(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dk)return
r=s.c.a
r=r.length===0?l:B.a.gW(r)
p=r==null?l:r.a
A:{if(B.bs===p){r=$.cp.j()
break A}if(B.da===p){r=$.h6.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bc=r
n=$.ac.j()
n.ay=!1
n.b8()
$.ei=0
r.bG()
m=o==null?l:A.F(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jf(a){if($.bc===a&&B.b.q(A.r(a.b.className),"open"))a.a7()
else A.jd(a)},
hb(a){var s
if($.je)return
if($.bc===a)$.bc=null
if(a===$.cp.j())$.hl().ce()
else $.hl().kY(A.zA(a))
$.ei=0
s=$.ac.j()
s.b8()
s.ay=!0},
zA(a){if(a===$.cp.j())return B.db
if(a===$.h6.j())return B.Y
if(a instanceof A.fO)return B.Y
if(a instanceof A.hH)return B.Y
if(a instanceof A.hv)return B.Y
if(a===$.j2.j())return B.ka
if(a===$.m6.j())return B.kb
if(a===$.j1.j())return B.kc
if(a===$.m4.j())return B.Y
if(a===$.j_.j())return B.ke
return B.kd},
mb(a,b){var s
a.slP(new A.u5())
a.slR(new A.u6())
a.slQ(new A.u7())
a.slL(new A.ud())
a.slO(new A.ue())
a.slZ(new A.uf())
a.slU(new A.ug())
a.slT(new A.uh())
a.sb4(b?new A.ui(a):new A.uj(a))
a.saZ(b?new A.uk(a):new A.u8(a))
s=a.f
if(s===B.H)a.slC(new A.u9())
if(s===B.a_)a.slM(new A.ua())
if(s===B.I){a.slB(new A.ub())
a.slS(new A.uc())}},
Ef(){var s=$.h5.j()
s.sdE(new A.u2())
s.sb4(new A.u3())
s.saZ(new A.u4())},
F2(){var s,r,q,p,o,n=null
try{n=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aE(n,null)
if(!t.f.b(r)||!J.ae(r.h(0,"version"),1))A.j(B.fT)
q=A.xR(r.h(0,"requested"))
$.uI=A.k0(A.xR(r.h(0,"effective")),q)}catch(s){$.uI=A.k0(null,null)}p=$.xu().a
o=A.Ad(p,A.zp())
r=o.a
$.uI=A.k0(r,p)
$.h5.j().e6(p,r,o.b)
A.zE()},
zp(){var s,r,q,p,o=$.f4.j().gbz().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.V(p,"max-samples-"))continue
r=A.ds(B.b.b1(p,12),null)
if(r==null)r=1}return new A.ov(r,B.a.q(o,"disjoint-timer-query"))},
zE(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.ae($.xu().B(),null))}catch(s){}},
Ee(){var s=$.iZ.j()
s.sdE(new A.u_())
s.sb4(new A.u0())
s.saZ(new A.u1())},
F0(){var s,r,q,p,o,n=null
try{n=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wH=A.Bj(B.k.aE(n,null))}catch(s){$.wH=A.ft(null,null,!1,1,!1,!1,2,1)}r=$.iZ.j()
q=r.w=$.fc()
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
r.dg()
$.ac.j().e3($.fc().r)
r=$.ac.j()
q=$.fc()
p=r.ch
p.a=q.f
p.dO()
r.b8()
A.zC()},
zC(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.ae($.fc().B(),null))}catch(s){}},
F_(){var s,r=null
try{r=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j7=A.B3(B.k.aE(r,null))}catch(s){$.j7=B.aS}$.h3.j().hj($.j7)
A.zB()
A.wz()},
zB(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.ae($.j7.B(),null))}catch(s){}},
wz(){var s=$.bs
if(s==null)return
s.ht($.j7)},
F1(){var s,r=null
try{r=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wL=A.BN(B.k.aE(r,null))}catch(s){$.wL=$.vY()}$.j0.j().hk($.mq())
A.zD()
A.z8()},
zD(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.k.ae($.mq().B(),null))}catch(s){}},
z8(){var s,r="detailed",q=A.BM($.mq()),p=A.F(A.b(v.G.document).documentElement)
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
EZ(){var s,r=null
try{r=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eh=A.AY(B.k.aE(r,null))}catch(s){$.eh=B.ao}$.f3.j().e2($.eh)
A.wS()
A.m8()},
wS(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.ae($.eh.B(),null))}catch(s){}},
m8(){var s,r,q,p,o,n,m=$.eh,l=$.v0,k=$.x6,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.j(B.fo)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.wX=l
$.cI.j()
r=A.F(A.b(v.G.document).documentElement)
q=r==null
p=q?null:A.R(A.b(r.classList).contains("high-contrast"))
o=q?null:A.R(A.b(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.R(A.b(r.classList).toggle("reduced-motion",l))
if(!q)A.R(A.b(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.R(A.b(r.classList).toggle("captions-enabled",s))
if(!q)A.R(A.b(r.classList).toggle("reduced-effects",o))
if(!q)A.R(A.b(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.y(j*100)+"%")
q=$.A.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.z6){m=$.bb.j()
l=$.eh.f
m.e=new A.ji(l==null?B.a9:l)
m=$.bb.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
ED(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uM(r,q)
r.addEventListener("change",A.X(new A.uK(s)))
q.addEventListener("change",A.X(new A.uL(s)))},
vk(){var s=0,r=A.c6(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9
var $async$vk=A.c8(function(e1,e2){if(e1===1){o.push(e2)
s=p}for(;;)switch(s){case 0:d7=v.G
d8=A.F(A.b(d7.document).getElementById("game"))
if(d8==null){s=1
break}$.A.b=d8
$.wK=A.F(A.b(d7.document).getElementById("fps"))
$.z1.b=$.AE().cj(A.e7().gb_().h(0,"renderer"))
A.EE()
b8=$.A.j()
b9=A.f(A.b(d7.window).innerWidth)>0?A.f(A.b(d7.window).innerWidth):800
b8.width=b9
b9=$.A.j()
b8=A.f(A.b(d7.window).innerHeight)>0?A.f(A.b(d7.window).innerHeight):600
b9.height=b8
c0=A.F(A.b(d7.document).getElementById("ui-canvas"))
if(c0!=null){c0.width=A.f($.A.j().width)
c0.height=A.f($.A.j().height)
b8=new A.nm(c0,A.d([],t.km))
c1=A.F(c0.getContext("2d"))
if(!t.m.b(c1))A.j(A.k("Failed to get 2D context for CanvasP5GuiEngine"))
b8.b=c1
b8=new A.qw(b8)
$.ej=b8
b8.be(A.f($.A.j().width),A.f($.A.j().height))}n=A.F(d8.getContext("webgl2"))
if(n==null)throw A.c(A.k("Pixeldart requires WebGL2"))
try{b8=t.s6
b9=t.N
c2=t.iO
c3=t.m3
c4=t.pw
m=new A.lI(n,A.f($.A.j().width),A.f($.A.j().height),A.d([],b8),A.o(b9,t.qr),A.d([],t.s3),A.o(b9,c2),A.o(b9,c3),A.o(b9,t.xp),A.o(b9,t.bE),A.o(b9,c2),A.o(b9,c3),A.d([],b8),A.o(b9,c2),A.o(b9,c3),A.o(b9,b9),A.o(t.S,c4),A.o(b9,t.qS),A.d([],t.j5),B.iM,A.o(b9,t.Aj),A.o(b9,b9),A.o(b9,c4),A.o(b9,t.vD),A.o(b9,c4),B.ha,B.ks)
$.aW=m
c4=B.ek.kS($.z1.j(),m)
c4.c4()
$.f4.b=c4}catch(e0){l=A.ao(e0)
k=A.cJ(e0)
g=$.A.j()
g.setAttribute("data-renderer-error",A.y(l))
if($.jg())$.A.j().setAttribute("data-renderer-error-stack",A.y(k))
throw e0}A.zG()
p=4
A.f6("initializing")
$.cI.b=new A.nl(new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),$.xt())
$.v0=A.R(A.b(A.b(d7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.x6=A.R(A.b(A.b(d7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.wX=$.v0
$.cI.j()
b8=A.b(d7.window)
b9=t.N
c2=t.s
c3=t.a
c2=A.BU(A.N(["moveForward",A.d(["KeyW"],c2),"moveBack",A.d(["KeyS"],c2),"moveLeft",A.d(["KeyA"],c2),"moveRight",A.d(["KeyD"],c2),"interact",A.d(["KeyE"],c2),"secondary",A.d(["KeyQ"],c2),"run",A.d(["ShiftLeft"],c2),"crouch",A.d(["ControlLeft"],c2),"rotate",A.d(["KeyR"],c2),"reach",A.d(["KeyF"],c2),"journal",A.d(["KeyJ"],c2),"sleep",A.d(["KeyL"],c2),"pause",A.d(["Escape"],c2)],b9,c3))
c4=A.b(b8.document)
c2=new A.k4(b8,c4,A.a0(b9),A.a0(b9),A.a0(b9),A.a0(b9),A.a0(b9),new A.a(0,0,0),new A.p9(),c2)
b8.addEventListener("keydown",A.X(c2.gj7()))
b8.addEventListener("keyup",A.X(c2.gj9()))
b8.addEventListener("mousemove",A.X(c2.gjf()))
b8.addEventListener("mousedown",A.X(c2.gjd()))
b8.addEventListener("mouseup",A.X(c2.gjh()))
b8.addEventListener("wheel",A.X(c2.gjj()))
c4.addEventListener("pointerlockchange",A.X(c2.gjb()))
$.ac.b=c2
c2=$.A.j()
b8=A.f(A.b(d7.window).innerWidth)>0?A.f(A.b(d7.window).innerWidth):800
c2.width=b8
b8=$.A.j()
c2=A.f(A.b(d7.window).innerHeight)>0?A.f(A.b(d7.window).innerHeight):600
b8.height=c2
A.f6("renderer")
A.f6("text")
c2=$.fd()
s=7
return A.aB(c2.ca(),$async$vk)
case 7:j=c2.mJ()
i=A.CU(j)
if(!(i instanceof A.la)){h=t.bB.a(i).a
g=h.b
throw A.c("Failed to build visitors: "+g)}$.aF.b=i.a
$.m3.b=A.B0(j)
g=A.o(b9,c3)
for(b8=t.j,c6=0;c6<5;++c6){f=B.A[c6]
c3=A.r(f)
c4=c2.c
c4===$&&A.q()
c7=c4.h(0,c3)
c3=b8.b(c7)?A.ap(c7,!0,b9):B.o
J.bt(g,f,c3)}e=A.CV(g)
$.wy.b=new A.ne(B.ey)
d=$.wy.j().m7(new A.vl(e))
c8=$.vZ()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aV.aO(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.c.aN(c2.c)
if(c2==null)c2=7
if(b9<1)A.j(A.ah(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.j(A.ah(c2,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.j(A.ah(5760,"daySeconds","must be finite and > 0"))
c9=new A.jU(b9,7,5760)
c9.b=c2
d0=A.y2(e)
g=A.xP(42,g,A.xS(42),c9,d0,A.xJ(6,16,d0,null,6,B.iN,c9),new A.jI(0,0,0,!1),A.pO(null,null,null))}else{g=d.a
g.toString
g=A.xQ(g,e)}$.U.b=g
$.aF.j().y=$.U.j().z
g=A.aj(A.Ez($.U.j().b),t.fu)
$.tR.b=new A.rY(g)
g=$.w_()
b9=d.a
g.dQ(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.f4.j().bq(A.yj($.U.j().gfZ()))
if(d.b!=null){g=d.b
g.toString
A.hc(g)}g=$.aF.j()
b9=A.G4($.U.j().b,A.G5(j.b))
g.shN(A.hS(b9,A.E(b9).c))
A.f6("house")
$.V.b=$.U.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.V.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.t)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.ae(b,"open")||J.ae(b,"closed")){a3=J.ae(b,"open")
for(g=$.V.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.t)(c2),++d1){a5=c2[d1]
a5.shD(a3)}}}a6=$.xr()
if(a6!=null&&a6.length!==0)for(g=$.V.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.xs()}}g=$.aW
if(g!=null)g.k_($.V.j())
$.bG.b=$.U.j().d
$.V.j()
g=new A.a(12.9375,1.65,0.825)
$.x7=$.wU=$.x0=g
a9=g.ap(0,new A.a(0,1.3499999999999999,0))
$.j3.b=new A.jv(a9,J.xv(a9,new A.a(0,1.2000000000000002,0)))
$.h4.b=new A.nY()
g=A.wM(B.o)
b9=A.wM(B.o)
c2=new A.qA(B.D,g,b9)
if(!isFinite(0))A.j(B.fc)
if(!B.a.a8(b9,B.a.gaq(g)))A.j(B.fN)
if(c2.a===B.D&&c2.b!==0&&!c2.e)A.j(B.fg)
$.c2.b=c2
$.ar="hall"
g=d.a
b0=A.Cf(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.lq($.V.j())){g=b0.b
$.x7=$.wU=$.x0=g
$.cq=b0.c
$.f8=b0.d
$.ar=b0.a
b1=g.ap(0,new A.a(0,1.3499999999999999,0))
g=$.j3.j()
g.sk5(b1)
g.b=J.xv(b1,new A.a(0,1.2000000000000002,0))
g=$.j3.j()
b9=$.V.j()
c2=b0.e
c3=b0.f
g.ms($.ar,$.en(),b9,c3,c2)
A.hc("restored position")}g=A.CB(A.b(d7.document))
g.slD(new A.vm())
g.sb4(new A.vn())
g.saZ(new A.vy())
$.h6.b=g
g=A.b(d7.document)
b9=A.b(g.createElement("div"))
c2=new A.q4(g,b9)
c2.aS(g)
b9.className=A.r(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.b(b9.appendChild(A.nh(g,B.ef,1)))
A.b(b9.appendChild(A.B(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.B(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bi(g,d2,B.dc,"resume")
c2.bi(g,d2,B.dd,"settings")
c2.bi(g,d2,B.de,"controls")
c2.bi(g,d2,B.df,"save now")
c2.bi(g,d2,B.dg,"help")
c2.bi(g,d2,B.dh,"credits")
c2.bi(g,d2,B.di,"back")
A.b(b9.appendChild(d2))
c2.slV(new A.vH())
c2.sb4(new A.vI())
c2.slX(new A.vJ())
c2.slH(new A.vK())
c2.slW(new A.vL())
c2.slN(new A.vM())
c2.slI(new A.vN())
c2.saZ(new A.vo())
$.cp.b=c2
c2=$.U.j().e
b9=$.bG.j()
$.U.j()
$.m5.b=new A.p7(c2,b9)
b9=A.b(d7.document)
c2=$.U.j().e
g=$.bG.j()
c3=$.m5.j()
c4=A.b(b9.createElement("div"))
c3=new A.pg(c2,g,c3,b9,c4)
c3.aS(b9)
c4.setAttribute("aria-label","The Journal")
A.b(c4.appendChild(A.B(b9,"div","journal-title","The Journal")))
d3=A.B(b9,"div","journal-pages",null)
g=A.B(b9,"div","page page-left",null)
c3.y!==$&&A.aX()
c3.y=g
c2=A.B(b9,"div","page page-right",null)
c3.z!==$&&A.aX()
c3.z=c2
A.b(d3.appendChild(g))
A.b(d3.appendChild(c2))
A.b(c4.appendChild(d3))
A.b(c4.appendChild(c3.im()))
d4=A.B(b9,"div","tape-roll",null)
A.b(d4.style).setProperty("width","8rem")
c2=A.B(b9,"div","tape-fill",null)
c3.as!==$&&A.aX()
c3.as=c2
A.b(d4.appendChild(c2))
A.b(c4.appendChild(d4))
d5=A.B(b9,"div","consult",null)
A.b(d5.appendChild(A.B(b9,"div","consult-label","Cite an entry")))
c2=A.B(b9,"div","entry-picker",null)
c3.at!==$&&A.aX()
c3.at=c2
g=A.B(b9,"div","consult-result",null)
c3.ax!==$&&A.aX()
c3.ax=g
A.b(d5.appendChild(c2))
A.b(d5.appendChild(g))
A.b(c4.appendChild(d5))
d6=A.F(b9.documentElement)
if(t.m.b(d6)){A.b(d6.style).setProperty("--shake-max-deg","3deg")
A.b(d6.style).setProperty("--shake-max-px","2px")}$.j2.b=c3
$.j2.j().saZ(new A.vp())
g=A.b(d7.document)
b9=A.B(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.b(b9.style).setProperty("transition-duration","0.3s")
A.b(A.F(g.body).appendChild(b9))
$.z3.b=new A.qh(b9)
b9=A.b(d7.document)
g=A.B(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.F(b9.body).appendChild(g))
$.z2.b=new A.nd(g)
g=A.b(d7.document)
b9=A.B(g,"div","ambient-notice",null)
c2=A.B(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.b(A.F(g.body).appendChild(b9))
A.b(A.F(g.body).appendChild(c2))
$.bb.b=new A.mH(b9,c2,B.K)
$.z6=!0
c2=A.Bq(A.b(d7.document))
c2.slG(A.Ab())
c2.slF(A.Gi())
$.ay.b=c2
c2=$.cK()
c2.slE(new A.vq())
c2.slJ(A.Ab())
c2=d.a
b2=A.CS(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aF.j().dQ(b2))A.Fi()
g=$.m3.j()
b9=d.a
g.mt(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(b8.b(b3))for(g=J.S(b3);g.m();){b4=g.gn()
if(A.aK(b4))$.v1.l(0,b4)}g=A.CE(A.b(d7.document))
g.slY(new A.vr())
g.saZ(new A.vs())
$.m6.b=g
g=A.BQ(A.b(d7.document))
g.saZ(new A.vt())
$.j1.b=g
g=A.Bk(A.b(d7.document))
g.saZ(new A.vu())
$.m4.b=g
$.j4.b=A.kL(A.b(d7.document),null)
$.j5.b=A.kL(A.b(d7.document),B.Z)
$.f3.b=A.kL(A.b(d7.document),B.I)
A.mb($.j4.j(),!1)
A.mb($.j5.j(),!0)
A.mb($.f3.j(),!0)
A.EZ()
A.ED()
$.h5.b=A.BP(A.b(d7.document))
A.Ef()
A.F2()
$.h3.b=A.kL(A.b(d7.document),B.H)
A.mb($.h3.j(),!0)
A.F_()
$.j0.b=A.kL(A.b(d7.document),B.a_)
A.mb($.j0.j(),!0)
A.F1()
$.iZ.b=A.Bi(A.b(d7.document))
A.Ee()
A.F0()
g=A.BA(A.b(d7.document))
g.saZ(new A.vv())
g.slK(new A.vw())
$.j_.b=g
g=d.a
b5=A.BC(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zF(b5)
A.f6("world")
A.zI()
A.b(d7.window).addEventListener("resize",A.X(new A.vx()))
A.b(d7.document).addEventListener("visibilitychange",A.X(new A.vz()))
A.b(d7.window).addEventListener("keydown",A.X(new A.vA()))
A.b(d7.window).addEventListener("keyup",A.X(new A.vB()))
A.b(d7.window).addEventListener("keydown",A.X(new A.vC()))
A.b(d7.window).addEventListener("click",A.X(new A.vD()))
$.A.j().addEventListener("mousemove",A.X(new A.vE()))
$.A.j().addEventListener("click",A.X(new A.vF()))
$.A.j().addEventListener("wheel",A.X(new A.vG()))
A.h9()
A.f6("raf")
A.f(A.b(d7.window).requestAnimationFrame(A.X(A.Ac())))
p=2
s=6
break
case 4:p=3
d9=o.pop()
b6=A.ao(d9)
b7=A.cJ(d9)
A.uV(b6,b7)
s=6
break
case 3:s=2
break
case 6:case 1:return A.c4(q,r)
case 2:return A.c3(o.at(-1),r)}})
return A.c5($async$vk,r)},
EC(a){var s,r,q,p=$.ej
if(!$.ay.j().y||p==null)return
s=A.zh(a)
if(s==null)return
r=$.cK()
q=p.fL(s.a,s.b)
r.r=q==null?null:q.b},
EB(a){var s,r=$.ej
if(!$.ay.j().y||r==null)return!1
s=A.zh(a)
if(s==null)return!1
return $.cK().lk(r.fL(s.a,s.b))},
zh(a){var s=A.b($.A.j().getBoundingClientRect()),r=A.ad(s.width),q=A.ad(s.height)
if(r<=0||q<=0)return null
return new A.aV((A.f(a.clientX)-A.ad(s.left))*(A.f($.A.j().width)/r),(A.f(a.clientY)-A.ad(s.top))*(A.f($.A.j().height)/q))},
EE(){var s=v.G
A.b(s.window).addEventListener("error",A.X(new A.uN()))
A.b(s.window).addEventListener("unhandledrejection",A.X(new A.uO()))},
f6(a){if($.wD===a)return
$.wD=a
$.A.j().setAttribute("data-boot-phase",a)},
zG(){var s,r,q,p,o,n=$.f4.j().gbz(),m=$.A.j(),l=A.e7().gb_().h(0,"renderer")
if(l==null)l="auto"
m.setAttribute("data-renderer-request",l)
m.setAttribute("data-renderer-backend",n.a)
m.setAttribute("data-renderer-profile",n.b)
m.setAttribute("data-renderer-diagnostics",B.k.ae(n.B(),null))
l=$.aW
if(l==null)l="{}"
else{l=l.e
l===$&&A.q()
l=l.as
if(l==null)l=A.j(A.k("renderer is not initialized"))
s=l.a
s.C()
r=s.b
q=A.J(r,A.p(r).c)
B.a.Y(q)
r=t.N
p=t.K
p=B.k.ae(A.N(["profile",A.N(["kind",s.a.b,"features",q],r,p),"internalWidth",l.b,"internalHeight",l.c,"sampleCount",l.d,"outputEncoding","srgb","shadowMapCount",l.f,"shadowMapSize",l.r,"materialTableCapacity",l.w,"lightTableCapacity",l.x,"textureArrayLayerCapacity",l.y,"diagnosticLevel",l.z.b],r,p),null)
l=p}m.setAttribute("data-renderer-configuration",l)
m.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
m.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
m.setAttribute("data-renderer-lighting-falloff","smoothstep")
m.setAttribute("data-renderer-dof-focal-distance","2.5m")
m.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
m=$.aW
o=m==null?null:m.x
if(o!=null)$.A.j().setAttribute("data-renderer-profile-fallback",o)},
F9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.jg())return
s=$.xr()
if(s!=null&&s.length!==0){r=$.A.j()
q=$.xs()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tR.j().du($.U.j().gaa().a)
r=$.A.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vZ()
o=q==null?c:q.e
if(o!=null)$.A.j().setAttribute("data-automation-capture-shutters",o)
$.A.j().setAttribute("data-automation-rain-window-visibility",B.c.aK(A.zH($.ar),3))
r=$.A.j()
q=$.wD
n=$.ar
m=$.en()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.k.ae(A.N(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.N(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cq,"pitch",$.f8,"modal",$.bc!=null,"dialogueOverlay",$.ay.j().y,"inputEnabled",$.ac.j().ay,"day",$.U.j().gaa().a,"hour",$.U.j().gaa().b],l,k),c))
j=A.o(l,t.X)
for(r=$.V.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.N(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.A.j().setAttribute("data-automation-portals",B.k.ae(j,c))
e=$.m9
r=!1
if(e!=null)if($.V.j().e.h(0,"cellar")!=null){r=$.V.j()
q=$.ar
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cf("cellar",$.ar)
$.A.j().setAttribute("data-audio-transmission-cellar",B.k.ae(A.N(["sourceRoom","cellar","listenerRoom",$.ar,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.A.j().setAttribute("data-audio-transmission-cellar","unavailable")},
ml(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c2.j().a!==B.D){A.hc("save unavailable during rupture")
return}try{r=$.wy.j()
q=$.U.j()
p=t.N
o=t.z
s=A.o(p,o)
n=$.ar
m=$.en()
l=$.cq
k=$.f8
j=$.j3.j().d
j=j==null?null:j.a.a
i=$.j3.j().d
J.bt(s,"player",new A.kv(n,m,l,k,j,i==null?null:i.b).B())
n=$.aF.j()
m=A.eN(n.b,p)
l=A.eN(n.c,t.L)
n=n.r
J.bt(s,"visitors",new A.lb(m,l,n==null?null:new A.jk(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.m3.j().b
n=A.J(n,A.p(n).c)
B.a.Y(n)
J.bt(s,"ambient",n)
n=A.J($.v1,A.p($.v1).c)
B.a.Y(n)
J.bt(s,"unverifiables",n)
J.bt(s,"inventoryInspections",$.w_().B())
n=$.wI
if(n!=null)J.bt(s,"ending",A.N(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xU(q.c).B()
k=q.d
r.mM(A.yl(s,A.N(["houseSeed",n,"runSeed",m,"house",l,"time",A.N(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hc(a)}catch(h){A.hc("save failed")}},
F7(){var s=A.F(A.b(v.G.document).documentElement),r=s==null?null:A.aA(s.getAttribute("data-gameplay-focus-loss")),q=A.bu(new A.H(B.aC,t.rg.a(new A.uR(r)),t.vK),t.x)
switch((q==null?B.b0:q).a){case 0:$.mi=!0
s=$.bs
if(s!=null)s.e5(!0)
break
case 1:$.mi=!0
break
case 2:break}},
hc(a){var s=v.G,r=A.F(A.b(s.document).getElementById("save-status"))
if(r==null)return
s=A.F(A.b(s.document).documentElement)
s=s==null?null:A.aA(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.BL(B.eY,new A.uZ(r),t.H)},
uV(a,b){var s,r,q,p
A.f6("error")
s=A.y(a)
r=A.xi(s,"\n"," ")
s=$.wK
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.F(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.p(0)
$.A.j().setAttribute("data-boot-error",p)
if($.jg()&&!q)$.A.j().setAttribute("data-boot-stack",b.p(0))
A.b(s.console).error(p)},
zb(){var s,r
if($.wB)return
$.wB=!0
s=$.bs
r=s==null
if(!r)s.ce()
if(!r)s.ed("music")
B.a.l($.d8,"arm")},
h9(){var s=0,r=A.c6(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$h9=A.c8(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.aB(A.h8(),$async$h9)
case 2:o=null
q=4
s=7
return A.aB(A.bQ(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$h9)
case 7:n=b
i=A
s=8
return A.aB(A.bQ(A.b(n.json()),t.X),$async$h9)
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
if(k!=null&&typeof k==="string"){A.r(k)
l=A.F(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.m4.j().f
l===$&&A.q()
l.textContent=k}s=9
return A.aB(A.oc(A.d([A.uP(o),A.uJ(o)],t.iJ),t.H),$async$h9)
case 9:return A.c4(null,r)
case 1:return A.c3(p.at(-1),r)}})
return A.c5($async$h9,r)},
h8(){var s=0,r=A.c6(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$h8=A.c8(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.iG[g]
q=6
s=9
return A.aB(A.bQ(A.b(A.b(j.window).fetch(o)),i),$async$h8)
case 9:n=a0
s=10
return A.aB(A.bQ(A.b(n.text()),h),$async$h8)
case 10:m=a0
l=A.B4(B.k.aE(m,null))
f=$.V.b
if(f===$.V)A.j(A.a5(""))
l.dU(f)
f=$.A.b
if(f===$.A)A.j(A.a5(""))
f.setAttribute("data-house-manifest","validated")
f=$.A.b
if(f===$.A)A.j(A.a5(""))
f.setAttribute("data-house-manifest-source",o)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.ao(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.A.j().setAttribute("data-house-manifest","unavailable")
A.b(j.console).warn("authored house manifest unavailable: "+A.y(d))}s=11
return A.aB(A.mf(),$async$h8)
case 11:s=12
return A.aB(A.mg(),$async$h8)
case 12:return A.c4(null,r)
case 1:return A.c3(p.at(-1),r)}})
return A.c5($async$h8,r)},
mf(){var s=0,r=A.c6(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mf=A.c8(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.io[c]
p=7
s=10
return A.aB(A.bQ(A.b(A.b(g.window).fetch(n)),f),$async$mf)
case 10:m=b1
s=11
return A.aB(A.bQ(A.b(m.text()),e),$async$mf)
case 11:l=b1
b=B.k.aE(l,null)
b=h.b(b)?b:A.dF("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dF("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aK(a)?a:A.dF("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dF("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.ap(a,!0,d):A.dF("assets is not a list")
a4=A.E(a3)
a5=a4.i("O<1,cV>")
a3=A.J(new A.O(a3,a4.i("cV(1)").a(A.Ge()),a5),a5.i("a2.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.ap(a,!0,d):A.dF("placements is not a list")
a5=A.E(a4)
a6=a5.i("O<1,cx>")
a4=A.J(new A.O(a4,a5.i("cx(1)").a(A.Gf()),a6),a6.i("a2.E"))
a4.$flags=1
k=new A.oM(a1,a2,a0,a3,a4)
a1=$.V.b
if(a1===$.V)A.j(A.a5(""))
k.dU(a1)
$.md=k
a1=$.aW
if(a1!=null)a1.hl(k)
a1=$.A.b
if(a1===$.A)A.j(A.a5(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.A.b
if(a1===$.A)A.j(A.a5(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.A.b
if(a1===$.A)A.j(A.a5(""))
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
case 5:$.A.j().setAttribute("data-house-inventory","unavailable")
$.A.j().setAttribute("data-house-inventory-error",A.y(a8))
A.b(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.c4(q,r)
case 2:return A.c3(o.at(-1),r)}})
return A.c5($async$mf,r)},
mg(){var s=0,r=A.c6(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mg=A.c8(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.md
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.iY[a4]
p=7
s=10
return A.aB(A.bQ(A.b(A.b(a1.window).fetch(m)),a2),$async$mg)
case 10:l=b5
s=11
return A.aB(A.bQ(A.b(l.text()),e),$async$mg)
case 11:k=b5
a5=B.k.aE(k,null)
a5=a0.b(a5)?a5:A.h7("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.ap(a6,!0,a3):A.h7("emitters is not a list")
a8=A.E(a7)
a9=a8.i("O<1,cU>")
a7=A.J(new A.O(a7,a8.i("cU(1)").a(A.Gu()),a9),a9.i("a2.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aK(a6)?a6:A.h7("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h7("sourceRef is not a string")
j=new A.oT(a8,a9,a7)
a7=$.V.b
if(a7===$.V)A.j(A.a5(""))
j.mG(a7,b2)
$.zr=j
i=A.o(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bt(i,h.a+":"+g.a,A.d([g.b],c))}}a7=$.V.b
if(a7===$.V)A.j(A.a5(""))
a8=A.B1(i)
a9=new A.mR(a7,A.b4(B.d7,e,d),a8)
a9.hW(a8,a7,B.d7)
$.m9=a9
a7=$.bs
if(a7!=null){a7.ch=a9
a7.bv()}a7=$.A.b
if(a7===$.A)A.j(A.a5(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.A.b
if(a7===$.A)A.j(A.a5(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.A.b
if(a7===$.A)A.j(A.a5(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.A.b
if(a7===$.A)A.j(A.a5(""))
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
$.A.j().setAttribute("data-audio-planner","unavailable")
$.A.j().setAttribute("data-house-soundscape","unavailable")
$.A.j().setAttribute("data-house-soundscape-error",A.y(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.c4(q,r)
case 2:return A.c3(o.at(-1),r)}})
return A.c5($async$mg,r)},
wG(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.S(t.a.b(s)?s:new A.aU(s,A.E(s).i("aU<1,h>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.r(q))}},
uJ(a){var s=0,r=A.c6(t.H),q,p,o,n,m,l
var $async$uJ=A.c8(function(b,c){if(b===1)return A.c3(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.o(n,n)
n=a==null
A.wG(A.F(n?null:a.sfx),m,"")
A.wG(A.F(n?null:a.ir),m,"ir-")
q=A.F(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.r(p))
l=$
s=2
return A.aB(A.mY(m,$.V.j()),$async$uJ)
case 2:o=l.bs=c
o.ch=$.m9
o.bv()
A.F3()
A.zK(o)
A.wz()
A.zL()
if($.wB){o.ce()
o.ed("music")}return A.c4(null,r)}})
return A.c5($async$uJ,r)},
x3(a,b){var s
A.zW(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Fe(a){var s,r
try{s=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
z7(a,b){var s
if(a!=="brightness")return
s=A.F(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.y(B.c.E(b,0.6,1.4))+")")},
tV(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.F(A.b(v.G.document).documentElement)
if(r!=null)A.R(A.b(r.classList).toggle(s,b))
A.m8()},
zL(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.ad($.da().a.cg(o)),k=A.R($.da().a.cg(n)),j=A.R($.da().a.cg(m))
for(s=[$.j4.j(),$.j5.j(),$.f3.j(),$.h3.j(),$.j0.j()],r=0;r<5;++r)s[r].e4(o,l)
A.z7(o,l)
for(s=[$.j4.j(),$.j5.j(),$.f3.j(),$.h3.j(),$.j0.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tV(n,k)
A.tV(m,j)},
x2(a,b){var s
A.zW(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Fb(a){var s,r
try{s=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zK(a){var s,r,q,p,o,n,m,l,k,j=A.o(t.N,t.i)
for(s=0;s<5;++s){r=B.iF[s]
q=$.da().a.b.h(0,r)
j.k(0,r,A.ad(q==null?A.j(A.k("setting missing from profile: "+r)):q))}p=A.R($.da().a.cg("muted"))
o=A.R($.da().a.cg("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bh(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cP(o)
for(q=[$.j4.j(),$.j5.j(),$.f3.j(),$.h3.j()],n=j.$ti.i("cz<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cz(j,j.r,j.e,n);m.m();){k=m.d
l.e4(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
z9(){var s=$.bs
if(s!=null)A.zK(s)
A.zL()},
F3(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aA(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aE(k,null)
if(!t.f.b(r)||!J.ae(r.h(0,"version"),1))A.j(B.fp)
q=A.yn(r.h(0,"requested"))
$.zS=A.wj(A.yn(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.o(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Fb(l))}}r=A.o(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Fe(p))}}$.zS=A.CD(o,r)
A.uS()},
uS(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.ae($.da().B(),null))}catch(s){}},
zW(a,b){var s,r,q,p,o,n,m
switch(A.rc(a).d.a){case 0:r=A.eF(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.da()
q=s
A.rc(a).cK(q)
p=t.N
o=t.K
n=A.fD(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dv(n,1)
n=s
A.rc(a).cK(n)
o=A.fD(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dv(o,1)
A.uS()}catch(m){if(!(A.ao(m) instanceof A.G))throw m}},
uP(a){var s=0,r=A.c6(t.H),q,p
var $async$uP=A.c8(function(b,c){if(b===1)return A.c3(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.o(q,q)
A.wG(A.F(a==null?null:a.tex),p,"")
q=$.aW
q=q==null?null:q.cG(p)
s=2
return A.aB(A.oc(A.d([q==null?A.xO(t.H):q],t.iJ),t.H),$async$uP)
case 2:return A.c4(null,r)}})
return A.c5($async$uP,r)},
zI(){var s,r,q=v.G,p=A.f(A.b(q.window).innerWidth),o=A.f(A.b(q.window).innerHeight)
q=$.A.j()
s=p>0?p:800
q.width=s
s=$.A.j()
q=o>0?o:600
s.height=q
q=$.ej
if(q!=null)q.be(A.f($.A.j().width),A.f($.A.j().height))
$.f4.j().be(A.f($.A.j().width),A.f($.A.j().height))
q=$.aW
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.A.j().setAttribute("data-renderer-surface",r)},
EA(){var s,r,q=$.bc
if(q!=null){s=$.ac.j()
if(!s.CW.bb("pause",s.f)){s=$.ac.j()
s=s.CW.bb("secondary",s.f)}else s=!0
if(s){A.Eh(q)
return}if($.ac.j().f.a6(0,"GamepadDpadUp")){A.zx(q,-1)
return}if($.ac.j().f.a6(0,"GamepadDpadDown")){A.zx(q,1)
return}s=$.ac.j()
if(s.CW.bb("interact",s.f)){r=A.F(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.R(q.b.contains(r)))A.pd(r,"click",t.X)}return}s=$.ac.j()
if(s.CW.bb("pause",s.f)){A.jd($.cp.j())
return}if($.ay.j().y)return
s=$.ac.j()
if(s.CW.bb("journal",s.f))A.jf($.j2.j())
else{s=$.ac.j()
if(s.CW.bb("sleep",s.f))A.jf($.m6.j())}},
Eh(a){if(a===$.cp.j()){a.a7()
return}if(a===$.h6.j()||a instanceof A.fO||a instanceof A.hH||a instanceof A.hv){A.dH(a)
return}a.a7()},
zx(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.d([],t.sL)
for(s=t.m,r=0;r<A.f(l.length);++r){q=A.F(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.F(A.b(v.G.document).activeElement)
o=B.a.bD(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.O(o+b+m,m)}if(!(n>=0&&n<k.length))return A.e(k,n)
k[n].focus()},
Fa(d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1
A.ad(d2)
try{s=d2
if(!$.zq){$.wQ=s
$.zq=!0}e=s
d=$.wQ
if(typeof e!=="number")return e.ap()
r=(e-d)/1000
$.wQ=s
e=r
if(typeof e!=="number")return e.e0()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.aL()
if(e>0.25)r=0.25
A.FE(r)
$.ac.j().m2()
e=$.A.j()
d=$.ac.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ac.j().z
if(q!=null)$.A.j().setAttribute("data-controller-id",q)
else $.A.j().removeAttribute("data-controller-id")
A.EA()
if(!$.mi&&$.bc==null){e=$.ei
d=r
if(typeof d!=="number")return A.vf(d)
d=$.ei=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e0()
c=c<10}else c=!1
if(!c)break
$.wU=$.en()
if(!$.xq()){d=$.U.b
if(d===$.U)A.j(A.a5(""))
d.jU(0.008333333333333333)
d=$.AH()
c=$.U.b
if(c===$.U)A.j(A.a5(""))
c=c.gaa()
b=$.U.b
if(b===$.U)A.j(A.a5(""))
d=d.di(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){o=d[a]
B.a.l($.d8,"clock:"+o.a)}d=$.AI()
c=$.U.b
if(c===$.U)A.j(A.a5(""))
c=c.gaa()
b=$.U.b
if(b===$.U)A.j(A.a5(""))
d=d.di(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){n=d[a]
B.a.l($.d8,"service:"+n.a+":"+n.b)}}A.FH()
d=$.aF.b
if(d===$.aF)A.j(A.a5(""))
c=$.U.b
if(c===$.U)A.j(A.a5(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.ap(d,!1,e)
a0.$flags=3
a1=a0
B.a.L(d)
if(a1.length!==0){d=$.U.b
if(d===$.U)A.j(A.a5(""))
d.m8(a1)}A.FD()
A.FG()
A.FF()
A.FC(0.008333333333333333)
d=$.h4.b
if(d===$.h4)A.j(A.a5(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.c2.b
if(d===$.c2)A.j(A.a5(""))
m=d.a!==B.D
c=$.V.b
if(c===$.V)A.j(A.a5(""))
d.dh(0.008333333333333333,c)
if(m){d=$.c2.b
if(d===$.c2)A.j(A.a5(""))
d=d.e}else d=!1
if(d)A.zJ(!0)
d=$.ei-0.008333333333333333
$.ei=d
c=p
if(typeof c!=="number")return c.ai()
p=c+1}l=B.c.E(d/0.008333333333333333,0,1)
e=$.x7=A.yy($.AK(),$.en(),l)
k=$.bs
if(k!=null){d=k
c=Math.sin($.cq)
b=Math.cos($.cq)
a2=A.b(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aL(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hn($.ar)
for(e=$.d8.length,a=0;a<$.d8.length;$.d8.length===e||(0,A.t)($.d8),++a){j=$.d8[a]
A.El(k,j)}B.a.L($.d8)
$.A.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.A.j().setAttribute("data-audio-muffle01",B.c.aK(k.gly(),3))
e=$.A.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.A.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cI.j().fP($.w0(),$.cq,$.f8)
e=$.aW
if(e!=null){d=$.cI.j()
c=d.a
a3=new A.M(c.a,c.b,c.c)
c=d.b
a4=new A.M(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.y9(a3,a4,new A.M(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wc(a5,b,d.a,c)
e.p2=new A.fn(a6,a7,a7.ao(0,a6),a3,a4,c,b,a5)}e=$.aW
if(e!=null)e.hw($.V.j(),$.ar)
e=$.aW
if(e!=null)e.hm($.V.j(),$.ar,$.w0(),$.bG.j().gee(),$.bG.j().gkU(),$.tR.j().du($.U.j().gaa().a),A.Gp($.ar),$.bG.j().b)
if($.zw!==$.c2.j().a){$.zw=$.c2.j().a
$.wY=$.wY+1}e=$.aW
if(e!=null){if($.xq())d=0
else{d=s
if(typeof d!=="number")return d.mQ()
d/=1000}c=$.wY
b=A.f(Math.max(0,$.U.j().b))
if(!isFinite(d)||d<0)A.j(A.ah(d,"timeSeconds",null))
if(b<0)A.j(A.x("frame clock seeds must be non-negative",null))
e.rx=d
e.ry=c
e.to=b}e=$.aW
if(e!=null){d=$.c2.j()
c=$.wX
b=$.tR.j().du($.U.j().gaa().a)
a8=A.zH($.ar)
a9=d.a
b0=d.geb()
b1=b0>0?B.c.E(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.bF
b4=$.hm()
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
e.p4=new A.kx(c1,b6,b4,b7,b8,b.c,a8,b9,c2,d,c3,c4,c5,c6,c7,c8,c9,d0,c)}$.f4.j().bq(A.yj($.U.j().gfZ()))
i=$.aW
if(i!=null){h=i.glg()
if(h!=null){$.A.j().setAttribute("data-renderer-frame-stats",h)
e=$.A.j()
d=i.glf()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.f6("running")
A.F9()
e=$.ac.j()
e.as=e.Q=0
d=e.c
d.a6(0,"WheelUp")
d.a6(0,"WheelDown")
e.d.L(0)
e.f.L(0)
A.f(A.b(v.G.window).requestAnimationFrame(A.X(A.Ac())))}catch(d1){g=A.ao(d1)
f=A.cJ(d1)
A.uV(g,f)}},
El(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.fX("confirm")
$.bb.j().aM("interface confirmation")
break
case"ambient-winnow":a.dG("winnow",0.28)
$.bb.j().aM("wind moving through the house")
break
case"ambient-gate":a.dG("gate",0.22)
$.bb.j().aM("distant gate")
break
case"collapse":a.fX("collapse")
$.bb.j().aM("front door shudders and collapses")
break
case"clock:tick":A.mj(a,p,"tick")
break
case"clock:chime":A.mj(a,p,"chime")
break
case"clock:cuckoo":A.mj(a,p,"cuckoo")
break
case"clock:bell":A.mj(a,p,"bell")
break
default:if(B.b.V(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.mj(a,q,s[2])}}}},
mj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zr,g=$.md
if(h==null||g==null)return
s=h.l7(b)
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
break A}if(q!=null)$.bb.j().aM(q)
q=$.V.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.k("sound room missing: "+o))
m=n.d.ai(0,s.d.ao(0,p))
l=$.m9
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.k("sound emitter "+s.a+" has no cue for "+c))
a.m1(q,m,s.e,o)
return}q=$.ze
$.ze=q+1
o=A.B2(B.dW,r,r+":"+q,m,A.E3(b,c),q,o)
q=$.ar
q=A.AZ($.w0(),q)
t.gG.a(B.bp)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.k("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.k("audio listener room missing: "+q))
j=l.h4(p,q,B.bp)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.k("audio cue family missing: "+q))
k=J.aC(i)
k=k.h(i,B.d.O(A.Ft(q,o.f),k.gt(i)))
o=o.e
A.aj(j.a,t.N)
a.fY(k,new A.a(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
E3(a,b){var s,r,q,p=$.U.j().b
for(s=new A.dQ(a+":"+b),r=t.sU,s=new A.aI(s,s.gt(0),r.i("aI<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.A8(p,q==null?r.a(q):q)}return p},
FE(a){var s=$.wK
if(s==null)return
s.textContent=""+B.c.b0(a>0?1/a:0)+" fps"},
FC(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zO||$.bc!=null){$.mr().a=new A.a(0,0,0)
return}s=$.ac.j()
r=s.cr("moveLeft")?-1:0
if(s.cr("moveRight"))++r
q=s.cr("moveForward")?1:0
if(s.cr("moveBack"))--q
s=s.ay?s.w:new A.a(0,0,0)
p=new A.a(r,0,q).ai(0,s)
o=p.gt(0)>1?p.gau():p
$.ac.j().cT(b3)
n=$.ac.j().Q
m=$.ac.j().as
s=$.fc()
l=s.d?-1:1
k=s.e?-1:1
j=$.cq
i=$.ac.j()
i=i.ay?i.x:0
h=$.fc()
g=h.d?-1:1
$.cq=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.f8
h=$.ac.j()
l=h.ay?h.y:0
j=$.fc()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.f8=i
$.f8=B.c.E(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.a(i*Math.cos($.cq)+j*Math.sin($.cq),0,-i*Math.sin($.cq)+j*Math.cos($.cq)).gau().ao(0,2)
j=$.mr()
if(!isFinite(b3)||b3<0)A.j(A.ah(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.j(A.ah(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.ai(0,f.ap(0,l).ao(0,1-s))
j.a=s
d=$.j3.j().lz($.V.j(),$.ar,$.en(),s.ao(0,b3))
$.x0=d.a
if($.c2.j().a!==B.bG&&$.c2.j().a!==B.a2)$.ar=d.b
c=B.c.E(j.a.gt(0)/2,0,1)
s=$.AJ()
$.x1=s.hI($.x1,$.en().b,b3)
b=s.jV(b3,c)
s=$.en()
l=$.x1
$.cI.j().fP(new A.a(s.a+b.a,l+b.b,s.c+b.c),$.cq,$.f8)
s=$.U.j().z
a=new A.q6(s)
s=$.cI.j()
l=$.V.j()
a0=A.Go(a,s,$.ar,l,$.md)
l=a0.c
$.z3.j().hy(l)
a1=A.F(A.b(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xh($.cI.j(),$.V.j(),$.ar)
break
case 1:a3=A.Ai($.cI.j(),$.V.j(),$.ar)
break
case 2:a4=A.Aj($.cI.j(),$.V.j(),$.ar)
break
case 3:l=$.cI.j()
k=$.V.j()
j=$.md
a5=A.Ah(l,$.ar,k,j)
break
case 4:case 5:break}$.z2.j().mD($.fd().dZ($.U.j().gaa().a,"status"),$.ar==="living-room")
l=$.ac.j()
k=l.CW
if(k.bb(b2,l.d)||k.bb(b2,l.f)){l=$.U.j().gaa()
k=a3==null
j=k?b1:a3.a
i=B.a.a8($.aF.j().fo(21),$.aF.j().glr())
if(l.a===21&&j==="front-door"&&i){s=$.c2.j()
$.V.j()
s.hO(B.ex,A.aj(s.c,t.N))
B.a.l($.d8,"collapse")
A.hc("the front door opens on itself")}else if(a2!=null&&!a2.e){if(a2.d){a2.d=!1
$.bb.j().aM("mantle flame extinguished")}else if($.U.j().hL(1,1)){a2.d=!0
s=$.h4.j()
s.a=a2
s.b=2
if(a2.f!=null)a2.r=!0
$.bb.j().aM("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bb.j()
s.aM(a3.ax?"door opens":"door closes")
s=$.aW
if(s!=null)s.cI($.V.j(),a3.b)
s=$.aW
if(s!=null)s.dL($.V.j(),a3.a)
s=$.bs
if(s!=null)s.bv()}else if(a4!=null)if(a4.w){s=$.U.j()
if(s.f.cS(1)){a4.w=!1
$.bb.j().aM("shutter closes")}}else{a4.w=!0
$.bb.j().aM("shutter opens")}else if(s===B.cl){a6=a.dY()
s=A.E(a6)
l=t.E4
a7=A.bu(new A.H(a6,s.i("l(1)").a(new A.v2(a0)),s.i("H<1>")),l)
if(a7==null)a7=A.bu(a6,l)
if(a7!=null)$.bb.j().bL("noticed",a7.d)}else if(a5!=null){s=$.w_()
if(!a5.x)A.j(A.k("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.A.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.b4(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.F5(a8)
s=$.bb.j()
s.bL("noticed",a9==null?"you inspect "+a8:a9)}}s=$.h4.j()
if(s.a!=null&&s.b>0){b0=$.h4.j().a
if(b0!=null&&A.xh($.cI.j(),$.V.j(),$.ar)!==b0){s=$.h4.j()
s.a=null
s.b=0}}A.Fh(b3,a0)},
Fh(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6="rgba(12, 10, 14, 0.92)",b7=$.ej
if(b7==null)return
s=A.f($.A.j().width)
r=A.f($.A.j().height)
q=$.cK()
q.mC(b8)
p=$.AG()
o=p.c
if(o<1)p.c=Math.min(1,o+b8*6)
o=b9.c
n=o!=null
m=p.hc(o,n,$.ay.j().y)
p=$.hm()
l=p.a
k=p.d
j=b8*8
if(l)p.d=Math.min(1,k+j)
else p.d=Math.max(0,k-j)
l=$.V.j()
k=$.ar
i=l.e.h(0,k)
l=!$.ay.j().y&&$.bc==null
k=q.a
j=q.b
h=q.c
g=q.e
f=q.f
e=q.r
q=q.w
d=$.U.j().gaa()
c=$.bG.j().b
b=$.mq()
a=b.y===B.cr
a0=i==null?null:i.a
if(a0==null)a0=$.ar
b=b.z?$.fd().dZ($.U.j().gaa().a,"status"):null
a1=b7.a
a1.c+=b8
a2=a1.d
B.a.L(a2)
a3=A.ad(A.b(v.G.window).devicePixelRatio)
a4=B.c.az(s*a3)
a5=B.c.az(r*a3)
a6=a1.a
if(A.f(a6.width)!==a4||A.f(a6.height)!==a5){a6.width=a4
a6.height=a5}a6=a1.b
a6===$&&A.q()
a6.save()
a6.scale(a3,a3)
a6.clearRect(0,0,s,r)
if(l){a6.save()
a6.translate(s*0.5,r*0.5)
l=t.H
if(n){n=Math.sin(a1.c*8)
a7=a1.c
a8=22*(1+n*0.08)
a6.strokeStyle="rgba(0, 0, 0, 0.85)"
a6.lineWidth=3.5
a6.save()
a7=a7*1.5+0.7853981633974483
a6.rotate(a7)
n=-a8*0.5
a6.strokeRect(n,n,a8,a8)
a6.restore()
a6.strokeStyle="#c49a45"
a6.lineWidth=2
a6.save()
a6.rotate(a7)
a6.strokeRect(n,n,a8,a8)
a6.restore()
a6.fillStyle="#f5f0e6"
a6.beginPath()
A.aL(a6,"arc",[0,0,2.5,0,6.283185307179586],l)
a6.fill()}else{a6.fillStyle="rgba(0, 0, 0, 0.85)"
a6.beginPath()
A.aL(a6,"arc",[1,1,3,0,6.283185307179586],l)
a6.fill()
a6.fillStyle="#f5f0e6"
a6.beginPath()
A.aL(a6,"arc",[0,0,2.5,0,6.283185307179586],l)
a6.fill()}a6.restore()
a1.l2(o,r,s)}a1.l1(r,s,new A.pW(k,j,h,g,f,e,q))
a9=s-80-24
a1.aV("#d32f2f",2,8,b6,44,-0.08,160,a9,42)
a6.save()
a6.fillStyle="#f5f0e6"
a6.font='bold 14px "Cinzel", serif'
a6.textAlign="center"
a6.textBaseline="middle"
b0=B.d.E(B.c.aN(c*60),0,1439)
b1=B.d.a_(b0,60)
b2=B.d.O(b0,60)
b3=a?B.d.O(b1+11,12)+1:b1
if(a)b4=b1<12?" AM":" PM"
else b4=""
a6.fillText("DAY "+d.a+"  \u2022  "+B.b.dF(B.d.p(b3),2,"0")+":"+B.b.dF(B.d.p(b2),2,"0")+b4,a9,42)
a6.restore()
a1.aV("#c49a45",1.8,6,b6,34,0.08,170,109,37)
a6.save()
a6.fillStyle="#c49a45"
a6.font='bold 13px "Cinzel", serif'
a6.textAlign="center"
a6.textBaseline="middle"
a6.fillText(a0.toUpperCase(),109,37)
a6.restore()
if(b!=null&&b.length!==0){b5=s*0.5
a1.aV("#f5f0e6",1.5,6,b6,32,-0.04,Math.min(s*0.6,420),b5,36)
a6.save()
a6.fillStyle="#f5f0e6"
a6.font='13px "Cinzel", serif'
a6.textAlign="center"
a6.textBaseline="middle"
a6.fillText(b,b5,36)
a6.restore()}a1.l0(m,r,s)
a1.l3(r,s,p)
a6.restore();++b7.b
q=$.A.j()
q.setAttribute("data-renderer-gui-frame",""+b7.b)
q.setAttribute("data-renderer-gui-hitboxes",""+A.aj(a2,t.rO).length)
q.setAttribute("data-renderer-gui-owner","renderer")
q.setAttribute("data-renderer-gui-surface",""+b7.c+"x"+b7.d)},
F5(a){var s,r,q,p,o=$.U.j().z.b,n=A.p(o).i("K<1,2>"),m=A.J(new A.K(o,n),n.i("n.E"))
B.a.T(m,new A.uQ())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.t)(m),++s){r=m[s]
n=$.fd().at
n===$&&A.q()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
FH(){var s,r,q,p,o,n,m,l,k,j=null
if($.ay.j().y||$.bc!=null||$.aF.j().r!=null)return
s=$.U.j().gaa()
for(r=$.aF.j().fo(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aF.b
if(m===$.aF)A.j(A.a5(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aF.b
if(r===$.aF)A.j(A.a5(""))
l=r.bV(n)
if(!(l instanceof A.l7))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.y_(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.mr().a=new A.a(0,0,0)
r=$.ay.b
if(r===$.ay)A.j(A.a5(""))
q=n.a
r.e7(q,k)
$.cK().bp(!0,B.b8,q,k)
A.zV(n)
return}},
Fi(){var s,r,q=$.aF.j().r,p=q==null,o=p?null:q.gbm()
if(p||o==null)return
p=$.ay.j()
s=q.a
r=s.a
p.e7(r,o)
$.cK().bp(!0,B.b8,r,o)
A.zV(s)
if(q.d!==B.a7)A.wT()
A.hc("restored visitor")},
zV(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.U.j().lh("stranger-17-eileen-case")
r=$.fd().x
r===$&&A.q()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
p=A.bu(r,t.N)
if(s==null||p==null)return
$.bb.j().bL("inside the case",p+" \u201c"+s.d+"\u201d")},
FD(){var s,r,q,p,o=$.U.j().gaa(),n=$.m3.j().l5(o.a,o.b)
if(n.length===0)return
s=B.a.gR(n)
$.m3.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bb.j().bL(q,s.e)
p=A.FN(r)
if(p!=null)B.a.l($.d8,"ambient-"+p)},
FG(){var s,r,q,p,o=$.U.j().gaa()
if(o.b<20)return
s=o.a
if(!$.v1.l(0,s))return
r=$.fd().f
r===$&&A.q()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
p=A.Gl(r,$.U.j().b,s)
if(p!=null)$.bb.j().bL("noticed",p)},
zJ(a){var s,r,q,p,o
if($.wI!=null)return
s=$.U.j().gaa()
r=$.U.j().r.c
q=$.U.j().e.b
p=A.p(q).i("au<2>")
o=A.BB(new A.nU(s.a,1-r,new A.H(new A.au(q,p),p.i("l(n.E)").a(new A.uW()),p.i("H<n.E>")).gt(0),$.U.j().r.d,a))
if(o==null)return
A.zF(o)
A.ml("ending recorded")},
zF(a){var s,r,q
$.wI=a
$.zO=!0
$.mr().a=new A.a(0,0,0)
A.jd($.j_.j())
s=a.a
r=$.fd().w
r===$&&A.q()
q=r.h(0,s.b)
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
r=A.J(r,t.N)
B.a.I(r,A.C9($.U.j().z,s))
$.j_.j().hB(a,r)},
Ea(a){var s,r,q,p
A:{if("open"===a){s=B.av
break A}if("chain"===a){s=B.ce
break A}if("through-door"===a){s=B.cf
break A}if("letterbox"===a){s=B.cg
break A}s=B.ae
break A}r=$.aF.j().kj(s)
if(s===B.av){q=$.V.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aW
if(p!=null)p.cI($.V.j(),q.b)
p=$.aW
if(p!=null)p.dL($.V.j(),q.a)
p=$.bs
if(p!=null)p.bv()}}if(!(r instanceof A.l5)||s===B.ae){A.um()
return}if(r.a.gbm()==null){A.wF()
A.um()
return}A.wT()},
Eg(){var s=$.aF.j().jW()
if(!(s instanceof A.io)||s.b){A.wF()
A.um()
return}if(s.a.gbm()==null){A.wF()
A.um()
return}A.wT()},
wT(){var s,r,q,p,o,n,m,l,k,j=$.aF.j().r,i=j==null,h=i?null:j.gbm()
if(i||h==null)return
s=$.aF.j().gbZ()
if(s==null){$.ay.j().hA(h)
$.cK().bp(!0,B.o,j.a.a,h)}else{r=j.w
i=r==null
$.ay.j().e8(h,i)
q=A.d([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.ay.j()
l=A.d([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aV(k.a,k.b))}m.hC(l,r)
o=$.cK()
m=j.a.a
o.bp(!0,i?q:B.o,m,h)
if(!i){i=A.E(p)
k=A.bu(new A.H(p,i.i("l(1)").a(new A.uT(r)),i.i("H<1>")),t.Y)
if(k!=null){i=$.ay.j()
q=k.c
i.e9(h,q)
o.bp(!0,B.o,m,h+"\n\n"+q)}}}A.zU()},
Eb(a){var s,r,q,p,o,n=$.aF.j().kk(a)
if(!(n instanceof A.l6))return
s=n.c
if(!$.U.j().jY(n.b,s))return
r=s.c
s=$.ay.j()
q=n.a
p=q.gbm()
s.e9(p==null?"":p,r)
o=q.gbm()
if(o==null)o=""
$.cK().bp(!0,B.o,q.a.a,o+"\n\n"+r)
A.zU()
A.ml("saved after visitor answer")},
um(){var s,r=$.ay.j()
r.y=!1
s=r.d
s===$&&A.q()
s.textContent=""
s=r.f
s===$&&A.q()
s.textContent=""
s=r.r
s===$&&A.q()
s.textContent=""
r=r.a
r.className="door"
r.setAttribute("hidden","")
r=$.cK()
r.a=null
r.b=""
r.e=A.d([],t.s)
r.c=1
r.r=r.f=null
r.w=!1
r.x=0
$.ac.j().cJ($.A.j())},
zU(){var s,r,q,p,o=$.ay.j(),n=A.b(v.G.document),m=A.d([],t.wt)
for(s=$.m5.j().e_(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.aV(p.a,B.a.gW(p.c).p(0)))}o.hz(n,m)},
Ec(a){var s,r,q,p=$.aF.j().kl(a,!0,$.m5.j())
if(p==null)return
s=$.m5.j().kT(p,B.i4)
r=$.ay.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.q()
r.textContent=B.K.bC("",!0,q)},
wF(){var s,r=$.V.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aW
if(s!=null)s.cI($.V.j(),r.b)
s=$.aW
if(s!=null)s.dL($.V.j(),r.a)
s=$.bs
if(s!=null)s.bv()}},
FF(){var s,r,q,p,o,n,m,l,k
for(s=$.V.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.c2.b
if(k===$.c2)A.j(A.a5(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Gp(a){var s,r,q,p,o,n,m,l=$.V.j().e.h(0,a)
if(l==null||$.bG.j().gee()===0)return!1
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
if(!n){if(o===B.v){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b<9}else n=!1
if(!n)if(o===B.G){o=$.bG.b
if(o===$.bG)A.j(A.a5(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zH(a){var s,r=$.V.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.bh
if(q.length===0)return 0.12
s=A.E(q)
return B.c.E(new A.H(q,s.i("l(1)").a(new A.uU()),s.i("H<1>")).gt(0)/q.length,0.12,1)},
fX:function fX(a,b){this.a=a
this.b=b},
lI:function lI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.cD=_.y2=0
_.c3=_.c2=null
_.lc=$
_.fC=null
_.fD=0},
tC:function tC(a){this.a=a},
tD:function tD(a){this.a=a},
tE:function tE(a){this.a=a},
tF:function tF(a){this.a=a},
ty:function ty(){},
tz:function tz(){},
tA:function tA(){},
tB:function tB(){},
tu:function tu(){},
tv:function tv(){},
tw:function tw(){},
tx:function tx(){},
lH:function lH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a,b,c,d,e){var _=this
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
u_:function u_(){},
u0:function u0(){},
u1:function u1(){},
uM:function uM(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uL:function uL(a){this.a=a},
vl:function vl(a){this.a=a},
vm:function vm(){},
vn:function vn(){},
vy:function vy(){},
vH:function vH(){},
vI:function vI(){},
vJ:function vJ(){},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vN:function vN(){},
vo:function vo(){},
vp:function vp(){},
vq:function vq(){},
vr:function vr(){},
vs:function vs(){},
vt:function vt(){},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
vx:function vx(){},
vz:function vz(){},
vA:function vA(){},
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
vG:function vG(){},
uN:function uN(){},
uO:function uO(){},
uR:function uR(a){this.a=a},
uZ:function uZ(a){this.a=a},
v2:function v2(a){this.a=a},
uQ:function uQ(){},
uW:function uW(){},
uT:function uT(a){this.a=a},
uU:function uU(){},
y_(a,b,c,d,e,f){var s=a[b]()
return s},
pd(a,b,c){var s=null
return c.a(A.y_(a,b,s,s,s,s))},
vS(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.c(A.ah(b.gll(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.ab()
o=q*16
n=o+16
B.t.cQ(s,o,n,p.a)
if(l)B.t.cQ(r,o,n,p.dD().a)}m=a.a
A.w(m,"uInstanceModels",new A.z(B.dL,s))
if(l)A.w(m,"uInstanceNormalMatrices",new A.z(B.dL,r))
A.w(m,"uUseInstances",B.dM)},
Bo(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Bn(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
A8(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
FN(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.E(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b0(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
G2(a){var s,r,q,p,o,n,m,l=B.k.aE(a,null),k=t.f
if(!k.b(l))throw A.c(B.fV)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.o(s,t.P)
for(o=0;o<14;++o){n=B.j_[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.o(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.c(A.a4('text.json section "'+n+'" must be an object',null,null))}return p},
Gl(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaQ(a)
s=new A.ec()
s.bN((b^274953^c)>>>0)
r=s.aO(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.w6.prototype={}
J.k6.prototype={
a5(a,b){return a===b},
gN(a){return A.i5(a)},
p(a){return"Instance of '"+A.kA(a)+"'"},
ga4(a){return A.d9(A.wN(this))}}
J.k8.prototype={
p(a){return String(a)},
gN(a){return a?519018:218159},
ga4(a){return A.d9(t.y)},
$iag:1,
$il:1}
J.hL.prototype={
a5(a,b){return null==b},
p(a){return"null"},
gN(a){return 0},
$iag:1,
$iaq:1}
J.hO.prototype={$iaf:1}
J.dZ.prototype={
gN(a){return 0},
ga4(a){return B.lY},
p(a){return String(a)}}
J.ku.prototype={}
J.eQ.prototype={}
J.dY.prototype={
p(a){var s=a[$.Ao()]
if(s==null)s=a[$.hj()]
if(s==null)return this.hQ(a)
return"JavaScript function for "+J.db(s)},
$iew:1}
J.hN.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.hP.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.u.prototype={
cA(a,b){return new A.aU(a,A.E(a).i("@<1>").K(b).i("aU<1,2>"))},
l(a,b){A.E(a).c.a(b)
a.$flags&1&&A.bR(a,29)
a.push(b)},
mb(a,b){var s
a.$flags&1&&A.bR(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.yg(b,null))
return a.splice(b,1)[0]},
a6(a,b){var s
a.$flags&1&&A.bR(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ae(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.E(a).i("n<1>").a(b)
a.$flags&1&&A.bR(a,"addAll",2)
if(Array.isArray(b)){this.ic(a,b)
return}for(s=J.S(b);s.m();)a.push(s.gn())},
ic(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.as(a))
for(r=0;r<s;++r)a.push(b[r])},
L(a){a.$flags&1&&A.bR(a,"clear","clear")
a.length=0},
cb(a,b,c){var s=A.E(a)
return new A.O(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("O<1,2>"))},
Z(a,b){var s,r=A.e_(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.y(a[s]))
return r.join(b)},
bc(a,b,c,d){var s,r,q
d.a(b)
A.E(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.as(a))}return r},
aW(a,b,c){var s,r,q,p=A.E(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.as(a))}if(c!=null)return c.$0()
throw A.c(A.cy())},
af(a,b){return this.aW(a,b,null)},
a1(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
aR(a,b,c){var s=a.length
if(b>s)throw A.c(A.aY(b,0,s,"start",null))
if(c<b||c>s)throw A.c(A.aY(c,b,s,"end",null))
if(b===c)return A.d([],A.E(a))
return A.d(a.slice(b,c),A.E(a))},
gR(a){if(a.length>0)return a[0]
throw A.c(A.cy())},
gW(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.cy())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.c(A.cy())
throw A.c(A.xV())},
M(a,b){var s,r
A.E(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.as(a))}return!1},
a8(a,b){var s,r
A.E(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.as(a))}return!0},
T(a,b){var s,r,q,p,o,n=A.E(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.bR(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.EJ()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aL()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hg(b,2))
if(p>0)this.ju(a,p)},
Y(a){return this.T(a,null)},
ju(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cR(a,b){var s,r,q,p
a.$flags&2&&A.bR(a,"shuffle")
s=a.length
while(s>1){r=b.aO(s);--s
q=a.length
if(!(s<q))return A.e(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.e(a,r)
a[s]=a[r]
a[r]=p}},
bD(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.e(a,s)
if(J.ae(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.ae(a[s],b))return!0
return!1},
gP(a){return a.length===0},
gX(a){return a.length!==0},
p(a){return A.w5(a,"[","]")},
gu(a){return new J.eo(a,a.length,A.E(a).i("eo<1>"))},
gN(a){return A.i5(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bR(a,"set length","change the length of")
if(b<0)throw A.c(A.aY(b,0,null,"newLength",null))
if(b>a.length)A.E(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.vb(a,b))
return a[b]},
k(a,b,c){A.E(a).c.a(c)
a.$flags&2&&A.bR(a)
if(!(b>=0&&b<a.length))throw A.c(A.vb(a,b))
a[b]=c},
dV(a,b){return new A.dC(a,b.i("dC<0>"))},
dz(a,b){var s
A.E(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga4(a){return A.d9(A.E(a))},
$iQ:1,
$in:1,
$iD:1}
J.k7.prototype={
mB(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kA(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pe.prototype={}
J.eo.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia8:1}
J.fB.prototype={
F(a,b){var s
A.ad(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc7(b)
if(this.gc7(a)===s)return 0
if(this.gc7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc7(a){return a===0?1/a<0:a<0},
az(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.b8(""+a+".toInt()"))},
kg(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.b8(""+a+".ceil()"))},
aN(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.b8(""+a+".floor()"))},
b0(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.b8(""+a+".round()"))},
mv(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
E(a,b,c){if(this.F(b,c)>0)throw A.c(A.x9(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
aK(a,b){var s
if(b>20)throw A.c(A.aY(b,0,20,"fractionDigits",null))
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
O(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a_(a,b){return(a|0)===a?a/b|0:this.jD(a,b)},
jD(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.b8("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
bT(a,b){var s
if(a>0)s=this.f9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jB(a,b){if(0>b)throw A.c(A.x9(b))
return this.f9(a,b)},
f9(a,b){return b>31?0:a>>>b},
ga4(a){return A.d9(t.o)},
$ib3:1,
$iv:1,
$ibd:1}
J.hK.prototype={
ga4(a){return A.d9(t.S)},
$iag:1,
$ii:1}
J.k9.prototype={
ga4(a){return A.d9(t.i)},
$iag:1}
J.dX.prototype={
fn(a,b){return new A.lU(b,a,0)},
hM(a,b){var s
if(typeof b=="string")return A.d(a.split(b),t.s)
else{if(b instanceof A.hM){s=b.e
s=!(s==null?b.e=b.iA():s)}else s=!1
if(s)return A.d(a.split(b.b),t.s)
else return this.iH(a,b)}},
bI(a,b,c,d){var s=A.kF(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iH(a,b){var s,r,q,p,o,n,m=A.d([],t.s)
for(s=J.AQ(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gec()
n=p.gdt()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.G(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b1(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aY(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
V(a,b){return this.ac(a,b,0)},
G(a,b,c){return a.substring(b,A.kF(b,c,a.length))},
b1(a,b){return this.G(a,b,null)},
bg(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.C1(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.C2(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ao(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.et)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dF(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ao(c,s)+a},
cE(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aY(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bD(a,b){return this.cE(a,b,0)},
q(a,b){return A.Gv(a,b,0)},
F(a,b){var s
A.r(b)
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
ga4(a){return A.d9(t.N)},
gt(a){return a.length},
$iag:1,
$ib3:1,
$iq_:1,
$ih:1}
A.e9.prototype={
gu(a){return new A.hr(J.S(this.gb2()),A.p(this).i("hr<1,2>"))},
gt(a){return J.cL(this.gb2())},
gP(a){return J.mt(this.gb2())},
gX(a){return J.AT(this.gb2())},
a1(a,b){return A.p(this).y[1].a(J.ms(this.gb2(),b))},
gR(a){return A.p(this).y[1].a(J.xz(this.gb2()))},
q(a,b){return J.xy(this.gb2(),b)},
p(a){return J.db(this.gb2())}}
A.hr.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia8:1}
A.er.prototype={
gb2(){return this.a}}
A.iw.prototype={$iQ:1}
A.iu.prototype={
h(a,b){return this.$ti.y[1].a(J.aS(this.a,b))},
k(a,b,c){var s=this.$ti
J.bt(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.AU(this.a,b)},
l(a,b){var s=this.$ti
J.hn(this.a,s.c.a(s.y[1].a(b)))},
T(a,b){var s
this.$ti.i("i(2,2)?").a(b)
s=b==null?null:new A.t8(this,b)
J.AV(this.a,s)},
$iQ:1,
$iD:1}
A.t8.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.aU.prototype={
cA(a,b){return new A.aU(this.a,this.$ti.i("@<1>").K(b).i("aU<1,2>"))},
gb2(){return this.a}}
A.fC.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dQ.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.qG.prototype={}
A.Q.prototype={}
A.a2.prototype={
gu(a){var s=this
return new A.aI(s,s.gt(s),A.p(s).i("aI<a2.E>"))},
gP(a){return this.gt(this)===0},
gR(a){if(this.gt(this)===0)throw A.c(A.cy())
return this.a1(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.ae(r.a1(0,s),b))return!0
if(q!==r.gt(r))throw A.c(A.as(r))}return!1},
a8(a,b){var s,r,q=this
A.p(q).i("l(a2.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a1(0,r)))return!1
if(s!==q.gt(q))throw A.c(A.as(q))}return!0},
M(a,b){var s,r,q=this
A.p(q).i("l(a2.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a1(0,r)))return!0
if(s!==q.gt(q))throw A.c(A.as(q))}return!1},
Z(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.a1(0,0))
if(o!==p.gt(p))throw A.c(A.as(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.a1(0,q))
if(o!==p.gt(p))throw A.c(A.as(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.a1(0,q))
if(o!==p.gt(p))throw A.c(A.as(p))}return r.charCodeAt(0)==0?r:r}},
cM(a,b){return this.hP(0,A.p(this).i("l(a2.E)").a(b))},
cb(a,b,c){var s=A.p(this)
return new A.O(this,s.K(c).i("1(a2.E)").a(b),s.i("@<a2.E>").K(c).i("O<1,2>"))},
bK(a,b){var s=A.p(this).i("a2.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bJ(a){return this.bK(0,!0)},
bo(a){var s,r=this,q=A.w9(A.p(r).i("a2.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a1(0,s))
return q}}
A.ii.prototype={
giM(){var s=J.cL(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjC(){var s=J.cL(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cL(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a1(a,b){var s=this,r=s.gjC()+b
if(b<0||r>=s.giM())throw A.c(A.p4(b,s.gt(0),s,"index"))
return J.ms(s.a,r)},
bK(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aC(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xY(0,n):J.xX(0,n)}r=A.e_(s,m.a1(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a1(n,o+q))
if(m.gt(n)<l)throw A.c(A.as(p))}return r},
bJ(a){return this.bK(0,!0)}}
A.aI.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aC(q),o=p.gt(q)
if(r.b!==o)throw A.c(A.as(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a1(q,s);++r.c
return!0},
$ia8:1}
A.cA.prototype={
gu(a){return new A.hU(J.S(this.a),this.b,A.p(this).i("hU<1,2>"))},
gt(a){return J.cL(this.a)},
gP(a){return J.mt(this.a)},
gR(a){return this.b.$1(J.xz(this.a))},
a1(a,b){return this.b.$1(J.ms(this.a,b))}}
A.dg.prototype={$iQ:1}
A.hU.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia8:1}
A.O.prototype={
gt(a){return J.cL(this.a)},
a1(a,b){return this.b.$1(J.ms(this.a,b))}}
A.H.prototype={
gu(a){return new A.T(J.S(this.a),this.b,this.$ti.i("T<1>"))}}
A.T.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia8:1}
A.hB.prototype={
gu(a){return new A.hC(J.S(this.a),this.b,B.em,this.$ti.i("hC<1,2>"))}}
A.hC.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.S(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia8:1}
A.hz.prototype={
m(){return!1},
gn(){throw A.c(A.cy())},
$ia8:1}
A.dC.prototype={
gu(a){return new A.iq(J.S(this.a),this.$ti.i("iq<1>"))}}
A.iq.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia8:1}
A.at.prototype={
st(a,b){throw A.c(A.b8("Cannot change the length of a fixed-length list"))},
l(a,b){A.bP(a).i("at.E").a(b)
throw A.c(A.b8("Cannot add to a fixed-length list"))}}
A.d1.prototype={
k(a,b,c){A.p(this).i("d1.E").a(c)
throw A.c(A.b8("Cannot modify an unmodifiable list"))},
st(a,b){throw A.c(A.b8("Cannot change the length of an unmodifiable list"))},
l(a,b){A.p(this).i("d1.E").a(b)
throw A.c(A.b8("Cannot add to an unmodifiable list"))},
T(a,b){A.p(this).i("i(d1.E,d1.E)?").a(b)
throw A.c(A.b8("Cannot modify an unmodifiable list"))}}
A.fS.prototype={}
A.eL.prototype={
gt(a){return J.cL(this.a)},
a1(a,b){var s=this.a,r=J.aC(s)
return r.a1(s,r.gt(s)-1-b)}}
A.iY.prototype={}
A.aV.prototype={$r:"+(1,2)",$s:1}
A.f2.prototype={$r:"+height,width(1,2)",$s:2}
A.iI.prototype={$r:"+influence,light(1,2)",$s:3}
A.al.prototype={$r:"+(1,2,3)",$s:4}
A.b0.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iJ.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iK.prototype={$r:"+(1,2,3,4)",$s:8}
A.ht.prototype={}
A.fr.prototype={
gP(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
p(a){return A.wa(this)},
k(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
A.Bg()},
gJ(){return new A.cn(this.lb(),A.p(this).i("cn<L<1,2>>"))},
lb(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga2(),o=o.gu(o),n=A.p(s),m=n.y[1],n=n.i("L<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.L(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bF(a,b,c,d){var s=A.o(c,d)
this.ar(0,new A.nu(this,A.p(this).K(c).K(d).i("L<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.nu.prototype={
$2(a,b){var s=A.p(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.p(this.a).i("~(1,2)")}}
A.a3.prototype={
gt(a){return this.b.length},
geN(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
U(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.U(b))return null
return this.b[this.a[b]]},
ar(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geN()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga2(){return new A.eZ(this.geN(),this.$ti.i("eZ<1>"))},
gaB(){return new A.eZ(this.b,this.$ti.i("eZ<2>"))}}
A.eZ.prototype={
gt(a){return this.a.length},
gP(a){return 0===this.a.length},
gX(a){return 0!==this.a.length},
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
bu(){var s=this,r=s.$map
if(r==null){r=new A.hQ(s.$ti.i("hQ<1,2>"))
A.A1(s.a,r)
s.$map=r}return r},
U(a){return this.bu().U(a)},
h(a,b){return this.bu().h(0,b)},
ar(a,b){this.$ti.i("~(1,2)").a(b)
this.bu().ar(0,b)},
ga2(){var s=this.bu()
return new A.aa(s,A.p(s).i("aa<1>"))},
gaB(){var s=this.bu()
return new A.au(s,A.p(s).i("au<2>"))},
gt(a){return this.bu().a}}
A.hu.prototype={
l(a,b){A.p(this).c.a(b)
A.Bh()}}
A.aG.prototype={
gt(a){return this.b},
gP(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f_(s,s.length,r.$ti.i("f_<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bo(a){return A.kf(this,this.$ti.c)}}
A.qe.prototype={
$0(){return B.c.aN(1000*this.a.now())},
$S:35}
A.ia.prototype={}
A.rD.prototype={
aY(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.i0.prototype={
p(a){return"Null check operator used on a null value"}}
A.ka.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.l_.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pT.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hA.prototype={}
A.iM.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icZ:1}
A.dP.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Am(r==null?"unknown":r)+"'"},
ga4(a){var s=A.xb(this)
return A.d9(s==null?A.bP(this):s)},
$iew:1,
gmP(){return this},
$C:"$1",
$R:1,
$D:null}
A.jw.prototype={$C:"$0",$R:0}
A.jx.prototype={$C:"$2",$R:2}
A.kW.prototype={}
A.kT.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Am(s)+"'"}}
A.fk.prototype={
a5(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fk))return!1
return this.$_target===b.$_target&&this.a===b.a},
gN(a){return(A.mp(this.a)^A.i5(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kA(this.a)+"'")}}
A.kK.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gP(a){return this.a===0},
gX(a){return this.a!==0},
ga2(){return new A.aa(this,A.p(this).i("aa<1>"))},
gaB(){return new A.au(this,A.p(this).i("au<2>"))},
gJ(){return new A.K(this,A.p(this).i("K<1,2>"))},
U(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lm(a)},
lm(a){var s=this.d
if(s==null)return!1
return this.c6(s[this.c5(a)],a)>=0},
I(a,b){A.p(this).i("Y<1,2>").a(b).ar(0,new A.pn(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ln(b)},
ln(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c5(a)]
r=this.c6(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.p(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ei(s==null?q.b=q.dd():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ei(r==null?q.c=q.dd():r,b,c)}else q.lp(b,c)},
lp(a,b){var s,r,q,p,o=this,n=A.p(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dd()
r=o.c5(a)
q=s[r]
if(q==null)s[r]=[o.de(a,b)]
else{p=o.c6(q,a)
if(p>=0)q[p].b=b
else q.push(o.de(a,b))}},
cd(a,b){var s,r,q=this,p=A.p(q)
p.c.a(a)
p.i("2()").a(b)
if(q.U(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a6(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.ia(this.c,b)
else return this.lo(b)},
lo(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c5(a)
r=n[s]
q=o.c6(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ef(p)
if(r.length===0)delete n[s]
return p.b},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cU()}},
ar(a,b){var s,r,q=this
A.p(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.as(q))
s=s.c}},
ei(a,b,c){var s,r=A.p(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.de(b,c)
else s.b=c},
ia(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.ef(s)
delete a[b]
return s.b},
cU(){this.r=this.r+1&1073741823},
de(a,b){var s=this,r=A.p(s),q=new A.pz(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cU()
return q},
ef(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cU()},
c5(a){return J.az(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ae(a[r].a,b))return r
return-1},
p(a){return A.wa(this)},
dd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iw8:1}
A.pn.prototype={
$2(a,b){var s=this.a,r=A.p(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.p(this.a).i("~(1,2)")}}
A.pz.prototype={}
A.aa.prototype={
gt(a){return this.a.a},
gP(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
q(a,b){return this.a.U(b)}}
A.cg.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.as(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia8:1}
A.au.prototype={
gt(a){return this.a.a},
gP(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ai(s,s.r,s.e,this.$ti.i("ai<1>"))}}
A.ai.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.as(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia8:1}
A.K.prototype={
gt(a){return this.a.a},
gP(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cz(s,s.r,s.e,this.$ti.i("cz<1,2>"))}}
A.cz.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.as(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$ia8:1}
A.hQ.prototype={
c5(a){return A.FY(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ae(a[r].a,b))return r
return-1}}
A.vg.prototype={
$1(a){return this.a(a)},
$S:13}
A.vh.prototype={
$2(a,b){return this.a(a,b)},
$S:126}
A.vi.prototype={
$1(a){return this.a(A.r(a))},
$S:33}
A.bq.prototype={
ga4(a){return A.d9(this.eK())},
eK(){return A.G7(this.$r,this.cq())},
p(a){return this.ff(!1)},
ff(a){var s,r,q,p,o,n=this.iQ(),m=this.cq(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.yd(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iQ(){var s,r=this.$s
while($.tG.length<=r)B.a.l($.tG,null)
s=$.tG[r]
if(s==null){s=this.iz()
B.a.k($.tG,r,s)}return s},
iz(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.xW(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.aj(j,k)}}
A.ed.prototype={
cq(){return[this.a,this.b]},
a5(a,b){if(b==null)return!1
return b instanceof A.ed&&this.$s===b.$s&&J.ae(this.a,b.a)&&J.ae(this.b,b.b)},
gN(a){return A.cC(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ee.prototype={
cq(){return[this.a,this.b,this.c]},
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.ee&&s.$s===b.$s&&J.ae(s.a,b.a)&&J.ae(s.b,b.b)&&J.ae(s.c,b.c)},
gN(a){var s=this
return A.cC(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fW.prototype={
cq(){return this.a},
a5(a,b){if(b==null)return!1
return b instanceof A.fW&&this.$s===b.$s&&A.Dm(this.a,b.a)},
gN(a){return A.cC(this.$s,A.Cd(this.a),B.f,B.f,B.f,B.f)}}
A.hM.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gj6(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.y1(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iA(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fn(a,b){return new A.li(this,b,0)},
iP(a,b){var s,r=this.gj6()
if(r==null)r=A.f5(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lD(s)},
$iq_:1,
$iCt:1}
A.lD.prototype={
gec(){return this.b.index},
gdt(){var s=this.b
return s.index+s[0].length},
$ifF:1,
$ii6:1}
A.li.prototype={
gu(a){return new A.lj(this.a,this.b,this.c)}}
A.lj.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iP(l,s)
if(p!=null){m.d=p
o=p.gdt()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.e(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.e(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia8:1}
A.ih.prototype={
gdt(){return this.a+this.c.length},
$ifF:1,
gec(){return this.a}}
A.lU.prototype={
gu(a){return new A.lV(this.a,this.b,this.c)},
gR(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ih(r,s)
throw A.c(A.cy())}}
A.lV.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ih(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia8:1}
A.t9.prototype={
j(){var s=this.b
if(s===this)throw A.c(A.a5(""))
return s}}
A.fH.prototype={
ga4(a){return B.lR},
$iag:1}
A.fG.prototype={$ifG:1}
A.hZ.prototype={
iZ(a,b,c,d){var s=A.aY(b,0,c,d,null)
throw A.c(s)},
eq(a,b,c,d){if(b>>>0!==b||b>c)this.iZ(a,b,c,d)}}
A.kj.prototype={
ga4(a){return B.lS},
$iag:1}
A.b5.prototype={
gt(a){return a.length},
f5(a,b,c,d,e){var s,r,q=a.length
this.eq(a,b,q,"start")
this.eq(a,c,q,"end")
if(b>c)throw A.c(A.aY(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.x(e,null))
r=d.length
if(r-e<s)throw A.c(A.k("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibU:1}
A.hX.prototype={
h(a,b){A.dG(b,a,a.length)
return a[b]},
k(a,b,c){A.br(c)
a.$flags&2&&A.bR(a)
A.dG(b,a,a.length)
a[b]=c},
cQ(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bR(a,5)
this.f5(a,b,c,d,0)
return},
$iQ:1,
$in:1,
$iD:1}
A.hY.prototype={
k(a,b,c){A.f(c)
a.$flags&2&&A.bR(a)
A.dG(b,a,a.length)
a[b]=c},
hu(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bR(a,5)
this.f5(a,b,c,d,e)
return},
$iQ:1,
$in:1,
$iD:1}
A.hW.prototype={
ga4(a){return B.lT},
aR(a,b,c){return new Float32Array(a.subarray(b,A.E8(b,c,a.length)))},
$iag:1,
$io3:1}
A.kk.prototype={
ga4(a){return B.lU},
$iag:1}
A.kl.prototype={
ga4(a){return B.lV},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1}
A.km.prototype={
ga4(a){return B.lW},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1}
A.kn.prototype={
ga4(a){return B.lX},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1}
A.ko.prototype={
ga4(a){return B.m_},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1,
$iwm:1}
A.kp.prototype={
ga4(a){return B.m0},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1}
A.eD.prototype={
ga4(a){return B.m1},
gt(a){return a.length},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1,
$ieD:1}
A.i_.prototype={
ga4(a){return B.m2},
gt(a){return a.length},
h(a,b){A.dG(b,a,a.length)
return a[b]},
$iag:1,
$iik:1}
A.iD.prototype={}
A.iE.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.cE.prototype={
i(a){return A.iQ(v.typeUniverse,this,a)},
K(a){return A.yT(v.typeUniverse,this,a)}}
A.lw.prototype={}
A.lY.prototype={
p(a){return A.bI(this.a,null)}}
A.lu.prototype={
p(a){return this.a}}
A.h0.prototype={$idy:1}
A.t4.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:42}
A.t3.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:65}
A.t5.prototype={
$0(){this.a.$0()},
$S:14}
A.t6.prototype={
$0(){this.a.$0()},
$S:14}
A.tJ.prototype={
i9(a,b){if(self.setTimeout!=null)self.setTimeout(A.hg(new A.tK(this,b),0),a)
else throw A.c(A.b8("`setTimeout()` not found."))}}
A.tK.prototype={
$0(){this.b.$0()},
$S:0}
A.lk.prototype={
dj(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cY(a)
else{s=r.a
if(q.i("bT<1>").b(a))s.eo(a)
else s.co(a)}},
dk(a,b){var s=this.a
if(this.b)s.bj(new A.b1(a,b))
else s.cm(new A.b1(a,b))}}
A.tW.prototype={
$1(a){return this.a.$2(0,a)},
$S:24}
A.tX.prototype={
$2(a,b){this.a.$2(1,new A.hA(a,t.l.a(b)))},
$S:171}
A.v6.prototype={
$2(a,b){this.a(A.f(a),b)},
$S:170}
A.cH.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jw(a,b){var s,r,q
a=A.f(a)
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
o.d=null}q=o.jw(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yO
return!1}if(0>=p.length)return A.e(p,-1)
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
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.k("sync*"))}return!1},
mS(a){var s,r,q=this
if(a instanceof A.cn){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.S(a)
return 2}},
$ia8:1}
A.cn.prototype={
gu(a){return new A.cH(this.a(),this.$ti.i("cH<1>"))}}
A.b1.prototype={
p(a){return A.y(this.a)},
$iam:1,
gbM(){return this.b}}
A.ob.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ew(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ao(p)
q=A.cJ(p)
l=r
o=q
n=A.wO(l,o)
l=new A.b1(l,o)
m.b.bj(l)
return}m.b.ew(s)}},
$S:0}
A.oe.prototype={
$2(a,b){var s,r,q=this
A.f5(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bj(new A.b1(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bj(new A.b1(r,s))}},
$S:159}
A.od.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bt(r,k.b,a)
if(J.ae(s,0)){q=A.d([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hn(q,l)}k.c.co(q)}}else if(J.ae(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bj(new A.b1(q,o))}},
$S(){return this.d.i("aq(0)")}}
A.lo.prototype={
dk(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.k("Future already completed"))
s.cm(A.EI(a,b))},
fs(a){return this.dk(a,null)}}
A.is.prototype={
dj(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.k("Future already completed"))
s.cY(r.i("1/").a(a))}}
A.eW.prototype={
lx(a){if((this.c&15)!==6)return!0
return this.b.b.dS(t.bl.a(this.d),a.a,t.y,t.K)},
li(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mx(q,m,a.b,o,n,t.l)
else p=l.dS(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ao(s))){if((r.c&1)!==0)throw A.c(A.x("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.x("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ax.prototype={
dT(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.an
if(s===B.z){if(!t.nW.b(b)&&!t.h_.b(b))throw A.c(A.ah(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.Fg(b,s)}r=new A.ax(s,c.i("ax<0>"))
this.cW(new A.eW(r,3,a,b,q.i("@<1>").K(c).i("eW<1,2>")))
return r},
fd(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.ax($.an,c.i("ax<0>"))
this.cW(new A.eW(s,19,a,b,r.i("@<1>").K(c).i("eW<1,2>")))
return s},
jz(a){this.a=this.a&1|16
this.c=a},
cn(a){this.a=a.a&30|this.a&1
this.c=a.c},
cW(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.cW(a)
return}r.cn(s)}A.mk(null,null,r.b,t.O.a(new A.tc(r,a)))}},
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
return}m.cn(n)}l.a=m.cv(a)
A.mk(null,null,m.b,t.O.a(new A.th(l,m)))}},
bS(){var s=t.F.a(this.c)
this.c=null
return this.cv(s)},
cv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ew(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bT<1>").b(a))A.tf(a,r,!0)
else{s=r.bS()
q.c.a(a)
r.a=8
r.c=a
A.eX(r,s)}},
co(a){var s,r=this
r.$ti.c.a(a)
s=r.bS()
r.a=8
r.c=a
A.eX(r,s)},
iy(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bS()
q.cn(a)
A.eX(q,r)},
bj(a){var s=this.bS()
this.jz(a)
A.eX(this,s)},
cY(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bT<1>").b(a)){this.eo(a)
return}this.ii(a)},
ii(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mk(null,null,s.b,t.O.a(new A.te(s,a)))},
eo(a){A.tf(this.$ti.i("bT<1>").a(a),this,!1)
return},
cm(a){this.a^=2
A.mk(null,null,this.b,t.O.a(new A.td(this,a)))},
$ibT:1}
A.tc.prototype={
$0(){A.eX(this.a,this.b)},
$S:0}
A.th.prototype={
$0(){A.eX(this.b,this.a.a)},
$S:0}
A.tg.prototype={
$0(){A.tf(this.a.a,this.b,!0)},
$S:0}
A.te.prototype={
$0(){this.a.co(this.b)},
$S:0}
A.td.prototype={
$0(){this.a.bj(this.b)},
$S:0}
A.tk.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mw(t.pF.a(q.d),t.z)}catch(p){s=A.ao(p)
r=A.cJ(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mK(q)
n=k.a
n.c=new A.b1(q,o)
q=n}q.b=!0
return}if(j instanceof A.ax&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ax){m=k.b.a
l=new A.ax(m.b,m.$ti)
j.dT(new A.tl(l,m),new A.tm(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tl.prototype={
$1(a){this.a.iy(this.b)},
$S:42}
A.tm.prototype={
$2(a,b){A.f5(a)
t.l.a(b)
this.a.bj(new A.b1(a,b))},
$S:157}
A.tj.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dS(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ao(l)
r=A.cJ(l)
q=s
p=r
if(p==null)p=A.mK(q)
o=this.a
o.c=new A.b1(q,p)
o.b=!0}},
$S:0}
A.ti.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lx(s)&&p.a.e!=null){p.c=p.a.li(s)
p.b=!1}}catch(o){r=A.ao(o)
q=A.cJ(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mK(p)
m=l.b
m.c=new A.b1(p,n)
p=m}p.b=!0}},
$S:0}
A.ll.prototype={}
A.lT.prototype={}
A.iX.prototype={$iyG:1}
A.lM.prototype={
my(a){var s,r,q
t.O.a(a)
try{if(B.z===$.an){a.$0()
return}A.zM(null,null,this,a,t.H)}catch(q){s=A.ao(q)
r=A.cJ(q)
A.wZ(A.f5(s),t.l.a(r))}},
fq(a){return new A.tH(this,t.O.a(a))},
mw(a,b){b.i("0()").a(a)
if($.an===B.z)return a.$0()
return A.zM(null,null,this,a,b)},
dS(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.an===B.z)return a.$1(b)
return A.Fm(null,null,this,a,b,c,d)},
mx(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.an===B.z)return a.$2(b,c)
return A.Fl(null,null,this,a,b,c,d,e,f)},
h0(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tH.prototype={
$0(){return this.a.my(this.b)},
$S:0}
A.uX.prototype={
$0(){A.BG(this.a,this.b)},
$S:0}
A.ix.prototype={
gt(a){return this.a},
gP(a){return this.a===0},
gX(a){return this.a!==0},
ga2(){return new A.eY(this,this.$ti.i("eY<1>"))},
gaB(){var s=this.$ti
return A.kg(new A.eY(this,s.i("eY<1>")),new A.to(this),s.c,s.y[1])},
U(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iD(a)},
iD(a){var s=this.d
if(s==null)return!1
return this.bk(this.eJ(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yI(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yI(q,b)
return r}else return this.iT(b)},
iT(a){var s,r,q=this.d
if(q==null)return null
s=this.eJ(q,a)
r=this.bk(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eu(s==null?m.b=A.wq():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eu(r==null?m.c=A.wq():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wq()
p=A.mp(b)&1073741823
o=q[p]
if(o==null){A.wr(q,p,[b,c]);++m.a
m.e=null}else{n=m.bk(o,b)
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
if(s!==m.e)throw A.c(A.as(m))}},
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
this.e=null}A.wr(a,b,c)},
eJ(a,b){return a[A.mp(b)&1073741823]}}
A.to.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iz.prototype={
bk(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eY.prototype={
gt(a){return this.a.a},
gP(a){return this.a.a===0},
gX(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iy(s,s.ev(),this.$ti.i("iy<1>"))},
q(a,b){return this.a.U(b)}}
A.iy.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.as(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia8:1}
A.cm.prototype={
eS(){return new A.cm(A.p(this).i("cm<1>"))},
gu(a){var s=this,r=new A.f0(s,s.r,A.p(s).i("f0<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gP(a){return this.a===0},
gX(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iC(b)},
iC(a){var s=this.d
if(s==null)return!1
return this.bk(s[this.d1(a)],a)>=0},
gR(a){var s=this.e
if(s==null)throw A.c(A.k("No elements"))
return A.p(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.p(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.es(s==null?q.b=A.ws():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.es(r==null?q.c=A.ws():r,b)}else return q.ib(b)},
ib(a){var s,r,q,p=this
A.p(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ws()
r=p.d1(a)
q=s[r]
if(q==null)s[r]=[p.d0(a)]
else{if(p.bk(q,a)>=0)return!1
q.push(p.d0(a))}return!0},
a6(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eX(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eX(s.c,b)
else return s.jt(b)},
jt(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d1(a)
r=n[s]
q=o.bk(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fh(p)
return!0},
iR(a,b){var s,r,q,p,o,n=this,m=A.p(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.c(A.as(n))
if(!0===o)n.a6(0,r)}},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dc()}},
es(a,b){A.p(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d0(b)
return!0},
eX(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fh(s)
delete a[b]
return!0},
dc(){this.r=this.r+1&1073741823},
d0(a){var s,r=this,q=new A.lC(A.p(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dc()
return q},
fh(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dc()},
d1(a){return J.az(a)&1073741823},
bk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ae(a[r].a,b))return r
return-1},
$iy7:1}
A.lC.prototype={}
A.f0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.as(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia8:1}
A.pA.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:155}
A.W.prototype={
gu(a){return new A.aI(a,this.gt(a),A.bP(a).i("aI<W.E>"))},
a1(a,b){return this.h(a,b)},
gP(a){return this.gt(a)===0},
gX(a){return!this.gP(a)},
gR(a){if(this.gt(a)===0)throw A.c(A.cy())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.ae(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.c(A.as(a))}return!1},
a8(a,b){var s,r
A.bP(a).i("l(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.c(A.as(a))}return!0},
M(a,b){var s,r
A.bP(a).i("l(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.c(A.as(a))}return!1},
Z(a,b){var s
if(this.gt(a)===0)return""
s=A.wk("",a,b)
return s.charCodeAt(0)==0?s:s},
dV(a,b){return new A.dC(a,b.i("dC<0>"))},
cb(a,b,c){var s=A.bP(a)
return new A.O(a,s.K(c).i("1(W.E)").a(b),s.i("@<W.E>").K(c).i("O<1,2>"))},
l(a,b){var s
A.bP(a).i("W.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cA(a,b){return new A.aU(a,A.bP(a).i("@<W.E>").K(b).i("aU<1,2>"))},
T(a,b){var s,r=A.bP(a)
r.i("i(W.E,W.E)?").a(b)
s=b==null?A.FX():b
A.kP(a,0,this.gt(a)-1,s,r.i("W.E"))},
ld(a,b,c,d){var s
A.bP(a).i("W.E?").a(d)
A.kF(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.w5(a,"[","]")},
$iQ:1,
$in:1,
$iD:1}
A.a6.prototype={
ar(a,b){var s,r,q,p=A.p(this)
p.i("~(a6.K,a6.V)").a(b)
for(s=this.ga2(),s=s.gu(s),p=p.i("a6.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga2().cb(0,new A.pC(this),A.p(this).i("L<a6.K,a6.V>"))},
bF(a,b,c,d){var s,r,q,p,o,n=A.p(this)
n.K(c).K(d).i("L<1,2>(a6.K,a6.V)").a(b)
s=A.o(c,d)
for(r=this.ga2(),r=r.gu(r),n=n.i("a6.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
jS(a){var s,r
for(s=J.S(A.p(this).i("n<L<a6.K,a6.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
U(a){return this.ga2().q(0,a)},
gt(a){var s=this.ga2()
return s.gt(s)},
gP(a){var s=this.ga2()
return s.gP(s)},
gX(a){var s=this.ga2()
return s.gX(s)},
gaB(){return new A.iA(this,A.p(this).i("iA<a6.K,a6.V>"))},
p(a){return A.wa(this)},
$iY:1}
A.pC.prototype={
$1(a){var s=this.a,r=A.p(s)
r.i("a6.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a6.V").a(s)
return new A.L(a,s,r.i("L<a6.K,a6.V>"))},
$S(){return A.p(this.a).i("L<a6.K,a6.V>(a6.K)")}}
A.pD.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:41}
A.iA.prototype={
gt(a){var s=this.a
return s.gt(s)},
gP(a){var s=this.a
return s.gP(s)},
gX(a){var s=this.a
return s.gX(s)},
gR(a){var s=this.a,r=s.ga2()
r=s.h(0,r.gR(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga2()
return new A.iB(r.gu(r),s,this.$ti.i("iB<1,2>"))}}
A.iB.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia8:1}
A.iR.prototype={
k(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.b8("Cannot modify unmodifiable map"))}}
A.fE.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.p(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
U(a){return this.a.U(a)},
ar(a,b){this.a.ar(0,A.p(this).i("~(1,2)").a(b))},
gP(a){var s=this.a
return s.gP(s)},
gX(a){var s=this.a
return s.gX(s)},
gt(a){var s=this.a
return s.gt(s)},
ga2(){return this.a.ga2()},
p(a){return this.a.p(0)},
gaB(){return this.a.gaB()},
gJ(){return this.a.gJ()},
bF(a,b,c,d){return this.a.bF(0,A.p(this).K(c).K(d).i("L<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.e6.prototype={}
A.du.prototype={
gP(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
I(a,b){var s
for(s=J.S(A.p(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bn(a){var s,r,q=this.bo(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a6(0,r)}return q},
p(a){return A.w5(this,"{","}")},
a8(a,b){var s
A.p(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Z(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.db(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.y(q.gn())
while(q.m())}else{r=s
do r=r+b+A.y(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.p(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gR(a){var s=this.gu(this)
if(!s.m())throw A.c(A.cy())
return s.gn()},
a1(a,b){var s,r
A.kE(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.c(A.p4(b,b-r,this,"index"))},
$iQ:1,
$in:1,
$ie3:1}
A.iL.prototype={
bn(a){var s,r,q,p=this,o=p.eS()
for(s=A.fU(p,p.r,A.p(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bo(a){var s=this.eS()
s.I(0,this)
return s}}
A.lZ.prototype={
l(a,b){this.$ti.c.a(b)
return A.Dy()}}
A.fT.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fU(s,s.r,A.p(s).c)},
bo(a){return this.a.bo(0)}}
A.h1.prototype={}
A.iS.prototype={}
A.lA.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jo(b):s}},
gt(a){return this.b==null?this.c.a:this.br().length},
gP(a){return this.gt(0)===0},
gX(a){return this.gt(0)>0},
ga2(){if(this.b==null){var s=this.c
return new A.aa(s,A.p(s).i("aa<1>"))}return new A.lB(this)},
gaB(){var s,r=this
if(r.b==null){s=r.c
return new A.au(s,A.p(s).i("au<2>"))}return A.kg(r.br(),new A.tq(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.r(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.U(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jK().k(0,b,c)},
U(a){if(this.b==null)return this.c.U(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ar(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.ar(0,b)
s=o.br()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ul(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.as(o))}},
br(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.d(Object.keys(this.a),t.s)
return s},
jK(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.o(t.N,t.z)
r=n.br()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.L(r)
n.a=n.b=null
return n.c=s},
jo(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ul(this.a[a])
return this.b[a]=s}}
A.tq.prototype={
$1(a){return this.a.h(0,A.r(a))},
$S:33}
A.lB.prototype={
gt(a){return this.a.gt(0)},
a1(a,b){var s=this.a
if(s.b==null)s=s.ga2().a1(0,b)
else{s=s.br()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga2()
s=s.gu(s)}else{s=s.br()
s=new J.eo(s,s.length,A.E(s).i("eo<1>"))}return s},
q(a,b){return this.a.U(b)}}
A.tO.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:45}
A.tN.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:45}
A.jq.prototype={
lA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kF(a4,a5,a2)
s=$.AA()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.ve(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.ve(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.e(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.e(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bl("")
g=o}else g=o
g.a+=B.b.G(a3,p,q)
c=A.aw(j)
g.a+=c
p=k
continue}}throw A.c(A.a4("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.G(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xB(a3,m,a5,n,l,r)
else{b=B.d.O(r-1,4)+1
if(b===1)throw A.c(A.a4(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bI(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xB(a3,m,a5,n,l,a)
else{b=B.d.O(a,4)
if(b===1)throw A.c(A.a4(a1,a3,a5))
if(b>1)a3=B.b.bI(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nc.prototype={}
A.es.prototype={}
A.jC.prototype={}
A.jL.prototype={}
A.hR.prototype={
p(a){var s=A.jM(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kc.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.kb.prototype={
aE(a,b){var s=A.F8(a,this.gkW().a)
return s},
ae(a,b){var s=A.De(a,this.gl8().b,null)
return s},
gl8(){return B.i9},
gkW(){return B.i8}}
A.pp.prototype={}
A.po.prototype={}
A.ts.prototype={
ha(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.G(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.G(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.G(a,r,q)
r=q+1
o=A.aw(92)
s.a+=o
o=A.aw(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.G(a,r,m)},
cZ(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.kc(a,null))}B.a.l(s,a)},
cN(a){var s,r,q,p,o=this
if(o.h9(a))return
o.cZ(a)
try{s=o.b.$1(a)
if(!o.h9(s)){q=A.y3(a,null,o.geV())
throw A.c(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.ao(p)
q=A.y3(a,r,o.geV())
throw A.c(q)}},
h9(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.ha(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cZ(a)
q.mN(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cZ(a)
r=q.mO(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return r}else return!1},
mN(a){var s,r,q=this.c
q.a+="["
s=J.aC(a)
if(s.gX(a)){this.cN(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cN(s.h(a,r))}}q.a+="]"},
mO(a){var s,r,q,p,o,n,m=this,l={}
if(a.gP(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e_(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ar(0,new A.tt(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.ha(A.r(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.e(r,n)
m.cN(r[n])}p.a+="}"
return!0}}
A.tt.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:41}
A.tr.prototype={
geV(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.l3.prototype={}
A.rI.prototype={
kp(a){return new A.tM(this.a).iE(t.J.a(a),0,null,!0)}}
A.tM.prototype={
iE(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.kF(b,c,J.cL(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DP(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DO(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.d3(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.DQ(o)
l.b=0
throw A.c(A.a4(m,a,p+l.c))}return n},
d3(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a_(b+c,2)
r=q.d3(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.d3(a,s,c,d)}return q.kV(a,b,c,d)},
kV(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bl(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
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
if(!(d>=0&&d<c))return A.e(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.e(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.e(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.e(a,l)
p=A.aw(a[l])
e.a+=p}else{p=A.yp(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aw(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.et.prototype={
a5(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.et)if(this.a===b.a)s=this.b===b.b
return s},
gN(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.f7.a(b)
s=B.d.F(this.a,b.a)
if(s!==0)return s
return B.d.F(this.b,b.b)},
p(a){var s=this,r=A.Bl(A.Cp(s)),q=A.jE(A.Cn(s)),p=A.jE(A.Cj(s)),o=A.jE(A.Ck(s)),n=A.jE(A.Cm(s)),m=A.jE(A.Co(s)),l=A.xI(A.Cl(s)),k=s.b,j=k===0?"":A.xI(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib3:1}
A.dR.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.dR&&this.a===b.a},
gN(a){return B.d.gN(this.a)},
F(a,b){return B.d.F(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a_(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a_(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.dF(B.d.p(o%1e6),6,"0")},
$ib3:1}
A.lt.prototype={
p(a){return this.v()},
$iC:1}
A.am.prototype={
gbM(){return A.Ci(this)}}
A.jm.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jM(s)
return"Assertion failed"}}
A.dy.prototype={}
A.ct.prototype={
gd7(){return"Invalid argument"+(!this.a?"(s)":"")},
gd6(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.gd7()+q+o
if(!s.a)return n
return n+s.gd6()+": "+A.jM(s.gdA())},
gdA(){return this.b}}
A.fK.prototype={
gdA(){return A.wA(this.b)},
gd7(){return"RangeError"},
gd6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.k3.prototype={
gdA(){return A.f(this.b)},
gd7(){return"RangeError"},
gd6(){if(A.f(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.il.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kZ.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fQ.prototype={
p(a){return"Bad state: "+this.a}}
A.jz.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jM(s)+"."}}
A.kr.prototype={
p(a){return"Out of Memory"},
gbM(){return null},
$iam:1}
A.ie.prototype={
p(a){return"Stack Overflow"},
gbM(){return null},
$iam:1}
A.ta.prototype={
p(a){return"Exception: "+this.a}}
A.G.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.G(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.e(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.e(e,n)
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
k=""}return g+l+B.b.G(e,i,j)+k+"\n"+B.b.ao(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.n.prototype={
cA(a,b){return A.Ba(this,A.p(this).i("n.E"),b)},
cb(a,b,c){var s=A.p(this)
return A.kg(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
cM(a,b){var s=A.p(this)
return new A.H(this,s.i("l(n.E)").a(b),s.i("H<n.E>"))},
dV(a,b){return new A.dC(this,b.i("dC<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.ae(s.gn(),b))return!0
return!1},
bc(a,b,c,d){var s,r
d.a(b)
A.p(this).K(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a8(a,b){var s
A.p(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Z(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.db(q.gn())
if(!q.m())return s
r=b.gP(b)
if(r){r=s
do r+=J.db(q.gn())
while(q.m())}else{r=s
do r=r+A.y(b)+J.db(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.p(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bK(a,b){var s=A.J(this,A.p(this).i("n.E"))
return s},
bJ(a){return this.bK(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gP(a){return!this.gu(this).m()},
gX(a){return!this.gP(this)},
gR(a){var s=this.gu(this)
if(!s.m())throw A.c(A.cy())
return s.gn()},
gaQ(a){var s,r=this.gu(this)
if(!r.m())throw A.c(A.cy())
s=r.gn()
if(r.m())throw A.c(A.xV())
return s},
aW(a,b,c){var s,r=A.p(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.c(A.cy())},
af(a,b){return this.aW(0,b,null)},
a1(a,b){var s,r
A.kE(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.c(A.p4(b,b-r,this,"index"))},
p(a){return A.C_(this,"(",")")}}
A.L.prototype={
p(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.aq.prototype={
gN(a){return A.I.prototype.gN.call(this,0)},
p(a){return"null"}}
A.I.prototype={$iI:1,
a5(a,b){return this===b},
gN(a){return A.i5(this)},
p(a){return"Instance of '"+A.kA(this)+"'"},
ga4(a){return A.xd(this)},
toString(){return this.p(this)}}
A.lW.prototype={
p(a){return""},
$icZ:1}
A.rp.prototype={
gl6(){var s,r=this.b
if(r==null)r=$.qg.$0()
s=r-this.a
if($.xo()===1e6)return s
return s*1000}}
A.bl.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCI:1}
A.rH.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.r(b)
s=B.b.bD(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wx(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.G(b,0,s)
q=B.b.b1(b,s+1)
p=this.a
a.k(0,A.wx(r,0,r.length,p,!0),A.wx(q,0,q.length,p,!0))}return a},
$S:152}
A.rG.prototype={
$2(a,b){throw A.c(A.a4("Illegal IPv6 address, "+a,this.a,b))},
$S:151}
A.iT.prototype={
gfb(){var s,r,q,p,o=this,n=o.w
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
gN(a){var s,r=this,q=r.y
if(q===$){s=B.b.gN(r.gfb())
r.y!==$&&A.Al()
r.y=s
q=s}return q},
gb_(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yx(s==null?"":s)
r.z!==$&&A.Al()
q=r.z=new A.e6(s,t.hL)}return q},
gh7(){return this.b},
gdw(){var s=this.c
if(s==null)return""
if(B.b.V(s,"[")&&!B.b.ac(s,"v",1))return B.b.G(s,1,s.length-1)
return s},
gdH(){var s=this.d
return s==null?A.yU(this.a):s},
gdK(){var s=this.f
return s==null?"":s},
gfH(){var s=this.r
return s==null?"":s},
gfI(){return this.c!=null},
gfK(){return this.f!=null},
gfJ(){return this.r!=null},
p(a){return this.gfb()},
a5(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge1())if(p.c!=null===b.gfI())if(p.b===b.gh7())if(p.gdw()===b.gdw())if(p.gdH()===b.gdH())if(p.e===b.gfV()){r=p.f
q=r==null
if(!q===b.gfK()){if(q)r=""
if(r===b.gdK()){r=p.r
q=r==null
if(!q===b.gfJ()){s=q?"":r
s=s===b.gfH()}}}}return s},
$il1:1,
ge1(){return this.a},
gfV(){return this.e}}
A.rF.prototype={
gh6(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.b.cE(s,"?",m)
q=s.length
if(r>=0){p=A.iU(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lp("data","",n,n,A.iU(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lQ.prototype={
gfI(){return this.c>0},
gfK(){return this.f<this.r},
gfJ(){return this.r<this.a.length},
ge1(){var s=this.w
return s==null?this.w=this.iB():s},
iB(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.V(r.a,"http"))return"http"
if(q===5&&B.b.V(r.a,"https"))return"https"
if(s&&B.b.V(r.a,"file"))return"file"
if(q===7&&B.b.V(r.a,"package"))return"package"
return B.b.G(r.a,0,q)},
gh7(){var s=this.c,r=this.b+3
return s>r?B.b.G(this.a,r,s-1):""},
gdw(){var s=this.c
return s>0?B.b.G(this.a,s,this.d):""},
gdH(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.A9(B.b.G(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.V(r.a,"http"))return 80
if(s===5&&B.b.V(r.a,"https"))return 443
return 0},
gfV(){return B.b.G(this.a,this.e,this.f)},
gdK(){var s=this.f,r=this.r
return s<r?B.b.G(this.a,s+1,r):""},
gfH(){var s=this.r,r=this.a
return s<r.length?B.b.b1(r,s+1):""},
gb_(){if(this.f>=this.r)return B.d6
return new A.e6(A.yx(this.gdK()),t.hL)},
gN(a){var s=this.x
return s==null?this.x=B.b.gN(this.a):s},
a5(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il1:1}
A.lp.prototype={}
A.pS.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vP.prototype={
$1(a){return this.a.dj(this.b.i("0/?").a(a))},
$S:24}
A.vQ.prototype={
$1(a){if(a==null)return this.a.fs(new A.pS(a===undefined))
return this.a.fs(a)},
$S:24}
A.va.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zy(a))return a
s=this.a
a.toString
if(s.U(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aY(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fa(!0,"isUtc",t.y)
return new A.et(r,0,!0)}if(a instanceof RegExp)throw A.c(A.x("structured clone of RegExp",null))
if(a instanceof Promise)return A.bQ(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.o(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c9(n),p=s.gu(n);p.m();)m.push(A.hh(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.f(a.length)
for(s=J.aC(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:141}
A.lz.prototype={
aO(a){if(a<=0||a>4294967296)throw A.c(A.yf(u.w+a))
return Math.random()*a>>>0},
aI(){return Math.random()},
$iwh:1}
A.ec.prototype={
bN(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a_(a-s,k)
r=a>>>0
a=B.d.a_(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a_(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a_(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a_(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a_(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a_(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.b9()
l.b9()
l.b9()
l.b9()},
b9(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a_(o-n+(q-p)+(m-r),4294967296)>>>0},
aO(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.yf(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b9()
return(p.a&s)>>>0}do{p.b9()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aI(){var s,r=this
r.b9()
s=r.a
r.b9()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwh:1}
A.qj.prototype={
C(){var s,r=this
if(B.a.M(A.d([r.d,r.e,r.f,r.r,r.w],t.t),new A.qk()))throw A.c(B.h8)
s=r.y
if(!isFinite(s)||s<1)throw A.c(B.fs)}}
A.qk.prototype={
$1(a){return A.f(a)<=0},
$S:27}
A.eH.prototype={
v(){return"QualityProfileKind."+this.b}}
A.eG.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bn(B.lo)
if(q.a!==0)throw A.c(A.ah(q,s,"contains unknown pipeline features"))
if(this.a===B.bv&&r.gX(r))throw A.c(A.ah(r,s,"safe profiles cannot install optional features"))}}
A.fu.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.ky.prototype={}
A.nq.prototype={
bV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.c(A.k("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.j(A.k("configuration state is not initialized"))
if(p.c!=null)A.j(A.k("a configuration transition is already open"))
a2.C()
n=A.i1(a2)
m=p.d
l=p.b
if(l==null)A.j(A.k("resource state is not initialized"))
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
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.nt(m,a2,n,new A.nr(A.eN(g,k),A.eN(f,k),A.eN(e,k),A.eN(d,k),c,b,o.z!==a2.z),B.cd)
p.c=a
s=a
try{r=a1.b.cH(s.c)
q=new A.ky(s,r,B.aY)
a1.c=q
return q}catch(a0){p.fl(s)
throw a0}},
bW(a){var s,r,q,p=this
p.ey(a)
s=p.a
r=a.a
s.ez(r)
q=s.d
if(r.a!==q)A.j(A.k("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eC
s.c=null
p.b.bW(a.b)
a.c=B.eK
p.c=null},
ey(a){if(this.c!==a||a.c!==B.aY)throw A.c(A.k("coordinated transition is not open"))}}
A.fq.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nr.prototype={}
A.nt.prototype={}
A.ns.prototype={
fl(a){this.ez(a)
a.e=B.eD
this.c=null},
ez(a){if(this.c!==a||a.e!==B.cd)throw A.c(A.k("configuration transition is not open"))}}
A.kx.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.N(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",m.x,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.K(q,A.p(q).i("K<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.c(A.x("PostProcessState."+o+" must be >= 0: "+A.y(n),l))}q=m.as
if(q<1||q>8)throw A.c(A.x("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.c(A.x("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),l))
if(r>1)throw A.c(A.x("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(r),l))}}
A.fn.prototype={}
A.jS.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gam(0)||!k.b.gam(0)||!k.r.gam(0))throw A.c(A.x("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.x("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.c(A.x("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gam(0)||r.gc8()<1e-12)A.j(A.x("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.j(A.x("DirectionalLight.intensity must be >= 0: "+A.y(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.x("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.j(A.x("PointLight.intensity must be >= 0: "+A.y(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.j(A.x("PointLight.radius must be > 0: "+A.y(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
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
A.o6.prototype={}
A.dt.prototype={
a5(a,b){if(b==null)return!1
return J.fe(b)===A.xd(this)&&b instanceof A.dt&&this.a===b.a&&this.b===b.b},
gN(a){return A.cC(A.xd(this),this.a,this.b,B.f,B.f,B.f)}}
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
A.ks.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cw.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.ez.prototype={
v(){return"HandleRejection."+this.b}}
A.k1.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.bV.prototype={
gam(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a5(a,b){if(b==null)return!1
return b instanceof A.bV&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.nO.prototype={}
A.kw.prototype={}
A.bC.prototype={}
A.vR.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.F(b.a,a.a)
return s===0?B.d.F(a.b.a,b.b.a):s},
$S:134}
A.jl.prototype={
v(){return"AlphaMode."+this.b}}
A.eC.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.c(A.x("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.c(A.x("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.c(A.x("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.wd("roughness",l.z)
A.wd("metallic",0)
A.wd("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aV("uvScaleU",s),new A.aV("uvScaleV",r),new A.aV("uvOffsetU",0),new A.aV("uvOffsetV",0),new A.aV("tintR",l.c),new A.aV("tintG",l.d),new A.aV("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.c(A.x("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.c(A.x("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.c(A.x("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d2.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bD.prototype={}
A.rJ.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.W[s]
q=r.c
if(q<=0)throw A.c(A.x(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.c(A.x(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rK())
for(p=B.a.gu(B.W),q=new A.T(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.c(A.x('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rK.prototype={
$1(a){return t.qY.a(a).a===B.dP},
$S:21}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.O(s,14)!==0)throw A.c(A.x("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jN()
r=n.c
if(r!=null){q=s/14|0
for(s=A.C7(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.c(A.x("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gam(0)&&s.b.gam(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.x("MeshData.localBounds must be a valid AABB",null))},
jN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.H(B.W,a2.a(new A.pH()),a3)
if(!a4.gu(0).m())return
s=new A.H(B.W,a2.a(new A.pI()),a3)
if(s.gt(0)!==1)throw A.c(A.x("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaQ(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaQ(0).b,n=r.b,m=0;m<q;++m){l=m*14
k=l+o
if(!(k<a3))return A.e(a2,k)
j=a2[k]
i=k+1
if(!(i<a3))return A.e(a2,i)
h=a2[i]
k+=2
if(!(k<a3))return A.e(a2,k)
g=a2[k]
k=l+n
if(!(k<a3))return A.e(a2,k)
f=a2[k]
i=k+1
if(!(i<a3))return A.e(a2,i)
e=a2[i]
i=k+2
if(!(i<a3))return A.e(a2,i)
d=a2[i]
k+=3
if(!(k<a3))return A.e(a2,k)
c=a2[k]
b=j*j+h*h+g*g
a=f*f+e*e+d*d
if(!B.a.a8(A.d([j,h,g,f,e,d,c],p),new A.pJ()))throw A.c(A.x("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.c(A.x("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.c(A.x("surface-v2 tangent must be orthogonal to its normal: "+A.y(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.c(A.x("surface-v2 tangent handedness must be -1 or +1: "+A.y(c),a1))}}}
A.pH.prototype={
$1(a){return t.qY.a(a).a===B.dP},
$S:21}
A.pI.prototype={
$1(a){return t.qY.a(a).a===B.dO},
$S:21}
A.pJ.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.pU.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.c(A.x("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.pV()))throw A.c(A.x("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.c(A.x("resource history does not match vhsOutput ownership",null))}}
A.pV.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.fM.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kz.prototype={}
A.kJ.prototype={
fM(a){var s=this
if(s.d)A.j(A.k("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.k("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cH(a){var s=this
if(s.d)A.j(A.k("resource assembler is disposed"))
if(s.a==null)throw A.c(A.k("resource assembler is not initialized"))
if(s.b!=null)throw A.c(A.k("resource assembly is already open"))
a.C()
return s.b=new A.kz(s.c,a,B.bC)},
bW(a){var s,r=this
if(r.d)A.j(A.k("resource assembler is disposed"))
r.f0(a)
s=r.c
if(a.a!==s)throw A.c(A.k("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.kX
r.b=null},
dR(a){if(this.d)A.j(A.k("resource assembler is disposed"))
this.f0(a)
a.c=B.kY
this.b=null},
a0(){var s=this
if(s.d)return
if(s.b!=null)throw A.c(A.k("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f0(a){if(this.b!==a||a.c!==B.bC)throw A.c(A.k("resource assembly is not prepared"))}}
A.fv.prototype={
v(){return"DrawMode."+this.b}}
A.js.prototype={
v(){return"BlendMode."+this.b}}
A.bz.prototype={}
A.kV.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.c(A.x("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.x("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.x("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jy.prototype={
v(){return"ColorEncoding."+this.b}}
A.hw.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.kH.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.c(A.x("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.c(A.x("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.c(A.x("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.c(A.x("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eK.prototype={
v(){return"RendererState."+this.b}}
A.aH.prototype={}
A.o8.prototype={
fU(a){var s=this.z.h(0,a)
return s==null?B.cp:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.kh.prototype={
ml(a){return this.a.c0(a)}}
A.pG.prototype={
$3(a,b,c){return new A.cB(A.f(a),A.f(b),A.aA(c))},
$S:118}
A.l0.prototype={}
A.pK.prototype={
bl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yD(f,new A.jV(e.byteLength,B.cE,B.hp))
if(f.b!==B.h)A.j(A.k(g))
s=A.b(d.a)
r=f.a
q=v.G
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d5(f)
A.bE(f,p)
if(f.b!==B.h)A.j(A.k(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a0(t.S)
for(n=a.a,m=0;m<6;++m){l=B.W[m]
k=A.zT(l.a)
if(!o.l(0,k))continue
j=A.Ed(n,k,l)
if(f.b!==B.h)A.j(A.k(g))
r.vertexAttribPointer.apply(r,[k,j,A.f(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.k(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yD(f,new A.jV(A.ya(i),B.cE,B.cD))
if(f.b!==B.h)A.j(A.k(g))
r.bindBuffer(A.f(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(h.a))
A.D2(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l0(d,h,p,f,e.length/14|0,!1)},
dP(a){var s=this.c.h(0,a.a)
if(s==null)throw A.c(A.dW(B.aB,a))
this.b.c0(a)
return s},
b6(a){var s,r,q=this.c.a6(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.b6(a)},
dN(){var s,r,q,p
for(s=this.b.bE(),r=s.$ti,s=new A.cH(s.a(),r.i("cH<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bl(p.b))}},
gc9(){return this.b.bE().bc(0,0,new A.pM(),t.S)}}
A.pL.prototype={
$3(a,b,c){return new A.bv(A.f(a),A.f(b),A.aA(c))},
$S:114}
A.pM.prototype={
$2(a,b){var s,r
A.f(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.ya(s)
return a+r+s},
$S:110}
A.ck.prototype={}
A.e5.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.bY.prototype={}
A.ry.prototype={
cp(a){var s=this.a,r=A.E(s)
return new A.H(s,r.i("l(1)").a(new A.rz(a)),r.i("H<1>")).gt(0)}}
A.rz.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:88}
A.rw.prototype={
m5(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.o(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.j(A.x("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.j(A.ah(n,"handle","must be valid"))
if(s.U(o))throw A.c(A.x("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("au<2>")
m=A.J(new A.au(s,r),r.i("n.E"))
B.a.T(m,new A.rx())
r=t.Aj
l=A.a0(r)
k=A.o(r,t.bp)
j=A.d([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.t)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jn(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.bY(p,i))}r=l.a
return new A.ry(A.aj(j,t.d),r)},
jn(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.q()
if(s.fc(a,r)===s.d)return B.dI
this.b.k(0,a,!0)
return B.dH}catch(q){if(A.ao(q) instanceof A.k1){s=this.b.h(0,a)===!0?B.dK:B.dJ
return s}else throw q}}}
A.rx.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:104}
A.dD.prototype={}
A.kX.prototype={
aT(a){var s=this.a,r=A.wn(s,B.hu)
A.wo(s,r,0,a)
return r},
mF(a,b){var s,r,q,p=this,o=p.b,n=o.c0(a),m=A.J(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.h5(a,new A.dD(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wn(p.a,s)
o.k(0,r,q)}A.wo(p.a,q,0,b)},
fc(a,b){var s
this.b.c0(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mh(a){var s
if(a==null){s=this.d
s===$&&A.q()
return s}s=this.d
s===$&&A.q()
return this.fc(a,s)},
mp(a){var s=this.e
s===$&&A.q()
return s},
mr(a){var s=this.f
s===$&&A.q()
return s},
mj(a){var s=this.r
s===$&&A.q()
return s},
mn(a){var s=this.w
s===$&&A.q()
return s},
a0(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ai(s,s.r,s.e,A.p(s).i("ai<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.L(0)
s=n.d
s===$&&A.q()
A.le(q,s)
s=n.e
s===$&&A.q()
A.le(q,s)
s=n.f
s===$&&A.q()
A.le(q,s)
s=n.r
s===$&&A.q()
A.le(q,s)
s=n.w
s===$&&A.q()
A.le(q,s)},
dN(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aT($.xn())
i.e=i.aT($.xk())
i.f=i.aT($.xl())
i.r=i.aT($.xj())
i.w=i.aT($.xm())
for(s=i.b.bE(),r=s.$ti,s=new A.cH(s.a(),r.i("cH<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a8(o,new A.rC()))continue
l=A.wn(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wo(p,l,k,j)}q.k(0,n.a,l)}},
gc9(){return this.b.bE().bc(0,0,new A.rB(),t.S)}}
A.rA.prototype={
$3(a,b,c){return new A.bm(A.f(a),A.f(b),A.aA(c))},
$S:102}
A.rC.prototype={
$1(a){return t.Fx.a(a)==null},
$S:98}
A.rB.prototype={
$2(a,b){var s
A.f(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:93}
A.eB.prototype={
gll(){return this.b.length}}
A.jQ.prototype={
kc(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qn(A.d([],t.pq),A.a0(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].ak(s,b)
o=s.kb(a,!1)
if(o.b.length!==0)return new A.jR(o,B.iP)
q=o.a
n=A.E(q)
m=new A.O(q,n.i("h(1)").a(new A.o1()),n.i("O<1,h>")).bo(0)
l=A.d([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.aj(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.c(A.k('RenderFeature "'+k.ga9()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.T(l,new A.o2(o))
return new A.jR(o,l)},
bA(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)s[q].a0()}}
A.o1.prototype={
$1(a){return t.A.a(a).a},
$S:86}
A.o2.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.F(B.a.dz(s,new A.o_(a)),B.a.dz(s,new A.o0(b)))},
$S:83}
A.o_.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.o0.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.jR.prototype={}
A.ev.prototype={
v(){return"FrameQueueState."+this.b}}
A.o7.prototype={}
A.o5.prototype={
k8(a){if(a.length===0)throw A.c(A.ah(a,"passId",null))
this.b=a
this.a.cd(a,A.A2())},
hJ(){var s,r,q,p,o=t.z
o=A.o(o,o)
for(s=this.a,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aH(p.a,p.b,p.d))}return A.b4(o,t.N,t.pH)},
bt(a,b){var s,r=this.b
if(r==null)throw A.c(A.k("draw recorded outside an active render pass"))
if(b<1)throw A.c(A.x("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a_(a,3)*b}}
A.fV.prototype={}
A.av.prototype={
gbH(){var s=this.c,r=A.E(s)
return new A.H(s,r.i("l(1)").a(new A.pY()),r.i("H<1>"))},
gci(){var s=this.c,r=A.E(s)
return new A.H(s,r.i("l(1)").a(new A.pZ()),r.i("H<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pY.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:25}
A.pZ.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:25}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bf.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i9.prototype={
v(){return"ResourceFormat."+this.b}}
A.cS.prototype={
v(){return"GraphStage."+this.b}}
A.aJ.prototype={
fQ(){var s=this
return new A.aJ(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.aJ&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gN(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fL.prototype={
v(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.hs.prototype={}
A.kB.prototype={
av(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.D4(m.a,a.c,r.a(a.d.ga2().bJ(0)),r.a(a.f),a.b)}catch(q){if(A.ao(q) instanceof A.ic){++m.e
throw q}else throw q}p=new A.hs(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
bA(){var s=this.b
this.iI(new A.au(s,A.p(s).i("au<2>")))
s.L(0)},
iI(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ai(s,s.r,s.e,a.$ti.i("ai<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bk.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.x("ProgramSource.id must not be empty",m))
s=t.S
r=A.a0(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.c(A.x('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.c(A.x('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a0(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.c(A.x('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.c(A.x('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.ql.prototype={}
A.b6.prototype={
ah(){var s=this
return A.xL(B.e8,s.f,B.ap,B.aa,!0,!0,!0,!0,s.r,B.at,B.au,s.d,s.e,!0,!1,!1)}}
A.qn.prototype={
kb(a,b){var s=this.jL(t.Q.a(a),!1),r=this.a,q=A.E(r)
return new A.qm(A.aj(new A.H(r,q.i("l(1)").a(new A.qs()),q.i("H<1>")),t.A),s)},
jL(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.d([],t.ka)
r=m.a
q=A.E(r)
p=q.i("H<1>")
o=A.J(new A.H(r,q.i("l(1)").a(new A.qr()),p),p.i("n.E"))
m.ip(o,a,s)
m.it(o,s)
m.iv(o,s)
m.is(o,!1,s)
n=m.ix(o,s)
m.iu(o,n,s)
m.iw(o,s)
m.ir(o,n,s)
m.iq(o,s)
return s},
ip(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.a3.bn(b)
if(p.a!==0)B.a.l(c,new A.bf(B.hF,q.a,"missing capabilities: "+p.Z(0,", ")))}},
it(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbH(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bf(B.hA,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
iv(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.E(a),r=s.i("l(1)").a(new A.qq()),q=B.a.gu(a),s=new A.T(q,r,s.i("T<1>"));s.m();){r=q.gn()
p=r.gbH()
o=A.J(p,p.$ti.i("n.E"))
p=r.gci()
n=A.J(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bf(B.b2,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaQ(o).a
l=B.a.gaQ(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bf(B.b2,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bf(B.b2,r.a,"resolve source and destination must match format and extent"))}},
is(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bf(B.hD,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
ix(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.o(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gci(),n=J.S(o.a),o=new A.T(n,o.b,o.$ti.i("T<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bf(B.hz,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iu(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbH(),p=J.S(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bf(B.cJ,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bD(a,m)>s)B.a.l(c,new A.bf(B.cJ,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
iw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbH(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gci(),k=J.S(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bf(B.hC,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
ir(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbH(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gci().af(0,new A.qp(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bf(B.hB,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
iq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.o(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gci(),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.xW(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a0(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbH(),p=J.S(s.a),s=new A.T(p,s.b,s.$ti.i("T<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].l(0,q)}}p=t.y
j=A.e_(s,!1,!1,p)
s=a.length
i=A.e_(s,!1,!1,p)
h=new A.qo(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.l(b,new A.bf(B.hE,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qs.prototype={
$1(a){t.A.a(a)
return A.wf()},
$S:9}
A.qr.prototype={
$1(a){t.A.a(a)
return A.wf()},
$S:9}
A.qq.prototype={
$1(a){return t.A.a(a).f},
$S:9}
A.qp.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:25}
A.qo.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.e(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.e(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.e(r,a)
r=r[a]
r=A.fU(r,r.r,A.p(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:27}
A.qm.prototype={}
A.ly.prototype={$ibX:1,
ga9(){return this.a},
gD(){return this.b},
gdX(){return this.c}}
A.i7.prototype={
fk(a){var s,r,q=a.c,p=q.a
if(!p.gam(0))A.j(A.x("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.x("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.x(u.u,null))
s=this.a.c0(a.a)
q=q.ab()
p=s.d.gaw()
r=A.E(p)
return A.be(new A.O(p,r.i("M(1)").a(q.gaA()),r.i("O<1,M>")))},
gfO(){return new A.cn(this.lu(),t.Br)},
lu(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gfO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bE(),n=o.$ti,o=new A.cH(o.a(),n.i("cH<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.a3(f)
f=f.a
if(!(f>=0&&f<j.length)){A.e(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ab()
f=f.gaw()
d=A.E(f)
r=5
return a.b=new A.ly(h,g,A.be(new A.O(f,d.i("M(1)").a(i.gaA()),d.i("O<1,M>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCw:1}
A.qt.prototype={
$3(a,b,c){return new A.cw(A.f(a),A.f(b),A.aA(c))},
$S:79}
A.qx.prototype={
h1(a,b){var s,r
if(this.x)A.j(A.k("resource library is disposed"))
s=this.a
a.C()
r=s.b.aD(a,b)
s.c.k(0,r.a,s.bl(a))
this.f.l(0,r)
return r},
ma(a){if(this.x)A.j(A.k("resource library is disposed"))
this.a.b6(a)
this.f.a6(0,a)},
m9(a){var s
if(this.x)A.j(A.k("resource library is disposed"))
a.C()
s=this.b.a.aD(a,null)
this.r.l(0,s)
return s},
dM(a,b,c){var s,r
if(this.x)A.j(A.k("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.j(A.x("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.j(A.x("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aD(new A.dD(new A.jX(c,b,1,!1,B.az,B.az,B.cG,1),A.e_(1,null,!1,t.Fx),!1),a)
this.w.l(0,r)
return r},
a0(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.J(s,A.p(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.a6(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b6(k)}r=i.r
q=A.J(r,A.p(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.b6(q[l])
q=i.f
o=A.J(q,A.p(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.b6(o[l])
s.L(0)
r.L(0)
q.L(0)
p.a0()
i.x=!0}}
A.tb.prototype={}
A.lX.prototype={$ibX:1,
ga9(){return this.a},
gD(){return this.b},
gdX(){return this.c}}
A.uC.prototype={
$1(a){var s=this.a.w.a.dP(a),r=s.b!=null,q=r?s.d:s.e
return new A.i8(s.c,r,q,s.f)},
$S:77}
A.uD.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().fR(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().fR(b)
throw A.c(A.k("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:71}
A.uB.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uu.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gR(r)},
$S:70}
A.uv.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bg
s=q.b.z
r=s.length===0?null:B.a.gR(s)
return A.Gr(s,3,q.a.d,r)},
$S:69}
A.uA.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.up.prototype={
$0(){return this.a.at.a},
$S:59}
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
s===$&&A.q()
return s},
$S:4}
A.ut.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.us.prototype={
$0(){return this.a.at.w},
$S:46}
A.uE.prototype={
$0(){return this.a},
$S:47}
A.tI.prototype={}
A.lJ.prototype={$iCv:1}
A.lv.prototype={$iBI:1}
A.qC.prototype={
gbf(){var s=this.w
return s==null?A.j(A.k("renderer is not initialized")):s},
fN(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bA)throw A.c(A.k("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.U)throw A.c(A.k("renderer device is context lost"))
m.e=B.kW
try{m.r=s.h_()
r=m.b
q=A.i1(a)
p=r.a
if(p.a!=null)A.j(A.k("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.i1(a)
p.d=1
r.b.fM(q)
r=A.C6()
m.w=new A.qx(A.C8(s),r,A.CK(s),A.a0(t.kc),A.a0(t.pw),A.a0(t.Aj))
r=new A.kJ()
p=new A.os(s,r)
q=A.i1(a)
o=p.d2(q,a)
r.fM(q)
p.c=new A.fI(new A.kz(0,q,B.bC),o,B.af)
m.x=p
m.y=new A.kB(s,A.o(t.N,t.CH))
m.as=a
A.zk(m)
m.e=B.bB}catch(n){s=m.y
if(s!=null)s.bA()
s=m.x
if(s!=null)s.a0()
s=m.w
if(s!=null)s.a0()
m.w=null
m.e=B.bA
throw n}return A.xO(t.H)},
k6(a,b){var s,r,q,p,o,n,m=this,l=null
m.jr()
m.bQ()
r=B.a.q(m.d,a)
if(!r)throw A.c(A.x("world was not created by this renderer",l))
if(m.at!=null)throw A.c(A.k("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gam(0))A.j(A.x("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gam(0)||q.gc8()<1e-12)A.j(A.x("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.x("CameraView requires 0 < near < far, got "+A.y(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.x("CameraView.aspect must be finite and > 0: "+A.y(q),l))
if(!r.a.gam(0)||!r.b.gam(0)||!r.c.gam(0))A.j(A.x("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.j(A.x("FrameInput.timeSeconds must be finite: "+A.y(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ay)A.j(A.k("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ay
o.c=0
B.a.L(o.a)
s=o
try{r=m.r
if((r==null?A.j(A.k("renderer is not initialized")):r).z)m.b$=m.a.k7()
return s}catch(n){if(o.b!==B.ay)A.j(A.k("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hd
m.eg()
m.ax=m.at=null
throw n}},
l9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bQ()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.c(A.k("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ay)A.j(A.k("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.kU(l,0,A.fa(m.c,"count",t.S),A.E(l).c).bK(0,!1)
m.b=B.hc
q=k
try{p=A.Ep(a1,r,s,q)
o=p.a.hJ()
m=o.gJ().cM(0,new A.qD())
l=m.$ti
n=new A.cA(m,l.i("aH(1)").a(new A.qE()),l.i("cA<1,aH>")).bc(0,B.cp,new A.qF(),t.pH)
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
return new A.o8(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.iS(s.e)
a1.ax=a1.at=null}},
jr(){var s,r,q,p=this
if(p.e!==B.du)return
if(p.a.b===B.U)throw A.c(A.k("renderer context remains lost"))
s=p.w
if(s.x)A.j(A.k("resource library is disposed"))
s.a.dN()
s.c.dN()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.k("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.k("GPU resource adapter is not initialized"))
s.c=new A.fI(q.a,s.d2(A.i1(r),r),B.af)
s=p.y
s.c=null
s.b.L(0)
A.zk(p)
p.e=B.bB},
bQ(){var s=this,r=s.e
if(r!==B.bB)throw A.c(A.k("renderer is not ready: "+r.b))
if(s.a.b===B.U){s.iK()
s.e=B.du
throw A.c(A.k("renderer context lost"))}}}
A.qD.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.qE.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.qF.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aH(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lG.prototype={}
A.tn.prototype={
iS(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.k(u.k))
r=s.fe(o)
if(r.b)A.j(A.k("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lG(o))}catch(q){p.d4(o)}},
eg(){var s=this.b$
this.b$=null
if(s!=null)this.d4(s)},
iK(){var s,r,q
this.eg()
s=this.a$
r=J.xZ(s.slice(0),A.E(s).c)
B.a.L(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.d4(r[q].b)},
d4(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fe(a).a)}catch(r){}}}
A.lN.prototype={}
A.id.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bL.prototype={
F(a,b){var s,r=this
t.BB.a(b)
s=B.d.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.F(r.c.a,b.c.a)
if(s!==0)return s
return B.d.F(r.d,b.d)},
$ib3:1}
A.bJ.prototype={
F(a,b){var s
t.z3.a(b)
s=B.c.F(b.a,this.a)
if(s!==0)return s
return B.d.F(this.b,b.b)},
$ib3:1}
A.aO.prototype={}
A.vV.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.F(0,s.a(b).a)},
$S:51}
A.vW.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.vT.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.vU.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.nJ.prototype={}
A.nI.prototype={}
A.jh.prototype={
gaw(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.d([new A.M(o,n,p),new A.M(r,n,p),new A.M(o,q,p),new A.M(r,q,p),new A.M(o,n,s),new A.M(r,n,s),new A.M(o,q,s),new A.M(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eE.prototype={}
A.fy.prototype={
v(){return"FrustumTest."+this.b}}
A.o9.prototype={
mz(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.he:B.hf}}
A.oa.prototype={
$4(a,b,c,d){var s=new A.M(a,b,c),r=new A.eE(s,d),q=Math.sqrt(s.gc8())
if(q<1e-9)s=r
else{s=1/q
s=new A.eE(new A.M(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dp.prototype={
ao(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.dp(h)},
h3(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.cV.a(a)
s=a.a
r=this.a
q=r.length
if(0>=q)return A.e(r,0)
p=r[0]
o=a.b
if(4>=q)return A.e(r,4)
n=r[4]
m=a.c
if(8>=q)return A.e(r,8)
l=r[8]
if(12>=q)return A.e(r,12)
k=s*p+o*n+m*l+r[12]
l=r[1]
n=r[5]
p=r[9]
if(13>=q)return A.e(r,13)
j=s*l+o*n+m*p+r[13]
p=r[2]
n=r[6]
l=r[10]
if(14>=q)return A.e(r,14)
i=s*p+o*n+m*l+r[14]
l=r[3]
n=r[7]
p=r[11]
if(15>=q)return A.e(r,15)
h=s*l+o*n+m*p+r[15]
return h===0||h===1?new A.M(k,j,i):new A.M(k/h,j/h,i/h)},
dD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
if(0>=d)return A.e(e,0)
s=e[0]
if(5>=d)return A.e(e,5)
r=e[5]
if(10>=d)return A.e(e,10)
d=e[10]
q=e[9]
p=e[6]
o=r*d-q*p
n=e[4]
m=e[1]
l=e[2]
k=s*o-n*(m*d-q*l)+e[8]*(m*p-r*l)
if(!isFinite(k)||Math.abs(k)<1e-12)A.j(A.k("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.y(k)+")"))
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
if(!(s<16))return A.e(i,s)
s=i[s]
if(!(d<16))return A.e(h,d)
h[d]=s}if(15>=16)return A.e(h,15)
h[15]=1
return new A.dp(h)},
gam(a){return B.t.a8(this.a,new A.pE())},
p(a){return"Mat4("+A.y(this.a)+")"}}
A.pE.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.kD.prototype={
p(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.kY.prototype={
C(){var s=this.a
if(!s.gam(0))throw A.c(A.x("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.c(A.x("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.c(A.x(u.u,null))},
ab(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.y8(A.d([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
f=i.length
if(0>=f)return A.e(i,0)
h=i[0]
if(1>=f)return A.e(i,1)
p=i[1]
if(2>=f)return A.e(i,2)
o=i[2]
if(4>=f)return A.e(i,4)
n=i[4]
if(5>=f)return A.e(i,5)
m=i[5]
if(6>=f)return A.e(i,6)
l=i[6]
if(8>=f)return A.e(i,8)
k=i[8]
if(9>=f)return A.e(i,9)
j=i[9]
if(10>=f)return A.e(i,10)
f=this.a
return A.y8(A.d([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.M.prototype={
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
by(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.M(s*r-q*p,q*o-n*r,n*p-s*o)},
gc8(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc8())},
gam(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gau(){var s=this,r=Math.sqrt(s.gc8())
return r<1e-9?B.ak:new A.M(s.a/r,s.b/r,s.c/r)},
a5(a,b){if(b==null)return!1
return b instanceof A.M&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.it.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hq.prototype={
ga9(){return this.f},
ak(a,b){B.a.l(a.a,new A.av(this.f,B.L,A.d([new A.P(this.x,B.i),new A.P(this.y,B.j)],t.C),!1))},
aj(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.w,B.d3,B.d0)),q=A.d5(s.d),p=t.n,o=s.r===B.dU?new Float32Array(A.a1(A.d([1/s.Q,0],p))):new Float32Array(A.a1(A.d([0,1/s.as],p)))
p=s.y
return A.d([new A.lm(new A.b6(s.f,A.d([new A.P(s.x,B.i),new A.P(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a0(){},
$iak:1}
A.lm.prototype={
al(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c1(r,a.an(o.r).b)
A.bo(r,o.a.ah())
A.dB(r,B.ad,1,0,0,0)
A.cl(r,o.b.b)
q=t._
p=o.d
if(o.e)A.D0(r,0,q.a(p.$0()))
else A.aE(r,0,q.a(p.$0()))
A.w(r,"uSource",B.y)
A.w(r,"uTexelStep",new A.z(B.aL,o.f))
A.bE(r,o.c)
s.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.jt.prototype={
ga9(){return"bloomComposite"},
ak(a,b){B.a.l(a.a,new A.av("bloomComposite",B.L,A.d([new A.P(this.f,B.i),new A.P(this.r,B.i),new A.P(this.w,B.j)],t.C),!1))},
aj(a){var s=this,r="bloomComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.w,B.jp,B.j7)),p=A.d5(s.d),o=s.w,n=A.d([new A.P(s.f,B.i),new A.P(s.r,B.i),new A.P(o,B.j)],t.C)
return A.d([new A.ln(new A.b6(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a0(){},
$iak:1}
A.ln.prototype={
al(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c1(r,a.cL(q.f).b)
A.D1(r,1)
A.bo(r,B.eU)
A.cl(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.w(r,"uBloom",B.y)
A.w(r,"uBloomStrength",new A.z(B.e,p))
A.bE(r,q.c)
s.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.jG.prototype={
ga9(){return"depthPrepass"},
ak(a,b){B.a.l(a.a,new A.av("depthPrepass",B.hw,A.d([new A.P(this.w,B.j)],t.C),!1))},
aj(a){var s=this,r="depthPrepass",q=s.a.av(new A.bk(r,s.b,s.c,B.d2,B.d1,B.iA))
return A.d([new A.lq(new A.b6(r,A.d([new A.P(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a0(){},
$iak:1}
A.lq.prototype={
al(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c1(a1,a2.an("sceneDepth").b)
A.bo(a1,d.a.ah())
A.dB(a1,B.aW,1,0,0,0)
A.cl(a1,d.b.b)
A.w(a1,"uVertexSnapGrid",new A.z(B.e,a0.Q))
A.w(a1,"uAlbedo",B.y)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.w(a1,"uViewProjection",new A.z(B.u,new Float32Array(A.a1(a))))
A.w(a1,"uModel",new A.z(B.u,new Float32Array(A.a1(i.c.ab().a))))
A.vS(b,k,!1)
d.iJ(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.j(A.k(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.j(A.k(c))
e=A.f(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.f(o.WebGL2RenderingContext.UNSIGNED_INT):A.f(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bt(g,f)}else{if(a1.b!==B.h)A.j(A.k(c))
m.drawArraysInstanced(A.f(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bt(g,f)}}},
iJ(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.w(q,"uAlphaCutoff",new A.z(B.e,0))
A.w(q,"uAffineWarpStrength",new A.z(B.e,0))
s=this.a.ah()
A.bo(q,r.dx?s.dW(!1):s)},
$ia9:1,
gD(){return this.a}}
A.iv.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hx.prototype={
ga9(){return this.f},
ak(a,b){B.a.l(a.a,new A.av(this.f,B.L,A.d([new A.P(this.w,B.i),new A.P(this.x,B.j)],t.C),!1))},
aj(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.w,B.d3,B.d0)),q=A.d5(s.d),p=t.n,o=s.r===B.dV?new Float32Array(A.a1(A.d([1/s.z,0],p))):new Float32Array(A.a1(A.d([0,1/s.Q],p)))
p=s.x
return A.d([new A.lr(new A.b6(s.f,A.d([new A.P(s.w,B.i),new A.P(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a0(){},
$iak:1}
A.lr.prototype={
al(a){return},
$ia9:1,
gD(){return this.a}}
A.jJ.prototype={
ga9(){return"dofComposite"},
ak(a,b){var s=this
B.a.l(a.a,new A.av("dofComposite",B.L,A.d([new A.P(s.z,B.i),new A.P(s.Q,B.i),new A.P(s.as,B.i),new A.P(s.at,B.j)],t.C),!1))},
aj(a){var s=this,r="dofComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.w,B.jn,B.ip)),p=A.d5(s.d)
return A.d([new A.ls(new A.b6(r,A.d([new A.P(s.z,B.i),new A.P(s.Q,B.i),new A.P(s.as,B.i),new A.P(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a0(){},
$iak:1}
A.ls.prototype={
al(a){var s,r=this,q=a.an("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c1(n,q.b)
A.bo(n,r.a.ah())
A.cl(n,r.b.b)
s=t._
A.aE(n,0,s.a(r.d.$0()))
A.w(n,"uSharp",B.y)
A.aE(n,1,s.a(r.e.$0()))
A.w(n,"uBlurred",B.aj)
A.aE(n,2,s.a(r.f.$0()))
A.w(n,"uSceneDepth",B.dN)
A.w(n,"uNear",new A.z(B.e,o.f))
A.w(n,"uFar",new A.z(B.e,o.r))
A.w(n,"uFocusDistance",new A.z(B.e,r.w))
A.w(n,"uFocusRange",new A.z(B.e,r.x))
A.w(n,"uStrength",new A.z(B.e,0))
A.bE(n,r.c)
p.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.k_.prototype={
ga9(){return"grade"},
ak(a,b){B.a.l(a.a,new A.av("grade",B.L,A.d([new A.P(this.r,B.i),new A.P(this.w,B.j)],t.C),!1))},
aj(a){var s=this,r=s.a.av(new A.bk("grade",s.b,s.c,B.w,B.jl,B.j8)),q=A.d5(s.d),p=s.r,o=s.w
return A.d([new A.lx(new A.b6("grade",A.d([new A.P(p,B.i),new A.P(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a0(){},
$iak:1}
A.lx.prototype={
al(a){var s=this,r=a.an(s.f.a),q=a.b,p=q.a
A.c1(p,a.an(s.r.a).b)
A.bo(p,s.a.ah())
A.cl(p,s.b.b)
A.aE(p,0,r.b)
A.w(p,"uScene",B.y)
A.aE(p,1,t._.a(s.d.$0()))
A.w(p,"uLut",B.aj)
A.w(p,"uLutSize",new A.z(B.e,s.e))
A.w(p,"uStrength",new A.z(B.e,a.c.e.y))
A.bE(p,s.c)
q.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.hV.prototype={
ga9(){return"msaaResolve"},
ak(a,b){B.a.l(a.a,new A.av("msaaResolve",B.hx,A.d([new A.P(this.b,B.i),new A.P(this.c,B.j)],t.C),!0))},
aj(a){var s=this.b,r=this.c
return A.d([new A.lE(new A.b6("msaaResolve",A.d([new A.P(s,B.i),new A.P(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a0(){},
$iak:1}
A.lE.prototype={
al(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cL(this.c),j=a.cL(this.d),i=this.b
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
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.d([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.NONE)],t.n))}A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.d([A.f(m.WebGL2RenderingContext.NONE),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.f(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aL(i,l,[0,0,s,r.x,0,0,p,q.x,A.f(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.f(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.d([A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.f(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.f(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia9:1,
gD(){return this.a}}
A.fl.prototype={}
A.ju.prototype={
an(a){var s=this.a.h(0,a)
if(s==null)throw A.c(A.k('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cL(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.an(s)},
$iCu:1}
A.wg.prototype={}
A.i4.prototype={
ga9(){return"present"},
ak(a,b){B.a.l(a.a,new A.av("present",B.hy,A.d([new A.P(this.f,B.i)],t.C),!1))},
aj(a){var s,r=this,q=r.a.av(new A.bk("present",r.b,r.c,B.w,B.jw,B.iH)),p=A.d5(r.d)
r.w=p
s=r.f
return A.d([new A.lK(new A.b6("present",A.d([new A.P(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a0(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.b(s.a))
this.w=null}},
$iak:1}
A.lK.prototype={
al(a){var s,r=this,q=a.cL(r.d),p=a.b,o=p.a
A.c1(o,null)
A.bo(o,r.a.ah())
A.cl(o,r.b.b)
A.bE(o,r.c)
A.aE(o,0,q.b)
s=a.c.e
A.w(o,"uExposure",new A.z(B.e,s.a))
A.w(o,"uVignette",new A.z(B.e,s.e))
A.w(o,"uGrain",new A.z(B.e,s.f))
A.w(o,"uRainIntensity",new A.z(B.e,s.r))
A.w(o,"uRainWindowVisibility",new A.z(B.e,s.w))
A.w(o,"uOutputEncoding",new A.z(B.e,r.e===B.aX?1:0))
A.w(o,"uToneMap",B.dM)
p.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.kC.prototype={
ga9(){return"ps1Quantize"},
ak(a,b){B.a.l(a.a,new A.av("ps1Quantize",B.L,A.d([new A.P(this.e,B.i),new A.P(this.f,B.j)],t.C),!1))},
aj(a){var s=this,r="ps1Quantize",q=s.a.av(new A.bk(r,s.b,s.c,B.w,B.jr,B.ih)),p=A.d5(s.d),o=s.e,n=s.f
return A.d([new A.lL(new A.b6(r,A.d([new A.P(o,B.i),new A.P(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a0(){},
$iak:1}
A.lL.prototype={
al(a){var s=this,r=a.an(s.d.a),q=a.b,p=a.c.e,o=q.a
A.c1(o,a.an(s.e.a).b)
A.bo(o,s.a.ah())
A.cl(o,s.b.b)
A.aE(o,0,r.b)
A.w(o,"uScene",B.y)
A.w(o,"uQuantizationBits",new A.z(B.e,p.as))
A.w(o,"uDitherStrength",new A.z(B.e,p.x))
A.bE(o,s.c)
q.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.eP.prototype={}
A.kN.prototype={
ga9(){return"shadow"},
ak(a,b){B.a.l(a.a,new A.av("shadowCaster",B.hv,A.d([new A.P(this.z,B.j)],t.C),!1))},
aj(a){var s=this,r="shadowCaster",q=s.a.av(new A.bk(r,s.b,s.c,B.d2,B.d1,B.j6))
return A.d([new A.lO(new A.b6(r,A.d([new A.P(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a0(){},
$iak:1}
A.lO.prototype={
al(a){var s,r,q,p,o=this,n=a.an("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c1(s,n.b)
A.bo(s,o.a.ah())
A.dB(s,B.aW,1,0,0,0)
return}r=A.yo(l)
o.x.$1(r)
s=m.a
A.c1(s,n.b)
A.bo(s,o.a.ah())
A.dB(s,B.aW,1,0,0,0)
A.cl(s,o.b.b)
A.w(s,"uAlbedo",B.y)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.iL(m,s[p],l,r)},
f6(a,b){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.w(q,"uAlphaCutoff",new A.z(B.e,0))
s=this.a.ah()
A.bo(q,r.dx?s.dW(!1):s)},
iL(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.w(s,"uUseInstances",B.bP)
n.f2(a,b.gD().c,d)
n.f6(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bE(s,q.a)
s=q.b
r=q.c
if(s)a.dr(r,q.d,0)
else a.aF(r,0)}else if(b instanceof A.eB){p=b.a
if(!p.gD().r)return
if(n.jI(b,c)===B.lJ)return
n.f2(a,p.gD().c,d)
A.vS(a,b,!1)
n.f6(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bE(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.ds(r,q.d,o,0)
else a.dq(r,0,o)}else throw A.c(A.x("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fe(b).p(0),null))},
jI(a,b){return B.lI},
f2(a,b,c){var s=a.a
A.w(s,"uModel",new A.z(B.u,new Float32Array(A.a1(b.ab().a))))
A.w(s,"uLightViewProjection",new A.z(B.u,new Float32Array(A.a1(c.a.a))))},
$ia9:1,
gD(){return this.a}}
A.v7.prototype={
$1(a){return this.a.a=a},
$S:57}
A.v8.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kO.prototype={
ga9(){return"shadowedWorld"},
ak(a,b){var s=this,r=A.d([new A.P(s.db,B.i)],t.C)
if(s.ay)r.push(new A.P(s.dx,B.i))
r.push(new A.P(s.dy,B.j))
B.a.l(a.a,new A.av("shadowedWorld",B.cI,r,!1))},
aj(a){var s=this,r="shadowedWorld",q=s.a.av(new A.bk(r,s.b,s.c,B.jt,B.jm,B.id)),p=A.d([new A.P(s.db,B.i)],t.C)
if(s.ay)p.push(new A.P(s.dx,B.i))
p.push(new A.P(s.dy,B.j))
return A.d([new A.lP(new A.b6(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a0(){},
$iak:1}
A.lP.prototype={
al(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.an("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c1(b1,a4.b)
A.bo(b1,a2.a.ah())
s=a8.a
A.dB(b1,B.cc,1,s.c,s.b,s.a)
A.cl(b1,a2.b.b)
A.w(b1,"uAlbedo",B.y)
A.w(b1,"uNormalMap",B.m4)
A.w(b1,"uOrmMap",B.m5)
A.w(b1,"uEmissiveMap",B.m6)
A.w(b1,"uLightmap",B.m7)
s=t._
A.aE(b1,1,s.a(a2.y.$0()))
A.w(b1,"uShadowMap",B.aj)
r=t.n
A.w(b1,"uShadowMapTexelSize",new A.z(B.aL,new Float32Array(A.a1(A.d([1/a2.ch,1/a2.CW],r)))))
A.aE(b1,2,s.a(a2.at.$0()))
A.w(b1,"uSsao",B.dN)
A.w(b1,"uVertexSnapGrid",new A.z(B.e,a9.Q))
A.w(b1,"uSceneColorSize",new A.z(B.aL,new Float32Array(A.a1(A.d([a2.ax,a2.ay],r)))))
A.w(b1,"uViewProjection",new A.z(B.u,new Float32Array(A.a1(a7.c.a))))
A.w(b1,"uView",new A.z(B.u,new Float32Array(A.a1(a7.a.a))))
A.w(b1,"uLightViewProjection",new A.z(B.u,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.w(b1,"uFogColor",new A.z(B.q,new Float32Array(A.a1(A.d([s.a,s.b,s.c],r)))))
A.w(b1,"uFogStart",new A.z(B.e,a8.c))
A.w(b1,"uFogEnd",new A.z(B.e,a8.d))
s=a8.e
A.w(b1,"uFogHeightFalloff",new A.z(B.e,s==null?0:s))
s=a8.f
A.w(b1,"uFogDensity",new A.z(B.e,s==null?0:s))
q=a2.Q.$0()
s=A.d([],t.cv)
p=a2.as.$0()
p=J.S(p==null?B.bg:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a6
k=o?a3:q.c
if(k==null)k=B.aM
A.w(b1,"uLightPosition",new A.z(B.q,new Float32Array(A.a1(A.d([l.a,l.b,l.c],r)))))
A.w(b1,"uLightDirection",new A.z(B.q,new Float32Array(A.a1(A.d([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.V
A.w(b1,"uLightColor",new A.z(B.q,new Float32Array(A.a1(A.d([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.w(b1,"uLightIntensity",new A.z(B.e,p==null?0:p))
A.w(b1,"uSpotEnabled",new A.z(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a6
g=p?a3:i.b
if(g==null)g=B.V
A.w(b1,"uDirectionalDirection",new A.z(B.q,new Float32Array(A.a1(A.d([h.a,h.b,h.c],r)))))
A.w(b1,"uDirectionalColor",new A.z(B.q,new Float32Array(A.a1(A.d([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.w(b1,"uDirectionalIntensity",new A.z(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.e(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.ak
c=n?a3:e.c
if(c==null)c=B.V
m=""+f
A.w(b1,"uPointPosition"+m,new A.z(B.q,new Float32Array(A.a1(A.d([d.a,d.b,d.c],r)))))
A.w(b1,"uPointColor"+m,new A.z(B.q,new Float32Array(A.a1(A.d([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.w(b1,"uPointIntensity"+m,new A.z(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.w(b1,"uPointRadius"+m,new A.z(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.e(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.ak
a=p?a3:e.c
if(a==null)a=B.aM
c=p?a3:e.d
if(c==null)c=B.V
n=""+f
A.w(b1,"uDirectSpotPosition"+n,new A.z(B.q,new Float32Array(A.a1(A.d([d.a,d.b,d.c],r)))))
A.w(b1,"uDirectSpotDirection"+n,new A.z(B.q,new Float32Array(A.a1(A.d([a.a,a.b,a.c],r)))))
A.w(b1,"uDirectSpotColor"+n,new A.z(B.q,new Float32Array(A.a1(A.d([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.w(b1,"uDirectSpotIntensity"+n,new A.z(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.w(b1,"uDirectSpotRange"+n,new A.z(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.w(b1,"uDirectSpotInnerCos"+n,new A.z(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.w(b1,"uDirectSpotOuterCos"+n,new A.z(B.e,Math.cos(m)))
p=p?0:1
A.w(b1,"uDirectSpotEnabled"+n,new A.z(B.e,p))}s=o?a3:q.f
A.w(b1,"uLightRange",new A.z(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.w(b1,"uLightInnerCos",new A.z(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.w(b1,"uLightOuterCos",new A.z(B.e,Math.cos(s)))
a0=a8.r
A.w(b1,"uAmbientColor",new A.z(B.q,new Float32Array(A.a1(A.d([a0.a,a0.b,a0.c],r)))))
A.w(b1,"uAmbientIntensity",new A.z(B.e,a8.w))
A.w(b1,"uRainWetness",new A.z(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.f7(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.f7(a5,a6[a1],r)},
f7(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.w(s,"uUseInstances",B.bP)
m.f8(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.f3(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bE(s,o.a)
s=o.b
r=o.c
if(s)a.dr(r,o.d,0)
else a.aF(r,0)}else if(b instanceof A.eB){n=b.a
m.f8(a,n.gD().c)
A.vS(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.f3(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bE(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.ds(r,o.d,q,0)
else a.dq(r,0,q)}else throw A.c(A.x("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fe(b).p(0),null))},
f3(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aE(o,0,p.a(s.e.$1(q.b)))
A.aE(o,3,p.a(s.f.$1(r)))
A.aE(o,4,p.a(s.r.$1(r)))
A.aE(o,5,p.a(s.w.$1(r)))
A.aE(o,6,p.a(s.x.$1(r)))
A.w(o,"uAlphaCutoff",new A.z(B.e,0))
A.w(o,"uOpaqueCoverage",new A.z(B.e,c===B.aZ?0:1))
A.w(o,"uAffineWarpStrength",new A.z(B.e,0))
p=t.n
A.w(o,"uMaterialTint",new A.z(B.q,new Float32Array(A.a1(A.d([q.c,q.d,q.e],p)))))
A.w(o,"uEmissiveStrength",new A.z(B.e,0))
A.w(o,"uUvScaleOffset",new A.z(B.m3,new Float32Array(A.a1(A.d([q.ay,q.ch,0,0],p)))))
A.w(o,"uNormalStrength",new A.z(B.e,1))
A.w(o,"uRoughness",new A.z(B.e,q.z))
A.w(o,"uMetallic",new A.z(B.e,0))
A.w(o,"uOcclusionStrength",new A.z(B.e,1))
A.w(o,"uLightmapIntensity",new A.z(B.e,0))
A.w(o,"uReceivesShadow",new A.z(B.e,1))
A:{p=r
if(B.aZ===c){switch(d.a){case 0:p=B.eW
break
case 1:p=B.eV
break}break A}if(B.T===c||B.eT===c){p=s.a.ah()
break A}}A.bo(o,q.dx?p.dW(!1):p)},
f8(a,b){var s=b.ab(),r=a.a
A.w(r,"uModel",new A.z(B.u,new Float32Array(A.a1(s.a))))
A.w(r,"uNormalMatrix",new A.z(B.u,new Float32Array(A.a1(s.dD().a))))},
$ia9:1,
gD(){return this.a}}
A.kR.prototype={
ga9(){return"ssaoOcclusion"},
ak(a,b){B.a.l(a.a,new A.av("ssaoOcclusion",B.cH,A.d([new A.P(this.w,B.j)],t.C),!1))},
aj(a){var s=this,r="ssaoOcclusion",q=s.a.av(new A.bk(r,s.b,s.c,B.w,B.jq,B.ic)),p=A.d5(s.d)
return A.d([new A.lS(new A.b6(r,A.d([new A.P(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a0(){},
$iak:1}
A.lS.prototype={
al(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c1(m,a.an("ssaoRaw").b)
A.bo(m,p.a.ah())
if(n<=0){A.dB(m,B.ad,1,1,1,1)
return}A.dB(m,B.ad,1,0,0,0)
s=p.e.$0()
A.cl(m,p.b.b)
A.aE(m,0,t._.a(p.d.$0()))
A.w(m,"uSceneDepth",B.y)
A.w(m,"uNear",new A.z(B.e,s.f))
A.w(m,"uFar",new A.z(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.e(r,0)
A.w(m,"uProjScaleX",new A.z(B.e,r[0]))
if(5>=q)return A.e(r,5)
A.w(m,"uProjScaleY",new A.z(B.e,r[5]))
A.w(m,"uRadius",new A.z(B.e,p.f))
A.w(m,"uStrength",new A.z(B.e,n))
A.bE(m,p.c)
o.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.kQ.prototype={
ga9(){return"ssaoBlur"},
ak(a,b){B.a.l(a.a,new A.av("ssaoBlur",B.cH,A.d([new A.P(this.y,B.i),new A.P(this.z,B.j)],t.C),!1))},
aj(a){var s=this,r="ssaoBlur",q=s.a.av(new A.bk(r,s.b,s.c,B.w,B.jg,B.ja)),p=A.d5(s.d)
return A.d([new A.lR(new A.b6(r,A.d([new A.P(s.y,B.i),new A.P(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a0(){},
$iak:1}
A.lR.prototype={
al(a){var s,r,q=this,p=a.b,o=p.a
A.c1(o,a.an("ssaoBlurred").b)
A.bo(o,q.a.ah())
if(a.c.e.c<=0){A.dB(o,B.ad,1,1,1,1)
return}A.dB(o,B.ad,1,0,0,0)
s=q.f.$0()
A.cl(o,q.b.b)
r=t._
A.aE(o,0,r.a(q.d.$0()))
A.w(o,"uSsaoRaw",B.y)
A.aE(o,1,r.a(q.e.$0()))
A.w(o,"uSceneDepth",B.aj)
A.w(o,"uTexelSize",new A.z(B.aL,new Float32Array(A.a1(A.d([1/q.r,1/q.w],t.n)))))
A.w(o,"uNear",new A.z(B.e,s.f))
A.w(o,"uFar",new A.z(B.e,s.r))
A.bE(o,q.c)
p.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.l4.prototype={
ga9(){return"vhs"},
ak(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.av("vhs",B.L,A.d([new A.P(this.r,B.i),new A.P(s,B.J),new A.P(s,B.j)],t.C),!1))},
aj(a){var s=this,r=s.a.av(new A.bk("vhs",s.b,s.c,B.w,B.jj,B.ij)),q=A.d5(s.d),p=s.r,o=s.w
return A.d([new A.m_(new A.b6("vhs",A.d([new A.P(p,B.i),new A.P(o,B.J),new A.P(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a0(){},
$iak:1}
A.m_.prototype={
al(a){var s,r=this,q=a.an(r.f.a),p=a.an(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c1(m,p.b)
A.bo(m,r.a.ah())
A.cl(m,r.b.b)
A.aE(m,0,q.b)
A.w(m,"uScene",B.y)
A.aE(m,1,t._.a(r.d.$0()))
A.w(m,"uHistory",B.aj)
A.w(m,"uTime",new A.z(B.e,r.e.$0()))
A.w(m,"uChromaWeight",new A.z(B.e,n.at))
A.w(m,"uTrackingWeight",new A.z(B.e,l))
A.w(m,"uNoiseWeight",new A.z(B.e,n.ay))
A.w(m,"uHeadSwitchWeight",new A.z(B.e,n.ch))
A.w(m,"uDropoutWeight",new A.z(B.e,n.CW))
A.w(m,"uGhostWeight",new A.z(B.e,s))
A.bE(m,r.c)
o.aF(3,0)},
$ia9:1,
gD(){return this.a}}
A.i8.prototype={}
A.lf.prototype={
ga9(){return"world"},
ak(a,b){B.a.l(a.a,new A.av("worldOpaqueTransparent",B.cI,A.d([new A.P(this.e,B.j)],t.C),!1))},
aj(a){var s=this,r=s.a.av(new A.bk("safeWorld",s.b,s.c,B.jv,B.w,B.ib)),q=s.e
return A.d([new A.m2(new A.b6("worldOpaqueTransparent",A.d([new A.P(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a0(){},
$iak:1}
A.m2.prototype={
al(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c1(j,a.an(n.d).b)
A.bo(j,n.a.ah())
s=k.a
A.dB(j,B.cc,1,s.c,s.b,s.a)
A.cl(j,n.b.b)
A.w(j,"uViewProjection",new A.z(B.u,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.w(j,"uLightDir",new A.z(B.q,new Float32Array(A.a1(A.d([q.a,q.b,q.c],s)))))
p=k.r
A.w(j,"uAmbientColor",new A.z(B.q,new Float32Array(A.a1(A.d([p.a,p.b,p.c],s)))))
A.w(j,"uAmbientIntensity",new A.z(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.eD(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.eD(m,l[o])},
eD(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eB){s=b.a
n.f4(a,s.gD().c)
A.vS(a,b,!0)
r=n.c.$1(s.gD().a)
A.bE(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.ds(p,r.d,o,0)
else a.dq(p,0,o)}else if(t.yz.b(b)){q=a.a
A.w(q,"uUseInstances",B.bP)
n.f4(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bE(q,r.a)
q=r.b
p=r.c
if(q)a.dr(p,r.d,0)
else a.aF(p,0)}else throw A.c(A.x("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fe(b).p(0),null))},
f4(a,b){var s=b.ab(),r=a.a
A.w(r,"uModel",new A.z(B.u,new Float32Array(A.a1(s.a))))
A.w(r,"uNormalMatrix",new A.z(B.u,new Float32Array(A.a1(s.dD().a))))},
$ia9:1,
gD(){return this.a}}
A.no.prototype={
cj(a){var s,r,q
a.C()
s=A.a0(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.a1
else q=r===0?B.bv:B.P
return new A.eG(q,s)},
hi(a){var s,r=this.cj(a).a
A:{if(B.a1===r){s=B.kv
break A}if(B.P===r){s=B.ku
break A}s=B.aD
break A}return s}}
A.jW.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hE.prototype={
v(){return"GpuBufferKind."+this.b}}
A.jY.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.jZ.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jV.prototype={}
A.jX.prototype={}
A.ey.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hG.prototype={}
A.hF.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eO.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ic.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d0.prototype={
v(){return"UniformType."+this.b}}
A.z.prototype={}
A.fp.prototype={
v(){return"ClearMask."+this.b}}
A.jH.prototype={
aF(a,b){var s=this.a
if(s.b!==B.h)A.j(A.k(u.k))
s.a.drawArrays(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bt(a,1)},
dq(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.k(u.k))
s.a.drawArraysInstanced(A.f(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bt(a,c)},
dr(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.k(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bt(a,1)},
ds(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.k(u.k))
s=v.G
r=A.f(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.f(s.WebGL2RenderingContext.UNSIGNED_INT):A.f(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aL(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bt(a,c)},
$iBr:1}
A.fA.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fI.prototype={
fR(a){var s=this.b.h(0,a)
if(s==null)throw A.c(A.k("resource is not in candidate: "+a))
return s}}
A.os.prototype={
gn(){var s=this.c
if(s==null)throw A.c(A.k("GPU resource adapter is not initialized"))
return s},
cH(a){var s,r,q,p,o,n=this
if(n.e)A.j(A.k("GPU resource adapter is disposed"))
if(n.c==null)throw A.c(A.k("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.c(A.k("GPU resource candidate is already open"))
s=A.i1(a)
p=n.b
r=p.cH(s)
try{q=new A.fI(r,n.d2(s,a),B.af)
n.d=q
return q}catch(o){p.dR(r)
throw o}},
a0(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.c(A.k("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.d5(s.b)
r.b.a0()
r.c=null
r.e=!0},
d2(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.o(a0,a1),a3=A.d([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("H<1>")
s=new A.H(k,i.a(new A.ot()),j)
for(h=s,g=J.S(h.a),h=new A.T(g,h.b,h.$ti.i("T<1>")),f=a.a;h.m();){r=g.gn()
q=A.yF(f,a.eB(r,a5))
J.hn(a3,q)
J.bt(a2,r,q)}e=A.J(new A.H(k,i.a(new A.ou()),j),j.i("n.E"))
B.a.Y(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.t)(k),++d){o=k[d]
n=A.A9(J.AW(o,11))
if(i){h=J.aS(a2,"sceneColor")
h.toString
J.bt(a2,o,h)}else{h=n
if(typeof h!=="number")return h.mR()
if(h>=2){h=J.aS(a2,"sceneColor#1")
h.toString
J.bt(a2,o,h)}else{m=A.yF(f,a.eB(o,a5))
J.hn(a3,m)
J.bt(a2,o,m)}}}a0=A.b4(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.E(a0).i("eL<1>"),a0=new A.eL(a0,k),a0=new A.aI(a0,a0.gt(0),k.i("aI<a2.E>")),j=a.a,i=t.V,k=k.i("a2.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wp(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eB(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hG(s,s,1,B.b1,!0)}if(a==="sceneDepth")return new A.hG(n,m,1,B.b1,!0)
r=B.b.V(a,"ssao")||B.b.V(a,"bloomBlur")||B.b.V(a,"dofBlur")
q=r?B.d.a_(n+1,2):n
p=r?B.d.a_(m+1,2):m
s=a==="sceneColor"
o=s||B.b.V(a,"sceneColor#")
s=s?b.d:1
return new A.hG(q,p,s,o?B.cF:B.hs,o)},
d5(a){var s,r,q,p,o,n=A.kf(t.mf.a(a).gaB(),t._)
for(n=A.fU(n,n.r,A.p(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wp(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ep(a){if(this.d!==a||a.c!==B.af)throw A.c(A.k("GPU resource candidate is not open"))}}
A.ot.prototype={
$1(a){return!B.b.V(A.r(a),"sceneColor#")},
$S:3}
A.ou.prototype={
$1(a){return B.b.V(A.r(a),"sceneColor#")},
$S:3}
A.fY.prototype={
v(){return"_SlotState."+this.b}}
A.ef.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.cX.prototype={
aD(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ef(B.aP,n.i("ef<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.n5
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c_(a){return this.aD(a,null)},
a3(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.dW(B.cM,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.dW(B.cN,a))
s=q.b
if(s===B.aQ||s===B.aP)throw A.c(A.dW(B.aB,a))},
c0(a){var s,r,q=this.$ti
q.c.a(a)
this.a3(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
h5(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a3(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].sb3(b)},
b6(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.dW(B.cM,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.dW(B.cN,a))
r=q.b
if(r===B.aQ||r===B.aP)throw A.c(A.dW(B.hI,a))
q.b=B.aQ
q.sb3(null)
B.a.l(p.c,s);++p.e},
bE(){return new A.cn(this.lv(),this.$ti.i("cn<+(1,2)>"))},
lv(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bE(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aQ||j===B.aP){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aV(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jr.prototype={
v(){return"BlendEquation."+this.b}}
A.eq.prototype={
v(){return"BlendFactor."+this.b}}
A.jD.prototype={
v(){return"CullFace."+this.b}}
A.jF.prototype={
v(){return"DepthFunc."+this.b}}
A.fw.prototype={
dW(a){var s=this
return A.xL(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b7.prototype={
v(){return"StateField."+this.b}}
A.t0.prototype={
kX(a){var s,r=this.a
if(r==null)return A.hS(B.j3,t.qL)
s=A.a0(t.qL)
if(r.a!==a.a)s.l(0,B.bH)
if(r.b!==a.b)s.l(0,B.bI)
if(r.c!==a.c)s.l(0,B.bJ)
if(r.d!==a.d)s.l(0,B.bK)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bL)
if(r.r!==a.r)s.l(0,B.bM)
if(r.w!==a.w)s.l(0,B.bN)
if(r.x!==a.x)s.l(0,B.bO)
return s}}
A.dE.prototype={$idn:1}
A.iW.prototype={}
A.iV.prototype={}
A.m1.prototype={}
A.ld.prototype={
i8(a){var s=this,r=A.b(s.a.canvas)
s.c=A.X(new A.rZ(s))
s.d=A.X(new A.t_(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
h_(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bR(A.f(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bR(A.f(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bR(A.f(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bR(A.f(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bR(A.f(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.eU(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.hh(e.getParameter(A.f(k.WebGL2RenderingContext.RENDERER)))
m=A.hh(e.getParameter(A.f(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qj("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bR(a){var s=A.hh(this.a.getParameter(a))
return typeof s=="number"?B.c.az(s):0},
eU(a){var s=A.hh(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBO:1}
A.rZ.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.U},
$S:1}
A.t_.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.tQ.prototype={
k7(){var s,r=this
if(r.b!==B.h)A.j(A.k(u.k))
s=r.w?A.F(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dE(new A.m1(s))},
fe(a){var s=a.a
if(!(s instanceof A.m1))throw A.c(A.ah(a,"query","is not a GPU timer query"))
return s}}
A.m0.prototype={}
A.jI.prototype={
B(){var s=this
return A.N(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jo.prototype={
gly(){var s=this.CW
return new A.au(s,A.p(s).i("au<2>")).bc(0,0,new A.n_(),t.i)},
hT(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.q()
s=j.a
A.F(i.connect(A.b(s.destination)))
r=j.d
r===$&&A.q()
A.b(r.gain).value=0.25
q=j.e
q===$&&A.q()
A.b(q.gain).value=0.12
p=j.f
p===$&&A.q()
A.b(p.gain).value=0.4
o=j.r
o===$&&A.q()
A.b(o.gain).value=0.2
n=j.w
n===$&&A.q()
A.b(n.gain).value=0.4
m=j.x
m===$&&A.q()
A.b(m.gain).value=0.1
l=j.y
l===$&&A.q()
A.b(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.F(r[k].connect(i))
r=j.z
r===$&&A.q()
A.b(r.gain).value=1
q=j.Q
q===$&&A.q()
A.b(q.gain).value=0.35
A.F(o.connect(r))
A.F(n.connect(r))
A.F(p.connect(r))
p=j.as
p===$&&A.q()
A.F(r.connect(p))
A.F(p.connect(q))
A.F(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k2!==$&&A.aX()
j.k2=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k3!==$&&A.aX()
j.k3=p
A.F(q.connect(p))
A.F(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.F(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.k4!==$&&A.aX()
j.k4=q
i=A.b(s.createChannelMerger(2))
j.ok!==$&&A.aX()
j.ok=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p1!==$&&A.aX()
j.p1=r
A.F(p.connect(q))
A.F(i.connect(A.b(s.destination)))
j.em()},
em(){var s,r=this,q=r.k4
q===$&&A.q()
q.disconnect()
s=r.p1
s===$&&A.q()
s.disconnect()
if(r.p2){A.F(q.connect(s,0))
A.F(q.connect(s,1))
q=r.ok
q===$&&A.q()
A.F(s.connect(q,0,0))
A.F(s.connect(q,0,1))}else{s=r.ok
s===$&&A.q()
A.F(q.connect(s,0,0))
A.F(q.connect(s,1,1))}},
ce(){var s=this.a
if(A.r(s.state)==="suspended")A.b(s.resume())},
fa(a){var s,r,q=this
if(B.b.V(a,"vo-")){s=q.y
s===$&&A.q()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.q()
return s}r=B.jo.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.q()
break A}if("bed"===r){s=q.e
s===$&&A.q()
break A}if("mid"===r){s=q.r
s===$&&A.q()
break A}if("air"===r){s=q.x
s===$&&A.q()
break A}s=q.w
s===$&&A.q()
break A}return s},
iV(){var s,r,q,p,o,n,m,l=this.a,k=A.ad(l.sampleRate),j=B.c.b0(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aI()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.e(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dG(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.aI()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.F(r.connect(q))
A.F(q.connect(p.fa(a)))
r.onended=A.X(new A.n1(r,q))
r.start()},
fX(a){return this.dG(a,1)},
fY(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ax.aI()*0.12)
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
l=j.ex(j.b.fW(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h_(r,q,n,o,p,e,B.c.E(m,0,1)))
r.onended=A.X(new A.n0(j,o))
A.F(r.connect(q))
A.F(q.connect(n))
A.F(n.connect(o))
A.F(o.connect(p))
A.F(p.connect(j.fa(a)))
r.start()},
m1(a,b,c,d){return this.fY(a,b,c,1,d,null,null,null)},
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
q=2e4}return new A.al(r,q,p)},
ed(a){var s,r,q,p,o=this
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
A.F(q.connect(p))
r=o.e
r===$&&A.q()
A.F(p.connect(r))
q.onended=A.X(new A.n2(o,q,p))
q.start()
o.cy=q},
cP(a){if(this.p2===a)return
this.p2=a
this.em()},
ht(a){var s,r,q=this
q.cP(a.b===B.bZ)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aR?1:0.55
r=q.c
r===$&&A.q()
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.q()
A.b(s.gain).value=0.35*q.p4},
bh(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.E(c==null?q.fr:c,0,1)
q.fx=B.c.E(f==null?q.fx:f,0,1)
q.fy=B.c.E(b==null?q.fy:b,0,1)
q.go=B.c.E(a==null?q.go:a,0,1)
q.id=B.c.E(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.q()
A.b(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.q()
A.b(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.q()
A.b(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.q()
A.b(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.q()
A.b(s.gain).value=0.4*q.go
s=q.e
s===$&&A.q()
A.b(s.gain).value=0.12*q.id
s=q.y
s===$&&A.q()
A.b(s.gain).value=q.fx
s=q.c
s===$&&A.q()
s=A.b(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
e5(a){var s=null
return this.bh(s,s,s,s,a,s)},
hq(a){var s=null
return this.bh(s,s,a,s,s,s)},
hs(a){var s=null
return this.bh(s,s,s,s,s,a)},
hp(a){var s=null
return this.bh(s,a,s,s,s,s)},
ho(a){var s=null
return this.bh(a,s,s,s,s,s)},
hr(a){var s=null
return this.bh(s,s,s,a,s,s)},
hn(a){if(this.ay===a)return
this.ay=a
this.bv()},
bv(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cf(p,g)
m=n==null?i.ex(h.fW(p,g)):new A.al(n.c,n.d,n.e)
l=A.ad(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.ad(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.ad(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.E(m.c,0,1)}}}
A.n_.prototype={
$2(a,b){return Math.max(A.br(a),t.jS.a(b).r)},
$S:60}
A.mZ.prototype={
$1(a){return this.hb(t.q.a(a))},
hb(a){var s=0,r=A.c6(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.c8(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.aB(A.bQ(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.aB(A.bQ(A.b(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.aB(A.bQ(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ao(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.c4(null,r)
case 1:return A.c3(p.at(-1),r)}})
return A.c5($async$$1,r)},
$S:61}
A.n1.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.n0.prototype={
$1(a){var s=this.a.CW.a6(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.n2.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h_.prototype={}
A.jp.prototype={
v(){return"AudioCategory."+this.b}}
A.mP.prototype={
hV(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.c(B.h7)
if(!B.a.a8(A.d([d.a,d.b,d.c],t.n),new A.mQ()))throw A.c(B.ft)}}
A.mQ.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.mx.prototype={
hS(a,b){if(this.a.length===0)throw A.c(B.fj)
if(!B.a.a8(A.d([a.a,a.b,a.c],t.n),new A.my()))throw A.c(B.fy)}}
A.my.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.ho.prototype={
C(){var s=t.n
if(B.a.M(A.d([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mz()))throw A.c(B.fO)
s=B.a.M(A.d([0,0.55,1],s),new A.mA())
if(s)throw A.c(B.fZ)},
cf(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.al(-1.5,2e4,0)
if(a.ay)return new A.al(-28,320,1)
return new A.al(-12,1100,0.55)},
mA(a){return this.cf(a,null)}}
A.mz.prototype={
$1(a){return!isFinite(A.br(a))},
$S:5}
A.mA.prototype={
$1(a){A.br(a)
return a<0||a>1},
$S:5}
A.mL.prototype={
hU(a){var s=A.p(a)
if(new A.aa(a,s.i("aa<1>")).M(0,new A.mN())||new A.au(a,s.i("au<2>")).M(0,new A.mO()))throw A.c(B.h5)}}
A.mN.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.mO.prototype={
$1(a){var s
t.a.a(a)
s=J.aC(a)
return s.gP(a)||s.M(a,new A.mM())},
$S:62}
A.mM.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.w2.prototype={}
A.mX.prototype={}
A.mR.prototype={
hW(a,b,c){var s
for(s=this.b.gaB(),s=s.gu(s);s.m();)s.gn().C()},
h4(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.c(A.k("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.c(A.k("audio listener room missing: "+a0))
r=this.jy(a,a0)
s=t.s
q=A.d([],s)
p=A.d([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c6
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
j=1}s=A.d([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.t)(o),++i)s.push(o[i].a)
o=B.c.E(l,-60,0)
m=B.d.E(k,120,2e4)
g=B.c.E(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.Z(p,"; ")
b=t.N
s=A.aj(s,b)
b=A.aj(q,b)
if(!isFinite(g)||g<0||g>1)A.j(B.fY)
return new A.mX(s,b,o,m,g,n,c)},
cf(a,b){return this.h4(a,b,B.bp)},
jy(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.mQ
s=t.N
r=A.N([a0,0],s,t.i)
q=A.N([a0,B.X],s,t.Es)
p=A.aN([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.T(k,new A.mS(r))
j=B.a.gR(k)
p.a6(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.ir(s,!0)}i=o.aJ(j)
h=A.J(i,i.$ti.i("n.E"))
B.a.T(h,new A.mT())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.cc(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c6:d).mA(f)
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
p.l(0,e)}}}return B.mP}}
A.mS.prototype={
$2(a,b){var s,r,q
A.r(a)
A.r(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.F(r,s)
return q===0?B.b.F(a,b):q},
$S:63}
A.mT.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:64}
A.ir.prototype={}
A.fm.prototype={}
A.nl.prototype={
fP(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.a(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AP().by(q).gau()
p.d=q
p.c=p.b.by(q).gau()
p.a=a}}
A.o4.prototype={}
A.k4.prototype={
cJ(a){if(this.at)return
A.pd(a,"requestPointerLock",t.X)},
e3(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.p(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a0(q)
for(m=J.S(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mc(p,n)}this.b8()},
cT(a){var s,r,q,p,o,n,m=this
if(m.ch.cT(a))for(s=m.CW.aC("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
m2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.S(t.ik.b(c)?c:new A.aU(c,A.E(c).i("aU<1,af?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.R(r.connected)||A.r(r.mapping)!=="standard")break A
c=A.r(r.id)
q=A.r(r.mapping)
p=t.n
o=A.d([],p)
n=d.a(r.axes)
n=J.S(t.dd.b(n)?n:new A.aU(n,A.E(n).i("aU<1,v>")))
while(n.m())o.push(n.gn())
p=A.d([],p)
d=d.a(r.buttons)
d=J.S(t.nx.b(d)?d:new A.aU(d,A.E(d).i("aU<1,af>")))
while(d.m()){r=d.gn()
p.push(A.R(r.pressed)?1:A.ad(r.value))}s=new A.kS(!0,c,q,o,p)
break}}d=s==null
m=A.D8(d?B.lP:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aC(e),q.gaq(q))
q=f.r
q.iR(A.p(q).i("l(1)").a(new A.p6(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.dB())n.l(0,h)}else n.l(0,h)}}f.e=A.hS(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aC(e),l.gaq(l))){d=r.a(f.c)
d=!B.a.M(c.aC(e),d.gaq(d))}}if(d)i.dC()},
j8(a){var s=this
A.b(a)
if(A.R(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.r(a.code)))if(B.a.q(s.CW.aC("interact"),A.r(a.code))){if(s.ch.dB())s.d.l(0,A.r(a.code))}else s.d.l(0,A.r(a.code))},
ja(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a6(0,A.r(a.code))
r=this.CW
if(B.a.q(r.aC(q),A.r(a.code))){t.Q.a(s)
s=!B.a.M(r.aC(q),s.gaq(s))}else s=!1
if(s)this.ch.dC()},
je(a){var s,r=this
A.b(a)
if(!r.ay)return
s="Mouse"+A.f(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aC("interact"),s)){if(r.ch.dB())r.d.l(0,s)}else r.d.l(0,s)},
ji(a){var s,r="interact",q="Mouse"+A.f(A.b(a).button),p=this.c
p.a6(0,q)
s=this.CW
if(B.a.q(s.aC(r),q)){t.Q.a(p)
p=!B.a.M(s.aC(r),p.gaq(p))}else p=!1
if(p)this.ch.dC()},
jk(a){var s
A.b(a)
if(!this.ay)return
s=A.ad(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jg(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.eR(a,"movementX")
s.as=s.as+s.eR(a,"movementY")},
jc(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
eR(a,b){var s=A.zc(a[b])
if(s==null)s=null
return s==null?0:s},
cr(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.kf(n.c,t.N)
for(r=n.e,r=A.fU(r,r.r,A.p(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.M(n.CW.aC(a),s.gaq(s))},
b8(){var s=this
s.c.L(0)
s.d.L(0)
s.f.L(0)
s.r.I(0,s.e)
s.as=s.Q=0
s.ch.dO()}}
A.p6.prototype={
$1(a){return!this.a.q(0,A.r(a))},
$S:3}
A.p5.prototype={
aC(a){var s=this.a.h(0,a)
return s==null?B.o:s},
mc(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.U(a))return
r=t.N
q=A.a0(r)
for(p=A.fU(b,b.r,A.p(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.aj(q,r))},
bb(a,b){var s,r,q
t.Q.a(b)
for(s=this.aC(a),r=s.length,q=0;q<r;++q)if(b.a6(0,s[q]))return!0
return!1}}
A.p9.prototype={
dB(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dC(){this.c=this.b=!1
this.d=0},
cT(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.E(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dO(){this.c=this.b=!1
this.d=0}}
A.aT.prototype={}
A.pv.prototype={}
A.ps.prototype={
m6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a0(h)
r=A.J(b,t.p)
B.a.I(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.c(A.x("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.d([],r)
m=A.d([],r)
l=A.d([],r)
k=A.d([],r)
j=A.o(h,t.N)
i.eH(n,i.d,a,b,i.a,j,m)
i.eH(l,i.e,a,c,i.b,j,k)
return new A.pv(n,l,j)},
eH(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.E(d)
s=k.i("O<1,+effectiveScore,light,score(v,aT,v)>")
r=A.J(new A.O(d,k.i("+effectiveScore,light,score(v,aT,v)(1)").a(new A.pt(this,c,b)),s),s.i("a2.E"))
B.a.T(r,new A.pu())
q=A.a0(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.L(0)
b.I(0,q)}}
A.pt.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ap(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iJ(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:66}
A.pu.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.F(b.a,a.a)
return s===0?B.d.F(a.b.a,b.b.a):s},
$S:67}
A.nK.prototype={
dh(a,b){var s,r,q,p,o,n,m,l=this
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
A.pB.prototype={
hI(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dh(b,c)},
jV(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.a(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.O(s,6.283185307179586)
r=Math.sin(s)
return new A.a(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.d_.prototype={
dJ(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.t.cQ(s,0,l,k)
m.a=s}r=b.ap(0,a).by(d.ap(0,a)).gau()
q=(B.d.bT(e,16)&255)/255
p=(B.d.bT(e,8)&255)/255
o=(e&255)/255
n=f?0.6000000000000001:0
l=A.ig(m.a,m.b,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=0+g
l=A.ig(m.a,l,b,r,q,p,o,n,1,k,0,0)
m.b=l
j=0+h
l=A.ig(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=l
l=A.ig(m.a,l,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=A.ig(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=k
m.b=A.ig(m.a,k,d,r,q,p,o,n,1,0,j,0)},
S(a,b,c,d,e){return this.dJ(a,b,c,d,e,!1,1,1)},
dI(a,b,c,d,e,f,g){return this.dJ(a,b,c,d,e,!1,f,g)},
b5(a,b,c,d,e,f){return this.dJ(a,b,c,d,e,f,1,1)}}
A.a.prototype={
ai(a,b){return new A.a(this.a+b.a,this.b+b.b,this.c+b.c)},
ap(a,b){return new A.a(this.a-b.a,this.b-b.b,this.c-b.c)},
ao(a,b){return new A.a(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
by(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.a(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gau(){var s=this,r=s.gt(0)
return r<1e-9?new A.a(0,0,0):new A.a(s.a/r,s.b/r,s.c/r)}}
A.kS.prototype={}
A.lg.prototype={}
A.ne.prototype={
mM(a){var s,r,q,p,o,n=B.k.ae(a.B(),null)
this.a.fA(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.aA(s.getItem("quarantine.save.active"))
q=A.aA(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
m7(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.aA(s.getItem("quarantine.save.active"))
q=A.aA(s.getItem("quarantine.save.previous"))
p=this.eA(r,a)
if(p!=null)return new A.eM(p,null)
o=this.eA(q,a)
if(o!=null)return new A.eM(o,"recovered previous save")
if(r==null)return B.ld
return B.lc}catch(n){return B.lb}},
eA(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fA(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ao(q) instanceof A.G)return null
else throw q}}}
A.jK.prototype={
hZ(a,b,c,d,e){if(this.a.length===0)throw A.c(B.fW)
if(this.b<0)throw A.c(B.fu)},
B(){var s,r=this,q=r.d
q=q==null?null:A.aj(q,t.i)
s=t.z
return A.b4(A.N(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.nU.prototype={}
A.fx.prototype={
B(){var s=t.N
return A.N(["kind",this.a.b],s,s)}}
A.nX.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:68}
A.bp.prototype={}
A.kv.prototype={
B(){var s,r=this,q=t.N,p=A.o(q,t.z)
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
lq(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ap(0,new A.a(0,1.3499999999999999,0))
return!new A.jv(s,s.ai(0,new A.a(0,1.2000000000000002,0))).cF(a,r)}}
A.qd.prototype={
B(){return A.ma(this.a)}}
A.fN.prototype={
B(){return A.N(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qB.prototype={
fA(a){var s,r,q,p,o,n,m,l=B.k.aE(a,null),k=t.f
if(!k.b(l))throw A.c(B.h6)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aK(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a4("unsupported save version "+A.y(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.fC)
k=A.aM(n,s,r)
return A.yl(A.aM(m,s,r),k,2)}}
A.eM.prototype={}
A.ex.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jT.prototype={}
A.og.prototype={}
A.of.prototype={
gaa(){var s=this.d
return new A.og(s.a,s.b)},
gfZ(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.N(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.N(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.N(["entryCount",m.e.b.a],k,t.S)
p=A.xU(m.c).B()
o=m.r
n=o.c
return new A.qd(A.ma(A.N(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.N(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
jY(a,b){if(!B.a.M(a.f,new A.oh(b)))return!1
this.z.jX(a,b)
return!0},
lh(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.p(s).i("au<2>")
q=A.J(new A.au(s,r),r.i("n.E"))
B.a.T(q,new A.oi())
if(q.length===0)return null
s=A.E(q)
r=s.i("H<1>")
p=A.J(new A.H(q,s.i("l(1)").a(new A.oj()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dQ(a),r=t.sU,s=new A.aI(s,s.gt(0),r.i("aI<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.O(n,o.length)]
s=l.c
k=new A.cO(a,l.a,s.length-1,B.a.gW(s).p(0))
j.k(0,a,k)
return k},
jU(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.ah(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cu(B.hg)}if(n<a)this.cu(B.hh)},
hL(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cS(a)&&s.hK(b)},
m8(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dQ){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hH(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Bo(j,A.aj(i.d,h).length)
if(a===B.dD)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.E(r)
A.Bn(j,new A.H(r,q.i("l(1)").a(new A.ok(k)),q.i("H<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.ig,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.b0(j.a/1*3)
B.a.l(r.r,new A.fP(q.a,a,b))
m=r.a
A.Bz(m,q.a,n,k.b,A.aj(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.hv(B.iV)
s.r.kn(o,c)
l=B.c.b0(j.b/1*6)
if(l>0)r.cS(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.au(i,A.p(i).i("au<2>")).M(0,new A.ol())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cu(B.hj)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cu(B.hi)},
cu(a){var s=this;++s.y
B.a.l(s.w,new A.jT())
B.a.l(s.x,A.Bp(A.En(a),s.b,s.y-1))}}
A.oh.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:11}
A.oi.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:16}
A.oj.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:26}
A.ok.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.rl().hE(this.a.c,a.a)},
$S:72}
A.ol.prototype={
$1(a){return t.g.a(a).e},
$S:26}
A.n3.prototype={
dU(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.c(A.k("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.c(A.k("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.c(A.k("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.c(A.k("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.e(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.k(n+" origin.x mismatch: "+A.y(g)+" != "+A.y(j)))
if(1>=h)return A.e(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.k(n+" origin.y mismatch: "+A.y(j)+" != "+A.y(i)))
if(2>=h)return A.e(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.k(n+" origin.z mismatch: "+A.y(l)+" != "+A.y(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.e(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.k(n+" size.x mismatch: "+A.y(g)+" != "+A.y(j)))
if(1>=h)return A.e(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.k(n+" size.y mismatch: "+A.y(j)+" != "+A.y(i)))
if(2>=h)return A.e(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.k(n+" size.z mismatch: "+A.y(l)+" != "+A.y(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.c(A.k("window count mismatch for "+n))
for(n=A.E(j),i=n.i("l(1)"),n=n.i("H<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.bu(new A.H(j,i.a(new A.n8(e)),n),r)
if(d==null)throw A.c(A.k("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.j(A.k(c+" offset mismatch: "+A.y(h)+" != "+A.y(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.j(A.k(c+a+A.y(h)+" != "+A.y(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.j(A.k(c+a0+A.y(h)+" != "+A.y(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.c(A.k("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.c(A.k("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.j(A.k(q+a+A.y(n)+" != "+A.y(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.j(A.k(q+a0+A.y(n)+" != "+A.y(l)))
if(o.f!=m.at)throw A.c(A.k("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaQ(a1).b!==B.a.gaQ(s).b)throw A.c(A.k("stair manifest mismatch"))}}
A.n4.prototype={
$1(a){return A.B5(a,this.a)},
$S:73}
A.n5.prototype={
$1(a){var s=this.a,r=A.mh(a,"portal"),q=A.ek(r,"id"),p=A.ek(r,"a"),o=A.ek(r,"b"),n=A.jb(r,"width"),m=A.jb(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.r(r.h(0,"doorKit")):null
return new A.fg(q,p,o,n*s,m*s,l)},
$S:74}
A.n6.prototype={
$1(a){var s=A.mh(a,"stair")
A.ek(s,"id")
return new A.fi(A.ek(s,"portalId"))},
$S:75}
A.n7.prototype={
$1(a){return typeof a=="string"?a:A.j8("exterior cell")},
$S:76}
A.n8.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.fh.prototype={}
A.n9.prototype={
$1(a){var s=this.a,r=A.mh(a,"window"),q=A.ek(r,"id"),p=A.jb(r,"offset")
A.jb(r,"sill")
return new A.fj(q,p*s,A.jb(r,"width")*s,A.jb(r,"height")*s)},
$S:78}
A.fj.prototype={}
A.fg.prototype={}
A.fi.prototype={}
A.v5.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:12}
A.jv.prototype={
ms(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.E(s)
q=new A.H(s,r.i("l(1)").a(new A.np(e)),r.i("H<1>"))
p=!q.gu(0).m()?null:q.gR(0)
if(p==null){n.d=null
return}if(!(n.ct(b,p.f)&&a==="hall"))o=n.ct(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lh(p,B.c.E(d,0,1))},
lz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eQ(g,c,d)
s=h.iN(a,b,c,d)
if(s!=null){h.d=s
return h.eQ(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.kg(Math.sqrt(r*r+q*q)/0.08))
o=d.ao(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jH(a,n,m,o)
l=l||j.b
m=j.a
i=h.m4(a,n)
n=i==null?n:i}h.ba(m)
return new A.ki(m,n)},
iN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.ct(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.ct(c,l)){l=j<0||o
h=l}if(i||h)return new A.lh(m,i?0:1)}return null},
eQ(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ap(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.E(a.b+o/p,0,1)
n=A.yy(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.ba(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ki(n,k)},
ct(a,b){var s=a.ap(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cG(c,!1)
s=h.cw(a,b,c,new A.a(g,0,0))
r=s.a
q=d.c
p=h.cw(a,b,r,new A.a(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cG(p.a,!1)
n=c.ai(0,new A.a(0,0.35,0))
h.ba(n)
if(!h.cF(a,b)){m=h.cw(a,b,n,new A.a(g,0,0))
l=h.cw(a,b,m.a,new A.a(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.a(g,r-j,q)
h.ba(i)
if(h.cF(a,b))break}h.ba(k)
return new A.cG(k,!1)}}if(o)return new A.cG(r,!0)
if(!p.b)return new A.cG(p.a,!0)
h.ba(c)
return new A.cG(c,!0)},
cw(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cG(c,!1)
s=c.ai(0,d)
this.ba(s)
if(this.cF(a,b)){this.ba(c)
return new A.cG(c,!0)}return new A.cG(s,!1)},
ba(a){var s=a.ap(0,new A.a(0,1.3499999999999999,0))
this.a=s
this.b=s.ai(0,new A.a(0,1.2000000000000002,0))},
cF(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.jE(a,m,s)},
m4(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aG(k)
for(r=k.a,q=a.aJ(r),p=J.S(q.a),q=new A.T(p,q.b,q.$ti.i("T<1>"));q.m();){o=p.gn()
n=o.cc(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fj(k,o,s)&&this.iF(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jE(a,b,c){var s,r,q
for(s=a.aJ(b.a),r=J.S(s.a),s=new A.T(r,s.b,s.$ti.i("T<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fj(b,q,c))return!0}return!1},
fj(a,b,c){var s,r,q,p=a.a,o=b.aH(p),n=b.ag(p)
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
iF(a,b,c){var s,r=this
switch(b.aH(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sk5(a){this.a=t.a7.a(a)}}
A.np.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:80}
A.ki.prototype={}
A.cG.prototype={}
A.lh.prototype={}
A.hI.prototype={}
A.oJ.prototype={
kn(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.e(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hF(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
hG(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.N(["landedCount",this.b],t.N,t.z)}}
A.a_.prototype={}
A.jN.prototype={
glt(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a8(A.d([r,q,p,o,n,m],t.n),new A.nZ())&&o>=r&&n>=q&&m>=p}}
A.nZ.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.k2.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.O(s,3)!==0}else s=!0
if(s)throw A.c(A.x("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.x("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glt())throw A.c(A.x("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.M(A.d([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oL()))throw A.c(A.x("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.c(A.x("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.c(A.x("QHMX index "+o+" exceeds vertex count",m))}}}
A.oL.prototype={
$1(a){return!isFinite(A.br(a))},
$S:5}
A.oK.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bs(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bs(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bs(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bs(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bs(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bs(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a_(a,b,c,m,n,o,0,0,p),r=new A.a_(g,h,i,m,n,o,1,1,p)
this.ad(s,new A.a_(d,e,f,m,n,o,1,0,p),r)
this.ad(s,r,new A.a_(j,k,l,m,n,o,0,1,p))},
ad(a,b,c){var s=this,r=s.b
B.a.l(r,s.d9(a))
B.a.l(r,s.d9(b))
B.a.l(r,s.d9(c))},
d9(a){var s,r,q=B.a.Z(A.d([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.k("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
ka(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.c(A.k("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.k2(A.aj(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jN(s,r,q,p,o,n))
h.C()
return h}}
A.jO.prototype={}
A.vX.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ag.q(0,s))A.j(A.k("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:81}
A.v_.prototype={
$2(a,b){var s=t.Ez
return B.b.F(s.a(a).a,s.a(b).a)},
$S:82}
A.d6.prototype={
mL(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.o(k,k),i=A.d([],t.Dl)
k=t.t
s=A.d([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.e(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iC(A.Gz(new A.k2(i,new Uint16Array(A.a1(s)),A.E6(i))),l.a,l.b,l.c,A.d([],k))}}
A.iC.prototype={}
A.eu.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jP.prototype={
kh(a){var s
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
ki(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ck
break A}if("kitchen"===a||"cellar"===a){s=B.f1
break A}if("bathroom"===a){s=B.f2
break A}if("spare-room"===a){s=B.f3
break A}s=B.ck
break A}return this.kh(s)},
fE(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.cn(this.le(d.i("h(0)").a(a),b,c,d),d.i("cn<0>"))},
le(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fE(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a8(0,B.ag.gaq(B.ag)))throw A.c(A.x("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ag.q(0,j))throw A.c(A.k("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eb.prototype={
fu(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uG.prototype={
$1(a){var s=this
return t.xT.a(a).fu(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:39}
A.uF.prototype={
$1(a){return t.xT.a(a).fu(0,(this.a+this.b)*0.5,this.c)},
$S:39}
A.dh.prototype={
v(){return"FocusKind."+this.b}}
A.dT.prototype={}
A.qy.prototype={}
A.tU.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:84}
A.tT.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.uY.prototype={
$1(a){return B.d.E(B.c.b0(a*this.a),0,255)},
$S:85}
A.ea.prototype={}
A.fZ.prototype={}
A.oH.prototype={
ig(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oZ(1.5),a4=this.b,a5=A.ap(a4,!0,t.U)
B.a.L(a4)
s=A.d([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.t)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.d([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.t)(i),++g){f=i[g]
j.push(new A.ba(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.d([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.t)(h),++g){d=h[g]
i.push(new A.bh(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.d([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.t)(e),++g){b=e[g]
h.push(new A.bj(b.a,b.b,a3.$1(b.c)))}s.push(new A.aZ(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.ap(a4,!0,t.T)
B.a.L(a4)
s=A.d([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.by(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dx(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
ih(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.p_(),a7=this.b,a8=A.ap(a7,!0,t.U)
B.a.L(a7)
s=A.d([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.t)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.d([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.t)(h),++f){e=h[f]
i.push(new A.ba(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.d([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.t)(g),++f){c=g[f]
h.push(new A.bh(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.d([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.t)(d),++f){a=d[f]
g.push(new A.bj(a.a,a.b,a6.$1(a.c)))}d=A.d([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.t)(b),++f){a1=b[f]
d.push(new A.df(a1.a,a1.b*1.5))}s.push(new A.aZ(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.I(a7,s)
a7=this.c
a2=A.ap(a7,!0,t.T)
B.a.L(a7)
s=A.d([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.by(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.I(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.d([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.t)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dx(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
iU(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.U(n))throw A.c(A.k("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.U(n))throw A.c(A.k("duplicate portal "+n))
q.k(0,n,m)}},
jO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.c(A.k("3D room overlap: "+n.a+" and "+m.a))}},
jM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.o(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fi(o,i,h,g,f,e)
a5.ek(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.k(l+" references invalid portal "+d))
i=c.aH(l)
h=c.ag(l)
g=c.w
f=c.x
a5.fi(o,i,h,g,0,f)
a5.ek(a6,l,c.aH(l),c.ag(l),c.ag(l)+g,0,f)}}for(s=new A.K(a6,a6.$ti.i("K<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c9(a)
r.T(a,new A.p0())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.c(A.k("overlapping apertures on "+b.a))}}},
fi(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.m||b===B.l
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.k("aperture outside "+a.a+" "+b.b+" wall"))},
ek(a,b,c,d,e,f,g){J.hn(t.aD.a(a).cd(b+":"+c.b,new A.oY()),new A.iK([d,e,f,g]))},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.a(s.a+r.hF(q),s.b+r.hG(q),s.c)},
aJ(a){var s=this.c,r=A.E(s)
return new A.H(s,r.i("l(1)").a(new A.p1(a)),r.i("H<1>"))},
m3(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.ah(a,"roomId","not a portal endpoint"))
r=this.aG(o)
q=b.ag(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aH(a).a){case 0:s=new A.a(s.a+q,p,s.c)
break
case 2:s=new A.a(s.a+q,p,s.c+r.c)
break
case 1:s=new A.a(s.a+r.a,p,s.c+q)
break
case 3:s=new A.a(s.a,p,s.c+q)
break
default:s=null}return s},
gmK(){return B.a.bc(this.b,0,new A.p2(),t.S)},
fW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.X
s=A.d([new A.aV(a,B.X)],t.nR)
r=A.aN([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.mb(s,0)
n=o.a
m=o.b
for(l=this.aJ(n),k=J.S(l.a),l=new A.T(k,l.b,l.$ti.i("T<1>"));l.m();){j=k.gn()
i=j.cc(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.aV(i,h))}}}return B.X}}
A.oZ.prototype={
$1(a){var s=this.a
return new A.a(a.a*s,a.b,a.c*s)},
$S:38}
A.p_.prototype={
$1(a){return a.ao(0,1.5)},
$S:38}
A.p0.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.F(a.a[0],b.a[0])},
$S:87}
A.oY.prototype={
$0(){return A.d([],t.wx)},
$S:177}
A.p1.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:89}
A.p2.prototype={
$2(a,b){return A.f(a)+t.U.a(b).e.length},
$S:90}
A.nY.prototype={}
A.rl.prototype={
hE(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a8(s,new A.rm())}else s=!1
return s}}
A.rm.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.oM.prototype={
m0(a){var s=this.e,r=A.E(s)
return new A.H(s,r.i("l(1)").a(new A.oP(a)),r.i("H<1>"))},
cz(a){return B.a.aW(this.d,new A.oN(a),new A.oO(a))},
dU(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.c(A.k("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.c(A.k("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.c(A.k("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a0(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.c(A.k("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.c(A.k("invalid bounds for inventory asset "+m))}j=A.a0(s)
i=A.a0(s)
h=A.a0(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.c(A.k("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.c(A.k(a7+m+" references "+l))
n=a6.cz(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.AM()
if(!e.b.test(k))throw A.c(A.k("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.c(A.k("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.c(A.k("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.c(A.k("duplicate inventory socket "+l+":"+e))
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
a4=g.h2(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.c(A.k(a7+m+" escapes "+f.a))}}}
A.oP.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:91}
A.oN.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:92}
A.oO.prototype={
$0(){return A.j(A.k("inventory asset missing: "+this.a))},
$S:6}
A.cV.prototype={}
A.cx.prototype={
h2(a,b){var s=this.f.c.b*b,r=a.f
return new A.a(r.a.b*s,r.b.b*s,0)}}
A.pc.prototype={}
A.pa.prototype={}
A.v4.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:12}
A.pb.prototype={
B(){var s,r,q,p=A.o(t.N,t.z),o=this.a,n=A.p(o).i("aa<1>")
n=A.J(new A.aa(o,n),n.i("n.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dQ(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.c(B.ff)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.L(0)
for(q=new A.K(r,A.p(r).i("K<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aK(o)||o<0)throw A.c(B.fv)
s.k(0,n,o)}}}
A.dr.prototype={}
A.oQ.prototype={
mI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.Q.a(a)
s=A.d([],t.ea)
for(r=A.fU(a,a.r,A.p(a).c),q=this.a.e,p=r.$ti.c;r.m();){o=r.d
n=q.h(0,o==null?p.a(o):o)
if(n==null)continue
for(o=n.r,m=o.length,l=n.d,k=l.a,j=l.b,l=l.c,i=n.a,h=0;h<o.length;o.length===m||(0,A.t)(o),++h){g=o[h]
if(!g.d||g.e)continue
f=g.c
B.a.l(s,new A.dr(new A.a(k+f.a,j+f.b,l+f.c),16760952,3.8,2.1*this.jx(i)))}}B.a.T(s,new A.oR(b))
return A.kU(s,0,A.fa(4,"count",t.S),t.A_).bJ(0)},
jx(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oR.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.F(a.a.ap(0,s).gt(0),b.a.ap(0,s).gt(0))},
$S:94}
A.hD.prototype={
v(){return"Floor."+this.b}}
A.dS.prototype={
v(){return"Facing."+this.b}}
A.ba.prototype={
shD(a){this.w=A.R(a)}}
A.by.prototype={
cc(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aH(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.ah(a,"roomId","not an endpoint of "+s.a))},
ag(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.ah(a,"roomId","not an endpoint of "+s.a))}}
A.bh.prototype={}
A.bj.prototype={}
A.df.prototype={}
A.dx.prototype={}
A.aZ.prototype={}
A.oT.prototype={
l7(a){return B.a.aW(this.c,new A.oU(a),new A.oV(a))},
mG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.c(A.k("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.c(A.k("soundscape source changed: "+f))
f=t.N
s=A.a0(f)
f=A.o(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.c(A.k("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.c(A.k("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.c(A.k("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.c(A.k("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gP(k)||k.gaB().M(0,new A.oW()))throw A.c(A.k("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.c(A.k("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.c(A.k("sound emitter "+l+" escapes "+j.a))}}}
A.oU.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:95}
A.oV.prototype={
$0(){return A.j(A.k("sound emitter missing: "+this.a))},
$S:6}
A.oW.prototype={
$1(a){return B.b.bg(A.r(a)).length===0},
$S:3}
A.cU.prototype={}
A.oI.prototype={
di(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.ah(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.iU}q=A.d([],t.Fm)
p=B.c.aN(r)+1
o=B.c.aN(b)
for(n=p;n<=o;++n){m=B.d.O(n,24)
B.a.l(q,new A.eA("tick"))
if(B.d.O(m,3)===0){B.a.l(q,new A.eA("cuckoo"))
B.a.l(q,new A.eA("bell"))}if(B.d.O(m,6)===0)B.a.l(q,new A.eA("chime"))}l.b=b
return q}}
A.eA.prototype={}
A.oS.prototype={
di(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.ah(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iT}q=A.d([],t.op)
for(p=B.c.aN(r)+1;p<=B.c.aN(b);++p){o=B.d.O(p,24)
n=B.d.O(o,4)
if(n===2)B.a.l(q,B.hL)
if(B.d.O(o,3)===1)B.a.l(q,B.hN)
if(B.d.O(o,8)===5)B.a.l(q,B.hQ)
if(B.d.O(o,5)===0)B.a.l(q,B.hM)
if(B.d.O(o,7)===3)B.a.l(q,B.hR)
if(n===1)B.a.l(q,B.hO)
if(B.d.O(o,6)===4)B.a.l(q,B.hP)}m.b=b
return q}}
A.cT.prototype={}
A.v3.prototype={
$1(a){return typeof a!="number"},
$S:12}
A.oX.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.o(m,l)
for(s=n.a,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.N(["open",o.a,"locked",o.b],m,r))}l=A.o(m,l)
for(s=n.c,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.N(["lit",o.a,"examined",o.b],m,r))}return A.N(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a0(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.a0(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.a0(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.x_(new A.aa(o,A.p(o).i("aa<1>")),d)){d=f.b
if(A.x_(new A.aa(d,A.p(d).i("aa<1>")),r)){d=f.c
e=!A.x_(new A.aa(d,A.p(d).i("aa<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.fP)
e=f.d
if(e<0||e>2)A.j(B.fm)
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
A.i3.prototype={
B(){return A.N(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hT.prototype={
B(){return A.N(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bg.prototype={}
A.nT.prototype={
$1(a){return this.a.q(0,A.r(a))},
$S:3}
A.dV.prototype={
v(){return"Hand."+this.b}}
A.rX.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
ea(a,b){var s,r,q,p,o=A.d([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.ke.prototype={
B(){var s,r,q,p=t.N,o=A.o(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.A[r]
o.k(0,q,s.h(0,q))}return A.N(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.O(B.A,t.oI.a(new A.py(this)),t.jT).Z(0," \xb7 ")}}
A.px.prototype={
$2(a,b){return new A.L(A.r(a),A.r(b),t.q)},
$S:96}
A.py.prototype={
$1(a){return this.a.a.h(0,A.r(a))},
$S:97}
A.bS.prototype={
B(){var s,r,q,p=this,o=A.d([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.N(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pf.prototype={
bX(a){t.G.a(a)
return a.a===5&&B.a.a8(B.A,new A.pm(this,a))},
el(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bX(b))return null
s=this.e++
r=new A.bS(s,a,A.d([A.pw(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dn(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bX(b))return!1
B.a.l(s.c,A.pw(b,c,B.aA))
return!0},
jT(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bX(b))return!1
s.r=A.pw(b,0,B.cL)
return!0},
hv(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.L(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.U(p)&&!B.a.q(s,p))B.a.l(s,p)}},
mH(a){var s
if(!this.b.U(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.p(n).c)
B.a.Y(n)
s=A.d([],t.cs)
for(r=q.b,r=new A.ai(r,r.r,r.e,A.p(r).i("ai<2>"));r.m();)s.push(r.d.B())
return A.N(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pm.prototype={
$1(a){var s
A.r(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.na.prototype={
kS(a,b){if(a.a===B.aH)return new A.q8(b,a.B(),B.ds)
return new A.pq(b,!1,null,a.B(),B.ds)}}
A.hp.prototype={
B(){var s,r=this,q=A.o(t.N,t.X)
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
A.nb.prototype={
cj(a){var s,r,q,p=null,o=a==null?p:B.b.bg(a).toLowerCase()
if(o==null||o.length===0)return B.e2
s=o!=="pixeldart"
if(!s||o==="next"||o==="auto"||o==="legacy"){s=!s||o==="next"
r=o==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':p
return new A.hp(B.aH,s,o==="auto",!1,p,r,q)}return new A.hp(B.aH,!1,!1,!0,'unsupported renderer query "'+o+'"; use pixeldart',!1,p)}}
A.pr.prototype={}
A.pq.prototype={
gbz(){var s=this.b.gbz(),r=s.h8(this.e)
return r},
c4(){if(this.f===B.dt)throw A.c(A.k("legacy backend is disposed"))
this.b.c4()
this.f=B.x},
be(a,b){if(a<=0||b<=0)throw A.c(A.x("legacy surface size must be positive",null))
if(this.f!==B.x)A.j(A.k("legacy backend is not ready"))
this.b.be(a,b)},
bq(a){if(this.f!==B.x)A.j(A.k("legacy backend is not ready"))
B.k.ae(A.N(["backend","legacy","interpolation",0,"facts",A.ma(a.a.a)],t.N,t.X),null)
this.b.bq(a)},
dv(a){if(this.f!==B.x)A.j(A.k("legacy backend is not ready"))
B.k.ae(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.q9.prototype={}
A.q8.prototype={
gbz(){var s=this.b.gbz(),r=s.h8(this.c)
return r},
c4(){if(this.d===B.dt)throw A.c(A.k("pixeldart backend is disposed"))
this.b.c4()
this.d=B.x},
be(a,b){if(this.d!==B.x)A.j(A.k("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.x("pixeldart surface size must be positive",null))
this.b.be(a,b)},
bq(a){var s,r=this,q="pixeldart backend is not ready",p=r.b,o=r.d
if(o===B.bz){if(p.xr){s=p.d
s===$&&A.q()
s=s.b===B.U}else s=!1
s=!s
if(s){r.d=B.x;++p.ry
o=B.x}if(o===B.bz)return}if(o!==B.x)A.j(A.k(q))
B.k.ae(A.N(["backend","pixeldart","interpolation",0,"facts",A.ma(a.a.a)],t.N,t.X),null)
if(p.xr){o=p.d
o===$&&A.q()
o=o.b===B.U}else o=!1
if(o){if(r.d!==B.x)A.j(A.k(q))
r.d=B.bz
return}p.bq(a)},
dv(a){if(this.d!==B.x)A.j(A.k("pixeldart backend is not ready"))
B.k.ae(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.qa.prototype={
ke(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c7.cj(a)
r=A.d([a.a,"webgl2"],t.s)
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
o=A.J(o,A.p(o).c)
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
A.kt.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qb.prototype={
B(){var s=this
return A.N(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qc.prototype={
ft(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(c<=0||b<=0)throw A.c(A.x("surface dimensions must be positive",null))
s=a.a
A:{if(B.a1===s){r=new A.f2(540,960)
break A}if(B.P===s){r=new A.f2(360,640)
break A}r=new A.f2(216,384)
break A}q=r.b
r=r.a
p=B.c.E(c/q,0,1)
o=B.c.E(b/r,0,1)
n=p<o?p:o
q=this.en(B.c.b0(q*n),320,c)
r=this.en(B.c.b0(r*n),180,b)
m=s===B.a1
l=s===B.P
k=a.b
j=k.q(0,"shadows")
k=k.q(0,"msaa")?2:1
if(j)if(m)i=3
else i=l?2:1
else i=0
if(m)h=1024
else h=l?768:512
if(m)g=64
else g=l?32:16
if(m)f=8
else f=l?4:1
if(m)e=8
else e=l?4:1
return new A.kH(a,q,r,k,i,h,g,f,e,B.eN)},
en(a,b,c){if(c<b)return c
return B.d.E(a,b,c)}}
A.kd.prototype={}
A.qi.prototype={
mE(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b6
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b6
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.kd(!0,B.c.E(q*(0.6+b*0.6),0,1),0.82+s.aI()*0.1,0.9+s.aI()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aI()*0.15
p.e=(0.6+s.aI()*2.8)/0.343
p.b=16-b*11+s.aI()*6}}}
A.kG.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eJ.prototype={
v(){return"RendererBackendState."+this.b}}
A.qv.prototype={}
A.kI.prototype={}
A.qu.prototype={
i3(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.c(A.x("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.c(A.x("renderer provenance values must be non-empty",null))}},
h8(a){var s=this
return A.yi(s.a,s.c,s.d,!1,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
B(){var s,r,q,p=this,o=A.o(t.N,t.z)
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
A.qw.prototype={
be(a,b){if(a<=0||b<=0)throw A.c(A.x("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fL(a,b){var s,r,q,p,o
for(s=A.aj(this.a.d,t.rO),r=A.E(s).i("eL<1>"),s=new A.eL(s,r),s=new A.aI(s,s.gt(0),r.i("aI<a2.E>")),r=r.i("a2.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.rg.prototype={}
A.cF.prototype={
v(){return"ShaderDebugMode."+this.b},
gkZ(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dw.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e4.prototype={
gfG(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aK(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aK(r,2)
else return B.c.aK(r,3)}}}
A.rh.prototype={
gbd(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.e(B.bm,p)
s=B.bm[p]
p=this.f
p===$&&A.q()
r=A.E(p)
q=r.i("H<1>")
p=A.J(new A.H(p,r.i("l(1)").a(new A.rk(s)),q),q.i("n.E"))
return p},
gcC(){var s,r=this.gbd(),q=r.length
if(q===0)return null
s=B.d.E(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.e(r,s)
return r[s]},
mf(){var s,r,q,p,o
if(this.b===4)this.e=B.aK
else for(s=this.gbd(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
md(){var s,r,q,p
this.e=B.aK
s=this.f
s===$&&A.q()
r=0
for(;r<36;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
H(a){var s,r,q=this.f
q===$&&A.q()
s=A.E(q)
r=A.bu(new A.H(q,s.i("l(1)").a(new A.rj(a)),s.i("H<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
aP(a){var s,r,q=this.f
q===$&&A.q()
s=A.E(q)
r=A.bu(new A.H(q,s.i("l(1)").a(new A.ri(a)),s.i("H<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rk.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:17}
A.rj.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:17}
A.ri.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:17}
A.bN.prototype={
v(){return"SleepQuality."+this.b}}
A.bB.prototype={
v(){return"SleepLocation."+this.b}}
A.fP.prototype={}
A.nL.prototype={
cS(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hK(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.d([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.N(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.N(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nM.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:99}
A.nN.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:100}
A.k5.prototype={
v(){return"InteractionType."+this.b}}
A.eV.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.t1.prototype={}
A.eU.prototype={}
A.jA.prototype={}
A.p3.prototype={}
A.p7.prototype={
e_(){var s,r,q,p=t.r,o=A.d([],p)
for(s=this.a.b,s=new A.ai(s,s.r,s.e,A.p(s).i("ai<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.d(o.slice(0),p)
B.a.T(p,new A.p8())
return p},
km(a,b){var s,r,q,p,o,n=b.b
if(n.gP(n))return B.mO
s=t.N
r=A.a0(s)
q=A.a0(s)
for(s=n.ga2(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gW(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eU(B.aO,r)
s=r.a
o=B.a.gW(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gW(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eU(B.dT,r)
return new A.eU(B.bT,r)},
jp(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jA(e,!1,B.mN,null)
s=p.d===c
r=this.km(p,d)
q.mH(e)
return new A.jA(e,s,r,r.a===B.aO&&s?'The world says "'+d.c+'". The entry says "'+B.a.gW(p.c).p(0)+'".':null)},
kT(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aO)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.p3(B.a.gW(s.c).p(0)+" but "+A.y(a.f))}}
A.p8.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.F(s.a(b).a,a.a)},
$S:16}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qz.prototype={}
A.cY.prototype={}
A.qA.prototype={
geb(){var s=B.bq.h(0,this.a)
return s==null?0:s},
hO(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.cW
r=A.wM(b)
s=q.c
B.a.L(s)
B.a.I(s,r)
B.a.L(q.d)
q.a=B.aI
q.b=0
q.e=!1
return A.d([B.ew],t.xB)},
dh(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.x("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.cW
s=A.d([],t.xB)
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
if(l.a===B.a2)l.jJ(s)
p=l.b
o=B.bq.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cY())
if(q===B.a2){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.ev)}else{p=q.a+1
if(!(p<7))return A.e(B.cU,p)
l.a=B.cU[p]
l.b=0
B.a.l(s,new A.cY())}}}return A.aj(s,t.F3)},
B(){var s=this,r=t.N
return A.N(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.aj(s.c,r),"extinguishedMantles",A.aj(s.d,r),"completed",s.e],r,t.z)},
jJ(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.E(B.c.aN(l.b/l.geb()*A.aj(s,r).length),0,A.aj(s,r).length)
p=l.d
for(;;){o=A.ap(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.ap(s,!1,r)
o.$flags=3
n=o
o=A.ap(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.e(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cY())}}}
A.jU.prototype={
gee(){var s=this.b
if(s<7||s>19)return 0
return B.c.E((s-7)/12,0,1)},
gkU(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.E((s-5.5)/15,0,1))}}
A.eT.prototype={
B(){var s=this
return A.N(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rY.prototype={
du(a){var s,r
if(a<1||a>this.b.length)throw A.c(A.aY(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.e(s,r)
return s[r]}}
A.uH.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.E(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eT(r,q,A.A0(B.c.aK(s,2)),A.A0(B.c.aK(12-(r-1)*0.11000000000000001,2)))},
$S:101}
A.pN.prototype={
aX(a,b){var s=this.b
if(s.U(a))s=s.h(0,a)===b
else s=!1
return s},
jX(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.p(k).i("K<1,2>")
k=A.J(new A.K(k,j),j.i("n.E"))
B.a.T(k,new A.pP())
j=t.N
k=A.wb(k,j,j)
s=this.b
r=A.p(s).i("K<1,2>")
s=A.J(new A.K(s,r),r.i("n.E"))
B.a.T(s,new A.pQ())
s=A.wb(s,j,j)
r=A.o(j,t.P)
q=this.c
p=A.p(q).i("K<1,2>")
q=A.J(new A.K(q,p),p.i("n.E"))
B.a.T(q,new A.pR())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.t)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.N(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.N(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pP.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.pQ.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.pR.prototype={
$2(a,b){var s=t.gJ
return B.b.F(s.a(a).a,s.a(b).a)},
$S:103}
A.cO.prototype={
B(){var s=this
return A.N(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bw.prototype={
B(){var s=this
return A.N(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.q6.prototype={
dY(){var s="denise.pears",r=A.d([],t.xz),q=this.a
if(q.aX("ashworth.compact","accepted"))B.a.l(r,B.kk)
if(q.aX(s,"taken"))B.a.l(r,B.ko)
else if(q.aX(s,"left"))B.a.l(r,B.kl)
if(q.aX("sylvia.certificate","granted"))B.a.l(r,B.kn)
if(q.aX("residue.coal","cellar"))B.a.l(r,B.kj)
if(q.aX("telegram.08","read"))B.a.l(r,B.ki)
if(q.aX("truth.shawl","home"))B.a.l(r,B.kh)
if(q.aX("sowerby.paraffin","received"))B.a.l(r,B.km)
if(q.aX("inspector.proclamation","acknowledged"))B.a.l(r,B.kg)
return r},
he(a){var s=this.dY(),r=A.E(s),q=r.i("H<1>")
s=A.J(new A.H(s,r.i("l(1)").a(new A.q7(a)),q),q.i("n.E"))
return s}}
A.q7.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:34}
A.rq.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fR(e.a),c=t.N,b=t.P,a=A.o(c,b)
for(s=e.b,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jP(q,r.b))}s=A.fR(e.r)
q=A.fR(e.w)
p=A.fR(e.x)
o=A.o(c,t.rW)
for(n=e.as,n=new A.K(n,A.p(n).i("K<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.d([],m)
for(i=J.S(l.b);i.m();){h=i.gn()
j.push(A.N(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.o(c,b)
for(m=e.at,m=new A.K(m,A.p(m).i("K<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.o(c,b)
for(m=e.ax,m=new A.K(m,A.p(m).i("K<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.N(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jP(a,b){var s,r=A.fR(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fR(q.bF(0,new A.rr(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gX(s))r.k(0,"_ambient",A.fR(s.bF(0,new A.rs(),t.S,t.z)))
return r}}
A.rr.prototype={
$2(a,b){return new A.L(A.f(a),t.BX.a(b).B(),t.pr)},
$S:105}
A.rs.prototype={
$2(a,b){return new A.L(A.f(a),t.vw.a(b).B(),t.pr)},
$S:106}
A.eS.prototype={
B(){return A.N(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eR.prototype={
B(){return A.N(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.ip.prototype={
B(){var s=t.N
return A.N(["field",this.a,"value",this.b],s,s)}}
A.lc.prototype={
B(){var s,r,q,p=this,o=A.d([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.N(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eI.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gX(s))q.k(0,"effects",s)
return q}}
A.d4.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gX(s))q.k(0,"when",s)
return q}}
A.rt.prototype={
ca(){var s=0,r=A.c6(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ca=A.c8(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.aB(A.bQ(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$ca)
case 6:n=b
j=t.N
s=7
return A.aB(A.bQ(A.b(n.text()),j),$async$ca)
case 7:m=b
l=A.G2(m)
i=J.aS(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aS(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aS(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aS(l,"documents")
i.toString
h.a(i)
i=J.aS(l,"street")
i.toString
h.a(i)
i=J.aS(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aS(l,"nights")
i.toString
h.a(i)
i=J.aS(l,"endings")
i.toString
o.w=h.a(i)
i=J.aS(l,"records")
i.toString
o.x=h.a(i)
i=J.aS(l,"cues")
i.toString
h.a(i)
i=J.aS(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aS(l,"reactions"))){g=J.aS(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.o(j,t.z)
o.Q=h.a(g)
if(i.b(J.aS(l,"variants"))){g=J.aS(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.o(j,t.z)
o.as=h.a(g)
if(i.b(J.aS(l,"residues"))){g=J.aS(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.o(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.ao(e)
j=A.y(k)
throw A.c("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.c4(null,r)
case 1:return A.c3(p.at(-1),r)}})
return A.c5($async$ca,r)},
hd(a){var s,r,q,p=this.a
p===$&&A.q()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().cM(0,new A.ru())
r=p.$ti
q=t.N
return A.wb(new A.cA(p,r.i("L<h,h>(1)").a(new A.rv()),r.i("cA<1,L<h,h>>")),q,q)}return null},
dZ(a,b){var s=this.hd(a)
return s==null?null:s.h(0,b)},
hh(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.q()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.d([],t.kv)
for(o=J.S(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.o(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.r(i.b))}B.a.l(p,new A.eI(A.r(m.h(0,"id")),A.r(m.h(0,"label")),A.r(m.h(0,"reply")),A.b4(k,n,n)))}if(p.length<2)return g
return new A.lc(r,a,b,c,d,A.aj(p,t.Y))},
hg(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.q()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.az(p)||o!==B.c.az(o))return n
return new A.eS(B.c.az(p),B.c.az(o))},
hf(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.q()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.az(p)||typeof o!="string"||typeof n!="string")return m
return new A.eR(B.c.az(p),o,n)},
mJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.o(a5,t.ee),a7=A.o(a5,t.tQ),a8=A.o(a5,t.pG),a9=t.a,b0=A.o(a5,t.uh),b1=A.o(a5,t.sy),b2=A.o(a5,t.aS),b3=A.o(a5,a5),b4=a1.b
b4===$&&A.q()
b4=new A.K(b4,A.p(b4).i("K<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.o(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.ds(l,null):null
if(k==null||!q.b(m.b))continue
j=A.o(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.r(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.o(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hg(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.o(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hf(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.q()
b4=new A.ai(b4,b4.r,b4.e,A.p(b4).i("ai<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hh(A.r(d.h(0,"visitor")),B.c.az(A.ad(d.h(0,"day"))),A.r(d.h(0,"tier")),B.c.az(A.ad(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.q()
b4=new A.ai(b4,b4.r,b4.e,A.p(b4).i("ai<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.o(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.r(r.b))}s=A.r(d.h(0,"id"))
b2.k(0,s,new A.d4(s,A.r(d.h(0,"target")),A.r(d.h(0,a2)),A.b4(b,a5,a5)))}b4=a1.at
b4===$&&A.q()
b4=new A.K(b4,A.p(b4).i("K<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.q()
b4=new A.K(b4,A.p(b4).i("K<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.d([],s)
for(m=J.S(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ip(A.r(a0.h(0,"field")),A.r(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rq(A.o(a3,a4),a6,a7,a8,A.o(a5,a9),A.o(a5,a9),A.o(a3,a9),A.o(a3,a9),A.o(a3,a9),A.o(a5,a9),A.o(a5,a9),A.o(a5,a9),b0,b1,b2,b3)}}
A.ru.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:107}
A.rv.prototype={
$1(a){t.AC.a(a)
return new A.L(A.r(a.a),A.r(a.b),t.q)},
$S:108}
A.ji.prototype={
bC(a,b,c){var s=B.b.bg(a),r=B.b.bg(c)
if(r.length===0)return""
if(b||this.a===B.bV)return s.length===0?r:s+": "+r
if(this.a===B.bU)return r
return s.length===0?r:s+": "+r},
fF(a,b){return this.bC(a,!1,b)}}
A.w1.prototype={}
A.cM.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dJ.prototype={
bY(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dJ(q,p,o,n,m)},
kM(a){var s=null
return this.bY(s,s,s,a,s)},
kQ(a){var s=null
return this.bY(s,s,s,s,a)},
kI(a){var s=null
return this.bY(s,s,a,s,s)},
kG(a){var s=null
return this.bY(s,a,s,s,s)},
kq(a){var s=null
return this.bY(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.N(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mw.prototype={
$1(a){return a==null?null:A.R(a)},
$S:109}
A.mu.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:32}
A.mv.prototype={
$0(){return A.j(B.h3)},
$S:6}
A.mH.prototype={
bL(a,b){var s,r=this,q=r.e.fF(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aM(q)
A.f(A.b(v.G.window).setTimeout(A.zn(new A.mJ(r)),7000))},
aM(a){var s,r,q=this
if(!q.c||B.b.bg(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.f(A.b(v.G.window).setTimeout(A.zn(new A.mI(q,s)),4200))}}
A.mJ.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:111}
A.mI.prototype={
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
A.dd.prototype={
v(){return"AudioReverbMode."+this.b}}
A.dc.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dK.prototype={
cB(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dK(r,q,p,a==null?s.e:a)},
kF(a){return this.cB(null,null,a,null)},
kw(a){return this.cB(null,a,null,null)},
kK(a){return this.cB(null,null,null,a)},
kv(a){return this.cB(a,null,null,null)},
B(){var s=this
return A.N(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mU.prototype={
$1$2(a,b,c){return B.a.aW(c.i("n<0>").a(a),new A.mV(b,c),new A.mW(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:112}
A.mV.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.mW.prototype={
$0(){return A.j(A.a4("unsupported audio option: "+A.y(this.a),null,null))},
$S:6}
A.nd.prototype={
mD(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.fF(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.ng.prototype={
$1(a){return this.a.$0()},
$S:2}
A.nk.prototype={
$1(a){return this.a.$1(A.R(this.b.checked))},
$S:2}
A.nj.prototype={
$1(a){var s=A.eF(A.r(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.ni.prototype={
$1(a){A.r(a)
return a.length!==0&&!B.b.V(a,"brush-state-")},
$S:3}
A.dM.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dN.prototype={
v(){return"BrushComponentState."+this.b}}
A.b2.prototype={
gjR(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bg(s.a).length===0||B.b.bg(s.c).length===0)throw A.c(B.fU)
if(s.e===B.c5&&s.b!==B.c4)throw A.c(B.fw)}}
A.nm.prototype={
la(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.E(a>=r+c?q.e=a-c+1:r,0,s)},
cO(a,b){if(b<=0){this.f=0
return}this.f=B.d.E(this.f+a,0,Math.max(0,b-1))},
bB(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.q()
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
this.eF(A.d([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eF(A.d([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aV(a,b,c,d,e,f,g,h,i){return this.bB(a,b,c,d,e,!0,f,g,h,i)},
l_(a,b,c,d,e,f,g,h,i){return this.bB(a,b,14,c,d,e,f,g,h,i)},
l4(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.q()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ec()
s.bN(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aI()-0.5)*8
l=s.aI()
k=s.aI()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fB(a,b,c,d,e){var s,r,q=this.b
q===$&&A.q()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eE(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eE(0,0,c)
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
l2(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.q()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.ad(A.b(q.measureText(a.toUpperCase())).width)+70)
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
l1(d0,d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=this,c6="rgba(12, 10, 14, 0.92)",c7="#f5f0e6",c8='px "Cinzel", serif',c9=d2.r
if(!c9&&d2.b.length===0&&d2.d.length===0)return
s=d1<640||d0<540
r=Math.min(d1*(s?0.92:0.85),780)
q=s?126:140
p=d1*0.5
o=Math.min(d0*0.74,d0-q*0.58)
c5.aV(c7,2.5,16,c6,q,-0.05,r,p,o)
n=d2.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c5.b
l===$&&A.q()
l.font="bold "+(s?11:13)+c8
k=Math.min(r-28,Math.max(180,A.ad(A.b(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c5.bB(c7,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+c8
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d2.gmu()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c5.jQ(l,d,i+32,f+32,r-64,24)
l.restore()
i=d2.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+c8
b=B.a.bc(i,0,new A.nn(c5),t.i)
a=Math.max(220,d1-24)
c9=s?260:320
a0=Math.min(a,Math.max(c9,b+78))
a1=s?31:34
a2=s?35:39
a3=f-18
a4=Math.max(0,a3-34)
a5=Math.max(1,B.c.aN((a4+a2-a1)/a2))
c9=d2.f
c5.la(c9==null?0:c9,c,a5)
a6=Math.max(0,c-a5)
j=B.d.E(c5.e,0,a6)
c5.e=j
a7=Math.min(c,j+a5)
l.save()
l.beginPath()
j=a0*0.5
l.rect(p-j-12,18,a0+24,Math.max(1,a4+20))
l.clip()
l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="bottom"
l.fillText("YOUR RESPONSE",p,30)
l.restore()
for(a8=c5.e,g=c5.d,f=a1*0.5,c=d2.e;a8<a7;a8=b0){if(!(a8>=0&&a8<i.length))return A.e(i,a8)
a9=i[a8]
b0=a8+1
b1=34+a8*a2+f
b2=c9===a8
b3=c===a8
b4=!b2
b5=p+(!b4||b3?18:0)
b6=b5-j
B.a.l(g,new A.fo("choice-"+b0,a8,b6,b1-f,a0,a1))
if(b3)b7="#d32f2f"
else b7=b2?"#1a1820":c6
b8=!b4||b3?"#c49a45":c7
c5.aV(b8,!b4||b3?2.5:1.5,8,b7,a1,-0.06,a0,b5,b1)
b9=b6+24
b4=!b3
c5.fB(!b4||b2,b0,24,b9,b1)
l.save()
c0=!b4||b2?"#ffd54f":c7
l.fillStyle=c0
l.font="bold "+(s?12:13)+c8
l.textAlign="left"
l.textBaseline="middle"
l.fillText(a9,b9+22,b1)
l.restore()}l.restore()
if(a6>0){l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="middle"
if(c5.e>0)l.fillText("\u25b2 MORE",p+j-28,26)
if(c5.e<a6)l.fillText("\u25bc MORE",p+j-28,a3+8)
l.restore()}}else if(c9&&d2.b.length!==0){c1=s?104:118
c2=s?28:30
c3=p+j-c1*0.62
c4=o+g-c2*0.72
B.a.l(c5.d,new A.fo("dialogue-continue",-1,c3-c1*0.5,c4-c2*0.5,c1,c2))
c5.aV("#c49a45",1.5,5,"#1a1820",c2,-0.04,c1,c3,c4)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+c8
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c3,c4)
l.restore()}},
l0(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.e(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bB(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.q()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText("["+p.a+"] "+p.b,o,r)
m.restore()}},
l3(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
if(c7<=0.001)return
s=Math.sin(c7*3.141592653589793*0.5)
r=Math.min(c9*0.92,860)
q=Math.min(c8*0.88,620)
p=c9+r*0.6
o=p+(c9*0.5-p)*s
n=c8*0.5
c7=c0.b
c7===$&&A.q()
c7.save()
c7.fillStyle="rgba(10, 8, 12, "+A.y(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aV(c2,3,18,c1,q,-0.025,r,o,n)
c0.l4(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
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
c0.bB(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c7.fillText(d0.e.gkZ().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbd()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aN((a4+52-44)/52))
a6=Math.max(0,a2.length-a5)
l=B.d.E(c0.f,0,a6)
c0.f=l
a7=Math.min(a2.length,l+a5)
c7.save()
c7.beginPath()
l=r*0.5
c7.rect(o-l+24,a0,r-48,a4)
c7.clip()
for(g=c0.f,a8=r-80,j=a8*0.5;g<a7;++g){if(!(g>=0&&g<a2.length))return A.e(a2,g)
a9=a2[g]
e=d0.c===g
b0=a0+g*52+22
b1=o+(e?12:0)
c=e?c5:c1
b=e?c4:c6
c0.bB(b,e?2.2:1,6,c,44,e,-0.02,a8,b1,b0)
if(e)c0.fB(!0,g+1,20,b1-j+20,b0)
c7.save()
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="left"
c7.textBaseline="middle"
b2=e?38:18
c7.fillText(a9.b.toUpperCase(),b1-j+b2,b0)
b3=b1+j-20
if(a9.e){b4=a9.z
c=b3-37
b=b4?c2:"#0c0a0e"
c0.l_(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfG(),c,b0)}else{b5=b3-80-80
c7.fillStyle="#0c0a0e"
c=b5-80
b=b0-4
c7.fillRect(c,b,160,8)
b6=a9.f
b7=a9.r
b8=B.c.E((a9.y-b6)/(b7-b6),0,1)
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
c7.fillText(a9.gfG(),b3,b0)}c7.restore()}c7.restore()
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
eF(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.q()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eE(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.q()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
jQ(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.ad(A.b(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)}}
A.nn.prototype={
$2(a,b){var s
A.br(a)
A.r(b)
s=this.a.b
s===$&&A.q()
return Math.max(a,A.ad(A.b(s.measureText(b)).width))},
$S:113}
A.fs.prototype={
gk9(){var s,r,q,p,o=t.N
o=A.o(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aC(r)
o.k(0,q,p.gP(r)?"":p.gR(r))}return o},
bx(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.N(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.br(r)
q=n.h(0,i)
q.toString
A.br(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
return A.ft(null,a,A.R(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.f(s)
r=n.h(0,j)
r.toString
A.br(r)
q=n.h(0,i)
q.toString
A.br(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
A.R(m)
l=k.gk9()
return A.ft(l,null,m,r,p,o,s,q)},
dm(a){var s=null
return this.bx(a,s,s,s,s,s)},
kC(a){var s=null
return this.bx(s,s,s,a,s,s)},
kD(a){var s=null
return this.bx(s,s,s,s,a,s)},
kz(a){var s=null
return this.bx(s,a,s,s,s,s)},
kA(a){var s=null
return this.bx(s,s,a,s,s,s)},
kR(a){var s=null
return this.bx(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.c(B.fh)
p=this.r
if(p.gJ().M(0,new A.nC()))throw A.c(B.fX)
if(p.gJ().M(0,new A.nD()))throw A.c(B.fL)
p=p.gaB()
o=A.p(p)
s=o.i("hB<n.E,h>")
r=s.i("H<n.E>")
q=A.J(new A.H(new A.hB(p,o.i("n<h>(n.E)").a(new A.nE()),s),s.i("l(n.E)").a(new A.nF()),r),r.i("n.E"))
if(A.hS(q,A.E(q).c).a!==q.length)throw A.c(B.fk)},
B(){var s,r,q=this,p=t.N,o=A.o(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.ap(r.b,!0,p))}return A.N(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nC.prototype={
$1(a){t.yx.a(a)
return J.xw(a.b,new A.nB(a))},
$S:31}
A.nB.prototype={
$1(a){var s
A.r(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xH(a)
else s=!1
return s},
$S:3}
A.nD.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.xw(a.b,B.dx.gaq(B.dx))},
$S:31}
A.nE.prototype={
$1(a){return t.a.a(a)},
$S:115}
A.nF.prototype={
$1(a){return A.r(a).length!==0},
$S:3}
A.nA.prototype={
$1(a){return typeof a=="string"},
$S:12}
A.dL.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.ep.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.de.prototype={}
A.jB.prototype={
bV(a){var s=this
if(!s.a.r.U(a))return new A.de(B.c1,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e3},
kf(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aT
if(!A.xH(a)){p.c=p.b=null
return new A.de(B.c3,B.dy.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xy(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.de(B.aU,a+" is already bound to "+s)}return p.ie(a)},
dP(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aT
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e4
case 1:s=A.wC(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wV(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.x8(r,k))
m.a=m.a.dm(s)
break
case 0:s=A.wC(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gR(r)}r=A.d([k],t.s)
p=s.h(0,l)
p.toString
p=A.kU(p,1,null,A.E(p).c)
o=p.$ti
p=new A.aI(p,p.gt(0),o.i("aI<a2.E>"))
o=o.i("a2.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.x8(r,k)}else{r=s.h(0,j)
r.toString
r=A.wV(A.x8(r,k),q)}s.k(0,j,r)
m.a=m.a.dm(s)
break}m.c=m.e=m.d=null
return B.c_},
ie(a){var s,r,q=this,p=q.b
if(p==null)return B.aT
s=A.wC(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wV(r,a))
q.a=q.a.dm(s)
q.b=null
return B.c_}}
A.hv.prototype={
hX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jB(f.w)
s=f.b
s.className=A.r(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.nh(a,B.ed,1)))
A.b(s.appendChild(A.B(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.B(a,"div",c,e)
f.ej(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.ej(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.cX(a,r,"invertX","Invert horizontal look")
f.cX(a,r,"invertY","Invert vertical look")
f.cX(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.B(a,"div",c,e)
for(p=B.ji.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.ft(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mt(l)?"unbound":J.xA(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.dO(a,new A.b2("settings.controls.bind."+m,B.c4,n,h,B.p),new A.ny(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.b(j.appendChild(g))
A.b(q.appendChild(j))
o.k(0,m,g)}A.b(s.appendChild(q))
p=A.B(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.B(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.dg()
A.b(s.appendChild(A.dO(a,B.ee,new A.nz(f),e)))},
fS(a){var s=this.x
s===$&&A.q()
if(s.b==null)return
a.preventDefault()
this.eI(this.x.kf(A.r(a.code)))},
eI(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aU?B.ei:B.p
p=o.Q.h(0,r)
if(p!=null)A.w3(p,q)}n=a.a
if(n===B.aU)o.jA()
else if(n===B.c2){n=o.x
n===$&&A.q()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dg()}else{o.d_()
o.ax=null}},
jA(){var s,r,q,p,o
this.d_()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.ie[r]
p=A.F(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.dO(p,new A.b2("settings.controls.resolve."+o,B.F,o,"resolve key binding conflict",B.p),new A.nx(this,q),null)))}},
d_(){var s,r=this.at
if(r==null)return
while(A.F(r.firstChild)!=null){s=A.F(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dg(){var s,r,q,p
for(s=this.Q,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.q()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mt(p)?"unbound":J.xA(p," / ")
r.textContent=q
A.w3(r,B.p)}},
ej(a,b,c,d,e,f){var s,r=A.B(a,"label","setting-row",null)
A.b(r.appendChild(A.B(a,"span",null,d)))
s=A.B8(a,new A.b2("settings.controls."+c,B.eg,d,null,B.p),f,e,new A.nv(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
cX(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.B9(a,new A.b2("settings.controls."+c,B.eh,d,null,B.p),!1,new A.nw(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.B(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
eG(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdE(a){this.f=t.pf.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.ny.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.q()
s=n.bV(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.c0){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.w3(q,B.c5)}p.d_()
return null},
$S:0}
A.nz.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nx.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.q()
return s.eI(r.dP(this.b))},
$S:0}
A.nv.prototype={
$1(a){var s=this.a,r=s.w
s.eG(this.b==="horizontalSensitivity"?r.kA(a):r.kR(a))},
$S:116}
A.nw.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kC(a)
break A}if("invertY"===q){s=r.w.kD(a)
break A}s=r.w.kz(a)
break A}r.eG(s)},
$S:7}
A.nG.prototype={
hY(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.b(o.appendChild(A.B(s,"h1","journal-title","credits")))
r=A.B(s,"p","credits-body",null)
p.f!==$&&A.aX()
p.f=r
r.textContent="\u2014"
A.b(o.appendChild(r))
A.b(o.appendChild(A.B(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.B(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.X(new A.nH(p)))
A.b(o.appendChild(q))}}
A.nH.prototype={
$1(a){return this.a.a7()},
$S:2}
A.nP.prototype={
i_(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.B(a,o,"door-speaker",p)
q.b!==$&&A.aX()
q.b=s
r=A.B(a,o,"door-line",p)
q.c!==$&&A.aX()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(s))
A.b(n.appendChild(r))
r=A.B(a,o,"door-choice-status",p)
q.d!==$&&A.aX()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(r))
r=A.B(a,o,"door-cite-list",p)
q.f!==$&&A.aX()
q.f=r
s=A.B(a,o,"door-cite-result",p)
q.r!==$&&A.aX()
q.r=s
A.b(n.appendChild(r))
A.b(n.appendChild(s))
s=A.B(a,"button","door-continue","continue")
q.e!==$&&A.aX()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.X(new A.nQ(q)))
A.b(n.appendChild(s))
n.addEventListener("keydown",A.X(new A.nR(q,a)))
A.b(A.F(a.body).appendChild(n))},
e7(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.q()
s.textContent=a
s=r.c
s===$&&A.q()
s.textContent=B.K.bC("",!0,b)
s=r.d
s===$&&A.q()
s.textContent=A.xK(B.b8)
s=r.e
s===$&&A.q()
A.b(s.style).display="none"
s=r.f
s===$&&A.q()
s.textContent=""
s=r.r
s===$&&A.q()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
e8(a,b){var s,r=this,q=r.c
q===$&&A.q()
q.textContent=B.K.bC("",!0,a)
q=r.d
q===$&&A.q()
q.textContent=""
q=r.e
q===$&&A.q()
q=A.b(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.q()
s.textContent=""},
hA(a){return this.e8(a,!1)},
hC(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.q()
s=A.b(s.style)
r=b==null?"none":""
s.display=r
r=A.d([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.q()
s.textContent=A.xK(r)},
e9(a,b){var s=this.c
s===$&&A.q()
s.textContent=B.K.bC("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.q()
s.textContent=""
s=this.e
s===$&&A.q()
A.b(s.style).display=""},
hz(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.q()
s.textContent=""
for(r=b.length,q=A.tY,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nS(o,this)
if(typeof o=="function")A.j(A.x("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.hj()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
slG(a){this.w=t.Z.a(a)},
slF(a){this.x=t.vR.a(a)}}
A.nQ.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$0()},
$S:30}
A.nR.prototype={
$1(a){var s,r,q,p,o,n,m
A.b(a)
s=this.a
if(!s.y||A.r(a.code)!=="Tab")return
r=A.d([],t.sL)
q=s.e
q===$&&A.q()
if(A.r(A.b(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.q()
p=A.b(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.f(p.length);++o){n=A.F(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.F(this.b.activeElement)
if(A.R(a.shiftKey)){if(m===B.a.gR(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gW(r).focus()}}else if(m===B.a.gW(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gR(r).focus()}},
$S:119}
A.nS.prototype={
$1(a){var s
A.b(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:30}
A.nV.prototype={
i0(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.B(s,"h1","journal-title",null)
o.f!==$&&A.aX()
o.f=r
q=A.B(s,"div","ending-copy",null)
o.r!==$&&A.aX()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.B(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.X(new A.nW(o)))
A.b(n.appendChild(p))},
hB(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.q()
s.textContent=a.a.b
s=m.r
s===$&&A.q()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bG()},
slK(a){this.w=t.Z.a(a)}}
A.nW.prototype={
$1(a){var s=this.a
s.a7()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.om.prototype={
bp(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.ap(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
mC(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lj(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fm()
return!0}return!1}if(a==="Space"){s=B.a.dz(l,new A.on())
if(s!==-1){n.ck(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.O(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.O(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.ck(q)
return!0}}if(B.b.V(a,"Digit")){p=A.ds(B.b.b1(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.V(a,"Numpad")){p=A.ds(B.b.b1(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.ck(o)
return!0}return!1},
ck(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.e(r,a)
s.$2(a,r[a])}},
fm(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lk(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fm()
return!0}this.ck(a.b)
return!0},
slE(a){this.y=t.dt.a(a)},
slJ(a){this.z=t.Z.a(a)}}
A.on.prototype={
$1(a){A.r(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.oo.prototype={}
A.dk.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cP.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cQ.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dl.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dj.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dm.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cd.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.di.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fz.prototype={
aU(a,b,c,d,e,f,g,h,i,a0){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a0==null?s.d:a0,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a
return A.w4(j,n,k,l,r,o,q,m,i==null?s.z:i,p)},
kN(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,a,s)},
kt(a){var s=null
return this.aU(s,s,a,s,s,s,s,s,s,s)},
kB(a){var s=null
return this.aU(s,s,s,s,a,s,s,s,s,s)},
kH(a){var s=null
return this.aU(s,s,s,s,s,s,a,s,s,s)},
kO(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,s,a)},
kE(a){var s=null
return this.aU(s,s,s,s,s,a,s,s,s,s)},
ks(a){var s=null
return this.aU(s,a,s,s,s,s,s,s,s,s)},
kL(a){var s=null
return this.aU(s,s,s,s,s,s,s,a,s,s)},
kr(a){var s=null
return this.aU(a,s,s,s,s,s,s,s,s,s)},
kx(a){var s=null
return this.aU(s,s,s,a,s,s,s,s,s,s)},
B(){var s=this
return A.N(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z],t.N,t.K)}}
A.op.prototype={
$1$2(a,b,c){var s
A.A_(c,t.Ct,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.c(A.a4("invalid gameplay setting: "+a,null,null))
return B.a.aW(b,new A.oq(s,c),new A.or(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:120}
A.oq.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.or.prototype={
$0(){return A.j(A.a4("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cv.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dU.prototype={
bw(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dU(s.a,r,q,p,o,n,m)},
dl(a){var s=null
return this.bw(a,s,s,s,s,s)},
fv(a){var s=null
return this.bw(s,a,s,s,s,s)},
fw(a){var s=null
return this.bw(s,s,s,a,s,s)},
kJ(a){var s=null
return this.bw(s,s,s,s,a,s)},
ky(a){var s=null
return this.bw(s,s,a,s,s,s)},
kP(a){var s=null
return this.bw(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.j1,q))throw A.c(A.a4("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.im,q))throw A.c(A.a4("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.j4,q))throw A.c(A.a4("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.iZ,q))throw A.c(A.a4("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.N(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oB.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:29}
A.oC.prototype={
$0(){return A.j(B.fB)},
$S:6}
A.oD.prototype={
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.ov.prototype={}
A.ow.prototype={}
A.hH.prototype={
i1(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.b(l.appendChild(A.B(a,"h1","journal-title","Graphics")))
A.b(l.appendChild(A.B(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.B(a,"div","settings-grid",n)
r=t.N
o.bO(a,s,"preset","quality preset",A.N(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bO(a,s,"renderScale","render scale",A.N(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bO(a,s,"frameTarget","frame target",A.N(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bO(a,s,"antialiasing","anti-aliasing",A.N(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bO(a,s,"textureQuality","texture quality",A.N(["high","High","medium","Medium","low","Low"],r,r))
q=A.B(a,"label","setting-toggle",n)
r=A.b(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.X(new A.oz(o)))
r=o.x
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.B(a,"span",n,"Dynamic resolution")))
A.b(s.appendChild(q))
A.b(l.appendChild(s))
r=A.B(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.b(l.appendChild(r))
p=A.B(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.X(new A.oA(o)))
A.b(l.appendChild(p))},
bO(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.b(s.appendChild(A.B(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.K(e,A.p(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.X(new A.oy(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
eL(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
e6(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.Z(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
sdE(a){this.f=t.CA.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.oz.prototype={
$1(a){var s=this.a
s.eL(s.z.fv(A.R(s.x.checked)))},
$S:1}
A.oA.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a7()},
$S:1}
A.oy.prototype={
$1(a){var s,r=A.r(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.z.fw(B.a.af(B.cT,new A.ox(r)))
break A}if("renderScale"===p){s=q.z.kJ(r)
break A}if("frameTarget"===p){s=q.z.ky(r)
break A}if("antialiasing"===p){s=q.z.dl(r)
break A}if("textureQuality"===p){s=q.z.kP(r)
break A}s=q.z
break A}q.eL(s)},
$S:1}
A.ox.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:29}
A.jj.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.oE.prototype={
hc(a,b,c){if(c)return B.iC
if(b&&a!=null)return A.d([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.je}}
A.oF.prototype={
i2(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.B(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.B(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.B(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.B(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.X(new A.oG(this)))
A.b(p.appendChild(r))}}
A.oG.prototype={
$1(a){return this.a.a7()},
$S:2}
A.pg.prototype={
bG(){var s,r=this
r.hR()
s=r.r.a-1
if(s<1)s=1
r.CW=r.er(r.CW,s)
r.js()
r.eZ()},
im(){var s,r=this,q=r.a,p=A.B(q,"div","page-turn",null),o=A.B(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.X(new A.ph(r)))
s=A.B(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.X(new A.pi(r)))
q=A.B(q,"span","right-day-label",null)
r.Q!==$&&A.aX()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
fg(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.er(s.CW+a,r)
s.eZ()},
er(a,b){if(a<1)return 1
if(a>b)return b
return a},
js(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.q()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.q()
s.textContent=""
for(s=j.w.e_(),r=s.length,q=A.tY,p=j.a,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m=B.a.gW(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.pj(j,n,l)
if(typeof m=="function")A.j(A.x("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.hj()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
eZ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.q()
s=t.r
r=A.d([],s)
for(q=j.f,p=q.b,o=A.p(p).i("ai<2>"),n=new A.ai(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.T(r,new A.pk())
j.eY(i,r)
i=j.Q
i===$&&A.q()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.q()
s=A.d([],s)
for(r=new A.ai(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.T(s,new A.pl())
j.eY(i,s)
k=B.c.E(q.f/4,0,1)
i=j.as
i===$&&A.q()
A.b(i.style).setProperty("width",B.c.aK(k*100,1)+"%")},
eY(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.b(a.appendChild(this.iO(b[r])))},
iO(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.B(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.c.p(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.j2(m,!1)
l.className=A.r(l.className)+" margin"
A.b(j.appendChild(l))}return j},
j2(a,b){var s=b?"hand-line struck":"hand-line",r=A.B(this.a,"div",s,a.p(0))
A.b(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.ph.prototype={
$1(a){return this.a.fg(-1)},
$S:2}
A.pi.prototype={
$1(a){return this.a.fg(1)},
$S:2}
A.pj.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pk.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:16}
A.pl.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:16}
A.cW.prototype={}
A.fo.prototype={}
A.pW.prototype={
gmu(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.G(s,0,B.c.az(B.c.E(r*q,0,r)))}}
A.i2.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.F(this.a.body).appendChild(s))},
bG(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.r(n.className),"open"))return
s=$.pX
if(s!=null&&s!==o)s.a7()
$.pX=o
r=o.a
o.d=A.F(r.activeElement)
A.pd(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.X(o.gjl())
o.e=q
r.addEventListener("keydown",q)
p=A.zl(n)
if(p.length!==0)B.a.gR(p).focus()
else n.focus()},
a7(){var s,r,q=this,p=q.b
if(!B.b.q(A.r(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pX===q)$.pX=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
fS(a){},
jm(a){A.b(a)
this.fS(a)
if(A.R(a.defaultPrevented))return
if(A.r(a.code)==="Escape"){a.preventDefault()
this.a7()
return}if(A.r(a.code)==="Tab")this.jG(a)},
jG(a){var s,r=A.zl(this.b)
if(r.length===0)return
s=A.F(this.a.activeElement)
if(A.R(a.shiftKey)){if(s===B.a.gR(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gW(r).focus()}}else if(s===B.a.gW(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gR(r).focus()}},
saZ(a){this.c=t.Z.a(a)}}
A.bi.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e1.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dq.prototype={
B(){var s,r=A.o(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a5(a,b){if(b==null)return!1
return b instanceof A.dq&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gN(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e0.prototype={
gfp(){var s=this.a
return s.length===1&&B.a.gR(s).a===B.bs},
B(){var s=A.o(t.N,t.X),r=this.a,q=A.E(r),p=q.i("O<1,Y<h,I?>>")
r=A.J(new A.O(r,q.i("Y<h,I?>(1)").a(new A.q1()),p),p.i("a2.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.E(r)
p=q.i("O<1,h>")
r=A.J(new A.O(r,q.i("h(1)").a(new A.q2()),p),p.i("a2.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.q1.prototype={
$1(a){return t.oP.a(a).B()},
$S:122}
A.q2.prototype={
$1(a){return t.wJ.a(a).b},
$S:123}
A.bW.prototype={}
A.q0.prototype={
fT(a){var s,r=this
if(r.a.gfp())return new A.bW(B.a0,r.a,null)
s=r.a
s=new A.e0(B.j0,s.b,a)
r.a=s
return new A.bW(B.dj,s,"pause.resume")},
k0(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gW(p)
q=r.a.a
q=B.a.aR(q,0,q.length-1)
p=r.a
p=new A.e0(q,p.b,p.c)
r.a=p
return new A.bW(B.dk,p,s.c)}if(q.gfp()&&r.a.b.length===0)return r.ce()
return new A.bW(B.a0,r.a,null)},
ce(){var s=this.a
if(s.a.length===0)return new A.bW(B.a0,s,null)
if(s.b.length!==0)return new A.bW(B.a0,s,null)
this.a=B.br
return new A.bW(B.dl,B.br,s.c)},
m_(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.bW(B.a0,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.e0(s.a,r,q.a.c)
q.a=s
return new A.bW(B.dj,s,null)},
kY(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.bW(B.a0,o.a,null)
s=o.a
r=s.b
q=A.E(r)
p=q.i("H<1>")
r=A.J(new A.H(r,q.i("l(1)").a(new A.q3(a)),p),p.i("n.E"))
q=o.a.c
r=new A.e0(s.a,r,q)
o.a=r
return new A.bW(B.kf,r,q)},
iG(a){var s
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
A.q3.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:124}
A.cD.prototype={
v(){return"PauseRootAction."+this.b}}
A.q4.prototype={
bi(a,b,c,d){var s=B.ju.h(0,c)
s.toString
A.b(b.appendChild(A.dO(a,new A.b2(s,B.F,d,null,B.p),new A.q5(this,c),null)))},
slV(a){this.f=t.Z.a(a)},
slX(a){this.r=t.Z.a(a)},
slH(a){this.w=t.Z.a(a)},
slW(a){this.x=t.Z.a(a)},
slN(a){this.y=t.Z.a(a)},
slI(a){this.z=t.Z.a(a)},
sb4(a){this.Q=t.Z.a(a)}}
A.q5.prototype={
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
A.qh.prototype={
hy(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bC("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qH.prototype={
i4(a){var s,r,q,p,o,n=this.b
n.className=A.r(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.nh(a,B.ec,1)))
A.b(n.appendChild(A.B(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.B(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iD[r]
p=B.d5.h(0,q)
p.toString
o=B.d4.h(0,q)
o.toString
A.b(s.appendChild(A.dO(a,new A.b2(o,B.F,p,p+" settings",B.p),new A.qI(this,q),null)))}A.b(s.appendChild(A.dO(a,B.eb,new A.qJ(this),null)))
A.b(n.appendChild(s))},
slD(a){this.f=t.hQ.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.qI.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qJ.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fO.prototype={
i5(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.d5.h(0,d))+" settings",a=h.b
a.className=A.r(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.nh(a0,new A.b2("settings."+(s==null?f:s)+".heading",B.aq,b,g,B.p),2)))
A.b(a.appendChild(A.B(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.B(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.r6(h)),p=B.a.gu(B.C),o=t.xG,q=new A.T(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.j1(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.B(a0,"div",e,g)
for(s=s.a(new A.r7(h)),q=B.a.gu(B.C),o=new A.T(q,s,o);o.m();)A.b(j.appendChild(h.jF(a0,q.gn())))
A.b(a.appendChild(j))
if(d===B.H)A.b(a.appendChild(h.ik(a0)))
if(d===B.I)A.b(a.appendChild(h.ij(a0)))
if(d===B.a_)A.b(a.appendChild(h.il(a0)))
i=A.B(a0,"div",e,g)
for(s=t.pz.a(h.giW()),q=B.a.gu(B.j2),s=new A.T(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.dO(a0,new A.b2("settings."+o+".reset."+n,B.F,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.r8(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.dO(a0,new A.b2("settings."+(s==null?f:s)+".reset.all",B.F,"reset all settings","restore all settings to defaults",B.ej),new A.r9(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.dO(a0,new A.b2("settings."+(d==null?f:d)+".back",B.F,"return","return to settings categories",B.p),new A.ra(h),g)))},
ij(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.B(a,"div","settings-grid",j),f=k.cV(a,g,"reducedMotion","reduced motion (system default)"),e=k.cV(a,g,i,"photosensitivity-safe effects (system default)"),d=k.cV(a,g,"captions","non-speech captions"),c=A.B(a,"label",h,j)
A.b(c.appendChild(A.B(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.X(new A.r_(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.B(a,"label",h,j)
A.b(r.appendChild(A.B(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bk[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.X(new A.r0(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.B(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.X(new A.r1(k)))
A.b(g.appendChild(l))
k.k4.I(0,A.N(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.ok.k(0,"screenReaderVerbosity",q)
return g},
cV(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.X(new A.qK(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.B(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
e2(a){var s,r
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
il(a){var s,r,q,p,o=this,n=null,m="confirmations",l="setting-toggle",k=A.B(a,"div","settings-grid",n)
o.b7(a,k,"interactionMode","interaction mode",B.bj,t.bK)
o.b7(a,k,"promptDensity","prompt density",B.bn,t.dn)
o.b7(a,k,"textPacing","text pacing",B.bl,t.j_)
o.b7(a,k,"journalLayout","journal layout",B.bd,t.gm)
o.b7(a,k,m,m,B.b7,t.aJ)
o.b7(a,k,"saveFeedback","save feedback",B.be,t.mx)
o.b7(a,k,"focusLossBehavior","when the window loses focus",B.aC,t.x)
o.b7(a,k,"clockFormat","clock format",B.ba,t.vS)
s=A.B(a,"label",l,n)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=o.k2.x
r.addEventListener("change",A.X(new A.r2(o,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.B(a,"span",n,"contextual reminders")))
A.b(k.appendChild(s))
o.id=r
q=A.B(a,"label",l,n)
p=A.b(a.createElement("input"))
p.type="checkbox"
p.checked=o.k2.z
p.addEventListener("change",A.X(new A.r3(o,p)))
A.b(q.appendChild(p))
A.b(q.appendChild(A.B(a,"span",n,"show daily objective")))
A.b(k.appendChild(q))
o.k1=p
return k},
b7(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.A_(f,t.Ct,"T","_addGameplaySelect")
f.i("D<0>").a(e)
s=A.B(a,"label","setting-row",null)
A.b(s.appendChild(A.B(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.X(new A.qY(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
hk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k2=a
for(s=f.go,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
ik(a){var s,r,q=this,p=A.B(a,"div","settings-grid",null),o=t.N,n=A.o(o,o)
for(s=0;s<4;++s){r=B.bi[s].b
n.k(0,r,r)}q.cl(a,p,"output","output",n)
n=A.o(o,o)
for(s=0;s<3;++s){r=B.bc[s].b
n.k(0,r,r)}q.cl(a,p,"dynamicRange","dynamic range",n)
n=A.o(o,o)
for(s=0;s<2;++s){r=B.bb[s].b
n.k(0,r,r)}q.cl(a,p,"reverb","room effect",n)
o=A.o(o,o)
for(s=0;s<2;++s){n=B.b9[s].b
o.k(0,n,n)}q.cl(a,p,"ducking","voice intelligibility",o)
return p},
cl(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.b(s.appendChild(A.B(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.K(e,A.p(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.X(new A.qP(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p2.k(0,c,r)},
hj(a){var s,r,q,p,o,n,m,l,k
this.p1=a
for(s=this.p2,s=new A.K(s,A.p(s).i("K<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eM(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Z===r){s=a.c===B.aJ
break A}if(B.I===r){s=a.c===B.a4
break A}if(B.H===r){s=a.c===B.E
break A}s=!1
break A}return s},
iX(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Z===s){r=a===B.aJ
break A}if(B.I===s){r=a===B.a4
break A}if(B.H===s){r=a===B.E
break A}r=!1
break A}return r},
jF(a,b){var s=this,r=A.B(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.X(new A.r5(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.B(a,"span",null,b.b)))
return r},
j1(a,b,c,d,e){var s,r,q=this,p=A.B(a,"label","setting-row",null),o=A.B(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.B(a,"output",null,"100%")
n.addEventListener("input",A.X(new A.r4(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aV(e,d))
return p},
e4(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kx
r=B.c.E(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.b0(r*100)+"%"},
slP(a){this.r=t.DI.a(a)},
slR(a){this.w=t.xl.a(a)},
slQ(a){this.x=t.xl.a(a)},
slL(a){this.y=t.DI.a(a)},
slO(a){this.z=t.xl.a(a)},
slZ(a){this.Q=t.xl.a(a)},
slU(a){this.as=t.Ci.a(a)},
slT(a){this.at=t.Z.a(a)},
sb4(a){this.ax=t.Z.a(a)},
slC(a){this.ay=t.kC.a(a)},
slM(a){this.ch=t.hq.a(a)},
slB(a){this.CW=t.Cv.a(a)},
slS(a){this.cx=t.Z.a(a)}}
A.r6.prototype={
$1(a){t.gl.a(a)
return a.d===B.Q&&this.a.eM(a)},
$S:22}
A.r7.prototype={
$1(a){t.gl.a(a)
return a.d===B.ah&&this.a.eM(a)},
$S:22}
A.r8.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.r9.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.ra.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a7()},
$S:0}
A.r_.prototype={
$1(a){var s=this.a,r=s.k3,q=A.eF(A.r(this.b.value))
r=r.kQ(q==null?1:q)
s.k3=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.r0.prototype={
$1(a){var s=this.a,r=s.k3.kM(B.a.af(B.bk,new A.qZ(this.b)))
s.k3=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qZ.prototype={
$1(a){return t.mq.a(a).b===A.r(this.a.value)},
$S:32}
A.r1.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qK.prototype={
$1(a){var s,r=A.R(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k3.kI(r)
break A}if("photosensitivitySafe"===p){s=q.k3.kG(r)
break A}if("captions"===p){s=q.k3.kq(r)
break A}s=q.k3
break A}q.k3=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.r2.prototype={
$1(a){var s=this.a,r=s.k2.kt(A.R(this.b.checked))
s.k2=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r3.prototype={
$1(a){var s=this.a,r=s.k2.kN(A.R(this.b.checked))
s.k2=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qY.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k2.kB(B.a.af(B.bj,new A.qQ(r.c)))
break A}if("promptDensity"===p){s=q.k2.kH(B.a.af(B.bn,new A.qR(r.c)))
break A}if("textPacing"===p){s=q.k2.kO(B.a.af(B.bl,new A.qS(r.c)))
break A}if("journalLayout"===p){s=q.k2.kE(B.a.af(B.bd,new A.qT(r.c)))
break A}if("confirmations"===p){s=q.k2.ks(B.a.af(B.b7,new A.qU(r.c)))
break A}if("saveFeedback"===p){s=q.k2.kL(B.a.af(B.be,new A.qV(r.c)))
break A}if("clockFormat"===p){s=q.k2.kr(B.a.af(B.ba,new A.qW(r.c)))
break A}s=q.k2.kx(B.a.af(B.aC,new A.qX(r.c)))
break A}q.k2=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.qQ.prototype={
$1(a){return t.bK.a(a).b===A.r(this.a.value)},
$S:127}
A.qR.prototype={
$1(a){return t.dn.a(a).b===A.r(this.a.value)},
$S:128}
A.qS.prototype={
$1(a){return t.j_.a(a).b===A.r(this.a.value)},
$S:129}
A.qT.prototype={
$1(a){return t.gm.a(a).b===A.r(this.a.value)},
$S:130}
A.qU.prototype={
$1(a){return t.aJ.a(a).b===A.r(this.a.value)},
$S:131}
A.qV.prototype={
$1(a){return t.mx.a(a).b===A.r(this.a.value)},
$S:132}
A.qW.prototype={
$1(a){return t.vS.a(a).b===A.r(this.a.value)},
$S:133}
A.qX.prototype={
$1(a){return t.x.a(a).b===A.r(this.a.value)},
$S:40}
A.qP.prototype={
$1(a){var s,r=this,q=r.a,p=q.p1,o=r.b
A:{if("output"===o){s=p.kF(B.a.af(B.bi,new A.qL(r.c)))
break A}if("dynamicRange"===o){s=p.kw(B.a.af(B.bc,new A.qM(r.c)))
break A}if("reverb"===o){s=p.kK(B.a.af(B.bb,new A.qN(r.c)))
break A}s=p.kv(B.a.af(B.b9,new A.qO(r.c)))
break A}q.p1=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qL.prototype={
$1(a){return t.xs.a(a).b===A.r(this.a.value)},
$S:135}
A.qM.prototype={
$1(a){return t.EL.a(a).b===A.r(this.a.value)},
$S:136}
A.qN.prototype={
$1(a){return t.gc.a(a).b===A.r(this.a.value)},
$S:137}
A.qO.prototype={
$1(a){return t.ul.a(a).b===A.r(this.a.value)},
$S:138}
A.r5.prototype={
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
A.r4.prototype={
$1(a){var s,r,q=this,p=A.eF(A.r(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.b0(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bA.prototype={
v(){return"SettingCategory."+this.b}}
A.ib.prototype={
v(){return"SettingKind."+this.b}}
A.b_.prototype={
cK(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.c(A.a4(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.c(A.a4(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bH(a))throw A.c(A.a4(r.a+" must be boolean",q,q))
break}}}
A.rd.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:22}
A.re.prototype={
$0(){return A.j(A.k("unknown setting: "+this.a))},
$S:6}
A.rb.prototype={
i6(a,b){var s,r=this.a
if(r!==1)throw A.c(A.x("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rc(s.a).cK(s.b)}},
cg(a){var s=this.b.h(0,a)
return s==null?A.j(A.k("setting missing from profile: "+a)):s},
B(){return A.N(["version",this.a,"values",this.b],t.N,t.K)}}
A.rf.prototype={
me(a){var s,r,q=A.fD(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dv(q,1)
this.jv(a)},
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jv(a){var s,r,q=A.fD(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dv(q,1)}}
A.rn.prototype={
i7(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.b(i.appendChild(A.B(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.B(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.B(a,"div","entry-picker",null)
for(r=A.tY,q=0;q<2;++q){p=B.cS[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cY[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.ro(this,p,m)
if(typeof k=="function")A.j(A.x("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.hj()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
slY(a){this.f=t.nf.a(a)}}
A.ro.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a7()},
$S:1}
A.cs.prototype={}
A.mE.prototype={
mt(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.E(s)
q=new A.O(s,r.i("h(1)").a(new A.mG()),r.i("O<1,h>")).bo(0)
r=this.b
r.L(0)
s=J.AX(a,t.N)
p=s.$ti
r.I(0,new A.H(s,p.i("l(n.E)").a(q.gaq(q)),p.i("H<n.E>")))},
l5(a,b){var s,r,q,p,o,n=A.d([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mG.prototype={
$1(a){return t.bC.a(a).a},
$S:139}
A.mF.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.F(r,s):B.d.F(a.c,b.c)},
$S:140}
A.l9.prototype={
gbZ(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.e(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
ls(a){return this.c.q(0,t.L.a(a))},
dQ(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a8(0,g.gko())||!a.a.a8(0,new A.rU(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eO(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aN){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ae}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.e(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.rV(s))
else k=!1
if(k)return!1
j=new A.l8(r,g,A.aj(o,t.AP),B.a7)
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
fo(a){var s=this.a,r=A.p(s).i("aa<1>"),q=r.i("H<n.E>")
s=A.J(new A.H(new A.aa(s,r),r.i("l(n.E)").a(new A.rP(a)),q),q.i("n.E"))
B.a.T(s,new A.rQ())
return s},
bV(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mI
s=m.a.h(0,a)
if(s==null)return B.mJ
r=B.d.a_(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bR:B.an
o=p===B.an&&m.x.q(0,q)&&s.U(B.bS)?B.bS:p
if(s.U(o))n=o
else n=s.U(B.an)?B.an:B.bR
r=s.h(0,n)
r.toString
m.r=new A.l8(a,n,A.aj(m.eO(a,n,r),t.AP),B.a7)
m.gbZ()
r=m.r
r.toString
return new A.l7(r)},
kj(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dS
if(n.d!==B.a7)return B.mG
n.e=a
s=a===B.ae
n.d=s?B.aN:B.al
r=this.f
q=s?B.dQ:B.mo
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dA(q,o,p,a,null))
if(a===B.av)B.a.l(r,new A.dA(B.mr,o,p,a,null))
if(s)this.f_(n)
return new A.l5(n)},
jW(){var s,r=this.r
if(r==null)return B.dS
s=r.d
if(s!==B.al&&s!==B.am)return B.mH
if(this.gbZ()!=null&&r.w==null)return new A.b9(new A.bn(B.a8,"The visitor is waiting for an answer."))
r.d=B.am
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aN
this.f_(r)
return new A.io(r,!0)}return new A.io(r,!1)},
kk(a){var s,r,q=this.r,p=this.gbZ(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.al&&o!==B.am}if(o)return B.mF
o=p.f
s=A.E(o)
r=A.bu(new A.H(o,s.i("l(1)").a(new A.rS(a)),s.i("H<1>")),t.Y)
if(r==null)return B.mK
q.w=r.a
return new A.l6(q,p,r)},
kl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.al&&s!==B.am}else s=!0
if(s)return i
r=h.gbm()
if(r==null)return i
s=t.N
q=A.o(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.cX
p=J.S(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b4(q,s,s)
m=c.jp(!0,!0,o,new A.t1(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aO){B.a.l(this.f,new A.dA(B.mq,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fD(B.a.gW(j.c).a,s,s)
s.I(0,q)
p.jT(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dT)if(k===B.bT){s=n.b
s=s.gX(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dA(B.mp,o,p.b,i,l))}}return m},
f_(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eO(a,b,c){var s,r
t.cf.a(c)
s=A.d([],t.Fi)
for(r=J.S(c);r.m();)s.push(this.j3(a,b,r.gn()))
return s},
j3(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.E(p)
s=A.bu(new A.H(p,r.i("l(1)").a(new A.rN(this)),r.i("H<1>")),t.aS)}return s==null?c:new A.c0(q,s.c,c.c)},
shN(a){this.x=t.Q.a(a)}}
A.rU.prototype={
$1(a){var s=this.a.a
return new A.aa(s,A.p(s).i("aa<1>")).M(0,new A.rT(A.r(a)))},
$S:3}
A.rT.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:19}
A.rV.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:11}
A.rP.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:19}
A.rQ.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.F(a.c,b.c)
return s!==0?s:B.d.F(a.d,b.d)},
$S:142}
A.rS.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:11}
A.rR.prototype={
$0(){return A.d([],t.jV)},
$S:143}
A.rN.prototype={
$1(a){return t.aS.a(a).d.gJ().a8(0,new A.rM(this.a))},
$S:144}
A.rM.prototype={
$1(a){t.q.a(a)
return this.a.y.aX(a.a,a.b)},
$S:145}
A.rO.prototype={
$2(a,b){var s=t.AP
return B.d.F(s.a(a).a,s.a(b).a)},
$S:146}
A.la.prototype={}
A.lF.prototype={}
A.vd.prototype={
$1(a){return B.b.V(A.r(a),"off.")},
$S:3}
A.bK.prototype={
v(){return"DoorChoice."+this.b}}
A.bZ.prototype={
v(){return"VisitPhase."+this.b}}
A.c_.prototype={
v(){return"VisitTier."+this.b}}
A.e8.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dA.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
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
a5(a,b){if(b==null)return!1
return b instanceof A.bn&&b.a===this.a&&b.b===this.b},
gN(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c0.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.c0&&b.a===this.a&&b.b===this.b},
gN(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bO.prototype={
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.bO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gN(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.N(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.lb.prototype={
B(){var s,r,q,p=this.a
p=A.J(p,A.p(p).c)
B.a.Y(p)
s=this.b
r=A.p(s)
q=r.i("dg<1,Y<h,@>>")
s=A.J(new A.dg(s,r.i("Y<h,@>(1)").a(new A.rL()),q),q.i("n.E"))
r=this.c
return A.N(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rL.prototype={
$1(a){return t.L.a(a).B()},
$S:147}
A.jk.prototype={
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
A.mB.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:148}
A.mC.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:149}
A.mD.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:150}
A.l8.prototype={
gbm(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.rW.prototype={}
A.b9.prototype={}
A.l7.prototype={}
A.l5.prototype={}
A.io.prototype={}
A.l6.prototype={}
A.fX.prototype={}
A.lI.prototype={
gbz(){var s,r=this.xr
if(r){s=this.w
s===$&&A.q()
s=s.a.b}else s="safe"
return A.Cy("pixeldart",r?this.gkd():B.jb,!1,null,s)},
gkd(){var s,r
if(!this.xr)return B.o
s=this.r
s===$&&A.q()
r=this.w
r===$&&A.q()
return B.eu.ke(s,r)},
glg(){var s="shadowCaster",r=this.R8
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.fU(s).a+";shadowTriangles="+r.fU(s).b+";frameMs="+B.c.aK(this.RG,3)},
glf(){var s=this.R8
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.RG<=100},
c4(){var s,r,q,p,o,n,m,l,k=this,j=A.CW(k.a)
k.d=j
j=j.h_()
k.r=j
j=B.c7.hi(j)
k.w=j
q=k.b
p=k.c
s=new A.kV(q,p,q,p)
o=A.ym(k.d)
k.e=o
try{o.fN(B.ca.ft(j,p,q),s)}catch(n){r=A.ao(n)
j=k.w
if(j===B.aD)throw n
k.x=j.a.b+" profile failed; using safe graph: "+A.y(r)
k.w=B.aD
j=A.ym(k.d)
j.fN(B.kV,s)
k.e=j}j=k.e
j.bQ()
m=A.Cx(j.w.a.b)
B.a.l(j.d,m)
k.f=m
k.y2=k.b
k.cD=k.c
l=k.w.a
A:{j=B.a1===l
if(j){q=7
break A}if(B.P===l){q=3
break A}q=0
break A}B:{if(j){j=2
break B}if(B.P===l){j=1
break B}j=0
break B}p=t.S
if(!isFinite(0.15))A.j(A.x("hysteresisThreshold must be finite and >= 0",null))
k.fx=new A.ps(q,j,A.a0(p),A.a0(p),A.o(p,t.i))
k.lc=A.Ce(!0,!0,!0)
k.xr=!0},
be(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.x("Pixeldart surface size must be positive",null))
if(!r.xr){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c2!==a||r.c3!==b)r.c3=r.c2=null
s=r.e
s===$&&A.q()
s.bQ()
new A.kV(a,b,a,b).C()
if(r.y1==null)r.y1=r.bP()},
bP(){var s=0,r=A.c6(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bP=A.c8(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.y2
h=n.b
if(!(i!==h||n.cD!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.q()
h=n.w
h===$&&A.q()
g=A.f(m)
s=8
return A.aB(A.wJ(i,B.ca.ft(h,A.f(l),g)),$async$bP)
case 8:n.y2=m
n.cD=l
n.c3=n.c2=null
A.zG()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ao(e)
i=n.w
i===$&&A.q()
n.x=i.a.b+" surface reconfigure failed: "+A.y(k)
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
if(!j)i=n.y2!==h||n.cD!==n.c
else i=!1
if(i)n.y1=n.bP()
s=o.pop()
break
case 5:return A.c4(null,r)
case 1:return A.c3(p.at(-1),r)}})
return A.c5($async$bP,r)},
k_(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.xr||b3.Q.length!==0)return
b3.fC=b9
s=b3.k1
r=b3.e
r===$&&A.q()
s.k(0,b5,r.gbf().dM("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbf().dM("texture:grime",512,512))
for(q=0;q<2;++q){p=B.jf[q]
r=b3.e.w
if(r==null)r=A.j(A.k(b7))
s.k(0,p,r.dM("texture:"+p,256,256))}b3.df()
b3.p1=b3.e.gbf().m9(A.pF(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k4,m=b3.k3,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){j=r[q]
i=A.o(l,k)
for(h=A.N(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cz(h,h.r,h.e,A.p(h).i("cz<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.bo.h(0,d)
if(c==null)A.j(A.k("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.j(A.k(b7))
a=e.a
a0=c.a
d=A.pF(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.x)A.j(A.k(b8))
d.C()
a1=b.b.a.aD(d,b4)
b.r.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.ok,q=0;q<7;++q){a2=B.iJ[q]
n=b3.e.w
if(n==null)n=A.j(A.k(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.da(a2)
h=b3.da(a2)
k=A.pF(l,!1,"quarantine-inventory-"+a2,!0,1,b3.da(a2).c,h.b,k.a,1,1)
if(n.x)A.j(A.k(b8))
k.C()
a1=n.b.a.aD(k,b4)
n.r.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q)b3.iY(b9,r[q])
b3.jq(b9)
$.A.j().setAttribute("data-renderer-house-model-scale",B.c.aK(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.t)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.eh(k,b3.eT(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.tC(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.t)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.eC(b9,j,a5)
h=b3.e.w
if(h==null)h=A.j(A.k(b7))
g=a5.a
if(h.x)A.j(A.k(b8))
f=h.a
a6.C()
a1=f.b.aD(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.bl(a6))
h.f.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.p1
f.toString}a7=new A.bz(a1,f,B.B,0,B.T,B.ab,!0,!0,0,b4)
f=b3.f
f===$&&A.q()
B.B.C()
b=f.a
a=b.$ti
b.a3(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.e(b,d)
a6=b[d].c
d=(a6==null?a.y[1].a(a6):a6).d
b=B.B.ab()
d=d.gaw()
a=A.E(d)
A.be(new A.O(d,a.i("M(1)").a(b.gaA()),a.i("O<1,M>")))
n.k(0,g,new A.iH(g,h,f.b.c_(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.t)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.eh(o,b3.eT(j,a5.aH(o),a5.ag(o),a5.ag(o)+a5.w,0,a5.x,5915445),new A.tD(a5))}for(r=A.Gy(A.FU(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.k2,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.j(A.k(b7))
b=s.h(0,a9)
a=b3.d8(f)
a0=b3.d8(f)
a=A.pF(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.d8(f).c,a0.b,a.a,1,1)
if(d.x)A.j(A.k(b8))
a.C()
a1=d.b.a.aD(a,b4)
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
a1=a0.b.aD(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.bl(b))
d.f.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ag.q(0,a))A.j(A.x("unknown exterior cell: "+a,b4))
b2=new A.bz(a1,c,B.B,-1,B.T,B.ab,B.lk.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.q()
B.B.C()
d=f.a
b=d.$ti
d.a3(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.e(d,b0)
a6=d[b0].c
d=(a6==null?b.y[1].a(a6):a6).d
b=B.B.ab()
d=d.gaw()
a=A.E(d)
A.be(new A.O(d,a.i("M(1)").a(b.gaA()),a.i("O<1,M>")))
k.k(0,b1,f.b.c_(b2))}},
hl(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.aj(a8.e,t.fl)
if(!a5.xr)return
for(s=a5.ch,r=new A.K(s,A.p(s).i("K<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.q()
o.b.b6(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.q()
p=p.w
if(p==null)p=A.j(A.k(a6))
o=n.a
if(p.x)A.j(A.k(a7))
p.a.b6(o)
p.f.a6(0,o)}}s.L(0)
q.L(0)
r=a5.cx
B.a.L(r)
for(p=a5.id,o=p.length,m=a8.c,l=a5.ok,k=0;k<o;++k){j=p[k]
i=a5.fC
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cz(j.c)
i=a5.e
i===$&&A.q()
i=i.w
if(i==null)i=A.j(A.k(a6))
f=a5.j0(g,j,m)
e=j.a
if(i.x)A.j(A.k(a7))
d=i.a
f.C()
c=d.b.aD(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bl(f))
i.f.l(0,c)
i=j.f
f=i.a
a=B.a6.gau()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.kY(new A.M(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.kD(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bz(c,a2,i,-1,B.T,B.ab,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.q()
i.C()
a2=d.a
f=a2.$ti
a2.a3(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.e(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.ab()
f=f.gaw()
b=A.E(f)
A.be(new A.O(f,b.i("M(1)").a(i.gaA()),b.i("O<1,M>")))
s.k(0,e,d.b.c_(n))}$.A.j().setAttribute("data-renderer-inventory-items",""+s.a)},
hw(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aN([s],r)
for(p=c1.aJ(s),o=J.S(p.a),p=new A.T(o,p.b,p.$ti.i("T<1>"));p.m();){n=o.gn()
m=n.cc(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.K(b9,A.p(b9).i("K<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.d([],p)
for(g=J.aC(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.e(i,f)
e=b8.bU(i[f],k)
d=b8.f
d===$&&A.q()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a3(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.e(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.ab()
a=a.gaw()
a0=A.E(a)
A.be(new A.O(a,a0.i("M(1)").a(b.gaA()),a0.i("O<1,M>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a3(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.e(d,c)
d[c].sb3(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gR(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.t)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.q()
o=b8.bU(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a3(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.e(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ab()
i=i.gaw()
g=A.E(i)
A.be(new A.O(i,g.i("M(1)").a(n.gaA()),g.i("O<1,M>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a3(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.e(p,n)
p[n].sb3(o)}b9=b8.fr
s=A.p(b9).i("aa<1>")
s=A.J(new A.aa(b9,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.t)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bU(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.q()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a3(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.e(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.ab()
g=g.gaw()
d=A.E(g)
A.be(new A.O(g,d.i("M(1)").a(i.gaA()),d.i("O<1,M>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a3(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.e(o,n)
o[n].sb3(e)
b9.k(0,a5.a,a5.ku(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.q()
i=b8.bU(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a3(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.e(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.ab()
d=d.gaw()
c=A.E(d)
A.be(new A.O(d,c.i("M(1)").a(g.gaA()),c.i("O<1,M>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a3(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.e(n,c)
n[c].sb3(i)}a9=new A.jP().ki(c2)
b9=$.A.j()
s=A.J(a9,A.p(a9).c)
B.a.Y(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.Z(s,","))
b9=b8.dx
r=new A.jP().fE(new A.tE(b8),new A.aa(b9,A.p(b9).i("aa<1>")),a9,r)
b0=A.kf(r,r.$ti.i("n.E"))
b9=b8.db
s=A.p(b9).i("aa<1>")
s=A.J(new A.aa(b9,s),s.i("n.E"))
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
e=b8.bU(a8,b6?-1:0)
o=b8.f
o===$&&A.q()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a3(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.e(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ab()
i=i.gaw()
g=A.E(i)
A.be(new A.O(i,g.i("M(1)").a(n.gaA()),g.i("O<1,M>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a3(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.e(o,g)
o[g].sb3(e)
b9.k(0,b4,e)}$.A.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.A.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.p(b0)
s=b9.i("dg<1,h>")
b7=A.J(new A.dg(b0,b9.i("h(1)").a(new A.tF(b8)),s),s.i("n.E"))
B.a.Y(b7)
$.A.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.Z(b7,","))},
cI(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
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
k=A.d([],t.s6)
j=A.d([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.q()
d=d.w
if(d==null)d=A.j(A.k(a8))
c=a7.eP(e.b)
b=g.b
if(d.x)A.j(A.k(a9))
a=d.a
c.C()
a0=a.b.aD(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bl(c))
d.f.l(0,a0)
if(!(f<q.length))return A.e(q,f)
a1=q[f]
d=a1.c
a2=new A.bz(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.q()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a3(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.e(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ab()
b=b.gaw()
a3=A.E(b)
A.be(new A.O(b,a3.i("M(1)").a(d.gaA()),a3.i("O<1,M>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a3(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.e(c,a)
c[a].sb3(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.e(o,f)
a6=o[f]
B.a.a6(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.j(A.k(a8)):a
if(d.x)A.j(A.k(a9))
d.a.b6(a6)
d.f.a6(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gR(j))
$.A.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fD+1));++a7.fD},
dL(a,b){var s,r,q,p,o,n,m,l,k=this
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
p===$&&A.q()
m=p.gbf().h1(k.eC(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bz(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.q()
n=r.c
p.fk(l)
p.b.h5(n,l)
s.k(0,b,r.fz(l,m))
s=k.y
n=r.d
B.a.a6(s,n)
B.a.l(s,m)
k.e.gbf().ma(n)},
hm(c8,c9,d0,d1,d2,d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="wetness_override",c2="fog_density",c3="fog_height_falloff",c4="rain_override",c5=A.aN([c9],t.N),c6=c8.e,c7=c6.h(0,c9)
if(c7!=null)for(s=c7.a,r=c8.aJ(s),q=J.S(r.a),r=new A.T(q,r.b,r.$ti.i("T<1>"));r.m();){p=q.gn()
o=p.cc(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&c6.h(0,o)!=null)c5.l(0,o)}n=new A.oQ(c8).mI(c5,d0)
c6=t.jC
m=A.d([],c6)
l=A.d([],c6)
for(k=0;k<n.length;++k){j=n[k]
c6=k===0
s=c6?"spot":"point"
r=j.b
q=j.d
p=j.c
if(s!=="point"&&s!=="spot")A.j(A.ah(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.j(A.ah(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.j(A.ah(p,"radius","must be finite and > 0"))
c6=c6?l:m
B.a.l(c6,new A.aT(k,s,j.a,new A.a((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}c6=c0.fx
c6===$&&A.q()
i=c6.m6(d0,m,l)
c6=A.o(t.S,t.A_)
for(k=0;k<n.length;++k)c6.k(0,k,n[k])
s=A.d([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.t)(r),++h){g=r[h]
p=c6.h(0,g.a).a
f=g.d
s.push(new A.kw(new A.M(p.a,p.b,p.c),new A.bV(f.a,f.b,f.c),g.e,g.f))}r=A.d([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.t)(q),++h){g=q[h]
f=g.a
e=c6.h(0,f).a
d=g.d
r.push(new A.bC(f,new A.M(e.a,e.b,e.c),B.aM,new A.bV(d.a,d.b,d.c),g.e,g.f,1.05,1.4))}c0.io(i,++c0.fy)
c=d3.c
b=B.c.O(B.c.O(d5,24)+24,24)
a=B.c.E(c,0,1)
a0=B.c.E(d3.d,6,16)/2
a1=13-a0
a2=13+a0
c6=b>=a1
a3=c6&&b<=a2?Math.sin(3.141592653589793*((b-a1)/(a2-a1)))*65:-18
a4=a3*3.141592653589793/180
a5=(90+b/24*360)*3.141592653589793/180
q=Math.cos(a5)*Math.cos(a4)
p=B.c.E(Math.sin(a4),0,1)
f=Math.sin(a5)*Math.cos(a4)
e=B.c.E(1-p,0.1,0.9)
d=a1-1.5
if(b>=d&&b<a1){a6=(b-d)/1.5
a7=A.cb(B.kD,B.bx,a6)
a8=A.cb(B.kG,B.bw,a6)
a9=A.cb(B.ky,B.by,a6)
b0=0.3+0.5*a6
b1=0.25+0.2*a6}else if(c6&&b<14){a7=B.bx
a8=B.bw
a9=B.by
b0=0.85
b1=0.45}else if(b>=14&&b<a2){a6=(b-14)/(a2-14)
a7=A.cb(B.bx,B.dn,a6)
a8=A.cb(B.bw,B.dr,a6)
a9=A.cb(B.by,B.dq,a6)
b0=0.85*(1-a6*0.35)
b1=0.45*(1-a6*0.25)}else if(b>=a2&&b<a2+1.5){a6=(b-a2)/1.5
a7=A.cb(B.dn,B.aF,a6)
a8=A.cb(B.dr,B.aE,a6)
a9=A.cb(B.dq,B.aG,a6)
b0=0.55*(1-a6*0.8)
b1=0.34*(1-a6*0.65)}else{c6=a2+1.5
if(b>=c6&&b<a2+3){a6=(b-c6)/1.5
a7=A.cb(B.aF,B.aF,a6)
a8=A.cb(B.aE,B.aE,a6)
a9=A.cb(B.aG,B.aG,a6)
b0=0.11*(1-a6*0.25)
b1=0.16*(1-a6*0.15)}else{a7=B.aF
a8=B.aE
a9=B.aG
b0=0.15
b1=0.18}}if(a>0){b2=A.cb(a9,B.kO,a*0.7)
b0*=1-a*0.35
b1*=1-a*0.15}else b2=a9
b3=d4?1:0.15
B.c.E(a*0.75+B.c.E(0.3333333333333333,0,1)*0.25,0,1)
c6=$.AO()
d=$.hm()
c6=c6.a
c6.k(0,"pbrRoughnessScale",d.H("pbr_roughness"))
c6.k(0,"pbrMetallicScale",d.H("pbr_metallic"))
c6.k(0,"pbrSpecularMult",d.H("pbr_specular"))
c6.k(0,"pbrWrapDiffuse",d.H("pbr_wrap_diffuse"))
c6.k(0,"pbrFresnelF0",d.H("pbr_fresnel_f0"))
c6.k(0,"ambientLightScale",d.H("light_ambient_mult"))
c6.k(0,"directLightScale",d.H("light_direct_mult"))
c6.k(0,"ssdoEnabled",d.aP("shadow_ssdo_enable"))
c6.k(0,"aoIntensity",d.H("shadow_ao_intensity"))
c6.k(0,"csmEnabled",d.aP("shadow_csm_enable"))
c6.k(0,"csmHardness",d.H("shadow_csm_hardness"))
c6.k(0,"shadowBias",d.H("shadow_bias"))
c6.k(0,"weatheringEnabled",d.aP("weathering_enable"))
c6.k(0,"normalBumpStrength",d.H("normal_bump_strength"))
c6.k(0,"grimeAccumulation",d.H("grime_accumulation"))
c6.k(0,"wetnessOverride",d.H(c1))
c6.k(0,"fogEnabled",d.aP("fog_enable"))
c6.k(0,"fogDensity",d.H(c2))
c6.k(0,"fogHeightFalloff",d.H(c3))
c6.k(0,"volumetricEnabled",d.aP("volumetric_light_enable"))
c6.k(0,"volumetricShaftIntensity",d.H("volumetric_shaft_intensity"))
c6.k(0,"volumetricScattering",d.H("volumetric_scattering"))
c6.k(0,"ssrEnabled",d.aP("ssr_enable"))
c6.k(0,"tonemapMode",B.c.az(d.H("tonemap_mode")))
c6.k(0,"ssssEnabled",d.aP("ssss_enable"))
c6.k(0,"taaEnabled",d.aP("taa_enable"))
c6.k(0,"lensFlareEnabled",d.aP("lens_flare_enable"))
c6.k(0,"timeOverride",d.H("time_override"))
c6.k(0,"rainOverride",d.H(c4))
c6.k(0,"postBloom",d.H("post_bloom"))
c6.k(0,"postVignette",d.H("post_vignette"))
c6.k(0,"postChromaticAberration",d.H("post_chromatic_aberration"))
c6.k(0,"postFilmGrain",d.H("post_film_grain"))
c6.k(0,"postExposure",d.H("post_exposure"))
c6.k(0,"postSaturation",d.H("post_saturation"))
c6.k(0,"postBloomThreshold",d.H("post_bloom_threshold"))
c6.k(0,"postDither",d.H("post_dither"))
c6.k(0,"contactLightBoost",d.H("light_contact_boost"))
c6.k(0,"debugViewMode",d.e)
if(d.H(c4)>=0)c=d.H(c4)
if(d.H(c1)>=0)d.H(c1)
c6=$.AN()
c6.mE(0.0166,c)
b4=c6.f
b5=B.c.E(Math.sin(Math.max(0,a3)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b6=b5>0.001
b7=b6?new A.M(q,p,f):new A.M(-q,e,-f)
b8=b6?new A.bV(a7.c,a7.b,a7.a):new A.bV(0.35,0.45,0.65)
c6=b4.a
if(c6){q=b4.b
b9=new A.bV(b8.a+b4.c*q*2,b8.b+b4.d*q*2,b8.c+b4.e*q*2.5)}else b9=b8
b0*=b3
if(c6)b0+=b4.b*4.5
c6=Math.max(0.045,b1*(b6?b5:1)*b3)
c0.p3=new A.jS(B.ia,new A.bV(b2.c*0.08,b2.b*0.08,b2.a*0.08),1.5/(1+c*0.45),14/(1+c*0.16),d.H(c3),d.H(c2),new A.bV(a8.c,a8.b,a8.a),c6,new A.nO(b7,b9,b0),s,r)},
bq(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.xr)throw A.c(A.k("Pixeldart runtime is not initialized"))
s=i.p2
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dp(s)
s=$.xt()
q=s.b
p=s.c
o=A.wc(i.b/i.c,p,s.a,q)
p=new A.fn(r,o,o.ao(0,r),B.ak,B.m9,q,p,i.b/i.c)
s=p}q=i.p3
p=i.p4
n=i.x1++
m=i.rx
l=new A.rp()
$.xo()
k=$.qg.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.q()
j=i.f
j===$&&A.q()
k.k6(j,new A.o6(s,q,p,n,m))
i.R8=i.e.l9()
s=$.qg.$0()
l.b=s
i.RG=l.gl6()/1000},
f1(a,b){var s=A.FV(a,b),r=A.FT(a,b),q=A.J(s.c,t.i)
B.a.I(q,r)
return A.d([new A.fX("wall",new Float32Array(A.a1(q))),new A.fX("floor",s.a),new A.fX("ceiling",s.b)],t.pv)},
eP(a){var s,r,q,p,o,n=A.d([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.e(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.e(a,o)
B.a.l(n,new A.M(q,p,a[o]))}if(n.length===0)throw A.c(A.k("house surface mesh cannot be empty"))
return new A.ch(B.ac,a,null,A.be(n))},
iY(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f1(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.c(A.k("surface materials missing for room "+a0))
s=A.d([],t.s6)
r=A.d([],t.s3)
q=A.d([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.q()
k=k.w
if(k==null)k=A.j(A.k("renderer is not initialized"))
j=b.eP(l.b)
i=l.a
if(k.x)A.j(A.k("resource library is disposed"))
h=k.a
j.C()
g=h.b.aD(j,n+i)
f=g.a
h.c.k(0,f,h.bl(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bz(g,i,B.B,-1,B.T,B.ab,!0,!0,0,null)
i=b.f
i===$&&A.q()
B.B.C()
k=i.a
j=k.$ti
k.a3(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.e(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.B.ab()
k=k.gaw()
h=A.E(k)
A.be(new A.O(k,h.i("M(1)").a(j.gaA()),h.i("O<1,M>")))
c=i.b.c_(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gR(r))
if(q.length!==0)b.at.k(0,a0,B.a.gR(q))},
jq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.d([],f),d=A.d([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.t)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.N(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cz(l,l.r,l.e,A.p(l).i("cz<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bo.h(0,i)
if(h==null)A.j(A.k("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Y(d)
f=$.A.j()
B.a.Y(e)
f.setAttribute("data-renderer-house-materials",B.a.Z(e,","))
$.A.j().setAttribute("data-renderer-house-surface-bindings",B.a.Z(d,","))},
eh(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.q()
r=s.gbf().h1(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bz(r,p.j5(a),B.B,0,B.T,B.ab,!0,!0,0,null)
s=p.f
s===$&&A.q()
s.fk(q)
B.a.l(p.go,new A.lH(a,s.b.c_(q),q,c))},
j5(a){var s=this.k3.h(0,a)
if(s==null){s=this.p1
s.toString}return s},
j0(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d_(new Float32Array(5376))
g=this.j_(a0.b)
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
j=B.t.aR(s.a,0,s.b)
g=A.d([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.M(e,d,j[c]))}return new A.ch(B.ac,j,null,A.be(g))},
j_(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
d8(a){var s
A:{if(0===a){s=B.kz
break A}if(1===a){s=B.kB
break A}if(2===a){s=B.kJ
break A}if(3===a){s=B.kS
break A}if(4===a){s=B.kU
break A}if(5===a){s=B.kH
break A}if(6===a){s=B.kR
break A}if(7===a){s=B.kM
break A}s=B.kP
break A}return s},
da(a){var s
A:{if("architecture"===a){s=B.kA
break A}if("furniture"===a){s=B.dp
break A}if("fixture"===a){s=B.kL
break A}if("service"===a){s=B.kN
break A}if("story"===a){s=B.kK
break A}if("decor"===a){s=B.kF
break A}if("micro"===a){s=B.kI
break A}s=B.dp
break A}return s},
cG(a){return this.lw(t.G.a(a))},
lw(a){var s=0,r=A.c6(t.H),q,p=this,o,n,m,l
var $async$cG=A.c8(function(b,c){if(b===1)return A.c3(c,r)
for(;;)switch(s){case 0:if(!p.xr){s=1
break}o=A.d([],t.iJ)
for(n=0;n<4;++n){m=B.il[n]
l=a.h(0,m)
if(l!=null)o.push(p.cs(m,l))}s=3
return A.aB(A.oc(o,t.H),$async$cG)
case 3:case 1:return A.c4(q,r)}})
return A.c5($async$cG,r)},
cs(a,b){return this.j4(a,b)},
j4(a,b){var s=0,r=A.c6(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cs=A.c8(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.aB(A.bQ(A.b(m.decode()),t.X),$async$cs)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.f(m.naturalWidth)
g.height=A.f(m.naturalHeight)
l=g
k=A.F(l.getContext("2d"))
if(!t.m.b(k)){h=A.k("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mV.a(A.b(k.getImageData(0,0,A.f(m.naturalWidth),A.f(m.naturalHeight))).data)
h=n.e
h===$&&A.q()
h=h.gbf()
f=new Uint8Array(A.a1(j))
if(h.x)A.j(A.k("resource library is disposed"))
h.c.mF(d,f)
$.A.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.df()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ao(c)
h=$.A.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.df()
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.y(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.c4(q,r)
case 2:return A.c3(o.at(-1),r)}})
return A.c5($async$cs,r)},
df(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.xr||h.k1.a===0)return
s=h.k1
r=A.p(s).i("K<1,2>")
r=A.kg(new A.K(s,r),r.i("ck(n.E)").a(new A.ty()),r.i("n.E"),t.jP)
q=A.J(r,A.p(r).i("n.E"))
s=h.e
s===$&&A.q()
s=s.gbf()
p=s.d
o=(p===$?s.d=new A.rw(s.c,A.o(t.Aj,t.y)):p).m5(q)
s=o.a
n=A.d(s.slice(0),A.E(s))
B.a.T(n,new A.tz())
s=A.E(n)
r=s.i("h(1)")
s=s.i("O<1,h>")
m=new A.O(n,r.a(new A.tA()),s).Z(0,",")
l=new A.O(n,r.a(new A.tB()),s).Z(0,",")
s=o.cp(B.dH)
r=o.cp(B.dI)
k=o.cp(B.dJ)
j=o.cp(B.dK);++h.x2
i=$.A.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.x2)
if(!A.R($.A.j().hasAttribute("data-renderer-texture-residency-initial")))$.A.j().setAttribute("data-renderer-texture-residency-initial",m)},
bU(a,b){return new A.bz(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eC(a,b,c){var s,r,q,p,o,n=A.FS(a,b,c),m=n.length
if(m===0)throw A.c(A.k("door "+c.a+" produced no leaf geometry"))
s=A.d([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.e(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.e(n,o)
s.push(new A.M(q,p,n[o]))}return new A.ch(B.ac,n,null,A.be(s))},
eT(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.V.j().aG(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.d([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.d([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.d([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.d([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.d_(new Float32Array(5376))
o.S(k[0],k[1],k[2],k[3],g)
n=B.t.aR(o.a,0,o.b)
k=A.d([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.M(r,q,n[p]))}return new A.ch(B.ac,n,null,A.be(k))},
io(a,b){var s,r,q,p=a.e,o=A.p(p).i("K<1,2>"),n=A.J(new A.K(p,o),o.i("n.E"))
B.a.T(n,new A.tu())
p=$.A.j()
o=a.a
s=A.E(o)
r=a.c
q=A.E(r)
p.setAttribute("data-renderer-light-selection","points="+new A.O(o,s.i("i(1)").a(new A.tv()),s.i("O<1,i>")).Z(0,":")+";spots="+new A.O(r,q.i("i(1)").a(new A.tw()),q.i("O<1,i>")).Z(0,":"))
q=A.E(n)
p.setAttribute("data-renderer-light-rejections",new A.O(n,q.i("h(1)").a(new A.tx()),q.i("O<1,h>")).Z(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
$iCz:1}
A.tC.prototype={
$0(){return!this.a.w},
$S:18}
A.tD.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:18}
A.tE.prototype={
$1(a){var s=this.a.dx.h(0,A.r(a))
s.toString
return s},
$S:44}
A.tF.prototype={
$1(a){var s,r,q,p
A.r(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.c(A.k("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:44}
A.ty.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.ck(s,a.b,r)},
$S:153}
A.tz.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:154}
A.tA.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:37}
A.tB.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:37}
A.tu.prototype={
$2(a,b){var s=t.ou
return B.d.F(s.a(a).a,s.a(b).a)},
$S:156}
A.tv.prototype={
$1(a){return t.p.a(a).a},
$S:36}
A.tw.prototype={
$1(a){return t.p.a(a).a},
$S:36}
A.tx.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:158}
A.lH.prototype={}
A.iH.prototype={
fz(a,b){var s=this,r=b==null?s.d:b
return new A.iH(s.a,s.b,s.c,r,a)},
ku(a){return this.fz(a,null)}}
A.t7.prototype={}
A.u5.prototype={
$2(a,b){var s
A.x2(a,A.y(b))
switch(a){case"master":s=$.bs
if(s!=null)s.hq(b)
break
case"voice":s=$.bs
if(s!=null)s.hs(b)
break
case"effects":s=$.bs
if(s!=null)s.hp(b)
break
case"ambience":s=$.bs
if(s!=null)s.ho(b)
break
case"music":s=$.bs
if(s!=null)s.hr(b)
break}},
$S:28}
A.u6.prototype={
$1(a){var s
A.x2("muted",""+a)
s=$.bs
if(s!=null)s.e5(a)},
$S:7}
A.u7.prototype={
$1(a){var s
A.x2("mono",""+a)
s=$.bs
if(s!=null)s.cP(a)},
$S:7}
A.ud.prototype={
$2(a,b){A.x3(a,A.y(b))
A.z7(a,b)},
$S:28}
A.ue.prototype={
$1(a){var s="high-contrast"
A.x3(s,""+a)
A.tV(s,a)},
$S:7}
A.uf.prototype={
$1(a){var s="strong-highlights"
A.x3(s,""+a)
A.tV(s,a)},
$S:7}
A.ug.prototype={
$1(a){$.da().me(a)
A.uS()
A.z9()},
$S:160}
A.uh.prototype={
$0(){var s=$.da()
s.a=A.dv(null,1)
s.b=A.dv(null,1)
A.uS()
A.z9()},
$S:0}
A.ui.prototype={
$0(){A.dH(this.a)},
$S:0}
A.uj.prototype={
$0(){this.a.a7()},
$S:0}
A.uk.prototype={
$0(){A.dH(this.a)},
$S:0}
A.u8.prototype={
$0(){A.hb(this.a)},
$S:0}
A.u9.prototype={
$1(a){$.j7=a
A.zB()
A.wz()},
$S:161}
A.ua.prototype={
$1(a){$.wL=a
A.zD()
A.z8()},
$S:162}
A.ub.prototype={
$1(a){$.eh=a
A.wS()
A.m8()},
$S:163}
A.uc.prototype={
$0(){$.eh=B.ao
$.f3.j().e2($.eh)
A.wS()
A.m8()},
$S:0}
A.u2.prototype={
$1(a){var s,r=A.Ad(a,A.zp()),q=r.a
$.uI=A.k0(q,a)
A.zE()
s=r.b
$.h5.j().e6(a,q,s)
$.A.j().setAttribute("data-graphics-fallback",B.a.Z(s,"|"))},
$S:164}
A.u3.prototype={
$0(){A.dH($.h5.j())},
$S:0}
A.u4.prototype={
$0(){A.dH($.h5.j())},
$S:0}
A.u_.prototype={
$1(a){var s,r
$.wH=a
$.ac.j().e3(a.r)
s=$.ac.j()
r=s.ch
r.a=a.f
r.dO()
s.b8()
A.zC()},
$S:165}
A.u0.prototype={
$0(){A.dH($.iZ.j())},
$S:0}
A.u1.prototype={
$0(){A.dH($.iZ.j())},
$S:0}
A.uM.prototype={
$0(){$.v0=A.R(this.a.matches)
$.x6=A.R(this.b.matches)
A.m8()},
$S:0}
A.uK.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uL.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vl.prototype={
$1(a){var s
try{A.xQ(a,this.a)
return!0}catch(s){if(A.ao(s) instanceof A.G)return!1
else throw s}},
$S:166}
A.vm.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j5.j()
break
case 5:p=$.f3.j()
break
case 1:p=$.h5.j()
break
case 4:p=$.h3.j()
break
case 2:p=$.j0.j()
break
case 3:p=$.iZ.j()
break}s=p
r=null
switch(o){case 0:r=B.k3
break
case 5:r=B.k8
break
case 1:r=B.k4
break
case 4:r=B.k7
break
case 2:r=B.k5
break
case 3:r=B.k6
break}q=r
p=B.d4.h(0,a)
p.toString
A.wR(s,q,p)},
$S:167}
A.vn.prototype={
$0(){A.dH($.h6.j())},
$S:0}
A.vy.prototype={
$0(){return A.dH($.h6.j())},
$S:0}
A.vH.prototype={
$0(){$.cp.j().a7()},
$S:0}
A.vI.prototype={
$0(){$.cp.j().a7()},
$S:0}
A.vJ.prototype={
$0(){A.wR($.h6.j(),B.da,"pause.settings")},
$S:0}
A.vK.prototype={
$0(){$.cp.j().a7()
A.jd($.j1.j())},
$S:0}
A.vL.prototype={
$0(){A.ml("saved")},
$S:0}
A.vM.prototype={
$0(){$.cp.j().a7()
A.jd($.j1.j())},
$S:0}
A.vN.prototype={
$0(){A.wR($.m4.j(),B.k9,"pause.credits")},
$S:0}
A.vo.prototype={
$0(){return A.hb($.cp.j())},
$S:0}
A.vp.prototype={
$0(){return A.hb($.j2.j())},
$S:0}
A.vq.prototype={
$2(a,b){var s,r
if($.ay.j().y){s=$.aF.j().gbZ()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.e(r,a)
A.Eb(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.e(B.cR,a)
A.Ea(B.cR[a])}}},
$S:168}
A.vr.prototype={
$2(a,b){var s,r,q,p,o,n
if($.U.j().gaa().a===21){A.zJ(!1)
return}s=$.V.j().r.b
$.U.j().hH(a,b,$.ar)
r=$.V.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e0()
if(typeof n!=="number")return A.vf(n)
if(!(o<n))break
if($.V.b===$.V)A.j(A.a5(""))
p=B.a.h(B.N,q).b
o=$.aW
if(o!=null){n=$.V.b
if(n===$.V)A.j(A.a5(""))
o.cI(n,p)}o=q
if(typeof o!=="number")return o.ai()
q=o+1}A.ml("saved after sleep")},
$S:169}
A.vs.prototype={
$0(){return A.hb($.m6.j())},
$S:0}
A.vt.prototype={
$0(){return A.hb($.j1.j())},
$S:0}
A.vu.prototype={
$0(){return A.dH($.m4.j())},
$S:0}
A.vv.prototype={
$0(){A.hb($.j_.j())},
$S:0}
A.vw.prototype={
$0(){A.hb($.j_.j())},
$S:0}
A.vx.prototype={
$1(a){return A.zI()},
$S:2}
A.vz.prototype={
$1(a){if(A.r(A.b(v.G.document).visibilityState)==="hidden")A.F7()},
$S:1}
A.vA.prototype={
$1(a){var s,r,q,p,o,n,m=A.b(a)
if(A.r(m.code)==="CapsLock"&&!A.R(m.repeat)){m.preventDefault()
p=$.hm()
o=!p.a
p.a=o
if(o)A.pd(A.b(v.G.document),"exitPointerLock",t.X)
else $.ac.j().cJ($.A.j())
return}p=$.hm()
if(p.a&&!A.R(m.repeat)){if(A.r(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ac.j().cJ($.A.j())
return}if(A.r(m.code)==="ArrowUp"||A.r(m.code)==="KeyW"){m.preventDefault()
n=p.gbd().length
if(n>0)p.c=B.d.O(p.c-1+n,n)
o=$.ej
if(o!=null){p=p.gbd().length
o.a.cO(-1,p)}return}if(A.r(m.code)==="ArrowDown"||A.r(m.code)==="KeyS"){m.preventDefault()
n=p.gbd().length
if(n>0)p.c=B.d.O(p.c+1,n)
o=$.ej
if(o!=null){p=p.gbd().length
o.a.cO(1,p)}return}if(A.r(m.code)==="ArrowLeft"||A.r(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d_[B.d.O(p.e.a-1+7,7)]
else{p=p.gcC()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y-p.w,p.f,p.r)}return}if(A.r(m.code)==="ArrowRight"||A.r(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.d_[(p.e.a+1)%7]
else{p=p.gcC()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y+p.w,p.f,p.r)}return}if(A.r(m.code)==="KeyQ"){m.preventDefault()
p=p.gcC()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y-p.w*0.2,p.f,p.r)
return}if(A.r(m.code)==="KeyE"){m.preventDefault()
p=p.gcC()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y+p.w*0.2,p.f,p.r)
return}if(A.r(m.code)==="KeyR"){m.preventDefault()
if(A.R(m.shiftKey))p.md()
else p.mf()
return}if(B.b.V(A.r(m.code),"Digit")||B.b.V(A.r(m.code),"Numpad")){o=A.r(m.code)
o=A.xi(o,"Digit","")
s=A.xi(o,"Numpad","")
r=A.ds(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.ay.j().y&&!A.R(m.repeat))if($.cK().lj(A.r(m.code))){m.preventDefault()
return}if(A.r(m.code)==="Escape"&&!A.R(m.repeat)){p=$.bc
if(p==null)A.jd($.cp.j())
else p.a7()
return}q=$.bc==null&&!p.a
if(!A.R(m.repeat)&&q)$.f4.j().dv(new A.kI(A.r(m.code),!0,1))
if(A.r(m.code)==="KeyP"&&!A.R(m.repeat)&&$.AF())$.mi=!$.mi
if((A.r(m.code)==="KeyJ"||A.r(m.code)==="Tab")&&!A.R(m.repeat)&&!$.ay.j().y){m.preventDefault()
A.jf($.j2.j())}if(A.r(m.code)==="KeyL"&&!A.R(m.repeat)&&!$.ay.j().y)A.jf($.m6.j())
if(A.r(m.code)==="KeyH"&&!A.R(m.repeat)&&!$.ay.j().y)A.jf($.j1.j())
if(A.r(m.code)==="KeyO"&&!A.R(m.repeat)&&!$.ay.j().y)A.jf($.j4.j())
if(A.r(m.code)==="KeyK"&&!A.R(m.repeat)&&q)A.ml("saved")},
$S:1}
A.vB.prototype={
$1(a){var s=A.b(a)
if($.bc==null)$.f4.j().dv(new A.kI(A.r(s.code),!1,0))},
$S:1}
A.vC.prototype={
$1(a){return A.zb()},
$S:2}
A.vD.prototype={
$1(a){return A.zb()},
$S:2}
A.vE.prototype={
$1(a){return A.EC(A.b(a))},
$S:2}
A.vF.prototype={
$1(a){var s=A.b(a)
if($.ay.j().y){s.preventDefault()
A.EB(s)
return}$.ac.j().cJ($.A.j())},
$S:1}
A.vG.prototype={
$1(a){var s,r,q,p=A.b(a),o=$.hm()
if(!o.a||$.ej==null)return
p.preventDefault()
s=o.gbd()
r=A.ad(p.deltaY)>0?1:-1
o=$.ej
o.toString
q=J.cL(s)
o.a.cO(A.f(r),q)},
$S:1}
A.uN.prototype={
$1(a){var s=A.r(A.b(a).message)
A.uV(s,null)},
$S:1}
A.uO.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.uV("unhandled rejection: "+A.y(s==null?A.r(a.type):s),null)},
$S:1}
A.uR.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:40}
A.uZ.prototype={
$0(){this.a.className=""},
$S:14}
A.v2.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:34}
A.uQ.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.uW.prototype={
$1(a){return t.g.a(a).e},
$S:26}
A.uT.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:11}
A.uU.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.dZ.prototype
s.hQ=s.p
s=A.n.prototype
s.hP=s.cM
s=A.i2.prototype
s.hR=s.bG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"EJ","C0",43)
r(J.u.prototype,"gaq","q",10)
q(A,"EX","Ch",35)
r(A.aG.prototype,"gaq","q",10)
p(A.cf.prototype,"gko","U",10)
o(A,"FO","Da",20)
o(A,"FP","Db",20)
o(A,"FQ","Dc",20)
q(A,"zZ","Fu",0)
s(A,"FX","C5",43)
r(A.cm.prototype,"gaq","q",10)
r(A.fT.prototype,"gaq","q",10)
o(A,"G_","Ej",13)
p(A.kh.prototype,"gmk","ml",121)
var n
p(n=A.kX.prototype,"gmg","mh",8)
p(n,"gmo","mp",8)
p(n,"gmq","mr",8)
p(n,"gmi","mj",8)
p(n,"gmm","mn",8)
q(A,"A2","Df",172)
q(A,"Ht","wf",18)
p(A.dp.prototype,"gaA","h3",56)
p(n=A.k4.prototype,"gj7","j8",2)
p(n,"gj9","ja",2)
p(n,"gjd","je",2)
p(n,"gjh","ji",2)
p(n,"gjj","jk",2)
p(n,"gjf","jg",2)
p(n,"gjb","jc",2)
o(A,"Gm","zg",13)
o(A,"Gq","zf",13)
o(A,"Ge","BY",173)
o(A,"Gf","BZ",174)
o(A,"Gu","BS",175)
p(A.i2.prototype,"gjl","jm",2)
p(A.fO.prototype,"giW","iX",125)
p(A.l9.prototype,"glr","ls",19)
o(A,"Ac","Fa",176)
q(A,"Ab","Eg",0)
o(A,"Gi","Ec",117)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.I,null)
q(A.I,[A.w6,J.k6,A.ia,J.eo,A.n,A.hr,A.dP,A.am,A.W,A.qG,A.aI,A.hU,A.T,A.hC,A.hz,A.iq,A.at,A.d1,A.bq,A.fE,A.fr,A.f_,A.du,A.rD,A.pT,A.hA,A.iM,A.a6,A.pz,A.cg,A.ai,A.cz,A.hM,A.lD,A.lj,A.ih,A.lV,A.t9,A.cE,A.lw,A.lY,A.tJ,A.lk,A.cH,A.b1,A.lo,A.eW,A.ax,A.ll,A.lT,A.iX,A.iy,A.lC,A.f0,A.iB,A.iR,A.lZ,A.es,A.jC,A.ts,A.tM,A.et,A.dR,A.lt,A.kr,A.ie,A.ta,A.G,A.L,A.aq,A.lW,A.rp,A.bl,A.iT,A.rF,A.lQ,A.pS,A.lz,A.ec,A.qj,A.eG,A.ky,A.nq,A.nr,A.nt,A.ns,A.kx,A.fn,A.jS,A.o6,A.dt,A.k1,A.bV,A.nO,A.kw,A.bC,A.eC,A.bD,A.rJ,A.ch,A.pU,A.kz,A.kJ,A.bz,A.kV,A.kH,A.aH,A.o8,A.kh,A.l0,A.pK,A.ck,A.bY,A.ry,A.rw,A.dD,A.kX,A.eB,A.jQ,A.jR,A.o7,A.o5,A.fV,A.av,A.bf,A.aJ,A.P,A.hs,A.kB,A.bk,A.ql,A.b6,A.qn,A.qm,A.ly,A.i7,A.qx,A.tb,A.lX,A.tI,A.lJ,A.lv,A.lN,A.lG,A.tn,A.bL,A.bJ,A.aO,A.nJ,A.nI,A.jh,A.eE,A.o9,A.dp,A.kD,A.kY,A.M,A.hq,A.lm,A.jt,A.ln,A.jG,A.lq,A.hx,A.lr,A.jJ,A.ls,A.k_,A.lx,A.hV,A.lE,A.fl,A.ju,A.wg,A.i4,A.lK,A.kC,A.lL,A.eP,A.kN,A.lO,A.kO,A.lP,A.kR,A.lS,A.kQ,A.lR,A.l4,A.m_,A.i8,A.lf,A.m2,A.no,A.jV,A.jX,A.hG,A.ic,A.z,A.jH,A.fI,A.os,A.ef,A.cX,A.fw,A.t0,A.dE,A.iW,A.iV,A.m1,A.m0,A.tQ,A.jI,A.jo,A.h_,A.mP,A.mx,A.ho,A.mL,A.w2,A.mX,A.mR,A.ir,A.fm,A.nl,A.o4,A.k4,A.p5,A.p9,A.aT,A.pv,A.ps,A.nK,A.pB,A.d_,A.a,A.kS,A.lg,A.ne,A.jK,A.nU,A.fx,A.bp,A.kv,A.qd,A.fN,A.qB,A.eM,A.jT,A.og,A.of,A.n3,A.fh,A.fj,A.fg,A.fi,A.jv,A.ki,A.cG,A.lh,A.hI,A.oJ,A.a_,A.jN,A.k2,A.oK,A.jO,A.d6,A.jP,A.eb,A.dT,A.qy,A.ea,A.fZ,A.oH,A.nY,A.rl,A.oM,A.cV,A.cx,A.pc,A.pa,A.pb,A.dr,A.oQ,A.ba,A.by,A.bh,A.bj,A.df,A.dx,A.aZ,A.oT,A.cU,A.oI,A.eA,A.oS,A.cT,A.oX,A.i3,A.hT,A.bg,A.rX,A.ke,A.bS,A.pf,A.na,A.hp,A.nb,A.pr,A.pq,A.q9,A.q8,A.qa,A.qb,A.qc,A.kd,A.qi,A.qv,A.kI,A.qu,A.qw,A.rg,A.e4,A.rh,A.fP,A.nL,A.t1,A.eU,A.jA,A.p3,A.p7,A.qz,A.cY,A.qA,A.jU,A.eT,A.rY,A.pN,A.cO,A.bw,A.q6,A.rq,A.eS,A.eR,A.ip,A.lc,A.eI,A.d4,A.rt,A.ji,A.w1,A.dJ,A.mH,A.dK,A.nd,A.b2,A.nm,A.fs,A.de,A.jB,A.i2,A.nP,A.om,A.oo,A.fz,A.dU,A.oD,A.ov,A.ow,A.ca,A.oE,A.cW,A.fo,A.pW,A.dq,A.e0,A.bW,A.q0,A.qh,A.b_,A.rb,A.rf,A.cs,A.mE,A.l9,A.rW,A.dA,A.bn,A.c0,A.bO,A.lb,A.jk,A.l8,A.fX,A.lI,A.lH,A.iH,A.t7])
q(J.k6,[J.k8,J.hL,J.hO,J.hN,J.hP,J.fB,J.dX])
q(J.hO,[J.dZ,J.u,A.fH,A.hZ])
q(J.dZ,[J.ku,J.eQ,J.dY])
r(J.k7,A.ia)
r(J.pe,J.u)
q(J.fB,[J.hK,J.k9])
q(A.n,[A.e9,A.Q,A.cA,A.H,A.hB,A.dC,A.eZ,A.li,A.lU,A.cn])
q(A.e9,[A.er,A.iY])
r(A.iw,A.er)
r(A.iu,A.iY)
q(A.dP,[A.jx,A.jw,A.kW,A.vg,A.vi,A.t4,A.t3,A.tW,A.od,A.tl,A.to,A.pC,A.tq,A.vP,A.vQ,A.va,A.qk,A.rK,A.pH,A.pI,A.pJ,A.pV,A.pG,A.pL,A.rz,A.rA,A.rC,A.o1,A.o_,A.o0,A.pY,A.pZ,A.qs,A.qr,A.qq,A.qp,A.qo,A.qt,A.uC,A.uD,A.qD,A.qE,A.vW,A.vU,A.oa,A.pE,A.v7,A.ot,A.ou,A.rZ,A.t_,A.mZ,A.n1,A.n0,A.n2,A.mQ,A.my,A.mz,A.mA,A.mN,A.mO,A.mM,A.p6,A.pt,A.nX,A.oh,A.oj,A.ok,A.ol,A.n4,A.n5,A.n6,A.n7,A.n8,A.n9,A.v5,A.np,A.nZ,A.oL,A.vX,A.uG,A.uF,A.tU,A.tT,A.uY,A.oZ,A.p_,A.p1,A.rm,A.oP,A.oN,A.v4,A.oU,A.oW,A.v3,A.nT,A.py,A.pm,A.rk,A.rj,A.ri,A.nM,A.nN,A.q7,A.ru,A.rv,A.mw,A.mu,A.mU,A.mV,A.ng,A.nk,A.nj,A.ni,A.nC,A.nB,A.nD,A.nE,A.nF,A.nA,A.nv,A.nw,A.nH,A.nQ,A.nR,A.nS,A.nW,A.on,A.op,A.oq,A.oB,A.oz,A.oA,A.oy,A.ox,A.oG,A.ph,A.pi,A.pj,A.q1,A.q2,A.q3,A.r6,A.r7,A.r_,A.r0,A.qZ,A.r1,A.qK,A.r2,A.r3,A.qY,A.qQ,A.qR,A.qS,A.qT,A.qU,A.qV,A.qW,A.qX,A.qP,A.qL,A.qM,A.qN,A.qO,A.r5,A.r4,A.rd,A.ro,A.mG,A.rU,A.rT,A.rV,A.rP,A.rS,A.rN,A.rM,A.vd,A.rL,A.mB,A.mC,A.mD,A.tE,A.tF,A.ty,A.tA,A.tB,A.tv,A.tw,A.tx,A.u6,A.u7,A.ue,A.uf,A.ug,A.u9,A.ua,A.ub,A.u2,A.u_,A.uK,A.uL,A.vl,A.vm,A.vx,A.vz,A.vA,A.vB,A.vC,A.vD,A.vE,A.vF,A.vG,A.uN,A.uO,A.uR,A.v2,A.uW,A.uT,A.uU])
q(A.jx,[A.t8,A.nu,A.pn,A.vh,A.tX,A.v6,A.oe,A.tm,A.pA,A.pD,A.tt,A.rH,A.rG,A.vR,A.pM,A.rx,A.rB,A.o2,A.qF,A.vV,A.vT,A.n_,A.mS,A.mT,A.pu,A.oi,A.v_,A.p0,A.p2,A.oR,A.px,A.p8,A.pP,A.pQ,A.pR,A.rr,A.rs,A.nn,A.pk,A.pl,A.mF,A.rQ,A.rO,A.tz,A.tu,A.u5,A.ud,A.vq,A.vr,A.uQ])
r(A.aU,A.iu)
q(A.am,[A.fC,A.dy,A.ka,A.l_,A.kK,A.lu,A.hR,A.jm,A.ct,A.il,A.kZ,A.fQ,A.jz])
r(A.fS,A.W)
r(A.dQ,A.fS)
q(A.Q,[A.a2,A.aa,A.au,A.K,A.eY,A.iA])
q(A.a2,[A.ii,A.O,A.eL,A.lB])
r(A.dg,A.cA)
q(A.bq,[A.ed,A.ee,A.fW])
q(A.ed,[A.aV,A.f2,A.iI])
q(A.ee,[A.al,A.b0,A.iJ])
r(A.iK,A.fW)
r(A.h1,A.fE)
r(A.e6,A.h1)
r(A.ht,A.e6)
q(A.fr,[A.a3,A.cR])
q(A.du,[A.hu,A.iL,A.iS])
r(A.aG,A.hu)
q(A.jw,[A.qe,A.t5,A.t6,A.tK,A.ob,A.tc,A.th,A.tg,A.te,A.td,A.tk,A.tj,A.ti,A.tH,A.uX,A.tO,A.tN,A.uB,A.uu,A.uv,A.uA,A.up,A.ur,A.uq,A.uz,A.un,A.uo,A.uw,A.ux,A.uy,A.ut,A.us,A.uE,A.v8,A.oY,A.oO,A.oV,A.uH,A.mv,A.mJ,A.mI,A.mW,A.ny,A.nz,A.nx,A.or,A.oC,A.q5,A.qI,A.qJ,A.r8,A.r9,A.ra,A.re,A.rR,A.tC,A.tD,A.uh,A.ui,A.uj,A.uk,A.u8,A.uc,A.u3,A.u4,A.u0,A.u1,A.uM,A.vn,A.vy,A.vH,A.vI,A.vJ,A.vK,A.vL,A.vM,A.vN,A.vo,A.vp,A.vs,A.vt,A.vu,A.vv,A.vw,A.uZ])
r(A.i0,A.dy)
q(A.kW,[A.kT,A.fk])
q(A.a6,[A.cf,A.ix,A.lA])
r(A.hQ,A.cf)
r(A.fG,A.fH)
q(A.hZ,[A.kj,A.b5])
q(A.b5,[A.iD,A.iF])
r(A.iE,A.iD)
r(A.hX,A.iE)
r(A.iG,A.iF)
r(A.hY,A.iG)
q(A.hX,[A.hW,A.kk])
q(A.hY,[A.kl,A.km,A.kn,A.ko,A.kp,A.eD,A.i_])
r(A.h0,A.lu)
r(A.is,A.lo)
r(A.lM,A.iX)
r(A.iz,A.ix)
r(A.cm,A.iL)
r(A.fT,A.iS)
q(A.es,[A.jq,A.jL,A.kb])
q(A.jC,[A.nc,A.pp,A.po,A.rI])
r(A.kc,A.hR)
r(A.tr,A.ts)
r(A.l3,A.jL)
q(A.ct,[A.fK,A.k3])
r(A.lp,A.iT)
q(A.lt,[A.eH,A.fu,A.fq,A.ez,A.jl,A.d2,A.fM,A.fv,A.js,A.jy,A.hw,A.eK,A.e5,A.ev,A.ce,A.i9,A.cS,A.fL,A.id,A.fy,A.it,A.iv,A.jW,A.hE,A.jY,A.jZ,A.ey,A.hF,A.eO,A.d0,A.fp,A.fA,A.fY,A.jr,A.eq,A.jD,A.jF,A.b7,A.jp,A.cc,A.ex,A.eu,A.dh,A.hD,A.dS,A.dV,A.kt,A.kG,A.eJ,A.cF,A.dw,A.bN,A.bB,A.k5,A.eV,A.cj,A.cM,A.cu,A.cN,A.dd,A.dc,A.dM,A.dN,A.dL,A.ep,A.dk,A.cP,A.cQ,A.dl,A.dj,A.dm,A.cd,A.di,A.cv,A.jj,A.bi,A.ci,A.e1,A.cD,A.bM,A.bA,A.ib,A.bK,A.bZ,A.c_,A.e8,A.d3])
q(A.dt,[A.bv,A.bm,A.cB,A.ks,A.cw])
r(A.qC,A.lN)
r(A.ld,A.m0)
r(A.iC,A.d6)
q(A.i2,[A.hv,A.nG,A.nV,A.hH,A.oF,A.pg,A.q4,A.qH,A.fO,A.rn])
q(A.rW,[A.la,A.lF,A.b9,A.l7,A.l5,A.io,A.l6])
s(A.fS,A.d1)
s(A.iY,A.W)
s(A.iD,A.W)
s(A.iE,A.at)
s(A.iF,A.W)
s(A.iG,A.at)
s(A.h1,A.iR)
s(A.iS,A.lZ)
s(A.lN,A.tn)
s(A.m0,A.tQ)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",v:"double",bd:"num",h:"String",l:"bool",aq:"Null",D:"List",I:"Object",Y:"Map",af:"JSObject"},mangledNames:{},types:["~()","aq(I?)","~(I?)","l(h)","dn()","l(v)","0&()","~(l)","dn(bm?)","l(av)","l(I?)","l(eI)","l(@)","@(@)","aq()","l(ba)","i(bS,bS)","l(e4)","l()","l(bO)","~(~())","l(bD)","l(b_)","i(L<h,h>,L<h,h>)","~(@)","l(P)","l(bS)","l(i)","~(h,v)","l(cv)","~(af)","l(L<h,D<h>>)","l(cM)","@(h)","l(bw)","i()","i(aT)","h(bY)","a(a)","l(eb)","l(cd)","~(I?,I?)","aq(@)","i(@,@)","h(h)","@()","v()","fl()","l(L<h,aH>)","aH(L<h,aH>)","aH(aH,aH)","i(aO<bL>,aO<bL>)","bX(aO<bL>)","i(aO<bJ>,aO<bJ>)","bX(aO<bJ>)","eE(v,v,v,v)","M(M)","~(eP)","eP()","fn()","v(v,h_)","bT<aq>(L<h,h>)","l(D<h>)","i(h,h)","i(by,by)","aq(~())","+effectiveScore,light,score(v,aT,v)(aT)","i(+effectiveScore,light,score(v,aT,v),+effectiveScore,light,score(v,aT,v))","l(cc)","D<bC>()","bC?()","dn(h{fallback:h?})","l(aZ)","fh(I?)","fg(I?)","fi(I?)","h(I?)","i8(bv)","fj(I?)","cw(i,i,h?)","l(dx)","h(i,a_,a_,a_)","i(d6,d6)","i(a9,a9)","l(ea)","i(i)","h(av)","i(+(v,v,v,v),+(v,v,v,v))","l(bY)","l(by)","i(i,aZ)","l(cx)","l(cV)","i(i,+(bm,dD))","i(dr,dr)","l(cU)","L<h,h>(h,@)","h?(h)","l(ik?)","l(bN)","l(bB)","eT()","bm(i,i,h?)","i(L<h,cO>,L<h,cO>)","i(ck,ck)","L<i,@>(i,eS)","L<i,@>(i,eR)","l(L<@,@>)","L<h,h>(L<@,@>)","l?(I?)","i(i,+(bv,ch))","h()","0^(n<0^>,I?)<I?>","v(v,h)","bv(i,i,h?)","D<h>(D<h>)","~(v)","~(i)","cB(i,i,h?)","aq(af)","0^(h,n<0^>)<C>","eC(cB)","Y<h,I?>(dq)","h(bi)","l(bi)","l(bA)","@(@,h)","l(dk)","l(cP)","l(cQ)","l(dl)","l(dj)","l(dm)","l(di)","i(+influence,light(v,bC),+influence,light(v,bC))","l(cu)","l(cN)","l(dd)","l(dc)","h(cs)","i(cs,cs)","I?(I?)","i(bO,bO)","D<d4>()","l(d4)","l(L<h,h>)","i(c0,c0)","Y<h,@>(bO)","l(c_)","l(bZ)","l(bK)","0&(h,i?)","Y<h,h>(Y<h,h>,h)","ck(L<h,bm>)","i(bY,bY)","~(@,@)","i(L<i,h>,L<i,h>)","aq(I,cZ)","h(L<i,h>)","~(I,cZ)","~(bA)","~(dK)","~(fz)","~(dJ)","~(dU)","~(fs)","l(fN)","~(bM)","~(i,h)","~(bN,bB)","~(i,@)","aq(@,cZ)","fV()","cV(I?)","cx(I?)","cU(I?)","~(bd)","D<+(v,v,v,v)>()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aV&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f2&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iI&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.al&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b0&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iJ&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iK&&A.Gk(a,b.a)}}
A.Dv(v.typeUniverse,JSON.parse('{"dY":"dZ","ku":"dZ","eQ":"dZ","GM":"fH","u":{"D":["1"],"Q":["1"],"af":[],"n":["1"]},"k8":{"l":[],"ag":[]},"hL":{"aq":[],"ag":[]},"hO":{"af":[]},"dZ":{"af":[]},"k7":{"ia":[]},"pe":{"u":["1"],"D":["1"],"Q":["1"],"af":[],"n":["1"]},"eo":{"a8":["1"]},"fB":{"v":[],"bd":[],"b3":["bd"]},"hK":{"v":[],"i":[],"bd":[],"b3":["bd"],"ag":[]},"k9":{"v":[],"bd":[],"b3":["bd"],"ag":[]},"dX":{"h":[],"b3":["h"],"q_":[],"ag":[]},"e9":{"n":["2"]},"hr":{"a8":["2"]},"er":{"e9":["1","2"],"n":["2"],"n.E":"2"},"iw":{"er":["1","2"],"e9":["1","2"],"Q":["2"],"n":["2"],"n.E":"2"},"iu":{"W":["2"],"D":["2"],"e9":["1","2"],"Q":["2"],"n":["2"]},"aU":{"iu":["1","2"],"W":["2"],"D":["2"],"e9":["1","2"],"Q":["2"],"n":["2"],"n.E":"2","W.E":"2"},"fC":{"am":[]},"dQ":{"W":["i"],"d1":["i"],"D":["i"],"Q":["i"],"n":["i"],"W.E":"i","d1.E":"i"},"Q":{"n":["1"]},"a2":{"Q":["1"],"n":["1"]},"ii":{"a2":["1"],"Q":["1"],"n":["1"],"n.E":"1","a2.E":"1"},"aI":{"a8":["1"]},"cA":{"n":["2"],"n.E":"2"},"dg":{"cA":["1","2"],"Q":["2"],"n":["2"],"n.E":"2"},"hU":{"a8":["2"]},"O":{"a2":["2"],"Q":["2"],"n":["2"],"n.E":"2","a2.E":"2"},"H":{"n":["1"],"n.E":"1"},"T":{"a8":["1"]},"hB":{"n":["2"],"n.E":"2"},"hC":{"a8":["2"]},"hz":{"a8":["1"]},"dC":{"n":["1"],"n.E":"1"},"iq":{"a8":["1"]},"fS":{"W":["1"],"d1":["1"],"D":["1"],"Q":["1"],"n":["1"]},"eL":{"a2":["1"],"Q":["1"],"n":["1"],"n.E":"1","a2.E":"1"},"aV":{"ed":[],"bq":[]},"f2":{"ed":[],"bq":[]},"iI":{"ed":[],"bq":[]},"al":{"ee":[],"bq":[]},"b0":{"ee":[],"bq":[]},"iJ":{"ee":[],"bq":[]},"iK":{"fW":[],"bq":[]},"ht":{"e6":["1","2"],"h1":["1","2"],"fE":["1","2"],"iR":["1","2"],"Y":["1","2"]},"fr":{"Y":["1","2"]},"a3":{"fr":["1","2"],"Y":["1","2"]},"eZ":{"n":["1"],"n.E":"1"},"f_":{"a8":["1"]},"cR":{"fr":["1","2"],"Y":["1","2"]},"hu":{"du":["1"],"e3":["1"],"Q":["1"],"n":["1"]},"aG":{"hu":["1"],"du":["1"],"e3":["1"],"Q":["1"],"n":["1"]},"i0":{"dy":[],"am":[]},"ka":{"am":[]},"l_":{"am":[]},"iM":{"cZ":[]},"dP":{"ew":[]},"jw":{"ew":[]},"jx":{"ew":[]},"kW":{"ew":[]},"kT":{"ew":[]},"fk":{"ew":[]},"kK":{"am":[]},"cf":{"a6":["1","2"],"w8":["1","2"],"Y":["1","2"],"a6.K":"1","a6.V":"2"},"aa":{"Q":["1"],"n":["1"],"n.E":"1"},"cg":{"a8":["1"]},"au":{"Q":["1"],"n":["1"],"n.E":"1"},"ai":{"a8":["1"]},"K":{"Q":["L<1,2>"],"n":["L<1,2>"],"n.E":"L<1,2>"},"cz":{"a8":["L<1,2>"]},"hQ":{"cf":["1","2"],"a6":["1","2"],"w8":["1","2"],"Y":["1","2"],"a6.K":"1","a6.V":"2"},"ed":{"bq":[]},"ee":{"bq":[]},"fW":{"bq":[]},"hM":{"Ct":[],"q_":[]},"lD":{"i6":[],"fF":[]},"li":{"n":["i6"],"n.E":"i6"},"lj":{"a8":["i6"]},"ih":{"fF":[]},"lU":{"n":["fF"],"n.E":"fF"},"lV":{"a8":["fF"]},"fG":{"af":[],"ag":[]},"eD":{"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"fH":{"af":[],"ag":[]},"hZ":{"af":[]},"kj":{"af":[],"ag":[]},"b5":{"bU":["1"],"af":[]},"hX":{"W":["v"],"b5":["v"],"D":["v"],"bU":["v"],"Q":["v"],"af":[],"n":["v"],"at":["v"]},"hY":{"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"]},"hW":{"o3":[],"W":["v"],"b5":["v"],"D":["v"],"bU":["v"],"Q":["v"],"af":[],"n":["v"],"at":["v"],"ag":[],"W.E":"v","at.E":"v"},"kk":{"W":["v"],"b5":["v"],"D":["v"],"bU":["v"],"Q":["v"],"af":[],"n":["v"],"at":["v"],"ag":[],"W.E":"v","at.E":"v"},"kl":{"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"km":{"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"kn":{"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"ko":{"wm":[],"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"kp":{"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"i_":{"ik":[],"W":["i"],"b5":["i"],"D":["i"],"bU":["i"],"Q":["i"],"af":[],"n":["i"],"at":["i"],"ag":[],"W.E":"i","at.E":"i"},"lu":{"am":[]},"h0":{"dy":[],"am":[]},"cH":{"a8":["1"]},"cn":{"n":["1"],"n.E":"1"},"b1":{"am":[]},"is":{"lo":["1"]},"ax":{"bT":["1"]},"iX":{"yG":[]},"lM":{"iX":[],"yG":[]},"ix":{"a6":["1","2"],"Y":["1","2"]},"iz":{"ix":["1","2"],"a6":["1","2"],"Y":["1","2"],"a6.K":"1","a6.V":"2"},"eY":{"Q":["1"],"n":["1"],"n.E":"1"},"iy":{"a8":["1"]},"cm":{"du":["1"],"y7":["1"],"e3":["1"],"Q":["1"],"n":["1"]},"f0":{"a8":["1"]},"W":{"D":["1"],"Q":["1"],"n":["1"]},"a6":{"Y":["1","2"]},"iA":{"Q":["2"],"n":["2"],"n.E":"2"},"iB":{"a8":["2"]},"fE":{"Y":["1","2"]},"e6":{"h1":["1","2"],"fE":["1","2"],"iR":["1","2"],"Y":["1","2"]},"du":{"e3":["1"],"Q":["1"],"n":["1"]},"iL":{"du":["1"],"e3":["1"],"Q":["1"],"n":["1"]},"fT":{"du":["1"],"lZ":["1"],"e3":["1"],"Q":["1"],"n":["1"]},"lA":{"a6":["h","@"],"Y":["h","@"],"a6.K":"h","a6.V":"@"},"lB":{"a2":["h"],"Q":["h"],"n":["h"],"n.E":"h","a2.E":"h"},"jq":{"es":["D<i>","h"]},"jL":{"es":["h","D<i>"]},"hR":{"am":[]},"kc":{"am":[]},"kb":{"es":["I?","h"]},"l3":{"es":["h","D<i>"]},"et":{"b3":["et"]},"v":{"bd":[],"b3":["bd"]},"dR":{"b3":["dR"]},"i":{"bd":[],"b3":["bd"]},"D":{"Q":["1"],"n":["1"]},"bd":{"b3":["bd"]},"i6":{"fF":[]},"e3":{"Q":["1"],"n":["1"]},"h":{"b3":["h"],"q_":[]},"lt":{"C":[]},"jm":{"am":[]},"dy":{"am":[]},"ct":{"am":[]},"fK":{"am":[]},"k3":{"am":[]},"il":{"am":[]},"kZ":{"am":[]},"fQ":{"am":[]},"jz":{"am":[]},"kr":{"am":[]},"ie":{"am":[]},"lW":{"cZ":[]},"bl":{"CI":[]},"iT":{"l1":[]},"lQ":{"l1":[]},"lp":{"l1":[]},"lz":{"wh":[]},"ec":{"wh":[]},"eH":{"C":[]},"fu":{"C":[]},"fq":{"C":[]},"bv":{"dt":[]},"bm":{"dt":[]},"cB":{"dt":[]},"cw":{"dt":[]},"ks":{"dt":[]},"ez":{"C":[]},"jl":{"C":[]},"d2":{"C":[]},"fM":{"C":[]},"fv":{"C":[]},"js":{"C":[]},"jy":{"C":[]},"hw":{"C":[]},"eK":{"C":[]},"e5":{"C":[]},"ev":{"C":[]},"ce":{"C":[]},"i9":{"C":[]},"cS":{"C":[]},"fL":{"C":[]},"i7":{"Cw":[]},"ly":{"bX":[]},"lX":{"bX":[]},"lJ":{"Cv":[]},"lv":{"BI":[]},"id":{"C":[]},"bL":{"b3":["bL"]},"bJ":{"b3":["bJ"]},"fy":{"C":[]},"it":{"C":[]},"hq":{"ak":[]},"lm":{"a9":[]},"jt":{"ak":[]},"ln":{"a9":[]},"jG":{"ak":[]},"lq":{"a9":[]},"iv":{"C":[]},"hx":{"ak":[]},"lr":{"a9":[]},"jJ":{"ak":[]},"ls":{"a9":[]},"k_":{"ak":[]},"lx":{"a9":[]},"hV":{"ak":[]},"lE":{"a9":[]},"ju":{"Cu":[]},"i4":{"ak":[]},"lK":{"a9":[]},"kC":{"ak":[]},"lL":{"a9":[]},"kN":{"ak":[]},"lO":{"a9":[]},"kO":{"ak":[]},"lP":{"a9":[]},"kR":{"ak":[]},"lS":{"a9":[]},"kQ":{"ak":[]},"lR":{"a9":[]},"l4":{"ak":[]},"m_":{"a9":[]},"lf":{"ak":[]},"m2":{"a9":[]},"jW":{"C":[]},"hE":{"C":[]},"jY":{"C":[]},"jZ":{"C":[]},"ey":{"C":[]},"hF":{"C":[]},"eO":{"C":[]},"d0":{"C":[]},"fp":{"C":[]},"jH":{"Br":[]},"fA":{"C":[]},"fY":{"C":[]},"b7":{"C":[]},"jr":{"C":[]},"eq":{"C":[]},"jD":{"C":[]},"jF":{"C":[]},"dE":{"dn":[]},"ld":{"BO":[]},"jp":{"C":[]},"cc":{"C":[]},"ex":{"C":[]},"iC":{"d6":[]},"eu":{"C":[]},"dh":{"C":[]},"dS":{"C":[]},"hD":{"C":[]},"dV":{"C":[]},"kt":{"C":[]},"kG":{"C":[]},"eJ":{"C":[]},"cF":{"C":[]},"dw":{"C":[]},"bN":{"C":[]},"bB":{"C":[]},"k5":{"C":[]},"eV":{"C":[]},"cj":{"C":[]},"cM":{"C":[]},"cu":{"C":[]},"cN":{"C":[]},"dd":{"C":[]},"dc":{"C":[]},"dM":{"C":[]},"dN":{"C":[]},"ep":{"C":[]},"dL":{"C":[]},"dk":{"C":[]},"cP":{"C":[]},"cQ":{"C":[]},"dl":{"C":[]},"dj":{"C":[]},"dm":{"C":[]},"cd":{"C":[]},"di":{"C":[]},"cv":{"C":[]},"jj":{"C":[]},"bi":{"C":[]},"ci":{"C":[]},"e1":{"C":[]},"cD":{"C":[]},"bM":{"C":[]},"bA":{"C":[]},"ib":{"C":[]},"bK":{"C":[]},"bZ":{"C":[]},"c_":{"C":[]},"e8":{"C":[]},"d3":{"C":[]},"lI":{"Cz":[]},"BX":{"D":["i"],"Q":["i"],"n":["i"]},"ik":{"D":["i"],"Q":["i"],"n":["i"]},"CN":{"D":["i"],"Q":["i"],"n":["i"]},"BV":{"D":["i"],"Q":["i"],"n":["i"]},"wm":{"D":["i"],"Q":["i"],"n":["i"]},"BW":{"D":["i"],"Q":["i"],"n":["i"]},"CM":{"D":["i"],"Q":["i"],"n":["i"]},"o3":{"D":["v"],"Q":["v"],"n":["v"]},"BH":{"D":["v"],"Q":["v"],"n":["v"]}}'))
A.Du(v.typeUniverse,JSON.parse('{"fS":1,"iY":2,"b5":1,"iL":1,"iS":1,"jC":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.Z
return{mq:s("cM"),dx:s("ho"),bC:s("cs"),v:s("b1"),iF:s("jo"),ul:s("dc"),EL:s("cN"),xs:s("cu"),gc:s("dd"),lT:s("fg"),bJ:s("fh"),gI:s("fi"),ya:s("fj"),z3:s("bJ"),Bu:s("fl"),p:s("aT"),rO:s("fo"),sU:s("dQ"),hO:s("b3<@>"),CH:s("hs"),D:s("a3<h,h>"),I:s("a3<h,i>"),M:s("aG<h>"),f7:s("et"),fP:s("bK"),yb:s("dR"),he:s("Q<@>"),yW:s("cc"),g:s("bS"),Ct:s("C"),yt:s("am"),hl:s("a_"),B:s("o3"),pH:s("aH"),Fr:s("cO"),BO:s("ew"),ls:s("bT<aq>"),vS:s("di"),aJ:s("dj"),x:s("cd"),bK:s("dk"),gm:s("dl"),dn:s("cP"),mx:s("dm"),j_:s("cQ"),EJ:s("cR<bM,h>"),_:s("dn"),Eb:s("cv"),qX:s("dV"),mF:s("cU"),iO:s("cw"),oW:s("cV"),fl:s("cx"),FA:s("n<hs>"),yT:s("n<h>"),x6:s("n<ck>"),oJ:s("n<v>"),tY:s("n<@>"),uI:s("n<i>"),Fg:s("u<cs>"),jC:s("u<aT>"),km:s("u<fo>"),sa:s("u<ca>"),ns:s("u<jK>"),cO:s("u<df>"),r:s("u<bS>"),uH:s("u<jO>"),Dl:s("u<a_>"),iJ:s("u<bT<~>>"),pC:s("u<jT>"),C1:s("u<dn>"),ka:s("u<bf>"),Fm:s("u<eA>"),op:s("u<cT>"),hr:s("u<eB>"),s3:s("u<cw>"),sL:s("u<af>"),Bv:s("u<ke>"),yH:s("u<bh>"),Bq:s("u<L<h,h>>"),rq:s("u<Y<h,I>>"),A7:s("u<Y<h,h>>"),cs:s("u<Y<h,@>>"),s6:s("u<bv>"),pq:s("u<av>"),bA:s("u<dq>"),xz:s("u<bw>"),b4:s("u<bj>"),s0:s("u<eE>"),hc:s("u<cW>"),ea:s("u<dr>"),Fk:s("u<kw>"),qP:s("u<by>"),kv:s("u<eI>"),nR:s("u<+(h,D<by>)>"),kd:s("u<+(h,h)>"),rh:s("u<+influence,light(v,bC)>"),wt:s("u<+(i,h)>"),wx:s("u<+(v,v,v,v)>"),e_:s("u<ak>"),u:s("u<a9>"),Ft:s("u<i7>"),C:s("u<P>"),h1:s("u<bz>"),s2:s("u<bX>"),eY:s("u<aZ>"),xB:s("u<cY>"),El:s("u<fP>"),AM:s("u<aO<bJ>>"),fs:s("u<aO<bL>>"),cv:s("u<bC>"),DZ:s("u<dx>"),s:s("u<h>"),fa:s("u<bY>"),k:s("u<M>"),h:s("u<a>"),ld:s("u<ip>"),Dc:s("u<dA>"),Fi:s("u<c0>"),jV:s("u<d4>"),yo:s("u<eT>"),E:s("u<ba>"),uk:s("u<bp>"),wf:s("u<iC>"),il:s("u<eb>"),l5:s("u<ea>"),ow:s("u<lG>"),j5:s("u<lH>"),pv:s("u<fX>"),Fy:s("u<ef<eC>>"),EM:s("u<ef<ch>>"),w_:s("u<ef<bz>>"),f2:s("u<ef<dD>>"),Fa:s("u<fZ>"),n:s("u<v>"),zz:s("u<@>"),t:s("u<i>"),Cf:s("u<I?>"),AN:s("u<bd>"),w:s("hL"),m:s("af"),ud:s("dY"),Eh:s("bU<@>"),AQ:s("D<aT>"),hk:s("D<bS>"),b:s("D<bf>"),xp:s("D<cw>"),nx:s("D<af>"),rW:s("D<Y<h,h>>"),qr:s("D<bv>"),R:s("D<av>"),fG:s("D<cW>"),Es:s("D<by>"),DX:s("D<+(h,h)>"),pL:s("D<+(i,h)>"),xM:s("D<+(v,v,v,v)>"),bE:s("D<bz>"),fx:s("D<cY>"),a:s("D<h>"),uh:s("D<ip>"),D0:s("D<dA>"),cf:s("D<c0>"),p7:s("D<d4>"),dd:s("D<v>"),j:s("D<@>"),J:s("D<i>"),ik:s("D<af?>"),vX:s("D<I?>"),m2:s("hT"),h6:s("L<h,aH>"),gJ:s("L<h,cO>"),q:s("L<h,h>"),no:s("L<h,bm>"),AC:s("L<@,@>"),ou:s("L<i,h>"),pr:s("L<i,@>"),yx:s("L<h,D<h>>"),mf:s("Y<h,dn>"),vD:s("Y<h,cB>"),ap:s("Y<h,av>"),G:s("Y<h,h>"),m0:s("Y<h,l>"),gG:s("Y<h,v>"),P:s("Y<h,@>"),f:s("Y<@,@>"),eU:s("Y<i,h>"),pG:s("Y<i,eR>"),tQ:s("Y<i,eS>"),aD:s("Y<h,D<+(v,v,v,v)>>"),Bx:s("Y<h,D<h>>"),oZ:s("Y<h,I?>"),q1:s("Y<c_,D<c0>>"),ee:s("Y<i,Y<h,h>>"),jT:s("O<h,h?>"),pw:s("cB"),kc:s("bv"),rV:s("fG"),mV:s("eD"),c:s("aq"),K:s("I"),BB:s("bL"),A:s("av"),oP:s("dq"),wJ:s("bi"),E4:s("bw"),A_:s("dr"),T:s("by"),DL:s("i3"),AB:s("ky"),yi:s("fI"),Y:s("eI"),iM:s("GN"),ep:s("+()"),k0:s("+(bv,ch)"),ut:s("+(bm,dD)"),rf:s("+(v,v)"),mn:s("+influence,light(v,bC)"),tK:s("+effectiveScore,light,score(v,aT,v)"),nz:s("+(v,v,v,v)"),ez:s("i6"),wZ:s("a9"),tc:s("cX<cw,bz>"),ja:s("cX<cB,eC>"),wm:s("cX<bv,ch>"),qq:s("cX<bm,dD>"),j2:s("P"),m3:s("bz"),yz:s("bX"),U:s("aZ"),F3:s("cY"),Q:s("e3<h>"),oG:s("e3<i>"),en:s("bA"),gl:s("b_"),W:s("e4"),u5:s("bB"),bG:s("bN"),ho:s("fP"),EH:s("aO<bJ>"),E0:s("aO<bL>"),l:s("cZ"),w8:s("dx"),qL:s("b7"),N:s("h"),Aj:s("bm"),jP:s("ck"),d:s("bY"),bp:s("e5"),sg:s("ag"),bs:s("dy"),qF:s("eQ"),hL:s("e6<h,h>"),qt:s("l0"),eP:s("l1"),cV:s("M"),a7:s("a"),qY:s("bD"),L:s("bO"),gM:s("bZ"),hF:s("c_"),vw:s("eR"),BX:s("eS"),aA:s("dA"),AP:s("c0"),sy:s("lc"),bB:s("b9"),aS:s("d4"),fu:s("eT"),fw:s("H<bK>"),vL:s("H<cc>"),vK:s("H<cd>"),Fj:s("H<bB>"),rZ:s("H<bN>"),vY:s("H<h>"),r4:s("H<bD>"),g2:s("H<bZ>"),cE:s("H<c_>"),rt:s("T<bA>"),xG:s("T<b_>"),fh:s("T<bD>"),e:s("ba"),hR:s("ax<@>"),BT:s("iz<I?,I?>"),Ez:s("d6"),rL:s("fV"),xT:s("eb"),wU:s("ea"),la:s("lF"),qS:s("iH"),jS:s("h_"),Br:s("cn<bX>"),V:s("iV"),jm:s("iW"),y:s("l"),Bs:s("l()"),kr:s("l(bK)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(I)"),pz:s("l(bA)"),aV:s("l(b_)"),y2:s("l(bB)"),ty:s("l(bN)"),Ag:s("l(h)"),rd:s("l(bD)"),da:s("l(bZ)"),qR:s("l(c_)"),i:s("v"),z:s("@"),pF:s("@()"),h_:s("@(I)"),nW:s("@(I,cZ)"),S:s("i"),eZ:s("bT<aq>?"),r9:s("u<I?>?"),gt:s("af?"),rK:s("D<@>?"),jd:s("Y<h,D<h>>?"),X:s("I?"),dR:s("h?"),oI:s("h?(h)"),Fx:s("ik?"),F:s("eW<@,@>?"),Af:s("lC?"),k7:s("l?"),wK:s("l(fN)?"),u6:s("v?"),lo:s("i?"),s7:s("bd?"),Z:s("~()?"),Cv:s("~(dJ)?"),kC:s("~(dK)?"),pf:s("~(fs)?"),hq:s("~(fz)?"),CA:s("~(dU)?"),hQ:s("~(bM)?"),Ci:s("~(bA)?"),nf:s("~(bN,bB)?"),DI:s("~(h,v)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,h)?"),o:s("bd"),H:s("~"),O:s("~()"),m1:s("~(h,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.i5=J.k6.prototype
B.a=J.u.prototype
B.d=J.hK.prototype
B.c=J.fB.prototype
B.b=J.dX.prototype
B.i6=J.dY.prototype
B.i7=J.hO.prototype
B.t=A.hW.prototype
B.d8=A.i_.prototype
B.dm=J.ku.prototype
B.bQ=J.eQ.prototype
B.a9=new A.cM(1,"standard")
B.K=new A.ji(B.a9)
B.bU=new A.cM(0,"concise")
B.bV=new A.cM(2,"verbose")
B.ao=new A.dJ(null,null,null,null,null)
B.n6=new A.jj(0,"none")
B.n7=new A.jl(0,"opaque")
B.dW=new A.jp(4,"ambience")
B.bZ=new A.cu(3,"mono")
B.aR=new A.dd(0,"full")
B.bY=new A.cu(0,"auto")
B.bX=new A.cN(1,"standard")
B.bW=new A.dc(0,"defaultMix")
B.aS=new A.dK(B.bY,B.bX,B.aR,B.bW)
B.aH=new A.kG(1,"pixeldart")
B.e2=new A.hp(B.aH,!1,!0,!1,null,!1,null)
B.c0=new A.dL(1,"capturing")
B.e3=new A.de(B.c0,null)
B.c1=new A.dL(3,"rejected")
B.aT=new A.de(B.c1,null)
B.c2=new A.dL(4,"applied")
B.c_=new A.de(B.c2,null)
B.c3=new A.dL(5,"cancelled")
B.e4=new A.de(B.c3,null)
B.aU=new A.dL(2,"conflict")
B.ap=new A.jr(0,"add")
B.e8=new A.eq(0,"zero")
B.aa=new A.eq(1,"one")
B.ab=new A.js(0,"alpha")
B.F=new A.dM(1,"button")
B.p=new A.dN(0,"normal")
B.eb=new A.b2("settings.back",B.F,"back","back to pause menu",B.p)
B.aq=new A.dM(0,"heading")
B.ec=new A.b2("settings.heading",B.aq,"Settings",null,B.p)
B.ed=new A.b2("settings.controls.heading",B.aq,"Controls",null,B.p)
B.ee=new A.b2("settings.controls.back",B.F,"back","back to settings categories",B.p)
B.ef=new A.b2("pause.heading",B.aq,"Paused",null,B.p)
B.eg=new A.dM(3,"slider")
B.eh=new A.dM(4,"toggle")
B.c4=new A.dM(5,"keybind")
B.ar=new A.dN(5,"disabled")
B.ei=new A.dN(6,"error")
B.ej=new A.dN(7,"destructive")
B.c5=new A.dN(8,"remapping")
B.c6=new A.ho()
B.ek=new A.na()
B.n8=new A.nc()
B.el=new A.jq()
B.c7=new A.no()
B.em=new A.hz(A.Z("hz<0&>"))
B.c8=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.en=function() {
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
B.es=function(getTagFallback) {
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
B.eo=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.er=function(hooks) {
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
B.eq=function(hooks) {
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
B.ep=function(hooks) {
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
B.c9=function(hooks) { return hooks; }

B.k=new A.kb()
B.n9=new A.pr()
B.et=new A.kr()
B.na=new A.q9()
B.eu=new A.qa()
B.ca=new A.qc()
B.ev=new A.cY()
B.aI=new A.cj(1,"gradeLUT")
B.ew=new A.cY()
B.ex=new A.qz()
B.ey=new A.qB()
B.f=new A.qG()
B.cb=new A.l3()
B.md=new A.d2(0,"position")
B.mi=new A.bD(B.md,0,3)
B.dO=new A.d2(1,"normal")
B.mj=new A.bD(B.dO,3,3)
B.me=new A.d2(2,"color")
B.mk=new A.bD(B.me,6,4)
B.mf=new A.d2(4,"alpha")
B.ml=new A.bD(B.mf,10,1)
B.mg=new A.d2(5,"uv0")
B.mm=new A.bD(B.mg,11,2)
B.mh=new A.d2(8,"legacyMaterialEffect")
B.mn=new A.bD(B.mh,13,1)
B.W=s([B.mi,B.mj,B.mk,B.ml,B.mm,B.mn],A.Z("u<bD>"))
B.ac=new A.rJ()
B.aV=new A.lz()
B.z=new A.lM()
B.as=new A.lW()
B.ez=new A.fm(1.3089969389957472,0.1,60)
B.eA=new A.fm(1.0471975511965976,0.1,60)
B.eB=new A.fm(0.8726646259971648,0.08,45)
B.ad=new A.fp(0,"colorOnly")
B.cc=new A.fp(1,"colorAndDepth")
B.aW=new A.fp(2,"depthOnly")
B.aX=new A.jy(1,"srgb")
B.cd=new A.fq(0,"open")
B.eC=new A.fq(1,"committed")
B.eD=new A.fq(2,"aborted")
B.aY=new A.fu(0,"open")
B.eK=new A.fu(1,"committed")
B.eL=new A.fu(2,"rolledBack")
B.at=new A.jD(1,"back")
B.au=new A.jF(0,"less")
B.eN=new A.hw(2,"full")
B.av=new A.bK(0,"open")
B.ce=new A.bK(1,"chain")
B.cf=new A.bK(2,"throughDoor")
B.cg=new A.bK(3,"letterbox")
B.ae=new A.bK(4,"ignore")
B.T=new A.fv(0,"opaque")
B.eT=new A.fv(1,"masked")
B.aZ=new A.fv(2,"blended")
B.eU=new A.fw(!1,B.au,!1,!0,B.aa,B.aa,B.ap,!1,B.at,!0,!1,!0,!0,!0,!0,!1)
B.eV=new A.fw(!0,B.au,!1,!0,B.aa,B.aa,B.ap,!0,B.at,!0,!1,!0,!0,!0,!0,!1)
B.e9=new A.eq(2,"srcAlpha")
B.ea=new A.eq(3,"oneMinusSrcAlpha")
B.eW=new A.fw(!0,B.au,!1,!0,B.e9,B.ea,B.ap,!0,B.at,!0,!1,!0,!0,!0,!0,!1)
B.eX=new A.dR(0)
B.eY=new A.dR(24e5)
B.ch=new A.cc(0,"compliance")
B.eZ=new A.fx(B.ch)
B.ci=new A.cc(1,"rupture")
B.f_=new A.fx(B.ci)
B.cj=new A.cc(2,"synchronisation")
B.f0=new A.fx(B.cj)
B.ck=new A.eu(0,"front")
B.f1=new A.eu(1,"rearService")
B.f2=new A.eu(2,"sideBoundary")
B.f3=new A.eu(3,"roofline")
B.m=new A.dS(0,"north")
B.v=new A.dS(1,"east")
B.l=new A.dS(2,"south")
B.G=new A.dS(3,"west")
B.aw=new A.hD(0,"ground")
B.ax=new A.hD(1,"first")
B.f4=new A.dh(0,"mantle")
B.f5=new A.dh(1,"portal")
B.f7=new A.dh(3,"inventory")
B.cl=new A.dh(4,"aftermath")
B.f6=new A.dh(2,"window")
B.f9=new A.dT(B.f6,"shutter","the shutter")
B.f8=new A.dh(5,"none")
B.fa=new A.dT(B.f8,null,null)
B.fb=new A.G("saved mantle history is malformed",null,null)
B.fc=new A.G("rupture elapsed time is malformed",null,null)
B.fd=new A.G("presentation keys must be strings",null,null)
B.fe=new A.G("unsupported accessibility profile",null,null)
B.ff=new A.G("inventory inspections must be an object",null,null)
B.cm=new A.G("saved mantle state is malformed",null,null)
B.fg=new A.G("inactive rupture has elapsed time",null,null)
B.fh=new A.G("control sensitivity is outside 0.1\u20133.0",null,null)
B.fi=new A.G("invalid action bindings",null,null)
B.fj=new A.G("listener room is empty",null,null)
B.fk=new A.G("control bindings conflict",null,null)
B.fl=new A.G("saved difficulty state is malformed",null,null)
B.fm=new A.G("saved house drift state is malformed",null,null)
B.fn=new A.G("saved sleep record is malformed",null,null)
B.fo=new A.G("UI scale must be between 0.8 and 2.0",null,null)
B.fp=new A.G("unsupported settings store",null,null)
B.fq=new A.G("settings values must be an object",null,null)
B.fr=new A.G("saved day-loop sleepHistory must be a list",null,null)
B.fs=new A.G("invalid anisotropy limit",null,null)
B.ft=new A.G("audio event position is not finite",null,null)
B.fu=new A.G("event sequence must be non-negative",null,null)
B.fv=new A.G("inventory inspection counts are invalid",null,null)
B.fw=new A.G("only keybinds can be remapping",null,null)
B.fx=new A.G("modelScale must be positive and finite",null,null)
B.fy=new A.G("listener position is not finite",null,null)
B.fz=new A.G("invalid action ID",null,null)
B.fA=new A.G("saved window state is malformed",null,null)
B.fB=new A.G("unsupported graphics preset",null,null)
B.fC=new A.G("save run and meta must be objects",null,null)
B.fD=new A.G("saved house state is malformed",null,null)
B.fE=new A.G("saved sleep record must be an object",null,null)
B.fF=new A.G("sound cue must be a non-empty string",null,null)
B.fG=new A.G("saved session run is malformed",null,null)
B.fH=new A.G("save map keys must be strings",null,null)
B.fI=new A.G("unsupported graphics profile",null,null)
B.fJ=new A.G("unsupported audio options",null,null)
B.fK=new A.G("transform.scale must be positive",null,null)
B.fL=new A.G("Escape is reserved for pause navigation",null,null)
B.fM=new A.G("saved day-loop state is malformed",null,null)
B.fN=new A.G("rupture extinguished mantle is unknown",null,null)
B.cn=new A.G("unsupported controls profile",null,null)
B.co=new A.G("saved portal state is malformed",null,null)
B.fO=new A.G("acoustic portal profile is not finite",null,null)
B.fP=new A.G("saved house state does not match this house",null,null)
B.fQ=new A.G("presentation snapshot contains a non-finite number",null,null)
B.fR=new A.G("unsupported gameplay settings profile",null,null)
B.fS=new A.G("save contains a non-finite number",null,null)
B.fT=new A.G("unsupported graphics store",null,null)
B.fU=new A.G("brush component needs an id and label",null,null)
B.fV=new A.G("text.json root must be an object",null,null)
B.fW=new A.G("event kind is empty",null,null)
B.fX=new A.G("invalid control binding token",null,null)
B.fY=new A.G("audio transmission muffle is invalid",null,null)
B.fZ=new A.G("acoustic portal muffle order is invalid",null,null)
B.h_=new A.G("unsupported settings profile",null,null)
B.h0=new A.G("saved session clock is malformed",null,null)
B.h1=new A.G("rupture mantle IDs are malformed",null,null)
B.h2=new A.G("invalid gameplay setting: contextualReminders",null,null)
B.h3=new A.G("invalid screen-reader verbosity",null,null)
B.h4=new A.G("saved sleep record has an unknown enum",null,null)
B.h5=new A.G("audio cue variants are empty",null,null)
B.h6=new A.G("save root must be an object",null,null)
B.h7=new A.G("audio event identity is empty",null,null)
B.h8=new A.G("render capabilities contain invalid limits",null,null)
B.h9=new A.G("saved house overrides are malformed",null,null)
B.V=new A.bV(0,0,0)
B.cO=new A.bV(1,1,1)
B.iQ=s([],t.Fk)
B.bg=s([],t.cv)
B.ha=new A.jS(B.V,B.V,0,1,null,null,B.cO,0,null,B.iQ,B.bg)
B.cp=new A.aH(0,0,0)
B.hb=new A.ev(0,"idle")
B.ay=new A.ev(1,"active")
B.hc=new A.ev(2,"ended")
B.hd=new A.ev(3,"aborted")
B.cq=new A.fy(0,"outside")
B.he=new A.fy(1,"intersects")
B.hf=new A.fy(2,"inside")
B.hg=new A.ex(0,"timeAdvanced")
B.hh=new A.ex(1,"dayEndReached")
B.hi=new A.ex(4,"slept")
B.hj=new A.ex(5,"complianceFloorTripped")
B.b_=new A.di(0,"twentyFourHour")
B.cr=new A.di(1,"twelveHour")
B.cs=new A.dj(0,"important")
B.ct=new A.dj(1,"always")
B.b0=new A.cd(0,"pauseAndMute")
B.cu=new A.dk(0,"press")
B.cv=new A.dk(1,"hold")
B.cw=new A.dl(0,"compact")
B.cx=new A.dl(1,"spacious")
B.cy=new A.cP(1,"standard")
B.cz=new A.cP(2,"detailed")
B.cA=new A.dm(0,"toast")
B.cB=new A.dm(1,"detailed")
B.cC=new A.cQ(1,"readable")
B.hp=new A.hE(0,"vertex")
B.cD=new A.hE(1,"indices")
B.cE=new A.jW(0,"staticDraw")
B.h=new A.hF(0,"ready")
B.U=new A.hF(1,"lost")
B.af=new A.fA(0,"prepared")
B.hq=new A.fA(1,"committed")
B.hr=new A.fA(2,"rolledBack")
B.hs=new A.ey(0,"color")
B.cF=new A.ey(1,"colorAndGlow")
B.ht=new A.ey(2,"colorDepthGlow")
B.b1=new A.ey(3,"depthOnly")
B.az=new A.jY(1,"linear")
B.cG=new A.jZ(0,"clampToEdge")
B.hu=new A.jX(1,1,1,!1,B.az,B.az,B.cG,1)
B.hv=new A.cS(0,"beforeShadow")
B.hw=new A.cS(2,"beforeDepth")
B.cH=new A.cS(3,"afterDepth")
B.cI=new A.cS(4,"beforeWorld")
B.hx=new A.cS(5,"afterWorld")
B.L=new A.cS(6,"afterResolve")
B.hy=new A.cS(9,"beforePresent")
B.cJ=new A.ce(0,"readBeforeWrite")
B.hz=new A.ce(1,"duplicateWriter")
B.hA=new A.ce(2,"sampledMultisampledAttachment")
B.b2=new A.ce(3,"invalidResolve")
B.hB=new A.ce(4,"formatOrSizeMismatch")
B.hC=new A.ce(5,"unversionedReadWrite")
B.hD=new A.ce(6,"invalidHistoryRead")
B.hE=new A.ce(7,"dependencyCycle")
B.hF=new A.ce(8,"missingCapability")
B.cK=new A.cv(0,"high")
B.b3=new A.cv(1,"standard")
B.b4=new A.dU(1,B.b3,"auto",!1,"display","off","high")
B.aA=new A.dV(0,"player")
B.b5=new A.dV(1,"inserted")
B.cL=new A.dV(2,"warden")
B.cM=new A.ez(0,"wrongKind")
B.cN=new A.ez(1,"staleGeneration")
B.hI=new A.ez(2,"doubleRelease")
B.aB=new A.ez(3,"releasedResource")
B.hL=new A.cT("kitchen-range","settle")
B.hM=new A.cT("front-door-knocker","knock")
B.hN=new A.cT("cellar-drain","drip")
B.hO=new A.cT("bedroom-timber","creak")
B.hP=new A.cT("kitchen-pipe","tick")
B.hQ=new A.cT("bathroom-cistern","settle")
B.hR=new A.cT("landing-window","wind")
B.i4=new A.k5(1,"visitor")
B.i8=new A.po(null)
B.i9=new A.pp(null)
B.b6=new A.kd(!1,0,0.85,0.92,1)
B.ia=new A.bV(0.008,0.012,0.024)
B.cP=s([0,2,2,3],t.t)
B.ib=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b7=s([B.cs,B.ct],A.Z("u<dj>"))
B.ic=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b8=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.E=new A.bA(0,"audio")
B.Q=new A.ib(0,"level")
B.lu=new A.b_("master","Master",B.E,B.Q,1,0,1,"audio")
B.lz=new A.b_("voice","Visitor voice",B.E,B.Q,1,0,1,"audio")
B.lq=new A.b_("effects","Effects",B.E,B.Q,1,0,1,"audio")
B.lr=new A.b_("ambience","House ambience",B.E,B.Q,1,0,1,"audio")
B.lv=new A.b_("music","Music",B.E,B.Q,1,0,1,"audio")
B.aJ=new A.bA(1,"display")
B.ly=new A.b_("brightness","Display brightness",B.aJ,B.Q,1,0.6,1.4,"display")
B.ah=new A.ib(1,"toggle")
B.lt=new A.b_("muted","Mute house audio",B.E,B.ah,!1,null,null,"audio")
B.a4=new A.bA(2,"accessibility")
B.lw=new A.b_("mono","Mono-compatible mix",B.a4,B.ah,!1,null,null,"audio")
B.ls=new A.b_("high-contrast","High-contrast interface",B.a4,B.ah,!1,null,null,"display")
B.lx=new A.b_("strong-highlights","Strong focus highlights",B.a4,B.ah,!1,null,null,"display")
B.C=s([B.lu,B.lz,B.lq,B.lr,B.lv,B.ly,B.lt,B.lw,B.ls,B.lx],A.Z("u<b_>"))
B.A=s(["who","verb","object","place","time"],t.s)
B.id=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dX=new A.dc(1,"strong")
B.b9=s([B.bW,B.dX],A.Z("u<dc>"))
B.e5=new A.ep(0,"swap")
B.e6=new A.ep(1,"replace")
B.e7=new A.ep(2,"cancel")
B.ie=s([B.e5,B.e6,B.e7],A.Z("u<ep>"))
B.ig=s([2,5,9,12,16,19],t.t)
B.hk=new A.cd(1,"pauseOnly")
B.hl=new A.cd(2,"continuePlayback")
B.aC=s([B.b0,B.hk,B.hl],A.Z("u<cd>"))
B.ih=s(["uQuantizationBits","uDitherStrength"],t.s)
B.ij=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.ik=s([B.av,B.ce,B.cf,B.cg,B.ae],A.Z("u<bK>"))
B.il=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.im=s(["30","60","display"],t.s)
B.an=new A.c_(0,"full")
B.bR=new A.c_(1,"compressed")
B.bS=new A.c_(2,"off")
B.cQ=s([B.an,B.bR,B.bS],A.Z("u<c_>"))
B.ba=s([B.b_,B.cr],A.Z("u<di>"))
B.io=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e1=new A.dd(1,"reduced")
B.bb=s([B.aR,B.e1],A.Z("u<dd>"))
B.dY=new A.cN(0,"wide")
B.dZ=new A.cN(2,"night")
B.bc=s([B.dY,B.bX,B.dZ],A.Z("u<cN>"))
B.ip=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iA=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cR=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bd=s([B.cw,B.cx],A.Z("u<dl>"))
B.lN=new A.bN(0,"long")
B.dD=new A.bN(1,"short")
B.cS=s([B.lN,B.dD],A.Z("u<bN>"))
B.eI=new A.ca("1 - 9","Select Response",!0)
B.eE=new A.ca("SPACE","Silence Ring",!1)
B.iC=s([B.eI,B.eE],t.sa)
B.Z=new A.bM(0,"visual")
B.bt=new A.bM(1,"graphics")
B.a_=new A.bM(2,"gameplay")
B.bu=new A.bM(3,"controls")
B.H=new A.bM(4,"audio")
B.I=new A.bM(5,"accessibility")
B.iD=s([B.Z,B.bt,B.a_,B.bu,B.H,B.I],A.Z("u<bM>"))
B.iE=s([2.1,4.2,6.3],t.n)
B.iF=s(["master","voice","effects","ambience","music"],t.s)
B.be=s([B.cA,B.cB],A.Z("u<dm>"))
B.iG=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hG=new A.cv(2,"safe")
B.hH=new A.cv(3,"custom")
B.cT=s([B.cK,B.b3,B.hG,B.hH],A.Z("u<cv>"))
B.D=new A.cj(0,"inactive")
B.bE=new A.cj(2,"affineWarp")
B.dw=new A.cj(3,"vertexSnap")
B.bF=new A.cj(4,"tapeGiveup")
B.bG=new A.cj(5,"portalFail")
B.a2=new A.cj(6,"lightsOut")
B.cU=s([B.D,B.aI,B.bE,B.dw,B.bF,B.bG,B.a2],A.Z("u<cj>"))
B.iH=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iI=s([B.aA,B.b5,B.cL],A.Z("u<dV>"))
B.iJ=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.n1=new A.bp("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.n0=new A.bp("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.mX=new A.bp("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.n4=new A.bp("ronnie.response","named","A route card has Ronnie written on its back.")
B.n3=new A.bp("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iK=s([B.n1,B.n0,B.mX,B.n4,B.n3],t.uk)
B.n2=new A.bp("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.n_=new A.bp("ronnie.response","named","The name Ronnie holds when the room does not.")
B.mY=new A.bp("denise.revision","accepted","One correction remains yours to protect.")
B.mV=new A.bp("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iL=s([B.n2,B.n_,B.mY,B.mV],t.uk)
B.M=s([],t.cO)
B.iU=s([],t.Fm)
B.iT=s([],t.op)
B.iM=s([],A.Z("u<cx>"))
B.iO=s([],t.yH)
B.bf=s([],t.b4)
B.X=s([],t.qP)
B.iP=s([],t.u)
B.cW=s([],t.xB)
B.iN=s([],t.El)
B.o=s([],t.s)
B.cX=s([],t.ld)
B.bh=s([],t.E)
B.iV=s([],t.t)
B.iW=s([],t.zz)
B.hK=new A.hI(15,"kitchen",-0.3,0)
B.hJ=new A.hI(19,"spare-room",0,0.3)
B.N=s([B.hK,B.hJ],A.Z("u<hI>"))
B.iY=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lK=new A.bB(0,"bed")
B.lL=new A.bB(1,"chair")
B.lM=new A.bB(2,"floor")
B.cY=s([B.lK,B.lL,B.lM],A.Z("u<bB>"))
B.iZ=s(["high","medium","low"],t.s)
B.e_=new A.cu(1,"headphones")
B.e0=new A.cu(2,"speakers")
B.bi=s([B.bY,B.e_,B.e0,B.bZ],A.Z("u<cu>"))
B.j_=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bj=s([B.cu,B.cv],A.Z("u<dk>"))
B.bs=new A.ci(0,"root")
B.db=new A.bi(0,"pauseMenu")
B.k2=new A.dq(B.bs,B.db,null)
B.j0=s([B.k2],t.bA)
B.bk=s([B.bU,B.a9,B.bV],A.Z("u<cM>"))
B.hn=new A.cQ(0,"instant")
B.ho=new A.cQ(2,"slow")
B.bl=s([B.hn,B.cC,B.ho],A.Z("u<cQ>"))
B.j1=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.j2=s([B.E,B.aJ,B.a4],A.Z("u<bA>"))
B.cZ=s([B.m,B.v,B.l,B.G],A.Z("u<dS>"))
B.R=new A.dw(0,"pbrMaterial")
B.a5=new A.dw(1,"shadowsAndOcclusion")
B.ai=new A.dw(2,"surfaceWeathering")
B.n=new A.dw(3,"atmosphereAndPost")
B.lH=new A.dw(4,"debugView")
B.bm=s([B.R,B.a5,B.ai,B.n,B.lH],A.Z("u<dw>"))
B.bH=new A.b7(0,"depthTest")
B.bI=new A.b7(1,"depthFunc")
B.bJ=new A.b7(2,"depthWrite")
B.bK=new A.b7(3,"blendEnable")
B.bL=new A.b7(4,"blendFunc")
B.bM=new A.b7(5,"blendEquation")
B.bN=new A.b7(6,"cullEnable")
B.bO=new A.b7(7,"cullFace")
B.dG=new A.b7(8,"frontFace")
B.lQ=new A.b7(9,"stencilEnable")
B.dE=new A.b7(10,"colorMask")
B.dF=new A.b7(11,"scissorEnable")
B.j3=s([B.bH,B.bI,B.bJ,B.bK,B.bL,B.bM,B.bN,B.bO,B.dG,B.lQ,B.dE,B.dF],A.Z("u<b7>"))
B.aK=new A.cF(0,"none")
B.lB=new A.cF(1,"albedoOnly")
B.lC=new A.cF(2,"normalsOnly")
B.lD=new A.cF(3,"roughnessOnly")
B.lE=new A.cF(4,"metallicOnly")
B.lF=new A.cF(5,"aoOnly")
B.lG=new A.cF(6,"wireframeOnly")
B.d_=s([B.aK,B.lB,B.lC,B.lD,B.lE,B.lF,B.lG],A.Z("u<cF>"))
B.j4=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eQ=new A.df("A.J.",1.275)
B.eO=new A.df("A.J.",1.53)
B.eR=new A.df("A.J.",1.77)
B.eS=new A.df("A.J.",2.025)
B.eP=new A.df("A.J.",4.8)
B.j5=s([B.eQ,B.eO,B.eR,B.eS,B.eP],t.cO)
B.j6=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.j7=s(["uBloomStrength"],t.s)
B.j8=s(["uLutSize","uStrength"],t.s)
B.j9=s([B.ch,B.ci,B.cj],A.Z("u<cc>"))
B.ja=s(["uTexelSize","uNear","uFar"],t.s)
B.d0=s(["uTexelStep"],t.s)
B.jb=s(["uninitialized"],t.s)
B.hm=new A.cP(0,"minimal")
B.bn=s([B.hm,B.cy,B.cz],A.Z("u<cP>"))
B.mZ=new A.bp("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mU=new A.bp("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mT=new A.bp("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.mW=new A.bp("ronnie.response","named","The route card gives one name its own line.")
B.jc=s([B.mZ,B.mU,B.mT,B.mW],t.uk)
B.a7=new A.bZ(0,"waiting")
B.al=new A.bZ(1,"atDoor")
B.am=new A.bZ(2,"consulting")
B.aN=new A.bZ(3,"resolved")
B.jd=s([B.a7,B.al,B.am,B.aN],A.Z("u<bZ>"))
B.eJ=new A.ca("W A S D","Move",!1)
B.eH=new A.ca("TAB","Journal",!1)
B.eG=new A.ca("CAPS","Shader Lab",!1)
B.eF=new A.ca("ESC","Pause",!1)
B.je=s([B.eJ,B.eH,B.eG,B.eF],t.sa)
B.jf=s(["floor-linoleum","ceiling-stained"],t.s)
B.jT={uAlbedo:0}
B.d1=new A.a3(B.jT,[0],t.I)
B.k_={uSsaoRaw:0,uSceneDepth:1}
B.jg=new A.a3(B.k_,[0,1],t.I)
B.d9={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iz=s(["KeyW","GamepadDpadUp"],t.s)
B.iy=s(["KeyS","GamepadDpadDown"],t.s)
B.iq=s(["KeyA","GamepadDpadLeft"],t.s)
B.ir=s(["KeyD","GamepadDpadRight"],t.s)
B.is=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iw=s(["KeyQ","GamepadB"],t.s)
B.iB=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.iX=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.ix=s(["KeyR","GamepadX"],t.s)
B.it=s(["KeyF","GamepadRB"],t.s)
B.iu=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iv=s(["KeyL"],t.s)
B.ii=s(["Escape","GamepadMenu"],t.s)
B.jh=new A.a3(B.d9,[B.iz,B.iy,B.iq,B.ir,B.is,B.iw,B.iB,B.iX,B.ix,B.it,B.iu,B.iv,B.ii],A.Z("a3<h,D<h>>"))
B.ji=new A.a3(B.d9,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.D)
B.jX={uScene:0,uHistory:1}
B.jj=new A.a3(B.jX,[0,1],t.I)
B.jx={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jk=new A.a3(B.jx,["f8ff05f019166b02150cde34c23a826d99fb13cc","8f974b6767f6a808347348f355375c51132c3969","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.D)
B.jK={aPosition:0,aUvMat:1}
B.d2=new A.a3(B.jK,[0,4],t.I)
B.jY={uScene:0,uLut:1}
B.jl=new A.a3(B.jY,[0,1],t.I)
B.jZ={uSource:0}
B.d3=new A.a3(B.jZ,[0],t.I)
B.jR={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jm=new A.a3(B.jR,[0,1,2,3,4,5,6],t.I)
B.d4=new A.cR([B.Z,"settings.visual",B.bt,"settings.graphics",B.a_,"settings.gameplay",B.bu,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d5=new A.cR([B.Z,"visual",B.bt,"graphics",B.a_,"gameplay",B.bu,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jG={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jn=new A.a3(B.jG,[0,1,2],t.I)
B.k1={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jo=new A.a3(B.k1,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.jM={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i0=new A.bg("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hW=new A.bg("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.i_=new A.bg("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.i2=new A.bg("wallpaper-damp","grime",7106925,0.94,0.76)
B.hX=new A.bg("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i1=new A.bg("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.i3=new A.bg("wallpaper-peeling","grime",9340536,0.91,0.68)
B.hY=new A.bg("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hU=new A.bg("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hV=new A.bg("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hS=new A.bg("floor-concrete","grime",7828331,0.96,0.92)
B.hT=new A.bg("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hZ=new A.bg("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bo=new A.a3(B.jM,[B.i0,B.hW,B.i_,B.i2,B.hX,B.i1,B.i3,B.hY,B.hU,B.hV,B.hS,B.hT,B.hZ],A.Z("a3<h,bg>"))
B.jU={uBloom:0}
B.jp=new A.a3(B.jU,[0],t.I)
B.jV={uSceneDepth:0}
B.jq=new A.a3(B.jV,[0],t.I)
B.jW={uScene:0}
B.jr=new A.a3(B.jW,[0],t.I)
B.O={}
B.d7=new A.a3(B.O,[],A.Z("a3<h,ho>"))
B.d6=new A.a3(B.O,[],t.D)
B.bp=new A.a3(B.O,[],A.Z("a3<h,v>"))
B.w=new A.a3(B.O,[],t.I)
B.nb=new A.a3(B.O,[],A.Z("a3<h,h?>"))
B.js=new A.a3(B.O,[],A.Z("a3<@,@>"))
B.jA={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jt=new A.a3(B.jA,[0,1,2,3,4,5,6],t.I)
B.dc=new A.cD(0,"resume")
B.dd=new A.cD(1,"settings")
B.de=new A.cD(2,"controls")
B.df=new A.cD(3,"save")
B.dg=new A.cD(4,"help")
B.dh=new A.cD(5,"credits")
B.di=new A.cD(6,"back")
B.ju=new A.cR([B.dc,"pause.resume",B.dd,"pause.settings",B.de,"pause.controls",B.df,"pause.save",B.dg,"pause.help",B.dh,"pause.credits",B.di,"pause.back"],A.Z("cR<cD,h>"))
B.jO={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jv=new A.a3(B.jO,[0,1,2,3],t.I)
B.k0={uTex:0}
B.jw=new A.a3(B.k0,[0],t.I)
B.bq=new A.cR([B.aI,1,B.bE,1.5,B.dw,1.5,B.bF,2,B.bG,2,B.a2,4],A.Z("cR<cj,v>"))
B.iR=s([],t.bA)
B.iS=s([],A.Z("u<bi>"))
B.br=new A.e0(B.iR,B.iS,null)
B.da=new A.ci(1,"settings")
B.k3=new A.ci(2,"visual")
B.k4=new A.ci(3,"graphics")
B.k5=new A.ci(4,"gameplay")
B.k6=new A.ci(5,"controls")
B.k7=new A.ci(6,"audio")
B.k8=new A.ci(7,"accessibility")
B.k9=new A.ci(8,"credits")
B.Y=new A.bi(1,"settings")
B.ka=new A.bi(2,"journal")
B.kb=new A.bi(3,"sleep")
B.kc=new A.bi(4,"help")
B.kd=new A.bi(5,"visitor")
B.ke=new A.bi(6,"ending")
B.dj=new A.e1(0,"opened")
B.dk=new A.e1(2,"backed")
B.dl=new A.e1(3,"resumed")
B.kf=new A.e1(4,"dismissed")
B.a0=new A.e1(5,"unchanged")
B.kg=new A.bw("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kh=new A.bw("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.ki=new A.bw("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kj=new A.bw("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kk=new A.bw("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kl=new A.bw("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.km=new A.bw("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kn=new A.bw("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.ko=new A.bw("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kp=new A.ks(0,1,null)
B.kr=new A.kt(1,"high")
B.kq=new A.qb(!1,!0,!0,!0,!1,B.kr,35,256)
B.ks=new A.kx(1,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.bv=new A.eH(0,"safe")
B.P=new A.eH(1,"standard")
B.a1=new A.eH(2,"high")
B.a3=new A.aG(B.O,0,t.M)
B.aD=new A.eG(B.bv,B.a3)
B.jS={shadows:0}
B.lp=new A.aG(B.jS,1,t.M)
B.ku=new A.eG(B.P,B.lp)
B.jD={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lh=new A.aG(B.jD,5,t.M)
B.kv=new A.eG(B.a1,B.lh)
B.kt=new A.eH(4,"shipping")
B.jF={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.li=new A.aG(B.jF,7,t.M)
B.nc=new A.eG(B.kt,B.li)
B.kx=new A.aV(0,1)
B.ky=new A.b0(0.35,0.52,0.88)
B.kz=new A.al(0.46,0.25,0.2)
B.dn=new A.b0(0.22,0.45,0.92)
B.kA=new A.al(0.48,0.4,0.34)
B.kB=new A.al(0.31,0.25,0.23)
B.bw=new A.b0(0.75,0.52,0.42)
B.kC=new A.al(-0.45,-0.45,14737646)
B.kD=new A.b0(0.4,0.65,0.95)
B.bx=new A.b0(0.88,0.96,1)
B.kE=new A.al(0.45,-0.45,16766720)
B.kF=new A.al(0.37,0.33,0.31)
B.kG=new A.b0(0.62,0.48,0.45)
B.kH=new A.al(0.34,0.32,0.29)
B.dp=new A.al(0.38,0.25,0.19)
B.by=new A.b0(0.9,0.8,0.72)
B.aE=new A.b0(0.28,0.16,0.12)
B.kI=new A.al(0.31,0.28,0.24)
B.aF=new A.b0(0.65,0.45,0.35)
B.kJ=new A.al(0.58,0.56,0.5)
B.dq=new A.b0(0.2,0.38,0.9)
B.kK=new A.al(0.44,0.37,0.28)
B.kL=new A.al(0.52,0.5,0.44)
B.kM=new A.al(0.24,0.25,0.27)
B.kN=new A.al(0.28,0.27,0.25)
B.kO=new A.b0(0.35,0.28,0.25)
B.dr=new A.b0(0.52,0.32,0.38)
B.kP=new A.al(0.42,0.4,0.38)
B.kQ=new A.al(0.45,0.45,16117990)
B.kR=new A.al(0.18,0.2,0.21)
B.kS=new A.al(0.2,0.12,0.1)
B.kT=new A.al(-0.45,0.45,13840175)
B.aG=new A.b0(0.35,0.2,0.15)
B.kU=new A.al(0.12,0.15,0.2)
B.ds=new A.eJ(0,"constructed")
B.x=new A.eJ(1,"ready")
B.bz=new A.eJ(2,"lost")
B.dt=new A.eJ(3,"disposed")
B.eM=new A.hw(1,"errorsOnly")
B.kV=new A.kH(B.aD,384,216,1,0,512,32,4,1,B.eM)
B.bA=new A.eK(0,"constructed")
B.kW=new A.eK(1,"initializing")
B.bB=new A.eK(2,"ready")
B.du=new A.eK(3,"contextLost")
B.i=new A.fL(0,"read")
B.j=new A.fL(1,"write")
B.J=new A.fL(2,"historyRead")
B.bC=new A.fM(0,"prepared")
B.kX=new A.fM(1,"committed")
B.kY=new A.fM(2,"rolledBack")
B.r=new A.i9(0,"rgba8")
B.kZ=new A.aJ("dofBlurH",B.r,192,108,1,0)
B.l_=new A.aJ("dofBlurV",B.r,192,108,1,0)
B.l0=new A.aJ("dofOutput",B.r,384,216,1,0)
B.dv=new A.i9(2,"depth24")
B.l1=new A.aJ("shadowMap",B.dv,512,512,1,0)
B.l2=new A.aJ("ssaoRaw",B.r,192,108,1,0)
B.l3=new A.aJ("ssaoBlurred",B.r,192,108,1,0)
B.l4=new A.aJ("gradeOutput",B.r,384,216,1,0)
B.l5=new A.aJ("vhsOutput",B.r,384,216,1,0)
B.l6=new A.aJ("sceneDepth",B.dv,384,216,1,0)
B.l7=new A.aJ("bloomBlurH",B.r,192,108,1,0)
B.l8=new A.aJ("bloomBlurV",B.r,192,108,1,0)
B.l9=new A.aJ("present",B.r,384,216,1,0)
B.bD=new A.aJ("sceneColor",B.r,384,216,1,0)
B.la=new A.aJ("ps1Output",B.r,384,216,1,0)
B.lb=new A.eM(null,"save storage unavailable")
B.lc=new A.eM(null,"save could not be recovered")
B.ld=new A.eM(null,null)
B.jI={WheelUp:0,WheelDown:1}
B.le=new A.aG(B.jI,2,t.M)
B.jC={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.lf=new A.aG(B.jC,4,t.M)
B.jP={open:0,closed:1}
B.lg=new A.aG(B.jP,2,t.M)
B.jB={Escape:0}
B.dx=new A.aG(B.jB,1,t.M)
B.jz={open:0,closed:1,mixed:2}
B.lj=new A.aG(B.jz,3,t.M)
B.jN={front:0,"rear-service":1}
B.lk=new A.aG(B.jN,2,t.M)
B.jQ={overcast:0,rain:1}
B.ll=new A.aG(B.jQ,2,t.M)
B.jL={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lm=new A.aG(B.jL,16,t.M)
B.jJ={Escape:0,Tab:1,F11:2}
B.dy=new A.aG(B.jJ,3,t.M)
B.jH={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.ln=new A.aG(B.jH,5,t.M)
B.jE={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ag=new A.aG(B.jE,7,t.M)
B.jy={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lo=new A.aG(B.jy,9,t.M)
B.dB=new A.eO(2,"link")
B.lA=new A.ic(B.dB,"gl.createProgram() returned null")
B.dz=new A.eO(0,"vertex")
B.dA=new A.eO(1,"fragment")
B.dC=new A.eO(3,"validation")
B.lI=new A.id(0,"full")
B.lJ=new A.id(2,"culled")
B.a6=new A.M(0,1,0)
B.aM=new A.M(0,-1,0)
B.lO=new A.bC(-1,B.a6,B.aM,B.cO,1,1,0.3,0.5)
B.cV=s([],t.n)
B.lP=new A.kS(!1,"","",B.cV,B.cV)
B.dH=new A.e5(0,"resident")
B.dI=new A.e5(1,"pending")
B.dJ=new A.e5(2,"missing")
B.dK=new A.e5(3,"evicted")
B.ak=new A.M(0,0,0)
B.kw=new A.kD(0,0,0,1)
B.B=new A.kY(B.ak,B.kw)
B.lR=A.cr("GC")
B.lS=A.cr("GD")
B.lT=A.cr("o3")
B.lU=A.cr("BH")
B.lV=A.cr("BV")
B.lW=A.cr("BW")
B.lX=A.cr("BX")
B.lY=A.cr("af")
B.lZ=A.cr("I")
B.m_=A.cr("wm")
B.m0=A.cr("CM")
B.m1=A.cr("CN")
B.m2=A.cr("ik")
B.e=new A.d0(0,"float1")
B.aL=new A.d0(1,"float2")
B.q=new A.d0(2,"float3")
B.m3=new A.d0(3,"float4")
B.u=new A.d0(4,"mat4")
B.dL=new A.d0(5,"mat4Array")
B.bP=new A.z(B.e,0)
B.dM=new A.z(B.e,1)
B.S=new A.d0(6,"sampler")
B.y=new A.z(B.S,0)
B.aj=new A.z(B.S,1)
B.dN=new A.z(B.S,2)
B.m4=new A.z(B.S,3)
B.m5=new A.z(B.S,4)
B.m6=new A.z(B.S,5)
B.m7=new A.z(B.S,6)
B.m8=new A.rI(!1)
B.m9=new A.M(0,0,1)
B.ma=new A.M(1,0,0)
B.mb=new A.M(1/0,1/0,1/0)
B.mc=new A.M(-1/0,-1/0,-1/0)
B.dP=new A.d2(6,"tangent4")
B.mo=new A.e8(0,"visitorAnswered")
B.dQ=new A.e8(1,"visitorIgnored")
B.mp=new A.e8(2,"entryVerified")
B.mq=new A.e8(3,"entryContradicted")
B.mr=new A.e8(4,"exposureAccepted")
B.mt=new A.d3(1,"malformedDay")
B.mu=new A.d3(2,"malformedTier")
B.dR=new A.d3(3,"missingTierLines")
B.a8=new A.d3(6,"invalidPhase")
B.mx=new A.bn(B.a8,"No reaction is due.")
B.mF=new A.b9(B.mx)
B.mC=new A.bn(B.a8,"The active visit cannot be chosen.")
B.mG=new A.b9(B.mC)
B.my=new A.bn(B.a8,"The active visit has no line to advance.")
B.mH=new A.b9(B.my)
B.mw=new A.d3(5,"noActiveVisit")
B.mz=new A.bn(B.mw,"There is no active visit.")
B.dS=new A.b9(B.mz)
B.mB=new A.bn(B.a8,"A visit is already active.")
B.mI=new A.b9(B.mB)
B.mv=new A.d3(4,"noArrival")
B.mE=new A.bn(B.mv,"The authored arrival is missing.")
B.mJ=new A.b9(B.mE)
B.mA=new A.bn(B.a8,"That answer is not offered.")
B.mK=new A.b9(B.mA)
B.ms=new A.d3(0,"missingCorpus")
B.mD=new A.bn(B.ms,"The authored visitor corpus is empty.")
B.mL=new A.b9(B.mD)
B.dT=new A.eV(1,"exact")
B.bT=new A.eV(2,"partial")
B.aO=new A.eV(3,"contradiction")
B.mM=new A.eV(0,"skipped")
B.mN=new A.eU(B.mM,B.a3)
B.mO=new A.eU(B.bT,B.a3)
B.mP=new A.ir(B.X,!1)
B.mQ=new A.ir(B.X,!0)
B.dU=new A.it(0,"horizontal")
B.mR=new A.it(1,"vertical")
B.dV=new A.iv(0,"horizontal")
B.mS=new A.iv(1,"vertical")
B.aP=new A.fY(0,"empty")
B.n5=new A.fY(1,"cpuReady")
B.aQ=new A.fY(4,"released")})();(function staticFields(){$.tp=null
$.c7=A.d([],A.Z("u<I>"))
$.yc=null
$.qf=0
$.qg=A.EX()
$.xE=null
$.xD=null
$.A7=null
$.zY=null
$.Af=null
$.vc=null
$.vj=null
$.xe=null
$.tG=A.d([],A.Z("u<D<I>?>"))
$.ha=null
$.j9=null
$.ja=null
$.wP=!1
$.an=B.z
$.yu=""
$.yv=null
$.yq=null
$.pX=null
$.z1=A.ab()
$.f4=A.ab()
$.aW=null
$.tR=A.ab()
$.A=A.ab()
$.cI=A.ab()
$.ac=A.ab()
$.V=A.ab()
$.bG=A.ab()
$.U=A.ab()
$.wy=A.ab()
$.wK=null
$.bs=null
$.wB=!1
$.wX=!1
$.j7=B.aS
$.eh=B.ao
$.v0=!1
$.x6=!1
$.zr=null
$.md=null
$.m9=null
$.ze=0
$.mi=!1
$.zq=!1
$.wQ=0
$.ei=0
$.wD="booting"
$.cq=0
$.f8=0
$.ar="hall"
$.j3=A.ab()
$.h4=A.ab()
$.c2=A.ab()
$.zw=null
$.wY=0
$.x1=1.65
$.ej=null
$.bc=null
$.je=!1
$.cp=A.ab()
$.h6=A.ab()
$.j2=A.ab()
$.m5=A.ab()
$.z3=A.ab()
$.z2=A.ab()
$.ay=A.ab()
$.m6=A.ab()
$.j1=A.ab()
$.m4=A.ab()
$.j4=A.ab()
$.j5=A.ab()
$.f3=A.ab()
$.h5=A.ab()
$.h3=A.ab()
$.j0=A.ab()
$.iZ=A.ab()
$.j_=A.ab()
$.aF=A.ab()
$.m3=A.ab()
$.bb=A.ab()
$.v1=A.a0(t.S)
$.d8=A.d([],t.s)
$.wI=null
$.zO=!1
$.z6=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"GF","Ao",()=>A.A5("_$dart_dartClosure"))
s($,"GE","hj",()=>A.A5("_$dart_dartClosure_dartJSInterop"))
s($,"Hm","AL",()=>A.d([new J.k7()],A.Z("u<ia>")))
s($,"GQ","Ap",()=>A.dz(A.rE({
toString:function(){return"$receiver$"}})))
s($,"GR","Aq",()=>A.dz(A.rE({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"GS","Ar",()=>A.dz(A.rE(null)))
s($,"GT","As",()=>A.dz(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GW","Av",()=>A.dz(A.rE(void 0)))
s($,"GX","Aw",()=>A.dz(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GV","Au",()=>A.dz(A.yr(null)))
s($,"GU","At",()=>A.dz(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"GZ","Ay",()=>A.dz(A.yr(void 0)))
s($,"GY","Ax",()=>A.dz(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"H0","xp",()=>A.D9())
s($,"H4","AD",()=>A.Cc(4096))
s($,"H2","AB",()=>new A.tO().$0())
s($,"H3","AC",()=>new A.tN().$0())
s($,"H1","AA",()=>A.Cb(A.a1(A.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Hf","hk",()=>A.mp(B.lZ))
s($,"GO","xo",()=>{A.Cq()
return $.qf})
s($,"GB","An",()=>B.bD.fQ())
s($,"GK","xn",()=>A.kq(A.d([255,255,255,255],t.t)))
s($,"GH","xk",()=>A.kq(A.d([128,128,255,255],t.t)))
s($,"GG","xj",()=>A.kq(A.d([0,0,0,255],t.t)))
s($,"GI","xl",()=>A.kq(A.d([255,255,0,255],t.t)))
s($,"GJ","xm",()=>A.kq(A.d([255,255,255,255],t.t)))
s($,"Hr","AP",()=>A.im(0,1,0))
s($,"H_","Az",()=>A.D6(A.a0(t.N),0,0,A.im(0,0,0)))
s($,"Ho","AM",()=>A.yh("^[a-z0-9][a-z0-9._-]*$"))
s($,"Hu","fd",()=>{var q=$.yq
if(q==null){A.v9()
A.v9()
A.v9()
A.v9()
q=$.yq=new A.rt()}return q})
s($,"GL","vY",()=>A.w4(B.b_,B.cs,!0,B.b0,B.cu,B.cx,B.cy,B.cA,!0,B.cC))
s($,"Ha","AE",()=>new A.nb())
r($,"zS","da",()=>A.wj(null,null))
r($,"uI","xu",()=>A.k0(null,null))
r($,"wH","fc",()=>A.ft(null,null,!1,1,!1,!1,2,1))
r($,"wL","mq",()=>$.vY())
s($,"Hg","AH",()=>new A.oI())
s($,"Hh","AI",()=>new A.oS())
s($,"Hi","w_",()=>new A.pb(A.o(t.N,t.S)))
s($,"Hc","AF",()=>A.e7().gb_().h(0,"debugPause")==="1")
s($,"H9","jg",()=>A.e7().gb_().h(0,"automation")==="1")
s($,"H6","vZ",()=>A.Fc())
s($,"H5","xq",()=>$.vZ()!=null)
s($,"H7","xr",()=>$.jg()?A.e7().gb_().h(0,"captureMantleId"):null)
s($,"H8","xs",()=>A.e7().gb_().h(0,"captureMantleLit")==="1")
r($,"x0","en",()=>A.im(0,0,0))
r($,"wU","AK",()=>A.im(0,0,0))
r($,"x7","w0",()=>A.im(0,0,0))
s($,"Hb","xt",()=>A.Fd())
s($,"Hk","mr",()=>new A.o4(A.im(0,0,0)))
s($,"Hj","AJ",()=>new A.pB(new A.nK()))
s($,"Hd","cK",()=>new A.om(A.d([],t.s)))
s($,"Hn","hm",()=>{var q=new A.rh(B.aK)
q.f=A.Z("D<e4>").a(A.d([A.a7(B.R,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a7(B.R,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a7(B.R,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a7(B.R,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a7(B.R,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a7(B.a5,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a7(B.a5,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a7(B.a5,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a7(B.a5,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a7(B.a5,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a7(B.ai,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a7(B.ai,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a7(B.ai,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a7(B.ai,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a7(B.n,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a7(B.n,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a7(B.n,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a7(B.n,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a7(B.n,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a7(B.n,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a7(B.n,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a7(B.n,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a7(B.n,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a7(B.n,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a7(B.n,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a7(B.n,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a7(B.n,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a7(B.n,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a7(B.n,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a7(B.n,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a7(B.n,!0,0.01,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a7(B.n,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a7(B.n,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a7(B.n,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a7(B.n,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a7(B.R,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.Z("u<e4>")))
return q})
s($,"Hq","AO",()=>new A.rg(A.o(t.N,t.z)))
s($,"Hp","AN",()=>new A.qi(A.Cs(520588),B.b6))
s($,"He","AG",()=>new A.oE())
s($,"Hl","hl",()=>new A.q0(B.br))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fH,ArrayBuffer:A.fG,ArrayBufferView:A.hZ,DataView:A.kj,Float32Array:A.hW,Float64Array:A.kk,Int16Array:A.kl,Int32Array:A.km,Int8Array:A.kn,Uint16Array:A.ko,Uint32Array:A.kp,Uint8ClampedArray:A.eD,CanvasPixelArray:A.eD,Uint8Array:A.i_})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.iE.$nativeSuperclassTag="ArrayBufferView"
A.hX.$nativeSuperclassTag="ArrayBufferView"
A.iF.$nativeSuperclassTag="ArrayBufferView"
A.iG.$nativeSuperclassTag="ArrayBufferView"
A.hY.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.vk
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
