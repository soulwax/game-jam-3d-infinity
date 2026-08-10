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
if(a[b]!==s){A.F0(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.w_(b)
return new s(c,this)}:function(){if(s===null)s=A.w_(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.w_(a).prototype
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
w4(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uc(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.w2==null){A.EC()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.x9("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.rq
if(o==null)o=$.rq=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.EI(a)
if(p!=null)return p
if(typeof a=="function")return B.fV
s=Object.getPrototypeOf(a)
if(s==null)return B.cL
if(s===Object.prototype)return B.cL
if(typeof q=="function"){o=$.rq
if(o==null)o=$.rq=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bl,enumerable:false,writable:true,configurable:true})
return B.bl}return B.bl},
wF(a,b){if(a<0||a>4294967295)throw A.d(A.aT(a,0,4294967295,"length",null))
return J.wH(new Array(a),b)},
wG(a,b){if(a<0)throw A.d(A.x("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
jC(a,b){if(a<0)throw A.d(A.x("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
wH(a,b){var s=A.e(a,b.i("u<0>"))
s.$flags=1
return s},
AC(a,b){var s=t.bP
return J.wi(s.a(a),s.a(b))},
wK(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
AD(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.wK(r))break;++b}return b},
AE(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.wK(q))break}return b},
e1(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.h8.prototype
return J.jE.prototype}if(typeof a=="string")return J.dG.prototype
if(a==null)return J.h9.prototype
if(typeof a=="boolean")return J.jD.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dc.prototype
if(typeof a=="symbol")return J.f9.prototype
if(typeof a=="bigint")return J.f8.prototype
return a}if(a instanceof A.F)return a
return J.uc(a)},
aK(a){if(typeof a=="string")return J.dG.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dc.prototype
if(typeof a=="symbol")return J.f9.prototype
if(typeof a=="bigint")return J.f8.prototype
return a}if(a instanceof A.F)return a
return J.uc(a)},
c2(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dc.prototype
if(typeof a=="symbol")return J.f9.prototype
if(typeof a=="bigint")return J.f8.prototype
return a}if(a instanceof A.F)return a
return J.uc(a)},
Ex(a){if(typeof a=="number")return J.ei.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.dO.prototype
return a},
yL(a){if(typeof a=="number")return J.ei.prototype
if(typeof a=="string")return J.dG.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.dO.prototype
return a},
Ey(a){if(typeof a=="string")return J.dG.prototype
if(a==null)return a
if(!(a instanceof A.F))return J.dO.prototype
return a},
Ez(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dc.prototype
if(typeof a=="symbol")return J.f9.prototype
if(typeof a=="bigint")return J.f8.prototype
return a}if(a instanceof A.F)return a
return J.uc(a)},
wh(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.yL(a).a5(a,b)},
a2(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e1(a).Z(a,b)},
aC(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.EH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).h(a,b)},
bA(a,b,c){return J.c2(a).k(a,b,c)},
fQ(a,b){return J.c2(a).l(a,b)},
uT(a,b){return J.c2(a).M(a,b)},
zu(a,b,c){return J.Ez(a).hc(a,b,c)},
zv(a,b){return J.c2(a).cB(a,b)},
wi(a,b){return J.yL(a).F(a,b)},
wj(a,b){return J.aK(a).u(a,b)},
lP(a,b){return J.c2(a).X(a,b)},
zw(a,b){return J.c2(a).a2(a,b)},
wk(a){return J.c2(a).gR(a)},
av(a){return J.e1(a).gK(a)},
uU(a){return J.aK(a).gL(a)},
zx(a){return J.aK(a).gV(a)},
T(a){return J.c2(a).gq(a)},
c3(a){return J.aK(a).gt(a)},
eQ(a){return J.e1(a).ga_(a)},
zy(a,b){return J.c2(a).ab(a,b)},
eR(a,b,c){return J.c2(a).c7(a,b,c)},
zz(a,b){return J.aK(a).st(a,b)},
zA(a,b){return J.c2(a).S(a,b)},
zB(a,b){return J.Ey(a).bp(a,b)},
uV(a,b){return J.Ex(a).ot(a,b)},
d1(a){return J.e1(a).p(a)},
zC(a,b){return J.c2(a).eM(a,b)},
jA:function jA(){},
jD:function jD(){},
h9:function h9(){},
ha:function ha(){},
dH:function dH(){},
k0:function k0(){},
dO:function dO(){},
dc:function dc(){},
f8:function f8(){},
f9:function f9(){},
u:function u(a){this.$ti=a},
jB:function jB(){},
ok:function ok(a){this.$ti=a},
e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ei:function ei(){},
h8:function h8(){},
jE:function jE(){},
dG:function dG(){}},A={uZ:function uZ(){},
u7(){return $},
zP(a,b,c){if(t.gt.b(a))return new A.hT(a,b.i("@<0>").I(c).i("hT<1,2>"))
return new A.e6(a,b.i("@<0>").I(c).i("e6<1,2>"))},
wN(a){return new A.ej("Field '"+a+"' has been assigned during initialization.")},
a4(a){return new A.ej("Field '"+a+"' has not been initialized.")},
AH(a){return new A.ej("Field '"+a+"' has already been initialized.")},
ud(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hF(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e0(a,b,c){return a},
w3(a){var s,r
for(s=$.c1.length,r=0;r<s;++r)if(a===$.c1[r])return!0
return!1},
hE(a,b,c,d){A.k8(b,"start")
if(c!=null){A.k8(c,"end")
if(b>c)A.i(A.aT(b,0,c,"start",null))}return new A.hD(a,b,c,d.i("hD<0>"))},
jL(a,b,c,d){if(t.gt.b(a))return new A.d6(a,b,c.i("@<0>").I(d).i("d6<1,2>"))
return new A.cm(a,b,c.i("@<0>").I(d).i("cm<1,2>"))},
cE(){return new A.fj("No element")},
wE(){return new A.fj("Too many elements")},
kg(a,b,c,d,e){if(c-b<=32)A.Bf(a,b,c,d,e)
else A.Be(a,b,c,d,e)},
Bf(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aK(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.am()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Be(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.T(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.T(a4+a5,2),f=g-j,e=g+j,d=J.aK(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
p=J.a2(a6.$2(b,a0),0)
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
A.kg(a3,a4,r-2,a6,a7)
A.kg(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a2(a6.$2(d.h(a3,r),b),0))++r
while(J.a2(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.kg(a3,r,q,a6,a7)}else A.kg(a3,r,q,a6,a7)},
dS:function dS(){},
fU:function fU(a,b){this.a=a
this.$ti=b},
e6:function e6(a,b){this.a=a
this.$ti=b},
hT:function hT(a,b){this.a=a
this.$ti=b},
hR:function hR(){},
r9:function r9(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.$ti=b},
ej:function ej(a){this.a=a},
dz:function dz(a){this.a=a},
pM:function pM(){},
Q:function Q(){},
a3:function a3(){},
hD:function hD(a,b,c,d){var _=this
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
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
he:function he(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.$ti=c},
h2:function h2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h_:function h_(a){this.$ti=a},
cp:function cp(a,b){this.a=a
this.$ti=b},
hM:function hM(a,b){this.a=a
this.$ti=b},
ap:function ap(){},
cQ:function cQ(){},
fl:function fl(){},
hv:function hv(a,b){this.a=a
this.$ti=b},
im:function im(){},
b_(a,b,c){var s,r,q,p,o,n,m,l=A.aq(a.gY(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aq(a.gav(),!0,c)
m=new A.a7(q,n,b.i("@<0>").I(c).i("a7<1,2>"))
m.$keys=l
return m}return new A.fW(A.aM(a,b,c),b.i("@<0>").I(c).i("fW<1,2>"))},
zV(){throw A.d(A.aW("Cannot modify unmodifiable Map"))},
zW(){throw A.d(A.aW("Cannot modify constant Set"))},
z3(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
EH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d1(a)
return s},
ho(a){var s,r=$.wV
if(r==null)r=$.wV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
fe(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hp(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bb(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
k5(a){var s,r,q,p
if(a instanceof A.F)return A.bx(A.bL(a),null)
s=J.e1(a)
if(s===B.fU||s===B.fW||t.cx.b(a)){r=B.bC(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bx(A.bL(a),null)},
wW(a){var s,r,q
if(a==null||typeof a=="number"||A.c_(a))return J.d1(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dy)return a.p(0)
if(a instanceof A.bX)return a.h5(!0)
s=$.zr()
for(r=0;r<1;++r){q=s[r].ou(a)
if(q!=null)return q}return"Instance of '"+A.k5(a)+"'"},
AT(){return Date.now()},
B1(){var s,r
if($.pe!==0)return
$.pe=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pe=1e6
$.pf=new A.pd(r)},
AS(){if(!!self.location)return self.location.href
return null},
B2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
as(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.dA(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aT(a,0,1114111,null,null))},
fd(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
B0(a){var s=A.fd(a).getUTCFullYear()+0
return s},
AZ(a){var s=A.fd(a).getUTCMonth()+1
return s},
AV(a){var s=A.fd(a).getUTCDate()+0
return s},
AW(a){var s=A.fd(a).getUTCHours()+0
return s},
AY(a){var s=A.fd(a).getUTCMinutes()+0
return s},
B_(a){var s=A.fd(a).getUTCSeconds()+0
return s},
AX(a){var s=A.fd(a).getUTCMilliseconds()+0
return s},
AU(a){var s=a.$thrownJsError
if(s==null)return null
return A.cr(s)},
wX(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aA(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
lL(a){throw A.d(A.vZ(a))},
f(a,b){if(a==null)J.c3(a)
throw A.d(A.u9(a,b))},
u9(a,b){var s,r="index"
if(!A.aJ(b))return new A.ci(!0,b,r,null)
s=A.c(J.c3(a))
if(b<0||b>=s)return A.oc(b,s,a,r)
return A.wZ(b,r)},
Er(a,b,c){if(a>c)return A.aT(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aT(b,a,c,"end",null)
return new A.ci(!0,b,"end",null)},
vZ(a){return new A.ci(!0,a,null,null)},
d(a){return A.aA(a,new Error())},
aA(a,b){var s
if(a==null)a=new A.dk()
b.dartException=a
s=A.F3
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
F3(){return J.d1(this.dartException)},
i(a,b){throw A.aA(a,b==null?new Error():b)},
bz(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.i(A.CQ(a,b,c),s)},
CQ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.hI("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.d(A.aw(a))},
dl(a){var s,r,q,p,o,n
a=A.yW(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.qE(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
qF(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
x8(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
v_(a,b){var s=b==null,r=s?null:b.method
return new A.jG(a,r,s?null:b.receiver)},
ae(a){var s
if(a==null)return new A.oV(a)
if(a instanceof A.h0){s=a.a
return A.e2(a,s==null?A.fA(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.e2(a,a.dartException)
return A.DZ(a)},
e2(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
DZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.dA(r,16)&8191)===10)switch(q){case 438:return A.e2(a,A.v_(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.e2(a,new A.hk())}}if(a instanceof TypeError){p=$.z7()
o=$.z8()
n=$.z9()
m=$.za()
l=$.zd()
k=$.ze()
j=$.zc()
$.zb()
i=$.zg()
h=$.zf()
g=p.aQ(s)
if(g!=null)return A.e2(a,A.v_(A.y(s),g))
else{g=o.aQ(s)
if(g!=null){g.method="call"
return A.e2(a,A.v_(A.y(s),g))}else if(n.aQ(s)!=null||m.aQ(s)!=null||l.aQ(s)!=null||k.aQ(s)!=null||j.aQ(s)!=null||m.aQ(s)!=null||i.aQ(s)!=null||h.aQ(s)!=null){A.y(s)
return A.e2(a,new A.hk())}}return A.e2(a,new A.kq(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hB()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e2(a,new A.ci(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hB()
return a},
cr(a){var s
if(a instanceof A.h0)return a.b
if(a==null)return new A.i9(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.i9(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
lM(a){if(a==null)return J.av(a)
if(typeof a=="object")return A.ho(a)
return J.av(a)},
El(a){if(typeof a=="number")return B.d.gK(a)
if(a instanceof A.lm)return A.ho(a)
if(a instanceof A.bX)return a.gK(a)
return A.lM(a)},
yJ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Ew(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Dd(a,b,c,d,e,f){t.D.a(a)
switch(A.c(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.f6("Unsupported number of arguments for wrapped closure"))},
fL(a,b){var s=a.$identity
if(!!s)return s
s=A.Em(a,b)
a.$identity=s
return s},
Em(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Dd)},
zU(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kj().constructor.prototype):Object.create(new A.eX(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wq(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.zQ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wq(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
zQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.zM)}throw A.d("Error in functionType of tearoff")},
zR(a,b,c,d){var s=A.wp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wq(a,b,c,d){if(c)return A.zT(a,b,d)
return A.zR(b.length,d,a,b)},
zS(a,b,c,d){var s=A.wp,r=A.zN
switch(b?-1:a){case 0:throw A.d(new A.kc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
zT(a,b,c){var s,r
if($.wn==null)$.wn=A.wm("interceptor")
if($.wo==null)$.wo=A.wm("receiver")
s=b.length
r=A.zS(s,c,a,b)
return r},
w_(a){return A.zU(a)},
zM(a,b){return A.id(v.typeUniverse,A.bL(a.a),b)},
wp(a){return a.a},
zN(a){return a.b},
wm(a){var s,r,q,p=new A.eX("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.x("Field name "+a+" not found.",null))},
yM(a){return v.getIsolateTag(a)},
z_(){return v.G},
FQ(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
EI(a){var s,r,q,p,o,n=A.y($.yN.$1(a)),m=$.ua[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aQ($.yG.$2(a,n))
if(q!=null){m=$.ua[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.uG(s)
$.ua[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.uh[n]=s
return s}if(p==="-"){o=A.uG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.yU(a,s)
if(p==="*")throw A.d(A.x9(n))
if(v.leafTags[n]===true){o=A.uG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.yU(a,s)},
yU(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.w4(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
uG(a){return J.w4(a,!1,null,!!a.$ibP)},
EN(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.uG(s)
else return J.w4(s,c,null,null)},
EC(){if(!0===$.w2)return
$.w2=!0
A.ED()},
ED(){var s,r,q,p,o,n,m,l
$.ua=Object.create(null)
$.uh=Object.create(null)
A.EB()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.yV.$1(o)
if(n!=null){m=A.EN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
EB(){var s,r,q,p,o,n,m=B.dE()
m=A.fK(B.dF,A.fK(B.dG,A.fK(B.bD,A.fK(B.bD,A.fK(B.dH,A.fK(B.dI,A.fK(B.dJ(B.bC),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.yN=new A.ue(p)
$.yG=new A.uf(o)
$.yV=new A.ug(n)},
fK(a,b){return a(b)||b},
BU(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a2(r,b[s]))return!1}return!0},
Eo(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
AF(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
EY(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Eu(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
yW(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
EZ(a,b,c){var s=A.F_(a,b,c)
return s},
F_(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.yW(b),"g"),A.Eu(c))},
az:function az(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
fW:function fW(a,b){this.a=a
this.$ti=b},
f0:function f0(){},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c){this.a=a
this.b=b
this.$ti=c},
eF:function eF(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cy:function cy(a,b){this.a=a
this.$ti=b},
fX:function fX(){},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
pd:function pd(a){this.a=a},
hw:function hw(){},
qE:function qE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(){},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a){this.a=a},
oV:function oV(a){this.a=a},
h0:function h0(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a
this.b=null},
dy:function dy(){},
iV:function iV(){},
iW:function iW(){},
km:function km(){},
kj:function kj(){},
eX:function eX(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a},
c6:function c6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ot:function ot(a){this.a=a},
oB:function oB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ac:function ac(a,b){this.a=a
this.$ti=b},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(a,b){this.a=a
this.$ti=b},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
G:function G(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hb:function hb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ue:function ue(a){this.a=a},
uf:function uf(a){this.a=a},
ug:function ug(a){this.a=a},
bX:function bX(){},
eJ:function eJ(){},
fp:function fp(){},
fq:function fq(){},
jF:function jF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
F0(a){throw A.aA(A.wN(a),new Error())},
h(){throw A.aA(A.a4(""),new Error())},
J(){throw A.aA(A.AH(""),new Error())},
z2(){throw A.aA(A.wN(""),new Error())},
a9(){var s=new A.ra()
return s.b=s},
ra:function ra(){this.b=null},
xY(a,b,c){},
a0(a){return a},
AN(a,b,c){A.xY(a,b,c)
return new Float32Array(a,b,c)},
AO(a){return new Int8Array(a)},
AP(a){return new Uint8Array(a)},
jY(a){return new Uint8Array(A.a0(a))},
dt(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.u9(b,a))},
CF(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.Er(a,b,c))
return b},
dI:function dI(){},
fc:function fc(){},
hi:function hi(){},
rK:function rK(a){this.a=a},
jR:function jR(){},
b0:function b0(){},
hg:function hg(){},
hh:function hh(){},
hf:function hf(){},
jS:function jS(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jX:function jX(){},
en:function en(){},
hj:function hj(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
vb(a,b){var s=b.c
return s==null?b.c=A.ib(a,"bO",[b.x]):s},
x0(a){var s=a.w
if(s===6||s===7)return A.x0(a.x)
return s===11||s===12},
B9(a){return a.as},
EO(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a1(a){return A.rJ(v.typeUniverse,a,!1)},
eN(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eN(a1,s,a3,a4)
if(r===s)return a2
return A.xx(a1,r,!0)
case 7:s=a2.x
r=A.eN(a1,s,a3,a4)
if(r===s)return a2
return A.xw(a1,r,!0)
case 8:q=a2.y
p=A.fJ(a1,q,a3,a4)
if(p===q)return a2
return A.ib(a1,a2.x,p)
case 9:o=a2.x
n=A.eN(a1,o,a3,a4)
m=a2.y
l=A.fJ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vn(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fJ(a1,j,a3,a4)
if(i===j)return a2
return A.xy(a1,k,i)
case 11:h=a2.x
g=A.eN(a1,h,a3,a4)
f=a2.y
e=A.DV(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.xv(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fJ(a1,d,a3,a4)
o=a2.x
n=A.eN(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.vo(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.iK("Attempted to substitute unexpected RTI kind "+a0))}},
fJ(a,b,c,d){var s,r,q,p,o=b.length,n=A.rO(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eN(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
DW(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.rO(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eN(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
DV(a,b,c,d){var s,r=b.a,q=A.fJ(a,r,c,d),p=b.b,o=A.fJ(a,p,c,d),n=b.c,m=A.DW(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.kU()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
w0(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.EA(s)
return a.$S()}return null},
EE(a,b){var s
if(A.x0(b))if(a instanceof A.dy){s=A.w0(a)
if(s!=null)return s}return A.bL(a)},
bL(a){if(a instanceof A.F)return A.q(a)
if(Array.isArray(a))return A.I(a)
return A.vF(J.e1(a))},
I(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.vF(a)},
vF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Da(a,s)},
Da(a,b){var s=a instanceof A.dy?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.C3(v.typeUniverse,s.name)
b.$ccache=r
return r},
EA(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.rJ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
lK(a){return A.cZ(A.q(a))},
vV(a){var s
if(a instanceof A.bX)return a.ft()
s=a instanceof A.dy?A.w0(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.eQ(a).a
if(Array.isArray(a))return A.I(a)
return A.bL(a)},
cZ(a){var s=a.r
return s==null?a.r=new A.lm(a):s},
Ev(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.f(q,0)
s=A.id(v.typeUniverse,A.vV(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.xz(v.typeUniverse,s,A.vV(q[r]))}return A.id(v.typeUniverse,s,a)},
cf(a){return A.cZ(A.rJ(v.typeUniverse,a,!1))},
D9(a){var s=this
s.b=A.DQ(s)
return s.b(a)},
DQ(a){var s,r,q,p,o
if(a===t.K)return A.Dj
if(A.eO(a))return A.Dn
s=a.w
if(s===6)return A.D3
if(s===1)return A.ya
if(s===7)return A.De
r=A.DP(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eO)){a.f="$i"+q
if(q==="E")return A.Dh
if(a===t.m)return A.Dg
return A.Dm}}else if(s===10){p=A.Eo(a.x,a.y)
o=p==null?A.ya:p
return o==null?A.fA(o):o}return A.D1},
DP(a){if(a.w===8){if(a===t.S)return A.aJ
if(a===t.i||a===t.o)return A.Di
if(a===t.N)return A.Dl
if(a===t.y)return A.c_}return null},
D8(a){var s=this,r=A.D0
if(A.eO(s))r=A.Cz
else if(s===t.K)r=A.fA
else if(A.fM(s)){r=A.D2
if(s===t.aV)r=A.xT
else if(s===t.x)r=A.aQ
else if(s===t.fU)r=A.Cy
else if(s===t.jh)r=A.vu
else if(s===t.dE)r=A.xS
else if(s===t.mU)r=A.k}else if(s===t.S)r=A.c
else if(s===t.N)r=A.y
else if(s===t.y)r=A.U
else if(s===t.o)r=A.aI
else if(s===t.i)r=A.bZ
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
D1(a){var s=this
if(a==null)return A.fM(s)
return A.yR(v.typeUniverse,A.EE(a,s),s)},
D3(a){if(a==null)return!0
return this.x.b(a)},
Dm(a){var s,r=this
if(a==null)return A.fM(r)
s=r.f
if(a instanceof A.F)return!!a[s]
return!!J.e1(a)[s]},
Dh(a){var s,r=this
if(a==null)return A.fM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.F)return!!a[s]
return!!J.e1(a)[s]},
Dg(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.F)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
y9(a){if(typeof a=="object"){if(a instanceof A.F)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
D0(a){var s=this
if(a==null){if(A.fM(s))return a}else if(s.b(a))return a
throw A.aA(A.xZ(a,s),new Error())},
D2(a){var s=this
if(a==null||s.b(a))return a
throw A.aA(A.xZ(a,s),new Error())},
xZ(a,b){return new A.ft("TypeError: "+A.xn(a,A.bx(b,null)))},
Ej(a,b,c,d){if(A.yR(v.typeUniverse,a,b))return a
throw A.aA(A.BW("The type argument '"+A.bx(a,null)+"' is not a subtype of the type variable bound '"+A.bx(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
xn(a,b){return A.jc(a)+": type '"+A.bx(A.vV(a),null)+"' is not a subtype of type '"+b+"'"},
BW(a){return new A.ft("TypeError: "+a)},
ce(a,b){return new A.ft("TypeError: "+A.xn(a,b))},
De(a){var s=this
return s.x.b(a)||A.vb(v.typeUniverse,s).b(a)},
Dj(a){return a!=null},
fA(a){if(a!=null)return a
throw A.aA(A.ce(a,"Object"),new Error())},
Dn(a){return!0},
Cz(a){return a},
ya(a){return!1},
c_(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aA(A.ce(a,"bool"),new Error())},
Cy(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aA(A.ce(a,"bool?"),new Error())},
bZ(a){if(typeof a=="number")return a
throw A.aA(A.ce(a,"double"),new Error())},
xS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aA(A.ce(a,"double?"),new Error())},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
c(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aA(A.ce(a,"int"),new Error())},
xT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aA(A.ce(a,"int?"),new Error())},
Di(a){return typeof a=="number"},
aI(a){if(typeof a=="number")return a
throw A.aA(A.ce(a,"num"),new Error())},
vu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aA(A.ce(a,"num?"),new Error())},
Dl(a){return typeof a=="string"},
y(a){if(typeof a=="string")return a
throw A.aA(A.ce(a,"String"),new Error())},
aQ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aA(A.ce(a,"String?"),new Error())},
a(a){if(A.y9(a))return a
throw A.aA(A.ce(a,"JSObject"),new Error())},
k(a){if(a==null)return a
if(A.y9(a))return a
throw A.aA(A.ce(a,"JSObject?"),new Error())},
yv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bx(a[q],b)
return s},
DF(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.yv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bx(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
y1(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bx(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bx(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bx(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bx(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bx(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bx(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bx(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bx(a.x,b)+">"
if(l===8){p=A.DY(a.x)
o=a.y
return o.length>0?p+("<"+A.yv(o,b)+">"):p}if(l===10)return A.DF(a,b)
if(l===11)return A.y1(a,b,null)
if(l===12)return A.y1(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
DY(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
C4(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
C3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.rJ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ic(a,5,"#")
q=A.rO(s)
for(p=0;p<s;++p)q[p]=r
o=A.ib(a,b,q)
n[b]=o
return o}else return m},
C2(a,b){return A.xH(a.tR,b)},
C1(a,b){return A.xH(a.eT,b)},
rJ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xs(A.xq(a,null,b,!1))
r.set(b,s)
return s},
id(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xs(A.xq(a,b,c,!0))
q.set(c,r)
return r},
xz(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vn(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
dW(a,b){b.a=A.D8
b.b=A.D9
return b},
ic(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.co(null,null)
s.w=b
s.as=c
r=A.dW(a,s)
a.eC.set(c,r)
return r},
xx(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.C_(a,b,r,c)
a.eC.set(r,s)
return s},
C_(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eO(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.fM(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.co(null,null)
q.w=6
q.x=b
q.as=c
return A.dW(a,q)},
xw(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.BY(a,b,r,c)
a.eC.set(r,s)
return s},
BY(a,b,c,d){var s,r
if(d){s=b.w
if(A.eO(b)||b===t.K)return b
else if(s===1)return A.ib(a,"bO",[b])
else if(b===t.c||b===t.w)return t.gK}r=new A.co(null,null)
r.w=7
r.x=b
r.as=c
return A.dW(a,r)},
C0(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.co(null,null)
s.w=13
s.x=b
s.as=q
r=A.dW(a,s)
a.eC.set(q,r)
return r},
ia(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
BX(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ib(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ia(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.co(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dW(a,r)
a.eC.set(p,q)
return q},
vn(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ia(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.co(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dW(a,o)
a.eC.set(q,n)
return n},
xy(a,b,c){var s,r,q="+"+(b+"("+A.ia(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.co(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dW(a,s)
a.eC.set(q,r)
return r},
xv(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ia(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ia(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.BX(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.co(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dW(a,p)
a.eC.set(r,o)
return o},
vo(a,b,c,d){var s,r=b.as+("<"+A.ia(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.BZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
BZ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.rO(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eN(a,b,r,0)
m=A.fJ(a,c,r,0)
return A.vo(a,n,m,c!==m)}}l=new A.co(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dW(a,l)},
xq(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
xs(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.BP(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xr(a,r,l,k,!1)
else if(q===46)r=A.xr(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eI(a.u,a.e,k.pop()))
break
case 94:k.push(A.C0(a.u,k.pop()))
break
case 35:k.push(A.ic(a.u,5,"#"))
break
case 64:k.push(A.ic(a.u,2,"@"))
break
case 126:k.push(A.ic(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.BR(a,k)
break
case 38:A.BQ(a,k)
break
case 63:p=a.u
k.push(A.xx(p,A.eI(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.xw(p,A.eI(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.BO(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xt(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.BT(a.u,a.e,o)
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
return A.eI(a.u,a.e,m)},
BP(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xr(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.C4(s,o.x)[p]
if(n==null)A.i('No "'+p+'" in "'+A.B9(o)+'"')
d.push(A.id(s,o,n))}else d.push(p)
return m},
BR(a,b){var s,r=a.u,q=A.xp(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ib(r,p,q))
else{s=A.eI(r,a.e,p)
switch(s.w){case 11:b.push(A.vo(r,s,q,a.n))
break
default:b.push(A.vn(r,s,q))
break}}},
BO(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xp(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eI(p,a.e,o)
q=new A.kU()
q.a=s
q.b=n
q.c=m
b.push(A.xv(p,r,q))
return
case-4:b.push(A.xy(p,b.pop(),s))
return
default:throw A.d(A.iK("Unexpected state under `()`: "+A.w(o)))}},
BQ(a,b){var s=b.pop()
if(0===s){b.push(A.ic(a.u,1,"0&"))
return}if(1===s){b.push(A.ic(a.u,4,"1&"))
return}throw A.d(A.iK("Unexpected extended operation "+A.w(s)))},
xp(a,b){var s=b.splice(a.p)
A.xt(a.u,a.e,s)
a.p=b.pop()
return s},
eI(a,b,c){if(typeof c=="string")return A.ib(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.BS(a,b,c)}else return c},
xt(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eI(a,b,c[s])},
BT(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eI(a,b,c[s])},
BS(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.iK("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.iK("Bad index "+c+" for "+b.p(0)))},
yR(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aR(a,b,null,c,null)
r.set(c,s)}return s},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eO(d))return!0
s=b.w
if(s===4)return!0
if(A.eO(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aR(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aR(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aR(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aR(a,b.x,c,d,e))return!1
return A.aR(a,A.vb(a,b),c,d,e)}if(s===6)return A.aR(a,p,c,d,e)&&A.aR(a,b.x,c,d,e)
if(q===7){if(A.aR(a,b,c,d.x,e))return!0
return A.aR(a,b,c,A.vb(a,d),e)}if(q===6)return A.aR(a,b,c,p,e)||A.aR(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.D)return!0
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
if(!A.aR(a,j,c,i,e)||!A.aR(a,i,e,j,c))return!1}return A.y8(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.y8(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Df(a,b,c,d,e)}if(o&&q===10)return A.Dk(a,b,c,d,e)
return!1},
y8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Df(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.id(a,b,r[o])
return A.xQ(a,p,null,c,d.y,e)}return A.xQ(a,b.y,null,c,d.y,e)},
xQ(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aR(a,b[s],d,e[s],f))return!1
return!0},
Dk(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aR(a,r[s],c,q[s],e))return!1
return!0},
fM(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.eO(a))if(s!==6)r=s===7&&A.fM(a.x)
return r},
eO(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
xH(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
rO(a){return a>0?new Array(a):v.typeUniverse.sEA},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
kU:function kU(){this.c=this.b=this.a=null},
lm:function lm(a){this.a=a},
kS:function kS(){},
ft:function ft(a){this.a=a},
BH(){var s,r,q
if(self.scheduleImmediate!=null)return A.Eb()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fL(new A.r5(s),1)).observe(r,{childList:true})
return new A.r4(s,r,q)}else if(self.setImmediate!=null)return A.Ec()
return A.Ed()},
BI(a){self.scheduleImmediate(A.fL(new A.r6(t.O.a(a)),0))},
BJ(a){self.setImmediate(A.fL(new A.r7(t.O.a(a)),0))},
BK(a){A.vf(B.e_,t.O.a(a))},
vf(a,b){return A.BV(a.a/1000|0,b)},
BV(a,b){var s=new A.rH()
s.ki(a,b)
return s},
bv(a){return new A.kI(new A.at($.an,a.i("at<0>")),a.i("kI<0>"))},
bt(a,b){a.$2(0,null)
b.b=!0
return b.a},
am(a,b){A.CB(a,b)},
bs(a,b){b.dF(a)},
br(a,b){b.dG(A.ae(a),A.cr(a))},
CB(a,b){var s,r,q=new A.rX(b),p=new A.rY(b)
if(a instanceof A.at)a.h3(q,p,t.z)
else{s=t.z
if(a instanceof A.at)a.eG(q,p,s)
else{r=new A.at($.an,t.j_)
r.a=8
r.c=a
r.h3(q,p,s)}}},
by(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.an.j1(new A.u4(s),t.H,t.S,t.z)},
xu(a,b,c){return 0},
m5(a){var s
if(t.W.b(a)){s=a.gbM()
if(s!=null)return s}return B.aj},
uX(a){var s
a.a(null)
s=new A.at($.an,a.i("at<0>"))
s.da(null)
return s},
Ao(a,b,c){var s=new A.at($.an,c.i("at<0>"))
A.Bk(a,new A.no(b,s,c))
return s},
np(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.at($.an,b.i("at<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.nr(i,h,g,f)
try{for(n=J.T(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eG(new A.nq(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cm(A.e([],b.i("u<0>")))
return n}i.a=A.cG(n,null,!1,b.i("0?"))}catch(l){p=A.ae(l)
o=A.cr(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.vG(m,k)
m=new A.aY(m,k==null?A.m5(m):k)
n.ci(m)
return n}else{i.d=p
i.c=o}}return f},
vG(a,b){if($.an===B.v)return null
return null},
Db(a,b){if($.an!==B.v)A.vG(a,b)
if(b==null)if(t.W.b(a)){b=a.gbM()
if(b==null){A.wX(a,B.aj)
b=B.aj}}else b=B.aj
else if(t.W.b(a))A.wX(a,b)
return new A.aY(a,b)},
rg(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Bg()
b.ci(new A.aY(new A.ci(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fI(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bP()
b.cl(o.a)
A.eD(b,p)
return}b.a^=2
A.lH(null,null,b.b,t.O.a(new A.rh(o,b)))},
eD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.vP(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eD(d.a,c)
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
A.vP(j.a,j.b)
return}g=$.an
if(g!==h)$.an=h
else g=null
c=c.c
if((c&15)===8)new A.rl(q,d,n).$0()
else if(o){if((c&1)!==0)new A.rk(q,j).$0()}else if((c&2)!==0)new A.rj(d,q).$0()
if(g!=null)$.an=g
c=q.c
if(c instanceof A.at){p=q.a.$ti
p=p.i("bO<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.ct(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.rg(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.ct(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
DG(a,b){var s
if(t.ng.b(a))return b.j1(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.ao(a,"onError",u.c))},
Dw(){var s,r
for(s=$.fF;s!=null;s=$.fF){$.iz=null
r=s.b
$.fF=r
if(r==null)$.iy=null
s.a.$0()}},
DT(){$.vH=!0
try{A.Dw()}finally{$.iz=null
$.vH=!1
if($.fF!=null)$.wc().$1(A.yH())}},
yz(a){var s=new A.kJ(a),r=$.iy
if(r==null){$.fF=$.iy=s
if(!$.vH)$.wc().$1(A.yH())}else $.iy=r.b=s},
DN(a){var s,r,q,p=$.fF
if(p==null){A.yz(a)
$.iz=$.iy
return}s=new A.kJ(a)
r=$.iz
if(r==null){s.b=p
$.fF=$.iz=s}else{q=r.b
s.b=q
$.iz=r.b=s
if(q==null)$.iy=s}},
Fj(a,b){A.e0(a,"stream",t.K)
return new A.lj(b.i("lj<0>"))},
Bk(a,b){var s=$.an
if(s===B.v)return A.vf(a,t.O.a(b))
return A.vf(a,t.O.a(s.he(b)))},
vP(a,b){A.DN(new A.tV(a,b))},
yu(a,b,c,d,e){var s,r=$.an
if(r===c)return d.$0()
$.an=c
s=r
try{r=d.$0()
return r}finally{$.an=s}},
DL(a,b,c,d,e,f,g){var s,r=$.an
if(r===c)return d.$1(e)
$.an=c
s=r
try{r=d.$1(e)
return r}finally{$.an=s}},
DK(a,b,c,d,e,f,g,h,i){var s,r=$.an
if(r===c)return d.$2(e,f)
$.an=c
s=r
try{r=d.$2(e,f)
return r}finally{$.an=s}},
lH(a,b,c,d){t.O.a(d)
if(B.v!==c){d=c.he(d)
d=d}A.yz(d)},
r5:function r5(a){this.a=a},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
rH:function rH(){},
rI:function rI(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.a=a
this.b=!1
this.$ti=b},
rX:function rX(a){this.a=a},
rY:function rY(a){this.a=a},
u4:function u4(a){this.a=a},
cq:function cq(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cd:function cd(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b){this.a=a
this.b=b},
no:function no(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nq:function nq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kM:function kM(){},
hO:function hO(a,b){this.a=a
this.$ti=b},
eC:function eC(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
at:function at(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rd:function rd(a,b){this.a=a
this.b=b},
ri:function ri(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
rf:function rf(a,b){this.a=a
this.b=b},
re:function re(a,b){this.a=a
this.b=b},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(a){this.a=a},
rk:function rk(a,b){this.a=a
this.b=b},
rj:function rj(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a
this.b=null},
lj:function lj(a){this.$ti=a},
il:function il(){},
la:function la(){},
rF:function rF(a,b){this.a=a
this.b=b},
tV:function tV(a,b){this.a=a
this.b=b},
xo(a,b){var s=a[b]
return s===a?null:s},
vl(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vk(){var s=Object.create(null)
A.vl(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
wP(a,b){return new A.c6(a.i("@<0>").I(b).i("c6<1,2>"))},
P(a,b,c){return b.i("@<0>").I(c).i("v0<1,2>").a(A.yJ(a,new A.c6(b.i("@<0>").I(c).i("c6<1,2>"))))},
o(a,b){return new A.c6(a.i("@<0>").I(b).i("c6<1,2>"))},
v1(a){return new A.cc(a.i("cc<0>"))},
a5(a){return new A.cc(a.i("cc<0>"))},
aE(a,b){return b.i("wQ<0>").a(A.Ew(a,new A.cc(b.i("cc<0>"))))},
vm(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
l0(a,b,c){var s=new A.eH(a,b,c.i("eH<0>"))
s.c=a.e
return s},
cF(a,b){var s=J.T(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.wP(b,c)
a.aq(0,new A.oC(s,b,c))
return s},
fa(a,b,c){var s=A.wP(b,c)
s.J(0,a)
return s},
jK(a,b){var s,r,q=A.v1(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.l(0,b.a(a[r]))
return q},
oD(a,b){var s=A.v1(b)
s.J(0,a)
return s},
AI(a,b){var s=t.bP
return J.wi(s.a(a),s.a(b))},
v2(a){var s,r
if(A.w3(a))return"{...}"
s=new A.bc("")
try{r={}
B.a.l($.c1,a)
s.a+="{"
r.a=!0
a.aq(0,new A.oF(r,s))
s.a+="}"}finally{if(0>=$.c1.length)return A.f($.c1,-1)
$.c1.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
C5(){throw A.d(A.aW("Cannot change an unmodifiable set"))},
hV:function hV(){},
rp:function rp(a){this.a=a},
hX:function hX(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eE:function eE(a,b){this.a=a
this.$ti=b},
hW:function hW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cc:function cc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
l_:function l_(a){this.a=a
this.c=this.b=null},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
oC:function oC(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a6:function a6(){},
oE:function oE(a){this.a=a},
oF:function oF(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.$ti=b},
hZ:function hZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ie:function ie(){},
fb:function fb(){},
dP:function dP(a,b){this.a=a
this.$ti=b},
dh:function dh(){},
i8:function i8(){},
ln:function ln(){},
hH:function hH(a,b){this.a=a
this.$ti=b},
fu:function fu(){},
ig:function ig(){},
Dz(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ae(r)
q=A.a8(String(s),null,null)
throw A.d(q)}q=A.tk(p)
return q},
tk(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.kY(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tk(a[s])
return a},
Cm(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.zk()
else s=new Uint8Array(o)
for(r=J.aK(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Cl(a,b,c,d){var s=a?$.zj():$.zi()
if(s==null)return null
if(0===c&&d===b.length)return A.xG(s,b)
return A.xG(s,b.subarray(c,d))},
xG(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
wl(a,b,c,d,e,f){if(B.c.O(f,4)!==0)throw A.d(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
wM(a,b,c){return new A.hc(a,b)},
CP(a){return a.B()},
BL(a,b){return new A.rs(a,[],A.En())},
BM(a,b,c){var s,r=new A.bc(""),q=A.BL(r,b)
q.cX(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Cn(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
kY:function kY(a,b){this.a=a
this.b=b
this.c=null},
rr:function rr(a){this.a=a},
kZ:function kZ(a){this.a=a},
rN:function rN(){},
rM:function rM(){},
iN:function iN(){},
my:function my(){},
e7:function e7(){},
j1:function j1(){},
jb:function jb(){},
hc:function hc(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(){},
ov:function ov(a){this.b=a},
ou:function ou(a){this.a=a},
rt:function rt(){},
ru:function ru(a,b){this.a=a
this.b=b},
rs:function rs(a,b,c){this.c=a
this.a=b
this.b=c},
ku:function ku(){},
qJ:function qJ(a){this.a=a},
rL:function rL(a){this.a=a
this.b=16
this.c=0},
yQ(a){var s=A.fe(a,null)
if(s!=null)return s
throw A.d(A.a8(a,null,null))},
Ai(a,b){a=A.aA(a,new Error())
if(a==null)a=A.fA(a)
a.stack=b.p(0)
throw a},
cG(a,b,c,d){var s,r=c?J.wG(a,d):J.wF(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aq(a,b,c){var s,r=A.e([],c.i("u<0>"))
for(s=J.T(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("u<0>"))
s=A.e([],b.i("u<0>"))
for(r=J.T(a);r.m();)B.a.l(s,r.gn())
return s},
al(a,b){var s=A.aq(a,!1,b)
s.$flags=3
return s},
x6(a,b,c){var s,r
A.k8(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aT(c,b,null,"end",null))
if(s===0)return""}r=A.Bi(a,b,c)
return r},
Bi(a,b,c){var s=a.length
if(b>=s)return""
return A.B2(a,b,c==null||c>s?s:c)},
B3(a){return new A.jF(a,A.AF(a,!1,!0,!1,!1,""))},
ve(a,b,c){var s=J.T(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
dQ(){var s,r,q=A.AS()
if(q==null)throw A.d(A.aW("'Uri.base' is not supported"))
s=$.xc
if(s!=null&&q===$.xb)return s
r=A.Bq(q)
$.xc=r
$.xb=q
return r},
Bg(){return A.cr(new Error())},
zZ(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ws(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
j3(a){if(a>=10)return""+a
return"0"+a},
Ah(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.ao(b,"name","No enum value with that name"))},
jc(a){if(typeof a=="number"||A.c_(a)||a==null)return J.d1(a)
if(typeof a=="string")return JSON.stringify(a)
return A.wW(a)},
Aj(a,b){A.e0(a,"error",t.K)
A.e0(b,"stackTrace",t.l)
A.Ai(a,b)},
iK(a){return new A.iJ(a)},
x(a,b){return new A.ci(!1,null,b,a)},
ao(a,b,c){return new A.ci(!0,a,b,c)},
wY(a){var s=null
return new A.ff(s,s,!1,s,s,a)},
wZ(a,b){return new A.ff(null,null,!0,a,b,"Value not in range")},
aT(a,b,c,d,e){return new A.ff(b,c,!0,a,d,"Invalid value")},
hq(a,b,c){if(0>a||a>c)throw A.d(A.aT(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aT(b,a,c,"end",null))
return b}return c},
k8(a,b){if(a<0)throw A.d(A.aT(a,0,null,b,null))
return a},
oc(a,b,c,d){return new A.jx(b,!0,a,d,"Index out of range")},
aW(a){return new A.hI(a)},
x9(a){return new A.kp(a)},
m(a){return new A.fj(a)},
aw(a){return new A.iY(a)},
f6(a){return new A.rb(a)},
a8(a,b,c){return new A.H(a,b,c)},
AB(a,b,c){var s,r
if(A.w3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c1,a)
try{A.Do(a,s)}finally{if(0>=$.c1.length)return A.f($.c1,-1)
$.c1.pop()}r=A.ve(b,t.fg.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
uY(a,b,c){var s,r
if(A.w3(a))return b+"..."+c
s=new A.bc(b)
B.a.l($.c1,a)
try{r=s
r.a=A.ve(r.a,a,", ")}finally{if(0>=$.c1.length)return A.f($.c1,-1)
$.c1.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Do(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
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
v3(a,b,c){var s=A.o(b,c)
s.lR(a)
return s},
cn(a,b,c,d,e,f){var s
if(B.f===c){s=J.av(a)
b=J.av(b)
return A.hF(A.aP(A.aP($.fN(),s),b))}if(B.f===d){s=J.av(a)
b=J.av(b)
c=J.av(c)
return A.hF(A.aP(A.aP(A.aP($.fN(),s),b),c))}if(B.f===e){s=J.av(a)
b=J.av(b)
c=J.av(c)
d=J.av(d)
return A.hF(A.aP(A.aP(A.aP(A.aP($.fN(),s),b),c),d))}if(B.f===f){s=J.av(a)
b=J.av(b)
c=J.av(c)
d=J.av(d)
e=J.av(e)
return A.hF(A.aP(A.aP(A.aP(A.aP(A.aP($.fN(),s),b),c),d),e))}s=J.av(a)
b=J.av(b)
c=J.av(c)
d=J.av(d)
e=J.av(e)
f=J.av(f)
f=A.hF(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.fN(),s),b),c),d),e),f))
return f},
AQ(a){var s,r,q=$.fN()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.aP(q,J.av(a[r]))
return A.hF(q)},
vc(a,b){return new A.hH(A.oD(a,b),b.i("hH<0>"))},
Bq(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.xa(a4<a4?B.b.E(a5,0,a4):a5,5,a3).gj8()
else if(s===32)return A.xa(B.b.E(a5,5,a4),0,a3).gj8()}r=A.cG(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.yy(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.yy(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a9(a5,"\\",n))if(p>0)h=B.b.a9(a5,"\\",p-1)||B.b.a9(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a9(a5,"..",n)))h=m>n+2&&B.b.a9(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a9(a5,"file",0)){if(p<=0){if(!B.b.a9(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.E(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bJ(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a9(a5,"http",0)){if(i&&o+3===n&&B.b.a9(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a9(a5,"https",0)){if(i&&o+4===n&&B.b.a9(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.le(a4<a5.length?B.b.E(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Cf(a5,0,q)
else{if(q===0)A.fv(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Cg(a5,c,p-1):""
a=A.Cb(a5,p,o,!1)
i=o+1
if(i<n){a0=A.fe(B.b.E(a5,i,n),a3)
d=A.Cd(a0==null?A.i(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Cc(a5,n,m,a3,j,a!=null)
a2=m<l?A.Ce(a5,m+1,l,a3):a3
return A.C6(j,b,a,d,a1,a2,l<a4?A.Ca(a5,l+1,a4):a3)},
xe(a){var s=t.N
return B.a.bB(A.e(a.split("&"),t.s),A.o(s,s),new A.qI(B.bE),t.G)},
kt(a,b,c){throw A.d(A.a8("Illegal IPv4 address, "+a,b,c))},
Bn(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kt("each part must be in the range 0..255",a,r)}A.kt("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kt(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bz(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kt(j,a,q)
p=l}A.kt("IPv4 address should contain exactly 4 parts",a,q)},
Bo(a,b,c){var s
if(b===c)throw A.d(A.a8("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.Bp(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.xd(a,b,c)
return!0},
Bp(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
xd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.qH(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Bn(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.dA(l,8)
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
B.cz.jx(s,a0,16,s,a)
B.cz.n7(s,a,a0,0)}}return s},
C6(a,b,c,d,e,f,g){return new A.ih(a,b,c,d,e,f,g)},
xA(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fv(a,b,c){throw A.d(A.a8(c,a,b))},
Cd(a,b){var s=A.xA(b)
if(a===s)return null
return a},
Cb(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fv(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.C8(a,q,r)
if(o<r){n=o+1
p=A.xF(a,B.b.a9(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Bo(a,q,o)
l=B.b.E(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.cN(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.xF(a,B.b.a9(a,"25",n)?o+3:n,c,"%25")}else p=""
A.xd(a,b,o)
return"["+B.b.E(a,b,o)+p+"]"}}return A.Ci(a,b,c)},
C8(a,b,c){var s=B.b.cN(a,"%",b)
return s>=b&&s<c?s:c},
xF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bc(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.vq(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bc("")
l=h.a+=B.b.E(a,q,r)
if(m)n=B.b.E(a,r,r+3)
else if(n==="%")A.fv(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bc("")
if(q<r){h.a+=B.b.E(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.E(a,q,r)
if(h==null){h=new A.bc("")
m=h}else m=h
m.a+=i
l=A.vp(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.E(a,b,c)
if(q<c){i=B.b.E(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Ci(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.vq(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bc("")
k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.E(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bc("")
if(q<r){p.a+=B.b.E(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fv(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bc("")
l=p}else l=p
l.a+=k
j=A.vp(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.E(a,b,c)
if(q<c){k=B.b.E(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Cf(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.xC(a.charCodeAt(b)))A.fv(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fv(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.E(a,b,c)
return A.C7(q?a.toLowerCase():a)},
C7(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Cg(a,b,c){return A.ii(a,b,c,16,!1,!1)},
Cc(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.ii(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.Ch(q,e,f)},
Ch(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.Cj(a,!s||c)
return A.Ck(a)},
Ce(a,b,c,d){return A.ii(a,b,c,256,!0,!1)},
Ca(a,b,c){return A.ii(a,b,c,256,!0,!1)},
vq(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.ud(r)
o=A.ud(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.as(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.E(a,b,b+3).toUpperCase()
return null},
vp(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.lA(a,6*p)&63|q
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
o+=3}}return A.x6(s,0,null)},
ii(a,b,c,d,e,f){var s=A.xE(a,b,c,d,e,f)
return s==null?B.b.E(a,b,c):s},
xE(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.vq(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fv(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.vp(n)}if(o==null){o=new A.bc("")
k=o}else k=o
k.a=(k.a+=B.b.E(a,p,q))+l
if(typeof m!=="number")return A.lL(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.E(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
xD(a){if(B.b.W(a,"."))return!0
return B.b.c1(a,"/.")!==-1},
Ck(a){var s,r,q,p,o,n,m
if(!A.xD(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.ab(s,"/")},
Cj(a,b){var s,r,q,p,o,n
if(!A.xD(a))return!b?A.xB(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gU(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.xB(s[0]))}return B.a.ab(s,"/")},
xB(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.xC(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.E(a,0,s)+"%3A"+B.b.bp(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
C9(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.x("Invalid URL encoding",null))}}return r},
vr(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.bE===d)return B.b.E(a,b,c)
else p=new A.dz(B.b.E(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.x("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.x("Truncated URI",null))
B.a.l(p,A.C9(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.kw.mm(p)},
xC(a){var s=a|32
return 97<=s&&s<=122},
xa(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a8(k,a,r))}}if(q<0&&r>b)throw A.d(A.a8(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gU(j)
if(p!==44||r!==n+7||!B.b.a9(a,"base64",n+1))throw A.d(A.a8("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.dC.ny(a,m,s)
else{l=A.xE(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bJ(a,m,s,l)}return new A.qG(a,j,c)},
yy(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a},
kR:function kR(){},
ak:function ak(){},
iJ:function iJ(a){this.a=a},
dk:function dk(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jx:function jx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hI:function hI(a){this.a=a},
kp:function kp(a){this.a=a},
fj:function fj(a){this.a=a},
iY:function iY(a){this.a=a},
jZ:function jZ(){},
hB:function hB(){},
rb:function rb(a){this.a=a},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(){},
F:function F(){},
lk:function lk(){},
qq:function qq(){this.b=this.a=0},
bc:function bc(a){this.a=a},
qI:function qI(a){this.a=a},
qH:function qH(a){this.a=a},
ih:function ih(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
oU:function oU(a){this.a=a},
y2(a){var s
if(typeof a=="function")throw A.d(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.CE,a)
s[$.cg()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.d(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ds,a)
s[$.cg()]=a
return s},
CE(a){return t.D.a(a).$0()},
ds(a,b,c){t.D.a(a)
if(A.c(c)>=1)return a.$1(b)
return a.$0()},
w1(a,b,c){return c.a(a[b])},
y3(a,b){return a[b]},
ai(a,b,c,d){return d.a(a[b].apply(a,c))},
xV(a,b,c,d){return d.a(a[b](c))},
aX(a,b){var s=new A.at($.an,b.i("at<0>")),r=new A.hO(s,b.i("hO<0>"))
a.then(A.fL(new A.uH(r,b),1),A.fL(new A.uI(r),1))
return s},
ye(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
d_(a){if(A.ye(a))return a
return new A.u8(new A.hX(t.mp)).$1(a)},
uH:function uH(a,b){this.a=a
this.b=b},
uI:function uI(a){this.a=a},
u8:function u8(a){this.a=a},
kX:function kX(){},
fo:function fo(){this.b=this.a=0},
pi:function pi(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
pj:function pj(){},
eq:function eq(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
mG:function mG(a,b){this.a=a
this.b=b},
mH:function mH(){this.a=null
this.d=0},
k3:function k3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
eZ:function eZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ji:function ji(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
nj:function nj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dF(a,b){return new A.jt(a,b)},
dg:function dg(){},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
EU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.gf)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.i6(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.S(f,new A.uJ())
s=A.e([],t.bH)
for(r=A.hE(f,0,A.e0(b,"count",t.S),t.jX),q=r.$ti,r=new A.aS(r,r.gt(0),q.i("aS<a3.E>")),q=q.i("a3.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bn:function bn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uJ:function uJ(){},
jN(a,b,c,d,e,f,g,h,i){return new A.em(c,a,g,f,e,h,i,b,!0)},
v5(a,b){var s
if(isFinite(b))s=b>1
else s=!0
if(s)throw A.d(A.x("MaterialDefinition."+a+" must be in [0, 1]: "+b,null))},
iI:function iI(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ay=f
_.ch=g
_.dx=h
_.dy=i},
AK(a){A:{break A}return a},
cR:function cR(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(){},
qL:function qL(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oJ:function oJ(){},
oK:function oK(){},
oL:function oL(){},
oX(a){var s,r=t.N,q=A.aE(["sceneColor","present"],r),p=a.a.b
if(p.u(0,"shadows"))q.J(0,A.aE(["shadowMap","sceneDepth"],r))
if(p.u(0,"ssao"))q.J(0,A.aE(["ssaoRaw","ssaoBlurred"],r))
if(p.u(0,"bloom"))q.J(0,A.aE(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.u(0,"dof"))q.J(0,A.aE(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.u(0,"grade"))q.l(0,"gradeOutput")
if(p.u(0,"ps1"))q.l(0,"ps1Output")
s=p.u(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.oW(A.vc(q,r),s)},
oW:function oW(a,b){this.a=a
this.b=b},
oY:function oY(){},
pb:function pb(a){this.b=a},
kb:function kb(){this.a=null
this.c=0
this.d=!1},
f3:function f3(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d,e,f,g,h,i,j){var _=this
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
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
et:function et(a,b){this.a=a
this.b=b},
aD:function aD(a,b,c){this.a=a
this.b=b
this.d=c},
nl:function nl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
AJ(){return new A.jO(new A.cL(new A.oH(),A.e([],t.dz),A.e([],t.t),t.kk))},
jO:function jO(a){this.a=a},
oH:function oH(){},
yB(a){var s=4
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
case 3:s=A.i(A.aW("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
CK(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.R[r]
if(A.yB(q.a)===b)s+=q.c}return s},
AL(a){return new A.oM(a,new A.cL(new A.oN(),A.e([],t.jl),A.e([],t.t),t.ll),A.o(t.S,t.mL))},
wT(a){var s
A:{s=a.byteLength
break A}return s},
kr:function kr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(){},
oO:function oO(){},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
qA:function qA(a){this.a=a},
qx:function qx(a,b){this.a=a
this.b=b},
qy:function qy(){},
Bj(a){var s=new A.kn(a,new A.cL(new A.qB(),A.e([],t.mQ),A.e([],t.t),t.ox),A.o(t.S,t._))
s.d=s.aM($.wa())
s.e=s.aM($.w7())
s.f=s.aM($.w8())
s.r=s.aM($.w6())
s.w=s.aM($.w9())
return s},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
qB:function qB(){},
qD:function qD(){},
qC:function qC(){},
Ee(a){var s,r,q,p,o=A.e([],t.og)
for(s=a.length,r=t.ix,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
p.gC()
B.a.l(o,new A.eh(p,A.e([p],r)))
continue}return o},
eh:function eh(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a},
ne:function ne(){},
nf:function nf(a){this.a=a},
nc:function nc(a){this.a=a},
nd:function nd(a){this.a=a},
jh:function jh(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
nk:function nk(a,b){this.a=a
this.b=b
this.c=0},
BN(){return new A.fn()},
ni:function ni(a){this.a=a
this.b=null},
fn:function fn(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
v6(){return!0},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
p_:function p_(){},
p0:function p0(){},
c5:function c5(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fg:function fg(a,b){this.a=a
this.b=b},
M:function M(a,b){this.a=a
this.b=b},
fV:function fV(a){this.b=a},
pg:function pg(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bb:function bb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pk:function pk(){},
b1:function b1(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pm:function pm(a,b){this.a=a
this.b=b},
pr:function pr(){},
pq:function pq(){},
pp:function pp(){},
po:function po(a){this.a=a},
pn:function pn(a,b,c){this.a=a
this.b=b
this.c=c},
pl:function pl(a,b){this.a=a
this.b=b},
B7(a){return new A.hr(a,new A.cL(new A.pt(),A.e([],t.n_),A.e([],t.t),t.mo))},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b){this.a=a
this.b=b},
pt:function pt(){},
y_(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.CU(a,r,s,a.x.gn().a.b.a).b},
CU(a,b,c,d){var s,r,q,p,o,n=new A.tA(a),m=new A.tB(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.u(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.Ei(b,k,B.aI,l,s.go9(),new A.tl(m),new A.tm(m),new A.tn(a),new A.ts(a),new A.tt(a),new A.tu(m),new A.tv(m),s.gob(),new A.tw(a),s.gof(),r.god(),n,s.goh(),s.goj(),new A.tx(m,c),new A.ty(m),new A.tz(m),new A.to(m),new A.tp(m),new A.tq(a),new A.tr(m),1,i,j,512)}else{p=new A.aN("sceneColor",B.q,j,i,1,0)
n=A.e([new A.kG(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.o5)
n.push(new A.hn(b,u.l,u.B,k,p,B.aI))
q=new A.jg(n)}a.r.toString
o=q.m7(B.M,new A.pk(),!1,new A.l7())
n=o.a.b
if(n.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.w(n)))
return new A.rG(q,o)},
CV(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.K(b7.giL(),t.os)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a1(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.a7()
p=p.gaz()
n=A.I(p)
B.a.l(s,new A.ll(new A.cC((r|1073741824)>>>0,0,"transient"),q,A.bi(new A.S(p,n.i("L(1)").a(o.gaC()),n.i("S<1,L>")))))}p=b8.a
m=A.Ep(A.An(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gC().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dF(B.as,n))
j=j.b
g=j.$ti
j.a1(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.c.T(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gC().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dF(B.as,n))
j=j.b
g=j.$ti
j.a1(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.c.T(n>0?n:h.e,3)}o=t.N
n=A.o(o,t.a1)
e=new A.ni(n)
e.m3("cull")
j=l-f
d=e.b
if(d==null)A.i(A.m("cull recorded outside an active frame"))
if(j<0)A.i(A.x("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.mX)
a=A.e([],t.ao)
for(i=s.length,g=t.bz,a0=p.a,a1=t.eU,k=0;k<s.length;s.length===i||(0,A.r)(s),++k){a2=s[k]
if(a2.gC().e===B.aJ)B.a.l(a,new A.aO(new A.bB(a0.j6(a2.gC().c.a).c,a2.ga3().a),a2,a1))
else B.a.l(b,new A.aO(new A.bE(B.j_,a2.gC().b,a2.gC().a,a2.ga3().a),a2,g))}a3=new A.kT(A.Ee(A.EW(b)),A.EV(a),p,b8.b,b8.c)
a4=new A.j6(b6.a,e)
for(s=b4.b,p=s.length,i=t.kp,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gC().a
if(g.length===0)A.i(A.ao(g,"passId",null))
e.b=g
n.c8(g,A.yK())
a6=A.o(o,i)
for(g=a5.gC().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.i(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.i(A.m("resource is not in candidate: "+b1))
b3=new A.eY(b2)
a6.k(0,b0+"#"+a1,b3)
a6.c8(b0,new A.tC(b3))}a5.ag(new A.iR(a6,a4,a3))}return new A.rc(e,m,j)},
x3(a){return new A.pI(a,new A.mG(new A.mH(),new A.kb()),new A.nk(A.e([],t.c8),B.f9),A.e([],t.oZ),B.b5,A.e([],t.is),null)},
pC:function pC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=!1},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c},
tA:function tA(a){this.a=a},
tB:function tB(a,b){this.a=a
this.b=b},
tz:function tz(a){this.a=a},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
ty:function ty(a){this.a=a},
tn:function tn(a){this.a=a},
tp:function tp(a){this.a=a},
to:function to(a){this.a=a},
tx:function tx(a,b){this.a=a
this.b=b},
tl:function tl(a){this.a=a},
tm:function tm(a){this.a=a},
tu:function tu(a){this.a=a},
tv:function tv(a){this.a=a},
tw:function tw(a){this.a=a},
tr:function tr(a){this.a=a},
tq:function tq(a){this.a=a},
tC:function tC(a){this.a=a},
rG:function rG(a,b){this.a=a
this.b=b},
l7:function l7(){},
kT:function kT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pI:function pI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
pJ:function pJ(){},
pK:function pK(){},
pL:function pL(){},
l5:function l5(a){this.b=a},
ro:function ro(){},
lb:function lb(){},
hA:function hA(a,b){this.a=a
this.b=b},
EW(a){var s,r,q=A.K(a,t.bz)
B.a.S(q,new A.uO())
s=A.I(q)
r=s.i("S<1,bR>")
s=A.K(new A.S(q,s.i("bR(1)").a(new A.uP()),r),r.i("a3.E"))
s.$flags=1
return s},
EV(a){var s,r,q=A.K(a,t.eU)
B.a.S(q,new A.uM())
s=A.I(q)
r=s.i("S<1,bR>")
s=A.K(new A.S(q,s.i("bR(1)").a(new A.uN()),r),r.i("a3.E"))
s.$flags=1
return s},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
uO:function uO(){},
uP:function uP(){},
uM:function uM(){},
uN:function uN(){},
Ep(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.ix)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gC().d&c)>>>0===0){++q
continue}n=o.geO()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.x("cullItems: non-finite world bounds for instance "+o.ga3().p(0),null))
if(a.os(o.geO())===B.bS){++q
continue}B.a.l(l,o)}return new A.mU(l,new A.mV(q))},
mV:function mV(a){this.b=a},
mU:function mU(a,b){this.a=a
this.b=b},
bi(a){var s,r,q,p,o,n,m,l,k
for(s=J.T(a),r=B.kz,q=B.kA,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.L(m,k,Math.min(r.c,o))
q=new A.L(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.x("Aabb.fromPoints requires at least one point",null))
return new A.iG(r,q)},
iG:function iG(a,b){this.a=a
this.b=b},
An(a){var s,r,q,p,o,n,m=a.a,l=new A.nn(),k=m.length
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
return new A.nm(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
eo:function eo(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
nm:function nm(a){this.a=a},
nn:function nn(){},
wR(a){if(a.length!==16)throw A.d(A.x("Mat4.fromColumnMajor requires 16 values",null))
return new A.de(new Float32Array(A.a0(a)))},
v4(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.de(q)},
wS(a,b,c){var s=b.gac(),r=s.bg(c).gac(),q=r.bg(s),p=new Float32Array(16)
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
p[12]=-r.bX(a)
p[13]=-q.bX(a)
p[14]=s.bX(a)
p[15]=1
return new A.de(p)},
de:function de(a){this.a=a},
oG:function oG(){},
k7:function k7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
kK:function kK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iQ:function iQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kL:function kL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
kO:function kO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hS:function hS(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
kP:function kP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j9:function j9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
kQ:function kQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
kV:function kV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.b=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
bj(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aN(a.a,a.b,b,c,s,r)},
v7:function v7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
l8:function l8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k6:function k6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l9:function l9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x5(a){var s=a.c,r=Math.abs(s.a)<0.99?B.ky:B.Y,q=A.wS(a.b,s,r)
return new A.ew(A.v4(1,a.f,B.d.N(a.w*2,0.1,3),0.05).a4(0,q))},
ew:function ew(a){this.a=a},
ke:function ke(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lc:function lc(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Ei(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.u(0,"shadows"))throw A.d(A.ao(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.u(0,"ssao")
r=b6.u(0,"bloom")
q=b6.u(0,"dof")
p=b6.u(0,"grade")
o=b6.u(0,"ps1")
n=b6.u(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bj(B.b7,e5,e4,e3,a8)
k=A.bj(B.b7.iQ(),e5,e4,a8,a8)
A.bj(B.jG,e5,e4,a8,a8)
j=A.bj(B.jD,e5,e4,a8,a8)
i=A.bj(B.jy,e6,e6,a8,a8)
h=A.bj(B.jz,b6,m,a8,a8)
g=A.bj(B.jA,b6,m,a8,a8)
f=A.bj(B.jE,b6,m,a8,a8)
e=A.bj(B.jF,b6,m,a8,a8)
d=$.z4()
c=e3>1
b=A.bj(d,e5,e4,a8,c?2:1)
d=A.bj(B.jv,b6,m,a8,a8)
a=A.bj(B.jw,b6,m,a8,a8)
a0=A.bj(B.jx,e5,e4,a8,a8)
a1=A.bj(B.jB,e5,e4,a8,a8)
a2=A.bj(B.jH,e5,e4,a8,a8)
a3=A.bj(B.jC,e5,e4,a8,a8)
a4=c?new A.jQ(b8,l,k):a8
b5.a=null
a5=A.x5(B.kc)
a6=t.o5
a7=A.e([],a6)
k=c?k:l
if(r){B.a.J(a7,A.e([new A.fT(b7,a9,b0,b8,b1,b1,B.dd,!0,k,f,d6,b6,m),new A.fT(b7,a9,b0,b8,b2,b2,B.le,!1,f,e,c2,b6,m),new A.iQ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.J(a7,A.e([new A.fY(b7,a9,b0,b8,b3,b3,B.de,k,d,d6,b6,m),new A.fY(b7,a9,b0,b8,b4,b4,B.lf,d,a,c7,b6,m),new A.j9(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jq(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.k6(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kv(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.j5(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.ki(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kh(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.ke(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.u5(b5),i))
j.push(new A.kf(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.u6(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.J(j,a7)
j.push(new A.hn(b7,a9,u.B,b8,k,b9))
return new A.jg(j)},
u5:function u5(a){this.a=a},
u6:function u6(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
ld:function ld(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ki:function ki(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lh:function lh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kh:function kh(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lg:function lg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kv:function kv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lo:function lo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kG:function kG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mE:function mE(){},
kd(a,b){return new A.hz(a,b)},
jm:function jm(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ee:function ee(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h5:function h5(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
z:function z(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
nC:function nC(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
nD:function nD(){},
nE:function nE(){},
fr:function fr(a,b){this.a=a
this.b=b},
dV:function dV(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
wu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.f4(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
iO:function iO(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b2:function b2(a,b){this.a=a
this.b=b},
r1:function r1(){this.a=null},
Bv(a){var s=new A.kE(a,B.h,new A.r1(),A.BG(a))
s.kh(a)
return s},
BG(a){var s,r,q=t.hH.a(a.getSupportedExtensions())
if(q==null)return A.a5(t.N)
s=A.a5(t.N)
r=J.T(t.a.b(q)?q:new A.bM(q,A.I(q).i("bM<1,j>")))
while(r.m())s.l(0,r.gn())
return s},
bW(a,b){var s,r
if(a.b!==B.h)A.i(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.c(s.drawingBufferWidth),A.c(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
BB(a,b){var s
if(a.b!==B.h)A.i(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.c(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.x("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
BA(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Bz(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
By(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
xh(a,b){var s
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
Bw(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bf(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=a.f
r=s.mR(b)
if(r.a===0)return
if(r.u(0,B.bc)){q=v.G
p=a.a
if(b.a)p.enable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.u(0,B.bd))a.a.depthFunc(A.Bz(a,b.b))
if(r.u(0,B.be))a.a.depthMask(b.c)
if(r.u(0,B.bi)){q=v.G
p=a.a
if(b.w)p.enable(A.c(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.c(q.WebGL2RenderingContext.CULL_FACE))}if(r.u(0,B.bj))a.a.cullFace(A.By(a,b.x))
if(r.u(0,B.d_)){q=v.G.WebGL2RenderingContext
q=A.c(q.CCW)
a.a.frontFace(q)}if(r.u(0,B.bf)){q=v.G
p=a.a
if(b.d)p.enable(A.c(q.WebGL2RenderingContext.BLEND))
else p.disable(A.c(q.WebGL2RenderingContext.BLEND))}if(r.u(0,B.bg))a.a.blendFunc(A.xh(a,b.e),A.xh(a,b.f))
if(r.u(0,B.bh))a.a.blendEquation(A.Bw(a,b.r))
if(r.u(0,B.cY))a.a.colorMask(!0,!0,!0,!0)
if(r.u(0,B.cZ)){q=v.G.WebGL2RenderingContext
a.a.disable(A.c(q.SCISSOR_TEST))}s.a=b},
Bx(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.c(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.c(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dn(a,b,c,d,e,f){var s
if(a.b!==B.h)A.i(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.Bx(a,b))},
cb(a,b){var s
if(a.b!==B.h)A.i(A.m(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.i(A.m(u.k))
s=a.e
if(s==null)throw A.d(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.k(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bZ(c.b))
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
bp(a,b){if(a.b!==B.h)A.i(A.m(u.k))
a.a.bindVertexArray(A.a(b.a))},
aB(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.i(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.ik){p=s.d>1?A.c(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.ij){o=s.b
if(o!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
BC(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.c(p.ELEMENT_ARRAY_BUFFER),c,A.c(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
BD(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
xk(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.m(u.k))
s=a.a
r=A.k(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.c_?A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.c(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.BD(a,b.b))
return new A.dq(r)},
xi(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
xj(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
vh(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
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
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.xi(a,b.e))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.xi(a,b.f))
p=b.r
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.xj(a,p))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.xj(a,p))
j=a.r.u(0,"EXT_texture_filter_anisotropic")
i=j?a.fG(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.i(A.ao(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dq(new A.ik(r,l,k,q,!1))},
vi(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.i(A.m(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.d(A.x("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.x("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.c(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.ai(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.c(n.WebGL2RenderingContext.RGBA),A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.ai(l,"texSubImage2D",[m,0,0,0,q,p,A.c(n.WebGL2RenderingContext.RGBA),A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
kF(a,b){a.a.deleteTexture(t.fL.a(b.a).a)},
BF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.i(A.m(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.x("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.k(r.createFramebuffer())
if(q==null)throw A.d(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aK
if(n&&!a1.e)throw A.d(A.x("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.c1||o===B.fu
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
if(o!==h){A.vj(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dq(new A.ij(q,l,k,f,e,j,i,s,a1.b,a1.c))},
vj(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cU(a){var s
if(a.b!==B.h)A.i(A.m(u.k))
s=A.k(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dq(s)},
xl(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.k(p.createShader(b))
if(o==null)throw A.d(A.kd(b===A.w1(A.y3(A.z_(),r),q,t.S)?B.cT:B.cU,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a2(A.d_(p.getShaderParameter(o,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aQ(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.kd(b===A.w1(A.y3(A.z_(),r),q,t.S)?B.cT:B.cU,s))}return o},
BE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.i(A.m(u.k))
q=v.G
s=A.xl(a,A.c(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.xl(a,A.c(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.k(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.k5)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a2(A.d_(o.getProgramParameter(n,A.c(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aQ(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kd(B.cV,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.c(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kd(B.cW,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.k(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kd(B.cW,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dq(n)},
dq:function dq(a){this.a=a},
ik:function ik(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ij:function ij(a,b,c,d,e,f,g,h,i,j){var _=this
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
lq:function lq(a){this.a=a
this.b=!1},
kE:function kE(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
r_:function r_(a){this.a=a},
r0:function r0(a){this.a=a},
rP:function rP(){},
lp:function lp(){},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mj(a,a0){var s=0,r=A.bv(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mj=A.by(function(a1,a2){if(a1===1)return A.br(a2,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.m
n=A.o(t.N,o)
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
b=new A.iL(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.bF,A.o(o,t.bp))
b.jW(p,a0)
p=A.q(a).i("G<1,2>")
s=3
return A.am(A.np(A.jL(new A.G(a,p),p.i("bO<ax>(p.E)").a(new A.mk(b)),p.i("p.E"),t.mj),t.c),$async$mj)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.kZ():n
c.buffer=p
q=b
s=1
break
case 1:return A.bs(q,r)}})
return A.bt($async$mj,r)},
iL:function iL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mk:function mk(a){this.a=a},
mm:function mm(a,b){this.a=a
this.b=b},
ml:function ml(a,b){this.a=a
this.b=b},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
zI(a,b,c,d,e,f,g){var s=new A.ma(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.jY(a,b,c,d,0,e,f,g)
return s},
zE(a,b){var s=new A.lU(b)
s.jV(a,b)
return s},
zH(a){var s,r,q,p,o,n=t.z
n=A.o(n,n)
for(s=new A.G(a,A.q(a).i("G<1,2>")).gq(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aq(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.m6(A.b_(n,r,t.a))
n.jX(a)
return n},
DS(a,b){var s,r,q,p=b>>>0
for(s=new A.dz(a),r=t.gS,s=new A.aS(s,s.gt(0),r.i("aS<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.yO(p,q==null?r.a(q):q)}return p&2147483647},
iM:function iM(a,b){this.a=a
this.b=b},
ma:function ma(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mb:function mb(){},
lU:function lU(a){this.a=a},
lV:function lV(){},
fR:function fR(){},
lW:function lW(){},
m6:function m6(a){this.a=a},
m8:function m8(){},
m9:function m9(){},
m7:function m7(){},
uW:function uW(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
mi:function mi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mc:function mc(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(a){this.a=a},
me:function me(){},
hN:function hN(a,b){this.a=a
this.b=b},
mD:function mD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
nh:function nh(a){this.a=a},
kl:function kl(a,b,c,d,e,f,g,h,i,j){var _=this
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
nA:function nA(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
nB:function nB(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=0
this.$ti=b},
jy:function jy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1
_.w=!0
_.x=d
_.y=e},
Av(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.G(a,A.q(a).i("G<1,2>")).gq(0);s.m();){r=s.d
q=r.a
p=A.aq(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.od(n)},
od:function od(a){this.a=a},
og:function og(){var _=this
_.c=_.b=_.a=!1
_.d=0},
jM:function jM(a){this.a=a},
el:function el(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oI:function oI(a,b){this.a=a
this.b=b},
hC(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bz(a)
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
cO:function cO(a){this.a=a
this.b=0},
ps:function ps(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
pB:function pB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
B8(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.x1(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.jC(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.l4(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.cG(800,0,!1,r)
p=new Float32Array(8064)
o=J.jC(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.l2(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.cG(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).gac()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.pu(a,new A.nA(a,A.o(t.m,r)),b,c,A.a5(t.N),j,i,h,g,q,p,A.o(r,t.hX),o,n,m,B.hC,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.jM(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.ka(a,b,c)
return k},
pu:function pu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aN=a
_.aY=b
_.bk=c
_.bl=d
_.ec=_.ih=1
_.em=_.el=_.iA=_.iz=_.iy=_.ix=_.iw=_.iv=_.ek=_.ej=_.ei=_.eh=_.eg=_.ef=_.ee=_.iu=_.it=_.is=_.ed=_.ir=_.iq=_.ip=_.io=_.im=_.il=_.ik=_.ij=_.ii=_.ap=$
_.cE=null
_.hm=e
_.hN=_.hM=_.hL=_.hK=_.hJ=_.hI=_.hH=_.hG=_.hF=_.hE=_.hD=_.hC=_.hB=_.hA=_.hz=_.hy=_.hx=_.hw=_.hv=_.hu=_.ht=_.hs=_.hr=_.hq=_.hp=_.ho=_.hn=_.cF=$
_.cG=0
_.dW=_.dV=_.dU=_.dT=_.dS=_.dR=_.dQ=$
_.cK=_.cJ=_.cI=_.cH=_.bY=_.bj=null
_.bZ=$
_.hQ=_.hP=_.hO=!1
_.n0=1
_.dX=f
_.dY=g
_.n1=h
_.hR=i
_.cL=0
_.hS=j
_.n2=k
_.dZ=0
_.e_=l
_.n3=1
_.e0=!1
_.c_=0
_.e1=m
_.c0=0
_.hT=n
_.hU=o
_.hX=_.hW=_.hV=1
_.hY=0.4
_.e2=p
_.hZ=q
_.e3=r
_.e4=s
_.e5=a0
_.i_=_.e9=_.e8=_.e7=_.e6=0
_.i0=null
_.i1=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ia=_.eb=_.ea=_.i9=_.i8=_.n6=_.n5=_.n4=_.i7=_.i6=_.i5=_.i4=_.i3=_.i2=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.ib=a7
_.ic=a8
_.ie=a9
_.ig=b0},
yh(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.an(0,c).bg(f.an(0,c)).gac(),r=A.u_(g)
return A.yo(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
iD(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bz(a)
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
yo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.iD(a,A.iD(a,A.iD(a,A.iD(a,A.iD(a,A.iD(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
u_(a){return new A.ah((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
D5(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aO(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a9(),i=A.a9(),h=A.a9()
switch(B.c.O(o,6)){case 0:j.b=c
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
h.b=l}s=j.dv()
if(typeof s!=="number")return s.a4()
s=B.d.aJ(s*255)
r=i.dv()
if(typeof r!=="number")return r.a4()
r=B.d.aJ(r*255)
q=h.dv()
if(typeof q!=="number")return q.a4()
return new A.ah(s,r,B.d.aJ(q*255))},
hU:function hU(){},
li:function li(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
l4:function l4(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
l2:function l2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
pv:function pv(){},
pw:function pw(a){this.a=a},
px:function px(a){this.a=a},
r3:function r3(){},
ql:function ql(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
hJ(a,b,c){return new A.b(a,b,c)},
xf(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
mA:function mA(a){this.a=a},
A2(a,b,c){var s=new A.ja(a,c,null,b)
s.k0(a,null,null,b,c)
return s},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Af(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.cF(new A.O(B.hW,t.gl.a(new A.n9(a)),t.ns),t.no)
return s==null?null:new A.f5(s)},
Ae(a){if(a.a!==21)return null
if(a.e)return B.e2
if(!a.d&&a.b>=0.6&&a.c>=3)return B.e3
return B.e1},
c4:function c4(a,b){this.a=a
this.b=b},
n6:function n6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f5:function f5(a){this.a=a},
n9:function n9(a){this.a=a},
AR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.y(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.k1(s,new A.b(o,n,m),q,p,l,j)
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
k1:function k1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
DU(a){var s,r,q,p=A.o(t.N,t.z)
for(s=a.gH(),s=s.gq(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.eg)
p.k(0,q,r.b)}return p},
lw(a){var s,r,q,p,o,n=a.gY().bK(0)
B.a.a0(n)
s=t.z
r=A.o(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.xX(a.h(0,o)))}return A.b_(r,t.N,s)},
xX(a){var s
if(t.f.b(a))return A.lw(A.DU(a))
if(t.j.b(a)){s=t.z
return A.al(J.eR(a,A.EQ(),s),s)}if(a==null||A.c_(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.eS)
return a}throw A.d(A.a8("presentation snapshot contains unsupported value "+J.eQ(a).p(0),null,null))},
pc:function pc(a){this.a=a},
x2(a,b,c){var s=A.vy(b),r=A.vy(a)
if(c!==2)A.i(A.ao(c,"version","unsupported save version"))
return new A.fh(c,s,r)},
vy(a){var s,r,q,p,o=A.q(a).i("ac<1>"),n=A.K(new A.ac(a,o),o.i("p.E"))
B.a.a0(n)
o=t.z
s=A.o(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.xW(a.h(0,p)))}return A.b_(s,t.N,o)},
xW(a){var s,r,q,p
if(t.f.b(a)){s=A.o(t.N,t.z)
for(r=a.gH(),r=r.gq(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.eJ)
s.k(0,p,q.b)}return A.vy(s)}if(t.j.b(a)){r=t.z
return A.al(J.eR(a,A.ET(),r),r)}if(a==null||A.c_(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.eT)
return a}throw A.d(A.a8("save contains unsupported value "+J.eQ(a).p(0),null,null))},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(){},
eu:function eu(a,b){this.a=a
this.b=b},
wx(a,b,c,d,e,f,g,h){var s=A.e([],t.mc),r=A.e([],t.ah)
return new A.ns(a,b,c,d,e,f,g,s,r,h)},
wy(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aJ(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.eI)
r=c.h(0,"runSeed")
q=A.aJ(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aJ(p)||p<1||typeof o!="number")throw A.d(B.f_)
if(!isFinite(480))throw A.d(A.ao(480,"daySeconds","must be finite and > 0"))
n=new A.jk(p,480)
if(!isFinite(o)||o<0||o>=24)A.i(A.a8("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.AG(a5,A.aM(a1,s,m))
k=A.A_(l,A.aM(a0,s,m),n)
j=A.wB(b)
A.Au(A.aM(a2,s,m)).lY(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.c_(f))A.i(B.eo)
e=A.AM(c.h(0,"narrative"))
if(e==null)e=A.oQ(d,d,d)
return A.wx(b,q,j,n,l,k,new A.j8(i,h,g,f),e)},
CT(a){var s
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
ed:function ed(a,b){this.a=a
this.b=b},
jj:function jj(){},
nt:function nt(a,b){this.a=a
this.b=b},
ns:function ns(a,b,c,d,e,f,g,h,i,j){var _=this
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
nu:function nu(a){this.a=a},
nv:function nv(){},
nw:function nw(){},
nx:function nx(a){this.a=a},
ny:function ny(){},
zK(a){var s,r,q,p,o,n,m="modelScale",l=A.lD(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.aI(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.ez)
s=A.e_(l,"houseId")
r=A.e_(l,"sourceRef")
q=J.eR(A.lA(l,"rooms"),new A.mp(k),t.fS)
q=A.K(q,q.$ti.i("a3.E"))
q.$flags=1
p=J.eR(A.lA(l,"portals"),new A.mq(k),t.gE)
p=A.K(p,p.$ti.i("a3.E"))
p.$flags=1
o=J.eR(A.lA(l,"stairs"),new A.mr(),t.d2)
o=A.K(o,o.$ti.i("a3.E"))
o.$flags=1
n=J.eR(A.lA(l,"exteriorCells"),new A.ms(),t.N)
n=A.K(n,n.$ti.i("a3.E"))
n.$flags=1
return new A.mo(s,r,q,p,o)},
zL(a,b){var s=A.lD(a,"room"),r=A.e_(s,"id"),q=A.yx(s.h(0,"origin"),"origin",b),p=A.yx(s.h(0,"size"),"size",b),o=J.eR(A.lA(s,"windows"),new A.mu(b),t.lJ)
o=A.K(o,o.$ti.i("a3.E"))
o.$flags=1
return new A.eT(r,q,p,o)},
lD(a,b){return t.P.b(a)?a:A.ix(b+" is not an object")},
lA(a,b){return t.j.b(a.h(0,b))?t.ib.a(a.h(0,b)):A.ix(b+" is not a list")},
e_(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ix(b+" is not a string")},
iA(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.ix(b+" is not finite")},
E6(a,b){var s,r
if(t.j.b(a)){s=J.aK(a)
s=s.gt(a)!==3||s.M(a,new A.u3())}else s=!0
if(s)return A.ix(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.T(a);r.m();)s.push(A.aI(r.gn()))
return s},
yx(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.E6(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
ix(a){return A.i(A.a8(a,null,null))},
mo:function mo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
mp:function mp(a){this.a=a},
mq:function mq(a){this.a=a},
mr:function mr(){},
ms:function ms(){},
mt:function mt(a){this.a=a},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mu:function mu(a){this.a=a},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eS:function eS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eU:function eU(a){this.b=a},
u3:function u3(){},
iU:function iU(a,b){this.a=a
this.b=b
this.d=null},
mF:function mF(a){this.a=a},
jP:function jP(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
kH:function kH(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nS:function nS(){this.b=0},
pD:function pD(a,b,c){var _=this
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
jd:function jd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nb:function nb(){},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
nU:function nU(){},
nT:function nT(a,b,c){this.a=a
this.b=b
this.c=c},
F2(a){var s,r,q,p,o,n,m,l
a.D()
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
return new A.c8(B.a2,p,new Uint16Array(A.a0(a.b)),new A.iG(new A.L(s.a,s.b,s.c),new A.L(s.d,s.e,s.f)))},
F1(a){var s,r,q,p,o,n=A.e([],t.ft)
for(s=A.DR(a,new A.uQ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.je(o,p.c,p.e))}return n},
DR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.D()
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
throw A.d(A.x("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.f(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.u(d,":")?B.b.E(d,0,B.b.c1(d,":")):null
l=new A.cV(d,l,h,A.e([],p))
s.k(0,d,l)}B.a.J(l.d,A.e([m,k,j],p))}r=A.e([],t.nP)
q=s.$ti.i("ay<2>")
q=A.K(new A.ay(s,q),q.i("p.E"))
B.a.S(q,new A.tX())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].oA(a))
return r},
CD(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jd(r,q,p,o,n,m)},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
uQ:function uQ(a){this.a=a},
tX:function tX(){},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
e9:function e9(a,b){this.a=a
this.b=b},
jf:function jf(){},
Eh(a){var s,r,q,p=new A.nT(A.e([],t.ph),A.e([],t.t),A.o(t.N,t.S))
for(s=0;s<4;++s)A.CW(p,a,B.cp[s],15.75,15.75,12.044999999999998,0.63)
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
p.aa(r,new A.a_(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.aa(r,q,new A.a_(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a_(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a_(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.aa(q,new A.a_(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.aa(q,r,new A.a_(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.v(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.aa(new A.a_(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a_(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a_(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.aa(new A.a_(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a_(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a_(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a_(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a_(7.875,16.32,16.383,-1,0,0,1,1,0)
p.aa(r,new A.a_(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.aa(r,q,new A.a_(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a_(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a_(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.aa(q,new A.a_(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.aa(q,r,new A.a_(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.DI(p,15.75,15.75,12.044999999999998,16.32)
A.CG(p,15.75,15.75,16.32)
A.CS(p,15.75,15.75,12.044999999999998)
A.D_(p,a,15.75)
A.DO(p,15.75,15.75)
A.CC(p,15.75)
return p.m5()},
CW(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.dA)
for(s=b6.b,r=s.length,q=B.w!==b7,p=B.l!==b7,o=B.m===b7,n=B.I===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
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
B.a.l(b4,new A.dU(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aB(i),b=J.T(h.a),h=new A.R(b,h.b,h.$ti.i("R<1>"));h.m();){a=b.gn()
if(!a.Q||a.aG(i)!==b7)continue
B:{if(!p||o){a0=g+a.aj(i)
break B}if(!q||n){a0=e+a.aj(i)
break B}a0=null}B.a.l(b4,new A.dU(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
r=t.i
a1=A.aE([0,s],r)
a2=A.aE([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.a0(a4)
a5=A.K(a2,a2.$ti.c)
B.a.a0(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.f(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.f(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.f(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.tE(b0,b1,b2,b3)))continue
switch(m){case 0:b5.v(0,b1,b3,0,b0,b2,r)
break
case 2:b5.v(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.v(0,0,b3,b1,r,b2,b0)
break
case 1:b5.v(0,s,b3,b1,b8,b2,b0)
break}}A.CZ(b5,b4,b7,b8,b9,c1)
A.CX(b5,b4,b7,b8,b9,c1)
A.CY(b5,b4,b7,b8,b9,c0,c1)},
CY(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aE([0,a4===B.l||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.a0(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.tD(a,a0,g)))continue
switch(s){case 0:a2.v(1,a0,e,m,a,f,l)
break
case 2:a2.v(1,a0,e,k,a,f,j)
break
case 3:a2.v(1,m,e,a0,l,f,a)
break
case 1:a2.v(1,o,e,a0,n,f,a)
break}}}},
CX(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
CZ(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.DM(a2,g,a4,a5,a6,a7,q)}},
DM(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
DI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.v(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.v(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.v(4,i,p,-0.38,j,q,-0.44)
a.v(4,i,p,s,j,q,o)}A.DJ(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.v(5,h+0.5,p,o,h-0.5,r,q)}},
DJ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a_(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a_(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.aa(n,new A.a_(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.aa(n,m,new A.a_(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a_(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a_(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.aa(m,new A.a_(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.aa(m,n,new A.a_(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
CG(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.v(0,g+0.35,k,n,g-0.35,l,q)
a.v(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.v(5,d+0.1,o,m,d-0.1,r,p)}}},
CS(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.v(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.v(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.v(6,j,b+0.06,d,k,b,e)}a.v(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
D_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aj("hall")
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
DO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
CC(a,b){var s,r
a.v(0,6.7,1,-4.05,-2.5,0,-4.4)
a.v(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.v(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.v(7,b+3,0,-4.55,-3,-0.08,-5.2)},
dU:function dU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tE:function tE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tD:function tD(a,b,c){this.a=a
this.b=b
this.c=c},
ER(a,b,c,d){var s,r,q,p,o,n=A.w5(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.ea(B.e7,s)}r=A.yY(a,c,b)
if(r!=null)return new A.ea(B.e8,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.yZ(a,c,b)!=null)return B.ed
q=A.yX(a,b,c,d)
if(q!=null){p=d.cz(q.c)
o=q.y
return new A.ea(B.ea,o==null?"inspect the "+p.b:"inspect "+o)}return B.ec},
yX(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a0==null)return null
s=c.e.h(0,b)
if(s==null)return null
for(r=a0.nY(b),q=J.T(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>")),p=a0.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=3;r.m();){j=q.gn()
if(!j.x)continue
i=a0.cz(j.c)
h=j.f.a
g=j.j5(i,p)
f=a.a
e=new A.b(n+(h.a*p+0)-f.a,m+(h.b*p+(g.a+g.b)*0.5)-f.b,o+(h.c*p+0)-f.c)
d=e.gt(0)
if(d<0.01||d>3)continue
h=e.gac()
f=a.b
if(Math.acos(B.d.N(h.a*f.a+h.b*f.b+h.c*f.c,-1,1))>0.5236||d>=k)continue
k=d
l=j}return l},
dC:function dC(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.c=b},
yI(a,b){var s,r=new A.cO(new Float32Array(5376)),q=new A.cO(new Float32Array(5376)),p=new A.cO(new Float32Array(5376)),o=new A.cO(new Float32Array(5376)),n=b.d,m=a.aX(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cS(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.Cr(r,b,m)
k+=m.b
q.cS(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
A.Co(q,b,m)
for(s=0;s<4;++s)A.Cv(p,a,b,m,B.cp[s])
for(l=a.aB(b.a),k=J.T(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>"));l.m();){j=k.gn()
if(j.at==null||j.as)continue
A.xL(o,b,m,j,!0)}A.Cp(p,b,m)
A.Cs(p,a,b,m)
return new A.pE(B.p.aL(r.a,0,r.b),B.p.aL(q.a,0,q.b),B.p.aL(p.a,0,p.b),B.p.aL(o.a,0,o.b))},
Co(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.t(a,new A.b(n,s,r),new A.b(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.t(a,new A.b(m-0.34,g,l-0.34),new A.b(m+0.34,d-0.018,l+0.34),12037536)
A.t(a,new A.b(m-0.22,d-0.075,l-0.22),new A.b(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.t(a,new A.b(s,r,j),new A.b(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.t(a,new A.b(i,s,r),new A.b(i+0.1,q,p),4078648)}},
Ef(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cO(new Float32Array(5376))
r=a.aX(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.xM(s,b,r,c,q)
return B.p.aL(s.a,0,s.b)},
Eg(a,b){var s,r,q,p=new A.cO(new Float32Array(5376)),o=a.aX(b)
for(s=a.aB(b.a),r=J.T(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.xL(p,b,o,q,!1)}return B.p.aL(p.a,0,p.b)},
Cr(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aO(e/0.22)
for(r=c+0.004,q=a1.a,p=d+q,o=c+0.014,n=0;n<s;++n){m=b+n*0.22+0.018
l=(n&1)===0?7952963:7031607
A.t(a,new A.b(d,r,m),new A.b(p,o,m+0.15),l)}r=a0.a
p=r==="hall"
if(p||r==="landing"){k=p?1:0.82
j=d+(q-k)*0.5
q=j+k
e=b+e
A.t(a,new A.b(j,c+0.016,b+0.18),new A.b(q,c+0.026,e-0.18),6443866)
A.t(a,new A.b(j+0.08,c+0.027,b+0.22),new A.b(q-0.08,c+0.033,e-0.22),8548460)}if(r==="living-room"){A.t(a,new A.b(d+1.15,c+0.018,b+2.15),new A.b(d+4.7,c+0.03,b+4.35),5589578)
A.t(a,new A.b(d+1.28,c+0.031,b+2.28),new A.b(d+4.57,c+0.037,b+4.22),7824746)}return}if(e==="floor-linoleum"){for(e=b+0.18,r=d+0.08,q=c+0.004,p=d+a1.a-0.08,o=c+0.012,n=0;n<5;++n){m=e+n*0.62
i=(n&1)===0?7764332:6843233
A.t(a,new A.b(r,q,m),new A.b(p,o,m+0.5),i)}return}if(e==="floor-tiles"){for(e=d+0.08,r=b+0.08,q=c+0.004,p=c+0.012,h=0;h<4;++h)for(g=e+h*0.86,o=g+0.78,f=0;f<3;++f){m=r+f*0.86
i=(h+f&1)===0?12170408:10657172
A.t(a,new A.b(g,q,m),new A.b(o,p,m+0.78),i)}return}if(e==="floor-concrete"){A.t(a,new A.b(d+0.08,c+0.004,b+0.08),new A.b(d+a1.a-0.08,c+0.014,b+a1.c-0.08),7828331)
A.t(a,new A.b(d+2.2,c+0.015,b+2.45),new A.b(d+2.68,c+0.021,b+2.93),4868420)}},
Cs(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.lu(b2,b4,b5,"living")
A.iv(b2,b4,"living")
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
case"hall":A.Ct(b2,b3,b4,b5,a5,a4)
A.Cu(b2,b3,b4,b5,a5,a4)
A.iv(b2,b4,"hall")
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
case"kitchen":A.iv(b2,b4,"kitchen")
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
case"cellar":A.iv(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.t(b2,new A.b(a8+m,b0,q),new A.b(p+m,o+B.c.O(k,2)*0.18,n),a5)}A.t(b2,new A.b(a9+2.55,b0+0.15,b1+0.38),new A.b(a9+2.72,b0+1.55,b1+0.56),a4)
A.t(b2,new A.b(a9+2.42,b0+1.28,b1+0.32),new A.b(a9+2.86,b0+1.38,b1+0.65),a6)
A.t(b2,new A.b(a9+0.4,b0+1.72,b1+0.45),new A.b(a9+3.4,b0+1.82,b1+0.58),a4)
A.t(b2,new A.b(a9+1.9,b0+1.58,b1+0.42),new A.b(a9+2.06,b0+1.76,b1+0.61),a4)
A.t(b2,new A.b(a9+1.84,b0+1.62,b1+0.55),new A.b(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.lu(b2,b4,b5,"bedroom")
A.iv(b2,b4,"bedroom")
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
case"landing":A.lu(b2,b4,b5,"landing")
a8=a9+0.48
A.t(b2,new A.b(a9+0.34,b0+0.02,b1+1.62),new A.b(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.t(b2,new A.b(a8,q+l,p+j),new A.b(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.t(b2,new A.b(a8+l,q,p+j),new A.b(o+l,n,m+j),a5)}break
case"bathroom":A.lu(b2,b4,b5,a7)
A.iv(b2,b4,a7)
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
case"spare-room":A.lu(b2,b4,b5,"spare")
A.t(b2,new A.b(a9+1,b0,b1+0.7),new A.b(a9+3.25,b0+1.65,b1+2),6972528)
A.t(b2,new A.b(a9+0.8,b0+1.6,b1+0.52),new A.b(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.t(b2,new A.b(a8-1.05,b0,q-1.02),new A.b(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.t(b2,new A.b(p,o+l,n),new A.b(a8,m+l,q),a4)}break}},
lu(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
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
iv(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.t(a2,new A.b(a+0.42,a0,a1+3.24),new A.b(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.t(a2,new A.b(b+m,s,r-l),new A.b(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.c.O(n,2)*0.1
A.t(a2,new A.b(k,s+j,r),new A.b(k+0.25,q+j,p),5913386)
A.t(a2,new A.b(k+0.045,o+j,p),new A.b(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.t(a2,new A.b(a+2.98,a0+1.1,a1+2.82),new A.b(a+3.05,a0+1.72,b),c)
s=a+2.72
A.t(a2,new A.b(s,a0+0.82,a1+2.84),new A.b(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.t(a2,new A.b(h,r,q),new A.b(h+0.06,p,b),c)}break
case"cellar":A.t(a2,new A.b(a+2.82,a0,a1+2.72),new A.b(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.c.O(n,2)*0.32
f=s+B.c.T(n,2)*0.32
A.t(a2,new A.b(g,r,f),new A.b(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.t(a2,new A.b(e,s,r),new A.b(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.t(a2,new A.b(a+0.34,b,a1+2.22),new A.b(a+1.24,a0+1.32,a1+2.28),c)
A.t(a2,new A.b(a+0.48,a0+0.82,a1+2.24),new A.b(a+1.1,b,a1+2.3),d)
break}},
Cu(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
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
Ct(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
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
g=B.d.oo(k/0.18)
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
Cv(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.e([],t.a9)
for(s=a2.a,r=a1.aB(s),q=J.T(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gn()
if(!p.as&&p.aG(s)===a4)a.push(new A.dT(p.aj(s),p.aj(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.dT(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aE([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.J(0,A.e([m.a,m.b],p))}l=A.K(r,r.$ti.c)
B.a.a0(l)
s=A.aE([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.J(0,A.e([m.c,m.d],p))}k=A.K(s,s.$ti.c)
B.a.a0(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.rU(f,e,d,c)))continue
A.E7(a0,a2,a3,a4,f,e,d,c)}A.Cw(a0,a2,a3,a4,b,a)},
Cw(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.rS(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.rS(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.rS(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.rS(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.b5(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.b5(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.b5(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.b5(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.I(a9),o=r.i("n(1)").a(new A.rT(b3)),a9=B.a.gq(a9),r=new A.R(a9,o,r.i("R<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.b5(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.b5(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.b5(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.b5(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.Cx(b0,b1,b2,b3,b,p)}},
Cx(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.b5(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.b5(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.b5(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.b5(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.b5(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
rS(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.DX(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.b5(a,b,c,d,n,o,g,h,i,j)}},
DX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.e([new A.fs(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fs(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fs(n,j))}h=p}return h},
Cp(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.jM.u(0,r))return
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
b5(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.au(j,l,g,h,d)
a.au(s,r,q,p,d)
a.au(l,s,p,g,d)
a.au(r,j,h,q,d)
a.au(l,j,r,s,d)
a.au(g,p,q,h,d)},
E7(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.cS(s.a5(0,o),r.a5(0,o),q.a5(0,o),p.a5(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.E8(b,d)
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
default:l=m}A.t(a,o,l,9145227)},
E8(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-15.75)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-15.75)<0.001
break
default:s=null}return s?0.63:0.27},
xL(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aG(d),b=a3.aj(d),a=b+a3.w
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
break}if(a4)A.xM(a0,a1,a2,a3,q)
A.Cq(a0,a1,a2,a3)},
Cq(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.aj(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aG(d)
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
A.b5(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.m,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.b5(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.b5(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.b5(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
xM(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aG(o),m=d.aj(o)
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
pE:function pE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rU:function rU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rT:function rT(a){this.a=a},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a,b){this.a=a
this.b=b},
wB(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.kl,b6=A.e([],b5),b7=t.aN,b8=A.e([],b7),b9=A.e([],t.jn),c0=t.N
c0=new A.nQ(b6,b8,b9,A.o(c0,t.U),A.o(c0,t.T),new A.nS())
s=t.E
r=t.s
q=t.cs
p=t.jc
B.a.J(b6,A.e([new A.aU(n,B.an,new A.b(4.5,3.9,4),new A.b(0,0,0),A.e([new A.b4("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.b4("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.b8(m,l,new A.b(1,1.95,1),!1,!1,m),new A.b8(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.aS,"wallpaper-stripes",i,h,B.K),new A.aU(g,B.an,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.e([new A.b4("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.b8("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.e([new A.ba(e,e,new A.b(0.2,2.175,0.35)),new A.ba(d,d,new A.b(2.2,2.55,3)),new A.ba(c,c,new A.b(0.4,1.35,4.1)),new A.ba(b,b,new A.b(0.92,0.82,5.55))],p),a,i,h,B.K),new A.aU(a0,B.an,new A.b(4.5,3.75,3),new A.b(0,0,4),A.e([new A.b4("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.b4("kitchen-west",B.I,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.b8(a1,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a1),new A.b8("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.b8("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.ba(a2,a2,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.hS),new A.aU("cellar",B.an,new A.b(4,3,4),new A.b(1,-3,2),B.aU,A.e(["hall-cellar"],r),B.hA,B.aS,"wallpaper-damp","floor-concrete","ceiling-pipes",B.K),new A.aU("bedroom",B.ao,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.e([new A.b4("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.b4("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.b8(a3,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a3),new A.b8("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.e([new A.ba(a4,a4,new A.b(2.2,1.125,2.5)),new A.ba(a5,a5,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.K),new A.aU(a6,B.ao,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.aU,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.b8("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.aS,a,i,h,B.K),new A.aU(a8,B.ao,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.e([new A.b4("bathroom-east",B.w,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.b8("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.e([new A.ba(a9,a9,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.K),new A.aU(b0,B.ao,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.e([new A.b4("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.b8("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.e([new A.ba(b1,b1,new A.b(0.5,1.8,0.3)),new A.ba(b2,b2,new A.b(3.7,2.1,2.7)),new A.ba(b3,b3,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.K)],b5))
B.a.J(b8,A.e([A.dL(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.dL(g,n,b4,!1,B.I,B.w,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.dL(g,a0,b4,!1,B.I,B.w,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.dL(a0,n,b4,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.dL(g,"cellar","kit-cellar-door-grille",!1,B.m,B.w,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.dL(g,a6,o,!1,B.w,B.w,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.dL(a6,"bedroom",b4,!1,B.I,B.w,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.dL(a6,a8,b4,!1,B.m,B.l,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.dL(a6,b0,b4,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dj("hall-stairs",f,B.hs,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
c0.kn()
c0.ko()
c0.kY()
b5=b6.length
if(b5!==8)A.i(A.m("expected eight rooms, got "+b5))
b5=c0.goz()
if(b5!==9)A.i(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaK(b9).c.length!==3||B.a.gU(B.a.gaK(b9).c)!==9.45)A.i(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.i(A.m("expected nine physical portals"))
c0.lN()
c0.lL()
return c0},
nQ:function nQ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
o6:function o6(){},
o7:function o7(){},
o8:function o8(){},
o5:function o5(){},
o9:function o9(a){this.a=a},
oa:function oa(){},
w5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gt(0)
if(g<0.01||g>3)continue
f=h.gac()
j=a.b
if(Math.acos(B.d.N(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
yY(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aB(c),r=J.T(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>")),q=null,p=3;s.m();){o=r.gn()
n=b.o_(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.y7(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
yZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.E9(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gt(0)
if(!A.y7(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
y7(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.N(a.gac().bX(c.b),-1,1))<=e},
E9(a,b,c){var s=a.aX(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
na:function na(){this.a=null
this.b=0},
qm:function qm(){},
qn:function qn(){},
Az(a){var s=A.iB(a,"inventory asset"),r=A.du(s,"id"),q=A.du(s,"kind")
A.du(s,"source")
A.du(s,"proxy")
A.du(s,"pivot")
s=A.iB(s.h(0,"bounds"),"inventory bounds")
return new A.cD(r,q,new A.oh(A.lJ(s.h(0,"min"),"bounds.min"),A.lJ(s.h(0,"max"),"bounds.max")))},
AA(a){var s,r,q,p,o,n,m,l="stateKey",k=A.iB(a,"inventory placement"),j=A.iB(k.h(0,"visibility"),"placement visibility"),i=A.iB(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.du(k,"id"),f=A.du(k,"roomId"),e=A.du(k,"assetId")
A.du(k,"role")
s=typeof k.h(0,"socket")=="string"?A.y(k.h(0,"socket")):null
k=A.iB(k.h(0,"transform"),"inventory transform")
r=A.lJ(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.i(B.eM)
q=A.lJ(k.h(0,"position"),"transform.position")
p=A.lJ(k.h(0,"rotation"),"transform.rotation")
A.du(j,"layer")
if(typeof j.h(0,l)=="string")A.y(j.h(0,l))
o=J.a2(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.y(i.h(0,"focusId")):null
m=t.P.b(h)?A.Dy(h,"radius"):0
return new A.cl(g,f,e,s,new A.oj(q,p,r),o,n,m)},
iB(a,b){return t.P.b(a)?a:A.dr(b+" is not an object")},
du(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dr(b+" is not a string")},
Dy(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dr(b+" is not finite")},
lJ(a,b){var s
if(t.j.b(a)){s=J.aK(a)
s=s.gt(a)!==3||s.M(a,new A.u2())}else s=!0
if(s)return A.dr(b+" is not a finite vec3")
s=J.aK(a)
return new A.b(A.aI(s.h(a,0)),A.aI(s.h(a,1)),A.aI(s.h(a,2)))},
dr(a){return A.i(A.a8(a,null,null))},
nV:function nV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nY:function nY(a){this.a=a},
nW:function nW(a){this.a=a},
nX:function nX(a){this.a=a},
cD:function cD(a,b,c){this.a=a
this.b=b
this.f=c},
cl:function cl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function oh(a,b){this.a=a
this.b=b},
u2:function u2(){},
oi:function oi(a){this.a=a},
cK:function cK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jv:function jv(a){this.a=a},
nZ:function nZ(a){this.a=a},
dL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bk(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
h3:function h3(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bk:function bk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c,d,e,f,g){var _=this
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
At(a){return A.As(a)},
As(a){var s,r,q,p,o,n,m=A.yf(a,"sound emitter"),l=t.N,k=A.o(l,l)
for(s=A.yf(m.h(0,"cues"),"sound emitter cues").gH(),s=s.gq(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.eH)
k.k(0,r.a,q)}s=A.vU(m,"id")
r=A.vU(m,"roomId")
p=A.vU(m,"placementId")
o=A.E5(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.fB("gain is not a number")
return new A.cB(s,r,p,o,n,A.b_(k,l,l))},
yf(a,b){return t.P.b(a)?a:A.fB(b+" is not an object")},
vU(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.fB(b+" is not a string")},
E5(a,b){var s
if(t.j.b(a)){s=J.aK(a)
s=s.gt(a)!==3||s.M(a,new A.u1())}else s=!0
if(s)throw A.d(A.a8(b+" must be a numeric vec3",null,null))
s=J.aK(a)
return new A.b(A.aI(s.h(a,0)),A.aI(s.h(a,1)),A.aI(s.h(a,2)))},
fB(a){return A.i(A.a8(a,null,null))},
o0:function o0(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function o1(a){this.a=a},
o2:function o2(a){this.a=a},
o3:function o3(){},
cB:function cB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nR:function nR(){this.b=this.a=null},
eg:function eg(a){this.a=a},
o_:function o_(){this.b=this.a=null},
cA:function cA(a,b){this.a=a
this.b=b},
u1:function u1(){},
wC(a,b,c,d,e,f){var s=t.N
return new A.o4(e,f,c,a,A.b_(A.aM(d,s,s),s,s),A.al(b,s))},
wD(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.o(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.hm(p.ax,p.ay))}s=A.o(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.o(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.hd(j.d,j.r))}return A.wC(a.r.b,B.n,i,B.cx,h,s)},
Au(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.ic
r=a3.h(0,"mantleHistory")
if(r==null)r=B.hJ
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aJ(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.eF)
p=t.N
o=A.o(p,t.ku)
for(n=a.gH(),n=n.gq(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bQ)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.c_(j)||!A.c_(i))A.i(B.bQ)
o.k(0,k,new A.hm(j,i))}h=A.o(p,t.y)
for(n=a0.gH(),n=n.gq(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.c_(l.b))throw A.d(B.eC)
h.k(0,k,A.U(l.b))}g=A.o(p,t.mK)
for(n=a1.gH(),n=n.gq(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bO)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.c_(f)||!A.c_(e))A.i(B.bO)
g.k(0,k,new A.hd(f,e))}d=A.o(p,p)
for(q=s.gH(),q=q.gq(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.f7)
d.k(0,n,A.y(p.b))}c=A.e([],t.s)
for(q=J.T(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.ee)
B.a.l(c,b)}return A.wC(a2,c,g,d,o,h)},
vQ(a,b){return a.a.a===b.a&&a.a2(0,b.gaw(b))},
o4:function o4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hm:function hm(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
Ac(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.jK(e,A.I(e).c)
q=new A.fo()
q.d4((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.fZ(a,q,2,r,1+s,A.aE(["time"],t.N))
break
case 3:A.fZ(a,q,3,r,1+s,A.aE(["place"],t.N))
break
case 4:A.fZ(a,q,4,r,2+s,p)
A.A8(a,q,4)
break
case 5:A.fZ(a,q,5,r,s,p)
A.A6(a,q,5)
break
case 6:A.fZ(a,q,6,r,s,p)
A.A7(a,q)
A.Ab(a,q,6)
break
case 7:A.A9(a,q,7)
break
default:if(s>0)A.fZ(a,q,b,r,s,p)}},
A5(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.u(0,b.a))return!1
if(A.Aa(a,b,c))return!1
return!0},
fZ(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.q(s).i("ag<2>"));s.m();){r=s.d
if(A.A5(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d2(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.wv(a,b,o[p],f)}},
wv(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gU(o).a,n,n)
if(d==null)s=A.e(B.x.slice(0),t.s)
else{n=t.nn
s=A.K(new A.O(B.x,t.dC.a(new A.n5(d)),n),n.i("p.E"))}n=s.length
if(n===0)return
n=b.aH(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eY(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aH(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.dK(c.a,m,B.a.gU(o).b)},
A8(a,b,c){var s=A.ww(a,b,c)
if(!a.bT(s))return
a.f8(c,t.G.a(s),0,B.aO,null)},
ww(a,b,c){var s,r,q,p,o,n=t.N,m=A.o(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.x[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aH(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
A6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.q(s).i("ag<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d2(i,b)
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
for(s=a.a,m=0;m<5;++m){l=B.x[m]
k=o.h(0,l)
j=s.eY(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aH(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.dK(q.a,o,B.a.gU(i).b)
a.dK(p.a,n,B.a.gU(r).b)},
A7(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.ag(s,s.r,s.e,A.q(s).i("ag<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aH(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.ak(0,q[r].a)},
Ab(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.ag(s,s.r,s.e,A.q(s).i("ag<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aH(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.wv(a,b,q[s],null)},
A9(a,b,c){var s=c+1,r=A.ww(a,b,s)
if(!a.bT(r))return
a.f8(s,t.G.a(r),0,B.aO,null)},
Aa(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gU(b.c).c===B.ar}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gU(b.c).c===B.ar}if(c===21)return b.e
return!1},
n5:function n5(a){this.a=a},
Bu(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=0;s<5;++s){r=B.x[s]
q=a.h(0,r)
p=A.aq(q==null?B.n:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.qY(n)},
oy(a,b,c){var s,r,q,p=t.z
p=A.o(p,p)
for(s=0;s<5;++s){r=B.x[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.jJ(A.b_(p,q,q),b,c)},
wO(a){var s=t.N
return A.oy(t.P.a(a.h(0,"fields")).bE(0,new A.oz(),s,s),A.aI(a.h(0,"shakiness")),A.Ah(B.hw,A.y(a.h(0,"hand")),t.bU))},
Ag(a){var s,r,q,p,o=a.h(0,"margin"),n=A.c(a.h(0,"ordinal")),m=A.c(a.h(0,"day")),l=A.e([],t.b1)
for(s=J.T(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.wO(r.a(s.gn())))
s=A.aQ(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.xT(a.h(0,"lastReadDay"))
return new A.bN(n,m,l,s,q,p,o==null?null:A.wO(r.a(o)))},
dE:function dE(a,b){this.a=a
this.b=b},
qY:function qY(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(){},
oA:function oA(a){this.a=a},
bN:function bN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wL(a){return new A.ol(a,A.o(t.S,t.g),A.a5(t.N),A.e([],t.t))},
AG(a,b){var s,r,q,p,o=A.wL(a)
o.e=A.c(b.h(0,"nextOrdinal"))
o.f=A.c(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.zv(s.a(b.h(0,"tags")),t.N))
for(s=J.T(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Ag(r.a(s.gn()))
q.k(0,p.a,p)}return o},
ol:function ol(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
os:function os(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.c=a
this.a=b
this.b=c},
mv:function mv(){},
mw:function mw(){},
eW:function eW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mx:function mx(){},
ox:function ox(){},
ow:function ow(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
p9:function p9(){},
p8:function p8(a,b,c){this.b=a
this.c=b
this.d=c},
pa:function pa(){},
v9(a){if(!isFinite(0))A.i(A.ao(0,"interpolation",null))
return new A.pA(a)},
hs:function hs(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
pA:function pA(a){this.a=a},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
x_(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.jK(c,A.I(c).c)
r=A.K(r,A.q(r).c)
B.a.a0(r)
s=t.N
r=A.al(r,s)
r=new A.py(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b_(l,s,t.X))
r.kb(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
pz(a,b,c,d,e){var s=A.lx("RENDERER_SHA"),r=A.lx("GAME_SHA"),q=A.lx("DART_SDK_VERSION")
return A.x_(a,"eda30086b3bf-d0e46c07727e-dirty",b,c,d,r,A.lx("LOCKFILE_SHA256"),e,A.lx("PROJECT_VERSION"),s,q,null)},
lx(a){var s=B.i4.h(0,a)
return s.length===0?null:s},
py:function py(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
wt(a,b,c,d,e,f,g){var s=A.K(f,t.ad)
if(b<0||a<0||e<0)A.i(A.a8("saved day-loop resources must not be negative",null,null))
return new A.mW(c,g,b,a,e,d===!0,s)},
A_(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.eu)
s=A.e([],t.b2)
for(r=J.T(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.oC,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.eG)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aJ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.eq)
f=A.cF(new A.O(B.cg,q.a(new A.mX(h)),p),o)
e=A.cF(new A.O(B.cm,n.a(new A.mY(g)),m),l)
if(f==null||e==null)throw A.d(B.f2)
B.a.l(s,new A.fi(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aJ(d)||!A.aJ(c)||!A.aJ(b)||!A.c_(a))throw A.d(B.eO)
return A.wt(c,d,a1,a,b,s,a3)},
bH:function bH(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
mW:function mW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mX:function mX(a){this.a=a},
mY:function mY(a){this.a=a},
jz:function jz(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.b=a
this.c=b},
eA:function eA(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
ob:function ob(a){this.c=a},
oe:function oe(a,b){this.a=a
this.b=b},
of:function of(){},
x1(){var s=A.vE(B.n),r=A.vE(B.n),q=new A.pG(B.D,s,r)
if(!isFinite(0))A.i(B.ef)
if(!B.a.a2(r,B.a.gaw(s)))A.i(B.eP)
if(q.a===B.D&&q.b!==0&&!q.e)A.i(B.ej)
return q},
vE(a){var s,r,q,p=A.e([],t.s),o=A.a5(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.f0)
B.a.l(p,q)}return p},
c9:function c9(a,b){this.a=a
this.b=b},
pF:function pF(){},
cM:function cM(){},
pG:function pG(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jk:function jk(a,b){this.a=a
this.b=6
this.c=b},
D4(a){var s,r=A.e([],t.hc)
for(s=1;s<=21;++s)r.push(new A.tF(a,s).$0())
return r},
z0(a){var s=B.d.N(a,0,1)
if(s<=0.5)return A.yd(4491468,16777215,s*2)
return A.yd(16777215,16759637,(s-0.5)*2)},
z1(a){var s=B.d.N(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).gac()},
yd(a,b,c){var s,r=new A.tN(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.jA()
s=r.$1(8)
if(typeof s!=="number")return s.jA()
r=r.$1(0)
if(typeof r!=="number")return A.lL(r)
return(q<<16|s<<8|r)>>>0},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qZ:function qZ(a){this.b=a},
tF:function tF(a,b){this.a=a
this.b=b},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
oQ(a,b,c){var s,r=t.N,q=A.o(r,r)
if(a!=null)q.J(0,a)
s=A.o(r,r)
if(b!=null)s.J(0,b)
r=A.o(r,t.ie)
if(c!=null)r.J(0,c)
return new A.oP(q,s,r)},
AM(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aJ(s)||s!==1)return l
r=A.wU(a.h(0,"choices"))
q=A.wU(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.o(t.N,t.ie)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gH(),k=k.gq(k);k.m();){n=k.gn()
m=A.Am(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.oQ(r,q,p)},
wU(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.o(s,s)
for(s=a.gH(),s=s.gq(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.y(q.b))}return r},
Am(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aJ(r)||r<1||!A.aJ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cu(s,r,q,p)},
oP:function oP(a,b,c){this.a=a
this.b=b
this.c=c},
oR:function oR(){},
oS:function oS(){},
oT:function oT(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk(a){var s,r,q=A.o(t.N,t.z)
for(s=a.gH(),s=s.gq(s);s.m();){r=s.gn()
q.k(0,B.c.p(r.a),r.b)}return q},
qr:function qr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
qs:function qs(){},
qt:function qt(){},
ey:function ey(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qu:function qu(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
qv:function qv(){},
qw:function qw(){},
lQ:function lQ(){},
zD(a){var s,r,q,p
if(!t.f.b(a)||!J.a2(a.h(0,"version"),1))throw A.d(B.eh)
s=new A.lT()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.vu(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dv(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aZ(B.aW,new A.lR(a),new A.lS()))},
cs:function cs(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
lT:function lT(){},
lR:function lR(a){this.a=a},
lS:function lS(){},
m2:function m2(a,b){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0},
m4:function m4(a){this.a=a},
m3:function m3(a,b){this.a=a
this.b=b},
zJ(a){var s
if(!t.f.b(a)||!J.a2(a.h(0,"version"),1))throw A.d(B.eL)
s=new A.mf()
return new A.dw(s.$1$2(B.aV,a.h(0,"output"),t.cK),s.$1$2(B.aR,a.h(0,"dynamicRange"),t.cS),s.$1$2(B.aQ,a.h(0,"reverb"),t.f1),s.$1$2(B.aP,a.h(0,"ducking"),t.oA))},
cj:function cj(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mf:function mf(){},
mg:function mg(a,b){this.a=a
this.b=b},
mh:function mh(a){this.a=a},
mz:function mz(a){this.a=a
this.b=null},
zO(a,b,c){var s,r,q=b.a
if(B.b.bb(q).length===0||B.b.bb(b.c).length===0)A.i(B.eV)
s=b.c
r=A.B(a,"button","brush-button brush-state-normal",s)
r.id=q
r.setAttribute("aria-label",s)
r.setAttribute("data-brush-kind",b.b.b)
r.setAttribute("data-brush-state","normal")
r.type="button"
r.disabled=!1
r.addEventListener("click",A.Z(new A.mC(c)))
return r},
mC:function mC(a){this.a=a},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
wr(a){var s=!1
if(a.length!==0)if(!B.cS.u(0,a))s=B.jT.u(0,a)||B.jL.u(0,a)||!B.b.W(a,"Mouse")
return s},
CO(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.G(a,A.q(a).i("G<1,2>")).gq(0);s.m();){r=s.d
q=r.a
p=A.aq(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Dq(a){var s,r,q=A.o(t.N,t.a),p=a==null?null:new A.G(a,A.q(a).i("G<1,2>"))
p=J.T(p==null?A.e([],t.cj):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
f2(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fa(B.i1,s,r)
if(b!=null)q.J(0,b)
q.J(0,A.Dq(a))
s=new A.f1(g,d,h,e,f,c,A.b_(A.CO(q),s,r))
s.D()
return s},
zY(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.bP)
s=a.h(0,"version")
r=J.e1(s)
if(!r.Z(s,1)&&!r.Z(s,2))throw A.d(B.bP)
q=A.o(t.N,t.a)
for(j=j.a(a.h(0,k)).gH(),j=j.gq(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.eB)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.zw(m,new A.mO())){o=A.e([],r)
for(l=J.T(m);l.m();)o.push(A.y(l.gn()))
q.k(0,n,o)}else throw A.d(B.el)}j=A.aI(a.h(0,"horizontalSensitivity"))
r=A.aI(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.f2(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
vw(a){var s,r,q,p=t.N,o=A.o(p,t.a)
for(s=a.gH(),s=s.gq(s);s.m();){r=s.gn()
q=r.a
r=A.K(r.b,p)
o.k(0,q,r)}return o},
vN(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
vY(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
f1:function f1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mQ:function mQ(){},
mP:function mP(a){this.a=a},
mR:function mR(){},
mS:function mS(){},
mT:function mT(){},
mO:function mO(){},
dx:function dx(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.c=b},
j_:function j_(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
zX(a){var s=t.N,r=t.m
r=new A.j0(A.f2(null,null,!1,1,!1,!1,2,1),A.o(s,r),A.o(s,r),A.o(s,r),a,A.a(a.createElement("div")))
r.aT(a)
r.k_(a)
return r},
j0:function j0(a,b,c,d,e,f){var _=this
_.r=_.f=null
_.w=a
_.x=$
_.y=b
_.z=c
_.Q=d
_.at=_.as=null
_.a=e
_.b=f
_.e=_.d=_.c=null},
mM:function mM(a,b){this.a=a
this.b=b},
mN:function mN(a){this.a=a},
mL:function mL(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b,c){this.a=a
this.b=b
this.c=c},
mK:function mK(a,b,c){this.a=a
this.b=b
this.c=c},
A3(a){var s=t.kG,r=A.e([],s)
s=A.e([],s)
s=new A.n_(A.B(a,"div","door",null),a,r,s)
s.k5(a)
return s},
n_:function n_(a,b,c,d){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=$
_.w=c
_.x=d
_.at=_.as=_.Q=_.z=_.y=null
_.ax=!1},
n0:function n0(a,b){this.a=a
this.b=b},
n1:function n1(a){this.a=a},
n2:function n2(a,b){this.a=a
this.b=b},
n4:function n4(a,b){this.a=a
this.b=b},
n3:function n3(a,b){this.a=a
this.b=b},
Ad(a){var s=new A.n7(a,A.a(a.createElement("div")))
s.aT(a)
s.k6(a)
return s},
n7:function n7(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
n8:function n8(a){this.a=a},
wz(a,b,c,d,e,f,g,h){return new A.nz(d,f,h,e,a,g,c,b)},
d8:function d8(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
nz:function nz(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
wA(a){var s
if(!t.f.b(a)||!J.a2(a.h(0,"version"),1))throw A.d(B.eK)
s=new A.dD(1,B.a.aZ(B.ci,new A.nL(a),new A.nM()),A.y(a.h(0,"renderScale")),A.U(a.h(0,"dynamicResolution")),A.y(a.h(0,"frameTarget")),A.y(a.h(0,"antialiasing")),A.y(a.h(0,"textureQuality")))
s.D()
return s},
js(a,b){var s=b==null?B.aN:b
return new A.nN(s,a==null?B.aN:a)},
yT(a,b){var s,r,q
a.D()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dI(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dI("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hh(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.c6&&b.a<2){q=q.hi(B.aM)
B.a.l(s,"High preset was reduced to Standard")}return new A.nG(q,A.al(s,t.N))},
ck:function ck(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nL:function nL(a){this.a=a},
nM:function nM(){},
nN:function nN(a,b){this.a=a
this.b=b},
nF:function nF(a,b){this.a=a
this.b=b},
nG:function nG(a,b){this.a=a
this.b=b},
Aq(a){var s=new A.jr(A.o(t.N,t.m),B.aN,a,A.a(a.createElement("div")))
s.aT(a)
s.k7(a)
return s},
jr:function jr(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
nJ:function nJ(a){this.a=a},
nK:function nK(a){this.a=a},
nI:function nI(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function nH(a){this.a=a},
Ar(a){var s=new A.nO(a,A.a(a.createElement("div")))
s.aT(a)
s.k8(a)
return s},
nO:function nO(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
nP:function nP(a){this.a=a},
om:function om(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
on:function on(a){this.a=a},
oo:function oo(a){this.a=a},
op:function op(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(){},
or:function or(){},
B(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
y0(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.kG)
for(s=t.m,r=0;r<A.c(p.length);++r){q=A.k(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hl:function hl(){},
b9:function b9(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(){},
p4:function p4(){},
bQ:function bQ(a,b,c){this.a=a
this.c=b
this.d=c},
p2:function p2(a){this.a=a},
p5:function p5(a){this.a=a},
cJ:function cJ(a,b){this.a=a
this.b=b},
p6:function p6(a,b){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
p7:function p7(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
ph:function ph(a){this.a=a
this.b=null},
Ba(a){var s=new A.pN(a,A.a(a.createElement("div")))
s.aT(a)
s.kd(a)
return s},
pN:function pN(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pO:function pO(a,b){this.a=a
this.b=b},
pP:function pP(a){this.a=a},
pQ(a,b){var s=t.N,r=t.m
r=new A.hy(b,A.o(s,r),A.o(s,r),A.o(s,t.aL),A.o(s,r),$.z6(),B.ah,A.o(s,r),A.o(s,r),B.aE,A.o(s,r),a,A.a(a.createElement("div")))
r.aT(a)
r.ke(a,b)
return r},
hy:function hy(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
qb:function qb(a){this.a=a},
qc:function qc(a){this.a=a},
qd:function qd(a,b){this.a=a
this.b=b},
qe:function qe(a){this.a=a},
qf:function qf(a){this.a=a},
q5:function q5(a,b){this.a=a
this.b=b},
q6:function q6(a,b){this.a=a
this.b=b},
q4:function q4(a){this.a=a},
q7:function q7(a){this.a=a},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(a,b){this.a=a
this.b=b},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
pX:function pX(a){this.a=a},
pY:function pY(a){this.a=a},
pZ:function pZ(a){this.a=a},
q_:function q_(a){this.a=a},
q0:function q0(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a){this.a=a},
pW:function pW(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
pU:function pU(a){this.a=a},
pV:function pV(a){this.a=a},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qh(a){return B.a.aZ(B.C,new A.qi(a),new A.qj(a))},
Bb(){var s,r,q=A.o(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
di(a,b){var s=t.z
s=A.fa(A.Bb(),s,s)
if(a!=null)s.J(0,a)
s=new A.qg(b,A.b_(s,t.N,t.K))
s.kf(a,b)
return s},
x4(a){var s,r=t.f
if(!r.b(a)||!J.a2(a.h(0,"version"),1))throw A.d(B.eZ)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.et)
return A.di(A.aM(s,t.N,t.K),A.c(a.h(0,"version")))},
bl:function bl(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
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
qi:function qi(a){this.a=a},
qj:function qj(a){this.a=a},
qg:function qg(a,b){this.a=a
this.b=b},
vd(a,b){var s=b==null?A.di(null,1):b
return new A.qk(s,a==null?A.di(null,1):a)},
Bc(a,b){var s,r,q,p,o,n,m,l=A.o(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.hp(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cU(r)
J.bA(l,s.a,r)}catch(n){if(!(A.ae(n) instanceof A.H))throw n}}m=A.di(l,1)
return A.vd(m,m)},
qk:function qk(a,b){this.a=a
this.b=b},
Bd(a){var s=new A.qo(a,A.a(a.createElement("div")))
s.aT(a)
s.kg(a)
return s},
qo:function qo(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
zG(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.od)
for(s=a.d,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gH(),n=n.gq(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.ch(p+m+":"+k,m,l.a,l.b,j))}}B.a.S(i,new A.m0())
return new A.m_(A.al(i,t.ot),A.a5(t.N))},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m_:function m_(a,b){this.a=a
this.b=b},
m1:function m1(){},
m0:function m0(){},
Bt(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.l8
s=t.L
r=A.o(s,t.kz)
q=A.q(a).i("ac<1>")
p=A.K(new A.ac(a,q),q.i("p.E"))
B.a.a0(p)
for(q=p.length,o=t.ln,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gH(),j=j.gq(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b3(new A.be(B.kR,k+" has an out-of-range authored day "+h+"."))
g=A.Bs(k,h,i.b,m)
if(g instanceof A.b3)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bI(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.lH
e=A.o(a,q)
for(o=a0.ax,o=new A.ag(o,o.r,o.e,A.q(o).i("ag<2>"));o.m();){n=o.d
J.fQ(e.c8(n.b,new A.qS()),n)}o=A.b_(a0.at,a,t.fx)
q=A.o(a,q)
for(n=new A.G(e,e.$ti.i("G<1,2>")).gq(0),m=t.iC;n.m();){d=n.d
j=d.a
c=A.aq(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.kB(new A.kA(r,A.a5(a),A.a5(s),o,q,A.e([],t.bl),B.M,A.oQ(b,b,b)))},
Bs(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.o(t.kM,t.j9)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.d7,p=0;p<3;++p){o=B.ce[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gH(),k=k.gq(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.W(h,m))continue
g=A.fe(B.b.bp(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b3(new A.be(B.kS,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cl
B.a.l(l,new A.bV(g,i.b,f))}if(l.length===0)continue
B.a.S(l,new A.qP())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b3(new A.be(B.da,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b3(new A.be(B.da,a+" day "+s+" has no authored tiers."))
return new A.l3(c)},
kA:function kA(a,b,c,d,e,f,g,h){var _=this
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
qV:function qV(a){this.a=a},
qU:function qU(a){this.a=a},
qW:function qW(a){this.a=a},
qQ:function qQ(a){this.a=a},
qR:function qR(){},
qT:function qT(a){this.a=a},
qS:function qS(){},
qO:function qO(a){this.a=a},
qN:function qN(a){this.a=a},
qP:function qP(){},
kB:function kB(a){this.a=a},
l3:function l3(a){this.a=a},
Et(a){var s,r,q,p=A.a5(t.N)
for(s=new A.G(a,A.q(a).i("G<1,2>")).gq(0);s.m();){r=s.d
for(q=r.b.gav(),q=q.gq(q);q.m();)if(q.gn().gY().M(0,new A.ub())){p.l(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.a0(s)
return s},
Es(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.aq(b,!0,s)
B.a.a0(r)
q=new A.fo()
q.d4((a^913741)>>>0)
p=q.aH(4)
if(!(p>=0&&p<4))return A.f(B.cb,p)
o=B.cb[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.aq(r,!0,s)
B.a.d2(m,q)
s=A.hE(m,0,A.e0(n,"count",t.S),A.I(m).c).bK(0)
B.a.a0(s)
return s},
ub:function ub(){},
xg(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aJ(r)||!A.aJ(q)||!A.aJ(p)||r<1||q<0||q>23||p<0)return null
return new A.bI(s,r,q,p)},
Br(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a5(t.N)
for(s=t.j,q=J.T(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a5(t.L)
for(s=J.T(s.a(a.h(0,j)));s.m();){n=A.xg(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.zF(m)
if(!s&&l==null)return i
return new A.kC(r,o,l)},
zF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.xg(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aJ(p))if(!(p<0))if(A.c_(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.cF(new A.O(B.ce,t.nw.a(new A.lX(r)),t.na),t.kM)
j=A.cF(new A.O(B.i_,t.bQ.a(new A.lY(q)),t.cB),t.nq)
l=o==null
i=l?g:A.cF(new A.O(B.ha,t.hg.a(new A.lZ(o)),t.bn),t.lD)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.iH(s,k,j,p,i,n,A.aQ(m))},
bC:function bC(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cS:function cS(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kC:function kC(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(){},
iH:function iH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lX:function lX(a){this.a=a},
lY:function lY(a){this.a=a},
lZ:function lZ(a){this.a=a},
kz:function kz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
qX:function qX(){},
b3:function b3(a){this.a=a},
ky:function ky(a){this.a=a},
kw:function kw(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
DD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.iE())return f
n=A.dQ().gaR()
m=n.h(0,"captureSeed")
l=A.fe(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.fe(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.hp(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aF(s,f)
if(t.f.b(q)){m=t.N
p=A.o(m,m)
for(m=q.gH(),m=m.gq(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.jN.u(0,o.b))return f
J.bA(p,A.y(o.a),A.y(o.b))}r=p}else return f}catch(g){if(A.ae(g) instanceof A.H)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.jS.u(0,i))return f
if(h!=null&&!B.jQ.u(0,h))return f
return new A.r8(l,k,j,h,r)},
lE(a){var s=$.bh
if(s===a&&B.b.u(A.y(a.b.className),"open"))return
if(s!=null)s.a6()
$.bh=a
if(a===$.cW.j())$.fO().iT("gameplay.viewport")
else $.fO().nW(A.yi(a))
s=$.aG.j()
s.w=!1
s.b4()
$.dX=0
a.bF()},
yg(a,b,c){var s,r,q
$.iC=!0
s=$.bh
if(s!=null)s.a6()
$.bh=a
s=$.fO()
if(s.a.a.length===0)s.iT(c)
r=A.K(s.a.a,t.lf)
r.push(new A.df(b,B.a6,c))
q=s.a
s.a=new A.dJ(r,q.b,q.c)
s.kK(b)
s=$.aG.j()
s.w=!1
s.b4()
$.dX=0
a.bF()
$.iC=!1},
fH(a){var s,r,q,p,o,n,m,l=null
if($.iC)return
$.iC=!0
a.a6()
$.bh=null
s=$.fO().m_()
$.iC=!1
r=s.a
if(r===B.cK){$.dX=0
r=$.aG.j()
r.b4()
r.w=!0
q=A.k(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.cJ)return
r=s.c.a
r=r.length===0?l:B.a.gU(r)
p=r==null?l:r.a
A:{if(B.b_===p){r=$.cW.j()
break A}if(B.b0===p){r=$.it.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bh=r
n=$.aG.j()
n.w=!1
n.b4()
$.dX=0
r.bF()
m=o==null?l:A.k(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
tZ(a){if($.bh===a&&B.b.u(A.y(a.b.className),"open"))a.a6()
else A.lE(a)},
eM(a){var s
if($.iC)return
if($.bh===a)$.bh=null
if(a===$.cW.j())$.fO().ca()
else $.fO().mS(A.yi(a))
$.dX=0
s=$.aG.j()
s.b4()
s.w=!0},
yi(a){if(a===$.cW.j())return B.cB
if(a===$.it.j())return B.a6
if(a instanceof A.hy)return B.a6
if(a instanceof A.jr)return B.a6
if(a instanceof A.j0)return B.a6
if(a===$.ir.j())return B.iU
if(a===$.rQ.j())return B.iV
if(a===$.iq.j())return B.iW
if(a===$.ip.j())return B.iY
return B.iX},
t4(a,b){var s
a.snK(new A.t5())
a.snM(new A.t6())
a.snL(new A.t7())
a.snH(new A.tc())
a.snJ(new A.td())
a.snV(new A.te())
a.snQ(new A.tf())
a.snP(new A.tg())
a.sb_(b?new A.th(a):new A.ti(a))
a.sb0(b?new A.tj(a):new A.t8(a))
s=a.f
if(s===B.y)a.snA(new A.t9())
if(s===B.z){a.snz(new A.ta())
a.snO(new A.tb())}},
CM(){var s=$.fy.j()
s.seu(new A.t1())
s.sb_(new A.t2())
s.sb0(new A.t3())},
Du(){var s,r,q,p,o,n=null
try{n=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aF(n,null)
if(!t.f.b(r)||!J.a2(r.h(0,"version"),1))A.i(B.eU)
q=A.wA(r.h(0,"requested"))
$.tG=A.js(A.wA(r.h(0,"effective")),q)}catch(s){$.tG=A.js(null,null)}p=$.wg().a
o=A.yT(p,A.y4())
r=o.a
$.tG=A.js(r,p)
$.fy.j().eU(p,r,o.b)
A.yl()},
y4(){var s,r,q,p,o=$.cX.j().gbh().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.W(p,"max-samples-"))continue
r=A.fe(B.b.bp(p,12),null)
if(r==null)r=1}return new A.nF(r,B.a.u(o,"disjoint-timer-query"))},
yl(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.ao($.wg().B(),null))}catch(s){}},
CL(){var s=$.io.j()
s.seu(new A.rZ())
s.sb_(new A.t_())
s.sb0(new A.t0())},
Dt(){var s,r,q,p,o,n=null
try{n=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.vB=A.zY(B.k.aF(n,null))}catch(s){$.vB=A.f2(null,null,!1,1,!1,!1,2,1)}r=$.io.j()
q=r.w=$.lN()
r.x=new A.j_(q)
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
r.dw()
$.aG.j().eS($.lN().gcA())
r=$.aG.j()
q=$.lN()
p=r.x
p.a=q.f
p.eC()
r.b4()
A.yk()},
yk(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.ao($.lN().B(),null))}catch(s){}},
Ds(){var s,r=null
try{r=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.iw=A.zJ(B.k.aF(r,null))}catch(s){$.iw=B.aE}$.fw.j().jm($.iw)
A.yj()
A.vt()},
yj(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.ao($.iw.B(),null))}catch(s){}},
vt(){var s=$.bu
if(s==null)return
s.jw($.iw)},
Dr(){var s,r=null
try{r=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eL=A.zD(B.k.aF(r,null))}catch(s){$.eL=B.ah}$.eK.j().eR($.eL)
A.vK()
A.rV()},
vK(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.ao($.eL.B(),null))}catch(s){}},
rV(){var s,r,q=$.eL,p=$.tY,o=$.vW,n=q.d
if(n==null)n=1
if(n<0.8||n>2)A.i(B.er)
s=q.b
p=s==null?p:s
s=q.c
o=s==null?o:s
q=q.e===!0
$.lG=p
s=$.bJ.j()
s.f=$.lG?0.5:1
r=A.k(A.a(v.G.document).documentElement)
s=r==null
if(!s)A.U(A.a(r.classList).toggle("reduced-motion",p))
if(!s)A.U(A.a(r.classList).toggle("photosensitivity-safe",o))
if(!s)A.U(A.a(r.classList).toggle("captions-enabled",q))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.w(n*100)+"%")
s=$.C.j()
s.setAttribute("data-accessibility-reduced-motion",""+p)
s.setAttribute("data-accessibility-photosensitivity-safe",""+o)
s.setAttribute("data-accessibility-ui-scale",A.w(n))
s.setAttribute("data-accessibility-captions",""+q)
if($.xN){p=$.bq.j()
p.c=q
if(!q){q=p.b
q.textContent=""
q.className="caption-cue"}}},
D6(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.tK(r,q)
r.addEventListener("change",A.Z(new A.tI(s)))
q.addEventListener("change",A.Z(new A.tJ(s)))},
ui(){var s=0,r=A.bv(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$ui=A.by(function(e2,e3){if(e2===1){o.push(e3)
s=p}for(;;)switch(s){case 0:d8=v.G
d9=A.k(A.a(d8.document).getElementById("game"))
if(d9==null){s=1
break}$.C.b=d9
$.vD=A.k(A.a(d8.document).getElementById("fps"))
$.bY.b=$.zl().ce(A.dQ().gaR().h(0,"renderer"))
A.D7()
b9=$.C.j()
c0=A.c(A.a(d8.window).innerWidth)>0?A.c(A.a(d8.window).innerWidth):800
b9.width=c0
c0=$.C.j()
b9=A.c(A.a(d8.window).innerHeight)>0?A.c(A.a(d8.window).innerHeight):600
c0.height=b9
n=A.k(d9.getContext("webgl2"))
if(n==null){$.bY.b=B.bA.hl($.bY.j(),B.dq)
g=B.aG.mN($.bY.j())
g.b9()
$.cX.b=g
A.yn()
A.dY("no-webgl2")
d8=A.k(A.a(d8.document).getElementById("credits"))
if(d8!=null)d8.textContent="this browser has no webgl2."
s=1
break}try{if($.bY.j().a===B.V){b9=t.dg
c0=t.N
c1=t.hL
c2=t.ob
c3=t.fP
c4=new A.i5(n,A.c($.C.j().width),A.c($.C.j().height),A.e([],b9),A.o(c0,t.l0),A.e([],t.jj),A.o(c0,c1),A.o(c0,c2),A.o(c0,c1),A.o(c0,c2),A.e([],b9),A.o(c0,c1),A.o(c0,c2),A.o(c0,c0),A.o(t.S,c3),A.o(c0,t.bS),A.e([],t.jU),B.hy,A.o(c0,t.lu),A.o(c0,c0),A.o(c0,c3),A.o(c0,c3),B.f8,B.j0)}else c4=new A.fm(n,A.c($.C.j().width),A.c($.C.j().height),A.dQ().gaR().h(0,"render")==="legacy",$.bY.j().d,$.bY.j().e)
m=c4
$.bw=m instanceof A.i5?m:null
$.lz=m instanceof A.fm?m:null
b9=B.aG.dL($.bY.j(),m)
b9.b9()
$.cX.b=b9}catch(e1){l=A.ae(e1)
k=A.cr(e1)
b9=$.bY.j()
$.bY.b=B.bA.hl(b9,B.dp)
$.lz=new A.fm(n,A.c($.C.j().width),A.c($.C.j().height),A.dQ().gaR().h(0,"render")==="legacy",!0,$.bY.j().e)
b9=B.aG.dL($.bY.j(),$.lz)
b9.b9()
$.cX.b=b9
$.C.j().setAttribute("data-renderer-error",A.w(l))
if($.iE())$.C.j().setAttribute("data-renderer-error-stack",A.w(k))}A.yn()
p=4
A.dY("initializing")
$.bJ.b=new A.mD(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.tY=A.U(A.a(A.a(d8.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.vW=A.U(A.a(A.a(d8.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.lG=$.tY
b9=$.bJ.j()
b9.f=$.lG?0.5:1
b9=A.a(d8.window)
c0=t.N
c1=t.s
c2=t.a
c1=A.Av(A.P(["moveForward",A.e(["KeyW"],c1),"moveBack",A.e(["KeyS"],c1),"moveLeft",A.e(["KeyA"],c1),"moveRight",A.e(["KeyD"],c1),"interact",A.e(["KeyE"],c1),"secondary",A.e(["KeyQ"],c1),"run",A.e(["ShiftLeft"],c1),"crouch",A.e(["ControlLeft"],c1),"rotate",A.e(["KeyR"],c1),"reach",A.e(["KeyF"],c1),"journal",A.e(["KeyJ"],c1),"sleep",A.e(["KeyL"],c1),"pause",A.e(["Escape"],c1)],c0,c2))
c3=A.a(b9.document)
c1=new A.jy(c3,A.a5(c0),A.a5(c0),new A.og(),c1)
b9.addEventListener("keydown",A.Z(c1.glb()))
b9.addEventListener("keyup",A.Z(c1.gld()))
b9.addEventListener("mousemove",A.Z(c1.glh()))
c3.addEventListener("pointerlockchange",A.Z(c1.glf()))
$.aG.b=c1
$.xJ.b=new A.jw(A.e([],t.oX),t.lv)
c1=$.C.j()
b9=A.c(A.a(d8.window).innerWidth)>0?A.c(A.a(d8.window).innerWidth):800
c1.width=b9
b9=$.C.j()
c1=A.c(A.a(d8.window).innerHeight)>0?A.c(A.a(d8.window).innerHeight):600
b9.height=c1
A.dY("renderer")
if($.bY.j().a===B.b4){b9=$.lz
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.fG=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.dY("text")
b9=$.fP()
s=7
return A.am(b9.c6(),$async$ui)
case 7:j=b9.oy()
i=A.Bt(j)
if(!(i instanceof A.kB)){h=t.cq.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aH.b=i.a
$.ls.b=A.zG(j)
g=A.o(c0,c2)
for(c1=t.j,c6=0;c6<5;++c6){f=B.x[c6]
c2=A.y(f)
c3=b9.c
c3===$&&A.h()
c7=c3.h(0,c2)
c2=c1.b(c7)?A.aq(c7,!0,c0):B.n
J.bA(g,f,c2)}e=A.Bu(g)
$.vs.b=new A.mA(B.dQ)
d=$.vs.j().o1(new A.uj(e))
c8=$.uR()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.bF.aH(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.d.aO(c2.c)
if(c2==null)c2=10
if(b9<1)A.i(A.ao(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.i(A.ao(c2,"startHour","must be 0 through 23"))
if(!isFinite(480))A.i(A.ao(480,"daySeconds","must be finite and > 0"))
c9=new A.jk(b9,480)
c9.b=c2
d0=A.wL(e)
g=A.wx(42,g,A.wB(42),c9,d0,A.wt(6,16,d0,null,6,B.hz,c9),new A.j8(0,0,0,!1),A.oQ(null,null,null))}else{g=d.a
g.toString
g=A.wy(g,e)}$.W.b=g
$.aH.j().y=$.W.j().z
g=A.al(A.D4($.W.j().b),t.av)
$.rR.b=new A.qZ(g)
g=$.uS()
b9=d.a
g.eE(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.cX.j().b3(A.v9($.W.j().gex()))
if(d.b!=null){g=d.b
g.toString
A.fI(g)}g=$.aH.j()
b9=A.Es($.W.j().b,A.Et(j.b))
g.sjO(A.jK(b9,A.I(b9).c))
A.dY("house")
$.X.b=$.W.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.r)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a2(b,"open")||J.a2(b,"closed")){a3=J.a2(b,"open")
for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.r)(c2),++d1){a5=c2[d1]
a5.sjG(a3)}}}a6=$.we()
if(a6!=null&&a6.length!==0)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.r)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.wf()}}g=$.bw
if(g!=null)g.lZ($.X.j())
$.bg.b=$.W.j().d
g=$.zn()
$.vX=$.vM=$.vR=g
a9=g.an(0,new A.b(0,1.3499999999999999,0))
$.is.b=new A.iU(a9,J.wh(a9,new A.b(0,1.2000000000000002,0)))
$.fx.b=new A.na()
$.bK.b=A.x1()
$.au="hall"
g=d.a
b0=A.AR(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.nk($.X.j())){g=b0.b
$.vX=$.vM=$.vR=g
$.c0=b0.c
$.dZ=b0.d
$.au=b0.a
b1=g.an(0,new A.b(0,1.3499999999999999,0))
g=$.is.j()
g.sm0(b1)
g.b=J.wh(b1,new A.b(0,1.2000000000000002,0))
g=$.is.j()
b9=$.X.j()
c2=b0.e
c3=b0.f
g.om($.au,$.eP(),b9,c3,c2)
A.fI("restored position")}g=A.Ba(A.a(d8.document))
g.snB(new A.uk())
g.sb_(new A.ul())
g.sb0(new A.uw())
$.it.b=g
g=A.a(d8.document)
b9=A.a(g.createElement("div"))
c2=new A.p6(g,b9)
c2.aT(g)
b9.setAttribute("aria-label","Pause menu")
A.a(b9.appendChild(A.B(g,"h1","journal-title","Paused")))
A.a(b9.appendChild(A.B(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.B(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.br(g,d2,B.cC,"resume")
c2.br(g,d2,B.cD,"settings")
c2.br(g,d2,B.cE,"controls")
c2.br(g,d2,B.cF,"save now")
c2.br(g,d2,B.cG,"help")
c2.br(g,d2,B.cH,"back")
A.a(b9.appendChild(d2))
c2.snR(new A.uz())
c2.sb_(new A.uA())
c2.snT(new A.uB())
c2.snF(new A.uC())
c2.snS(new A.uD())
c2.snI(new A.uE())
c2.sb0(new A.uF())
$.cW.b=c2
c2=$.W.j().e
b9=$.bg.j()
$.W.j()
$.lt.b=new A.oe(c2,b9)
b9=A.a(d8.document)
c2=$.W.j().e
g=$.bg.j()
c3=$.lt.j()
d3=A.a(b9.createElement("div"))
c3=new A.om(c2,g,c3,b9,d3)
c3.aT(b9)
d3.setAttribute("aria-label","The Journal")
A.a(d3.appendChild(A.B(b9,"div","journal-title","The Journal")))
d4=A.B(b9,"div","journal-pages",null)
g=A.B(b9,"div","page page-left",null)
c3.y!==$&&A.J()
c3.y=g
c2=A.B(b9,"div","page page-right",null)
c3.z!==$&&A.J()
c3.z=c2
A.a(d4.appendChild(g))
A.a(d4.appendChild(c2))
A.a(d3.appendChild(d4))
A.a(d3.appendChild(c3.kt()))
d5=A.B(b9,"div","tape-roll",null)
A.a(d5.style).setProperty("width","8rem")
c2=A.B(b9,"div","tape-fill",null)
c3.as!==$&&A.J()
c3.as=c2
A.a(d5.appendChild(c2))
A.a(d3.appendChild(d5))
d6=A.B(b9,"div","consult",null)
A.a(d6.appendChild(A.B(b9,"div","consult-label","Cite an entry")))
c2=A.B(b9,"div","entry-picker",null)
c3.at!==$&&A.J()
c3.at=c2
g=A.B(b9,"div","consult-result",null)
c3.ax!==$&&A.J()
c3.ax=g
A.a(d6.appendChild(c2))
A.a(d6.appendChild(g))
A.a(d3.appendChild(d6))
d7=A.k(b9.documentElement)
if(t.m.b(d7)){A.a(d7.style).setProperty("--shake-max-deg","3deg")
A.a(d7.style).setProperty("--shake-max-px","2px")}$.ir.b=c3
$.ir.j().sb0(new A.um())
g=A.a(d8.document)
b9=A.B(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.k(g.body).appendChild(b9))
$.xK.b=new A.ph(b9)
b9=A.a(d8.document)
g=A.B(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.k(b9.body).appendChild(g))
$.xI.b=new A.mz(g)
g=A.a(d8.document)
b9=A.B(g,"div","ambient-notice",null)
c2=A.B(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.a(A.k(g.body).appendChild(b9))
A.a(A.k(g.body).appendChild(c2))
$.bq.b=new A.m2(b9,c2)
$.xN=!0
c2=A.A3(A.a(d8.document))
c2.snC(A.EJ())
c2.snE(A.EM())
c2.snD(A.EL())
c2.snN(A.EK())
$.aF.b=c2
c2=d.a
b2=A.Br(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aH.j().eE(b2))A.DH()
g=$.ls.j()
b9=d.a
g.on(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b3))for(g=J.T(b3);g.m();){b4=g.gn()
if(A.aJ(b4))$.u0.l(0,b4)}g=A.Bd(A.a(d8.document))
g.snU(new A.un())
g.sb0(new A.uo())
$.rQ.b=g
g=A.Ar(A.a(d8.document))
g.sb0(new A.up())
$.iq.b=g
$.fz.b=A.pQ(A.a(d8.document),null)
$.iu.b=A.pQ(A.a(d8.document),B.F)
$.eK.b=A.pQ(A.a(d8.document),B.z)
A.t4($.fz.j(),!1)
A.t4($.iu.j(),!0)
A.t4($.eK.j(),!0)
A.Dr()
A.D6()
$.fy.b=A.Aq(A.a(d8.document))
A.CM()
A.Du()
$.fw.b=A.pQ(A.a(d8.document),B.y)
A.t4($.fw.j(),!0)
A.Ds()
$.io.b=A.zX(A.a(d8.document))
A.CL()
A.Dt()
g=A.Ad(A.a(d8.document))
g.sb0(new A.uq())
g.snG(new A.ur())
$.ip.b=g
g=d.a
b5=A.Af(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.ym(b5)
b6=$.fG
if(b6!=null){A.dY("world")
g=$.X.j()
b9=b6
c0=new A.pD(g,b9,A.o(c0,t.J))
c0.kc(g,b9)
$.fC=c0}g=B.b.u(A.y(A.a(A.a(d8.window).location).search),"shaders=live")
$.yC=g
if(g){g=$.fG
if(g!=null)g.bI()}A.yq()
A.a(d8.window).addEventListener("resize",A.Z(new A.us()))
A.a(d8.window).addEventListener("keydown",A.Z(new A.ut()))
A.a(d8.window).addEventListener("keyup",A.Z(new A.uu()))
A.a(d8.window).addEventListener("keydown",A.Z(new A.uv()))
A.a(d8.window).addEventListener("click",A.Z(new A.ux()))
$.C.j().addEventListener("click",A.Z(new A.uy()))
A.fE()
A.dY("raf")
A.c(A.a(d8.window).requestAnimationFrame(A.Z(A.yS())))
p=2
s=6
break
case 4:p=3
e0=o.pop()
b7=A.ae(e0)
b8=A.cr(e0)
A.tT(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$ui,r)},
D7(){var s=v.G
A.a(s.window).addEventListener("error",A.Z(new A.tL()))
A.a(s.window).addEventListener("unhandledrejection",A.Z(new A.tM()))},
dY(a){if($.vx===a)return
$.vx=a
$.C.j().setAttribute("data-boot-phase",a)},
yn(){var s,r,q=$.cX.j().gbh(),p=$.C.j(),o=A.dQ().gaR().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.k.ao(q.B(),null))
p=$.bw
s=p==null?null:p.x
if(s!=null)$.C.j().setAttribute("data-renderer-profile-fallback",s)
p=$.lz
r=p==null?null:p.y
if(r!=null)$.C.j().setAttribute("data-renderer-frame-submits",A.w(r))},
DA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(!$.iE())return
s=$.we()
if(s!=null&&s.length!==0){r=$.C.j()
q=$.wf()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.rR.j().en($.W.j().ga8().a)
r=$.C.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.uR()
o=q==null?b:q.e
if(o!=null)$.C.j().setAttribute("data-automation-capture-shutters",o)
$.C.j().setAttribute("data-automation-rain-window-visibility",B.d.cb(A.yp($.au),3))
r=$.C.j()
q=$.vx
n=$.au
m=$.eP()
l=t.N
m=A.P(["x",m.a,"y",m.b,"z",m.c],l,t.i)
k=$.c0
j=$.dZ
i=$.bh!=null||$.aF.j().ax
h=t.K
r.setAttribute("data-automation-player",B.k.ao(A.P(["schemaVersion",1,"phase",q,"roomId",n,"eye",m,"yaw",k,"pitch",j,"modal",i,"inputEnabled",$.aG.j().w,"day",$.W.j().ga8().a,"hour",$.W.j().ga8().b],l,h),b))
g=A.o(l,t.X)
for(r=$.X.j().c,q=r.length,f=0;f<r.length;r.length===q||(0,A.r)(r),++f){e=r[f]
n=e.ax
m=e.ay
k=e.z
j=n&&!m&&!k
g.k(0,e.a,A.P(["a",e.b,"b",e.c,"open",n,"locked",m,"sticks",k,"passable",j],l,h))}$.C.j().setAttribute("data-automation-portals",B.k.ao(g,b))
d=$.lv
r=!1
if(d!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.au
q=r.e.h(0,q)!=null
r=q}if(r){c=d.eH("cellar",$.au)
$.C.j().setAttribute("data-audio-transmission-cellar",B.k.ao(A.P(["sourceRoom","cellar","listenerRoom",$.au,"portalPath",c.a,"gainDb",c.b,"lowPassHz",c.c,"reachable",c.d],l,h),b))}else $.C.j().setAttribute("data-audio-transmission-cellar","unavailable")},
lI(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bK.j().a!==B.D){A.fI("save unavailable during rupture")
return}try{r=$.vs.j()
q=$.W.j()
p=t.N
o=t.z
s=A.o(p,o)
n=$.au
m=$.eP()
l=$.c0
k=$.dZ
j=$.is.j().d
j=j==null?null:j.a.a
i=$.is.j().d
J.bA(s,"player",new A.k1(n,m,l,k,j,i==null?null:i.b).B())
n=$.aH.j()
m=A.vc(n.b,p)
l=A.vc(n.c,t.L)
n=n.r
J.bA(s,"visitors",new A.kC(m,l,n==null?null:new A.iH(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.ls.j().b
n=A.K(n,A.q(n).c)
B.a.a0(n)
J.bA(s,"ambient",n)
n=A.K($.u0,A.q($.u0).c)
B.a.a0(n)
J.bA(s,"unverifiables",n)
J.bA(s,"inventoryInspections",$.uS().B())
n=$.vC
if(n!=null)J.bA(s,"ending",A.P(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.wD(q.c).B()
k=q.d
r.oB(A.x2(s,A.P(["houseSeed",n,"runSeed",m,"house",l,"time",A.P(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.fI(a)}catch(h){A.fI("save failed")}},
fI(a){var s=A.k(A.a(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.Ao(B.e0,new A.tW(s),t.H)},
tT(a,b){var s,r,q,p
A.dY("error")
s=A.w(a)
r=A.EZ(s,"\n"," ")
s=$.vD
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.k(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.C.j().setAttribute("data-boot-error",p)
if($.iE()&&!q)$.C.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
xR(){var s,r
if($.vv)return
$.vv=!0
s=$.bu
r=s==null
if(!r)s.ca()
if(!r)s.f_("music")
B.a.l($.cY,"arm")},
fE(){var s=0,r=A.bv(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fE=A.by(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.am(A.fD(),$async$fE)
case 2:o=null
q=4
s=7
return A.am(A.aX(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$fE)
case 7:n=b
i=A
s=8
return A.am(A.aX(A.a(n.json()),t.X),$async$fE)
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
if(k!=null&&typeof k==="string"){l=A.k(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.y(k)}s=9
return A.am(A.np(A.e([A.tO(o),A.tH(o)],t.iw),t.H),$async$fE)
case 9:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$fE,r)},
fD(){var s=0,r=A.bv(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fD=A.by(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.hu[g]
q=6
s=9
return A.am(A.aX(A.a(A.a(j.window).fetch(o)),i),$async$fD)
case 9:n=a0
s=10
return A.am(A.aX(A.a(n.text()),h),$async$fD)
case 10:m=a0
l=A.zK(B.k.aF(m,null))
f=$.X.b
if(f===$.X)A.i(A.a4(""))
l.eL(f)
f=$.C.b
if(f===$.C)A.i(A.a4(""))
f.setAttribute("data-house-manifest","validated")
f=$.C.b
if(f===$.C)A.i(A.a4(""))
f.setAttribute("data-house-manifest-source",o)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.ae(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.C.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.am(A.lB(),$async$fD)
case 11:s=12
return A.am(A.lC(),$async$fD)
case 12:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$fD,r)},
lB(){var s=0,r=A.bv(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lB=A.by(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.hc[c]
p=7
s=10
return A.am(A.aX(A.a(A.a(g.window).fetch(n)),f),$async$lB)
case 10:m=b1
s=11
return A.am(A.aX(A.a(m.text()),e),$async$lB)
case 11:l=b1
b=B.k.aF(l,null)
b=h.b(b)?b:A.dr("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dr("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aJ(a)?a:A.dr("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dr("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aq(a,!0,d):A.dr("assets is not a list")
a4=A.I(a3)
a5=a4.i("S<1,cD>")
a3=A.K(new A.S(a3,a4.i("cD(1)").a(A.EF()),a5),a5.i("a3.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aq(a,!0,d):A.dr("placements is not a list")
a5=A.I(a4)
a6=a5.i("S<1,cl>")
a4=A.K(new A.S(a4,a5.i("cl(1)").a(A.EG()),a6),a6.i("a3.E"))
a4.$flags=1
k=new A.nV(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.i(A.a4(""))
k.eL(a1)
$.ly=k
a1=$.bw
if(a1!=null)a1.jn(k)
a1=$.C.b
if(a1===$.C)A.i(A.a4(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.C.b
if(a1===$.C)A.i(A.a4(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.C.b
if(a1===$.C)A.i(A.a4(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ae(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.C.j().setAttribute("data-house-inventory","unavailable")
$.C.j().setAttribute("data-house-inventory-error",A.w(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$lB,r)},
lC(){var s=0,r=A.bv(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$lC=A.by(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.ly
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.hK[a4]
p=7
s=10
return A.am(A.aX(A.a(A.a(a1.window).fetch(m)),a2),$async$lC)
case 10:l=b5
s=11
return A.am(A.aX(A.a(l.text()),e),$async$lC)
case 11:k=b5
a5=B.k.aF(k,null)
a5=a0.b(a5)?a5:A.fB("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aq(a6,!0,a3):A.fB("emitters is not a list")
a8=A.I(a7)
a9=a8.i("S<1,cB>")
a7=A.K(new A.S(a7,a8.i("cB(1)").a(A.EX()),a9),a9.i("a3.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aJ(a6)?a6:A.fB("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.fB("sourceRef is not a string")
j=new A.o0(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.i(A.a4(""))
j.ow(a7,b2)
$.y6=j
i=A.o(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gH(),a9=a9.gq(a9);a9.m();){g=a9.gn()
J.bA(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.X.b
if(a7===$.X)A.i(A.a4(""))
a8=A.zH(i)
a9=new A.mc(a7,A.b_(B.cy,e,d),a8)
a9.jZ(a8,a7,B.cy)
$.lv=a9
a7=$.bu
if(a7!=null){a7.ch=a9
a7.bw()}a7=$.C.b
if(a7===$.C)A.i(A.a4(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.C.b
if(a7===$.C)A.i(A.a4(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.C.b
if(a7===$.C)A.i(A.a4(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.C.b
if(a7===$.C)A.i(A.a4(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ae(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.lv=null
$.C.j().setAttribute("data-audio-planner","unavailable")
$.C.j().setAttribute("data-house-soundscape","unavailable")
$.C.j().setAttribute("data-house-soundscape-error",A.w(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$lC,r)},
vA(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.T(t.a.b(s)?s:new A.bM(s,A.I(s).i("bM<1,j>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.y(q))}},
tH(a){var s=0,r=A.bv(t.H),q,p,o,n,m,l
var $async$tH=A.by(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.o(n,n)
n=a==null
A.vA(A.k(n?null:a.sfx),m,"")
A.vA(A.k(n?null:a.ir),m,"ir-")
q=A.k(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.y(p))
l=$
s=2
return A.am(A.mj(m,$.X.j()),$async$tH)
case 2:o=l.bu=c
o.ch=$.lv
o.bw()
A.Dv()
A.ys(o)
A.vt()
A.yt()
if($.vv){o.ca()
o.f_("music")}return A.bs(null,r)}})
return A.bt($async$tH,r)},
vT(a,b){var s
A.yF(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
DE(a){var s,r
try{s=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
xO(a,b){var s
if(a!=="brightness")return
s=A.k(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.w(B.d.N(b,0.6,1.4))+")")},
rW(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.k(A.a(v.G.document).documentElement)
if(r!=null)A.U(A.a(r.classList).toggle(s,b))},
yt(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.aI($.d0().a.cc(o)),k=A.U($.d0().a.cc(n)),j=A.U($.d0().a.cc(m))
for(s=[$.fz.j(),$.iu.j(),$.eK.j(),$.fw.j()],r=0;r<4;++r)s[r].eT(o,l)
A.xO(o,l)
for(s=[$.fz.j(),$.iu.j(),$.eK.j(),$.fw.j()],r=0;r<4;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.rW(n,k)
A.rW(m,j)},
vS(a,b){var s
A.yF(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
DC(a){var s,r
try{s=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
ys(a){var s,r,q,p,o,n,m,l,k,j=A.o(t.N,t.i)
for(s=0;s<5;++s){r=B.ht[s]
q=$.d0().a.b.h(0,r)
j.k(0,r,A.aI(q==null?A.i(A.m("setting missing from profile: "+r)):q))}p=A.U($.d0().a.cc("muted"))
o=A.U($.d0().a.cc("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bc(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.d0(o)
for(q=[$.fz.j(),$.iu.j(),$.eK.j(),$.fw.j()],n=j.$ti.i("ek<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.ek(j,j.r,j.e,n);m.m();){k=m.d
l.eT(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
xP(){var s=$.bu
if(s!=null)A.ys(s)
A.yt()},
Dv(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aQ(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aF(k,null)
if(!t.f.b(r)||!J.a2(r.h(0,"version"),1))A.i(B.es)
q=A.x4(r.h(0,"requested"))
$.yA=A.vd(A.x4(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.x
o=A.o(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.DC(l))}}r=A.o(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.DE(p))}}$.yA=A.Bc(o,r)
A.tQ()},
tQ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.ao($.d0().B(),null))}catch(s){}},
yF(a,b){var s,r,q,p,o,n,m
switch(A.qh(a).d.a){case 0:r=A.hp(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.d0()
q=s
A.qh(a).cU(q)
p=t.N
o=t.K
n=A.fa(r.a.b,p,o)
n.k(0,a,q)
r.a=A.di(n,1)
n=s
A.qh(a).cU(n)
o=A.fa(r.b.b,p,o)
o.k(0,a,n)
r.b=A.di(o,1)
A.tQ()}catch(m){if(!(A.ae(m) instanceof A.H))throw m}},
tO(a){var s=0,r=A.bv(t.H),q,p,o
var $async$tO=A.by(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.o(p,p)
A.vA(A.k(a==null?null:a.tex),o,"")
p=$.fG
p=p==null?null:p.aP(o)
if(p==null)p=A.uX(t.H)
q=$.bw
q=q==null?null:q.aP(o)
s=2
return A.am(A.np(A.e([p,q==null?A.uX(t.H):q],t.iw),t.H),$async$tO)
case 2:return A.bs(null,r)}})
return A.bt($async$tO,r)},
yq(){var s,r,q=v.G,p=A.c(A.a(q.window).innerWidth),o=A.c(A.a(q.window).innerHeight)
q=$.C.j()
s=p>0?p:800
q.width=s
s=$.C.j()
q=o>0?o:600
s.height=q
q=$.fG
if(q!=null)q.b1(A.c($.C.j().width),A.c($.C.j().height))
$.cX.j().b1(A.c($.C.j().width),A.c($.C.j().height))
q=$.bw
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.C.j().setAttribute("data-renderer-surface",r)},
DB(c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
A.aI(c5)
try{s=c5
if(!$.y5){$.vI=s
$.y5=!0}e=s
d=$.vI
if(typeof e!=="number")return e.an()
r=(e-d)/1000
$.vI=s
e=r
if(typeof e!=="number")return e.d_()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.am()
if(e>0.25)r=0.25
A.E1(r)
if(!$.vJ&&$.bh==null){e=$.dX
d=r
if(typeof d!=="number")return A.lL(d)
d=$.dX=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.d_()
c=c<10}else c=!1
if(!c)break
$.vM=$.eP()
if(!$.wd()){d=$.W.b
if(d===$.W)A.i(A.a4(""))
d.lT(0.008333333333333333)
d=$.zo()
c=$.W.b
if(c===$.W)A.i(A.a4(""))
c=c.ga8()
b=$.W.b
if(b===$.W)A.i(A.a4(""))
d=d.dD(c.a,b.ga8().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.r)(d),++a){p=d[a]
B.a.l($.cY,"clock:"+p.a)}d=$.zp()
c=$.W.b
if(c===$.W)A.i(A.a4(""))
c=c.ga8()
b=$.W.b
if(b===$.W)A.i(A.a4(""))
d=d.dD(c.a,b.ga8().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.r)(d),++a){o=d[a]
B.a.l($.cY,"service:"+o.a+":"+o.b)}}A.E4()
d=$.aH.b
if(d===$.aH)A.i(A.a4(""))
c=$.W.b
if(c===$.W)A.i(A.a4(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.aq(d,!1,e)
a0.$flags=3
a1=a0
B.a.G(d)
if(a1.length!==0){d=$.W.b
if(d===$.W)A.i(A.a4(""))
d.o2(a1)}A.E0()
A.E3()
A.E2()
A.E_(0.008333333333333333)
d=$.fx.b
if(d===$.fx)A.i(A.a4(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bK.b
if(d===$.bK)A.i(A.a4(""))
n=d.a!==B.D
c=$.X.b
if(c===$.X)A.i(A.a4(""))
d.lU(0.008333333333333333,c)
if(n){d=$.bK.b
if(d===$.bK)A.i(A.a4(""))
d=d.e}else d=!1
if(d)A.yr(!0)
d=$.dX-0.008333333333333333
$.dX=d
c=q
if(typeof c!=="number")return c.a5()
q=c+1}m=B.d.N(d/0.008333333333333333,0,1)
e=$.vX=A.xf($.zq(),$.eP(),m)
l=$.bu
if(l!=null){d=l
c=Math.sin($.c0)
b=Math.cos($.c0)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.ai(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.jp($.au)
for(e=$.cY.length,a=0;a<$.cY.length;$.cY.length===e||(0,A.r)($.cY),++a){k=$.cY[a]
A.CR(l,k)}B.a.G($.cY)
$.C.j().setAttribute("data-audio-spatial-active",""+l.CW.a)
e=$.C.j()
d=l.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.C.j()
e=l.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}j=$.fG
if(j!=null){$.bJ.j().eq($.iF(),$.c0,$.dZ)
e=$.bh===$.ir.j()?1:0
j.cG=e
$.yc=r
$.cX.j().b3(A.v9($.W.j().gex()))}else if($.bY.j().a===B.V){$.bJ.j().eq($.iF(),$.c0,$.dZ)
e=$.bw
if(e!=null){d=$.bJ.j()
c=d.a
a3=new A.L(c.a,c.b,c.c)
c=d.b
a4=new A.L(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.wS(a3,a4,new A.L(d.a,d.b,d.c))
a7=A.v4(a5,60,1.0471975511965976,0.1)
e.k2=new A.eZ(a6,a7,a7.a4(0,a6),a3,a4,0.1,60,a5)}e=$.bw
if(e!=null)e.jz($.X.j(),$.au)
e=$.bw
if(e!=null)e.jo($.X.j(),$.au,$.iF(),$.bg.j().gbq(),Math.sin(3.141592653589793*$.bg.j().gbq()),$.rR.j().en($.W.j().ga8().a),A.ES($.au))
if($.yb!==$.bK.j().a){$.yb=$.bK.j().a
$.vO=$.vO+1}e=$.bw
if(e!=null){if($.wd())d=0
else{d=s
if(typeof d!=="number")return d.oF()
d/=1000}c=$.vO
b=A.c(Math.max(0,$.W.j().b))
if(!isFinite(d)||d<0)A.i(A.ao(d,"timeSeconds",null))
if(b<0)A.i(A.x("frame clock seeds must be non-negative",null))
e.p2=d
e.p3=c
e.p4=b}e=$.bw
if(e!=null){d=$.bK.j()
c=$.lG
b=$.rR.j().en($.W.j().ga8().a)
a8=A.yp($.au)
a9=d.a
b0=d.geZ()
b1=b0>0?B.d.N(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.ba
b4=a9===B.W?0.45:1
if(d>=1)b5=a9===B.a9?b1:1
else b5=0
if(d>=2)d=a9===B.b8?b1:1
else d=0
b6=b2?320:0
b7=b2?5:8
b8=b3?1:0
b9=b3?b1:0
c0=b3?b1:0
c1=b3?b1:0
c2=b3?b1:0
c3=b3?b1:0
e.k4=new A.k3(b4,0.38,0.28,0.18,0.015,b.c,a8,b5,d,b6,b7,b8,b9,c0,c1,c2,c3,c)}$.cX.j().b3(A.v9($.W.j().gex()))
i=$.bw
if(i!=null){h=i.gnb()
if(h!=null){$.C.j().setAttribute("data-renderer-frame-stats",h)
e=$.C.j()
d=i.gna()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.dY("running")
A.DA()
e=$.aG.j()
e.e=e.d=0
e.c.G(0)
A.c(A.a(v.G.window).requestAnimationFrame(A.Z(A.yS())))}catch(c4){g=A.ae(c4)
f=A.cr(c4)
A.tT(g,f)}},
CR(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.iX("confirm")
$.bq.j().aD("interface confirmation")
break
case"ambient-winnow":a.ev("winnow",0.28)
$.bq.j().aD("wind moving through the house")
break
case"ambient-gate":a.ev("gate",0.22)
$.bq.j().aD("distant gate")
break
case"collapse":a.iX("collapse")
$.bq.j().aD("front door shudders and collapses")
break
case"clock:tick":A.lF(a,p,"tick")
break
case"clock:chime":A.lF(a,p,"chime")
break
case"clock:cuckoo":A.lF(a,p,"cuckoo")
break
case"clock:bell":A.lF(a,p,"bell")
break
default:if(B.b.W(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.lF(a,q,s[2])}}}},
lF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.y6,g=$.ly
if(h==null||g==null)return
s=h.mX(b)
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
break A}if(q!=null)$.bq.j().aD(q)
q=$.X.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.i(A.m("sound room missing: "+o))
m=n.d.a5(0,s.d.a4(0,p))
l=$.lv
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.i(A.m("sound emitter "+s.a+" has no cue for "+c))
a.nZ(q,m,s.e,o)
return}q=$.xU
$.xU=q+1
o=A.zI(B.dh,r,r+":"+q,m,A.CA(b,c),q,o)
q=$.au
q=A.zE($.iF(),q)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.i(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.i(A.m("audio listener room missing: "+q))
j=l.eH(p,q)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.i(A.m("audio cue family missing: "+q))
k=J.aK(i)
k=k.h(i,B.c.O(A.DS(q,o.f),k.gt(i)))
o=o.e
A.al(j.a,t.N)
a.iY(k,new A.b(o.a,o.b,o.c),s.e,1,p,j.c,j.b)},
CA(a,b){var s,r,q,p=$.W.j().b
for(s=new A.dz(a+":"+b),r=t.gS,s=new A.aS(s,s.gt(0),r.i("aS<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.yO(p,q==null?r.a(q):q)}return p},
E1(a){var s=$.vD
if(s==null)return
s.textContent=""+B.d.aJ(a>0?1/a:0)+" fps"},
E_(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5="interact"
if($.yw||$.bh!=null||$.aF.j().ax){$.lO().a=new A.b(0,0,0)
return}s=$.aG.j()
r=s.y
s=t.Q.a(s.b)
q=B.a.M(r.aV("moveLeft"),s.gaw(s))?-1:0
if(B.a.M(r.aV("moveRight"),s.gaw(s)))++q
p=B.a.M(r.aV("moveForward"),s.gaw(s))?1:0
o=new A.b(q,0,B.a.M(r.aV("moveBack"),s.gaw(s))?p-1:p)
n=o.gt(0)>1?o.gac():o
s=$.aG.j()
if(s.x.jQ(a6)){m=s.y.aV(a5)
if(m.length!==0)s.c.l(0,B.a.gR(m))}l=$.aG.j().d
k=$.aG.j().e
$.c0=$.c0+l*0.0028
s=$.dZ-k*0.0028
$.dZ=s
$.dZ=B.d.N(s,-1.5607963267948965,1.5607963267948965)
s=n.a
r=n.c
j=new A.b(s*Math.cos($.c0)+r*Math.sin($.c0),0,r*Math.cos($.c0)-s*Math.sin($.c0)).gac().a4(0,2)
s=$.lO()
if(!isFinite(a6)||a6<0)A.i(A.ao(a6,"dt","must be finite and non-negative"))
i=j.a!==0||j.c!==0?14:10
if(!isFinite(i))A.i(A.ao(i,"rate","must be finite and positive"))
r=Math.exp(-i*a6)
h=s.a
r=h.a5(0,j.an(0,h).a4(0,1-r))
s.a=r
g=$.is.j().nx($.X.j(),$.au,$.eP(),r.a4(0,a6))
$.vR=g.a
if($.bK.j().a!==B.bb&&$.bK.j().a!==B.W)$.au=g.b
$.bJ.j().eq($.eP(),$.c0,$.dZ)
s=$.bJ.j()
r=$.X.j()
f=A.ER(s,$.au,r,$.ly)
$.xK.j().jB(f.c)
e=a4
d=a4
c=a4
b=a4
switch(f.a.a){case 0:e=A.w5($.bJ.j(),$.X.j(),$.au)
break
case 1:d=A.yY($.bJ.j(),$.X.j(),$.au)
break
case 2:c=A.yZ($.bJ.j(),$.X.j(),$.au)
break
case 3:s=$.bJ.j()
r=$.X.j()
h=$.ly
b=A.yX(s,$.au,r,h)
break
case 4:break}s=$.xI.j()
a=$.fP().jf($.W.j().ga8().a)
r=a==null?a4:a.h(0,"status")
s.eI(r,$.au==="living-room")
s=$.aG.j()
if(s.y.mk(a5,s.c)){s=$.W.j().ga8()
r=d==null
h=r?a4:d.a
a0=B.a.a2($.aH.j().hb(21),$.aH.j().gnl())
if(s.a===21&&h==="front-door"&&a0){s=$.bK.j()
$.X.j()
s.jP(B.dP,A.al(s.c,t.N))
B.a.l($.cY,"collapse")
A.fI("the front door opens on itself")}else if(e!=null&&!e.e){if(e.d){e.d=!1
$.bq.j().aD("mantle flame extinguished")}else if($.W.j().jN(1,1)){e.d=!0
s=$.fx.j()
s.a=e
s.b=2
if(e.f!=null)e.r=!0
$.bq.j().aD("mantle flame catches")}}else if(!r&&!d.z&&!d.ay){d.ax=!d.ax
s=$.bq.j()
s.aD(d.ax?"door opens":"door closes")
s=$.fC
if(s!=null)s.cT(d.b)
s=$.bw
if(s!=null)s.ez($.X.j(),d.a)
s=$.bu
if(s!=null)s.bw()}else if(c!=null)if(c.w){s=$.W.j()
if(s.f.d3(1)){c.w=!1
$.bq.j().aD("shutter closes")}}else{c.w=!0
$.bq.j().aD("shutter opens")}else if(b!=null){s=$.uS()
if(!b.x)A.i(A.m("inventory placement is not pickable: "+b.a))
a1=b.y
if(a1==null)a1=b.a
s=s.a
r=b.a
h=s.h(0,r)
s.k(0,r,(h==null?0:h)+1)
r=$.C.j()
r.setAttribute("data-inventory-last-focus",a1)
r.setAttribute("data-inventory-last-event","inventory-inspected:"+a1)
s=A.b_(s,t.N,t.S)
r.setAttribute("data-inventory-inspections",""+s.gt(s))
a2=A.Dx(a1)
s=$.bq.j()
s.cf("noticed",a2==null?"you inspect "+a1:a2)}}s=$.fx.j()
if(s.a!=null&&s.b>0){a3=$.fx.j().a
if(a3!=null&&A.w5($.bJ.j(),$.X.j(),$.au)!==a3){s=$.fx.j()
s.a=null
s.b=0}}},
Dx(a){var s,r,q,p,o=$.W.j().z.b,n=A.q(o).i("G<1,2>"),m=A.K(new A.G(o,n),n.i("p.E"))
B.a.S(m,new A.tP())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.fP().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
E4(){var s,r,q,p,o,n,m,l,k,j=null
if($.aF.j().ax||$.bh!=null||$.aH.j().r!=null)return
s=$.W.j().ga8()
for(r=$.aH.j().hb(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aH.b
if(m===$.aH)A.i(A.a4(""))
if(m.c.u(0,n)||p<n.c)continue
r=$.aH.b
if(r===$.aH)A.i(A.a4(""))
l=r.dE(n)
if(!(l instanceof A.ky))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.wI(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.lO().a=new A.b(0,0,0)
r=$.aF.b
if(r===$.aF)A.i(A.a4(""))
r.eV(n.a,k)
A.yE(n)
return}},
DH(){var s,r=$.aH.j().r,q=r==null,p=q?null:r.gbA()
if(q||p==null)return
q=$.aF.j()
s=r.a
q.eV(s.a,p)
A.yE(s)
if(r.d!==B.Z)A.vL()
A.fI("restored visitor")},
yE(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.W.j().nd("stranger-17-eileen-case")
r=$.fP().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aq(q,!0,t.N):B.n
p=A.cF(r,t.N)
if(s==null||p==null)return
$.bq.j().cf("inside the case",p+" \u201c"+s.d+"\u201d")},
E0(){var s,r,q,p,o=$.W.j().ga8(),n=$.ls.j().mV(o.a,o.b)
if(n.length===0)return
s=B.a.gR(n)
$.ls.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bq.j().cf(q,s.e)
p=A.Ea(r)
if(p!=null)B.a.l($.cY,"ambient-"+p)},
E3(){var s,r,q,p,o=$.W.j().ga8()
if(o.b<20)return
s=o.a
if(!$.u0.l(0,s))return
r=$.fP().f
r===$&&A.h()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.aq(q,!0,t.N):B.n
p=A.EP(r,$.W.j().b,s)
if(p!=null)$.bq.j().cf("noticed",p)},
yr(a){var s,r,q,p,o
if($.vC!=null)return
s=$.W.j().ga8()
r=$.W.j().r.c
q=$.W.j().e.b
p=A.q(q).i("ay<2>")
o=A.Ae(new A.n6(s.a,1-r,new A.O(new A.ay(q,p),p.i("n(p.E)").a(new A.tU()),p.i("O<p.E>")).gt(0),$.W.j().r.d,a))
if(o==null)return
A.ym(o)
A.lI("ending recorded")},
ym(a){var s,r,q
$.vC=a
$.yw=!0
$.lO().a=new A.b(0,0,0)
A.lE($.ip.j())
s=$.ip.j()
r=$.fP().w
r===$&&A.h()
q=r.h(0,a.a.b)
s.jE(a,t.j.b(q)?A.aq(q,!0,t.N):B.n)},
CH(a){var s,r,q,p
A:{if("open"===a){s=B.am
break A}if("chain"===a){s=B.bH
break A}if("through-door"===a){s=B.bI
break A}if("letterbox"===a){s=B.bJ
break A}s=B.a4
break A}r=$.aH.j().me(s)
if(s===B.am){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.fC
if(p!=null)p.cT(q.b)
p=$.bw
if(p!=null)p.ez($.X.j(),q.a)
p=$.bu
if(p!=null)p.bw()}}if(!(r instanceof A.kw)||s===B.a4){$.aF.j().cM()
$.aG.j().c9($.C.j())
return}if(r.a.gbA()==null){A.vz()
$.aF.j().cM()
$.aG.j().c9($.C.j())
return}A.vL()},
CN(){var s=$.aH.j().lV()
if(!(s instanceof A.hK)||s.b){A.vz()
$.aF.j().cM()
$.aG.j().c9($.C.j())
return}if(s.a.gbA()==null){A.vz()
$.aF.j().cM()
$.aG.j().c9($.C.j())
return}A.vL()},
vL(){var s,r,q,p,o,n,m,l,k=$.aH.j().r,j=k==null,i=j?null:k.gbA()
if(j||i==null)return
s=$.aH.j().gcD()
if(s==null)$.aF.j().jD(i)
else{r=k.w
j=r==null
$.aF.j().eW(i,j)
q=$.aF.j()
p=A.e([],t.m_)
for(o=s.f,n=o.length,m=0;m<n;++m){l=o[m]
p.push(new A.az(l.a,l.b))}q.jF(p,r)
if(!j){j=A.I(o)
l=A.cF(new A.O(o,j.i("n(1)").a(new A.tR(r)),j.i("O<1>")),t.Y)
if(l!=null)$.aF.j().eX(i,l.c)}}A.yD()},
CI(a){var s,r,q,p=$.aH.j().mf(a)
if(!(p instanceof A.kx))return
s=p.c
if(!$.W.j().lX(p.b,s))return
r=$.aF.j()
q=p.a.gbA()
if(q==null)q=""
r.eX(q,s.c)
A.yD()
A.lI("saved after visitor answer")},
yD(){var s,r,q,p,o=$.aF.j(),n=A.a(v.G.document),m=A.e([],t.fR)
for(s=$.lt.j().eP(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.az(p.a,B.a.gU(p.c).p(0)))}o.jC(n,m)},
CJ(a){var s,r,q,p=$.aH.j().mg(a,!0,$.lt.j())
if(p==null)return
s=$.lt.j().mO(p,B.fT)
r=$.aF.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.H.bC("",!0,q)},
vz(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fC
if(s!=null)s.cT(r.b)
s=$.bw
if(s!=null)s.ez($.X.j(),r.a)
s=$.bu
if(s!=null)s.bw()}},
E2(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bK.b
if(k===$.bK)A.i(A.a4(""))
if(B.a.u(k.d,n+m)){l.d=!1
continue}}}},
ES(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.bg.j().gbq()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.l){n=$.bg.b
if(n===$.bg)A.i(A.a4(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.bg.b
if(n===$.bg)A.i(A.a4(""))
n=n.b>12}else n=!1
if(!n){if(o===B.w){n=$.bg.b
if(n===$.bg)A.i(A.a4(""))
n=n.b<9}else n=!1
if(!n)if(o===B.I){o=$.bg.b
if(o===$.bg)A.i(A.a4(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
yp(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.aU
if(q.length===0)return 0.12
s=A.I(q)
return B.d.N(new A.O(q,s.i("n(1)").a(new A.tS()),s.i("O<1>")).gt(0)/q.length,0.12,1)},
i5:function i5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
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
_.k2=_.k1=null
_.k3=a3
_.k4=a4
_.ok=null
_.RG=_.R8=_.p4=_.p3=_.p2=_.p1=0
_.rx=!1
_.ry=null
_.to=0},
rz:function rz(){},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
rC:function rC(a){this.a=a},
rD:function rD(a){this.a=a},
rv:function rv(){},
rw:function rw(){},
rx:function rx(){},
ry:function ry(){},
fm:function fm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
l6:function l6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r8:function r8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
t5:function t5(){},
t6:function t6(){},
t7:function t7(){},
tc:function tc(){},
td:function td(){},
te:function te(){},
tf:function tf(){},
tg:function tg(){},
th:function th(a){this.a=a},
ti:function ti(a){this.a=a},
tj:function tj(a){this.a=a},
t8:function t8(a){this.a=a},
t9:function t9(){},
ta:function ta(){},
tb:function tb(){},
t1:function t1(){},
t2:function t2(){},
t3:function t3(){},
rZ:function rZ(){},
t_:function t_(){},
t0:function t0(){},
tK:function tK(a,b){this.a=a
this.b=b},
tI:function tI(a){this.a=a},
tJ:function tJ(a){this.a=a},
uj:function uj(a){this.a=a},
uk:function uk(){},
ul:function ul(){},
uw:function uw(){},
uz:function uz(){},
uA:function uA(){},
uB:function uB(){},
uC:function uC(){},
uD:function uD(){},
uE:function uE(){},
uF:function uF(){},
um:function um(){},
un:function un(){},
uo:function uo(){},
up:function up(){},
uq:function uq(){},
ur:function ur(){},
us:function us(){},
ut:function ut(){},
uu:function uu(){},
uv:function uv(){},
ux:function ux(){},
uy:function uy(){},
tL:function tL(){},
tM:function tM(){},
tW:function tW(a){this.a=a},
tP:function tP(){},
tU:function tU(){},
tR:function tR(a){this.a=a},
tS:function tS(){},
wI(a,b,c,d,e,f){var s=a[b]()
return s},
wJ(a,b,c){var s=null
return c.a(A.wI(a,b,s,s,s,s))},
uK(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.ao(b.gnf(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gC().c.a7()
o=q*16
n=o+16
B.p.d1(s,o,n,p.a)
if(l)B.p.d1(r,o,n,p.es().a)}m=a.a
A.v(m,"uInstanceModels",new A.z(B.d4,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.z(B.d4,r))
A.v(m,"uUseInstances",B.d5)},
A1(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
A0(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
yP(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
uL(a,b){var s=B.d.aO(a),r=A.yP(s,b),q=A.yP(s+1,b),p=B.d.N(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
yO(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Ea(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
Eq(a){var s,r,q,p,o,n,m,l=B.k.aF(a,null),k=t.f
if(!k.b(l))throw A.d(B.eW)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.o(s,t.P)
for(o=0;o<14;++o){n=B.hM[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.o(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.d(A.a8('text.json section "'+n+'" must be an object',null,null))}return p},
EP(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaK(a)
s=new A.fo()
s.d4((b^274953^c)>>>0)
r=s.aH(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.uZ.prototype={}
J.jA.prototype={
Z(a,b){return a===b},
gK(a){return A.ho(a)},
p(a){return"Instance of '"+A.k5(a)+"'"},
ga_(a){return A.cZ(A.vF(this))}}
J.jD.prototype={
p(a){return String(a)},
gK(a){return a?519018:218159},
ga_(a){return A.cZ(t.y)},
$iad:1,
$in:1}
J.h9.prototype={
Z(a,b){return null==b},
p(a){return"null"},
gK(a){return 0},
$iad:1,
$iax:1}
J.ha.prototype={$iaa:1}
J.dH.prototype={
gK(a){return 0},
ga_(a){return B.kl},
p(a){return String(a)}}
J.k0.prototype={}
J.dO.prototype={}
J.dc.prototype={
p(a){var s=a[$.z5()]
if(s==null)s=a[$.cg()]
if(s==null)return this.jS(a)
return"JavaScript function for "+J.d1(s)},
$iec:1}
J.f8.prototype={
gK(a){return 0},
p(a){return String(a)}}
J.f9.prototype={
gK(a){return 0},
p(a){return String(a)}}
J.u.prototype={
cB(a,b){return new A.bM(a,A.I(a).i("@<1>").I(b).i("bM<1,2>"))},
l(a,b){A.I(a).c.a(b)
a.$flags&1&&A.bz(a,29)
a.push(b)},
o4(a,b){var s
a.$flags&1&&A.bz(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.wZ(b,null))
return a.splice(b,1)[0]},
ak(a,b){var s
a.$flags&1&&A.bz(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a2(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.I(a).i("p<1>").a(b)
a.$flags&1&&A.bz(a,"addAll",2)
if(Array.isArray(b)){this.kl(a,b)
return}for(s=J.T(b);s.m();)a.push(s.gn())},
kl(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.aw(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.bz(a,"clear","clear")
a.length=0},
c7(a,b,c){var s=A.I(a)
return new A.S(a,s.I(c).i("1(2)").a(b),s.i("@<1>").I(c).i("S<1,2>"))},
ab(a,b){var s,r=A.cG(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bB(a,b,c,d){var s,r,q
d.a(b)
A.I(a).I(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.aw(a))}return r},
aZ(a,b,c){var s,r,q,p=A.I(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.aw(a))}if(c!=null)return c.$0()
throw A.d(A.cE())},
ah(a,b){return this.aZ(a,b,null)},
X(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aL(a,b,c){var s=a.length
if(b>s)throw A.d(A.aT(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aT(c,b,s,"end",null))
if(b===c)return A.e([],A.I(a))
return A.e(a.slice(b,c),A.I(a))},
gR(a){if(a.length>0)return a[0]
throw A.d(A.cE())},
gU(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cE())},
gaK(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cE())
throw A.d(A.wE())},
M(a,b){var s,r
A.I(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.aw(a))}return!1},
a2(a,b){var s,r
A.I(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.aw(a))}return!0},
S(a,b){var s,r,q,p,o,n=A.I(a)
n.i("l(1,1)?").a(b)
a.$flags&2&&A.bz(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Dc()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.am()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fL(b,2))
if(p>0)this.ls(a,p)},
a0(a){return this.S(a,null)},
ls(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d2(a,b){var s,r,q,p
a.$flags&2&&A.bz(a,"shuffle")
s=a.length
while(s>1){r=b.aH(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
c1(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a2(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.a2(a[s],b))return!0
return!1},
gL(a){return a.length===0},
gV(a){return a.length!==0},
p(a){return A.uY(a,"[","]")},
gq(a){return new J.e3(a,a.length,A.I(a).i("e3<1>"))},
gK(a){return A.ho(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bz(a,"set length","change the length of")
if(b<0)throw A.d(A.aT(b,0,null,"newLength",null))
if(b>a.length)A.I(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.u9(a,b))
return a[b]},
k(a,b,c){A.I(a).c.a(c)
a.$flags&2&&A.bz(a)
if(!(b>=0&&b<a.length))throw A.d(A.u9(a,b))
a[b]=c},
eM(a,b){return new A.cp(a,b.i("cp<0>"))},
iH(a,b){var s
A.I(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga_(a){return A.cZ(A.I(a))},
$iQ:1,
$ip:1,
$iE:1}
J.jB.prototype={
ou(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.k5(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ok.prototype={}
J.e3.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iaf:1}
J.ei.prototype={
F(a,b){var s
A.aI(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcO(b)
if(this.gcO(a)===s)return 0
if(this.gcO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcO(a){return a===0?1/a<0:a<0},
aS(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aW(""+a+".toInt()"))},
mb(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aW(""+a+".ceil()"))},
aO(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aW(""+a+".floor()"))},
aJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aW(""+a+".round()"))},
oo(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
N(a,b,c){if(this.F(b,c)>0)throw A.d(A.vZ(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
cb(a,b){var s
if(b>20)throw A.d(A.aT(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcO(a))return"-"+s
return s},
ot(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aT(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.i(A.aW("Unexpected toString result: "+s))
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
gK(a){var s,r,q,p,o=a|0
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
jU(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h_(a,b)},
T(a,b){return(a|0)===a?a/b|0:this.h_(a,b)},
h_(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aW("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
dA(a,b){var s
if(a>0)s=this.cv(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lA(a,b){if(0>b)throw A.d(A.vZ(b))
return this.cv(a,b)},
cv(a,b){return b>31?0:a>>>b},
ga_(a){return A.cZ(t.o)},
$iaZ:1,
$iA:1,
$ib6:1}
J.h8.prototype={
ga_(a){return A.cZ(t.S)},
$iad:1,
$il:1}
J.jE.prototype={
ga_(a){return A.cZ(t.i)},
$iad:1}
J.dG.prototype={
bJ(a,b,c,d){var s=A.hq(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a9(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.a9(a,b,0)},
E(a,b,c){return a.substring(b,A.hq(b,c,a.length))},
bp(a,b){return this.E(a,b,null)},
bb(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.AD(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.AE(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a4(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.dL)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
nX(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a4(c,s)+a},
cN(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c1(a,b){return this.cN(a,b,0)},
u(a,b){return A.EY(a,b,0)},
F(a,b){var s
A.y(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gK(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga_(a){return A.cZ(t.N)},
gt(a){return a.length},
$iad:1,
$iaZ:1,
$ip1:1,
$ij:1}
A.dS.prototype={
gq(a){return new A.fU(J.T(this.gaU()),A.q(this).i("fU<1,2>"))},
gt(a){return J.c3(this.gaU())},
gL(a){return J.uU(this.gaU())},
gV(a){return J.zx(this.gaU())},
X(a,b){return A.q(this).y[1].a(J.lP(this.gaU(),b))},
gR(a){return A.q(this).y[1].a(J.wk(this.gaU()))},
u(a,b){return J.wj(this.gaU(),b)},
p(a){return J.d1(this.gaU())}}
A.fU.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iaf:1}
A.e6.prototype={
gaU(){return this.a}}
A.hT.prototype={$iQ:1}
A.hR.prototype={
h(a,b){return this.$ti.y[1].a(J.aC(this.a,b))},
k(a,b,c){var s=this.$ti
J.bA(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.zz(this.a,b)},
l(a,b){var s=this.$ti
J.fQ(this.a,s.c.a(s.y[1].a(b)))},
S(a,b){var s
this.$ti.i("l(2,2)?").a(b)
s=b==null?null:new A.r9(this,b)
J.zA(this.a,s)},
$iQ:1,
$iE:1}
A.r9.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("l(1,1)")}}
A.bM.prototype={
cB(a,b){return new A.bM(this.a,this.$ti.i("@<1>").I(b).i("bM<1,2>"))},
gaU(){return this.a}}
A.ej.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dz.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.pM.prototype={}
A.Q.prototype={}
A.a3.prototype={
gq(a){var s=this
return new A.aS(s,s.gt(s),A.q(s).i("aS<a3.E>"))},
gL(a){return this.gt(this)===0},
gR(a){if(this.gt(this)===0)throw A.d(A.cE())
return this.X(0,0)},
u(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a2(r.X(0,s),b))return!0
if(q!==r.gt(r))throw A.d(A.aw(r))}return!1},
a2(a,b){var s,r,q=this
A.q(q).i("n(a3.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.X(0,r)))return!1
if(s!==q.gt(q))throw A.d(A.aw(q))}return!0},
M(a,b){var s,r,q=this
A.q(q).i("n(a3.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.X(0,r)))return!0
if(s!==q.gt(q))throw A.d(A.aw(q))}return!1},
ab(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.X(0,0))
if(o!==p.gt(p))throw A.d(A.aw(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.X(0,q))
if(o!==p.gt(p))throw A.d(A.aw(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.X(0,q))
if(o!==p.gt(p))throw A.d(A.aw(p))}return r.charCodeAt(0)==0?r:r}},
cW(a,b){return this.jR(0,A.q(this).i("n(a3.E)").a(b))},
c7(a,b,c){var s=A.q(this)
return new A.S(this,s.I(c).i("1(a3.E)").a(b),s.i("@<a3.E>").I(c).i("S<1,2>"))},
bL(a,b){var s=A.q(this).i("a3.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bK(a){return this.bL(0,!0)},
bo(a){var s,r=this,q=A.v1(A.q(r).i("a3.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.X(0,s))
return q}}
A.hD.prototype={
gkR(){var s=J.c3(this.a),r=this.c
if(r==null||r>s)return s
return r},
glD(){var s=J.c3(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.c3(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
X(a,b){var s=this,r=s.glD()+b
if(b<0||r>=s.gkR())throw A.d(A.oc(b,s.gt(0),s,"index"))
return J.lP(s.a,r)},
bL(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aK(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.wG(0,n):J.wF(0,n)}r=A.cG(s,m.X(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.X(n,o+q))
if(m.gt(n)<l)throw A.d(A.aw(p))}return r},
bK(a){return this.bL(0,!0)}}
A.aS.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aK(q),o=p.gt(q)
if(r.b!==o)throw A.d(A.aw(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.X(q,s);++r.c
return!0},
$iaf:1}
A.cm.prototype={
gq(a){return new A.he(J.T(this.a),this.b,A.q(this).i("he<1,2>"))},
gt(a){return J.c3(this.a)},
gL(a){return J.uU(this.a)},
gR(a){return this.b.$1(J.wk(this.a))},
X(a,b){return this.b.$1(J.lP(this.a,b))}}
A.d6.prototype={$iQ:1}
A.he.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iaf:1}
A.S.prototype={
gt(a){return J.c3(this.a)},
X(a,b){return this.b.$1(J.lP(this.a,b))}}
A.O.prototype={
gq(a){return new A.R(J.T(this.a),this.b,this.$ti.i("R<1>"))}}
A.R.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iaf:1}
A.h1.prototype={
gq(a){return new A.h2(J.T(this.a),this.b,B.dD,this.$ti.i("h2<1,2>"))}}
A.h2.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.T(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iaf:1}
A.h_.prototype={
m(){return!1},
gn(){throw A.d(A.cE())},
$iaf:1}
A.cp.prototype={
gq(a){return new A.hM(J.T(this.a),this.$ti.i("hM<1>"))}}
A.hM.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iaf:1}
A.ap.prototype={
st(a,b){throw A.d(A.aW("Cannot change the length of a fixed-length list"))},
l(a,b){A.bL(a).i("ap.E").a(b)
throw A.d(A.aW("Cannot add to a fixed-length list"))}}
A.cQ.prototype={
k(a,b,c){A.q(this).i("cQ.E").a(c)
throw A.d(A.aW("Cannot modify an unmodifiable list"))},
st(a,b){throw A.d(A.aW("Cannot change the length of an unmodifiable list"))},
l(a,b){A.q(this).i("cQ.E").a(b)
throw A.d(A.aW("Cannot add to an unmodifiable list"))},
S(a,b){A.q(this).i("l(cQ.E,cQ.E)?").a(b)
throw A.d(A.aW("Cannot modify an unmodifiable list"))}}
A.fl.prototype={}
A.hv.prototype={
gt(a){return J.c3(this.a)},
X(a,b){var s=this.a,r=J.aK(s)
return r.X(s,r.gt(s)-1-b)}}
A.im.prototype={}
A.az.prototype={$r:"+(1,2)",$s:1}
A.i6.prototype={$r:"+influence,light(1,2)",$s:2}
A.ah.prototype={$r:"+(1,2,3)",$s:3}
A.i7.prototype={$r:"+(1,2,3,4)",$s:4}
A.fW.prototype={}
A.f0.prototype={
gL(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
p(a){return A.v2(this)},
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
A.zV()},
gH(){return new A.cd(this.n_(),A.q(this).i("cd<N<1,2>>"))},
n_(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gH(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gY(),o=o.gq(o),n=A.q(s),m=n.y[1],n=n.i("N<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.N(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bE(a,b,c,d){var s=A.o(c,d)
this.aq(0,new A.mI(this,A.q(this).I(c).I(d).i("N<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.mI.prototype={
$2(a,b){var s=A.q(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.q(this.a).i("~(1,2)")}}
A.a7.prototype={
gt(a){return this.b.length},
gfz(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
P(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.P(b))return null
return this.b[this.a[b]]},
aq(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfz()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gY(){return new A.eF(this.gfz(),this.$ti.i("eF<1>"))},
gav(){return new A.eF(this.b,this.$ti.i("eF<2>"))}}
A.eF.prototype={
gt(a){return this.a.length},
gL(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gq(a){var s=this.a
return new A.eG(s,s.length,this.$ti.i("eG<1>"))}}
A.eG.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iaf:1}
A.cy.prototype={
bv(){var s=this,r=s.$map
if(r==null){r=new A.hb(s.$ti.i("hb<1,2>"))
A.yJ(s.a,r)
s.$map=r}return r},
P(a){return this.bv().P(a)},
h(a,b){return this.bv().h(0,b)},
aq(a,b){this.$ti.i("~(1,2)").a(b)
this.bv().aq(0,b)},
gY(){var s=this.bv()
return new A.ac(s,A.q(s).i("ac<1>"))},
gav(){var s=this.bv()
return new A.ay(s,A.q(s).i("ay<2>"))},
gt(a){return this.bv().a}}
A.fX.prototype={
l(a,b){A.q(this).c.a(b)
A.zW()}}
A.aL.prototype={
gt(a){return this.b},
gL(a){return this.b===0},
gV(a){return this.b!==0},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eG(s,s.length,r.$ti.i("eG<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bo(a){return A.oD(this,this.$ti.c)}}
A.pd.prototype={
$0(){return B.d.aO(1000*this.a.now())},
$S:28}
A.hw.prototype={}
A.qE.prototype={
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
A.hk.prototype={
p(a){return"Null check operator used on a null value"}}
A.jG.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kq.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.oV.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.h0.prototype={}
A.i9.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icN:1}
A.dy.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.z3(r==null?"unknown":r)+"'"},
ga_(a){var s=A.w0(this)
return A.cZ(s==null?A.bL(this):s)},
$iec:1,
goE(){return this},
$C:"$1",
$R:1,
$D:null}
A.iV.prototype={$C:"$0",$R:0}
A.iW.prototype={$C:"$2",$R:2}
A.km.prototype={}
A.kj.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.z3(s)+"'"}}
A.eX.prototype={
Z(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.eX))return!1
return this.$_target===b.$_target&&this.a===b.a},
gK(a){return(A.lM(this.a)^A.ho(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.k5(this.a)+"'")}}
A.kc.prototype={
p(a){return"RuntimeError: "+this.a}}
A.c6.prototype={
gt(a){return this.a},
gL(a){return this.a===0},
gV(a){return this.a!==0},
gY(){return new A.ac(this,A.q(this).i("ac<1>"))},
gav(){return new A.ay(this,A.q(this).i("ay<2>"))},
gH(){return new A.G(this,A.q(this).i("G<1,2>"))},
P(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ng(a)},
ng(a){var s=this.d
if(s==null)return!1
return this.c3(s[this.c2(a)],a)>=0},
J(a,b){A.q(this).i("Y<1,2>").a(b).aq(0,new A.ot(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.nh(b)},
nh(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c2(a)]
r=this.c3(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.q(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.f0(s==null?q.b=q.dr():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.f0(r==null?q.c=q.dr():r,b,c)}else q.nj(b,c)},
nj(a,b){var s,r,q,p,o=this,n=A.q(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dr()
r=o.c2(a)
q=s[r]
if(q==null)s[r]=[o.d6(a,b)]
else{p=o.c3(q,a)
if(p>=0)q[p].b=b
else q.push(o.d6(a,b))}},
c8(a,b){var s,r,q=this,p=A.q(q)
p.c.a(a)
p.i("2()").a(b)
if(q.P(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
ak(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.kj(this.c,b)
else return this.ni(b)},
ni(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c2(a)
r=n[s]
q=o.c3(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f1(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d5()}},
aq(a,b){var s,r,q=this
A.q(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.aw(q))
s=s.c}},
f0(a,b,c){var s,r=A.q(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.d6(b,c)
else s.b=c},
kj(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f1(s)
delete a[b]
return s.b},
d5(){this.r=this.r+1&1073741823},
d6(a,b){var s=this,r=A.q(s),q=new A.oB(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d5()
return q},
f1(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d5()},
c2(a){return J.av(a)&1073741823},
c3(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
p(a){return A.v2(this)},
dr(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iv0:1}
A.ot.prototype={
$2(a,b){var s=this.a,r=A.q(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.q(this.a).i("~(1,2)")}}
A.oB.prototype={}
A.ac.prototype={
gt(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.c7(s,s.r,s.e,this.$ti.i("c7<1>"))},
u(a,b){return this.a.P(b)}}
A.c7.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iaf:1}
A.ay.prototype={
gt(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.ag(s,s.r,s.e,this.$ti.i("ag<1>"))}}
A.ag.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iaf:1}
A.G.prototype={
gt(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.ek(s,s.r,s.e,this.$ti.i("ek<1,2>"))}}
A.ek.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.N(s.a,s.b,r.$ti.i("N<1,2>"))
r.c=s.c
return!0}},
$iaf:1}
A.hb.prototype={
c2(a){return A.El(a)&1073741823},
c3(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1}}
A.ue.prototype={
$1(a){return this.a(a)},
$S:10}
A.uf.prototype={
$2(a,b){return this.a(a,b)},
$S:142}
A.ug.prototype={
$1(a){return this.a(A.y(a))},
$S:29}
A.bX.prototype={
ga_(a){return A.cZ(this.ft())},
ft(){return A.Ev(this.$r,this.cp())},
p(a){return this.h5(!1)},
h5(a){var s,r,q,p,o,n=this.kV(),m=this.cp(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.wW(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kV(){var s,r=this.$s
while($.rE.length<=r)B.a.l($.rE,null)
s=$.rE[r]
if(s==null){s=this.kE()
B.a.k($.rE,r,s)}return s},
kE(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.jC(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.al(j,k)}}
A.eJ.prototype={
cp(){return[this.a,this.b]},
Z(a,b){if(b==null)return!1
return b instanceof A.eJ&&this.$s===b.$s&&J.a2(this.a,b.a)&&J.a2(this.b,b.b)},
gK(a){return A.cn(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.fp.prototype={
cp(){return[this.a,this.b,this.c]},
Z(a,b){var s=this
if(b==null)return!1
return b instanceof A.fp&&s.$s===b.$s&&J.a2(s.a,b.a)&&J.a2(s.b,b.b)&&J.a2(s.c,b.c)},
gK(a){var s=this
return A.cn(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fq.prototype={
cp(){return this.a},
Z(a,b){if(b==null)return!1
return b instanceof A.fq&&this.$s===b.$s&&A.BU(this.a,b.a)},
gK(a){return A.cn(this.$s,A.AQ(this.a),B.f,B.f,B.f,B.f)}}
A.jF.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ip1:1}
A.ra.prototype={
dv(){var s=this.b
if(s===this)throw A.d(new A.ej("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a4(""))
return s}}
A.dI.prototype={
ga_(a){return B.ke},
hc(a,b,c){A.xY(a,b,c)
return new Float32Array(a,b,c)},
$iad:1,
$idI:1}
A.fc.prototype={$ifc:1}
A.hi.prototype={
gm4(a){if(((a.$flags|0)&2)!==0)return new A.rK(a.buffer)
else return a.buffer},
l3(a,b,c,d){var s=A.aT(b,0,c,d,null)
throw A.d(s)},
fd(a,b,c,d){if(b>>>0!==b||b>c)this.l3(a,b,c,d)}}
A.rK.prototype={
hc(a,b,c){var s=A.AN(this.a,b,c)
s.$flags=3
return s}}
A.jR.prototype={
ga_(a){return B.kf},
$iad:1}
A.b0.prototype={
gt(a){return a.length},
fU(a,b,c,d,e){var s,r,q=a.length
this.fd(a,b,q,"start")
this.fd(a,c,q,"end")
if(b>c)throw A.d(A.aT(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.x(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibP:1}
A.hg.prototype={
h(a,b){A.dt(b,a,a.length)
return a[b]},
k(a,b,c){A.bZ(c)
a.$flags&2&&A.bz(a)
A.dt(b,a,a.length)
a[b]=c},
d1(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bz(a,5)
this.fU(a,b,c,d,0)
return},
$iQ:1,
$ip:1,
$iE:1}
A.hh.prototype={
k(a,b,c){A.c(c)
a.$flags&2&&A.bz(a)
A.dt(b,a,a.length)
a[b]=c},
jx(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bz(a,5)
this.fU(a,b,c,d,e)
return},
$iQ:1,
$ip:1,
$iE:1}
A.hf.prototype={
ga_(a){return B.kg},
aL(a,b,c){return new Float32Array(a.subarray(b,A.CF(b,c,a.length)))},
$iad:1,
$ing:1}
A.jS.prototype={
ga_(a){return B.kh},
$iad:1}
A.jT.prototype={
ga_(a){return B.ki},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1}
A.jU.prototype={
ga_(a){return B.kj},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1}
A.jV.prototype={
ga_(a){return B.kk},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1}
A.jW.prototype={
ga_(a){return B.kn},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1,
$ivg:1}
A.jX.prototype={
ga_(a){return B.ko},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1}
A.en.prototype={
ga_(a){return B.kp},
gt(a){return a.length},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1,
$ien:1}
A.hj.prototype={
ga_(a){return B.kq},
gt(a){return a.length},
h(a,b){A.dt(b,a,a.length)
return a[b]},
$iad:1,
$ihG:1}
A.i0.prototype={}
A.i1.prototype={}
A.i2.prototype={}
A.i3.prototype={}
A.co.prototype={
i(a){return A.id(v.typeUniverse,this,a)},
I(a){return A.xz(v.typeUniverse,this,a)}}
A.kU.prototype={}
A.lm.prototype={
p(a){return A.bx(this.a,null)}}
A.kS.prototype={
p(a){return this.a}}
A.ft.prototype={$idk:1}
A.r5.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:32}
A.r4.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:141}
A.r6.prototype={
$0(){this.a.$0()},
$S:11}
A.r7.prototype={
$0(){this.a.$0()},
$S:11}
A.rH.prototype={
ki(a,b){if(self.setTimeout!=null)self.setTimeout(A.fL(new A.rI(this,b),0),a)
else throw A.d(A.aW("`setTimeout()` not found."))}}
A.rI.prototype={
$0(){this.b.$0()},
$S:0}
A.kI.prototype={
dF(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.da(a)
else{s=r.a
if(q.i("bO<1>").b(a))s.fc(a)
else s.cm(a)}},
dG(a,b){var s=this.a
if(this.b)s.be(new A.aY(a,b))
else s.ci(new A.aY(a,b))}}
A.rX.prototype={
$1(a){return this.a.$2(0,a)},
$S:17}
A.rY.prototype={
$2(a,b){this.a.$2(1,new A.h0(a,t.l.a(b)))},
$S:61}
A.u4.prototype={
$2(a,b){this.a(A.c(a),b)},
$S:69}
A.cq.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lu(a,b){var s,r,q
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
o.d=null}q=o.lu(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.xu
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
o.a=A.xu
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
oG(a){var s,r,q=this
if(a instanceof A.cd){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.T(a)
return 2}},
$iaf:1}
A.cd.prototype={
gq(a){return new A.cq(this.a(),this.$ti.i("cq<1>"))}}
A.aY.prototype={
p(a){return A.w(this.a)},
$iak:1,
gbM(){return this.b}}
A.no.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fh(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ae(p)
q=A.cr(p)
l=r
o=q
n=A.vG(l,o)
l=new A.aY(l,o)
m.b.be(l)
return}m.b.fh(s)}},
$S:0}
A.nr.prototype={
$2(a,b){var s,r,q=this
A.fA(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.be(new A.aY(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.be(new A.aY(r,s))}},
$S:70}
A.nq.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bA(r,k.b,a)
if(J.a2(s,0)){q=A.e([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fQ(q,l)}k.c.cm(q)}}else if(J.a2(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.be(new A.aY(q,o))}},
$S(){return this.d.i("ax(0)")}}
A.kM.prototype={
dG(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.ci(A.Db(a,b))},
hf(a){return this.dG(a,null)}}
A.hO.prototype={
dF(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.da(r.i("1/").a(a))}}
A.eC.prototype={
nw(a){if((this.c&15)!==6)return!0
return this.b.b.eF(t.iW.a(this.d),a.a,t.y,t.K)},
ne(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.oq(q,m,a.b,o,n,t.l)
else p=l.eF(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ae(s))){if((r.c&1)!==0)throw A.d(A.x("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.x("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.at.prototype={
eG(a,b,c){var s,r,q=this.$ti
q.I(c).i("1/(2)").a(a)
s=$.an
if(s===B.v){if(!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.ao(b,"onError",u.c))}else{c.i("@<0/>").I(q.c).i("1(2)").a(a)
b=A.DG(b,s)}r=new A.at(s,c.i("at<0>"))
this.d8(new A.eC(r,3,a,b,q.i("@<1>").I(c).i("eC<1,2>")))
return r},
h3(a,b,c){var s,r=this.$ti
r.I(c).i("1/(2)").a(a)
s=new A.at($.an,c.i("at<0>"))
this.d8(new A.eC(s,19,a,b,r.i("@<1>").I(c).i("eC<1,2>")))
return s},
ly(a){this.a=this.a&1|16
this.c=a},
cl(a){this.a=a.a&30|this.a&1
this.c=a.c},
d8(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.d8(a)
return}r.cl(s)}A.lH(null,null,r.b,t.O.a(new A.rd(r,a)))}},
fI(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.fI(a)
return}m.cl(n)}l.a=m.ct(a)
A.lH(null,null,m.b,t.O.a(new A.ri(l,m)))}},
bP(){var s=t.F.a(this.c)
this.c=null
return this.ct(s)},
ct(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fh(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bO<1>").b(a))A.rg(a,r,!0)
else{s=r.bP()
q.c.a(a)
r.a=8
r.c=a
A.eD(r,s)}},
cm(a){var s,r=this
r.$ti.c.a(a)
s=r.bP()
r.a=8
r.c=a
A.eD(r,s)},
kD(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bP()
q.cl(a)
A.eD(q,r)},
be(a){var s=this.bP()
this.ly(a)
A.eD(this,s)},
da(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bO<1>").b(a)){this.fc(a)
return}this.kp(a)},
kp(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.lH(null,null,s.b,t.O.a(new A.rf(s,a)))},
fc(a){A.rg(this.$ti.i("bO<1>").a(a),this,!1)
return},
ci(a){this.a^=2
A.lH(null,null,this.b,t.O.a(new A.re(this,a)))},
$ibO:1}
A.rd.prototype={
$0(){A.eD(this.a,this.b)},
$S:0}
A.ri.prototype={
$0(){A.eD(this.b,this.a.a)},
$S:0}
A.rh.prototype={
$0(){A.rg(this.a.a,this.b,!0)},
$S:0}
A.rf.prototype={
$0(){this.a.cm(this.b)},
$S:0}
A.re.prototype={
$0(){this.a.be(this.b)},
$S:0}
A.rl.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.op(t.mY.a(q.d),t.z)}catch(p){s=A.ae(p)
r=A.cr(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.m5(q)
n=k.a
n.c=new A.aY(q,o)
q=n}q.b=!0
return}if(j instanceof A.at&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.at){m=k.b.a
l=new A.at(m.b,m.$ti)
j.eG(new A.rm(l,m),new A.rn(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rm.prototype={
$1(a){this.a.kD(this.b)},
$S:32}
A.rn.prototype={
$2(a,b){A.fA(a)
t.l.a(b)
this.a.be(new A.aY(a,b))},
$S:71}
A.rk.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eF(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ae(l)
r=A.cr(l)
q=s
p=r
if(p==null)p=A.m5(q)
o=this.a
o.c=new A.aY(q,p)
o.b=!0}},
$S:0}
A.rj.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.nw(s)&&p.a.e!=null){p.c=p.a.ne(s)
p.b=!1}}catch(o){r=A.ae(o)
q=A.cr(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.m5(p)
m=l.b
m.c=new A.aY(p,n)
p=m}p.b=!0}},
$S:0}
A.kJ.prototype={}
A.lj.prototype={}
A.il.prototype={$ixm:1}
A.la.prototype={
or(a){var s,r,q
t.O.a(a)
try{if(B.v===$.an){a.$0()
return}A.yu(null,null,this,a,t.H)}catch(q){s=A.ae(q)
r=A.cr(q)
A.vP(A.fA(s),t.l.a(r))}},
he(a){return new A.rF(this,t.O.a(a))},
op(a,b){b.i("0()").a(a)
if($.an===B.v)return a.$0()
return A.yu(null,null,this,a,b)},
eF(a,b,c,d){c.i("@<0>").I(d).i("1(2)").a(a)
d.a(b)
if($.an===B.v)return a.$1(b)
return A.DL(null,null,this,a,b,c,d)},
oq(a,b,c,d,e,f){d.i("@<0>").I(e).I(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.an===B.v)return a.$2(b,c)
return A.DK(null,null,this,a,b,c,d,e,f)},
j1(a,b,c,d){return b.i("@<0>").I(c).I(d).i("1(2,3)").a(a)}}
A.rF.prototype={
$0(){return this.a.or(this.b)},
$S:0}
A.tV.prototype={
$0(){A.Aj(this.a,this.b)},
$S:0}
A.hV.prototype={
gt(a){return this.a},
gL(a){return this.a===0},
gV(a){return this.a!==0},
gY(){return new A.eE(this,this.$ti.i("eE<1>"))},
gav(){var s=this.$ti
return A.jL(new A.eE(this,s.i("eE<1>")),new A.rp(this),s.c,s.y[1])},
P(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kH(a)},
kH(a){var s=this.d
if(s==null)return!1
return this.bf(this.fs(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xo(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xo(q,b)
return r}else return this.kX(b)},
kX(a){var s,r,q=this.d
if(q==null)return null
s=this.fs(q,a)
r=this.bf(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.f5(s==null?m.b=A.vk():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.f5(r==null?m.c=A.vk():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.vk()
p=A.lM(b)&1073741823
o=q[p]
if(o==null){A.vl(q,p,[b,c]);++m.a
m.e=null}else{n=m.bf(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aq(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ff()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.aw(m))}},
ff(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cG(i.a,null,!1,t.z)
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
f5(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.vl(a,b,c)},
fs(a,b){return a[A.lM(b)&1073741823]}}
A.rp.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.hX.prototype={
bf(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eE.prototype={
gt(a){return this.a.a},
gL(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gq(a){var s=this.a
return new A.hW(s,s.ff(),this.$ti.i("hW<1>"))},
u(a,b){return this.a.P(b)}}
A.hW.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.aw(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iaf:1}
A.cc.prototype={
fD(){return new A.cc(A.q(this).i("cc<1>"))},
gq(a){var s=this,r=new A.eH(s,s.r,A.q(s).i("eH<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gL(a){return this.a===0},
gV(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.kG(b)},
kG(a){var s=this.d
if(s==null)return!1
return this.bf(s[this.dg(a)],a)>=0},
gR(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.q(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.q(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.f4(s==null?q.b=A.vm():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.f4(r==null?q.c=A.vm():r,b)}else return q.kk(b)},
kk(a){var s,r,q,p=this
A.q(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.vm()
r=p.dg(a)
q=s[r]
if(q==null)s[r]=[p.ds(a)]
else{if(p.bf(q,a)>=0)return!1
q.push(p.ds(a))}return!0},
ak(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fJ(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fJ(s.c,b)
else return s.lr(b)},
lr(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dg(a)
r=n[s]
q=o.bf(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.h8(p)
return!0},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dq()}},
f4(a,b){A.q(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.ds(b)
return!0},
fJ(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.h8(s)
delete a[b]
return!0},
dq(){this.r=this.r+1&1073741823},
ds(a){var s,r=this,q=new A.l_(A.q(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dq()
return q},
h8(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dq()},
dg(a){return J.av(a)&1073741823},
bf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
$iwQ:1}
A.l_.prototype={}
A.eH.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aw(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iaf:1}
A.oC.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:100}
A.V.prototype={
gq(a){return new A.aS(a,this.gt(a),A.bL(a).i("aS<V.E>"))},
X(a,b){return this.h(a,b)},
gL(a){return this.gt(a)===0},
gV(a){return!this.gL(a)},
gR(a){if(this.gt(a)===0)throw A.d(A.cE())
return this.h(a,0)},
u(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a2(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.d(A.aw(a))}return!1},
a2(a,b){var s,r
A.bL(a).i("n(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.d(A.aw(a))}return!0},
M(a,b){var s,r
A.bL(a).i("n(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.d(A.aw(a))}return!1},
ab(a,b){var s
if(this.gt(a)===0)return""
s=A.ve("",a,b)
return s.charCodeAt(0)==0?s:s},
eM(a,b){return new A.cp(a,b.i("cp<0>"))},
c7(a,b,c){var s=A.bL(a)
return new A.S(a,s.I(c).i("1(V.E)").a(b),s.i("@<V.E>").I(c).i("S<1,2>"))},
l(a,b){var s
A.bL(a).i("V.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cB(a,b){return new A.bM(a,A.bL(a).i("@<V.E>").I(b).i("bM<1,2>"))},
S(a,b){var s,r=A.bL(a)
r.i("l(V.E,V.E)?").a(b)
s=b==null?A.Ek():b
A.kg(a,0,this.gt(a)-1,s,r.i("V.E"))},
n7(a,b,c,d){var s
A.bL(a).i("V.E?").a(d)
A.hq(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.uY(a,"[","]")},
$iQ:1,
$ip:1,
$iE:1}
A.a6.prototype={
aq(a,b){var s,r,q,p=A.q(this)
p.i("~(a6.K,a6.V)").a(b)
for(s=this.gY(),s=s.gq(s),p=p.i("a6.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gH(){return this.gY().c7(0,new A.oE(this),A.q(this).i("N<a6.K,a6.V>"))},
bE(a,b,c,d){var s,r,q,p,o,n=A.q(this)
n.I(c).I(d).i("N<1,2>(a6.K,a6.V)").a(b)
s=A.o(c,d)
for(r=this.gY(),r=r.gq(r),n=n.i("a6.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
lR(a){var s,r
for(s=J.T(A.q(this).i("p<N<a6.K,a6.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
P(a){return this.gY().u(0,a)},
gt(a){var s=this.gY()
return s.gt(s)},
gL(a){var s=this.gY()
return s.gL(s)},
gV(a){var s=this.gY()
return s.gV(s)},
gav(){return new A.hY(this,A.q(this).i("hY<a6.K,a6.V>"))},
p(a){return A.v2(this)},
$iY:1}
A.oE.prototype={
$1(a){var s=this.a,r=A.q(s)
r.i("a6.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a6.V").a(s)
return new A.N(a,s,r.i("N<a6.K,a6.V>"))},
$S(){return A.q(this.a).i("N<a6.K,a6.V>(a6.K)")}}
A.oF.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:41}
A.hY.prototype={
gt(a){var s=this.a
return s.gt(s)},
gL(a){var s=this.a
return s.gL(s)},
gV(a){var s=this.a
return s.gV(s)},
gR(a){var s=this.a,r=s.gY()
r=s.h(0,r.gR(r))
return r==null?this.$ti.y[1].a(r):r},
gq(a){var s=this.a,r=s.gY()
return new A.hZ(r.gq(r),s,this.$ti.i("hZ<1,2>"))}}
A.hZ.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iaf:1}
A.ie.prototype={
k(a,b,c){var s=A.q(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aW("Cannot modify unmodifiable map"))}}
A.fb.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.q(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
P(a){return this.a.P(a)},
aq(a,b){this.a.aq(0,A.q(this).i("~(1,2)").a(b))},
gL(a){var s=this.a
return s.gL(s)},
gV(a){var s=this.a
return s.gV(s)},
gt(a){var s=this.a
return s.gt(s)},
gY(){return this.a.gY()},
p(a){return this.a.p(0)},
gav(){return this.a.gav()},
gH(){return this.a.gH()},
bE(a,b,c,d){return this.a.bE(0,A.q(this).I(c).I(d).i("N<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.dP.prototype={}
A.dh.prototype={
gL(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
J(a,b){var s
for(s=J.T(A.q(this).i("p<1>").a(b));s.m();)this.l(0,s.gn())},
dM(a){var s,r,q=this.bo(0)
for(s=this.gq(this);s.m();){r=s.gn()
if(a.u(0,r))q.ak(0,r)}return q},
p(a){return A.uY(this,"{","}")},
a2(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gq(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
ab(a,b){var s,r,q=this.gq(this)
if(!q.m())return""
s=J.d1(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("n(1)").a(b)
for(s=this.gq(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gR(a){var s=this.gq(this)
if(!s.m())throw A.d(A.cE())
return s.gn()},
X(a,b){var s,r
A.k8(b,"index")
s=this.gq(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oc(b,b-r,this,"index"))},
$iQ:1,
$ip:1,
$idM:1}
A.i8.prototype={
dM(a){var s,r,q,p=this,o=p.fD()
for(s=A.l0(p,p.r,A.q(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.u(0,q))o.l(0,q)}return o},
bo(a){var s=this.fD()
s.J(0,this)
return s}}
A.ln.prototype={
l(a,b){this.$ti.c.a(b)
return A.C5()}}
A.hH.prototype={
u(a,b){return this.a.u(0,b)},
gt(a){return this.a.a},
gq(a){var s=this.a
return A.l0(s,s.r,A.q(s).c)},
bo(a){return this.a.bo(0)}}
A.fu.prototype={}
A.ig.prototype={}
A.kY.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lm(b):s}},
gt(a){return this.b==null?this.c.a:this.bs().length},
gL(a){return this.gt(0)===0},
gV(a){return this.gt(0)>0},
gY(){if(this.b==null){var s=this.c
return new A.ac(s,A.q(s).i("ac<1>"))}return new A.kZ(this)},
gav(){var s,r=this
if(r.b==null){s=r.c
return new A.ay(s,A.q(s).i("ay<2>"))}return A.jL(r.bs(),new A.rr(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.y(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.P(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lJ().k(0,b,c)},
P(a){if(this.b==null)return this.c.P(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aq(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.aq(0,b)
s=o.bs()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tk(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.aw(o))}},
bs(){var s=t.mi.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
lJ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.o(t.N,t.z)
r=n.bs()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
lm(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tk(this.a[a])
return this.b[a]=s}}
A.rr.prototype={
$1(a){return this.a.h(0,A.y(a))},
$S:29}
A.kZ.prototype={
gt(a){return this.a.gt(0)},
X(a,b){var s=this.a
if(s.b==null)s=s.gY().X(0,b)
else{s=s.bs()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gq(a){var s=this.a
if(s.b==null){s=s.gY()
s=s.gq(s)}else{s=s.bs()
s=new J.e3(s,s.length,A.I(s).i("e3<1>"))}return s},
u(a,b){return this.a.P(b)}}
A.rN.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:26}
A.rM.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:26}
A.iN.prototype={
ny(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hq(a4,a5,a2)
s=$.zh()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.ud(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.ud(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bc("")
g=o}else g=o
g.a+=B.b.E(a3,p,q)
c=A.as(j)
g.a+=c
p=k
continue}}throw A.d(A.a8("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.E(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.wl(a3,m,a5,n,l,r)
else{b=B.c.O(r-1,4)+1
if(b===1)throw A.d(A.a8(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bJ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.wl(a3,m,a5,n,l,a)
else{b=B.c.O(a,4)
if(b===1)throw A.d(A.a8(a1,a3,a5))
if(b>1)a3=B.b.bJ(a3,a5,a5,b===2?"==":"=")}return a3}}
A.my.prototype={}
A.e7.prototype={}
A.j1.prototype={}
A.jb.prototype={}
A.hc.prototype={
p(a){var s=A.jc(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jI.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.jH.prototype={
aF(a,b){var s=A.Dz(a,this.gmQ().a)
return s},
ao(a,b){var s=A.BM(a,this.gmY().b,null)
return s},
gmY(){return B.fY},
gmQ(){return B.fX}}
A.ov.prototype={}
A.ou.prototype={}
A.rt.prototype={
jd(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.as(92)
s.a+=o
o=A.as(117)
s.a+=o
o=A.as(100)
s.a+=o
o=p>>>8&15
o=A.as(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.as(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.as(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.as(92)
s.a+=o
switch(p){case 8:o=A.as(98)
s.a+=o
break
case 9:o=A.as(116)
s.a+=o
break
case 10:o=A.as(110)
s.a+=o
break
case 12:o=A.as(102)
s.a+=o
break
case 13:o=A.as(114)
s.a+=o
break
default:o=A.as(117)
s.a+=o
o=A.as(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.as(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.as(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.as(92)
s.a+=o
o=A.as(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.E(a,r,m)},
dd(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.jI(a,null))}B.a.l(s,a)},
cX(a){var s,r,q,p,o=this
if(o.jc(a))return
o.dd(a)
try{s=o.b.$1(a)
if(!o.jc(s)){q=A.wM(a,null,o.gfH())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.ae(p)
q=A.wM(a,r,o.gfH())
throw A.d(q)}},
jc(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jd(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dd(a)
q.oC(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dd(a)
r=q.oD(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
oC(a){var s,r,q=this.c
q.a+="["
s=J.aK(a)
if(s.gV(a)){this.cX(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cX(s.h(a,r))}}q.a+="]"},
oD(a){var s,r,q,p,o,n,m=this,l={}
if(a.gL(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.cG(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aq(0,new A.ru(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jd(A.y(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.cX(r[n])}p.a+="}"
return!0}}
A.ru.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:41}
A.rs.prototype={
gfH(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ku.prototype={}
A.qJ.prototype={
mm(a){return new A.rL(this.a).kI(t.J.a(a),0,null,!0)}}
A.rL.prototype={
kI(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.hq(b,c,J.c3(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Cm(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Cl(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dh(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Cn(o)
l.b=0
throw A.d(A.a8(m,a,p+l.c))}return n},
dh(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.T(b+c,2)
r=q.dh(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dh(a,s,c,d)}return q.mP(a,b,c,d)},
mP(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bc(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.as(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.as(h)
e.a+=p
break
case 65:p=A.as(h)
e.a+=p;--d
break
default:p=A.as(h)
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
p=A.as(a[l])
e.a+=p}else{p=A.x6(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.as(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.e8.prototype={
Z(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.e8)if(this.a===b.a)s=this.b===b.b
return s},
gK(a){return A.cn(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
p(a){var s=this,r=A.zZ(A.B0(s)),q=A.j3(A.AZ(s)),p=A.j3(A.AV(s)),o=A.j3(A.AW(s)),n=A.j3(A.AY(s)),m=A.j3(A.B_(s)),l=A.ws(A.AX(s)),k=s.b,j=k===0?"":A.ws(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaZ:1}
A.dA.prototype={
Z(a,b){if(b==null)return!1
return b instanceof A.dA&&this.a===b.a},
gK(a){return B.c.gK(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.T(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.T(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.nX(B.c.p(o%1e6),6,"0")},
$iaZ:1}
A.kR.prototype={
p(a){return this.A()},
$iD:1}
A.ak.prototype={
gbM(){return A.AU(this)}}
A.iJ.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jc(s)
return"Assertion failed"}}
A.dk.prototype={}
A.ci.prototype={
gdk(){return"Invalid argument"+(!this.a?"(s)":"")},
gdj(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gdk()+q+o
if(!s.a)return n
return n+s.gdj()+": "+A.jc(s.gep())},
gep(){return this.b}}
A.ff.prototype={
gep(){return A.vu(this.b)},
gdk(){return"RangeError"},
gdj(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.jx.prototype={
gep(){return A.c(this.b)},
gdk(){return"RangeError"},
gdj(){if(A.c(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.hI.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kp.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fj.prototype={
p(a){return"Bad state: "+this.a}}
A.iY.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jc(s)+"."}}
A.jZ.prototype={
p(a){return"Out of Memory"},
gbM(){return null},
$iak:1}
A.hB.prototype={
p(a){return"Stack Overflow"},
gbM(){return null},
$iak:1}
A.rb.prototype={
p(a){return"Exception: "+this.a}}
A.H.prototype={
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
cB(a,b){return A.zP(this,A.q(this).i("p.E"),b)},
c7(a,b,c){var s=A.q(this)
return A.jL(this,s.I(c).i("1(p.E)").a(b),s.i("p.E"),c)},
cW(a,b){var s=A.q(this)
return new A.O(this,s.i("n(p.E)").a(b),s.i("O<p.E>"))},
eM(a,b){return new A.cp(this,b.i("cp<0>"))},
u(a,b){var s
for(s=this.gq(this);s.m();)if(J.a2(s.gn(),b))return!0
return!1},
bB(a,b,c,d){var s,r
d.a(b)
A.q(this).I(d).i("1(1,p.E)").a(c)
for(s=this.gq(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a2(a,b){var s
A.q(this).i("n(p.E)").a(b)
for(s=this.gq(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
ab(a,b){var s,r,q=this.gq(this)
if(!q.m())return""
s=J.d1(q.gn())
if(!q.m())return s
r=b.gL(b)
if(r){r=s
do r+=J.d1(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.d1(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.q(this).i("n(p.E)").a(b)
for(s=this.gq(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bL(a,b){var s=A.K(this,A.q(this).i("p.E"))
return s},
bK(a){return this.bL(0,!0)},
gt(a){var s,r=this.gq(this)
for(s=0;r.m();)++s
return s},
gL(a){return!this.gq(this).m()},
gV(a){return!this.gL(this)},
gR(a){var s=this.gq(this)
if(!s.m())throw A.d(A.cE())
return s.gn()},
gaK(a){var s,r=this.gq(this)
if(!r.m())throw A.d(A.cE())
s=r.gn()
if(r.m())throw A.d(A.wE())
return s},
aZ(a,b,c){var s,r=A.q(this)
r.i("n(p.E)").a(b)
r.i("p.E()?").a(c)
for(r=this.gq(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cE())},
ah(a,b){return this.aZ(0,b,null)},
X(a,b){var s,r
A.k8(b,"index")
s=this.gq(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.oc(b,b-r,this,"index"))},
p(a){return A.AB(this,"(",")")}}
A.N.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.ax.prototype={
gK(a){return A.F.prototype.gK.call(this,0)},
p(a){return"null"}}
A.F.prototype={$iF:1,
Z(a,b){return this===b},
gK(a){return A.ho(this)},
p(a){return"Instance of '"+A.k5(this)+"'"},
ga_(a){return A.lK(this)},
toString(){return this.p(this)}}
A.lk.prototype={
p(a){return""},
$icN:1}
A.qq.prototype={
gmW(){var s,r=this.b
if(r==null)r=$.pf.$0()
s=r-this.a
if($.wb()===1e6)return s
return s*1000}}
A.bc.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iBh:1}
A.qI.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.y(b)
s=B.b.c1(b,"=")
if(s===-1){if(b!=="")a.k(0,A.vr(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.E(b,0,s)
q=B.b.bp(b,s+1)
p=this.a
a.k(0,A.vr(r,0,r.length,p,!0),A.vr(q,0,q.length,p,!0))}return a},
$S:156}
A.qH.prototype={
$2(a,b){throw A.d(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:55}
A.ih.prototype={
gh1(){var s,r,q,p,o=this,n=o.w
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
gK(a){var s,r=this,q=r.y
if(q===$){s=B.b.gK(r.gh1())
r.y!==$&&A.z2()
r.y=s
q=s}return q},
gaR(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.xe(s==null?"":s)
r.z!==$&&A.z2()
q=r.z=new A.dP(s,t.oP)}return q},
gj9(){return this.b},
geo(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.a9(s,"v",1))return B.b.E(s,1,s.length-1)
return s},
gew(){var s=this.d
return s==null?A.xA(this.a):s},
gey(){var s=this.f
return s==null?"":s},
giD(){var s=this.r
return s==null?"":s},
giE(){return this.c!=null},
giG(){return this.f!=null},
giF(){return this.r!=null},
p(a){return this.gh1()},
Z(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.geQ())if(p.c!=null===b.giE())if(p.b===b.gj9())if(p.geo()===b.geo())if(p.gew()===b.gew())if(p.e===b.giV()){r=p.f
q=r==null
if(!q===b.giG()){if(q)r=""
if(r===b.gey()){r=p.r
q=r==null
if(!q===b.giF()){s=q?"":r
s=s===b.giD()}}}}return s},
$iks:1,
geQ(){return this.a},
giV(){return this.e}}
A.qG.prototype={
gj8(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.cN(s,"?",m)
q=s.length
if(r>=0){p=A.ii(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.kN("data","",n,n,A.ii(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.le.prototype={
giE(){return this.c>0},
giG(){return this.f<this.r},
giF(){return this.r<this.a.length},
geQ(){var s=this.w
return s==null?this.w=this.kF():s},
kF(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.E(r.a,0,q)},
gj9(){var s=this.c,r=this.b+3
return s>r?B.b.E(this.a,r,s-1):""},
geo(){var s=this.c
return s>0?B.b.E(this.a,s,this.d):""},
gew(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.yQ(B.b.E(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
giV(){return B.b.E(this.a,this.e,this.f)},
gey(){var s=this.f,r=this.r
return s<r?B.b.E(this.a,s+1,r):""},
giD(){var s=this.r,r=this.a
return s<r.length?B.b.bp(r,s+1):""},
gaR(){if(this.f>=this.r)return B.cx
return new A.dP(A.xe(this.gey()),t.oP)},
gK(a){var s=this.x
return s==null?this.x=B.b.gK(this.a):s},
Z(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$iks:1}
A.kN.prototype={}
A.oU.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.uH.prototype={
$1(a){return this.a.dF(this.b.i("0/?").a(a))},
$S:17}
A.uI.prototype={
$1(a){if(a==null)return this.a.hf(new A.oU(a===undefined))
return this.a.hf(a)},
$S:17}
A.u8.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.ye(a))return a
s=this.a
a.toString
if(s.P(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.i(A.aT(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.e0(!0,"isUtc",t.y)
return new A.e8(r,0,!0)}if(a instanceof RegExp)throw A.d(A.x("structured clone of RegExp",null))
if(a instanceof Promise)return A.aX(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.o(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c2(n),p=s.gq(n);p.m();)m.push(A.d_(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.c(a.length)
for(s=J.aK(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:59}
A.kX.prototype={
aH(a){if(a<=0||a>4294967296)throw A.d(A.wY(u.w+a))
return Math.random()*a>>>0},
cR(){return Math.random()},
$iv8:1}
A.fo.prototype={
d4(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.b5()
l.b5()
l.b5()
l.b5()},
b5(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.T(o-n+(q-p)+(m-r),4294967296)>>>0},
aH(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.wY(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b5()
return(p.a&s)>>>0}do{p.b5()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cR(){var s,r=this
r.b5()
s=r.a
r.b5()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iv8:1}
A.pi.prototype={
D(){var s,r=this
if(B.a.M(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.pj()))throw A.d(B.f6)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.ev)}}
A.pj.prototype={
$1(a){return A.c(a)<=0},
$S:27}
A.eq.prototype={
A(){return"QualityProfileKind."+this.b}}
A.ep.prototype={}
A.mG.prototype={}
A.mH.prototype={}
A.k3.prototype={
D(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.P(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.G(q,A.q(q).i("G<1,2>")).gq(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.x("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.x("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.x("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.d(A.x("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.eZ.prototype={}
A.ji.prototype={
D(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gai(0)||!k.b.gai(0)||!k.r.gai(0))throw A.d(A.x("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.x("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.x("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gai(0)||r.gc4()<1e-12)A.i(A.x("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.i(A.x("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.x("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.i(A.x("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.i(A.x("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.x("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.i(A.x("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.i(A.x("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.nj.prototype={}
A.dg.prototype={
Z(a,b){if(b==null)return!1
return J.eQ(b)===A.lK(this)&&b instanceof A.dg&&this.a===b.a&&this.b===b.b},
gK(a){return A.cn(A.lK(this),this.a,this.b,B.f,B.f,B.f)}}
A.bD.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bd.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cH.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.k_.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cC.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.ef.prototype={
A(){return"HandleRejection."+this.b}}
A.jt.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.dd.prototype={
gai(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
Z(a,b){if(b==null)return!1
return b instanceof A.dd&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gK(a){return A.cn(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.mZ.prototype={}
A.k2.prototype={}
A.bn.prototype={}
A.uJ.prototype={
$2(a,b){var s,r=t.jX
r.a(a)
r.a(b)
s=B.d.F(b.a,a.a)
return s===0?B.c.F(a.b.a,b.b.a):s},
$S:67}
A.iI.prototype={
A(){return"AlphaMode."+this.b}}
A.em.prototype={
D(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.x("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.x("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.x("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.v5("roughness",1)
A.v5("metallic",0)
A.v5("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.az("uvScaleU",s),new A.az("uvScaleV",r),new A.az("uvOffsetU",0),new A.az("uvOffsetV",0),new A.az("tintR",l.c),new A.az("tintG",l.d),new A.az("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.x("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.d(A.x("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.x("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cR.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.bo.prototype={}
A.qK.prototype={
D(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.R[s]
q=r.c
if(q<=0)throw A.d(A.x(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.x(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.iV.a(new A.qL())
for(p=B.a.gq(B.R),q=new A.R(p,q,t.mW);q.m();)if(p.gn().c!==4)throw A.d(A.x('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.qL.prototype={
$1(a){return t.gm.a(a).a===B.d8},
$S:18}
A.c8.prototype={
D(){var s,r,q,p,o,n=this
n.a.D()
s=n.b.length
if(B.c.O(s,14)!==0)throw A.d(A.x("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.lM()
r=n.c
if(r!=null){q=s/14|0
for(s=A.AK(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.x("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gai(0)&&s.b.gai(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.x("MeshData.localBounds must be a valid AABB",null))},
lM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.iV,a3=t.kh,a4=new A.O(B.R,a2.a(new A.oJ()),a3)
if(!a4.gq(0).m())return
s=new A.O(B.R,a2.a(new A.oK()),a3)
if(s.gt(0)!==1)throw A.d(A.x("surface-v2 tangent data requires one normal slot",a1))
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
if(!B.a.a2(A.e([j,h,g,f,e,d,c],p),new A.oL()))throw A.d(A.x("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.x("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.x("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.x("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.oJ.prototype={
$1(a){return t.gm.a(a).a===B.d8},
$S:18}
A.oK.prototype={
$1(a){return t.gm.a(a).a===B.d7},
$S:18}
A.oL.prototype={
$1(a){return isFinite(A.bZ(a))},
$S:5}
A.oW.prototype={
D(){var s=this.a,r=s.a
if(!r.u(0,"sceneColor")||!r.u(0,"present"))throw A.d(A.x("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.oY()))throw A.d(A.x("resource plan contains an empty resource ID",null))
if(this.b!==r.u(0,"vhsOutput"))throw A.d(A.x("resource history does not match vhsOutput ownership",null))}}
A.oY.prototype={
$1(a){return A.y(a).length===0},
$S:3}
A.pb.prototype={}
A.kb.prototype={
iI(a){var s=this
if(s.d)A.i(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.D()
s.a=a
s.c=1},
bi(){if(this.d)return
this.d=!0
this.a=null}}
A.f3.prototype={
A(){return"DrawMode."+this.b}}
A.iP.prototype={
A(){return"BlendMode."+this.b}}
A.bG.prototype={}
A.kk.prototype={
D(){var s=this
if(s.a<0||s.b<0)throw A.d(A.x("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.x("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.x("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.iX.prototype={
A(){return"ColorEncoding."+this.b}}
A.j7.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.k9.prototype={
D(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dM(B.jU)
if(o.a!==0)A.i(A.ao(o,r,"contains unknown pipeline features"))
if(q.a===B.b1&&p.gV(p))A.i(A.ao(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.x("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.et.prototype={
A(){return"RendererState."+this.b}}
A.aD.prototype={}
A.nl.prototype={
iU(a){var s=this.z.h(0,a)
return s==null?B.bR:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.jO.prototype={
oe(a){return this.a.bW(a)}}
A.oH.prototype={
$3(a,b,c){return new A.cH(A.c(a),A.c(b),A.aQ(c))},
$S:77}
A.kr.prototype={}
A.oM.prototype={
bx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.xk(f,new A.jl(e.byteLength,B.c0,B.fs))
if(f.b!==B.h)A.i(A.m(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.cU(f)
A.bp(f,p)
if(f.b!==B.h)A.i(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a5(t.S)
for(n=a.a,m=0;m<6;++m){l=B.R[m]
k=A.yB(l.a)
if(!o.l(0,k))continue
j=A.CK(n,k,l)
if(f.b!==B.h)A.i(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.c(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.i(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.xk(f,new A.jl(A.wT(i),B.c0,B.c_))
if(f.b!==B.h)A.i(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.BC(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kr(d,h,p,f,e.length/14|0,!1)},
eD(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dF(B.as,a))
this.b.bW(a)
return s},
ba(a){var s,r,q=this.c.ak(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.ba(a)},
eB(){var s,r,q,p
for(s=this.b.bD(),r=s.$ti,s=new A.cq(s.a(),r.i("cq<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bx(p.b))}},
gc5(){return this.b.bD().bB(0,0,new A.oO(),t.S)}}
A.oN.prototype={
$3(a,b,c){return new A.bD(A.c(a),A.c(b),A.aQ(c))},
$S:79}
A.oO.prototype={
$2(a,b){var s,r
A.c(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.wT(s)
return a+r+s},
$S:83}
A.ca.prototype={}
A.dN.prototype={
A(){return"TextureResidencyStatus."+this.b}}
A.bS.prototype={}
A.qz.prototype={
cn(a){var s=this.a,r=A.I(s)
return new A.O(s,r.i("n(1)").a(new A.qA(a)),r.i("O<1>")).gt(0)}}
A.qA.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:85}
A.qx.prototype={
o0(a){var s,r,q,p,o,n,m,l,k,j,i
t.cZ.a(a)
s=A.o(t.N,t.oB)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.i(A.x("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.i(A.ao(n,"handle","must be valid"))
if(s.P(o))throw A.d(A.x("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("ay<2>")
m=A.K(new A.ay(s,r),r.i("p.E"))
B.a.S(m,new A.qy())
r=t.lu
l=A.a5(r)
k=A.o(r,t.nM)
j=A.e([],t.ji)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.ll(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.bS(p,i))}r=l.a
return new A.qz(A.al(j,t.d),r)},
ll(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.h2(a,r)===s.d)return B.d1
this.b.k(0,a,!0)
return B.d0}catch(q){if(A.ae(q) instanceof A.jt){s=this.b.h(0,a)===!0?B.d3:B.d2
return s}else throw q}}}
A.qy.prototype={
$2(a,b){var s,r=t.oB
r.a(a)
r.a(b)
s=B.c.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:92}
A.dp.prototype={}
A.kn.prototype={
aM(a){var s=this.a,r=A.vh(s,B.fv)
A.vi(s,r,0,a)
return r},
ov(a,b){var s,r,q,p=this,o=p.b,n=o.bW(a),m=A.K(n.b,t.nh)
B.a.k(m,0,b)
s=n.a
o.eJ(a,new A.dp(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.vh(p.a,s)
o.k(0,r,q)}A.vi(p.a,q,0,b)},
h2(a,b){var s
this.b.bW(a)
s=this.c.h(0,a.a)
return s==null?b:s},
oa(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.h2(a,s)},
oi(a){var s=this.e
s===$&&A.h()
return s},
ol(a){var s=this.f
s===$&&A.h()
return s},
oc(a){var s=this.r
s===$&&A.h()
return s},
og(a){var s=this.w
s===$&&A.h()
return s},
bi(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ag(s,s.r,s.e,A.q(s).i("ag<2>")),q=n.a,p=q.a,o=t.fL;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.G(0)
s=n.d
s===$&&A.h()
A.kF(q,s)
s=n.e
s===$&&A.h()
A.kF(q,s)
s=n.f
s===$&&A.h()
A.kF(q,s)
s=n.r
s===$&&A.h()
A.kF(q,s)
s=n.w
s===$&&A.h()
A.kF(q,s)},
eB(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aM($.wa())
i.e=i.aM($.w7())
i.f=i.aM($.w8())
i.r=i.aM($.w6())
i.w=i.aM($.w9())
for(s=i.b.bD(),r=s.$ti,s=new A.cq(s.a(),r.i("cq<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a2(o,new A.qD()))continue
l=A.vh(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.vi(p,l,k,j)}q.k(0,n.a,l)}},
gc5(){return this.b.bD().bB(0,0,new A.qC(),t.S)}}
A.qB.prototype={
$3(a,b,c){return new A.bd(A.c(a),A.c(b),A.aQ(c))},
$S:107}
A.qD.prototype={
$1(a){return t.nh.a(a)==null},
$S:110}
A.qC.prototype={
$2(a,b){var s
A.c(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:112}
A.eh.prototype={
gnf(){return this.b.length}}
A.jg.prototype={
m7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.pm(A.e([],t.hJ),A.a5(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].af(s,b)
o=s.m6(a,!1)
if(o.b.length!==0)return new A.jh(o,B.hB)
q=o.a
n=A.I(q)
m=new A.S(q,n.i("j(1)").a(new A.ne()),n.i("S<1,j>")).bo(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.ae(d),j=0;j<1;++j){i=n[j]
if(!m.u(0,i.gC().a))throw A.d(A.m('RenderFeature "'+k.ga3()+'" created a pass "'+i.gC().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.S(l,new A.nf(o))
return new A.jh(o,l)}}
A.ne.prototype={
$1(a){return t.A.a(a).a},
$S:117}
A.nf.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.iH(s,new A.nc(a)),B.a.iH(s,new A.nd(b)))},
$S:131}
A.nc.prototype={
$1(a){return t.A.a(a).a===this.a.gC().a},
$S:8}
A.nd.prototype={
$1(a){return t.A.a(a).a===this.a.gC().a},
$S:8}
A.jh.prototype={}
A.eb.prototype={
A(){return"FrameQueueState."+this.b}}
A.nk.prototype={}
A.ni.prototype={
m3(a){if(a.length===0)throw A.d(A.ao(a,"passId",null))
this.b=a
this.a.c8(a,A.yK())},
jL(){var s,r,q,p,o=t.z
o=A.o(o,o)
for(s=this.a,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aD(p.a,p.b,p.d))}return A.b_(o,t.N,t.m9)},
bu(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.x("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.c.T(a,3)*b}}
A.fn.prototype={}
A.ar.prototype={
gbH(){var s=this.c,r=A.I(s)
return new A.O(s,r.i("n(1)").a(new A.p_()),r.i("O<1>"))},
gcd(){var s=this.c,r=A.I(s)
return new A.O(s,r.i("n(1)").a(new A.p0()),r.i("O<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.p_.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.i||s===B.G},
$S:22}
A.p0.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:22}
A.c5.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.b7.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hu.prototype={
A(){return"ResourceFormat."+this.b}}
A.cz.prototype={
A(){return"GraphStage."+this.b}}
A.aN.prototype={
iQ(){var s=this
return new A.aN(s.a,s.b,s.c,s.d,s.e,s.f+1)},
Z(a,b){var s=this
if(b==null)return!1
return b instanceof A.aN&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gK(a){var s=this
return A.cn(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fg.prototype={
A(){return"ResourceAccess."+this.b}}
A.M.prototype={}
A.fV.prototype={}
A.pg.prototype={
ar(a){var s,r,q,p,o,n,m=this
a.D()
s=null
try{r=t.a
s=A.BE(m.a,a.c,r.a(a.d.gY().bK(0)),r.a(a.f),a.b)}catch(q){if(A.ae(q) instanceof A.hz){++m.e
throw q}else throw q}p=new A.fV(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
kM(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.ag(s,s.r,s.e,a.$ti.i("ag<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bb.prototype={
D(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.x("ProgramSource.id must not be empty",m))
s=t.S
r=A.a5(s)
for(q=this.d.gH(),q=q.gq(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.x('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.x('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a5(s)
for(s=this.e.gH(),s=s.gq(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.x('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.x('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.pk.prototype={}
A.b1.prototype={
ad(){var s=this
return A.wu(B.dy,s.f,B.ai,B.a0,!0,!0,!0,!0,s.r,B.ak,B.al,s.d,s.e,!0,!1,!1)}}
A.pm.prototype={
m6(a,b){var s=this.lK(t.Q.a(a),!1),r=this.a,q=A.I(r)
return new A.pl(A.al(new A.O(r,q.i("n(1)").a(new A.pr()),q.i("O<1>")),t.A),s)},
lK(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.aW)
r=m.a
q=A.I(r)
p=q.i("O<1>")
o=A.K(new A.O(r,q.i("n(1)").a(new A.pq()),p),p.i("p.E"))
m.ku(o,a,s)
m.ky(o,s)
m.kA(o,s)
m.kx(o,!1,s)
n=m.kC(o,s)
m.kz(o,n,s)
m.kB(o,s)
m.kw(o,n,s)
m.kv(o,s)
return s},
ku(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.M.dM(b)
if(p.a!==0)B.a.l(c,new A.b7(B.fG,q.a,"missing capabilities: "+p.ab(0,", ")))}},
ky(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbH(),o=J.T(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.b7(B.fB,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
kA(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.I(a),r=s.i("n(1)").a(new A.pp()),q=B.a.gq(a),s=new A.R(q,r,s.i("R<1>"));s.m();){r=q.gn()
p=r.gbH()
o=A.K(p,p.$ti.i("p.E"))
p=r.gcd()
n=A.K(p,p.$ti.i("p.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.b7(B.aL,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaK(o).a
l=B.a.gaK(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.b7(B.aL,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.b7(B.aL,r.a,"resolve source and destination must match format and extent"))}},
kx(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.G)B.a.l(c,new A.b7(B.fE,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kC(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.o(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcd(),n=J.T(o.a),o=new A.R(n,o.b,o.$ti.i("R<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.b7(B.fA,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kz(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbH(),p=J.T(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.G)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.b7(B.c5,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.c1(a,m)>s)B.a.l(c,new A.b7(B.c5,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
kB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbH(),o=J.T(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
for(l=q.gcd(),k=J.T(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.b7(B.fD,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
kw(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbH(),o=J.T(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcd().ah(0,new A.po(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.b7(B.fC,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
kv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.o(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcd(),o=J.T(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.jC(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a5(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbH(),p=J.T(s.a),s=new A.R(p,s.b,s.$ti.i("R<1>"));s.m();){o=p.gn()
if(o.b===B.G)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cG(s,!1,!1,p)
s=a.length
i=A.cG(s,!1,!1,p)
h=new A.pn(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.b7(B.fF,a[q].a,"participates in a resource dependency cycle"))}}}}
A.pr.prototype={
$1(a){t.A.a(a)
return A.v6()},
$S:8}
A.pq.prototype={
$1(a){t.A.a(a)
return A.v6()},
$S:8}
A.pp.prototype={
$1(a){return t.A.a(a).f},
$S:8}
A.po.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:22}
A.pn.prototype={
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
r=A.l0(r,r.r,A.q(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:27}
A.pl.prototype={}
A.kW.prototype={$ibR:1,
ga3(){return this.a},
gC(){return this.b},
geO(){return this.c}}
A.hr.prototype={
dC(a){var s,r,q=a.c,p=q.a
if(!p.gai(0))A.i(A.x("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.i(A.x("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.i(A.x(u.u,null))
s=this.a.bW(a.a)
q=q.a7()
p=s.d.gaz()
r=A.I(p)
return A.bi(new A.S(p,r.i("L(1)").a(q.gaC()),r.i("S<1,L>")))},
giL(){return new A.cd(this.no(),t.fJ)},
no(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$giL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bD(),n=o.$ti,o=new A.cq(o.a(),n.i("cq<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.D()
f=k.a(g.a)
m.a1(f)
f=f.a
if(!(f>=0&&f<j.length)){A.f(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a7()
f=f.gaz()
d=A.I(f)
r=5
return a.b=new A.kW(h,g,A.bi(new A.S(f,d.i("L(1)").a(i.gaC()),d.i("S<1,L>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iB6:1}
A.pt.prototype={
$3(a,b,c){return new A.cC(A.c(a),A.c(b),A.aQ(c))},
$S:145}
A.pC.prototype={
eA(a,b){var s,r
if(this.w)A.i(A.m("resource library is disposed"))
s=this.a
a.D()
r=s.b.aE(a,b)
s.c.k(0,r.a,s.bx(a))
this.e.l(0,r)
return r},
j4(a){if(this.w)A.i(A.m("resource library is disposed"))
this.a.ba(a)
this.e.ak(0,a)},
j2(a){var s
if(this.w)A.i(A.m("resource library is disposed"))
a.D()
s=this.b.a.aE(a,null)
this.f.l(0,s)
return s},
j3(a,b,c){var s,r
if(this.w)A.i(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.i(A.x("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.i(A.x("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aE(new A.dp(new A.jn(c,b,1,!1,B.aq,B.aq,B.c2,1),A.cG(1,null,!1,t.nh),!1),a)
this.r.l(0,r)
return r},
bi(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)return
s=i.r
r=A.K(s,A.q(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.ak(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.ba(k)}r=i.f
q=A.K(r,A.q(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.ba(q[l])
q=i.e
o=A.K(q,A.q(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.ba(o[l])
s.G(0)
r.G(0)
q.G(0)
p.bi()
i.w=!0}}
A.rc.prototype={}
A.ll.prototype={$ibR:1,
ga3(){return this.a},
gC(){return this.b},
geO(){return this.c}}
A.tA.prototype={
$1(a){var s=this.a.w.a.eD(a),r=s.b!=null,q=r?s.d:s.e
return new A.ht(s.c,r,q,s.f)},
$S:146}
A.tB.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.u(0,a))return this.b.x.gn().iR(a)
if(b!=null&&s.u(0,b))return this.b.x.gn().iR(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:147}
A.tz.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.ts.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gR(r)},
$S:157}
A.tt.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.aT
s=q.b.z
r=s.length===0?null:B.a.gR(s)
return A.EU(s,3,q.a.d,r)},
$S:163}
A.ty.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.tn.prototype={
$0(){return this.a.at.a},
$S:45}
A.tp.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.to.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.tx.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.tl.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.tm.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.tu.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.tv.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.tw.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.tr.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.tq.prototype={
$0(){return this.a.at.w},
$S:46}
A.tC.prototype={
$0(){return this.a},
$S:47}
A.rG.prototype={}
A.l7.prototype={$iB5:1}
A.kT.prototype={$iAl:1}
A.pI.prototype={
gaI(){var s=this.w
return s==null?A.i(A.m("renderer is not initialized")):s},
iJ(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.b5)throw A.d(A.m("renderer can only be initialized once"))
a.D()
b.D()
s=m.a
if(s.b===B.a5)throw A.d(A.m("renderer device is context lost"))
m.e=B.ju
try{m.r=s.j_()
r=m.b
q=A.oX(a)
p=r.a
if(p.a!=null)A.i(A.m("configuration state is already initialized"))
a.D()
p.a=a
A.oX(a)
p.d=1
r.b.iI(q)
r=A.AJ()
m.w=new A.pC(A.AL(s),r,A.Bj(s),A.a5(t.l0),A.a5(t.fP),A.a5(t.lu))
r=new A.kb()
p=new A.nC(s,r)
q=A.oX(a)
o=p.fj(q,a)
r.iI(q)
p.c=new A.k4(new A.pb(q),o)
m.x=p
m.y=new A.pg(s,A.o(t.N,t.gY))
m.as=a
A.y_(m)
m.e=B.b6}catch(n){s=m.y
if(s!=null){r=s.b
s.kM(new A.ay(r,A.q(r).i("ay<2>")))
r.G(0)}s=m.x
if(s!=null)s.bi()
s=m.w
if(s!=null)s.bi()
m.w=null
m.e=B.b5
throw n}return A.uX(t.H)},
m1(a,b){var s,r,q,p,o,n,m=this,l=null
m.lp()
m.co()
r=B.a.u(m.d,a)
if(!r)throw A.d(A.x("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gai(0))A.i(A.x("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gai(0)||q.gc4()<1e-12)A.i(A.x("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.i(A.x("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.i(A.x("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gai(0)||!r.b.gai(0)||!r.c.gai(0))A.i(A.x("CameraView matrices must be finite",l))
b.b.D()
b.c.D()
r=b.w
if(!isFinite(r))A.i(A.x("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ap)A.i(A.m("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ap
o.c=0
B.a.G(o.a)
s=o
try{r=m.r
if((r==null?A.i(A.m("renderer is not initialized")):r).z)m.b$=m.a.m2()
return s}catch(n){if(o.b!==B.ap)A.i(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.fb
m.f2()
m.ax=m.at=null
throw n}},
mZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.co()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ap)A.i(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hE(l,0,A.e0(m.c,"count",t.S),A.I(l).c).bL(0,!1)
m.b=B.fa
q=k
try{p=A.CV(a1,r,s,q)
o=p.a.jL()
m=o.gH().cW(0,new A.pJ())
l=m.$ti
n=new A.cm(m,l.i("aD(1)").a(new A.pK()),l.i("cm<1,aD>")).bB(0,B.bR,new A.pL(),t.m9)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gc5()
g=g.c.gc5()
e=a1.w
e.a.gc5()
e.c.gc5()
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
return new A.nl(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.kW(s.e)
a1.ax=a1.at=null}},
lp(){var s,r,q,p=this
if(p.e!==B.cP)return
if(p.a.b===B.a5)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.w)A.i(A.m("resource library is disposed"))
s.a.eB()
s.c.eB()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.i(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.i(A.m("GPU resource adapter is not initialized"))
s.c=new A.k4(q.a,s.fj(A.oX(r),r))
s=p.y
s.c=null
s.b.G(0)
A.y_(p)
p.e=B.b6},
co(){var s=this,r=s.e
if(r!==B.b6)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.a5){s.kP()
s.e=B.cP
throw A.d(A.m("renderer context lost"))}}}
A.pJ.prototype={
$1(a){return B.b.u(t.iO.a(a).a.toLowerCase(),"world")},
$S:48}
A.pK.prototype={
$1(a){return t.iO.a(a).b},
$S:49}
A.pL.prototype={
$2(a,b){var s=t.m9
s.a(a)
s.a(b)
return new A.aD(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.l5.prototype={}
A.ro.prototype={
kW(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.i(A.m(u.k))
r=s.h4(o)
if(r.b)A.i(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.l5(o))}catch(q){p.di(o)}},
f2(){var s=this.b$
this.b$=null
if(s!=null)this.di(s)},
kP(){var s,r,q
this.f2()
s=this.a$
r=J.wH(s.slice(0),A.I(s).c)
B.a.G(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.di(r[q].b)},
di(a){var s,r
try{s=this.a
s.a.deleteQuery(s.h4(a).a)}catch(r){}}}
A.lb.prototype={}
A.hA.prototype={
A(){return"ShadowCasterLod."+this.b}}
A.bE.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iaZ:1}
A.bB.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iaZ:1}
A.aO.prototype={}
A.uO.prototype={
$2(a,b){var s=t.bz
return s.a(a).a.F(0,s.a(b).a)},
$S:51}
A.uP.prototype={
$1(a){return t.bz.a(a).b},
$S:52}
A.uM.prototype={
$2(a,b){var s=t.eU
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.uN.prototype={
$1(a){return t.eU.a(a).b},
$S:54}
A.mV.prototype={}
A.mU.prototype={}
A.iG.prototype={
gaz(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.L(o,n,p),new A.L(r,n,p),new A.L(o,q,p),new A.L(r,q,p),new A.L(o,n,s),new A.L(r,n,s),new A.L(o,q,s),new A.L(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eo.prototype={}
A.f7.prototype={
A(){return"FrustumTest."+this.b}}
A.nm.prototype={
os(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.bS
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.fc:B.fd}}
A.nn.prototype={
$4(a,b,c,d){var s=new A.L(a,b,c),r=new A.eo(s,d),q=Math.sqrt(s.gc4())
if(q<1e-9)s=r
else{s=1/q
s=new A.eo(new A.L(a*s,b*s,c*s),d/q)}return s},
$S:44}
A.de.prototype={
a4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.de(h)},
j6(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
es(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.de(h)},
gai(a){return B.p.a2(this.a,new A.oG())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.oG.prototype={
$1(a){return isFinite(A.bZ(a))},
$S:5}
A.k7.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.ko.prototype={
D(){var s=this.a
if(!s.gai(0))throw A.d(A.x("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.x("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.x(u.u,null))},
a7(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.wR(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.wR(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.L.prototype={
bX(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bg(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.L(s*r-q*p,q*o-n*r,n*p-s*o)},
gc4(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc4())},
gai(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gc4())
return r<1e-9?B.ad:new A.L(s.a/r,s.b/r,s.c/r)},
Z(a,b){if(b==null)return!1
return b instanceof A.L&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gK(a){return A.cn(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.hQ.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.fT.prototype={
ga3(){return this.f},
af(a,b){B.a.l(a.a,new A.ar(this.f,B.J,A.e([new A.M(this.x,B.i),new A.M(this.y,B.j)],t.C),!1))},
ae(a){var s=this,r=s.a.ar(new A.bb(s.e,s.b,s.c,B.t,B.cv,B.cq)),q=A.cU(s.d),p=t.n,o=s.r===B.dd?new Float32Array(A.a0(A.e([1/s.Q,0],p))):new Float32Array(A.a0(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.kK(new A.b1(s.f,A.e([new A.M(s.x,B.i),new A.M(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iaj:1}
A.kK.prototype={
ag(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bW(r,a.al(o.r).b)
A.bf(r,o.a.ad())
A.dn(r,B.a3,1,0,0,0)
A.cb(r,o.b.b)
q=t._
p=o.d
if(o.e)A.BA(r,0,q.a(p.$0()))
else A.aB(r,0,q.a(p.$0()))
A.v(r,"uSource",B.u)
A.v(r,"uTexelStep",new A.z(B.ax,o.f))
A.bp(r,o.c)
s.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.iQ.prototype={
ga3(){return"bloomComposite"},
af(a,b){B.a.l(a.a,new A.ar("bloomComposite",B.J,A.e([new A.M(this.f,B.i),new A.M(this.r,B.i),new A.M(this.w,B.j)],t.C),!1))},
ae(a){var s=this,r="bloomComposite",q=s.a.ar(new A.bb(r,s.b,s.c,B.t,B.i9,B.hU)),p=A.cU(s.d),o=s.w,n=A.e([new A.M(s.f,B.i),new A.M(s.r,B.i),new A.M(o,B.j)],t.C)
return A.e([new A.kL(new A.b1(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iaj:1}
A.kL.prototype={
ag(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bW(r,a.cV(q.f).b)
A.BB(r,1)
A.bf(r,B.dX)
A.cb(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.u)
A.v(r,"uBloomStrength",new A.z(B.e,p))
A.bp(r,q.c)
s.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.j5.prototype={
ga3(){return"depthPrepass"},
af(a,b){B.a.l(a.a,new A.ar("depthPrepass",B.fx,A.e([new A.M(this.w,B.j)],t.C),!1))},
ae(a){var s=this,r="depthPrepass",q=s.a.ar(new A.bb(r,s.b,s.c,B.cu,B.cs,B.ho))
return A.e([new A.kO(new A.b1(r,A.e([new A.M(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iaj:1}
A.kO.prototype={
ag(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bW(a1,a2.al("sceneDepth").b)
A.bf(a1,d.a.ad())
A.dn(a1,B.aH,1,0,0,0)
A.cb(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.z(B.e,a0.Q))
A.v(a1,"uAlbedo",B.u)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gC()
A.v(a1,"uViewProjection",new A.z(B.r,new Float32Array(A.a0(a))))
A.v(a1,"uModel",new A.z(B.r,new Float32Array(A.a0(i.c.a7().a))))
A.uK(b,k,!1)
d.kN(b,j.gC().b,p)
h=q.$1(j.gC().a)
i=h.a
if(a1.b!==B.h)A.i(A.m(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.i(A.m(c))
e=A.c(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.c(o.WebGL2RenderingContext.UNSIGNED_INT):A.c(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bu(g,f)}else{if(a1.b!==B.h)A.i(A.m(c))
m.drawArraysInstanced(A.c(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bu(g,f)}}},
kN(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.z(B.e,0))
A.v(q,"uAffineWarpStrength",new A.z(B.e,0))
s=this.a.ad()
A.bf(q,r.dx?s.eN(!1):s)},
$iab:1,
gC(){return this.a}}
A.hS.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.fY.prototype={
ga3(){return this.f},
af(a,b){B.a.l(a.a,new A.ar(this.f,B.J,A.e([new A.M(this.w,B.i),new A.M(this.x,B.j)],t.C),!1))},
ae(a){var s=this,r=s.a.ar(new A.bb(s.e,s.b,s.c,B.t,B.cv,B.cq)),q=A.cU(s.d),p=t.n,o=s.r===B.de?new Float32Array(A.a0(A.e([1/s.z,0],p))):new Float32Array(A.a0(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.kP(new A.b1(s.f,A.e([new A.M(s.w,B.i),new A.M(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iaj:1}
A.kP.prototype={
ag(a){return},
$iab:1,
gC(){return this.a}}
A.j9.prototype={
ga3(){return"dofComposite"},
af(a,b){var s=this
B.a.l(a.a,new A.ar("dofComposite",B.J,A.e([new A.M(s.z,B.i),new A.M(s.Q,B.i),new A.M(s.as,B.i),new A.M(s.at,B.j)],t.C),!1))},
ae(a){var s=this,r="dofComposite",q=s.a.ar(new A.bb(r,s.b,s.c,B.t,B.i7,B.hd)),p=A.cU(s.d)
return A.e([new A.kQ(new A.b1(r,A.e([new A.M(s.z,B.i),new A.M(s.Q,B.i),new A.M(s.as,B.i),new A.M(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iaj:1}
A.kQ.prototype={
ag(a){var s,r=this,q=a.al("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bW(n,q.b)
A.bf(n,r.a.ad())
A.cb(n,r.b.b)
s=t._
A.aB(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.u)
A.aB(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ac)
A.aB(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.d6)
A.v(n,"uNear",new A.z(B.e,o.f))
A.v(n,"uFar",new A.z(B.e,o.r))
A.v(n,"uFocusDistance",new A.z(B.e,r.w))
A.v(n,"uFocusRange",new A.z(B.e,r.x))
A.v(n,"uStrength",new A.z(B.e,0))
A.bp(n,r.c)
p.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.jq.prototype={
ga3(){return"grade"},
af(a,b){B.a.l(a.a,new A.ar("grade",B.J,A.e([new A.M(this.r,B.i),new A.M(this.w,B.j)],t.C),!1))},
ae(a){var s=this,r=s.a.ar(new A.bb("grade",s.b,s.c,B.t,B.i5,B.hV)),q=A.cU(s.d),p=s.r,o=s.w
return A.e([new A.kV(new A.b1("grade",A.e([new A.M(p,B.i),new A.M(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iaj:1}
A.kV.prototype={
ag(a){var s=this,r=a.al(s.f.a),q=a.b,p=q.a
A.bW(p,a.al(s.r.a).b)
A.bf(p,s.a.ad())
A.cb(p,s.b.b)
A.aB(p,0,r.b)
A.v(p,"uScene",B.u)
A.aB(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ac)
A.v(p,"uLutSize",new A.z(B.e,s.e))
A.v(p,"uStrength",new A.z(B.e,a.c.e.y))
A.bp(p,s.c)
q.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.jQ.prototype={
ga3(){return"msaaResolve"},
af(a,b){B.a.l(a.a,new A.ar("msaaResolve",B.fy,A.e([new A.M(this.b,B.i),new A.M(this.c,B.j)],t.C),!0))},
ae(a){var s=this.b,r=this.c
return A.e([new A.l1(new A.b1("msaaResolve",A.e([new A.M(s,B.i),new A.M(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iaj:1}
A.l1.prototype={
ag(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cV(this.c),j=a.cV(this.d),i=this.b
if(i.b!==B.h)A.i(A.m(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.i(A.x("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.i(A.x("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.i(A.x("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
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
$iab:1,
gC(){return this.a}}
A.eY.prototype={}
A.iR.prototype={
al(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cV(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.al(s)},
$iB4:1}
A.v7.prototype={}
A.hn.prototype={
ga3(){return"present"},
af(a,b){B.a.l(a.a,new A.ar("present",B.fz,A.e([new A.M(this.f,B.i)],t.C),!1))},
ae(a){var s=this,r=s.a.ar(new A.bb("present",s.b,s.c,B.t,B.ih,B.hv)),q=A.cU(s.d),p=s.f
return A.e([new A.l8(new A.b1("present",A.e([new A.M(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iaj:1}
A.l8.prototype={
ag(a){var s,r=this,q=a.cV(r.d),p=a.b,o=p.a
A.bW(o,null)
A.bf(o,r.a.ad())
A.cb(o,r.b.b)
A.bp(o,r.c)
A.aB(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.z(B.e,s.a))
A.v(o,"uVignette",new A.z(B.e,s.e))
A.v(o,"uGrain",new A.z(B.e,s.f))
A.v(o,"uRainIntensity",new A.z(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.z(B.e,s.w))
A.v(o,"uOutputEncoding",new A.z(B.e,r.e===B.aI?1:0))
A.v(o,"uToneMap",B.d5)
p.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.k6.prototype={
ga3(){return"ps1Quantize"},
af(a,b){B.a.l(a.a,new A.ar("ps1Quantize",B.J,A.e([new A.M(this.e,B.i),new A.M(this.f,B.j)],t.C),!1))},
ae(a){var s=this,r="ps1Quantize",q=s.a.ar(new A.bb(r,s.b,s.c,B.t,B.ib,B.h7)),p=A.cU(s.d),o=s.e,n=s.f
return A.e([new A.l9(new A.b1(r,A.e([new A.M(o,B.i),new A.M(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iaj:1}
A.l9.prototype={
ag(a){var s=this,r=a.al(s.d.a),q=a.b,p=q.a
A.bW(p,a.al(s.e.a).b)
A.bf(p,s.a.ad())
A.cb(p,s.b.b)
A.aB(p,0,r.b)
A.v(p,"uScene",B.u)
A.v(p,"uQuantizationBits",new A.z(B.e,a.c.e.as))
A.v(p,"uDitherStrength",new A.z(B.e,0))
A.bp(p,s.c)
q.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.ew.prototype={}
A.ke.prototype={
ga3(){return"shadow"},
af(a,b){B.a.l(a.a,new A.ar("shadowCaster",B.fw,A.e([new A.M(this.z,B.j)],t.C),!1))},
ae(a){var s=this,r="shadowCaster",q=s.a.ar(new A.bb(r,s.b,s.c,B.cu,B.cs,B.hT))
return A.e([new A.lc(new A.b1(r,A.e([new A.M(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
$iaj:1}
A.lc.prototype={
ag(a){var s,r,q,p,o=this,n=a.al("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bW(s,n.b)
A.bf(s,o.a.ad())
A.dn(s,B.aH,1,0,0,0)
return}r=A.x5(l)
o.x.$1(r)
s=m.a
A.bW(s,n.b)
A.bf(s,o.a.ad())
A.dn(s,B.aH,1,0,0,0)
A.cb(s,o.b.b)
A.v(s,"uAlbedo",B.u)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.kQ(m,s[p],l,r)},
fV(a,b){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.z(B.e,0))
s=this.a.ad()
A.bf(q,r.dx?s.eN(!1):s)},
kQ(a,b,c,d){var s,r,q,p,o,n=this
if(t.os.b(b)){if(!b.gC().r)return
s=a.a
A.v(s,"uUseInstances",B.bk)
n.fQ(a,b.gC().c,d)
n.fV(a,b.gC().b)
r=b.gC()
q=n.c.$1(r.a)
A.bp(s,q.a)
s=q.b
r=q.c
if(s)a.dO(r,q.d,0)
else a.aA(r,0)}else if(b instanceof A.eh){p=b.a
if(!p.gC().r)return
if(n.lH(b,c)===B.k7)return
n.fQ(a,p.gC().c,d)
A.uK(a,b,!1)
n.fV(a,p.gC().b)
s=p.gC()
q=n.c.$1(s.a)
A.bp(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dP(r,q.d,o,0)
else a.dN(r,0,o)}else throw A.d(A.x("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eQ(b).p(0),null))},
lH(a,b){return B.k6},
fQ(a,b,c){var s=a.a
A.v(s,"uModel",new A.z(B.r,new Float32Array(A.a0(b.a7().a))))
A.v(s,"uLightViewProjection",new A.z(B.r,new Float32Array(A.a0(c.a.a))))},
$iab:1,
gC(){return this.a}}
A.u5.prototype={
$1(a){return this.a.a=a},
$S:57}
A.u6.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kf.prototype={
ga3(){return"shadowedWorld"},
af(a,b){var s=this,r=A.e([new A.M(s.db,B.i)],t.C)
if(s.ay)r.push(new A.M(s.dx,B.i))
r.push(new A.M(s.dy,B.j))
B.a.l(a.a,new A.ar("shadowedWorld",B.c4,r,!1))},
ae(a){var s=this,r="shadowedWorld",q=s.a.ar(new A.bb(r,s.b,s.c,B.id,B.i6,B.h3)),p=A.e([new A.M(s.db,B.i)],t.C)
if(s.ay)p.push(new A.M(s.dx,B.i))
p.push(new A.M(s.dy,B.j))
return A.e([new A.ld(new A.b1(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$iaj:1}
A.ld.prototype={
ag(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.al("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bW(b1,a4.b)
A.bf(b1,a2.a.ad())
s=a8.a
A.dn(b1,B.bG,1,s.c,s.b,s.a)
A.cb(b1,a2.b.b)
A.v(b1,"uAlbedo",B.u)
A.v(b1,"uNormalMap",B.ks)
A.v(b1,"uOrmMap",B.kt)
A.v(b1,"uEmissiveMap",B.ku)
A.v(b1,"uLightmap",B.kv)
s=t._
A.aB(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ac)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.z(B.ax,new Float32Array(A.a0(A.e([1/a2.ch,1/a2.CW],r)))))
A.aB(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.d6)
A.v(b1,"uVertexSnapGrid",new A.z(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.z(B.ax,new Float32Array(A.a0(A.e([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.z(B.r,new Float32Array(A.a0(a7.c.a))))
A.v(b1,"uView",new A.z(B.r,new Float32Array(A.a0(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.z(B.r,new Float32Array(A.a0(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.z(B.o,new Float32Array(A.a0(A.e([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.z(B.e,a8.c))
A.v(b1,"uFogEnd",new A.z(B.e,a8.d))
A.v(b1,"uFogHeightFalloff",new A.z(B.e,0))
A.v(b1,"uFogDensity",new A.z(B.e,0))
q=a2.Q.$0()
s=A.e([],t.bH)
p=a2.as.$0()
p=J.T(p==null?B.aT:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.Y
k=o?a3:q.c
if(k==null)k=B.ay
A.v(b1,"uLightPosition",new A.z(B.o,new Float32Array(A.a0(A.e([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.z(B.o,new Float32Array(A.a0(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.Q
A.v(b1,"uLightColor",new A.z(B.o,new Float32Array(A.a0(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.z(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.z(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.Y
g=p?a3:i.b
if(g==null)g=B.Q
A.v(b1,"uDirectionalDirection",new A.z(B.o,new Float32Array(A.a0(A.e([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.z(B.o,new Float32Array(A.a0(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.z(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.ad
c=n?a3:e.c
if(c==null)c=B.Q
m=""+f
A.v(b1,"uPointPosition"+m,new A.z(B.o,new Float32Array(A.a0(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.z(B.o,new Float32Array(A.a0(A.e([c.a,c.b,c.c],r)))))
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
if(d==null)d=B.ad
a=p?a3:e.c
if(a==null)a=B.ay
c=p?a3:e.d
if(c==null)c=B.Q
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.z(B.o,new Float32Array(A.a0(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.z(B.o,new Float32Array(A.a0(A.e([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.z(B.o,new Float32Array(A.a0(A.e([c.a,c.b,c.c],r)))))
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
A.v(b1,"uAmbientColor",new A.z(B.o,new Float32Array(A.a0(A.e([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.z(B.e,a8.w))
A.v(b1,"uRainWetness",new A.z(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.r)(b1),++a1)a2.fW(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.r)(a6),++a1)a2.fW(a5,a6[a1],r)},
fW(a,b,c){var s,r,q,p,o,n,m=this
if(t.os.b(b)){s=a.a
A.v(s,"uUseInstances",B.bk)
m.fX(a,b.gC().c)
r=b.gC()
q=b.gC()
p=b.gC()
b.gC()
m.fR(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gC().a)
A.bp(s,o.a)
s=o.b
r=o.c
if(s)a.dO(r,o.d,0)
else a.aA(r,0)}else if(b instanceof A.eh){n=b.a
m.fX(a,n.gC().c)
A.uK(a,b,!0)
s=n.gC()
r=n.gC()
q=n.gC()
n.gC()
m.fR(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gC().a)
A.bp(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dP(r,o.d,q,0)
else a.dN(r,0,q)}else throw A.d(A.x("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eQ(b).p(0),null))},
fR(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aB(o,0,p.a(s.e.$1(q.b)))
A.aB(o,3,p.a(s.f.$1(r)))
A.aB(o,4,p.a(s.r.$1(r)))
A.aB(o,5,p.a(s.w.$1(r)))
A.aB(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.z(B.e,0))
A.v(o,"uOpaqueCoverage",new A.z(B.e,c===B.aJ?0:1))
A.v(o,"uAffineWarpStrength",new A.z(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.z(B.o,new Float32Array(A.a0(A.e([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.z(B.e,0))
A.v(o,"uUvScaleOffset",new A.z(B.kr,new Float32Array(A.a0(A.e([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.z(B.e,1))
A.v(o,"uRoughness",new A.z(B.e,1))
A.v(o,"uMetallic",new A.z(B.e,0))
A.v(o,"uOcclusionStrength",new A.z(B.e,1))
A.v(o,"uLightmapIntensity",new A.z(B.e,0))
A.v(o,"uReceivesShadow",new A.z(B.e,1))
A:{p=r
if(B.aJ===c){switch(d.a){case 0:p=B.dZ
break
case 1:p=B.dY
break}break A}if(B.P===c||B.dW===c){p=s.a.ad()
break A}}A.bf(o,q.dx?p.eN(!1):p)},
fX(a,b){var s=b.a7(),r=a.a
A.v(r,"uModel",new A.z(B.r,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.z(B.r,new Float32Array(A.a0(s.es().a))))},
$iab:1,
gC(){return this.a}}
A.ki.prototype={
ga3(){return"ssaoOcclusion"},
af(a,b){B.a.l(a.a,new A.ar("ssaoOcclusion",B.c3,A.e([new A.M(this.w,B.j)],t.C),!1))},
ae(a){var s=this,r="ssaoOcclusion",q=s.a.ar(new A.bb(r,s.b,s.c,B.t,B.ia,B.h2)),p=A.cU(s.d)
return A.e([new A.lh(new A.b1(r,A.e([new A.M(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iaj:1}
A.lh.prototype={
ag(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bW(m,a.al("ssaoRaw").b)
A.bf(m,p.a.ad())
if(n<=0){A.dn(m,B.a3,1,1,1,1)
return}A.dn(m,B.a3,1,0,0,0)
s=p.e.$0()
A.cb(m,p.b.b)
A.aB(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.u)
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
A.bp(m,p.c)
o.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.kh.prototype={
ga3(){return"ssaoBlur"},
af(a,b){B.a.l(a.a,new A.ar("ssaoBlur",B.c3,A.e([new A.M(this.y,B.i),new A.M(this.z,B.j)],t.C),!1))},
ae(a){var s=this,r="ssaoBlur",q=s.a.ar(new A.bb(r,s.b,s.c,B.t,B.i0,B.hY)),p=A.cU(s.d)
return A.e([new A.lg(new A.b1(r,A.e([new A.M(s.y,B.i),new A.M(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iaj:1}
A.lg.prototype={
ag(a){var s,r,q=this,p=a.b,o=p.a
A.bW(o,a.al("ssaoBlurred").b)
A.bf(o,q.a.ad())
if(a.c.e.c<=0){A.dn(o,B.a3,1,1,1,1)
return}A.dn(o,B.a3,1,0,0,0)
s=q.f.$0()
A.cb(o,q.b.b)
r=t._
A.aB(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.u)
A.aB(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ac)
A.v(o,"uTexelSize",new A.z(B.ax,new Float32Array(A.a0(A.e([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.z(B.e,s.f))
A.v(o,"uFar",new A.z(B.e,s.r))
A.bp(o,q.c)
p.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.kv.prototype={
ga3(){return"vhs"},
af(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.ar("vhs",B.J,A.e([new A.M(this.r,B.i),new A.M(s,B.G),new A.M(s,B.j)],t.C),!1))},
ae(a){var s=this,r=s.a.ar(new A.bb("vhs",s.b,s.c,B.t,B.i3,B.h9)),q=A.cU(s.d),p=s.r,o=s.w
return A.e([new A.lo(new A.b1("vhs",A.e([new A.M(p,B.i),new A.M(o,B.G),new A.M(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iaj:1}
A.lo.prototype={
ag(a){var s,r=this,q=a.al(r.f.a),p=a.al(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.bW(m,p.b)
A.bf(m,r.a.ad())
A.cb(m,r.b.b)
A.aB(m,0,q.b)
A.v(m,"uScene",B.u)
A.aB(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ac)
A.v(m,"uTime",new A.z(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.z(B.e,n.at))
A.v(m,"uTrackingWeight",new A.z(B.e,l))
A.v(m,"uNoiseWeight",new A.z(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.z(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.z(B.e,n.CW))
A.v(m,"uGhostWeight",new A.z(B.e,s))
A.bp(m,r.c)
o.aA(3,0)},
$iab:1,
gC(){return this.a}}
A.ht.prototype={}
A.kG.prototype={
ga3(){return"world"},
af(a,b){B.a.l(a.a,new A.ar("worldOpaqueTransparent",B.c4,A.e([new A.M(this.e,B.j)],t.C),!1))},
ae(a){var s=this,r=s.a.ar(new A.bb("safeWorld",s.b,s.c,B.ig,B.t,B.h1)),q=s.e
return A.e([new A.lr(new A.b1("worldOpaqueTransparent",A.e([new A.M(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iaj:1}
A.lr.prototype={
ag(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bW(j,a.al(n.d).b)
A.bf(j,n.a.ad())
s=k.a
A.dn(j,B.bG,1,s.c,s.b,s.a)
A.cb(j,n.b.b)
A.v(j,"uViewProjection",new A.z(B.r,new Float32Array(A.a0(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.Y
s=t.n
A.v(j,"uLightDir",new A.z(B.o,new Float32Array(A.a0(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.z(B.o,new Float32Array(A.a0(A.e([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.z(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.fn(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.fn(m,l[o])},
fn(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eh){s=b.a
n.fT(a,s.gC().c)
A.uK(a,b,!0)
r=n.c.$1(s.gC().a)
A.bp(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dP(p,r.d,o,0)
else a.dN(p,0,o)}else if(t.os.b(b)){q=a.a
A.v(q,"uUseInstances",B.bk)
n.fT(a,b.gC().c)
r=n.c.$1(b.gC().a)
A.bp(q,r.a)
q=r.b
p=r.c
if(q)a.dO(p,r.d,0)
else a.aA(p,0)}else throw A.d(A.x("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eQ(b).p(0),null))},
fT(a,b){var s=b.a7(),r=a.a
A.v(r,"uModel",new A.z(B.r,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.z(B.r,new Float32Array(A.a0(s.es().a))))},
$iab:1,
gC(){return this.a}}
A.mE.prototype={
ce(a){var s,r,q
a.D()
s=A.a5(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.b3
else q=r===0?B.b1:B.b2
return new A.ep(q,s)},
jk(a){var s,r=this.ce(a).a
A:{if(B.b3===r){s=B.j3
break A}if(B.b2===r){s=B.j2
break A}s=B.au
break A}return s}}
A.jm.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.h4.prototype={
A(){return"GpuBufferKind."+this.b}}
A.jo.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.jp.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.jl.prototype={}
A.jn.prototype={}
A.ee.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.h6.prototype={}
A.h5.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.ev.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.hz.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cP.prototype={
A(){return"UniformType."+this.b}}
A.z.prototype={}
A.f_.prototype={
A(){return"ClearMask."+this.b}}
A.j6.prototype={
aA(a,b){var s=this.a
if(s.b!==B.h)A.i(A.m(u.k))
s.a.drawArrays(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bu(a,1)},
dN(a,b,c){var s=this.a
if(s.b!==B.h)A.i(A.m(u.k))
s.a.drawArraysInstanced(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bu(a,c)},
dO(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.i(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bu(a,1)},
dP(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.i(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.ai(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bu(a,c)},
$iA4:1}
A.k4.prototype={
iR(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.nC.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
bi(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.kL(s.b)
r.b.bi()
r.c=null
r.e=!0},
fj(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.o(b,a),a1=A.e([],t.l2)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("O<1>")
s=new A.O(l,j.a(new A.nD()),k)
for(i=s,h=J.T(i.a),i=new A.R(h,i.b,i.$ti.i("R<1>")),g=this.a;i.m();){r=h.gn()
q=A.BF(g,this.kO(r,a3))
J.fQ(a1,q)
J.bA(a0,r,q)}f=A.K(new A.O(l,j.a(new A.nE()),k),k.i("p.E"))
B.a.a0(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.r)(l),++e){o=l[e]
n=A.yQ(J.zB(o,11))
j=J.aC(a0,"sceneColor")
j.toString
J.bA(a0,o,j)}b=A.b_(a0,b,a)
return b}catch(d){for(b=a1,l=A.I(b).i("hv<1>"),b=new A.hv(b,l),b=new A.aS(b,b.gt(0),l.i("aS<a3.E>")),k=this.a,j=t.V,l=l.i("a3.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.vj(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
kO(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.h6(512,512,1,B.aK,!0)
if(a==="sceneDepth")return new A.h6(o,n,1,B.aK,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.W(a,"sceneColor#")
return new A.h6(r,q,1,p?B.c1:B.ft,p)},
kL(a){var s,r,q,p,o,n=A.oD(t.f7.a(a).gav(),t._)
for(n=A.l0(n,n.r,A.q(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.vj(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.nD.prototype={
$1(a){return!B.b.W(A.y(a),"sceneColor#")},
$S:3}
A.nE.prototype={
$1(a){return B.b.W(A.y(a),"sceneColor#")},
$S:3}
A.fr.prototype={
A(){return"_SlotState."+this.b}}
A.dV.prototype={
sb8(a){this.c=this.$ti.i("1?").a(a)}}
A.cL.prototype={
aE(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.dV(B.aB,n.i("dV<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.lg
p.sb8(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bV(a){return this.aE(a,null)},
a1(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dF(B.c8,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dF(B.c9,a))
s=q.b
if(s===B.aC||s===B.aB)throw A.d(A.dF(B.as,a))},
bW(a){var s,r,q=this.$ti
q.c.a(a)
this.a1(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eJ(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a1(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].sb8(b)},
ba(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dF(B.c8,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dF(B.c9,a))
r=q.b
if(r===B.aC||r===B.aB)throw A.d(A.dF(B.fJ,a))
q.b=B.aC
q.sb8(null)
B.a.l(p.c,s);++p.e},
bD(){return new A.cd(this.nq(),this.$ti.i("cd<+(1,2)>"))},
nq(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bD(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aC||j===B.aB){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.az(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.iO.prototype={
A(){return"BlendEquation."+this.b}}
A.e5.prototype={
A(){return"BlendFactor."+this.b}}
A.j2.prototype={
A(){return"CullFace."+this.b}}
A.j4.prototype={
A(){return"DepthFunc."+this.b}}
A.f4.prototype={
eN(a){var s=this
return A.wu(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b2.prototype={
A(){return"StateField."+this.b}}
A.r1.prototype={
mR(a){var s,r=this.a
if(r==null)return A.jK(B.hQ,t.dB)
s=A.a5(t.dB)
if(r.a!==a.a)s.l(0,B.bc)
if(r.b!==a.b)s.l(0,B.bd)
if(r.c!==a.c)s.l(0,B.be)
if(r.d!==a.d)s.l(0,B.bf)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bg)
if(r.r!==a.r)s.l(0,B.bh)
if(r.w!==a.w)s.l(0,B.bi)
if(r.x!==a.x)s.l(0,B.bj)
return s}}
A.dq.prototype={$idb:1}
A.ik.prototype={}
A.ij.prototype={}
A.lq.prototype={}
A.kE.prototype={
kh(a){var s=this,r=A.a(s.a.canvas)
s.c=A.Z(new A.r_(s))
s.d=A.Z(new A.r0(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
j_(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bO(A.c(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bO(A.c(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bO(A.c(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bO(A.c(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bO(A.c(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.u(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fG(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.u(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.u(0,"EXT_color_buffer_float")
p=e.u(0,"EXT_color_buffer_half_float")
o=e.u(0,"WEBGL_lose_context")
e=l.a
n=A.d_(e.getParameter(A.c(k.WebGL2RenderingContext.RENDERER)))
m=A.d_(e.getParameter(A.c(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.pi("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bO(a){var s=A.d_(this.a.getParameter(a))
return typeof s=="number"?B.d.aS(s):0},
fG(a){var s=A.d_(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iAp:1}
A.r_.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.a5},
$S:1}
A.r0.prototype={
$1(a){A.a(a)
this.a.b=B.h},
$S:1}
A.rP.prototype={
m2(){var s,r=this
if(r.b!==B.h)A.i(A.m(u.k))
s=r.w?A.k(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dq(new A.lq(s))},
h4(a){var s=a.a
if(!(s instanceof A.lq))throw A.d(A.ao(a,"query","is not a GPU timer query"))
return s}}
A.lp.prototype={}
A.j8.prototype={
B(){var s=this
return A.P(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.iL.prototype={
jW(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
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
j.k2!==$&&A.J()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.J()
j.k3=p
A.k(q.connect(p))
A.k(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.k(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.J()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.J()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.J()
j.p1=r
A.k(p.connect(q))
A.k(i.connect(A.a(s.destination)))
j.f9()},
f9(){var s,r=this,q=r.k4
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
ca(){var s=this.a
if(A.y(s.state)==="suspended")A.a(s.resume())},
fY(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.i8.h(0,a)
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
kZ(){var s,r,q,p,o,n,m,l=this.a,k=A.aI(l.sampleRate),j=B.d.aJ(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cR()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
ev(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.cR()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.k(r.connect(q))
A.k(q.connect(p.fY(a)))
r.onended=A.Z(new A.mm(r,q))
r.start()},
iX(a){return this.ev(a,1)},
iY(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.at.h(0,a)
if(k==null)return
s=l.a
r=A.a(s.createBufferSource())
r.buffer=k
A.a(r.playbackRate).value=d*(0.94+l.ax.cR()*0.12)
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
if(g!=null&&f!=null){A.a(o.frequency).value=f
A.a(n.gain).value=Math.pow(10,g/20)}else{s=l.ay!=null
if(s){s=l.ay
s.toString
m=l.fi(l.b.iW(e,s))
A.a(o.frequency).value=m.b
A.a(n.gain).value=Math.pow(10,m.a/20)}}l.CW.k(0,o,new A.lf(r,q,n,o,p,e))
r.onended=A.Z(new A.ml(l,o))
A.k(r.connect(q))
A.k(q.connect(n))
A.k(n.connect(o))
A.k(o.connect(p))
A.k(p.connect(l.fY(a)))
r.start()},
nZ(a,b,c,d){return this.iY(a,b,c,1,d,null,null)},
fi(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.az(r,q)},
f_(a){var s,r,q,p,o=this
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
q.onended=A.Z(new A.mn(o,q,p))
q.start()
o.cy=q},
d0(a){if(this.p2===a)return
this.p2=a
this.f9()},
jw(a){var s,r,q=this
q.d0(a.b===B.bt)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aD?1:0.55
r=q.c
r===$&&A.h()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.a(s.gain).value=0.35*q.p4},
bc(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.N(c==null?q.fr:c,0,1)
q.fx=B.d.N(f==null?q.fx:f,0,1)
q.fy=B.d.N(b==null?q.fy:b,0,1)
q.go=B.d.N(a==null?q.go:a,0,1)
q.id=B.d.N(d==null?q.id:d,0,1)
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
ju(a){var s=null
return this.bc(s,s,s,s,a,s)},
js(a){var s=null
return this.bc(s,s,a,s,s,s)},
jv(a){var s=null
return this.bc(s,s,s,s,s,a)},
jr(a){var s=null
return this.bc(s,a,s,s,s,s)},
jq(a){var s=null
return this.bc(a,s,s,s,s,s)},
jt(a){var s=null
return this.bc(s,s,s,a,s,s)},
jp(a){if(this.ay===a)return
this.ay=a
this.bw()},
bw(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.eH(p,g)
m=n==null?i.fi(h.iW(p,g)):new A.az(n.b,n.c)
l=A.aI(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.aI(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.aI(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))}}}
A.mk.prototype={
$1(a){return this.je(t.q.a(a))},
je(a){var s=0,r=A.bv(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.by(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.am(A.aX(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.am(A.aX(A.a(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.am(A.aX(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ae(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$$1,r)},
$S:60}
A.mm.prototype={
$1(a){A.a(a)
this.a.disconnect()
this.b.disconnect()},
$S:1}
A.ml.prototype={
$1(a){var s
A.a(a)
s=this.a.CW.ak(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:2}
A.mn.prototype={
$1(a){var s,r
A.a(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:1}
A.lf.prototype={}
A.iM.prototype={
A(){return"AudioCategory."+this.b}}
A.ma.prototype={
jY(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.f5)
if(!B.a.a2(A.e([d.a,d.b,d.c],t.n),new A.mb()))throw A.d(B.ew)}}
A.mb.prototype={
$1(a){return isFinite(A.bZ(a))},
$S:5}
A.lU.prototype={
jV(a,b){if(this.a.length===0)throw A.d(B.em)
if(!B.a.a2(A.e([a.a,a.b,a.c],t.n),new A.lV()))throw A.d(B.eA)}}
A.lV.prototype={
$1(a){return isFinite(A.bZ(a))},
$S:5}
A.fR.prototype={
D(){if(B.a.M(A.e([-1.5,-12,-28,2e4,1100,320],t.n),new A.lW()))throw A.d(B.eQ)},
j7(a){this.D()
if(a.ax&&!a.ay&&!a.z)return new A.az(-1.5,2e4)
if(a.ay)return new A.az(-28,320)
return new A.az(-12,1100)}}
A.lW.prototype={
$1(a){return!isFinite(A.bZ(a))},
$S:5}
A.m6.prototype={
jX(a){var s=A.q(a)
if(new A.ac(a,s.i("ac<1>")).M(0,new A.m8())||new A.ay(a,s.i("ay<2>")).M(0,new A.m9()))throw A.d(B.f3)}}
A.m8.prototype={
$1(a){return A.y(a).length===0},
$S:3}
A.m9.prototype={
$1(a){var s
t.a.a(a)
s=J.aK(a)
return s.gL(a)||s.M(a,new A.m7())},
$S:62}
A.m7.prototype={
$1(a){return A.y(a).length===0},
$S:3}
A.uW.prototype={}
A.mi.prototype={}
A.mc.prototype={
jZ(a,b,c){var s
for(s=this.b.gav(),s=s.gq(s);s.m();)s.gn().D()},
eH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.e
if(h.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(h.h(0,b)==null)throw A.d(A.m("audio listener room missing: "+b))
s=this.lx(a,b)
for(h=s.a,r=h.length,q=this.b,p=0,o=2e4,n=0;n<h.length;h.length===r||(0,A.r)(h),++n){m=h[n]
l=q.h(0,m.a)
k=(l==null?B.bz:l).j7(m)
j=k.b
p+=k.a
if(j<o)o=j}r=!s.b
if(r&&a!==b){p=-48
o=240}q=A.e([],t.s)
for(i=h.length,n=0;n<h.length;h.length===i||(0,A.r)(h),++n)q.push(h[n].a)
h=B.d.N(p,-60,0)
i=B.c.N(o,120,2e4)
r=!r||a===b
return new A.mi(A.al(q,t.N),h,i,r)},
lx(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.ld
s=t.N
r=A.P([a0,0],s,t.i)
q=A.P([a0,B.S],s,t.fB)
p=A.aE([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.S(k,new A.md(r))
j=B.a.gR(k)
p.ak(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.hN(s,!0)}i=o.aB(j)
h=A.K(i,i.$ti.i("p.E"))
B.a.S(h,new A.me())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.bG(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.bz:d).j7(f)
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
p.l(0,e)}}}return B.lc}}
A.md.prototype={
$2(a,b){var s,r,q
A.y(a)
A.y(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.F(r,s)
return q===0?B.b.F(a,b):q},
$S:63}
A.me.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:64}
A.hN.prototype={}
A.mD.prototype={
eq(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.zt().bg(q).gac()
p.d=q
p.c=p.b.bg(q).gac()
p.a=a}}
A.nh.prototype={}
A.kl.prototype={}
A.nA.prototype={
kS(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.k(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.k(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.k(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.d_(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cP(a,b,c,d,e,f){return this.nr(a,b,c,d,e,f)},
nr(a,b,c,a0,a1,a2){var s=0,r=A.bv(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cP=A.by(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.a(A.a(j.document).createElement("img"))
m.src=a
s=7
return A.am(A.aX(A.a(m.decode()),t.X),$async$cP)
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
if(c){n.kS()
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
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$cP,r)},
cQ(a,b,c){var s=!1
return this.ns(t.a.a(a),b,!1)},
ns(b0,b1,b2){var s=0,r=A.bv(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cQ=A.by(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.kG)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.a(A.a(a0.document).createElement("img"))
j.src=k
s=10
return A.am(A.aX(A.a(j.decode()),a1),$async$cQ)
case 10:J.fQ(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.c3(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.c(J.aC(l,0).width)
h=A.c(J.aC(l,0).height)
if(J.a2(i,0)||J.a2(h,0)||J.uT(l,new A.nB(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.c3(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.am()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.lL(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.am()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a5()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a5()
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
if(!J.a2(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.uV(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.c3(l)
if(typeof a1!=="number"){q=a1.d_()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.c(a0.WebGL2RenderingContext.RGBA),A.c(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aC(l,c)])
d=A.c(a.getError())
if(!J.a2(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.uV(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a5()
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
if(!J.a2(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.uV(d,16)+")")
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
b=A.ae(a9)
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
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$cQ,r)},
fZ(a,b){var s=this.a,r=A.k(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a2(A.d_(s.getShaderParameter(r,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.f6("shader compile failed: "+A.w(A.xV(s,"getShaderInfoLog",r,t.x))+"\n"+b))
return r},
aW(a,b){var s=v.G,r=this.fZ(A.c(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.fZ(A.c(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.k(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a2(A.d_(p.getProgramParameter(o,A.c(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.f6("program link failed: "+A.w(A.xV(p,"getProgramInfoLog",o,t.x))))
return o},
giP(){var s=A.d_(this.a.getParameter(A.c(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aS(s):0},
eK(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.c(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.c(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hq(0,c,B.c.jU(b.byteLength,p))*p
if(B.c.O(o,4)!==0)A.i(A.x("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.zu(B.p.gm4(b),b.byteOffset+0*p,B.c.T(o,4)))}},
dB(a,b,c){var s,r,q,p,o=this.a,n=v.G
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
du(a,b,c,d,e){var s,r=this.a,q=A.k(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.ai(r,"renderbufferStorageMultisample",[A.c(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.c(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
h0(a,b,c){var s,r=this.a,q=A.k(r.createTexture())
q.toString
this.dB(q,a,b)
s=v.G
A.ai(r,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.c(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fl(a,b){var s,r,q=this.a,p=A.k(q.createTexture())
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
er(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.k(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.du(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.du(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.h0(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.h0(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.du(a,b,e,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fl(a,b)
if(d)h.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.c(h.checkFramebufferStatus(A.c(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.c(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.f6("framebuffer incomplete"))
return new A.kl(g,n,o,m,q,p,l,e,a,b)},
iO(a,b,c,d){return this.er(a,b,c,d,0)},
nv(a,b,c,d){return this.er(a,b,!0,c,d)},
bn(a,b,c){return this.er(a,b,c,!1,0)},
dz(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.c(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.ai(s,"renderbufferStorageMultisample",[A.c(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.c(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
b2(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.dB(q,b,c)
if(p!=null)n.dB(p,b,c)
n.dz(a,a.e,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dz(a,a.f,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dz(a,a.r,A.c(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.fl(b,c)}s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
o8(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
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
mh(a,b,c,d){var s,r,q=v.G,p=(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
b6(a){var s=this.a,r=A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.c(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.c(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.nB.prototype={
$1(a){A.a(a)
return A.c(a.width)!==this.a||A.c(a.height)!==this.b},
$S:65}
A.jw.prototype={
eI(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].oH(a)}}
A.jy.prototype={
c9(a){if(this.f)return
A.wJ(a,"requestPointerLock",t.X)},
eS(a){var s,r,q,p
t.G.a(a)
s=A.o(t.N,t.a)
for(r=new A.G(a,A.q(a).i("G<1,2>")).gq(0),q=t.s;r.m();){p=r.d
s.k(0,p.a,A.e([p.b],q))}this.jl(s)},
jl(a){var s,r,q,p,o,n,m,l,k
t.i3.a(a)
for(s=this.y,r=s.a,r=new A.c7(r,r.r,r.e,A.q(r).i("c7<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a5(q)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){k=o[l]
if(k.length!==0)n.l(0,k)}s.o6(p,n)}this.b4()},
lc(a){var s=this
A.a(a)
if(A.U(a.repeat))return
if(!s.w)return
if(s.b.l(0,A.y(a.code)))if(B.a.u(s.y.aV("interact"),A.y(a.code))){if(s.x.np())s.c.l(0,A.y(a.code))}else s.c.l(0,A.y(a.code))},
le(a){var s,r,q="interact"
A.a(a)
s=this.b
s.ak(0,A.y(a.code))
r=this.y
if(B.a.u(r.aV(q),A.y(a.code))){t.Q.a(s)
s=!B.a.M(r.aV(q),s.gaw(s))}else s=!1
if(s){s=this.x
s.c=s.b=!1
s.d=0}},
li(a){var s=this
A.a(a)
if(!s.f||!s.w)return
s.d=s.d+s.fC(a,"movementX")
s.e=s.e+s.fC(a,"movementY")},
lg(a){var s=this
A.a(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
fC(a,b){var s=A.xS(a[b])
if(s==null)s=null
return s==null?0:s},
b4(){var s=this
s.b.G(0)
s.c.G(0)
s.e=s.d=0
s.x.eC()}}
A.od.prototype={
aV(a){var s=this.a.h(0,a)
return s==null?B.n:s},
o6(a,b){var s,r,q,p,o,n
t.bq.a(b)
s=this.a
if(!s.P(a))return
r=t.N
q=A.a5(r)
for(p=A.l0(b,b.r,A.q(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.al(q,r))},
mk(a,b){var s,r,q
t.Q.a(b)
for(s=this.aV(a),r=s.length,q=0;q<r;++q)if(b.ak(0,s[q]))return!0
return!1}}
A.og.prototype={
np(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
jQ(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.d.N(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eC(){this.c=this.b=!1
this.d=0}}
A.jM.prototype={}
A.el.prototype={
gfv(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gK(B.c.cb(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gK(B.c.cb(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
Z(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.el&&A.lK(r)===A.lK(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gK(a){return this.gfv()}}
A.oI.prototype={
k9(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfv(),q)}}
A.cO.prototype={
cS(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.p.d1(s,0,m,l)
n.a=s}r=b.an(0,a).bg(d.an(0,a)).gac()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.hC(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.hC(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.hC(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.hC(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.hC(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.hC(n.a,l,d,r,q,p,o,0,1,0,k,0)},
au(a,b,c,d,e){return this.cS(a,b,c,d,e,1,1)}}
A.ps.prototype={
l1(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aW(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.J()
m.w=r
q=s.aW(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.J()
m.x=q
p=m.c
o=A.k(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.J()
m.y=o
o=A.k(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.J()
m.z=o
o=A.k(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.J()
m.Q=o
r=A.k(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.J()
m.as=r
r=A.k(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.J()
m.at=r
q=A.k(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.J()
m.ax=q
m.d=s.bn(m.ay,m.ch,!1)
m.e=s.bn(m.ay,m.ch,!1)
m.f=s.bn(m.ay,m.ch,!1)
p=A.k(p.createVertexArray())
p.toString
m.CW!==$&&A.J()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
l2(){var s
try{this.r=this.b.bn(384,216,!1)}catch(s){this.r=null}},
o5(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.b6(n)
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
p.b6(l)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.b6(m)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.pB.prototype={
df(a,b,c){var s,r,q
try{r=this.a.aW(b,c)
return r}catch(q){s=A.ae(q)
r=A.f6(a+": "+A.w(s))
throw A.d(r)}}}
A.pu.prototype={}
A.hU.prototype={}
A.li.prototype={}
A.l4.prototype={}
A.l2.prototype={}
A.pv.prototype={
ka(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([new A.el(0,0,1,0),new A.el(1,0,1,0),new A.el(2,0,1,0)],t.mn),e=t.S
e=new A.oI(f,A.o(e,e))
e.k9(f)
h.em=e
h.ih=1.9
h.ec=h.bl/h.bk
r=J.jC(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.hU()
t.cu.a(r)
f=h.aY
e=f.aW("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aW(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aW(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aW(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aW(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ap!==$&&A.J()
h.ap=new A.pB(f,e,p,o,n,m)
h.b=t.d4.a(new A.pw(h))
h.fO()
h.fN()
o=h.aN
p=A.k(o.getUniformLocation(m,"uTex"))
h.hK!==$&&A.J()
h.hK=p
p=A.k(o.getUniformLocation(m,"uNoise"))
h.hL!==$&&A.J()
h.hL=p
p=A.k(o.getUniformLocation(m,"uTime"))
h.hq!==$&&A.J()
h.hq=p
p=A.k(o.getUniformLocation(m,"uTexelSize"))
h.hp!==$&&A.J()
h.hp=p
p=A.k(o.getUniformLocation(m,"uNoiseOff"))
h.hr!==$&&A.J()
h.hr=p
p=A.k(o.getUniformLocation(m,"uChromaLuma"))
h.hs!==$&&A.J()
h.hs=p
p=A.k(o.getUniformLocation(m,"uChromaLag"))
h.ht!==$&&A.J()
h.ht=p
p=A.k(o.getUniformLocation(m,"uTapeNoise"))
h.hu!==$&&A.J()
h.hu=p
p=A.k(o.getUniformLocation(m,"uHeadSwitch"))
h.hv!==$&&A.J()
h.hv=p
p=A.k(o.getUniformLocation(m,"uTracking"))
h.hw!==$&&A.J()
h.hw=p
p=A.k(o.getUniformLocation(m,"uDropouts"))
h.hx!==$&&A.J()
h.hx=p
p=A.k(o.getUniformLocation(m,"uGhosting"))
h.hy!==$&&A.J()
h.hy=p
p=A.k(o.getUniformLocation(m,"uChromaBlurI"))
h.hz!==$&&A.J()
h.hz=p
p=A.k(o.getUniformLocation(m,"uChromaBlurQ"))
h.hA!==$&&A.J()
h.hA=p
p=A.k(o.getUniformLocation(m,"uChromaLagAmount"))
h.hB!==$&&A.J()
h.hB=p
p=A.k(o.getUniformLocation(m,"uNoiseScale"))
h.hC!==$&&A.J()
h.hC=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.hD!==$&&A.J()
h.hD=p
p=A.k(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.hE!==$&&A.J()
h.hE=p
p=A.k(o.getUniformLocation(m,"uJitterAmount"))
h.hF!==$&&A.J()
h.hF=p
p=A.k(o.getUniformLocation(m,"uJitterFreq"))
h.hG!==$&&A.J()
h.hG=p
p=A.k(o.getUniformLocation(m,"uDropoutRate"))
h.hH!==$&&A.J()
h.hH=p
p=A.k(o.getUniformLocation(m,"uGhostAmount"))
h.hI!==$&&A.J()
h.hI=p
p=A.k(o.getUniformLocation(m,"uGhostOffset"))
h.hJ!==$&&A.J()
h.hJ=p
p=A.k(o.getUniformLocation(m,"uGhostTarget"))
h.hM!==$&&A.J()
h.hM=p
m=A.k(o.getUniformLocation(m,"uHasGhost"))
h.hN!==$&&A.J()
h.hN=m
m=A.k(o.getUniformLocation(n,"uTex"))
h.ee!==$&&A.J()
h.ee=m
m=A.k(o.getUniformLocation(n,"uDepth"))
h.ef!==$&&A.J()
h.ef=m
m=A.k(o.getUniformLocation(n,"uFocusDistance"))
h.eg!==$&&A.J()
h.eg=m
m=A.k(o.getUniformLocation(n,"uDofBlurScale"))
h.eh!==$&&A.J()
h.eh=m
m=A.k(o.getUniformLocation(n,"uBlurRadius"))
h.ei!==$&&A.J()
h.ei=m
m=A.k(o.getUniformLocation(n,"uDofStrength"))
h.ej!==$&&A.J()
h.ej=m
n=A.k(o.getUniformLocation(n,"uTexel"))
h.ek!==$&&A.J()
h.ek=n
n=A.U(A.a(A.a(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bZ!==$&&A.J()
h.bZ=n
h.siM(16777215)
n=new A.ql(o,f,A.e([],t.aA),A.e([],t.df),A.e([],t.h),A.e([],t.kS))
m=n.c=f.aW("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.k(o.getUniformLocation(m,"uLightProj"))
n.e=A.k(o.getUniformLocation(m,"uModel"))
h.el!==$&&A.J()
h.el=n
n=new A.ps(f,o)
n.l1()
n.l2()
h.cF!==$&&A.J()
h.cF=n
n=f.a
m=A.k(n.createBuffer())
m.toString
h.dQ!==$&&A.J()
h.dQ=m
p=A.k(n.createBuffer())
p.toString
h.dR!==$&&A.J()
h.dR=p
n=A.k(n.createBuffer())
n.toString
h.dS!==$&&A.J()
h.dS=n
e=A.k(o.createVertexArray())
e.toString
h.dT!==$&&A.J()
h.dT=e
l=A.k(o.createVertexArray())
l.toString
h.dU!==$&&A.J()
h.dU=l
k=A.k(o.createVertexArray())
k.toString
h.dV!==$&&A.J()
h.dV=k
j=A.k(o.createVertexArray())
j.toString
h.dW!==$&&A.J()
h.dW=j
o.bindVertexArray(e)
h.dc(m)
o.bindVertexArray(l)
h.dc(p)
o.bindVertexArray(k)
h.dc(n)
o.bindVertexArray(null)
try{h.cK=f.iO(384,216,!0,!0)}catch(i){h.cK=null}s=4<f.giP()?4:f.giP()
e=s
if(typeof e!=="number")return e.am()
if(e>1)try{h.bY=f.nv(h.bk,h.bl,!0,s)}catch(i){h.bY=null}try{h.bj=f.iO(h.bk,h.bl,!0,!0)}catch(i){h.bY=h.bj=null}if(h.bj!=null)try{h.cH=f.bn(h.gck(),h.gcj(),!1)
h.cI=f.bn(h.gck(),h.gcj(),!1)
h.cJ=f.bn(h.bk,h.bl,!1)}catch(i){h.cJ=h.cI=h.cH=null}},
gck(){var s=B.c.T(this.bk,4)
return s<1?1:s},
gcj(){var s=B.c.T(this.bl,4)
return s<1?1:s},
aP(a){return this.nt(t.G.a(a))},
nt(a){var s=0,r=A.bv(t.H),q=this,p,o,n,m,l,k,j
var $async$aP=A.by(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:p=new A.G(a,A.q(a).i("G<1,2>")).gq(0),o=q.aY
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.ct.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.am(o.cP(k,l,!1,!1,!1,m==="grime"),$async$aP)
case 4:if(c!=null)q.fp(m,l)
s=2
break
case 3:p=t.lS
j=A.K(new A.cp(new A.S(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.px(a)),t.dD),p),p.i("p.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.am(o.cQ(j,12,!1),$async$aP)
case 7:q.cE=c
case 6:return A.bs(null,r)}})
return A.bt($async$aP,r)},
bI(){var s=0,r=A.bv(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bI=A.by(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.o(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.am(A.aX(A.a(A.a(g.window).fetch("shaders/"+A.w(m))),f),$async$bI)
case 13:l=a3
if(!A.U(l.ok)){i=A.f6("HTTP "+A.w(A.w1(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.am(A.aX(A.a(l.text()),i),$async$bI)
case 14:a.bA(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ae(c)
i=A.f6("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.lo(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ae(b)
A.a(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$bI,r)},
lo(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ap
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.df("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.df("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.df("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.fO()
i.fN()
q=i.hm
q=A.K(q,A.q(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.ct.h(0,s)
o.toString
i.fp(s,o)}A.a(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ae(j)
A.a(v.G.console).error("shader recompile failed: "+A.w(r))}},
fN(){var s=this,r=s.aN,q=s.ap
q===$&&A.h()
s.ii=A.k(r.getUniformLocation(q.c,"uTex"))
s.ij=A.k(r.getUniformLocation(q.c,"uTime"))
s.ik=A.k(r.getUniformLocation(q.c,"uFlash"))
s.il=A.k(r.getUniformLocation(q.c,"uVignette"))
s.im=A.k(r.getUniformLocation(q.c,"uGrain"))
s.io=A.k(r.getUniformLocation(q.c,"uDesat"))
s.ip=A.k(r.getUniformLocation(q.c,"uBloom"))
s.iq=A.k(r.getUniformLocation(q.c,"uBloomStrength"))
s.ix=A.k(r.getUniformLocation(q.c,"uNoiseOff"))
s.iA=A.k(r.getUniformLocation(q.c,"uLutMix"))
s.it=A.k(r.getUniformLocation(q.c,"uDepth"))
s.iu=A.k(r.getUniformLocation(q.c,"uDepthViz"))
s.hn=A.k(r.getUniformLocation(q.c,"uSSAO"))
s.ho=A.k(r.getUniformLocation(q.c,"uSSAOStrength"))
s.iv=A.k(r.getUniformLocation(q.c,"uNoise"))
s.iw=A.k(r.getUniformLocation(q.c,"uNoiseOn"))
s.iy=A.k(r.getUniformLocation(q.c,"uLut"))
s.iz=A.k(r.getUniformLocation(q.c,"uLutOn"))
s.ir=A.k(r.getUniformLocation(q.d,"uTex"))
s.ed=A.k(r.getUniformLocation(q.d,"uDir"))
s.is=A.k(r.getUniformLocation(q.c,"uBlur"))},
fp(a,b){var s,r,q,p=this
p.hm.l(0,a)
switch(a){case"bluenoise":s=p.ap
s===$&&A.h()
s=s.c
r=p.iv
r===$&&A.h()
q=p.iw
q===$&&A.h()
p.bQ(s,r,q,b)
break
case"lut-gothic":s=p.ap
s===$&&A.h()
s=s.c
r=p.iy
r===$&&A.h()
q=p.iz
q===$&&A.h()
p.bQ(s,r,q,b)
break
case"grime":s=p.ap
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bQ(s,r,q,b)
break
case"glass":s=p.ap
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bQ(s,r,q,b)
break
case"soft":s=p.ap
s===$&&A.h()
s=s.b
r=p.i2
r===$&&A.h()
q=p.i3
q===$&&A.h()
p.bQ(s,r,q,b)
break}},
bQ(a,b,c,d){var s=this.aN
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
siM(a){var s=A.u_(a)
this.hV=s.a
this.hW=s.b
this.hX=s.c},
cw(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.O(a1,14)!==0)throw A.d(A.x("static mesh needs a multiple of 14 floats, got "+a1,null))
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
b.fa(56)
a1.bindBuffer(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.c(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.n3++
b.e_.k(0,a1,new A.li(e,d,i,s,s,a3))
return a1},
mU(a){var s,r,q,p=this,o=p.e_.h(0,a)
if(o==null)return
p.fE()
s=p.i0
r=p.i1
if(s!==r)p.fS(r)
s=p.aN
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.eb
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.c(q.WebGL2RenderingContext.TRIANGLES),r,A.c(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.c(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.c_},
nc(a){var s,r=this.e_.ak(0,a)
if(r==null)return
s=this.aN
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.e0)return
c.e0=!0
s=c.aN
r=c.ap
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.hZ
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.e3
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.e4
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.e5
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.ih)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.ec)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.hO?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.e6/255*0.34,c.e7/255*0.34,c.e8/255*0.34)
q=c.fx
q===$&&A.h()
r=c.hU
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.hV,c.hW,c.hX)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.hY)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.e2.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.e2
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.u_(k.b)
m=c.bZ
m===$&&A.h()
i=m?1:1+(A.uL(c.e9*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bZ
r===$&&A.h()
q=r?1:1+(A.uL(c.e9*2.5,40503)*2-1)*0
c.n0=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.hQ?1:0
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
q=c.hP
h=q?384:0
g=q?216:0
q=c.dX
p=q.a
if(p===B.b9){f=B.d.N(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.i4
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.el
r===$&&A.h()
q=c.i8
q===$&&A.h()
s.uniform1f(q,0)
q=c.i9
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.i5
q===$&&A.h()
if(q!=null)r.cY(0)
q=c.i6
q===$&&A.h()
if(q!=null)r.cY(1)
q=c.i7
q===$&&A.h()
if(q!=null)r.cY(2)
r.cZ(0)
r.cZ(1)
r.cZ(2)
r=c.ia
r===$&&A.h()
if(c.cE==null)q=0
else{c.em===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cE!=null){r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cE)
r=c.ea
r===$&&A.h()
s.uniform1i(r,12)}r=c.ig
q=c.ie
p=c.ic
o=c.ib
n=0
for(;;){m=c.em
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
if(m!=null)s.uniform1i(m,d.d);++n}c.fS(c.i1)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.eb
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.c(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.c(r.WebGL2RenderingContext.BLEND))},
fS(a){var s
this.i0=a
s=this.dx
s===$&&A.h()
this.aN.uniformMatrix4fv(s,!1,a.a)},
b1(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bk=a
j.bl=b
j.ec=b/a
s=j.cF
s===$&&A.h()
r=B.c.T(a,2)
s.ay=r
q=B.c.T(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.b2(p,r,q)
r=s.e
if(r!=null)s.b.b2(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.b2(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.b2(r,384,216)
o=j.bj
n=j.bY
m=j.cH
l=j.cI
k=j.cJ
if(o!=null)j.aY.b2(o,a,b)
if(n!=null)j.aY.b2(n,a,b)
if(m!=null)j.aY.b2(m,j.gck(),j.gcj())
if(l!=null)j.aY.b2(l,j.gck(),j.gcj())
if(k!=null)j.aY.b2(k,a,b)},
lC(a){var s,r,q,p,o,n,m
for(s=this.hS,r=this.hR,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
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
lB(a){var s,r,q,p,o,n,m,l
for(s=this.hT,r=this.e1,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
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
n9(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.dX=b4
s=b2.c0
r=0
if(s>0){for(s=b2.hT,q=0;p=b2.c0,q<p;++q)B.a.k(s,q,q)
b2.lB(p)
for(p=b2.e1,o=b2.dY,n=0;n<b2.c0;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.yh(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.e1,p=b2.dY,q=0;q<b2.c0;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.yh(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.c0=0
for(s=b2.hS,q=0;p=b2.cL,q<p;++q)B.a.k(s,q,q)
b2.lC(p)
for(p=b2.n1,o=b2.hR,k=0,n=0;n<b2.cL;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.u_(0)
m=j.b
h=b2.e5
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.e4
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
e=b2.e3
k=A.yo(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cL=0
s=b2.aY
o=b2.dQ
o===$&&A.h()
s.eK(o,b2.dY,r)
o=b2.dR
o===$&&A.h()
s.eK(o,p,k)
b2.fE()
p=b2.aN
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.dT
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.c.T(r,14));++b2.c_
p.depthMask(!1)
p.enable(A.c(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.c(o.WebGL2RenderingContext.SRC_ALPHA),A.c(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.dU
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.c.T(k,14));++b2.c_
m=b2.dZ
if(m>0){h=b2.dS
h===$&&A.h()
s.eK(h,b2.n2,m)
p.blendFunc(A.c(o.WebGL2RenderingContext.ONE),A.c(o.WebGL2RenderingContext.ONE))
m=b2.dV
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,b2.dZ/14|0);++b2.c_}m=b2.cK
if(m!=null){a7=b2.bj
if(a7!=null)s.o8(m,a7)}a8=b2.bj
if(a8==null)return
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
m=b2.dW
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cH
a4=b2.cI
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ap
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
g=b2.ir
g===$&&A.h()
p.uniform1i(g,0)
s.b6(a4)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.ed
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.b6(a3)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.ed,0,1/a4.y)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cJ
if(b2.cG>0&&a6!=null){s.b6(a6)
g=b2.ap
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.ee
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.ef
g===$&&A.h()
p.uniform1i(g,7)
g=b2.eg
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.eh
g===$&&A.h()
p.uniform1f(g,1)
g=b2.ei
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.ej
g===$&&A.h()
p.uniform1f(g,b2.cG)
g=b2.ek
g===$&&A.h()
p.uniform2f(g,1/b2.bk,1/b2.bl)
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cF
g===$&&A.h()
b0=g.o5(a8,0.5)
s.b6(null)
s=b2.ap
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE1))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.ip
g===$&&A.h()
p.uniform1i(g,1)
g=b2.iq
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.is
s===$&&A.h()
b2.bZ===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.it
s===$&&A.h()
p.uniform1i(s,7)
s=b2.iu
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.hn
s===$&&A.h()
p.uniform1i(s,11)
s=b2.ho
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cG>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.ii
h===$&&A.h()
p.uniform1i(h,0)
h=b2.e9+=b3;++b2.i_
s=b2.ij
s===$&&A.h()
p.uniform1f(s,h)
h=b2.ix
h===$&&A.h()
s=b2.i_
p.uniform2f(h,B.c.O(s*13,64),B.c.O(s*29,64))
s=b2.ik
s===$&&A.h()
p.uniform1f(s,0)
s=b2.il
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.im
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.io
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.dX
if(s.a===B.a9)b1=0*(1-s.b/1)
else b1=0
s=b2.iA
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.pw.prototype={
$0(){var s=this.a.ap
s===$&&A.h()
return s.b},
$S:66}
A.px.prototype={
$1(a){return this.a.h(0,A.y(a))},
$S:43}
A.r3.prototype={
glP(){var s=this.b
s===$&&A.h()
return s},
fO(){var s,r,q,p,o,n,m=this,l=m.lQ(),k=m.a
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
m.i2=A.k(k.getUniformLocation(l,"uSoft"))
m.i3=A.k(k.getUniformLocation(l,"uSoftOn"))
m.i4=A.k(k.getUniformLocation(l,"uInternal"))
m.i5=A.k(k.getUniformLocation(l,"uLightProj0"))
m.i6=A.k(k.getUniformLocation(l,"uLightProj1"))
m.i7=A.k(k.getUniformLocation(l,"uLightProj2"))
m.n4=A.k(k.getUniformLocation(l,"uShadow0"))
m.n5=A.k(k.getUniformLocation(l,"uShadow1"))
m.n6=A.k(k.getUniformLocation(l,"uShadow2"))
m.i8=A.k(k.getUniformLocation(l,"uShadowCasters"))
m.ea=A.k(k.getUniformLocation(l,"uMaterialAlbedo"))
m.eb=A.k(k.getUniformLocation(l,"uStaticMaterial"))
m.i9=A.k(k.getUniformLocation(l,"uShadowBias"))
m.ia=A.k(k.getUniformLocation(l,"uMaterialCount"))
s=m.ib
B.a.G(s)
r=m.ic
B.a.G(r)
q=m.ie
B.a.G(q)
p=m.ig
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.k(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.k(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.k(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.k(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.ea,12)},
dc(a){this.a.bindBuffer(A.c(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.fa(56)},
fa(a){var s=this,r=s.c
r===$&&A.h()
s.bR(r,3,a,0)
r=s.f
r===$&&A.h()
s.bR(r,3,a,12)
r=s.d
r===$&&A.h()
s.bR(r,4,a,24)
r=s.e
r===$&&A.h()
s.bR(r,1,a,40)
r=s.r
r===$&&A.h()
s.bR(r,3,a,44)},
bR(a,b,c,d){var s=this.a
A.ai(s,"vertexAttribPointer",[a,b,A.c(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
lQ(){return this.glP().$0()}}
A.ql.prototype={
cY(a){return null},
cZ(a){return null}}
A.b.prototype={
a5(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
an(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
a4(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bX(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bg(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gt(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.mA.prototype={
oB(a){var s,r,q,p,o,n=B.k.ao(a.B(),null)
this.a.hk(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aQ(s.getItem("quarantine.save.active"))
q=A.aQ(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
o1(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aQ(s.getItem("quarantine.save.active"))
q=A.aQ(s.getItem("quarantine.save.previous"))
p=this.fk(r,a)
if(p!=null)return new A.eu(p,null)
o=this.fk(q,a)
if(o!=null)return new A.eu(o,"recovered previous save")
if(r==null)return B.jK
return B.jJ}catch(n){return B.jI}},
fk(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.hk(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ae(q) instanceof A.H)return null
else throw q}}}
A.ja.prototype={
k0(a,b,c,d,e){if(this.a.length===0)throw A.d(B.eX)
if(this.b<0)throw A.d(B.ex)},
B(){var s,r=this,q=r.d
q=q==null?null:A.al(q,t.i)
s=t.z
return A.b_(A.P(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.c4.prototype={
A(){return"EndingKind."+this.b}}
A.n6.prototype={}
A.f5.prototype={
B(){var s=t.N
return A.P(["kind",this.a.b],s,s)}}
A.n9.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:68}
A.k1.prototype={
B(){var s,r=this,q=t.N,p=A.o(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.P(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
nk(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.an(0,new A.b(0,1.3499999999999999,0))
return!new A.iU(s,s.a5(0,new A.b(0,1.2000000000000002,0))).iK(a,r)}}
A.pc.prototype={
B(){return A.lw(this.a)}}
A.fh.prototype={
B(){return A.P(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.pH.prototype={
hk(a){var s,r,q,p,o,n,m,l=B.k.aF(a,null),k=t.f
if(!k.b(l))throw A.d(B.f4)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aJ(p))o=p!==1&&p!==2
else o=!0
if(o)A.i(A.a8("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.i(B.eE)
k=A.aM(n,s,r)
return A.x2(A.aM(m,s,r),k,2)}}
A.eu.prototype={}
A.ed.prototype={
A(){return"GameSessionEventType."+this.b}}
A.jj.prototype={}
A.nt.prototype={}
A.ns.prototype={
ga8(){var s=this.d
return new A.nt(s.a,s.b)},
gex(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.P(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.P(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.P(["entryCount",m.e.b.a],k,t.S)
p=A.wD(m.c).B()
o=m.r
n=o.c
return new A.pc(A.lw(A.P(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.P(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
lX(a,b){if(!B.a.M(a.f,new A.nu(b)))return!1
this.z.lW(a,b)
return!0},
nd(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.q(s).i("ay<2>")
q=A.K(new A.ay(s,r),r.i("p.E"))
B.a.S(q,new A.nv())
if(q.length===0)return null
s=A.I(q)
r=s.i("O<1>")
p=A.K(new A.O(q,s.i("n(1)").a(new A.nw()),r),r.i("p.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dz(a),r=t.gS,s=new A.aS(s,s.gt(0),r.i("aS<V.E>")),r=r.i("V.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.c.O(n,o.length)]
s=l.c
k=new A.cu(a,l.a,s.length-1,B.a.gU(s).p(0))
j.k(0,a,k)
return k},
lT(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.ao(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cs(B.fe)}if(n<a)this.cs(B.ff)},
jN(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d3(a)&&s.jM(b)},
o2(a){var s,r,q,p,o
t.ee.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.d9){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
jK(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.A1(j,A.al(i.d,h).length)
if(a===B.cX)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.I(r)
A.A0(j,new A.O(r,q.i("n(1)").a(new A.nx(k)),q.i("O<1>")).gt(0))
r=k.f
q=r.b
if(B.a.u(B.h6,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aJ(j.a/1*3)
B.a.l(r.r,new A.fi(q.a,a,b))
m=r.a
A.Ac(m,q.a,n,k.b,A.al(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.jy(B.hI)
s.r.mj(o,c)
l=B.d.aJ(j.b/1*6)
if(l>0)r.d3(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ay(i,A.q(i).i("ay<2>")).M(0,new A.ny())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cs(B.fh)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cs(B.fg)},
cs(a){var s=this;++s.y
B.a.l(s.w,new A.jj())
B.a.l(s.x,A.A2(A.CT(a),s.b,s.y-1))}}
A.nu.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.nv.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.nw.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:20}
A.nx.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.qm().jH(this.a.c,a.a)},
$S:30}
A.ny.prototype={
$1(a){return t.g.a(a).e},
$S:20}
A.mo.prototype={
eL(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
for(n=A.I(j),i=n.i("n(1)"),n=n.i("O<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.cF(new A.O(j,i.a(new A.mt(e)),n),r)
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
A.mp.prototype={
$1(a){return A.zL(a,this.a)},
$S:73}
A.mq.prototype={
$1(a){var s=this.a,r=A.lD(a,"portal"),q=A.e_(r,"id"),p=A.e_(r,"a"),o=A.e_(r,"b"),n=A.iA(r,"width"),m=A.iA(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.y(r.h(0,"doorKit")):null
return new A.eS(q,p,o,n*s,m*s,l)},
$S:74}
A.mr.prototype={
$1(a){var s=A.lD(a,"stair")
A.e_(s,"id")
return new A.eU(A.e_(s,"portalId"))},
$S:75}
A.ms.prototype={
$1(a){return typeof a=="string"?a:A.ix("exterior cell")},
$S:76}
A.mt.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.eT.prototype={}
A.mu.prototype={
$1(a){var s=this.a,r=A.lD(a,"window"),q=A.e_(r,"id"),p=A.iA(r,"offset")
A.iA(r,"sill")
return new A.eV(q,p*s,A.iA(r,"width")*s,A.iA(r,"height")*s)},
$S:78}
A.eV.prototype={}
A.eS.prototype={}
A.eU.prototype={}
A.u3.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.iU.prototype={
om(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.I(s)
q=new A.O(s,r.i("n(1)").a(new A.mF(e)),r.i("O<1>"))
p=!q.gq(0).m()?null:q.gR(0)
if(p==null){n.d=null
return}if(!(n.cr(b,p.f)&&a==="hall"))o=n.cr(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.kH(p,B.d.N(d,0,1))},
nx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fB(f,c,d)
s=g.kT(a,b,c,d)
if(s!=null){g.d=s
return g.fB(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.mb(Math.sqrt(r*r+q*q)/0.08))
o=d.a4(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.h6(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.iZ(a,n)
n=i==null?n:i
h=g.h6(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.iZ(a,n)
n=i==null?n:i}g.cu(m)
return new A.jP(m,n)},
kT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cr(c,l.f)&&n
j=q&&this.cr(c,l.r)&&o
if(k||j)return new A.kH(l,k?0:1)}return null},
fB(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.an(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.N(a.b+o/p,0,1)
n=A.xf(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.cu(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.jP(n,k)},
cr(a,b){var s=a.an(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
h6(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.hP(c,!1)
s=c.a5(0,d)
this.cu(s)
if(this.iK(a,b)){this.cu(c)
return new A.hP(c,!0)}return new A.hP(s,!1)},
cu(a){var s=a.an(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.a5(0,new A.b(0,1.2000000000000002,0))},
iK(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.lE(a,m,s)},
iZ(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aX(k)
for(r=k.a,q=a.aB(r),p=J.T(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>"));q.m();){o=p.gn()
n=o.bG(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.ha(k,o,s)&&this.kJ(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lE(a,b,c){var s,r,q
for(s=a.aB(b.a),r=J.T(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.ha(b,q,c))return!0}return!1},
ha(a,b,c){var s,r,q,p=a.a,o=b.aG(p),n=b.aj(p)
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
kJ(a,b,c){var s,r=this
switch(b.aG(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sm0(a){this.a=t.mz.a(a)}}
A.mF.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:80}
A.jP.prototype={}
A.hP.prototype={}
A.kH.prototype={}
A.h7.prototype={}
A.nS.prototype={
mj(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.L,r)
s=B.L[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jI(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.L,q)
p=B.L[q]
if(p.b===a)r+=p.c}return r},
jJ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.L,q)
p=B.L[q]
if(p.b===a)r+=p.d}return r},
B(){return A.P(["landedCount",this.b],t.N,t.z)}}
A.pD.prototype={
kc(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.J()
o.c=new A.jv(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.k(0,p.a,o.fb(p))}},
cT(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.nc(r[o])
s.k(0,a,n.fb(m))},
fb(a){var s=A.yI(this.a,a),r=this.b,q=A.e([r.cw(s.a,1),r.cw(s.b,2),r.cw(s.c,0)],t.t),p=s.d
if(!B.p.gL(p))q.push(r.cw(p,0))
return q},
jg(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.M
s=l.a
r=A.aE([s],t.N)
for(n=n.aB(s),q=J.T(n.a),n=new A.R(q,n.b,n.$ti.i("R<1>"));n.m();){p=q.gn()
o=p.bG(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
mT(a,b){var s,r,q,p,o=this,n=o.jg(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.ja(n,b))
s=t.f0
m.e2=l.length<=4?A.al(l,s):A.al(A.hE(l,0,A.e0(4,"count",t.S),A.I(l).c),s)
for(l=n.gq(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.mU(r[p])}}}
A.a_.prototype={}
A.jd.prototype={
gnn(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a2(A.e([r,q,p,o,n,m],t.n),new A.nb())&&o>=r&&n>=q&&m>=p}}
A.nb.prototype={
$1(a){return isFinite(A.bZ(a))},
$S:5}
A.ju.prototype={
D(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.O(s,3)!==0}else s=!0
if(s)throw A.d(A.x("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.x("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gnn())throw A.d(A.x("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.M(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.nU()))throw A.d(A.x("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.x("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.x("QHMX index "+o+" exceeds vertex count",m))}}}
A.nU.prototype={
$1(a){return!isFinite(A.bZ(a))},
$S:5}
A.nT.prototype={
v(a,b,c,d,e,f,g){var s=this
s.bt(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bt(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bt(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bt(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bt(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bt(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a_(a,b,c,m,n,o,0,0,p),r=new A.a_(g,h,i,m,n,o,1,1,p)
this.aa(s,new A.a_(d,e,f,m,n,o,1,0,p),r)
this.aa(s,r,new A.a_(j,k,l,m,n,o,0,1,p))},
aa(a,b,c){var s=this,r=s.b
B.a.l(r,s.dm(a))
B.a.l(r,s.dm(b))
B.a.l(r,s.dm(c))},
dm(a){var s,r,q=B.a.ab(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
m5(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.ju(A.al(g,t.hZ),new Uint16Array(A.a0(this.b)),new A.jd(s,r,q,p,o,n))
h.D()
return h}}
A.je.prototype={}
A.uQ.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.aa.u(0,s))A.i(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:81}
A.tX.prototype={
$2(a,b){var s=t.m7
return B.b.F(s.a(a).a,s.a(b).a)},
$S:82}
A.cV.prototype={
oA(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.o(k,k),i=A.e([],t.ph)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.i_(A.F2(new A.ju(i,new Uint16Array(A.a0(s)),A.CD(i))),l.a,l.b,l.c,A.e([],k))}}
A.i_.prototype={}
A.e9.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.jf.prototype={
mc(a){var s
switch(a.a){case 0:s=A.aE(["front","street","opposite-house"],t.N)
break
case 1:s=A.aE(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aE(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aE(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aE(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
md(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.bN
break A}if("kitchen"===a||"cellar"===a){s=B.e4
break A}if("bathroom"===a){s=B.e5
break A}if("spare-room"===a){s=B.e6
break A}s=B.bN
break A}return this.mc(s)},
iB(a,b,c,d){d.i("p<0>").a(b)
t.Q.a(c)
return new A.cd(this.n8(d.i("j(0)").a(a),b,c,d),d.i("cd<0>"))},
n8(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iB(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a2(0,B.aa.gaw(B.aa)))throw A.d(A.x("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.c7(l,l.r,l.e,r.$ti.i("c7<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.aa.u(0,j))throw A.d(A.m("retained item references unknown PVS cell "+j))
o=q.u(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.dU.prototype={
hg(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.tE.prototype={
$1(a){var s=this
return t.e7.a(a).hg(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:37}
A.tD.prototype={
$1(a){return t.e7.a(a).hg(0,(this.a+this.b)*0.5,this.c)},
$S:37}
A.dC.prototype={
A(){return"FocusKind."+this.b}}
A.ea.prototype={}
A.pE.prototype={}
A.rU.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:84}
A.rT.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.dT.prototype={}
A.fs.prototype={}
A.nQ.prototype={
kn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.o6(),a4=this.b,a5=A.aq(a4,!0,t.U)
B.a.G(a4)
s=A.e([],t.kl)
for(r=a5.length,q=t.jc,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.b4(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.b8(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.ba(b.a,b.b,a3.$1(b.c)))}s.push(new A.aU(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.aq(a4,!0,t.T)
B.a.G(a4)
s=A.e([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bk(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dj(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
ko(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.o7(),a7=this.b,a8=A.aq(a7,!0,t.U)
B.a.G(a7)
s=A.e([],t.kl)
for(r=a8.length,q=t.hS,p=t.jc,o=t.cs,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.r)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.e([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.r)(h),++f){e=h[f]
i.push(new A.b4(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.e([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.r)(g),++f){c=g[f]
h.push(new A.b8(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.e([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.r)(d),++f){a=d[f]
g.push(new A.ba(a.a,a.b,a6.$1(a.c)))}d=A.e([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.r)(b),++f){a1=b[f]
d.push(new A.d5(a1.a,a1.b*1.5))}s.push(new A.aU(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.J(a7,s)
a7=this.c
a2=A.aq(a7,!0,t.T)
B.a.G(a7)
s=A.e([],t.aN)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bk(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.J(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.e([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.r)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dj(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
kY(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.P(n))throw A.d(A.m("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.P(n))throw A.d(A.m("duplicate portal "+n))
q.k(0,n,m)}},
lN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
lL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.o(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.h9(o,i,h,g,f,e)
a5.f7(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aG(l)
h=c.aj(l)
g=c.w
f=c.x
a5.h9(o,i,h,g,0,f)
a5.f7(a6,l,c.aG(l),c.aj(l),c.aj(l)+g,0,f)}}for(s=new A.G(a6,a6.$ti.i("G<1,2>")).gq(0);s.m();){b=s.d
a=b.b
r=J.c2(a)
r.S(a,new A.o8())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
h9(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
f7(a,b,c,d,e,f,g){J.fQ(t.gz.a(a).c8(b+":"+c.b,new A.o5()),new A.i7([d,e,f,g]))},
aX(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.jI(q),s.b+r.jJ(q),s.c)},
aB(a){var s=this.c,r=A.I(s)
return new A.O(s,r.i("n(1)").a(new A.o9(a)),r.i("O<1>"))},
o_(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.ao(a,"roomId","not a portal endpoint"))
r=this.aX(o)
q=b.aj(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aG(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
goz(){return B.a.bB(this.b,0,new A.oa(),t.S)},
iW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.S
s=A.e([new A.az(a,B.S)],t.bM)
r=A.aE([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.o4(s,0)
n=o.a
m=o.b
for(l=this.aB(n),k=J.T(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>"));l.m();){j=k.gn()
i=j.bG(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.K(m,p)
h.push(j)
B.a.l(s,new A.az(i,h))}}}return B.S}}
A.o6.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:33}
A.o7.prototype={
$1(a){return a.a4(0,1.5)},
$S:33}
A.o8.prototype={
$2(a,b){var s=t.oJ
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:86}
A.o5.prototype={
$0(){return A.e([],t.a3)},
$S:87}
A.o9.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:88}
A.oa.prototype={
$2(a,b){return A.c(a)+t.U.a(b).e.length},
$S:89}
A.na.prototype={}
A.qm.prototype={
jH(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a2(s,new A.qn())}else s=!1
return s}}
A.qn.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.nV.prototype={
nY(a){var s=this.e,r=A.I(s)
return new A.O(s,r.i("n(1)").a(new A.nY(a)),r.i("O<1>"))},
cz(a){return B.a.aZ(this.d,new A.nW(a),new A.nX(a))},
eL(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.m("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.m("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.d(A.m("inventory modelScale must remain 2.25"))
s=t.N
r=A.a5(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.m("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.m("invalid bounds for inventory asset "+m))}j=A.a5(s)
i=A.a5(s)
h=A.a5(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.m("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.m(a7+m+" references "+l))
n=a6.cz(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.zs()
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
a4=g.j5(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.m(a7+m+" escapes "+f.a))}}}
A.nY.prototype={
$1(a){return t.gB.a(a).b===this.a},
$S:90}
A.nW.prototype={
$1(a){return t.p9.a(a).a===this.a},
$S:91}
A.nX.prototype={
$0(){return A.i(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cD.prototype={}
A.cl.prototype={
j5(a,b){var s=this.f.c.b*b,r=a.f
return new A.b(r.a.b*s,r.b.b*s,0)}}
A.oj.prototype={}
A.oh.prototype={}
A.u2.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.oi.prototype={
B(){var s,r,q,p=A.o(t.N,t.z),o=this.a,n=A.q(o).i("ac<1>")
n=A.K(new A.ac(o,n),n.i("p.E"))
B.a.a0(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
eE(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.ei)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.G(0)
for(q=new A.G(r,A.q(r).i("G<1,2>")).gq(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aJ(o)||o<0)throw A.d(B.ey)
s.k(0,n,o)}}}
A.cK.prototype={}
A.jv.prototype={
ja(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.hU)
for(r=a.gq(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cK(new A.b(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.lv(j),0.06))}}B.a.S(s,new A.nZ(b))
return A.hE(s,0,A.e0(4,"count",t.S),t.f0).bK(0)},
lv(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.nZ.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.an(0,s).gt(0),b.a.an(0,s).gt(0))},
$S:93}
A.h3.prototype={
A(){return"Floor."+this.b}}
A.dB.prototype={
A(){return"Facing."+this.b}}
A.b4.prototype={
sjG(a){this.w=A.U(a)}}
A.bk.prototype={
bG(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aG(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.ao(a,"roomId","not an endpoint of "+s.a))},
aj(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.ao(a,"roomId","not an endpoint of "+s.a))}}
A.b8.prototype={}
A.ba.prototype={}
A.d5.prototype={}
A.dj.prototype={}
A.aU.prototype={}
A.o0.prototype={
mX(a){return B.a.aZ(this.c,new A.o1(a),new A.o2(a))},
ow(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.m("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.m("soundscape source changed: "+f))
f=t.N
s=A.a5(f)
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
if(k.gL(k)||k.gav().M(0,new A.o3()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
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
A.o1.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:94}
A.o2.prototype={
$0(){return A.i(A.m("sound emitter missing: "+this.a))},
$S:6}
A.o3.prototype={
$1(a){return B.b.bb(A.y(a)).length===0},
$S:3}
A.cB.prototype={}
A.nR.prototype={
dD(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.ao(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.hH}q=A.e([],t.iG)
p=B.d.aO(r)+1
o=B.d.aO(b)
for(n=p;n<=o;++n){m=B.c.O(n,24)
B.a.l(q,new A.eg("tick"))
if(B.c.O(m,3)===0){B.a.l(q,new A.eg("cuckoo"))
B.a.l(q,new A.eg("bell"))}if(B.c.O(m,6)===0)B.a.l(q,new A.eg("chime"))}l.b=b
return q}}
A.eg.prototype={}
A.o_.prototype={
dD(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.ao(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.hG}q=A.e([],t.dL)
for(p=B.d.aO(r)+1;p<=B.d.aO(b);++p){o=B.c.O(p,24)
n=B.c.O(o,4)
if(n===2)B.a.l(q,B.fM)
if(B.c.O(o,3)===1)B.a.l(q,B.fO)
if(B.c.O(o,8)===5)B.a.l(q,B.fR)
if(B.c.O(o,5)===0)B.a.l(q,B.fN)
if(B.c.O(o,7)===3)B.a.l(q,B.fS)
if(n===1)B.a.l(q,B.fP)
if(B.c.O(o,6)===4)B.a.l(q,B.fQ)}m.b=b
return q}}
A.cA.prototype={}
A.u1.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.o4.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.o(m,l)
for(s=n.a,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.P(["open",o.a,"locked",o.b],m,r))}l=A.o(m,l)
for(s=n.c,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.P(["lit",o.a,"examined",o.b],m,r))}return A.P(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a5(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.a5(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.a5(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.vQ(new A.ac(o,A.q(o).i("ac<1>")),d)){d=f.b
if(A.vQ(new A.ac(d,A.q(d).i("ac<1>")),r)){d=f.c
e=!A.vQ(new A.ac(d,A.q(d).i("ac<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.eR)
e=f.d
if(e<0||e>2)A.i(B.ep)
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
A.hm.prototype={
B(){return A.P(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hd.prototype={
B(){return A.P(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.n5.prototype={
$1(a){return this.a.u(0,A.y(a))},
$S:3}
A.dE.prototype={
A(){return"Hand."+this.b}}
A.qY.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
eY(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.jJ.prototype={
B(){var s,r,q,p=t.N,o=A.o(p,t.x)
for(s=this.a,r=0;r<5;++r){q=B.x[r]
o.k(0,q,s.h(0,q))}return A.P(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.S(B.x,t.ej.a(new A.oA(this)),t.dD).ab(0," \xb7 ")}}
A.oz.prototype={
$2(a,b){return new A.N(A.y(a),A.y(b),t.q)},
$S:95}
A.oA.prototype={
$1(a){return this.a.a.h(0,A.y(a))},
$S:43}
A.bN.prototype={
B(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.P(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.ol.prototype={
bT(a){t.G.a(a)
return a.a===5&&B.a.a2(B.x,new A.os(this,a))},
f8(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bT(b))return null
s=this.e++
r=new A.bN(s,a,A.e([A.oy(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
dK(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bT(b))return!1
B.a.l(s.c,A.oy(b,c,B.ar))
return!0},
lS(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bT(b))return!1
s.r=A.oy(b,0,B.c7)
return!0},
jy(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.P(p)&&!B.a.u(s,p))B.a.l(s,p)}},
ox(a){var s
if(!this.b.P(a))return!1
s=this.d
if(!B.a.u(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.q(n).c)
B.a.a0(n)
s=A.e([],t.bV)
for(r=q.b,r=new A.ag(r,r.r,r.e,A.q(r).i("ag<2>"));r.m();)s.push(r.d.B())
return A.P(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.os.prototype={
$1(a){var s
A.y(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.u(this.a.a.h(0,a),s)},
$S:3}
A.fS.prototype={
A(){return"BackendFallbackReason."+this.b}}
A.mv.prototype={
hl(a,b){if(a.a!==B.V)return a
return new A.eW(B.b4,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.mw.prototype={
dL(a,b){if(a.a===B.V&&!a.d)return new A.p8(b,a.B(),B.cN)
return new A.ow(b,a.d,a.e,a.B(),B.cN)},
mN(a){return this.dL(a,null)}}
A.eW.prototype={
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
A.mx.prototype={
ce(a){var s,r,q,p,o=null,n=a==null?o:B.b.bb(a).toLowerCase()
if(n==null||n.length===0)return B.dr
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.eW(B.V,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.eW(B.b4,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.ox.prototype={}
A.ow.prototype={
gbh(){var s=this,r=s.b,q=r==null?null:r.gbh()
if(q==null)q=A.pz("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jb(s.e)
return r},
b9(){if(this.f===B.cO)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.b9()
this.f=B.A},
b1(a,b){var s
if(a<=0||b<=0)throw A.d(A.x("legacy surface size must be positive",null))
if(this.f!==B.A)A.i(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.b1(a,b)},
b3(a){var s
if(this.f!==B.A)A.i(A.m("legacy backend is not ready"))
B.k.ao(A.P(["backend","legacy","interpolation",0,"facts",A.lw(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.b3(a)},
bm(a){var s
if(this.f!==B.A)A.i(A.m("legacy backend is not ready"))
B.k.ao(A.P(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bm(a)}}
A.p9.prototype={}
A.p8.prototype={
gbh(){var s=this.b,r=s==null?null:s.gbh()
if(r==null)r=A.pz("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jb(this.c)
return s},
b9(){if(this.d===B.cO)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.b9()
this.d=B.A},
b1(a,b){var s
if(this.d!==B.A)A.i(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.x("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.b1(a,b)},
b3(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.av){p=q==null
if(p||!q.gdH()){if(s.d!==B.av)A.i(A.m("pixeldart backend is not context-lost"))
s.d=B.A
if(!p)q.j0()}p=s.d
if(p===B.av)return}if(p!==B.A)A.i(A.m(r))
B.k.ao(A.P(["backend","pixeldart","interpolation",0,"facts",A.lw(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdH()){if(s.d!==B.A)A.i(A.m(r))
s.d=B.av
q.iN()
return}q.b3(a)}},
bm(a){var s
if(this.d!==B.A)A.i(A.m("pixeldart backend is not ready"))
B.k.ao(A.P(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bm(a)}}
A.pa.prototype={
m9(a,b){var s,r,q,p,o,n,m
a.D()
s=B.bB.ce(a)
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
o=A.K(o,A.q(o).c)
B.a.a0(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.r)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.hs.prototype={
A(){return"RendererBackendKind."+this.b}}
A.es.prototype={
A(){return"RendererBackendState."+this.b}}
A.pA.prototype={}
A.ka.prototype={}
A.py.prototype={
kb(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.x("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.x("renderer provenance values must be non-empty",null))}},
jb(a){var s=this
return A.x_(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.lb.a(a))},
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
A.bH.prototype={
A(){return"SleepQuality."+this.b}}
A.bm.prototype={
A(){return"SleepLocation."+this.b}}
A.fi.prototype={}
A.mW.prototype={
d3(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jM(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.P(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.P(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.mX.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:96}
A.mY.prototype={
$1(a){return t.oC.a(a).b===this.a},
$S:97}
A.jz.prototype={
A(){return"InteractionType."+this.b}}
A.eB.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.r2.prototype={}
A.eA.prototype={}
A.iZ.prototype={}
A.ob.prototype={}
A.oe.prototype={
eP(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.ag(s,s.r,s.e,A.q(s).i("ag<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.S(p,new A.of())
return p},
mi(a,b){var s,r,q,p,o,n=b.b
if(n.gL(n))return B.lb
s=t.N
r=A.a5(s)
q=A.a5(s)
for(s=n.gY(),s=s.gq(s),p=a.c;s.m();){o=s.gn()
if(B.a.gU(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eA(B.aA,r)
s=r.a
o=B.a.gU(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gU(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eA(B.dc,r)
return new A.eA(B.bo,r)},
ln(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.iZ(e,!1,B.la,null)
s=p.d===c
r=this.mi(p,d)
q.ox(e)
return new A.iZ(e,s,r,r.a===B.aA&&s?'The world says "'+d.c+'". The entry says "'+B.a.gU(p.c).p(0)+'".':null)},
mO(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aA)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.ob(B.a.gU(s.c).p(0)+" but "+A.w(a.f))}}
A.of.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:14}
A.c9.prototype={
A(){return"RuptureStep."+this.b}}
A.pF.prototype={}
A.cM.prototype={}
A.pG.prototype={
geZ(){var s=B.aY.h(0,this.a)
return s==null?0:s},
jP(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.ck
r=A.vE(b)
s=q.c
B.a.G(s)
B.a.J(s,r)
B.a.G(q.d)
q.a=B.a9
q.b=0
q.e=!1
return A.e([B.dO],t.e_)},
lU(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.x("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.ck
s=A.e([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.aY.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.W)l.lI(s)
p=l.b
o=B.aY.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cM())
if(q===B.W){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.dN)}else{p=q.a+1
if(!(p<7))return A.f(B.cj,p)
l.a=B.cj[p]
l.b=0
B.a.l(s,new A.cM())}}}return A.al(s,t.k8)},
B(){var s=this,r=t.N
return A.P(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.al(s.c,r),"extinguishedMantles",A.al(s.d,r),"completed",s.e],r,t.z)},
lI(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.N(B.d.aO(l.b/l.geZ()*A.al(s,r).length),0,A.al(s,r).length)
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
if(!(m<n.length))return A.f(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cM())}}}
A.jk.prototype={
gbq(){var s=this.b
if(s<6||s>18)return 0
return B.d.N((s-6)/12,0,1)}}
A.ez.prototype={
B(){var s=this
return A.P(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.qZ.prototype={
en(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aT(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.tF.prototype={
$0(){var s,r,q=this.b,p=(this.a^q*73244475)&2147483647
p=(p^p>>>16)*73244475&2147483647
p=(p^p>>>16)&2147483647
s=B.c.O(p,5)===0||B.c.O(p,7)===0
r=s?0.35+B.c.O(p,66)/100:0
return new A.ez(q,s,r,12-(q-1)*0.1)},
$S:98}
A.tN.prototype={
$1(a){var s=B.c.cv(this.a,a)&255
return B.c.N(B.d.aJ(s+((B.c.cv(this.b,a)&255)-s)*this.c),0,255)},
$S:99}
A.oP.prototype={
lW(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gH(),q=q.gq(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.q(k).i("G<1,2>")
k=A.K(new A.G(k,j),j.i("p.E"))
B.a.S(k,new A.oR())
j=t.N
k=A.v3(k,j,j)
s=this.b
r=A.q(s).i("G<1,2>")
s=A.K(new A.G(s,r),r.i("p.E"))
B.a.S(s,new A.oS())
s=A.v3(s,j,j)
r=A.o(j,t.P)
q=this.c
p=A.q(q).i("G<1,2>")
q=A.K(new A.G(q,p),p.i("p.E"))
B.a.S(q,new A.oT())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.P(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.P(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.oR.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.oS.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.oT.prototype={
$2(a,b){var s=t.lY
return B.b.F(s.a(a).a,s.a(b).a)},
$S:101}
A.cu.prototype={
B(){var s=this
return A.P(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.qr.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fk(e.a),c=t.N,b=t.P,a=A.o(c,b)
for(s=e.b,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.lO(q,r.b))}s=A.fk(e.r)
q=A.fk(e.w)
p=A.fk(e.x)
o=A.o(c,t.l_)
for(n=e.as,n=new A.G(n,A.q(n).i("G<1,2>")).gq(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.T(l.b);i.m();){h=i.gn()
j.push(A.P(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.o(c,b)
for(m=e.at,m=new A.G(m,A.q(m).i("G<1,2>")).gq(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.o(c,b)
for(m=e.ax,m=new A.G(m,A.q(m).i("G<1,2>")).gq(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.P(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
lO(a,b){var s,r=A.fk(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fk(q.bE(0,new A.qs(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gV(s))r.k(0,"_ambient",A.fk(s.bE(0,new A.qt(),t.S,t.z)))
return r}}
A.qs.prototype={
$2(a,b){return new A.N(A.c(a),t.ey.a(b).B(),t.iI)},
$S:102}
A.qt.prototype={
$2(a,b){return new A.N(A.c(a),t.bR.a(b).B(),t.iI)},
$S:103}
A.ey.prototype={
B(){return A.P(["hour",this.a,"order",this.b],t.N,t.S)}}
A.ex.prototype={
B(){return A.P(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.hL.prototype={
B(){var s=t.N
return A.P(["field",this.a,"value",this.b],s,s)}}
A.kD.prototype={
B(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.P(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.er.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gV(s))q.k(0,"effects",s)
return q}}
A.cT.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gV(s))q.k(0,"when",s)
return q}}
A.qu.prototype={
c6(){var s=0,r=A.bv(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$c6=A.by(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.am(A.aX(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$c6)
case 6:n=b
j=t.N
s=7
return A.am(A.aX(A.a(n.text()),j),$async$c6)
case 7:m=b
l=A.Eq(m)
i=J.aC(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aC(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aC(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aC(l,"documents")
i.toString
h.a(i)
i=J.aC(l,"street")
i.toString
h.a(i)
i=J.aC(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aC(l,"nights")
i.toString
h.a(i)
i=J.aC(l,"endings")
i.toString
o.w=h.a(i)
i=J.aC(l,"records")
i.toString
o.x=h.a(i)
i=J.aC(l,"cues")
i.toString
h.a(i)
i=J.aC(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aC(l,"reactions"))){g=J.aC(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.o(j,t.z)
o.Q=h.a(g)
if(i.b(J.aC(l,"variants"))){g=J.aC(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.o(j,t.z)
o.as=h.a(g)
if(i.b(J.aC(l,"residues"))){g=J.aC(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.o(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.ae(e)
j=A.w(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$c6,r)},
jf(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gH().cW(0,new A.qv())
r=p.$ti
q=t.N
return A.v3(new A.cm(p,r.i("N<j,j>(1)").a(new A.qw()),r.i("cm<1,N<j,j>>")),q,q)}return null},
jj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.h()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.e([],t.hb)
for(o=J.T(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.o(n,n)
if(f.b(l))for(j=l.gH(),j=j.gq(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.y(i.b))}B.a.l(p,new A.er(A.y(m.h(0,"id")),A.y(m.h(0,"label")),A.y(m.h(0,"reply")),A.b_(k,n,n)))}if(p.length<2)return g
return new A.kD(r,a,b,c,d,A.al(p,t.Y))},
ji(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aS(p)||o!==B.d.aS(o))return n
return new A.ey(B.d.aS(p),B.d.aS(o))},
jh(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aS(p)||typeof o!="string"||typeof n!="string")return m
return new A.ex(B.d.aS(p),o,n)},
oy(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.o(a5,t.iu),a7=A.o(a5,t.c_),a8=A.o(a5,t.d8),a9=t.a,b0=A.o(a5,t.iD),b1=A.o(a5,t.fx),b2=A.o(a5,t.iC),b3=A.o(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.G(b4,A.q(b4).i("G<1,2>")).gq(0)
s=t.bR
r=t.ey
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.o(a3,a4)
for(o=o.gH(),o=o.gq(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.fe(l,null):null
if(k==null||!q.b(m.b))continue
j=A.o(a5,a5)
for(m=q.a(m.b).gH(),m=m.gq(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.y(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.o(a3,r)
for(m=n.$ti.i("c7<1>"),l=new A.c7(n,n.r,n.e,m);l.m();){i=l.d
g=a1.ji(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.o(a3,s)
for(m=new A.c7(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jh(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.ag(b4,b4.r,b4.e,A.q(b4).i("ag<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jj(A.y(d.h(0,"visitor")),B.d.aS(A.aI(d.h(0,"day"))),A.y(d.h(0,"tier")),B.d.aS(A.aI(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.ag(b4,b4.r,b4.e,A.q(b4).i("ag<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.o(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gH(),s=s.gq(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.y(r.b))}s=A.y(d.h(0,"id"))
b2.k(0,s,new A.cT(s,A.y(d.h(0,"target")),A.y(d.h(0,a2)),A.b_(b,a5,a5)))}b4=a1.at
b4===$&&A.h()
b4=new A.G(b4,A.q(b4).i("G<1,2>")).gq(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.h()
b4=new A.G(b4,A.q(b4).i("G<1,2>")).gq(0)
s=t.cF
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.T(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.hL(A.y(a0.h(0,"field")),A.y(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.qr(A.o(a3,a4),a6,a7,a8,A.o(a5,a9),A.o(a5,a9),A.o(a3,a9),A.o(a3,a9),A.o(a3,a9),A.o(a5,a9),A.o(a5,a9),A.o(a5,a9),b0,b1,b2,b3)}}
A.qv.prototype={
$1(a){t.ag.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:104}
A.qw.prototype={
$1(a){t.ag.a(a)
return new A.N(A.y(a.a),A.y(a.b),t.q)},
$S:105}
A.lQ.prototype={
bC(a,b,c){var s=B.b.bb(a),r=B.b.bb(c)
if(r.length===0)return""
if(b)return s.length===0?r:s+": "+r
return s.length===0?r:s+": "+r},
iC(a,b){return this.bC(a,!1,b)}}
A.cs.prototype={
A(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dv.prototype={
bU(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dv(q,p,o,n,m)},
mI(a){var s=null
return this.bU(s,s,s,a,s)},
mL(a){var s=null
return this.bU(s,s,s,s,a)},
mE(a){var s=null
return this.bU(s,s,a,s,s)},
mC(a){var s=null
return this.bU(s,a,s,s,s)},
mn(a){var s=null
return this.bU(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.P(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.lT.prototype={
$1(a){return a==null?null:A.U(a)},
$S:106}
A.lR.prototype={
$1(a){return t.g8.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:34}
A.lS.prototype={
$0(){return A.i(B.f1)},
$S:6}
A.m2.prototype={
cf(a,b){var s,r=B.H.iC(a,b)
if(r.length===0)return
s=this.a
s.textContent=r
s.className="ambient-notice visible"
this.aD(r)
A.c(A.a(v.G.window).setTimeout(A.y2(new A.m4(this)),7000))},
aD(a){var s,r,q=this
if(!q.c||B.b.bb(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.c(A.a(v.G.window).setTimeout(A.y2(new A.m3(q,s)),4200))}}
A.m4.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:108}
A.m3.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:11}
A.cj.prototype={
A(){return"AudioOutputMode."+this.b}}
A.ct.prototype={
A(){return"AudioDynamicRange."+this.b}}
A.d3.prototype={
A(){return"AudioReverbMode."+this.b}}
A.d2.prototype={
A(){return"AudioDuckingMode."+this.b}}
A.dw.prototype={
cC(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dw(r,q,p,a==null?s.e:a)},
mB(a){return this.cC(null,null,a,null)},
ms(a){return this.cC(null,a,null,null)},
mG(a){return this.cC(null,null,null,a)},
mr(a){return this.cC(a,null,null,null)},
B(){var s=this
return A.P(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mf.prototype={
$1$2(a,b,c){return B.a.aZ(c.i("p<0>").a(a),new A.mg(b,c),new A.mh(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:164}
A.mg.prototype={
$1(a){return t.aT.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.mh.prototype={
$0(){return A.i(A.a8("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.mz.prototype={
eI(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.H.iC(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.mC.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:2}
A.iS.prototype={
A(){return"BrushComponentKind."+this.b}}
A.iT.prototype={
A(){return"BrushComponentState."+this.b}}
A.mB.prototype={}
A.f1.prototype={
gcA(){var s,r,q,p,o=t.N
o=A.o(o,o)
for(s=this.r.gH(),s=s.gq(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aK(r)
o.k(0,q,p.gL(r)?"":p.gR(r))}return o},
bz(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.kN.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.P(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bZ(r)
q=n.h(0,i)
q.toString
A.bZ(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
return A.f2(null,a,A.U(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bZ(r)
q=n.h(0,i)
q.toString
A.bZ(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gcA()
return A.f2(l,null,m,r,p,o,s,q)},
dJ(a){var s=null
return this.bz(a,s,s,s,s,s)},
my(a){var s=null
return this.bz(s,s,s,a,s,s)},
mz(a){var s=null
return this.bz(s,s,s,s,a,s)},
mv(a){var s=null
return this.bz(s,a,s,s,s,s)},
mw(a){var s=null
return this.bz(s,s,a,s,s,s)},
mM(a){var s=null
return this.bz(s,s,s,s,s,a)},
D(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.ek)
p=this.r
if(p.gH().M(0,new A.mQ()))throw A.d(B.eY)
if(p.gH().M(0,new A.mR()))throw A.d(B.eN)
p=p.gav()
o=A.q(p)
s=o.i("h1<p.E,j>")
r=s.i("O<p.E>")
q=A.K(new A.O(new A.h1(p,o.i("p<j>(p.E)").a(new A.mS()),s),s.i("n(p.E)").a(new A.mT()),r),r.i("p.E"))
if(A.jK(q,A.I(q).c).a!==q.length)throw A.d(B.en)},
B(){var s,r,q=this,p=t.N,o=A.o(p,t.a)
for(s=q.r.gH(),s=s.gq(s);s.m();){r=s.gn()
o.k(0,r.a,A.aq(r.b,!0,p))}return A.P(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.mQ.prototype={
$1(a){t.cW.a(a)
return J.uT(a.b,new A.mP(a))},
$S:35}
A.mP.prototype={
$1(a){var s
A.y(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.wr(a)
else s=!1
return s},
$S:3}
A.mR.prototype={
$1(a){t.cW.a(a)
return a.a!=="pause"&&J.uT(a.b,B.cR.gaw(B.cR))},
$S:35}
A.mS.prototype={
$1(a){return t.a.a(a)},
$S:111}
A.mT.prototype={
$1(a){return A.y(a).length!==0},
$S:3}
A.mO.prototype={
$1(a){return typeof a=="string"},
$S:16}
A.dx.prototype={
A(){return"BindingCaptureStatus."+this.b}}
A.e4.prototype={
A(){return"BindingConflictResolution."+this.b}}
A.d4.prototype={}
A.j_.prototype={
dE(a){var s=this
if(!s.a.r.P(a))return new A.d4(B.bw,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.ds},
ma(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aF
if(!A.wr(a)){p.c=p.b=null
return new A.d4(B.by,B.cS.u(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gH()
r=r.gq(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.wj(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.d4(B.bv,a+" is already bound to "+s)}return p.km(a)},
eD(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aF
switch(a.a){case 2:m.c=m.e=m.d=null
return B.dt
case 1:s=A.vw(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.vN(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.vY(r,k))
m.a=m.a.dJ(s)
break
case 0:s=A.vw(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gR(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.hE(p,1,null,A.I(p).c)
o=p.$ti
p=new A.aS(p,p.gt(0),o.i("aS<a3.E>"))
o=o.i("a3.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.vY(r,k)}else{r=s.h(0,j)
r.toString
r=A.vN(A.vY(r,k),q)}s.k(0,j,r)
m.a=m.a.dJ(s)
break}m.c=m.e=m.d=null
return B.bu},
km(a){var s,r,q=this,p=q.b
if(p==null)return B.aF
s=A.vw(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.vN(r,a))
q.a=q.a.dJ(s)
q.b=null
return B.bu}}
A.j0.prototype={
k_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="settings-copy",b="settings-grid"
e.x=new A.j_(e.w)
s=e.b
s.setAttribute("aria-label","Controls settings")
A.a(s.appendChild(A.B(a,"h1","journal-title","Controls")))
A.a(s.appendChild(A.B(a,"p",c,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.B(a,"div",b,d)
e.f6(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
e.f6(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
e.d9(a,r,"invertX","Invert horizontal look")
e.d9(a,r,"invertY","Invert vertical look")
e.d9(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.B(a,"div",b,d)
for(p=B.i2.gH(),p=p.gq(p),o=A.ds,n=e.Q;p.m();){m=p.gn()
l=m.a
k=A.f2(d,d,!1,1,!1,!1,2,1).r.h(0,l)
j=k==null||J.uU(k)?"unbound":J.zy(k," / ")
i=A.a(a.createElement("div"))
i.className="setting-row"
m=m.b
i.setAttribute("aria-label",m+": "+j)
h=A.a(a.createElement("span"))
h.textContent=m
A.a(i.appendChild(h))
h=A.a(a.createElement("button"))
h.className="door-continue"
h.setAttribute("type","button")
h.id="settings.controls.bind."+l
m=new A.mM(e,l)
if(typeof m=="function")A.i(A.x("Attempting to rewrap a JS function.",d))
g=function(a0,a1){return function(a2){return a0(a1,a2,arguments.length)}}(o,m)
g[$.cg()]=m
h.addEventListener("click",g)
A.a(i.appendChild(h))
A.a(q.appendChild(i))
n.k(0,l,h)}A.a(s.appendChild(q))
p=A.B(a,"p",c,d)
e.as=p
p.setAttribute("aria-live","polite")
p=e.as
p.toString
A.a(s.appendChild(p))
p=A.B(a,"div","pause-actions",d)
e.at=p
A.a(s.appendChild(p))
e.dw()
f=A.B(a,"button","door-continue","back")
f.setAttribute("type","button")
f.id="settings.controls.back"
f.setAttribute("aria-label","back to settings categories")
f.addEventListener("click",A.Z(new A.mN(e)))
A.a(s.appendChild(f))},
iS(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fq(this.x.ma(A.y(a.code)))},
fq(a){var s,r=this,q=r.as
if(q!=null){s=a.c
if(s==null)s=a.a.b
q.textContent=s}q=a.a
if(q===B.bv)r.lz()
else if(q===B.bx){q=r.x
q===$&&A.h()
q=q.a
r.w=q
s=r.f
if(s!=null)s.$1(q)
r.dw()}else r.de()},
lz(){var s,r,q,p,o,n,m
this.de()
s=this.at
if(s==null)return
for(r=A.ds,q=0;q<3;++q){p=B.h4[q]
o=A.a(A.k(s.ownerDocument).createElement("button"))
o.className="door-continue"
o.textContent=p.b
o.setAttribute("type","button")
n=new A.mL(this,p)
if(typeof n=="function")A.i(A.x("Attempting to rewrap a JS function.",null))
m=function(a,b){return function(c){return a(b,c,arguments.length)}}(r,n)
m[$.cg()]=n
o.addEventListener("click",m)
A.a(s.appendChild(o))}},
de(){var s,r=this.at
if(r==null)return
while(A.k(r.firstChild)!=null){s=A.k(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dw(){var s,r,q,p
for(s=this.Q,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0);s.m();){r=s.d
q=r.b
p=this.x
p===$&&A.h()
p=p.a.gcA().h(0,r.a)
if(p==null)p="unbound"
q.textContent=p}},
f6(a,b,c,d,e,f){var s,r=A.B(a,"label","setting-row",null)
A.a(r.appendChild(A.B(a,"span",null,d)))
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.w(e)
s.max=""+f
s.step="0.1"
s.addEventListener("input",A.Z(new A.mJ(this,s,c)))
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d9(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.mK(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.B(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
fo(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seu(a){this.f=t.dO.a(a)},
sb_(a){this.r=t.Z.a(a)}}
A.mM.prototype={
$1(a){var s,r,q,p,o
A.a(a)
s=this.a
r=this.b
q=s.x
q===$&&A.h()
p=q.dE(r)
q=s.as
if(q!=null){o=p.c
r=o==null?"press a key for "+r+"; Escape cancels":o
q.textContent=r}s.de()},
$S:1}
A.mN.prototype={
$1(a){var s
A.a(a)
s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.mL.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.x
r===$&&A.h()
s.fq(r.eD(this.b))},
$S:1}
A.mJ.prototype={
$1(a){var s,r,q
A.a(a)
s=A.hp(A.y(this.b.value))
if(s==null)s=1
r=this.a
q=r.w
r.fo(this.c==="horizontalSensitivity"?q.mw(s):q.mM(s))},
$S:1}
A.mK.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("invertX"===q){p=r.w.my(s)
break A}if("invertY"===q){p=r.w.mz(s)
break A}p=r.w.mv(s)
break A}r.fo(p)},
$S:1}
A.n_.prototype={
k5(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.B(a,i,"door-speaker",j)
k.c!==$&&A.J()
k.c=s
r=A.B(a,i,"door-line",j)
k.d!==$&&A.J()
k.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(h.appendChild(s))
A.a(h.appendChild(r))
r=A.B(a,i,"door-cite-list",j)
k.f!==$&&A.J()
k.f=r
s=A.B(a,i,"door-cite-result",j)
k.r!==$&&A.J()
k.r=s
A.a(h.appendChild(r))
A.a(h.appendChild(s))
for(s=A.ds,r=k.w,q=0;q<5;++q){p=B.hp[q]
o=A.a(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.n0(k,p)
if(typeof n=="function")A.i(A.x("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.cg()]=n
o.addEventListener("click",m)
A.a(h.appendChild(o))
B.a.l(r,o)}s=A.B(a,"button","door-continue","continue")
k.e!==$&&A.J()
k.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.n1(k)))
A.a(h.appendChild(s))
l=A.Z(new A.n2(k,a))
k.y=l
h.addEventListener("keydown",l)
A.a(A.k(a.body).appendChild(h))},
eV(a,b){var s,r,q,p=this
p.ax=!0
s=p.c
s===$&&A.h()
s.textContent=a
s=p.d
s===$&&A.h()
s.textContent=B.H.bC("",!0,b)
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
B.a.gR(s).focus()},
eW(a,b){var s,r,q,p=this,o=p.d
o===$&&A.h()
o.textContent=B.H.bC("",!0,a)
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
jD(a){return this.eW(a,!1)},
jF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.lX.a(a)
for(s=g.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].remove()
B.a.G(s)
r=g.e
r===$&&A.h()
r=A.a(r.style)
p=b==null
o=p?"none":""
r.display=o
for(r=a.length,o=g.a,n=!p,m=A.ds,l=g.b,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){k={}
j=a[q]
k.a=null
k.a=j.a
i=A.a(l.createElement("button"))
i.className="door-reaction"
i.textContent=j.b
i.setAttribute("type","button")
j=new A.n4(k,g)
if(typeof j=="function")A.i(A.x("Attempting to rewrap a JS function.",null))
h=function(c,d){return function(e){return c(d,e,arguments.length)}}(m,j)
h[$.cg()]=j
i.addEventListener("click",h)
if(n){i.disabled=!0
if(k.a===b)i.setAttribute("aria-pressed","true")}A.a(o.appendChild(i))
B.a.l(s,i)}if(s.length!==0&&p)B.a.gR(s).focus()},
eX(a,b){var s,r,q=this.d
q===$&&A.h()
q.textContent=B.H.bC("",!0,a+"\n\n"+b)
for(q=this.x,s=q.length,r=0;r<q.length;q.length===s||(0,A.r)(q),++r)q[r].disabled=!0
q=this.e
q===$&&A.h()
A.a(q.style).display=""
q.focus()},
jC(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.ds,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.n3(o,this)
if(typeof o=="function")A.i(A.x("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.cg()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
cM(){var s,r,q,p,o=this
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
snC(a){this.z=t.ov.a(a)},
snE(a){this.Q=t.Z.a(a)},
snD(a){this.as=t.bZ.a(a)},
snN(a){this.at=t.ov.a(a)}}
A.n0.prototype={
$1(a){var s
A.a(a)
s=this.a.z
return s==null?null:s.$1(this.b)},
$S:2}
A.n1.prototype={
$1(a){var s
A.a(a)
s=this.a.Q
return s==null?null:s.$0()},
$S:2}
A.n2.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.a(a)
s=this.a
if(!s.ax||A.y(a.code)!=="Tab")return
r=A.e([],t.kG)
for(q=s.w,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.y(A.a(n.style).display)!=="none")r.push(n)}for(q=s.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.y(A.a(n.style).display)!=="none")r.push(n)}q=s.e
q===$&&A.h()
if(A.y(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.h()
m=A.a(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.c(m.length);++l){k=A.k(m.item(l))
if(s.b(k))B.a.l(r,k)}if(r.length===0)return
j=A.k(this.b.activeElement)
if(A.U(a.shiftKey)){if(j===B.a.gR(r)||!B.a.u(r,j)){a.preventDefault()
B.a.gU(r).focus()}}else if(j===B.a.gU(r)||!B.a.u(r,j)){a.preventDefault()
B.a.gR(r).focus()}},
$S:1}
A.n4.prototype={
$1(a){var s
A.a(a)
s=this.b.at
return s==null?null:s.$1(this.a.a)},
$S:2}
A.n3.prototype={
$1(a){var s
A.a(a)
s=this.b.as
return s==null?null:s.$1(this.a.a)},
$S:2}
A.n7.prototype={
k6(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.B(s,"h1","journal-title",null)
o.f!==$&&A.J()
o.f=r
q=A.B(s,"div","ending-copy",null)
o.r!==$&&A.J()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.B(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.n8(o)))
A.a(n.appendChild(p))},
jE(a,b){var s,r,q,p,o,n,m=this
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
A.a(s.appendChild(n))}m.bF()},
snG(a){this.w=t.Z.a(a)}}
A.n8.prototype={
$1(a){var s
A.a(a)
s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.d8.prototype={
A(){return"GameplayInteractionMode."+this.b}}
A.cw.prototype={
A(){return"GameplayPromptDensity."+this.b}}
A.cx.prototype={
A(){return"GameplayTextPacing."+this.b}}
A.d9.prototype={
A(){return"GameplayJournalLayout."+this.b}}
A.d7.prototype={
A(){return"GameplayConfirmationLevel."+this.b}}
A.da.prototype={
A(){return"GameplaySaveFeedback."+this.b}}
A.cv.prototype={
A(){return"GameplayFocusLossBehavior."+this.b}}
A.nz.prototype={
b7(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.wz(n,b==null?s.x:b,l,r,o,q,m,p)},
mp(a){var s=null
return this.b7(s,a,s,s,s,s,s,s)},
mx(a){var s=null
return this.b7(s,s,s,a,s,s,s,s)},
mD(a){var s=null
return this.b7(s,s,s,s,s,a,s,s)},
mJ(a){var s=null
return this.b7(s,s,s,s,s,s,s,a)},
mA(a){var s=null
return this.b7(s,s,s,s,a,s,s,s)},
mo(a){var s=null
return this.b7(a,s,s,s,s,s,s,s)},
mH(a){var s=null
return this.b7(s,s,s,s,s,s,a,s)},
mt(a){var s=null
return this.b7(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.P(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.ck.prototype={
A(){return"GraphicsPreset."+this.b}}
A.dD.prototype={
by(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dD(s.a,r,q,p,o,n,m)},
dI(a){var s=null
return this.by(a,s,s,s,s,s)},
hh(a){var s=null
return this.by(s,a,s,s,s,s)},
hi(a){var s=null
return this.by(s,s,s,a,s,s)},
mF(a){var s=null
return this.by(s,s,s,s,a,s)},
mu(a){var s=null
return this.by(s,s,a,s,s,s)},
mK(a){var s=null
return this.by(s,s,s,s,s,a)},
D(){var s=this,r=null,q=s.c
if(!B.a.u(B.hO,q))throw A.d(A.a8("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.u(B.hb,q))throw A.d(A.a8("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.u(B.hR,q))throw A.d(A.a8("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.u(B.hL,q))throw A.d(A.a8("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.P(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.nL.prototype={
$1(a){return t.jI.a(a).b===this.a.h(0,"preset")},
$S:36}
A.nM.prototype={
$0(){return A.i(B.eD)},
$S:6}
A.nN.prototype={
B(){return A.P(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.nF.prototype={}
A.nG.prototype={}
A.jr.prototype={
k7(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.a(l.appendChild(A.B(a,"h1","journal-title","Graphics")))
A.a(l.appendChild(A.B(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.B(a,"div","settings-grid",n)
r=t.N
o.bN(a,s,"preset","quality preset",A.P(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bN(a,s,"renderScale","render scale",A.P(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bN(a,s,"frameTarget","frame target",A.P(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bN(a,s,"antialiasing","anti-aliasing",A.P(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bN(a,s,"textureQuality","texture quality",A.P(["high","High","medium","Medium","low","Low"],r,r))
q=A.B(a,"label","setting-toggle",n)
r=A.a(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.Z(new A.nJ(o)))
r=o.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.B(a,"span",n,"Dynamic resolution")))
A.a(s.appendChild(q))
A.a(l.appendChild(s))
r=A.B(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.a(l.appendChild(r))
p=A.B(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.Z(new A.nK(o)))
A.a(l.appendChild(p))},
bN(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.a(s.appendChild(A.B(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.G(e,A.q(e).i("G<1,2>")).gq(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.nI(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
fu(a){var s
a.D()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
eU(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.ab(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seu(a){this.f=t.fu.a(a)},
sb_(a){this.r=t.Z.a(a)}}
A.nJ.prototype={
$1(a){var s
A.a(a)
s=this.a
s.fu(s.z.hh(A.U(s.x.checked)))},
$S:1}
A.nK.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.nI.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.y(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.hi(B.a.ah(B.ci,new A.nH(s)))
break A}if("renderScale"===q){p=r.z.mF(s)
break A}if("frameTarget"===q){p=r.z.mu(s)
break A}if("antialiasing"===q){p=r.z.dI(s)
break A}if("textureQuality"===q){p=r.z.mK(s)
break A}p=r.z
break A}r.fu(p)},
$S:1}
A.nH.prototype={
$1(a){return t.jI.a(a).b===this.a},
$S:36}
A.nO.prototype={
k8(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.B(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.B(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.B(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.B(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.nP(this)))
A.a(p.appendChild(r))}}
A.nP.prototype={
$1(a){A.a(a)
return this.a.a6()},
$S:2}
A.om.prototype={
bF(){var s,r=this
r.jT()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fe(r.CW,s)
r.lq()
r.fL()},
kt(){var s,r=this,q=r.a,p=A.B(q,"div","page-turn",null),o=A.B(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.on(r)))
s=A.B(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.oo(r)))
q=A.B(q,"span","right-day-label",null)
r.Q!==$&&A.J()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
h7(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fe(s.CW+a,r)
s.fL()},
fe(a,b){if(a<1)return 1
if(a>b)return b
return a},
lq(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.eP(),r=s.length,q=A.ds,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gU(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.op(j,n,l)
if(typeof m=="function")A.i(A.x("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.cg()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
fL(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.q(p).i("ag<2>"),n=new A.ag(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.S(r,new A.oq())
j.fK(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.ag(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.S(s,new A.or())
j.fK(i,s)
k=B.d.N(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.a(i.style).setProperty("width",B.d.cb(k*100,1)+"%")},
fK(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.a(a.appendChild(this.kU(b[r])))},
kU(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.B(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.d.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.l7(m,!1)
l.className=A.y(l.className)+" margin"
A.a(j.appendChild(l))}return j},
l7(a,b){var s=b?"hand-line struck":"hand-line",r=A.B(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.on.prototype={
$1(a){A.a(a)
return this.a.h7(-1)},
$S:2}
A.oo.prototype={
$1(a){A.a(a)
return this.a.h7(1)},
$S:2}
A.op.prototype={
$1(a){var s,r,q
A.a(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.oq.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.or.prototype={
$2(a,b){var s=t.g
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.hl.prototype={
aT(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.k(this.a.body).appendChild(s))},
bF(){var s,r,q,p,o=this,n=o.b
if(B.b.u(A.y(n.className),"open"))return
s=$.oZ
if(s!=null&&s!==o)s.a6()
$.oZ=o
r=o.a
o.d=A.k(r.activeElement)
A.wJ(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glj())
o.e=q
r.addEventListener("keydown",q)
p=A.y0(n)
if(p.length!==0)B.a.gR(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.u(A.y(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.oZ===q)$.oZ=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
iS(a){},
lk(a){A.a(a)
this.iS(a)
if(A.U(a.defaultPrevented))return
if(A.y(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.y(a.code)==="Tab")this.lG(a)},
lG(a){var s,r=A.y0(this.b)
if(r.length===0)return
s=A.k(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.gR(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gU(r).focus()}}else if(s===B.a.gU(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gR(r).focus()}},
sb0(a){this.c=t.Z.a(a)}}
A.b9.prototype={
A(){return"PauseReason."+this.b}}
A.cI.prototype={
A(){return"PausePage."+this.b}}
A.dK.prototype={
A(){return"PauseTransitionKind."+this.b}}
A.df.prototype={
B(){var s,r=A.o(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
Z(a,b){if(b==null)return!1
return b instanceof A.df&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gK(a){return A.cn(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dJ.prototype={
ghd(){var s=this.a
return s.length===1&&B.a.gR(s).a===B.b_},
B(){var s=A.o(t.N,t.X),r=this.a,q=A.I(r),p=q.i("S<1,Y<j,F?>>")
r=A.K(new A.S(r,q.i("Y<j,F?>(1)").a(new A.p3()),p),p.i("a3.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.I(r)
p=q.i("S<1,j>")
r=A.K(new A.S(r,q.i("j(1)").a(new A.p4()),p),p.i("a3.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.p3.prototype={
$1(a){return t.lf.a(a).B()},
$S:113}
A.p4.prototype={
$1(a){return t.e0.a(a).b},
$S:114}
A.bQ.prototype={}
A.p2.prototype={
iT(a){var s,r=this
if(r.a.ghd())return new A.bQ(B.U,r.a,null)
s=r.a
s=new A.dJ(B.hN,s.b,a)
r.a=s
return new A.bQ(B.cI,s,"pause.resume")},
m_(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gU(p)
q=r.a.a
q=B.a.aL(q,0,q.length-1)
p=r.a
p=new A.dJ(q,p.b,p.c)
r.a=p
return new A.bQ(B.cJ,p,s.c)}if(q.ghd()&&r.a.b.length===0)return r.ca()
return new A.bQ(B.U,r.a,null)},
ca(){var s=this.a
if(s.a.length===0)return new A.bQ(B.U,s,null)
if(s.b.length!==0)return new A.bQ(B.U,s,null)
this.a=B.aZ
return new A.bQ(B.cK,B.aZ,s.c)},
nW(a){var s,r,q=this
if(B.a.u(q.a.b,a))return new A.bQ(B.U,q.a,null)
s=q.a
r=A.K(s.b,t.e0)
r.push(a)
s=new A.dJ(s.a,r,q.a.c)
q.a=s
return new A.bQ(B.cI,s,null)},
mS(a){var s,r,q,p,o=this
if(!B.a.u(o.a.b,a))return new A.bQ(B.U,o.a,null)
s=o.a
r=s.b
q=A.I(r)
p=q.i("O<1>")
r=A.K(new A.O(r,q.i("n(1)").a(new A.p5(a)),p),p.i("p.E"))
q=o.a.c
r=new A.dJ(s.a,r,q)
o.a=r
return new A.bQ(B.iZ,r,q)},
kK(a){var s
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
A.p5.prototype={
$1(a){return t.e0.a(a)!==this.a},
$S:115}
A.cJ.prototype={
A(){return"PauseRootAction."+this.b}}
A.p6.prototype={
br(a,b,c,d){var s=B.ie.h(0,c)
s.toString
A.a(b.appendChild(A.zO(a,new A.mB(s,B.dB,d),new A.p7(this,c))))},
snR(a){this.f=t.Z.a(a)},
snT(a){this.r=t.Z.a(a)},
snF(a){this.w=t.Z.a(a)},
snS(a){this.x=t.Z.a(a)},
snI(a){this.y=t.Z.a(a)},
sb_(a){this.z=t.Z.a(a)}}
A.p7.prototype={
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
A.bF.prototype={
A(){return"PauseSettingsCategory."+this.b}}
A.ph.prototype={
jB(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.H.bC("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.pN.prototype={
kd(a){var s,r,q,p,o,n,m,l,k=this.b
k.setAttribute("aria-label","Settings categories")
A.a(k.appendChild(A.B(a,"h1","journal-title","Settings")))
A.a(k.appendChild(A.B(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.B(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=A.ds,q=0;q<6;++q){p=B.hr[q]
o=B.aX.h(0,p)
o.toString
n=A.a(a.createElement("button"))
n.className="door-continue"
n.textContent=o
n.setAttribute("type","button")
o=B.cw.h(0,p)
o.toString
n.id=o
n.setAttribute("aria-label",A.w(B.aX.h(0,p))+" settings")
o=new A.pO(this,p)
if(typeof o=="function")A.i(A.x("Attempting to rewrap a JS function.",null))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,o)
m[$.cg()]=o
n.addEventListener("click",m)
A.a(s.appendChild(n))}l=A.B(a,"button","door-continue","back")
l.setAttribute("type","button")
l.id="settings.back"
l.setAttribute("aria-label","back to pause menu")
l.addEventListener("click",A.Z(new A.pP(this)))
A.a(s.appendChild(l))
A.a(k.appendChild(s))},
snB(a){this.f=t.mP.a(a)},
sb_(a){this.r=t.Z.a(a)}}
A.pO.prototype={
$1(a){var s
A.a(a)
s=this.a.f
return s==null?null:s.$1(this.b)},
$S:2}
A.pP.prototype={
$1(a){var s
A.a(a)
s=this.a.r
return s==null?null:s.$0()},
$S:2}
A.hy.prototype={
ke(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="settings-grid",a="door-continue",a0=d.f,a1=a0==null?"House settings":A.w(B.aX.h(0,a0))+" settings",a2=d.b
a2.setAttribute("aria-label",a1)
A.a(a2.appendChild(A.B(a3,"h2","journal-title",a1)))
A.a(a2.appendChild(A.B(a3,"p","settings-copy","Change presentation without changing what happened in the house.")))
s=A.B(a3,"div",b,c)
for(r=t.if,q=r.a(new A.qb(d)),p=B.a.gq(B.C),o=t.pl,q=new A.R(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(s.appendChild(d.l6(a3,m,l,n==null?1:n,k)))}A.a(a2.appendChild(s))
j=A.B(a3,"div",b,c)
for(r=r.a(new A.qc(d)),q=B.a.gq(B.C),o=new A.R(q,r,o);o.m();)A.a(j.appendChild(d.lF(a3,q.gn())))
A.a(a2.appendChild(j))
if(a0===B.y)A.a(a2.appendChild(d.kr(a3)))
if(a0===B.z)A.a(a2.appendChild(d.kq(a3)))
if(a0===B.at)A.a(a2.appendChild(d.ks(a3)))
i=A.B(a3,"div",b,c)
for(a0=t.lt.a(d.gl_()),r=B.a.gq(B.hP),a0=new A.R(r,a0,t.nU),q=A.ds;a0.m();){p=r.gn()
o=p.b
h=A.a(a3.createElement("button"))
h.className="door-continue"
h.textContent="reset "+o
h.setAttribute("type","button")
p=new A.qd(d,p)
if(typeof p=="function")A.i(A.x("Attempting to rewrap a JS function.",c))
g=function(a5,a6){return function(a7){return a5(a6,a7,arguments.length)}}(q,p)
g[$.cg()]=p
h.addEventListener("click",g)
A.a(i.appendChild(h))}f=A.B(a3,"button",a,"reset all settings")
f.setAttribute("type","button")
f.addEventListener("click",A.Z(new A.qe(d)))
A.a(i.appendChild(f))
A.a(a2.appendChild(i))
e=A.B(a3,"button",a,"return")
e.setAttribute("type","button")
e.addEventListener("click",A.Z(new A.qf(d)))
A.a(a2.appendChild(e))},
kq(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.B(a,"div","settings-grid",j),f=k.d7(a,g,"reducedMotion","reduced motion (system default)"),e=k.d7(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d7(a,g,"captions","non-speech captions"),c=A.B(a,"label",h,j)
A.a(c.appendChild(A.B(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.q5(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.B(a,"label",h,j)
A.a(r.appendChild(A.B(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.aW[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.Z(new A.q6(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.B(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.q7(k)))
A.a(g.appendChild(l))
k.k3.J(0,A.P(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
d7(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.pR(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.B(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
eR(a){var s,r
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
s.value=(r==null?B.bp:r).b}},
ks(a){var s,r,q=this,p="confirmations",o=A.B(a,"div","settings-grid",null)
q.bd(a,o,"interactionMode","interaction mode",B.cn,t.hP)
q.bd(a,o,"promptDensity","prompt density",B.cr,t.mV)
q.bd(a,o,"textPacing","dialogue text pacing",B.co,t.ce)
q.bd(a,o,"journalLayout","journal layout",B.cf,t.jp)
q.bd(a,o,p,p,B.cc,t.iv)
q.bd(a,o,"saveFeedback","save feedback",B.ch,t.iZ)
q.bd(a,o,"focusLossBehavior","when the window loses focus",B.cd,t.bW)
s=A.B(a,"label","setting-toggle",null)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.Z(new A.q8(q,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.B(a,"span",null,"contextual reminders")))
A.a(o.appendChild(s))
return o},
bd(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Ej(f,t.aT,"T","_addGameplaySelect")
f.i("E<0>").a(e)
s=A.B(a,"label","setting-row",null)
A.a(s.appendChild(A.B(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.Z(new A.q3(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
kr(a){var s,r,q=this,p=A.B(a,"div","settings-grid",null),o=t.N,n=A.o(o,o)
for(s=0;s<4;++s){r=B.aV[s].b
n.k(0,r,r)}q.cg(a,p,"output","output",n)
n=A.o(o,o)
for(s=0;s<3;++s){r=B.aR[s].b
n.k(0,r,r)}q.cg(a,p,"dynamicRange","dynamic range",n)
n=A.o(o,o)
for(s=0;s<2;++s){r=B.aQ[s].b
n.k(0,r,r)}q.cg(a,p,"reverb","room effect",n)
o=A.o(o,o)
for(s=0;s<2;++s){n=B.aP[s].b
o.k(0,n,n)}q.cg(a,p,"ducking","voice intelligibility",o)
return p},
cg(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.a(s.appendChild(A.B(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.G(e,A.q(e).i("G<1,2>")).gq(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.Z(new A.pW(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p1.k(0,c,r)},
jm(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.G(s,A.q(s).i("G<1,2>")).gq(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fw(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.F===r){s=a.c===B.aw
break A}if(B.z===r){s=a.c===B.X
break A}if(B.y===r){s=a.c===B.E
break A}s=!1
break A}return s},
l0(a){var s,r
t.op.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.F===s){r=a===B.aw
break A}if(B.z===s){r=a===B.X
break A}if(B.y===s){r=a===B.E
break A}r=!1
break A}return r},
lF(a,b){var s=this,r=A.B(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.qa(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.B(a,"span",null,b.b)))
return r},
l6(a,b,c,d,e){var s,r,q=this,p=A.B(a,"label","setting-row",null),o=A.B(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.B(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.q9(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.az(e,d))
return p},
eT(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.j5
r=B.d.N(b,s.a,s.b)
q.value=B.d.p(r)
p.textContent=""+B.d.aJ(r*100)+"%"},
snK(a){this.r=t.hm.a(a)},
snM(a){this.w=t.cz.a(a)},
snL(a){this.x=t.cz.a(a)},
snH(a){this.y=t.hm.a(a)},
snJ(a){this.z=t.cz.a(a)},
snV(a){this.Q=t.cz.a(a)},
snQ(a){this.as=t.m5.a(a)},
snP(a){this.at=t.Z.a(a)},
sb_(a){this.ax=t.Z.a(a)},
snA(a){this.ay=t.kn.a(a)},
snz(a){this.CW=t.km.a(a)},
snO(a){this.cx=t.Z.a(a)}}
A.qb.prototype={
$1(a){t.b9.a(a)
return a.d===B.N&&this.a.fw(a)},
$S:24}
A.qc.prototype={
$1(a){t.b9.a(a)
return a.d===B.ab&&this.a.fw(a)},
$S:24}
A.qd.prototype={
$1(a){var s
A.a(a)
s=this.a.as
return s==null?null:s.$1(this.b)},
$S:2}
A.qe.prototype={
$1(a){var s
A.a(a)
s=this.a.at
return s==null?null:s.$0()},
$S:2}
A.qf.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.q5.prototype={
$1(a){var s,r,q
A.a(a)
s=this.a
r=s.k2
q=A.hp(A.y(this.b.value))
r=r.mL(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.q6.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.k2.mI(B.a.ah(B.aW,new A.q4(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.q4.prototype={
$1(a){return t.g8.a(a).b===A.y(this.a.value)},
$S:34}
A.q7.prototype={
$1(a){var s
A.a(a)
s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.pR.prototype={
$1(a){var s,r,q,p
A.a(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.k2.mE(s)
break A}if("photosensitivitySafe"===q){p=r.k2.mC(s)
break A}p=r.k2.mn(s)
break A}r.k2=p
r=r.CW
if(r!=null)r.$1(p)},
$S:1}
A.q8.prototype={
$1(a){var s
A.a(a)
s=this.a
s.k1=s.k1.mp(A.U(this.b.checked))},
$S:1}
A.q3.prototype={
$1(a){var s,r,q,p=this
A.a(a)
s=p.a
r=p.b
A:{if("interactionMode"===r){q=s.k1.mx(B.a.ah(B.cn,new A.pX(p.c)))
break A}if("promptDensity"===r){q=s.k1.mD(B.a.ah(B.cr,new A.pY(p.c)))
break A}if("textPacing"===r){q=s.k1.mJ(B.a.ah(B.co,new A.pZ(p.c)))
break A}if("journalLayout"===r){q=s.k1.mA(B.a.ah(B.cf,new A.q_(p.c)))
break A}if("confirmations"===r){q=s.k1.mo(B.a.ah(B.cc,new A.q0(p.c)))
break A}if("saveFeedback"===r){q=s.k1.mH(B.a.ah(B.ch,new A.q1(p.c)))
break A}q=s.k1.mt(B.a.ah(B.cd,new A.q2(p.c)))
break A}s.k1=q},
$S:1}
A.pX.prototype={
$1(a){return t.hP.a(a).b===A.y(this.a.value)},
$S:118}
A.pY.prototype={
$1(a){return t.mV.a(a).b===A.y(this.a.value)},
$S:119}
A.pZ.prototype={
$1(a){return t.ce.a(a).b===A.y(this.a.value)},
$S:120}
A.q_.prototype={
$1(a){return t.jp.a(a).b===A.y(this.a.value)},
$S:121}
A.q0.prototype={
$1(a){return t.iv.a(a).b===A.y(this.a.value)},
$S:122}
A.q1.prototype={
$1(a){return t.iZ.a(a).b===A.y(this.a.value)},
$S:123}
A.q2.prototype={
$1(a){return t.bW.a(a).b===A.y(this.a.value)},
$S:124}
A.pW.prototype={
$1(a){var s,r,q,p,o=this
A.a(a)
s=o.a
r=s.ok
q=o.b
A:{if("output"===q){p=r.mB(B.a.ah(B.aV,new A.pS(o.c)))
break A}if("dynamicRange"===q){p=r.ms(B.a.ah(B.aR,new A.pT(o.c)))
break A}if("reverb"===q){p=r.mG(B.a.ah(B.aQ,new A.pU(o.c)))
break A}p=r.mr(B.a.ah(B.aP,new A.pV(o.c)))
break A}s.ok=p
s=s.ay
if(s!=null)s.$1(p)},
$S:1}
A.pS.prototype={
$1(a){return t.cK.a(a).b===A.y(this.a.value)},
$S:125}
A.pT.prototype={
$1(a){return t.cS.a(a).b===A.y(this.a.value)},
$S:126}
A.pU.prototype={
$1(a){return t.f1.a(a).b===A.y(this.a.value)},
$S:127}
A.pV.prototype={
$1(a){return t.oA.a(a).b===A.y(this.a.value)},
$S:128}
A.qa.prototype={
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
$S:1}
A.q9.prototype={
$1(a){var s,r,q,p=this
A.a(a)
s=A.hp(A.y(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aJ(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:1}
A.bl.prototype={
A(){return"SettingCategory."+this.b}}
A.hx.prototype={
A(){return"SettingKind."+this.b}}
A.aV.prototype={
cU(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a8(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a8(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.c_(a))throw A.d(A.a8(r.a+" must be boolean",q,q))
break}}}
A.qi.prototype={
$1(a){return t.b9.a(a).a===this.a},
$S:24}
A.qj.prototype={
$0(){return A.i(A.m("unknown setting: "+this.a))},
$S:6}
A.qg.prototype={
kf(a,b){var s,r=this.a
if(r!==1)throw A.d(A.x("unsupported settings version "+r,null))
for(r=this.b.gH(),r=r.gq(r);r.m();){s=r.gn()
A.qh(s.a).cU(s.b)}},
cc(a){var s=this.b.h(0,a)
return s==null?A.i(A.m("setting missing from profile: "+a)):s},
B(){return A.P(["version",this.a,"values",this.b],t.N,t.K)}}
A.qk.prototype={
o7(a){var s,r,q=A.fa(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.di(q,1)
this.lt(a)},
B(){return A.P(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
lt(a){var s,r,q=A.fa(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.di(q,1)}}
A.qo.prototype={
kg(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.B(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.B(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.B(a,"div","entry-picker",null)
for(r=A.ds,q=0;q<2;++q){p=B.cg[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cm[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.qp(this,p,m)
if(typeof k=="function")A.i(A.x("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.cg()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
snU(a){this.f=t.as.a(a)}}
A.qp.prototype={
$1(a){var s,r
A.a(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:1}
A.ch.prototype={}
A.m_.prototype={
on(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.I(s)
q=new A.S(s,r.i("j(1)").a(new A.m1()),r.i("S<1,j>")).bo(0)
r=this.b
r.G(0)
s=J.zC(a,t.N)
p=s.$ti
r.J(0,new A.O(s,p.i("n(p.E)").a(q.gaw(q)),p.i("O<p.E>")))},
mV(a,b){var s,r,q,p,o,n=A.e([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.u(0,o.a))n.push(o)}return n}}
A.m1.prototype={
$1(a){return t.ot.a(a).a},
$S:129}
A.m0.prototype={
$2(a,b){var s,r=t.ot
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:130}
A.kA.prototype={
gcD(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
nm(a){return this.c.u(0,t.L.a(a))},
eE(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a2(0,g.gml())||!a.a.a2(0,new A.qV(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fA(r,s.b,p)
g=!0
if(o!=null)if(!h.u(0,r)){n=s.c
if(n!==B.az){m=s.d
if(m<o.length){n=n===B.Z
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.a4}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.f(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.qW(s))
else k=!1
if(k)return!1
j=new A.kz(r,g,A.al(o,t.kX),B.Z)
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
hb(a){var s=this.a,r=A.q(s).i("ac<1>"),q=r.i("O<p.E>")
s=A.K(new A.O(new A.ac(s,r),r.i("n(p.E)").a(new A.qQ(a)),q),q.i("p.E"))
B.a.S(s,new A.qR())
return s},
dE(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.l5
s=m.a.h(0,a)
if(s==null)return B.l6
r=B.c.T(a.b-1,7)
q=a.a
p=m.b.u(0,q)||r+1>=3||m.w?B.bm:B.ag
o=p===B.ag&&m.x.u(0,q)&&s.P(B.bn)?B.bn:p
if(s.P(o))n=o
else n=s.P(B.ag)?B.ag:B.bm
r=s.h(0,n)
r.toString
m.r=new A.kz(a,n,A.al(m.fA(a,n,r),t.kX),B.Z)
m.gcD()
r=m.r
r.toString
return new A.ky(r)},
me(a){var s,r,q,p,o,n=this.r
if(n==null)return B.db
if(n.d!==B.Z)return B.l3
n.e=a
s=a===B.a4
n.d=s?B.az:B.ae
r=this.f
q=s?B.d9:B.kM
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dm(q,o,p,a,null))
if(a===B.am)B.a.l(r,new A.dm(B.kP,o,p,a,null))
if(s)this.fM(n)
return new A.kw(n)},
lV(){var s,r=this.r
if(r==null)return B.db
s=r.d
if(s!==B.ae&&s!==B.af)return B.l4
if(this.gcD()!=null&&r.w==null)return new A.b3(new A.be(B.a_,"The visitor is waiting for an answer."))
r.d=B.af
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.az
this.fM(r)
return new A.hK(r,!0)}return new A.hK(r,!1)},
mf(a){var s,r,q=this.r,p=this.gcD(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.ae&&o!==B.af}if(o)return B.l2
o=p.f
s=A.I(o)
r=A.cF(new A.O(o,s.i("n(1)").a(new A.qT(a)),s.i("O<1>")),t.Y)
if(r==null)return B.l7
q.w=r.a
return new A.kx(q,p,r)},
mg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.ae&&s!==B.af}else s=!0
if(s)return i
r=h.gbA()
if(r==null)return i
s=t.N
q=A.o(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cl
p=J.T(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b_(q,s,s)
m=c.ln(!0,!0,o,new A.r2(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aA){B.a.l(this.f,new A.dm(B.kO,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fa(B.a.gU(j.c).a,s,s)
s.J(0,q)
p.lS(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dc)if(k===B.bo){s=n.b
s=s.gV(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dm(B.kN,o,p.b,i,l))}}return m},
fM(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fA(a,b,c){var s,r
t.j9.a(c)
s=A.e([],t.d7)
for(r=J.T(c);r.m();)s.push(this.l8(a,b,r.gn()))
return s},
l8(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.I(p)
s=A.cF(new A.O(p,r.i("n(1)").a(new A.qO(this)),r.i("O<1>")),t.iC)}return s==null?c:new A.bV(q,s.c,c.c)},
sjO(a){this.x=t.Q.a(a)}}
A.qV.prototype={
$1(a){var s=this.a.a
return new A.ac(s,A.q(s).i("ac<1>")).M(0,new A.qU(A.y(a)))},
$S:3}
A.qU.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:19}
A.qW.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.qQ.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:19}
A.qR.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:132}
A.qT.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.qS.prototype={
$0(){return A.e([],t.jk)},
$S:133}
A.qO.prototype={
$1(a){return t.iC.a(a).d.gH().a2(0,new A.qN(this.a))},
$S:134}
A.qN.prototype={
$1(a){var s,r
t.q.a(a)
s=a.a
r=this.a.y.b
if(r.P(s))s=r.h(0,s)===a.b
else s=!1
return s},
$S:135}
A.qP.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:136}
A.kB.prototype={}
A.l3.prototype={}
A.ub.prototype={
$1(a){return B.b.W(A.y(a),"off.")},
$S:3}
A.bC.prototype={
A(){return"DoorChoice."+this.b}}
A.bT.prototype={
A(){return"VisitPhase."+this.b}}
A.bU.prototype={
A(){return"VisitTier."+this.b}}
A.dR.prototype={
A(){return"VisitorFactKind."+this.b}}
A.dm.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.cS.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.be.prototype={
Z(a,b){if(b==null)return!1
return b instanceof A.be&&b.a===this.a&&b.b===this.b},
gK(a){return A.cn(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bV.prototype={
Z(a,b){if(b==null)return!1
return b instanceof A.bV&&b.a===this.a&&b.b===this.b},
gK(a){return A.cn(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bI.prototype={
Z(a,b){var s=this
if(b==null)return!1
return b instanceof A.bI&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gK(a){var s=this
return A.cn(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.P(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.kC.prototype={
B(){var s,r,q,p=this.a
p=A.K(p,A.q(p).c)
B.a.a0(p)
s=this.b
r=A.q(s)
q=r.i("d6<1,Y<j,@>>")
s=A.K(new A.d6(s,r.i("Y<j,@>(1)").a(new A.qM()),q),q.i("p.E"))
r=this.c
return A.P(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.qM.prototype={
$1(a){return t.L.a(a).B()},
$S:137}
A.iH.prototype={
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
A.lX.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:138}
A.lY.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:139}
A.lZ.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:140}
A.kz.prototype={
gbA(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.qX.prototype={}
A.b3.prototype={}
A.ky.prototype={}
A.kw.prototype={}
A.hK.prototype={}
A.kx.prototype={}
A.i5.prototype={
gbh(){var s,r=this.rx
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.pz("pixeldart",r?this.gm8():B.hZ,!1,null,s)},
gdH(){if(this.rx){var s=this.d
s===$&&A.h()
s=s.b===B.a5}else s=!1
return s},
gm8(){var s,r
if(!this.rx)return B.n
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.dM.m9(s,r)},
gnb(){var s="shadowCaster",r=this.ok
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.iU(s).a+";shadowTriangles="+r.iU(s).b+";frameMs="+B.d.cb(this.p1,3)},
gna(){var s=this.ok
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.p1<=100},
b9(){var s,r,q,p,o,n,m=this,l=A.Bv(m.a)
m.d=l
l=l.j_()
m.r=l
l=m.w=B.bB.jk(l)
q=m.b
p=m.c
s=new A.kk(q,p,q,p)
p=A.x3(m.d)
m.e=p
try{p.iJ(new A.k9(l,384,216,l.b.u(0,"shadows")?1:0),s)}catch(o){r=A.ae(o)
l=m.w
if(l===B.au)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.w(r)
m.w=B.au
l=A.x3(m.d)
l.iJ(B.jt,s)
m.e=l}l=m.e
l.co()
n=A.B7(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.rx=!0},
b1(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.x("Pixeldart surface size must be positive",null))
if(!r.rx){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.co()
new A.kk(a,b,a,b).D()
r.b=a
r.c=b},
lZ(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4="wall-plaster",b5="grime",b6="renderer is not initialized",b7="resource library is disposed"
if(!b2.rx||b2.Q.length!==0)return
b2.ry=b8
s=b2.fx
r=b2.e
r===$&&A.h()
s.k(0,b4,r.gaI().j3("texture:wall-plaster",256,256))
s.k(0,b5,b2.e.gaI().j3("texture:grime",512,512))
b2.dt()
b2.k1=b2.e.gaI().j2(A.jN(s.h(0,b4),!1,"quarantine-house-safe",!0,0.48,0.44,0.46,1,1))
r=b2.go
r.k(0,"cellar",b2.e.gaI().j2(A.jN(s.h(0,b5),!1,"quarantine-house-cellar",!0,0.3,0.28,0.29,1,1)))
for(q=b8.b,p=A.I(q),o=p.i("n(1)").a(new A.rz()),n=B.a.gq(q),p=new A.R(n,o,p.i("R<1>"));p.m();){o=n.gn().a
m=b2.lw(o)
l=b2.e.w
if(l==null)l=A.i(A.m(b6))
k=A.jN(s.h(0,b4),!1,"quarantine-house-"+o+"-gothic",!0,m.c,m.b,m.a,1,1)
if(l.w)A.i(A.m(b7))
k.D()
j=l.b.a.aE(k,b3)
l.f.l(0,j)
r.k(0,o,j)}for(p=b2.id,i=0;i<7;++i){h=B.hx[i]
o=b2.e.w
if(o==null)o=A.i(A.m(b6))
n=h==="service"?s.h(0,b5):s.h(0,b4)
l=b2.dn(h)
k=b2.dn(h)
l=A.jN(n,!1,"quarantine-inventory-"+h,!0,b2.dn(h).c,k.b,l.a,1,1)
if(o.w)A.i(A.m(b7))
l.D()
j=o.b.a.aE(l,b3)
o.f.l(0,j)
p.k(0,h,j)}for(p=q.length,o=b2.Q,n=b2.as,l=b2.at,k=b2.y,g=b2.z,i=0;f=q.length,i<f;q.length===p||(0,A.r)(q),++i){e=q[i]
d=b2.fP(b8,e)
f=b2.e.w
if(f==null)f=A.i(A.m(b6))
c=e.a
if(f.w)A.i(A.m(b7))
b=f.a
d.D()
j=b.b.aE(d,"room:"+c)
a=j.a
b.c.k(0,a,b.bx(d))
f.e.l(0,j)
B.a.l(k,j)
g.k(0,c,j)
f=r.h(0,c)
if(f==null){f=b2.k1
f.toString}a0=new A.bG(j,f,B.B,-1,B.P,B.a1,!0,!0,0,b3)
f=b2.f
f===$&&A.h()
B.B.D()
b=f.a
a1=b.$ti
b.a1(a1.c.a(j))
b=b.b
if(!(a>=0&&a<b.length))return A.f(b,a)
d=b[a].c
b=(d==null?a1.y[1].a(d):d).d
a=B.B.a7()
b=b.gaz()
a1=A.I(b)
A.bi(new A.S(b,a1.i("L(1)").a(a.gaC()),a1.i("S<1,L>")))
a2=f.b.bV(a0)
B.a.l(o,a2)
n.k(0,c,a2)
l.k(0,c,a0)}for(i=0;i<q.length;q.length===f||(0,A.r)(q),++i){e=q[i]
for(p=e.e,o=p.length,n=e.a,a3=0;a3<p.length;p.length===o||(0,A.r)(p),++a3){a4=p[a3]
l=a4.c
g=a4.d
b2.f3(n,b2.fF(e,a4.b,l,l+a4.e,g,g+a4.f,7902632),new A.rA(a4))}}for(q=b8.c,p=q.length,o=b2.dx,n=b8.e,i=0;l=q.length,i<l;q.length===p||(0,A.r)(q),++i){a5=q[i]
if(a5.at==null||a5.as)continue
e=n.h(0,a5.b)
if(e==null)continue
d=b2.fm(b8,e,a5)
l=b2.e.w
if(l==null)l=A.i(A.m(b6))
g=a5.a
if(l.w)A.i(A.m(b7))
f=l.a
d.D()
j=f.b.aE(d,"door-leaf:"+g)
c=j.a
f.c.k(0,c,f.bx(d))
l.e.l(0,j)
B.a.l(k,j)
l=e.a
f=r.h(0,l)
if(f==null){f=b2.k1
f.toString}a0=new A.bG(j,f,B.B,0,B.P,B.a1,!0,!0,0,b3)
f=b2.f
f===$&&A.h()
B.B.D()
b=f.a
a=b.$ti
b.a1(a.c.a(j))
b=b.b
if(!(c>=0&&c<b.length))return A.f(b,c)
d=b[c].c
c=(d==null?a.y[1].a(d):d).d
b=B.B.a7()
c=c.gaz()
a=A.I(c)
A.bi(new A.S(c,a.i("L(1)").a(b.gaC()),a.i("S<1,L>")))
o.k(0,g,new A.i4(g,l,f.b.bV(a0),j,a0))}for(i=0;i<q.length;q.length===l||(0,A.r)(q),++i){a5=q[i]
if(a5.as||a5.at!=null)continue
e=n.h(0,a5.b)
if(e==null)continue
r=e.a
b2.f3(r,b2.fF(e,a5.aG(r),a5.aj(r),a5.aj(r)+a5.w,0,a5.x,5915445),new A.rB(a5))}for(r=A.F1(A.Eh(b8)),q=r.length,p=b2.cy,o=b2.cx,n=b2.CW,l=b2.fy,g=b2.db,i=0;i<r.length;r.length===q||(0,A.r)(r),++i){a6=r[i]
f=a6.b
a7=f===4?b5:b4
a8=g.h(0,f)
if(a8==null){c=b2.e.w
if(c==null)c=A.i(A.m(b6))
b=s.h(0,a7)
a=b2.dl(f)
a1=b2.dl(f)
a=A.jN(b,!0,"quarantine-house-exterior-slot-"+f,!0,b2.dl(f).c,a1.b,a.a,1,1)
if(c.w)A.i(A.m(b7))
a.D()
j=c.b.a.aE(a,b3)
c.f.l(0,j)
g.k(0,f,j)
a8=j}c=b2.e.w
if(c==null)c=A.i(A.m(b6))
b=a6.c
a=a6.a
f=""+f
if(c.w)A.i(A.m(b7))
a1=c.a
b.D()
j=a1.b.aE(b,"exterior:"+a+":slot-"+f)
a9=j.a
a1.c.k(0,a9,a1.bx(b))
c.e.l(0,j)
B.a.l(k,j)
b0=a+":"+f
l.k(0,b0,a7)
if(!B.aa.u(0,a))A.i(A.x("unknown exterior cell: "+a,b3))
b1=new A.bG(j,a8,B.B,-1,B.P,B.a1,B.jR.u(0,a),!0,0,b3)
p.k(0,b0,a)
o.k(0,b0,b1)
f=b2.f
f===$&&A.h()
B.B.D()
c=f.a
b=c.$ti
c.a1(b.c.a(j))
c=c.b
if(!(a9>=0&&a9<c.length))return A.f(c,a9)
d=c[a9].c
c=(d==null?b.y[1].a(d):d).d
b=B.B.a7()
c=c.gaz()
a=A.I(c)
A.bi(new A.S(c,a.i("L(1)").a(b.gaC()),a.i("S<1,L>")))
n.k(0,b0,f.b.bV(b1))}},
jn(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.fr=A.al(a8.e,t.gB)
if(!a5.rx)return
for(s=a5.ax,r=new A.G(s,A.q(s).i("G<1,2>")).gq(0),q=a5.ay;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.ba(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.i(A.m(a6))
o=n.a
if(p.w)A.i(A.m(a7))
p.a.ba(o)
p.e.ak(0,o)}}s.G(0)
q.G(0)
r=a5.ch
B.a.G(r)
for(p=a5.fr,o=p.length,m=a8.c,l=a5.id,k=0;k<o;++k){j=p[k]
i=a5.ry
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cz(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.i(A.m(a6))
f=a5.l5(g,j,m)
e=j.a
if(i.w)A.i(A.m(a7))
d=i.a
f.D()
c=d.b.aE(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bx(f))
i.e.l(0,c)
i=j.f
f=i.a
a=B.Y.gac()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.ko(new A.L(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.k7(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bG(c,a2,i,-1,B.P,B.a1,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.D()
a2=d.a
f=a2.$ti
a2.a1(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.f(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.a7()
f=f.gaz()
b=A.I(f)
A.bi(new A.S(f,b.i("L(1)").a(i.gaC()),b.i("S<1,L>")))
s.k(0,e,d.b.bV(n))}$.C.j().setAttribute("data-renderer-inventory-items",""+s.a)},
jz(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b5.e,b4=b3.h(0,b6)
if(b4==null)return
s=b4.a
r=t.N
q=A.aE([s],r)
for(p=b5.aB(s),o=J.T(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>"));p.m();){n=o.gn()
m=n.bG(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b3.h(0,m)!=null)q.l(0,m)}for(b3=b2.as,b3=new A.G(b3,A.q(b3).i("G<1,2>")).gq(0),s=b2.at;b3.m();){l=b3.d
p=l.a
o=s.h(0,p)
o.toString
k=b2.bS(o,q.u(0,p)?-1:0)
o=b2.f
o===$&&A.h()
n=l.b
j=k.c
j.D()
i=o.a
h=i.$ti
g=h.c.a(k.a)
i.a1(g)
i=i.b
g=g.a
if(!(g>=0&&g<i.length))return A.f(i,g)
f=i[g].c
i=(f==null?h.y[1].a(f):f).d
j=j.a7()
i=i.gaz()
h=A.I(i)
A.bi(new A.S(i,h.i("L(1)").a(j.gaC()),h.i("S<1,L>")))
o=o.b
h=o.$ti
h.c.a(n)
h.y[1].a(k)
o.a1(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].sb8(k)
s.k(0,p,k)}for(b3=b2.dy,s=b3.length,e=0;e<b3.length;b3.length===s||(0,A.r)(b3),++e){d=b3[e]
c=q.u(0,d.a)&&d.d.$0()?-1:0
p=b2.f
p===$&&A.h()
o=b2.bS(d.c,c)
n=o.c
n.D()
j=p.a
i=j.$ti
h=i.c.a(o.a)
j.a1(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.f(j,h)
f=j[h].c
j=(f==null?i.y[1].a(f):f).d
n=n.a7()
j=j.gaz()
i=A.I(j)
A.bi(new A.S(j,i.i("L(1)").a(n.gaC()),i.i("S<1,L>")))
p=p.b
i=p.$ti
n=i.c.a(d.b)
i.y[1].a(o)
p.a1(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].sb8(o)}b3=b2.dx
s=A.q(b3).i("ac<1>")
s=A.K(new A.ac(b3,s),s.i("p.E"))
p=s.length
e=0
for(;e<s.length;s.length===p||(0,A.r)(s),++e){b=b3.h(0,s[e])
o=b.e
k=b2.bS(o,q.u(0,b.b)?-1:0)
o=b2.f
o===$&&A.h()
n=b.c
j=k.c
j.D()
i=o.a
h=i.$ti
g=h.c.a(k.a)
i.a1(g)
i=i.b
g=g.a
if(!(g>=0&&g<i.length))return A.f(i,g)
f=i[g].c
i=(f==null?h.y[1].a(f):f).d
j=j.a7()
i=i.gaz()
h=A.I(i)
A.bi(new A.S(i,h.i("L(1)").a(j.gaC()),h.i("S<1,L>")))
o=o.b
h=o.$ti
h.c.a(n)
h.y[1].a(k)
o.a1(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].sb8(k)
b3.k(0,b.a,b.mq(k))}for(b3=b2.fr,s=b3.length,p=b2.ax,o=b2.ay,e=0;e<s;++e){a=b3[e]
n=a.a
a0=p.h(0,n)
a1=o.h(0,n)
if(a0==null||a1==null)continue
n=b2.f
n===$&&A.h()
j=b2.bS(a1,q.u(0,a.b)?-1:0)
i=j.c
i.D()
h=n.a
g=h.$ti
a2=g.c.a(j.a)
h.a1(a2)
h=h.b
a2=a2.a
if(!(a2>=0&&a2<h.length))return A.f(h,a2)
f=h[a2].c
h=(f==null?g.y[1].a(f):f).d
i=i.a7()
h=h.gaz()
g=A.I(h)
A.bi(new A.S(h,g.i("L(1)").a(i.gaC()),g.i("S<1,L>")))
n=n.b
g=n.$ti
g.c.a(a0)
g.y[1].a(j)
n.a1(a0)
n=n.b
g=a0.a
if(!(g>=0&&g<n.length))return A.f(n,g)
n[g].sb8(j)}a3=new A.jf().md(b6)
b3=$.C.j()
s=A.K(a3,A.q(a3).c)
B.a.a0(s)
b3.setAttribute("data-renderer-exterior-cells",B.a.ab(s,","))
b3=b2.cy
r=new A.jf().iB(new A.rC(b2),new A.ac(b3,A.q(b3).i("ac<1>")),a3,r)
a4=A.oD(r,r.$ti.i("p.E"))
b3=b2.cx
s=A.q(b3).i("ac<1>")
s=A.K(new A.ac(b3,s),s.i("p.E"))
r=s.length
p=b2.CW
a5=0
a6=0
a7=0
e=0
for(;e<s.length;s.length===r||(0,A.r)(s),++e){a8=s[e]
a9=p.h(0,a8)
if(a9==null)continue
a1=b3.h(0,a8)
o=a1.r
if(o)++a7
b0=a4.u(0,a8)
if(b0)++a5
if(b0&&o)++a6
k=b2.bS(a1,b0?-1:0)
o=b2.f
o===$&&A.h()
n=k.c
n.D()
j=o.a
i=j.$ti
h=i.c.a(k.a)
j.a1(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.f(j,h)
f=j[h].c
j=(f==null?i.y[1].a(f):f).d
n=n.a7()
j=j.gaz()
i=A.I(j)
A.bi(new A.S(j,i.i("L(1)").a(n.gaC()),i.i("S<1,L>")))
o=o.b
i=o.$ti
i.c.a(a9)
i.y[1].a(k)
o.a1(a9)
o=o.b
i=a9.a
if(!(i>=0&&i<o.length))return A.f(o,i)
o[i].sb8(k)
b3.k(0,a8,k)}$.C.j().setAttribute("data-renderer-exterior-items",""+a5+"/"+b3.a)
$.C.j().setAttribute("data-renderer-shadow-casters",""+a6+"/"+a7)
b3=A.q(a4)
s=b3.i("d6<1,j>")
b1=A.K(new A.d6(a4,b3.i("j(1)").a(new A.rD(b2)),s),s.i("p.E"))
B.a.a0(b1)
$.C.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.ab(b1,","))},
o3(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(!j.rx)return
s=j.as.h(0,b)
r=j.at
q=r.h(0,b)
p=j.z
o=p.h(0,b)
n=a.e.h(0,b)
if(s==null||q==null||o==null||n==null)return
m=j.e
m===$&&A.h()
l=m.gaI().eA(j.fP(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.bG(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.h()
m.dC(k)
m.b.eJ(s,k)
r.k(0,b,k)
p.k(0,b,l)
p=j.y
B.a.ak(p,o)
B.a.l(p,l)
j.e.gaI().j4(o)
$.C.j().setAttribute("data-renderer-geometry-refreshes",""+(j.to+1));++j.to},
ez(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.rx)return
s=k.dx
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.h()
m=p.gaI().eA(k.fm(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bG(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.dC(l)
p.b.eJ(n,l)
s.k(0,b,r.hj(l,m))
s=k.y
n=r.d
B.a.ak(s,n)
B.a.l(s,m)
k.e.gaI().j4(n)},
jo(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aE([a1],t.N),b=a0.e,a=b.h(0,a1)
if(a!=null)for(s=a.a,r=a0.aB(s),q=J.T(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gn()
o=p.bG(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&b.h(0,o)!=null)c.l(0,o)}n=new A.jv(a0).ja(c,a2)
m=A.e([],t.dQ)
l=A.e([],t.bH)
for(k=0;k<n.length;++k){j=n[k]
i=this.fg(j.b)
b=j.a
h=new A.L(b.a,b.b,b.c)
b=j.d
s=j.c
if(k===0)B.a.l(l,new A.bn(k,h,B.ay,i,b,s,1.05,1.4))
else B.a.l(m,new A.k2(h,i,b,s))}g=A.z1(a3)
f=B.d.N(a5.c,0,1)
e=B.d.N(1-f*0.24,0.55,1)
d=a6?1:0.38
b=Math.max(0.045,0.52*a4*e*d)
s=a3===0?null:new A.mZ(new A.L(g.a,g.b,g.c),this.fg(A.z0(a3)),(0.72+a4*0.18)*(1-f*0.28)*d)
this.k3=new A.ji(B.h0,B.h_,1.5/(1+f*0.45),14/(1+f*0.16),B.fZ,b,s,m,l)},
b3(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.rx)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.k2
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.de(s)
q=A.v4(i.b/i.c,60,1.0471975511965976,0.1)
s=new A.eZ(r,q,q.a4(0,r),B.ad,B.kx,0.1,60,i.b/i.c)}p=i.k3
o=i.k4
n=i.R8++
m=i.p2
l=new A.qq()
$.wb()
k=$.pf.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.m1(j,new A.nj(s,p,o,n,m))
i.ok=i.e.mZ()
s=$.pf.$0()
l.b=s
i.p1=l.gmW()/1000},
bm(a){},
iN(){},
j0(){++this.p3},
fP(a,b){var s,r,q,p,o,n,m=A.yI(a,b),l=A.Eg(a,b),k=A.K(m.a,t.i)
B.a.J(k,m.b)
B.a.J(k,m.c)
B.a.J(k,l)
s=new Float32Array(A.a0(k))
r=A.e([],t.k)
for(k=s.length,q=0;q<k;q+=14){p=s[q]
o=q+1
if(!(o<k))return A.f(s,o)
o=s[o]
n=q+2
if(!(n<k))return A.f(s,n)
B.a.l(r,new A.L(p,o,s[n]))}return new A.c8(B.a2,s,null,A.bi(r))},
f3(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.h()
r=s.gaI().eA(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bG(r,p.la(a),B.B,0,B.P,B.a1,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.dC(q)
B.a.l(p.dy,new A.l6(a,s.b.bV(q),q,c))},
la(a){var s=this.go.h(0,a)
if(s==null){s=this.k1
s.toString}return s},
l5(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cO(new Float32Array(5376))
g=this.l4(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.au(q,r,o,p,g)
s.au(n,m,l,k,g)
s.au(r,n,k,o,g)
s.au(m,q,p,l,g)
s.au(r,q,m,n,g)
s.au(o,k,l,p,g)
j=B.p.aL(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.L(e,d,j[c]))}return new A.c8(B.a2,j,null,A.bi(g))},
l4(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dl(a){var s
A:{if(0===a){s=B.j7
break A}if(1===a){s=B.j9
break A}if(2===a){s=B.jf
break A}if(3===a){s=B.jp
break A}if(4===a){s=B.jr
break A}if(5===a){s=B.jd
break A}if(6===a){s=B.jo
break A}if(7===a){s=B.jj
break A}s=B.jn
break A}return s},
dn(a){var s
A:{if("architecture"===a){s=B.j8
break A}if("furniture"===a){s=B.cM
break A}if("fixture"===a){s=B.ji
break A}if("service"===a){s=B.jk
break A}if("story"===a){s=B.jh
break A}if("decor"===a){s=B.jc
break A}if("micro"===a){s=B.je
break A}s=B.cM
break A}return s},
lw(a){var s
A:{if("living-room"===a){s=B.jb
break A}if("hall"===a){s=B.jg
break A}if("kitchen"===a){s=B.jq
break A}if("bedroom"===a){s=B.js
break A}if("landing"===a){s=B.jl
break A}if("bathroom"===a){s=B.ja
break A}if("spare-room"===a){s=B.jm
break A}s=B.j6
break A}return s},
aP(a){return this.nu(t.G.a(a))},
nu(a){var s=0,r=A.bv(t.H),q,p=this,o,n,m,l
var $async$aP=A.by(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:if(!p.rx){s=1
break}o=A.e([],t.iw)
for(n=0;n<2;++n){m=B.hX[n]
l=a.h(0,m)
if(l!=null)o.push(p.cq(m,l))}s=3
return A.am(A.np(o,t.H),$async$aP)
case 3:case 1:return A.bs(q,r)}})
return A.bt($async$aP,r)},
cq(a,b){return this.l9(a,b)},
l9(a,b){var s=0,r=A.bv(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cq=A.by(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.fx.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.am(A.aX(A.a(m.decode()),t.X),$async$cq)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.c(m.naturalWidth)
g.height=A.c(m.naturalHeight)
l=g
k=A.k(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mR.a(A.a(k.getImageData(0,0,A.c(m.naturalWidth),A.c(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gaI()
f=new Uint8Array(A.a0(j))
if(h.w)A.i(A.m("resource library is disposed"))
h.c.ov(d,f)
$.C.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dt()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ae(c)
h=$.C.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dt()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$cq,r)},
dt(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.rx||h.fx.a===0)return
s=h.fx
r=A.q(s).i("G<1,2>")
r=A.jL(new A.G(s,r),r.i("ca(p.E)").a(new A.rv()),r.i("p.E"),t.oB)
q=A.K(r,A.q(r).i("p.E"))
s=h.e
s===$&&A.h()
s=s.gaI()
p=s.d
o=(p===$?s.d=new A.qx(s.c,A.o(t.lu,t.y)):p).o0(q)
s=o.a
n=A.e(s.slice(0),A.I(s))
B.a.S(n,new A.rw())
s=A.I(n)
r=s.i("j(1)")
s=s.i("S<1,j>")
m=new A.S(n,r.a(new A.rx()),s).ab(0,",")
l=new A.S(n,r.a(new A.ry()),s).ab(0,",")
s=o.cn(B.d0)
r=o.cn(B.d1)
k=o.cn(B.d2)
j=o.cn(B.d3);++h.RG
i=$.C.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.RG)
if(!A.U($.C.j().hasAttribute("data-renderer-texture-residency-initial")))$.C.j().setAttribute("data-renderer-texture-residency-initial",m)},
bS(a,b){return new A.bG(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
fm(a,b,c){var s,r,q,p,o,n=A.Ef(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.L(q,p,n[o]))}return new A.c8(B.a2,n,null,A.bi(s))},
fF(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aX(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cO(new Float32Array(5376))
o.au(k[0],k[1],k[2],k[3],g)
n=B.p.aL(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.L(r,q,n[p]))}return new A.c8(B.a2,n,null,A.bi(k))},
fg(a){return new A.dd((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$iva:1}
A.rz.prototype={
$1(a){return t.U.a(a).a!=="cellar"},
$S:30}
A.rA.prototype={
$0(){return!this.a.w},
$S:25}
A.rB.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:25}
A.rC.prototype={
$1(a){var s=this.a.cy.h(0,A.y(a))
s.toString
return s},
$S:38}
A.rD.prototype={
$1(a){var s,r,q,p
A.y(a)
s=this.a
r=s.fy.h(0,a)
q=r==null
p=q?null:s.fx.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:38}
A.rv.prototype={
$1(a){var s,r
t.ia.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.ca(s,a.b,r)},
$S:143}
A.rw.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:144}
A.rx.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:39}
A.ry.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:39}
A.fm.prototype={
gbh(){return A.pz("legacy",B.n,this.e,this.f,"legacy")},
gdH(){return this.x},
b9(){var s,r=this
if(r.w)return
s=A.B8(r.a,r.b,r.c)
r.r!==$&&A.J()
r.r=s
s.hQ=s.hP=s.hO=r.d
r.w=!0},
b1(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.x("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.b1(a,b)}},
b3(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.m("legacy runtime is not initialized"))
if(j.x||$.fC==null)return;++j.y
$.C.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.yc
q=$.bK.j()
s.hU=A.z1($.bg.j().gbq()).gac()
s.siM(A.z0($.bg.j().gbq()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.bg.j().gbq()))
s.hY=p<0?0:p
p=$.bJ.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.a5(0,p.d.a4(0,(A.uL(o*0.28,1309)*2-1)*n)).a5(0,p.c.a4(0,(A.uL(p.r*0.28,2839)*2-1)*n))
p=$.bJ.j()
s.hZ=p.a
s.e3=p.b
s.e4=p.c
s.e5=p.d
m=A.D5(0,0.25,0.11)
s.e6=m.a
s.e7=m.b
s.e8=m.c
p=s.cK
l=p==null?s.bY:p
if(l==null)l=s.bj
p=s.aY
p.b6(l)
s.aN.depthMask(!0)
p.mh(l,s.e6/255,s.e7/255,s.e8/255)
s.dZ=s.cL=0
s.e0=!1
s.c_=0
k=$.fC
if(k!=null)k.mT($.au,$.iF())
s.n9(r,q)
$.xJ.j().eI(B.dK,r)},
bm(a){},
iN(){this.x=!0},
j0(){this.x=!1},
$iva:1}
A.l6.prototype={}
A.i4.prototype={
hj(a,b){var s=this,r=b==null?s.d:b
return new A.i4(s.a,s.b,s.c,r,a)},
mq(a){return this.hj(a,null)}}
A.r8.prototype={}
A.t5.prototype={
$2(a,b){var s
A.vS(a,A.w(b))
switch(a){case"master":s=$.bu
if(s!=null)s.js(b)
break
case"voice":s=$.bu
if(s!=null)s.jv(b)
break
case"effects":s=$.bu
if(s!=null)s.jr(b)
break
case"ambience":s=$.bu
if(s!=null)s.jq(b)
break
case"music":s=$.bu
if(s!=null)s.jt(b)
break}},
$S:40}
A.t6.prototype={
$1(a){var s
A.vS("muted",""+a)
s=$.bu
if(s!=null)s.ju(a)},
$S:9}
A.t7.prototype={
$1(a){var s
A.vS("mono",""+a)
s=$.bu
if(s!=null)s.d0(a)},
$S:9}
A.tc.prototype={
$2(a,b){A.vT(a,A.w(b))
A.xO(a,b)},
$S:40}
A.td.prototype={
$1(a){var s="high-contrast"
A.vT(s,""+a)
A.rW(s,a)},
$S:9}
A.te.prototype={
$1(a){var s="strong-highlights"
A.vT(s,""+a)
A.rW(s,a)},
$S:9}
A.tf.prototype={
$1(a){$.d0().o7(a)
A.tQ()
A.xP()},
$S:148}
A.tg.prototype={
$0(){var s=$.d0()
s.a=A.di(null,1)
s.b=A.di(null,1)
A.tQ()
A.xP()},
$S:0}
A.th.prototype={
$0(){A.fH(this.a)},
$S:0}
A.ti.prototype={
$0(){this.a.a6()},
$S:0}
A.tj.prototype={
$0(){A.fH(this.a)},
$S:0}
A.t8.prototype={
$0(){A.eM(this.a)},
$S:0}
A.t9.prototype={
$1(a){$.iw=a
A.yj()
A.vt()},
$S:149}
A.ta.prototype={
$1(a){$.eL=a
A.vK()
A.rV()},
$S:150}
A.tb.prototype={
$0(){$.eL=B.ah
$.eK.j().eR($.eL)
A.vK()
A.rV()},
$S:0}
A.t1.prototype={
$1(a){var s,r=A.yT(a,A.y4()),q=r.a
$.tG=A.js(q,a)
A.yl()
s=r.b
$.fy.j().eU(a,q,s)
$.C.j().setAttribute("data-graphics-fallback",B.a.ab(s,"|"))},
$S:151}
A.t2.prototype={
$0(){A.fH($.fy.j())},
$S:0}
A.t3.prototype={
$0(){A.fH($.fy.j())},
$S:0}
A.rZ.prototype={
$1(a){var s,r
$.vB=a
$.aG.j().eS(a.gcA())
s=$.aG.j()
r=s.x
r.a=a.f
r.eC()
s.b4()
A.yk()},
$S:152}
A.t_.prototype={
$0(){A.fH($.io.j())},
$S:0}
A.t0.prototype={
$0(){A.fH($.io.j())},
$S:0}
A.tK.prototype={
$0(){$.tY=A.U(this.a.matches)
$.vW=A.U(this.b.matches)
A.rV()},
$S:0}
A.tI.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:2}
A.tJ.prototype={
$1(a){A.a(a)
return this.a.$0()},
$S:2}
A.uj.prototype={
$1(a){var s
try{A.wy(a,this.a)
return!0}catch(s){if(A.ae(s) instanceof A.H)return!1
else throw s}},
$S:153}
A.uk.prototype={
$1(a){var s,r,q,p,o=null,n=a
A:{if(B.F===n){o=$.iu.j()
break A}if(B.z===n){o=$.eK.j()
break A}if(B.a7===n){o=$.fy.j()
break A}if(B.y===n){o=$.fw.j()
break A}if(B.a8===n){o=$.io.j()
break A}o=$.fz.j()
break A}s=o
r=null
q=a
B:{if(B.F===q){r=B.iP
break B}if(B.z===q){r=B.iT
break B}if(B.a7===q){r=B.iQ
break B}if(B.y===q){r=B.iS
break B}if(B.a8===q){r=B.iR
break B}r=B.b0
break B}p=r
o=B.cw.h(0,a)
o.toString
A.yg(s,p,o)},
$S:154}
A.ul.prototype={
$0(){A.fH($.it.j())},
$S:0}
A.uw.prototype={
$0(){return A.eM($.it.j())},
$S:0}
A.uz.prototype={
$0(){$.cW.j().a6()},
$S:0}
A.uA.prototype={
$0(){$.cW.j().a6()},
$S:0}
A.uB.prototype={
$0(){A.yg($.it.j(),B.b0,"pause.settings")},
$S:0}
A.uC.prototype={
$0(){$.cW.j().a6()
A.lE($.iq.j())},
$S:0}
A.uD.prototype={
$0(){A.lI("saved")},
$S:0}
A.uE.prototype={
$0(){$.cW.j().a6()
A.lE($.iq.j())},
$S:0}
A.uF.prototype={
$0(){return A.eM($.cW.j())},
$S:0}
A.um.prototype={
$0(){return A.eM($.ir.j())},
$S:0}
A.un.prototype={
$2(a,b){var s,r,q,p,o,n
if($.W.j().ga8().a===21){A.yr(!1)
return}s=$.X.j().r.b
$.W.j().jK(a,b,$.au)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.d_()
if(typeof n!=="number")return A.lL(n)
if(!(o<n))break
if($.X.b===$.X)A.i(A.a4(""))
p=B.a.h(B.L,q).b
o=$.fC
if(o!=null)o.cT(p)
o=$.bw
if(o!=null){n=$.X.b
if(n===$.X)A.i(A.a4(""))
o.o3(n,p)}o=q
if(typeof o!=="number")return o.a5()
q=o+1}A.lI("saved after sleep")},
$S:155}
A.uo.prototype={
$0(){return A.eM($.rQ.j())},
$S:0}
A.up.prototype={
$0(){return A.eM($.iq.j())},
$S:0}
A.uq.prototype={
$0(){A.eM($.ip.j())},
$S:0}
A.ur.prototype={
$0(){A.eM($.ip.j())},
$S:0}
A.us.prototype={
$1(a){A.a(a)
return A.yq()},
$S:2}
A.ut.prototype={
$1(a){var s,r
A.a(a)
if(A.U(a.defaultPrevented))return
if(A.y(a.code)==="Escape"&&!A.U(a.repeat)){r=$.bh
if(r==null)A.lE($.cW.j())
else r.a6()
return}s=$.bh==null
if(!A.U(a.repeat)&&s)$.cX.j().bm(new A.ka(A.y(a.code),!0,1))
if(A.y(a.code)==="KeyP"&&!A.U(a.repeat)&&$.zm())$.vJ=!$.vJ
if(A.y(a.code)==="KeyR"&&!A.U(a.repeat)&&s&&$.yC){r=$.fG
if(r!=null)r.bI()}if(A.y(a.code)==="KeyJ"&&!A.U(a.repeat)&&!$.aF.j().ax)A.tZ($.ir.j())
if(A.y(a.code)==="KeyL"&&!A.U(a.repeat)&&!$.aF.j().ax)A.tZ($.rQ.j())
if(A.y(a.code)==="KeyH"&&!A.U(a.repeat)&&!$.aF.j().ax)A.tZ($.iq.j())
if(A.y(a.code)==="KeyO"&&!A.U(a.repeat)&&!$.aF.j().ax)A.tZ($.fz.j())
if(A.y(a.code)==="KeyK"&&!A.U(a.repeat)&&s)A.lI("saved")},
$S:1}
A.uu.prototype={
$1(a){A.a(a)
if($.bh==null)$.cX.j().bm(new A.ka(A.y(a.code),!1,0))},
$S:1}
A.uv.prototype={
$1(a){A.a(a)
return A.xR()},
$S:2}
A.ux.prototype={
$1(a){A.a(a)
return A.xR()},
$S:2}
A.uy.prototype={
$1(a){A.a(a)
return $.aG.j().c9($.C.j())},
$S:2}
A.tL.prototype={
$1(a){var s=A.y(A.a(a).message)
A.tT(s,null)},
$S:1}
A.tM.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.tT("unhandled rejection: "+A.w(s==null?A.y(a.type):s),null)},
$S:1}
A.tW.prototype={
$0(){this.a.className=""},
$S:11}
A.tP.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.tU.prototype={
$1(a){return t.g.a(a).e},
$S:20}
A.tR.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.tS.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.dH.prototype
s.jS=s.p
s=A.p.prototype
s.jR=s.cW
s=A.hl.prototype
s.jT=s.bF})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Dc","AC",42)
r(J.u.prototype,"gaw","u",12)
q(A,"Dp","AT",28)
r(A.aL.prototype,"gaw","u",12)
p(A.c6.prototype,"gml","P",12)
o(A,"Eb","BI",21)
o(A,"Ec","BJ",21)
o(A,"Ed","BK",21)
q(A,"yH","DT",0)
s(A,"Ek","AI",42)
r(A.cc.prototype,"gaw","u",12)
o(A,"En","CP",10)
p(A.jO.prototype,"god","oe",72)
var n
p(n=A.kn.prototype,"go9","oa",7)
p(n,"goh","oi",7)
p(n,"goj","ol",7)
p(n,"gob","oc",7)
p(n,"gof","og",7)
q(A,"yK","BN",158)
q(A,"FR","v6",25)
p(A.de.prototype,"gaC","j6",56)
p(n=A.jy.prototype,"glb","lc",2)
p(n,"gld","le",2)
p(n,"glh","li",2)
p(n,"glf","lg",2)
o(A,"EQ","xX",10)
o(A,"ET","xW",10)
o(A,"EF","Az",159)
o(A,"EG","AA",160)
o(A,"EX","At",161)
p(A.hl.prototype,"glj","lk",2)
p(A.hy.prototype,"gl_","l0",116)
p(A.kA.prototype,"gnl","nm",19)
o(A,"yS","DB",162)
o(A,"EJ","CH",31)
q(A,"EM","CN",0)
o(A,"EK","CI",31)
o(A,"EL","CJ",109)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.F,null)
q(A.F,[A.uZ,J.jA,A.hw,J.e3,A.p,A.fU,A.dy,A.ak,A.V,A.pM,A.aS,A.he,A.R,A.h2,A.h_,A.hM,A.ap,A.cQ,A.bX,A.fb,A.f0,A.eG,A.dh,A.qE,A.oV,A.h0,A.i9,A.a6,A.oB,A.c7,A.ag,A.ek,A.jF,A.ra,A.rK,A.co,A.kU,A.lm,A.rH,A.kI,A.cq,A.aY,A.kM,A.eC,A.at,A.kJ,A.lj,A.il,A.hW,A.l_,A.eH,A.hZ,A.ie,A.ln,A.e7,A.j1,A.rt,A.rL,A.e8,A.dA,A.kR,A.jZ,A.hB,A.rb,A.H,A.N,A.ax,A.lk,A.qq,A.bc,A.ih,A.qG,A.le,A.oU,A.kX,A.fo,A.pi,A.ep,A.mG,A.mH,A.k3,A.eZ,A.ji,A.nj,A.dg,A.jt,A.dd,A.mZ,A.k2,A.bn,A.em,A.bo,A.qK,A.c8,A.oW,A.pb,A.kb,A.bG,A.kk,A.k9,A.aD,A.nl,A.jO,A.kr,A.oM,A.ca,A.bS,A.qz,A.qx,A.dp,A.kn,A.eh,A.jg,A.jh,A.nk,A.ni,A.fn,A.ar,A.b7,A.aN,A.M,A.fV,A.pg,A.bb,A.pk,A.b1,A.pm,A.pl,A.kW,A.hr,A.pC,A.rc,A.ll,A.rG,A.l7,A.kT,A.lb,A.l5,A.ro,A.bE,A.bB,A.aO,A.mV,A.mU,A.iG,A.eo,A.nm,A.de,A.k7,A.ko,A.L,A.fT,A.kK,A.iQ,A.kL,A.j5,A.kO,A.fY,A.kP,A.j9,A.kQ,A.jq,A.kV,A.jQ,A.l1,A.eY,A.iR,A.v7,A.hn,A.l8,A.k6,A.l9,A.ew,A.ke,A.lc,A.kf,A.ld,A.ki,A.lh,A.kh,A.lg,A.kv,A.lo,A.ht,A.kG,A.lr,A.mE,A.jl,A.jn,A.h6,A.hz,A.z,A.j6,A.k4,A.nC,A.dV,A.cL,A.f4,A.r1,A.dq,A.ik,A.ij,A.lq,A.lp,A.rP,A.j8,A.iL,A.lf,A.ma,A.lU,A.fR,A.m6,A.uW,A.mi,A.mc,A.hN,A.mD,A.nh,A.kl,A.nA,A.jw,A.jy,A.od,A.og,A.jM,A.el,A.oI,A.cO,A.ps,A.pB,A.r3,A.hU,A.li,A.l4,A.l2,A.ql,A.b,A.mA,A.ja,A.n6,A.f5,A.k1,A.pc,A.fh,A.pH,A.eu,A.jj,A.nt,A.ns,A.mo,A.eT,A.eV,A.eS,A.eU,A.iU,A.jP,A.hP,A.kH,A.h7,A.nS,A.pD,A.a_,A.jd,A.ju,A.nT,A.je,A.cV,A.jf,A.dU,A.ea,A.pE,A.dT,A.fs,A.nQ,A.na,A.qm,A.nV,A.cD,A.cl,A.oj,A.oh,A.oi,A.cK,A.jv,A.b4,A.bk,A.b8,A.ba,A.d5,A.dj,A.aU,A.o0,A.cB,A.nR,A.eg,A.o_,A.cA,A.o4,A.hm,A.hd,A.qY,A.jJ,A.bN,A.ol,A.mv,A.mw,A.eW,A.mx,A.ox,A.ow,A.p9,A.p8,A.pa,A.pA,A.ka,A.py,A.fi,A.mW,A.r2,A.eA,A.iZ,A.ob,A.oe,A.pF,A.cM,A.pG,A.jk,A.ez,A.qZ,A.oP,A.cu,A.qr,A.ey,A.ex,A.hL,A.kD,A.er,A.cT,A.qu,A.lQ,A.dv,A.m2,A.dw,A.mz,A.mB,A.f1,A.d4,A.j_,A.hl,A.n_,A.nz,A.dD,A.nN,A.nF,A.nG,A.df,A.dJ,A.bQ,A.p2,A.ph,A.aV,A.qg,A.qk,A.ch,A.m_,A.kA,A.qX,A.dm,A.be,A.bV,A.bI,A.kC,A.iH,A.kz,A.i5,A.fm,A.l6,A.i4,A.r8])
q(J.jA,[J.jD,J.h9,J.ha,J.f8,J.f9,J.ei,J.dG])
q(J.ha,[J.dH,J.u,A.dI,A.hi])
q(J.dH,[J.k0,J.dO,J.dc])
r(J.jB,A.hw)
r(J.ok,J.u)
q(J.ei,[J.h8,J.jE])
q(A.p,[A.dS,A.Q,A.cm,A.O,A.h1,A.cp,A.eF,A.cd])
q(A.dS,[A.e6,A.im])
r(A.hT,A.e6)
r(A.hR,A.im)
q(A.dy,[A.iW,A.iV,A.km,A.ue,A.ug,A.r5,A.r4,A.rX,A.nq,A.rm,A.rp,A.oE,A.rr,A.uH,A.uI,A.u8,A.pj,A.qL,A.oJ,A.oK,A.oL,A.oY,A.oH,A.oN,A.qA,A.qB,A.qD,A.ne,A.nc,A.nd,A.p_,A.p0,A.pr,A.pq,A.pp,A.po,A.pn,A.pt,A.tA,A.tB,A.pJ,A.pK,A.uP,A.uN,A.nn,A.oG,A.u5,A.nD,A.nE,A.r_,A.r0,A.mk,A.mm,A.ml,A.mn,A.mb,A.lV,A.lW,A.m8,A.m9,A.m7,A.nB,A.px,A.n9,A.nu,A.nw,A.nx,A.ny,A.mp,A.mq,A.mr,A.ms,A.mt,A.mu,A.u3,A.mF,A.nb,A.nU,A.uQ,A.tE,A.tD,A.rU,A.rT,A.o6,A.o7,A.o9,A.qn,A.nY,A.nW,A.u2,A.o1,A.o3,A.u1,A.n5,A.oA,A.os,A.mX,A.mY,A.tN,A.qv,A.qw,A.lT,A.lR,A.mf,A.mg,A.mC,A.mQ,A.mP,A.mR,A.mS,A.mT,A.mO,A.mM,A.mN,A.mL,A.mJ,A.mK,A.n0,A.n1,A.n2,A.n4,A.n3,A.n8,A.nL,A.nJ,A.nK,A.nI,A.nH,A.nP,A.on,A.oo,A.op,A.p3,A.p4,A.p5,A.pO,A.pP,A.qb,A.qc,A.qd,A.qe,A.qf,A.q5,A.q6,A.q4,A.q7,A.pR,A.q8,A.q3,A.pX,A.pY,A.pZ,A.q_,A.q0,A.q1,A.q2,A.pW,A.pS,A.pT,A.pU,A.pV,A.qa,A.q9,A.qi,A.qp,A.m1,A.qV,A.qU,A.qW,A.qQ,A.qT,A.qO,A.qN,A.ub,A.qM,A.lX,A.lY,A.lZ,A.rz,A.rC,A.rD,A.rv,A.rx,A.ry,A.t6,A.t7,A.td,A.te,A.tf,A.t9,A.ta,A.t1,A.rZ,A.tI,A.tJ,A.uj,A.uk,A.us,A.ut,A.uu,A.uv,A.ux,A.uy,A.tL,A.tM,A.tU,A.tR,A.tS])
q(A.iW,[A.r9,A.mI,A.ot,A.uf,A.rY,A.u4,A.nr,A.rn,A.oC,A.oF,A.ru,A.qI,A.qH,A.uJ,A.oO,A.qy,A.qC,A.nf,A.pL,A.uO,A.uM,A.md,A.me,A.nv,A.tX,A.o8,A.oa,A.nZ,A.oz,A.of,A.oR,A.oS,A.oT,A.qs,A.qt,A.oq,A.or,A.m0,A.qR,A.qP,A.rw,A.t5,A.tc,A.un,A.tP])
r(A.bM,A.hR)
q(A.ak,[A.ej,A.dk,A.jG,A.kq,A.kc,A.kS,A.hc,A.iJ,A.ci,A.hI,A.kp,A.fj,A.iY])
r(A.fl,A.V)
r(A.dz,A.fl)
q(A.Q,[A.a3,A.ac,A.ay,A.G,A.eE,A.hY])
q(A.a3,[A.hD,A.S,A.hv,A.kZ])
r(A.d6,A.cm)
q(A.bX,[A.eJ,A.fp,A.fq])
q(A.eJ,[A.az,A.i6])
r(A.ah,A.fp)
r(A.i7,A.fq)
r(A.fu,A.fb)
r(A.dP,A.fu)
r(A.fW,A.dP)
q(A.f0,[A.a7,A.cy])
q(A.dh,[A.fX,A.i8,A.ig])
r(A.aL,A.fX)
q(A.iV,[A.pd,A.r6,A.r7,A.rI,A.no,A.rd,A.ri,A.rh,A.rf,A.re,A.rl,A.rk,A.rj,A.rF,A.tV,A.rN,A.rM,A.tz,A.ts,A.tt,A.ty,A.tn,A.tp,A.to,A.tx,A.tl,A.tm,A.tu,A.tv,A.tw,A.tr,A.tq,A.tC,A.u6,A.pw,A.o5,A.nX,A.o2,A.tF,A.lS,A.m4,A.m3,A.mh,A.nM,A.p7,A.qj,A.qS,A.rA,A.rB,A.tg,A.th,A.ti,A.tj,A.t8,A.tb,A.t2,A.t3,A.t_,A.t0,A.tK,A.ul,A.uw,A.uz,A.uA,A.uB,A.uC,A.uD,A.uE,A.uF,A.um,A.uo,A.up,A.uq,A.ur,A.tW])
r(A.hk,A.dk)
q(A.km,[A.kj,A.eX])
q(A.a6,[A.c6,A.hV,A.kY])
r(A.hb,A.c6)
r(A.fc,A.dI)
q(A.hi,[A.jR,A.b0])
q(A.b0,[A.i0,A.i2])
r(A.i1,A.i0)
r(A.hg,A.i1)
r(A.i3,A.i2)
r(A.hh,A.i3)
q(A.hg,[A.hf,A.jS])
q(A.hh,[A.jT,A.jU,A.jV,A.jW,A.jX,A.en,A.hj])
r(A.ft,A.kS)
r(A.hO,A.kM)
r(A.la,A.il)
r(A.hX,A.hV)
r(A.cc,A.i8)
r(A.hH,A.ig)
q(A.e7,[A.iN,A.jb,A.jH])
q(A.j1,[A.my,A.ov,A.ou,A.qJ])
r(A.jI,A.hc)
r(A.rs,A.rt)
r(A.ku,A.jb)
q(A.ci,[A.ff,A.jx])
r(A.kN,A.ih)
q(A.kR,[A.eq,A.ef,A.iI,A.cR,A.f3,A.iP,A.iX,A.j7,A.et,A.dN,A.eb,A.c5,A.hu,A.cz,A.fg,A.hA,A.f7,A.hQ,A.hS,A.jm,A.h4,A.jo,A.jp,A.ee,A.h5,A.ev,A.cP,A.f_,A.fr,A.iO,A.e5,A.j2,A.j4,A.b2,A.iM,A.c4,A.ed,A.e9,A.dC,A.h3,A.dB,A.dE,A.fS,A.hs,A.es,A.bH,A.bm,A.jz,A.eB,A.c9,A.cs,A.cj,A.ct,A.d3,A.d2,A.iS,A.iT,A.dx,A.e4,A.d8,A.cw,A.cx,A.d9,A.d7,A.da,A.cv,A.ck,A.b9,A.cI,A.dK,A.cJ,A.bF,A.bl,A.hx,A.bC,A.bT,A.bU,A.dR,A.cS])
q(A.dg,[A.bD,A.bd,A.cH,A.k_,A.cC])
r(A.pI,A.lb)
r(A.kE,A.lp)
r(A.pv,A.r3)
r(A.pu,A.pv)
r(A.i_,A.cV)
q(A.hl,[A.j0,A.n7,A.jr,A.nO,A.om,A.p6,A.pN,A.hy,A.qo])
q(A.qX,[A.kB,A.l3,A.b3,A.ky,A.kw,A.hK,A.kx])
s(A.fl,A.cQ)
s(A.im,A.V)
s(A.i0,A.V)
s(A.i1,A.ap)
s(A.i2,A.V)
s(A.i3,A.ap)
s(A.fu,A.ie)
s(A.ig,A.ln)
s(A.lb,A.ro)
s(A.lp,A.rP)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",A:"double",b6:"num",j:"String",n:"bool",ax:"Null",E:"List",F:"Object",Y:"Map",aa:"JSObject"},mangledNames:{},types:["~()","ax(aa)","~(aa)","n(j)","db()","n(A)","0&()","db(bd?)","n(ar)","~(n)","@(@)","ax()","n(F?)","n(er)","l(bN,bN)","n(b4)","n(@)","~(@)","n(bo)","n(bI)","n(bN)","~(~())","n(M)","l(N<j,j>,N<j,j>)","n(aV)","n()","@()","n(l)","l()","@(j)","n(aU)","~(j)","ax(@)","b(b)","n(cs)","n(N<j,E<j>>)","n(ck)","n(dU)","j(j)","j(bS)","~(j,A)","~(F?,F?)","l(@,@)","j?(j)","eo(A,A,A,A)","eZ()","A()","eY()","n(N<j,aD>)","aD(N<j,aD>)","aD(aD,aD)","l(aO<bE>,aO<bE>)","bR(aO<bE>)","l(aO<bB>,aO<bB>)","bR(aO<bB>)","0&(j,l?)","L(L)","~(ew)","ew()","F?(F?)","bO<ax>(N<j,j>)","ax(@,cN)","n(E<j>)","l(j,j)","l(bk,bk)","n(aa)","aa()","l(+influence,light(A,bn),+influence,light(A,bn))","n(c4)","~(l,@)","~(F,cN)","ax(F,cN)","em(cH)","eT(F?)","eS(F?)","eU(F?)","j(F?)","cH(l,l,j?)","eV(F?)","bD(l,l,j?)","n(dj)","j(l,a_,a_,a_)","l(cV,cV)","l(l,+(bD,c8))","n(dT)","n(bS)","l(+(A,A,A,A),+(A,A,A,A))","E<+(A,A,A,A)>()","n(bk)","l(l,aU)","n(cl)","n(cD)","l(ca,ca)","l(cK,cK)","n(cB)","N<j,j>(j,@)","n(bH)","n(bm)","ez()","l(l)","~(@,@)","l(N<j,cu>,N<j,cu>)","N<l,@>(l,ey)","N<l,@>(l,ex)","n(N<@,@>)","N<j,j>(N<@,@>)","n?(F?)","bd(l,l,j?)","j()","~(l)","n(hG?)","E<j>(E<j>)","l(l,+(bd,dp))","Y<j,F?>(df)","j(b9)","n(b9)","n(bl)","j(ar)","n(d8)","n(cw)","n(cx)","n(d9)","n(d7)","n(da)","n(cv)","n(cj)","n(ct)","n(d3)","n(d2)","j(ch)","l(ch,ch)","l(ab,ab)","l(bI,bI)","E<cT>()","n(cT)","n(N<j,j>)","l(bV,bV)","Y<j,@>(bI)","n(bU)","n(bT)","n(bC)","ax(~())","@(@,j)","ca(N<j,bd>)","l(bS,bS)","cC(l,l,j?)","ht(bD)","db(j{fallback:j?})","~(bl)","~(dw)","~(dv)","~(dD)","~(f1)","n(fh)","~(bF)","~(bH,bm)","Y<j,j>(Y<j,j>,j)","bn?()","fn()","cD(F?)","cl(F?)","cB(F?)","~(b6)","E<bn>()","0^(p<0^>,F?)<F?>"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.az&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.i6&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ah&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.i7&&A.EO(a,b.a)}}
A.C2(v.typeUniverse,JSON.parse('{"dc":"dH","k0":"dH","dO":"dH","Fg":"dI","u":{"E":["1"],"Q":["1"],"aa":[],"p":["1"]},"jD":{"n":[],"ad":[]},"h9":{"ax":[],"ad":[]},"ha":{"aa":[]},"dH":{"aa":[]},"jB":{"hw":[]},"ok":{"u":["1"],"E":["1"],"Q":["1"],"aa":[],"p":["1"]},"e3":{"af":["1"]},"ei":{"A":[],"b6":[],"aZ":["b6"]},"h8":{"A":[],"l":[],"b6":[],"aZ":["b6"],"ad":[]},"jE":{"A":[],"b6":[],"aZ":["b6"],"ad":[]},"dG":{"j":[],"aZ":["j"],"p1":[],"ad":[]},"dS":{"p":["2"]},"fU":{"af":["2"]},"e6":{"dS":["1","2"],"p":["2"],"p.E":"2"},"hT":{"e6":["1","2"],"dS":["1","2"],"Q":["2"],"p":["2"],"p.E":"2"},"hR":{"V":["2"],"E":["2"],"dS":["1","2"],"Q":["2"],"p":["2"]},"bM":{"hR":["1","2"],"V":["2"],"E":["2"],"dS":["1","2"],"Q":["2"],"p":["2"],"p.E":"2","V.E":"2"},"ej":{"ak":[]},"dz":{"V":["l"],"cQ":["l"],"E":["l"],"Q":["l"],"p":["l"],"V.E":"l","cQ.E":"l"},"Q":{"p":["1"]},"a3":{"Q":["1"],"p":["1"]},"hD":{"a3":["1"],"Q":["1"],"p":["1"],"p.E":"1","a3.E":"1"},"aS":{"af":["1"]},"cm":{"p":["2"],"p.E":"2"},"d6":{"cm":["1","2"],"Q":["2"],"p":["2"],"p.E":"2"},"he":{"af":["2"]},"S":{"a3":["2"],"Q":["2"],"p":["2"],"p.E":"2","a3.E":"2"},"O":{"p":["1"],"p.E":"1"},"R":{"af":["1"]},"h1":{"p":["2"],"p.E":"2"},"h2":{"af":["2"]},"h_":{"af":["1"]},"cp":{"p":["1"],"p.E":"1"},"hM":{"af":["1"]},"fl":{"V":["1"],"cQ":["1"],"E":["1"],"Q":["1"],"p":["1"]},"hv":{"a3":["1"],"Q":["1"],"p":["1"],"p.E":"1","a3.E":"1"},"az":{"eJ":[],"bX":[]},"i6":{"eJ":[],"bX":[]},"ah":{"fp":[],"bX":[]},"i7":{"fq":[],"bX":[]},"fW":{"dP":["1","2"],"fu":["1","2"],"fb":["1","2"],"ie":["1","2"],"Y":["1","2"]},"f0":{"Y":["1","2"]},"a7":{"f0":["1","2"],"Y":["1","2"]},"eF":{"p":["1"],"p.E":"1"},"eG":{"af":["1"]},"cy":{"f0":["1","2"],"Y":["1","2"]},"fX":{"dh":["1"],"dM":["1"],"Q":["1"],"p":["1"]},"aL":{"fX":["1"],"dh":["1"],"dM":["1"],"Q":["1"],"p":["1"]},"hk":{"dk":[],"ak":[]},"jG":{"ak":[]},"kq":{"ak":[]},"i9":{"cN":[]},"dy":{"ec":[]},"iV":{"ec":[]},"iW":{"ec":[]},"km":{"ec":[]},"kj":{"ec":[]},"eX":{"ec":[]},"kc":{"ak":[]},"c6":{"a6":["1","2"],"v0":["1","2"],"Y":["1","2"],"a6.K":"1","a6.V":"2"},"ac":{"Q":["1"],"p":["1"],"p.E":"1"},"c7":{"af":["1"]},"ay":{"Q":["1"],"p":["1"],"p.E":"1"},"ag":{"af":["1"]},"G":{"Q":["N<1,2>"],"p":["N<1,2>"],"p.E":"N<1,2>"},"ek":{"af":["N<1,2>"]},"hb":{"c6":["1","2"],"a6":["1","2"],"v0":["1","2"],"Y":["1","2"],"a6.K":"1","a6.V":"2"},"eJ":{"bX":[]},"fp":{"bX":[]},"fq":{"bX":[]},"jF":{"p1":[]},"fc":{"dI":[],"aa":[],"ad":[]},"en":{"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"dI":{"aa":[],"ad":[]},"hi":{"aa":[]},"jR":{"aa":[],"ad":[]},"b0":{"bP":["1"],"aa":[]},"hg":{"V":["A"],"b0":["A"],"E":["A"],"bP":["A"],"Q":["A"],"aa":[],"p":["A"],"ap":["A"]},"hh":{"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"]},"hf":{"ng":[],"V":["A"],"b0":["A"],"E":["A"],"bP":["A"],"Q":["A"],"aa":[],"p":["A"],"ap":["A"],"ad":[],"V.E":"A","ap.E":"A"},"jS":{"V":["A"],"b0":["A"],"E":["A"],"bP":["A"],"Q":["A"],"aa":[],"p":["A"],"ap":["A"],"ad":[],"V.E":"A","ap.E":"A"},"jT":{"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"jU":{"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"jV":{"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"jW":{"vg":[],"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"jX":{"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"hj":{"hG":[],"V":["l"],"b0":["l"],"E":["l"],"bP":["l"],"Q":["l"],"aa":[],"p":["l"],"ap":["l"],"ad":[],"V.E":"l","ap.E":"l"},"kS":{"ak":[]},"ft":{"dk":[],"ak":[]},"cq":{"af":["1"]},"cd":{"p":["1"],"p.E":"1"},"aY":{"ak":[]},"hO":{"kM":["1"]},"at":{"bO":["1"]},"il":{"xm":[]},"la":{"il":[],"xm":[]},"hV":{"a6":["1","2"],"Y":["1","2"]},"hX":{"hV":["1","2"],"a6":["1","2"],"Y":["1","2"],"a6.K":"1","a6.V":"2"},"eE":{"Q":["1"],"p":["1"],"p.E":"1"},"hW":{"af":["1"]},"cc":{"dh":["1"],"wQ":["1"],"dM":["1"],"Q":["1"],"p":["1"]},"eH":{"af":["1"]},"V":{"E":["1"],"Q":["1"],"p":["1"]},"a6":{"Y":["1","2"]},"hY":{"Q":["2"],"p":["2"],"p.E":"2"},"hZ":{"af":["2"]},"fb":{"Y":["1","2"]},"dP":{"fu":["1","2"],"fb":["1","2"],"ie":["1","2"],"Y":["1","2"]},"dh":{"dM":["1"],"Q":["1"],"p":["1"]},"i8":{"dh":["1"],"dM":["1"],"Q":["1"],"p":["1"]},"hH":{"dh":["1"],"ln":["1"],"dM":["1"],"Q":["1"],"p":["1"]},"kY":{"a6":["j","@"],"Y":["j","@"],"a6.K":"j","a6.V":"@"},"kZ":{"a3":["j"],"Q":["j"],"p":["j"],"p.E":"j","a3.E":"j"},"iN":{"e7":["E<l>","j"]},"jb":{"e7":["j","E<l>"]},"hc":{"ak":[]},"jI":{"ak":[]},"jH":{"e7":["F?","j"]},"ku":{"e7":["j","E<l>"]},"e8":{"aZ":["e8"]},"A":{"b6":[],"aZ":["b6"]},"dA":{"aZ":["dA"]},"l":{"b6":[],"aZ":["b6"]},"E":{"Q":["1"],"p":["1"]},"b6":{"aZ":["b6"]},"dM":{"Q":["1"],"p":["1"]},"j":{"aZ":["j"],"p1":[]},"kR":{"D":[]},"iJ":{"ak":[]},"dk":{"ak":[]},"ci":{"ak":[]},"ff":{"ak":[]},"jx":{"ak":[]},"hI":{"ak":[]},"kp":{"ak":[]},"fj":{"ak":[]},"iY":{"ak":[]},"jZ":{"ak":[]},"hB":{"ak":[]},"lk":{"cN":[]},"bc":{"Bh":[]},"ih":{"ks":[]},"le":{"ks":[]},"kN":{"ks":[]},"kX":{"v8":[]},"fo":{"v8":[]},"eq":{"D":[]},"bD":{"dg":[]},"bd":{"dg":[]},"cH":{"dg":[]},"cC":{"dg":[]},"k_":{"dg":[]},"ef":{"D":[]},"iI":{"D":[]},"cR":{"D":[]},"f3":{"D":[]},"iP":{"D":[]},"iX":{"D":[]},"j7":{"D":[]},"et":{"D":[]},"dN":{"D":[]},"eb":{"D":[]},"c5":{"D":[]},"hu":{"D":[]},"cz":{"D":[]},"fg":{"D":[]},"hr":{"B6":[]},"kW":{"bR":[]},"ll":{"bR":[]},"l7":{"B5":[]},"kT":{"Al":[]},"hA":{"D":[]},"bE":{"aZ":["bE"]},"bB":{"aZ":["bB"]},"f7":{"D":[]},"hQ":{"D":[]},"fT":{"aj":[]},"kK":{"ab":[]},"iQ":{"aj":[]},"kL":{"ab":[]},"j5":{"aj":[]},"kO":{"ab":[]},"hS":{"D":[]},"fY":{"aj":[]},"kP":{"ab":[]},"j9":{"aj":[]},"kQ":{"ab":[]},"jq":{"aj":[]},"kV":{"ab":[]},"jQ":{"aj":[]},"l1":{"ab":[]},"iR":{"B4":[]},"hn":{"aj":[]},"l8":{"ab":[]},"k6":{"aj":[]},"l9":{"ab":[]},"ke":{"aj":[]},"lc":{"ab":[]},"kf":{"aj":[]},"ld":{"ab":[]},"ki":{"aj":[]},"lh":{"ab":[]},"kh":{"aj":[]},"lg":{"ab":[]},"kv":{"aj":[]},"lo":{"ab":[]},"kG":{"aj":[]},"lr":{"ab":[]},"jm":{"D":[]},"h4":{"D":[]},"jo":{"D":[]},"jp":{"D":[]},"ee":{"D":[]},"h5":{"D":[]},"ev":{"D":[]},"cP":{"D":[]},"f_":{"D":[]},"j6":{"A4":[]},"fr":{"D":[]},"b2":{"D":[]},"iO":{"D":[]},"e5":{"D":[]},"j2":{"D":[]},"j4":{"D":[]},"dq":{"db":[]},"kE":{"Ap":[]},"iM":{"D":[]},"c4":{"D":[]},"ed":{"D":[]},"i_":{"cV":[]},"e9":{"D":[]},"dC":{"D":[]},"dB":{"D":[]},"h3":{"D":[]},"dE":{"D":[]},"fS":{"D":[]},"hs":{"D":[]},"es":{"D":[]},"bH":{"D":[]},"bm":{"D":[]},"jz":{"D":[]},"eB":{"D":[]},"c9":{"D":[]},"cs":{"D":[]},"cj":{"D":[]},"ct":{"D":[]},"d3":{"D":[]},"d2":{"D":[]},"iS":{"D":[]},"iT":{"D":[]},"e4":{"D":[]},"dx":{"D":[]},"d8":{"D":[]},"cw":{"D":[]},"cx":{"D":[]},"d9":{"D":[]},"d7":{"D":[]},"da":{"D":[]},"cv":{"D":[]},"ck":{"D":[]},"b9":{"D":[]},"cI":{"D":[]},"dK":{"D":[]},"cJ":{"D":[]},"bF":{"D":[]},"bl":{"D":[]},"hx":{"D":[]},"bC":{"D":[]},"bT":{"D":[]},"bU":{"D":[]},"dR":{"D":[]},"cS":{"D":[]},"i5":{"va":[]},"fm":{"va":[]},"Ay":{"E":["l"],"Q":["l"],"p":["l"]},"hG":{"E":["l"],"Q":["l"],"p":["l"]},"Bm":{"E":["l"],"Q":["l"],"p":["l"]},"Aw":{"E":["l"],"Q":["l"],"p":["l"]},"vg":{"E":["l"],"Q":["l"],"p":["l"]},"Ax":{"E":["l"],"Q":["l"],"p":["l"]},"Bl":{"E":["l"],"Q":["l"],"p":["l"]},"ng":{"E":["A"],"Q":["A"],"p":["A"]},"Ak":{"E":["A"],"Q":["A"],"p":["A"]}}'))
A.C1(v.typeUniverse,JSON.parse('{"fl":1,"im":2,"b0":1,"i8":1,"ig":1,"j1":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a1
return{g8:s("cs"),lC:s("fR"),ot:s("ch"),v:s("aY"),f5:s("iL"),oA:s("d2"),cS:s("ct"),cK:s("cj"),f1:s("d3"),gE:s("eS"),fS:s("eT"),d2:s("eU"),lJ:s("eV"),dP:s("bB"),kp:s("eY"),gS:s("dz"),bP:s("aZ<@>"),gY:s("fV"),p:s("a7<j,j>"),I:s("a7<j,l>"),M:s("aL<j>"),ml:s("e8"),lD:s("bC"),jS:s("dA"),gt:s("Q<@>"),no:s("c4"),g:s("bN"),aT:s("D"),W:s("ak"),hZ:s("a_"),B:s("ng"),m9:s("aD"),ie:s("cu"),D:s("ec"),mj:s("bO<ax>"),iv:s("d7"),bW:s("cv"),hP:s("d8"),jp:s("d9"),mV:s("cw"),iZ:s("da"),ce:s("cx"),iP:s("cy<bF,j>"),_:s("db"),jI:s("ck"),bU:s("dE"),mm:s("cB"),lv:s("jw<F>"),hL:s("cC"),p9:s("cD"),gB:s("cl"),dp:s("p<fV>"),bq:s("p<j>"),cZ:s("p<ca>"),id:s("p<A>"),fg:s("p<@>"),fm:s("p<l>"),od:s("u<ch>"),ah:s("u<ja>"),hS:s("u<d5>"),r:s("u<bN>"),ft:s("u<je>"),ph:s("u<a_>"),iw:s("u<bO<~>>"),mc:s("u<jj>"),l2:s("u<db>"),aW:s("u<b7>"),iG:s("u<eg>"),dL:s("u<cA>"),oX:s("u<Ff<F>>"),og:s("u<eh>"),jj:s("u<cC>"),kG:s("u<aa>"),b1:s("u<jJ>"),cs:s("u<b8>"),cj:s("u<N<j,j>>"),ic:s("u<Y<j,F>>"),hq:s("u<Y<j,j>>"),bV:s("u<Y<j,@>>"),kS:s("u<jM>"),mn:s("u<el>"),dg:s("u<bD>"),hJ:s("u<ar>"),eY:s("u<df>"),jc:s("u<ba>"),de:s("u<eo>"),hU:s("u<cK>"),dQ:s("u<k2>"),aN:s("u<bk>"),hb:s("u<er>"),bM:s("u<+(j,E<bk>)>"),m_:s("u<+(j,j)>"),gf:s("u<+influence,light(A,bn)>"),fR:s("u<+(l,j)>"),a3:s("u<+(A,A,A,A)>"),o5:s("u<aj>"),u:s("u<ab>"),oZ:s("u<hr>"),C:s("u<M>"),c8:s("u<bG>"),ix:s("u<bR>"),kl:s("u<aU>"),e_:s("u<cM>"),b2:s("u<fi>"),ao:s("u<aO<bB>>"),mX:s("u<aO<bE>>"),bH:s("u<bn>"),jn:s("u<dj>"),s:s("u<j>"),aA:s("u<kl>"),ji:s("u<bS>"),k:s("u<L>"),h:s("u<b>"),cF:s("u<hL>"),bl:s("u<dm>"),d7:s("u<bV>"),jk:s("u<cT>"),hc:s("u<ez>"),E:s("u<b4>"),nP:s("u<i_>"),dA:s("u<dU>"),a9:s("u<dT>"),is:s("u<l5>"),jU:s("u<l6>"),dz:s("u<dV<em>>"),jl:s("u<dV<c8>>"),n_:s("u<dV<bG>>"),mQ:s("u<dV<dp>>"),eP:s("u<fs>"),df:s("u<n>"),n:s("u<A>"),dG:s("u<@>"),t:s("u<l>"),kC:s("u<aa?>"),dM:s("u<F?>"),g2:s("u<b6>"),w:s("h9"),m:s("aa"),d4:s("aa()"),dY:s("dc"),dX:s("bP<@>"),bY:s("E<bN>"),b:s("E<b7>"),l_:s("E<Y<j,j>>"),R:s("E<ar>"),b3:s("E<cK>"),fB:s("E<bk>"),lX:s("E<+(j,j)>"),jz:s("E<+(l,j)>"),ge:s("E<+(A,A,A,A)>"),io:s("E<cM>"),a:s("E<j>"),iD:s("E<hL>"),ee:s("E<dm>"),j9:s("E<bV>"),lH:s("E<cT>"),cu:s("E<hU>"),j:s("E<@>"),J:s("E<l>"),ib:s("E<F?>"),mK:s("hd"),iO:s("N<j,aD>"),lY:s("N<j,cu>"),q:s("N<j,j>"),ia:s("N<j,bd>"),ag:s("N<@,@>"),iI:s("N<l,@>"),cW:s("N<j,E<j>>"),f7:s("Y<j,db>"),iE:s("Y<j,ar>"),G:s("Y<j,j>"),oQ:s("Y<j,n>"),P:s("Y<j,@>"),f:s("Y<@,@>"),d8:s("Y<l,ex>"),c_:s("Y<l,ey>"),gz:s("Y<j,E<+(A,A,A,A)>>"),i3:s("Y<j,E<j>>"),lb:s("Y<j,F?>"),kz:s("Y<bU,E<bV>>"),iu:s("Y<l,Y<j,j>>"),dD:s("S<j,j?>"),fP:s("cH"),l0:s("bD"),eb:s("fc"),mR:s("en"),c:s("ax"),K:s("F"),nL:s("bE"),A:s("ar"),lf:s("df"),e0:s("b9"),f0:s("cK"),T:s("bk"),ku:s("hm"),Y:s("er"),lZ:s("Fh"),aK:s("+()"),o7:s("+(bD,c8)"),p3:s("+(bd,dp)"),aL:s("+(A,A)"),jX:s("+influence,light(A,bn)"),oJ:s("+(A,A,A,A)"),ks:s("ab"),mo:s("cL<cC,bG>"),kk:s("cL<cH,em>"),ll:s("cL<bD,c8>"),ox:s("cL<bd,dp>"),n4:s("M"),ob:s("bG"),os:s("bR"),U:s("aU"),k8:s("cM"),Q:s("dM<j>"),nO:s("dM<l>"),op:s("bl"),b9:s("aV"),oC:s("bm"),gC:s("bH"),ad:s("fi"),eU:s("aO<bB>"),bz:s("aO<bE>"),l:s("cN"),fO:s("dj"),dB:s("b2"),N:s("j"),lu:s("bd"),oB:s("ca"),d:s("bS"),nM:s("dN"),aJ:s("ad"),do:s("dk"),cx:s("dO"),oP:s("dP<j,j>"),mL:s("kr"),jJ:s("ks"),fQ:s("L"),mz:s("b"),gm:s("bo"),L:s("bI"),nq:s("bT"),kM:s("bU"),bR:s("ex"),ey:s("ey"),mv:s("dm"),kX:s("bV"),fx:s("kD"),cq:s("b3"),iC:s("cT"),av:s("ez"),bn:s("O<bC>"),ns:s("O<c4>"),hr:s("O<bm>"),am:s("O<bH>"),nn:s("O<j>"),kh:s("O<bo>"),cB:s("O<bT>"),na:s("O<bU>"),nU:s("R<bl>"),pl:s("R<aV>"),mW:s("R<bo>"),lS:s("cp<j>"),e:s("b4"),fH:s("hU"),j_:s("at<@>"),mp:s("hX<F?,F?>"),m7:s("cV"),a1:s("fn"),j8:s("l2"),e7:s("dU"),at:s("dT"),ln:s("l3"),fw:s("l4"),bS:s("i4"),bp:s("lf"),hX:s("li"),fJ:s("cd<bR>"),V:s("ij"),fL:s("ik"),y:s("n"),al:s("n()"),hg:s("n(bC)"),gl:s("n(c4)"),iW:s("n(F)"),lt:s("n(bl)"),if:s("n(aV)"),aZ:s("n(bm)"),gw:s("n(bH)"),dC:s("n(j)"),iV:s("n(bo)"),bQ:s("n(bT)"),nw:s("n(bU)"),i:s("A"),z:s("@"),mY:s("@()"),mq:s("@(F)"),ng:s("@(F,cN)"),S:s("l"),gK:s("bO<ax>?"),hH:s("u<F?>?"),mU:s("aa?"),mi:s("E<@>?"),kN:s("Y<j,E<j>>?"),X:s("F?"),x:s("j?"),ej:s("j?(j)"),nh:s("hG?"),F:s("eC<@,@>?"),nF:s("l_?"),fU:s("n?"),hK:s("n(fh)?"),dE:s("A?"),aV:s("l?"),jh:s("b6?"),Z:s("~()?"),km:s("~(dv)?"),kn:s("~(dw)?"),dO:s("~(f1)?"),fu:s("~(dD)?"),mP:s("~(bF)?"),m5:s("~(bl)?"),as:s("~(bH,bm)?"),ov:s("~(j)?"),hm:s("~(j,A)?"),cz:s("~(n)?"),bZ:s("~(l)?"),o:s("b6"),H:s("~"),O:s("~()"),lc:s("~(j,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.fU=J.jA.prototype
B.a=J.u.prototype
B.c=J.h8.prototype
B.d=J.ei.prototype
B.b=J.dG.prototype
B.fV=J.dc.prototype
B.fW=J.ha.prototype
B.p=A.hf.prototype
B.cz=A.hj.prototype
B.cL=J.k0.prototype
B.bl=J.dO.prototype
B.bp=new A.cs(1,"standard")
B.ah=new A.dv(null,null,null,null,null)
B.lh=new A.iI(0,"opaque")
B.dh=new A.iM(4,"ambience")
B.bt=new A.cj(3,"mono")
B.aD=new A.d3(0,"full")
B.bs=new A.cj(0,"auto")
B.br=new A.ct(1,"standard")
B.bq=new A.d2(0,"defaultMix")
B.aE=new A.dw(B.bs,B.br,B.aD,B.bq)
B.dp=new A.fS("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.dq=new A.fS("webgl2 unavailable",0,"webglUnavailable")
B.V=new A.hs(1,"pixeldart")
B.dr=new A.eW(B.V,!1,!0,!1,null,!1,null,!1,null)
B.du=new A.dx(1,"capturing")
B.ds=new A.d4(B.du,null)
B.bw=new A.dx(3,"rejected")
B.aF=new A.d4(B.bw,null)
B.bx=new A.dx(4,"applied")
B.bu=new A.d4(B.bx,null)
B.by=new A.dx(5,"cancelled")
B.dt=new A.d4(B.by,null)
B.bv=new A.dx(2,"conflict")
B.ai=new A.iO(0,"add")
B.dy=new A.e5(0,"zero")
B.a0=new A.e5(1,"one")
B.a1=new A.iP(0,"alpha")
B.dB=new A.iS(0,"button")
B.li=new A.iT(0,"normal")
B.H=new A.lQ()
B.bz=new A.fR()
B.bA=new A.mv()
B.aG=new A.mw()
B.lj=new A.my()
B.dC=new A.iN()
B.bB=new A.mE()
B.dD=new A.h_(A.a1("h_<0&>"))
B.bC=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.dE=function() {
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
B.dJ=function(getTagFallback) {
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
B.dF=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dI=function(hooks) {
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
B.dH=function(hooks) {
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
B.dG=function(hooks) {
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
B.bD=function(hooks) { return hooks; }

B.k=new A.jH()
B.lk=new A.ox()
B.dK=new A.F()
B.dL=new A.jZ()
B.ll=new A.p9()
B.dM=new A.pa()
B.dN=new A.cM()
B.a9=new A.c9(1,"gradeLUT")
B.dO=new A.cM()
B.dP=new A.pF()
B.dQ=new A.pH()
B.f=new A.pM()
B.bE=new A.ku()
B.kB=new A.cR(0,"position")
B.kG=new A.bo(B.kB,0,3)
B.d7=new A.cR(1,"normal")
B.kH=new A.bo(B.d7,3,3)
B.kC=new A.cR(2,"color")
B.kI=new A.bo(B.kC,6,4)
B.kD=new A.cR(4,"alpha")
B.kJ=new A.bo(B.kD,10,1)
B.kE=new A.cR(5,"uv0")
B.kK=new A.bo(B.kE,11,2)
B.kF=new A.cR(8,"legacyMaterialEffect")
B.kL=new A.bo(B.kF,13,1)
B.R=s([B.kG,B.kH,B.kI,B.kJ,B.kK,B.kL],A.a1("u<bo>"))
B.a2=new A.qK()
B.bF=new A.kX()
B.v=new A.la()
B.aj=new A.lk()
B.a3=new A.f_(0,"colorOnly")
B.bG=new A.f_(1,"colorAndDepth")
B.aH=new A.f_(2,"depthOnly")
B.aI=new A.iX(1,"srgb")
B.ak=new A.j2(1,"back")
B.al=new A.j4(0,"less")
B.am=new A.bC(0,"open")
B.bH=new A.bC(1,"chain")
B.bI=new A.bC(2,"throughDoor")
B.bJ=new A.bC(3,"letterbox")
B.a4=new A.bC(4,"ignore")
B.P=new A.f3(0,"opaque")
B.dW=new A.f3(1,"masked")
B.aJ=new A.f3(2,"blended")
B.dX=new A.f4(!1,B.al,!1,!0,B.a0,B.a0,B.ai,!1,B.ak,!0,!1,!0,!0,!0,!0,!1)
B.dY=new A.f4(!0,B.al,!1,!0,B.a0,B.a0,B.ai,!0,B.ak,!0,!1,!0,!0,!0,!0,!1)
B.dz=new A.e5(2,"srcAlpha")
B.dA=new A.e5(3,"oneMinusSrcAlpha")
B.dZ=new A.f4(!0,B.al,!1,!0,B.dz,B.dA,B.ai,!0,B.ak,!0,!1,!0,!0,!0,!0,!1)
B.e_=new A.dA(0)
B.e0=new A.dA(24e5)
B.bK=new A.c4(0,"compliance")
B.e1=new A.f5(B.bK)
B.bL=new A.c4(1,"rupture")
B.e2=new A.f5(B.bL)
B.bM=new A.c4(2,"synchronisation")
B.e3=new A.f5(B.bM)
B.bN=new A.e9(0,"front")
B.e4=new A.e9(1,"rearService")
B.e5=new A.e9(2,"sideBoundary")
B.e6=new A.e9(3,"roofline")
B.l=new A.dB(0,"north")
B.w=new A.dB(1,"east")
B.m=new A.dB(2,"south")
B.I=new A.dB(3,"west")
B.an=new A.h3(0,"ground")
B.ao=new A.h3(1,"first")
B.e7=new A.dC(0,"mantle")
B.e8=new A.dC(1,"portal")
B.ea=new A.dC(3,"inventory")
B.eb=new A.dC(4,"none")
B.ec=new A.ea(B.eb,null)
B.e9=new A.dC(2,"window")
B.ed=new A.ea(B.e9,"the shutter")
B.ee=new A.H("saved mantle history is malformed",null,null)
B.ef=new A.H("rupture elapsed time is malformed",null,null)
B.eg=new A.H("presentation keys must be strings",null,null)
B.eh=new A.H("unsupported accessibility profile",null,null)
B.ei=new A.H("inventory inspections must be an object",null,null)
B.bO=new A.H("saved mantle state is malformed",null,null)
B.ej=new A.H("inactive rupture has elapsed time",null,null)
B.ek=new A.H("control sensitivity is outside 0.1\u20133.0",null,null)
B.el=new A.H("invalid action bindings",null,null)
B.em=new A.H("listener room is empty",null,null)
B.en=new A.H("control bindings conflict",null,null)
B.eo=new A.H("saved difficulty state is malformed",null,null)
B.ep=new A.H("saved house drift state is malformed",null,null)
B.eq=new A.H("saved sleep record is malformed",null,null)
B.er=new A.H("UI scale must be between 0.8 and 2.0",null,null)
B.es=new A.H("unsupported settings store",null,null)
B.et=new A.H("settings values must be an object",null,null)
B.eu=new A.H("saved day-loop sleepHistory must be a list",null,null)
B.ev=new A.H("invalid anisotropy limit",null,null)
B.ew=new A.H("audio event position is not finite",null,null)
B.ex=new A.H("event sequence must be non-negative",null,null)
B.ey=new A.H("inventory inspection counts are invalid",null,null)
B.ez=new A.H("modelScale must be positive and finite",null,null)
B.eA=new A.H("listener position is not finite",null,null)
B.eB=new A.H("invalid action ID",null,null)
B.eC=new A.H("saved window state is malformed",null,null)
B.eD=new A.H("unsupported graphics preset",null,null)
B.eE=new A.H("save run and meta must be objects",null,null)
B.eF=new A.H("saved house state is malformed",null,null)
B.eG=new A.H("saved sleep record must be an object",null,null)
B.eH=new A.H("sound cue must be a non-empty string",null,null)
B.eI=new A.H("saved session run is malformed",null,null)
B.eJ=new A.H("save map keys must be strings",null,null)
B.eK=new A.H("unsupported graphics profile",null,null)
B.eL=new A.H("unsupported audio options",null,null)
B.eM=new A.H("transform.scale must be positive",null,null)
B.eN=new A.H("Escape is reserved for pause navigation",null,null)
B.eO=new A.H("saved day-loop state is malformed",null,null)
B.eP=new A.H("rupture extinguished mantle is unknown",null,null)
B.bP=new A.H("unsupported controls profile",null,null)
B.bQ=new A.H("saved portal state is malformed",null,null)
B.eQ=new A.H("acoustic portal profile is not finite",null,null)
B.eR=new A.H("saved house state does not match this house",null,null)
B.eS=new A.H("presentation snapshot contains a non-finite number",null,null)
B.eT=new A.H("save contains a non-finite number",null,null)
B.eU=new A.H("unsupported graphics store",null,null)
B.eV=new A.H("brush component needs an id and label",null,null)
B.eW=new A.H("text.json root must be an object",null,null)
B.eX=new A.H("event kind is empty",null,null)
B.eY=new A.H("invalid control binding token",null,null)
B.eZ=new A.H("unsupported settings profile",null,null)
B.f_=new A.H("saved session clock is malformed",null,null)
B.f0=new A.H("rupture mantle IDs are malformed",null,null)
B.f1=new A.H("invalid screen-reader verbosity",null,null)
B.f2=new A.H("saved sleep record has an unknown enum",null,null)
B.f3=new A.H("audio cue variants are empty",null,null)
B.f4=new A.H("save root must be an object",null,null)
B.f5=new A.H("audio event identity is empty",null,null)
B.f6=new A.H("render capabilities contain invalid limits",null,null)
B.f7=new A.H("saved house overrides are malformed",null,null)
B.Q=new A.dd(0,0,0)
B.ca=new A.dd(1,1,1)
B.hD=s([],t.dQ)
B.aT=s([],t.bH)
B.f8=new A.ji(B.Q,B.Q,0,1,B.ca,0,null,B.hD,B.aT)
B.bR=new A.aD(0,0,0)
B.f9=new A.eb(0,"idle")
B.ap=new A.eb(1,"active")
B.fa=new A.eb(2,"ended")
B.fb=new A.eb(3,"aborted")
B.bS=new A.f7(0,"outside")
B.fc=new A.f7(1,"intersects")
B.fd=new A.f7(2,"inside")
B.fe=new A.ed(0,"timeAdvanced")
B.ff=new A.ed(1,"dayEndReached")
B.fg=new A.ed(4,"slept")
B.fh=new A.ed(5,"complianceFloorTripped")
B.bT=new A.d7(0,"important")
B.bU=new A.cv(0,"pauseAndMute")
B.bV=new A.d8(0,"press")
B.bW=new A.d9(1,"spacious")
B.bX=new A.cw(1,"standard")
B.bY=new A.da(0,"toast")
B.bZ=new A.cx(1,"readable")
B.fs=new A.h4(0,"vertex")
B.c_=new A.h4(1,"indices")
B.c0=new A.jm(0,"staticDraw")
B.h=new A.h5(0,"ready")
B.a5=new A.h5(1,"lost")
B.ft=new A.ee(0,"color")
B.c1=new A.ee(1,"colorAndGlow")
B.fu=new A.ee(2,"colorDepthGlow")
B.aK=new A.ee(3,"depthOnly")
B.aq=new A.jo(1,"linear")
B.c2=new A.jp(0,"clampToEdge")
B.fv=new A.jn(1,1,1,!1,B.aq,B.aq,B.c2,1)
B.fw=new A.cz(0,"beforeShadow")
B.fx=new A.cz(2,"beforeDepth")
B.c3=new A.cz(3,"afterDepth")
B.c4=new A.cz(4,"beforeWorld")
B.fy=new A.cz(5,"afterWorld")
B.J=new A.cz(6,"afterResolve")
B.fz=new A.cz(9,"beforePresent")
B.c5=new A.c5(0,"readBeforeWrite")
B.fA=new A.c5(1,"duplicateWriter")
B.fB=new A.c5(2,"sampledMultisampledAttachment")
B.aL=new A.c5(3,"invalidResolve")
B.fC=new A.c5(4,"formatOrSizeMismatch")
B.fD=new A.c5(5,"unversionedReadWrite")
B.fE=new A.c5(6,"invalidHistoryRead")
B.fF=new A.c5(7,"dependencyCycle")
B.fG=new A.c5(8,"missingCapability")
B.c6=new A.ck(0,"high")
B.aM=new A.ck(1,"standard")
B.aN=new A.dD(1,B.aM,"auto",!1,"display","off","high")
B.ar=new A.dE(0,"player")
B.aO=new A.dE(1,"inserted")
B.c7=new A.dE(2,"warden")
B.c8=new A.ef(0,"wrongKind")
B.c9=new A.ef(1,"staleGeneration")
B.fJ=new A.ef(2,"doubleRelease")
B.as=new A.ef(3,"releasedResource")
B.fM=new A.cA("kitchen-range","settle")
B.fN=new A.cA("front-door-knocker","knock")
B.fO=new A.cA("cellar-drain","drip")
B.fP=new A.cA("bedroom-timber","creak")
B.fQ=new A.cA("kitchen-pipe","tick")
B.fR=new A.cA("bathroom-cistern","settle")
B.fS=new A.cA("landing-window","wind")
B.fT=new A.jz(1,"visitor")
B.fX=new A.ou(null)
B.fY=new A.ov(null)
B.fZ=new A.dd(0.34,0.39,0.5)
B.h_=new A.dd(0.012,0.016,0.028)
B.h0=new A.dd(0.008,0.012,0.024)
B.cb=s([0,2,2,3],t.t)
B.h1=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.fi=new A.d7(1,"always")
B.cc=s([B.bT,B.fi],A.a1("u<d7>"))
B.h2=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.E=new A.bl(0,"audio")
B.N=new A.hx(0,"level")
B.k_=new A.aV("master","Master",B.E,B.N,1,0,1,"audio")
B.k4=new A.aV("voice","Visitor voice",B.E,B.N,1,0,1,"audio")
B.jW=new A.aV("effects","Effects",B.E,B.N,1,0,1,"audio")
B.jX=new A.aV("ambience","House ambience",B.E,B.N,1,0,1,"audio")
B.k0=new A.aV("music","Music",B.E,B.N,1,0,1,"audio")
B.aw=new A.bl(1,"display")
B.k3=new A.aV("brightness","Display brightness",B.aw,B.N,1,0.6,1.4,"display")
B.ab=new A.hx(1,"toggle")
B.jZ=new A.aV("muted","Mute house audio",B.E,B.ab,!1,null,null,"audio")
B.X=new A.bl(2,"accessibility")
B.k1=new A.aV("mono","Mono-compatible mix",B.X,B.ab,!1,null,null,"audio")
B.jY=new A.aV("high-contrast","High-contrast interface",B.X,B.ab,!1,null,null,"display")
B.k2=new A.aV("strong-highlights","Strong focus highlights",B.X,B.ab,!1,null,null,"display")
B.C=s([B.k_,B.k4,B.jW,B.jX,B.k0,B.k3,B.jZ,B.k1,B.jY,B.k2],A.a1("u<aV>"))
B.x=s(["who","verb","object","place","time"],t.s)
B.h3=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.di=new A.d2(1,"strong")
B.aP=s([B.bq,B.di],A.a1("u<d2>"))
B.dv=new A.e4(0,"swap")
B.dw=new A.e4(1,"replace")
B.dx=new A.e4(2,"cancel")
B.h4=s([B.dv,B.dw,B.dx],A.a1("u<e4>"))
B.h6=s([2,5,9,12,16,19],t.t)
B.fj=new A.cv(1,"pauseOnly")
B.fk=new A.cv(2,"continuePlayback")
B.cd=s([B.bU,B.fj,B.fk],A.a1("u<cv>"))
B.h7=s(["uQuantizationBits","uDitherStrength"],t.s)
B.h9=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.ha=s([B.am,B.bH,B.bI,B.bJ,B.a4],A.a1("u<bC>"))
B.hb=s(["30","60","display"],t.s)
B.ag=new A.bU(0,"full")
B.bm=new A.bU(1,"compressed")
B.bn=new A.bU(2,"off")
B.ce=s([B.ag,B.bm,B.bn],A.a1("u<bU>"))
B.hc=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dn=new A.d3(1,"reduced")
B.aQ=s([B.aD,B.dn],A.a1("u<d3>"))
B.dj=new A.ct(0,"wide")
B.dk=new A.ct(2,"night")
B.aR=s([B.dj,B.br,B.dk],A.a1("u<ct>"))
B.hd=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.ho=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.hp=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fm=new A.d9(0,"compact")
B.cf=s([B.fm,B.bW],A.a1("u<d9>"))
B.kb=new A.bH(0,"long")
B.cX=new A.bH(1,"short")
B.cg=s([B.kb,B.cX],A.a1("u<bH>"))
B.F=new A.bF(0,"visual")
B.a7=new A.bF(1,"graphics")
B.at=new A.bF(2,"gameplay")
B.a8=new A.bF(3,"controls")
B.y=new A.bF(4,"audio")
B.z=new A.bF(5,"accessibility")
B.hr=s([B.F,B.a7,B.at,B.a8,B.y,B.z],A.a1("u<bF>"))
B.hs=s([2.1,4.2,6.3],t.n)
B.ht=s(["master","voice","effects","ambience","music"],t.s)
B.fp=new A.da(1,"detailed")
B.ch=s([B.bY,B.fp],A.a1("u<da>"))
B.hu=s(["res/house/house.json","assets/house/house.json"],t.s)
B.fH=new A.ck(2,"safe")
B.fI=new A.ck(3,"custom")
B.ci=s([B.c6,B.aM,B.fH,B.fI],A.a1("u<ck>"))
B.D=new A.c9(0,"inactive")
B.b8=new A.c9(2,"affineWarp")
B.b9=new A.c9(3,"vertexSnap")
B.ba=new A.c9(4,"tapeGiveup")
B.bb=new A.c9(5,"portalFail")
B.W=new A.c9(6,"lightsOut")
B.cj=s([B.D,B.a9,B.b8,B.b9,B.ba,B.bb,B.W],A.a1("u<c9>"))
B.hv=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.hw=s([B.ar,B.aO,B.c7],A.a1("u<dE>"))
B.hx=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.K=s([],t.hS)
B.hH=s([],t.iG)
B.hG=s([],t.dL)
B.hy=s([],A.a1("u<cl>"))
B.hA=s([],t.cs)
B.aS=s([],t.jc)
B.hC=s([],t.hU)
B.S=s([],t.aN)
B.hB=s([],t.u)
B.ck=s([],t.e_)
B.hz=s([],t.b2)
B.n=s([],t.s)
B.cl=s([],t.cF)
B.aU=s([],t.E)
B.hI=s([],t.t)
B.hJ=s([],t.dG)
B.fL=new A.h7(15,"kitchen",-0.3,0)
B.fK=new A.h7(19,"spare-room",0,0.3)
B.L=s([B.fL,B.fK],A.a1("u<h7>"))
B.hK=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.k8=new A.bm(0,"bed")
B.k9=new A.bm(1,"chair")
B.ka=new A.bm(2,"floor")
B.cm=s([B.k8,B.k9,B.ka],A.a1("u<bm>"))
B.hL=s(["high","medium","low"],t.s)
B.dl=new A.cj(1,"headphones")
B.dm=new A.cj(2,"speakers")
B.aV=s([B.bs,B.dl,B.dm,B.bt],A.a1("u<cj>"))
B.hM=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.fl=new A.d8(1,"hold")
B.cn=s([B.bV,B.fl],A.a1("u<d8>"))
B.b_=new A.cI(0,"root")
B.cB=new A.b9(0,"pauseMenu")
B.iO=new A.df(B.b_,B.cB,null)
B.hN=s([B.iO],t.eY)
B.df=new A.cs(0,"concise")
B.dg=new A.cs(2,"verbose")
B.aW=s([B.df,B.bp,B.dg],A.a1("u<cs>"))
B.fq=new A.cx(0,"instant")
B.fr=new A.cx(2,"slow")
B.co=s([B.fq,B.bZ,B.fr],A.a1("u<cx>"))
B.hO=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.hP=s([B.E,B.aw,B.X],A.a1("u<bl>"))
B.cp=s([B.l,B.w,B.m,B.I],A.a1("u<dB>"))
B.bc=new A.b2(0,"depthTest")
B.bd=new A.b2(1,"depthFunc")
B.be=new A.b2(2,"depthWrite")
B.bf=new A.b2(3,"blendEnable")
B.bg=new A.b2(4,"blendFunc")
B.bh=new A.b2(5,"blendEquation")
B.bi=new A.b2(6,"cullEnable")
B.bj=new A.b2(7,"cullFace")
B.d_=new A.b2(8,"frontFace")
B.kd=new A.b2(9,"stencilEnable")
B.cY=new A.b2(10,"colorMask")
B.cZ=new A.b2(11,"scissorEnable")
B.hQ=s([B.bc,B.bd,B.be,B.bf,B.bg,B.bh,B.bi,B.bj,B.d_,B.kd,B.cY,B.cZ],A.a1("u<b2>"))
B.hR=s(["off","fxaa","msaa2","msaa4"],t.s)
B.dT=new A.d5("A.J.",1.275)
B.dR=new A.d5("A.J.",1.53)
B.dU=new A.d5("A.J.",1.77)
B.dV=new A.d5("A.J.",2.025)
B.dS=new A.d5("A.J.",4.8)
B.hS=s([B.dT,B.dR,B.dU,B.dV,B.dS],t.hS)
B.hT=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.hU=s(["uBloomStrength"],t.s)
B.hV=s(["uLutSize","uStrength"],t.s)
B.hW=s([B.bK,B.bL,B.bM],A.a1("u<c4>"))
B.hX=s(["wall-plaster","grime"],t.s)
B.hY=s(["uTexelSize","uNear","uFar"],t.s)
B.cq=s(["uTexelStep"],t.s)
B.hZ=s(["uninitialized"],t.s)
B.fn=new A.cw(0,"minimal")
B.fo=new A.cw(2,"detailed")
B.cr=s([B.fn,B.bX,B.fo],A.a1("u<cw>"))
B.Z=new A.bT(0,"waiting")
B.ae=new A.bT(1,"atDoor")
B.af=new A.bT(2,"consulting")
B.az=new A.bT(3,"resolved")
B.i_=s([B.Z,B.ae,B.af,B.az],A.a1("u<bT>"))
B.iE={uAlbedo:0}
B.cs=new A.a7(B.iE,[0],t.I)
B.ik={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.ct=new A.a7(B.ik,[2,3,4,5,6],t.I)
B.iL={uSsaoRaw:0,uSceneDepth:1}
B.i0=new A.a7(B.iL,[0,1],t.I)
B.cA={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.hn=s(["KeyW"],t.s)
B.hm=s(["KeyS"],t.s)
B.he=s(["KeyA"],t.s)
B.hf=s(["KeyD"],t.s)
B.hg=s(["KeyE"],t.s)
B.hk=s(["KeyQ"],t.s)
B.hq=s(["ShiftLeft"],t.s)
B.h5=s(["ControlLeft"],t.s)
B.hl=s(["KeyR"],t.s)
B.hh=s(["KeyF"],t.s)
B.hi=s(["KeyJ"],t.s)
B.hj=s(["KeyL"],t.s)
B.h8=s(["Escape"],t.s)
B.i1=new A.a7(B.cA,[B.hn,B.hm,B.he,B.hf,B.hg,B.hk,B.hq,B.h5,B.hl,B.hh,B.hi,B.hj,B.h8],A.a1("a7<j,E<j>>"))
B.i2=new A.a7(B.cA,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.iI={uScene:0,uHistory:1}
B.i3=new A.a7(B.iI,[0,1],t.I)
B.ii={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.i4=new A.a7(B.ii,["d0e46c07727eb09ccb419171397d5121f11038e8","eda30086b3bf3ae25d2a207fc9861dfb87298dab","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.ix={aPosition:0,aUvMat:1}
B.cu=new A.a7(B.ix,[0,4],t.I)
B.iJ={uScene:0,uLut:1}
B.i5=new A.a7(B.iJ,[0,1],t.I)
B.iK={uSource:0}
B.cv=new A.a7(B.iK,[0],t.I)
B.iC={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.i6=new A.a7(B.iC,[0,1,2,3,4,5,6],t.I)
B.cw=new A.cy([B.F,"settings.visual",B.a7,"settings.graphics",B.at,"settings.gameplay",B.a8,"settings.controls",B.y,"settings.audio",B.z,"settings.accessibility"],t.iP)
B.aX=new A.cy([B.F,"visual",B.a7,"graphics",B.at,"gameplay",B.a8,"controls",B.y,"audio",B.z,"accessibility"],t.iP)
B.it={uSharp:0,uBlurred:1,uSceneDepth:2}
B.i7=new A.a7(B.it,[0,1,2],t.I)
B.iN={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.i8=new A.a7(B.iN,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.iF={uBloom:0}
B.i9=new A.a7(B.iF,[0],t.I)
B.iG={uSceneDepth:0}
B.ia=new A.a7(B.iG,[0],t.I)
B.iH={uScene:0}
B.ib=new A.a7(B.iH,[0],t.I)
B.T={}
B.cy=new A.a7(B.T,[],A.a1("a7<j,fR>"))
B.cx=new A.a7(B.T,[],t.p)
B.t=new A.a7(B.T,[],t.I)
B.ln=new A.a7(B.T,[],A.a1("a7<j,j?>"))
B.ic=new A.a7(B.T,[],A.a1("a7<@,@>"))
B.im={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.id=new A.a7(B.im,[0,1,2,3,4,5,6],t.I)
B.cC=new A.cJ(0,"resume")
B.cD=new A.cJ(1,"settings")
B.cE=new A.cJ(2,"controls")
B.cF=new A.cJ(3,"save")
B.cG=new A.cJ(4,"help")
B.cH=new A.cJ(5,"back")
B.ie=new A.cy([B.cC,"pause.resume",B.cD,"pause.settings",B.cE,"pause.controls",B.cF,"pause.save",B.cG,"pause.help",B.cH,"pause.back"],A.a1("cy<cJ,j>"))
B.iz={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.ig=new A.a7(B.iz,[0,1,2,3],t.I)
B.iM={uTex:0}
B.ih=new A.a7(B.iM,[0],t.I)
B.aY=new A.cy([B.a9,1,B.b8,1.5,B.b9,1.5,B.ba,2,B.bb,2,B.W,4],A.a1("cy<c9,A>"))
B.hE=s([],t.eY)
B.hF=s([],A.a1("u<b9>"))
B.aZ=new A.dJ(B.hE,B.hF,null)
B.b0=new A.cI(1,"settings")
B.iP=new A.cI(2,"visual")
B.iQ=new A.cI(3,"graphics")
B.iR=new A.cI(5,"controls")
B.iS=new A.cI(6,"audio")
B.iT=new A.cI(7,"accessibility")
B.a6=new A.b9(1,"settings")
B.iU=new A.b9(2,"journal")
B.iV=new A.b9(3,"sleep")
B.iW=new A.b9(4,"help")
B.iX=new A.b9(5,"visitor")
B.iY=new A.b9(6,"ending")
B.cI=new A.dK(0,"opened")
B.cJ=new A.dK(2,"backed")
B.cK=new A.dK(3,"resumed")
B.iZ=new A.dK(4,"dismissed")
B.U=new A.dK(5,"unchanged")
B.j_=new A.k_(0,1,null)
B.j0=new A.k3(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.b1=new A.eq(0,"safe")
B.b2=new A.eq(1,"standard")
B.b3=new A.eq(2,"high")
B.M=new A.aL(B.T,0,t.M)
B.au=new A.ep(B.b1,B.M)
B.iD={shadows:0}
B.jV=new A.aL(B.iD,1,t.M)
B.j2=new A.ep(B.b2,B.jV)
B.iq={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.jO=new A.aL(B.iq,5,t.M)
B.j3=new A.ep(B.b3,B.jO)
B.j1=new A.eq(4,"shipping")
B.is={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.jP=new A.aL(B.is,7,t.M)
B.lo=new A.ep(B.j1,B.jP)
B.j5=new A.az(0,1)
B.j6=new A.ah(0.46,0.44,0.48)
B.j7=new A.ah(0.46,0.25,0.2)
B.j8=new A.ah(0.48,0.4,0.34)
B.j9=new A.ah(0.31,0.25,0.23)
B.ja=new A.ah(0.42,0.44,0.43)
B.jb=new A.ah(0.43,0.38,0.43)
B.jc=new A.ah(0.37,0.33,0.31)
B.jd=new A.ah(0.34,0.32,0.29)
B.cM=new A.ah(0.38,0.25,0.19)
B.je=new A.ah(0.31,0.28,0.24)
B.jf=new A.ah(0.58,0.56,0.5)
B.jg=new A.ah(0.36,0.39,0.46)
B.jh=new A.ah(0.44,0.37,0.28)
B.ji=new A.ah(0.52,0.5,0.44)
B.jj=new A.ah(0.24,0.25,0.27)
B.jk=new A.ah(0.28,0.27,0.25)
B.jl=new A.ah(0.31,0.34,0.4)
B.jm=new A.ah(0.34,0.3,0.36)
B.jn=new A.ah(0.42,0.4,0.38)
B.jo=new A.ah(0.18,0.2,0.21)
B.jp=new A.ah(0.2,0.12,0.1)
B.jq=new A.ah(0.45,0.42,0.35)
B.jr=new A.ah(0.12,0.15,0.2)
B.js=new A.ah(0.34,0.36,0.45)
B.b4=new A.hs(0,"legacy")
B.cN=new A.es(0,"constructed")
B.A=new A.es(1,"ready")
B.av=new A.es(2,"lost")
B.cO=new A.es(3,"disposed")
B.lm=new A.j7(1,"errorsOnly")
B.jt=new A.k9(B.au,384,216,0)
B.b5=new A.et(0,"constructed")
B.ju=new A.et(1,"initializing")
B.b6=new A.et(2,"ready")
B.cP=new A.et(3,"contextLost")
B.i=new A.fg(0,"read")
B.j=new A.fg(1,"write")
B.G=new A.fg(2,"historyRead")
B.q=new A.hu(0,"rgba8")
B.jv=new A.aN("dofBlurH",B.q,192,108,1,0)
B.jw=new A.aN("dofBlurV",B.q,192,108,1,0)
B.jx=new A.aN("dofOutput",B.q,384,216,1,0)
B.cQ=new A.hu(2,"depth24")
B.jy=new A.aN("shadowMap",B.cQ,512,512,1,0)
B.jz=new A.aN("ssaoRaw",B.q,192,108,1,0)
B.jA=new A.aN("ssaoBlurred",B.q,192,108,1,0)
B.jB=new A.aN("gradeOutput",B.q,384,216,1,0)
B.jC=new A.aN("vhsOutput",B.q,384,216,1,0)
B.jD=new A.aN("sceneDepth",B.cQ,384,216,1,0)
B.jE=new A.aN("bloomBlurH",B.q,192,108,1,0)
B.jF=new A.aN("bloomBlurV",B.q,192,108,1,0)
B.jG=new A.aN("present",B.q,384,216,1,0)
B.b7=new A.aN("sceneColor",B.q,384,216,1,0)
B.jH=new A.aN("ps1Output",B.q,384,216,1,0)
B.jI=new A.eu(null,"save storage unavailable")
B.jJ=new A.eu(null,"save could not be recovered")
B.jK=new A.eu(null,null)
B.iv={WheelUp:0,WheelDown:1}
B.jL=new A.aL(B.iv,2,t.M)
B.ip={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.jM=new A.aL(B.ip,4,t.M)
B.iA={open:0,closed:1}
B.jN=new A.aL(B.iA,2,t.M)
B.io={Escape:0}
B.cR=new A.aL(B.io,1,t.M)
B.il={open:0,closed:1,mixed:2}
B.jQ=new A.aL(B.il,3,t.M)
B.iy={front:0,"rear-service":1}
B.jR=new A.aL(B.iy,2,t.M)
B.iB={overcast:0,rain:1}
B.jS=new A.aL(B.iB,2,t.M)
B.iw={Escape:0,Tab:1,F11:2}
B.cS=new A.aL(B.iw,3,t.M)
B.iu={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.jT=new A.aL(B.iu,5,t.M)
B.ir={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.aa=new A.aL(B.ir,7,t.M)
B.ij={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.jU=new A.aL(B.ij,9,t.M)
B.cV=new A.ev(2,"link")
B.k5=new A.hz(B.cV,"gl.createProgram() returned null")
B.cT=new A.ev(0,"vertex")
B.cU=new A.ev(1,"fragment")
B.cW=new A.ev(3,"validation")
B.k6=new A.hA(0,"full")
B.k7=new A.hA(2,"culled")
B.Y=new A.L(0,1,0)
B.ay=new A.L(0,-1,0)
B.kc=new A.bn(-1,B.Y,B.ay,B.ca,1,1,0.3,0.5)
B.d0=new A.dN(0,"resident")
B.d1=new A.dN(1,"pending")
B.d2=new A.dN(2,"missing")
B.d3=new A.dN(3,"evicted")
B.ad=new A.L(0,0,0)
B.j4=new A.k7(0,0,0,1)
B.B=new A.ko(B.ad,B.j4)
B.ke=A.cf("F5")
B.kf=A.cf("F6")
B.kg=A.cf("ng")
B.kh=A.cf("Ak")
B.ki=A.cf("Aw")
B.kj=A.cf("Ax")
B.kk=A.cf("Ay")
B.kl=A.cf("aa")
B.km=A.cf("F")
B.kn=A.cf("vg")
B.ko=A.cf("Bl")
B.kp=A.cf("Bm")
B.kq=A.cf("hG")
B.e=new A.cP(0,"float1")
B.ax=new A.cP(1,"float2")
B.o=new A.cP(2,"float3")
B.kr=new A.cP(3,"float4")
B.r=new A.cP(4,"mat4")
B.d4=new A.cP(5,"mat4Array")
B.bk=new A.z(B.e,0)
B.d5=new A.z(B.e,1)
B.O=new A.cP(6,"sampler")
B.u=new A.z(B.O,0)
B.ac=new A.z(B.O,1)
B.d6=new A.z(B.O,2)
B.ks=new A.z(B.O,3)
B.kt=new A.z(B.O,4)
B.ku=new A.z(B.O,5)
B.kv=new A.z(B.O,6)
B.kw=new A.qJ(!1)
B.kx=new A.L(0,0,1)
B.ky=new A.L(1,0,0)
B.kz=new A.L(1/0,1/0,1/0)
B.kA=new A.L(-1/0,-1/0,-1/0)
B.d8=new A.cR(6,"tangent4")
B.kM=new A.dR(0,"visitorAnswered")
B.d9=new A.dR(1,"visitorIgnored")
B.kN=new A.dR(2,"entryVerified")
B.kO=new A.dR(3,"entryContradicted")
B.kP=new A.dR(4,"exposureAccepted")
B.kR=new A.cS(1,"malformedDay")
B.kS=new A.cS(2,"malformedTier")
B.da=new A.cS(3,"missingTierLines")
B.a_=new A.cS(6,"invalidPhase")
B.kV=new A.be(B.a_,"No reaction is due.")
B.l2=new A.b3(B.kV)
B.l_=new A.be(B.a_,"The active visit cannot be chosen.")
B.l3=new A.b3(B.l_)
B.kW=new A.be(B.a_,"The active visit has no line to advance.")
B.l4=new A.b3(B.kW)
B.kU=new A.cS(5,"noActiveVisit")
B.kX=new A.be(B.kU,"There is no active visit.")
B.db=new A.b3(B.kX)
B.kZ=new A.be(B.a_,"A visit is already active.")
B.l5=new A.b3(B.kZ)
B.kT=new A.cS(4,"noArrival")
B.l1=new A.be(B.kT,"The authored arrival is missing.")
B.l6=new A.b3(B.l1)
B.kY=new A.be(B.a_,"That answer is not offered.")
B.l7=new A.b3(B.kY)
B.kQ=new A.cS(0,"missingCorpus")
B.l0=new A.be(B.kQ,"The authored visitor corpus is empty.")
B.l8=new A.b3(B.l0)
B.dc=new A.eB(1,"exact")
B.bo=new A.eB(2,"partial")
B.aA=new A.eB(3,"contradiction")
B.l9=new A.eB(0,"skipped")
B.la=new A.eA(B.l9,B.M)
B.lb=new A.eA(B.bo,B.M)
B.lc=new A.hN(B.S,!1)
B.ld=new A.hN(B.S,!0)
B.dd=new A.hQ(0,"horizontal")
B.le=new A.hQ(1,"vertical")
B.de=new A.hS(0,"horizontal")
B.lf=new A.hS(1,"vertical")
B.aB=new A.fr(0,"empty")
B.lg=new A.fr(1,"cpuReady")
B.aC=new A.fr(4,"released")})();(function staticFields(){$.rq=null
$.c1=A.e([],A.a1("u<F>"))
$.wV=null
$.pe=0
$.pf=A.Dp()
$.wo=null
$.wn=null
$.yN=null
$.yG=null
$.yV=null
$.ua=null
$.uh=null
$.w2=null
$.rE=A.e([],A.a1("u<E<F>?>"))
$.fF=null
$.iy=null
$.iz=null
$.vH=!1
$.an=B.v
$.xb=""
$.xc=null
$.x7=null
$.oZ=null
$.bY=A.a9()
$.cX=A.a9()
$.bw=null
$.lz=null
$.rR=A.a9()
$.C=A.a9()
$.bJ=A.a9()
$.aG=A.a9()
$.xJ=A.a9()
$.fG=null
$.X=A.a9()
$.fC=null
$.bg=A.a9()
$.W=A.a9()
$.vs=A.a9()
$.vD=null
$.bu=null
$.vv=!1
$.lG=!1
$.iw=B.aE
$.eL=B.ah
$.tY=!1
$.vW=!1
$.y6=null
$.ly=null
$.lv=null
$.xU=0
$.vJ=!1
$.y5=!1
$.vI=0
$.yc=0
$.dX=0
$.yC=!1
$.vx="booting"
$.c0=0
$.dZ=0
$.au="hall"
$.is=A.a9()
$.fx=A.a9()
$.bK=A.a9()
$.yb=null
$.vO=0
$.bh=null
$.iC=!1
$.cW=A.a9()
$.it=A.a9()
$.ir=A.a9()
$.lt=A.a9()
$.xK=A.a9()
$.xI=A.a9()
$.aF=A.a9()
$.rQ=A.a9()
$.iq=A.a9()
$.fz=A.a9()
$.iu=A.a9()
$.eK=A.a9()
$.fy=A.a9()
$.fw=A.a9()
$.io=A.a9()
$.ip=A.a9()
$.aH=A.a9()
$.ls=A.a9()
$.bq=A.a9()
$.u0=A.a5(t.S)
$.cY=A.e([],t.s)
$.vC=null
$.yw=!1
$.xN=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"F8","z5",()=>A.yM("_$dart_dartClosure"))
s($,"F7","cg",()=>A.yM("_$dart_dartClosure_dartJSInterop"))
s($,"FN","zr",()=>A.e([new J.jB()],A.a1("u<hw>")))
s($,"Fk","z7",()=>A.dl(A.qF({
toString:function(){return"$receiver$"}})))
s($,"Fl","z8",()=>A.dl(A.qF({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Fm","z9",()=>A.dl(A.qF(null)))
s($,"Fn","za",()=>A.dl(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fq","zd",()=>A.dl(A.qF(void 0)))
s($,"Fr","ze",()=>A.dl(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fp","zc",()=>A.dl(A.x8(null)))
s($,"Fo","zb",()=>A.dl(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ft","zg",()=>A.dl(A.x8(void 0)))
s($,"Fs","zf",()=>A.dl(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Fu","wc",()=>A.BH())
s($,"Fy","zk",()=>A.AP(4096))
s($,"Fw","zi",()=>new A.rN().$0())
s($,"Fx","zj",()=>new A.rM().$0())
s($,"Fv","zh",()=>A.AO(A.a0(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"FH","fN",()=>A.lM(B.km))
s($,"Fi","wb",()=>{A.B1()
return $.pe})
s($,"F4","z4",()=>B.b7.iQ())
s($,"Fd","wa",()=>A.jY(A.e([255,255,255,255],t.t)))
s($,"Fa","w7",()=>A.jY(A.e([128,128,255,255],t.t)))
s($,"F9","w6",()=>A.jY(A.e([0,0,0,255],t.t)))
s($,"Fb","w8",()=>A.jY(A.e([255,255,0,255],t.t)))
s($,"Fc","w9",()=>A.jY(A.e([255,255,255,255],t.t)))
s($,"FP","zt",()=>A.hJ(0,1,0))
s($,"FO","zs",()=>A.B3("^[a-z0-9][a-z0-9._-]*$"))
s($,"FS","fP",()=>{var q=$.x7
if(q==null){A.u7()
A.u7()
A.u7()
A.u7()
q=$.x7=new A.qu()}return q})
s($,"Fe","z6",()=>A.wz(B.bT,!0,B.bU,B.bV,B.bW,B.bX,B.bY,B.bZ))
s($,"FE","zl",()=>new A.mx())
r($,"yA","d0",()=>A.vd(null,null))
r($,"tG","wg",()=>A.js(null,null))
r($,"vB","lN",()=>A.f2(null,null,!1,1,!1,!1,2,1))
s($,"FI","zo",()=>new A.nR())
s($,"FJ","zp",()=>new A.o_())
s($,"FK","uS",()=>new A.oi(A.o(t.N,t.S)))
s($,"FF","zm",()=>A.dQ().gaR().h(0,"debugPause")==="1")
s($,"FD","iE",()=>A.dQ().gaR().h(0,"automation")==="1")
s($,"FA","uR",()=>A.DD())
s($,"Fz","wd",()=>$.uR()!=null)
s($,"FB","we",()=>$.iE()?A.dQ().gaR().h(0,"captureMantleId"):null)
s($,"FC","wf",()=>A.dQ().gaR().h(0,"captureMantleLit")==="1")
r($,"vR","eP",()=>A.hJ(0,0,0))
r($,"vM","zq",()=>A.hJ(0,0,0))
r($,"vX","iF",()=>A.hJ(0,0,0))
s($,"FG","zn",()=>A.hJ(12.9375,1.65,0.825))
s($,"FL","lO",()=>new A.nh(A.hJ(0,0,0)))
s($,"FM","fO",()=>new A.p2(B.aZ))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dI,ArrayBuffer:A.fc,ArrayBufferView:A.hi,DataView:A.jR,Float32Array:A.hf,Float64Array:A.jS,Int16Array:A.jT,Int32Array:A.jU,Int8Array:A.jV,Uint16Array:A.jW,Uint32Array:A.jX,Uint8ClampedArray:A.en,CanvasPixelArray:A.en,Uint8Array:A.hj})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b0.$nativeSuperclassTag="ArrayBufferView"
A.i0.$nativeSuperclassTag="ArrayBufferView"
A.i1.$nativeSuperclassTag="ArrayBufferView"
A.hg.$nativeSuperclassTag="ArrayBufferView"
A.i2.$nativeSuperclassTag="ArrayBufferView"
A.i3.$nativeSuperclassTag="ArrayBufferView"
A.hh.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.ui
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
