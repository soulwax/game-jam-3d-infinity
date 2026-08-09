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
if(a[b]!==s){A.zh(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.qJ(b)
return new s(c,this)}:function(){if(s===null)s=A.qJ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.qJ(a).prototype
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
qO(a,b,c,d){return{i:a,p:b,e:c,x:d}},
pa(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qM==null){A.yU()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.rD("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.o6
if(o==null)o=$.o6=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.z1(a)
if(p!=null)return p
if(typeof a=="function")return B.e3
s=Object.getPrototypeOf(a)
if(s==null)return B.bz
if(s===Object.prototype)return B.bz
if(typeof q=="function"){o=$.o6
if(o==null)o=$.o6=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aJ,enumerable:false,writable:true,configurable:true})
return B.aJ}return B.aJ},
ra(a,b){if(a<0||a>4294967295)throw A.d(A.aR(a,0,4294967295,"length",null))
return J.vx(new Array(a),b)},
rb(a,b){if(a<0)throw A.d(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("r<0>"))},
i6(a,b){if(a<0)throw A.d(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("r<0>"))},
vx(a,b){var s=A.f(a,b.i("r<0>"))
s.$flags=1
return s},
vy(a,b){var s=t.bP
return J.qT(s.a(a),s.a(b))},
re(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
vz(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.re(r))break;++b}return b},
vA(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.re(q))break}return b},
dS(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.f5.prototype
return J.i8.prototype}if(typeof a=="string")return J.dk.prototype
if(a==null)return J.f6.prototype
if(typeof a=="boolean")return J.i7.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
if(typeof a=="symbol")return J.ee.prototype
if(typeof a=="bigint")return J.ed.prototype
return a}if(a instanceof A.B)return a
return J.pa(a)},
av(a){if(typeof a=="string")return J.dk.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
if(typeof a=="symbol")return J.ee.prototype
if(typeof a=="bigint")return J.ed.prototype
return a}if(a instanceof A.B)return a
return J.pa(a)},
bZ(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
if(typeof a=="symbol")return J.ee.prototype
if(typeof a=="bigint")return J.ed.prototype
return a}if(a instanceof A.B)return a
return J.pa(a)},
yQ(a){if(typeof a=="number")return J.dj.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.dz.prototype
return a},
tW(a){if(typeof a=="number")return J.dj.prototype
if(typeof a=="string")return J.dk.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.dz.prototype
return a},
yR(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
if(typeof a=="symbol")return J.ee.prototype
if(typeof a=="bigint")return J.ed.prototype
return a}if(a instanceof A.B)return a
return J.pa(a)},
qS(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tW(a).U(a,b)},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dS(a).V(a,b)},
aV(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.z_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).h(a,b)},
bP(a,b,c){return J.bZ(a).l(a,b,c)},
hi(a,b){return J.bZ(a).k(a,b)},
ux(a,b){return J.bZ(a).J(a,b)},
uy(a,b){return J.bZ(a).R(a,b)},
uz(a,b,c){return J.yR(a).f8(a,b,c)},
uA(a,b){return J.bZ(a).c3(a,b)},
qT(a,b){return J.tW(a).F(a,b)},
k4(a,b){return J.bZ(a).T(a,b)},
bl(a){return J.dS(a).gG(a)},
qU(a){return J.av(a).gI(a)},
uB(a){return J.av(a).gM(a)},
O(a){return J.bZ(a).gt(a)},
aW(a){return J.av(a).gq(a)},
dU(a){return J.dS(a).gP(a)},
dV(a,b,c){return J.bZ(a).bG(a,b,c)},
uC(a,b){return J.av(a).sq(a,b)},
uD(a,b){return J.bZ(a).Y(a,b)},
pH(a,b){return J.yQ(a).lM(a,b)},
dW(a){return J.dS(a).n(a)},
uE(a,b){return J.bZ(a).dZ(a,b)},
i3:function i3(){},
i7:function i7(){},
f6:function f6(){},
f7:function f7(){},
cJ:function cJ(){},
is:function is(){},
dz:function dz(){},
cm:function cm(){},
ed:function ed(){},
ee:function ee(){},
r:function r(a){this.$ti=a},
i5:function i5(){},
lW:function lW(a){this.$ti=a},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dj:function dj(){},
f5:function f5(){},
i8:function i8(){},
dk:function dk(){}},A={pL:function pL(){},
jY(){return $},
uO(a,b,c){if(t.gt.b(a))return new A.fJ(a,b.i("@<0>").D(c).i("fJ<1,2>"))
return new A.d6(a,b.i("@<0>").D(c).i("d6<1,2>"))},
rh(a){return new A.dl("Field '"+a+"' has been assigned during initialization.")},
a_(a){return new A.dl("Field '"+a+"' has not been initialized.")},
vC(a){return new A.dl("Field '"+a+"' has already been initialized.")},
pb(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cs(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nm(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dR(a,b,c){return a},
qN(a){var s,r
for(s=$.bC.length,r=0;r<s;++r)if(a===$.bC[r])return!0
return!1},
nl(a,b,c,d){A.iA(b,"start")
if(c!=null){A.iA(c,"end")
if(b>c)A.k(A.aR(b,0,c,"start",null))}return new A.fw(a,b,c,d.i("fw<0>"))},
id(a,b,c,d){if(t.gt.b(a))return new A.da(a,b,c.i("@<0>").D(d).i("da<1,2>"))
return new A.cn(a,b,c.i("@<0>").D(d).i("cn<1,2>"))},
i4(){return new A.en("No element")},
vv(){return new A.en("Too many elements")},
iI(a,b,c,d,e){if(c-b<=32)A.w5(a,b,c,d,e)
else A.w4(a,b,c,d,e)},
w5(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.av(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a8()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
w4(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.L(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.L(a4+a5,2),f=g-j,e=g+j,d=J.av(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a9(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.h(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.l(a3,o,d.h(a3,r))
d.l(a3,r,n)}++r}else for(;;){m=a6.$2(d.h(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.l(a3,o,d.h(a3,r))
k=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,n)
q=l
r=k
break}else{d.l(a3,o,d.h(a3,q))
d.l(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.l(a3,o,d.h(a3,r))
d.l(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.l(a3,o,d.h(a3,r))
k=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,n)
r=k}else{d.l(a3,o,d.h(a3,q))
d.l(a3,q,n)}q=l
break}}a2=r-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=q+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
A.iI(a3,a4,r-2,a6,a7)
A.iI(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a9(a6.$2(d.h(a3,r),b),0))++r
while(J.a9(a6.$2(d.h(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.l(a3,o,d.h(a3,r))
d.l(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.l(a3,o,d.h(a3,r))
k=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,n)
r=k}else{d.l(a3,o,d.h(a3,q))
d.l(a3,q,n)}q=l
break}}A.iI(a3,r,q,a6,a7)}else A.iI(a3,r,q,a6,a7)},
cV:function cV(){},
eR:function eR(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a,b){this.a=a
this.$ti=b},
fH:function fH(){},
nS:function nS(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.$ti=b},
dl:function dl(a){this.a=a},
d7:function d7(a){this.a=a},
n6:function n6(){},
F:function F(){},
a2:function a2(){},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(a,b){this.a=a
this.$ti=b},
fC:function fC(a,b){this.a=a
this.$ti=b},
ag:function ag(){},
c7:function c7(){},
ep:function ep(){},
fr:function fr(a,b){this.a=a
this.$ti=b},
h9:function h9(){},
cg(a,b,c){var s,r,q,p,o,n,m,l=A.ax(a.gS(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.ax(a.gal(),!0,c)
m=new A.a4(q,n,b.i("@<0>").D(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.eT(A.aX(a,b,c),b.i("@<0>").D(c).i("eT<1,2>"))},
uU(){throw A.d(A.ay("Cannot modify unmodifiable Map"))},
uV(){throw A.d(A.ay("Cannot modify constant Set"))},
ua(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
z_(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dW(a)
return s},
fl(a){var s,r=$.ro
if(r==null)r=$.ro=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
mB(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
rp(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.dT(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ix(a){var s,r,q,p
if(a instanceof A.B)return A.bB(A.bk(a),null)
s=J.dS(a)
if(s===B.e2||s===B.e4||t.cx.b(a)){r=B.aR(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bB(A.bk(a),null)},
rq(a){var s,r,q
if(a==null||typeof a=="number"||A.bL(a))return J.dW(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cE)return a.n(0)
if(a instanceof A.bI)return a.f1(!0)
s=$.uv()
for(r=0;r<1;++r){q=s[r].lN(a)
if(q!=null)return q}return"Instance of '"+A.ix(a)+"'"},
vM(){return Date.now()},
vV(){var s,r
if($.mC!==0)return
$.mC=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mC=1e6
$.mD=new A.mA(r)},
vL(){if(!!self.location)return self.location.href
return null},
vW(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ai(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cU(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aR(a,0,1114111,null,null))},
eh(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vU(a){var s=A.eh(a).getUTCFullYear()+0
return s},
vS(a){var s=A.eh(a).getUTCMonth()+1
return s},
vO(a){var s=A.eh(a).getUTCDate()+0
return s},
vP(a){var s=A.eh(a).getUTCHours()+0
return s},
vR(a){var s=A.eh(a).getUTCMinutes()+0
return s},
vT(a){var s=A.eh(a).getUTCSeconds()+0
return s},
vQ(a){var s=A.eh(a).getUTCMilliseconds()+0
return s},
vN(a){var s=a.$thrownJsError
if(s==null)return null
return A.ce(s)},
rr(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.ao(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
k_(a){throw A.d(A.qI(a))},
e(a,b){if(a==null)J.aW(a)
throw A.d(A.p7(a,b))},
p7(a,b){var s,r="index"
if(!A.aL(b))return new A.bR(!0,b,r,null)
s=A.a(J.aW(a))
if(b<0||b>=s)return A.lR(b,s,a,r)
return A.rt(b,r)},
yK(a,b,c){if(a>c)return A.aR(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aR(b,a,c,"end",null)
return new A.bR(!0,b,"end",null)},
qI(a){return new A.bR(!0,a,null,null)},
d(a){return A.ao(a,new Error())},
ao(a,b){var s
if(a==null)a=new A.ct()
b.dartException=a
s=A.zj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
zj(){return J.dW(this.dartException)},
k(a,b){throw A.ao(a,b==null?new Error():b)},
b6(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.xq(a,b,c),s)},
xq(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fz("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.d(A.ap(a))},
cu(a){var s,r,q,p,o,n
a=A.u3(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.nt(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
nu(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rC(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
pM(a,b){var s=b==null,r=s?null:b.method
return new A.i9(a,r,s?null:b.receiver)},
ad(a){var s
if(a==null)return new A.mo(a)
if(a instanceof A.eY){s=a.a
return A.d3(a,s==null?A.eC(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.d3(a,a.dartException)
return A.yk(a)},
d3(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
yk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cU(r,16)&8191)===10)switch(q){case 438:return A.d3(a,A.pM(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.d3(a,new A.fh())}}if(a instanceof TypeError){p=$.ud()
o=$.ue()
n=$.uf()
m=$.ug()
l=$.uj()
k=$.uk()
j=$.ui()
$.uh()
i=$.um()
h=$.ul()
g=p.az(s)
if(g!=null)return A.d3(a,A.pM(A.D(s),g))
else{g=o.az(s)
if(g!=null){g.method="call"
return A.d3(a,A.pM(A.D(s),g))}else if(n.az(s)!=null||m.az(s)!=null||l.az(s)!=null||k.az(s)!=null||j.az(s)!=null||m.az(s)!=null||i.az(s)!=null||h.az(s)!=null){A.D(s)
return A.d3(a,new A.fh())}}return A.d3(a,new A.iS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fu()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.d3(a,new A.bR(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fu()
return a},
ce(a){var s
if(a instanceof A.eY)return a.b
if(a==null)return new A.fX(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fX(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
k0(a){if(a==null)return J.bl(a)
if(typeof a=="object")return A.fl(a)
return J.bl(a)},
yE(a){if(typeof a=="number")return B.d.gG(a)
if(a instanceof A.jH)return A.fl(a)
if(a instanceof A.bI)return a.gG(a)
return A.k0(a)},
tV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
yP(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
xL(a,b,c,d,e,f){t.gY.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.e7("Unsupported number of arguments for wrapped closure"))},
eL(a,b){var s=a.$identity
if(!!s)return s
s=A.yF(a,b)
a.$identity=s
return s},
yF(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.xL)},
uT(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iL().constructor.prototype):Object.create(new A.e1(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.r_(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.uP(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.r_(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
uP(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.uM)}throw A.d("Error in functionType of tearoff")},
uQ(a,b,c,d){var s=A.qZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
r_(a,b,c,d){if(c)return A.uS(a,b,d)
return A.uQ(b.length,d,a,b)},
uR(a,b,c,d){var s=A.qZ,r=A.uN
switch(b?-1:a){case 0:throw A.d(new A.iE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
uS(a,b,c){var s,r
if($.qX==null)$.qX=A.qW("interceptor")
if($.qY==null)$.qY=A.qW("receiver")
s=b.length
r=A.uR(s,c,a,b)
return r},
qJ(a){return A.uT(a)},
uM(a,b){return A.h1(v.typeUniverse,A.bk(a.a),b)},
qZ(a){return a.a},
uN(a){return a.b},
qW(a){var s,r,q,p=new A.e1("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.w("Field name "+a+" not found.",null))},
tX(a){return v.getIsolateTag(a)},
u6(){return v.G},
zR(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
z1(a){var s,r,q,p,o,n=A.D($.tY.$1(a)),m=$.p8[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pf[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bz($.tS.$2(a,n))
if(q!=null){m=$.p8[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pf[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.py(s)
$.p8[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.pf[n]=s
return s}if(p==="-"){o=A.py(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.u1(a,s)
if(p==="*")throw A.d(A.rD(n))
if(v.leafTags[n]===true){o=A.py(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.u1(a,s)},
u1(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.qO(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
py(a){return J.qO(a,!1,null,!!a.$ibp)},
z5(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.py(s)
else return J.qO(s,c,null,null)},
yU(){if(!0===$.qM)return
$.qM=!0
A.yV()},
yV(){var s,r,q,p,o,n,m,l
$.p8=Object.create(null)
$.pf=Object.create(null)
A.yT()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.u2.$1(o)
if(n!=null){m=A.z5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
yT(){var s,r,q,p,o,n,m=B.ct()
m=A.eK(B.cu,A.eK(B.cv,A.eK(B.aS,A.eK(B.aS,A.eK(B.cw,A.eK(B.cx,A.eK(B.cy(B.aR),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.tY=new A.pc(p)
$.tS=new A.pd(o)
$.u2=new A.pe(n)},
eK(a,b){return a(b)||b},
wE(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.a9(r,b[s]))return!1}return!0},
yH(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ze(a,b,c){var s=a.indexOf(b,c)
return s>=0},
yN(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
u3(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zf(a,b,c){var s=A.zg(a,b,c)
return s},
zg(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.u3(b),"g"),A.yN(c))},
bx:function bx(a,b){this.a=a
this.b=b},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a){this.a=a},
eT:function eT(a,b){this.a=a
this.$ti=b},
e4:function e4(){},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f_:function f_(a,b){this.a=a
this.$ti=b},
eU:function eU(){},
ch:function ch(a,b,c){this.a=a
this.b=b
this.$ti=c},
mA:function mA(a){this.a=a},
fs:function fs(){},
nt:function nt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fh:function fh(){},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
mo:function mo(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a
this.b=null},
cE:function cE(){},
hx:function hx(){},
hy:function hy(){},
iO:function iO(){},
iL:function iL(){},
e1:function e1(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
bE:function bE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
m4:function m4(a){this.a=a},
mc:function mc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ah:function ah(a,b){this.a=a
this.$ti=b},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aE:function aE(a,b){this.a=a
this.$ti=b},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
U:function U(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f8:function f8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
bI:function bI(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
zh(a){throw A.ao(A.rh(a),new Error())},
i(){throw A.ao(A.a_(""),new Error())},
y(){throw A.ao(A.vC(""),new Error())},
u9(){throw A.ao(A.rh(""),new Error())},
ac(){var s=new A.nT()
return s.b=s},
nT:function nT(){this.b=null},
a3(a){return a},
vG(a,b,c){return new Float32Array(a,b,c)},
vH(a){return new Uint8Array(a)},
vI(a){return new Uint8Array(A.a3(a))},
cB(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.p7(b,a))},
xj(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.yK(a,b,c))
return b},
cM:function cM(){},
eg:function eg(){},
ff:function ff(){},
oj:function oj(a){this.a=a},
ii:function ii(){},
aF:function aF(){},
fd:function fd(){},
fe:function fe(){},
fc:function fc(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
dq:function dq(){},
fg:function fg(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
pX(a,b){var s=b.c
return s==null?b.c=A.h_(a,"bn",[b.x]):s},
ru(a){var s=a.w
if(s===6||s===7)return A.ru(a.x)
return s===11||s===12},
w1(a){return a.as},
z6(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aq(a){return A.oi(v.typeUniverse,a,!1)},
dQ(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dQ(a1,s,a3,a4)
if(r===s)return a2
return A.t0(a1,r,!0)
case 7:s=a2.x
r=A.dQ(a1,s,a3,a4)
if(r===s)return a2
return A.t_(a1,r,!0)
case 8:q=a2.y
p=A.eJ(a1,q,a3,a4)
if(p===q)return a2
return A.h_(a1,a2.x,p)
case 9:o=a2.x
n=A.dQ(a1,o,a3,a4)
m=a2.y
l=A.eJ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.q9(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eJ(a1,j,a3,a4)
if(i===j)return a2
return A.t1(a1,k,i)
case 11:h=a2.x
g=A.dQ(a1,h,a3,a4)
f=a2.y
e=A.yg(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.rZ(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eJ(a1,d,a3,a4)
o=a2.x
n=A.dQ(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.qa(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.hn("Attempted to substitute unexpected RTI kind "+a0))}},
eJ(a,b,c,d){var s,r,q,p,o=b.length,n=A.on(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dQ(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
yh(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.on(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dQ(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
yg(a,b,c,d){var s,r=b.a,q=A.eJ(a,r,c,d),p=b.b,o=A.eJ(a,p,c,d),n=b.c,m=A.yh(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jj()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
qK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.yS(s)
return a.$S()}return null},
yW(a,b){var s
if(A.ru(b))if(a instanceof A.cE){s=A.qK(a)
if(s!=null)return s}return A.bk(a)},
bk(a){if(a instanceof A.B)return A.o(a)
if(Array.isArray(a))return A.K(a)
return A.qp(J.dS(a))},
K(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.qp(a)},
qp(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.xI(a,s)},
xI(a,b){var s=a instanceof A.cE?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.wN(v.typeUniverse,s.name)
b.$ccache=r
return r},
yS(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.oi(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jZ(a){return A.cd(A.o(a))},
qG(a){var s
if(a instanceof A.bI)return a.ey()
s=a instanceof A.cE?A.qK(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dU(a).a
if(Array.isArray(a))return A.K(a)
return A.bk(a)},
cd(a){var s=a.r
return s==null?a.r=new A.jH(a):s},
yO(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.e(q,0)
s=A.h1(v.typeUniverse,A.qG(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.t2(v.typeUniverse,s,A.qG(q[r]))}return A.h1(v.typeUniverse,s,a)},
bO(a){return A.cd(A.oi(v.typeUniverse,a,!1))},
xH(a){var s=this
s.b=A.yc(s)
return s.b(a)},
yc(a){var s,r,q,p,o
if(a===t.K)return A.xR
if(A.dT(a))return A.xV
s=a.w
if(s===6)return A.xD
if(s===1)return A.ty
if(s===7)return A.xM
r=A.yb(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dT)){a.f="$i"+q
if(q==="E")return A.xP
if(a===t.m)return A.xO
return A.xU}}else if(s===10){p=A.yH(a.x,a.y)
o=p==null?A.ty:p
return o==null?A.eC(o):o}return A.xB},
yb(a){if(a.w===8){if(a===t.S)return A.aL
if(a===t.i||a===t.o)return A.xQ
if(a===t.N)return A.xT
if(a===t.y)return A.bL}return null},
xG(a){var s=this,r=A.xA
if(A.dT(s))r=A.xf
else if(s===t.K)r=A.eC
else if(A.eM(s)){r=A.xC
if(s===t.aV)r=A.th
else if(s===t.w)r=A.bz
else if(s===t.fU)r=A.xe
else if(s===t.jh)r=A.ti
else if(s===t.dC)r=A.tg
else if(s===t.mU)r=A.h}else if(s===t.S)r=A.a
else if(s===t.N)r=A.D
else if(s===t.y)r=A.au
else if(s===t.o)r=A.b0
else if(s===t.i)r=A.d0
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
xB(a){var s=this
if(a==null)return A.eM(s)
return A.z0(v.typeUniverse,A.yW(a,s),s)},
xD(a){if(a==null)return!0
return this.x.b(a)},
xU(a){var s,r=this
if(a==null)return A.eM(r)
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dS(a)[s]},
xP(a){var s,r=this
if(a==null)return A.eM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dS(a)[s]},
xO(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.B)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
tx(a){if(typeof a=="object"){if(a instanceof A.B)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
xA(a){var s=this
if(a==null){if(A.eM(s))return a}else if(s.b(a))return a
throw A.ao(A.to(a,s),new Error())},
xC(a){var s=this
if(a==null||s.b(a))return a
throw A.ao(A.to(a,s),new Error())},
to(a,b){return new A.fY("TypeError: "+A.rR(a,A.bB(b,null)))},
rR(a,b){return A.hN(a)+": type '"+A.bB(A.qG(a),null)+"' is not a subtype of type '"+b+"'"},
bJ(a,b){return new A.fY("TypeError: "+A.rR(a,b))},
xM(a){var s=this
return s.x.b(a)||A.pX(v.typeUniverse,s).b(a)},
xR(a){return a!=null},
eC(a){if(a!=null)return a
throw A.ao(A.bJ(a,"Object"),new Error())},
xV(a){return!0},
xf(a){return a},
ty(a){return!1},
bL(a){return!0===a||!1===a},
au(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ao(A.bJ(a,"bool"),new Error())},
xe(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ao(A.bJ(a,"bool?"),new Error())},
d0(a){if(typeof a=="number")return a
throw A.ao(A.bJ(a,"double"),new Error())},
tg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ao(A.bJ(a,"double?"),new Error())},
aL(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ao(A.bJ(a,"int"),new Error())},
th(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ao(A.bJ(a,"int?"),new Error())},
xQ(a){return typeof a=="number"},
b0(a){if(typeof a=="number")return a
throw A.ao(A.bJ(a,"num"),new Error())},
ti(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ao(A.bJ(a,"num?"),new Error())},
xT(a){return typeof a=="string"},
D(a){if(typeof a=="string")return a
throw A.ao(A.bJ(a,"String"),new Error())},
bz(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ao(A.bJ(a,"String?"),new Error())},
c(a){if(A.tx(a))return a
throw A.ao(A.bJ(a,"JSObject"),new Error())},
h(a){if(a==null)return a
if(A.tx(a))return a
throw A.ao(A.bJ(a,"JSObject?"),new Error())},
tL(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bB(a[q],b)
return s},
y1(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.tL(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bB(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
tr(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.f([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.e(a4,l)
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
if(l===8){p=A.yj(a.x)
o=a.y
return o.length>0?p+("<"+A.tL(o,b)+">"):p}if(l===10)return A.y1(a,b)
if(l===11)return A.tr(a,b,null)
if(l===12)return A.tr(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
yj(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
wO(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
wN(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.oi(a,b,!1)
else if(typeof m=="number"){s=m
r=A.h0(a,5,"#")
q=A.on(s)
for(p=0;p<s;++p)q[p]=r
o=A.h_(a,b,q)
n[b]=o
return o}else return m},
wM(a,b){return A.ta(a.tR,b)},
wL(a,b){return A.ta(a.eT,b)},
oi(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.rW(A.rU(a,null,b,!1))
r.set(b,s)
return s},
h1(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.rW(A.rU(a,b,c,!0))
q.set(c,r)
return r},
t2(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.q9(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cZ(a,b){b.a=A.xG
b.b=A.xH
return b},
h0(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bV(null,null)
s.w=b
s.as=c
r=A.cZ(a,s)
a.eC.set(c,r)
return r},
t0(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.wJ(a,b,r,c)
a.eC.set(r,s)
return s},
wJ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dT(b))if(!(b===t.c||b===t.T))if(s!==6)r=s===7&&A.eM(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.bV(null,null)
q.w=6
q.x=b
q.as=c
return A.cZ(a,q)},
t_(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.wH(a,b,r,c)
a.eC.set(r,s)
return s},
wH(a,b,c,d){var s,r
if(d){s=b.w
if(A.dT(b)||b===t.K)return b
else if(s===1)return A.h_(a,"bn",[b])
else if(b===t.c||b===t.T)return t.gK}r=new A.bV(null,null)
r.w=7
r.x=b
r.as=c
return A.cZ(a,r)},
wK(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bV(null,null)
s.w=13
s.x=b
s.as=q
r=A.cZ(a,s)
a.eC.set(q,r)
return r},
fZ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
wG(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
h_(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fZ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bV(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cZ(a,r)
a.eC.set(p,q)
return q},
q9(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fZ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bV(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cZ(a,o)
a.eC.set(q,n)
return n},
t1(a,b,c){var s,r,q="+"+(b+"("+A.fZ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bV(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cZ(a,s)
a.eC.set(q,r)
return r},
rZ(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fZ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fZ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.wG(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bV(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cZ(a,p)
a.eC.set(r,o)
return o},
qa(a,b,c,d){var s,r=b.as+("<"+A.fZ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.wI(a,b,c,r,d)
a.eC.set(r,s)
return s},
wI(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.on(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dQ(a,b,r,0)
m=A.eJ(a,c,r,0)
return A.qa(a,n,m,c!==m)}}l=new A.bV(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cZ(a,l)},
rU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
rW(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.wz(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.rV(a,r,l,k,!1)
else if(q===46)r=A.rV(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dM(a.u,a.e,k.pop()))
break
case 94:k.push(A.wK(a.u,k.pop()))
break
case 35:k.push(A.h0(a.u,5,"#"))
break
case 64:k.push(A.h0(a.u,2,"@"))
break
case 126:k.push(A.h0(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.wB(a,k)
break
case 38:A.wA(a,k)
break
case 63:p=a.u
k.push(A.t0(p,A.dM(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.t_(p,A.dM(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.wy(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.rX(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.wD(a.u,a.e,o)
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
return A.dM(a.u,a.e,m)},
wz(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
rV(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.wO(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.w1(o)+'"')
d.push(A.h1(s,o,n))}else d.push(p)
return m},
wB(a,b){var s,r=a.u,q=A.rT(a,b),p=b.pop()
if(typeof p=="string")b.push(A.h_(r,p,q))
else{s=A.dM(r,a.e,p)
switch(s.w){case 11:b.push(A.qa(r,s,q,a.n))
break
default:b.push(A.q9(r,s,q))
break}}},
wy(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.rT(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dM(p,a.e,o)
q=new A.jj()
q.a=s
q.b=n
q.c=m
b.push(A.rZ(p,r,q))
return
case-4:b.push(A.t1(p,b.pop(),s))
return
default:throw A.d(A.hn("Unexpected state under `()`: "+A.q(o)))}},
wA(a,b){var s=b.pop()
if(0===s){b.push(A.h0(a.u,1,"0&"))
return}if(1===s){b.push(A.h0(a.u,4,"1&"))
return}throw A.d(A.hn("Unexpected extended operation "+A.q(s)))},
rT(a,b){var s=b.splice(a.p)
A.rX(a.u,a.e,s)
a.p=b.pop()
return s},
dM(a,b,c){if(typeof c=="string")return A.h_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.wC(a,b,c)}else return c},
rX(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dM(a,b,c[s])},
wD(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dM(a,b,c[s])},
wC(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.hn("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.hn("Bad index "+c+" for "+b.n(0)))},
z0(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.at(a,b,null,c,null)
r.set(c,s)}return s},
at(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dT(d))return!0
s=b.w
if(s===4)return!0
if(A.dT(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.at(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.T){if(q===7)return A.at(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.at(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.at(a,b.x,c,d,e))return!1
return A.at(a,A.pX(a,b),c,d,e)}if(s===6)return A.at(a,p,c,d,e)&&A.at(a,b.x,c,d,e)
if(q===7){if(A.at(a,b,c,d.x,e))return!0
return A.at(a,b,c,A.pX(a,d),e)}if(q===6)return A.at(a,b,c,p,e)||A.at(a,b,c,d.x,e)
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
if(!A.at(a,j,c,i,e)||!A.at(a,i,e,j,c))return!1}return A.tw(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.tw(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.xN(a,b,c,d,e)}if(o&&q===10)return A.xS(a,b,c,d,e)
return!1},
tw(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.at(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.at(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.at(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.at(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.at(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
xN(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.h1(a,b,r[o])
return A.te(a,p,null,c,d.y,e)}return A.te(a,b.y,null,c,d.y,e)},
te(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.at(a,b[s],d,e[s],f))return!1
return!0},
xS(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.at(a,r[s],c,q[s],e))return!1
return!0},
eM(a){var s=a.w,r=!0
if(!(a===t.c||a===t.T))if(!A.dT(a))if(s!==6)r=s===7&&A.eM(a.x)
return r},
dT(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ta(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
on(a){return a>0?new Array(a):v.typeUniverse.sEA},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jj:function jj(){this.c=this.b=this.a=null},
jH:function jH(a){this.a=a},
jh:function jh(){},
fY:function fY(a){this.a=a},
ws(){var s,r,q
if(self.scheduleImmediate!=null)return A.yx()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eL(new A.nP(s),1)).observe(r,{childList:true})
return new A.nO(s,r,q)}else if(self.setImmediate!=null)return A.yy()
return A.yz()},
wt(a){self.scheduleImmediate(A.eL(new A.nQ(t.M.a(a)),0))},
wu(a){self.setImmediate(A.eL(new A.nR(t.M.a(a)),0))},
wv(a){A.pZ(B.cK,t.M.a(a))},
pZ(a,b){return A.wF(a.a/1000|0,b)},
wF(a,b){var s=new A.og()
s.iP(a,b)
return s},
b4(a){return new A.j7(new A.aj($.ab,a.i("aj<0>")),a.i("j7<0>"))},
b3(a,b){a.$2(0,null)
b.b=!0
return b.a},
a8(a,b){A.xh(a,b)},
b2(a,b){b.cX(a)},
b1(a,b){b.cY(A.ad(a),A.ce(a))},
xh(a,b){var s,r,q=new A.ou(b),p=new A.ov(b)
if(a instanceof A.aj)a.f0(q,p,t.z)
else{s=t.z
if(a instanceof A.aj)a.dS(q,p,s)
else{r=new A.aj($.ab,t.e)
r.a=8
r.c=a
r.f0(q,p,s)}}},
b5(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ab.hM(new A.p3(s),t.H,t.S,t.z)},
rY(a,b,c){return 0},
kg(a){var s
if(t.V.b(a)){s=a.gbj()
if(s!=null)return s}return B.U},
pJ(a){var s
a.a(null)
s=new A.aj($.ab,a.i("aj<0>"))
s.cD(null)
return s},
vk(a,b,c){var s=new A.aj($.ab,c.i("aj<0>"))
A.wa(a,new A.lh(b,s,c))
return s},
li(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aj($.ab,b.i("aj<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.lk(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.dS(new A.lj(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bR(A.f([],b.i("r<0>")))
return n}i.a=A.c1(n,null,!1,b.i("0?"))}catch(l){p=A.ad(l)
o=A.ce(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.qq(m,k)
m=new A.aC(m,k==null?A.kg(m):k)
n.bN(m)
return n}else{i.d=p
i.c=o}}return f},
qq(a,b){if($.ab===B.r)return null
return null},
xJ(a,b){if($.ab!==B.r)A.qq(a,b)
if(b==null)if(t.V.b(a)){b=a.gbj()
if(b==null){A.rr(a,B.U)
b=B.U}}else b=B.U
else if(t.V.b(a))A.rr(a,b)
return new A.aC(a,b)},
nY(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.e;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.w6()
b.bN(new A.aC(new A.bR(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eH(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bo()
b.bQ(o.a)
A.dG(b,p)
return}b.a^=2
A.jW(null,null,b.b,t.M.a(new A.nZ(o,b)))},
dG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.qz(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dG(d.a,c)
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
A.qz(j.a,j.b)
return}g=$.ab
if(g!==h)$.ab=h
else g=null
c=c.c
if((c&15)===8)new A.o2(q,d,n).$0()
else if(o){if((c&1)!==0)new A.o1(q,j).$0()}else if((c&2)!==0)new A.o0(d,q).$0()
if(g!=null)$.ab=g
c=q.c
if(c instanceof A.aj){p=q.a.$ti
p=p.i("bn<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bX(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.nY(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bX(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
y2(a,b){var s
if(t.ng.b(a))return b.hM(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.aw(a,"onError",u.c))},
xY(){var s,r
for(s=$.eG;s!=null;s=$.eG){$.hd=null
r=s.b
$.eG=r
if(r==null)$.hc=null
s.a.$0()}},
ye(){$.qr=!0
try{A.xY()}finally{$.hd=null
$.qr=!1
if($.eG!=null)$.qR().$1(A.tT())}},
tP(a){var s=new A.j8(a),r=$.hc
if(r==null){$.eG=$.hc=s
if(!$.qr)$.qR().$1(A.tT())}else $.hc=r.b=s},
y9(a){var s,r,q,p=$.eG
if(p==null){A.tP(a)
$.hd=$.hc
return}s=new A.j8(a)
r=$.hd
if(r==null){s.b=p
$.eG=$.hd=s}else{q=r.b
s.b=q
$.hd=r.b=s
if(q==null)$.hc=s}},
zu(a,b){A.dR(a,"stream",t.K)
return new A.jF(b.i("jF<0>"))},
wa(a,b){var s=$.ab
if(s===B.r)return A.pZ(a,t.M.a(b))
return A.pZ(a,t.M.a(s.fa(b)))},
qz(a,b){A.y9(new A.oX(a,b))},
tK(a,b,c,d,e){var s,r=$.ab
if(r===c)return d.$0()
$.ab=c
s=r
try{r=d.$0()
return r}finally{$.ab=s}},
y7(a,b,c,d,e,f,g){var s,r=$.ab
if(r===c)return d.$1(e)
$.ab=c
s=r
try{r=d.$1(e)
return r}finally{$.ab=s}},
y6(a,b,c,d,e,f,g,h,i){var s,r=$.ab
if(r===c)return d.$2(e,f)
$.ab=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ab=s}},
jW(a,b,c,d){t.M.a(d)
if(B.r!==c){d=c.fa(d)
d=d}A.tP(d)},
nP:function nP(a){this.a=a},
nO:function nO(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function nQ(a){this.a=a},
nR:function nR(a){this.a=a},
og:function og(){},
oh:function oh(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=!1
this.$ti=b},
ou:function ou(a){this.a=a},
ov:function ov(a){this.a=a},
p3:function p3(a){this.a=a},
by:function by(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
ca:function ca(a,b){this.a=a
this.$ti=b},
aC:function aC(a,b){this.a=a
this.b=b},
lh:function lh(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lj:function lj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jb:function jb(){},
fE:function fE(a,b){this.a=a
this.$ti=b},
dF:function dF(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aj:function aj(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
nV:function nV(a,b){this.a=a
this.b=b},
o_:function o_(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
this.b=b},
nW:function nW(a,b){this.a=a
this.b=b},
o2:function o2(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function o3(a,b){this.a=a
this.b=b},
o4:function o4(a){this.a=a},
o1:function o1(a,b){this.a=a
this.b=b},
o0:function o0(a,b){this.a=a
this.b=b},
j8:function j8(a){this.a=a
this.b=null},
jF:function jF(a){this.$ti=a},
h8:function h8(){},
jx:function jx(){},
oe:function oe(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
rS(a,b){var s=a[b]
return s===a?null:s},
q7(a,b,c){if(c==null)a[b]=a
else a[b]=c},
q6(){var s=Object.create(null)
A.q7(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
rj(a,b){return new A.bE(a.i("@<0>").D(b).i("bE<1,2>"))},
V(a,b,c){return b.i("@<0>").D(c).i("pN<1,2>").a(A.tV(a,new A.bE(b.i("@<0>").D(c).i("bE<1,2>"))))},
x(a,b){return new A.bE(a.i("@<0>").D(b).i("bE<1,2>"))},
pO(a){return new A.bH(a.i("bH<0>"))},
a5(a){return new A.bH(a.i("bH<0>"))},
ar(a,b){return b.i("rk<0>").a(A.yP(a,new A.bH(b.i("bH<0>"))))},
q8(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jp(a,b,c){var s=new A.dL(a,b,c.i("dL<0>"))
s.c=a.e
return s},
ec(a,b){var s=J.O(a.a)
if(new A.M(s,a.b,a.$ti.i("M<1>")).m())return s.gp()
return null},
aX(a,b,c){var s=A.rj(b,c)
a.ae(0,new A.md(s,b,c))
return s},
me(a,b){var s,r,q=A.pO(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.k(0,b.a(a[r]))
return q},
pP(a,b){var s=A.pO(b)
s.J(0,a)
return s},
vD(a,b){var s=t.bP
return J.qT(s.a(a),s.a(b))},
pQ(a){var s,r
if(A.qN(a))return"{...}"
s=new A.aT("")
try{r={}
B.a.k($.bC,a)
s.a+="{"
r.a=!0
a.ae(0,new A.mg(r,s))
s.a+="}"}finally{if(0>=$.bC.length)return A.e($.bC,-1)
$.bC.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
wP(){throw A.d(A.ay("Cannot change an unmodifiable set"))},
fL:function fL(){},
o5:function o5(a){this.a=a},
fN:function fN(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dH:function dH(a,b){this.a=a
this.$ti=b},
fM:function fM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bH:function bH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jo:function jo(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(){},
X:function X(){},
mf:function mf(a){this.a=a},
mg:function mg(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
h2:function h2(){},
ef:function ef(){},
cS:function cS(a,b){this.a=a
this.$ti=b},
cr:function cr(){},
fW:function fW(){},
jI:function jI(){},
fy:function fy(a,b){this.a=a
this.$ti=b},
ey:function ey(){},
h3:function h3(){},
y_(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ad(r)
q=A.ae(String(s),null,null)
throw A.d(q)}q=A.ow(p)
return q},
ow(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jm(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ow(a[s])
return a},
x5(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.uq()
else s=new Uint8Array(o)
for(r=J.av(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
x4(a,b,c,d){var s=a?$.up():$.uo()
if(s==null)return null
if(0===c&&d===b.length)return A.t9(s,b)
return A.t9(s,b.subarray(c,d))},
t9(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
qV(a,b,c,d,e,f){if(B.c.W(f,4)!==0)throw A.d(A.ae("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.ae("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.ae("Invalid base64 padding, more than two '=' characters",a,b))},
rg(a,b,c){return new A.f9(a,b)},
xp(a){return a.C()},
ww(a,b){return new A.o8(a,[],A.yG())},
wx(a,b,c){var s,r=new A.aT(""),q=A.ww(r,b)
q.cq(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
x6(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jm:function jm(a,b){this.a=a
this.b=b
this.c=null},
o7:function o7(a){this.a=a},
jn:function jn(a){this.a=a},
om:function om(){},
ol:function ol(){},
hq:function hq(){},
kF:function kF(){},
d8:function d8(){},
hC:function hC(){},
hM:function hM(){},
f9:function f9(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
ia:function ia(){},
m6:function m6(a){this.b=a},
m5:function m5(a){this.a=a},
o9:function o9(){},
oa:function oa(a,b){this.a=a
this.b=b},
o8:function o8(a,b,c){this.c=a
this.a=b
this.b=c},
iW:function iW(){},
nz:function nz(a){this.a=a},
ok:function ok(a){this.a=a
this.b=16
this.c=0},
yX(a){var s=A.mB(a,null)
if(s!=null)return s
throw A.d(A.ae(a,null,null))},
vf(a,b){a=A.ao(a,new Error())
if(a==null)a=A.eC(a)
a.stack=b.n(0)
throw a},
c1(a,b,c,d){var s,r=c?J.rb(a,d):J.ra(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ax(a,b,c){var s,r=A.f([],c.i("r<0>"))
for(s=J.O(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
L(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.i("r<0>"))
s=A.f([],b.i("r<0>"))
for(r=J.O(a);r.m();)B.a.k(s,r.gp())
return s},
am(a,b){var s=A.ax(a,!1,b)
s.$flags=3
return s},
rA(a,b,c){var s,r
A.iA(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aR(c,b,null,"end",null))
if(s===0)return""}r=A.w8(a,b,c)
return r},
w8(a,b,c){var s=a.length
if(b>=s)return""
return A.vW(a,b,c==null||c>s?s:c)},
rz(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
nw(){var s,r,q=A.vL()
if(q==null)throw A.d(A.ay("'Uri.base' is not supported"))
s=$.rG
if(s!=null&&q===$.rF)return s
r=A.wg(q)
$.rG=r
$.rF=q
return r},
w6(){return A.ce(new Error())},
uW(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
r0(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hE(a){if(a>=10)return""+a
return"0"+a},
ve(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.aw(b,"name","No enum value with that name"))},
hN(a){if(typeof a=="number"||A.bL(a)||a==null)return J.dW(a)
if(typeof a=="string")return JSON.stringify(a)
return A.rq(a)},
vg(a,b){A.dR(a,"error",t.K)
A.dR(b,"stackTrace",t.l)
A.vf(a,b)},
hn(a){return new A.hm(a)},
w(a,b){return new A.bR(!1,null,b,a)},
aw(a,b,c){return new A.bR(!0,a,b,c)},
rs(a){var s=null
return new A.ei(s,s,!1,s,s,a)},
rt(a,b){return new A.ei(null,null,!0,a,b,"Value not in range")},
aR(a,b,c,d,e){return new A.ei(b,c,!0,a,d,"Invalid value")},
fm(a,b,c){if(0>a||a>c)throw A.d(A.aR(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aR(b,a,c,"end",null))
return b}return c},
iA(a,b){if(a<0)throw A.d(A.aR(a,0,null,b,null))
return a},
lR(a,b,c,d){return new A.i0(b,!0,a,d,"Index out of range")},
ay(a){return new A.fz(a)},
rD(a){return new A.iR(a)},
l(a){return new A.en(a)},
ap(a){return new A.hA(a)},
e7(a){return new A.nU(a)},
ae(a,b,c){return new A.I(a,b,c)},
vw(a,b,c){var s,r
if(A.qN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.k($.bC,a)
try{A.xW(a,s)}finally{if(0>=$.bC.length)return A.e($.bC,-1)
$.bC.pop()}r=A.rz(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pK(a,b,c){var s,r
if(A.qN(a))return b+"..."+c
s=new A.aT(b)
B.a.k($.bC,a)
try{r=s
r.a=A.rz(r.a,a,", ")}finally{if(0>=$.bC.length)return A.e($.bC,-1)
$.bC.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
xW(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.q(l.gp())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.k(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
cp(a,b,c,d){var s
if(B.l===c){s=J.bl(a)
b=J.bl(b)
return A.nm(A.cs(A.cs($.k1(),s),b))}if(B.l===d){s=J.bl(a)
b=J.bl(b)
c=J.bl(c)
return A.nm(A.cs(A.cs(A.cs($.k1(),s),b),c))}s=J.bl(a)
b=J.bl(b)
c=J.bl(c)
d=J.bl(d)
d=A.nm(A.cs(A.cs(A.cs(A.cs($.k1(),s),b),c),d))
return d},
vJ(a){var s,r,q=$.k1()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q=A.cs(q,J.bl(a[r]))
return A.nm(q)},
pY(a,b){return new A.fy(A.pP(a,b),b.i("fy<0>"))},
wg(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.rE(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghS()
else if(s===32)return A.rE(B.b.B(a5,5,a4),0,a3).ghS()}r=A.c1(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.tO(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.tO(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a1(a5,"\\",n))if(p>0)h=B.b.a1(a5,"\\",p-1)||B.b.a1(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a1(a5,"..",n)))h=m>n+2&&B.b.a1(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a1(a5,"file",0)){if(p<=0){if(!B.b.a1(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bf(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a1(a5,"http",0)){if(i&&o+3===n&&B.b.a1(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bf(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a1(a5,"https",0)){if(i&&o+4===n&&B.b.a1(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bf(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.jA(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.wZ(a5,0,q)
else{if(q===0)A.ez(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.x_(a5,c,p-1):""
a=A.wV(a5,p,o,!1)
i=o+1
if(i<n){a0=A.mB(B.b.B(a5,i,n),a3)
d=A.wX(a0==null?A.k(A.ae("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.wW(a5,n,m,a3,j,a!=null)
a2=m<l?A.wY(a5,m+1,l,a3):a3
return A.wQ(j,b,a,d,a1,a2,l<a4?A.wU(a5,l+1,a4):a3)},
rI(a){var s=t.N
return B.a.bA(A.f(a.split("&"),t.s),A.x(s,s),new A.ny(B.aT),t.G)},
iV(a,b,c){throw A.d(A.ae("Illegal IPv4 address, "+a,b,c))},
wd(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iV("each part must be in the range 0..255",a,r)}A.iV("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iV(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.b6(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iV(j,a,q)
p=l}A.iV("IPv4 address should contain exactly 4 parts",a,q)},
we(a,b,c){var s
if(b===c)throw A.d(A.ae("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.wf(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.rH(a,b,c)
return!0},
wf(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.I(n,a,q)
r=q
break}return new A.I("Unexpected character",a,q-1)}if(r-1===b)return new A.I(n,a,r)
return new A.I("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.I("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.I("Invalid IPvFuture address character",a,r)}},
rH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.nx(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.wd(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cU(l,8)
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
B.by.ie(s,a0,16,s,a)
B.by.kR(s,a,a0,0)}}return s},
wQ(a,b,c,d,e,f,g){return new A.h4(a,b,c,d,e,f,g)},
t3(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ez(a,b,c){throw A.d(A.ae(c,a,b))},
wX(a,b){var s=A.t3(b)
if(a===s)return null
return a},
wV(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.ez(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.wS(a,q,r)
if(o<r){n=o+1
p=A.t8(a,B.b.a1(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.we(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.b.cj(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.t8(a,B.b.a1(a,"25",n)?o+3:n,c,"%25")}else p=""
A.rH(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.x1(a,b,c)},
wS(a,b,c){var s=B.b.cj(a,"%",b)
return s>=b&&s<c?s:c},
t8(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aT(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.qc(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aT("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.ez(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aT("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aT("")
m=h}else m=h
m.a+=i
l=A.qb(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
x1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.qc(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aT("")
k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.B(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aT("")
if(q<r){p.a+=B.b.B(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.ez(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aT("")
l=p}else l=p
l.a+=k
j=A.qb(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.B(a,b,c)
if(q<c){k=B.b.B(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
wZ(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.t5(a.charCodeAt(b)))A.ez(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.ez(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.wR(q?a.toLowerCase():a)},
wR(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
x_(a,b,c){return A.h5(a,b,c,16,!1,!1)},
wW(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.h5(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.Z(q,"/"))q="/"+q
return A.x0(q,e,f)},
x0(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.Z(a,"/")&&!B.b.Z(a,"\\"))return A.x2(a,!s||c)
return A.x3(a)},
wY(a,b,c,d){return A.h5(a,b,c,256,!0,!1)},
wU(a,b,c){return A.h5(a,b,c,256,!0,!1)},
qc(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.pb(r)
o=A.pb(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ai(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
qb(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jR(a,6*p)&63|q
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
o+=3}}return A.rA(s,0,null)},
h5(a,b,c,d,e,f){var s=A.t7(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
t7(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.qc(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.ez(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.qb(n)}if(o==null){o=new A.aT("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.k_(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
t6(a){if(B.b.Z(a,"."))return!0
return B.b.ci(a,"/.")!==-1},
x3(a){var s,r,q,p,o,n,m
if(!A.t6(a))return a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aZ(s,"/")},
x2(a,b){var s,r,q,p,o,n
if(!A.t6(a))return!b?A.t4(a):a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gN(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.l(s,0,A.t4(s[0]))}return B.a.aZ(s,"/")},
t4(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.t5(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bM(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
wT(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.w("Invalid URL encoding",null))}}return r},
qd(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aT===d)return B.b.B(a,b,c)
else p=new A.d7(B.b.B(a,b,c))
else{p=A.f([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.w("Truncated URI",null))
B.a.k(p,A.wT(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.h2.kw(p)},
t5(a){var s=a|32
return 97<=s&&s<=122},
rE(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.f([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.ae(k,a,r))}}if(q<0&&r>b)throw A.d(A.ae(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gN(j)
if(p!==44||r!==n+7||!B.b.a1(a,"base64",n+1))throw A.d(A.ae("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.cn.le(a,m,s)
else{l=A.t7(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bf(a,m,s,l)}return new A.nv(a,j,c)},
tO(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.a=a},
jg:function jg(){},
a7:function a7(){},
hm:function hm(a){this.a=a},
ct:function ct(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i0:function i0(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fz:function fz(a){this.a=a},
iR:function iR(a){this.a=a},
en:function en(a){this.a=a},
hA:function hA(a){this.a=a},
iq:function iq(){},
fu:function fu(){},
nU:function nU(a){this.a=a},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(){},
B:function B(){},
jG:function jG(){},
nh:function nh(){this.b=this.a=0},
aT:function aT(a){this.a=a},
ny:function ny(a){this.a=a},
nx:function nx(a){this.a=a},
h4:function h4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
jc:function jc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mn:function mn(a){this.a=a},
a6(a){var s
if(typeof a=="function")throw A.d(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jP,a)
s[$.eN()]=a
return s},
jP(a,b,c){t.gY.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
qL(a,b,c){return c.a(a[b])},
ts(a,b){return a[b]},
aM(a,b,c,d){return d.a(a[b].apply(a,c))},
tl(a,b,c,d){return d.a(a[b](c))},
aB(a,b){var s=new A.aj($.ab,b.i("aj<0>")),r=new A.fE(s,b.i("fE<0>"))
a.then(A.eL(new A.pz(r,b),1),A.eL(new A.pA(r),1))
return s},
tC(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cD(a){if(A.tC(a))return a
return new A.p6(new A.fN(t.mp)).$1(a)},
pz:function pz(a,b){this.a=a
this.b=b},
pA:function pA(a){this.a=a},
p6:function p6(a){this.a=a},
jl:function jl(){},
es:function es(){this.b=this.a=0},
mG:function mG(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mH:function mH(){},
dt:function dt(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
kL:function kL(a,b){this.a=a
this.b=b},
kM:function kM(){this.a=null
this.d=0},
iv:function iv(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=i
_.ay=j
_.ch=k
_.CW=l},
e2:function e2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hQ:function hQ(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
lc:function lc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dg(a,b){return new A.ls(a,b)},
cq:function cq(){},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b){this.a=a
this.b=b},
ls:function ls(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a,b){this.a=a
this.c=b},
iu:function iu(a,b,c){this.b=a
this.d=b
this.e=c},
em:function em(){},
pS(a,b,c,d,e,f,g,h,i){return new A.cL(c,a,g,f,e,h,i,b)},
hl:function hl(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h},
cv:function cv(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
nA:function nA(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mq(a){var s,r=t.N,q=A.ar(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.J(0,A.ar(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.J(0,A.ar(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.J(0,A.ar(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.J(0,A.ar(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.mp(A.pY(q,r),s)},
mp:function mp(a,b){this.a=a
this.b=b},
mr:function mr(){},
my:function my(a){this.b=a},
iD:function iD(){this.a=null
this.c=0
this.d=!1},
e5:function e5(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dv:function dv(a,b){this.a=a
this.b=b},
le:function le(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
vE(){return new A.ig(new A.c4(new A.mi(),A.f([],t.dz),A.f([],t.t),t.kk))},
ig:function ig(a){this.a=a},
mi:function mi(){},
tQ(a){var s=4
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 4:s=3
break
case 5:break
case 6:break
case 3:s=A.k(A.ay("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
xn(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ao[r]
if(A.tQ(q.a)===b)s+=q.c}return s},
vF(a){return new A.mk(a,new A.c4(new A.ml(),A.f([],t.jk),A.f([],t.t),t.ll),A.x(t.S,t.mL))},
iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mk:function mk(a,b,c){this.a=a
this.b=b
this.c=c},
ml:function ml(){},
mm:function mm(){},
w9(a){var s=new A.iP(a,new A.c4(new A.nq(),A.f([],t.mQ),A.f([],t.t),t.ox),A.x(t.S,t._))
s.d=s.eq()
return s},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
nq:function nq(){},
ns:function ns(){},
nr:function nr(){},
yA(a){var s,r,q,p,o=A.f([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.p)(a),++q){p=a[q]
B.a.k(o,new A.di(p,A.f([p],r)))
continue}return o},
di:function di(a,b){this.a=a
this.b=b},
hO:function hO(a){this.a=a},
l8:function l8(){},
l9:function l9(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
hP:function hP(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
ld:function ld(a,b){this.a=a
this.b=b
this.c=0},
pT(){return!0},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function mt(){},
mu:function mu(){},
bT:function bT(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ej:function ej(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
eS:function eS(a){this.b=a},
mE:function mE(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aQ:function aQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mI:function mI(){},
aP:function aP(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
mK:function mK(a,b){this.a=a
this.b=b},
mO:function mO(){},
mN:function mN(){},
mM:function mM(a){this.a=a},
mL:function mL(a,b,c){this.a=a
this.b=b
this.c=c},
mJ:function mJ(a,b){this.a=a
this.b=b},
w_(a){return new A.fn(a,new A.c4(new A.mQ(),A.f([],t.n_),A.f([],t.t),t.mo))},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b){this.a=a
this.b=b},
mQ:function mQ(){},
tp(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.xu(a,r,s,a.x.gp().a.b.a).b},
xu(a,b,c,d){var s,r,q,p,o=new A.oN(a),n=new A.oO(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.yC(b,l,m,s.c.glB(),new A.oz(n),new A.oA(n),new A.oB(a),new A.oF(a),new A.oG(n),new A.oH(n),new A.oI(a),r.glD(),o,new A.oJ(n),new A.oK(n),new A.oL(n),new A.oM(n),new A.oC(n),new A.oD(a),new A.oE(n),c.c,c.b)}else q=new A.hO(A.f([new A.j5(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.fk(b,u.l,u.q,l,B.O)],t.o5))
a.r.toString
p=q.kk(B.C,new A.mI(),!1,new A.ju())
o=p.a.b
if(o.length!==0)throw A.d(A.l("safe renderer graph is invalid: "+A.q(o)))
return new A.of(q,p)},
xv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.d(A.l("renderer graph is not initialized"))
s=a4.gdH()
r=a5.a
q=A.yI(A.vj(r.c),s,-1).a
p=A.f([],t.mX)
o=A.f([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.d,k=0;k<q.length;q.length===s||(0,A.p)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.ai)B.a.k(o,new A.as(new A.b7(m.hP(i.c.a).c,h),j,l))
else B.a.k(p,new A.as(new A.ba(B.fj,i.b,i.a,h),j,n))}g=new A.ji(A.yA(A.zc(p)),A.zb(o),r,a5.b,a5.c)
f=new A.hH(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.p)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.ga_().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.p)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.l(0,b,new A.hv(a0))}e.ac(new A.hu(d,f,g))}},
rx(a){return new A.n4(a,new A.kL(new A.kM(),new A.iD()),new A.ld(A.f([],t.c8),B.dA),A.f([],t.oZ),B.at)},
oN:function oN(a){this.a=a},
oO:function oO(a,b){this.a=a
this.b=b},
oL:function oL(a){this.a=a},
oF:function oF(a){this.a=a},
oK:function oK(a){this.a=a},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
oM:function oM(a){this.a=a},
oJ:function oJ(a){this.a=a},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(a){this.a=a},
oI:function oI(a){this.a=a},
oE:function oE(a){this.a=a},
oD:function oD(a){this.a=a},
of:function of(a,b){this.a=a
this.b=b},
ju:function ju(){},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mZ:function mZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
n4:function n4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
n5:function n5(){},
zc(a){var s,r,q=A.L(a,t.p)
B.a.Y(q,new A.pE())
s=A.K(q)
r=s.i("S<1,br>")
s=A.L(new A.S(q,s.i("br(1)").a(new A.pF()),r),r.i("a2.E"))
s.$flags=1
return s},
zb(a){var s,r,q=A.L(a,t.d)
B.a.Y(q,new A.pC())
s=A.K(q)
r=s.i("S<1,br>")
s=A.L(new A.S(q,s.i("br(1)").a(new A.pD()),r),r.i("a2.E"))
s.$flags=1
return s},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b){this.a=a
this.b=b},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
pE:function pE(){},
pF:function pF(){},
pC:function pC(){},
pD:function pD(){},
yI(a,b,c){var s,r,q,p,o,n,m,l=A.f([],t.bH)
for(s=b.$ti,r=new A.by(b.a(),s.i("by<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.d(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.lL(n)===B.b5){++p
continue}B.a.k(l,o)}return new A.kO(l)},
kO:function kO(a){this.a=a},
cf(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.h5,q=B.h6,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.z(m,k,Math.min(r.c,o))
q=new A.z(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.w("Aabb.fromPoints requires at least one point",null))
return new A.hj(r,q)},
hj:function hj(a,b){this.a=a
this.b=b},
vj(a){var s,r,q,p,o,n,m=a.a,l=new A.lg(),k=m.length
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
return new A.lf(A.f([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dr:function dr(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
lf:function lf(a){this.a=a},
lg:function lg(){},
rl(a){if(a.length!==16)throw A.d(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.co(new Float32Array(A.a3(a)))},
pR(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.co(q)},
rm(a,b,c){var s=b.ga5(),r=s.aS(c).ga5(),q=r.aS(s),p=new Float32Array(16)
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
p[12]=-r.bv(a)
p[13]=-q.bv(a)
p[14]=s.bv(a)
p[15]=1
return new A.co(p)},
co:function co(a){this.a=a},
mh:function mh(){},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
j9:function j9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ht:function ht(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jd:function jd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fI:function fI(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c,d,e,f,g,h,i,j){var _=this
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
je:function je(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hK:function hK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
jf:function jf(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hY:function hY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jk:function jk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hv:function hv(a){this.b=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jv:function jv(a,b,c,d){var _=this
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
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ry(a){var s=A.rm(B.F,B.a5,Math.abs(0)<0.99?B.h4:B.F)
return new A.dy(A.pR(1,1,B.c.K(1,0.1,3),0.05).X(0,s))},
dy:function dy(a){this.a=a},
iG:function iG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jy:function jy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yC(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.d(A.aw(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.ry(B.cG)
c=t.o5
l=A.f([],c)
if(r){B.a.J(l,A.f([new A.eQ(a,j,i,b,h,h,B.ch,!0,B.O,B.bM,b1),new A.eQ(a,j,i,b,g,g,B.hI,!1,B.bM,B.bN,a2),new A.ht(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.pG()}else k=B.O
if(q){B.a.J(l,A.f([new A.eV(a,j,i,b,f,f,B.ci,k,B.bF,b1),new A.eV(a,j,i,b,e,e,B.hJ,B.bF,B.bG,a6),new A.hK(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bH}if(p){B.a.k(l,new A.hY(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bL}if(o){B.a.k(l,new A.iy(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bO}if(n){B.a.k(l,new A.iY(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.av}c=A.f([new A.hG(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iK(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.iJ(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.iG(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.p4(d)))
c.push(new A.iH(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.p5(d,m),a5,b4,s,b9,b8))
B.a.J(c,l)
c.push(new A.fk(a,j,u.q,b,k))
return new A.hO(c)},
p4:function p4(a){this.a=a},
p5:function p5(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jz:function jz(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iJ:function iJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jC:function jC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jJ:function jJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(){},
iF(a,b){return new A.ft(a,b)},
hU:function hU(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
df:function df(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
G:function G(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
hH:function hH(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
lr:function lr(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ew:function ew(a,b){this.a=a
this.b=b},
cY:function cY(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
r2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eW(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
hr:function hr(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aH:function aH(a,b){this.a=a
this.b=b},
nL:function nL(){this.a=null},
wl(a){var s=new A.j4(a,B.f,new A.nL())
s.iO(a)
return s},
bW(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
wp(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
wo(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
rL(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.a(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.a(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
wm(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bg(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.kB(b)
if(r.a===0)return
if(r.v(0,B.aA)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aB))a.a.depthFunc(A.wp(a,b.b))
if(r.v(0,B.aC))a.a.depthMask(b.c)
if(r.v(0,B.aG)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aH))a.a.cullFace(A.wo(a,b.x))
if(r.v(0,B.ca)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aD)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aE))a.a.blendFunc(A.rL(a,b.e),A.rL(a,b.f))
if(r.v(0,B.aF))a.a.blendEquation(A.wm(a,b.r))
if(r.v(0,B.c8))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.c9)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
wn(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
eq(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.wn(a,b))},
cU(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.c(b.a)
a.a.useProgram(s)
a.e=s},
A(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.d(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.h(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.d0(c.b))
break
case 1:p=t.pk.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.pk.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
m=p[1]
if(2>=o)return A.e(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:r.uniformMatrix4fv(q,!1,t.pk.a(c.b))
break
case 4:r.uniform1i(q,A.a(c.b))
break}},
bX(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.c(b.a))},
bw(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.h7){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.h6){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dC(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
q0(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
q1(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
q2(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aM(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
wq(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
rO(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.h(s.createBuffer())
if(r==null)throw A.d(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b6?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.wq(a,b.b))
return new A.d_(r)},
rM(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
rN(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
q3(a,b){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.h(s.createTexture())
if(r==null)throw A.d(A.l("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.a(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.aM(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aM(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.rM(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.rM(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.rN(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.rN(a,p))
return new A.d_(new A.h7(r,l,k,q,!1))},
q4(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.d(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aM(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aM(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
q5(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
c9(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.h(a.a.createVertexArray())
if(s==null)throw A.d(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.d_(s)},
rP(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.h(p.createShader(b))
if(o==null)throw A.d(A.iF(b===A.qL(A.ts(A.u6(),r),q,t.S)?B.c3:B.c4,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a9(A.cD(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bz(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.iF(b===A.qL(A.ts(A.u6(),r),q,t.S)?B.c3:B.c4,s))}return o},
wr(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.rP(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.rP(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.h(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.fK)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a9(A.cD(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bz(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.iF(B.c5,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.p)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.iF(B.c6,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.h(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.iF(B.c6,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.d_(n)},
d_:function d_(a){this.a=a},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h6:function h6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
j4:function j4(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
nJ:function nJ(a){this.a=a},
nK:function nK(a){this.a=a},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kr(a,a0){var s=0,r=A.b4(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$kr=A.b5(function(a1,a2){if(a1===1)return A.b1(a2,r)
for(;;)switch(s){case 0:p=A.c(new v.G.AudioContext())
o=t.m
n=A.x(t.N,o)
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
b=new A.ho(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aU,A.x(o,t.bp))
b.iA(p,a0)
p=A.o(a).i("U<1,2>")
s=3
return A.a8(A.li(A.id(new A.U(a,p),p.i("bn<ak>(n.E)").a(new A.ks(b)),p.i("n.E"),t.mj),t.c),$async$kr)
case 3:n=n.h(0,"ir-stone")
p=n==null?b.jl():n
c.buffer=p
q=b
s=1
break
case 1:return A.b2(q,r)}})
return A.b3($async$kr,r)},
ho:function ho(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.cy=null
_.id=_.go=_.fy=_.fx=_.fr=1
_.k1=!1
_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p2=!1},
ks:function ks(a){this.a=a},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.b=b},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uJ(a,b,c,d,e,f,g){var s=new A.kl(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.iC(a,b,c,d,0,e,f,g)
return s},
uF(a,b){var s=new A.k5(b)
s.iz(a,b)
return s},
uI(a){var s,r,q,p,o,n=t.z
n=A.x(n,n)
for(s=new A.U(a,A.o(a).i("U<1,2>")).gt(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.ax(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.kh(A.cg(n,r,t.a))
n.iB(a)
return n},
yd(a,b){var s,r,q,p=b>>>0
for(s=new A.d7(a),r=t.gS,s=new A.bq(s,s.gq(0),r.i("bq<J.E>")),r=r.i("J.E");s.m();){q=s.d
p=A.tZ(p,q==null?r.a(q):q)}return p&2147483647},
hp:function hp(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
km:function km(){},
k5:function k5(a){this.a=a},
k6:function k6(){},
eP:function eP(){},
k7:function k7(){},
kh:function kh(a){this.a=a},
kj:function kj(){},
kk:function kk(){},
ki:function ki(){},
pI:function pI(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
kp:function kp(){},
fD:function fD(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
lb:function lb(a){this.a=a},
iN:function iN(a,b,c,d,e,f,g,h,i,j){var _=this
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
lp:function lp(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
lq:function lq(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=0
this.$ti=b},
i1:function i1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
ie:function ie(a){this.a=a},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mj:function mj(a,b){this.a=a
this.b=b},
fv(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b6(a)
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
cQ:function cQ(a){this.a=a
this.b=0},
mP:function mP(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
mY:function mY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w0(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.rv(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.i6(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.js(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.c1(800,0,!1,r)
p=new Float32Array(8064)
o=J.i6(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jq(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.c1(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga5()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.mR(a,new A.lp(a,A.x(t.m,r)),b,c,A.a5(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.ev,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.ie(l),a,A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k))
k.iJ(a,b,c)
return k},
mR:function mR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.av=a
_.aD=b
_.aW=c
_.aX=d
_.ds=_.h9=1
_.dE=_.dD=_.hr=_.hq=_.hp=_.ho=_.hn=_.hm=_.dC=_.dB=_.dA=_.dz=_.dw=_.dv=_.du=_.hl=_.hk=_.hj=_.dt=_.hi=_.hh=_.hg=_.hf=_.he=_.hd=_.hc=_.hb=_.ha=_.ad=$
_.c7=null
_.fd=e
_.fH=_.fG=_.fF=_.fE=_.fD=_.fC=_.fB=_.fA=_.fz=_.fw=_.fv=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.c8=$
_.c9=0
_.d8=_.d7=_.d6=_.d5=_.d4=_.d3=_.d2=$
_.cd=_.cc=_.cb=_.ca=_.bw=_.aV=null
_.bx=$
_.fK=_.fJ=_.fI=!1
_.kK=1
_.d9=f
_.da=g
_.kL=h
_.fL=i
_.ce=0
_.fM=j
_.kM=k
_.dc=0
_.dd=l
_.kN=1
_.de=!1
_.by=0
_.df=m
_.bz=0
_.fN=n
_.fO=o
_.fR=_.fQ=_.fP=1
_.fS=0.55
_.dg=p
_.fT=q
_.dh=r
_.di=s
_.dj=a0
_.fU=_.dn=_.dm=_.dl=_.dk=0
_.fV=null
_.fW=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.h4=_.dr=_.dq=_.h3=_.h2=_.kQ=_.kP=_.kO=_.h1=_.h0=_.h_=_.fZ=_.fY=_.fX=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.h5=a7
_.h6=a8
_.h7=a9
_.h8=b0},
tE(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a9(0,c).aS(f.a9(0,c)).ga5(),r=A.oZ(g)
return A.tH(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
hg(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b6(a)
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
tH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.hg(a,A.hg(a,A.hg(a,A.hg(a,A.hg(a,A.hg(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
oZ(a){return new A.az((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
xE(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aE(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.ac(),i=A.ac(),h=A.ac()
switch(B.c.W(o,6)){case 0:j.b=c
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
h.b=l}s=j.cS()
if(typeof s!=="number")return s.X()
s=B.d.aB(s*255)
r=i.cS()
if(typeof r!=="number")return r.X()
r=B.d.aB(r*255)
q=h.cS()
if(typeof q!=="number")return q.X()
return new A.az(s,r,B.d.aB(q*255))},
fK:function fK(){},
jE:function jE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
js:function js(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jq:function jq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mS:function mS(){},
mT:function mT(a){this.a=a},
mU:function mU(a){this.a=a},
nN:function nN(){},
nc:function nc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iX(a,b,c){return new A.b(a,b,c)},
rJ(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a){this.a=a},
v_(a,b,c){var s=new A.hL(a,c,null,b)
s.iE(a,null,null,b,c)
return s},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
vc(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.ec(new A.R(B.eG,t.gl.a(new A.l1(a)),t.ns),t.no)
return s==null?null:new A.e6(s)},
vb(a){if(a.a!==21)return null
if(a.e)return B.cN
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cO
return B.cM},
bD:function bD(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e6:function e6(a){this.a=a},
l1:function l1(a){this.a=a},
vK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.D(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.it(s,new A.b(o,n,m),q,p,l,j)
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
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yf(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.d(B.d_)
p.l(0,q,r.b)}return p},
jQ(a){var s,r,q,p,o,n=a.gS().bg(0)
B.a.a0(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.p)(n),++p){o=n[p]
r.l(0,o,A.tn(a.h(0,o)))}return A.cg(r,t.N,s)},
tn(a){var s
if(t.f.b(a))return A.jQ(A.yf(a))
if(t.j.b(a)){s=t.z
return A.am(J.dV(a,A.z8(),s),s)}if(a==null||A.bL(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.dm)
return a}throw A.d(A.ae("presentation snapshot contains unsupported value "+J.dU(a).n(0),null,null))},
mz:function mz(a){this.a=a},
rw(a,b,c){var s=A.qi(b),r=A.qi(a)
if(c!==2)A.k(A.aw(c,"version","unsupported save version"))
return new A.ek(c,s,r)},
qi(a){var s,r,q,p,o=A.o(a).i("ah<1>"),n=A.L(new A.ah(a,o),o.i("n.E"))
B.a.a0(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.p)(n),++q){p=n[q]
s.l(0,p,A.tm(a.h(0,p)))}return A.cg(s,t.N,o)},
tm(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gO(),r=r.gt(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.d(B.dg)
s.l(0,p,q.b)}return A.qi(s)}if(t.j.b(a)){r=t.z
return A.am(J.dV(a,A.za(),r),r)}if(a==null||A.bL(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.dn)
return a}throw A.d(A.ae("save contains unsupported value "+J.dU(a).n(0),null,null))},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(){},
dw:function dw(a,b){this.a=a
this.b=b},
r5(a,b,c,d,e,f,g){return new A.ll(a,b,c,d,e,f,g,A.f([],t.mc),A.f([],t.ag))},
r6(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aL(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.d(B.df)
r=e.h(0,"runSeed")
q=A.aL(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aL(p)||p<1||typeof o!="number")throw A.d(B.dr)
if(!isFinite(480))throw A.d(A.aw(480,"daySeconds","must be finite and > 0"))
n=new A.hS(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ae("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.vB(a3,A.aX(a,s,m))
k=A.uX(l,A.aX(b,s,m),n)
j=A.r7(d)
A.vp(A.aX(a0,s,m)).kd(j)
m=A.aX(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bL(f))A.k(B.d2)
return A.r5(d,q,j,n,l,k,new A.hJ(i,h,g,f))},
xt(a){var s
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
de:function de(a,b){this.a=a
this.b=b},
hR:function hR(){},
lm:function lm(a,b){this.a=a
this.b=b},
ll:function ll(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=1},
ln:function ln(a){this.a=a},
lo:function lo(){},
uK(a){var s,r,q,p,o,n,m="modelScale",l=A.jV(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.b0(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.d8)
s=A.d2(l,"houseId")
r=A.d2(l,"sourceRef")
q=J.dV(A.jS(l,"rooms"),new A.kx(k),t.fS)
q=A.L(q,q.$ti.i("a2.E"))
q.$flags=1
p=J.dV(A.jS(l,"portals"),new A.ky(k),t.gE)
p=A.L(p,p.$ti.i("a2.E"))
p.$flags=1
o=J.dV(A.jS(l,"stairs"),new A.kz(),t.d2)
o=A.L(o,o.$ti.i("a2.E"))
o.$flags=1
n=J.dV(A.jS(l,"exteriorCells"),new A.kA(),t.N)
n=A.L(n,n.$ti.i("a2.E"))
n.$flags=1
return new A.kw(s,r,q,p,o)},
uL(a,b){var s=A.jV(a,"room"),r=A.d2(s,"id"),q=A.tN(s.h(0,"origin"),"origin",b),p=A.tN(s.h(0,"size"),"size",b),o=J.dV(A.jS(s,"windows"),new A.kC(b),t.lJ)
o=A.L(o,o.$ti.i("a2.E"))
o.$flags=1
return new A.dY(r,q,p,o)},
jV(a,b){return t.P.b(a)?a:A.hb(b+" is not an object")},
jS(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.hb(b+" is not a list")},
d2(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hb(b+" is not a string")},
he(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.hb(b+" is not finite")},
ys(a,b){var s,r
if(t.j.b(a)){s=J.av(a)
s=s.gq(a)!==3||s.R(a,new A.p2())}else s=!0
if(s)return A.hb(b+" is not a finite vec3")
s=A.f([],t.n)
for(r=J.O(a);r.m();)s.push(A.b0(r.gp()))
return s},
tN(a,b,c){var s,r,q,p=A.f([],t.n)
for(s=A.ys(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q]*c)
return p},
hb(a){return A.k(A.ae(a,null,null))},
kw:function kw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(){},
kA:function kA(){},
kB:function kB(a){this.a=a},
dY:function dY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kC:function kC(a){this.a=a},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dX:function dX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dZ:function dZ(a){this.b=a},
p2:function p2(){},
hw:function hw(a,b){this.a=a
this.b=b
this.d=null},
kK:function kK(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lx:function lx(){this.b=0},
n_:function n_(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aO:function aO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
l3:function l3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l4:function l4(){},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
lA:function lA(){},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b){this.a=a
this.b=b},
l5:function l5(){},
yB(a){var s,r,q,p=new A.lz(A.f([],t.oP),A.f([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.xw(p,a,B.bq[s],10.5,10.5,8.03,0.42)
p.u(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.u(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.u(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.u(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.u(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.u(1,11,0,11,-0.5,-0.35,10.58)
p.u(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.u(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aO(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aO(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b5(r,new A.aO(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b5(r,q,new A.aO(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aO(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aO(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b5(q,new A.aO(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b5(q,r,new A.aO(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.u(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.y5(p,10.5,10.5,8.03,10.88)
A.xk(p,10.5,10.5,10.88)
A.xs(p,10.5,10.5,8.03)
A.xz(p,a,10.5)
A.ya(p,10.5,10.5)
A.xi(p,10.5)
return p.ki()},
xw(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.f([],t.jX)
for(s=b6.b,r=s.length,q=B.w!==b7,p=B.i!==b7,o=B.k===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
j=b6.aU(k)
switch(m){case 0:i=k.d.c===0
break
case 2:i=Math.abs(k.d.c+j.c-b9)<0.001
break
case 3:i=k.d.a===0
break
case 1:i=Math.abs(k.d.a+j.a-b8)<0.001
break
default:i=null}if(!i)continue
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.p)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.k(b4,new A.cX(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aq(i),b=J.O(h.a),h=new A.M(b,h.b,h.$ti.i("M<1>"));h.m();){a=b.gp()
if(!a.Q||a.an(i)!==b7)continue
B:{if(!p||o){a0=g+a.a6(i)
break B}if(!q||n){a0=e+a.a6(i)
break B}a0=null}B.a.k(b4,new A.cX(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.k?b8:b9
r=t.i
a1=A.ar([0,s],r)
a2=A.ar([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.p)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.L(a1,a1.$ti.c)
B.a.a0(a4)
a5=A.L(a2,a2.$ti.c)
B.a.a0(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.R(b4,new A.oP(b0,b1,b2,b3)))continue
switch(m){case 0:b5.u(0,b1,b3,0,b0,b2,r)
break
case 2:b5.u(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.u(0,0,b3,b1,r,b2,b0)
break
case 1:b5.u(0,s,b3,b1,b8,b2,b0)
break}}A.xy(b5,b4,b7,b8,b9,c1)
A.xx(b5,b4,b7,b8,b9,c1)},
xx(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.p)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.u(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.u(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.u(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.u(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.u(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.u(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.i)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.u(2,a+0.18,n,r,a,a1,p)}}},
xy(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.p)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.u(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.u(e,a1,a,l,a0,b,m)
a2.u(e,a1,b,l,c,b-0.06,m)
a2.u(e,a1,a+0.06,l,c,a,m)
if(f)a2.u(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.u(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.u(e,a1,a,j,a0,b,k)
a2.u(e,a1,b,j,c,b-0.06,k)
a2.u(e,a1,a+0.06,j,c,a,k)
if(f)a2.u(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.u(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.u(e,l,a,a1,m,d,a0)
a2.u(e,l,d,a1,m,d-0.06,b)
a2.u(e,l,a+0.06,a1,m,a,b)
if(f)a2.u(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.u(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.u(e,o,a,a1,p,d,a0)
a2.u(e,o,d,a1,p,d-0.06,b)
a2.u(e,o,a+0.06,a1,p,a,b)
if(f)a2.u(3,p,a,c+0.07,n,d,c)
break}if(!f)A.y8(a2,g,a4,a5,a6,a7,q)}},
y8(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.u(3,o+0.025,m,r,o-0.025,n,s)
a.u(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.u(3,o+0.025,m,r,o-0.025,n,s)
a.u(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.u(3,r,m,o+0.025,s,n,o-0.025)
a.u(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.u(3,r,m,o+0.025,s,n,o-0.025)
a.u(3,r,l+0.025,p,s,l-0.025,q)
break}},
y5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.u(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.u(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.u(4,i,p,-0.38,j,q,-0.44)
a.u(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.u(5,h+0.5,p,o,h-0.5,r,q)}},
xk(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.u(0,g+0.35,k,n,g-0.35,l,q)
a.u(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.u(5,d+0.1,o,m,d-0.1,r,p)}}},
xs(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.u(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.u(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.u(6,l,d+0.06,f,m,d,g)}}}},
xz(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.h(0,"hall")
k.toString
s=b.f.h(0,"front-door")
r=k.d.a+s.a6("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.u(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.u(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.u(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.u(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.u(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)},
ya(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.u(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.u(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.u(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.u(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.u(6,m,j+0.06,l,s,j,n)}a.u(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.u(6,i+0.34,0.22,s,i,0.1,h)}},
xi(a,b){var s,r
a.u(0,6.7,1,-4.05,-2.5,0,-4.4)
a.u(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.u(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.u(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cX:function cX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oP:function oP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z9(a,b,c){var s,r,q=A.qP(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.e8(B.cS,s)}r=A.u4(a,c,b)
if(r!=null)return new A.e8(B.cT,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.u5(a,c,b)!=null)return B.cX
return B.cW},
dc:function dc(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.c=b},
tU(a,b){var s,r=new A.cQ(new Float32Array(5376)),q=new A.cQ(new Float32Array(5376)),p=new A.cQ(new Float32Array(5376)),o=new A.cQ(new Float32Array(5376)),n=b.d,m=a.aU(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.co(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.x9(r,b,m)
k+=m.b
q.co(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.xc(p,a,b,m,B.bq[s])
for(l=a.aq(b.a),k=J.O(l.a),l=new A.M(k,l.b,l.$ti.i("M<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.x8(o,b,m,j)}A.x7(p,b,m)
A.xa(p,a,b,m)
return new A.n0(B.u.b2(r.a,0,r.b),B.u.b2(q.a,0,q.b),B.u.b2(p.a,0,p.b),B.u.b2(o.a,0,o.b))},
x9(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aE(e/0.22)
for(r=c+0.004,q=a1.a,p=d+q,o=c+0.014,n=0;n<s;++n){m=b+n*0.22+0.018
l=(n&1)===0?7952963:7031607
A.u(a,new A.b(d,r,m),new A.b(p,o,m+0.15),l)}r=a0.a
p=r==="hall"
if(p||r==="landing"){k=p?1:0.82
j=d+(q-k)*0.5
q=j+k
e=b+e
A.u(a,new A.b(j,c+0.016,b+0.18),new A.b(q,c+0.026,e-0.18),6443866)
A.u(a,new A.b(j+0.08,c+0.027,b+0.22),new A.b(q-0.08,c+0.033,e-0.22),8548460)}if(r==="living-room"){A.u(a,new A.b(d+1.15,c+0.018,b+2.15),new A.b(d+4.7,c+0.03,b+4.35),5589578)
A.u(a,new A.b(d+1.28,c+0.031,b+2.28),new A.b(d+4.57,c+0.037,b+4.22),7824746)}return}if(e==="floor-linoleum"){for(e=b+0.18,r=d+0.08,q=c+0.004,p=d+a1.a-0.08,o=c+0.012,n=0;n<5;++n){m=e+n*0.62
i=(n&1)===0?7764332:6843233
A.u(a,new A.b(r,q,m),new A.b(p,o,m+0.5),i)}return}if(e==="floor-tiles"){for(e=d+0.08,r=b+0.08,q=c+0.004,p=c+0.012,h=0;h<4;++h)for(g=e+h*0.86,o=g+0.78,f=0;f<3;++f){m=r+f*0.86
i=(h+f&1)===0?12170408:10657172
A.u(a,new A.b(g,q,m),new A.b(o,p,m+0.78),i)}return}if(e==="floor-concrete"){A.u(a,new A.b(d+0.08,c+0.004,b+0.08),new A.b(d+a1.a-0.08,c+0.014,b+a1.c-0.08),7828331)
A.u(a,new A.b(d+2.2,c+0.015,b+2.45),new A.b(d+2.68,c+0.021,b+2.93),4868420)}},
xa(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
switch(b3.a){case"living-room":a7=a8+b4.a
s=a7-0.48
r=b0+b4.c*0.4
A.u(b1,new A.b(s,a9,r-0.85),new A.b(a7,a9+2.55,r+0.85),7824724)
A.u(b1,new A.b(s-0.38,a9+0.02,r-0.72),new A.b(a7+0.05,a9+0.16,r+0.72),a2)
q=a9+2.34
A.u(b1,new A.b(s-0.52,a9+2.18,r-0.94),new A.b(a7+0.08,q,r+0.94),a3)
p=s-0.02
A.u(b1,new A.b(p,a9+0.45,r-0.48),new A.b(a7+0.03,a9+1.48,r+0.48),2170396)
for(a7=s-0.08,o=a9+0.28,n=r-0.42,m=a9+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.u(b1,new A.b(a7+j,o,n),new A.b(p+j,m,l),a4)}for(a7=s-0.01,p=a9+1.55,o=s+0.04,n=a9+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.u(b1,new A.b(a7,p,l+j),new A.b(o,n,m+j),a2)}for(a7=[r-0.68,r+0.56],p=s-0.42,o=a9+2,n=s-0.26,m=a9+2.2,i=0;i<2;++i){h=a7[i]
A.u(b1,new A.b(p,o,h),new A.b(n,m,h+0.16),a5)}A.u(b1,new A.b(s-0.27,q,r-0.58),new A.b(s-0.07,a9+2.52,r-0.38),a6)
A.u(b1,new A.b(s-0.25,q,r+0.34),new A.b(s-0.06,a9+2.49,r+0.52),a3)
break
case"hall":A.xb(b1,b2,b3,b4,a5,a4)
A.u(b1,new A.b(a8+0.28,a9+0.78,b0+0.52),new A.b(a8+0.68,a9+0.88,b0+2.15),a5)
for(a7=[b0+0.66,b0+2.01],q=a8+0.34,p=a8+0.42,o=a9+0.8,i=0;i<2;++i){g=a7[i]
A.u(b1,new A.b(q,a9,g),new A.b(p,o,g+0.08),a3)}f=a8+1.22
a7=b0+0.1
A.u(b1,new A.b(f-0.28,a9+2.35,b0+0.02),new A.b(f+0.28,a9+3.02,a7),a5)
A.u(b1,new A.b(f-0.13,a9+2.48,a7),new A.b(f+0.13,a9+2.72,b0+0.15),a2)
a7=b0+0.08
A.u(b1,new A.b(f-0.025,a9+1.82,a7),new A.b(f+0.025,a9+2.36,b0+0.13),a4)
for(q=a8+1.7,p=a9+1.74,o=a8+1.78,n=a9+1.84,m=b0+0.16,k=0;k<3;++k){l=k*0.36
A.u(b1,new A.b(q+l,p,a7),new A.b(o+l,n,m),a4)}a7=a9+0.72
A.u(b1,new A.b(a8+0.86,a9,b0+0.62),new A.b(a8+1.1,a7,b0+0.9),a6)
A.u(b1,new A.b(a8+0.91,a7,b0+0.68),new A.b(a8+1.05,a9+0.82,b0+0.84),a5)
break
case"kitchen":a7=a8+b4.a
e=a7-0.62
q=a9+1.28
A.u(b1,new A.b(e,a9,b0+0.72),new A.b(a7,q,b0+2.18),a4)
A.u(b1,new A.b(e-0.08,q,b0+0.62),new A.b(a7+0.04,a9+1.38,b0+2.28),a2)
for(a7=e+0.12,q=a9+1.39,p=b0+0.88,o=e+0.4,n=a9+1.45,m=b0+1.16,k=0;k<3;++k){l=k*0.4
A.u(b1,new A.b(a7,q,p+l),new A.b(o,n,m+l),2170396)}a7=a9+0.82
q=a9+0.94
A.u(b1,new A.b(a8+1.05,a7,b0+1.15),new A.b(a8+3.1,q,b0+2.35),a3)
for(p=[a8+1.18,a8+2.94],o=b0+1.28,n=b0+1.38,i=0;i<2;++i){d=p[i]
A.u(b1,new A.b(d,a9,o),new A.b(d+0.1,a7,n),a5)}A.u(b1,new A.b(a8+0.48,a9+1.72,b0+2.74),new A.b(a8+2.55,a9+1.84,b0+2.88),a5)
a7=a9+1.02
A.u(b1,new A.b(a8+3.38,q,b0+1.26),new A.b(a8+4.48,a7,b0+2.22),a6)
q=b0+1.66
p=b0+1.74
A.u(b1,new A.b(a8+3.82,a7,q),new A.b(a8+3.9,a9+1.34,p),a4)
A.u(b1,new A.b(a8+3.72,a9+1.3,q),new A.b(a8+4,a9+1.36,p),a4)
for(a7=a8+1.38,q=a9+0.95,p=b0+1.48,o=a8+1.78,n=a9+1.05,m=b0+1.88,k=0;k<2;++k){l=k*0.55
A.u(b1,new A.b(a7+l,q,p),new A.b(o+l,n,m),a6)}break
case"cellar":for(a7=a8+0.35,q=b0+1.05,p=a8+0.58,o=a9+0.55,n=b0+2,k=0;k<4;++k){m=k*0.28
A.u(b1,new A.b(a7+m,a9,q),new A.b(p+m,o+B.c.W(k,2)*0.18,n),a5)}A.u(b1,new A.b(a8+2.55,a9+0.15,b0+0.38),new A.b(a8+2.72,a9+1.55,b0+0.56),a4)
A.u(b1,new A.b(a8+2.42,a9+1.28,b0+0.32),new A.b(a8+2.86,a9+1.38,b0+0.65),a6)
A.u(b1,new A.b(a8+0.4,a9+1.72,b0+0.45),new A.b(a8+3.4,a9+1.82,b0+0.58),a4)
A.u(b1,new A.b(a8+1.9,a9+1.58,b0+0.42),new A.b(a8+2.06,a9+1.76,b0+0.61),a4)
A.u(b1,new A.b(a8+1.84,a9+1.62,b0+0.55),new A.b(a8+2.12,a9+1.7,b0+0.64),a4)
break
case"bedroom":c=a8+0.85
b=b0+2.08
a7=a9+0.72
A.u(b1,new A.b(c,a9+0.42,b),new A.b(c+3.65,a7,b+2.05),6972528)
A.u(b1,new A.b(c-0.1,a7,b-0.12),new A.b(c+3.75,a9+1.28,b+0.1),a3)
A.u(b1,new A.b(c+0.22,a9+0.74,b+1.35),new A.b(c+1.05,a9+0.9,b+1.82),a6)
a7=a8+b4.a
q=a9+1.48
A.u(b1,new A.b(a7-0.95,a9+0.78,b0+0.58),new A.b(a7-0.18,q,b0+1.42),a3)
A.u(b1,new A.b(a7-1.04,q,b0+0.48),new A.b(a7-0.1,a9+1.57,b0+1.52),a5)
for(a7=[b+0.22,b+0.78],q=c+0.36,p=a9+0.75,o=c+1.12,n=a9+0.92,i=0;i<2;++i){a=a7[i]
A.u(b1,new A.b(q,p,a),new A.b(o,n,a+0.42),a6)}for(a7=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=a9+0.08,n=a9+0.44,i=0;i<2;++i){a0=a7[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.u(b1,new A.b(a0,o,g),new A.b(l,n,g+0.1),a5)}}break
case"landing":a7=a8+0.48
A.u(b1,new A.b(a8+0.34,a9+0.02,b0+1.62),new A.b(a7,a9+1.06,b0+2.7),a5)
for(q=a9+0.82,p=b0+1.68,o=a8+2.14,n=a9+0.9,m=b0+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.u(b1,new A.b(a7,q+l,p+j),new A.b(o,n+l,m+j),a3)}for(a7=a8+0.62,q=a9+1.02,p=b0+1.74,o=a8+0.7,n=a9+1.78,m=b0+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.u(b1,new A.b(a7+l,q,p+j),new A.b(o+l,n,m+j),a5)}break
case"bathroom":a7=a9+0.62
A.u(b1,new A.b(a8+0.3,a9+0.04,b0+0.38),new A.b(a8+2.15,a7,b0+1.22),a6)
q=a9+0.72
A.u(b1,new A.b(a8+0.42,a7,b0+0.48),new A.b(a8+2.03,q,b0+1.12),a2)
a7=a8+b4.a
p=b0+b4.c
A.u(b1,new A.b(a7-0.78,a9+0.12,p-0.88),new A.b(a7-0.18,a9+1.75,p-0.28),a6)
A.u(b1,new A.b(a7-0.86,a9+1.68,p-0.98),new A.b(a7-0.1,a9+1.82,p-0.18),a4)
p=b0+0.68
a7=a9+1.18
o=b0+0.78
A.u(b1,new A.b(a8+0.86,q,p),new A.b(a8+0.96,a7,o),a4)
A.u(b1,new A.b(a8+0.7,a9+1.12,p),new A.b(a8+1.12,a7,o),a4)
break
case"spare-room":A.u(b1,new A.b(a8+1,a9,b0+0.7),new A.b(a8+3.25,a9+1.65,b0+2),6972528)
A.u(b1,new A.b(a8+0.8,a9+1.6,b0+0.52),new A.b(a8+3.45,a9+1.74,b0+2.18),a3)
a7=a8+b4.a
q=b0+b4.c
A.u(b1,new A.b(a7-1.05,a9,q-1.02),new A.b(a7-0.25,a9+0.72,q-0.24),a5)
for(p=a7-0.98,o=a9+0.18,n=q-1.12,a7-=0.28,m=a9+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.u(b1,new A.b(p,o+l,n),new A.b(a7,m+l,q),a4)}break}},
xb(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gao(a)
r=s.d
q=s.e
p=r.a+0.12
o=q.a-0.12
n=q.b
a=a2.d.b
m=a+a3.b-0.18
if(n<m)m=n
l=m-a-0.1
if(0.1>l)l=0.1
k=n-r.b
j=l/k
if(1<j)j=1
i=q.c
h=i-r.c
g=i-j*h
for(f=a+0.1,e=0;e<18;++e){d=e/17*j
c=f+d*k
b=i-d*h
A.u(a0,new A.b(p,c,b-0.18),new A.b(o,c+0.11,b+0.18),a4)}k=a+0.08
h=a+0.34
A.u(a0,new A.b(p-0.1,k,g),new A.b(p,h,i),3680031)
A.u(a0,new A.b(o,k,g),new A.b(o+0.1,h,i),3680031)
h=a+1.52
k=h<m?h:m
A.u(a0,new A.b(o+0.16,a+1.42,g+0.25),new A.b(o+0.25,k,i-0.25),a5)},
xc(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.k?a3.a:a3.c,a=A.f([],t.a9)
for(s=a2.a,r=a1.aq(s),q=J.O(r.a),r=new A.M(q,r.b,r.$ti.i("M<1>"));r.m();){p=q.gp()
if(!p.as&&p.an(s)===a4)a.push(new A.cW(p.a6(s),p.a6(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cW(q,q+n.e,p,p+n.f))}}s=t.i
r=A.ar([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.p)(a),++o){m=a[o]
r.J(0,A.f([m.a,m.b],p))}l=A.L(r,r.$ti.c)
B.a.a0(l)
s=A.ar([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.p)(a),++o){m=a[o]
s.J(0,A.f([m.c,m.d],p))}k=A.L(s,s.$ti.c)
B.a.a0(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.e(l,j)
f=l[j]
if(!(i<r))return A.e(l,i)
e=l[i]
if(!(h<s))return A.e(k,h)
d=k[h]
c=k[g]
if(B.a.R(a,new A.os(f,e,d,c)))continue
A.yt(a0,a2,a3,a4,f,e,d,c)}A.xd(a0,a2,a3,a4,b,a)},
xd(a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=b0.a
if(a8==="cellar")return
s=a8==="living-room"||a8==="hall"
r=a8==="bedroom"
q=r||a8==="landing"||a8==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.op(a9,b0,b1,b2,b3,b4,0.02,0.17,0.032,p)
o=!s
if(!o||a8==="landing")A.op(a9,b0,b1,b2,b3,b4,0.88,0.94,0.022,p)
if(!o||r){n=b1.b-0.58
A.op(a9,b0,b1,b2,b3,b4,n,n+0.055,0.022,p)}a8=b1.b
r=s?0.13:0.09
m=a8-0.012
o=s?0.055:0.038
A.op(a9,b0,b1,b2,b3,b4,a8-r,m,o,p)
for(r=b4.length,l=0;l<b4.length;b4.length===r||(0,A.p)(b4),++l){k=b4[l]
o=k.a
j=o-0.075
if(0>j)j=0
i=k.b
h=i+0.075
if(b3<h)h=b3
g=k.c
f=0.018>g?0.018:g
e=k.d
d=e+0.075
if(m<d)d=m
if(o>0)A.cc(a9,b0,b1,b2,j,o,f,d,0.04,p)
if(i<b3)A.cc(a9,b0,b1,b2,i,h,f,d,0.04,p)
if(e<a8)A.cc(a9,b0,b1,b2,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.cc(a9,b0,b1,b2,j,h,0>o?0:o,g,0.065,p)}}for(a8=b0.e,r=A.K(a8),o=r.i("t(1)").a(new A.or(b2)),a8=B.a.gt(a8),r=new A.M(a8,o,r.i("M<1>")),o=b1.c,i=b2!==B.i,e=b2===B.k,c=b1.a;r.m();){b=a8.gp()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
b=b.r
a3=b?10788240:p
a4=(a+a0)*0.5
A.cc(a9,b0,b1,b2,a4-0.0175,a4+0.0175,a1,a2,0.032,a3)
a4=(a1+a2)*0.5
A.cc(a9,b0,b1,b2,a,a0,a4-0.0175,a4+0.0175,0.032,a3)
a5=!i||e?0.11:0.14
a4=a-0.07
if(0>a4)a4=0
a6=!i||e?c:o
a7=a0+0.07
a6=a6<a7?a6:a7
a7=a1-0.055
A.cc(a9,b0,b1,b2,a4,a6,0.018>a7?0.018:a7,a1,a5,p)
if(b)A.cc(a9,b0,b1,b2,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)}},
op(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.yi(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.cc(a,b,c,d,n,o,g,h,i,j)}},
yi(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.f([new A.ex(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.f([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.p)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.ex(j,m))
j=k.b
if(n<j)B.a.k(p,new A.ex(n,j))}h=p}return h},
x7(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
if(!n&&o!=="hall"&&o!=="bedroom")return
o=b.d
s=o.a+c.a*0.5
r=o.c+c.c*0.5
q=o.b+c.b
p=n?13748148:13024682
o=q-0.018
A.u(a,new A.b(s-0.24,o,r-0.24),new A.b(s+0.24,q,r+0.24),p)
n=q-0.034
A.u(a,new A.b(s-0.15,n,r-0.15),new A.b(s+0.15,o,r+0.15),p)
A.u(a,new A.b(s-0.055,q-0.048,r-0.055),new A.b(s+0.055,n,r+0.055),p)},
cc(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.u(a,new A.b(r+e,q+g,p),new A.b(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.u(a,new A.b(r+e,q+g,s-i),new A.b(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.u(a,new A.b(s-i,q+g,p+e),new A.b(s,q+h,p+f),j)
return
case 3:A.u(a,new A.b(r,q+g,p+e),new A.b(r+i,q+h,p+f),j)
return}},
u(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.b(o,n,m),k=c.a,j=new A.b(k,n,m),i=c.b,h=new A.b(k,i,m),g=new A.b(o,i,m)
m=c.c
s=new A.b(o,n,m)
r=new A.b(k,n,m)
q=new A.b(k,i,m)
p=new A.b(o,i,m)
a.aj(j,l,g,h,d)
a.aj(s,r,q,p,d)
a.aj(l,s,p,g,d)
a.aj(r,j,h,q,d)
a.aj(l,j,r,s,d)
a.aj(g,p,q,h,d)},
yt(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
l=d.a
switch(l){case 0:s=new A.b(k+e,j+g,i)
break
case 2:s=new A.b(k+f,j+g,i+c.c)
break
case 1:s=new A.b(k+c.a,j+h,i+f)
break
case 3:s=new A.b(k,j+h,i+e)
break
default:s=m}switch(l){case 0:r=new A.b(k+f,j+g,i)
break
case 2:r=new A.b(k+e,j+g,i+c.c)
break
case 1:r=new A.b(k+c.a,j+h,i+e)
break
case 3:r=new A.b(k,j+h,i+f)
break
default:r=m}switch(l){case 0:q=new A.b(k+f,j+h,i)
break
case 2:q=new A.b(k+e,j+h,i+c.c)
break
case 1:q=new A.b(k+c.a,j+g,i+e)
break
case 3:q=new A.b(k,j+g,i+f)
break
default:q=m}switch(l){case 0:p=new A.b(k+e,j+h,i)
break
case 2:p=new A.b(k+f,j+h,i+c.c)
break
case 1:p=new A.b(k+c.a,j+g,i+f)
break
case 3:p=new A.b(k,j+g,i+e)
break
default:p=m}switch(l){case 0:o=new A.b(0,0,0.003)
break
case 2:o=new A.b(0,0,-0.003)
break
case 1:o=new A.b(-0.003,0,0)
break
case 3:o=new A.b(0.003,0,0)
break
default:o=m}a.co(s.U(0,o),r.U(0,o),q.U(0,o),p.U(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.yu(b,d)
switch(l){case 0:o=new A.b(s.a,s.b,s.c-n)
break
case 2:o=new A.b(r.a,s.b,s.c)
break
case 1:o=new A.b(s.a,s.b,p.c)
break
case 3:o=new A.b(s.a-n,s.b,s.c)
break
default:o=m}switch(l){case 0:l=new A.b(r.a,q.b,s.c)
break
case 2:l=new A.b(s.a,q.b,s.c+n)
break
case 1:l=new A.b(s.a+n,q.b,r.c)
break
case 3:l=new A.b(p.a,q.b,r.c)
break
default:l=m}A.u(a,o,l,9145227)},
yu(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
x8(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a8.a,a=b0.an(b),a0=b0.a6(b),a1=b0.w,a2=a0+a1,a3=a8.d,a4=a3.b,a5=b0.at,a6=a5==="kit-front-door-recessed"
if(a6)s=5058596
else s=a5==="kit-cellar-door-grille"?5722954:6967617
r=a9.b
q=b0.x
p=r<q?r:q
switch(a.a){case 0:a5=a3.a
o=a0-0.075
n=0>o
m=n?0:o
a3=a3.c
l=a5+a0
k=a4+p
j=a3+0.12
A.u(a7,new A.b(a5+m,a4,a3),new A.b(l,k,j),s)
m=a5+a2
i=a9.a
h=a2+0.075
g=i<h
f=g?i:h
A.u(a7,new A.b(m,a4,a3),new A.b(a5+f,k,j),s)
if(n)o=0
n=p-0.075
if(0>n)n=0
i=g?i:h
A.u(a7,new A.b(a5+o,a4+n,a3),new A.b(a5+i,k,j),s)
A.u(a7,new A.b(l,a4,a3),new A.b(m,a4+0.05,j),s)
A.oq(a7,a8,a9,b0,s)
break
case 2:a5=a3.a
o=a0-0.075
n=0>o
m=n?0:o
a3=a3.c+a9.c
l=a3-0.12
k=a5+a0
j=a4+p
A.u(a7,new A.b(a5+m,a4,l),new A.b(k,j,a3),s)
m=a5+a2
i=a9.a
h=a2+0.075
g=i<h
f=g?i:h
A.u(a7,new A.b(m,a4,l),new A.b(a5+f,j,a3),s)
if(n)o=0
n=p-0.075
if(0>n)n=0
i=g?i:h
A.u(a7,new A.b(a5+o,a4+n,l),new A.b(a5+i,j,a3),s)
A.u(a7,new A.b(k,a4,l),new A.b(m,a4+0.05,a3),s)
A.oq(a7,a8,a9,b0,s)
break
case 1:a5=a3.a+a9.a
o=a5-0.12
a3=a3.c
n=a0-0.075
m=0>n
l=m?0:n
k=a4+p
j=a3+a0
A.u(a7,new A.b(o,a4,a3+l),new A.b(a5,k,j),s)
l=a3+a2
i=a9.c
h=a2+0.075
g=i<h
f=g?i:h
A.u(a7,new A.b(o,a4,l),new A.b(a5,k,a3+f),s)
f=p-0.075
if(0>f)f=0
if(m)n=0
m=g?i:h
A.u(a7,new A.b(o,a4+f,a3+n),new A.b(a5,k,a3+m),s)
A.u(a7,new A.b(o,a4,j),new A.b(a5,a4+0.05,l),s)
A.oq(a7,a8,a9,b0,s)
break
case 3:a5=a3.a
a3=a3.c
o=a0-0.075
n=0>o
m=n?0:o
l=a5+0.12
k=a4+p
j=a3+a0
A.u(a7,new A.b(a5,a4,a3+m),new A.b(l,k,j),s)
m=a3+a2
i=a9.c
h=a2+0.075
g=i<h
f=g?i:h
A.u(a7,new A.b(a5,a4,m),new A.b(l,k,a3+f),s)
f=p-0.075
if(0>f)f=0
if(n)o=0
n=g?i:h
A.u(a7,new A.b(a5,a4+f,a3+o),new A.b(l,k,a3+n),s)
A.u(a7,new A.b(a5,a4,j),new A.b(l,a4+0.05,m),s)
A.oq(a7,a8,a9,b0,s)
break}a0=b0.a6(b)
e=a0+a1*0.72
d=r-0.34
c=q<1.02?q:1.02
d=d<c?d:c
a=b0.an(b)
b=e-0.035
if(0>b)b=0
a3=a===B.i||a===B.k?a9.a:a9.c
a5=e+0.035
a3=a3<a5?a3:a5
a5=d-0.035
if(0.12>a5)a5=0.12
o=r-0.05
n=d+0.035
A.cc(a7,a8,a9,a,b,a3,a5,o<n?o:n,0.16,4209719)
if(a6){b=a0+0.1
a1=a0+a1-0.08
b=b>a1?b:a1
A.cc(a7,a8,a9,a,a0+0.08,b,0.16,0.25,0.13,4209719)}},
oq(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.an(o),m=d.a6(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.u(a,new A.b(p,s,o),new A.b(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.u(a,new A.b(p,s,o-d.w),new A.b(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.u(a,new A.b(p-d.w,s,o),new A.b(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.u(a,new A.b(p,s,o),new A.b(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.u(a,new A.b(p,s,o),new A.b(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.u(a,new A.b(p,s,o-0.055),new A.b(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.u(a,new A.b(p-0.055,s,o),new A.b(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.u(a,new A.b(p,s,o),new A.b(p+0.055,s+r,o+d.w),e)
break}},
n0:function n0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
os:function os(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
or:function or(a){this.a=a},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a,b){this.a=a
this.b=b},
r7(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.f([],b4),b6=t.aN,b7=A.f([],b6),b8=A.f([],t.jn),b9=t.N
b9=new A.lv(b5,b7,b8,A.x(b9,t.Y),A.x(b9,t.Q),new A.lx())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.J(b5,A.f([new A.aG(n,B.W,new A.b(4.5,3.9,4),new A.b(0,0,0),A.f([new A.aU("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aU("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.f(["hall-living","kitchen-living"],r),A.f([new A.aY(m,l,new A.b(1,1.95,1),!1,!1,m),new A.aY(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.an,"wallpaper-stripes",i,h,B.z),new A.aG(g,B.W,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.f([new A.aU("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.f(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.f([new A.aY("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.f([new A.bb(e,e,new A.b(0.2,2.175,0.35)),new A.bb(d,d,new A.b(2.2,2.55,3)),new A.bb(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.z),new A.aG(a,B.W,new A.b(4.5,3.75,3),new A.b(0,0,4),A.f([new A.aU("kitchen-south",B.k,1.5,1.05,1.2,1.65,!1,!0),new A.aU("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.f(["hall-kitchen","kitchen-living"],r),A.f([new A.aY(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.aY("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.aY("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.f([new A.bb(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.e9),new A.aG("cellar",B.W,new A.b(4,3,4),new A.b(1,-3,2),B.bm,A.f(["hall-cellar"],r),B.et,B.an,"wallpaper-damp","floor-concrete","ceiling-pipes",B.z),new A.aG("bedroom",B.X,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.f([new A.aU("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aU("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.f(["landing-bedroom"],r),A.f([new A.aY(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.aY("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.f([new A.bb(a3,a3,new A.b(2.2,1.125,2.5)),new A.bb(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.z),new A.aG(a5,B.X,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bm,A.f(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.f([new A.aY("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.an,b,i,h,B.z),new A.aG(a7,B.X,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.f([new A.aU("bathroom-east",B.w,0.9,1.5,0.7,1.5,!0,!0)],s),A.f([a6],r),A.f([new A.aY("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.f([new A.bb(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.z),new A.aG(a9,B.X,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.f([new A.aU("spare-south",B.k,1.8,1.05,0.9,1.35,!1,!0)],s),A.f(["landing-spare"],r),A.f([new A.aY("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.f([new A.bb(b0,b0,new A.b(0.5,1.8,0.3)),new A.bb(b1,b1,new A.b(3.7,2.1,2.7)),new A.bb(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.z)],b4))
B.a.J(b7,A.f([A.cN(g,"outside","kit-front-door-recessed",!0,B.i,B.k,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cN(g,n,b3,!1,B.G,B.w,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cN(g,a,b3,!1,B.G,B.w,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cN(a,n,b3,!1,B.i,B.k,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cN(g,"cellar","kit-cellar-door-grille",!1,B.k,B.w,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cN(g,a5,o,!1,B.w,B.w,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cN(a5,"bedroom",b3,!1,B.G,B.w,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cN(a5,a7,b3,!1,B.k,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cN(a5,a9,b3,!1,B.k,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cP("hall-stairs",f,B.em,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.iS()
b9.jk()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.glS()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gbi(b8)
b4=B.a.gN(B.a.gbi(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.k0()
b9.k_()
return b9},
lv:function lv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lM:function lM(){},
lN:function lN(){},
lL:function lL(){},
lO:function lO(a){this.a=a},
lP:function lP(){},
qP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga5()
j=a.b
if(Math.acos(B.d.K(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
u4(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aq(c),r=J.O(s.a),s=new A.M(r,s.b,s.$ti.i("M<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.lq(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.tv(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
u5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=A.yv(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.tv(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
tv(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.K(a.ga5().bv(c.b),-1,1))<=e},
yv(a,b,c){var s=a.aU(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
l2:function l2(){this.a=null
this.b=0},
nd:function nd(){},
ne:function ne(){},
vt(a){var s=A.hf(a,"inventory asset"),r=A.cC(s,"id"),q=A.cC(s,"kind")
A.cC(s,"source")
A.cC(s,"proxy")
A.cC(s,"pivot")
s=A.hf(s.h(0,"bounds"),"inventory bounds")
return new A.c0(r,q,new A.lU(A.jX(s.h(0,"min"),"bounds.min"),A.jX(s.h(0,"max"),"bounds.max")))},
vu(a){var s,r,q,p,o,n="stateKey",m=A.hf(a,"inventory placement"),l=A.hf(m.h(0,"visibility"),"placement visibility"),k=A.hf(m.h(0,"interaction"),"placement interaction"),j=m.h(0,"clearance"),i=A.cC(m,"id"),h=A.cC(m,"roomId"),g=A.cC(m,"assetId")
A.cC(m,"role")
s=typeof m.h(0,"socket")=="string"?A.D(m.h(0,"socket")):null
m=A.hf(m.h(0,"transform"),"inventory transform")
r=A.jX(m.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.dh)
q=A.jX(m.h(0,"position"),"transform.position")
p=A.jX(m.h(0,"rotation"),"transform.rotation")
A.cC(l,"layer")
if(typeof l.h(0,n)=="string")A.D(l.h(0,n))
J.a9(k.h(0,"pickable"),!0)
o=t.P.b(j)?A.xZ(j,"radius"):0
return new A.cl(i,h,g,s,new A.lV(q,p,r),o)},
hf(a,b){return t.P.b(a)?a:A.cA(b+" is not an object")},
cC(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.cA(b+" is not a string")},
xZ(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.cA(b+" is not finite")},
jX(a,b){var s
if(t.j.b(a)){s=J.av(a)
s=s.gq(a)!==3||s.R(a,new A.p1())}else s=!0
if(s)return A.cA(b+" is not a finite vec3")
s=J.av(a)
return new A.b(A.b0(s.h(a,0)),A.b0(s.h(a,1)),A.b0(s.h(a,2)))},
cA(a){return A.k(A.ae(a,null,null))},
lB:function lB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lC:function lC(a){this.a=a},
lD:function lD(a){this.a=a},
c0:function c0(a,b,c){this.a=a
this.b=b
this.f=c},
cl:function cl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.y=f},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function lU(a,b){this.a=a
this.b=b},
p1:function p1(){},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hZ:function hZ(a){this.a=a},
lE:function lE(a){this.a=a},
cN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bc(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eZ:function eZ(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bc:function bc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aY:function aY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(){},
cP:function cP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aG:function aG(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
vo(a){return A.vn(a)},
vn(a){var s,r,q,p,o,n,m=A.tD(a,"sound emitter"),l=t.N,k=A.x(l,l)
for(s=A.tD(m.h(0,"cues"),"sound emitter cues").gO(),s=s.gt(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.de)
k.l(0,r.a,q)}s=A.qF(m,"id")
r=A.qF(m,"roomId")
p=A.qF(m,"placementId")
o=A.yr(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.eD("gain is not a number")
return new A.c_(s,r,p,o,n,A.cg(k,l,l))},
tD(a,b){return t.P.b(a)?a:A.eD(b+" is not an object")},
qF(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eD(b+" is not a string")},
yr(a,b){var s
if(t.j.b(a)){s=J.av(a)
s=s.gq(a)!==3||s.R(a,new A.p0())}else s=!0
if(s)throw A.d(A.ae(b+" must be a numeric vec3",null,null))
s=J.av(a)
return new A.b(A.b0(s.h(a,0)),A.b0(s.h(a,1)),A.b0(s.h(a,2)))},
eD(a){return A.k(A.ae(a,null,null))},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function lH(a){this.a=a},
lI:function lI(a){this.a=a},
lJ:function lJ(){},
c_:function c_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lw:function lw(){this.b=this.a=null},
f3:function f3(a){this.a=a},
lF:function lF(){this.b=this.a=null},
eb:function eb(a,b){this.a=a
this.b=b},
p0:function p0(){},
r8(a,b,c,d,e,f){var s=t.N
return new A.lK(e,f,c,a,A.cg(A.aX(d,s,s),s,s),A.am(b,s))},
r9(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
h.l(0,p.a,new A.fj(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.p)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.p)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l){j=o[l]
i.l(0,j.a,new A.fb(j.d,j.r))}return A.r8(a.r.b,B.m,i,B.bw,h,s)},
vp(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.eV
r=a3.h(0,"mantleHistory")
if(r==null)r=B.eA
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aL(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.dc)
p=t.N
o=A.x(p,t.ku)
for(n=a.gO(),n=n.gt(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.b4)
l=A.aX(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bL(j)||!A.bL(i))A.k(B.b4)
o.l(0,k,new A.fj(j,i))}h=A.x(p,t.y)
for(n=a0.gO(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bL(l.b))throw A.d(B.da)
h.l(0,k,A.au(l.b))}g=A.x(p,t.mK)
for(n=a1.gO(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.b3)
l=A.aX(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bL(f)||!A.bL(e))A.k(B.b3)
g.l(0,k,new A.fb(f,e))}d=A.x(p,p)
for(q=s.gO(),q=q.gt(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.dy)
d.l(0,n,A.D(p.b))}c=A.f([],t.s)
for(q=J.O(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.d(B.cY)
B.a.k(c,b)}return A.r8(a2,c,g,d,o,h)},
qA(a,b){return a.a.a===b.a&&a.a3(0,b.gc4(b))},
lK:function lK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fj:function fj(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
v9(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.me(e,A.K(e).c)
q=new A.es()
q.cA((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eX(a,q,2,r,1+s,A.ar(["time"],t.N))
break
case 3:A.eX(a,q,3,r,1+s,A.ar(["place"],t.N))
break
case 4:A.eX(a,q,4,r,2+s,p)
A.v5(a,q,4)
break
case 5:A.eX(a,q,5,r,s,p)
A.v3(a,q,5)
break
case 6:A.eX(a,q,6,r,s,p)
A.v4(a,q)
A.v8(a,q,6)
break
case 7:A.v6(a,q,7)
break
default:if(s>0)A.eX(a,q,b,r,s,p)}},
v2(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.v7(a,b,c))return!1
return!0},
eX(a,b,c,d,e,f){var s,r,q,p,o=A.f([],t.r)
for(s=a.b,s=new A.an(s,s.r,s.e,A.o(s).i("an<2>"));s.m();){r=s.d
if(A.v2(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cw(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.r3(a,b,o[p],f)}},
r3(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aX(B.a.gN(o).a,n,n)
if(d==null)s=A.f(B.t.slice(0),t.s)
else{n=t.nn
s=A.L(new A.R(B.t,t.dA.a(new A.kY(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.ap(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.e5(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.ap(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.l(0,r,p[n])}a.d_(c.a,m,B.a.gN(o).b)},
v5(a,b,c){var s=A.r4(a,b,c)
if(!a.br(s))return
a.eb(c,t.G.a(s),0,B.al,null)},
r4(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.t[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.ap(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.l(0,r,q[o])}}return m},
v3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.r)
for(s=a.b,s=new A.an(s,s.r,s.e,A.o(s).i("an<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cw(i,b)
s=i.length
if(0>=s)return A.e(i,0)
q=i[0]
if(1>=s)return A.e(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aX(B.a.gN(i).a,s,s)
r=p.c
n=A.aX(B.a.gN(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.t[m]
k=o.h(0,l)
j=s.e5(l,k==null?"":k)
k=j.length
if(k!==0){k=b.ap(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.l(0,l,j[k])}}a.d_(q.a,o,B.a.gN(i).b)
a.d_(p.a,n,B.a.gN(r).b)},
v4(a,b){var s,r,q=A.f([],t.r)
for(s=a.b,r=new A.an(s,s.r,s.e,A.o(s).i("an<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.ap(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.ah(0,q[r].a)},
v8(a,b,c){var s,r,q=A.f([],t.r)
for(s=a.b,s=new A.an(s,s.r,s.e,A.o(s).i("an<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.ap(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.r3(a,b,q[s],null)},
v6(a,b,c){var s=c+1,r=A.r4(a,b,s)
if(!a.br(r))return
a.eb(s,t.G.a(r),0,B.al,null)},
v7(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gN(b.c).c===B.Z}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gN(b.c).c===B.Z}if(c===21)return b.e
return!1},
kY:function kY(a){this.a=a},
wk(a){var s,r,q,p,o=t.N,n=A.x(o,t.a)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p=A.ax(q==null?B.m:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.nI(n)},
m9(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.ic(A.cg(p,q,q),b,c)},
ri(a){var s=t.N
return A.m9(t.P.a(a.h(0,"fields")).bc(0,new A.ma(),s,s),A.b0(a.h(0,"shakiness")),A.ve(B.ep,A.D(a.h(0,"hand")),t.bU))},
vd(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.f([],t.b1)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.ri(r.a(s.gp())))
s=A.bz(a.h(0,"corroborator"))
q=A.au(a.h(0,"locked"))
p=A.th(a.h(0,"lastReadDay"))
return new A.bm(n,m,l,s,q,p,o==null?null:A.ri(r.a(o)))},
cI:function cI(a,b){this.a=a
this.b=b},
nI:function nI(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function ma(){},
mb:function mb(a){this.a=a},
bm:function bm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rf(a){return new A.lX(a,A.x(t.S,t.L),A.a5(t.N),A.f([],t.t))},
vB(a,b){var s,r,q,p,o=A.rf(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.uA(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.vd(r.a(s.gp()))
q.l(0,p.a,p)}return o},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
m3:function m3(a,b){this.a=a
this.b=b},
kD:function kD(){},
e0:function e0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kE:function kE(){},
m8:function m8(){},
m7:function m7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mw:function mw(){},
mv:function mv(a,b){this.b=a
this.c=b},
mx:function mx(){},
pV(a){if(!isFinite(0))A.k(A.aw(0,"interpolation",null))
return new A.mX(a)},
fo:function fo(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
mX:function mX(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
mW(a,b,c,d,e){var s="9900c9b38935-d004e52a5506",r=A.oy("RENDERER_SHA"),q=A.oy("GAME_SHA"),p=A.oy("DART_SDK_VERSION"),o=A.oy("LOCKFILE_SHA256"),n=A.me(b,A.K(b).c)
n=A.L(n,A.o(n).c)
B.a.a0(n)
n=new A.mV(a,e,s,A.am(n,t.N),r,q,p,o,c,d)
n.iK(a,s,b,c,d,q,o,e,r,p)
return n},
oy(a){var s=B.eO.h(0,a)
return s.length===0?null:s},
mV:function mV(a,b,c,d,e,f,g,h,i,j){var _=this
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
r1(a,b,c,d,e,f,g){var s=A.L(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ae("saved day-loop resources must not be negative",null,null))
return new A.kP(c,g,b,a,e,d===!0,s)},
uX(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.d5)
s=A.f([],t.b2)
for(r=J.O(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.d(B.dd)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aL(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.d4)
f=A.ec(new A.R(B.bk,q.a(new A.kQ(h)),p),o)
e=A.ec(new A.R(B.bp,n.a(new A.kR(g)),m),l)
if(f==null||e==null)throw A.d(B.dt)
B.a.k(s,new A.el(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aL(d)||!A.aL(c)||!A.aL(b)||!A.bL(a))throw A.d(B.di)
return A.r1(c,d,a1,a,b,s,a3)},
bd:function bd(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
i2:function i2(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
nM:function nM(a,b){this.b=a
this.c=b},
dD:function dD(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
lQ:function lQ(a){this.c=a},
lS:function lS(a,b){this.a=a
this.b=b},
lT:function lT(){},
rv(){var s=A.qo(B.m),r=A.qo(B.m),q=new A.n2(B.x,s,r)
if(!isFinite(0))A.k(B.cZ)
if(!B.a.a3(r,B.a.gc4(s)))A.k(B.dj)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.d0)
return q},
qo(a){var s,r,q,p=A.f([],t.s),o=A.a5(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.d(B.ds)
B.a.k(p,q)}return p},
bF:function bF(a,b){this.a=a
this.b=b},
n1:function n1(){},
c5:function c5(){},
n2:function n2(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hS:function hS(a,b){this.a=a
this.b=6
this.c=b},
u7(a){var s=B.d.K(a,0,1)
if(s<=0.5)return A.tB(4491468,16777215,s*2)
return A.tB(16777215,16759637,(s-0.5)*2)},
u8(a){var s=B.d.K(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga5()},
tB(a,b,c){var s,r=new A.oT(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.ii()
s=r.$1(8)
if(typeof s!=="number")return s.ii()
r=r.$1(0)
if(typeof r!=="number")return A.k_(r)
return(q<<16|s<<8|r)>>>0},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
eo(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
ni:function ni(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
nj:function nj(){},
nk:function nk(){},
dB:function dB(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a,b){this.a=a
this.b=b},
nn:function nn(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
no:function no(){},
np:function np(){},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kG:function kG(a){this.a=a
this.b=null},
v0(a){var s=A.f([],t.W)
s=new A.kT(A.N(a,"div","door",null),s)
s.iF(a)
return s},
kT:function kT(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.z=_.y=_.x=_.w=null
_.Q=!1},
kU:function kU(a,b){this.a=a
this.b=b},
kV:function kV(a){this.a=a},
kW:function kW(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b},
va(a){var s=new A.l_(a,A.c(a.createElement("div")))
s.bl(a)
s.iG(a)
return s},
l_:function l_(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
l0:function l0(a){this.a=a},
vm(a){var s=new A.lt(a,A.c(a.createElement("div")))
s.bl(a)
s.iH(a)
return s},
lt:function lt(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lu:function lu(a){this.a=a},
lY:function lY(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
lZ:function lZ(a){this.a=a},
m_:function m_(a){this.a=a},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
m1:function m1(){},
m2:function m2(){},
N(a,b,c,d){var s=A.c(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
tq(a){var s,r,q,p=A.c(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.f([],t.W)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.h(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
fi:function fi(){},
mF:function mF(a){this.a=a
this.b=null},
w2(a){var s=t.N,r=t.m
r=new A.n7(A.x(s,r),A.x(s,r),a,A.c(a.createElement("div")))
r.bl(a)
r.iM(a)
return r},
n7:function n7(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.y=b
_.Q=_.z=null
_.a=c
_.b=d
_.e=_.d=_.c=null},
n9:function n9(a,b){this.a=a
this.b=b},
na:function na(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
n8:function n8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w3(a){var s=new A.nf(a,A.c(a.createElement("div")))
s.bl(a)
s.iN(a)
return s},
nf:function nf(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ng:function ng(a,b,c){this.a=a
this.b=b
this.c=c},
uH(a){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.od)
for(s=a.d,s=new A.U(s,A.o(s).i("U<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gO(),n=n.gt(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.bQ(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.kc())
return new A.kb(A.am(i,t.B),A.a5(t.N))},
bQ:function bQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kb:function kb(a,b){this.a=a
this.b=b},
kd:function kd(){},
kc:function kc(){},
wj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.hC
s=t.g
r=A.x(s,t.kz)
q=A.o(e).i("ah<1>")
p=A.L(new A.ah(e,q),q.i("n.E"))
B.a.a0(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.p)(p),++l){k=p[l]
for(j=e.h(0,k).gO(),j=j.gt(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bf(new A.bv(B.ho,k+" has an out-of-range authored day "+h+"."))
g=A.wi(k,h,i.b,m)
if(g instanceof A.bf)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.l(0,new A.be(k,h,f.a,f.b),o.a(g).a)}}return new A.j2(new A.j1(r,A.a5(t.N),A.a5(s),A.f([],t.bl),B.C))},
wi(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bj[p]
n=o.b
m=n+"."
l=A.f([],q)
for(k=a0.gO(),k=k.gt(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.Z(h,m))continue
g=A.mB(B.b.bM(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bf(new A.bv(B.hp,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bo
B.a.k(l,new A.bG(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.nC())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bf(new A.bv(B.ce,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bf(new A.bv(B.ce,a+" day "+s+" has no authored tiers."))
return new A.jr(c)},
j1:function j1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
nG:function nG(a){this.a=a},
nF:function nF(a){this.a=a},
nD:function nD(a){this.a=a},
nE:function nE(){},
nC:function nC(){},
j2:function j2(a){this.a=a},
jr:function jr(a){this.a=a},
yM(a){var s,r,q,p=A.a5(t.N)
for(s=new A.U(a,A.o(a).i("U<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gal(),q=q.gt(q);q.m();)if(q.gp().gS().R(0,new A.p9())){p.k(0,r.a)
break}}s=A.L(p,p.$ti.c)
B.a.a0(s)
return s},
yL(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.ax(b,!0,s)
B.a.a0(r)
q=new A.es()
q.cA((a^913741)>>>0)
p=q.ap(4)
if(!(p>=0&&p<4))return A.e(B.bi,p)
o=B.bi[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.ax(r,!0,s)
B.a.cw(m,q)
s=A.nl(m,0,A.dR(n,"count",t.S),A.K(m).c).bg(0)
B.a.a0(s)
return s},
p9:function p9(){},
rK(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aL(r)||!A.aL(q)||!A.aL(p)||r<1||q<0||q>23||p<0)return null
return new A.be(s,r,q,p)},
wh(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a5(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a5(t.g)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.rK(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.uG(m)
if(!s&&l==null)return i
return new A.j3(r,o,l)},
uG(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.rK(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aL(p))if(!(p<0))if(A.bL(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.ec(new A.R(B.bj,t.nw.a(new A.k8(r)),t.na),t.kM)
k=A.ec(new A.R(B.eK,t.bQ.a(new A.k9(q)),t.cB),t.nq)
m=o==null
j=m?h:A.ec(new A.R(B.ef,t.hg.a(new A.ka(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.hk(s,l,k,p,j,n)},
b8:function b8(a,b){this.a=a
this.b=b},
bt:function bt(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c8:function c8(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(){},
hk:function hk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
nH:function nH(){},
bf:function bf(a){this.a=a},
j_:function j_(a){this.a=a},
iZ:function iZ(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
pg(){var s=0,r=A.b4(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$pg=A.b5(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.h(A.c(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.C.b=c3
$.qm=A.h(A.c(c2.document).getElementById("fps"))
$.bh.b=$.ur().bL(A.nw().gbJ().h(0,"renderer"))
A.xF()
a6=$.C.j()
a7=A.a(A.c(c2.window).innerWidth)>0?A.a(A.c(c2.window).innerWidth):800
a6.width=a7
a7=$.C.j()
a6=A.a(A.c(c2.window).innerHeight)>0?A.a(A.c(c2.window).innerHeight):600
a7.height=a6
n=A.h(c3.getContext("webgl2"))
if(n==null){$.bh.b=new A.e0(B.a0,$.bh.j().b,$.bh.j().c,!0,"webgl2 unavailable")
h=B.ae.kx($.bh.j())
h.aL()
$.cz.b=h
A.tG()
A.d1("no-webgl2")
c2=A.h(A.c(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bh.j().a===B.a1){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.fP
b1=new A.fU(n,A.a($.C.j().width),A.a($.C.j().height),A.f([],a6),A.x(a7,t.l0),A.f([],t.jj),A.x(a7,a8),A.x(a7,a9),A.x(a7,a8),A.x(a7,a9),A.f([],a6),A.f([],t.jU),B.er,A.x(a7,t.lu),A.x(a7,b0),A.x(a7,b0),B.dz,B.fk)}else b1=new A.er(n,A.a($.C.j().width),A.a($.C.j().height),A.nw().gbJ().h(0,"render")==="legacy",$.bh.j().d,$.bh.j().e)
m=b1
$.bM=m instanceof A.fU?m:null
$.jR=m instanceof A.er?m:null
a6=B.ae.d0($.bh.j(),m)
a6.aL()
$.cz.b=a6}catch(c5){l=A.ad(c5)
a6=$.bh.j()
$.bh.b=new A.e0(B.a0,!0,a6.c,!0,"pixeldart initialization failed")
$.jR=new A.er(n,A.a($.C.j().width),A.a($.C.j().height),A.nw().gbJ().h(0,"render")==="legacy",!0,$.bh.j().e)
a6=B.ae.d0($.bh.j(),$.jR)
a6.aL()
$.cz.b=a6
$.C.j().setAttribute("data-renderer-error",A.q(l))}A.tG()
p=4
A.d1("initializing")
$.bK.b=new A.kI(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.qx=A.au(A.c(A.c(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bK.j()
a6.f=$.qx?0.5:1
a6=A.c(c2.window)
a7=t.N
a8=A.c(a6.document)
a9=new A.i1(a8,A.a5(a7),A.a5(a7))
a6.addEventListener("keydown",A.a6(a9.gjv()))
a6.addEventListener("keyup",A.a6(a9.gjx()))
a6.addEventListener("mousemove",A.a6(a9.gjB()))
a8.addEventListener("pointerlockchange",A.a6(a9.gjz()))
$.bi.b=a9
$.tc.b=new A.i_(A.f([],t.oX),t.lv)
a9=$.C.j()
a6=A.a(A.c(c2.window).innerWidth)>0?A.a(A.c(c2.window).innerWidth):800
a9.width=a6
a6=$.C.j()
a8=A.a(A.c(c2.window).innerHeight)>0?A.a(A.c(c2.window).innerHeight):600
a6.height=a8
A.d1("renderer")
if($.bh.j().a===B.a0){a6=$.jR
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.i()}$.eH=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.d(h)}}A.d1("text")
a6=$.k3()
s=7
return A.a8(a6.bF(),$async$pg)
case 7:k=a6.lR()
j=A.wj(k)
if(!(j instanceof A.j2)){i=t.cq.a(j).a
h=i.b
throw A.d("Failed to build visitors: "+h)}$.aI.b=j.a
$.jL.b=A.uH(k)
h=A.x(a7,t.a)
for(a8=t.j,b3=0;b3<5;++b3){g=B.t[b3]
a9=A.D(g)
b0=a6.c
b0===$&&A.i()
b4=b0.h(0,a9)
a9=a8.b(b4)?A.ax(b4,!0,a7):B.m
J.bP(h,g,a9)}f=A.wk(h)
$.qg.b=new A.kH(B.cF)
e=$.qg.j().ls(new A.ph(f))
if(e.a==null){h=B.aU.ap(2147483647)
if(!isFinite(480))A.k(A.aw(480,"daySeconds","must be finite and > 0"))
b5=new A.hS(1,480)
b5.b=10
b6=A.rf(f)
h=A.r5(42,1+h,A.r7(42),b5,b6,A.r1(6,16,b6,null,6,B.es,b5),new A.hJ(0,0,0,!1))}else{h=e.a
h.toString
h=A.r6(h,f)}$.T.b=h
$.cz.j().aI(A.pV($.T.j().gdM()))
if(e.b!=null){h=e.b
h.toString
A.eI(h)}h=$.aI.j()
a6=A.yL($.T.j().b,A.yM(k.b))
h.sit(A.me(a6,A.K(a6).c))
A.d1("house")
$.Y.b=$.T.j().c
a6=$.bM
if(a6!=null)a6.ke($.Y.j())
$.dO.b=$.T.j().d
h=new A.b(5.5,1.65,3.5)
$.qH=$.qv=$.qD=h
d=h.a9(0,new A.b(0,1.3499999999999999,0))
$.ha.b=new A.hw(d,J.qS(d,new A.b(0,1.2000000000000002,0)))
$.eA.b=new A.l2()
$.bj.b=A.rv()
$.aK="hall"
h=e.a
c=A.vK(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.l1($.Y.j())){h=c.b
$.qH=$.qv=$.qD=h
$.bN=c.c
$.dP=c.d
$.aK=c.a
b=h.a9(0,new A.b(0,1.3499999999999999,0))
h=$.ha.j()
h.skf(b)
h.b=J.qS(b,new A.b(0,1.2000000000000002,0))
h=$.ha.j()
a6=$.Y.j()
a9=c.e
b0=c.f
h.lG($.aK,$.eO(),a6,b0,a9)
A.eI("restored position")}h=$.T.j().e
a6=$.dO.j()
$.T.j()
$.jN.b=new A.lS(h,a6)
a6=A.c(c2.document)
h=$.T.j().e
a9=$.dO.j()
b0=$.jN.j()
b7=A.c(a6.createElement("div"))
b0=new A.lY(h,a9,b0,a6,b7)
b0.bl(a6)
b7.setAttribute("aria-label","The Journal")
A.c(b7.appendChild(A.N(a6,"div","journal-title","The Journal")))
b8=A.N(a6,"div","journal-pages",null)
a9=A.N(a6,"div","page page-left",null)
b0.y!==$&&A.y()
b0.y=a9
h=A.N(a6,"div","page page-right",null)
b0.z!==$&&A.y()
b0.z=h
A.c(b8.appendChild(a9))
A.c(b8.appendChild(h))
A.c(b7.appendChild(b8))
A.c(b7.appendChild(b0.iU()))
b9=A.N(a6,"div","tape-roll",null)
A.c(b9.style).setProperty("width","8rem")
h=A.N(a6,"div","tape-fill",null)
b0.as!==$&&A.y()
b0.as=h
A.c(b9.appendChild(h))
A.c(b7.appendChild(b9))
c0=A.N(a6,"div","consult",null)
A.c(c0.appendChild(A.N(a6,"div","consult-label","Cite an entry")))
h=A.N(a6,"div","entry-picker",null)
b0.at!==$&&A.y()
b0.at=h
a9=A.N(a6,"div","consult-result",null)
b0.ax!==$&&A.y()
b0.ax=a9
A.c(c0.appendChild(h))
A.c(c0.appendChild(a9))
A.c(b7.appendChild(c0))
c1=A.h(a6.documentElement)
if(t.m.b(c1)){A.c(c1.style).setProperty("--shake-max-deg","3deg")
A.c(c1.style).setProperty("--shake-max-px","2px")}$.eB.b=b0
$.eB.j().sbH(new A.pi())
h=A.c(c2.document)
a6=A.N(h,"div","prompt",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.c(a6.style).setProperty("transition-duration","0.3s")
A.c(A.h(h.body).appendChild(a6))
$.td.b=new A.mF(a6)
a6=A.c(c2.document)
h=A.N(a6,"div","broadcast",null)
h.setAttribute("role","status")
h.setAttribute("aria-live","polite")
h.setAttribute("aria-atomic","true")
A.c(A.h(a6.body).appendChild(h))
$.tb.b=new A.kG(h)
h=A.c(c2.document)
a6=A.N(h,"div","ambient-notice",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.c(A.h(h.body).appendChild(a6))
$.qe.b=new A.ke(a6)
a6=A.v0(A.c(c2.document))
a6.slf(A.z2())
a6.slh(A.z4())
a6.slg(A.z3())
$.aA.b=a6
a6=e.a
a=A.wh(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aI.j().lF(a))A.y4()
h=$.jL.j()
a6=e.a
h.lH(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.O(a0);h.m();){a1=h.gp()
if(A.aL(a1))$.p_.k(0,a1)}h=A.w3(A.c(c2.document))
h.slm(new A.pj())
h.sbH(new A.pq())
$.jO.b=h
h=A.vm(A.c(c2.document))
h.sbH(new A.pr())
$.jM.b=h
h=A.w2(A.c(c2.document))
h.slj(new A.ps())
h.sll(new A.pt())
h.slk(new A.pu())
h.sbH(new A.pv())
$.dN.b=h
h=A.va(A.c(c2.document))
h.sbH(new A.pw())
h.sli(new A.px())
$.qf.b=h
h=e.a
a2=A.vc(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.tF(a2)
a3=$.eH
if(a3!=null){A.d1("world")
h=$.Y.j()
a6=a3
a7=new A.n_(h,a6,A.x(a7,t.J))
a7.iL(h,a6)
$.ox=a7}h=B.b.v(A.D(A.c(A.c(c2.window).location).search),"shaders=live")
$.tR=h
if(h){h=$.eH
if(h!=null)h.be()}A.tI()
A.c(c2.window).addEventListener("resize",A.a6(new A.pk()))
A.c(c2.window).addEventListener("keydown",A.a6(new A.pl()))
A.c(c2.window).addEventListener("keyup",A.a6(new A.pm()))
A.c(c2.window).addEventListener("keydown",A.a6(new A.pn()))
A.c(c2.window).addEventListener("click",A.a6(new A.po()))
$.C.j().addEventListener("click",A.a6(new A.pp()))
A.eF()
A.d1("raf")
A.a(A.c(c2.window).requestAnimationFrame(A.a6(A.u0())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ad(c4)
a5=A.ce(c4)
A.oV(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$pg,r)},
xF(){var s=v.G
A.c(s.window).addEventListener("error",A.a6(new A.oR()))
A.c(s.window).addEventListener("unhandledrejection",A.a6(new A.oS()))},
d1(a){if($.tk===a)return
$.tk=a
$.C.j().setAttribute("data-boot-phase",a)},
tG(){var s,r,q=$.cz.j().gb9(),p=$.C.j(),o=A.nw().gbJ().h(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.p.ba(q.C(),null))
p=$.bM
s=p==null?null:p.x
if(s!=null)$.C.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jR
r=p==null?null:p.y
if(r!=null)$.C.j().setAttribute("data-renderer-frame-submits",A.q(r))},
qB(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bj.j().a!==B.x){A.eI("save unavailable during rupture")
return}try{r=$.qg.j()
q=$.T.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aK
m=$.eO()
l=$.bN
k=$.dP
j=$.ha.j().d
j=j==null?null:j.a.a
i=$.ha.j().d
J.bP(s,"player",new A.it(n,m,l,k,j,i==null?null:i.b).C())
n=$.aI.j()
m=A.pY(n.b,p)
l=A.pY(n.c,t.g)
n=n.e
J.bP(s,"visitors",new A.j3(m,l,n==null?null:new A.hk(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.jL.j().b
n=A.L(n,A.o(n).c)
B.a.a0(n)
J.bP(s,"ambient",n)
n=A.L($.p_,A.o($.p_).c)
B.a.a0(n)
J.bP(s,"unverifiables",n)
n=$.ql
if(n!=null)J.bP(s,"ending",A.V(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.r9(q.c).C()
k=q.d
r.lT(A.rw(s,A.V(["houseSeed",n,"runSeed",m,"house",l,"time",A.V(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.eI(a)}catch(h){A.eI("save failed")}},
eI(a){var s=A.h(A.c(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.vk(B.cL,new A.oY(s),t.H)},
oV(a,b){var s,r,q,p
A.d1("error")
s=A.q(a)
r=A.zf(s,"\n"," ")
s=$.qm
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.h(A.c(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.C.j().setAttribute("data-boot-error",p)
A.c(s.console).error(p)},
tf(){var s,r
if($.qh)return
$.qh=!0
s=$.bA
r=s==null
if(!r)s.hO()
if(!r)s.e7("music")
B.a.k($.cb,"arm")},
eF(){var s=0,r=A.b4(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eF=A.b5(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a8(A.eE(),$async$eF)
case 2:o=null
q=4
s=7
return A.a8(A.aB(A.c(A.c(v.G.window).fetch("res/manifest.json")),t.m),$async$eF)
case 7:n=b
i=A
s=8
return A.a8(A.aB(A.c(n.json()),t.X),$async$eF)
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
if(k!=null&&typeof k==="string"){l=A.h(A.c(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.D(k)}s=9
return A.a8(A.li(A.f([A.oU(o),A.oQ(o)],t.iw),t.H),$async$eF)
case 9:return A.b2(null,r)
case 1:return A.b1(p.at(-1),r)}})
return A.b3($async$eF,r)},
eE(){var s=0,r=A.b4(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eE=A.b5(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.eo[f]
p=7
s=10
return A.a8(A.aB(A.c(A.c(i.window).fetch(n)),h),$async$eE)
case 10:m=a0
s=11
return A.a8(A.aB(A.c(m.text()),g),$async$eE)
case 11:l=a0
k=A.uK(B.p.bs(l,null))
e=$.Y.b
if(e===$.Y)A.k(A.a_(""))
k.dX(e)
e=$.C.b
if(e===$.C)A.k(A.a_(""))
e.setAttribute("data-house-manifest","validated")
e=$.C.b
if(e===$.C)A.k(A.a_(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.a8(A.jT(),$async$eE)
case 12:s=13
return A.a8(A.jU(),$async$eE)
case 13:s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.ad(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:$.C.j().setAttribute("data-house-manifest","unavailable")
A.c(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$eE,r)},
jT(){var s=0,r=A.b4(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$jT=A.b5(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.ei[c]
p=7
s=10
return A.a8(A.aB(A.c(A.c(g.window).fetch(n)),f),$async$jT)
case 10:m=b1
s=11
return A.a8(A.aB(A.c(m.text()),e),$async$jT)
case 11:l=b1
b=B.p.bs(l,null)
b=h.b(b)?b:A.cA("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.cA("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aL(a)?a:A.cA("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.cA("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.ax(a,!0,d):A.cA("assets is not a list")
a4=A.K(a3)
a5=a4.i("S<1,c0>")
a3=A.L(new A.S(a3,a4.i("c0(1)").a(A.yY()),a5),a5.i("a2.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.ax(a,!0,d):A.cA("placements is not a list")
a5=A.K(a4)
a6=a5.i("S<1,cl>")
a4=A.L(new A.S(a4,a5.i("cl(1)").a(A.yZ()),a6),a6.i("a2.E"))
a4.$flags=1
k=new A.lB(a1,a2,a0,a3,a4)
a1=$.Y.b
if(a1===$.Y)A.k(A.a_(""))
k.dX(a1)
$.qn=k
a1=$.bM
if(a1!=null)a1.i2(k)
a1=$.C.b
if(a1===$.C)A.k(A.a_(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.C.b
if(a1===$.C)A.k(A.a_(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.C.b
if(a1===$.C)A.k(A.a_(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ad(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.C.j().setAttribute("data-house-inventory","unavailable")
A.c(g.console).warn("authored house inventory unavailable: "+A.q(a8))
case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$jT,r)},
jU(){var s=0,r=A.b4(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$jU=A.b5(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.qn
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.eB[a4]
p=7
s=10
return A.a8(A.aB(A.c(A.c(a1.window).fetch(m)),a2),$async$jU)
case 10:l=b5
s=11
return A.a8(A.aB(A.c(l.text()),e),$async$jU)
case 11:k=b5
a5=B.p.bs(k,null)
a5=a0.b(a5)?a5:A.eD("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.ax(a6,!0,a3):A.eD("emitters is not a list")
a8=A.K(a7)
a9=a8.i("S<1,c_>")
a7=A.L(new A.S(a7,a8.i("c_(1)").a(A.zd()),a9),a9.i("a2.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aL(a6)?a6:A.eD("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.eD("sourceRef is not a string")
j=new A.lG(a8,a9,a7)
a7=$.Y.b
if(a7===$.Y)A.k(A.a_(""))
j.lP(a7,b2)
$.tu=j
i=A.x(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.p)(a7),++b0){h=a7[b0]
for(a9=h.f.gO(),a9=a9.gt(a9);a9.m();){g=a9.gp()
J.bP(i,h.a+":"+g.a,A.f([g.b],c))}}a7=$.Y.b
if(a7===$.Y)A.k(A.a_(""))
a8=A.uI(i)
a9=new A.kn(a7,A.cg(B.bx,e,d),a8)
a9.iD(a8,a7,B.bx)
$.ot=a9
a7=$.bA
if(a7!=null){a7.ch=a9
a7.b6()}a7=$.C.b
if(a7===$.C)A.k(A.a_(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.C.b
if(a7===$.C)A.k(A.a_(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.C.b
if(a7===$.C)A.k(A.a_(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.C.b
if(a7===$.C)A.k(A.a_(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ad(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.ot=null
$.C.j().setAttribute("data-audio-planner","unavailable")
$.C.j().setAttribute("data-house-soundscape","unavailable")
A.c(a1.console).warn("authored house soundscape unavailable: "+A.q(n))
case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$jU,r)},
qk(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.bS(s,A.K(s).i("bS<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.D(q))}},
oQ(a){var s=0,r=A.b4(t.H),q,p,o,n,m,l
var $async$oQ=A.b5(function(b,c){if(b===1)return A.b1(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.x(n,n)
n=a==null
A.qk(A.h(n?null:a.sfx),m,"")
A.qk(A.h(n?null:a.ir),m,"ir-")
q=A.h(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.D(p))
l=$
s=2
return A.a8(A.kr(m,$.Y.j()),$async$oQ)
case 2:o=l.bA=c
o.ch=$.ot
o.b6()
A.y3(o)
if($.qh){o.hO()
o.e7("music")}return A.b2(null,r)}})
return A.b3($async$oQ,r)},
qE(a,b){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
qw(a){var s,r
try{s=A.bz(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
y3(a){var s,r,q,p,o,n,m,l,k=A.x(t.N,t.i)
for(s=0;s<5;++s){r=B.en[s]
q=A.qw(r)
p=A.rp(q==null?"":q)
if(p!=null)k.l(0,r,B.d.K(p,0,1))}o=A.qw("muted")==="true"
n=A.qw("mono")==="true"
q=k.h(0,"master")
m=k.h(0,"voice")
l=k.h(0,"effects")
a.aO(k.h(0,"ambience"),l,q,k.h(0,"music"),o,m)
a.e2(n)
for(q=new A.U(k,k.$ti.i("U<1,2>")).gt(0);q.m();){m=q.d
m.toString
l=$.dN.b
if(l===$.dN)A.k(A.a_(""))
l.i3(m.a,m.b)}q=$.dN.j()
q.z.checked=o
q=q.Q
if(q!=null)q.checked=n},
oU(a){var s=0,r=A.b4(t.H),q,p,o
var $async$oU=A.b5(function(b,c){if(b===1)return A.b1(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.qk(A.h(a==null?null:a.tex),o,"")
p=$.eH
p=p==null?null:p.aw(o)
if(p==null)p=A.pJ(t.H)
q=$.bM
q=q==null?null:q.aw(o)
s=2
return A.a8(A.li(A.f([p,q==null?A.pJ(t.H):q],t.iw),t.H),$async$oU)
case 2:return A.b2(null,r)}})
return A.b3($async$oU,r)},
tI(){var s,r,q=v.G,p=A.a(A.c(q.window).innerWidth),o=A.a(A.c(q.window).innerHeight)
q=$.C.j()
s=p>0?p:800
q.width=s
s=$.C.j()
q=o>0?o:600
s.height=q
q=$.eH
if(q!=null)q.aG(A.a($.C.j().width),A.a($.C.j().height))
$.cz.j().aG(A.a($.C.j().width),A.a($.C.j().height))
q=$.bM
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.C.j().setAttribute("data-renderer-surface",r)},
y0(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.b0(c2)
try{s=c2
if(!$.tt){$.qs=s
$.tt=!0}e=s
d=$.qs
if(typeof e!=="number")return e.a9()
r=(e-d)/1000
$.qs=s
e=r
if(typeof e!=="number")return e.cu()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.a8()
if(e>0.25)r=0.25
A.yn(r)
if(!$.qt){e=$.oo
d=r
if(typeof d!=="number")return A.k_(d)
d=$.oo=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.cu()
c=c<10}else c=!1
if(!c)break
$.qv=$.eO()
d=$.T.b
if(d===$.T)A.k(A.a_(""))
d.ka(0.008333333333333333)
d=$.us()
c=$.T.b
if(c===$.T)A.k(A.a_(""))
c=c.gam()
b=$.T.b
if(b===$.T)A.k(A.a_(""))
d=d.cW(c.a,b.gam().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){p=d[a]
B.a.k($.cb,"clock:"+p.a)}d=$.ut()
c=$.T.b
if(c===$.T)A.k(A.a_(""))
c=c.gam()
b=$.T.b
if(b===$.T)A.k(A.a_(""))
d=d.cW(c.a,b.gam().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){o=d[a]
B.a.k($.cb,"service:"+o.a+":"+o.b)}A.yq()
d=$.aI.b
if(d===$.aI)A.k(A.a_(""))
c=$.T.b
if(c===$.T)A.k(A.a_(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.ax(d,!1,e)
a0.$flags=3
a1=a0
B.a.H(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.k(A.a_(""))
d.lu(a1)}A.ym()
A.yp()
A.yo()
A.yl(0.008333333333333333)
d=$.eA.b
if(d===$.eA)A.k(A.a_(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bj.b
if(d===$.bj)A.k(A.a_(""))
n=d.a!==B.x
c=$.Y.b
if(c===$.Y)A.k(A.a_(""))
d.kb(0.008333333333333333,c)
if(n){d=$.bj.b
if(d===$.bj)A.k(A.a_(""))
d=d.e}else d=!1
if(d)A.tJ(!0)
d=$.oo-0.008333333333333333
$.oo=d
c=q
if(typeof c!=="number")return c.U()
q=c+1}m=B.d.K(d/0.008333333333333333,0,1)
e=$.qH=A.rJ($.uu(),$.eO(),m)
l=$.bA
if(l!=null){d=l
c=Math.sin($.bN)
b=Math.cos($.bN)
a2=A.c(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aM(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.i5($.aK)
for(e=$.cb.length,a=0;a<$.cb.length;$.cb.length===e||(0,A.p)($.cb),++a){k=$.cb[a]
A.xr(l,k)}B.a.H($.cb)
$.C.j().setAttribute("data-audio-spatial-active",""+l.CW.a)
e=$.C.j()
d=l.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)}}j=$.eH
if(j!=null){$.bK.j().dI($.hh(),$.bN,$.dP)
e=$.aJ===$.eB.j()?1:0
j.c9=e
$.tA=r
$.cz.j().aI(A.pV($.T.j().gdM()))}else if($.bh.j().a===B.a1){$.bK.j().dI($.hh(),$.bN,$.dP)
e=$.bM
if(e!=null){d=$.bK.j()
c=d.a
a3=new A.z(c.a,c.b,c.c)
c=d.b
a4=new A.z(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.rm(a3,a4,new A.z(d.a,d.b,d.c))
a7=A.pR(a5,60,1.0471975511965976,0.1)
e.go=new A.e2(a6,a7,a7.X(0,a6),a3,a4,0.1,60,a5)}e=$.bM
if(e!=null)e.ih($.Y.j(),$.aK)
e=$.bM
if(e!=null)e.i4($.Y.j(),$.aK,$.hh(),$.dO.j().gbk(),Math.sin(3.141592653589793*$.dO.j().gbk()))
if($.tz!==$.bj.j().a){$.tz=$.bj.j().a
$.qy=$.qy+1}e=$.bM
if(e!=null){d=s
if(typeof d!=="number")return d.lX()
d/=1000
c=$.qy
b=A.a(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.k(A.aw(d,"timeSeconds",null))
if(b<0)A.k(A.w("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bM
if(e!=null){d=$.bj.j()
c=$.qx
a8=d.a
a9=d.ge6()
b0=a9>0?B.d.K(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.ay
b=a8===B.I?0.45:1
if(d>=1)b3=a8===B.P?b0:1
else b3=0
if(d>=2)d=a8===B.aw?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.iv(b,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cz.j().aI(A.pV($.T.j().gdM()))
i=$.bM
if(i!=null){h=i.gkV()
if(h!=null){$.C.j().setAttribute("data-renderer-frame-stats",h)
e=$.C.j()
d=i.gkU()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.d1("running")
e=$.bi.j()
e.e=e.d=0
e.c.H(0)
A.a(A.c(v.G.window).requestAnimationFrame(A.a6(A.u0())))}catch(c1){g=A.ad(c1)
f=A.ce(c1)
A.oV(g,f)}},
xr(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.lo("confirm")
break
case"ambient-winnow":a.dK("winnow",0.28)
break
case"ambient-gate":a.dK("gate",0.22)
break
case"clock:tick":A.qu(a,p,"tick")
break
case"clock:chime":A.qu(a,p,"chime")
break
default:if(B.b.Z(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.qu(a,q,s[2])}}}},
qu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=$.tu,h=$.qn
if(i==null||h==null)return
s=i.kG(b)
r=$.Y.j()
q=h.c
p=s.b
o=r.e.h(0,p)
if(o==null)A.k(A.l("sound room missing: "+p))
n=o.d.U(0,s.d.X(0,q))
m=$.ot
if(m==null){r=s.f.h(0,c)
if(r==null)r=A.k(A.l("sound emitter "+s.a+" has no cue for "+c))
a.lp(r,n,s.e,p)
return}r=b+":"+c
q=$.tj
$.tj=q+1
p=A.uJ(B.cj,r,r+":"+q,n,A.xg(b,c),q,p)
q=$.aK
q=A.uF($.hh(),q)
r=p.d
l=m.a.e
if(l.h(0,r)==null)A.k(A.l("audio source room missing: "+r))
q=q.a
if(l.h(0,q)==null)A.k(A.l("audio listener room missing: "+q))
k=m.hR(r,q)
q=p.c
j=m.c.a.h(0,q)
if(j==null)A.k(A.l("audio cue family missing: "+q))
l=J.av(j)
l=l.h(j,B.c.W(A.yd(q,p.f),l.gq(j)))
p=p.e
A.am(k.a,t.N)
a.hI(l,new A.b(p.a,p.b,p.c),s.e,1,r,k.c,k.b)},
xg(a,b){var s,r,q,p=$.T.j().b
for(s=new A.d7(a+":"+b),r=t.gS,s=new A.bq(s,s.gq(0),r.i("bq<J.E>")),r=r.i("J.E");s.m();){q=s.d
p=A.tZ(p,q==null?r.a(q):q)}return p},
yn(a){var s=$.qm
if(s==null)return
s.textContent=""+B.d.aB(a>0?1/a:0)+" fps"},
yl(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.tM||$.aJ!=null||$.aA.j().Q){$.k2().a=new A.b(0,0,0)
return}s=$.bi.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga5():p
n=$.bi.j().d
m=$.bi.j().e
$.bN=$.bN+n*0.0028
s=$.dP-m*0.0028
$.dP=s
$.dP=B.d.K(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.bN)+l*Math.sin($.bN),0,l*Math.cos($.bN)-s*Math.sin($.bN)).ga5().X(0,2)
s=$.k2()
if(!isFinite(a1)||a1<0)A.k(A.aw(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.aw(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.U(0,k.a9(0,i).X(0,1-l))
s.a=l
h=$.ha.j().ld($.Y.j(),$.aK,$.eO(),l.X(0,a1))
$.qD=h.a
if($.bj.j().a!==B.az&&$.bj.j().a!==B.I)$.aK=h.b
$.bK.j().dI($.eO(),$.bN,$.dP)
s=$.bK.j()
l=$.Y.j()
g=A.z9(s,$.aK,l)
$.td.j().ij(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.qP($.bK.j(),$.Y.j(),$.aK)
break
case 1:e=A.u4($.bK.j(),$.Y.j(),$.aK)
break
case 2:d=A.u5($.bK.j(),$.Y.j(),$.aK)
break
case 3:break}s=$.tb.j()
c=$.k3().hY($.T.j().gam().a)
l=c==null?a0:c.h(0,"status")
s.dU(l,$.aK==="living-room")
if($.bi.j().c.ah(0,"KeyE")){s=$.T.j().gam()
l=e==null
i=l?a0:e.a
b=B.a.a3($.aI.j().f7(21),$.aI.j().gl2())
if(s.a===21&&i==="front-door"&&b){s=$.bj.j()
$.Y.j()
s.iu(B.cE,A.am(s.c,t.N))
B.a.k($.cb,"collapse")
A.eI("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.T.j().is(1,1)){f.d=!0
s=$.eA.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.bA
if(s!=null)s.b6()}else if(d!=null)if(d.w){s=$.T.j()
if(s.f.cz(1))d.w=!1}else d.w=!0}s=$.eA.j()
if(s.a!=null&&s.b>0){a=$.eA.j().a
if(a!=null&&A.qP($.bK.j(),$.Y.j(),$.aK)!==a){s=$.eA.j()
s.a=null
s.b=0}}},
yq(){var s,r,q,p,o,n,m,l,k,j=null
if($.aA.j().Q||$.aJ!=null||$.aI.j().e!=null)return
s=$.T.j().gam()
for(r=$.aI.j().f7(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o){n=r[o]
m=$.aI.b
if(m===$.aI)A.k(A.a_(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aI.b
if(r===$.aI)A.k(A.a_(""))
l=r.kg(n)
if(!(l instanceof A.j_))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.rc(A.c(v.G.document),"exitPointerLock",j,j,j,j)
$.k2().a=new A.b(0,0,0)
r=$.aA.b
if(r===$.aA)A.k(A.a_(""))
r.e4(n.a,k)
return}},
y4(){var s=$.aI.j().e,r=s==null,q=r?null:s.gc5()
if(r||q==null)return
$.aA.j().e4(s.a.a,q)
if(s.d!==B.J){$.aA.j().cv(q)
A.qC()}A.eI("restored visitor")},
ym(){var s,r,q,p,o=$.T.j().gam(),n=$.jL.j().kE(o.a,o.b)
if(n.length===0)return
s=B.a.gao(n)
$.jL.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.qe.j().e3(q,s.e)
p=A.yw(r)
if(p!=null)B.a.k($.cb,"ambient-"+p)},
yp(){var s,r,q,p,o=$.T.j().gam()
if(o.b<20)return
s=o.a
if(!$.p_.k(0,s))return
r=$.k3().f
r===$&&A.i()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.ax(q,!0,t.N):B.m
p=A.z7(r,$.T.j().b,s)
if(p!=null)$.qe.j().e3("noticed",p)},
tJ(a){var s,r,q,p,o
if($.ql!=null)return
s=$.T.j().gam()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("aE<2>")
o=A.vb(new A.kZ(s.a,1-r,new A.R(new A.aE(q,p),p.i("t(n.E)").a(new A.oW()),p.i("R<n.E>")).gq(0),$.T.j().r.d,a))
if(o==null)return
A.tF(o)
A.qB("ending recorded")},
tF(a){var s,r,q
$.ql=a
$.tM=!0
$.k2().a=new A.b(0,0,0)
$.aJ=$.qf.j()
s=$.qf.j()
r=$.k3().w
r===$&&A.i()
q=r.h(0,a.a.b)
s.il(a,t.j.b(q)?A.ax(q,!0,t.N):B.m)},
xl(a){var s,r,q,p,o
A:{if("open"===a){s=B.V
break A}if("chain"===a){s=B.aX
break A}if("through-door"===a){s=B.aY
break A}if("letterbox"===a){s=B.aZ
break A}s=B.K
break A}r=$.aI.j().kq(s)
if(s===B.V){q=$.Y.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.bA
if(p!=null)p.b6()}}if(!(r instanceof A.iZ)||s===B.K){$.aA.j().cg()
$.bi.j().aF($.C.j())
return}o=r.a.gc5()
if(o==null){A.qj()
$.aA.j().cg()
$.bi.j().aF($.C.j())
return}$.aA.j().cv(o)
A.qC()},
xo(){var s,r=$.aI.j().kc()
if(!(r instanceof A.fA)||r.b){A.qj()
$.aA.j().cg()
$.bi.j().aF($.C.j())
return}s=r.a.gc5()
if(s==null){A.qj()
$.aA.j().cg()
$.bi.j().aF($.C.j())
return}$.aA.j().cv(s)
A.qC()},
qC(){var s,r,q,p,o=$.aA.j(),n=A.c(v.G.document),m=A.f([],t.fR)
for(s=$.jN.j().e0(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
m.push(new A.bx(p.a,B.a.gN(p.c).n(0)))}o.ik(n,m)},
xm(a){var s,r,q,p=$.aI.j().kr(a,!0,$.jN.j())
if(p==null)return
s=$.jN.j().ky(p,B.e1)
r=$.aA.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.i()
r.textContent=q},
qj(){var s,r=$.Y.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.bA
if(s!=null)s.b6()}},
yo(){var s,r,q,p,o,n,m,l,k
for(s=$.Y.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bj.b
if(k===$.bj)A.k(A.a_(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fU:function fU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.cx=_.CW=null
_.cy=l
_.db=m
_.dx=n
_.dy=o
_.fr=p
_.go=_.fy=_.fx=null
_.id=q
_.k1=r
_.k2=null
_.p2=_.p1=_.ok=_.k4=_.k3=0
_.p3=!1
_.p4=null
_.R8=0},
ob:function ob(a){this.a=a},
oc:function oc(a){this.a=a},
er:function er(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ph:function ph(a){this.a=a},
pi:function pi(){},
pj:function pj(){},
pq:function pq(){},
pr:function pr(){},
ps:function ps(){},
pt:function pt(){},
pu:function pu(){},
pv:function pv(){},
pw:function pw(){},
px:function px(){},
pk:function pk(){},
pl:function pl(){},
pm:function pm(){},
pn:function pn(){},
po:function po(){},
pp:function pp(){},
oR:function oR(){},
oS:function oS(){},
oY:function oY(a){this.a=a},
oW:function oW(){},
rc(a,b,c,d,e,f){var s=a[b]()
return s},
rd(a,b,c){var s=null
return c.a(A.rc(a,b,s,s,s,s))},
uZ(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
uY(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
u_(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
pB(a,b){var s=B.d.aE(a),r=A.u_(s,b),q=A.u_(s+1,b),p=B.d.K(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
tZ(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
yw(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
zi(a){var s,r,q,p,o,n,m,l
a.E()
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
return new A.bU(B.T,p,new Uint16Array(A.a3(a.b)),new A.hj(new A.z(s.a,s.b,s.c),new A.z(s.d,s.e,s.f)))},
yJ(a){var s,r,q,p,o,n,m,l=B.p.bs(a,null),k=t.f
if(!k.b(l))throw A.d(B.dp)
s=t.N
r=t.z
q=A.aX(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.eg[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.x(s,r))
else if(k.b(m))p.l(0,n,A.aX(m,s,r))
else throw A.d(A.ae('text.json section "'+n+'" must be an object',null,null))}return p},
z7(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbi(a)
s=new A.es()
s.cA((b^274953^c)>>>0)
r=s.ap(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.pL.prototype={}
J.i3.prototype={
V(a,b){return a===b},
gG(a){return A.fl(a)},
n(a){return"Instance of '"+A.ix(a)+"'"},
gP(a){return A.cd(A.qp(this))}}
J.i7.prototype={
n(a){return String(a)},
gG(a){return a?519018:218159},
gP(a){return A.cd(t.y)},
$ia1:1,
$it:1}
J.f6.prototype={
V(a,b){return null==b},
n(a){return"null"},
gG(a){return 0},
$ia1:1,
$iak:1}
J.f7.prototype={$iZ:1}
J.cJ.prototype={
gG(a){return 0},
gP(a){return B.fX},
n(a){return String(a)}}
J.is.prototype={}
J.dz.prototype={}
J.cm.prototype={
n(a){var s=a[$.ub()]
if(s==null)s=a[$.eN()]
if(s==null)return this.iw(a)
return"JavaScript function for "+J.dW(s)},
$idd:1}
J.ed.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.ee.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.r.prototype={
c3(a,b){return new A.bS(a,A.K(a).i("@<1>").D(b).i("bS<1,2>"))},
k(a,b){A.K(a).c.a(b)
a.$flags&1&&A.b6(a,29)
a.push(b)},
lx(a,b){var s
a.$flags&1&&A.b6(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.rt(b,null))
return a.splice(b,1)[0]},
ah(a,b){var s
a.$flags&1&&A.b6(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.K(a).i("n<1>").a(b)
a.$flags&1&&A.b6(a,"addAll",2)
if(Array.isArray(b)){this.iR(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gp())},
iR(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ap(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.b6(a,"clear","clear")
a.length=0},
bG(a,b,c){var s=A.K(a)
return new A.S(a,s.D(c).i("1(2)").a(b),s.i("@<1>").D(c).i("S<1,2>"))},
aZ(a,b){var s,r=A.c1(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.q(a[s]))
return r.join(b)},
bA(a,b,c,d){var s,r,q
d.a(b)
A.K(a).D(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ap(a))}return r},
cf(a,b,c){var s,r,q,p=A.K(a)
p.i("t(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.ap(a))}p=c.$0()
return p},
T(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
gao(a){if(a.length>0)return a[0]
throw A.d(A.i4())},
gN(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.i4())},
gbi(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.d(A.i4())
throw A.d(A.vv())},
R(a,b){var s,r
A.K(a).i("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.ap(a))}return!1},
a3(a,b){var s,r
A.K(a).i("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.ap(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.K(a)
n.i("j(1,1)?").a(b)
a.$flags&2&&A.b6(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.xK()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a8()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eL(b,2))
if(p>0)this.jM(a,p)},
a0(a){return this.Y(a,null)},
jM(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cw(a,b){var s,r,q,p
a.$flags&2&&A.b6(a,"shuffle")
s=a.length
while(s>1){r=b.ap(s);--s
q=a.length
if(!(s<q))return A.e(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.e(a,r)
a[s]=a[r]
a[r]=p}},
ci(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.e(a,s)
if(J.a9(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gI(a){return a.length===0},
gM(a){return a.length!==0},
n(a){return A.pK(a,"[","]")},
gt(a){return new J.d4(a,a.length,A.K(a).i("d4<1>"))},
gG(a){return A.fl(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.b6(a,"set length","change the length of")
if(b<0)throw A.d(A.aR(b,0,null,"newLength",null))
if(b>a.length)A.K(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.p7(a,b))
return a[b]},
l(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.b6(a)
if(!(b>=0&&b<a.length))throw A.d(A.p7(a,b))
a[b]=c},
dZ(a,b){return new A.bY(a,b.i("bY<0>"))},
hw(a,b){var s
A.K(a).i("t(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gP(a){return A.cd(A.K(a))},
$iF:1,
$in:1,
$iE:1}
J.i5.prototype={
lN(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ix(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.lW.prototype={}
J.d4.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.p(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iaf:1}
J.dj.prototype={
F(a,b){var s
A.b0(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gck(b)
if(this.gck(a)===s)return 0
if(this.gck(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gck(a){return a===0?1/a<0:a<0},
aN(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.ay(""+a+".toInt()"))},
kn(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.ay(""+a+".ceil()"))},
aE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.ay(""+a+".floor()"))},
aB(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.ay(""+a+".round()"))},
K(a,b,c){if(this.F(b,c)>0)throw A.d(A.qI(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
cp(a,b){var s
if(b>20)throw A.d(A.aR(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gck(a))return"-"+s
return s},
lM(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aR(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.ay("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.e(p,1)
s=p[1]
if(3>=r)return A.e(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.X("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
W(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
iy(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eY(a,b)},
L(a,b){return(a|0)===a?a/b|0:this.eY(a,b)},
eY(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.ay("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cU(a,b){var s
if(a>0)s=this.bZ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jR(a,b){if(0>b)throw A.d(A.qI(b))
return this.bZ(a,b)},
bZ(a,b){return b>31?0:a>>>b},
gP(a){return A.cd(t.o)},
$iaD:1,
$iv:1,
$iaN:1}
J.f5.prototype={
gP(a){return A.cd(t.S)},
$ia1:1,
$ij:1}
J.i8.prototype={
gP(a){return A.cd(t.i)},
$ia1:1}
J.dk.prototype={
bf(a,b,c,d){var s=A.fm(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a1(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aR(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
Z(a,b){return this.a1(a,b,0)},
B(a,b,c){return a.substring(b,A.fm(b,c,a.length))},
bM(a,b){return this.B(a,b,null)},
dT(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.vz(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.vA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
X(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.cA)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ln(a,b,c){var s=b-a.length
if(s<=0)return a
return this.X(c,s)+a},
cj(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aR(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ci(a,b){return this.cj(a,b,0)},
v(a,b){return A.ze(a,b,0)},
F(a,b){var s
A.D(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
n(a){return a},
gG(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gP(a){return A.cd(t.N)},
gq(a){return a.length},
$ia1:1,
$iaD:1,
$irn:1,
$im:1}
A.cV.prototype={
gt(a){return new A.eR(J.O(this.gaR()),A.o(this).i("eR<1,2>"))},
gq(a){return J.aW(this.gaR())},
gI(a){return J.qU(this.gaR())},
gM(a){return J.uB(this.gaR())},
T(a,b){return A.o(this).y[1].a(J.k4(this.gaR(),b))},
n(a){return J.dW(this.gaR())}}
A.eR.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iaf:1}
A.d6.prototype={
gaR(){return this.a}}
A.fJ.prototype={$iF:1}
A.fH.prototype={
h(a,b){return this.$ti.y[1].a(J.aV(this.a,b))},
l(a,b,c){var s=this.$ti
J.bP(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.uC(this.a,b)},
k(a,b){var s=this.$ti
J.hi(this.a,s.c.a(s.y[1].a(b)))},
Y(a,b){var s
this.$ti.i("j(2,2)?").a(b)
s=b==null?null:new A.nS(this,b)
J.uD(this.a,s)},
$iF:1,
$iE:1}
A.nS.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("j(1,1)")}}
A.bS.prototype={
c3(a,b){return new A.bS(this.a,this.$ti.i("@<1>").D(b).i("bS<1,2>"))},
gaR(){return this.a}}
A.dl.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.d7.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.n6.prototype={}
A.F.prototype={}
A.a2.prototype={
gt(a){var s=this
return new A.bq(s,s.gq(s),A.o(s).i("bq<a2.E>"))},
gI(a){return this.gq(this)===0},
R(a,b){var s,r,q=this
A.o(q).i("t(a2.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gq(q))throw A.d(A.ap(q))}return!1},
aZ(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.T(0,0))
if(o!==p.gq(p))throw A.d(A.ap(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.T(0,q))
if(o!==p.gq(p))throw A.d(A.ap(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.T(0,q))
if(o!==p.gq(p))throw A.d(A.ap(p))}return r.charCodeAt(0)==0?r:r}},
dY(a,b){return this.iv(0,A.o(this).i("t(a2.E)").a(b))},
bG(a,b,c){var s=A.o(this)
return new A.S(this,s.D(c).i("1(a2.E)").a(b),s.i("@<a2.E>").D(c).i("S<1,2>"))},
bh(a,b){var s=A.o(this).i("a2.E")
if(b)s=A.L(this,s)
else{s=A.L(this,s)
s.$flags=1
s=s}return s},
bg(a){return this.bh(0,!0)},
b0(a){var s,r=this,q=A.pO(A.o(r).i("a2.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.T(0,s))
return q}}
A.fw.prototype={
gje(){var s=J.aW(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjU(){var s=J.aW(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aW(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
T(a,b){var s=this,r=s.gjU()+b
if(b<0||r>=s.gje())throw A.d(A.lR(b,s.gq(0),s,"index"))
return J.k4(s.a,r)},
bh(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.av(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.rb(0,n):J.ra(0,n)}r=A.c1(s,m.T(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.T(n,o+q))
if(m.gq(n)<l)throw A.d(A.ap(p))}return r},
bg(a){return this.bh(0,!0)}}
A.bq.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.av(q),o=p.gq(q)
if(r.b!==o)throw A.d(A.ap(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iaf:1}
A.cn.prototype={
gt(a){return new A.dn(J.O(this.a),this.b,A.o(this).i("dn<1,2>"))},
gq(a){return J.aW(this.a)},
gI(a){return J.qU(this.a)},
T(a,b){return this.b.$1(J.k4(this.a,b))}}
A.da.prototype={$iF:1}
A.dn.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iaf:1}
A.S.prototype={
gq(a){return J.aW(this.a)},
T(a,b){return this.b.$1(J.k4(this.a,b))}}
A.R.prototype={
gt(a){return new A.M(J.O(this.a),this.b,this.$ti.i("M<1>"))}}
A.M.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iaf:1}
A.bY.prototype={
gt(a){return new A.fC(J.O(this.a),this.$ti.i("fC<1>"))}}
A.fC.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iaf:1}
A.ag.prototype={
sq(a,b){throw A.d(A.ay("Cannot change the length of a fixed-length list"))},
k(a,b){A.bk(a).i("ag.E").a(b)
throw A.d(A.ay("Cannot add to a fixed-length list"))}}
A.c7.prototype={
l(a,b,c){A.o(this).i("c7.E").a(c)
throw A.d(A.ay("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.d(A.ay("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).i("c7.E").a(b)
throw A.d(A.ay("Cannot add to an unmodifiable list"))},
Y(a,b){A.o(this).i("j(c7.E,c7.E)?").a(b)
throw A.d(A.ay("Cannot modify an unmodifiable list"))}}
A.ep.prototype={}
A.fr.prototype={
gq(a){return J.aW(this.a)},
T(a,b){var s=this.a,r=J.av(s)
return r.T(s,r.gq(s)-1-b)}}
A.h9.prototype={}
A.bx.prototype={$r:"+(1,2)",$s:1}
A.az.prototype={$r:"+(1,2,3)",$s:2}
A.fV.prototype={$r:"+(1,2,3,4)",$s:3}
A.eT.prototype={}
A.e4.prototype={
gI(a){return this.gq(this)===0},
gM(a){return this.gq(this)!==0},
n(a){return A.pQ(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.uU()},
gO(){return new A.ca(this.kJ(),A.o(this).i("ca<P<1,2>>"))},
kJ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gS(),o=o.gt(o),n=A.o(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bc(a,b,c,d){var s=A.x(c,d)
this.ae(0,new A.kN(this,A.o(this).D(c).D(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iW:1}
A.kN.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gq(a){return this.b.length},
geA(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a2(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a2(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geA()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gS(){return new A.dJ(this.geA(),this.$ti.i("dJ<1>"))},
gal(){return new A.dJ(this.b,this.$ti.i("dJ<2>"))}}
A.dJ.prototype={
gq(a){return this.a.length},
gI(a){return 0===this.a.length},
gM(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.dK(s,s.length,this.$ti.i("dK<1>"))}}
A.dK.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iaf:1}
A.f_.prototype={
bm(){var s=this,r=s.$map
if(r==null){r=new A.f8(s.$ti.i("f8<1,2>"))
A.tV(s.a,r)
s.$map=r}return r},
h(a,b){return this.bm().h(0,b)},
ae(a,b){this.$ti.i("~(1,2)").a(b)
this.bm().ae(0,b)},
gS(){var s=this.bm()
return new A.ah(s,A.o(s).i("ah<1>"))},
gal(){var s=this.bm()
return new A.aE(s,A.o(s).i("aE<2>"))},
gq(a){return this.bm().a}}
A.eU.prototype={
k(a,b){A.o(this).c.a(b)
A.uV()}}
A.ch.prototype={
gq(a){return this.b},
gI(a){return this.b===0},
gM(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dK(s,s.length,r.$ti.i("dK<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b0(a){return A.pP(this,this.$ti.c)}}
A.mA.prototype={
$0(){return B.d.aE(1000*this.a.now())},
$S:18}
A.fs.prototype={}
A.nt.prototype={
az(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.fh.prototype={
n(a){return"Null check operator used on a null value"}}
A.i9.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iS.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mo.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eY.prototype={}
A.fX.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ic6:1}
A.cE.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ua(r==null?"unknown":r)+"'"},
gP(a){var s=A.qK(this)
return A.cd(s==null?A.bk(this):s)},
$idd:1,
glW(){return this},
$C:"$1",
$R:1,
$D:null}
A.hx.prototype={$C:"$0",$R:0}
A.hy.prototype={$C:"$2",$R:2}
A.iO.prototype={}
A.iL.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ua(s)+"'"}}
A.e1.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.e1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gG(a){return(A.k0(this.a)^A.fl(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ix(this.a)+"'")}}
A.iE.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bE.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
gS(){return new A.ah(this,A.o(this).i("ah<1>"))},
gal(){return new A.aE(this,A.o(this).i("aE<2>"))},
gO(){return new A.U(this,A.o(this).i("U<1,2>"))},
a2(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kY(a)},
kY(a){var s=this.d
if(s==null)return!1
return this.bC(s[this.bB(a)],a)>=0},
J(a,b){A.o(this).i("W<1,2>").a(b).ae(0,new A.m4(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.kZ(b)},
kZ(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bB(a)]
r=this.bC(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e9(s==null?q.b=q.cP():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e9(r==null?q.c=q.cP():r,b,c)}else q.l0(b,c)},
l0(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cP()
r=o.bB(a)
q=s[r]
if(q==null)s[r]=[o.cQ(a,b)]
else{p=o.bC(q,a)
if(p>=0)q[p].b=b
else q.push(o.cQ(a,b))}},
lr(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a2(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
ah(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.jL(this.c,b)
else return this.l_(b)},
l_(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bB(a)
r=n[s]
q=o.bC(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f4(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cB()}},
ae(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ap(q))
s=s.c}},
e9(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cQ(b,c)
else s.b=c},
jL(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f4(s)
delete a[b]
return s.b},
cB(){this.r=this.r+1&1073741823},
cQ(a,b){var s=this,r=A.o(s),q=new A.mc(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cB()
return q},
f4(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cB()},
bB(a){return J.bl(a)&1073741823},
bC(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
n(a){return A.pQ(this)},
cP(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ipN:1}
A.m4.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.mc.prototype={}
A.ah.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cK(s,s.r,s.e,this.$ti.i("cK<1>"))}}
A.cK.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iaf:1}
A.aE.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gt(a){var s=this.a
return new A.an(s,s.r,s.e,this.$ti.i("an<1>"))}}
A.an.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iaf:1}
A.U.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gt(a){var s=this.a
return new A.fa(s,s.r,s.e,this.$ti.i("fa<1,2>"))}}
A.fa.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iaf:1}
A.f8.prototype={
bB(a){return A.yE(a)&1073741823},
bC(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.pc.prototype={
$1(a){return this.a(a)},
$S:6}
A.pd.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.pe.prototype={
$1(a){return this.a(A.D(a))},
$S:19}
A.bI.prototype={
gP(a){return A.cd(this.ey())},
ey(){return A.yO(this.$r,this.bT())},
n(a){return this.f1(!1)},
f1(a){var s,r,q,p,o,n=this.ji(),m=this.bT(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.rq(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ji(){var s,r=this.$s
while($.od.length<=r)B.a.k($.od,null)
s=$.od[r]
if(s==null){s=this.j3()
B.a.l($.od,r,s)}return s},
j3(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.i6(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.am(j,k)}}
A.et.prototype={
bT(){return[this.a,this.b]},
V(a,b){if(b==null)return!1
return b instanceof A.et&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gG(a){return A.cp(this.$s,this.a,this.b,B.l)}}
A.eu.prototype={
bT(){return[this.a,this.b,this.c]},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.eu&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
gG(a){var s=this
return A.cp(s.$s,s.a,s.b,s.c)}}
A.ev.prototype={
bT(){return this.a},
V(a,b){if(b==null)return!1
return b instanceof A.ev&&this.$s===b.$s&&A.wE(this.a,b.a)},
gG(a){return A.cp(this.$s,A.vJ(this.a),B.l,B.l)}}
A.nT.prototype={
cS(){var s=this.b
if(s===this)throw A.d(new A.dl("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a_(""))
return s}}
A.cM.prototype={
gP(a){return B.fQ},
f8(a,b,c){return new Float32Array(a,b,c)},
$ia1:1,
$icM:1}
A.eg.prototype={$ieg:1}
A.ff.prototype={
gkh(a){if(((a.$flags|0)&2)!==0)return new A.oj(a.buffer)
else return a.buffer},
jo(a,b,c,d){var s=A.aR(b,0,c,d,null)
throw A.d(s)},
eg(a,b,c,d){if(b>>>0!==b||b>c)this.jo(a,b,c,d)}}
A.oj.prototype={
f8(a,b,c){var s=A.vG(this.a,b,c)
s.$flags=3
return s}}
A.ii.prototype={
gP(a){return B.fR},
$ia1:1}
A.aF.prototype={
gq(a){return a.length},
eS(a,b,c,d,e){var s,r,q=a.length
this.eg(a,b,q,"start")
this.eg(a,c,q,"end")
if(b>c)throw A.d(A.aR(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.w(e,null))
r=d.length
if(r-e<s)throw A.d(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibp:1}
A.fd.prototype={
h(a,b){A.cB(b,a,a.length)
return a[b]},
l(a,b,c){A.d0(c)
a.$flags&2&&A.b6(a)
A.cB(b,a,a.length)
a[b]=c},
ic(a,b,c,d){t.id.a(d)
a.$flags&2&&A.b6(a,5)
this.eS(a,b,c,d,0)
return},
$iF:1,
$in:1,
$iE:1}
A.fe.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.b6(a)
A.cB(b,a,a.length)
a[b]=c},
ie(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.b6(a,5)
this.eS(a,b,c,d,e)
return},
$iF:1,
$in:1,
$iE:1}
A.fc.prototype={
gP(a){return B.fS},
b2(a,b,c){return new Float32Array(a.subarray(b,A.xj(b,c,a.length)))},
$ia1:1,
$ila:1}
A.ij.prototype={
gP(a){return B.fT},
$ia1:1}
A.ik.prototype={
gP(a){return B.fU},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1}
A.il.prototype={
gP(a){return B.fV},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1}
A.im.prototype={
gP(a){return B.fW},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1}
A.io.prototype={
gP(a){return B.fZ},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1,
$iq_:1}
A.ip.prototype={
gP(a){return B.h_},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1}
A.dq.prototype={
gP(a){return B.h0},
gq(a){return a.length},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1,
$idq:1}
A.fg.prototype={
gP(a){return B.h1},
gq(a){return a.length},
h(a,b){A.cB(b,a,a.length)
return a[b]},
$ia1:1,
$ifx:1}
A.fQ.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.bV.prototype={
i(a){return A.h1(v.typeUniverse,this,a)},
D(a){return A.t2(v.typeUniverse,this,a)}}
A.jj.prototype={}
A.jH.prototype={
n(a){return A.bB(this.a,null)}}
A.jh.prototype={
n(a){return this.a}}
A.fY.prototype={$ict:1}
A.nP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:20}
A.nO.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:38}
A.nQ.prototype={
$0(){this.a.$0()},
$S:9}
A.nR.prototype={
$0(){this.a.$0()},
$S:9}
A.og.prototype={
iP(a,b){if(self.setTimeout!=null)self.setTimeout(A.eL(new A.oh(this,b),0),a)
else throw A.d(A.ay("`setTimeout()` not found."))}}
A.oh.prototype={
$0(){this.b.$0()},
$S:1}
A.j7.prototype={
cX(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cD(a)
else{s=r.a
if(q.i("bn<1>").b(a))s.ef(a)
else s.bR(a)}},
cY(a,b){var s=this.a
if(this.b)s.aP(new A.aC(a,b))
else s.bN(new A.aC(a,b))}}
A.ou.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.ov.prototype={
$2(a,b){this.a.$2(1,new A.eY(a,t.l.a(b)))},
$S:62}
A.p3.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:66}
A.by.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jN(a,b){var s,r,q
a=A.a(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.jN(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.rY
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
o.a=A.rY
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.l("sync*"))}return!1},
lY(a){var s,r,q=this
if(a instanceof A.ca){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.O(a)
return 2}},
$iaf:1}
A.ca.prototype={
gt(a){return new A.by(this.a(),this.$ti.i("by<1>"))}}
A.aC.prototype={
n(a){return A.q(this.a)},
$ia7:1,
gbj(){return this.b}}
A.lh.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eo(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ad(p)
q=A.ce(p)
l=r
o=q
n=A.qq(l,o)
l=new A.aC(l,o)
m.b.aP(l)
return}m.b.eo(s)}},
$S:1}
A.lk.prototype={
$2(a,b){var s,r,q=this
A.eC(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aP(new A.aC(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aP(new A.aC(r,s))}},
$S:32}
A.lj.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bP(r,k.b,a)
if(J.a9(s,0)){q=A.f([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.p)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hi(q,l)}k.c.bR(q)}}else if(J.a9(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aP(new A.aC(q,o))}},
$S(){return this.d.i("ak(0)")}}
A.jb.prototype={
cY(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.bN(A.xJ(a,b))},
fb(a){return this.cY(a,null)}}
A.fE.prototype={
cX(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.cD(r.i("1/").a(a))}}
A.dF.prototype={
lc(a){if((this.c&15)!==6)return!0
return this.b.b.dR(t.iW.a(this.d),a.a,t.y,t.K)},
kX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.lJ(q,m,a.b,o,n,t.l)
else p=l.dR(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ad(s))){if((r.c&1)!==0)throw A.d(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aj.prototype={
dS(a,b,c){var s,r,q=this.$ti
q.D(c).i("1/(2)").a(a)
s=$.ab
if(s===B.r){if(!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.aw(b,"onError",u.c))}else{c.i("@<0/>").D(q.c).i("1(2)").a(a)
b=A.y2(b,s)}r=new A.aj(s,c.i("aj<0>"))
this.cC(new A.dF(r,3,a,b,q.i("@<1>").D(c).i("dF<1,2>")))
return r},
f0(a,b,c){var s,r=this.$ti
r.D(c).i("1/(2)").a(a)
s=new A.aj($.ab,c.i("aj<0>"))
this.cC(new A.dF(s,19,a,b,r.i("@<1>").D(c).i("dF<1,2>")))
return s},
jQ(a){this.a=this.a&1|16
this.c=a},
bQ(a){this.a=a.a&30|this.a&1
this.c=a.c},
cC(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.e.a(r.c)
if((s.a&24)===0){s.cC(a)
return}r.bQ(s)}A.jW(null,null,r.b,t.M.a(new A.nV(r,a)))}},
eH(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.e.a(m.c)
if((n.a&24)===0){n.eH(a)
return}m.bQ(n)}l.a=m.bX(a)
A.jW(null,null,m.b,t.M.a(new A.o_(l,m)))}},
bo(){var s=t.F.a(this.c)
this.c=null
return this.bX(s)},
bX(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eo(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bn<1>").b(a))A.nY(a,r,!0)
else{s=r.bo()
q.c.a(a)
r.a=8
r.c=a
A.dG(r,s)}},
bR(a){var s,r=this
r.$ti.c.a(a)
s=r.bo()
r.a=8
r.c=a
A.dG(r,s)},
j2(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bo()
q.bQ(a)
A.dG(q,r)},
aP(a){var s=this.bo()
this.jQ(a)
A.dG(this,s)},
cD(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bn<1>").b(a)){this.ef(a)
return}this.iT(a)},
iT(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jW(null,null,s.b,t.M.a(new A.nX(s,a)))},
ef(a){A.nY(this.$ti.i("bn<1>").a(a),this,!1)
return},
bN(a){this.a^=2
A.jW(null,null,this.b,t.M.a(new A.nW(this,a)))},
$ibn:1}
A.nV.prototype={
$0(){A.dG(this.a,this.b)},
$S:1}
A.o_.prototype={
$0(){A.dG(this.b,this.a.a)},
$S:1}
A.nZ.prototype={
$0(){A.nY(this.a.a,this.b,!0)},
$S:1}
A.nX.prototype={
$0(){this.a.bR(this.b)},
$S:1}
A.nW.prototype={
$0(){this.a.aP(this.b)},
$S:1}
A.o2.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.lI(t.mY.a(q.d),t.z)}catch(p){s=A.ad(p)
r=A.ce(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.kg(q)
n=k.a
n.c=new A.aC(q,o)
q=n}q.b=!0
return}if(j instanceof A.aj&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aj){m=k.b.a
l=new A.aj(m.b,m.$ti)
j.dS(new A.o3(l,m),new A.o4(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:1}
A.o3.prototype={
$1(a){this.a.j2(this.b)},
$S:20}
A.o4.prototype={
$2(a,b){A.eC(a)
t.l.a(b)
this.a.aP(new A.aC(a,b))},
$S:33}
A.o1.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dR(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ad(l)
r=A.ce(l)
q=s
p=r
if(p==null)p=A.kg(q)
o=this.a
o.c=new A.aC(q,p)
o.b=!0}},
$S:1}
A.o0.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lc(s)&&p.a.e!=null){p.c=p.a.kX(s)
p.b=!1}}catch(o){r=A.ad(o)
q=A.ce(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.kg(p)
m=l.b
m.c=new A.aC(p,n)
p=m}p.b=!0}},
$S:1}
A.j8.prototype={}
A.jF.prototype={}
A.h8.prototype={$irQ:1}
A.jx.prototype={
lK(a){var s,r,q
t.M.a(a)
try{if(B.r===$.ab){a.$0()
return}A.tK(null,null,this,a,t.H)}catch(q){s=A.ad(q)
r=A.ce(q)
A.qz(A.eC(s),t.l.a(r))}},
fa(a){return new A.oe(this,t.M.a(a))},
lI(a,b){b.i("0()").a(a)
if($.ab===B.r)return a.$0()
return A.tK(null,null,this,a,b)},
dR(a,b,c,d){c.i("@<0>").D(d).i("1(2)").a(a)
d.a(b)
if($.ab===B.r)return a.$1(b)
return A.y7(null,null,this,a,b,c,d)},
lJ(a,b,c,d,e,f){d.i("@<0>").D(e).D(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ab===B.r)return a.$2(b,c)
return A.y6(null,null,this,a,b,c,d,e,f)},
hM(a,b,c,d){return b.i("@<0>").D(c).D(d).i("1(2,3)").a(a)}}
A.oe.prototype={
$0(){return this.a.lK(this.b)},
$S:1}
A.oX.prototype={
$0(){A.vg(this.a,this.b)},
$S:1}
A.fL.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
gS(){return new A.dH(this,this.$ti.i("dH<1>"))},
gal(){var s=this.$ti
return A.id(new A.dH(this,s.i("dH<1>")),new A.o5(this),s.c,s.y[1])},
a2(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.j6(a)},
j6(a){var s=this.d
if(s==null)return!1
return this.aQ(this.ex(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.rS(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.rS(q,b)
return r}else return this.jj(b)},
jj(a){var s,r,q=this.d
if(q==null)return null
s=this.ex(q,a)
r=this.aQ(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ej(s==null?m.b=A.q6():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ej(r==null?m.c=A.q6():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.q6()
p=A.k0(b)&1073741823
o=q[p]
if(o==null){A.q7(q,p,[b,c]);++m.a
m.e=null}else{n=m.aQ(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ae(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ek()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.ap(m))}},
ek(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.c1(i.a,null,!1,t.z)
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
ej(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.q7(a,b,c)},
ex(a,b){return a[A.k0(b)&1073741823]}}
A.o5.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fN.prototype={
aQ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dH.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gM(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.fM(s,s.ek(),this.$ti.i("fM<1>"))}}
A.fM.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.ap(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iaf:1}
A.bH.prototype={
eD(){return new A.bH(A.o(this).i("bH<1>"))},
gt(a){var s=this,r=new A.dL(s,s.r,A.o(s).i("dL<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.q.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.q.a(r[b])!=null}else return this.j5(b)},
j5(a){var s=this.d
if(s==null)return!1
return this.aQ(s[this.cI(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ei(s==null?q.b=A.q8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ei(r==null?q.c=A.q8():r,b)}else return q.iQ(b)},
iQ(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.q8()
r=p.cI(a)
q=s[r]
if(q==null)s[r]=[p.cG(a)]
else{if(p.aQ(q,a)>=0)return!1
q.push(p.cG(a))}return!0},
ah(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.el(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.el(s.c,b)
else return s.jK(b)},
jK(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cI(a)
r=n[s]
q=o.aQ(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.em(p)
return!0},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cO()}},
ei(a,b){A.o(this).c.a(b)
if(t.q.a(a[b])!=null)return!1
a[b]=this.cG(b)
return!0},
el(a,b){var s
if(a==null)return!1
s=t.q.a(a[b])
if(s==null)return!1
this.em(s)
delete a[b]
return!0},
cO(){this.r=this.r+1&1073741823},
cG(a){var s,r=this,q=new A.jo(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cO()
return q},
em(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cO()},
cI(a){return J.bl(a)&1073741823},
aQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
$irk:1}
A.jo.prototype={}
A.dL.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ap(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iaf:1}
A.md.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:37}
A.J.prototype={
gt(a){return new A.bq(a,this.gq(a),A.bk(a).i("bq<J.E>"))},
T(a,b){return this.h(a,b)},
gI(a){return this.gq(a)===0},
gM(a){return!this.gI(a)},
a3(a,b){var s,r
A.bk(a).i("t(J.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.d(A.ap(a))}return!0},
R(a,b){var s,r
A.bk(a).i("t(J.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.d(A.ap(a))}return!1},
dZ(a,b){return new A.bY(a,b.i("bY<0>"))},
bG(a,b,c){var s=A.bk(a)
return new A.S(a,s.D(c).i("1(J.E)").a(b),s.i("@<J.E>").D(c).i("S<1,2>"))},
k(a,b){var s
A.bk(a).i("J.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
c3(a,b){return new A.bS(a,A.bk(a).i("@<J.E>").D(b).i("bS<1,2>"))},
Y(a,b){var s,r=A.bk(a)
r.i("j(J.E,J.E)?").a(b)
s=b==null?A.yD():b
A.iI(a,0,this.gq(a)-1,s,r.i("J.E"))},
kR(a,b,c,d){var s
A.bk(a).i("J.E?").a(d)
A.fm(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.pK(a,"[","]")},
$iF:1,
$in:1,
$iE:1}
A.X.prototype={
ae(a,b){var s,r,q,p=A.o(this)
p.i("~(X.K,X.V)").a(b)
for(s=this.gS(),s=s.gt(s),p=p.i("X.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.gS().bG(0,new A.mf(this),A.o(this).i("P<X.K,X.V>"))},
bc(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).i("P<1,2>(X.K,X.V)").a(b)
s=A.x(c,d)
for(r=this.gS(),r=r.gt(r),n=n.i("X.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
k8(a){var s,r,q
A.o(this).i("n<P<X.K,X.V>>").a(a)
for(s=a.$ti,r=new A.dn(J.O(a.a),a.b,s.i("dn<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gS()
return s.gq(s)},
gI(a){var s=this.gS()
return s.gI(s)},
gM(a){var s=this.gS()
return s.gM(s)},
gal(){return new A.fO(this,A.o(this).i("fO<X.K,X.V>"))},
n(a){return A.pQ(this)},
$iW:1}
A.mf.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("X.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("X.V").a(s)
return new A.P(a,s,r.i("P<X.K,X.V>"))},
$S(){return A.o(this.a).i("P<X.K,X.V>(X.K)")}}
A.mg.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:21}
A.fO.prototype={
gq(a){var s=this.a
return s.gq(s)},
gI(a){var s=this.a
return s.gI(s)},
gM(a){var s=this.a
return s.gM(s)},
gt(a){var s=this.a,r=s.gS()
return new A.fP(r.gt(r),s,this.$ti.i("fP<1,2>"))}}
A.fP.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iaf:1}
A.h2.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.ay("Cannot modify unmodifiable map"))}}
A.ef.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
ae(a,b){this.a.ae(0,A.o(this).i("~(1,2)").a(b))},
gI(a){var s=this.a
return s.gI(s)},
gM(a){var s=this.a
return s.gM(s)},
gq(a){var s=this.a
return s.gq(s)},
gS(){return this.a.gS()},
n(a){return this.a.n(0)},
gal(){return this.a.gal()},
gO(){return this.a.gO()},
bc(a,b,c,d){return this.a.bc(0,A.o(this).D(c).D(d).i("P<1,2>(3,4)").a(b),c,d)},
$iW:1}
A.cS.prototype={}
A.cr.prototype={
gI(a){return this.gq(this)===0},
gM(a){return this.gq(this)!==0},
J(a,b){var s
for(s=J.O(A.o(this).i("n<1>").a(b));s.m();)this.k(0,s.gp())},
d1(a){var s,r,q=this.b0(0)
for(s=this.gt(this);s.m();){r=s.gp()
if(a.v(0,r))q.ah(0,r)}return q},
n(a){return A.pK(this,"{","}")},
a3(a,b){var s
A.o(this).i("t(1)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aZ(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.dW(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.o(this).i("t(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
T(a,b){var s,r
A.iA(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.lR(b,b-r,this,"index"))},
$iF:1,
$in:1,
$icO:1}
A.fW.prototype={
d1(a){var s,r,q,p=this,o=p.eD()
for(s=A.jp(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
b0(a){var s=this.eD()
s.J(0,this)
return s}}
A.jI.prototype={
k(a,b){this.$ti.c.a(b)
return A.wP()}}
A.fy.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.jp(s,s.r,A.o(s).c)},
b0(a){return this.a.b0(0)}}
A.ey.prototype={}
A.h3.prototype={}
A.jm.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jF(b):s}},
gq(a){return this.b==null?this.c.a:this.b3().length},
gI(a){return this.gq(0)===0},
gM(a){return this.gq(0)>0},
gS(){if(this.b==null){var s=this.c
return new A.ah(s,A.o(s).i("ah<1>"))}return new A.jn(this)},
gal(){var s,r=this
if(r.b==null){s=r.c
return new A.aE(s,A.o(s).i("aE<2>"))}return A.id(r.b3(),new A.o7(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.D(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a2(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jY().l(0,b,c)},
a2(a){if(this.b==null)return this.c.a2(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.b3()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ow(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.ap(o))}},
b3(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
jY(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.b3()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
jF(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ow(this.a[a])
return this.b[a]=s}}
A.o7.prototype={
$1(a){return this.a.h(0,A.D(a))},
$S:19}
A.jn.prototype={
gq(a){return this.a.gq(0)},
T(a,b){var s=this.a
if(s.b==null)s=s.gS().T(0,b)
else{s=s.b3()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gS()
s=s.gt(s)}else{s=s.b3()
s=new J.d4(s,s.length,A.K(s).i("d4<1>"))}return s}}
A.om.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.ol.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.hq.prototype={
le(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fm(a4,a5,a2)
s=$.un()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.pb(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.pb(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aT("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ai(j)
g.a+=c
p=k
continue}}throw A.d(A.ae("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.qV(a3,m,a5,n,l,r)
else{b=B.c.W(r-1,4)+1
if(b===1)throw A.d(A.ae(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bf(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.qV(a3,m,a5,n,l,a)
else{b=B.c.W(a,4)
if(b===1)throw A.d(A.ae(a1,a3,a5))
if(b>1)a3=B.b.bf(a3,a5,a5,b===2?"==":"=")}return a3}}
A.kF.prototype={}
A.d8.prototype={}
A.hC.prototype={}
A.hM.prototype={}
A.f9.prototype={
n(a){var s=A.hN(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ib.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.ia.prototype={
bs(a,b){var s=A.y_(a,this.gkA().a)
return s},
ba(a,b){var s=A.wx(a,this.gkH().b,null)
return s},
gkH(){return B.e6},
gkA(){return B.e5}}
A.m6.prototype={}
A.m5.prototype={}
A.o9.prototype={
hW(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ai(92)
s.a+=o
o=A.ai(117)
s.a+=o
o=A.ai(100)
s.a+=o
o=p>>>8&15
o=A.ai(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ai(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ai(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ai(92)
s.a+=o
switch(p){case 8:o=A.ai(98)
s.a+=o
break
case 9:o=A.ai(116)
s.a+=o
break
case 10:o=A.ai(110)
s.a+=o
break
case 12:o=A.ai(102)
s.a+=o
break
case 13:o=A.ai(114)
s.a+=o
break
default:o=A.ai(117)
s.a+=o
o=A.ai(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ai(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ai(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ai(92)
s.a+=o
o=A.ai(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.B(a,r,m)},
cF(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.ib(a,null))}B.a.k(s,a)},
cq(a){var s,r,q,p,o=this
if(o.hV(a))return
o.cF(a)
try{s=o.b.$1(a)
if(!o.hV(s)){q=A.rg(a,null,o.geG())
throw A.d(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.ad(p)
q=A.rg(a,r,o.geG())
throw A.d(q)}},
hV(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hW(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cF(a)
q.lU(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cF(a)
r=q.lV(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return r}else return!1},
lU(a){var s,r,q=this.c
q.a+="["
s=J.av(a)
if(s.gM(a)){this.cq(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cq(s.h(a,r))}}q.a+="]"},
lV(a){var s,r,q,p,o,n,m=this,l={}
if(a.gI(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.c1(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ae(0,new A.oa(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hW(A.D(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.e(r,n)
m.cq(r[n])}p.a+="}"
return!0}}
A.oa.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:21}
A.o8.prototype={
geG(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iW.prototype={}
A.nz.prototype={
kw(a){return new A.ok(this.a).j7(t.J.a(a),0,null,!0)}}
A.ok.prototype={
j7(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.fm(b,c,J.aW(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.x5(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.x4(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cJ(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.x6(o)
l.b=0
throw A.d(A.ae(m,a,p+l.c))}return n},
cJ(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.L(b+c,2)
r=q.cJ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cJ(a,s,c,d)}return q.kz(a,b,c,d)},
kz(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aT(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ai(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ai(h)
e.a+=p
break
case 65:p=A.ai(h)
e.a+=p;--d
break
default:p=A.ai(h)
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
p=A.ai(a[l])
e.a+=p}else{p=A.rA(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ai(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.d9.prototype={
V(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.d9)if(this.a===b.a)s=this.b===b.b
return s},
gG(a){return A.cp(this.a,this.b,B.l,B.l)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.uW(A.vU(s)),q=A.hE(A.vS(s)),p=A.hE(A.vO(s)),o=A.hE(A.vP(s)),n=A.hE(A.vR(s)),m=A.hE(A.vT(s)),l=A.r0(A.vQ(s)),k=s.b,j=k===0?"":A.r0(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaD:1}
A.cG.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.cG&&this.a===b.a},
gG(a){return B.c.gG(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.L(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.L(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.ln(B.c.n(o%1e6),6,"0")},
$iaD:1}
A.jg.prototype={
n(a){return this.A()},
$iH:1}
A.a7.prototype={
gbj(){return A.vN(this)}}
A.hm.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hN(s)
return"Assertion failed"}}
A.ct.prototype={}
A.bR.prototype={
gcL(){return"Invalid argument"+(!this.a?"(s)":"")},
gcK(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcL()+q+o
if(!s.a)return n
return n+s.gcK()+": "+A.hN(s.gdG())},
gdG(){return this.b}}
A.ei.prototype={
gdG(){return A.ti(this.b)},
gcL(){return"RangeError"},
gcK(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.i0.prototype={
gdG(){return A.a(this.b)},
gcL(){return"RangeError"},
gcK(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fz.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iR.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.en.prototype={
n(a){return"Bad state: "+this.a}}
A.hA.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hN(s)+"."}}
A.iq.prototype={
n(a){return"Out of Memory"},
gbj(){return null},
$ia7:1}
A.fu.prototype={
n(a){return"Stack Overflow"},
gbj(){return null},
$ia7:1}
A.nU.prototype={
n(a){return"Exception: "+this.a}}
A.I.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.B(e,0,75)+"..."
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
k=""}return g+l+B.b.B(e,i,j)+k+"\n"+B.b.X(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g}}
A.n.prototype={
c3(a,b){return A.uO(this,A.o(this).i("n.E"),b)},
bG(a,b,c){var s=A.o(this)
return A.id(this,s.D(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dY(a,b){var s=A.o(this)
return new A.R(this,s.i("t(n.E)").a(b),s.i("R<n.E>"))},
dZ(a,b){return new A.bY(this,b.i("bY<0>"))},
bA(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).i("1(1,n.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a3(a,b){var s
A.o(this).i("t(n.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
R(a,b){var s
A.o(this).i("t(n.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bh(a,b){var s=A.L(this,A.o(this).i("n.E"))
return s},
bg(a){return this.bh(0,!0)},
gq(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gI(a){return!this.gt(this).m()},
gM(a){return!this.gI(this)},
gao(a){var s=this.gt(this)
if(!s.m())throw A.d(A.i4())
return s.gp()},
cf(a,b,c){var s,r
A.o(this).i("t(n.E)").a(b)
for(s=this.gt(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.d(A.i4())},
kS(a,b){return this.cf(0,b,null)},
T(a,b){var s,r
A.iA(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.lR(b,b-r,this,"index"))},
n(a){return A.vw(this,"(",")")}}
A.P.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.ak.prototype={
gG(a){return A.B.prototype.gG.call(this,0)},
n(a){return"null"}}
A.B.prototype={$iB:1,
V(a,b){return this===b},
gG(a){return A.fl(this)},
n(a){return"Instance of '"+A.ix(this)+"'"},
gP(a){return A.jZ(this)},
toString(){return this.n(this)}}
A.jG.prototype={
n(a){return""},
$ic6:1}
A.nh.prototype={
gkF(){var s,r=this.b
if(r==null)r=$.mD.$0()
s=r-this.a
if($.qQ()===1e6)return s
return s*1000}}
A.aT.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iw7:1}
A.ny.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.D(b)
s=B.b.ci(b,"=")
if(s===-1){if(b!=="")a.l(0,A.qd(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bM(b,s+1)
p=this.a
a.l(0,A.qd(r,0,r.length,p,!0),A.qd(q,0,q.length,p,!0))}return a},
$S:51}
A.nx.prototype={
$2(a,b){throw A.d(A.ae("Illegal IPv6 address, "+a,this.a,b))},
$S:53}
A.h4.prototype={
gf_(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.q(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gG(a){var s,r=this,q=r.y
if(q===$){s=B.b.gG(r.gf_())
r.y!==$&&A.u9()
r.y=s
q=s}return q},
gbJ(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.rI(s==null?"":s)
r.z!==$&&A.u9()
q=r.z=new A.cS(s,t.ph)}return q},
ghT(){return this.b},
gdF(){var s=this.c
if(s==null)return""
if(B.b.Z(s,"[")&&!B.b.a1(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdL(){var s=this.d
return s==null?A.t3(this.a):s},
gdN(){var s=this.f
return s==null?"":s},
ghs(){var s=this.r
return s==null?"":s},
ght(){return this.c!=null},
ghv(){return this.f!=null},
ghu(){return this.r!=null},
n(a){return this.gf_()},
V(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.ge1())if(p.c!=null===b.ght())if(p.b===b.ghT())if(p.gdF()===b.gdF())if(p.gdL()===b.gdL())if(p.e===b.ghG()){r=p.f
q=r==null
if(!q===b.ghv()){if(q)r=""
if(r===b.gdN()){r=p.r
q=r==null
if(!q===b.ghu()){s=q?"":r
s=s===b.ghs()}}}}return s},
$iiU:1,
ge1(){return this.a},
ghG(){return this.e}}
A.nv.prototype={
ghS(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.b.cj(s,"?",m)
q=s.length
if(r>=0){p=A.h5(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.jc("data","",n,n,A.h5(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jA.prototype={
ght(){return this.c>0},
ghv(){return this.f<this.r},
ghu(){return this.r<this.a.length},
ge1(){var s=this.w
return s==null?this.w=this.j4():s},
j4(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.Z(r.a,"http"))return"http"
if(q===5&&B.b.Z(r.a,"https"))return"https"
if(s&&B.b.Z(r.a,"file"))return"file"
if(q===7&&B.b.Z(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghT(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdF(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdL(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.yX(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.Z(r.a,"http"))return 80
if(s===5&&B.b.Z(r.a,"https"))return 443
return 0},
ghG(){return B.b.B(this.a,this.e,this.f)},
gdN(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghs(){var s=this.r,r=this.a
return s<r.length?B.b.bM(r,s+1):""},
gbJ(){if(this.f>=this.r)return B.bw
return new A.cS(A.rI(this.gdN()),t.ph)},
gG(a){var s=this.x
return s==null?this.x=B.b.gG(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiU:1}
A.jc.prototype={}
A.mn.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pz.prototype={
$1(a){return this.a.cX(this.b.i("0/?").a(a))},
$S:10}
A.pA.prototype={
$1(a){if(a==null)return this.a.fb(new A.mn(a===undefined))
return this.a.fb(a)},
$S:10}
A.p6.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.tC(a))return a
s=this.a
a.toString
if(s.a2(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aR(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dR(!0,"isUtc",t.y)
return new A.d9(r,0,!0)}if(a instanceof RegExp)throw A.d(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aB(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bZ(n),p=s.gt(n);p.m();)m.push(A.cD(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.av(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:59}
A.jl.prototype={
ap(a){if(a<=0||a>4294967296)throw A.d(A.rs(u.w+a))
return Math.random()*a>>>0},
cn(){return Math.random()},
$ipU:1}
A.es.prototype={
cA(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.L(a-s,k)
r=a>>>0
a=B.c.L(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.L(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.L(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.L(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.L(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.L(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aJ()
l.aJ()
l.aJ()
l.aJ()},
aJ(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.L(o-n+(q-p)+(m-r),4294967296)>>>0},
ap(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.rs(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aJ()
return(p.a&s)>>>0}do{p.aJ()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cn(){var s,r=this
r.aJ()
s=r.a
r.aJ()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ipU:1}
A.mG.prototype={
E(){var s=this
if(B.a.R(A.f([s.d,s.e,s.f,s.r,s.w],t.t),new A.mH()))throw A.d(B.dx)}}
A.mH.prototype={
$1(a){return A.a(a)<=0},
$S:23}
A.dt.prototype={
A(){return"QualityProfileKind."+this.b}}
A.ds.prototype={}
A.kL.prototype={}
A.kM.prototype={}
A.iv.prototype={
E(){var s,r,q,p,o=this
for(s=A.V(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.U(s,A.o(s).i("U<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.d(A.w("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.d(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.e2.prototype={}
A.hQ.prototype={
E(){var s,r,q,p,o,n,m=this,l=null
if(!B.bg.ga4(0)||!m.b.ga4(0)||!m.r.ga4(0))throw A.d(A.w("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.d(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga4(0)||r.gbD()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
s=s.c
if(!isFinite(s))A.k(A.w("DirectionalLight.intensity must be >= 0: "+s,l))}for(s=m.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.w("PointLight.position must be finite: "+o.n(0),l))
o=p.d
if(!isFinite(o)||o<0)A.k(A.w("PointLight.intensity must be >= 0: "+A.q(o),l))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.w("PointLight.radius must be > 0: "+A.q(o),l))}for(s=isFinite(0),r=isFinite(1),o=isFinite(-1),q=0;!1;++q){if(s)n=r
else n=!1
if(!n)A.k(A.w("SpotLight.position must be finite: "+B.F.n(0),l))
if(s)n=o
else n=!1
if(!n)A.k(A.w("SpotLight.direction must be finite and nonzero: "+B.a5.n(0),l))}}}
A.lc.prototype={}
A.cq.prototype={
V(a,b){if(b==null)return!1
return J.dU(b)===A.jZ(this)&&b instanceof A.cq&&this.a===b.a&&this.b===b.b},
gG(a){return A.cp(A.jZ(this),this.a,this.b,B.l)}}
A.b9.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bs.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c2.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ir.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.ck.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.dh.prototype={
A(){return"HandleRejection."+this.b}}
A.ls.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.dm.prototype={
ga4(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
V(a,b){if(b==null)return!1
return b instanceof A.dm&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.cp(this.a,this.b,this.c,B.l)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.kS.prototype={}
A.iu.prototype={}
A.em.prototype={}
A.hl.prototype={
A(){return"AlphaMode."+this.b}}
A.cL.prototype={
E(){var s=null
if(this.a.length===0)throw A.d(A.w("MaterialDefinition.key must not be empty",s))
if(!isFinite(0))throw A.d(A.w(u.i,s))
if(this.w===0||this.x===0)throw A.d(A.w(u.p,s))
if(!isFinite(0.5))throw A.d(A.w(u.n,s))}}
A.cv.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.cw.prototype={}
A.nA.prototype={
E(){var s,r,q,p
for(s=0;s<6;++s){r=B.ao[s]
q=r.b
p=q+r.c
if(p>14)throw A.d(A.w('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bU.prototype={
E(){var s,r,q,p,o,n=this
n.a.E()
s=n.b.length
if(B.c.W(s,14)!==0)throw A.d(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.d(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga4(0)&&s.b.ga4(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.w("MeshData.localBounds must be a valid AABB",null))}}
A.mp.prototype={
E(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.d(A.w("resource plan must contain sceneColor and present",null))
if(s.R(0,new A.mr()))throw A.d(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.d(A.w("resource history does not match vhsOutput ownership",null))}}
A.mr.prototype={
$1(a){return A.D(a).length===0},
$S:4}
A.my.prototype={}
A.iD.prototype={
hx(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.l("resource assembler is initialized"))
a.E()
s.a=a
s.c=1},
bu(){if(this.d)return
this.d=!0
this.a=null}}
A.e5.prototype={
A(){return"DrawMode."+this.b}}
A.hs.prototype={
A(){return"BlendMode."+this.b}}
A.aZ.prototype={}
A.iM.prototype={
E(){var s=this
if(s.a<0||s.b<0)throw A.d(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hz.prototype={
A(){return"ColorEncoding."+this.b}}
A.hI.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.iB.prototype={
E(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.d1(B.fI)
if(o.a!==0)A.k(A.aw(o,r,"contains unknown pipeline features"))
if(q.a===B.aq&&p.gM(p))A.k(A.aw(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dv.prototype={
A(){return"RendererState."+this.b}}
A.le.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.ig.prototype={
lE(a){return this.a.bt(a)}}
A.mi.prototype={
$3(a,b,c){return new A.c2(A.a(a),A.a(b),A.bz(c))},
$S:69}
A.iT.prototype={}
A.mk.prototype={
c_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.rO(d,new A.hT(c.byteLength,B.b7,B.dI))
if(d.b!==B.f)A.k(A.l(e))
s=A.c(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.c9(d)
A.bX(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a5(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ao[m]
k=A.tQ(l.a)
if(!o.k(0,k))continue
j=A.xn(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.rO(d,new A.hT(i.byteLength,B.b7,B.b6))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.c(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iT(b,h,p,d,c.length/14|0)},
lz(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dg(B.am,a))
this.b.bt(a)
return s},
aM(a){var s,r,q=this.c.ah(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.c(q.c.a))
s.deleteBuffer(A.c(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.c(r.a))}this.b.aM(a)},
dQ(){var s,r,q,p
for(s=this.b.bb(),r=s.$ti,s=new A.by(s.a(),r.i("by<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.c_(p.b))}},
gbE(){return this.b.bb().bA(0,0,new A.mm(),t.S)}}
A.ml.prototype={
$3(a,b,c){return new A.b9(A.a(a),A.a(b),A.bz(c))},
$S:79}
A.mm.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:85}
A.cy.prototype={}
A.iP.prototype={
eq(){var s=this.a,r=A.q3(s,B.dL)
A.q4(s,r,0,$.uc())
return r},
lO(a,b){var s,r,q,p=this,o=p.b,n=o.bt(a),m=A.L(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.dV(a,new A.cy(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.q3(p.a,s)
o.l(0,r,q)}A.q4(p.a,q,0,b)},
lC(a){var s,r=this
if(a==null){s=r.d
s===$&&A.i()
return s}r.b.bt(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.i()}return s},
dQ(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.eq()
for(s=i.b.bb(),r=s.$ti,s=new A.by(s.a(),r.i("by<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a3(o,new A.ns()))continue
l=A.q3(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.q4(p,l,k,j)}q.l(0,n.a,l)}},
gbE(){return this.b.bb().bA(0,0,new A.nr(),t.S)}}
A.nq.prototype={
$3(a,b,c){return new A.bs(A.a(a),A.a(b),A.bz(c))},
$S:100}
A.ns.prototype={
$1(a){return t.nh.a(a)==null},
$S:104}
A.nr.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:105}
A.di.prototype={}
A.hO.prototype={
kk(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.R.a(a)
s=new A.mK(A.f([],t.hJ),A.a5(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)r[p].ab(s,b)
o=s.kj(a,!1)
if(o.b.length!==0)return new A.hP(o,B.eu)
q=o.a
n=A.K(q)
m=new A.S(q,n.i("m(1)").a(new A.l8()),n.i("S<1,m>")).b0(0)
l=A.f([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){k=r[p]
for(n=k.aa(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.ga_().a))throw A.d(A.l('RenderFeature "'+k.gaf()+'" created a pass "'+i.ga_().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.Y(l,new A.l9(o))
return new A.hP(o,l)}}
A.l8.prototype={
$1(a){return t.A.a(a).a},
$S:106}
A.l9.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.hw(s,new A.l6(a)),B.a.hw(s,new A.l7(b)))},
$S:31}
A.l6.prototype={
$1(a){return t.A.a(a).a===this.a.ga_().a},
$S:7}
A.l7.prototype={
$1(a){return t.A.a(a).a===this.a.ga_().a},
$S:7}
A.hP.prototype={}
A.e9.prototype={
A(){return"FrameQueueState."+this.b}}
A.ld.prototype={}
A.al.prototype={
gbK(){var s=this.c,r=A.K(s)
return new A.R(s,r.i("t(1)").a(new A.mt()),r.i("R<1>"))},
gcr(){var s=this.c,r=A.K(s)
return new A.R(s,r.i("t(1)").a(new A.mu()),r.i("R<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.mt.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.B},
$S:11}
A.mu.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:11}
A.bT.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bo.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.fq.prototype={
A(){return"ResourceFormat."+this.b}}
A.cj.prototype={
A(){return"GraphStage."+this.b}}
A.aS.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.ej.prototype={
A(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.eS.prototype={}
A.mE.prototype={
ag(a){var s,r,q,p,o,n,m=this
a.E()
s=null
try{r=t.a
s=A.wr(m.a,a.c,r.a(a.d.gS().bg(0)),r.a(a.f),a.b)}catch(q){if(A.ad(q) instanceof A.ft){++m.e
throw q}else throw q}p=new A.eS(s)
r=m.b
o=a.a
n=r.h(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.c(n.b.a))
return p},
ja(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.an(s,s.r,s.e,a.$ti.i("an<1>")),r=this.a.a;s.m();)r.deleteProgram(A.c(s.d.b.a))}}
A.aQ.prototype={
E(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a5(s)
for(q=this.d.gO(),q=q.gt(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.d(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.d(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a5(s)
for(s=this.e.gO(),s=s.gt(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.d(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.d(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.mI.prototype={}
A.aP.prototype={
a7(){var s=this
return A.r2(B.ck,s.f,B.ac,B.ad,!0,!0,!0,!0,s.r,B.ag,B.ah,s.d,s.e,!0,!1,!1)}}
A.mK.prototype={
kj(a,b){var s=this.jZ(t.R.a(a),!1),r=this.a,q=A.K(r)
return new A.mJ(A.am(new A.R(r,q.i("t(1)").a(new A.mO()),q.i("R<1>")),t.A),s)},
jZ(a,b){var s,r,q,p,o,n,m=this
t.R.a(a)
s=A.f([],t.aW)
r=m.a
q=A.K(r)
p=q.i("R<1>")
o=A.L(new A.R(r,q.i("t(1)").a(new A.mN()),p),p.i("n.E"))
m.iV(o,a,s)
m.iZ(o,s)
m.iY(o,!1,s)
n=m.j1(o,s)
m.j_(o,n,s)
m.j0(o,s)
m.iX(o,n,s)
m.iW(o,s)
return s},
iV(a,b,c){var s,r,q,p
t.O.a(a)
t.R.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=B.C.d1(b)
if(p.a!==0)B.a.k(c,new A.bo(B.dV,q.a,"missing capabilities: "+p.aZ(0,", ")))}},
iZ(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbK(),o=J.O(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bo(B.dQ,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
iY(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.p)(p),++m){l=p[m]
if(l.b===B.B)B.a.k(c,new A.bo(B.dT,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
j1(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.b.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
for(o=p.gcr(),n=J.O(o.a),o=new A.M(n,o.b,o.$ti.i("M<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bo(B.dP,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
j_(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbK(),p=J.O(q.a),q=new A.M(p,q.b,q.$ti.i("M<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.B)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bo(B.bc,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.ci(a,m)>s)B.a.k(c,new A.bo(B.bc,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
j0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbK(),o=J.O(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
for(l=q.gcr(),k=J.O(l.a),l=new A.M(k,l.b,l.$ti.i("M<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bo(B.dS,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
iX(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbK(),o=J.O(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcr().kS(0,new A.mM(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bo(B.dR,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
iW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcr(),o=J.O(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.i6(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a5(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbK(),p=J.O(s.a),s=new A.M(p,s.b,s.$ti.i("M<1>"));s.m();){o=p.gp()
if(o.b===B.B)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].k(0,q)}}p=t.y
j=A.c1(s,!1,!1,p)
s=a.length
i=A.c1(s,!1,!1,p)
h=new A.mL(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.k(b,new A.bo(B.dU,a[q].a,"participates in a resource dependency cycle"))}}}}
A.mO.prototype={
$1(a){t.A.a(a)
return A.pT()},
$S:7}
A.mN.prototype={
$1(a){t.A.a(a)
return A.pT()},
$S:7}
A.mM.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:11}
A.mL.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.e(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.e(s,a)
if(s[a])return!1
B.a.l(n,a,!0)
r=o.c
if(!(a<r.length))return A.e(r,a)
r=r[a]
r=A.jp(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:23}
A.mJ.prototype={}
A.dI.prototype={$ibr:1}
A.fn.prototype={
c1(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.ga4(0))A.k(A.w("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.w("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
m=this.a.bt(a.a).d
n=n.ar()
s=m.a
r=s.a
q=s.b
s=s.c
m=m.b
p=m.a
o=m.b
m=m.c
return A.cf(new A.S(A.f([new A.z(r,q,s),new A.z(p,q,s),new A.z(r,o,s),new A.z(p,o,s),new A.z(r,q,m),new A.z(p,q,m),new A.z(r,o,m),new A.z(p,o,m)],t.k),t.pc.a(n.gb1()),t.mz))},
gdH(){return new A.ca(this.l5(),t.fJ)},
l5(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdH(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bb(),n=o.$ti,o=new A.by(o.a(),n.i("by<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.E()
f=k.a(g.a)
m.ak(f)
f=f.a
if(!(f>=0&&f<j.length)){A.e(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ar()
f=f.gb7()
d=A.K(f)
r=5
return a.b=new A.dI(h,g,A.cf(new A.S(f,d.i("z(1)").a(i.gb1()),d.i("S<1,z>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$ivZ:1}
A.mQ.prototype={
$3(a,b,c){return new A.ck(A.a(a),A.a(b),A.bz(c))},
$S:34}
A.oN.prototype={
$1(a){var s=this.a.w.a.lz(a),r=s.b!=null,q=r?s.d:s.e
return new A.fp(s.c,r,q)},
$S:35}
A.oO.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hF(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hF(b)
throw A.d(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.oL.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.oF.prototype={
$0(){return null},
$S:30}
A.oK.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.oB.prototype={
$0(){return this.a.at.a},
$S:39}
A.oC.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.oM.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.oJ.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.oz.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.oA.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.oG.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.oH.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.oI.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.i()
return s},
$S:2}
A.oE.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.oD.prototype={
$0(){return this.a.at.w},
$S:40}
A.of.prototype={}
A.ju.prototype={$ivY:1}
A.ji.prototype={$ivi:1}
A.mZ.prototype={
dP(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.E()
r=s.b.aT(a,b)
s.c.l(0,r.a,s.c_(a))
this.d.k(0,r)
return r},
lw(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.aM(a)
this.d.ah(0,a)},
dO(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.w("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.w(u.i,r))
if(a.w===0||a.x===0)A.k(A.w(u.p,r))
if(!isFinite(0.5))A.k(A.w(u.n,r))
s=this.b.a.aT(a,r)
this.e.k(0,s)
return s},
hN(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.aT(new A.cy(new A.hV(c,b,1,!1,B.Y,B.Y,B.b9),A.c1(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
bu(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.L(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.p)(r),++l){k=r[l]
j=o.ah(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aM(k)}r=i.e
q=A.L(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.p)(q),++l)o.aM(q[l])
q=i.d
p=A.L(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.p)(p),++l)n.aM(p[l])
s.H(0)
r.H(0)
q.H(0)
i.r=!0}}
A.n4.prototype={
gaA(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
hy(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.at)throw A.d(A.l("renderer can only be initialized once"))
a.E()
b.E()
s=m.a
if(s.b===B.M)throw A.d(A.l("renderer device is context lost"))
m.e=B.fB
try{m.r=s.hK()
r=m.b
q=A.mq(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.E()
p.a=a
A.mq(a)
p.d=1
r.b.hx(q)
r=A.vE()
m.w=new A.mZ(A.vF(s),r,A.w9(s),A.a5(t.l0),A.a5(t.fP),A.a5(t.lu))
r=new A.iD()
p=new A.lr(s,r)
q=A.mq(a)
o=p.er(q,a)
r.hx(q)
p.c=new A.iw(new A.my(q),o)
m.x=p
m.y=new A.mE(s,A.x(t.N,t.e3))
m.as=a
A.tp(m)
m.e=B.au}catch(n){s=m.y
if(s!=null){r=s.b
s.ja(new A.aE(r,A.o(r).i("aE<2>")))
r.H(0)}s=m.x
if(s!=null)s.bu()
s=m.w
if(s!=null)s.bu()
m.w=null
m.e=B.at
throw n}return A.pJ(t.H)},
kI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bS()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.d(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.aj)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.nl(j,0,A.dR(k.c,"count",t.S),A.K(j).c).bh(0,!1)
k.b=B.dB
q=i
try{A.xv(a3,r,s)
k=r.gdH()
j=t.p9
h=k.$ti
k=A.L(A.id(k,h.i("aZ(n.E)").a(new A.n5()),h.i("n.E"),j),j)
p=k
J.ux(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.p)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.dg(B.am,h))
j=j.b
d=j.$ti
j.ak(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.L(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.U()
n=j+h}p=s.e
k=J.aW(o)
j=n
h=J.aW(o)
f=a3.w
d=f.a.gbE()
f=f.c.gbE()
c=a3.w
c.a.gbE()
c.c.gbE()
c=a3.w
b=c.a.b
a=b.d
a0=c.b.a
a1=a0.d
c=c.c.b
a2=c.d
b=b.e
a0=a0.e
c=c.e
return new A.le(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
jI(){var s,r,q,p=this
if(p.e!==B.bD)return
if(p.a.b===B.M)throw A.d(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.dQ()
s.c.dQ()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.iw(q.a,s.er(A.mq(r),r))
s=p.y
s.c=null
s.b.H(0)
A.tp(p)
p.e=B.au},
bS(){var s=this.e
if(s!==B.au)throw A.d(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.M){this.e=B.bD
throw A.d(A.l("renderer context lost"))}}}
A.n5.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.ba.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iaD:1}
A.b7.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iaD:1}
A.as.prototype={}
A.pE.prototype={
$2(a,b){var s=t.p
return s.a(a).a.F(0,s.a(b).a)},
$S:42}
A.pF.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.pC.prototype={
$2(a,b){var s=t.d
return s.a(a).a.F(0,s.a(b).a)},
$S:44}
A.pD.prototype={
$1(a){return t.d.a(a).b},
$S:45}
A.kO.prototype={}
A.hj.prototype={
gb7(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.f([new A.z(o,n,p),new A.z(r,n,p),new A.z(o,q,p),new A.z(r,q,p),new A.z(o,n,s),new A.z(r,n,s),new A.z(o,q,s),new A.z(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dr.prototype={}
A.ea.prototype={
A(){return"FrustumTest."+this.b}}
A.lf.prototype={
lL(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b5
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dC:B.dD}}
A.lg.prototype={
$4(a,b,c,d){var s=new A.z(a,b,c),r=new A.dr(s,d),q=Math.sqrt(s.gbD())
if(q<1e-9)s=r
else{s=1/q
s=new A.dr(new A.z(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.co.prototype={
X(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.co(h)},
hP(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.b9.a(a)
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
return h===0||h===1?new A.z(k,j,i):new A.z(k/h,j/h,i/h)},
hE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.k(A.l("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.q(k)+")"))
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
return new A.co(h)},
ga4(a){return B.u.a3(this.a,new A.mh())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.mh.prototype={
$1(a){return isFinite(A.d0(a))},
$S:5}
A.iz.prototype={
n(a){var s=this
return"Quat("+A.q(s.a)+", "+A.q(s.b)+", "+A.q(s.c)+", "+A.q(s.d)+")"}}
A.iQ.prototype={
E(){var s=this.a
if(!s.ga4(0))throw A.d(A.w("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.w("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.d(A.w(u.u,null))},
ar(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.rl(A.f([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.rl(A.f([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
n(a){return"Transform("+this.a.n(0)+", "+this.b.n(0)+", scale=1)"}}
A.z.prototype={
bv(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aS(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.z(s*r-q*p,q*o-n*r,n*p-s*o)},
gbD(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbD())},
ga4(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga5(){var s=this,r=Math.sqrt(s.gbD())
return r<1e-9?B.aK:new A.z(s.a/r,s.b/r,s.c/r)},
V(a,b){if(b==null)return!1
return b instanceof A.z&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.cp(this.a,this.b,this.c,B.l)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fG.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eQ.prototype={
gaf(){return this.f},
ab(a,b){B.a.k(a.a,new A.al(this.f,B.y,A.f([new A.Q(this.x,B.h),new A.Q(this.y,B.j)],t.C)))},
aa(a){var s=this,r=s.a.ag(new A.aQ(s.e,s.b,s.c,B.q,B.bv,B.br)),q=A.c9(s.d),p=t.n,o=s.y,n=s.r===B.ch?new Float32Array(A.a3(A.f([1/o.c,0],p))):new Float32Array(A.a3(A.f([0,1/o.d],p)))
return A.f([new A.j9(new A.aP(s.f,A.f([new A.Q(s.x,B.h),new A.Q(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$iaa:1}
A.j9.prototype={
ac(a){return},
$ia0:1,
ga_(){return this.a}}
A.ht.prototype={
gaf(){return"bloomComposite"},
ab(a,b){B.a.k(a.a,new A.al("bloomComposite",B.y,A.f([B.c2,B.bX,new A.Q($.pG(),B.j)],t.C)))},
aa(a){var s=this,r="bloomComposite",q=s.a.ag(new A.aQ(r,s.b,s.c,B.q,B.eS,B.eE)),p=A.c9(s.d)
return A.f([new A.ja(new A.aP(r,A.f([B.c2,B.bX,new A.Q($.pG(),B.j)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$iaa:1}
A.ja.prototype={
ac(a){return},
$ia0:1,
ga_(){return this.a}}
A.hG.prototype={
gaf(){return"depthPrepass"},
ab(a,b){B.a.k(a.a,new A.al("depthPrepass",B.dN,A.f([B.bY],t.C)))},
aa(a){var s=this,r="depthPrepass",q=s.a.ag(new A.aQ(r,s.b,s.c,B.bu,B.bs,B.ek))
return A.f([new A.jd(new A.aP(r,A.f([B.bY],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iaa:1}
A.jd.prototype={
ac(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bW(b,a.ai("sceneDepth").b)
A.bg(b,g.a.a7())
A.eq(b,B.af,1,0,0,0)
A.cU(b,g.b.b)
A.A(b,"uVertexSnapGrid",new A.G(B.e,c.y))
A.A(b,"uAlbedo",B.E)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=l.a.b
A.A(b,"uViewProjection",new A.G(B.o,new Float32Array(A.a3(d))))
A.A(b,"uModel",new A.G(B.o,new Float32Array(A.a3(k.c.ar().a))))
g.jb(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.l(f))
n.bindVertexArray(A.c(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
jb(a,b,c){var s,r=this.d.$1(b),q=a.a
A.bw(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.G(B.e,0))
A.A(q,"uAffineWarpStrength",new A.G(B.e,0))
s=this.a.a7()
A.bg(q,r.at?s.e_(!1):s)},
$ia0:1,
ga_(){return this.a}}
A.fI.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eV.prototype={
gaf(){return this.f},
ab(a,b){B.a.k(a.a,new A.al(this.f,B.y,A.f([new A.Q(this.w,B.h),new A.Q(this.x,B.j)],t.C)))},
aa(a){var s=this,r=s.a.ag(new A.aQ(s.e,s.b,s.c,B.q,B.bv,B.br)),q=A.c9(s.d),p=t.n,o=s.x,n=s.r===B.ci?new Float32Array(A.a3(A.f([1/o.c,0],p))):new Float32Array(A.a3(A.f([0,1/o.d],p)))
return A.f([new A.je(new A.aP(s.f,A.f([new A.Q(s.w,B.h),new A.Q(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$iaa:1}
A.je.prototype={
ac(a){return},
$ia0:1,
ga_(){return this.a}}
A.hK.prototype={
gaf(){return"dofComposite"},
ab(a,b){B.a.k(a.a,new A.al("dofComposite",B.y,A.f([new A.Q(this.z,B.h),B.c0,B.bV],t.C)))},
aa(a){var s=this,r="dofComposite",q=s.a.ag(new A.aQ(r,s.b,s.c,B.q,B.eR,B.ej)),p=A.c9(s.d)
return A.f([new A.jf(new A.aP(r,A.f([new A.Q(s.z,B.h),B.c0,B.bV],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iaa:1}
A.jf.prototype={
ac(a){var s,r=this,q=a.ai("dofOutput"),p=r.r.$0(),o=a.b.a
A.bW(o,q.b)
A.bg(o,r.a.a7())
A.cU(o,r.b.b)
s=t._
A.bw(o,0,s.a(r.d.$0()))
A.A(o,"uSharp",B.E)
A.bw(o,1,s.a(r.e.$0()))
A.A(o,"uBlurred",B.a4)
A.bw(o,2,s.a(r.f.$0()))
A.A(o,"uSceneDepth",B.cc)
A.A(o,"uNear",new A.G(B.e,p.f))
A.A(o,"uFar",new A.G(B.e,p.r))
A.A(o,"uFocusDistance",new A.G(B.e,r.w))
A.A(o,"uFocusRange",new A.G(B.e,r.x))
A.A(o,"uStrength",new A.G(B.e,0))
A.bX(o,r.c)
A.dC(o,3,0)},
$ia0:1,
ga_(){return this.a}}
A.hY.prototype={
gaf(){return"grade"},
ab(a,b){B.a.k(a.a,new A.al("grade",B.y,A.f([new A.Q(this.r,B.h),B.bT],t.C)))},
aa(a){var s=this,r=s.a.ag(new A.aQ("grade",s.b,s.c,B.q,B.eP,B.eF)),q=A.c9(s.d),p=s.r
return A.f([new A.jk(new A.aP("grade",A.f([new A.Q(p,B.h),B.bT],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$iaa:1}
A.jk.prototype={
ac(a){var s=this,r=a.ai(s.f.a),q=a.b.a
A.bW(q,a.ai("gradeOutput").b)
A.bg(q,s.a.a7())
A.cU(q,s.b.b)
A.bw(q,0,r.b)
A.A(q,"uScene",B.E)
A.bw(q,1,t._.a(s.d.$0()))
A.A(q,"uLut",B.a4)
A.A(q,"uLutSize",new A.G(B.e,s.e))
A.A(q,"uStrength",new A.G(B.e,a.c.e.w))
A.bX(q,s.c)
A.dC(q,3,0)},
$ia0:1,
ga_(){return this.a}}
A.hv.prototype={}
A.hu.prototype={
ai(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$ivX:1}
A.fk.prototype={
gaf(){return"present"},
ab(a,b){B.a.k(a.a,new A.al("present",B.dO,A.f([new A.Q(this.f,B.h)],t.C)))},
aa(a){var s=this,r=s.a.ag(new A.aQ("present",s.b,s.c,B.q,B.eY,B.m)),q=A.c9(s.d),p=s.f
return A.f([new A.jv(new A.aP("present",A.f([new A.Q(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$iaa:1}
A.jv.prototype={
ac(a){var s=this,r=a.ai(s.d.a),q=a.b.a
A.bW(q,null)
A.bg(q,s.a.a7())
A.cU(q,s.b.b)
A.bX(q,s.c)
A.bw(q,0,r.b)
A.dC(q,3,0)},
$ia0:1,
ga_(){return this.a}}
A.iy.prototype={
gaf(){return"ps1Quantize"},
ab(a,b){B.a.k(a.a,new A.al("ps1Quantize",B.y,A.f([new A.Q(this.e,B.h),B.c_],t.C)))},
aa(a){var s=this,r="ps1Quantize",q=s.a.ag(new A.aQ(r,s.b,s.c,B.q,B.eU,B.ed)),p=A.c9(s.d),o=s.e
return A.f([new A.jw(new A.aP(r,A.f([new A.Q(o,B.h),B.c_],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$iaa:1}
A.jw.prototype={
ac(a){var s=this,r=a.ai(s.d.a),q=a.b.a
A.bW(q,a.ai("ps1Output").b)
A.bg(q,s.a.a7())
A.cU(q,s.b.b)
A.bw(q,0,r.b)
A.A(q,"uScene",B.E)
A.A(q,"uQuantizationBits",new A.G(B.e,a.c.e.z))
A.A(q,"uDitherStrength",new A.G(B.e,0))
A.bX(q,s.c)
A.dC(q,3,0)},
$ia0:1,
ga_(){return this.a}}
A.dy.prototype={}
A.iG.prototype={
gaf(){return"shadow"},
ab(a,b){B.a.k(a.a,new A.al("shadowCaster",B.dM,A.f([B.bU],t.C)))},
aa(a){var s=this,r="shadowCaster",q=s.a.ag(new A.aQ(r,s.b,s.c,B.bu,B.bs,B.eD))
return A.f([new A.jy(new A.aP(r,A.f([B.bU],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$iaa:1}
A.jy.prototype={
ac(a){var s,r,q,p,o=this,n=a.ai("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bW(s,n.b)
A.bg(s,o.a.a7())
A.eq(s,B.af,1,0,0,0)
return}r=A.ry(l)
o.r.$1(r)
s=m.a
A.bW(s,n.b)
A.bg(s,o.a.a7())
A.eq(s,B.af,1,0,0,0)
A.cU(s,o.b.b)
A.A(s,"uAlbedo",B.E)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)o.jd(m,s[p],r)},
eT(a,b){var s,r=this.d.$1(b),q=a.a
A.bw(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.G(B.e,0))
s=this.a.a7()
A.bg(q,r.at?s.e_(!1):s)},
jd(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dI){s=b.b
if(!s.r)return
n.eO(a,s.c,c)
n.eT(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bX(s,r.a)
q=r.b
p=r.c
if(q)A.q1(s,p,0)
else A.dC(s,p,0)}else if(b instanceof A.di){s=b.a.b
if(!s.r)return
n.eO(a,s.c,c)
n.eT(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bX(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.q2(s,p,o,0)
else A.q0(s,p,0,o)}else throw A.d(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dU(b).n(0),null))},
eO(a,b,c){var s=a.a
A.A(s,"uModel",new A.G(B.o,new Float32Array(A.a3(b.ar().a))))
A.A(s,"uLightViewProjection",new A.G(B.o,new Float32Array(A.a3(c.a.a))))},
$ia0:1,
ga_(){return this.a}}
A.p4.prototype={
$1(a){return this.a.a=a},
$S:49}
A.p5.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.iH.prototype={
gaf(){return"shadowedWorld"},
ab(a,b){var s=A.f([B.bZ],t.C)
if(this.z)s.push(B.c1)
s.push(B.a3)
B.a.k(a.a,new A.al("shadowedWorld",B.bb,s))},
aa(a){var s=this,r="shadowedWorld",q=s.a.ag(new A.aQ(r,s.b,s.c,B.eX,B.eL,B.eb)),p=A.f([B.bZ],t.C)
if(s.z)p.push(B.c1)
p.push(B.a3)
return A.f([new A.jz(new A.aP(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$iaa:1}
A.jz.prototype={
ac(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.ai("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bW(c,j.b)
A.bg(c,l.a.a7())
A.eq(c,B.aW,1,0,0,0)
A.cU(c,l.b.b)
A.A(c,"uAlbedo",B.E)
s=t._
A.bw(c,1,s.a(l.f.$0()))
A.A(c,"uShadowMap",B.a4)
r=t.n
A.A(c,"uShadowMapTexelSize",new A.G(B.cb,new Float32Array(A.a3(A.f([0.001953125,0.001953125],r)))))
A.bw(c,2,s.a(l.x.$0()))
A.A(c,"uSsao",B.cc)
A.A(c,"uVertexSnapGrid",new A.G(B.e,e.y))
A.A(c,"uSceneColorSize",new A.G(B.cb,new Float32Array(A.a3(A.f([l.y,l.z],r)))))
A.A(c,"uViewProjection",new A.G(B.o,new Float32Array(A.a3(g.c.a))))
A.A(c,"uView",new A.G(B.o,new Float32Array(A.a3(g.a.a))))
A.A(c,"uLightViewProjection",new A.G(B.o,new Float32Array(A.a3(d.a.a))))
s=f.b
A.A(c,"uFogColor",new A.G(B.D,new Float32Array(A.a3(A.f([s.a,s.b,s.c],r)))))
A.A(c,"uFogStart",new A.G(B.e,f.c))
A.A(c,"uFogEnd",new A.G(B.e,f.d))
A.A(c,"uFogHeightFalloff",new A.G(B.e,0))
A.A(c,"uFogDensity",new A.G(B.e,0))
s=l.w.$0()==null
q=s?k:B.F
if(q==null)q=B.F
p=s?k:B.a5
if(p==null)p=B.a5
A.A(c,"uLightPosition",new A.G(B.D,new Float32Array(A.a3(A.f([q.a,q.b,q.c],r)))))
A.A(c,"uLightDirection",new A.G(B.D,new Float32Array(A.a3(A.f([p.a,p.b,p.c],r)))))
o=s?k:1
A.A(c,"uLightRange",new A.G(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.A(c,"uLightInnerCos",new A.G(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.A(c,"uLightOuterCos",new A.G(B.e,Math.cos(s)))
n=f.r
A.A(c,"uAmbientColor",new A.G(B.D,new Float32Array(A.a3(A.f([n.a,n.b,n.c],r)))))
A.A(c,"uAmbientIntensity",new A.G(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.p)(c),++m)l.eU(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.p)(h),++m)l.eU(i,h[m],r)},
eU(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dI){s=b.b
n.eV(a,s.c)
n.eP(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bX(s,r.a)
q=r.b
p=r.c
if(q)A.q1(s,p,0)
else A.dC(s,p,0)}else if(b instanceof A.di){s=b.a.b
n.eV(a,s.c)
n.eP(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bX(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.q2(s,p,o,0)
else A.q0(s,p,0,o)}else throw A.d(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dU(b).n(0),null))},
eP(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.bw(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.G(B.e,0))
A.A(q,"uOpaqueCoverage",new A.G(B.e,c===B.ai?0:1))
A.A(q,"uAffineWarpStrength",new A.G(B.e,0))
A.A(q,"uMaterialTint",new A.G(B.D,new Float32Array(A.a3(A.f([r.c,r.d,r.e],t.n)))))
A.A(q,"uEmissiveStrength",new A.G(B.e,0))
A:{s=null
if(B.ai===c){switch(d.a){case 0:s=B.cJ
break
case 1:s=B.cI
break}break A}if(B.L===c||B.cH===c){s=this.a.a7()
break A}}A.bg(q,r.at?s.e_(!1):s)},
eV(a,b){var s=b.ar(),r=a.a
A.A(r,"uModel",new A.G(B.o,new Float32Array(A.a3(s.a))))
A.A(r,"uNormalMatrix",new A.G(B.o,new Float32Array(A.a3(s.hE().a))))},
$ia0:1,
ga_(){return this.a}}
A.iK.prototype={
gaf(){return"ssaoOcclusion"},
ab(a,b){B.a.k(a.a,new A.al("ssaoOcclusion",B.ba,A.f([B.bQ],t.C)))},
aa(a){var s=this,r="ssaoOcclusion",q=s.a.ag(new A.aQ(r,s.b,s.c,B.q,B.eT,B.ea)),p=A.c9(s.d)
return A.f([new A.jD(new A.aP(r,A.f([B.bQ],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iaa:1}
A.jD.prototype={
ac(a){var s=a.b.a
A.bW(s,a.ai("ssaoRaw").b)
A.bg(s,this.a.a7())
A.eq(s,B.aV,1,1,1,1)
return},
$ia0:1,
ga_(){return this.a}}
A.iJ.prototype={
gaf(){return"ssaoBlur"},
ab(a,b){B.a.k(a.a,new A.al("ssaoBlur",B.ba,A.f([B.bW,B.bP],t.C)))},
aa(a){var s=this,r="ssaoBlur",q=s.a.ag(new A.aQ(r,s.b,s.c,B.q,B.eM,B.eI)),p=A.c9(s.d)
return A.f([new A.jC(new A.aP(r,A.f([B.bW,B.bP],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$iaa:1}
A.jC.prototype={
ac(a){var s=a.b.a
A.bW(s,a.ai("ssaoBlurred").b)
A.bg(s,this.a.a7())
A.eq(s,B.aV,1,1,1,1)
return},
$ia0:1,
ga_(){return this.a}}
A.iY.prototype={
gaf(){return"vhs"},
ab(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.al("vhs",B.y,A.f([new A.Q(this.r,B.h),B.bS,B.bR],t.C)))},
aa(a){var s=this,r=s.a.ag(new A.aQ("vhs",s.b,s.c,B.q,B.eN,B.ee)),q=A.c9(s.d),p=s.r
return A.f([new A.jJ(new A.aP("vhs",A.f([new A.Q(p,B.h),B.bS,B.bR],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$iaa:1}
A.jJ.prototype={
ac(a){var s,r=this,q=a.ai(r.f.a),p=a.ai("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bW(n,p.b)
A.bg(n,r.a.a7())
A.cU(n,r.b.b)
A.bw(n,0,q.b)
A.A(n,"uScene",B.E)
A.bw(n,1,t._.a(r.d.$0()))
A.A(n,"uHistory",B.a4)
A.A(n,"uTime",new A.G(B.e,r.e.$0()))
A.A(n,"uChromaWeight",new A.G(B.e,o.Q))
A.A(n,"uTrackingWeight",new A.G(B.e,m))
A.A(n,"uNoiseWeight",new A.G(B.e,o.at))
A.A(n,"uHeadSwitchWeight",new A.G(B.e,o.ax))
A.A(n,"uDropoutWeight",new A.G(B.e,o.ay))
A.A(n,"uGhostWeight",new A.G(B.e,s))
A.bX(n,r.c)
A.dC(n,3,0)},
$ia0:1,
ga_(){return this.a}}
A.fp.prototype={}
A.j5.prototype={
gaf(){return"world"},
ab(a,b){B.a.k(a.a,new A.al("worldOpaqueTransparent",B.bb,A.f([B.a3],t.C)))},
aa(a){var s=this,r=s.a.ag(new A.aQ("safeWorld",s.b,s.c,B.eW,B.q,B.e8))
return A.f([new A.jK(new A.aP("worldOpaqueTransparent",A.f([B.a3],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$iaa:1}
A.jK.prototype={
ac(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bW(j,a.ai("sceneColor").b)
A.bg(j,n.a.a7())
A.eq(j,B.aW,1,0,0,0)
A.cU(j,n.b.b)
A.A(j,"uViewProjection",new A.G(B.o,new Float32Array(A.a3(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.F
q=t.n
A.A(j,"uLightDir",new A.G(B.D,new Float32Array(A.a3(A.f([r.a,r.b,r.c],q)))))
p=k.r
A.A(j,"uAmbientColor",new A.G(B.D,new Float32Array(A.a3(A.f([p.a,p.b,p.c],q)))))
A.A(j,"uAmbientIntensity",new A.G(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.p)(j),++o)n.ev(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.p)(l),++o)n.ev(m,l[o])},
ev(a,b){var s,r,q,p,o,n=this
if(b instanceof A.di){s=b.a.b
n.eR(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bX(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.q2(s,p,o,0)
else A.q0(s,p,0,o)}else if(b instanceof A.dI){s=b.b
n.eR(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bX(s,r.a)
q=r.b
p=r.c
if(q)A.q1(s,p,0)
else A.dC(s,p,0)}else throw A.d(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dU(b).n(0),null))},
eR(a,b){var s=b.ar(),r=a.a
A.A(r,"uModel",new A.G(B.o,new Float32Array(A.a3(s.a))))
A.A(r,"uNormalMatrix",new A.G(B.o,new Float32Array(A.a3(s.hE().a))))},
$ia0:1,
ga_(){return this.a}}
A.kJ.prototype={
bL(a){var s,r,q
a.E()
s=A.a5(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.as
else q=r===0?B.aq:B.ar
return new A.ds(q,s)},
i1(a){var s,r=this.bL(a).a
A:{if(B.as===r){s=B.fn
break A}if(B.ar===r){s=B.fm
break A}s=B.a_
break A}return s}}
A.hU.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.f0.prototype={
A(){return"GpuBufferKind."+this.b}}
A.hW.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.hX.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hT.prototype={}
A.hV.prototype={}
A.df.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.f2.prototype={}
A.f1.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dx.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.ft.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cR.prototype={
A(){return"UniformType."+this.b}}
A.G.prototype={}
A.e3.prototype={
A(){return"ClearMask."+this.b}}
A.hH.prototype={$iv1:1}
A.iw.prototype={
hF(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.l("resource is not in candidate: "+a))
return s}}
A.lr.prototype={
gp(){var s=this.c
if(s==null)throw A.d(A.l("GPU resource adapter is not initialized"))
return s},
bu(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.j9(s.b)
r.b.bu()
r.c=null
r.e=!0},
er(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.f([],t.l2)
try{for(p=b0.a.a,p=A.jp(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.a9(s,"sceneColor#1")){j=J.aV(a8,"sceneColor")
j.toString
J.bP(a8,s,j)
continue}j=this.jc(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.w("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.h(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.ak
if(f&&!j.e)A.k(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b8||g===B.dK
d=a5
c=a5
b=a5
a=a5
if(f){l.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE)],k))
l.readBuffer(A.a(o.WebGL2RenderingContext.NONE))}else{g=j.c
a0=j.b
if(g>1){c=A.h(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),c)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.RENDERBUFFER),c)
if(e){a=A.h(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),a)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(o.WebGL2RenderingContext.RENDERBUFFER),a)
l.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}else{d=A.h(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),d)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.TEXTURE_2D),d,0])
if(e){b=A.h(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(o.WebGL2RenderingContext.TEXTURE_2D),b,0])
l.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}}a1=a5
a2=a5
if(j.e){g=j.c
a0=j.b
if(g>1){a1=A.h(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),a1)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.DEPTH_COMPONENT24),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(o.WebGL2RenderingContext.RENDERBUFFER),a1)}else{a2=A.h(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a2)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.DEPTH_COMPONENT24),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.NEAREST))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.NEAREST))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(o.WebGL2RenderingContext.TEXTURE_2D),a2,0])}}g=A.a(l.checkFramebufferStatus(A.a(o.WebGL2RenderingContext.FRAMEBUFFER)))
a0=A.a(o.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)
if(g!==a0){A.q5(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.d_(new A.h6(h,d,c,a1,a2,b,a,i,j.b))
J.hi(a9,r)
J.bP(a8,s,r)}a6=A.cg(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.K(a6).i("fr<1>"),a6=new A.fr(a6,p),a6=new A.bq(a6,a6.gq(0),p.i("bq<a2.E>")),o=this.a,n=t.jg,p=p.i("a2.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.q5(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
jc(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.f2(512,512,1,B.ak,!0)
if(a==="sceneDepth")return new A.f2(o,n,1,B.ak,!0)
s=B.b.Z(a,"ssao")||B.b.Z(a,"bloomBlur")||B.b.Z(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.f2(r,q,1,p?B.b8:B.dJ,p)},
j9(a){var s,r,q,p,o,n=A.pP(t.f7.a(a).gal(),t._)
for(n=A.jp(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.q5(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ew.prototype={
A(){return"_SlotState."+this.b}}
A.cY.prototype={
sb8(a){this.c=this.$ti.i("1?").a(a)}}
A.c4.prototype={
aT(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cY(B.aa,n.i("cY<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.hK
p.sb8(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c6(a){return this.aT(a,null)},
ak(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dg(B.be,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dg(B.bf,a))
s=q.b
if(s===B.ab||s===B.aa)throw A.d(A.dg(B.am,a))},
bt(a){var s,r,q=this.$ti
q.c.a(a)
this.ak(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dV(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.ak(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].sb8(b)},
aM(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dg(B.be,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dg(B.bf,a))
r=q.b
if(r===B.ab||r===B.aa)throw A.d(A.dg(B.dW,a))
q.b=B.ab
q.sb8(null)
B.a.k(p.c,s);++p.e},
bb(){return new A.ca(this.l6(),this.$ti.i("ca<+(1,2)>"))},
l6(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bb(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.ab||j===B.aa){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.bx(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.hr.prototype={
A(){return"BlendEquation."+this.b}}
A.d5.prototype={
A(){return"BlendFactor."+this.b}}
A.hD.prototype={
A(){return"CullFace."+this.b}}
A.hF.prototype={
A(){return"DepthFunc."+this.b}}
A.eW.prototype={
e_(a){var s=this
return A.r2(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aH.prototype={
A(){return"StateField."+this.b}}
A.nL.prototype={
kB(a){var s,r=this.a
if(r==null)return A.me(B.eC,t.dB)
s=A.a5(t.dB)
if(r.a!==a.a)s.k(0,B.aA)
if(r.b!==a.b)s.k(0,B.aB)
if(r.c!==a.c)s.k(0,B.aC)
if(r.d!==a.d)s.k(0,B.aD)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aE)
if(r.r!==a.r)s.k(0,B.aF)
if(r.w!==a.w)s.k(0,B.aG)
if(r.x!==a.x)s.k(0,B.aH)
return s}}
A.d_.prototype={$ici:1}
A.h7.prototype={}
A.h6.prototype={}
A.j4.prototype={
iO(a){var s=this,r=A.c(s.a.canvas)
s.c=A.a6(new A.nJ(s))
s.d=A.a6(new A.nK(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hK(){var s=this,r=v.G,q=s.bn(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bn(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bn(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bn(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bn(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.h(l.getExtension("EXT_texture_filter_anisotropic")),j=A.h(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.h(l.getExtension("EXT_color_buffer_float")),h=A.h(l.getExtension("EXT_color_buffer_half_float")),g=A.h(l.getExtension("WEBGL_lose_context")),f=A.cD(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cD(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.mG("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bn(a){var s=A.cD(this.a.getParameter(a))
return typeof s=="number"?B.d.aN(s):0},
$ivl:1}
A.nJ.prototype={
$1(a){A.c(a).preventDefault()
this.a.b=B.M},
$S:3}
A.nK.prototype={
$1(a){A.c(a)
this.a.b=B.f},
$S:3}
A.hJ.prototype={
C(){var s=this
return A.V(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.ho.prototype={
iA(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.i()
s=j.a
A.h(i.connect(A.c(s.destination)))
r=j.d
r===$&&A.i()
A.c(r.gain).value=0.25
q=j.e
q===$&&A.i()
A.c(q.gain).value=0.12
p=j.f
p===$&&A.i()
A.c(p.gain).value=0.4
o=j.r
o===$&&A.i()
A.c(o.gain).value=0.2
n=j.w
n===$&&A.i()
A.c(n.gain).value=0.4
m=j.x
m===$&&A.i()
A.c(m.gain).value=0.1
l=j.y
l===$&&A.i()
A.c(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.h(r[k].connect(i))
r=j.z
r===$&&A.i()
A.c(r.gain).value=1
q=j.Q
q===$&&A.i()
A.c(q.gain).value=0.35
A.h(o.connect(r))
A.h(n.connect(r))
A.h(p.connect(r))
p=j.as
p===$&&A.i()
A.h(r.connect(p))
A.h(p.connect(q))
A.h(q.connect(i))
q=A.c(s.createBiquadFilter())
q.type="highpass"
A.c(q.frequency).value=80
j.k2!==$&&A.y()
j.k2=q
p=A.c(s.createBiquadFilter())
p.type="lowpass"
A.c(p.frequency).value=11e3
j.k3!==$&&A.y()
j.k3=p
A.h(q.connect(p))
A.h(p.connect(A.c(s.destination)))
i.disconnect(A.c(s.destination))
A.h(i.connect(q))
p.disconnect(A.c(s.destination))
q=A.c(s.createChannelSplitter(2))
j.k4!==$&&A.y()
j.k4=q
i=A.c(s.createChannelMerger(2))
j.ok!==$&&A.y()
j.ok=i
r=A.c(s.createGain())
A.c(r.gain).value=0.5
j.p1!==$&&A.y()
j.p1=r
A.h(p.connect(q))
A.h(i.connect(A.c(s.destination)))
j.ec()},
ec(){var s,r=this,q=r.k4
q===$&&A.i()
q.disconnect()
s=r.p1
s===$&&A.i()
s.disconnect()
if(r.p2){A.h(q.connect(s,0))
A.h(q.connect(s,1))
q=r.ok
q===$&&A.i()
A.h(s.connect(q,0,0))
A.h(s.connect(q,0,1))}else{s=r.ok
s===$&&A.i()
A.h(q.connect(s,0,0))
A.h(q.connect(s,1,1))}},
hO(){var s=this.a
if(A.D(s.state)==="suspended")A.c(s.resume())},
eW(a){var s,r,q=this
if(B.b.Z(a,"vo-")){s=q.y
s===$&&A.i()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"){s=q.f
s===$&&A.i()
return s}r=B.eQ.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.i()
break A}if("bed"===r){s=q.e
s===$&&A.i()
break A}if("mid"===r){s=q.r
s===$&&A.i()
break A}if("air"===r){s=q.x
s===$&&A.i()
break A}s=q.w
s===$&&A.i()
break A}return s},
jl(){var s,r,q,p,o,n,m,l=this.a,k=A.b0(l.sampleRate),j=B.d.aB(k*2),i=A.c(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cn()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.e(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dK(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.c(s.createBufferSource())
r.buffer=o
A.c(r.playbackRate).value=0.94+p.ax.cn()*0.12
q=A.c(s.createGain())
A.c(q.gain).value=b
A.h(r.connect(q))
A.h(q.connect(p.eW(a)))
r.onended=A.a6(new A.ku(r,q))
r.start()},
lo(a){return this.dK(a,1)},
hI(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.at.h(0,a)
if(k==null)return
s=l.a
r=A.c(s.createBufferSource())
r.buffer=k
A.c(r.playbackRate).value=d*(0.94+l.ax.cn()*0.12)
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
if(g!=null&&f!=null){A.c(o.frequency).value=f
A.c(n.gain).value=Math.pow(10,g/20)}else{s=l.ay!=null
if(s){s=l.ay
s.toString
m=l.ep(l.b.hH(e,s))
A.c(o.frequency).value=m.b
A.c(n.gain).value=Math.pow(10,m.a/20)}}l.CW.l(0,o,new A.jB(r,q,n,o,p,e))
r.onended=A.a6(new A.kt(l,o))
A.h(r.connect(q))
A.h(q.connect(n))
A.h(n.connect(o))
A.h(o.connect(p))
A.h(p.connect(l.eW(a)))
r.start()},
lp(a,b,c,d){return this.hI(a,b,c,1,d,null,null)},
ep(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.bx(r,q)},
e7(a){var s,r,q,p,o=this
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
A.h(q.connect(p))
r=o.e
r===$&&A.i()
A.h(p.connect(r))
q.onended=A.a6(new A.kv(o,q,p))
q.start()
o.cy=q},
e2(a){if(this.p2===a)return
this.p2=a
this.ec()},
aO(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.K(c==null?q.fr:c,0,1)
q.fx=B.d.K(f==null?q.fx:f,0,1)
q.fy=B.d.K(b==null?q.fy:b,0,1)
q.go=B.d.K(a==null?q.go:a,0,1)
q.id=B.d.K(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.i()
A.c(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.i()
A.c(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.i()
A.c(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.i()
A.c(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.i()
A.c(s.gain).value=0.4*q.go
s=q.e
s===$&&A.i()
A.c(s.gain).value=0.12*q.id
s=q.y
s===$&&A.i()
A.c(s.gain).value=q.fx
s=q.c
s===$&&A.i()
s=A.c(s.gain)
r=q.k1?0:q.fr
s.value=r},
ia(a){var s=null
return this.aO(s,s,s,s,a,s)},
i8(a){var s=null
return this.aO(s,s,a,s,s,s)},
ib(a){var s=null
return this.aO(s,s,s,s,s,a)},
i7(a){var s=null
return this.aO(s,a,s,s,s,s)},
i6(a){var s=null
return this.aO(a,s,s,s,s,s)},
i9(a){var s=null
return this.aO(s,s,s,a,s,s)},
i5(a){if(this.ay===a)return
this.ay=a
this.b6()},
b6(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.U(s,A.o(s).i("U<1,2>")).gt(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.hR(p,g)
m=n==null?i.ep(h.hH(p,g)):new A.bx(n.b,n.c)
l=A.b0(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.c(A.c(o.frequency).cancelScheduledValues(l))
A.c(A.c(o.frequency).setValueAtTime(A.b0(A.c(o.frequency).value),l))
j=l+0.08
A.c(A.c(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.c(A.c(o.gain).cancelScheduledValues(l))
A.c(A.c(o.gain).setValueAtTime(A.b0(A.c(o.gain).value),l))
A.c(A.c(o.gain).linearRampToValueAtTime(k,j))}}}
A.ks.prototype={
$1(a){return this.hX(t.gc.a(a))},
hX(a){var s=0,r=A.b4(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.b5(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a8(A.aB(A.c(A.c(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a8(A.aB(A.c(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a8(A.aB(A.c(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ad(h)
A.c(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.b2(null,r)
case 1:return A.b1(p.at(-1),r)}})
return A.b3($async$$1,r)},
$S:52}
A.ku.prototype={
$1(a){A.c(a)
this.a.disconnect()
this.b.disconnect()},
$S:3}
A.kt.prototype={
$1(a){var s
A.c(a)
s=this.a.CW.ah(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:0}
A.kv.prototype={
$1(a){var s,r
A.c(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:3}
A.jB.prototype={}
A.hp.prototype={
A(){return"AudioCategory."+this.b}}
A.kl.prototype={
iC(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.dw)
if(!B.a.a3(A.f([d.a,d.b,d.c],t.n),new A.km()))throw A.d(B.d6)}}
A.km.prototype={
$1(a){return isFinite(A.d0(a))},
$S:5}
A.k5.prototype={
iz(a,b){if(this.a.length===0)throw A.d(B.d1)
if(!B.a.a3(A.f([a.a,a.b,a.c],t.n),new A.k6()))throw A.d(B.d9)}}
A.k6.prototype={
$1(a){return isFinite(A.d0(a))},
$S:5}
A.eP.prototype={
E(){if(B.a.R(A.f([-1.5,-12,-28,2e4,1100,320],t.n),new A.k7()))throw A.d(B.dk)},
hQ(a){this.E()
if(a.ax&&!a.ay&&!a.z)return new A.bx(-1.5,2e4)
if(a.ay)return new A.bx(-28,320)
return new A.bx(-12,1100)}}
A.k7.prototype={
$1(a){return!isFinite(A.d0(a))},
$S:5}
A.kh.prototype={
iB(a){var s=A.o(a)
if(new A.ah(a,s.i("ah<1>")).R(0,new A.kj())||new A.aE(a,s.i("aE<2>")).R(0,new A.kk()))throw A.d(B.du)}}
A.kj.prototype={
$1(a){return A.D(a).length===0},
$S:4}
A.kk.prototype={
$1(a){var s
t.a.a(a)
s=J.av(a)
return s.gI(a)||s.R(a,new A.ki())},
$S:54}
A.ki.prototype={
$1(a){return A.D(a).length===0},
$S:4}
A.pI.prototype={}
A.kq.prototype={}
A.kn.prototype={
iD(a,b,c){var s
for(s=this.b.gal(),s=s.gt(s);s.m();)s.gp().E()},
hR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.e
if(h.h(0,a)==null)throw A.d(A.l("audio source room missing: "+a))
if(h.h(0,b)==null)throw A.d(A.l("audio listener room missing: "+b))
s=this.jP(a,b)
for(h=s.a,r=h.length,q=this.b,p=0,o=2e4,n=0;n<h.length;h.length===r||(0,A.p)(h),++n){m=h[n]
l=q.h(0,m.a)
k=(l==null?B.aP:l).hQ(m)
j=k.b
p+=k.a
if(j<o)o=j}r=!s.b
if(r&&a!==b){p=-48
o=240}q=A.f([],t.s)
for(i=h.length,n=0;n<h.length;h.length===i||(0,A.p)(h),++n)q.push(h[n].a)
h=B.d.K(p,-60,0)
i=B.c.K(o,120,2e4)
r=!r||a===b
return new A.kq(A.am(q,t.N),h,i,r)},
jP(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.hH
s=t.N
r=A.V([a0,0],s,t.i)
q=A.V([a0,B.H],s,t.fB)
p=A.ar([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.Q,l=p.$ti.c;p.a!==0;){k=A.L(p,l)
B.a.Y(k,new A.ko(r))
j=B.a.gao(k)
p.ah(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.fD(s,!0)}i=o.aq(j)
h=A.L(i,i.$ti.i("n.E"))
B.a.Y(h,new A.kp())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.p)(h),++g){f=h[g]
e=f.bd(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.aP:d).hQ(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.l(0,e,a)
b=q.h(0,j)
b.toString
b=A.L(b,m)
b.push(f)
q.l(0,e,b)
p.k(0,e)}}}return B.hG}}
A.ko.prototype={
$2(a,b){var s,r,q
A.D(a)
A.D(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.F(r,s)
return q===0?B.b.F(a,b):q},
$S:55}
A.kp.prototype={
$2(a,b){var s=t.Q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:56}
A.fD.prototype={}
A.kI.prototype={
dI(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.uw().aS(q).ga5()
p.d=q
p.c=p.b.aS(q).ga5()
p.a=a}}
A.lb.prototype={}
A.iN.prototype={}
A.lp.prototype={
jf(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.h(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.h(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.h(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cD(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cl(a,b,c,d,e,f){return this.l7(a,b,c,d,e,f)},
l7(a,b,c,a0,a1,a2){var s=0,r=A.b4(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cl=A.b5(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.c(A.c(j.document).createElement("img"))
m.src=a
s=7
return A.a8(A.aB(A.c(m.decode()),t.X),$async$cl)
case 7:i=n.a
h=A.h(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aM(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
k=a2?A.a(j.WebGL2RenderingContext.REPEAT):A.a(j.WebGL2RenderingContext.CLAMP_TO_EDGE)
i.texParameteri(A.a(j.WebGL2RenderingContext.TEXTURE_2D),A.a(j.WebGL2RenderingContext.TEXTURE_WRAP_S),k)
i.texParameteri(A.a(j.WebGL2RenderingContext.TEXTURE_2D),A.a(j.WebGL2RenderingContext.TEXTURE_WRAP_T),k)
h=A.a(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.a(j.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
f=a0?A.a(j.WebGL2RenderingContext.LINEAR):A.a(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(a1)i.generateMipmap(A.a(j.WebGL2RenderingContext.TEXTURE_2D))
h=A.a(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.a(j.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
if(a1)f=A.a(j.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
else f=a0?A.a(j.WebGL2RenderingContext.LINEAR):A.a(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(c){n.jf()
h=n.c
if(h>1)i.texParameterf(A.a(j.WebGL2RenderingContext.TEXTURE_2D),34046,h)}q=l
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
case 6:case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$cl,r)},
cm(a,b,c){var s=!1
return this.l8(t.a.a(a),b,!1)},
l8(b0,b1,b2){var s=0,r=A.b4(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cm=A.b5(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.f([],t.W)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.c(A.c(a0.document).createElement("img"))
j.src=k
s=10
return A.a8(A.aB(A.c(j.decode()),a1),$async$cm)
case 10:J.hi(l,j)
case 8:b0.length===a||(0,A.p)(b0),++a2
s=7
break
case 9:if(J.aW(l)===0){a=A.l("texture array needs at least one layer")
throw A.d(a)}i=A.a(J.aV(l,0).width)
h=A.a(J.aV(l,0).height)
if(J.a9(i,0)||J.a9(h,0)||J.uy(l,new A.lq(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.aW(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a8()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.k_(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a8()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.U()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.U()
n=[1]
s=5
break A}e=B.d.L(a+1,2)}}a=m.a
a7=A.h(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.d(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aM(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a9(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.pH(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.aW(l)
if(typeof a1!=="number"){q=a1.cu()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aV(l,c)])
d=A.a(a.getError())
if(!J.a9(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.pH(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.U()
n=[1]
s=5
break A}c=a1+1}a.texParameteri(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.a(a0.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a.texParameteri(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.a(a0.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a1=A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.a(a0.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
a4=a0.WebGL2RenderingContext
a4=A.a(a4.NEAREST)
a.texParameteri(a1,a3,a4)
if(a6){a.generateMipmap(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY))
d=A.a(a.getError())
if(!J.a9(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.pH(d,16)+")")
throw A.d(a)}a.texParameteri(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.a(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.a(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
a0=a0.WebGL2RenderingContext
a0=A.a(a0.NEAREST)
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
b=A.ad(a9)
A.c(v.G.console).error("texture array load failed: "+A.q(b))
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
a.bindTexture(A.a(v.G.WebGL2RenderingContext.TEXTURE_2D_ARRAY),null)
a.deleteTexture(a7)}s=n.pop()
break
case 6:case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$cm,r)},
eX(a,b){var s=this.a,r=A.h(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a9(A.cD(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.e7("shader compile failed: "+A.q(A.tl(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
aC(a,b){var s=v.G,r=this.eX(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eX(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.h(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a9(A.cD(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.e7("program link failed: "+A.q(A.tl(p,"getProgramInfoLog",o,t.w))))
return o},
ghD(){var s=A.cD(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aN(s):0},
dW(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fm(0,c,B.c.iy(b.byteLength,p))*p
if(B.c.W(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.uz(B.u.gkh(b),b.byteOffset+0*p,B.c.L(o,4)))}},
cV(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aM(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cR(a,b,c,d,e){var s,r=this.a,q=A.h(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aM(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eZ(a,b,c){var s,r=this.a,q=A.h(r.createTexture())
q.toString
this.cV(q,a,b)
s=v.G
A.aM(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
eu(a,b){var s,r,q=this.a,p=A.h(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aM(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aM(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dJ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.h(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cR(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cR(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eZ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eZ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cR(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.eu(a,b)
if(d)h.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.e7("framebuffer incomplete"))
return new A.iN(g,n,o,m,q,p,l,e,a,b)},
hC(a,b,c,d){return this.dJ(a,b,c,d,0)},
lb(a,b,c,d){return this.dJ(a,b,!0,c,d)},
b_(a,b,c){return this.dJ(a,b,c,!1,0)},
cT(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aM(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
aH(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cV(q,b,c)
if(p!=null)n.cV(p,b,c)
n.cT(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cT(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cT(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.eu(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
lA(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aM(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aM(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aM(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
ks(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.f([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.f([A.a(q.WebGL2RenderingContext.NONE),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.f([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
aK(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.lq.prototype={
$1(a){A.c(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:57}
A.i_.prototype={
dU(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].lZ(a)}}
A.i1.prototype={
aF(a){if(this.f)return
A.rd(a,"requestPointerLock",t.X)},
jw(a){A.c(a)
if(A.au(a.repeat))return
if(this.b.k(0,A.D(a.code)))this.c.k(0,A.D(a.code))},
jy(a){this.b.ah(0,A.D(A.c(a).code))},
jC(a){var s=this
A.c(a)
if(!s.f)return
s.d=s.d+s.eC(a,"movementX")
s.e=s.e+s.eC(a,"movementY")},
jA(a){var s=this
A.c(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
eC(a,b){var s=A.tg(a[b])
if(s==null)s=null
return s==null?0:s}}
A.ie.prototype={}
A.dp.prototype={
gez(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gG(B.c.cp(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gG(B.c.cp(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
V(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dp&&A.jZ(r)===A.jZ(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gG(a){return this.gez()}}
A.mj.prototype={
iI(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].gez(),q)}}
A.cQ.prototype={
co(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.u.ic(s,0,m,l)
n.a=s}r=b.a9(0,a).aS(d.a9(0,a)).ga5()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fv(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fv(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fv(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fv(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fv(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fv(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aj(a,b,c,d,e){return this.co(a,b,c,d,e,1,1)}}
A.mP.prototype={
jm(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aC(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.y()
m.w=r
q=s.aC(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.y()
m.x=q
p=m.c
o=A.h(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.y()
m.y=o
o=A.h(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.y()
m.z=o
o=A.h(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.y()
m.Q=o
r=A.h(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.y()
m.as=r
r=A.h(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.y()
m.at=r
q=A.h(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.y()
m.ax=q
m.d=s.b_(m.ay,m.ch,!1)
m.e=s.b_(m.ay,m.ch,!1)
m.f=s.b_(m.ay,m.ch,!1)
p=A.h(p.createVertexArray())
p.toString
m.CW!==$&&A.y()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
jn(){var s
try{this.r=this.b.b_(384,216,!1)}catch(s){this.r=null}},
ly(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
if(n==null||m==null||l==null||a.d==null)return null
s=o.c
r=o.w
r===$&&A.i()
s.useProgram(r)
r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=A.a(r.WebGL2RenderingContext.TEXTURE_2D)
p=a.d
p.toString
s.bindTexture(q,p)
p=o.y
p===$&&A.i()
s.uniform1i(p,0)
p=o.z
p===$&&A.i()
s.uniform2f(p,n.x,n.y)
p=o.Q
p===$&&A.i()
s.uniform1f(p,b)
p=o.as
p===$&&A.i()
s.uniform1f(p,0.0025)
p=o.b
p.aK(n)
q=o.CW
q===$&&A.i()
s.bindVertexArray(q)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
q=o.x
q===$&&A.i()
s.useProgram(q)
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=o.at
q===$&&A.i()
s.uniform1i(q,0)
p.aK(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.i()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aK(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.mY.prototype={
cH(a,b,c){var s,r,q
try{r=this.a.aC(b,c)
return r}catch(q){s=A.ad(q)
r=A.e7(a+": "+A.q(s))
throw A.d(r)}}}
A.mR.prototype={}
A.fK.prototype={}
A.jE.prototype={}
A.js.prototype={}
A.jq.prototype={}
A.mS.prototype={
iJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.f([new A.dp(0,0,1,0),new A.dp(1,0,1,0),new A.dp(2,0,1,0)],t.mn),e=t.S
e=new A.mj(f,A.x(e,e))
e.iI(f)
h.dE=e
h.h9=1.9
h.ds=h.aX/h.aW
r=J.i6(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fK()
t.cu.a(r)
f=h.aD
e=f.aC("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aC(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aC(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aC(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aC(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ad!==$&&A.y()
h.ad=new A.mY(f,e,p,o,n,m)
h.b=t.d4.a(new A.mT(h))
h.eM()
h.eL()
o=h.av
p=A.h(o.getUniformLocation(m,"uTex"))
h.fE!==$&&A.y()
h.fE=p
p=A.h(o.getUniformLocation(m,"uNoise"))
h.fF!==$&&A.y()
h.fF=p
p=A.h(o.getUniformLocation(m,"uTime"))
h.fh!==$&&A.y()
h.fh=p
p=A.h(o.getUniformLocation(m,"uTexelSize"))
h.fg!==$&&A.y()
h.fg=p
p=A.h(o.getUniformLocation(m,"uNoiseOff"))
h.fi!==$&&A.y()
h.fi=p
p=A.h(o.getUniformLocation(m,"uChromaLuma"))
h.fj!==$&&A.y()
h.fj=p
p=A.h(o.getUniformLocation(m,"uChromaLag"))
h.fk!==$&&A.y()
h.fk=p
p=A.h(o.getUniformLocation(m,"uTapeNoise"))
h.fl!==$&&A.y()
h.fl=p
p=A.h(o.getUniformLocation(m,"uHeadSwitch"))
h.fm!==$&&A.y()
h.fm=p
p=A.h(o.getUniformLocation(m,"uTracking"))
h.fn!==$&&A.y()
h.fn=p
p=A.h(o.getUniformLocation(m,"uDropouts"))
h.fo!==$&&A.y()
h.fo=p
p=A.h(o.getUniformLocation(m,"uGhosting"))
h.fp!==$&&A.y()
h.fp=p
p=A.h(o.getUniformLocation(m,"uChromaBlurI"))
h.fq!==$&&A.y()
h.fq=p
p=A.h(o.getUniformLocation(m,"uChromaBlurQ"))
h.fs!==$&&A.y()
h.fs=p
p=A.h(o.getUniformLocation(m,"uChromaLagAmount"))
h.ft!==$&&A.y()
h.ft=p
p=A.h(o.getUniformLocation(m,"uNoiseScale"))
h.fu!==$&&A.y()
h.fu=p
p=A.h(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fv!==$&&A.y()
h.fv=p
p=A.h(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fw!==$&&A.y()
h.fw=p
p=A.h(o.getUniformLocation(m,"uJitterAmount"))
h.fz!==$&&A.y()
h.fz=p
p=A.h(o.getUniformLocation(m,"uJitterFreq"))
h.fA!==$&&A.y()
h.fA=p
p=A.h(o.getUniformLocation(m,"uDropoutRate"))
h.fB!==$&&A.y()
h.fB=p
p=A.h(o.getUniformLocation(m,"uGhostAmount"))
h.fC!==$&&A.y()
h.fC=p
p=A.h(o.getUniformLocation(m,"uGhostOffset"))
h.fD!==$&&A.y()
h.fD=p
p=A.h(o.getUniformLocation(m,"uGhostTarget"))
h.fG!==$&&A.y()
h.fG=p
m=A.h(o.getUniformLocation(m,"uHasGhost"))
h.fH!==$&&A.y()
h.fH=m
m=A.h(o.getUniformLocation(n,"uTex"))
h.du!==$&&A.y()
h.du=m
m=A.h(o.getUniformLocation(n,"uDepth"))
h.dv!==$&&A.y()
h.dv=m
m=A.h(o.getUniformLocation(n,"uFocusDistance"))
h.dw!==$&&A.y()
h.dw=m
m=A.h(o.getUniformLocation(n,"uDofBlurScale"))
h.dz!==$&&A.y()
h.dz=m
m=A.h(o.getUniformLocation(n,"uBlurRadius"))
h.dA!==$&&A.y()
h.dA=m
m=A.h(o.getUniformLocation(n,"uDofStrength"))
h.dB!==$&&A.y()
h.dB=m
n=A.h(o.getUniformLocation(n,"uTexel"))
h.dC!==$&&A.y()
h.dC=n
n=A.au(A.c(A.c(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bx!==$&&A.y()
h.bx=n
h.shA(16777215)
n=new A.nc(o,f,A.f([],t.aA),A.f([],t.df),A.f([],t.h),A.f([],t.kS))
m=n.c=f.aC("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.h(o.getUniformLocation(m,"uLightProj"))
n.e=A.h(o.getUniformLocation(m,"uModel"))
h.dD!==$&&A.y()
h.dD=n
n=new A.mP(f,o)
n.jm()
n.jn()
h.c8!==$&&A.y()
h.c8=n
n=f.a
m=A.h(n.createBuffer())
m.toString
h.d2!==$&&A.y()
h.d2=m
p=A.h(n.createBuffer())
p.toString
h.d3!==$&&A.y()
h.d3=p
n=A.h(n.createBuffer())
n.toString
h.d4!==$&&A.y()
h.d4=n
e=A.h(o.createVertexArray())
e.toString
h.d5!==$&&A.y()
h.d5=e
l=A.h(o.createVertexArray())
l.toString
h.d6!==$&&A.y()
h.d6=l
k=A.h(o.createVertexArray())
k.toString
h.d7!==$&&A.y()
h.d7=k
j=A.h(o.createVertexArray())
j.toString
h.d8!==$&&A.y()
h.d8=j
o.bindVertexArray(e)
h.cE(m)
o.bindVertexArray(l)
h.cE(p)
o.bindVertexArray(k)
h.cE(n)
o.bindVertexArray(null)
try{h.cd=f.hC(384,216,!0,!0)}catch(i){h.cd=null}s=4<f.ghD()?4:f.ghD()
e=s
if(typeof e!=="number")return e.a8()
if(e>1)try{h.bw=f.lb(h.aW,h.aX,!0,s)}catch(i){h.bw=null}try{h.aV=f.hC(h.aW,h.aX,!0,!0)}catch(i){h.bw=h.aV=null}if(h.aV!=null)try{h.ca=f.b_(h.gbP(),h.gbO(),!1)
h.cb=f.b_(h.gbP(),h.gbO(),!1)
h.cc=f.b_(h.aW,h.aX,!1)}catch(i){h.cc=h.cb=h.ca=null}},
gbP(){var s=B.c.L(this.aW,4)
return s<1?1:s},
gbO(){var s=B.c.L(this.aX,4)
return s<1?1:s},
aw(a){return this.l9(t.G.a(a))},
l9(a){var s=0,r=A.b4(t.H),q=this,p,o,n,m,l,k,j
var $async$aw=A.b5(function(b,c){if(b===1)return A.b1(c,r)
for(;;)switch(s){case 0:p=new A.U(a,A.o(a).i("U<1,2>")).gt(0),o=q.aD
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.bt.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.a8(o.cl(k,l,!1,!1,!1,m==="grime"),$async$aw)
case 4:if(c!=null)q.ew(m,l)
s=2
break
case 3:p=t.lS
j=A.L(new A.bY(new A.S(A.f(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.mU(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.a8(o.cm(j,12,!1),$async$aw)
case 7:q.c7=c
case 6:return A.b2(null,r)}})
return A.b3($async$aw,r)},
be(){var s=0,r=A.b4(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$be=A.b5(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.a8(A.aB(A.c(A.c(g.window).fetch("shaders/"+A.q(m))),f),$async$be)
case 13:l=a3
if(!A.au(l.ok)){i=A.e7("HTTP "+A.q(A.qL(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.a8(A.aB(A.c(l.text()),i),$async$be)
case 14:a.bP(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ad(c)
i=A.e7("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.jH(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ad(b)
A.c(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.b2(null,r)
case 1:return A.b1(p.at(-1),r)}})
return A.b3($async$be,r)},
jH(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ad
q===$&&A.i()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.cH("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.cH("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.cH("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eM()
i.eL()
q=i.fd
q=A.L(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.p)(q),++k){s=q[k]
o=B.bt.h(0,s)
o.toString
i.ew(s,o)}A.c(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ad(j)
A.c(v.G.console).error("shader recompile failed: "+A.q(r))}},
eL(){var s=this,r=s.av,q=s.ad
q===$&&A.i()
s.ha=A.h(r.getUniformLocation(q.c,"uTex"))
s.hb=A.h(r.getUniformLocation(q.c,"uTime"))
s.hc=A.h(r.getUniformLocation(q.c,"uFlash"))
s.hd=A.h(r.getUniformLocation(q.c,"uVignette"))
s.he=A.h(r.getUniformLocation(q.c,"uGrain"))
s.hf=A.h(r.getUniformLocation(q.c,"uDesat"))
s.hg=A.h(r.getUniformLocation(q.c,"uBloom"))
s.hh=A.h(r.getUniformLocation(q.c,"uBloomStrength"))
s.ho=A.h(r.getUniformLocation(q.c,"uNoiseOff"))
s.hr=A.h(r.getUniformLocation(q.c,"uLutMix"))
s.hk=A.h(r.getUniformLocation(q.c,"uDepth"))
s.hl=A.h(r.getUniformLocation(q.c,"uDepthViz"))
s.fe=A.h(r.getUniformLocation(q.c,"uSSAO"))
s.ff=A.h(r.getUniformLocation(q.c,"uSSAOStrength"))
s.hm=A.h(r.getUniformLocation(q.c,"uNoise"))
s.hn=A.h(r.getUniformLocation(q.c,"uNoiseOn"))
s.hp=A.h(r.getUniformLocation(q.c,"uLut"))
s.hq=A.h(r.getUniformLocation(q.c,"uLutOn"))
s.hi=A.h(r.getUniformLocation(q.d,"uTex"))
s.dt=A.h(r.getUniformLocation(q.d,"uDir"))
s.hj=A.h(r.getUniformLocation(q.c,"uBlur"))},
ew(a,b){var s,r,q,p=this
p.fd.k(0,a)
switch(a){case"bluenoise":s=p.ad
s===$&&A.i()
s=s.c
r=p.hm
r===$&&A.i()
q=p.hn
q===$&&A.i()
p.bp(s,r,q,b)
break
case"lut-gothic":s=p.ad
s===$&&A.i()
s=s.c
r=p.hp
r===$&&A.i()
q=p.hq
q===$&&A.i()
p.bp(s,r,q,b)
break
case"grime":s=p.ad
s===$&&A.i()
s=s.b
r=p.RG
r===$&&A.i()
q=p.rx
q===$&&A.i()
p.bp(s,r,q,b)
break
case"glass":s=p.ad
s===$&&A.i()
s=s.b
r=p.x2
r===$&&A.i()
q=p.xr
q===$&&A.i()
p.bp(s,r,q,b)
break
case"soft":s=p.ad
s===$&&A.i()
s=s.b
r=p.fX
r===$&&A.i()
q=p.fY
q===$&&A.i()
p.bp(s,r,q,b)
break}},
bp(a,b,c,d){var s=this.av
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shA(a){var s=A.oZ(a)
this.fP=s.a
this.fQ=s.b
this.fR=s.c},
c2(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.W(a1,14)!==0)throw A.d(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
s=a1/14|0
for(r=a0,q=r,p=q,o=a,n=o,m=n,l=0;l<s;++l){k=l*14
if(!(k<a1))return A.e(a2,k)
j=a2[k]
i=k+1
if(!(i<a1))return A.e(a2,i)
h=a2[i]
i=k+2
if(!(i<a1))return A.e(a2,i)
g=a2[i]
if(j<m)m=j
if(h<n)n=h
if(g<o)o=g
if(j>p)p=j
if(h>q)q=h
if(g>r)r=g}f=new Uint16Array(s)
for(l=0;l<s;++l){if(!(l<s))return A.e(f,l)
f[l]=l}a1=b.av
i=A.h(a1.createVertexArray())
i.toString
e=A.h(a1.createBuffer())
e.toString
d=A.h(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.ed(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.kN++
b.dd.l(0,a1,new A.jE(e,d,i,s,s,a3))
return a1},
kD(a){var s,r,q,p=this,o=p.dd.h(0,a)
if(o==null)return
p.eE()
s=p.fV
r=p.fW
if(s!==r)p.eQ(r)
s=p.av
r=p.dy
r===$&&A.i()
s.uniform1i(r,0)
r=p.dr
r===$&&A.i()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.by},
kW(a){var s,r=this.dd.ah(0,a)
if(r==null)return
s=this.av
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
eE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.de)return
c.de=!0
s=c.av
r=c.ad
r===$&&A.i()
s.useProgram(r.b)
r=c.as
r===$&&A.i()
q=c.fT
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.i()
r=c.dh
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.i()
q=c.di
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.i()
r=c.dj
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.i()
s.uniform1f(r,c.h9)
r=c.CW
r===$&&A.i()
s.uniform1f(r,c.ds)
r=c.cx
r===$&&A.i()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.i()
s.uniform1f(r,60)
r=c.db
r===$&&A.i()
q=c.fI?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.i()
s.uniform3f(q,c.dk/255*0.25,c.dl/255*0.25,c.dm/255*0.25)
q=c.fx
q===$&&A.i()
r=c.fO
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.i()
s.uniform3f(r,c.fP,c.fQ,c.fR)
r=c.go
r===$&&A.i()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.i()
s.uniform1f(r,14)
r=c.k1
r===$&&A.i()
s.uniform1f(r,c.fS)
r=c.k2
r===$&&A.i()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.i()
s.uniform1i(r,c.dg.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.dg
l=m.length
if(n<l){if(!(n<l))return A.e(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.e(o,n)
s.uniform1f(o[n],0)
continue}j=A.oZ(k.b)
m=c.bx
m===$&&A.i()
i=m?1:1+(A.pB(c.dn*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.e(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.e(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.e(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.e(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bx
r===$&&A.i()
q=r?1:1+(A.pB(c.dn*2.5,40503)*2-1)*0
c.kK=q
p=c.p3
p===$&&A.i()
s.uniform1f(p,q)
q=c.p4
q===$&&A.i()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.i()
p=c.fK?1:0
s.uniform1f(q,p)
p=c.ry
p===$&&A.i()
s.uniform1f(p,0.505)
p=c.to
p===$&&A.i()
s.uniform1f(p,1.2)
p=c.x1
p===$&&A.i()
s.uniform1f(p,0.25)
p=c.y1
p===$&&A.i()
s.uniform1f(p,2)
p=c.y2
p===$&&A.i()
s.uniform1f(p,0.45)
q=c.fJ
h=q?384:0
g=q?216:0
q=c.d9
p=q.a
if(p===B.ax){f=B.d.K(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fZ
r===$&&A.i()
s.uniform2f(r,h,g)
r=c.dD
r===$&&A.i()
q=c.h2
q===$&&A.i()
s.uniform1f(q,0)
q=c.h3
q===$&&A.i()
s.uniform3f(q,0.0015,0.005,0)
q=c.h_
q===$&&A.i()
if(q!=null)r.cs(0)
q=c.h0
q===$&&A.i()
if(q!=null)r.cs(1)
q=c.h1
q===$&&A.i()
if(q!=null)r.cs(2)
r.ct(0)
r.ct(1)
r.ct(2)
r=c.h4
r===$&&A.i()
if(c.c7==null)q=0
else{c.dE===$&&A.i()
q=3}s.uniform1i(r,q)
if(c.c7!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.c7)
r=c.dq
r===$&&A.i()
s.uniform1i(r,12)}r=c.h8
q=c.h7
p=c.h6
o=c.h5
n=0
for(;;){m=c.dE
m===$&&A.i()
if(!(n<3))break
d=m.a[n]
if(!(n<o.length))return A.e(o,n)
m=o[n]
if(m!=null)s.uniform1f(m,d.b)
if(!(n<p.length))return A.e(p,n)
m=p[n]
if(m!=null)s.uniform1f(m,d.c)
if(!(n<q.length))return A.e(q,n)
m=q[n]
if(m!=null)s.uniform1i(m,d.a)
if(!(n<r.length))return A.e(r,n)
m=r[n]
if(m!=null)s.uniform1i(m,d.d);++n}c.eQ(c.fW)
r=c.dy
r===$&&A.i()
s.uniform1i(r,0)
r=c.dr
r===$&&A.i()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eQ(a){var s
this.fV=a
s=this.dx
s===$&&A.i()
this.av.uniformMatrix4fv(s,!1,a.a)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aW=a
j.aX=b
j.ds=b/a
s=j.c8
s===$&&A.i()
r=B.c.L(a,2)
s.ay=r
q=B.c.L(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.aH(p,r,q)
r=s.e
if(r!=null)s.b.aH(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.aH(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.aH(r,384,216)
o=j.aV
n=j.bw
m=j.ca
l=j.cb
k=j.cc
if(o!=null)j.aD.aH(o,a,b)
if(n!=null)j.aD.aH(n,a,b)
if(m!=null)j.aD.aH(m,j.gbP(),j.gbO())
if(l!=null)j.aD.aH(l,j.gbP(),j.gbO())
if(k!=null)j.aD.aH(k,a,b)},
jT(a){var s,r,q,p,o,n,m
for(s=this.fM,r=this.fL,q=1;q<a;++q){if(!(q<800))return A.e(s,q)
p=s[q]
if(!(p<r.length))return A.e(r,p)
o=q-1
for(;;){if(o>=0){n=s[o]
if(!(n<r.length))return A.e(r,n)}if(!!1)break
n=o+1
if(!(o>=0))return A.e(s,o)
m=s[o]
if(!(n>=0&&n<800))return A.e(s,n)
s[n]=m;--o}n=o+1
if(!(n>=0&&n<800))return A.e(s,n)
s[n]=p}},
jS(a){var s,r,q,p,o,n,m,l
for(s=this.fN,r=this.df,q=1;q<a;++q){if(!(q<4000))return A.e(s,q)
p=s[q]
if(!(p<r.length))return A.e(r,p)
o=r[p].x
n=q-1
for(;;){if(n>=0){m=s[n]
if(!(m<r.length))return A.e(r,m)
m=r[m].x>o}else m=!1
if(!m)break
m=n+1
if(!(n>=0))return A.e(s,n)
l=s[n]
if(!(m>=0&&m<4000))return A.e(s,m)
s[m]=l;--n}m=n+1
if(!(m>=0&&m<4000))return A.e(s,m)
s[m]=p}},
kT(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d9=b4
s=b2.bz
r=0
if(s>0){for(s=b2.fN,q=0;p=b2.bz,q<p;++q)B.a.l(s,q,q)
b2.jS(p)
for(p=b2.df,o=b2.da,n=0;n<b2.bz;++n){if(!(n<4000))return A.e(s,n)
m=s[n]
if(!(m<p.length))return A.e(p,m)
l=p[m]
r=A.tE(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.df,p=b2.da,q=0;q<b2.bz;++q){if(!(q<s.length))return A.e(s,q)
l=s[q]
r=A.tE(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bz=0
for(s=b2.fM,q=0;p=b2.ce,q<p;++q)B.a.l(s,q,q)
b2.jT(p)
for(p=b2.kL,o=b2.fL,k=0,n=0;n<b2.ce;++n){if(!(n<800))return A.e(s,n)
m=s[n]
if(!(m<o.length))return A.e(o,m)
j=o[m]
i=A.oZ(0)
m=j.b
h=b2.dj
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.di
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
e=b2.dh
k=A.tH(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.ce=0
s=b2.aD
o=b2.d2
o===$&&A.i()
s.dW(o,b2.da,r)
o=b2.d3
o===$&&A.i()
s.dW(o,p,k)
b2.eE()
p=b2.av
o=b2.dy
o===$&&A.i()
p.uniform1i(o,0)
o=b2.d5
o===$&&A.i()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.L(r,14));++b2.by
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.d6
m===$&&A.i()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.L(k,14));++b2.by
m=b2.dc
if(m>0){h=b2.d4
h===$&&A.i()
s.dW(h,b2.kM,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d7
m===$&&A.i()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.dc/14|0);++b2.by}m=b2.cd
if(m!=null){a7=b2.aV
if(a7!=null)s.lA(m,a7)}a8=b2.aV
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d8
m===$&&A.i()
p.bindVertexArray(m)
a3=b2.ca
a4=b2.cb
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ad
g===$&&A.i()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.hi
g===$&&A.i()
p.uniform1i(g,0)
s.aK(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dt
g===$&&A.i()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aK(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dt,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cc
if(b2.c9>0&&a6!=null){s.aK(a6)
g=b2.ad
g===$&&A.i()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.du
g===$&&A.i()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dv
g===$&&A.i()
p.uniform1i(g,7)
g=b2.dw
g===$&&A.i()
p.uniform1f(g,0.03171953255425709)
g=b2.dz
g===$&&A.i()
p.uniform1f(g,1)
g=b2.dA
g===$&&A.i()
p.uniform1f(g,0.5)
g=b2.dB
g===$&&A.i()
p.uniform1f(g,b2.c9)
g=b2.dC
g===$&&A.i()
p.uniform2f(g,1/b2.aW,1/b2.aX)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.c8
g===$&&A.i()
b0=g.ly(a8,0.5)
s.aK(null)
s=b2.ad
s===$&&A.i()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.hg
g===$&&A.i()
p.uniform1i(g,1)
g=b2.hh
g===$&&A.i()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.hj
s===$&&A.i()
b2.bx===$&&A.i()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.hk
s===$&&A.i()
p.uniform1i(s,7)
s=b2.hl
s===$&&A.i()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.fe
s===$&&A.i()
p.uniform1i(s,11)
s=b2.ff
s===$&&A.i()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.c9>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.ha
h===$&&A.i()
p.uniform1i(h,0)
h=b2.dn+=b3;++b2.fU
s=b2.hb
s===$&&A.i()
p.uniform1f(s,h)
h=b2.ho
h===$&&A.i()
s=b2.fU
p.uniform2f(h,B.c.W(s*13,64),B.c.W(s*29,64))
s=b2.hc
s===$&&A.i()
p.uniform1f(s,0)
s=b2.hd
s===$&&A.i()
p.uniform1f(s,0)
s=b2.he
s===$&&A.i()
p.uniform1f(s,0)
s=b2.hf
s===$&&A.i()
p.uniform1f(s,0)
s=b2.d9
if(s.a===B.P)b1=0*(1-s.b/1)
else b1=0
s=b2.hr
s===$&&A.i()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.mT.prototype={
$0(){var s=this.a.ad
s===$&&A.i()
return s.b},
$S:58}
A.mU.prototype={
$1(a){return this.a.h(0,A.D(a))},
$S:24}
A.nN.prototype={
gk6(){var s=this.b
s===$&&A.i()
return s},
eM(){var s,r,q,p,o,n,m=this,l=m.k7(),k=m.a
m.c=A.a(k.getAttribLocation(l,"aPos"))
m.d=A.a(k.getAttribLocation(l,"aColor"))
m.e=A.a(k.getAttribLocation(l,"aAlpha"))
m.f=A.a(k.getAttribLocation(l,"aNormal"))
m.r=A.a(k.getAttribLocation(l,"aUv"))
A.a(k.getAttribLocation(l,"aModelRow0"))
A.a(k.getAttribLocation(l,"aModelRow1"))
A.a(k.getAttribLocation(l,"aModelRow2"))
A.a(k.getAttribLocation(l,"aModelRow3"))
A.a(k.getAttribLocation(l,"aMaterialTint"))
m.as=A.h(k.getUniformLocation(l,"uEye"))
m.at=A.h(k.getUniformLocation(l,"uFwd"))
m.ax=A.h(k.getUniformLocation(l,"uUp"))
m.ay=A.h(k.getUniformLocation(l,"uRight"))
m.ch=A.h(k.getUniformLocation(l,"uScale"))
m.CW=A.h(k.getUniformLocation(l,"uAspect"))
m.cx=A.h(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.h(k.getUniformLocation(l,"uDepthFar"))
m.db=A.h(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.h(k.getUniformLocation(l,"uModel"))
m.dy=A.h(k.getUniformLocation(l,"uInstanced"))
m.fr=A.h(k.getUniformLocation(l,"uFog"))
m.fx=A.h(k.getUniformLocation(l,"uLight"))
m.fy=A.h(k.getUniformLocation(l,"uLightColor"))
m.go=A.h(k.getUniformLocation(l,"uFogStart"))
m.id=A.h(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.h(k.getUniformLocation(l,"uAmbient"))
m.k2=A.h(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.h(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.H(s)
r=m.ok
B.a.H(r)
q=m.p1
B.a.H(q)
p=m.p2
B.a.H(p)
for(o=0;o<4;++o){n=""+o
B.a.k(s,A.h(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.k(r,A.h(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.k(q,A.h(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.k(p,A.h(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.h(k.getUniformLocation(l,"uFlicker"))
m.p4=A.h(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.h(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.h(k.getUniformLocation(l,"uWall"))
m.rx=A.h(k.getUniformLocation(l,"uWallOn"))
m.ry=A.h(k.getUniformLocation(l,"uWallMid"))
m.to=A.h(k.getUniformLocation(l,"uWallAmt"))
m.x1=A.h(k.getUniformLocation(l,"uWallScale"))
m.x2=A.h(k.getUniformLocation(l,"uGlass"))
m.xr=A.h(k.getUniformLocation(l,"uGlassOn"))
m.y1=A.h(k.getUniformLocation(l,"uGlassGain"))
m.y2=A.h(k.getUniformLocation(l,"uGlassFog"))
m.fX=A.h(k.getUniformLocation(l,"uSoft"))
m.fY=A.h(k.getUniformLocation(l,"uSoftOn"))
m.fZ=A.h(k.getUniformLocation(l,"uInternal"))
m.h_=A.h(k.getUniformLocation(l,"uLightProj0"))
m.h0=A.h(k.getUniformLocation(l,"uLightProj1"))
m.h1=A.h(k.getUniformLocation(l,"uLightProj2"))
m.kO=A.h(k.getUniformLocation(l,"uShadow0"))
m.kP=A.h(k.getUniformLocation(l,"uShadow1"))
m.kQ=A.h(k.getUniformLocation(l,"uShadow2"))
m.h2=A.h(k.getUniformLocation(l,"uShadowCasters"))
m.dq=A.h(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dr=A.h(k.getUniformLocation(l,"uStaticMaterial"))
m.h3=A.h(k.getUniformLocation(l,"uShadowBias"))
m.h4=A.h(k.getUniformLocation(l,"uMaterialCount"))
s=m.h5
B.a.H(s)
r=m.h6
B.a.H(r)
q=m.h7
B.a.H(q)
p=m.h8
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.h(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.h(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.h(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.h(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dq,12)},
cE(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.ed(56)},
ed(a){var s=this,r=s.c
r===$&&A.i()
s.bq(r,3,a,0)
r=s.f
r===$&&A.i()
s.bq(r,3,a,12)
r=s.d
r===$&&A.i()
s.bq(r,4,a,24)
r=s.e
r===$&&A.i()
s.bq(r,1,a,40)
r=s.r
r===$&&A.i()
s.bq(r,3,a,44)},
bq(a,b,c,d){var s=this.a
A.aM(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
k7(){return this.gk6().$0()}}
A.nc.prototype={
cs(a){return null},
ct(a){return null}}
A.b.prototype={
U(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
a9(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
X(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bv(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aS(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga5(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kH.prototype={
lT(a){var s,r,q,p,o,n=B.p.ba(a.C(),null)
this.a.fc(n)
s=A.c(A.c(v.G.window).localStorage)
r=A.bz(s.getItem("quarantine.save.active"))
q=A.bz(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
ls(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.c(A.c(v.G.window).localStorage)
r=A.bz(s.getItem("quarantine.save.active"))
q=A.bz(s.getItem("quarantine.save.previous"))
p=this.es(r,a)
if(p!=null)return new A.dw(p,null)
o=this.es(q,a)
if(o!=null)return new A.dw(o,"recovered previous save")
if(r==null)return B.fF
return B.fE}catch(n){return B.fD}},
es(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.fc(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ad(q) instanceof A.I)return null
else throw q}}}
A.hL.prototype={
iE(a,b,c,d,e){if(this.a.length===0)throw A.d(B.dq)
if(this.b<0)throw A.d(B.d7)},
C(){var s,r=this,q=r.d
q=q==null?null:A.am(q,t.i)
s=t.z
return A.cg(A.V(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bD.prototype={
A(){return"EndingKind."+this.b}}
A.kZ.prototype={}
A.e6.prototype={
C(){var s=t.N
return A.V(["kind",this.a.b],s,s)}}
A.l1.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:60}
A.it.prototype={
C(){var s,r=this,q=t.N,p=A.x(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.V(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
l1(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.a9(0,new A.b(0,1.3499999999999999,0))
return!new A.hw(s,s.U(0,new A.b(0,1.2000000000000002,0))).hz(a,r)}}
A.mz.prototype={
C(){return A.jQ(this.a)}}
A.ek.prototype={
C(){return A.V(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.n3.prototype={
fc(a){var s,r,q,p,o,n,m,l=B.p.bs(a,null),k=t.f
if(!k.b(l))throw A.d(B.dv)
s=t.N
r=t.z
q=A.aX(l,s,r)
p=q.h(0,"version")
if(A.aL(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ae("unsupported save version "+A.q(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.db)
k=A.aX(n,s,r)
return A.rw(A.aX(m,s,r),k,2)}}
A.dw.prototype={}
A.de.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hR.prototype={}
A.lm.prototype={}
A.ll.prototype={
gam(){var s=this.d
return new A.lm(s.a,s.b)},
gdM(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.V(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.V(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.V(["entryCount",m.e.b.a],k,t.S)
p=A.r9(m.c).C()
o=m.r
n=o.c
return new A.mz(A.jQ(A.V(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.V(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
ka(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.aw(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bW(B.dE)}if(n<a)this.bW(B.dF)},
is(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cz(a)&&s.ir(b)},
lu(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cd)r.c=Math.min(1,r.c+0.1)},
iq(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.uZ(j,A.am(i.d,h).length)
if(a===B.c7)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.K(r)
A.uY(j,new A.R(r,q.i("t(1)").a(new A.ln(k)),q.i("R<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.ec,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aB(j.a/1*3)
B.a.k(r.r,new A.el(q.a,a,b))
m=r.a
A.v9(m,q.a,n,k.b,A.am(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.ig(B.ez)
s.r.ku(o,c)
l=B.d.aB(j.b/1*6)
if(l>0)r.cz(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aE(i,A.o(i).i("aE<2>")).R(0,new A.lo())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bW(B.dH)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bW(B.dG)},
bW(a){var s=this;++s.y
B.a.k(s.w,new A.hR())
B.a.k(s.x,A.v_(A.xt(a),s.b,s.y-1))}}
A.ln.prototype={
$1(a){t.Y.a(a)
return a.e.length!==0&&!new A.nd().im(this.a.c,a.a)},
$S:61}
A.lo.prototype={
$1(a){return t.L.a(a).e},
$S:25}
A.kw.prototype={
dX(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.l("authored/runtime room or portal count mismatch"))
for(r=t.Z,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.p)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.d(A.l("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.e(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.l(n+" origin.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.e(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.l(n+" origin.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.e(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.l(n+" origin.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.e(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.l(n+" size.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.e(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.l(n+" size.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.e(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.l(n+" size.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.l("window count mismatch for "+n))
for(n=A.K(j),i=n.i("t(1)"),n=n.i("R<1>"),f=0;f<l.length;l.length===k||(0,A.p)(l),++f){e=l[f]
d=A.ec(new A.R(j,i.a(new A.kB(e)),n),r)
if(d==null)throw A.d(A.l("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.k(A.l(c+" offset mismatch: "+A.q(h)+" != "+A.q(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.k(A.l(c+a+A.q(h)+" != "+A.q(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.k(A.l(c+a0+A.q(h)+" != "+A.q(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.p)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.l("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.l("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a+A.q(n)+" != "+A.q(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a0+A.q(n)+" != "+A.q(l)))
if(o.f!=m.at)throw A.d(A.l("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gbi(a1).b!==B.a.gbi(s).b)throw A.d(A.l("stair manifest mismatch"))}}
A.kx.prototype={
$1(a){return A.uL(a,this.a)},
$S:63}
A.ky.prototype={
$1(a){var s=this.a,r=A.jV(a,"portal"),q=A.d2(r,"id"),p=A.d2(r,"a"),o=A.d2(r,"b"),n=A.he(r,"width"),m=A.he(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.D(r.h(0,"doorKit")):null
return new A.dX(q,p,o,n*s,m*s,l)},
$S:64}
A.kz.prototype={
$1(a){var s=A.jV(a,"stair")
A.d2(s,"id")
return new A.dZ(A.d2(s,"portalId"))},
$S:65}
A.kA.prototype={
$1(a){return typeof a=="string"?a:A.hb("exterior cell")},
$S:26}
A.kB.prototype={
$1(a){return t.Z.a(a).a===this.a.a},
$S:13}
A.dY.prototype={}
A.kC.prototype={
$1(a){var s=this.a,r=A.jV(a,"window"),q=A.d2(r,"id"),p=A.he(r,"offset")
A.he(r,"sill")
return new A.e_(q,p*s,A.he(r,"width")*s,A.he(r,"height")*s)},
$S:68}
A.e_.prototype={}
A.dX.prototype={}
A.dZ.prototype={}
A.p2.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:14}
A.hw.prototype={
lG(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.K(s)
q=new A.R(s,r.i("t(1)").a(new A.kK(e)),r.i("R<1>"))
p=!q.gt(0).m()?null:q.gao(0)
if(p==null){n.d=null
return}if(!(n.bV(b,p.f)&&a==="hall"))o=n.bV(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.j6(p,B.d.K(d,0,1))},
ld(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.eB(f,c,d)
s=g.jg(a,b,c,d)
if(s!=null){g.d=s
return g.eB(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.kn(Math.sqrt(r*r+q*q)/0.08))
o=d.X(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.f2(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hJ(a,n)
n=i==null?n:i
h=g.f2(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hJ(a,n)
n=i==null?n:i}g.bY(m)
return new A.ih(m,n)},
jg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bV(c,l.f)&&n
j=q&&this.bV(c,l.r)&&o
if(k||j)return new A.j6(l,k?0:1)}return null},
eB(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a9(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.K(a.b+o/p,0,1)
n=A.rJ(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bY(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ih(n,k)},
bV(a,b){var s=a.a9(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
f2(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fF(c,!1)
s=c.U(0,d)
this.bY(s)
if(this.hz(a,b)){this.bY(c)
return new A.fF(c,!0)}return new A.fF(s,!1)},
bY(a){var s=a.a9(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.U(0,new A.b(0,1.2000000000000002,0))},
hz(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aU(m)
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
return!this.jV(a,m,s)},
hJ(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aU(k)
for(r=k.a,q=a.aq(r),p=J.O(q.a),q=new A.M(p,q.b,q.$ti.i("M<1>"));q.m();){o=p.gp()
n=o.bd(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.f6(k,o,s)&&this.j8(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jV(a,b,c){var s,r,q
for(s=a.aq(b.a),r=J.O(s.a),s=new A.M(r,s.b,s.$ti.i("M<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.f6(b,q,c))return!0}return!1},
f6(a,b,c){var s,r,q,p=a.a,o=b.an(p),n=b.a6(p)
p=o===B.i||o===B.k
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
j8(a,b,c){var s,r=this
switch(b.an(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
skf(a){this.a=t.bf.a(a)}}
A.kK.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:70}
A.ih.prototype={}
A.fF.prototype={}
A.j6.prototype={}
A.f4.prototype={}
A.lx.prototype={
ku(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.e(B.A,r)
s=B.A[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
io(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.c}return r},
ip(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.d}return r},
C(){return A.V(["landedCount",this.b],t.N,t.z)}}
A.n_.prototype={
iL(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.y()
o.c=new A.hZ(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.p)(n),++q){p=n[q]
r.l(0,p.a,o.ee(p))}},
lt(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o)p.kW(r[o])
s.l(0,a,n.ee(m))},
ee(a){var s=A.tU(this.a,a),r=this.b,q=A.f([r.c2(s.a,1),r.c2(s.b,2),r.c2(s.c,0)],t.t),p=s.d
if(!B.u.gI(p))q.push(r.c2(p,0))
return q},
hZ(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.C
s=l.a
r=A.ar([s],t.N)
for(n=n.aq(s),q=J.O(n.a),n=new A.M(q,n.b,n.$ti.i("M<1>"));n.m();){p=q.gp()
o=p.bd(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.k(0,o)}return r},
kC(a,b){var s,r,q,p,o=this,n=o.hZ(a),m=o.b,l=o.c
l===$&&A.i()
l=t.b3.a(l.hU(n,b))
s=t.f0
m.dg=l.length<=4?A.am(l,s):A.am(A.nl(l,0,A.dR(4,"count",t.S),A.K(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)m.kD(r[p])}}}
A.aO.prototype={}
A.l3.prototype={
gl4(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a3(A.f([r,q,p,o,n,m],t.n),new A.l4())&&o>=r&&n>=q&&m>=p}}
A.l4.prototype={
$1(a){return isFinite(A.d0(a))},
$S:5}
A.ly.prototype={
E(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.W(s,3)!==0}else s=!0
if(s)throw A.d(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gl4())throw A.d(A.w("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.R(A.f([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.lA()))throw A.d(A.w("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.d(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.d(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.lA.prototype={
$1(a){return!isFinite(A.d0(a))},
$S:5}
A.lz.prototype={
u(a,b,c,d,e,f,g){var s=this
s.b4(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.b4(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.b4(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.b4(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.b4(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.b4(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aO(a,b,c,m,n,o,0,0,p),r=new A.aO(g,h,i,m,n,o,1,1,p)
this.b5(s,new A.aO(d,e,f,m,n,o,1,0,p),r)
this.b5(s,r,new A.aO(j,k,l,m,n,o,0,1,p))},
b5(a,b,c){var s=this,r=s.b
B.a.k(r,s.cM(a))
B.a.k(r,s.cM(b))
B.a.k(r,s.cM(c))},
cM(a){var s,r,q=B.a.aZ(A.f([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
ki(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.d(A.l("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.ly(A.am(g,t.hZ),new Uint16Array(A.a3(this.b)),new A.l3(s,r,q,p,o,n))
h.E()
return h}}
A.db.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.l5.prototype={
ko(a){var s
switch(a.a){case 0:s=A.ar(["front","street","opposite-house"],t.N)
break
case 1:s=A.ar(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.ar(["side-boundary","rear-service"],t.N)
break
case 3:s=A.ar(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.ar(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kp(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b2
break A}if("kitchen"===a||"cellar"===a){s=B.cP
break A}if("bathroom"===a){s=B.cQ
break A}if("spare-room"===a){s=B.cR
break A}s=B.b2
break A}return this.ko(s)}}
A.cX.prototype={}
A.oP.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:71}
A.dc.prototype={
A(){return"FocusKind."+this.b}}
A.e8.prototype={}
A.n0.prototype={}
A.os.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:72}
A.or.prototype={
$1(a){return t.Z.a(a).b===this.a},
$S:13}
A.cW.prototype={}
A.ex.prototype={}
A.lv.prototype={
iS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.lM(),a4=this.b,a5=A.ax(a4,!0,t.Y)
B.a.H(a4)
s=A.f([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.p)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.f([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.p)(i),++g){f=i[g]
j.push(new A.aU(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.f([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.p)(h),++g){d=h[g]
i.push(new A.aY(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.f([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.p)(e),++g){b=e[g]
h.push(new A.bb(b.a,b.b,a3.$1(b.c)))}s.push(new A.aG(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.ax(a4,!0,t.Q)
B.a.H(a4)
s=A.f([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bc(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cP(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
jk(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
if(q.a2(n))throw A.d(A.l("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){m=s[p]
n=m.a
if(q.a2(n))throw A.d(A.l("duplicate portal "+n))
q.l(0,n,m)}},
k0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.d(A.l("3D room overlap: "+n.a+" and "+m.a))}},
k_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.f5(o,i,h,g,f,e)
a5.ea(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.l(l+" references invalid portal "+d))
i=c.an(l)
h=c.a6(l)
g=c.w
f=c.x
a5.f5(o,i,h,g,0,f)
a5.ea(a6,l,c.an(l),c.a6(l),c.a6(l)+g,0,f)}}for(s=new A.U(a6,a6.$ti.i("U<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.bZ(a)
r.Y(a,new A.lN())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.l("overlapping apertures on "+b.a))}}},
f5(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.k
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
ea(a,b,c,d,e,f,g){J.hi(t.gz.a(a).lr(b+":"+c.b,new A.lL()),new A.fV([d,e,f,g]))},
aU(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.io(q),s.b+r.ip(q),s.c)},
aq(a){var s=this.c,r=A.K(s)
return new A.R(s,r.i("t(1)").a(new A.lO(a)),r.i("R<1>"))},
lq(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.aw(a,"roomId","not a portal endpoint"))
r=this.aU(o)
q=b.a6(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.an(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
glS(){return B.a.bA(this.b,0,new A.lP(),t.S)},
hH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.H
s=A.f([new A.bx(a,B.H)],t.bM)
r=A.ar([a],t.N)
for(q=this.e,p=t.Q;s.length!==0;){o=B.a.lx(s,0)
n=o.a
m=o.b
for(l=this.aq(n),k=J.O(l.a),l=new A.M(k,l.b,l.$ti.i("M<1>"));l.m();){j=k.gp()
i=j.bd(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.L(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.L(m,p)
h.push(j)
B.a.k(s,new A.bx(i,h))}}}return B.H}}
A.lM.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:73}
A.lN.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:112}
A.lL.prototype={
$0(){return A.f([],t.a3)},
$S:75}
A.lO.prototype={
$1(a){var s
t.Q.a(a)
s=this.a
return a.b===s||a.c===s},
$S:76}
A.lP.prototype={
$2(a,b){return A.a(a)+t.Y.a(b).e.length},
$S:77}
A.l2.prototype={}
A.nd.prototype={
im(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a3(s,new A.ne())}else s=!1
return s}}
A.ne.prototype={
$1(a){return t.Z.a(a).w},
$S:13}
A.lB.prototype={
f9(a){return B.a.cf(this.d,new A.lC(a),new A.lD(a))},
dX(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="inventory placement ",a9=a7.a
if(a9!==1)throw A.d(A.l("unsupported house inventory schema "+a9))
a9=a7.b
if(a9!=="assets/house/house.json")throw A.d(A.l("inventory source changed: "+a9))
a9=a7.c
if(Math.abs(a9-1.5)>0.0001)throw A.d(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a5(s)
for(q=a7.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.d(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.l("invalid bounds for inventory asset "+m))}j=A.a5(s)
i=A.a5(s)
for(s=a7.e,q=s.length,p=b0.e,o=0;o<s.length;s.length===q||(0,A.p)(s),++o){h=s[o]
m=h.a
if(!j.k(0,m))throw A.d(A.l("duplicate inventory placement "+m))
l=h.b
g=p.h(0,l)
if(g==null)throw A.d(A.l(a8+m+" references "+l))
n=a7.f9(h.c)
k=h.y
if(k<0||!isFinite(k))throw A.d(A.l("invalid clearance for "+m))
f=h.e
if(f!=null&&!i.k(0,l+":"+f))throw A.d(A.l("duplicate inventory socket "+l+":"+f))
l=h.f
f=l.a
e=f.a*a9
d=f.b*a9
f=f.c*a9
c=n.f
b=c.b
c=c.a
a=l.c
a0=l.b.b*3.141592653589793/180
a1=Math.abs(Math.cos(a0))
a2=Math.abs(Math.sin(a0))
l=Math.abs(b.a-c.a)*0.5*(a.a*a9)
a3=Math.abs(b.c-c.c)*0.5*(a.c*a9)
a4=l*a1+a3*a2
a3=l*a2+a3*a1
a5=a.b*a9
a6=0.43+k
l=-a6
if(!(e-a4<l)){k=g.c
l=e+a4>k.a+a6||f-a3<l||f+a3>k.c+a6||d+b.b*a5>k.b+a6||d+c.b*a5<l}else l=!0
if(l)throw A.d(A.l(a8+m+" escapes "+g.a))}}}
A.lC.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:78}
A.lD.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:27}
A.c0.prototype={}
A.cl.prototype={}
A.lV.prototype={}
A.lU.prototype={}
A.p1.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:14}
A.c3.prototype={}
A.hZ.prototype={
hU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.R.a(a)
s=A.f([],t.bz)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.p)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.c3(new A.b(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.jO(j),0.06))}}B.a.Y(s,new A.lE(b))
return A.nl(s,0,A.dR(4,"count",t.S),t.f0).bg(0)},
jO(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.lE.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.a9(0,s).gq(0),b.a.a9(0,s).gq(0))},
$S:80}
A.eZ.prototype={
A(){return"Floor."+this.b}}
A.cH.prototype={
A(){return"Facing."+this.b}}
A.aU.prototype={}
A.bc.prototype={
bd(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
an(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.aw(a,"roomId","not an endpoint of "+s.a))},
a6(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.aw(a,"roomId","not an endpoint of "+s.a))}}
A.aY.prototype={}
A.bb.prototype={}
A.cF.prototype={}
A.cP.prototype={}
A.aG.prototype={}
A.lG.prototype={
kG(a){return B.a.cf(this.c,new A.lH(a),new A.lI(a))},
lP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.l("soundscape source changed: "+f))
f=t.N
s=A.a5(f)
f=A.x(f,t.gB)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){m=r[p]
l=m.a
if(!s.k(0,l))throw A.d(A.l("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.d(A.l("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.d(A.l("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.d(A.l("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gI(k)||k.gal().R(0,new A.lJ()))throw A.d(A.l("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.d(A.l("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.d(A.l("sound emitter "+l+" escapes "+j.a))}}}
A.lH.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:81}
A.lI.prototype={
$0(){return A.k(A.l("sound emitter missing: "+this.a))},
$S:27}
A.lJ.prototype={
$1(a){return B.b.dT(A.D(a)).length===0},
$S:4}
A.c_.prototype={}
A.lw.prototype={
cW(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.aw(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.ey}q=A.f([],t.iG)
p=B.d.aE(r)+1
o=B.d.aE(b)
for(n=p;n<=o;++n){m=B.c.W(n,24)
B.a.k(q,new A.f3("tick"))
if(B.c.W(m,6)===0)B.a.k(q,new A.f3("chime"))}l.b=b
return q}}
A.f3.prototype={}
A.lF.prototype={
cW(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.aw(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.ex}q=A.f([],t.dL)
for(p=B.d.aE(r)+1;p<=B.d.aE(b);++p){o=B.c.W(p,24)
if(B.c.W(o,4)===2)B.a.k(q,B.dZ)
if(B.c.W(o,3)===1)B.a.k(q,B.e_)
if(B.c.W(o,8)===5)B.a.k(q,B.e0)}n.b=b
return q}}
A.eb.prototype={}
A.p0.prototype={
$1(a){return typeof a!="number"},
$S:14}
A.lK.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.U(s,A.o(s).i("U<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.V(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.U(s,A.o(s).i("U<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.V(["lit",o.a,"examined",o.b],m,r))}return A.V(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
kd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a5(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)d.k(0,s[q].a)
r=A.a5(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.p)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l)r.k(0,n[l].a)
e=A.a5(e)
for(q=0;q<p.length;p.length===n||(0,A.p)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.qA(new A.ah(o,A.o(o).i("ah<1>")),d)){d=f.b
if(A.qA(new A.ah(d,A.o(d).i("ah<1>")),r)){d=f.c
e=!A.qA(new A.ah(d,A.o(d).i("ah<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.dl)
e=f.d
if(e<0||e>2)A.k(B.d3)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.p)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.p)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.p)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.p)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.fj.prototype={
C(){return A.V(["open",this.a,"locked",this.b],t.N,t.y)}}
A.fb.prototype={
C(){return A.V(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.kY.prototype={
$1(a){return this.a.v(0,A.D(a))},
$S:4}
A.cI.prototype={
A(){return"Hand."+this.b}}
A.nI.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
e5(a,b){var s,r,q,p,o=A.f([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.ic.prototype={
C(){var s,r,q,p=t.N,o=A.x(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.t[r]
o.l(0,q,s.h(0,q))}return A.V(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.S(B.t,t.ej.a(new A.mb(this)),t.dD).aZ(0," \xb7 ")}}
A.ma.prototype={
$2(a,b){return new A.P(A.D(a),A.D(b),t.gc)},
$S:82}
A.mb.prototype={
$1(a){return this.a.a.h(0,A.D(a))},
$S:24}
A.bm.prototype={
C(){var s,r,q,p=this,o=A.f([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.V(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.lX.prototype={
br(a){t.G.a(a)
return a.a===5&&B.a.a3(B.t,new A.m3(this,a))},
eb(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.br(b))return null
s=this.e++
r=new A.bm(s,a,A.f([A.m9(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
d_(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.br(b))return!1
B.a.k(s.c,A.m9(b,c,B.Z))
return!0},
k9(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.br(b))return!1
s.r=A.m9(b,0,B.bd)
return!0},
ig(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a2(p)&&!B.a.v(s,p))B.a.k(s,p)}},
lQ(a){var s
if(!this.b.a2(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.L(n,A.o(n).c)
B.a.a0(n)
s=A.f([],t.bV)
for(r=q.b,r=new A.an(r,r.r,r.e,A.o(r).i("an<2>"));r.m();)s.push(r.d.C())
return A.V(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.m3.prototype={
$1(a){var s
A.D(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:4}
A.kD.prototype={
d0(a,b){if(a.a===B.a1&&!a.d)return new A.mv(b,B.bB)
return new A.m7(b,a.d,a.e,B.bB)},
kx(a){return this.d0(a,null)}}
A.e0.prototype={}
A.kE.prototype={
bL(a){var s,r=a==null?null:B.b.dT(a).toLowerCase(),q=r==="next"
if(q||r==="auto")return new A.e0(B.a1,q,r==="auto",!1,null)
s=r!=null&&r!=="legacy"
return new A.e0(B.a0,!1,!1,s,s?"unknown renderer query":null)}}
A.m8.prototype={}
A.m7.prototype={
gb9(){var s=this.b
s=s==null?null:s.gb9()
return s==null?A.mW("legacy",A.f([],t.s),this.c,this.d,"legacy"):s},
aL(){if(this.e===B.bC)throw A.d(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aL()
this.e=B.v},
aG(a,b){var s
if(a<=0||b<=0)throw A.d(A.w("legacy surface size must be positive",null))
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aG(a,b)},
aI(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.p.ba(A.V(["backend","legacy","interpolation",0,"facts",A.jQ(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aI(a)},
aY(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.p.ba(A.V(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aY(a)}}
A.mw.prototype={}
A.mv.prototype={
gb9(){var s=this.b
s=s==null?null:s.gb9()
return s==null?A.mW("next",A.f([],t.s),!1,null,"safe"):s},
aL(){if(this.c===B.bC)throw A.d(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aL()
this.c=B.v},
aG(a,b){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aG(a,b)},
aI(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a2){p=q==null
if(p||!q.gcZ()){if(s.c!==B.a2)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.v
if(!p)q.hL()}p=s.c
if(p===B.a2)return}if(p!==B.v)A.k(A.l(r))
B.p.ba(A.V(["backend","next","interpolation",0,"facts",A.jQ(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcZ()){if(s.c!==B.v)A.k(A.l(r))
s.c=B.a2
q.hB()
return}q.aI(a)}},
aY(a){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
B.p.ba(A.V(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aY(a)}}
A.mx.prototype={
km(a,b){var s,r,q,p,o,n,m
a.E()
s=B.aQ.bL(a)
r=A.f([a.a,"webgl2"],t.s)
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
B.a.a0(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.p)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.y)r.push("disjoint-timer-query")
if(a.z)r.push("float-render-target")
if(a.Q)r.push("half-float-render-target")
if(a.as)r.push("context-loss")
return r}}
A.fo.prototype={
A(){return"RendererBackendKind."+this.b}}
A.du.prototype={
A(){return"RendererBackendState."+this.b}}
A.mX.prototype={}
A.iC.prototype={}
A.mV.prototype={
iK(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w],r=0;r<4;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.w("renderer provenance values must be non-empty",null))}},
C(){var s,r,q,p=this,o=A.x(t.N,t.z)
o.l(0,"backend",p.a)
o.l(0,"profile",p.b)
o.l(0,"buildId",p.c)
o.l(0,"capabilities",p.d)
s=p.e
r=s!=null
o.l(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null)
o.l(0,"fallback",p.x)
q=p.y
if(q!=null)o.l(0,"fallbackReason",q)
if(r)o.l(0,"rendererSha",s)
s=p.f
if(s!=null)o.l(0,"gameSha",s)
s=p.r
if(s!=null)o.l(0,"sdkVersion",s)
s=p.w
if(s!=null)o.l(0,"lockfileDigest",s)
return o}}
A.bd.prototype={
A(){return"SleepQuality."+this.b}}
A.b_.prototype={
A(){return"SleepLocation."+this.b}}
A.el.prototype={}
A.kP.prototype={
cz(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
ir(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.f([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
i.push(A.V(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.V(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kQ.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:83}
A.kR.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:84}
A.i2.prototype={
A(){return"InteractionType."+this.b}}
A.dE.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.nM.prototype={}
A.dD.prototype={}
A.hB.prototype={}
A.lQ.prototype={}
A.lS.prototype={
e0(){var s,r,q,p=t.r,o=A.f([],p)
for(s=this.a.b,s=new A.an(s,s.r,s.e,A.o(s).i("an<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.f(o.slice(0),p)
B.a.Y(p,new A.lT())
return p},
kt(a,b){var s,r,q,p,o,n=b.b
if(n.gI(n))return B.hF
s=t.N
r=A.a5(s)
q=A.a5(s)
for(s=n.gS(),s=s.gt(s),p=a.c;s.m();){o=s.gp()
if(B.a.gN(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dD(B.a9,r)
s=r.a
o=B.a.gN(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gN(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dD(B.cg,r)
return new A.dD(B.aO,r)},
jG(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hB(e,!1,B.hE,null)
s=p.d===c
r=this.kt(p,d)
q.lQ(e)
return new A.hB(e,s,r,r.a===B.a9&&s?'The world says "'+d.c+'". The entry says "'+B.a.gN(p.c).n(0)+'".':null)},
ky(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a9)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.lQ(B.a.gN(s.c).n(0)+" but "+A.q(a.f))}}
A.lT.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:15}
A.bF.prototype={
A(){return"RuptureStep."+this.b}}
A.n1.prototype={}
A.c5.prototype={}
A.n2.prototype={
ge6(){var s=B.ap.h(0,this.a)
return s==null?0:s},
iu(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bn
r=A.qo(b)
s=q.c
B.a.H(s)
B.a.J(s,r)
B.a.H(q.d)
q.a=B.P
q.b=0
q.e=!1
return A.f([B.cD],t.e_)},
kb(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bn
s=A.f([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.ap.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.I)l.jX(s)
p=l.b
o=B.ap.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.c5())
if(q===B.I){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cC)}else{p=q.a+1
if(!(p<7))return A.e(B.bl,p)
l.a=B.bl[p]
l.b=0
B.a.k(s,new A.c5())}}}return A.am(s,t.k8)},
C(){var s=this,r=t.N
return A.V(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.am(s.c,r),"extinguishedMantles",A.am(s.d,r),"completed",s.e],r,t.z)},
jX(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.K(B.d.aE(l.b/l.ge6()*A.am(s,r).length),0,A.am(s,r).length)
p=l.d
for(;;){o=A.ax(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.ax(s,!1,r)
o.$flags=3
n=o
o=A.ax(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.e(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.c5())}}}
A.hS.prototype={
gbk(){var s=this.b
if(s<6||s>18)return 0
return B.d.K((s-6)/12,0,1)}}
A.oT.prototype={
$1(a){var s=B.c.bZ(this.a,a)&255
return B.c.K(B.d.aB(s+((B.c.bZ(this.b,a)&255)-s)*this.c),0,255)},
$S:86}
A.ni.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.eo(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.U(s,A.o(s).i("U<1,2>")).gt(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.k5(q,r.b))}s=A.eo(g.r)
q=A.eo(g.w)
p=A.eo(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.U(n,A.o(n).i("U<1,2>")).gt(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.f([],m)
for(i=J.O(l.b);i.m();){h=i.gp()
j.push(A.V(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.V(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
k5(a,b){var s,r=A.eo(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.eo(q.bc(0,new A.nj(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gM(s))r.l(0,"_ambient",A.eo(s.bc(0,new A.nk(),t.S,t.z)))
return r}}
A.nj.prototype={
$2(a,b){return new A.P(A.a(a),t.ey.a(b).C(),t.iI)},
$S:87}
A.nk.prototype={
$2(a,b){return new A.P(A.a(a),t.bR.a(b).C(),t.iI)},
$S:88}
A.dB.prototype={
C(){return A.V(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dA.prototype={
C(){return A.V(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fB.prototype={
C(){var s=t.N
return A.V(["field",this.a,"value",this.b],s,s)}}
A.nn.prototype={
bF(){var s=0,r=A.b4(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bF=A.b5(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a8(A.aB(A.c(A.c(v.G.window).fetch("res/text.json")),t.m),$async$bF)
case 6:n=b
s=7
return A.a8(A.aB(A.c(n.text()),t.N),$async$bF)
case 7:m=b
l=A.yJ(m)
j=J.aV(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aV(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aV(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aV(l,"documents")
j.toString
i.a(j)
j=J.aV(l,"street")
j.toString
i.a(j)
j=J.aV(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aV(l,"nights")
j.toString
i.a(j)
j=J.aV(l,"endings")
j.toString
o.w=i.a(j)
j=J.aV(l,"records")
j.toString
i.a(j)
j=J.aV(l,"cues")
j.toString
i.a(j)
j=J.aV(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ad(g)
j=A.q(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.b2(null,r)
case 1:return A.b1(p.at(-1),r)}})
return A.b3($async$bF,r)},
hY(a){var s,r,q,p=this.a
p===$&&A.i()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gO().dY(0,new A.no())
r=p.$ti
q=t.N
q=A.x(q,q)
q.k8(new A.cn(p,r.i("P<m,m>(1)").a(new A.np()),r.i("cn<1,P<m,m>>")))
return q}return null},
i0(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.i()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aN(p)||o!==B.d.aN(o))return n
return new A.dB(B.d.aN(p),B.d.aN(o))},
i_(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.i()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aN(p)||typeof o!="string"||typeof n!="string")return m
return new A.dA(B.d.aN(p),o,n)},
lR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.a,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.i()
a7=new A.U(a7,A.o(a7).i("U<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gO(),o=o.gt(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.mB(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gO(),m=m.gt(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.D(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.x(a,r)
for(m=n.$ti.i("cK<1>"),l=new A.cK(n,n.r,n.e,m);l.m();){i=l.d
g=b.i0(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.x(a,s)
for(m=new A.cK(n,n.r,n.e,m);m.m();){l=m.d
e=b.i_(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.i()
a7=new A.U(a7,A.o(a7).i("U<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.f([],s)
for(m=J.O(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fB(A.D(c.h(0,"field")),A.D(c.h(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.ni(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.no.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:89}
A.np.prototype={
$1(a){t.d7.a(a)
return new A.P(A.D(a.a),A.D(a.b),t.gc)},
$S:90}
A.ke.prototype={
e3(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.c(v.G.window).setTimeout(A.a6(new A.kf(this)),7000))}}
A.kf.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:26}
A.kG.prototype={
dU(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.kT.prototype={
iF(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.N(a,i,"door-speaker",j)
k.b!==$&&A.y()
k.b=s
r=A.N(a,i,"door-line",j)
k.c!==$&&A.y()
k.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(h.appendChild(s))
A.c(h.appendChild(r))
r=A.N(a,i,"door-cite-list",j)
k.e!==$&&A.y()
k.e=r
s=A.N(a,i,"door-cite-result",j)
k.f!==$&&A.y()
k.f=s
A.c(h.appendChild(r))
A.c(h.appendChild(s))
for(s=A.jP,r=k.r,q=0;q<5;++q){p=B.el[q]
o=A.c(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.kU(k,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.eN()]=n
o.addEventListener("click",m)
A.c(h.appendChild(o))
B.a.k(r,o)}s=A.N(a,"button","door-continue","continue")
k.d!==$&&A.y()
k.d=s
s.setAttribute("type","button")
s.addEventListener("click",A.a6(new A.kV(k)))
A.c(h.appendChild(s))
l=A.a6(new A.kW(k,a))
k.w=l
h.addEventListener("keydown",l)
A.c(A.h(a.body).appendChild(h))},
e4(a,b){var s,r,q,p=this
p.Q=!0
s=p.b
s===$&&A.i()
s.textContent=a
s=p.c
s===$&&A.i()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)A.c(s[q].style).display=""
r=p.d
r===$&&A.i()
A.c(r.style).display="none"
r=p.e
r===$&&A.i()
r.textContent=""
r=p.f
r===$&&A.i()
r.textContent=""
r=p.a
r.className="door visible"
r.removeAttribute("hidden")
B.a.gao(s).focus()},
cv(a){var s,r,q=this,p=q.c
p===$&&A.i()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.p)(p),++r)A.c(p[r].style).display="none"
p=q.d
p===$&&A.i()
A.c(p.style).display=""
s=q.f
s===$&&A.i()
s.textContent=""
p.focus()},
ik(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.i()
s.textContent=""
for(r=b.length,q=A.jP,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.c(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kX(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eN()]=o
m.addEventListener("click",l)
A.c(s.appendChild(m))}},
cg(){var s,r,q=this
q.Q=!1
s=q.e
s===$&&A.i()
s.textContent=""
s=q.f
s===$&&A.i()
s.textContent=""
s=q.a
s.className="door"
s.setAttribute("hidden","")
r=q.w
if(r!=null){s.removeEventListener("keydown",r)
q.w=null}},
slf(a){this.x=t.ov.a(a)},
slh(a){this.y=t.jE.a(a)},
slg(a){this.z=t.bZ.a(a)}}
A.kU.prototype={
$1(a){var s
A.c(a)
s=this.a.x
return s==null?null:s.$1(this.b)},
$S:0}
A.kV.prototype={
$1(a){var s
A.c(a)
s=this.a.y
return s==null?null:s.$0()},
$S:0}
A.kW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.c(a)
s=this.a
if(!s.Q||A.D(a.code)!=="Tab")return
r=A.f([],t.W)
for(q=s.r,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
if(A.D(A.c(n.style).display)!=="none")r.push(n)}q=s.d
q===$&&A.i()
if(A.D(A.c(q.style).display)!=="none")r.push(q)
s=s.e
s===$&&A.i()
m=A.c(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.a(m.length);++l){k=A.h(m.item(l))
if(s.b(k))B.a.k(r,k)}if(r.length===0)return
j=A.h(this.b.activeElement)
if(A.au(a.shiftKey)){if(j===B.a.gao(r)||!B.a.v(r,j)){a.preventDefault()
B.a.gN(r).focus()}}else if(j===B.a.gN(r)||!B.a.v(r,j)){a.preventDefault()
B.a.gao(r).focus()}},
$S:3}
A.kX.prototype={
$1(a){var s
A.c(a)
s=this.b.z
return s==null?null:s.$1(this.a.a)},
$S:0}
A.l_.prototype={
iG(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.N(s,"h1","journal-title",null)
o.f!==$&&A.y()
o.f=r
q=A.N(s,"div","ending-copy",null)
o.r!==$&&A.y()
o.r=q
A.c(n.appendChild(r))
A.c(n.appendChild(q))
p=A.N(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.a6(new A.l0(o)))
A.c(n.appendChild(p))},
il(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.i()
s.textContent=a.a.b
s=m.r
s===$&&A.i()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o=b[p]
n=A.c(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.c(s.appendChild(n))}m.bI()},
sli(a){this.w=t.jE.a(a)}}
A.l0.prototype={
$1(a){var s
A.c(a)
s=this.a
s.au()
s=s.w
if(s!=null)s.$0()
return null},
$S:0}
A.lt.prototype={
iH(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.c(p.appendChild(A.N(s,"h1","journal-title","house notes")))
A.c(p.appendChild(A.N(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.c(p.appendChild(A.N(s,"p",q,"J opens the journal. L rests. O opens settings. K saves. The final door waits until Day 21.")))
r=A.N(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.a6(new A.lu(this)))
A.c(p.appendChild(r))}}
A.lu.prototype={
$1(a){A.c(a)
return this.a.au()},
$S:0}
A.lY.prototype={
iU(){var s,r=this,q=r.a,p=A.N(q,"div","page-turn",null),o=A.N(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a6(new A.lZ(r)))
s=A.N(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a6(new A.m_(r)))
q=A.N(q,"span","right-day-label",null)
r.Q!==$&&A.y()
r.Q=q
A.c(p.appendChild(o))
A.c(p.appendChild(q))
A.c(p.appendChild(s))
return p},
f3(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.eh(s.CW+a,r)
s.eJ()},
eh(a,b){if(a<1)return 1
if(a>b)return b
return a},
jJ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.i()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.i()
s.textContent=""
for(s=j.w.e0(),r=s.length,q=A.jP,p=j.a,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=B.a.gN(n.c).n(0)
l=A.c(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.m0(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eN()]=m
l.addEventListener("click",k)
A.c(i.appendChild(l))}},
eJ(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.i()
s=t.r
r=A.f([],s)
for(q=j.f,p=q.b,o=A.o(p).i("an<2>"),n=new A.an(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.m1())
j.eI(i,r)
i=j.Q
i===$&&A.i()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.i()
s=A.f([],s)
for(r=new A.an(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.m2())
j.eI(i,s)
k=B.d.K(q.f/4,0,1)
i=j.as
i===$&&A.i()
A.c(i.style).setProperty("width",B.d.cp(k*100,1)+"%")},
eI(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r)A.c(a.appendChild(this.jh(b[r])))},
jh(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.N(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.c(k.createElement("div"))
n.className=q
n.textContent=o
A.c(n.style).setProperty("--shake",B.d.n(p.b))
A.c(j.appendChild(n))}m=a.r
if(m!=null){l=this.js(m,!1)
l.className=A.D(l.className)+" margin"
A.c(j.appendChild(l))}return j},
js(a,b){var s=b?"hand-line struck":"hand-line",r=A.N(this.a,"div",s,a.n(0))
A.c(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.lZ.prototype={
$1(a){A.c(a)
return this.a.f3(-1)},
$S:0}
A.m_.prototype={
$1(a){A.c(a)
return this.a.f3(1)},
$S:0}
A.m0.prototype={
$1(a){var s,r,q
A.c(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:0}
A.m1.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:15}
A.m2.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:15}
A.fi.prototype={
bl(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.c(s.style).setProperty("--panel-fade","0.25s")
A.c(A.h(this.a.body).appendChild(s))},
bI(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.D(n.className),"open"))return
s=$.ms
if(s!=null&&s!==o)s.au()
$.ms=o
r=o.a
o.d=A.h(r.activeElement)
A.rd(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.a6(o.gjD())
o.e=q
r.addEventListener("keydown",q)
p=A.tq(n)
if(p.length!==0)B.a.gao(p).focus()
else n.focus()},
au(){var s,r,q=this,p=q.b
if(!B.b.v(A.D(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.ms===q)$.ms=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jE(a){A.c(a)
if(A.au(a.defaultPrevented))return
if(A.D(a.code)==="Escape"){this.au()
return}if(A.D(a.code)==="Tab")this.jW(a)},
jW(a){var s,r=A.tq(this.b)
if(r.length===0)return
s=A.h(this.a.activeElement)
if(A.au(a.shiftKey)){if(s===B.a.gao(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gN(r).focus()}}else if(s===B.a.gN(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gao(r).focus()}},
sbH(a){this.c=t.jE.a(a)}}
A.mF.prototype={
ij(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.n7.prototype={
iM(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="setting-toggle",h=k.b
h.setAttribute("aria-label","House settings")
A.c(h.appendChild(A.N(a,"h2","journal-title","House settings")))
A.c(h.appendChild(A.N(a,"p","settings-copy","Set the house voice without changing what happened in it.")))
s=A.N(a,"div","settings-grid",j)
for(r=0;r<5;++r){q=B.eh[r]
A.c(s.appendChild(k.jr(a,q.a,q.b)))}A.c(h.appendChild(s))
p=A.N(a,"label",i,j)
o=A.c(a.createElement("input"))
o.type="checkbox"
k.z=o
o.addEventListener("change",A.a6(new A.n9(k,o)))
A.c(p.appendChild(o))
A.c(p.appendChild(A.N(a,"span",j,"Mute house audio")))
A.c(h.appendChild(p))
n=A.N(a,"label",i,j)
m=A.c(a.createElement("input"))
m.type="checkbox"
k.Q=m
m.addEventListener("change",A.a6(new A.na(k,m)))
A.c(n.appendChild(m))
A.c(n.appendChild(A.N(a,"span",j,"Mono-compatible mix")))
A.c(h.appendChild(n))
l=A.N(a,"button","door-continue","return")
l.setAttribute("type","button")
l.addEventListener("click",A.a6(new A.nb(k)))
A.c(h.appendChild(l))},
jr(a,b,c){var s,r,q=A.N(a,"label","setting-row",null),p=A.N(a,"span",null,c),o=A.c(a.createElement("input"))
o.type="range"
o.min="0"
o.max="1"
o.step="0.05"
o.value="1"
s="setting-"+b
o.id=s
p.setAttribute("for",s)
r=A.N(a,"output",null,"100%")
o.addEventListener("input",A.a6(new A.n8(this,o,r,b)))
A.c(q.appendChild(p))
A.c(q.appendChild(o))
A.c(q.appendChild(r))
this.x.l(0,b,o)
this.y.l(0,b,r)
return q},
i3(a,b){var s,r=this.x.h(0,a),q=this.y.h(0,a)
if(r==null||q==null)return
s=B.d.K(b,0,1)
r.value=B.d.n(s)
q.textContent=""+B.d.aB(s*100)+"%"},
slj(a){this.f=t.hm.a(a)},
sll(a){this.r=t.cz.a(a)},
slk(a){this.w=t.cz.a(a)}}
A.n9.prototype={
$1(a){var s
A.c(a)
s=this.a.r
return s==null?null:s.$1(A.au(this.b.checked))},
$S:0}
A.na.prototype={
$1(a){var s
A.c(a)
s=this.a.w
return s==null?null:s.$1(A.au(this.b.checked))},
$S:0}
A.nb.prototype={
$1(a){A.c(a)
return this.a.au()},
$S:0}
A.n8.prototype={
$1(a){var s,r,q=this
A.c(a)
s=A.rp(A.D(q.b.value))
if(s==null)s=1
q.c.textContent=""+B.d.aB(s*100)+"%"
r=q.a.f
if(r!=null)r.$2(q.d,s)},
$S:3}
A.nf.prototype={
iN(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.c(i.appendChild(A.N(a,"h2","journal-title","Rest")))
A.c(i.appendChild(A.N(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.N(a,"div","entry-picker",null)
for(r=A.jP,q=0;q<2;++q){p=B.bk[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bp[n]
l=A.c(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.ng(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eN()]=k
l.addEventListener("click",j)
A.c(s.appendChild(l))}}A.c(i.appendChild(s))},
slm(a){this.f=t.as.a(a)}}
A.ng.prototype={
$1(a){var s,r
A.c(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.au()},
$S:3}
A.bQ.prototype={}
A.kb.prototype={
lH(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.K(s)
q=new A.S(s,r.i("m(1)").a(new A.kd()),r.i("S<1,m>")).b0(0)
r=this.b
r.H(0)
s=J.uE(a,t.N)
p=s.$ti
r.J(0,new A.R(s,p.i("t(n.E)").a(q.gc4(q)),p.i("R<n.E>")))},
kE(a,b){var s,r,q,p,o,n=A.f([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.kd.prototype={
$1(a){return t.B.a(a).a},
$S:91}
A.kc.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:92}
A.j1.prototype={
l3(a){return this.c.v(0,t.g.a(a))},
lF(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a3(0,j.gkv())||!a.a.a3(0,new A.nG(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.a8){n=s.d
if(n<J.aW(p)){o=o===B.J
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.K}else j=!1}}}if(j)return!1
m=new A.j0(r,s.b,A.am(p,t.kX),B.J)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.H(0)
j.J(0,a.a)
j=l.c
j.H(0)
j.J(0,k)
l.e=m
return!0},
f7(a){var s=this.a,r=A.o(s).i("ah<1>"),q=r.i("R<n.E>")
s=A.L(new A.R(new A.ah(s,r),r.i("t(n.E)").a(new A.nD(a)),q),q.i("n.E"))
B.a.Y(s,new A.nE())
return s},
kg(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.hA
s=m.a.h(0,a)
if(s==null)return B.hB
r=B.c.L(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aL:B.R
o=p===B.R&&m.r.v(0,q)&&s.a2(B.aM)?B.aM:p
if(s.a2(o))n=o
else n=s.a2(B.R)?B.R:B.aL
r=s.h(0,n)
r.toString
r=new A.j0(a,n,A.am(r,t.kX),B.J)
m.e=r
return new A.j_(r)},
kq(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cf
if(n.d!==B.J)return B.hy
n.e=a
s=a===B.K
n.d=s?B.a8:B.a6
r=this.d
q=s?B.cd:B.hj
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cx(q,o,p,a,null))
if(a===B.V)B.a.k(r,new A.cx(B.hm,o,p,a,null))
if(s)this.eK(n)
return new A.iZ(n)},
kc(){var s,r=this.e
if(r==null)return B.cf
s=r.d
if(s!==B.a6&&s!==B.a7)return B.hz
r.d=B.a7
if(++r.f>=r.c.length){r.d=B.a8
this.eK(r)
return new A.fA(r,!0)}return new A.fA(r,!1)},
kr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a6&&s!==B.a7}else s=!0
if(s)return i
r=h.gc5()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.bo
p=J.O(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.cg(q,s,s)
m=c.jG(!0,!0,o,new A.nM(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a9){B.a.k(this.d,new A.cx(B.hl,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gN(j.c)
s=A.rj(s,s)
s.J(0,o.a)
s.J(0,q)
p.k9(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.cg)if(k===B.aO){s=n.b
s=s.gM(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cx(B.hk,o,p.b,i,l))}}return m},
eK(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
sit(a){this.r=t.R.a(a)}}
A.nG.prototype={
$1(a){var s=this.a.a
return new A.ah(s,A.o(s).i("ah<1>")).R(0,new A.nF(A.D(a)))},
$S:4}
A.nF.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:16}
A.nD.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:16}
A.nE.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:94}
A.nC.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:95}
A.j2.prototype={}
A.jr.prototype={}
A.p9.prototype={
$1(a){return B.b.Z(A.D(a),"off.")},
$S:4}
A.b8.prototype={
A(){return"DoorChoice."+this.b}}
A.bt.prototype={
A(){return"VisitPhase."+this.b}}
A.bu.prototype={
A(){return"VisitTier."+this.b}}
A.cT.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cx.prototype={
C(){var s,r=this,q=A.x(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.c8.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bv.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bv&&b.a===this.a&&b.b===this.b},
gG(a){return A.cp(this.a,this.b,B.l,B.l)}}
A.bG.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bG&&b.a===this.a&&b.b===this.b},
gG(a){return A.cp(this.a,this.b,B.l,B.l)}}
A.be.prototype={
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.be&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gG(a){var s=this
return A.cp(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.V(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.j3.prototype={
C(){var s,r,q,p=this.a
p=A.L(p,A.o(p).c)
B.a.a0(p)
s=this.b
r=A.o(s)
q=r.i("da<1,W<m,@>>")
s=A.L(new A.da(s,r.i("W<m,@>(1)").a(new A.nB()),q),q.i("n.E"))
r=this.c
return A.V(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.nB.prototype={
$1(a){return t.g.a(a).C()},
$S:96}
A.hk.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.V(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.k8.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:97}
A.k9.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:98}
A.ka.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:99}
A.j0.prototype={
gc5(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.nH.prototype={}
A.bf.prototype={}
A.j_.prototype={}
A.iZ.prototype={}
A.fA.prototype={}
A.fU.prototype={
gb9(){var s,r=this.p3
if(r){s=this.w
s===$&&A.i()
s=s.a.b}else s="safe"
return A.mW("next",r?this.gkl():B.eJ,!1,null,s)},
gcZ(){if(this.p3){var s=this.d
s===$&&A.i()
s=s.b===B.M}else s=!1
return s},
gkl(){var s,r
if(!this.p3)return B.m
s=this.r
s===$&&A.i()
r=this.w
r===$&&A.i()
return B.cB.km(s,r)},
gkV(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cp(this.k3,3)},
gkU(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
aL(){var s,r,q,p,o,n,m=this,l=A.wl(m.a)
m.d=l
l=l.hK()
m.r=l
l=m.w=B.aQ.i1(l)
q=m.b
p=m.c
s=new A.iM(q,p,q,p)
p=A.rx(m.d)
m.e=p
try{p.hy(new A.iB(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ad(o)
l=m.w
if(l===B.a_)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.a_
l=A.rx(m.d)
l.hy(B.fA,s)
m.e=l}l=m.e
l.bS()
n=A.w_(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.p3=!0},
aG(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.w("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.i()
s.bS()
new A.iM(a,b,a,b).E()
r.b=a
r.c=b},
ke(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="wall-plaster",b0="grime",b1="renderer is not initialized",b2="resource library is disposed"
if(!a8.p3||a8.Q.length!==0)return
a8.p4=b3
s=a8.dx
r=a8.e
r===$&&A.i()
s.l(0,a9,r.gaA().hN("texture:wall-plaster",256,256))
s.l(0,b0,a8.e.gaA().hN("texture:grime",512,512))
a8.fx=a8.e.gaA().dO(A.pS(s.h(0,a9),!1,"quarantine-house-safe",!0,0.58,0.58,0.58,1,1))
r=a8.dy
r.l(0,"cellar",a8.e.gaA().dO(A.pS(s.h(0,b0),!1,"quarantine-house-cellar",!0,0.44,0.46,0.48,1,1)))
for(q=a8.fr,p=0;p<7;++p){o=B.eq[p]
n=a8.e.w
if(n==null)n=A.k(A.l(b1))
m=o==="service"?s.h(0,b0):s.h(0,a9)
m=new A.cL("quarantine-inventory-"+o,m,a8.cN(o).a,a8.cN(o).b,a8.cN(o).c,1,1,!1)
if(n.r)A.k(A.l(b2))
m.E()
l=n.b.a.aT(m,null)
n.e.k(0,l)
q.l(0,o,l)}for(q=b3.b,n=q.length,m=a8.Q,k=a8.as,j=a8.at,i=a8.y,h=a8.z,p=0;g=q.length,p<g;q.length===n||(0,A.p)(q),++p){f=q[p]
e=a8.eN(b3,f)
g=a8.e.w
if(g==null)g=A.k(A.l(b1))
d=f.a
if(g.r)A.k(A.l(b2))
c=g.a
e.E()
l=c.b.aT(e,"room:"+d)
b=l.a
c.c.l(0,b,c.c_(e))
g.d.k(0,l)
B.a.k(i,l)
h.l(0,d,l)
g=r.h(0,d)
if(g==null){g=a8.fx
g.toString}a=new A.aZ(l,g,B.Q,-1,B.L,B.S,!0,!0,0,null)
g=a8.f
g===$&&A.i()
B.Q.E()
c=g.a
a0=c.$ti
c.ak(a0.c.a(l))
c=c.b
if(!(b>=0&&b<c.length))return A.e(c,b)
e=c[b].c
c=(e==null?a0.y[1].a(e):e).d
b=B.Q.ar()
c=c.gb7()
a0=A.K(c)
A.cf(new A.S(c,a0.i("z(1)").a(b.gb1()),a0.i("S<1,z>")))
a1=g.b.c6(a)
B.a.k(m,a1)
k.l(0,d,a1)
j.l(0,d,a)}for(p=0;p<q.length;q.length===g||(0,A.p)(q),++p){f=q[p]
for(r=f.e,n=r.length,m=f.a,a2=0;a2<r.length;r.length===n||(0,A.p)(r),++a2){a3=r[a2]
k=a3.c
j=a3.d
a8.e8(m,a8.eF(f,a3.b,k,k+a3.e,j,j+a3.f,7902632),new A.ob(a3))}}for(r=b3.c,q=r.length,n=b3.e,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){a4=r[p]
if(a4.as)continue
f=n.h(0,a4.b)
if(f==null)continue
m=f.a
a8.e8(m,a8.eF(f,a4.an(m),a4.a6(m),a4.a6(m)+a4.w,0,a4.x,5915445),new A.oc(a4))}a5=A.zi(A.yB(b3))
a8.fy=a8.e.gaA().dO(A.pS(s.h(0,b0),!0,"quarantine-house-exterior-shell",!0,0.5,0.5,0.5,1,1))
a6=a8.e.gaA().dP(a5,"exterior:main-shell")
B.a.k(i,a6)
s=a8.fy
s.toString
a7=a8.cx=new A.aZ(a6,s,B.Q,-1,B.L,B.S,!0,!0,0,null)
s=a8.f
s===$&&A.i()
s.c1(a7)
a8.CW=s.b.c6(a7)},
i2(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="renderer is not initialized",a6="resource library is disposed"
a4.db=A.am(a7.e,t.gB)
if(!a4.p3)return
for(s=a4.ax,r=new A.U(s,A.o(s).i("U<1,2>")).gt(0),q=a4.ay;r.m();){p=r.d
p.toString
o=a4.f
o===$&&A.i()
o.b.aM(p.b)
n=q.h(0,p.a)
if(n!=null){p=a4.e
p===$&&A.i()
p=p.w
if(p==null)p=A.k(A.l(a5))
o=n.a
if(p.r)A.k(A.l(a6))
p.a.aM(o)
p.d.ah(0,o)}}s.H(0)
q.H(0)
r=a4.ch
B.a.H(r)
for(p=a4.db,o=p.length,m=a7.c,l=a4.fr,k=0;k<o;++k){j=p[k]
i=a4.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a7.f9(j.c)
i=a4.e
i===$&&A.i()
i=i.w
if(i==null)i=A.k(A.l(a5))
f=a4.jq(g,j,m)
e=j.a
if(i.r)A.k(A.l(a6))
d=i.a
f.E()
c=d.b.aT(f,"inventory:"+e)
b=c.a
d.c.l(0,b,d.c_(f))
i.d.k(0,c)
i=j.f
f=i.a
a=B.F.ga5()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=l.h(0,g.b)
if(d==null){d=l.h(0,"furniture")
d.toString}a2=h.d
i=new A.iQ(new A.z(a2.a+f.a*m,a2.b+f.b*m,a2.c+f.c*m),new A.iz(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aZ(c,d,i,-1,B.L,B.S,!1,!0,0,null)
B.a.k(r,c)
q.l(0,e,n)
d=a4.f
d===$&&A.i()
i.E()
f=d.a
a2=f.$ti
f.ak(a2.c.a(c))
f=f.b
if(!(b>=0&&b<f.length))return A.e(f,b)
a3=f[b].c
f=(a3==null?a2.y[1].a(a3):a3).d
i=i.ar()
f=f.gb7()
b=A.K(f)
A.cf(new A.S(f,b.i("z(1)").a(i.gb1()),b.i("S<1,z>")))
s.l(0,e,d.b.c6(n))}$.C.j().setAttribute("data-renderer-inventory-items",""+s.a)},
ih(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a6.e,a5=a4.h(0,a7)
if(a5==null)return
s=a5.a
r=A.ar([s],t.N)
for(q=a6.aq(s),p=J.O(q.a),q=new A.M(p,q.b,q.$ti.i("M<1>"));q.m();){o=p.gp()
n=o.bd(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a4.h(0,n)!=null)r.k(0,n)}for(a4=a3.as,a4=new A.U(a4,A.o(a4).i("U<1,2>")).gt(0),s=a3.at;a4.m();){m=a4.d
q=m.a
p=s.h(0,q)
p.toString
l=a3.c0(p,r.v(0,q)?-1:0)
p=a3.f
p===$&&A.i()
o=m.b
k=l.c
k.E()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.ak(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ar()
j=j.gb7()
i=A.K(j)
A.cf(new A.S(j,i.i("z(1)").a(k.gb1()),i.i("S<1,z>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.ak(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].sb8(l)
s.l(0,q,l)}for(a4=a3.cy,s=a4.length,f=0;f<a4.length;a4.length===s||(0,A.p)(a4),++f){e=a4[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a3.f
q===$&&A.i()
p=a3.c0(e.c,d)
o=p.c
o.E()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.ak(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.e(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.ar()
k=k.gb7()
j=A.K(k)
A.cf(new A.S(k,j.i("z(1)").a(o.gb1()),j.i("S<1,z>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.ak(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.e(q,o)
q[o].sb8(p)}for(a4=a3.db,s=a4.length,q=a3.ax,p=a3.ay,f=0;f<s;++f){c=a4[f]
o=c.a
b=q.h(0,o)
a=p.h(0,o)
if(b==null||a==null)continue
o=a3.f
o===$&&A.i()
k=a3.c0(a,r.v(0,c.b)?-1:0)
j=k.c
j.E()
i=o.a
h=i.$ti
a0=h.c.a(k.a)
i.ak(a0)
i=i.b
a0=a0.a
if(!(a0>=0&&a0<i.length))return A.e(i,a0)
g=i[a0].c
i=(g==null?h.y[1].a(g):g).d
j=j.ar()
i=i.gb7()
h=A.K(i)
A.cf(new A.S(i,h.i("z(1)").a(j.gb1()),h.i("S<1,z>")))
o=o.b
h=o.$ti
h.c.a(b)
h.y[1].a(k)
o.ak(b)
o=o.b
h=b.a
if(!(h>=0&&h<o.length))return A.e(o,h)
o[h].sb8(k)}a4=new A.l5().kp(a7).a
a1=a3.CW
a2=a3.cx
if(a1!=null&&a2!=null){l=a3.c0(a2,a4!==0?-1:0)
s=a3.f
s===$&&A.i()
s.c1(l)
s.b.dV(a1,l)
a3.cx=l}},
lv(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(!j.p3)return
s=j.as.h(0,b)
r=j.at
q=r.h(0,b)
p=j.z
o=p.h(0,b)
n=a.e.h(0,b)
if(s==null||q==null||o==null||n==null)return
m=j.e
m===$&&A.i()
l=m.gaA().dP(j.eN(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.aZ(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.i()
m.c1(k)
m.b.dV(s,k)
r.l(0,b,k)
p.l(0,b,l)
p=j.y
B.a.ah(p,o)
B.a.k(p,l)
j.e.gaA().lw(o)
$.C.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
i4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.ar([b],t.N),h=a.e,g=h.h(0,b)
if(g!=null)for(s=g.a,r=a.aq(s),q=J.O(r.a),r=new A.M(q,r.b,r.$ti.i("M<1>"));r.m();){p=q.gp()
o=p.bd(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.h(0,o)!=null)i.k(0,o)}n=new A.hZ(a).hU(i,c)
m=A.f([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.en(k.b)
h=k.a
B.a.k(m,new A.iu(new A.z(h.a,h.b,h.c),k.d,k.c))}j=A.u8(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.en(A.u7(d))
s=new A.kS(new A.z(j.a,j.b,j.c),1)}this.id=new A.hQ(B.e7,1.5,14,B.bh,h,s,m)},
aI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.d(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.co(s)
q=A.pR(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.e2(r,q,q.X(0,r),B.aK,B.h3,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.nh()
$.qQ()
k=$.mD.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.i()
j=g.f
j===$&&A.i()
k.jI()
k.bS()
i=B.a.v(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga4(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga4(0)||i.gbD()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga4(0)||!s.b.ga4(0)||!s.c.ga4(0))A.k(A.w("CameraView matrices must be finite",f))
p.E()
o.E()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.lc(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.aj)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.aj
s.c=0
B.a.H(s.a)
g.k2=g.e.kI()
s=$.mD.$0()
l.b=s
g.k3=l.gkF()/1000},
aY(a){},
hB(){},
hL(){++this.ok},
eN(a,b){var s,r,q,p,o,n=A.tU(a,b),m=A.L(n.a,t.i)
B.a.J(m,n.b)
B.a.J(m,n.c)
B.a.J(m,n.d)
s=new Float32Array(A.a3(m))
r=A.f([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.e(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.e(s,o)
B.a.k(r,new A.z(m,p,s[o]))}return new A.bU(B.T,s,null,A.cf(r))},
e8(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.i()
r=s.gaA().dP(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.aZ(r,p.ju(a),B.Q,0,B.L,B.S,!0,!0,0,null)
s=p.f
s===$&&A.i()
s.c1(q)
B.a.k(p.cy,new A.jt(a,s.b.c6(q),q,c))},
ju(a){var s=this.dy.h(0,a)
if(s==null){s=this.fx
s.toString}return s},
jq(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cQ(new Float32Array(5376))
g=this.jp(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.aj(q,r,o,p,g)
s.aj(n,m,l,k,g)
s.aj(r,n,k,o,g)
s.aj(m,q,p,l,g)
s.aj(r,q,m,n,g)
s.aj(o,k,l,p,g)
j=B.u.b2(s.a,0,s.b)
g=A.f([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.z(e,d,j[c]))}return new A.bU(B.T,j,null,A.cf(g))},
jp(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
cN(a){var s
A:{if("architecture"===a){s=B.fs
break A}if("furniture"===a){s=B.bA
break A}if("fixture"===a){s=B.ft
break A}if("service"===a){s=B.fp
break A}if("story"===a){s=B.fr
break A}if("decor"===a){s=B.fz
break A}if("micro"===a){s=B.fw
break A}s=B.bA
break A}return s},
aw(a){return this.la(t.G.a(a))},
la(a){var s=0,r=A.b4(t.H),q,p=this,o,n,m,l
var $async$aw=A.b5(function(b,c){if(b===1)return A.b1(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.f([],t.iw)
for(n=0;n<2;++n){m=B.eH[n]
l=a.h(0,m)
if(l!=null)o.push(p.bU(m,l))}s=3
return A.a8(A.li(o,t.H),$async$aw)
case 3:case 1:return A.b2(q,r)}})
return A.b3($async$aw,r)},
bU(a,b){return this.jt(a,b)},
jt(a,b){var s=0,r=A.b4(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bU=A.b5(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dx.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.c(A.c(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.a8(A.aB(A.c(m.decode()),t.X),$async$bU)
case 7:g=A.c(A.c(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.h(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mR.a(A.c(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.i()
h=h.gaA()
f=new Uint8Array(A.a3(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.lO(d,f)
$.C.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ad(c)
h=$.C.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.c(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.b2(q,r)
case 2:return A.b1(o.at(-1),r)}})
return A.b3($async$bU,r)},
c0(a,b){return new A.aZ(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eF(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Y.j().aU(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.f([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.f([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.f([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.f([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.cQ(new Float32Array(5376))
o.aj(k[0],k[1],k[2],k[3],g)
n=B.u.b2(o.a,0,o.b)
k=A.f([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.z(r,q,n[p]))}return new A.bU(B.T,n,null,A.cf(k))},
en(a){return new A.dm((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ipW:1}
A.ob.prototype={
$0(){return!this.a.w},
$S:17}
A.oc.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:17}
A.er.prototype={
gb9(){return A.mW("legacy",B.m,this.e,this.f,"legacy")},
gcZ(){return this.x},
aL(){var s,r=this
if(r.w)return
s=A.w0(r.a,r.b,r.c)
r.r!==$&&A.y()
r.r=s
s.fK=s.fJ=s.fI=r.d
r.w=!0},
aG(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.i()
s.aG(a,b)}},
aI(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.l("legacy runtime is not initialized"))
if(j.x||$.ox==null)return;++j.y
$.C.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.i()
r=$.tA
q=$.bj.j()
s.fO=A.u8($.dO.j().gbk()).ga5()
s.shA(A.u7($.dO.j().gbk()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dO.j().gbk()))
s.fS=p<0?0:p
p=$.bK.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.U(0,p.d.X(0,(A.pB(o*0.28,1309)*2-1)*n)).U(0,p.c.X(0,(A.pB(p.r*0.28,2839)*2-1)*n))
p=$.bK.j()
s.fT=p.a
s.dh=p.b
s.di=p.c
s.dj=p.d
m=A.xE(0,0.25,0.11)
s.dk=m.a
s.dl=m.b
s.dm=m.c
p=s.cd
l=p==null?s.bw:p
if(l==null)l=s.aV
p=s.aD
p.aK(l)
s.av.depthMask(!0)
p.ks(l,s.dk/255,s.dl/255,s.dm/255)
s.dc=s.ce=0
s.de=!1
s.by=0
k=$.ox
if(k!=null)k.kC($.aK,$.hh())
s.kT(r,q)
$.tc.j().dU(B.cz,r)},
aY(a){},
hB(){this.x=!0},
hL(){this.x=!1},
$ipW:1}
A.jt.prototype={}
A.ph.prototype={
$1(a){var s
try{A.r6(a,this.a)
return!0}catch(s){if(A.ad(s) instanceof A.I)return!1
else throw s}},
$S:101}
A.pi.prototype={
$0(){$.aJ=null
$.bi.j().aF($.C.j())},
$S:1}
A.pj.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gam().a===21){A.tJ(!1)
return}s=$.Y.j().r.b
$.T.j().iq(a,b,$.aK)
r=$.Y.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cu()
if(typeof n!=="number")return A.k_(n)
if(!(o<n))break
if($.Y.b===$.Y)A.k(A.a_(""))
p=B.a.h(B.A,q).b
o=$.ox
if(o!=null)o.lt(p)
o=$.bM
if(o!=null){n=$.Y.b
if(n===$.Y)A.k(A.a_(""))
o.lv(n,p)}o=q
if(typeof o!=="number")return o.U()
q=o+1}A.qB("saved after sleep")},
$S:102}
A.pq.prototype={
$0(){$.aJ=null
$.bi.j().aF($.C.j())},
$S:1}
A.pr.prototype={
$0(){$.aJ=null
$.bi.j().aF($.C.j())},
$S:1}
A.ps.prototype={
$2(a,b){var s
A.qE(a,A.q(b))
switch(a){case"master":s=$.bA
if(s!=null)s.i8(b)
break
case"voice":s=$.bA
if(s!=null)s.ib(b)
break
case"effects":s=$.bA
if(s!=null)s.i7(b)
break
case"ambience":s=$.bA
if(s!=null)s.i6(b)
break
case"music":s=$.bA
if(s!=null)s.i9(b)
break}},
$S:103}
A.pt.prototype={
$1(a){var s
A.qE("muted",""+a)
s=$.bA
if(s!=null)s.ia(a)},
$S:28}
A.pu.prototype={
$1(a){var s
A.qE("mono",""+a)
s=$.bA
if(s!=null)s.e2(a)},
$S:28}
A.pv.prototype={
$0(){$.aJ=null
$.bi.j().aF($.C.j())},
$S:1}
A.pw.prototype={
$0(){$.aJ=null},
$S:1}
A.px.prototype={
$0(){$.aJ=null},
$S:1}
A.pk.prototype={
$1(a){A.c(a)
return A.tI()},
$S:0}
A.pl.prototype={
$1(a){var s,r
A.c(a)
if(!A.au(a.repeat))$.cz.j().aY(new A.iC(A.D(a.code),!0,1))
if(A.D(a.code)==="KeyP"&&!A.au(a.repeat))$.qt=!$.qt
if(A.D(a.code)==="KeyR"&&!A.au(a.repeat)&&$.tR){s=$.eH
if(s!=null)s.be()}if(A.D(a.code)==="KeyJ"&&!A.au(a.repeat)&&!$.aA.j().Q){s=$.aJ
if(s==null){$.aJ=$.eB.j()
s=$.eB.j()
s.ix()
r=s.r.a-1
if(r<1)r=1
s.CW=s.eh(s.CW,r)
s.jJ()
s.eJ()}else if(s===$.eB.j())$.eB.j().au()}if(A.D(a.code)==="KeyL"&&!A.au(a.repeat)&&!$.aA.j().Q){s=$.aJ
if(s==null){$.aJ=$.jO.j()
$.jO.j().bI()}else if(s===$.jO.j())$.jO.j().au()}if(A.D(a.code)==="KeyH"&&!A.au(a.repeat)&&!$.aA.j().Q){s=$.aJ
if(s==null){$.aJ=$.jM.j()
$.jM.j().bI()}else if(s===$.jM.j())$.jM.j().au()}if(A.D(a.code)==="KeyO"&&!A.au(a.repeat)&&!$.aA.j().Q){s=$.aJ
if(s==null){$.aJ=$.dN.j()
$.dN.j().bI()}else if(s===$.dN.j())$.dN.j().au()}if(A.D(a.code)==="KeyK"&&!A.au(a.repeat))A.qB("saved")},
$S:3}
A.pm.prototype={
$1(a){A.c(a)
$.cz.j().aY(new A.iC(A.D(a.code),!1,0))},
$S:3}
A.pn.prototype={
$1(a){A.c(a)
return A.tf()},
$S:0}
A.po.prototype={
$1(a){A.c(a)
return A.tf()},
$S:0}
A.pp.prototype={
$1(a){A.c(a)
return $.bi.j().aF($.C.j())},
$S:0}
A.oR.prototype={
$1(a){var s=A.D(A.c(a).message)
A.oV(s,null)},
$S:3}
A.oS.prototype={
$1(a){var s
A.c(a)
s=a.reason
A.oV("unhandled rejection: "+A.q(s==null?A.D(a.type):s),null)},
$S:3}
A.oY.prototype={
$0(){this.a.className=""},
$S:9}
A.oW.prototype={
$1(a){return t.L.a(a).e},
$S:25};(function aliases(){var s=J.cJ.prototype
s.iw=s.n
s=A.n.prototype
s.iv=s.dY
s=A.fi.prototype
s.ix=s.bI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"xK","vy",29)
r(J.r.prototype,"gc4","v",12)
q(A,"xX","vM",18)
p(A.bE.prototype,"gkv","a2",12)
o(A,"yx","wt",8)
o(A,"yy","wu",8)
o(A,"yz","wv",8)
q(A,"tT","ye",1)
s(A,"yD","vD",29)
r(A.bH.prototype,"gc4","v",12)
o(A,"yG","xp",6)
p(A.ig.prototype,"glD","lE",67)
p(A.iP.prototype,"glB","lC",93)
q(A,"zS","pT",17)
p(A.co.prototype,"gb1","hP",47)
var n
p(n=A.i1.prototype,"gjv","jw",0)
p(n,"gjx","jy",0)
p(n,"gjB","jC",0)
p(n,"gjz","jA",0)
o(A,"z8","tn",6)
o(A,"za","tm",6)
o(A,"yY","vt",107)
o(A,"yZ","vu",108)
o(A,"zd","vo",109)
p(A.fi.prototype,"gjD","jE",0)
p(A.j1.prototype,"gl2","l3",16)
o(A,"u0","y0",110)
o(A,"z2","xl",111)
q(A,"z4","xo",1)
o(A,"z3","xm",74)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.B,null)
q(A.B,[A.pL,J.i3,A.fs,J.d4,A.n,A.eR,A.cE,A.a7,A.J,A.n6,A.bq,A.dn,A.M,A.fC,A.ag,A.c7,A.bI,A.ef,A.e4,A.dK,A.cr,A.nt,A.mo,A.eY,A.fX,A.X,A.mc,A.cK,A.an,A.fa,A.nT,A.oj,A.bV,A.jj,A.jH,A.og,A.j7,A.by,A.aC,A.jb,A.dF,A.aj,A.j8,A.jF,A.h8,A.fM,A.jo,A.dL,A.fP,A.h2,A.jI,A.d8,A.hC,A.o9,A.ok,A.d9,A.cG,A.jg,A.iq,A.fu,A.nU,A.I,A.P,A.ak,A.jG,A.nh,A.aT,A.h4,A.nv,A.jA,A.mn,A.jl,A.es,A.mG,A.ds,A.kL,A.kM,A.iv,A.e2,A.hQ,A.lc,A.cq,A.ls,A.dm,A.kS,A.iu,A.em,A.cL,A.cw,A.nA,A.bU,A.mp,A.my,A.iD,A.aZ,A.iM,A.iB,A.le,A.ig,A.iT,A.mk,A.cy,A.iP,A.di,A.hO,A.hP,A.ld,A.al,A.bo,A.aS,A.Q,A.eS,A.mE,A.aQ,A.mI,A.aP,A.mK,A.mJ,A.dI,A.fn,A.of,A.ju,A.ji,A.mZ,A.n4,A.ba,A.b7,A.as,A.kO,A.hj,A.dr,A.lf,A.co,A.iz,A.iQ,A.z,A.eQ,A.j9,A.ht,A.ja,A.hG,A.jd,A.eV,A.je,A.hK,A.jf,A.hY,A.jk,A.hv,A.hu,A.fk,A.jv,A.iy,A.jw,A.dy,A.iG,A.jy,A.iH,A.jz,A.iK,A.jD,A.iJ,A.jC,A.iY,A.jJ,A.fp,A.j5,A.jK,A.kJ,A.hT,A.hV,A.f2,A.ft,A.G,A.hH,A.iw,A.lr,A.cY,A.c4,A.eW,A.nL,A.d_,A.h7,A.h6,A.j4,A.hJ,A.ho,A.jB,A.kl,A.k5,A.eP,A.kh,A.pI,A.kq,A.kn,A.fD,A.kI,A.lb,A.iN,A.lp,A.i_,A.i1,A.ie,A.dp,A.mj,A.cQ,A.mP,A.mY,A.nN,A.fK,A.jE,A.js,A.jq,A.nc,A.b,A.kH,A.hL,A.kZ,A.e6,A.it,A.mz,A.ek,A.n3,A.dw,A.hR,A.lm,A.ll,A.kw,A.dY,A.e_,A.dX,A.dZ,A.hw,A.ih,A.fF,A.j6,A.f4,A.lx,A.n_,A.aO,A.l3,A.ly,A.lz,A.l5,A.cX,A.e8,A.n0,A.cW,A.ex,A.lv,A.l2,A.nd,A.lB,A.c0,A.cl,A.lV,A.lU,A.c3,A.hZ,A.aU,A.bc,A.aY,A.bb,A.cF,A.cP,A.aG,A.lG,A.c_,A.lw,A.f3,A.lF,A.eb,A.lK,A.fj,A.fb,A.nI,A.ic,A.bm,A.lX,A.kD,A.e0,A.kE,A.m8,A.m7,A.mw,A.mv,A.mx,A.mX,A.iC,A.mV,A.el,A.kP,A.nM,A.dD,A.hB,A.lQ,A.lS,A.n1,A.c5,A.n2,A.hS,A.ni,A.dB,A.dA,A.fB,A.nn,A.ke,A.kG,A.kT,A.fi,A.mF,A.bQ,A.kb,A.j1,A.nH,A.cx,A.bv,A.bG,A.be,A.j3,A.hk,A.j0,A.fU,A.er,A.jt])
q(J.i3,[J.i7,J.f6,J.f7,J.ed,J.ee,J.dj,J.dk])
q(J.f7,[J.cJ,J.r,A.cM,A.ff])
q(J.cJ,[J.is,J.dz,J.cm])
r(J.i5,A.fs)
r(J.lW,J.r)
q(J.dj,[J.f5,J.i8])
q(A.n,[A.cV,A.F,A.cn,A.R,A.bY,A.dJ,A.ca])
q(A.cV,[A.d6,A.h9])
r(A.fJ,A.d6)
r(A.fH,A.h9)
q(A.cE,[A.hy,A.hx,A.iO,A.pc,A.pe,A.nP,A.nO,A.ou,A.lj,A.o3,A.o5,A.mf,A.o7,A.pz,A.pA,A.p6,A.mH,A.mr,A.mi,A.ml,A.nq,A.ns,A.l8,A.l6,A.l7,A.mt,A.mu,A.mO,A.mN,A.mM,A.mL,A.mQ,A.oN,A.oO,A.n5,A.pF,A.pD,A.lg,A.mh,A.p4,A.nJ,A.nK,A.ks,A.ku,A.kt,A.kv,A.km,A.k6,A.k7,A.kj,A.kk,A.ki,A.lq,A.mU,A.l1,A.ln,A.lo,A.kx,A.ky,A.kz,A.kA,A.kB,A.kC,A.p2,A.kK,A.l4,A.lA,A.oP,A.os,A.or,A.lM,A.lO,A.ne,A.lC,A.p1,A.lH,A.lJ,A.p0,A.kY,A.mb,A.m3,A.kQ,A.kR,A.oT,A.no,A.np,A.kf,A.kU,A.kV,A.kW,A.kX,A.l0,A.lu,A.lZ,A.m_,A.m0,A.n9,A.na,A.nb,A.n8,A.ng,A.kd,A.nG,A.nF,A.nD,A.p9,A.nB,A.k8,A.k9,A.ka,A.ph,A.pt,A.pu,A.pk,A.pl,A.pm,A.pn,A.po,A.pp,A.oR,A.oS,A.oW])
q(A.hy,[A.nS,A.kN,A.m4,A.pd,A.ov,A.p3,A.lk,A.o4,A.md,A.mg,A.oa,A.ny,A.nx,A.mm,A.nr,A.l9,A.pE,A.pC,A.ko,A.kp,A.lN,A.lP,A.lE,A.ma,A.lT,A.nj,A.nk,A.m1,A.m2,A.kc,A.nE,A.nC,A.pj,A.ps])
r(A.bS,A.fH)
q(A.a7,[A.dl,A.ct,A.i9,A.iS,A.iE,A.jh,A.f9,A.hm,A.bR,A.fz,A.iR,A.en,A.hA])
r(A.ep,A.J)
r(A.d7,A.ep)
q(A.F,[A.a2,A.ah,A.aE,A.U,A.dH,A.fO])
q(A.a2,[A.fw,A.S,A.fr,A.jn])
r(A.da,A.cn)
q(A.bI,[A.et,A.eu,A.ev])
r(A.bx,A.et)
r(A.az,A.eu)
r(A.fV,A.ev)
r(A.ey,A.ef)
r(A.cS,A.ey)
r(A.eT,A.cS)
q(A.e4,[A.a4,A.f_])
q(A.cr,[A.eU,A.fW,A.h3])
r(A.ch,A.eU)
q(A.hx,[A.mA,A.nQ,A.nR,A.oh,A.lh,A.nV,A.o_,A.nZ,A.nX,A.nW,A.o2,A.o1,A.o0,A.oe,A.oX,A.om,A.ol,A.oL,A.oF,A.oK,A.oB,A.oC,A.oM,A.oJ,A.oz,A.oA,A.oG,A.oH,A.oI,A.oE,A.oD,A.p5,A.mT,A.lL,A.lD,A.lI,A.ob,A.oc,A.pi,A.pq,A.pr,A.pv,A.pw,A.px,A.oY])
r(A.fh,A.ct)
q(A.iO,[A.iL,A.e1])
q(A.X,[A.bE,A.fL,A.jm])
r(A.f8,A.bE)
r(A.eg,A.cM)
q(A.ff,[A.ii,A.aF])
q(A.aF,[A.fQ,A.fS])
r(A.fR,A.fQ)
r(A.fd,A.fR)
r(A.fT,A.fS)
r(A.fe,A.fT)
q(A.fd,[A.fc,A.ij])
q(A.fe,[A.ik,A.il,A.im,A.io,A.ip,A.dq,A.fg])
r(A.fY,A.jh)
r(A.fE,A.jb)
r(A.jx,A.h8)
r(A.fN,A.fL)
r(A.bH,A.fW)
r(A.fy,A.h3)
q(A.d8,[A.hq,A.hM,A.ia])
q(A.hC,[A.kF,A.m6,A.m5,A.nz])
r(A.ib,A.f9)
r(A.o8,A.o9)
r(A.iW,A.hM)
q(A.bR,[A.ei,A.i0])
r(A.jc,A.h4)
q(A.jg,[A.dt,A.dh,A.hl,A.cv,A.e5,A.hs,A.hz,A.hI,A.dv,A.e9,A.bT,A.fq,A.cj,A.ej,A.ea,A.fG,A.fI,A.hU,A.f0,A.hW,A.hX,A.df,A.f1,A.dx,A.cR,A.e3,A.ew,A.hr,A.d5,A.hD,A.hF,A.aH,A.hp,A.bD,A.de,A.db,A.dc,A.eZ,A.cH,A.cI,A.fo,A.du,A.bd,A.b_,A.i2,A.dE,A.bF,A.b8,A.bt,A.bu,A.cT,A.c8])
q(A.cq,[A.b9,A.bs,A.c2,A.ir,A.ck])
r(A.mS,A.nN)
r(A.mR,A.mS)
q(A.fi,[A.l_,A.lt,A.lY,A.n7,A.nf])
q(A.nH,[A.j2,A.jr,A.bf,A.j_,A.iZ,A.fA])
s(A.ep,A.c7)
s(A.h9,A.J)
s(A.fQ,A.J)
s(A.fR,A.ag)
s(A.fS,A.J)
s(A.fT,A.ag)
s(A.ey,A.h2)
s(A.h3,A.jI)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",v:"double",aN:"num",m:"String",t:"bool",ak:"Null",E:"List",B:"Object",W:"Map",Z:"JSObject"},mangledNames:{},types:["~(Z)","~()","ci()","ak(Z)","t(m)","t(v)","@(@)","t(al)","~(~())","ak()","~(@)","t(Q)","t(B?)","t(aU)","t(@)","j(bm,bm)","t(be)","t()","j()","@(m)","ak(@)","~(B?,B?)","@()","t(j)","m?(m)","t(bm)","m(B?)","0&()","~(t)","j(@,@)","em?()","j(a0,a0)","~(B,c6)","ak(B,c6)","ck(j,j,m?)","fp(b9)","ci(m{fallback:m?})","~(@,@)","ak(~())","e2()","v()","aZ(br)","j(as<ba>,as<ba>)","br(as<ba>)","j(as<b7>,as<b7>)","br(as<b7>)","dr(v,v,v,v)","z(z)","@(@,m)","~(dy)","dy()","W<m,m>(W<m,m>,m)","bn<ak>(P<m,m>)","0&(m,j?)","t(E<m>)","j(m,m)","j(bc,bc)","t(Z)","Z()","B?(B?)","t(bD)","t(aG)","ak(@,c6)","dY(B?)","dX(B?)","dZ(B?)","~(j,@)","cL(c2)","e_(B?)","c2(j,j,m?)","t(cP)","t(cX)","t(cW)","b(b)","~(j)","E<+(v,v,v,v)>()","t(bc)","j(j,aG)","t(c0)","b9(j,j,m?)","j(c3,c3)","t(c_)","P<m,m>(m,@)","t(bd)","t(b_)","j(j,+(b9,bU))","j(j)","P<j,@>(j,dB)","P<j,@>(j,dA)","t(P<@,@>)","P<m,m>(P<@,@>)","m(bQ)","j(bQ,bQ)","ci(bs?)","j(be,be)","j(bG,bG)","W<m,@>(be)","t(bu)","t(bt)","t(b8)","bs(j,j,m?)","t(ek)","~(bd,b_)","~(m,v)","t(fx?)","j(j,+(bs,cy))","m(al)","c0(B?)","cl(B?)","c_(B?)","~(aN)","~(m)","j(+(v,v,v,v),+(v,v,v,v))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.bx&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.az&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fV&&A.z6(a,b.a)}}
A.wM(v.typeUniverse,JSON.parse('{"cm":"cJ","is":"cJ","dz":"cJ","zr":"cM","r":{"E":["1"],"F":["1"],"Z":[],"n":["1"]},"i7":{"t":[],"a1":[]},"f6":{"ak":[],"a1":[]},"f7":{"Z":[]},"cJ":{"Z":[]},"i5":{"fs":[]},"lW":{"r":["1"],"E":["1"],"F":["1"],"Z":[],"n":["1"]},"d4":{"af":["1"]},"dj":{"v":[],"aN":[],"aD":["aN"]},"f5":{"v":[],"j":[],"aN":[],"aD":["aN"],"a1":[]},"i8":{"v":[],"aN":[],"aD":["aN"],"a1":[]},"dk":{"m":[],"aD":["m"],"rn":[],"a1":[]},"cV":{"n":["2"]},"eR":{"af":["2"]},"d6":{"cV":["1","2"],"n":["2"],"n.E":"2"},"fJ":{"d6":["1","2"],"cV":["1","2"],"F":["2"],"n":["2"],"n.E":"2"},"fH":{"J":["2"],"E":["2"],"cV":["1","2"],"F":["2"],"n":["2"]},"bS":{"fH":["1","2"],"J":["2"],"E":["2"],"cV":["1","2"],"F":["2"],"n":["2"],"J.E":"2","n.E":"2"},"dl":{"a7":[]},"d7":{"J":["j"],"c7":["j"],"E":["j"],"F":["j"],"n":["j"],"J.E":"j","c7.E":"j"},"F":{"n":["1"]},"a2":{"F":["1"],"n":["1"]},"fw":{"a2":["1"],"F":["1"],"n":["1"],"a2.E":"1","n.E":"1"},"bq":{"af":["1"]},"cn":{"n":["2"],"n.E":"2"},"da":{"cn":["1","2"],"F":["2"],"n":["2"],"n.E":"2"},"dn":{"af":["2"]},"S":{"a2":["2"],"F":["2"],"n":["2"],"a2.E":"2","n.E":"2"},"R":{"n":["1"],"n.E":"1"},"M":{"af":["1"]},"bY":{"n":["1"],"n.E":"1"},"fC":{"af":["1"]},"ep":{"J":["1"],"c7":["1"],"E":["1"],"F":["1"],"n":["1"]},"fr":{"a2":["1"],"F":["1"],"n":["1"],"a2.E":"1","n.E":"1"},"bx":{"et":[],"bI":[]},"az":{"eu":[],"bI":[]},"fV":{"ev":[],"bI":[]},"eT":{"cS":["1","2"],"ey":["1","2"],"ef":["1","2"],"h2":["1","2"],"W":["1","2"]},"e4":{"W":["1","2"]},"a4":{"e4":["1","2"],"W":["1","2"]},"dJ":{"n":["1"],"n.E":"1"},"dK":{"af":["1"]},"f_":{"e4":["1","2"],"W":["1","2"]},"eU":{"cr":["1"],"cO":["1"],"F":["1"],"n":["1"]},"ch":{"eU":["1"],"cr":["1"],"cO":["1"],"F":["1"],"n":["1"]},"fh":{"ct":[],"a7":[]},"i9":{"a7":[]},"iS":{"a7":[]},"fX":{"c6":[]},"cE":{"dd":[]},"hx":{"dd":[]},"hy":{"dd":[]},"iO":{"dd":[]},"iL":{"dd":[]},"e1":{"dd":[]},"iE":{"a7":[]},"bE":{"X":["1","2"],"pN":["1","2"],"W":["1","2"],"X.K":"1","X.V":"2"},"ah":{"F":["1"],"n":["1"],"n.E":"1"},"cK":{"af":["1"]},"aE":{"F":["1"],"n":["1"],"n.E":"1"},"an":{"af":["1"]},"U":{"F":["P<1,2>"],"n":["P<1,2>"],"n.E":"P<1,2>"},"fa":{"af":["P<1,2>"]},"f8":{"bE":["1","2"],"X":["1","2"],"pN":["1","2"],"W":["1","2"],"X.K":"1","X.V":"2"},"et":{"bI":[]},"eu":{"bI":[]},"ev":{"bI":[]},"eg":{"cM":[],"Z":[],"a1":[]},"dq":{"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"cM":{"Z":[],"a1":[]},"ff":{"Z":[]},"ii":{"Z":[],"a1":[]},"aF":{"bp":["1"],"Z":[]},"fd":{"J":["v"],"aF":["v"],"E":["v"],"bp":["v"],"F":["v"],"Z":[],"n":["v"],"ag":["v"]},"fe":{"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"]},"fc":{"la":[],"J":["v"],"aF":["v"],"E":["v"],"bp":["v"],"F":["v"],"Z":[],"n":["v"],"ag":["v"],"a1":[],"J.E":"v","ag.E":"v"},"ij":{"J":["v"],"aF":["v"],"E":["v"],"bp":["v"],"F":["v"],"Z":[],"n":["v"],"ag":["v"],"a1":[],"J.E":"v","ag.E":"v"},"ik":{"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"il":{"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"im":{"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"io":{"q_":[],"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"ip":{"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"fg":{"fx":[],"J":["j"],"aF":["j"],"E":["j"],"bp":["j"],"F":["j"],"Z":[],"n":["j"],"ag":["j"],"a1":[],"J.E":"j","ag.E":"j"},"jh":{"a7":[]},"fY":{"ct":[],"a7":[]},"by":{"af":["1"]},"ca":{"n":["1"],"n.E":"1"},"aC":{"a7":[]},"fE":{"jb":["1"]},"aj":{"bn":["1"]},"h8":{"rQ":[]},"jx":{"h8":[],"rQ":[]},"fL":{"X":["1","2"],"W":["1","2"]},"fN":{"fL":["1","2"],"X":["1","2"],"W":["1","2"],"X.K":"1","X.V":"2"},"dH":{"F":["1"],"n":["1"],"n.E":"1"},"fM":{"af":["1"]},"bH":{"cr":["1"],"rk":["1"],"cO":["1"],"F":["1"],"n":["1"]},"dL":{"af":["1"]},"J":{"E":["1"],"F":["1"],"n":["1"]},"X":{"W":["1","2"]},"fO":{"F":["2"],"n":["2"],"n.E":"2"},"fP":{"af":["2"]},"ef":{"W":["1","2"]},"cS":{"ey":["1","2"],"ef":["1","2"],"h2":["1","2"],"W":["1","2"]},"cr":{"cO":["1"],"F":["1"],"n":["1"]},"fW":{"cr":["1"],"cO":["1"],"F":["1"],"n":["1"]},"fy":{"cr":["1"],"jI":["1"],"cO":["1"],"F":["1"],"n":["1"]},"jm":{"X":["m","@"],"W":["m","@"],"X.K":"m","X.V":"@"},"jn":{"a2":["m"],"F":["m"],"n":["m"],"a2.E":"m","n.E":"m"},"hq":{"d8":["E<j>","m"]},"hM":{"d8":["m","E<j>"]},"f9":{"a7":[]},"ib":{"a7":[]},"ia":{"d8":["B?","m"]},"iW":{"d8":["m","E<j>"]},"d9":{"aD":["d9"]},"v":{"aN":[],"aD":["aN"]},"cG":{"aD":["cG"]},"j":{"aN":[],"aD":["aN"]},"E":{"F":["1"],"n":["1"]},"aN":{"aD":["aN"]},"cO":{"F":["1"],"n":["1"]},"m":{"aD":["m"],"rn":[]},"jg":{"H":[]},"hm":{"a7":[]},"ct":{"a7":[]},"bR":{"a7":[]},"ei":{"a7":[]},"i0":{"a7":[]},"fz":{"a7":[]},"iR":{"a7":[]},"en":{"a7":[]},"hA":{"a7":[]},"iq":{"a7":[]},"fu":{"a7":[]},"jG":{"c6":[]},"aT":{"w7":[]},"h4":{"iU":[]},"jA":{"iU":[]},"jc":{"iU":[]},"jl":{"pU":[]},"es":{"pU":[]},"dt":{"H":[]},"b9":{"cq":[]},"bs":{"cq":[]},"c2":{"cq":[]},"ck":{"cq":[]},"ir":{"cq":[]},"dh":{"H":[]},"hl":{"H":[]},"cv":{"H":[]},"e5":{"H":[]},"hs":{"H":[]},"hz":{"H":[]},"hI":{"H":[]},"dv":{"H":[]},"e9":{"H":[]},"bT":{"H":[]},"fq":{"H":[]},"cj":{"H":[]},"ej":{"H":[]},"fn":{"vZ":[]},"dI":{"br":[]},"ju":{"vY":[]},"ji":{"vi":[]},"ba":{"aD":["ba"]},"b7":{"aD":["b7"]},"ea":{"H":[]},"fG":{"H":[]},"eQ":{"aa":[]},"j9":{"a0":[]},"ht":{"aa":[]},"ja":{"a0":[]},"hG":{"aa":[]},"jd":{"a0":[]},"fI":{"H":[]},"eV":{"aa":[]},"je":{"a0":[]},"hK":{"aa":[]},"jf":{"a0":[]},"hY":{"aa":[]},"jk":{"a0":[]},"hu":{"vX":[]},"fk":{"aa":[]},"jv":{"a0":[]},"iy":{"aa":[]},"jw":{"a0":[]},"iG":{"aa":[]},"jy":{"a0":[]},"iH":{"aa":[]},"jz":{"a0":[]},"iK":{"aa":[]},"jD":{"a0":[]},"iJ":{"aa":[]},"jC":{"a0":[]},"iY":{"aa":[]},"jJ":{"a0":[]},"j5":{"aa":[]},"jK":{"a0":[]},"hU":{"H":[]},"f0":{"H":[]},"hW":{"H":[]},"hX":{"H":[]},"df":{"H":[]},"f1":{"H":[]},"dx":{"H":[]},"cR":{"H":[]},"e3":{"H":[]},"hH":{"v1":[]},"ew":{"H":[]},"aH":{"H":[]},"hr":{"H":[]},"d5":{"H":[]},"hD":{"H":[]},"hF":{"H":[]},"d_":{"ci":[]},"j4":{"vl":[]},"hp":{"H":[]},"bD":{"H":[]},"de":{"H":[]},"db":{"H":[]},"dc":{"H":[]},"cH":{"H":[]},"eZ":{"H":[]},"cI":{"H":[]},"fo":{"H":[]},"du":{"H":[]},"bd":{"H":[]},"b_":{"H":[]},"i2":{"H":[]},"dE":{"H":[]},"bF":{"H":[]},"b8":{"H":[]},"bt":{"H":[]},"bu":{"H":[]},"cT":{"H":[]},"c8":{"H":[]},"fU":{"pW":[]},"er":{"pW":[]},"vs":{"E":["j"],"F":["j"],"n":["j"]},"fx":{"E":["j"],"F":["j"],"n":["j"]},"wc":{"E":["j"],"F":["j"],"n":["j"]},"vq":{"E":["j"],"F":["j"],"n":["j"]},"q_":{"E":["j"],"F":["j"],"n":["j"]},"vr":{"E":["j"],"F":["j"],"n":["j"]},"wb":{"E":["j"],"F":["j"],"n":["j"]},"la":{"E":["v"],"F":["v"],"n":["v"]},"vh":{"E":["v"],"F":["v"],"n":["v"]}}'))
A.wL(v.typeUniverse,JSON.parse('{"ep":1,"h9":2,"aF":1,"fW":1,"h3":1,"hC":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",p:"MaterialDefinition uv scale must not be zero",n:"MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",i:"MaterialDefinition.emissiveStrength must be >= 0: 0",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aq
return{lC:s("eP"),B:s("bQ"),v:s("aC"),f5:s("ho"),gE:s("dX"),fS:s("dY"),d2:s("dZ"),lJ:s("e_"),dP:s("b7"),kp:s("hv"),gS:s("d7"),bP:s("aD<@>"),e3:s("eS"),D:s("a4<m,m>"),I:s("a4<m,j>"),U:s("ch<m>"),ml:s("d9"),lD:s("b8"),jS:s("cG"),gt:s("F<@>"),no:s("bD"),L:s("bm"),V:s("a7"),hZ:s("aO"),pk:s("la"),gY:s("dd"),mj:s("bn<ak>"),_:s("ci"),bU:s("cI"),mm:s("c_"),lv:s("i_<B>"),hL:s("ck"),ob:s("c0"),gB:s("cl"),dp:s("n<eS>"),bq:s("n<m>"),id:s("n<v>"),e7:s("n<@>"),fm:s("n<j>"),od:s("r<bQ>"),ag:s("r<hL>"),hS:s("r<cF>"),r:s("r<bm>"),oP:s("r<aO>"),iw:s("r<bn<~>>"),mc:s("r<hR>"),l2:s("r<ci>"),aW:s("r<bo>"),iG:s("r<f3>"),dL:s("r<eb>"),oX:s("r<zq<B>>"),og:s("r<di>"),jj:s("r<ck>"),W:s("r<Z>"),b1:s("r<ic>"),cs:s("r<aY>"),ic:s("r<W<m,B>>"),hq:s("r<W<m,m>>"),bV:s("r<W<m,@>>"),kS:s("r<ie>"),mn:s("r<dp>"),dg:s("r<b9>"),hJ:s("r<al>"),x:s("r<bb>"),de:s("r<dr>"),bz:s("r<c3>"),dQ:s("r<iu>"),aN:s("r<bc>"),bM:s("r<+(m,E<bc>)>"),fR:s("r<+(j,m)>"),a3:s("r<+(v,v,v,v)>"),o5:s("r<aa>"),u:s("r<a0>"),oZ:s("r<fn>"),C:s("r<Q>"),c8:s("r<aZ>"),bH:s("r<br>"),kl:s("r<aG>"),e_:s("r<c5>"),b2:s("r<el>"),ao:s("r<as<b7>>"),mX:s("r<as<ba>>"),jn:s("r<cP>"),s:s("r<m>"),aA:s("r<iN>"),k:s("r<z>"),h:s("r<b>"),cF:s("r<fB>"),bl:s("r<cx>"),ah:s("r<bG>"),E:s("r<aU>"),jX:s("r<cX>"),a9:s("r<cW>"),jU:s("r<jt>"),dz:s("r<cY<cL>>"),jk:s("r<cY<bU>>"),n_:s("r<cY<aZ>>"),mQ:s("r<cY<cy>>"),eP:s("r<ex>"),df:s("r<t>"),n:s("r<v>"),dG:s("r<@>"),t:s("r<j>"),kC:s("r<Z?>"),dM:s("r<B?>"),g2:s("r<aN>"),T:s("f6"),m:s("Z"),d4:s("Z()"),dY:s("cm"),dX:s("bp<@>"),bY:s("E<bm>"),b:s("E<bo>"),l_:s("E<W<m,m>>"),O:s("E<al>"),b3:s("E<c3>"),fB:s("E<bc>"),jz:s("E<+(j,m)>"),ge:s("E<+(v,v,v,v)>"),io:s("E<c5>"),a:s("E<m>"),iD:s("E<fB>"),ee:s("E<cx>"),eU:s("E<bG>"),cu:s("E<fK>"),j:s("E<@>"),J:s("E<j>"),ia:s("E<B?>"),mK:s("fb"),gc:s("P<m,m>"),d7:s("P<@,@>"),iI:s("P<j,@>"),f7:s("W<m,ci>"),iE:s("W<m,al>"),G:s("W<m,m>"),oQ:s("W<m,t>"),P:s("W<m,@>"),f:s("W<@,@>"),d8:s("W<j,dA>"),c_:s("W<j,dB>"),gz:s("W<m,E<+(v,v,v,v)>>"),kz:s("W<bu,E<bG>>"),iu:s("W<j,W<m,m>>"),mz:s("S<z,z>"),dD:s("S<m,m?>"),fP:s("c2"),l0:s("b9"),eb:s("eg"),mR:s("dq"),c:s("ak"),K:s("B"),nL:s("ba"),A:s("al"),f0:s("c3"),Q:s("bc"),ku:s("fj"),lZ:s("zs"),aK:s("+()"),o7:s("+(b9,bU)"),p3:s("+(bs,cy)"),cW:s("+(v,v,v,v)"),ks:s("a0"),mo:s("c4<ck,aZ>"),kk:s("c4<c2,cL>"),ll:s("c4<b9,bU>"),ox:s("c4<bs,cy>"),n4:s("Q"),p9:s("aZ"),os:s("br"),Y:s("aG"),k8:s("c5"),R:s("cO<m>"),nO:s("cO<j>"),m9:s("b_"),gC:s("bd"),ad:s("el"),d:s("as<b7>"),p:s("as<ba>"),l:s("c6"),fO:s("cP"),dB:s("aH"),N:s("m"),lu:s("bs"),aJ:s("a1"),do:s("ct"),cx:s("dz"),ph:s("cS<m,m>"),mL:s("iT"),jJ:s("iU"),b9:s("z"),bf:s("b"),pc:s("z(z)"),g:s("be"),nq:s("bt"),kM:s("bu"),bR:s("dA"),ey:s("dB"),mv:s("cx"),kX:s("bG"),cq:s("bf"),bn:s("R<b8>"),ns:s("R<bD>"),hr:s("R<b_>"),am:s("R<bd>"),nn:s("R<m>"),cB:s("R<bt>"),na:s("R<bu>"),lS:s("bY<m>"),Z:s("aU"),fH:s("fK"),e:s("aj<@>"),mp:s("fN<B?,B?>"),j8:s("jq"),fg:s("cX"),at:s("cW"),ln:s("jr"),fw:s("js"),bp:s("jB"),hX:s("jE"),fJ:s("ca<br>"),jg:s("h6"),fL:s("h7"),y:s("t"),al:s("t()"),hg:s("t(b8)"),gl:s("t(bD)"),iW:s("t(B)"),aZ:s("t(b_)"),gw:s("t(bd)"),dA:s("t(m)"),bQ:s("t(bt)"),nw:s("t(bu)"),i:s("v"),z:s("@"),mY:s("@()"),mq:s("@(B)"),ng:s("@(B,c6)"),S:s("j"),gK:s("bn<ak>?"),mU:s("Z?"),lH:s("E<@>?"),X:s("B?"),w:s("m?"),ej:s("m?(m)"),nh:s("fx?"),F:s("dF<@,@>?"),q:s("jo?"),fU:s("t?"),hK:s("t(ek)?"),dC:s("v?"),aV:s("j?"),jh:s("aN?"),jE:s("~()?"),as:s("~(bd,b_)?"),ov:s("~(m)?"),hm:s("~(m,v)?"),cz:s("~(t)?"),bZ:s("~(j)?"),o:s("aN"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e2=J.i3.prototype
B.a=J.r.prototype
B.c=J.f5.prototype
B.d=J.dj.prototype
B.b=J.dk.prototype
B.e3=J.cm.prototype
B.e4=J.f7.prototype
B.u=A.fc.prototype
B.by=A.fg.prototype
B.bz=J.is.prototype
B.aJ=J.dz.prototype
B.hL=new A.hl(0,"opaque")
B.cj=new A.hp(4,"ambience")
B.ac=new A.hr(0,"add")
B.ck=new A.d5(0,"zero")
B.ad=new A.d5(1,"one")
B.S=new A.hs(0,"alpha")
B.aP=new A.eP()
B.ae=new A.kD()
B.hM=new A.kF()
B.cn=new A.hq()
B.aQ=new A.kJ()
B.aR=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ct=function() {
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
B.cy=function(getTagFallback) {
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
B.cu=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cx=function(hooks) {
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
B.cw=function(hooks) {
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
B.cv=function(hooks) {
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
B.aS=function(hooks) { return hooks; }

B.p=new A.ia()
B.hN=new A.m8()
B.cz=new A.B()
B.cA=new A.iq()
B.hO=new A.mw()
B.cB=new A.mx()
B.cC=new A.c5()
B.P=new A.bF(1,"gradeLUT")
B.cD=new A.c5()
B.cE=new A.n1()
B.cF=new A.n3()
B.l=new A.n6()
B.F=new A.z(0,1,0)
B.a5=new A.z(0,-1,0)
B.bh=new A.dm(1,1,1)
B.cG=new A.em()
B.aT=new A.iW()
B.h7=new A.cv(0,"position")
B.hd=new A.cw(B.h7,0,3)
B.h8=new A.cv(1,"normal")
B.he=new A.cw(B.h8,3,3)
B.h9=new A.cv(2,"color")
B.hf=new A.cw(B.h9,6,4)
B.ha=new A.cv(4,"alpha")
B.hg=new A.cw(B.ha,10,1)
B.hb=new A.cv(5,"uv0")
B.hh=new A.cw(B.hb,11,2)
B.hc=new A.cv(6,"legacyMaterialEffect")
B.hi=new A.cw(B.hc,13,1)
B.ao=s([B.hd,B.he,B.hf,B.hg,B.hh,B.hi],A.aq("r<cw>"))
B.T=new A.nA()
B.aU=new A.jl()
B.r=new A.jx()
B.U=new A.jG()
B.aV=new A.e3(0,"colorOnly")
B.aW=new A.e3(1,"colorAndDepth")
B.af=new A.e3(2,"depthOnly")
B.ag=new A.hD(1,"back")
B.ah=new A.hF(0,"less")
B.V=new A.b8(0,"open")
B.aX=new A.b8(1,"chain")
B.aY=new A.b8(2,"throughDoor")
B.aZ=new A.b8(3,"letterbox")
B.K=new A.b8(4,"ignore")
B.L=new A.e5(0,"opaque")
B.cH=new A.e5(1,"masked")
B.ai=new A.e5(2,"blended")
B.cI=new A.eW(!0,B.ah,!1,!0,B.ad,B.ad,B.ac,!0,B.ag,!0,!1,!0,!0,!0,!0,!1)
B.cl=new A.d5(2,"srcAlpha")
B.cm=new A.d5(3,"oneMinusSrcAlpha")
B.cJ=new A.eW(!0,B.ah,!1,!0,B.cl,B.cm,B.ac,!0,B.ag,!0,!1,!0,!0,!0,!0,!1)
B.cK=new A.cG(0)
B.cL=new A.cG(24e5)
B.b_=new A.bD(0,"compliance")
B.cM=new A.e6(B.b_)
B.b0=new A.bD(1,"rupture")
B.cN=new A.e6(B.b0)
B.b1=new A.bD(2,"synchronisation")
B.cO=new A.e6(B.b1)
B.b2=new A.db(0,"front")
B.cP=new A.db(1,"rearService")
B.cQ=new A.db(2,"sideBoundary")
B.cR=new A.db(3,"roofline")
B.i=new A.cH(0,"north")
B.w=new A.cH(1,"east")
B.k=new A.cH(2,"south")
B.G=new A.cH(3,"west")
B.W=new A.eZ(0,"ground")
B.X=new A.eZ(1,"first")
B.cS=new A.dc(0,"mantle")
B.cT=new A.dc(1,"portal")
B.cV=new A.dc(3,"none")
B.cW=new A.e8(B.cV,null)
B.cU=new A.dc(2,"window")
B.cX=new A.e8(B.cU,"the shutter")
B.cY=new A.I("saved mantle history is malformed",null,null)
B.cZ=new A.I("rupture elapsed time is malformed",null,null)
B.d_=new A.I("presentation keys must be strings",null,null)
B.b3=new A.I("saved mantle state is malformed",null,null)
B.d0=new A.I("inactive rupture has elapsed time",null,null)
B.d1=new A.I("listener room is empty",null,null)
B.d2=new A.I("saved difficulty state is malformed",null,null)
B.d3=new A.I("saved house drift state is malformed",null,null)
B.d4=new A.I("saved sleep record is malformed",null,null)
B.d5=new A.I("saved day-loop sleepHistory must be a list",null,null)
B.d6=new A.I("audio event position is not finite",null,null)
B.d7=new A.I("event sequence must be non-negative",null,null)
B.d8=new A.I("modelScale must be positive and finite",null,null)
B.d9=new A.I("listener position is not finite",null,null)
B.da=new A.I("saved window state is malformed",null,null)
B.db=new A.I("save run and meta must be objects",null,null)
B.dc=new A.I("saved house state is malformed",null,null)
B.dd=new A.I("saved sleep record must be an object",null,null)
B.de=new A.I("sound cue must be a non-empty string",null,null)
B.df=new A.I("saved session run is malformed",null,null)
B.dg=new A.I("save map keys must be strings",null,null)
B.dh=new A.I("transform.scale must be positive",null,null)
B.di=new A.I("saved day-loop state is malformed",null,null)
B.dj=new A.I("rupture extinguished mantle is unknown",null,null)
B.b4=new A.I("saved portal state is malformed",null,null)
B.dk=new A.I("acoustic portal profile is not finite",null,null)
B.dl=new A.I("saved house state does not match this house",null,null)
B.dm=new A.I("presentation snapshot contains a non-finite number",null,null)
B.dn=new A.I("save contains a non-finite number",null,null)
B.dp=new A.I("text.json root must be an object",null,null)
B.dq=new A.I("event kind is empty",null,null)
B.dr=new A.I("saved session clock is malformed",null,null)
B.ds=new A.I("rupture mantle IDs are malformed",null,null)
B.dt=new A.I("saved sleep record has an unknown enum",null,null)
B.du=new A.I("audio cue variants are empty",null,null)
B.dv=new A.I("save root must be an object",null,null)
B.dw=new A.I("audio event identity is empty",null,null)
B.dx=new A.I("render capabilities contain invalid limits",null,null)
B.dy=new A.I("saved house overrides are malformed",null,null)
B.bg=new A.dm(0,0,0)
B.ew=s([],t.dQ)
B.hR=s([],A.aq("r<em>"))
B.dz=new A.hQ(B.bg,0,1,B.bh,0,null,B.ew)
B.dA=new A.e9(0,"idle")
B.aj=new A.e9(1,"active")
B.dB=new A.e9(2,"ended")
B.b5=new A.ea(0,"outside")
B.dC=new A.ea(1,"intersects")
B.dD=new A.ea(2,"inside")
B.dE=new A.de(0,"timeAdvanced")
B.dF=new A.de(1,"dayEndReached")
B.dG=new A.de(4,"slept")
B.dH=new A.de(5,"complianceFloorTripped")
B.dI=new A.f0(0,"vertex")
B.b6=new A.f0(1,"indices")
B.b7=new A.hU(0,"staticDraw")
B.f=new A.f1(0,"ready")
B.M=new A.f1(1,"lost")
B.dJ=new A.df(0,"color")
B.b8=new A.df(1,"colorAndGlow")
B.dK=new A.df(2,"colorDepthGlow")
B.ak=new A.df(3,"depthOnly")
B.Y=new A.hW(1,"linear")
B.b9=new A.hX(0,"clampToEdge")
B.dL=new A.hV(1,1,1,!1,B.Y,B.Y,B.b9)
B.dM=new A.cj(0,"beforeShadow")
B.dN=new A.cj(2,"beforeDepth")
B.ba=new A.cj(3,"afterDepth")
B.bb=new A.cj(4,"beforeWorld")
B.y=new A.cj(6,"afterResolve")
B.dO=new A.cj(9,"beforePresent")
B.bc=new A.bT(0,"readBeforeWrite")
B.dP=new A.bT(1,"duplicateWriter")
B.dQ=new A.bT(2,"sampledMultisampledAttachment")
B.dR=new A.bT(4,"formatOrSizeMismatch")
B.dS=new A.bT(5,"unversionedReadWrite")
B.dT=new A.bT(6,"invalidHistoryRead")
B.dU=new A.bT(7,"dependencyCycle")
B.dV=new A.bT(8,"missingCapability")
B.Z=new A.cI(0,"player")
B.al=new A.cI(1,"inserted")
B.bd=new A.cI(2,"warden")
B.be=new A.dh(0,"wrongKind")
B.bf=new A.dh(1,"staleGeneration")
B.dW=new A.dh(2,"doubleRelease")
B.am=new A.dh(3,"releasedResource")
B.dZ=new A.eb("kitchen-range","settle")
B.e_=new A.eb("cellar-drain","drip")
B.e0=new A.eb("bathroom-cistern","settle")
B.e1=new A.i2(1,"visitor")
B.e5=new A.m5(null)
B.e6=new A.m6(null)
B.e7=new A.dm(0.03,0.03,0.04)
B.bi=s([0,2,2,3],t.t)
B.e8=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.co=new A.cF()
B.cp=new A.cF()
B.cq=new A.cF()
B.cr=new A.cF()
B.cs=new A.cF()
B.e9=s([B.co,B.cp,B.cq,B.cr,B.cs],t.hS)
B.ea=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.t=s(["who","verb","object","place","time"],t.s)
B.eb=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.ec=s([2,5,9,12,16,19],t.t)
B.ed=s(["uQuantizationBits","uDitherStrength"],t.s)
B.ee=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.ef=s([B.V,B.aX,B.aY,B.aZ,B.K],A.aq("r<b8>"))
B.eg=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.R=new A.bu(0,"full")
B.aL=new A.bu(1,"compressed")
B.aM=new A.bu(2,"off")
B.bj=s([B.R,B.aL,B.aM],A.aq("r<bu>"))
B.fx=new A.az("master","Master",1)
B.fv=new A.az("voice","Visitor voice",1)
B.fu=new A.az("effects","Effects",1)
B.fq=new A.az("ambience","House ambience",1)
B.fy=new A.az("music","Music",1)
B.eh=s([B.fx,B.fv,B.fu,B.fq,B.fy],A.aq("r<+(m,m,v)>"))
B.ei=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.ej=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.ek=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.el=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fO=new A.bd(0,"long")
B.c7=new A.bd(1,"short")
B.bk=s([B.fO,B.c7],A.aq("r<bd>"))
B.em=s([2.1,4.2,6.3],t.n)
B.en=s(["master","voice","effects","ambience","music"],t.s)
B.eo=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.bF(0,"inactive")
B.aw=new A.bF(2,"affineWarp")
B.ax=new A.bF(3,"vertexSnap")
B.ay=new A.bF(4,"tapeGiveup")
B.az=new A.bF(5,"portalFail")
B.I=new A.bF(6,"lightsOut")
B.bl=s([B.x,B.P,B.aw,B.ax,B.ay,B.az,B.I],A.aq("r<bF>"))
B.ep=s([B.Z,B.al,B.bd],A.aq("r<cI>"))
B.eq=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.z=s([],t.hS)
B.ey=s([],t.iG)
B.ex=s([],t.dL)
B.er=s([],A.aq("r<cl>"))
B.et=s([],t.cs)
B.an=s([],t.x)
B.ev=s([],t.bz)
B.H=s([],t.aN)
B.eu=s([],t.u)
B.bn=s([],t.e_)
B.es=s([],t.b2)
B.m=s([],t.s)
B.bo=s([],t.cF)
B.bm=s([],t.E)
B.ez=s([],t.t)
B.eA=s([],t.dG)
B.dY=new A.f4(15,"kitchen",-0.3,0)
B.dX=new A.f4(19,"spare-room",0,0.3)
B.A=s([B.dY,B.dX],A.aq("r<f4>"))
B.eB=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.fL=new A.b_(0,"bed")
B.fM=new A.b_(1,"chair")
B.fN=new A.b_(2,"floor")
B.bp=s([B.fL,B.fM,B.fN],A.aq("r<b_>"))
B.bq=s([B.i,B.w,B.k,B.G],A.aq("r<cH>"))
B.aA=new A.aH(0,"depthTest")
B.aB=new A.aH(1,"depthFunc")
B.aC=new A.aH(2,"depthWrite")
B.aD=new A.aH(3,"blendEnable")
B.aE=new A.aH(4,"blendFunc")
B.aF=new A.aH(5,"blendEquation")
B.aG=new A.aH(6,"cullEnable")
B.aH=new A.aH(7,"cullFace")
B.ca=new A.aH(8,"frontFace")
B.fP=new A.aH(9,"stencilEnable")
B.c8=new A.aH(10,"colorMask")
B.c9=new A.aH(11,"scissorEnable")
B.eC=s([B.aA,B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.aH,B.ca,B.fP,B.c8,B.c9],A.aq("r<aH>"))
B.eD=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.eE=s(["uBloomStrength"],t.s)
B.eF=s(["uLutSize","uStrength"],t.s)
B.eG=s([B.b_,B.b0,B.b1],A.aq("r<bD>"))
B.eH=s(["wall-plaster","grime"],t.s)
B.eI=s(["uTexelSize","uNear","uFar"],t.s)
B.br=s(["uTexelStep"],t.s)
B.eJ=s(["uninitialized"],t.s)
B.J=new A.bt(0,"waiting")
B.a6=new A.bt(1,"atDoor")
B.a7=new A.bt(2,"consulting")
B.a8=new A.bt(3,"resolved")
B.eK=s([B.J,B.a6,B.a7,B.a8],A.aq("r<bt>"))
B.f9={uAlbedo:0}
B.bs=new A.a4(B.f9,[0],t.I)
B.f_={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.bt=new A.a4(B.f_,[2,3,4,5,6],t.I)
B.fi={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eL=new A.a4(B.fi,[0,1,2],t.I)
B.fg={uSsaoRaw:0,uSceneDepth:1}
B.eM=new A.a4(B.fg,[0,1],t.I)
B.fd={uScene:0,uHistory:1}
B.eN=new A.a4(B.fd,[0,1],t.I)
B.f0={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.eO=new A.a4(B.f0,["d004e52a550696538afaab098008c0e195ce13dc","9900c9b38935a3b194c43bff8d0f04d0ee6c767c","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.D)
B.f6={aPosition:0,aUvMat:1}
B.bu=new A.a4(B.f6,[0,4],t.I)
B.fe={uScene:0,uLut:1}
B.eP=new A.a4(B.fe,[0,1],t.I)
B.ff={uSource:0}
B.bv=new A.a4(B.ff,[0],t.I)
B.f1={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.eQ=new A.a4(B.f1,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.f5={uSharp:0,uBlurred:1,uSceneDepth:2}
B.eR=new A.a4(B.f5,[0,1,2],t.I)
B.fa={uBloom:0}
B.eS=new A.a4(B.fa,[0],t.I)
B.fb={uSceneDepth:0}
B.eT=new A.a4(B.fb,[0],t.I)
B.fc={uScene:0}
B.eU=new A.a4(B.fc,[0],t.I)
B.N={}
B.bx=new A.a4(B.N,[],A.aq("a4<m,eP>"))
B.bw=new A.a4(B.N,[],t.D)
B.q=new A.a4(B.N,[],t.I)
B.eV=new A.a4(B.N,[],A.aq("a4<@,@>"))
B.f7={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.eW=new A.a4(B.f7,[0,1,2,3],t.I)
B.f2={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eX=new A.a4(B.f2,[0,1,2,3,4],t.I)
B.fh={uTex:0}
B.eY=new A.a4(B.fh,[0],t.I)
B.ap=new A.f_([B.P,1,B.aw,1.5,B.ax,1.5,B.ay,2,B.az,2,B.I,4],A.aq("f_<bF,v>"))
B.fj=new A.ir(0,1,null)
B.fk=new A.iv(1,0,0,0,8,0,0,0,0,0,0,!1)
B.aq=new A.dt(0,"safe")
B.ar=new A.dt(1,"standard")
B.as=new A.dt(2,"high")
B.C=new A.ch(B.N,0,t.U)
B.a_=new A.ds(B.aq,B.C)
B.f8={shadows:0}
B.fJ=new A.ch(B.f8,1,t.U)
B.fm=new A.ds(B.ar,B.fJ)
B.f3={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.fG=new A.ch(B.f3,5,t.U)
B.fn=new A.ds(B.as,B.fG)
B.fl=new A.dt(4,"shipping")
B.f4={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.fH=new A.ch(B.f4,7,t.U)
B.hS=new A.ds(B.fl,B.fH)
B.fp=new A.az(0.54,0.5,0.44)
B.bA=new A.az(0.72,0.52,0.37)
B.fr=new A.az(0.78,0.7,0.54)
B.fs=new A.az(0.86,0.78,0.66)
B.ft=new A.az(0.82,0.8,0.73)
B.fw=new A.az(0.6,0.55,0.48)
B.fz=new A.az(0.68,0.62,0.57)
B.a0=new A.fo(0,"legacy")
B.a1=new A.fo(1,"next")
B.bB=new A.du(0,"constructed")
B.v=new A.du(1,"ready")
B.a2=new A.du(2,"lost")
B.bC=new A.du(3,"disposed")
B.hP=new A.hz(1,"srgb")
B.hQ=new A.hI(1,"errorsOnly")
B.fA=new A.iB(B.a_,384,216,0)
B.at=new A.dv(0,"constructed")
B.fB=new A.dv(1,"initializing")
B.au=new A.dv(2,"ready")
B.bD=new A.dv(3,"contextLost")
B.h=new A.ej(0,"read")
B.j=new A.ej(1,"write")
B.B=new A.ej(2,"historyRead")
B.n=new A.fq(0,"rgba8")
B.bF=new A.aS("dofBlurH",B.n,192,108,1,0)
B.bG=new A.aS("dofBlurV",B.n,192,108,1,0)
B.bH=new A.aS("dofOutput",B.n,384,216,1,0)
B.bL=new A.aS("gradeOutput",B.n,384,216,1,0)
B.av=new A.aS("vhsOutput",B.n,384,216,1,0)
B.bM=new A.aS("bloomBlurH",B.n,192,108,1,0)
B.bN=new A.aS("bloomBlurV",B.n,192,108,1,0)
B.O=new A.aS("sceneColor",B.n,384,216,1,0)
B.bO=new A.aS("ps1Output",B.n,384,216,1,0)
B.bK=new A.aS("ssaoBlurred",B.n,192,108,1,0)
B.bP=new A.Q(B.bK,B.j)
B.bJ=new A.aS("ssaoRaw",B.n,192,108,1,0)
B.bQ=new A.Q(B.bJ,B.j)
B.a3=new A.Q(B.O,B.j)
B.bR=new A.Q(B.av,B.j)
B.bS=new A.Q(B.av,B.B)
B.bT=new A.Q(B.bL,B.j)
B.bE=new A.fq(2,"depth24")
B.bI=new A.aS("shadowMap",B.bE,512,512,1,0)
B.bU=new A.Q(B.bI,B.j)
B.bV=new A.Q(B.bH,B.j)
B.bW=new A.Q(B.bJ,B.h)
B.bX=new A.Q(B.O,B.h)
B.fC=new A.aS("sceneDepth",B.bE,384,216,1,0)
B.bY=new A.Q(B.fC,B.j)
B.bZ=new A.Q(B.bI,B.h)
B.c_=new A.Q(B.bO,B.j)
B.c0=new A.Q(B.bG,B.h)
B.c1=new A.Q(B.bK,B.h)
B.c2=new A.Q(B.bN,B.h)
B.fD=new A.dw(null,"save storage unavailable")
B.fE=new A.dw(null,"save could not be recovered")
B.fF=new A.dw(null,null)
B.eZ={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fI=new A.ch(B.eZ,9,t.U)
B.c5=new A.dx(2,"link")
B.fK=new A.ft(B.c5,"gl.createProgram() returned null")
B.c3=new A.dx(0,"vertex")
B.c4=new A.dx(1,"fragment")
B.c6=new A.dx(3,"validation")
B.aK=new A.z(0,0,0)
B.fo=new A.iz(0,0,0,1)
B.Q=new A.iQ(B.aK,B.fo)
B.fQ=A.bO("zl")
B.fR=A.bO("zm")
B.fS=A.bO("la")
B.fT=A.bO("vh")
B.fU=A.bO("vq")
B.fV=A.bO("vr")
B.fW=A.bO("vs")
B.fX=A.bO("Z")
B.fY=A.bO("B")
B.fZ=A.bO("q_")
B.h_=A.bO("wb")
B.h0=A.bO("wc")
B.h1=A.bO("fx")
B.e=new A.cR(0,"float1")
B.cb=new A.cR(1,"float2")
B.D=new A.cR(2,"float3")
B.o=new A.cR(3,"mat4")
B.aI=new A.cR(4,"sampler")
B.E=new A.G(B.aI,0)
B.a4=new A.G(B.aI,1)
B.cc=new A.G(B.aI,2)
B.h2=new A.nz(!1)
B.h3=new A.z(0,0,1)
B.h4=new A.z(1,0,0)
B.h5=new A.z(1/0,1/0,1/0)
B.h6=new A.z(-1/0,-1/0,-1/0)
B.hj=new A.cT(0,"visitorAnswered")
B.cd=new A.cT(1,"visitorIgnored")
B.hk=new A.cT(2,"entryVerified")
B.hl=new A.cT(3,"entryContradicted")
B.hm=new A.cT(4,"exposureAccepted")
B.ho=new A.c8(1,"malformedDay")
B.hp=new A.c8(2,"malformedTier")
B.ce=new A.c8(3,"missingTierLines")
B.aN=new A.c8(6,"invalidPhase")
B.hv=new A.bv(B.aN,"The active visit cannot be chosen.")
B.hy=new A.bf(B.hv)
B.hs=new A.bv(B.aN,"The active visit has no line to advance.")
B.hz=new A.bf(B.hs)
B.hr=new A.c8(5,"noActiveVisit")
B.ht=new A.bv(B.hr,"There is no active visit.")
B.cf=new A.bf(B.ht)
B.hu=new A.bv(B.aN,"A visit is already active.")
B.hA=new A.bf(B.hu)
B.hq=new A.c8(4,"noArrival")
B.hx=new A.bv(B.hq,"The authored arrival is missing.")
B.hB=new A.bf(B.hx)
B.hn=new A.c8(0,"missingCorpus")
B.hw=new A.bv(B.hn,"The authored visitor corpus is empty.")
B.hC=new A.bf(B.hw)
B.cg=new A.dE(1,"exact")
B.aO=new A.dE(2,"partial")
B.a9=new A.dE(3,"contradiction")
B.hD=new A.dE(0,"skipped")
B.hE=new A.dD(B.hD,B.C)
B.hF=new A.dD(B.aO,B.C)
B.hG=new A.fD(B.H,!1)
B.hH=new A.fD(B.H,!0)
B.ch=new A.fG(0,"horizontal")
B.hI=new A.fG(1,"vertical")
B.ci=new A.fI(0,"horizontal")
B.hJ=new A.fI(1,"vertical")
B.aa=new A.ew(0,"empty")
B.hK=new A.ew(1,"cpuReady")
B.ab=new A.ew(4,"released")})();(function staticFields(){$.o6=null
$.bC=A.f([],A.aq("r<B>"))
$.ro=null
$.mC=0
$.mD=A.xX()
$.qY=null
$.qX=null
$.tY=null
$.tS=null
$.u2=null
$.p8=null
$.pf=null
$.qM=null
$.od=A.f([],A.aq("r<E<B>?>"))
$.eG=null
$.hc=null
$.hd=null
$.qr=!1
$.ab=B.r
$.rF=""
$.rG=null
$.rB=null
$.ms=null
$.bh=A.ac()
$.cz=A.ac()
$.bM=null
$.jR=null
$.C=A.ac()
$.bK=A.ac()
$.bi=A.ac()
$.tc=A.ac()
$.eH=null
$.Y=A.ac()
$.ox=null
$.dO=A.ac()
$.T=A.ac()
$.qg=A.ac()
$.qm=null
$.bA=null
$.qh=!1
$.qx=!1
$.tu=null
$.qn=null
$.ot=null
$.tj=0
$.qt=!1
$.tt=!1
$.qs=0
$.tA=0
$.oo=0
$.tR=!1
$.tk="booting"
$.bN=0
$.dP=0
$.aK="hall"
$.ha=A.ac()
$.eA=A.ac()
$.bj=A.ac()
$.tz=null
$.qy=0
$.aJ=null
$.eB=A.ac()
$.jN=A.ac()
$.td=A.ac()
$.tb=A.ac()
$.aA=A.ac()
$.jO=A.ac()
$.jM=A.ac()
$.dN=A.ac()
$.qf=A.ac()
$.aI=A.ac()
$.jL=A.ac()
$.qe=A.ac()
$.p_=A.a5(t.S)
$.cb=A.f([],t.s)
$.ql=null
$.tM=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"zo","ub",()=>A.tX("_$dart_dartClosure"))
s($,"zn","eN",()=>A.tX("_$dart_dartClosure_dartJSInterop"))
s($,"zP","uv",()=>A.f([new J.i5()],A.aq("r<fs>")))
s($,"zv","ud",()=>A.cu(A.nu({
toString:function(){return"$receiver$"}})))
s($,"zw","ue",()=>A.cu(A.nu({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"zx","uf",()=>A.cu(A.nu(null)))
s($,"zy","ug",()=>A.cu(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"zB","uj",()=>A.cu(A.nu(void 0)))
s($,"zC","uk",()=>A.cu(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"zA","ui",()=>A.cu(A.rC(null)))
s($,"zz","uh",()=>A.cu(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"zE","um",()=>A.cu(A.rC(void 0)))
s($,"zD","ul",()=>A.cu(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"zF","qR",()=>A.ws())
s($,"zJ","uq",()=>A.vH(4096))
s($,"zH","uo",()=>new A.om().$0())
s($,"zI","up",()=>new A.ol().$0())
s($,"zG","un",()=>new Int8Array(A.a3(A.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"zL","k1",()=>A.k0(B.fY))
s($,"zt","qQ",()=>{A.vV()
return $.mC})
s($,"zk","pG",()=>new A.aS("sceneColor",B.n,384,216,1,1))
s($,"zp","uc",()=>A.vI(A.f([255,255,255,255],t.t)))
s($,"zQ","uw",()=>A.iX(0,1,0))
s($,"zT","k3",()=>{var q=$.rB
if(q==null){A.jY()
A.jY()
A.jY()
A.jY()
A.jY()
q=$.rB=new A.nn()}return q})
s($,"zK","ur",()=>new A.kE())
s($,"zM","us",()=>new A.lw())
s($,"zN","ut",()=>new A.lF())
r($,"qD","eO",()=>A.iX(0,0,0))
r($,"qv","uu",()=>A.iX(0,0,0))
r($,"qH","hh",()=>A.iX(0,0,0))
s($,"zO","k2",()=>new A.lb(A.iX(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cM,ArrayBuffer:A.eg,ArrayBufferView:A.ff,DataView:A.ii,Float32Array:A.fc,Float64Array:A.ij,Int16Array:A.ik,Int32Array:A.il,Int8Array:A.im,Uint16Array:A.io,Uint32Array:A.ip,Uint8ClampedArray:A.dq,CanvasPixelArray:A.dq,Uint8Array:A.fg})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.fQ.$nativeSuperclassTag="ArrayBufferView"
A.fR.$nativeSuperclassTag="ArrayBufferView"
A.fd.$nativeSuperclassTag="ArrayBufferView"
A.fS.$nativeSuperclassTag="ArrayBufferView"
A.fT.$nativeSuperclassTag="ArrayBufferView"
A.fe.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$2$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.pg
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()