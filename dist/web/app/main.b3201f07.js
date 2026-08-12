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
if(a[b]!==s){A.Gf(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
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
x2(a,b,c,d){return{i:a,p:b,e:c,x:d}},
v0(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.x0==null){A.FP()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.y9("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.te
if(o==null)o=$.te=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.FV(a)
if(p!=null)return p
if(typeof a=="function")return B.hH
s=Object.getPrototypeOf(a)
if(s==null)return B.d6
if(s===Object.prototype)return B.d6
if(typeof q=="function"){o=$.te
if(o==null)o=$.te=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bC,enumerable:false,writable:true,configurable:true})
return B.bC}return B.bC},
xE(a,b){if(a<0||a>4294967295)throw A.d(A.aT(a,0,4294967295,"length",null))
return J.xG(new Array(a),b)},
xF(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
k1(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
xG(a,b){var s=A.e(a,b.i("u<0>"))
s.$flags=1
return s},
BH(a,b){var s=t.hO
return J.xh(s.a(a),s.a(b))},
xI(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
BI(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xI(r))break;++b}return b},
BJ(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xI(q))break}return b},
ed(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hu.prototype
return J.k3.prototype}if(typeof a=="string")return J.dS.prototype
if(a==null)return J.hv.prototype
if(typeof a=="boolean")return J.k2.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dm.prototype
if(typeof a=="symbol")return J.fn.prototype
if(typeof a=="bigint")return J.fm.prototype
return a}if(a instanceof A.G)return a
return J.v0(a)},
aC(a){if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dm.prototype
if(typeof a=="symbol")return J.fn.prototype
if(typeof a=="bigint")return J.fm.prototype
return a}if(a instanceof A.G)return a
return J.v0(a)},
c9(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dm.prototype
if(typeof a=="symbol")return J.fn.prototype
if(typeof a=="bigint")return J.fm.prototype
return a}if(a instanceof A.G)return a
return J.v0(a)},
FL(a){if(typeof a=="number")return J.eu.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.e_.prototype
return a},
zO(a){if(typeof a=="number")return J.eu.prototype
if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.e_.prototype
return a},
zP(a){if(typeof a=="string")return J.dS.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.e_.prototype
return a},
FM(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dm.prototype
if(typeof a=="symbol")return J.fn.prototype
if(typeof a=="bigint")return J.fm.prototype
return a}if(a instanceof A.G)return a
return J.v0(a)},
xg(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.zO(a).a8(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ed(a).a_(a,b)},
aG(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).h(a,b)},
bK(a,b,c){return J.c9(a).k(a,b,c)},
h8(a,b){return J.c9(a).l(a,b)},
Av(a,b){return J.zP(a).hl(a,b)},
vM(a,b){return J.c9(a).M(a,b)},
Aw(a,b,c){return J.FM(a).hn(a,b,c)},
Ax(a,b){return J.c9(a).cG(a,b)},
xh(a,b){return J.zO(a).F(a,b)},
xi(a,b){return J.aC(a).q(a,b)},
mn(a,b){return J.c9(a).Y(a,b)},
Ay(a,b){return J.c9(a).a5(a,b)},
xj(a){return J.c9(a).gO(a)},
ay(a){return J.ed(a).gI(a)},
mo(a){return J.aC(a).gN(a)},
Az(a){return J.aC(a).gV(a)},
Q(a){return J.c9(a).gu(a)},
ca(a){return J.aC(a).gt(a)},
f1(a){return J.ed(a).ga2(a)},
xk(a,b){return J.c9(a).a7(a,b)},
f2(a,b,c){return J.c9(a).cd(a,b,c)},
AA(a,b){return J.aC(a).st(a,b)},
AB(a,b){return J.c9(a).S(a,b)},
AC(a,b){return J.zP(a).bg(a,b)},
vN(a,b){return J.FL(a).oU(a,b)},
d9(a){return J.ed(a).p(a)},
AD(a,b){return J.c9(a).eS(a,b)},
k_:function k_(){},
k2:function k2(){},
hv:function hv(){},
hx:function hx(){},
dT:function dT(){},
kp:function kp(){},
e_:function e_(){},
dm:function dm(){},
fm:function fm(){},
fn:function fn(){},
u:function u(a){this.$ti=a},
k0:function k0(){},
p4:function p4(a){this.$ti=a},
eg:function eg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eu:function eu(){},
hu:function hu(){},
k3:function k3(){},
dS:function dS(){}},A={vV:function vV(){},
uW(){return $},
AR(a,b,c){if(t.he.b(a))return new A.ih(a,b.i("@<0>").K(c).i("ih<1,2>"))
return new A.ej(a,b.i("@<0>").K(c).i("ej<1,2>"))},
xM(a){return new A.ev("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.ev("Field '"+a+"' has not been initialized.")},
BL(a){return new A.ev("Field '"+a+"' has already been initialized.")},
v1(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i3(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ec(a,b,c){return a},
x1(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
i2(a,b,c,d){A.kx(b,"start")
if(c!=null){A.kx(c,"end")
if(b>c)A.j(A.aT(b,0,c,"start",null))}return new A.i1(a,b,c,d.i("i1<0>"))},
k9(a,b,c,d){if(t.he.b(a))return new A.df(a,b,c.i("@<0>").K(d).i("df<1,2>"))
return new A.cz(a,b,c.i("@<0>").K(d).i("cz<1,2>"))},
cw(){return new A.fA("No element")},
xD(){return new A.fA("Too many elements")},
kG(a,b,c,d,e){if(c-b<=32)A.Cl(a,b,c,d,e)
else A.Ck(a,b,c,d,e)},
Cl(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aC(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ao()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Ck(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.T(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.T(a4+a5,2),f=g-j,e=g+j,d=J.aC(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
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
A.kG(a3,a4,r-2,a6,a7)
A.kG(a3,q+2,a5,a6,a7)
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
break}}A.kG(a3,r,q,a6,a7)}else A.kG(a3,r,q,a6,a7)},
e2:function e2(){},
hc:function hc(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){this.a=a
this.$ti=b},
ih:function ih(a,b){this.a=a
this.$ti=b},
ie:function ie(){},
rY:function rY(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.$ti=b},
ev:function ev(a){this.a=a},
dL:function dL(a){this.a=a},
qz:function qz(){},
R:function R(){},
a6:function a6(){},
i1:function i1(a,b,c,d){var _=this
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
cz:function cz(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
K:function K(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.$ti=c},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hj:function hj(a){this.$ti=a},
cE:function cE(a,b){this.a=a
this.$ti=b},
i9:function i9(a,b){this.a=a
this.$ti=b},
ar:function ar(){},
cY:function cY(){},
fC:function fC(){},
hU:function hU(a,b){this.a=a
this.$ti=b},
iM:function iM(){},
b2(a,b,c){var s,r,q,p,o,n,m,l=A.at(a.gZ(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.at(a.gaB(),!0,c)
m=new A.a4(q,n,b.i("@<0>").K(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.he(A.aM(a,b,c),b.i("@<0>").K(c).i("he<1,2>"))},
AX(){throw A.d(A.aW("Cannot modify unmodifiable Map"))},
AY(){throw A.d(A.aW("Cannot modify constant Set"))},
A5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
FU(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d9(a)
return s},
hN(a){var s,r=$.xU
if(r==null)r=$.xU=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
fu(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ft(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.be(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ku(a){var s,r,q,p
if(a instanceof A.G)return A.bH(A.bV(a),null)
s=J.ed(a)
if(s===B.hG||s===B.hI||t.qF.b(a)){r=B.bW(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bH(A.bV(a),null)},
xV(a){var s,r,q
if(a==null||typeof a=="number"||A.bU(a))return J.d9(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dK)return a.p(0)
if(a instanceof A.bR)return a.he(!0)
s=$.As()
for(r=0;r<1;++r){q=s[r].oW(a)
if(q!=null)return q}return"Instance of '"+A.ku(a)+"'"},
BZ(){return Date.now()},
C7(){var s,r
if($.q1!==0)return
$.q1=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.q1=1e6
$.q2=new A.q0(r)},
BY(){if(!!self.location)return self.location.href
return null},
C8(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
av(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.dG(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aT(a,0,1114111,null,null))},
fs(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
C6(a){var s=A.fs(a).getUTCFullYear()+0
return s},
C4(a){var s=A.fs(a).getUTCMonth()+1
return s},
C0(a){var s=A.fs(a).getUTCDate()+0
return s},
C1(a){var s=A.fs(a).getUTCHours()+0
return s},
C3(a){var s=A.fs(a).getUTCMinutes()+0
return s},
C5(a){var s=A.fs(a).getUTCSeconds()+0
return s},
C2(a){var s=A.fs(a).getUTCMilliseconds()+0
return s},
C_(a){var s=a.$thrownJsError
if(s==null)return null
return A.cG(s)},
xW(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
j5(a){throw A.d(A.wX(a))},
f(a,b){if(a==null)J.ca(a)
throw A.d(A.uY(a,b))},
uY(a,b){var s,r="index"
if(!A.aL(b))return new A.cr(!0,b,r,null)
s=A.c(J.ca(a))
if(b<0||b>=s)return A.oW(b,s,a,r)
return A.xY(b,r)},
FF(a,b,c){if(a>c)return A.aT(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aT(b,a,c,"end",null)
return new A.cr(!0,b,"end",null)},
wX(a){return new A.cr(!0,a,null,null)},
d(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.du()
b.dartException=a
s=A.Gi
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Gi(){return J.d9(this.dartException)},
j(a,b){throw A.aD(a,b==null?new Error():b)},
bJ(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.E_(a,b,c),s)},
E_(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.i5("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.d(A.aq(a))},
dv(a){var s,r,q,p,o,n
a=A.A_(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rr(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rs(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
y8(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vW(a,b){var s=b==null,r=s?null:b.method
return new A.k4(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.pF(a)
if(a instanceof A.hk){s=a.a
return A.ee(a,s==null?A.eW(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ee(a,a.dartException)
return A.Fd(a)},
ee(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Fd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.dG(r,16)&8191)===10)switch(q){case 438:return A.ee(a,A.vW(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.ee(a,new A.hJ())}}if(a instanceof TypeError){p=$.A8()
o=$.A9()
n=$.Aa()
m=$.Ab()
l=$.Ae()
k=$.Af()
j=$.Ad()
$.Ac()
i=$.Ah()
h=$.Ag()
g=p.aW(s)
if(g!=null)return A.ee(a,A.vW(A.x(s),g))
else{g=o.aW(s)
if(g!=null){g.method="call"
return A.ee(a,A.vW(A.x(s),g))}else if(n.aW(s)!=null||m.aW(s)!=null||l.aW(s)!=null||k.aW(s)!=null||j.aW(s)!=null||m.aW(s)!=null||i.aW(s)!=null||h.aW(s)!=null){A.x(s)
return A.ee(a,new A.hJ())}}return A.ee(a,new A.kR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hZ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ee(a,new A.cr(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hZ()
return a},
cG(a){var s
if(a instanceof A.hk)return a.b
if(a==null)return new A.iA(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iA(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ml(a){if(a==null)return J.ay(a)
if(typeof a=="object")return A.hN(a)
return J.ay(a)},
Fz(a){if(typeof a=="number")return B.d.gI(a)
if(a instanceof A.lR)return A.hN(a)
if(a instanceof A.bR)return a.gI(a)
return A.ml(a)},
zM(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
FK(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Eo(a,b,c,d,e,f){t.BO.a(a)
switch(A.c(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.fj("Unsupported number of arguments for wrapped closure"))},
h3(a,b){var s=a.$identity
if(!!s)return s
s=A.FA(a,b)
a.$identity=s
return s},
FA(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Eo)},
AW(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kK().constructor.prototype):Object.create(new A.f8(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xq(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.AS(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xq(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
AS(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.AN)}throw A.d("Error in functionType of tearoff")},
AT(a,b,c,d){var s=A.xp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xq(a,b,c,d){if(c)return A.AV(a,b,d)
return A.AT(b.length,d,a,b)},
AU(a,b,c,d){var s=A.xp,r=A.AO
switch(b?-1:a){case 0:throw A.d(new A.kB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
AV(a,b,c){var s,r
if($.xn==null)$.xn=A.xm("interceptor")
if($.xo==null)$.xo=A.xm("receiver")
s=b.length
r=A.AU(s,c,a,b)
return r},
wY(a){return A.AW(a)},
AN(a,b){return A.iE(v.typeUniverse,A.bV(a.a),b)},
xp(a){return a.a},
AO(a){return a.b},
xm(a){var s,r,q,p=new A.f8("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.y("Field name "+a+" not found.",null))},
zQ(a){return v.getIsolateTag(a)},
A3(){return v.G},
H5(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
FV(a){var s,r,q,p,o,n=A.x($.zR.$1(a)),m=$.uZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.v5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aB($.zI.$2(a,n))
if(q!=null){m=$.uZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.v5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vx(s)
$.uZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.v5[n]=s
return s}if(p==="-"){o=A.vx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.zY(a,s)
if(p==="*")throw A.d(A.y9(n))
if(v.leafTags[n]===true){o=A.vx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.zY(a,s)},
zY(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.x2(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vx(a){return J.x2(a,!1,null,!!a.$ibZ)},
G_(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vx(s)
else return J.x2(s,c,null,null)},
FP(){if(!0===$.x0)return
$.x0=!0
A.FQ()},
FQ(){var s,r,q,p,o,n,m,l
$.uZ=Object.create(null)
$.v5=Object.create(null)
A.FO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.zZ.$1(o)
if(n!=null){m=A.G_(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
FO(){var s,r,q,p,o,n,m=B.ea()
m=A.h2(B.eb,A.h2(B.ec,A.h2(B.bX,A.h2(B.bX,A.h2(B.ed,A.h2(B.ee,A.h2(B.ef(B.bW),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.zR=new A.v2(p)
$.zI=new A.v3(o)
$.zZ=new A.v4(n)},
h2(a,b){return a(b)||b},
D2(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
FC(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xJ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a7("Illegal RegExp pattern ("+String(o)+")",a,null))},
Gb(a,b,c){var s=a.indexOf(b,c)
return s>=0},
FI(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
A_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
Gc(a,b,c){var s=A.Gd(a,b,c)
return s},
Gd(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.A_(b),"g"),A.FI(c))},
aX:function aX(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
he:function he(a,b){this.a=a
this.$ti=b},
fd:function fd(){},
nm:function nm(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(a,b){this.a=a
this.$ti=b},
hf:function hf(){},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
q0:function q0(a){this.a=a},
hV:function hV(){},
rr:function rr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hJ:function hJ(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(a){this.a=a},
pF:function pF(a){this.a=a},
hk:function hk(a,b){this.a=a
this.b=b},
iA:function iA(a){this.a=a
this.b=null},
dK:function dK(){},
jm:function jm(){},
jn:function jn(){},
kN:function kN(){},
kK:function kK(){},
f8:function f8(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
ce:function ce(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pd:function pd(a){this.a=a},
pl:function pl(a,b){var _=this
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
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hy:function hy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
v2:function v2(a){this.a=a},
v3:function v3(a){this.a=a},
v4:function v4(a){this.a=a},
bR:function bR(){},
eT:function eT(){},
eU:function eU(){},
fH:function fH(){},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lu:function lu(a){this.b=a},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
i0:function i0(a,b){this.a=a
this.c=b},
lN:function lN(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function lO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Gf(a){throw A.aD(A.xM(a),new Error())},
h(){throw A.aD(A.a9(""),new Error())},
L(){throw A.aD(A.BL(""),new Error())},
A4(){throw A.aD(A.xM(""),new Error())},
a8(){var s=new A.rZ()
return s.b=s},
rZ:function rZ(){this.b=null},
yZ(a,b,c){},
a1(a){return a},
BS(a,b,c){A.yZ(a,b,c)
return new Float32Array(a,b,c)},
BT(a){return new Int8Array(a)},
BU(a){return new Uint8Array(a)},
kl(a){return new Uint8Array(A.a1(a))},
dB(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.uY(b,a))},
DO(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.FF(a,b,c))
return b},
dU:function dU(){},
fr:function fr(){},
hH:function hH(){},
tx:function tx(a){this.a=a},
ke:function ke(){},
b3:function b3(){},
hF:function hF(){},
hG:function hG(){},
hE:function hE(){},
kf:function kf(){},
kg:function kg(){},
kh:function kh(){},
ki:function ki(){},
kj:function kj(){},
kk:function kk(){},
ex:function ex(){},
hI:function hI(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
w9(a,b){var s=b.c
return s==null?b.c=A.iC(a,"bX",[b.x]):s},
y0(a){var s=a.w
if(s===6||s===7)return A.y0(a.x)
return s===11||s===12},
Cf(a){return a.as},
G0(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a0(a){return A.tw(v.typeUniverse,a,!1)},
eY(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eY(a1,s,a3,a4)
if(r===s)return a2
return A.yx(a1,r,!0)
case 7:s=a2.x
r=A.eY(a1,s,a3,a4)
if(r===s)return a2
return A.yw(a1,r,!0)
case 8:q=a2.y
p=A.h1(a1,q,a3,a4)
if(p===q)return a2
return A.iC(a1,a2.x,p)
case 9:o=a2.x
n=A.eY(a1,o,a3,a4)
m=a2.y
l=A.h1(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wk(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.h1(a1,j,a3,a4)
if(i===j)return a2
return A.yy(a1,k,i)
case 11:h=a2.x
g=A.eY(a1,h,a3,a4)
f=a2.y
e=A.F9(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yv(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.h1(a1,d,a3,a4)
o=a2.x
n=A.eY(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wl(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.jd("Attempted to substitute unexpected RTI kind "+a0))}},
h1(a,b,c,d){var s,r,q,p,o=b.length,n=A.tB(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eY(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Fa(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tB(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eY(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
F9(a,b,c,d){var s,r=b.a,q=A.h1(a,r,c,d),p=b.b,o=A.h1(a,p,c,d),n=b.c,m=A.Fa(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ln()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
wZ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.FN(s)
return a.$S()}return null},
FR(a,b){var s
if(A.y0(b))if(a instanceof A.dK){s=A.wZ(a)
if(s!=null)return s}return A.bV(a)},
bV(a){if(a instanceof A.G)return A.q(a)
if(Array.isArray(a))return A.H(a)
return A.wD(J.ed(a))},
H(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.wD(a)},
wD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.El(a,s)},
El(a,b){var s=a instanceof A.dK?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Dc(v.typeUniverse,s.name)
b.$ccache=r
return r},
FN(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tw(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mj(a){return A.d6(A.q(a))},
wT(a){var s
if(a instanceof A.bR)return a.fD()
s=a instanceof A.dK?A.wZ(a):null
if(s!=null)return s
if(t.sg.b(a))return J.f1(a).a
if(Array.isArray(a))return A.H(a)
return A.bV(a)},
d6(a){var s=a.r
return s==null?a.r=new A.lR(a):s},
FJ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.f(q,0)
s=A.iE(v.typeUniverse,A.wT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.yz(v.typeUniverse,s,A.wT(q[r]))}return A.iE(v.typeUniverse,s,a)},
cp(a){return A.d6(A.tw(v.typeUniverse,a,!1))},
Ek(a){var s=this
s.b=A.F4(s)
return s.b(a)},
F4(a){var s,r,q,p,o
if(a===t.K)return A.Eu
if(A.eZ(a))return A.Ez
s=a.w
if(s===6)return A.Ed
if(s===1)return A.zb
if(s===7)return A.Ep
r=A.F3(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eZ)){a.f="$i"+q
if(q==="D")return A.Es
if(a===t.m)return A.Er
return A.Ey}}else if(s===10){p=A.FC(a.x,a.y)
o=p==null?A.zb:p
return o==null?A.eW(o):o}return A.Eb},
F3(a){if(a.w===8){if(a===t.S)return A.aL
if(a===t.i||a===t.o)return A.Et
if(a===t.N)return A.Ex
if(a===t.y)return A.bU}return null},
Ej(a){var s=this,r=A.Ea
if(A.eZ(s))r=A.DI
else if(s===t.K)r=A.eW
else if(A.h4(s)){r=A.Ec
if(s===t.lo)r=A.yU
else if(s===t.D)r=A.aB
else if(s===t.k7)r=A.DH
else if(s===t.s7)r=A.wr
else if(s===t.u6)r=A.yT
else if(s===t.uh)r=A.k}else if(s===t.S)r=A.c
else if(s===t.N)r=A.x
else if(s===t.y)r=A.U
else if(s===t.o)r=A.aA
else if(s===t.i)r=A.bB
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
Eb(a){var s=this
if(a==null)return A.h4(s)
return A.zV(v.typeUniverse,A.FR(a,s),s)},
Ed(a){if(a==null)return!0
return this.x.b(a)},
Ey(a){var s,r=this
if(a==null)return A.h4(r)
s=r.f
if(a instanceof A.G)return!!a[s]
return!!J.ed(a)[s]},
Es(a){var s,r=this
if(a==null)return A.h4(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.G)return!!a[s]
return!!J.ed(a)[s]},
Er(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.G)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
za(a){if(typeof a=="object"){if(a instanceof A.G)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ea(a){var s=this
if(a==null){if(A.h4(s))return a}else if(s.b(a))return a
throw A.aD(A.z_(a,s),new Error())},
Ec(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.z_(a,s),new Error())},
z_(a,b){return new A.fM("TypeError: "+A.yn(a,A.bH(b,null)))},
zL(a,b,c,d){if(A.zV(v.typeUniverse,a,b))return a
throw A.aD(A.D4("The type argument '"+A.bH(a,null)+"' is not a subtype of the type variable bound '"+A.bH(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yn(a,b){return A.jD(a)+": type '"+A.bH(A.wT(a),null)+"' is not a subtype of type '"+b+"'"},
D4(a){return new A.fM("TypeError: "+a)},
cn(a,b){return new A.fM("TypeError: "+A.yn(a,b))},
Ep(a){var s=this
return s.x.b(a)||A.w9(v.typeUniverse,s).b(a)},
Eu(a){return a!=null},
eW(a){if(a!=null)return a
throw A.aD(A.cn(a,"Object"),new Error())},
Ez(a){return!0},
DI(a){return a},
zb(a){return!1},
bU(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.cn(a,"bool"),new Error())},
DH(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.cn(a,"bool?"),new Error())},
bB(a){if(typeof a=="number")return a
throw A.aD(A.cn(a,"double"),new Error())},
yT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cn(a,"double?"),new Error())},
aL(a){return typeof a=="number"&&Math.floor(a)===a},
c(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.cn(a,"int"),new Error())},
yU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.cn(a,"int?"),new Error())},
Et(a){return typeof a=="number"},
aA(a){if(typeof a=="number")return a
throw A.aD(A.cn(a,"num"),new Error())},
wr(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cn(a,"num?"),new Error())},
Ex(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.aD(A.cn(a,"String"),new Error())},
aB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.cn(a,"String?"),new Error())},
a(a){if(A.za(a))return a
throw A.aD(A.cn(a,"JSObject"),new Error())},
k(a){if(a==null)return a
if(A.za(a))return a
throw A.aD(A.cn(a,"JSObject?"),new Error())},
zx(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bH(a[q],b)
return s},
EU(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zx(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
z2(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bH(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bH(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bH(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bH(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bH(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bH(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bH(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bH(a.x,b)+">"
if(l===8){p=A.Fc(a.x)
o=a.y
return o.length>0?p+("<"+A.zx(o,b)+">"):p}if(l===10)return A.EU(a,b)
if(l===11)return A.z2(a,b,null)
if(l===12)return A.z2(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
Fc(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Dd(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Dc(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tw(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iD(a,5,"#")
q=A.tB(s)
for(p=0;p<s;++p)q[p]=r
o=A.iC(a,b,q)
n[b]=o
return o}else return m},
Db(a,b){return A.yH(a.tR,b)},
Da(a,b){return A.yH(a.eT,b)},
tw(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ys(A.yq(a,null,b,!1))
r.set(b,s)
return s},
iE(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ys(A.yq(a,b,c,!0))
q.set(c,r)
return r},
yz(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wk(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
e6(a,b){b.a=A.Ej
b.b=A.Ek
return b},
iD(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cD(null,null)
s.w=b
s.as=c
r=A.e6(a,s)
a.eC.set(c,r)
return r},
yx(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.D8(a,b,r,c)
a.eC.set(r,s)
return s},
D8(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eZ(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.h4(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cD(null,null)
q.w=6
q.x=b
q.as=c
return A.e6(a,q)},
yw(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.D6(a,b,r,c)
a.eC.set(r,s)
return s},
D6(a,b,c,d){var s,r
if(d){s=b.w
if(A.eZ(b)||b===t.K)return b
else if(s===1)return A.iC(a,"bX",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cD(null,null)
r.w=7
r.x=b
r.as=c
return A.e6(a,r)},
D9(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cD(null,null)
s.w=13
s.x=b
s.as=q
r=A.e6(a,s)
a.eC.set(q,r)
return r},
iB(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
D5(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iC(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iB(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cD(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e6(a,r)
a.eC.set(p,q)
return q},
wk(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iB(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cD(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e6(a,o)
a.eC.set(q,n)
return n},
yy(a,b,c){var s,r,q="+"+(b+"("+A.iB(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cD(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e6(a,s)
a.eC.set(q,r)
return r},
yv(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iB(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iB(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.D5(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cD(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e6(a,p)
a.eC.set(r,o)
return o},
wl(a,b,c,d){var s,r=b.as+("<"+A.iB(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.D7(a,b,c,r,d)
a.eC.set(r,s)
return s},
D7(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tB(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eY(a,b,r,0)
m=A.h1(a,c,r,0)
return A.wl(a,n,m,c!==m)}}l=new A.cD(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e6(a,l)},
yq(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ys(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.CY(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yr(a,r,l,k,!1)
else if(q===46)r=A.yr(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eS(a.u,a.e,k.pop()))
break
case 94:k.push(A.D9(a.u,k.pop()))
break
case 35:k.push(A.iD(a.u,5,"#"))
break
case 64:k.push(A.iD(a.u,2,"@"))
break
case 126:k.push(A.iD(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.D_(a,k)
break
case 38:A.CZ(a,k)
break
case 63:p=a.u
k.push(A.yx(p,A.eS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yw(p,A.eS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.CX(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yt(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.D1(a.u,a.e,o)
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
return A.eS(a.u,a.e,m)},
CY(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yr(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Dd(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.Cf(o)+'"')
d.push(A.iE(s,o,n))}else d.push(p)
return m},
D_(a,b){var s,r=a.u,q=A.yp(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iC(r,p,q))
else{s=A.eS(r,a.e,p)
switch(s.w){case 11:b.push(A.wl(r,s,q,a.n))
break
default:b.push(A.wk(r,s,q))
break}}},
CX(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yp(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eS(p,a.e,o)
q=new A.ln()
q.a=s
q.b=n
q.c=m
b.push(A.yv(p,r,q))
return
case-4:b.push(A.yy(p,b.pop(),s))
return
default:throw A.d(A.jd("Unexpected state under `()`: "+A.w(o)))}},
CZ(a,b){var s=b.pop()
if(0===s){b.push(A.iD(a.u,1,"0&"))
return}if(1===s){b.push(A.iD(a.u,4,"1&"))
return}throw A.d(A.jd("Unexpected extended operation "+A.w(s)))},
yp(a,b){var s=b.splice(a.p)
A.yt(a.u,a.e,s)
a.p=b.pop()
return s},
eS(a,b,c){if(typeof c=="string")return A.iC(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.D0(a,b,c)}else return c},
yt(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eS(a,b,c[s])},
D1(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eS(a,b,c[s])},
D0(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.jd("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.jd("Bad index "+c+" for "+b.p(0)))},
zV(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aQ(a,b,null,c,null)
r.set(c,s)}return s},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eZ(d))return!0
s=b.w
if(s===4)return!0
if(A.eZ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aQ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aQ(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aQ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aQ(a,b.x,c,d,e))return!1
return A.aQ(a,A.w9(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.w9(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.z9(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.z9(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Eq(a,b,c,d,e)}if(o&&q===10)return A.Ev(a,b,c,d,e)
return!1},
z9(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Eq(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iE(a,b,r[o])
return A.yR(a,p,null,c,d.y,e)}return A.yR(a,b.y,null,c,d.y,e)},
yR(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
Ev(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
h4(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.eZ(a))if(s!==6)r=s===7&&A.h4(a.x)
return r},
eZ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yH(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tB(a){return a>0?new Array(a):v.typeUniverse.sEA},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ln:function ln(){this.c=this.b=this.a=null},
lR:function lR(a){this.a=a},
ll:function ll(){},
fM:function fM(a){this.a=a},
CQ(){var s,r,q
if(self.scheduleImmediate!=null)return A.Fq()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.h3(new A.rU(s),1)).observe(r,{childList:true})
return new A.rT(s,r,q)}else if(self.setImmediate!=null)return A.Fr()
return A.Fs()},
CR(a){self.scheduleImmediate(A.h3(new A.rV(t.O.a(a)),0))},
CS(a){self.setImmediate(A.h3(new A.rW(t.O.a(a)),0))},
CT(a){A.wc(B.ez,t.O.a(a))},
wc(a,b){return A.D3(a.a/1000|0,b)},
D3(a,b){var s=new A.tu()
s.kr(a,b)
return s},
bF(a){return new A.lb(new A.aw($.ao,a.i("aw<0>")),a.i("lb<0>"))},
bE(a,b){a.$2(0,null)
b.b=!0
return b.a},
am(a,b){A.DK(a,b)},
bD(a,b){b.dK(a)},
bC(a,b){b.dL(A.ag(a),A.cG(a))},
DK(a,b){var s,r,q=new A.tI(b),p=new A.tJ(b)
if(a instanceof A.aw)a.hc(q,p,t.z)
else{s=t.z
if(a instanceof A.aw)a.eO(q,p,s)
else{r=new A.aw($.ao,t.hR)
r.a=8
r.c=a
r.hc(q,p,s)}}},
bI(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ao.jb(new A.uT(s),t.H,t.S,t.z)},
yu(a,b,c){return 0},
mF(a){var s
if(t.yt.b(a)){s=a.gbR()
if(s!=null)return s}return B.an},
vR(a){var s
a.a(null)
s=new A.aw($.ao,a.i("aw<0>"))
s.dg(null)
return s},
Br(a,b,c){var s=new A.aw($.ao,c.i("aw<0>"))
A.Cq(a,new A.o4(b,s,c))
return s},
o5(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aw($.ao,b.i("aw<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.o7(i,h,g,f)
try{for(n=J.Q(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eO(new A.o6(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cr(A.e([],b.i("u<0>")))
return n}i.a=A.cR(n,null,!1,b.i("0?"))}catch(l){p=A.ag(l)
o=A.cG(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wE(m,k)
m=new A.b_(m,k==null?A.mF(m):k)
n.cn(m)
return n}else{i.d=p
i.c=o}}return f},
wE(a,b){if($.ao===B.x)return null
return null},
Em(a,b){if($.ao!==B.x)A.wE(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbR()
if(b==null){A.xW(a,B.an)
b=B.an}}else b=B.an
else if(t.yt.b(a))A.xW(a,b)
return new A.b_(a,b)},
t4(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Cm()
b.cn(new A.b_(new A.cr(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fR(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bU()
b.cq(o.a)
A.eN(b,p)
return}b.a^=2
A.mf(null,null,b.b,t.O.a(new A.t5(o,b)))},
eN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wN(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eN(d.a,c)
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
return}g=$.ao
if(g!==h)$.ao=h
else g=null
c=c.c
if((c&15)===8)new A.t9(q,d,n).$0()
else if(o){if((c&1)!==0)new A.t8(q,j).$0()}else if((c&2)!==0)new A.t7(d,q).$0()
if(g!=null)$.ao=g
c=q.c
if(c instanceof A.aw){p=q.a.$ti
p=p.i("bX<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.t4(c,f,!0)
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
EV(a,b){var s
if(t.nW.b(a))return b.jb(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.d(A.an(a,"onError",u.c))},
EJ(){var s,r
for(s=$.fY;s!=null;s=$.fY){$.iZ=null
r=s.b
$.fY=r
if(r==null)$.iY=null
s.a.$0()}},
F7(){$.wF=!0
try{A.EJ()}finally{$.iZ=null
$.wF=!1
if($.fY!=null)$.xa().$1(A.zJ())}},
zB(a){var s=new A.lc(a),r=$.iY
if(r==null){$.fY=$.iY=s
if(!$.wF)$.xa().$1(A.zJ())}else $.iY=r.b=s},
F1(a){var s,r,q,p=$.fY
if(p==null){A.zB(a)
$.iZ=$.iY
return}s=new A.lc(a)
r=$.iZ
if(r==null){s.b=p
$.fY=$.iZ=s}else{q=r.b
s.b=q
$.iZ=r.b=s
if(q==null)$.iY=s}},
Gy(a,b){A.ec(a,"stream",t.K)
return new A.lM(b.i("lM<0>"))},
Cq(a,b){var s=$.ao
if(s===B.x)return A.wc(a,t.O.a(b))
return A.wc(a,t.O.a(s.hp(b)))},
wN(a,b){A.F1(new A.uI(a,b))},
zw(a,b,c,d,e){var s,r=$.ao
if(r===c)return d.$0()
$.ao=c
s=r
try{r=d.$0()
return r}finally{$.ao=s}},
F_(a,b,c,d,e,f,g){var s,r=$.ao
if(r===c)return d.$1(e)
$.ao=c
s=r
try{r=d.$1(e)
return r}finally{$.ao=s}},
EZ(a,b,c,d,e,f,g,h,i){var s,r=$.ao
if(r===c)return d.$2(e,f)
$.ao=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ao=s}},
mf(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.hp(d)
d=d}A.zB(d)},
rU:function rU(a){this.a=a},
rT:function rT(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(a){this.a=a},
rW:function rW(a){this.a=a},
tu:function tu(){},
tv:function tv(a,b){this.a=a
this.b=b},
lb:function lb(a,b){this.a=a
this.b=!1
this.$ti=b},
tI:function tI(a){this.a=a},
tJ:function tJ(a){this.a=a},
uT:function uT(a){this.a=a},
cF:function cF(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cm:function cm(a,b){this.a=a
this.$ti=b},
b_:function b_(a,b){this.a=a
this.b=b},
o4:function o4(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o6:function o6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lf:function lf(){},
ib:function ib(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d,e){var _=this
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
t1:function t1(a,b){this.a=a
this.b=b},
t6:function t6(a,b){this.a=a
this.b=b},
t5:function t5(a,b){this.a=a
this.b=b},
t3:function t3(a,b){this.a=a
this.b=b},
t2:function t2(a,b){this.a=a
this.b=b},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(a,b){this.a=a
this.b=b},
tb:function tb(a){this.a=a},
t8:function t8(a,b){this.a=a
this.b=b},
t7:function t7(a,b){this.a=a
this.b=b},
lc:function lc(a){this.a=a
this.b=null},
lM:function lM(a){this.$ti=a},
iL:function iL(){},
lE:function lE(){},
ts:function ts(a,b){this.a=a
this.b=b},
uI:function uI(a,b){this.a=a
this.b=b},
yo(a,b){var s=a[b]
return s===a?null:s},
wi(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wh(){var s=Object.create(null)
A.wi(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
xO(a,b){return new A.ce(a.i("@<0>").K(b).i("ce<1,2>"))},
N(a,b,c){return b.i("@<0>").K(c).i("vX<1,2>").a(A.zM(a,new A.ce(b.i("@<0>").K(c).i("ce<1,2>"))))},
p(a,b){return new A.ce(a.i("@<0>").K(b).i("ce<1,2>"))},
vY(a){return new A.cl(a.i("cl<0>"))},
a2(a){return new A.cl(a.i("cl<0>"))},
aJ(a,b){return b.i("xP<0>").a(A.FK(a,new A.cl(b.i("cl<0>"))))},
wj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
im(a,b,c){var s=new A.eR(a,b,c.i("eR<0>"))
s.c=a.e
return s},
bY(a,b){var s=J.Q(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.xO(b,c)
a.ar(0,new A.pm(s,b,c))
return s},
fo(a,b,c){var s=A.xO(b,c)
s.L(0,a)
return s},
hA(a,b){var s,r=A.vY(b)
for(s=J.Q(a);s.m();)r.l(0,b.a(s.gn()))
return r},
k8(a,b){var s=A.vY(b)
s.L(0,a)
return s},
BM(a,b){var s=t.hO
return J.xh(s.a(a),s.a(b))},
vZ(a){var s,r
if(A.x1(a))return"{...}"
s=new A.bk("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.ar(0,new A.po(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.f($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
De(){throw A.d(A.aW("Cannot change an unmodifiable set"))},
ij:function ij(){},
td:function td(a){this.a=a},
il:function il(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eO:function eO(a,b){this.a=a
this.$ti=b},
ik:function ik(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cl:function cl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lt:function lt(a){this.a=a
this.c=this.b=null},
eR:function eR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pm:function pm(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
aa:function aa(){},
pn:function pn(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.$ti=b},
ip:function ip(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iF:function iF(){},
fp:function fp(){},
e0:function e0(a,b){this.a=a
this.$ti=b},
dr:function dr(){},
iz:function iz(){},
lS:function lS(){},
fD:function fD(a,b){this.a=a
this.$ti=b},
fN:function fN(){},
iG:function iG(){},
EN(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.a7(String(s),null,null)
throw A.d(q)}q=A.u6(p)
return q},
u6(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lr(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.u6(a[s])
return a},
Dv(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Am()
else s=new Uint8Array(o)
for(r=J.aC(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Du(a,b,c,d){var s=a?$.Al():$.Ak()
if(s==null)return null
if(0===c&&d===b.length)return A.yG(s,b)
return A.yG(s,b.subarray(c,d))},
yG(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xl(a,b,c,d,e,f){if(B.c.P(f,4)!==0)throw A.d(A.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a7("Invalid base64 padding, more than two '=' characters",a,b))},
xL(a,b,c){return new A.hz(a,b)},
DZ(a){return a.A()},
CU(a,b){return new A.tg(a,[],A.FB())},
CV(a,b,c){var s,r=new A.bk(""),q=A.CU(r,b)
q.d0(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Dw(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lr:function lr(a,b){this.a=a
this.b=b
this.c=null},
tf:function tf(a){this.a=a},
ls:function ls(a){this.a=a},
tA:function tA(){},
tz:function tz(){},
jg:function jg(){},
n8:function n8(){},
ek:function ek(){},
js:function js(){},
jC:function jC(){},
hz:function hz(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
k5:function k5(){},
pf:function pf(a){this.b=a},
pe:function pe(a){this.a=a},
th:function th(){},
ti:function ti(a,b){this.a=a
this.b=b},
tg:function tg(a,b,c){this.c=a
this.a=b
this.b=c},
kV:function kV(){},
rw:function rw(a){this.a=a},
ty:function ty(a){this.a=a
this.b=16
this.c=0},
zU(a){var s=A.fu(a,null)
if(s!=null)return s
throw A.d(A.a7(a,null,null))},
Bl(a,b){a=A.aD(a,new Error())
if(a==null)a=A.eW(a)
a.stack=b.p(0)
throw a},
cR(a,b,c,d){var s,r=c?J.xF(a,d):J.xE(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
at(a,b,c){var s,r=A.e([],c.i("u<0>"))
for(s=J.Q(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("u<0>"))
s=A.e([],b.i("u<0>"))
for(r=J.Q(a);r.m();)B.a.l(s,r.gn())
return s},
aj(a,b){var s=A.at(a,!1,b)
s.$flags=3
return s},
y6(a,b,c){var s,r
A.kx(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aT(c,b,null,"end",null))
if(s===0)return""}r=A.Co(a,b,c)
return r},
Co(a,b,c){var s=a.length
if(b>=s)return""
return A.C8(a,b,c==null||c>s?s:c)},
xZ(a){return new A.hw(a,A.xJ(a,!1,!0,!1,!1,""))},
wb(a,b,c){var s=J.Q(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
cZ(){var s,r,q=A.BY()
if(q==null)throw A.d(A.aW("'Uri.base' is not supported"))
s=$.yc
if(s!=null&&q===$.yb)return s
r=A.Cw(q)
$.yc=r
$.yb=q
return r},
Cm(){return A.cG(new Error())},
B1(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xs(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ju(a){if(a>=10)return""+a
return"0"+a},
Bk(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.an(b,"name","No enum value with that name"))},
jD(a){if(typeof a=="number"||A.bU(a)||a==null)return J.d9(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xV(a)},
Bm(a,b){A.ec(a,"error",t.K)
A.ec(b,"stackTrace",t.l)
A.Bl(a,b)},
jd(a){return new A.jc(a)},
y(a,b){return new A.cr(!1,null,b,a)},
an(a,b,c){return new A.cr(!0,a,b,c)},
xX(a){var s=null
return new A.fv(s,s,!1,s,s,a)},
xY(a,b){return new A.fv(null,null,!0,a,b,"Value not in range")},
aT(a,b,c,d,e){return new A.fv(b,c,!0,a,d,"Invalid value")},
hO(a,b,c){if(0>a||a>c)throw A.d(A.aT(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aT(b,a,c,"end",null))
return b}return c},
kx(a,b){if(a<0)throw A.d(A.aT(a,0,null,b,null))
return a},
oW(a,b,c,d){return new A.jX(b,!0,a,d,"Index out of range")},
aW(a){return new A.i5(a)},
y9(a){return new A.kQ(a)},
m(a){return new A.fA(a)},
aq(a){return new A.jp(a)},
fj(a){return new A.t_(a)},
a7(a,b,c){return new A.F(a,b,c)},
BG(a,b,c){var s,r
if(A.x1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c8,a)
try{A.EA(a,s)}finally{if(0>=$.c8.length)return A.f($.c8,-1)
$.c8.pop()}r=A.wb(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
vT(a,b,c){var s,r
if(A.x1(a))return b+"..."+c
s=new A.bk(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wb(r.a,a,", ")}finally{if(0>=$.c8.length)return A.f($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
EA(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
w_(a,b,c){var s=A.p(b,c)
s.mc(a)
return s},
cB(a,b,c,d,e,f){var s
if(B.f===c){s=J.ay(a)
b=J.ay(b)
return A.i3(A.aP(A.aP($.h5(),s),b))}if(B.f===d){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
return A.i3(A.aP(A.aP(A.aP($.h5(),s),b),c))}if(B.f===e){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
return A.i3(A.aP(A.aP(A.aP(A.aP($.h5(),s),b),c),d))}if(B.f===f){s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
e=J.ay(e)
return A.i3(A.aP(A.aP(A.aP(A.aP(A.aP($.h5(),s),b),c),d),e))}s=J.ay(a)
b=J.ay(b)
c=J.ay(c)
d=J.ay(d)
e=J.ay(e)
f=J.ay(f)
f=A.i3(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.h5(),s),b),c),d),e),f))
return f},
BV(a){var s,r,q=$.h5()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.aP(q,J.ay(a[r]))
return A.i3(q)},
qA(a,b){return new A.fD(A.k8(a,b),b.i("fD<0>"))},
Cw(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.ya(a4<a4?B.b.E(a5,0,a4):a5,5,a3).gjh()
else if(s===32)return A.ya(B.b.E(a5,5,a4),0,a3).gjh()}r=A.cR(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zA(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zA(a5,0,q,20,r)===20)r[7]=q
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
a5=B.b.bN(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ac(a5,"http",0)){if(i&&o+3===n&&B.b.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bN(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ac(a5,"https",0)){if(i&&o+4===n&&B.b.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bN(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lI(a4<a5.length?B.b.E(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Do(a5,0,q)
else{if(q===0)A.fO(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Dp(a5,c,p-1):""
a=A.Dk(a5,p,o,!1)
i=o+1
if(i<n){a0=A.fu(B.b.E(a5,i,n),a3)
d=A.Dm(a0==null?A.j(A.a7("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Dl(a5,n,m,a3,j,a!=null)
a2=m<l?A.Dn(a5,m+1,l,a3):a3
return A.Df(j,b,a,d,a1,a2,l<a4?A.Dj(a5,l+1,a4):a3)},
ye(a){var s=t.N
return B.a.bs(A.e(a.split("&"),t.s),A.p(s,s),new A.rv(B.bY),t.G)},
kU(a,b,c){throw A.d(A.a7("Illegal IPv4 address, "+a,b,c))},
Ct(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kU("each part must be in the range 0..255",a,r)}A.kU("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kU(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bJ(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kU(j,a,q)
p=l}A.kU("IPv4 address should contain exactly 4 parts",a,q)},
Cu(a,b,c){var s
if(b===c)throw A.d(A.a7("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.Cv(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.yd(a,b,c)
return!0},
Cv(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
yd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.ru(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Ct(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.dG(l,8)
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
B.cT.jG(s,a0,16,s,a)
B.cT.nt(s,a,a0,0)}}return s},
Df(a,b,c,d,e,f,g){return new A.iH(a,b,c,d,e,f,g)},
yA(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fO(a,b,c){throw A.d(A.a7(c,a,b))},
Dm(a,b){var s=A.yA(b)
if(a===s)return null
return a},
Dk(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fO(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Dh(a,q,r)
if(o<r){n=o+1
p=A.yF(a,B.b.ac(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Cu(a,q,o)
l=B.b.E(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.cS(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yF(a,B.b.ac(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yd(a,b,o)
return"["+B.b.E(a,b,o)+p+"]"}}return A.Dr(a,b,c)},
Dh(a,b,c){var s=B.b.cS(a,"%",b)
return s>=b&&s<c?s:c},
yF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bk(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wn(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bk("")
l=h.a+=B.b.E(a,q,r)
if(m)n=B.b.E(a,r,r+3)
else if(n==="%")A.fO(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bk("")
if(q<r){h.a+=B.b.E(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.E(a,q,r)
if(h==null){h=new A.bk("")
m=h}else m=h
m.a+=i
l=A.wm(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.E(a,b,c)
if(q<c){i=B.b.E(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Dr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wn(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bk("")
k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.E(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bk("")
if(q<r){p.a+=B.b.E(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fO(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bk("")
l=p}else l=p
l.a+=k
j=A.wm(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.E(a,b,c)
if(q<c){k=B.b.E(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Do(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.yC(a.charCodeAt(b)))A.fO(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fO(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.E(a,b,c)
return A.Dg(q?a.toLowerCase():a)},
Dg(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Dp(a,b,c){return A.iI(a,b,c,16,!1,!1)},
Dl(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iI(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.Dq(q,e,f)},
Dq(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.Ds(a,!s||c)
return A.Dt(a)},
Dn(a,b,c,d){return A.iI(a,b,c,256,!0,!1)},
Dj(a,b,c){return A.iI(a,b,c,256,!0,!1)},
wn(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.v1(r)
o=A.v1(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.av(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.E(a,b,b+3).toUpperCase()
return null},
wm(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.lV(a,6*p)&63|q
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
o+=3}}return A.y6(s,0,null)},
iI(a,b,c,d,e,f){var s=A.yE(a,b,c,d,e,f)
return s==null?B.b.E(a,b,c):s},
yE(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wn(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fO(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wm(n)}if(o==null){o=new A.bk("")
k=o}else k=o
k.a=(k.a+=B.b.E(a,p,q))+l
if(typeof m!=="number")return A.j5(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.E(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
yD(a){if(B.b.W(a,"."))return!0
return B.b.bG(a,"/.")!==-1},
Dt(a){var s,r,q,p,o,n,m
if(!A.yD(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a7(s,"/")},
Ds(a,b){var s,r,q,p,o,n
if(!A.yD(a))return!b?A.yB(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gU(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.yB(s[0]))}return B.a.a7(s,"/")},
yB(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yC(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.E(a,0,s)+"%3A"+B.b.bg(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Di(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.y("Invalid URL encoding",null))}}return r},
wo(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.bY===d)return B.b.E(a,b,c)
else p=new A.dL(B.b.E(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.y("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.y("Truncated URI",null))
B.a.l(p,A.Di(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.lx.mI(p)},
yC(a){var s=a|32
return 97<=s&&s<=122},
ya(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
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
if((j.length&1)===1)a=B.e8.nU(a,m,s)
else{l=A.yE(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bN(a,m,s,l)}return new A.rt(a,j,c)},
zA(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a){this.a=a},
lk:function lk(){},
al:function al(){},
jc:function jc(a){this.a=a},
du:function du(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jX:function jX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i5:function i5(a){this.a=a},
kQ:function kQ(a){this.a=a},
fA:function fA(a){this.a=a},
jp:function jp(a){this.a=a},
km:function km(){},
hZ:function hZ(){},
t_:function t_(a){this.a=a},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(){},
G:function G(){},
lP:function lP(){},
rd:function rd(){this.b=this.a=0},
bk:function bk(a){this.a=a},
rv:function rv(a){this.a=a},
ru:function ru(a){this.a=a},
iH:function iH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lg:function lg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pE:function pE(a){this.a=a},
z3(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.DN,a)
s[$.ef()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iX,a)
s[$.ef()]=a
return s},
DN(a){return t.BO.a(a).$0()},
iX(a,b,c){t.BO.a(a)
if(A.c(c)>=1)return a.$1(b)
return a.$0()},
x_(a,b,c){return c.a(a[b])},
z4(a,b){return a[b]},
ai(a,b,c,d){return d.a(a[b].apply(a,c))},
yW(a,b,c,d){return d.a(a[b](c))},
aZ(a,b){var s=new A.aw($.ao,b.i("aw<0>")),r=new A.ib(s,b.i("ib<0>"))
a.then(A.h3(new A.vy(r,b),1),A.h3(new A.vz(r),1))
return s},
zg(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
d7(a){if(A.zg(a))return a
return new A.uX(new A.il(t.BT)).$1(a)},
vy:function vy(a,b){this.a=a
this.b=b},
vz:function vz(a){this.a=a},
uX:function uX(a){this.a=a},
lq:function lq(){},
fG:function fG(){this.b=this.a=0},
q5:function q5(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
q6:function q6(){},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
nk:function nk(a,b){this.a=a
this.b=b},
nl:function nl(){this.a=null
this.d=0},
ks:function ks(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
fb:function fb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jJ:function jJ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
o_:function o_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dR(a,b){return new A.jT(a,b)},
dq:function dq(){},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
G7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.ix(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.S(f,new A.vA())
s=A.e([],t.cv)
for(r=A.i2(f,0,A.ec(b,"count",t.S),t.mn),q=r.$ti,r=new A.aS(r,r.gt(0),q.i("aS<a6.E>")),q=q.i("a6.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
nF:function nF(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bx:function bx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vA:function vA(){},
pq(a,b,c,d,e,f,g,h,i,j){return new A.ew(c,a,h,g,f,e,i,j,b,!0)},
w2(a,b){if(!isFinite(b)||b<0||b>1)throw A.d(A.y("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
jb:function jb(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e,f,g,h,i,j){var _=this
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
BO(a){A:{break A}return a},
d_:function d_(a,b){this.a=a
this.b=b},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
rx:function rx(){},
ry:function ry(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pt:function pt(){},
pu:function pu(){},
pv:function pv(){},
pH(a){var s,r=t.N,q=A.aJ(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.L(0,A.aJ(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.L(0,A.aJ(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.L(0,A.aJ(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.q(0,"dof"))q.L(0,A.aJ(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pG(A.qA(q,r),s)},
pG:function pG(a,b){this.a=a
this.b=b},
pI:function pI(){},
pZ:function pZ(a){this.b=a},
kA:function kA(){this.a=null
this.c=0
this.d=!1},
fg:function fg(a,b){this.a=a
this.b=b},
ji:function ji(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c,d,e,f,g,h,i,j){var _=this
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
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jo:function jo(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
eD:function eD(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c){this.a=a
this.b=b
this.d=c},
o1:function o1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
BN(){return new A.kb(new A.cT(new A.pr(),A.e([],t.Fy),A.e([],t.t),t.ou))},
kb:function kb(a){this.a=a},
pr:function pr(){},
zD(a){var s=4
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
DT(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.T[r]
if(A.zD(q.a)===b)s+=q.c}return s},
BP(a){return new A.pw(a,new A.cT(new A.px(),A.e([],t.EM),A.e([],t.t),t.wm),A.p(t.S,t.jC))},
xS(a){var s
A:{s=a.byteLength
break A}return s},
kS:function kS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(){},
py:function py(){},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(a){this.a=a},
rk:function rk(a,b){this.a=a
this.b=b},
rl:function rl(){},
Cp(a){var s=new A.kO(a,new A.cT(new A.ro(),A.e([],t.f2),A.e([],t.t),t.qq),A.p(t.S,t._))
s.d=s.aQ($.x8())
s.e=s.aQ($.x5())
s.f=s.aQ($.x6())
s.r=s.aQ($.x4())
s.w=s.aQ($.x7())
return s},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
ro:function ro(){},
rq:function rq(){},
rp:function rp(){},
Ft(a){var s,r,q,p,o=A.e([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.et(p,A.e([p],r)))
continue}return o},
et:function et(a,b){this.a=a
this.b=b},
jH:function jH(a){this.a=a},
nV:function nV(){},
nW:function nW(a){this.a=a},
nT:function nT(a){this.a=a},
nU:function nU(a){this.a=a},
jI:function jI(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
o0:function o0(a,b){this.a=a
this.b=b
this.c=0},
CW(){return new A.fF()},
nZ:function nZ(a){this.a=a
this.b=null},
fF:function fF(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
w4(){return!0},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pK:function pK(){},
pL:function pL(){},
cd:function cd(a,b){this.a=a
this.b=b},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fw:function fw(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
hd:function hd(a){this.b=a},
q3:function q3(a,b){var _=this
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
q7:function q7(){},
b4:function b4(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
q9:function q9(a,b){this.a=a
this.b=b},
qe:function qe(){},
qd:function qd(){},
qc:function qc(){},
qb:function qb(a){this.a=a},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(a,b){this.a=a
this.b=b},
Cd(a){return new A.hQ(a,new A.cT(new A.qg(),A.e([],t.w_),A.e([],t.t),t.tc))},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b){this.a=a
this.b=b},
qg:function qg(){},
z0(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.E3(a,r,s,a.x.gn().a.b.a).b},
E3(a,b,c,d){var s,r,q,p,o,n=new A.um(a),m=new A.un(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Fx(b,k,B.aN,l,s.goB(),new A.u7(m),new A.u8(m),new A.u9(a),new A.ue(a),new A.uf(a),new A.ug(m),new A.uh(m),s.goD(),new A.ui(a),s.goH(),r.goF(),n,s.goJ(),s.goL(),new A.uj(m,c),new A.uk(m),new A.ul(m),new A.ua(m),new A.ub(m),new A.uc(a),new A.ud(m),1,i,j,512)}else{p=new A.aN("sceneColor",B.r,j,i,1,0)
n=A.e([new A.l6(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.e_)
n.push(new A.hM(b,u.l,u.B,k,p,B.aN))
q=new A.jH(n)}a.r.toString
o=q.mu(B.O,new A.q7(),!1,new A.lB())
n=o.a.b
if(n.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.w(n)))
return new A.tt(q,o)},
E4(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.J(b7.giV(),t.yz)
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
o=q.c.aa()
p=p.gav()
n=A.H(p)
B.a.l(s,new A.lQ(new A.cu((r|1073741824)>>>0,0,"transient"),q,A.bd(new A.T(p,n.i("M(1)").a(o.gaA()),n.i("T<1,M>")))))}p=b8.a
m=A.FD(A.Bq(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dR(B.aw,n))
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
if(h==null)A.j(A.dR(B.aw,n))
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
e=new A.nZ(n)
e.mp("cull")
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
if(a2.gD().e===B.aO)B.a.l(a,new A.aO(new A.bL(a0.je(a2.gD().c.a).c,a2.ga6().a),a2,a1))
else B.a.l(b,new A.aO(new A.bN(B.k0,a2.gD().b,a2.gD().a,a2.ga6().a),a2,g))}a3=new A.lm(A.Ft(A.G9(b)),A.G8(a),p,b8.b,b8.c)
a4=new A.jx(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.j(A.an(g,"passId",null))
e.b=g
n.ce(g,A.zN())
a6=A.p(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.m("resource is not in candidate: "+b1))
b3=new A.f9(b2)
a6.k(0,b0+"#"+a1,b3)
a6.ce(b0,new A.uo(b3))}a5.ak(new A.jk(a6,a4,a3))}return new A.t0(e,m,j)},
y3(a){return new A.qv(a,new A.nk(new A.nl(),new A.kA()),new A.o0(A.e([],t.h1),B.fO),A.e([],t.Ft),B.bm,A.e([],t.ow),null)},
qp:function qp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=!1},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a,b,c){this.a=a
this.b=b
this.c=c},
um:function um(a){this.a=a},
un:function un(a,b){this.a=a
this.b=b},
ul:function ul(a){this.a=a},
ue:function ue(a){this.a=a},
uf:function uf(a){this.a=a},
uk:function uk(a){this.a=a},
u9:function u9(a){this.a=a},
ub:function ub(a){this.a=a},
ua:function ua(a){this.a=a},
uj:function uj(a,b){this.a=a
this.b=b},
u7:function u7(a){this.a=a},
u8:function u8(a){this.a=a},
ug:function ug(a){this.a=a},
uh:function uh(a){this.a=a},
ui:function ui(a){this.a=a},
ud:function ud(a){this.a=a},
uc:function uc(a){this.a=a},
uo:function uo(a){this.a=a},
tt:function tt(a,b){this.a=a
this.b=b},
lB:function lB(){},
lm:function lm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qv:function qv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qw:function qw(){},
qx:function qx(){},
qy:function qy(){},
lz:function lz(a){this.b=a},
tc:function tc(){},
lF:function lF(){},
hY:function hY(a,b){this.a=a
this.b=b},
G9(a){var s,r,q=A.J(a,t.E0)
B.a.S(q,new A.vF())
s=A.H(q)
r=s.i("T<1,c0>")
s=A.J(new A.T(q,s.i("c0(1)").a(new A.vG()),r),r.i("a6.E"))
s.$flags=1
return s},
G8(a){var s,r,q=A.J(a,t.EH)
B.a.S(q,new A.vD())
s=A.H(q)
r=s.i("T<1,c0>")
s=A.J(new A.T(q,s.i("c0(1)").a(new A.vE()),r),r.i("a6.E"))
s.$flags=1
return s},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
vF:function vF(){},
vG:function vG(){},
vD:function vD(){},
vE:function vE(){},
FD(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.geU()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.y("cullItems: non-finite world bounds for instance "+o.ga6().p(0),null))
if(a.oT(o.geU())===B.cc){++q
continue}B.a.l(l,o)}return new A.nA(l,new A.nB(q))},
nB:function nB(a){this.b=a},
nA:function nA(a,b){this.a=a
this.b=b},
bd(a){var s,r,q,p,o,n,m,l,k
for(s=J.Q(a),r=B.lA,q=B.lB,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.M(m,k,Math.min(r.c,o))
q=new A.M(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.y("Aabb.fromPoints requires at least one point",null))
return new A.j8(r,q)},
j8:function j8(a,b){this.a=a
this.b=b},
Bq(a){var s,r,q,p,o,n,m=a.a,l=new A.o3(),k=m.length
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
return new A.o2(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
ey:function ey(a,b){this.a=a
this.b=b},
fk:function fk(a,b){this.a=a
this.b=b},
o2:function o2(a){this.a=a},
o3:function o3(){},
xQ(a){if(a.length!==16)throw A.d(A.y("Mat4.fromColumnMajor requires 16 values",null))
return new A.dn(new Float32Array(A.a1(a)))},
w0(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dn(q)},
xR(a,b,c){var s=b.ga9(),r=c.bm(s).ga9(),q=s.bm(r),p=new Float32Array(16)
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
return new A.dn(p)},
dn:function dn(a){this.a=a},
pp:function pp(){},
kw:function kw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kP:function kP(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ld:function ld(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jj:function jj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
le:function le(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jw:function jw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lh:function lh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ig:function ig(a,b){this.a=a
this.b=b},
hh:function hh(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
li:function li(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jA:function jA(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lj:function lj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jR:function jR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lo:function lo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a){this.b=a},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
bs(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aN(a.a,a.b,b,c,s,r)},
w5:function w5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hM:function hM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
lC:function lC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kv:function kv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lD:function lD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y5(a){var s=a.c,r=Math.abs(s.a)<0.99?B.lz:B.a1,q=A.xR(a.b,s,r)
return new A.eG(A.w0(1,a.f,B.d.H(a.w*2,0.1,3),0.05).a3(0,q))},
eG:function eG(a){this.a=a},
kE:function kE(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lG:function lG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Fx(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.d(A.an(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bs(B.bo,e5,e4,e3,a8)
k=A.bs(B.bo.j_(),e5,e4,a8,a8)
A.bs(B.kF,e5,e4,a8,a8)
j=A.bs(B.kC,e5,e4,a8,a8)
i=A.bs(B.kx,e6,e6,a8,a8)
h=A.bs(B.ky,b6,m,a8,a8)
g=A.bs(B.kz,b6,m,a8,a8)
f=A.bs(B.kD,b6,m,a8,a8)
e=A.bs(B.kE,b6,m,a8,a8)
d=$.A6()
c=e3>1
b=A.bs(d,e5,e4,a8,c?2:1)
d=A.bs(B.ku,b6,m,a8,a8)
a=A.bs(B.kv,b6,m,a8,a8)
a0=A.bs(B.kw,e5,e4,a8,a8)
a1=A.bs(B.kA,e5,e4,a8,a8)
a2=A.bs(B.kG,e5,e4,a8,a8)
a3=A.bs(B.kB,e5,e4,a8,a8)
a4=c?new A.kd(b8,l,k):a8
b5.a=null
a5=A.y5(B.lc)
a6=t.e_
a7=A.e([],a6)
k=c?k:l
if(r){B.a.L(a7,A.e([new A.hb(b7,a9,b0,b8,b1,b1,B.dG,!0,k,f,d6,b6,m),new A.hb(b7,a9,b0,b8,b2,b2,B.mf,!1,f,e,c2,b6,m),new A.jj(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.L(a7,A.e([new A.hh(b7,a9,b0,b8,b3,b3,B.dH,k,d,d6,b6,m),new A.hh(b7,a9,b0,b8,b4,b4,B.mg,d,a,c7,b6,m),new A.jA(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jR(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kv(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kW(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.jw(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kI(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kH(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kE(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.uU(b5),i))
j.push(new A.kF(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.uV(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.L(j,a7)
j.push(new A.hM(b7,a9,u.B,b8,k,b9))
return new A.jH(j)},
uU:function uU(a){this.a=a},
uV:function uV(a,b){this.a=a
this.b=b},
kF:function kF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lH:function lH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kI:function kI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lK:function lK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kH:function kH(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lJ:function lJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kW:function kW(a,b,c,d,e,f,g,h){var _=this
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
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l6:function l6(a,b,c,d,e){var _=this
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
ni:function ni(){},
kD(a,b){return new A.hX(a,b)},
jN:function jN(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
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
eq:function eq(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hp:function hp(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
A:function A(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.b=b},
ol:function ol(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
om:function om(){},
on:function on(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
e5:function e5(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fh(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jh:function jh(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b5:function b5(a,b){this.a=a
this.b=b},
rP:function rP(){this.a=null},
CB(a){var s=new A.l4(a,B.h,new A.rP(),A.CM(a))
s.kq(a)
return s},
CM(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a2(t.N)
s=A.a2(t.N)
r=J.Q(t.a.b(q)?q:new A.aR(q,A.H(q).i("aR<1,i>")))
while(r.m())s.l(0,r.gn())
return s},
c5(a,b){var s,r
if(a.b!==B.h)A.j(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.c(s.drawingBufferWidth),A.c(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
CH(a,b){var s
if(a.b!==B.h)A.j(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.c(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.y("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
CG(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
CF(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
CE(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yh(a,b){var s
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
CC(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bn(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=a.f
r=s.nc(b)
if(r.a===0)return
if(r.q(0,B.bt)){q=v.G
p=a.a
if(b.a)p.enable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bu))a.a.depthFunc(A.CF(a,b.b))
if(r.q(0,B.bv))a.a.depthMask(b.c)
if(r.q(0,B.bz)){q=v.G
p=a.a
if(b.w)p.enable(A.c(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.c(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bA))a.a.cullFace(A.CE(a,b.x))
if(r.q(0,B.ds)){q=v.G.WebGL2RenderingContext
q=A.c(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bw)){q=v.G
p=a.a
if(b.d)p.enable(A.c(q.WebGL2RenderingContext.BLEND))
else p.disable(A.c(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bx))a.a.blendFunc(A.yh(a,b.e),A.yh(a,b.f))
if(r.q(0,B.by))a.a.blendEquation(A.CC(a,b.r))
if(r.q(0,B.dq))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dr)){q=v.G.WebGL2RenderingContext
a.a.disable(A.c(q.SCISSOR_TEST))}s.a=b},
CD(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.c(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.c(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dx(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.CD(a,b))},
ck(a,b){var s
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
switch(c.a.a){case 0:r.uniform1f(q,A.bB(c.b))
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
bz(a,b){if(a.b!==B.h)A.j(A.m(u.k))
a.a.bindVertexArray(A.a(b.a))},
aE(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iK){p=s.d>1?A.c(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iJ){o=s.b
if(o!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
CI(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.c(p.ELEMENT_ARRAY_BUFFER),c,A.c(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
CJ(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yk(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
r=A.k(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.co?A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.c(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.CJ(a,b.b))
return new A.dz(r)},
yi(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yj(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
we(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
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
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yi(a,b.e))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yi(a,b.f))
p=b.r
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yj(a,p))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yj(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.fP(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.j(A.an(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dz(new A.iK(r,l,k,q,!1))},
wf(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
l5(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
CL(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
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
m=o===B.cq||o===B.h3
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
if(o!==h){A.wg(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dz(new A.iJ(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wg(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d2(a){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=A.k(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dz(s)},
yl(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.k(p.createShader(b))
if(o==null)throw A.d(A.kD(b===A.x_(A.z4(A.A3(),r),q,t.S)?B.dk:B.dl,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.d7(p.getShaderParameter(o,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aB(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.kD(b===A.x_(A.z4(A.A3(),r),q,t.S)?B.dk:B.dl,s))}return o},
CK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.m(u.k))
q=v.G
s=A.yl(a,A.c(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yl(a,A.c(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.k(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.l5)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.d7(o.getProgramParameter(n,A.c(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aB(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kD(B.dm,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.c(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kD(B.dn,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.k(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kD(B.dn,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dz(n)},
dz:function dz(a){this.a=a},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iJ:function iJ(a,b,c,d,e,f,g,h,i,j){var _=this
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
l4:function l4(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rN:function rN(a){this.a=a},
rO:function rO(a){this.a=a},
tC:function tC(){},
lU:function lU(){},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mT(a,a0){var s=0,r=A.bF(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mT=A.bI(function(a1,a2){if(a1===1)return A.bC(a2,r)
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
b=new A.je(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.bZ,A.p(o,t.jS))
b.k7(p,a0)
p=A.q(a).i("I<1,2>")
s=3
return A.am(A.o5(A.k9(new A.I(a,p),p.i("bX<az>(o.E)").a(new A.mU(b)),p.i("o.E"),t.ls),t.c),$async$mT)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.lb():n
c.buffer=p
q=b
s=1
break
case 1:return A.bD(q,r)}})
return A.bE($async$mT,r)},
je:function je(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mV:function mV(){},
mU:function mU(a){this.a=a},
mX:function mX(a,b){this.a=a
this.b=b},
mW:function mW(a,b){this.a=a
this.b=b},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AJ(a,b,c,d,e,f,g){var s=new A.mK(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.k9(a,b,c,d,0,e,f,g)
return s},
AF(a,b){var s=new A.ms(b)
s.k6(a,b)
return s},
AI(a){var s,r,q,p,o,n=t.z
n=A.p(n,n)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.at(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mG(A.b2(n,r,t.a))
n.k8(a)
return n},
F6(a,b){var s,r,q,p=b>>>0
for(s=new A.dL(a),r=t.sU,s=new A.aS(s,s.gt(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.zS(p,q==null?r.a(q):q)}return p&2147483647},
jf:function jf(a,b){this.a=a
this.b=b},
mK:function mK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mL:function mL(){},
ms:function ms(a){this.a=a},
mt:function mt(){},
h9:function h9(){},
mu:function mu(){},
mv:function mv(){},
mG:function mG(a){this.a=a},
mI:function mI(){},
mJ:function mJ(){},
mH:function mH(){},
vP:function vP(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mS:function mS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function mN(a){this.a=a},
mO:function mO(){},
ia:function ia(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
nh:function nh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=1
_.w=0},
nY:function nY(a){this.a=a},
kM:function kM(a,b,c,d,e,f,g,h,i,j){var _=this
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
oj:function oj(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
ok:function ok(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=0
this.$ti=b},
jY:function jY(a,b,c,d,e,f,g,h,i,j){var _=this
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
oY:function oY(a){this.a=a},
BA(a){var s,r,q,p,o=t.N,n=A.p(o,t.a)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.oX(n)},
oX:function oX(a){this.a=a},
p0:function p0(){var _=this
_.c=_.b=_.a=!1
_.d=0},
ka:function ka(a){this.a=a},
w1(a,b,c,d){return new A.hD(a,b,c,d)},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ps:function ps(a,b){this.a=a
this.b=b},
i_(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bJ(a)
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
cW:function cW(a){this.a=a
this.b=0},
qf:function qf(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
qo:function qo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Ce(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.y1(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.k1(800,t.cX)
for(s=0;s<800;++s)g[s]=new A.ly(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.cR(800,0,!1,r)
p=new Float32Array(8064)
o=J.k1(4000,t.fo)
for(s=0;s<4000;++s)o[s]=new A.lw(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.cR(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga9()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.vj
k=new A.qh(a,new A.oj(a,A.p(t.m,r)),b,c,A.a2(t.N),j,i,h,g,q,p,A.p(r,t.kA),o,n,m,B.iq,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.ka(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.kj(a,b,c)
return k},
qh:function qh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aR=a
_.b1=b
_.bq=c
_.br=d
_.ei=_.is=1
_.es=_.er=_.iK=_.iJ=_.iI=_.iH=_.iG=_.iF=_.eq=_.ep=_.eo=_.en=_.em=_.el=_.ek=_.iE=_.iD=_.iC=_.ej=_.iB=_.iA=_.iz=_.iy=_.ix=_.iw=_.iv=_.iu=_.it=_.aq=$
_.cJ=null
_.hx=e
_.hY=_.hX=_.hW=_.hV=_.hU=_.hT=_.hS=_.hR=_.hQ=_.hP=_.hO=_.hN=_.hM=_.hL=_.hK=_.hJ=_.hI=_.hH=_.hG=_.hF=_.hE=_.hD=_.hC=_.hB=_.hA=_.hz=_.hy=_.cK=$
_.cL=0
_.e1=_.e0=_.e_=_.dZ=_.dY=_.dX=_.dW=$
_.cP=_.cO=_.cN=_.cM=_.c2=_.bp=null
_.c3=$
_.i0=_.i_=_.hZ=!1
_.nm=1
_.e2=f
_.e3=g
_.nn=h
_.i1=i
_.cQ=0
_.i2=j
_.no=k
_.e4=0
_.e5=l
_.np=1
_.e6=!1
_.c4=0
_.e7=m
_.c5=0
_.i3=n
_.i4=o
_.i7=_.i6=_.i5=1
_.i8=0.4
_.e8=p
_.i9=q
_.e9=r
_.ea=s
_.eb=a0
_.ia=_.ef=_.ee=_.ed=_.ec=0
_.ib=null
_.ic=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.im=_.eh=_.eg=_.il=_.ik=_.ns=_.nr=_.nq=_.ij=_.ii=_.ih=_.ig=_.ie=_.c6=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.io=a7
_.ip=a8
_.iq=a9
_.ir=b0},
zi(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ag(0,c).bm(f.ag(0,c)).ga9(),r=A.uN(g)
return A.zq(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
j3(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bJ(a)
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
zq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.j3(a,A.j3(a,A.j3(a,A.j3(a,A.j3(a,A.j3(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
uN(a){return new A.ap((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
Eg(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aT(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a8(),i=A.a8(),h=A.a8()
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
h.b=l}s=j.dD()
if(typeof s!=="number")return s.a3()
s=B.d.aJ(s*255)
r=i.dD()
if(typeof r!=="number")return r.a3()
r=B.d.aJ(r*255)
q=h.dD()
if(typeof q!=="number")return q.a3()
return new A.ap(s,r,B.d.aJ(q*255))},
ii:function ii(){},
lL:function lL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
ly:function ly(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lw:function lw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qi:function qi(){},
qj:function qj(a){this.a=a},
qk:function qk(a){this.a=a},
rR:function rR(){},
r8:function r8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
i6(a,b,c){return new A.b(a,b,c)},
yf(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
CN(a,b,c,d){return new A.l7(d,b,c,a)},
CP(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Ai()
s=a.d
r=A.rS(s,0)
q=A.rS(s,1)
p=A.rS(s,2)
o=A.rS(s,3)
s=t.N
n=A.a2(s)
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
i=new A.b(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.ga9():i
return new A.l7(m,p,o,A.qA(n,s))},
rS(a,b){return A.CO(b<a.length?a[b]:0)},
bA(a,b){return b<a.length&&a[b]>=0.5},
CO(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.d.H((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.d.gc9(a)?-s:s},
kJ:function kJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
na:function na(a){this.a=a},
B5(a,b,c){var s=new A.jB(a,c,null,b)
s.kd(a,null,null,b,c)
return s},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Bi(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bY(new A.K(B.iL,t.e2.a(new A.nQ(a)),t.vL),t.yW)
return s==null?null:new A.fi(s)},
BQ(a,b){var s=A.e([],t.s)
switch(b.a){case 0:A.w3(s,a,B.ij)
break
case 1:A.w3(s,a,B.ik)
break
case 2:A.w3(s,a,B.iO)
break}return s},
w3(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Bh(a){if(a.a!==21)return null
if(a.e)return B.eC
if(!a.d&&a.b>=0.6&&a.c>=3)return B.eD
return B.eB},
cb:function cb(a,b){this.a=a
this.b=b},
nN:function nN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fi:function fi(a){this.a=a},
nQ:function nQ(a){this.a=a},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
BX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kq(s,new A.b(o,n,m),q,p,l,j)
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
kq:function kq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
F8(a){var s,r,q,p=A.p(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.eQ)
p.k(0,q,r.b)}return p},
m3(a){var s,r,q,p,o,n=a.gZ().bO(0)
B.a.X(n)
s=t.z
r=A.p(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.yY(a.h(0,o)))}return A.b2(r,t.N,s)},
yY(a){var s
if(t.f.b(a))return A.m3(A.F8(a))
if(t.j.b(a)){s=t.z
return A.aj(J.f2(a,A.G2(),s),s)}if(a==null||A.bU(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fs)
return a}throw A.d(A.a7("presentation snapshot contains unsupported value "+J.f1(a).p(0),null,null))},
q_:function q_(a){this.a=a},
y2(a,b,c){var s=A.wv(b),r=A.wv(a)
if(c!==2)A.j(A.an(c,"version","unsupported save version"))
return new A.fx(c,s,r)},
wv(a){var s,r,q,p,o=A.q(a).i("ae<1>"),n=A.J(new A.ae(a,o),o.i("o.E"))
B.a.X(n)
o=t.z
s=A.p(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.yX(a.h(0,p)))}return A.b2(s,t.N,o)},
yX(a){var s,r,q,p
if(t.f.b(a)){s=A.p(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.fj)
s.k(0,p,q.b)}return A.wv(s)}if(t.j.b(a)){r=t.z
return A.aj(J.f2(a,A.G6(),r),r)}if(a==null||A.bU(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fu)
return a}throw A.d(A.a7("save contains unsupported value "+J.f1(a).p(0),null,null))},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(){},
eE:function eE(a,b){this.a=a
this.b=b},
xx(a,b,c,d,e,f,g,h){var s=A.e([],t.pC),r=A.e([],t.ns)
return new A.o8(a,b,c,d,e,f,g,s,r,h)},
xy(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aL(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.fi)
r=c.h(0,"runSeed")
q=A.aL(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aL(p)||p<1||typeof o!="number")throw A.d(B.fD)
if(!isFinite(480))throw A.d(A.an(480,"daySeconds","must be finite and > 0"))
n=new A.jL(p,480)
if(!isFinite(o)||o<0||o>=24)A.j(A.a7("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.BK(a5,A.aM(a1,s,m))
k=A.B2(l,A.aM(a0,s,m),n)
j=A.xA(b)
A.Bz(A.aM(a2,s,m)).mj(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bU(f))A.j(B.eY)
e=A.BR(c.h(0,"narrative"))
if(e==null)e=A.pA(d,d,d)
return A.xx(b,q,j,n,l,k,new A.jz(i,h,g,f),e)},
E2(a){var s
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
ep:function ep(a,b){this.a=a
this.b=b},
jK:function jK(){},
o9:function o9(a,b){this.a=a
this.b=b},
o8:function o8(a,b,c,d,e,f,g,h,i,j){var _=this
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
oa:function oa(a){this.a=a},
ob:function ob(){},
oc:function oc(){},
od:function od(a){this.a=a},
oe:function oe(){},
AL(a){var s,r,q,p,o,n,m="modelScale",l=A.mb(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.aA(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.f9)
s=A.eb(l,"houseId")
r=A.eb(l,"sourceRef")
q=J.f2(A.m8(l,"rooms"),new A.n_(k),t.bJ)
q=A.J(q,q.$ti.i("a6.E"))
q.$flags=1
p=J.f2(A.m8(l,"portals"),new A.n0(k),t.lT)
p=A.J(p,p.$ti.i("a6.E"))
p.$flags=1
o=J.f2(A.m8(l,"stairs"),new A.n1(),t.gI)
o=A.J(o,o.$ti.i("a6.E"))
o.$flags=1
n=J.f2(A.m8(l,"exteriorCells"),new A.n2(),t.N)
n=A.J(n,n.$ti.i("a6.E"))
n.$flags=1
return new A.mZ(s,r,q,p,o)},
AM(a,b){var s=A.mb(a,"room"),r=A.eb(s,"id"),q=A.zz(s.h(0,"origin"),"origin",b),p=A.zz(s.h(0,"size"),"size",b),o=J.f2(A.m8(s,"windows"),new A.n4(b),t.ya)
o=A.J(o,o.$ti.i("a6.E"))
o.$flags=1
return new A.f4(r,q,p,o)},
mb(a,b){return t.P.b(a)?a:A.iW(b+" is not an object")},
m8(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.iW(b+" is not a list")},
eb(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.iW(b+" is not a string")},
j_(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.iW(b+" is not finite")},
Fl(a,b){var s,r
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.uS())}else s=!0
if(s)return A.iW(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.Q(a);r.m();)s.push(A.aA(r.gn()))
return s},
zz(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.Fl(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
iW(a){return A.j(A.a7(a,null,null))},
mZ:function mZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
n_:function n_(a){this.a=a},
n0:function n0(a){this.a=a},
n1:function n1(){},
n2:function n2(){},
n3:function n3(a){this.a=a},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4:function n4(a){this.a=a},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f5:function f5(a){this.b=a},
uS:function uS(){},
jl:function jl(a,b){this.a=a
this.b=b
this.d=null},
nj:function nj(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
l8:function l8(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oB:function oB(){this.b=0},
qq:function qq(a,b,c){var _=this
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
jE:function jE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nS:function nS(){},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
oD:function oD(){},
oC:function oC(a,b,c){this.a=a
this.b=b
this.c=c},
Gh(a){var s,r,q,p,o,n,m,l
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
return new A.cg(B.a7,p,new Uint16Array(A.a1(a.b)),new A.j8(new A.M(s.a,s.b,s.c),new A.M(s.d,s.e,s.f)))},
Gg(a){var s,r,q,p,o,n=A.e([],t.uH)
for(s=A.F5(a,new A.vH(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jF(o,p.c,p.e))}return n},
F5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(l==null){l=B.b.q(d,":")?B.b.E(d,0,B.b.bG(d,":")):null
l=new A.d3(d,l,h,A.e([],p))
s.k(0,d,l)}B.a.L(l.d,A.e([m,k,j],p))}r=A.e([],t.wf)
q=s.$ti.i("as<2>")
q=A.J(new A.as(s,q),q.i("o.E"))
B.a.S(q,new A.uL())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].p5(a))
return r},
DM(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jE(r,q,p,o,n,m)},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
vH:function vH(a){this.a=a},
uL:function uL(){},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
em:function em(a,b){this.a=a
this.b=b},
jG:function jG(){},
Fw(a){var s,r,q,p=new A.oC(A.e([],t.Dl),A.e([],t.t),A.p(t.N,t.S))
for(s=0;s<4;++s)A.E5(p,a,B.cJ[s],15.75,15.75,12.044999999999998,0.63)
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
A.EX(p,15.75,15.75,12.044999999999998,16.32)
A.DP(p,15.75,15.75,16.32)
A.E1(p,15.75,15.75,12.044999999999998)
A.E9(p,a,15.75)
A.F2(p,15.75,15.75)
A.DL(p,15.75)
return p.ms()},
E5(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.il)
for(s=b6.b,r=s.length,q=B.u!==b7,p=B.l!==b7,o=B.m===b7,n=B.F===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.r)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.e4(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aw(i),b=J.Q(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aH(i)!==b7)continue
B:{if(!p||o){a0=g+a.ae(i)
break B}if(!q||n){a0=e+a.ae(i)
break B}a0=null}B.a.l(b4,new A.e4(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
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
if(B.a.M(b4,new A.uq(b0,b1,b2,b3)))continue
switch(m){case 0:b5.v(0,b1,b3,0,b0,b2,r)
break
case 2:b5.v(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.v(0,0,b3,b1,r,b2,b0)
break
case 1:b5.v(0,s,b3,b1,b8,b2,b0)
break}}A.E8(b5,b4,b7,b8,b9,c1)
A.E6(b5,b4,b7,b8,b9,c1)
A.E7(b5,b4,b7,b8,b9,c0,c1)},
E7(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aJ([0,a4===B.l||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.X(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.up(a,a0,g)))continue
switch(s){case 0:a2.v(1,a0,e,m,a,f,l)
break
case 2:a2.v(1,a0,e,k,a,f,j)
break
case 3:a2.v(1,m,e,a0,l,f,a)
break
case 1:a2.v(1,o,e,a0,n,f,a)
break}}}},
E6(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
E8(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.F0(a2,g,a4,a5,a6,a7,q)}},
F0(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
EX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.v(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.v(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.v(4,i,p,-0.38,j,q,-0.44)
a.v(4,i,p,s,j,q,o)}A.EY(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.v(5,h+0.5,p,o,h-0.5,r,q)}},
EY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
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
DP(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.v(0,g+0.35,k,n,g-0.35,l,q)
a.v(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.v(5,d+0.1,o,m,d-0.1,r,p)}}},
E1(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.v(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.v(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.v(6,j,b+0.06,d,k,b,e)}a.v(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
E9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ae("hall")
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
F2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
DL(a,b){var s,r
a.v(0,6.7,1,-4.05,-2.5,0,-4.4)
a.v(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.v(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.v(7,b+3,0,-4.55,-3,-0.08,-5.2)},
e4:function e4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uq:function uq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
up:function up(a,b,c){this.a=a
this.b=b
this.c=c},
G4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.x3(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dO(B.eH,k.a,s)}r=A.A1(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dO(B.eI,r.a,s)}if(A.A2(b,d,c)!=null)return B.eM
q=A.G3(a,b,c,d)
if(q!=null)return new A.dO(B.c7,q.a,"inspect the "+q.b)
p=A.A0(b,c,d,e)
if(p!=null){o=e.cF(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dO(B.eK,l,m?"inspect the "+o.b:"inspect "+n)}return B.eN},
A0(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mi(a5,s,4.5)
for(q=a6.om(a4),p=J.Q(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cF(i.c)
g=i.f.a
f=i.jd(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.b(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.ga9()
a0=a3.b
a1=Math.acos(B.d.H(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mk(a5,a4,a3.a,new A.b(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
G3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.jp(c)
if(s.length===0)return f
r=d.aG(e)
q=A.mi(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.r)(s),++l){k=s[l]
j=b.a
i=new A.b(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.ga9()
j=b.b
if(Math.acos(B.d.H(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mk(d,c,b.a,new A.b(n,m,o)))return k}return f},
dg:function dg(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
zK(a,b){var s,r=new A.cW(new Float32Array(5376)),q=new A.cW(new Float32Array(5376)),p=new A.cW(new Float32Array(5376)),o=new A.cW(new Float32Array(5376)),n=b.d,m=a.aG(b),l=A.ht(b.y),k=A.ht(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cW(new A.b(j,i,h),new A.b(j,i,f),new A.b(d,i,f),new A.b(d,i,h),l.c,e/c,g/c)
A.DA(r,b,m)
i+=m.b
c=k.e
q.cW(new A.b(j,i,h),new A.b(d,i,h),new A.b(d,i,f),new A.b(j,i,f),k.c,e/c,g/c)
A.Dx(q,b,m)
for(s=0;s<4;++s)A.DE(p,a,b,m,B.cJ[s])
for(j=a.aw(b.a),i=J.Q(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.yL(o,b,m,h,!0)}A.Dy(p,b,m)
A.DB(p,a,b,m)
return new A.qr(B.q.aO(r.a,0,r.b),B.q.aO(q.a,0,q.b),B.q.aO(p.a,0,p.b),B.q.aO(o.a,0,o.b))},
Dx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.t(a,new A.b(n,s,r),new A.b(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.t(a,new A.b(m-0.34,g,l-0.34),new A.b(m+0.34,d-0.018,l+0.34),12037536)
A.t(a,new A.b(m-0.22,d-0.075,l-0.22),new A.b(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.t(a,new A.b(s,r,j),new A.b(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.t(a,new A.b(i,s,r),new A.b(i+0.1,q,p),4078648)}},
Fu(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cW(new Float32Array(5376))
r=a.aG(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.yM(s,b,r,c,q)
return B.q.aO(s.a,0,s.b)},
Fv(a,b){var s,r,q,p=new A.cW(new Float32Array(5376)),o=a.aG(b)
for(s=a.aw(b.a),r=J.Q(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.yL(p,b,o,q,!1)}return B.q.aO(p.a,0,p.b)},
DA(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.ht(c)
if(c==="floor-wood"){c=a3.c
r=B.d.aT(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.eX(m,1.04):A.eX(m,0.84)
A.t(a1,new A.b(b,q,k),new A.b(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.t(a1,new A.b(h,a+0.016,a0+0.18),new A.b(p,a+0.026,c-0.18),6443866)
A.t(a1,new A.b(h+0.08,a+0.027,a0+0.22),new A.b(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.t(a1,new A.b(b+1.15,a+0.018,a0+2.15),new A.b(b+4.7,a+0.03,a0+4.35),5589578)
A.t(a1,new A.b(b+1.28,a+0.031,a0+2.28),new A.b(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.eX(c,1.04):A.eX(c,0.88)
A.t(a1,new A.b(p,o,k),new A.b(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.eX(c,1.06):A.eX(c,0.88)
A.t(a1,new A.b(e,o,k),new A.b(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.t(a1,new A.b(b+0.08,a+0.004,a0+0.08),new A.b(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.t(a1,new A.b(b+2.2,a+0.015,a0+2.45),new A.b(b+2.68,a+0.021,a0+2.93),A.eX(c,0.58))}},
DB(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.m0(b2,b4,b5,"living")
A.iU(b2,b4,"living")
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
case"hall":A.DC(b2,b3,b4,b5,a5,a4)
A.DD(b2,b3,b4,b5,a5,a4)
A.iU(b2,b4,"hall")
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
case"kitchen":A.iU(b2,b4,"kitchen")
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
case"cellar":A.iU(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.t(b2,new A.b(a8+m,b0,q),new A.b(p+m,o+B.c.P(k,2)*0.18,n),a5)}A.t(b2,new A.b(a9+2.55,b0+0.15,b1+0.38),new A.b(a9+2.72,b0+1.55,b1+0.56),a4)
A.t(b2,new A.b(a9+2.42,b0+1.28,b1+0.32),new A.b(a9+2.86,b0+1.38,b1+0.65),a6)
A.t(b2,new A.b(a9+0.4,b0+1.72,b1+0.45),new A.b(a9+3.4,b0+1.82,b1+0.58),a4)
A.t(b2,new A.b(a9+1.9,b0+1.58,b1+0.42),new A.b(a9+2.06,b0+1.76,b1+0.61),a4)
A.t(b2,new A.b(a9+1.84,b0+1.62,b1+0.55),new A.b(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.m0(b2,b4,b5,"bedroom")
A.iU(b2,b4,"bedroom")
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
case"landing":A.m0(b2,b4,b5,"landing")
a8=a9+0.48
A.t(b2,new A.b(a9+0.34,b0+0.02,b1+1.62),new A.b(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.t(b2,new A.b(a8,q+l,p+j),new A.b(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.t(b2,new A.b(a8+l,q,p+j),new A.b(o+l,n,m+j),a5)}break
case"bathroom":A.m0(b2,b4,b5,a7)
A.iU(b2,b4,a7)
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
case"spare-room":A.m0(b2,b4,b5,"spare")
A.t(b2,new A.b(a9+1,b0,b1+0.7),new A.b(a9+3.25,b0+1.65,b1+2),6972528)
A.t(b2,new A.b(a9+0.8,b0+1.6,b1+0.52),new A.b(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.t(b2,new A.b(a8-1.05,b0,q-1.02),new A.b(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.t(b2,new A.b(p,o+l,n),new A.b(a8,m+l,q),a4)}break}},
m0(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
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
iU(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
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
DD(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
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
DC(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
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
g=B.d.oP(k/0.18)
f=B.d.aJ(1>g?1:g)
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
DE(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.e([],t.l5)
for(s=a2.a,r=a1.aw(s),q=J.Q(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
if(!p.as&&p.aH(s)===a4)a.push(new A.e3(p.ae(s),p.ae(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.e3(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aJ([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.L(0,A.e([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.X(l)
s=A.aJ([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.L(0,A.e([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.tG(f,e,d,c)))continue
A.Fm(a0,a2,a3,a4,f,e,d,c)}A.DF(a0,a2,a3,a4,b,a)},
DF(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tE(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tE(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tE(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tE(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.bb(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.bb(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.bb(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.bb(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.H(a9),o=r.i("n(1)").a(new A.tF(b3)),a9=B.a.gu(a9),r=new A.S(a9,o,r.i("S<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.bb(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.bb(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.bb(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.bb(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.DG(b0,b1,b2,b3,b,p)}},
DG(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.bb(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.bb(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.bb(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.bb(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.bb(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
tE(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.Fb(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.bb(a,b,c,d,n,o,g,h,i,j)}},
Fb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.e([new A.fK(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fK(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fK(n,j))}h=p}return h},
Dy(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.kL.q(0,r))return
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
bb(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.az(j,l,g,h,d)
a.az(s,r,q,p,d)
a.az(l,s,p,g,d)
a.az(r,j,h,q,d)
a.az(l,j,r,s,d)
a.az(g,p,q,h,d)},
Fm(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.ht(n).e
a.cW(s.a8(0,o),r.a8(0,o),q.a8(0,o),p.a8(0,o),A.ht(n).c,(f-e)/m,(a1-a0)/m)
l=A.Fn(b,d)
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
default:j=k}A.t(a,o,j,A.eX(A.ht(n).c,0.68))},
eX(a,b){var s,r=new A.uJ(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.d6()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.d6()
r=r.$1(a&255)
if(typeof r!=="number")return A.j5(r)
return(q<<16|s<<8|r)>>>0},
Fn(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
yL(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aH(d),b=a3.ae(d),a=b+a3.w
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
break}if(a4)A.yM(a0,a1,a2,a3,q)
A.Dz(a0,a1,a2,a3)},
Dz(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.ae(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aH(d)
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
A.bb(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.m,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.bb(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.bb(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.bb(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
yM(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aH(o),m=d.ae(o)
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
qr:function qr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tG:function tG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tF:function tF(a){this.a=a},
uJ:function uJ(a){this.a=a},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b){this.a=a
this.b=b},
xA(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.e([],b5),b7=t.qP,b8=A.e([],b7),b9=A.e([],t.DZ),c0=t.N
c0=new A.oz(b6,b8,b9,A.p(c0,t.U),A.p(c0,t.T),new A.oB())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.L(b6,A.e([new A.aU(n,B.ar,new A.b(4.5,3.9,4),new A.b(0,0,0),A.e([new A.b7("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.b7("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bg(m,l,new A.b(1,1.95,1),!1,!1,m),new A.bg(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.b0,"wallpaper-stripes",i,h,B.L),new A.aU(g,B.ar,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.e([new A.b7("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bg("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.e([new A.bi(e,e,new A.b(0.2,2.175,0.35)),new A.bi(d,d,new A.b(2.2,2.55,3)),new A.bi(c,c,new A.b(0.4,1.35,4.1)),new A.bi(b,b,new A.b(0.92,0.82,5.55))],p),a,i,h,B.L),new A.aU(a0,B.ar,new A.b(4.5,3.75,3),new A.b(0,0,4),A.e([new A.b7("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.b7("kitchen-west",B.F,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bg(a1,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a1),new A.bg("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.bg("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.bi(a2,a2,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.iH),new A.aU("cellar",B.ar,new A.b(4,3,4),new A.b(1,-3,2),B.b2,A.e(["hall-cellar"],r),B.io,B.b0,"wallpaper-damp","floor-concrete","ceiling-pipes",B.L),new A.aU("bedroom",B.as,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.e([new A.b7("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.b7("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bg(a3,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a3),new A.bg("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.e([new A.bi(a4,a4,new A.b(2.2,1.125,2.5)),new A.bi(a5,a5,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.L),new A.aU(a6,B.as,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.b2,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.bg("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.b0,a,i,h,B.L),new A.aU(a8,B.as,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.e([new A.b7("bathroom-east",B.u,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.bg("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.e([new A.bi(a9,a9,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.L),new A.aU(b0,B.as,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.e([new A.b7("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bg("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.e([new A.bi(b1,b1,new A.b(0.5,1.8,0.3)),new A.bi(b2,b2,new A.b(3.7,2.1,2.7)),new A.bi(b3,b3,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.L)],b5))
B.a.L(b8,A.e([A.dX(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.dX(g,n,b4,!1,B.F,B.u,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.dX(g,a0,b4,!1,B.F,B.u,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.dX(a0,n,b4,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.dX(g,"cellar","kit-cellar-door-grille",!1,B.m,B.u,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.dX(g,a6,o,!1,B.u,B.u,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.dX(a6,"bedroom",b4,!1,B.F,B.u,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.dX(a6,a8,b4,!1,B.m,B.l,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.dX(a6,b0,b4,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dt("hall-stairs",f,B.ic,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
c0.kw()
c0.kx()
c0.la()
b5=b6.length
if(b5!==8)A.j(A.m("expected eight rooms, got "+b5))
b5=c0.gp0()
if(b5!==9)A.j(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaN(b9).c.length!==3||B.a.gU(B.a.gaN(b9).c)!==9.45)A.j(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.j(A.m("expected nine physical portals"))
c0.m7()
c0.m5()
return c0},
oz:function oz(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oQ:function oQ(a){this.a=a},
oR:function oR(){},
oS:function oS(){},
oP:function oP(){},
oT:function oT(a){this.a=a},
oU:function oU(){},
mi(a,b,c){var s=a.aG(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mk(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Ew(a,s,c,d)},
Ew(a,b,c,d){var s,r,q,p,o=a.aG(b),n=d.ag(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tK(a,b,o,B.l,r,q,p,c,n,m))return!0
if(A.tK(a,b,o,B.m,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tK(a,b,o,B.F,s,r,q,c,n,m))return!0
if(A.tK(a,b,o,B.u,s+o.a,r,q,c,n,m))return!0
return!1},
tK(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a8(0,a6.a3(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.l||a1===B.m
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aw(m),k=J.Q(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aH(m)===a1){g=q.ae(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
x3(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mi(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.r)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.b(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.ga9()
f=a.b
if(Math.acos(B.d.H(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mk(a0,a1,a.a,new A.b(h,g,i)))continue
m=d
l=j}}return l},
A1(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mi(b,j,4.5):4.5
for(s=b.aw(c),r=J.Q(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.op(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.z8(l,k,a,i,0.5236)||k>=q)continue
if(!A.mk(b,c,a.a,n))continue
q=k
p=o}return p},
A2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mi(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
l=A.Fo(b,h,m)
k=a.a
j=new A.b(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.z8(j,i,a,s,0.5236)||i>=p)continue
if(!A.mk(b,c,a.a,l))continue
p=i
o=m}return o},
z8(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.H(a.ga9().c1(c.b),-1,1))<=e},
Fo(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
nR:function nR(){this.a=null
this.b=0},
r9:function r9(){},
ra:function ra(){},
BE(a){var s=A.j0(a,"inventory asset"),r=A.dD(s,"id"),q=A.dD(s,"kind")
A.dD(s,"source")
A.dD(s,"proxy")
A.dD(s,"pivot")
s=A.j0(s.h(0,"bounds"),"inventory bounds")
return new A.cQ(r,q,new A.p1(A.mh(s.h(0,"min"),"bounds.min"),A.mh(s.h(0,"max"),"bounds.max")))},
BF(a){var s,r,q,p,o,n,m,l="stateKey",k=A.j0(a,"inventory placement"),j=A.j0(k.h(0,"visibility"),"placement visibility"),i=A.j0(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dD(k,"id"),f=A.dD(k,"roomId"),e=A.dD(k,"assetId")
A.dD(k,"role")
s=typeof k.h(0,"socket")=="string"?A.x(k.h(0,"socket")):null
k=A.j0(k.h(0,"transform"),"inventory transform")
r=A.mh(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.fm)
q=A.mh(k.h(0,"position"),"transform.position")
p=A.mh(k.h(0,"rotation"),"transform.rotation")
A.dD(j,"layer")
if(typeof j.h(0,l)=="string")A.x(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.x(i.h(0,"focusId")):null
m=t.P.b(h)?A.EL(h,"radius"):0
return new A.cv(g,f,e,s,new A.p3(q,p,r),o,n,m)},
j0(a,b){return t.P.b(a)?a:A.dA(b+" is not an object")},
dD(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dA(b+" is not a string")},
EL(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dA(b+" is not finite")},
mh(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.uR())}else s=!0
if(s)return A.dA(b+" is not a finite vec3")
s=J.aC(a)
return new A.b(A.aA(s.h(a,0)),A.aA(s.h(a,1)),A.aA(s.h(a,2)))},
dA(a){return A.j(A.a7(a,null,null))},
oE:function oE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oH:function oH(a){this.a=a},
oF:function oF(a){this.a=a},
oG:function oG(a){this.a=a},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.f=c},
cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
p3:function p3(a,b,c){this.a=a
this.b=b
this.c=c},
p1:function p1(a,b){this.a=a
this.b=b},
uR:function uR(){},
p2:function p2(a){this.a=a},
cS:function cS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jV:function jV(a){this.a=a},
oI:function oI(a){this.a=a},
dX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bt(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hn:function hn(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bt:function bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bg:function bg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c,d,e,f,g){var _=this
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
By(a){return A.Bx(a)},
Bx(a){var s,r,q,p,o,n,m=A.zh(a,"sound emitter"),l=t.N,k=A.p(l,l)
for(s=A.zh(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.fh)
k.k(0,r.a,q)}s=A.wS(m,"id")
r=A.wS(m,"roomId")
p=A.wS(m,"placementId")
o=A.Fk(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.fU("gain is not a number")
return new A.cP(s,r,p,o,n,A.b2(k,l,l))},
zh(a,b){return t.P.b(a)?a:A.fU(b+" is not an object")},
wS(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.fU(b+" is not a string")},
Fk(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.uQ())}else s=!0
if(s)throw A.d(A.a7(b+" must be a numeric vec3",null,null))
s=J.aC(a)
return new A.b(A.aA(s.h(a,0)),A.aA(s.h(a,1)),A.aA(s.h(a,2)))},
fU(a){return A.j(A.a7(a,null,null))},
oK:function oK(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
oN:function oN(){},
cP:function cP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oA:function oA(){this.b=this.a=null},
es:function es(a){this.a=a},
oJ:function oJ(){this.b=this.a=null},
cO:function cO(a,b){this.a=a
this.b=b},
uQ:function uQ(){},
xB(a,b,c,d,e,f){var s=t.N
return new A.oO(e,f,c,a,A.b2(A.aM(d,s,s),s,s),A.aj(b,s))},
xC(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.p(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.hL(p.ax,p.ay))}s=A.p(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.p(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.hB(j.d,j.r))}return A.xB(a.r.b,B.o,i,B.cR,h,s)},
Bz(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.j2
r=a3.h(0,"mantleHistory")
if(r==null)r=B.ix
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aL(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.ff)
p=t.N
o=A.p(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.ca)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bU(j)||!A.bU(i))A.j(B.ca)
o.k(0,k,new A.hL(j,i))}h=A.p(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bU(l.b))throw A.d(B.fc)
h.k(0,k,A.U(l.b))}g=A.p(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.c8)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bU(f)||!A.bU(e))A.j(B.c8)
g.k(0,k,new A.hB(f,e))}d=A.p(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.fM)
d.k(0,n,A.x(p.b))}c=A.e([],t.s)
for(q=J.Q(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.eO)
B.a.l(c,b)}return A.xB(a2,c,g,d,o,h)},
wO(a,b){return a.a.a===b.a&&a.a5(0,b.gap(b))},
oO:function oO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hL:function hL(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
ht(a){var s=B.b8.h(0,a)
if(s==null)throw A.d(A.m("Unknown house surface material: "+a))
return s},
bf:function bf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bf(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hA(e,A.H(e).c)
q=new A.fG()
q.da((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hi(a,q,2,r,1+s,A.aJ(["time"],t.N))
break
case 3:A.hi(a,q,3,r,1+s,A.aJ(["place"],t.N))
break
case 4:A.hi(a,q,4,r,2+s,p)
A.Bb(a,q,4)
break
case 5:A.hi(a,q,5,r,s,p)
A.B9(a,q,5)
break
case 6:A.hi(a,q,6,r,s,p)
A.Ba(a,q)
A.Be(a,q,6)
break
case 7:A.Bc(a,q,7)
break
default:if(s>0)A.hi(a,q,b,r,s,p)}},
B8(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Bd(a,b,c))return!1
return!0},
hi(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(A.B8(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d7(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.xv(a,b,o[p],f)}},
xv(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gU(o).a,n,n)
if(d==null)s=A.e(B.y.slice(0),t.s)
else{n=t.vY
s=A.J(new A.K(B.y,t.Ag.a(new A.nM(d)),n),n.i("o.E"))}n=s.length
if(n===0)return
n=b.aL(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.f5(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aL(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.dP(c.a,m,B.a.gU(o).b)},
Bb(a,b,c){var s=A.xw(a,b,c)
if(!a.bY(s))return
a.ff(c,t.G.a(s),0,B.aU,null)},
xw(a,b,c){var s,r,q,p,o,n=t.N,m=A.p(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.y[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aL(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
B9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d7(i,b)
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
j=s.f5(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aL(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.dP(q.a,o,B.a.gU(i).b)
a.dP(p.a,n,B.a.gU(r).b)},
Ba(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aL(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.a1(0,q[r].a)},
Be(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aL(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.xv(a,b,q[s],null)},
Bc(a,b,c){var s=c+1,r=A.xw(a,b,s)
if(!a.bY(r))return
a.ff(s,t.G.a(r),0,B.aU,null)},
Bd(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gU(b.c).c===B.av}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gU(b.c).c===B.av}if(c===21)return b.e
return!1},
nM:function nM(a){this.a=a},
CA(a){var s,r,q,p,o=t.N,n=A.p(o,t.a)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p=A.at(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rL(n)},
pi(a,b,c){var s,r,q,p=t.z
p=A.p(p,p)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.k7(A.b2(p,q,q),b,c)},
xN(a){var s=t.N
return A.pi(t.P.a(a.h(0,"fields")).bI(0,new A.pj(),s,s),A.aA(a.h(0,"shakiness")),A.Bk(B.ih,A.x(a.h(0,"hand")),t.qX))},
Bj(a){var s,r,q,p,o=a.h(0,"margin"),n=A.c(a.h(0,"ordinal")),m=A.c(a.h(0,"day")),l=A.e([],t.Bv)
for(s=J.Q(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.xN(r.a(s.gn())))
s=A.aB(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.yU(a.h(0,"lastReadDay"))
return new A.bW(n,m,l,s,q,p,o==null?null:A.xN(r.a(o)))},
dQ:function dQ(a,b){this.a=a
this.b=b},
rL:function rL(a){this.a=a},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
pj:function pj(){},
pk:function pk(a){this.a=a},
bW:function bW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xK(a){return new A.p5(a,A.p(t.S,t.g),A.a2(t.N),A.e([],t.t))},
BK(a,b){var s,r,q,p,o=A.xK(a)
o.e=A.c(b.h(0,"nextOrdinal"))
o.f=A.c(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.Ax(s.a(b.h(0,"tags")),t.N))
for(s=J.Q(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Bj(r.a(s.gn()))
q.k(0,p.a,p)}return o},
p5:function p5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pc:function pc(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c){this.c=a
this.a=b
this.b=c},
n5:function n5(){},
n6:function n6(){},
f7:function f7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
n7:function n7(){},
ph:function ph(){},
pg:function pg(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
pW:function pW(){},
pV:function pV(a,b,c){this.b=a
this.c=b
this.d=c},
pX:function pX(){},
BW(a,b,c){return B.k1},
ko:function ko(a,b){this.a=a
this.b=b},
pY:function pY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
w7(a){if(!isFinite(0))A.j(A.an(0,"interpolation",null))
return new A.qn(a)},
hR:function hR(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
qn:function qn(a){this.a=a},
kz:function kz(a,b,c){this.a=a
this.b=b
this.c=c},
y_(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hA(c,A.H(c).c)
r=A.J(r,A.q(r).c)
B.a.X(r)
s=t.N
r=A.aj(r,s)
r=new A.ql(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b2(l,s,t.X))
r.kk(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
qm(a,b,c,d,e){var s=A.m5("RENDERER_SHA"),r=A.m5("GAME_SHA"),q=A.m5("DART_SDK_VERSION")
return A.y_(a,"1795e34564fa-05ea6155c953-dirty",b,c,d,r,A.m5("LOCKFILE_SHA256"),e,A.m5("PROJECT_VERSION"),s,q,null)},
m5(a){var s=B.iV.h(0,a)
return s.length===0?null:s},
ql:function ql(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
xt(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.j(A.a7("saved day-loop resources must not be negative",null,null))
return new A.nC(c,g,b,a,e,d===!0,s)},
B2(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.f3)
s=A.e([],t.El)
for(r=J.Q(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.fg)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aL(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.f_)
f=A.bY(new A.K(B.cC,q.a(new A.nD(h)),p),o)
e=A.bY(new A.K(B.cI,n.a(new A.nE(g)),m),l)
if(f==null||e==null)throw A.d(B.fH)
B.a.l(s,new A.fz(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aL(d)||!A.aL(c)||!A.aL(b)||!A.bU(a))throw A.d(B.fo)
return A.xt(c,d,a1,a,b,s,a3)},
bP:function bP(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
nC:function nC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nD:function nD(a){this.a=a},
nE:function nE(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b){this.b=a
this.c=b},
eK:function eK(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
oV:function oV(a){this.c=a},
oZ:function oZ(a,b){this.a=a
this.b=b},
p_:function p_(){},
y1(){var s=A.wC(B.o),r=A.wC(B.o),q=new A.qt(B.C,s,r)
if(!isFinite(0))A.j(B.eP)
if(!B.a.a5(r,B.a.gap(s)))A.j(B.fp)
if(q.a===B.C&&q.b!==0&&!q.e)A.j(B.eT)
return q},
wC(a){var s,r,q,p=A.e([],t.s),o=A.a2(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.fE)
B.a.l(p,q)}return p},
ci:function ci(a,b){this.a=a
this.b=b},
qs:function qs(){},
cU:function cU(){},
qt:function qt(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jL:function jL(a,b){this.a=a
this.b=6
this.c=b},
Ee(a){var s,r=A.e([],t.yo)
for(s=1;s<=21;++s)r.push(new A.ur(a,s).$0())
return r},
Ge(a){var s=B.d.H(a,0,1)
if(s<=0.5)return A.ze(4491468,16777215,s*2)
return A.ze(16777215,16759637,(s-0.5)*2)},
ze(a,b,c){var s,r=new A.uz(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.d6()
s=r.$1(8)
if(typeof s!=="number")return s.d6()
r=r.$1(0)
if(typeof r!=="number")return A.j5(r)
return(q<<16|s<<8|r)>>>0},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rM:function rM(a){this.b=a},
ur:function ur(a,b){this.a=a
this.b=b},
uz:function uz(a,b,c){this.a=a
this.b=b
this.c=c},
pA(a,b,c){var s,r=t.N,q=A.p(r,r)
if(a!=null)q.L(0,a)
s=A.p(r,r)
if(b!=null)s.L(0,b)
r=A.p(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.pz(q,s,r)},
BR(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aL(s)||s!==1)return l
r=A.xT(a.h(0,"choices"))
q=A.xT(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.p(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.Bp(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pA(r,q,p)},
xT(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.p(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.x(q.b))}return r},
Bp(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aL(r)||r<1||!A.aL(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cJ(s,r,q,p)},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
pB:function pB(){},
pC:function pC(){},
pD:function pD(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
fB(a){var s,r,q=A.p(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.c.p(r.a),r.b)}return q},
re:function re(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rf:function rf(){},
rg:function rg(){},
eI:function eI(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b){this.a=a
this.b=b},
l3:function l3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rh:function rh(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
ri:function ri(){},
rj:function rj(){},
j9:function j9(a){this.a=a},
vO:function vO(a,b,c){this.b=a
this.e=b
this.f=c},
AE(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.eR)
s=new A.mr()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wr(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dE(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aS(B.b5,new A.mp(a),new A.mq()))},
cH:function cH(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mr:function mr(){},
mp:function mp(a){this.a=a},
mq:function mq(){},
mC:function mC(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mE:function mE(a){this.a=a},
mD:function mD(a,b){this.a=a
this.b=b},
AK(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fl)
s=new A.mP()
return new A.dF(s.$1$2(B.b3,a.h(0,"output"),t.xs),s.$1$2(B.aY,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.aX,a.h(0,"reverb"),t.gc),s.$1$2(B.aW,a.h(0,"ducking"),t.ul))},
cs:function cs(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mP:function mP(){},
mQ:function mQ(a,b){this.a=a
this.b=b},
mR:function mR(a){this.a=a},
n9:function n9(a){this.a=a
this.b=null},
nd(a,b,c){var s
b.C()
if(c<1||c>6)throw A.d(A.an(c,"level","must be between 1 and 6"))
s=A.C(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nb(s,b)
return s},
dJ(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.C(a,"button","brush-button brush-state-"+s.b,r)
A.nb(q,b)
q.type="button"
q.disabled=s===B.am
q.addEventListener("click",A.Z(new A.nc(c)))
return q},
AQ(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.am
A.nb(s,b)
s.addEventListener("change",A.Z(new A.ng(d,s)))
return s},
AP(a,b,c,d,e,f){var s,r
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
A.nb(s,b)
s.addEventListener("input",A.Z(new A.nf(s,e)))
return s},
vQ(a,b){var s=B.b.jW(A.x(a.className),A.xZ("\\s+")),r=A.H(s),q=r.i("K<1>"),p=A.J(new A.K(s,r.i("n(1)").a(new A.ne()),q),q.i("o.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a7(p," ")
a.setAttribute("data-brush-state",s)},
nb(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gmb())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.am)a.setAttribute("aria-disabled","true")},
nc:function nc(a){this.a=a},
ng:function ng(a,b){this.a=a
this.b=b},
nf:function nf(a,b){this.a=a
this.b=b},
ne:function ne(){},
dH:function dH(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.b=b},
b0:function b0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xr(a){var s=!1
if(a.length!==0)if(!B.dj.q(0,a))s=B.kT.q(0,a)||B.kK.q(0,a)||B.kS.q(0,a)||!B.b.W(a,"Mouse")
return s},
DY(a){var s,r,q,p,o=t.N,n=A.p(o,t.a)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
EC(a){var s,r,q=A.p(t.N,t.a),p=a==null?null:new A.I(a,A.q(a).i("I<1,2>"))
p=J.Q(p==null?A.e([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
ff(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fo(B.iS,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.EC(a))
s=new A.fe(g,d,h,e,f,c,A.b2(A.DY(q),s,r))
s.C()
return s},
B_(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.c9)
s=a.h(0,"version")
r=J.ed(s)
if(!r.a_(s,1)&&!r.a_(s,2))throw A.d(B.c9)
q=A.p(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.fb)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.Ay(m,new A.ns())){o=A.e([],r)
for(l=J.Q(m);l.m();)o.push(A.x(l.gn()))
q.k(0,n,o)}else throw A.d(B.eV)}j=A.aA(a.h(0,"horizontalSensitivity"))
r=A.aA(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.ff(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
wt(a){var s,r,q,p=t.N,o=A.p(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
wL(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
wW(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fe:function fe(a,b,c,d,e,f,g){var _=this
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
dG:function dG(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.c=b},
jr:function jr(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
AZ(a){var s=t.N,r=t.m
r=new A.hg(A.ff(null,null,!1,1,!1,!1,2,1),A.p(s,r),A.p(s,r),A.p(s,r),a,A.a(a.createElement("div")))
r.aP(a)
r.kb(a)
return r},
hg:function hg(a,b,c,d,e,f){var _=this
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
B0(a){var s=new A.ny(a,A.a(a.createElement("div")))
s.aP(a)
s.kc(a)
return s},
ny:function ny(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nz:function nz(a){this.a=a},
B6(a){var s=t.W,r=A.e([],s)
s=A.e([],s)
s=new A.nG(A.C(a,"div","door",null),a,r,s)
s.ke(a)
return s},
nG:function nG(a,b,c,d){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=$
_.w=c
_.x=d
_.at=_.as=_.Q=_.z=_.y=null
_.ax=!1},
nH:function nH(a,b){this.a=a
this.b=b},
nI:function nI(a){this.a=a},
nJ:function nJ(a,b){this.a=a
this.b=b},
nL:function nL(a,b){this.a=a
this.b=b},
nK:function nK(a,b){this.a=a
this.b=b},
Bg(a){var s=new A.nO(a,A.a(a.createElement("div")))
s.aP(a)
s.kf(a)
return s},
nO:function nO(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nP:function nP(a){this.a=a},
Bs(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.of(a.b===B.cg,a.c===B.ck,s,a.e===B.ch,a.f===B.ce,a.r===B.cm,a.w,a.x)},
of:function of(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vS(a,b,c,d,e,f,g,h){return new A.fl(d,f,h,e,a,g,c,b)},
Bt(a){var s,r,q,p,o,n,m,l
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.ft)
s=new A.og(a)
r=a.h(0,"contextualReminders")
if(!A.bU(r))throw A.d(B.fF)
q=s.$1$2("interactionMode",B.b4,t.bK)
p=s.$1$2("promptDensity",B.b7,t.dn)
o=s.$1$2("textPacing",B.b6,t.j_)
n=s.$1$2("journalLayout",B.aZ,t.gm)
m=s.$1$2("confirmations",B.aV,t.aJ)
l=s.$1$2("saveFeedback",B.b_,t.mx)
return A.vS(m,r,s.$1$2("focusLossBehavior",B.ax,t.x),q,n,p,l,o)},
di:function di(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
og:function og(a){this.a=a},
oh:function oh(a,b){this.a=a
this.b=b},
oi:function oi(a){this.a=a},
xz(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fk)
s=new A.dP(1,B.a.aS(B.cD,new A.ou(a),new A.ov()),A.x(a.h(0,"renderScale")),A.U(a.h(0,"dynamicResolution")),A.x(a.h(0,"frameTarget")),A.x(a.h(0,"antialiasing")),A.x(a.h(0,"textureQuality")))
s.C()
return s},
jS(a,b){var s=b==null?B.aT:b
return new A.ow(s,a==null?B.aT:a)},
zX(a,b){var s,r,q
a.C()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dN(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dN("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hs(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cv&&b.a<2){q=q.ht(B.aS)
B.a.l(s,"High preset was reduced to Standard")}return new A.op(q,A.aj(s,t.N))},
ct:function ct(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ou:function ou(a){this.a=a},
ov:function ov(){},
ow:function ow(a,b){this.a=a
this.b=b},
oo:function oo(a,b){this.a=a
this.b=b},
op:function op(a,b){this.a=a
this.b=b},
Bv(a){var s=new A.hr(A.p(t.N,t.m),B.aT,a,A.a(a.createElement("div")))
s.aP(a)
s.kg(a)
return s},
hr:function hr(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
os:function os(a){this.a=a},
ot:function ot(a){this.a=a},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(a){this.a=a},
Bw(a){var s=new A.ox(a,A.a(a.createElement("div")))
s.aP(a)
s.kh(a)
return s},
ox:function ox(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oy:function oy(a){this.a=a},
p6:function p6(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function pa(){},
pb:function pb(){},
C(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
z1(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.W)
for(s=t.m,r=0;r<A.c(p.length);++r){q=A.k(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hK:function hK(){},
bh:function bh(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(){},
pP:function pP(){},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
pN:function pN(a){this.a=a},
pQ:function pQ(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
pR:function pR(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pS:function pS(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
q4:function q4(a){this.a=a
this.b=null},
Cg(a){var s=new A.qB(a,A.a(a.createElement("div")))
s.aP(a)
s.km(a)
return s},
qB:function qB(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(a){this.a=a},
kC(a,b){var s=t.N,r=t.m
r=new A.fy(b,A.p(s,r),A.p(s,r),A.p(s,t.rf),A.p(s,r),$.vI(),B.aj,A.p(s,r),A.p(s,r),B.aI,A.p(s,r),a,A.a(a.createElement("div")))
r.aP(a)
r.kn(a,b)
return r},
fy:function fy(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
qZ:function qZ(a){this.a=a},
r_:function r_(a){this.a=a},
r0:function r0(a,b){this.a=a
this.b=b},
r1:function r1(a){this.a=a},
r2:function r2(a){this.a=a},
qT:function qT(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
qS:function qS(a){this.a=a},
qV:function qV(a){this.a=a},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(a,b){this.a=a
this.b=b},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
qN:function qN(a){this.a=a},
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r4(a){return B.a.aS(B.B,new A.r5(a),new A.r6(a))},
Ch(){var s,r,q=A.p(t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
q.k(0,r.a,r.e)}return q},
ds(a,b){var s=t.z
s=A.fo(A.Ch(),s,s)
if(a!=null)s.L(0,a)
s=new A.r3(b,A.b2(s,t.N,t.K))
s.ko(a,b)
return s},
y4(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fC)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.f2)
return A.ds(A.aM(s,t.N,t.K),A.c(a.h(0,"version")))},
bv:function bv(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
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
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r3:function r3(a,b){this.a=a
this.b=b},
wa(a,b){var s=b==null?A.ds(null,1):b
return new A.r7(s,a==null?A.ds(null,1):a)},
Ci(a,b){var s,r,q,p,o,n,m,l=A.p(t.N,t.K)
for(q=0;q<10;++q){s=B.B[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.ft(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cY(r)
J.bK(l,s.a,r)}catch(n){if(!(A.ag(n) instanceof A.F))throw n}}m=A.ds(l,1)
return A.wa(m,m)},
r7:function r7(a,b){this.a=a
this.b=b},
Cj(a){var s=new A.rb(a,A.a(a.createElement("div")))
s.aP(a)
s.kp(a)
return s},
rb:function rb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
AH(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.Fg)
for(s=a.d,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cq(p+m+":"+k,m,l.a,l.b,j))}}B.a.S(i,new A.mA())
return new A.mz(A.aj(i,t.bC),A.a2(t.N))},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mz:function mz(a,b){this.a=a
this.b=b},
mB:function mB(){},
mA:function mA(){},
Cz(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.m9
s=t.L
r=A.p(s,t.q1)
q=A.q(a).i("ae<1>")
p=A.J(new A.ae(a,q),q.i("o.E"))
B.a.X(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b6(new A.bm(B.lS,k+" has an out-of-range authored day "+h+"."))
g=A.Cy(k,h,i.b,m)
if(g instanceof A.b6)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bQ(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.p(a,q)
for(o=a0.ax,o=new A.ah(o,o.r,o.e,A.q(o).i("ah<2>"));o.m();){n=o.d
J.h8(e.ce(n.b,new A.rF()),n)}o=A.b2(a0.at,a,t.sy)
q=A.p(a,q)
for(n=new A.I(e,e.$ti.i("I<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.at(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.l1(new A.l0(r,A.a2(a),A.a2(s),o,q,A.e([],t.Dc),B.O,A.pA(b,b,b)))},
Cy(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.p(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cB[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.W(h,m))continue
g=A.fu(B.b.bg(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b6(new A.bm(B.lT,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cH
B.a.l(l,new A.c4(g,i.b,f))}if(l.length===0)continue
B.a.S(l,new A.rC())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b6(new A.bm(B.dD,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b6(new A.bm(B.dD,a+" day "+s+" has no authored tiers."))
return new A.lx(c)},
l0:function l0(a,b,c,d,e,f,g,h){var _=this
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
rI:function rI(a){this.a=a},
rH:function rH(a){this.a=a},
rJ:function rJ(a){this.a=a},
rD:function rD(a){this.a=a},
rE:function rE(){},
rG:function rG(a){this.a=a},
rF:function rF(){},
rB:function rB(a){this.a=a},
rA:function rA(a){this.a=a},
rC:function rC(){},
l1:function l1(a){this.a=a},
lx:function lx(a){this.a=a},
FH(a){var s,r,q,p=A.a2(t.N)
for(s=new A.I(a,A.q(a).i("I<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaB(),q=q.gu(q);q.m();)if(q.gn().gZ().M(0,new A.v_())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.X(s)
return s},
FG(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.at(b,!0,s)
B.a.X(r)
q=new A.fG()
q.da((a^913741)>>>0)
p=q.aL(4)
if(!(p>=0&&p<4))return A.f(B.cA,p)
o=B.cA[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.at(r,!0,s)
B.a.d7(m,q)
s=A.i2(m,0,A.ec(n,"count",t.S),A.H(m).c).bO(0)
B.a.X(s)
return s},
v_:function v_(){},
yg(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aL(r)||!A.aL(q)||!A.aL(p)||r<1||q<0||q>23||p<0)return null
return new A.bQ(s,r,q,p)},
Cx(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a2(t.N)
for(s=t.j,q=J.Q(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a2(t.L)
for(s=J.Q(s.a(a.h(0,j)));s.m();){n=A.yg(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.AG(m)
if(!s&&l==null)return i
return new A.l2(r,o,l)},
AG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yg(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aL(p))if(!(p<0))if(A.bU(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bY(new A.K(B.cB,t.qR.a(new A.mw(r)),t.cE),t.hF)
j=A.bY(new A.K(B.iP,t.da.a(new A.mx(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bY(new A.K(B.hU,t.kr.a(new A.my(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.ja(s,k,j,p,i,n,A.aB(m))},
bM:function bM(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d0:function d0(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l2:function l2(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(){},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mw:function mw(a){this.a=a},
mx:function mx(a){this.a=a},
my:function my(a){this.a=a},
l_:function l_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rK:function rK(){},
b6:function b6(a){this.a=a},
kZ:function kZ(a){this.a=a},
kX:function kX(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
ER(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.j6())return f
n=A.cZ().gaI()
m=n.h(0,"captureSeed")
l=A.fu(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.fu(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.ft(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aE(s,f)
if(t.f.b(q)){m=t.N
p=A.p(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.kM.q(0,o.b))return f
J.bK(p,A.x(o.a),A.x(o.b))}r=p}else return f}catch(g){if(A.ag(g) instanceof A.F)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.kR.q(0,i))return f
if(h!=null&&!B.kP.q(0,h))return f
return new A.rX(l,k,j,h,r)},
ES(){var s,r,q,p=A.cZ().gaI().h(0,"cameraProfile")
A:{if("wide"===p){s=B.en
break A}if("intimate"===p){s=B.ep
break A}s=B.eo
break A}r=A.cZ().gaI().h(0,"cameraFov")
q=A.ft(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fa(B.d.H(q,35,100)*3.141592653589793/180,s.b,s.c)},
j1(a){var s=$.ba
if(s===a&&B.b.q(A.x(a.b.className),"open"))return
if(s!=null)s.a4()
$.ba=a
if(a===$.co.j())$.h6().j2("gameplay.viewport")
else $.h6().oj(A.zj(a))
s=$.ad.j()
s.ay=!1
s.b7()
$.e8=0
a.bJ()},
wH(a,b,c){var s,r,q
$.j2=!0
s=$.ba
if(s!=null)s.a4()
$.ba=a
s=$.h6()
if(s.a.a.length===0)s.j2(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dp(b,B.V,c))
q=s.a
s.a=new A.dV(r,q.b,q.c)
s.kU(b)
s=$.ad.j()
s.ay=!1
s.b7()
$.e8=0
a.bJ()
$.j2=!1},
dC(a){var s,r,q,p,o,n,m,l=null
if($.j2)return
$.j2=!0
a.a4()
$.ba=null
s=$.h6().ml()
$.j2=!1
r=s.a
if(r===B.d5){$.e8=0
r=$.ad.j()
r.b7()
r.ay=!0
q=A.k(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.d4)return
r=s.c.a
r=r.length===0?l:B.a.gU(r)
p=r==null?l:r.a
A:{if(B.bc===p){r=$.co.j()
break A}if(B.cV===p){r=$.fT.j()
break A}r=l
break A}if(r!=null){o=s.d
$.ba=r
n=$.ad.j()
n.ay=!1
n.b7()
$.e8=0
r.bJ()
m=o==null?l:A.k(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
j4(a){if($.ba===a&&B.b.q(A.x(a.b.className),"open"))a.a4()
else A.j1(a)},
fZ(a){var s
if($.j2)return
if($.ba===a)$.ba=null
if(a===$.co.j())$.h6().cg()
else $.h6().nd(A.zj(a))
$.e8=0
s=$.ad.j()
s.b7()
s.ay=!0},
zj(a){if(a===$.co.j())return B.cW
if(a===$.fT.j())return B.V
if(a instanceof A.fy)return B.V
if(a instanceof A.hr)return B.V
if(a instanceof A.hg)return B.V
if(a===$.fS.j())return B.jM
if(a===$.m_.j())return B.jN
if(a===$.iQ.j())return B.jO
if(a===$.lY.j())return B.V
if(a===$.iO.j())return B.jQ
return B.jP},
m4(a,b){var s
a.so7(new A.tR())
a.so9(new A.tS())
a.so8(new A.tT())
a.so3(new A.tZ())
a.so6(new A.u_())
a.soi(new A.u0())
a.sod(new A.u1())
a.soc(new A.u2())
a.sb2(b?new A.u3(a):new A.u4(a))
a.saX(b?new A.u5(a):new A.tU(a))
s=a.f
if(s===B.G)a.snW(new A.tV())
if(s===B.X)a.so4(new A.tW())
if(s===B.H){a.snV(new A.tX())
a.sob(new A.tY())}},
DV(){var s=$.fR.j()
s.seC(new A.tO())
s.sb2(new A.tP())
s.saX(new A.tQ())},
EH(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aE(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.fv)
q=A.xz(r.h(0,"requested"))
$.us=A.jS(A.xz(r.h(0,"effective")),q)}catch(s){$.us=A.jS(null,null)}p=$.xf().a
o=A.zX(p,A.z5())
r=o.a
$.us=A.jS(r,p)
$.fR.j().f1(p,r,o.b)
A.zn()},
z5(){var s,r,q,p,o=$.d4.j().gbn().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.W(p,"max-samples-"))continue
r=A.fu(B.b.bg(p,12),null)
if(r==null)r=1}return new A.oo(r,B.a.q(o,"disjoint-timer-query"))},
zn(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.aj($.xf().A(),null))}catch(s){}},
DU(){var s=$.iN.j()
s.seC(new A.tL())
s.sb2(new A.tM())
s.saX(new A.tN())},
EF(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wy=A.B_(B.k.aE(n,null))}catch(s){$.wy=A.ff(null,null,!1,1,!1,!1,2,1)}r=$.iN.j()
q=r.w=$.f_()
r.x=new A.jr(q)
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
r.dE()
$.ad.j().eZ($.f_().r)
r=$.ad.j()
q=$.f_()
p=r.ch
p.a=q.f
p.eK()
r.b7()
A.zl()},
zl(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.aj($.f_().A(),null))}catch(s){}},
EE(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.iV=A.AK(B.k.aE(r,null))}catch(s){$.iV=B.aI}$.fP.j().jv($.iV)
A.zk()
A.wq()},
zk(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.aj($.iV.A(),null))}catch(s){}},
wq(){var s=$.bp
if(s==null)return
s.jF($.iV)},
EG(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wB=A.Bt(B.k.aE(r,null))}catch(s){$.wB=$.vI()}$.iP.j().jw($.vK())
A.zm()
A.yP()},
zm(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.k.aj($.vK().A(),null))}catch(s){}},
yP(){var s,r="detailed",q=A.Bs($.vK()),p=A.k(A.a(v.G.document).documentElement)
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
ED(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.e7=A.AE(B.k.aE(r,null))}catch(s){$.e7=B.aj}$.eV.j().eY($.e7)
A.wI()
A.m1()},
wI(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.aj($.e7.A(),null))}catch(s){}},
m1(){var s,r,q,p,o,n,m=$.e7,l=$.uM,k=$.wU,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.j(B.f0)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a4
$.me=l
r=$.bS.j()
r.r=$.me?0.5:1
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
if($.yN){m=$.b8.j()
l=$.e7.f
m.e=new A.j9(l==null?B.a4:l)
m=$.b8.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Eh(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uw(r,q)
r.addEventListener("change",A.Z(new A.uu(s)))
q.addEventListener("change",A.Z(new A.uv(s)))},
v6(){var s=0,r=A.bF(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$v6=A.bI(function(e2,e3){if(e2===1){o.push(e3)
s=p}for(;;)switch(s){case 0:d8=v.G
d9=A.k(A.a(d8.document).getElementById("game"))
if(d9==null){s=1
break}$.B.b=d9
$.wA=A.k(A.a(d8.document).getElementById("fps"))
$.c6.b=$.An().cl(A.cZ().gaI().h(0,"renderer"))
A.Ei()
b9=$.B.j()
c0=A.c(A.a(d8.window).innerWidth)>0?A.c(A.a(d8.window).innerWidth):800
b9.width=c0
c0=$.B.j()
b9=A.c(A.a(d8.window).innerHeight)>0?A.c(A.a(d8.window).innerHeight):600
c0.height=b9
n=A.k(d9.getContext("webgl2"))
if(n==null){$.c6.b=B.bU.hw($.c6.j(),B.dQ)
g=B.aL.n8($.c6.j())
g.bc()
$.d4.b=g
A.zp()
A.e9("no-webgl2")
d8=A.k(A.a(d8.document).getElementById("credits"))
if(d8!=null)d8.textContent="this browser has no webgl2."
s=1
break}try{if($.c6.j().a===B.Z){b9=t.s6
c0=t.N
c1=t.iO
c2=t.m3
c3=t.pw
c4=new A.iw(n,A.c($.B.j().width),A.c($.B.j().height),A.e([],b9),A.p(c0,t.qr),A.e([],t.s3),A.p(c0,c1),A.p(c0,c2),A.p(c0,t.xp),A.p(c0,t.bE),A.p(c0,c1),A.p(c0,c2),A.e([],b9),A.p(c0,c1),A.p(c0,c2),A.p(c0,c0),A.p(t.S,c3),A.p(c0,t.qS),A.e([],t.j5),B.il,A.p(c0,t.Aj),A.p(c0,c0),A.p(c0,c3),A.p(c0,t.vD),A.p(c0,c3),B.fN,B.k3)}else c4=new A.fE(n,A.c($.B.j().width),A.c($.B.j().height),A.cZ().gaI().h(0,"render")==="legacy",$.c6.j().d,$.c6.j().e)
m=c4
$.bG=m instanceof A.iw?m:null
$.m7=m instanceof A.fE?m:null
b9=B.aL.dQ($.c6.j(),m)
b9.bc()
$.d4.b=b9}catch(e1){l=A.ag(e1)
k=A.cG(e1)
b9=$.c6.j()
$.c6.b=B.bU.hw(b9,B.dP)
$.m7=new A.fE(n,A.c($.B.j().width),A.c($.B.j().height),A.cZ().gaI().h(0,"render")==="legacy",!0,$.c6.j().e)
b9=B.aL.dQ($.c6.j(),$.m7)
b9.bc()
$.d4.b=b9
$.B.j().setAttribute("data-renderer-error",A.w(l))
if($.j6())$.B.j().setAttribute("data-renderer-error-stack",A.w(k))}A.zp()
p=4
A.e9("initializing")
$.bS.b=new A.nh(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),$.xe())
$.uM=A.U(A.a(A.a(d8.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.wU=A.U(A.a(A.a(d8.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.me=$.uM
b9=$.bS.j()
b9.r=$.me?0.5:1
b9=A.a(d8.window)
c0=t.N
c1=t.s
c2=t.a
c1=A.BA(A.N(["moveForward",A.e(["KeyW"],c1),"moveBack",A.e(["KeyS"],c1),"moveLeft",A.e(["KeyA"],c1),"moveRight",A.e(["KeyD"],c1),"interact",A.e(["KeyE"],c1),"secondary",A.e(["KeyQ"],c1),"run",A.e(["ShiftLeft"],c1),"crouch",A.e(["ControlLeft"],c1),"rotate",A.e(["KeyR"],c1),"reach",A.e(["KeyF"],c1),"journal",A.e(["KeyJ"],c1),"sleep",A.e(["KeyL"],c1),"pause",A.e(["Escape"],c1)],c0,c2))
c3=A.a(b9.document)
c1=new A.jY(b9,c3,A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),new A.b(0,0,0),new A.p0(),c1)
b9.addEventListener("keydown",A.Z(c1.glq()))
b9.addEventListener("keyup",A.Z(c1.gls()))
b9.addEventListener("mousemove",A.Z(c1.gly()))
b9.addEventListener("mousedown",A.Z(c1.glw()))
b9.addEventListener("mouseup",A.Z(c1.glA()))
b9.addEventListener("wheel",A.Z(c1.glC()))
c3.addEventListener("pointerlockchange",A.Z(c1.glu()))
$.ad.b=c1
$.yJ.b=new A.jW(A.e([],t.pW),t.eO)
c1=$.B.j()
b9=A.c(A.a(d8.window).innerWidth)>0?A.c(A.a(d8.window).innerWidth):800
c1.width=b9
b9=$.B.j()
c1=A.c(A.a(d8.window).innerHeight)>0?A.c(A.a(d8.window).innerHeight):600
b9.height=c1
A.e9("renderer")
if($.c6.j().a===B.bl){b9=$.m7
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.h_=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.e9("text")
b9=$.h7()
s=7
return A.am(b9.cc(),$async$v6)
case 7:j=b9.p_()
i=A.Cz(j)
if(!(i instanceof A.l1)){h=t.bB.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aK.b=i.a
$.lX.b=A.AH(j)
g=A.p(c0,c2)
for(c1=t.j,c6=0;c6<5;++c6){f=B.y[c6]
c2=A.x(f)
c3=b9.c
c3===$&&A.h()
c7=c3.h(0,c2)
c2=c1.b(c7)?A.at(c7,!0,c0):B.o
J.bK(g,f,c2)}e=A.CA(g)
$.wp.b=new A.na(B.em)
d=$.wp.j().or(new A.v7(e))
c8=$.vJ()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.bZ.aL(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.d.aT(c2.c)
if(c2==null)c2=10
if(b9<1)A.j(A.an(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.j(A.an(c2,"startHour","must be 0 through 23"))
if(!isFinite(480))A.j(A.an(480,"daySeconds","must be finite and > 0"))
c9=new A.jL(b9,480)
c9.b=c2
d0=A.xK(e)
g=A.xx(42,g,A.xA(42),c9,d0,A.xt(6,16,d0,null,6,B.im,c9),new A.jz(0,0,0,!1),A.pA(null,null,null))}else{g=d.a
g.toString
g=A.xy(g,e)}$.V.b=g
$.aK.j().y=$.V.j().z
g=A.aj(A.Ee($.V.j().b),t.fu)
$.tD.b=new A.rM(g)
g=$.vL()
b9=d.a
g.eM(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.d4.j().b6(A.w7($.V.j().geF()))
if(d.b!=null){g=d.b
g.toString
A.h0(g)}g=$.aK.j()
b9=A.FG($.V.j().b,A.FH(j.b))
g.sjX(A.hA(b9,A.H(b9).c))
A.e9("house")
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
a5.sjO(a3)}}}a6=$.xc()
if(a6!=null&&a6.length!==0)for(g=$.Y.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.xd()}}g=$.bG
if(g!=null)g.mk($.Y.j())
$.b9.b=$.V.j().d
$.Y.j()
g=new A.b(12.9375,1.65,0.825)
$.wV=$.wK=$.wP=g
a9=g.ag(0,new A.b(0,1.3499999999999999,0))
$.iR.b=new A.jl(a9,J.xg(a9,new A.b(0,1.2000000000000002,0)))
$.fQ.b=new A.nR()
$.bT.b=A.y1()
$.ax="hall"
g=d.a
b0=A.BX(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.nG($.Y.j())){g=b0.b
$.wV=$.wK=$.wP=g
$.c7=b0.c
$.ea=b0.d
$.ax=b0.a
b1=g.ag(0,new A.b(0,1.3499999999999999,0))
g=$.iR.j()
g.smm(b1)
g.b=J.xg(b1,new A.b(0,1.2000000000000002,0))
g=$.iR.j()
b9=$.Y.j()
c2=b0.e
c3=b0.f
g.oN($.ax,$.f0(),b9,c3,c2)
A.h0("restored position")}g=A.Cg(A.a(d8.document))
g.snX(new A.v8())
g.sb2(new A.v9())
g.saX(new A.vk())
$.fT.b=g
g=A.a(d8.document)
b9=A.a(g.createElement("div"))
c2=new A.pR(g,b9)
c2.aP(g)
b9.className=A.x(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.a(b9.appendChild(A.nd(g,B.e3,1)))
A.a(b9.appendChild(A.C(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.C(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bh(g,d2,B.cX,"resume")
c2.bh(g,d2,B.cY,"settings")
c2.bh(g,d2,B.cZ,"controls")
c2.bh(g,d2,B.d_,"save now")
c2.bh(g,d2,B.d0,"help")
c2.bh(g,d2,B.d1,"credits")
c2.bh(g,d2,B.d2,"back")
A.a(b9.appendChild(d2))
c2.soe(new A.vq())
c2.sb2(new A.vr())
c2.sog(new A.vs())
c2.so0(new A.vt())
c2.sof(new A.vu())
c2.so5(new A.vv())
c2.so1(new A.vw())
c2.saX(new A.va())
$.co.b=c2
c2=$.V.j().e
b9=$.b9.j()
$.V.j()
$.lZ.b=new A.oZ(c2,b9)
b9=A.a(d8.document)
c2=$.V.j().e
g=$.b9.j()
c3=$.lZ.j()
d3=A.a(b9.createElement("div"))
c3=new A.p6(c2,g,c3,b9,d3)
c3.aP(b9)
d3.setAttribute("aria-label","The Journal")
A.a(d3.appendChild(A.C(b9,"div","journal-title","The Journal")))
d4=A.C(b9,"div","journal-pages",null)
g=A.C(b9,"div","page page-left",null)
c3.y!==$&&A.L()
c3.y=g
c2=A.C(b9,"div","page page-right",null)
c3.z!==$&&A.L()
c3.z=c2
A.a(d4.appendChild(g))
A.a(d4.appendChild(c2))
A.a(d3.appendChild(d4))
A.a(d3.appendChild(c3.kC()))
d5=A.C(b9,"div","tape-roll",null)
A.a(d5.style).setProperty("width","8rem")
c2=A.C(b9,"div","tape-fill",null)
c3.as!==$&&A.L()
c3.as=c2
A.a(d5.appendChild(c2))
A.a(d3.appendChild(d5))
d6=A.C(b9,"div","consult",null)
A.a(d6.appendChild(A.C(b9,"div","consult-label","Cite an entry")))
c2=A.C(b9,"div","entry-picker",null)
c3.at!==$&&A.L()
c3.at=c2
g=A.C(b9,"div","consult-result",null)
c3.ax!==$&&A.L()
c3.ax=g
A.a(d6.appendChild(c2))
A.a(d6.appendChild(g))
A.a(d3.appendChild(d6))
d7=A.k(b9.documentElement)
if(t.m.b(d7)){A.a(d7.style).setProperty("--shake-max-deg","3deg")
A.a(d7.style).setProperty("--shake-max-px","2px")}$.fS.b=c3
$.fS.j().saX(new A.vb())
g=A.a(d8.document)
b9=A.C(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.k(g.body).appendChild(b9))
$.yK.b=new A.q4(b9)
b9=A.a(d8.document)
g=A.C(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.k(b9.body).appendChild(g))
$.yI.b=new A.n9(g)
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
$.b8.b=new A.mC(b9,c2,B.J)
$.yN=!0
c2=A.B6(A.a(d8.document))
c2.snY(A.FW())
c2.so_(A.FZ())
c2.snZ(A.FY())
c2.soa(A.FX())
$.aF.b=c2
c2=d.a
b2=A.Cx(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aK.j().eM(b2))A.EW()
g=$.lX.j()
b9=d.a
g.oO(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b3))for(g=J.Q(b3);g.m();){b4=g.gn()
if(A.aL(b4))$.uO.l(0,b4)}g=A.Cj(A.a(d8.document))
g.soh(new A.vc())
g.saX(new A.vd())
$.m_.b=g
g=A.Bw(A.a(d8.document))
g.saX(new A.ve())
$.iQ.b=g
g=A.B0(A.a(d8.document))
g.saX(new A.vf())
$.lY.b=g
$.iS.b=A.kC(A.a(d8.document),null)
$.iT.b=A.kC(A.a(d8.document),B.W)
$.eV.b=A.kC(A.a(d8.document),B.H)
A.m4($.iS.j(),!1)
A.m4($.iT.j(),!0)
A.m4($.eV.j(),!0)
A.ED()
A.Eh()
$.fR.b=A.Bv(A.a(d8.document))
A.DV()
A.EH()
$.fP.b=A.kC(A.a(d8.document),B.G)
A.m4($.fP.j(),!0)
A.EE()
$.iP.b=A.kC(A.a(d8.document),B.X)
A.m4($.iP.j(),!0)
A.EG()
$.iN.b=A.AZ(A.a(d8.document))
A.DU()
A.EF()
g=A.Bg(A.a(d8.document))
g.saX(new A.vg())
g.so2(new A.vh())
$.iO.b=g
g=d.a
b5=A.Bi(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zo(b5)
b6=$.h_
if(b6!=null){A.e9("world")
g=$.Y.j()
b9=b6
c0=new A.qq(g,b9,A.p(c0,t.J))
c0.kl(g,b9)
$.fV=c0}g=B.b.q(A.x(A.a(A.a(d8.window).location).search),"shaders=live")
$.zE=g
if(g){g=$.h_
if(g!=null)g.bM()}A.zs()
A.a(d8.window).addEventListener("resize",A.Z(new A.vi()))
A.a(d8.document).addEventListener("visibilitychange",A.Z(new A.vj()))
A.a(d8.window).addEventListener("keydown",A.Z(new A.vl()))
A.a(d8.window).addEventListener("keyup",A.Z(new A.vm()))
A.a(d8.window).addEventListener("keydown",A.Z(new A.vn()))
A.a(d8.window).addEventListener("click",A.Z(new A.vo()))
$.B.j().addEventListener("click",A.Z(new A.vp()))
A.fX()
A.e9("raf")
A.c(A.a(d8.window).requestAnimationFrame(A.Z(A.zW())))
p=2
s=6
break
case 4:p=3
e0=o.pop()
b7=A.ag(e0)
b8=A.cG(e0)
A.uG(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$v6,r)},
Ei(){var s=v.G
A.a(s.window).addEventListener("error",A.Z(new A.ux()))
A.a(s.window).addEventListener("unhandledrejection",A.Z(new A.uy()))},
e9(a){if($.wu===a)return
$.wu=a
$.B.j().setAttribute("data-boot-phase",a)},
zp(){var s,r,q=$.d4.j().gbn(),p=$.B.j(),o=A.cZ().gaI().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-diagnostics",B.k.aj(q.A(),null))
p.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
p.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
p.setAttribute("data-renderer-lighting-falloff","smoothstep")
p.setAttribute("data-renderer-dof-focal-distance","2.5m")
p.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
p=$.bG
s=p==null?null:p.x
if(s!=null)$.B.j().setAttribute("data-renderer-profile-fallback",s)
p=$.m7
r=p==null?null:p.y
if(r!=null)$.B.j().setAttribute("data-renderer-frame-submits",A.w(r))},
EO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(!$.j6())return
s=$.xc()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.xd()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tD.j().eu($.V.j().gab().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vJ()
o=q==null?b:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.d.aM(A.zr($.ax),3))
r=$.B.j()
q=$.wu
n=$.ax
m=$.f0()
l=t.N
m=A.N(["x",m.a,"y",m.b,"z",m.c],l,t.i)
k=$.c7
j=$.ea
i=$.ba!=null||$.aF.j().ax
h=t.K
r.setAttribute("data-automation-player",B.k.aj(A.N(["schemaVersion",1,"phase",q,"roomId",n,"eye",m,"yaw",k,"pitch",j,"modal",i,"inputEnabled",$.ad.j().ay,"day",$.V.j().gab().a,"hour",$.V.j().gab().b],l,h),b))
g=A.p(l,t.X)
for(r=$.Y.j().c,q=r.length,f=0;f<r.length;r.length===q||(0,A.r)(r),++f){e=r[f]
n=e.ax
m=e.ay
k=e.z
j=n&&!m&&!k
g.k(0,e.a,A.N(["a",e.b,"b",e.c,"open",n,"locked",m,"sticks",k,"passable",j],l,h))}$.B.j().setAttribute("data-automation-portals",B.k.aj(g,b))
d=$.m2
r=!1
if(d!=null)if($.Y.j().e.h(0,"cellar")!=null){r=$.Y.j()
q=$.ax
q=r.e.h(0,q)!=null
r=q}if(r){c=d.ci("cellar",$.ax)
$.B.j().setAttribute("data-audio-transmission-cellar",B.k.aj(A.N(["sourceRoom","cellar","listenerRoom",$.ax,"portalPath",c.a,"gainDb",c.c,"lowPassHz",c.d,"muffle01",c.e,"barrierIds",c.b,"reasonTrace",c.r,"reachable",c.f],l,h),b))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mg(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bT.j().a!==B.C){A.h0("save unavailable during rupture")
return}try{r=$.wp.j()
q=$.V.j()
p=t.N
o=t.z
s=A.p(p,o)
n=$.ax
m=$.f0()
l=$.c7
k=$.ea
j=$.iR.j().d
j=j==null?null:j.a.a
i=$.iR.j().d
J.bK(s,"player",new A.kq(n,m,l,k,j,i==null?null:i.b).A())
n=$.aK.j()
m=A.qA(n.b,p)
l=A.qA(n.c,t.L)
n=n.r
J.bK(s,"visitors",new A.l2(m,l,n==null?null:new A.ja(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).A())
n=$.lX.j().b
n=A.J(n,A.q(n).c)
B.a.X(n)
J.bK(s,"ambient",n)
n=A.J($.uO,A.q($.uO).c)
B.a.X(n)
J.bK(s,"unverifiables",n)
J.bK(s,"inventoryInspections",$.vL().A())
n=$.wz
if(n!=null)J.bK(s,"ending",A.N(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xC(q.c).A()
k=q.d
r.p6(A.y2(s,A.N(["houseSeed",n,"runSeed",m,"house",l,"time",A.N(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.A(),"journal",q.e.A(),"difficulty",q.r.A(),"narrative",q.z.A()],p,o),2))
A.h0(a)}catch(h){A.h0("save failed")}},
EM(){var s=A.k(A.a(v.G.document).documentElement),r=s==null?null:A.aB(s.getAttribute("data-gameplay-focus-loss")),q=A.bY(new A.K(B.ax,t.rg.a(new A.uC(r)),t.vK),t.x)
switch((q==null?B.aP:q).a){case 0:$.mc=!0
s=$.bp
if(s!=null)s.f0(!0)
break
case 1:$.mc=!0
break
case 2:break}},
h0(a){var s=v.G,r=A.k(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.k(A.a(s.document).documentElement)
s=s==null?null:A.aB(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Br(B.eA,new A.uK(r),t.H)},
uG(a,b){var s,r,q,p
A.e9("error")
s=A.w(a)
r=A.Gc(s,"\n"," ")
s=$.wA
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.k(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.j6()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
yS(){var s,r
if($.ws)return
$.ws=!0
s=$.bp
r=s==null
if(!r)s.cg()
if(!r)s.f8("music")
B.a.l($.d5,"arm")},
fX(){var s=0,r=A.bF(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fX=A.bI(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.am(A.fW(),$async$fX)
case 2:o=null
q=4
s=7
return A.am(A.aZ(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$fX)
case 7:n=b
i=A
s=8
return A.am(A.aZ(A.a(n.json()),t.X),$async$fX)
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
l=$.lY.j().f
l===$&&A.h()
l.textContent=k}s=9
return A.am(A.o5(A.e([A.uA(o),A.ut(o)],t.iJ),t.H),$async$fX)
case 9:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$fX,r)},
fW(){var s=0,r=A.bF(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fW=A.bI(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.ie[g]
q=6
s=9
return A.am(A.aZ(A.a(A.a(j.window).fetch(o)),i),$async$fW)
case 9:n=a0
s=10
return A.am(A.aZ(A.a(n.text()),h),$async$fW)
case 10:m=a0
l=A.AL(B.k.aE(m,null))
f=$.Y.b
if(f===$.Y)A.j(A.a9(""))
l.eR(f)
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
return A.am(A.m9(),$async$fW)
case 11:s=12
return A.am(A.ma(),$async$fW)
case 12:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$fW,r)},
m9(){var s=0,r=A.bF(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$m9=A.bI(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.hX[c]
p=7
s=10
return A.am(A.aZ(A.a(A.a(g.window).fetch(n)),f),$async$m9)
case 10:m=b1
s=11
return A.am(A.aZ(A.a(m.text()),e),$async$m9)
case 11:l=b1
b=B.k.aE(l,null)
b=h.b(b)?b:A.dA("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dA("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aL(a)?a:A.dA("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dA("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.at(a,!0,d):A.dA("assets is not a list")
a4=A.H(a3)
a5=a4.i("T<1,cQ>")
a3=A.J(new A.T(a3,a4.i("cQ(1)").a(A.FS()),a5),a5.i("a6.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.at(a,!0,d):A.dA("placements is not a list")
a5=A.H(a4)
a6=a5.i("T<1,cv>")
a4=A.J(new A.T(a4,a5.i("cv(1)").a(A.FT()),a6),a6.i("a6.E"))
a4.$flags=1
k=new A.oE(a1,a2,a0,a3,a4)
a1=$.Y.b
if(a1===$.Y)A.j(A.a9(""))
k.eR(a1)
$.m6=k
a1=$.bG
if(a1!=null)a1.jx(k)
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
case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$m9,r)},
ma(){var s=0,r=A.bF(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ma=A.bI(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.m6
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.iz[a4]
p=7
s=10
return A.am(A.aZ(A.a(A.a(a1.window).fetch(m)),a2),$async$ma)
case 10:l=b5
s=11
return A.am(A.aZ(A.a(l.text()),e),$async$ma)
case 11:k=b5
a5=B.k.aE(k,null)
a5=a0.b(a5)?a5:A.fU("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.at(a6,!0,a3):A.fU("emitters is not a list")
a8=A.H(a7)
a9=a8.i("T<1,cP>")
a7=A.J(new A.T(a7,a8.i("cP(1)").a(A.Ga()),a9),a9.i("a6.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aL(a6)?a6:A.fU("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.fU("sourceRef is not a string")
j=new A.oK(a8,a9,a7)
a7=$.Y.b
if(a7===$.Y)A.j(A.a9(""))
j.oY(a7,b2)
$.z7=j
i=A.p(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bK(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.Y.b
if(a7===$.Y)A.j(A.a9(""))
a8=A.AI(i)
a9=new A.mM(a7,A.b2(B.cS,e,d),a8)
a9.ka(a8,a7,B.cS)
$.m2=a9
a7=$.bp
if(a7!=null){a7.ch=a9
a7.bB()}a7=$.B.b
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
case 5:$.m2=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.w(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$ma,r)},
wx(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.Q(t.a.b(s)?s:new A.aR(s,A.H(s).i("aR<1,i>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.x(q))}},
ut(a){var s=0,r=A.bF(t.H),q,p,o,n,m,l
var $async$ut=A.bI(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.p(n,n)
n=a==null
A.wx(A.k(n?null:a.sfx),m,"")
A.wx(A.k(n?null:a.ir),m,"ir-")
q=A.k(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.x(p))
l=$
s=2
return A.am(A.mT(m,$.Y.j()),$async$ut)
case 2:o=l.bp=c
o.ch=$.m2
o.bB()
A.EI()
A.zu(o)
A.wq()
A.zv()
if($.ws){o.cg()
o.f8("music")}return A.bD(null,r)}})
return A.bE($async$ut,r)},
wR(a,b){var s
A.zH(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
ET(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
yO(a,b){var s
if(a!=="brightness")return
s=A.k(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.w(B.d.H(b,0.6,1.4))+")")},
tH(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.k(A.a(v.G.document).documentElement)
if(r!=null)A.U(A.a(r.classList).toggle(s,b))
A.m1()},
zv(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.aA($.d8().a.cj(o)),k=A.U($.d8().a.cj(n)),j=A.U($.d8().a.cj(m))
for(s=[$.iS.j(),$.iT.j(),$.eV.j(),$.fP.j(),$.iP.j()],r=0;r<5;++r)s[r].f_(o,l)
A.yO(o,l)
for(s=[$.iS.j(),$.iT.j(),$.eV.j(),$.fP.j(),$.iP.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tH(n,k)
A.tH(m,j)},
wQ(a,b){var s
A.zH(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
EQ(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zu(a){var s,r,q,p,o,n,m,l,k,j=A.p(t.N,t.i)
for(s=0;s<5;++s){r=B.id[s]
q=$.d8().a.b.h(0,r)
j.k(0,r,A.aA(q==null?A.j(A.m("setting missing from profile: "+r)):q))}p=A.U($.d8().a.cj("muted"))
o=A.U($.d8().a.cj("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bf(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.d4(o)
for(q=[$.iS.j(),$.iT.j(),$.eV.j(),$.fP.j()],n=j.$ti.i("cy<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cy(j,j.r,j.e,n);m.m();){k=m.d
l.f_(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
yQ(){var s=$.bp
if(s!=null)A.zu(s)
A.zv()},
EI(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aE(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.f1)
q=A.y4(r.h(0,"requested"))
$.zC=A.wa(A.y4(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.D
o=A.p(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.EQ(l))}}r=A.p(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.ET(p))}}$.zC=A.Ci(o,r)
A.uD()},
uD(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.aj($.d8().A(),null))}catch(s){}},
zH(a,b){var s,r,q,p,o,n,m
switch(A.r4(a).d.a){case 0:r=A.ft(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d8()
q=s
A.r4(a).cY(q)
p=t.N
o=t.K
n=A.fo(r.a.b,p,o)
n.k(0,a,q)
r.a=A.ds(n,1)
n=s
A.r4(a).cY(n)
o=A.fo(r.b.b,p,o)
o.k(0,a,n)
r.b=A.ds(o,1)
A.uD()}catch(m){if(!(A.ag(m) instanceof A.F))throw m}},
uA(a){var s=0,r=A.bF(t.H),q,p,o
var $async$uA=A.bI(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.p(p,p)
A.wx(A.k(a==null?null:a.tex),o,"")
p=$.h_
p=p==null?null:p.aV(o)
if(p==null)p=A.vR(t.H)
q=$.bG
q=q==null?null:q.aV(o)
s=2
return A.am(A.o5(A.e([p,q==null?A.vR(t.H):q],t.iJ),t.H),$async$uA)
case 2:return A.bD(null,r)}})
return A.bE($async$uA,r)},
zs(){var s,r,q=v.G,p=A.c(A.a(q.window).innerWidth),o=A.c(A.a(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.h_
if(q!=null)q.b4(A.c($.B.j().width),A.c($.B.j().height))
$.d4.j().b4(A.c($.B.j().width),A.c($.B.j().height))
q=$.bG
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
Ef(){var s,r,q=$.ba
if(q!=null){s=$.ad.j()
if(!s.CW.ba("pause",s.f)){s=$.ad.j()
s=s.CW.ba("secondary",s.f)}else s=!0
if(s){A.DX(q)
return}if($.ad.j().f.a1(0,"GamepadDpadUp")){A.zf(q,-1)
return}if($.ad.j().f.a1(0,"GamepadDpadDown")){A.zf(q,1)
return}s=$.ad.j()
if(s.CW.ba("interact",s.f)){r=A.k(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.U(q.b.contains(r)))A.vU(r,"click",t.X)}return}s=$.ad.j()
if(s.CW.ba("pause",s.f)){A.j1($.co.j())
return}if($.aF.j().ax)return
s=$.ad.j()
if(s.CW.ba("journal",s.f))A.j4($.fS.j())
else{s=$.ad.j()
if(s.CW.ba("sleep",s.f))A.j4($.m_.j())}},
DX(a){if(a===$.co.j()){a.a4()
return}if(a===$.fT.j()||a instanceof A.fy||a instanceof A.hr||a instanceof A.hg){A.dC(a)
return}a.a4()},
zf(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.e([],t.W)
for(s=t.m,r=0;r<A.c(l.length);++r){q=A.k(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.k(A.a(v.G.document).activeElement)
o=B.a.bG(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.c.P(o+b+m,m)}if(!(n>=0&&n<k.length))return A.f(k,n)
k[n].focus()},
EP(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
A.aA(c6)
try{s=c6
if(!$.z6){$.wG=s
$.z6=!0}d=s
c=$.wG
if(typeof d!=="number")return d.ag()
r=(d-c)/1000
$.wG=s
d=r
if(typeof d!=="number")return d.d3()
if(d<0)r=0
d=r
if(typeof d!=="number")return d.ao()
if(d>0.25)r=0.25
A.Fg(r)
$.ad.j().oo()
d=$.B.j()
c=$.ad.j().z!=null?"standard":"none"
d.setAttribute("data-controller",c)
q=$.ad.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.Ef()
if(!$.mc&&$.ba==null){d=$.e8
c=r
if(typeof c!=="number")return A.j5(c)
c=$.e8=d+c
p=0
d=t.aA
for(;;){if(c>=0.008333333333333333){b=p
if(typeof b!=="number")return b.d3()
b=b<10}else b=!1
if(!b)break
$.wK=$.f0()
if(!$.xb()){c=$.V.b
if(c===$.V)A.j(A.a9(""))
c.me(0.008333333333333333)
c=$.Ap()
b=$.V.b
if(b===$.V)A.j(A.a9(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.j(A.a9(""))
c=c.dI(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.r)(c),++a0){o=c[a0]
B.a.l($.d5,"clock:"+o.a)}c=$.Aq()
b=$.V.b
if(b===$.V)A.j(A.a9(""))
b=b.gab()
a=$.V.b
if(a===$.V)A.j(A.a9(""))
c=c.dI(b.a,a.gab().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.r)(c),++a0){n=c[a0]
B.a.l($.d5,"service:"+n.a+":"+n.b)}}A.Fj()
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
c.os(a2)}A.Ff()
A.Fi()
A.Fh()
A.Fe(0.008333333333333333)
c=$.fQ.b
if(c===$.fQ)A.j(A.a9(""))
if(c.a!=null)if((c.b-=0.008333333333333333)<=0)c.a=null
c=$.bT.b
if(c===$.bT)A.j(A.a9(""))
m=c.a!==B.C
b=$.Y.b
if(b===$.Y)A.j(A.a9(""))
c.mf(0.008333333333333333,b)
if(m){c=$.bT.b
if(c===$.bT)A.j(A.a9(""))
c=c.e}else c=!1
if(c)A.zt(!0)
c=$.e8-0.008333333333333333
$.e8=c
b=p
if(typeof b!=="number")return b.a8()
p=b+1}l=B.d.H(c/0.008333333333333333,0,1)
d=$.wV=A.yf($.Ar(),$.f0(),l)
k=$.bp
if(k!=null){c=k
b=Math.sin($.c7)
a=Math.cos($.c7)
a3=A.a(c.a.listener)
a3.setPosition(d.a,d.b,d.c)
A.ai(a3,"setOrientation",[b,0,a,0,1,0],t.H)
c.jz($.ax)
for(d=$.d5.length,a0=0;a0<$.d5.length;$.d5.length===d||(0,A.r)($.d5),++a0){j=$.d5[a0]
A.E0(k,j)}B.a.G($.d5)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.d.aM(k.gnS(),3))
d=$.B.j()
c=k.cx?"true":"false"
d.setAttribute("data-audio-music-started",c)
c=$.B.j()
d=k.dx
if(d==null)d="ir-fallback"
c.setAttribute("data-audio-room-ir",d)}}i=$.h_
if(i!=null){$.bS.j().ez($.j7(),$.c7,$.ea)
d=$.ba===$.fS.j()?1:0
i.cL=d
$.zd=r
$.d4.j().b6(A.w7($.V.j().geF()))}else if($.c6.j().a===B.Z){$.bS.j().ez($.j7(),$.c7,$.ea)
d=$.bG
if(d!=null){c=$.bS.j()
b=c.a
a4=new A.M(b.a,b.b,b.c)
b=c.b
a5=new A.M(b.a,b.b,b.c)
b=c.c
a6=d.b/d.c
a7=A.xR(a4,a5,new A.M(b.a,b.b,b.c))
c=c.f
b=c.b
a=c.c
a8=A.w0(a6,a,c.a,b)
d.ok=new A.fb(a7,a8,a8.a3(0,a7),a4,a5,b,a,a6)}d=$.bG
if(d!=null)d.jI($.Y.j(),$.ax)
d=$.bG
if(d!=null)d.jy($.Y.j(),$.ax,$.j7(),$.b9.j().gbw(),Math.sin(3.141592653589793*$.b9.j().gbw()),$.tD.j().eu($.V.j().gab().a),A.G5($.ax),$.b9.j().b)
if($.zc!==$.bT.j().a){$.zc=$.bT.j().a
$.wM=$.wM+1}d=$.bG
if(d!=null){if($.xb())c=0
else{c=s
if(typeof c!=="number")return c.pa()
c/=1000}b=$.wM
a=A.c(Math.max(0,$.V.j().b))
if(!isFinite(c)||c<0)A.j(A.an(c,"timeSeconds",null))
if(a<0)A.j(A.y("frame clock seeds must be non-negative",null))
d.R8=c
d.RG=b
d.rx=a}d=$.bG
if(d!=null){c=$.bT.j()
b=$.me
a=$.tD.j().eu($.V.j().gab().a)
a9=A.zr($.ax)
b0=c.a
b1=c.gf6()
b2=b1>0?B.d.H(c.b/b1,0,1):0
c=b0.a
b3=c>=3
b4=b0===B.br
b5=b0===B.a_?0.45:1
if(c>=1)b6=b0===B.ab?b2:1
else b6=0
if(c>=2)c=b0===B.bp?b2:1
else c=0
b7=b3?320:0
b8=b3?5:8
b9=b4?1:0
c0=b4?b2:0
c1=b4?b2:0
c2=b4?b2:0
c3=b4?b2:0
c4=b4?b2:0
d.p2=new A.ks(b5,0.38,0.28,0.18,0.015,a.c,a9,b6,c,b7,b8,b9,c0,c1,c2,c3,c4,b)}$.d4.j().b6(A.w7($.V.j().geF()))
h=$.bG
if(h!=null){g=h.gnx()
if(g!=null){$.B.j().setAttribute("data-renderer-frame-stats",g)
d=$.B.j()
c=h.gnw()?"ok":"exceeded"
d.setAttribute("data-renderer-budget",c)}}}A.e9("running")
A.EO()
d=$.ad.j()
d.as=d.Q=0
c=d.c
c.a1(0,"WheelUp")
c.a1(0,"WheelDown")
d.d.G(0)
d.f.G(0)
A.c(A.a(v.G.window).requestAnimationFrame(A.Z(A.zW())))}catch(c5){f=A.ag(c5)
e=A.cG(c5)
A.uG(f,e)}},
E0(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.j6("confirm")
$.b8.j().aK("interface confirmation")
break
case"ambient-winnow":a.eD("winnow",0.28)
$.b8.j().aK("wind moving through the house")
break
case"ambient-gate":a.eD("gate",0.22)
$.b8.j().aK("distant gate")
break
case"collapse":a.j6("collapse")
$.b8.j().aK("front door shudders and collapses")
break
case"clock:tick":A.md(a,p,"tick")
break
case"clock:chime":A.md(a,p,"chime")
break
case"clock:cuckoo":A.md(a,p,"cuckoo")
break
case"clock:bell":A.md(a,p,"bell")
break
default:if(B.b.W(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.md(a,q,s[2])}}}},
md(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.z7,g=$.m6
if(h==null||g==null)return
s=h.ni(b)
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
break A}if(q!=null)$.b8.j().aK(q)
q=$.Y.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.m("sound room missing: "+o))
m=n.d.a8(0,s.d.a3(0,p))
l=$.m2
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.m("sound emitter "+s.a+" has no cue for "+c))
a.on(q,m,s.e,o)
return}q=$.yV
$.yV=q+1
o=A.AJ(B.dI,r,r+":"+q,m,A.DJ(b,c),q,o)
q=$.ax
q=A.AF($.j7(),q)
t.gG.a(B.b9)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.m("audio listener room missing: "+q))
j=l.jf(p,q,B.b9)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.m("audio cue family missing: "+q))
k=J.aC(i)
k=k.h(i,B.c.P(A.F6(q,o.f),k.gt(i)))
o=o.e
A.aj(j.a,t.N)
a.j7(k,new A.b(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
DJ(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dL(a+":"+b),r=t.sU,s=new A.aS(s,s.gt(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.zS(p,q==null?r.a(q):q)}return p},
Fg(a){var s=$.wA
if(s==null)return
s.textContent=""+B.d.aJ(a>0?1/a:0)+" fps"},
Fe(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0="interact"
if($.zy||$.ba!=null||$.aF.j().ax){$.mm().a=new A.b(0,0,0)
return}s=$.ad.j()
r=s.cv("moveLeft")?-1:0
if(s.cv("moveRight"))++r
q=s.cv("moveForward")?1:0
if(s.cv("moveBack"))--q
s=s.ay?s.w:new A.b(0,0,0)
p=new A.b(r,0,q).a8(0,s)
o=p.gt(0)>1?p.ga9():p
$.ad.j().d9(b1)
n=$.ad.j().Q
m=$.ad.j().as
s=$.f_()
l=s.d?-1:1
k=s.e?-1:1
j=$.c7
i=$.ad.j()
i=i.ay?i.x:0
h=$.f_()
g=h.d?-1:1
$.c7=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b1)
g=$.ea
h=$.ad.j()
l=h.ay?h.y:0
j=$.f_()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b1)
$.ea=i
$.ea=B.d.H(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.b(i*Math.cos($.c7)+j*Math.sin($.c7),0,-i*Math.sin($.c7)+j*Math.cos($.c7)).ga9().a3(0,2)
j=$.mm()
if(!isFinite(b1)||b1<0)A.j(A.an(b1,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.j(A.an(e,"rate","must be finite and positive"))
s=Math.exp(-e*b1)
l=j.a
s=l.a8(0,f.ag(0,l).a3(0,1-s))
j.a=s
d=$.iR.j().nT($.Y.j(),$.ax,$.f0(),s.a3(0,b1))
$.wP=d.a
if($.bT.j().a!==B.bs&&$.bT.j().a!==B.a_)$.ax=d.b
$.bS.j().ez($.f0(),$.c7,$.ea)
s=$.V.j().z
c=new A.pT(s)
s=$.bS.j()
l=$.Y.j()
b=A.G4(c,s,$.ax,l,$.m6)
$.yK.j().jJ(b.c)
s=b.a
a=a9
a0=a9
a1=a9
a2=a9
switch(s.a){case 0:a=A.x3($.bS.j(),$.Y.j(),$.ax)
break
case 1:a0=A.A1($.bS.j(),$.Y.j(),$.ax)
break
case 2:a1=A.A2($.bS.j(),$.Y.j(),$.ax)
break
case 3:l=$.bS.j()
k=$.Y.j()
j=$.m6
a2=A.A0(l,$.ax,k,j)
break
case 4:case 5:break}l=$.yI.j()
a3=$.h7().jo($.V.j().gab().a)
k=a3==null?a9:a3.h(0,"status")
l.eP(k,$.ax==="living-room")
l=$.ad.j()
k=l.CW
if(k.ba(b0,l.d)||k.ba(b0,l.f)){l=$.V.j().gab()
k=a0==null
j=k?a9:a0.a
i=B.a.a5($.aK.j().hm(21),$.aK.j().gnH())
if(l.a===21&&j==="front-door"&&i){s=$.bT.j()
$.Y.j()
s.jY(B.el,A.aj(s.c,t.N))
B.a.l($.d5,"collapse")
A.h0("the front door opens on itself")}else if(a!=null&&!a.e){if(a.d){a.d=!1
$.b8.j().aK("mantle flame extinguished")}else if($.V.j().jV(1,1)){a.d=!0
s=$.fQ.j()
s.a=a
s.b=2
if(a.f!=null)a.r=!0
$.b8.j().aK("mantle flame catches")}}else if(!k&&!a0.z&&!a0.ay){a0.ax=!a0.ax
s=$.b8.j()
s.aK(a0.ax?"door opens":"door closes")
s=$.fV
if(s!=null)s.cX(a0.b)
s=$.bG
if(s!=null)s.eH($.Y.j(),a0.a)
s=$.bp
if(s!=null)s.bB()}else if(a1!=null)if(a1.w){s=$.V.j()
if(s.f.d8(1)){a1.w=!1
$.b8.j().aK("shutter closes")}}else{a1.w=!0
$.b8.j().aK("shutter opens")}else if(s===B.c7){a4=c.eV()
s=A.H(a4)
l=t.E4
a5=A.bY(new A.K(a4,s.i("n(1)").a(new A.uP(b)),s.i("K<1>")),l)
if(a5==null)a5=A.bY(a4,l)
if(a5!=null)$.b8.j().bQ("noticed",a5.d)}else if(a2!=null){s=$.vL()
if(!a2.x)A.j(A.m("inventory placement is not pickable: "+a2.a))
a6=a2.y
if(a6==null)a6=a2.a
s=s.a
l=a2.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a6)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a6)
s=A.b2(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a7=A.EK(a6)
s=$.b8.j()
s.bQ("noticed",a7==null?"you inspect "+a6:a7)}}s=$.fQ.j()
if(s.a!=null&&s.b>0){a8=$.fQ.j().a
if(a8!=null&&A.x3($.bS.j(),$.Y.j(),$.ax)!==a8){s=$.fQ.j()
s.a=null
s.b=0}}},
EK(a){var s,r,q,p,o=$.V.j().z.b,n=A.q(o).i("I<1,2>"),m=A.J(new A.I(o,n),n.i("o.E"))
B.a.S(m,new A.uB())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.h7().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Fj(){var s,r,q,p,o,n,m,l,k,j=null
if($.aF.j().ax||$.ba!=null||$.aK.j().r!=null)return
s=$.V.j().gab()
for(r=$.aK.j().hm(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aK.b
if(m===$.aK)A.j(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aK.b
if(r===$.aK)A.j(A.a9(""))
l=r.dJ(n)
if(!(l instanceof A.kZ))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xH(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mm().a=new A.b(0,0,0)
r=$.aF.b
if(r===$.aF)A.j(A.a9(""))
r.f2(n.a,k)
A.zG(n)
return}},
EW(){var s,r=$.aK.j().r,q=r==null,p=q?null:r.gbE()
if(q||p==null)return
q=$.aF.j()
s=r.a
q.f2(s.a,p)
A.zG(s)
if(r.d!==B.a2)A.wJ()
A.h0("restored visitor")},
zG(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().nz("stranger-17-eileen-case")
r=$.h7().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.at(q,!0,t.N):B.o
p=A.bY(r,t.N)
if(s==null||p==null)return
$.b8.j().bQ("inside the case",p+" \u201c"+s.d+"\u201d")},
Ff(){var s,r,q,p,o=$.V.j().gab(),n=$.lX.j().ng(o.a,o.b)
if(n.length===0)return
s=B.a.gO(n)
$.lX.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.b8.j().bQ(q,s.e)
p=A.Fp(r)
if(p!=null)B.a.l($.d5,"ambient-"+p)},
Fi(){var s,r,q,p,o=$.V.j().gab()
if(o.b<20)return
s=o.a
if(!$.uO.l(0,s))return
r=$.h7().f
r===$&&A.h()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.at(q,!0,t.N):B.o
p=A.G1(r,$.V.j().b,s)
if(p!=null)$.b8.j().bQ("noticed",p)},
zt(a){var s,r,q,p,o
if($.wz!=null)return
s=$.V.j().gab()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.q(q).i("as<2>")
o=A.Bh(new A.nN(s.a,1-r,new A.K(new A.as(q,p),p.i("n(o.E)").a(new A.uH()),p.i("K<o.E>")).gt(0),$.V.j().r.d,a))
if(o==null)return
A.zo(o)
A.mg("ending recorded")},
zo(a){var s,r,q
$.wz=a
$.zy=!0
$.mm().a=new A.b(0,0,0)
A.j1($.iO.j())
s=a.a
r=$.h7().w
r===$&&A.h()
q=r.h(0,s.b)
r=t.j.b(q)?A.at(q,!0,t.N):B.o
r=A.J(r,t.N)
B.a.L(r,A.BQ($.V.j().z,s))
$.iO.j().jM(a,r)},
DQ(a){var s,r,q,p
A:{if("open"===a){s=B.aq
break A}if("chain"===a){s=B.c0
break A}if("through-door"===a){s=B.c1
break A}if("letterbox"===a){s=B.c2
break A}s=B.a9
break A}r=$.aK.j().mB(s)
if(s===B.aq){q=$.Y.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.fV
if(p!=null)p.cX(q.b)
p=$.bG
if(p!=null)p.eH($.Y.j(),q.a)
p=$.bp
if(p!=null)p.bB()}}if(!(r instanceof A.kX)||s===B.a9){$.aF.j().cR()
$.ad.j().cf($.B.j())
return}if(r.a.gbE()==null){A.ww()
$.aF.j().cR()
$.ad.j().cf($.B.j())
return}A.wJ()},
DW(){var s=$.aK.j().mg()
if(!(s instanceof A.i7)||s.b){A.ww()
$.aF.j().cR()
$.ad.j().cf($.B.j())
return}if(s.a.gbE()==null){A.ww()
$.aF.j().cR()
$.ad.j().cf($.B.j())
return}A.wJ()},
wJ(){var s,r,q,p,o,n,m,l,k=$.aK.j().r,j=k==null,i=j?null:k.gbE()
if(j||i==null)return
s=$.aK.j().gcI()
if(s==null)$.aF.j().jL(i)
else{r=k.w
j=r==null
$.aF.j().f3(i,j)
q=$.aF.j()
p=A.e([],t.kd)
for(o=s.f,n=o.length,m=0;m<n;++m){l=o[m]
p.push(new A.aX(l.a,l.b))}q.jN(p,r)
if(!j){j=A.H(o)
l=A.bY(new A.K(o,j.i("n(1)").a(new A.uE(r)),j.i("K<1>")),t.Y)
if(l!=null)$.aF.j().f4(i,l.c)}}A.zF()},
DR(a){var s,r,q,p=$.aK.j().mC(a)
if(!(p instanceof A.kY))return
s=p.c
if(!$.V.j().mi(p.b,s))return
r=$.aF.j()
q=p.a.gbE()
if(q==null)q=""
r.f4(q,s.c)
A.zF()
A.mg("saved after visitor answer")},
zF(){var s,r,q,p,o=$.aF.j(),n=A.a(v.G.document),m=A.e([],t.wt)
for(s=$.lZ.j().eW(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.aX(p.a,B.a.gU(p.c).p(0)))}o.jK(n,m)},
DS(a){var s,r,q,p=$.aK.j().mD(a,!0,$.lZ.j())
if(p==null)return
s=$.lZ.j().n9(p,B.hF)
r=$.aF.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.J.bF("",!0,q)},
ww(){var s,r=$.Y.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fV
if(s!=null)s.cX(r.b)
s=$.bG
if(s!=null)s.eH($.Y.j(),r.a)
s=$.bp
if(s!=null)s.bB()}},
Fh(){var s,r,q,p,o,n,m,l,k
for(s=$.Y.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bT.b
if(k===$.bT)A.j(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
G5(a){var s,r,q,p,o,n,m,l=$.Y.j().e.h(0,a)
if(l==null||$.b9.j().gbw()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.l){n=$.b9.b
if(n===$.b9)A.j(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.b9.b
if(n===$.b9)A.j(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.u){n=$.b9.b
if(n===$.b9)A.j(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.F){o=$.b9.b
if(o===$.b9)A.j(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zr(a){var s,r=$.Y.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.b2
if(q.length===0)return 0.12
s=A.H(q)
return B.d.H(new A.K(q,s.i("n(1)").a(new A.uF()),s.i("K<1>")).gt(0)/q.length,0.12,1)},
fI:function fI(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.c6=0},
tn:function tn(a){this.a=a},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
tq:function tq(a){this.a=a},
tj:function tj(){},
tk:function tk(){},
tl:function tl(){},
tm:function tm(){},
fE:function fE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
lA:function lA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rX:function rX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
tR:function tR(){},
tS:function tS(){},
tT:function tT(){},
tZ:function tZ(){},
u_:function u_(){},
u0:function u0(){},
u1:function u1(){},
u2:function u2(){},
u3:function u3(a){this.a=a},
u4:function u4(a){this.a=a},
u5:function u5(a){this.a=a},
tU:function tU(a){this.a=a},
tV:function tV(){},
tW:function tW(){},
tX:function tX(){},
tY:function tY(){},
tO:function tO(){},
tP:function tP(){},
tQ:function tQ(){},
tL:function tL(){},
tM:function tM(){},
tN:function tN(){},
uw:function uw(a,b){this.a=a
this.b=b},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
v7:function v7(a){this.a=a},
v8:function v8(){},
v9:function v9(){},
vk:function vk(){},
vq:function vq(){},
vr:function vr(){},
vs:function vs(){},
vt:function vt(){},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
va:function va(){},
vb:function vb(){},
vc:function vc(){},
vd:function vd(){},
ve:function ve(){},
vf:function vf(){},
vg:function vg(){},
vh:function vh(){},
vi:function vi(){},
vj:function vj(){},
vl:function vl(){},
vm:function vm(){},
vn:function vn(){},
vo:function vo(){},
vp:function vp(){},
ux:function ux(){},
uy:function uy(){},
uC:function uC(a){this.a=a},
uK:function uK(a){this.a=a},
uP:function uP(a){this.a=a},
uB:function uB(){},
uH:function uH(){},
uE:function uE(a){this.a=a},
uF:function uF(){},
xH(a,b,c,d,e,f){var s=a[b]()
return s},
vU(a,b,c){var s=null
return c.a(A.xH(a,b,s,s,s,s))},
vB(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.an(b.gnB(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.aa()
o=q*16
n=o+16
B.q.d5(s,o,n,p.a)
if(l)B.q.d5(r,o,n,p.eB().a)}m=a.a
A.v(m,"uInstanceModels",new A.A(B.dx,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.A(B.dx,r))
A.v(m,"uUseInstances",B.dy)},
B4(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
B3(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
zT(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
vC(a,b){var s=B.d.aT(a),r=A.zT(s,b),q=A.zT(s+1,b),p=B.d.H(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
zS(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Fp(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
dd(a,b,c){var s=B.d.H(c,0,1),r=a.c,q=a.b,p=a.a
return new A.aY(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
FE(a){var s,r,q,p,o,n,m,l=B.k.aE(a,null),k=t.f
if(!k.b(l))throw A.d(B.fx)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.p(s,t.P)
for(o=0;o<14;++o){n=B.iB[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.p(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.d(A.a7('text.json section "'+n+'" must be an object',null,null))}return p},
G1(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaN(a)
s=new A.fG()
s.da((b^274953^c)>>>0)
r=s.aL(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.vV.prototype={}
J.k_.prototype={
a_(a,b){return a===b},
gI(a){return A.hN(a)},
p(a){return"Instance of '"+A.ku(a)+"'"},
ga2(a){return A.d6(A.wD(this))}}
J.k2.prototype={
p(a){return String(a)},
gI(a){return a?519018:218159},
ga2(a){return A.d6(t.y)},
$iaf:1,
$in:1}
J.hv.prototype={
a_(a,b){return null==b},
p(a){return"null"},
gI(a){return 0},
$iaf:1,
$iaz:1}
J.hx.prototype={$ia5:1}
J.dT.prototype={
gI(a){return 0},
ga2(a){return B.lm},
p(a){return String(a)}}
J.kp.prototype={}
J.e_.prototype={}
J.dm.prototype={
p(a){var s=a[$.A7()]
if(s==null)s=a[$.ef()]
if(s==null)return this.k_(a)
return"JavaScript function for "+J.d9(s)},
$ieo:1}
J.fm.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.fn.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.u.prototype={
cG(a,b){return new A.aR(a,A.H(a).i("@<1>").K(b).i("aR<1,2>"))},
l(a,b){A.H(a).c.a(b)
a.$flags&1&&A.bJ(a,29)
a.push(b)},
ow(a,b){var s
a.$flags&1&&A.bJ(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.xY(b,null))
return a.splice(b,1)[0]},
a1(a,b){var s
a.$flags&1&&A.bJ(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.H(a).i("o<1>").a(b)
a.$flags&1&&A.bJ(a,"addAll",2)
if(Array.isArray(b)){this.ku(a,b)
return}for(s=J.Q(b);s.m();)a.push(s.gn())},
ku(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.aq(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.bJ(a,"clear","clear")
a.length=0},
cd(a,b,c){var s=A.H(a)
return new A.T(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("T<1,2>"))},
a7(a,b){var s,r=A.cR(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bs(a,b,c,d){var s,r,q
d.a(b)
A.H(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.aq(a))}return r},
aS(a,b,c){var s,r,q,p=A.H(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.aq(a))}if(c!=null)return c.$0()
throw A.d(A.cw())},
al(a,b){return this.aS(a,b,null)},
Y(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aO(a,b,c){var s=a.length
if(b>s)throw A.d(A.aT(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aT(c,b,s,"end",null))
if(b===c)return A.e([],A.H(a))
return A.e(a.slice(b,c),A.H(a))},
gO(a){if(a.length>0)return a[0]
throw A.d(A.cw())},
gU(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cw())},
gaN(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cw())
throw A.d(A.xD())},
M(a,b){var s,r
A.H(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.aq(a))}return!1},
a5(a,b){var s,r
A.H(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.aq(a))}return!0},
S(a,b){var s,r,q,p,o,n=A.H(a)
n.i("l(1,1)?").a(b)
a.$flags&2&&A.bJ(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.En()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ao()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.h3(b,2))
if(p>0)this.lO(a,p)},
X(a){return this.S(a,null)},
lO(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d7(a,b){var s,r,q,p
a.$flags&2&&A.bJ(a,"shuffle")
s=a.length
while(s>1){r=b.aL(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
bG(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a3(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a3(a[s],b))return!0
return!1},
gN(a){return a.length===0},
gV(a){return a.length!==0},
p(a){return A.vT(a,"[","]")},
gu(a){return new J.eg(a,a.length,A.H(a).i("eg<1>"))},
gI(a){return A.hN(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bJ(a,"set length","change the length of")
if(b<0)throw A.d(A.aT(b,0,null,"newLength",null))
if(b>a.length)A.H(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.uY(a,b))
return a[b]},
k(a,b,c){A.H(a).c.a(c)
a.$flags&2&&A.bJ(a)
if(!(b>=0&&b<a.length))throw A.d(A.uY(a,b))
a[b]=c},
eS(a,b){return new A.cE(a,b.i("cE<0>"))},
iR(a,b){var s
A.H(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga2(a){return A.d6(A.H(a))},
$iR:1,
$io:1,
$iD:1}
J.k0.prototype={
oW(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ku(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.p4.prototype={}
J.eg.prototype={
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
J.eu.prototype={
F(a,b){var s
A.aA(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc9(b)
if(this.gc9(a)===s)return 0
if(this.gc9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc9(a){return a===0?1/a<0:a<0},
aY(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aW(""+a+".toInt()"))},
my(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aW(""+a+".ceil()"))},
aT(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aW(""+a+".floor()"))},
aJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aW(""+a+".round()"))},
oP(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
H(a,b,c){if(this.F(b,c)>0)throw A.d(A.wX(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
aM(a,b){var s
if(b>20)throw A.d(A.aT(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc9(a))return"-"+s
return s},
oU(a,b){var s,r,q,p,o
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
o-=r.length}return s+B.b.a3("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
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
k5(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h8(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.h8(a,b)},
h8(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aW("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
dG(a,b){var s
if(a>0)s=this.cD(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lV(a,b){if(0>b)throw A.d(A.wX(b))
return this.cD(a,b)},
cD(a,b){return b>31?0:a>>>b},
ga2(a){return A.d6(t.o)},
$ib1:1,
$iz:1,
$ibc:1}
J.hu.prototype={
ga2(a){return A.d6(t.S)},
$iaf:1,
$il:1}
J.k3.prototype={
ga2(a){return A.d6(t.i)},
$iaf:1}
J.dS.prototype={
hl(a,b){return new A.lN(b,a,0)},
jW(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.hw){s=b.e
s=!(s==null?b.e=b.kO():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.kV(a,b)}},
bN(a,b,c,d){var s=A.hO(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kV(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.Av(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gf7()
n=p.gdV()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.E(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.bg(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.ac(a,b,0)},
E(a,b,c){return a.substring(b,A.hO(b,c,a.length))},
bg(a,b){return this.E(a,b,null)},
be(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.BI(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.BJ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.eh)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ol(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
cS(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bG(a,b){return this.cS(a,b,0)},
q(a,b){return A.Gb(a,b,0)},
F(a,b){var s
A.x(b)
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
ga2(a){return A.d6(t.N)},
gt(a){return a.length},
$iaf:1,
$ib1:1,
$ipM:1,
$ii:1}
A.e2.prototype={
gu(a){return new A.hc(J.Q(this.gaZ()),A.q(this).i("hc<1,2>"))},
gt(a){return J.ca(this.gaZ())},
gN(a){return J.mo(this.gaZ())},
gV(a){return J.Az(this.gaZ())},
Y(a,b){return A.q(this).y[1].a(J.mn(this.gaZ(),b))},
gO(a){return A.q(this).y[1].a(J.xj(this.gaZ()))},
q(a,b){return J.xi(this.gaZ(),b)},
p(a){return J.d9(this.gaZ())}}
A.hc.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.ej.prototype={
gaZ(){return this.a}}
A.ih.prototype={$iR:1}
A.ie.prototype={
h(a,b){return this.$ti.y[1].a(J.aG(this.a,b))},
k(a,b,c){var s=this.$ti
J.bK(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.AA(this.a,b)},
l(a,b){var s=this.$ti
J.h8(this.a,s.c.a(s.y[1].a(b)))},
S(a,b){var s
this.$ti.i("l(2,2)?").a(b)
s=b==null?null:new A.rY(this,b)
J.AB(this.a,s)},
$iR:1,
$iD:1}
A.rY.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("l(1,1)")}}
A.aR.prototype={
cG(a,b){return new A.aR(this.a,this.$ti.i("@<1>").K(b).i("aR<1,2>"))},
gaZ(){return this.a}}
A.ev.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dL.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.qz.prototype={}
A.R.prototype={}
A.a6.prototype={
gu(a){var s=this
return new A.aS(s,s.gt(s),A.q(s).i("aS<a6.E>"))},
gN(a){return this.gt(this)===0},
gO(a){if(this.gt(this)===0)throw A.d(A.cw())
return this.Y(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a3(r.Y(0,s),b))return!0
if(q!==r.gt(r))throw A.d(A.aq(r))}return!1},
a5(a,b){var s,r,q=this
A.q(q).i("n(a6.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.Y(0,r)))return!1
if(s!==q.gt(q))throw A.d(A.aq(q))}return!0},
M(a,b){var s,r,q=this
A.q(q).i("n(a6.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.Y(0,r)))return!0
if(s!==q.gt(q))throw A.d(A.aq(q))}return!1},
a7(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.Y(0,0))
if(o!==p.gt(p))throw A.d(A.aq(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.Y(0,q))
if(o!==p.gt(p))throw A.d(A.aq(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.Y(0,q))
if(o!==p.gt(p))throw A.d(A.aq(p))}return r.charCodeAt(0)==0?r:r}},
d_(a,b){return this.jZ(0,A.q(this).i("n(a6.E)").a(b))},
cd(a,b,c){var s=A.q(this)
return new A.T(this,s.K(c).i("1(a6.E)").a(b),s.i("@<a6.E>").K(c).i("T<1,2>"))},
bP(a,b){var s=A.q(this).i("a6.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bO(a){return this.bP(0,!0)},
bv(a){var s,r=this,q=A.vY(A.q(r).i("a6.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.Y(0,s))
return q}}
A.i1.prototype={
gl1(){var s=J.ca(this.a),r=this.c
if(r==null||r>s)return s
return r},
glY(){var s=J.ca(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.ca(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
Y(a,b){var s=this,r=s.glY()+b
if(b<0||r>=s.gl1())throw A.d(A.oW(b,s.gt(0),s,"index"))
return J.mn(s.a,r)},
bP(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aC(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xF(0,n):J.xE(0,n)}r=A.cR(s,m.Y(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.Y(n,o+q))
if(m.gt(n)<l)throw A.d(A.aq(p))}return r},
bO(a){return this.bP(0,!0)}}
A.aS.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aC(q),o=p.gt(q)
if(r.b!==o)throw A.d(A.aq(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.Y(q,s);++r.c
return!0},
$iab:1}
A.cz.prototype={
gu(a){return new A.hC(J.Q(this.a),this.b,A.q(this).i("hC<1,2>"))},
gt(a){return J.ca(this.a)},
gN(a){return J.mo(this.a)},
gO(a){return this.b.$1(J.xj(this.a))},
Y(a,b){return this.b.$1(J.mn(this.a,b))}}
A.df.prototype={$iR:1}
A.hC.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.T.prototype={
gt(a){return J.ca(this.a)},
Y(a,b){return this.b.$1(J.mn(this.a,b))}}
A.K.prototype={
gu(a){return new A.S(J.Q(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hl.prototype={
gu(a){return new A.hm(J.Q(this.a),this.b,B.e9,this.$ti.i("hm<1,2>"))}}
A.hm.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.Q(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iab:1}
A.hj.prototype={
m(){return!1},
gn(){throw A.d(A.cw())},
$iab:1}
A.cE.prototype={
gu(a){return new A.i9(J.Q(this.a),this.$ti.i("i9<1>"))}}
A.i9.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.ar.prototype={
st(a,b){throw A.d(A.aW("Cannot change the length of a fixed-length list"))},
l(a,b){A.bV(a).i("ar.E").a(b)
throw A.d(A.aW("Cannot add to a fixed-length list"))}}
A.cY.prototype={
k(a,b,c){A.q(this).i("cY.E").a(c)
throw A.d(A.aW("Cannot modify an unmodifiable list"))},
st(a,b){throw A.d(A.aW("Cannot change the length of an unmodifiable list"))},
l(a,b){A.q(this).i("cY.E").a(b)
throw A.d(A.aW("Cannot add to an unmodifiable list"))},
S(a,b){A.q(this).i("l(cY.E,cY.E)?").a(b)
throw A.d(A.aW("Cannot modify an unmodifiable list"))}}
A.fC.prototype={}
A.hU.prototype={
gt(a){return J.ca(this.a)},
Y(a,b){var s=this.a,r=J.aC(s)
return r.Y(s,r.gt(s)-1-b)}}
A.iM.prototype={}
A.aX.prototype={$r:"+(1,2)",$s:1}
A.ix.prototype={$r:"+influence,light(1,2)",$s:2}
A.ap.prototype={$r:"+(1,2,3)",$s:3}
A.aY.prototype={$r:"+b,g,r(1,2,3)",$s:4}
A.iy.prototype={$r:"+(1,2,3,4)",$s:6}
A.he.prototype={}
A.fd.prototype={
gN(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
p(a){return A.vZ(this)},
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
A.AX()},
gJ(){return new A.cm(this.nl(),A.q(this).i("cm<P<1,2>>"))},
nl(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gZ(),o=o.gu(o),n=A.q(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bI(a,b,c,d){var s=A.p(c,d)
this.ar(0,new A.nm(this,A.q(this).K(c).K(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.nm.prototype={
$2(a,b){var s=A.q(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.q(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
gfH(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
ar(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfH()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gZ(){return new A.eP(this.gfH(),this.$ti.i("eP<1>"))},
gaB(){return new A.eP(this.b,this.$ti.i("eP<2>"))}}
A.eP.prototype={
gt(a){return this.a.length},
gN(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.eQ(s,s.length,this.$ti.i("eQ<1>"))}}
A.eQ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cM.prototype={
bA(){var s=this,r=s.$map
if(r==null){r=new A.hy(s.$ti.i("hy<1,2>"))
A.zM(s.a,r)
s.$map=r}return r},
R(a){return this.bA().R(a)},
h(a,b){return this.bA().h(0,b)},
ar(a,b){this.$ti.i("~(1,2)").a(b)
this.bA().ar(0,b)},
gZ(){var s=this.bA()
return new A.ae(s,A.q(s).i("ae<1>"))},
gaB(){var s=this.bA()
return new A.as(s,A.q(s).i("as<2>"))},
gt(a){return this.bA().a}}
A.hf.prototype={
l(a,b){A.q(this).c.a(b)
A.AY()}}
A.aH.prototype={
gt(a){return this.b},
gN(a){return this.b===0},
gV(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eQ(s,s.length,r.$ti.i("eQ<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bv(a){return A.k8(this,this.$ti.c)}}
A.q0.prototype={
$0(){return B.d.aT(1000*this.a.now())},
$S:33}
A.hV.prototype={}
A.rr.prototype={
aW(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hJ.prototype={
p(a){return"Null check operator used on a null value"}}
A.k4.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kR.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pF.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hk.prototype={}
A.iA.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icV:1}
A.dK.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.A5(r==null?"unknown":r)+"'"},
ga2(a){var s=A.wZ(this)
return A.d6(s==null?A.bV(this):s)},
$ieo:1,
gp9(){return this},
$C:"$1",
$R:1,
$D:null}
A.jm.prototype={$C:"$0",$R:0}
A.jn.prototype={$C:"$2",$R:2}
A.kN.prototype={}
A.kK.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.A5(s)+"'"}}
A.f8.prototype={
a_(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.f8))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.ml(this.a)^A.hN(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ku(this.a)+"'")}}
A.kB.prototype={
p(a){return"RuntimeError: "+this.a}}
A.ce.prototype={
gt(a){return this.a},
gN(a){return this.a===0},
gV(a){return this.a!==0},
gZ(){return new A.ae(this,A.q(this).i("ae<1>"))},
gaB(){return new A.as(this,A.q(this).i("as<2>"))},
gJ(){return new A.I(this,A.q(this).i("I<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.nC(a)},
nC(a){var s=this.d
if(s==null)return!1
return this.c8(s[this.c7(a)],a)>=0},
L(a,b){A.q(this).i("X<1,2>").a(b).ar(0,new A.pd(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nD(b)},
nD(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c7(a)]
r=this.c8(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fc(s==null?q.b=q.dz():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fc(r==null?q.c=q.dz():r,b,c)}else q.nF(b,c)},
nF(a,b){var s,r,q,p,o=this,n=A.q(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dz()
r=o.c7(a)
q=s[r]
if(q==null)s[r]=[o.dA(a,b)]
else{p=o.c8(q,a)
if(p>=0)q[p].b=b
else q.push(o.dA(a,b))}},
ce(a,b){var s,r,q=this,p=A.q(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a1(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.ks(this.c,b)
else return this.nE(b)},
nE(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c7(a)
r=n[s]
q=o.c8(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f9(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dc()}},
ar(a,b){var s,r,q=this
A.q(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.aq(q))
s=s.c}},
fc(a,b,c){var s,r=A.q(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dA(b,c)
else s.b=c},
ks(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f9(s)
delete a[b]
return s.b},
dc(){this.r=this.r+1&1073741823},
dA(a,b){var s=this,r=A.q(s),q=new A.pl(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dc()
return q},
f9(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dc()},
c7(a){return J.ay(a)&1073741823},
c8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.vZ(this)},
dz(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ivX:1}
A.pd.prototype={
$2(a,b){var s=this.a,r=A.q(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.q(this.a).i("~(1,2)")}}
A.pl.prototype={}
A.ae.prototype={
gt(a){return this.a.a},
gN(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cf(s,s.r,s.e,this.$ti.i("cf<1>"))},
q(a,b){return this.a.R(b)}}
A.cf.prototype={
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
gt(a){return this.a.a},
gN(a){return this.a.a===0},
gu(a){var s=this.a
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
gt(a){return this.a.a},
gN(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cy(s,s.r,s.e,this.$ti.i("cy<1,2>"))}}
A.cy.prototype={
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
A.hy.prototype={
c7(a){return A.Fz(a)&1073741823},
c8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.v2.prototype={
$1(a){return this.a(a)},
$S:11}
A.v3.prototype={
$2(a,b){return this.a(a,b)},
$S:150}
A.v4.prototype={
$1(a){return this.a(A.x(a))},
$S:28}
A.bR.prototype={
ga2(a){return A.d6(this.fD())},
fD(){return A.FJ(this.$r,this.cu())},
p(a){return this.he(!1)},
he(a){var s,r,q,p,o,n=this.l6(),m=this.cu(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.xV(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
l6(){var s,r=this.$s
while($.tr.length<=r)B.a.l($.tr,null)
s=$.tr[r]
if(s==null){s=this.kN()
B.a.k($.tr,r,s)}return s},
kN(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.k1(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.aj(j,k)}}
A.eT.prototype={
cu(){return[this.a,this.b]},
a_(a,b){if(b==null)return!1
return b instanceof A.eT&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gI(a){return A.cB(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.eU.prototype={
cu(){return[this.a,this.b,this.c]},
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.eU&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gI(a){var s=this
return A.cB(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fH.prototype={
cu(){return this.a},
a_(a,b){if(b==null)return!1
return b instanceof A.fH&&this.$s===b.$s&&A.D2(this.a,b.a)},
gI(a){return A.cB(this.$s,A.BV(this.a),B.f,B.f,B.f,B.f)}}
A.hw.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
glp(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xJ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kO(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hl(a,b){return new A.l9(this,b,0)},
l5(a,b){var s,r=this.glp()
if(r==null)r=A.eW(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lu(s)},
$ipM:1,
$iC9:1}
A.lu.prototype={
gf7(){return this.b.index},
gdV(){var s=this.b
return s.index+s[0].length},
$ifq:1,
$ihP:1}
A.l9.prototype={
gu(a){return new A.la(this.a,this.b,this.c)}}
A.la.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.l5(l,s)
if(p!=null){m.d=p
o=p.gdV()
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
A.i0.prototype={
gdV(){return this.a+this.c.length},
$ifq:1,
gf7(){return this.a}}
A.lN.prototype={
gu(a){return new A.lO(this.a,this.b,this.c)},
gO(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.i0(r,s)
throw A.d(A.cw())}}
A.lO.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.i0(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.rZ.prototype={
dD(){var s=this.b
if(s===this)throw A.d(new A.ev("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a9(""))
return s}}
A.dU.prototype={
ga2(a){return B.lf},
hn(a,b,c){A.yZ(a,b,c)
return new Float32Array(a,b,c)},
$iaf:1,
$idU:1}
A.fr.prototype={$ifr:1}
A.hH.prototype={
gmr(a){if(((a.$flags|0)&2)!==0)return new A.tx(a.buffer)
else return a.buffer},
lh(a,b,c,d){var s=A.aT(b,0,c,d,null)
throw A.d(s)},
fk(a,b,c,d){if(b>>>0!==b||b>c)this.lh(a,b,c,d)}}
A.tx.prototype={
hn(a,b,c){var s=A.BS(this.a,b,c)
s.$flags=3
return s}}
A.ke.prototype={
ga2(a){return B.lg},
$iaf:1}
A.b3.prototype={
gt(a){return a.length},
h2(a,b,c,d,e){var s,r,q=a.length
this.fk(a,b,q,"start")
this.fk(a,c,q,"end")
if(b>c)throw A.d(A.aT(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.y(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibZ:1}
A.hF.prototype={
h(a,b){A.dB(b,a,a.length)
return a[b]},
k(a,b,c){A.bB(c)
a.$flags&2&&A.bJ(a)
A.dB(b,a,a.length)
a[b]=c},
d5(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bJ(a,5)
this.h2(a,b,c,d,0)
return},
$iR:1,
$io:1,
$iD:1}
A.hG.prototype={
k(a,b,c){A.c(c)
a.$flags&2&&A.bJ(a)
A.dB(b,a,a.length)
a[b]=c},
jG(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bJ(a,5)
this.h2(a,b,c,d,e)
return},
$iR:1,
$io:1,
$iD:1}
A.hE.prototype={
ga2(a){return B.lh},
aO(a,b,c){return new Float32Array(a.subarray(b,A.DO(b,c,a.length)))},
$iaf:1,
$inX:1}
A.kf.prototype={
ga2(a){return B.li},
$iaf:1}
A.kg.prototype={
ga2(a){return B.lj},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1}
A.kh.prototype={
ga2(a){return B.lk},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1}
A.ki.prototype={
ga2(a){return B.ll},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1}
A.kj.prototype={
ga2(a){return B.lo},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1,
$iwd:1}
A.kk.prototype={
ga2(a){return B.lp},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1}
A.ex.prototype={
ga2(a){return B.lq},
gt(a){return a.length},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1,
$iex:1}
A.hI.prototype={
ga2(a){return B.lr},
gt(a){return a.length},
h(a,b){A.dB(b,a,a.length)
return a[b]},
$iaf:1,
$ii4:1}
A.ir.prototype={}
A.is.prototype={}
A.it.prototype={}
A.iu.prototype={}
A.cD.prototype={
i(a){return A.iE(v.typeUniverse,this,a)},
K(a){return A.yz(v.typeUniverse,this,a)}}
A.ln.prototype={}
A.lR.prototype={
p(a){return A.bH(this.a,null)}}
A.ll.prototype={
p(a){return this.a}}
A.fM.prototype={$idu:1}
A.rU.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:36}
A.rT.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:122}
A.rV.prototype={
$0(){this.a.$0()},
$S:12}
A.rW.prototype={
$0(){this.a.$0()},
$S:12}
A.tu.prototype={
kr(a,b){if(self.setTimeout!=null)self.setTimeout(A.h3(new A.tv(this,b),0),a)
else throw A.d(A.aW("`setTimeout()` not found."))}}
A.tv.prototype={
$0(){this.b.$0()},
$S:0}
A.lb.prototype={
dK(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dg(a)
else{s=r.a
if(q.i("bX<1>").b(a))s.fj(a)
else s.cr(a)}},
dL(a,b){var s=this.a
if(this.b)s.bj(new A.b_(a,b))
else s.cn(new A.b_(a,b))}}
A.tI.prototype={
$1(a){return this.a.$2(0,a)},
$S:18}
A.tJ.prototype={
$2(a,b){this.a.$2(1,new A.hk(a,t.l.a(b)))},
$S:109}
A.uT.prototype={
$2(a,b){this.a(A.c(a),b)},
$S:86}
A.cF.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lQ(a,b){var s,r,q
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
o.d=null}q=o.lQ(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yu
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
o.a=A.yu
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
pb(a){var s,r,q=this
if(a instanceof A.cm){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.Q(a)
return 2}},
$iab:1}
A.cm.prototype={
gu(a){return new A.cF(this.a(),this.$ti.i("cF<1>"))}}
A.b_.prototype={
p(a){return A.w(this.a)},
$ial:1,
gbR(){return this.b}}
A.o4.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fp(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.cG(p)
l=r
o=q
n=A.wE(l,o)
l=new A.b_(l,o)
m.b.bj(l)
return}m.b.fp(s)}},
$S:0}
A.o7.prototype={
$2(a,b){var s,r,q=this
A.eW(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bj(new A.b_(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bj(new A.b_(r,s))}},
$S:56}
A.o6.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bK(r,k.b,a)
if(J.a3(s,0)){q=A.e([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.h8(q,l)}k.c.cr(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bj(new A.b_(q,o))}},
$S(){return this.d.i("az(0)")}}
A.lf.prototype={
dL(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.cn(A.Em(a,b))},
hq(a){return this.dL(a,null)}}
A.ib.prototype={
dK(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.dg(r.i("1/").a(a))}}
A.eM.prototype={
nR(a){if((this.c&15)!==6)return!0
return this.b.b.eN(t.bl.a(this.d),a.a,t.y,t.K)},
nA(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.oR(q,m,a.b,o,n,t.l)
else p=l.eN(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ag(s))){if((r.c&1)!==0)throw A.d(A.y("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.y("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aw.prototype={
eO(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.ao
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.d(A.an(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.EV(b,s)}r=new A.aw(s,c.i("aw<0>"))
this.de(new A.eM(r,3,a,b,q.i("@<1>").K(c).i("eM<1,2>")))
return r},
hc(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.aw($.ao,c.i("aw<0>"))
this.de(new A.eM(s,19,a,b,r.i("@<1>").K(c).i("eM<1,2>")))
return s},
lT(a){this.a=this.a&1|16
this.c=a},
cq(a){this.a=a.a&30|this.a&1
this.c=a.c},
de(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.de(a)
return}r.cq(s)}A.mf(null,null,r.b,t.O.a(new A.t1(r,a)))}},
fR(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fR(a)
return}m.cq(n)}l.a=m.cB(a)
A.mf(null,null,m.b,t.O.a(new A.t6(l,m)))}},
bU(){var s=t.F.a(this.c)
this.c=null
return this.cB(s)},
cB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fp(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bX<1>").b(a))A.t4(a,r,!0)
else{s=r.bU()
q.c.a(a)
r.a=8
r.c=a
A.eN(r,s)}},
cr(a){var s,r=this
r.$ti.c.a(a)
s=r.bU()
r.a=8
r.c=a
A.eN(r,s)},
kM(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bU()
q.cq(a)
A.eN(q,r)},
bj(a){var s=this.bU()
this.lT(a)
A.eN(this,s)},
dg(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bX<1>").b(a)){this.fj(a)
return}this.ky(a)},
ky(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mf(null,null,s.b,t.O.a(new A.t3(s,a)))},
fj(a){A.t4(this.$ti.i("bX<1>").a(a),this,!1)
return},
cn(a){this.a^=2
A.mf(null,null,this.b,t.O.a(new A.t2(this,a)))},
$ibX:1}
A.t1.prototype={
$0(){A.eN(this.a,this.b)},
$S:0}
A.t6.prototype={
$0(){A.eN(this.b,this.a.a)},
$S:0}
A.t5.prototype={
$0(){A.t4(this.a.a,this.b,!0)},
$S:0}
A.t3.prototype={
$0(){this.a.cr(this.b)},
$S:0}
A.t2.prototype={
$0(){this.a.bj(this.b)},
$S:0}
A.t9.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.oQ(t.pF.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.cG(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mF(q)
n=k.a
n.c=new A.b_(q,o)
q=n}q.b=!0
return}if(j instanceof A.aw&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aw){m=k.b.a
l=new A.aw(m.b,m.$ti)
j.eO(new A.ta(l,m),new A.tb(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ta.prototype={
$1(a){this.a.kM(this.b)},
$S:36}
A.tb.prototype={
$2(a,b){A.eW(a)
t.l.a(b)
this.a.bj(new A.b_(a,b))},
$S:59}
A.t8.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eN(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ag(l)
r=A.cG(l)
q=s
p=r
if(p==null)p=A.mF(q)
o=this.a
o.c=new A.b_(q,p)
o.b=!0}},
$S:0}
A.t7.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nR(s)&&p.a.e!=null){p.c=p.a.nA(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.cG(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mF(p)
m=l.b
m.c=new A.b_(p,n)
p=m}p.b=!0}},
$S:0}
A.lc.prototype={}
A.lM.prototype={}
A.iL.prototype={$iym:1}
A.lE.prototype={
oS(a){var s,r,q
t.O.a(a)
try{if(B.x===$.ao){a.$0()
return}A.zw(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.cG(q)
A.wN(A.eW(s),t.l.a(r))}},
hp(a){return new A.ts(this,t.O.a(a))},
oQ(a,b){b.i("0()").a(a)
if($.ao===B.x)return a.$0()
return A.zw(null,null,this,a,b)},
eN(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.ao===B.x)return a.$1(b)
return A.F_(null,null,this,a,b,c,d)},
oR(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ao===B.x)return a.$2(b,c)
return A.EZ(null,null,this,a,b,c,d,e,f)},
jb(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.ts.prototype={
$0(){return this.a.oS(this.b)},
$S:0}
A.uI.prototype={
$0(){A.Bm(this.a,this.b)},
$S:0}
A.ij.prototype={
gt(a){return this.a},
gN(a){return this.a===0},
gV(a){return this.a!==0},
gZ(){return new A.eO(this,this.$ti.i("eO<1>"))},
gaB(){var s=this.$ti
return A.k9(new A.eO(this,s.i("eO<1>")),new A.td(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kR(a)},
kR(a){var s=this.d
if(s==null)return!1
return this.bk(this.fC(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yo(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yo(q,b)
return r}else return this.l9(b)},
l9(a){var s,r,q=this.d
if(q==null)return null
s=this.fC(q,a)
r=this.bk(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fn(s==null?m.b=A.wh():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fn(r==null?m.c=A.wh():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wh()
p=A.ml(b)&1073741823
o=q[p]
if(o==null){A.wi(q,p,[b,c]);++m.a
m.e=null}else{n=m.bk(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ar(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fo()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.aq(m))}},
fo(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cR(i.a,null,!1,t.z)
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
this.e=null}A.wi(a,b,c)},
fC(a,b){return a[A.ml(b)&1073741823]}}
A.td.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.il.prototype={
bk(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eO.prototype={
gt(a){return this.a.a},
gN(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.ik(s,s.fo(),this.$ti.i("ik<1>"))},
q(a,b){return this.a.R(b)}}
A.ik.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.aq(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.cl.prototype={
fM(){return new A.cl(A.q(this).i("cl<1>"))},
gu(a){var s=this,r=new A.eR(s,s.r,A.q(s).i("eR<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gN(a){return this.a===0},
gV(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.kQ(b)},
kQ(a){var s=this.d
if(s==null)return!1
return this.bk(s[this.dm(a)],a)>=0},
gO(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.q(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.q(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fm(s==null?q.b=A.wj():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fm(r==null?q.c=A.wj():r,b)}else return q.kt(b)},
kt(a){var s,r,q,p=this
A.q(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wj()
r=p.dm(a)
q=s[r]
if(q==null)s[r]=[p.dk(a)]
else{if(p.bk(q,a)>=0)return!1
q.push(p.dk(a))}return!0},
a1(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fS(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fS(s.c,b)
else return s.lN(b)},
lN(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dm(a)
r=n[s]
q=o.bk(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hh(p)
return!0},
l7(a,b){var s,r,q,p,o,n=this,m=A.q(n)
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
s.dw()}},
fm(a,b){A.q(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dk(b)
return!0},
fS(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hh(s)
delete a[b]
return!0},
dw(){this.r=this.r+1&1073741823},
dk(a){var s,r=this,q=new A.lt(A.q(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dw()
return q},
hh(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dw()},
dm(a){return J.ay(a)&1073741823},
bk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$ixP:1}
A.lt.prototype={}
A.eR.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aq(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.pm.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:62}
A.W.prototype={
gu(a){return new A.aS(a,this.gt(a),A.bV(a).i("aS<W.E>"))},
Y(a,b){return this.h(a,b)},
gN(a){return this.gt(a)===0},
gV(a){return!this.gN(a)},
gO(a){if(this.gt(a)===0)throw A.d(A.cw())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.d(A.aq(a))}return!1},
a5(a,b){var s,r
A.bV(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.d(A.aq(a))}return!0},
M(a,b){var s,r
A.bV(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.d(A.aq(a))}return!1},
a7(a,b){var s
if(this.gt(a)===0)return""
s=A.wb("",a,b)
return s.charCodeAt(0)==0?s:s},
eS(a,b){return new A.cE(a,b.i("cE<0>"))},
cd(a,b,c){var s=A.bV(a)
return new A.T(a,s.K(c).i("1(W.E)").a(b),s.i("@<W.E>").K(c).i("T<1,2>"))},
l(a,b){var s
A.bV(a).i("W.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cG(a,b){return new A.aR(a,A.bV(a).i("@<W.E>").K(b).i("aR<1,2>"))},
S(a,b){var s,r=A.bV(a)
r.i("l(W.E,W.E)?").a(b)
s=b==null?A.Fy():b
A.kG(a,0,this.gt(a)-1,s,r.i("W.E"))},
nt(a,b,c,d){var s
A.bV(a).i("W.E?").a(d)
A.hO(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.vT(a,"[","]")},
$iR:1,
$io:1,
$iD:1}
A.aa.prototype={
ar(a,b){var s,r,q,p=A.q(this)
p.i("~(aa.K,aa.V)").a(b)
for(s=this.gZ(),s=s.gu(s),p=p.i("aa.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.gZ().cd(0,new A.pn(this),A.q(this).i("P<aa.K,aa.V>"))},
bI(a,b,c,d){var s,r,q,p,o,n=A.q(this)
n.K(c).K(d).i("P<1,2>(aa.K,aa.V)").a(b)
s=A.p(c,d)
for(r=this.gZ(),r=r.gu(r),n=n.i("aa.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
mc(a){var s,r
for(s=J.Q(A.q(this).i("o<P<aa.K,aa.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.gZ().q(0,a)},
gt(a){var s=this.gZ()
return s.gt(s)},
gN(a){var s=this.gZ()
return s.gN(s)},
gV(a){var s=this.gZ()
return s.gV(s)},
gaB(){return new A.io(this,A.q(this).i("io<aa.K,aa.V>"))},
p(a){return A.vZ(this)},
$iX:1}
A.pn.prototype={
$1(a){var s=this.a,r=A.q(s)
r.i("aa.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("aa.V").a(s)
return new A.P(a,s,r.i("P<aa.K,aa.V>"))},
$S(){return A.q(this.a).i("P<aa.K,aa.V>(aa.K)")}}
A.po.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:44}
A.io.prototype={
gt(a){var s=this.a
return s.gt(s)},
gN(a){var s=this.a
return s.gN(s)},
gV(a){var s=this.a
return s.gV(s)},
gO(a){var s=this.a,r=s.gZ()
r=s.h(0,r.gO(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.gZ()
return new A.ip(r.gu(r),s,this.$ti.i("ip<1,2>"))}}
A.ip.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.iF.prototype={
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aW("Cannot modify unmodifiable map"))}}
A.fp.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.q(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
ar(a,b){this.a.ar(0,A.q(this).i("~(1,2)").a(b))},
gN(a){var s=this.a
return s.gN(s)},
gV(a){var s=this.a
return s.gV(s)},
gt(a){var s=this.a
return s.gt(s)},
gZ(){return this.a.gZ()},
p(a){return this.a.p(0)},
gaB(){return this.a.gaB()},
gJ(){return this.a.gJ()},
bI(a,b,c,d){return this.a.bI(0,A.q(this).K(c).K(d).i("P<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.e0.prototype={}
A.dr.prototype={
gN(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
L(a,b){var s
for(s=J.Q(A.q(this).i("o<1>").a(b));s.m();)this.l(0,s.gn())},
dR(a){var s,r,q=this.bv(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a1(0,r)}return q},
p(a){return A.vT(this,"{","}")},
a5(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a7(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.d9(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gO(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cw())
return s.gn()},
Y(a,b){var s,r
A.kx(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oW(b,b-r,this,"index"))},
$iR:1,
$io:1,
$idY:1}
A.iz.prototype={
dR(a){var s,r,q,p=this,o=p.fM()
for(s=A.im(p,p.r,A.q(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bv(a){var s=this.fM()
s.L(0,this)
return s}}
A.lS.prototype={
l(a,b){this.$ti.c.a(b)
return A.De()}}
A.fD.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.im(s,s.r,A.q(s).c)},
bv(a){return this.a.bv(0)}}
A.fN.prototype={}
A.iG.prototype={}
A.lr.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lH(b):s}},
gt(a){return this.b==null?this.c.a:this.bx().length},
gN(a){return this.gt(0)===0},
gV(a){return this.gt(0)>0},
gZ(){if(this.b==null){var s=this.c
return new A.ae(s,A.q(s).i("ae<1>"))}return new A.ls(this)},
gaB(){var s,r=this
if(r.b==null){s=r.c
return new A.as(s,A.q(s).i("as<2>"))}return A.k9(r.bx(),new A.tf(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.x(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.m3().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ar(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.ar(0,b)
s=o.bx()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.u6(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.aq(o))}},
bx(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
m3(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.p(t.N,t.z)
r=n.bx()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
lH(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.u6(this.a[a])
return this.b[a]=s}}
A.tf.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:28}
A.ls.prototype={
gt(a){return this.a.gt(0)},
Y(a,b){var s=this.a
if(s.b==null)s=s.gZ().Y(0,b)
else{s=s.bx()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gZ()
s=s.gu(s)}else{s=s.bx()
s=new J.eg(s,s.length,A.H(s).i("eg<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tA.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:43}
A.tz.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:43}
A.jg.prototype={
nU(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hO(a4,a5,a2)
s=$.Aj()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.v1(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.v1(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bk("")
g=o}else g=o
g.a+=B.b.E(a3,p,q)
c=A.av(j)
g.a+=c
p=k
continue}}throw A.d(A.a7("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.E(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xl(a3,m,a5,n,l,r)
else{b=B.c.P(r-1,4)+1
if(b===1)throw A.d(A.a7(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bN(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xl(a3,m,a5,n,l,a)
else{b=B.c.P(a,4)
if(b===1)throw A.d(A.a7(a1,a3,a5))
if(b>1)a3=B.b.bN(a3,a5,a5,b===2?"==":"=")}return a3}}
A.n8.prototype={}
A.ek.prototype={}
A.js.prototype={}
A.jC.prototype={}
A.hz.prototype={
p(a){var s=A.jD(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k6.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.k5.prototype={
aE(a,b){var s=A.EN(a,this.gnb().a)
return s},
aj(a,b){var s=A.CV(a,this.gnj().b,null)
return s},
gnj(){return B.hK},
gnb(){return B.hJ}}
A.pf.prototype={}
A.pe.prototype={}
A.th.prototype={
jm(a){var s,r,q,p,o,n,m=a.length
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
di(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.k6(a,null))}B.a.l(s,a)},
d0(a){var s,r,q,p,o=this
if(o.jl(a))return
o.di(a)
try{s=o.b.$1(a)
if(!o.jl(s)){q=A.xL(a,null,o.gfQ())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.xL(a,r,o.gfQ())
throw A.d(q)}},
jl(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jm(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.di(a)
q.p7(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.di(a)
r=q.p8(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
p7(a){var s,r,q=this.c
q.a+="["
s=J.aC(a)
if(s.gV(a)){this.d0(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.d0(s.h(a,r))}}q.a+="]"},
p8(a){var s,r,q,p,o,n,m=this,l={}
if(a.gN(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.cR(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ar(0,new A.ti(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jm(A.x(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.d0(r[n])}p.a+="}"
return!0}}
A.ti.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:44}
A.tg.prototype={
gfQ(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.kV.prototype={}
A.rw.prototype={
mI(a){return new A.ty(this.a).kS(t.J.a(a),0,null,!0)}}
A.ty.prototype={
kS(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.hO(b,c,J.ca(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Dv(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Du(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dn(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Dw(o)
l.b=0
throw A.d(A.a7(m,a,p+l.c))}return n},
dn(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.T(b+c,2)
r=q.dn(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dn(a,s,c,d)}return q.na(a,b,c,d)},
na(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bk(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.y6(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.av(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.el.prototype={
a_(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.el)if(this.a===b.a)s=this.b===b.b
return s},
gI(a){return A.cB(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.f7.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
p(a){var s=this,r=A.B1(A.C6(s)),q=A.ju(A.C4(s)),p=A.ju(A.C0(s)),o=A.ju(A.C1(s)),n=A.ju(A.C3(s)),m=A.ju(A.C5(s)),l=A.xs(A.C2(s)),k=s.b,j=k===0?"":A.xs(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib1:1}
A.dM.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.dM&&this.a===b.a},
gI(a){return B.c.gI(this.a)},
F(a,b){return B.c.F(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.T(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.T(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.ol(B.c.p(o%1e6),6,"0")},
$ib1:1}
A.lk.prototype={
p(a){return this.B()},
$iE:1}
A.al.prototype={
gbR(){return A.C_(this)}}
A.jc.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jD(s)
return"Assertion failed"}}
A.du.prototype={}
A.cr.prototype={
gds(){return"Invalid argument"+(!this.a?"(s)":"")},
gdr(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gds()+q+o
if(!s.a)return n
return n+s.gdr()+": "+A.jD(s.gew())},
gew(){return this.b}}
A.fv.prototype={
gew(){return A.wr(this.b)},
gds(){return"RangeError"},
gdr(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.jX.prototype={
gew(){return A.c(this.b)},
gds(){return"RangeError"},
gdr(){if(A.c(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.i5.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kQ.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fA.prototype={
p(a){return"Bad state: "+this.a}}
A.jp.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jD(s)+"."}}
A.km.prototype={
p(a){return"Out of Memory"},
gbR(){return null},
$ial:1}
A.hZ.prototype={
p(a){return"Stack Overflow"},
gbR(){return null},
$ial:1}
A.t_.prototype={
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
k=""}return g+l+B.b.E(e,i,j)+k+"\n"+B.b.a3(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.o.prototype={
cG(a,b){return A.AR(this,A.q(this).i("o.E"),b)},
cd(a,b,c){var s=A.q(this)
return A.k9(this,s.K(c).i("1(o.E)").a(b),s.i("o.E"),c)},
d_(a,b){var s=A.q(this)
return new A.K(this,s.i("n(o.E)").a(b),s.i("K<o.E>"))},
eS(a,b){return new A.cE(this,b.i("cE<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
bs(a,b,c,d){var s,r
d.a(b)
A.q(this).K(d).i("1(1,o.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a5(a,b){var s
A.q(this).i("n(o.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a7(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.d9(q.gn())
if(!q.m())return s
r=b.gN(b)
if(r){r=s
do r+=J.d9(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.d9(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("n(o.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bP(a,b){var s=A.J(this,A.q(this).i("o.E"))
return s},
bO(a){return this.bP(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gN(a){return!this.gu(this).m()},
gV(a){return!this.gN(this)},
gO(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cw())
return s.gn()},
gaN(a){var s,r=this.gu(this)
if(!r.m())throw A.d(A.cw())
s=r.gn()
if(r.m())throw A.d(A.xD())
return s},
aS(a,b,c){var s,r=A.q(this)
r.i("n(o.E)").a(b)
r.i("o.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cw())},
al(a,b){return this.aS(0,b,null)},
Y(a,b){var s,r
A.kx(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oW(b,b-r,this,"index"))},
p(a){return A.BG(this,"(",")")}}
A.P.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.az.prototype={
gI(a){return A.G.prototype.gI.call(this,0)},
p(a){return"null"}}
A.G.prototype={$iG:1,
a_(a,b){return this===b},
gI(a){return A.hN(this)},
p(a){return"Instance of '"+A.ku(this)+"'"},
ga2(a){return A.mj(this)},
toString(){return this.p(this)}}
A.lP.prototype={
p(a){return""},
$icV:1}
A.rd.prototype={
gnh(){var s,r=this.b
if(r==null)r=$.q2.$0()
s=r-this.a
if($.x9()===1e6)return s
return s*1000}}
A.bk.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCn:1}
A.rv.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.x(b)
s=B.b.bG(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wo(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.E(b,0,s)
q=B.b.bg(b,s+1)
p=this.a
a.k(0,A.wo(r,0,r.length,p,!0),A.wo(q,0,q.length,p,!0))}return a},
$S:72}
A.ru.prototype={
$2(a,b){throw A.d(A.a7("Illegal IPv6 address, "+a,this.a,b))},
$S:78}
A.iH.prototype={
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
if(r!=null)s=s+":"+A.w(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.b.gI(r.gha())
r.y!==$&&A.A4()
r.y=s
q=s}return q},
gaI(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.ye(s==null?"":s)
r.z!==$&&A.A4()
q=r.z=new A.e0(s,t.hL)}return q},
gji(){return this.b},
gev(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.ac(s,"v",1))return B.b.E(s,1,s.length-1)
return s},
geE(){var s=this.d
return s==null?A.yA(this.a):s},
geG(){var s=this.f
return s==null?"":s},
giN(){var s=this.r
return s==null?"":s},
giO(){return this.c!=null},
giQ(){return this.f!=null},
giP(){return this.r!=null},
p(a){return this.gha()},
a_(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.geX())if(p.c!=null===b.giO())if(p.b===b.gji())if(p.gev()===b.gev())if(p.geE()===b.geE())if(p.e===b.gj4()){r=p.f
q=r==null
if(!q===b.giQ()){if(q)r=""
if(r===b.geG()){r=p.r
q=r==null
if(!q===b.giP()){s=q?"":r
s=s===b.giN()}}}}return s},
$ikT:1,
geX(){return this.a},
gj4(){return this.e}}
A.rt.prototype={
gjh(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.cS(s,"?",m)
q=s.length
if(r>=0){p=A.iI(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lg("data","",n,n,A.iI(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lI.prototype={
giO(){return this.c>0},
giQ(){return this.f<this.r},
giP(){return this.r<this.a.length},
geX(){var s=this.w
return s==null?this.w=this.kP():s},
kP(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.E(r.a,0,q)},
gji(){var s=this.c,r=this.b+3
return s>r?B.b.E(this.a,r,s-1):""},
gev(){var s=this.c
return s>0?B.b.E(this.a,s,this.d):""},
geE(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.zU(B.b.E(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
gj4(){return B.b.E(this.a,this.e,this.f)},
geG(){var s=this.f,r=this.r
return s<r?B.b.E(this.a,s+1,r):""},
giN(){var s=this.r,r=this.a
return s<r.length?B.b.bg(r,s+1):""},
gaI(){if(this.f>=this.r)return B.cR
return new A.e0(A.ye(this.geG()),t.hL)},
gI(a){var s=this.x
return s==null?this.x=B.b.gI(this.a):s},
a_(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ikT:1}
A.lg.prototype={}
A.pE.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vy.prototype={
$1(a){return this.a.dK(this.b.i("0/?").a(a))},
$S:18}
A.vz.prototype={
$1(a){if(a==null)return this.a.hq(new A.pE(a===undefined))
return this.a.hq(a)},
$S:18}
A.uX.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zg(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aT(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.ec(!0,"isUtc",t.y)
return new A.el(r,0,!0)}if(a instanceof RegExp)throw A.d(A.y("structured clone of RegExp",null))
if(a instanceof Promise)return A.aZ(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.p(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c9(n),p=s.gu(n);p.m();)m.push(A.d7(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.c(a.length)
for(s=J.aC(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:80}
A.lq.prototype={
aL(a){if(a<=0||a>4294967296)throw A.d(A.xX(u.w+a))
return Math.random()*a>>>0},
cV(){return Math.random()},
$iw6:1}
A.fG.prototype={
da(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.b8()
l.b8()
l.b8()
l.b8()},
b8(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.T(o-n+(q-p)+(m-r),4294967296)>>>0},
aL(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.xX(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b8()
return(p.a&s)>>>0}do{p.b8()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cV(){var s,r=this
r.b8()
s=r.a
r.b8()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iw6:1}
A.q5.prototype={
C(){var s,r=this
if(B.a.M(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.q6()))throw A.d(B.fL)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.f4)}}
A.q6.prototype={
$1(a){return A.c(a)<=0},
$S:40}
A.eA.prototype={
B(){return"QualityProfileKind."+this.b}}
A.ez.prototype={}
A.nk.prototype={}
A.nl.prototype={}
A.ks.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.N(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.I(q,A.q(q).i("I<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.y("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.y("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.y("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.d(A.y("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.fb.prototype={}
A.jJ.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gam(0)||!k.b.gam(0)||!k.r.gam(0))throw A.d(A.y("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.y("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.y("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gam(0)||r.gca()<1e-12)A.j(A.y("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
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
A.o_.prototype={}
A.dq.prototype={
a_(a,b){if(b==null)return!1
return J.f1(b)===A.mj(this)&&b instanceof A.dq&&this.a===b.a&&this.b===b.b},
gI(a){return A.cB(A.mj(this),this.a,this.b,B.f,B.f,B.f)}}
A.bq.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bl.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cA.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kn.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cu.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.er.prototype={
B(){return"HandleRejection."+this.b}}
A.jT.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.cx.prototype={
gam(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a_(a,b){if(b==null)return!1
return b instanceof A.cx&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cB(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.nF.prototype={}
A.kr.prototype={}
A.bx.prototype={}
A.vA.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.d.F(b.a,a.a)
return s===0?B.c.F(a.b.a,b.b.a):s},
$S:101}
A.jb.prototype={
B(){return"AlphaMode."+this.b}}
A.ew.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.y("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.y("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.y("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.w2("roughness",l.z)
A.w2("metallic",0)
A.w2("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aX("uvScaleU",s),new A.aX("uvScaleV",r),new A.aX("uvOffsetU",0),new A.aX("uvOffsetV",0),new A.aX("tintR",l.c),new A.aX("tintG",l.d),new A.aX("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.y("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.d(A.y("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.y("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d_.prototype={
B(){return"VertexAttributeKind."+this.b}}
A.by.prototype={}
A.rx.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.T[s]
q=r.c
if(q<=0)throw A.d(A.y(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.y(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.ry())
for(p=B.a.gu(B.T),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.d(A.y('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.ry.prototype={
$1(a){return t.qY.a(a).a===B.dB},
$S:19}
A.cg.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.c.P(s,14)!==0)throw A.d(A.y("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.m6()
r=n.c
if(r!=null){q=s/14|0
for(s=A.BO(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.y("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gam(0)&&s.b.gam(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.y("MeshData.localBounds must be a valid AABB",null))},
m6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.K(B.T,a2.a(new A.pt()),a3)
if(!a4.gu(0).m())return
s=new A.K(B.T,a2.a(new A.pu()),a3)
if(s.gt(0)!==1)throw A.d(A.y("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaN(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaN(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a5(A.e([j,h,g,f,e,d,c],p),new A.pv()))throw A.d(A.y("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.y("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.y("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.y("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.pt.prototype={
$1(a){return t.qY.a(a).a===B.dB},
$S:19}
A.pu.prototype={
$1(a){return t.qY.a(a).a===B.dA},
$S:19}
A.pv.prototype={
$1(a){return isFinite(A.bB(a))},
$S:5}
A.pG.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.d(A.y("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.pI()))throw A.d(A.y("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.d(A.y("resource history does not match vhsOutput ownership",null))}}
A.pI.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.pZ.prototype={}
A.kA.prototype={
iS(a){var s=this
if(s.d)A.j(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
bo(){if(this.d)return
this.d=!0
this.a=null}}
A.fg.prototype={
B(){return"DrawMode."+this.b}}
A.ji.prototype={
B(){return"BlendMode."+this.b}}
A.bu.prototype={}
A.kL.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.y("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.y("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.y("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jo.prototype={
B(){return"ColorEncoding."+this.b}}
A.jy.prototype={
B(){return"DiagnosticLevel."+this.b}}
A.ky.prototype={
C(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dR(B.kU)
if(o.a!==0)A.j(A.an(o,r,"contains unknown pipeline features"))
if(q.a===B.bf&&p.gV(p))A.j(A.an(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.y("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.eD.prototype={
B(){return"RendererState."+this.b}}
A.aI.prototype={}
A.o1.prototype={
j3(a){var s=this.z.h(0,a)
return s==null?B.cb:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.kb.prototype={
oG(a){return this.a.c0(a)}}
A.pr.prototype={
$3(a,b,c){return new A.cA(A.c(a),A.c(b),A.aB(c))},
$S:162}
A.kS.prototype={}
A.pw.prototype={
bl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yk(f,new A.jM(e.byteLength,B.cp,B.h1))
if(f.b!==B.h)A.j(A.m(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d2(f)
A.bz(f,p)
if(f.b!==B.h)A.j(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a2(t.S)
for(n=a.a,m=0;m<6;++m){l=B.T[m]
k=A.zD(l.a)
if(!o.l(0,k))continue
j=A.DT(n,k,l)
if(f.b!==B.h)A.j(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.c(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yk(f,new A.jM(A.xS(i),B.cp,B.co))
if(f.b!==B.h)A.j(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.CI(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kS(d,h,p,f,e.length/14|0,!1)},
eL(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dR(B.aw,a))
this.b.c0(a)
return s},
b3(a){var s,r,q=this.c.a1(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b3(a)},
eJ(){var s,r,q,p
for(s=this.b.bH(),r=s.$ti,s=new A.cF(s.a(),r.i("cF<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bl(p.b))}},
gcb(){return this.b.bH().bs(0,0,new A.py(),t.S)}}
A.px.prototype={
$3(a,b,c){return new A.bq(A.c(a),A.c(b),A.aB(c))},
$S:168}
A.py.prototype={
$2(a,b){var s,r
A.c(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.xS(s)
return a+r+s},
$S:169}
A.cj.prototype={}
A.dZ.prototype={
B(){return"TextureResidencyStatus."+this.b}}
A.c1.prototype={}
A.rm.prototype={
cs(a){var s=this.a,r=A.H(s)
return new A.K(s,r.i("n(1)").a(new A.rn(a)),r.i("K<1>")).gt(0)}}
A.rn.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:161}
A.rk.prototype={
oq(a){var s,r,q,p,o,n,m,l,k,j,i
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
B.a.S(m,new A.rl())
r=t.Aj
l=A.a2(r)
k=A.p(r,t.bp)
j=A.e([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.lG(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c1(p,i))}r=l.a
return new A.rm(A.aj(j,t.d),r)},
lG(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.hb(a,r)===s.d)return B.du
this.b.k(0,a,!0)
return B.dt}catch(q){if(A.ag(q) instanceof A.jT){s=this.b.h(0,a)===!0?B.dw:B.dv
return s}else throw q}}}
A.rl.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.c.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:151}
A.dy.prototype={}
A.kO.prototype={
aQ(a){var s=this.a,r=A.we(s,B.h4)
A.wf(s,r,0,a)
return r},
oX(a,b){var s,r,q,p=this,o=p.b,n=o.c0(a),m=A.J(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.jg(a,new A.dy(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.we(p.a,s)
o.k(0,r,q)}A.wf(p.a,q,0,b)},
hb(a,b){var s
this.b.c0(a)
s=this.c.h(0,a.a)
return s==null?b:s},
oC(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.hb(a,s)},
oK(a){var s=this.e
s===$&&A.h()
return s},
oM(a){var s=this.f
s===$&&A.h()
return s},
oE(a){var s=this.r
s===$&&A.h()
return s},
oI(a){var s=this.w
s===$&&A.h()
return s},
bo(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.G(0)
s=n.d
s===$&&A.h()
A.l5(q,s)
s=n.e
s===$&&A.h()
A.l5(q,s)
s=n.f
s===$&&A.h()
A.l5(q,s)
s=n.r
s===$&&A.h()
A.l5(q,s)
s=n.w
s===$&&A.h()
A.l5(q,s)},
eJ(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aQ($.x8())
i.e=i.aQ($.x5())
i.f=i.aQ($.x6())
i.r=i.aQ($.x4())
i.w=i.aQ($.x7())
for(s=i.b.bH(),r=s.$ti,s=new A.cF(s.a(),r.i("cF<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a5(o,new A.rq()))continue
l=A.we(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wf(p,l,k,j)}q.k(0,n.a,l)}},
gcb(){return this.b.bH().bs(0,0,new A.rp(),t.S)}}
A.ro.prototype={
$3(a,b,c){return new A.bl(A.c(a),A.c(b),A.aB(c))},
$S:147}
A.rq.prototype={
$1(a){return t.Fx.a(a)==null},
$S:136}
A.rp.prototype={
$2(a,b){var s
A.c(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:129}
A.et.prototype={
gnB(){return this.b.length}}
A.jH.prototype={
mu(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.q9(A.e([],t.pq),A.a2(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].ai(s,b)
o=s.mt(a,!1)
if(o.b.length!==0)return new A.jI(o,B.ip)
q=o.a
n=A.H(q)
m=new A.T(q,n.i("i(1)").a(new A.nV()),n.i("T<1,i>")).bv(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.ah(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.d(A.m('RenderFeature "'+k.ga6()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.S(l,new A.nW(o))
return new A.jI(o,l)}}
A.nV.prototype={
$1(a){return t.A.a(a).a},
$S:117}
A.nW.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.iR(s,new A.nT(a)),B.a.iR(s,new A.nU(b)))},
$S:115}
A.nT.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:8}
A.nU.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:8}
A.jI.prototype={}
A.en.prototype={
B(){return"FrameQueueState."+this.b}}
A.o0.prototype={}
A.nZ.prototype={
mp(a){if(a.length===0)throw A.d(A.an(a,"passId",null))
this.b=a
this.a.ce(a,A.zN())},
jT(){var s,r,q,p,o=t.z
o=A.p(o,o)
for(s=this.a,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aI(p.a,p.b,p.d))}return A.b2(o,t.N,t.pH)},
bz(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.y("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.c.T(a,3)*b}}
A.fF.prototype={}
A.au.prototype={
gbL(){var s=this.c,r=A.H(s)
return new A.K(s,r.i("n(1)").a(new A.pK()),r.i("K<1>"))},
gck(){var s=this.c,r=A.H(s)
return new A.K(s,r.i("n(1)").a(new A.pL()),r.i("K<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pK.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.I},
$S:20}
A.pL.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:20}
A.cd.prototype={
B(){return"GraphValidationFailureKind."+this.b}}
A.be.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hT.prototype={
B(){return"ResourceFormat."+this.b}}
A.cN.prototype={
B(){return"GraphStage."+this.b}}
A.aN.prototype={
j_(){var s=this
return new A.aN(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.aN&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gI(a){var s=this
return A.cB(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fw.prototype={
B(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.hd.prototype={}
A.q3.prototype={
au(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.CK(m.a,a.c,r.a(a.d.gZ().bO(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.hX){++m.e
throw q}else throw q}p=new A.hd(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
kX(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ah(s,s.r,s.e,a.$ti.i("ah<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bj.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.y("ProgramSource.id must not be empty",m))
s=t.S
r=A.a2(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.y('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.y('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a2(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.y('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.y('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.q7.prototype={}
A.b4.prototype={
af(){var s=this
return A.xu(B.dX,s.f,B.ak,B.a5,!0,!0,!0,!0,s.r,B.ao,B.ap,s.d,s.e,!0,!1,!1)}}
A.q9.prototype={
mt(a,b){var s=this.m4(t.Q.a(a),!1),r=this.a,q=A.H(r)
return new A.q8(A.aj(new A.K(r,q.i("n(1)").a(new A.qe()),q.i("K<1>")),t.A),s)},
m4(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.ka)
r=m.a
q=A.H(r)
p=q.i("K<1>")
o=A.J(new A.K(r,q.i("n(1)").a(new A.qd()),p),p.i("o.E"))
m.kD(o,a,s)
m.kH(o,s)
m.kJ(o,s)
m.kG(o,!1,s)
n=m.kL(o,s)
m.kI(o,n,s)
m.kK(o,s)
m.kF(o,n,s)
m.kE(o,s)
return s},
kD(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.O.dR(b)
if(p.a!==0)B.a.l(c,new A.be(B.hf,q.a,"missing capabilities: "+p.a7(0,", ")))}},
kH(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbL(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.be(B.ha,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
kJ(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.H(a),r=s.i("n(1)").a(new A.qc()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbL()
o=A.J(p,p.$ti.i("o.E"))
p=r.gck()
n=A.J(p,p.$ti.i("o.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.be(B.aR,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaN(o).a
l=B.a.gaN(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.be(B.aR,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.be(B.aR,r.a,"resolve source and destination must match format and extent"))}},
kG(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.I)B.a.l(c,new A.be(B.hd,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kL(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.p(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gck(),n=J.Q(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.be(B.h9,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kI(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbL(),p=J.Q(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.I)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.be(B.cu,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bG(a,m)>s)B.a.l(c,new A.be(B.cu,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
kK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbL(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.I)continue
for(l=q.gck(),k=J.Q(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.be(B.hc,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
kF(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbL(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.I)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gck().al(0,new A.qb(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.be(B.hb,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
kE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.p(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gck(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.k1(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a2(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbL(),p=J.Q(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.I)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cR(s,!1,!1,p)
s=a.length
i=A.cR(s,!1,!1,p)
h=new A.qa(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.be(B.he,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qe.prototype={
$1(a){t.A.a(a)
return A.w4()},
$S:8}
A.qd.prototype={
$1(a){t.A.a(a)
return A.w4()},
$S:8}
A.qc.prototype={
$1(a){return t.A.a(a).f},
$S:8}
A.qb.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:20}
A.qa.prototype={
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
r=A.im(r,r.r,A.q(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:40}
A.q8.prototype={}
A.lp.prototype={$ic0:1,
ga6(){return this.a},
gD(){return this.b},
geU(){return this.c}}
A.hQ.prototype={
hk(a){var s,r,q=a.c,p=q.a
if(!p.gam(0))A.j(A.y("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.y("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.y(u.u,null))
s=this.a.c0(a.a)
q=q.aa()
p=s.d.gav()
r=A.H(p)
return A.bd(new A.T(p,r.i("M(1)").a(q.gaA()),r.i("T<1,M>")))},
giV(){return new A.cm(this.nK(),t.Br)},
nK(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$giV(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bH(),n=o.$ti,o=new A.cF(o.a(),n.i("cF<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
i=i.aa()
f=f.gav()
d=A.H(f)
r=5
return a.b=new A.lp(h,g,A.bd(new A.T(f,d.i("M(1)").a(i.gaA()),d.i("T<1,M>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCc:1}
A.qg.prototype={
$3(a,b,c){return new A.cu(A.c(a),A.c(b),A.aB(c))},
$S:103}
A.qp.prototype={
jc(a,b){var s,r
if(this.w)A.j(A.m("resource library is disposed"))
s=this.a
a.C()
r=s.b.aD(a,b)
s.c.k(0,r.a,s.bl(a))
this.e.l(0,r)
return r},
ov(a){if(this.w)A.j(A.m("resource library is disposed"))
this.a.b3(a)
this.e.a1(0,a)},
ou(a){var s
if(this.w)A.j(A.m("resource library is disposed"))
a.C()
s=this.b.a.aD(a,null)
this.f.l(0,s)
return s},
eI(a,b,c){var s,r
if(this.w)A.j(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.j(A.y("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.j(A.y("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aD(new A.dy(new A.jO(c,b,1,!1,B.au,B.au,B.cr,1),A.cR(1,null,!1,t.Fx),!1),a)
this.r.l(0,r)
return r},
bo(){var s,r,q,p,o,n,m,l,k,j,i=this
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
p.b.b3(k)}r=i.f
q=A.J(r,A.q(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.b3(q[l])
q=i.e
o=A.J(q,A.q(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.b3(o[l])
s.G(0)
r.G(0)
q.G(0)
p.bo()
i.w=!0}}
A.t0.prototype={}
A.lQ.prototype={$ic0:1,
ga6(){return this.a},
gD(){return this.b},
geU(){return this.c}}
A.um.prototype={
$1(a){var s=this.a.w.a.eL(a),r=s.b!=null,q=r?s.d:s.e
return new A.hS(s.c,r,q,s.f)},
$S:94}
A.un.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().j0(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().j0(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:87}
A.ul.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.ue.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gO(r)},
$S:71}
A.uf.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.b1
s=q.b.z
r=s.length===0?null:B.a.gO(s)
return A.G7(s,3,q.a.d,r)},
$S:70}
A.uk.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.u9.prototype={
$0(){return this.a.at.a},
$S:68}
A.ub.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.ua.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uj.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.u7.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.u8.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.ug.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uh.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.ui.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.ud.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uc.prototype={
$0(){return this.a.at.w},
$S:46}
A.uo.prototype={
$0(){return this.a},
$S:47}
A.tt.prototype={}
A.lB.prototype={$iCb:1}
A.lm.prototype={$iBo:1}
A.qv.prototype={
gbd(){var s=this.w
return s==null?A.j(A.m("renderer is not initialized")):s},
iT(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bm)throw A.d(A.m("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.aa)throw A.d(A.m("renderer device is context lost"))
m.e=B.kt
try{m.r=s.j9()
r=m.b
q=A.pH(a)
p=r.a
if(p.a!=null)A.j(A.m("configuration state is already initialized"))
a.C()
p.a=a
A.pH(a)
p.d=1
r.b.iS(q)
r=A.BN()
m.w=new A.qp(A.BP(s),r,A.Cp(s),A.a2(t.kc),A.a2(t.pw),A.a2(t.Aj))
r=new A.kA()
p=new A.ol(s,r)
q=A.pH(a)
o=p.fs(q,a)
r.iS(q)
p.c=new A.kt(new A.pZ(q),o)
m.x=p
m.y=new A.q3(s,A.p(t.N,t.CH))
m.as=a
A.z0(m)
m.e=B.bn}catch(n){s=m.y
if(s!=null){r=s.b
s.kX(new A.as(r,A.q(r).i("as<2>")))
r.G(0)}s=m.x
if(s!=null)s.bo()
s=m.w
if(s!=null)s.bo()
m.w=null
m.e=B.bm
throw n}return A.vR(t.H)},
mn(a,b){var s,r,q,p,o,n,m=this,l=null
m.lL()
m.ct()
r=B.a.q(m.d,a)
if(!r)throw A.d(A.y("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gam(0))A.j(A.y("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gam(0)||q.gca()<1e-12)A.j(A.y("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.y("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.y("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gam(0)||!r.b.gam(0)||!r.c.gam(0))A.j(A.y("CameraView matrices must be finite",l))
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
if((r==null?A.j(A.m("renderer is not initialized")):r).z)m.b$=m.a.mo()
return s}catch(n){if(o.b!==B.at)A.j(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.fQ
m.fa()
m.ax=m.at=null
throw n}},
nk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.ct()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.at)A.j(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.i2(l,0,A.ec(m.c,"count",t.S),A.H(l).c).bP(0,!1)
m.b=B.fP
q=k
try{p=A.E4(a1,r,s,q)
o=p.a.jT()
m=o.gJ().d_(0,new A.qw())
l=m.$ti
n=new A.cz(m,l.i("aI(1)").a(new A.qx()),l.i("cz<1,aI>")).bs(0,B.cb,new A.qy(),t.pH)
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
return new A.o1(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.l8(s.e)
a1.ax=a1.at=null}},
lL(){var s,r,q,p=this
if(p.e!==B.dg)return
if(p.a.b===B.aa)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.w)A.j(A.m("resource library is disposed"))
s.a.eJ()
s.c.eJ()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.m("GPU resource adapter is not initialized"))
s.c=new A.kt(q.a,s.fs(A.pH(r),r))
s=p.y
s.c=null
s.b.G(0)
A.z0(p)
p.e=B.bn},
ct(){var s=this,r=s.e
if(r!==B.bn)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.aa){s.l_()
s.e=B.dg
throw A.d(A.m("renderer context lost"))}}}
A.qw.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.qx.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.qy.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aI(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lz.prototype={}
A.tc.prototype={
l8(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.m(u.k))
r=s.hd(o)
if(r.b)A.j(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lz(o))}catch(q){p.dq(o)}},
fa(){var s=this.b$
this.b$=null
if(s!=null)this.dq(s)},
l_(){var s,r,q
this.fa()
s=this.a$
r=J.xG(s.slice(0),A.H(s).c)
B.a.G(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.dq(r[q].b)},
dq(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hd(a).a)}catch(r){}}}
A.lF.prototype={}
A.hY.prototype={
B(){return"ShadowCasterLod."+this.b}}
A.bN.prototype={
F(a,b){var s,r=this
t.BB.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$ib1:1}
A.bL.prototype={
F(a,b){var s
t.z3.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$ib1:1}
A.aO.prototype={}
A.vF.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.F(0,s.a(b).a)},
$S:51}
A.vG.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.vD.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.vE.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.nB.prototype={}
A.nA.prototype={}
A.j8.prototype={
gav(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.M(o,n,p),new A.M(r,n,p),new A.M(o,q,p),new A.M(r,q,p),new A.M(o,n,s),new A.M(r,n,s),new A.M(o,q,s),new A.M(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.ey.prototype={}
A.fk.prototype={
B(){return"FrustumTest."+this.b}}
A.o2.prototype={
oT(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.cc
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.fR:B.fS}}
A.o3.prototype={
$4(a,b,c,d){var s=new A.M(a,b,c),r=new A.ey(s,d),q=Math.sqrt(s.gca())
if(q<1e-9)s=r
else{s=1/q
s=new A.ey(new A.M(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dn.prototype={
a3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.dn(h)},
je(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
eB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.dn(h)},
gam(a){return B.q.a5(this.a,new A.pp())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.pp.prototype={
$1(a){return isFinite(A.bB(a))},
$S:5}
A.kw.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.kP.prototype={
C(){var s=this.a
if(!s.gam(0))throw A.d(A.y("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.y("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.y(u.u,null))},
aa(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.xQ(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.xQ(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.M.prototype={
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bm(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.M(s*r-q*p,q*o-n*r,n*p-s*o)},
gca(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gca())},
gam(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga9(){var s=this,r=Math.sqrt(s.gca())
return r<1e-9?B.af:new A.M(s.a/r,s.b/r,s.c/r)},
a_(a,b){if(b==null)return!1
return b instanceof A.M&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cB(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.id.prototype={
B(){return"_BloomBlurAxis."+this.b}}
A.hb.prototype={
ga6(){return this.f},
ai(a,b){B.a.l(a.a,new A.au(this.f,B.K,A.e([new A.O(this.x,B.i),new A.O(this.y,B.j)],t.C),!1))},
ah(a){var s=this,r=s.a.au(new A.bj(s.e,s.b,s.c,B.v,B.cO,B.cK)),q=A.d2(s.d),p=t.n,o=s.r===B.dG?new Float32Array(A.a1(A.e([1/s.Q,0],p))):new Float32Array(A.a1(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.ld(new A.b4(s.f,A.e([new A.O(s.x,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iak:1}
A.ld.prototype={
ak(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c5(r,a.an(o.r).b)
A.bn(r,o.a.af())
A.dx(r,B.a8,1,0,0,0)
A.ck(r,o.b.b)
q=t._
p=o.d
if(o.e)A.CG(r,0,q.a(p.$0()))
else A.aE(r,0,q.a(p.$0()))
A.v(r,"uSource",B.w)
A.v(r,"uTexelStep",new A.A(B.aB,o.f))
A.bz(r,o.c)
s.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.jj.prototype={
ga6(){return"bloomComposite"},
ai(a,b){B.a.l(a.a,new A.au("bloomComposite",B.K,A.e([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ah(a){var s=this,r="bloomComposite",q=s.a.au(new A.bj(r,s.b,s.c,B.v,B.j_,B.iJ)),p=A.d2(s.d),o=s.w,n=A.e([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.j)],t.C)
return A.e([new A.le(new A.b4(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iak:1}
A.le.prototype={
ak(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c5(r,a.cZ(q.f).b)
A.CH(r,1)
A.bn(r,B.ew)
A.ck(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.w)
A.v(r,"uBloomStrength",new A.A(B.e,p))
A.bz(r,q.c)
s.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.jw.prototype={
ga6(){return"depthPrepass"},
ai(a,b){B.a.l(a.a,new A.au("depthPrepass",B.h6,A.e([new A.O(this.w,B.j)],t.C),!1))},
ah(a){var s=this,r="depthPrepass",q=s.a.au(new A.bj(r,s.b,s.c,B.cN,B.cL,B.i8))
return A.e([new A.lh(new A.b4(r,A.e([new A.O(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iak:1}
A.lh.prototype={
ak(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c5(a1,a2.an("sceneDepth").b)
A.bn(a1,d.a.af())
A.dx(a1,B.aM,1,0,0,0)
A.ck(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.A(B.e,a0.Q))
A.v(a1,"uAlbedo",B.w)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.v(a1,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(a))))
A.v(a1,"uModel",new A.A(B.t,new Float32Array(A.a1(i.c.aa().a))))
A.vB(b,k,!1)
d.kY(b,j.gD().b,p)
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
n.bz(g,f)}else{if(a1.b!==B.h)A.j(A.m(c))
m.drawArraysInstanced(A.c(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bz(g,f)}}},
kY(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.A(B.e,0))
A.v(q,"uAffineWarpStrength",new A.A(B.e,0))
s=this.a.af()
A.bn(q,r.dx?s.eT(!1):s)},
$iac:1,
gD(){return this.a}}
A.ig.prototype={
B(){return"_DofBlurAxis."+this.b}}
A.hh.prototype={
ga6(){return this.f},
ai(a,b){B.a.l(a.a,new A.au(this.f,B.K,A.e([new A.O(this.w,B.i),new A.O(this.x,B.j)],t.C),!1))},
ah(a){var s=this,r=s.a.au(new A.bj(s.e,s.b,s.c,B.v,B.cO,B.cK)),q=A.d2(s.d),p=t.n,o=s.r===B.dH?new Float32Array(A.a1(A.e([1/s.z,0],p))):new Float32Array(A.a1(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.li(new A.b4(s.f,A.e([new A.O(s.w,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iak:1}
A.li.prototype={
ak(a){return},
$iac:1,
gD(){return this.a}}
A.jA.prototype={
ga6(){return"dofComposite"},
ai(a,b){var s=this
B.a.l(a.a,new A.au("dofComposite",B.K,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1))},
ah(a){var s=this,r="dofComposite",q=s.a.au(new A.bj(r,s.b,s.c,B.v,B.iY,B.hY)),p=A.d2(s.d)
return A.e([new A.lj(new A.b4(r,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iak:1}
A.lj.prototype={
ak(a){var s,r=this,q=a.an("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c5(n,q.b)
A.bn(n,r.a.af())
A.ck(n,r.b.b)
s=t._
A.aE(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.w)
A.aE(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ae)
A.aE(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.dz)
A.v(n,"uNear",new A.A(B.e,o.f))
A.v(n,"uFar",new A.A(B.e,o.r))
A.v(n,"uFocusDistance",new A.A(B.e,r.w))
A.v(n,"uFocusRange",new A.A(B.e,r.x))
A.v(n,"uStrength",new A.A(B.e,0))
A.bz(n,r.c)
p.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.jR.prototype={
ga6(){return"grade"},
ai(a,b){B.a.l(a.a,new A.au("grade",B.K,A.e([new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ah(a){var s=this,r=s.a.au(new A.bj("grade",s.b,s.c,B.v,B.iW,B.iK)),q=A.d2(s.d),p=s.r,o=s.w
return A.e([new A.lo(new A.b4("grade",A.e([new A.O(p,B.i),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iak:1}
A.lo.prototype={
ak(a){var s=this,r=a.an(s.f.a),q=a.b,p=q.a
A.c5(p,a.an(s.r.a).b)
A.bn(p,s.a.af())
A.ck(p,s.b.b)
A.aE(p,0,r.b)
A.v(p,"uScene",B.w)
A.aE(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ae)
A.v(p,"uLutSize",new A.A(B.e,s.e))
A.v(p,"uStrength",new A.A(B.e,a.c.e.y))
A.bz(p,s.c)
q.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.kd.prototype={
ga6(){return"msaaResolve"},
ai(a,b){B.a.l(a.a,new A.au("msaaResolve",B.h7,A.e([new A.O(this.b,B.i),new A.O(this.c,B.j)],t.C),!0))},
ah(a){var s=this.b,r=this.c
return A.e([new A.lv(new A.b4("msaaResolve",A.e([new A.O(s,B.i),new A.O(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iak:1}
A.lv.prototype={
ak(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cZ(this.c),j=a.cZ(this.d),i=this.b
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
A.f9.prototype={}
A.jk.prototype={
an(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cZ(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.an(s)},
$iCa:1}
A.w5.prototype={}
A.hM.prototype={
ga6(){return"present"},
ai(a,b){B.a.l(a.a,new A.au("present",B.h8,A.e([new A.O(this.f,B.i)],t.C),!1))},
ah(a){var s=this,r=s.a.au(new A.bj("present",s.b,s.c,B.v,B.j6,B.ig)),q=A.d2(s.d),p=s.f
return A.e([new A.lC(new A.b4("present",A.e([new A.O(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iak:1}
A.lC.prototype={
ak(a){var s,r=this,q=a.cZ(r.d),p=a.b,o=p.a
A.c5(o,null)
A.bn(o,r.a.af())
A.ck(o,r.b.b)
A.bz(o,r.c)
A.aE(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.A(B.e,s.a))
A.v(o,"uVignette",new A.A(B.e,s.e))
A.v(o,"uGrain",new A.A(B.e,s.f))
A.v(o,"uRainIntensity",new A.A(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.A(B.e,s.w))
A.v(o,"uOutputEncoding",new A.A(B.e,r.e===B.aN?1:0))
A.v(o,"uToneMap",B.dy)
p.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.kv.prototype={
ga6(){return"ps1Quantize"},
ai(a,b){B.a.l(a.a,new A.au("ps1Quantize",B.K,A.e([new A.O(this.e,B.i),new A.O(this.f,B.j)],t.C),!1))},
ah(a){var s=this,r="ps1Quantize",q=s.a.au(new A.bj(r,s.b,s.c,B.v,B.j1,B.hR)),p=A.d2(s.d),o=s.e,n=s.f
return A.e([new A.lD(new A.b4(r,A.e([new A.O(o,B.i),new A.O(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iak:1}
A.lD.prototype={
ak(a){var s=this,r=a.an(s.d.a),q=a.b,p=q.a
A.c5(p,a.an(s.e.a).b)
A.bn(p,s.a.af())
A.ck(p,s.b.b)
A.aE(p,0,r.b)
A.v(p,"uScene",B.w)
A.v(p,"uQuantizationBits",new A.A(B.e,a.c.e.as))
A.v(p,"uDitherStrength",new A.A(B.e,0))
A.bz(p,s.c)
q.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.eG.prototype={}
A.kE.prototype={
ga6(){return"shadow"},
ai(a,b){B.a.l(a.a,new A.au("shadowCaster",B.h5,A.e([new A.O(this.z,B.j)],t.C),!1))},
ah(a){var s=this,r="shadowCaster",q=s.a.au(new A.bj(r,s.b,s.c,B.cN,B.cL,B.iI))
return A.e([new A.lG(new A.b4(r,A.e([new A.O(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
$iak:1}
A.lG.prototype={
ak(a){var s,r,q,p,o=this,n=a.an("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c5(s,n.b)
A.bn(s,o.a.af())
A.dx(s,B.aM,1,0,0,0)
return}r=A.y5(l)
o.x.$1(r)
s=m.a
A.c5(s,n.b)
A.bn(s,o.a.af())
A.dx(s,B.aM,1,0,0,0)
A.ck(s,o.b.b)
A.v(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.l0(m,s[p],l,r)},
h3(a,b){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.A(B.e,0))
s=this.a.af()
A.bn(q,r.dx?s.eT(!1):s)},
l0(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.v(s,"uUseInstances",B.bB)
n.fZ(a,b.gD().c,d)
n.h3(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bz(s,q.a)
s=q.b
r=q.c
if(s)a.dT(r,q.d,0)
else a.aF(r,0)}else if(b instanceof A.et){p=b.a
if(!p.gD().r)return
if(n.m1(b,c)===B.l7)return
n.fZ(a,p.gD().c,d)
A.vB(a,b,!1)
n.h3(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bz(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dU(r,q.d,o,0)
else a.dS(r,0,o)}else throw A.d(A.y("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.f1(b).p(0),null))},
m1(a,b){return B.l6},
fZ(a,b,c){var s=a.a
A.v(s,"uModel",new A.A(B.t,new Float32Array(A.a1(b.aa().a))))
A.v(s,"uLightViewProjection",new A.A(B.t,new Float32Array(A.a1(c.a.a))))},
$iac:1,
gD(){return this.a}}
A.uU.prototype={
$1(a){return this.a.a=a},
$S:57}
A.uV.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kF.prototype={
ga6(){return"shadowedWorld"},
ai(a,b){var s=this,r=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.j))
B.a.l(a.a,new A.au("shadowedWorld",B.ct,r,!1))},
ah(a){var s=this,r="shadowedWorld",q=s.a.au(new A.bj(r,s.b,s.c,B.j3,B.iX,B.hO)),p=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.j))
return A.e([new A.lH(new A.b4(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$iak:1}
A.lH.prototype={
ak(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.an("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c5(b1,a4.b)
A.bn(b1,a2.a.af())
s=a8.a
A.dx(b1,B.c_,1,s.c,s.b,s.a)
A.ck(b1,a2.b.b)
A.v(b1,"uAlbedo",B.w)
A.v(b1,"uNormalMap",B.lt)
A.v(b1,"uOrmMap",B.lu)
A.v(b1,"uEmissiveMap",B.lv)
A.v(b1,"uLightmap",B.lw)
s=t._
A.aE(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ae)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.A(B.aB,new Float32Array(A.a1(A.e([1/a2.ch,1/a2.CW],r)))))
A.aE(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.dz)
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
p=J.Q(p==null?B.b1:p)
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
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.r)(b1),++a1)a2.h4(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.r)(a6),++a1)a2.h4(a5,a6[a1],r)},
h4(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.bB)
m.h5(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.h_(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bz(s,o.a)
s=o.b
r=o.c
if(s)a.dT(r,o.d,0)
else a.aF(r,0)}else if(b instanceof A.et){n=b.a
m.h5(a,n.gD().c)
A.vB(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.h_(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bz(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dU(r,o.d,q,0)
else a.dS(r,0,q)}else throw A.d(A.y("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.f1(b).p(0),null))},
h_(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
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
A.v(o,"uUvScaleOffset",new A.A(B.ls,new Float32Array(A.a1(A.e([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.A(B.e,1))
A.v(o,"uRoughness",new A.A(B.e,q.z))
A.v(o,"uMetallic",new A.A(B.e,0))
A.v(o,"uOcclusionStrength",new A.A(B.e,1))
A.v(o,"uLightmapIntensity",new A.A(B.e,0))
A.v(o,"uReceivesShadow",new A.A(B.e,1))
A:{p=r
if(B.aO===c){switch(d.a){case 0:p=B.ey
break
case 1:p=B.ex
break}break A}if(B.R===c||B.ev===c){p=s.a.af()
break A}}A.bn(o,q.dx?p.eT(!1):p)},
h5(a,b){var s=b.aa(),r=a.a
A.v(r,"uModel",new A.A(B.t,new Float32Array(A.a1(s.a))))
A.v(r,"uNormalMatrix",new A.A(B.t,new Float32Array(A.a1(s.eB().a))))},
$iac:1,
gD(){return this.a}}
A.kI.prototype={
ga6(){return"ssaoOcclusion"},
ai(a,b){B.a.l(a.a,new A.au("ssaoOcclusion",B.cs,A.e([new A.O(this.w,B.j)],t.C),!1))},
ah(a){var s=this,r="ssaoOcclusion",q=s.a.au(new A.bj(r,s.b,s.c,B.v,B.j0,B.hN)),p=A.d2(s.d)
return A.e([new A.lK(new A.b4(r,A.e([new A.O(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iak:1}
A.lK.prototype={
ak(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c5(m,a.an("ssaoRaw").b)
A.bn(m,p.a.af())
if(n<=0){A.dx(m,B.a8,1,1,1,1)
return}A.dx(m,B.a8,1,0,0,0)
s=p.e.$0()
A.ck(m,p.b.b)
A.aE(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.w)
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
A.bz(m,p.c)
o.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.kH.prototype={
ga6(){return"ssaoBlur"},
ai(a,b){B.a.l(a.a,new A.au("ssaoBlur",B.cs,A.e([new A.O(this.y,B.i),new A.O(this.z,B.j)],t.C),!1))},
ah(a){var s=this,r="ssaoBlur",q=s.a.au(new A.bj(r,s.b,s.c,B.v,B.iR,B.iM)),p=A.d2(s.d)
return A.e([new A.lJ(new A.b4(r,A.e([new A.O(s.y,B.i),new A.O(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iak:1}
A.lJ.prototype={
ak(a){var s,r,q=this,p=a.b,o=p.a
A.c5(o,a.an("ssaoBlurred").b)
A.bn(o,q.a.af())
if(a.c.e.c<=0){A.dx(o,B.a8,1,1,1,1)
return}A.dx(o,B.a8,1,0,0,0)
s=q.f.$0()
A.ck(o,q.b.b)
r=t._
A.aE(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.w)
A.aE(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ae)
A.v(o,"uTexelSize",new A.A(B.aB,new Float32Array(A.a1(A.e([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.A(B.e,s.f))
A.v(o,"uFar",new A.A(B.e,s.r))
A.bz(o,q.c)
p.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.kW.prototype={
ga6(){return"vhs"},
ai(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.au("vhs",B.K,A.e([new A.O(this.r,B.i),new A.O(s,B.I),new A.O(s,B.j)],t.C),!1))},
ah(a){var s=this,r=s.a.au(new A.bj("vhs",s.b,s.c,B.v,B.iU,B.hT)),q=A.d2(s.d),p=s.r,o=s.w
return A.e([new A.lT(new A.b4("vhs",A.e([new A.O(p,B.i),new A.O(o,B.I),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iak:1}
A.lT.prototype={
ak(a){var s,r=this,q=a.an(r.f.a),p=a.an(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c5(m,p.b)
A.bn(m,r.a.af())
A.ck(m,r.b.b)
A.aE(m,0,q.b)
A.v(m,"uScene",B.w)
A.aE(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ae)
A.v(m,"uTime",new A.A(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.A(B.e,n.at))
A.v(m,"uTrackingWeight",new A.A(B.e,l))
A.v(m,"uNoiseWeight",new A.A(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.A(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.A(B.e,n.CW))
A.v(m,"uGhostWeight",new A.A(B.e,s))
A.bz(m,r.c)
o.aF(3,0)},
$iac:1,
gD(){return this.a}}
A.hS.prototype={}
A.l6.prototype={
ga6(){return"world"},
ai(a,b){B.a.l(a.a,new A.au("worldOpaqueTransparent",B.ct,A.e([new A.O(this.e,B.j)],t.C),!1))},
ah(a){var s=this,r=s.a.au(new A.bj("safeWorld",s.b,s.c,B.j5,B.v,B.hM)),q=s.e
return A.e([new A.lW(new A.b4("worldOpaqueTransparent",A.e([new A.O(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iak:1}
A.lW.prototype={
ak(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c5(j,a.an(n.d).b)
A.bn(j,n.a.af())
s=k.a
A.dx(j,B.c_,1,s.c,s.b,s.a)
A.ck(j,n.b.b)
A.v(j,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a1
s=t.n
A.v(j,"uLightDir",new A.A(B.p,new Float32Array(A.a1(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.A(B.p,new Float32Array(A.a1(A.e([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.A(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.fw(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.fw(m,l[o])},
fw(a,b){var s,r,q,p,o,n=this
if(b instanceof A.et){s=b.a
n.h1(a,s.gD().c)
A.vB(a,b,!0)
r=n.c.$1(s.gD().a)
A.bz(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dU(p,r.d,o,0)
else a.dS(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.bB)
n.h1(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bz(q,r.a)
q=r.b
p=r.c
if(q)a.dT(p,r.d,0)
else a.aF(p,0)}else throw A.d(A.y("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.f1(b).p(0),null))},
h1(a,b){var s=b.aa(),r=a.a
A.v(r,"uModel",new A.A(B.t,new Float32Array(A.a1(s.a))))
A.v(r,"uNormalMatrix",new A.A(B.t,new Float32Array(A.a1(s.eB().a))))},
$iac:1,
gD(){return this.a}}
A.ni.prototype={
cl(a){var s,r,q
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
return new A.ez(q,s)},
ju(a){var s,r=this.cl(a).a
A:{if(B.bh===r){s=B.k6
break A}if(B.bg===r){s=B.k5
break A}s=B.ay
break A}return s}}
A.jN.prototype={
B(){return"GpuBufferUsage."+this.b}}
A.ho.prototype={
B(){return"GpuBufferKind."+this.b}}
A.jP.prototype={
B(){return"GpuTextureFilter."+this.b}}
A.jQ.prototype={
B(){return"GpuTextureWrap."+this.b}}
A.jM.prototype={}
A.jO.prototype={}
A.eq.prototype={
B(){return"GpuTargetAttachment."+this.b}}
A.hq.prototype={}
A.hp.prototype={
B(){return"GpuDeviceStatus."+this.b}}
A.eF.prototype={
B(){return"ShaderCompileStage."+this.b}}
A.hX.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cX.prototype={
B(){return"UniformType."+this.b}}
A.A.prototype={}
A.fc.prototype={
B(){return"ClearMask."+this.b}}
A.jx.prototype={
aF(a,b){var s=this.a
if(s.b!==B.h)A.j(A.m(u.k))
s.a.drawArrays(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bz(a,1)},
dS(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.m(u.k))
s.a.drawArraysInstanced(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bz(a,c)},
dT(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bz(a,1)},
dU(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.ai(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bz(a,c)},
$iB7:1}
A.kt.prototype={
j0(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.ol.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
bo(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.kW(s.b)
r.b.bo()
r.c=null
r.e=!0},
fs(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.p(b,a),a1=A.e([],t.C1)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("K<1>")
s=new A.K(l,j.a(new A.om()),k)
for(i=s,h=J.Q(i.a),i=new A.S(h,i.b,i.$ti.i("S<1>")),g=this.a;i.m();){r=h.gn()
q=A.CL(g,this.kZ(r,a3))
J.h8(a1,q)
J.bK(a0,r,q)}f=A.J(new A.K(l,j.a(new A.on()),k),k.i("o.E"))
B.a.X(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.r)(l),++e){o=l[e]
n=A.zU(J.AC(o,11))
j=J.aG(a0,"sceneColor")
j.toString
J.bK(a0,o,j)}b=A.b2(a0,b,a)
return b}catch(d){for(b=a1,l=A.H(b).i("hU<1>"),b=new A.hU(b,l),b=new A.aS(b,b.gt(0),l.i("aS<a6.E>")),k=this.a,j=t.V,l=l.i("a6.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.wg(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
kZ(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.hq(512,512,1,B.aQ,!0)
if(a==="sceneDepth")return new A.hq(o,n,1,B.aQ,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.W(a,"sceneColor#")
return new A.hq(r,q,1,p?B.cq:B.h2,p)},
kW(a){var s,r,q,p,o,n=A.k8(t.mf.a(a).gaB(),t._)
for(n=A.im(n,n.r,A.q(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wg(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.om.prototype={
$1(a){return!B.b.W(A.x(a),"sceneColor#")},
$S:3}
A.on.prototype={
$1(a){return B.b.W(A.x(a),"sceneColor#")},
$S:3}
A.fJ.prototype={
B(){return"_SlotState."+this.b}}
A.e5.prototype={
sb0(a){this.c=this.$ti.i("1?").a(a)}}
A.cT.prototype={
aD(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.e5(B.aF,n.i("e5<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.mu
p.sb0(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c_(a){return this.aD(a,null)},
a0(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dR(B.cx,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dR(B.cy,a))
s=q.b
if(s===B.aG||s===B.aF)throw A.d(A.dR(B.aw,a))},
c0(a){var s,r,q=this.$ti
q.c.a(a)
this.a0(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
jg(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a0(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].sb0(b)},
b3(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dR(B.cx,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dR(B.cy,a))
r=q.b
if(r===B.aG||r===B.aF)throw A.d(A.dR(B.hi,a))
q.b=B.aG
q.sb0(null)
B.a.l(p.c,s);++p.e},
bH(){return new A.cm(this.nL(),this.$ti.i("cm<+(1,2)>"))},
nL(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bH(a,b,c){if(b===1){p.push(c)
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
A.jh.prototype={
B(){return"BlendEquation."+this.b}}
A.ei.prototype={
B(){return"BlendFactor."+this.b}}
A.jt.prototype={
B(){return"CullFace."+this.b}}
A.jv.prototype={
B(){return"DepthFunc."+this.b}}
A.fh.prototype={
eT(a){var s=this
return A.xu(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b5.prototype={
B(){return"StateField."+this.b}}
A.rP.prototype={
nc(a){var s,r=this.a
if(r==null)return A.hA(B.iF,t.qL)
s=A.a2(t.qL)
if(r.a!==a.a)s.l(0,B.bt)
if(r.b!==a.b)s.l(0,B.bu)
if(r.c!==a.c)s.l(0,B.bv)
if(r.d!==a.d)s.l(0,B.bw)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bx)
if(r.r!==a.r)s.l(0,B.by)
if(r.w!==a.w)s.l(0,B.bz)
if(r.x!==a.x)s.l(0,B.bA)
return s}}
A.dz.prototype={$idl:1}
A.iK.prototype={}
A.iJ.prototype={}
A.lV.prototype={}
A.l4.prototype={
kq(a){var s=this,r=A.a(s.a.canvas)
s.c=A.Z(new A.rN(s))
s.d=A.Z(new A.rO(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
j9(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bT(A.c(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bT(A.c(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bT(A.c(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bT(A.c(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bT(A.c(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fP(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.d7(e.getParameter(A.c(k.WebGL2RenderingContext.RENDERER)))
m=A.d7(e.getParameter(A.c(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.q5("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bT(a){var s=A.d7(this.a.getParameter(a))
return typeof s=="number"?B.d.aY(s):0},
fP(a){var s=A.d7(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBu:1}
A.rN.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.aa},
$S:2}
A.rO.prototype={
$1(a){A.a(a)
this.a.b=B.h},
$S:2}
A.tC.prototype={
mo(){var s,r=this
if(r.b!==B.h)A.j(A.m(u.k))
s=r.w?A.k(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dz(new A.lV(s))},
hd(a){var s=a.a
if(!(s instanceof A.lV))throw A.d(A.an(a,"query","is not a GPU timer query"))
return s}}
A.lU.prototype={}
A.jz.prototype={
A(){var s=this
return A.N(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.je.prototype={
gnS(){var s=this.CW
return new A.as(s,A.q(s).i("as<2>")).bs(0,0,new A.mV(),t.i)},
k7(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
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
j.k2!==$&&A.L()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.L()
j.k3=p
A.k(q.connect(p))
A.k(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.k(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.L()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.L()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.L()
j.p1=r
A.k(p.connect(q))
A.k(i.connect(A.a(s.destination)))
j.fg()},
fg(){var s,r=this,q=r.k4
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
cg(){var s=this.a
if(A.x(s.state)==="suspended")A.a(s.resume())},
h6(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.iZ.h(0,a)
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
lb(){var s,r,q,p,o,n,m,l=this.a,k=A.aA(l.sampleRate),j=B.d.aJ(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cV()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
eD(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.cV()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.k(r.connect(q))
A.k(q.connect(p.h6(a)))
r.onended=A.Z(new A.mX(r,q))
r.start()},
j6(a){return this.eD(a,1)},
j7(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.cV()*0.12)
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
l=j.fq(j.b.j5(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fL(r,q,n,o,p,e,B.d.H(m,0,1)))
r.onended=A.Z(new A.mW(j,o))
A.k(r.connect(q))
A.k(q.connect(n))
A.k(n.connect(o))
A.k(o.connect(p))
A.k(p.connect(j.h6(a)))
r.start()},
on(a,b,c,d){return this.j7(a,b,c,1,d,null,null,null)},
fq(a){var s,r,q,p,o,n,m,l
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
f8(a){var s,r,q,p,o=this
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
q.onended=A.Z(new A.mY(o,q,p))
q.start()
o.cy=q},
d4(a){if(this.p2===a)return
this.p2=a
this.fg()},
jF(a){var s,r,q=this
q.d4(a.b===B.bL)
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
bf(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.H(c==null?q.fr:c,0,1)
q.fx=B.d.H(f==null?q.fx:f,0,1)
q.fy=B.d.H(b==null?q.fy:b,0,1)
q.go=B.d.H(a==null?q.go:a,0,1)
q.id=B.d.H(d==null?q.id:d,0,1)
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
f0(a){var s=null
return this.bf(s,s,s,s,a,s)},
jC(a){var s=null
return this.bf(s,s,a,s,s,s)},
jE(a){var s=null
return this.bf(s,s,s,s,s,a)},
jB(a){var s=null
return this.bf(s,a,s,s,s,s)},
jA(a){var s=null
return this.bf(a,s,s,s,s,s)},
jD(a){var s=null
return this.bf(s,s,s,a,s,s)},
jz(a){if(this.ay===a)return
this.ay=a
this.bB()},
bB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.ci(p,g)
m=n==null?i.fq(h.j5(p,g)):new A.ap(n.c,n.d,n.e)
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
q.r=B.d.H(m.c,0,1)}}}
A.mV.prototype={
$2(a,b){return Math.max(A.bB(a),t.jS.a(b).r)},
$S:60}
A.mU.prototype={
$1(a){return this.jn(t.q.a(a))},
jn(a){var s=0,r=A.bF(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bI(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.am(A.aZ(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.am(A.aZ(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.am(A.aZ(A.a(j.a.decodeAudioData(m)),k),$async$$1)
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
case 5:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$$1,r)},
$S:61}
A.mX.prototype={
$1(a){A.a(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.mW.prototype={
$1(a){var s
A.a(a)
s=this.a.CW.a1(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.mY.prototype={
$1(a){var s,r
A.a(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.fL.prototype={}
A.jf.prototype={
B(){return"AudioCategory."+this.b}}
A.mK.prototype={
k9(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.fK)
if(!B.a.a5(A.e([d.a,d.b,d.c],t.n),new A.mL()))throw A.d(B.f5)}}
A.mL.prototype={
$1(a){return isFinite(A.bB(a))},
$S:5}
A.ms.prototype={
k6(a,b){if(this.a.length===0)throw A.d(B.eW)
if(!B.a.a5(A.e([a.a,a.b,a.c],t.n),new A.mt()))throw A.d(B.fa)}}
A.mt.prototype={
$1(a){return isFinite(A.bB(a))},
$S:5}
A.h9.prototype={
C(){var s=t.n
if(B.a.M(A.e([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mu()))throw A.d(B.fq)
s=B.a.M(A.e([0,0.55,1],s),new A.mv())
if(s)throw A.d(B.fB)},
ci(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ap(-1.5,2e4,0)
if(a.ay)return new A.ap(-28,320,1)
return new A.ap(-12,1100,0.55)},
oV(a){return this.ci(a,null)}}
A.mu.prototype={
$1(a){return!isFinite(A.bB(a))},
$S:5}
A.mv.prototype={
$1(a){A.bB(a)
return a<0||a>1},
$S:5}
A.mG.prototype={
k8(a){var s=A.q(a)
if(new A.ae(a,s.i("ae<1>")).M(0,new A.mI())||new A.as(a,s.i("as<2>")).M(0,new A.mJ()))throw A.d(B.fI)}}
A.mI.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.mJ.prototype={
$1(a){var s
t.a.a(a)
s=J.aC(a)
return s.gN(a)||s.M(a,new A.mH())},
$S:63}
A.mH.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.vP.prototype={}
A.mS.prototype={}
A.mM.prototype={
ka(a,b,c){var s
for(s=this.b.gaB(),s=s.gu(s);s.m();)s.gn().C()},
jf(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.d(A.m("audio listener room missing: "+a0))
r=this.lS(a,a0)
s=t.s
q=A.e([],s)
p=A.e([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.bT
e=f.ci(h,a1.h(0,g))
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.r)(o),++i)s.push(o[i].a)
o=B.d.H(l,-60,0)
m=B.c.H(k,120,2e4)
g=B.d.H(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.a7(p,"; ")
b=t.N
s=A.aj(s,b)
b=A.aj(q,b)
if(!isFinite(g)||g<0||g>1)A.j(B.fA)
return new A.mS(s,b,o,m,g,n,c)},
ci(a,b){return this.jf(a,b,B.b9)},
lS(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.me
s=t.N
r=A.N([a0,0],s,t.i)
q=A.N([a0,B.U],s,t.Es)
p=A.aJ([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.S(k,new A.mN(r))
j=B.a.gO(k)
p.a1(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.ia(s,!0)}i=o.aw(j)
h=A.J(i,i.$ti.i("o.E"))
B.a.S(h,new A.mO())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.bK(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.bT:d).oV(f)
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
p.l(0,e)}}}return B.md}}
A.mN.prototype={
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
A.mO.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:65}
A.ia.prototype={}
A.fa.prototype={}
A.nh.prototype={
ez(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Au().bm(q).ga9()
p.d=q
p.c=p.b.bm(q).ga9()
p.a=a}}
A.nY.prototype={}
A.kM.prototype={}
A.oj.prototype={
l2(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.k(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.k(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.k(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.d7(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cT(a,b,c,d,e,f){return this.nM(a,b,c,d,e,f)},
nM(a,b,c,a0,a1,a2){var s=0,r=A.bF(t.uh),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cT=A.bI(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.a(A.a(j.document).createElement("img"))
m.src=a
s=7
return A.am(A.aZ(A.a(m.decode()),t.X),$async$cT)
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
if(c){n.l2()
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
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$cT,r)},
cU(a,b,c){var s=!1
return this.nN(t.a.a(a),b,!1)},
nN(b0,b1,b2){var s=0,r=A.bF(t.uh),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cU=A.bI(function(b3,b4){if(b3===1){o.push(b4)
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
return A.am(A.aZ(A.a(j.decode()),a1),$async$cU)
case 10:J.h8(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.ca(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.c(J.aG(l,0).width)
h=A.c(J.aG(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.vM(l,new A.ok(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.ca(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.ao()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.j5(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.ao()
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
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.vN(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.ca(l)
if(typeof a1!=="number"){q=a1.d3()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.c(a0.WebGL2RenderingContext.RGBA),A.c(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aG(l,c)])
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.vN(d,16)+")")
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
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.vN(d,16)+")")
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
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$cU,r)},
h7(a,b){var s=this.a,r=A.k(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.d7(s.getShaderParameter(r,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.fj("shader compile failed: "+A.w(A.yW(s,"getShaderInfoLog",r,t.D))+"\n"+b))
return r},
b_(a,b){var s=v.G,r=this.h7(A.c(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.h7(A.c(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.k(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.d7(p.getProgramParameter(o,A.c(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.fj("program link failed: "+A.w(A.yW(p,"getProgramInfoLog",o,t.D))))
return o},
giZ(){var s=A.d7(this.a.getParameter(A.c(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aY(s):0},
eQ(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.c(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.c(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hO(0,c,B.c.k5(b.byteLength,p))*p
if(B.c.P(o,4)!==0)A.j(A.y("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.Aw(B.q.gmr(b),b.byteOffset+0*p,B.c.T(o,4)))}},
dH(a,b,c){var s,r,q,p,o=this.a,n=v.G
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
dC(a,b,c,d,e){var s,r=this.a,q=A.k(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.ai(r,"renderbufferStorageMultisample",[A.c(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.c(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
h9(a,b,c){var s,r=this.a,q=A.k(r.createTexture())
q.toString
this.dH(q,a,b)
s=v.G
A.ai(r,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.c(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fu(a,b){var s,r,q=this.a,p=A.k(q.createTexture())
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
eA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.k(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.dC(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.dC(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.h9(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.h9(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.dC(a,b,e,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fu(a,b)
if(d)h.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.c(h.checkFramebufferStatus(A.c(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.c(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.fj("framebuffer incomplete"))
return new A.kM(g,n,o,m,q,p,l,e,a,b)},
iY(a,b,c,d){return this.eA(a,b,c,d,0)},
nQ(a,b,c,d){return this.eA(a,b,!0,c,d)},
bu(a,b,c){return this.eA(a,b,c,!1,0)},
dF(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.c(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.ai(s,"renderbufferStorageMultisample",[A.c(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.c(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
b5(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.dH(q,b,c)
if(p!=null)n.dH(p,b,c)
n.dF(a,a.e,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dF(a,a.f,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dF(a,a.r,A.c(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.fu(b,c)}s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
oA(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
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
mE(a,b,c,d){var s,r,q=v.G,p=(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
b9(a){var s=this.a,r=A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.c(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.c(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.ok.prototype={
$1(a){A.a(a)
return A.c(a.width)!==this.a||A.c(a.height)!==this.b},
$S:66}
A.jW.prototype={
eP(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].pc(a)}}
A.jY.prototype={
cf(a){if(this.at)return
A.vU(a,"requestPointerLock",t.X)},
eZ(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cf(r,r.r,r.e,A.q(r).i("cf<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a2(q)
for(m=J.Q(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.oy(p,n)}this.b7()},
d9(a){var s,r,q,p,o,n,m=this
if(m.ch.d9(a))for(s=m.CW.aC("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
oo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.Q(t.ik.b(c)?c:new A.aR(c,A.H(c).i("aR<1,a5?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.U(r.connected)||A.x(r.mapping)!=="standard")break A
c=A.x(r.id)
q=A.x(r.mapping)
p=t.n
o=A.e([],p)
n=d.a(r.axes)
n=J.Q(t.dd.b(n)?n:new A.aR(n,A.H(n).i("aR<1,z>")))
while(n.m())o.push(n.gn())
p=A.e([],p)
d=d.a(r.buttons)
d=J.Q(t.nx.b(d)?d:new A.aR(d,A.H(d).i("aR<1,a5>")))
while(d.m()){r=d.gn()
p.push(A.U(r.pressed)?1:A.aA(r.value))}s=new A.kJ(!0,c,q,o,p)
break}}d=s==null
m=A.CP(d?B.ld:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aC(e),q.gap(q))
q=f.r
q.l7(A.q(q).i("n(1)").a(new A.oY(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.ex())n.l(0,h)}else n.l(0,h)}}f.e=A.hA(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aC(e),l.gap(l))){d=r.a(f.c)
d=!B.a.M(c.aC(e),d.gap(d))}}if(d)i.ey()},
lr(a){var s=this
A.a(a)
if(A.U(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.x(a.code)))if(B.a.q(s.CW.aC("interact"),A.x(a.code))){if(s.ch.ex())s.d.l(0,A.x(a.code))}else s.d.l(0,A.x(a.code))},
lt(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a1(0,A.x(a.code))
r=this.CW
if(B.a.q(r.aC(q),A.x(a.code))){t.Q.a(s)
s=!B.a.M(r.aC(q),s.gap(s))}else s=!1
if(s)this.ch.ey()},
lx(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.c(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aC("interact"),s)){if(r.ch.ex())r.d.l(0,s)}else r.d.l(0,s)},
lB(a){var s,r="interact",q="Mouse"+A.c(A.a(a).button),p=this.c
p.a1(0,q)
s=this.CW
if(B.a.q(s.aC(r),q)){t.Q.a(p)
p=!B.a.M(s.aC(r),p.gap(p))}else p=!1
if(p)this.ch.ey()},
lD(a){var s
A.a(a)
if(!this.ay)return
s=A.aA(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
lz(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fL(a,"movementX")
s.as=s.as+s.fL(a,"movementY")},
lv(a){var s=this
A.a(a)
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fL(a,b){var s=A.yT(a[b])
if(s==null)s=null
return s==null?0:s},
cv(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.k8(n.c,t.N)
for(r=n.e,r=A.im(r,r.r,A.q(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.M(n.CW.aC(a),s.gap(s))},
b7(){var s=this
s.c.G(0)
s.d.G(0)
s.f.G(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.eK()}}
A.oY.prototype={
$1(a){return!this.a.q(0,A.x(a))},
$S:3}
A.oX.prototype={
aC(a){var s=this.a.h(0,a)
return s==null?B.o:s},
oy(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a2(r)
for(p=A.im(b,b.r,A.q(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.aj(q,r))},
ba(a,b){var s,r,q
t.Q.a(b)
for(s=this.aC(a),r=s.length,q=0;q<r;++q)if(b.a1(0,s[q]))return!0
return!1}}
A.p0.prototype={
ex(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
ey(){this.c=this.b=!1
this.d=0},
d9(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.d.H(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eK(){this.c=this.b=!1
this.d=0}}
A.ka.prototype={}
A.hD.prototype={
gfF(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gI(B.c.aM(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.aM(s.c,4)))>>>0
r=((r<<5>>>0)+r^s.d)>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.aM(0.5,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.aM(0,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.aM(1,4)))>>>0
return((r<<5>>>0)+r^B.b.gI(B.c.aM(1,4)))&2147483647},
a_(a,b){var s,r=this
if(b==null)return!1
if(r!==b){s=!1
if(b instanceof A.hD)if(A.mj(r)===A.mj(b))if(r.a===b.a)if(r.b===b.b)if(r.c===b.c)s=r.d===b.d}else s=!0
return s},
gI(a){return this.gfF()},
A(){var s=this
return A.N(["atlasLayer",s.a,"emissiveStrength",s.b,"uvScale",s.c,"flags",s.d,"roughness",0.5,"metallic",0,"aoStrength",1,"normalScale",1],t.N,t.K)}}
A.ps.prototype={
ki(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfF(),q)}}
A.cW.prototype={
cW(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.q.d5(s,0,m,l)
n.a=s}r=b.ag(0,a).bm(d.ag(0,a)).ga9()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.i_(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.i_(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.i_(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.i_(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.i_(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.i_(n.a,l,d,r,q,p,o,0,1,0,k,0)},
az(a,b,c,d,e){return this.cW(a,b,c,d,e,1,1)}}
A.qf.prototype={
le(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.b_(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.L()
m.w=r
q=s.b_(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.L()
m.x=q
p=m.c
o=A.k(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.L()
m.y=o
o=A.k(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.L()
m.z=o
o=A.k(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.L()
m.Q=o
r=A.k(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.L()
m.as=r
r=A.k(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.L()
m.at=r
q=A.k(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.L()
m.ax=q
m.d=s.bu(m.ay,m.ch,!1)
m.e=s.bu(m.ay,m.ch,!1)
m.f=s.bu(m.ay,m.ch,!1)
p=A.k(p.createVertexArray())
p.toString
m.CW!==$&&A.L()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
lf(){var s
try{this.r=this.b.bu(384,216,!1)}catch(s){this.r=null}},
ox(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.b9(n)
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
p.b9(l)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.b9(m)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.qo.prototype={
dl(a,b,c){var s,r,q
try{r=this.a.b_(b,c)
return r}catch(q){s=A.ag(q)
r=A.fj(a+": "+A.w(s))
throw A.d(r)}}}
A.qh.prototype={}
A.ii.prototype={}
A.lL.prototype={}
A.ly.prototype={}
A.lw.prototype={}
A.qi.prototype={
kj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([A.w1(0,0,1,0),A.w1(1,0,1,0),A.w1(2,0,1,0)],t.td),e=t.S
e=new A.ps(f,A.p(e,e))
e.ki(f)
h.es=e
h.is=1.9
h.ei=h.br/h.bq
r=J.k1(6,t.dr)
for(q=0;q<6;++q)r[q]=new A.ii()
t.lm.a(r)
f=h.b1
e=f.b_("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=smoothstep(uPointLightRadius[i],0.0,distanceToLight);\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float currentDepth=projCoords.z;\n  float bias=max(uShadowBias.x, uShadowBias.y*abs(dFdy(currentDepth)));\n  vec2 texelSize=vec2(1.0/512.0);\n  float shadowSum=0.0;\n  for(int x=-1;x<=1;x++){\n    for(int y=-1;y<=1;y++){\n      float pcfDepth=texture(shadowTex,projCoords.xy+vec2(x,y)*texelSize).r;\n      shadowSum+=(currentDepth-bias>pcfDepth)?0.15:1.0;\n    }\n  }\n  return shadowSum/9.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.b_(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.b_(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.b_(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.b_(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.aq!==$&&A.L()
h.aq=new A.qo(f,e,p,o,n,m)
h.b=t.w7.a(new A.qj(h))
h.fX()
h.fW()
o=h.aR
p=A.k(o.getUniformLocation(m,"uTex"))
h.hV!==$&&A.L()
h.hV=p
p=A.k(o.getUniformLocation(m,"uNoise"))
h.hW!==$&&A.L()
h.hW=p
p=A.k(o.getUniformLocation(m,"uTime"))
h.hB!==$&&A.L()
h.hB=p
p=A.k(o.getUniformLocation(m,"uTexelSize"))
h.hA!==$&&A.L()
h.hA=p
p=A.k(o.getUniformLocation(m,"uNoiseOff"))
h.hC!==$&&A.L()
h.hC=p
p=A.k(o.getUniformLocation(m,"uChromaLuma"))
h.hD!==$&&A.L()
h.hD=p
p=A.k(o.getUniformLocation(m,"uChromaLag"))
h.hE!==$&&A.L()
h.hE=p
p=A.k(o.getUniformLocation(m,"uTapeNoise"))
h.hF!==$&&A.L()
h.hF=p
p=A.k(o.getUniformLocation(m,"uHeadSwitch"))
h.hG!==$&&A.L()
h.hG=p
p=A.k(o.getUniformLocation(m,"uTracking"))
h.hH!==$&&A.L()
h.hH=p
p=A.k(o.getUniformLocation(m,"uDropouts"))
h.hI!==$&&A.L()
h.hI=p
p=A.k(o.getUniformLocation(m,"uGhosting"))
h.hJ!==$&&A.L()
h.hJ=p
p=A.k(o.getUniformLocation(m,"uChromaBlurI"))
h.hK!==$&&A.L()
h.hK=p
p=A.k(o.getUniformLocation(m,"uChromaBlurQ"))
h.hL!==$&&A.L()
h.hL=p
p=A.k(o.getUniformLocation(m,"uChromaLagAmount"))
h.hM!==$&&A.L()
h.hM=p
p=A.k(o.getUniformLocation(m,"uNoiseScale"))
h.hN!==$&&A.L()
h.hN=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.hO!==$&&A.L()
h.hO=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.hP!==$&&A.L()
h.hP=p
p=A.k(o.getUniformLocation(m,"uJitterAmount"))
h.hQ!==$&&A.L()
h.hQ=p
p=A.k(o.getUniformLocation(m,"uJitterFreq"))
h.hR!==$&&A.L()
h.hR=p
p=A.k(o.getUniformLocation(m,"uDropoutRate"))
h.hS!==$&&A.L()
h.hS=p
p=A.k(o.getUniformLocation(m,"uGhostAmount"))
h.hT!==$&&A.L()
h.hT=p
p=A.k(o.getUniformLocation(m,"uGhostOffset"))
h.hU!==$&&A.L()
h.hU=p
p=A.k(o.getUniformLocation(m,"uGhostTarget"))
h.hX!==$&&A.L()
h.hX=p
m=A.k(o.getUniformLocation(m,"uHasGhost"))
h.hY!==$&&A.L()
h.hY=m
m=A.k(o.getUniformLocation(n,"uTex"))
h.ek!==$&&A.L()
h.ek=m
m=A.k(o.getUniformLocation(n,"uDepth"))
h.el!==$&&A.L()
h.el=m
m=A.k(o.getUniformLocation(n,"uFocusDistance"))
h.em!==$&&A.L()
h.em=m
m=A.k(o.getUniformLocation(n,"uDofBlurScale"))
h.en!==$&&A.L()
h.en=m
m=A.k(o.getUniformLocation(n,"uBlurRadius"))
h.eo!==$&&A.L()
h.eo=m
m=A.k(o.getUniformLocation(n,"uDofStrength"))
h.ep!==$&&A.L()
h.ep=m
n=A.k(o.getUniformLocation(n,"uTexel"))
h.eq!==$&&A.L()
h.eq=n
n=A.U(A.a(A.a(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.c3!==$&&A.L()
h.c3=n
h.siW(16777215)
n=new A.r8(o,f,A.e([],t.qy),A.e([],t.sj),A.e([],t.h),A.e([],t.fv))
m=n.c=f.b_("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.k(o.getUniformLocation(m,"uLightProj"))
n.e=A.k(o.getUniformLocation(m,"uModel"))
h.er!==$&&A.L()
h.er=n
n=new A.qf(f,o)
n.le()
n.lf()
h.cK!==$&&A.L()
h.cK=n
n=f.a
m=A.k(n.createBuffer())
m.toString
h.dW!==$&&A.L()
h.dW=m
p=A.k(n.createBuffer())
p.toString
h.dX!==$&&A.L()
h.dX=p
n=A.k(n.createBuffer())
n.toString
h.dY!==$&&A.L()
h.dY=n
e=A.k(o.createVertexArray())
e.toString
h.dZ!==$&&A.L()
h.dZ=e
l=A.k(o.createVertexArray())
l.toString
h.e_!==$&&A.L()
h.e_=l
k=A.k(o.createVertexArray())
k.toString
h.e0!==$&&A.L()
h.e0=k
j=A.k(o.createVertexArray())
j.toString
h.e1!==$&&A.L()
h.e1=j
o.bindVertexArray(e)
h.dh(m)
o.bindVertexArray(l)
h.dh(p)
o.bindVertexArray(k)
h.dh(n)
o.bindVertexArray(null)
try{h.cP=f.iY(384,216,!0,!0)}catch(i){h.cP=null}s=4<f.giZ()?4:f.giZ()
e=s
if(typeof e!=="number")return e.ao()
if(e>1)try{h.c2=f.nQ(h.bq,h.br,!0,s)}catch(i){h.c2=null}try{h.bp=f.iY(h.bq,h.br,!0,!0)}catch(i){h.c2=h.bp=null}if(h.bp!=null)try{h.cM=f.bu(h.gcp(),h.gco(),!1)
h.cN=f.bu(h.gcp(),h.gco(),!1)
h.cO=f.bu(h.bq,h.br,!1)}catch(i){h.cO=h.cN=h.cM=null}},
gcp(){var s=B.c.T(this.bq,4)
return s<1?1:s},
gco(){var s=B.c.T(this.br,4)
return s<1?1:s},
aV(a){return this.nO(t.G.a(a))},
nO(a){var s=0,r=A.bF(t.H),q=this,p,o,n,m,l,k,j
var $async$aV=A.bI(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:p=new A.I(a,A.q(a).i("I<1,2>")).gu(0),o=q.b1
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.cM.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.am(o.cT(k,l,!1,!1,!1,m==="grime"),$async$aV)
case 4:if(c!=null)q.fA(m,l)
s=2
break
case 3:p=t.Ai
j=A.J(new A.cE(new A.T(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.oI.a(new A.qk(a)),t.jT),p),p.i("o.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.am(o.cU(j,12,!1),$async$aV)
case 7:q.cJ=c
case 6:return A.bD(null,r)}})
return A.bE($async$aV,r)},
bM(){var s=0,r=A.bF(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bM=A.bI(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.p(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.am(A.aZ(A.a(A.a(g.window).fetch("shaders/"+A.w(m))),f),$async$bM)
case 13:l=a3
if(!A.U(l.ok)){i=A.fj("HTTP "+A.w(A.x_(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.am(A.aZ(A.a(l.text()),i),$async$bM)
case 14:a.bK(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ag(c)
i=A.fj("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.lK(n)
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
case 5:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$bM,r)},
lK(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.aq
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.dl("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.dl("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.dl("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.fX()
i.fW()
q=i.hx
q=A.J(q,A.q(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.cM.h(0,s)
o.toString
i.fA(s,o)}A.a(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ag(j)
A.a(v.G.console).error("shader recompile failed: "+A.w(r))}},
fW(){var s=this,r=s.aR,q=s.aq
q===$&&A.h()
s.it=A.k(r.getUniformLocation(q.c,"uTex"))
s.iu=A.k(r.getUniformLocation(q.c,"uTime"))
s.iv=A.k(r.getUniformLocation(q.c,"uFlash"))
s.iw=A.k(r.getUniformLocation(q.c,"uVignette"))
s.ix=A.k(r.getUniformLocation(q.c,"uGrain"))
s.iy=A.k(r.getUniformLocation(q.c,"uDesat"))
s.iz=A.k(r.getUniformLocation(q.c,"uBloom"))
s.iA=A.k(r.getUniformLocation(q.c,"uBloomStrength"))
s.iH=A.k(r.getUniformLocation(q.c,"uNoiseOff"))
s.iK=A.k(r.getUniformLocation(q.c,"uLutMix"))
s.iD=A.k(r.getUniformLocation(q.c,"uDepth"))
s.iE=A.k(r.getUniformLocation(q.c,"uDepthViz"))
s.hy=A.k(r.getUniformLocation(q.c,"uSSAO"))
s.hz=A.k(r.getUniformLocation(q.c,"uSSAOStrength"))
s.iF=A.k(r.getUniformLocation(q.c,"uNoise"))
s.iG=A.k(r.getUniformLocation(q.c,"uNoiseOn"))
s.iI=A.k(r.getUniformLocation(q.c,"uLut"))
s.iJ=A.k(r.getUniformLocation(q.c,"uLutOn"))
s.iB=A.k(r.getUniformLocation(q.d,"uTex"))
s.ej=A.k(r.getUniformLocation(q.d,"uDir"))
s.iC=A.k(r.getUniformLocation(q.c,"uBlur"))},
fA(a,b){var s,r,q,p=this
p.hx.l(0,a)
switch(a){case"bluenoise":s=p.aq
s===$&&A.h()
s=s.c
r=p.iF
r===$&&A.h()
q=p.iG
q===$&&A.h()
p.bV(s,r,q,b)
break
case"lut-gothic":s=p.aq
s===$&&A.h()
s=s.c
r=p.iI
r===$&&A.h()
q=p.iJ
q===$&&A.h()
p.bV(s,r,q,b)
break
case"grime":s=p.aq
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bV(s,r,q,b)
break
case"glass":s=p.aq
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bV(s,r,q,b)
break
case"soft":s=p.aq
s===$&&A.h()
s=s.b
r=p.c6
r===$&&A.h()
q=p.ie
q===$&&A.h()
p.bV(s,r,q,b)
break}},
bV(a,b,c,d){var s=this.aR
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
siW(a){var s=A.uN(a)
this.i5=s.a
this.i6=s.b
this.i7=s.c},
cE(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
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
f[l]=l}a1=b.aR
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
b.fh(56)
a1.bindBuffer(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.c(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.np++
b.e5.k(0,a1,new A.lL(e,d,i,s,s,a3))
return a1},
nf(a){var s,r,q,p=this,o=p.e5.h(0,a)
if(o==null)return
p.fN()
s=p.ib
r=p.ic
if(s!==r)p.h0(r)
s=p.aR
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.eh
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.c(q.WebGL2RenderingContext.TRIANGLES),r,A.c(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.c(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.c4},
ny(a){var s,r=this.e5.a1(0,a)
if(r==null)return
s=this.aR
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.e6)return
c.e6=!0
s=c.aR
r=c.aq
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.i9
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.e9
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.ea
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.eb
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.is)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.ei)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.hZ?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.ec/255*0.34,c.ed/255*0.34,c.ee/255*0.34)
q=c.fx
q===$&&A.h()
r=c.i4
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.i5,c.i6,c.i7)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.i8)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.e8.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.e8
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.uN(k.b)
m=c.c3
m===$&&A.h()
i=m?1:1+(A.vC(c.ef*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.c3
r===$&&A.h()
q=r?1:1+(A.vC(c.ef*2.5,40503)*2-1)*0
c.nm=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.i0?1:0
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
q=c.i_
h=q?384:0
g=q?216:0
q=c.e2
p=q.a
if(p===B.bq){f=B.d.H(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.ig
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.er
r===$&&A.h()
q=c.ik
q===$&&A.h()
s.uniform1f(q,0)
q=c.il
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.ih
q===$&&A.h()
if(q!=null)r.d1(0)
q=c.ii
q===$&&A.h()
if(q!=null)r.d1(1)
q=c.ij
q===$&&A.h()
if(q!=null)r.d1(2)
r.d2(0)
r.d2(1)
r.d2(2)
r=c.im
r===$&&A.h()
if(c.cJ==null)q=0
else{c.es===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cJ!=null){r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cJ)
r=c.eg
r===$&&A.h()
s.uniform1i(r,12)}r=c.ir
q=c.iq
p=c.ip
o=c.io
n=0
for(;;){m=c.es
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
if(m!=null)s.uniform1i(m,d.d);++n}c.h0(c.ic)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.eh
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.c(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.c(r.WebGL2RenderingContext.BLEND))},
h0(a){var s
this.ib=a
s=this.dx
s===$&&A.h()
this.aR.uniformMatrix4fv(s,!1,a.a)},
b4(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bq=a
j.br=b
j.ei=b/a
s=j.cK
s===$&&A.h()
r=B.c.T(a,2)
s.ay=r
q=B.c.T(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.b5(p,r,q)
r=s.e
if(r!=null)s.b.b5(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.b5(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.b5(r,384,216)
o=j.bp
n=j.c2
m=j.cM
l=j.cN
k=j.cO
if(o!=null)j.b1.b5(o,a,b)
if(n!=null)j.b1.b5(n,a,b)
if(m!=null)j.b1.b5(m,j.gcp(),j.gco())
if(l!=null)j.b1.b5(l,j.gcp(),j.gco())
if(k!=null)j.b1.b5(k,a,b)},
lX(a){var s,r,q,p,o,n,m
for(s=this.i2,r=this.i1,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
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
lW(a){var s,r,q,p,o,n,m,l
for(s=this.i3,r=this.e7,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
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
nv(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.e2=b4
s=b2.c5
r=0
if(s>0){for(s=b2.i3,q=0;p=b2.c5,q<p;++q)B.a.k(s,q,q)
b2.lW(p)
for(p=b2.e7,o=b2.e3,n=0;n<b2.c5;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.zi(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.e7,p=b2.e3,q=0;q<b2.c5;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.zi(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.c5=0
for(s=b2.i2,q=0;p=b2.cQ,q<p;++q)B.a.k(s,q,q)
b2.lX(p)
for(p=b2.nn,o=b2.i1,k=0,n=0;n<b2.cQ;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.uN(0)
m=j.b
h=b2.eb
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.ea
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
e=b2.e9
k=A.zq(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cQ=0
s=b2.b1
o=b2.dW
o===$&&A.h()
s.eQ(o,b2.e3,r)
o=b2.dX
o===$&&A.h()
s.eQ(o,p,k)
b2.fN()
p=b2.aR
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.dZ
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.c.T(r,14));++b2.c4
p.depthMask(!1)
p.enable(A.c(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.c(o.WebGL2RenderingContext.SRC_ALPHA),A.c(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.e_
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.c.T(k,14));++b2.c4
m=b2.e4
if(m>0){h=b2.dY
h===$&&A.h()
s.eQ(h,b2.no,m)
p.blendFunc(A.c(o.WebGL2RenderingContext.ONE),A.c(o.WebGL2RenderingContext.ONE))
m=b2.e0
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,b2.e4/14|0);++b2.c4}m=b2.cP
if(m!=null){a7=b2.bp
if(a7!=null)s.oA(m,a7)}a8=b2.bp
if(a8==null)return
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
m=b2.e1
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cM
a4=b2.cN
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.aq
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
g=b2.iB
g===$&&A.h()
p.uniform1i(g,0)
s.b9(a4)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.ej
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.b9(a3)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.ej,0,1/a4.y)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cO
if(b2.cL>0&&a6!=null){s.b9(a6)
g=b2.aq
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.ek
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.el
g===$&&A.h()
p.uniform1i(g,7)
g=b2.em
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.en
g===$&&A.h()
p.uniform1f(g,1)
g=b2.eo
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.ep
g===$&&A.h()
p.uniform1f(g,b2.cL)
g=b2.eq
g===$&&A.h()
p.uniform2f(g,1/b2.bq,1/b2.br)
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cK
g===$&&A.h()
b0=g.ox(a8,0.5)
s.b9(null)
s=b2.aq
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE1))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.iz
g===$&&A.h()
p.uniform1i(g,1)
g=b2.iA
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.iC
s===$&&A.h()
b2.c3===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.iD
s===$&&A.h()
p.uniform1i(s,7)
s=b2.iE
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.hy
s===$&&A.h()
p.uniform1i(s,11)
s=b2.hz
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cL>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.it
h===$&&A.h()
p.uniform1i(h,0)
h=b2.ef+=b3;++b2.ia
s=b2.iu
s===$&&A.h()
p.uniform1f(s,h)
h=b2.iH
h===$&&A.h()
s=b2.ia
p.uniform2f(h,B.c.P(s*13,64),B.c.P(s*29,64))
s=b2.iv
s===$&&A.h()
p.uniform1f(s,0)
s=b2.iw
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.ix
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.iy
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.e2
if(s.a===B.ab)b1=0*(1-s.b/1)
else b1=0
s=b2.iK
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.qj.prototype={
$0(){var s=this.a.aq
s===$&&A.h()
return s.b},
$S:67}
A.qk.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:45}
A.rR.prototype={
gm9(){var s=this.b
s===$&&A.h()
return s},
fX(){var s,r,q,p,o,n,m=this,l=m.ma(),k=m.a
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
m.c6=A.k(k.getUniformLocation(l,"uSoft"))
m.ie=A.k(k.getUniformLocation(l,"uSoftOn"))
m.ig=A.k(k.getUniformLocation(l,"uInternal"))
m.ih=A.k(k.getUniformLocation(l,"uLightProj0"))
m.ii=A.k(k.getUniformLocation(l,"uLightProj1"))
m.ij=A.k(k.getUniformLocation(l,"uLightProj2"))
m.nq=A.k(k.getUniformLocation(l,"uShadow0"))
m.nr=A.k(k.getUniformLocation(l,"uShadow1"))
m.ns=A.k(k.getUniformLocation(l,"uShadow2"))
m.ik=A.k(k.getUniformLocation(l,"uShadowCasters"))
m.eg=A.k(k.getUniformLocation(l,"uMaterialAlbedo"))
m.eh=A.k(k.getUniformLocation(l,"uStaticMaterial"))
m.il=A.k(k.getUniformLocation(l,"uShadowBias"))
m.im=A.k(k.getUniformLocation(l,"uMaterialCount"))
s=m.io
B.a.G(s)
r=m.ip
B.a.G(r)
q=m.iq
B.a.G(q)
p=m.ir
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.k(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.k(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.k(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.k(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.eg,12)},
dh(a){this.a.bindBuffer(A.c(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.fh(56)},
fh(a){var s=this,r=s.c
r===$&&A.h()
s.bW(r,3,a,0)
r=s.f
r===$&&A.h()
s.bW(r,3,a,12)
r=s.d
r===$&&A.h()
s.bW(r,4,a,24)
r=s.e
r===$&&A.h()
s.bW(r,1,a,40)
r=s.r
r===$&&A.h()
s.bW(r,3,a,44)},
bW(a,b,c,d){var s=this.a
A.ai(s,"vertexAttribPointer",[a,b,A.c(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
ma(){return this.gm9().$0()}}
A.r8.prototype={
d1(a){return null},
d2(a){return null}}
A.b.prototype={
a8(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
ag(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
a3(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
c1(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bm(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga9(){var s=this,r=s.gt(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kJ.prototype={}
A.l7.prototype={}
A.na.prototype={
p6(a){var s,r,q,p,o,n=B.k.aj(a.A(),null)
this.a.hv(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
or(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
p=this.ft(r,a)
if(p!=null)return new A.eE(p,null)
o=this.ft(q,a)
if(o!=null)return new A.eE(o,"recovered previous save")
if(r==null)return B.kJ
return B.kI}catch(n){return B.kH}},
ft(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hv(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.F)return null
else throw q}}}
A.jB.prototype={
kd(a,b,c,d,e){if(this.a.length===0)throw A.d(B.fy)
if(this.b<0)throw A.d(B.f6)},
A(){var s,r=this,q=r.d
q=q==null?null:A.aj(q,t.i)
s=t.z
return A.b2(A.N(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cb.prototype={
B(){return"EndingKind."+this.b}}
A.nN.prototype={}
A.fi.prototype={
A(){var s=t.N
return A.N(["kind",this.a.b],s,s)}}
A.nQ.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:69}
A.bo.prototype={}
A.kq.prototype={
A(){var s,r=this,q=t.N,p=A.p(q,t.z)
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
nG(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ag(0,new A.b(0,1.3499999999999999,0))
return!new A.jl(s,s.a8(0,new A.b(0,1.2000000000000002,0))).iU(a,r)}}
A.q_.prototype={
A(){return A.m3(this.a)}}
A.fx.prototype={
A(){return A.N(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qu.prototype={
hv(a){var s,r,q,p,o,n,m,l=B.k.aE(a,null),k=t.f
if(!k.b(l))throw A.d(B.fJ)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aL(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a7("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.fe)
k=A.aM(n,s,r)
return A.y2(A.aM(m,s,r),k,2)}}
A.eE.prototype={}
A.ep.prototype={
B(){return"GameSessionEventType."+this.b}}
A.jK.prototype={}
A.o9.prototype={}
A.o8.prototype={
gab(){var s=this.d
return new A.o9(s.a,s.b)},
geF(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.N(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.N(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.N(["entryCount",m.e.b.a],k,t.S)
p=A.xC(m.c).A()
o=m.r
n=o.c
return new A.q_(A.m3(A.N(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.N(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.A()],k,t.z)))},
mi(a,b){if(!B.a.M(a.f,new A.oa(b)))return!1
this.z.mh(a,b)
return!0},
nz(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.q(s).i("as<2>")
q=A.J(new A.as(s,r),r.i("o.E"))
B.a.S(q,new A.ob())
if(q.length===0)return null
s=A.H(q)
r=s.i("K<1>")
p=A.J(new A.K(q,s.i("n(1)").a(new A.oc()),r),r.i("o.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dL(a),r=t.sU,s=new A.aS(s,s.gt(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.c.P(n,o.length)]
s=l.c
k=new A.cJ(a,l.a,s.length-1,B.a.gU(s).p(0))
j.k(0,a,k)
return k},
me(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.an(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cA(B.fT)}if(n<a)this.cA(B.fU)},
jV(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d8(a)&&s.jU(b)},
os(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dC){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
jS(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.B4(j,A.aj(i.d,h).length)
if(a===B.dp)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.H(r)
A.B3(j,new A.K(r,q.i("n(1)").a(new A.od(k)),q.i("K<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.hQ,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aJ(j.a/1*3)
B.a.l(r.r,new A.fz(q.a,a,b))
m=r.a
A.Bf(m,q.a,n,k.b,A.aj(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.jH(B.iw)
s.r.mG(o,c)
l=B.d.aJ(j.b/1*6)
if(l>0)r.d8(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.as(i,A.q(i).i("as<2>")).M(0,new A.oe())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cA(B.fW)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cA(B.fV)},
cA(a){var s=this;++s.y
B.a.l(s.w,new A.jK())
B.a.l(s.x,A.B5(A.E2(a),s.b,s.y-1))}}
A.oa.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.ob.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.oc.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:21}
A.od.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.r9().jP(this.a.c,a.a)},
$S:73}
A.oe.prototype={
$1(a){return t.g.a(a).e},
$S:21}
A.mZ.prototype={
eR(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
for(n=A.H(j),i=n.i("n(1)"),n=n.i("K<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.bY(new A.K(j,i.a(new A.n3(e)),n),r)
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
if(a1.length!==s.length||B.a.gaN(a1).b!==B.a.gaN(s).b)throw A.d(A.m("stair manifest mismatch"))}}
A.n_.prototype={
$1(a){return A.AM(a,this.a)},
$S:74}
A.n0.prototype={
$1(a){var s=this.a,r=A.mb(a,"portal"),q=A.eb(r,"id"),p=A.eb(r,"a"),o=A.eb(r,"b"),n=A.j_(r,"width"),m=A.j_(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.x(r.h(0,"doorKit")):null
return new A.f3(q,p,o,n*s,m*s,l)},
$S:75}
A.n1.prototype={
$1(a){var s=A.mb(a,"stair")
A.eb(s,"id")
return new A.f5(A.eb(s,"portalId"))},
$S:76}
A.n2.prototype={
$1(a){return typeof a=="string"?a:A.iW("exterior cell")},
$S:77}
A.n3.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.f4.prototype={}
A.n4.prototype={
$1(a){var s=this.a,r=A.mb(a,"window"),q=A.eb(r,"id"),p=A.j_(r,"offset")
A.j_(r,"sill")
return new A.f6(q,p*s,A.j_(r,"width")*s,A.j_(r,"height")*s)},
$S:79}
A.f6.prototype={}
A.f3.prototype={}
A.f5.prototype={}
A.uS.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.jl.prototype={
oN(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.H(s)
q=new A.K(s,r.i("n(1)").a(new A.nj(e)),r.i("K<1>"))
p=!q.gu(0).m()?null:q.gO(0)
if(p==null){n.d=null
return}if(!(n.cz(b,p.f)&&a==="hall"))o=n.cz(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.l8(p,B.d.H(d,0,1))},
nT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fK(f,c,d)
s=g.l3(a,b,c,d)
if(s!=null){g.d=s
return g.fK(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.my(Math.sqrt(r*r+q*q)/0.08))
o=d.a3(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.hf(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.j8(a,n)
n=i==null?n:i
h=g.hf(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.j8(a,n)
n=i==null?n:i}g.cC(m)
return new A.kc(m,n)},
l3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cz(c,l.f)&&n
j=q&&this.cz(c,l.r)&&o
if(k||j)return new A.l8(l,k?0:1)}return null},
fK(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ag(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.H(a.b+o/p,0,1)
n=A.yf(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.cC(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kc(n,k)},
cz(a,b){var s=a.ag(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
hf(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.ic(c,!1)
s=c.a8(0,d)
this.cC(s)
if(this.iU(a,b)){this.cC(c)
return new A.ic(c,!0)}return new A.ic(s,!1)},
cC(a){var s=a.ag(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.a8(0,new A.b(0,1.2000000000000002,0))},
iU(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.lZ(a,m,s)},
j8(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aG(k)
for(r=k.a,q=a.aw(r),p=J.Q(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.bK(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hj(k,o,s)&&this.kT(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lZ(a,b,c){var s,r,q
for(s=a.aw(b.a),r=J.Q(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hj(b,q,c))return!0}return!1},
hj(a,b,c){var s,r,q,p=a.a,o=b.aH(p),n=b.ae(p)
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
kT(a,b,c){var s,r=this
switch(b.aH(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smm(a){this.a=t.a7.a(a)}}
A.nj.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:81}
A.kc.prototype={}
A.ic.prototype={}
A.l8.prototype={}
A.hs.prototype={}
A.oB.prototype={
mG(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.M,r)
s=B.M[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jQ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.c}return r},
jR(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.d}return r},
A(){return A.N(["landedCount",this.b],t.N,t.z)}}
A.qq.prototype={
kl(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.L()
o.c=new A.jV(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.k(0,p.a,o.fi(p))}},
cX(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.ny(r[o])
s.k(0,a,n.fi(m))},
fi(a){var s=A.zK(this.a,a),r=this.b,q=A.e([r.cE(s.a,1),r.cE(s.b,2),r.cE(s.c,0)],t.t),p=s.d
if(!B.q.gN(p))q.push(r.cE(p,0))
return q},
jq(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.O
s=l.a
r=A.aJ([s],t.N)
for(n=n.aw(s),q=J.Q(n.a),n=new A.S(q,n.b,n.$ti.i("S<1>"));n.m();){p=q.gn()
o=p.bK(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
ne(a,b){var s,r,q,p,o=this,n=o.jq(a),m=o.b,l=o.c
l===$&&A.h()
l=t.ba.a(l.jj(n,b))
s=t.A_
m.e8=l.length<=4?A.aj(l,s):A.aj(A.i2(l,0,A.ec(4,"count",t.S),A.H(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.nf(r[p])}}}
A.a_.prototype={}
A.jE.prototype={
gnJ(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a5(A.e([r,q,p,o,n,m],t.n),new A.nS())&&o>=r&&n>=q&&m>=p}}
A.nS.prototype={
$1(a){return isFinite(A.bB(a))},
$S:5}
A.jU.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.P(s,3)!==0}else s=!0
if(s)throw A.d(A.y("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.y("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnJ())throw A.d(A.y("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.M(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oD()))throw A.d(A.y("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.y("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.y("QHMX index "+o+" exceeds vertex count",m))}}}
A.oD.prototype={
$1(a){return!isFinite(A.bB(a))},
$S:5}
A.oC.prototype={
v(a,b,c,d,e,f,g){var s=this
s.by(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.by(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.by(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.by(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.by(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.by(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a_(a,b,c,m,n,o,0,0,p),r=new A.a_(g,h,i,m,n,o,1,1,p)
this.ad(s,new A.a_(d,e,f,m,n,o,1,0,p),r)
this.ad(s,r,new A.a_(j,k,l,m,n,o,0,1,p))},
ad(a,b,c){var s=this,r=s.b
B.a.l(r,s.du(a))
B.a.l(r,s.du(b))
B.a.l(r,s.du(c))},
du(a){var s,r,q=B.a.a7(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
ms(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.jU(A.aj(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jE(s,r,q,p,o,n))
h.C()
return h}}
A.jF.prototype={}
A.vH.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ac.q(0,s))A.j(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:82}
A.uL.prototype={
$2(a,b){var s=t.Ez
return B.b.F(s.a(a).a,s.a(b).a)},
$S:83}
A.d3.prototype={
p5(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.p(k,k),i=A.e([],t.Dl)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iq(A.Gh(new A.jU(i,new Uint16Array(A.a1(s)),A.DM(i))),l.a,l.b,l.c,A.e([],k))}}
A.iq.prototype={}
A.em.prototype={
B(){return"ExteriorCameraBand."+this.b}}
A.jG.prototype={
mz(a){var s
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
mA(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.c6
break A}if("kitchen"===a||"cellar"===a){s=B.eE
break A}if("bathroom"===a){s=B.eF
break A}if("spare-room"===a){s=B.eG
break A}s=B.c6
break A}return this.mz(s)},
iL(a,b,c,d){d.i("o<0>").a(b)
t.Q.a(c)
return new A.cm(this.nu(d.i("i(0)").a(a),b,c,d),d.i("cm<0>"))},
nu(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iL(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a5(0,B.ac.gap(B.ac)))throw A.d(A.y("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cf(l,l.r,l.e,r.$ti.i("cf<1>"))
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
A.e4.prototype={
hr(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uq.prototype={
$1(a){var s=this
return t.xT.a(a).hr(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:27}
A.up.prototype={
$1(a){return t.xT.a(a).hr(0,(this.a+this.b)*0.5,this.c)},
$S:27}
A.dg.prototype={
B(){return"FocusKind."+this.b}}
A.dO.prototype={}
A.qr.prototype={}
A.tG.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:85}
A.tF.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.uJ.prototype={
$1(a){return B.c.H(B.d.aJ(a*this.a),0,255)},
$S:42}
A.e3.prototype={}
A.fK.prototype={}
A.oz.prototype={
kw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oQ(1.5),a4=this.b,a5=A.at(a4,!0,t.U)
B.a.G(a4)
s=A.e([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.b7(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.bg(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.bi(b.a,b.b,a3.$1(b.c)))}s.push(new A.aU(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.L(a4,s)
a4=this.c
a=A.at(a4,!0,t.T)
B.a.G(a4)
s=A.e([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bt(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.L(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dt(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.oR(),a7=this.b,a8=A.at(a7,!0,t.U)
B.a.G(a7)
s=A.e([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.r)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.e([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.r)(h),++f){e=h[f]
i.push(new A.b7(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.e([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.r)(g),++f){c=g[f]
h.push(new A.bg(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.e([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.r)(d),++f){a=d[f]
g.push(new A.bi(a.a,a.b,a6.$1(a.c)))}d=A.e([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.r)(b),++f){a1=b[f]
d.push(new A.de(a1.a,a1.b*1.5))}s.push(new A.aU(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.L(a7,s)
a7=this.c
a2=A.at(a7,!0,t.T)
B.a.G(a7)
s=A.e([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bt(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.L(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.e([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.r)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dt(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
la(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.d(A.m("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.d(A.m("duplicate portal "+n))
q.k(0,n,m)}},
m7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
m5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.p(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.hi(o,i,h,g,f,e)
a5.fe(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aH(l)
h=c.ae(l)
g=c.w
f=c.x
a5.hi(o,i,h,g,0,f)
a5.fe(a6,l,c.aH(l),c.ae(l),c.ae(l)+g,0,f)}}for(s=new A.I(a6,a6.$ti.i("I<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c9(a)
r.S(a,new A.oS())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
hi(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
fe(a,b,c,d,e,f,g){J.h8(t.aD.a(a).ce(b+":"+c.b,new A.oP()),new A.iy([d,e,f,g]))},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.jQ(q),s.b+r.jR(q),s.c)},
aw(a){var s=this.c,r=A.H(s)
return new A.K(s,r.i("n(1)").a(new A.oT(a)),r.i("K<1>"))},
op(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.an(a,"roomId","not a portal endpoint"))
r=this.aG(o)
q=b.ae(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aH(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
gp0(){return B.a.bs(this.b,0,new A.oU(),t.S)},
j5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.U
s=A.e([new A.aX(a,B.U)],t.nR)
r=A.aJ([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.ow(s,0)
n=o.a
m=o.b
for(l=this.aw(n),k=J.Q(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.bK(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.aX(i,h))}}}return B.U}}
A.oQ.prototype={
$1(a){var s=this.a
return new A.b(a.a*s,a.b,a.c*s)},
$S:41}
A.oR.prototype={
$1(a){return a.a3(0,1.5)},
$S:41}
A.oS.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:88}
A.oP.prototype={
$0(){return A.e([],t.wx)},
$S:89}
A.oT.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:90}
A.oU.prototype={
$2(a,b){return A.c(a)+t.U.a(b).e.length},
$S:91}
A.nR.prototype={}
A.r9.prototype={
jP(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a5(s,new A.ra())}else s=!1
return s}}
A.ra.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.oE.prototype={
om(a){var s=this.e,r=A.H(s)
return new A.K(s,r.i("n(1)").a(new A.oH(a)),r.i("K<1>"))},
cF(a){return B.a.aS(this.d,new A.oF(a),new A.oG(a))},
eR(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
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
n=a6.cF(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.At()
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
a4=g.jd(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.m(a7+m+" escapes "+f.a))}}}
A.oH.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:92}
A.oF.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:93}
A.oG.prototype={
$0(){return A.j(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cQ.prototype={}
A.cv.prototype={
jd(a,b){var s=this.f.c.b*b,r=a.f
return new A.b(r.a.b*s,r.b.b*s,0)}}
A.p3.prototype={}
A.p1.prototype={}
A.uR.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.p2.prototype={
A(){var s,r,q,p=A.p(t.N,t.z),o=this.a,n=A.q(o).i("ae<1>")
n=A.J(new A.ae(o,n),n.i("o.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
eM(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.eS)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.G(0)
for(q=new A.I(r,A.q(r).i("I<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aL(o)||o<0)throw A.d(B.f7)
s.k(0,n,o)}}}
A.cS.prototype={}
A.jV.prototype={
jj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.ea)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cS(new A.b(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.lR(j),0.06))}}B.a.S(s,new A.oI(b))
return A.i2(s,0,A.ec(4,"count",t.S),t.A_).bO(0)},
lR(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oI.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.ag(0,s).gt(0),b.a.ag(0,s).gt(0))},
$S:95}
A.hn.prototype={
B(){return"Floor."+this.b}}
A.dN.prototype={
B(){return"Facing."+this.b}}
A.b7.prototype={
sjO(a){this.w=A.U(a)}}
A.bt.prototype={
bK(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aH(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.an(a,"roomId","not an endpoint of "+s.a))},
ae(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.an(a,"roomId","not an endpoint of "+s.a))}}
A.bg.prototype={}
A.bi.prototype={}
A.de.prototype={}
A.dt.prototype={}
A.aU.prototype={}
A.oK.prototype={
ni(a){return B.a.aS(this.c,new A.oL(a),new A.oM(a))},
oY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
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
if(k.gN(k)||k.gaB().M(0,new A.oN()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
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
A.oL.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:96}
A.oM.prototype={
$0(){return A.j(A.m("sound emitter missing: "+this.a))},
$S:6}
A.oN.prototype={
$1(a){return B.b.be(A.x(a)).length===0},
$S:3}
A.cP.prototype={}
A.oA.prototype={
dI(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.an(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.iv}q=A.e([],t.Fm)
p=B.d.aT(r)+1
o=B.d.aT(b)
for(n=p;n<=o;++n){m=B.c.P(n,24)
B.a.l(q,new A.es("tick"))
if(B.c.P(m,3)===0){B.a.l(q,new A.es("cuckoo"))
B.a.l(q,new A.es("bell"))}if(B.c.P(m,6)===0)B.a.l(q,new A.es("chime"))}l.b=b
return q}}
A.es.prototype={}
A.oJ.prototype={
dI(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.an(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iu}q=A.e([],t.vS)
for(p=B.d.aT(r)+1;p<=B.d.aT(b);++p){o=B.c.P(p,24)
n=B.c.P(o,4)
if(n===2)B.a.l(q,B.hl)
if(B.c.P(o,3)===1)B.a.l(q,B.hn)
if(B.c.P(o,8)===5)B.a.l(q,B.hq)
if(B.c.P(o,5)===0)B.a.l(q,B.hm)
if(B.c.P(o,7)===3)B.a.l(q,B.hr)
if(n===1)B.a.l(q,B.ho)
if(B.c.P(o,6)===4)B.a.l(q,B.hp)}m.b=b
return q}}
A.cO.prototype={}
A.uQ.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.oO.prototype={
A(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.p(m,l)
for(s=n.a,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.N(["open",o.a,"locked",o.b],m,r))}l=A.p(m,l)
for(s=n.c,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.N(["lit",o.a,"examined",o.b],m,r))}return A.N(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a2(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.a2(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.a2(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wO(new A.ae(o,A.q(o).i("ae<1>")),d)){d=f.b
if(A.wO(new A.ae(d,A.q(d).i("ae<1>")),r)){d=f.c
e=!A.wO(new A.ae(d,A.q(d).i("ae<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.fr)
e=f.d
if(e<0||e>2)A.j(B.eZ)
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
A.hL.prototype={
A(){return A.N(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hB.prototype={
A(){return A.N(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bf.prototype={}
A.nM.prototype={
$1(a){return this.a.q(0,A.x(a))},
$S:3}
A.dQ.prototype={
B(){return"Hand."+this.b}}
A.rL.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
f5(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.k7.prototype={
A(){var s,r,q,p=t.N,o=A.p(p,t.D)
for(s=this.a,r=0;r<5;++r){q=B.y[r]
o.k(0,q,s.h(0,q))}return A.N(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.T(B.y,t.oI.a(new A.pk(this)),t.jT).a7(0," \xb7 ")}}
A.pj.prototype={
$2(a,b){return new A.P(A.x(a),A.x(b),t.q)},
$S:97}
A.pk.prototype={
$1(a){return this.a.a.h(0,A.x(a))},
$S:45}
A.bW.prototype={
A(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].A())
s=p.r
s=s==null?null:s.A()
return A.N(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.p5.prototype={
bY(a){t.G.a(a)
return a.a===5&&B.a.a5(B.y,new A.pc(this,a))},
ff(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bY(b))return null
s=this.e++
r=new A.bW(s,a,A.e([A.pi(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dP(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bY(b))return!1
B.a.l(s.c,A.pi(b,c,B.av))
return!0},
md(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bY(b))return!1
s.r=A.pi(b,0,B.cw)
return!0},
jH(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
oZ(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
A(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.q(n).c)
B.a.X(n)
s=A.e([],t.cs)
for(r=q.b,r=new A.ah(r,r.r,r.e,A.q(r).i("ah<2>"));r.m();)s.push(r.d.A())
return A.N(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pc.prototype={
$1(a){var s
A.x(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.ha.prototype={
B(){return"BackendFallbackReason."+this.b}}
A.n5.prototype={
hw(a,b){if(a.a!==B.Z)return a
return new A.f7(B.bl,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.n6.prototype={
dQ(a,b){if(a.a===B.Z&&!a.d)return new A.pV(b,a.A(),B.de)
return new A.pg(b,a.d,a.e,a.A(),B.de)},
n8(a){return this.dQ(a,null)}}
A.f7.prototype={
A(){var s,r=this,q=A.p(t.N,t.X)
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
A.n7.prototype={
cl(a){var s,r,q,p,o=null,n=a==null?o:B.b.be(a).toLowerCase()
if(n==null||n.length===0)return B.dR
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.f7(B.Z,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.f7(B.bl,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.ph.prototype={}
A.pg.prototype={
gbn(){var s=this,r=s.b,q=r==null?null:r.gbn()
if(q==null)q=A.qm("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jk(s.e)
return r},
bc(){if(this.f===B.df)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.bc()
this.f=B.z},
b4(a,b){var s
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
if(this.f!==B.z)A.j(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.b4(a,b)},
b6(a){var s
if(this.f!==B.z)A.j(A.m("legacy backend is not ready"))
B.k.aj(A.N(["backend","legacy","interpolation",0,"facts",A.m3(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.b6(a)},
bt(a){var s
if(this.f!==B.z)A.j(A.m("legacy backend is not ready"))
B.k.aj(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bt(a)}}
A.pW.prototype={}
A.pV.prototype={
gbn(){var s=this.b,r=s==null?null:s.gbn()
if(r==null)r=A.qm("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jk(this.c)
return s},
bc(){if(this.d===B.df)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.bc()
this.d=B.z},
b4(a,b){var s
if(this.d!==B.z)A.j(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.y("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.b4(a,b)},
b6(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.az){p=q==null
if(p||!q.gdM()){if(s.d!==B.az)A.j(A.m("pixeldart backend is not context-lost"))
s.d=B.z
if(!p)q.ja()}p=s.d
if(p===B.az)return}if(p!==B.z)A.j(A.m(r))
B.k.aj(A.N(["backend","pixeldart","interpolation",0,"facts",A.m3(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdM()){if(s.d!==B.z)A.j(A.m(r))
s.d=B.az
q.iX()
return}q.b6(a)}},
bt(a){var s
if(this.d!==B.z)A.j(A.m("pixeldart backend is not ready"))
B.k.aj(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bt(a)}}
A.pX.prototype={
mw(a,b){var s,r,q,p,o,n,m
a.C()
s=B.bV.cl(a)
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
A.ko.prototype={
B(){return"PixeldartQualityTier."+this.b}}
A.pY.prototype={
A(){var s=this
return A.N(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.hR.prototype={
B(){return"RendererBackendKind."+this.b}}
A.eC.prototype={
B(){return"RendererBackendState."+this.b}}
A.qn.prototype={}
A.kz.prototype={}
A.ql.prototype={
kk(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.y("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.y("renderer provenance values must be non-empty",null))}},
jk(a){var s=this
return A.y_(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
A(){var s,r,q,p=this,o=A.p(t.N,t.z)
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
A.bP.prototype={
B(){return"SleepQuality."+this.b}}
A.bw.prototype={
B(){return"SleepLocation."+this.b}}
A.fz.prototype={}
A.nC.prototype={
d8(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jU(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
A(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.N(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.N(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nD.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:98}
A.nE.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:99}
A.jZ.prototype={
B(){return"InteractionType."+this.b}}
A.eL.prototype={
B(){return"WorldComparisonKind."+this.b}}
A.rQ.prototype={}
A.eK.prototype={}
A.jq.prototype={}
A.oV.prototype={}
A.oZ.prototype={
eW(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.ah(s,s.r,s.e,A.q(s).i("ah<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.S(p,new A.p_())
return p},
mF(a,b){var s,r,q,p,o,n=b.b
if(n.gN(n))return B.mc
s=t.N
r=A.a2(s)
q=A.a2(s)
for(s=n.gZ(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gU(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eK(B.aE,r)
s=r.a
o=B.a.gU(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gU(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eK(B.dF,r)
return new A.eK(B.bF,r)},
lI(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jq(e,!1,B.mb,null)
s=p.d===c
r=this.mF(p,d)
q.oZ(e)
return new A.jq(e,s,r,r.a===B.aE&&s?'The world says "'+d.c+'". The entry says "'+B.a.gU(p.c).p(0)+'".':null)},
n9(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aE)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.oV(B.a.gU(s.c).p(0)+" but "+A.w(a.f))}}
A.p_.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:14}
A.ci.prototype={
B(){return"RuptureStep."+this.b}}
A.qs.prototype={}
A.cU.prototype={}
A.qt.prototype={
gf6(){var s=B.ba.h(0,this.a)
return s==null?0:s},
jY(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.C)s=q.e
else s=!0
if(s)return B.cG
r=A.wC(b)
s=q.c
B.a.G(s)
B.a.L(s,r)
B.a.G(q.d)
q.a=B.ab
q.b=0
q.e=!1
return A.e([B.ek],t.xB)},
mf(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.y("rupture advance must be a finite non-negative duration",null))
if(l.a===B.C||a===0)return B.cG
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
if(l.a===B.a_)l.m2(s)
p=l.b
o=B.ba.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cU())
if(q===B.a_){l.a=B.C
l.b=0
l.e=!0
B.a.l(s,B.ej)}else{p=q.a+1
if(!(p<7))return A.f(B.cE,p)
l.a=B.cE[p]
l.b=0
B.a.l(s,new A.cU())}}}return A.aj(s,t.F3)},
A(){var s=this,r=t.N
return A.N(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.aj(s.c,r),"extinguishedMantles",A.aj(s.d,r),"completed",s.e],r,t.z)},
m2(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.c.H(B.d.aT(l.b/l.gf6()*A.aj(s,r).length),0,A.aj(s,r).length)
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
B.a.l(a,new A.cU())}}}
A.jL.prototype={
gbw(){var s=this.b
if(s<6||s>18)return 0
return B.d.H((s-6)/12,0,1)}}
A.eJ.prototype={
A(){var s=this
return A.N(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rM.prototype={
eu(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aT(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.ur.prototype={
$0(){var s,r,q=this.b,p=(this.a^q*73244475)&2147483647
p=(p^p>>>16)*73244475&2147483647
p=(p^p>>>16)&2147483647
s=B.c.P(p,5)===0||B.c.P(p,7)===0
r=s?0.35+B.c.P(p,66)/100:0
return new A.eJ(q,s,r,12-(q-1)*0.1)},
$S:100}
A.uz.prototype={
$1(a){var s=B.c.cD(this.a,a)&255
return B.c.H(B.d.aJ(s+((B.c.cD(this.b,a)&255)-s)*this.c),0,255)},
$S:42}
A.pz.prototype={
aU(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
mh(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
A(){var s,r,q,p,o,n,m,l,k=this.a,j=A.q(k).i("I<1,2>")
k=A.J(new A.I(k,j),j.i("o.E"))
B.a.S(k,new A.pB())
j=t.N
k=A.w_(k,j,j)
s=this.b
r=A.q(s).i("I<1,2>")
s=A.J(new A.I(s,r),r.i("o.E"))
B.a.S(s,new A.pC())
s=A.w_(s,j,j)
r=A.p(j,t.P)
q=this.c
p=A.q(q).i("I<1,2>")
q=A.J(new A.I(q,p),p.i("o.E"))
B.a.S(q,new A.pD())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.N(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.N(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pB.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:22}
A.pC.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:22}
A.pD.prototype={
$2(a,b){var s=t.gJ
return B.b.F(s.a(a).a,s.a(b).a)},
$S:102}
A.cJ.prototype={
A(){var s=this
return A.N(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.br.prototype={
A(){var s=this
return A.N(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.pT.prototype={
eV(){var s="denise.pears",r=A.e([],t.xz),q=this.a
if(q.aU("ashworth.compact","accepted"))B.a.l(r,B.jW)
if(q.aU(s,"taken"))B.a.l(r,B.k_)
else if(q.aU(s,"left"))B.a.l(r,B.jX)
if(q.aU("sylvia.certificate","granted"))B.a.l(r,B.jZ)
if(q.aU("residue.coal","cellar"))B.a.l(r,B.jV)
if(q.aU("telegram.08","read"))B.a.l(r,B.jU)
if(q.aU("truth.shawl","home"))B.a.l(r,B.jT)
if(q.aU("sowerby.paraffin","received"))B.a.l(r,B.jY)
if(q.aU("inspector.proclamation","acknowledged"))B.a.l(r,B.jS)
return r},
jp(a){var s=this.eV(),r=A.H(s),q=r.i("K<1>")
s=A.J(new A.K(s,r.i("n(1)").a(new A.pU(a)),q),q.i("o.E"))
return s}}
A.pU.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:39}
A.re.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fB(e.a),c=t.N,b=t.P,a=A.p(c,b)
for(s=e.b,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.m8(q,r.b))}s=A.fB(e.r)
q=A.fB(e.w)
p=A.fB(e.x)
o=A.p(c,t.rW)
for(n=e.as,n=new A.I(n,A.q(n).i("I<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.Q(l.b);i.m();){h=i.gn()
j.push(A.N(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.p(c,b)
for(m=e.at,m=new A.I(m,A.q(m).i("I<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.A())}b=A.p(c,b)
for(m=e.ax,m=new A.I(m,A.q(m).i("I<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.A())}return A.N(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
m8(a,b){var s,r=A.fB(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fB(q.bI(0,new A.rf(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gV(s))r.k(0,"_ambient",A.fB(s.bI(0,new A.rg(),t.S,t.z)))
return r}}
A.rf.prototype={
$2(a,b){return new A.P(A.c(a),t.BX.a(b).A(),t.pr)},
$S:104}
A.rg.prototype={
$2(a,b){return new A.P(A.c(a),t.vw.a(b).A(),t.pr)},
$S:105}
A.eI.prototype={
A(){return A.N(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eH.prototype={
A(){return A.N(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.i8.prototype={
A(){var s=t.N
return A.N(["field",this.a,"value",this.b],s,s)}}
A.l3.prototype={
A(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].A())
return A.N(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eB.prototype={
A(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gV(s))q.k(0,"effects",s)
return q}}
A.d1.prototype={
A(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gV(s))q.k(0,"when",s)
return q}}
A.rh.prototype={
cc(){var s=0,r=A.bF(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$cc=A.bI(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.am(A.aZ(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$cc)
case 6:n=b
j=t.N
s=7
return A.am(A.aZ(A.a(n.text()),j),$async$cc)
case 7:m=b
l=A.FE(m)
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
case 5:return A.bD(null,r)
case 1:return A.bC(p.at(-1),r)}})
return A.bE($async$cc,r)},
jo(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gJ().d_(0,new A.ri())
r=p.$ti
q=t.N
return A.w_(new A.cz(p,r.i("P<i,i>(1)").a(new A.rj()),r.i("cz<1,P<i,i>>")),q,q)}return null},
jt(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.h()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.e([],t.kv)
for(o=J.Q(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.p(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.x(i.b))}B.a.l(p,new A.eB(A.x(m.h(0,"id")),A.x(m.h(0,"label")),A.x(m.h(0,"reply")),A.b2(k,n,n)))}if(p.length<2)return g
return new A.l3(r,a,b,c,d,A.aj(p,t.Y))},
js(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aY(p)||o!==B.d.aY(o))return n
return new A.eI(B.d.aY(p),B.d.aY(o))},
jr(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aY(p)||typeof o!="string"||typeof n!="string")return m
return new A.eH(B.d.aY(p),o,n)},
p_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.p(a5,t.ee),a7=A.p(a5,t.tQ),a8=A.p(a5,t.pG),a9=t.a,b0=A.p(a5,t.gt),b1=A.p(a5,t.sy),b2=A.p(a5,t.aS),b3=A.p(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.p(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.fu(l,null):null
if(k==null||!q.b(m.b))continue
j=A.p(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.x(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.p(a3,r)
for(m=n.$ti.i("cf<1>"),l=new A.cf(n,n.r,n.e,m);l.m();){i=l.d
g=a1.js(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.p(a3,s)
for(m=new A.cf(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jr(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.ah(b4,b4.r,b4.e,A.q(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jt(A.x(d.h(0,"visitor")),B.d.aY(A.aA(d.h(0,"day"))),A.x(d.h(0,"tier")),B.d.aY(A.aA(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.ah(b4,b4.r,b4.e,A.q(b4).i("ah<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.p(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.x(r.b))}s=A.x(d.h(0,"id"))
b2.k(0,s,new A.d1(s,A.x(d.h(0,"target")),A.x(d.h(0,a2)),A.b2(b,a5,a5)))}b4=a1.at
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.h()
b4=new A.I(b4,A.q(b4).i("I<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.Q(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.i8(A.x(a0.h(0,"field")),A.x(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.re(A.p(a3,a4),a6,a7,a8,A.p(a5,a9),A.p(a5,a9),A.p(a3,a9),A.p(a3,a9),A.p(a3,a9),A.p(a5,a9),A.p(a5,a9),A.p(a5,a9),b0,b1,b2,b3)}}
A.ri.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:106}
A.rj.prototype={
$1(a){t.AC.a(a)
return new A.P(A.x(a.a),A.x(a.b),t.q)},
$S:107}
A.j9.prototype={
bF(a,b,c){var s=B.b.be(a),r=B.b.be(c)
if(r.length===0)return""
if(b||this.a===B.bH)return s.length===0?r:s+": "+r
if(this.a===B.bG)return r
return s.length===0?r:s+": "+r},
iM(a,b){return this.bF(a,!1,b)}}
A.vO.prototype={}
A.cH.prototype={
B(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dE.prototype={
bZ(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dE(q,p,o,n,m)},
n3(a){var s=null
return this.bZ(s,s,s,a,s)},
n6(a){var s=null
return this.bZ(s,s,s,s,a)},
n_(a){var s=null
return this.bZ(s,s,a,s,s)},
mY(a){var s=null
return this.bZ(s,a,s,s,s)},
mJ(a){var s=null
return this.bZ(a,s,s,s,s)},
A(){var s=this,r=s.f
r=r==null?null:r.b
return A.N(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mr.prototype={
$1(a){return a==null?null:A.U(a)},
$S:108}
A.mp.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:38}
A.mq.prototype={
$0(){return A.j(B.fG)},
$S:6}
A.mC.prototype={
bQ(a,b){var s,r=this,q=r.e.iM(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aK(q)
A.c(A.a(v.G.window).setTimeout(A.z3(new A.mE(r)),7000))},
aK(a){var s,r,q=this
if(!q.c||B.b.be(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.c(A.a(v.G.window).setTimeout(A.z3(new A.mD(q,s)),4200))}}
A.mE.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:110}
A.mD.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cs.prototype={
B(){return"AudioOutputMode."+this.b}}
A.cI.prototype={
B(){return"AudioDynamicRange."+this.b}}
A.db.prototype={
B(){return"AudioReverbMode."+this.b}}
A.da.prototype={
B(){return"AudioDuckingMode."+this.b}}
A.dF.prototype={
cH(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dF(r,q,p,a==null?s.e:a)},
mX(a){return this.cH(null,null,a,null)},
mO(a){return this.cH(null,a,null,null)},
n1(a){return this.cH(null,null,null,a)},
mN(a){return this.cH(a,null,null,null)},
A(){var s=this
return A.N(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mP.prototype={
$1$2(a,b,c){return B.a.aS(c.i("o<0>").a(a),new A.mQ(b,c),new A.mR(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:111}
A.mQ.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.mR.prototype={
$0(){return A.j(A.a7("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.n9.prototype={
eP(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.J.iM(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nc.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:1}
A.ng.prototype={
$1(a){A.a(a)
return this.a.$1(A.U(this.b.checked))},
$S:1}
A.nf.prototype={
$1(a){var s
A.a(a)
s=A.ft(A.x(this.a.value))
if(s!=null)this.b.$1(s)},
$S:2}
A.ne.prototype={
$1(a){A.x(a)
return a.length!==0&&!B.b.W(a,"brush-state-")},
$S:3}
A.dH.prototype={
B(){return"BrushComponentKind."+this.b}}
A.dI.prototype={
B(){return"BrushComponentState."+this.b}}
A.b0.prototype={
gmb(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.be(s.a).length===0||B.b.be(s.c).length===0)throw A.d(B.fw)
if(s.e===B.bS&&s.b!==B.bR)throw A.d(B.f8)}}
A.fe.prototype={
gmq(){var s,r,q,p,o=t.N
o=A.p(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aC(r)
o.k(0,q,p.gN(r)?"":p.gO(r))}return o},
bD(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
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
A.bB(r)
q=n.h(0,i)
q.toString
A.bB(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
return A.ff(null,a,A.U(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bB(r)
q=n.h(0,i)
q.toString
A.bB(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gmq()
return A.ff(l,null,m,r,p,o,s,q)},
dO(a){var s=null
return this.bD(a,s,s,s,s,s)},
mU(a){var s=null
return this.bD(s,s,s,a,s,s)},
mV(a){var s=null
return this.bD(s,s,s,s,a,s)},
mR(a){var s=null
return this.bD(s,a,s,s,s,s)},
mS(a){var s=null
return this.bD(s,s,a,s,s,s)},
n7(a){var s=null
return this.bD(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.eU)
p=this.r
if(p.gJ().M(0,new A.nu()))throw A.d(B.fz)
if(p.gJ().M(0,new A.nv()))throw A.d(B.fn)
p=p.gaB()
o=A.q(p)
s=o.i("hl<o.E,i>")
r=s.i("K<o.E>")
q=A.J(new A.K(new A.hl(p,o.i("o<i>(o.E)").a(new A.nw()),s),s.i("n(o.E)").a(new A.nx()),r),r.i("o.E"))
if(A.hA(q,A.H(q).c).a!==q.length)throw A.d(B.eX)},
A(){var s,r,q=this,p=t.N,o=A.p(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.at(r.b,!0,p))}return A.N(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nu.prototype={
$1(a){t.yx.a(a)
return J.vM(a.b,new A.nt(a))},
$S:26}
A.nt.prototype={
$1(a){var s
A.x(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xr(a)
else s=!1
return s},
$S:3}
A.nv.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.vM(a.b,B.di.gap(B.di))},
$S:26}
A.nw.prototype={
$1(a){return t.a.a(a)},
$S:113}
A.nx.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.ns.prototype={
$1(a){return typeof a=="string"},
$S:16}
A.dG.prototype={
B(){return"BindingCaptureStatus."+this.b}}
A.eh.prototype={
B(){return"BindingConflictResolution."+this.b}}
A.dc.prototype={}
A.jr.prototype={
dJ(a){var s=this
if(!s.a.r.R(a))return new A.dc(B.bO,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.dS},
mx(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aJ
if(!A.xr(a)){p.c=p.b=null
return new A.dc(B.bQ,B.dj.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xi(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dc(B.aK,a+" is already bound to "+s)}return p.kv(a)},
eL(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aJ
switch(a.a){case 2:m.c=m.e=m.d=null
return B.dT
case 1:s=A.wt(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wL(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.wW(r,k))
m.a=m.a.dO(s)
break
case 0:s=A.wt(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gO(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.i2(p,1,null,A.H(p).c)
o=p.$ti
p=new A.aS(p,p.gt(0),o.i("aS<a6.E>"))
o=o.i("a6.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.wW(r,k)}else{r=s.h(0,j)
r.toString
r=A.wL(A.wW(r,k),q)}s.k(0,j,r)
m.a=m.a.dO(s)
break}m.c=m.e=m.d=null
return B.bM},
kv(a){var s,r,q=this,p=q.b
if(p==null)return B.aJ
s=A.wt(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wL(r,a))
q.a=q.a.dO(s)
q.b=null
return B.bM}}
A.hg.prototype={
kb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jr(f.w)
s=f.b
s.className=A.x(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.nd(a,B.e1,1)))
A.a(s.appendChild(A.C(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.C(a,"div",c,e)
f.fd(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fd(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.df(a,r,"invertX","Invert horizontal look")
f.df(a,r,"invertY","Invert vertical look")
f.df(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.C(a,"div",c,e)
for(p=B.iT.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.ff(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mo(l)?"unbound":J.xk(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dJ(a,new A.b0("settings.controls.bind."+m,B.bR,n,h,B.n),new A.nq(f,m),k)
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
f.dE()
A.a(s.appendChild(A.dJ(a,B.e2,new A.nr(f),e)))},
j1(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fB(this.x.mx(A.x(a.code)))},
fB(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aK?B.e6:B.n
p=o.Q.h(0,r)
if(p!=null)A.vQ(p,q)}n=a.a
if(n===B.aK)o.lU()
else if(n===B.bP){n=o.x
n===$&&A.h()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dE()}else{o.dj()
o.ax=null}},
lU(){var s,r,q,p,o
this.dj()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.hP[r]
p=A.k(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dJ(p,new A.b0("settings.controls.resolve."+o,B.E,o,"resolve key binding conflict",B.n),new A.np(this,q),null)))}},
dj(){var s,r=this.at
if(r==null)return
while(A.k(r.firstChild)!=null){s=A.k(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dE(){var s,r,q,p
for(s=this.Q,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.h()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mo(p)?"unbound":J.xk(p," / ")
r.textContent=q
A.vQ(r,B.n)}},
fd(a,b,c,d,e,f){var s,r=A.C(a,"label","setting-row",null)
A.a(r.appendChild(A.C(a,"span",null,d)))
s=A.AP(a,new A.b0("settings.controls."+c,B.e4,d,null,B.n),f,e,new A.nn(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
df(a,b,c,d){var s=A.C(a,"label","setting-toggle",null),r=A.AQ(a,new A.b0("settings.controls."+c,B.e5,d,null,B.n),!1,new A.no(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.C(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
fz(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seC(a){this.f=t.pf.a(a)},
sb2(a){this.r=t.Z.a(a)}}
A.nq.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.h()
s=n.dJ(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bN){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.vQ(q,B.bS)}p.dj()
return null},
$S:0}
A.nr.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.np.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.h()
return s.fB(r.eL(this.b))},
$S:0}
A.nn.prototype={
$1(a){var s=this.a,r=s.w
s.fz(this.b==="horizontalSensitivity"?r.mS(a):r.n7(a))},
$S:114}
A.no.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.mU(a)
break A}if("invertY"===q){s=r.w.mV(a)
break A}s=r.w.mR(a)
break A}r.fz(s)},
$S:10}
A.ny.prototype={
kc(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.C(s,"h1","journal-title","credits")))
r=A.C(s,"p","credits-body",null)
p.f!==$&&A.L()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.C(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.C(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.nz(p)))
A.a(o.appendChild(q))}}
A.nz.prototype={
$1(a){A.a(a)
return this.a.a4()},
$S:1}
A.nG.prototype={
ke(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.C(a,i,"door-speaker",j)
k.c!==$&&A.L()
k.c=s
r=A.C(a,i,"door-line",j)
k.d!==$&&A.L()
k.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(h.appendChild(s))
A.a(h.appendChild(r))
r=A.C(a,i,"door-cite-list",j)
k.f!==$&&A.L()
k.f=r
s=A.C(a,i,"door-cite-result",j)
k.r!==$&&A.L()
k.r=s
A.a(h.appendChild(r))
A.a(h.appendChild(s))
for(s=A.iX,r=k.w,q=0;q<5;++q){p=B.i9[q]
o=A.a(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.nH(k,p)
if(typeof n=="function")A.j(A.y("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.ef()]=n
o.addEventListener("click",m)
A.a(h.appendChild(o))
B.a.l(r,o)}s=A.C(a,"button","door-continue","continue")
k.e!==$&&A.L()
k.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.nI(k)))
A.a(h.appendChild(s))
l=A.Z(new A.nJ(k,a))
k.y=l
h.addEventListener("keydown",l)
A.a(A.k(a.body).appendChild(h))},
f2(a,b){var s,r,q,p=this
p.ax=!0
s=p.c
s===$&&A.h()
s.textContent=a
s=p.d
s===$&&A.h()
s.textContent=B.J.bF("",!0,b)
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
f3(a,b){var s,r,q,p=this,o=p.d
o===$&&A.h()
o.textContent=B.J.bF("",!0,a)
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
jL(a){return this.f3(a,!1)},
jN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.DX.a(a)
for(s=g.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].remove()
B.a.G(s)
r=g.e
r===$&&A.h()
r=A.a(r.style)
p=b==null
o=p?"none":""
r.display=o
for(r=a.length,o=g.a,n=!p,m=A.iX,l=g.b,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){k={}
j=a[q]
k.a=null
k.a=j.a
i=A.a(l.createElement("button"))
i.className="door-reaction"
i.textContent=j.b
i.setAttribute("type","button")
j=new A.nL(k,g)
if(typeof j=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
h=function(c,d){return function(e){return c(d,e,arguments.length)}}(m,j)
h[$.ef()]=j
i.addEventListener("click",h)
if(n){i.disabled=!0
if(k.a===b)i.setAttribute("aria-pressed","true")}A.a(o.appendChild(i))
B.a.l(s,i)}if(s.length!==0&&p)B.a.gO(s).focus()},
f4(a,b){var s,r,q=this.d
q===$&&A.h()
q.textContent=B.J.bF("",!0,a+"\n\n"+b)
for(q=this.x,s=q.length,r=0;r<q.length;q.length===s||(0,A.r)(q),++r)q[r].disabled=!0
q=this.e
q===$&&A.h()
A.a(q.style).display=""
q.focus()},
jK(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.iX,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nK(o,this)
if(typeof o=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.ef()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
cR(){var s,r,q,p,o=this
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
snY(a){this.z=t.f_.a(a)},
so_(a){this.Q=t.Z.a(a)},
snZ(a){this.as=t.vR.a(a)},
soa(a){this.at=t.f_.a(a)}}
A.nH.prototype={
$1(a){var s
A.a(a)
s=this.a.z
return s==null?null:s.$1(this.b)},
$S:1}
A.nI.prototype={
$1(a){var s
A.a(a)
s=this.a.Q
return s==null?null:s.$0()},
$S:1}
A.nJ.prototype={
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
A.nL.prototype={
$1(a){var s
A.a(a)
s=this.b.at
return s==null?null:s.$1(this.a.a)},
$S:1}
A.nK.prototype={
$1(a){var s
A.a(a)
s=this.b.as
return s==null?null:s.$1(this.a.a)},
$S:1}
A.nO.prototype={
kf(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.C(s,"h1","journal-title",null)
o.f!==$&&A.L()
o.f=r
q=A.C(s,"div","ending-copy",null)
o.r!==$&&A.L()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.C(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.nP(o)))
A.a(n.appendChild(p))},
jM(a,b){var s,r,q,p,o,n,m=this
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
A.a(s.appendChild(n))}m.bJ()},
so2(a){this.w=t.Z.a(a)}}
A.nP.prototype={
$1(a){var s
A.a(a)
s=this.a
s.a4()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.of.prototype={}
A.di.prototype={
B(){return"GameplayInteractionMode."+this.b}}
A.cK.prototype={
B(){return"GameplayPromptDensity."+this.b}}
A.cL.prototype={
B(){return"GameplayTextPacing."+this.b}}
A.dj.prototype={
B(){return"GameplayJournalLayout."+this.b}}
A.dh.prototype={
B(){return"GameplayConfirmationLevel."+this.b}}
A.dk.prototype={
B(){return"GameplaySaveFeedback."+this.b}}
A.cc.prototype={
B(){return"GameplayFocusLossBehavior."+this.b}}
A.fl.prototype={
bb(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.vS(n,b==null?s.x:b,l,r,o,q,m,p)},
mL(a){var s=null
return this.bb(s,a,s,s,s,s,s,s)},
mT(a){var s=null
return this.bb(s,s,s,a,s,s,s,s)},
mZ(a){var s=null
return this.bb(s,s,s,s,s,a,s,s)},
n4(a){var s=null
return this.bb(s,s,s,s,s,s,s,a)},
mW(a){var s=null
return this.bb(s,s,s,s,a,s,s,s)},
mK(a){var s=null
return this.bb(a,s,s,s,s,s,s,s)},
n2(a){var s=null
return this.bb(s,s,s,s,s,s,a,s)},
mP(a){var s=null
return this.bb(s,s,a,s,s,s,s,s)},
A(){var s=this
return A.N(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.og.prototype={
$1$2(a,b,c){var s
A.zL(c,t.Ct,"T","call")
c.i("o<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.d(A.a7("invalid gameplay setting: "+a,null,null))
return B.a.aS(b,new A.oh(s,c),new A.oi(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:116}
A.oh.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("n(0)")}}
A.oi.prototype={
$0(){return A.j(A.a7("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.ct.prototype={
B(){return"GraphicsPreset."+this.b}}
A.dP.prototype={
bC(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dP(s.a,r,q,p,o,n,m)},
dN(a){var s=null
return this.bC(a,s,s,s,s,s)},
hs(a){var s=null
return this.bC(s,a,s,s,s,s)},
ht(a){var s=null
return this.bC(s,s,s,a,s,s)},
n0(a){var s=null
return this.bC(s,s,s,s,a,s)},
mQ(a){var s=null
return this.bC(s,s,a,s,s,s)},
n5(a){var s=null
return this.bC(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.iD,q))throw A.d(A.a7("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.hW,q))throw A.d(A.a7("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.iG,q))throw A.d(A.a7("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.iA,q))throw A.d(A.a7("unsupported graphics texture quality: "+q,r,r))},
A(){var s=this
return A.N(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.ou.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:35}
A.ov.prototype={
$0(){return A.j(B.fd)},
$S:6}
A.ow.prototype={
A(){return A.N(["version",1,"requested",this.a.A(),"effective",this.b.A()],t.N,t.K)}}
A.oo.prototype={}
A.op.prototype={}
A.hr.prototype={
kg(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.a(l.appendChild(A.C(a,"h1","journal-title","Graphics")))
A.a(l.appendChild(A.C(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.C(a,"div","settings-grid",n)
r=t.N
o.bS(a,s,"preset","quality preset",A.N(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bS(a,s,"renderScale","render scale",A.N(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bS(a,s,"frameTarget","frame target",A.N(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bS(a,s,"antialiasing","anti-aliasing",A.N(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bS(a,s,"textureQuality","texture quality",A.N(["high","High","medium","Medium","low","Low"],r,r))
q=A.C(a,"label","setting-toggle",n)
r=A.a(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.Z(new A.os(o)))
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
p.addEventListener("click",A.Z(new A.ot(o)))
A.a(l.appendChild(p))},
bS(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.C(a,"label","setting-row",null)
A.a(s.appendChild(A.C(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.I(e,A.q(e).i("I<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.or(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
fE(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
f1(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a7(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seC(a){this.f=t.CA.a(a)},
sb2(a){this.r=t.Z.a(a)}}
A.os.prototype={
$1(a){var s
A.a(a)
s=this.a
s.fE(s.z.hs(A.U(s.x.checked)))},
$S:2}
A.ot.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a4()},
$S:2}
A.or.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.x(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.ht(B.a.al(B.cD,new A.oq(s)))
break A}if("renderScale"===q){p=r.z.n0(s)
break A}if("frameTarget"===q){p=r.z.mQ(s)
break A}if("antialiasing"===q){p=r.z.dN(s)
break A}if("textureQuality"===q){p=r.z.n5(s)
break A}p=r.z
break A}r.fE(p)},
$S:2}
A.oq.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:35}
A.ox.prototype={
kh(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.C(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.C(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.C(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.C(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.oy(this)))
A.a(p.appendChild(r))}}
A.oy.prototype={
$1(a){A.a(a)
return this.a.a4()},
$S:1}
A.p6.prototype={
bJ(){var s,r=this
r.k0()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fl(r.CW,s)
r.lM()
r.fU()},
kC(){var s,r=this,q=r.a,p=A.C(q,"div","page-turn",null),o=A.C(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.p7(r)))
s=A.C(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.p8(r)))
q=A.C(q,"span","right-day-label",null)
r.Q!==$&&A.L()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
hg(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fl(s.CW+a,r)
s.fU()},
fl(a,b){if(a<1)return 1
if(a>b)return b
return a},
lM(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.eW(),r=s.length,q=A.iX,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gU(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.p9(j,n,l)
if(typeof m=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.ef()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
fU(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.q(p).i("ah<2>"),n=new A.ah(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.S(r,new A.pa())
j.fT(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.ah(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.S(s,new A.pb())
j.fT(i,s)
k=B.d.H(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.a(i.style).setProperty("width",B.d.aM(k*100,1)+"%")},
fT(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.a(a.appendChild(this.l4(b[r])))},
l4(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.C(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.d.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.ll(m,!1)
l.className=A.x(l.className)+" margin"
A.a(j.appendChild(l))}return j},
ll(a,b){var s=b?"hand-line struck":"hand-line",r=A.C(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.p7.prototype={
$1(a){A.a(a)
return this.a.hg(-1)},
$S:1}
A.p8.prototype={
$1(a){A.a(a)
return this.a.hg(1)},
$S:1}
A.p9.prototype={
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
A.pa.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.pb.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.hK.prototype={
aP(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.k(this.a.body).appendChild(s))},
bJ(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.x(n.className),"open"))return
s=$.pJ
if(s!=null&&s!==o)s.a4()
$.pJ=o
r=o.a
o.d=A.k(r.activeElement)
A.vU(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glE())
o.e=q
r.addEventListener("keydown",q)
p=A.z1(n)
if(p.length!==0)B.a.gO(p).focus()
else n.focus()},
a4(){var s,r,q=this,p=q.b
if(!B.b.q(A.x(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pJ===q)$.pJ=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
j1(a){},
lF(a){A.a(a)
this.j1(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"){a.preventDefault()
this.a4()
return}if(A.x(a.code)==="Tab")this.m0(a)},
m0(a){var s,r=A.z1(this.b)
if(r.length===0)return
s=A.k(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.gO(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}}else if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gO(r).focus()}},
saX(a){this.c=t.Z.a(a)}}
A.bh.prototype={
B(){return"PauseReason."+this.b}}
A.ch.prototype={
B(){return"PausePage."+this.b}}
A.dW.prototype={
B(){return"PauseTransitionKind."+this.b}}
A.dp.prototype={
A(){var s,r=A.p(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a_(a,b){if(b==null)return!1
return b instanceof A.dp&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gI(a){return A.cB(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dV.prototype={
gho(){var s=this.a
return s.length===1&&B.a.gO(s).a===B.bc},
A(){var s=A.p(t.N,t.X),r=this.a,q=A.H(r),p=q.i("T<1,X<i,G?>>")
r=A.J(new A.T(r,q.i("X<i,G?>(1)").a(new A.pO()),p),p.i("a6.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.H(r)
p=q.i("T<1,i>")
r=A.J(new A.T(r,q.i("i(1)").a(new A.pP()),p),p.i("a6.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.pO.prototype={
$1(a){return t.oP.a(a).A()},
$S:118}
A.pP.prototype={
$1(a){return t.wJ.a(a).b},
$S:119}
A.c_.prototype={}
A.pN.prototype={
j2(a){var s,r=this
if(r.a.gho())return new A.c_(B.Y,r.a,null)
s=r.a
s=new A.dV(B.iC,s.b,a)
r.a=s
return new A.c_(B.d3,s,"pause.resume")},
ml(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gU(p)
q=r.a.a
q=B.a.aO(q,0,q.length-1)
p=r.a
p=new A.dV(q,p.b,p.c)
r.a=p
return new A.c_(B.d4,p,s.c)}if(q.gho()&&r.a.b.length===0)return r.cg()
return new A.c_(B.Y,r.a,null)},
cg(){var s=this.a
if(s.a.length===0)return new A.c_(B.Y,s,null)
if(s.b.length!==0)return new A.c_(B.Y,s,null)
this.a=B.bb
return new A.c_(B.d5,B.bb,s.c)},
oj(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c_(B.Y,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.dV(s.a,r,q.a.c)
q.a=s
return new A.c_(B.d3,s,null)},
nd(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c_(B.Y,o.a,null)
s=o.a
r=s.b
q=A.H(r)
p=q.i("K<1>")
r=A.J(new A.K(r,q.i("n(1)").a(new A.pQ(a)),p),p.i("o.E"))
q=o.a.c
r=new A.dV(s.a,r,q)
o.a=r
return new A.c_(B.jR,r,q)},
kU(a){var s
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
A.pQ.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:120}
A.cC.prototype={
B(){return"PauseRootAction."+this.b}}
A.pR.prototype={
bh(a,b,c,d){var s=B.j4.h(0,c)
s.toString
A.a(b.appendChild(A.dJ(a,new A.b0(s,B.E,d,null,B.n),new A.pS(this,c),null)))},
soe(a){this.f=t.Z.a(a)},
sog(a){this.r=t.Z.a(a)},
so0(a){this.w=t.Z.a(a)},
sof(a){this.x=t.Z.a(a)},
so5(a){this.y=t.Z.a(a)},
so1(a){this.z=t.Z.a(a)},
sb2(a){this.Q=t.Z.a(a)}}
A.pS.prototype={
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
A.bO.prototype={
B(){return"PauseSettingsCategory."+this.b}}
A.q4.prototype={
jJ(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.J.bF("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qB.prototype={
km(a){var s,r,q,p,o,n=this.b
n.className=A.x(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.nd(a,B.e0,1)))
A.a(n.appendChild(A.C(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.C(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.ib[r]
p=B.cQ.h(0,q)
p.toString
o=B.cP.h(0,q)
o.toString
A.a(s.appendChild(A.dJ(a,new A.b0(o,B.E,p,p+" settings",B.n),new A.qC(this,q),null)))}A.a(s.appendChild(A.dJ(a,B.e_,new A.qD(this),null)))
A.a(n.appendChild(s))},
snX(a){this.f=t.hQ.a(a)},
sb2(a){this.r=t.Z.a(a)}}
A.qC.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qD.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fy.prototype={
kn(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.cQ.h(0,d))+" settings",a=h.b
a.className=A.x(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.nd(a0,new A.b0("settings."+(s==null?f:s)+".heading",B.al,b,g,B.n),2)))
A.a(a.appendChild(A.C(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.C(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.qZ(h)),p=B.a.gu(B.B),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.lk(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.C(a0,"div",e,g)
for(s=s.a(new A.r_(h)),q=B.a.gu(B.B),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.m_(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.G)A.a(a.appendChild(h.kA(a0)))
if(d===B.H)A.a(a.appendChild(h.kz(a0)))
if(d===B.X)A.a(a.appendChild(h.kB(a0)))
i=A.C(a0,"div",e,g)
for(s=t.pz.a(h.glc()),q=B.a.gu(B.iE),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dJ(a0,new A.b0("settings."+o+".reset."+n,B.E,"reset "+n,"restore "+n+" settings to defaults",B.n),new A.r0(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dJ(a0,new A.b0("settings."+(s==null?f:s)+".reset.all",B.E,"reset all settings","restore all settings to defaults",B.e7),new A.r1(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dJ(a0,new A.b0("settings."+(d==null?f:d)+".back",B.E,"return","return to settings categories",B.n),new A.r2(h),g)))},
kz(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.C(a,"div","settings-grid",j),f=k.dd(a,g,"reducedMotion","reduced motion (system default)"),e=k.dd(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dd(a,g,"captions","non-speech captions"),c=A.C(a,"label",h,j)
A.a(c.appendChild(A.C(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.qT(k,s)))
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
A.a(q.appendChild(n))}q.addEventListener("change",A.Z(new A.qU(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.C(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.qV(k)))
A.a(g.appendChild(l))
k.k3.L(0,A.N(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
dd(a,b,c,d){var s=A.C(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.qE(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.C(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eY(a){var s,r
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
kB(a){var s,r,q=this,p="confirmations",o=A.C(a,"div","settings-grid",null)
q.bi(a,o,"interactionMode","interaction mode",B.b4,t.bK)
q.bi(a,o,"promptDensity","prompt density",B.b7,t.dn)
q.bi(a,o,"textPacing","dialogue text pacing",B.b6,t.j_)
q.bi(a,o,"journalLayout","journal layout",B.aZ,t.gm)
q.bi(a,o,p,p,B.aV,t.aJ)
q.bi(a,o,"saveFeedback","save feedback",B.b_,t.mx)
q.bi(a,o,"focusLossBehavior","when the window loses focus",B.ax,t.x)
s=A.C(a,"label","setting-toggle",null)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.Z(new A.qW(q,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.C(a,"span",null,"contextual reminders")))
A.a(o.appendChild(s))
q.id=r
return o},
bi(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.zL(f,t.Ct,"T","_addGameplaySelect")
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
A.a(r.appendChild(n))}r.addEventListener("change",A.Z(new A.qR(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
jw(a){var s,r,q,p,o,n,m,l,k,j,i,h
this.k1=a
for(s=this.go,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0),r=a.w.b,q=a.r.b,p=a.f.b,o=a.e.b,n=a.d.b,m=a.c.b,l=a.b.b;s.m();){k=s.d
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
kA(a){var s,r,q=this,p=A.C(a,"div","settings-grid",null),o=t.N,n=A.p(o,o)
for(s=0;s<4;++s){r=B.b3[s].b
n.k(0,r,r)}q.cm(a,p,"output","output",n)
n=A.p(o,o)
for(s=0;s<3;++s){r=B.aY[s].b
n.k(0,r,r)}q.cm(a,p,"dynamicRange","dynamic range",n)
n=A.p(o,o)
for(s=0;s<2;++s){r=B.aX[s].b
n.k(0,r,r)}q.cm(a,p,"reverb","room effect",n)
o=A.p(o,o)
for(s=0;s<2;++s){n=B.aW[s].b
o.k(0,n,n)}q.cm(a,p,"ducking","voice intelligibility",o)
return p},
cm(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.C(a,"label","setting-row",null)
A.a(s.appendChild(A.C(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.I(e,A.q(e).i("I<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.qJ(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p1.k(0,c,r)},
jv(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.I(s,A.q(s).i("I<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fG(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.W===r){s=a.c===B.aA
break A}if(B.H===r){s=a.c===B.a0
break A}if(B.G===r){s=a.c===B.D
break A}s=!1
break A}return s},
ld(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.W===s){r=a===B.aA
break A}if(B.H===s){r=a===B.a0
break A}if(B.G===s){r=a===B.D
break A}r=!1
break A}return r},
m_(a,b){var s=this,r=A.C(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.qY(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.C(a,"span",null,b.b)))
return r},
lk(a,b,c,d,e){var s,r,q=this,p=A.C(a,"label","setting-row",null),o=A.C(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.C(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.qX(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aX(e,d))
return p},
f_(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.k8
r=B.d.H(b,s.a,s.b)
q.value=B.d.p(r)
p.textContent=""+B.d.aJ(r*100)+"%"},
so7(a){this.r=t.DI.a(a)},
so9(a){this.w=t.xl.a(a)},
so8(a){this.x=t.xl.a(a)},
so3(a){this.y=t.DI.a(a)},
so6(a){this.z=t.xl.a(a)},
soi(a){this.Q=t.xl.a(a)},
sod(a){this.as=t.Ci.a(a)},
soc(a){this.at=t.Z.a(a)},
sb2(a){this.ax=t.Z.a(a)},
snW(a){this.ay=t.kC.a(a)},
so4(a){this.ch=t.hq.a(a)},
snV(a){this.CW=t.Cv.a(a)},
sob(a){this.cx=t.Z.a(a)}}
A.qZ.prototype={
$1(a){t.gl.a(a)
return a.d===B.P&&this.a.fG(a)},
$S:23}
A.r_.prototype={
$1(a){t.gl.a(a)
return a.d===B.ad&&this.a.fG(a)},
$S:23}
A.r0.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.r1.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.r2.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a4()},
$S:0}
A.qT.prototype={
$1(a){var s,r,q
A.a(a)
s=this.a
r=s.k2
q=A.ft(A.x(this.b.value))
r=r.n6(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.qU.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.k2.n3(B.a.al(B.b5,new A.qS(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.qS.prototype={
$1(a){return t.mq.a(a).b===A.x(this.a.value)},
$S:38}
A.qV.prototype={
$1(a){var s
A.a(a)
s=this.a.cx
return s==null?null:s.$0()},
$S:1}
A.qE.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.k2.n_(s)
break A}if("photosensitivitySafe"===q){p=r.k2.mY(s)
break A}p=r.k2.mJ(s)
break A}r.k2=p
r=r.CW
if(r!=null)r.$1(p)},
$S:2}
A.qW.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.k1.mL(A.U(this.b.checked))
s.k1=r
s=s.ch
if(s!=null)s.$1(r)},
$S:2}
A.qR.prototype={
$1(a){var s,r,q,p=this
A.a(a)
s=p.a
r=p.b
A:{if("interactionMode"===r){q=s.k1.mT(B.a.al(B.b4,new A.qK(p.c)))
break A}if("promptDensity"===r){q=s.k1.mZ(B.a.al(B.b7,new A.qL(p.c)))
break A}if("textPacing"===r){q=s.k1.n4(B.a.al(B.b6,new A.qM(p.c)))
break A}if("journalLayout"===r){q=s.k1.mW(B.a.al(B.aZ,new A.qN(p.c)))
break A}if("confirmations"===r){q=s.k1.mK(B.a.al(B.aV,new A.qO(p.c)))
break A}if("saveFeedback"===r){q=s.k1.n2(B.a.al(B.b_,new A.qP(p.c)))
break A}q=s.k1.mP(B.a.al(B.ax,new A.qQ(p.c)))
break A}s.k1=q
s=s.ch
if(s!=null)s.$1(q)},
$S:2}
A.qK.prototype={
$1(a){return t.bK.a(a).b===A.x(this.a.value)},
$S:123}
A.qL.prototype={
$1(a){return t.dn.a(a).b===A.x(this.a.value)},
$S:124}
A.qM.prototype={
$1(a){return t.j_.a(a).b===A.x(this.a.value)},
$S:125}
A.qN.prototype={
$1(a){return t.gm.a(a).b===A.x(this.a.value)},
$S:126}
A.qO.prototype={
$1(a){return t.aJ.a(a).b===A.x(this.a.value)},
$S:127}
A.qP.prototype={
$1(a){return t.mx.a(a).b===A.x(this.a.value)},
$S:128}
A.qQ.prototype={
$1(a){return t.x.a(a).b===A.x(this.a.value)},
$S:34}
A.qJ.prototype={
$1(a){var s,r,q,p,o=this
A.a(a)
s=o.a
r=s.ok
q=o.b
A:{if("output"===q){p=r.mX(B.a.al(B.b3,new A.qF(o.c)))
break A}if("dynamicRange"===q){p=r.mO(B.a.al(B.aY,new A.qG(o.c)))
break A}if("reverb"===q){p=r.n1(B.a.al(B.aX,new A.qH(o.c)))
break A}p=r.mN(B.a.al(B.aW,new A.qI(o.c)))
break A}s.ok=p
s=s.ay
if(s!=null)s.$1(p)},
$S:2}
A.qF.prototype={
$1(a){return t.xs.a(a).b===A.x(this.a.value)},
$S:130}
A.qG.prototype={
$1(a){return t.EL.a(a).b===A.x(this.a.value)},
$S:131}
A.qH.prototype={
$1(a){return t.gc.a(a).b===A.x(this.a.value)},
$S:132}
A.qI.prototype={
$1(a){return t.ul.a(a).b===A.x(this.a.value)},
$S:133}
A.qY.prototype={
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
A.qX.prototype={
$1(a){var s,r,q,p=this
A.a(a)
s=A.ft(A.x(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aJ(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:2}
A.bv.prototype={
B(){return"SettingCategory."+this.b}}
A.hW.prototype={
B(){return"SettingKind."+this.b}}
A.aV.prototype={
cY(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a7(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a7(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bU(a))throw A.d(A.a7(r.a+" must be boolean",q,q))
break}}}
A.r5.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:23}
A.r6.prototype={
$0(){return A.j(A.m("unknown setting: "+this.a))},
$S:6}
A.r3.prototype={
ko(a,b){var s,r=this.a
if(r!==1)throw A.d(A.y("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.r4(s.a).cY(s.b)}},
cj(a){var s=this.b.h(0,a)
return s==null?A.j(A.m("setting missing from profile: "+a)):s},
A(){return A.N(["version",this.a,"values",this.b],t.N,t.K)}}
A.r7.prototype={
oz(a){var s,r,q=A.fo(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.ds(q,1)
this.lP(a)},
A(){return A.N(["version",1,"requested",this.a.A(),"effective",this.b.A()],t.N,t.K)},
lP(a){var s,r,q=A.fo(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.ds(q,1)}}
A.rb.prototype={
kp(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.C(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.C(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.C(a,"div","entry-picker",null)
for(r=A.iX,q=0;q<2;++q){p=B.cC[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cI[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rc(this,p,m)
if(typeof k=="function")A.j(A.y("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.ef()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
soh(a){this.f=t.nf.a(a)}}
A.rc.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a4()},
$S:2}
A.cq.prototype={}
A.mz.prototype={
oO(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.H(s)
q=new A.T(s,r.i("i(1)").a(new A.mB()),r.i("T<1,i>")).bv(0)
r=this.b
r.G(0)
s=J.AD(a,t.N)
p=s.$ti
r.L(0,new A.K(s,p.i("n(o.E)").a(q.gap(q)),p.i("K<o.E>")))},
ng(a,b){var s,r,q,p,o,n=A.e([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mB.prototype={
$1(a){return t.bC.a(a).a},
$S:134}
A.mA.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:135}
A.l0.prototype={
gcI(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nI(a){return this.c.q(0,t.L.a(a))},
eM(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a5(0,g.gmH())||!a.a.a5(0,new A.rI(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fI(r,s.b,p)
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
if(m!=null)k=l==null||!B.a.M(l.f,new A.rJ(s))
else k=!1
if(k)return!1
j=new A.l_(r,g,A.aj(o,t.AP),B.a2)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.G(0)
g.L(0,a.a)
g=i.c
g.G(0)
g.L(0,h)
i.r=j
return!0},
hm(a){var s=this.a,r=A.q(s).i("ae<1>"),q=r.i("K<o.E>")
s=A.J(new A.K(new A.ae(s,r),r.i("n(o.E)").a(new A.rD(a)),q),q.i("o.E"))
B.a.S(s,new A.rE())
return s},
dJ(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.m6
s=m.a.h(0,a)
if(s==null)return B.m7
r=B.c.T(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bD:B.ai
o=p===B.ai&&m.x.q(0,q)&&s.R(B.bE)?B.bE:p
if(s.R(o))n=o
else n=s.R(B.ai)?B.ai:B.bD
r=s.h(0,n)
r.toString
m.r=new A.l_(a,n,A.aj(m.fI(a,n,r),t.AP),B.a2)
m.gcI()
r=m.r
r.toString
return new A.kZ(r)},
mB(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dE
if(n.d!==B.a2)return B.m4
n.e=a
s=a===B.a9
n.d=s?B.aD:B.ag
r=this.f
q=s?B.dC:B.lN
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dw(q,o,p,a,null))
if(a===B.aq)B.a.l(r,new A.dw(B.lQ,o,p,a,null))
if(s)this.fV(n)
return new A.kX(n)},
mg(){var s,r=this.r
if(r==null)return B.dE
s=r.d
if(s!==B.ag&&s!==B.ah)return B.m5
if(this.gcI()!=null&&r.w==null)return new A.b6(new A.bm(B.a3,"The visitor is waiting for an answer."))
r.d=B.ah
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aD
this.fV(r)
return new A.i7(r,!0)}return new A.i7(r,!1)},
mC(a){var s,r,q=this.r,p=this.gcI(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ag&&o!==B.ah}if(o)return B.m3
o=p.f
s=A.H(o)
r=A.bY(new A.K(o,s.i("n(1)").a(new A.rG(a)),s.i("K<1>")),t.Y)
if(r==null)return B.m8
q.w=r.a
return new A.kY(q,p,r)},
mD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ag&&s!==B.ah}else s=!0
if(s)return i
r=h.gbE()
if(r==null)return i
s=t.N
q=A.p(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cH
p=J.Q(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b2(q,s,s)
m=c.lI(!0,!0,o,new A.rQ(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aE){B.a.l(this.f,new A.dw(B.lP,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fo(B.a.gU(j.c).a,s,s)
s.L(0,q)
p.md(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dF)if(k===B.bF){s=n.b
s=s.gV(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dw(B.lO,o,p.b,i,l))}}return m},
fV(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fI(a,b,c){var s,r
t.cf.a(c)
s=A.e([],t.Fi)
for(r=J.Q(c);r.m();)s.push(this.lm(a,b,r.gn()))
return s},
lm(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.H(p)
s=A.bY(new A.K(p,r.i("n(1)").a(new A.rB(this)),r.i("K<1>")),t.aS)}return s==null?c:new A.c4(q,s.c,c.c)},
sjX(a){this.x=t.Q.a(a)}}
A.rI.prototype={
$1(a){var s=this.a.a
return new A.ae(s,A.q(s).i("ae<1>")).M(0,new A.rH(A.x(a)))},
$S:3}
A.rH.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:24}
A.rJ.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.rD.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:24}
A.rE.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:137}
A.rG.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.rF.prototype={
$0(){return A.e([],t.jV)},
$S:138}
A.rB.prototype={
$1(a){return t.aS.a(a).d.gJ().a5(0,new A.rA(this.a))},
$S:139}
A.rA.prototype={
$1(a){t.q.a(a)
return this.a.y.aU(a.a,a.b)},
$S:140}
A.rC.prototype={
$2(a,b){var s=t.AP
return B.c.F(s.a(a).a,s.a(b).a)},
$S:141}
A.l1.prototype={}
A.lx.prototype={}
A.v_.prototype={
$1(a){return B.b.W(A.x(a),"off.")},
$S:3}
A.bM.prototype={
B(){return"DoorChoice."+this.b}}
A.c2.prototype={
B(){return"VisitPhase."+this.b}}
A.c3.prototype={
B(){return"VisitTier."+this.b}}
A.e1.prototype={
B(){return"VisitorFactKind."+this.b}}
A.dw.prototype={
A(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d0.prototype={
B(){return"VisitorIssueCode."+this.b}}
A.bm.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.bm&&b.a===this.a&&b.b===this.b},
gI(a){return A.cB(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c4.prototype={
a_(a,b){if(b==null)return!1
return b instanceof A.c4&&b.a===this.a&&b.b===this.b},
gI(a){return A.cB(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bQ.prototype={
a_(a,b){var s=this
if(b==null)return!1
return b instanceof A.bQ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gI(a){var s=this
return A.cB(s.a,s.b,s.c,s.d,B.f,B.f)},
A(){var s=this
return A.N(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.l2.prototype={
A(){var s,r,q,p=this.a
p=A.J(p,A.q(p).c)
B.a.X(p)
s=this.b
r=A.q(s)
q=r.i("df<1,X<i,@>>")
s=A.J(new A.df(s,r.i("X<i,@>(1)").a(new A.rz()),q),q.i("o.E"))
r=this.c
return A.N(["contacted",p,"resolved",s,"active",r==null?null:r.A()],t.N,t.z)}}
A.rz.prototype={
$1(a){return t.L.a(a).A()},
$S:142}
A.ja.prototype={
A(){var s,r=this,q=A.p(t.N,t.z)
q.k(0,"arrival",r.a.A())
q.k(0,"tier",r.b.b)
q.k(0,"phase",r.c.b)
q.k(0,"lineIndex",r.d)
s=r.e
q.k(0,"choice",s==null?null:s.b)
q.k(0,"complianceMarked",r.f)
s=r.r
if(s!=null)q.k(0,"reactionChoiceId",s)
return q}}
A.mw.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:143}
A.mx.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:144}
A.my.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:145}
A.l_.prototype={
gbE(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.rK.prototype={}
A.b6.prototype={}
A.kZ.prototype={}
A.kX.prototype={}
A.i7.prototype={}
A.kY.prototype={}
A.fI.prototype={}
A.iw.prototype={
gbn(){var s,r=this.x1
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.qm("pixeldart",r?this.gmv():B.iN,!1,null,s)},
gdM(){if(this.x1){var s=this.d
s===$&&A.h()
s=s.b===B.aa}else s=!1
return s},
gmv(){var s,r
if(!this.x1)return B.o
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.ei.mw(s,r)},
gnx(){var s="shadowCaster",r=this.p3
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.j3(s).a+";shadowTriangles="+r.j3(s).b+";frameMs="+B.d.aM(this.p4,3)},
gnw(){var s=this.p3
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.p4<=100},
bc(){var s,r,q,p,o,n,m=this,l=A.CB(m.a)
m.d=l
l=l.j9()
m.r=l
l=m.w=B.bV.ju(l)
q=m.b
p=m.c
s=new A.kL(q,p,q,p)
p=A.y3(m.d)
m.e=p
try{p.iT(new A.ky(l,384,216,l.b.q(0,"shadows")?1:0),s)}catch(o){r=A.ag(o)
l=m.w
if(l===B.ay)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.w(r)
m.w=B.ay
l=A.y3(m.d)
l.iT(B.ks,s)
m.e=l}l=m.e
l.ct()
n=A.Cd(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.x2=A.BW(!0,!0,!0)
m.x1=!0},
b4(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("Pixeldart surface size must be positive",null))
if(!r.x1){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.ct()
new A.kL(a,b,a,b).C()
r.b=a
r.c=b},
mk(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.x1||b3.Q.length!==0)return
b3.y2=b9
s=b3.go
r=b3.e
r===$&&A.h()
s.k(0,b5,r.gbd().eI("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbd().eI("texture:grime",512,512))
for(q=0;q<2;++q){p=B.iQ[q]
r=b3.e.w
if(r==null)r=A.j(A.m(b7))
s.k(0,p,r.eI("texture:"+p,256,256))}b3.dB()
b3.k4=b3.e.gbd().ou(A.pq(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k2,m=b3.k1,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
i=A.p(l,k)
for(h=A.N(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cy(h,h.r,h.e,A.q(h).i("cy<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.b8.h(0,d)
if(c==null)A.j(A.m("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.j(A.m(b7))
a=e.a
a0=c.a
d=A.pq(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.w)A.j(A.m(b8))
d.C()
a1=b.b.a.aD(d,b4)
b.f.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.k3,q=0;q<7;++q){a2=B.ii[q]
n=b3.e.w
if(n==null)n=A.j(A.m(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dv(a2)
h=b3.dv(a2)
k=A.pq(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dv(a2).c,h.b,k.a,1,1)
if(n.w)A.j(A.m(b8))
k.C()
a1=n.b.a.aD(k,b4)
n.f.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q)b3.lg(b9,r[q])
b3.lJ(b9)
$.B.j().setAttribute("data-renderer-house-model-scale",B.d.aM(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.r)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.fb(k,b3.fO(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.tn(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.r)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.fv(b9,j,a5)
h=b3.e.w
if(h==null)h=A.j(A.m(b7))
g=a5.a
if(h.w)A.j(A.m(b8))
f=h.a
a6.C()
a1=f.b.aD(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.bl(a6))
h.e.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.k4
f.toString}a7=new A.bu(a1,f,B.A,0,B.R,B.a6,!0,!0,0,b4)
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
b=B.A.aa()
d=d.gav()
a=A.H(d)
A.bd(new A.T(d,a.i("M(1)").a(b.gaA()),a.i("T<1,M>")))
n.k(0,g,new A.iv(g,h,f.b.c_(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.r)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.fb(o,b3.fO(j,a5.aH(o),a5.ae(o),a5.ae(o)+a5.w,0,a5.x,5915445),new A.to(a5))}for(r=A.Gg(A.Fw(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.id,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.r)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.j(A.m(b7))
b=s.h(0,a9)
a=b3.dt(f)
a0=b3.dt(f)
a=A.pq(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.dt(f).c,a0.b,a.a,1,1)
if(d.w)A.j(A.m(b8))
a.C()
a1=d.b.a.aD(a,b4)
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
a1=a0.b.aD(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.bl(b))
d.e.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ac.q(0,a))A.j(A.y("unknown exterior cell: "+a,b4))
b2=new A.bu(a1,c,B.A,-1,B.R,B.a6,B.kQ.q(0,a),!0,0,b4)
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
b=B.A.aa()
d=d.gav()
a=A.H(d)
A.bd(new A.T(d,a.i("M(1)").a(b.gaA()),a.i("T<1,M>")))
k.k(0,b1,f.b.c_(b2))}},
jx(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.fy=A.aj(a8.e,t.fl)
if(!a5.x1)return
for(s=a5.ch,r=new A.I(s,A.q(s).i("I<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b3(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.j(A.m(a6))
o=n.a
if(p.w)A.j(A.m(a7))
p.a.b3(o)
p.e.a1(0,o)}}s.G(0)
q.G(0)
r=a5.cx
B.a.G(r)
for(p=a5.fy,o=p.length,m=a8.c,l=a5.k3,k=0;k<o;++k){j=p[k]
i=a5.y2
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cF(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.j(A.m(a6))
f=a5.lj(g,j,m)
e=j.a
if(i.w)A.j(A.m(a7))
d=i.a
f.C()
c=d.b.aD(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bl(f))
i.e.l(0,c)
i=j.f
f=i.a
a=B.a1.ga9()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.kP(new A.M(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.kw(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bu(c,a2,i,-1,B.R,B.a6,d!=="micro",!0,0,null)
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
i=i.aa()
f=f.gav()
b=A.H(f)
A.bd(new A.T(f,b.i("M(1)").a(i.gaA()),b.i("T<1,M>")))
s.k(0,e,d.b.c_(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
jI(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aJ([s],r)
for(p=c1.aw(s),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.bK(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.I(b9,A.q(b9).i("I<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.e([],p)
for(g=J.aC(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.f(i,f)
e=b8.bX(i[f],k)
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
b=b.aa()
a=a.gav()
a0=A.H(a)
A.bd(new A.T(a,a0.i("M(1)").a(b.gaA()),a0.i("T<1,M>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a0(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.f(d,c)
d[c].sb0(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gO(h))}for(b9=b8.fx,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.r)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.h()
o=b8.bX(a4.c,k)
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
n=n.aa()
i=i.gav()
g=A.H(i)
A.bd(new A.T(i,g.i("M(1)").a(n.gaA()),g.i("T<1,M>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a0(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].sb0(o)}b9=b8.fr
s=A.q(b9).i("ae<1>")
s=A.J(new A.ae(b9,s),s.i("o.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.r)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bX(o,q.q(0,a5.b)?-1:0)
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
i=i.aa()
g=g.gav()
d=A.H(g)
A.bd(new A.T(g,d.i("M(1)").a(i.gaA()),d.i("T<1,M>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a0(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].sb0(e)
b9.k(0,a5.a,a5.mM(e))}for(b9=b8.fy,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.h()
i=b8.bX(a8,q.q(0,a6.b)?-1:0)
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
g=g.aa()
d=d.gav()
c=A.H(d)
A.bd(new A.T(d,c.i("M(1)").a(g.gaA()),c.i("T<1,M>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a0(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.f(n,c)
n[c].sb0(i)}a9=new A.jG().mA(c2)
b9=$.B.j()
s=A.J(a9,A.q(a9).c)
B.a.X(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.a7(s,","))
b9=b8.dx
r=new A.jG().iL(new A.tp(b8),new A.ae(b9,A.q(b9).i("ae<1>")),a9,r)
b0=A.k8(r,r.$ti.i("o.E"))
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
e=b8.bX(a8,b6?-1:0)
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
n=n.aa()
i=i.gav()
g=A.H(i)
A.bd(new A.T(i,g.i("M(1)").a(n.gaA()),g.i("T<1,M>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a0(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.f(o,g)
o[g].sb0(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.q(b0)
s=b9.i("df<1,i>")
b7=A.J(new A.df(b0,b9.i("i(1)").a(new A.tq(b8)),s),s.i("o.E"))
B.a.X(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a7(b7,","))},
ot(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.x1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.fY(b0,n)
l=J.aC(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.e([],t.s6)
j=A.e([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.h()
d=d.w
if(d==null)d=A.j(A.m(a8))
c=a7.fJ(e.b)
b=g.b
if(d.w)A.j(A.m(a9))
a=d.a
c.C()
a0=a.b.aD(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bl(c))
d.e.l(0,a0)
if(!(f<q.length))return A.f(q,f)
a1=q[f]
d=a1.c
a2=new A.bu(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
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
d=d.aa()
b=b.gav()
a3=A.H(b)
A.bd(new A.T(b,a3.i("M(1)").a(d.gaA()),a3.i("T<1,M>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a0(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.f(c,a)
c[a].sb0(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.f(o,f)
a6=o[f]
B.a.a1(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.j(A.m(a8)):a
if(d.w)A.j(A.m(a9))
d.a.b3(a6)
d.e.a1(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gO(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.c6+1));++a7.c6},
eH(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gbd().jc(k.fv(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bu(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.hk(l)
p.b.jg(n,l)
s.k(0,b,r.hu(l,m))
s=k.y
n=r.d
B.a.a1(s,n)
B.a.l(s,m)
k.e.gbd().ov(n)},
jy(b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=A.aJ([b2],t.N),a9=b1.e,b0=a9.h(0,b2)
if(b0!=null)for(s=b0.a,r=b1.aw(s),q=J.Q(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.bK(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&a9.h(0,o)!=null)a8.l(0,o)}n=new A.jV(b1).jj(a8,b3)
m=A.e([],t.Fk)
l=A.e([],t.cv)
for(k=0;k<n.length;++k){j=n[k]
a9=j.b
i=new A.cx((a9>>>16&255)/255,(a9>>>8&255)/255,(a9&255)/255)
a9=j.a
h=new A.M(a9.a,a9.b,a9.c)
a9=j.d
s=j.c
if(k===0)B.a.l(l,new A.bx(k,h,B.aC,i,a9,s,1.05,1.4))
else B.a.l(m,new A.kr(h,i,a9,s))}a9=b6.c
g=B.d.P(B.d.P(b8,24)+24,24)
f=B.d.H(a9,0,1)
e=(g>=6&&g<=18?Math.sin(3.141592653589793*((g-6)/12))*60:-15)*3.141592653589793/180
d=(90+g/24*360)*3.141592653589793/180
s=Math.cos(d)*Math.cos(e)
r=B.d.H(Math.sin(e),0,1)
q=Math.sin(d)*Math.cos(e)
p=B.d.H(1-r,0.1,0.9)
if(g>=5&&g<7){c=(g-5)/2
b=A.dd(B.kd,B.bj,c)
a=A.dd(B.kf,B.bi,c)
a0=A.dd(B.k9,B.bk,c)
a1=0.3+0.5*c
a2=0.25+0.2*c}else if(g>=7&&g<17){b=B.bj
a=B.bi
a0=B.bk
a1=0.85
a2=0.45}else if(g>=17&&g<19){c=(g-17)/2
b=A.dd(B.bj,B.d7,c)
a=A.dd(B.bi,B.dc,c)
a0=A.dd(B.bk,B.db,c)
a1=0.85*(1-c*0.6)
a2=0.45*(1-c*0.5)}else if(g>=19&&g<21){c=(g-19)/2
b=A.dd(B.d7,B.da,c)
a=A.dd(B.dc,B.d9,c)
a0=A.dd(B.db,B.dd,c)
a1=0.34*(1-c*0.6)
a2=0.22*(1-c*0.4)}else{b=B.da
a=B.d9
a0=B.dd
a1=0.15
a2=0.18}if(f>0){a3=A.dd(a0,B.kn,f*0.7)
a1*=1-f*0.35
a2*=1-f*0.15}else a3=a0
a4=b7?1:0.15
B.d.H(f*0.75+B.d.H(0.3333333333333333,0,1)*0.25,0,1)
a5=b4>0
a6=a5?new A.M(s,r,q):new A.M(-s,p,-q)
a7=a5?new A.cx(b.c,b.b,b.a):new A.cx(0.35,0.45,0.65)
this.p1=new A.jJ(B.hL,new A.cx(a3.c*0.08,a3.b*0.08,a3.a*0.08),1.5/(1+a9*0.45),14/(1+a9*0.16),new A.cx(a.c,a.b,a.a),Math.max(0.045,a2*(a5?b5:1)*a4),new A.nF(a6,a7,a1*a4),m,l)},
b6(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.x1)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.ok
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dn(s)
s=$.xe()
q=s.b
p=s.c
o=A.w0(i.b/i.c,p,s.a,q)
p=new A.fb(r,o,o.a3(0,r),B.af,B.ly,q,p,i.b/i.c)
s=p}q=i.p1
p=i.p2
n=i.ry++
m=i.R8
l=new A.rd()
$.x9()
k=$.q2.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.mn(j,new A.o_(s,q,p,n,m))
i.p3=i.e.nk()
s=$.q2.$0()
l.b=s
i.p4=l.gnh()/1000},
bt(a){},
iX(){},
ja(){++this.RG},
fY(a,b){var s=A.zK(a,b),r=A.Fv(a,b),q=A.J(s.c,t.i)
B.a.L(q,r)
return A.e([new A.fI("wall",new Float32Array(A.a1(q))),new A.fI("floor",s.a),new A.fI("ceiling",s.b)],t.pv)},
fJ(a){var s,r,q,p,o,n=A.e([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.f(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.f(a,o)
B.a.l(n,new A.M(q,p,a[o]))}if(n.length===0)throw A.d(A.m("house surface mesh cannot be empty"))
return new A.cg(B.a7,a,null,A.bd(n))},
lg(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.fY(a2,a3),a0=a3.a,a1=b.k2.h(0,a0)
if(a1==null)throw A.d(A.m("surface materials missing for room "+a0))
s=A.e([],t.s6)
r=A.e([],t.s3)
q=A.e([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.h()
k=k.w
if(k==null)k=A.j(A.m("renderer is not initialized"))
j=b.fJ(l.b)
i=l.a
if(k.w)A.j(A.m("resource library is disposed"))
h=k.a
j.C()
g=h.b.aD(j,n+i)
f=g.a
h.c.k(0,f,h.bl(j))
k.e.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bu(g,i,B.A,-1,B.R,B.a6,!0,!0,0,null)
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
j=B.A.aa()
k=k.gav()
h=A.H(k)
A.bd(new A.T(k,h.i("M(1)").a(j.gaA()),h.i("T<1,M>")))
c=i.b.c_(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gO(r))
if(q.length!==0)b.at.k(0,a0,B.a.gO(q))},
lJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.e([],f),d=A.e([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k2,p=0;p<f.length;f.length===s||(0,A.r)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.N(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cy(l,l.r,l.e,A.q(l).i("cy<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.b8.h(0,i)
if(h==null)A.j(A.m("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.X(d)
f=$.B.j()
B.a.X(e)
f.setAttribute("data-renderer-house-materials",B.a.a7(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.a7(d,","))},
fb(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.h()
r=s.gbd().jc(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bu(r,p.lo(a),B.A,0,B.R,B.a6,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.hk(q)
B.a.l(p.fx,new A.lA(a,s.b.c_(q),q,c))},
lo(a){var s=this.k1.h(0,a)
if(s==null){s=this.k4
s.toString}return s},
lj(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cW(new Float32Array(5376))
g=this.li(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.az(q,r,o,p,g)
s.az(n,m,l,k,g)
s.az(r,n,k,o,g)
s.az(m,q,p,l,g)
s.az(r,q,m,n,g)
s.az(o,k,l,p,g)
j=B.q.aO(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.M(e,d,j[c]))}return new A.cg(B.a7,j,null,A.bd(g))},
li(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dt(a){var s
A:{if(0===a){s=B.ka
break A}if(1===a){s=B.kc
break A}if(2===a){s=B.ki
break A}if(3===a){s=B.kq
break A}if(4===a){s=B.kr
break A}if(5===a){s=B.kg
break A}if(6===a){s=B.kp
break A}if(7===a){s=B.kl
break A}s=B.ko
break A}return s},
dv(a){var s
A:{if("architecture"===a){s=B.kb
break A}if("furniture"===a){s=B.d8
break A}if("fixture"===a){s=B.kk
break A}if("service"===a){s=B.km
break A}if("story"===a){s=B.kj
break A}if("decor"===a){s=B.ke
break A}if("micro"===a){s=B.kh
break A}s=B.d8
break A}return s},
aV(a){return this.nP(t.G.a(a))},
nP(a){var s=0,r=A.bF(t.H),q,p=this,o,n,m,l
var $async$aV=A.bI(function(b,c){if(b===1)return A.bC(c,r)
for(;;)switch(s){case 0:if(!p.x1){s=1
break}o=A.e([],t.iJ)
for(n=0;n<4;++n){m=B.hV[n]
l=a.h(0,m)
if(l!=null)o.push(p.cw(m,l))}s=3
return A.am(A.o5(o,t.H),$async$aV)
case 3:case 1:return A.bD(q,r)}})
return A.bE($async$aV,r)},
cw(a,b){return this.ln(a,b)},
ln(a,b){var s=0,r=A.bF(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cw=A.bI(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.go.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.am(A.aZ(A.a(m.decode()),t.X),$async$cw)
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
h=h.gbd()
f=new Uint8Array(A.a1(j))
if(h.w)A.j(A.m("resource library is disposed"))
h.c.oX(d,f)
$.B.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dB()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ag(c)
h=$.B.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dB()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bD(q,r)
case 2:return A.bC(o.at(-1),r)}})
return A.bE($async$cw,r)},
dB(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.x1||h.go.a===0)return
s=h.go
r=A.q(s).i("I<1,2>")
r=A.k9(new A.I(s,r),r.i("cj(o.E)").a(new A.tj()),r.i("o.E"),t.jP)
q=A.J(r,A.q(r).i("o.E"))
s=h.e
s===$&&A.h()
s=s.gbd()
p=s.d
o=(p===$?s.d=new A.rk(s.c,A.p(t.Aj,t.y)):p).oq(q)
s=o.a
n=A.e(s.slice(0),A.H(s))
B.a.S(n,new A.tk())
s=A.H(n)
r=s.i("i(1)")
s=s.i("T<1,i>")
m=new A.T(n,r.a(new A.tl()),s).a7(0,",")
l=new A.T(n,r.a(new A.tm()),s).a7(0,",")
s=o.cs(B.dt)
r=o.cs(B.du)
k=o.cs(B.dv)
j=o.cs(B.dw);++h.to
i=$.B.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.to)
if(!A.U($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",m)},
bX(a,b){return new A.bu(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
fv(a,b,c){var s,r,q,p,o,n=A.Fu(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.M(q,p,n[o]))}return new A.cg(B.a7,n,null,A.bd(s))},
fO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Y.j().aG(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cW(new Float32Array(5376))
o.az(k[0],k[1],k[2],k[3],g)
n=B.q.aO(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.M(r,q,n[p]))}return new A.cg(B.a7,n,null,A.bd(k))},
$iw8:1}
A.tn.prototype={
$0(){return!this.a.w},
$S:25}
A.to.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:25}
A.tp.prototype={
$1(a){var s=this.a.dx.h(0,A.x(a))
s.toString
return s},
$S:32}
A.tq.prototype={
$1(a){var s,r,q,p
A.x(a)
s=this.a
r=s.id.h(0,a)
q=r==null
p=q?null:s.go.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:32}
A.tj.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.cj(s,a.b,r)},
$S:148}
A.tk.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:149}
A.tl.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:31}
A.tm.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:31}
A.fE.prototype={
gbn(){return A.qm("legacy",B.o,this.e,this.f,"legacy")},
gdM(){return this.x},
bc(){var s,r=this
if(r.w)return
s=A.Ce(r.a,r.b,r.c)
r.r!==$&&A.L()
r.r=s
s.i0=s.i_=s.hZ=r.d
r.w=!0},
b4(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.b4(a,b)}},
b6(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.w)throw A.d(A.m("legacy runtime is not initialized"))
if(i.x||$.fV==null)return;++i.y
$.B.j().setAttribute("data-renderer-frame-submits",""+i.y)
s=i.r
s===$&&A.h()
r=$.zd
q=$.bT.j()
p=B.d.H($.b9.j().gbw(),0,1)
s.i4=new A.b(Math.cos((p-0.5)*3.141592653589793),Math.sin(3.141592653589793*p),-0.5).ga9().ga9()
s.siW(A.Ge($.b9.j().gbw()))
o=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.b9.j().gbw()))
s.i8=o<0?0:o
o=$.bS.j()
n=o.w+=r
m=0.025*o.r
o.a=o.a.a8(0,o.d.a3(0,(A.vC(n*0.28,1309)*2-1)*m)).a8(0,o.c.a3(0,(A.vC(o.w*0.28,2839)*2-1)*m))
o=$.bS.j()
s.i9=o.a
s.e9=o.b
s.ea=o.c
s.eb=o.d
l=A.Eg(0,0.25,0.11)
s.ec=l.a
s.ed=l.b
s.ee=l.c
o=s.cP
k=o==null?s.c2:o
if(k==null)k=s.bp
o=s.b1
o.b9(k)
s.aR.depthMask(!0)
o.mE(k,s.ec/255,s.ed/255,s.ee/255)
s.e4=s.cQ=0
s.e6=!1
s.c4=0
j=$.fV
if(j!=null)j.ne($.ax,$.j7())
s.nv(r,q)
$.yJ.j().eP(B.eg,r)},
bt(a){},
iX(){this.x=!0},
ja(){this.x=!1},
$iw8:1}
A.lA.prototype={}
A.iv.prototype={
hu(a,b){var s=this,r=b==null?s.d:b
return new A.iv(s.a,s.b,s.c,r,a)},
mM(a){return this.hu(a,null)}}
A.rX.prototype={}
A.tR.prototype={
$2(a,b){var s
A.wQ(a,A.w(b))
switch(a){case"master":s=$.bp
if(s!=null)s.jC(b)
break
case"voice":s=$.bp
if(s!=null)s.jE(b)
break
case"effects":s=$.bp
if(s!=null)s.jB(b)
break
case"ambience":s=$.bp
if(s!=null)s.jA(b)
break
case"music":s=$.bp
if(s!=null)s.jD(b)
break}},
$S:30}
A.tS.prototype={
$1(a){var s
A.wQ("muted",""+a)
s=$.bp
if(s!=null)s.f0(a)},
$S:10}
A.tT.prototype={
$1(a){var s
A.wQ("mono",""+a)
s=$.bp
if(s!=null)s.d4(a)},
$S:10}
A.tZ.prototype={
$2(a,b){A.wR(a,A.w(b))
A.yO(a,b)},
$S:30}
A.u_.prototype={
$1(a){var s="high-contrast"
A.wR(s,""+a)
A.tH(s,a)},
$S:10}
A.u0.prototype={
$1(a){var s="strong-highlights"
A.wR(s,""+a)
A.tH(s,a)},
$S:10}
A.u1.prototype={
$1(a){$.d8().oz(a)
A.uD()
A.yQ()},
$S:152}
A.u2.prototype={
$0(){var s=$.d8()
s.a=A.ds(null,1)
s.b=A.ds(null,1)
A.uD()
A.yQ()},
$S:0}
A.u3.prototype={
$0(){A.dC(this.a)},
$S:0}
A.u4.prototype={
$0(){this.a.a4()},
$S:0}
A.u5.prototype={
$0(){A.dC(this.a)},
$S:0}
A.tU.prototype={
$0(){A.fZ(this.a)},
$S:0}
A.tV.prototype={
$1(a){$.iV=a
A.zk()
A.wq()},
$S:153}
A.tW.prototype={
$1(a){$.wB=a
A.zm()
A.yP()},
$S:154}
A.tX.prototype={
$1(a){$.e7=a
A.wI()
A.m1()},
$S:155}
A.tY.prototype={
$0(){$.e7=B.aj
$.eV.j().eY($.e7)
A.wI()
A.m1()},
$S:0}
A.tO.prototype={
$1(a){var s,r=A.zX(a,A.z5()),q=r.a
$.us=A.jS(q,a)
A.zn()
s=r.b
$.fR.j().f1(a,q,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.a7(s,"|"))},
$S:156}
A.tP.prototype={
$0(){A.dC($.fR.j())},
$S:0}
A.tQ.prototype={
$0(){A.dC($.fR.j())},
$S:0}
A.tL.prototype={
$1(a){var s,r
$.wy=a
$.ad.j().eZ(a.r)
s=$.ad.j()
r=s.ch
r.a=a.f
r.eK()
s.b7()
A.zl()},
$S:157}
A.tM.prototype={
$0(){A.dC($.iN.j())},
$S:0}
A.tN.prototype={
$0(){A.dC($.iN.j())},
$S:0}
A.uw.prototype={
$0(){$.uM=A.U(this.a.matches)
$.wU=A.U(this.b.matches)
A.m1()},
$S:0}
A.uu.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:1}
A.uv.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:1}
A.v7.prototype={
$1(a){var s
try{A.xy(a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.F)return!1
else throw s}},
$S:158}
A.v8.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.iT.j()
break
case 5:p=$.eV.j()
break
case 1:p=$.fR.j()
break
case 4:p=$.fP.j()
break
case 2:p=$.iP.j()
break
case 3:p=$.iN.j()
break}s=p
r=null
switch(o){case 0:r=B.jF
break
case 5:r=B.jK
break
case 1:r=B.jG
break
case 4:r=B.jJ
break
case 2:r=B.jH
break
case 3:r=B.jI
break}q=r
p=B.cP.h(0,a)
p.toString
A.wH(s,q,p)},
$S:159}
A.v9.prototype={
$0(){A.dC($.fT.j())},
$S:0}
A.vk.prototype={
$0(){return A.dC($.fT.j())},
$S:0}
A.vq.prototype={
$0(){$.co.j().a4()},
$S:0}
A.vr.prototype={
$0(){$.co.j().a4()},
$S:0}
A.vs.prototype={
$0(){A.wH($.fT.j(),B.cV,"pause.settings")},
$S:0}
A.vt.prototype={
$0(){$.co.j().a4()
A.j1($.iQ.j())},
$S:0}
A.vu.prototype={
$0(){A.mg("saved")},
$S:0}
A.vv.prototype={
$0(){$.co.j().a4()
A.j1($.iQ.j())},
$S:0}
A.vw.prototype={
$0(){A.wH($.lY.j(),B.jL,"pause.credits")},
$S:0}
A.va.prototype={
$0(){return A.fZ($.co.j())},
$S:0}
A.vb.prototype={
$0(){return A.fZ($.fS.j())},
$S:0}
A.vc.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gab().a===21){A.zt(!1)
return}s=$.Y.j().r.b
$.V.j().jS(a,b,$.ax)
r=$.Y.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.d3()
if(typeof n!=="number")return A.j5(n)
if(!(o<n))break
if($.Y.b===$.Y)A.j(A.a9(""))
p=B.a.h(B.M,q).b
o=$.fV
if(o!=null)o.cX(p)
o=$.bG
if(o!=null){n=$.Y.b
if(n===$.Y)A.j(A.a9(""))
o.ot(n,p)}o=q
if(typeof o!=="number")return o.a8()
q=o+1}A.mg("saved after sleep")},
$S:160}
A.vd.prototype={
$0(){return A.fZ($.m_.j())},
$S:0}
A.ve.prototype={
$0(){return A.fZ($.iQ.j())},
$S:0}
A.vf.prototype={
$0(){return A.dC($.lY.j())},
$S:0}
A.vg.prototype={
$0(){A.fZ($.iO.j())},
$S:0}
A.vh.prototype={
$0(){A.fZ($.iO.j())},
$S:0}
A.vi.prototype={
$1(a){A.a(a)
return A.zs()},
$S:1}
A.vj.prototype={
$1(a){A.a(a)
if(A.x(A.a(v.G.document).visibilityState)==="hidden")A.EM()},
$S:2}
A.vl.prototype={
$1(a){var s,r
A.a(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"&&!A.U(a.repeat)){r=$.ba
if(r==null)A.j1($.co.j())
else r.a4()
return}s=$.ba==null
if(!A.U(a.repeat)&&s)$.d4.j().bt(new A.kz(A.x(a.code),!0,1))
if(A.x(a.code)==="KeyP"&&!A.U(a.repeat)&&$.Ao())$.mc=!$.mc
if(A.x(a.code)==="KeyR"&&!A.U(a.repeat)&&s&&$.zE){r=$.h_
if(r!=null)r.bM()}if(A.x(a.code)==="KeyJ"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j4($.fS.j())
if(A.x(a.code)==="KeyL"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j4($.m_.j())
if(A.x(a.code)==="KeyH"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j4($.iQ.j())
if(A.x(a.code)==="KeyO"&&!A.U(a.repeat)&&!$.aF.j().ax)A.j4($.iS.j())
if(A.x(a.code)==="KeyK"&&!A.U(a.repeat)&&s)A.mg("saved")},
$S:2}
A.vm.prototype={
$1(a){A.a(a)
if($.ba==null)$.d4.j().bt(new A.kz(A.x(a.code),!1,0))},
$S:2}
A.vn.prototype={
$1(a){A.a(a)
return A.yS()},
$S:1}
A.vo.prototype={
$1(a){A.a(a)
return A.yS()},
$S:1}
A.vp.prototype={
$1(a){A.a(a)
return $.ad.j().cf($.B.j())},
$S:1}
A.ux.prototype={
$1(a){var s=A.x(A.a(a).message)
A.uG(s,null)},
$S:2}
A.uy.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.uG("unhandled rejection: "+A.w(s==null?A.x(a.type):s),null)},
$S:2}
A.uC.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:34}
A.uK.prototype={
$0(){this.a.className=""},
$S:12}
A.uP.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:39}
A.uB.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:22}
A.uH.prototype={
$1(a){return t.g.a(a).e},
$S:21}
A.uE.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.uF.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.dT.prototype
s.k_=s.p
s=A.o.prototype
s.jZ=s.d_
s=A.hK.prototype
s.k0=s.bJ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"En","BH",29)
r(J.u.prototype,"gap","q",9)
q(A,"EB","BZ",33)
r(A.aH.prototype,"gap","q",9)
p(A.ce.prototype,"gmH","R",9)
o(A,"Fq","CR",17)
o(A,"Fr","CS",17)
o(A,"Fs","CT",17)
q(A,"zJ","F7",0)
s(A,"Fy","BM",29)
r(A.cl.prototype,"gap","q",9)
r(A.fD.prototype,"gap","q",9)
o(A,"FB","DZ",11)
p(A.kb.prototype,"goF","oG",146)
var n
p(n=A.kO.prototype,"goB","oC",7)
p(n,"goJ","oK",7)
p(n,"goL","oM",7)
p(n,"goD","oE",7)
p(n,"goH","oI",7)
q(A,"zN","CW",163)
q(A,"H6","w4",25)
p(A.dn.prototype,"gaA","je",84)
p(n=A.jY.prototype,"glq","lr",1)
p(n,"gls","lt",1)
p(n,"glw","lx",1)
p(n,"glA","lB",1)
p(n,"glC","lD",1)
p(n,"gly","lz",1)
p(n,"glu","lv",1)
o(A,"G2","yY",11)
o(A,"G6","yX",11)
o(A,"FS","BE",164)
o(A,"FT","BF",165)
o(A,"Ga","By",166)
p(A.hK.prototype,"glE","lF",1)
p(A.fy.prototype,"glc","ld",121)
p(A.l0.prototype,"gnH","nI",24)
o(A,"zW","EP",167)
o(A,"FW","DQ",37)
q(A,"FZ","DW",0)
o(A,"FX","DR",37)
o(A,"FY","DS",112)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.G,null)
q(A.G,[A.vV,J.k_,A.hV,J.eg,A.o,A.hc,A.dK,A.al,A.W,A.qz,A.aS,A.hC,A.S,A.hm,A.hj,A.i9,A.ar,A.cY,A.bR,A.fp,A.fd,A.eQ,A.dr,A.rr,A.pF,A.hk,A.iA,A.aa,A.pl,A.cf,A.ah,A.cy,A.hw,A.lu,A.la,A.i0,A.lO,A.rZ,A.tx,A.cD,A.ln,A.lR,A.tu,A.lb,A.cF,A.b_,A.lf,A.eM,A.aw,A.lc,A.lM,A.iL,A.ik,A.lt,A.eR,A.ip,A.iF,A.lS,A.ek,A.js,A.th,A.ty,A.el,A.dM,A.lk,A.km,A.hZ,A.t_,A.F,A.P,A.az,A.lP,A.rd,A.bk,A.iH,A.rt,A.lI,A.pE,A.lq,A.fG,A.q5,A.ez,A.nk,A.nl,A.ks,A.fb,A.jJ,A.o_,A.dq,A.jT,A.cx,A.nF,A.kr,A.bx,A.ew,A.by,A.rx,A.cg,A.pG,A.pZ,A.kA,A.bu,A.kL,A.ky,A.aI,A.o1,A.kb,A.kS,A.pw,A.cj,A.c1,A.rm,A.rk,A.dy,A.kO,A.et,A.jH,A.jI,A.o0,A.nZ,A.fF,A.au,A.be,A.aN,A.O,A.hd,A.q3,A.bj,A.q7,A.b4,A.q9,A.q8,A.lp,A.hQ,A.qp,A.t0,A.lQ,A.tt,A.lB,A.lm,A.lF,A.lz,A.tc,A.bN,A.bL,A.aO,A.nB,A.nA,A.j8,A.ey,A.o2,A.dn,A.kw,A.kP,A.M,A.hb,A.ld,A.jj,A.le,A.jw,A.lh,A.hh,A.li,A.jA,A.lj,A.jR,A.lo,A.kd,A.lv,A.f9,A.jk,A.w5,A.hM,A.lC,A.kv,A.lD,A.eG,A.kE,A.lG,A.kF,A.lH,A.kI,A.lK,A.kH,A.lJ,A.kW,A.lT,A.hS,A.l6,A.lW,A.ni,A.jM,A.jO,A.hq,A.hX,A.A,A.jx,A.kt,A.ol,A.e5,A.cT,A.fh,A.rP,A.dz,A.iK,A.iJ,A.lV,A.lU,A.tC,A.jz,A.je,A.fL,A.mK,A.ms,A.h9,A.mG,A.vP,A.mS,A.mM,A.ia,A.fa,A.nh,A.nY,A.kM,A.oj,A.jW,A.jY,A.oX,A.p0,A.ka,A.hD,A.ps,A.cW,A.qf,A.qo,A.rR,A.ii,A.lL,A.ly,A.lw,A.r8,A.b,A.kJ,A.l7,A.na,A.jB,A.nN,A.fi,A.bo,A.kq,A.q_,A.fx,A.qu,A.eE,A.jK,A.o9,A.o8,A.mZ,A.f4,A.f6,A.f3,A.f5,A.jl,A.kc,A.ic,A.l8,A.hs,A.oB,A.qq,A.a_,A.jE,A.jU,A.oC,A.jF,A.d3,A.jG,A.e4,A.dO,A.qr,A.e3,A.fK,A.oz,A.nR,A.r9,A.oE,A.cQ,A.cv,A.p3,A.p1,A.p2,A.cS,A.jV,A.b7,A.bt,A.bg,A.bi,A.de,A.dt,A.aU,A.oK,A.cP,A.oA,A.es,A.oJ,A.cO,A.oO,A.hL,A.hB,A.bf,A.rL,A.k7,A.bW,A.p5,A.n5,A.n6,A.f7,A.n7,A.ph,A.pg,A.pW,A.pV,A.pX,A.pY,A.qn,A.kz,A.ql,A.fz,A.nC,A.rQ,A.eK,A.jq,A.oV,A.oZ,A.qs,A.cU,A.qt,A.jL,A.eJ,A.rM,A.pz,A.cJ,A.br,A.pT,A.re,A.eI,A.eH,A.i8,A.l3,A.eB,A.d1,A.rh,A.j9,A.vO,A.dE,A.mC,A.dF,A.n9,A.b0,A.fe,A.dc,A.jr,A.hK,A.nG,A.of,A.fl,A.dP,A.ow,A.oo,A.op,A.dp,A.dV,A.c_,A.pN,A.q4,A.aV,A.r3,A.r7,A.cq,A.mz,A.l0,A.rK,A.dw,A.bm,A.c4,A.bQ,A.l2,A.ja,A.l_,A.fI,A.iw,A.fE,A.lA,A.iv,A.rX])
q(J.k_,[J.k2,J.hv,J.hx,J.fm,J.fn,J.eu,J.dS])
q(J.hx,[J.dT,J.u,A.dU,A.hH])
q(J.dT,[J.kp,J.e_,J.dm])
r(J.k0,A.hV)
r(J.p4,J.u)
q(J.eu,[J.hu,J.k3])
q(A.o,[A.e2,A.R,A.cz,A.K,A.hl,A.cE,A.eP,A.l9,A.lN,A.cm])
q(A.e2,[A.ej,A.iM])
r(A.ih,A.ej)
r(A.ie,A.iM)
q(A.dK,[A.jn,A.jm,A.kN,A.v2,A.v4,A.rU,A.rT,A.tI,A.o6,A.ta,A.td,A.pn,A.tf,A.vy,A.vz,A.uX,A.q6,A.ry,A.pt,A.pu,A.pv,A.pI,A.pr,A.px,A.rn,A.ro,A.rq,A.nV,A.nT,A.nU,A.pK,A.pL,A.qe,A.qd,A.qc,A.qb,A.qa,A.qg,A.um,A.un,A.qw,A.qx,A.vG,A.vE,A.o3,A.pp,A.uU,A.om,A.on,A.rN,A.rO,A.mU,A.mX,A.mW,A.mY,A.mL,A.mt,A.mu,A.mv,A.mI,A.mJ,A.mH,A.ok,A.oY,A.qk,A.nQ,A.oa,A.oc,A.od,A.oe,A.n_,A.n0,A.n1,A.n2,A.n3,A.n4,A.uS,A.nj,A.nS,A.oD,A.vH,A.uq,A.up,A.tG,A.tF,A.uJ,A.oQ,A.oR,A.oT,A.ra,A.oH,A.oF,A.uR,A.oL,A.oN,A.uQ,A.nM,A.pk,A.pc,A.nD,A.nE,A.uz,A.pU,A.ri,A.rj,A.mr,A.mp,A.mP,A.mQ,A.nc,A.ng,A.nf,A.ne,A.nu,A.nt,A.nv,A.nw,A.nx,A.ns,A.nn,A.no,A.nz,A.nH,A.nI,A.nJ,A.nL,A.nK,A.nP,A.og,A.oh,A.ou,A.os,A.ot,A.or,A.oq,A.oy,A.p7,A.p8,A.p9,A.pO,A.pP,A.pQ,A.qZ,A.r_,A.qT,A.qU,A.qS,A.qV,A.qE,A.qW,A.qR,A.qK,A.qL,A.qM,A.qN,A.qO,A.qP,A.qQ,A.qJ,A.qF,A.qG,A.qH,A.qI,A.qY,A.qX,A.r5,A.rc,A.mB,A.rI,A.rH,A.rJ,A.rD,A.rG,A.rB,A.rA,A.v_,A.rz,A.mw,A.mx,A.my,A.tp,A.tq,A.tj,A.tl,A.tm,A.tS,A.tT,A.u_,A.u0,A.u1,A.tV,A.tW,A.tX,A.tO,A.tL,A.uu,A.uv,A.v7,A.v8,A.vi,A.vj,A.vl,A.vm,A.vn,A.vo,A.vp,A.ux,A.uy,A.uC,A.uP,A.uH,A.uE,A.uF])
q(A.jn,[A.rY,A.nm,A.pd,A.v3,A.tJ,A.uT,A.o7,A.tb,A.pm,A.po,A.ti,A.rv,A.ru,A.vA,A.py,A.rl,A.rp,A.nW,A.qy,A.vF,A.vD,A.mV,A.mN,A.mO,A.ob,A.uL,A.oS,A.oU,A.oI,A.pj,A.p_,A.pB,A.pC,A.pD,A.rf,A.rg,A.pa,A.pb,A.mA,A.rE,A.rC,A.tk,A.tR,A.tZ,A.vc,A.uB])
r(A.aR,A.ie)
q(A.al,[A.ev,A.du,A.k4,A.kR,A.kB,A.ll,A.hz,A.jc,A.cr,A.i5,A.kQ,A.fA,A.jp])
r(A.fC,A.W)
r(A.dL,A.fC)
q(A.R,[A.a6,A.ae,A.as,A.I,A.eO,A.io])
q(A.a6,[A.i1,A.T,A.hU,A.ls])
r(A.df,A.cz)
q(A.bR,[A.eT,A.eU,A.fH])
q(A.eT,[A.aX,A.ix])
q(A.eU,[A.ap,A.aY])
r(A.iy,A.fH)
r(A.fN,A.fp)
r(A.e0,A.fN)
r(A.he,A.e0)
q(A.fd,[A.a4,A.cM])
q(A.dr,[A.hf,A.iz,A.iG])
r(A.aH,A.hf)
q(A.jm,[A.q0,A.rV,A.rW,A.tv,A.o4,A.t1,A.t6,A.t5,A.t3,A.t2,A.t9,A.t8,A.t7,A.ts,A.uI,A.tA,A.tz,A.ul,A.ue,A.uf,A.uk,A.u9,A.ub,A.ua,A.uj,A.u7,A.u8,A.ug,A.uh,A.ui,A.ud,A.uc,A.uo,A.uV,A.qj,A.oP,A.oG,A.oM,A.ur,A.mq,A.mE,A.mD,A.mR,A.nq,A.nr,A.np,A.oi,A.ov,A.pS,A.qC,A.qD,A.r0,A.r1,A.r2,A.r6,A.rF,A.tn,A.to,A.u2,A.u3,A.u4,A.u5,A.tU,A.tY,A.tP,A.tQ,A.tM,A.tN,A.uw,A.v9,A.vk,A.vq,A.vr,A.vs,A.vt,A.vu,A.vv,A.vw,A.va,A.vb,A.vd,A.ve,A.vf,A.vg,A.vh,A.uK])
r(A.hJ,A.du)
q(A.kN,[A.kK,A.f8])
q(A.aa,[A.ce,A.ij,A.lr])
r(A.hy,A.ce)
r(A.fr,A.dU)
q(A.hH,[A.ke,A.b3])
q(A.b3,[A.ir,A.it])
r(A.is,A.ir)
r(A.hF,A.is)
r(A.iu,A.it)
r(A.hG,A.iu)
q(A.hF,[A.hE,A.kf])
q(A.hG,[A.kg,A.kh,A.ki,A.kj,A.kk,A.ex,A.hI])
r(A.fM,A.ll)
r(A.ib,A.lf)
r(A.lE,A.iL)
r(A.il,A.ij)
r(A.cl,A.iz)
r(A.fD,A.iG)
q(A.ek,[A.jg,A.jC,A.k5])
q(A.js,[A.n8,A.pf,A.pe,A.rw])
r(A.k6,A.hz)
r(A.tg,A.th)
r(A.kV,A.jC)
q(A.cr,[A.fv,A.jX])
r(A.lg,A.iH)
q(A.lk,[A.eA,A.er,A.jb,A.d_,A.fg,A.ji,A.jo,A.jy,A.eD,A.dZ,A.en,A.cd,A.hT,A.cN,A.fw,A.hY,A.fk,A.id,A.ig,A.jN,A.ho,A.jP,A.jQ,A.eq,A.hp,A.eF,A.cX,A.fc,A.fJ,A.jh,A.ei,A.jt,A.jv,A.b5,A.jf,A.cb,A.ep,A.em,A.dg,A.hn,A.dN,A.dQ,A.ha,A.ko,A.hR,A.eC,A.bP,A.bw,A.jZ,A.eL,A.ci,A.cH,A.cs,A.cI,A.db,A.da,A.dH,A.dI,A.dG,A.eh,A.di,A.cK,A.cL,A.dj,A.dh,A.dk,A.cc,A.ct,A.bh,A.ch,A.dW,A.cC,A.bO,A.bv,A.hW,A.bM,A.c2,A.c3,A.e1,A.d0])
q(A.dq,[A.bq,A.bl,A.cA,A.kn,A.cu])
r(A.qv,A.lF)
r(A.l4,A.lU)
r(A.qi,A.rR)
r(A.qh,A.qi)
r(A.iq,A.d3)
q(A.hK,[A.hg,A.ny,A.nO,A.hr,A.ox,A.p6,A.pR,A.qB,A.fy,A.rb])
q(A.rK,[A.l1,A.lx,A.b6,A.kZ,A.kX,A.i7,A.kY])
s(A.fC,A.cY)
s(A.iM,A.W)
s(A.ir,A.W)
s(A.is,A.ar)
s(A.it,A.W)
s(A.iu,A.ar)
s(A.fN,A.iF)
s(A.iG,A.lS)
s(A.lF,A.tc)
s(A.lU,A.tC)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",z:"double",bc:"num",i:"String",n:"bool",az:"Null",D:"List",G:"Object",X:"Map",a5:"JSObject"},mangledNames:{},types:["~()","~(a5)","az(a5)","n(i)","dl()","n(z)","0&()","dl(bl?)","n(au)","n(G?)","~(n)","@(@)","az()","n(eB)","l(bW,bW)","n(b7)","n(@)","~(~())","~(@)","n(by)","n(O)","n(bW)","l(P<i,i>,P<i,i>)","n(aV)","n(bQ)","n()","n(P<i,D<i>>)","n(e4)","@(i)","l(@,@)","~(i,z)","i(c1)","i(i)","l()","n(cc)","n(ct)","az(@)","~(i)","n(cH)","n(br)","n(l)","b(b)","l(l)","@()","~(G?,G?)","i?(i)","z()","f9()","n(P<i,aI>)","aI(P<i,aI>)","aI(aI,aI)","l(aO<bN>,aO<bN>)","c0(aO<bN>)","l(aO<bL>,aO<bL>)","c0(aO<bL>)","ey(z,z,z,z)","~(G,cV)","~(eG)","eG()","az(G,cV)","z(z,fL)","bX<az>(P<i,i>)","~(@,@)","n(D<i>)","l(i,i)","l(bt,bt)","n(a5)","a5()","fb()","n(cb)","D<bx>()","bx?()","X<i,i>(X<i,i>,i)","n(aU)","f4(G?)","f3(G?)","f5(G?)","i(G?)","0&(i,l?)","f6(G?)","G?(G?)","n(dt)","i(l,a_,a_,a_)","l(d3,d3)","M(M)","n(e3)","~(l,@)","dl(i{fallback:i?})","l(+(z,z,z,z),+(z,z,z,z))","D<+(z,z,z,z)>()","n(bt)","l(l,aU)","n(cv)","n(cQ)","hS(bq)","l(cS,cS)","n(cP)","P<i,i>(i,@)","n(bP)","n(bw)","eJ()","l(+influence,light(z,bx),+influence,light(z,bx))","l(P<i,cJ>,P<i,cJ>)","cu(l,l,i?)","P<l,@>(l,eI)","P<l,@>(l,eH)","n(P<@,@>)","P<i,i>(P<@,@>)","n?(G?)","az(@,cV)","i()","0^(o<0^>,G?)<G?>","~(l)","D<i>(D<i>)","~(z)","l(ac,ac)","0^(i,o<0^>)<E>","i(au)","X<i,G?>(dp)","i(bh)","n(bh)","n(bv)","az(~())","n(di)","n(cK)","n(cL)","n(dj)","n(dh)","n(dk)","l(l,+(bl,dy))","n(cs)","n(cI)","n(db)","n(da)","i(cq)","l(cq,cq)","n(i4?)","l(bQ,bQ)","D<d1>()","n(d1)","n(P<i,i>)","l(c4,c4)","X<i,@>(bQ)","n(c3)","n(c2)","n(bM)","ew(cA)","bl(l,l,i?)","cj(P<i,bl>)","l(c1,c1)","@(@,i)","l(cj,cj)","~(bv)","~(dF)","~(fl)","~(dE)","~(dP)","~(fe)","n(fx)","~(bO)","~(bP,bw)","n(c1)","cA(l,l,i?)","fF()","cQ(G?)","cv(G?)","cP(G?)","~(bc)","bq(l,l,i?)","l(l,+(bq,cg))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aX&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.ix&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ap&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.aY&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iy&&A.G0(a,b.a)}}
A.Db(v.typeUniverse,JSON.parse('{"dm":"dT","kp":"dT","e_":"dT","Gv":"dU","u":{"D":["1"],"R":["1"],"a5":[],"o":["1"]},"k2":{"n":[],"af":[]},"hv":{"az":[],"af":[]},"hx":{"a5":[]},"dT":{"a5":[]},"k0":{"hV":[]},"p4":{"u":["1"],"D":["1"],"R":["1"],"a5":[],"o":["1"]},"eg":{"ab":["1"]},"eu":{"z":[],"bc":[],"b1":["bc"]},"hu":{"z":[],"l":[],"bc":[],"b1":["bc"],"af":[]},"k3":{"z":[],"bc":[],"b1":["bc"],"af":[]},"dS":{"i":[],"b1":["i"],"pM":[],"af":[]},"e2":{"o":["2"]},"hc":{"ab":["2"]},"ej":{"e2":["1","2"],"o":["2"],"o.E":"2"},"ih":{"ej":["1","2"],"e2":["1","2"],"R":["2"],"o":["2"],"o.E":"2"},"ie":{"W":["2"],"D":["2"],"e2":["1","2"],"R":["2"],"o":["2"]},"aR":{"ie":["1","2"],"W":["2"],"D":["2"],"e2":["1","2"],"R":["2"],"o":["2"],"o.E":"2","W.E":"2"},"ev":{"al":[]},"dL":{"W":["l"],"cY":["l"],"D":["l"],"R":["l"],"o":["l"],"W.E":"l","cY.E":"l"},"R":{"o":["1"]},"a6":{"R":["1"],"o":["1"]},"i1":{"a6":["1"],"R":["1"],"o":["1"],"o.E":"1","a6.E":"1"},"aS":{"ab":["1"]},"cz":{"o":["2"],"o.E":"2"},"df":{"cz":["1","2"],"R":["2"],"o":["2"],"o.E":"2"},"hC":{"ab":["2"]},"T":{"a6":["2"],"R":["2"],"o":["2"],"o.E":"2","a6.E":"2"},"K":{"o":["1"],"o.E":"1"},"S":{"ab":["1"]},"hl":{"o":["2"],"o.E":"2"},"hm":{"ab":["2"]},"hj":{"ab":["1"]},"cE":{"o":["1"],"o.E":"1"},"i9":{"ab":["1"]},"fC":{"W":["1"],"cY":["1"],"D":["1"],"R":["1"],"o":["1"]},"hU":{"a6":["1"],"R":["1"],"o":["1"],"o.E":"1","a6.E":"1"},"aX":{"eT":[],"bR":[]},"ix":{"eT":[],"bR":[]},"ap":{"eU":[],"bR":[]},"aY":{"eU":[],"bR":[]},"iy":{"fH":[],"bR":[]},"he":{"e0":["1","2"],"fN":["1","2"],"fp":["1","2"],"iF":["1","2"],"X":["1","2"]},"fd":{"X":["1","2"]},"a4":{"fd":["1","2"],"X":["1","2"]},"eP":{"o":["1"],"o.E":"1"},"eQ":{"ab":["1"]},"cM":{"fd":["1","2"],"X":["1","2"]},"hf":{"dr":["1"],"dY":["1"],"R":["1"],"o":["1"]},"aH":{"hf":["1"],"dr":["1"],"dY":["1"],"R":["1"],"o":["1"]},"hJ":{"du":[],"al":[]},"k4":{"al":[]},"kR":{"al":[]},"iA":{"cV":[]},"dK":{"eo":[]},"jm":{"eo":[]},"jn":{"eo":[]},"kN":{"eo":[]},"kK":{"eo":[]},"f8":{"eo":[]},"kB":{"al":[]},"ce":{"aa":["1","2"],"vX":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"ae":{"R":["1"],"o":["1"],"o.E":"1"},"cf":{"ab":["1"]},"as":{"R":["1"],"o":["1"],"o.E":"1"},"ah":{"ab":["1"]},"I":{"R":["P<1,2>"],"o":["P<1,2>"],"o.E":"P<1,2>"},"cy":{"ab":["P<1,2>"]},"hy":{"ce":["1","2"],"aa":["1","2"],"vX":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"eT":{"bR":[]},"eU":{"bR":[]},"fH":{"bR":[]},"hw":{"C9":[],"pM":[]},"lu":{"hP":[],"fq":[]},"l9":{"o":["hP"],"o.E":"hP"},"la":{"ab":["hP"]},"i0":{"fq":[]},"lN":{"o":["fq"],"o.E":"fq"},"lO":{"ab":["fq"]},"fr":{"dU":[],"a5":[],"af":[]},"ex":{"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"dU":{"a5":[],"af":[]},"hH":{"a5":[]},"ke":{"a5":[],"af":[]},"b3":{"bZ":["1"],"a5":[]},"hF":{"W":["z"],"b3":["z"],"D":["z"],"bZ":["z"],"R":["z"],"a5":[],"o":["z"],"ar":["z"]},"hG":{"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"]},"hE":{"nX":[],"W":["z"],"b3":["z"],"D":["z"],"bZ":["z"],"R":["z"],"a5":[],"o":["z"],"ar":["z"],"af":[],"W.E":"z","ar.E":"z"},"kf":{"W":["z"],"b3":["z"],"D":["z"],"bZ":["z"],"R":["z"],"a5":[],"o":["z"],"ar":["z"],"af":[],"W.E":"z","ar.E":"z"},"kg":{"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"kh":{"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"ki":{"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"kj":{"wd":[],"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"kk":{"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"hI":{"i4":[],"W":["l"],"b3":["l"],"D":["l"],"bZ":["l"],"R":["l"],"a5":[],"o":["l"],"ar":["l"],"af":[],"W.E":"l","ar.E":"l"},"ll":{"al":[]},"fM":{"du":[],"al":[]},"cF":{"ab":["1"]},"cm":{"o":["1"],"o.E":"1"},"b_":{"al":[]},"ib":{"lf":["1"]},"aw":{"bX":["1"]},"iL":{"ym":[]},"lE":{"iL":[],"ym":[]},"ij":{"aa":["1","2"],"X":["1","2"]},"il":{"ij":["1","2"],"aa":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"eO":{"R":["1"],"o":["1"],"o.E":"1"},"ik":{"ab":["1"]},"cl":{"dr":["1"],"xP":["1"],"dY":["1"],"R":["1"],"o":["1"]},"eR":{"ab":["1"]},"W":{"D":["1"],"R":["1"],"o":["1"]},"aa":{"X":["1","2"]},"io":{"R":["2"],"o":["2"],"o.E":"2"},"ip":{"ab":["2"]},"fp":{"X":["1","2"]},"e0":{"fN":["1","2"],"fp":["1","2"],"iF":["1","2"],"X":["1","2"]},"dr":{"dY":["1"],"R":["1"],"o":["1"]},"iz":{"dr":["1"],"dY":["1"],"R":["1"],"o":["1"]},"fD":{"dr":["1"],"lS":["1"],"dY":["1"],"R":["1"],"o":["1"]},"lr":{"aa":["i","@"],"X":["i","@"],"aa.K":"i","aa.V":"@"},"ls":{"a6":["i"],"R":["i"],"o":["i"],"o.E":"i","a6.E":"i"},"jg":{"ek":["D<l>","i"]},"jC":{"ek":["i","D<l>"]},"hz":{"al":[]},"k6":{"al":[]},"k5":{"ek":["G?","i"]},"kV":{"ek":["i","D<l>"]},"el":{"b1":["el"]},"z":{"bc":[],"b1":["bc"]},"dM":{"b1":["dM"]},"l":{"bc":[],"b1":["bc"]},"D":{"R":["1"],"o":["1"]},"bc":{"b1":["bc"]},"hP":{"fq":[]},"dY":{"R":["1"],"o":["1"]},"i":{"b1":["i"],"pM":[]},"lk":{"E":[]},"jc":{"al":[]},"du":{"al":[]},"cr":{"al":[]},"fv":{"al":[]},"jX":{"al":[]},"i5":{"al":[]},"kQ":{"al":[]},"fA":{"al":[]},"jp":{"al":[]},"km":{"al":[]},"hZ":{"al":[]},"lP":{"cV":[]},"bk":{"Cn":[]},"iH":{"kT":[]},"lI":{"kT":[]},"lg":{"kT":[]},"lq":{"w6":[]},"fG":{"w6":[]},"eA":{"E":[]},"bq":{"dq":[]},"bl":{"dq":[]},"cA":{"dq":[]},"cu":{"dq":[]},"kn":{"dq":[]},"er":{"E":[]},"jb":{"E":[]},"d_":{"E":[]},"fg":{"E":[]},"ji":{"E":[]},"jo":{"E":[]},"jy":{"E":[]},"eD":{"E":[]},"dZ":{"E":[]},"en":{"E":[]},"cd":{"E":[]},"hT":{"E":[]},"cN":{"E":[]},"fw":{"E":[]},"hQ":{"Cc":[]},"lp":{"c0":[]},"lQ":{"c0":[]},"lB":{"Cb":[]},"lm":{"Bo":[]},"hY":{"E":[]},"bN":{"b1":["bN"]},"bL":{"b1":["bL"]},"fk":{"E":[]},"id":{"E":[]},"hb":{"ak":[]},"ld":{"ac":[]},"jj":{"ak":[]},"le":{"ac":[]},"jw":{"ak":[]},"lh":{"ac":[]},"ig":{"E":[]},"hh":{"ak":[]},"li":{"ac":[]},"jA":{"ak":[]},"lj":{"ac":[]},"jR":{"ak":[]},"lo":{"ac":[]},"kd":{"ak":[]},"lv":{"ac":[]},"jk":{"Ca":[]},"hM":{"ak":[]},"lC":{"ac":[]},"kv":{"ak":[]},"lD":{"ac":[]},"kE":{"ak":[]},"lG":{"ac":[]},"kF":{"ak":[]},"lH":{"ac":[]},"kI":{"ak":[]},"lK":{"ac":[]},"kH":{"ak":[]},"lJ":{"ac":[]},"kW":{"ak":[]},"lT":{"ac":[]},"l6":{"ak":[]},"lW":{"ac":[]},"jN":{"E":[]},"ho":{"E":[]},"jP":{"E":[]},"jQ":{"E":[]},"eq":{"E":[]},"hp":{"E":[]},"eF":{"E":[]},"cX":{"E":[]},"fc":{"E":[]},"jx":{"B7":[]},"fJ":{"E":[]},"b5":{"E":[]},"jh":{"E":[]},"ei":{"E":[]},"jt":{"E":[]},"jv":{"E":[]},"dz":{"dl":[]},"l4":{"Bu":[]},"jf":{"E":[]},"cb":{"E":[]},"ep":{"E":[]},"iq":{"d3":[]},"em":{"E":[]},"dg":{"E":[]},"dN":{"E":[]},"hn":{"E":[]},"dQ":{"E":[]},"ha":{"E":[]},"ko":{"E":[]},"hR":{"E":[]},"eC":{"E":[]},"bP":{"E":[]},"bw":{"E":[]},"jZ":{"E":[]},"eL":{"E":[]},"ci":{"E":[]},"cH":{"E":[]},"cs":{"E":[]},"cI":{"E":[]},"db":{"E":[]},"da":{"E":[]},"dH":{"E":[]},"dI":{"E":[]},"eh":{"E":[]},"dG":{"E":[]},"di":{"E":[]},"cK":{"E":[]},"cL":{"E":[]},"dj":{"E":[]},"dh":{"E":[]},"dk":{"E":[]},"cc":{"E":[]},"ct":{"E":[]},"bh":{"E":[]},"ch":{"E":[]},"dW":{"E":[]},"cC":{"E":[]},"bO":{"E":[]},"bv":{"E":[]},"hW":{"E":[]},"bM":{"E":[]},"c2":{"E":[]},"c3":{"E":[]},"e1":{"E":[]},"d0":{"E":[]},"iw":{"w8":[]},"fE":{"w8":[]},"BD":{"D":["l"],"R":["l"],"o":["l"]},"i4":{"D":["l"],"R":["l"],"o":["l"]},"Cs":{"D":["l"],"R":["l"],"o":["l"]},"BB":{"D":["l"],"R":["l"],"o":["l"]},"wd":{"D":["l"],"R":["l"],"o":["l"]},"BC":{"D":["l"],"R":["l"],"o":["l"]},"Cr":{"D":["l"],"R":["l"],"o":["l"]},"nX":{"D":["z"],"R":["z"],"o":["z"]},"Bn":{"D":["z"],"R":["z"],"o":["z"]}}'))
A.Da(v.typeUniverse,JSON.parse('{"fC":1,"iM":2,"b3":1,"iz":1,"iG":1,"js":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a0
return{mq:s("cH"),dx:s("h9"),bC:s("cq"),v:s("b_"),iF:s("je"),ul:s("da"),EL:s("cI"),xs:s("cs"),gc:s("db"),lT:s("f3"),bJ:s("f4"),gI:s("f5"),ya:s("f6"),z3:s("bL"),Bu:s("f9"),sU:s("dL"),hO:s("b1<@>"),CH:s("hd"),p:s("a4<i,i>"),I:s("a4<i,l>"),M:s("aH<i>"),f7:s("el"),fP:s("bM"),yb:s("dM"),he:s("R<@>"),yW:s("cb"),g:s("bW"),Ct:s("E"),yt:s("al"),hl:s("a_"),B:s("nX"),pH:s("aI"),Fr:s("cJ"),BO:s("eo"),ls:s("bX<az>"),aJ:s("dh"),x:s("cc"),bK:s("di"),gm:s("dj"),dn:s("cK"),mx:s("dk"),j_:s("cL"),EJ:s("cM<bO,i>"),_:s("dl"),Eb:s("ct"),qX:s("dQ"),mF:s("cP"),eO:s("jW<G>"),iO:s("cu"),oW:s("cQ"),fl:s("cv"),FA:s("o<hd>"),yT:s("o<i>"),x6:s("o<cj>"),oJ:s("o<z>"),tY:s("o<@>"),uI:s("o<l>"),Fg:s("u<cq>"),ns:s("u<jB>"),cO:s("u<de>"),r:s("u<bW>"),uH:s("u<jF>"),Dl:s("u<a_>"),iJ:s("u<bX<~>>"),pC:s("u<jK>"),C1:s("u<dl>"),ka:s("u<be>"),Fm:s("u<es>"),vS:s("u<cO>"),pW:s("u<Gu<G>>"),hr:s("u<et>"),s3:s("u<cu>"),W:s("u<a5>"),Bv:s("u<k7>"),yH:s("u<bg>"),Bq:s("u<P<i,i>>"),rq:s("u<X<i,G>>"),A7:s("u<X<i,i>>"),cs:s("u<X<i,@>>"),fv:s("u<ka>"),td:s("u<hD>"),s6:s("u<bq>"),pq:s("u<au>"),bA:s("u<dp>"),xz:s("u<br>"),b4:s("u<bi>"),s0:s("u<ey>"),ea:s("u<cS>"),Fk:s("u<kr>"),qP:s("u<bt>"),kv:s("u<eB>"),nR:s("u<+(i,D<bt>)>"),kd:s("u<+(i,i)>"),rh:s("u<+influence,light(z,bx)>"),wt:s("u<+(l,i)>"),wx:s("u<+(z,z,z,z)>"),e_:s("u<ak>"),u:s("u<ac>"),Ft:s("u<hQ>"),C:s("u<O>"),h1:s("u<bu>"),s2:s("u<c0>"),eY:s("u<aU>"),xB:s("u<cU>"),El:s("u<fz>"),AM:s("u<aO<bL>>"),fs:s("u<aO<bN>>"),cv:s("u<bx>"),DZ:s("u<dt>"),s:s("u<i>"),qy:s("u<kM>"),fa:s("u<c1>"),k:s("u<M>"),h:s("u<b>"),ld:s("u<i8>"),Dc:s("u<dw>"),Fi:s("u<c4>"),jV:s("u<d1>"),yo:s("u<eJ>"),E:s("u<b7>"),uk:s("u<bo>"),wf:s("u<iq>"),il:s("u<e4>"),l5:s("u<e3>"),ow:s("u<lz>"),j5:s("u<lA>"),pv:s("u<fI>"),Fy:s("u<e5<ew>>"),EM:s("u<e5<cg>>"),w_:s("u<e5<bu>>"),f2:s("u<e5<dy>>"),Fa:s("u<fK>"),sj:s("u<n>"),n:s("u<z>"),zz:s("u<@>"),t:s("u<l>"),vj:s("u<a5?>"),Cf:s("u<G?>"),AN:s("u<bc>"),w:s("hv"),m:s("a5"),w7:s("a5()"),ud:s("dm"),Eh:s("bZ<@>"),hk:s("D<bW>"),b:s("D<be>"),xp:s("D<cu>"),nx:s("D<a5>"),rW:s("D<X<i,i>>"),qr:s("D<bq>"),R:s("D<au>"),ba:s("D<cS>"),Es:s("D<bt>"),DX:s("D<+(i,i)>"),pL:s("D<+(l,i)>"),xM:s("D<+(z,z,z,z)>"),bE:s("D<bu>"),fx:s("D<cU>"),a:s("D<i>"),gt:s("D<i8>"),D0:s("D<dw>"),cf:s("D<c4>"),p7:s("D<d1>"),lm:s("D<ii>"),dd:s("D<z>"),j:s("D<@>"),J:s("D<l>"),ik:s("D<a5?>"),vX:s("D<G?>"),m2:s("hB"),h6:s("P<i,aI>"),gJ:s("P<i,cJ>"),q:s("P<i,i>"),no:s("P<i,bl>"),AC:s("P<@,@>"),pr:s("P<l,@>"),yx:s("P<i,D<i>>"),mf:s("X<i,dl>"),vD:s("X<i,cA>"),ap:s("X<i,au>"),G:s("X<i,i>"),m0:s("X<i,n>"),gG:s("X<i,z>"),P:s("X<i,@>"),f:s("X<@,@>"),pG:s("X<l,eH>"),tQ:s("X<l,eI>"),aD:s("X<i,D<+(z,z,z,z)>>"),Bx:s("X<i,D<i>>"),oZ:s("X<i,G?>"),q1:s("X<c3,D<c4>>"),ee:s("X<l,X<i,i>>"),jT:s("T<i,i?>"),pw:s("cA"),kc:s("bq"),rV:s("fr"),mV:s("ex"),c:s("az"),K:s("G"),BB:s("bN"),A:s("au"),oP:s("dp"),wJ:s("bh"),E4:s("br"),A_:s("cS"),T:s("bt"),DL:s("hL"),Y:s("eB"),op:s("Gw"),ep:s("+()"),k0:s("+(bq,cg)"),ut:s("+(bl,dy)"),rf:s("+(z,z)"),mn:s("+influence,light(z,bx)"),nz:s("+(z,z,z,z)"),ez:s("hP"),wZ:s("ac"),tc:s("cT<cu,bu>"),ou:s("cT<cA,ew>"),wm:s("cT<bq,cg>"),qq:s("cT<bl,dy>"),j2:s("O"),m3:s("bu"),yz:s("c0"),U:s("aU"),F3:s("cU"),Q:s("dY<i>"),oG:s("dY<l>"),en:s("bv"),gl:s("aV"),u5:s("bw"),bG:s("bP"),ho:s("fz"),EH:s("aO<bL>"),E0:s("aO<bN>"),l:s("cV"),w8:s("dt"),qL:s("b5"),N:s("i"),Aj:s("bl"),jP:s("cj"),d:s("c1"),bp:s("dZ"),sg:s("af"),bs:s("du"),qF:s("e_"),hL:s("e0<i,i>"),jC:s("kS"),eP:s("kT"),cV:s("M"),a7:s("b"),qY:s("by"),L:s("bQ"),gM:s("c2"),hF:s("c3"),vw:s("eH"),BX:s("eI"),aA:s("dw"),AP:s("c4"),sy:s("l3"),bB:s("b6"),aS:s("d1"),fu:s("eJ"),fw:s("K<bM>"),vL:s("K<cb>"),vK:s("K<cc>"),Fj:s("K<bw>"),rZ:s("K<bP>"),vY:s("K<i>"),r4:s("K<by>"),g2:s("K<c2>"),cE:s("K<c3>"),rt:s("S<bv>"),xG:s("S<aV>"),fh:s("S<by>"),Ai:s("cE<i>"),e:s("b7"),dr:s("ii"),hR:s("aw<@>"),BT:s("il<G?,G?>"),Ez:s("d3"),rL:s("fF"),fo:s("lw"),xT:s("e4"),wU:s("e3"),la:s("lx"),cX:s("ly"),qS:s("iv"),jS:s("fL"),kA:s("lL"),Br:s("cm<c0>"),V:s("iJ"),jm:s("iK"),y:s("n"),Bs:s("n()"),kr:s("n(bM)"),e2:s("n(cb)"),rg:s("n(cc)"),bl:s("n(G)"),pz:s("n(bv)"),aV:s("n(aV)"),y2:s("n(bw)"),ty:s("n(bP)"),Ag:s("n(i)"),rd:s("n(by)"),da:s("n(c2)"),qR:s("n(c3)"),i:s("z"),z:s("@"),pF:s("@()"),h_:s("@(G)"),nW:s("@(G,cV)"),S:s("l"),eZ:s("bX<az>?"),r9:s("u<G?>?"),uh:s("a5?"),rK:s("D<@>?"),jd:s("X<i,D<i>>?"),X:s("G?"),D:s("i?"),oI:s("i?(i)"),Fx:s("i4?"),F:s("eM<@,@>?"),Af:s("lt?"),k7:s("n?"),wK:s("n(fx)?"),u6:s("z?"),lo:s("l?"),s7:s("bc?"),Z:s("~()?"),Cv:s("~(dE)?"),kC:s("~(dF)?"),pf:s("~(fe)?"),hq:s("~(fl)?"),CA:s("~(dP)?"),hQ:s("~(bO)?"),Ci:s("~(bv)?"),nf:s("~(bP,bw)?"),f_:s("~(i)?"),DI:s("~(i,z)?"),xl:s("~(n)?"),vR:s("~(l)?"),o:s("bc"),H:s("~"),O:s("~()"),m1:s("~(i,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hG=J.k_.prototype
B.a=J.u.prototype
B.c=J.hu.prototype
B.d=J.eu.prototype
B.b=J.dS.prototype
B.hH=J.dm.prototype
B.hI=J.hx.prototype
B.q=A.hE.prototype
B.cT=A.hI.prototype
B.d6=J.kp.prototype
B.bC=J.e_.prototype
B.a4=new A.cH(1,"standard")
B.J=new A.j9(B.a4)
B.bG=new A.cH(0,"concise")
B.bH=new A.cH(2,"verbose")
B.aj=new A.dE(null,null,null,null,null)
B.mv=new A.jb(0,"opaque")
B.dI=new A.jf(4,"ambience")
B.bL=new A.cs(3,"mono")
B.aH=new A.db(0,"full")
B.bK=new A.cs(0,"auto")
B.bJ=new A.cI(1,"standard")
B.bI=new A.da(0,"defaultMix")
B.aI=new A.dF(B.bK,B.bJ,B.aH,B.bI)
B.dP=new A.ha("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.dQ=new A.ha("webgl2 unavailable",0,"webglUnavailable")
B.Z=new A.hR(1,"pixeldart")
B.dR=new A.f7(B.Z,!1,!0,!1,null,!1,null,!1,null)
B.bN=new A.dG(1,"capturing")
B.dS=new A.dc(B.bN,null)
B.bO=new A.dG(3,"rejected")
B.aJ=new A.dc(B.bO,null)
B.bP=new A.dG(4,"applied")
B.bM=new A.dc(B.bP,null)
B.bQ=new A.dG(5,"cancelled")
B.dT=new A.dc(B.bQ,null)
B.aK=new A.dG(2,"conflict")
B.ak=new A.jh(0,"add")
B.dX=new A.ei(0,"zero")
B.a5=new A.ei(1,"one")
B.a6=new A.ji(0,"alpha")
B.E=new A.dH(1,"button")
B.n=new A.dI(0,"normal")
B.e_=new A.b0("settings.back",B.E,"back","back to pause menu",B.n)
B.al=new A.dH(0,"heading")
B.e0=new A.b0("settings.heading",B.al,"Settings",null,B.n)
B.e1=new A.b0("settings.controls.heading",B.al,"Controls",null,B.n)
B.e2=new A.b0("settings.controls.back",B.E,"back","back to settings categories",B.n)
B.e3=new A.b0("pause.heading",B.al,"Paused",null,B.n)
B.e4=new A.dH(3,"slider")
B.e5=new A.dH(4,"toggle")
B.bR=new A.dH(5,"keybind")
B.am=new A.dI(5,"disabled")
B.e6=new A.dI(6,"error")
B.e7=new A.dI(7,"destructive")
B.bS=new A.dI(8,"remapping")
B.bT=new A.h9()
B.bU=new A.n5()
B.aL=new A.n6()
B.mw=new A.n8()
B.e8=new A.jg()
B.bV=new A.ni()
B.e9=new A.hj(A.a0("hj<0&>"))
B.bW=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ea=function() {
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
B.ef=function(getTagFallback) {
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
B.eb=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ee=function(hooks) {
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
B.ed=function(hooks) {
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
B.ec=function(hooks) {
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
B.bX=function(hooks) { return hooks; }

B.k=new A.k5()
B.mx=new A.ph()
B.eg=new A.G()
B.eh=new A.km()
B.my=new A.pW()
B.ei=new A.pX()
B.ej=new A.cU()
B.ab=new A.ci(1,"gradeLUT")
B.ek=new A.cU()
B.el=new A.qs()
B.em=new A.qu()
B.f=new A.qz()
B.bY=new A.kV()
B.lC=new A.d_(0,"position")
B.lH=new A.by(B.lC,0,3)
B.dA=new A.d_(1,"normal")
B.lI=new A.by(B.dA,3,3)
B.lD=new A.d_(2,"color")
B.lJ=new A.by(B.lD,6,4)
B.lE=new A.d_(4,"alpha")
B.lK=new A.by(B.lE,10,1)
B.lF=new A.d_(5,"uv0")
B.lL=new A.by(B.lF,11,2)
B.lG=new A.d_(8,"legacyMaterialEffect")
B.lM=new A.by(B.lG,13,1)
B.T=s([B.lH,B.lI,B.lJ,B.lK,B.lL,B.lM],A.a0("u<by>"))
B.a7=new A.rx()
B.bZ=new A.lq()
B.x=new A.lE()
B.an=new A.lP()
B.en=new A.fa(1.3089969389957472,0.1,60)
B.eo=new A.fa(1.0471975511965976,0.1,60)
B.ep=new A.fa(0.8726646259971648,0.08,45)
B.a8=new A.fc(0,"colorOnly")
B.c_=new A.fc(1,"colorAndDepth")
B.aM=new A.fc(2,"depthOnly")
B.aN=new A.jo(1,"srgb")
B.ao=new A.jt(1,"back")
B.ap=new A.jv(0,"less")
B.aq=new A.bM(0,"open")
B.c0=new A.bM(1,"chain")
B.c1=new A.bM(2,"throughDoor")
B.c2=new A.bM(3,"letterbox")
B.a9=new A.bM(4,"ignore")
B.R=new A.fg(0,"opaque")
B.ev=new A.fg(1,"masked")
B.aO=new A.fg(2,"blended")
B.ew=new A.fh(!1,B.ap,!1,!0,B.a5,B.a5,B.ak,!1,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.ex=new A.fh(!0,B.ap,!1,!0,B.a5,B.a5,B.ak,!0,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.dY=new A.ei(2,"srcAlpha")
B.dZ=new A.ei(3,"oneMinusSrcAlpha")
B.ey=new A.fh(!0,B.ap,!1,!0,B.dY,B.dZ,B.ak,!0,B.ao,!0,!1,!0,!0,!0,!0,!1)
B.ez=new A.dM(0)
B.eA=new A.dM(24e5)
B.c3=new A.cb(0,"compliance")
B.eB=new A.fi(B.c3)
B.c4=new A.cb(1,"rupture")
B.eC=new A.fi(B.c4)
B.c5=new A.cb(2,"synchronisation")
B.eD=new A.fi(B.c5)
B.c6=new A.em(0,"front")
B.eE=new A.em(1,"rearService")
B.eF=new A.em(2,"sideBoundary")
B.eG=new A.em(3,"roofline")
B.l=new A.dN(0,"north")
B.u=new A.dN(1,"east")
B.m=new A.dN(2,"south")
B.F=new A.dN(3,"west")
B.ar=new A.hn(0,"ground")
B.as=new A.hn(1,"first")
B.eH=new A.dg(0,"mantle")
B.eI=new A.dg(1,"portal")
B.eK=new A.dg(3,"inventory")
B.c7=new A.dg(4,"aftermath")
B.eJ=new A.dg(2,"window")
B.eM=new A.dO(B.eJ,"shutter","the shutter")
B.eL=new A.dg(5,"none")
B.eN=new A.dO(B.eL,null,null)
B.eO=new A.F("saved mantle history is malformed",null,null)
B.eP=new A.F("rupture elapsed time is malformed",null,null)
B.eQ=new A.F("presentation keys must be strings",null,null)
B.eR=new A.F("unsupported accessibility profile",null,null)
B.eS=new A.F("inventory inspections must be an object",null,null)
B.c8=new A.F("saved mantle state is malformed",null,null)
B.eT=new A.F("inactive rupture has elapsed time",null,null)
B.eU=new A.F("control sensitivity is outside 0.1\u20133.0",null,null)
B.eV=new A.F("invalid action bindings",null,null)
B.eW=new A.F("listener room is empty",null,null)
B.eX=new A.F("control bindings conflict",null,null)
B.eY=new A.F("saved difficulty state is malformed",null,null)
B.eZ=new A.F("saved house drift state is malformed",null,null)
B.f_=new A.F("saved sleep record is malformed",null,null)
B.f0=new A.F("UI scale must be between 0.8 and 2.0",null,null)
B.f1=new A.F("unsupported settings store",null,null)
B.f2=new A.F("settings values must be an object",null,null)
B.f3=new A.F("saved day-loop sleepHistory must be a list",null,null)
B.f4=new A.F("invalid anisotropy limit",null,null)
B.f5=new A.F("audio event position is not finite",null,null)
B.f6=new A.F("event sequence must be non-negative",null,null)
B.f7=new A.F("inventory inspection counts are invalid",null,null)
B.f8=new A.F("only keybinds can be remapping",null,null)
B.f9=new A.F("modelScale must be positive and finite",null,null)
B.fa=new A.F("listener position is not finite",null,null)
B.fb=new A.F("invalid action ID",null,null)
B.fc=new A.F("saved window state is malformed",null,null)
B.fd=new A.F("unsupported graphics preset",null,null)
B.fe=new A.F("save run and meta must be objects",null,null)
B.ff=new A.F("saved house state is malformed",null,null)
B.fg=new A.F("saved sleep record must be an object",null,null)
B.fh=new A.F("sound cue must be a non-empty string",null,null)
B.fi=new A.F("saved session run is malformed",null,null)
B.fj=new A.F("save map keys must be strings",null,null)
B.fk=new A.F("unsupported graphics profile",null,null)
B.fl=new A.F("unsupported audio options",null,null)
B.fm=new A.F("transform.scale must be positive",null,null)
B.fn=new A.F("Escape is reserved for pause navigation",null,null)
B.fo=new A.F("saved day-loop state is malformed",null,null)
B.fp=new A.F("rupture extinguished mantle is unknown",null,null)
B.c9=new A.F("unsupported controls profile",null,null)
B.ca=new A.F("saved portal state is malformed",null,null)
B.fq=new A.F("acoustic portal profile is not finite",null,null)
B.fr=new A.F("saved house state does not match this house",null,null)
B.fs=new A.F("presentation snapshot contains a non-finite number",null,null)
B.ft=new A.F("unsupported gameplay settings profile",null,null)
B.fu=new A.F("save contains a non-finite number",null,null)
B.fv=new A.F("unsupported graphics store",null,null)
B.fw=new A.F("brush component needs an id and label",null,null)
B.fx=new A.F("text.json root must be an object",null,null)
B.fy=new A.F("event kind is empty",null,null)
B.fz=new A.F("invalid control binding token",null,null)
B.fA=new A.F("audio transmission muffle is invalid",null,null)
B.fB=new A.F("acoustic portal muffle order is invalid",null,null)
B.fC=new A.F("unsupported settings profile",null,null)
B.fD=new A.F("saved session clock is malformed",null,null)
B.fE=new A.F("rupture mantle IDs are malformed",null,null)
B.fF=new A.F("invalid gameplay setting: contextualReminders",null,null)
B.fG=new A.F("invalid screen-reader verbosity",null,null)
B.fH=new A.F("saved sleep record has an unknown enum",null,null)
B.fI=new A.F("audio cue variants are empty",null,null)
B.fJ=new A.F("save root must be an object",null,null)
B.fK=new A.F("audio event identity is empty",null,null)
B.fL=new A.F("render capabilities contain invalid limits",null,null)
B.fM=new A.F("saved house overrides are malformed",null,null)
B.S=new A.cx(0,0,0)
B.cz=new A.cx(1,1,1)
B.ir=s([],t.Fk)
B.b1=s([],t.cv)
B.fN=new A.jJ(B.S,B.S,0,1,B.cz,0,null,B.ir,B.b1)
B.cb=new A.aI(0,0,0)
B.fO=new A.en(0,"idle")
B.at=new A.en(1,"active")
B.fP=new A.en(2,"ended")
B.fQ=new A.en(3,"aborted")
B.cc=new A.fk(0,"outside")
B.fR=new A.fk(1,"intersects")
B.fS=new A.fk(2,"inside")
B.fT=new A.ep(0,"timeAdvanced")
B.fU=new A.ep(1,"dayEndReached")
B.fV=new A.ep(4,"slept")
B.fW=new A.ep(5,"complianceFloorTripped")
B.cd=new A.dh(0,"important")
B.ce=new A.dh(1,"always")
B.aP=new A.cc(0,"pauseAndMute")
B.cf=new A.di(0,"press")
B.cg=new A.di(1,"hold")
B.ch=new A.dj(0,"compact")
B.ci=new A.dj(1,"spacious")
B.cj=new A.cK(1,"standard")
B.ck=new A.cK(2,"detailed")
B.cl=new A.dk(0,"toast")
B.cm=new A.dk(1,"detailed")
B.cn=new A.cL(1,"readable")
B.h1=new A.ho(0,"vertex")
B.co=new A.ho(1,"indices")
B.cp=new A.jN(0,"staticDraw")
B.h=new A.hp(0,"ready")
B.aa=new A.hp(1,"lost")
B.h2=new A.eq(0,"color")
B.cq=new A.eq(1,"colorAndGlow")
B.h3=new A.eq(2,"colorDepthGlow")
B.aQ=new A.eq(3,"depthOnly")
B.au=new A.jP(1,"linear")
B.cr=new A.jQ(0,"clampToEdge")
B.h4=new A.jO(1,1,1,!1,B.au,B.au,B.cr,1)
B.h5=new A.cN(0,"beforeShadow")
B.h6=new A.cN(2,"beforeDepth")
B.cs=new A.cN(3,"afterDepth")
B.ct=new A.cN(4,"beforeWorld")
B.h7=new A.cN(5,"afterWorld")
B.K=new A.cN(6,"afterResolve")
B.h8=new A.cN(9,"beforePresent")
B.cu=new A.cd(0,"readBeforeWrite")
B.h9=new A.cd(1,"duplicateWriter")
B.ha=new A.cd(2,"sampledMultisampledAttachment")
B.aR=new A.cd(3,"invalidResolve")
B.hb=new A.cd(4,"formatOrSizeMismatch")
B.hc=new A.cd(5,"unversionedReadWrite")
B.hd=new A.cd(6,"invalidHistoryRead")
B.he=new A.cd(7,"dependencyCycle")
B.hf=new A.cd(8,"missingCapability")
B.cv=new A.ct(0,"high")
B.aS=new A.ct(1,"standard")
B.aT=new A.dP(1,B.aS,"auto",!1,"display","off","high")
B.av=new A.dQ(0,"player")
B.aU=new A.dQ(1,"inserted")
B.cw=new A.dQ(2,"warden")
B.cx=new A.er(0,"wrongKind")
B.cy=new A.er(1,"staleGeneration")
B.hi=new A.er(2,"doubleRelease")
B.aw=new A.er(3,"releasedResource")
B.hl=new A.cO("kitchen-range","settle")
B.hm=new A.cO("front-door-knocker","knock")
B.hn=new A.cO("cellar-drain","drip")
B.ho=new A.cO("bedroom-timber","creak")
B.hp=new A.cO("kitchen-pipe","tick")
B.hq=new A.cO("bathroom-cistern","settle")
B.hr=new A.cO("landing-window","wind")
B.hF=new A.jZ(1,"visitor")
B.hJ=new A.pe(null)
B.hK=new A.pf(null)
B.hL=new A.cx(0.008,0.012,0.024)
B.cA=s([0,2,2,3],t.t)
B.hM=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.aV=s([B.cd,B.ce],A.a0("u<dh>"))
B.hN=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.D=new A.bv(0,"audio")
B.P=new A.hW(0,"level")
B.l_=new A.aV("master","Master",B.D,B.P,1,0,1,"audio")
B.l4=new A.aV("voice","Visitor voice",B.D,B.P,1,0,1,"audio")
B.kW=new A.aV("effects","Effects",B.D,B.P,1,0,1,"audio")
B.kX=new A.aV("ambience","House ambience",B.D,B.P,1,0,1,"audio")
B.l0=new A.aV("music","Music",B.D,B.P,1,0,1,"audio")
B.aA=new A.bv(1,"display")
B.l3=new A.aV("brightness","Display brightness",B.aA,B.P,1,0.6,1.4,"display")
B.ad=new A.hW(1,"toggle")
B.kZ=new A.aV("muted","Mute house audio",B.D,B.ad,!1,null,null,"audio")
B.a0=new A.bv(2,"accessibility")
B.l1=new A.aV("mono","Mono-compatible mix",B.a0,B.ad,!1,null,null,"audio")
B.kY=new A.aV("high-contrast","High-contrast interface",B.a0,B.ad,!1,null,null,"display")
B.l2=new A.aV("strong-highlights","Strong focus highlights",B.a0,B.ad,!1,null,null,"display")
B.B=s([B.l_,B.l4,B.kW,B.kX,B.l0,B.l3,B.kZ,B.l1,B.kY,B.l2],A.a0("u<aV>"))
B.y=s(["who","verb","object","place","time"],t.s)
B.hO=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dJ=new A.da(1,"strong")
B.aW=s([B.bI,B.dJ],A.a0("u<da>"))
B.dU=new A.eh(0,"swap")
B.dV=new A.eh(1,"replace")
B.dW=new A.eh(2,"cancel")
B.hP=s([B.dU,B.dV,B.dW],A.a0("u<eh>"))
B.hQ=s([2,5,9,12,16,19],t.t)
B.fX=new A.cc(1,"pauseOnly")
B.fY=new A.cc(2,"continuePlayback")
B.ax=s([B.aP,B.fX,B.fY],A.a0("u<cc>"))
B.hR=s(["uQuantizationBits","uDitherStrength"],t.s)
B.hT=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.hU=s([B.aq,B.c0,B.c1,B.c2,B.a9],A.a0("u<bM>"))
B.hV=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.hW=s(["30","60","display"],t.s)
B.ai=new A.c3(0,"full")
B.bD=new A.c3(1,"compressed")
B.bE=new A.c3(2,"off")
B.cB=s([B.ai,B.bD,B.bE],A.a0("u<c3>"))
B.hX=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dO=new A.db(1,"reduced")
B.aX=s([B.aH,B.dO],A.a0("u<db>"))
B.dK=new A.cI(0,"wide")
B.dL=new A.cI(2,"night")
B.aY=s([B.dK,B.bJ,B.dL],A.a0("u<cI>"))
B.hY=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.i8=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.i9=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.aZ=s([B.ch,B.ci],A.a0("u<dj>"))
B.lb=new A.bP(0,"long")
B.dp=new A.bP(1,"short")
B.cC=s([B.lb,B.dp],A.a0("u<bP>"))
B.W=new A.bO(0,"visual")
B.bd=new A.bO(1,"graphics")
B.X=new A.bO(2,"gameplay")
B.be=new A.bO(3,"controls")
B.G=new A.bO(4,"audio")
B.H=new A.bO(5,"accessibility")
B.ib=s([B.W,B.bd,B.X,B.be,B.G,B.H],A.a0("u<bO>"))
B.ic=s([2.1,4.2,6.3],t.n)
B.id=s(["master","voice","effects","ambience","music"],t.s)
B.b_=s([B.cl,B.cm],A.a0("u<dk>"))
B.ie=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hg=new A.ct(2,"safe")
B.hh=new A.ct(3,"custom")
B.cD=s([B.cv,B.aS,B.hg,B.hh],A.a0("u<ct>"))
B.C=new A.ci(0,"inactive")
B.bp=new A.ci(2,"affineWarp")
B.bq=new A.ci(3,"vertexSnap")
B.br=new A.ci(4,"tapeGiveup")
B.bs=new A.ci(5,"portalFail")
B.a_=new A.ci(6,"lightsOut")
B.cE=s([B.C,B.ab,B.bp,B.bq,B.br,B.bs,B.a_],A.a0("u<ci>"))
B.ig=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.ih=s([B.av,B.aU,B.cw],A.a0("u<dQ>"))
B.ii=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.mq=new A.bo("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.mp=new A.bo("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.ml=new A.bo("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.mt=new A.bo("ronnie.response","named","A route card has Ronnie written on its back.")
B.ms=new A.bo("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ij=s([B.mq,B.mp,B.ml,B.mt,B.ms],t.uk)
B.mr=new A.bo("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.mo=new A.bo("ronnie.response","named","The name Ronnie holds when the room does not.")
B.mm=new A.bo("denise.revision","accepted","One correction remains yours to protect.")
B.mj=new A.bo("attercliffe.plate","kept","A second place survives the room changing around it.")
B.ik=s([B.mr,B.mo,B.mm,B.mj],t.uk)
B.L=s([],t.cO)
B.iv=s([],t.Fm)
B.iu=s([],t.vS)
B.il=s([],A.a0("u<cv>"))
B.io=s([],t.yH)
B.b0=s([],t.b4)
B.iq=s([],t.ea)
B.U=s([],t.qP)
B.ip=s([],t.u)
B.cG=s([],t.xB)
B.im=s([],t.El)
B.o=s([],t.s)
B.cH=s([],t.ld)
B.b2=s([],t.E)
B.iw=s([],t.t)
B.ix=s([],t.zz)
B.hk=new A.hs(15,"kitchen",-0.3,0)
B.hj=new A.hs(19,"spare-room",0,0.3)
B.M=s([B.hk,B.hj],A.a0("u<hs>"))
B.iz=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.l8=new A.bw(0,"bed")
B.l9=new A.bw(1,"chair")
B.la=new A.bw(2,"floor")
B.cI=s([B.l8,B.l9,B.la],A.a0("u<bw>"))
B.iA=s(["high","medium","low"],t.s)
B.dM=new A.cs(1,"headphones")
B.dN=new A.cs(2,"speakers")
B.b3=s([B.bK,B.dM,B.dN,B.bL],A.a0("u<cs>"))
B.iB=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.b4=s([B.cf,B.cg],A.a0("u<di>"))
B.bc=new A.ch(0,"root")
B.cW=new A.bh(0,"pauseMenu")
B.jE=new A.dp(B.bc,B.cW,null)
B.iC=s([B.jE],t.bA)
B.b5=s([B.bG,B.a4,B.bH],A.a0("u<cH>"))
B.h_=new A.cL(0,"instant")
B.h0=new A.cL(2,"slow")
B.b6=s([B.h_,B.cn,B.h0],A.a0("u<cL>"))
B.iD=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.iE=s([B.D,B.aA,B.a0],A.a0("u<bv>"))
B.cJ=s([B.l,B.u,B.m,B.F],A.a0("u<dN>"))
B.bt=new A.b5(0,"depthTest")
B.bu=new A.b5(1,"depthFunc")
B.bv=new A.b5(2,"depthWrite")
B.bw=new A.b5(3,"blendEnable")
B.bx=new A.b5(4,"blendFunc")
B.by=new A.b5(5,"blendEquation")
B.bz=new A.b5(6,"cullEnable")
B.bA=new A.b5(7,"cullFace")
B.ds=new A.b5(8,"frontFace")
B.le=new A.b5(9,"stencilEnable")
B.dq=new A.b5(10,"colorMask")
B.dr=new A.b5(11,"scissorEnable")
B.iF=s([B.bt,B.bu,B.bv,B.bw,B.bx,B.by,B.bz,B.bA,B.ds,B.le,B.dq,B.dr],A.a0("u<b5>"))
B.iG=s(["off","fxaa","msaa2","msaa4"],t.s)
B.es=new A.de("A.J.",1.275)
B.eq=new A.de("A.J.",1.53)
B.et=new A.de("A.J.",1.77)
B.eu=new A.de("A.J.",2.025)
B.er=new A.de("A.J.",4.8)
B.iH=s([B.es,B.eq,B.et,B.eu,B.er],t.cO)
B.iI=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.iJ=s(["uBloomStrength"],t.s)
B.iK=s(["uLutSize","uStrength"],t.s)
B.iL=s([B.c3,B.c4,B.c5],A.a0("u<cb>"))
B.iM=s(["uTexelSize","uNear","uFar"],t.s)
B.cK=s(["uTexelStep"],t.s)
B.iN=s(["uninitialized"],t.s)
B.fZ=new A.cK(0,"minimal")
B.b7=s([B.fZ,B.cj,B.ck],A.a0("u<cK>"))
B.mn=new A.bo("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mi=new A.bo("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mh=new A.bo("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.mk=new A.bo("ronnie.response","named","The route card gives one name its own line.")
B.iO=s([B.mn,B.mi,B.mh,B.mk],t.uk)
B.a2=new A.c2(0,"waiting")
B.ag=new A.c2(1,"atDoor")
B.ah=new A.c2(2,"consulting")
B.aD=new A.c2(3,"resolved")
B.iP=s([B.a2,B.ag,B.ah,B.aD],A.a0("u<c2>"))
B.iQ=s(["floor-linoleum","ceiling-stained"],t.s)
B.ju={uAlbedo:0}
B.cL=new A.a4(B.ju,[0],t.I)
B.j9={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.cM=new A.a4(B.j9,[2,3,4,5,6],t.I)
B.jB={uSsaoRaw:0,uSceneDepth:1}
B.iR=new A.a4(B.jB,[0,1],t.I)
B.cU={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.i7=s(["KeyW","GamepadDpadUp"],t.s)
B.i6=s(["KeyS","GamepadDpadDown"],t.s)
B.hZ=s(["KeyA","GamepadDpadLeft"],t.s)
B.i_=s(["KeyD","GamepadDpadRight"],t.s)
B.i0=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.i4=s(["KeyQ","GamepadB"],t.s)
B.ia=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.iy=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.i5=s(["KeyR","GamepadX"],t.s)
B.i1=s(["KeyF","GamepadRB"],t.s)
B.i2=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.i3=s(["KeyL"],t.s)
B.hS=s(["Escape","GamepadMenu"],t.s)
B.iS=new A.a4(B.cU,[B.i7,B.i6,B.hZ,B.i_,B.i0,B.i4,B.ia,B.iy,B.i5,B.i1,B.i2,B.i3,B.hS],A.a0("a4<i,D<i>>"))
B.iT=new A.a4(B.cU,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.jy={uScene:0,uHistory:1}
B.iU=new A.a4(B.jy,[0,1],t.I)
B.j7={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.iV=new A.a4(B.j7,["05ea6155c95381b44c7d08b0a28761a76ef2b45a","1795e34564fa71ed38ba3fcc7c86a5057baeae34","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.jl={aPosition:0,aUvMat:1}
B.cN=new A.a4(B.jl,[0,4],t.I)
B.jz={uScene:0,uLut:1}
B.iW=new A.a4(B.jz,[0,1],t.I)
B.jA={uSource:0}
B.cO=new A.a4(B.jA,[0],t.I)
B.js={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.iX=new A.a4(B.js,[0,1,2,3,4,5,6],t.I)
B.cP=new A.cM([B.W,"settings.visual",B.bd,"settings.graphics",B.X,"settings.gameplay",B.be,"settings.controls",B.G,"settings.audio",B.H,"settings.accessibility"],t.EJ)
B.cQ=new A.cM([B.W,"visual",B.bd,"graphics",B.X,"gameplay",B.be,"controls",B.G,"audio",B.H,"accessibility"],t.EJ)
B.jh={uSharp:0,uBlurred:1,uSceneDepth:2}
B.iY=new A.a4(B.jh,[0,1,2],t.I)
B.jD={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.iZ=new A.a4(B.jD,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.jn={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.hB=new A.bf("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hw=new A.bf("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.hA=new A.bf("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.hD=new A.bf("wallpaper-damp","grime",7106925,0.94,0.76)
B.hx=new A.bf("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.hC=new A.bf("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.hE=new A.bf("wallpaper-peeling","grime",9340536,0.91,0.68)
B.hy=new A.bf("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hu=new A.bf("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hv=new A.bf("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hs=new A.bf("floor-concrete","grime",7828331,0.96,0.92)
B.ht=new A.bf("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hz=new A.bf("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.b8=new A.a4(B.jn,[B.hB,B.hw,B.hA,B.hD,B.hx,B.hC,B.hE,B.hy,B.hu,B.hv,B.hs,B.ht,B.hz],A.a0("a4<i,bf>"))
B.jv={uBloom:0}
B.j_=new A.a4(B.jv,[0],t.I)
B.jw={uSceneDepth:0}
B.j0=new A.a4(B.jw,[0],t.I)
B.jx={uScene:0}
B.j1=new A.a4(B.jx,[0],t.I)
B.N={}
B.cS=new A.a4(B.N,[],A.a0("a4<i,h9>"))
B.cR=new A.a4(B.N,[],t.p)
B.b9=new A.a4(B.N,[],A.a0("a4<i,z>"))
B.v=new A.a4(B.N,[],t.I)
B.mA=new A.a4(B.N,[],A.a0("a4<i,i?>"))
B.j2=new A.a4(B.N,[],A.a0("a4<@,@>"))
B.jb={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.j3=new A.a4(B.jb,[0,1,2,3,4,5,6],t.I)
B.cX=new A.cC(0,"resume")
B.cY=new A.cC(1,"settings")
B.cZ=new A.cC(2,"controls")
B.d_=new A.cC(3,"save")
B.d0=new A.cC(4,"help")
B.d1=new A.cC(5,"credits")
B.d2=new A.cC(6,"back")
B.j4=new A.cM([B.cX,"pause.resume",B.cY,"pause.settings",B.cZ,"pause.controls",B.d_,"pause.save",B.d0,"pause.help",B.d1,"pause.credits",B.d2,"pause.back"],A.a0("cM<cC,i>"))
B.jp={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.j5=new A.a4(B.jp,[0,1,2,3],t.I)
B.jC={uTex:0}
B.j6=new A.a4(B.jC,[0],t.I)
B.ba=new A.cM([B.ab,1,B.bp,1.5,B.bq,1.5,B.br,2,B.bs,2,B.a_,4],A.a0("cM<ci,z>"))
B.is=s([],t.bA)
B.it=s([],A.a0("u<bh>"))
B.bb=new A.dV(B.is,B.it,null)
B.cV=new A.ch(1,"settings")
B.jF=new A.ch(2,"visual")
B.jG=new A.ch(3,"graphics")
B.jH=new A.ch(4,"gameplay")
B.jI=new A.ch(5,"controls")
B.jJ=new A.ch(6,"audio")
B.jK=new A.ch(7,"accessibility")
B.jL=new A.ch(8,"credits")
B.V=new A.bh(1,"settings")
B.jM=new A.bh(2,"journal")
B.jN=new A.bh(3,"sleep")
B.jO=new A.bh(4,"help")
B.jP=new A.bh(5,"visitor")
B.jQ=new A.bh(6,"ending")
B.d3=new A.dW(0,"opened")
B.d4=new A.dW(2,"backed")
B.d5=new A.dW(3,"resumed")
B.jR=new A.dW(4,"dismissed")
B.Y=new A.dW(5,"unchanged")
B.jS=new A.br("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.jT=new A.br("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.jU=new A.br("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.jV=new A.br("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.jW=new A.br("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.jX=new A.br("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.jY=new A.br("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.jZ=new A.br("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.k_=new A.br("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.k0=new A.kn(0,1,null)
B.k2=new A.ko(1,"high")
B.k1=new A.pY(!1,!0,!0,!0,!1,B.k2,35,256)
B.k3=new A.ks(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.bf=new A.eA(0,"safe")
B.bg=new A.eA(1,"standard")
B.bh=new A.eA(2,"high")
B.O=new A.aH(B.N,0,t.M)
B.ay=new A.ez(B.bf,B.O)
B.jt={shadows:0}
B.kV=new A.aH(B.jt,1,t.M)
B.k5=new A.ez(B.bg,B.kV)
B.je={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.kN=new A.aH(B.je,5,t.M)
B.k6=new A.ez(B.bh,B.kN)
B.k4=new A.eA(4,"shipping")
B.jg={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.kO=new A.aH(B.jg,7,t.M)
B.mB=new A.ez(B.k4,B.kO)
B.k8=new A.aX(0,1)
B.k9=new A.aY(0.35,0.52,0.88)
B.ka=new A.ap(0.46,0.25,0.2)
B.d7=new A.aY(0.22,0.45,0.92)
B.kb=new A.ap(0.48,0.4,0.34)
B.kc=new A.ap(0.31,0.25,0.23)
B.bi=new A.aY(0.75,0.52,0.42)
B.kd=new A.aY(0.4,0.65,0.95)
B.bj=new A.aY(0.88,0.96,1)
B.ke=new A.ap(0.37,0.33,0.31)
B.kf=new A.aY(0.62,0.48,0.45)
B.kg=new A.ap(0.34,0.32,0.29)
B.d8=new A.ap(0.38,0.25,0.19)
B.bk=new A.aY(0.9,0.8,0.72)
B.d9=new A.aY(0.28,0.16,0.12)
B.kh=new A.ap(0.31,0.28,0.24)
B.da=new A.aY(0.65,0.45,0.35)
B.ki=new A.ap(0.58,0.56,0.5)
B.db=new A.aY(0.2,0.38,0.9)
B.kj=new A.ap(0.44,0.37,0.28)
B.kk=new A.ap(0.52,0.5,0.44)
B.kl=new A.ap(0.24,0.25,0.27)
B.km=new A.ap(0.28,0.27,0.25)
B.kn=new A.aY(0.35,0.28,0.25)
B.dc=new A.aY(0.52,0.32,0.38)
B.ko=new A.ap(0.42,0.4,0.38)
B.kp=new A.ap(0.18,0.2,0.21)
B.kq=new A.ap(0.2,0.12,0.1)
B.dd=new A.aY(0.35,0.2,0.15)
B.kr=new A.ap(0.12,0.15,0.2)
B.bl=new A.hR(0,"legacy")
B.de=new A.eC(0,"constructed")
B.z=new A.eC(1,"ready")
B.az=new A.eC(2,"lost")
B.df=new A.eC(3,"disposed")
B.mz=new A.jy(1,"errorsOnly")
B.ks=new A.ky(B.ay,384,216,0)
B.bm=new A.eD(0,"constructed")
B.kt=new A.eD(1,"initializing")
B.bn=new A.eD(2,"ready")
B.dg=new A.eD(3,"contextLost")
B.i=new A.fw(0,"read")
B.j=new A.fw(1,"write")
B.I=new A.fw(2,"historyRead")
B.r=new A.hT(0,"rgba8")
B.ku=new A.aN("dofBlurH",B.r,192,108,1,0)
B.kv=new A.aN("dofBlurV",B.r,192,108,1,0)
B.kw=new A.aN("dofOutput",B.r,384,216,1,0)
B.dh=new A.hT(2,"depth24")
B.kx=new A.aN("shadowMap",B.dh,512,512,1,0)
B.ky=new A.aN("ssaoRaw",B.r,192,108,1,0)
B.kz=new A.aN("ssaoBlurred",B.r,192,108,1,0)
B.kA=new A.aN("gradeOutput",B.r,384,216,1,0)
B.kB=new A.aN("vhsOutput",B.r,384,216,1,0)
B.kC=new A.aN("sceneDepth",B.dh,384,216,1,0)
B.kD=new A.aN("bloomBlurH",B.r,192,108,1,0)
B.kE=new A.aN("bloomBlurV",B.r,192,108,1,0)
B.kF=new A.aN("present",B.r,384,216,1,0)
B.bo=new A.aN("sceneColor",B.r,384,216,1,0)
B.kG=new A.aN("ps1Output",B.r,384,216,1,0)
B.kH=new A.eE(null,"save storage unavailable")
B.kI=new A.eE(null,"save could not be recovered")
B.kJ=new A.eE(null,null)
B.jj={WheelUp:0,WheelDown:1}
B.kK=new A.aH(B.jj,2,t.M)
B.jd={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.kL=new A.aH(B.jd,4,t.M)
B.jq={open:0,closed:1}
B.kM=new A.aH(B.jq,2,t.M)
B.jc={Escape:0}
B.di=new A.aH(B.jc,1,t.M)
B.ja={open:0,closed:1,mixed:2}
B.kP=new A.aH(B.ja,3,t.M)
B.jo={front:0,"rear-service":1}
B.kQ=new A.aH(B.jo,2,t.M)
B.jr={overcast:0,rain:1}
B.kR=new A.aH(B.jr,2,t.M)
B.jm={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.kS=new A.aH(B.jm,16,t.M)
B.jk={Escape:0,Tab:1,F11:2}
B.dj=new A.aH(B.jk,3,t.M)
B.ji={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.kT=new A.aH(B.ji,5,t.M)
B.jf={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ac=new A.aH(B.jf,7,t.M)
B.j8={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.kU=new A.aH(B.j8,9,t.M)
B.dm=new A.eF(2,"link")
B.l5=new A.hX(B.dm,"gl.createProgram() returned null")
B.dk=new A.eF(0,"vertex")
B.dl=new A.eF(1,"fragment")
B.dn=new A.eF(3,"validation")
B.l6=new A.hY(0,"full")
B.l7=new A.hY(2,"culled")
B.a1=new A.M(0,1,0)
B.aC=new A.M(0,-1,0)
B.lc=new A.bx(-1,B.a1,B.aC,B.cz,1,1,0.3,0.5)
B.cF=s([],t.n)
B.ld=new A.kJ(!1,"","",B.cF,B.cF)
B.dt=new A.dZ(0,"resident")
B.du=new A.dZ(1,"pending")
B.dv=new A.dZ(2,"missing")
B.dw=new A.dZ(3,"evicted")
B.af=new A.M(0,0,0)
B.k7=new A.kw(0,0,0,1)
B.A=new A.kP(B.af,B.k7)
B.lf=A.cp("Gk")
B.lg=A.cp("Gl")
B.lh=A.cp("nX")
B.li=A.cp("Bn")
B.lj=A.cp("BB")
B.lk=A.cp("BC")
B.ll=A.cp("BD")
B.lm=A.cp("a5")
B.ln=A.cp("G")
B.lo=A.cp("wd")
B.lp=A.cp("Cr")
B.lq=A.cp("Cs")
B.lr=A.cp("i4")
B.e=new A.cX(0,"float1")
B.aB=new A.cX(1,"float2")
B.p=new A.cX(2,"float3")
B.ls=new A.cX(3,"float4")
B.t=new A.cX(4,"mat4")
B.dx=new A.cX(5,"mat4Array")
B.bB=new A.A(B.e,0)
B.dy=new A.A(B.e,1)
B.Q=new A.cX(6,"sampler")
B.w=new A.A(B.Q,0)
B.ae=new A.A(B.Q,1)
B.dz=new A.A(B.Q,2)
B.lt=new A.A(B.Q,3)
B.lu=new A.A(B.Q,4)
B.lv=new A.A(B.Q,5)
B.lw=new A.A(B.Q,6)
B.lx=new A.rw(!1)
B.ly=new A.M(0,0,1)
B.lz=new A.M(1,0,0)
B.lA=new A.M(1/0,1/0,1/0)
B.lB=new A.M(-1/0,-1/0,-1/0)
B.dB=new A.d_(6,"tangent4")
B.lN=new A.e1(0,"visitorAnswered")
B.dC=new A.e1(1,"visitorIgnored")
B.lO=new A.e1(2,"entryVerified")
B.lP=new A.e1(3,"entryContradicted")
B.lQ=new A.e1(4,"exposureAccepted")
B.lS=new A.d0(1,"malformedDay")
B.lT=new A.d0(2,"malformedTier")
B.dD=new A.d0(3,"missingTierLines")
B.a3=new A.d0(6,"invalidPhase")
B.lW=new A.bm(B.a3,"No reaction is due.")
B.m3=new A.b6(B.lW)
B.m0=new A.bm(B.a3,"The active visit cannot be chosen.")
B.m4=new A.b6(B.m0)
B.lX=new A.bm(B.a3,"The active visit has no line to advance.")
B.m5=new A.b6(B.lX)
B.lV=new A.d0(5,"noActiveVisit")
B.lY=new A.bm(B.lV,"There is no active visit.")
B.dE=new A.b6(B.lY)
B.m_=new A.bm(B.a3,"A visit is already active.")
B.m6=new A.b6(B.m_)
B.lU=new A.d0(4,"noArrival")
B.m2=new A.bm(B.lU,"The authored arrival is missing.")
B.m7=new A.b6(B.m2)
B.lZ=new A.bm(B.a3,"That answer is not offered.")
B.m8=new A.b6(B.lZ)
B.lR=new A.d0(0,"missingCorpus")
B.m1=new A.bm(B.lR,"The authored visitor corpus is empty.")
B.m9=new A.b6(B.m1)
B.dF=new A.eL(1,"exact")
B.bF=new A.eL(2,"partial")
B.aE=new A.eL(3,"contradiction")
B.ma=new A.eL(0,"skipped")
B.mb=new A.eK(B.ma,B.O)
B.mc=new A.eK(B.bF,B.O)
B.md=new A.ia(B.U,!1)
B.me=new A.ia(B.U,!0)
B.dG=new A.id(0,"horizontal")
B.mf=new A.id(1,"vertical")
B.dH=new A.ig(0,"horizontal")
B.mg=new A.ig(1,"vertical")
B.aF=new A.fJ(0,"empty")
B.mu=new A.fJ(1,"cpuReady")
B.aG=new A.fJ(4,"released")})();(function staticFields(){$.te=null
$.c8=A.e([],A.a0("u<G>"))
$.xU=null
$.q1=0
$.q2=A.EB()
$.xo=null
$.xn=null
$.zR=null
$.zI=null
$.zZ=null
$.uZ=null
$.v5=null
$.x0=null
$.tr=A.e([],A.a0("u<D<G>?>"))
$.fY=null
$.iY=null
$.iZ=null
$.wF=!1
$.ao=B.x
$.yb=""
$.yc=null
$.y7=null
$.pJ=null
$.c6=A.a8()
$.d4=A.a8()
$.bG=null
$.m7=null
$.tD=A.a8()
$.B=A.a8()
$.bS=A.a8()
$.ad=A.a8()
$.yJ=A.a8()
$.h_=null
$.Y=A.a8()
$.fV=null
$.b9=A.a8()
$.V=A.a8()
$.wp=A.a8()
$.wA=null
$.bp=null
$.ws=!1
$.me=!1
$.iV=B.aI
$.e7=B.aj
$.uM=!1
$.wU=!1
$.z7=null
$.m6=null
$.m2=null
$.yV=0
$.mc=!1
$.z6=!1
$.wG=0
$.zd=0
$.e8=0
$.zE=!1
$.wu="booting"
$.c7=0
$.ea=0
$.ax="hall"
$.iR=A.a8()
$.fQ=A.a8()
$.bT=A.a8()
$.zc=null
$.wM=0
$.ba=null
$.j2=!1
$.co=A.a8()
$.fT=A.a8()
$.fS=A.a8()
$.lZ=A.a8()
$.yK=A.a8()
$.yI=A.a8()
$.aF=A.a8()
$.m_=A.a8()
$.iQ=A.a8()
$.lY=A.a8()
$.iS=A.a8()
$.iT=A.a8()
$.eV=A.a8()
$.fR=A.a8()
$.fP=A.a8()
$.iP=A.a8()
$.iN=A.a8()
$.iO=A.a8()
$.aK=A.a8()
$.lX=A.a8()
$.b8=A.a8()
$.uO=A.a2(t.S)
$.d5=A.e([],t.s)
$.wz=null
$.zy=!1
$.yN=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Gn","A7",()=>A.zQ("_$dart_dartClosure"))
s($,"Gm","ef",()=>A.zQ("_$dart_dartClosure_dartJSInterop"))
s($,"H2","As",()=>A.e([new J.k0()],A.a0("u<hV>")))
s($,"Gz","A8",()=>A.dv(A.rs({
toString:function(){return"$receiver$"}})))
s($,"GA","A9",()=>A.dv(A.rs({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"GB","Aa",()=>A.dv(A.rs(null)))
s($,"GC","Ab",()=>A.dv(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GF","Ae",()=>A.dv(A.rs(void 0)))
s($,"GG","Af",()=>A.dv(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GE","Ad",()=>A.dv(A.y8(null)))
s($,"GD","Ac",()=>A.dv(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"GI","Ah",()=>A.dv(A.y8(void 0)))
s($,"GH","Ag",()=>A.dv(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"GK","xa",()=>A.CQ())
s($,"GO","Am",()=>A.BU(4096))
s($,"GM","Ak",()=>new A.tA().$0())
s($,"GN","Al",()=>new A.tz().$0())
s($,"GL","Aj",()=>A.BT(A.a1(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"GX","h5",()=>A.ml(B.ln))
s($,"Gx","x9",()=>{A.C7()
return $.q1})
s($,"Gj","A6",()=>B.bo.j_())
s($,"Gs","x8",()=>A.kl(A.e([255,255,255,255],t.t)))
s($,"Gp","x5",()=>A.kl(A.e([128,128,255,255],t.t)))
s($,"Go","x4",()=>A.kl(A.e([0,0,0,255],t.t)))
s($,"Gq","x6",()=>A.kl(A.e([255,255,0,255],t.t)))
s($,"Gr","x7",()=>A.kl(A.e([255,255,255,255],t.t)))
s($,"H4","Au",()=>A.i6(0,1,0))
s($,"GJ","Ai",()=>A.CN(A.a2(t.N),0,0,A.i6(0,0,0)))
s($,"H3","At",()=>A.xZ("^[a-z0-9][a-z0-9._-]*$"))
s($,"H7","h7",()=>{var q=$.y7
if(q==null){A.uW()
A.uW()
A.uW()
A.uW()
q=$.y7=new A.rh()}return q})
s($,"Gt","vI",()=>A.vS(B.cd,!0,B.aP,B.cf,B.ci,B.cj,B.cl,B.cn))
s($,"GU","An",()=>new A.n7())
r($,"zC","d8",()=>A.wa(null,null))
r($,"us","xf",()=>A.jS(null,null))
r($,"wy","f_",()=>A.ff(null,null,!1,1,!1,!1,2,1))
r($,"wB","vK",()=>$.vI())
s($,"GY","Ap",()=>new A.oA())
s($,"GZ","Aq",()=>new A.oJ())
s($,"H_","vL",()=>new A.p2(A.p(t.N,t.S)))
s($,"GW","Ao",()=>A.cZ().gaI().h(0,"debugPause")==="1")
s($,"GT","j6",()=>A.cZ().gaI().h(0,"automation")==="1")
s($,"GQ","vJ",()=>A.ER())
s($,"GP","xb",()=>$.vJ()!=null)
s($,"GR","xc",()=>$.j6()?A.cZ().gaI().h(0,"captureMantleId"):null)
s($,"GS","xd",()=>A.cZ().gaI().h(0,"captureMantleLit")==="1")
r($,"wP","f0",()=>A.i6(0,0,0))
r($,"wK","Ar",()=>A.i6(0,0,0))
r($,"wV","j7",()=>A.i6(0,0,0))
s($,"GV","xe",()=>A.ES())
s($,"H0","mm",()=>new A.nY(A.i6(0,0,0)))
s($,"H1","h6",()=>new A.pN(B.bb))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dU,ArrayBuffer:A.fr,ArrayBufferView:A.hH,DataView:A.ke,Float32Array:A.hE,Float64Array:A.kf,Int16Array:A.kg,Int32Array:A.kh,Int8Array:A.ki,Uint16Array:A.kj,Uint32Array:A.kk,Uint8ClampedArray:A.ex,CanvasPixelArray:A.ex,Uint8Array:A.hI})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.ir.$nativeSuperclassTag="ArrayBufferView"
A.is.$nativeSuperclassTag="ArrayBufferView"
A.hF.$nativeSuperclassTag="ArrayBufferView"
A.it.$nativeSuperclassTag="ArrayBufferView"
A.iu.$nativeSuperclassTag="ArrayBufferView"
A.hG.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.v6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
