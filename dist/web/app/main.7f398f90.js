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
if(a[b]!==s){A.G8(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.wY(b)
return new s(c,this)}:function(){if(s===null)s=A.wY(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.wY(a).prototype
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
x3(a,b,c,d){return{i:a,p:b,e:c,x:d}},
x_(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.x1==null){A.FR()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.yj("Return interceptor for "+A.A(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.t1
if(o==null)o=$.t1=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.FV(a)
if(p!=null)return p
if(typeof a=="function")return B.ic
s=Object.getPrototypeOf(a)
if(s==null)return B.dn
if(s===Object.prototype)return B.dn
if(typeof q=="function"){o=$.t1
if(o==null)o=$.t1=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bM,enumerable:false,writable:true,configurable:true})
return B.bM}return B.bM},
xM(a,b){if(a<0||a>4294967295)throw A.b(A.aW(a,0,4294967295,"length",null))
return J.xO(new Array(a),b)},
xN(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
xL(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("r<0>"))},
xO(a,b){var s=A.c(a,b.i("r<0>"))
s.$flags=1
return s},
BK(a,b){var s=t.hO
return J.vC(s.a(a),s.a(b))},
xQ(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
BL(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xQ(r))break;++b}return b},
BM(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xQ(q))break}return b},
ej(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hy.prototype
return J.k_.prototype}if(typeof a=="string")return J.dU.prototype
if(a==null)return J.hz.prototype
if(typeof a=="boolean")return J.jZ.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.hD.prototype
if(typeof a=="bigint")return J.hB.prototype
return a}if(a instanceof A.Q)return a
return J.x_(a)},
bc(a){if(typeof a=="string")return J.dU.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.hD.prototype
if(typeof a=="bigint")return J.hB.prototype
return a}if(a instanceof A.Q)return a
return J.x_(a)},
c8(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.hD.prototype
if(typeof a=="bigint")return J.hB.prototype
return a}if(a instanceof A.Q)return a
return J.x_(a)},
zU(a){if(typeof a=="number")return J.fu.prototype
if(typeof a=="string")return J.dU.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.eO.prototype
return a},
zV(a){if(typeof a=="string")return J.dU.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.eO.prototype
return a},
xi(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.zU(a).ak(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ej(a).a5(a,b)},
aQ(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bc(a).h(a,b)},
bp(a,b,c){return J.c8(a).k(a,b,c)},
hd(a,b){return J.c8(a).l(a,b)},
AF(a,b){return J.zV(a).fu(a,b)},
vB(a,b){return J.c8(a).W(a,b)},
AG(a,b){return J.c8(a).cF(a,b)},
vC(a,b){return J.zU(a).H(a,b)},
xj(a,b){return J.bc(a).q(a,b)},
md(a,b){return J.c8(a).a0(a,b)},
AH(a,b){return J.c8(a).a8(a,b)},
xk(a){return J.c8(a).gU(a)},
az(a){return J.ej(a).gN(a)},
me(a){return J.bc(a).gR(a)},
AI(a){return J.bc(a).gX(a)},
M(a){return J.c8(a).gu(a)},
cI(a){return J.bc(a).gt(a)},
fa(a){return J.ej(a).ga4(a)},
xl(a,b){return J.c8(a).Z(a,b)},
xm(a,b,c){return J.c8(a).ce(a,b,c)},
AJ(a,b){return J.bc(a).st(a,b)},
AK(a,b){return J.c8(a).O(a,b)},
AL(a,b){return J.zV(a).aS(a,b)},
d9(a){return J.ej(a).p(a)},
xn(a,b){return J.c8(a).e2(a,b)},
jX:function jX(){},
jZ:function jZ(){},
hz:function hz(){},
hC:function hC(){},
dW:function dW(){},
kk:function kk(){},
eO:function eO(){},
dV:function dV(){},
hB:function hB(){},
hD:function hD(){},
r:function r(a){this.$ti=a},
jY:function jY(){},
oI:function oI(a){this.$ti=a},
em:function em(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fu:function fu(){},
hy:function hy(){},
k_:function k_(){},
dU:function dU(){}},A={vR:function vR(){},
uJ(){return $},
AW(a,b,c){if(t.he.b(a))return new A.im(a,b.i("@<0>").K(c).i("im<1,2>"))
return new A.ep(a,b.i("@<0>").K(c).i("ep<1,2>"))},
xU(a){return new A.fv("Field '"+a+"' has been assigned during initialization.")},
av(a){return new A.fv("Field '"+a+"' has not been initialized.")},
BO(a){return new A.fv("Field '"+a+"' has already been initialized.")},
uO(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aL(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ia(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f6(a,b,c){return a},
x2(a){var s,r
for(s=$.c6.length,r=0;r<s;++r)if(a===$.c6[r])return!0
return!1},
kN(a,b,c,d){A.kt(b,"start")
if(c!=null){A.kt(c,"end")
if(b>c)A.i(A.aW(b,0,c,"start",null))}return new A.i9(a,b,c,d.i("i9<0>"))},
k5(a,b,c,d){if(t.he.b(a))return new A.dd(a,b,c.i("@<0>").K(d).i("dd<1,2>"))
return new A.cw(a,b,c.i("@<0>").K(d).i("cw<1,2>"))},
cu(){return new A.fK("No element")},
xK(){return new A.fK("Too many elements")},
kI(a,b,c,d,e){if(c-b<=32)A.Ct(a,b,c,d,e)
else A.Cs(a,b,c,d,e)},
Ct(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.bc(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aJ()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Cs(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.a3(a4+a5,2),f=g-j,e=g+j,d=J.bc(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aJ()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.aa(a6.$2(b,a0),0)
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
A.kI(a3,a4,r-2,a6,a7)
A.kI(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.aa(a6.$2(d.h(a3,r),b),0))++r
while(J.aa(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.kI(a3,r,q,a6,a7)}else A.kI(a3,r,q,a6,a7)},
e7:function e7(){},
hg:function hg(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b){this.a=a
this.$ti=b},
im:function im(a,b){this.a=a
this.$ti=b},
ik:function ik(){},
rL:function rL(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.$ti=b},
fv:function fv(a){this.a=a},
dN:function dN(a){this.a=a},
qf:function qf(){},
R:function R(){},
a7:function a7(){},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
dd:function dd(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ho:function ho(a){this.$ti=a},
dz:function dz(a,b){this.a=a
this.$ti=b},
ih:function ih(a,b){this.a=a
this.$ti=b},
au:function au(){},
cY:function cY(){},
fM:function fM(){},
eJ:function eJ(a,b){this.a=a
this.$ti=b},
iP:function iP(){},
br(a,b,c){var s,r,q,p,o,n,m,l=A.aD(a.ga1(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.v)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aD(a.gaQ(),!0,c)
m=new A.a2(q,n,b.i("@<0>").K(c).i("a2<1,2>"))
m.$keys=l
return m}return new A.hj(A.aJ(a,b,c),b.i("@<0>").K(c).i("hj<1,2>"))},
B1(){throw A.b(A.b5("Cannot modify unmodifiable Map"))},
B2(){throw A.b(A.b5("Cannot modify constant Set"))},
Ac(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
FU(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
A(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d9(a)
return s},
hW(a){var s,r=$.y2
if(r==null)r=$.y2=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dp(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eE(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bs(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kq(a){var s,r,q,p
if(a instanceof A.Q)return A.bB(A.bN(a),null)
s=J.ej(a)
if(s===B.ib||s===B.id||t.qF.b(a)){r=B.c4(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bB(A.bN(a),null)},
y5(a){var s,r,q
if(a==null||typeof a=="number"||A.bo(a))return J.d9(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dM)return a.p(0)
if(a instanceof A.b8)return a.fk(!0)
s=$.AB()
for(r=0;r<1;++r){q=s[r].mP(a)
if(q!=null)return q}return"Instance of '"+A.kq(a)+"'"},
C1(){return Date.now()},
C8(){var s,r
if($.pN!==0)return
$.pN=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pN=1e6
$.pO=new A.pM(r)},
C0(){if(!!self.location)return self.location.href
return null},
C9(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dt(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aW(a,0,1114111,null,null))},
fD(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
C7(a){var s=A.fD(a).getUTCFullYear()+0
return s},
C5(a){var s=A.fD(a).getUTCMonth()+1
return s},
y3(a){var s=A.fD(a).getUTCDate()+0
return s},
y4(a){var s=A.fD(a).getUTCHours()+0
return s},
C4(a){var s=A.fD(a).getUTCMinutes()+0
return s},
C6(a){var s=A.fD(a).getUTCSeconds()+0
return s},
C3(a){var s=A.fD(a).getUTCMilliseconds()+0
return s},
C2(a){var s=a.$thrownJsError
if(s==null)return null
return A.cG(s)},
y6(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aC(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
uP(a){throw A.b(A.wX(a))},
d(a,b){if(a==null)J.cI(a)
throw A.b(A.uL(a,b))},
uL(a,b){var s,r="index"
if(!A.aU(b))return new A.cq(!0,b,r,null)
s=A.e(J.cI(a))
if(b<0||b>=s)return A.oA(b,s,a,r)
return A.y8(b,r)},
FJ(a,b,c){if(a>c)return A.aW(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aW(b,a,c,"end",null)
return new A.cq(!0,b,"end",null)},
wX(a){return new A.cq(!0,a,null,null)},
b(a){return A.aC(a,new Error())},
aC(a,b){var s
if(a==null)a=new A.dw()
b.dartException=a
s=A.Gb
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Gb(){return J.d9(this.dartException)},
i(a,b){throw A.aC(a,b==null?new Error():b)},
bO(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.i(A.E1(a,b,c),s)},
E1(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ic("'"+s+"': Cannot "+o+" "+l+k+n)},
v(a){throw A.b(A.at(a))},
dx(a){var s,r,q,p,o,n
a=A.A7(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rf(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rg(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yi(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vS(a,b){var s=b==null,r=s?null:b.method
return new A.k0(a,r,s?null:b.receiver)},
as(a){var s
if(a==null)return new A.pq(a)
if(a instanceof A.hp){s=a.a
return A.ek(a,s==null?A.f3(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ek(a,a.dartException)
return A.Fh(a)},
ek(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Fh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dt(r,16)&8191)===10)switch(q){case 438:return A.ek(a,A.vS(A.A(s)+" (Error "+q+")",null))
case 445:case 5007:A.A(s)
return A.ek(a,new A.hQ())}}if(a instanceof TypeError){p=$.Af()
o=$.Ag()
n=$.Ah()
m=$.Ai()
l=$.Al()
k=$.Am()
j=$.Ak()
$.Aj()
i=$.Ao()
h=$.An()
g=p.aZ(s)
if(g!=null)return A.ek(a,A.vS(A.q(s),g))
else{g=o.aZ(s)
if(g!=null){g.method="call"
return A.ek(a,A.vS(A.q(s),g))}else if(n.aZ(s)!=null||m.aZ(s)!=null||l.aZ(s)!=null||k.aZ(s)!=null||j.aZ(s)!=null||m.aZ(s)!=null||i.aZ(s)!=null||h.aZ(s)!=null){A.q(s)
return A.ek(a,new A.hQ())}}return A.ek(a,new A.kS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.i6()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ek(a,new A.cq(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.i6()
return a},
cG(a){var s
if(a instanceof A.hp)return a.b
if(a==null)return new A.iD(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iD(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mb(a){if(a==null)return J.az(a)
if(typeof a=="object")return A.hW(a)
return J.az(a)},
FD(a){if(typeof a=="number")return B.c.gN(a)
if(a instanceof A.lR)return A.hW(a)
if(a instanceof A.b8)return a.gN(a)
return A.mb(a)},
zS(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
FO(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Es(a,b,c,d,e,f){t.BO.a(a)
switch(A.e(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.rN("Unsupported number of arguments for wrapped closure"))},
h5(a,b){var s=a.$identity
if(!!s)return s
s=A.FE(a,b)
a.$identity=s
return s},
FE(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Es)},
B0(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kM().constructor.prototype):Object.create(new A.fb(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xt(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.AX(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xt(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
AX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.AS)}throw A.b("Error in functionType of tearoff")},
AY(a,b,c,d){var s=A.xs
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xt(a,b,c,d){if(c)return A.B_(a,b,d)
return A.AY(b.length,d,a,b)},
AZ(a,b,c,d){var s=A.xs,r=A.AT
switch(b?-1:a){case 0:throw A.b(new A.kz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
B_(a,b,c){var s,r
if($.xq==null)$.xq=A.xp("interceptor")
if($.xr==null)$.xr=A.xp("receiver")
s=b.length
r=A.AZ(s,c,a,b)
return r},
wY(a){return A.B0(a)},
AS(a,b){return A.iH(v.typeUniverse,A.bN(a.a),b)},
xs(a){return a.a},
AT(a){return a.b},
xp(a){var s,r,q,p=new A.fb("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
zW(a){return v.getIsolateTag(a)},
Ab(){return v.G},
H3(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
FV(a){var s,r,q,p,o,n=A.q($.zY.$1(a)),m=$.uM[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uT[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.an($.zO.$2(a,n))
if(q!=null){m=$.uM[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uT[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vn(s)
$.uM[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.uT[n]=s
return s}if(p==="-"){o=A.vn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.A5(a,s)
if(p==="*")throw A.b(A.yj(n))
if(v.leafTags[n]===true){o=A.vn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.A5(a,s)},
A5(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.x3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vn(a){return J.x3(a,!1,null,!!a.$ibR)},
FX(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vn(s)
else return J.x3(s,c,null,null)},
FR(){if(!0===$.x1)return
$.x1=!0
A.FS()},
FS(){var s,r,q,p,o,n,m,l
$.uM=Object.create(null)
$.uT=Object.create(null)
A.FQ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.A6.$1(o)
if(n!=null){m=A.FX(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
FQ(){var s,r,q,p,o,n,m=B.eq()
m=A.h4(B.er,A.h4(B.es,A.h4(B.c5,A.h4(B.c5,A.h4(B.et,A.h4(B.eu,A.h4(B.ev(B.c4),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.zY=new A.uQ(p)
$.zO=new A.uR(o)
$.A6=new A.uS(n)},
h4(a,b){return a(b)||b},
Db(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
FG(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xR(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a1("Illegal RegExp pattern ("+String(o)+")",a,null))},
G6(a,b,c){var s=a.indexOf(b,c)
return s>=0},
FM(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
A7(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
x5(a,b,c){var s=A.G7(a,b,c)
return s},
G7(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.A7(b),"g"),A.FM(c))},
aM:function aM(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
cj:function cj(a){this.a=a},
hj:function hj(a,b){this.a=a
this.$ti=b},
fi:function fi(){},
n1:function n1(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
eW:function eW(a,b){this.a=a
this.$ti=b},
eX:function eX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cO:function cO(a,b){this.a=a
this.$ti=b},
hk:function hk(){},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
pM:function pM(a){this.a=a},
i1:function i1(){},
rf:function rf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hQ:function hQ(){},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a){this.a=a},
pq:function pq(a){this.a=a},
hp:function hp(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a
this.b=null},
dM:function dM(){},
jl:function jl(){},
jm:function jm(){},
kP:function kP(){},
kM:function kM(){},
fb:function fb(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
ce:function ce(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oR:function oR(a){this.a=a},
p2:function p2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
am:function am(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b,c,d){var _=this
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
hE:function hE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
uQ:function uQ(a){this.a=a},
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
b8:function b8(){},
eb:function eb(){},
ec:function ec(){},
f_:function f_(){},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lw:function lw(a){this.b=a},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
lc:function lc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
i8:function i8(a,b){this.a=a
this.c=b},
lN:function lN(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function lO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
G8(a){throw A.aC(A.xU(a),new Error())},
p(){throw A.aC(A.av(""),new Error())},
aV(){throw A.aC(A.BO(""),new Error())},
x6(){throw A.aC(A.xU(""),new Error())},
a8(){var s=new A.rM()
return s.b=s},
rM:function rM(){this.b=null},
a_(a){return a},
BW(a){return new Int8Array(a)},
BX(a){return new Uint8Array(a)},
kg(a){return new Uint8Array(A.a_(a))},
dD(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.uL(b,a))},
DP(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.FJ(a,b,c))
return b},
fB:function fB(){},
fA:function fA(){},
hO:function hO(){},
k9:function k9(){},
b1:function b1(){},
hM:function hM(){},
hN:function hN(){},
hL:function hL(){},
ka:function ka(){},
kb:function kb(){},
kc:function kc(){},
kd:function kd(){},
ke:function ke(){},
kf:function kf(){},
eC:function eC(){},
hP:function hP(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
w1(a,b){var s=b.c
return s==null?b.c=A.iF(a,"bQ",[b.x]):s},
yb(a){var s=a.w
if(s===6||s===7)return A.yb(a.x)
return s===11||s===12},
Ck(a){return a.as},
A4(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
X(a){return A.to(v.typeUniverse,a,!1)},
f5(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.f5(a1,s,a3,a4)
if(r===s)return a2
return A.yJ(a1,r,!0)
case 7:s=a2.x
r=A.f5(a1,s,a3,a4)
if(r===s)return a2
return A.yI(a1,r,!0)
case 8:q=a2.y
p=A.h2(a1,q,a3,a4)
if(p===q)return a2
return A.iF(a1,a2.x,p)
case 9:o=a2.x
n=A.f5(a1,o,a3,a4)
m=a2.y
l=A.h2(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wc(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.h2(a1,j,a3,a4)
if(i===j)return a2
return A.yK(a1,k,i)
case 11:h=a2.x
g=A.f5(a1,h,a3,a4)
f=a2.y
e=A.Fd(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yH(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.h2(a1,d,a3,a4)
o=a2.x
n=A.f5(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wd(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jc("Attempted to substitute unexpected RTI kind "+a0))}},
h2(a,b,c,d){var s,r,q,p,o=b.length,n=A.ts(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.f5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Fe(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ts(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.f5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Fd(a,b,c,d){var s,r=b.a,q=A.h2(a,r,c,d),p=b.b,o=A.h2(a,p,c,d),n=b.c,m=A.Fe(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lp()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
wZ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.FP(s)
return a.$S()}return null},
FT(a,b){var s
if(A.yb(b))if(a instanceof A.dM){s=A.wZ(a)
if(s!=null)return s}return A.bN(a)},
bN(a){if(a instanceof A.Q)return A.o(a)
if(Array.isArray(a))return A.E(a)
return A.wy(J.ej(a))},
E(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.wy(a)},
wy(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Ep(a,s)},
Ep(a,b){var s=a instanceof A.dM?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Dl(v.typeUniverse,s.name)
b.$ccache=r
return r},
FP(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.to(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
x0(a){return A.d6(A.o(a))},
wT(a){var s
if(a instanceof A.b8)return a.eS()
s=a instanceof A.dM?A.wZ(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fa(a).a
if(Array.isArray(a))return A.E(a)
return A.bN(a)},
d6(a){var s=a.r
return s==null?a.r=new A.lR(a):s},
FN(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iH(v.typeUniverse,A.wT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.yL(v.typeUniverse,s,A.wT(q[r]))}return A.iH(v.typeUniverse,s,a)},
cn(a){return A.d6(A.to(v.typeUniverse,a,!1))},
Eo(a){var s=this
s.b=A.F8(s)
return s.b(a)},
F8(a){var s,r,q,p,o
if(a===t.K)return A.Ey
if(A.f7(a))return A.ED
s=a.w
if(s===6)return A.Ef
if(s===1)return A.zo
if(s===7)return A.Et
r=A.F7(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f7)){a.f="$i"+q
if(q==="C")return A.Ew
if(a===t.m)return A.Ev
return A.EC}}else if(s===10){p=A.FG(a.x,a.y)
o=p==null?A.zo:p
return o==null?A.f3(o):o}return A.Ed},
F7(a){if(a.w===8){if(a===t.S)return A.aU
if(a===t.i||a===t.o)return A.Ex
if(a===t.N)return A.EB
if(a===t.y)return A.bo}return null},
En(a){var s=this,r=A.Ec
if(A.f7(s))r=A.DJ
else if(s===t.K)r=A.f3
else if(A.h7(s)){r=A.Ee
if(s===t.lo)r=A.z6
else if(s===t.dR)r=A.an
else if(s===t.k7)r=A.z4
else if(s===t.s7)r=A.wj
else if(s===t.u6)r=A.z5
else if(s===t.gt)r=A.D}else if(s===t.S)r=A.e
else if(s===t.N)r=A.q
else if(s===t.y)r=A.O
else if(s===t.o)r=A.af
else if(s===t.i)r=A.bm
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
Ed(a){var s=this
if(a==null)return A.h7(s)
return A.A0(v.typeUniverse,A.FT(a,s),s)},
Ef(a){if(a==null)return!0
return this.x.b(a)},
EC(a){var s,r=this
if(a==null)return A.h7(r)
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.ej(a)[s]},
Ew(a){var s,r=this
if(a==null)return A.h7(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.ej(a)[s]},
Ev(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.Q)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zn(a){if(typeof a=="object"){if(a instanceof A.Q)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ec(a){var s=this
if(a==null){if(A.h7(s))return a}else if(s.b(a))return a
throw A.aC(A.zb(a,s),new Error())},
Ee(a){var s=this
if(a==null||s.b(a))return a
throw A.aC(A.zb(a,s),new Error())},
zb(a,b){return new A.fT("TypeError: "+A.yz(a,A.bB(b,null)))},
zQ(a,b,c,d){if(A.A0(v.typeUniverse,a,b))return a
throw A.aC(A.Dd("The type argument '"+A.bB(a,null)+"' is not a subtype of the type variable bound '"+A.bB(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yz(a,b){return A.jB(a)+": type '"+A.bB(A.wT(a),null)+"' is not a subtype of type '"+b+"'"},
Dd(a){return new A.fT("TypeError: "+a)},
ck(a,b){return new A.fT("TypeError: "+A.yz(a,b))},
Et(a){var s=this
return s.x.b(a)||A.w1(v.typeUniverse,s).b(a)},
Ey(a){return a!=null},
f3(a){if(a!=null)return a
throw A.aC(A.ck(a,"Object"),new Error())},
ED(a){return!0},
DJ(a){return a},
zo(a){return!1},
bo(a){return!0===a||!1===a},
O(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aC(A.ck(a,"bool"),new Error())},
z4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aC(A.ck(a,"bool?"),new Error())},
bm(a){if(typeof a=="number")return a
throw A.aC(A.ck(a,"double"),new Error())},
z5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aC(A.ck(a,"double?"),new Error())},
aU(a){return typeof a=="number"&&Math.floor(a)===a},
e(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aC(A.ck(a,"int"),new Error())},
z6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aC(A.ck(a,"int?"),new Error())},
Ex(a){return typeof a=="number"},
af(a){if(typeof a=="number")return a
throw A.aC(A.ck(a,"num"),new Error())},
wj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aC(A.ck(a,"num?"),new Error())},
EB(a){return typeof a=="string"},
q(a){if(typeof a=="string")return a
throw A.aC(A.ck(a,"String"),new Error())},
an(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aC(A.ck(a,"String?"),new Error())},
a(a){if(A.zn(a))return a
throw A.aC(A.ck(a,"JSObject"),new Error())},
D(a){if(a==null)return a
if(A.zn(a))return a
throw A.aC(A.ck(a,"JSObject?"),new Error())},
zE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bB(a[q],b)
return s},
EX(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bB(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zf(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bB(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bB(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bB(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bB(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bB(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bB(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bB(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bB(a.x,b)+">"
if(l===8){p=A.Fg(a.x)
o=a.y
return o.length>0?p+("<"+A.zE(o,b)+">"):p}if(l===10)return A.EX(a,b)
if(l===11)return A.zf(a,b,null)
if(l===12)return A.zf(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Fg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Dm(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Dl(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.to(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iG(a,5,"#")
q=A.ts(s)
for(p=0;p<s;++p)q[p]=r
o=A.iF(a,b,q)
n[b]=o
return o}else return m},
Dk(a,b){return A.yT(a.tR,b)},
Dj(a,b){return A.yT(a.eT,b)},
to(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yE(A.yC(a,null,b,!1))
r.set(b,s)
return s},
iH(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yE(A.yC(a,b,c,!0))
q.set(c,r)
return r},
yL(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wc(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ee(a,b){b.a=A.En
b.b=A.Eo
return b},
iG(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cC(null,null)
s.w=b
s.as=c
r=A.ee(a,s)
a.eC.set(c,r)
return r},
yJ(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Dh(a,b,r,c)
a.eC.set(r,s)
return s},
Dh(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f7(b))if(!(b===t.d||b===t.T))if(s!==6)r=s===7&&A.h7(b.x)
if(r)return b
else if(s===1)return t.d}q=new A.cC(null,null)
q.w=6
q.x=b
q.as=c
return A.ee(a,q)},
yI(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Df(a,b,r,c)
a.eC.set(r,s)
return s},
Df(a,b,c,d){var s,r
if(d){s=b.w
if(A.f7(b)||b===t.K)return b
else if(s===1)return A.iF(a,"bQ",[b])
else if(b===t.d||b===t.T)return t.eZ}r=new A.cC(null,null)
r.w=7
r.x=b
r.as=c
return A.ee(a,r)},
Di(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cC(null,null)
s.w=13
s.x=b
s.as=q
r=A.ee(a,s)
a.eC.set(q,r)
return r},
iE(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
De(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iF(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cC(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ee(a,r)
a.eC.set(p,q)
return q},
wc(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cC(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ee(a,o)
a.eC.set(q,n)
return n},
yK(a,b,c){var s,r,q="+"+(b+"("+A.iE(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cC(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ee(a,s)
a.eC.set(q,r)
return r},
yH(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iE(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iE(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.De(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cC(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ee(a,p)
a.eC.set(r,o)
return o},
wd(a,b,c,d){var s,r=b.as+("<"+A.iE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Dg(a,b,c,r,d)
a.eC.set(r,s)
return s},
Dg(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ts(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.f5(a,b,r,0)
m=A.h2(a,c,r,0)
return A.wd(a,n,m,c!==m)}}l=new A.cC(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ee(a,l)},
yC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yE(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.D6(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yD(a,r,l,k,!1)
else if(q===46)r=A.yD(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eZ(a.u,a.e,k.pop()))
break
case 94:k.push(A.Di(a.u,k.pop()))
break
case 35:k.push(A.iG(a.u,5,"#"))
break
case 64:k.push(A.iG(a.u,2,"@"))
break
case 126:k.push(A.iG(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.D8(a,k)
break
case 38:A.D7(a,k)
break
case 63:p=a.u
k.push(A.yJ(p,A.eZ(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yI(p,A.eZ(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.D5(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yF(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Da(a.u,a.e,o)
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
return A.eZ(a.u,a.e,m)},
D6(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yD(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Dm(s,o.x)[p]
if(n==null)A.i('No "'+p+'" in "'+A.Ck(o)+'"')
d.push(A.iH(s,o,n))}else d.push(p)
return m},
D8(a,b){var s,r=a.u,q=A.yB(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iF(r,p,q))
else{s=A.eZ(r,a.e,p)
switch(s.w){case 11:b.push(A.wd(r,s,q,a.n))
break
default:b.push(A.wc(r,s,q))
break}}},
D5(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yB(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eZ(p,a.e,o)
q=new A.lp()
q.a=s
q.b=n
q.c=m
b.push(A.yH(p,r,q))
return
case-4:b.push(A.yK(p,b.pop(),s))
return
default:throw A.b(A.jc("Unexpected state under `()`: "+A.A(o)))}},
D7(a,b){var s=b.pop()
if(0===s){b.push(A.iG(a.u,1,"0&"))
return}if(1===s){b.push(A.iG(a.u,4,"1&"))
return}throw A.b(A.jc("Unexpected extended operation "+A.A(s)))},
yB(a,b){var s=b.splice(a.p)
A.yF(a.u,a.e,s)
a.p=b.pop()
return s},
eZ(a,b,c){if(typeof c=="string")return A.iF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.D9(a,b,c)}else return c},
yF(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eZ(a,b,c[s])},
Da(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eZ(a,b,c[s])},
D9(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jc("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jc("Bad index "+c+" for "+b.p(0)))},
A0(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aO(a,b,null,c,null)
r.set(c,s)}return s},
aO(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f7(d))return!0
s=b.w
if(s===4)return!0
if(A.f7(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aO(a,c[b.x],c,d,e))return!0
q=d.w
p=t.d
if(b===p||b===t.T){if(q===7)return A.aO(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aO(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aO(a,b.x,c,d,e))return!1
return A.aO(a,A.w1(a,b),c,d,e)}if(s===6)return A.aO(a,p,c,d,e)&&A.aO(a,b.x,c,d,e)
if(q===7){if(A.aO(a,b,c,d.x,e))return!0
return A.aO(a,b,c,A.w1(a,d),e)}if(q===6)return A.aO(a,b,c,p,e)||A.aO(a,b,c,d.x,e)
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
if(!A.aO(a,j,c,i,e)||!A.aO(a,i,e,j,c))return!1}return A.zm(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zm(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Eu(a,b,c,d,e)}if(o&&q===10)return A.Ez(a,b,c,d,e)
return!1},
zm(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aO(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aO(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aO(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aO(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aO(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Eu(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iH(a,b,r[o])
return A.z2(a,p,null,c,d.y,e)}return A.z2(a,b.y,null,c,d.y,e)},
z2(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aO(a,b[s],d,e[s],f))return!1
return!0},
Ez(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aO(a,r[s],c,q[s],e))return!1
return!0},
h7(a){var s=a.w,r=!0
if(!(a===t.d||a===t.T))if(!A.f7(a))if(s!==6)r=s===7&&A.h7(a.x)
return r},
f7(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yT(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ts(a){return a>0?new Array(a):v.typeUniverse.sEA},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lp:function lp(){this.c=this.b=this.a=null},
lR:function lR(a){this.a=a},
ln:function ln(){},
fT:function fT(a){this.a=a},
CZ(){var s,r,q
if(self.scheduleImmediate!=null)return A.Ft()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.h5(new A.rH(s),1)).observe(r,{childList:true})
return new A.rG(s,r,q)}else if(self.setImmediate!=null)return A.Fu()
return A.Fv()},
D_(a){self.scheduleImmediate(A.h5(new A.rI(t.O.a(a)),0))},
D0(a){self.setImmediate(A.h5(new A.rJ(t.O.a(a)),0))},
D1(a){A.w4(B.eW,t.O.a(a))},
w4(a,b){return A.Dc(a.a/1000|0,b)},
Dc(a,b){var s=new A.tm()
s.ia(a,b)
return s},
c5(a){return new A.ld(new A.ap($.ak,a.i("ap<0>")),a.i("ld<0>"))},
c4(a,b){a.$2(0,null)
b.b=!0
return b.a},
aN(a,b){A.DL(a,b)},
c3(a,b){b.dv(a)},
c2(a,b){b.dw(A.as(a),A.cG(a))},
DL(a,b){var s,r,q=new A.tx(b),p=new A.ty(b)
if(a instanceof A.ap)a.fi(q,p,t.z)
else{s=t.z
if(a instanceof A.ap)a.e_(q,p,s)
else{r=new A.ap($.ak,t.hR)
r.a=8
r.c=a
r.fi(q,p,s)}}},
c7(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ak.h6(new A.uG(s),t.H,t.S,t.z)},
yG(a,b,c){return 0},
mw(a){var s
if(t.yt.b(a)){s=a.gbP()
if(s!=null)return s}return B.at},
xB(a){var s
a.a(null)
s=new A.ap($.ak,a.i("ap<0>"))
s.d6(null)
return s},
Bw(a,b,c){var s=new A.ap($.ak,c.i("ap<0>"))
A.Cz(a,new A.nL(b,s,c))
return s},
nM(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ap($.ak,b.i("ap<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.nO(i,h,g,f)
try{for(n=J.M(a),m=t.d;n.m();){r=n.gn()
q=i.b
r.e_(new A.nN(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cr(A.c([],b.i("r<0>")))
return n}i.a=A.dX(n,null,!1,b.i("0?"))}catch(l){p=A.as(l)
o=A.cG(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wz(m,k)
m=new A.aZ(m,k==null?A.mw(m):k)
n.cp(m)
return n}else{i.d=p
i.c=o}}return f},
wz(a,b){if($.ak===B.w)return null
return null},
Eq(a,b){if($.ak!==B.w)A.wz(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbP()
if(b==null){A.y6(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.y6(a,b)
return new A.aZ(a,b)},
rS(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Cu()
b.cp(new A.aZ(new A.cq(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f1(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bV()
b.cq(o.a)
A.eU(b,p)
return}b.a^=2
A.m7(null,null,b.b,t.O.a(new A.rT(o,b)))},
eU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wN(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eU(d.a,c)
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
A.wN(j.a,j.b)
return}g=$.ak
if(g!==h)$.ak=h
else g=null
c=c.c
if((c&15)===8)new A.rX(q,d,n).$0()
else if(o){if((c&1)!==0)new A.rW(q,j).$0()}else if((c&2)!==0)new A.rV(d,q).$0()
if(g!=null)$.ak=g
c=q.c
if(c instanceof A.ap){p=q.a.$ti
p=p.i("bQ<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.rS(c,f,!0)
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
zy(a,b){var s
if(t.nW.b(a))return b.h6(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.ag(a,"onError",u.c))},
EN(){var s,r
for(s=$.h_;s!=null;s=$.h_){$.j0=null
r=s.b
$.h_=r
if(r==null)$.j_=null
s.a.$0()}},
Fb(){$.wA=!0
try{A.EN()}finally{$.j0=null
$.wA=!1
if($.h_!=null)$.xd().$1(A.zP())}},
zH(a){var s=new A.le(a),r=$.j_
if(r==null){$.h_=$.j_=s
if(!$.wA)$.xd().$1(A.zP())}else $.j_=r.b=s},
F4(a){var s,r,q,p=$.h_
if(p==null){A.zH(a)
$.j0=$.j_
return}s=new A.le(a)
r=$.j0
if(r==null){s.b=p
$.h_=$.j0=s}else{q=r.b
s.b=q
$.j0=r.b=s
if(q==null)$.j_=s}},
Gr(a,b){A.f6(a,"stream",t.K)
return new A.lM(b.i("lM<0>"))},
Cz(a,b){var s=$.ak
if(s===B.w)return A.w4(a,t.O.a(b))
return A.w4(a,t.O.a(s.fz(b)))},
wN(a,b){A.F4(new A.uz(a,b))},
zD(a,b,c,d,e){var s,r=$.ak
if(r===c)return d.$0()
$.ak=c
s=r
try{r=d.$0()
return r}finally{$.ak=s}},
F2(a,b,c,d,e,f,g){var s,r=$.ak
if(r===c)return d.$1(e)
$.ak=c
s=r
try{r=d.$1(e)
return r}finally{$.ak=s}},
F1(a,b,c,d,e,f,g,h,i){var s,r=$.ak
if(r===c)return d.$2(e,f)
$.ak=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ak=s}},
m7(a,b,c,d){t.O.a(d)
if(B.w!==c){d=c.fz(d)
d=d}A.zH(d)},
rH:function rH(a){this.a=a},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
rI:function rI(a){this.a=a},
rJ:function rJ(a){this.a=a},
tm:function tm(){},
tn:function tn(a,b){this.a=a
this.b=b},
ld:function ld(a,b){this.a=a
this.b=!1
this.$ti=b},
tx:function tx(a){this.a=a},
ty:function ty(a){this.a=a},
uG:function uG(a){this.a=a},
c0:function c0(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bM:function bM(a,b){this.a=a
this.$ti=b},
aZ:function aZ(a,b){this.a=a
this.b=b},
nL:function nL(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nN:function nN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lh:function lh(){},
ii:function ii(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ap:function ap(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rP:function rP(a,b){this.a=a
this.b=b},
rU:function rU(a,b){this.a=a
this.b=b},
rT:function rT(a,b){this.a=a
this.b=b},
rR:function rR(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b){this.a=a
this.b=b},
rX:function rX(a,b,c){this.a=a
this.b=b
this.c=c},
rY:function rY(a,b){this.a=a
this.b=b},
rZ:function rZ(a){this.a=a},
rW:function rW(a,b){this.a=a
this.b=b},
rV:function rV(a,b){this.a=a
this.b=b},
le:function le(a){this.a=a
this.b=null},
lM:function lM(a){this.$ti=a},
iO:function iO(){},
lF:function lF(){},
tk:function tk(a,b){this.a=a
this.b=b},
uz:function uz(a,b){this.a=a
this.b=b},
yA(a,b){var s=a[b]
return s===a?null:s},
wa(a,b,c){if(c==null)a[b]=a
else a[b]=c},
w9(){var s=Object.create(null)
A.wa(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
xW(a,b){return new A.ce(a.i("@<0>").K(b).i("ce<1,2>"))},
H(a,b,c){return b.i("@<0>").K(c).i("vT<1,2>").a(A.zS(a,new A.ce(b.i("@<0>").K(c).i("ce<1,2>"))))},
n(a,b){return new A.ce(a.i("@<0>").K(b).i("ce<1,2>"))},
vU(a){return new A.ci(a.i("ci<0>"))},
a3(a){return new A.ci(a.i("ci<0>"))},
aT(a,b){return b.i("xX<0>").a(A.FO(a,new A.ci(b.i("ci<0>"))))},
wb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fO(a,b,c){var s=new A.eY(a,b,c.i("eY<0>"))
s.c=a.e
return s},
bE(a,b){var s=J.M(a)
if(s.m())return s.gn()
return null},
aJ(a,b,c){var s=A.xW(b,c)
a.au(0,new A.p3(s,b,c))
return s},
eA(a,b,c){var s=A.xW(b,c)
s.J(0,a)
return s},
hG(a,b){var s,r=A.vU(b)
for(s=J.M(a);s.m();)r.l(0,b.a(s.gn()))
return r},
fw(a,b){var s=A.vU(b)
s.J(0,a)
return s},
BP(a,b){var s=t.hO
return J.vC(s.a(a),s.a(b))},
vV(a){var s,r
if(A.x2(a))return"{...}"
s=new A.bi("")
try{r={}
B.a.l($.c6,a)
s.a+="{"
r.a=!0
a.au(0,new A.p6(r,s))
s.a+="}"}finally{if(0>=$.c6.length)return A.d($.c6,-1)
$.c6.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Dn(){throw A.b(A.b5("Cannot change an unmodifiable set"))},
io:function io(){},
t0:function t0(a){this.a=a},
iq:function iq(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eV:function eV(a,b){this.a=a
this.$ti=b},
ip:function ip(a,b,c){var _=this
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
lv:function lv(a){this.a=a
this.c=this.b=null},
eY:function eY(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p3:function p3(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a4:function a4(){},
p5:function p5(a){this.a=a},
p6:function p6(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.$ti=b},
is:function is(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iI:function iI(){},
fy:function fy(){},
e4:function e4(a,b){this.a=a
this.$ti=b},
dr:function dr(){},
iC:function iC(){},
lS:function lS(){},
fN:function fN(a,b){this.a=a
this.$ti=b},
fU:function fU(){},
iJ:function iJ(){},
EQ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.as(r)
q=A.a1(String(s),null,null)
throw A.b(q)}q=A.tY(p)
return q},
tY(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lt(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tY(a[s])
return a},
DE(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.At()
else s=new Uint8Array(o)
for(r=J.bc(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DD(a,b,c,d){var s=a?$.As():$.Ar()
if(s==null)return null
if(0===c&&d===b.length)return A.yS(s,b)
return A.yS(s,b.subarray(c,d))},
yS(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xo(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a1("Invalid base64 padding, more than two '=' characters",a,b))},
xT(a,b,c){return new A.hF(a,b)},
E0(a){return a.B()},
D2(a,b){return new A.t3(a,[],A.FF())},
D3(a,b,c){var s,r=new A.bi(""),q=A.D2(r,b)
q.cX(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DF(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lt:function lt(a,b){this.a=a
this.b=b
this.c=null},
t2:function t2(a){this.a=a},
lu:function lu(a){this.a=a},
tr:function tr(){},
tq:function tq(){},
jf:function jf(){},
mK:function mK(){},
eq:function eq(){},
jq:function jq(){},
jA:function jA(){},
hF:function hF(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
k1:function k1(){},
oT:function oT(a){this.b=a},
oS:function oS(a){this.a=a},
t4:function t4(){},
t5:function t5(a,b){this.a=a
this.b=b},
t3:function t3(a,b,c){this.c=a
this.a=b
this.b=c},
kW:function kW(){},
rk:function rk(a){this.a=a},
tp:function tp(a){this.a=a
this.b=16
this.c=0},
A_(a){var s=A.dp(a,null)
if(s!=null)return s
throw A.b(A.a1(a,null,null))},
zR(a){var s=A.eE(a)
if(s!=null)return s
throw A.b(A.a1("Invalid double",a,null))},
Bq(a,b){a=A.aC(a,new Error())
if(a==null)a=A.f3(a)
a.stack=b.p(0)
throw a},
dX(a,b,c,d){var s,r=c?J.xN(a,d):J.xM(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aD(a,b,c){var s,r=A.c([],c.i("r<0>"))
for(s=J.M(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
L(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("r<0>"))
s=A.c([],b.i("r<0>"))
for(r=J.M(a);r.m();)B.a.l(s,r.gn())
return s},
ah(a,b){var s=A.aD(a,!1,b)
s.$flags=3
return s},
yg(a,b,c){var s,r
A.kt(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aW(c,b,null,"end",null))
if(s===0)return""}r=A.Cx(a,b,c)
return r},
Cx(a,b,c){var s=a.length
if(b>=s)return""
return A.C9(a,b,c==null||c>s?s:c)},
Cc(a){return new A.hA(a,A.xR(a,!1,!0,!1,!1,""))},
w3(a,b,c){var s=J.M(b)
if(!s.m())return a
if(c.length===0){do a+=A.A(s.gn())
while(s.m())}else{a+=A.A(s.gn())
while(s.m())a=a+c+A.A(s.gn())}return a},
e5(){var s,r,q=A.C0()
if(q==null)throw A.b(A.b5("'Uri.base' is not supported"))
s=$.ym
if(s!=null&&q===$.yl)return s
r=A.CF(q)
$.ym=r
$.yl=q
return r},
Cu(){return A.cG(new Error())},
B6(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xv(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
js(a){if(a>=10)return""+a
return"0"+a},
Bp(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.ag(b,"name","No enum value with that name"))},
jB(a){if(typeof a=="number"||A.bo(a)||a==null)return J.d9(a)
if(typeof a=="string")return JSON.stringify(a)
return A.y5(a)},
Br(a,b){A.f6(a,"error",t.K)
A.f6(b,"stackTrace",t.l)
A.Bq(a,b)},
jc(a){return new A.jb(a)},
w(a,b){return new A.cq(!1,null,b,a)},
ag(a,b,c){return new A.cq(!0,a,b,c)},
y7(a){var s=null
return new A.fE(s,s,!1,s,s,a)},
y8(a,b){return new A.fE(null,null,!0,a,b,"Value not in range")},
aW(a,b,c,d,e){return new A.fE(b,c,!0,a,d,"Invalid value")},
ku(a,b,c){if(0>a||a>c)throw A.b(A.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aW(b,a,c,"end",null))
return b}return c},
kt(a,b){if(a<0)throw A.b(A.aW(a,0,null,b,null))
return a},
oA(a,b,c,d){return new A.jU(b,!0,a,d,"Index out of range")},
b5(a){return new A.ic(a)},
yj(a){return new A.kR(a)},
l(a){return new A.fK(a)},
at(a){return new A.jn(a)},
a1(a,b,c){return new A.B(a,b,c)},
BJ(a,b,c){var s,r
if(A.x2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c6,a)
try{A.EE(a,s)}finally{if(0>=$.c6.length)return A.d($.c6,-1)
$.c6.pop()}r=A.w3(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
vQ(a,b,c){var s,r
if(A.x2(a))return b+"..."+c
s=new A.bi(b)
B.a.l($.c6,a)
try{r=s
r.a=A.w3(r.a,a,", ")}finally{if(0>=$.c6.length)return A.d($.c6,-1)
$.c6.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
EE(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.A(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.A(p))
return}r=A.A(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.A(p)
r=A.A(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
vW(a,b,c){var s=A.n(b,c)
s.jW(a)
return s},
cz(a,b,c,d,e,f){var s
if(B.f===c){s=J.az(a)
b=J.az(b)
return A.ia(A.aL(A.aL($.ha(),s),b))}if(B.f===d){s=J.az(a)
b=J.az(b)
c=J.az(c)
return A.ia(A.aL(A.aL(A.aL($.ha(),s),b),c))}if(B.f===e){s=J.az(a)
b=J.az(b)
c=J.az(c)
d=J.az(d)
return A.ia(A.aL(A.aL(A.aL(A.aL($.ha(),s),b),c),d))}if(B.f===f){s=J.az(a)
b=J.az(b)
c=J.az(c)
d=J.az(d)
e=J.az(e)
return A.ia(A.aL(A.aL(A.aL(A.aL(A.aL($.ha(),s),b),c),d),e))}s=J.az(a)
b=J.az(b)
c=J.az(c)
d=J.az(d)
e=J.az(e)
f=J.az(f)
f=A.ia(A.aL(A.aL(A.aL(A.aL(A.aL(A.aL($.ha(),s),b),c),d),e),f))
return f},
BY(a){var s,r,q=$.ha()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)q=A.aL(q,J.az(a[r]))
return A.ia(q)},
eL(a,b){return new A.fN(A.fw(a,b),b.i("fN<0>"))},
CF(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yk(a4<a4?B.b.I(a5,0,a4):a5,5,a3).gh9()
else if(s===32)return A.yk(B.b.I(a5,5,a4),0,a3).gh9()}r=A.dX(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zG(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zG(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ae(a5,"\\",n))if(p>0)h=B.b.ae(a5,"\\",p-1)||B.b.ae(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ae(a5,"..",n)))h=m>n+2&&B.b.ae(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ae(a5,"file",0)){if(p<=0){if(!B.b.ae(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.I(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bL(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ae(a5,"http",0)){if(i&&o+3===n&&B.b.ae(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bL(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ae(a5,"https",0)){if(i&&o+4===n&&B.b.ae(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bL(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lJ(a4<a5.length?B.b.I(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Dx(a5,0,q)
else{if(q===0)A.fV(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Dy(a5,c,p-1):""
a=A.Dt(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dp(B.b.I(a5,i,n),a3)
d=A.Dv(a0==null?A.i(A.a1("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Du(a5,n,m,a3,j,a!=null)
a2=m<l?A.Dw(a5,m+1,l,a3):a3
return A.Do(j,b,a,d,a1,a2,l<a4?A.Ds(a5,l+1,a4):a3)},
yo(a){var s=t.N
return B.a.be(A.c(a.split("&"),t.s),A.n(s,s),new A.rj(B.c7),t.G)},
kV(a,b,c){throw A.b(A.a1("Illegal IPv4 address, "+a,b,c))},
CC(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kV("each part must be in the range 0..255",a,r)}A.kV("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kV(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bO(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kV(j,a,q)
p=l}A.kV("IPv4 address should contain exactly 4 parts",a,q)},
CD(a,b,c){var s
if(b===c)throw A.b(A.a1("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.CE(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.yn(a,b,c)
return!0},
CE(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.B(n,a,q)
r=q
break}return new A.B("Unexpected character",a,q-1)}if(r-1===b)return new A.B(n,a,r)
return new A.B("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.B("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.B("Invalid IPvFuture address character",a,r)}},
yn(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.ri(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CC(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dt(l,8)
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
B.d9.hx(s,a0,16,s,a)
B.d9.ls(s,a,a0,0)}}return s},
Do(a,b,c,d,e,f,g){return new A.iK(a,b,c,d,e,f,g)},
yM(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fV(a,b,c){throw A.b(A.a1(c,a,b))},
Dv(a,b){var s=A.yM(b)
if(a===s)return null
return a},
Dt(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.fV(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Dq(a,q,r)
if(o<r){n=o+1
p=A.yR(a,B.b.ae(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CD(a,q,o)
l=B.b.I(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cJ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yR(a,B.b.ae(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yn(a,b,o)
return"["+B.b.I(a,b,o)+p+"]"}}return A.DA(a,b,c)},
Dq(a,b,c){var s=B.b.cJ(a,"%",b)
return s>=b&&s<c?s:c},
yR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bi(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wf(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bi("")
l=h.a+=B.b.I(a,q,r)
if(m)n=B.b.I(a,r,r+3)
else if(n==="%")A.fV(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bi("")
if(q<r){h.a+=B.b.I(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.I(a,q,r)
if(h==null){h=new A.bi("")
m=h}else m=h
m.a+=i
l=A.we(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.I(a,b,c)
if(q<c){i=B.b.I(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wf(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bi("")
k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.I(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bi("")
if(q<r){p.a+=B.b.I(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fV(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.I(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bi("")
l=p}else l=p
l.a+=k
j=A.we(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.I(a,b,c)
if(q<c){k=B.b.I(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Dx(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.yO(a.charCodeAt(b)))A.fV(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fV(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.I(a,b,c)
return A.Dp(q?a.toLowerCase():a)},
Dp(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Dy(a,b,c){return A.iL(a,b,c,16,!1,!1)},
Du(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iL(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.Dz(q,e,f)},
Dz(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.DB(a,!s||c)
return A.DC(a)},
Dw(a,b,c,d){return A.iL(a,b,c,256,!0,!1)},
Ds(a,b,c){return A.iL(a,b,c,256,!0,!1)},
wf(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.uO(r)
o=A.uO(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.I(a,b,b+3).toUpperCase()
return null},
we(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jE(a,6*p)&63|q
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
o+=3}}return A.yg(s,0,null)},
iL(a,b,c,d,e,f){var s=A.yQ(a,b,c,d,e,f)
return s==null?B.b.I(a,b,c):s},
yQ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wf(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fV(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.we(n)}if(o==null){o=new A.bi("")
k=o}else k=o
k.a=(k.a+=B.b.I(a,p,q))+l
if(typeof m!=="number")return A.uP(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.I(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
yP(a){if(B.b.T(a,"."))return!0
return B.b.bn(a,"/.")!==-1},
DC(a){var s,r,q,p,o,n,m
if(!A.yP(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.Z(s,"/")},
DB(a,b){var s,r,q,p,o,n
if(!A.yP(a))return!b?A.yN(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gY(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.yN(s[0]))}return B.a.Z(s,"/")},
yN(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yO(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.I(a,0,s)+"%3A"+B.b.aS(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Dr(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
wg(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.c7===d)return B.b.I(a,b,c)
else p=new A.dN(B.b.I(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.w("Truncated URI",null))
B.a.l(p,A.Dr(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.U.a(p)
return B.mp.kw(p)},
yO(a){var s=a|32
return 97<=s&&s<=122},
yk(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a1(k,a,r))}}if(q<0&&r>b)throw A.b(A.a1(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gY(j)
if(p!==44||r!==n+7||!B.b.ae(a,"base64",n+1))throw A.b(A.a1("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eo.lR(a,m,s)
else{l=A.yQ(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bL(a,m,s,l)}return new A.rh(a,j,c)},
zG(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a},
lm:function lm(){},
aj:function aj(){},
jb:function jb(a){this.a=a},
dw:function dw(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fE:function fE(a,b,c,d,e,f){var _=this
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
ic:function ic(a){this.a=a},
kR:function kR(a){this.a=a},
fK:function fK(a){this.a=a},
jn:function jn(a){this.a=a},
kh:function kh(){},
i6:function i6(){},
rN:function rN(a){this.a=a},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
ao:function ao(){},
Q:function Q(){},
lP:function lP(){},
r_:function r_(){this.b=this.a=0},
bi:function bi(a){this.a=a},
rj:function rj(a){this.a=a},
ri:function ri(a){this.a=a},
iK:function iK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rh:function rh(a,b,c){this.a=a
this.b=b
this.c=c},
lJ:function lJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
li:function li(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pp:function pp(a){this.a=a},
zg(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.DO,a)
s[$.h8()]=a
return s},
U(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.tz,a)
s[$.h8()]=a
return s},
DO(a){return t.BO.a(a).$0()},
tz(a,b,c){t.BO.a(a)
if(A.e(c)>=1)return a.$1(b)
return a.$0()},
zX(a,b,c){return c.a(a[b])},
zh(a,b){return a[b]},
aH(a,b,c,d){return d.a(a[b].apply(a,c))},
d7(a,b){var s=new A.ap($.ak,b.i("ap<0>")),r=new A.ii(s,b.i("ii<0>"))
a.then(A.h5(new A.vo(r,b),1),A.h5(new A.vp(r),1))
return s},
zr(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
h6(a){if(A.zr(a))return a
return new A.uK(new A.iq(t.BT)).$1(a)},
vo:function vo(a,b){this.a=a
this.b=b},
vp:function vp(a){this.a=a},
uK:function uK(a){this.a=a},
Ca(a){var s
if(a==null)s=B.aQ
else{s=new A.ea()
s.bQ(a)}return s},
ls:function ls(){},
ea:function ea(){this.b=this.a=0},
pS:function pS(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
pT:function pT(){},
eF:function eF(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
mY:function mY(a,b){this.a=a
this.b=b
this.c=null},
fh:function fh(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n0:function n0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n_:function n_(){var _=this
_.c=_.b=_.a=null
_.d=0},
kn:function kn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
fe:function fe(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jI:function jI(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
nG:function nG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dT(a,b){return new A.jR(a,b)},
dq:function dq(){},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a,b){this.a=a
this.b=b},
jR:function jR(a,b){this.a=a
this.b=b},
G3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.v)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iz(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.O(f,new A.vq())
s=A.c([],t.cv)
for(r=A.kN(f,0,A.f6(b,"count",t.S),t.mn),q=r.$ti,r=new A.aF(r,r.gt(0),q.i("aF<a7.E>")),q=q.i("a7.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
by:function by(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vq:function vq(){},
p8(a,b,c,d,e,f,g,h,i,j){return new A.dY(c,a,h,g,f,e,i,j,b,!0)},
k6(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.A(b),null))},
ja:function ja(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c,d,e,f,g,h,i,j){var _=this
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
BS(a){A:{break A}return a},
cZ:function cZ(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(){},
rm:function rm(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pe:function pe(){},
pf:function pf(){},
pg:function pg(){},
hR(a){var s,r=t.N,q=A.aT(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.J(0,A.aT(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.J(0,A.aT(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.J(0,A.aT(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.J(0,A.aT(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pr(A.eL(q,r),s)},
pr:function pr(a,b){this.a=a
this.b=b},
ps:function ps(){},
fG:function fG(a,b){this.a=a
this.b=b},
kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fn:function fn(a,b){this.a=a
this.b=b},
jh:function jh(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g,h,i,j){var _=this
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
kO:function kO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
eI:function eI(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.d=c},
nI:function nI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
BQ(a){var s,r,q
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=B.bm;s.m();){switch(s.d.a){case 0:q=B.bm
break
case 1:q=B.d6
break
case 2:q=B.d7
break
case 3:q=B.d8
break
default:q=null}if(A.y_(q)>A.y_(r))r=q}return r},
y_(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
zM(a){return new A.bM(A.Ff(a),t.EF)},
Ff(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$zM(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aM("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eB:function eB(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b){this.a=a
this.b=b},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
p9:function p9(a){this.a=a},
pa:function pa(){},
BR(){return new A.k7(new A.cU(new A.pd(),A.c([],t.Fy),A.c([],t.t),t.ja))},
k7:function k7(a){this.a=a},
pd:function pd(){},
zJ(a){var s=4
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
case 3:s=A.i(A.b5("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
DV(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.U[r]
if(A.zJ(q.a)===b)s+=q.c}return s},
BT(a){return new A.ph(a,new A.cU(new A.pi(),A.c([],t.EM),A.c([],t.t),t.wm),A.n(t.S,t.qt))},
y0(a){var s
A:{s=a.byteLength
break A}return s},
kT:function kT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ph:function ph(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(){},
pj:function pj(){},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
ra:function ra(a){this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(){},
Cy(a){var s=new A.kQ(a,new A.cU(new A.rb(),A.c([],t.f2),A.c([],t.t),t.qq),A.n(t.S,t._))
s.d=s.aU($.xb())
s.e=s.aU($.x8())
s.f=s.aU($.x9())
s.r=s.aU($.x7())
s.w=s.aU($.xa())
return s},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
kQ:function kQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rb:function rb(){},
rd:function rd(){},
rc:function rc(){},
Fw(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.v)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.ez(p,A.c([p],r)))
continue}return o},
ez:function ez(a,b){this.a=a
this.b=b},
jF:function jF(a){this.a=a},
nB:function nB(){},
nC:function nC(a){this.a=a},
nz:function nz(a){this.a=a},
nA:function nA(a){this.a=a},
jG:function jG(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
nH:function nH(a,b){this.a=a
this.b=b
this.c=0},
D4(){return new A.fP()},
nF:function nF(a){this.a=a
this.b=null},
fP:function fP(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
vZ(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pv:function pv(){},
pw:function pw(){},
cd:function cd(a,b){this.a=a
this.b=b},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fF:function fF(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
kr:function kr(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bh:function bh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pU:function pU(){},
b2:function b2(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pW:function pW(a,b){this.a=a
this.b=b},
q0:function q0(){},
q_:function q_(){},
pZ:function pZ(){},
pY:function pY(a){this.a=a},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a,b){this.a=a
this.b=b},
Cg(a){return new A.hY(a,new A.cU(new A.q1(),A.c([],t.w_),A.c([],t.t),t.tc))},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b){this.a=a
this.b=b},
q1:function q1(){},
ug(a,b){return A.E5(a,b)},
E5(a,b){var s=0,r=A.c5(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ug=A.c7(function(c,a0){if(c===1)return A.c2(a0,r)
for(;;)switch(s){case 0:a.bS()
if(a.at!=null)throw A.b(A.l("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.bZ(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.c_(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cP(b)
n=new A.kr(a.a,A.n(t.N,t.CH))
l=A.zc(a,n,b,o.a.b.a)
m=l.a
i.c_(p)
h=a.x
g=o
if(h.e)A.i(A.l("GPU resource adapter is disposed"))
h.ew(g)
f=h.c
h.b.c_(g.a)
h.c=g
h.d=null
if(f!=null)h.df(f.b)
g.c=B.hw
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bE()
h=j
if(h!=null)h.bE()}catch(d){if(p.c===B.aT){h=t.AB.a(p)
i.eF(h)
i.a.fs(h.a)
i.b.dY(h.b)
h.c=B.eP
i.c=null}i=o
if((i==null?null:i.c)===B.aa){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.i(A.l("GPU resource adapter is disposed"))
i.ew(h)
i.df(h.b)
i.b.dY(h.a)
h.c=B.hx
i.d=null}i=m
if(i!=null)i.bE()
i=n
if(i!=null)i.bE()
throw d}case 1:return A.c3(q,r)}})
return A.c4($async$ug,r)},
zd(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zc(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zc(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.ue(a),j=new A.uf(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.FB(b,h,d,i,s.gmw(),new A.u_(j),new A.u0(j),new A.u1(a),new A.u6(a),new A.u7(a),new A.u8(j),new A.u9(j),s.gmy(),new A.ua(a),s.gmC(),r.gmA(),k,s.gmE(),s.gmG(),new A.ub(j,c),new A.uc(j),new A.ud(j),new A.u2(j),new A.u3(j),new A.u4(a),new A.u5(j),e,f,g,c.r)}else{p=new A.aG(l,B.r,g,f,e,0)
o=new A.aG(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hK(h,p,o):null
k=A.c([new A.l7(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.hV(b,u.l,u.B,h,i,d))
q=new A.jF(k)}a.r.toString
m=q.ki(B.a1,new A.pU(),!1,new A.lC())
k=m.a.b
if(k.length!==0)throw A.b(A.l("safe renderer graph is invalid: "+A.A(k)))
return new A.tl(q,m)},
E6(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.l("renderer graph is not initialized"))
s=A.L(b7.gfU(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a2(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ab()
p=p.gaw()
n=A.E(p)
B.a.l(s,new A.lQ(new A.ct((r|1073741824)>>>0,0,"transient"),q,A.bq(new A.P(p,n.i("K(1)").a(o.gaC()),n.i("P<1,K>")))))}p=b8.a
m=A.FH(A.Bv(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.v)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dT(B.az,n))
j=j.b
g=j.$ti
j.a2(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a3(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.v)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dT(B.az,n))
j=j.b
g=j.$ti
j.a2(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a3(n>0?n:h.e,3)}o=t.N
n=A.n(o,t.rL)
e=new A.nF(n)
e.ke("cull")
j=l-f
d=e.b
if(d==null)A.i(A.l("cull recorded outside an active frame"))
if(j<0)A.i(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.v)(s),++k){a2=s[k]
if(a2.gD().e===B.aU)B.a.l(a,new A.aK(new A.bC(a0.h8(a2.gD().c.a).c,a2.gG().a),a2,a1))
else B.a.l(b,new A.aK(new A.bF(B.kF,a2.gD().b,a2.gD().a,a2.gG().a),a2,g))}a3=new A.lo(A.Fw(A.G5(b)),A.G4(a),p,b8.b,b8.c)
a4=new A.jv(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.v)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.i(A.ag(g,"passId",null))
e.b=g
n.cf(g,A.zT())
a6=A.n(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.v)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.i(A.l("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.i(A.l("resource is not in candidate: "+b1))
b3=new A.fc(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cf(b0,new A.uh(b3))}a5.ao(new A.jj(a6,a4,a3))}return new A.rO(e,m,j)},
yd(a){return new A.q9(a,new A.mY(new A.n_(),new A.ky()),new A.nH(A.c([],t.h1),B.hh),A.c([],t.Ft),B.bw,A.c([],t.ow),null)},
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a,b,c){this.a=a
this.b=b
this.c=c},
ue:function ue(a){this.a=a},
uf:function uf(a,b){this.a=a
this.b=b},
ud:function ud(a){this.a=a},
u6:function u6(a){this.a=a},
u7:function u7(a){this.a=a},
uc:function uc(a){this.a=a},
u1:function u1(a){this.a=a},
u3:function u3(a){this.a=a},
u2:function u2(a){this.a=a},
ub:function ub(a,b){this.a=a
this.b=b},
u_:function u_(a){this.a=a},
u0:function u0(a){this.a=a},
u8:function u8(a){this.a=a},
u9:function u9(a){this.a=a},
ua:function ua(a){this.a=a},
u5:function u5(a){this.a=a},
u4:function u4(a){this.a=a},
uh:function uh(a){this.a=a},
tl:function tl(a,b){this.a=a
this.b=b},
lC:function lC(){},
lo:function lo(a,b,c,d,e){var _=this
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
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qa:function qa(){},
qb:function qb(){},
qc:function qc(){},
lz:function lz(a){this.b=a},
t_:function t_(){},
lG:function lG(){},
i5:function i5(a,b){this.a=a
this.b=b},
G5(a){var s,r,q=A.L(a,t.E0)
B.a.O(q,new A.vu())
s=A.E(q)
r=s.i("P<1,bV>")
s=A.L(new A.P(q,s.i("bV(1)").a(new A.vv()),r),r.i("a7.E"))
s.$flags=1
return s},
G4(a){var s,r,q=A.L(a,t.EH)
B.a.O(q,new A.vs())
s=A.E(q)
r=s.i("P<1,bV>")
s=A.L(new A.P(q,s.i("bV(1)").a(new A.vt()),r),r.i("a7.E"))
s.$flags=1
return s},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c){this.a=a
this.b=b
this.$ti=c},
vu:function vu(){},
vv:function vv(){},
vs:function vs(){},
vt:function vt(){},
FH(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.v)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.ge4()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.gG().p(0),null))
if(a.mO(o.ge4())===B.cn){++q
continue}B.a.l(l,o)}return new A.nf(l,new A.ng(q))},
ng:function ng(a){this.b=a},
nf:function nf(a,b){this.a=a
this.b=b},
bq(a){var s,r,q,p,o,n,m,l,k
for(s=J.M(a),r=B.ms,q=B.mt,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.K(m,k,Math.min(r.c,o))
q=new A.K(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.j6(r,q)},
j6:function j6(a,b){this.a=a
this.b=b},
Bv(a){var s,r,q,p,o,n,m=a.a,l=new A.nK(),k=m.length
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
return new A.nJ(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eD:function eD(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
nJ:function nJ(a){this.a=a},
nK:function nK(){},
xY(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dl(new Float32Array(A.a_(a)))},
vX(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dl(q)},
xZ(a,b,c){var s=b.gaB(),r=c.bB(s).gaB(),q=s.bB(r),p=new Float32Array(16)
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
p[12]=-r.c3(a)
p[13]=-q.c3(a)
p[14]=s.c3(a)
p[15]=1
return new A.dl(p)},
dl:function dl(a){this.a=a},
p7:function p7(){},
pQ:function pQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
re:function re(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lf:function lf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ji:function ji(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lg:function lg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
ju:function ju(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lj:function lj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
il:function il(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lk:function lk(a,b,c,d,e,f){var _=this
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
ll:function ll(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jQ:function jQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lq:function lq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a){this.b=a},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
bu(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aG(a.a,a.b,b,c,s,r)},
w_:function w_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hV:function hV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lD:function lD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yf(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mr:B.aj,q=A.xZ(a.b,s,r)
return new A.eN(A.vX(1,a.f,B.c.F(a.w*2,0.1,3),0.05).al(0,q))},
eN:function eN(a){this.a=a},
kG:function kG(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
FB(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.b(A.ag(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a3(e5+1,2)
m=B.d.a3(e4+1,2)
l=A.bu(B.bz,e5,e4,e3,a8)
k=A.bu(B.bz.fW(),e5,e4,a8,a8)
A.bu(B.lr,e5,e4,a8,a8)
j=A.bu(B.lo,e5,e4,a8,a8)
i=A.bu(B.lj,e6,e6,a8,a8)
h=A.bu(B.lk,b6,m,a8,a8)
g=A.bu(B.ll,b6,m,a8,a8)
f=A.bu(B.lp,b6,m,a8,a8)
e=A.bu(B.lq,b6,m,a8,a8)
d=$.Ad()
c=e3>1
b=A.bu(d,e5,e4,a8,c?2:1)
d=A.bu(B.lg,b6,m,a8,a8)
a=A.bu(B.lh,b6,m,a8,a8)
a0=A.bu(B.li,e5,e4,a8,a8)
a1=A.bu(B.lm,e5,e4,a8,a8)
a2=A.bu(B.ls,e5,e4,a8,a8)
a3=A.bu(B.ln,e5,e4,a8,a8)
a4=c?new A.hK(b8,l,k):a8
b5.a=null
a5=A.yf(B.m4)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.J(a7,A.c([new A.hf(b7,a9,b0,b8,b1,b1,B.dX,!0,k,f,d6,b6,m),new A.hf(b7,a9,b0,b8,b2,b2,B.n5,!1,f,e,c2,b6,m),new A.ji(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.J(a7,A.c([new A.hm(b7,a9,b0,b8,b3,b3,B.dY,k,d,d6,b6,m),new A.hm(b7,a9,b0,b8,b4,b4,B.n6,d,a,c7,b6,m),new A.jx(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jQ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.ks(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kX(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.ju(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kK(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kJ(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kG(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.uH(b5),i))
j.push(new A.kH(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*enabled;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlick(hdotv,f0);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  // Fixed low-discrepancy offsets avoid the directional shimmer of a regular\n  // square lattice while remaining deterministic and free of per-frame noise.\n  vec2 t=uShadowMapTexelSize;\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(vec2(-.942,-.399)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.945,-.768)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.094,.886)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.344,.294)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.716,.642)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.688,-.089)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(-.287,-.885)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.052,.008)*t,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(vec2(.831,.486)*t,0.),bias);\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coat=clamp(uClearcoatStrength,0.0,1.0)*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.uI(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.J(j,a7)
j.push(new A.hV(b7,a9,u.B,b8,k,b9))
return new A.jF(j)},
uH:function uH(a){this.a=a},
uI:function uI(a,b){this.a=a
this.b=b},
kH:function kH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lI:function lI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kK:function kK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lL:function lL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kJ:function kJ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lK:function lK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kX:function kX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lT:function lT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l7:function l7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lW:function lW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mW:function mW(){},
kF(a,b){return new A.i4(a,b)},
jN:function jN(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ew:function ew(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ht:function ht(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
o4:function o4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
o5:function o5(){},
o6:function o6(){},
fR:function fR(a,b){this.a=a
this.b=b},
ed:function ed(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fo(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jg:function jg(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b3:function b3(a,b){this.a=a
this.b=b},
rD:function rD(){this.a=null},
CK(a){var s=new A.l5(a,B.h,new A.rD(),A.CV(a))
s.i9(a)
return s},
CV(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a3(t.N)
s=A.a3(t.N)
r=J.M(t.a.b(q)?q:new A.aS(q,A.E(q).i("aS<1,f>")))
while(r.m())s.l(0,r.gn())
return s},
bL(a,b){var s,r
if(a.b!==B.h)A.i(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.e(s.drawingBufferWidth),A.e(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
CQ(a,b){var s
if(a.b!==B.h)A.i(A.l(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.e(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
CP(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.l(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.l("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
CO(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
CN(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yr(a,b){var s
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
CL(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b7(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.l(u.k))
s=a.f
r=s.la(b)
if(r.a===0)return
if(r.q(0,B.bD)){q=v.G
p=a.a
if(b.a)p.enable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bE))a.a.depthFunc(A.CO(a,b.b))
if(r.q(0,B.bF))a.a.depthMask(b.c)
if(r.q(0,B.bJ)){q=v.G
p=a.a
if(b.w)p.enable(A.e(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.e(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bK))a.a.cullFace(A.CN(a,b.x))
if(r.q(0,B.dJ)){q=v.G.WebGL2RenderingContext
q=A.e(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bG)){q=v.G
p=a.a
if(b.d)p.enable(A.e(q.WebGL2RenderingContext.BLEND))
else p.disable(A.e(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bH))a.a.blendFunc(A.yr(a,b.e),A.yr(a,b.f))
if(r.q(0,B.bI))a.a.blendEquation(A.CL(a,b.r))
if(r.q(0,B.dH))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dI)){q=v.G.WebGL2RenderingContext
a.a.disable(A.e(q.SCISSOR_TEST))}s.a=b},
CM(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.e(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.e(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.e(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d1(a,b,c,d,e,f){var s
if(a.b!==B.h)A.i(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.CM(a,b))},
c_(a,b){var s
if(a.b!==B.h)A.i(A.l(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
u(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.i(A.l(u.k))
s=a.e
if(s==null)throw A.b(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.D(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bm(c.b))
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
A.aH(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.e(c.b))
break}},
bk(a,b){if(a.b!==B.h)A.i(A.l(u.k))
a.a.bindVertexArray(A.a(b.a))},
aA(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.i(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iN){p=s.d>1?A.e(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iM){o=s.b
if(o!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
CR(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.l(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.e(p.ELEMENT_ARRAY_BUFFER),c,A.e(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
CS(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yu(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.l(u.k))
s=a.a
r=A.D(s.createBuffer())
if(r==null)throw A.b(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cA?A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.e(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.CS(a,b.b))
return new A.dC(r)},
ys(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yt(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
CT(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
w6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.h)A.i(A.l(u.k))
s=a.a
r=A.D(s.createTexture())
if(r==null)throw A.b(A.l("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.e(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.CT(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aH(s,"texStorage3D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aH(s,"texStorage2D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.ys(a,b.e))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.ys(a,b.f))
p=b.r
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yt(a,p))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yt(a,p))
h=a.r.q(0,"EXT_texture_filter_anisotropic")
g=h?a.f_(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.i(A.ag(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dC(new A.iN(r,j,i,q,m))},
w7(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.i(A.l(u.k))
s=t.k.a(b.a)
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
if(r)A.aH(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aH(l,"texSubImage2D",[m,0,0,0,q,p,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
yv(a,b){var s,r,q
if(a.b!==B.h)A.i(A.l(u.k))
s=t.k.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.e(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
l6(a,b){a.a.deleteTexture(t.k.a(b.a).a)},
yx(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.i(A.l(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.D(r.createFramebuffer())
if(q==null)throw A.b(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aX
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cC||o===B.hz
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.e(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.D(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aH(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.D(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aH(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.D(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aH(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aH(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.D(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aH(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aH(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.D(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aH(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.D(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aH(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
A.aH(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.e(r.checkFramebufferStatus(A.e(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.e(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.w8(a0,q,l,k,f,e,j,i)
throw A.b(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dC(new A.iM(q,l,k,f,e,j,i,s,a1.b,a1.c))},
w8(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d2(a){var s
if(a.b!==B.h)A.i(A.l(u.k))
s=A.D(a.a.createVertexArray())
if(s==null)throw A.b(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dC(s)},
yw(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.D(p.createShader(b))
if(o==null)throw A.b(A.kF(b===A.zX(A.zh(A.Ab(),r),q,t.S)?B.dC:B.dD,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.h6(p.getShaderParameter(o,A.e(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.an(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kF(b===A.zX(A.zh(A.Ab(),r),q,t.S)?B.dC:B.dD,s))}return o},
CU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.i(A.l(u.k))
q=v.G
s=A.yw(a,A.e(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yw(a,A.e(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.D(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lR)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.h6(o.getProgramParameter(n,A.e(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.an(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kF(B.dE,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.v)(c),++l){k=c[l]
if(A.e(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kF(B.dF,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.D(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kF(B.dF,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dC(n)},
dC:function dC(a){this.a=a},
iN:function iN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iM:function iM(a,b,c,d,e,f,g,h,i,j){var _=this
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
lV:function lV(a){this.a=a
this.b=!1},
l5:function l5(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rB:function rB(a){this.a=a},
rC:function rC(a){this.a=a},
tt:function tt(){},
lU:function lU(){},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mC(a,a0){var s=0,r=A.c5(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mC=A.c7(function(a1,a2){if(a1===1)return A.c2(a2,r)
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
b=new A.jd(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aQ,A.n(o,t.jS))
b.hW(p,a0)
p=A.o(a).i("I<1,2>")
s=3
return A.aN(A.nM(A.k5(new A.I(a,p),p.i("bQ<ao>(m.E)").a(new A.mD(b)),p.i("m.E"),t.ls),t.d),$async$mC)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.iY():n
c.buffer=p
q=b
s=1
break
case 1:return A.c3(q,r)}})
return A.c4($async$mC,r)},
jd:function jd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mE:function mE(){},
mD:function mD(a){this.a=a},
mG:function mG(a,b){this.a=a
this.b=b},
mF:function mF(a,b){this.a=a
this.b=b},
mH:function mH(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AQ(a,b,c,d,e,f,g){var s=new A.mx(c,f,b,g,new A.j(d.a,d.b,d.c),e,a)
s.hX(a,b,c,d,0,e,f,g)
return s},
AN(a,b){var s=new A.mi(b)
s.hV(a,b)
return s},
Fa(a,b){var s,r,q,p=b>>>0
for(s=new A.dN(a),r=t.sU,s=new A.aF(s,s.gt(0),r.i("aF<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.zZ(p,q==null?r.a(q):q)}return p&2147483647},
je:function je(a,b){this.a=a
this.b=b},
mx:function mx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
my:function my(){},
mi:function mi(a){this.a=a},
mj:function mj(){},
mk:function mk(){},
ml:function ml(){},
mm:function mm(){},
vE:function vE(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
vH:function vH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vF:function vF(a){this.a=a},
vG:function vG(){},
l9:function l9(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function mT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
nx:function nx(a){this.a=a},
ny:function ny(a,b,c){this.f=a
this.r=b
this.w=c},
nE:function nE(a){this.a=a},
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
oC:function oC(a){this.a=a},
BF(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.I(a,A.o(a).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aD(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.oB(n)},
oB:function oB(a){this.a=a},
oF:function oF(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aR:function aR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oZ:function oZ(a,b,c){this.a=a
this.c=b
this.e=c},
oW:function oW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(){},
nh:function nh(){this.b=this.a=0},
p4:function p4(a){this.a=a
this.b=0
this.e=!1},
i7(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bO(a)
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
du:function du(a){this.a=a
this.b=0},
id(a,b,c){return new A.j(a,b,c)},
yp(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.j(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
CW(a,b,c,d){return new A.l8(d,b,c,a)},
CY(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Ap()
s=a.d
r=A.rF(s,0)
q=A.rF(s,1)
p=A.rF(s,2)
o=A.rF(s,3)
s=t.N
n=A.a3(s)
m=a.e
if(A.bA(m,0))n.l(0,"GamepadA")
if(A.bA(m,1))n.l(0,"GamepadB")
if(A.bA(m,2))n.l(0,"GamepadX")
if(A.bA(m,3))n.l(0,"GamepadY")
if(A.bA(m,4))n.l(0,"GamepadLB")
if(A.bA(m,5))n.l(0,"GamepadRB")
if(A.bA(m,6))n.l(0,"GamepadLT")
if(A.bA(m,7))n.l(0,"GamepadRT")
if(A.bA(m,8))n.l(0,"GamepadView")
if(A.bA(m,9))n.l(0,"GamepadMenu")
if(A.bA(m,10))n.l(0,"GamepadLStick")
if(A.bA(m,11))n.l(0,"GamepadRStick")
if(A.bA(m,12))n.l(0,h)
if(A.bA(m,13))n.l(0,g)
if(A.bA(m,14))n.l(0,f)
if(A.bA(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.j(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gaB():i
return new A.l8(m,p,o,A.eL(n,s))},
rF(a,b){return A.CX(b<a.length?a[b]:0)},
bA(a,b){return b<a.length&&a[b]>=0.5},
CX(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.F((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gcb(a)?-s:s},
kL:function kL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l8:function l8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mM:function mM(a){this.a=a},
Ba(a,b,c){var s=new A.jy(a,c,null,b)
s.i_(a,null,null,b,c)
return s},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Bn(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bE(new A.F(B.jl,t.e2.a(new A.nu(a)),t.vL),t.yW)
return s==null?null:new A.fp(s)},
BU(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.vY(s,a,B.iT)
break
case 1:A.vY(s,a,B.iU)
break
case 2:A.vY(s,a,B.jp)
break}return s},
vY(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.P(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Bm(a){if(a.a!==21)return null
if(a.e)return B.eZ
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f_
return B.eY},
cb:function cb(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fp:function fp(a){this.a=a},
nu:function nu(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
C_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kl(s,new A.j(o,n,m),q,p,l,j)
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
kl:function kl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Fc(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gL(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.fd)
p.k(0,q,r.b)}return p},
m1(a){var s,r,q,p,o,n=a.ga1().bM(0)
B.a.V(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.v)(n),++p){o=n[p]
r.k(0,o,A.z9(a.h(0,o)))}return A.br(r,t.N,s)},
z9(a){var s
if(t.f.b(a))return A.m1(A.Fc(a))
if(t.j.b(a)){s=t.z
return A.ah(J.xm(a,A.FZ(),s),s)}if(a==null||A.bo(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fR)
return a}throw A.b(A.a1("presentation snapshot contains unsupported value "+J.fa(a).p(0),null,null))},
pL:function pL(a){this.a=a},
yc(a,b,c){var s=A.wp(b),r=A.wp(a)
if(c!==2)A.i(A.ag(c,"version","unsupported save version"))
return new A.fH(c,s,r)},
wp(a){var s,r,q,p,o=A.o(a).i("ae<1>"),n=A.L(new A.ae(a,o),o.i("m.E"))
B.a.V(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.v)(n),++q){p=n[q]
s.k(0,p,A.z8(a.h(0,p)))}return A.br(s,t.N,o)},
z8(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gL(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fI)
s.k(0,p,q.b)}return A.wp(s)}if(t.j.b(a)){r=t.z
return A.ah(J.xm(a,A.G2(),r),r)}if(a==null||A.bo(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fV)
return a}throw A.b(A.a1("save contains unsupported value "+J.fa(a).p(0),null,null))},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(){},
eK:function eK(a,b){this.a=a
this.b=b},
xC(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.nS(a,b,c,d,e,f,g,s,r,h)},
xD(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aU(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.fH)
r=d.h(0,"runSeed")
q=A.aU(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aU(p)||p<1||typeof o!="number")throw A.b(B.h6)
if(!isFinite(5760))throw A.b(A.ag(5760,"daySeconds","must be finite and > 0"))
n=new A.jL(p,7,5760)
n.h7(o)
s=t.N
m=t.z
l=A.BN(a4,A.aJ(a0,s,m))
k=A.B7(l,A.aJ(a,s,m),n)
j=A.xF(c)
A.BE(A.aJ(a1,s,m)).k7(j)
m=A.aJ(a2,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bo(f))A.i(B.fl)
e=A.BV(d.h(0,"narrative"))
if(e==null)e=A.pl(null,null,null)
return A.xC(c,q,j,n,l,k,new A.jw(i,h,g,f),e)},
E4(a){var s
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
ev:function ev(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.c=a
this.d=b},
nT:function nT(a,b){this.a=a
this.b=b},
nS:function nS(a,b,c,d,e,f,g,h,i,j){var _=this
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
nU:function nU(a){this.a=a},
nV:function nV(){},
nW:function nW(){},
nX:function nX(a){this.a=a},
nY:function nY(){},
jk:function jk(a,b){this.a=a
this.b=b
this.d=null},
mX:function mX(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
om:function om(){this.b=0},
Y:function Y(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jC:function jC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nw:function nw(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
oo:function oo(){},
on:function on(a,b,c){this.a=a
this.b=b
this.c=c},
Ga(a){var s,r,q,p,o,n,m,l
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
return new A.cy(B.as,p,new Uint16Array(A.a_(a.b)),new A.j6(new A.K(s.a,s.b,s.c),new A.K(s.d,s.e,s.f)))},
G9(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.F9(a,new A.vw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jD(o,p.c,p.e))}return n},
F9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
throw A.b(A.w("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.I(d,0,B.b.bn(d,":")):null
l=new A.d3(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.J(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("am<2>")
q=A.L(new A.am(s,q),q.i("m.E"))
B.a.O(q,new A.uC())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.v)(q),++c)r.push(q[c].mX(a))
return r},
DN(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jC(r,q,p,o,n,m)},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
vw:function vw(a){this.a=a},
uC:function uC(){},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
es:function es(a,b){this.a=a
this.b=b},
jE:function jE(){},
Fz(a){var s,r,q,p=new A.on(A.c([],t.Dl),A.c([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.E7(p,a,B.cW[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.Y(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.Y(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.af(r,new A.Y(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.af(r,q,new A.Y(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.Y(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.Y(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.af(q,new A.Y(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.af(q,r,new A.Y(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.af(new A.Y(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.Y(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.Y(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.af(new A.Y(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.Y(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.Y(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.Y(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.Y(7.875,16.32,16.383,-1,0,0,1,1,0)
p.af(r,new A.Y(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.af(r,q,new A.Y(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.Y(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.Y(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.af(q,new A.Y(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.af(q,r,new A.Y(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.F_(p,15.75,15.75,12.044999999999998,16.32)
A.DQ(p,15.75,15.75,16.32)
A.E3(p,15.75,15.75,12.044999999999998)
A.Eb(p,a,15.75)
A.F5(p,15.75,15.75)
A.DM(p,15.75)
return p.kg()},
E7(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.A!==b7,p=B.o!==b7,o=B.n===b7,n=B.C===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.v)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.e9(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aP(i),b=J.M(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aF(i)!==b7)continue
B:{if(!p||o){a0=g+a.ai(i)
break B}if(!q||n){a0=e+a.ai(i)
break B}a0=null}B.a.l(b4,new A.e9(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.o||b7===B.n?b8:b9
r=t.i
a1=A.aT([0,s],r)
a2=A.aT([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.v)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.L(a1,a1.$ti.c)
B.a.V(a4)
a5=A.L(a2,a2.$ti.c)
B.a.V(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.W(b4,new A.uj(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Ea(b5,b4,b7,b8,b9,c1)
A.E8(b5,b4,b7,b8,b9,c1)
A.E9(b5,b4,b7,b8,b9,c0,c1)},
E9(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aT([0,a4===B.o||a4===B.n?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.v)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.L(a1,a1.$ti.c)
B.a.V(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.W(a3,new A.ui(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
E8(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
break}}if(a5!==B.o)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.A(2,a+0.18,n,r,a,a1,p)}}},
Ea(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.F3(a2,g,a4,a5,a6,a7,q)}},
F3(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
F_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.F0(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
F0(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.Y(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.Y(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.af(n,new A.Y(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.af(n,m,new A.Y(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.Y(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.Y(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.af(m,new A.Y(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.af(m,n,new A.Y(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
DQ(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
E3(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Eb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ai("hall")
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
F5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
DM(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uj:function uj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ui:function ui(a,b,c){this.a=a
this.b=b
this.c=c},
G0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.x4(b,d,c)
if(k!=null){s=k.b
return new A.dQ(B.f4,k.a,s)}r=A.A9(b,d,c)
if(r!=null){if(r.ax)q=!r.ay
else q=!1
s=q?"close door":"open door"
return new A.dQ(B.f5,r.a,s)}if(A.Aa(b,d,c)!=null)return B.f9
p=A.G_(a,b,c,d)
if(p!=null)return new A.dQ(B.ci,p.a,"inspect the "+p.b)
o=A.A8(b,c,d,e)
if(o!=null){n=e.k8(o.c)
q=o.y
m=q==null
l=m?o.a:q
return new A.dQ(B.f7,l,m?"inspect the "+n.b:"inspect "+q)}return B.fa},
A8(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.m9(a5,s,4.5)
for(q=a6.n5(a4),p=J.M(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.k8(i.c)
g=i.f.a
f=i.n6(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.j(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gaB()
a0=a3.b
a1=Math.acos(B.c.F(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.ma(a5,a4,a3.a,new A.j(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
G_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hi(c)
if(s.length===0)return f
r=d.aA(e)
q=A.m9(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.v)(s),++l){k=s[l]
j=b.a
i=new A.j(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gaB()
j=b.b
if(Math.acos(B.c.F(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.ma(d,c,b.a,new A.j(n,m,o)))return k}return f},
de:function de(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
FA(a,b){var s,r=new A.du(new Float32Array(5376)),q=new A.du(new Float32Array(5376)),p=new A.du(new Float32Array(5376)),o=new A.du(new Float32Array(5376)),n=b.d,m=a.aA(b),l=A.jT(b.y),k=A.jT(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cR(new A.j(j,i,h),new A.j(j,i,f),new A.j(d,i,f),new A.j(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cR(new A.j(j,i,h),new A.j(d,i,h),new A.j(d,i,f),new A.j(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.DH(p,a,b,m,B.cW[s])
for(j=a.aP(b.a),i=J.M(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
g=h.at
if(g==null)continue
A.yX(o,b,m,h,!0)}j=B.y.b2(r.a,0,r.b)
i=B.y.b2(q.a,0,q.b)
h=B.y.b2(p.a,0,p.b)
B.y.b2(o.a,0,o.b)
return new A.q5(j,i,h)},
Fx(a,b,c){var s,r,q=c.at
if(q==null)return new Float32Array(0)
s=new A.du(new Float32Array(5376))
r=a.aA(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.yY(s,b,r,c,q)
return B.y.b2(s.a,0,s.b)},
Fy(a,b){var s,r,q,p,o=new A.du(new Float32Array(5376)),n=a.aA(b)
for(s=a.aP(b.a),r=J.M(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
p=q.at
if(p==null)continue
A.yX(o,b,n,q,!1)}return B.y.b2(o.a,0,o.b)},
DH(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a5===B.o||a5===B.n?a4.a:a4.c,a0=A.c([],t.l5)
for(s=a3.a,r=a2.aP(s),q=J.M(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.aF(s)
if(o===a5)a0.push(new A.e8(p.ai(s),p.ai(s)+p.w,0,p.x))}for(s=a3.e,r=s.length,n=0;n<s.length;s.length===r||(0,A.v)(s),++n){m=s[n]
if(m.b===a5){q=m.c
p=m.d
a0.push(new A.e8(q,q+m.e,p,p+m.f))}}s=t.i
r=A.aT([0,a],s)
for(q=a0.length,p=t.n,n=0;n<a0.length;a0.length===q||(0,A.v)(a0),++n){l=a0[n]
r.J(0,A.c([l.a,l.b],p))}k=A.L(r,r.$ti.c)
B.a.V(k)
s=A.aT([0,a4.b],s)
for(r=a0.length,n=0;n<a0.length;a0.length===r||(0,A.v)(a0),++n){l=a0[n]
s.J(0,A.c([l.c,l.d],p))}j=A.L(s,s.$ti.c)
B.a.V(j)
for(i=0;h=i+1,h<k.length;i=h)for(g=0;f=g+1,s=j.length,f<s;g=f){r=k.length
if(!(i<r))return A.d(k,i)
e=k[i]
if(!(h<r))return A.d(k,h)
d=k[h]
if(!(g<s))return A.d(j,g)
c=j[g]
b=j[f]
if(B.a.W(a0,new A.tv(e,d,c,b)))continue
A.Fp(a1,a3,a4,a5,e,d,c,b)}A.DI(a1,a3,a4,a5,a,a0)},
DI(a,b,c,d,e,f){return},
h3(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.al(a,new A.j(r+e,q+g,p),new A.j(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.al(a,new A.j(r+e,q+g,s-i),new A.j(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.al(a,new A.j(s-i,q+g,p+e),new A.j(s,q+h,p+f),j)
return
case 3:A.al(a,new A.j(r,q+g,p+e),new A.j(r+i,q+h,p+f),j)
return}},
al(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.j(o,n,m),k=c.a,j=new A.j(k,n,m),i=c.b,h=new A.j(k,i,m),g=new A.j(o,i,m)
m=c.c
s=new A.j(o,n,m)
r=new A.j(k,n,m)
q=new A.j(k,i,m)
p=new A.j(o,i,m)
a.bp(j,l,g,h,d)
a.bp(s,r,q,p,d)
a.bp(l,s,p,g,d)
a.bp(r,j,h,q,d)
a.bp(l,j,r,s,d)
a.bp(g,p,q,h,d)},
Fp(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.jT(n).e
a.cR(s.ak(0,o),r.ak(0,o),q.ak(0,o),p.ak(0,o),A.jT(n).c,(f-e)/m,(a1-a0)/m)
l=A.Fq(b,d)
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
default:j=k}A.al(a,o,j,A.F6(A.jT(n).c,0.68))},
F6(a,b){var s,r=new A.uA(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hA()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hA()
r=r.$1(a&255)
if(typeof r!=="number")return A.uP(r)
return(q<<16|s<<8|r)>>>0},
Fq(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
yX(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aF(d),b=a3.ai(d),a=b+a3.w
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
A.al(a0,new A.j(r+l,s,d),new A.j(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.al(a0,new A.j(l,s,d),new A.j(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.al(a0,new A.j(r+n,s+m,d),new A.j(r+h,j,i),q)
A.al(a0,new A.j(k,s,d),new A.j(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.al(a0,new A.j(r+l,s,k),new A.j(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.al(a0,new A.j(l,s,k),new A.j(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.al(a0,new A.j(r+n,s+m,k),new A.j(r+h,i,d),q)
A.al(a0,new A.j(j,s,k),new A.j(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.al(a0,new A.j(n,s,d+k),new A.j(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.al(a0,new A.j(n,s,k),new A.j(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.al(a0,new A.j(n,s+e,d+m),new A.j(r,j,d+l),q)
A.al(a0,new A.j(n,s,i),new A.j(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.al(a0,new A.j(r,s,d+l),new A.j(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.al(a0,new A.j(r,s,l),new A.j(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.al(a0,new A.j(r,s+e,d+n),new A.j(k,j,d+m),q)
A.al(a0,new A.j(r,s,i),new A.j(k,s+0.05,l),q)
break}if(a4)A.yY(a0,a1,a2,a3,q)
A.DG(a0,a1,a2,a3)},
DG(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.ai(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aF(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.o
q=!r||s===B.n?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.h3(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.n?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.h3(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.n?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.h3(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.n?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.h3(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.n,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.h3(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.h3(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.h3(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
yY(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aF(o),m=d.ai(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.al(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.al(a,new A.j(p,s,o-d.w),new A.j(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.al(a,new A.j(p-d.w,s,o),new A.j(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.al(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.al(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.al(a,new A.j(p,s,o-0.055),new A.j(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.al(a,new A.j(p-0.055,s,o),new A.j(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.al(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break}},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
tv:function tv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uA:function uA(a){this.a=a},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xF(a){var s=A.c([],t.eY),r=A.c([],t.J),q=t.N
q=new A.ok(s,r,A.c([],t.DZ),A.n(q,t.W),A.n(q,t.R),new A.om())
q.ip()
q.io()
q.ih()
q.ii()
q.iX()
s=s.length
if(s!==8)A.i(A.l("expected eight rooms, got "+s))
if(q.ghb()<1||11<q.ghb())A.i(A.l("showcase apertures must expose a stable inside/outside split"))
if(r.length!==11)A.i(A.l("expected eleven showcase portals"))
q.jR()
q.jP()
return q},
ok:function ok(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ou:function ou(a){this.a=a},
ov:function ov(){},
ow:function ow(){},
ot:function ot(){},
ox:function ox(a){this.a=a},
oy:function oy(){},
m9(a,b,c){var s=a.aA(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
ma(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.EA(a,s,c,d)},
EA(a,b,c,d){var s,r,q,p,o=a.aA(b),n=d.aq(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tA(a,b,o,B.o,r,q,p,c,n,m))return!0
if(A.tA(a,b,o,B.n,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tA(a,b,o,B.C,s,r,q,c,n,m))return!0
if(A.tA(a,b,o,B.A,s+o.a,r,q,c,n,m))return!0
return!1},
tA(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.ak(0,a6.al(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.o||a1===B.n
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aP(m),k=J.M(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aF(m)===a1){g=q.ai(m)
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
x4(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.m9(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.v)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.j(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gaB()
f=a.b
if(Math.acos(B.c.F(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.ma(a0,a1,a.a,new A.j(h,g,i)))continue
m=d
l=j}}return l},
A9(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.m9(b,j,4.5):4.5
for(s=b.aP(c),r=J.M(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.mj(c,o)
m=a.a
l=new A.j(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zl(l,k,a,i,0.5236)||k>=q)continue
if(!A.ma(b,c,a.a,n))continue
q=k
p=o}return p},
Aa(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.m9(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.v)(r),++n){m=r[n]
l=A.Fr(b,h,m)
k=a.a
j=new A.j(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zl(j,i,a,s,0.5236)||i>=p)continue
if(!A.ma(b,c,a.a,l))continue
p=i
o=m}return o},
zl(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.F(a.gaB().c3(c.b),-1,1))<=e},
Fr(a,b,c){var s=a.aA(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.j(q.a+r,p,q.c)
break
case 2:q=new A.j(q.a+r,p,q.c+s.c)
break
case 1:q=new A.j(q.a+s.a,p,q.c+r)
break
case 3:q=new A.j(q.a,p,q.c+r)
break
default:q=null}return q},
nv:function nv(){this.a=null
this.b=0},
qW:function qW(){},
qX:function qX(){},
vM:function vM(a){this.a=a},
vK:function vK(a){this.a=a},
vL:function vL(a){this.a=a},
oG:function oG(a){this.a=a},
dn:function dn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
op:function op(a){this.a=a},
oq:function oq(a){this.a=a},
cT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bv(i,a,b,e,f,k,l,p,g,!1,!1,d,!1,c,m,j)},
jH:function jH(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e,f,g,h){var _=this
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
fx:function fx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b){this.a=a
this.b=b},
e3:function e3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
vN:function vN(a){this.a=a},
vO:function vO(a){this.a=a},
ol:function ol(){this.b=this.a=null},
ey:function ey(a,b){this.a=a
this.b=b},
or:function or(){this.b=this.a=null},
cQ:function cQ(a,b){this.a=a
this.b=b},
xH(a,b,c,d,e,f){var s=t.N
return new A.os(e,f,c,a,A.br(A.aJ(d,s,s),s,s),A.ah(b,s))},
xI(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
h.k(0,p.a,new A.hU(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.v)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.v)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l){j=o[l]
i.k(0,j.a,new A.hH(j.d,j.r))}return A.xH(a.r.b,B.m,i,B.d5,h,s)},
BE(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jH
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bc
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aU(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fF)
p=t.N
o=A.n(p,t.DL)
for(n=a.gL(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cl)
l=A.aJ(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bo(j)||!A.bo(i))A.i(B.cl)
o.k(0,k,new A.hU(j,i))}h=A.n(p,t.y)
for(n=a0.gL(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bo(l.b))throw A.b(B.fC)
h.k(0,k,A.O(l.b))}g=A.n(p,t.m2)
for(n=a1.gL(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cj)
l=A.aJ(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bo(f)||!A.bo(e))A.i(B.cj)
g.k(0,k,new A.hH(f,e))}d=A.n(p,p)
for(q=s.gL(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.hf)
d.k(0,n,A.q(p.b))}c=A.c([],t.s)
for(q=J.M(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fb)
B.a.l(c,b)}return A.xH(a2,c,g,d,o,h)},
wO(a,b){return a.a.a===b.a&&a.a8(0,b.gar(b))},
os:function os(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
jT(a){var s=B.bk.h(0,a)
if(s==null)throw A.b(A.l("Unknown house surface material: "+a))
return s},
bf:function bf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bk(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hG(e,A.E(e).c)
q=new A.ea()
q.bQ((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hn(a,q,2,r,1+s,A.aT(["time"],t.N))
break
case 3:A.hn(a,q,3,r,1+s,A.aT(["place"],t.N))
break
case 4:A.hn(a,q,4,r,2+s,p)
A.Bg(a,q,4)
break
case 5:A.hn(a,q,5,r,s,p)
A.Be(a,q,5)
break
case 6:A.hn(a,q,6,r,s,p)
A.Bf(a,q)
A.Bj(a,q,6)
break
case 7:A.Bh(a,q,7)
break
default:if(s>0)A.hn(a,q,b,r,s,p)}},
Bd(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Bi(a,b,c))return!1
return!0},
hn(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));s.m();){r=s.d
if(A.Bd(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d0(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.xz(a,b,o[p],f)}},
xz(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aJ(B.a.gY(o).a,n,n)
if(d==null)s=A.c(B.B.slice(0),t.s)
else{n=t.vY
s=A.L(new A.F(B.B,t.Ag.a(new A.nq(d)),n),n.i("m.E"))}n=s.length
if(n===0)return
n=b.aO(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eh(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aO(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dB(c.a,m,B.a.gY(o).b)},
Bg(a,b,c){var s=A.xA(a,b,c)
if(!a.c0(s))return
a.er(c,t.G.a(s),0,B.b2,null)},
xA(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.B[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aO(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
Be(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d0(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aJ(B.a.gY(i).a,s,s)
r=p.c
n=A.aJ(B.a.gY(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.B[m]
k=o.h(0,l)
j=s.eh(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aO(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dB(q.a,o,B.a.gY(i).b)
a.dB(p.a,n,B.a.gY(r).b)},
Bf(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aO(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.aa(0,q[r].a)},
Bj(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aO(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.xz(a,b,q[s],null)},
Bh(a,b,c){var s=c+1,r=A.xA(a,b,s)
if(!a.c0(r))return
a.er(s,t.G.a(r),0,B.b2,null)},
Bi(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gY(b.c).c===B.ay}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gY(b.c).c===B.ay}if(c===21)return b.e
return!1},
nq:function nq(a){this.a=a},
CJ(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p=A.aD(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rz(n)},
p_(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.k4(A.br(p,q,q),b,c)},
xV(a){var s=t.N
return A.p_(t.c.a(a.h(0,"fields")).bI(0,new A.p0(),s,s),A.af(a.h(0,"shakiness")),A.Bp(B.iR,A.q(a.h(0,"hand")),t.qX))},
Bo(a){var s,r,q,p,o=a.h(0,"margin"),n=A.e(a.h(0,"ordinal")),m=A.e(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.M(t.j.a(a.h(0,"revisions"))),r=t.c;s.m();)l.push(A.xV(r.a(s.gn())))
s=A.an(a.h(0,"corroborator"))
q=A.O(a.h(0,"locked"))
p=A.z6(a.h(0,"lastReadDay"))
return new A.bP(n,m,l,s,q,p,o==null?null:A.xV(r.a(o)))},
dS:function dS(a,b){this.a=a
this.b=b},
rz:function rz(a){this.a=a},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
p0:function p0(){},
p1:function p1(a){this.a=a},
bP:function bP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xS(a){return new A.oJ(a,A.n(t.S,t.g),A.a3(t.N),A.c([],t.t))},
BN(a,b){var s,r,q,p,o=A.xS(a)
o.e=A.e(b.h(0,"nextOrdinal"))
o.f=A.e(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.AG(s.a(b.h(0,"tags")),t.N))
for(s=J.M(s.a(b.h(0,"entries"))),r=t.c,q=o.b;s.m();){p=A.Bo(r.a(s.gn()))
q.k(0,p.a,p)}return o},
oJ:function oJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
oQ:function oQ(a,b){this.a=a
this.b=b},
mI:function mI(){},
he:function he(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g},
mJ:function mJ(){},
oV:function oV(){},
oU:function oU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
pH:function pH(){},
pG:function pG(a,b,c){this.b=a
this.c=b
this.d=c},
pI:function pI(){},
BZ(a,b,c){return B.kG},
kj:function kj(a,b){this.a=a
this.b=b},
pJ:function pJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pK:function pK(){},
k3:function k3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pR:function pR(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
ya(a){if(!isFinite(0))A.i(A.ag(0,"interpolation",null))
return new A.q3(a)},
kv:function kv(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
q3:function q3(a){this.a=a},
kw:function kw(a,b,c){this.a=a
this.b=b
this.c=c},
y9(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hG(c,A.E(c).c)
r=A.L(r,A.o(r).c)
B.a.V(r)
s=t.N
r=A.ah(r,s)
r=new A.q2(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.br(l,s,t.X))
r.i4(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Ch(a,b,c,d,e){var s=A.m4("RENDERER_SHA"),r=A.m4("GAME_SHA"),q=A.m4("DART_SDK_VERSION")
return A.y9(a,"2e9194353aa9-830a14587641-dirty",b,!1,d,r,A.m4("LOCKFILE_SHA256"),e,A.m4("PROJECT_VERSION"),s,q,null)},
m4(a){var s=B.jy.h(0,a)
return s.length===0?null:s},
q2:function q2(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
q4:function q4(a){var _=this
_.a=a
_.d=_.c=_.b=0},
qR:function qR(a){this.a=a},
a0(a,b,c,d,e,f,g,h,i,j){return new A.e2(e,g,a,f,i,h,j,c,c,b)},
cD:function cD(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c,d,e,f,g,h,i,j){var _=this
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
qS:function qS(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
qV:function qV(a){this.a=a},
qU:function qU(a){this.a=a},
qT:function qT(a){this.a=a},
xw(a,b,c,d,e,f,g){var s=A.L(f,t.ho)
if(b<0||a<0||e<0)A.i(A.a1("saved day-loop resources must not be negative",null,null))
return new A.ni(c,g,b,a,e,d===!0,s)},
B7(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.fs)
s=A.c([],t.El)
for(r=J.M(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fG)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aU(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fn)
f=A.bE(new A.F(B.cP,q.a(new A.nj(h)),p),o)
e=A.bE(new A.F(B.cV,n.a(new A.nk(g)),m),l)
if(f==null||e==null)throw A.b(B.ha)
B.a.l(s,new A.fJ(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aU(d)||!A.aU(c)||!A.aU(b)||!A.bo(a))throw A.b(B.fN)
return A.xw(c,d,a1,a,b,s,a3)},
bI:function bI(a,b){this.a=a
this.b=b},
bx:function bx(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nj:function nj(a){this.a=a},
nk:function nk(a){this.a=a},
jW:function jW(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.b=a
this.c=b},
eS:function eS(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
oz:function oz(a){this.c=a},
oD:function oD(a,b){this.a=a
this.b=b},
oE:function oE(){},
wx(a){var s,r,q,p=A.c([],t.s),o=A.a3(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.h7)
B.a.l(p,q)}return p},
ch:function ch(a,b){this.a=a
this.b=b},
q6:function q6(){},
cV:function cV(){},
q7:function q7(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
Eg(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uk(s).$0())
return r},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rA:function rA(a){this.b=a},
uk:function uk(a){this.a=a},
By(a){var s=A.L(a.c,t.z)
B.a.O(s,new A.nR())
return new A.nQ(A.ah(s,t.Dm))},
Bx(a,b){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.jJ(a,A.fw(B.m,t.N))
s=t.N
r=J.xn(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.jJ(a,A.fw(new A.F(r,q.i("k(m.E)").a(new A.nP(a)),q.i("F<m.E>")),s))},
nQ:function nQ(a){this.a=a},
nR:function nR(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
nP:function nP(a){this.a=a},
pl(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.J(0,a)
s=A.n(r,r)
if(b!=null)s.J(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.J(0,c)
return new A.pk(q,s,r)},
BV(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aU(s)||s!==1)return l
r=A.y1(a.h(0,"choices"))
q=A.y1(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gL(),k=k.gu(k);k.m();){n=k.gn()
m=A.Bu(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pl(r,q,p)},
y1(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gL(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.q(q.b))}return r},
Bu(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aU(r)||r<1||!A.aU(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cL(s,r,q,p)},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function pm(){},
pn:function pn(){},
po:function po(){},
cL:function cL(a,b,c,d){var _=this
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
pE:function pE(a){this.a=a},
pF:function pF(a){this.a=a},
fL(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gL(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
r1:function r1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
r2:function r2(){},
r3:function r3(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b){this.a=a
this.b=b},
l4:function l4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Cv(a){var s,r,q,p,o,n,m=B.j.aW(a,null)
if(!t.f.b(m))throw A.b(B.h0)
s=m.h(0,"sources")
r=m.h(0,"scenes")
q=m.h(0,"events")
if(q==null)q=B.bc
if(J.aa(m.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.fY)
p=A.c([],t.s)
for(o=J.M(s);o.m();){n=o.gn()
if(typeof n!="string"||n.length===0)A.i(A.a1("source must be a non-empty string",null,null))
p.push(n)}p=A.c([],t.wM)
for(o=J.M(r);o.m();)p.push(A.Cn(o.gn()))
p=A.c([],t.tS)
for(o=J.M(q);o.m();)p.push(A.Cm(o.gn()))
return new A.r0(p)},
Cm(a){var s,r,q,p,o,n,m,l,k,j="kind",i="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.q(a.h(0,"id")).length===0||typeof a.h(0,j)!="string"||A.q(a.h(0,j)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,i)!="string"||A.q(a.h(0,i)).length===0)throw A.b(B.fA)
s=a.h(0,"effects")
if(s==null)s=B.bc
if(!t.j.b(s)||J.vB(s,new A.qd()))throw A.b(B.h2)
r=B.c.ad(A.af(a.h(0,"day")))
q=A.af(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.fT)
p=new A.qe(a)
o=A.q(a.h(0,"id"))
n=A.q(a.h(0,j))
m=A.q(a.h(0,i))
p.$1("source")
p.$1("speaker")
p.$1("cue")
l=A.c([],t.s)
for(k=J.M(s);k.m();)l.push(A.q(k.gn()))
p.$1("nextScene")
return new A.i2(o,n,r,q,m,A.ah(l,t.N))},
Cn(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.fq)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.c.ad(r)!==r)throw A.b(B.fK)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.a1("screenplay scene "+s+" has invalid arrays",null,null))
m=B.c.ad(r)
l=A.c([],t.s)
for(k=J.M(p);k.m();){j=k.gn()
if(typeof j!="string"||j.length===0)A.i(B.fS)
l.push(j)}l=A.c([],t.rn)
for(k=J.M(o);k.m();){j=k.gn()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.i(B.hb)
A.q(j.h(0,"kind"))
A.q(j.h(0,"text"))
A.an(j.h(0,"speaker"))
l.push(new A.kA())}i=A.c([],t.gg)
for(l=J.M(n);l.m();)i.push(A.Cl(l.gn()))
return new A.kD(s,m)},
Cl(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.fw)
s=A.q(a.h(0,m))
A.q(a.h(0,"prompt"))
r=A.c([],t.yv)
for(q=J.M(t.tY.a(a.h(0,"options")));q.m();){p=q.gn()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.i(B.fX)
o=A.q(p.h(0,m))
n=A.q(p.h(0,"label"))
A.q(p.h(0,"next"))
r.push(new A.kC(o,n))}return new A.kB(s)},
r0:function r0(a){this.c=a},
i2:function i2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f},
qd:function qd(){},
qe:function qe(a){this.a=a},
kD:function kD(a,b){this.a=a
this.b=b},
kA:function kA(){},
kB:function kB(a){this.a=a},
kC:function kC(a,b){this.a=a
this.b=b},
r4:function r4(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
r5:function r5(){},
r6:function r6(){},
j7:function j7(a){this.a=a},
vD:function vD(a,b,c){this.b=a
this.e=b
this.f=c},
AM(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.fe)
s=new A.mh()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wj(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dG(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.bd(B.bg,new A.mf(a),new A.mg()))},
cJ:function cJ(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mh:function mh(){},
mf:function mf(a){this.a=a},
mg:function mg(){},
mt:function mt(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mv:function mv(a){this.a=a},
mu:function mu(a,b){this.a=a
this.b=b},
AR(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.fL)
s=new A.mz()
return new A.dH(s.$1$2(B.be,a.h(0,"output"),t.xs),s.$1$2(B.b9,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b8,a.h(0,"reverb"),t.gc),s.$1$2(B.b6,a.h(0,"ducking"),t.ul))},
cr:function cr(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mz:function mz(){},
mA:function mA(a,b){this.a=a
this.b=b},
mB:function mB(a){this.a=a},
mL:function mL(a){this.a=a
this.b=null},
mP(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.ag(c,"level","must be between 1 and 6"))
s=A.y(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.mN(s,b)
return s},
dL(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.y(a,"button","brush-button brush-state-"+s.b,r)
A.mN(q,b)
q.type="button"
q.disabled=s===B.ar
q.addEventListener("click",A.U(new A.mO(c)))
return q},
AV(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.ar
A.mN(s,b)
s.addEventListener("change",A.U(new A.mS(d,s)))
return s},
AU(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.A(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.ar
A.mN(s,b)
s.addEventListener("input",A.U(new A.mR(s,e)))
return s},
vI(a,b){var s=B.b.hP(A.q(a.className),A.Cc("\\s+")),r=A.E(s),q=r.i("F<1>"),p=A.L(new A.F(s,r.i("k(1)").a(new A.mQ()),q),q.i("m.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.Z(p," ")
a.setAttribute("data-brush-state",s)},
mN(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gjV())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.ar)a.setAttribute("aria-disabled","true")},
mO:function mO(a){this.a=a},
mS:function mS(a,b){this.a=a
this.b=b},
mR:function mR(a,b){this.a=a
this.b=b},
mQ:function mQ(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mU:function mU(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
mV:function mV(a){this.a=a},
xu(a){var s=!1
if(a.length!==0)if(!B.dB.q(0,a))s=B.lE.q(0,a)||B.lw.q(0,a)||B.lD.q(0,a)||!B.b.T(a,"Mouse")
return s},
E_(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.I(a,A.o(a).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.aD(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
EG(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.I(a,A.o(a).i("I<1,2>"))
p=J.M(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fk(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.eA(B.jv,s,r)
if(b!=null)q.J(0,b)
q.J(0,A.EG(a))
s=new A.fj(g,d,h,e,f,c,A.br(A.E_(q),s,r))
s.C()
return s},
B4(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.ck)
s=a.h(0,"version")
r=J.ej(s)
if(!r.a5(s,1)&&!r.a5(s,2))throw A.b(B.ck)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gL(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fB)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.AH(m,new A.n7())){o=A.c([],r)
for(l=J.M(m);l.m();)o.push(A.q(l.gn()))
q.k(0,n,o)}else throw A.b(B.fi)}j=A.af(a.h(0,"horizontalSensitivity"))
r=A.af(a.h(0,"verticalSensitivity"))
p=A.O(a.h(0,"invertX"))
o=A.O(a.h(0,"invertY"))
return A.fk(null,q,A.O(a.h(0,"holdToInteract")),j,p,o,2,r)},
wn(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gL(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.L(r.b,p)
o.k(0,q,r)}return o},
wK(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
wW(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fj:function fj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n9:function n9(){},
n8:function n8(a){this.a=a},
na:function na(){},
nb:function nb(){},
nc:function nc(){},
n7:function n7(){},
dI:function dI(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.c=b},
jp:function jp(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
B3(a){var s=t.N,r=t.m
r=new A.hl(A.fk(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.a(a.createElement("div")))
r.aT(a)
r.hY(a)
return r},
hl:function hl(a,b,c,d,e,f){var _=this
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
n5:function n5(a,b){this.a=a
this.b=b},
n6:function n6(a){this.a=a},
n4:function n4(a,b){this.a=a
this.b=b},
n2:function n2(a,b){this.a=a
this.b=b},
n3:function n3(a,b){this.a=a
this.b=b},
B5(a){var s=new A.nd(a,A.a(a.createElement("div")))
s.aT(a)
s.hZ(a)
return s},
nd:function nd(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
ne:function ne(a){this.a=a},
Bb(a){var s=new A.nm(A.y(a,"div","door",null))
s.i0(a)
return s},
xx(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.Z(s,"; ")+"."},
nm:function nm(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nn:function nn(a){this.a=a},
no:function no(a,b){this.a=a
this.b=b},
np:function np(a,b){this.a=a
this.b=b},
Bl(a){var s=new A.ns(a,A.a(a.createElement("div")))
s.aT(a)
s.i1(a)
return s},
ns:function ns(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nt:function nt(a){this.a=a},
nZ:function nZ(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
o_:function o_(){},
Bz(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.o0(a.b===B.cs,a.c===B.cw,s,a.e===B.ct,a.f===B.cq,a.r===B.cy,a.w,a.x)},
o0:function o0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vJ(a,b,c,d,e,f,g,h,i,j,k){return new A.fr(e,g,k,f,b,h,d,c,a,i,j)},
BA(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.fU)
s=new A.o1(a)
r=a.h(0,"contextualReminders")
if(!A.bo(r))throw A.b(B.h8)
q=!A.bo(a.h(0,i))||A.O(a.h(0,i))
p=s.$1$2("interactionMode",B.bf,t.bK)
o=s.$1$2("promptDensity",B.bj,t.dn)
n=s.$1$2("textPacing",B.bh,t.j_)
m=s.$1$2("journalLayout",B.ba,t.gm)
l=s.$1$2("confirmations",B.b4,t.aJ)
k=s.$1$2("saveFeedback",B.bb,t.mx)
j=s.$1$2("focusLossBehavior",B.aA,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.b7,t.vS):B.aV
return A.vJ(s,l,r,j,p,m,o,k,q,A.bo(a.h(0,g))&&A.O(a.h(0,g)),n)},
dh:function dh(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
o1:function o1(a){this.a=a},
o2:function o2(a,b){this.a=a
this.b=b},
o3:function o3(a){this.a=a},
xE(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.fJ)
s=B.a.bd(B.cQ,new A.oe(a),new A.of())
r=A.q(a.h(0,"renderScale"))
q=A.O(a.h(0,"dynamicResolution"))
p=A.q(a.h(0,"frameTarget"))
o=A.q(a.h(0,"antialiasing"))
n=A.q(a.h(0,"textureQuality"))
m=A.an(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.an(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.an(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=A.z4(a.h(0,"fbxDiagnostics"))
i=new A.dR(1,s,r,q,p,o,n,m,l,k,j===!0)
i.C()
return i},
ft(a,b){var s=b==null?B.b1:b
return new A.og(s,a==null?B.b1:a)},
A3(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dz(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dz("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fD(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cH&&b.a<2){q=q.fE(B.b0)
B.a.l(s,"High preset was reduced to Standard")}return new A.o8(q,A.ah(s,t.N))},
cs:function cs(a,b){this.a=a
this.b=b},
dR:function dR(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
oe:function oe(a){this.a=a},
of:function of(){},
og:function og(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b},
BC(a){var s=new A.hw(A.n(t.N,t.m),B.b1,a,A.a(a.createElement("div")))
s.aT(a)
s.i2(a)
return s},
hw:function hw(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.z=_.y=_.x=null
_.Q=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
ob:function ob(a){this.a=a},
oc:function oc(a){this.a=a},
od:function od(a){this.a=a},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(a){this.a=a},
j8:function j8(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function oh(){this.c=0},
BD(a){var s=new A.oi(a,A.a(a.createElement("div")))
s.aT(a)
s.i3(a)
return s},
oi:function oi(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oj:function oj(a){this.a=a},
oK:function oK(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function oO(){},
oP:function oP(){},
cS:function cS(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pt:function pt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
ze(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(p.length);++r){q=A.D(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hS:function hS(){},
bg:function bg(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(){},
pA:function pA(){},
bU:function bU(a,b,c){this.a=a
this.c=b
this.d=c},
py:function py(a){this.a=a},
pB:function pB(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=b},
pC:function pC(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pD:function pD(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
pP:function pP(a){this.a=a
this.b=null},
Co(a){var s=new A.qg(a,A.a(a.createElement("div")))
s.aT(a)
s.i5(a)
return s},
qg:function qg(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qh:function qh(a,b){this.a=a
this.b=b},
qi:function qi(a){this.a=a},
kE(a,b){var s=t.N,r=t.m
r=new A.fI(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.vx(),B.an,A.n(s,r),A.n(s,r),B.aN,A.n(s,r),a,A.a(a.createElement("div")))
r.aT(a)
r.i6(a,b)
return r},
fI:function fI(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qJ:function qJ(a,b){this.a=a
this.b=b},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qz:function qz(a,b){this.a=a
this.b=b},
qA:function qA(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
qB:function qB(a){this.a=a},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(a,b){this.a=a
this.b=b},
qx:function qx(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a){this.a=a},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
qs:function qs(a){this.a=a},
qt:function qt(a){this.a=a},
qu:function qu(a){this.a=a},
qv:function qv(a){this.a=a},
qw:function qw(a){this.a=a},
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a){this.a=a},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qN(a){return B.a.bd(B.D,new A.qO(a),new A.qP(a))},
Cp(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
q.k(0,r.a,r.e)}return q},
ds(a,b){var s=t.z
s=A.eA(A.Cp(),s,s)
if(a!=null)s.J(0,a)
s=new A.qM(b,A.br(s,t.N,t.K))
s.i7(a,b)
return s},
ye(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.b(B.h5)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fr)
return A.ds(A.aJ(s,t.N,t.K),A.e(a.h(0,"version")))},
bw:function bw(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
aX:function aX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
qM:function qM(a,b){this.a=a
this.b=b},
w2(a,b){var s=b==null?A.ds(null,1):b
return new A.qQ(s,a==null?A.ds(null,1):a)},
Cq(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.D[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eE(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cU(r)
J.bp(l,s.a,r)}catch(n){if(!(A.as(n) instanceof A.B))throw n}}m=A.ds(l,1)
return A.w2(m,m)},
qQ:function qQ(a,b){this.a=a
this.b=b},
Cr(a){var s=new A.qY(a,A.a(a.createElement("div")))
s.aT(a)
s.i8(a)
return s},
qY:function qY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qZ:function qZ(a,b,c){this.a=a
this.b=b
this.c=c},
AP(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gL(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cp(p+m+":"+k,m,l.a,l.b,j))}}B.a.O(i,new A.mr())
return new A.mq(A.ah(i,t.bC),A.a3(t.N))},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mq:function mq(a,b){this.a=a
this.b=b},
ms:function ms(){},
mr:function mr(){},
CI(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.n1
s=t.L
r=A.n(s,t.q1)
q=A.o(a).i("ae<1>")
p=A.L(new A.ae(a,q),q.i("m.E"))
B.a.V(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.v)(p),++l){k=p[l]
for(j=a.h(0,k).gL(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b6(new A.bj(B.mK,k+" has an out-of-range authored day "+h+"."))
g=A.CH(k,h,i.b,m)
if(g instanceof A.b6)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bK(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.ac(o,o.r,o.e,A.o(o).i("ac<2>"));o.m();){n=o.d
J.hd(e.cf(n.b,new A.rt()),n)}o=A.br(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.I(e,e.$ti.i("I<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aD(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.l2(new A.l1(r,A.a3(a),A.a3(s),o,q,A.c([],t.Dc),B.a1,A.pl(b,b,b)))},
CH(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cN[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gL(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.dp(B.b.aS(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b6(new A.bj(B.mL,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cU
B.a.l(l,new A.bZ(g,i.b,f))}if(l.length===0)continue
B.a.O(l,new A.rq())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b6(new A.bj(B.dU,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b6(new A.bj(B.dU,a+" day "+s+" has no authored tiers."))
return new A.ly(c)},
l1:function l1(a,b,c,d,e,f,g,h){var _=this
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
rw:function rw(a){this.a=a},
rv:function rv(a){this.a=a},
rx:function rx(a){this.a=a},
rr:function rr(a){this.a=a},
rs:function rs(){},
ru:function ru(a){this.a=a},
rt:function rt(){},
rp:function rp(a){this.a=a},
ro:function ro(a){this.a=a},
rq:function rq(){},
l2:function l2(a){this.a=a},
ly:function ly(a){this.a=a},
FL(a){var s,r,q,p=A.a3(t.N)
for(s=new A.I(a,A.o(a).i("I<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaQ(),q=q.gu(q);q.m();)if(q.gn().ga1().W(0,new A.uN())){p.l(0,r.a)
break}}s=A.L(p,p.$ti.c)
B.a.V(s)
return s},
FK(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.aD(b,!0,s)
B.a.V(r)
q=new A.ea()
q.bQ((a^913741)>>>0)
p=q.aO(4)
if(!(p>=0&&p<4))return A.d(B.cM,p)
o=B.cM[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.aD(r,!0,s)
B.a.d0(m,q)
s=A.kN(m,0,A.f6(n,"count",t.S),A.E(m).c).bM(0)
B.a.V(s)
return s},
uN:function uN(){},
yq(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aU(r)||!A.aU(q)||!A.aU(p)||r<1||q<0||q>23||p<0)return null
return new A.bK(s,r,q,p)},
CG(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a3(t.N)
for(s=t.j,q=J.M(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a3(t.L)
for(s=J.M(s.a(a.h(0,j)));s.m();){n=A.yq(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.AO(m)
if(!s&&l==null)return i
return new A.l3(r,o,l)},
AO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yq(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aU(p))if(!(p<0))if(A.bo(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bE(new A.F(B.cN,t.qR.a(new A.mn(r)),t.cE),t.hF)
j=A.bE(new A.F(B.jr,t.da.a(new A.mo(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bE(new A.F(B.iu,t.kr.a(new A.mp(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.j9(s,k,j,p,i,n,A.an(m))},
bD:function bD(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d_:function d_(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
rn:function rn(){},
j9:function j9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mn:function mn(a){this.a=a},
mo:function mo(a){this.a=a},
mp:function mp(a){this.a=a},
l0:function l0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
ry:function ry(){},
b6:function b6(a){this.a=a},
l_:function l_(a){this.a=a},
kY:function kY(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
EU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.j5())return f
n=A.e5().gb0()
m=n.h(0,"captureSeed")
l=A.dp(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dp(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eE(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.j.aW(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gL(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.lx.q(0,o.b))return f
J.bp(p,A.q(o.a),A.q(o.b))}r=p}else return f}catch(g){if(A.as(g) instanceof A.B)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lC.q(0,i))return f
if(h!=null&&!B.lA.q(0,h))return f
return new A.rK(l,k,j,h,r)},
EV(){var s,r,q,p=A.e5().gb0().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eC
break A}if("intimate"===p){s=B.eE
break A}s=B.eD
break A}r=A.e5().gb0().h(0,"cameraFov")
q=A.eE(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fd(B.c.F(q,35,100)*3.141592653589793/180,s.b,s.c)},
j1(a){var s=$.bb
if(s===a&&B.b.q(A.q(a.b.className),"open"))return
if(s!=null)s.a6()
$.bb=a
if(a===$.cl.j())$.hb().fZ("gameplay.viewport")
else $.hb().mg(A.zs(a))
s=$.a9.j()
s.ay=!1
s.b8()
$.eh=0
a.bJ()},
wE(a,b,c){var s,r,q
$.j2=!0
s=$.bb
if(s!=null)s.a6()
$.bb=a
s=$.hb()
if(s.a.a.length===0)s.fZ(c)
r=A.L(s.a.a,t.oP)
r.push(new A.dm(b,B.W,c))
q=s.a
s.a=new A.dZ(r,q.b,q.c)
s.iK(b)
s=$.a9.j()
s.ay=!1
s.b8()
$.eh=0
a.bJ()
$.j2=!1},
dE(a){var s,r,q,p,o,n,m,l=null
if($.j2)return
$.j2=!0
a.a6()
$.bb=null
s=$.hb().ka()
$.j2=!1
r=s.a
if(r===B.dm){$.eh=0
r=$.a9.j()
r.b8()
r.ay=!0
q=A.D(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dl)return
r=s.c.a
r=r.length===0?l:B.a.gY(r)
p=r==null?l:r.a
A:{if(B.bo===p){r=$.cl.j()
break A}if(B.db===p){r=$.fY.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bb=r
n=$.a9.j()
n.ay=!1
n.b8()
$.eh=0
r.bJ()
m=o==null?l:A.D(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
j4(a){if($.bb===a&&B.b.q(A.q(a.b.className),"open"))a.a6()
else A.j1(a)},
h0(a){var s
if($.j2)return
if($.bb===a)$.bb=null
if(a===$.cl.j())$.hb().cg()
else $.hb().lb(A.zs(a))
$.eh=0
s=$.a9.j()
s.b8()
s.ay=!0},
zs(a){if(a===$.cl.j())return B.dc
if(a===$.fY.j())return B.W
if(a instanceof A.fI)return B.W
if(a instanceof A.hw)return B.W
if(a instanceof A.hl)return B.W
if(a===$.iU.j())return B.kq
if(a===$.m_.j())return B.kr
if(a===$.iT.j())return B.ks
if(a===$.lY.j())return B.W
if(a===$.iR.j())return B.ku
return B.kt},
m3(a,b){var s
a.sm5(new A.tI())
a.sm7(new A.tJ())
a.sm6(new A.tK())
a.sm1(new A.tQ())
a.sm4(new A.tR())
a.smf(new A.tS())
a.sma(new A.tT())
a.sm9(new A.tU())
a.sb5(b?new A.tV(a):new A.tW(a))
a.sb_(b?new A.tX(a):new A.tL(a))
s=a.f
if(s===B.H)a.slT(new A.tM())
if(s===B.Y)a.sm2(new A.tN())
if(s===B.I){a.slS(new A.tO())
a.sm8(new A.tP())}},
DX(){var s=$.ef.j()
s.sdP(new A.tF())
s.sb5(new A.tG())
s.sb_(new A.tH())},
m2(a,b,c){return A.DU(a,b,c)},
DU(a,b,c){var s=0,r=A.c5(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$m2=A.c7(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.tB()
k=c.$ti
j=$.ak
i=new A.ap(j,k)
if(j!==B.w)l=A.zy(l,j)
c.co(new A.dB(i,2,null,l,k.i("dB<1,1>")))
s=4
return A.aN(i,$async$m2)
case 4:case 3:o=$.h9().b
n=$.aP
q=6
s=n!=null?9:10
break
case 9:s=11
return A.aN(n.cE(b.a),$async$m2)
case 11:case 10:k=b.a
$.iZ=A.ft(k,a)
$.ef.j().cm(a,k,b.b)
A.wG()
A.j3()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.as(g)
$.iZ=A.ft(o,o)
k=$.ef.j()
k.cm(o,o,A.c(["renderer transaction rejected: "+A.A(m)],t.s))
A.wG()
s=8
break
case 5:s=1
break
case 8:return A.c3(null,r)
case 1:return A.c2(p.at(-1),r)}})
return A.c4($async$m2,r)},
EL(){var s,r,q,p,o,n=null
try{n=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.j.aW(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.i(B.fW)
q=A.xE(r.h(0,"requested"))
$.iZ=A.ft(A.xE(r.h(0,"effective")),q)}catch(s){$.iZ=A.ft(null,null)}p=$.h9().a
o=A.A3(p,A.zi())
r=o.a
$.iZ=A.ft(r,p)
$.ef.j().cm(p,r,o.b)
A.wG()
A.j3()},
zi(){var s,r,q,p,o=$.f2.j().gbD().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.dp(B.b.aS(p,12),null)
if(r==null)r=1}return new A.o7(r,B.a.q(o,"disjoint-timer-query"))},
wG(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.j.a7($.h9().B(),null))}catch(s){}},
DW(){var s=$.iQ.j()
s.sdP(new A.tC())
s.sb5(new A.tD())
s.sb_(new A.tE())},
EJ(){var s,r,q,p,o,n=null
try{n=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.ws=A.B4(B.j.aW(n,null))}catch(s){$.ws=A.fk(null,null,!1,1,!1,!1,2,1)}r=$.iQ.j()
q=r.w=$.f8()
r.x=new A.jp(q)
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
r.ds()
$.a9.j().eb($.f8().r)
r=$.a9.j()
q=$.f8()
p=r.ch
p.a=q.f
p.dV()
r.b8()
A.zu()},
zu(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.j.a7($.f8().B(),null))}catch(s){}},
EI(){var s,r=null
try{r=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.iY=A.AR(B.j.aW(r,null))}catch(s){$.iY=B.aN}$.fW.j().hn($.iY)
A.zt()
A.wi()},
zt(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.j.a7($.iY.B(),null))}catch(s){}},
wi(){var s=$.bn
if(s==null)return
s.hw($.iY)},
EK(){var s,r=null
try{r=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wv=A.BA(B.j.aW(r,null))}catch(s){$.wv=$.vx()}$.iS.j().ho($.cH())
A.zv()
A.z0()},
zv(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.j.a7($.cH().B(),null))}catch(s){}},
z0(){var s,r="detailed",q=A.Bz($.cH()),p=A.D(A.a(v.G.document).documentElement)
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
s=$.cH().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cH().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
EH(){var s,r=null
try{r=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eg=A.AM(B.j.aW(r,null))}catch(s){$.eg=B.an}$.f1.j().ea($.eg)
A.wF()
A.m0()},
wF(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.j.a7($.eg.B(),null))}catch(s){}},
m0(){var s,r,q,p,o,n,m=$.eg,l=$.uD,k=$.wU,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.i(B.fo)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a6
$.wL=l
$.cF.j()
r=A.D(A.a(v.G.document).documentElement)
q=r==null
p=q?null:A.O(A.a(r.classList).contains("high-contrast"))
o=q?null:A.O(A.a(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.O(A.a(r.classList).toggle("reduced-motion",l))
if(!q)A.O(A.a(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.O(A.a(r.classList).toggle("captions-enabled",s))
if(!q)A.O(A.a(r.classList).toggle("reduced-effects",o))
if(!q)A.O(A.a(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.A(j*100)+"%")
q=$.G.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.A(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.yZ){m=$.b9.j()
l=$.eg.f
m.e=new A.j7(l==null?B.a6:l)
m=$.b9.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
El(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uo(r,q)
r.addEventListener("change",A.U(new A.um(s)))
q.addEventListener("change",A.U(new A.un(s)))},
uU(){var s=0,r=A.c5(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$uU=A.c7(function(e2,e3){if(e2===1){o.push(e3)
s=p}for(;;)switch(s){case 0:d8=v.G
d9=A.D(A.a(d8.document).getElementById("game"))
if(d9==null){s=1
break}$.G.b=d9
$.wu=A.D(A.a(d8.document).getElementById("fps"))
$.yU.b=$.Au().ck(A.e5().gb0().h(0,"renderer"))
A.Em()
b9=$.G.j()
c0=A.e(A.a(d8.window).innerWidth)>0?A.e(A.a(d8.window).innerWidth):800
b9.width=c0
c0=$.G.j()
b9=A.e(A.a(d8.window).innerHeight)>0?A.e(A.a(d8.window).innerHeight):600
c0.height=b9
c1=A.D(A.a(d8.document).getElementById("ui-canvas"))
if(c1!=null){c1.width=A.e($.G.j().width)
c1.height=A.e($.G.j().height)
b9=new A.mU(c1,A.c([],t.km))
c2=A.D(c1.getContext("2d"))
if(!t.m.b(c2))A.i(A.l("Failed to get 2D context for CanvasP5GuiEngine"))
b9.b=c2
b9=new A.q4(b9)
$.ei=b9
b9.bg(A.e($.G.j().width),A.e($.G.j().height))}n=A.D(d9.getContext("webgl2"))
if(n==null){A.dF("no-webgl2")
g=$.G.j()
g.setAttribute("data-renderer-backend","legacy")
g.setAttribute("data-renderer-fallback","true")
d8=t.N
b9=t.K
g.setAttribute("data-renderer-diagnostics",B.j.a7(A.H(["backend","legacy","fallback",!0,"fallbackReason","webgl2 unavailable","capabilities",B.m,"selection",A.H(["kind","legacy","explicit",!0,"automatic",!1,"fallback",!0,"fallbackReason","webgl2 unavailable","rejected",!1,"aliasUsed",!1],d8,b9)],d8,b9),null))
s=1
break}try{b9=t.s6
c0=t.N
c3=t.iO
c4=t.m3
c5=t.pw
m=new A.lB(n,A.e($.G.j().width),A.e($.G.j().height),A.c([],b9),A.n(c0,t.qr),A.c([],t.s3),A.n(c0,c3),A.n(c0,c4),A.n(c0,t.xp),A.n(c0,t.bE),A.n(c0,c3),A.n(c0,c4),A.c([],b9),A.n(c0,c3),A.n(c0,c4),A.n(c0,c0),A.n(t.S,c5),A.n(c0,t.qS),A.c([],t.j5),B.iV,A.n(c0,t.Aj),A.n(c0,c0),A.n(c0,c5),A.n(c0,t.vD),A.n(c0,c5),A.n(c0,t.w1),B.hg,B.kI)
$.aP=m
c0=B.en.l3($.yU.j(),m)
c0.c8()
$.f2.b=c0}catch(e1){l=A.as(e1)
k=A.cG(e1)
g=$.G.j()
g.setAttribute("data-renderer-error",A.A(l))
if($.j5())$.G.j().setAttribute("data-renderer-error-stack",A.A(k))
A.dF("no-webgl2")
g=$.G.j()
g.setAttribute("data-renderer-backend","legacy")
g.setAttribute("data-renderer-fallback","true")
d8=t.N
b9=t.K
g.setAttribute("data-renderer-diagnostics",B.j.a7(A.H(["backend","legacy","fallback",!0,"fallbackReason","webgl2 initialization failed","capabilities",B.m,"selection",A.H(["kind","legacy","explicit",!0,"automatic",!1,"fallback",!0,"fallbackReason","webgl2 initialization failed","rejected",!1,"aliasUsed",!1],d8,b9)],d8,b9),null))
s=1
break}A.j3()
p=4
A.dF("initializing")
$.cF.b=new A.mT(new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0),$.xh())
$.uD=A.O(A.a(A.a(d8.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.wU=A.O(A.a(A.a(d8.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.wL=$.uD
$.cF.j()
b9=A.a(d8.window)
c0=t.N
c3=t.s
c4=t.a
c3=A.BF(A.H(["moveForward",A.c(["KeyW"],c3),"moveBack",A.c(["KeyS"],c3),"moveLeft",A.c(["KeyA"],c3),"moveRight",A.c(["KeyD"],c3),"interact",A.c(["KeyE"],c3),"secondary",A.c(["KeyQ"],c3),"run",A.c(["ShiftLeft"],c3),"crouch",A.c(["ControlLeft"],c3),"rotate",A.c(["KeyR"],c3),"reach",A.c(["KeyF"],c3),"journal",A.c(["KeyJ"],c3),"sleep",A.c(["KeyL"],c3),"pause",A.c(["Escape"],c3)],c0,c4))
c5=A.a(b9.document)
c3=new A.jV(b9,c5,A.a3(c0),A.a3(c0),A.a3(c0),A.a3(c0),A.a3(c0),new A.j(0,0,0),new A.oF(),c3)
b9.addEventListener("keydown",A.U(c3.gj7()))
b9.addEventListener("keyup",A.U(c3.gj9()))
b9.addEventListener("mousemove",A.U(c3.gjf()))
b9.addEventListener("mousedown",A.U(c3.gjd()))
b9.addEventListener("mouseup",A.U(c3.gjh()))
b9.addEventListener("wheel",A.U(c3.gjj()))
c5.addEventListener("pointerlockchange",A.U(c3.gjb()))
$.a9.b=c3
c3=$.G.j()
b9=A.e(A.a(d8.window).innerWidth)>0?A.e(A.a(d8.window).innerWidth):800
c3.width=b9
b9=$.G.j()
c3=A.e(A.a(d8.window).innerHeight)>0?A.e(A.a(d8.window).innerHeight):600
b9.height=c3
A.dF("renderer")
A.dF("text")
c3=$.f9()
s=7
return A.aN(c3.bo(),$async$uU)
case 7:j=c3.mW()
i=A.CI(j)
if(!(i instanceof A.l2)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aB.b=i.a
$.lX.b=A.AP(j)
g=A.n(c0,c4)
for(b9=t.j,c7=0;c7<5;++c7){f=B.B[c7]
c4=A.q(f)
c5=c3.c
c5===$&&A.p()
c8=c5.h(0,c4)
c4=b9.b(c8)?A.aD(c8,!0,c0):B.m
J.bp(g,f,c4)}e=A.CJ(g)
$.wh.b=new A.mM(B.eB)
d=$.wh.j().mn(new A.uV(e))
c9=$.vy()
c=c9
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aQ.aO(2147483647)
c0=c
c0=c0==null?null:c0.b
if(c0==null)c0=1
c4=c
c4=c4==null?null:B.c.aY(c4.c)
if(c4==null)c4=7
if(c0<1)A.i(A.ag(c0,"startDay","must be at least 1"))
if(c4<0||c4>=24)A.i(A.ag(c4,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.i(A.ag(5760,"daySeconds","must be finite and > 0"))
d0=new A.jL(c0,7,5760)
d0.b=c4
d1=A.xS(e)
g=A.xC(42,g,A.xF(42),d0,d1,A.xw(6,16,d1,null,6,B.iW,d0),new A.jw(0,0,0,!1),A.pl(null,null,null))}else{g=d.a
g.toString
g=A.xD(g,e)}$.T.b=g
b=c3.ay
if(b==null)g=null
else{g=d.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Bx(b,g)}$.wm=g
$.aB.j().y=$.T.j().z
g=A.ah(A.Eg($.T.j().b),t.fu)
$.tu.b=new A.rA(g)
g=$.vz()
c0=d.a
g.dX(c0==null?null:c0.c.h(0,"inventoryInspections"))
$.f2.j().bv(A.ya($.T.j().gh4()))
if(d.b!=null){g=d.b
g.toString
A.h1(g)}g=$.aB.j()
c0=A.FK($.T.j().b,A.FL(j.b))
g.shQ(A.hG(c0,A.E(c0).c))
A.dF("house")
$.Z.b=$.T.j().c
g=c9==null
a=g?null:c9.e
a0=g?null:c9.f
if(a0!=null)for(g=$.Z.j().b,c0=g.length,c7=0;c7<g.length;g.length===c0||(0,A.v)(g),++c7){a1=g[c7]
for(c3=a1.e,c4=c3.length,d2=0;d2<c3.length;c3.length===c4||(0,A.v)(c3),++d2){a2=c3[d2]
a3=a0.h(0,a2.a)
if(a3!=null)a2.w=a3==="open"}}else if(J.aa(a,"open")||J.aa(a,"closed")){a4=J.aa(a,"open")
for(g=$.Z.j().b,c0=g.length,c7=0;c7<g.length;g.length===c0||(0,A.v)(g),++c7){a5=g[c7]
for(c3=a5.e,c4=c3.length,d2=0;d2<c3.length;c3.length===c4||(0,A.v)(c3),++d2){a6=c3[d2]
a6.shG(a4)}}}a7=$.xf()
if(a7!=null&&a7.length!==0)for(g=$.Z.j().b,c0=g.length,c7=0;c7<g.length;g.length===c0||(0,A.v)(g),++c7){a8=g[c7]
for(c3=a8.r,c4=c3.length,d2=0;d2<c4;++d2){a9=c3[d2]
if(a9.a===a7)a9.d=$.xg()}}g=$.aP
if(g!=null)g.k9($.Z.j())
$.ba.b=$.T.j().d
$.Z.j()
g=new A.j(12.9375,1.65,0.825)
$.wV=$.wJ=$.wP=g
b0=g.aq(0,new A.j(0,1.3499999999999999,0))
$.iV.b=new A.jk(b0,J.xi(b0,new A.j(0,1.2000000000000002,0)))
$.fX.b=new A.nv()
g=A.wx(B.m)
c0=A.wx(B.m)
c3=new A.q7(B.E,g,c0)
if(!isFinite(0))A.i(B.fc)
if(!B.a.a8(c0,B.a.gar(g)))A.i(B.fO)
if(c3.a===B.E&&c3.b!==0&&!c3.e)A.i(B.fg)
$.c1.b=c3
$.ar="hall"
g=d.a
b1=A.C_(g==null?null:g.c.h(0,"player"))
if(b1!=null&&b1.lH($.Z.j())){g=b1.b
$.wV=$.wJ=$.wP=g
$.cm=b1.c
$.f4=b1.d
$.ar=b1.a
b2=g.aq(0,new A.j(0,1.3499999999999999,0))
g=$.iV.j()
g.skb(b2)
g.b=J.xi(b2,new A.j(0,1.2000000000000002,0))
g=$.iV.j()
c0=$.Z.j()
c3=b1.e
c4=b1.f
g.mI($.ar,$.el(),c0,c4,c3)
A.h1("restored position")}g=A.Co(A.a(d8.document))
g.slU(new A.uW())
g.sb5(new A.uX())
g.sb_(new A.v7())
$.fY.b=g
g=A.a(d8.document)
c0=A.a(g.createElement("div"))
c3=new A.pC(g,c0)
c3.aT(g)
c0.className=A.q(c0.className)+" brush-page-frame"
c0.setAttribute("aria-label","Pause menu")
c0.setAttribute("data-brush-kind","frame")
c0.setAttribute("data-brush-state","normal")
A.a(c0.appendChild(A.mP(g,B.ei,1)))
A.a(c0.appendChild(A.y(g,"p","settings-copy","The house waits. Choose what to do next.")))
d3=A.y(g,"nav","pause-actions",null)
d3.setAttribute("aria-label","Pause actions")
c3.bi(g,d3,B.dd,"resume")
c3.bi(g,d3,B.de,"settings")
c3.bi(g,d3,B.df,"controls")
c3.bi(g,d3,B.dg,"save now")
c3.bi(g,d3,B.dh,"help")
c3.bi(g,d3,B.di,"credits")
c3.bi(g,d3,B.dj,"back")
A.a(c0.appendChild(d3))
c3.smb(new A.vg())
c3.sb5(new A.vh())
c3.smd(new A.vi())
c3.slY(new A.vj())
c3.smc(new A.vk())
c3.sm3(new A.vl())
c3.slZ(new A.vm())
c3.sb_(new A.uY())
$.cl.b=c3
c3=$.T.j().e
c0=$.ba.j()
$.T.j()
$.lZ.b=new A.oD(c3,c0)
c0=A.a(d8.document)
c3=$.T.j().e
g=$.ba.j()
c4=$.lZ.j()
c5=A.a(c0.createElement("div"))
c4=new A.oK(c3,g,c4,c0,c5)
c4.aT(c0)
c5.setAttribute("aria-label","The Journal")
A.a(c5.appendChild(A.y(c0,"div","journal-title","The Journal")))
d4=A.y(c0,"div","journal-pages",null)
g=A.y(c0,"div","page page-left",null)
c4.y!==$&&A.aV()
c4.y=g
c3=A.y(c0,"div","page page-right",null)
c4.z!==$&&A.aV()
c4.z=c3
A.a(d4.appendChild(g))
A.a(d4.appendChild(c3))
A.a(c5.appendChild(d4))
A.a(c5.appendChild(c4.iq()))
d5=A.y(c0,"div","tape-roll",null)
A.a(d5.style).setProperty("width","8rem")
c3=A.y(c0,"div","tape-fill",null)
c4.as!==$&&A.aV()
c4.as=c3
A.a(d5.appendChild(c3))
A.a(c5.appendChild(d5))
d6=A.y(c0,"div","consult",null)
A.a(d6.appendChild(A.y(c0,"div","consult-label","Cite an entry")))
c3=A.y(c0,"div","entry-picker",null)
c4.at!==$&&A.aV()
c4.at=c3
g=A.y(c0,"div","consult-result",null)
c4.ax!==$&&A.aV()
c4.ax=g
A.a(d6.appendChild(c3))
A.a(d6.appendChild(g))
A.a(c5.appendChild(d6))
d7=A.D(c0.documentElement)
if(t.m.b(d7)){A.a(d7.style).setProperty("--shake-max-deg","3deg")
A.a(d7.style).setProperty("--shake-max-px","2px")}$.iU.b=c4
$.iU.j().sb_(new A.uZ())
g=A.a(d8.document)
c0=A.y(g,"div","prompt",null)
c0.setAttribute("role","status")
c0.setAttribute("aria-live","polite")
c0.setAttribute("aria-atomic","true")
A.a(c0.style).setProperty("transition-duration","0.3s")
A.a(A.D(g.body).appendChild(c0))
$.yW.b=new A.pP(c0)
c0=A.a(d8.document)
g=A.y(c0,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.D(c0.body).appendChild(g))
$.yV.b=new A.mL(g)
g=A.a(d8.document)
c0=A.y(g,"div","ambient-notice",null)
c3=A.y(g,"div","caption-cue",null)
c0.setAttribute("role","status")
c0.setAttribute("aria-live","polite")
c0.setAttribute("aria-atomic","true")
c3.setAttribute("aria-hidden","true")
c3.setAttribute("data-caption-kind","non-speech")
A.a(A.D(g.body).appendChild(c0))
A.a(A.D(g.body).appendChild(c3))
$.b9.b=new A.mt(c0,c3,B.K)
$.yZ=!0
c3=A.Bb(A.a(d8.document))
c3.slX(A.A1())
c3.slW(A.FW())
$.aq.b=c3
c3=$.co()
c3.slV(new A.v_())
c3.sm_(A.A1())
c3=d.a
b3=A.CG(c3==null?null:c3.c.h(0,"visitors"))
if($.cH().Q&&b3!=null&&$.aB.j().dX(b3))A.EZ()
g=$.lX.j()
c0=d.a
g.mJ(c0==null?null:c0.c.h(0,"ambient"))
g=d.a
b4=g==null?null:g.c.h(0,"unverifiables")
if(b9.b(b4))for(g=J.M(b4);g.m();){b5=g.gn()
if(A.aU(b5))$.uE.l(0,b5)}g=A.Cr(A.a(d8.document))
g.sme(new A.v0())
g.sb_(new A.v1())
$.m_.b=g
g=A.BD(A.a(d8.document))
g.sb_(new A.v2())
$.iT.b=g
g=A.B5(A.a(d8.document))
g.sb_(new A.v3())
$.lY.b=g
$.iW.b=A.kE(A.a(d8.document),null)
$.iX.b=A.kE(A.a(d8.document),B.X)
$.f1.b=A.kE(A.a(d8.document),B.I)
A.m3($.iW.j(),!1)
A.m3($.iX.j(),!0)
A.m3($.f1.j(),!0)
A.EH()
A.El()
$.ef.b=A.BC(A.a(d8.document))
A.DX()
A.EL()
$.fW.b=A.kE(A.a(d8.document),B.H)
A.m3($.fW.j(),!0)
A.EI()
$.iS.b=A.kE(A.a(d8.document),B.Y)
A.m3($.iS.j(),!0)
A.EK()
$.iQ.b=A.B3(A.a(d8.document))
A.DW()
A.EJ()
g=A.Bl(A.a(d8.document))
g.sb_(new A.v4())
g.sm0(new A.v5())
$.iR.b=g
g=d.a
b6=A.Bn(g==null?null:g.c.h(0,"ending"))
if(b6!=null)A.zw(b6)
A.dF("world")
A.zz()
A.a(d8.window).addEventListener("resize",A.U(new A.v6()))
A.a(d8.document).addEventListener("visibilitychange",A.U(new A.v8()))
A.a(d8.window).addEventListener("keydown",A.U(new A.v9()))
A.a(d8.window).addEventListener("keyup",A.U(new A.va()))
A.a(d8.window).addEventListener("keydown",A.U(new A.vb()))
A.a(d8.window).addEventListener("click",A.U(new A.vc()))
$.G.j().addEventListener("mousemove",A.U(new A.vd()))
$.G.j().addEventListener("click",A.U(new A.ve()))
$.G.j().addEventListener("wheel",A.U(new A.vf()))
A.fZ()
A.dF("raf")
A.e(A.a(d8.window).requestAnimationFrame(A.U(A.A2())))
p=2
s=6
break
case 4:p=3
e0=o.pop()
b7=A.as(e0)
b8=A.cG(e0)
A.ux(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.c3(q,r)
case 2:return A.c2(o.at(-1),r)}})
return A.c4($async$uU,r)},
Ej(a){var s,r,q,p=$.ei
if(!$.aq.j().y||p==null)return
s=A.za(a)
if(s==null)return
r=$.co()
q=p.fR(s.a,s.b)
r.r=q==null?null:q.b},
Ei(a){var s,r=$.ei
if(!$.aq.j().y||r==null)return!1
s=A.za(a)
if(s==null)return!1
return $.co().lA(r.fR(s.a,s.b))},
za(a){var s=A.a($.G.j().getBoundingClientRect()),r=A.af(s.width),q=A.af(s.height)
if(r<=0||q<=0)return null
return new A.aM(A.e(a.clientX)-A.af(s.left),A.e(a.clientY)-A.af(s.top))},
Em(){var s=v.G
A.a(s.window).addEventListener("error",A.U(new A.up()))
A.a(s.window).addEventListener("unhandledrejection",A.U(new A.uq()))},
dF(a){if($.wo===a)return
$.wo=a
$.G.j().setAttribute("data-boot-phase",a)},
j3(){var s,r,q,p,o,n=null,m=$.f2.j().gbD(),l=$.G.j(),k=A.e5().gb0().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.j.a7(m.B(),n))
k=$.aP
if(k==null)k="{}"
else{k=k.e
k===$&&A.p()
k=k.as
if(k==null)k=A.i(A.l("renderer is not initialized"))
s=k.a
s.C()
r=s.b
q=A.L(r,A.o(r).c)
B.a.V(q)
r=t.N
p=t.K
p=B.j.a7(A.H(["profile",A.H(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
k=$.aP
if(k==null)k=n
else{k=k.dG
if(k==null)k=n
else{s=A.n(t.N,t.X)
s.k(0,"schema","pixeldart-fbx-diagnostic-v1")
s.k(0,"enabled",!1)
s.J(0,k.a.l9())
k=s}if(k==null)k=B.cZ}if(k==null)k=B.cZ
k=A.eA(k,t.N,t.X)
k.k(0,"settingsEnabled",$.h9().b.z)
l.setAttribute("data-renderer-fbx-diagnostics",B.j.a7(k,n))
k=$.aP
o=k==null?n:k.x
if(o!=null)$.G.j().setAttribute("data-renderer-profile-fallback",o)},
ER(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(!$.j5())return
s=$.xf()
if(s!=null&&s.length!==0){r=$.G.j()
q=$.xg()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tu.j().dH($.T.j().ga9().a)
r=$.G.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vy()
o=q==null?d:q.e
if(o!=null)$.G.j().setAttribute("data-automation-capture-shutters",o)
$.G.j().setAttribute("data-automation-rain-window-visibility",B.c.aI(A.zx($.ar),3))
r=$.G.j()
q=$.wo
n=$.ar
m=$.el()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.j.a7(A.H(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.H(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cm,"pitch",$.f4,"modal",$.bb!=null,"dialogueOverlay",$.aq.j().y,"inputEnabled",$.a9.j().ay,"day",$.T.j().ga9().a,"hour",$.T.j().ga9().b],l,k),d))
j=A.n(l,t.X)
for(r=$.Z.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.v)(r),++i){h=r[i]
n=h.ax
m=h.ay
if(n)g=!m
else g=!1
j.k(0,h.a,A.H(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",!1,"passable",g],l,k))}$.G.j().setAttribute("data-automation-portals",B.j.a7(j,d))
f=$.wl
r=!1
if(f!=null)if($.Z.j().e.h(0,"cellar")!=null){r=$.Z.j()
q=$.ar
q=r.e.h(0,q)!=null
r=q}if(r){e=f.e0("cellar",$.ar)
$.G.j().setAttribute("data-audio-transmission-cellar",B.j.a7(A.H(["sourceRoom","cellar","listenerRoom",$.ar,"portalPath",e.a,"gainDb",e.c,"lowPassHz",e.d,"muffle01",e.e,"barrierIds",e.b,"reasonTrace",e.r,"reachable",e.f],l,k),d))}else $.G.j().setAttribute("data-audio-transmission-cellar","unavailable")},
m8(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c1.j().a!==B.E){A.h1("save unavailable during rupture")
return}try{r=$.wh.j()
q=$.T.j()
p=t.N
o=t.z
s=A.n(p,o)
n=$.ar
m=$.el()
l=$.cm
k=$.f4
j=$.iV.j().d
j=j==null?null:j.a.a
i=$.iV.j().d
J.bp(s,"player",new A.kl(n,m,l,k,j,i==null?null:i.b).B())
n=$.aB.j()
m=A.eL(n.b,p)
l=A.eL(n.c,t.L)
n=n.r
J.bp(s,"visitors",new A.l3(m,l,n==null?null:new A.j9(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.lX.j().b
n=A.L(n,A.o(n).c)
B.a.V(n)
J.bp(s,"ambient",n)
n=$.wm
if(n!=null)J.bp(s,"authoredEvents",A.H(["delivered",n.gl8()],p,o))
n=A.L($.uE,A.o($.uE).c)
B.a.V(n)
J.bp(s,"unverifiables",n)
J.bp(s,"inventoryInspections",$.vz().B())
n=$.wt
if(n!=null)J.bp(s,"ending",A.H(["kind",n.a.b],p,p))
s=t.c.a(s)
n=q.a
m=q.b
l=A.xI(q.c).B()
k=q.d
r.mY(A.yc(s,A.H(["houseSeed",n,"runSeed",m,"house",l,"time",A.H(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.h1(a)}catch(h){A.h1("save failed")}},
EP(){var s=A.D(A.a(v.G.document).documentElement),r=s==null?null:A.an(s.getAttribute("data-gameplay-focus-loss")),q=A.bE(new A.F(B.aA,t.rg.a(new A.ut(r)),t.vK),t.x)
switch((q==null?B.aW:q).a){case 0:$.m5=!0
s=$.bn
if(s!=null)s.ed(!0)
break
case 1:$.m5=!0
break
case 2:break}},
h1(a){var s=v.G,r=A.D(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.D(A.a(s.document).documentElement)
s=s==null?null:A.an(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Bw(B.eX,new A.uB(r),t.H)},
ux(a,b){var s,r,q,p
A.dF("error")
s=A.A(a)
r=A.x5(s,"\n"," ")
s=$.wu
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.D(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.A(a):A.A(a)+"\n"+b.p(0)
$.G.j().setAttribute("data-boot-error",p)
if($.j5()&&!q)$.G.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
z3(){var s,r
if($.wk)return
$.wk=!0
s=$.bn
r=s==null
if(!r)s.cg()
if(!r)s.ek("music")
B.a.l($.d5,"arm")},
fZ(){var s=0,r=A.c5(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fZ=A.c7(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.aN(A.wD(),$async$fZ)
case 2:o=null
q=4
s=7
return A.aN(A.d7(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$fZ)
case 7:n=b
i=A
s=8
return A.aN(A.d7(A.a(n.json()),t.X),$async$fZ)
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
l=A.D(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.lY.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.aN(A.nM(A.c([A.ur(o),A.ul(o)],t.iJ),t.H),$async$fZ)
case 9:return A.c3(null,r)
case 1:return A.c2(p.at(-1),r)}})
return A.c4($async$fZ,r)},
wD(){var s=0,r=A.c5(t.H),q,p
var $async$wD=A.c7(function(a,b){if(a===1)return A.c2(b,r)
for(;;)switch(s){case 0:$.Z.j()
p=$.G.j()
p.setAttribute("data-house-manifest","renderer-showcase")
$.G.j().setAttribute("data-house-manifest-source","runtime-showcase")
$.G.j().setAttribute("data-house-inventory","showcase-bypassed")
$.G.j().setAttribute("data-house-soundscape","showcase-bypassed")
$.G.j().setAttribute("data-audio-planner","showcase-bypassed")
s=1
break
case 1:return A.c3(q,r)}})
return A.c4($async$wD,r)},
wr(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.M(t.a.b(s)?s:new A.aS(s,A.E(s).i("aS<1,f>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.q(q))}},
ul(a){var s=0,r=A.c5(t.H),q,p,o,n,m,l
var $async$ul=A.c7(function(b,c){if(b===1)return A.c2(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.wr(A.D(n?null:a.sfx),m,"")
A.wr(A.D(n?null:a.ir),m,"ir-")
q=A.D(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.q(p))
l=$
s=2
return A.aN(A.mC(m,$.Z.j()),$async$ul)
case 2:o=l.bn=c
o.ch=$.wl
o.bW()
A.EM()
A.zB(o)
A.wi()
A.zC()
if($.wk){o.cg()
o.ek("music")}return A.c3(null,r)}})
return A.c4($async$ul,r)},
wS(a,b){var s
A.zN(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
EW(a){var s,r
try{s=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
z_(a,b){var s
if(a!=="brightness")return
s=A.D(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.A(B.c.F(b,0.6,1.4))+")")},
tw(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.D(A.a(v.G.document).documentElement)
if(r!=null)A.O(A.a(r.classList).toggle(s,b))
A.m0()},
zC(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.af($.d8().a.ci(o)),k=A.O($.d8().a.ci(n)),j=A.O($.d8().a.ci(m))
for(s=[$.iW.j(),$.iX.j(),$.f1.j(),$.fW.j(),$.iS.j()],r=0;r<5;++r)s[r].ec(o,l)
A.z_(o,l)
for(s=[$.iW.j(),$.iX.j(),$.f1.j(),$.fW.j(),$.iS.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tw(n,k)
A.tw(m,j)},
wR(a,b){var s
A.zN(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
ET(a){var s,r
try{s=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zB(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.iO[s]
q=$.d8().a.b.h(0,r)
j.k(0,r,A.af(q==null?A.i(A.l("setting missing from profile: "+r)):q))}p=A.O($.d8().a.ci("muted"))
o=A.O($.d8().a.ci("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bh(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cZ(o)
for(q=[$.iW.j(),$.iX.j(),$.f1.j(),$.fW.j()],n=j.$ti.i("cv<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cv(j,j.r,j.e,n);m.m();){k=m.d
l.ec(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
z1(){var s=$.bn
if(s!=null)A.zB(s)
A.zC()},
EM(){var s,r,q,p,o,n,m,l,k=null
try{k=A.an(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.j.aW(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.i(B.fp)
q=A.ye(r.h(0,"requested"))
$.zI=A.w2(A.ye(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.ET(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.EW(p))}}$.zI=A.Cq(o,r)
A.uu()},
uu(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.j.a7($.d8().B(),null))}catch(s){}},
zN(a,b){var s,r,q,p,o,n,m
switch(A.qN(a).d.a){case 0:r=A.eE(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d8()
q=s
A.qN(a).cU(q)
p=t.N
o=t.K
n=A.eA(r.a.b,p,o)
n.k(0,a,q)
r.a=A.ds(n,1)
n=s
A.qN(a).cU(n)
o=A.eA(r.b.b,p,o)
o.k(0,a,n)
r.b=A.ds(o,1)
A.uu()}catch(m){if(!(A.as(m) instanceof A.B))throw m}},
ur(a){var s=0,r=A.c5(t.H),q,p
var $async$ur=A.c7(function(b,c){if(b===1)return A.c2(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.n(q,q)
A.wr(A.D(a==null?null:a.tex),p,"")
q=$.aP
q=q==null?null:q.cL(p)
s=2
return A.aN(A.nM(A.c([q==null?A.xB(t.H):q],t.iJ),t.H),$async$ur)
case 2:return A.c3(null,r)}})
return A.c4($async$ur,r)},
zz(){var s,r,q=v.G,p=A.e(A.a(q.window).innerWidth),o=A.e(A.a(q.window).innerHeight)
q=$.G.j()
s=p>0?p:800
q.width=s
s=$.G.j()
q=o>0?o:600
s.height=q
q=$.ei
if(q!=null)q.bg(A.e($.G.j().width),A.e($.G.j().height))
$.f2.j().bg(A.e($.G.j().width),A.e($.G.j().height))
q=$.aP
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.G.j().setAttribute("data-renderer-surface",r)},
Eh(){var s,r,q=$.bb
if(q!=null){s=$.a9.j()
if(!s.CW.bb("pause",s.f)){s=$.a9.j()
s=s.CW.bb("secondary",s.f)}else s=!0
if(s){A.DZ(q)
return}if($.a9.j().f.aa(0,"GamepadDpadUp")){A.zq(q,-1)
return}if($.a9.j().f.aa(0,"GamepadDpadDown")){A.zq(q,1)
return}s=$.a9.j()
if(s.CW.bb("interact",s.f)){r=A.D(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.O(q.b.contains(r)))A.oH(r,"click",t.X)}return}s=$.a9.j()
if(s.CW.bb("pause",s.f)){A.j1($.cl.j())
return}if($.aq.j().y)return
s=$.a9.j()
if(s.CW.bb("journal",s.f))A.j4($.iU.j())
else{s=$.a9.j()
if(s.CW.bb("sleep",s.f))A.j4($.m_.j())}},
DZ(a){if(a===$.cl.j()){a.a6()
return}if(a===$.fY.j()||a instanceof A.fI||a instanceof A.hw||a instanceof A.hl){A.dE(a)
return}a.a6()},
zq(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(l.length);++r){q=A.D(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.D(A.a(v.G.document).activeElement)
o=B.a.bn(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
ES(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.af(d9)
try{s=d9
if(!$.zk){$.wC=s
$.zk=!0}e=s
d=$.wC
if(typeof e!=="number")return e.aq()
r=(e-d)/1000
$.wC=s
e=r
if(typeof e!=="number")return e.e8()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.aJ()
if(e>0.25)r=0.25
A.Fl(r)
$.a9.j().mi()
e=$.G.j()
d=$.a9.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.a9.j().z
if(q!=null)$.G.j().setAttribute("data-controller-id",q)
else $.G.j().removeAttribute("data-controller-id")
A.Eh()
if(!$.m5&&$.bb==null){e=$.eh
d=r
if(typeof d!=="number")return A.uP(d)
d=$.eh=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e8()
c=c<10}else c=!1
if(!c)break
$.wJ=$.el()
if(!$.xe()){d=$.T.b
if(d===$.T)A.i(A.av(""))
d.jY(0.008333333333333333*($.cH().Q?1:20))
d=$.Ax()
c=$.T.b
if(c===$.T)A.i(A.av(""))
c=c.ga9()
b=$.T.b
if(b===$.T)A.i(A.av(""))
d=d.bY(c.a,b.ga9().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.v)(d),++a){o=d[a]
B.a.l($.d5,"clock:"+o.a)}d=$.Ay()
c=$.T.b
if(c===$.T)A.i(A.av(""))
c=c.ga9()
b=$.T.b
if(b===$.T)A.i(A.av(""))
d=d.bY(c.a,b.ga9().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.v)(d),++a){n=d[a]
B.a.l($.d5,"service:"+n.a+":"+n.b)}}A.Fo()
A.Fk()
d=$.aB.b
if(d===$.aB)A.i(A.av(""))
c=$.T.b
if(c===$.T)A.i(A.av(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.aD(d,!1,e)
a0.$flags=3
a1=a0
B.a.M(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.i(A.av(""))
d.mo(a1)}A.Fj()
A.Fn()
A.Fm()
A.Fi(0.008333333333333333)
d=$.fX.b
if(d===$.fX)A.i(A.av(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.c1.b
if(d===$.c1)A.i(A.av(""))
m=d.a!==B.E
c=$.Z.b
if(c===$.Z)A.i(A.av(""))
d.du(0.008333333333333333,c)
if(m){d=$.c1.b
if(d===$.c1)A.i(A.av(""))
d=d.e}else d=!1
if(d)A.zA(!0)
d=$.eh-0.008333333333333333
$.eh=d
c=p
if(typeof c!=="number")return c.ak()
p=c+1}l=B.c.F(d/0.008333333333333333,0,1)
e=$.wV=A.yp($.AA(),$.el(),l)
k=$.bn
if(k!=null){d=k
c=Math.sin($.cm)
b=Math.cos($.cm)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aH(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hq($.ar)
for(e=$.d5.length,a=0;a<$.d5.length;$.d5.length===e||(0,A.v)($.d5),++a){j=$.d5[a]
A.E2(k,j)}B.a.M($.d5)
$.G.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.G.j().setAttribute("data-audio-muffle01",B.c.aI(k.glP(),3))
e=$.G.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.G.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cF.j().fV($.vA(),$.cm,$.f4)
e=$.aP
if(e!=null){d=$.cF.j()
c=d.a
a3=new A.K(c.a,c.b,c.c)
c=d.b
a4=new A.K(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.xZ(a3,a4,new A.K(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.vX(a5,b,d.a,c)
e.p3=new A.fe(a6,a7,a7.al(0,a6),a3,a4,c,b,a5)}e=$.aP
if(e!=null)e.hz($.Z.j(),$.ar)
e=$.aP
if(e!=null)e.hp($.Z.j(),$.ar,$.vA(),$.ba.j().gel(),$.ba.j().gl5(),$.tu.j().dH($.T.j().ga9().a),A.G1($.ar),$.ba.j().b)
if($.zp!==$.c1.j().a){$.zp=$.c1.j().a
$.wM=$.wM+1}e=$.aP
if(e!=null){if($.xe())d=0
else{d=s
if(typeof d!=="number")return d.n1()
d/=1000}c=$.wM
b=A.e(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.i(A.ag(d,"timeSeconds",null))
if(b<0)A.i(A.w("frame clock seeds must be non-negative",null))
e.ry=d
e.to=c
e.x1=b}e=$.aP
if(e!=null){d=$.c1.j()
c=$.wL
b=$.tu.j().dH($.T.j().ga9().a)
a8=A.zx($.ar)
a9=d.a
b0=d.gei()
b1=b0>0?B.c.F(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.bB
b4=$.hc()
b5=b4.E("post_exposure")
b6=b4.E("post_bloom")
b7=b4.E("post_vignette")
b8=b4.E("post_film_grain")
b9=b4.E("post_dither")
c0=b4.E("post_depth_of_field")
c1=b4.E("post_color_grade")
c2=b4.E("post_affine_warp")
c3=b4.E("post_vertex_snap")
c4=B.c.aH(b4.E("post_quantization_bits"))
c5=b4.E("post_vhs_chroma")
c6=b4.E("post_vhs_noise")
c7=b4.E("shadow_ao_intensity")
c8=a9===B.a0?0.45:b5
b4=b4.aR("shadow_ssdo_enable")?c7:0
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
e.R8=new A.kn(c8,b6,b4,c0,b7,b8,b.c,a8,b9,c9,d,d0,d1,d2,d3,d4,d5,d6,d7,c)}$.f2.j().bv(A.ya($.T.j().gh4()))
i=$.aP
if(i!=null){h=i.glw()
if(h!=null){$.G.j().setAttribute("data-renderer-frame-stats",h)
e=$.G.j()
d=i.glv()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.dF("running")
A.ER()
e=$.a9.j()
e.as=e.Q=0
d=e.c
d.aa(0,"WheelUp")
d.aa(0,"WheelDown")
e.d.M(0)
e.f.M(0)
A.e(A.a(v.G.window).requestAnimationFrame(A.U(A.A2())))}catch(d8){g=A.as(d8)
f=A.cG(d8)
A.ux(g,f)}},
E2(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.h2("confirm")
$.b9.j().aK("interface confirmation")
break
case"ambient-winnow":a.cO("winnow",0.28)
$.b9.j().aK("wind moving through the house")
break
case"ambient-gate":a.cO("gate",0.22)
$.b9.j().aK("distant gate")
break
case"collapse":a.h2("collapse")
$.b9.j().aK("front door shudders and collapses")
break
case"clock:tick":A.m6(a,p,"tick")
break
case"clock:chime":A.m6(a,p,"chime")
break
case"clock:cuckoo":A.m6(a,p,"cuckoo")
break
case"clock:bell":A.m6(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.m6(a,q,s[2])}}}},
m6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.Ek,g=$.ww
if(h==null||g==null)return
s=h.n4(b)
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
break A}if(q!=null)$.b9.j().aK(q)
q=$.Z.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.i(A.l("sound room missing: "+o))
m=n.d.ak(0,s.d.al(0,p))
l=$.wl
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.i(A.l("sound emitter "+s.a+" has no cue for "+c))
a.mh(q,m,s.e,o)
return}q=$.z7
$.z7=q+1
o=A.AQ(B.dZ,r,r+":"+q,m,A.DK(b,c),q,o)
q=$.ar
q=A.AN($.vA(),q)
t.gG.a(B.d4)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.i(A.l("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.i(A.l("audio listener room missing: "+q))
j=l.n8(p,q,B.d4)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.i(A.l("audio cue family missing: "+q))
k=J.bc(i)
k=k.h(i,B.d.S(A.Fa(q,o.f),k.gt(i)))
o=o.e
A.ah(j.a,t.N)
a.h3(k,new A.j(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
DK(a,b){var s,r,q,p=$.T.j().b
for(s=new A.dN(a+":"+b),r=t.sU,s=new A.aF(s,s.gt(0),r.i("aF<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.zZ(p,q==null?r.a(q):q)}return p},
Fl(a){var s=$.wu
if(s==null)return
s.textContent=""+B.c.aH(a>0?1/a:0)+" fps"},
Fi(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zF||$.bb!=null){$.mc().a=new A.j(0,0,0)
return}s=$.a9.j()
r=s.cu("moveLeft")?-1:0
if(s.cu("moveRight"))++r
q=s.cu("moveForward")?1:0
if(s.cu("moveBack"))--q
s=s.ay?s.w:new A.j(0,0,0)
p=new A.j(r,0,q).ak(0,s)
o=p.gt(0)>1?p.gaB():p
$.a9.j().d2(b3)
n=$.a9.j().Q
m=$.a9.j().as
s=$.f8()
l=s.d?-1:1
k=s.e?-1:1
j=$.cm
i=$.a9.j()
i=i.ay?i.x:0
h=$.f8()
g=h.d?-1:1
$.cm=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.f4
h=$.a9.j()
l=h.ay?h.y:0
j=$.f8()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.f4=i
$.f4=B.c.F(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.j(i*Math.cos($.cm)+j*Math.sin($.cm),0,-i*Math.sin($.cm)+j*Math.cos($.cm)).gaB().al(0,2)
j=$.mc()
if(!isFinite(b3)||b3<0)A.i(A.ag(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.i(A.ag(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.ak(0,f.aq(0,l).al(0,1-s))
j.a=s
d=$.iV.j().lQ($.Z.j(),$.ar,$.el(),s.al(0,b3))
$.wP=d.a
if($.c1.j().a!==B.bC&&$.c1.j().a!==B.a0)$.ar=d.b
c=B.c.F(j.a.gt(0)/2,0,1)
s=$.Az()
$.wQ=s.hL($.wQ,$.el().b,b3)
b=s.jZ(b3,c)
s=$.el()
l=$.wQ
$.cF.j().fV(new A.j(s.a+b.a,l+b.b,s.c+b.c),$.cm,$.f4)
s=$.T.j().z
a=new A.pE(s)
s=$.cF.j()
l=$.Z.j()
a0=A.G0(a,s,$.ar,l,$.ww)
l=a0.c
$.yW.j().hB(l)
a1=A.D(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.x4($.cF.j(),$.Z.j(),$.ar)
break
case 1:a3=A.A9($.cF.j(),$.Z.j(),$.ar)
break
case 2:a4=A.Aa($.cF.j(),$.Z.j(),$.ar)
break
case 3:l=$.cF.j()
k=$.Z.j()
j=$.ww
a5=A.A8(l,$.ar,k,j)
break
case 4:case 5:break}$.yV.j().mR($.f9().e6($.T.j().ga9().a,"status"),$.ar==="living-room")
l=$.a9.j()
k=l.CW
if(k.bb(b2,l.d)||k.bb(b2,l.f)){l=$.T.j().ga9()
k=a3==null
j=k?b1:a3.a
i=B.a.a8($.aB.j().fv(21),$.aB.j().glI())
if(l.a===21&&j==="front-door"&&i){s=$.c1.j()
$.Z.j()
s.hR(B.eA,A.ah(s.c,t.N))
B.a.l($.d5,"collapse")
A.h1("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.b9.j().aK("mantle flame extinguished")}else if($.T.j().hO(1,1)){a2.d=!0
s=$.fX.j()
s.a=a2
s.b=2
$.b9.j().aK("mantle flame catches")}}else{if(!k)l=!a3.ay
else l=!1
if(l){a3.ax=!a3.ax
s=$.b9.j()
s.aK(a3.ax?"door opens":"door closes")
s=$.aP
if(s!=null)s.cS($.Z.j(),a3.b)
s=$.aP
if(s!=null)s.dS($.Z.j(),a3.a)
s=$.bn
if(s!=null)s.bW()}else if(a4!=null)if(a4.w){s=$.T.j()
if(s.f.d1(1)){a4.w=!1
$.b9.j().aK("shutter closes")}}else{a4.w=!0
$.b9.j().aK("shutter opens")}else if(s===B.ci){a6=a.e5()
s=A.E(a6)
l=t.E4
a7=A.bE(new A.F(a6,s.i("k(1)").a(new A.uF(a0)),s.i("F<1>")),l)
if(a7==null)a7=A.bE(a6,l)
if(a7!=null)$.b9.j().bO("noticed",a7.d)}else if(a5!=null){s=$.vz()
if(!a5.x)A.i(A.l("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.G.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.br(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.EO(a8)
s=$.b9.j()
s.bO("noticed",a9==null?"you inspect "+a8:a9)}}}s=$.fX.j()
if(s.a!=null&&s.b>0){b0=$.fX.j().a
if(b0!=null&&A.x4($.cF.j(),$.Z.j(),$.ar)!==b0){s=$.fX.j()
s.a=null
s.b=0}}A.EY(b3,a0)},
EY(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.ei
if(b9==null)return
s=A.a($.G.j().getBoundingClientRect())
r=A.af(s.width)
q=A.af(s.height)
if(r<=0||q<=0)return
p=$.co()
p.mQ(c0)
o=$.Aw()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.hg(n,m,$.aq.j().y)
o=$.hc()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.Z.j()
j=$.ar
h=k.e.h(0,j)
k=!$.aq.j().y&&$.bb==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.T.j().ga9()
b=$.ba.j().b
a=$.cH()
a0=a.y===B.co
a1=h==null?null:h.a
if(a1==null)a1=$.ar
a=a.z?$.f9().e6($.T.j().ga9().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.M(a3)
a4=A.af(A.a(v.G.window).devicePixelRatio)
a5=B.c.ad(r*a4)
a6=B.c.ad(q*a4)
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
A.aH(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aH(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aH(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.lg(n,q,r)}a2.lf(q,r,new A.pt(j,i,g,f,e,d,p))
b0=r-80-24
a2.aX("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.F(B.c.aY(b*60),0,1439)
b2=B.d.a3(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.cN(B.d.p(b4),2,"0")+":"+B.b.cN(B.d.p(b3),2,"0")+b5,b0,42)
a7.restore()
a2.aX("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bT(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.aX("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bT(a,b6-28),b7,68)
a7.restore()}a2.le(l,q,r)
a2.lh(q,r,o)
a7.restore();++b9.b
p=$.G.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ah(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
EO(a){var s,r,q,p,o=$.T.j().z.b,n=A.o(o).i("I<1,2>"),m=A.L(new A.I(o,n),n.i("m.E"))
B.a.O(m,new A.us())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.v)(m),++s){r=m[s]
n=$.f9().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Fo(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cH().Q)return
if($.aq.j().y||$.bb!=null||$.aB.j().r!=null)return
s=$.T.j().ga9()
for(r=$.aB.j().fv(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
m=$.aB.b
if(m===$.aB)A.i(A.av(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aB.b
if(r===$.aB)A.i(A.av(""))
l=r.bZ(n)
if(!(l instanceof A.l_))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xP(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mc().a=new A.j(0,0,0)
r=$.aq.b
if(r===$.aq)A.i(A.av(""))
q=n.a
r.ee(q,k)
$.co().bt(!0,B.b5,q,k)
A.wH()
A.zL(n)
return}},
Fk(){var s,r,q,p,o,n,m=$.wm
if(m==null)return
s=$.T.j().ga9()
for(r=m.bY(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){o=r[p]
n=$.T.b
if(n===$.T)A.i(A.av(""))
if(!n.k5(o))continue
n=$.G.b
if(n===$.G)A.i(A.av(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
EZ(){var s,r,q=$.aB.j().r,p=q==null,o=p?null:q.gbc()
if(p||o==null)return
p=$.aq.j()
s=q.a
r=s.a
p.ee(r,o)
$.co().bt(!0,B.b5,r,o)
A.wH()
A.zL(s)
if(q.d!==B.a4)A.wI()
A.h1("restored visitor")},
zL(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.T.j().lx("stranger-17-eileen-case")
r=$.f9().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aD(q,!0,t.N):B.m
p=A.bE(r,t.N)
if(s==null||p==null)return
$.b9.j().bO("inside the case",p+" \u201c"+s.d+"\u201d")},
Fj(){var s,r,q,p,o,n
if(!$.cH().Q)return
s=$.T.j().ga9()
r=$.lX.j().lj(s.a,s.b)
if(r.length===0)return
q=B.a.gU(r)
$.lX.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.b9.j().bO(o,q.e)
n=A.Fs(p)
if(n!=null)B.a.l($.d5,"ambient-"+n)},
Fn(){var s,r,q,p,o=$.T.j().ga9()
if(o.b<20)return
s=o.a
if(!$.uE.l(0,s))return
r=$.f9().f
r===$&&A.p()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.aD(q,!0,t.N):B.m
p=A.FY(r,$.T.j().b,s)
if(p!=null)$.b9.j().bO("noticed",p)},
zA(a){var s,r,q,p,o
if($.wt!=null)return
s=$.T.j().ga9()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("am<2>")
o=A.Bm(new A.nr(s.a,1-r,new A.F(new A.am(q,p),p.i("k(m.E)").a(new A.uy()),p.i("F<m.E>")).gt(0),$.T.j().r.d,a))
if(o==null)return
A.zw(o)
A.m8("ending recorded")},
zw(a){var s,r,q
$.wt=a
$.zF=!0
$.mc().a=new A.j(0,0,0)
A.j1($.iR.j())
s=a.a
r=$.f9().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.aD(q,!0,t.N):B.m
r=A.L(r,t.N)
B.a.J(r,A.BU($.T.j().z,s))
$.iR.j().hE(a,r)},
DR(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.cb
break A}if("through-door"===a){s=B.cc
break A}if("letterbox"===a){s=B.cd
break A}s=B.a8
break A}r=$.aB.j().kq(s)
if(s===B.aw){q=$.Z.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aP
if(p!=null)p.cS($.Z.j(),q.b)
p=$.aP
if(p!=null)p.dS($.Z.j(),q.a)
p=$.bn
if(p!=null)p.bW()}}if(!(r instanceof A.kY)||s===B.a8){A.tZ()
return}if(r.a.gbc()==null){A.wq()
A.tZ()
return}A.wI()},
DY(){var s=$.aB.j().k_()
if(!(s instanceof A.ie)||s.b){A.wq()
A.tZ()
return}if(s.a.gbc()==null){A.wq()
A.tZ()
return}A.wI()},
wI(){var s,r,q,p,o,n,m,l,k,j=$.aB.j().r,i=j==null,h=i?null:j.gbc()
if(i||h==null)return
s=$.aB.j().gc2()
if(s==null){$.aq.j().hD(h)
$.co().bt(!0,B.m,j.a.a,h)}else{r=j.w
i=r==null
$.aq.j().ef(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aq.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aM(k.a,k.b))}m.hF(l,r)
o=$.co()
m=j.a.a
o.bt(!0,i?q:B.m,m,h)
if(!i){i=A.E(p)
k=A.bE(new A.F(p,i.i("k(1)").a(new A.uv(r)),i.i("F<1>")),t.Y)
if(k!=null){i=$.aq.j()
q=k.c
i.eg(h,q)
o.bt(!0,B.m,m,h+"\n\n"+q)}}}A.zK()
A.wH()},
wH(){var s,r=$.aB.j().r,q=r==null,p=q?null:r.gbc(),o=$.bn
if(q||p==null||o==null)return
q=r.a
s="vo-"+q.a+"-day"+B.b.cN(B.d.p(q.b),2,"0")+"-"+r.b.b+"-"+(r.f+1)
if($.wB===s)return
$.wB=s
o.cO(s,1)},
DS(a){var s,r,q,p,o,n=$.aB.j().kr(a)
if(!(n instanceof A.kZ))return
s=n.c
if(!$.T.j().k6(n.b,s))return
r=s.c
s=$.aq.j()
q=n.a
p=q.gbc()
s.eg(p==null?"":p,r)
o=q.gbc()
if(o==null)o=""
$.co().bt(!0,B.m,q.a.a,o+"\n\n"+r)
A.zK()
A.m8("saved after visitor answer")},
tZ(){$.aq.j().fQ()
$.co().M(0)
$.wB=null
$.a9.j().cT($.G.j())},
zK(){var s,r,q,p,o=$.aq.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.lZ.j().e7(),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
m.push(new A.aM(p.a,B.a.gY(p.c).p(0)))}o.hC(n,m)},
DT(a){var s,r,q,p=$.aB.j().ks(a,!0,$.lZ.j())
if(p==null)return
s=$.lZ.j().l4(p,B.ia)
r=$.aq.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.K.bG("",!0,q)},
wq(){var s,r=$.Z.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aP
if(s!=null)s.cS($.Z.j(),r.b)
s=$.aP
if(s!=null)s.dS($.Z.j(),r.a)
s=$.bn
if(s!=null)s.bW()}},
Fm(){var s,r,q,p,o,n,m,l,k
for(s=$.Z.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.c1.b
if(k===$.c1)A.i(A.av(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
G1(a){var s,r,q,p,o,n,m,l=$.Z.j().e.h(0,a)
if(l==null||$.ba.j().gel()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.o){n=$.ba.b
if(n===$.ba)A.i(A.av(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.n){n=$.ba.b
if(n===$.ba)A.i(A.av(""))
n=n.b>12}else n=!1
if(!n){if(o===B.A){n=$.ba.b
if(n===$.ba)A.i(A.av(""))
n=n.b<9}else n=!1
if(!n)if(o===B.C){o=$.ba.b
if(o===$.ba)A.i(A.av(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zx(a){var s,r=$.Z.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.j2
if(q.length===0)return 0.12
s=A.E(q)
return B.c.F(new A.F(q,s.i("k(1)").a(new A.uw()),s.i("F<1>")).gt(0)/q.length,0.12,1)},
fQ:function fQ(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
_.c5=_.c4=0
_.c7=_.c6=null
_.lq=$
_.lr=_.dG=null
_.fI=0},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
ti:function ti(a){this.a=a},
tc:function tc(){},
td:function td(){},
te:function te(){},
tf:function tf(){},
ta:function ta(){},
tb:function tb(){},
t6:function t6(){},
t7:function t7(){},
t8:function t8(){},
t9:function t9(){},
lA:function lA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rK:function rK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
tI:function tI(){},
tJ:function tJ(){},
tK:function tK(){},
tQ:function tQ(){},
tR:function tR(){},
tS:function tS(){},
tT:function tT(){},
tU:function tU(){},
tV:function tV(a){this.a=a},
tW:function tW(a){this.a=a},
tX:function tX(a){this.a=a},
tL:function tL(a){this.a=a},
tM:function tM(){},
tN:function tN(){},
tO:function tO(){},
tP:function tP(){},
tF:function tF(){},
tG:function tG(){},
tH:function tH(){},
tB:function tB(){},
tC:function tC(){},
tD:function tD(){},
tE:function tE(){},
uo:function uo(a,b){this.a=a
this.b=b},
um:function um(a){this.a=a},
un:function un(a){this.a=a},
uV:function uV(a){this.a=a},
uW:function uW(){},
uX:function uX(){},
v7:function v7(){},
vg:function vg(){},
vh:function vh(){},
vi:function vi(){},
vj:function vj(){},
vk:function vk(){},
vl:function vl(){},
vm:function vm(){},
uY:function uY(){},
uZ:function uZ(){},
v_:function v_(){},
v0:function v0(){},
v1:function v1(){},
v2:function v2(){},
v3:function v3(){},
v4:function v4(){},
v5:function v5(){},
v6:function v6(){},
v8:function v8(){},
v9:function v9(){},
va:function va(){},
vb:function vb(){},
vc:function vc(){},
vd:function vd(){},
ve:function ve(){},
vf:function vf(){},
up:function up(){},
uq:function uq(){},
ut:function ut(a){this.a=a},
uB:function uB(a){this.a=a},
uF:function uF(a){this.a=a},
us:function us(){},
uy:function uy(){},
uv:function uv(a){this.a=a},
uw:function uw(){},
xP(a,b,c,d,e,f){var s=a[b]()
return s},
oH(a,b,c){var s=null
return c.a(A.xP(a,b,s,s,s,s))},
vr(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.ag(b.glC(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.ab()
o=q*16
n=o+16
B.y.d_(s,o,n,p.a)
if(l)B.y.d_(r,o,n,p.dO().a)}m=a.a
A.u(m,"uInstanceModels",new A.x(B.dO,s))
if(l)A.u(m,"uInstanceNormalMatrices",new A.x(B.dO,r))
A.u(m,"uUseInstances",B.dP)},
B9(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
B8(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
zZ(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Fs(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
ca(a,b,c){var s=B.c.F(c,0,1),r=a.c,q=a.b,p=a.a
return new A.aY(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
FI(a){var s,r,q,p,o,n,m,l=B.j.aW(a,null),k=t.f
if(!k.b(l))throw A.b(B.h_)
s=t.N
r=t.z
q=A.aJ(l,s,r)
p=A.n(s,t.c)
for(o=0;o<14;++o){n=B.j8[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.n(s,r))
else if(k.b(m))p.k(0,n,A.aJ(m,s,r))
else throw A.b(A.a1('text.json section "'+n+'" must be an object',null,null))}return p},
FY(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbu(a)
s=new A.ea()
s.bQ((b^274953^c)>>>0)
r=s.aO(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.vR.prototype={}
J.jX.prototype={
a5(a,b){return a===b},
gN(a){return A.hW(a)},
p(a){return"Instance of '"+A.kq(a)+"'"},
ga4(a){return A.d6(A.wy(this))}}
J.jZ.prototype={
p(a){return String(a)},
gN(a){return a?519018:218159},
ga4(a){return A.d6(t.y)},
$iad:1,
$ik:1}
J.hz.prototype={
a5(a,b){return null==b},
p(a){return"null"},
gN(a){return 0},
$iad:1,
$iao:1}
J.hC.prototype={$iab:1}
J.dW.prototype={
gN(a){return 0},
ga4(a){return B.me},
p(a){return String(a)}}
J.kk.prototype={}
J.eO.prototype={}
J.dV.prototype={
p(a){var s=a[$.Ae()]
if(s==null)s=a[$.h8()]
if(s==null)return this.hT(a)
return"JavaScript function for "+J.d9(s)},
$ieu:1}
J.hB.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.hD.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.r.prototype={
cF(a,b){return new A.aS(a,A.E(a).i("@<1>").K(b).i("aS<1,2>"))},
l(a,b){A.E(a).c.a(b)
a.$flags&1&&A.bO(a,29)
a.push(b)},
mr(a,b){var s
a.$flags&1&&A.bO(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.y8(b,null))
return a.splice(b,1)[0]},
aa(a,b){var s
a.$flags&1&&A.bO(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.E(a).i("m<1>").a(b)
a.$flags&1&&A.bO(a,"addAll",2)
if(Array.isArray(b)){this.ie(a,b)
return}for(s=J.M(b);s.m();)a.push(s.gn())},
ie(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.at(a))
for(r=0;r<s;++r)a.push(b[r])},
M(a){a.$flags&1&&A.bO(a,"clear","clear")
a.length=0},
ce(a,b,c){var s=A.E(a)
return new A.P(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("P<1,2>"))},
Z(a,b){var s,r=A.dX(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.A(a[s]))
return r.join(b)},
be(a,b,c,d){var s,r,q
d.a(b)
A.E(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.at(a))}return r},
bd(a,b,c){var s,r,q,p=A.E(a)
p.i("k(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.at(a))}if(c!=null)return c.$0()
throw A.b(A.cu())},
ah(a,b){return this.bd(a,b,null)},
a0(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
b2(a,b,c){var s=a.length
if(b>s)throw A.b(A.aW(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aW(c,b,s,"end",null))
if(b===c)return A.c([],A.E(a))
return A.c(a.slice(b,c),A.E(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cu())},
gY(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cu())},
gbu(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cu())
throw A.b(A.xK())},
W(a,b){var s,r
A.E(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.at(a))}return!1},
a8(a,b){var s,r
A.E(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.at(a))}return!0},
O(a,b){var s,r,q,p,o,n=A.E(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.bO(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Er()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aJ()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.h5(b,2))
if(p>0)this.jw(a,p)},
V(a){return this.O(a,null)},
jw(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d0(a,b){var s,r,q,p
a.$flags&2&&A.bO(a,"shuffle")
s=a.length
while(s>1){r=b.aO(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bn(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.aa(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gR(a){return a.length===0},
gX(a){return a.length!==0},
p(a){return A.vQ(a,"[","]")},
gu(a){return new J.em(a,a.length,A.E(a).i("em<1>"))},
gN(a){return A.hW(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bO(a,"set length","change the length of")
if(b<0)throw A.b(A.aW(b,0,null,"newLength",null))
if(b>a.length)A.E(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.uL(a,b))
return a[b]},
k(a,b,c){A.E(a).c.a(c)
a.$flags&2&&A.bO(a)
if(!(b>=0&&b<a.length))throw A.b(A.uL(a,b))
a[b]=c},
e2(a,b){return new A.dz(a,b.i("dz<0>"))},
dK(a,b){var s
A.E(a).i("k(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga4(a){return A.d6(A.E(a))},
$iR:1,
$im:1,
$iC:1}
J.jY.prototype={
mP(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kq(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.oI.prototype={}
J.em.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.v(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia5:1}
J.fu.prototype={
H(a,b){var s
A.af(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcb(b)
if(this.gcb(a)===s)return 0
if(this.gcb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcb(a){return a===0?1/a<0:a<0},
ad(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.b5(""+a+".toInt()"))},
kn(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.b5(""+a+".ceil()"))},
aY(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.b5(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.b5(""+a+".round()"))},
F(a,b,c){if(this.H(b,c)>0)throw A.b(A.wX(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
aI(a,b){var s
if(b>20)throw A.b(A.aW(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcb(a))return"-"+s
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
a3(a,b){return(a|0)===a?a/b|0:this.jG(a,b)},
jG(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.b5("Result of truncating division is "+A.A(s)+": "+A.A(a)+" ~/ "+b))},
dt(a,b){var s
if(a>0)s=this.fd(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jE(a,b){if(0>b)throw A.b(A.wX(b))
return this.fd(a,b)},
fd(a,b){return b>31?0:a>>>b},
ga4(a){return A.d6(t.o)},
$ib0:1,
$it:1,
$ibd:1}
J.hy.prototype={
ga4(a){return A.d6(t.S)},
$iad:1,
$ih:1}
J.k_.prototype={
ga4(a){return A.d6(t.i)},
$iad:1}
J.dU.prototype={
fu(a,b){return new A.lN(b,a,0)},
hP(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hA){s=b.e
s=!(s==null?b.e=b.iD():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iL(a,b)}},
bL(a,b,c,d){var s=A.ku(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iL(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.AF(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gej()
n=p.gdF()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.I(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aS(a,r))
return m},
ae(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aW(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ae(a,b,0)},
I(a,b,c){return a.substring(b,A.ku(b,c,a.length))},
aS(a,b){return this.I(a,b,null)},
bs(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.BL(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.BM(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
al(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.ew)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cN(a,b,c){var s=b-a.length
if(s<=0)return a
return this.al(c,s)+a},
cJ(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aW(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bn(a,b){return this.cJ(a,b,0)},
q(a,b){return A.G6(a,b,0)},
H(a,b){var s
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
ga4(a){return A.d6(t.N)},
gt(a){return a.length},
$iad:1,
$ib0:1,
$ipx:1,
$if:1}
A.e7.prototype={
gu(a){return new A.hg(J.M(this.gb3()),A.o(this).i("hg<1,2>"))},
gt(a){return J.cI(this.gb3())},
gR(a){return J.me(this.gb3())},
gX(a){return J.AI(this.gb3())},
a0(a,b){return A.o(this).y[1].a(J.md(this.gb3(),b))},
gU(a){return A.o(this).y[1].a(J.xk(this.gb3()))},
q(a,b){return J.xj(this.gb3(),b)},
p(a){return J.d9(this.gb3())}}
A.hg.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia5:1}
A.ep.prototype={
gb3(){return this.a}}
A.im.prototype={$iR:1}
A.ik.prototype={
h(a,b){return this.$ti.y[1].a(J.aQ(this.a,b))},
k(a,b,c){var s=this.$ti
J.bp(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.AJ(this.a,b)},
l(a,b){var s=this.$ti
J.hd(this.a,s.c.a(s.y[1].a(b)))},
O(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.rL(this,b)
J.AK(this.a,s)},
$iR:1,
$iC:1}
A.rL.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.aS.prototype={
cF(a,b){return new A.aS(this.a,this.$ti.i("@<1>").K(b).i("aS<1,2>"))},
gb3(){return this.a}}
A.fv.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dN.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.qf.prototype={
gG(){return 0}}
A.R.prototype={}
A.a7.prototype={
gu(a){var s=this
return new A.aF(s,s.gt(s),A.o(s).i("aF<a7.E>"))},
gR(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cu())
return this.a0(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.aa(r.a0(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.at(r))}return!1},
a8(a,b){var s,r,q=this
A.o(q).i("k(a7.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a0(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.at(q))}return!0},
W(a,b){var s,r,q=this
A.o(q).i("k(a7.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a0(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.at(q))}return!1},
Z(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.A(p.a0(0,0))
if(o!==p.gt(p))throw A.b(A.at(p))
for(r=s,q=1;q<o;++q){r=r+b+A.A(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.at(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.A(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.at(p))}return r.charCodeAt(0)==0?r:r}},
cW(a,b){return this.hS(0,A.o(this).i("k(a7.E)").a(b))},
ce(a,b,c){var s=A.o(this)
return new A.P(this,s.K(c).i("1(a7.E)").a(b),s.i("@<a7.E>").K(c).i("P<1,2>"))},
bN(a,b){var s=A.o(this).i("a7.E")
if(b)s=A.L(this,s)
else{s=A.L(this,s)
s.$flags=1
s=s}return s},
bM(a){return this.bN(0,!0)},
br(a){var s,r=this,q=A.vU(A.o(r).i("a7.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a0(0,s))
return q}}
A.i9.prototype={
giP(){var s=J.cI(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjF(){var s=J.cI(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cI(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a0(a,b){var s=this,r=s.gjF()+b
if(b<0||r>=s.giP())throw A.b(A.oA(b,s.gt(0),s,"index"))
return J.md(s.a,r)},
bN(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.bc(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xN(0,n):J.xM(0,n)}r=A.dX(s,m.a0(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a0(n,o+q))
if(m.gt(n)<l)throw A.b(A.at(p))}return r},
bM(a){return this.bN(0,!0)}}
A.aF.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.bc(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.at(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a0(q,s);++r.c
return!0},
$ia5:1}
A.cw.prototype={
gu(a){return new A.hI(J.M(this.a),this.b,A.o(this).i("hI<1,2>"))},
gt(a){return J.cI(this.a)},
gR(a){return J.me(this.a)},
gU(a){return this.b.$1(J.xk(this.a))},
a0(a,b){return this.b.$1(J.md(this.a,b))}}
A.dd.prototype={$iR:1}
A.hI.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia5:1}
A.P.prototype={
gt(a){return J.cI(this.a)},
a0(a,b){return this.b.$1(J.md(this.a,b))}}
A.F.prototype={
gu(a){return new A.S(J.M(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia5:1}
A.hq.prototype={
gu(a){return new A.hr(J.M(this.a),this.b,B.ep,this.$ti.i("hr<1,2>"))}}
A.hr.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.M(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia5:1}
A.ho.prototype={
m(){return!1},
gn(){throw A.b(A.cu())},
$ia5:1}
A.dz.prototype={
gu(a){return new A.ih(J.M(this.a),this.$ti.i("ih<1>"))}}
A.ih.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia5:1}
A.au.prototype={
st(a,b){throw A.b(A.b5("Cannot change the length of a fixed-length list"))},
l(a,b){A.bN(a).i("au.E").a(b)
throw A.b(A.b5("Cannot add to a fixed-length list"))}}
A.cY.prototype={
k(a,b,c){A.o(this).i("cY.E").a(c)
throw A.b(A.b5("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.b5("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("cY.E").a(b)
throw A.b(A.b5("Cannot add to an unmodifiable list"))},
O(a,b){A.o(this).i("h(cY.E,cY.E)?").a(b)
throw A.b(A.b5("Cannot modify an unmodifiable list"))}}
A.fM.prototype={}
A.eJ.prototype={
gt(a){return J.cI(this.a)},
a0(a,b){var s=this.a,r=J.bc(s)
return r.a0(s,r.gt(s)-1-b)}}
A.iP.prototype={}
A.aM.prototype={$r:"+(1,2)",$s:1}
A.f0.prototype={$r:"+height,width(1,2)",$s:2}
A.iz.prototype={$r:"+influence,light(1,2)",$s:3}
A.ay.prototype={$r:"+(1,2,3)",$s:4}
A.aY.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iA.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iB.prototype={$r:"+(1,2,3,4)",$s:8}
A.cj.prototype={
gG(){return this.a[1]},
$r:"+floor,id,wall,x,z(1,2,3,4,5)",
$s:9}
A.hj.prototype={}
A.fi.prototype={
gR(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
p(a){return A.vV(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.B1()},
gL(){return new A.bM(this.lo(),A.o(this).i("bM<J<1,2>>"))},
lo(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga1(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("J<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.J(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bI(a,b,c,d){var s=A.n(c,d)
this.au(0,new A.n1(this,A.o(this).K(c).K(d).i("J<1,2>(3,4)").a(b),s))
return s},
$iW:1}
A.n1.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a2.prototype={
gt(a){return this.b.length},
geU(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
P(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.P(b))return null
return this.b[this.a[b]]},
au(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geU()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga1(){return new A.eW(this.geU(),this.$ti.i("eW<1>"))},
gaQ(){return new A.eW(this.b,this.$ti.i("eW<2>"))}}
A.eW.prototype={
gt(a){return this.a.length},
gR(a){return 0===this.a.length},
gX(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.eX(s,s.length,this.$ti.i("eX<1>"))}}
A.eX.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia5:1}
A.cO.prototype={
bz(){var s=this,r=s.$map
if(r==null){r=new A.hE(s.$ti.i("hE<1,2>"))
A.zS(s.a,r)
s.$map=r}return r},
P(a){return this.bz().P(a)},
h(a,b){return this.bz().h(0,b)},
au(a,b){this.$ti.i("~(1,2)").a(b)
this.bz().au(0,b)},
ga1(){var s=this.bz()
return new A.ae(s,A.o(s).i("ae<1>"))},
gaQ(){var s=this.bz()
return new A.am(s,A.o(s).i("am<2>"))},
gt(a){return this.bz().a}}
A.hk.prototype={
l(a,b){A.o(this).c.a(b)
A.B2()}}
A.aI.prototype={
gt(a){return this.b},
gR(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eX(s,s.length,r.$ti.i("eX<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
br(a){return A.fw(this,this.$ti.c)}}
A.pM.prototype={
$0(){return B.c.aY(1000*this.a.now())},
$S:41}
A.i1.prototype={}
A.rf.prototype={
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
A.hQ.prototype={
p(a){return"Null check operator used on a null value"}}
A.k0.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kS.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pq.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hp.prototype={}
A.iD.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icW:1}
A.dM.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Ac(r==null?"unknown":r)+"'"},
ga4(a){var s=A.wZ(this)
return A.d6(s==null?A.bN(this):s)},
$ieu:1,
gn0(){return this},
$C:"$1",
$R:1,
$D:null}
A.jl.prototype={$C:"$0",$R:0}
A.jm.prototype={$C:"$2",$R:2}
A.kP.prototype={}
A.kM.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Ac(s)+"'"}}
A.fb.prototype={
a5(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fb))return!1
return this.$_target===b.$_target&&this.a===b.a},
gN(a){return(A.mb(this.a)^A.hW(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kq(this.a)+"'")}}
A.kz.prototype={
p(a){return"RuntimeError: "+this.a}}
A.ce.prototype={
gt(a){return this.a},
gR(a){return this.a===0},
gX(a){return this.a!==0},
ga1(){return new A.ae(this,A.o(this).i("ae<1>"))},
gaQ(){return new A.am(this,A.o(this).i("am<2>"))},
gL(){return new A.I(this,A.o(this).i("I<1,2>"))},
P(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lD(a)},
lD(a){var s=this.d
if(s==null)return!1
return this.ca(s[this.c9(a)],a)>=0},
J(a,b){A.o(this).i("W<1,2>").a(b).au(0,new A.oR(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lE(b)},
lE(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c9(a)]
r=this.ca(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.eo(s==null?q.b=q.dn():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eo(r==null?q.c=q.dn():r,b,c)}else q.lG(b,c)},
lG(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dn()
r=o.c9(a)
q=s[r]
if(q==null)s[r]=[o.dq(a,b)]
else{p=o.ca(q,a)
if(p>=0)q[p].b=b
else q.push(o.dq(a,b))}},
cf(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.P(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
aa(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.ib(this.c,b)
else return this.lF(b)},
lF(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c9(a)
r=n[s]
q=o.ca(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.em(p)
if(r.length===0)delete n[s]
return p.b},
M(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d3()}},
au(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.at(q))
s=s.c}},
eo(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dq(b,c)
else s.b=c},
ib(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.em(s)
delete a[b]
return s.b},
d3(){this.r=this.r+1&1073741823},
dq(a,b){var s=this,r=A.o(s),q=new A.p2(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d3()
return q},
em(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d3()},
c9(a){return J.az(a)&1073741823},
ca(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
p(a){return A.vV(this)},
dn(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ivT:1}
A.oR.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.p2.prototype={}
A.ae.prototype={
gt(a){return this.a.a},
gR(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cf(s,s.r,s.e,this.$ti.i("cf<1>"))},
q(a,b){return this.a.P(b)}}
A.cf.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia5:1}
A.am.prototype={
gt(a){return this.a.a},
gR(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ac(s,s.r,s.e,this.$ti.i("ac<1>"))}}
A.ac.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia5:1}
A.I.prototype={
gt(a){return this.a.a},
gR(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cv(s,s.r,s.e,this.$ti.i("cv<1,2>"))}}
A.cv.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.J(s.a,s.b,r.$ti.i("J<1,2>"))
r.c=s.c
return!0}},
$ia5:1}
A.hE.prototype={
c9(a){return A.FD(a)&1073741823},
ca(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.uQ.prototype={
$1(a){return this.a(a)},
$S:13}
A.uR.prototype={
$2(a,b){return this.a(a,b)},
$S:132}
A.uS.prototype={
$1(a){return this.a(A.q(a))},
$S:39}
A.b8.prototype={
ga4(a){return A.d6(this.eS())},
eS(){return A.FN(this.$r,this.ct())},
p(a){return this.fk(!1)},
fk(a){var s,r,q,p,o,n=this.iT(),m=this.ct(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.y5(o):l+A.A(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iT(){var s,r=this.$s
while($.tj.length<=r)B.a.l($.tj,null)
s=$.tj[r]
if(s==null){s=this.iC()
B.a.k($.tj,r,s)}return s},
iC(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.xL(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ah(j,k)}}
A.eb.prototype={
ct(){return[this.a,this.b]},
a5(a,b){if(b==null)return!1
return b instanceof A.eb&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gN(a){return A.cz(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ec.prototype={
ct(){return[this.a,this.b,this.c]},
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.ec&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gN(a){var s=this
return A.cz(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.f_.prototype={
ct(){return this.a},
a5(a,b){if(b==null)return!1
return b instanceof A.f_&&this.$s===b.$s&&A.Db(this.a,b.a)},
gN(a){return A.cz(this.$s,A.BY(this.a),B.f,B.f,B.f,B.f)}}
A.hA.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gj6(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xR(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iD(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fu(a,b){return new A.lb(this,b,0)},
iS(a,b){var s,r=this.gj6()
if(r==null)r=A.f3(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lw(s)},
$ipx:1,
$iCb:1}
A.lw.prototype={
gej(){return this.b.index},
gdF(){var s=this.b
return s.index+s[0].length},
$ifz:1,
$ihX:1}
A.lb.prototype={
gu(a){return new A.lc(this.a,this.b,this.c)}}
A.lc.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iS(l,s)
if(p!=null){m.d=p
o=p.gdF()
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
$ia5:1}
A.i8.prototype={
gdF(){return this.a+this.c.length},
$ifz:1,
gej(){return this.a}}
A.lN.prototype={
gu(a){return new A.lO(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.i8(r,s)
throw A.b(A.cu())}}
A.lO.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.i8(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia5:1}
A.rM.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.av(""))
return s}}
A.fB.prototype={
ga4(a){return B.m7},
$iad:1}
A.fA.prototype={$ifA:1}
A.hO.prototype={
j1(a,b,c,d){var s=A.aW(b,0,c,d,null)
throw A.b(s)},
ex(a,b,c,d){if(b>>>0!==b||b>c)this.j1(a,b,c,d)}}
A.k9.prototype={
ga4(a){return B.m8},
$iad:1}
A.b1.prototype={
gt(a){return a.length},
fa(a,b,c,d,e){var s,r,q=a.length
this.ex(a,b,q,"start")
this.ex(a,c,q,"end")
if(b>c)throw A.b(A.aW(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.w(e,null))
r=d.length
if(r-e<s)throw A.b(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibR:1}
A.hM.prototype={
h(a,b){A.dD(b,a,a.length)
return a[b]},
k(a,b,c){A.bm(c)
a.$flags&2&&A.bO(a)
A.dD(b,a,a.length)
a[b]=c},
d_(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bO(a,5)
this.fa(a,b,c,d,0)
return},
$iR:1,
$im:1,
$iC:1}
A.hN.prototype={
k(a,b,c){A.e(c)
a.$flags&2&&A.bO(a)
A.dD(b,a,a.length)
a[b]=c},
hx(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bO(a,5)
this.fa(a,b,c,d,e)
return},
$iR:1,
$im:1,
$iC:1}
A.hL.prototype={
ga4(a){return B.m9},
b2(a,b,c){return new Float32Array(a.subarray(b,A.DP(b,c,a.length)))},
$iad:1,
$inD:1}
A.ka.prototype={
ga4(a){return B.ma},
$iad:1}
A.kb.prototype={
ga4(a){return B.mb},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1}
A.kc.prototype={
ga4(a){return B.mc},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1}
A.kd.prototype={
ga4(a){return B.md},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1}
A.ke.prototype={
ga4(a){return B.mg},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1,
$iw5:1}
A.kf.prototype={
ga4(a){return B.mh},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1}
A.eC.prototype={
ga4(a){return B.mi},
gt(a){return a.length},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1,
$ieC:1}
A.hP.prototype={
ga4(a){return B.mj},
gt(a){return a.length},
h(a,b){A.dD(b,a,a.length)
return a[b]},
$iad:1,
$iib:1}
A.iu.prototype={}
A.iv.prototype={}
A.iw.prototype={}
A.ix.prototype={}
A.cC.prototype={
i(a){return A.iH(v.typeUniverse,this,a)},
K(a){return A.yL(v.typeUniverse,this,a)}}
A.lp.prototype={}
A.lR.prototype={
p(a){return A.bB(this.a,null)}}
A.ln.prototype={
p(a){return this.a}}
A.fT.prototype={$idw:1}
A.rH.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
A.rG.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:124}
A.rI.prototype={
$0(){this.a.$0()},
$S:12}
A.rJ.prototype={
$0(){this.a.$0()},
$S:12}
A.tm.prototype={
ia(a,b){if(self.setTimeout!=null)self.setTimeout(A.h5(new A.tn(this,b),0),a)
else throw A.b(A.b5("`setTimeout()` not found."))}}
A.tn.prototype={
$0(){this.b.$0()},
$S:0}
A.ld.prototype={
dv(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d6(a)
else{s=r.a
if(q.i("bQ<1>").b(a))s.ev(a)
else s.cr(a)}},
dw(a,b){var s=this.a
if(this.b)s.bj(new A.aZ(a,b))
else s.cp(new A.aZ(a,b))}}
A.tx.prototype={
$1(a){return this.a.$2(0,a)},
$S:22}
A.ty.prototype={
$2(a,b){this.a.$2(1,new A.hp(a,t.l.a(b)))},
$S:66}
A.uG.prototype={
$2(a,b){this.a(A.e(a),b)},
$S:71}
A.c0.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jz(a,b){var s,r,q
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
o.d=null}q=o.jz(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yG
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
o.a=A.yG
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.l("sync*"))}return!1},
n3(a){var s,r,q=this
if(a instanceof A.bM){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.M(a)
return 2}},
$ia5:1}
A.bM.prototype={
gu(a){return new A.c0(this.a(),this.$ti.i("c0<1>"))}}
A.aZ.prototype={
p(a){return A.A(this.a)},
$iaj:1,
gbP(){return this.b}}
A.nL.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eC(null)}else{s=null
try{s=l.$0()}catch(p){r=A.as(p)
q=A.cG(p)
l=r
o=q
n=A.wz(l,o)
l=new A.aZ(l,o)
m.b.bj(l)
return}m.b.eC(s)}},
$S:0}
A.nO.prototype={
$2(a,b){var s,r,q=this
A.f3(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bj(new A.aZ(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bj(new A.aZ(r,s))}},
$S:72}
A.nN.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bp(r,k.b,a)
if(J.aa(s,0)){q=A.c([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.v)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hd(q,l)}k.c.cr(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bj(new A.aZ(q,o))}},
$S(){return this.d.i("ao(0)")}}
A.lh.prototype={
dw(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.l("Future already completed"))
s.cp(A.Eq(a,b))},
fA(a){return this.dw(a,null)}}
A.ii.prototype={
dv(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.l("Future already completed"))
s.d6(r.i("1/").a(a))}}
A.dB.prototype={
lO(a){if((this.c&15)!==6)return!0
return this.b.b.dZ(t.bl.a(this.d),a.a,t.y,t.K)},
ly(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mM(q,m,a.b,o,n,t.l)
else p=l.dZ(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.as(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ap.prototype={
e_(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ak
if(s===B.w){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.ag(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.zy(b,s)}r=new A.ap(s,c.i("ap<0>"))
this.co(new A.dB(r,3,a,b,q.i("@<1>").K(c).i("dB<1,2>")))
return r},
fi(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.ap($.ak,c.i("ap<0>"))
this.co(new A.dB(s,19,a,b,r.i("@<1>").K(c).i("dB<1,2>")))
return s},
jB(a){this.a=this.a&1|16
this.c=a},
cq(a){this.a=a.a&30|this.a&1
this.c=a.c},
co(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.co(a)
return}r.cq(s)}A.m7(null,null,r.b,t.O.a(new A.rP(r,a)))}},
f1(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f1(a)
return}m.cq(n)}l.a=m.cB(a)
A.m7(null,null,m.b,t.O.a(new A.rU(l,m)))}},
bV(){var s=t.F.a(this.c)
this.c=null
return this.cB(s)},
cB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eC(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bQ<1>").b(a))A.rS(a,r,!0)
else{s=r.bV()
q.c.a(a)
r.a=8
r.c=a
A.eU(r,s)}},
cr(a){var s,r=this
r.$ti.c.a(a)
s=r.bV()
r.a=8
r.c=a
A.eU(r,s)},
iB(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bV()
q.cq(a)
A.eU(q,r)},
bj(a){var s=this.bV()
this.jB(a)
A.eU(this,s)},
d6(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bQ<1>").b(a)){this.ev(a)
return}this.ij(a)},
ij(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.m7(null,null,s.b,t.O.a(new A.rR(s,a)))},
ev(a){A.rS(this.$ti.i("bQ<1>").a(a),this,!1)
return},
cp(a){this.a^=2
A.m7(null,null,this.b,t.O.a(new A.rQ(this,a)))},
$ibQ:1}
A.rP.prototype={
$0(){A.eU(this.a,this.b)},
$S:0}
A.rU.prototype={
$0(){A.eU(this.b,this.a.a)},
$S:0}
A.rT.prototype={
$0(){A.rS(this.a.a,this.b,!0)},
$S:0}
A.rR.prototype={
$0(){this.a.cr(this.b)},
$S:0}
A.rQ.prototype={
$0(){this.a.bj(this.b)},
$S:0}
A.rX.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mL(t.pF.a(q.d),t.z)}catch(p){s=A.as(p)
r=A.cG(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mw(q)
n=k.a
n.c=new A.aZ(q,o)
q=n}q.b=!0
return}if(j instanceof A.ap&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ap){m=k.b.a
l=new A.ap(m.b,m.$ti)
j.e_(new A.rY(l,m),new A.rZ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rY.prototype={
$1(a){this.a.iB(this.b)},
$S:15}
A.rZ.prototype={
$2(a,b){A.f3(a)
t.l.a(b)
this.a.bj(new A.aZ(a,b))},
$S:77}
A.rW.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dZ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.as(l)
r=A.cG(l)
q=s
p=r
if(p==null)p=A.mw(q)
o=this.a
o.c=new A.aZ(q,p)
o.b=!0}},
$S:0}
A.rV.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lO(s)&&p.a.e!=null){p.c=p.a.ly(s)
p.b=!1}}catch(o){r=A.as(o)
q=A.cG(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mw(p)
m=l.b
m.c=new A.aZ(p,n)
p=m}p.b=!0}},
$S:0}
A.le.prototype={}
A.lM.prototype={}
A.iO.prototype={$iyy:1}
A.lF.prototype={
mN(a){var s,r,q
t.O.a(a)
try{if(B.w===$.ak){a.$0()
return}A.zD(null,null,this,a,t.H)}catch(q){s=A.as(q)
r=A.cG(q)
A.wN(A.f3(s),t.l.a(r))}},
fz(a){return new A.tk(this,t.O.a(a))},
mL(a,b){b.i("0()").a(a)
if($.ak===B.w)return a.$0()
return A.zD(null,null,this,a,b)},
dZ(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ak===B.w)return a.$1(b)
return A.F2(null,null,this,a,b,c,d)},
mM(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ak===B.w)return a.$2(b,c)
return A.F1(null,null,this,a,b,c,d,e,f)},
h6(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tk.prototype={
$0(){return this.a.mN(this.b)},
$S:0}
A.uz.prototype={
$0(){A.Br(this.a,this.b)},
$S:0}
A.io.prototype={
gt(a){return this.a},
gR(a){return this.a===0},
gX(a){return this.a!==0},
ga1(){return new A.eV(this,this.$ti.i("eV<1>"))},
gaQ(){var s=this.$ti
return A.k5(new A.eV(this,s.i("eV<1>")),new A.t0(this),s.c,s.y[1])},
P(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iH(a)},
iH(a){var s=this.d
if(s==null)return!1
return this.bk(this.eR(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yA(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yA(q,b)
return r}else return this.iW(b)},
iW(a){var s,r,q=this.d
if(q==null)return null
s=this.eR(q,a)
r=this.bk(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eA(s==null?m.b=A.w9():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eA(r==null?m.c=A.w9():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.w9()
p=A.mb(b)&1073741823
o=q[p]
if(o==null){A.wa(q,p,[b,c]);++m.a
m.e=null}else{n=m.bk(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
au(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eB()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.at(m))}},
eB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.dX(i.a,null,!1,t.z)
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
eA(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wa(a,b,c)},
eR(a,b){return a[A.mb(b)&1073741823]}}
A.t0.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iq.prototype={
bk(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eV.prototype={
gt(a){return this.a.a},
gR(a){return this.a.a===0},
gX(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.ip(s,s.eB(),this.$ti.i("ip<1>"))},
q(a,b){return this.a.P(b)}}
A.ip.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.at(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia5:1}
A.ci.prototype={
eZ(){return new A.ci(A.o(this).i("ci<1>"))},
gu(a){var s=this,r=new A.eY(s,s.r,A.o(s).i("eY<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gR(a){return this.a===0},
gX(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iG(b)},
iG(a){var s=this.d
if(s==null)return!1
return this.bk(s[this.da(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.l("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ez(s==null?q.b=A.wb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ez(r==null?q.c=A.wb():r,b)}else return q.ic(b)},
ic(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wb()
r=p.da(a)
q=s[r]
if(q==null)s[r]=[p.d9(a)]
else{if(p.bk(q,a)>=0)return!1
q.push(p.d9(a))}return!0},
aa(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f2(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f2(s.c,b)
else return s.jv(b)},
jv(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.da(a)
r=n[s]
q=o.bk(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fm(p)
return!0},
iU(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("k(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.at(n))
if(!0===o)n.aa(0,r)}},
M(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dm()}},
ez(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d9(b)
return!0},
f2(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fm(s)
delete a[b]
return!0},
dm(){this.r=this.r+1&1073741823},
d9(a){var s,r=this,q=new A.lv(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dm()
return q},
fm(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dm()},
da(a){return J.az(a)&1073741823},
bk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$ixX:1}
A.lv.prototype={}
A.eY.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.at(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia5:1}
A.p3.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:104}
A.V.prototype={
gu(a){return new A.aF(a,this.gt(a),A.bN(a).i("aF<V.E>"))},
a0(a,b){return this.h(a,b)},
gR(a){return this.gt(a)===0},
gX(a){return!this.gR(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cu())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.aa(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.at(a))}return!1},
a8(a,b){var s,r
A.bN(a).i("k(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.b(A.at(a))}return!0},
W(a,b){var s,r
A.bN(a).i("k(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.b(A.at(a))}return!1},
Z(a,b){var s
if(this.gt(a)===0)return""
s=A.w3("",a,b)
return s.charCodeAt(0)==0?s:s},
e2(a,b){return new A.dz(a,b.i("dz<0>"))},
ce(a,b,c){var s=A.bN(a)
return new A.P(a,s.K(c).i("1(V.E)").a(b),s.i("@<V.E>").K(c).i("P<1,2>"))},
l(a,b){var s
A.bN(a).i("V.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cF(a,b){return new A.aS(a,A.bN(a).i("@<V.E>").K(b).i("aS<1,2>"))},
O(a,b){var s,r=A.bN(a)
r.i("h(V.E,V.E)?").a(b)
s=b==null?A.FC():b
A.kI(a,0,this.gt(a)-1,s,r.i("V.E"))},
ls(a,b,c,d){var s
A.bN(a).i("V.E?").a(d)
A.ku(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.vQ(a,"[","]")},
$iR:1,
$im:1,
$iC:1}
A.a4.prototype={
au(a,b){var s,r,q,p=A.o(this)
p.i("~(a4.K,a4.V)").a(b)
for(s=this.ga1(),s=s.gu(s),p=p.i("a4.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gL(){return this.ga1().ce(0,new A.p5(this),A.o(this).i("J<a4.K,a4.V>"))},
bI(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("J<1,2>(a4.K,a4.V)").a(b)
s=A.n(c,d)
for(r=this.ga1(),r=r.gu(r),n=n.i("a4.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
jW(a){var s,r
for(s=J.M(A.o(this).i("m<J<a4.K,a4.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
P(a){return this.ga1().q(0,a)},
gt(a){var s=this.ga1()
return s.gt(s)},
gR(a){var s=this.ga1()
return s.gR(s)},
gX(a){var s=this.ga1()
return s.gX(s)},
gaQ(){return new A.ir(this,A.o(this).i("ir<a4.K,a4.V>"))},
p(a){return A.vV(this)},
$iW:1}
A.p5.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a4.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a4.V").a(s)
return new A.J(a,s,r.i("J<a4.K,a4.V>"))},
$S(){return A.o(this.a).i("J<a4.K,a4.V>(a4.K)")}}
A.p6.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.A(a)
r.a=(r.a+=s)+": "
s=A.A(b)
r.a+=s},
$S:36}
A.ir.prototype={
gt(a){var s=this.a
return s.gt(s)},
gR(a){var s=this.a
return s.gR(s)},
gX(a){var s=this.a
return s.gX(s)},
gU(a){var s=this.a,r=s.ga1()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga1()
return new A.is(r.gu(r),s,this.$ti.i("is<1,2>"))}}
A.is.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia5:1}
A.iI.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.b5("Cannot modify unmodifiable map"))}}
A.fy.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
P(a){return this.a.P(a)},
au(a,b){this.a.au(0,A.o(this).i("~(1,2)").a(b))},
gR(a){var s=this.a
return s.gR(s)},
gX(a){var s=this.a
return s.gX(s)},
gt(a){var s=this.a
return s.gt(s)},
ga1(){return this.a.ga1()},
p(a){return this.a.p(0)},
gaQ(){return this.a.gaQ()},
gL(){return this.a.gL()},
bI(a,b,c,d){return this.a.bI(0,A.o(this).K(c).K(d).i("J<1,2>(3,4)").a(b),c,d)},
$iW:1}
A.e4.prototype={}
A.dr.prototype={
gR(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
J(a,b){var s
for(s=J.M(A.o(this).i("m<1>").a(b));s.m();)this.l(0,s.gn())},
bm(a){var s,r,q=this.br(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.aa(0,r)}return q},
p(a){return A.vQ(this,"{","}")},
a8(a,b){var s
A.o(this).i("k(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Z(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.d9(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.A(q.gn())
while(q.m())}else{r=s
do r=r+b+A.A(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
W(a,b){var s
A.o(this).i("k(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cu())
return s.gn()},
a0(a,b){var s,r
A.kt(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.oA(b,b-r,this,"index"))},
$iR:1,
$im:1,
$ie1:1}
A.iC.prototype={
bm(a){var s,r,q,p=this,o=p.eZ()
for(s=A.fO(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
br(a){var s=this.eZ()
s.J(0,this)
return s}}
A.lS.prototype={
l(a,b){this.$ti.c.a(b)
return A.Dn()}}
A.fN.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fO(s,s.r,A.o(s).c)},
br(a){return this.a.br(0)}}
A.fU.prototype={}
A.iJ.prototype={}
A.lt.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jp(b):s}},
gt(a){return this.b==null?this.c.a:this.bw().length},
gR(a){return this.gt(0)===0},
gX(a){return this.gt(0)>0},
ga1(){if(this.b==null){var s=this.c
return new A.ae(s,A.o(s).i("ae<1>"))}return new A.lu(this)},
gaQ(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.o(s).i("am<2>"))}return A.k5(r.bw(),new A.t2(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.q(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.P(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jN().k(0,b,c)},
P(a){if(this.b==null)return this.c.P(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
au(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.au(0,b)
s=o.bw()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tY(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.at(o))}},
bw(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jN(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bw()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.M(r)
n.a=n.b=null
return n.c=s},
jp(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tY(this.a[a])
return this.b[a]=s}}
A.t2.prototype={
$1(a){return this.a.h(0,A.q(a))},
$S:39}
A.lu.prototype={
gt(a){return this.a.gt(0)},
a0(a,b){var s=this.a
if(s.b==null)s=s.ga1().a0(0,b)
else{s=s.bw()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga1()
s=s.gu(s)}else{s=s.bw()
s=new J.em(s,s.length,A.E(s).i("em<1>"))}return s},
q(a,b){return this.a.P(b)}}
A.tr.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:33}
A.tq.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:33}
A.jf.prototype={
lR(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.ku(a4,a5,a2)
s=$.Aq()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.uO(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.uO(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bi("")
g=o}else g=o
g.a+=B.b.I(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.a1("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.I(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xo(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.a1(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bL(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xo(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.a1(a1,a3,a5))
if(b>1)a3=B.b.bL(a3,a5,a5,b===2?"==":"=")}return a3}}
A.mK.prototype={}
A.eq.prototype={}
A.jq.prototype={}
A.jA.prototype={}
A.hF.prototype={
p(a){var s=A.jB(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k2.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.k1.prototype={
aW(a,b){var s=A.EQ(a,this.gl7().a)
return s},
a7(a,b){var s=A.D3(a,this.gll().b,null)
return s},
gll(){return B.ig},
gl7(){return B.ie}}
A.oT.prototype={}
A.oS.prototype={}
A.t4.prototype={
he(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.I(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.I(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.I(a,r,m)},
d7(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.k2(a,null))}B.a.l(s,a)},
cX(a){var s,r,q,p,o=this
if(o.hd(a))return
o.d7(a)
try{s=o.b.$1(a)
if(!o.hd(s)){q=A.xT(a,null,o.gf0())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.as(p)
q=A.xT(a,r,o.gf0())
throw A.b(q)}},
hd(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.he(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d7(a)
q.mZ(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d7(a)
r=q.n_(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
mZ(a){var s,r,q=this.c
q.a+="["
s=J.bc(a)
if(s.gX(a)){this.cX(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cX(s.h(a,r))}}q.a+="]"},
n_(a){var s,r,q,p,o,n,m=this,l={}
if(a.gR(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.dX(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.au(0,new A.t5(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.he(A.q(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cX(r[n])}p.a+="}"
return!0}}
A.t5.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:36}
A.t3.prototype={
gf0(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.kW.prototype={}
A.rk.prototype={
kw(a){return new A.tp(this.a).iI(t.U.a(a),0,null,!0)}}
A.tp.prototype={
iI(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.U.a(a)
s=A.ku(b,c,J.cI(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DE(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DD(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dd(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.DF(o)
l.b=0
throw A.b(A.a1(m,a,p+l.c))}return n},
dd(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a3(b+c,2)
r=q.dd(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dd(a,s,c,d)}return q.l6(a,b,c,d)},
l6(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bi(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.yg(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.er.prototype={
gag(){return A.y3(this)},
gaN(){return A.y4(this)},
a5(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.er)if(this.a===b.a)s=this.b===b.b
return s},
gN(a){return A.cz(this.a,this.b,B.f,B.f,B.f,B.f)},
H(a,b){var s
t.f7.a(b)
s=B.d.H(this.a,b.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
p(a){var s=this,r=A.B6(A.C7(s)),q=A.js(A.C5(s)),p=A.js(A.y3(s)),o=A.js(A.y4(s)),n=A.js(A.C4(s)),m=A.js(A.C6(s)),l=A.xv(A.C3(s)),k=s.b,j=k===0?"":A.xv(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib0:1}
A.dO.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.dO&&this.a===b.a},
gN(a){return B.d.gN(this.a)},
H(a,b){return B.d.H(this.a,t.ya.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a3(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a3(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.cN(B.d.p(o%1e6),6,"0")},
$ib0:1}
A.lm.prototype={
p(a){return this.v()},
$iz:1}
A.aj.prototype={
gbP(){return A.C2(this)}}
A.jb.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jB(s)
return"Assertion failed"}}
A.dw.prototype={}
A.cq.prototype={
gdh(){return"Invalid argument"+(!this.a?"(s)":"")},
gdg(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.A(p),n=s.gdh()+q+o
if(!s.a)return n
return n+s.gdg()+": "+A.jB(s.gdL())},
gdL(){return this.b}}
A.fE.prototype={
gdL(){return A.wj(this.b)},
gdh(){return"RangeError"},
gdg(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.A(q):""
else if(q==null)s=": Not greater than or equal to "+A.A(r)
else if(q>r)s=": Not in inclusive range "+A.A(r)+".."+A.A(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.A(r)
return s}}
A.jU.prototype={
gdL(){return A.e(this.b)},
gdh(){return"RangeError"},
gdg(){if(A.e(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.ic.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kR.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fK.prototype={
p(a){return"Bad state: "+this.a}}
A.jn.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jB(s)+"."}}
A.kh.prototype={
p(a){return"Out of Memory"},
gbP(){return null},
$iaj:1}
A.i6.prototype={
p(a){return"Stack Overflow"},
gbP(){return null},
$iaj:1}
A.rN.prototype={
p(a){return"Exception: "+this.a}}
A.B.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.I(e,0,75)+"..."
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
k=""}return g+l+B.b.I(e,i,j)+k+"\n"+B.b.al(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.A(f)+")"):g}}
A.m.prototype={
cF(a,b){return A.AW(this,A.o(this).i("m.E"),b)},
ce(a,b,c){var s=A.o(this)
return A.k5(this,s.K(c).i("1(m.E)").a(b),s.i("m.E"),c)},
cW(a,b){var s=A.o(this)
return new A.F(this,s.i("k(m.E)").a(b),s.i("F<m.E>"))},
e2(a,b){return new A.dz(this,b.i("dz<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.aa(s.gn(),b))return!0
return!1},
be(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,m.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a8(a,b){var s
A.o(this).i("k(m.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
Z(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.d9(q.gn())
if(!q.m())return s
r=b.gR(b)
if(r){r=s
do r+=J.d9(q.gn())
while(q.m())}else{r=s
do r=r+A.A(b)+J.d9(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
W(a,b){var s
A.o(this).i("k(m.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bN(a,b){var s=A.L(this,A.o(this).i("m.E"))
return s},
bM(a){return this.bN(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gR(a){return!this.gu(this).m()},
gX(a){return!this.gR(this)},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cu())
return s.gn()},
gbu(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cu())
s=r.gn()
if(r.m())throw A.b(A.xK())
return s},
bd(a,b,c){var s,r=A.o(this)
r.i("k(m.E)").a(b)
r.i("m.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cu())},
ah(a,b){return this.bd(0,b,null)},
a0(a,b){var s,r
A.kt(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.oA(b,b-r,this,"index"))},
p(a){return A.BJ(this,"(",")")}}
A.J.prototype={
p(a){return"MapEntry("+A.A(this.a)+": "+A.A(this.b)+")"}}
A.ao.prototype={
gN(a){return A.Q.prototype.gN.call(this,0)},
p(a){return"null"}}
A.Q.prototype={$iQ:1,
a5(a,b){return this===b},
gN(a){return A.hW(this)},
p(a){return"Instance of '"+A.kq(this)+"'"},
ga4(a){return A.x0(this)},
toString(){return this.p(this)}}
A.lP.prototype={
p(a){return""},
$icW:1}
A.r_.prototype={
glk(){var s,r=this.b
if(r==null)r=$.pO.$0()
s=r-this.a
if($.xc()===1e6)return s
return s*1000}}
A.bi.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCw:1}
A.rj.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.q(b)
s=B.b.bn(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wg(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.I(b,0,s)
q=B.b.aS(b,s+1)
p=this.a
a.k(0,A.wg(r,0,r.length,p,!0),A.wg(q,0,q.length,p,!0))}return a},
$S:156}
A.ri.prototype={
$2(a,b){throw A.b(A.a1("Illegal IPv6 address, "+a,this.a,b))},
$S:58}
A.iK.prototype={
gff(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.A(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gN(a){var s,r=this,q=r.y
if(q===$){s=B.b.gN(r.gff())
r.y!==$&&A.x6()
r.y=s
q=s}return q},
gb0(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yo(s==null?"":s)
r.z!==$&&A.x6()
q=r.z=new A.e4(s,t.hL)}return q},
gha(){return this.b},
gdJ(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ae(s,"v",1))return B.b.I(s,1,s.length-1)
return s},
gdQ(){var s=this.d
return s==null?A.yM(this.a):s},
gdR(){var s=this.f
return s==null?"":s},
gfM(){var s=this.r
return s==null?"":s},
gfN(){return this.c!=null},
gfP(){return this.f!=null},
gfO(){return this.r!=null},
p(a){return this.gff()},
a5(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge9())if(p.c!=null===b.gfN())if(p.b===b.gha())if(p.gdJ()===b.gdJ())if(p.gdQ()===b.gdQ())if(p.e===b.gh0()){r=p.f
q=r==null
if(!q===b.gfP()){if(q)r=""
if(r===b.gdR()){r=p.r
q=r==null
if(!q===b.gfO()){s=q?"":r
s=s===b.gfM()}}}}return s},
$ikU:1,
ge9(){return this.a},
gh0(){return this.e}}
A.rh.prototype={
gh9(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cJ(s,"?",m)
q=s.length
if(r>=0){p=A.iL(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.li("data","",n,n,A.iL(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lJ.prototype={
gfN(){return this.c>0},
gfP(){return this.f<this.r},
gfO(){return this.r<this.a.length},
ge9(){var s=this.w
return s==null?this.w=this.iE():s},
iE(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.I(r.a,0,q)},
gha(){var s=this.c,r=this.b+3
return s>r?B.b.I(this.a,r,s-1):""},
gdJ(){var s=this.c
return s>0?B.b.I(this.a,s,this.d):""},
gdQ(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.A_(B.b.I(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gh0(){return B.b.I(this.a,this.e,this.f)},
gdR(){var s=this.f,r=this.r
return s<r?B.b.I(this.a,s+1,r):""},
gfM(){var s=this.r,r=this.a
return s<r.length?B.b.aS(r,s+1):""},
gb0(){if(this.f>=this.r)return B.d5
return new A.e4(A.yo(this.gdR()),t.hL)},
gN(a){var s=this.x
return s==null?this.x=B.b.gN(this.a):s},
a5(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ikU:1}
A.li.prototype={}
A.pp.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vo.prototype={
$1(a){return this.a.dv(this.b.i("0/?").a(a))},
$S:22}
A.vp.prototype={
$1(a){if(a==null)return this.a.fA(new A.pp(a===undefined))
return this.a.fA(a)},
$S:22}
A.uK.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zr(a))return a
s=this.a
a.toString
if(s.P(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.i(A.aW(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.f6(!0,"isUtc",t.y)
return new A.er(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.d7(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c8(n),p=s.gu(n);p.m();)m.push(A.h6(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.e(a.length)
for(s=J.bc(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:61}
A.ls.prototype={
aO(a){if(a<=0||a>4294967296)throw A.b(A.y7(u.w+a))
return Math.random()*a>>>0},
aG(){return Math.random()},
$iw0:1}
A.ea.prototype={
bQ(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a3(a-s,k)
r=a>>>0
a=B.d.a3(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a3(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a3(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a3(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a3(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a3(q-n,k)>>>0
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
s.b=B.d.a3(o-n+(q-p)+(m-r),4294967296)>>>0},
aO(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.y7(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b9()
return(p.a&s)>>>0}do{p.b9()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aG(){var s,r=this
r.b9()
s=r.a
r.b9()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iw0:1}
A.pS.prototype={
C(){var s,r=this
if(B.a.W(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.pT()))throw A.b(B.he)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.ft)}}
A.pT.prototype={
$1(a){return A.e(a)<=0},
$S:30}
A.eF.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e0.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bm(B.lF)
if(q.a!==0)throw A.b(A.ag(q,s,"contains unknown pipeline features"))
if(this.a===B.br&&r.gX(r))throw A.b(A.ag(r,s,"safe profiles cannot install optional features"))}}
A.fl.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.ko.prototype={}
A.mY.prototype={
bZ(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.l("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.i(A.l("configuration state is not initialized"))
if(p.c!=null)A.i(A.l("a configuration transition is already open"))
a2.C()
n=A.hR(a2)
m=p.d
l=p.b
if(l==null)A.i(A.l("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bm(h)
f=h.bm(j)
j=n.a
h=l.a
e=j.bm(h)
d=h.bm(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.n0(m,a2,n,new A.mZ(A.eL(g,k),A.eL(f,k),A.eL(e,k),A.eL(d,k),c,b,o.z!==a2.z),B.c9)
p.c=a
s=a
try{r=a1.b.cP(s.c)
q=new A.ko(s,r,B.aT)
a1.c=q
return q}catch(a0){p.fs(s)
throw a0}},
c_(a){var s,r,q,p=this
p.eF(a)
s=p.a
r=a.a
s.eG(r)
q=s.d
if(r.a!==q)A.i(A.l("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eG
s.c=null
p.b.c_(a.b)
a.c=B.eO
p.c=null},
eF(a){if(this.c!==a||a.c!==B.aT)throw A.b(A.l("coordinated transition is not open"))}}
A.fh.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.mZ.prototype={}
A.n0.prototype={}
A.n_.prototype={
fs(a){this.eG(a)
a.e=B.eH
this.c=null},
eG(a){if(this.c!==a||a.e!==B.c9)throw A.b(A.l("configuration transition is not open"))}}
A.kn.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.H(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",m.d,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",m.x,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.I(q,A.o(q).i("I<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.b(A.w("PostProcessState."+o+" must be >= 0: "+A.A(n),l))}q=m.as
if(q<1||q>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.A(s),l))
if(r>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.A(r),l))}}
A.fe.prototype={}
A.jI.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gap(0)||!k.b.gap(0)||!k.r.gap(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.A(s)+"/"+A.A(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.A(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gap(0)||r.gcc()<1e-12)A.i(A.w("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.i(A.w("DirectionalLight.intensity must be >= 0: "+A.A(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.w("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.i(A.w("PointLight.intensity must be >= 0: "+A.A(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.i(A.w("PointLight.radius must be > 0: "+A.A(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
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
A.nG.prototype={}
A.dq.prototype={
a5(a,b){if(b==null)return!1
return J.fa(b)===A.x0(this)&&b instanceof A.dq&&this.a===b.a&&this.b===b.b},
gN(a){return A.cz(A.x0(this),this.a,this.b,B.f,B.f,B.f)}}
A.bs.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.b4.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cx.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ki.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.ct.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.ex.prototype={
v(){return"HandleRejection."+this.b}}
A.jR.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.bS.prototype={
gap(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a5(a,b){if(b==null)return!1
return b instanceof A.bS&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cz(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.A(this.a)+", "+A.A(this.b)+", "+A.A(this.c)+")"}}
A.nl.prototype={}
A.km.prototype={
gG(){return this.a}}
A.by.prototype={
gG(){return this.a}}
A.vq.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:70}
A.ja.prototype={
v(){return"AlphaMode."+this.b}}
A.hJ.prototype={
v(){return"MaterialMapColorSpace."+this.b}}
A.dY.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.k6("roughness",l.at)
A.k6("metallic",0)
A.k6("occlusionStrength",1)
A.k6("clearcoatStrength",0)
A.k6("clearcoatRoughness",0.2)
for(s=l.db,r=l.dx,q=[new A.aM("uvScaleU",s),new A.aM("uvScaleV",r),new A.aM("uvOffsetU",0),new A.aM("uvOffsetV",0),new A.aM("tintR",l.d),new A.aM("tintG",l.e),new A.aM("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.A(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cZ.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bz.prototype={}
A.rl.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.U[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rm())
for(p=B.a.gu(B.U),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rm.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:25}
A.cy.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jQ()
r=n.c
if(r!=null){q=s/14|0
for(s=A.BS(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gap(0)&&s.b.gap(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
jQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.F(B.U,a2.a(new A.pe()),a3)
if(!a4.gu(0).m())return
s=new A.F(B.U,a2.a(new A.pf()),a3)
if(s.gt(0)!==1)throw A.b(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gbu(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gbu(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a8(A.c([j,h,g,f,e,d,c],p),new A.pg()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.A(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.A(c),a1))}}}
A.pe.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:25}
A.pf.prototype={
$1(a){return t.qY.a(a).a===B.dR},
$S:25}
A.pg.prototype={
$1(a){return isFinite(A.bm(a))},
$S:5}
A.pr.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.W(0,new A.ps()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.ps.prototype={
$1(a){return A.q(a).length===0},
$S:3}
A.fG.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kp.prototype={}
A.ky.prototype={
fS(a){var s=this
if(s.d)A.i(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.l("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cP(a){var s=this
if(s.d)A.i(A.l("resource assembler is disposed"))
if(s.a==null)throw A.b(A.l("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.l("resource assembly is already open"))
a.C()
return s.b=new A.kp(s.c,a,B.by)},
c_(a){var s,r=this
if(r.d)A.i(A.l("resource assembler is disposed"))
r.f6(a)
s=r.c
if(a.a!==s)throw A.b(A.l("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.le
r.b=null},
dY(a){if(this.d)A.i(A.l("resource assembler is disposed"))
this.f6(a)
a.c=B.lf
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.l("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f6(a){if(this.b!==a||a.c!==B.by)throw A.b(A.l("resource assembly is not prepared"))}}
A.fn.prototype={
v(){return"DrawMode."+this.b}}
A.jh.prototype={
v(){return"BlendMode."+this.b}}
A.bH.prototype={}
A.kO.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hh.prototype={
v(){return"ColorEncoding."+this.b}}
A.fm.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.hZ.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.w("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.w("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.w("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.w("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eI.prototype={
v(){return"RendererState."+this.b}}
A.aE.prototype={}
A.nI.prototype={
h_(a){var s=this.z.h(0,a)
return s==null?B.cm:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eB.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cR.prototype={}
A.bT.prototype={}
A.pb.prototype={
cs(a){var s=this.a,r=A.E(s)
return new A.F(s,r.i("k(1)").a(new A.pc(a)),r.i("F<1>")).gt(0)}}
A.pc.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:80}
A.p9.prototype={
cQ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.n(s,t.jt)
q=A.c([],t.r8)
p=A.n(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.v)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.i(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.P(l))throw A.b(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.n(s,s)
for(k=A.zM(k),i=k.$ti,k=new A.c0(k.a(),i.i("c0<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bJ(c,d,g))}p.k(0,l,j)}s=A.n(s,t.bp)
for(o=this.a.cQ(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("am<2>")
a=A.L(new A.am(r,o),o.i("m.E"))
B.a.O(a,new A.pa())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.v)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jy(m,k,s))}return new A.pb(A.ah(o,t.wl))},
jy(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.n(s,r)
for(p=new A.I(b,A.o(b).i("I<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.BQ(new A.am(q,q.$ti.i("am<2>")))
A.br(q,s,r)
return new A.bT(a,p)}}
A.pa.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:85}
A.k7.prototype={
mB(a){return this.a.bC(a)}}
A.pd.prototype={
$3(a,b,c){return new A.cx(A.e(a),A.e(b),A.an(c))},
$S:93}
A.kT.prototype={}
A.ph.prototype={
bl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yu(f,new A.jM(e.byteLength,B.cB,B.hv))
if(f.b!==B.h)A.i(A.l(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d2(f)
A.bk(f,p)
if(f.b!==B.h)A.i(A.l(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a3(t.S)
for(n=a.a,m=0;m<6;++m){l=B.U[m]
k=A.zJ(l.a)
if(!o.l(0,k))continue
j=A.DV(n,k,l)
if(f.b!==B.h)A.i(A.l(g))
r.vertexAttribPointer.apply(r,[k,j,A.e(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.i(A.l(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yu(f,new A.jM(A.y0(i),B.cB,B.cA))
if(f.b!==B.h)A.i(A.l(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.CR(f,h,t.U.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kT(d,h,p,f,e.length/14|0,!1)},
dW(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.dT(B.az,a))
this.b.bC(a)
return s},
bq(a){var s,r,q=this.c.aa(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.bq(a)},
dU(){var s,r,q,p
for(s=this.b.bH(),r=s.$ti,s=new A.c0(s.a(),r.i("c0<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bl(p.b))}},
gcd(){return this.b.bH().be(0,0,new A.pj(),t.S)}}
A.pi.prototype={
$3(a,b,c){return new A.bs(A.e(a),A.e(b),A.an(c))},
$S:97}
A.pj.prototype={
$2(a,b){var s,r
A.e(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.y0(s)
return a+r+s},
$S:98}
A.bJ.prototype={}
A.dv.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.bW.prototype={}
A.r9.prototype={
cC(a){var s=this.a,r=A.E(s)
return new A.F(s,r.i("k(1)").a(new A.ra(a)),r.i("F<1>")).gt(0)}}
A.ra.prototype={
$1(a){return t.h.a(a).b===this.a},
$S:100}
A.r7.prototype={
cQ(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.i(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.i(A.ag(n,"handle","must be valid"))
if(s.P(o))throw A.b(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("am<2>")
m=A.L(new A.am(s,r),r.i("m.E"))
B.a.O(m,new A.r8())
r=t.Aj
l=A.a3(r)
k=A.n(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.v)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jo(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.bW(p,i))}r=l.a
return new A.r9(A.ah(j,t.h),r)},
jo(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.fh(a,r)===s.d)return B.dL
this.b.k(0,a,!0)
return B.dK}catch(q){if(A.as(q) instanceof A.jR){s=this.b.h(0,a)===!0?B.dN:B.dM
return s}else throw q}}}
A.r8.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.b.H(a.a,b.a):s},
$S:103}
A.d4.prototype={}
A.kQ.prototype={
aU(a){var s=this.a,r=A.w6(s,B.hA)
A.w7(s,r,0,a)
return r},
mT(a,b){var s,r,q,p=this,o=p.b,n=o.bC(a),m=A.L(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.e1(a,new A.d4(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.w6(p.a,s)
o.k(0,r,q)}A.w7(p.a,q,0,b)},
lu(a){var s,r=this.b,q=r.bC(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.l("TextureStore.finalizeMips: no pixels uploaded yet for "+a.p(0)))
A.yv(this.a,s)
r.e1(a,new A.d4(p,q.b,!0))},
fh(a,b){var s
this.b.bC(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mx(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.fh(a,s)},
mF(a){var s=this.e
s===$&&A.p()
return s},
mH(a){var s=this.f
s===$&&A.p()
return s},
mz(a){var s=this.r
s===$&&A.p()
return s},
mD(a){var s=this.w
s===$&&A.p()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>")),q=n.a,p=q.a,o=t.k;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.M(0)
s=n.d
s===$&&A.p()
A.l6(q,s)
s=n.e
s===$&&A.p()
A.l6(q,s)
s=n.f
s===$&&A.p()
A.l6(q,s)
s=n.r
s===$&&A.p()
A.l6(q,s)
s=n.w
s===$&&A.p()
A.l6(q,s)},
dU(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aU($.xb())
i.e=i.aU($.x8())
i.f=i.aU($.x9())
i.r=i.aU($.x7())
i.w=i.aU($.xa())
for(s=i.b.bH(),r=s.$ti,s=new A.c0(s.a(),r.i("c0<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a8(o,new A.rd()))continue
l=A.w6(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.w7(p,l,k,j)}if(m.c)A.yv(p,l)
q.k(0,n.a,l)}},
gcd(){return this.b.bH().be(0,0,new A.rc(),t.S)}}
A.rb.prototype={
$3(a,b,c){return new A.b4(A.e(a),A.e(b),A.an(c))},
$S:108}
A.rd.prototype={
$1(a){return t.Fx.a(a)==null},
$S:112}
A.rc.prototype={
$2(a,b){var s
A.e(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:115}
A.ez.prototype={
glC(){return this.b.length}}
A.jF.prototype={
ki(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.P.a(a)
s=new A.pW(A.c([],t.pq),A.a3(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p)r[p].an(s,b)
o=s.kh(a,!1)
if(o.b.length!==0)return new A.jG(o,B.j5)
q=o.a
n=A.E(q)
m=new A.P(q,n.i("f(1)").a(new A.nB()),n.i("P<1,f>")).br(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p){k=r[p]
for(n=k.am(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.b(A.l('RenderFeature "'+k.gG()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.O(l,new A.nC(o))
return new A.jG(o,l)},
bE(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)s[q].a_()}}
A.nB.prototype={
$1(a){return t.A.a(a).a},
$S:116}
A.nC.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.H(B.a.dK(s,new A.nz(a)),B.a.dK(s,new A.nA(b)))},
$S:119}
A.nz.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:7}
A.nA.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:7}
A.jG.prototype={}
A.et.prototype={
v(){return"FrameQueueState."+this.b}}
A.nH.prototype={}
A.nF.prototype={
ke(a){if(a.length===0)throw A.b(A.ag(a,"passId",null))
this.b=a
this.a.cf(a,A.zT())},
hM(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aE(p.a,p.b,p.d))}return A.br(o,t.N,t.pH)},
by(a,b){var s,r=this.b
if(r==null)throw A.b(A.l("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a3(a,3)*b}}
A.fP.prototype={}
A.aw.prototype={
gbK(){var s=this.c,r=A.E(s)
return new A.F(s,r.i("k(1)").a(new A.pv()),r.i("F<1>"))},
gcj(){var s=this.c,r=A.E(s)
return new A.F(s,r.i("k(1)").a(new A.pw()),r.i("F<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"},
gG(){return this.a}}
A.pv.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:18}
A.pw.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:18}
A.cd.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.be.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i0.prototype={
v(){return"ResourceFormat."+this.b}}
A.cP.prototype={
v(){return"GraphStage."+this.b}}
A.aG.prototype={
fW(){var s=this
return new A.aG(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.aG&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gN(a){var s=this
return A.cz(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fF.prototype={
v(){return"ResourceAccess."+this.b}}
A.N.prototype={}
A.hi.prototype={
gG(){return this.a}}
A.kr.prototype={
av(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.CU(m.a,a.c,r.a(a.d.ga1().bM(0)),r.a(a.f),a.b)}catch(q){if(A.as(q) instanceof A.i4){++m.e
throw q}else throw q}r=a.a
p=new A.hi(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bE(){var s=this.b
this.iM(new A.am(s,A.o(s).i("am<2>")))
s.M(0)},
iM(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ac(s,s.r,s.e,a.$ti.i("ac<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bh.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a3(s)
for(q=this.d.gL(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.b(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.b(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a3(s)
for(s=this.e.gL(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.b(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.b(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gG(){return this.a}}
A.pU.prototype={}
A.b2.prototype={
ac(){var s=this
return A.xy(B.eb,s.f,B.ao,B.a7,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)},
gG(){return this.a}}
A.pW.prototype={
kh(a,b){var s=this.jO(t.P.a(a),!1),r=this.a,q=A.E(r)
return new A.pV(A.ah(new A.F(r,q.i("k(1)").a(new A.q0()),q.i("F<1>")),t.A),s)},
jO(a,b){var s,r,q,p,o,n,m=this
t.P.a(a)
s=A.c([],t.ka)
r=m.a
q=A.E(r)
p=q.i("F<1>")
o=A.L(new A.F(r,q.i("k(1)").a(new A.q_()),p),p.i("m.E"))
m.is(o,a,s)
m.iw(o,s)
m.iy(o,s)
m.iv(o,!1,s)
n=m.iA(o,s)
m.ix(o,n,s)
m.iz(o,s)
m.iu(o,n,s)
m.it(o,s)
return s},
is(a,b,c){var s,r,q,p
t.Q.a(a)
t.P.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
p=B.a1.bm(b)
if(p.a!==0)B.a.l(c,new A.be(B.hL,q.a,"missing capabilities: "+p.Z(0,", ")))}},
iw(a,b){var s,r,q,p,o,n,m
t.Q.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbK(),o=J.M(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.be(B.hG,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
iy(a,b){var s,r,q,p,o,n,m,l
t.Q.a(a)
t.b.a(b)
for(s=A.E(a),r=s.i("k(1)").a(new A.pZ()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbK()
o=A.L(p,p.$ti.i("m.E"))
p=r.gcj()
n=A.L(p,p.$ti.i("m.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.be(B.b_,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbu(o).a
l=B.a.gbu(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.be(B.b_,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.be(B.b_,r.a,"resolve source and destination must match format and extent"))}},
iv(a,b,c){var s,r,q,p,o,n,m,l
t.Q.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.v)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.be(B.hJ,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iA(a,b){var s,r,q,p,o,n,m,l,k,j
t.Q.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
for(o=p.gcj(),n=J.M(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.be(B.hF,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
ix(a,b,c){var s,r,q,p,o,n,m
t.Q.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbK(),p=J.M(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.be(B.cG,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bn(a,m)>s)B.a.l(c,new A.be(B.cG,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
iz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gbK(),o=J.M(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcj(),k=J.M(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.be(B.hI,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
iu(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.Q.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gbK(),o=J.M(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcj().ah(0,new A.pY(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.be(B.hH,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
it(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcj(),o=J.M(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.xL(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a3(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbK(),p=J.M(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.dX(s,!1,!1,p)
s=a.length
i=A.dX(s,!1,!1,p)
h=new A.pX(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.be(B.hK,a[q].a,"participates in a resource dependency cycle"))}}}}
A.q0.prototype={
$1(a){t.A.a(a)
return A.vZ()},
$S:7}
A.q_.prototype={
$1(a){t.A.a(a)
return A.vZ()},
$S:7}
A.pZ.prototype={
$1(a){return t.A.a(a).f},
$S:7}
A.pY.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:18}
A.pX.prototype={
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
r=A.fO(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:30}
A.pV.prototype={}
A.lr.prototype={$ibV:1,
gG(){return this.a},
gD(){return this.b},
ge4(){return this.c}}
A.hY.prototype={
jT(a){var s,r,q=a.c,p=q.a
if(!p.gap(0))A.i(A.w("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.i(A.w("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.i(A.w(u.u,null))
s=this.a.bC(a.a)
q=q.ab()
p=s.d.gaw()
r=A.E(p)
return A.bq(new A.P(p,r.i("K(1)").a(q.gaC()),r.i("P<1,K>")))},
gfU(){return new A.bM(this.lL(),t.Br)},
lL(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gfU(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bH(),n=o.$ti,o=new A.c0(o.a(),n.i("c0<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ab()
f=f.gaw()
d=A.E(f)
r=5
return a.b=new A.lr(h,g,A.bq(new A.P(f,d.i("K(1)").a(i.gaC()),d.i("P<1,K>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCf:1}
A.q1.prototype={
$3(a,b,c){return new A.ct(A.e(a),A.e(b),A.an(c))},
$S:139}
A.kx.prototype={
gfg(){var s=this.d
return s===$?this.d=new A.r7(this.c,A.n(t.Aj,t.y)):s},
mp(a,b){var s,r
if(this.x)A.i(A.l("resource library is disposed"))
s=this.a
a.C()
r=s.b.aE(a,b)
s.c.k(0,r.a,s.bl(a))
this.f.l(0,r)
return r},
mq(a){if(this.x)A.i(A.l("resource library is disposed"))
this.a.bq(a)
this.f.aa(0,a)},
dT(a,b,c,d,e,f){var s,r
if(this.x)A.i(A.l("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.i(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.i(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aE(new A.d4(new A.jO(f,d,1,!0,e,B.aY,B.cD,a),A.dX(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.L(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.k
l=0
for(;l<r.length;r.length===q||(0,A.v)(r),++l){k=r[l]
j=o.aa(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.bq(k)}r=i.r
q=A.L(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.v)(q),++l)n.bq(q[l])
q=i.f
o=A.L(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.v)(o),++l)m.bq(o[l])
s.M(0)
r.M(0)
q.M(0)
p.a_()
i.x=!0},
$iCj:1}
A.rO.prototype={}
A.lQ.prototype={$ibV:1,
gG(){return this.a},
gD(){return this.b},
ge4(){return this.c}}
A.ue.prototype={
$1(a){var s=this.a.w.a.dW(a),r=s.b!=null,q=r?s.d:s.e
return new A.i_(s.c,r,q,s.f)},
$S:149}
A.uf.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().fX(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().fX(b)
throw A.b(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:152}
A.ud.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.u6.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:158}
A.u7.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bd
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.G3(s,3,q.a.d,r)},
$S:169}
A.uc.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.u1.prototype={
$0(){return this.a.at.a},
$S:47}
A.u3.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.u2.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.ub.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.u_.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.u0.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.u8.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.u9.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.ua.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:4}
A.u5.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.u4.prototype={
$0(){return this.a.at.w},
$S:48}
A.uh.prototype={
$0(){return this.a},
$S:49}
A.tl.prototype={}
A.lC.prototype={$iCe:1}
A.lo.prototype={$iBt:1}
A.q9.prototype={
gb1(){var s=this.w
return s==null?A.i(A.l("renderer is not initialized")):s},
fT(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bw)throw A.b(A.l("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.S)throw A.b(A.l("renderer device is context lost"))
m.e=B.ld
try{m.r=s.h5()
r=m.b
q=A.hR(a)
p=r.a
if(p.a!=null)A.i(A.l("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.hR(a)
p.d=1
r.b.fS(q)
r=A.BR()
m.w=new A.kx(A.BT(s),r,A.Cy(s),A.a3(t.kc),A.a3(t.pw),A.a3(t.Aj))
r=new A.ky()
p=new A.o4(s,r)
q=A.hR(a)
o=p.dc(q,a)
r.fS(q)
p.c=new A.fC(new A.kp(0,q,B.by),o,B.aa)
m.x=p
m.y=new A.kr(s,A.n(t.N,t.CH))
m.as=a
A.zd(m)
m.e=B.bx}catch(n){s=m.y
if(s!=null)s.bE()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bw
throw n}return A.xB(t.H)},
kc(a,b){var s,r,q,p,o,n,m=this,l=null
m.js()
m.bS()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.l("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gap(0))A.i(A.w("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gap(0)||q.gcc()<1e-12)A.i(A.w("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.i(A.w("CameraView requires 0 < near < far, got "+A.A(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.i(A.w("CameraView.aspect must be finite and > 0: "+A.A(q),l))
if(!r.a.gap(0)||!r.b.gap(0)||!r.c.gap(0))A.i(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.i(A.w("FrameInput.timeSeconds must be finite: "+A.A(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ax)A.i(A.l("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ax
o.c=0
B.a.M(o.a)
s=o
try{r=m.r
if((r==null?A.i(A.l("renderer is not initialized")):r).z)m.b$=m.a.kd()
return s}catch(n){if(o.b!==B.ax)A.i(A.l("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hj
m.en()
m.ax=m.at=null
throw n}},
lm(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bS()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.l("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ax)A.i(A.l("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.kN(l,0,A.f6(m.c,"count",t.S),A.E(l).c).bN(0,!1)
m.b=B.hi
q=k
try{p=A.E6(a1,r,s,q)
o=p.a.hM()
m=o.gL().cW(0,new A.qa())
l=m.$ti
n=new A.cw(m,l.i("aE(1)").a(new A.qb()),l.i("cw<1,aE>")).be(0,B.cm,new A.qc(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcd()
g=g.c.gcd()
e=a1.w
e.a.gcd()
e.c.gcd()
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
return new A.nI(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.iV(s.e)
a1.ax=a1.at=null}},
js(){var s,r,q,p=this
if(p.e!==B.dx)return
if(p.a.b===B.S)throw A.b(A.l("renderer context remains lost"))
s=p.w
if(s.x)A.i(A.l("resource library is disposed"))
s.a.dU()
s.c.dU()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.i(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.i(A.l("GPU resource adapter is not initialized"))
s.c=new A.fC(q.a,s.dc(A.hR(r),r),B.aa)
s=p.y
s.c=null
s.b.M(0)
A.zd(p)
p.e=B.bx},
bS(){var s=this,r=s.e
if(r!==B.bx)throw A.b(A.l("renderer is not ready: "+r.b))
if(s.a.b===B.S){s.iN()
s.e=B.dx
throw A.b(A.l("renderer context lost"))}}}
A.qa.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qb.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qc.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aE(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lz.prototype={}
A.t_.prototype={
iV(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.i(A.l(u.k))
r=s.fj(o)
if(r.b)A.i(A.l("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lz(o))}catch(q){p.de(o)}},
en(){var s=this.b$
this.b$=null
if(s!=null)this.de(s)},
iN(){var s,r,q
this.en()
s=this.a$
r=J.xO(s.slice(0),A.E(s).c)
B.a.M(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.v)(r),++q)this.de(r[q].b)},
de(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fj(a).a)}catch(r){}}}
A.lG.prototype={}
A.i5.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bF.prototype={
H(a,b){var s,r=this
t.BB.a(b)
s=B.d.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.H(r.c.a,b.c.a)
if(s!==0)return s
return B.d.H(r.d,b.d)},
$ib0:1}
A.bC.prototype={
H(a,b){var s
t.z3.a(b)
s=B.c.H(b.a,this.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
$ib0:1}
A.aK.prototype={}
A.vu.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.H(0,s.a(b).a)},
$S:53}
A.vv.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.vs.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.H(0,s.a(b).a)},
$S:55}
A.vt.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.ng.prototype={}
A.nf.prototype={}
A.j6.prototype={
gaw(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.K(o,n,p),new A.K(r,n,p),new A.K(o,q,p),new A.K(r,q,p),new A.K(o,n,s),new A.K(r,n,s),new A.K(o,q,s),new A.K(r,q,s)],t.fG)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eD.prototype={}
A.fq.prototype={
v(){return"FrustumTest."+this.b}}
A.nJ.prototype={
mO(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.cn
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hk:B.hl}}
A.nK.prototype={
$4(a,b,c,d){var s=new A.K(a,b,c),r=new A.eD(s,d),q=Math.sqrt(s.gcc())
if(q<1e-9)s=r
else{s=1/q
s=new A.eD(new A.K(a*s,b*s,c*s),d/q)}return s},
$S:57}
A.dl.prototype={
al(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dl(h)},
h8(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
dO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.i(A.l("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.A(k)+")"))
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
return new A.dl(h)},
gap(a){return B.y.a8(this.a,new A.p7())},
p(a){return"Mat4("+A.A(this.a)+")"}}
A.p7.prototype={
$1(a){return isFinite(A.bm(a))},
$S:5}
A.pQ.prototype={
p(a){var s=this
return"Quat("+A.A(s.a)+", "+A.A(s.b)+", "+A.A(s.c)+", "+A.A(s.d)+")"}}
A.re.prototype={
C(){var s=this.a
if(!s.gap(0))throw A.b(A.w("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.b(A.w(u.u,null))},
ab(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.xY(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.xY(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.K.prototype={
c3(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bB(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.K(s*r-q*p,q*o-n*r,n*p-s*o)},
gcc(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gcc())},
gap(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gaB(){var s=this,r=Math.sqrt(s.gcc())
return r<1e-9?B.ai:new A.K(s.a/r,s.b/r,s.c/r)},
a5(a,b){if(b==null)return!1
return b instanceof A.K&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cz(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.A(this.a)+", "+A.A(this.b)+", "+A.A(this.c)+")"}}
A.ij.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hf.prototype={
gG(){return this.f},
an(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.c([new A.N(this.x,B.i),new A.N(this.y,B.k)],t.C),!1))},
am(a){var s=this,r=s.a.av(new A.bh(s.e,s.b,s.c,B.x,B.d1,B.cY)),q=A.d2(s.d),p=t.n,o=s.r===B.dX?new Float32Array(A.a_(A.c([1/s.Q,0],p))):new Float32Array(A.a_(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lf(new A.b2(s.f,A.c([new A.N(s.x,B.i),new A.N(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iai:1}
A.lf.prototype={
ao(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bL(r,a.aj(o.r).b)
A.b7(r,o.a.ac())
A.d1(r,B.R,1,0,0,0)
A.c_(r,o.b.b)
q=t._
p=o.d
if(o.e)A.CP(r,0,q.a(p.$0()))
else A.aA(r,0,q.a(p.$0()))
A.u(r,"uSource",B.v)
A.u(r,"uTexelStep",new A.x(B.ag,o.f))
A.bk(r,o.c)
s.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.ji.prototype={
gG(){return"bloomComposite"},
an(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.L,A.c([new A.N(this.f,B.i),new A.N(this.r,B.i),new A.N(this.w,B.k)],t.C),!1))},
am(a){var s=this,r="bloomComposite",q=s.a.av(new A.bh(r,s.b,s.c,B.x,B.jE,B.jj)),p=A.d2(s.d),o=s.w,n=A.c([new A.N(s.f,B.i),new A.N(s.r,B.i),new A.N(o,B.k)],t.C)
return A.c([new A.lg(new A.b2(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iai:1}
A.lg.prototype={
ao(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bL(r,a.cV(q.f).b)
A.CQ(r,1)
A.b7(r,B.eT)
A.c_(r,q.b.b)
A.aA(r,0,t._.a(q.d.$0()))
A.u(r,"uBloom",B.v)
A.u(r,"uBloomStrength",new A.x(B.e,p))
A.bk(r,q.c)
s.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.ju.prototype={
gG(){return"depthPrepass"},
an(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hC,A.c([new A.N(this.w,B.k)],t.C),!1))},
am(a){var s=this,r="depthPrepass",q=s.a.av(new A.bh(r,s.b,s.c,B.d0,B.d_,B.iJ))
return A.c([new A.lj(new A.b2(r,A.c([new A.N(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iai:1}
A.lj.prototype={
ao(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bL(a1,a2.aj("sceneDepth").b)
A.b7(a1,d.a.ac())
A.d1(a1,B.aR,1,0,0,0)
A.c_(a1,d.b.b)
A.u(a1,"uVertexSnapGrid",new A.x(B.e,a0.Q))
A.u(a1,"uAlbedo",B.v)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.u(a1,"uViewProjection",new A.x(B.u,new Float32Array(A.a_(a))))
A.u(a1,"uModel",new A.x(B.u,new Float32Array(A.a_(i.c.ab().a))))
A.vr(b,k,!1)
d.jC(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.i(A.l(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.i(A.l(c))
e=A.e(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.e(o.WebGL2RenderingContext.UNSIGNED_INT):A.e(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.by(g,f)}else{if(a1.b!==B.h)A.i(A.l(c))
m.drawArraysInstanced(A.e(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.by(g,f)}}},
jC(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aA(q,0,t._.a(this.e.$1(r.b)))
A.u(q,"uAlphaCutoff",new A.x(B.e,0))
A.u(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.ac()
A.b7(q,r.go?s.e3(!1):s)},
$ia6:1,
gD(){return this.a}}
A.il.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hm.prototype={
gG(){return this.f},
an(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.c([new A.N(this.w,B.i),new A.N(this.x,B.k)],t.C),!1))},
am(a){var s=this,r=s.a.av(new A.bh(s.e,s.b,s.c,B.x,B.d1,B.cY)),q=A.d2(s.d),p=t.n,o=s.r===B.dY?new Float32Array(A.a_(A.c([1/s.z,0],p))):new Float32Array(A.a_(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.lk(new A.b2(s.f,A.c([new A.N(s.w,B.i),new A.N(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iai:1}
A.lk.prototype={
ao(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bL(r,a.aj(q.f).b)
A.b7(r,q.a.ac())
A.d1(r,B.R,1,0,0,0)
A.c_(r,q.b.b)
A.aA(r,0,t._.a(q.d.$0()))
A.u(r,"uSource",B.v)
A.u(r,"uTexelStep",new A.x(B.ag,q.e))
A.bk(r,q.c)
s.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.jx.prototype={
gG(){return"dofComposite"},
an(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.L,A.c([new A.N(s.z,B.i),new A.N(s.Q,B.i),new A.N(s.as,B.i),new A.N(s.at,B.k)],t.C),!1))},
am(a){var s=this,r="dofComposite",q=s.a.av(new A.bh(r,s.b,s.c,B.x,B.jB,B.iy)),p=A.d2(s.d)
return A.c([new A.ll(new A.b2(r,A.c([new A.N(s.z,B.i),new A.N(s.Q,B.i),new A.N(s.as,B.i),new A.N(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iai:1}
A.ll.prototype={
ao(a){var s,r=this,q=a.aj("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bL(n,q.b)
A.b7(n,r.a.ac())
A.c_(n,r.b.b)
s=t._
A.aA(n,0,s.a(r.d.$0()))
A.u(n,"uSharp",B.v)
A.aA(n,1,s.a(r.e.$0()))
A.u(n,"uBlurred",B.ah)
A.aA(n,2,s.a(r.f.$0()))
A.u(n,"uSceneDepth",B.dQ)
A.u(n,"uNear",new A.x(B.e,o.f))
A.u(n,"uFar",new A.x(B.e,o.r))
A.u(n,"uFocusDistance",new A.x(B.e,r.w))
A.u(n,"uFocusRange",new A.x(B.e,r.x))
A.u(n,"uStrength",new A.x(B.e,a.c.e.d))
A.bk(n,r.c)
p.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.jQ.prototype={
gG(){return"grade"},
an(a,b){B.a.l(a.a,new A.aw("grade",B.L,A.c([new A.N(this.r,B.i),new A.N(this.w,B.k)],t.C),!1))},
am(a){var s=this,r=s.a.av(new A.bh("grade",s.b,s.c,B.x,B.jz,B.jk)),q=A.d2(s.d),p=s.r,o=s.w
return A.c([new A.lq(new A.b2("grade",A.c([new A.N(p,B.i),new A.N(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iai:1}
A.lq.prototype={
ao(a){var s=this,r=a.aj(s.f.a),q=a.b,p=q.a
A.bL(p,a.aj(s.r.a).b)
A.b7(p,s.a.ac())
A.c_(p,s.b.b)
A.aA(p,0,r.b)
A.u(p,"uScene",B.v)
A.aA(p,1,t._.a(s.d.$0()))
A.u(p,"uLut",B.ah)
A.u(p,"uLutSize",new A.x(B.e,s.e))
A.u(p,"uStrength",new A.x(B.e,a.c.e.y))
A.bk(p,s.c)
q.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.hK.prototype={
gG(){return"msaaResolve"},
an(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hD,A.c([new A.N(this.b,B.i),new A.N(this.c,B.k)],t.C),!0))},
am(a){var s=this.b,r=this.c
return A.c([new A.lx(new A.b2("msaaResolve",A.c([new A.N(s,B.i),new A.N(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iai:1}
A.lx.prototype={
ao(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cV(this.c),j=a.cV(this.d),i=this.b
if(i.b!==B.h)A.i(A.l(u.k))
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
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.NONE)],t.n))}A.aH(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.NONE),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aH(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aH(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.e(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia6:1,
gD(){return this.a}}
A.fc.prototype={}
A.jj.prototype={
aj(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cV(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.aj(s)},
$iCd:1}
A.w_.prototype={}
A.hV.prototype={
gG(){return"present"},
an(a,b){B.a.l(a.a,new A.aw("present",B.hE,A.c([new A.N(this.f,B.i)],t.C),!1))},
am(a){var s,r=this,q=r.a.av(new A.bh("present",r.b,r.c,B.x,B.jL,B.iQ)),p=A.d2(r.d)
r.w=p
s=r.f
return A.c([new A.lD(new A.b2("present",A.c([new A.N(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iai:1}
A.lD.prototype={
ao(a){var s,r=this,q=a.cV(r.d),p=a.b,o=p.a
A.bL(o,null)
A.b7(o,r.a.ac())
A.c_(o,r.b.b)
A.bk(o,r.c)
A.aA(o,0,q.b)
s=a.c.e
A.u(o,"uExposure",new A.x(B.e,s.a))
A.u(o,"uVignette",new A.x(B.e,s.e))
A.u(o,"uGrain",new A.x(B.e,s.f))
A.u(o,"uRainIntensity",new A.x(B.e,s.r))
A.u(o,"uRainWindowVisibility",new A.x(B.e,s.w))
A.u(o,"uOutputEncoding",new A.x(B.e,r.e===B.aS?1:0))
A.u(o,"uToneMap",B.dP)
p.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.ks.prototype={
gG(){return"ps1Quantize"},
an(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.L,A.c([new A.N(this.e,B.i),new A.N(this.f,B.k)],t.C),!1))},
am(a){var s=this,r="ps1Quantize",q=s.a.av(new A.bh(r,s.b,s.c,B.x,B.jG,B.iq)),p=A.d2(s.d),o=s.e,n=s.f
return A.c([new A.lE(new A.b2(r,A.c([new A.N(o,B.i),new A.N(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iai:1}
A.lE.prototype={
ao(a){var s=this,r=a.aj(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bL(o,a.aj(s.e.a).b)
A.b7(o,s.a.ac())
A.c_(o,s.b.b)
A.aA(o,0,r.b)
A.u(o,"uScene",B.v)
A.u(o,"uQuantizationBits",new A.x(B.e,p.as))
A.u(o,"uDitherStrength",new A.x(B.e,p.x))
A.bk(o,s.c)
q.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.eN.prototype={}
A.kG.prototype={
gG(){return"shadow"},
an(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.hB,A.c([new A.N(this.z,B.k)],t.C),!1))},
am(a){var s=this,r="shadowCaster",q=s.a.av(new A.bh(r,s.b,s.c,B.d0,B.d_,B.ji))
return A.c([new A.lH(new A.b2(r,A.c([new A.N(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iai:1}
A.lH.prototype={
ao(a){var s,r,q,p,o=this,n=a.aj("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bL(s,n.b)
A.b7(s,o.a.ac())
A.d1(s,B.aR,1,0,0,0)
return}r=A.yf(l)
o.x.$1(r)
s=m.a
A.bL(s,n.b)
A.b7(s,o.a.ac())
A.d1(s,B.aR,1,0,0,0)
A.c_(s,o.b.b)
A.u(s,"uAlbedo",B.v)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.v)(s),++p)o.iO(m,s[p],l,r)},
fb(a,b){var s,r=this.d.$1(b),q=a.a
A.aA(q,0,t._.a(this.e.$1(r.b)))
A.u(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.ac()
A.b7(q,r.go?s.e3(!1):s)},
iO(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.u(s,"uUseInstances",B.bL)
n.f8(a,b.gD().c,d)
n.fb(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bk(s,q.a)
s=q.b
r=q.c
if(s)a.dD(r,q.d,0)
else a.az(r,0)}else if(b instanceof A.ez){p=b.a
if(!p.gD().r)return
if(n.jL(b,c)===B.m_)return
n.f8(a,p.gD().c,d)
A.vr(a,b,!1)
n.fb(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bk(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dE(r,q.d,o,0)
else a.dC(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).p(0),null))},
jL(a,b){return B.lZ},
f8(a,b,c){var s=a.a
A.u(s,"uModel",new A.x(B.u,new Float32Array(A.a_(b.ab().a))))
A.u(s,"uLightViewProjection",new A.x(B.u,new Float32Array(A.a_(c.a.a))))},
$ia6:1,
gD(){return this.a}}
A.uH.prototype={
$1(a){return this.a.a=a},
$S:59}
A.uI.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:60}
A.kH.prototype={
gG(){return"shadowedWorld"},
an(a,b){var s=this,r=A.c([new A.N(s.db,B.i)],t.C)
if(s.ay)r.push(new A.N(s.dx,B.i))
r.push(new A.N(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.cF,r,!1))},
am(a){var s=this,r="shadowedWorld",q=s.a.av(new A.bh(r,s.b,s.c,B.jI,B.jA,B.ij)),p=A.c([new A.N(s.db,B.i)],t.C)
if(s.ay)p.push(new A.N(s.dx,B.i))
p.push(new A.N(s.dy,B.k))
return A.c([new A.lI(new A.b2(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iai:1}
A.lI.prototype={
ao(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.aj("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bL(b1,a4.b)
A.b7(b1,a2.a.ac())
s=a8.a
A.d1(b1,B.c8,1,s.c,s.b,s.a)
A.c_(b1,a2.b.b)
A.u(b1,"uAlbedo",B.v)
A.u(b1,"uNormalMap",B.ml)
A.u(b1,"uOrmMap",B.mm)
A.u(b1,"uEmissiveMap",B.mn)
A.u(b1,"uLightmap",B.mo)
s=t._
A.aA(b1,1,s.a(a2.y.$0()))
A.u(b1,"uShadowMap",B.ah)
r=a7.d
q=t.n
A.u(b1,"uCameraPosition",new A.x(B.q,new Float32Array(A.a_(A.c([r.a,r.b,r.c],q)))))
A.u(b1,"uShadowMapTexelSize",new A.x(B.ag,new Float32Array(A.a_(A.c([1/a2.ch,1/a2.CW],q)))))
A.aA(b1,2,s.a(a2.at.$0()))
A.u(b1,"uSsao",B.dQ)
A.u(b1,"uVertexSnapGrid",new A.x(B.e,a9.Q))
A.u(b1,"uSceneColorSize",new A.x(B.ag,new Float32Array(A.a_(A.c([a2.ax,a2.ay],q)))))
A.u(b1,"uViewProjection",new A.x(B.u,new Float32Array(A.a_(a7.c.a))))
A.u(b1,"uView",new A.x(B.u,new Float32Array(A.a_(a7.a.a))))
A.u(b1,"uLightViewProjection",new A.x(B.u,new Float32Array(A.a_(b0.a.a))))
s=a8.b
A.u(b1,"uFogColor",new A.x(B.q,new Float32Array(A.a_(A.c([s.a,s.b,s.c],q)))))
A.u(b1,"uFogStart",new A.x(B.e,a8.c))
A.u(b1,"uFogEnd",new A.x(B.e,a8.d))
s=a8.e
A.u(b1,"uFogHeightFalloff",new A.x(B.e,s==null?0:s))
s=a8.f
A.u(b1,"uFogDensity",new A.x(B.e,s==null?0:s))
p=a2.Q.$0()
s=A.c([],t.cv)
r=a2.as.$0()
r=J.M(r==null?B.bd:r)
o=p==null
while(r.m()){n=r.gn()
m=n.a
if(m!==(o?a3:p.a))s.push(n)}l=o?a3:p.b
if(l==null)l=B.aj
k=o?a3:p.c
if(k==null)k=B.bN
A.u(b1,"uLightPosition",new A.x(B.q,new Float32Array(A.a_(A.c([l.a,l.b,l.c],q)))))
A.u(b1,"uLightDirection",new A.x(B.q,new Float32Array(A.a_(A.c([k.a,k.b,k.c],q)))))
j=o?a3:p.d
if(j==null)j=B.T
A.u(b1,"uLightColor",new A.x(B.q,new Float32Array(A.a_(A.c([j.a,j.b,j.c],q)))))
r=o?a3:p.e
A.u(b1,"uLightIntensity",new A.x(B.e,r==null?0:r))
A.u(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
r=i==null
h=r?a3:i.a
if(h==null)h=B.aj
g=r?a3:i.b
if(g==null)g=B.T
A.u(b1,"uDirectionalDirection",new A.x(B.q,new Float32Array(A.a_(A.c([h.a,h.b,h.c],q)))))
A.u(b1,"uDirectionalColor",new A.x(B.q,new Float32Array(A.a_(A.c([g.a,g.b,g.c],q)))))
r=r?a3:i.c
A.u(b1,"uDirectionalIntensity",new A.x(B.e,r==null?0:r))
for(r=a8.y,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.d(r,f)
e=r[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.ai
c=n?a3:e.c
if(c==null)c=B.T
m=""+f
A.u(b1,"uPointPosition"+m,new A.x(B.q,new Float32Array(A.a_(A.c([d.a,d.b,d.c],q)))))
A.u(b1,"uPointColor"+m,new A.x(B.q,new Float32Array(A.a_(A.c([c.a,c.b,c.c],q)))))
b=n?a3:e.d
if(b==null)b=0
A.u(b1,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.u(b1,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.d(s,f)
e=s[f]}else e=a3
r=e==null
d=r?a3:e.b
if(d==null)d=B.ai
a=r?a3:e.c
if(a==null)a=B.bN
c=r?a3:e.d
if(c==null)c=B.T
n=""+f
A.u(b1,"uDirectSpotPosition"+n,new A.x(B.q,new Float32Array(A.a_(A.c([d.a,d.b,d.c],q)))))
A.u(b1,"uDirectSpotDirection"+n,new A.x(B.q,new Float32Array(A.a_(A.c([a.a,a.b,a.c],q)))))
A.u(b1,"uDirectSpotColor"+n,new A.x(B.q,new Float32Array(A.a_(A.c([c.a,c.b,c.c],q)))))
m=r?a3:e.e
if(m==null)m=0
A.u(b1,"uDirectSpotIntensity"+n,new A.x(B.e,m))
m=r?a3:e.f
if(m==null)m=1
A.u(b1,"uDirectSpotRange"+n,new A.x(B.e,m))
m=r?a3:e.r
if(m==null)m=0.3
A.u(b1,"uDirectSpotInnerCos"+n,new A.x(B.e,Math.cos(m)))
m=r?a3:e.w
if(m==null)m=0.5
A.u(b1,"uDirectSpotOuterCos"+n,new A.x(B.e,Math.cos(m)))
r=r?0:1
A.u(b1,"uDirectSpotEnabled"+n,new A.x(B.e,r))}s=o?a3:p.f
A.u(b1,"uLightRange",new A.x(B.e,s==null?1:s))
s=o?a3:p.r
if(s==null)s=0.3
A.u(b1,"uLightInnerCos",new A.x(B.e,Math.cos(s)))
s=o?a3:p.w
if(s==null)s=0.5
A.u(b1,"uLightOuterCos",new A.x(B.e,Math.cos(s)))
a0=a8.r
A.u(b1,"uAmbientColor",new A.x(B.q,new Float32Array(A.a_(A.c([a0.a,a0.b,a0.c],q)))))
A.u(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
A.u(b1,"uRainWetness",new A.x(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.v)(b1),++a1)a2.eL(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.v)(a6),++a1)a2.eL(a5,a6[a1],r)},
eL(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.u(s,"uUseInstances",B.bL)
m.f9(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.fc(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bk(s,o.a)
s=o.b
r=o.c
if(s)a.dD(r,o.d,0)
else a.az(r,0)}else if(b instanceof A.ez){n=b.a
m.f9(a,n.gD().c)
A.vr(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.fc(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bk(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dE(r,o.d,q,0)
else a.dC(r,0,q)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).p(0),null))},
fc(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aA(o,0,p.a(s.e.$1(q.b)))
A.aA(o,3,p.a(s.f.$1(r)))
A.aA(o,4,p.a(s.r.$1(r)))
A.aA(o,5,p.a(s.w.$1(r)))
A.aA(o,6,p.a(s.x.$1(r)))
A.u(o,"uAlphaCutoff",new A.x(B.e,0))
A.u(o,"uOpaqueCoverage",new A.x(B.e,c===B.aU?0:1))
A.u(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.u(o,"uMaterialTint",new A.x(B.q,new Float32Array(A.a_(A.c([q.d,q.e,q.f],p)))))
A.u(o,"uEmissiveStrength",new A.x(B.e,0))
A.u(o,"uUvScaleOffset",new A.x(B.mk,new Float32Array(A.a_(A.c([q.db,q.dx,0,0],p)))))
A.u(o,"uNormalStrength",new A.x(B.e,1))
A.u(o,"uRoughness",new A.x(B.e,q.at))
A.u(o,"uMetallic",new A.x(B.e,0))
A.u(o,"uClearcoatStrength",new A.x(B.e,0))
A.u(o,"uClearcoatRoughness",new A.x(B.e,0.2))
A.u(o,"uOcclusionStrength",new A.x(B.e,1))
A.u(o,"uLightmapIntensity",new A.x(B.e,0))
A.u(o,"uReceivesShadow",new A.x(B.e,1))
A:{p=r
if(B.aU===c){switch(d.a){case 0:p=B.eV
break
case 1:p=B.eU
break}break A}if(B.a9===c||B.eS===c){p=s.a.ac()
break A}}A.b7(o,q.go?p.e3(!1):p)},
f9(a,b){var s=b.ab(),r=a.a
A.u(r,"uModel",new A.x(B.u,new Float32Array(A.a_(s.a))))
A.u(r,"uNormalMatrix",new A.x(B.u,new Float32Array(A.a_(s.dO().a))))},
$ia6:1,
gD(){return this.a}}
A.kK.prototype={
gG(){return"ssaoOcclusion"},
an(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cE,A.c([new A.N(this.w,B.k)],t.C),!1))},
am(a){var s=this,r="ssaoOcclusion",q=s.a.av(new A.bh(r,s.b,s.c,B.x,B.jF,B.ik)),p=A.d2(s.d)
return A.c([new A.lL(new A.b2(r,A.c([new A.N(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iai:1}
A.lL.prototype={
ao(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bL(m,a.aj("ssaoRaw").b)
A.b7(m,p.a.ac())
if(n<=0){A.d1(m,B.R,1,1,1,1)
return}A.d1(m,B.R,1,0,0,0)
s=p.e.$0()
A.c_(m,p.b.b)
A.aA(m,0,t._.a(p.d.$0()))
A.u(m,"uSceneDepth",B.v)
A.u(m,"uNear",new A.x(B.e,s.f))
A.u(m,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.u(m,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.u(m,"uProjScaleY",new A.x(B.e,r[5]))
A.u(m,"uRadius",new A.x(B.e,p.f))
A.u(m,"uStrength",new A.x(B.e,n))
A.bk(m,p.c)
o.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.kJ.prototype={
gG(){return"ssaoBlur"},
an(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cE,A.c([new A.N(this.y,B.i),new A.N(this.z,B.k)],t.C),!1))},
am(a){var s=this,r="ssaoBlur",q=s.a.av(new A.bh(r,s.b,s.c,B.x,B.ju,B.jm)),p=A.d2(s.d)
return A.c([new A.lK(new A.b2(r,A.c([new A.N(s.y,B.i),new A.N(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iai:1}
A.lK.prototype={
ao(a){var s,r,q=this,p=a.b,o=p.a
A.bL(o,a.aj("ssaoBlurred").b)
A.b7(o,q.a.ac())
if(a.c.e.c<=0){A.d1(o,B.R,1,1,1,1)
return}A.d1(o,B.R,1,0,0,0)
s=q.f.$0()
A.c_(o,q.b.b)
r=t._
A.aA(o,0,r.a(q.d.$0()))
A.u(o,"uSsaoRaw",B.v)
A.aA(o,1,r.a(q.e.$0()))
A.u(o,"uSceneDepth",B.ah)
A.u(o,"uTexelSize",new A.x(B.ag,new Float32Array(A.a_(A.c([1/q.r,1/q.w],t.n)))))
A.u(o,"uNear",new A.x(B.e,s.f))
A.u(o,"uFar",new A.x(B.e,s.r))
A.bk(o,q.c)
p.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.kX.prototype={
gG(){return"vhs"},
an(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.L,A.c([new A.N(this.r,B.i),new A.N(s,B.J),new A.N(s,B.k)],t.C),!1))},
am(a){var s=this,r=s.a.av(new A.bh("vhs",s.b,s.c,B.x,B.jx,B.it)),q=A.d2(s.d),p=s.r,o=s.w
return A.c([new A.lT(new A.b2("vhs",A.c([new A.N(p,B.i),new A.N(o,B.J),new A.N(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iai:1}
A.lT.prototype={
ao(a){var s,r=this,q=a.aj(r.f.a),p=a.aj(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.bL(m,p.b)
A.b7(m,r.a.ac())
A.c_(m,r.b.b)
A.aA(m,0,q.b)
A.u(m,"uScene",B.v)
A.aA(m,1,t._.a(r.d.$0()))
A.u(m,"uHistory",B.ah)
A.u(m,"uTime",new A.x(B.e,r.e.$0()))
A.u(m,"uChromaWeight",new A.x(B.e,n.at))
A.u(m,"uTrackingWeight",new A.x(B.e,l))
A.u(m,"uNoiseWeight",new A.x(B.e,n.ay))
A.u(m,"uHeadSwitchWeight",new A.x(B.e,n.ch))
A.u(m,"uDropoutWeight",new A.x(B.e,n.CW))
A.u(m,"uGhostWeight",new A.x(B.e,s))
A.bk(m,r.c)
o.az(3,0)},
$ia6:1,
gD(){return this.a}}
A.i_.prototype={}
A.l7.prototype={
gG(){return"world"},
an(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cF,A.c([new A.N(this.e,B.k)],t.C),!1))},
am(a){var s=this,r=s.a.av(new A.bh("safeWorld",s.b,s.c,B.jK,B.x,B.ii)),q=s.e
return A.c([new A.lW(new A.b2("worldOpaqueTransparent",A.c([new A.N(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iai:1}
A.lW.prototype={
ao(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bL(j,a.aj(n.d).b)
A.b7(j,n.a.ac())
s=k.a
A.d1(j,B.c8,1,s.c,s.b,s.a)
A.c_(j,n.b.b)
A.u(j,"uViewProjection",new A.x(B.u,new Float32Array(A.a_(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.aj
s=t.n
A.u(j,"uLightDir",new A.x(B.q,new Float32Array(A.a_(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.u(j,"uAmbientColor",new A.x(B.q,new Float32Array(A.a_(A.c([p.a,p.b,p.c],s)))))
A.u(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.v)(j),++o)n.fp(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.v)(l),++o)n.fp(m,l[o])},
fp(a,b){var s,r,q,p,o,n=this
if(b instanceof A.ez){s=b.a
n.fq(a,s.gD().c)
A.vr(a,b,!0)
r=n.c.$1(s.gD().a)
A.bk(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dE(p,r.d,o,0)
else a.dC(p,0,o)}else if(t.yz.b(b)){q=a.a
A.u(q,"uUseInstances",B.bL)
n.fq(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bk(q,r.a)
q=r.b
p=r.c
if(q)a.dD(p,r.d,0)
else a.az(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).p(0),null))},
fq(a,b){var s=b.ab(),r=a.a
A.u(r,"uModel",new A.x(B.u,new Float32Array(A.a_(s.a))))
A.u(r,"uNormalMatrix",new A.x(B.u,new Float32Array(A.a_(s.dO().a))))},
$ia6:1,
gD(){return this.a}}
A.mW.prototype={
ck(a){var s,r,q
a.C()
s=A.a3(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.a_
else q=r===0?B.br:B.N
return new A.e0(q,s)},
hm(a){var s,r=this.ck(a).a
A:{if(B.a_===r){s=B.dq
break A}if(B.N===r){s=B.dp
break A}s=B.ac
break A}return s}}
A.jN.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hs.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hv.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.jP.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jM.prototype={}
A.jO.prototype={}
A.ew.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hu.prototype={}
A.ht.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eM.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.i4.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cX.prototype={
v(){return"UniformType."+this.b}}
A.x.prototype={}
A.fg.prototype={
v(){return"ClearMask."+this.b}}
A.jv.prototype={
az(a,b){var s=this.a
if(s.b!==B.h)A.i(A.l(u.k))
s.a.drawArrays(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.by(a,1)},
dC(a,b,c){var s=this.a
if(s.b!==B.h)A.i(A.l(u.k))
s.a.drawArraysInstanced(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.by(a,c)},
dD(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.i(A.l(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.by(a,1)},
dE(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.i(A.l(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aH(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.by(a,c)},
$iBc:1}
A.fs.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fC.prototype={
fX(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.l("resource is not in candidate: "+a))
return s}}
A.o4.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.l("GPU resource adapter is not initialized"))
return s},
cP(a){var s,r,q,p,o,n=this
if(n.e)A.i(A.l("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.l("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.l("GPU resource candidate is already open"))
s=A.hR(a)
p=n.b
r=p.cP(s)
try{q=new A.fC(r,n.dc(s,a),B.aa)
n.d=q
return q}catch(o){p.dY(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.l("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.df(s.b)
r.b.a_()
r.c=null
r.e=!0},
dc(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("k(1)")
j=j.i("F<1>")
s=new A.F(k,i.a(new A.o5()),j)
for(h=s,g=J.M(h.a),h=new A.S(g,h.b,h.$ti.i("S<1>")),f=a.a;h.m();){r=g.gn()
q=A.yx(f,a.eJ(r,a5))
J.hd(a3,q)
J.bp(a2,r,q)}e=A.L(new A.F(k,i.a(new A.o6()),j),j.i("m.E"))
B.a.V(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.v)(k),++d){o=k[d]
n=A.A_(J.AL(o,11))
if(i){h=J.aQ(a2,"sceneColor")
h.toString
J.bp(a2,o,h)}else{h=n
if(typeof h!=="number")return h.n2()
if(h>=2){h=J.aQ(a2,"sceneColor#1")
h.toString
J.bp(a2,o,h)}else{m=A.yx(f,a.eJ(o,a5))
J.hd(a3,m)
J.bp(a2,o,m)}}}a0=A.br(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.E(a0).i("eJ<1>"),a0=new A.eJ(a0,k),a0=new A.aF(a0,a0.gt(0),k.i("aF<a7.E>")),j=a.a,i=t.V,k=k.i("a7.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.w8(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eJ(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hu(s,s,1,B.aX,!0)}if(a==="sceneDepth")return new A.hu(n,m,1,B.aX,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a3(n+1,2):n
p=r?B.d.a3(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hu(q,p,s,o?B.cC:B.hy,o)},
df(a){var s,r,q,p,o,n=A.fw(t.mf.a(a).gaQ(),t._)
for(n=A.fO(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.w8(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ew(a){if(this.d!==a||a.c!==B.aa)throw A.b(A.l("GPU resource candidate is not open"))}}
A.o5.prototype={
$1(a){return!B.b.T(A.q(a),"sceneColor#")},
$S:3}
A.o6.prototype={
$1(a){return B.b.T(A.q(a),"sceneColor#")},
$S:3}
A.fR.prototype={
v(){return"_SlotState."+this.b}}
A.ed.prototype={
sb4(a){this.c=this.$ti.i("1?").a(a)}}
A.cU.prototype={
aE(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ed(B.aK,n.i("ed<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.nk
p.sb4(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
cI(a){return this.aE(a,null)},
a2(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.dT(B.cJ,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dT(B.cK,a))
s=q.b
if(s===B.aL||s===B.aK)throw A.b(A.dT(B.az,a))},
bC(a){var s,r,q=this.$ti
q.c.a(a)
this.a2(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
e1(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a2(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb4(b)},
bq(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.dT(B.cJ,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dT(B.cK,a))
r=q.b
if(r===B.aL||r===B.aK)throw A.b(A.dT(B.hO,a))
q.b=B.aL
q.sb4(null)
B.a.l(p.c,s);++p.e},
bH(){return new A.bM(this.lM(),this.$ti.i("bM<+(1,2)>"))},
lM(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bH(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aL||j===B.aK){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aM(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jg.prototype={
v(){return"BlendEquation."+this.b}}
A.eo.prototype={
v(){return"BlendFactor."+this.b}}
A.jr.prototype={
v(){return"CullFace."+this.b}}
A.jt.prototype={
v(){return"DepthFunc."+this.b}}
A.fo.prototype={
e3(a){var s=this
return A.xy(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b3.prototype={
v(){return"StateField."+this.b}}
A.rD.prototype={
la(a){var s,r=this.a
if(r==null)return A.hG(B.jd,t.qL)
s=A.a3(t.qL)
if(r.a!==a.a)s.l(0,B.bD)
if(r.b!==a.b)s.l(0,B.bE)
if(r.c!==a.c)s.l(0,B.bF)
if(r.d!==a.d)s.l(0,B.bG)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bH)
if(r.r!==a.r)s.l(0,B.bI)
if(r.w!==a.w)s.l(0,B.bJ)
if(r.x!==a.x)s.l(0,B.bK)
return s}}
A.dC.prototype={$idk:1}
A.iN.prototype={}
A.iM.prototype={}
A.lV.prototype={}
A.l5.prototype={
i9(a){var s=this,r=A.a(s.a.canvas)
s.c=A.U(new A.rB(s))
s.d=A.U(new A.rC(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
h5(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bU(A.e(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bU(A.e(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bU(A.e(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bU(A.e(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bU(A.e(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.f_(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.h6(e.getParameter(A.e(k.WebGL2RenderingContext.RENDERER)))
m=A.h6(e.getParameter(A.e(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.pS("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bU(a){var s=A.h6(this.a.getParameter(a))
return typeof s=="number"?B.c.ad(s):0},
f_(a){var s=A.h6(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBB:1}
A.rB.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.S},
$S:1}
A.rC.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.tt.prototype={
kd(){var s,r=this
if(r.b!==B.h)A.i(A.l(u.k))
s=r.w?A.D(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dC(new A.lV(s))},
fj(a){var s=a.a
if(!(s instanceof A.lV))throw A.b(A.ag(a,"query","is not a GPU timer query"))
return s}}
A.lU.prototype={}
A.jw.prototype={
B(){var s=this
return A.H(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jd.prototype={
glP(){var s=this.CW
return new A.am(s,A.o(s).i("am<2>")).be(0,0,new A.mE(),t.i)},
hW(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.p()
s=j.a
A.D(i.connect(A.a(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.D(r[k].connect(i))
r=j.z
r===$&&A.p()
A.a(r.gain).value=1
q=j.Q
q===$&&A.p()
A.a(q.gain).value=0.35
A.D(o.connect(r))
A.D(n.connect(r))
A.D(p.connect(r))
p=j.as
p===$&&A.p()
A.D(r.connect(p))
A.D(p.connect(q))
A.D(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.aV()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aV()
j.k3=p
A.D(q.connect(p))
A.D(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.D(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aV()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aV()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aV()
j.p1=r
A.D(p.connect(q))
A.D(i.connect(A.a(s.destination)))
j.es()},
es(){var s,r=this,q=r.k4
q===$&&A.p()
q.disconnect()
s=r.p1
s===$&&A.p()
s.disconnect()
if(r.p2){A.D(q.connect(s,0))
A.D(q.connect(s,1))
q=r.ok
q===$&&A.p()
A.D(s.connect(q,0,0))
A.D(s.connect(q,0,1))}else{s=r.ok
s===$&&A.p()
A.D(q.connect(s,0,0))
A.D(q.connect(s,1,1))}},
cg(){var s=this.a
if(A.q(s.state)==="suspended")A.a(s.resume())},
fe(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.jD.h(0,a)
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
iY(){var s,r,q,p,o,n,m,l=this.a,k=A.af(l.sampleRate),j=B.c.aH(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aG()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cO(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aG()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.D(r.connect(q))
A.D(q.connect(p.fe(a)))
r.onended=A.U(new A.mG(r,q))
r.start()},
h2(a){return this.cO(a,1)},
h3(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.aG()*0.12)
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
l=j.eD(j.b.h1(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fS(r,q,n,o,p,e,B.c.F(m,0,1)))
r.onended=A.U(new A.mF(j,o))
A.D(r.connect(q))
A.D(q.connect(n))
A.D(n.connect(o))
A.D(o.connect(p))
A.D(p.connect(j.fe(a)))
r.start()},
mh(a,b,c,d){return this.h3(a,b,c,1,d,null,null,null)},
eD(a){var s,r,q,p,o,n,m,l
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
q=2e4}return new A.ay(r,q,p)},
ek(a){var s,r,q,p,o=this
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
A.D(q.connect(p))
r=o.e
r===$&&A.p()
A.D(p.connect(r))
q.onended=A.U(new A.mH(o,q,p))
q.start()
o.cy=q},
cZ(a){if(this.p2===a)return
this.p2=a
this.es()},
hw(a){var s,r,q=this
q.cZ(a.b===B.bW)
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
bh(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.F(c==null?q.fr:c,0,1)
q.fx=B.c.F(f==null?q.fx:f,0,1)
q.fy=B.c.F(b==null?q.fy:b,0,1)
q.go=B.c.F(a==null?q.go:a,0,1)
q.id=B.c.F(d==null?q.id:d,0,1)
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
ed(a){var s=null
return this.bh(s,s,s,s,a,s)},
ht(a){var s=null
return this.bh(s,s,a,s,s,s)},
hv(a){var s=null
return this.bh(s,s,s,s,s,a)},
hs(a){var s=null
return this.bh(s,a,s,s,s,s)},
hr(a){var s=null
return this.bh(a,s,s,s,s,s)},
hu(a){var s=null
return this.bh(s,s,s,a,s,s)},
hq(a){if(this.ay===a)return
this.ay=a
this.bW()},
bW(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.e0(p,g)
m=n==null?i.eD(h.h1(p,g)):new A.ay(n.c,n.d,n.e)
l=A.af(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.af(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.af(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.F(m.c,0,1)}}}
A.mE.prototype={
$2(a,b){return Math.max(A.bm(a),t.jS.a(b).r)},
$S:62}
A.mD.prototype={
$1(a){return this.hf(t.q.a(a))},
hf(a){var s=0,r=A.c5(t.d),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.c7(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.aN(A.d7(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.aN(A.d7(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.aN(A.d7(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.as(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.A(l))
s=5
break
case 2:s=1
break
case 5:return A.c3(null,r)
case 1:return A.c2(p.at(-1),r)}})
return A.c4($async$$1,r)},
$S:63}
A.mG.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.mF.prototype={
$1(a){var s=this.a.CW.aa(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.mH.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.fS.prototype={}
A.je.prototype={
v(){return"AudioCategory."+this.b}}
A.mx.prototype={
hX(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.hd)
if(!B.a.a8(A.c([d.a,d.b,d.c],t.n),new A.my()))throw A.b(B.fu)},
gG(){return this.a}}
A.my.prototype={
$1(a){return isFinite(A.bm(a))},
$S:5}
A.mi.prototype={
hV(a,b){if(this.a.length===0)throw A.b(B.fj)
if(!B.a.a8(A.c([a.a,a.b,a.c],t.n),new A.mj()))throw A.b(B.fz)}}
A.mj.prototype={
$1(a){return isFinite(A.bm(a))},
$S:5}
A.mk.prototype={
C(){var s=t.n
if(B.a.W(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.ml()))throw A.b(B.fP)
s=B.a.W(A.c([0,0.55,1],s),new A.mm())
if(s)throw A.b(B.h4)},
e0(a,b){var s
this.C()
if(a.ax)s=!a.ay
else s=!1
if(s)return new A.ay(-1.5,2e4,0)
if(a.ay)return new A.ay(-28,320,1)
return new A.ay(-12,1100,0.55)},
n7(a){return this.e0(a,null)}}
A.ml.prototype={
$1(a){return!isFinite(A.bm(a))},
$S:5}
A.mm.prototype={
$1(a){A.bm(a)
return a<0||a>1},
$S:5}
A.vE.prototype={}
A.vH.prototype={}
A.vF.prototype={
$2(a,b){var s,r,q
A.q(a)
A.q(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.H(r,s)
return q===0?B.b.H(a,b):q},
$S:64}
A.vG.prototype={
$2(a,b){var s=t.R
return B.b.H(s.a(a).a,s.a(b).a)},
$S:65}
A.l9.prototype={}
A.fd.prototype={}
A.mT.prototype={
fV(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.j(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AE().bB(q).gaB()
p.d=q
p.c=p.b.bB(q).gaB()
p.a=a}}
A.nx.prototype={}
A.ny.prototype={
l9(){return A.H(["attached",!1,"disposed",!1,"assetId",null,"activeLod",null,"itemCount",0,"meshCount",0,"cacheReferenceCount",0,"materialSlotCount",0],t.N,t.X)}}
A.nE.prototype={}
A.jV.prototype={
cT(a){if(this.at)return
A.oH(a,"requestPointerLock",t.X)},
eb(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cf(r,r.r,r.e,A.o(r).i("cf<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a3(q)
for(m=J.M(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.ms(p,n)}this.b8()},
d2(a){var s,r,q,p,o,n,m=this
if(m.ch.d2(a))for(s=m.CW.aD("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
mi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.M(t.ik.b(c)?c:new A.aS(c,A.E(c).i("aS<1,ab?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.O(r.connected)||A.q(r.mapping)!=="standard")break A
c=A.q(r.id)
q=A.q(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.M(t.dd.b(n)?n:new A.aS(n,A.E(n).i("aS<1,t>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.M(t.nx.b(d)?d:new A.aS(d,A.E(d).i("aS<1,ab>")))
while(d.m()){r=d.gn()
p.push(A.O(r.pressed)?1:A.af(r.value))}s=new A.kL(!0,c,q,o,p)
break}}d=s==null
m=A.CY(d?B.m5:s)
l=m.d
c=f.CW
r=t.P
q=r.a(f.e)
k=B.a.W(c.aD(e),q.gar(q))
q=f.r
q.iU(A.o(q).i("k(1)").a(new A.oC(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.m:g,h)){if(i.dM())n.l(0,h)}else n.l(0,h)}}f.e=A.hG(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.W(c.aD(e),l.gar(l))){d=r.a(f.c)
d=!B.a.W(c.aD(e),d.gar(d))}}if(d)i.dN()},
j8(a){var s=this
A.a(a)
if(A.O(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.q(a.code)))if(B.a.q(s.CW.aD("interact"),A.q(a.code))){if(s.ch.dM())s.d.l(0,A.q(a.code))}else s.d.l(0,A.q(a.code))},
ja(a){var s,r,q="interact"
A.a(a)
s=this.c
s.aa(0,A.q(a.code))
r=this.CW
if(B.a.q(r.aD(q),A.q(a.code))){t.P.a(s)
s=!B.a.W(r.aD(q),s.gar(s))}else s=!1
if(s)this.ch.dN()},
je(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.e(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aD("interact"),s)){if(r.ch.dM())r.d.l(0,s)}else r.d.l(0,s)},
ji(a){var s,r="interact",q="Mouse"+A.e(A.a(a).button),p=this.c
p.aa(0,q)
s=this.CW
if(B.a.q(s.aD(r),q)){t.P.a(p)
p=!B.a.W(s.aD(r),p.gar(p))}else p=!1
if(p)this.ch.dN()},
jk(a){var s
A.a(a)
if(!this.ay)return
s=A.af(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jg(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.eY(a,"movementX")
s.as=s.as+s.eY(a,"movementY")},
jc(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
eY(a,b){var s=A.z5(a[b])
if(s==null)s=null
return s==null?0:s},
cu(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fw(n.c,t.N)
for(r=n.e,r=A.fO(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.P.a(s)
return B.a.W(n.CW.aD(a),s.gar(s))},
b8(){var s=this
s.c.M(0)
s.d.M(0)
s.f.M(0)
s.r.J(0,s.e)
s.as=s.Q=0
s.ch.dV()}}
A.oC.prototype={
$1(a){return!this.a.q(0,A.q(a))},
$S:3}
A.oB.prototype={
aD(a){var s=this.a.h(0,a)
return s==null?B.m:s},
ms(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.P(a))return
r=t.N
q=A.a3(r)
for(p=A.fO(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ah(q,r))},
bb(a,b){var s,r,q
t.P.a(b)
for(s=this.aD(a),r=s.length,q=0;q<r;++q)if(b.aa(0,s[q]))return!0
return!1}}
A.oF.prototype={
dM(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dN(){this.c=this.b=!1
this.d=0},
d2(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.F(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dV(){this.c=this.b=!1
this.d=0}}
A.aR.prototype={
gG(){return this.a}}
A.oZ.prototype={}
A.oW.prototype={
mm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a3(h)
r=A.L(b,t.p)
B.a.J(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.v)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.w("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.n(h,t.N)
i.eP(n,i.d,a,b,i.a,j,m)
i.eP(l,i.e,a,c,i.b,j,k)
return new A.oZ(n,l,j)},
eP(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.E(d)
s=k.i("P<1,+effectiveScore,light,score(t,aR,t)>")
r=A.L(new A.P(d,k.i("+effectiveScore,light,score(t,aR,t)(1)").a(new A.oX(this,c,b)),s),s.i("a7.E"))
B.a.O(r,new A.oY())
q=A.a3(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.M(0)
b.J(0,q)}}
A.oX.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.aq(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iA(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:67}
A.oY.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:68}
A.nh.prototype={
du(a,b){var s,r,q,p,o,n,m,l=this
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
A.p4.prototype={
hL(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.du(b,c)},
jZ(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.j(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.j(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.du.prototype={
cR(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.y.d_(s,0,m,l)
n.a=s}r=b.aq(0,a).bB(d.aq(0,a)).gaB()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.i7(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.i7(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.i7(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.i7(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.i7(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.i7(n.a,l,d,r,q,p,o,0,1,0,k,0)},
bp(a,b,c,d,e){return this.cR(a,b,c,d,e,1,1)}}
A.j.prototype={
ak(a,b){return new A.j(this.a+b.a,this.b+b.b,this.c+b.c)},
aq(a,b){return new A.j(this.a-b.a,this.b-b.b,this.c-b.c)},
al(a,b){return new A.j(this.a*b,this.b*b,this.c*b)},
c3(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bB(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.j(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gaB(){var s=this,r=s.gt(0)
return r<1e-9?new A.j(0,0,0):new A.j(s.a/r,s.b/r,s.c/r)}}
A.kL.prototype={
gG(){return this.b}}
A.l8.prototype={}
A.mM.prototype={
mY(a){var s,r,q,p,o,n=B.j.a7(a.B(),null)
this.a.fG(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.an(s.getItem("quarantine.save.active"))
q=A.an(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mn(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.an(s.getItem("quarantine.save.active"))
q=A.an(s.getItem("quarantine.save.previous"))
p=this.eI(r,a)
if(p!=null)return new A.eK(p,null)
o=this.eI(q,a)
if(o!=null)return new A.eK(o,"recovered previous save")
if(r==null)return B.lv
return B.lu}catch(n){return B.lt}},
eI(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fG(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.as(q) instanceof A.B)return null
else throw q}}}
A.jy.prototype={
i_(a,b,c,d,e){if(this.a.length===0)throw A.b(B.h1)
if(this.b<0)throw A.b(B.fv)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ah(q,t.i)
s=t.z
return A.br(A.H(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cb.prototype={
v(){return"EndingKind."+this.b}}
A.nr.prototype={
gag(){return this.a}}
A.fp.prototype={
B(){var s=t.N
return A.H(["kind",this.a.b],s,s)}}
A.nu.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:69}
A.bl.prototype={}
A.kl.prototype={
B(){var s,r=this,q=t.N,p=A.n(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.H(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lH(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.aq(0,new A.j(0,1.3499999999999999,0))
return!new A.jk(s,s.ak(0,new A.j(0,1.2000000000000002,0))).cK(a,r)}}
A.pL.prototype={
B(){return A.m1(this.a)}}
A.fH.prototype={
B(){return A.H(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.q8.prototype={
fG(a){var s,r,q,p,o,n,m,l=B.j.aW(a,null),k=t.f
if(!k.b(l))throw A.b(B.hc)
s=t.N
r=t.z
q=A.aJ(l,s,r)
p=q.h(0,"version")
if(A.aU(p))o=p!==1&&p!==2
else o=!0
if(o)A.i(A.a1("unsupported save version "+A.A(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.i(B.fE)
k=A.aJ(n,s,r)
return A.yc(A.aJ(m,s,r),k,2)}}
A.eK.prototype={}
A.ev.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jK.prototype={
gag(){return this.c},
gaN(){return this.d}}
A.nT.prototype={
gag(){return this.a},
gaN(){return this.b}}
A.nS.prototype={
ga9(){var s=this.d
return new A.nT(s.a,s.b)},
gh4(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.H(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.H(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.H(["entryCount",m.e.b.a],k,t.S)
p=A.xI(m.c).B()
o=m.r
n=o.c
return new A.pL(A.m1(A.H(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.H(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
k6(a,b){if(!B.a.W(a.f,new A.nU(b)))return!1
this.z.k0(a,b)
return!0},
k5(a){var s,r,q,p,o,n="event."+a.a,m=this.z
if(m.lB(n))return!1
m=m.b
m.k(0,n,"true")
for(s=a.x,r=s.length,q=0;q<r;++q){p=s[q]
o=B.b.bn(p,"=")
if(o<=0||o===p.length-1)continue
m.k(0,B.b.I(p,0,o),B.b.aS(p,o+1))}return!0},
lx(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("am<2>")
q=A.L(new A.am(s,r),r.i("m.E"))
B.a.O(q,new A.nV())
if(q.length===0)return null
s=A.E(q)
r=s.i("F<1>")
p=A.L(new A.F(q,s.i("k(1)").a(new A.nW()),r),r.i("m.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dN(a),r=t.sU,s=new A.aF(s,s.gt(0),r.i("aF<V.E>")),r=r.i("V.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cL(a,l.a,s.length-1,B.a.gY(s).p(0))
j.k(0,a,k)
return k},
jY(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.ag(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cA(B.hm)}if(n<a)this.cA(B.hn)},
hO(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d1(a)&&s.hN(b)},
mo(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dT){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hK(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.B9(j,A.ah(i.d,h).length)
if(a===B.dG)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.E(r)
A.B8(j,new A.F(r,q.i("k(1)").a(new A.nX(k)),q.i("F<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.ip,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aH(j.a/1*3)
B.a.l(r.r,new A.fJ(q.a,a,b))
m=r.a
A.Bk(m,q.a,n,k.b,A.ah(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.hy(B.iX)
s.r.ku(o,c)
l=B.c.aH(j.b/1*6)
if(l>0)r.d1(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.am(i,A.o(i).i("am<2>")).W(0,new A.nY())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cA(B.hp)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cA(B.ho)},
cA(a){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.jK(s.a,s.b))
B.a.l(r.x,A.Ba(A.E4(a),r.b,r.y-1))}}
A.nU.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:14}
A.nV.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:11}
A.nW.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:23}
A.nX.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.qW().hH(this.a.c,a.a)},
$S:73}
A.nY.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.jk.prototype={
mI(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.E(s)
q=new A.F(s,r.i("k(1)").a(new A.mX(e)),r.i("F<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cw(b,p.f)&&a==="hall"))o=n.cw(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.la(p,B.c.F(d,0,1))},
lQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eX(g,c,d)
s=h.iQ(a,b,c,d)
if(s!=null){h.d=s
return h.eX(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.kn(Math.sqrt(r*r+q*q)/0.08))
o=d.al(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jK(a,n,m,o)
l=l||j.b
m=j.a
i=h.mk(a,n)
n=i==null?n:i}h.ba(m)
return new A.k8(m,n)},
iQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d.a,g=d.c
for(s=a.d,r=b==="landing",q=b==="hall",p=Math.sqrt(h*h+g*g)<0.001,o=0;!1;++o){n=s[o]
m=n.r
l=n.f
k=h*(m.a-l.a)+g*(m.c-l.c)
j=!1
if(q)if(this.cw(c,l)){l=k>0||p
j=l}i=!1
if(r)if(this.cw(c,m)){m=k<0||p
i=m}if(j||i)return new A.la(n,j?0:1)}return null},
eX(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.aq(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.F(a.b+o/p,0,1)
n=A.yp(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.ba(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.k8(n,k)},
cw(a,b){var s=a.aq(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cE(c,!1)
s=h.cD(a,b,c,new A.j(g,0,0))
r=s.a
q=d.c
p=h.cD(a,b,r,new A.j(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cE(p.a,!1)
n=c.ak(0,new A.j(0,0.35,0))
h.ba(n)
if(!h.cK(a,b)){m=h.cD(a,b,n,new A.j(g,0,0))
l=h.cD(a,b,m.a,new A.j(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.j(g,r-j,q)
h.ba(i)
if(h.cK(a,b))break}h.ba(k)
return new A.cE(k,!1)}}if(o)return new A.cE(r,!0)
if(!p.b)return new A.cE(p.a,!0)
h.ba(c)
return new A.cE(c,!0)},
cD(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cE(c,!1)
s=c.ak(0,d)
this.ba(s)
if(this.cK(a,b)){this.ba(c)
return new A.cE(c,!0)}return new A.cE(s,!1)},
ba(a){var s=a.aq(0,new A.j(0,1.3499999999999999,0))
this.a=s
this.b=s.ak(0,new A.j(0,1.2000000000000002,0))},
cK(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.jH(a,m,s)},
mk(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aA(k)
for(r=k.a,q=a.aP(r),p=J.M(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.cM(r)
m=!1
if(n!=null)if(l.h(0,n)!=null){if(o.ax)m=!o.ay
else m=!1
o=m&&this.fo(k,o,s)&&this.iJ(k,o,s)}else o=m
else o=m
if(o)return n}return null},
jH(a,b,c){var s,r,q,p
for(s=a.aP(b.a),r=J.M(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax)p=!q.ay
else p=!1
if(p&&this.fo(b,q,c))return!0}return!1},
fo(a,b,c){var s,r,q,p=a.a,o=b.aF(p),n=b.ai(p)
p=o===B.o||o===B.n
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
iJ(a,b,c){var s,r=this
switch(b.aF(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
skb(a){this.a=t.a7.a(a)}}
A.mX.prototype={
$1(a){t.w8.a(a)
return!1},
$S:74}
A.k8.prototype={}
A.cE.prototype={}
A.la.prototype={}
A.hx.prototype={
gag(){return this.a}}
A.om.prototype={
ku(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.M,r)
s=B.M[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hI(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.c}return r},
hJ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.d}return r},
B(){return A.H(["landedCount",this.b],t.N,t.z)}}
A.Y.prototype={}
A.jC.prototype={
glK(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a8(A.c([r,q,p,o,n,m],t.n),new A.nw())&&o>=r&&n>=q&&m>=p}}
A.nw.prototype={
$1(a){return isFinite(A.bm(a))},
$S:5}
A.jS.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glK())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.v)(l),++r){p=l[r]
if(B.a.W(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oo()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.oo.prototype={
$1(a){return!isFinite(A.bm(a))},
$S:5}
A.on.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bx(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bx(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bx(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bx(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bx(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bx(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.Y(a,b,c,m,n,o,0,0,p),r=new A.Y(g,h,i,m,n,o,1,1,p)
this.af(s,new A.Y(d,e,f,m,n,o,1,0,p),r)
this.af(s,r,new A.Y(j,k,l,m,n,o,0,1,p))},
af(a,b,c){var s=this,r=s.b
B.a.l(r,s.dk(a))
B.a.l(r,s.dk(b))
B.a.l(r,s.dk(c))},
dk(a){var s,r,q=B.a.Z(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
kg(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.l("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.jS(A.ah(g,t.hl),new Uint16Array(A.a_(this.b)),new A.jC(s,r,q,p,o,n))
h.C()
return h}}
A.jD.prototype={}
A.vw.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ad.q(0,s))A.i(A.l("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:75}
A.uC.prototype={
$2(a,b){var s=t.Ez
return B.b.H(s.a(a).a,s.a(b).a)},
$S:76}
A.d3.prototype={
mX(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.it(A.Ga(new A.jS(i,new Uint16Array(A.a_(s)),A.DN(i))),l.a,l.b,l.c,A.c([],k))}}
A.it.prototype={}
A.es.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jE.prototype={
ko(a){var s
switch(a.a){case 0:s=A.aT(["front","street","opposite-house"],t.N)
break
case 1:s=A.aT(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aT(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aT(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aT(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kp(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ch
break A}if("kitchen"===a||"cellar"===a){s=B.f0
break A}if("bathroom"===a){s=B.f1
break A}if("spare-room"===a){s=B.f2
break A}s=B.ch
break A}return this.ko(s)},
fJ(a,b,c,d){d.i("m<0>").a(b)
t.P.a(c)
return new A.bM(this.lt(d.i("f(0)").a(a),b,c,d),d.i("bM<0>"))},
lt(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fJ(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a8(0,B.ad.gar(B.ad)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cf(l,l.r,l.e,r.$ti.i("cf<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ad.q(0,j))throw A.b(A.l("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.e9.prototype={
fC(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uj.prototype={
$1(a){var s=this
return t.xT.a(a).fC(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:28}
A.ui.prototype={
$1(a){return t.xT.a(a).fC(0,(this.a+this.b)*0.5,this.c)},
$S:28}
A.de.prototype={
v(){return"FocusKind."+this.b}}
A.dQ.prototype={
gG(){return this.b}}
A.q5.prototype={}
A.tv.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:78}
A.uA.prototype={
$1(a){return B.d.F(B.c.aH(a*this.a),0,255)},
$S:79}
A.e8.prototype={}
A.ok.prototype={
ip(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=t.s,r=t.yH,q=t.E,p=this.b,o=0;o<8;++o){n=B.il[o].a
m=n[1]
l=n[3]
k=n[4]
if(m==="hall"||m==="landing")j=A.c([],q)
else{j=m==="bathroom"
i=j?B.A:B.o
j=A.c([new A.dA(m+"-north-aperture",i,1.7,1,1.4,1.5,j,!0)],q)}i=A.c([],s)
h=n[1]
B.a.l(p,new A.cB(m,B.f3,new A.j(4.8,3.2,5),new A.j(l,0,k),j,i,A.c([new A.fx("showcase-"+h+"-light",h+" test light",new A.j(2.4,2.2,0.35),!1,!1,null)],r),B.iY,n[2],n[0],"ceiling-plaster",B.iZ))}},
io(){var s,r,q,p,o,n=null,m="hall",l="outside",k="kit-internal-four-panel-door",j="kitchen",i="landing",h="bathroom"
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
o=B.jC.h(0,p.a)
if(o==null)o=B.m
B.a.J(p.f,o)}B.a.J(this.c,A.c([A.cT(m,l,"kit-front-door-recessed",!0,B.o,B.n,2.6,!1,"front-door",!1,1.9,0,!0,!1,!1,1),A.cT(m,"living-room",k,!1,B.C,B.A,2.6,!1,"hall-living",!1,2,2,!0,!1,!1,1.2),A.cT(m,j,k,!1,B.A,B.C,2.6,!1,"hall-kitchen",!1,2,2,!0,!1,!1,1.2),A.cT(j,"cellar","kit-cellar-door-grille",!1,B.A,B.C,2.6,!1,"kitchen-living",!1,2,2,!0,!1,!1,1.2),A.cT(m,i,n,!1,B.n,B.o,2.6,!1,"hall-landing",!1,2,2,!0,!1,!1,1.2),A.cT(i,"bedroom",k,!1,B.C,B.A,2.6,!1,"landing-bedroom",!1,2,2,!0,!1,!1,1.2),A.cT(i,h,k,!1,B.A,B.C,2.6,!1,"landing-bathroom",!1,2,2,!0,!1,!1,1.2),A.cT(j,h,k,!1,B.n,B.o,2.6,!1,"kitchen-bathroom",!1,2,2,!0,!1,!1,1.2),A.cT("cellar",l,n,!0,B.n,B.o,2.6,!1,"cellar-service",!1,2,0,!0,!1,!1,1),A.cT("bedroom",l,n,!0,B.n,B.o,2.6,!1,"bedroom-service",!1,2,0,!0,!1,!1,1),A.cT("spare-room",l,n,!0,B.n,B.o,2.6,!1,"spare-service",!1,2,0,!0,!1,!1,1)],t.J))},
ih(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.ou(1.5),a4=this.b,a5=A.aD(a4,!0,t.W)
B.a.M(a4)
s=A.c([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.v)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.c([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.v)(i),++g){f=i[g]
j.push(new A.dA(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.c([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.v)(h),++g){d=h[g]
i.push(new A.fx(d.a,d.b,a3.$1(d.c),d.d,!1,d.f))}h=A.c([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.v)(e),++g){b=e[g]
h.push(new A.hT(b.a,b.b,a3.$1(b.c)))}s.push(new A.cB(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.aD(a4,!0,t.R)
B.a.M(a4)
s=A.c([],t.J)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bv(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,!1,a0.Q,!1,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;!1;++a1){if(!(a1<0))return A.d(a4,a1)
a2=a4[a1]
B.a.k(a4,a1,new A.e3(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
ii(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.ov(),a7=this.b,a8=A.aD(a7,!0,t.W)
B.a.M(a7)
s=A.c([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.v)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.c([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.v)(h),++f){e=h[f]
i.push(new A.dA(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.c([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.v)(g),++f){c=g[f]
h.push(new A.fx(c.a,c.b,a6.$1(c.c),c.d,!1,c.f))}g=A.c([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.v)(d),++f){a=d[f]
g.push(new A.hT(a.a,a.b,a6.$1(a.c)))}d=A.c([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.v)(b),++f){a1=b[f]
d.push(new A.jz(a1.a,a1.b.al(0,1.5)))}s.push(new A.cB(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.J(a7,s)
a7=this.c
a2=A.aD(a7,!0,t.R)
B.a.M(a7)
s=A.c([],t.J)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bv(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,!1,a3.Q,!1,a3.at,a3.ax,a3.ay))}B.a.J(a7,s)
for(a7=this.d,s=t.n,a4=0;!1;++a4){if(!(a4<0))return A.d(a7,a4)
a5=a7[a4]
r=A.c([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.v)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.e3(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
iX(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
n=o.a
if(q.P(n))throw A.b(A.l("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){m=s[p]
n=m.a
if(q.P(n))throw A.b(A.l("duplicate portal "+n))
q.k(0,n,m)}},
jR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.b(A.l("3D room overlap: "+n.a+" and "+m.a))}},
jP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.n(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.v)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fn(o,i,h,g,f,e)
a5.eq(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.v)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.l(l+" references invalid portal "+d))
i=c.aF(l)
h=c.ai(l)
g=c.w
f=c.x
a5.fn(o,i,h,g,0,f)
a5.eq(a6,l,c.aF(l),c.ai(l),c.ai(l)+g,0,f)}}for(s=new A.I(a6,a6.$ti.i("I<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c8(a)
r.O(a,new A.ow())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.b(A.l("overlapping apertures on "+b.a))}}},
fn(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.o||b===B.n
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
eq(a,b,c,d,e,f,g){J.hd(t.aD.a(a).cf(b+":"+c.b,new A.ot()),new A.iB([d,e,f,g]))},
aA(a){var s=a.c,r=this.r,q=a.a
return new A.j(s.a+r.hI(q),s.b+r.hJ(q),s.c)},
aP(a){var s=this.c,r=A.E(s)
return new A.F(s,r.i("k(1)").a(new A.ox(a)),r.i("F<1>"))},
mj(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.ag(a,"roomId","not a portal endpoint"))
r=this.aA(o)
q=b.ai(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aF(a).a){case 0:s=new A.j(s.a+q,p,s.c)
break
case 2:s=new A.j(s.a+q,p,s.c+r.c)
break
case 1:s=new A.j(s.a+r.a,p,s.c+q)
break
case 3:s=new A.j(s.a,p,s.c+q)
break
default:s=null}return s},
ghb(){return B.a.be(this.b,0,new A.oy(),t.S)},
h1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.ab
s=A.c([new A.aM(a,B.ab)],t.nR)
r=A.aT([a],t.N)
for(q=this.e,p=t.R;s.length!==0;){o=B.a.mr(s,0)
n=o.a
m=o.b
for(l=this.aP(n),k=J.M(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.cM(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.L(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.L(m,p)
h.push(j)
B.a.l(s,new A.aM(i,h))}}}return B.ab}}
A.ou.prototype={
$1(a){var s=this.a
return new A.j(a.a*s,a.b,a.c*s)},
$S:27}
A.ov.prototype={
$1(a){return a.al(0,1.5)},
$S:27}
A.ow.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.H(a.a[0],b.a[0])},
$S:81}
A.ot.prototype={
$0(){return A.c([],t.wx)},
$S:82}
A.ox.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.b===s||a.c===s},
$S:83}
A.oy.prototype={
$2(a,b){return A.e(a)+t.W.a(b).e.length},
$S:84}
A.nv.prototype={}
A.qW.prototype={
hH(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a8(s,new A.qX())}else s=!1
return s}}
A.qX.prototype={
$1(a){return t.fW.a(a).w},
$S:45}
A.vM.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:86}
A.vK.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:87}
A.vL.prototype={
$0(){return A.i(A.l("inventory asset missing: "+this.a))},
$S:6}
A.oG.prototype={
B(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.o(o).i("ae<1>")
n=A.L(new A.ae(o,n),n.i("m.E"))
B.a.V(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.v)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dX(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.ff)
s=t.X
r=A.aJ(a,s,s)
s=this.a
s.M(0)
for(q=new A.I(r,A.o(r).i("I<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aU(o)||o<0)throw A.b(B.fx)
s.k(0,n,o)}}}
A.dn.prototype={}
A.op.prototype={
mV(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.P.a(a5)
s=A.c([],t.ea)
for(r=A.fO(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.v)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aA(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.j(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.j(a*a3,a0*a3,a1*a3)}else a4=new A.j(0,-1,0)
B.a.l(s,new A.dn(new A.j(d,c,e),a4,16760952,3.8,2.1*this.jA(k)))}}B.a.O(s,new A.oq(a6))
return A.kN(s,0,A.f6(4,"count",t.S),t.A_).bM(0)},
jA(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.oq.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.H(a.a.aq(0,s).gt(0),b.a.aq(0,s).gt(0))},
$S:89}
A.jH.prototype={
v(){return"Floor."+this.b}}
A.dP.prototype={
v(){return"Facing."+this.b}}
A.dA.prototype={
shG(a){this.w=A.O(a)},
gG(){return this.a}}
A.bv.prototype={
cM(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aF(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.ag(a,"roomId","not an endpoint of "+s.a))},
ai(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.ag(a,"roomId","not an endpoint of "+s.a))},
gG(){return this.a}}
A.fx.prototype={
gG(){return this.a}}
A.hT.prototype={
gG(){return this.a}}
A.jz.prototype={}
A.e3.prototype={
gG(){return this.a}}
A.cB.prototype={
gG(){return this.a}}
A.vN.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:90}
A.vO.prototype={
$0(){return A.i(A.l("sound emitter missing: "+this.a))},
$S:6}
A.ol.prototype={
bY(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ag(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.j4}q=A.c([],t.Fm)
p=B.c.aY(r)+1
o=B.c.aY(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.ey("tick",m))
if(B.d.S(m,3)===0){B.a.l(q,new A.ey("cuckoo",m))
B.a.l(q,new A.ey("bell",m))}if(B.d.S(m,6)===0)B.a.l(q,new A.ey("chime",m))}l.b=b
return q}}
A.ey.prototype={
gaN(){return this.b}}
A.or.prototype={
bY(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ag(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.j3}q=A.c([],t.op)
for(p=B.c.aY(r)+1;p<=B.c.aY(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.hR)
if(B.d.S(o,3)===1)B.a.l(q,B.hT)
if(B.d.S(o,8)===5)B.a.l(q,B.hW)
if(B.d.S(o,5)===0)B.a.l(q,B.hS)
if(B.d.S(o,7)===3)B.a.l(q,B.hX)
if(n===1)B.a.l(q,B.hU)
if(B.d.S(o,6)===4)B.a.l(q,B.hV)}m.b=b
return q}}
A.cQ.prototype={}
A.os.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.H(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.H(["lit",o.a,"examined",o.b],m,r))}return A.H(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
k7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a3(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)d.l(0,s[q].a)
r=A.a3(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.v)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l)r.l(0,n[l].a)
e=A.a3(e)
for(q=0;q<p.length;p.length===n||(0,A.v)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wO(new A.ae(o,A.o(o).i("ae<1>")),d)){d=f.b
if(A.wO(new A.ae(d,A.o(d).i("ae<1>")),r)){d=f.c
e=!A.wO(new A.ae(d,A.o(d).i("ae<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fQ)
e=f.d
if(e<0||e>2)A.i(B.fm)
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
A.hU.prototype={
B(){return A.H(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hH.prototype={
B(){return A.H(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bf.prototype={
gG(){return this.a}}
A.nq.prototype={
$1(a){return this.a.q(0,A.q(a))},
$S:3}
A.dS.prototype={
v(){return"Hand."+this.b}}
A.rz.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
eh(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.k4.prototype={
B(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.B[r]
o.k(0,q,s.h(0,q))}return A.H(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.P(B.B,t.oI.a(new A.p1(this)),t.jT).Z(0," \xb7 ")}}
A.p0.prototype={
$2(a,b){return new A.J(A.q(a),A.q(b),t.q)},
$S:91}
A.p1.prototype={
$1(a){return this.a.a.h(0,A.q(a))},
$S:92}
A.bP.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.H(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gag(){return this.b}}
A.oJ.prototype={
c0(a){t.G.a(a)
return a.a===5&&B.a.a8(B.B,new A.oQ(this,a))},
er(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.c0(b))return null
s=this.e++
r=new A.bP(s,a,A.c([A.p_(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dB(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.c0(b))return!1
B.a.l(s.c,A.p_(b,c,B.ay))
return!0},
jX(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.c0(b))return!1
s.r=A.p_(b,0,B.cI)
return!0},
hy(a){var s,r,q,p
t.U.a(a)
s=this.d
B.a.M(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.P(p)&&!B.a.q(s,p))B.a.l(s,p)}},
mU(a){var s
if(!this.b.P(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.L(n,A.o(n).c)
B.a.V(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.ac(r,r.r,r.e,A.o(r).i("ac<2>"));r.m();)s.push(r.d.B())
return A.H(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.oQ.prototype={
$1(a){var s
A.q(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.mI.prototype={
l3(a,b){if(a.a===B.aE)return new A.pG(b,a.B(),B.dv)
return new A.oU(b,!1,null,a.B(),B.dv)}}
A.he.prototype={
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
A.mJ.prototype={
ck(a){var s,r,q,p=null,o=a==null?p:B.b.bs(a).toLowerCase()
if(o==null||o.length===0)return B.e5
s=o!=="pixeldart"
if(!s||o==="next"||o==="auto"||o==="legacy"){s=!s||o==="next"
r=o==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':p
return new A.he(B.aE,s,o==="auto",!1,p,r,q)}return new A.he(B.aE,!1,!1,!0,'unsupported renderer query "'+o+'"; use pixeldart',!1,p)}}
A.oV.prototype={}
A.oU.prototype={
gbD(){var s=this.b.gbD(),r=s.hc(this.e)
return r},
c8(){if(this.f===B.dw)throw A.b(A.l("legacy backend is disposed"))
this.b.c8()
this.f=B.z},
bg(a,b){if(a<=0||b<=0)throw A.b(A.w("legacy surface size must be positive",null))
if(this.f!==B.z)A.i(A.l("legacy backend is not ready"))
this.b.bg(a,b)},
bv(a){if(this.f!==B.z)A.i(A.l("legacy backend is not ready"))
B.j.a7(A.H(["backend","legacy","interpolation",0,"facts",A.m1(a.a.a)],t.N,t.X),null)
this.b.bv(a)},
dI(a){if(this.f!==B.z)A.i(A.l("legacy backend is not ready"))
B.j.a7(A.H(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.pH.prototype={}
A.pG.prototype={
gbD(){var s=this.b.gbD(),r=s.hc(this.c)
return r},
c8(){if(this.d===B.dw)throw A.b(A.l("pixeldart backend is disposed"))
this.b.c8()
this.d=B.z},
bg(a,b){if(this.d!==B.z)A.i(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.b(A.w("pixeldart surface size must be positive",null))
this.b.bg(a,b)},
bv(a){var s,r=this,q="pixeldart backend is not ready",p=r.b,o=r.d
if(o===B.bv){if(p.y1){s=p.d
s===$&&A.p()
s=s.b===B.S}else s=!1
s=!s
if(s){r.d=B.z;++p.to
o=B.z}if(o===B.bv)return}if(o!==B.z)A.i(A.l(q))
B.j.a7(A.H(["backend","pixeldart","interpolation",0,"facts",A.m1(a.a.a)],t.N,t.X),null)
if(p.y1){o=p.d
o===$&&A.p()
o=o.b===B.S}else o=!1
if(o){if(r.d!==B.z)A.i(A.l(q))
r.d=B.bv
return}p.bv(a)},
dI(a){if(this.d!==B.z)A.i(A.l("pixeldart backend is not ready"))
B.j.a7(A.H(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.pI.prototype={
kl(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c3.ck(a)
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
o=A.L(o,A.o(o).c)
B.a.V(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.v)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.kj.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.pJ.prototype={
B(){var s=this
return A.H(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.pK.prototype={
fB(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.w("surface dimensions must be positive",null))
s=a1.a
A:{if(B.a_===s){r=new A.f0(1080,1920)
break A}if(B.N===s){r=new A.f0(720,1280)
break A}r=new A.f0(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.c.aH(r.b*q)
q=B.c.aH(r.a*q)
o=B.c.F(a5/p,0,1)
n=B.c.F(a4/q,0,1)
m=o<n?o:n
r=this.eu(B.c.aH(p*m),320,a5)
q=this.eu(B.c.aH(q*m),180,a4)
l=s===B.a_
k=s===B.N
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
break E}g=a0==="linear"?B.eF:B.aS
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.eQ
break F}if("errors"===b){c=B.ca
break F}c=B.eR
break F}return new A.hZ(a1,r,q,h,g,i,p,f,e,d,c)},
eu(a,b,c){if(c<b)return c
return B.d.F(a,b,c)}}
A.k3.prototype={}
A.pR.prototype={
mS(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b3
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b3
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.k3(!0,B.c.F(q*(0.6+b*0.6),0,1),0.82+s.aG()*0.1,0.9+s.aG()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aG()*0.15
p.e=(0.6+s.aG()*2.8)/0.343
p.b=16-b*11+s.aG()*6}}}
A.kv.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eH.prototype={
v(){return"RendererBackendState."+this.b}}
A.q3.prototype={}
A.kw.prototype={
gG(){return this.a}}
A.q2.prototype={
i4(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.w("renderer provenance values must be non-empty",null))}},
hc(a){var s=this
return A.y9(s.a,s.c,s.d,!1,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
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
A.q4.prototype={
bg(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fR(a,b){var s,r,q,p,o
for(s=A.ah(this.a.d,t.rO),r=A.E(s).i("eJ<1>"),s=new A.eJ(s,r),s=new A.aF(s,s.gt(0),r.i("aF<a7.E>")),r=r.i("a7.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.qR.prototype={}
A.cD.prototype={
v(){return"ShaderDebugMode."+this.b},
glc(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dt.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e2.prototype={
gfL(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aI(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aI(r,2)
else return B.c.aI(r,3)}},
gG(){return this.a}}
A.qS.prototype={
gbf(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bi,p)
s=B.bi[p]
p=this.f
p===$&&A.p()
r=A.E(p)
q=r.i("F<1>")
p=A.L(new A.F(p,r.i("k(1)").a(new A.qV(s)),q),q.i("m.E"))
return p},
gcH(){var s,r=this.gbf(),q=r.length
if(q===0)return null
s=B.d.F(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mv(){var s,r,q,p,o
if(this.b===4)this.e=B.aH
else for(s=this.gbf(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mt(){var s,r,q,p
this.e=B.aH
s=this.f
s===$&&A.p()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
E(a){var s,r,q=this.f
q===$&&A.p()
s=A.E(q)
r=A.bE(new A.F(q,s.i("k(1)").a(new A.qU(a)),s.i("F<1>")),t.e)
q=r==null?null:r.y
return q==null?1:q},
aR(a){var s,r,q=this.f
q===$&&A.p()
s=A.E(q)
r=A.bE(new A.F(q,s.i("k(1)").a(new A.qT(a)),s.i("F<1>")),t.e)
q=r==null?null:r.z
return q!==!1}}
A.qV.prototype={
$1(a){return t.e.a(a).d===this.a},
$S:24}
A.qU.prototype={
$1(a){return t.e.a(a).a===this.a},
$S:24}
A.qT.prototype={
$1(a){return t.e.a(a).a===this.a},
$S:24}
A.bI.prototype={
v(){return"SleepQuality."+this.b}}
A.bx.prototype={
v(){return"SleepLocation."+this.b}}
A.fJ.prototype={
gag(){return this.a}}
A.ni.prototype={
d1(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hN(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
i.push(A.H(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.H(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nj.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:94}
A.nk.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:95}
A.jW.prototype={
v(){return"InteractionType."+this.b}}
A.eT.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.rE.prototype={}
A.eS.prototype={}
A.jo.prototype={}
A.oz.prototype={}
A.oD.prototype={
e7(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.ac(s,s.r,s.e,A.o(s).i("ac<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.O(p,new A.oE())
return p},
kt(a,b){var s,r,q,p,o,n=b.b
if(n.gR(n))return B.n4
s=t.N
r=A.a3(s)
q=A.a3(s)
for(s=n.ga1(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gY(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eS(B.aJ,r)
s=r.a
o=B.a.gY(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gY(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eS(B.dW,r)
return new A.eS(B.bQ,r)},
jq(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jo(e,!1,B.n3,null)
s=p.d===c
r=this.kt(p,d)
q.mU(e)
return new A.jo(e,s,r,r.a===B.aJ&&s?'The world says "'+d.c+'". The entry says "'+B.a.gY(p.c).p(0)+'".':null)},
l4(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aJ)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.oz(B.a.gY(s.c).p(0)+" but "+A.A(a.f))}}
A.oE.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.H(s.a(b).a,a.a)},
$S:11}
A.ch.prototype={
v(){return"RuptureStep."+this.b}}
A.q6.prototype={}
A.cV.prototype={}
A.q7.prototype={
gei(){var s=B.bl.h(0,this.a)
return s==null?0:s},
hR(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.E)s=q.e
else s=!0
if(s)return B.cT
r=A.wx(b)
s=q.c
B.a.M(s)
B.a.J(s,r)
B.a.M(q.d)
q.a=B.aF
q.b=0
q.e=!1
return A.c([B.ez],t.xB)},
du(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.E||a===0)return B.cT
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
if(l.a===B.a0)l.jM(s)
p=l.b
o=B.bl.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cV())
if(q===B.a0){l.a=B.E
l.b=0
l.e=!0
B.a.l(s,B.ey)}else{p=q.a+1
if(!(p<7))return A.d(B.cR,p)
l.a=B.cR[p]
l.b=0
B.a.l(s,new A.cV())}}}return A.ah(s,t.F3)},
B(){var s=this,r=t.N
return A.H(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ah(s.c,r),"extinguishedMantles",A.ah(s.d,r),"completed",s.e],r,t.z)},
jM(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.F(B.c.aY(l.b/l.gei()*A.ah(s,r).length),0,A.ah(s,r).length)
p=l.d
for(;;){o=A.aD(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aD(s,!1,r)
o.$flags=3
n=o
o=A.aD(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cV())}}}
A.jL.prototype={
gel(){var s=this.b
if(s<7||s>19)return 0
return B.c.F((s-7)/12,0,1)},
gl5(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.F((s-5.5)/15,0,1))},
h7(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.a1("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.eR.prototype={
B(){var s=this
return A.H(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)},
gag(){return this.a}}
A.rA.prototype={
dH(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aW(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.uk.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.F(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eR(r,q,A.zR(B.c.aI(s,2)),A.zR(B.c.aI(12-(r-1)*0.11000000000000001,2)))},
$S:96}
A.nQ.prototype={
lp(a){var s,r,q,p,o=A.c([],t.tS)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
kj(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.nR.prototype={
$2(a,b){var s,r=B.d.H(a.gag(),b.gag())
if(r!==0)return r
s=B.c.H(a.gaN(),b.gaN())
return s!==0?s:J.vC(a.gG(),b.gG())},
$S:26}
A.jJ.prototype={
bY(a,b){var s,r,q,p,o,n=A.c([],t.tS)
for(s=this.a.lp(a),r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
if(o.d<=b&&q.l(0,o.a))B.a.l(n,o)}return n},
gl8(){var s=this.b
s=A.L(s,A.o(s).c)
B.a.V(s)
return s},
B(){var s=this.b
s=A.L(s,A.o(s).c)
B.a.V(s)
return A.H(["delivered",s],t.N,t.z)}}
A.nP.prototype={
$1(a){return this.a.kj(A.q(a))!=null},
$S:3}
A.pk.prototype={
aM(a,b){var s=this.b
if(s.P(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
lB(a){return this.aM(a,null)},
k0(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gL(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("I<1,2>")
k=A.L(new A.I(k,j),j.i("m.E"))
B.a.O(k,new A.pm())
j=t.N
k=A.vW(k,j,j)
s=this.b
r=A.o(s).i("I<1,2>")
s=A.L(new A.I(s,r),r.i("m.E"))
B.a.O(s,new A.pn())
s=A.vW(s,j,j)
r=A.n(j,t.c)
q=this.c
p=A.o(q).i("I<1,2>")
q=A.L(new A.I(q,p),p.i("m.E"))
B.a.O(q,new A.po())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.v)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.H(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.H(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pm.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:21}
A.pn.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:21}
A.po.prototype={
$2(a,b){var s=t.gI
return B.b.H(s.a(a).a,s.a(b).a)},
$S:99}
A.cL.prototype={
B(){var s=this
return A.H(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bt.prototype={
B(){var s=this
return A.H(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gG(){return this.a}}
A.pE.prototype={
e5(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aM("ashworth.compact","accepted"))B.a.l(r,B.kA)
if(q.aM(s,"taken"))B.a.l(r,B.kE)
else if(q.aM(s,"left"))B.a.l(r,B.kB)
if(q.aM("sylvia.certificate","granted"))B.a.l(r,B.kD)
if(q.aM("residue.coal","cellar"))B.a.l(r,B.kz)
if(q.aM("telegram.08","read"))B.a.l(r,B.ky)
if(q.aM("truth.shawl","home"))B.a.l(r,B.kx)
if(q.aM("sowerby.paraffin","received"))B.a.l(r,B.kC)
if(q.aM("inspector.proclamation","acknowledged"))B.a.l(r,B.kw)
return r},
hi(a){var s=this.e5(),r=A.E(s),q=r.i("F<1>")
s=A.L(new A.F(s,r.i("k(1)").a(new A.pF(a)),q),q.i("m.E"))
return s}}
A.pF.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:31}
A.r1.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fL(e.a),c=t.N,b=t.c,a=A.n(c,b)
for(s=e.b,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jS(q,r.b))}s=A.fL(e.r)
q=A.fL(e.w)
p=A.fL(e.x)
o=A.n(c,t.rW)
for(n=e.as,n=new A.I(n,A.o(n).i("I<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.M(l.b);i.m();){h=i.gn()
j.push(A.H(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.n(c,b)
for(m=e.at,m=new A.I(m,A.o(m).i("I<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.n(c,b)
for(m=e.ax,m=new A.I(m,A.o(m).i("I<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.H(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jS(a,b){var s,r=A.fL(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fL(q.bI(0,new A.r2(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gX(s))r.k(0,"_ambient",A.fL(s.bI(0,new A.r3(),t.S,t.z)))
return r}}
A.r2.prototype={
$2(a,b){return new A.J(A.e(a),t.BX.a(b).B(),t.pr)},
$S:101}
A.r3.prototype={
$2(a,b){return new A.J(A.e(a),t.vw.a(b).B(),t.pr)},
$S:102}
A.eQ.prototype={
B(){return A.H(["hour",this.a,"order",this.b],t.N,t.S)},
gaN(){return this.a}}
A.eP.prototype={
B(){return A.H(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gaN(){return this.a}}
A.ig.prototype={
B(){var s=t.N
return A.H(["field",this.a,"value",this.b],s,s)}}
A.l4.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.H(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gG(){return this.a},
gag(){return this.c}}
A.eG.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gX(s))q.k(0,"effects",s)
return q},
gG(){return this.a}}
A.d0.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gX(s))q.k(0,"when",s)
return q},
gG(){return this.a}}
A.r0.prototype={}
A.i2.prototype={
gG(){return this.a},
gag(){return this.c},
gaN(){return this.d}}
A.qd.prototype={
$1(a){return typeof a!="string"},
$S:32}
A.qe.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.i(A.a1("screenplay event "+a+" is invalid",null,null))
return s},
$S:20}
A.kD.prototype={
gG(){return this.a},
gag(){return this.b}}
A.kA.prototype={}
A.kB.prototype={
gG(){return this.a}}
A.kC.prototype={
gG(){return this.a}}
A.r4.prototype={
bo(){var s=0,r=A.c5(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bo=A.c7(function(a0,a1){if(a0===1){p.push(a1)
s=q}for(;;)switch(s){case 0:q=3
i=v.G
h=t.m
s=6
return A.aN(A.d7(A.a(A.a(i.window).fetch("res/text.json")),h),$async$bo)
case 6:n=a1
g=t.N
s=7
return A.aN(A.d7(A.a(n.text()),g),$async$bo)
case 7:m=a1
l=A.FI(m)
f=J.aQ(l,"broadcasts")
f.toString
e=t.c
o.a=e.a(f)
f=J.aQ(l,"visitors")
f.toString
o.b=e.a(f)
f=J.aQ(l,"vocabulary")
f.toString
o.c=e.a(f)
f=J.aQ(l,"documents")
f.toString
e.a(f)
f=J.aQ(l,"street")
f.toString
e.a(f)
f=J.aQ(l,"unverifiables")
f.toString
o.f=e.a(f)
f=J.aQ(l,"nights")
f.toString
e.a(f)
f=J.aQ(l,"endings")
f.toString
o.w=e.a(f)
f=J.aQ(l,"records")
f.toString
o.x=e.a(f)
f=J.aQ(l,"cues")
f.toString
e.a(f)
f=J.aQ(l,"claims")
f.toString
o.z=e.a(f)
f=t.f
if(f.b(J.aQ(l,"reactions"))){d=J.aQ(l,"reactions")
if(d==null)d=f.a(d)
d=A.aJ(d,g,t.z)}else d=A.n(g,t.z)
o.Q=e.a(d)
if(f.b(J.aQ(l,"variants"))){d=J.aQ(l,"variants")
if(d==null)d=f.a(d)
d=A.aJ(d,g,t.z)}else d=A.n(g,t.z)
o.as=e.a(d)
if(f.b(J.aQ(l,"residues"))){d=J.aQ(l,"residues")
f=d==null?f.a(d):d
f=A.aJ(f,g,t.z)}else f=A.n(g,t.z)
o.at=e.a(f)
s=8
return A.aN(A.d7(A.a(A.a(i.window).fetch("res/story_script.json")),h),$async$bo)
case 8:k=a1
s=A.O(k.ok)?9:10
break
case 9:a=A
s=11
return A.aN(A.d7(A.a(k.text()),g),$async$bo)
case 11:i=a.Cv(a1)
o.ax=i
o.ay=A.By(i)
case 10:q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.as(b)
i=A.A(j)
throw A.b("Failed to load text.json: "+i)
s=5
break
case 2:s=1
break
case 5:return A.c3(null,r)
case 1:return A.c2(p.at(-1),r)}})
return A.c4($async$bo,r)},
hh(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gL().cW(0,new A.r5())
r=p.$ti
q=t.N
return A.vW(new A.cw(p,r.i("J<f,f>(1)").a(new A.r6()),r.i("cw<1,J<f,f>>")),q,q)}return null},
e6(a,b){var s=this.hh(a)
return s==null?null:s.h(0,b)},
hl(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.p()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.M(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.n(n,n)
if(f.b(l))for(j=l.gL(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.q(i.b))}B.a.l(p,new A.eG(A.q(m.h(0,"id")),A.q(m.h(0,"label")),A.q(m.h(0,"reply")),A.br(k,n,n)))}if(p.length<2)return g
return new A.l4(r,a,b,c,d,A.ah(p,t.Y))},
hk(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.ad(p)||o!==B.c.ad(o))return n
return new A.eQ(B.c.ad(p),B.c.ad(o))},
hj(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.ad(p)||typeof o!="string"||typeof n!="string")return m
return new A.eP(B.c.ad(p),o,n)},
mW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.I(b4,A.o(b4).i("I<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.n(a3,a4)
for(o=o.gL(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dp(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gL(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.q(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("cf<1>"),l=new A.cf(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hk(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.n(a3,s)
for(m=new A.cf(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hj(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.ac(b4,b4.r,b4.e,A.o(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hl(A.q(d.h(0,"visitor")),B.c.ad(A.af(d.h(0,"day"))),A.q(d.h(0,"tier")),B.c.ad(A.af(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.ac(b4,b4.r,b4.e,A.o(b4).i("ac<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gL(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.q(r.b))}s=A.q(d.h(0,"id"))
b2.k(0,s,new A.d0(s,A.q(d.h(0,"target")),A.q(d.h(0,a2)),A.br(b,a5,a5)))}b4=a1.at
b4===$&&A.p()
b4=new A.I(b4,A.o(b4).i("I<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.I(b4,A.o(b4).i("I<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.M(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ig(A.q(a0.h(0,"field")),A.q(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.r1(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.r5.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:105}
A.r6.prototype={
$1(a){t.AC.a(a)
return new A.J(A.q(a.a),A.q(a.b),t.q)},
$S:106}
A.j7.prototype={
bG(a,b,c){var s=B.b.bs(a),r=B.b.bs(c)
if(r.length===0)return""
if(b||this.a===B.bS)return s.length===0?r:s+": "+r
if(this.a===B.bR)return r
return s.length===0?r:s+": "+r},
fK(a,b){return this.bG(a,!1,b)}}
A.vD.prototype={}
A.cJ.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dG.prototype={
c1(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dG(q,p,o,n,m)},
kW(a){var s=null
return this.c1(s,s,s,a,s)},
l1(a){var s=null
return this.c1(s,s,s,s,a)},
kS(a){var s=null
return this.c1(s,s,a,s,s)},
kQ(a){var s=null
return this.c1(s,a,s,s,s)},
kx(a){var s=null
return this.c1(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.H(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mh.prototype={
$1(a){return a==null?null:A.O(a)},
$S:107}
A.mf.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:34}
A.mg.prototype={
$0(){return A.i(B.h9)},
$S:6}
A.mt.prototype={
bO(a,b){var s,r=this,q=r.e.fK(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aK(q)
A.e(A.a(v.G.window).setTimeout(A.zg(new A.mv(r)),7000))},
aK(a){var s,r,q=this
if(!q.c||B.b.bs(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.e(A.a(v.G.window).setTimeout(A.zg(new A.mu(q,s)),4200))}}
A.mv.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:109}
A.mu.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cr.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cK.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.db.prototype={
v(){return"AudioReverbMode."+this.b}}
A.da.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dH.prototype={
cG(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dH(r,q,p,a==null?s.e:a)},
kO(a){return this.cG(null,null,a,null)},
kE(a){return this.cG(null,a,null,null)},
kU(a){return this.cG(null,null,null,a)},
kD(a){return this.cG(a,null,null,null)},
B(){var s=this
return A.H(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mz.prototype={
$1$2(a,b,c){return B.a.bd(c.i("m<0>").a(a),new A.mA(b,c),new A.mB(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:110}
A.mA.prototype={
$1(a){return t.D.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("k(0)")}}
A.mB.prototype={
$0(){return A.i(A.a1("unsupported audio option: "+A.A(this.a),null,null))},
$S:6}
A.mL.prototype={
mR(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.fK(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.mO.prototype={
$1(a){return this.a.$0()},
$S:2}
A.mS.prototype={
$1(a){return this.a.$1(A.O(this.b.checked))},
$S:2}
A.mR.prototype={
$1(a){var s=A.eE(A.q(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.mQ.prototype={
$1(a){A.q(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dJ.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dK.prototype={
v(){return"BrushComponentState."+this.b}}
A.b_.prototype={
gjV(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bs(s.a).length===0||B.b.bs(s.c).length===0)throw A.b(B.fZ)
if(s.e===B.c2&&s.b!==B.c1)throw A.b(B.fy)},
gG(){return this.a}}
A.mU.prototype={
ln(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.F(a>=r+c?q.e=a-c+1:r,0,s)},
cY(a,b){if(b<=0){this.f=0
return}this.f=B.d.F(this.f+a,0,Math.max(0,b-1))},
bF(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cS(o+c,n)
l=new A.cS(s+p,n)
k=s-p
j=new A.cS(k,r-c)
i=new A.cS(k-c,r)
h=new A.cS(q-p,r)
g=new A.cS(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.eN(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eN(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aX(a,b,c,d,e,f,g,h,i){return this.bF(a,b,c,d,e,!0,f,g,h,i)},
ld(a,b,c,d,e,f,g,h,i){return this.bF(a,b,14,c,d,e,f,g,h,i)},
li(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ea()
s.bQ(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aG()-0.5)*8
l=s.aG()
k=s.aG()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fH(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eM(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eM(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.A(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
lg(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.af(A.a(q.measureText(a.toUpperCase())).width)+70)
this.aX("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
lf(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aX(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.af(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bF(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gmK()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.jU(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.be(i,0,new A.mV(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aY((a5+a2-a1)/a2))
d1=d4.f
c7.ln(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.F(c7.e,0,a7)
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
B.a.l(f,new A.ff("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aX(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.fH(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bT(b1,g),c1+22,b3)
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
B.a.l(c7.d,new A.ff("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aX("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
le(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.d(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bF(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.p()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText(this.bT("["+p.a+"] "+p.b,122),o,r)
m.restore()}},
lh(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
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
c7.fillStyle="rgba(10, 8, 12, "+A.A(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aX(c2,3,18,c1,q,-0.025,r,o,n)
c0.li(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c0.aX(c3,2,8,c2,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bi[g]
e=d0.b===g
d=l+i*(g+0.5)
c=e?c4:c5
b=e?c3:c6
c0.bF(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c0.aX(c4,2.5,10,c5,140,-0.02,r-80,o,a1)
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
c7.fillText(d0.e.glc().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbf()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aY((a4+52-44)/52))
a6=Math.max(0,a2.length-a5)
l=B.d.F(c0.f,0,a6)
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
c0.bF(b,e?2.2:1,6,c,44,e,-0.02,a8,b1,b0)
if(e)c0.fH(!0,g+1,20,b1-j+20,b0)
c7.save()
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="left"
c7.textBaseline="middle"
b2=e?38:18
c=a9.e
b=c?122:250
c7.fillText(c0.bT(a9.b.toUpperCase(),a8-b),b1-j+b2,b0)
b3=b1+j-20
if(c){b4=a9.z
c=b3-37
b=b4?c2:"#0c0a0e"
c0.ld(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
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
b8=B.c.F((a9.y-b6)/(b7-b6),0,1)
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
c7.fillText(B.c.aI(b6,1)+" ",c-4,b0)
c7.textAlign="left"
c7.fillText(" "+B.c.aI(b7,1),b5+80+4,b0)
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
eN(a){var s,r,q
t.Cs.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eM(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
jU(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.af(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bT(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.af(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.af(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.I(r,0,s-1)}return q?"...":r+"..."}}
A.mV.prototype={
$2(a,b){var s
A.bm(a)
A.q(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.af(A.a(s.measureText(b)).width))},
$S:111}
A.fj.prototype={
gkf(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gL(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.bc(r)
o.k(0,q,p.gR(r)?"":p.gU(r))}return o},
bA(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.H(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.bm(r)
q=n.h(0,i)
q.toString
A.bm(q)
p=n.h(0,"invertX")
p.toString
A.O(p)
o=n.h(0,"invertY")
o.toString
A.O(o)
m=n.h(0,h)
m.toString
return A.fk(null,a,A.O(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.bm(r)
q=n.h(0,i)
q.toString
A.bm(q)
p=n.h(0,"invertX")
p.toString
A.O(p)
o=n.h(0,"invertY")
o.toString
A.O(o)
m=n.h(0,h)
m.toString
A.O(m)
l=k.gkf()
return A.fk(l,null,m,r,p,o,s,q)},
dA(a){var s=null
return this.bA(a,s,s,s,s,s)},
kL(a){var s=null
return this.bA(s,s,s,a,s,s)},
kM(a){var s=null
return this.bA(s,s,s,s,a,s)},
kI(a){var s=null
return this.bA(s,a,s,s,s,s)},
kJ(a){var s=null
return this.bA(s,s,a,s,s,s)},
l2(a){var s=null
return this.bA(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fh)
p=this.r
if(p.gL().W(0,new A.n9()))throw A.b(B.h3)
if(p.gL().W(0,new A.na()))throw A.b(B.fM)
p=p.gaQ()
o=A.o(p)
s=o.i("hq<m.E,f>")
r=s.i("F<m.E>")
q=A.L(new A.F(new A.hq(p,o.i("m<f>(m.E)").a(new A.nb()),s),s.i("k(m.E)").a(new A.nc()),r),r.i("m.E"))
if(A.hG(q,A.E(q).c).a!==q.length)throw A.b(B.fk)},
B(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gL(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.aD(r.b,!0,p))}return A.H(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.n9.prototype={
$1(a){t.yx.a(a)
return J.vB(a.b,new A.n8(a))},
$S:35}
A.n8.prototype={
$1(a){var s
A.q(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xu(a)
else s=!1
return s},
$S:3}
A.na.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.vB(a.b,B.dA.gar(B.dA))},
$S:35}
A.nb.prototype={
$1(a){return t.a.a(a)},
$S:113}
A.nc.prototype={
$1(a){return A.q(a).length!==0},
$S:3}
A.n7.prototype={
$1(a){return typeof a=="string"},
$S:32}
A.dI.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.en.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dc.prototype={}
A.jp.prototype={
bZ(a){var s=this
if(!s.a.r.P(a))return new A.dc(B.bZ,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e6},
km(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aO
if(!A.xu(a)){p.c=p.b=null
return new A.dc(B.c0,B.dB.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gL()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xj(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dc(B.aP,a+" is already bound to "+s)}return p.ig(a)},
dW(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aO
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e7
case 1:s=A.wn(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wK(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.wW(r,k))
m.a=m.a.dA(s)
break
case 0:s=A.wn(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.kN(p,1,null,A.E(p).c)
o=p.$ti
p=new A.aF(p,p.gt(0),o.i("aF<a7.E>"))
o=o.i("a7.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.wW(r,k)}else{r=s.h(0,j)
r.toString
r=A.wK(A.wW(r,k),q)}s.k(0,j,r)
m.a=m.a.dA(s)
break}m.c=m.e=m.d=null
return B.bX},
ig(a){var s,r,q=this,p=q.b
if(p==null)return B.aO
s=A.wn(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wK(r,a))
q.a=q.a.dA(s)
q.b=null
return B.bX}}
A.hl.prototype={
hY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jp(f.w)
s=f.b
s.className=A.q(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.mP(a,B.eg,1)))
A.a(s.appendChild(A.y(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.y(a,"div",c,e)
f.ep(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.ep(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d5(a,r,"invertX","Invert horizontal look")
f.d5(a,r,"invertY","Invert vertical look")
f.d5(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.y(a,"div",c,e)
for(p=B.jw.gL(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fk(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.me(l)?"unbound":J.xl(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dL(a,new A.b_("settings.controls.bind."+m,B.c1,n,h,B.p),new A.n5(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.y(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.y(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.ds()
A.a(s.appendChild(A.dL(a,B.eh,new A.n6(f),e)))},
fY(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.eQ(this.x.km(A.q(a.code)))},
eQ(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aP?B.el:B.p
p=o.Q.h(0,r)
if(p!=null)A.vI(p,q)}n=a.a
if(n===B.aP)o.jD()
else if(n===B.c_){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.ds()}else{o.d8()
o.ax=null}},
jD(){var s,r,q,p,o
this.d8()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.im[r]
p=A.D(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dL(p,new A.b_("settings.controls.resolve."+o,B.G,o,"resolve key binding conflict",B.p),new A.n4(this,q),null)))}},
d8(){var s,r=this.at
if(r==null)return
while(A.D(r.firstChild)!=null){s=A.D(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
ds(){var s,r,q,p
for(s=this.Q,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.me(p)?"unbound":J.xl(p," / ")
r.textContent=q
A.vI(r,B.p)}},
ep(a,b,c,d,e,f){var s,r=A.y(a,"label","setting-row",null)
A.a(r.appendChild(A.y(a,"span",null,d)))
s=A.AU(a,new A.b_("settings.controls."+c,B.ej,d,null,B.p),f,e,new A.n2(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d5(a,b,c,d){var s=A.y(a,"label","setting-toggle",null),r=A.AV(a,new A.b_("settings.controls."+c,B.ek,d,null,B.p),!1,new A.n3(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.y(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eO(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdP(a){this.f=t.pf.a(a)},
sb5(a){this.r=t.Z.a(a)}}
A.n5.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.bZ(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bY){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.vI(q,B.c2)}p.d8()
return null},
$S:0}
A.n6.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.n4.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.eQ(r.dW(this.b))},
$S:0}
A.n2.prototype={
$1(a){var s=this.a,r=s.w
s.eO(this.b==="horizontalSensitivity"?r.kJ(a):r.l2(a))},
$S:172}
A.n3.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kL(a)
break A}if("invertY"===q){s=r.w.kM(a)
break A}s=r.w.kI(a)
break A}r.eO(s)},
$S:8}
A.nd.prototype={
hZ(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.y(s,"h1","journal-title","credits")))
r=A.y(s,"p","credits-body",null)
p.f!==$&&A.aV()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.y(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.y(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.U(new A.ne(p)))
A.a(o.appendChild(q))}}
A.ne.prototype={
$1(a){return this.a.a6()},
$S:2}
A.nm.prototype={
i0(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.y(a,o,"door-speaker",p)
q.b!==$&&A.aV()
q.b=s
r=A.y(a,o,"door-line",p)
q.c!==$&&A.aV()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.y(a,o,"door-choice-status",p)
q.d!==$&&A.aV()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.y(a,o,"door-cite-list",p)
q.f!==$&&A.aV()
q.f=r
s=A.y(a,o,"door-cite-result",p)
q.r!==$&&A.aV()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.y(a,"button","door-continue","continue")
q.e!==$&&A.aV()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.nn(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.U(new A.no(q,a)))
A.a(A.D(a.body).appendChild(n))},
ee(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.K.bG("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.xx(B.b5)
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
ef(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.K.bG("",!0,a)
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
hD(a){return this.ef(a,!1)},
hF(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.v)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.xx(r)},
eg(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.K.bG("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.a(s.style).display=""},
hC(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=A.tz,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.np(o,this)
if(typeof o=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.h8()]=o
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
slX(a){this.w=t.Z.a(a)},
slW(a){this.x=t.vR.a(a)}}
A.nn.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:37}
A.no.prototype={
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
for(s=t.m,o=0;o<A.e(p.length);++o){n=A.D(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.D(this.b.activeElement)
if(A.O(a.shiftKey)){if(m===B.a.gU(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gY(r).focus()}}else if(m===B.a.gY(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:117}
A.np.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:37}
A.ns.prototype={
i1(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.y(s,"h1","journal-title",null)
o.f!==$&&A.aV()
o.f=r
q=A.y(s,"div","ending-copy",null)
o.r!==$&&A.aV()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.y(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.U(new A.nt(o)))
A.a(n.appendChild(p))},
hE(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bJ()},
sm0(a){this.w=t.Z.a(a)}}
A.nt.prototype={
$1(a){var s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.nZ.prototype={
bt(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aD(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
M(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
mQ(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lz(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.ft()
return!0}return!1}if(a==="Space"){s=B.a.dK(l,new A.o_())
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
return!0}}if(B.b.T(a,"Digit")){p=A.dp(B.b.aS(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.dp(B.b.aS(a,6),m)
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
ft(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lA(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.ft()
return!0}this.cl(a.b)
return!0},
slV(a){this.y=t.dt.a(a)},
sm_(a){this.z=t.Z.a(a)}}
A.o_.prototype={
$1(a){A.q(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.o0.prototype={}
A.dh.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cM.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cN.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.di.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dg.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dj.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cc.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.df.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fr.prototype={
aL(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.vJ(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
kZ(a){var s=null
return this.aL(s,s,s,s,s,s,s,s,s,a,s)},
kY(a){var s=null
return this.aL(s,s,s,s,s,s,s,s,a,s,s)},
kA(a){var s=null
return this.aL(s,s,a,s,s,s,s,s,s,s,s)},
kK(a){var s=null
return this.aL(s,s,s,s,a,s,s,s,s,s,s)},
kR(a){var s=null
return this.aL(s,s,s,s,s,s,a,s,s,s,s)},
l_(a){var s=null
return this.aL(s,s,s,s,s,s,s,s,s,s,a)},
kN(a){var s=null
return this.aL(s,s,s,s,s,a,s,s,s,s,s)},
kz(a){var s=null
return this.aL(s,a,s,s,s,s,s,s,s,s,s)},
kV(a){var s=null
return this.aL(s,s,s,s,s,s,s,a,s,s,s)},
ky(a){var s=null
return this.aL(a,s,s,s,s,s,s,s,s,s,s)},
kG(a){var s=null
return this.aL(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.H(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.o1.prototype={
$1$2(a,b,c){var s
A.zQ(c,t.D,"T","call")
c.i("m<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.a1("invalid gameplay setting: "+a,null,null))
return B.a.bd(b,new A.o2(s,c),new A.o3(a))},
$2(a,b){return this.$1$2(a,b,t.D)},
$S:118}
A.o2.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("k(0)")}}
A.o3.prototype={
$0(){return A.i(A.a1("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cs.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dR.prototype={
aV(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=e==null?s.e:e,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=d==null?s.z:d
return new A.dR(s.a,r,q,p,o,n,m,l,k,j,i)},
dz(a){var s=null
return this.aV(a,s,s,s,s,s,s,s,s,s)},
fD(a){var s=null
return this.aV(s,s,a,s,s,s,s,s,s,s)},
fE(a){var s=null
return this.aV(s,s,s,s,s,s,a,s,s,s)},
kF(a){var s=null
return this.aV(s,s,s,a,s,s,s,s,s,s)},
kT(a){var s=null
return this.aV(s,s,s,s,s,s,s,a,s,s)},
kH(a){var s=null
return this.aV(s,s,s,s,a,s,s,s,s,s)},
l0(a){var s=null
return this.aV(s,s,s,s,s,s,s,s,s,a)},
kP(a){var s=null
return this.aV(s,s,s,s,s,a,s,s,s,s)},
kC(a){var s=null
return this.aV(s,a,s,s,s,s,s,s,s,s)},
kX(a){var s=null
return this.aV(s,s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.ja,q))throw A.b(A.a1("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.ix,q))throw A.b(A.a1("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.jf,q))throw A.b(A.a1("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.j7,q))throw A.b(A.a1("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.jh,q))throw A.b(A.a1("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.je,q))throw A.b(A.a1("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.jg,q))throw A.b(A.a1("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.H(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"fbxDiagnostics",s.z],t.N,t.K)}}
A.oe.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:38}
A.of.prototype={
$0(){return A.i(B.fD)},
$S:6}
A.og.prototype={
B(){return A.H(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.o7.prototype={}
A.o8.prototype={}
A.hw.prototype={
i2(a){var s,r,q,p,o,n=this,m=null,l="settings-copy",k="setting-toggle",j=n.b
j.setAttribute("aria-label","Graphics settings")
A.a(j.appendChild(A.y(a,"h1","journal-title","Graphics")))
A.a(j.appendChild(A.y(a,"p",l,"Choose a visual budget without changing simulation truth.")))
s=A.y(a,"div","settings-grid",m)
r=t.N
n.b7(a,s,"preset","quality preset",A.H(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
n.b7(a,s,"renderScale","render scale",A.H(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
n.b7(a,s,"frameTarget","frame target",A.H(["30","30 fps","60","60 fps","display","Display rate"],r,r))
n.b7(a,s,"antialiasing","anti-aliasing",A.H(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
n.b7(a,s,"textureQuality","texture quality",A.H(["high","High","medium","Medium","low","Low"],r,r))
n.b7(a,s,"outputEncoding","output encoding",A.H(["srgb","sRGB display","linear","Linear light"],r,r))
n.b7(a,s,"diagnosticLevel","renderer diagnostics",A.H(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
n.b7(a,s,"shadowQuality","shadow allocation",A.H(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.y(a,"label",k,m)
r=A.a(a.createElement("input"))
n.x=r
r.type="checkbox"
r=n.x
r.toString
r.addEventListener("change",A.U(new A.ob(n)))
r=n.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.y(a,"span",m,"Dynamic resolution")))
A.a(s.appendChild(q))
p=A.y(a,"label",k,m)
r=A.a(a.createElement("input"))
n.y=r
r.type="checkbox"
r=n.y
r.toString
r.addEventListener("change",A.U(new A.oc(n)))
r=n.y
r.toString
A.a(p.appendChild(r))
A.a(p.appendChild(A.y(a,"span",m,"FBX room diagnostics (debug)")))
A.a(s.appendChild(p))
A.a(j.appendChild(s))
r=A.y(a,"p",l,m)
n.z=r
r.setAttribute("aria-live","polite")
r=n.z
r.toString
A.a(j.appendChild(r))
o=A.y(a,"button","door-continue","back")
o.setAttribute("type","button")
o.id="settings.graphics.back"
o.setAttribute("aria-label","back to settings categories")
o.addEventListener("click",A.U(new A.od(n)))
A.a(j.appendChild(o))},
b7(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.y(a,"label","setting-row",null)
A.a(s.appendChild(A.y(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.I(e,A.o(e).i("I<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.oa(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
dj(a){var s
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.Z(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.z
if(s!=null)s.textContent="effective graphics profile differs"}},
sdP(a){this.f=t.CA.a(a)},
sb5(a){this.r=t.Z.a(a)}}
A.ob.prototype={
$1(a){var s=this.a
s.dj(s.Q.fD(A.O(s.x.checked)))},
$S:1}
A.oc.prototype={
$1(a){var s=this.a
s.dj(s.Q.kF(A.O(s.y.checked)))},
$S:1}
A.od.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.oa.prototype={
$1(a){var s,r=A.q(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.Q.fE(B.a.ah(B.cQ,new A.o9(r)))
break A}if("renderScale"===p){s=q.Q.kT(r)
break A}if("frameTarget"===p){s=q.Q.kH(r)
break A}if("antialiasing"===p){s=q.Q.dz(r)
break A}if("textureQuality"===p){s=q.Q.l0(r)
break A}if("outputEncoding"===p){s=q.Q.kP(r)
break A}if("diagnosticLevel"===p){s=q.Q.kC(r)
break A}if("shadowQuality"===p){s=q.Q.kX(r)
break A}s=q.Q
break A}q.dj(s)},
$S:1}
A.o9.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:38}
A.j8.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.c9.prototype={}
A.oh.prototype={
hg(a,b,c){if(c)return B.iM
if(b&&a!=null)return A.c([new A.c9("E","Examine "+a,!0),new A.c9("TAB","Journal",!1),new A.c9("CAPS","Shader Lab",!1)],t.sa)
return B.js}}
A.oi.prototype={
i3(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.y(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.y(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.y(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.y(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.U(new A.oj(this)))
A.a(p.appendChild(r))}}
A.oj.prototype={
$1(a){return this.a.a6()},
$S:2}
A.oK.prototype={
bJ(){var s,r=this
r.hU()
s=r.r.a-1
if(s<1)s=1
r.CW=r.ey(r.CW,s)
r.jt()
r.f4()},
iq(){var s,r=this,q=r.a,p=A.y(q,"div","page-turn",null),o=A.y(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.U(new A.oL(r)))
s=A.y(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.oM(r)))
q=A.y(q,"span","right-day-label",null)
r.Q!==$&&A.aV()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fl(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ey(s.CW+a,r)
s.f4()},
ey(a,b){if(a<1)return 1
if(a>b)return b
return a},
jt(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.p()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.p()
s.textContent=""
for(s=j.w.e7(),r=s.length,q=A.tz,p=j.a,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
m=B.a.gY(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.oN(j,n,l)
if(typeof m=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.h8()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
f4(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ac<2>"),n=new A.ac(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.O(r,new A.oO())
j.f3(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.ac(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.O(s,new A.oP())
j.f3(i,s)
k=B.c.F(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.a(i.style).setProperty("width",B.c.aI(k*100,1)+"%")},
f3(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.v)(b),++r)A.a(a.appendChild(this.iR(b[r])))},
iR(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.y(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.c.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.j3(m,!1)
l.className=A.q(l.className)+" margin"
A.a(j.appendChild(l))}return j},
j3(a,b){var s=b?"hand-line struck":"hand-line",r=A.y(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.oL.prototype={
$1(a){return this.a.fl(-1)},
$S:2}
A.oM.prototype={
$1(a){return this.a.fl(1)},
$S:2}
A.oN.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.oO.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:11}
A.oP.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:11}
A.cS.prototype={}
A.ff.prototype={
gG(){return this.a}}
A.pt.prototype={
gmK(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.I(s,0,B.c.ad(B.c.F(r*q,0,r)))}}
A.hS.prototype={
aT(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.D(this.a.body).appendChild(s))},
bJ(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.q(n.className),"open"))return
s=$.pu
if(s!=null&&s!==o)s.a6()
$.pu=o
r=o.a
o.d=A.D(r.activeElement)
A.oH(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.U(o.gjl())
o.e=q
r.addEventListener("keydown",q)
p=A.ze(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.q(A.q(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pu===q)$.pu=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
fY(a){},
jm(a){A.a(a)
this.fY(a)
if(A.O(a.defaultPrevented))return
if(A.q(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.q(a.code)==="Tab")this.jJ(a)},
jJ(a){var s,r=A.ze(this.b)
if(r.length===0)return
s=A.D(this.a.activeElement)
if(A.O(a.shiftKey)){if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gY(r).focus()}}else if(s===B.a.gY(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
sb_(a){this.c=t.Z.a(a)}}
A.bg.prototype={
v(){return"PauseReason."+this.b}}
A.cg.prototype={
v(){return"PausePage."+this.b}}
A.e_.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dm.prototype={
B(){var s,r=A.n(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a5(a,b){if(b==null)return!1
return b instanceof A.dm&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gN(a){return A.cz(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dZ.prototype={
gfw(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bo},
B(){var s=A.n(t.N,t.X),r=this.a,q=A.E(r),p=q.i("P<1,W<f,Q?>>")
r=A.L(new A.P(r,q.i("W<f,Q?>(1)").a(new A.pz()),p),p.i("a7.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.E(r)
p=q.i("P<1,f>")
r=A.L(new A.P(r,q.i("f(1)").a(new A.pA()),p),p.i("a7.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.pz.prototype={
$1(a){return t.oP.a(a).B()},
$S:120}
A.pA.prototype={
$1(a){return t.wJ.a(a).b},
$S:121}
A.bU.prototype={}
A.py.prototype={
fZ(a){var s,r=this
if(r.a.gfw())return new A.bU(B.Z,r.a,null)
s=r.a
s=new A.dZ(B.j9,s.b,a)
r.a=s
return new A.bU(B.dk,s,"pause.resume")},
ka(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gY(p)
q=r.a.a
q=B.a.b2(q,0,q.length-1)
p=r.a
p=new A.dZ(q,p.b,p.c)
r.a=p
return new A.bU(B.dl,p,s.c)}if(q.gfw()&&r.a.b.length===0)return r.cg()
return new A.bU(B.Z,r.a,null)},
cg(){var s=this.a
if(s.a.length===0)return new A.bU(B.Z,s,null)
if(s.b.length!==0)return new A.bU(B.Z,s,null)
this.a=B.bn
return new A.bU(B.dm,B.bn,s.c)},
mg(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.bU(B.Z,q.a,null)
s=q.a
r=A.L(s.b,t.wJ)
r.push(a)
s=new A.dZ(s.a,r,q.a.c)
q.a=s
return new A.bU(B.dk,s,null)},
lb(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.bU(B.Z,o.a,null)
s=o.a
r=s.b
q=A.E(r)
p=q.i("F<1>")
r=A.L(new A.F(r,q.i("k(1)").a(new A.pB(a)),p),p.i("m.E"))
q=o.a.c
r=new A.dZ(s.a,r,q)
o.a=r
return new A.bU(B.kv,r,q)},
iK(a){var s
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
A.pB.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:122}
A.cA.prototype={
v(){return"PauseRootAction."+this.b}}
A.pC.prototype={
bi(a,b,c,d){var s=B.jJ.h(0,c)
s.toString
A.a(b.appendChild(A.dL(a,new A.b_(s,B.G,d,null,B.p),new A.pD(this,c),null)))},
smb(a){this.f=t.Z.a(a)},
smd(a){this.r=t.Z.a(a)},
slY(a){this.w=t.Z.a(a)},
smc(a){this.x=t.Z.a(a)},
sm3(a){this.y=t.Z.a(a)},
slZ(a){this.z=t.Z.a(a)},
sb5(a){this.Q=t.Z.a(a)}}
A.pD.prototype={
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
A.bG.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.pP.prototype={
hB(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bG("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qg.prototype={
i5(a){var s,r,q,p,o,n=this.b
n.className=A.q(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.mP(a,B.ef,1)))
A.a(n.appendChild(A.y(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.y(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iN[r]
p=B.d3.h(0,q)
p.toString
o=B.d2.h(0,q)
o.toString
A.a(s.appendChild(A.dL(a,new A.b_(o,B.G,p,p+" settings",B.p),new A.qh(this,q),null)))}A.a(s.appendChild(A.dL(a,B.ee,new A.qi(this),null)))
A.a(n.appendChild(s))},
slU(a){this.f=t.hQ.a(a)},
sb5(a){this.r=t.Z.a(a)}}
A.qh.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qi.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fI.prototype={
i6(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.A(B.d3.h(0,d))+" settings",a=h.b
a.className=A.q(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.mP(a0,new A.b_("settings."+(s==null?f:s)+".heading",B.aq,b,g,B.p),2)))
A.a(a.appendChild(A.y(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.y(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.qH(h)),p=B.a.gu(B.D),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.j2(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.y(a0,"div",e,g)
for(s=s.a(new A.qI(h)),q=B.a.gu(B.D),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.jI(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.H)A.a(a.appendChild(h.il(a0)))
if(d===B.I)A.a(a.appendChild(h.ik(a0)))
if(d===B.Y)A.a(a.appendChild(h.im(a0)))
i=A.y(a0,"div",e,g)
for(s=t.pz.a(h.giZ()),q=B.a.gu(B.jb),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dL(a0,new A.b_("settings."+o+".reset."+n,B.G,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.qJ(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dL(a0,new A.b_("settings."+(s==null?f:s)+".reset.all",B.G,"reset all settings","restore all settings to defaults",B.em),new A.qK(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dL(a0,new A.b_("settings."+(d==null?f:d)+".back",B.G,"return","return to settings categories",B.p),new A.qL(h),g)))},
ik(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.y(a,"div","settings-grid",j),f=k.d4(a,g,"reducedMotion","reduced motion (system default)"),e=k.d4(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d4(a,g,"captions","non-speech captions"),c=A.y(a,"label",h,j)
A.a(c.appendChild(A.y(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.U(new A.qz(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.y(a,"label",h,j)
A.a(r.appendChild(A.y(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bg[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.U(new A.qA(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.y(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.U(new A.qB(k)))
A.a(g.appendChild(l))
k.ok.J(0,A.H(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
d4(a,b,c,d){var s=A.y(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.U(new A.qj(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.y(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
ea(a){var s,r
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
s.value=(r==null?B.a6:r).b}},
im(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.y(a,"div","settings-grid",l)
m.b6(a,g,"interactionMode","interaction mode",B.bf,t.bK)
m.b6(a,g,"promptDensity","prompt density",B.bj,t.dn)
m.b6(a,g,"textPacing","text pacing",B.bh,t.j_)
m.b6(a,g,"journalLayout","journal layout",B.ba,t.gm)
m.b6(a,g,k,k,B.b4,t.aJ)
m.b6(a,g,"saveFeedback","save feedback",B.bb,t.mx)
m.b6(a,g,"focusLossBehavior","when the window loses focus",B.aA,t.x)
m.b6(a,g,"clockFormat","clock format",B.b7,t.vS)
s=A.y(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.U(new A.qC(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.y(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.y(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.U(new A.qD(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.y(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.y(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.U(new A.qE(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.y(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
b6(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.zQ(f,t.D,"T","_addGameplaySelect")
f.i("C<0>").a(e)
s=A.y(a,"label","setting-row",null)
A.a(s.appendChild(A.y(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.U(new A.qx(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
ho(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
il(a){var s,r,q=this,p=A.y(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.be[s].b
n.k(0,r,r)}q.cn(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.b9[s].b
n.k(0,r,r)}q.cn(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.b8[s].b
n.k(0,r,r)}q.cn(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.b6[s].b
o.k(0,n,n)}q.cn(a,p,"ducking","voice intelligibility",o)
return p},
cn(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.y(a,"label","setting-row",null)
A.a(s.appendChild(A.y(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.I(e,A.o(e).i("I<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.qo(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.k(0,c,r)},
hn(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.I(s,A.o(s).i("I<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eT(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.X===r){s=a.c===B.aG
break A}if(B.I===r){s=a.c===B.a2
break A}if(B.H===r){s=a.c===B.F
break A}s=!1
break A}return s},
j_(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.X===s){r=a===B.aG
break A}if(B.I===s){r=a===B.a2
break A}if(B.H===s){r=a===B.F
break A}r=!1
break A}return r},
jI(a,b){var s=this,r=A.y(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.U(new A.qG(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.y(a,"span",null,b.b)))
return r},
j2(a,b,c,d,e){var s,r,q=this,p=A.y(a,"label","setting-row",null),o=A.y(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.A(e)
n.max=A.A(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.y(a,"output",null,"100%")
n.addEventListener("input",A.U(new A.qF(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aM(e,d))
return p},
ec(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kL
r=B.c.F(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aH(r*100)+"%"},
sm5(a){this.r=t.DI.a(a)},
sm7(a){this.w=t.xl.a(a)},
sm6(a){this.x=t.xl.a(a)},
sm1(a){this.y=t.DI.a(a)},
sm4(a){this.z=t.xl.a(a)},
smf(a){this.Q=t.xl.a(a)},
sma(a){this.as=t.Ci.a(a)},
sm9(a){this.at=t.Z.a(a)},
sb5(a){this.ax=t.Z.a(a)},
slT(a){this.ay=t.kC.a(a)},
sm2(a){this.ch=t.hq.a(a)},
slS(a){this.CW=t.Cv.a(a)},
sm8(a){this.cx=t.Z.a(a)}}
A.qH.prototype={
$1(a){t.gl.a(a)
return a.d===B.O&&this.a.eT(a)},
$S:19}
A.qI.prototype={
$1(a){t.gl.a(a)
return a.d===B.ae&&this.a.eT(a)},
$S:19}
A.qJ.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.qK.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.qL.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:0}
A.qz.prototype={
$1(a){var s=this.a,r=s.k4,q=A.eE(A.q(this.b.value))
r=r.l1(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qA.prototype={
$1(a){var s=this.a,r=s.k4.kW(B.a.ah(B.bg,new A.qy(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qy.prototype={
$1(a){return t.mq.a(a).b===A.q(this.a.value)},
$S:34}
A.qB.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qj.prototype={
$1(a){var s,r=A.O(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.kS(r)
break A}if("photosensitivitySafe"===p){s=q.k4.kQ(r)
break A}if("captions"===p){s=q.k4.kx(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.qC.prototype={
$1(a){var s=this.a,r=s.k3.kA(A.O(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qD.prototype={
$1(a){var s=this.a,r=s.k3.kY(A.O(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qE.prototype={
$1(a){var s=this.a,r=s.k3.kZ(A.O(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qx.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.kK(B.a.ah(B.bf,new A.qp(r.c)))
break A}if("promptDensity"===p){s=q.k3.kR(B.a.ah(B.bj,new A.qq(r.c)))
break A}if("textPacing"===p){s=q.k3.l_(B.a.ah(B.bh,new A.qr(r.c)))
break A}if("journalLayout"===p){s=q.k3.kN(B.a.ah(B.ba,new A.qs(r.c)))
break A}if("confirmations"===p){s=q.k3.kz(B.a.ah(B.b4,new A.qt(r.c)))
break A}if("saveFeedback"===p){s=q.k3.kV(B.a.ah(B.bb,new A.qu(r.c)))
break A}if("clockFormat"===p){s=q.k3.ky(B.a.ah(B.b7,new A.qv(r.c)))
break A}s=q.k3.kG(B.a.ah(B.aA,new A.qw(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.qp.prototype={
$1(a){return t.bK.a(a).b===A.q(this.a.value)},
$S:125}
A.qq.prototype={
$1(a){return t.dn.a(a).b===A.q(this.a.value)},
$S:126}
A.qr.prototype={
$1(a){return t.j_.a(a).b===A.q(this.a.value)},
$S:127}
A.qs.prototype={
$1(a){return t.gm.a(a).b===A.q(this.a.value)},
$S:128}
A.qt.prototype={
$1(a){return t.aJ.a(a).b===A.q(this.a.value)},
$S:129}
A.qu.prototype={
$1(a){return t.mx.a(a).b===A.q(this.a.value)},
$S:130}
A.qv.prototype={
$1(a){return t.vS.a(a).b===A.q(this.a.value)},
$S:131}
A.qw.prototype={
$1(a){return t.x.a(a).b===A.q(this.a.value)},
$S:40}
A.qo.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.kO(B.a.ah(B.be,new A.qk(r.c)))
break A}if("dynamicRange"===o){s=p.kE(B.a.ah(B.b9,new A.ql(r.c)))
break A}if("reverb"===o){s=p.kU(B.a.ah(B.b8,new A.qm(r.c)))
break A}s=p.kD(B.a.ah(B.b6,new A.qn(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qk.prototype={
$1(a){return t.xs.a(a).b===A.q(this.a.value)},
$S:133}
A.ql.prototype={
$1(a){return t.EL.a(a).b===A.q(this.a.value)},
$S:134}
A.qm.prototype={
$1(a){return t.gc.a(a).b===A.q(this.a.value)},
$S:135}
A.qn.prototype={
$1(a){return t.ul.a(a).b===A.q(this.a.value)},
$S:136}
A.qG.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.O(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.O(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.O(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.O(r.c.checked))
break}},
$S:1}
A.qF.prototype={
$1(a){var s,r,q=this,p=A.eE(A.q(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aH(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bw.prototype={
v(){return"SettingCategory."+this.b}}
A.i3.prototype={
v(){return"SettingKind."+this.b}}
A.aX.prototype={
cU(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.a1(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.a1(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bo(a))throw A.b(A.a1(r.a+" must be boolean",q,q))
break}}}
A.qO.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:19}
A.qP.prototype={
$0(){return A.i(A.l("unknown setting: "+this.a))},
$S:6}
A.qM.prototype={
i7(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gL(),r=r.gu(r);r.m();){s=r.gn()
A.qN(s.a).cU(s.b)}},
ci(a){var s=this.b.h(0,a)
return s==null?A.i(A.l("setting missing from profile: "+a)):s},
B(){return A.H(["version",this.a,"values",this.b],t.N,t.K)}}
A.qQ.prototype={
mu(a){var s,r,q=A.eA(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.ds(q,1)
this.jx(a)},
B(){return A.H(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jx(a){var s,r,q=A.eA(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.ds(q,1)}}
A.qY.prototype={
i8(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.y(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.y(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.y(a,"div","entry-picker",null)
for(r=A.tz,q=0;q<2;++q){p=B.cP[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cV[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.qZ(this,p,m)
if(typeof k=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.h8()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
sme(a){this.f=t.nf.a(a)}}
A.qZ.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:1}
A.cp.prototype={
gG(){return this.a},
gag(){return this.b},
gaN(){return this.c}}
A.mq.prototype={
mJ(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.E(s)
q=new A.P(s,r.i("f(1)").a(new A.ms()),r.i("P<1,f>")).br(0)
r=this.b
r.M(0)
s=J.xn(a,t.N)
p=s.$ti
r.J(0,new A.F(s,p.i("k(m.E)").a(q.gar(q)),p.i("F<m.E>")))},
lj(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.ms.prototype={
$1(a){return t.bC.a(a).a},
$S:137}
A.mr.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.H(r,s):B.d.H(a.c,b.c)},
$S:138}
A.l1.prototype={
gc2(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
lJ(a){return this.c.q(0,t.L.a(a))},
dX(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a8(0,g.gkv())||!a.a.a8(0,new A.rw(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eV(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aI){m=s.d
if(m<o.length){n=n===B.a4
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.a8}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.W(l.f,new A.rx(s))
else k=!1
if(k)return!1
j=new A.l0(r,g,A.ah(o,t.AP),B.a4)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.M(0)
g.J(0,a.a)
g=i.c
g.M(0)
g.J(0,h)
i.r=j
return!0},
fv(a){var s=this.a,r=A.o(s).i("ae<1>"),q=r.i("F<m.E>")
s=A.L(new A.F(new A.ae(s,r),r.i("k(m.E)").a(new A.rr(a)),q),q.i("m.E"))
B.a.O(s,new A.rs())
return s},
bZ(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mZ
s=m.a.h(0,a)
if(s==null)return B.n_
r=B.d.a3(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bO:B.am
o=p===B.am&&m.x.q(0,q)&&s.P(B.bP)?B.bP:p
if(s.P(o))n=o
else n=s.P(B.am)?B.am:B.bO
r=s.h(0,n)
r.toString
m.r=new A.l0(a,n,A.ah(m.eV(a,n,r),t.AP),B.a4)
m.gc2()
r=m.r
r.toString
return new A.l_(r)},
kq(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dV
if(n.d!==B.a4)return B.mX
n.e=a
s=a===B.a8
n.d=s?B.aI:B.ak
r=this.f
q=s?B.dT:B.mF
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dy(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dy(B.mI,o,p,a,null))
if(s)this.f5(n)
return new A.kY(n)},
k_(){var s,r=this.r
if(r==null)return B.dV
s=r.d
if(s!==B.ak&&s!==B.al)return B.mY
if(this.gc2()!=null&&r.w==null)return new A.b6(new A.bj(B.a5,"The visitor is waiting for an answer."))
r.d=B.al
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aI
this.f5(r)
return new A.ie(r,!0)}return new A.ie(r,!1)},
kr(a){var s,r,q=this.r,p=this.gc2(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ak&&o!==B.al}if(o)return B.mW
o=p.f
s=A.E(o)
r=A.bE(new A.F(o,s.i("k(1)").a(new A.ru(a)),s.i("F<1>")),t.Y)
if(r==null)return B.n0
q.w=r.a
return new A.kZ(q,p,r)},
ks(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ak&&s!==B.al}else s=!0
if(s)return i
r=h.gbc()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cU
p=J.M(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.br(q,s,s)
m=c.jq(!0,!0,o,new A.rE(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aJ){B.a.l(this.f,new A.dy(B.mH,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.eA(B.a.gY(j.c).a,s,s)
s.J(0,q)
p.jX(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dW)if(k===B.bQ){s=n.b
s=s.gX(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dy(B.mG,o,p.b,i,l))}}return m},
f5(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eV(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.M(c);r.m();)s.push(this.j4(a,b,r.gn()))
return s},
j4(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.E(p)
s=A.bE(new A.F(p,r.i("k(1)").a(new A.rp(this)),r.i("F<1>")),t.aS)}return s==null?c:new A.bZ(q,s.c,c.c)},
shQ(a){this.x=t.P.a(a)}}
A.rw.prototype={
$1(a){var s=this.a.a
return new A.ae(s,A.o(s).i("ae<1>")).W(0,new A.rv(A.q(a)))},
$S:3}
A.rv.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:16}
A.rx.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:14}
A.rr.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:16}
A.rs.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.H(a.c,b.c)
return s!==0?s:B.d.H(a.d,b.d)},
$S:140}
A.ru.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.rt.prototype={
$0(){return A.c([],t.jV)},
$S:141}
A.rp.prototype={
$1(a){return t.aS.a(a).d.gL().a8(0,new A.ro(this.a))},
$S:142}
A.ro.prototype={
$1(a){t.q.a(a)
return this.a.y.aM(a.a,a.b)},
$S:143}
A.rq.prototype={
$2(a,b){var s=t.AP
return B.d.H(s.a(a).a,s.a(b).a)},
$S:144}
A.l2.prototype={}
A.ly.prototype={}
A.uN.prototype={
$1(a){return B.b.T(A.q(a),"off.")},
$S:3}
A.bD.prototype={
v(){return"DoorChoice."+this.b}}
A.bX.prototype={
v(){return"VisitPhase."+this.b}}
A.bY.prototype={
v(){return"VisitTier."+this.b}}
A.e6.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dy.prototype={
B(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q},
gag(){return this.c}}
A.d_.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bj.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.bj&&b.a===this.a&&b.b===this.b},
gN(a){return A.cz(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bZ.prototype={
a5(a,b){if(b==null)return!1
return b instanceof A.bZ&&b.a===this.a&&b.b===this.b},
gN(a){return A.cz(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bK.prototype={
a5(a,b){var s=this
if(b==null)return!1
return b instanceof A.bK&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gN(a){var s=this
return A.cz(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.H(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gag(){return this.b},
gaN(){return this.c}}
A.l3.prototype={
B(){var s,r,q,p=this.a
p=A.L(p,A.o(p).c)
B.a.V(p)
s=this.b
r=A.o(s)
q=r.i("dd<1,W<f,@>>")
s=A.L(new A.dd(s,r.i("W<f,@>(1)").a(new A.rn()),q),q.i("m.E"))
r=this.c
return A.H(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rn.prototype={
$1(a){return t.L.a(a).B()},
$S:145}
A.j9.prototype={
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
A.mn.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:146}
A.mo.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:147}
A.mp.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:148}
A.l0.prototype={
gbc(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.ry.prototype={}
A.b6.prototype={}
A.l_.prototype={}
A.kY.prototype={}
A.ie.prototype={}
A.kZ.prototype={}
A.fQ.prototype={}
A.lB.prototype={
gbD(){var s,r=this.y1
if(r){s=this.w
s===$&&A.p()
s=s.a.b}else s="safe"
return A.Ch("pixeldart",r?this.gkk():B.jn,!1,null,s)},
gkk(){var s,r
if(!this.y1)return B.m
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.ex.kl(s,r)},
glw(){var s="shadowCaster",r=this.RG
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.h_(s).a+";shadowTriangles="+r.h_(s).b+";frameMs="+B.c.aI(this.rx,3)},
glv(){var s=this.RG
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.rx<=100},
ml(){var s,r=this
if(!r.y1||r.dG!=null)return
if(r.p2==null)return
s=r.e
s===$&&A.p()
s.gb1()
r.f===$&&A.p()
r.dG=new A.nx(new A.ny(A.c([],t.s6),A.c([],t.s3),A.c([],t.AO)))},
c8(){var s,r,q,p,o,n,m,l=this,k=A.CK(l.a)
l.d=k
k=k.h5()
l.r=k
k=B.c3.hm(k)
l.w=k
q=l.b
p=l.c
s=new A.kO(q,p,q,p)
o=A.yd(l.d)
l.e=o
try{o.fT(l.iF(k,q,p),s)}catch(n){r=A.as(n)
k=l.w
if(k===B.ac)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.A(r)
l.w=B.ac
k=A.yd(l.d)
k.fT(B.lc,s)
l.e=k}k=l.e
k.bS()
m=A.Cg(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c4=l.b
l.c5=l.c
l.eH()
l.lq=A.BZ(!0,!0,!0)
l.y1=!0},
bg(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.w("Pixeldart surface size must be positive",null))
if(!r.y1){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c6!==a||r.c7!==b)r.c7=r.c6=null
s=r.e
s===$&&A.p()
s.bS()
new A.kO(a,b,a,b).C()
if(r.y2==null)r.y2=r.bR()},
bR(){var s=0,r=A.c5(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bR=A.c7(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.c4
h=n.b
if(!(i!==h||n.c5!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.e(m)
s=8
return A.aN(A.ug(i,B.c6.fB("auto","full","srgb",h,"auto","profile",A.e(l),g)),$async$bR)
case 8:n.c4=m
n.c5=l
n.c7=n.c6=null
A.j3()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.as(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.A(k)
n.c6=n.b
n.c7=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.y2=null
i=n.c6
h=n.b
j=i===h&&n.c7===n.c
if(!j)i=n.c4!==h||n.c5!==n.c
else i=!1
if(i)n.y2=n.bR()
s=o.pop()
break
case 5:return A.c3(null,r)
case 1:return A.c2(p.at(-1),r)}})
return A.c4($async$bR,r)},
eE(a,b,c,d,e,f,g,h){return B.c6.fB(d,e,f,a,g,h,c,b)},
iF(a,b,c){return this.eE(a,b,c,"auto","full","srgb","auto","profile")},
eH(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.a_===s
if(p){r=7
break A}if(B.N===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.N===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.i(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.oW(r,p,A.a3(q),A.a3(q),A.n(q,t.i))},
cE(a){var s=0,r=A.c5(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cE=A.c7(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.y1){s=1
break}switch(a.b.a){case 0:i=B.dq
break
case 2:i=B.ac
break
case 1:i=B.dp
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
k=n.eE(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.p()
s=7
return A.aN(A.ug(i,t.lg.a(k)),$async$cE)
case 7:n.w=t.xK.a(m)
n.eH()
n.c4=n.b
n.c5=n.c
n.x=null
A.j3()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.as(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.A(j)
A.j3()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.c3(q,r)
case 2:return A.c2(o.at(-1),r)}})
return A.c4($async$cE,r)},
k9(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.y1||b4.Q.length!==0)return
b4.lr=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.k(0,b6,r.gb1().dT(8,"texture:wall-plaster",!0,256,B.aZ,256))
s.k(0,b7,b4.e.gb1().dT(8,"texture:grime",!0,512,B.aZ,512))
for(q=0;q<2;++q){p=B.jt[q]
r=b4.e.w
if(r==null)r=A.i(A.l(b8))
s.k(0,p,r.dT(8,"texture:"+p,!0,256,B.aZ,256))}b4.dr()
b4.cz()
b4.p2=b4.ju(A.p8(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.v)(r),++q){i=r[q]
h=A.n(l,j)
for(g=A.H(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cv(g,g.r,g.e,A.o(g).i("cv<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bk.h(0,c)
if(b==null)A.i(A.l("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.p8(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.i(A.l(b8))
if(a0.x)A.i(A.l(b9))
c.C()
a1=a0.b.a.aE(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.iS[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dl(a2)
j=b4.dl(a2)
l=A.p8(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dl(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.i(A.l(b8)):j
if(n.x)A.i(A.l(b9))
l.C()
a1=n.b.a.aE(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.cz()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.v)(r),++q)b4.j0(c0,r[q])
b4.jr(c0)
$.G.j().setAttribute("data-renderer-house-model-scale",B.c.aI(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.v)(r),++q){a4=r[q]
if(a4.at==null)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eK(c0,i,a4)
g=b4.e.w
if(g==null)g=A.i(A.l(b8))
f=a4.a
if(g.x)A.i(A.l(b9))
e=g.a
a5.C()
a1=e.b.aE(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bl(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.p2
e.toString}a6=new A.bH(a1,e,B.t,0,B.a9,B.ap,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.t.C()
a=e.a
a0=a.$ti
a.a2(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.t.ab()
c=c.gaw()
a0=A.E(c)
A.bq(new A.P(c,a0.i("K(1)").a(a.gaC()),a0.i("P<1,K>")))
n.k(0,f,new A.iy(f,g,e.b.cI(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.v)(r),++q){a4=r[q]
if(a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.jn(i,a4.aF(f),a4.ai(f),a4.ai(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.tg(a4))
a=b4.e.w
if(a==null)a=A.i(A.l(b8))
if(a.x)A.i(A.l(b9))
a0=a.a
e.C()
a1=a0.b.aE(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bl(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.p2
e.toString}else e=a
a8=new A.bH(a1,e,B.t,0,B.a9,B.ap,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.t.C()
a=e.a
a0=a.$ti
a.a2(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.t.ab()
a=a.gaw()
a7=A.E(a)
A.bq(new A.P(a,a7.i("K(1)").a(a0.gaC()),a7.i("P<1,K>")))
B.a.l(o,new A.lA(f,e.b.cI(a8),a8,c))}for(r=A.G9(A.Fz(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.v)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.di(e)
a0=b4.di(e)
a=A.p8(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.di(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.i(A.l(b8)):a0
if(c.x)A.i(A.l(b9))
a.C()
a1=c.b.a.aE(a,b5)
c.r.l(0,a1)
k.k(0,a.a,a)
f.k(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.i(A.l(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.i(A.l(b9))
a7=c.a
a.C()
a1=a7.b.aE(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bl(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ad.q(0,a0))A.i(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bH(a1,b,B.t,-1,B.a9,B.ap,B.lB.q(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.p()
B.t.C()
c=e.a
a=c.$ti
c.a2(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.t.ab()
c=c.gaw()
a0=A.E(c)
A.bq(new A.P(c,a0.i("K(1)").a(a.gaC()),a0.i("P<1,K>")))
j.k(0,b2,e.b.cI(b3))}b4.ml()},
hz(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aT([s],r)
for(p=c1.aP(s),o=J.M(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.cM(s)
if(n.ax)n=!n.ay
else n=!1
if(n&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.I(b9,A.o(b9).i("I<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.bc(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=b8.bX(i[f],k)
d=b8.f
d===$&&A.p()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a2(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.ab()
a=a.gaw()
a0=A.E(a)
A.bq(new A.P(a,a0.i("K(1)").a(b.gaC()),a0.i("P<1,K>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a2(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb4(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.v)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.p()
o=b8.bX(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a2(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ab()
i=i.gaw()
g=A.E(i)
A.bq(new A.P(i,g.i("K(1)").a(n.gaC()),g.i("P<1,K>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a2(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb4(o)}b9=b8.fr
s=A.o(b9).i("ae<1>")
s=A.L(new A.ae(b9,s),s.i("m.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.v)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bX(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.p()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a2(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.ab()
g=g.gaw()
d=A.E(g)
A.bq(new A.P(g,d.i("K(1)").a(i.gaC()),d.i("P<1,K>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a2(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb4(e)
b9.k(0,a5.a,a5.kB(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.p()
i=b8.bX(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a2(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.d(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.ab()
d=d.gaw()
c=A.E(d)
A.bq(new A.P(d,c.i("K(1)").a(g.gaC()),c.i("P<1,K>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a2(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb4(i)}a9=new A.jE().kp(c2)
b9=$.G.j()
s=A.L(a9,A.o(a9).c)
B.a.V(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.Z(s,","))
b9=b8.dx
r=new A.jE().fJ(new A.th(b8),new A.ae(b9,A.o(b9).i("ae<1>")),a9,r)
b0=A.fw(r,r.$ti.i("m.E"))
b9=b8.db
s=A.o(b9).i("ae<1>")
s=A.L(new A.ae(b9,s),s.i("m.E"))
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
e=b8.bX(a8,b6?-1:0)
o=b8.f
o===$&&A.p()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a2(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ab()
i=i.gaw()
g=A.E(i)
A.bq(new A.P(i,g.i("K(1)").a(n.gaC()),g.i("P<1,K>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a2(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb4(e)
b9.k(0,b4,e)}$.G.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.G.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("dd<1,f>")
b7=A.L(new A.dd(b0,b9.i("f(1)").a(new A.ti(b8)),s),s.i("m.E"))
B.a.V(b7)
$.G.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.Z(b7,","))},
cS(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.y1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.f7(b0,n)
l=J.bc(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.i(A.l(a8))
c=a7.eW(e.b)
b=g.b
if(d.x)A.i(A.l(a9))
a=d.a
c.C()
a0=a.b.aE(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bl(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bH(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.p()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a2(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ab()
b=b.gaw()
a3=A.E(b)
A.bq(new A.P(b,a3.i("K(1)").a(d.gaC()),a3.i("P<1,K>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a2(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb4(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.aa(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.i(A.l(a8)):a
if(d.x)A.i(A.l(a9))
d.a.bq(a6)
d.f.aa(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.G.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fI+1));++a7.fI},
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
m=p.gb1().mp(k.eK(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bH(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.jT(l)
p.b.e1(n,l)
s.k(0,b,r.fF(l,m))
s=k.y
n=r.d
B.a.aa(s,n)
B.a.l(s,m)
k.e.gb1().mq(n)},
hp(d2,d3,d4,d5,d6,d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="time_override",c5="wetness_override",c6="fog_density",c7="fog_height_falloff",c8="rain_override",c9=A.aT([d3],t.N),d0=d2.e,d1=d0.h(0,d3)
if(d1!=null)for(s=d1.a,r=d2.aP(s),q=J.M(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.cM(s)
if(p.ax)p=!p.ay
else p=!1
if(p&&o!=null&&d0.h(0,o)!=null)c9.l(0,o)}n=new A.op(d2).mV(c9,d4)
d0=t.jC
m=A.c([],d0)
l=A.c([],d0)
for(k=0;k<n.length;++k){j=n[k]
d0=k===0
s=d0?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.i(A.ag(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.i(A.ag(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.i(A.ag(p,"radius","must be finite and > 0"))
d0=d0?l:m
B.a.l(d0,new A.aR(k,s,j.a,new A.j((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d0=c3.fx
d0===$&&A.p()
i=d0.mm(d4,m,l)
d0=A.n(t.S,t.A_)
for(k=0;k<n.length;++k)d0.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.v)(r),++h){g=r[h]
p=g.a
f=d0.h(0,p).a
e=g.d
s.push(new A.km(p,new A.K(f.a,f.b,f.c),new A.bS(e.a,e.b,e.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.v)(q),++h){g=q[h]
f=g.a
e=d0.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.by(f,new A.K(d.a,d.b,d.c),new A.K(e.a,e.b,e.c),new A.bS(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c3.ir(i,++c3.fy)
d0=$.hc()
b=d0.E(c4)
if(b>=0)a=B.c.F(b,0,23.999)
else a=d9
a0=d7.c
a1=B.c.S(B.c.S(a,24)+24,24)
a2=B.c.F(a0,0,1)
a3=B.c.F(d7.d,6,16)/2
a4=13-a3
a5=13+a3
q=a1>=a4
a6=q&&a1<=a5?Math.sin(3.141592653589793*((a1-a4)/(a5-a4)))*65:-18
a7=a6*3.141592653589793/180
a8=(90+a1/24*360)*3.141592653589793/180
p=Math.cos(a8)*Math.cos(a7)
f=B.c.F(Math.sin(a7),0,1)
e=Math.sin(a8)*Math.cos(a7)
d=B.c.F(1-f,0.1,0.9)
c=a4-1.5
if(a1>=c&&a1<a4){a9=(a1-c)/1.5
b0=A.ca(B.kQ,B.bt,a9)
b1=A.ca(B.kS,B.bs,a9)
b2=A.ca(B.kM,B.bu,a9)
b3=0.3+0.5*a9
b4=0.25+0.2*a9}else if(q&&a1<14){b0=B.bt
b1=B.bs
b2=B.bu
b3=0.85
b4=0.45}else if(a1>=14&&a1<a5){a9=(a1-14)/(a5-14)
b0=A.ca(B.bt,B.dr,a9)
b1=A.ca(B.bs,B.du,a9)
b2=A.ca(B.bu,B.dt,a9)
b3=0.85*(1-a9*0.35)
b4=0.45*(1-a9*0.25)}else if(a1>=a5&&a1<a5+1.5){a9=(a1-a5)/1.5
b0=A.ca(B.dr,B.aC,a9)
b1=A.ca(B.du,B.aB,a9)
b2=A.ca(B.dt,B.aD,a9)
b3=0.55*(1-a9*0.8)
b4=0.34*(1-a9*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){a9=(a1-q)/1.5
b0=A.ca(B.aC,B.aC,a9)
b1=A.ca(B.aB,B.aB,a9)
b2=A.ca(B.aD,B.aD,a9)
b3=0.11*(1-a9*0.25)
b4=0.16*(1-a9*0.15)}else{b0=B.aC
b1=B.aB
b2=B.aD
b3=0.15
b4=0.18}}if(a2>0){b5=A.ca(b2,B.l_,a2*0.7)
b3*=1-a2*0.35
b4*=1-a2*0.15}else b5=b2
b6=d8?1:0.15
B.c.F(a2*0.75+B.c.F(0.3333333333333333,0,1)*0.25,0,1)
q=$.AD().a
q.k(0,"pbrRoughnessScale",d0.E("pbr_roughness"))
q.k(0,"pbrMetallicScale",d0.E("pbr_metallic"))
q.k(0,"pbrSpecularMult",d0.E("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d0.E("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d0.E("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d0.E("light_ambient_mult"))
q.k(0,"directLightScale",d0.E("light_direct_mult"))
q.k(0,"ssdoEnabled",d0.aR("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d0.E("shadow_ao_intensity"))
q.k(0,"csmEnabled",d0.aR("shadow_csm_enable"))
q.k(0,"csmHardness",d0.E("shadow_csm_hardness"))
q.k(0,"shadowBias",d0.E("shadow_bias"))
q.k(0,"weatheringEnabled",d0.aR("weathering_enable"))
q.k(0,"normalBumpStrength",d0.E("normal_bump_strength"))
q.k(0,"grimeAccumulation",d0.E("grime_accumulation"))
q.k(0,"wetnessOverride",d0.E(c5))
q.k(0,"fogEnabled",d0.aR("fog_enable"))
q.k(0,"fogDensity",d0.E(c6))
q.k(0,"fogHeightFalloff",d0.E(c7))
q.k(0,"volumetricEnabled",d0.aR("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d0.E("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d0.E("volumetric_scattering"))
q.k(0,"ssrEnabled",d0.aR("ssr_enable"))
q.k(0,"tonemapMode",B.c.ad(d0.E("tonemap_mode")))
q.k(0,"ssssEnabled",d0.aR("ssss_enable"))
q.k(0,"taaEnabled",d0.aR("taa_enable"))
q.k(0,"lensFlareEnabled",d0.aR("lens_flare_enable"))
q.k(0,"timeOverride",d0.E(c4))
q.k(0,"rainOverride",d0.E(c8))
q.k(0,"postBloom",d0.E("post_bloom"))
q.k(0,"postVignette",d0.E("post_vignette"))
q.k(0,"postChromaticAberration",d0.E("post_chromatic_aberration"))
q.k(0,"postFilmGrain",d0.E("post_film_grain"))
q.k(0,"postExposure",d0.E("post_exposure"))
q.k(0,"postSaturation",d0.E("post_saturation"))
q.k(0,"postBloomThreshold",d0.E("post_bloom_threshold"))
q.k(0,"postDither",d0.E("post_dither"))
q.k(0,"postDepthOfField",d0.E("post_depth_of_field"))
q.k(0,"postColorGrade",d0.E("post_color_grade"))
q.k(0,"postAffineWarp",d0.E("post_affine_warp"))
q.k(0,"postVertexSnap",d0.E("post_vertex_snap"))
q.k(0,"postQuantizationBits",B.c.ad(d0.E("post_quantization_bits")))
q.k(0,"postVhsChroma",d0.E("post_vhs_chroma"))
q.k(0,"postVhsNoise",d0.E("post_vhs_noise"))
q.k(0,"contactLightBoost",d0.E("light_contact_boost"))
q.k(0,"debugViewMode",d0.e.b)
$.G.j().setAttribute("data-renderer-shader-overrides",B.j.a7(q,null))
if(d0.E(c8)>=0)a0=d0.E(c8)
if(d0.E(c5)>=0)d0.E(c5)
q=$.AC()
q.mS(0.0166,a0)
b7=q.f
b8=B.c.F(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b9=b8>0.001
c0=b9?new A.K(p,f,e):new A.K(-p,d,-e)
c1=b9?new A.bS(b0.c,b0.b,b0.a):new A.bS(0.35,0.45,0.65)
q=b7.a
if(q){p=b7.b
c2=new A.bS(c1.a+b7.c*p*2,c1.b+b7.d*p*2,c1.c+b7.e*p*2.5)}else c2=c1
b3*=b6
if(q)b3+=b7.b*4.5
q=Math.max(0.045,b4*(b9?b8:1)*b6)
c3.p4=new A.jI(B.ih,new A.bS(b5.c*0.08,b5.b*0.08,b5.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),d0.E(c7),d0.E(c6),new A.bS(b1.c,b1.b,b1.a),q,new A.nl(c0,c2,b3),s,r)},
bv(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1)throw A.b(A.l("Pixeldart runtime is not initialized"))
s=i.p3
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dl(s)
s=$.xh()
q=s.b
p=s.c
o=A.vX(i.b/i.c,p,s.a,q)
p=new A.fe(r,o,o.al(0,r),B.ai,B.mq,q,p,i.b/i.c)
s=p}q=i.p4
p=i.R8
n=i.x2++
m=i.ry
l=new A.r_()
$.xc()
k=$.pO.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.p()
j=i.f
j===$&&A.p()
k.kc(j,new A.nG(s,q,p,n,m))
i.RG=i.e.lm()
s=$.pO.$0()
l.b=s
i.rx=l.glk()/1000},
f7(a,b){var s=A.FA(a,b),r=A.Fy(a,b),q=A.L(s.c,t.i)
B.a.J(q,r)
return A.c([new A.fQ("wall",new Float32Array(A.a_(q))),new A.fQ("floor",s.a),new A.fQ("ceiling",s.b)],t.pv)},
eW(a){var s,r,q,p,o,n=A.c([],t.fG)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.K(q,p,a[o]))}if(n.length===0)throw A.b(A.l("house surface mesh cannot be empty"))
return new A.cy(B.as,a,null,A.bq(n))},
j0(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f7(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.l("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.i(A.l("renderer is not initialized"))
j=b.eW(l.b)
i=l.a
if(k.x)A.i(A.l("resource library is disposed"))
h=k.a
j.C()
g=h.b.aE(j,n+i)
f=g.a
h.c.k(0,f,h.bl(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bH(g,i,B.t,-1,B.a9,B.ap,!0,!0,0,null)
i=b.f
i===$&&A.p()
B.t.C()
k=i.a
j=k.$ti
k.a2(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.t.ab()
k=k.gaw()
h=A.E(k)
A.bq(new A.P(k,h.i("K(1)").a(j.gaC()),h.i("P<1,K>")))
c=i.b.cI(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gU(r))
if(q.length!==0)b.at.k(0,a0,B.a.gU(q))},
jr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.v)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.H(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cv(l,l.r,l.e,A.o(l).i("cv<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bk.h(0,i)
if(h==null)A.i(A.l("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.V(d)
f=$.G.j()
B.a.V(e)
f.setAttribute("data-renderer-house-materials",B.a.Z(e,","))
$.G.j().setAttribute("data-renderer-house-surface-bindings",B.a.Z(d,","))},
di(a){var s
A:{if(0===a){s=B.kN
break A}if(1===a){s=B.kP
break A}if(2===a){s=B.kV
break A}if(3===a){s=B.l2
break A}if(4===a){s=B.l3
break A}if(5===a){s=B.kT
break A}if(6===a){s=B.l1
break A}if(7===a){s=B.kY
break A}s=B.l0
break A}return s},
dl(a){var s
A:{if("architecture"===a){s=B.kO
break A}if("furniture"===a){s=B.ds
break A}if("fixture"===a){s=B.kX
break A}if("service"===a){s=B.kZ
break A}if("story"===a){s=B.kW
break A}if("decor"===a){s=B.kR
break A}if("micro"===a){s=B.kU
break A}s=B.ds
break A}return s},
cL(a){return this.lN(t.G.a(a))},
lN(a){var s=0,r=A.c5(t.H),q,p=this,o,n,m,l
var $async$cL=A.c7(function(b,c){if(b===1)return A.c2(c,r)
for(;;)switch(s){case 0:if(!p.y1){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.iv[n]
l=a.h(0,m)
if(l!=null)o.push(p.cv(m,l))}s=3
return A.aN(A.nM(o,t.H),$async$cL)
case 3:case 1:return A.c3(q,r)}})
return A.c4($async$cL,r)},
cv(a,b){return this.j5(a,b)},
j5(a,b){var s=0,r=A.c5(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cv=A.c7(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.aN(A.d7(A.a(m.decode()),t.X),$async$cv)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.e(m.naturalWidth)
g.height=A.e(m.naturalHeight)
l=g
k=A.D(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.e(m.naturalWidth),A.e(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gb1()
f=new Uint8Array(A.a_(j))
if(h.x)A.i(A.l("resource library is disposed"))
h.c.mT(d,f)
h=n.e.gb1()
if(h.x)A.i(A.l("resource library is disposed"))
h.c.lu(d)
$.G.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dr()
n.cz()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.as(c)
h=$.G.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dr()
n.cz()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.A(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.c3(q,r)
case 2:return A.c2(o.at(-1),r)}})
return A.c4($async$cv,r)},
dr(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1||i.k1.a===0)return
s=i.k1
r=A.o(s).i("I<1,2>")
r=A.k5(new A.I(s,r),r.i("bJ(m.E)").a(new A.tc()),r.i("m.E"),t.jP)
q=A.L(r,A.o(r).i("m.E"))
s=i.e
s===$&&A.p()
p=s.gb1().gfg().cQ(q)
s=p.a
o=A.c(s.slice(0),A.E(s))
B.a.O(o,new A.td())
s=A.E(o)
r=s.i("f(1)")
s=s.i("P<1,f>")
n=new A.P(o,r.a(new A.te()),s).Z(0,",")
m=new A.P(o,r.a(new A.tf()),s).Z(0,",")
s=p.cC(B.dK)
r=p.cC(B.dL)
l=p.cC(B.dM)
k=p.cC(B.dN);++i.xr
j=$.G.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.xr)
if(!A.O($.G.j().hasAttribute("data-renderer-texture-residency-initial")))$.G.j().setAttribute("data-renderer-texture-residency-initial",n)},
cz(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.y1||j.p1.a===0)return
s=A.c([],t.a6)
for(r=j.p1,r=new A.I(r,A.o(r).i("I<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cR(p,o,B.b.q(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gb1()
n=r.e
if(n===$){p=r.gfg()
r.e!==$&&A.x6()
n=r.e=new A.p9(p)}m=n.cQ(s)
s=m.a
l=A.c(s.slice(0),A.E(s))
B.a.O(l,new A.ta())
s=A.E(l)
k=new A.P(l,s.i("f(1)").a(new A.tb()),s.i("P<1,f>")).Z(0,",")
s=$.G.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cs(B.bm)+";pending="+m.cs(B.d6)+";missing="+m.cs(B.d7)+";evicted="+m.cs(B.d8))},
bX(a,b){return new A.bH(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eK(a,b,c){var s,r,q,p,o,n=A.Fx(a,b,c),m=n.length
if(m===0)throw A.b(A.l("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.fG)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.K(q,p,n[o]))}return new A.cy(B.as,n,null,A.bq(s))},
jn(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Z.j().aA(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.du(new Float32Array(5376))
o.bp(k[0],k[1],k[2],k[3],g)
n=B.y.b2(o.a,0,o.b)
k=A.c([],t.fG)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.K(r,q,n[p]))}return new A.cy(B.as,n,null,A.bq(k))},
ir(a,b){var s,r,q,p=a.e,o=A.o(p).i("I<1,2>"),n=A.L(new A.I(p,o),o.i("m.E"))
B.a.O(n,new A.t6())
p=$.G.j()
o=a.a
s=A.E(o)
r=a.c
q=A.E(r)
p.setAttribute("data-renderer-light-selection","points="+new A.P(o,s.i("h(1)").a(new A.t7()),s.i("P<1,h>")).Z(0,":")+";spots="+new A.P(r,q.i("h(1)").a(new A.t8()),q.i("P<1,h>")).Z(0,":"))
q=A.E(n)
p.setAttribute("data-renderer-light-rejections",new A.P(n,q.i("f(1)").a(new A.t9()),q.i("P<1,f>")).Z(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
ju(a){var s,r=this.e
r===$&&A.p()
r=r.gb1()
if(r.x)A.i(A.l("resource library is disposed"))
a.C()
s=r.b.a.aE(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iCi:1}
A.tg.prototype={
$0(){var s=this.a
if(s.ax)s=!s.ay
else s=!1
return!s},
$S:42}
A.th.prototype={
$1(a){var s=this.a.dx.h(0,A.q(a))
s.toString
return s},
$S:20}
A.ti.prototype={
$1(a){var s,r,q,p
A.q(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.l("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:20}
A.tc.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bJ(s,a.b,r)},
$S:150}
A.td.prototype={
$2(a,b){var s=t.h
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:151}
A.te.prototype={
$1(a){t.h.a(a)
return a.a.a+"="+a.b.b},
$S:43}
A.tf.prototype={
$1(a){var s=t.h.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:43}
A.ta.prototype={
$2(a,b){var s=t.wl
return B.b.H(s.a(a).a.a,s.a(b).a.a)},
$S:153}
A.tb.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:154}
A.t6.prototype={
$2(a,b){var s=t.ou
return B.d.H(s.a(a).a,s.a(b).a)},
$S:155}
A.t7.prototype={
$1(a){return t.p.a(a).a},
$S:44}
A.t8.prototype={
$1(a){return t.p.a(a).a},
$S:44}
A.t9.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:157}
A.lA.prototype={}
A.iy.prototype={
fF(a,b){var s=this,r=b==null?s.d:b
return new A.iy(s.a,s.b,s.c,r,a)},
kB(a){return this.fF(a,null)}}
A.rK.prototype={
gag(){return this.b},
gaN(){return this.c}}
A.tI.prototype={
$2(a,b){var s
A.wR(a,A.A(b))
switch(a){case"master":s=$.bn
if(s!=null)s.ht(b)
break
case"voice":s=$.bn
if(s!=null)s.hv(b)
break
case"effects":s=$.bn
if(s!=null)s.hs(b)
break
case"ambience":s=$.bn
if(s!=null)s.hr(b)
break
case"music":s=$.bn
if(s!=null)s.hu(b)
break}},
$S:29}
A.tJ.prototype={
$1(a){var s
A.wR("muted",""+a)
s=$.bn
if(s!=null)s.ed(a)},
$S:8}
A.tK.prototype={
$1(a){var s
A.wR("mono",""+a)
s=$.bn
if(s!=null)s.cZ(a)},
$S:8}
A.tQ.prototype={
$2(a,b){A.wS(a,A.A(b))
A.z_(a,b)},
$S:29}
A.tR.prototype={
$1(a){var s="high-contrast"
A.wS(s,""+a)
A.tw(s,a)},
$S:8}
A.tS.prototype={
$1(a){var s="strong-highlights"
A.wS(s,""+a)
A.tw(s,a)},
$S:8}
A.tT.prototype={
$1(a){$.d8().mu(a)
A.uu()
A.z1()},
$S:159}
A.tU.prototype={
$0(){var s=$.d8()
s.a=A.ds(null,1)
s.b=A.ds(null,1)
A.uu()
A.z1()},
$S:0}
A.tV.prototype={
$0(){A.dE(this.a)},
$S:0}
A.tW.prototype={
$0(){this.a.a6()},
$S:0}
A.tX.prototype={
$0(){A.dE(this.a)},
$S:0}
A.tL.prototype={
$0(){A.h0(this.a)},
$S:0}
A.tM.prototype={
$1(a){$.iY=a
A.zt()
A.wi()},
$S:160}
A.tN.prototype={
$1(a){var s=$.cH()
$.wv=a
if(!s.Q&&a.Q){$.ba.j().a=1
$.ba.j().h7(7)
$.aq.j().fQ()
$.co().M(0)}A.zv()
A.z0()},
$S:161}
A.tO.prototype={
$1(a){$.eg=a
A.wF()
A.m0()},
$S:162}
A.tP.prototype={
$0(){$.eg=B.an
$.f1.j().ea($.eg)
A.wF()
A.m0()},
$S:0}
A.tF.prototype={
$1(a){var s,r=A.A3(a,A.zi())
$.iZ=A.ft($.h9().b,a)
s=r.b
$.ef.j().cm(a,$.h9().b,s)
$.G.j().setAttribute("data-graphics-fallback",B.a.Z(s,"|"))
$.zj=A.m2(a,r,$.zj)},
$S:163}
A.tG.prototype={
$0(){A.dE($.ef.j())},
$S:0}
A.tH.prototype={
$0(){A.dE($.ef.j())},
$S:0}
A.tB.prototype={
$1(a){},
$S:15}
A.tC.prototype={
$1(a){var s,r
$.ws=a
$.a9.j().eb(a.r)
s=$.a9.j()
r=s.ch
r.a=a.f
r.dV()
s.b8()
A.zu()},
$S:164}
A.tD.prototype={
$0(){A.dE($.iQ.j())},
$S:0}
A.tE.prototype={
$0(){A.dE($.iQ.j())},
$S:0}
A.uo.prototype={
$0(){$.uD=A.O(this.a.matches)
$.wU=A.O(this.b.matches)
A.m0()},
$S:0}
A.um.prototype={
$1(a){return this.a.$0()},
$S:2}
A.un.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uV.prototype={
$1(a){var s
try{A.xD(a,this.a)
return!0}catch(s){if(A.as(s) instanceof A.B)return!1
else throw s}},
$S:165}
A.uW.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.iX.j()
break
case 5:p=$.f1.j()
break
case 1:p=$.ef.j()
break
case 4:p=$.fW.j()
break
case 2:p=$.iS.j()
break
case 3:p=$.iQ.j()
break}s=p
r=null
switch(o){case 0:r=B.kj
break
case 5:r=B.ko
break
case 1:r=B.kk
break
case 4:r=B.kn
break
case 2:r=B.kl
break
case 3:r=B.km
break}q=r
p=B.d2.h(0,a)
p.toString
A.wE(s,q,p)},
$S:166}
A.uX.prototype={
$0(){A.dE($.fY.j())},
$S:0}
A.v7.prototype={
$0(){return A.dE($.fY.j())},
$S:0}
A.vg.prototype={
$0(){$.cl.j().a6()},
$S:0}
A.vh.prototype={
$0(){$.cl.j().a6()},
$S:0}
A.vi.prototype={
$0(){A.wE($.fY.j(),B.db,"pause.settings")},
$S:0}
A.vj.prototype={
$0(){$.cl.j().a6()
A.j1($.iT.j())},
$S:0}
A.vk.prototype={
$0(){A.m8("saved")},
$S:0}
A.vl.prototype={
$0(){$.cl.j().a6()
A.j1($.iT.j())},
$S:0}
A.vm.prototype={
$0(){A.wE($.lY.j(),B.kp,"pause.credits")},
$S:0}
A.uY.prototype={
$0(){return A.h0($.cl.j())},
$S:0}
A.uZ.prototype={
$0(){return A.h0($.iU.j())},
$S:0}
A.v_.prototype={
$2(a,b){var s,r
if($.aq.j().y){s=$.aB.j().gc2()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.DS(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cO,a)
A.DR(B.cO[a])}}},
$S:167}
A.v0.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().ga9().a===21){A.zA(!1)
return}s=$.Z.j().r.b
$.T.j().hK(a,b,$.ar)
r=$.Z.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e8()
if(typeof n!=="number")return A.uP(n)
if(!(o<n))break
if($.Z.b===$.Z)A.i(A.av(""))
p=B.a.h(B.M,q).b
o=$.aP
if(o!=null){n=$.Z.b
if(n===$.Z)A.i(A.av(""))
o.cS(n,p)}o=q
if(typeof o!=="number")return o.ak()
q=o+1}A.m8("saved after sleep")},
$S:168}
A.v1.prototype={
$0(){return A.h0($.m_.j())},
$S:0}
A.v2.prototype={
$0(){return A.h0($.iT.j())},
$S:0}
A.v3.prototype={
$0(){return A.dE($.lY.j())},
$S:0}
A.v4.prototype={
$0(){A.h0($.iR.j())},
$S:0}
A.v5.prototype={
$0(){A.h0($.iR.j())},
$S:0}
A.v6.prototype={
$1(a){return A.zz()},
$S:2}
A.v8.prototype={
$1(a){if(A.q(A.a(v.G.document).visibilityState)==="hidden")A.EP()},
$S:1}
A.v9.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.q(m.code)==="CapsLock"&&!A.O(m.repeat)){m.preventDefault()
p=$.hc()
o=!p.a
p.a=o
if(o)A.oH(A.a(v.G.document),"exitPointerLock",t.X)
else $.a9.j().cT($.G.j())
return}p=$.hc()
if(p.a&&!A.O(m.repeat)){if(A.q(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.a9.j().cT($.G.j())
return}if(A.q(m.code)==="ArrowUp"||A.q(m.code)==="KeyW"){m.preventDefault()
n=p.gbf().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.ei
if(o!=null){p=p.gbf().length
o.a.cY(-1,p)}return}if(A.q(m.code)==="ArrowDown"||A.q(m.code)==="KeyS"){m.preventDefault()
n=p.gbf().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.ei
if(o!=null){p=p.gbf().length
o.a.cY(1,p)}return}if(A.q(m.code)==="ArrowLeft"||A.q(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.cX[B.d.S(p.e.a-1+7,7)]
else{p=p.gcH()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.F(p.y-p.w,p.f,p.r)}return}if(A.q(m.code)==="ArrowRight"||A.q(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.cX[(p.e.a+1)%7]
else{p=p.gcH()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.F(p.y+p.w,p.f,p.r)}return}if(A.q(m.code)==="KeyQ"){m.preventDefault()
p=p.gcH()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.F(p.y-p.w*0.2,p.f,p.r)
return}if(A.q(m.code)==="KeyE"){m.preventDefault()
p=p.gcH()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.F(p.y+p.w*0.2,p.f,p.r)
return}if(A.q(m.code)==="KeyR"){m.preventDefault()
if(A.O(m.shiftKey))p.mt()
else p.mv()
return}if(B.b.T(A.q(m.code),"Digit")||B.b.T(A.q(m.code),"Numpad")){o=A.q(m.code)
o=A.x5(o,"Digit","")
s=A.x5(o,"Numpad","")
r=A.dp(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.aq.j().y&&!A.O(m.repeat))if($.co().lz(A.q(m.code))){m.preventDefault()
return}if(A.q(m.code)==="Escape"&&!A.O(m.repeat)){p=$.bb
if(p==null)A.j1($.cl.j())
else p.a6()
return}q=$.bb==null&&!p.a
if(!A.O(m.repeat)&&q)$.f2.j().dI(new A.kw(A.q(m.code),!0,1))
if(A.q(m.code)==="KeyP"&&!A.O(m.repeat)&&$.Av())$.m5=!$.m5
if((A.q(m.code)==="KeyJ"||A.q(m.code)==="Tab")&&!A.O(m.repeat)&&!$.aq.j().y){m.preventDefault()
A.j4($.iU.j())}if(A.q(m.code)==="KeyL"&&!A.O(m.repeat)&&!$.aq.j().y)A.j4($.m_.j())
if(A.q(m.code)==="KeyH"&&!A.O(m.repeat)&&!$.aq.j().y)A.j4($.iT.j())
if(A.q(m.code)==="KeyO"&&!A.O(m.repeat)&&!$.aq.j().y)A.j4($.iW.j())
if(A.q(m.code)==="KeyK"&&!A.O(m.repeat)&&q)A.m8("saved")},
$S:1}
A.va.prototype={
$1(a){var s=A.a(a)
if($.bb==null)$.f2.j().dI(new A.kw(A.q(s.code),!1,0))},
$S:1}
A.vb.prototype={
$1(a){return A.z3()},
$S:2}
A.vc.prototype={
$1(a){return A.z3()},
$S:2}
A.vd.prototype={
$1(a){return A.Ej(A.a(a))},
$S:2}
A.ve.prototype={
$1(a){var s=A.a(a)
if($.aq.j().y){s.preventDefault()
A.Ei(s)
return}$.a9.j().cT($.G.j())},
$S:1}
A.vf.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hc()
if(!o.a||$.ei==null)return
p.preventDefault()
s=o.gbf()
r=A.af(p.deltaY)>0?1:-1
o=$.ei
o.toString
q=J.cI(s)
o.a.cY(A.e(r),q)},
$S:1}
A.up.prototype={
$1(a){var s=A.q(A.a(a).message)
A.ux(s,null)},
$S:1}
A.uq.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.ux("unhandled rejection: "+A.A(s==null?A.q(a.type):s),null)},
$S:1}
A.ut.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:40}
A.uB.prototype={
$0(){this.a.className=""},
$S:12}
A.uF.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:31}
A.us.prototype={
$2(a,b){var s=t.q
return B.b.H(s.a(a).a,s.a(b).a)},
$S:21}
A.uy.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.uv.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.uw.prototype={
$1(a){return t.fW.a(a).w},
$S:45};(function aliases(){var s=J.dW.prototype
s.hT=s.p
s=A.m.prototype
s.hS=s.cW
s=A.hS.prototype
s.hU=s.bJ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Er","BK",26)
r(J.r.prototype,"gar","q",10)
q(A,"EF","C1",41)
r(A.aI.prototype,"gar","q",10)
p(A.ce.prototype,"gkv","P",10)
o(A,"Ft","D_",17)
o(A,"Fu","D0",17)
o(A,"Fv","D1",17)
q(A,"zP","Fb",0)
s(A,"FC","BP",26)
r(A.ci.prototype,"gar","q",10)
r(A.fN.prototype,"gar","q",10)
o(A,"FF","E0",13)
p(A.k7.prototype,"gmA","mB",88)
var n
p(n=A.kQ.prototype,"gmw","mx",9)
p(n,"gmE","mF",9)
p(n,"gmG","mH",9)
p(n,"gmy","mz",9)
p(n,"gmC","mD",9)
q(A,"zT","D4",170)
q(A,"H4","vZ",42)
p(A.dl.prototype,"gaC","h8",46)
p(n=A.jV.prototype,"gj7","j8",2)
p(n,"gj9","ja",2)
p(n,"gjd","je",2)
p(n,"gjh","ji",2)
p(n,"gjj","jk",2)
p(n,"gjf","jg",2)
p(n,"gjb","jc",2)
o(A,"FZ","z9",13)
o(A,"G2","z8",13)
p(A.hS.prototype,"gjl","jm",2)
p(A.fI.prototype,"giZ","j_",123)
p(A.l1.prototype,"glI","lJ",16)
o(A,"A2","ES",171)
q(A,"A1","DY",0)
o(A,"FW","DT",114)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.Q,null)
q(A.Q,[A.vR,J.jX,A.i1,J.em,A.m,A.hg,A.dM,A.aj,A.V,A.qf,A.aF,A.hI,A.S,A.hr,A.ho,A.ih,A.au,A.cY,A.b8,A.fy,A.fi,A.eX,A.dr,A.rf,A.pq,A.hp,A.iD,A.a4,A.p2,A.cf,A.ac,A.cv,A.hA,A.lw,A.lc,A.i8,A.lO,A.rM,A.cC,A.lp,A.lR,A.tm,A.ld,A.c0,A.aZ,A.lh,A.dB,A.ap,A.le,A.lM,A.iO,A.ip,A.lv,A.eY,A.is,A.iI,A.lS,A.eq,A.jq,A.t4,A.tp,A.er,A.dO,A.lm,A.kh,A.i6,A.rN,A.B,A.J,A.ao,A.lP,A.r_,A.bi,A.iK,A.rh,A.lJ,A.pp,A.ls,A.ea,A.pS,A.e0,A.ko,A.mY,A.mZ,A.n0,A.n_,A.kn,A.fe,A.jI,A.nG,A.dq,A.jR,A.bS,A.nl,A.km,A.by,A.dY,A.bz,A.rl,A.cy,A.pr,A.kp,A.ky,A.bH,A.kO,A.hZ,A.aE,A.nI,A.cR,A.bT,A.pb,A.p9,A.k7,A.kT,A.ph,A.bJ,A.bW,A.r9,A.r7,A.d4,A.kQ,A.ez,A.jF,A.jG,A.nH,A.nF,A.fP,A.aw,A.be,A.aG,A.N,A.hi,A.kr,A.bh,A.pU,A.b2,A.pW,A.pV,A.lr,A.hY,A.kx,A.rO,A.lQ,A.tl,A.lC,A.lo,A.lG,A.lz,A.t_,A.bF,A.bC,A.aK,A.ng,A.nf,A.j6,A.eD,A.nJ,A.dl,A.pQ,A.re,A.K,A.hf,A.lf,A.ji,A.lg,A.ju,A.lj,A.hm,A.lk,A.jx,A.ll,A.jQ,A.lq,A.hK,A.lx,A.fc,A.jj,A.w_,A.hV,A.lD,A.ks,A.lE,A.eN,A.kG,A.lH,A.kH,A.lI,A.kK,A.lL,A.kJ,A.lK,A.kX,A.lT,A.i_,A.l7,A.lW,A.mW,A.jM,A.jO,A.hu,A.i4,A.x,A.jv,A.fC,A.o4,A.ed,A.cU,A.fo,A.rD,A.dC,A.iN,A.iM,A.lV,A.lU,A.tt,A.jw,A.jd,A.fS,A.mx,A.mi,A.mk,A.vE,A.vH,A.l9,A.fd,A.mT,A.nx,A.ny,A.nE,A.jV,A.oB,A.oF,A.aR,A.oZ,A.oW,A.nh,A.p4,A.du,A.j,A.kL,A.l8,A.mM,A.jy,A.nr,A.fp,A.bl,A.kl,A.pL,A.fH,A.q8,A.eK,A.jK,A.nT,A.nS,A.jk,A.k8,A.cE,A.la,A.hx,A.om,A.Y,A.jC,A.jS,A.on,A.jD,A.d3,A.jE,A.e9,A.dQ,A.q5,A.e8,A.ok,A.nv,A.qW,A.oG,A.dn,A.op,A.dA,A.bv,A.fx,A.hT,A.jz,A.e3,A.cB,A.ol,A.ey,A.or,A.cQ,A.os,A.hU,A.hH,A.bf,A.rz,A.k4,A.bP,A.oJ,A.mI,A.he,A.mJ,A.oV,A.oU,A.pH,A.pG,A.pI,A.pJ,A.pK,A.k3,A.pR,A.q3,A.kw,A.q2,A.q4,A.qR,A.e2,A.qS,A.fJ,A.ni,A.rE,A.eS,A.jo,A.oz,A.oD,A.q6,A.cV,A.q7,A.jL,A.eR,A.rA,A.nQ,A.jJ,A.pk,A.cL,A.bt,A.pE,A.r1,A.eQ,A.eP,A.ig,A.l4,A.eG,A.d0,A.r0,A.i2,A.kD,A.kA,A.kB,A.kC,A.r4,A.j7,A.vD,A.dG,A.mt,A.dH,A.mL,A.b_,A.mU,A.fj,A.dc,A.jp,A.hS,A.nm,A.nZ,A.o0,A.fr,A.dR,A.og,A.o7,A.o8,A.c9,A.oh,A.cS,A.ff,A.pt,A.dm,A.dZ,A.bU,A.py,A.pP,A.aX,A.qM,A.qQ,A.cp,A.mq,A.l1,A.ry,A.dy,A.bj,A.bZ,A.bK,A.l3,A.j9,A.l0,A.fQ,A.lB,A.lA,A.iy,A.rK])
q(J.jX,[J.jZ,J.hz,J.hC,J.hB,J.hD,J.fu,J.dU])
q(J.hC,[J.dW,J.r,A.fB,A.hO])
q(J.dW,[J.kk,J.eO,J.dV])
r(J.jY,A.i1)
r(J.oI,J.r)
q(J.fu,[J.hy,J.k_])
q(A.m,[A.e7,A.R,A.cw,A.F,A.hq,A.dz,A.eW,A.lb,A.lN,A.bM])
q(A.e7,[A.ep,A.iP])
r(A.im,A.ep)
r(A.ik,A.iP)
q(A.dM,[A.jm,A.jl,A.kP,A.uQ,A.uS,A.rH,A.rG,A.tx,A.nN,A.rY,A.t0,A.p5,A.t2,A.vo,A.vp,A.uK,A.pT,A.rm,A.pe,A.pf,A.pg,A.ps,A.pc,A.pd,A.pi,A.ra,A.rb,A.rd,A.nB,A.nz,A.nA,A.pv,A.pw,A.q0,A.q_,A.pZ,A.pY,A.pX,A.q1,A.ue,A.uf,A.qa,A.qb,A.vv,A.vt,A.nK,A.p7,A.uH,A.o5,A.o6,A.rB,A.rC,A.mD,A.mG,A.mF,A.mH,A.my,A.mj,A.ml,A.mm,A.oC,A.oX,A.nu,A.nU,A.nW,A.nX,A.nY,A.mX,A.nw,A.oo,A.vw,A.uj,A.ui,A.tv,A.uA,A.ou,A.ov,A.ox,A.qX,A.vM,A.vK,A.vN,A.nq,A.p1,A.oQ,A.qV,A.qU,A.qT,A.nj,A.nk,A.nP,A.pF,A.qd,A.qe,A.r5,A.r6,A.mh,A.mf,A.mz,A.mA,A.mO,A.mS,A.mR,A.mQ,A.n9,A.n8,A.na,A.nb,A.nc,A.n7,A.n2,A.n3,A.ne,A.nn,A.no,A.np,A.nt,A.o_,A.o1,A.o2,A.oe,A.ob,A.oc,A.od,A.oa,A.o9,A.oj,A.oL,A.oM,A.oN,A.pz,A.pA,A.pB,A.qH,A.qI,A.qz,A.qA,A.qy,A.qB,A.qj,A.qC,A.qD,A.qE,A.qx,A.qp,A.qq,A.qr,A.qs,A.qt,A.qu,A.qv,A.qw,A.qo,A.qk,A.ql,A.qm,A.qn,A.qG,A.qF,A.qO,A.qZ,A.ms,A.rw,A.rv,A.rx,A.rr,A.ru,A.rp,A.ro,A.uN,A.rn,A.mn,A.mo,A.mp,A.th,A.ti,A.tc,A.te,A.tf,A.tb,A.t7,A.t8,A.t9,A.tJ,A.tK,A.tR,A.tS,A.tT,A.tM,A.tN,A.tO,A.tF,A.tB,A.tC,A.um,A.un,A.uV,A.uW,A.v6,A.v8,A.v9,A.va,A.vb,A.vc,A.vd,A.ve,A.vf,A.up,A.uq,A.ut,A.uF,A.uy,A.uv,A.uw])
q(A.jm,[A.rL,A.n1,A.oR,A.uR,A.ty,A.uG,A.nO,A.rZ,A.p3,A.p6,A.t5,A.rj,A.ri,A.vq,A.pa,A.pj,A.r8,A.rc,A.nC,A.qc,A.vu,A.vs,A.mE,A.vF,A.vG,A.oY,A.nV,A.uC,A.ow,A.oy,A.oq,A.p0,A.oE,A.nR,A.pm,A.pn,A.po,A.r2,A.r3,A.mV,A.oO,A.oP,A.mr,A.rs,A.rq,A.td,A.ta,A.t6,A.tI,A.tQ,A.v_,A.v0,A.us])
r(A.aS,A.ik)
q(A.aj,[A.fv,A.dw,A.k0,A.kS,A.kz,A.ln,A.hF,A.jb,A.cq,A.ic,A.kR,A.fK,A.jn])
r(A.fM,A.V)
r(A.dN,A.fM)
q(A.R,[A.a7,A.ae,A.am,A.I,A.eV,A.ir])
q(A.a7,[A.i9,A.P,A.eJ,A.lu])
r(A.dd,A.cw)
q(A.b8,[A.eb,A.ec,A.f_])
q(A.eb,[A.aM,A.f0,A.iz])
q(A.ec,[A.ay,A.aY,A.iA])
q(A.f_,[A.iB,A.cj])
r(A.fU,A.fy)
r(A.e4,A.fU)
r(A.hj,A.e4)
q(A.fi,[A.a2,A.cO])
q(A.dr,[A.hk,A.iC,A.iJ])
r(A.aI,A.hk)
q(A.jl,[A.pM,A.rI,A.rJ,A.tn,A.nL,A.rP,A.rU,A.rT,A.rR,A.rQ,A.rX,A.rW,A.rV,A.tk,A.uz,A.tr,A.tq,A.ud,A.u6,A.u7,A.uc,A.u1,A.u3,A.u2,A.ub,A.u_,A.u0,A.u8,A.u9,A.ua,A.u5,A.u4,A.uh,A.uI,A.ot,A.vL,A.vO,A.uk,A.mg,A.mv,A.mu,A.mB,A.n5,A.n6,A.n4,A.o3,A.of,A.pD,A.qh,A.qi,A.qJ,A.qK,A.qL,A.qP,A.rt,A.tg,A.tU,A.tV,A.tW,A.tX,A.tL,A.tP,A.tG,A.tH,A.tD,A.tE,A.uo,A.uX,A.v7,A.vg,A.vh,A.vi,A.vj,A.vk,A.vl,A.vm,A.uY,A.uZ,A.v1,A.v2,A.v3,A.v4,A.v5,A.uB])
r(A.hQ,A.dw)
q(A.kP,[A.kM,A.fb])
q(A.a4,[A.ce,A.io,A.lt])
r(A.hE,A.ce)
r(A.fA,A.fB)
q(A.hO,[A.k9,A.b1])
q(A.b1,[A.iu,A.iw])
r(A.iv,A.iu)
r(A.hM,A.iv)
r(A.ix,A.iw)
r(A.hN,A.ix)
q(A.hM,[A.hL,A.ka])
q(A.hN,[A.kb,A.kc,A.kd,A.ke,A.kf,A.eC,A.hP])
r(A.fT,A.ln)
r(A.ii,A.lh)
r(A.lF,A.iO)
r(A.iq,A.io)
r(A.ci,A.iC)
r(A.fN,A.iJ)
q(A.eq,[A.jf,A.jA,A.k1])
q(A.jq,[A.mK,A.oT,A.oS,A.rk])
r(A.k2,A.hF)
r(A.t3,A.t4)
r(A.kW,A.jA)
q(A.cq,[A.fE,A.jU])
r(A.li,A.iK)
q(A.lm,[A.eF,A.fl,A.fh,A.ex,A.ja,A.hJ,A.cZ,A.fG,A.fn,A.jh,A.hh,A.fm,A.eI,A.eB,A.dv,A.et,A.cd,A.i0,A.cP,A.fF,A.i5,A.fq,A.ij,A.il,A.jN,A.hs,A.hv,A.jP,A.ew,A.ht,A.eM,A.cX,A.fg,A.fs,A.fR,A.jg,A.eo,A.jr,A.jt,A.b3,A.je,A.cb,A.ev,A.es,A.de,A.jH,A.dP,A.dS,A.kj,A.kv,A.eH,A.cD,A.dt,A.bI,A.bx,A.jW,A.eT,A.ch,A.cJ,A.cr,A.cK,A.db,A.da,A.dJ,A.dK,A.dI,A.en,A.dh,A.cM,A.cN,A.di,A.dg,A.dj,A.cc,A.df,A.cs,A.j8,A.bg,A.cg,A.e_,A.cA,A.bG,A.bw,A.i3,A.bD,A.bX,A.bY,A.e6,A.d_])
q(A.dq,[A.bs,A.b4,A.cx,A.ki,A.ct])
r(A.q9,A.lG)
r(A.l5,A.lU)
r(A.it,A.d3)
q(A.hS,[A.hl,A.nd,A.ns,A.hw,A.oi,A.oK,A.pC,A.qg,A.fI,A.qY])
q(A.ry,[A.l2,A.ly,A.b6,A.l_,A.kY,A.ie,A.kZ])
s(A.fM,A.cY)
s(A.iP,A.V)
s(A.iu,A.V)
s(A.iv,A.au)
s(A.iw,A.V)
s(A.ix,A.au)
s(A.fU,A.iI)
s(A.iJ,A.lS)
s(A.lG,A.t_)
s(A.lU,A.tt)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",t:"double",bd:"num",f:"String",k:"bool",ao:"Null",C:"List",Q:"Object",W:"Map",ab:"JSObject"},mangledNames:{},types:["~()","ao(Q?)","~(Q?)","k(f)","dk()","k(t)","0&()","k(aw)","~(k)","dk(b4?)","k(Q?)","h(bP,bP)","ao()","@(@)","k(eG)","ao(@)","k(bK)","~(~())","k(N)","k(aX)","f(f)","h(J<f,f>,J<f,f>)","~(@)","k(bP)","k(e2)","k(bz)","h(@,@)","j(j)","k(e9)","~(f,t)","k(h)","k(bt)","k(@)","@()","k(cJ)","k(J<f,C<f>>)","~(Q?,Q?)","~(ab)","k(cs)","@(f)","k(cc)","h()","k()","f(bW)","h(aR)","k(dA)","K(K)","fe()","t()","fc()","k(J<f,aE>)","aE(J<f,aE>)","aE(aE,aE)","h(aK<bF>,aK<bF>)","bV(aK<bF>)","h(aK<bC>,aK<bC>)","bV(aK<bC>)","eD(t,t,t,t)","0&(f,h?)","~(eN)","eN()","Q?(Q?)","t(t,fS)","bQ<ao>(J<f,f>)","h(f,f)","h(bv,bv)","ao(@,cW)","+effectiveScore,light,score(t,aR,t)(aR)","h(+effectiveScore,light,score(t,aR,t),+effectiveScore,light,score(t,aR,t))","k(cb)","h(+influence,light(t,by),+influence,light(t,by))","~(h,@)","~(Q,cW)","k(cB)","k(e3)","f(h,Y,Y,Y)","h(d3,d3)","ao(Q,cW)","k(e8)","h(h)","k(bT)","h(+(t,t,t,t),+(t,t,t,t))","C<+(t,t,t,t)>()","k(bv)","h(h,cB)","h(cR,cR)","k(vP)","k(xJ)","dY(cx)","h(dn,dn)","k(xG)","J<f,f>(f,@)","f?(f)","cx(h,h,f?)","k(bI)","k(bx)","eR()","bs(h,h,f?)","h(h,+(bs,cy))","h(J<f,cL>,J<f,cL>)","k(bW)","J<h,@>(h,eQ)","J<h,@>(h,eP)","h(bJ,bJ)","~(@,@)","k(J<@,@>)","J<f,f>(J<@,@>)","k?(Q?)","b4(h,h,f?)","f()","0^(m<0^>,Q?)<Q?>","t(t,f)","k(ib?)","C<f>(C<f>)","~(h)","h(h,+(b4,d4))","f(aw)","ao(ab)","0^(f,m<0^>)<z>","h(a6,a6)","W<f,Q?>(dm)","f(bg)","k(bg)","k(bw)","ao(~())","k(dh)","k(cM)","k(cN)","k(di)","k(dg)","k(dj)","k(df)","@(@,f)","k(cr)","k(cK)","k(db)","k(da)","f(cp)","h(cp,cp)","ct(h,h,f?)","h(bK,bK)","C<d0>()","k(d0)","k(J<f,f>)","h(bZ,bZ)","W<f,@>(bK)","k(bY)","k(bX)","k(bD)","i_(bs)","bJ(J<f,b4>)","h(bW,bW)","dk(f{fallback:f?})","h(bT,bT)","f(bT)","h(J<h,f>,J<h,f>)","W<f,f>(W<f,f>,f)","f(J<h,f>)","by?()","~(bw)","~(dH)","~(fr)","~(dG)","~(dR)","~(fj)","k(fH)","~(bG)","~(h,f)","~(bI,bx)","C<by>()","fP()","~(bd)","~(t)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aM&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f0&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iz&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ay&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.aY&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iA&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iB&&A.A4(a,b.a),"5;floor,id,wall,x,z":a=>b=>b instanceof A.cj&&A.A4(a,b.a)}}
A.Dk(v.typeUniverse,JSON.parse('{"dV":"dW","kk":"dW","eO":"dW","Go":"fB","r":{"C":["1"],"R":["1"],"ab":[],"m":["1"]},"jZ":{"k":[],"ad":[]},"hz":{"ao":[],"ad":[]},"hC":{"ab":[]},"dW":{"ab":[]},"jY":{"i1":[]},"oI":{"r":["1"],"C":["1"],"R":["1"],"ab":[],"m":["1"]},"em":{"a5":["1"]},"fu":{"t":[],"bd":[],"b0":["bd"]},"hy":{"t":[],"h":[],"bd":[],"b0":["bd"],"ad":[]},"k_":{"t":[],"bd":[],"b0":["bd"],"ad":[]},"dU":{"f":[],"b0":["f"],"px":[],"ad":[]},"e7":{"m":["2"]},"hg":{"a5":["2"]},"ep":{"e7":["1","2"],"m":["2"],"m.E":"2"},"im":{"ep":["1","2"],"e7":["1","2"],"R":["2"],"m":["2"],"m.E":"2"},"ik":{"V":["2"],"C":["2"],"e7":["1","2"],"R":["2"],"m":["2"]},"aS":{"ik":["1","2"],"V":["2"],"C":["2"],"e7":["1","2"],"R":["2"],"m":["2"],"m.E":"2","V.E":"2"},"fv":{"aj":[]},"dN":{"V":["h"],"cY":["h"],"C":["h"],"R":["h"],"m":["h"],"V.E":"h","cY.E":"h"},"R":{"m":["1"]},"a7":{"R":["1"],"m":["1"]},"i9":{"a7":["1"],"R":["1"],"m":["1"],"m.E":"1","a7.E":"1"},"aF":{"a5":["1"]},"cw":{"m":["2"],"m.E":"2"},"dd":{"cw":["1","2"],"R":["2"],"m":["2"],"m.E":"2"},"hI":{"a5":["2"]},"P":{"a7":["2"],"R":["2"],"m":["2"],"m.E":"2","a7.E":"2"},"F":{"m":["1"],"m.E":"1"},"S":{"a5":["1"]},"hq":{"m":["2"],"m.E":"2"},"hr":{"a5":["2"]},"ho":{"a5":["1"]},"dz":{"m":["1"],"m.E":"1"},"ih":{"a5":["1"]},"fM":{"V":["1"],"cY":["1"],"C":["1"],"R":["1"],"m":["1"]},"eJ":{"a7":["1"],"R":["1"],"m":["1"],"m.E":"1","a7.E":"1"},"aM":{"eb":[],"b8":[]},"f0":{"eb":[],"b8":[]},"iz":{"eb":[],"b8":[]},"ay":{"ec":[],"b8":[]},"aY":{"ec":[],"b8":[]},"iA":{"ec":[],"b8":[]},"iB":{"f_":[],"b8":[]},"cj":{"f_":[],"b8":[]},"hj":{"e4":["1","2"],"fU":["1","2"],"fy":["1","2"],"iI":["1","2"],"W":["1","2"]},"fi":{"W":["1","2"]},"a2":{"fi":["1","2"],"W":["1","2"]},"eW":{"m":["1"],"m.E":"1"},"eX":{"a5":["1"]},"cO":{"fi":["1","2"],"W":["1","2"]},"hk":{"dr":["1"],"e1":["1"],"R":["1"],"m":["1"]},"aI":{"hk":["1"],"dr":["1"],"e1":["1"],"R":["1"],"m":["1"]},"hQ":{"dw":[],"aj":[]},"k0":{"aj":[]},"kS":{"aj":[]},"iD":{"cW":[]},"dM":{"eu":[]},"jl":{"eu":[]},"jm":{"eu":[]},"kP":{"eu":[]},"kM":{"eu":[]},"fb":{"eu":[]},"kz":{"aj":[]},"ce":{"a4":["1","2"],"vT":["1","2"],"W":["1","2"],"a4.K":"1","a4.V":"2"},"ae":{"R":["1"],"m":["1"],"m.E":"1"},"cf":{"a5":["1"]},"am":{"R":["1"],"m":["1"],"m.E":"1"},"ac":{"a5":["1"]},"I":{"R":["J<1,2>"],"m":["J<1,2>"],"m.E":"J<1,2>"},"cv":{"a5":["J<1,2>"]},"hE":{"ce":["1","2"],"a4":["1","2"],"vT":["1","2"],"W":["1","2"],"a4.K":"1","a4.V":"2"},"eb":{"b8":[]},"ec":{"b8":[]},"f_":{"b8":[]},"hA":{"Cb":[],"px":[]},"lw":{"hX":[],"fz":[]},"lb":{"m":["hX"],"m.E":"hX"},"lc":{"a5":["hX"]},"i8":{"fz":[]},"lN":{"m":["fz"],"m.E":"fz"},"lO":{"a5":["fz"]},"fA":{"ab":[],"ad":[]},"eC":{"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"fB":{"ab":[],"ad":[]},"hO":{"ab":[]},"k9":{"ab":[],"ad":[]},"b1":{"bR":["1"],"ab":[]},"hM":{"V":["t"],"b1":["t"],"C":["t"],"bR":["t"],"R":["t"],"ab":[],"m":["t"],"au":["t"]},"hN":{"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"]},"hL":{"nD":[],"V":["t"],"b1":["t"],"C":["t"],"bR":["t"],"R":["t"],"ab":[],"m":["t"],"au":["t"],"ad":[],"V.E":"t","au.E":"t"},"ka":{"V":["t"],"b1":["t"],"C":["t"],"bR":["t"],"R":["t"],"ab":[],"m":["t"],"au":["t"],"ad":[],"V.E":"t","au.E":"t"},"kb":{"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"kc":{"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"kd":{"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"ke":{"w5":[],"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"kf":{"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"hP":{"ib":[],"V":["h"],"b1":["h"],"C":["h"],"bR":["h"],"R":["h"],"ab":[],"m":["h"],"au":["h"],"ad":[],"V.E":"h","au.E":"h"},"ln":{"aj":[]},"fT":{"dw":[],"aj":[]},"c0":{"a5":["1"]},"bM":{"m":["1"],"m.E":"1"},"aZ":{"aj":[]},"ii":{"lh":["1"]},"ap":{"bQ":["1"]},"iO":{"yy":[]},"lF":{"iO":[],"yy":[]},"io":{"a4":["1","2"],"W":["1","2"]},"iq":{"io":["1","2"],"a4":["1","2"],"W":["1","2"],"a4.K":"1","a4.V":"2"},"eV":{"R":["1"],"m":["1"],"m.E":"1"},"ip":{"a5":["1"]},"ci":{"dr":["1"],"xX":["1"],"e1":["1"],"R":["1"],"m":["1"]},"eY":{"a5":["1"]},"V":{"C":["1"],"R":["1"],"m":["1"]},"a4":{"W":["1","2"]},"ir":{"R":["2"],"m":["2"],"m.E":"2"},"is":{"a5":["2"]},"fy":{"W":["1","2"]},"e4":{"fU":["1","2"],"fy":["1","2"],"iI":["1","2"],"W":["1","2"]},"dr":{"e1":["1"],"R":["1"],"m":["1"]},"iC":{"dr":["1"],"e1":["1"],"R":["1"],"m":["1"]},"fN":{"dr":["1"],"lS":["1"],"e1":["1"],"R":["1"],"m":["1"]},"lt":{"a4":["f","@"],"W":["f","@"],"a4.K":"f","a4.V":"@"},"lu":{"a7":["f"],"R":["f"],"m":["f"],"m.E":"f","a7.E":"f"},"jf":{"eq":["C<h>","f"]},"jA":{"eq":["f","C<h>"]},"hF":{"aj":[]},"k2":{"aj":[]},"k1":{"eq":["Q?","f"]},"kW":{"eq":["f","C<h>"]},"er":{"b0":["er"]},"t":{"bd":[],"b0":["bd"]},"dO":{"b0":["dO"]},"h":{"bd":[],"b0":["bd"]},"C":{"R":["1"],"m":["1"]},"bd":{"b0":["bd"]},"hX":{"fz":[]},"e1":{"R":["1"],"m":["1"]},"f":{"b0":["f"],"px":[]},"lm":{"z":[]},"jb":{"aj":[]},"dw":{"aj":[]},"cq":{"aj":[]},"fE":{"aj":[]},"jU":{"aj":[]},"ic":{"aj":[]},"kR":{"aj":[]},"fK":{"aj":[]},"jn":{"aj":[]},"kh":{"aj":[]},"i6":{"aj":[]},"lP":{"cW":[]},"bi":{"Cw":[]},"iK":{"kU":[]},"lJ":{"kU":[]},"li":{"kU":[]},"ls":{"w0":[]},"ea":{"w0":[]},"eF":{"z":[]},"fl":{"z":[]},"fh":{"z":[]},"bs":{"dq":[]},"b4":{"dq":[]},"cx":{"dq":[]},"ct":{"dq":[]},"ki":{"dq":[]},"ex":{"z":[]},"ja":{"z":[]},"hJ":{"z":[]},"cZ":{"z":[]},"fG":{"z":[]},"fn":{"z":[]},"jh":{"z":[]},"hh":{"z":[]},"fm":{"z":[]},"eI":{"z":[]},"eB":{"z":[]},"dv":{"z":[]},"et":{"z":[]},"cd":{"z":[]},"i0":{"z":[]},"cP":{"z":[]},"fF":{"z":[]},"hY":{"Cf":[]},"lr":{"bV":[]},"kx":{"Cj":[]},"lQ":{"bV":[]},"lC":{"Ce":[]},"lo":{"Bt":[]},"i5":{"z":[]},"bF":{"b0":["bF"]},"bC":{"b0":["bC"]},"fq":{"z":[]},"ij":{"z":[]},"hf":{"ai":[]},"lf":{"a6":[]},"ji":{"ai":[]},"lg":{"a6":[]},"ju":{"ai":[]},"lj":{"a6":[]},"il":{"z":[]},"hm":{"ai":[]},"lk":{"a6":[]},"jx":{"ai":[]},"ll":{"a6":[]},"jQ":{"ai":[]},"lq":{"a6":[]},"hK":{"ai":[]},"lx":{"a6":[]},"jj":{"Cd":[]},"hV":{"ai":[]},"lD":{"a6":[]},"ks":{"ai":[]},"lE":{"a6":[]},"kG":{"ai":[]},"lH":{"a6":[]},"kH":{"ai":[]},"lI":{"a6":[]},"kK":{"ai":[]},"lL":{"a6":[]},"kJ":{"ai":[]},"lK":{"a6":[]},"kX":{"ai":[]},"lT":{"a6":[]},"l7":{"ai":[]},"lW":{"a6":[]},"jN":{"z":[]},"hs":{"z":[]},"hv":{"z":[]},"jP":{"z":[]},"ew":{"z":[]},"ht":{"z":[]},"eM":{"z":[]},"cX":{"z":[]},"fg":{"z":[]},"jv":{"Bc":[]},"fs":{"z":[]},"fR":{"z":[]},"b3":{"z":[]},"jg":{"z":[]},"eo":{"z":[]},"jr":{"z":[]},"jt":{"z":[]},"dC":{"dk":[]},"l5":{"BB":[]},"je":{"z":[]},"cb":{"z":[]},"ev":{"z":[]},"it":{"d3":[]},"es":{"z":[]},"de":{"z":[]},"dP":{"z":[]},"jH":{"z":[]},"dS":{"z":[]},"kj":{"z":[]},"kv":{"z":[]},"eH":{"z":[]},"cD":{"z":[]},"dt":{"z":[]},"bI":{"z":[]},"bx":{"z":[]},"jW":{"z":[]},"eT":{"z":[]},"ch":{"z":[]},"cJ":{"z":[]},"cr":{"z":[]},"cK":{"z":[]},"db":{"z":[]},"da":{"z":[]},"dJ":{"z":[]},"dK":{"z":[]},"en":{"z":[]},"dI":{"z":[]},"dh":{"z":[]},"cM":{"z":[]},"cN":{"z":[]},"di":{"z":[]},"dg":{"z":[]},"dj":{"z":[]},"cc":{"z":[]},"df":{"z":[]},"cs":{"z":[]},"j8":{"z":[]},"bg":{"z":[]},"cg":{"z":[]},"e_":{"z":[]},"cA":{"z":[]},"bG":{"z":[]},"bw":{"z":[]},"i3":{"z":[]},"bD":{"z":[]},"bX":{"z":[]},"bY":{"z":[]},"e6":{"z":[]},"d_":{"z":[]},"lB":{"Ci":[]},"BI":{"C":["h"],"R":["h"],"m":["h"]},"ib":{"C":["h"],"R":["h"],"m":["h"]},"CB":{"C":["h"],"R":["h"],"m":["h"]},"BG":{"C":["h"],"R":["h"],"m":["h"]},"w5":{"C":["h"],"R":["h"],"m":["h"]},"BH":{"C":["h"],"R":["h"],"m":["h"]},"CA":{"C":["h"],"R":["h"],"m":["h"]},"nD":{"C":["t"],"R":["t"],"m":["t"]},"Bs":{"C":["t"],"R":["t"],"m":["t"]}}'))
A.Dj(v.typeUniverse,JSON.parse('{"fM":1,"iP":2,"b1":1,"iC":1,"iJ":1,"jq":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.X
return{mq:s("cJ"),bC:s("cp"),v:s("aZ"),iF:s("jd"),ul:s("da"),EL:s("cK"),xs:s("cr"),gc:s("db"),z3:s("bC"),Bu:s("fc"),p:s("aR"),rO:s("ff"),sU:s("dN"),hO:s("b0<@>"),CH:s("hi"),w:s("a2<f,f>"),I:s("a2<f,h>"),mJ:s("a2<f,C<f>>"),M:s("aI<f>"),f7:s("er"),fP:s("bD"),ya:s("dO"),he:s("R<@>"),yW:s("cb"),g:s("bP"),D:s("z"),yt:s("aj"),hl:s("Y"),B:s("nD"),pH:s("aE"),Fr:s("cL"),BO:s("eu"),ls:s("bQ<ao>"),vS:s("df"),aJ:s("dg"),x:s("cc"),bK:s("dh"),gm:s("di"),dn:s("cM"),mx:s("dj"),j_:s("cN"),EJ:s("cO<bG,f>"),_:s("dk"),Eb:s("cs"),qX:s("dS"),mF:s("xG"),iO:s("ct"),oW:s("xJ"),fl:s("vP"),FA:s("m<hi>"),CB:s("m<cR>"),yT:s("m<f>"),x6:s("m<bJ>"),oJ:s("m<t>"),tY:s("m<@>"),uI:s("m<h>"),Fg:s("r<cp>"),AO:s("r<Gf>"),jC:s("r<aR>"),km:s("r<ff>"),sa:s("r<c9>"),ns:s("r<jy>"),cO:s("r<jz>"),r:s("r<bP>"),uH:s("r<jD>"),Dl:s("r<Y>"),iJ:s("r<bQ<~>>"),pC:s("r<jK>"),C1:s("r<dk>"),ka:s("r<be>"),Fm:s("r<ey>"),op:s("r<cQ>"),hr:s("r<ez>"),s3:s("r<ct>"),sL:s("r<ab>"),Bv:s("r<k4>"),yH:s("r<fx>"),Bq:s("r<J<f,f>>"),rq:s("r<W<f,Q>>"),A7:s("r<W<f,f>>"),cs:s("r<W<f,@>>"),a6:s("r<cR>"),p0:s("r<bT>"),s6:s("r<bs>"),pq:s("r<aw>"),bA:s("r<dm>"),xz:s("r<bt>"),b4:s("r<hT>"),s0:s("r<eD>"),hc:s("r<cS>"),ea:s("r<dn>"),Fk:s("r<km>"),J:s("r<bv>"),kv:s("r<eG>"),nR:s("r<+(f,C<bv>)>"),kd:s("r<+(f,f)>"),rh:s("r<+influence,light(t,by)>"),wt:s("r<+(h,f)>"),wx:s("r<+(t,t,t,t)>"),e_:s("r<ai>"),u:s("r<a6>"),Ft:s("r<hY>"),C:s("r<N>"),h1:s("r<bH>"),s2:s("r<bV>"),eY:s("r<cB>"),xB:s("r<cV>"),rn:s("r<kA>"),gg:s("r<kB>"),tS:s("r<i2>"),yv:s("r<kC>"),wM:s("r<kD>"),El:s("r<fJ>"),AM:s("r<aK<bC>>"),fs:s("r<aK<bF>>"),cv:s("r<by>"),DZ:s("r<e3>"),s:s("r<f>"),r8:s("r<bJ>"),fa:s("r<bW>"),fG:s("r<K>"),fi:s("r<j>"),ld:s("r<ig>"),Dc:s("r<dy>"),Fi:s("r<bZ>"),jV:s("r<d0>"),yo:s("r<eR>"),E:s("r<dA>"),uk:s("r<bl>"),wf:s("r<it>"),il:s("r<e9>"),l5:s("r<e8>"),ow:s("r<lz>"),j5:s("r<lA>"),pv:s("r<fQ>"),Fy:s("r<ed<dY>>"),EM:s("r<ed<cy>>"),w_:s("r<ed<bH>>"),f2:s("r<ed<d4>>"),n:s("r<t>"),zz:s("r<@>"),t:s("r<h>"),Cf:s("r<Q?>"),AN:s("r<bd>"),T:s("hz"),m:s("ab"),ud:s("dV"),Eh:s("bR<@>"),AQ:s("C<aR>"),hk:s("C<bP>"),b:s("C<be>"),xp:s("C<ct>"),nx:s("C<ab>"),rW:s("C<W<f,f>>"),qr:s("C<bs>"),Q:s("C<aw>"),Cs:s("C<cS>"),Es:s("C<bv>"),DX:s("C<+(f,f)>"),pL:s("C<+(h,f)>"),xM:s("C<+(t,t,t,t)>"),bE:s("C<bH>"),fx:s("C<cV>"),a:s("C<f>"),uh:s("C<ig>"),D0:s("C<dy>"),cf:s("C<bZ>"),p7:s("C<d0>"),dd:s("C<t>"),j:s("C<@>"),U:s("C<h>"),ik:s("C<ab?>"),m2:s("hH"),h6:s("J<f,aE>"),gI:s("J<f,cL>"),q:s("J<f,f>"),no:s("J<f,b4>"),AC:s("J<@,@>"),ou:s("J<h,f>"),pr:s("J<h,@>"),yx:s("J<f,C<f>>"),mf:s("W<f,dk>"),vD:s("W<f,cx>"),ap:s("W<f,aw>"),G:s("W<f,f>"),qH:s("W<f,dv>"),m0:s("W<f,k>"),gG:s("W<f,t>"),c:s("W<f,@>"),f:s("W<@,@>"),eU:s("W<h,f>"),pG:s("W<h,eP>"),tQ:s("W<h,eQ>"),aD:s("W<f,C<+(t,t,t,t)>>"),Bx:s("W<f,C<f>>"),oZ:s("W<f,Q?>"),q1:s("W<bY,C<bZ>>"),ee:s("W<h,W<f,f>>"),jT:s("P<f,f?>"),w1:s("dY"),pw:s("cx"),jt:s("cR"),wl:s("bT"),kc:s("bs"),rV:s("fA"),mV:s("eC"),d:s("ao"),K:s("Q"),BB:s("bF"),A:s("aw"),oP:s("dm"),wJ:s("bg"),E4:s("bt"),A_:s("dn"),R:s("bv"),DL:s("hU"),AB:s("ko"),yi:s("fC"),xK:s("e0"),Y:s("eG"),iM:s("Gp"),ep:s("+()"),k0:s("+(bs,cy)"),ut:s("+(b4,d4)"),rf:s("+(t,t)"),mn:s("+influence,light(t,by)"),tK:s("+effectiveScore,light,score(t,aR,t)"),nz:s("+(t,t,t,t)"),ez:s("hX"),wZ:s("a6"),lg:s("hZ"),tc:s("cU<ct,bH>"),ja:s("cU<cx,dY>"),wm:s("cU<bs,cy>"),qq:s("cU<b4,d4>"),j2:s("N"),m3:s("bH"),yz:s("bV"),W:s("cB"),F3:s("cV"),Dm:s("i2"),P:s("e1<f>"),oG:s("e1<h>"),en:s("bw"),gl:s("aX"),e:s("e2"),u5:s("bx"),bG:s("bI"),ho:s("fJ"),EH:s("aK<bC>"),E0:s("aK<bF>"),l:s("cW"),w8:s("e3"),qL:s("b3"),N:s("f"),Aj:s("b4"),jP:s("bJ"),h:s("bW"),bp:s("dv"),sg:s("ad"),bs:s("dw"),qF:s("eO"),hL:s("e4<f,f>"),qt:s("kT"),eP:s("kU"),cV:s("K"),a7:s("j"),qY:s("bz"),L:s("bK"),gM:s("bX"),hF:s("bY"),vw:s("eP"),BX:s("eQ"),aA:s("dy"),AP:s("bZ"),sy:s("l4"),bB:s("b6"),aS:s("d0"),fu:s("eR"),fw:s("F<bD>"),vL:s("F<cb>"),vK:s("F<cc>"),Fj:s("F<bx>"),rZ:s("F<bI>"),vY:s("F<f>"),r4:s("F<bz>"),g2:s("F<bX>"),cE:s("F<bY>"),rt:s("S<bw>"),xG:s("S<aX>"),fh:s("S<bz>"),fW:s("dA"),hR:s("ap<@>"),BT:s("iq<Q?,Q?>"),Ez:s("d3"),rL:s("fP"),xT:s("e9"),wU:s("e8"),la:s("ly"),qS:s("iy"),jS:s("fS"),EF:s("bM<+(f,b4)>"),Br:s("bM<bV>"),V:s("iM"),k:s("iN"),y:s("k"),Bs:s("k()"),kr:s("k(bD)"),e2:s("k(cb)"),rg:s("k(cc)"),bl:s("k(Q)"),pz:s("k(bw)"),aV:s("k(aX)"),y2:s("k(bx)"),ty:s("k(bI)"),Ag:s("k(f)"),rd:s("k(bz)"),da:s("k(bX)"),qR:s("k(bY)"),i:s("t"),z:s("@"),pF:s("@()"),h_:s("@(Q)"),nW:s("@(Q,cW)"),S:s("h"),eZ:s("bQ<ao>?"),r9:s("r<Q?>?"),gt:s("ab?"),rK:s("C<@>?"),jd:s("W<f,C<f>>?"),X:s("Q?"),dR:s("f?"),oI:s("f?(f)"),Fx:s("ib?"),F:s("dB<@,@>?"),Af:s("lv?"),k7:s("k?"),wK:s("k(fH)?"),u6:s("t?"),lo:s("h?"),s7:s("bd?"),Z:s("~()?"),Cv:s("~(dG)?"),kC:s("~(dH)?"),pf:s("~(fj)?"),hq:s("~(fr)?"),CA:s("~(dR)?"),hQ:s("~(bG)?"),Ci:s("~(bw)?"),nf:s("~(bI,bx)?"),DI:s("~(f,t)?"),xl:s("~(k)?"),vR:s("~(h)?"),dt:s("~(h,f)?"),o:s("bd"),H:s("~"),O:s("~()"),m1:s("~(f,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ib=J.jX.prototype
B.a=J.r.prototype
B.d=J.hy.prototype
B.c=J.fu.prototype
B.b=J.dU.prototype
B.ic=J.dV.prototype
B.id=J.hC.prototype
B.y=A.hL.prototype
B.d9=A.hP.prototype
B.dn=J.kk.prototype
B.bM=J.eO.prototype
B.a6=new A.cJ(1,"standard")
B.K=new A.j7(B.a6)
B.bR=new A.cJ(0,"concise")
B.bS=new A.cJ(2,"verbose")
B.an=new A.dG(null,null,null,null,null)
B.nl=new A.j8(0,"none")
B.nm=new A.ja(0,"opaque")
B.dZ=new A.je(4,"ambience")
B.bW=new A.cr(3,"mono")
B.aM=new A.db(0,"full")
B.bV=new A.cr(0,"auto")
B.bU=new A.cK(1,"standard")
B.bT=new A.da(0,"defaultMix")
B.aN=new A.dH(B.bV,B.bU,B.aM,B.bT)
B.aE=new A.kv(1,"pixeldart")
B.e5=new A.he(B.aE,!1,!0,!1,null,!1,null)
B.bY=new A.dI(1,"capturing")
B.e6=new A.dc(B.bY,null)
B.bZ=new A.dI(3,"rejected")
B.aO=new A.dc(B.bZ,null)
B.c_=new A.dI(4,"applied")
B.bX=new A.dc(B.c_,null)
B.c0=new A.dI(5,"cancelled")
B.e7=new A.dc(B.c0,null)
B.aP=new A.dI(2,"conflict")
B.ao=new A.jg(0,"add")
B.eb=new A.eo(0,"zero")
B.a7=new A.eo(1,"one")
B.ap=new A.jh(0,"alpha")
B.G=new A.dJ(1,"button")
B.p=new A.dK(0,"normal")
B.ee=new A.b_("settings.back",B.G,"back","back to pause menu",B.p)
B.aq=new A.dJ(0,"heading")
B.ef=new A.b_("settings.heading",B.aq,"Settings",null,B.p)
B.eg=new A.b_("settings.controls.heading",B.aq,"Controls",null,B.p)
B.eh=new A.b_("settings.controls.back",B.G,"back","back to settings categories",B.p)
B.ei=new A.b_("pause.heading",B.aq,"Paused",null,B.p)
B.ej=new A.dJ(3,"slider")
B.ek=new A.dJ(4,"toggle")
B.c1=new A.dJ(5,"keybind")
B.ar=new A.dK(5,"disabled")
B.el=new A.dK(6,"error")
B.em=new A.dK(7,"destructive")
B.c2=new A.dK(8,"remapping")
B.nn=new A.mk()
B.en=new A.mI()
B.no=new A.mK()
B.eo=new A.jf()
B.c3=new A.mW()
B.ep=new A.ho(A.X("ho<0&>"))
B.c4=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eq=function() {
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
B.ev=function(getTagFallback) {
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
B.er=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eu=function(hooks) {
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
B.et=function(hooks) {
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
B.es=function(hooks) {
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

B.j=new A.k1()
B.np=new A.oV()
B.ew=new A.kh()
B.nq=new A.pH()
B.ex=new A.pI()
B.c6=new A.pK()
B.ey=new A.cV()
B.aF=new A.ch(1,"gradeLUT")
B.ez=new A.cV()
B.eA=new A.q6()
B.eB=new A.q8()
B.f=new A.qf()
B.c7=new A.kW()
B.mu=new A.cZ(0,"position")
B.mz=new A.bz(B.mu,0,3)
B.dR=new A.cZ(1,"normal")
B.mA=new A.bz(B.dR,3,3)
B.mv=new A.cZ(2,"color")
B.mB=new A.bz(B.mv,6,4)
B.mw=new A.cZ(4,"alpha")
B.mC=new A.bz(B.mw,10,1)
B.mx=new A.cZ(5,"uv0")
B.mD=new A.bz(B.mx,11,2)
B.my=new A.cZ(8,"legacyMaterialEffect")
B.mE=new A.bz(B.my,13,1)
B.U=s([B.mz,B.mA,B.mB,B.mC,B.mD,B.mE],A.X("r<bz>"))
B.as=new A.rl()
B.aQ=new A.ls()
B.w=new A.lF()
B.at=new A.lP()
B.eC=new A.fd(1.3089969389957472,0.1,60)
B.eD=new A.fd(1.0471975511965976,0.1,60)
B.eE=new A.fd(0.8726646259971648,0.08,45)
B.R=new A.fg(0,"colorOnly")
B.c8=new A.fg(1,"colorAndDepth")
B.aR=new A.fg(2,"depthOnly")
B.eF=new A.hh(0,"linear")
B.aS=new A.hh(1,"srgb")
B.c9=new A.fh(0,"open")
B.eG=new A.fh(1,"committed")
B.eH=new A.fh(2,"aborted")
B.aT=new A.fl(0,"open")
B.eO=new A.fl(1,"committed")
B.eP=new A.fl(2,"rolledBack")
B.au=new A.jr(1,"back")
B.av=new A.jt(0,"less")
B.eQ=new A.fm(0,"off")
B.ca=new A.fm(1,"errorsOnly")
B.eR=new A.fm(2,"full")
B.aw=new A.bD(0,"open")
B.cb=new A.bD(1,"chain")
B.cc=new A.bD(2,"throughDoor")
B.cd=new A.bD(3,"letterbox")
B.a8=new A.bD(4,"ignore")
B.a9=new A.fn(0,"opaque")
B.eS=new A.fn(1,"masked")
B.aU=new A.fn(2,"blended")
B.eT=new A.fo(!1,B.av,!1,!0,B.a7,B.a7,B.ao,!1,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eU=new A.fo(!0,B.av,!1,!0,B.a7,B.a7,B.ao,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.ec=new A.eo(2,"srcAlpha")
B.ed=new A.eo(3,"oneMinusSrcAlpha")
B.eV=new A.fo(!0,B.av,!1,!0,B.ec,B.ed,B.ao,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eW=new A.dO(0)
B.eX=new A.dO(24e5)
B.ce=new A.cb(0,"compliance")
B.eY=new A.fp(B.ce)
B.cf=new A.cb(1,"rupture")
B.eZ=new A.fp(B.cf)
B.cg=new A.cb(2,"synchronisation")
B.f_=new A.fp(B.cg)
B.ch=new A.es(0,"front")
B.f0=new A.es(1,"rearService")
B.f1=new A.es(2,"sideBoundary")
B.f2=new A.es(3,"roofline")
B.o=new A.dP(0,"north")
B.A=new A.dP(1,"east")
B.n=new A.dP(2,"south")
B.C=new A.dP(3,"west")
B.f3=new A.jH(0,"ground")
B.f4=new A.de(0,"mantle")
B.f5=new A.de(1,"portal")
B.f7=new A.de(3,"inventory")
B.ci=new A.de(4,"aftermath")
B.f6=new A.de(2,"window")
B.f9=new A.dQ(B.f6,"shutter","the shutter")
B.f8=new A.de(5,"none")
B.fa=new A.dQ(B.f8,null,null)
B.fb=new A.B("saved mantle history is malformed",null,null)
B.fc=new A.B("rupture elapsed time is malformed",null,null)
B.fd=new A.B("presentation keys must be strings",null,null)
B.fe=new A.B("unsupported accessibility profile",null,null)
B.ff=new A.B("inventory inspections must be an object",null,null)
B.cj=new A.B("saved mantle state is malformed",null,null)
B.fg=new A.B("inactive rupture has elapsed time",null,null)
B.fh=new A.B("control sensitivity is outside 0.1\u20133.0",null,null)
B.fi=new A.B("invalid action bindings",null,null)
B.fj=new A.B("listener room is empty",null,null)
B.fk=new A.B("control bindings conflict",null,null)
B.fl=new A.B("saved difficulty state is malformed",null,null)
B.fm=new A.B("saved house drift state is malformed",null,null)
B.fn=new A.B("saved sleep record is malformed",null,null)
B.fo=new A.B("UI scale must be between 0.8 and 2.0",null,null)
B.fp=new A.B("unsupported settings store",null,null)
B.fq=new A.B("screenplay scene must be an object",null,null)
B.fr=new A.B("settings values must be an object",null,null)
B.fs=new A.B("saved day-loop sleepHistory must be a list",null,null)
B.ft=new A.B("invalid anisotropy limit",null,null)
B.fu=new A.B("audio event position is not finite",null,null)
B.fv=new A.B("event sequence must be non-negative",null,null)
B.fw=new A.B("screenplay branch is invalid",null,null)
B.fx=new A.B("inventory inspection counts are invalid",null,null)
B.fy=new A.B("only keybinds can be remapping",null,null)
B.fz=new A.B("listener position is not finite",null,null)
B.fA=new A.B("screenplay event has invalid core fields",null,null)
B.fB=new A.B("invalid action ID",null,null)
B.fC=new A.B("saved window state is malformed",null,null)
B.fD=new A.B("unsupported graphics preset",null,null)
B.fE=new A.B("save run and meta must be objects",null,null)
B.fF=new A.B("saved house state is malformed",null,null)
B.fG=new A.B("saved sleep record must be an object",null,null)
B.fH=new A.B("saved session run is malformed",null,null)
B.fI=new A.B("save map keys must be strings",null,null)
B.fJ=new A.B("unsupported graphics profile",null,null)
B.fK=new A.B("screenplay scene has invalid id, day, or title",null,null)
B.fL=new A.B("unsupported audio options",null,null)
B.fM=new A.B("Escape is reserved for pause navigation",null,null)
B.fN=new A.B("saved day-loop state is malformed",null,null)
B.fO=new A.B("rupture extinguished mantle is unknown",null,null)
B.ck=new A.B("unsupported controls profile",null,null)
B.cl=new A.B("saved portal state is malformed",null,null)
B.fP=new A.B("acoustic portal profile is not finite",null,null)
B.fQ=new A.B("saved house state does not match this house",null,null)
B.fR=new A.B("presentation snapshot contains a non-finite number",null,null)
B.fS=new A.B("screenplay array contains invalid text",null,null)
B.fT=new A.B("screenplay event day/hour is out of range",null,null)
B.fU=new A.B("unsupported gameplay settings profile",null,null)
B.fV=new A.B("save contains a non-finite number",null,null)
B.fW=new A.B("unsupported graphics store",null,null)
B.fX=new A.B("screenplay option is invalid",null,null)
B.fY=new A.B("screenplay needs sources and scenes arrays",null,null)
B.fZ=new A.B("brush component needs an id and label",null,null)
B.h_=new A.B("text.json root must be an object",null,null)
B.h0=new A.B("screenplay root must be an object",null,null)
B.h1=new A.B("event kind is empty",null,null)
B.h2=new A.B("screenplay event effects are invalid",null,null)
B.h3=new A.B("invalid control binding token",null,null)
B.nr=new A.B("audio transmission muffle is invalid",null,null)
B.h4=new A.B("acoustic portal muffle order is invalid",null,null)
B.h5=new A.B("unsupported settings profile",null,null)
B.h6=new A.B("saved session clock is malformed",null,null)
B.h7=new A.B("rupture mantle IDs are malformed",null,null)
B.h8=new A.B("invalid gameplay setting: contextualReminders",null,null)
B.h9=new A.B("invalid screen-reader verbosity",null,null)
B.ha=new A.B("saved sleep record has an unknown enum",null,null)
B.hb=new A.B("screenplay beat has invalid kind or text",null,null)
B.hc=new A.B("save root must be an object",null,null)
B.hd=new A.B("audio event identity is empty",null,null)
B.he=new A.B("render capabilities contain invalid limits",null,null)
B.hf=new A.B("saved house overrides are malformed",null,null)
B.T=new A.bS(0,0,0)
B.cL=new A.bS(1,1,1)
B.j_=s([],t.Fk)
B.bd=s([],t.cv)
B.hg=new A.jI(B.T,B.T,0,1,null,null,B.cL,0,null,B.j_,B.bd)
B.cm=new A.aE(0,0,0)
B.hh=new A.et(0,"idle")
B.ax=new A.et(1,"active")
B.hi=new A.et(2,"ended")
B.hj=new A.et(3,"aborted")
B.cn=new A.fq(0,"outside")
B.hk=new A.fq(1,"intersects")
B.hl=new A.fq(2,"inside")
B.hm=new A.ev(0,"timeAdvanced")
B.hn=new A.ev(1,"dayEndReached")
B.ho=new A.ev(4,"slept")
B.hp=new A.ev(5,"complianceFloorTripped")
B.aV=new A.df(0,"twentyFourHour")
B.co=new A.df(1,"twelveHour")
B.cp=new A.dg(0,"important")
B.cq=new A.dg(1,"always")
B.aW=new A.cc(0,"pauseAndMute")
B.cr=new A.dh(0,"press")
B.cs=new A.dh(1,"hold")
B.ct=new A.di(0,"compact")
B.cu=new A.di(1,"spacious")
B.cv=new A.cM(1,"standard")
B.cw=new A.cM(2,"detailed")
B.cx=new A.dj(0,"toast")
B.cy=new A.dj(1,"detailed")
B.cz=new A.cN(1,"readable")
B.hv=new A.hs(0,"vertex")
B.cA=new A.hs(1,"indices")
B.cB=new A.jN(0,"staticDraw")
B.h=new A.ht(0,"ready")
B.S=new A.ht(1,"lost")
B.aa=new A.fs(0,"prepared")
B.hw=new A.fs(1,"committed")
B.hx=new A.fs(2,"rolledBack")
B.hy=new A.ew(0,"color")
B.cC=new A.ew(1,"colorAndGlow")
B.hz=new A.ew(2,"colorDepthGlow")
B.aX=new A.ew(3,"depthOnly")
B.aY=new A.hv(1,"linear")
B.cD=new A.jP(0,"clampToEdge")
B.hA=new A.jO(1,1,1,!1,B.aY,B.aY,B.cD,1)
B.aZ=new A.hv(2,"linearMipmapLinear")
B.hB=new A.cP(0,"beforeShadow")
B.hC=new A.cP(2,"beforeDepth")
B.cE=new A.cP(3,"afterDepth")
B.cF=new A.cP(4,"beforeWorld")
B.hD=new A.cP(5,"afterWorld")
B.L=new A.cP(6,"afterResolve")
B.hE=new A.cP(9,"beforePresent")
B.cG=new A.cd(0,"readBeforeWrite")
B.hF=new A.cd(1,"duplicateWriter")
B.hG=new A.cd(2,"sampledMultisampledAttachment")
B.b_=new A.cd(3,"invalidResolve")
B.hH=new A.cd(4,"formatOrSizeMismatch")
B.hI=new A.cd(5,"unversionedReadWrite")
B.hJ=new A.cd(6,"invalidHistoryRead")
B.hK=new A.cd(7,"dependencyCycle")
B.hL=new A.cd(8,"missingCapability")
B.cH=new A.cs(0,"high")
B.b0=new A.cs(1,"standard")
B.b1=new A.dR(1,B.b0,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.ay=new A.dS(0,"player")
B.b2=new A.dS(1,"inserted")
B.cI=new A.dS(2,"warden")
B.cJ=new A.ex(0,"wrongKind")
B.cK=new A.ex(1,"staleGeneration")
B.hO=new A.ex(2,"doubleRelease")
B.az=new A.ex(3,"releasedResource")
B.hR=new A.cQ("kitchen-range","settle")
B.hS=new A.cQ("front-door-knocker","knock")
B.hT=new A.cQ("cellar-drain","drip")
B.hU=new A.cQ("bedroom-timber","creak")
B.hV=new A.cQ("kitchen-pipe","tick")
B.hW=new A.cQ("bathroom-cistern","settle")
B.hX=new A.cQ("landing-window","wind")
B.ia=new A.jW(1,"visitor")
B.ie=new A.oS(null)
B.ig=new A.oT(null)
B.b3=new A.k3(!1,0,0.85,0.92,1)
B.ih=new A.bS(0.008,0.012,0.024)
B.cM=s([0,2,2,3],t.t)
B.ii=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b4=s([B.cp,B.cq],A.X("r<dg>"))
B.ij=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.ik=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b5=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.F=new A.bw(0,"audio")
B.O=new A.i3(0,"level")
B.lL=new A.aX("master","Master",B.F,B.O,1,0,1,"audio")
B.lQ=new A.aX("voice","Visitor voice",B.F,B.O,1,0,1,"audio")
B.lH=new A.aX("effects","Effects",B.F,B.O,1,0,1,"audio")
B.lI=new A.aX("ambience","House ambience",B.F,B.O,1,0,1,"audio")
B.lM=new A.aX("music","Music",B.F,B.O,1,0,1,"audio")
B.aG=new A.bw(1,"display")
B.lP=new A.aX("brightness","Display brightness",B.aG,B.O,1,0.6,1.4,"display")
B.ae=new A.i3(1,"toggle")
B.lK=new A.aX("muted","Mute house audio",B.F,B.ae,!1,null,null,"audio")
B.a2=new A.bw(2,"accessibility")
B.lN=new A.aX("mono","Mono-compatible mix",B.a2,B.ae,!1,null,null,"audio")
B.lJ=new A.aX("high-contrast","High-contrast interface",B.a2,B.ae,!1,null,null,"display")
B.lO=new A.aX("strong-highlights","Strong focus highlights",B.a2,B.ae,!1,null,null,"display")
B.D=s([B.lL,B.lQ,B.lH,B.lI,B.lM,B.lP,B.lK,B.lN,B.lJ,B.lO],A.X("r<aX>"))
B.B=s(["who","verb","object","place","time"],t.s)
B.l9=new A.cj(["floor-wood","living-room","wallpaper-stripes",0,0])
B.l4=new A.cj(["floor-linoleum","hall","wallpaper-damask",5,0])
B.l8=new A.cj(["floor-tiles","kitchen","wallpaper-tiles",10,0])
B.l6=new A.cj(["floor-concrete","cellar","wallpaper-damp",15,0])
B.la=new A.cj(["floor-wood","bedroom","wallpaper-faded",0,6])
B.l5=new A.cj(["floor-concrete","landing","wallpaper-peeling",5,6])
B.l7=new A.cj(["floor-tiles","bathroom","wallpaper-tiles",10,6])
B.lb=new A.cj(["floor-linoleum","spare-room","wallpaper-stripes",15,6])
B.il=s([B.l9,B.l4,B.l8,B.l6,B.la,B.l5,B.l7,B.lb],A.X("r<+floor,id,wall,x,z(f,f,f,t,t)>"))
B.e_=new A.da(1,"strong")
B.b6=s([B.bT,B.e_],A.X("r<da>"))
B.e8=new A.en(0,"swap")
B.e9=new A.en(1,"replace")
B.ea=new A.en(2,"cancel")
B.im=s([B.e8,B.e9,B.ea],A.X("r<en>"))
B.ip=s([2,5,9,12,16,19],t.t)
B.hq=new A.cc(1,"pauseOnly")
B.hr=new A.cc(2,"continuePlayback")
B.aA=s([B.aW,B.hq,B.hr],A.X("r<cc>"))
B.iq=s(["uQuantizationBits","uDitherStrength"],t.s)
B.it=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.iu=s([B.aw,B.cb,B.cc,B.cd,B.a8],A.X("r<bD>"))
B.iv=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.ix=s(["30","60","display"],t.s)
B.am=new A.bY(0,"full")
B.bO=new A.bY(1,"compressed")
B.bP=new A.bY(2,"off")
B.cN=s([B.am,B.bO,B.bP],A.X("r<bY>"))
B.b7=s([B.aV,B.co],A.X("r<df>"))
B.e4=new A.db(1,"reduced")
B.b8=s([B.aM,B.e4],A.X("r<db>"))
B.e0=new A.cK(0,"wide")
B.e1=new A.cK(2,"night")
B.b9=s([B.e0,B.bU,B.e1],A.X("r<cK>"))
B.iy=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iJ=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cO=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.ba=s([B.ct,B.cu],A.X("r<di>"))
B.m3=new A.bI(0,"long")
B.dG=new A.bI(1,"short")
B.cP=s([B.m3,B.dG],A.X("r<bI>"))
B.eM=new A.c9("1 - 9","Select Response",!0)
B.eI=new A.c9("SPACE","Silence Ring",!1)
B.iM=s([B.eM,B.eI],t.sa)
B.X=new A.bG(0,"visual")
B.bp=new A.bG(1,"graphics")
B.Y=new A.bG(2,"gameplay")
B.bq=new A.bG(3,"controls")
B.H=new A.bG(4,"audio")
B.I=new A.bG(5,"accessibility")
B.iN=s([B.X,B.bp,B.Y,B.bq,B.H,B.I],A.X("r<bG>"))
B.iO=s(["master","voice","effects","ambience","music"],t.s)
B.bb=s([B.cx,B.cy],A.X("r<dj>"))
B.hM=new A.cs(2,"safe")
B.hN=new A.cs(3,"custom")
B.cQ=s([B.cH,B.b0,B.hM,B.hN],A.X("r<cs>"))
B.E=new A.ch(0,"inactive")
B.bA=new A.ch(2,"affineWarp")
B.dz=new A.ch(3,"vertexSnap")
B.bB=new A.ch(4,"tapeGiveup")
B.bC=new A.ch(5,"portalFail")
B.a0=new A.ch(6,"lightsOut")
B.cR=s([B.E,B.aF,B.bA,B.dz,B.bB,B.bC,B.a0],A.X("r<ch>"))
B.iQ=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iR=s([B.ay,B.b2,B.cI],A.X("r<dS>"))
B.iS=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.ng=new A.bl("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.nf=new A.bl("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.nb=new A.bl("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.nj=new A.bl("ronnie.response","named","A route card has Ronnie written on its back.")
B.ni=new A.bl("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iT=s([B.ng,B.nf,B.nb,B.nj,B.ni],t.uk)
B.nh=new A.bl("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.ne=new A.bl("ronnie.response","named","The name Ronnie holds when the room does not.")
B.nc=new A.bl("denise.revision","accepted","One correction remains yours to protect.")
B.n9=new A.bl("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iU=s([B.nh,B.ne,B.nc,B.n9],t.uk)
B.iZ=s([],t.cO)
B.j4=s([],t.Fm)
B.j3=s([],t.op)
B.iV=s([],A.X("r<vP>"))
B.iY=s([],t.b4)
B.ab=s([],t.J)
B.j5=s([],t.u)
B.cT=s([],t.xB)
B.iW=s([],t.El)
B.m=s([],t.s)
B.cU=s([],t.ld)
B.j2=s([],t.E)
B.iX=s([],t.t)
B.bc=s([],t.zz)
B.hQ=new A.hx(15,"kitchen",-0.3,0)
B.hP=new A.hx(19,"spare-room",0,0.3)
B.M=s([B.hQ,B.hP],A.X("r<hx>"))
B.m0=new A.bx(0,"bed")
B.m1=new A.bx(1,"chair")
B.m2=new A.bx(2,"floor")
B.cV=s([B.m0,B.m1,B.m2],A.X("r<bx>"))
B.j7=s(["high","medium","low"],t.s)
B.e2=new A.cr(1,"headphones")
B.e3=new A.cr(2,"speakers")
B.be=s([B.bV,B.e2,B.e3,B.bW],A.X("r<cr>"))
B.j8=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bf=s([B.cr,B.cs],A.X("r<dh>"))
B.bo=new A.cg(0,"root")
B.dc=new A.bg(0,"pauseMenu")
B.ki=new A.dm(B.bo,B.dc,null)
B.j9=s([B.ki],t.bA)
B.bg=s([B.bR,B.a6,B.bS],A.X("r<cJ>"))
B.ht=new A.cN(0,"instant")
B.hu=new A.cN(2,"slow")
B.bh=s([B.ht,B.cz,B.hu],A.X("r<cN>"))
B.ja=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.jb=s([B.F,B.aG,B.a2],A.X("r<bw>"))
B.cW=s([B.o,B.A,B.n,B.C],A.X("r<dP>"))
B.P=new A.dt(0,"pbrMaterial")
B.a3=new A.dt(1,"shadowsAndOcclusion")
B.af=new A.dt(2,"surfaceWeathering")
B.l=new A.dt(3,"atmosphereAndPost")
B.lY=new A.dt(4,"debugView")
B.bi=s([B.P,B.a3,B.af,B.l,B.lY],A.X("r<dt>"))
B.bD=new A.b3(0,"depthTest")
B.bE=new A.b3(1,"depthFunc")
B.bF=new A.b3(2,"depthWrite")
B.bG=new A.b3(3,"blendEnable")
B.bH=new A.b3(4,"blendFunc")
B.bI=new A.b3(5,"blendEquation")
B.bJ=new A.b3(6,"cullEnable")
B.bK=new A.b3(7,"cullFace")
B.dJ=new A.b3(8,"frontFace")
B.m6=new A.b3(9,"stencilEnable")
B.dH=new A.b3(10,"colorMask")
B.dI=new A.b3(11,"scissorEnable")
B.jd=s([B.bD,B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.dJ,B.m6,B.dH,B.dI],A.X("r<b3>"))
B.aH=new A.cD(0,"none")
B.lS=new A.cD(1,"albedoOnly")
B.lT=new A.cD(2,"normalsOnly")
B.lU=new A.cD(3,"roughnessOnly")
B.lV=new A.cD(4,"metallicOnly")
B.lW=new A.cD(5,"aoOnly")
B.lX=new A.cD(6,"wireframeOnly")
B.cX=s([B.aH,B.lS,B.lT,B.lU,B.lV,B.lW,B.lX],A.X("r<cD>"))
B.je=s(["off","errors","full"],t.s)
B.jf=s(["off","fxaa","msaa2","msaa4"],t.s)
B.jg=s(["off","profile","standard","high"],t.s)
B.jh=s(["srgb","linear"],t.s)
B.ji=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.jj=s(["uBloomStrength"],t.s)
B.jk=s(["uLutSize","uStrength"],t.s)
B.jl=s([B.ce,B.cf,B.cg],A.X("r<cb>"))
B.jm=s(["uTexelSize","uNear","uFar"],t.s)
B.cY=s(["uTexelStep"],t.s)
B.jn=s(["uninitialized"],t.s)
B.hs=new A.cM(0,"minimal")
B.bj=s([B.hs,B.cv,B.cw],A.X("r<cM>"))
B.nd=new A.bl("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.n8=new A.bl("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.n7=new A.bl("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.na=new A.bl("ronnie.response","named","The route card gives one name its own line.")
B.jp=s([B.nd,B.n8,B.n7,B.na],t.uk)
B.a4=new A.bX(0,"waiting")
B.ak=new A.bX(1,"atDoor")
B.al=new A.bX(2,"consulting")
B.aI=new A.bX(3,"resolved")
B.jr=s([B.a4,B.ak,B.al,B.aI],A.X("r<bX>"))
B.eN=new A.c9("W A S D","Move",!1)
B.eL=new A.c9("TAB","Journal",!1)
B.eK=new A.c9("CAPS","Shader Lab",!1)
B.eJ=new A.c9("ESC","Pause",!1)
B.js=s([B.eN,B.eL,B.eK,B.eJ],t.sa)
B.jt=s(["floor-linoleum","ceiling-stained"],t.s)
B.jW={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.cZ=new A.a2(B.jW,["pixeldart-fbx-diagnostic-v1",!1,!1,null,0],A.X("a2<f,Q?>"))
B.k8={uAlbedo:0}
B.d_=new A.a2(B.k8,[0],t.I)
B.kf={uSsaoRaw:0,uSceneDepth:1}
B.ju=new A.a2(B.kf,[0,1],t.I)
B.da={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iI=s(["KeyW","GamepadDpadUp"],t.s)
B.iH=s(["KeyS","GamepadDpadDown"],t.s)
B.iz=s(["KeyA","GamepadDpadLeft"],t.s)
B.iA=s(["KeyD","GamepadDpadRight"],t.s)
B.iB=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iF=s(["KeyQ","GamepadB"],t.s)
B.iK=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.j6=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iG=s(["KeyR","GamepadX"],t.s)
B.iC=s(["KeyF","GamepadRB"],t.s)
B.iD=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iE=s(["KeyL"],t.s)
B.ir=s(["Escape","GamepadMenu"],t.s)
B.jv=new A.a2(B.da,[B.iI,B.iH,B.iz,B.iA,B.iB,B.iF,B.iK,B.j6,B.iG,B.iC,B.iD,B.iE,B.ir],t.mJ)
B.jw=new A.a2(B.da,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.kc={uScene:0,uHistory:1}
B.jx=new A.a2(B.kc,[0,1],t.I)
B.jM={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jy=new A.a2(B.jM,["830a14587641fb7701713dcdde86ceb814faada4","2e9194353aa9eddfbb75fbf1274b30dacc0f3590","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.w)
B.jZ={aPosition:0,aUvMat:1}
B.d0=new A.a2(B.jZ,[0,4],t.I)
B.kd={uScene:0,uLut:1}
B.jz=new A.a2(B.kd,[0,1],t.I)
B.ke={uSource:0}
B.d1=new A.a2(B.ke,[0],t.I)
B.k6={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jA=new A.a2(B.k6,[0,1,2,3,4,5,6],t.I)
B.d2=new A.cO([B.X,"settings.visual",B.bp,"settings.graphics",B.Y,"settings.gameplay",B.bq,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d3=new A.cO([B.X,"visual",B.bp,"graphics",B.Y,"gameplay",B.bq,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jU={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jB=new A.a2(B.jU,[0,1,2],t.I)
B.k5={"living-room":0,hall:1,kitchen:2,cellar:3,bedroom:4,landing:5,bathroom:6,"spare-room":7}
B.iL=s(["hall-living"],t.s)
B.is=s(["front-door","hall-living","hall-kitchen","hall-landing"],t.s)
B.iw=s(["hall-kitchen","kitchen-living","kitchen-bathroom"],t.s)
B.jo=s(["cellar-service"],t.s)
B.iP=s(["bedroom-service"],t.s)
B.jc=s(["hall-landing","landing-bedroom","landing-bathroom"],t.s)
B.jq=s(["landing-bathroom","kitchen-bathroom"],t.s)
B.io=s(["spare-service"],t.s)
B.jC=new A.a2(B.k5,[B.iL,B.is,B.iw,B.jo,B.iP,B.jc,B.jq,B.io],t.mJ)
B.kh={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jD=new A.a2(B.kh,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.w)
B.k0={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i6=new A.bf("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.i1=new A.bf("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.i5=new A.bf("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.i8=new A.bf("wallpaper-damp","grime",7106925,0.94,0.76)
B.i2=new A.bf("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i7=new A.bf("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.i9=new A.bf("wallpaper-peeling","grime",9340536,0.91,0.68)
B.i3=new A.bf("floor-wood","wall-plaster",7755327,0.88,0.22)
B.i_=new A.bf("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.i0=new A.bf("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hY=new A.bf("floor-concrete","grime",7828331,0.96,0.92)
B.hZ=new A.bf("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.i4=new A.bf("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bk=new A.a2(B.k0,[B.i6,B.i1,B.i5,B.i8,B.i2,B.i7,B.i9,B.i3,B.i_,B.i0,B.hY,B.hZ,B.i4],A.X("a2<f,bf>"))
B.k9={uBloom:0}
B.jE=new A.a2(B.k9,[0],t.I)
B.ka={uSceneDepth:0}
B.jF=new A.a2(B.ka,[0],t.I)
B.kb={uScene:0}
B.jG=new A.a2(B.kb,[0],t.I)
B.V={}
B.d5=new A.a2(B.V,[],t.w)
B.d4=new A.a2(B.V,[],A.X("a2<f,t>"))
B.x=new A.a2(B.V,[],t.I)
B.ns=new A.a2(B.V,[],A.X("a2<f,f?>"))
B.jH=new A.a2(B.V,[],A.X("a2<@,@>"))
B.jP={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jI=new A.a2(B.jP,[0,1,2,3,4,5,6],t.I)
B.dd=new A.cA(0,"resume")
B.de=new A.cA(1,"settings")
B.df=new A.cA(2,"controls")
B.dg=new A.cA(3,"save")
B.dh=new A.cA(4,"help")
B.di=new A.cA(5,"credits")
B.dj=new A.cA(6,"back")
B.jJ=new A.cO([B.dd,"pause.resume",B.de,"pause.settings",B.df,"pause.controls",B.dg,"pause.save",B.dh,"pause.help",B.di,"pause.credits",B.dj,"pause.back"],A.X("cO<cA,f>"))
B.k2={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jK=new A.a2(B.k2,[0,1,2,3],t.I)
B.kg={uTex:0}
B.jL=new A.a2(B.kg,[0],t.I)
B.bl=new A.cO([B.aF,1,B.bA,1.5,B.dz,1.5,B.bB,2,B.bC,2,B.a0,4],A.X("cO<ch,t>"))
B.nt=new A.hJ(0,"srgb")
B.nu=new A.hJ(1,"linear")
B.bm=new A.eB(0,"resident")
B.d6=new A.eB(1,"pending")
B.d7=new A.eB(2,"missing")
B.d8=new A.eB(3,"evicted")
B.j0=s([],t.bA)
B.j1=s([],A.X("r<bg>"))
B.bn=new A.dZ(B.j0,B.j1,null)
B.db=new A.cg(1,"settings")
B.kj=new A.cg(2,"visual")
B.kk=new A.cg(3,"graphics")
B.kl=new A.cg(4,"gameplay")
B.km=new A.cg(5,"controls")
B.kn=new A.cg(6,"audio")
B.ko=new A.cg(7,"accessibility")
B.kp=new A.cg(8,"credits")
B.W=new A.bg(1,"settings")
B.kq=new A.bg(2,"journal")
B.kr=new A.bg(3,"sleep")
B.ks=new A.bg(4,"help")
B.kt=new A.bg(5,"visitor")
B.ku=new A.bg(6,"ending")
B.dk=new A.e_(0,"opened")
B.dl=new A.e_(2,"backed")
B.dm=new A.e_(3,"resumed")
B.kv=new A.e_(4,"dismissed")
B.Z=new A.e_(5,"unchanged")
B.kw=new A.bt("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kx=new A.bt("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.ky=new A.bt("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kz=new A.bt("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kA=new A.bt("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kB=new A.bt("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kC=new A.bt("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kD=new A.bt("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kE=new A.bt("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kF=new A.ki(0,1,null)
B.kH=new A.kj(1,"high")
B.kG=new A.pJ(!1,!0,!0,!0,!1,B.kH,35,256)
B.kI=new A.kn(1,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.br=new A.eF(0,"safe")
B.N=new A.eF(1,"standard")
B.a_=new A.eF(2,"high")
B.a1=new A.aI(B.V,0,t.M)
B.ac=new A.e0(B.br,B.a1)
B.k7={shadows:0}
B.lG=new A.aI(B.k7,1,t.M)
B.dp=new A.e0(B.N,B.lG)
B.jR={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.ly=new A.aI(B.jR,5,t.M)
B.dq=new A.e0(B.a_,B.ly)
B.kJ=new A.eF(4,"shipping")
B.jT={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lz=new A.aI(B.jT,7,t.M)
B.nv=new A.e0(B.kJ,B.lz)
B.kL=new A.aM(0,1)
B.kM=new A.aY(0.35,0.52,0.88)
B.kN=new A.ay(0.46,0.25,0.2)
B.dr=new A.aY(0.22,0.45,0.92)
B.kO=new A.ay(0.48,0.4,0.34)
B.kP=new A.ay(0.31,0.25,0.23)
B.bs=new A.aY(0.75,0.52,0.42)
B.kQ=new A.aY(0.4,0.65,0.95)
B.bt=new A.aY(0.88,0.96,1)
B.kR=new A.ay(0.37,0.33,0.31)
B.kS=new A.aY(0.62,0.48,0.45)
B.kT=new A.ay(0.34,0.32,0.29)
B.ds=new A.ay(0.38,0.25,0.19)
B.bu=new A.aY(0.9,0.8,0.72)
B.aB=new A.aY(0.28,0.16,0.12)
B.kU=new A.ay(0.31,0.28,0.24)
B.aC=new A.aY(0.65,0.45,0.35)
B.kV=new A.ay(0.58,0.56,0.5)
B.dt=new A.aY(0.2,0.38,0.9)
B.kW=new A.ay(0.44,0.37,0.28)
B.kX=new A.ay(0.52,0.5,0.44)
B.kY=new A.ay(0.24,0.25,0.27)
B.kZ=new A.ay(0.28,0.27,0.25)
B.l_=new A.aY(0.35,0.28,0.25)
B.du=new A.aY(0.52,0.32,0.38)
B.l0=new A.ay(0.42,0.4,0.38)
B.l1=new A.ay(0.18,0.2,0.21)
B.l2=new A.ay(0.2,0.12,0.1)
B.aD=new A.aY(0.35,0.2,0.15)
B.l3=new A.ay(0.12,0.15,0.2)
B.dv=new A.eH(0,"constructed")
B.z=new A.eH(1,"ready")
B.bv=new A.eH(2,"lost")
B.dw=new A.eH(3,"disposed")
B.lc=new A.hZ(B.ac,384,216,1,B.aS,0,512,32,4,1,B.ca)
B.bw=new A.eI(0,"constructed")
B.ld=new A.eI(1,"initializing")
B.bx=new A.eI(2,"ready")
B.dx=new A.eI(3,"contextLost")
B.i=new A.fF(0,"read")
B.k=new A.fF(1,"write")
B.J=new A.fF(2,"historyRead")
B.by=new A.fG(0,"prepared")
B.le=new A.fG(1,"committed")
B.lf=new A.fG(2,"rolledBack")
B.r=new A.i0(0,"rgba8")
B.lg=new A.aG("dofBlurH",B.r,192,108,1,0)
B.lh=new A.aG("dofBlurV",B.r,192,108,1,0)
B.li=new A.aG("dofOutput",B.r,384,216,1,0)
B.dy=new A.i0(2,"depth24")
B.lj=new A.aG("shadowMap",B.dy,512,512,1,0)
B.lk=new A.aG("ssaoRaw",B.r,192,108,1,0)
B.ll=new A.aG("ssaoBlurred",B.r,192,108,1,0)
B.lm=new A.aG("gradeOutput",B.r,384,216,1,0)
B.ln=new A.aG("vhsOutput",B.r,384,216,1,0)
B.lo=new A.aG("sceneDepth",B.dy,384,216,1,0)
B.lp=new A.aG("bloomBlurH",B.r,192,108,1,0)
B.lq=new A.aG("bloomBlurV",B.r,192,108,1,0)
B.lr=new A.aG("present",B.r,384,216,1,0)
B.bz=new A.aG("sceneColor",B.r,384,216,1,0)
B.ls=new A.aG("ps1Output",B.r,384,216,1,0)
B.lt=new A.eK(null,"save storage unavailable")
B.lu=new A.eK(null,"save could not be recovered")
B.lv=new A.eK(null,null)
B.jX={WheelUp:0,WheelDown:1}
B.lw=new A.aI(B.jX,2,t.M)
B.k3={open:0,closed:1}
B.lx=new A.aI(B.k3,2,t.M)
B.jQ={Escape:0}
B.dA=new A.aI(B.jQ,1,t.M)
B.jO={open:0,closed:1,mixed:2}
B.lA=new A.aI(B.jO,3,t.M)
B.k1={front:0,"rear-service":1}
B.lB=new A.aI(B.k1,2,t.M)
B.k4={overcast:0,rain:1}
B.lC=new A.aI(B.k4,2,t.M)
B.k_={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lD=new A.aI(B.k_,16,t.M)
B.jY={Escape:0,Tab:1,F11:2}
B.dB=new A.aI(B.jY,3,t.M)
B.jV={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lE=new A.aI(B.jV,5,t.M)
B.jS={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ad=new A.aI(B.jS,7,t.M)
B.jN={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lF=new A.aI(B.jN,9,t.M)
B.dE=new A.eM(2,"link")
B.lR=new A.i4(B.dE,"gl.createProgram() returned null")
B.dC=new A.eM(0,"vertex")
B.dD=new A.eM(1,"fragment")
B.dF=new A.eM(3,"validation")
B.lZ=new A.i5(0,"full")
B.m_=new A.i5(2,"culled")
B.aj=new A.K(0,1,0)
B.bN=new A.K(0,-1,0)
B.m4=new A.by(-1,B.aj,B.bN,B.cL,1,1,0.3,0.5)
B.cS=s([],t.n)
B.m5=new A.kL(!1,"","",B.cS,B.cS)
B.dK=new A.dv(0,"resident")
B.dL=new A.dv(1,"pending")
B.dM=new A.dv(2,"missing")
B.dN=new A.dv(3,"evicted")
B.ai=new A.K(0,0,0)
B.kK=new A.pQ(0,0,0,1)
B.t=new A.re(B.ai,B.kK)
B.m7=A.cn("Gd")
B.m8=A.cn("Ge")
B.m9=A.cn("nD")
B.ma=A.cn("Bs")
B.mb=A.cn("BG")
B.mc=A.cn("BH")
B.md=A.cn("BI")
B.me=A.cn("ab")
B.mf=A.cn("Q")
B.mg=A.cn("w5")
B.mh=A.cn("CA")
B.mi=A.cn("CB")
B.mj=A.cn("ib")
B.e=new A.cX(0,"float1")
B.ag=new A.cX(1,"float2")
B.q=new A.cX(2,"float3")
B.mk=new A.cX(3,"float4")
B.u=new A.cX(4,"mat4")
B.dO=new A.cX(5,"mat4Array")
B.bL=new A.x(B.e,0)
B.dP=new A.x(B.e,1)
B.Q=new A.cX(6,"sampler")
B.v=new A.x(B.Q,0)
B.ah=new A.x(B.Q,1)
B.dQ=new A.x(B.Q,2)
B.ml=new A.x(B.Q,3)
B.mm=new A.x(B.Q,4)
B.mn=new A.x(B.Q,5)
B.mo=new A.x(B.Q,6)
B.mp=new A.rk(!1)
B.mq=new A.K(0,0,1)
B.mr=new A.K(1,0,0)
B.ms=new A.K(1/0,1/0,1/0)
B.mt=new A.K(-1/0,-1/0,-1/0)
B.dS=new A.cZ(6,"tangent4")
B.mF=new A.e6(0,"visitorAnswered")
B.dT=new A.e6(1,"visitorIgnored")
B.mG=new A.e6(2,"entryVerified")
B.mH=new A.e6(3,"entryContradicted")
B.mI=new A.e6(4,"exposureAccepted")
B.mK=new A.d_(1,"malformedDay")
B.mL=new A.d_(2,"malformedTier")
B.dU=new A.d_(3,"missingTierLines")
B.a5=new A.d_(6,"invalidPhase")
B.mO=new A.bj(B.a5,"No reaction is due.")
B.mW=new A.b6(B.mO)
B.mT=new A.bj(B.a5,"The active visit cannot be chosen.")
B.mX=new A.b6(B.mT)
B.mP=new A.bj(B.a5,"The active visit has no line to advance.")
B.mY=new A.b6(B.mP)
B.mN=new A.d_(5,"noActiveVisit")
B.mQ=new A.bj(B.mN,"There is no active visit.")
B.dV=new A.b6(B.mQ)
B.mS=new A.bj(B.a5,"A visit is already active.")
B.mZ=new A.b6(B.mS)
B.mM=new A.d_(4,"noArrival")
B.mV=new A.bj(B.mM,"The authored arrival is missing.")
B.n_=new A.b6(B.mV)
B.mR=new A.bj(B.a5,"That answer is not offered.")
B.n0=new A.b6(B.mR)
B.mJ=new A.d_(0,"missingCorpus")
B.mU=new A.bj(B.mJ,"The authored visitor corpus is empty.")
B.n1=new A.b6(B.mU)
B.dW=new A.eT(1,"exact")
B.bQ=new A.eT(2,"partial")
B.aJ=new A.eT(3,"contradiction")
B.n2=new A.eT(0,"skipped")
B.n3=new A.eS(B.n2,B.a1)
B.n4=new A.eS(B.bQ,B.a1)
B.nw=new A.l9(B.ab,!1)
B.nx=new A.l9(B.ab,!0)
B.dX=new A.ij(0,"horizontal")
B.n5=new A.ij(1,"vertical")
B.dY=new A.il(0,"horizontal")
B.n6=new A.il(1,"vertical")
B.aK=new A.fR(0,"empty")
B.nk=new A.fR(1,"cpuReady")
B.aL=new A.fR(4,"released")})();(function staticFields(){$.t1=null
$.c6=A.c([],A.X("r<Q>"))
$.y2=null
$.pN=0
$.pO=A.EF()
$.xr=null
$.xq=null
$.zY=null
$.zO=null
$.A6=null
$.uM=null
$.uT=null
$.x1=null
$.tj=A.c([],A.X("r<C<Q>?>"))
$.h_=null
$.j_=null
$.j0=null
$.wA=!1
$.ak=B.w
$.yl=""
$.ym=null
$.yh=null
$.pu=null
$.yU=A.a8()
$.f2=A.a8()
$.aP=null
$.tu=A.a8()
$.zj=null
$.G=A.a8()
$.cF=A.a8()
$.a9=A.a8()
$.Z=A.a8()
$.ba=A.a8()
$.T=A.a8()
$.wh=A.a8()
$.wm=null
$.wu=null
$.bn=null
$.wk=!1
$.wL=!1
$.iY=B.aN
$.eg=B.an
$.uD=!1
$.wU=!1
$.Ek=null
$.ww=null
$.wl=null
$.z7=0
$.wB=null
$.m5=!1
$.zk=!1
$.wC=0
$.eh=0
$.wo="booting"
$.cm=0
$.f4=0
$.ar="hall"
$.iV=A.a8()
$.fX=A.a8()
$.c1=A.a8()
$.zp=null
$.wM=0
$.wQ=1.65
$.ei=null
$.bb=null
$.j2=!1
$.cl=A.a8()
$.fY=A.a8()
$.iU=A.a8()
$.lZ=A.a8()
$.yW=A.a8()
$.yV=A.a8()
$.aq=A.a8()
$.m_=A.a8()
$.iT=A.a8()
$.lY=A.a8()
$.iW=A.a8()
$.iX=A.a8()
$.f1=A.a8()
$.ef=A.a8()
$.fW=A.a8()
$.iS=A.a8()
$.iQ=A.a8()
$.iR=A.a8()
$.aB=A.a8()
$.lX=A.a8()
$.b9=A.a8()
$.uE=A.a3(t.S)
$.d5=A.c([],t.s)
$.wt=null
$.zF=!1
$.yZ=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Gh","Ae",()=>A.zW("_$dart_dartClosure"))
s($,"Gg","h8",()=>A.zW("_$dart_dartClosure_dartJSInterop"))
s($,"GZ","AB",()=>A.c([new J.jY()],A.X("r<i1>")))
s($,"Gs","Af",()=>A.dx(A.rg({
toString:function(){return"$receiver$"}})))
s($,"Gt","Ag",()=>A.dx(A.rg({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Gu","Ah",()=>A.dx(A.rg(null)))
s($,"Gv","Ai",()=>A.dx(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Gy","Al",()=>A.dx(A.rg(void 0)))
s($,"Gz","Am",()=>A.dx(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Gx","Ak",()=>A.dx(A.yi(null)))
s($,"Gw","Aj",()=>A.dx(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"GB","Ao",()=>A.dx(A.yi(void 0)))
s($,"GA","An",()=>A.dx(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"GD","xd",()=>A.CZ())
s($,"GH","At",()=>A.BX(4096))
s($,"GF","Ar",()=>new A.tr().$0())
s($,"GG","As",()=>new A.tq().$0())
s($,"GE","Aq",()=>A.BW(A.a_(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"GS","ha",()=>A.mb(B.mf))
s($,"Gq","xc",()=>{A.C8()
return $.pN})
s($,"Gc","Ad",()=>B.bz.fW())
s($,"Gm","xb",()=>A.kg(A.c([255,255,255,255],t.t)))
s($,"Gj","x8",()=>A.kg(A.c([128,128,255,255],t.t)))
s($,"Gi","x7",()=>A.kg(A.c([0,0,0,255],t.t)))
s($,"Gk","x9",()=>A.kg(A.c([255,255,0,255],t.t)))
s($,"Gl","xa",()=>A.kg(A.c([255,255,255,255],t.t)))
s($,"H2","AE",()=>A.id(0,1,0))
s($,"GC","Ap",()=>A.CW(A.a3(t.N),0,0,A.id(0,0,0)))
s($,"H5","f9",()=>{var q=$.yh
if(q==null){A.uJ()
A.uJ()
A.uJ()
A.uJ()
q=$.yh=new A.r4()}return q})
s($,"Gn","vx",()=>A.vJ(B.aV,B.cp,!0,B.aW,B.cr,B.cu,B.cv,B.cx,!0,!1,B.cz))
s($,"GN","Au",()=>new A.mJ())
r($,"zI","d8",()=>A.w2(null,null))
r($,"iZ","h9",()=>A.ft(null,null))
r($,"ws","f8",()=>A.fk(null,null,!1,1,!1,!1,2,1))
r($,"wv","cH",()=>$.vx())
s($,"GT","Ax",()=>new A.ol())
s($,"GU","Ay",()=>new A.or())
s($,"GV","vz",()=>new A.oG(A.n(t.N,t.S)))
s($,"GP","Av",()=>A.e5().gb0().h(0,"debugPause")==="1")
s($,"GM","j5",()=>A.e5().gb0().h(0,"automation")==="1")
s($,"GJ","vy",()=>A.EU())
s($,"GI","xe",()=>$.vy()!=null)
s($,"GK","xf",()=>$.j5()?A.e5().gb0().h(0,"captureMantleId"):null)
s($,"GL","xg",()=>A.e5().gb0().h(0,"captureMantleLit")==="1")
r($,"wP","el",()=>A.id(0,0,0))
r($,"wJ","AA",()=>A.id(0,0,0))
r($,"wV","vA",()=>A.id(0,0,0))
s($,"GO","xh",()=>A.EV())
s($,"GX","mc",()=>new A.nE(A.id(0,0,0)))
s($,"GW","Az",()=>new A.p4(new A.nh()))
s($,"GQ","co",()=>new A.nZ(A.c([],t.s)))
s($,"H_","hc",()=>{var q=new A.qS(B.aH)
q.f=A.X("C<e2>").a(A.c([A.a0(B.P,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a0(B.P,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a0(B.P,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a0(B.P,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a0(B.P,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a0(B.a3,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a0(B.a3,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a0(B.a3,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a0(B.a3,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a0(B.a3,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a0(B.af,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a0(B.af,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a0(B.af,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a0(B.af,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a0(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a0(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a0(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a0(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a0(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a0(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a0(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a0(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a0(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a0(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a0(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a0(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a0(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a0(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a0(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a0(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a0(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a0(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a0(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a0(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a0(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a0(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a0(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a0(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a0(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a0(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a0(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a0(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a0(B.P,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.X("r<e2>")))
return q})
s($,"H1","AD",()=>new A.qR(A.n(t.N,t.z)))
s($,"H0","AC",()=>new A.pR(A.Ca(520588),B.b3))
s($,"GR","Aw",()=>new A.oh())
s($,"GY","hb",()=>new A.py(B.bn))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fB,ArrayBuffer:A.fA,ArrayBufferView:A.hO,DataView:A.k9,Float32Array:A.hL,Float64Array:A.ka,Int16Array:A.kb,Int32Array:A.kc,Int8Array:A.kd,Uint16Array:A.ke,Uint32Array:A.kf,Uint8ClampedArray:A.eC,CanvasPixelArray:A.eC,Uint8Array:A.hP})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.iu.$nativeSuperclassTag="ArrayBufferView"
A.iv.$nativeSuperclassTag="ArrayBufferView"
A.hM.$nativeSuperclassTag="ArrayBufferView"
A.iw.$nativeSuperclassTag="ArrayBufferView"
A.ix.$nativeSuperclassTag="ArrayBufferView"
A.hN.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.uU
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
